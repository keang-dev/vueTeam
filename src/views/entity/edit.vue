<template>
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Entity</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form @submit.prevent="handleSubmit($event)">
                <div class="modal-body">
                     <div class="mb-3">
                        <label for="eentity_name_km">entity_name_km</label>
                        <input id="eentity_name_km" type="text" v-model="form.entity_name_km" class="form-control" required>
                    </div>
                     <div class="mb-3">
                        <label for="eentity_name_en">entity_name_en</label>
                        <input id="eentity_name_en" type="text" v-model="form.entity_name_en" class="form-control" required>
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
                    entity_name_km : '',
                    entity_name_en : '',

                   
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
                await this.$http.post('update_entity', this.form);
                this.isSubmit = false;

                $('#editModal').modal('hide');
                this.$emit('reloadPage');
            }
        }
    }
    </script>
    
    <style>
    
    </style>