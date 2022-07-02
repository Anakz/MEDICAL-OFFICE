<template>
<div style="background: #DEDEDE;">
  
  <h1 class="text-center mb-5">Dashboard Page</h1>

<div class="container">
  <div class="row">
   <div class="col-4">
      <div class="card mb-3" style="max-width: 350px; height: 115px; background: #ffffff; color: black">
        <div class="row g-0">
          <div class="col-md-2 m-4 ">
            <i style="color: #005B78;" class="fa-solid fa-hospital-user fa-4x ml-5"></i>
          </div>
          <div class="col-md-8">
            <div class="card-body ml-5 mt-3">
              <h5 class="card-title">{{patients != undefined ? patients.length : '0'}} Total Patients</h5>
              <p class="card-text">
                <small class="text-dark">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card mb-3" style="max-width: 350px; height: 115px; background: #ffffff; color: black;">
        <div class="row g-0">
          <div class="col-md-2 m-4">
            <i style="color: #65C2C3;" class="fa-solid fa-calendar-days fa-4x ml-5"></i>
          </div>

          <div class="col-md-8">
            <div class="card-body ml-5 mt-3">
              <h5 class="card-title">{{appointments != undefined ? appointments.length : '0'}} Appointment</h5>
              <p class="card-text">
                <small class="text-dark">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card mb-3" style="max-width: 350px; height: 115px; background: #ffffff; color: dark;">
        <div class="row g-0">
          <div class="col-md-2 m-4">
            <i style="color: #ECDC4B" class="fa-solid fa-dollar-sign fa-4x ml-5"></i>
          </div>

          <div class="col-md-8">
            <div class="card-body ml-5 mt-3">
              <!-- <h5 class="card-title">{{TotalPaid != undefined ? TotalPaid : '00'}} Payments</h5> -->
              <label type="hidden" v-for="(item, index) in appointments" :key="index" class="card-title"> {{TotalPaid =TotalPaid + item.price}}</label>
              <h5 class="card-title">{{TotalPaid != undefined ? TotalPaid : '0'}} Payments</h5>
              <p class="card-text">
                <small class="text-dark">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <div class="card mb-3" style="max-width: 350px; height: 115px; background: #ffffff; color: black">
        <div class="row g-0">
          <div class="col-md-2 m-4 ">
            <i style="color: #005B78;" class="fa-solid fa-hospital-user fa-4x ml-5"></i>
          </div>
          <div class="col-md-8">
            <div class="card-body ml-5 mt-3">
              <h5 class="card-title">1 654 New Patients</h5>
              <p class="card-text">
                <small class="text-dark">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card mb-3" style="max-width: 350px; height: 115px; background: #ffffff; color: black;">
        <div class="row g-0">
          <div class="col-md-2 m-4">
            <i style="color: #65C2C3;" class="fa-solid fa-calendar-days fa-4x ml-5"></i>
          </div>

          <div class="col-md-8">
            <div class="card-body ml-5">
              <h5 class="card-title">1 654 New Appointment</h5>
              <p class="card-text">
                <small class="text-dark">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card mb-3" style="max-width: 350px;  max-height: 115px; background: #ffffff; color: black;">
        <div class="row g-0">
          <div class="col-md-2 m-4">
            <i  style="color: #ECDC4B" class="fa-solid fa-dollar-sign fa-4x ml-5"></i>
          </div>

          <div class="col-md-8">
            <div class="card-body ml-5 mt-n3">
              <h5 class="card-title">1 654 Total Payments of this year</h5>
              <p class="card-text">
                <small class="text-dark">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 <!-- {{appointments}} -->
 <!--<table class="table">
        <thead class="">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Cin</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in patients" :key="index">
            <th class="text-dark" >{{item.firstName}}</th>
            <th class="text-dark" >{{item.lastName}}</th>
            <th class="text-dark" >{{item.cin}}</th>
            <th class="text-dark" >{{item.phone}}</th>
          </tr>
        </tbody>
      </table> -->
      <div class="container mt-15">
        <div class="row">
          <div class="col-7">
            <div class="card">
               <div class="card-header text-uppercase text-center">
                  Appointments List
               </div>
              <table class="table">
                <thead class="">
                  <tr>
                    <th scope="col">Patient</th>
                    <th scope="col">Date</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Prescription</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in appointments" :key="index">
                    <th class="text-dark" >{{item.user}}</th>
                    <th class="text-dark" >{{item.date}}</th>
                    <th class="text-dark" >{{item.reason}}</th>
                    <th class="text-dark" >{{item.prescription}}</th>
                  </tr>
                </tbody>
              </table>
          </div>
          </div>
          <div class="col-5">
            <div class="card">
               <div class="card-header text-uppercase text-center">
                  Staff
               </div>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import {ref, onMounted, onBeforeMount} from 'vue'
