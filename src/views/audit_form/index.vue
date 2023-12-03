<template>
    <Master>
      <Header> 
      
      </Header>
      <Body>
       <div class="card">
        <card-body>
          dfsa
        </card-body>
       </div>
      </Body>
    </Master>
  </template>
  
  <script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { AxiosApp } from '@/configs/service.js'
import { useRoute, useRouter } from 'vue-router';

const route = useRouter();
const router = useRoute();

    const form = reactive({
        audit_name_kh : '',
        audit_code : '',
        id : 0
    })
    async function handleSubmit(e){
        const { data } = await AxiosApp.post('update_audit', {...form});
        if(data.status == 'success'){
            route.push({ name : "audit"});
        }
    }

    async function init(){
        try {
          const { data } = await AxiosApp.get(`edit_audit?id=${router.params.id}`);
        console.log
       
          form.id = data.data.audits
        } catch (error) {
          console.log(error)
        }
    }

    onMounted(() => {
        init();
    })
</script>
