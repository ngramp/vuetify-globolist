<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";

  type User = {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    age: number;
  }

  const user = ref<User>({
    id: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    age: 0,
  });
  const route = useRoute();

  // Simulating data fetch with a timeout
  onMounted(() => {
    // Sanitize the user ID from route.params
    const userId = Array.isArray(route.params.id)
      ? route.params.id[0]
      : route.params.id; // Simulated user data
    // Assign the fetched user data
    user.value = {
      id: userId,
      username: "john_doe",
      email: "john.doe@example.com",
      firstName: "John",
      lastName: "Doe",
      age: 30,
    };
  });
</script>

<template>
  <VContainer class="fill-height">
    <VResponsive class="d-flex align-center text-center fill-height">
      <VCard>
        <VCardTitle>User Profile</VCardTitle>
        <VCardText>
          <VList>
            <VListItem>
              <VListItemTitle>Username:</VListItemTitle>
              <VListItemSubtitle>{{ user.username }}</VListItemSubtitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>Email:</VListItemTitle>
              <VListItemSubtitle>{{ user.email }}</VListItemSubtitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>First Name:</VListItemTitle>
              <VListItemSubtitle>{{ user.firstName }}</VListItemSubtitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>Last Name:</VListItemTitle>
              <VListItemSubtitle>{{ user.lastName }}</VListItemSubtitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>Age:</VListItemTitle>
              <VListItemSubtitle>{{ user.age }}</VListItemSubtitle>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VResponsive>
  </VContainer>
</template>
