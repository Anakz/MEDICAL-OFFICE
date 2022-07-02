<template>
    <h1 class="text-center mb-8">Patient Page</h1>
      <div class="container">
        <div class="row" style="height: 464px;overflow: auto;">
          <div class="col-4" v-for="(item, index) in freshPatients" :key="index">
            <div class="card mb-3" style=" max-width: 400px; height: 220px; background: #ffffff; color: black; " >
              <div class="row g-0">
                <div class="col-md-2 mr-6 mt-5">
                    <div class="m-4" v-if="item.gender.toString().toUpperCase() == 'MAN'">
                      <i style="color: #005b78" class="fas fa-male fa-6x mt-5"></i>
                    </div>
                    <div class="col-md-2 m-4" v-else>
                      <i style="color: #005b78" class="fas fa-female fa-6x mt-5"></i>
                    </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body mt-3">
                    <p class="card-text"> <b>Name &nbsp; :                   </b>{{item.firstName}} {{item.lastName}} </p>
                    <p class="card-text"> <b>Gender :            </b>{{item.gender}} </p>
                    <p class="card-text"> <b>Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :  </b>{{calcule_age(item.dateBirth)}} </p>
                    <p class="card-text"> <b>Cin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </b>{{item.cin}} </p>
                    <div class="card-text mt-n4 text-center">
                      <!-- <small class="text-dark"> Last updated 3 mins ago {{item.id}} XX</small> -->
                      <a @click="getOneMedicalFile(item.id, item.firstName, item.lastName)" class="text-decoration-none btn" title="Medical File">
                        <!-- <i class="fas fa-eye text-success fa-lg"></i> -->
                        <i style="color: #2FCCA9;" class="fas fa-folder-open fa-lg"></i>
                      </a>
                      <button class="btn" title="Edit">
                        <i @click="patientModalFormEdit(item.id, item.firstName, item.lastName)" style="color: #2FCCA9;" class="fas fa-edit fa-lg"></i>
                      </button>
                      <button class="btn" title="Delete">
                        <i @click="DeletePatient(item.id)" style="color: #2FCCA9;" class="fas fa-trash-alt fa-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div class="float-end mt-8 mr-1">
            <a @click="toggleModalPatientFormAdd()" style="background-color: #65c2c3;" class="btn text-decoration-none text-light">
              <i style="color: #ffffff" class="fas fa-calendar-plus"></i>
              ADD A PATIENT
            </a>
          </div>
      </div>
      <!-- <button @click="toggleModal()">Open Modal</button> -->
      <MedicalFileModal :isOpen="isOpen" @toggleModal="toggleModal" :OneMedicalFile="OneMedicalFile" :OneMedicalFileName="OneMedicalFileName" :PatientId="PatientId"/>
      <PatientModalFormAdd @AddPatient="AddPatient" :isOpenPatientFormAdd="isOpenPatientFormAdd" @toggleModalPatientFormAdd="toggleModalPatientFormAdd"/>
      <PatientModalFormEdit @EditPatient="EditPatient" :isOpenPatientFormEdit="isOpenPatientFormEdit" @toggleModalPatientFormEdit="toggleModalPatientFormEdit" :PatientEdit="PatientEdit" :PatientName="PatientName"/>
      <!-- {{medicalFiles}} -->
</template>


<script setup>
import {computed, onBeforeMount, onMounted, ref } from 'vue'
import {useRoute} from 'vue-router'
import Axios from "axios";
import MedicalFileModal from '../components/modals/MedicalFileModal.vue'
import PatientModalFormAdd from '../components/modals/PatientModalFormAdd.vue'
import PatientModalFormEdit from '../components/modals/PatientModalFormEdit.vue'

const route = useRoute()
// const users = ref();
const patients = ref()
const medicalFiles = ref(null)


function getAllPatientsFromAPIFunction() {
  //Method that contain all line of users in my DB
  Axios.get("http://127.0.0.1:8000/patient/").then(
    (response) => (patients.value = response.data)
  );
}
function getAllMedicalFilesFromAPIFunction() { //Method that contain all line of users in my DB
  Axios.get('http://127.0.0.1:8000/medicalFile/')
  .then(response => (
    medicalFiles.value = response.data
  ))
}

