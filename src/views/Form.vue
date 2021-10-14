<template>
  <div class="form">
    <Nav />

    <div class="container">
      <Section
        :header="true"
        headerText="New Employee Form"
        class="text-center"
      />
      <Section :add="true" class="text-center" />

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <div class="top-form">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.firstName"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Lastname"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.lastName"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Phone Number"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.phoneNumber"
              placeholder="Enter Phone Number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <Address
          class="mb-4"
          v-for="item in form.addresses"
          :key="item.id"
          :address="item"
        />
        <div class="my-2">
          <b-button @click="addAddress()">Add Address</b-button>
        </div>
        <div class="my-2">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button class="ms-2" type="reset" variant="danger">Reset</b-button>
        </div>
      </b-form>
      <div class="saved" v-if="savingSuccessful">Employee is added.</div>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Address from "@/components/Address.vue";
import Section from "@/components/Section.vue";
import { mapGetters } from "vuex";

// https://procom-interview-employee-test.azurewebsites.net/Employee

export default {
  name: "form",
  components: { Nav, Address, Section },
  data() {
    return {
      form: {
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        addresses: [],
      },
      show: true,
      savingSuccessful: false,
    };
  },
  computed: {
    // ...mapState(["savingSuccessful"]),
    ...mapGetters(["getSaving"]),
  },
  methods: {
    addAddress() {
      let addressInput = {
        streetName: "",
        postalCode: "",
        apartmentNumber: 0,
        state: "",
        country: "",
      };

      this.form.addresses.push(addressInput);
      // clear the input
      // this.form.addressInput = "";
    },
    async onSubmit(event) {
      event.preventDefault();
      await this.$store.dispatch("addEmployee", this.form);
      this.savingSuccessful = this.getSaving;
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.phoneNumber = 0;
      this.form.addresses = "";

      // Trick to reset/clear native browser form validation state
      // this.show = false;
      // this.$nextTick(() => {
      //   this.show = true;
      // });
    },
  },
};
</script>

<style>
.about .container {
  margin-top: 90px;
}

.form-group {
  margin: 10px 0px;
}

.top-form {
  margin: 20px 0px;
}

.saved {
  background: whitesmoke;
  padding: 20px;
}
</style>
