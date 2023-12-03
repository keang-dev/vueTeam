<template class="Body">
    <Master>
      <Header> 
        <h2>Delegation Page</h2> 
      </Header>
      <Body>
        <div class="card">
          
          <div class="card-body">
            <button type="button" class="btn btn-primary mb-3" data-toggle="modal" data-target="#createModal">
              <i class="fa fa-plus"></i> Create
            </button>
            <table class="table table-bordered table-sm table hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name(KH)</th>
                  <th>Name(EN)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="entitys.length == 0">
                    <td colspan="4" class="text-center">No Data</td>
                </tr>
                <tr v-for="(entity,index) in entitys" :key="entity.id">
                  <td>{{ index +1 }}</td>
                  <td>{{ entity.entity_name_km }}</td>
                  <td>{{ entity.entity_name_en }}</td>

               
                  <!-- <td>{{ permission.note }}</td> -->
                  <td>
                    <button type="button" class="btn btn-sm btn-success mr-1" @click="handleEdit($event,entity.id)">
                      <i class="fa fa-edit"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-danger" @click="handleDelete($event,entity.id)">
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="row my-3" v-if="entitys.length > 0">
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
      </Body>
    </Master>
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
        entitys : [],
        edit : {},
        table : {}
      }
    },
    methods :{
      async init(event = false, entity_id = 0){
        try {
          const { data } = await this.$http.get(`entity?entity_id=${entity_id}`);
          if(entity_id){
            $(event.target).attr('disabled',true);
            this.edit = data.data.entity;
            this.edit.entity_id = entity_id;
            $(event.target).attr('disabled',false);
            $('#editModal').modal();
          } else {
            this.entitys = data.data.entity.data
  
            this.table = data.data.entity;
  
          }
        } catch (error) {
          console.log(error)
        }
      },
      async handleEdit(event, delegation_id){
        try {
          await this.init(event,delegation_id);
        } catch (error) {
          
        }
      },
      async handleDelete(event, delegation_id){
        try {
          if(confirm('តើអ្នកចង់លុបមែនដែលឬទេ?')){
            $(event.target).attr('disabled',true);
            await this.$http.post(`delete_delegation`,{ delegation_id : delegation_id });        
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