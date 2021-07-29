"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6404],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),h=a,y=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return o?n.createElement(y,i(i({ref:t},c),{},{components:o})):n.createElement(y,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},17596:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>d});var n=o(22122),a=o(19756),r=(o(67294),o(3905)),i=["components"],l={id:"BrainBay",title:"BrainBay"},s=void 0,p={unversionedId:"Software/CompatibleThirdPartySoftware/BrainBay",id:"Software/CompatibleThirdPartySoftware/BrainBay",isDocsHomePage:!1,title:"BrainBay",description:"From their OpenBCI tutorials page: BrainBay is an open-source visual programming language (VPL) for rapid prototyping of EEG digital signal processing steps (or data flows.)",source:"@site/docs/Software/CompatibleThirdPartySoftware/05-BrainBay.md",sourceDirName:"Software/CompatibleThirdPartySoftware",slug:"/Software/CompatibleThirdPartySoftware/BrainBay",permalink:"/Software/CompatibleThirdPartySoftware/BrainBay",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/websitev2/docs/Software/CompatibleThirdPartySoftware/05-BrainBay.md",version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:5,frontMatter:{id:"BrainBay",title:"BrainBay"},sidebar:"docs",previous:{title:"Lab Streaming Layer (LSL)",permalink:"/Software/CompatibleThirdPartySoftware/LSL"},next:{title:"BioEra",permalink:"/Software/CompatibleThirdPartySoftware/BioEra"}},c=[{value:"Setting Up Your Environment",id:"setting-up-your-environment",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Importing data from OpenBCI to BrainBay",id:"importing-data-from-openbci-to-brainbay",children:[]},{value:"Live Stream from OpenBCI to BrainBay",id:"live-stream-from-openbci-to-brainbay",children:[]},{value:"Quick Project: Using the Oscilloscope Tool",id:"quick-project-using-the-oscilloscope-tool",children:[]},{value:"Documentation",id:"documentation",children:[]}],u={toc:c};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"From their OpenBCI tutorials page: BrainBay is an open-source visual programming language (VPL) for rapid prototyping of EEG digital signal processing steps (or data flows.)"),(0,r.kt)("p",null,"They recently added an OpenBCI driver to their software, making it easy to use BrainBay with OpenBCI products!"),(0,r.kt)("h2",{id:"setting-up-your-environment"},"Setting Up Your Environment"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows:")," BrainBay only works with the Windows operating system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MacOS and Linux:")," If you have Mac OS or Linux, you can use BrainBay through a virtual machine program like VirtualBox. Check out our VirtualBox tutorial ",(0,r.kt)("a",{parentName:"p",href:"/Software/CompatibleThirdPartySoftware/VirtualBox"},"here!")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Click on the download link for the lastest version of BrainBay here: (http:). If you're using a virtual machine, be sure to download and set up BrainBay from within the VM environment."),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Setup_BrainBay_v2.1.exe"),", or the equivalent .exe for the latest version, and follow the prompts to run the program. When you're finished, a BrainBay icon should appear on your desktop."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Double-clicking the BrainBay icon will open a demo screen. To learn more about BrainBay's capabilities, click on one of the demo options."),(0,r.kt)("p",null,"To begin using BrainBay yourself, click on Design -",">"," New from the toolbar at the top of the screen."),(0,r.kt)("p",null,"You're now ready to use BrainBay for EEG streaming and analysis!"),(0,r.kt)("h2",{id:"importing-data-from-openbci-to-brainbay"},"Importing data from OpenBCI to BrainBay"),(0,r.kt)("p",null,'BrainBay does have an "import data from file" option, but it is only compatible with archive (.arc) files. The OpenBCI GUI saves data as comma-delineated .txt files. So, unless you have another application that saves data from your OpenBCI board as .arc files, you need to stream data live to use BrainBay.'),(0,r.kt)("h2",{id:"live-stream-from-openbci-to-brainbay"},"Live Stream from OpenBCI to BrainBay"),(0,r.kt)("p",null,"To stream data live from your OpenBCI board within a BrainBay design, select Insert Element -",">"," Source -",">",' Biosignal/EEG Amplifier and one of the OpenBCI devices. I\'m using a Cyton board (without the Daisy extension), so I selected "OpenBCI 8 Channels".'),(0,r.kt)("p",null,"After selecting your device, an EEG window will appear. Select your device's COM port. If you're using VirtualBox, our ",(0,r.kt)("a",{parentName:"p",href:"/Software/CompatibleThirdPartySoftware/VirtualBox"},"VirtualBox tutorial")," has a section on finding the COM port of a connected hardware device."),(0,r.kt)("p",null,'Click "Connect/Disconnect". A checkmark should appear in the "connected:" box.'),(0,r.kt)("p",null,"Exit out of the device configuration window. A icon corresponding to your OpenBCI board should have appeared in your design window, like below. Re-open the configuration window at any time by right-clicking on the icon."),(0,r.kt)("p",null,"You're now streaming data from your board! In the next section, we'll show a simple example of how to use and display your OpenBCI data using BrainBay tools."),(0,r.kt)("h2",{id:"quick-project-using-the-oscilloscope-tool"},"Quick Project: Using the Oscilloscope Tool"),(0,r.kt)("p",null,"BrainBay has a wide variety of useful tools for streaming EEG data. To get familiar with BrainBay's interface, and to double-check our board is streaming data, we'll show how to use the oscilloscope tool. An oscilloscope is a tool that displays changes in signal voltage vs. time (just like the main display of the OpenBCI GUI)."),(0,r.kt)("p",null,"Select Insert Element -",">"," Target -",">"," Oscilloscope from the toolbar."),(0,r.kt)("p",null,'A icon representing the oscilloscope will appear in the "Design" window. Drag it off the icon representing your OpenBCI board if necessary.'),(0,r.kt)("p",null,"A second window will pop up behind your design window. This window will display the oscilloscope output. Reposition the Design and Oscilloscope windows so both are visible."),(0,r.kt)("p",null,'Click on the "Design" window. Click on the icon for the Cyton board, so that it\'s outlined in yellow. Decide which input channel (or which Cyton board pin) you want to display on the oscilloscope. Click and hold on the orange circle next to that channel. Drag the cursor to the yellow "chan1" circle on the oscilloscope icon. A red line should now connect the two circles.'),(0,r.kt)("p",null,'Press the "Play (F7)" button at the bottom of the BrainBay screen. A red LED on your Dongle should turn on. This means your board is streaming live data to your computer!'),(0,r.kt)("p",null,"Tap on the pins of your OpenBCI Cyton board. You should see a signal response in the oscilloscope window."),(0,r.kt)("p",null,"You are now using BrainBay to view data streamed from your OpenBCI board! Feel free to connect one of the other OpenBCI channels to \"chan2\" on the oscilloscope icon to view signals from multiple pins at once. Once you're comfortable with the oscilloscope tool, explore BrainBay's other target and processing tools!"),(0,r.kt)("p",null,"Want to learn more about BrainBay's capabilities with OpenBCI hardware? Check out their ",(0,r.kt)("a",{parentName:"p",href:"https://sites.google.com/site/biofeedbackpages/brainbay-openbci"},"BrainBay & OpenBCI tutorials")," page."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"Documentation for the BrainBay software can be found here: ()"),(0,r.kt)("p",null,"Did you use BrainBay and OpenBCI to build something new? Post about it on our ",(0,r.kt)("a",{parentName:"p",href:"http://openbci.com/community/"},"community page!")))}d.isMDXComponent=!0}}]);