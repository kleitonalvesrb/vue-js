<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="loading">
      <h1>Carregando</h1>
    </div>
    <div v-else>
      <h1>Carregou {{ users.length }} usuarios</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.fullName }} - {{ user.email }}
          <img :src="user.avatar" :alt="user.fullName">
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import User from "@/models/User";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { UserApi } from "@/api/UsersApi";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  users: User[] = [];
  loading = true;
  async mounted(): Promise<void> {
    this.users = await UserApi.getAllUsers();
    this.loading = false;
    console.log(this.users);
    console.log("entrou aqui");
  }
}
</script>
