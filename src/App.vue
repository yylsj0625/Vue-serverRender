<template>
    <div id="app" data-server-rendered="true">
        <router-link to="/">Home</router-link>
        <router-link to="/test1.html">Test1</router-link>
        <router-link to="/test2">Test2</router-link>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        metaInfo:{
            title:'appVue'
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        height: 100px;
    }
</style>
