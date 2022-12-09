function CartTableItem(props) {
   console.log(">>CARTTABLEITEM", props);

   const onQuantityChange = (event) => {
      console.log(">> on quantity change", event.target.value);
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
         <td>$1100</td>
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
         <td>$1100.00</td>
         <th scope="row">
            <button href="#" class="btn-close">
               <i class="fa fa-times-circle-o"></i>
            </button>
         </th>
      </tr>
   );
}

export default CartTableItem;
