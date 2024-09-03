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
        <div class="wrapper">
          <div class="carousel">

            <div><img src="../../img/introduce/2023-10-25.jpg" alt=""></div>
            <div><img src="../../img/Room/493410_0.jpg" alt=""></div>
          </div>
        </div>
      </div>  
      
  </template>

  <script>
  import 'slick-carousel/slick/slick.min.js';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import $ from 'jquery';

  export default{
    name: "AboutPage",
    mounted(){
      this.initSlick();
      
    },
    props: {
      isVisible:Boolean
    },
    methods: {
      initSlick(){
        $('.carousel').slick({
          slidesToShow:1,
          dots:true,
          centerMode:true,
          autoplay:true,
          autoplaySpeed:3000,
          infinite:true,
          arrows:false,
          centerPadding:'0px',
          responsive:[
            {
              breakpoint:768,
              settings:{
                centerPadding:'0px',  
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
    height: 85vh;
  }
  .AboutPage h1{
    margin-top: 5vh;
    margin-left: 17%;
    font-size: 4.5vw;
  }
  .AboutPage p{
    font-size: 1.3vw;
    margin-left: 17%;
    color: #272626;
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


  @media screen and (max-width: 480px) {
    .AboutPage{
      height: 30vh;
    }
    .AboutPage p{
      font-size: 1.6vw;
    }
    .wrapper{
      margin-top: 20%;
    }
    
  }
</style>