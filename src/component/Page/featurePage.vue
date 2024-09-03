<template>
    <div class="FeaturePage">
      <h1>民宿特色</h1>
      <div class="featureContainer">
        <div v-for="(item, index) in features" :key="index"
        class="feature"  @click="filpFeature(index,item.cardStatus)">
          <div class="flipContainer">
            <div class="front">
              <span class="material-symbols-outlined">{{item.fIcon}}</span>
              <h2>{{ item.name }}</h2>
              <div class="CenterText">
                <span class="inText">{{ item.t }}</span>
              </div>
            </div>
            <div class="back">
              <img :src="item.img" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default{
    name:"featurePage",
    data(){
        return{
            features:[
                {name:"卡拉OK",fIcon:"mic_external_on",t:"提供專業卡拉OK設備，讓您歡唱整個假期",img:require("@/img/Feature/2023-10-24 (1).jpg"),cardStatus:null},
                {name:"烤肉設施",fIcon:"outdoor_grill",t:"設有烤肉空間及設施，享受BBQ的樂趣",img:require("@/img/Feature/2023-10-25 (2).jpg"),cardStatus:null},
                {name:"各類遊戲",fIcon:"casino",t:"提供麻將、撲克牌等等遊戲，讓您晚上也不無聊",img:require("@/img/Feature/2023-10-25 (2).jpg"),cardStatus:null},
                {name:"泡茶空間",fIcon:"local_cafe",t:"設有泡茶空間，無論是品茗聊天還是靜心獨處都非常合適",img:require("@/img/Feature/2023-10-25 (2).jpg"),cardStatus:null},
                {name:"美麗風景",fIcon:"landscape",t:"放眼望去，是大自然；宛如世外桃源，享受寧靜之美",img:require("@/img/Feature/2023-10-25 (2).jpg"),cardStatus:null},
                {name:"精緻廚房",fIcon:"skillet",t:"準備了設備齊全的廚房，可以隨心所欲的盡情料理",img:require("@/img/Feature/2023-10-25 (2).jpg"),cardStatus:null},
            ],
        }
    },
    methods:{
        filpFeature(idx,cardStatus){
        let f = document.querySelectorAll(".feature")[idx];
        if(cardStatus===null){
          f.classList.add('backFeature');
          cardStatus=true;
        }
        if(!cardStatus){
          f.classList.toggle('backFeature');
          f.classList.toggle('frontFeature');
          cardStatus=false;
        }else{
          f.classList.toggle('backFeature');
          f.classList.toggle('frontFeature');
          cardStatus=true;
        }
      },
    }
}
</script>

<style>
  .FeaturePage{
    min-height: 5vh;
    & h1{
      padding-top: 10%;
      padding-bottom: 5%;
      text-align: center;
      font-size: 4.5vw;
    }
  }
 
  .featureContainer{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(30%,1fr));
    max-width: 1200px;
    justify-items: center;
    align-items: center;
    margin-inline: 10%;
    gap: 1.5rem;
    padding: 1vw;
  }
  .featureContainer h2{
    font-size: 1.5vw;
    color: #eee;
    padding: 1vw;
    font-weight: 600;
  }
  .featureContainer .material-symbols-outlined{
    margin-top: 1vw;
    font-size: 4vw;
    color: #eee;
  }
  
  .feature{
    perspective: 1000px;
    height: 18vw;
    width: 100%;
    align-items: center;
    
  }
  .flipContainer{
    position: relative;
    height: 100%;
    border-radius: 1.25rem;
    
    background-color: #4D6A6D;
    transform-style: preserve-3d;
    transition: all 0.8s;
  }
  .back,.front{
    display: flex;
    flex-direction: column;
    position: absolute;
    backface-visibility: hidden;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .front{
    padding: 1vw;
  }
  .back{
    transform: rotateY(180deg);
    & img{
      height: 100%;
      width: 100%;
      border: 0.2rem solid #272626;
      object-fit: cover;
      border-radius: 1.05rem;
    }
  }
  .backFeature .flipContainer{
    transform: rotateY(180deg);
  }
  .frontFeature .flipContainer{
    transform: rotateY(180deg);
  }
  .CenterText{

    text-align: center;
  }
  .CenterText span{
    font-size: 1.2vw;
  }
  .inText{
    display:inline-block;
    color: #eee;
    text-align: left;
    line-height: 1.5;
    padding-left: 0.5rem;
    font-weight: 400;
  }

  @media screen and (max-width:768px) {

    .featureContainer{
      grid-template-columns: repeat(auto-fit,minmax(33%,1fr));

    }

    .featureContainer h2{
     padding: 2vw;
     padding-bottom: 0;
    }
    .feature{
      height: 8rem;
      width: 100%;
    }
    .featureContainer .material-symbols-outlined{
      margin-top: 2vw;
      font-size: 4.5vw;
    }

    .inText{
      padding: 0;
    }

  }
   @media screen and (max-width:480px) {

    .featureContainer{
      grid-template-columns: repeat(auto-fit,minmax(30%,1fr));

    }
    .featureContainer h2{
     padding: 2vw;
     padding-bottom: 0;
    }
    .feature{
      height: 4rem;
      width: 100%;
    }
    .featureContainer .material-symbols-outlined{
      margin-top: 2vw;
      font-size: 4.5vw;
    }
    .inText{
      padding: 0;
    }
    .CenterText{
      transform: translateY(-1.5vw);
    }
  }
  @media screen and (max-width:480px) {
    
  }

</style>