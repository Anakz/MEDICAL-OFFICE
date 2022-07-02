<template>
        <v-app-bar 
            app
            color="white"
            elevate-on-scroll
            elevation="4"
            >

            <v-app-bar-nav-icon @click="$emit('handeDrawer')"></v-app-bar-nav-icon>
            <v-spacer />
            <!--<v-col lg="6" cols="12">
                 <v-form class="">
                    <input rounded outlined dense placeholder="Search" append-icon="mdi-magnify"/>
                </v-form>
                <form class="mt-10">
                    <v-text-field rounded outlined dense placeholder="Search" append-icon="mdi-magnify"/> 
                </form> 
            </v-col>-->
            <!-- <div class="container">
            <div class="row">
                <form>
                    <div class="col6">
                        <input class="form-control rounded"  placeholder="Search" />
                    </div>
                    <div class="col6">
                        <a class="text-decoration-none" href="/"> Search</a>
                    </div>
                </form>
            </div>
            </div> -->

            <!-- <v-toolbar-title>Title</v-toolbar-title> -->


            <v-spacer />
            <div v-if="userConnect && userConnect.length&& userConnect.length > 0">
                <a class="d-inline p-2 mr-5 text-decoration-none text-secondary">{{userConnect.name}}</a>
                <a @click="logoutButton()" class="d-inline p-2 mr-3 text-decoration-none text-secondary">Logout</a>
            </div>
            <div v-else>
                <a @click="goToLogin" class="d-inline p-2 mr-5 text-decoration-none text-secondary">Login</a>
                <a @click="toggleModalPatientFormAdd()" class="d-inline p-2 mr-3 text-decoration-none text-secondary">Register</a>
            </div>

            <!-- <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn> -->

        </v-app-bar>
        <PatientModalFormAdd @AddPatient="AddPatient" :isOpenPatientFormAdd="isOpenPatientFormAdd" @toggleModalPatientFormAdd="toggleModalPatientFormAdd"/>
</template>
<script setup>
import {ref, computed, onMounted} from 'vue'
import {useRouter} from 'vue-router'
import PatientModalFormAdd from './modals/PatientModalFormAdd.vue'
import Axios from 'axios'

const patients = ref(null)

const userConnect = computed(() =>{
    console.log("in computed HEADER userCOnnect")
    console.log(userConnect.value)
    return localStorage.length > 0 ? localStorage : null
})


function getAllPatientsFromAPIFunction() {
  //Method that contain all line of users in my DB
  Axios.get("http://127.0.0.1:8000/patient/").then(
    (response) => (patients.value = response.data)
  );
}

onMounted(() => {
    getAllPatientsFromAPIFunction()
})

const logoutButton = () =>{
    localStorage.removeItem('name', null)
    localStorage.removeItem('role', null)
    userConnect.value = null
    console.log(localStorage)
    console.log("userConnect")
    console.log(userConnect.value)
    // window.location.reload(false)
    window.location.href = ''
}
const router = useRouter()
const goToLogin = () => {
  router.push({name: 'login'})
}

const AddPatient = (patientToAdd) =>{

    if (patientToAdd && patientToAdd.value[0].firstName != "" && patientToAdd.value[0].lastName != "" && patientToAdd.value[0].cin != "" && patientToAdd.value[0].phone != "" && patientToAdd.value[0].email != "" && patientToAdd.value[0].password != "" && patientToAdd.value[0].address != "" && patientToAdd.value[0].gender != "" && patientToAdd.value[0].dateBirth != "") {
      patients.value.push(patientToAdd.value[0])
      Axios.post( "http://127.0.0.1:8000/patient/" , {
            firstName: patientToAdd.value[0].firstName,
            lastName: patientToAdd.value[0].lastName,
            cin: patientToAdd.value[0].cin,
            phone: patientToAdd.value[0].phone,
            email: patientToAdd.value[0].email,
            password: patientToAdd.value[0].password,
            address: patientToAdd.value[0].address,
            gender: patientToAdd.value[0].gender,
            dateBirth: patientToAdd.value[0].dateBirth,
            isDelete: null
            })
            .then(res => {
                // console.log(".then")
                // console.log(res.data)
                console.log(res)
            })
    }
                // window.location.href = '/login'
    //   console.log("PatientVie, after receive the patientToAdd")
      console.log(patientToAdd.value[0])
}
const isOpenPatientFormAdd = ref(false)
const toggleModalPatientFormAdd = () =>{
    isOpenPatientFormAdd.value = !isOpenPatientFormAdd.value
}

//je dois définir la methode register
const register = () =>{
    
}
</script>
<style>

</style>