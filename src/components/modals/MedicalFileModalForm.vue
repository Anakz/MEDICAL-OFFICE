<template>
    <transition name="fade">
        <div class="vue-modal" v-show="props.isOpenMedical">
            <transition name="drop-in">
                    <div class="vue-modal-inner" v-show="props.isOpenMedical">
                        <div class="vue-modal-content">
                            <a class="text-decoration-none position-absolute top-0 end-0 mr-4 mt-2" @click="toggleModalMedical()">
                                <i class="fas fa-times text-dark"></i>
                            </a>
                            <div class="col-md-10 ml-8">
                                <div class="card-body ml-2 mt-3">
                                    <div class=" position-absolute top-0 start-50 translate-middle-x mt-3">
                                        {{props.OneMedicalFileName}}
                                    </div>
                                    
                                        <!--  -->
                                        <div v-if="props.OneMedicalFile">
                                            <div class=" mt-10">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">Heigth&nbsp;</span>
                                                    <input type="text" class="form-control" placeholder="Heigth" aria-label="Username" aria-describedby="basic-addon1" v-if="props.OneMedicalFile" v-model="props.OneMedicalFile.height">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">Weight &nbsp;</span>
                                                    <input type="text" class="form-control" placeholder="Weight" aria-label="Username" aria-describedby="basic-addon1" v-if="props.OneMedicalFile" v-model="props.OneMedicalFile.weight">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">Blood Group </span>
                                                    <input type="text" class="form-control" placeholder="Blood Group" aria-label="Username" aria-describedby="basic-addon1" v-if="props.OneMedicalFile" v-model="props.OneMedicalFile.bloodGroup">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">Allergy</span>
                                                    <input type="text" class="form-control" placeholder="Allergy" aria-label="Username" aria-describedby="basic-addon1" v-if="props.OneMedicalFile" v-model="props.OneMedicalFile.allergy">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">Vaccination</span>
                                                    <input type="text" class="form-control" placeholder="Vaccination" aria-label="Username" aria-describedby="basic-addon1" v-if="props.OneMedicalFile" v-model="props.OneMedicalFile.vaccination">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">Health Insurance </span>
                                                    <input type="text" class="form-control" placeholder="Health Insurance" aria-label="Username" aria-describedby="basic-addon1" v-if="props.OneMedicalFile" v-model="props.OneMedicalFile.healthInsurance">
                                                </div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class=" mt-10">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">Heigth&nbsp;</span>
                                                    <input type="number" class="form-control" placeholder="Heigth" aria-label="Username" aria-describedby="basic-addon1" v-model="newMedicalFile.height">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">Weight &nbsp;</span>
                                                    <input type="number" class="form-control" placeholder="Weight" aria-label="Username" aria-describedby="basic-addon1" v-model="newMedicalFile.weight">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">Blood Group </span>
                                                    <input type="text" class="form-control" placeholder="Blood Group" aria-label="Username" aria-describedby="basic-addon1" v-model="newMedicalFile.bloodGroup">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">Allergy</span>
                                                    <input type="text" class="form-control" placeholder="Allergy" aria-label="Username" aria-describedby="basic-addon1" v-model="newMedicalFile.allergy">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">Vaccination</span>
                                                    <input type="text" class="form-control" placeholder="Vaccination" aria-label="Username" aria-describedby="basic-addon1" v-model="newMedicalFile.vaccination">
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon1">Health Insurance </span>
                                                    <input type="text" class="form-control" placeholder="Health Insurance" aria-label="Username" aria-describedby="basic-addon1" v-model="newMedicalFile.healthInsurance">
                                                </div>
                                            </div>
                                        </div>
                                        <!--  -->
                                        <div class="d-flex flex-row-reverse" >
                                            <a class="btnCancel" @click="toggleModalMedical()">Cancel</a>
                                            <a class="btnSave" @click="SaveMedical()">Save</a>
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
import {ref} from 'vue'
import Axios from 'axios'
const props = defineProps(["isOpenMedical", "OneMedicalFileName", "OneMedicalFile", "hasOne", "PatientId"])
var today = new Date().toISOString()
const newMedicalFile = {date: new Date().toISOString(), bloodGroup: "", height: "", weight: "", allergy: "", vaccination: "", healthInsurance: "", isDelete: "null", patient: props.PatientId}

const emits = defineEmits(["toggleModalMedical"])

function toggleModalMedical() {
    // console.log("hasOne")
    // console.log(props.oneMedicalFile)
    // console.log(props.hasOne)
    // console.log(props.PatientId)
    // console.log(today)
    emits("toggleModalMedical")
}
const SaveMedical = () =>{
    // console.log(props.OneMedicalFile)
    if (props.hasOne == true) {
        if (props.OneMedicalFile && props.OneMedicalFile.height != "" && props.OneMedicalFile.weight != "" && props.OneMedicalFile.bloodGroup != "" && props.OneMedicalFile.allergy != "" && props.OneMedicalFile.vaccination != "" && props.OneMedicalFile.healthInsurance != "") {
            Axios.patch('http://127.0.0.1:8000/medicalFile/'+props.OneMedicalFile.id+'/',{
                height: props.OneMedicalFile.height,
                weight: props.OneMedicalFile.weight,
                bloodGroup: props.OneMedicalFile.bloodGroup,
                allergy: props.OneMedicalFile.allergy,
                vaccination: props.OneMedicalFile.vaccination,
                healthInsurance: props.OneMedicalFile.healthInsurance,
            })
            .then(res=>{
                console.log(res)
                toggleModalMedical()
            })
        }
    }
    else if(props.hasOne == false){
        newMedicalFile.patient = props.PatientId
        if (newMedicalFile  && newMedicalFile.height !="" && newMedicalFile.weight != "" && newMedicalFile.bloodGroup != "" && newMedicalFile.allergy != "" && newMedicalFile.vaccination != "" && newMedicalFile.healthInsurance != "" && newMedicalFile.patient != "" ) {
            // props.OneMedicalFile = newMedicalFile.date
            // console.log(props.OneMedicalFile)
            // console.log(newMedicalFile.value)
            // console.log(newMedicalFile)
            // Axios.post('http://127.0.0.1:8000/medicalFile/', {
            //     date: newMedicalFile.date,
            //     bloodGroup: newMedicalFile.bloodGroup,
            //     height: newMedicalFile.height,
            //     weight: newMedicalFile.weight,
            //     allergy: newMedicalFile.allergy,
            //     vaccination: newMedicalFile.vaccination,
            //     healthInsurance: newMedicalFile.healthInsurance,
            //     isDelete: null,
            //     patient: props.PatientId
            // })
            // .then(res =>{
            //     console.log(res)
            //     toggleModalMedical()
            //     // window.location.reload(false);
            // })
                        Axios.post('http://127.0.0.1:8000/medicalFile/', {
                            date: new Date().toISOString(),
                            bloodGroup: newMedicalFile.bloodGroup,
                            height: newMedicalFile.height,
                            weight: newMedicalFile.weight,
                            allergy: newMedicalFile.allergy,
                            vaccination: newMedicalFile.vaccination,
                            healthInsurance: newMedicalFile.healthInsurance,
                            isDelete: null,
                            patient: props.PatientId
                        })
                        .then(res =>{
                            console.log(res)
                            toggleModalMedical()
                            window.location.reload(false);
                        })
            // console.log(newMedicalFile.bloodGroup)
            // console.log("okay")
            // console.log(newMedicalFile)
        }
        else{

            // console.log("not okay")
            // console.log(newMedicalFile)
            // console.log(newMedicalFile.patient)
            // console.log(props.PatientId)
        }
    }
}

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