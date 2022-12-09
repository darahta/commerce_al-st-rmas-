import { useDispatch, useSelector } from "react-redux";
import useApi from "../../../../hooks/useApi";
import { updateFullCart } from "../../../../redux/cartSlice";

function ProductItem(props) {
   const dispatch = useDispatch();
   const cartState = useSelector((state) => state.cartState);
   const api = useApi();

   console.log(">>PRODUCT ITEMs PROP", props);

   const onAddToCartButtonClick = (event) => {
      event.preventDefault();
      console.log(">>Product details", props.product);

      const productVariant = props.product.defaultVariant.replace(
         "/api/v2/shop/product-variants/",
         ""
      );

      const postData = {
         productVariant: productVariant,
         quantity: 1,
      };

      api.post(`shop/orders/${cartState.tokenValue}/items`, postData)
         .then((response) => {
            console.log(">>Cart Item Add Response", response);
            dispatch(updateFullCart(response.data));
         })
         .catch((err) => {});
   };

   return (
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
         <div class="product-block">
            <div class="product-img">
               <img
                  src={
                     "https://ecommerce-api.udemig.dev" +
                     props.product.images[0].path
                  }
                  alt=""
               />
            </div>
            <div class="product-content">
               <h5>
                  <a href="#" class="product-title">
                     {props.product.name}
                     <br />
                  </a>
               </h5>
               <div class="product-meta">
                  <a href="#" class="product-price">
                     $1100
                  </a>
                  <a href="#" class="discounted-price">
                     $1400
                  </a>
                  <span class="offer-price">20%off</span>
               </div>
               <div class="shopping-btn">
                  <a
                     href="#"
                     onClick={onAddToCartButtonClick}
                     class="product-btn btn-cart"
                  >
                     <i class="fa fa-shopping-cart"></i>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductItem;
