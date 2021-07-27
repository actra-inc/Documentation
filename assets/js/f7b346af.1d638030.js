"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1114],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},95867:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>u});var n=o(22122),r=o(19756),a=(o(67294),o(3905)),i=["components"],l={id:"EMGscrolling",title:"EMG Scrolling"},s=void 0,p={unversionedId:"Examples/EMGProjects/EMGscrolling",id:"Examples/EMGProjects/EMGscrolling",isDocsHomePage:!1,title:"EMG Scrolling",description:"In this tutorial, we will show you how to scroll up and down on your computer screen without touching the keyboard. For that, we will read the peaks in EMG signals your arm muscles produce when you flex them and use them to scroll.",source:"@site/docs/Examples/EMGProjects/01-EMG_Scrolling.md",sourceDirName:"Examples/EMGProjects",slug:"/Examples/EMGProjects/EMGscrolling",permalink:"/Documentation/Examples/EMGProjects/EMGscrolling",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/websitev2/docs/Examples/EMGProjects/01-EMG_Scrolling.md",version:"current",lastUpdatedBy:"Richard Waltman",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:1,frontMatter:{id:"EMGscrolling",title:"EMG Scrolling"},sidebar:"docs",previous:{title:"Community Page Projects",permalink:"/Documentation/Examples/CommunityPageProjects"},next:{title:"EMG controlled Music",permalink:"/Documentation/Examples/EMGProjects/EMGmusic"}},c=[{value:"Materials Required",id:"materials-required",children:[]},{value:"Step 1: Hardware Assembly.",id:"step-1-hardware-assembly",children:[]},{value:"Step 2: Software Setup.",id:"step-2-software-setup",children:[]},{value:"Step 3: Data Stream using the GUI.",id:"step-3-data-stream-using-the-gui",children:[]},{value:"Step 4: Using a Python Script to Read the Data and Scroll.",id:"step-4-using-a-python-script-to-read-the-data-and-scroll",children:[]}],d={toc:c};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, we will show you how to scroll up and down on your computer screen without touching the keyboard. For that, we will read the peaks in EMG signals your arm muscles produce when you flex them and use them to scroll."),(0,a.kt)("p",null,"Check out an example video of this tutorial being put into action!"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://media.giphy.com/media/d88TSXA9BWMbKxwNQU/giphy.gif",alt:"EMGscrollgif"})),(0,a.kt)("p",null,"The following instructions have been written for use with Windows 10."),(0,a.kt)("h2",{id:"materials-required"},"Materials Required"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"OpenBCI ",(0,a.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Cyton Board")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/skintact-f301-pediatric-foam-solid-gel-electrodes-30-pack?variant=29467659395"},"Skintact sticky electrodes")," or ",(0,a.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/idun-dryode-kit"},"IDUN Dryode")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/emg-ecg-snap-electrode-cables?variant=32372786958"},"EMG/ECG Snap Electrode Cables")),(0,a.kt)("li",{parentName:"ol"},"Computer with downloaded OpenBCI ",(0,a.kt)("a",{parentName:"li",href:"/Documentation/Software/OpenBCISoftware/GUIDocs"},"GUI"))),(0,a.kt)("h2",{id:"step-1-hardware-assembly"},"Step 1: Hardware Assembly."),(0,a.kt)("p",null,"Follow the EMG Getting Started ",(0,a.kt)("a",{parentName:"p",href:"/Documentation/GettingStarted/Biosensing-Setups/EMGSetup"},"tutorial")," on this link to connect the electrodes to your body and the Cyton board, and read data from it using the OpenBCI GUI. For this tutorial, you will need to connect both arms, one to Channel 1 and the other one to Channel 2. Only one ground is needed."),(0,a.kt)("h2",{id:"step-2-software-setup"},"Step 2: Software Setup."),(0,a.kt)("p",null,"Download and install ",(0,a.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python")," (either version 2 or 3). Python might already be installed on your computer. Type python --version to check if you have Python version 2 or 3 installed. To use this program, you need the following Python packages installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pylsl")," : use ",(0,a.kt)("inlineCode",{parentName:"li"},"python -m pip install pylsl")," from the Python folder in the command line to install it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pyautogui")," : use ",(0,a.kt)("inlineCode",{parentName:"li"},"python -m pip install pyautogui")," to install it.")),(0,a.kt)("h2",{id:"step-3-data-stream-using-the-gui"},"Step 3: Data Stream using the GUI."),(0,a.kt)("p",null,"Follow the networking ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openbci.com/docs/Software/OpenBCISoftware/GUIWidgets#networking"},"tutorial")," to learn how to stream data using LSL from the GUI. For this project, you will need to stream the EMG data using the Networking Widget. Your Networking settings should look as follows:"),(0,a.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/docs/assets/TutorialImages/EMG_Scrolling_GUI.png?raw=true",width:"70%"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important:")," Make sure your EMG widget is open before you start streaming."),(0,a.kt)("h2",{id:"step-4-using-a-python-script-to-read-the-data-and-scroll"},"Step 4: Using a Python Script to Read the Data and Scroll."),(0,a.kt)("p",null,"The Python script will search for the EMG data streams. Once it finds them it will read the and detect any spikes that correspond to the muscle contractions. If a flex is detected and 10 milliseconds have passed since the last one, it will scroll up or down depending on which arm was flexed. The threshold for the time between flexes can be modified as needed to avoid debouncing."),(0,a.kt)("p",null,"Download the Python script from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Tutorials/tree/master/EMG_Scrolling"},"here")," by clicking on \u2018Raw\u2019 and copying it to a .py file in your Python folder. Once you\u2019re streaming data from the GUI, go to the folder that you stored the script in from your command line, and run it using ",(0,a.kt)("inlineCode",{parentName:"p"},"python.exe <script_name>.py")),(0,a.kt)("p",null,"Open one of your favourite websites in your browser and scroll through it flexing your arms. By modifying the time_thres and flex_thres parameters in the code, you can adjust the time to wait between flexes and the flex strength to your needs."),(0,a.kt)("p",null,"Try it out and send us a video of your final prototype!"))}u.isMDXComponent=!0}}]);