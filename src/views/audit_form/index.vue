<template>
  <Master1>
    <Header> </Header>
    <Body style="font-family: 'Khmer OS Battambang';">
      <div class="card">
        <card-body class="">
          <div class="card-outline card-tabs">
            <div class="card-header p-0 pt-1 border-bottom-0">
              <ul class="nav" id="custom-tabs-three-tab" role="tablist">
                <li class="nav-item row ml-3">
                  <a
                    class="nav-link active"
                    id="custom-tabs-three-home-tab"
                    data-toggle="pill"
                    href="#custom-tabs-three-home"
                    role="tab"
                    aria-controls="custom-tabs-three-home"
                    aria-selected="false"
                  >
                    <div :v-if="delegation_role == 2 == 'active'">
                      <div class="bar">
                        <div
                          class="progressbar text-center"
                          style="width: 200px; height: 40px"
                        >
                          <div class="mt-2">
                            <i class="fa fa-users mr-1"></i>
                            <b class="mt-1">ក្រុមប្រតិភូ</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    class="nav-link"
                    id=" custom-tabs-three-01-tab"
                    data-toggle="pill"
                    href="#custom-tabs-three-01"
                    role="tab"
                    aria-controls="custom-tabs-three-01"
                    aria-selected="true"
                  >
                    <div class="bar1 text-center">
                      <div
                        class="progressbar1"
                        style="width: 200px; height: 40px"
                      >
                        <div class="mt-2">
                          <b>សវនកម្មរង</b>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    class="nav-link"
                    id=" custom-tabs-three-02-tab"
                    data-toggle="pill"
                    href="#custom-tabs-three-02"
                    role="tab"
                    aria-controls="custom-tabs-three-02"
                    aria-selected="true"
                  >
                    <div class="bar1 text-center">
                      <div
                        class="progressbar1"
                        style="width: 200px; height: 40px"
                      >
                        <div class="mt-2">
                          <b class="mt-1">ផែនការសវនកម្ម</b>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    class="nav-link"
                    id=" custom-tabs-three-03-tab"
                    data-toggle="pill"
                    href="#custom-tabs-three-03"
                    role="tab"
                    aria-controls="custom-tabs-three-03"
                    aria-selected="true"
                  >
                    <div class="bar1 text-center">
                      <div
                        class="progressbar1"
                        style="width: 200px; height: 40px"
                      >
                        <div class="mt-2">
                          <b class="mt-1">+++++</b>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    class="nav-link"
                    id=" custom-tabs-three-04-tab"
                    data-toggle="pill"
                    href="#custom-tabs-three-04"
                    role="tab"
                    aria-controls="custom-tabs-three-04"
                    aria-selected="true"
                  >
                    <div class="bar1 text-center">
                      <div
                        class="progressbar1"
                        style="width: 200px; height: 40px"
                      >
                        <div class="mt-2">
                          <b class="mt-1">ដដដ</b>
                        </div>
                      </div>
                    </div>
                  </a>
                 </li>

                <!-- <td>
                <ul id="progress">

                    <ProgressText>
                        <a href="http://">
                            Audit
                        </a>
                    </ProgressText>

                    <li class="active">Step 1</li>
                    <li class="active">Step 2</li>
                    <li class="active">Step 3</li>
                    <li class="active">Step 4</li>
                </ul>

            </td> -->
              </ul>
            </div>
            <div class="card-body">
              <div class="tab-content" id="custom-tabs-three-auditee">
                <div
                  class="tab-pane fade active show"
                  id="custom-tabs-three-home"
                  role="tabpanel"
                  aria-labelledby="custom-tabs-three-home-tab"
                >
                <DeTeam />
                </div>

                <div
                  class="tab-pane fade"
                  id="custom-tabs-three-01"
                  role="tabpanel"
                  aria-labelledby="custom-tabs-three-01-tab"
                >
                 ១
                </div>
                <div
                  class="tab-pane fade"
                  id="custom-tabs-three-02"
                  role="tabpanel"
                  aria-labelledby="custom-tabs-three-02-tab"
                >
                ២
                </div>
                <div
                  class="tab-pane fade"
                  id="custom-tabs-three-03"
                  role="tabpanel"
                  aria-labelledby="custom-tabs-three-03-tab"
                >
                  ការបើកវគ្គសវនកម្ម
                </div>
                <div
                  class="tab-pane fade"
                  id="custom-tabs-three-04"
                  role="tabpanel"
                  aria-labelledby="custom-tabs-three-04-tab"
                >
                  ៣
                </div>
                <div
                  class="tab-pane fade"
                  id="custom-tabs-three-05"
                  role="tabpanel"
                  aria-labelledby="custom-tabs-three-05-tab"
                >
               ៤
                </div>
              </div>
            </div>
          </div>
        </card-body>
      </div>
      
    </Body>
  </Master1>
</template>
  
<script setup>
import DeTeam from "@/views/audit_form/table/delegation_team.vue";
import axios from "axios";
import { onMounted, reactive } from "vue";
import { AxiosApp } from "@/configs/service.js";
import { useRoute, useRouter } from "vue-router";

const route = useRouter();
const router = useRoute();

const form = reactive({
  audit_name_kh: "",
  audit_code: "",
  id: 0,
});
async function handleSubmit(e) {
  const { data } = await AxiosApp.post("update_audit", { ...form });
  if (data.status == "success") {
    route.push({ name: "audit" });
  }
}

async function init() {
  try {
    const { data } = await AxiosApp.get(`edit_audit?id=${router.params.id}`);
    console.log;

    form.id = data.data.audits;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  init();
});
</script>
<style scoped>
.progressbar {
  height: 30px;
  background: lightgray;
  box-shadow: inset 0px -2px 5px rgba(0, 0, 0, 0.5);
  animation: change 1s linear infinite;
  margin: 5px -10px;
  clip-path: polygon(95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%, 0% 0%);
}

.progressbar:first-child {
  margin-left: 0;
  clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%);
}

.progressbar:last-child {
  margin-right: 0;
}

.bar {
  display: flex;
  gap: 20px;
  /*You can use now this property to play with the separation between the bars*/
}

.progressbar.active {
  background: linear-gradient(to right, red 0%, yellow 50%, green 34%)
      left/var(--p, 100%) fixed,
    lightgray;
  /* box-shadow: inset 0px -2px 5px rgba(0, 0, 0, 0.5); */
}

.progressbar1 {
  height: 30px;
  background: lightgray;
  box-shadow: inset 0px -2px 5px rgba(0, 0, 0, 0.5);
  animation: change 1s linear infinite;
  margin: 5px -10px;
  clip-path: polygon(95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%, 0% 0%);
}

.progressbar1:first-child {
  margin-left: 0;
  /* clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%); */
}

.progressbar1:last-child {
  margin-right: 0;
}

.bar1 {
  display: flex;
  gap: 20px;
  /*You can use now this property to play with the separation between the bars*/
}

.text-center1 {
  text-align: center;
  padding: 2px, 2px, 2px, 2px;
}

.progressbar1.active {
  background: linear-gradient(to right, red 0%, yellow 50%, green 34%)
      left/var(--p, 100%) fixed,
    lightgray;
  box-shadow: inset 0px -2px 5px rgba(0, 0, 0, 0.5);
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #495057;
  background-color: #fff;
  /* border-color: #dee2e6 #dee2e6 #fff; */
}

.nav-link {
  display: block;
  padding: 0;
}
</style>