<template>
  <div v-if="userConnect && userConnect.length == 2 && userConnect.role =='DOCTOR'" style="background: #dedede;">
    <h1 class="text-center mb-5">Dashboard Page</h1>
    
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div
            class="card mb-3"
            style="
              max-width: 335px;
              height: 115px;
              background: #ffffff;
              color: black;
            "
          >
            <div class="row">
              <div class="col-md-2 m-4">
                <i
                  style="color: #005b78"
                  class="fa-solid fa-hospital-user fa-4x ml-5"
                ></i>
              </div>
              <div class="col-md-8">
                <div class="card-body ml-5 mt-3">
                  <h5 class="card-title">
                    {{ patients != undefined ? patients.length : "0" }} Total Patients
                  </h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div
            class="card mb-3"
            style="
              max-width: 335px;
              height: 115px;
              background: #ffffff;
              color: black;
            "
          >
            <div class="row g-0">
              <div class="col-md-2 m-4">
                <i
                  style="color: #65c2c3"
                  class="fa-solid fa-calendar-days fa-4x ml-5"
                ></i>
              </div>

              <div class="col-md-8">
                <div class="card-body ml-5 mt-3">
                  <h5 class="card-title">
                    {{allAppointmentThisDay()}}
                    {{
                      total_appointments_this_day != undefined ? total_appointments_this_day.length : "0"
                    }}
                    Today's Appointment
                  </h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div
            class="card mb-3"
            style="
              max-width: 335px;
              height: 115px;
              background: #ffffff;
              color: dark;
            "
          >
            <div class="row g-0">
              <div class="col-md-2 m-4">
                <i
                  style="color: #ecdc4b"
                  class="fa-solid fa-dollar-sign fa-4x ml-5"
                ></i>
              </div>

              <div class="col-md-8">
                <div class="card-body ml-5 mt-3">
                  <h5 class="card-title">
                    {{ allPayment() }} {{ total_payment }} Total Payed
                  </h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row ">
        <div class="col-4">
          <div
            class="card mb-3"
            style="
              max-width: 335px;
              height: 115px;
              background: #ffffff;
              color: black;
            "
          >
            <div class="row g-0">
              <div class="col-md-2 m-4">
                <i
                  style="color: #005b78"
                  class="fa-solid fa-hospital-user fa-4x ml-5"
                ></i>
              </div>
              <div class="col-md-8">
                <div class="card-body ml-5 mt-3">
                  <h5 class="card-title">{{ users != undefined ? users.length : "0" }} Total Staff</h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div
            class="card mb-3"
            style="
              max-width: 335px;
              height: 115px;
              background: #ffffff;
              color: black;
            "
          >
            <div class="row g-0">
              <div class="col-md-2 m-4">
                <i
                  style="color: #65c2c3"
                  class="fa-solid fa-calendar-days fa-4x ml-5"
                ></i>
              </div>

              <div class="col-md-8">
                <div class="card-body ml-5">
                  <h5 class="card-title">{{allAppointmentThisMonth()}} {{total_appointments_this_month}} Month Appointment</h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div
            class="card mb-3"
            style="
              max-width: 335px;
              max-height: 115px;
              background: #ffffff;
              color: black;
            "
          >
            <div class="row g-0">
              <div class="col-md-2 m-4">
                <i
                  style="color: #ecdc4b"
                  class="fa-solid fa-dollar-sign fa-4x ml-5"
                ></i>
              </div>

              <div class="col-md-8">
                <div class="card-body ml-5 mt-n3">
                  <h5 class="card-title">
                    {{ allPaymentThisYear() }}
                    {{ total_payment_this_year }} Total Payments of this year
                  </h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
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
    <div class="container mt-8 ml-10 mb-n1">
      <div class="row">
        <div class="col-7" style="height: 264px; overflow: auto;">
          <div class="card">
            <div class="card-header text-uppercase text-center">
              TODAY'S Appointments List
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
                <tr v-for="(item, index) in total_appointments_this_day" :key="index">
                  <!-- <th v-for="(element, indexo) in patients" :key="indexo" class="text-dark" >
                      <span v-if="element.id === item.id">{{element.firstName}} {{element.lastName}}</span>
                      <span v-else></span>
                    </th> -->
                  <th class="text-dark">{{ searchPatient(item.patient) }}</th>
                  <th class="text-dark">{{ item.date }}</th>
                  <th class="text-dark">{{ item.reason }}</th>
                  <th class="text-dark">{{ item.prescription }}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-4" style="height: 264px; overflow: auto;">
          <div class="card">
            <div class="card-header text-uppercase text-center">Staff</div>
            <table class="table">
              <thead class="">
                <tr>
                  <th scope="col">FULL NAME</th>
                  <th scope="col">ROLE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in users" :key="index">
                  <th class="text-dark">
                    <small>{{ item.firstName }}</small> {{ item.lastName }}
                  </th>
                  <th class="text-dark">{{ item.role }}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  -->

  <div v-if="userConnect && userConnect.length == 2 && userConnect.role !='DOCTOR'" style="background: #dedede;">
    <h1 class="text-center mb-5">Dashboard Page</h1>
    
    <div class="container ml-16">
      <div class="row ml-16">
        <div class="col-4 ml-16">
          <div
            class="card mb-3 ml-16"
            style="
              max-width: 335px;
              height: 115px;
              background: #ffffff;
              color: black;
            "
          >
            <div class="row">
              <div class="col-md-2 m-4">
                <i
                  style="color: #005b78"
                  class="fa-solid fa-hospital-user fa-4x ml-5"
                ></i>
              </div>
              <div class="col-md-8">
                <div class="card-body ml-5 mt-3">
                  <h5 class="card-title">
                    {{ patients != undefined ? patients.length : "0" }} Total Patients
                  </h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div
            class="card mb-3"
            style="
              max-width: 335px;
              height: 115px;
              background: #ffffff;
              color: black;
            "
          >
            <div class="row g-0">
              <div class="col-md-2 m-4">
                <i
                  style="color: #65c2c3"
                  class="fa-solid fa-calendar-days fa-4x ml-5"
                ></i>
              </div>

              <div class="col-md-8">
                <div class="card-body ml-5 mt-3">
                  <h5 class="card-title">
                    {{allAppointmentThisDay()}}
                    {{
                      total_appointments_this_day != undefined ? total_appointments_this_day.length : "0"
                    }}
                    Today's Appointment
                  </h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="row ml-16">
        <div class="col-4 ml-16">
          <div
            class="card mb-3 ml-16"
            style="
              max-width: 335px;
              height: 115px;
              background: #ffffff;
              color: black;
            "
          >
            <div class="row g-0">
              <div class="col-md-2 m-4">
                <i
                  style="color: #005b78"
                  class="fa-solid fa-hospital-user fa-4x ml-5"
                ></i>
              </div>
              <div class="col-md-8">
                <div class="card-body ml-5 mt-3">
                  <h5 class="card-title">{{ users != undefined ? users.length : "0" }} Total Staff</h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div
            class="card mb-3"
            style="
              max-width: 335px;
              height: 115px;
              background: #ffffff;
              color: black;
            "
          >
            <div class="row g-0">
              <div class="col-md-2 m-4">
                <i
                  style="color: #65c2c3"
                  class="fa-solid fa-calendar-days fa-4x ml-5"
                ></i>
              </div>

              <div class="col-md-8">
                <div class="card-body ml-5">
                  <h5 class="card-title">{{allAppointmentThisMonth()}} {{total_appointments_this_month}} Month Appointment</h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
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
    <div class="container mt-8 ml-10 mb-n1">
      <div class="row">
        <div class="col-7" style="height: 264px; overflow: auto;">
          <div class="card">
            <div class="card-header text-uppercase text-center">
              TODAY'S Appointments List
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
                <tr v-for="(item, index) in total_appointments_this_day" :key="index">
                  <!-- <th v-for="(element, indexo) in patients" :key="indexo" class="text-dark" >
                      <span v-if="element.id === item.id">{{element.firstName}} {{element.lastName}}</span>
                      <span v-else></span>
                    </th> -->
                  <th class="text-dark">{{ searchPatient(item.patient) }}</th>
                  <th class="text-dark">{{ item.date }}</th>
                  <th class="text-dark">{{ item.reason }}</th>
                  <th class="text-dark">{{ item.prescription }}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-4" style="height: 264px; overflow: auto;">
          <div class="card">
            <div class="card-header text-uppercase text-center">Staff</div>
            <table class="table">
              <thead class="">
                <tr>
                  <th scope="col">FULL NAME</th>
                  <th scope="col">ROLE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in users" :key="index">
                  <th class="text-dark">
                    <small>{{ item.firstName }}</small> {{ item.lastName }}
                  </th>
                  <th class="text-dark">{{ item.role }}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  -->
  
  <div class="" v-if="userConnect && userConnect.length == 1" style="background: #dedede">
    <h1 class="text-center mb-5">Dashboard Page</h1>
    
    <div class="container ml-16">
      <div class="row ml-16">

        <div class="col-4 ml-16">
          <div
            class="card mb-3"
            style="
              max-width: 335px;
              height: 115px;
              background: #ffffff;
              color: black;
            "
          >
            <div class="row g-0">
              <div class="col-md-2 m-4">
                <i
                  style="color: #65c2c3"
                  class="fa-solid fa-calendar-days fa-4x ml-5"
                ></i>
              </div>

              <div class="col-md-8">
                <div class="card-body ml-5 mt-3">
                  <h5 class="card-title">
                    {{allAppointmentThisDay()}}
                    {{
                      total_appointments_this_day != undefined ? total_appointments_this_day.length : "0"
                    }}
                    Today's Appointment
                  </h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 ml-5">
          <div
            class="card mb-3"
            style="
              max-width: 335px;
              height: 115px;
              background: #ffffff;
              color: dark;
            "
          >
            <div class="row g-0">
              <div class="col-md-2 m-4">
                <i
                  style="color: #ecdc4b"
                  class="fa-solid fa-dollar-sign fa-4x ml-5"
                ></i>
              </div>

              <div class="col-md-8">
                <div class="card-body ml-5 mt-3">
                  <h5 class="card-title">
                    {{ allPayment() }} {{ total_payment }} Total Payed
                  </h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row ml-16">
        
        <div class="col-4 ml-16 ">
          <div
            class="card mb-3"
            style="
              max-width: 335px;
              height: 115px;
              background: #ffffff;
              color: black;
            "
          >
            <div class="row g-0">
              <div class="col-md-2 m-4">
                <i
                  style="color: #65c2c3"
                  class="fa-solid fa-calendar-days fa-4x ml-5"
                ></i>
              </div>

              <div class="col-md-8">
                <div class="card-body ml-5">
                  <h5 class="card-title">{{allAppointmentThisMonth()}} {{total_appointments_this_month}} Month Appointment</h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 ml-5">
          <div
            class="card mb-3"
            style="
              max-width: 335px;
              max-height: 115px;
              background: #ffffff;
              color: black;
            "
          >
            <div class="row g-0">
              <div class="col-md-2 m-4">
                <i
                  style="color: #ecdc4b"
                  class="fa-solid fa-dollar-sign fa-4x ml-5"
                ></i>
              </div>

              <div class="col-md-8">
                <div class="card-body ml-5 mt-n3">
                  <h5 class="card-title">
                    {{ allPaymentThisYear() }}
                    {{ total_payment_this_year }} Total Payments of this year
                  </h5>
                  <p class="card-text">
                    <small class="text-dark"> Last updated 3 mins ago </small>
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
    <div class="container mt-8 ml-10 mb-n1">
      <div class="row">
        <div class="col-7" style="height: 264px; overflow: auto;">
          <div class="card">
            <div class="card-header text-uppercase text-center">
              TODAY'S Appointments List
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
                <tr v-for="(item, index) in total_appointments_this_day" :key="index">
                  <!-- <th v-for="(element, indexo) in patients" :key="indexo" class="text-dark" >
                      <span v-if="element.id === item.id">{{element.firstName}} {{element.lastName}}</span>
                      <span v-else></span>
                    </th> -->
                  <th class="text-dark">{{ searchPatient(item.patient) }}</th>
                  <th class="text-dark">{{ item.date }}</th>
                  <th class="text-dark">{{ item.reason }}</th>
                  <th class="text-dark">{{ item.prescription }}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-4" style="height: 264px; overflow: auto;">
          <div class="card">
            <div class="card-header text-uppercase text-center">Staff</div>
            <table class="table">
              <thead class="">
                <tr>
                  <th scope="col">FULL NAME</th>
                  <th scope="col">ROLE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in users" :key="index">
                  <th class="text-dark">
                    <small>{{ item.firstName }}</small> {{ item.lastName }}
                  </th>
                  <th class="text-dark">{{ item.role }}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div  v-if="!userConnect" class="container">
  <h2 class="text-center mb-16">HOME PAGE</h2>
    <div class="row">
      <div class="col-6 mt-16">
        <div class="mt-8">
          Welcome to my site, I am doctor Ahmed Amine El fadili, doctor and orthopedic surgeon, and I obtained several diplomas and trainings such as:

