<template>
    <div>
        <img v-for="(item,index) in serverData" :src="item.picUrl":key="index" alt="">
    </div>
</template>

<script>
    export default {
        asyncData ({ store, route }) {
            // 触发 action 后，会返回 Promise
            return store.dispatch('getBanners')
        },
        name: "test1",
        data(){
            return{
              // serverData:[]
            }
        },
        metaInfo:{
            title:'Test1',
            meta: [{                 // set meta
                name: '测试1',
                content: 'My serverRender 测试1'
            }],
        },
        computed:{
            serverData(){
                return this.$store.getters.banners
            }
        },
        created(){
            // this.getData()
        },
        methods:{
            getData(){
                this.$http.get('/api/music').then(res=>{
                    this.serverData = res.data.data.banners
                })
            }
        }
    }
</script>

<style scoped>

</style>
