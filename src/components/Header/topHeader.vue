<template>    
        <div class="top-header-box">
            <img src="../../assets/mg_logo.png" alt="" @click="go_to_home">
            <div class="box-modal-option-header">
                <a href="/">Home</a>
                <p @click="jalan">MG Models</p>
                <a href="/profile">Contact ME</a>
            </div>
            
            <i class="fa-solid fa-bars icon_bar"></i>
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

        const go_to_home=()=>{
            location.href = "/"
        }
      
      return {
        jalan,
        go_to_home
      }
    },
}
</script>

<style scoped lang="scss">
@import './topHeader.scss';
@import '../../scss/global.scss';

</style>
