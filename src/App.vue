<template>

  <div id="app" class="container" @scroll="handleNavScroll">
    <nav :class="navClass" ref="Nav">
      <div class="Logo"></div>
      <router-link 
      v-for = "(item,idx) in NavItemArr"
      :key = "item.name"
      :to="item.href"
      :class = "linkClass"
      @click="handleMenuFn(idx)"
      ref="link"
      >
      <span class="UnL">
        {{ item.name }} 
      </span>
    </router-link>
    </nav>
    <router-view></router-view>
    <div class="BackgroundImg" id="HomePage" ref="HomePage"></div>
    <div id="AboutPage" style="height:10vh;"> </div>
    <div class="AboutPage" ref="AboutPage">
      <div v-scrollTrigger class="TextFade">
        <h1 class="AboutTitle">關於</h1>
        <p style="margin-top:5vh;">遠離城市喧囂，藏身於青翠的山林間</p>
        <p>百花林民宿，正是現代人理想中的避風港</p>
        <p style="margin-top:10vh;">百花林民宿坐落於南投山上的一間民宿</p>
        <p>這裡可以俯瞰層層疊疊的山巒和無邊的綠野，仿佛置身於仙境</p>
        <p>無論是清晨的薄霧還是傍晚的夕陽，每一刻都能帶您重回大自然的懷抱</p>
        <p>且鄰近知名景點——日月潭，您可以泛舟湖上</p>
        <p>騎行環湖自行車道或者參觀潭邊的寺廟和文化景點</p>
        <p>無論您是自然愛好者還是文化探索者，都能在此找到樂趣</p>
      </div> 
      <div class="wrapper">
        <div class="carousel">
          <div><img src="./img/introduce/2023-10-25 (1).jpg" alt=""></div>
          <div><img src="./img/introduce/2023-10-25.jpg" alt=""></div>
          <div><img src="./img/Room/493410_0.jpg" alt=""></div>
        </div>
      </div>
    </div>  
    <div id="RoomIntroduce" style="height:10vh;"> </div>
    <div class="RoomIntroduce" ref="RoomIntroduce">
      
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
              <div class="icon" @click="showPopup()">
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
      <Transition name="popAnimation">
        <div v-if="showPop" class="overlay">
            <div class="popup">
              <div class="fadePopup">
                <div><img src="./img/introduce/2023-10-25.jpg" alt=""></div>
                <div><img src="./img/Room/493410_0.jpg" alt=""></div>
              </div>
              <span class="material-symbols-outlined" @click="closePopup">close</span>
            </div>
        </div>
      </Transition>
    </div>
    <div class="FeaturePage" id="FeaturePage">
      <h1>民宿特色</h1>
      <div class="featureContainer">
        <div v-for="(item, index) in features" :key="index"
        class="feature">
          <span class="material-symbols-outlined">{{item.fIcon}}</span>
          <h2>{{ item.name }}</h2>
          <div class="CenterText">
            <span class="inText">{{ item.t }}</span>
          </div>
        </div>
      </div>

    </div>
    <div class="ContactPage" id="ContactPage">
      <div class=LeftContact>
        <div style="text-align: center;width: 100%;height: 10%;margin-bottom: 3rem;">
          <h1>聯繫我們</h1>
        </div>
        <div class="ContactCell">
          <span class="material-symbols-outlined">person</span>
          <p>聯絡人：林先生</p>
        </div>
        <div class="ContactCell">
          <span class="material-symbols-outlined">call</span>
          <p>電話：0918861036</p>
        </div>
        <div class="ContactCell">
          <span class="material-symbols-outlined">mail</span>
          <p>電子郵件：qwe638853@gmail.com</p>
        </div>
        <div class="ContactCell">
          <img src="./img/icon/line_88.png" style="width: 2rem;height: 2rem; margin-inline: 0.5rem;">
          <p>官方LINE：@702ncvei</p>
        </div>
        
      </div>
      <div class="RightContact">
        <div class="MapContainer">
          <GoogleMap
            api-key="AIzaSyCaF4BdO7G2hGHtiOvWegqyPqEy_OwloDU"
            class="MapClass"
            :center="MapCenter"
            :zoom="16">
          </GoogleMap>
        </div>
        <div class="ContactCell" style="margin-left: 0;text-align: center;">
            <span class="material-symbols-outlined">location_on</span>
            <p>民宿位址:南投縣魚池鄉文正巷2-39號</p>
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
import { GoogleMap} from 'vue3-google-map';
import LineButton from './compoment/LineButton.vue';

  export default {
    data(){
      return {
        linkClass : "linkDefault",
        navClass : "navDefault",
        activeIdx : 0,
        imgg:"/img/Room/493410_0.jpg",
        showPop: false,
        NavItemArr : [
          {name:"百花林民宿",href:"#HomePage"},
          {name:"關於",href:"#AboutPage"},
          {name:"房型介紹",href:"#RoomIntroduce"},
          {name:"民宿特色",href:"#FeaturePage"},
          {name:"聯繫我們",href:"#ContactPage"},
        ],
        Roomimg :[
          {name:"白虎四人房",img:require("@/img/Room/493410_0.jpg"),logo:require("@/img/Room/RoomLogo/1.png")},
          {name:"玄武四人房",img:require("@/img/Room/493431_0.jpg"),logo:require("@/img/Room/RoomLogo/4.png")},
          {name:"朱雀雙人房",img:require("@/img/Room/493413_0.jpg"),logo:require("@/img/Room/RoomLogo/2.png")},
          {name:"青龍雙人房",img:require("@/img/Room/493415_0.jpg"),logo:require("@/img/Room/RoomLogo/3.png")},
          
        ],
        features:[
          {name:"卡拉OK",fIcon:"mic_external_on",t:"提供專業卡拉OK設備，讓您歡唱整個假期"},
          {name:"烤肉設施",fIcon:"outdoor_grill",t:"設有烤肉空間及設施，享受BBQ的樂趣"},
          {name:"各類遊戲",fIcon:"casino",t:"提供麻將、撲克牌等等遊戲，讓您晚上也不無聊"},
          {name:"泡茶空間",fIcon:"local_cafe",t:"設有泡茶空間，無論是品茗聊天還是靜心獨處都非常合適"},
          {name:"美麗風景",fIcon:"landscape",t:"放眼望去，是大自然；宛如世外桃源，享受寧靜之美"},
          {name:"鄰近日月潭",fIcon:"near_me",t:"鄰近知名景點日月潭，可輕鬆前往這個地點享受多種活動"},
        ],
        
        MapCenter:{lat:23.88942370632728, lng:120.9187565787977},
      }
    },
    components:{
      GoogleMap,
    },
    directives:{
      scrollTrigger:{
        mounted(el){
          const f = () =>{
            const rect = el.getBoundingClientRect();
            const windowsHeight = window.innerHeight;
            if(rect.top>windowsHeight){
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
      this.initSlick();
      this.$watch('$route.hash', (newhash) =>{
        this.scrollToHash(newhash);
      });
      this.scrollToHash(this.$route.hash);
      
    },
    methods:{
      
      handleNavScroll(){
        const bottomNav = this.$refs.Nav.getBoundingClientRect().bottom;
        const bottonHome = this.$refs.HomePage.getBoundingClientRect().bottom;
        
        if(bottomNav<bottonHome){
          this.linkClass = "linkDefault";
          this.navClass = "navDefault";

        }else {
          this.linkClass = "linkBlackMode";
          this.navClass = "navBlackMode";
        
        }
      },
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
      addPopActive(){
        document.getElementById('pop').classList.add('isActive');
        console.log("afnkjfnjlw");
      },
      initSlick(){
        $('.carousel').slick({
          slidesToShow:1,
          dots:true,
          centerMode:true,
          autoplay:true,
          autoplaySpeed:3000,
        });
        $('.fadePopup').slick({
          
        });
      },
      showPopup(){
        this.showPop = true;
        this.$nextTick(() =>{
          $('.fadePopup').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
          });
        });
      },
      closePopup(){
          this.showPop = false;
      }
    },
  };
</script>

<!-- box-sizing:border-box 表示設定寬高模式是實際數值(預設會再加上padding and margin)-->
