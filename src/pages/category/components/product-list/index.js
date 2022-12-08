import ProductItem from "../product-item";

function ProductList(props) {
   console.log("Product List", props.product);
   const productComponents = [];

   props.product.map((item, index) => {
      productComponents.push(<ProductItem key={index} product={item} />);
   });

   return (
      <div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
         <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb10 alignright">
               <form>
                  <div class="select-option form-group">
                     <select name="select" class="form-control">
                        <option value="">Select</option>
                        <option value="">Best Match</option>
                        <option value="">Low Price</option>
                        <option value="">High Price</option>
                     </select>
                  </div>
               </form>
            </div>
         </div>
         <div className="row">{productComponents}</div>
         <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div class="st-pagination">
                  <ul class="pagination">
                     <li>
                        <a href="#" aria-label="previous">
                           <span aria-hidden="true">Previous</span>
                        </a>
                     </li>
                     <li class="active">
                        <a href="#">1</a>
                     </li>
                     <li>
                        <a href="#">2</a>
                     </li>
                     <li>
                        <a href="#">3</a>
                     </li>
                     <li>
                        <a href="#" aria-label="Next">
                           <span aria-hidden="true">Next</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductList;
