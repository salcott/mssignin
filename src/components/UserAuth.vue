<template>
  <div class="userAuth">
    <h2>Login</h2>
    <div class="mssignin-wrapper">
      <button class="mssignin-button" v-on:click="msSignIn()">Sign-In with Microsoft</button>
    </div>
    <div class="input_wrapper">
      <label>
        <span>Email:</span>
        <input type="text" placeholder="" v-model="email"  />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" placeholder="" v-model="password" />
      </label>
      <button class="sign-in-button" v-on:click="signIn()">Sign-In</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import axios from 'axios';
// import msal from 'vue-msal';
import Vue from 'vue';

@Component({
  data(){
    return {
      email: '',
      password: '',
      serverResponse: {}
    }
  }
})
export default class UserAuth extends Vue {
  // @Prop() private msg!: string;
  private email!: string;
  private password!: string;
  private myMSALObj!: any;
  private $msal!: any;

  mounted() {
    this.email = 'email@email.com';
    this.password = 'password';

    console.log('userAuth mounted:');
    // console.log(Vue.$authService);
  }

  signIn() {
    console.log('signIn()');
    console.log('this.email:', this.email);
    console.log('this.password', this.password);

    axios.post('http://jsonplaceholder.typicode.com/posts', {
      body: {
        'email': this.email,
        'password': this.password
      }
    })
    .then(response => {
      console.log('server response:');
      console.log(response);
    })
    .catch(e => {
      // this.errors.push(e)
      console.log('errors:');
      console.log(e);
    })
  }

  msSignIn(){
    console.log('msSignIn()');
    // if(!this.$msal.isAuthenticated()){
    //    console.log('This user is NOT authenticated!');
    //    this.$msal.signIn();
    // }
    // if(!this.$authService.isAuthenticated()){
    //   this.$authService.login();
    // }
    console.log(this.$authService.user);
    // this.$authService.login();
    this.$msal.signIn();
    console.log('is authenticated: ', this.$msal.isAuthenticated());
    // console.log(Vue.$authService.isAuthenticated());
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.userAuth > h2 {
  font-weight: normal;
  text-align: left;
  width: 18rem;
  margin: 0 auto 2rem;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #26536b;
  font-size: 1.3rem;
}
.userAuth {
  margin-top:6rem;
}
.input_wrapper {
  display:flex;
  flex-direction: column;
  min-height: 6rem;
  justify-content: space-around;
  align-items: flex-start;
  width:15rem;
  margin: 0 auto;
}
.input_wrapper > button {
  margin: 0rem auto;
  display:block;

}

label:nth-child(2) {
  padding-bottom:2rem;
}

label > span {
  display:inline-block;
  min-width:5rem;
  text-align:left;
  font-size:0.9rem;
}
.mssignin-wrapper {
  border-bottom: 1px solid #a7a7a7;
  width:12rem;
  margin: 0 auto 3rem;
  position: relative;
}
.mssignin-wrapper::after {
  content: 'OR';
  display:inline-block;
  position: absolute;
  bottom:-0.7rem;
  width:4rem;
  margin-left: -2rem;
  left:50%;
  background-color:#fff;
  border:1px solid #a7a7a7;
  border-radius:5px;
  font-size:0.8rem;
  font-weight:bold;
  padding-top:0.1rem;
  color:#666;
}
.mssignin-button {
  margin-bottom:2rem;
}
.sign-in-button {
  background-color:#ff882c;
  color:#fff;
  padding: 0.5rem 1rem;
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,.2);
  border-radius: 5px;
  margin-top:3rem;
  font-size:0.8rem;
  line-height:1;
}
</style>
