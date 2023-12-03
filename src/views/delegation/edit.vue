<template>
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Delegation</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form @submit.prevent="handleSubmit($event)">
                <div class="modal-body">
                     <div class="mb-3">
                        <label for="edelegation_name_kh">Delegation_name_kh</label>
                        <input id="edelegation_name_kh" type="text" v-model="form.delegation_name_kh" class="form-control" required>
                    </div>
                     <div class="mb-3">
                        <label for="edelegation_name_en">Delegation_name_en</label>
                        <input id="edelegation_name_en" type="text" v-model="form.delegation_name_en" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="eaudit_id">Name</label>
                        <input id="eaudit_id" type="text" v-model="form.audit_id" class="form-control" required>
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
                    name : '',
                   
                }
            },
        },
        data(){
            return {
                isSubmit : false
            }
        },
        methods : {
            async handleSubmit($event){
                this.isSubmit = true;
                await this.$http.post('update_delegation', this.form);
                this.isSubmit = false;

                $('#editModal').modal('hide');
                this.$emit('reloadPage');
            }
        }
    }
    </script>
    
    <style>
    
    </style>