<template>
  <div class="navigation">
    <b-nav pills align="center">
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/Employees">Employees</b-nav-item>
      <b-nav-item to="/Form">Add</b-nav-item>
      <b-nav-item to="/Edit">Edit</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
.navigation .router-link-exact-active {
  background: whitesmoke !important;
  /* border: 1px solid lightgray !important; */
}

.navigation {
  margin: 40px 0px 20px;
}

.navigation .nav-item a {
  color: black;
}
</style>
