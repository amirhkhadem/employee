<template>
  <div class="home text-center">
    <Nav />
    <Section :header="true" headerText="Employee CRUD" class="text-center" />
    <Section :home="true" class="text-center" />
    <img class="my-4" alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Section from "@/components/Section.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Section,
  },
};
</script>
