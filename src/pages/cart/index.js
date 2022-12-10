import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTableItem from "./components/cart-table-item";

function Cart(props) {
   const cartState = useSelector((state) => state.cartState);

   if (cartState.id === null) {
      return (
         <div class="space-medium">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                     <strong>Loading...</strong>;
                  </div>
               </div>
            </div>
         </div>
      );
   }

   const cartTableItems = [];
   cartState.items.map((item, index) => {
      cartTableItems.push(<CartTableItem key={index} {...item} />);
   });
   return (
      <div class="space-medium">
         <div class="container">
            <div class="row">
               <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                  <div class="box">
                     <div class="box-head">
                        <h3 class="head-title">My Cart (02)</h3>
                     </div>

                     <div class="box-body">
                        <div class="table-responsive">
                           <div class="cart">
                              <table class="table table-bordered ">
                                 <thead>
                                    <tr>
                                       <th>
                                          <span>Item</span>
                                       </th>
                                       <th>
                                          <span>Price</span>
                                       </th>
                                       <th>
                                          <span>Quantity</span>
                                       </th>
                                       <th>
                                          <span>Total</span>
                                       </th>
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>{cartTableItems}</tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
                  <Link to="/" class="btn-link">
                     <i class="fa fa-angle-left"></i> back to shopping
                  </Link>
               </div>

               <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div class="box mb30">
                     <div class="box-head">
                        <h3 class="head-title">Price Details</h3>
                     </div>
                     <div class="box-body">
                        <div class=" table-responsive">
                           <div class="pay-amount ">
                              <table class="table mb20">
                                 <tbody>
                                    <tr>
                                       <th>
                                          <span>
                                             Price ({cartState.items.length}
                                             items)
                                          </span>
                                       </th>
                                       <td>
                                          {cartState.items.reduce(
                                             (currentTotal, item) =>
                                                currentTotal + item.subtotal,
                                             0
                                          )}
                                          &nbsp;
                                          {cartState.currencyCode}
                                       </td>
                                    </tr>
                                    <tr>
                                       <th>
                                          <span>Tax Total</span>
                                       </th>
                                       <td>
                                          {cartState.taxTotal} &nbsp;
                                          {cartState.currencyCode}
                                       </td>

                                       <td></td>
                                    </tr>
                                    <tr>
                                       <th>
                                          <span>Delivery Charges</span>
                                       </th>
                                       {cartState.shippingTotal == 0 ? (
                                          <strong class="text-green">
                                             Free
                                          </strong>
                                       ) : (
                                          <>
                                             {cartState.shippingTotal}&nbsp;
                                             {cartState.currencyCode}
                                          </>
                                       )}
                                       <td></td>
                                    </tr>
                                 </tbody>
                                 <tbody>
                                    <tr>
                                       <th>
                                          <span
                                             class="mb0"
                                             style={{ fontWeight: "700" }}
                                          >
                                             Amount To Pay
                                          </span>
                                       </th>
                                       <td
                                          style={{
                                             fontWeight: "700",
                                             color: "#1c1e1e",
                                          }}
                                       >
                                          <>
                                             {cartState.total}&nbsp;
                                             {cartState.currencyCode}
                                          </>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                           <Link
                              to="/checkout"
                              class="btn btn-primary btn-block"
                           >
                              Proceed To Checkout
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Cart;
