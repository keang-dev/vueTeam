<template>
    <div class="modal fade bg-white" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header bg-green" >
                <h5 class="modal-title" id="exampleModalLabel">Create Audit</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form @submit.prevent="handleSubmit($event)">
                <input type="hidden" name="in_by" value="{{Auth::user()->id}}">
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="audit_name_kh">ឈ្មោះសវនកម្ម</label>
                        <input id="audit_name_kh" type="text" v-model="form.audit_name_kh" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="audit_types">ប្រភេទសវនកម្ម</label>
                        <!-- <input id="audittype_id" type="text" v-model="form.audittype_id" class="form-control" required> -->
                        <select id="audit_types" class="form-control" v-model="form.audittype_id" required>
                            <option value="">Please Select</option>
                            <option :value="audit_types.id" v-for="(audit_types) in audit_types" :key="audit_types.id">{{ audit_types.audittype_name_kh }}</option>
                        </select>
            
                    </div>
                     <div class="mb-3">
                        <label for="auditee_id">បអង្គភាពរង</label>
                         <select id="auditees" class="form-control" v-model="form.auditee_id" required>
                            <option value="">Please Select</option>
                            <option :value="auditees.id" v-for="(auditees) in auditees" :key="auditees.id">{{ auditees.auditee_name_kh }}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="units">នាយកដ្ឋាន</label>
                        <select id="units" class="form-control" v-model="form.unit_id" required>
                            <option value="">Please Select</option>
                            <option :value="units.id" v-for="(units) in units" :key="units.id">{{ units.unit_name_km  }}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                    <label for="role">ឆ្នាំធ្វើចុះសវនកម្ម</label>
                    <select id="auditperiod" class="form-control" v-model="form.auditperiod" required>
                        <option value="">Please Select</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <!-- <option :value="role.id" v-for="role in roles" :key="role.id">{{ role.name  }}</option> -->
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
                form : {
                    audit_name_kh : '',
                    audittype_id : '',
                    auditee_id : '',
                    unit_id : '',
                    auditperiod : '',



                },
                isSubmit : false
            }
        },
        methods : {
            clearform(){
                this.form = {
                    audit_name_kh : '',
                    audittype_id : '',
                    auditee_id : '',
                    unit_id : '',
                    auditperiod : '',
                }
            },
            async handleSubmit($event){
                this.isSubmit = true;
                await this.$http.post('create_audit', this.form);
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