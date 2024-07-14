<template>
    <div class = "div1">
      <li v-for = "i in 50" :key="i">About Page</li>
    </div>
  </template>
  
  <script>
  export default {
    // component options
  }
  </script>

<style>
div1{
    width: 50%;
    height: 10px;
    background-color: #ccc;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
}
h1{
    font-size: large;
}
</style>
  