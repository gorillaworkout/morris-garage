<template>
    <div class="box-home-container">
        <!-- MODALS START MENU MG -->
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
        <!-- MODALS START MENU MG -->

        <!-- <div class="box-header"> -->
        <!-- </div> -->
        <topHeader
        @modalsMenu="modalsMenuMg"
        />
        <!-- data-bs-interval="1000" -->
        <div class="box-carousel-home">
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
            <div class="box-car-model">
                <div class="header-car-model">
                    <div class="header-left">
                        <p>MG MODELS</p>
                        <p>{{car_active_name.name}}</p>
                        <p>{{car_active_name.detail}}</p>
                    </div>
                    <div class="header-right">
                        <div class="button-seemore" v-if="option_active_car === 'hs'">
                            <a href="/car-detailhs"> SEE MORE</a>
                        </div>
                        <div class="button-seemore" v-if="option_active_car === 'zs'">
                            <a href="/car-detail/zs"> SEE MORE</a>
                        </div>
                        <div class="button-seemore" v-if="option_active_car === 'gt'">
                            <a href="/car-detail/gt"> SEE MORE</a>
                        </div>
                    </div>
                </div>
                <div class="body-slider-car-model">
                   <div class="slider-box">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner" v-if="option_active_car === 'hs'">
                            <div  class="carousel-item" v-for="(dataNews,id) in hs_slider_design"  :class="{ 'active': id===0  }"  :key="dataNews.id" >
                                <img :src="`${dataNews.img}`" class="d-block w-100" alt="..." v-if="dataNews.id === option_active_car">
                            </div>
                        </div>
                        <div class="carousel-inner" v-if="option_active_car === 'zs'">
                            <div  class="carousel-item" v-for="(dataNews,id) in zs_slider_design"  :class="{ 'active': id===0  }"  :key="dataNews.id" >
                                <img :src="`${dataNews.img}`" class="d-block w-100" alt="..." v-if="dataNews.id === option_active_car">
                            </div>
                        </div>
                        <div class="carousel-inner" v-if="option_active_car === 'gt'">
                            <div  class="carousel-item" v-for="(dataNews,id) in gt_slider_design"  :class="{ 'active': id===0  }"  :key="dataNews.id" >
                                <img :src="`${dataNews.img}`" class="d-block w-100" alt="..." v-if="dataNews.id === option_active_car">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                    <div class="box-img-option">
                        <div class="small-card-option-car" v-for="(item,id) in option_slider_car_design" :class="{ 'active_option_car': id==0  }" :key="id">
                            <div class="card-option-car"  :class="{ 'active_option_car': item.id === option_active_car }">
                                <img :src="`${item.img}`" @click="change_option_car(item.id)">
                            </div>
                        </div>       
                    </div>
                </div>
            </div>
            <div class="box-innovation-car">
                <div class="title-card">
                    <p>Innovation</p>
                    <p>
                        MG has been ahead of its time since the brand’s inception in the Morris Garages in 1924. Now a new generation can choose a car with innovation from this iconic brand. Updated, electrified, recharged and ready for the future.
                    </p>
                </div>
                <div class="box-innovation">
                    <div class="card-innovation-1">
                        <p>i-SMART</p>
                    </div>
                    <div class="card-innovation-2">
                        <p>Brit Dynamic</p>
                    </div>
                    <div class="card-innovation-3">
                        <p>Innovation of EVs</p>
                    </div>
                    <div class="card-innovation-4">
                        <p>Future Cars</p>
                    </div>
                </div>

            </div>
            <footerCard/>

        </div>
    </div>
</template>



