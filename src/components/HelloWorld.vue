<!--<template>-->
    <!--<div class="hello">-->
        <!--<div>-->
            <!--<label>账号:</label>-->
            <!--<input v-model="username" type="text"/>-->
        <!--</div>-->
        <!--<div>-->
            <!--<label>密码:</label>-->
            <!--<input v-model="password" type="text"/>-->
        <!--</div>-->
        <!--<button @click="login">登录</button>-->
        <!--<div>-->
            <!--<label>账号:</label>-->
            <!--<input v-model="username" type="text"/>-->
        <!--</div>-->
        <!--<div>-->
            <!--<label>密码:</label>-->
            <!--<input v-model="password" type="text"/>-->
        <!--</div>-->
        <!--<button @click="register">注册</button>-->

        <!--<button @click="addHtml">加载html</button>-->
        <!--&lt;!&ndash;<div v-html="ht"></div>&ndash;&gt;-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
        <!--name: 'HelloWorld',-->
        <!--props: {-->
            <!--msg: String-->
        <!--},-->
        <!--data() {-->
            <!--return {-->
                <!--username: '',-->
                <!--password: '',-->
                <!--ht: null-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--login() {-->
                <!--this.$http.post('/api/user/login', {username: this.username, password: this.password}).then(res => {-->
                    <!--console.log(res);-->
                    <!--alert(res.data.data)-->
                <!--})-->
            <!--},-->
            <!--register() {-->
                <!--this.$http.post('/api/user/register', {username: this.username, password: this.password}).then(res => {-->
                    <!--console.log(res);-->
                    <!--alert(res.data.data)-->
                <!--})-->
            <!--},-->
            <!--addHtml() {-->
                <!--this.$http.get('/api/user/html').then(res => {-->
                    <!--console.log(res);-->
                    <!--this.ht = res.data-->
                    <!--// alert(res.data.data)-->
                <!--})-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
    <!--h3 {-->
        <!--margin: 40px 0 0;-->
    <!--}-->

    <!--ul {-->
        <!--list-style-type: none;-->
        <!--padding: 0;-->
    <!--}-->

    <!--li {-->
        <!--display: inline-block;-->
        <!--margin: 0 10px;-->
    <!--}-->

    <!--a {-->
        <!--color: #42b983;-->
    <!--}-->
<!--</style>-->
