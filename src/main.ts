import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import msal from 'vue-msal';
import AuthService from './services/auth.service';
import GraphService from './services/graph.service';

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$authService = new AuthService();

new Vue({
  // el: '#app',
  router,
  render: h => h(App),
  data () {
    return {
      user: {},
      userInfo: null,
      apiCallFailed: false,
      loginFailed: false,
      token: null,
      // authService: null,
      graphService: null
    }
  },
  created() {
    console.log('app created');
    // this.authService = new AuthService();
    this.graphService = new GraphService();
    // console.log('user auth: ', this.$msal.isAuthenticated());
    console.log(this.$authService);
    // setTimeout(() => {
    //     console.log(this.$authService);
    // }, 1000);
    // console.log('UserAgentApplication:', this.$msal.hasOwnProperty('UserAgentApplication') ? 'true' : 'false'));
    if(this.$msal.isAuthenticated()) {
      console.log('user is authenticated');
      // this.authService.logout();
      this.$msal.acquireToken()
      .then( (token)=> {
        console.log('token acquired!');
        console.log(token);
        this.token = token;
        const userData = this.determineUser();
        userData.then((user)=> {
          console.log('user is:');
          console.log(user['body']['displayName']);
          this.$authService.user = user['body'];
          if(this.$router.currentRoute.path != '/dashboard'){
            this.$router.push('/dashboard');
          }

          console.log('this.$authService.user:');
          console.log(this.$authService.user);
        })
      })
    }

  },
  methods: {
    callAPI() {
      this.apiCallFailed = false;
      this.$authService.getToken().then(
        (token: any) => {
          this.graphService.getUserInfo(token).then(
            data => {
              this.userInfo = data;
            },
            error => {
              console.error(error);
              this.apiCallFailed = true;
            }
          );
        },
        error => {
          console.error(error);
          this.apiCallFailed = true;
        }
      );
    },
    logout() {
      console.log('do logout!');
      this.$authService.logout();
    },
    async determineUser(){
      const userResult = await this.$msal.msGraph('/me');
      return userResult;
    },
    login() {
      this.loginFailed = false;
      this.$authService.login().then(
        (user: any) => {
          if (user) {
            this.user = user;
          } else {
            this.loginFailed = true;
          }
        },
        () => {
          this.loginFailed = true;
        }
      );
    }
  },
  mounted () {
    console.log('app mounted');
    // const msalScript = document.createElement('script')
    // msalScript.setAttribute('src', 'https://secure.aadcdn.microsoftonline-p.com/lib/1.0.0/js/msal.min.js')
    // document.head.appendChild(msalScript);
    // console.log('will start MS login');

    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => {
    //     this.info = response;
    //   })
  }
})
.$mount('#app')
