function ProductItem(props) {
   console.log(">>PRODUCT ITEMs PROP", props);

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
                  <a href="#" class="product-btn btn-cart">
                     <i class="fa fa-shopping-cart"></i>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductItem;
