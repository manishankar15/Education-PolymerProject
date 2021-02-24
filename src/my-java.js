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



class MyJava extends PolymerElement {
    static get template() {
        return html `

        <!--css-->
      <style include="shared-styles">
        <style include="shared-styles">
        
        /**single course */
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
        
        /**title */
        .content-title{
            margin-left:50px;
        }
     
        
      </style>

<!----css for iron image---->
<custom-style>
  <style is="custom-style">
    .img {
      width: 350px;
      height: 350px;
    
    }
  </style>
</custom-style>
     
      
      <center>
      <h2><u>Course-JAVA</u></h2>
      <div class="small-container single-product">
      <div class="row">
          <div class="col-2">
              
              
<!---iron image is for adding image--->
<iron-image sizing="contain" class="img" alt="The Polymer logo." src="../images/java.png"></iron-image>

            
            </div>

            <!---course details and timing--->
              <div class="col-2">
                 
                  <h3 style="text-align:center;"><u>Course Details & Timings</u></h3>
                  
                  <div class="content-title">
                  <p>
                  <h3>JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

                  Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it.<br><br>This course is taken up by <u>Mr Rajesh</u>.He has an experience of 12years in IT Industry and the duration of the course will be 2hours and the timings will be from 9AM-11AM</h3>

                  </p>
                  </div>

              </div>

          </div>

      </div>
      </center>
      
    `;

    }



}

window.customElements.define('my-java', MyJava);