- Diplôme Inter Universitaire : Pathologie de l’appareil locomoteur liée à la pratique de sport Faculté de médecine de Grenoble (France) 2001-2002.



          Medical office specialists provide non-clinical administrative support at medical practices and healthcare facilities. Their duties include answering calls, scheduling appointments, and updating medical records. They are also required to verify medical insurance information and enter details into electronic billing systems
        </div>
      </div>
      <div class="col-6 ">
        <img style="height: 400px" :src="img" />
      </div>

    </div>
  </div>
{{userConnect && userConnect.length}}
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, onBeforeMount, computed } from "vue";
import Axios from "axios";
import img from '../assets/home.png'

const route = useRoute();
const users = ref();
const patients = ref();
const appointments = ref();

function AllPayments(params) {
  TEST = TEST + parseInt(params);

  console.log("TEST");
  console.log(TEST);
}
const userConnect = computed(() =>{
    console.log("in computed Appointment userCOnnect")
    console.log(userConnect.value)
    return localStorage.length > 0 ? localStorage : null
})

function getAllUsersFromAPIFunction() {
  //Method that contain all line of users in my DB
  Axios.get("http://127.0.0.1:8000/user/").then(
    (response) => (users.value = response.data)
  );
}

function getAllPatientsFromAPIFunction() {
  //Method that contain all line of users in my DB
  Axios.get("http://127.0.0.1:8000/patient/").then(
    (response) => (patients.value = response.data)
  );
}

