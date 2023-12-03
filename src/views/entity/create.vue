<template>
    <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Create Entity</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form @submit.prevent="handleSubmit($event)">
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="entity_name_km">Name(KH)</label>
                        <input id="entity_name_km" type="text" v-model="form.entity_name_km" class="form-control" required>
                    </div>
                      <div class="mb-3">
                        <label for="entity_name_en">Name(EN)</label>
                        <input id="entity_name_en" type="text" v-model="form.entity_name_en" class="form-control" required>
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
        data(){
            return {
                form : {
                    entity_name_km : '',
                    entity_name_en : '',
                },
                isSubmit : false
            }
        },
        methods : {
            clearform(){
                this.form = {
                   entity_name_km : '',
                    entity_name_en : '',
                }
            },
            async handleSubmit($event){
                this.isSubmit = true;
                await this.$http.post('create_entity', this.form);
                this.isSubmit = false;
                this.clearform();
                $('#createModal').modal('hide');
                this.$emit('reloadPage');
            }
        }
    }
    </script>
    
    <style>
    
    </style>