<template>
  <div id="app">
    <nav>
      <a v-for = "(item,idx) in NavItemArr"
         :key = "item.name"
         :href = "item.href"
         :class = "{ active: activeIdx===idx}"
         @click = "handleMenuFn(idx)"
         >
         {{ item.name }}
        </a>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';
  export default {
    data(){
      return {
        activeIdx : 0,
        NavItemArr : [
          {name:"主頁",href:"javascript:;"},
          {name:"關於",href:"javascript:;"},
          {name:"民宿位址",href:"javascript:;"},
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
html , body{
  width: 100%;
  height: 100%;
  background-color: bisque;
  font-family: Arial, Helvetica, sans-serif;
}

nav{
  display: flex;
  width: 100%;
  height:10%;
  justify-content:flex-start;
  align-items: center;
  background-color: aliceblue;
  box-shadow: 0 0 5px, darkgoldenrod;
  border-radius: 10px;
}

nav > a{
  display: flex;
  
  padding: 10px;
  margin-top: 10x;
  width: 100px;
  height: 50px;
  font-size: 15px;
  transition: color 0.2s,background 0.2s;
  text-decoration: none;
  background-color: aliceblue;
}

nav > a.active{
  background-color:burlywood;
}

nav > a.hover{
  background-color: burlywood ;
}

</style>