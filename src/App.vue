<template>
  <div id="app" class="container" @scroll="handleScroll">
    <NavbarComponent :nav-class="navClass" :link-class="linkClass" ref="Nav" />
    <router-view></router-view>
    <div class="BackgroundImg" id="HomePage" ref="HomePage"></div>
    <div id="AboutPage" :class="spaceClass"> </div>
    <AboutTitle ref="AboutTitle" :is-visible="isAboutVisible"></AboutTitle>
    <div id="RoomIntroduce" :class="spaceClass"></div>
    <RoomPage ref="RoomIntroduce"/>
    <div id="FeaturePage" :class="spaceClass"></div>
    <featurePage/>
    <ContactPage id="ContactPage"/>

    
  </div>
</template>

<script>
import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/style.css';

import LineButton from './component/LineButton.vue';
import NavbarComponent from './component/navbar.vue';
import AboutTitle from './component/Page/AboutTitle.vue';
import RoomPage from './component/Page/RoomPage.vue';
import featurePage from './component/Page/featurePage.vue';
import ContactPage from './component/Page/ContactPage.vue';

  export default {
    data(){
      return {
        linkClass : "linkDefault",
        navClass : "navDefault",
        spaceClass : "normalScreenSpace",
        activeIdx : 0,
        isAboutVisible :false,
      
      }
    },
    components:{
      NavbarComponent,AboutTitle,RoomPage,featurePage,ContactPage,
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
      
      resizeSapce(){
        const screen = window.screen.width;
        if(screen<=768){
          this.spaceClass = "smallScreenSpace";
        }else if(screen<=480){
          this.spaceClass = "miniScreenSpace"
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
