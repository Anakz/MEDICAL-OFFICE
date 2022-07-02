<template>
<div >
  <h1 class="text-center" style="color:black">Schedule of the day</h1>
 <div class="ml-16">
   <div class="ml-16">
     <div class="ml-16">
 <div class="card ml-16" style="width: 20rem; overflow: hidden;  display: inline-block; height: 10rem;">
  <span style="margin-top: 1rem; margin-right: 15rem;">
  <div class="text-center">

    <i class="fa-solid fa-calendar-day fa-5x" style="height: 6rem; color:#00608d;"></i>
    <div><h5><b style="color:black">Today's appointments </b></h5></div>
    <div style="color:black"> <b>{{nbAppointments()}}</b></div>
  </div>

  </span>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div class="card" style="width: 20rem; overflow: hidden; height:10rem; display: inline-block;">
 <span style="margin-top: 1rem; margin-right: 15rem;">
 <div class="text-center">

   <i class="fa-solid fa-calendar fa-5x" style="height: 6rem; color:#00608d;"></i>
    <div><h5><b style="color:black">Time with no appointment</b> </h5></div>
   <div style="color:black" > <b>{{nbnoAppointments()}}</b></div>
 </div>
 </span>
</div>

</div>
</div>
</div>
 <div class="card" style="height: 22rem; margin-left: 200px; margin-right: 200px;overflow: auto;">
<div  class="text-center">
  <h4>
    <b style="color:black">Today's appointments & availability</b>
  </h4>
<button class="p-1" @click="toggleModal" style="background-color: #00608d;border: #00608d;border-radius: 5px;height: 32px; color: white;">Add schedule</button><hr /></div>

<div v-if="show"><AddSchedule v-bind:show="show" v-bind:toggleModal="toggleModal"/></div>
<div v-if="showe"><EditSchedule v-bind:showe="showe" v-bind:toggleModalEdit="toggleModalEdit"/></div>
<table class="table table-striped">
  <tbody>
    <tr>
      
      <td>Date</td>
      <td>Availability</td>
     <td>Actions</td>
    </tr>
    
    <tr v-for="schedule in schedules" :key="schedule.id" >
      <td>{{schedule.date}}</td>
      <td>{{schedule.availability}}</td>
     <td>
        <button type="button" @click="toggleModalEdit" class="btn btn-warning">Update</button>
        &nbsp;
        <button type="button"  @click="deleteSchedule(schedule)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  
  </tbody>
</table></div>
</div>
</template>
<script>
import AddSchedule from '../components/modal2/AddSchedule.vue';
import EditSchedule from '../components/modal2/EditSchedule.vue';
export default {
    data() {
        return {
            show:false,
            showe:false,
            schedules: [],
          
        };
    },
    methods: {
     
      toggleModal: function(){
  this.show = !this.show;
},
toggleModalEdit: function(){
  this.showe = !this.showe;
},
 nbAppointments(){
  let nbappointments = 0 ;
   for(let i=0; i<this.schedules.length; i++ ){
    if(this.schedules[i].availability==true){
      nbappointments++;
     }
   }
   return nbappointments;
},
nbnoAppointments(){
let nbnoappointments = 0 ;
   for(let i=0; i<this.schedules.length; i++ ){
    if(this.schedules[i].availability==false){
      nbnoappointments++;
     }
   }
   return nbnoappointments;
},
        async getSchedule() {
            var response = await fetch("http://localhost:8000/schedule/");
            this.schedules = await response.json();
            /*const data = await response.json();
              console.log(data, data.slice()); // <-- These are the same
              this.patients = data.slice();*/
        },
        async deleteSchedule(schedule){
  var response = await fetch("http://localhost:8000/schedule/"+schedule.id, {
    method: 'delete',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(this.schedule)
  });
  this.schedules.push(await response.json());
}
        
       
    },
    
    created() {
        this.getSchedule();
    },
    components: { AddSchedule, EditSchedule }
}
</script>