<template>
  <div class="address">
    <div class="address-header">Address:</div>
    <b-form-group
      id="input-group-5"
      label="Your Street Name:"
      label-for="input-5"
    >
      <b-form-input
        id="input-5"
        v-model="address.streetName"
        placeholder="Enter Street Name"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="input-group-6"
      label="Your Postal Code:"
      label-for="input-6"
    >
      <b-form-input
        id="input-6"
        v-model="address.postalCode"
        placeholder="Enter Postal Code"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="input-group-7"
      label="Your Apartment Number"
      label-for="input-7"
    >
      <b-form-input
        id="input-7"
        v-model.number="address.apartmentNumber"
        type="number"
        placeholder="Enter Apt. Number"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-8" label="Your State" label-for="input-8">
      <b-form-input
        id="input-8"
        v-model="address.state"
        placeholder="Enter State"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-9" label="Your Country" label-for="input-9">
      <b-form-input
        id="input-2"
        v-model="address.country"
        placeholder="Enter Country"
        required
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "address",
  props: {
    address: { type: Object, default: null },
  },
  data() {
    return {
      // addressInput: {
      //   streetName: "",
      //   postalCode: "",
      //   apartmentNumber: 0,
      //   state: "",
      //   country: "",
      // }
    };
  },
};
</script>

<style>
.address {
  margin: 10px 0px;
}

.address-header {
  font-weight: bold;
  margin: 0px 0px;
}
</style>
