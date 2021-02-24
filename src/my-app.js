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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-button/paper-button.js';
import './my-icons.js';
import '@polymer/iron-media-query/iron-media-query.js';



// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
    static get template() {
        return html `
        
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: white;

          display: block;
        }


        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
          font-weight:bold;

          
        
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        
        }
        a{
          text-decoration:none;
          font-size:17px; 
          font-weight:bold;
          color:white;
        }

        
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        
       
        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
          <!----app-toobar--->
            <app-toolbar>
              <!---<paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>--->
              <div main-title="">UniqueHire Education</div>
              <iron-selector selected="[[page]]" attr-for-selected="name" class="button" role="navigation">
            
            <a name="login"  href="[[rootPath]]login"><paper-button >Login</paper-button></a>
            <a name="home" href="[[rootPath]]home"><paper-button >Home</paper-button></a>
            <a name="vision" href="[[rootPath]]vision"><paper-button >Vision</paper-button></a>
            <a name="courses" href="[[rootPath]]courses"><paper-button >Courses</paper-button></a>
            <a name="dashboard" href="[[rootPath]]dashboard"><paper-button >Dashboard</paper-button></a>
            <a name="registration" href="[[rootPath]]registration"><paper-button >Registration</paper-button></a>
            <a name="logout" href="[[rootPath]]login"><paper-button >logout</paper-button></a>
            
          </iron-selector>
            </app-toolbar>
          </app-header>

          <!----iron pages--->
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            
            <my-login name="login"></my-login>
            
            
            <my-home name="home"></my-home>
            <my-vision name="vision"></my-vision>
            <all-course name="courses"></all-course>
            <my-java name="java"></my-java>
            <my-javascript name="javascript"></my-javascript>
            <my-html name="html"></my-html>
            <my-css name="css"></my-css>
            <my-angular name="angular"></my-angular>
            <my-node name="node"></my-node>
            <my-dashboard name="dashboard"></my-dashboard>
            <my-registration name="registration"></my-registration>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged'
            },
            routeData: Object,
            subroute: Object
        };
    }

    static get observers() {
        return [
            '_routePageChanged(routeData.page)'
        ];
    }

    _routePageChanged(page) {
        // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
        if (!page) {
            this.page = 'login';
        } else if (['login', 'home', 'vision', 'course', 'courses', 'java', 'javascript', 'html', 'css', 'angular', 'node', 'dashboard', 'registration'].indexOf(page) !== -1) {
            this.page = page;
        } else {
            this.page = 'view404';
        }

        // Close a non-persistent drawer when the page & route are changed.
        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }
    }

    _pageChanged(page) {
        // Import the page component on demand.
        //
        // Note: `polymer build` doesn't like string concatenation in the import
        // statement, so break it up.
        switch (page) {

            case 'login':
                import ('./my-login.js');
                break;


            case 'home':
                import ('./my-home.js');
                break;
            case 'vision':
                import ('./my-vision.js');
                break;

            case 'courses':
                import ('./all-course.js');
                break;
            case 'java':
                import ('./my-java.js');
                break;
            case 'javascript':
                import ('./my-javascript.js');
                break;
            case 'html':
                import ('./my-html.js');
                break;
            case 'css':
                import ('./my-css.js');
                break;
            case 'angular':
                import ('./my-angular.js');
                break;
            case 'node':
                import ('./my-node.js');
                break;
            case 'dashboard':
                import ('./my-dashboard.js');
                break;

            case 'registration':
                import ('./my-registration.js');
                break;
            case 'view404':
                import ('./my-view404.js');
                break;
        }
    }
}

window.customElements.define('my-app', MyApp);