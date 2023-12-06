<template class="Body">
  <Master>
    <Header> </Header>
    <Body class="Body">
      <div class="card">
        <div class="card-header">
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
          <!-- //// -->
       
          <table class="table table-bordered table-sm table hover">
            <thead>
              <tr class="bg-green">
              
              </tr>
            </thead>
            <tbody>
              <tr v-if="audits.length == 0">
                <td colspan="4" class="text-center">No Data</td>
              </tr>
              <tr v-for="(audit) in audits" :key="audit.id">
                <!-- <td>{{ index + 1 }}</td> -->
                <td>
                  <router-link :to="{ name : 'edit_audit', params : { audit_id : audit.audit_id } }" class="">{{ audit.audit_code }}-{{ audit.auditperiod }}</router-link>
                   
                   </td> 
                <!-- <td><router-link :to="{ name : 'edit_audit', params : { audit_id : audit.audit_id } }" class="btn btn-sm btn-warning mr-1"><i class="fa fa-edit"></i></router-link></td> -->
              </tr>
            </tbody>
          </table>
          <div class="row my-3" v-if="audits.length > 0">
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
    async init(event = false, audit_id = 0) {
      try {
        const { data } = await this.$http.get(`audit1?audit_id=${audit_id}`);
          this.audits = data.data.audit.data;
          this.table = data.data.audit;
        }
       catch (error) {
        console.log(error);
      }
    },
    
    
    async changePage(link) {
      try {
        if (link.url == null) return;

        const path = link.url.split("?")[1];
        const { data } = await this.$http.get(`audit?${path}&audit_id=0`);
        this.audits = data.data.audit.data;
        this.table = data.data.audit;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.init();
      setTimeout(() => {
        console.log(this.audits)
      }, 1000);
  },
  
};
</script>
  
<style>
.Body {
  font-family: Khmer OS Battambang;
}
.card-title{
  font-family: Khmer OS Muol Light;
  font-size: 26px;
}
</style>