import React from "react";

function Breadcrumb(props) {
   console.log(">>BREAD", props);

   return (
      <div class="page-header">
         <div class="container">
            <div class="row">
               <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="page-breadcrumb">
                     <ol class="breadcrumb">
                        {props.items.map((item, index) => {
                           return (
                              <li key={index}>
                                 <a href={item.href}>{item.title}</a>
                              </li>
                           );
                        })}
                     </ol>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Breadcrumb;
