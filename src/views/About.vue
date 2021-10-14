<template>
  <div class="about text-center">
    <Nav />

    <Section :header="true" headerText="About" />
    <div class="container"></div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Section from "@/components/Section.vue";

export default {
  name: "about",
  components: { Nav, Section },
};
</script>

<style>
.about .container {
  margin-top: 90px;
}
</style>
