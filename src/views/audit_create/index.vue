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
          <button
            type="button"
            class="btn btn-primary mb-3"
            data-toggle="modal"
            data-target="#createModal"
          >
            <i class="fa fa-plus"></i> Create
          </button>
          <table class="table table-bordered table-sm table hover">
            <thead>
              <tr class="bg-green">
                <th>ID</th>
                <th>លេខកូលសម្គាល់</th>
                <th>ឈ្មោះសវនកម្ម</th>
                <th>ប្រភេទសវនកម្ម</th>
                <th>អង្គភាពរង</th>
                <!-- <th>នាយកដ្ឋាន</th> -->
                <th>ឆ្នាំចុះធ្វើសវនកម្ម</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="audits.length == 0">
                <td colspan="4" class="text-center">No Data</td>
              </tr>
              <tr v-for="(audit, index) in audits" :key="audit.id">
                <td>{{ index + 1 }}</td>
                <td>{{ audit.audit_code }}</td>
                <td>{{ audit.audit_name_kh }}</td>
                <td>{{ audit.audittype_name_kh }}</td>
                <td>{{ audit.auditee_name_kh }}</td>
                <!-- <td>{{ audit.unit_name_km }}</td> -->
                <td>{{ audit.auditperiod }}</td>

                <td>
                  <button
                    type="button"
                    class="btn btn-sm btn-success mr-1"
                    @click="handleEdit($event, audit.id)"
                  >
                    <i class="fa fa-edit"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    @click="handleDelete($event, audit.id)"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
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

      <CreateUser
        :units="units"
        :audit_types="audit_types"
        :auditees="auditees"
        @reloadPage="init()"
      />
      <EditUser   :units="units"
        :audit_types="audit_types"
        :auditees="auditees" 
        :form="edit" 
        @reloadPage="init()" />
    </Body>
  </Master>
</template>
  
  <script>
import CreateUser from "./create.vue";
import EditUser from "./edit.vue";

export default {
  components: {
    CreateUser,
    EditUser,
  },
  data() {
    return {
      audits: [],
      audit_types: [],
      units: [],
      edit: {},
      table: {},
    };
  },
  methods: {
    async init(event = false, audit_id = 0) {
      try {
        const { data } = await this.$http.get(`audit?audit_id=${audit_id}`);
        if (audit_id) {
          $(event.target).attr("disabled", true);
          this.edit = data.data.audit;
          this.edit.audit_id = audit_id;
          $(event.target).attr("disabled", false);
          $("#editModal").modal();
        } else {
          this.audits = data.data.audit.data;
          this.units = data.data.units;
          this.audit_types = data.data.audit_types;
          this.auditees = data.data.auditees;
          this.table = data.data.audit;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async handleEdit(event, audit_id) {
      try {
        await this.init(event, audit_id);
      } catch (error) {}
    },
    async handleDelete(event, audit_id) {
      try {
        if (confirm("តើអ្នកចង់លុបមែនដែលឬទេ?")) {
          $(event.target).attr("disabled", true);
          await this.$http.post(`delete_audit`, {
            audit_id: audit_id,
          });
          await this.init();
        }
      } catch (error) {
        $(event.target).attr("disabled", false);
      }
    },
    async changePage(link) {
      try {
        if (link.url == null) return;

        const path = link.url.split("?")[1];
        const { data } = await this.$http.get(`audit_qa?${path}&audit_qa_id=0`);
        this.audit_qas = data.data.audit_qa.data;
        this.table = data.data.audit_qa;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.init();
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