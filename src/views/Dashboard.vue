<template>
  <div class="dashboard">
    <p v-if="showUserName()">You are logged in as {{ showUserName() }}</p>
    <button v-on:click="$msal.signOut()" class="logout-button">Logout</button>

    <div class="user-data">
      <div class="col label">Email:</div>
      <div class="col value" v-if="showUserEmail()">{{ showUserEmail() }}</div>
    </div>

    <div class="user-data">
      <div class="col label">Id:</div>
      <div class="col value" v-if="showUserId()">{{ showUserId() }}</div>
    </div>

  </div>
</template>


<script lang="ts">
import { Component } from 'vue-property-decorator';
import Vue from 'vue';

@Component({

})
export default class Dashboard extends Vue {

  mounted() {
    console.log('Dashboard mounted!!');
  }

  showUserName(){
    return this.$authService.user.displayName;
  }

  showUserEmail(){
    return this.$authService.user.mail;
  }

  showUserId(){
    return this.$authService.user.id;
  }

}
</script>

<style scoped>
.user-data {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top:1rem;
}
.user-data:first-child {
  margin-top:0;
}
.user-data > .label {
  padding-right:1rem;
}
.user-data > .value {

}
</style>
