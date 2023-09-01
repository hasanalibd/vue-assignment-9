<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    item:Object
})

</script>

<template>
    <div class="col">
            <div class="card">
            <img :src="item.img ? item.img : 'https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2016/07/26.jpg'">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <!-- <p class="card-text">{{ item.short }}</p> -->
                <!-- <button type="button" class="btn btn-primary">Details</button> -->
                <button type="button" class="btn btn-outline-secondary">
                    <RouterLink :to="{name: 'postDetails', params:{id: item.id}}" class="dropdown-item">Details
                    </RouterLink>
                </button>
            </div>
            </div>
        </div>
</template>