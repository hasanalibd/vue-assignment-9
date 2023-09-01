<script setup>
import {ref} from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router';
const route = useRoute();

let id = route.params.id
console.log(id);

let postlist = ref()
let isLoading=ref(true)

    Post()
    async function Post(){
        let url = "https://basic-blog.teamrabbil.com/api/post-newest"
        let res = await axios.get(url)
        let data = res.data
        postlist.value = data
        isLoading.value=false
        console.log(data);
    } 

</script>

<template>
    <div class="mt-2 container">
        <div v-if="isLoading" class="d-flex justify-content-center mt-5">
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div v-else class="col">
            <div class="card" v-for="list in postlist" :key="list.id" v-show="list.id==id">
            <img :src="list.img ? list.img : 'https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2016/07/26.jpg'">
            <div class="card-body">
                <h5 class="card-title">{{ list.title }}</h5>
                <p class="card-text">{{ list.short }}</p>
            </div>
            </div>
        </div>
    </div>
</template>