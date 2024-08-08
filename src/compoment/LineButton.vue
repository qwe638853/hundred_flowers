<template>
    <div class="line-button"></div>
</template>

<script>

export default{
    name:"LineButton",
    mounted(){
        const script =  document.createElement('script');
        script.src = "https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
}
</script>