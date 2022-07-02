import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import UserView from '../views/UserView.vue'
import StaffView from '../views/StaffView.vue'
import PatientView from '../views/PatientView.vue'
import AppontmentView from '../views/AppointmentView.vue'
import PaymentView from '../views/PaymentView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import SettingView from '../views/SettingView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  { path: '/', name: 'home', component: DashboardView },
  { path: '/profile', name: 'profile', component: UserView },
  { path: '/staff', name: 'staff', component: StaffView },
  { path: '/patient', name: 'patient', component: PatientView },
  { path: '/appointment', name: 'appointment', component: AppontmentView },
  { path: '/payment', name: 'payment', component: PaymentView },
  { path: '/schedule', name: 'schedule', component: ScheduleView },
  { path: '/setting', name: 'setting', component: SettingView },
  { path: '/login', name: 'login', component: LoginView },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
