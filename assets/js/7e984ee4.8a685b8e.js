"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3713],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=o.createContext({}),c=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return o.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(y,i(i({ref:e},s),{},{components:n})):o.createElement(y,i({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20793:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>u});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i=["components"],l={id:"CytonLanding",title:"Cyton Board"},p=void 0,c={unversionedId:"Cyton/CytonLanding",id:"Cyton/CytonLanding",isDocsHomePage:!1,title:"Cyton Board",description:"Buy it!",source:"@site/docs/Cyton/01-CytonBoard.md",sourceDirName:"Cyton",slug:"/Cyton/CytonLanding",permalink:"/Cyton/CytonLanding",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/websitev2/docs/Cyton/01-CytonBoard.md",version:"current",lastUpdatedBy:"Richard Waltman",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:1,frontMatter:{id:"CytonLanding",title:"Cyton Board"},sidebar:"docs",previous:{title:"Welcome to the OpenBCI Community",permalink:"/GettingStarted/Community/Community"},next:{title:"Cyton Specs",permalink:"/Cyton/CytonSpecs"}},s=[{value:"Buy it!",id:"buy-it",children:[]}],d={toc:s};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"buy-it"},(0,a.kt)("a",{parentName:"h3",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Buy it!")),(0,a.kt)("p",null,"This set of tutorials will show you everything you need to know about the OpenBCI 8-channel Cyton Biosensing Board."),(0,a.kt)("a",{href:"https://imgbb.com/"},(0,a.kt)("img",{src:"https://i.ibb.co/cNj9pyf/Cyton.jpg",alt:"Cyton",border:0})),(0,a.kt)("p",null,"Included will be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Cyton/CytonSpecs"},(0,a.kt)("strong",{parentName:"a"},"Spec Overview"))," \u2014 The specs of the board and dongle, including explanations of the components and circuit schematics."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Cyton/CytonSpecs#openbci-daisy-module"},(0,a.kt)("strong",{parentName:"a"},"OpenBCI Daisy Module"))," \u2014 The specs of the Daisy daughter card to the Cyton, which expands the number of sensor channels."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Cyton/CytonDataFormat"},(0,a.kt)("strong",{parentName:"a"},"Data Sheet"))," \u2014 A rundown of the defined data format for the Cyton."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Cyton/CytonSDK"},(0,a.kt)("strong",{parentName:"a"},"OpenBCI Cyton SDK"))," \u2014 Goes over the byte string command protocol that is compatible for use with the OpenBCI Cyton Board."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Cyton/CytonProgram"},(0,a.kt)("strong",{parentName:"a"},"OpenBCI Board Programming Tutorial"))," \u2014 Tutorial explaining how to reprogram the OpenBCI Cyton Board using the OpenBCI Dongle and your PC, allowing you to update firmware or hope to customize the board. ",(0,a.kt)("em",{parentName:"li"},"Not needed if you wish to use the board out-of-box")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Cyton/CytonRadios"},(0,a.kt)("strong",{parentName:"a"},"OpenBCI Radio Programming Tutorial"))," \u2014 Learn how to manually program the Radios on the Cyton and Dongle. ",(0,a.kt)("em",{parentName:"li"},"Not needed if you wish to use the board out-of-box")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Cyton/CytonExternal"},(0,a.kt)("strong",{parentName:"a"},"External Trigger on OpenBCI Cyton Board"))," \u2014 Shows how to add an external trigger to the OpenBCI data stream to allow for precise timing between external events and the data stream."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Cyton/CytonSDCard"},(0,a.kt)("strong",{parentName:"a"},"Using SD Card with OpenBCI"))," \u2014 Covers how to add an SD card for local storage to OpenBCI.")))}u.isMDXComponent=!0}}]);