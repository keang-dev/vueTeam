<template class="Body">
  <nav class="mt-4">
    <!-- data-widget="treeview" role="menu" data-accordion="false" -->
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" >
        <template v-for="sidebar in sidebars" :key="sidebar">
            <template v-if="sidebar.isChild == true">
                <li class="nav-item menu-open" @click="handleLi($event)">
                    <a href="#" :class="`nav-link ${ sidebar.components.split('|').includes($route.name) ? 'active' : '' }`">
                        <i :class="sidebar.icon" class="nav-icon"></i>
                        <p>
                            {{ sidebar.name  }}
                        </p>
                        <i class="right fas fa-angle-left"></i>
                    </a>
                    <!-- nav-treeview -->
                    <ul class="nav nav-treeview">
                        <li class="nav-item menu-is-opening menu-open" v-for="child in sidebar.childs" :key="child">
                            <router-link :to="child.route" :class="`nav-link ${child.components.split('|').includes($route.name) ? 'active' : '' }`">
                                <i :class="`${child.icon}nav-icon ${child.color}`"></i>
                                <p class="">{{ child.name }}</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </template>
            <template v-else>
                <li class="nav-item">
                    <router-link :to="sidebar.route" :class="`nav-link  ${ sidebar.route.name == $route.name ? 'active' : '' }`">
                        <i :class="sidebar.icon" class="nav-icon"></i>
                        <p>{{ sidebar.name }}</p>
                    </router-link>
                </li>
            </template>
        </template>
      </ul>
    </nav>
</template>

<script setup>
import { ref } from "vue";

function handleLi(e){
    $($(e.target).parent().children().get(1)).slideToggle(150)
}
    const sidebars = ref([
        {
            name : 'Dashboard',
            route : { name : 'home' },
            icon : 'fa fa-home',
            isChild : false,
        },
        {
            name : 'Student',
            route : { name : 'student' },
            icon : 'fa fa-user',
            isChild : false,
           
        },
      {
            name : 'staff',
            route : { name : 'staff' },
            icon : 'fa fa-users',
            isChild : false,
        },
         
         {
            name : 'Data',
            route : { name : 'data' },
            icon : 'fa fa-cogs',
            isChild : true,
            components : 'unit|domain|audit_qa|delegation|entity|delegation_role',
            
            childs : [
                {
                    name : 'unit',
                    route : { name : 'unit' },
                    icon : 'fa fa-book',
                    components : 'unit',
                },
                {
                    name : 'domain',
                    route : { name : 'domain'},
                    components : 'domain',
                    icon : 'far fa-circle',
                    
                },
                {
                    name : 'Audit QA',
                    route : { name : 'audit_qa'},
                    components : 'audit_qa',
                    icon : 'far fa-circle',
                    
                },
                 {
                    name : 'delegation',
                    route : { name : 'delegation'},
                    components : 'delegation',
                    icon : 'far fa-circle',
                    
                },
                 {
                    name : 'delegation_role',
                    route : { name : 'delegation_role'},
                    components : 'delegation_role',
                    icon : 'far fa-circle',
                    
                },
                  {
                    name : 'entity',
                    route : { name : 'entity'},
                    components : 'entity',
                    icon : 'far fa-circle',
                    color: 'text-red',
                    
                },
              
            ]
        },
     
        {
            name : 'Settings',
            route : { name : 'setting' },
            icon : 'fa fa-cogs',
            isChild : true,
            components : 'user|role|config|permission|permission_feature|role_permission',
            childs : [
                {
                    name : 'Permission',
                    route : { name : 'permission'},
                    components : 'permission|permission_feature',
                    icon : 'far fa-circle',
                },
                {
                    name : 'Role',
                    route : { name : 'role'},
                    components : 'role|role_permission',
                    icon : 'far fa-circle',
                },
                {
                    name : 'User',
                    route : { name : 'user'},
                    components : 'user',
                    icon : 'far fa-circle',
                },
                {
                    name : 'Config',
                    route : { name : 'config'},
                    components : 'config',
                    icon : 'far fa-circle',
                },
                 {
                    name : 'Api Key',
                    route : { name : 'api_key'},
                    components : 'api_key',
                    icon : 'far fa-circle',
                },
            ]
        }
    ]);
</script>
<style>
.rotate0{
    transform: rotate(0deg) !important;
}
</style>
