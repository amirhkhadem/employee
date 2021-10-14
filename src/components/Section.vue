<template>
  <div class="section">
    <h1 v-if="header == true" class="display-5 my-2">
      {{ headerText }}
    </h1>
    <p v-if="add == true">
      Add a new employee by filling out the form below, you can also add
      multiple addresses by clicking the "Add Address" button.
    </p>
    <p v-if="all == true">
      All the employees in the company are in the table below:
    </p>
    <p v-if="edit == true">
      Use the form below to edit an employee by providing Employee ID first.
    </p>
    <p v-if="home == true">
      Please use the navigation to perform employee crud operations.
    </p>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    all: { Boolean, default: false },
    add: { Boolean, default: false },
    edit: { Boolean, default: false },
    header: { Boolean, default: false },
    home: { Boolean, default: false },

    headerText: String,
  },
};
</script>

<style>
.section a {
  color: unset;
  text-decoration: unset;
  background: yellow;
  padding: 2px 5px;
}
</style>
