<template>
  <ul class="navbar-nav" ml-auto>
    <li class="nav-item dropdown">
      <a href="#" class="nav-link text-black" data-toggle="dropdown">
        <img
          src=""
          alt=""
          width="27"
          class="brand-image img-circle elevation-3 mr-1"
        />
        <i class="right fa fa-user fa fa-caret-down"></i
        ><i class="right fa fa-caret-down"></i>
      </a>
      <div class="dropdown-menu dropdown-menu-right">
        <div class="dropdown-divider"></div>
        <a href="" class="dropdown-item">
          <i class="fa fa-user text-info mr-2"></i> Profile
        </a>
        <a href="" class="dropdown-item">
          <i class="fa fa-key mr-2"></i>Reset Password
        </a>
         <button class="dropdown-item text-danger" @click="handleLogout()"><i class="fa fa-reply"></i> Logout</button>
      </div>
    </li>
  </ul>
</template>

<script setup>
async function handleLogout(){
  try {
    const {data} = await http.get('logout');
    if(data.status == 'success'){
      alerts({type : 'success', sms : data.sms})
      defineAuth.logout();
    } else {
      alerts({type : 'error', sms : data.sms})
    }
  } catch (error) {
    alerts({type : 'error', sms : error.message})
  }
}
</script>
<style>
</style>