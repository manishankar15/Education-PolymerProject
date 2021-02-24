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



class AllCourse extends PolymerElement {
    static get template() {
            return html `

        <!---css--->
      <style is="custom-style">
       
       

        




/*main display*/


.label{
	text-align: center;
	font-size: 2.5em;
	font-family: 'Alegreya SC', serif;
	color: black;
}
.course-items{
	display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

/*individual item containers*/
.about-item{
	margin: 0;
	padding: 20px;
}
.about-item-title {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    color: black;
	font-family: 'Kulim Park', sans-serif;
    margin-bottom: 15px;
}
.box{
	height: 100px;
	width: 100px;
}
.shop-item-image{
	height: 200px;
	width: 200px;
    
    
}
.about-item-details {
    display: flex;
    align-items: center;
    padding: 5px;
  }
/*buttons*/
.btn {
    text-align: center;
    font-size:15px;
   
	color: #fff;

    background-color: #24a0ed ; 
    border: none;
    border-radius: .3em;
    font-weight: bold;
    width:150px;
}
</style>

<!---iron image css-->
<custom-style>
  <style is="custom-style">
    .shop-item-image {
      
       
      
    }
  </style>
</custom-style>
      
      <!---for page location during linking of page-->
      <app-location route="{{route}}"></app-location>

      <!---heaading--->
      <div class="main-display">
      
      <h1 class="label">Courses we offer!!</h1>

      <!----individual course java---->
      <div class="course-items">
          <div class="about-item">
              <span class="about-item-title"><u>Java</u></span>
              <div class="box">

              <!--iron image for adding image--->
              <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/java.png"></iron-image>
   
              </div>
              <br><br><br><br><br>
              
              <!---paper button is for adding a button--->    
              <paper-button raised class="btn" on-click="handleClick"><b>View Details</b></paper-button>
              
          </div>


          <!----individual course javascript---->
          <div class="about-item">
              <span class="about-item-title"><u>JavaScript</u></span>
              <div class="box">
                 <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/javascript.png"></iron-image>
              </div><br><br><br><br><br>
              <div class="about-item-details">
                <!---paper button is for adding a button---> 
              <paper-button raised class="btn" on-click="handleClick2"><b>View Details</b></paper-button>
              </div>
          </div>


          <!----individual course html---->
          <div class="about-item">
              <span class="about-item-title"><u>HTML</u></span>
              <div class="box">
                  <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/html.png"></iron-image>
              </div><br><br><br><br><br>
              <div class="about-item-details">
               <!---paper button is for adding a button--->  
              <paper-button raised class="btn" on-click="handleClick3"><b>View Details</b></paper-button>
              </div>
          </div>
      </div>
      


      <!----individual course css---->
      <div class="course-items">
          <div class="about-item">
              <span class="about-item-title"><u>CSS</u></span>
              <div class="box">
                  <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/css.png"></iron-image>
              </div><br><br><br><br><br>
              <div class="about-item-details">
               <!---paper button is for adding a button--->   
              <paper-button raised class="btn" on-click="handleClick4"><b>View Details</b></paper-button>
              </div>
          </div>

          <!----individual course angular---->
          <div class="about-item">
              <span class="about-item-title"><u>Angular</u></span>
              <div class="box">
                  <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/angular6.jpg"></iron-image>
              </div><br><br><br><br><br>
             
              <!---paper button is for adding a button--->    
              <paper-button raised class="btn" on-click="handleClick5"><b>View Details</b></paper-button>
              
          </div>


          <!----individual course node js---->
          <div class="about-item">
              <span class="about-item-title"><u>Node JS</u></span>
              <div class="box">
                  <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/node1.jpeg"></iron-image>
              </div><br><br><br><br><br>
              <div class="about-item-details">
               <!---paper button is for adding a button---> 
              <paper-button raised class="btn" on-click="handleClick6"><b>View Details</b></paper-button>
              </div>
          </div>
      </div>
      
  </div>
    `;

        }
        /**for route path of the linking page */
    handleClick() {
        this.set('route.path', '/java');
    }



    handleClick2() {
        this.set('route.path', '/javascript');
    }

    handleClick3() {
        this.set('route.path', '/html');
    }

    handleClick4() {
        this.set('route.path', '/css');
    }

    handleClick5() {
        this.set('route.path', '/angular');
    }

    handleClick6() {
        this.set('route.path', '/node');
    }

}

window.customElements.define('all-course', AllCourse);