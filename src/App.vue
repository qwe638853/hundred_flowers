<template>

  <div id="app" class="container">
    <nav>
      <div class="Logo"></div>
      <router-link 
      v-for = "(item,idx) in NavItemArr"
      :key = "item.name"
      :to="item.href"
      :class = "{active: activeIdx===idx}"
      @click="handleMenuFn(idx)"
      class = "nav-link"
      >
      <span class="UnL">
        {{ item.name }} 
      </span>
    </router-link>
    </nav>
    <router-view></router-view>
    <div class="BackgroundImg" id="HomePage"></div>
    <div style="height:10vh;"> </div>
    <div class="AboutPage" id="AboutPage">
      <div v-scrollTrigger="handleScroll" class="TextFade">
        <h1 class="AboutTitle">關於</h1>
        <p>遠離城市喧囂，藏身於青翠的山林間</p>
        <p>百花林民宿，正是現代人理想中的避風港</p>
        <p style="margin-top:10vh;">百花林民宿坐落於南投山上的一間民宿</p>
        <p>這裡可以俯瞰層層疊疊的山巒和無邊的綠野，仿佛置身於仙境</p>
        <p>無論是清晨的薄霧還是傍晚的夕陽，每一刻都能帶您重回大自然的懷抱</p>
        <p>且鄰近知名景點——日月潭，您可以泛舟湖上</p>
        <p>騎行環湖自行車道或者參觀潭邊的寺廟和文化景點</p>
        <p>無論您是自然愛好者還是文化探索者，都能在此找到樂趣</p>
      </div> 
      <div class="wrapper">
        <div id="cover" class="carousel">
          <div><img src="./img/introduce/2023-10-25 (1).jpg" alt=""></div>
          <div><img src="./img/introduce/2023-10-25.jpg" alt=""></div>
          <div><img src="./img/Room/493410_0.jpg" alt=""></div>
        </div>
      </div>
    </div>  
    <div style="height:10vh;"> </div>
    
    <div class="RoomIntroduce" id="RoomIntroduce">
      <h1>房型介紹</h1>
      <div class="cardContainer">
        <div v-for= "(item,index) in Roomimg"
            :key="index" 
            class="card">
          <div class="cardInner">
            <div class="box">
              <div class="boximg">
                <img :src="item.img" alt="error">
              </div>
              <div class="icon">
                <a href="#" class="iconbox">
                  <img :src="item.logo" alt="">
                </a>
              </div>

            </div>
          </div>
          <div class="content">
            <h2>{{ item.name }}</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
 



</template>

<script>
import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/style.css';
  export default {
    data(){
      return {
        activeIdx : 0,
        imgg:"/img/Room/493410_0.jpg",
        NavItemArr : [
          {name:"百花林民宿",href:"#HomePage"},
          {name:"關於",href:"#AboutPage"},
          {name:"房型介紹",href:"#RoomIntroduce"},
          {name:"民宿位址",href:"/AddressPage"},
          {name:"聯繫我們",href:"javascript:;"},
        ],
        Roomimg :[
          {name:"白虎四人房",img:require("@/img/Room/493410_0.jpg"),logo:require("@/img/Room/RoomLogo/1.png")},
          {name:"玄武四人房",img:require("@/img/Room/493431_0.jpg"),logo:require("@/img/Room/RoomLogo/4.png")},
          {name:"朱雀雙人房",img:require("@/img/Room/493413_0.jpg"),logo:require("@/img/Room/RoomLogo/2.png")},
          {name:"青龍雙人房",img:require("@/img/Room/493415_0.jpg"),logo:require("@/img/Room/RoomLogo/3.png")},
          
        ],
        
      }
    },
    directives:{
      scrollTrigger:{
        mounted(el,binding){
          const f = () =>{
            const rect = el.getBoundingClientRect();
            const windowsHeight = window.innerHeight;
            if(rect.top>windowsHeight){
              binding.value();
              el.classList.add("FadeisTrue");
              window.removeEventListener('scroll',f);
            }
          };
          window.addEventListener('scroll',f);
          f();
        },
      },
    },
    mounted() {
      this.$nextTick(() => {
        $('.carousel').slick({
          slidesToShow:1,
          dots:true,
          centerMode:true,
          autoplay:true,
          autoplaySpeed:3000,
        });
      });
      this.$watch('$route.hash', (newhash) =>{
        this.scrollToHash(newhash);
      });
      this.scrollToHash(this.$route.hash);
    },
    methods:{
      handleMenuFn(idx){
        this.activeIdx = idx;
      },
      scrollToHash(hash){
        if(hash){
          const element = document.querySelector(hash);
          if(element){
            element.scrollIntoView({behavior: 'smooth'});
          }
        }

      },
      handleScroll(){
        console.log("!!!!!!!!");
      },
    },
  };
</script>

<!-- box-sizing:border-box 表示設定寬高模式是實際數值(預設會再加上padding and margin)-->
