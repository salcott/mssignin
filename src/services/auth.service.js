// import * as Msal from 'msal';
// import * as Msal from 'vue-msal';
import msal from 'vue-msal';
import router from '../router';
import Vue from 'vue';

export default class AuthService {

  constructor() {
    console.log('AuthService constructor()');
    // let PROD_REDIRECT_URI = 'https://sunilbandla.github.io/vue-msal-sample/';
    // let redirectUri = window.location.origin;
    // if (window.location.hostname !== '127.0.0.1') {
    //   redirectUri = PROD_REDIRECT_URI;
    // }
    // const redirectUri = 'http://localhost:8080/';
    // this.applicationConfig = {
    //   clientID: '1723e7cd-e4ea-4759-a11f-aa64ec41c4d5',
    //   graphScopes: ['user.read']
    // };
    // this.app = new Msal.UserAgentApplication(
    //   this.applicationConfig.clientID,
    //   '',
    //   () => {
    //     // callback for login redirect
    //   },
    //   {
    //     redirectUri
    //   }
    // );

    this.applicationConfig = {
      clientID: '1723e7cd-e4ea-4759-a11f-aa64ec41c4d5',
      graphScopes: ['user.read']
    };

    Vue.use(msal, {
        auth: {
          clientId: this.applicationConfig.clientID,
          requireAuthOnInitialize: false,
          navigateToLoginRequestUrl: false,
          redirectUri: 'http://localhost:8080/',
          tokenRefreshUri: window.location.origin + '/auth.html',
          onAuthentication: function(ctx, error, response){
            console.log('MS Auth onAuthentication()');
            if(response){
              console.log(response);
            }else if(error){
              console.log('error:');
              console.log(error);
            }
          }
        },
        scopes: this.applicationConfig.graphScopes,
        graph: {
          onResponse: function(ctx, response){
            console.log('MS GRAPH RESPONSE');
            console.log(response);
          }
        }
    });

    this._user = {};
    console.log('end of auth.service. constructor');
    console.log(msal);
  }

  set user(data){
    console.log('SET USER');
    this._user = data;
  }

  get user(){
    return this._user;
  }

  isAuthenticated(){
    return this.$msal.isAuthenticated()
  }

  login() {
    console.log('login()');
    console.log(this.$msal);
    this.$msal.signIn();
  }

  logout() {
    console.log('logout()');
    this._user = {};
    this.$router.push('/');
    setTimeout(()=> {
      this.$msal.signOut();
    }, 500);
  }

  getToken() {
    return this.$msal.acquireToken(this.applicationConfig.graphScopes).then(
      accessToken => {
        return accessToken;
      },
      error => {
        // return this.$msal
        //   .acquireTokenPopup(this.applicationConfig.graphScopes)
        //   .then(
        //     accessToken => {
        //       return accessToken;
        //     },
        //     err => {
        //       console.error(err);
        //     }
        //   );
      }
    )
  }
}
