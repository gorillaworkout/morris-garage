<template>    
        <div class="top-footer-box">
            <div class="card-icon-soc">
                <i class="fa-brands fa-facebook-f"></i>
            </div>
             <div class="card-icon-soc">
                <i class="fa-brands fa-whatsapp"></i>
            </div>
             <div class="card-icon-soc">
                <i class="fa-brands fa-youtube"></i>
            </div>
             <div class="card-icon-soc">
                <i class="fa-brands fa-instagram"></i>
            </div>
             <div class="card-icon-soc">
                <i class="fa-solid fa-at"></i>
            </div>
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
