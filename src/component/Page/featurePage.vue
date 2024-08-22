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
                {name:"鄰近日月潭",fIcon:"near_me",t:"鄰近知名景點日月潭，可輕鬆前往這個地點享受多種活動",img:require("@/img/Feature/2023-10-25 (2).jpg"),cardStatus:null},
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