if ( route.params.users && route.params .patients){ /*  && route.params.users.length >1 && route.params.patients.length >1 */

  // users.value = JSON.parse(route.params.users)._value;
  patients.value = JSON.parse(route.params.patients)._value;
  // appointments.value = JSON.parse(route.params.appointments)._value;
}

onMounted(() => {
  // getAllUsersFromAPIFunction();
  getAllPatientsFromAPIFunction();
  getAllMedicalFilesFromAPIFunction();
  // getAllAppointmentsFromAPIFunction();
  // console.log("Start onMounted")
  if ( route.params.users && route.params .patients){ /*  && route.params.users.length >1 && route.params.patients.length >1 */

    // users.value = JSON.parse(route.params.users)._value;
    patients.value = JSON.parse(route.params.patients)._value;
    // console.log("(Dashboard) users:")
    // console.log(users)
    // console.log("(Dashboard) patients:")
    // console.log(patients)
    // console.log("data")
    // console.log(JSON.parse(route.params.ok)._value[0])
  } else {
    // console.log("(Dashboard) else")
  }
});

onBeforeMount(() => {
  if ( route.params.users && route.params .patients){ /*  && route.params.users.length >1 && route.params.patients.length >1 */

    // users.value = JSON.parse(route.params.users)._value;
    patients.value = JSON.parse(route.params.patients)._value;
  }
});

// console.log("I am in StaffView.vue")
// console.log(patients.value)

/*START--------------------------------------TREATMENT---------------------------------*/

//START--------------------------Calcule-THE-AGE----------------------------

const calcule_age = (dateBirth) => {

  let current_date = new Date().getFullYear();
  let birthday_date = dateBirth.substr(0, 4)
  return current_date-birthday_date
}

//END----------------------------Calcule-THE-AGE----------------------------


//START----------------------------MODAL----------------------------

const isOpen = ref(false)
const OneMedicalFile = ref(null)
const OneMedicalFileName = ref(null)
const PatientEdit = ref(null)
const PatientName = ref(null)
const PatientId = ref(null)
const toggleModal = () =>{
    isOpen.value = !isOpen.value
}
const isOpenPatientFormAdd = ref(false)
const toggleModalPatientFormAdd = () =>{
    isOpenPatientFormAdd.value = !isOpenPatientFormAdd.value
}

const getOneMedicalFile = (id, firstName, lastName) =>{
    var result = ""
    var fullName = ""
    if (id != 999) {
        if (medicalFiles && medicalFiles.value) {
            
            result = medicalFiles.value.filter((medicalFile) => parseInt(medicalFile.patient) === parseInt(id) )
            // console.log("medical file")
            // console.log(OneMedicalFile.value)
            // console.log(medicalFiles.value)
        }
        if (firstName != null && lastName != null) {
            fullName = firstName +" "+ lastName
        }
            // console.log("id")
            // console.log(id)
    }
    OneMedicalFile.value = result
    PatientId.value = id
    OneMedicalFileName.value = fullName
    toggleModal()
// console.log("Verifier OneMedicalFile")
// console.log(OneMedicalFile.value)
}


//END------------------------------MODAL----------------------------

//START------------------------------Fresh-Patients----------

// const sortedAppointmentsOtherDay = computed(() => {
//   if (sortedAppointments && sortedAppointments.value) {
    
//     let current_date = new Date().toISOString().slice(0, 10)
//     return sortedAppointments != null ? sortedAppointments.value.filter((appointment) => appointment.date.substr(0, 10) > current_date ): ''
//   }
// })
const freshPatients = computed(()=>{
  if(patients && patients.value)patients.value = patients.value.filter((patient) => patient.isDelete == null)
  return patients != null ? patients.value : null
})
// const freshMedicalFiles = computed(()=>{
//   if(medicalFiles && medicalFiles.value)medicalFiles.value = medicalFiles.value.filter((medicalFile) => medicalFile.isDelete == null)
//   return medicalFiles != null ? medicalFiles.value : null
// })

