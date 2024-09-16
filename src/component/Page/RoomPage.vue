<template>
  <div class="RoomIntroduce" id="RoomIntroduce" >
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
            <div class="icon" @click="showPopup(index)">
              <a href="#" class="iconbox">
                <img :src="item.logo" alt="icon">
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
      <div v-if="showPop!==null" class="overlay">
          <div class="popup">
            <div class="fadePopup">
              <div v-for="(item,idx) in popups[showPop]" :key="idx">
                <img :src=item alt="popup" loading="lazy">
                <span class="material-symbols-outlined" @click="closePopup">close</span>
              </div>
            </div>
          </div>
      </div>
    </Transition>
    <h2 style="margin-top: 5vh; margin-bottom: 5vw; text-align: center;">房間內均提供以下物品</h2>
    <div class="sparePartContainer">
      <div v-for="(item,index) in spareParts" :key="index" class="sparePart">
        
        <img :src="item.icon" alt="spareParts_icon">
        <h3>{{ item.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';

  export default{
      name: "RoomPage",
      data(){
          return{
              showPop: null,
              Roomimg :[
                {name:"朱雀四人房",img:require("@/img/Room/VermilionBird/4.jpg"),logo:require("@/img/Room/RoomLogo/2.png")},
                {name:"玄武四人房",img:require("@/img/Room/BlackTortoise/3.jpg"),logo:require("@/img/Room/RoomLogo/4.png")},
                {name:"白虎雙人房",img:require("@/img/Room/WhiteTiger/2.jpg"),logo:require("@/img/Room/RoomLogo/1.png")},
                {name:"青龍雙人房",img:require("@/img/Room/AzureDragon/3.jpg"),logo:require("@/img/Room/RoomLogo/3.png")},
              ],
              popups:[
                [require("@/img/Room/VermilionBird/4.jpg"),require("@/img/Room/VermilionBird/2.jpg"),require("@/img/Room/VermilionBird/3.jpg")],
                [require("@/img/Room/BlackTortoise/3.jpg"),require("@/img/Room/BlackTortoise/2.jpg")],
                [require("@/img/Room/WhiteTiger/2.jpg"),require("@/img/Room/WhiteTiger/3.jpg"),require("@/img/Room/WhiteTiger/4.jpg")],
                [require("@/img/Room/AzureDragon/3.jpg"),require("@/img/Room/AzureDragon/4.jpg"),require("@/img/Room/AzureDragon/2.jpg")],
              ],
              spareParts:[
                {name:"牙刷組",icon:require("@/img/SparePart/brush-teeth.png")},
                {name:"沐浴乳",icon:require("@/img/SparePart/gel.png")},
                {name:"洗髮乳",icon:require("@/img/SparePart/shampoo.png")},
                {name:"吹風機",icon:require("@/img/SparePart/hair-dryer.png")},
                {name:"浴巾",icon:require("@/img/SparePart/towel.png")},
                {name:"液晶電視",icon:require("@/img/SparePart/television.png")},
              ]
          }
      },
      methods:{
          showPopup(idx){
              this.showPop = idx;
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
              this.showPop = null;
          }
      }
  }
</script>

<style>
  .RoomIntroduce{
    min-height: 60vh;
    & h1{
      padding-left: 9%;
      padding-bottom: 3%;
      font-size: 4.5vw;
    }
  }
  h2{
    font-size: 2vw;
  }
  
  .cardContainer{
    display: grid;
    justify-items: center;
    align-items: start;
    margin-inline: 10%;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap:3rem;
    max-width: 1200px;
    & .content{
      padding: 0.938rem 0.625rem;
      text-align: center;

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
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    & span{
      position: absolute;
      font-size: 3vw;
      color: #fff;
      right: 1vw;
      top: 1vw;
      cursor: pointer;
    }
  }
  
  .popup{
    
    display: flex;
    align-items: center;
    position: relative;
    width: 50%;
    height: 100%;
    background-color: transparent;
    margin: auto;
  }
  .fadePopup{
    width: 100%;
    border: 2px solid #272626;
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
  .sparePartContainer{
    margin-inline: 15vw;
    display: grid;
    justify-content: center; 
    grid-template-columns:repeat(6,1fr);
  }
  .sparePart{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:15%;
    height: 6vw;
    width: auto;

  }
  .sparePart img{
    height: 80%;
    width: 80%;
    object-fit: contain;
  }
  .sparePart h3{
    margin-top:10%;
    font-size: 1.5vw;
    color: #272626;
  }
  @media screen and (max-width: 768px) {
    .sparePartContainer {
      margin-inline: 5vw; 
      grid-template-columns: repeat(3, 1fr);

    }
  
    .overlay .popup{
      width: 90%;
      padding-top: 10%;
    }

    .cardContainer {
      grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    }

    .sparePartContainer {
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    }

    h2{
      font-size: 2.5vw;
    }
    .sparePart h3{
      font-size: 2vw;
    }
  }
  


  @media screen and (max-width: 480px) {

    .cardContainer {
      grid-template-columns: repeat(auto-fit, minmax(50, 1fr)); /* 在小屏幕上單列顯示 */
    }
    .cardInner{
      width: 6rem;
      height: 6.375rem;
    }
    .icon{

      width: 2.9rem;
      height: 2.9rem;
    }
    .icon .iconbox img{
      width: 1.9rem;
      height: 1.9rem;
    }
    .overlay .popup{
      width: 90%;
    }

    .sparePartContainer {
      grid-template-columns: repeat(3, 1fr); /* 在小屏幕上三列顯示 */
    }

  } 
</style>