function getAllAppointmentsFromAPIFunction() {
  //Method that contain all line of users in my DB
  Axios.get("http://127.0.0.1:8000/appointment/").then(
    (response) => (appointments.value = response.data)
  );
}

if ( route.params.users && route.params .patients){ /*  && route.params.users.length >1 && route.params.patients.length >1 */

  users.value = JSON.parse(route.params.users)._value;
  patients.value = JSON.parse(route.params.patients)._value;
  appointments.value = JSON.parse(route.params.appointments)._value;
  // console.log("(Dashboard) users:")
  // console.log(users)
  // console.log("(Dashboard) patients:")
  // console.log(patients)
  // console.log("(Dashboard) patients.length:")
  // console.log(patients.length)
  // console.log("data")
  // console.log(JSON.parse(route.params.ok)._value[0] )
}

onMounted(() => {
  console.log("localStorage")
  console.log(localStorage)
  getAllUsersFromAPIFunction();
  getAllPatientsFromAPIFunction();
  getAllAppointmentsFromAPIFunction();
  // console.log("Start onMounted")
  if ( route.params.users && route.params .patients){ /*  && route.params.users.length >1 && route.params.patients.length >1 */

    users.value = JSON.parse(route.params.users)._value;
    patients.value = JSON.parse(route.params.patients)._value;
    // console.log("(Dashboard) users:")
    // console.log(users)
    // console.log("(Dashboard) patients:")
    // console.log(patients)
    // console.log("data")
    // console.log(JSON.parse(route.params.ok)._value[0] )
  } else {
    // console.log("(Dashboard) else")
  }
});
onBeforeMount(() => {
  if (
    route.params.users &&
    route.params
      .patients /*  && route.params.users.length >1 && route.params.patients.length >1 */
  ) {
    users.value = JSON.parse(route.params.users)._value;
    patients.value = JSON.parse(route.params.patients)._value;
  }
});

