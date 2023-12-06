<template>
  <nav class="mt-4">
    <!-- data-widget="treeview" role="menu" data-accordion="false" -->
    <ul
      class="nav nav-pills nav-sidebar flex-column"
      data-widget="treeview"
      role="menu"
      data-accordion="false"
      style="font-family: 'Khmer OS Battambang';"
    >
      <template  v-for="sidebar in sidebars" :key="sidebar" >
        <template v-if="sidebar.isChild == true">
          <li class="nav-item menu-open" @click="handleLi($event)">
            <a
              href="#"
              :class="`nav-link ${
                sidebar.components.split('|').includes($route.name)
                  ? 'active'
                  : ''
              }`"
            >
              <i :class="sidebar.icon" class="nav-icon"></i>
              <p>
                {{ sidebar.name }}
              </p>
              <i class="right fas fa-angle-left"></i>
            </a>
            <!-- nav-treeview -->
            <ul class="nav nav-treeview">
              <li
                class="nav-item menu-is-opening menu-open"
                v-for="child in sidebar.childs"
                :key="child"
              >
                <router-link
                  :to="child.route"
                  :class="`nav-link ${
                    child.components.split('|').includes($route.name)
                      ? 'active'
                      : ''
                  }`"
                >
                  <i :class="`${child.icon}nav-icon ${child.color}`"></i>
                  <p class="">{{ child.name }}</p>
                </router-link>
              </li>
            </ul>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <router-link
              :to="sidebar.route"
              :class="`nav-link  ${
                sidebar.route.name == $route.name ? 'active' : ''
              }`"
            >
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

function handleLi(e) {
  $($(e.target).parent().children().get(1)).slideToggle(150);
}
const sidebars = ref([
  // {
  //   name: "Dashboard",
  //   route: { name: "home" },
  //   icon: "fa fa-home",
  //   isChild: false,
  // },
  {
    name: "ក្រុមប្រតិភូ",
    route: { name: "delegation_team" },
    icon: "fa fa-users text-danger",
    isChild: false,
  },
  {
    name: "Audit",
    route: { name: "home" },
    icon: "fa fa-book-open text-white",
    isChild: false,
  },
  {
    name: "Documentation",
    route: { name: "home" },
    icon: "fa fa-book text-white",
    isChild: false,
  },
  {
    name: "Report",
    route: { name: "home" },
    icon: "fa fa-file-pdf text-success",
    isChild: false,
  },
  {
    name: "Attendance",
    route: { name: "home" },
    icon: "fa fa-calendar text-success",
    isChild: false,
  },
  {
    name: "Location",
    route: { name: "home" },
    icon: "fa fa-street-view text-danger",
    isChild: false,
  },
  {
    name: "Favorite",
    route: { name: "home" },
    icon: "fa fa-heart  text-yellow",
    isChild: false,
  },
  {
    name: "Archive",
    route: { name: "home" },
    icon: "fa fa-archive  text-danger",
    isChild: false,
  },
  {
    name: "Accessibility",
    route: { name: "home" },
    icon: "fa fa-universal-access  text-success",
    isChild: false,
  },
  {
    name: "Settings",
    route: { name: "home" },
    icon: "fa fa-cogs text-danger",
    isChild: false,
  },
  {
    name: "Role and Permission",
    route: { name: "home" },
    icon: "fa fa-users text-white",
    isChild: false,
  },
  {
    name: "Backup and Restore",
    route: { name: "home" },
    icon: "fa fa-window-restore text-white",
    isChild: false,
  },
  {
    name: "Log File",
    route: { name: "home" },
    icon: "fa fa-eye text-white",
    isChild: false,
  },
  //   {
  //     name: "Settings",
  //     route: { name: "setting" },
  //     icon: "fa fa-cogs text-danger",
  //     isChild: true,
  //     components: "user|role|config",
  //     childs: [
  //       {
  //         name: "User",
  //         route: { name: "user" },
  //         icon: "far fa-circle",
  //       },
  //       {
  //         name: "Role",
  //         route: { name: "role" },
  //         icon: "far fa-circle",
  //       },
  //       {
  //         name: "Config",
  //         route: { name: "config" },
  //         icon: "far fa-circle",
  //       },
  //     ],
  //   },
]);
</script>
<style>
.rotate0 {
  transform: rotate(0deg) !important;
}
.body{
    font-family: 'Khmer OS Battambang';
}
</style>
