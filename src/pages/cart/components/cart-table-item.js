import { useDispatch, useSelector } from "react-redux";
import useApi from "../../../hooks/useApi";
import { updateFullCart } from "../../../redux/cartSlice";

function CartTableItem(props) {
   const cartState = useSelector((state) => state.cartState);
   const api = useApi();
   const dispatch = useDispatch();

   console.log(">>Cart State", cartState);
   console.log(">>Cart Table Item Props", props);

   cartState.items.map((item, index) => {
      const productVariant = item.variant.replace(
         "/api/v2/shop/product-variants/",
         ""
      );

      api.get(`shop/product-variants/${productVariant}`)
         .then((productVariantResponse) => {
            console.log(">>product variant response", productVariantResponse);
            api.get(`shop/product-images/${productVariantResponse.data.id}`)
               .then((productImageResponse) => {
                  console.log("Product item response", productImageResponse);
               })
               .catch((err) => {
                  console.log("err", err);
               });
         })
         .catch((err) => {
            console.log(err);
         });
   });

   const onQuantityChange = (event) => {
      console.log(">> on quantity change", event.target.value);

      const patchData = {
         quantity: parseInt(event.target.value),
      };

      const patchApi = api.create({
         baseURL: api.defaults.baseURL,
         headers: {
            "content-type": "application/merge-patch+json",
            accept: "application/json",
            Authorization: api.defaults.headers.common["Authorization"],
         },
      });

      patchApi
         .patch(
            `shop/orders/${cartState.tokenValue}/items/${props.id}`,
            patchData
         )
         .then((response) => {
            console.log(">>patch response", response);
            dispatch(updateFullCart(response.data));
         })
         .catch((err) => {
            console.log("err", err);
         });
   };

   const onDeleteButtonClick = (event) => {
      api.delete(`shop/orders/${cartState.tokenValue}/items/${props.id}`)
         .then((response) => {
            console.log(">>Delete response", response);

            api.get(`shop/orders/${cartState.tokenValue}`).then((response) => {
               dispatch(updateFullCart(response.data));
            });
         })
         .catch((err) => {
            console.log("err", err);
         });
   };

   return (
      <tr>
         <td>
            <a href="#">
               <img src="/images/cart_product_1.png" alt="" />
            </a>
            <span>
               <a href="#">{props.productName}</a>
            </span>
         </td>
         <td>
            {props.unitPrice}
            &nbsp;
            {cartState.currencyCode}
         </td>
         <td>
            <div class="product-quantity">
               <div class="quantity">
                  <input
                     onChange={onQuantityChange}
                     type="number"
                     class="input-text qty text"
                     step="1"
                     min="1"
                     max="10"
                     name="quantity"
                     defaultValue={props.quantity}
                     title="Qty"
                     size="4"
                     pattern="[0-9]*"
                  />
               </div>
            </div>
         </td>
         <td>
            {props.subtotal}
            &nbsp;
            {cartState.currencyCode}
         </td>
         <th scope="row">
            <button
               onClick={onDeleteButtonClick}
               href="#"
               class="btn-close btn-link"
            >
               <i class="fa fa-times-circle-o"></i>
            </button>
         </th>
      </tr>
   );
}

export default CartTableItem;
