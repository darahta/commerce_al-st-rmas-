import Header from "./components/header";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/category";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./hooks/useApi";
import { setCategories } from "./redux/categorySlice";
import { setTokenValue } from "./redux/cartSlice";
import { updateFullCart } from "./redux/cartSlice";

function App() {
   const authState = useSelector((state) => state.authState);
   const categoryState = useSelector((state) => state.categoryState);
   const cartState = useSelector((state) => state.cartState);

   console.log(">>CATEGORYSTATE", categoryState);
   console.log(">>AUTH STATE", authState);

   const dispatch = useDispatch();
   const api = useApi();

   if (!cartState.tokenValue) {
      const postData = {
         localeCode: "en_US",
      };

      api.post("shop/orders", postData)

         .then((response) => {
            console.log("shop/orders", response);

            dispatch(
               setTokenValue({
                  tokenValue: response.data.tokenValue,
               })
            );
         })
         .catch((err) => {
            console.log("shop/orders", err);
         });
   } else if (!cartState.id) {
      api.get(`shop/orders/${cartState.tokenValue}`).then((response) => {
         dispatch(updateFullCart(response.data));
      });
   }

   // if (authState.token && authState.customerId && !authState.customerDetails) {
   //     api.get("shop/customers/" + authState.customerId)
   //        .then((response) => {
   //            console.log("customer detail response", response);
   //        })
   //         .catch((err) => {
   //          console.log("errr", err);
   //       });
   //   }
   //
   if (categoryState.categories === null) {
      api.get("shop/taxons")
         .then((response) => {
            console.log("response", response);
            dispatch(
               setCategories({
                  categories: response.data,
               })
            );
         })
         .catch((err) => {
            console.log("err", err);
         });
   }

   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="category/:taxon_code" element={<Category />} />
               <Route path="auth/login" element={<Login />} />
               <Route path="auth/register" element={<Register />} />
               <Route path="cart" element={<Cart />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
}

export default App;
