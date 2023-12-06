<template>
  <div class="hold-transition login-page bg-dack">
    <div class="login-box">
      <div class="card" style="background-color:hsla(89, 43%, 51%, 0.5);">
        <div class="card-body" style="font-family: Khmer OS Battambang;">
          <div class="text-center">
            <img src="logo.png" alt="" width="150" height="180" class=" img-circle">
          </div>
        <br>
         <h2 class="login-box-msg" style="font-family: Khmer OS Muol Light; font-size: 22px;">អាជ្ញាធរសវនកម្មជាតិ</h2>
          <h2 class="login-box-msg " style="font-family: Khmer OS Battambang; font-size: 22px;">ចូលប្រើប្រាស់ប្រព័ន្ធ</h2>
          <form action="#" method="post" @submit.prevent="handleLogin()">
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="សូមបញ្ចូលអ៊ីម៉ែល(Email)" v-model="user.email"/>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <p class="text-danger">{{ sms.email }}</p>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="សូមបញ្ចូលលេខសម្ងាត់ (Password)"
                v-model="user.password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <p class="text-danger">{{ sms.password }}</p>
            <div class="row">
              <div class="col-12">
                <button :disabled="isAccess" type="submit" class="btn btn-primary btn-block">
                  <div v-if="isAccess" class="spinner-border text-light" role="status" style="width: 15px; height: 15px;">
                    <span class="sr-only">ប្រព័ន្ធកំពុងដំណើរការ...</span>
                  </div>
                  ចូលប្រើប្រាស់
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <TwoFactor :userId="userId"/>
</template>

<script setup>
import TwoFactor from '@/views/auths/two_factor.vue'
import { reactive, ref } from 'vue';
import { auth } from '../../stores/auth.js';
import { useRouter } from 'vue-router';
import { getCurrentInstance, onMounted } from 'vue';
import { usePermissionStore } from '../../stores/permission';


const app = getCurrentInstance();
const global =  app.appContext.config.globalProperties;
const http = app.appContext.config.globalProperties.$http;

const userId = ref('');
const router = useRouter();
const defineAuth = auth();
const isAccess = ref(false);
const permission = usePermissionStore();
const user = reactive({
  email : '',
  password : '',
  lat : '',
  lng : ''
})
const sms = reactive({
  email : '',
  password : '',
})

async function handleLogin(){
  isAccess.value = true;
  sms.email = '';
  sms.password = '';
  try {
    const { data } = await http.post('login',user);
    if(data.status == 'success'){
      permission.newPermission(data.permission);
      
      defineAuth.login(data);
    
      router.push({name : 'home'});
      
    }else if(data.status == 'error'){

    } else if(data.status == 'is_two_factor'){
      userId.value = global.$base64Decode(data.user_id);
      $('#twoFactor').modal();
      global.$alert({
        type : 'success',
        sms : data.sms,
      })
    }
     else {
      if(data.errors.email){
        sms.email = data.errors.email[0];
      } 
      if(data.errors.password){
        sms.password = data.errors.password[0];
      }
    }
  } catch (error) {
    console.log(error)
  }
  isAccess.value = false;
}




 

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  user.lat = position.coords.latitude
  user.lng = position.coords.longitude
}

onMounted(()=>{
  getLocation();
})

</script>

<style></style>
