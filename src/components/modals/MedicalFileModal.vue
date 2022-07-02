<template>
    <transition name="fade">
        <div class="vue-modal" v-show="props.isOpen">
            <transition name="drop-in">
                    <div class="vue-modal-inner" v-show="props.isOpen">
                        <div class="vue-modal-content">
                            <a class="text-decoration-none position-absolute top-0 end-0 mr-4 mt-2" @click="toggleModal()">
                                <i class="fas fa-times text-dark"></i>
                            </a>
                            <div class="col-md-12">
                                <div class="card-body ml-2">
                                    <div class=" position-absolute top-0 start-50 translate-middle-x mt-4">
                                        {{OneMedicalFileName.toUpperCase()}}
                                    </div>
                                    <!-- {{OneMedicalFile && OneMedicalFile.length != 1 ? 'FULL'+OneMedicalFile : 'EMPTY'+OneMedicalFile}} -->
                                    <div class="mt-10 ml-6 mr-6" v-if="OneMedicalFile && OneMedicalFile.length != 1">
                                        <!-- <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Height</span>
                                            <label type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">{{OneMedicalFile && OneMedicalFile.height}}</label>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Weight</span>
                                            <label type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">{{OneMedicalFile && OneMedicalFile.height}}</label>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Blood Group</span>
                                            <label type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">{{OneMedicalFile && OneMedicalFile.height}}</label>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Allergies</span>
                                            <label type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">{{OneMedicalFile && OneMedicalFile.height}}</label>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Vaccination</span>
                                            <label type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">{{OneMedicalFile && OneMedicalFile.height}}</label>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Vaccination</span>
                                            <label type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">{{OneMedicalFile && OneMedicalFile.height}}</label>
                                        </div> -->
                                        <p class="card-text"> <b>Heigth &nbsp; :            </b>{{OneMedicalFile && OneMedicalFile.height}}</p>
                                        <p class="card-text"> <b>Weight &nbsp; :            </b>{{OneMedicalFile && OneMedicalFile.weight}}</p>
                                        <p class="card-text"> <b>Blood Group  :  </b>{{OneMedicalFile && OneMedicalFile.bloodGroup}} </p>
                                        <p class="card-text"> <b>Allergies  :  </b>{{OneMedicalFile && OneMedicalFile.allergy}} </p>
                                        <p class="card-text"> <b>Vaccination :  </b>{{OneMedicalFile && OneMedicalFile.vaccination}} </p>
                                        <p class="card-text"> <b>Healt Insurance : </b>{{OneMedicalFile && OneMedicalFile.healthInsurance}} </p>
                                    </div>
                                    <div v-else class="text-center ml-3" style="min-height: 140px; color: #005b78;margin-top: 35%;">
                                        <span class="text-uppercase"><b><p>Lack of information</p> <p>Please click on <i class="text-decoration-underline">edit</i></p></b></span>
                                    </div>
                                </div>
                                </div>
                                <div class="d-flex flex-row-reverse">
                                    <a class="btnCancel " @click="toggleModal()">Close</a>
                                    <a @click="toggleModalMedical()"  class="btnEdit">Edit</a>
                                </div>
                                </div>
                            </div>
            </transition>
        </div>
    </transition>
    <MedicalFileModalForm :PatientId="props.PatientId" :hasOne="hasOne" :isOpenMedical="isOpenMedical" @toggleModalMedical="toggleModalMedical" :OneMedicalFileName="OneMedicalFileName" :OneMedicalFile="OneMedicalFile" />
</template>

<script setup>
import {ref, defineEmits, defineProps, computed} from 'vue'
import MedicalFileModalForm from './MedicalFileModalForm.vue'

const hasOne = ref(false)

const props = defineProps(["isOpen", "OneMedicalFile", "OneMedicalFileName", "PatientId"])
 
const emits = defineEmits(["toggleModal"])

function toggleModal() {
    emits("toggleModal")
}


const OneMedicalFile = computed(() => {
    // if (props.OneMedicalFile && props.OneMedicalFile.length != 1 ) {
        
    //     console.log("OneMedicalFile is undefined")
    //     console.log(props.OneMedicalFile)
    // }
        // console.log(props.OneMedicalFile)
  return props.OneMedicalFile != null ? props.OneMedicalFile[0] : null
})
const OneMedicalFileName = computed(() => {

  return props.OneMedicalFileName != null ? props.OneMedicalFileName : 'FULL NAME'
})

//START------------------------------Medical-File-Modal----------

const isOpenMedical = ref(false)
const toggleModalMedical = () =>{
    // if (OneMedicalFile && OneMedicalFile.value) {
    //     hasOne.value = true
    // }
    if (OneMedicalFile && OneMedicalFile.value) {
        // console.log("true")
        hasOne.value = true
    }
    else{
        // console.log("false")
        hasOne.value = false
    }
    isOpenMedical.value = !isOpenMedical.value
}


//START------------------------------Medical-File-Modal----------

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
  max-width: 400px;
  margin: 2rem 29rem auto auto;
}

.vue-modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-radius: 0.3rem;
  padding: 1rem;
  margin-top: 250px;
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

.btnEdit{
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
.btnEdit:hover{
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