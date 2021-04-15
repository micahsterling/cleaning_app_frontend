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
        <input type="password" class="form-control" v-model="password">

      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation">
      </div>
    </form>
  </div>
</template>