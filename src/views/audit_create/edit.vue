<template>
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Audit QA</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form @submit.prevent="handleSubmit($event)">
                <div class="modal-body">
                     <div class="mb-3">
                        <label for="eaudit_name_kh">ឈ្មោះសវនកម្ម</label>
                        <input id="eaudit_name_kh" type="text" v-model="form.audit_name_kh" class="form-control" required>
                    </div>
                     <div class="mb-3">
                        <label for="audittype_id">ប្រភេទសវនកម្ម</label>
                        <select id="audittype_id" class="form-control" v-model="form.audittype_id" required>
                            <option value="">Please Select</option>
                            <option :value="audit_types.id" v-for="(audit_types) in audit_types" :key="audit_types.id">{{ audit_types.audittype_name_kh }}</option>
                        </select>
                    </div>
                   <div class="mb-3">
                        <label for="audittype_id">ប្រភេទសវនកម្ម</label>
                        <select id="audittype_id" class="form-control" v-model="form.audittype_id" required>
                            <option value="">Please Select</option>
                            <option :value="auditees.id" v-for="(auditees) in auditees" :key="auditees.id">{{ auditees.auditee_name_kh }}</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" :disabled="isSubmit" class="btn btn-primary">Save changes</button>
                </div>
            </form>
            </div>
        </div>
    </div>
    </template>
    <script>
    export default {
        emits : ['reloadPage'],
        props : {
            form : {
                type : [Object, Array],
                default : {
                    audit_name_kh : '',
                    audittype_id : '',
                    auditee_id : '',


                   
                }
            },
              units : {
                type : [Object, Array],
                default : []
            },
             auditees : {
                type : [Object, Array],
                default : []
            },
             audit_types : {
                type : [Object, Array],
                default : []
            }
        },
        data(){
            return {
                isSubmit : false
            }
        },
        methods : {
            async handleSubmit($event){
                this.isSubmit = true;
                await this.$http.post('update_audit', this.form);
                this.isSubmit = false;

                $('#editModal').modal('hide');
                this.$emit('reloadPage');
            }
        }
    }
    </script>
    <style>
    
    </style>