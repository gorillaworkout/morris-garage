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

            <!-- MODALS MOBILE START -->
            <div class="modal  modal-downlad-invoice fade" id="modalsMobile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" @click.self="closeModalMobile()" >
                <div class="modal-dialog modal-dialog-centered .modal-lg">
                    <div class="modal-content modal-content-mobile">  
                        <div class="modal-body">
                            <div class="top-header-mobile">
                                <p >More Menu</p>
                                <div class="icon-card" @click="closeModalMobile">
                                    <i class="fa-solid fa-xmark"  ></i>
                                </div>
                            </div>
                            <div class="body-mobile-card">
                                <p>Home</p>
                                <a href="/car-detail/zs">New MG ZS</a>
                                <a href="/car-detail/hs">MG HS</a>
                                <a href="car-detail/gt">MG 5 GT</a>
                                <a href="/profile">Contact ME</a>
                            </div>                 
                        </div>
                    </div>
                </div>
            </div> 
            <div class="modal-backdrop fade show" id="backdrop"  style="display: none;" ></div>
            <!-- MODALS MOBILE END -->
            <topHeader
            @modalsMenu="modalsMenuMg"
            @modalsMenuMobile="modalsMenuMobile"
            />
            <div class="card-profile">
                <div class="box-card-left">
                    <div class="box-img">
                        <img src="../assets/farid.jpeg" alt="">
                    </div>
                    <p>
                        Hi, Saya Farid (Sales Senior Eksekutif ) Dealer Resmi MG. Dengan pengalaman lebih dari 5 tahun di bidang otomotif dan pemasaran serta kredibilitas, khususnya dalam pelayanan jual beli mobil MG. Saya akan memberikan Excellent Service sesuai dengan kebutuhan Anda dalam memiliki mobil MG. Silahkan bertanya lebih lanjut tentang produk mobil MG dengan menghubungi saya. 
                    </p>
                </div>
                <div class="box-card-right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32493591.97369621!2d70.90621800000002!3d-6.197180799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f71f89fb2841%3A0xc49d865f405bd30b!2sPT.%20Sun%20Motor%20-%20MG!5e0!3m2!1sen!2sid!4v1659774925765!5m2!1sen!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <a href="" class="card-wa">
                        Contact 
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
</template>

<script>
import topHeader from '../components/Header/topHeader.vue'
import {ref} from 'vue'
import Footer from '../components/Footer/Footer.vue'
export default {
    name:'profileCard',
    components:{
        topHeader,
        Footer
    },
    setup(_props,{emit}) {
        console.log(_props)
        
        const jalan=()=>{
            console.log('function jalans')
            emit('modalsMenu',{status:true})
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


          const modalsMenuMobile=(response)=>{
            console.log(response.status)
                    modalsMenu.value = response.status
            document.getElementById("backdrop").style.display = "block"
            document.getElementById("modalsMobile").style.display = "block"
            document.getElementById("modalsMobile").className += "show"

        }

        const closeModalMobile=()=>{
            
            console.log('close modal jalanlet ')
            document.getElementById("backdrop").style.display = "none"
            document.getElementById("modalsMobile").style.display = "none"
            document.getElementById("modalsMobile").className += document.getElementById("modalDownloadInvoice").className.replace("show", "")
        }

      
      return {
        jalan,
        modalsMenu,
        modalsMenuMg,
        closeModal,
        modalsMenuMobile,
        closeModalMobile
      }
    },
}
</script>

<style scoped lang="scss">
@import '../scss/profile.scss';
@import '../scss/global.scss';

</style>
