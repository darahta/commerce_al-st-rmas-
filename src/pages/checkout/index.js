import Breadcrumb from "../../components/breadcrumb";

function Checkout() {
   const breadcrumbs = [
      {
         title: "Home",
         href: "/",
      },
      {
         title: "Cart",
         href: "/cart",
      },
      {
         title: "Checkout",
         href: "/checkout",
      },
   ];
   return (
      <div>
         <Breadcrumb items={breadcrumbs} />

         <div class="content">
            <div class="container">
               <div class="row">burası chckeolut</div>
            </div>
         </div>
      </div>
   );
}
export default Checkout;
