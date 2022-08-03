<template>
   <div class="box-car-detail">
        <div class="modal  modal-downlad-invoice fade" id="modalDownloadInvoice" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" @click.self="closeModal()" >
                <div class="modal-dialog modal-dialog-centered .modal-lg">
                    <div class="modal-content modal-content-download">
                        
                        <div class="modal-body">
                            <img src="../assets/small_car_1.png" alt="" @click="go_to_page('gt')">
                            <img src="../assets/small_car_2.png" alt="" @click="go_to_page('zs')">
                            <img src="../assets/small_car_3.png" alt="" @click="go_to_page('hs')">
                        </div>
                    </div>
                </div>
        </div> 
        <div class="modal-backdrop fade show" id="backdrop"  style="display: none;" ></div>


        <TopHeader
        @modalsMenu="modalsMenuMg"/>
        <!-- MG 5 GT -->
        <div class="box-detail-video" v-if="car_id === 'gt'">
            <iframe width="100%" height="100%" class="youtube_detail" src="https://www.youtube.com/embed/h529sg3pEV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="slider-card" v-if="car_id === 'gt'">
            <div class="option-car">
                <p>MG 5 GT</p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#design" type="button" role="tab" aria-controls="profile" aria-selected="false">Design</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#performance" type="button" role="tab" aria-controls="contact" aria-selected="false">Performance</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#specification" type="button" role="tab" aria-controls="profile" aria-selected="false">Specification</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#price" type="button" role="tab" aria-controls="contact" aria-selected="false">Price</button>
                    </li>
                </ul>
            </div>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="home-tab">
                    <div class="box-tab-content">
                        <div class="car-detail-content">
                            <img src="../assets/detail_car_gt.png" alt="">
                        </div>
                        <p>MG 5 GT is full of sunshine, filled with energy, feel alive every moment with passion to share the happiness and joyous</p>
                        <p>Another Level of value lead your way</p>
                        <div class="brochure-card">
                            <div class="brochure-item">
                                <a href="">Test Drive new MG 5 GT</a>
                            </div>
                             <div class="brochure-item">
                                <a href="">Download Brochure</a>
                            </div>
                             <div class="brochure-item">
                                <a href="">Request a Quote</a>
                            </div>
                        </div>
                         <div class="car-detail-content-2">
                            <img src="../assets/dual_car_gt_detail.png" alt="">
                        </div>
                        <div class="card-exterior-detail">
                            <p>Refined Exterior Design</p>
                            <p>The new MG signature design of the Digital Flaming Grille, sharp lines, agility and sleek body of the Sporty British 4 Door Coupe design give it a sporty look on MG 5 GT. Two-tone Tomahawk alloy wheels and LED Projector Headlight headlamps also provide a sharper feel.</p>
                            <div class="card-performance">
                                <img src="../assets/gt_performance_detail.png" alt="">
                                <div class="performance-detail">
                                    <p>Performance</p>
                                    <p>Redefining the meaning of driving MG 5 GT</p>
                                    <div class="small-card-performance">
                                        <div class="item-card-small">
                                            <p>2680</p>
                                            <p>Wheelbase</p>
                                        </div>
                                        <div class="item-card-small">
                                            <p>114 PS</p>
                                            <p>Max Horsepower</p>
                                        </div>
                                        <div class="item-card-small">
                                            <p>150 NM</p>
                                            <p>Max Torque</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="design" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="box-design-content">
                        <div class="car-detail-content">
                            <img src="../assets/yellow_mg_exterior.png" alt="" v-if="gt_active_color === 'yellow'">
                            <img src="../assets/mg_gt/gt_metal.png" alt="" v-else-if="gt_active_color === 'metal'">
                            <img src="../assets/mg_gt/gt_black.png" alt=""  v-else-if="gt_active_color === 'black'">
                            <img src="../assets/mg_gt/gt_white.png" alt=""  v-else-if="gt_active_color === 'white'">
                            <img src="../assets/mg_gt/gt_red.png" alt=""  v-else-if="gt_active_color === 'red'">
                            
                        </div>
                        <div class="exterior-colour-box">
                            <div class="detail-exterior-colour">
                                <p>Exterior Colour</p>
                                <p>The details of the vehicle may vary, according to the actual sub-model</p>
                            </div>
                            <div class="box-color-option">
                                <div class="card-color" :class="{'active' : gt_active_color === 'yellow'}" @click="change_color('gt','yellow')">
                                    <div class="item-color " id="yellow">

                                    </div>
                                    <p>Light up Yellow</p>
                                </div>
                                <div class="card-color" :class="{'active' : gt_active_color === 'metal'}" @click="change_color('gt','metal')">
                                    <div class="item-color" id="metal">

                                    </div>
                                    <p>Metal Ash Gray</p>
                                </div>
                                <div class="card-color" :class="{'active' : gt_active_color === 'black'}" @click="change_color('gt','black')">
                                    <div class="item-color" id="black">

                                    </div>
                                    <p>Black Knight</p>
                                </div>
                                <div class="card-color" :class="{'active' : gt_active_color === 'white'}" @click="change_color('gt','white')">
                                    <div class="item-color" id="arctic">

                                    </div>
                                    <p>Arctic White</p>
                                </div>
                                <div class="card-color" :class="{'active' : gt_active_color === 'red'}" @click="change_color('gt','red')">
                                    <div class="item-color" id="red">

                                    </div>
                                    <p>Scarlet Red</p>
                                </div>
                            </div>
                        </div>
                        <div class="box-exterior-design">
                            <p>Exterior Design</p>
                            <div class="card-design-ext">
                                <div class="card-item-small-ext">
                                    <img src="../assets/exterior_gt/gt_front_exterior.png" alt="">
                                    <p>SHARK HUNTING FRONT FACE</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/exterior_gt/gt_second_exterior.png" alt="">
                                    <p>DIGITAL FLAMING GRILLE</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/exterior_gt/gt_led_exterior.png" alt="">
                                    <p>LED LEOPARD CLAW</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/exterior_gt/tone_gt_exterior.png" alt="">
                                    <p>TWO-TONE TOMAHAWK ALLOY WHEELS</p>
                                </div>
                            </div>
                        </div>
                        <div class="box-exterior-design">
                            <p>Interior  Design</p>
                            <div class="card-design-ext">
                                <div class="card-item-small-ext">
                                    <img src="../assets/exterior_gt/sunroof.png" alt="">
                                    <p>ELECTRIC SUNROOF</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/exterior_gt/cabin.png" alt="">
                                    <p>SPACIOUS SPORTY CABIN</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/exterior_gt/10inch.png" alt="">
                                    <p>10 INCH INFOTAINMENT SYSTEM</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/exterior_gt/cluster.png" alt="">
                                    <p>7 INCH DIGITAL INSTRUMENT CLUSTER</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="tab-pane fade" id="performance" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="box-performance-content">
                        <div class="car-detail-content">
                            <img src="../assets/car_performance.png" alt="">
                        </div>
                        <div class="small-card-performance">
                            <div class="item-card-small">
                                <p>2680</p>
                                <p>Wheelbase</p>
                            </div>
                            <div class="item-card-small">
                                <p>114 PS</p>
                                <p>Max Horsepower</p>
                            </div>
                            <div class="item-card-small">
                                <p>150 NM</p>
                                <p>Max Torque</p>
                            </div>
                        </div>
                        <div class="card-exterior-detail">
                            <p>Refined Performance and Efficiency</p>
                            <div class="card-performance">
                                <img src="../assets/inifinite_performance_gt.png" alt="">
                                <div class="performance-detail">
                                    <p>INFINITE DRIVING</p>
                                    <p>Explore a new driving experience with gasoline engines with the latest CVT 8 SPEED AUTOMATIC TRANSMISSION to provide a better driving experience. Engineering has been developed to increase ground clearance and low body size. Electric handbrake, 3-stage weight-adjustable steering wheel and driver-focused cockpit console are best suited for drivers to experience a more enjoyable sporty driving experience.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-exterior-detail">
                            <p>Refined Safety</p>
                            <div class="card-performance">
                                <img src="../assets/gt_safety.png" alt="">
                                <div class="performance-detail">
                                    <p>INFINITE SAFETY</p>
                                    <p>MG 5 GT safety with Advanced Synchronized Protection System, the European system which integrates blind spot warning, lane keep assist, 4-wheel disc brakes, euro tuning suspension and full space frame. Extra peace of mind with 6 airbags and 3D around view camera where sportiness comes with the ultimate safety.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="specification" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="box-specification-content">
                        <div class="slider-box">
                            <div id="carouselSecondSlider" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item" v-for="(dataNews,id) in homeSliderCar"  :class="{ 'active': id==0 }" :key="id"  >
                                    <img :src="`${dataNews.img}`" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselSecondSlider" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselSecondSlider" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="price" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="box-tab-content">
                        <div class="car-detail-content">
                            <img src="../assets/detail_car_gt.png" alt="">
                        </div>
                        <p>MG 5 GT is full of sunshine, filled with energy, feel alive every moment with passion to share the happiness and joyous</p>
                        <p>Another Level of value lead your way</p>
                        <div class="brochure-card">
                            <div class="brochure-item">
                                <a href="">Test Drive new MG 5 GT</a>
                            </div>
                             <div class="brochure-item">
                                <a href="">Download Brochure</a>
                            </div>
                             <div class="brochure-item">
                                <a href="">Request a Quote</a>
                            </div>
                        </div>
                        <div class="price-card">
                            <div class="detail-price-card">
                                <p>5 GT Activate</p>
                                <p>Start From</p>
                                <p>RP. 339.900.000</p>
                            </div>
                            <div class="detail-price-card">
                                <p>5 GT Ignite</p>
                                <p>Start From</p>
                                <p>RP. 359.900.000</p>
                            </div>
                            <div class="detail-price-card">
                                <p>5 GT Magnify</p>
                                <p>Start From</p>
                                <p>RP. 399.900.000</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- MG 5 GT END -->


        <!-- MG HS -->
        <div class="box-detail-video" v-if="car_id === 'hs'">
            <iframe width="100%" height="100%" class="youtube_detail" src="https://www.youtube.com/embed/BFfiEzq1jtE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="slider-card" v-if="car_id === 'hs'">
            <div class="option-car">
                <p>MG HS</p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#design" type="button" role="tab" aria-controls="profile" aria-selected="false">Design</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#performance" type="button" role="tab" aria-controls="contact" aria-selected="false">Performance</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#specification" type="button" role="tab" aria-controls="profile" aria-selected="false">Specification</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#price" type="button" role="tab" aria-controls="contact" aria-selected="false">Price</button>
                    </li>
                </ul>
            </div>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="home-tab">
                    <div class="box-tab-content">
                        <div class="car-detail-content">
                            <img src="../assets/mg_hs/overview_hs.png" alt="">
                        </div>
                        <p>When Innovation Meet Style, It Refines The New Leadership</p>
                        <p>Another Level of value lead your way</p>
                        <div class="brochure-card">
                            <div class="brochure-item">
                                <a href="">Test Drive new MG HS</a>
                            </div>
                             <div class="brochure-item">
                                <a href="">Download Brochure</a>
                            </div>
                             <div class="brochure-item">
                                <a href="">Request a Quote</a>
                            </div>
                        </div>
                         <div class="car-detail-content-2">
                            <img src="../assets/mg_hs/overview_hs_2.png" alt="">
                        </div>
                        <div class="card-exterior-detail">
                            <p>Refined Exterior Design</p>
                            <p>Every component and element on the MG HS reveals its superiority of design and craftsmanship. It’s elegant exterior that immediately catches the eye and the meticulously interior design make superior impression at first glance. And under the BRIT DYNAMIC concept, the MG HS combines PERFORMANCE, HANDLING, DESIGN and SAFETY in one large, powerful, and irresistible-looking SUV. A true reflection of your own excellence.</p>
                            <div class="card-performance">
                                <img src="../assets/mg_hs/overview_hs_3.png" alt="">
                                <div class="performance-detail">
                                    <p>Performance</p>
                                    <p>Redefining the meaning of driving MG HS</p>
                                    <div class="small-card-performance">
                                        <div class="item-card-small">
                                            <p>2720</p>
                                            <p>Wheelbase</p>
                                        </div>
                                        <div class="item-card-small">
                                            <p>162 PS</p>
                                            <p>Max Horsepower</p>
                                        </div>
                                        <div class="item-card-small">
                                            <p>250 NM</p>
                                            <p>Max Torque</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="design" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="box-design-content">
                        <div class="car-detail-content">
                            <img src="../assets/mg_hs/hs_red.png" alt="" v-if="hs_active_color === 'red'">
                            <img src="../assets/mg_hs/hs_black.png"  alt="" v-else-if="hs_active_color === 'black'">
                            <img src="../assets/mg_hs/hs_silver.png"  alt=""  v-else-if="hs_active_color === 'silver'">
                            <img src="../assets/mg_hs/hs_white.png" alt=""  v-else-if="hs_active_color === 'white'">
                            
                        </div>
                        <div class="exterior-colour-box">
                            <div class="detail-exterior-colour">
                                <p>Exterior Colour</p>
                                <p>The details of the vehicle may vary, according to the actual sub-model</p>
                            </div>
                            <div class="box-color-option">
                                <div class="card-color" :class="{'active' : hs_active_color === 'red'}" @click="change_color('hs','yellow')">
                                    <div class="item-color " id="yellow">

                                    </div>
                                    <p>Light up Yellow</p>
                                </div>
                                <div class="card-color" :class="{'active' : hs_active_color === 'black'}" @click="change_color('hs','black')">
                                    <div class="item-color" id="black">

                                    </div>
                                    <p>Black Knight</p>
                                </div>
                                <div class="card-color" :class="{'active' : hs_active_color === 'silver'}" @click="change_color('hs','silver')">
                                    <div class="item-color" id="silver">

                                    </div>
                                    <p>Silver Metalic</p>
                                </div>
                                <div class="card-color" :class="{'active' : hs_active_color === 'white'}" @click="change_color('hs','white')">
                                    <div class="item-color" id="arctic">

                                    </div>
                                    <p>Arctic White</p>
                                </div>
                            </div>
                        </div>
                        <div class="box-exterior-design">
                            <p>Exterior Design</p>
                            <div class="card-design-ext">
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_hs/hs_grille.png" alt="">
                                    <p>Sport Design Grille</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_hs/led_headlight.png" alt="">
                                    <p>LED Projector Headlight</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_hs/led_tail.png" alt="">
                                    <p>LED Tail Light</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_hs/tomahawk_hs.png" alt="">
                                    <p>Tomahawk Sporty Alloys Wheel</p>
                                </div>
                            </div>
                        </div>
                        <div class="box-exterior-design">
                            <p>Interior  Design</p>
                            <div class="card-design-ext">
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_hs/panoramic_interior.png" alt="">
                                    <p>Electric I-MAX Panoramic Sunroof</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_hs/twotone_hs.png" alt="">
                                    <p>Two Tone Color with Soft Touch Leather</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_hs/infotainment_system_hs.png" alt="">
                                    <p>10.1 Inch infotainment System</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_hs/instrument_cluster_hs.png" alt="">
                                    <p>7 inch Digital Instrument Cluster</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="performance" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="box-performance-content">
                        <div class="car-detail-content">
                            <img src="../assets/mg_hs/performance_hs.png" alt="">
                        </div>
                        <div class="small-card-performance">
                            <div class="item-card-small">
                                <p>2720 mm</p>
                                <p>Wheelbase</p>
                            </div>
                            <div class="item-card-small">
                                <p>162 PS</p>
                                <p>Max Horsepower</p>
                            </div>
                            <div class="item-card-small">
                                <p>250 NM</p>
                                <p>Max Torque</p>
                            </div>
                        </div>
                        <div class="card-exterior-detail">
                            <p>Performance</p>
                            <div class="card-performance">
                                <img src="../assets/mg_hs/performance_hs_2.png" alt="">
                                <div class="performance-detail">
                                    <p>Performance</p>
                                    <p>MG HS is equipped with power distribution technology that provides a responsive driving experience.A turbo engine that produces 162 PS of power at 5600 RPM engine speed with a combination of 4 + 1 Driving Mode (Eco, Normal, Sport, Super Sport + Custom) which can be adjusted to your driving character and is ready to pump your adrenaline.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-exterior-detail">
                            <p>Refined Safety</p>
                            <div class="card-performance">
                                <img src="../assets/mg_hs/performance_hs_3.png" alt="">
                                <div class="performance-detail">
                                    <p>Safety</p>
                                    <p>Go further and drive to every destination with confidence. The NEW MG HS with EURO TUNING SUSPENSION and the ADVANCED SYNCHRONISED PROTECTION SYSTEM, an enhanced safety system that meets European standards, has 25 safety features working together to provide you with maximum safety. Even more safety features with 6 airbags as front dual airbags, side airbags and curtain airbags.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="specification" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="box-specification-content">
                        <div class="slider-box">
                            <div id="carouselSecondSlider" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item" v-for="(dataNews,id) in hs_spec_car"  :class="{ 'active': id==0 }" :key="id"  >
                                    <img :src="`${dataNews.img}`" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselSecondSlider" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselSecondSlider" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="price" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="box-tab-content">
                        <div class="car-detail-content">
                            <img src="../assets/mg_hs/hs_price.png" alt="">
                        </div>
                        <!-- <p>MG 5 GT is full of sunshine, filled with energy, feel alive every moment with passion to share the happiness and joyous</p> -->
                        <!-- <p>Another Level of value lead your way</p> -->
                        <div class="brochure-card">
                            <div class="brochure-item">
                                <a href="">Test Drive new MG HS</a>
                            </div>
                             <div class="brochure-item">
                                <a href="">Download Brochure</a>
                            </div>
                             <div class="brochure-item">
                                <a href="">Request a Quote</a>
                            </div>
                        </div>
                        <div class="price-card">
                            <div class="detail-price-card">
                                <p>HS Activate</p>
                                <p>Start From</p>
                                <p>RP. 395.800.000</p>
                            </div>
                            <div class="detail-price-card">
                                <p>HS Ignite</p>
                                <p>Start From</p>
                                <p>RP. 460.800.000</p>
                            </div>
                            <div class="detail-price-card">
                                <p>HS i-Smart</p>
                                <p>Start From</p>
                                <p>RP. 494.800.000</p>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
        <!-- MG HS END -->

         <!-- MG ZS -->
        <div class="box-detail-video" v-if="car_id === 'zs'">
            <iframe width="100%" height="100%" class="youtube_detail" src="https://www.youtube.com/embed/4FZTmhPwGq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="slider-card" v-if="car_id === 'zs'">
            <div class="option-car">
                <p>MG ZS</p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#design" type="button" role="tab" aria-controls="profile" aria-selected="false">Design</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#performance" type="button" role="tab" aria-controls="contact" aria-selected="false">Performance</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#specification" type="button" role="tab" aria-controls="profile" aria-selected="false">Specification</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#price" type="button" role="tab" aria-controls="contact" aria-selected="false">Price</button>
                    </li>
                </ul>
            </div>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="home-tab">
                    <div class="box-tab-content">
                        <div class="car-detail-content">
                            <img src="../assets/mg_zs/zs_overview.png" alt="">
                        </div>
                        <p>MG ZS is full of sunshine, filled with energy, feel alive every moment with passion to share the happiness and joyous</p>
                        <p>Another Level of value lead your way</p>
                        <div class="brochure-card">
                            <div class="brochure-item">
                                <a href="">Test Drive new MG ZS</a>
                            </div>
                             <div class="brochure-item">
                                <a href="">Download Brochure</a>
                            </div>
                             <div class="brochure-item">
                                <a href="">Request a Quote</a>
                            </div>
                        </div>
                         <div class="car-detail-content-2">
                            <img src="../assets/mg_zs/zs_overview_2.png" alt="">
                        </div>
                        <div class="card-exterior-detail">
                            <p>Refined Exterior Design</p>
                            <p>The new MG signature design of the Digital Flaming Grille, sharp lines, agility and sleek body of the Sporty British 4 Door Coupe design give it a sporty look on MG ZS. Two-tone Tomahawk alloy wheels and LED Projector Headlight headlamps also provide a sharper feel.</p>
                            <div class="card-performance">
                                <img src="../assets/mg_zs/zs_overview_3.png" alt="">
                                <div class="performance-detail">
                                    <p>Performance</p>
                                    <p>Redefining the meaning of driving MG 5 GT</p>
                                    <div class="small-card-performance">
                                        <div class="item-card-small">
                                            <p>2680</p>
                                            <p>Wheelbase</p>
                                        </div>
                                        <div class="item-card-small">
                                            <p>114 PS</p>
                                            <p>Max Horsepower</p>
                                        </div>
                                        <div class="item-card-small">
                                            <p>150 NM</p>
                                            <p>Max Torque</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="design" role="tabpanel" aria-labelledby="profile-tab">
                       <div class="box-design-content">
                        <div class="car-detail-content">
                            <img src="../assets/mg_zs/zs_red.png" alt="" v-if="zs_active_color === 'red'">
                            <img src="../assets/mg_zs/zs_black.png" alt="" v-else-if="zs_active_color === 'black'">
                            <img src="../assets/mg_zs/zs_silver.png" alt=""  v-else-if="zs_active_color === 'silver'">
                            <img src="../assets/mg_zs/zs_white.png" alt=""  v-else-if="zs_active_color === 'white'">
                            
                        </div>
                        <div class="exterior-colour-box">
                            <div class="detail-exterior-colour">
                                <p>Exterior Colour</p>
                                <p>The details of the vehicle may vary, according to the actual sub-model</p>
                            </div>
                            <div class="box-color-option">
                                <div class="card-color" :class="{'active' : zs_active_color === 'red'}" @click="change_color('zs','red')">
                                    <div class="item-color " id="yellow">

                                    </div>
                                    <p>Light up Yellow</p>
                                </div>
                                <div class="card-color" :class="{'active' : zs_active_color === 'black'}" @click="change_color('zs','black')">
                                    <div class="item-color" id="black">

                                    </div>
                                    <p>Black Knight</p>
                                </div>
                                <div class="card-color" :class="{'active' : zs_active_color === 'silver'}" @click="change_color('zs','silver')">
                                    <div class="item-color" id="silver">

                                    </div>
                                    <p>Silver Metalic</p>
                                </div>
                                <div class="card-color" :class="{'active' : zs_active_color === 'white'}" @click="change_color('zs','white')">
                                    <div class="item-color" id="arctic">

                                    </div>
                                    <p>Arctic White</p>
                                </div>
                            </div>
                        </div>
                         <div class="box-exterior-design">
                            <p>Exterior Design</p>
                            <div class="card-design-ext">
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_zs/design_grille.png" alt="">
                                    <p>Sport Design Grille</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_zs/headlight_zs.png" alt="">
                                    <p>LED Projector Headlight</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_zs/tail_light.png" alt="">
                                    <p>LED Tail Light</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_zs/tomahawk.png" alt="">
                                    <p>Tomahawk Sporty Alloys Wheel</p>
                                </div>
                            </div>
                        </div>
                        <div class="box-exterior-design">
                            <p>Interior  Design</p>
                            <div class="card-design-ext">
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_zs/panoramic.png" alt="">
                                    <p>Electric I-MAX Panoramic Sunroof</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_zs/twotone.png" alt="">
                                    <p>Two Tone Color with Soft Touch Leather</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_zs/infotainment_system.png" alt="">
                                    <p>10.1 Inch infotainment System</p>
                                </div>
                                <div class="card-item-small-ext">
                                    <img src="../assets/mg_zs/instrument_cluster.png" alt="">
                                    <p>7 inch Digital Instrument Cluster</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="tab-pane fade" id="performance" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="box-performance-content">
                        <div class="car-detail-content">
                            <img src="../assets/mg_zs/performance_zs.png" alt="">
                        </div>
                        <div class="small-card-performance">
                            <div class="item-card-small">
                                <p>2585</p>
                                <p>Wheelbase</p>
                            </div>
                            <div class="item-card-small">
                                <p>114 PS</p>
                                <p>Max Horsepower</p>
                            </div>
                            <div class="item-card-small">
                                <p>150 NM</p>
                                <p>Max Torque</p>
                            </div>
                        </div>
                        <div class="card-exterior-detail">
                            <p>Refined Performance and Efficiency</p>
                            <div class="card-performance">
                                <img src="../assets/mg_zs/performance_zs_2.png" alt="">
                                <div class="performance-detail">
                                    <p>Performance</p>
                                    <p>Drive to every desired destination with the exciting performance of the 1.5 litre, 114 horsepower engine that seamlessly combines the new CVT gear to provide a better driving experience.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-exterior-detail">
                            <p>Refined Safety</p>
                            <div class="card-performance">
                                <img src="../assets/mg_zs/performance_zs_3.png" alt="">
                                <div class="performance-detail">
                                    <p>SAFETY</p>
                                    <p>Go further and drive to every destination with confidence. The NEW MG ZS with EURO TUNING SUSPENSION and the SYNCHRONIZED PROTECTION SYSTEM that provides you with maximum safety.provide you with maximum safety. Even more safety features with 6 airbags as front dual airbags, side airbags and curtain airbags</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="specification" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="box-specification-content">
                        <div class="slider-box">
                            <div id="carouselSecondSlider" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item" v-for="(dataNews,id) in zs_spec_car"  :class="{ 'active': id==0 }" :key="id"  >
                                    <img :src="`${dataNews.img}`" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselSecondSlider" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselSecondSlider" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="price" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="box-tab-content">
                        <div class="car-detail-content">
                            <img src="../assets/mg_zs/price_zs.png" alt="">
                        </div>
                        <!-- <p>MG 5 GT is full of sunshine, filled with energy, feel alive every moment with passion to share the happiness and joyous</p> -->
                        <!-- <p>Another Level of value lead your way</p> -->
                        <div class="brochure-card">
                            <div class="brochure-item">
                                <a href="">Test Drive new MG ZS</a>
                            </div>
                             <div class="brochure-item">
                                <a href="">Download Brochure</a>
                            </div>
                             <div class="brochure-item">
                                <a href="">Request a Quote</a>
                            </div>
                        </div>
                        <div class="price-card">
                            <div class="detail-price-card">
                                <p>ZS Activate</p>
                                <p>Start From</p>
                                <p>RP. 294.800.000</p>
                            </div>
                            <div class="detail-price-card">
                                <p>ZS Ignite</p>
                                <p>Start From</p>
                                <p>RP. 304.800.000</p>
                            </div>
                            <div class="detail-price-card">
                                <p>ZS Magnify</p>
                                <p>Start From</p>
                                <p>RP. 324.800.000</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- MG ZS END -->


        <Footer/>
   </div>
