<template>
  <div style="margin-left: 30px;">
    <h3 class="text-center">Profile<!-- {{onePatient && onePatient[0].firstName  }} {{onePatient && onePatient[0].lastName  }} --></h3>
    <div class="container p-2 ml-16">
      <div v-if="isPatient == false" class="row ml-16">
        <div class="col-4">
          <div class="card" style=" background: #ffffff; color: black; " >
              <div  v-if="onePatient" class="">
                <!-- <div class="col-md-2 mr-6 mt-5">
                    <div class="m-4">
                      <i style="color: #005b78" class="fas fa-male fa-6x mt-5"></i>
                    </div>
                </div> -->
                <div class="mb-n8 p-3" style="background-color: slategrey;color: white; border-radius: 5px;">
                    <i class="fas fa-user-cog mr-n5"></i>
                  <label class="ml-8 ">
                    Personnel Information
                  </label>
                  <a @click="SaveAccountChanges()" style="color: white" class="btn float-end mt-n2">Save Changes</a>
                </div>
                <div  class=""><!-- col-md-8 -->
                  <div class="card-body">
                    <div class=" mt-10">
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">First Name&nbsp;</span> <!-- {{getPatient()}} -->
                          <input type="text" class="form-control" placeholder="frist name" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].firstName">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Last Name &nbsp;</span>
                          <input type="text" class="form-control" placeholder="last name" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].lastName">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Cin</span>
                          <input type="text" class="form-control" placeholder="cin" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].cin">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Phone </span>
                          <input type="text" class="form-control" placeholder="phone" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].phone">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Email </span>
                          <input type="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].email">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Salary</span>
                          <input type="Number" class="form-control" placeholder="Salary" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].salary">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Address </span>
                          <input type="text" class="form-control" placeholder="Health Insurance" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].address">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Type </span>
                          <label type="text" class="form-control" placeholder="Type" aria-label="Username" aria-describedby="basic-addon1" >{{onePatient[0].role}}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="col-4 ml-n16"><!--  v-else -->
          <img style="height: 450px" :src="img" />
        </div>
      </div>
      <!-- IsPatient == TRUE -->
      <div v-if="isPatient == true" class="row ml-16">
        <div class="col-4">
          <div class="card" style=" background: #ffffff; color: black; " >
              <div class="">
                <!-- <div class="col-md-2 mr-6 mt-5">
                    <div class="m-4">
                      <i style="color: #005b78" class="fas fa-male fa-6x mt-5"></i>
                    </div>
                </div> -->
                <div class="mb-n8 p-3" style="background-color: slategrey;color: white; border-radius: 5px;">
                    <i class="fas fa-user-cog mr-n5"></i>
                  <label class="ml-8 ">
                    Personnel Information
                  </label>
                  <a @click="SaveAccountChanges()" style="color: white" class="btn float-end mt-n2">Save Changes</a>
                </div>
                <div v-if="onePatient" class=""><!-- col-md-8 -->
                  <div class="card-body">
                    <div class=" mt-10">
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">First Name&nbsp;</span> <!-- {{getPatient()}} -->
                          <input type="text" class="form-control" placeholder="Heigth" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].firstName">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Last Name &nbsp;</span>
                          <input type="text" class="form-control" placeholder="Weight" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].lastName">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Gender </span>
                          <input type="text" class="form-control" placeholder="Blood Group" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].gender">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Birthday Date</span>
                          <input type="text" class="form-control" placeholder="Allergy" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].dateBirth">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Cin</span>
                          <input type="text" class="form-control" placeholder="Vaccination" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].cin">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Phone </span>
                          <input type="text" class="form-control" placeholder="Health Insurance" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].phone">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">Address </span>
                          <input type="text" class="form-control" placeholder="Health Insurance" aria-label="Username" aria-describedby="basic-addon1" v-model="onePatient[0].address">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="col-4">
          <div class="card" style=" background: #ffffff; color: black; " >
              <div class="">
                
                <div class="mb-n8 p-3" style="background-color: slategrey;color: white; border-radius: 5px;">
                    <i class="fas fa-cogs mr-n5"></i>
                  <label class="ml-8 ">
                    Medical File Information
                  </label>
                  <a  @click="SaveMedicalChanges()" style="color: white" class="btn float-end mt-n2">Save</a>
                </div>
                <div v-if="oneMedicalFile" class="">
                  <div class="card-body">
                    <div class=" mt-10">
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Heigth&nbsp;</span>
                        <input type="number" class="form-control" placeholder="Heigth" aria-label="Username" aria-describedby="basic-addon1" v-model="oneMedicalFile[0].height">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Weight &nbsp;</span>
                            <input type="number" class="form-control" placeholder="Weight" aria-label="Username" aria-describedby="basic-addon1" v-model="oneMedicalFile[0].weight">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Blood Group </span>
                            <input type="text" class="form-control" placeholder="Blood Group" aria-label="Username" aria-describedby="basic-addon1" v-model="oneMedicalFile[0].bloodGroup">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Allergy</span>
                            <input type="text" class="form-control" placeholder="Allergy" aria-label="Username" aria-describedby="basic-addon1" v-model=" oneMedicalFile[0].allergy">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Vaccination</span>
                            <input type="text" class="form-control" placeholder="Vaccination" aria-label="Username" aria-describedby="basic-addon1" v-model="oneMedicalFile[0].vaccination">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Health Insurance </span>
                            <input type="text" class="form-control" placeholder="Health Insurance" aria-label="Username" aria-describedby="basic-addon1" v-model="oneMedicalFile[0].healthInsurance">
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeMount, computed} from 'vue'
import Axios from 'axios'
import img from '../assets/doctor_profile.png'

