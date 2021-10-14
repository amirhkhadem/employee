<template>
  <div class="edit">
    <Nav />

    <Section :header="true" headerText="Edit" class="text-center" />
    <div class="container">
      <div class="form">
        <div class="container">
          <b-form v-if="show">
            <b-form-group
              id="input-group-1"
              label="Employee ID"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.userId"
                placeholder="Enter Employee Id"
                required
              ></b-form-input>
            </b-form-group>

            <div class="my-2">
              <b-button @click="loadEmployee()" variant="primary"
                >Submit</b-button
              >
              <!-- <b-button class="ms-2" type="reset" variant="danger"
                >Reset</b-button
              > -->
            </div>
          </b-form>
        </div>
      </div>
      <!-- <div v-for="item in employees" :key="item.id">
        {{ item.firstName }}
      </div> -->
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Section from "@/components/Section.vue";
import { mapState } from "vuex";

// https://procom-interview-employee-test.azurewebsites.net/Employee

export default {
  name: "edit",
  components: { Nav, Section },
  data() {
    return {
      form: {
        userId: "",
      },
      show: true,
      counter: 0,
    };
  },
  computed: {
    ...mapState(["employees"]),
  },
  methods: {
    async loadEmployee() {
      await this.$store.dispatch("loadEmployees", this.form.userId);

      // await this.$store.dispatch("addEmployee", this.form);
    },
    // onReset(event) {
    // event.preventDefault();
    // Reset our form values
    // this.form.email = "";
    // this.form.firstName = "";
    // this.form.lastName = "";
    // this.form.phoneNumber = "";
    // this.form.addresses = "";
    // Trick to reset/clear native browser form validation state
    // this.show = false;
    // this.$nextTick(() => {
    //   this.show = true;
    // });
    // },
  },
};
</script>

<style>
.about .container {
  margin-top: 90px;
}
</style>
