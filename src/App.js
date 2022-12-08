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

function App() {
   const categoryState = useSelector((state) => state.categoryState);
   console.log(">>CATEGORYSTATE", categoryState);
   const dispatch = useDispatch();
   const api = useApi();

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
         <Header />
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="category/:taxon_code" element={<Category />} />
               <Route path="auth/login" element={<Login />} />
               <Route path="auth/register" element={<Register />} />
               <Route path="cart" element={<Cart />} />
            </Routes>
         </BrowserRouter>
         <Footer />
      </>
   );
}

export default App;
