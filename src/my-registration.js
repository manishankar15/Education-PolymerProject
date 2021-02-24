/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/app-route/app-route.js';
import '@polymer/gold-phone-input/gold-phone-input.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-radio-button/paper-radio-button.js';

class MyRegistration extends PolymerElement {

    static get template() {
        // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
        return html `
      <style include="shared-styles">

      /**css for signup button */
      .signup{
        background:green;
        color:white;
        width:180px;
        border-radius:15px;
    }

    /**css for signin button */
    .signin{
        background:green;
        color:white;
        width:180px;
        border-radius:15px;
    }
    .signup:hover {
        background-color: skyblue;
      }
      .signin:hover {
        background-color: skyblue;
      }
      /**css for card */
      .card{
          
          width:50%;
          height:50%;
          padding:50px;
       font-size:10px;
       border-radius:20px;
       text-align:center;
       margin-top:5%;
       background:white;
        }
     
    
      
      </style>

      <!----app location---->
     <app-location route="{{route}}"></app-location>
      
     
        
       
     <center>
      
     <div class="card">
     <h1>REGISTRATION</h1>
     <iron-form id='myForm'>
      <form is = "iron-form"   id = "form" action="/form/handler">

      <!---paper input---->
      <paper-input required auto-validate error-message="please fill FirstName!"   label="FirstName" ></paper-input>
      
      <paper-input required auto-validate error-message="please fill LastName!"   label="LastName" ></paper-input>
      


      <paper-input type="email" required auto-validate error-message="please fill email!" label="Email-Id" ></paper-input>

       <!--gold phone input foe phone number--->
      <gold-phone-input required auto-validate error-message="please fill phone number!" label="phone number" country-code="91" phone-number-pattern="XXX-XXXX-XXX"
       maxlength="12">
  </gold-phone-input><br><br>
  <h2>Date of Birth:
    <iron-input><input placeholder="type-date" required auto-validate error-message="please fill phone number!" type="date"></iron-input></h2>
    
         <!--paper dropdown button--->
       <paper-dropdown-menu label = " Degree">
            <paper-listbox slot="dropdown-content">
              <paper-item >B.TECH</paper-item>
              <paper-item>MBA</paper-item>
              <paper-item>DEGREE</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
           <!--paper dropdown button--->
          <paper-dropdown-menu label = "Branch">
          <paper-listbox slot="dropdown-content">
            <paper-item >EEE</paper-item>
            <paper-item>CSE</paper-item>
            <paper-item>IT</paper-item>
            <paper-item>MEC</paper-item>
            <paper-item>CIVIL</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <!--paper dropdown button--->
        <paper-dropdown-menu label = "Year Of Passing">
        <paper-listbox slot="dropdown-content">
          <paper-item >2021</paper-item>
          <paper-item>2020</paper-item>
          <paper-item>2019</paper-item>
          <paper-item>2018</paper-item>
        </paper-listbox>
      </paper-dropdown-menu>  <br><br>

      <!--paper radio button for grnder--->
      <h2>Gender:</h2><br>
      <paper-radio-button><h2>Male</h2></paper-radio-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <paper-radio-button><h2>Female</h2></paper-radio-button><br><br>

      <paper-input type="place" required auto-validate error-message="please fill city!" label="city" ></paper-input>
      <paper-input type="state" required auto-validate error-message="please fill state!" label="state" ></paper-input>
      <paper-input type="country" required auto-validate error-message="please fill country!" label="country" ></paper-input>
      <center>
        <br><br>
        <!--paper button for signin--->
      <paper-button raised class="signup" on-click="handleClick"><b>SignUp</b></paper-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      <br>
      <br>
      <br>

      <!--paper button for signin--->
      Already have an account?&nbsp;&nbsp;&nbsp;&nbsp;
      <paper-button raised class="signin" on-click="handleClick2"><b>SignIn</b></paper-button>
</center>

      </form>
      </iron-form>
      <div>
        </div>
      </center>
    `;
    }
    handleClick2() {
        document.getElementById('form').submit();
    }

}

window.customElements.define('my-registration', MyRegistration);