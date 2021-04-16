<template>
  <div class="Logout">
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function () {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
    this.$router.push("/");
  },
};
</script>

