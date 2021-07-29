"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=s(n),c=r,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(h,o(o({ref:e},d),{},{components:n})):a.createElement(h,o({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94278:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>m});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o=["components"],i={id:"Python",title:"Python and OpenBCI"},p=void 0,s={unversionedId:"Deprecated/Python",id:"Deprecated/Python",isDocsHomePage:!1,title:"Python and OpenBCI",description:'THIS DOCUMENT HAS BEEN DEPRECATED. PLEASE REFER TO "FOR DEVELOPERS" SECTION FOR INFORMATION ON BRAINFLOW-PYTHON.',source:"@site/docs/Deprecated/08-OpenBCI_Python.md",sourceDirName:"Deprecated",slug:"/Deprecated/Python",permalink:"/Deprecated/Python",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/websitev2/docs/Deprecated/08-OpenBCI_Python.md",version:"current",lastUpdatedAt:1627417620,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:8,frontMatter:{id:"Python",title:"Python and OpenBCI"},sidebar:"docs",previous:{title:"Ultracortex Mark III Nova and Supernova",permalink:"/Deprecated/UltracortexMark3_NovaDep"},next:{title:"OpenBCI Hub",permalink:"/Deprecated/Hub"}},d=[{value:"To Do",id:"to-do",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Important notes",id:"important-notes",children:[{value:"Getting Started",id:"getting-started",children:[]},{value:"Sending commands",id:"sending-commands",children:[]},{value:"Initializing Stream",id:"initializing-stream",children:[]},{value:"Example (Print Raw Data)",id:"example-print-raw-data",children:[]},{value:"Example (Simple LSL Streamer)",id:"example-simple-lsl-streamer",children:[]},{value:"Who are we?",id:"who-are-we",children:[]},{value:"Contact us",id:"contact-us",children:[]},{value:"Glossary",id:"glossary",children:[]},{value:"Thank you",id:"thank-you",children:[]},{value:"License",id:"license",children:[]}]}],u={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"THIS DOCUMENT HAS BEEN DEPRECATED. PLEASE REFER TO ",(0,l.kt)("a",{parentName:"strong",href:"/ForDevelopers/SoftwareDevelopment"},'"FOR DEVELOPERS"')," SECTION FOR INFORMATION ON ",(0,l.kt)("a",{parentName:"strong",href:"https://brainflow.readthedocs.io/en/stable/BuildBrainFlow.html#python"},"BRAINFLOW-PYTHON"),".")),(0,l.kt)("p",null,"OpenBCI has a Python software library designed to work with OpenBCI hardware. To use it, download our OpenBCI Python github repository: https: ",(0,l.kt)("strong",{parentName:"p"},"DEPRECATED"),". This Python code is meant to be used by people familiar with Python and programming in general. Its purpose is to allow for programmers to interface with OpenBCI technology directly, both to acquire data and to write programs that can use that data in a live setting, using Python.The OpenBCI-Python repo is still live but it is not longer being mantained by OpenBCI."),(0,l.kt)("p",null,"Please direct any questions, suggestions and bug reports to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/pyOpenBCI"},"github repo - DEPRECATED")," as well."),(0,l.kt)("h1",{id:"pyopenbci---deprecated"},"pyOpenBCI - DEPRECATED"),(0,l.kt)("p",null,"This repo has been designed to be a more beginner friendly version of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Python"},"OpenBCI-Python")," repo. If there is anything you think we should add please open an issue."),(0,l.kt)("p",null,"Using this repo provides a building block for developing with Python. The goal for the Python library is to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"provide a stable Python driver for all OpenBCI Biosensors")),", that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Allows Python users to install one module and use any board they choose"),(0,l.kt)("li",{parentName:"ul"},"Provides examples of using Python to port data to other apps like lab streaming layer"),(0,l.kt)("li",{parentName:"ul"},"Performs the heavy lifting when extracting and transforming raw binary byte streams"),(0,l.kt)("li",{parentName:"ul"},"Provides a base for the beginner users to use Python to process their OpenBCI data")),(0,l.kt)("h2",{id:"to-do"},"To Do"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Ganglion Aux Data")),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python 2.7 or 3.4+"),(0,l.kt)("li",{parentName:"ul"},"Currently the Cyton works on Windows, Linux, and MacOS."),(0,l.kt)("li",{parentName:"ul"},"Ganglion works on Linux only (Linux VM with enabled Bluetooth works as well)."),(0,l.kt)("li",{parentName:"ul"},"The WiFi shield is known to have reliability issues across different computer configurations. Using it effectively requires advanced technical skills and programming knowledge. Note that the code avaiable here has not been tested accross all platforms.")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"First, make sure you have the necessary dependencies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\npip install numpy pyserial bitstring xmltodict requests\n\n")),(0,l.kt)("p",null,"Linux users may need ",(0,l.kt)("inlineCode",{parentName:"p"},"bluepy")," also."),(0,l.kt)("p",null,"Then you can use pip to install the OpenBCI module."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\npip install pyOpenBCI\n\n")),(0,l.kt)("p",null,"Once installed, try running the examples provided to make sure you can connect to your OpenBCI board."),(0,l.kt)("h2",{id:"important-notes"},"Important notes"),(0,l.kt)("p",null,"Currently the Ganglion board can only be used with a Linux OS. The WiFi shield is known to have reliability issues across different computer configurations. Using it effectively requires advanced technical skills and programming knowledge. Note that the code avaiable here has not been tested accross all platforms."),(0,l.kt)("h3",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"First you need to initialize your board with one of the following commands:"),(0,l.kt)("h4",{id:"for-cyton-board"},"For Cyton board:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n# For Windows replace '*' with the port number\nboard = OpenBCICyton(port='COM*')\n\n# For MacOS and Linux replace '*' with the port number\nboard = OpenBCICyton(port='/dev/ttyUSB*')\n\n")),(0,l.kt)("p",null,"To find the COM port you are connected to you can use the OpenBCI GUI. Otherwise you can leave the port number as None, and the function find_port() will run and connect to the first Cyton Dongle it finds."),(0,l.kt)("h4",{id:"for-cyton--daisy"},"For Cyton + Daisy:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n# For Windows replace '*' with the port number\nboard = OpenBCICyton(port='COM*', daisy=True)\n\n# For MacOS and Linux replace '*' with the port number\nboard = OpenBCICyton(port='/dev/ttyUSB*', daisy=True)\n\n")),(0,l.kt)("p",null,"To find the COM port you are connected to you can use the OpenBCI GUI. Otherwise you can leave the port number as None, and the function find_port() will run and connect to the first Cyton Dongle it finds."),(0,l.kt)("h4",{id:"for-ganglion"},"For Ganglion:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n# For Linux replace '*' with the mac address.\nboard = OpenBCIGanglion(mac='*')\n\n")),(0,l.kt)("p",null,"If you need to find the Ganglion mac address you can use an app like ",(0,l.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_US"},"nRF connect")," to find the ganglion. Otherwise you can leave the mac address as None, and the function find_mac() will run (NOTE: You will need to run the script with sudo for this function to work)."),(0,l.kt)("h4",{id:"for-wifi-shield"},"For Wifi Shield:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nboard = OpenBCIWifi(shield_name='OpenBCI-2254', sample_rate=200)\n\n")),(0,l.kt)("h3",{id:"sending-commands"},"Sending commands"),(0,l.kt)("p",null,"Once you initialize the board you can use the commands on the OpenBCI SDKs (",(0,l.kt)("a",{parentName:"p",href:"/Ganglion/GanglionSDK"},"Ganglion"),", ",(0,l.kt)("a",{parentName:"p",href:"Cyton/CytonSDK"},"Cyton"),", ",(0,l.kt)("a",{parentName:"p",href:"/ThirdParty/WiFiShield/WiFiSDK"},"Wifi Shield"),") to send commands to the board using python (make sure your commands are strings)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n# Write commands to the board\nboard.write_command(command)\n\n")),(0,l.kt)("p",null,"Here is a table of the most common ones:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Ganglion SDK"),(0,l.kt)("th",{parentName:"tr",align:null},"Cyton SDK"),(0,l.kt)("th",{parentName:"tr",align:null},"Cyton & Daisy SDK (Additional Commands)"),(0,l.kt)("th",{parentName:"tr",align:null},"Wifi Shield SDK (Additional Commands)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Turn Channels OFF"),(0,l.kt)("td",{parentName:"tr",align:null},"1 2 3 4"),(0,l.kt)("td",{parentName:"tr",align:null},"1 2 3 4 5 6 7 8"),(0,l.kt)("td",{parentName:"tr",align:null},"q w e r t y u i"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Turn Channels ON"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"! @ # $ % ^ & ","*"),(0,l.kt)("td",{parentName:"tr",align:null},"Q W E R T Y U I"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Connect to internal GND"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Synthetic Square Wave"),(0,l.kt)("td",{parentName:"tr",align:null},"["),(0,l.kt)("td",{parentName:"tr",align:null},"["),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disable Synthetic Square Wave"),(0,l.kt)("td",{parentName:"tr",align:null},"]"),(0,l.kt)("td",{parentName:"tr",align:null},"]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Connect to DC Signal"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"p"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Set Channels to Default"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"d"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Start Streaming Data"),(0,l.kt)("td",{parentName:"tr",align:null},"b"),(0,l.kt)("td",{parentName:"tr",align:null},"b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Stop Streaming Data"),(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Soft Reset"),(0,l.kt)("td",{parentName:"tr",align:null},"v"),(0,l.kt)("td",{parentName:"tr",align:null},"v"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},";")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Accelerometer"),(0,l.kt)("td",{parentName:"tr",align:null},"n"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disable Accelerometer"),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"initializing-stream"},"Initializing Stream"),(0,l.kt)("p",null,"To start your stream you can use the following command with a callback function. You can look at the examples folder for some pre-written callback functions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n# Start stream\nboard.start_stream(callback)\n\n")),(0,l.kt)("p",null,"The output of the start_stream function is the OpenBCISample on the callback function. The OpenBCISample object has the following attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"packet_id = The ID of the incomming packet."),(0,l.kt)("li",{parentName:"ul"},"channels_data = The raw EEG data of each channel. 4 for the Ganglion, 8 for the Cyton, and 16 for the Cyton + Daisy."),(0,l.kt)("li",{parentName:"ul"},"aux_data = Accelerometer data.")),(0,l.kt)("p",null,"Because the channels_data and aux_data is the raw data in counts read by the board, we need to multiply the data by a scale factor. There is a specific scale factor for each board:"),(0,l.kt)("h4",{id:"for-the-cyton-and-cyton--daisy-boards"},"For the Cyton and Cyton + Daisy boards:"),(0,l.kt)("p",null,"Multiply uVolts_per_count to convert the channels_data to uVolts."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nuVolts_per_count = (4500000)/24/(2**23-1) #uV/count\n\n")),(0,l.kt)("p",null,"Multiply accel_G_per_count to convert the aux_data to G."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\naccel_G_per_count = 0.002 / (2**4) #G/count\n\n")),(0,l.kt)("h4",{id:"for-the-ganglion-board"},"For the Ganglion Board"),(0,l.kt)("p",null,"Multiply Volts_per_count to convert the channels_data to Volts."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nVolts_per_count = 1.2 * 8388607.0 * 1.5 * 51.0 #V/count\n\n")),(0,l.kt)("p",null,"Multiply accel_G_per_count to convert the aux_data to G."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\naccel_G_per_count = 0.032 #G/count\n\n")),(0,l.kt)("h4",{id:"for-the-wifi-shield"},"For the Wifi Shield"),(0,l.kt)("p",null,"The Wifi Shield already outputs the data in Volts and the aux data in G."),(0,l.kt)("h3",{id:"example-print-raw-data"},"Example (Print Raw Data)"),(0,l.kt)("p",null,"To test this example, use ",(0,l.kt)("inlineCode",{parentName:"p"},"py Examples\\print_raw_example.py")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Examples\\print_raw_example.py"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pyOpenBCI import OpenBCICyton\n\ndef print_raw(sample):\n    print(sample.channels_data)\n\nboard = OpenBCICyton(port='COM5', daisy=False)\n\nboard.start_stream(print_raw)\n\n")),(0,l.kt)("h3",{id:"example-simple-lsl-streamer"},"Example (Simple LSL Streamer)"),(0,l.kt)("p",null,"To run this example, use ",(0,l.kt)("inlineCode",{parentName:"p"},"py Examples\\lsl_example.py")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"python Examples\\lsl_example.py"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pyOpenBCI import OpenBCICyton\nfrom pylsl import StreamInfo, StreamOutlet\nimport numpy as np\n\nSCALE_FACTOR_EEG = (4500000)/24/(2**23-1) #uV/count\nSCALE_FACTOR_AUX = 0.002 / (2**4)\n\n\nprint(\"Creating LSL stream for EEG. \\nName: OpenBCIEEG\\nID: OpenBCItestEEG\\n\")\n\ninfo_eeg = StreamInfo('OpenBCIEEG', 'EEG', 8, 250, 'float32', 'OpenBCItestEEG')\n\nprint(\"Creating LSL stream for AUX. \\nName: OpenBCIAUX\\nID: OpenBCItestEEG\\n\")\n\ninfo_aux = StreamInfo('OpenBCIAUX', 'AUX', 3, 250, 'float32', 'OpenBCItestAUX')\n\noutlet_eeg = StreamOutlet(info_eeg)\noutlet_aux = StreamOutlet(info_aux)\n\ndef lsl_streamers(sample):\n    outlet_eeg.push_sample(np.array(sample.channels_data)*SCALE_FACTOR_EEG)\n    outlet_aux.push_sample(np.array(sample.aux_data)*SCALE_FACTOR_AUX)\n\nboard = OpenBCICyton(port='COM5', daisy=False)\n\nboard.start_stream(lsl_streamers)\n\n\n")),(0,l.kt)("h3",{id:"who-are-we"},"Who are we?"),(0,l.kt)("p",null,"The founder of the OpenBCI Python repository is Jermey Frey. The Python driver is one of the most popular repositories and has the most contributors!"),(0,l.kt)("p",null,"The contributors to these repos are people using Python mainly for their data acquisition and analytics."),(0,l.kt)("h3",{id:"contact-us"},"Contact us"),(0,l.kt)("p",null,"If you want to report a problem or suggest an enhancement we'd love for you to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/Documentation/issues"},"open an issue")," at this github repository because then we can get right on it."),(0,l.kt)("h3",{id:"glossary"},"Glossary"),(0,l.kt)("p",null,"OpenBCI boards are commonly referred to as ",(0,l.kt)("em",{parentName:"p"},"biosensors"),". A biosensor converts biological data into digital data."),(0,l.kt)("p",null,"The ","[Ganglion][link_shop_ganglion]"," has 4 channels, meaning the Ganglion can take four simultaneous voltage readings."),(0,l.kt)("p",null,"The ","[Cyton][link_shop_cyton]"," has 8 channels and ","[Cyton with Daisy][link_shop_cyton_daisy]"," has 16 channels."),(0,l.kt)("p",null,"Generally speaking, the Cyton records at a high quality with less noise. Noise is anything that is not signal."),(0,l.kt)("h3",{id:"thank-you"},"Thank you"),(0,l.kt)("p",null,"Thank you so much (Danke sch\xf6n! Merci beaucoup!) for visiting the project and we do hope that you'll join us on this amazing journey to make programming with OpenBCI fun and easy."),(0,l.kt)("h3",{id:"license"},"License"),(0,l.kt)("p",null,"MIT"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/wifi-shield?variant=44534009550"},"link_shop_wifi_shield")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/ganglion-board"},"link_shop_ganglion")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel"},"link_shop_cyton")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel"},"link_shop_cyton_daisy")))}m.isMDXComponent=!0}}]);