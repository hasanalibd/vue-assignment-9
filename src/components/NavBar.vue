<script setup>
import {RouterLink, RouterView} from "vue-router"
import {ref} from 'vue'
import axios from 'axios'

let listItem = ref()

list()
async function list(){
    let url = "https://basic-blog.teamrabbil.com/api/post-categories"
    let res = await axios.get(url)
    let data = res.data
    listItem.value = data
}

</script>

<template>
    <div class="container-fluid mt-2">
        <nav class="navbar navbar-expand-lg bg-secondary-subtle container">
        <div class="container-fluid">
          <!-- <a class="navbar-brand" href="#">MyBlog</a> -->
          <RouterLink to="/" class="navbar-brand">MyBlog</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item" v-for="item in listItem" :key="item.id">
                <a class="nav-link active" aria-current="page" href="#">{{item.name}}</a>
              </li>
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ব্লগ 
                </a>
                <ul class="dropdown-menu">
                  <li><RouterLink class="dropdown-item" to="/">সর্বশেষ ব্লগ</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/list">ব্লগের তালিকা</RouterLink></li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <RouterView/>
    </div>
</template>