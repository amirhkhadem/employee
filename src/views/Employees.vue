<template>
  <div class="about container">
    <Nav />

    <Section
      :header="true"
      headerText="Company Employees"
      class="text-center"
    />
    <Section :all="true" class="text-center" />
    <b-table
      striped
      hover
      responsive="sm"
      table-variant="light"
      stacked="sm"
      small
      :fields="employeedata"
      :items="employees"
    >
      <template #cell(firstName)="data">{{ data.item.firstName }} </template>
      <template #cell(lastName)="data">{{ data.item.lastName }} </template>
      <template #cell(email)="data">{{ data.item.email }} </template>

      <template #cell(phoneNumber)="data"
        >{{ data.item.phoneNumber }}
      </template>
      <template #cell(addresses)="data">
        <!-- {{ data.item.addresses }} -->
        <div v-for="item in data.item.addresses" :key="item.id">
          {{ item.apartmentNumber }}, {{ item.streetName }}, {{ item.state }},
          {{ item.country }}, <strong>{{ item.postalCode }}</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Section from "@/components/Section.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      employeedata: [
        {
          key: "firstName",
          label: "First Name",
          sortable: true,
          sortDesc: false,
        },
        { key: "lastName", label: "Last Name", sortable: true },
        { key: "email", label: "Email" },
        { key: "phoneNumber", label: "Phone" },
        { key: "addresses", label: "Addresses" },
      ],
    };
  },
  name: "Employees",
  components: { Nav, Section },
  async mounted() {
    await this.$store.dispatch("loadEmployees");
  },
  computed: {
    ...mapState(["employees"]),
  },
};
</script>

<style>
.about .container {
  margin-top: 30px;
}
</style>
