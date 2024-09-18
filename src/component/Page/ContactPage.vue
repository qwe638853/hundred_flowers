<template>
     <div class="ContactPage" id="ContactPage">
      <div class=LeftContact>
        <div class="ContactTitle">
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
          <img src="@/img/icon/line_88.png">
          <p>官方LINE：@702ncvei</p>
        </div>
      </div>
      <div class="RightContact">
        <div class="MapContainer">
          <GoogleMap
            api-key="AIzaSyCaF4BdO7G2hGHtiOvWegqyPqEy_OwloDU"
            class="MapClass"
            :center="MapCenter"
            :zoom="MapSize">
          </GoogleMap>
        </div>
    
        <div class="AddressCell">
            <span class="material-symbols-outlined">location_on</span>
            <p>南投縣魚池鄉文正巷2-39號</p>
          </div>
      </div>
    </div>
</template>

<script>
import { GoogleMap} from 'vue3-google-map';

export default{
    name:"ContactPage",
    data(){
        
        return {
            MapSize:16,
            MapCenter:{lat:23.88942370632728, lng:120.9187565787977},
        }
    },
    methods:{
        SetMapSize(){
            const screen = window.screen.width;
            if(screen<=768){
                this.MapSize = 16   ;
            }
        }
    },
    components:{
        GoogleMap,
    },
    mounted(){
        this.SetMapSize();
    }
}
</script>

<style>

.ContactPage{
    margin-top: 20%;
    padding-top: 5%;
    padding-bottom: 5%;
    min-height: 10vh;
    display: flex;
    background-color: #4D6A6D;
} 
.ContactTitle{
    text-align: center;
    margin-bottom: 3rem;
}
.ContactCell{
    margin-top: 2rem;
    width: 80%;
    margin-left: 22%;
    display: flex;
    align-items: center;

}
.ContactCell img{
    width: 2rem;
    height: 2rem; 
    margin-inline: 0.5rem;
}
.LeftContact{
      height: 100%;
      width: 50%;
}
.LeftContact h1{
    color: #eee;

    letter-spacing: 4.1vw;
}
.LeftContact span{
    font-size: 2rem;
    color:#eee;
    margin-inline: 0.5rem;
}
.LeftContact p{
    color: #eee;
}
.RightContact{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
}
.MapContainer{
    overflow: hidden;
    border: 5px  solid rgba(255, 109, 18, 0.4);
   

    width: 70%;
    height: 23vw;
    box-shadow:
        3.2px 3.3px 2.2px rgba(0, 0, 0, 0.021),
        6.4px 6.7px 5.3px rgba(0, 0, 0, 0.04),
        9.9px 10.3px 10px rgba(0, 0, 0, 0.059),
        14.1px 14.6px 17.9px rgba(0, 0, 0, 0.077),
        21.3px 22.1px 33.4px rgba(0, 0, 0, 0.099),
        50px 52px 80px rgba(0, 0, 0, 0.16);
}
.MapClass{
    height: 100%;
    width: 100%;
}
.AddressCell{
    margin-top: 2rem;
    display: flex;
    align-items: center ;

}
.RightContact span{
    font-size: 2rem;
    color:#eee;         
}
.RightContact p{
    color: #eee;
} 
    
@media screen and (max-width:768px) {   
    .ContactCell{
        margin-left: 9%; 
    }
    .MapContainer{
        height: 30vw;
        border: 3px  solid rgba(255, 109, 18, 0.4);
        margin-top: 20%;
    }
}

@media screen and (max-width:480px) {
    .ContactTitle{
        margin-bottom: 1rem;
    }
    h1{
        font-size: 6vw;
    }
    .LeftContact span{
        font-size: 1.5rem;
    }
    .RightContact span{
        margin-left: 0;
        font-size: 1rem;
    }
    .ContactCell{
        margin-top: 7vw;
    }
    .ContactCell img{
        width: 1.5rem;
        height: 1.5rem;
    }
    p{
        font-size: 2.5vw;
    }
    .ContactCell{
        margin-left: 9%; 
    }
    .MapContainer{
        height: 45vw;
        border: 1.5px  solid rgba(255, 109, 18, 0.4);
        margin-top: 35%;
    }

}

</style>