</template>



<script>
import TopHeader from '../components/Header/topHeader.vue'
import Footer from '../components/Footer/Footer.vue'
import {ref,onBeforeMount} from 'vue'
import { useRoute } from 'vue-router'

export default {
    name:'carDetail',
    components:{
      TopHeader,
      Footer
    },
    setup() {
        const route = useRoute()
        let car_id = ref('gt')
        let gt_active_color = ref('yellow')
        let hs_active_color = ref('red')
        let zs_active_color = ref('red')
        let homeSliderCar = ref([
          {
              img:[require('../assets/specification_gt/gt_spec_1.png')]
          },
           {
              img:[require('../assets/specification_gt/gt_spec_2.png')]
          },
          {
              img:[require('../assets/specification_gt/gt_spec_3.png')]
          },
          {
              img:[require('../assets/specification_gt/gt_spec_4.png')]
          },
          {
              img:[require('../assets/specification_gt/gt_spec_5.png')]
          },
          {
              img:[require('../assets/specification_gt/gt_spec_6.png')]
          },
          {
              img:[require('../assets/specification_gt/gt_spec_7.png')]
          },

      ])

        let hs_spec_car = ref([
            {
                img:[require('../assets/mg_hs/hs_spec_1.png')]
            },
             {
                img:[require('../assets/mg_hs/hs_spec_2.png')]
            },
             {
                img:[require('../assets/mg_hs/hs_spec_3.png')]
            },
             {
                img:[require('../assets/mg_hs/hs_spec_4.png')]
            },
             {
                img:[require('../assets/mg_hs/hs_spec_5.png')]
            },
             {
                img:[require('../assets/mg_hs/hs_spec_6.png')]
            },
             {
                img:[require('../assets/mg_hs/hs_spec_7.png')]
            },
             {
                img:[require('../assets/mg_hs/hs_spec_8.png')]
            },
             {
                img:[require('../assets/mg_hs/hs_spec_9.png')]
            },
             {
                img:[require('../assets/mg_hs/hs_spec_10.png')]
            },
        ])
           let zs_spec_car = ref([
            {
                img:[require('../assets/mg_zs/spec_1.png')]
            },
             {
                img:[require('../assets/mg_zs/spec_2.png')]
            },
             {
                img:[require('../assets/mg_zs/spec_3.png')]
            },
             {
                img:[require('../assets/mg_zs/spec_4.png')]
            },
             {
                img:[require('../assets/mg_zs/spec_5.png')]
            },
             {
                img:[require('../assets/mg_zs/spec_6.png')]
            },
           
        ])
        let modalsMenu= ref(false)
        const modalsMenuMg=(response)=>{
            console.log(response.status)
            modalsMenu.value = response.status
            document.getElementById("backdrop").style.display = "block"
            document.getElementById("modalDownloadInvoice").style.display = "block"
            document.getElementById("modalDownloadInvoice").className += "show"
        }


        function closeModal() {
            console.log('close modal jalanlet ')
            document.getElementById("backdrop").style.display = "none"
            document.getElementById("modalDownloadInvoice").style.display = "none"
            document.getElementById("modalDownloadInvoice").className += document.getElementById("modalDownloadInvoice").className.replace("show", "")
        }

        const change_color=(id,color)=>{
            if(id==='gt'){
                gt_active_color.value = color
            }else if (id === 'hs'){
                hs_active_color.value = color
            }else if (id === 'zs'){
                zs_active_color.value = color
            }
        }

        const go_to_page=(id)=>{
            location.href=`/car-detail/${id}`
        }

        onBeforeMount(()=>{
            console.log('on before mounted active')
            const id = route.params.car
            car_id.value = id
        })
        return {
            homeSliderCar,
            modalsMenuMg,
            modalsMenu,
            closeModal,
            car_id,
            hs_spec_car,
            zs_spec_car,
            go_to_page,
            gt_active_color,
            change_color,
            zs_active_color,
            hs_active_color
        }
        
    },
}
</script>

<style scoped lang="scss">
    @import '../scss/carDetail.scss';
    @import '../scss/global.scss';
</style>