const isPatient = ref(false)
const users = ref();
const patients = ref();
const medicalFiles = ref();

const userConnect = computed(() =>{
    console.log("in computed SIDEBAR")
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
function getAllMedicalFilesFromAPIFunction() { //Method that contain all line of users in my DB
  Axios.get('http://127.0.0.1:8000/medicalFile/')
  .then(response => (
    medicalFiles.value = response.data
  ))
}

onMounted(() => {
  getAllUsersFromAPIFunction();
  getAllPatientsFromAPIFunction();
  getAllMedicalFilesFromAPIFunction();
  
  // getMyProfile()
})

// const myProfile = ref(null)
// const getMyProfile = () =>{

//   if(userConnect && userConnect.value && userConnect.value.length == 2){
    
//   }
//   else if(userConnect && userConnect.value && userConnect.value.length == 1){
//     if (patients && patients.value) {
//       myProfile.value = patients.value.filter((patient) => patient.firstName == firstName && patient.lastName == lastName);
//       console.log("getMyProfile")
//       console.log(myProfile)
//     }
//   }
// }
// const onePatient = ref(null)
const id = ref(3)
const getPatient = () =>{
  var result = null
  if (patients && patients.value) {
    
    result = patients.value.filter((patient) => patient.id === id.value)
  }
  onePatient.value = result
  // console.log(onePatient.value)
}
const onePatient = computed(() => {
  if(patients && patients.value){
    if (userConnect && userConnect.value && userConnect.value.length == 2) {
      isPatient.value = false
      if (users && users.value) {
        
        const firstName = userConnect.value.name.toString().split(' ')[0]
        const lastName = userConnect.value.name.toString().split(' ')[1]
        const OneUser = users.value.filter((user) => user.firstName == firstName && user.lastName == lastName);
        return users != null ? users.value.filter((user) => user.id == OneUser[0].id ) : null
      }
    }
    else if(userConnect && userConnect.value && userConnect.value.length == 1){
      isPatient.value = true
      if (patients && patients.value) {
        
        const firstName = userConnect.value.name.toString().split(' ')[0]
        const lastName = userConnect.value.name.toString().split(' ')[1]
        const OnePatient = patients.value.filter((patient) => patient.firstName == firstName && patient.lastName == lastName);
        return patients != null ? patients.value.filter((patient) => patient.id == OnePatient[0].id ) : null
      }
    }
   }
   
})
const oneMedicalFile = computed(() => {
  if (isPatient) {
    if(medicalFiles && medicalFiles.value){
      const firstName = userConnect.value.name.toString().split(' ')[0]
      const lastName = userConnect.value.name.toString().split(' ')[1]
      const OnePatient = patients.value.filter((patient) => patient.firstName == firstName && patient.lastName == lastName);
      return medicalFiles != null ? medicalFiles.value.filter((medicalFile) => medicalFile.id == OnePatient[0].id ) : null
    }
   }
})

const SaveAccountChanges = ()=>{
  if (userConnect && userConnect.value && userConnect.value.length == 2) {
    if(onePatient && onePatient.value && onePatient.value[0].firstName != "" && onePatient.value[0].lastName != ""&& onePatient.value[0].cin != ""&& onePatient.value[0].phone != ""&& onePatient.value[0].email != ""&& onePatient.value[0].salary != ""&& onePatient.value[0].address != ""&& onePatient.value[0].lastName != ""){

      Axios.patch( "http://127.0.0.1:8000/user/"+onePatient.value[0].id+"/" , {
              firstName: onePatient.value[0].firstName,
              lastName: onePatient.value[0].lastName,
              cin: onePatient.value[0].cin,
              phone: onePatient.value[0].phone,
              email: onePatient.value[0].email,
              salary: parseFloat(onePatient.value[0].salary),
              address: onePatient.value[0].address,
              })
              .then(res => {
                  // console.log(".then")
                  // console.log(res.data)
                  console.log(res)
              })
    }
  }
  else if(userConnect && userConnect.value && userConnect.value.length == 1){

    if (onePatient && onePatient.value && onePatient.value[0].firstName != "" && onePatient.value[0].lastName != "" && onePatient.value[0].gender != "" && onePatient.value[0].dateBirth != "" && onePatient.value[0].cin != "" && onePatient.value[0].phone != "" && onePatient.value[0].address != "" ) {
      Axios.patch( "http://127.0.0.1:8000/patient/"+onePatient.value[0].id+"/" , {
            firstName: onePatient.value[0].firstName,
            lastName: onePatient.value[0].lastName,
            gender: onePatient.value[0].gender,
            dateBirth: onePatient.value[0].dateBirth,
            cin: onePatient.value[0].cin,
            phone: onePatient.value[0].phone,
            address: onePatient.value[0].address,
            })
            .then(res => {
                // console.log(".then")
                // console.log(res.data)
                console.log(res)
            })
      console.log("All good")
    }
    // console.log(onePatient.value[0].id)
  }
}

const SaveMedicalChanges = ()=>{
  if (oneMedicalFile && oneMedicalFile.value && oneMedicalFile.value[0].height && oneMedicalFile.value[0].weight && oneMedicalFile.value[0].bloodGroup && oneMedicalFile.value[0].allergy && oneMedicalFile.value[0].vaccination && oneMedicalFile.value[0].healthInsurance ) {
    Axios.patch( "http://127.0.0.1:8000/medicalFile/"+oneMedicalFile.value[0].id+"/" , {
              height: parseFloat(oneMedicalFile.value[0].height),
              weight: parseFloat(oneMedicalFile.value[0].weight),
              bloodGroup: oneMedicalFile.value[0].bloodGroup,
              allergy: oneMedicalFile.value[0].allergy,
              vaccination: oneMedicalFile.value[0].vaccination,
              healthInsurance: oneMedicalFile.value[0].healthInsurance,
              })
              .then(res => {
                  // console.log(".then")
                  // console.log(res.data)
                  console.log(res)
              })
    console.log("Check")
    console.log(oneMedicalFile.value[0])
  }
}

</script>

<style>

</style>