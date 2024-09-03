<template>
     <nav :class="navClass" ref="navElement">
      <div class="logoContainer">
        <div class="Logo"></div>
      </div>
      
      <router-link  
      v-for = "(item) in NavItemArr"
      :key = "item.name"
      :to="item.href" replace
      :class = "linkClass"
      ref="link"
      >
      <span class="UnL">
        {{ item.name }} 
      </span>
    </router-link>
    </nav>
    <router-view></router-view>
</template>

<script>

export default{
    name: "NavbarComponent",
    props: ["navClass","linkClass"],
    data(){
        return {
            NavItemArr : [
                {name:"百花林民宿",href:"#HomePage"},
                {name:"關於",href:"#AboutPage"},
                {name:"房型介紹",href:"#RoomIntroduce"},
                {name:"民宿特色",href:"#FeaturePage"},
                {name:"聯繫我們",href:"#ContactPage"},
            ],
        }
    }
}
</script>


<style>
  nav{
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 100%;
    height: 10vh;
    justify-content:flex-start;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 100;
    transition: 0.3s ease;
  }
  .logoContainer{
    margin-top: 10px;
    height: 100px;
    width: 100px;
  }
  .Logo{
    height: 100%;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    
    transition: 0.3s ease;
  }
  .UnL{
    font-size: 17px;
    position: relative;
  }
  .UnL::after{
    content: "";
    position: absolute;
    left: 50%;
    right: 50%;
    border-bottom: 2px solid #ffffff;
    bottom: -3px;
    transition: 0.3s;
  }
  .UnL:hover::after{
    left: 0%;
    right: 0%;
  }

  .linkDefault{
    display: flex;
    
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 7rem;
    transition: 0.3s ease;
    text-decoration:  none;
    color: #ffffff;
  }

  .linkBlackMode{
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 7rem;
    text-decoration:  none;
    color: #272626; 
    transition: 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .navDefault{
    background-color: transparent;
    & .UnL::after{
      border-bottom: 2px solid #ffffff;
    }
  }
  .navDefault .Logo{
    background-image: url(../img/LOGO/LOGO_WHITE.png);
    margin-top: 10px;
  }
  .navBlackMode{
    background-color: #eee;
    & .UnL::after{
      border-bottom: 2px solid #272626;
    }
    
  }
  .navBlackMode .Logo{
      background-image: url(../img/LOGO/LOGO_BLACK.png);
      margin-top: 10px;
  }
  @media screen and (max-width: 768px) {
    .nav{
      height: auto;
      padding-left: 0px;
    }
    .linkDefault ,.linkBlackMode{
      width: 90%;
      margin-top: 3px;
      padding: 1px;
    }
    .UnL{
      font-size: 2.5vw;
    }
    .logoContainer{
      margin-top: 5px;
      width: 100%;
    }
    
  }
  
</style>

