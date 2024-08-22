<template>
  <div id="app" class="container" @scroll="handleScroll">
    <NavbarComponent :nav-class="navClass" :link-class="linkClass" @menuClick = "handleMenuFn" ref="Nav" />
    <router-view></router-view>
    <div class="BackgroundImg" id="HomePage" ref="HomePage"></div>
    <div id="AboutPage" style="height:10vh;"> </div>
    <AboutTitle ref="AboutTitle" :is-visible="isAboutVisible"></AboutTitle>
    <div id="RoomIntroduce" style="height:10vh;"> </div>
    <RoomPage ref="RoomIntroduce"/>
    <featurePage id="FeaturePage"/>
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
import LineButton from './component/LineButton.vue';
import NavbarComponent from './component/Page/navbar.vue';
import AboutTitle from './component/Page/AboutTitle.vue';
import RoomPage from './component/Page/RoomPage.vue';
import featurePage from './component/Page/featurePage.vue';

  export default {
    data(){
      return {
        linkClass : "linkDefault",
        navClass : "navDefault",
        activeIdx : 0,
        imgg:"/img/Room/493410_0.jpg",
        isAboutVisible:false,
        
        MapCenter:{lat:23.88942370632728, lng:120.9187565787977},
      }
    },
    components:{
      GoogleMap,NavbarComponent,AboutTitle,RoomPage,featurePage,
    },
    directives:{
      'scroll-trigger':{
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
      this.$watch('$route.hash', (newhash) =>{
        this.scrollToHash(newhash);
      });
      this.scrollToHash(this.$route.hash);
      
    },
    methods:{
      
      handleScroll(){
        const about = this.$refs.AboutTitle;
        if(about){
          let rectTop = about.$el.getBoundingClientRect().top;
          let windowsHeight = window.innerHeight;
          this.isAboutVisible = (rectTop<=windowsHeight);
        }

        const bottomNav = this.$refs.Nav.$refs.navElement.getBoundingClientRect().bottom;
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
