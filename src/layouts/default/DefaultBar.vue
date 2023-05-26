<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const identifier = ref("");
const password = ref("");
const router = useRouter();
const showLoginDialog = ref(false);
const showDrawer = ref(false);

const toggleDrawer = () => {
  if (showDrawer.value === false) {
    showDrawer.value = true;
  } else {
    showDrawer.value = false;
  }
};

const login = () => {
  let isEmail = false;
  let username = "";
  let email = "";
  // Check if the identifier contains an '@' symbol to determine if it is an email
  if (identifier.value.includes("@")) {
    isEmail = true;
    email = identifier.value;
  } else {
    username = identifier.value;
  }
  // Simulating AJAX call with a timeout
  // setTimeout(() => {
  //   // Perform login logic here
  //   // You can use the `isEmail`, `username`, `email`, and `password` values
  //   // After successful login, redirect to the user profile page with the user ID
  //   let userId = isEmail ? email : username;
  //   router.push({path:`/user/${userId}`, replace: true} );
  // }, 1000);
  let userId = isEmail ? email : username;
  router.push(`/user/${userId}`);
  // Reset the form after login
  // identifier.value = '';
  // password.value = '';
};
</script>

<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-earth" />
      globo<b>list</b>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn text="" @click="toggleDrawer" icon="mdi-account-circle"> </v-btn>
  </v-app-bar>

  <v-navigation-drawer temporary location="right" v-model="showDrawer">
    <!-- <template v-slot:prepend>
        <VListItem
          lines="two"
          append-avatar="https://randomuser.me/api/portraits/women/81.jpg"
          title="Jane Smith"
          subtitle="Logged in"
        ></VListItem>
      </template>

      <VDivider></VDivider>

      <VList density="compact" nav>
        <VListItem append-icon="mdi-home-city" title="Home" value="home"></VListItem>
        <VListItem append-icon="mdi-account" title="My Account" value="account"></VListItem>
        <VListItem append-icon="mdi-account-group-outline" title="Users" value="users"></VListItem>
      </VList> -->
    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-item>
        <v-form @submit="login">
          <v-text-field
            variant="solo-inverted"
            v-model="identifier"
            label="Username or Email"
          ></v-text-field>
          <v-text-field
            variant="solo-inverted"
            v-model="password"
            label="Password"
            type="password"
          ></v-text-field>
          <v-btn rounded type="submit" color="secondary" >Register</v-btn>
          <v-btn rounded type="submit" color="primary">Login</v-btn>
        </v-form>
      </v-card-item>
    </v-card>
  </v-navigation-drawer>
  <v-dialog v-model="showLoginDialog"> </v-dialog>
</template>
