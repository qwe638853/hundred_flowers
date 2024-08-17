<template>
     <nav :class="navClass" ref="navElement">
      <div class="Logo"></div>
      <router-link 
      v-for = "(item,idx) in NavItemArr"
      :key = "item.name"
      :to="item.href"
      :class = "linkClass"
      @click="('menuClick',idx)"
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