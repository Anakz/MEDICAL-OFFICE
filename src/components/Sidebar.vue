<template>
<div style="background: #005B78;">
    <v-navigation-drawer v-model="props.drawer" app absolute  style="background: #005B78;">

        <v-img style="background: white;" class="" src="">
            <div class="text-center mt-4">
                <v-avatar class="nb-4" color="grey darken-1" size="64">
                    <v-img aspect-ratio="30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMdowjm6pAZrpGi7LVZiH1Fru58AByKCt0g&usqp=CAU" />
                </v-avatar>
                <h2 class="white--text">Welcome Doctor</h2>
            </div>
        </v-img>

        <v-divider>
            
        </v-divider>

        <!-- <v-list>
            <v-list-item v-for="[icon, text] in links" :key="icon" link >
                <v-list-item-icon>
                    <v-icon>{{ icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list> -->
        <v-card
            class="mx-auto"
            max-width="500"
        >
            <!-- <v-list>
            <v-list-item-group v-model="model">
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list> -->
            <div class="list-group"  style="background: #005B78;">
                <a style="background: transparent; color: white" @click="goToDashBorad"  class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-house mr-1"></i>
                    Dashboard
                </a>
                <div v-if="userConnect && userConnect.length&& userConnect.length > 0">
                  <div v-if="userConnect && userConnect.length&& userConnect.length ==2">
                    
                    <a style="background: transparent; color: white" @click="goToStaff" class="list-group-item list-group-item-action">
                        <i class="fa-solid fa-people-group mr-1"></i>
                        Staffs
                    </a>
                  <a style="background: transparent; color: white" @click="goToPatient" class="list-group-item list-group-item-action">
                      <i class="fa-solid fa-face-smile mr-1"></i>
                      Patients
                  </a>
                  </div>
                  <a style="background: transparent; color: white" @click="goToAppointment" class="list-group-item list-group-item-action">
                      <i class="fa-solid fa-calendar-days mr-1"></i>
                      Appointments
                  </a>
                  <div v-if="userConnect && userConnect.length&& userConnect.length ==2">
                    <a style="background: transparent; color: white" @click="goToPayment" class="list-group-item list-group-item-action">
                        <i class="fa-solid fa-dollar-sign mr-1"></i>
                        Payments
                    </a>
                    
                  <a style="background: transparent; color: white" @click="goToSchedule" class="list-group-item list-group-item-action">
                      <i class="fa-solid fa-clock mr-1"></i>
                      Schedule
                  </a>
                  </div>
                  <a style="background: transparent; color: white" @click="goToSetting" class="list-group-item list-group-item-action">
                      <!-- <i class="fa-solid fa-gear mr-1"></i> -->
                      <i class="fas fa-user-cog mr-1"></i>
                      Setting
                  </a>
                </div>
                <!-- <div>
                  <a style="background: transparent; color: white" @click="goToLogin" class="list-group-item list-group-item-action">
                      <i class="fa-solid fa-gear mr-1"></i>
                      Login
                  </a>
                </div> -->
            </div>
        </v-card>
    </v-navigation-drawer>
    </div>
</template>
<script setup>
import {ref, defineProps, onMounted, computed} from 'vue'
import Axios from 'axios'
import {useRouter} from 'vue-router'

const props = defineProps(["drawer"])
const drawer = props.drawer

const AllUserFromApiVariable = ref()
const AllPatientFromApiVariable = ref()
const AllAppointmentFromApiVariable = ref()
const AllScheduleFromApiVariable = ref()
const AllMedicalFileFromApiVariable = ref()

const router = useRouter()

const goToDashBorad = () => {
  router.push({name: 'home', params:{
      users: JSON.stringify(AllUserFromApiVariable),
      patients: JSON.stringify(AllPatientFromApiVariable),
      appointments: JSON.stringify(AllAppointmentFromApiVariable),
  }})
}
const goToStaff = () => {
  router.push({name: 'staff', params:{ok: JSON.stringify(AllPatientFromApiVariable)}})
}
const goToPatient = () => {
  router.push({name: 'patient', params:{data: JSON.stringify(AllPatientFromApiVariable)}})
}
const goToAppointment = () => {
  router.push({name: 'appointment', params:{data: JSON.stringify(AllAppointmentFromApiVariable)}})
}
const goToPayment = () => {
  router.push({name: 'payment', params:{data: JSON.stringify(AllPatientFromApiVariable)}})
}
const goToSchedule = () => {
  router.push({name: 'schedule', params:{data: JSON.stringify(AllScheduleFromApiVariable)}})
}
const goToSetting = () => {
  router.push({name: 'setting', params:{data: JSON.stringify(AllUserFromApiVariable)}})
}
const goToLogin = () => {
  router.push({name: 'login', params:{data: JSON.stringify(AllUserFromApiVariable)}})
}


function getAllUsersFromAPIFunction() { //Method that contain all line of users in my DB
  Axios.get('http://127.0.0.1:8000/user/')
  .then(response => (
    AllUserFromApiVariable.value = response.data
  ))
  
    console.log("AllUserFromApiVariable")
    console.log(AllUserFromApiVariable)
}

function getAllPatientsFromAPIFunction() { //Method that contain all line of users in my DB
  Axios.get('http://127.0.0.1:8000/patient/')
  .then(response => (
    AllPatientFromApiVariable.value = response.data
  ))    
    console.log("AllPatientFromApiVariable")
    console.log(AllPatientFromApiVariable)
}

function getAllAppointmentsFromAPIFunction() { //Method that contain all line of users in my DB
  Axios.get('http://127.0.0.1:8000/appointment/')
  .then(response => (
    AllAppointmentFromApiVariable.value = response.data
  ))
    console.log("AllAppointmentFromApiVariable")
    console.log(AllAppointmentFromApiVariable)
}

function getAllSchedulesFromAPIFunction() { //Method that contain all line of users in my DB
  Axios.get('http://127.0.0.1:8000/schedule/')
  .then(response => (
    AllScheduleFromApiVariable.value = response.data
  ))
    console.log("AllScheduleFromApiVariable")
    console.log(AllScheduleFromApiVariable)
}

function getAllMedicalFilesFromAPIFunction() { //Method that contain all line of users in my DB
  Axios.get('http://127.0.0.1:8000/medicalFile/')
  .then(response => (
    AllMedicalFileFromApiVariable.value = response.data
  ))
    console.log("AllMedicalFileFromApiVariable")
    console.log(AllMedicalFileFromApiVariable)
}

onMounted(() =>{

    getAllUsersFromAPIFunction()
    getAllPatientsFromAPIFunction()
    getAllAppointmentsFromAPIFunction()
    getAllSchedulesFromAPIFunction()
    getAllMedicalFilesFromAPIFunction()
})
const userConnect = computed(() =>{
    console.log("in computed SIDEBAR")
    console.log(userConnect.value)
    return localStorage.length > 0 ? localStorage : null
})

</script>
<style>

</style>
