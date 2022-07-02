<template>
    <transition name="fade">
        <div class="vue-modal" v-show="props.isOpenPatientFormAdd">
            <transition name="drop-in">
                    <div class="vue-modal-inner" v-show="props.isOpenPatientFormAdd">
                        <div class="vue-modal-content">
                            <a class="text-decoration-none position-absolute top-0 end-0 mr-4 mt-2" @click="toggleModalPatientFormAdd()">
                                <i class="fas fa-times text-dark"></i>
                            </a>
                            <div class="col-md-10 ml-8">
                                <div class="card-body ml-2 mt-3">
                                    <div class=" position-absolute top-0 start-50 translate-middle-x mt-3">
                                        Add A New Patient <!-- {{props.PatientName}} -->
                                        <!-- {{patientToAdd && patientToAdd[0].cin }} -->
                                    </div>
                                    
                                        <!--  -->
                                        <div class=" mt-10">
                                            <!-- <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">CIN&nbsp;</span>
                                                <input type="text" class="form-control" placeholder="Heigth" aria-label="Username" aria-describedby="basic-addon1" v-model="patientToAdd[0].cin">
                                            </div> -->
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">First Name&nbsp;</span>
                                                <input type="text" class="form-control" placeholder="first name" aria-label="Username" aria-describedby="basic-addon1" v-model="patientToAdd[0].firstName">
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">Last Name &nbsp;</span>
                                                <input type="text" class="form-control" placeholder="last name" aria-label="Username" aria-describedby="basic-addon1" v-model="patientToAdd[0].lastName">
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">cin </span>
                                                <input type="text" class="form-control" placeholder="cin" aria-label="Username" aria-describedby="basic-addon1" v-model="patientToAdd[0].cin">
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">phone </span>
                                                <input type="text" class="form-control" placeholder="phone" aria-label="Username" aria-describedby="basic-addon1" v-model="patientToAdd[0].phone">
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">email </span>
                                                <input type="email" class="form-control" placeholder="email" aria-label="Username" aria-describedby="basic-addon1" v-model="patientToAdd[0].email">
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">password</span>
                                                <input type="password" class="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1" v-model="patientToAdd[0].password">
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">Address</span>
                                                <input type="text" class="form-control" placeholder="address" aria-label="Username" aria-describedby="basic-addon1" v-model="patientToAdd[0].address">
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">gender </span>
                                                <input type="text" class="form-control" placeholder="gender" aria-label="Username" aria-describedby="basic-addon1" v-model="patientToAdd[0].gender">
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">dateBirth </span>
                                                <input type="date" class="form-control" placeholder="date birthday" aria-label="Username" aria-describedby="basic-addon1" v-model="patientToAdd[0].dateBirth">
                                            </div>
                                        </div>
                                        <!--  -->
                                        <div class="d-flex flex-row-reverse" >
                                            <a class="btnCancel" @click="toggleModalPatientFormAdd()">Cancel</a>
                                            <a class="btnSave" @click="AddPatient()">Save</a>
                                        </div>
                                </div>
                                </div>
                                <!-- <div class=" m-5 ">
                                    <a type="button"  class="btn position-absolute bottom-0 end-0 m-1 mr-n1" @click="toggleModalMedical()">Close</a>
                                    <a type="button"  class="btn position-absolute bottom-0 end-0 mr-16 m-1">Edit</a>
                                </div> -->
                                
                                <!-- <div class="" style="margin-left: 330px;">
                                    <a class="btn btn-secondary" type="button" >Cancel</a>
                                    <a  type="submit" class="btn">Save</a>
                                </div> -->
                                </div>
                            </div>
            </transition>
        </div>
    </transition>
</template>

<script setup>
import {ref, defineEmits, defineProps, computed} from 'vue'
import Axios from 'axios'

const props = defineProps(["isOpenPatientFormAdd"])
 
const emits = defineEmits(["toggleModalPatientFormAdd", "AddPatient"])

function toggleModalPatientFormAdd() {
    emits("toggleModalPatientFormAdd")
}

const PatientEdit = computed(() => {
    // if (props.OneMedicalFile && props.OneMedicalFile.length != 1 ) {
        
        //     console.log("OneMedicalFile is undefined")
    //     console.log(props.OneMedicalFile)
    // }
        // console.log(props.OneMedicalFile)
  return props.PatientEdit != null ? props.PatientEdit[0] : null
})
const PatientName = computed(() => {
    
    return props.PatientName != null ? props.PatientName : 'FULL NAME'
})
const patientToAdd = ref([{firstName: "", lastName: "", cin:"", phone:"", email:"", password:"", address:"", gender:"", dateBirth:"", isDelete:null}])
function AddPatient() {
    if (patientToAdd && patientToAdd.value[0].firstName != "" && patientToAdd.value[0].lastName != "" && patientToAdd.value[0].cin != "" && patientToAdd.value[0].phone != "" && patientToAdd.value[0].email != "" && patientToAdd.value[0].password != "" && patientToAdd.value[0].address != "" && patientToAdd.value[0].gender != "" && patientToAdd.value[0].dateBirth != ""){

        emits("AddPatient", patientToAdd)
        toggleModalPatientFormAdd()
    }
}
// const AddPatient = () =>{
//     if (patientToAdd && patientToAdd.value[0].firstName != "" && patientToAdd.value[0].lastName != "" && patientToAdd.value[0].cin != "" && patientToAdd.value[0].phone != "" && patientToAdd.value[0].email != "" && patientToAdd.value[0].password != "" && patientToAdd.value[0].address != "" && patientToAdd.value[0].gender != "" && patientToAdd.value[0].dateBirth != "") {

//         Axios.post( "http://127.0.0.1:8000/patient/" , {
//             firstName: patientToAdd.value[0].firstName,
//             lastName: patientToAdd.value[0].lastName,
//             cin: patientToAdd.value[0].cin,
//             phone: patientToAdd.value[0].phone,
//             email: patientToAdd.value[0].email,
//             password: patientToAdd.value[0].password,
//             address: patientToAdd.value[0].address,
//             gender: patientToAdd.value[0].gender,
//             dateBirth: patientToAdd.value[0].dateBirth,
//             isDelete: null
//             })
//             .then(res => {
//                 // console.log(".then")
//                 // console.log(res.data)
//                 // console.log(res)
//             })
//           toggleModalPatientForm()
//     }
//     // console.log(patientToAdd.value[0].cin)
// }

</script>


<style>
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.vue-modal-inner {
  max-width: 500px;
  margin: 2rem 25rem auto auto;
}

.vue-modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-radius: 0.3rem;
  padding: 1rem;
  margin-top: 150px;
}

.drop-in-enter-active,
.drop-in-leave-active {
  transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translate(0, -50px);
}

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