/*START----------------------------------------------------------------TREATMENT---------------------------------------------------------*/

//START--------------------------To-extract-the-name-of-the-patient-to-display-it-in-APPOINTMENT-LIST------------------------
const searchPatient = (id) => {
  // console.log("searchPatient")
  // console.log(id)
  if (id != undefined) {
    
    if (patients && patients.value) {
      const OnePatient = patients.value.filter((patient) => patient.id === id);
      let fullNamePatient ="PRIVATE"
      // console.log(OnePatient);
      if (OnePatient.length>0) {
        fullNamePatient = OnePatient[0].firstName + " " + OnePatient[0].lastName;
      }
      return fullNamePatient;
    }
  }
  return "NaN";
};
//END--------------------------To-extract-the-name-of-the-patient-to-display-it-in-APPOINTMENT-LIST------------------------

//START----------------------To-calculate-all-payments-----------------------
const total_payment = ref(0);
const allPayment = () => {
  // console.log("START appointment")
  if (appointments && appointments.value) {
    // console.log(appointments.value.length)
    var toto = 0;
    const appointmentsPayment = ref(appointments.value)
    if(userConnect && userConnect.value && userConnect.value.length == 2){
      appointmentsPayment.value = appointments.value
    }
    else if(userConnect && userConnect.value && userConnect.value.length == 1){
      if(patients && patients.value){

        const firstName = userConnect.value.name.toString().split(' ')[0]
        const lastName = userConnect.value.name.toString().split(' ')[1]
        const OnePatient = patients.value.filter((patient) => patient.firstName == firstName && patient.lastName == lastName);
        appointmentsPayment.value = appointments.value.filter((appointment) => appointment.patient == OnePatient[0].id)
      }
    }
    for (let index = 0; index < appointmentsPayment.value.length; index++) {
      const element = appointmentsPayment.value[index];
      // console.log(element.price)
      let price = parseInt(element.price);
      toto += price;
    }
    total_payment.value = toto;
  }
  // console.log("END appointment")
};
//END----------------------To-calculate-all-payments-----------------------

