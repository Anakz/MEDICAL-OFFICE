<template>
<div class="bloc-modale">
    <div class="overlay" v-on:click="toggleModal"></div>
<div  class="modale card">

    <div class="container">
        <div class="text">Add a staff member</div>
        <form @submit.prevent="createStaff">
           <div class="form-row">
              <div class="input-data">
                 <input type="text" v-model="staff.firstName" required>
                 <div class="underline"></div>
                 <label style="left:0px;">First Name</label>
              </div>
              <div class="input-data">
                 <input type="text" v-model="staff.lastName" required>
                 <div class="underline"></div>
                 <label style="left:0px;">Last Name</label>
              </div>
               <div class="input-data">
                 <input type="text" v-model="staff.cin" required>
                 <div class="underline"></div>
                 <label style="left:0px;">CIN</label>
              </div>
               <div class="input-data">
                 <input type="text"  v-model="staff.phone" required>
                 <div class="underline"></div>
                 <label style="left:0px;">Phone</label>
              </div>
           </div>
           <div class="form-row">
              <div class="input-data">
                 <input type="email" v-model="staff.email" required>
                 <div class="underline"></div>
                 <label style="left:0px;">Email Address</label>
              </div>
             <div class="input-data">
                 <input type="password" v-model="staff.password" required>
                 <div class="underline"></div>
                 <label style="left:0px;">Password</label>
              </div>
              <div class="input-data">
                 <input type="text"  v-model="staff.address" required>
                 <div class="underline"></div>
                 <label style="left:0px;">Adress</label>
              </div>
               <div class="input-data">
                 <input type="number" v-model="staff.salary" required>
                 <div class="underline"></div>
                 <label style="left:0px;">Salary</label>
              </div>
           </div>
             <div class="form-row">
              <div class="input-data">
                 <input name="date" type="date" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'" v-model="staff.beginDate">
                 <div class="underline"></div>
                 <label style="left:0px;">Begin date</label>
              </div>
             <div class="input-data">
                 <input name="date" type="date" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'" v-model="staff.endDate">
                 <div class="underline"></div>
                 <label style="left:0px;">Date end</label>
              </div>
                 <!-- <input type="checkbox" :value="false"  v-model="staff.isDelete" > -->
              <div class="input-data">
                 <input type="text"  v-model="staff.role" required>
                 <div class="underline"></div>
                 <label style="left:0px;">Role</label>
              </div>
               
           </div>
           <div class="form-row submit-btn">
                    <div class="input-data">
                       <div class="inner"></div>
                      <input type="submit" style="margin: 0;width: 120px; position: absolute;top: 50%; left: 110%;
                       right:99%; -ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);
                        background-color:#0099BE;color: white;border-radius: 8px;" value="submit">     
              <!-- <button type="button" class="btn btn-success submit-btn" style="border-radius: 8px;margin-left:80%; height: 40px; width: 120px;">Submit</button>
-->  
                    </div>
                    <div class="input-data">
                       <div class="inner"></div>
                         <button type="button" class="btn btn-danger submit-btn" style="border-radius: 8px;margin-left:30%; height: 40px; width: 120px;" @click="toggleModal">Cancel</button>
                    </div>
                 </div>
        </form>
         
     </div>
  
</div>
</div>
</template>
<script>
import Axios from 'axios'
export default {
  data(){
  return {
    staffs: [],
    staff:{
                   /*   'firstName':'',
                      'lastName':'',
                      'cin':'',
                      'phone':'',
                      'email':'',
                      'address':'',
                      'salary':'',
                      'beginDate':'',
                      'endDate':'',
                      'role':'',*/
    },
    // show : false,
  }
},
  methods:{
//    async createStaff(){
//     console.log('submitted');
//   var response = await fetch('http://localhost:8000/user/', {
//     method: 'post',
//     headers: {
//       'Content-Type':'application/json'
//     },
//     body: JSON.stringify(this.staff)
//   });
//   this.staffs.push(await response.json());
//   console.log(response)
//   console.log(JSON.stringify(this.staff))
// },


 createStaff(){
  if (this.staff && this.staff.firstName) {
    
    Axios.post("http://localhost:8000/user/", {
      firstName: this.staff.firstName,
      lastName: this.staff.lastName,
      cin: this.staff.cin,
      phone: this.staff.phone,
      email: this.staff.email,
      password: this.staff.password,
      address: this.staff.address,
      salary: this.staff.salary,
      beginDate: this.staff.beginDate,
      endDate: this.staff.endDate,
      role: this.staff.role,
      isDelete: null,
  
    })
    .then(res =>{
      console.log
    })
  }
  console.log("this.staff")
  console.log(this.staff.firstName)
  
  window.location.reload(false)
 },
 toggleModal2(){
  this.show = !this.show
 }
}
,
    props:['show','toggleModal']
  
}
</script>
<style scoped>
/* Modal css*/
.bloc-modale{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
}
.modale{
    background: #f1f1f1;
    color: #333;
    padding: 15px;
    position: fixed;
    top: 10% ;
    left:30%;
}
.btn-modale {
    position: absolute;
    top:10px;
    right:10px;
}
/*Form css*/
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px;
  background: linear-gradient(115deg, #56d8e4 10%);
}
.container{
  max-width: 800px;
  background: #fff;
  width: 800px;
  padding: 25px 40px 10px 40px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}
.container .text{
  text-align: center;
  font-size: 35px;
  font-weight: 600;
  background: -webkit-linear-gradient(right, #0099BE, #0099BE, #0099BE, #0099BE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.container form{
  padding: 15px 0 0 0;
}
.container form .form-row{
  display: flex;
  margin: 32px 0;
}
form .form-row .input-data{
  width: 30%;
  height: 40px;
  margin: 0 20px;
  position: relative;
}
form .form-row .textarea{
  height: 70px;
}
.input-data input,
.textarea textarea{
  display: block;
  width: 70%;
  height: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0,0,0, 0.12);
}
.input-data input:focus ~ label, .textarea textarea:focus ~ label,
.input-data input:valid ~ label, .textarea textarea:valid ~ label{
  transform: translateY(-20px);
  font-size: 14px;
  color: #3498db;
}
.textarea textarea{
  resize: none;
  padding-top: 10px;
}
.input-data label{
  position: absolute;
  pointer-events: none;
  bottom: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
}
.textarea label{
  width: 100%;
  bottom: 40px;
  background: #fff;
}
.input-data .underline{
  position: fixed;
  bottom: 0;
  height: 2px;
  width: 100%;
}
.input-data .underline:before{
  position: absolute;
  content: "";
  height: 2px;
  width: 100%;
  background: #3498db;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}
.input-data input:focus ~ .underline:before,
.input-data input:valid ~ .underline:before,
.textarea textarea:focus ~ .underline:before,
.textarea textarea:valid ~ .underline:before{
  transform: scale(1);
}
@media (max-width: 700px) {
  .container .text{
    font-size: 30px;
  }
  .container form{
    padding: 10px 0 0 0;
  }
  .container form .form-row{
    display: block;
  }
  form .form-row .input-data{
    margin: 35px 0!important;
  }
}
</style>