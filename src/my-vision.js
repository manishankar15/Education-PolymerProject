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



class MyVision extends PolymerElement {
    static get template() {
        return html `

        <!---css--->
      <style include="shared-styles">
            /**image and content */
           .about{
            background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2),rgba(0,0,0,0.2),rgba(0,0,0,0.2));
            background-size: cover;
            margin-left: -4%;
            margin-bottom: 2%;
        } 
        .about h2{
             font-family: Arial Black;
             text-align: center;
             
             color: white;
             font-weight: bold;
            
        }
        
        
        .about h4{
             font-family: Times New Roman;
             text-align: center;
             font-size: 25px;
             color: white;
        }
        
        /**content */
        .about1 h1{
            
             font-family: Times New Roman;
             text-align: center;
             font-weight: bold;
             font-size: 45px;
             
             color: black;
             text-align: center;
        }
        
             
        .about1 h4{
        
            margin-left: 4%;
        }
        
        /**button */
        .container {
            position: absolute;
            font-weight: bold;
             color: white;
            background-color: rgb(255, 81, 0);
            text-align: center;
            text-transform: uppercase;
            top: 18%;
            right: 44%;
            height:35px;
            width:130px;
            font-size:90%;
            border-radius:8px;
           
        }
        
        
        
      </style>

     
      <!--first image--->
      <div class="about">
      
      
          <a><img  src="../images/new4.JPG"   /></a><p style="margin-bottom:-23%;">
          
          <br>
          <br>
          <!--papper button is to add button-->
          <paper-button raised class="container" on-click="handleClick"><b>OUR MISSION</b></paper-button>
                
               </h2>
               <h2>Helping students achieve their best</h2><br>
  
              <h4> 
                  We empower students to accomplish their goals by providing an outstanding curriculum<br> and the highest-quality instructors in the industry. </h4>
          </p> 
          </div>
          <br><br><br><br><br><br>
  
  
          <!---content---->
          <div class="about1">
          <h1> Students do their best when they have the <br> best teachers</h1>
          <h4 style="text-align: center;">We prepare students to understand and contribute success in a rapidly changing society, thus making the world a better place. We will ensure that our students develop the skills and the competencies essential for success and leadership in the emerging creative economy. We will also lead in generating practical and theoretical knowledge that enables people to better understand our world and improve conditions for local and global communities.</h4>
         </div>
  
          
    `;

    }



}

window.customElements.define('my-vision', MyVision);