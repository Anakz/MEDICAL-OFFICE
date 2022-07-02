<template>
  <v-app id="inspire" style="background: #DEDEDE;">

    
    <Sidebar :drawer="drawer" />
    <Header @handeDrawer="drawer = !drawer" />
    <!-- <Navbar @handeDrawer="drawer = !drawer" /> -->
    <!--  -->

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import {ref} from 'vue'

const drawer = ref(true)

function handeDrawer() {
  drawer.value = !drawer.value
}

// const AllUserFromApiVariable = ref() //Variable that contain all line of users in my DB

// function getAllUsersFromAPIFunction() { //Method that contain all line of users in my DB
//   Axios.get('http://127.0.0.1:8000/user/')
//   .then(response => (
//     AllUserFromApiVariable.value = response.data
//   ))
// }

// onMounted(()=>{
  
//   getAllUsersFromAPIFunction()

// })


</script>

<style >

</style>