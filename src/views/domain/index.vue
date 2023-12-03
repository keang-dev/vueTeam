<template class="Body">
  <Master>
    <Header> </Header>
    <Body>
      <div class="card">
        <div class="card-header">
          <h3 class="card-title font22">AUDIT STATUS (.....)</h3>
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
            <thead>
              <tr class="text-center">
                <th>ល.រ</th>
                <th>ឈ្មោះជាអក្សរខ្មែរ(KH)</th>
                <th >សកម្មភាព</th>
              </tr>
            </thead>
            <tbody class="">
              <tr v-if="domains.length == 0">
                <td colspan="4" class="text-center">No Data</td>
              </tr>
              <tr v-for="(domain, index) in domains" :key="domain.id">
                <td>{{ index + 1 }}</td>
                <td>{{ domain.domain_name_kh }}</td>
            

                <td class="text-center">
                  <button type="button" class="btn btn-sm btn-success mr-1" @click="handleEdit($event,domain.id)">
                      <i class="fa fa-edit"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-danger" @click="handleDelete($event,domain.id)">
                      <i class="fa fa-trash"></i>
                    </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="row my-3" v-if="domains.length > 0">
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
       <CreateUser @reloadPage="init()"/>
        <EditUser :form="edit" @reloadPage="init()"/>
    </Body>
  </Master>
</template>
  
  <script>
 import EditDomain from './edit.vue'
    export default {
      components : {
        EditDomain
      },
      data() {
        return {
          domains: [],
          edit: {},
          table: {},
        };
      },
      methods: {
        async init(event = false, domain_id = 0) {
          try {
            const { data } = await this.$http.get(`domain?domain_id=${domain_id}`);
            if (domain_id) {
              $(event.target).attr("disabled", true);
              this.edit = data.data.domain;
              this.edit.domain_id = domain_id;
              $(event.target).attr("disabled", false);
              $("#editDomainModal").modal();
            } else {
              this.domains = data.data.domain.data;

              this.table = data.data.domain;
            }
          } catch (error) {
            console.log(error);
          }
        },
          async handleEdit(event, domain_id){
            try {
              await this.init(event,domain_id);
            } catch (error) {
              
            }
          },
          async handleDelete(event, domain_id){
            try {
              if(confirm('Are you sure ?')){
                $(event.target).attr('disabled',true);
                await this.$http.post(`delete_domain`,{ domain_id : domain_id });        
                await this.init();
              }
            } catch (error) {
              $(event.target).attr('disabled',false);
            }
          },
          async changePage(link){
            try {
              if(link.url == null) return ;
      
              const path = link.url.split('?')[1];
              const { data } = await this.$http.get(`permission?${path}&permission_id=0`);
              this.permissions = data.data.permission.data
              this.table = data.data.permission;
      
            } catch (error) {
                console.log(error);
            }
          }
        },
        mounted(){
          this.init();
        }
      }
  </script>
  
  <style>
  
  </style>