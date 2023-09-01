<script setup>
    // import {RouterLink, RouterView} from "vue-router"
    import PostCard from '../components/PostCard.vue';
    import {ref} from 'vue'
    import axios from 'axios'

    let newPost = ref()
    let isLoading=ref(true)

    Post()
    async function Post(){
        let url = "https://basic-blog.teamrabbil.com/api/post-newest"
        let res = await axios.get(url)
        let data = res.data
        newPost.value = data
        isLoading.value=false
        console.log(data);
    }
</script>

<template>
    <div class="container mx-auto">
        <!-- <h1 class="text-4xl text-green-500 text-center" v-if="isLoading">Loading....</h1> -->
        <div v-if="isLoading" class="d-flex justify-content-center mt-5">
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
            <PostCard v-for="item in newPost" :key="item.id" :item="item" />
        </div>
    </div>
</template>