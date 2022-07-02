<template>
    <transition name="fade">
        <div class="vue-modal" v-show="props.isOpenAddAppointment">
            <transition name="drop-in">
                    <div class="vue-modal-inner" v-show="props.isOpenAddAppointment">
                        <div class="vue-modal-content">
                            <a class="text-decoration-none position-absolute top-0 end-0 mr-4 mt-2" @click="toggleModalAddAppointment()">
                                <i class="fas fa-times text-dark"></i>
                            </a>
                            <div class="col-md-10 ml-8">
                                <div class="card-body ml-2 mt-3">
                                    <div class=" position-absolute top-0 start-50 translate-middle-x mt-3">
                                        ADD AN APPOINTMENT
                                    </div>
                                    {{appointmentToAdd && appointmentToAdd[0].patient}} <!-- date+T+hour+Z -->
                                        <!--  -->
                                        <div v-if="appointmentToAdd && appointmentToAdd[0]" class=" mt-10">
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                <input type="date" class="form-control" placeholder="date" aria-label="Username" aria-describedby="basic-addon1" v-model="appointmentToAdd[0].date" >
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">Hour &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                <!-- <input type="time" class="form-control" placeholder="Weight" aria-label="Username" aria-describedby="basic-addon1"> -->
                                                <select class="form-select" aria-label="Default select example" v-model="appointmentToAdd[0].hour" >
                                                    <option selected>Select an hour</option>
                                                    <option value="09:30:00">9h30min</option>
                                                    <option value="10:00:00">10h00min</option>
                                                    <option value="13:00:00">13h00min</option>
                                                    <option value="14:30:00">14h00min</option>
                                                </select>
                                            </div>
                                            <!-- <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">Payment</span>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="false">Not Paid</option>
                                                    <option value="true">Paid</option>
                                                </select>
                                            </div> -->
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                <label type="number" class="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1" >{{appointmentToAdd[0].price}}</label>
                                            </div>
                                            <!-- <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">Total Paid</span>
                                                <input type="text" class="form-control" placeholder="Vaccination" aria-label="Username" aria-describedby="basic-addon1">
                                            </div> -->
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">Reason &nbsp;</span>
                                                <input type="text" class="form-control" placeholder="Reason" aria-label="reason" aria-describedby="basic-addon1" v-model="appointmentToAdd[0].reason">
                                            </div>
<!--  v-if="userConnect && userConnect.length == 2" -->
                                            <div v-if="userConnect && userConnect.length == 2" class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">Patient &nbsp;</span>
                                                <select class="form-select" aria-label="Default select a patient" v-model="appointmentToAdd[0].patient" >
                                                    <option selected>Select a patient</option>
                                                    <option v-for="(item, index) in patients" :key="index" :value="item.id">{{item.firstName}} {{item.lastName}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <!--  -->
                                        <div class="d-flex flex-row-reverse" >
                                            <a class="btnCancel" @click="toggleModalAddAppointment()">Cancel</a>
                                            <a class="btnSave" @click="AddAppointment()">Save</a>
                                        </div>
                                </div>
                                </div>
                                </div>
                            </div>
            </transition>
        </div>
    </transition>
</template>

<script setup>
import {ref, defineEmits, defineProps, computed, onMounted} from 'vue'
import Axios from 'axios'

const props = defineProps(["isOpenAddAppointment"])
 
const emits = defineEmits(["toggleModalAddAppointment", "AddAppointment"])

function toggleModalAddAppointment() {                                                                      //paymentStatus: "", price: "", totalPaid: "", reason: "", prescription: "", patient: ""
    
    emits("toggleModalAddAppointment", )
}

const patients = ref(null)
function getAllPatientsFromAPIFunction() {
  //Method that contain all line of users in my DB
  Axios.get("http://127.0.0.1:8000/patient/").then(
    (response) => (patients.value = response.data)
  );
}


onMounted(() => {
  getAllPatientsFromAPIFunction();
});

const AddAppointment = () =>{
    if (userConnect && userConnect.value.length == 1) {
        if (patients && patients.value) {
            
            const firstName = userConnect.value.name.toString().split(' ')[0]
            const lastName = userConnect.value.name.toString().split(' ')[1]
            const OnePatient = patients.value.filter((patient) => patient.firstName == firstName && patient.lastName == lastName);
            appointmentToAdd.value[0].patient = OnePatient[0].id
        }
    }
    if (appointmentToAdd && appointmentToAdd.value &&  appointmentToAdd.value[0].date != "" &&  appointmentToAdd.value[0].hour != "" &&  appointmentToAdd.value[0].price != "" && appointmentToAdd.value[0].reason != "") {
        emits("AddAppointment", appointmentToAdd.value[0])
        console.log("CHECKKKKK")
    }
    console.log("appointmentToAdd.value[0].date")
    console.log(appointmentToAdd.value[0])
}
// "id": 1,
//         "date": "2022-06-30T09:00:00Z",
//         "paymentStatus": false,
//         "price": 300.0,
//         "totalPaid": 0.0,
//         "reason": "Visite for consultation",
//         "prescription": "Not yet",
//         "isDelete": null,
//         "patient": 1, patientToAdd[0].address
//         "user": 1 appointmentToAd
const appointmentToAdd = ref([{date: "", hour: "", paymentStatus: false, price: 300, totalPaid: 0, reason: "", prescription: "Not Yet", patient: ""}])

const userConnect = computed(() =>{
    console.log("in computed Appointment userCOnnect")
    console.log(userConnect.value)
    return localStorage.length > 0 ? localStorage : null
})

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