<script>
import topHeader from '../components/Header/topHeader.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import {ref,watch} from 'vue'
import footerCard from '../components/Footer/Footer.vue'
export default {
    name:'homeView',
    components:{
        // eslint-disable-next-line vue/no-unused-components
        topHeader,
        footerCard,
        // eslint-disable-next-line vue/no-unused-components
        Carousel,
        // eslint-disable-next-line vue/no-unused-components
        Slide,
        // eslint-disable-next-line vue/no-unused-components
        Pagination,
        // eslint-disable-next-line vue/no-unused-components
        Navigation,
    },
    setup() {

        let option_active_car = ref('hs')
        let car_active_name = ref({
            name:'MG HS',
            detail:'Every component and element on the MG HS expresses the hallmarks of British design, cutting edge power, precise handling and uncompromising safety. The elegant exterior that immediately catches the eye and the detailed interior design makes a superior impression at first glance. And under the BRIT DYNAMIC concept, the MG HS combines PERFORMANCE, HANDLING, DESIGN and SAFETY in one prime SUV. The MG HS is a true reflection of excellence.'
        })
        let homeSliderCar = ref([
          {
              img:[require('../assets/bg_slider_1.jpeg')]
          },
            {
              img:[require('../assets/bg_slider_2.jpeg')]
          },
           {
              img:[require('../assets/bg_slider_3.jpeg')]
          }
      ])
        let hs_slider_design = ref([
            {
                id:'hs',
                img:[require('../assets/hs_1_slide.png')]
            },
            {
                id:'hs',
                img:[require('../assets/hs_2_slide.png')]
            },
        ])
        let zs_slider_design = ref([
            {
               id:'zs',
               img:[require('../assets/zs_1_slide.png')]
           },
           {
               id:'zs',
               img:[require('../assets/zs_2_slide.png')]
           },
        ])
        let gt_slider_design = ref([
            {
               id:'gt',
               img:[require('../assets/mg_gt_1_slide.png')]
           },
           {
               id:'gt',
               img:[require('../assets/mg_gt_2_slide.png')]
           },

        ])
        let slider_car_design = ref([
        ])

        let option_slider_car_design = ref([
             {
                id:'hs',
                img:[require('../assets/hs_small_img.png')]
            },
            {
                id:'zs',
                img:[require('../assets/zs_small_img.png')]
            },
             {
                id:'gt',
                img:[require('../assets/mg_gt_small_img.png')]
            },
        ])

        const change_option_car=(id)=>{
            option_active_car.value = id
            if(id === 'gt'){
                car_active_name.value = {
                    name:'MG 5 GT',
                    detail:'MG 5 GT is full of sunshine, filled with energy, feel alive every moment with passion to share the happiness and joyous'
                }
            }else if (id === 'hs'){
                car_active_name.value = {
                    name:'MG HS',
                    detail:'Every component and element on the MG HS expresses the hallmarks of British design, cutting edge power, precise handling and uncompromising safety. The elegant exterior that immediately catches the eye and the detailed interior design makes a superior impression at first glance. And under the BRIT DYNAMIC concept, the MG HS combines PERFORMANCE, HANDLING, DESIGN and SAFETY in one prime SUV. The MG HS is a true reflection of excellence.'
                }
            }else {
                car_active_name.value = {
                    name:'New MG ZS',
                    detail:'Excellent response and agility to make you comfortable on every journey. The style of the NEW MG ZS will take you in a dynamic driving experience. The real dynamic NEW MG ZS. And that is a promise on every ride and for every NEW MG ZS rider. No compromises. No regrets. No rational arguments.'
                }
            }
        }
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
        watch(()=>modalsMenu,function() {
            console.log('updated jalan')
                //  document.getElementById("backdrop").style.display = "block"
                // document.getElementById("modalDownloadInvoice").style.display = "block"
                // document.getElementById("modalDownloadInvoice").className += "show"
        // console.log('watch jalan checking isLoading', store.getters.getIsLoading,)
        
        })

        const go_to_page=(id)=>{
            location.href=`/car-detail/${id}`
        }

        return {
            homeSliderCar,
            modalsMenuMg,
            closeModal,
            slider_car_design,
            option_slider_car_design,
            change_option_car,
            option_active_car,
            hs_slider_design,
            zs_slider_design,
            gt_slider_design,
            car_active_name,
            go_to_page
        }
        
    },
}
</script>

<style scoped lang="scss">
    @import '../scss/home.scss';
    @import '../scss/global.scss';
</style>