//START----------------------To-calculate-all-payments-of-this-year--------------------

const total_payment_this_year = ref(0);
const allPaymentThisYear = () => {
  // console.log("START appointment YEAR")
  if (appointments && appointments.value) {
    let current_year = "";
    current_year = new Date().getFullYear();

    const appointmentsThisYear = ref(
      appointments.value.filter(
        (appointment) => appointment.date.substr(0, 4) == current_year
      )
    );
    const appointmentsPayment = ref(appointmentsThisYear.value)
    if(userConnect && userConnect.value && userConnect.value.length == 2){
      appointmentsPayment.value = appointmentsThisYear.value
    }
    else if(userConnect && userConnect.value && userConnect.value.length == 1){
      const firstName = userConnect.value.name.toString().split(' ')[0]
      const lastName = userConnect.value.name.toString().split(' ')[1]
      const OnePatient = patients.value.filter((patient) => patient.firstName == firstName && patient.lastName == lastName);
      appointmentsPayment.value = appointmentsThisYear.value.filter((appointment) => appointment.patient == OnePatient[0].id)
    }
    // console.log(appointmentsThisYear)
    var toto = 0;
    for (let index = 0; index < appointmentsPayment.value.length; index++) {
      const element = appointmentsPayment.value[index];
      let price = parseInt(element.price);
      toto += price;
    }
    total_payment_this_year.value = toto;
    // console.log("ff")
  }
  // console.log("Z")
  // console.log("END appointment YEAR")
};