//END--------------------------------Fresh-Patients----------

//START-------------------------------ADD-PATIENT----------

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
                // console.log(res)
            })
    }
      console.log("PatientVie, after receive the patientToAdd")
      console.log(patientToAdd.value[0])
}

// const refreshPatient = () =>{
//   freshPatients.value = patients.value.filter((patient) => patient.isDelete == null)
// }
//END---------------------------------ADD-PATIENT----------

//START---------------------------------DELETE-PATIENT----------

const DeletePatient = (id) =>{
  if (id) {
    var patientToDelete = patients.value.filter((patient) => patient.id == id)
    if(patientToDelete.length == 1){
      var date = new Date().toISOString().slice(0, 10)
      Axios.patch('http://127.0.0.1:8000/patient/'+id+'/', {isDelete : date})
      .then(res =>{
        console.log("res")
        console.log(res)
        console.log(res.data)
      })
      const aide = ref(patients.value.filter((patient)=> patient.id != id))
      patients.value = aide.value
      // window.location.reload(false); 
      // refreshPatient()
      // patients.value = patients.value.filter((patient) => patient.isDelete == "null")
      // patients.value = patients.value.filter((patient) => patient.isDelete == null)
      // console.log("patients")
      // console.log(patients)
      // freshPatients.value = patients.value.filter((patient) => patient.id != id)
      // console.log(date)
      // console.log(patientToDelete.length)
    }
    else{
      
      }
  }
}
//END-----------------------------------DELETE-PATIENT----------

//START---------------------------------EDIT-PATIENT--------------
// ----------

const isOpenPatientFormEdit = ref(false)
const toggleModalPatientFormEdit = () =>{
    isOpenPatientFormEdit.value = !isOpenPatientFormEdit.value
}
const patientModalFormEdit = (id, firstName, lastName) =>{
    
    var result = ""
    var fullName = ""
    if (id != 999) {
        if (patients && patients.value) {
            
            result = patients.value.filter((patient) => parseInt(patient.id) === parseInt(id) )
            // console.log("medical file")
            // console.log(OneMedicalFile.value)
            // console.log(medicalFiles.value)
        }
        if (firstName != null && lastName != null) {
            fullName = firstName +" "+ lastName
        }
            // console.log("id")
            // console.log(id)
    PatientEdit.value = result
    PatientName.value = fullName
    toggleModalPatientFormEdit()
    }
    else{
      alert("User not found")
    }
// console.log("Verifier OneMedicalFile")
// console.log(OneMedicalFile.value)
}
// ----------

const EditPatient = (patientToEdit) =>{

    if (patientToEdit && patientToEdit[0].firstName != "" && patientToEdit[0].lastName != "" && patientToEdit[0].cin != "" && patientToEdit[0].phone != "" && patientToEdit[0].email != "" && patientToEdit[0].password != "" && patientToEdit[0].address != "" && patientToEdit[0].gender != "" && patientToEdit[0].dateBirth != "") {
      // patients.value.push(patientToAdd.value[0])
      Axios.put( "http://127.0.0.1:8000/patient/"+patientToEdit[0].id+"/" , {
            firstName: patientToEdit[0].firstName,
            lastName: patientToEdit[0].lastName,
            cin: patientToEdit[0].cin,
            phone: patientToEdit[0].phone,
            email: patientToEdit[0].email,
            password: patientToEdit[0].password,
            address: patientToEdit[0].address,
            gender: patientToEdit[0].gender,
            dateBirth: patientToEdit[0].dateBirth,
            isDelete: patientToEdit[0].isDelete
            })
            .then(res => {
                // console.log(".then")
                // console.log(res.data)
                // console.log(res)
            })
      // const aide = ref(patients.value.filter((patient)=> patient.id != id))
      // aide.value.push(patientToEdit[0])
      // patients.value = aide.value
    }
      console.log("PatientView, after receive the patientToEdit")
      console.log(patientToEdit[0])
}
//END-----------------------------------EDIT-PATIENT--------------
/*END----------------------------------------TREATMENT---------------------------------*/

</script>

<style>

</style>