<script setup>
    // import {RouterLink, RouterView} from "vue-router"
    import {ref} from 'vue'
    import axios from 'axios'

    let blogList = ref()

    list()
    async function list(){
        let url = "https://basic-blog.teamrabbil.com/api/post-list/2"
        let res = await axios.get(url)
        let data = res.data
        blogList.value = data
        console.log(data);
    }
</script>

<template>
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
        <div class="col" v-for="item in blogList" :key="item.id">
            <div class="card">
            <img :src="item.img ? item.img : 'https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2016/07/26.jpg'">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.short }}</p>
            </div>
            </div>
        </div>
</div>
</template>