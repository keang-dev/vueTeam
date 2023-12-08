<template class="Body">

  <!-- //// -->
  <div class="card mt-0 card-primary card-outline card-tabs">
    <div class="card-header p-0 pt-1 border-bottom-0">
      <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="custom-tabs-three-Team-tab"
            data-toggle="pill"
            href="#custom-tabs-three-Team"
            role="tab"
            aria-controls="custom-tabs-three-Team"
            aria-selected="false"
            >សមាជិកក្រុម</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="custom-tabs-three-profile-tab"
            data-toggle="pill"
            href="#custom-tabs-three-profile"
            role="tab"
            aria-controls="custom-tabs-three-profile"
            aria-selected="true"
            >ឯកាសារ</a
          >
        </li>
      
        
      </ul>
    </div>
    <div class="card-body">
      <div class="tab-content" id="custom-tabs-Team-tabContent">
        <div
          class="tab-pane fade active show"
          id="custom-tabs-three-Team"
          role="tabpanel"
          aria-labelledby="custom-tabs-three-Team-tab"
        >
          <DeTeamTable />

        </div>
        <div
          class="tab-pane fade"
          id="custom-tabs-three-profile"
          role="tabpanel"
          aria-labelledby="custom-tabs-three-profile-tab"
        >
        
        </div>
        
      </div>
    </div>
  </div>
</template>
<script setup>
import DeTeamTable from "@/views/audit_form/table/delegationTeam/index.vue";


</script>
  
  <style>
</style>