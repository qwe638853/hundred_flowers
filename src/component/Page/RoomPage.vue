<template>
     <div class="RoomIntroduce" >
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
                <div><img src="@/img/introduce/2023-10-25.jpg" alt=""></div>
                <div><img src="@/img/Room/493410_0.jpg" alt=""></div>
              </div>
              <span class="material-symbols-outlined" @click="closePopup">close</span>
            </div>
        </div>
      </Transition>
    </div>
</template>

<script>
  import $ from 'jquery';

  export default{
      name: "RoomPage",
      data(){
          return{
              showPop: false,
              Roomimg :[
                  {name:"白虎四人房",img:require("@/img/Room/493410_0.jpg"),logo:require("@/img/Room/RoomLogo/1.png")},
                  {name:"玄武四人房",img:require("@/img/Room/493431_0.jpg"),logo:require("@/img/Room/RoomLogo/4.png")},
                  {name:"朱雀雙人房",img:require("@/img/Room/493413_0.jpg"),logo:require("@/img/Room/RoomLogo/2.png")},
                  {name:"青龍雙人房",img:require("@/img/Room/493415_0.jpg"),logo:require("@/img/Room/RoomLogo/3.png")},
              ],
          }
      },
      methods:{
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
      }
  }
</script>

<style>
  .RoomIntroduce{
    height: 100vh;
    & h1{
      padding-left: 25vh;
      padding-bottom: 13vh;
      padding-top: 5vh;
      font-size: 60px;
    }
  }
 
  
  .cardContainer{
    display: grid;
    justify-items: center;
    align-items: center;
    margin-inline: 20vh;
    grid-template-columns: repeat(4, 1fr);
    gap:3rem;
    & .content{
      padding: 0.938rem 0.625rem;
      text-align: center;
      & h3{
        text-transform: capitalize;
        font-size: clamp(1.5rem,1.3909rem + 0.4364vw,1.8rem);
      }
    }
  }

  .cardInner{
    position: relative;
    width:13rem;
    background-color: #eee;
    height: 13.75rem;
    border-bottom-right-radius: 0;
    border-radius: 1.25rem;
    overflow: hidden;
    & .box{
      width: 100%;
      height: 100%;
      background-color: #eee;
      border-radius: 3.25rem;
      overflow: hidden;
      & .boximg{
        position: absolute;
        inset:0;
        z-index: 5;
        & img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 150;
    backdrop-filter: blur(2px);
    padding: 4em 0;
    & .popup{
      position: relative;
      width: 50%;
      height: 100%;
      background-color: transparent;
      padding: 1rem;
      margin: auto;
    }
    & .fadePopup{
      width: 90%;
      margin: auto;
      border: 2px solid #272626;
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    & span{
      position: absolute;
      font-size: 36px;
      color: #fff;
      right: 3rem;
      top: 1rem;
      cursor: pointer;
    }
  }
   
  .popAnimation-enter-active{
    animation: fadepop 0.2s ease-out;
  }
  .popAnimation-leave-active{
    animation: fadepop reverse 0.3s ease-out;
  }

  @keyframes fadepop {
    0% {transform: scale(0);}
    100% {transform: scale(1);}
  }

  .icon{
    position: absolute;
    bottom: -0.375rem;
    right: -0.375rem;
    width: 4rem;
    height: 4rem;
    border-top-left-radius: 50%;
    background: #eee;
    z-index: 7;
    &:hover .iconbox{
      transform: scale(1.1);
    }
    &::before{
      position: absolute;
      content: "";
      bottom: 0.375rem;
      left:-1.25rem;
      background-color: transparent;
      width: 1.25rem;
      height: 1.25rem;
      border-bottom-right-radius: 1.25rem;
      z-index: 7;
      box-shadow: 0.313rem 0.313rem 0 0.313rem #eee; 
    } 
    &::after{
      position: absolute;
      content: "";
      top: -1.25rem;
      right:0.375rem;
      background-color: transparent;
      width: 1.25rem;
      height: 1.25rem;
      border-bottom-right-radius: 1.25rem;
      z-index: 7;
      box-shadow: 0.313rem 0.313rem 0 0.313rem #eee; 
    }
    & .iconbox{
      position: absolute;
      inset: 0.6rem;
      border-radius: 50%;
      display: flex;
      background: #bbb;
      justify-content: center;
      align-items: center;
      transform: 0.3s;
      z-index: 10;
      & img{
        width: 3rem;
        height: 3rem;
      }
    }
  }
</style>