// console.log(new Date().getFullYear())

//END----------------------To-calculate-all-payments-of-this-year----------------------


//START----------------------To-calculate-all-appointments-of-this-day----------------------

const total_appointments_this_day = ref(0)
const allAppointmentThisDay = () =>{
  if (appointments && appointments.value ) {
    let current_date = "";
    current_date = new Date().toISOString().slice(0, 10)

    const appointmentsThisDay = ref(null)
    if (userConnect && userConnect.value && userConnect.value.length == 2) {
      appointmentsThisDay.value = appointments.value.filter((appointment) => appointment.date.substr(0, 10) == current_date )
      
    } 
    else if(userConnect && userConnect.value && userConnect.value.length == 1){
        const firstName = userConnect.value.name.toString().split(' ')[0]
        const lastName = userConnect.value.name.toString().split(' ')[1]
        if (patients && patients.value ) {
          
          const OnePatient = patients.value.filter((patient) => patient.firstName == firstName && patient.lastName == lastName);
        
          appointmentsThisDay.value = appointments.value.filter((appointment) => (appointment.date.substr(0, 10) == current_date) && appointment.patient == OnePatient[0].id )
        }
    }

    total_appointments_this_day.value = appointmentsThisDay.value

    // console.log(total_appointments_this_day.value)

    // console.log(appointmentsThisDay)
    // console.log(new Date().toISOString().slice(0, 10))
    // console.log("FIN")
  }
}

//END------------------------To-calculate-all-appointments-of-this-day----------------------

//START----------------------To-calculate-all-appointments-of-this-day----------------------

const total_appointments_this_month = ref(-1)
const allAppointmentThisMonth = () =>{
  if (appointments && appointments.value) {
    let current_date = "";
    current_date = new Date().toISOString().slice(0, 7)
// console.log("DEBUT")
    const appointmentsThisMonth = ref(appointments.value.filter((appointment) => appointment.date.substr(0, 7) == current_date ));

    if (userConnect && userConnect.value && userConnect.value.length == 2) {
      
      appointmentsThisMonth.value = appointments.value.filter((appointment) => appointment.date.substr(0, 7) == current_date )
      
    } 
    else if(userConnect && userConnect.value && userConnect.value.length == 1){
        const firstName = userConnect.value.name.toString().split(' ')[0]
        const lastName = userConnect.value.name.toString().split(' ')[1]
        if (patients && patients.value ) {
          
          const OnePatient = patients.value.filter((patient) => patient.firstName == firstName && patient.lastName == lastName);
        
          appointmentsThisMonth.value = appointments.value.filter((appointment) => (appointment.date.substr(0, 7) == current_date) && appointment.patient == OnePatient[0].id )
        }
    }

    total_appointments_this_month.value = appointmentsThisMonth.value.length

    // console.log(total_appointments_this_day.value)

    // console.log(appointmentsThisDay)
    // console.log(new Date().toISOString().slice(0, 7))
    // console.log("FIN")
  }
}

//END------------------------To-calculate-all-appointments-of-this-day----------------------

//START----------------------To-calculate-all-appointments-of-this-day----------------------


/*END------------------------------------------------------------------TREATMENT---------------------------------------------------------*/
</script>

<style></style>
