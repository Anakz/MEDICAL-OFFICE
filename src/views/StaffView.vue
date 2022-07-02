<template>
  <h1 class="text-center">Staff Page</h1>
  <!--  -->

  <div class="ml-12">
        <div class="card pt-2 ml-16" style="width: 20rem; overflow: hidden;  display: inline-block; height: 8rem;">
          <span  style="margin-top: 1rem; margin-right: 16rem;">
            <!-- <i class="fa-solid fa-dollar-sign" style="height: 2.40rem; color:#00608d;"></i> -->
            <div class="text-center">
              <i class="fa-solid fa-dollar-sign fa-3x" style="color:#00608d;"></i>
              <h5><b style="color:black">Staff total salary </b></h5>
            <div style="color:black" > <b>{{TotalSalary()}} &nbsp;Dhs</b></div>
            </div>
          </span>
        </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="card pt-2" style="width: 20rem; overflow: hidden;  display: inline-block; height: 8rem;">
      <span style="margin-top: 1rem; margin-right: 15rem;">
      <div class="text-center">

        <i class="fa-solid fa-user-group fa-3x" style="height: 2.4rem; color:#00608d;"></i>
          <div><h5><b style="color:black">Staff members</b> </h5></div>
        <div style="color:black" > <b>{{NbStaffMembers()}} XX</b></div>
      </div>
      </span>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="card pt-2" style="width: 20rem; overflow: hidden;  display: inline-block; height: 8rem;">
        <span style="margin-top: 1rem; margin-right: 15rem;">
        <div class="text-center">

          <i class="fa-solid fa-user-nurse fa-3x" style="height: 2.4rem; color:#00608d;"></i>
          <div><h5><b style="color:black">Number of assistants</b></h5></div>
          <div style="color:black" > <b> {{NbAssistants()}} </b></div>
        </div>
        </span>
      </div>

      <div class="card pt-2 ml-16" style="width: 20rem; overflow: hidden;  display: inline-block; height: 8rem;">
        <span style="margin-top: 1rem; margin-right: 15rem;">
        <div class="text-center">

          <i class="fa-solid fa-phone fa-3x" style="height: 2.4rem; color:#00608d;"></i>
          <div><h5><b style="color:black">Number of secretary</b></h5></div>
          <div style="color:black" > <b>{{NbSecretary()}}</b></div>
        </div>

        </span>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="card p-2" style="width: 20rem; overflow: hidden; display: inline-block; height:8rem;">
        <span style="margin-top: 1rem; margin-right: 15rem;">
        <div class="text-center">

          <i  class="fa-solid fa-coins fa-3x" style="color:#00608d;"></i>
            <div><h5><b style="color:black">Highest salary</b></h5></div>
            <div style="color:black" > <b>{{maxSalary()}} Dhs</b></div>
        </div>
        </span>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="card p-2" style="width: 20rem; overflow: hidden; display: inline-block; height:8rem;">
        <span style="margin-top: 1rem; margin-right: 15rem;">
        <div class="text-center">
          <i class="fa-solid fa-coins fa-3x" style="height: 2.4rem; color:#00608d;"></i>
            <div><h5><b style="color:black">Lowest salary</b></h5></div>
            <div style="color:black" > <b>{{minSalary()}} Dhs</b></div>

        </div>
        </span>
      </div>
        </div>
      <div>
        
      <div class="card p-2" style="height: 20rem; margin-left: 25px; margin-right: 25px;overflow: auto;">
      <div class="text-center">
        <h4 class="text-center">
          <b style="color:black">Staff list</b>
        </h4> 
      <button class="text-center p-1" @click="toggleModal" style="background-color: #00608d;border: #00608d;border-radius: 5px;height: 32px; color: white;">Add staff member</button><hr /></div>
      <div v-if="show"><AddStaff v-bind:show="show" v-bind:toggleModal="toggleModal"/></div>
      <div v-if="showe"><EditStaff v-bind:showe="showe" v-bind:toggleModalEdit="toggleModalEdit"/></div>

      <table class="table table-striped">
        <tbody>  
          <tr>
            <td><b>First name</b></td>
            <td><b>Last name</b></td>
            <td><b>CIN</b></td>
            <td><b>Salary</b></td>
            <td><b>Role</b></td>
            <td><b>Action</b></td>
          </tr>
          <tr v-for="staff in staffs" :key="staff.id">
            <td>{{staff.firstName}}</td>
            <td>{{staff.lastName}}</td>
            <td>{{staff.cin}}</td>
            <td>{{staff.salary}} Dhs</td>
            <td>{{staff.role}}</td>
            <td>
                <button type="button" @click="toggleModalEdit()" class="btn btn-warning">Update</button>
                &nbsp;
                <button type="button"  @click="deleteStaff(staff)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        
        </tbody>
      </table>
      </div>
</div>

  <!--  -->
</template>
<script>
import EditStaff from '../components/modal2/EditStaff.vue';
import AddStaff from '../components/modal2/AddStaff.vue';
export default {
  components : { AddStaff , EditStaff },
  data(){
    return {
      show: false,
      showe: false,
      staffs : [],
      
    }
  },
  methods : {
    TotalSalary(){
let totalsalary = 0 ;
   for(let i=0; i<this.staffs.length; i++ ){
    if(this.staffs[i].role != "DOCTOR"){
      totalsalary=totalsalary+this.staffs[i].salary;
     }
   }
   return totalsalary;
},
     NbStaffMembers(){
let nbmembers =0;
 for(let i=0; i<this.staffs.length; i++ ){
  if(this.staffs[i].role != "DOCTOR"){
  nbmembers++;}
 }
 return nbmembers;
     },
      NbAssistants(){
let nbassistants =0;
 for(let i=0; i<this.staffs.length; i++ ){
  if(this.staffs[i].role == "ASSISTANT"){
  nbassistants++;}
 }
 return nbassistants;
     },
      NbSecretary(){
let nbsecretary =0;
 for(let i=0; i<this.staffs.length; i++ ){
  if(this.staffs[i].role == "SECRETARY"){
  nbsecretary++;}
 }
 return nbsecretary;
     },
     maxSalary() {
      
      let max=0;
      for(let i=0;i<this.staffs.length;i++){
          if(this.staffs[i].role!="DOCTOR"){
            max = this.staffs[i].salary
          }
      }
      let MAX=max;
       for(let i=0;i<this.staffs.length;i++){
          if(this.staffs[i].role!="DOCTOR" && this.staffs[i].salary>MAX){
            MAX = this.staffs[i].salary
          }
      }
       return MAX;
     },
      minSalary() {
      //the doctor's salary
      let min=0;
      for(let i=0;i<this.staffs.length;i++){
          if(this.staffs[i].role!="DOCTOR"){
            min = this.staffs[i].salary
          }
      }
       let MIN=min;
       for(let i=0;i<this.staffs.length;i++){
          if(this.staffs[i].role!="DOCTOR" && this.staffs[i].salary<MIN){
            MIN = this.staffs[i].salary
          }
      }
       return MIN;
     },
    async getStaff(){
  var response = await fetch('http://localhost:8000/user/');
  this.staffs = await response.json();
          /*const data = await response.json();  
            console.log(data, data.slice()); // <-- These are the same
            this.patients = data.slice();*/
},
async deleteStaff(staff){
  var response = await fetch("http://localhost:8000/user/"+staff.id, {
    method: 'delete',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(this.staff)
  });
  this.staffs.push(await response.json());
},
toggleModal: function(){
  this.show = !this.show;
},
toggleModalEdit: function(){
  this.showe = !this.showe;
}
  },
  created() {
        this.getStaff();   
    }
}
</script>