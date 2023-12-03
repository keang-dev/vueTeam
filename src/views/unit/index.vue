<template>
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
                <th>ឈ្មោះជាអក្សរអង់គ្លេស(EN)</th>
                <th >សកម្មភាព</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="units.length == 0">
                <td colspan="4" class="text-center">No Data</td>
              </tr>
              <tr v-for="(unit, index) in units" :key="unit.id">
                <td>{{ index + 1 }}</td>
                <td>{{ unit.unit_name_km }}</td>
                <td>{{ unit.unit_name_en }}</td>

                <td class="text-center">
                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    @click="handleDelete($event, units.id)"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="row my-3" v-if="units.length > 0">
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
    </Body>
  </Master>
</template>
  
  <script>
export default {
  data() {
    return {
      units: [],
      edit: {},
      table: {},
    };
  },
  methods: {
    async init(event = false, unit_id = 0) {
      try {
        const { data } = await this.$http.get(`unit?unit_id=${unit_id}`);
        if (unit_id) {
          $(event.target).attr("disabled", true);
          this.edit = data.data.unit;
          this.edit.unit_id = unit_id;
          $(event.target).attr("disabled", false);
          $("#editModal").modal();
        } else {
          this.units = data.data.unit.data;

          this.table = data.data.unit;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async handleDelete(event, unit_id) {
      try {
        if (confirm("Are you sure ?")) {
          $(event.target).attr("disabled", true);
          await this.$http.post(`unit_delete`, { unit_id: unit_id });
          await this.init();
        }
      } catch (error) {
        $(event.target).attr("disabled", false);
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
  
  <style>
</style>