import Axios from 'axios'

const route = useRoute()
const users = ref()
const patients = ref()
const appointments = ref()

const TotalPatients = ref(0)


function getAllUsersFromAPIFunction() { //Method that contain all line of users in my DB
  Axios.get('http://127.0.0.1:8000/user/')
  .then(response => (
    users.value = response.data
  ))
  
}

function getAllPatientsFromAPIFunction() { //Method that contain all line of users in my DB
  Axios.get('http://127.0.0.1:8000/patient/')
  .then(response => (
    patients.value = response.data
  )) 
}

function getAllAppointmentsFromAPIFunction() { //Method that contain all line of users in my DB
  Axios.get('http://127.0.0.1:8000/appointment/')
  .then(response => (
    appointments.value = response.data
  ))
}

if (route.params.users && route.params.patients/*  && route.params.users.length >1 && route.params.patients.length >1 */) {
      users.value = JSON.parse(route.params.users)._value
      patients.value = JSON.parse(route.params.patients)._value
      appointments.value = JSON.parse(route.params.appointments)._value
      console.log("(Dashboard) users:")
      console.log(users)
      console.log("(Dashboard) patients:")
      console.log(patients)
      console.log("(Dashboard) patients.length:")
      console.log(patients.length)
      // console.log("data")
      // console.log(JSON.parse(route.params.ok)._value[0] )
    }
if (patients != undefined) {
  TotalPatients.value = patients.length
}
else{
  TotalPatients.value = 0
}

if (patients) {
  
  TotalPatients.value = patients.length
  console.log("TotalPatients")
  console.log(TotalPatients)
}

// onMounted(()=>{
//   users.value = JSON.parse(route.params.users)
// })



onMounted(() =>{
  getAllUsersFromAPIFunction()
  getAllPatientsFromAPIFunction()
  getAllAppointmentsFromAPIFunction()
    // console.log("Start onMounted")
    if (route.params.users && route.params.patients/*  && route.params.users.length >1 && route.params.patients.length >1 */) {
      users.value = JSON.parse(route.params.users)._value
      patients.value = JSON.parse(route.params.patients)._value
      console.log("(Dashboard) users:")
      console.log(users)
      console.log("(Dashboard) patients:")
      console.log(patients)
      // console.log("data")
      // console.log(JSON.parse(route.params.ok)._value[0] )
    }
    else {
      console.log("(Dashboard) else")
    }
})
onBeforeMount(()=>{
  if (route.params.users && route.params.patients/*  && route.params.users.length >1 && route.params.patients.length >1 */) {
      users.value = JSON.parse(route.params.users)._value
      patients.value = JSON.parse(route.params.patients)._value
    }
})

//Traitment
const TotalPaid = ref(0)
for (const key in patients){
  if(patients.hasOwnProperty(key)){
  console.log("Listening ");
    console.log(`${key} : ${patients[key]}`)
  }
}
// for (let key in patients) {
//   let value = patients[key];
//   TotalPaid.value += value.price

//   console.log("key : ");
//   console.log(key);
//   console.log("value : ");
//   console.log(value);
// }
// for (let i = 0; i < 5; i++) {
//   TotalPaid.value += i
// }
// for (let element in appointments) {
//   TotalPaid.value += 0+element.price
// }
// for (x of appointments) {
//   TotalPaid.value += x.id;
// }

</script>

<style>

</style>