<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h2>Signup</h2>
      <ul>
        <li class="test-danger" v-for="error in errors" v-bind:key="error">
        {{error}}
        </li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password"> <br>
        <small class="text-danger" v-if="password.length && password.length < 6">Your password is too short</small>
        <small v-else-if="password.length >= 6 && password.length <= 20">You have {{ 20 - password.length }} remaining characters</small>
        <small v-bind:style="`font-size: ${password.length}px`" class="text-danger" v-else-if="password.length > 20">Your password is too long</small>
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>