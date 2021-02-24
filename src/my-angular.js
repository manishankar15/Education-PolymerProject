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
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-image/iron-image.js';



class MyAngular extends PolymerElement {
    static get template() {
        return html `
      <style include="shared-styles">
       <style include="shared-styles">
        
     
        .single-product{
            margin-top: 80px;
        
        }
        .single-product .col-2 img{
            padding:10px;
            position: relative;
             left:50px;
            
        }
        .single-product .col-2{
            padding:10px;
            position: relative;
             right:50px;
             top:20px;
            
        }
        
        .single-product h3{
            margin: 20px 0;
            font-size: 22px;
            font-weight: bold;
        
        }
        
        .content-title{
            margin-left:50px;
        }
         
        
      </style>

<custom-style>
  <style is="custom-style">
    .img {
      width: 350px;
      height: 350px;
      
    
    }
  </style>
</custom-style>

      <center>
      <h2><u>Course-ANGULAR</u></h2>
      <div class="small-container single-product">
      <div class="row">
          <div class="col-2">
        
          <iron-image sizing="contain" class="img" alt="The Polymer logo." src="../images/angular6.jpg"></iron-image>
            
            </div>
              <div class="col-2">
                 
                  <h3 style="text-align:center;"><u>Course Details & Timings</u></h3>
                  
                  <div class="content-title">
                  <p>
                  <h3>Angular (commonly referred to as "Angular 2+" or "Angular v2 and above") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.<br><br>This course is taken up by <u>Mr Raju</u>.He has an experience of 15years in IT Industry and the duration of the course will be 2hours and the timings will be from 2PM-4PM </h3>

                  </p>
                  </div>

              </div>

          </div>

      </div>
      </center>
      
    `;

    }



}

window.customElements.define('my-angular', MyAngular);