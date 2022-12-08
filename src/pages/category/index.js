import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import SideBarSearch from "../../components/side-bar-search";
import useApi from "../../hooks/useApi";
import ProductList from "./components/product-list";

function Category(props) {
   const params = useParams();
   const api = useApi();
   const [product, setProduct] = useState([]);

   useEffect(() => {
      const urlQueryData = {};
      urlQueryData["productTaxons.taxon.code"] = params.taxon_code;
      urlQueryData["order[code]"] = "asc";
      urlQueryData["order[createAt]"] = "acs";

      api.get("shop/products", { params: urlQueryData })
         .then((response) => {
            console.log(">>Product response", response);
            setProduct(response.data);
         })
         .catch((err) => {
            console.log("err", err);
         });
   }, []);

   const breadcrumbs = [
      {
         title: "Home",
         href: "/",
      },
      {
         title: "Home",
         href: "/category",
      },
      {
         title: params.taxon_code,
         href: "/category/" + params.taxon_code,
      },
   ];

   return (
      <div>
         <Breadcrumb items={breadcrumbs} />

         <div class="content">
            <div class="container">
               <div class="row">
                  <SideBarSearch />
                  <ProductList product={product} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Category;
