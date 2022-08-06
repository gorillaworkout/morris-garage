<template>    
        <div class="top-header-box">
            <img src="../../assets/mg_logo.png" alt="" @click="go_to_home">
            <div class="box-modal-option-header">
                <a href="/">Home</a>
                <p @click="jalan">MG Models</p>
                <a href="/profile">Contact ME</a>
            </div>
            <div class="icon-card" @click="open_modals_mobile('tsting')">
                <i class="fa-solid fa-bars icon_bar" ></i>
            </div>
            
        </div>
</template>

<script>


export default {
    name:'topHeader',
    components:{
        
    },
    setup(_props,{emit}) {
        console.log(_props)
        
        const jalan=()=>{
            emit('modalsMenu',{status:true})
        }
        const open_modals_mobile=()=>{
            emit('modalsMenuMobile',{statues:true})
            
        }

        const go_to_home=()=>{
            location.href = "/"
        }
      
      return {
        jalan,
        go_to_home,
        open_modals_mobile
      }
    },
}
</script>

<style scoped lang="scss">
@import './topHeader.scss';
@import '../../scss/global.scss';

</style>
