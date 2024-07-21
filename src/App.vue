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
          <div><img src="./img/introduce/2023-12-22.jpg" alt=""></div>
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

  export default {
    data(){
      return {
        activeIdx : 0,
        NavItemArr : [
          {name:"百花林民宿",href:"#HomePage"},
          {name:"關於",href:"#AboutPage"},
          {name:"民宿位址",href:"/AddressPage"},
          {name:"聯繫我們",href:"javascript:;"},
        ]
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
<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);
html , body{
  width: 100%;
  font-family: 'Noto Sans TC', sans-serif, !important;
  font-weight: 600;
  line-height: 1.63;
  font-size: 18px;
  color: #4D6A6D;
  margin: 0;
  padding: 0;
  background-color: #eee;
}

.BackgroundImg{
  width: 100%;
  height: 100vh;
  background-image: url(./img/background_img.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  scroll-snap-align: start;
}


nav{
  display: flex;
  padding: 10px;
  width: 100%;
  height: 10vh;
  justify-content:flex-start;
  align-items: center;
  position: fixed;
  top: 0px;
  & .Logo{
    height: 120px;
    width: 120px;
    background-image: url(./img/LOGO.png);
    background-size: cover;
    padding: 0x;
    margin-top: 10px;
    margin-right: 30px;
  }

  & .nav-link{
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 120px;
    height: 50px;
    text-decoration:  none;
    color: #ffffff; 
  }

  & .UnL{
    font-size: 17px;
    position: relative;
  }
  & .UnL::after{
    content: "";
    position: absolute;
    left: 50%;
    right: 50%;
    border-bottom: 2px solid #ffffff;
    bottom: -3px;
    transition: 0.3s;
  }
  & .UnL:hover::after{
    left: 0%;
    right: 0%;
  }
}

.item{
  display: flex;
  width: 300px;
  height: 300px;
  list-style-type: none;
  flex-shrink: 0;
  z-index: 1;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 20px 30px #272626 inset;
  transition: transform 0.1s, left 0.75s, top 0.7s, width 0.75s, height 0.7s;
  &:nth-child(1){
    background-image:url(./img/introduce/2023-10-25.jpg);
  }
  &:nth-child(2){
    background-image:url(./img/introduce/2023-12-06.jpg);
  }
  &:nth-child(3){
    background-image:url(./img/introduce/2023-10-25\ \(1\).jpg);
  }
  &:nth-child(4){
    background-image:url(./img/introduce/2023-12-22.jpg);
  }
  
  
}

.HorizontalScrolling{
  display: flex;
  overflow-x: auto;
  margin-left: 100vh;
}

.container{
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

}
.snap-section{
  height: 100vh;
  scroll-snap-align: start;
}

.AboutPage{
  display: flex;
  justify-content:space-around;
  height: 100vh;
  scroll-snap-align: start;
  & p{
    margin-left: 150px;
  }
}

.AboutTitle{
  margin-top: 15vh;
  margin-left: 150px;
  font-size: 60px;
}

.TextFade{
  opacity: 0;
  transition: opacity 2s ease-in-out;
  z-index: 10;
}
.FadeisTrue{
    opacity: 1;
}

.wrapper{
  display: flex;
  align-items: center;
  margin-top: 30vh;
  margin-left: 10vh;
  width: 40%;
  height: 40%;
  padding-top: 5px;
  text-align: center;
  & .carousel{
    width: 90%;
    margin: 0px;
    & img{
      width: 100%;
    }
  }
}




</style>