<template>
  <div class="wrapper">
    <NavBar v-if="isNav" />
    <nav
      class="main-header navbar navbar-expand navbar-white navbar-light fade show"
      v-show="!isNav"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"
            ><i class="fas fa-bars"></i
          ></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">
            <div
              class="fas fa-home text-success"
              style="font-family: 'Khmer OS Battambang'"
            >
              ទំព័រដើម
            </div>
          </a>
        </li>
         <!-- <li class="nav-item">
          <a class="nav-link" href="">
            <div
              class="fas fa-home text-success"
              style="font-family: 'Khmer OS Battambang'"
            >
            <input
              type="checkbox"
              @click="handleDarkmode()"
              value="1"
              class="mr-1"
            />
              Dark Mode
            </div>
          </a>
        </li> -->
        
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
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
                <li class="nav-item ml-3">
                <div
                  class="fas fa-home text-success"
                  style="font-family: 'Khmer OS Battambang'"
                >
                  <input
                    type="checkbox"
                    @click="handleDarkmode()"
                    value="1"
                    class="mr-1"
                  />
                  Dark Mode
                </div>
              </li>
              <div class="dropdown-divider"></div>
              <a href="" class="dropdown-item">
                <i class="fa fa-user text-info mr-2"></i> Profile
              </a>
              <a href="" class="dropdown-item">
                <i class="fa fa-key mr-2"></i>Reset Password
              </a>
              <button class="dropdown-item text-danger" @click="handleLogout()">
                <i class="fa fa-reply"></i> Logout
              </button>
            </div>
          </li>
        </ul>
        <!-- <li class="nav-item">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-user"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item text-danger" @click="handleLogout()"><i class="fa fa-reply"></i> Logout</button>
            </div>
          </div>
        </li> -->
      </ul>
    </nav>
    <aside class="main-sidebar sidebar-dark-primary elevation-4" v-if="!isNav">
      <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex"></div>

        <SideBarEdit />
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div :class="`content-wrapper ${isNav ? 'm-0' : ''}`">
      <!-- <Header>
    <slot name="header"></slot>
  </Header>
  <Body>
    <slot name="body"></slot>
  </Body> -->
      <slot></slot>
    </div>
    <Footer />
    <aside
      class="control-sidebar control-sidebar-dark"
      style="top: 57px; height: 368px; display: none"
    >
      <div
        class="p-3 control-sidebar-content os-host os-theme-light os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-overflow os-host-overflow-y"
        style="height: 368px"
      >
        <div class="os-resize-observer-host observed">
          <div class="os-resize-observer" style="left: 0px; right: auto"></div>
        </div>
        <div
          class="os-size-auto-observer observed"
          style="height: calc(100% + 1px); float: left"
        >
          <div class="os-resize-observer"></div>
        </div>
        <div class="os-content-glue" style="margin: -16px"></div>
        <div class="os-padding">
          <div
            class="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid"
            style="overflow-y: scroll"
          >
            <div
              class="os-content"
              style="padding: 16px; height: 100%; width: 100%"
            >
              <h5>Customize AdminLTE</h5>
              <hr class="mb-2" />
              <div class="mb-4">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Dark Mode</span
                >
              </div>
              <h6>Header Options</h6>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Fixed</span
                >
              </div>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Dropdown Legacy Offset</span
                >
              </div>
              <div class="mb-4">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >No border</span
                >
              </div>
              <h6>Sidebar Options</h6>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Collapsed</span
                >
              </div>
              <div class="mb-1">
                <input
                  type="checkbox"
                  value="1"
                  checked="checked"
                  class="mr-1"
                /><span>Fixed</span>
              </div>
              <div class="mb-1">
                <input
                  type="checkbox"
                  value="1"
                  checked="checked"
                  class="mr-1"
                /><span>Sidebar Mini</span>
              </div>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Sidebar Mini MD</span
                >
              </div>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Sidebar Mini XS</span
                >
              </div>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Nav Flat Style</span
                >
              </div>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Nav Legacy Style</span
                >
              </div>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Nav Compact</span
                >
              </div>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Nav Child Indent</span
                >
              </div>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Nav Child Hide on Collapse</span
                >
              </div>
              <div class="mb-4">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Disable Hover/Focus Auto-Expand</span
                >
              </div>
              <h6>Footer Options</h6>
              <div class="mb-4">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Fixed</span
                >
              </div>
              <h6>Small Text Options</h6>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Body</span
                >
              </div>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Navbar</span
                >
              </div>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Brand</span
                >
              </div>
              <div class="mb-1">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Sidebar Nav</span
                >
              </div>
              <div class="mb-4">
                <input type="checkbox" value="1" class="mr-1" /><span
                  >Footer</span
                >
              </div>
              <h6>Navbar Variants</h6>
              <div class="d-flex">
                <select class="custom-select mb-3 text-light border-0 bg-white">
                  <option class="bg-primary">Primary</option>
                  <option class="bg-secondary">Secondary</option>
                  <option class="bg-info">Info</option>
                  <option class="bg-success">Success</option>
                  <option class="bg-danger">Danger</option>
                  <option class="bg-indigo">Indigo</option>
                  <option class="bg-purple">Purple</option>
                  <option class="bg-pink">Pink</option>
                  <option class="bg-navy">Navy</option>
                  <option class="bg-lightblue">Lightblue</option>
                  <option class="bg-teal">Teal</option>
                  <option class="bg-cyan">Cyan</option>
                  <option class="bg-dark">Dark</option>
                  <option class="bg-gray-dark">Gray dark</option>
                  <option class="bg-gray">Gray</option>
                  <option class="bg-light">Light</option>
                  <option class="bg-warning">Warning</option>
                  <option class="bg-white">White</option>
                  <option class="bg-orange">Orange</option>
                </select>
              </div>
              <h6>Accent Color Variants</h6>
              <div class="d-flex"></div>
              <select class="custom-select mb-3 border-0">
                <option>None Selected</option>
                <option class="bg-primary">Primary</option>
                <option class="bg-warning">Warning</option>
                <option class="bg-info">Info</option>
                <option class="bg-danger">Danger</option>
                <option class="bg-success">Success</option>
                <option class="bg-indigo">Indigo</option>
                <option class="bg-lightblue">Lightblue</option>
                <option class="bg-navy">Navy</option>
                <option class="bg-purple">Purple</option>
                <option class="bg-fuchsia">Fuchsia</option>
                <option class="bg-pink">Pink</option>
                <option class="bg-maroon">Maroon</option>
                <option class="bg-orange">Orange</option>
                <option class="bg-lime">Lime</option>
                <option class="bg-teal">Teal</option>
                <option class="bg-olive">Olive</option>
              </select>
              <h6>Dark Sidebar Variants</h6>
              <div class="d-flex"></div>
              <select class="custom-select mb-3 text-light border-0 bg-primary">
                <option>None Selected</option>
                <option class="bg-primary">Primary</option>
                <option class="bg-warning">Warning</option>
                <option class="bg-info">Info</option>
                <option class="bg-danger">Danger</option>
                <option class="bg-success">Success</option>
                <option class="bg-indigo">Indigo</option>
                <option class="bg-lightblue">Lightblue</option>
                <option class="bg-navy">Navy</option>
                <option class="bg-purple">Purple</option>
                <option class="bg-fuchsia">Fuchsia</option>
                <option class="bg-pink">Pink</option>
                <option class="bg-maroon">Maroon</option>
                <option class="bg-orange">Orange</option>
                <option class="bg-lime">Lime</option>
                <option class="bg-teal">Teal</option>
                <option class="bg-olive">Olive</option>
              </select>
              <h6>Light Sidebar Variants</h6>
              <div class="d-flex"></div>
              <select class="custom-select mb-3 border-0">
                <option>None Selected</option>
                <option class="bg-primary">Primary</option>
                <option class="bg-warning">Warning</option>
                <option class="bg-info">Info</option>
                <option class="bg-danger">Danger</option>
                <option class="bg-success">Success</option>
                <option class="bg-indigo">Indigo</option>
                <option class="bg-lightblue">Lightblue</option>
                <option class="bg-navy">Navy</option>
                <option class="bg-purple">Purple</option>
                <option class="bg-fuchsia">Fuchsia</option>
                <option class="bg-pink">Pink</option>
                <option class="bg-maroon">Maroon</option>
                <option class="bg-orange">Orange</option>
                <option class="bg-lime">Lime</option>
                <option class="bg-teal">Teal</option>
                <option class="bg-olive">Olive</option>
              </select>
              <h6>Brand Logo Variants</h6>
              <div class="d-flex"></div>
              <select class="custom-select mb-3 border-0">
                <option>None Selected</option>
                <option class="bg-primary">Primary</option>
                <option class="bg-secondary">Secondary</option>
                <option class="bg-info">Info</option>
                <option class="bg-success">Success</option>
                <option class="bg-danger">Danger</option>
                <option class="bg-indigo">Indigo</option>
                <option class="bg-purple">Purple</option>
                <option class="bg-pink">Pink</option>
                <option class="bg-navy">Navy</option>
                <option class="bg-lightblue">Lightblue</option>
                <option class="bg-teal">Teal</option>
                <option class="bg-cyan">Cyan</option>
                <option class="bg-dark">Dark</option>
                <option class="bg-gray-dark">Gray dark</option>
                <option class="bg-gray">Gray</option>
                <option class="bg-light">Light</option>
                <option class="bg-warning">Warning</option>
                <option class="bg-white">White</option>
                <option class="bg-orange">Orange</option>
                <a href="#">clear</a>
              </select>
            </div>
          </div>
        </div>
        <div
          class="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"
        >
          <div class="os-scrollbar-track">
            <div
              class="os-scrollbar-handle"
              style="transform: translate(0px, 0px); width: 100%"
            ></div>
          </div>
        </div>
        <div
          class="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden"
        >
          <div class="os-scrollbar-track">
            <div
              class="os-scrollbar-handle"
              style="transform: translate(0px, 0px); height: 28.483%"
            ></div>
          </div>
        </div>
        <div class="os-scrollbar-corner"></div>
      </div>
    </aside>
  </div>

  <div class="btnChange btn btn-success btn-lg" @click="isNav = !isNav">
    <i class="fas fa-th-large"></i>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SideBar from "@/components/Layouts/SideBar.vue";
import { auth } from "@/stores/auth.js";
import { getCurrentInstance } from "vue";
import NavBar from "@/components/Layouts/NavBar.vue";

const isClick = ref(false);
const isDarkmode = ref(false);
const defineAuth = auth();
const instance = getCurrentInstance();
const http = instance.appContext.config.globalProperties.$http;
const alerts = instance.appContext.config.globalProperties.$alert;

const isNav = ref(false);

function handleDarkmode() {
  if (isDarkmode.value == false) {
    $("body").addClass("dark-mode");
    isDarkmode.value = true;
  } else {
    $("body").removeClass("dark-mode");
    isDarkmode.value = false;
  }
}

function handleClick() {
  if (isClick.value == false) {
    $("body").addClass("control-sidebar-slide-open");
    isClick.value = true;
  } else {
    $("body").removeClass("control-sidebar-slide-open");
  }
}

async function handleLogout() {
  try {
    const { data } = await http.get("logout");
    if (data.status == "success") {
      alerts({ type: "success", sms: data.sms });
      defineAuth.logout();
    } else {
      alerts({ type: "error", sms: data.sms });
    }
  } catch (error) {
    alerts({ type: "error", sms: error.message });
  }
}
</script>


<style>
/* .btnChange{
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
} */
</style>