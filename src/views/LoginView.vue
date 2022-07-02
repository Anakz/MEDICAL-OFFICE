<template>
    <div class="">
        <h2 class="text-center">Login</h2>
        <div class="" style="margin-left: 195px;">
        <div class="container ml-16">
            <div class="row ml-16">
                <div class="col-md-5 ml-16">
                    <div class="card-body ml-16 mt-3 rounded bg-white p-2 border border-secondary">
                        <div class="text-center">

                            <!-- <i style="color: #005b78" class="fas fa-user-alt fa-6x"></i> -->
                            <i style="color: #005b78" class="fas fa-user-circle fa-8x"></i>
                        </div>
                        <div class=" mt-10">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Email&nbsp;</span>
                                <input type="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" v-model="email" >
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Password &nbsp;</span>
                                <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" v-model="password" >
                            </div>
                            <div class="d-flex flex-row-reverse" >
                                <a class="btnCancel" >Cancel</a>
                                <a class="btnSave" @click="LoginButton()" >Login</a>
                            </div>
                            <!-- {{isConnect}} -->
                            <div v-if="!isConnect" class="alert alert-danger text-center" role="alert">
                                <span>
                                    Email Or Password is not correct !!
                                </span>
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
import {ref, onMounted} from 'vue'
import Axios from 'axios'

const email = ref(null)
const password = ref(null)

const const_email = ref('anas@gmail.com')
const const_pass = ref('12345678')

const patients = ref(null)
const users = ref(null)

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

onMounted(() =>{
    
  getAllUsersFromAPIFunction();
  getAllPatientsFromAPIFunction();
})
const isConnect = ref(true)
const LoginButton = () =>{
    if (email && email.value && password && password.value) {
        const OnePatient = patients.value.filter((patient) => patient.email === email.value && patient.password === password.value);
        // console.log("OnePatient")
        // console.log(OnePatient.length)
        if (OnePatient && OnePatient.length ==1) {
            //Li connecté est un patient
            isConnect.value = true
            localStorage.setItem('name', OnePatient[0].firstName + ' ' + OnePatient[0].lastName)
            // localStorage.setItem('role', 'ADMIN')
            console.log(localStorage)
            console.log("OnePatient")
            console.log(OnePatient[0].firstName)
            window.location.href = '/'
        }
        else if (OnePatient && OnePatient.length ===0){
            
            //On test s'il s'agit d'un user
            const OneUser = users.value.filter((user) => user.email === email.value && user.password === password.value);
            if (OneUser && OneUser.length ==1) {
                //Li connecté est un user
                localStorage.setItem('name', OneUser[0].firstName+' '+ OneUser[0].lastName)
                localStorage.setItem('role', OneUser[0].role)
                console.log(localStorage)
                isConnect.value = true
                console.log("OneUser")
                console.log(OneUser[0].id)
                window.location.href = '/'
            }
            else{
                //Li connecté n'est pas un user
                isConnect.value = false
            }
        }
        // if (const_email.value == email.value && const_pass.value == password.value) {
        //     console.log("Identic")
        //     localStorage.setItem('name', 'Anas'+' '+ 'AKZAZ')
        //     localStorage.setItem('role', 'ADMIN')
        //     console.log(localStorage)
        //     window.location.href = '/'
        // }
        // else{
        //     console.log("Error password")
        //     // console.log(email.value)
        //     // console.log(const_email)
        //     // console.log(password.value)
        //     // console.log(const_pass)
            
        // }
    }

}

</script>

<style>
.btnSave{
    text-decoration: none;
    color: black;
    border: none;
    padding: 2px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 10%;
}
.btnSave:hover{
    background-color: #005B78;
    color: white;
}
.btnCancel{
    text-decoration: none;
    color: black;
    border: none;
    padding: 2px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 8%;
}
.btnCancel:hover{
    background-color: #808080;
    color: white;
}
</style>