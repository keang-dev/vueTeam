<template >
        <div class="card"> 
          <div class="card-body">
            <button type="button" class="btn btn-primary mb-3" data-toggle="modal" data-target="#createModal">
              <i class="fa fa-plus mr-1"></i>បញ្ចូលសមាជិកថ្មី
            </button>
            <table class="table table-bordered table-sm table hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ឈ្មោះប្រតិភូ</th>
                  <th>តួនាទី</th>
                  <th>សកម្មភាព</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="delegation_teams.length == 0">
                    <td colspan="4" class="text-center">No Data</td>
                </tr>
                <tr v-for="(delegation_team,index) in delegation_teams" :key="delegation_team.id">
                  <td>{{ index +1 }}</td>
                 <td>{{delegation_team.staff_id}}</td>
                 <td>{{delegation_team.delegationrole_id}}</td>
                  <td>
                    <button type="button" class="btn btn-sm btn-success mr-1" @click="handleEdit($event,delegation_team.id)">
                      <i class="fa fa-edit"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-danger" @click="handleDelete($event,delegation_team.id)">
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="row my-3" v-if="delegation_teams.length > 0">
              <div class="col-12">
                <nav aria-label="Page navigation">
                  <ul class="pagination float-right pagination-sm">
                    <li :class="`page-item ${link.active == true ? 'active' : ''} ${link.url == null ? 'disabled' : ''}`" v-for="(link,index) in table.links" :key="`${index}${table.current_page}`" @click="changePage(link)">
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
     
  </template>
  
  <script>
  import CreateUser from './create.vue'
  import EditUser from './edit.vue'
  
  export default {
    components : {
      CreateUser , EditUser
    },
    data(){
      return {
        delegation_teams : [],
        edit : {},
        table : {}
      }
    },
    methods :{
      async init(event = false, delegation_team_id  = 0){
        try {
          const { data } = await this.$http.get(`edit_dashboard?delegation_team_id =${delegation_team_id }`);
          if(delegation_team_id ){
            $(event.target).attr('disabled',true);
            this.edit = data.data.delegation_team;
            this.edit.delegation_team_id  = delegation_team_id;
            $(event.target).attr('disabled',false);
            $('#editModal').modal();
          } else {
            this.delegation_teams = data.data.delegation_team.data
  
            this.table = data.data.delegation_team;
  
          }
        } catch (error) {
          console.log(error)
        }
      },
      async handleEdit(event, delegation_role_id){
        try {
          await this.init(event,delegation_role_id);
        } catch (error) {
          
        }
      },
      async handleDelete(event, delegation_role_id){
        try {
          if(confirm('តើអ្នកចង់លុបមែនដែលឬទេ?')){
            $(event.target).attr('disabled',true);
            await this.$http.post(`delete_delegation_role`,{ delegation_role_id : delegation_role_id });        
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
          const { data } = await this.$http.get(`delegation_role?${path}&delegation_role_id=0`);
          this.audit_qas = data.data.delegation_role.data
          this.table = data.data.delegation_role;
  
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