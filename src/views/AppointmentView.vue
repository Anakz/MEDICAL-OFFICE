<template>
<div>
  <h2 class="text-center mb-3 mt-n5">Appointment Page</h2>
  <div class="container mb-6">
    <div class="row">
      <div class="col ml-10 mr-8" style="height: 420px; overflow: auto;">
        <table class="table table-light">
          <thead class="">
            <tr>
              <th scope="col">Patient</th>
              <th scope="col">Hour</th>
              <th scope="col">Date</th>
              <th scope="col">Reason</th>
              <th scope="col">Prescription</th>
              <th scope="col">Payment</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-active text-center text-uppercase">
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">ToDAYS</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
            <tr v-for="(item, index) in sortedAppointmentsToday" :key="index">
              
              <td class="text-dark ">{{ searchPatient(item.patient) }}</td>
              <td class="text-dark">{{ getHour(item.date) }} <!-- {{item.date.toString().substr(11, 7)}} --></td>
              <td class="text-dark">{{ getDate(item.date) }}</td>
              <td class="text-dark">{{ item.reason }}</td>
              <td class="text-dark">{{ item.prescription }}</td>
              <td class="text-dark">{{ paymentStatus(item.price, item.totalPaid) }}</td>
              <td>
                  <a class="btn" title="Edit">
                    <i style="color: #2FCCA9;" class="fas fa-edit"></i>
                  </a>
                  <a class="btn" title="Delete">
                    <i style="color: #2FCCA9;" class="fas fa-trash-alt"></i>
                  </a>
              </td>
            </tr>
            <tr class="table-active text-center text-uppercase">
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">NEXT DAYS</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
            <tr v-for="(item, index) in sortedAppointmentsOtherDay" :key="index">
              
              <td class="text-dark ">{{ searchPatient(item.patient) }}</td>
              <td class="text-dark">{{ getHour(item.date) }} <!-- {{item.date.toString().substr(11, 7)}} --></td>
              <td class="text-dark">{{ getDate(item.date) }}</td>
              <td class="text-dark">{{ item.reason }}</td>
              <td class="text-dark">{{ item.prescription }}</td>
              <td class="text-dark">{{ paymentStatus(item.price, item.totalPaid) }}</td>
              <td>
                <a class="btn" title="Edit">
                  <i style="color: #2FCCA9;" class="fas fa-edit"></i>
                </a>
            
                <a class="btn" title="Delete">
                      <i style="color: #2FCCA9;" class="fas fa-trash-alt"></i>
                </a>  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="container mt-10 mb-n5">
    <div class="row">
      <div class="col ml-10">
        <div class="card mb-3" style=" max-width: 500px; height: 115px; background: #ffffff; color: black; " >
          <div class="row g-0">
            <div class="col-md-2 m-4">
              <i style="color: #65c2c3" class="fa-solid fa-calendar-days fa-4x ml-5" > </i>
            </div>
            <div class="col-md-8">
              <div class="card-body ml-5 mt-3">
                <h5 class="card-title">
                  {{totalAppointment()}} Total Appointments
                </h5>
                <p class="card-text">
                  <small class="text-dark"> Last updated 3 mins ago </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 text-center mt-8 " style="height: 75px;">
        <!-- <a class="mt-n5">
          <i class="fas fa-calendar-plus"></i>
          ADD AN APPOINTMENT
        </a> -->
        <a @click="toggleModalAddAppointment()" style="background-color: #65c2c3;" class="btn text-decoration-none text-light">
          <i style="color: #ffffff" class="fas fa-calendar-plus"></i>
          ADD AN APPOINTMENT
        </a>
      </div>
    </div>
  </div>
</div>
  <AppointmentModalFormAdd @AddAppointment="AddAppointment" @toggleModalAddAppointment="toggleModalAddAppointment" :isOpenAddAppointment="isOpenAddAppointment" />
</template>

<script setup>
import {onBeforeMount, onMounted, ref, computed } from 'vue'
import Axios from "axios";
import {useRoute} from 'vue-router'
import AppointmentModalFormAdd from '../components/modals/AppointmentModalFormAdd.vue'

