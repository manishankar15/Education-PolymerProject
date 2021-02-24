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
import '@polymer/paper-card/paper-card.js';



class MyDashboard extends PolymerElement {
    static get template() {
        return html `
      <style include="shared-styles">
       
    
/*--total students---*/
 .card-text1 {
	color:blue;
	border-radius: 50px;
	text-align:center;
	font-size:4.5em;
  height:100px;
  width:140px;
 }	

 div{
   display:flex;   /**The flex property sets the flexible length on flexible items. */
   align-items:initial;/**The align-items property specifies the default alignment for items inside the flexible container. */
  
    flex-wrap: wrap;/**The flex-wrap property specifies whether the flexible items should wrap or not. */
    
 }
 
  /*--students opted java---*/ 
 .card-text2 {
	color:green;
	border-radius: 50px;
	text-align:center;
	font-size:4.5em;
  height:100px;
  width:100px;
 }	
 	

  /*--students opted javascript---*/ 
 .card-text3 {
	color: pink;
	border-radius: 50px;
	text-align:center;
	font-size:5em;
  height:100px;
  width:100px;
 }	
 

/*--students opted html---*/ 
.card-text4 {
	color: yellow;
	border-radius: 50px;
	text-align:center;
	font-size:4.5em;
  height:100px;
  width:100px;
 }	
 
 
 /*--students opted css---*/ 
 .card-text5{
	color: orange;
	border-radius: 50px;
	text-align:center;
	font-size:5em;
  height:100px;
  width:100px;
 
 } 
 
 /*--students opted angular---*/ 
 .card-text6 {
	color: lightblue;
	border-radius: 50px;
	text-align:center;
	font-size:5em;
  height:100px;
  width:120px; 
 	
 } 


 /*--students opted nodejs---*/  
.card-text7 {
	color: purple;
	border-radius: 50px;
	text-align:center;
	font-size:5em;
  height:100px;
  width:100px;
 
 } 
 

  
  
  
  /*--faculty details---*/ 
  #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  color: white;
}
.card-content{
  height:300px;
  width:300px;
}

 </style>

      <app-location route="{{route}}"></app-location>

    
      
      <div class="container-fluid"> 
  <div class="row">
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">total number of students in class</h3>
          <p class="card-text1" >100</p>
        </div>
      </div>
    </div>


    <!----students opted java---->
        <div class="col-sm-4">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">Number of students who opted Java</h3>
          <p class="card-text2" >55</p>
        </div>
      </div>
    </div>

    <!----students opted javascript---->
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">Number of students who opted JavaScript</h3>
          <p class="card-text3" >45</p>
        </div>
      </div>
    </div>
	<br>

  <!----students opted html---->
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">Number of students who opted HTML</h3>
          <p class="card-text4" >40</p>
        </div>
      </div>
    </div>

<!----students opted css---->
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">Number of students who opted CSS</h3>
          <p class="card-text5" >40</p>
        </div>
      </div>
    </div>

    <!----students opted angular---->
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">Number of students who opted Angular</h3>
          <p class="card-text6">36</p>
        </div>
      </div>
    </div>

    <!----students opted nodejs---->
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body" id="Row1">
          <h3 class="card-title">Number of students who opted NodeJS</h3>
          <p class="card-text7" >33</p>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br><br><br>

   <!----staff details---->
	<table id="customers">
       <thead bgcolor="lightblue" class="thead"><!---use to group header content in a html table-->
          <tr>
            <th scope="col">Faculty Name</th><!---The scope attribute specifies whether a header cell is a header for a column, row, or group of columns or rows.   ---->
            <th scope="col">Course</th>
            <th scope="col">No.of working hours</th>
          </tr>
        </thead>
	<tbody>	
  <tr>
			<td>Manishankar</td>
            <td>Java</td>
            <td>12hours</td>
  </tr>
  <tr>
			<td>Rajesh</td>
            <td>JavaScript</td>
            <td>10hours</td>
  </tr>
  <tr>
            <td>Raju</td>
            <td>NodeJS</td>
            <td>14hours</td>
  </tr>
  <tr>
			<td>Manishankar</td>
            <td>HTML</td>
            <td>12hours</td>
  </tr>
  <tr>
			<td>Rajesh</td>
            <td>CSS</td>
            <td>10hours</td>
  </tr>
  <tr>
			 <td>Raju</td>
            <td>Angular</td>
            <td>14hours</td>
  </tr>

  </tbody>
</table>

  </div>
</div>


    `;

    }



}

window.customElements.define('my-dashboard', MyDashboard);