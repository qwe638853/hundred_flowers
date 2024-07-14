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
  margin-top: 10x;
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-style: bold;
  color: #b5b5b5;
  transition: color 0.2s,background 0.2s;
  text-decoration: none;

 
}


</style>