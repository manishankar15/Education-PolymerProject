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



class MyHome extends PolymerElement {
    static get template() {
        return html `

        <!----css---->
      <style include="shared-styles">
       
       
        
        .log{
          background:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4),rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(../images/img1.jpg)no-repeat;
    
          background-size: cover;
          padding:17%;
          border-radius:10px;

        
        }

        /**button */

        .btn{
          position: absolute;
    top: 68%;
    right: 42%;
    
    border-radius: 15px;
    color: white;
    background-color: #3494E6;
    text-transform: uppercase;
    padding: 10px;
    font-weight: bold;
}
         
/*  content   */
.writer h3{
     font-family:  sans-serif;
     
     text-transform: uppercase;
     color: white;
     
     padding-top: 3%;
    
    
     text-align: center;
}

/**button hover */
.btn:hover{
  background: green;
}
         
        
      </style>

    <!---for page location during linking of page-->
   <app-location route="{{route}}"></app-location>
      <div class="log">
     
      
      <!--iron image for adding image--->
      <iron-image sizing="contain" class="img" alt="The Polymer logo." src="../images/img1.jpg"></iron-image>

      
  <div class="writer">
        <h3> "We Ensure better education <br>for a better world"</h3> 

       <!---paper button is for adding a button--->
        <paper-button raised class="btn" on-click="handleClick"><b>SEE HOW WE ARE DIFFERENT</b></paper-button>
            
          
     
      </div>
      
       
      </div>
    `;

    }

    /**for route path of the linking page */
    handleClick() {
        this.set('route.path', '/vision');
    }

}

window.customElements.define('my-home', MyHome);