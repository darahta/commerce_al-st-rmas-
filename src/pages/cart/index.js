import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTableItem from "./components/cart-table-item";

function Cart(props) {
   const cartState = useSelector((state) => state.cartState);

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
                                 <tbody>
                                    {cartTableItems}
                                    <tr>
                                       <td>
                                          <a href="#">
                                             <img
                                                src="/images/cart_product_1.png"
                                                alt=""
                                             />
                                          </a>
                                          <span>
                                             <a href="#">TEST PRODUCT ITEM 1</a>
                                          </span>
                                       </td>
                                       <td>$1100</td>
                                       <td>
                                          <div class="product-quantity">
                                             <div class="quantity">
                                                <input
                                                   type="number"
                                                   class="input-text qty text"
                                                   step="1"
                                                   min="1"
                                                   max="10"
                                                   name="quantity"
                                                   defaultValue="1"
                                                   title="Qty"
                                                   size="4"
                                                   pattern="[0-9]*"
                                                />
                                             </div>
                                          </div>
                                       </td>
                                       <td>$1100.00</td>
                                       <th scope="row">
                                          <a href="#" class="btn-close">
                                             <i class="fa fa-times-circle-o"></i>
                                          </a>
                                       </th>
                                    </tr>
                                    <tr>
                                       <td>
                                          <a href="#">
                                             <img
                                                src="/images/cart_product_2.png"
                                                alt=""
                                             />
                                          </a>
                                          <span>
                                             <a href="#">TEST PRODUCT ITEM 2</a>
                                          </span>
                                       </td>
                                       <td>$1300</td>
                                       <td>
                                          <div class="product-quantity">
                                             <div class="quantity">
                                                <input
                                                   type="number"
                                                   class="input-text qty text "
                                                   step="1"
                                                   min="1"
                                                   max="6"
                                                   name="quantity"
                                                   defaultValue="1"
                                                   title="Qty"
                                                   size="4"
                                                   pattern="[0-9]*"
                                                />
                                             </div>
                                          </div>
                                       </td>
                                       <td>$1300.00</td>
                                       <th scope="row">
                                          <a href="#" class="btn-close">
                                             <i class="fa fa-times-circle-o"></i>
                                          </a>
                                       </th>
                                    </tr>
                                 </tbody>
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
                                          <span>Price (2 items)</span>
                                       </th>
                                       <td>$2400</td>
                                    </tr>
                                    <tr>
                                       <th>
                                          <span>Delivery Charges</span>
                                       </th>
                                       <td>
                                          <strong class="text-green">
                                             Free
                                          </strong>
                                       </td>
                                    </tr>
                                 </tbody>
                                 <tbody>
                                    <tr>
                                       <th>
                                          <span
                                             class="mb0"
                                             style={{ fontWeight: "700" }}
                                          >
                                             Amount Payable
                                          </span>
                                       </th>
                                       <td
                                          style={{
                                             fontWeight: "700",
                                             color: "#1c1e1e",
                                          }}
                                       >
                                          $2400
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                           <button class="btn btn-primary btn-block">
                              Proceed To Checkout
                           </button>
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
