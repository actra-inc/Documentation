"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,g=h["".concat(s,".").concat(u)]||h[u]||p[u]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12067:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>h});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i=["components"],l={id:"ECGSetup",title:"Setting up for ECG"},s=void 0,c={unversionedId:"GettingStarted/Biosensing-Setups/ECGSetup",id:"GettingStarted/Biosensing-Setups/ECGSetup",isDocsHomePage:!1,title:"Setting up for ECG",description:"This document will show you how to read ECG data (electrical signals from  the heart) using OpenBCI hardware and GUI.",source:"@site/docs/GettingStarted/Biosensing-Setups/03-ECG-Setup.md",sourceDirName:"GettingStarted/Biosensing-Setups",slug:"/GettingStarted/Biosensing-Setups/ECGSetup",permalink:"/GettingStarted/Biosensing-Setups/ECGSetup",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/websitev2/docs/GettingStarted/Biosensing-Setups/03-ECG-Setup.md",version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:3,frontMatter:{id:"ECGSetup",title:"Setting up for ECG"},sidebar:"docs",previous:{title:"Setting up for EEG",permalink:"/GettingStarted/Biosensing-Setups/EEGSetup"},next:{title:"Setting up for EMG",permalink:"/GettingStarted/Biosensing-Setups/EMGSetup"}},d=[{value:"3-Lead ECG with Cyton or Ganglion Boards",id:"3-lead-ecg-with-cyton-or-ganglion-boards",children:[{value:"Materials Needed",id:"materials-needed",children:[]},{value:"Connect Electrodes to the OpenBCI Board",id:"connect-electrodes-to-the-openbci-board",children:[]},{value:"Connect the electrodes to your body",id:"connect-the-electrodes-to-your-body",children:[]},{value:"Streaming ECG Data with the OpenBCI GUI",id:"streaming-ecg-data-with-the-openbci-gui",children:[]}]},{value:"5-Lead ECG with Cyton Board",id:"5-lead-ecg-with-cyton-board",children:[]},{value:"Materials Needed",id:"materials-needed-1",children:[{value:"Connect the Electrodes to the OpenBCI Board and to your Body",id:"connect-the-electrodes-to-the-openbci-board-and-to-your-body",children:[]},{value:"Streaming and Visualizing ECG Data with the GUI",id:"streaming-and-visualizing-ecg-data-with-the-gui",children:[]}]},{value:"Improving Signal Quality",id:"improving-signal-quality",children:[]}],p={toc:d};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document will show you how to read ECG data (electrical signals from  the heart) using OpenBCI hardware and GUI."),(0,r.kt)("h2",{id:"3-lead-ecg-with-cyton-or-ganglion-boards"},"3-Lead ECG with Cyton or Ganglion Boards"),(0,r.kt)("p",null,"This step by step for 3-Lead ECG will show you how to get one channel of live ECG data."),(0,r.kt)("h3",{id:"materials-needed"},"Materials Needed"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"OpenBCI ",(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Cyton Board")," or ",(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/ganglion-board"},"Ganglion Board")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395"},"Skintact sticky electrodes")),(0,r.kt)("li",{parentName:"ol"},"Three ",(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958"},"EMG/ECG Snap Electrode Cables")," \u2014 one ground and two sensors."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/Software/OpenBCISoftware/GUIDocs"},"OpenBCI GUI"))),(0,r.kt)("h3",{id:"connect-electrodes-to-the-openbci-board"},"Connect Electrodes to the OpenBCI Board"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect two snap electrode cables to the top and bottom N1P pins of the Cyton."),(0,r.kt)("li",{parentName:"ol"},"Connect a third snap electrode cable to the bottom BIAS pin of the Cyton.")),(0,r.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/EMG_Cyton_Setup.jpg?raw=true",width:"60%"}),(0,r.kt)("p",null,"If using the ",(0,r.kt)("strong",{parentName:"p"},"Ganglion board"),", please refer to the following steps A to C, noting that on the Ganglion board there are up to 4 channels available, but in this 3-Lead ECG tutorial we will show you how to use one channel (to start off with!)."),(0,r.kt)("p",null,"A) The four switches on the Ganglion should be in the default UP position."),(0,r.kt)("p",null,"B) One snap electrode cable should be connected to the bottom D_G pin (Driven Ground) of the Ganglion board. The bottom row of pins is closer to the flat surface on which your Ganglion is placed."),(0,r.kt)("p",null,"C) To get one channel of data, connect one electrode cable to the top pin 1 of the Ganglion, and one electrode cable to the bottom pin 1 of the Ganglion. FYI, for future reference, you can use pins 1-4 for up to four channels of data. Nine cables, including the ground electrode in step B, are needed if you want to use all four channels of the Ganglion board."),(0,r.kt)("p",null,"After making these connections, snap the Skintact sticky electrodes into the snap electrode cable. Then, remove the backing tape and apply the electrode to the skin. ",(0,r.kt)("strong",{parentName:"p"},"For safety reasons, make sure to snap the sticky electrode onto its cable before applying the sticky electrode to your skin.")),(0,r.kt)("h3",{id:"connect-the-electrodes-to-your-body"},"Connect the electrodes to your body"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stick the ground electrode to a bony part of the chest, such as the sternum."),(0,r.kt)("li",{parentName:"ol"},"Connect top and bottom N1P pin on the Cyton (if using Ganglion, connect +1 and -1 pins) to opposite sides of your chest.")),(0,r.kt)("p",null,"By doing this, we are instructing the data to measure the electric potential difference across your chest, which will in turn display your heart signals."),(0,r.kt)("h3",{id:"streaming-ecg-data-with-the-openbci-gui"},"Streaming ECG Data with the OpenBCI GUI"),(0,r.kt)("p",null,"Once you have the GUI open, turn off all channels that are not connected to electrodes by toggling the numbered data streams in the Time Series widget. If using the Cyton board, additionally go to hardware settings and turn SRB2 ",(0,r.kt)("strong",{parentName:"p"},"OFF")," for all of the channels that you are streaming data from."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: This is because ordinarily SRB2 is the reference point from which potentials are measured, however we are now having cardiac locations reference themselves, so we do not want it to look at this pin.")),(0,r.kt)("p",null,"Once all of your settings have been adjusted, press 'begin data stream.'"),(0,r.kt)("p",null,"In the Cyton image above, note how the positive and negative terminals (yellow and green) are connected to the top and bottom N1P pins. When you are running the GUI, raw data from N1P pin will be displayed on Channel 1 within the Time Series Widget. If you are using the Ganglion, Channel 1 will show raw data from Pin 1 on the Ganglion."),(0,r.kt)("h2",{id:"5-lead-ecg-with-cyton-board"},"5-Lead ECG with Cyton Board"),(0,r.kt)("p",null,"This step by step 5-Lead ECG guide will show you how to get 4 channels of live ECG data.\nIt builds on the above guide to 3-Lead ECG and adds only a few additional steps, so be sure to review the above sections in their entirety before getting started on the 5-Lead ECG."),(0,r.kt)("h2",{id:"materials-needed-1"},"Materials Needed"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"OpenBCI ",(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Cyton Board")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395"},"Skintact sticky electrodes")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958"},"EMG/ECG Snap Electrode Cables")," \u2014 4 individual cables"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/Software/OpenBCISoftware/GUIDocs"},"OpenBCI GUI"))),(0,r.kt)("h3",{id:"connect-the-electrodes-to-the-openbci-board-and-to-your-body"},"Connect the Electrodes to the OpenBCI Board and to your Body"),(0,r.kt)("p",null,"The standard placement of leads for a 5-lead ECG is shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"5_Lead_ECG",src:n(53798).Z})),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Diagram"),(0,r.kt)("th",{parentName:"tr",align:null},"Body"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LA"),(0,r.kt)("td",{parentName:"tr",align:null},"Left Arm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RA"),(0,r.kt)("td",{parentName:"tr",align:null},"Right Arm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LL"),(0,r.kt)("td",{parentName:"tr",align:null},"Left Leg")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RL"),(0,r.kt)("td",{parentName:"tr",align:null},"Right Leg")))),(0,r.kt)("br",null),(0,r.kt)("br",null),"For a 5-Lead ECG with the Cyton board, you will need 4 Sticky Electrodes with one Snap Electrode Cable each. You'll also need to make 3 Y-cables. These cables will have 2 female header connectors spliced to 1 male header connector. The wire length can be short just a couple inches. These ribbon packages can be separated and cut, then spliced and wrapped with tape or shrink tube. An example of the jumper wires to use can be found [here](https://www.adafruit.com/product/1954).",(0,r.kt)("p",null,"Follow the diagram below to connect the first 3 Sticky Electrodes. On the diagram, the \u2018P\u2019 means the top row of Cyton pins, and the \u2018N\u2019 the bottom row of pins. The lines on the diagram indicate the Y-cables that each bridge two pins. Once the Y-cables have been connected to the board, connect the electrodes to your body following the same diagram. For example, IN1P LA means you connect that Y-cable to the Left Arm location shown on chest diagram above. The V electrode is generally not used."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"5_Leads",src:n(50075).Z})),(0,r.kt)("p",null,"The last electrode cable connects the bottom BIAS pin on the Cyton to RL."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ECG_Cyton_No_V",src:n(84488).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connections for 5-lead ECG, shown above")),(0,r.kt)("h3",{id:"streaming-and-visualizing-ecg-data-with-the-gui"},"Streaming and Visualizing ECG Data with the GUI"),(0,r.kt)("p",null,"Once you have the GUI open, turn off all channels that are not connected to electrodes by toggling the numbered channels in the Time Series widget. Then, go to hardware settings (located above the Time Series widget) and turn SRB2 ",(0,r.kt)("strong",{parentName:"p"},"OFF")," for Channels 1, 2 and 3. Turn OFF every other channel."),(0,r.kt)("p",null,"Once your settings have been adjusted, press 'Start Data Stream'. You should see graphs similar to the ones below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ECG_GUI_No_V",src:n(26802).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data streaming, shown above")),(0,r.kt)("h2",{id:"improving-signal-quality"},"Improving Signal Quality"),(0,r.kt)("p",null,"For help minimizing noise and improving ECG signal quality, check out ",(0,r.kt)("a",{parentName:"p",href:"/Troubleshooting/minimizingNoise"},"this document")," and head to the OpenBCI Technical ",(0,r.kt)("a",{parentName:"p",href:"https://openbci.com/forum"},"Forum")," if you have questions."),(0,r.kt)("p",null,"Concerned about the signal quality? Read ",(0,r.kt)("a",{parentName:"p",href:"https://www.sciencedirect.com/science/article/pii/S2405844021012512"},"this paper"),"\nto learn more about the reliability of OpenBCI ECG quality."))}h.isMDXComponent=!0},53798:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/5-lead-electrode-ECG-c26a3f4d4244cf95ec76ce78624f85f5.png"},50075:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/5_lead_ECG_Cyton-5e06e7721faaabcf9d1ed620131a9093.png"},84488:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ECG_Cyton_No_V-c0e58abe0691a63b743bef4b69fe34b2.jpg"},26802:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ECG_GUI_No_V-836e97cbabc98497e7b975fd4c313028.jpg"}}]);