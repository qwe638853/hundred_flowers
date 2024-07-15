<template>
  <div id="app">
    <nav>
      <router-link 
      v-for = "(item,idx) in NavItemArr"
      :key = "item.name"
      :to="item.href"
      :class = "{active: activeIdx===idx}"
      @click="handleMenuFn(idx)"
      class = "nav-link"
      >
      {{ item.name }} 
    </router-link>
    </nav>
    <router-view></router-view>
  </div>
  <div class="BackgroundImg"></div>


</template>

<script>
  export default {
    data(){
      return {
        activeIdx : 0,
        NavItemArr : [
          {name:"主頁",href:"javascript:;"},
          {name:"關於",href:"/AboutPage"},
          {name:"民宿位址",href:"/AddressPage"},
          {name:"聯繫我們",href:"javascript:;"},
        ]
      }
    },
    methods:{
      handleMenuFn(idx){
        this.activeIdx = idx;
      }
    }
  };
</script>

<!-- box-sizing:border-box 表示設定寬高模式是實際數值(預設會再加上padding and margin)-->
<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);
html , body{
  width: 100%;
  height: 100%;
  font-family: 'Noto Sans TC', sans-serif, !important;
  font-weight: 600;
  line-height: 1.63;
  letter-spacing: 1px;
  color: #ffffff;
}

.BackgroundImg{
  width: 100%;
  height: 100vh;
  background-image: url(./img/background_img.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
}

nav{
  display: flex;
  width: 100%;
  height: 10%;
  justify-content:flex-start;
  align-items: center;
  box-shadow: 0 0 5px, rgb(49, 37, 7);
  position: absolute;
  top: 0px; 
}
.nav-link{
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 200px;
    height: 50px;
    text-decoration:  none;
    position: relative;
}

.nav-link::after{
  content: "";
  position: absolute;
  border-bottom: 2px solid #0f0d0d;
  left: 50%;
  right: 50%;
  bottom: -4px;
  transition: .3s;
}

.nav-link:hover::after{
  left:0%;
  right: 0%;

}

</style>