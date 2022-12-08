import React from "react";
import { Carousel } from "react-responsive-carousel";
function Home() {
   return (
      <div>
         <div className="space-medium">
            <div className="container">
               <Carousel
                  showArrows={true}
                  onChange={() => {
                     console.log(">>ONCAHNGE", arguments);
                  }}
                  onClickItem={() => {
                     console.log(">>ONCLİCK", arguments);
                  }}
                  onClickThumb={() => {
                     console.log(">>ONCLİCKTHUMP", arguments);
                  }}
               >
                  <div>
                     <img src="/images/slider_1.jpg" />
                     <p className="legend">Legend 1</p>
                  </div>
                  <div>
                     <img src="/images/slider_2.jpg" />
                     <p className="legend">Legend 1</p>
                  </div>
                  <div>
                     <img src="/images/slider_3.jpg" />
                     <p className="legend">Legend 1</p>
                  </div>
               </Carousel>
            </div>
         </div>
         <div className="space-medium">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                     <div className="showcase-block">
                        <div className="display-logo ">
                           <a href="#">
                              <img src="images/nexus.png" alt="" />
                           </a>
                        </div>
                        <div className="showcase-img">
                           <a href="#">
                              <img src="images/display_img_1.png" alt="" />
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                     <div className="showcase-block active">
                        <div className="display-logo alignleft">
                           <a href="#">
                              <img src="images/iphone.png" alt="" />
                           </a>
                        </div>
                        <div className="showcase-img">
                           <a href="#">
                              <img
                                 src="images/display_img_2.png"
                                 alt=""
                                 style={{ paddingLeft: "80px" }}
                              />
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                     <div className="showcase-block ">
                        <div className="display-logo ">
                           <a href="#">
                              <img src="images/samsung.png" alt="" />
                           </a>
                        </div>
                        <div className="showcase-img">
                           <a href="#">
                              <img src="images/display_img_3.png" alt="" />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="showcase-block">
                        <div className="display-logo ">
                           <a href="#">
                              <img src="images/htc.png" alt="" />
                           </a>
                        </div>
                        <div className="showcase-img">
                           <a href="#">
                              <img src="images/display_img_4.png" alt="" />
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="showcase-block">
                        <div className="display-logo">
                           <a href="#">
                              <img src="images/alcatel.png" alt="" />
                           </a>
                        </div>
                        <div className="showcase-img">
                           <a href="#">
                              <img src="images/display_img_5.png" alt="" />
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="showcase-block">
                        <div className="display-logo ">
                           <a href="#">
                              <img src="images/pixel.png" alt="" />
                           </a>
                        </div>
                        <div className="showcase-img">
                           <a href="#">
                              <img src="images/display_img_6.png" alt="" />
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="showcase-block">
                        <div className="display-logo ">
                           <a href="#">
                              <img src="images/vivo.png" alt="" />
                           </a>
                        </div>
                        <div className="showcase-img">
                           <a href="#">
                              <img src="images/display_img_7.png" alt="" />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="container">
            <div class="row">
               <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="box">
                     <div class="box-head">
                        <h3 class="head-title">Latest Product</h3>
                     </div>
                     <div class="box-body">
                        <div class="row">
                           <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                              <div class="product-block">
                                 <div class="product-img">
                                    <img
                                       src="images/product_img_1.png"
                                       alt=""
                                    />
                                 </div>
                                 <div class="product-content">
                                    <h5>
                                       <a href="#" class="product-title">
                                          Google Pixel{" "}
                                          <strong>(128GB, Black)</strong>
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
                                       <a href="#" class="product-btn btn-like">
                                          <i class="fa fa-heart"></i>
                                       </a>
                                       <a href="#" class="product-btn btn-cart">
                                          <i class="fa fa-shopping-cart"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                              <div class="product-block">
                                 <div class="product-img">
                                    <img
                                       src="images/product_img_2.png"
                                       alt=""
                                    />
                                 </div>
                                 <div class="product-content">
                                    <h5>
                                       <a href="#" class="product-title">
                                          HTC U Ultra{" "}
                                          <strong>(64GB, Blue)</strong>
                                       </a>
                                    </h5>
                                    <div class="product-meta">
                                       <a href="#" class="product-price">
                                          $1200
                                       </a>
                                       <a href="#" class="discounted-price">
                                          $1700
                                       </a>
                                       <span class="offer-price">10%off</span>
                                    </div>
                                    <div class="shopping-btn">
                                       <a href="#" class="product-btn btn-like">
                                          <i class="fa fa-heart"></i>
                                       </a>
                                       <a href="#" class="product-btn btn-cart">
                                          <i class="fa fa-shopping-cart"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                              <div class="product-block">
                                 <div class="product-img">
                                    <img
                                       src="images/product_img_3.png"
                                       alt=""
                                    />
                                 </div>
                                 <div class="product-content">
                                    <h5>
                                       <a href="#" class="product-title">
                                          Samsung Galaxy Note 8
                                       </a>
                                    </h5>
                                    <div class="product-meta">
                                       <a href="#" class="product-price">
                                          $1500
                                       </a>
                                       <a href="#" class="discounted-price">
                                          $2000
                                       </a>
                                       <span class="offer-price">40%off</span>
                                    </div>
                                    <div class="shopping-btn">
                                       <a href="#" class="product-btn btn-like">
                                          <i class="fa fa-heart"></i>
                                       </a>
                                       <a href="#" class="product-btn btn-cart">
                                          <i class="fa fa-shopping-cart"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                              <div class="product-block">
                                 <div class="product-img">
                                    <img
                                       src="images/product_img_4.png"
                                       alt=""
                                    />
                                 </div>
                                 <div class="product-content">
                                    <h5>
                                       <a href="#" class="product-title">
                                          Vivo V5 Plus{" "}
                                          <strong>(Matte Black)</strong>
                                       </a>
                                    </h5>
                                    <div class="product-meta">
                                       <a href="#" class="product-price">
                                          $1500
                                       </a>
                                       <a href="#" class="discounted-price">
                                          $2000
                                       </a>
                                       <span class="offer-price">15%off</span>
                                    </div>
                                    <div class="shopping-btn">
                                       <a href="#" class="product-btn btn-like">
                                          <i class="fa fa-heart"></i>
                                       </a>
                                       <a href="#" class="product-btn btn-cart">
                                          <i class="fa fa-shopping-cart"></i>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="bg-default pdt40 pdb40">
            <div class="container">
               <div class="row">
                  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div class="feature-left">
                        <div class="feature-outline-icon">
                           <i class="fa fa-credit-card"></i>
                        </div>
                        <div class="feature-content">
                           <h3 class="text-white">Safe Payment</h3>
                           <p>
                              Praesent orci dolor, pretium vitae hendrerit
                              convallisutes orcgravida bibendum.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div class="feature-left">
                        <div class="feature-outline-icon">
                           <i class="fa fa-users"></i>
                        </div>
                        <div class="feature-content">
                           <h3 class="text-white">24/7 Help Center</h3>
                           <p>
                              Aliquam molestie urnased one pharetra vestibulum
                              Interdum et malesuada fames.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div class="feature-left feature-circle">
                        <div class="feature-outline-icon">
                           <i class="fa fa-rotate-left "></i>
                        </div>
                        <div class="feature-content">
                           <h3 class="text-white">Free &amp; Easy Return</h3>
                           <p>
                              Vivamus semper nisnesbla accumsan dui justo esw
                              finibus turpis serom.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div class="feature-left">
                        <div class="feature-outline-icon">
                           <i class="fa fa-dollar"></i>
                        </div>
                        <div class="feature-content">
                           <h3 class="text-white">Great Value</h3>
                           <p>
                              Morbi necmi turpiulm tristiq ueipsm inodiopharetr
                              amal esuat erdumetalesuada.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
