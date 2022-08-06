<template>    
        <div class="top-footer-box">
            <a href="tel:6283811111796" class="card-icon-soc">
                <i class="fa-solid fa-phone"></i>
            </a>
             <a href="https://wa.me/6283811111796/?text=Selamat Siang, Saya Ingin konsultasi MG Moris" class="card-icon-soc">
                <i class="fa-brands fa-whatsapp"></i>
            </a>
             <!-- <div class="card-icon-soc">
                <i class="fa-brands fa-youtube"></i>
            </div> -->
             <a href="https://www.instagram.com/mgkebonjeruk/"  target="_blank" class="card-icon-soc">
                <i class="fa-brands fa-instagram"></i>
            </a>
             <!-- <div class="card-icon-soc">
                <i class="fa-solid fa-at"></i>
            </div> -->
        </div>
</template>

<script>


export default {
    name:'footerCard',
    components:{
        
    },
    setup(_props,{emit}) {
        console.log(_props)
        
        const jalan=()=>{
            emit('modalsMenu',{status:true})
        }
      
      return {
        jalan
      }
    },
}
</script>

<style scoped lang="scss">
@import './Footer.scss';
@import '../../scss/global.scss';

</style>
