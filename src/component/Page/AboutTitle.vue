  <template>
      <div class="AboutPage" >
        <div class="TextFade" :class="{'FadeisTrue':isVisible}">
          <h1 class="AboutTitle">關於</h1>
          <p style="margin-top:5%;">遠離城市喧囂，藏身於青翠的山林間</p>
          <p>百花林民宿，正是現代人理想中的避風港</p>
          <p style="margin-top:10%;">百花林民宿坐落於南投山上的一間民宿</p>
          <p>這裡可以俯瞰層層疊疊的山巒和無邊的綠野，仿佛置身於仙境</p>
          <p>無論是清晨的薄霧還是傍晚的夕陽，每一刻都能帶您重回大自然的懷抱</p>
          <p>且鄰近知名景點——日月潭，您可以泛舟湖上</p>
          <p>騎行環湖自行車道或者參觀潭邊的寺廟和文化景點</p>
          <p>無論您是自然愛好者還是文化探索者，都能在此找到樂趣</p>
        </div> 
        <div class="wrapper" @click="showPopup()">
          <div class="carousel">
            <div><img src="@/img/aboutTitle/0.jpg" alt="Beautiful View"></div>
            <div><img src="@/img/aboutTitle/1.jpg" alt="Beautiful View"></div>
            <div><img src="@/img/aboutTitle/3.jpg" alt="Beautiful View"></div>
            <div><img src="@/img/aboutTitle/4.jpg" alt="Beautiful View"></div>
            <div><img src="@/img/aboutTitle/5.jpg" alt="Beautiful View"></div>
          </div>
        </div>  
        <Transition name="popAnimation">
          <div v-if="showPop!==null" class="overlay">
              <div class="popup">
                <div class="fadePopup">
                  <div><img src="@/img/aboutTitle/0.jpg" alt="Beautiful View"><span class="material-symbols-outlined" @click="closePopup">close</span></div>
                  <div><img src="@/img/aboutTitle/1.jpg" alt="Beautiful View"><span class="material-symbols-outlined" @click="closePopup">close</span></div>
                  <div><img src="@/img/aboutTitle/3.jpg" alt="Beautiful View"><span class="material-symbols-outlined" @click="closePopup">close</span></div>
                  <div><img src="@/img/aboutTitle/4.jpg" alt="Beautiful View"><span class="material-symbols-outlined" @click="closePopup">close</span></div>
                  <div><img src="@/img/aboutTitle/5.jpg" alt="Beautiful View"><span class="material-symbols-outlined" @click="closePopup">close</span></div>
                    
                  
                 
                </div>
                
              </div>
          </div>
        </Transition>
      </div>  
      
  </template>

  <script>
  import 'slick-carousel/slick/slick.min.js';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import $ from 'jquery';

  export default{
    name: "AboutPage",
    data(){
      return{
        showPop: null,

      }
    },
    mounted(){
      this.initSlick();
      
    },
    props: {
      isVisible:Boolean
    },
    methods: {
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
          this.showPop = null;
      },
      initSlick(){
        $('.carousel').slick({
          slidesToShow:1,
          dots:true,
          centerMode:true,
          autoplay:true,
          autoplaySpeed:13000,
          infinite:true,
          arrows:false,
          centerPadding:'0px',
          responsive:[
            {
              breakpoint:768,
              settings:{
                centerPadding:'0px',
                dots:false,  
              }
            }
          ]
        });
      },
    
    }
  }
  </script>

<style>
  .AboutPage{
    display: flex;
    justify-content:space-around;
  }
  .AboutPage h1{
    margin-top: 5vh;
    margin-left: 17%;
    font-size: 4.5vw;
  }
  .AboutPage p{
    font-size: 1.1rem;
    margin-left: 17%;
    color: #272626;
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
    background-size: cover;
    border: 1px solid #272626;
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

  .TextFade{
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 2s ease-in-out;
    z-index: 10;
    padding-right: 5%;
  }
  .FadeisTrue{
      opacity: 1;
  }
  

  .wrapper{
    display: flex;
    align-items: center;
    margin-top: 15%;
    margin-right: 3%;
    width: 40%;
    height: 40%;
    padding-top: 5px;
    text-align: center;
    z-index: 11;
  }
  .carousel{
    width: 90%;
    margin: 0px;
  }
  .carousel img{
    width: 100%;
    height: auto  ;
    object-fit: cover;

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

  @media screen and (max-width: 768px) {
    .overlay .popup{
        width: 90%;
        padding-top: 10%;
    }
  }
  @media screen and (max-width: 480px) {
    .AboutPage p {
      font-size: 2.2vw;
    }
    .wrapper{
      margin-top: 20%;
    }
    .overlay .popup{
      width: 90%;
    }
  }
</style>