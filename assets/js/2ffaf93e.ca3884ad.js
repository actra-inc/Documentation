"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5687],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),d=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=d(n),g=i,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||a;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91011:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>c});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],l={id:"GettingStartedLanding",title:"Getting Started"},s=void 0,d={unversionedId:"GettingStarted/GettingStartedLanding",id:"GettingStarted/GettingStartedLanding",isDocsHomePage:!1,title:"Getting Started",description:"This directory will show you everything you need to know to get started with OpenBCI.",source:"@site/docs/GettingStarted/00-GettingStartedLanding.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/GettingStartedLanding",permalink:"/GettingStarted/GettingStartedLanding",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/websitev2/docs/GettingStarted/00-GettingStartedLanding.md",version:"current",lastUpdatedBy:"Richard Waltman",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:0,frontMatter:{id:"GettingStartedLanding",title:"Getting Started"},sidebar:"docs",previous:{title:"Welcome to the OpenBCI Community",permalink:"/"},next:{title:"Cyton Getting Started Guide",permalink:"/GettingStarted/Boards/CytonGS"}},u=[{value:"Boards",id:"boards",children:[]},{value:"Biosensing Setups",id:"biosensing-setups",children:[]},{value:"Community",id:"community",children:[]}],p={toc:u};function c(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This directory will show you everything you need to know to get started with OpenBCI."),(0,a.kt)("h2",{id:"boards"},"Boards"),(0,a.kt)("p",null,"This section will run through the setup of each of our boards, and how to begin using them. Pages in this section include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/GettingStarted/Boards/CytonGS"},"Cyton Getting Started")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/GettingStarted/Boards/GanglionGS"},"Ganglion Getting Started")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/GettingStarted/Boards/WiFiGS"},"Wifi Getting Started Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/GettingStarted/Boards/DaisyGS"},"Daisy Getting Started Guide"))),(0,a.kt)("h2",{id:"biosensing-setups"},"Biosensing Setups"),(0,a.kt)("p",null,"This section details the electrode setups for the various types of biosensing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/GettingStarted/Biosensing-Setups/EEGSetup"},"EEG Setup")," \u2014 Details how to wire electrodes to gather signals from the brain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/GettingStarted/Biosensing-Setups/EMGSetup"},"EMG Setup")," \u2014 Details how to wire electrodes to gather signals from different muscle groups."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/GettingStarted/Biosensing-Setups/ECGSetup"},"ECG Setup")," \u2014 Details how to wire electrodes to gather signals from different muscle groups.")),(0,a.kt)("h2",{id:"community"},"Community"),(0,a.kt)("p",null,"This section contains the tutorial about getting started as a member of the OpenBCI Community:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/GettingStarted/Community/Community"},"Community"))))}c.isMDXComponent=!0}}]);