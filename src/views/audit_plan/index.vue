<template>
  <Master>
    <Header>
     
    </Header>
    <Body>
      <div class="card">
         <div class="card-header bg-green">
          <h3 class="card-title">ផែនការសវនកម្មប្រចាំឆ្នាំ</h3>
          <div class="card-tools">
    
            <button
              type="button"
              class="btn btn-tool"
              data-card-widget="collapse"
              title="Collapse"
            >
              <i class="fas fa-minus"></i>
            </button>
            <button
              type="button"
              class="btn btn-tool"
              data-card-widget="remove"
              title="Remove"
            >
              <i class="fas fa-times"></i>
            </button>
            
          </div>
        </div>
        <div class="card-body">
          <table class="table table-bordered table-sm table hover">
            <thead></thead>
            <tbody>
              <tr v-show="audits.length == 0">
                <td colspan="4" class="text-center">No Data</td>
              </tr>
              <tr v-for="audit in audits" :key="audit.id">
                <!-- <td>{{ audit.audit_code }}-{{ audit.auditperiod }}</td> -->
                <td>
                  <router-link
                    :to="{
                      name: 'edit_audit2',
                      params: { audit_id: audit.id },
                    }"
                    class="mr-1"
                    >{{ audit.audit_code }}-{{ audit.auditperiod }}</router-link>
                  <!-- <button class="btn btn-sm btn-danger mr-1" @click="handleDelete(stu.id)"><i class="fa fa-trash"></i></button> -->
                </td>
              </tr>
            </tbody>
          </table>
          <div class="row my-3">
            <div class="col-12">
              <nav aria-label="Page navigation">
                <ul class="pagination float-right pagination-sm">
                  <li
                    :class="`page-item ${link.active == true ? 'active' : ''} ${
                      link.url == null ? 'disabled' : ''
                    }`"
                    v-for="(link, index) in table.links"
                    :key="`${index}${table.current_page}`"
                    @click="changePage(link)"
                  >
                    <button type="button" class="page-link">
                      <span v-html="link.label"></span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Body>
  </Master>
</template>
  
  <script>
export default {
  data() {
    return {
      audits: [],
      table: {},
    };
  },
  methods: {
    async init() {
      try {
        const { data } = await this.$http.get("dashboard");
        this.audits = data.data.audits.data;
        
        this.table = data.data.audits;
      } catch (error) {
        console.log(error);
      }
    },
    async changePage(link) {
      try {
        if (link.url == null) return;

        const path = link.url.split("?")[1];
        const { data } = await this.$http.get(`dashboard?${path}`);
        this.audits = data.data.audits.data;
          this.audits = data.data.audits.data

        this.table = data.data.audits;
      } catch (error) {
        console.log(error);
      }
    },
    async handleDelete(student_id) {
      if (confirm("Are you sure ?")) {
        await this.$http.post(`delete_student`, { id: student_id });
        await this.init();
      }
    },
  },
  mounted() {
    this.init();

    setTimeout(() => {
      console.log(this.students);
    }, 1000);
  },
};
</script>
  
  <style>
</style>