const route = useRoute()
const appointments = ref(null)
const patients = ref(null)

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

  patients.value = JSON.parse(route.params.patients)._value;
  appointments.value = JSON.parse(route.params.appointments)._value;
}
onMounted(() => {
  getAllPatientsFromAPIFunction();
  getAllAppointmentsFromAPIFunction();
  if ( route.params.users && route.params .patients){ /*  && route.params.users.length >1 && route.params.patients.length >1 */

    patients.value = JSON.parse(route.params.patients)._value;
    appointments.value = JSON.parse(route.params.appointments)._value;
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

//START--------------------------------------GET-LOGIN-INFORMATION---------------

const userConnect = computed(() =>{
    console.log("in computed Appointment userCOnnect")
    console.log(userConnect.value)
    return localStorage.length > 0 ? localStorage : null
})
//END----------------------------------------GET-LOGIN-INFORMATION---------------

//START--------------------------To-extract-the-name-of-the-patient-to-display-it-in-APPOINTMENT-LIST------------------------
const searchPatient = (id) => {
  // console.log("searchPatient")
  // console.log(id)
  if (patients && patients.value) {
    const OnePatient = patients.value.filter((patient) => patient.id === id);
    let fullNamePatient ="PRIVATE"
    // console.log(OnePatient);
    if (OnePatient.length>0) {
      fullNamePatient = OnePatient[0].firstName + " " + OnePatient[0].lastName;
    }
    return fullNamePatient;
  }
  return "NaN";
};
//END--------------------------To-extract-the-name-of-the-patient-to-display-it-in-APPOINTMENT-LIST------------------------


//START--------------------------To-extract-the-hour-of-the-appointment-------------------------
const getHour = (date) => {

  let hour = date.toString().substr(11, 2)+"h"+date.toString().substr(14, 2)+"min"
  // console.log(date)
  return hour
};
//END--------------------------To-extract-the-hour-of-the-appointment------------------------

//START--------------------------To-extract-the-hour-of-the-appointment-------------------------
const getDate = (date) => {

  let day = date.toString().substr(0, 10)
  // console.log(date)
  return day
};
//END--------------------------To-extract-the-hour-of-the-appointment------------------------

//START--------------------------Sort-Appointments-By-Date----------------------
// if (appointments && appointments.value) {
  
//   const sortedAppointments = ref(appointments.value.sort())
//   console.log(sortedAppointments)
// }

const currentAppointments = computed(() => {
    // if (props.OneMedicalFile && props.OneMedicalFile.length != 1 ) {
        
    //     console.log("OneMedicalFile is undefined")
    //     console.log(props.OneMedicalFile)
    // }
        // console.log(props.OneMedicalFile)
  if(appointments && appointments.value){
    let current_date = new Date().toISOString().slice(0, 10)
    return appointments != null ? appointments.value.filter((appointment) => current_date <= appointment.date.substr(0, 10) ) : null
    
    // return this.arrays.slice().sort(function(a, b){ return (a.name > b.name) ? 1 : -1; });
  }
})
//END--------------------------To-extract-the-hour-of-the-appointment------------------------

//START--------------------------Sort-Appointments-By-Date----------------------
// if (appointments && appointments.value) {
  
//   const sortedAppointments = ref(appointments.value.sort())
//   console.log(sortedAppointments)
// }

const sortedAppointments = computed(() => {
    // if (props.OneMedicalFile && props.OneMedicalFile.length != 1 ) {
        
    //     console.log("OneMedicalFile is undefined")
    //     console.log(props.OneMedicalFile)
    // }
        // console.log(props.OneMedicalFile)
  if(currentAppointments && currentAppointments.value){
    if (userConnect && userConnect.value && userConnect.value.length == 2) {
      
      return currentAppointments != null ? currentAppointments.value.slice().sort(function(a, b){ return (a.date > b.date) ? 1 : -1; }) : null
    }
    else if(userConnect && userConnect.value && userConnect.value.length == 1){
      if( patients && patients.value){
      const firstName = userConnect.value.name.toString().split(' ')[0]
      const lastName = userConnect.value.name.toString().split(' ')[1]

      const OnePatient = patients.value.filter((patient) => patient.firstName == firstName && patient.lastName == lastName);
      console.log("OnePatient appointment")
      console.log(OnePatient)
      return currentAppointments != null ? currentAppointments.value.slice().sort(function(a, b){ return (a.date > b.date) ? 1 : -1; }).filter((appointment) => appointment.patient == OnePatient[0].id) : null
      }
    }
    // return this.arrays.slice().sort(function(a, b){ return (a.name > b.name) ? 1 : -1; });
  }
})
//END--------------------------To-extract-the-hour-of-the-appointment------------------------

//START-----------------------------SORTE-APPOINTMENT-TODAY----------------------------------

const sortedAppointmentsToday = computed(() => {
  if (sortedAppointments && sortedAppointments.value) {
    
    let current_date = new Date().toISOString().slice(0, 10)
    return sortedAppointments != null ? sortedAppointments.value.filter((appointment) => appointment.date.substr(0, 10) == current_date ): ''
  }
})
//END-------------------------------SORTE-APPOINTMENT-TODAY----------------------------------

//START-----------------------------SORTE-APPOINTMENT-TODAY----------------------------------

const sortedAppointmentsOtherDay = computed(() => {
  if (sortedAppointments && sortedAppointments.value) {
    
    let current_date = new Date().toISOString().slice(0, 10)
    return sortedAppointments != null ? sortedAppointments.value.filter((appointment) => appointment.date.substr(0, 10) > current_date ): ''
  }
})
//END-------------------------------SORTE-APPOINTMENT-TODAY----------------------------------


//START-----------------------------Payment-STATUS-----------------------------------

const paymentStatus = (price, paid) =>{
  return paid - price < 0 ? 'Non Paid' : 'Paid'
}

//END-------------------------------Payment-STATUS-----------------------------------


//START----------------------To-calculate-all-appointments-of-this-day----------------------

const total_appointments = ref(0)
const totalAppointment = () =>{
  if (appointments && appointments.value) {
    if (userConnect && userConnect.value.length == 1) {
      if (patients && patients.value) {
        
        const firstName = userConnect.value.name.toString().split(' ')[0]
        const lastName = userConnect.value.name.toString().split(' ')[1]
        const OnePatient = patients.value.filter((patient) => patient.firstName == firstName && patient.lastName == lastName)
        const total_appointment = appointments.value.filter((appointment) => appointment.patient == OnePatient[0].id)
        return total_appointment.length
      }
    }
    else if(userConnect && userConnect.value.length == 2){

      return appointments.value.length
    }
  }
  return 0
}

//END------------------------To-calculate-all-appointments-of-this-day----------------------


//START----------------------ADD-APPOINTMENT-MODAL-------------------------

const isOpenAddAppointment = ref(false)

const toggleModalAddAppointment = () =>{
  isOpenAddAppointment.value = !isOpenAddAppointment.value
}


//END------------------------ADD-APPOINTMENT-MODAL-------------------------

//START-ADD-APPOINTMENT

const AddAppointment = (appointmentToAdd) =>{
  console.log("from AppointmentView.vue, this is appoitmentToAdd")
  console.log(appointmentToAdd)
  const date = appointmentToAdd.date+"T"+appointmentToAdd.hour+"Z"
  const toto = ({date:date, paymentStatus: false, price: 300, totalPaid: 0, reason: appointmentToAdd.reason, prescription: "Not Yet", patient: appointmentToAdd.patient})
  // console.log("currentAppointments.value")
  // console.log(currentAppointments.value)
  // console.log(toto)
  Axios.post("http://127.0.0.1:8000/appointment/", {
    date: date,
    paymentStatus: false,
    price: 300,
    totalPaid: 0,
    reason: toto.reason,
    prescription: "Not yet",
    isDelete: null,
    patient: toto.patient,
    user: 1,
  })
  .then(res =>{
    console.log(res)
    appointments.value.push(toto)
    toggleModalAddAppointment()
    // window.location.reload(false)
  })
}

//END-ADD-APPOINTMENT


</script>

<style>

</style>