"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14799:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>u});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i=["components"],l={id:"EMG_LED",title:"EMG-controlled LED"},s=void 0,p={unversionedId:"Examples/EMGProjects/EMG_LED",id:"Examples/EMGProjects/EMG_LED",isDocsHomePage:!1,title:"EMG-controlled LED",description:"This tutorial is little more involved than the other EMG tutorials. No fear, we've documented every step below. Happy bio-hacking!",source:"@site/docs/Examples/EMGProjects/04-EMG_LED.md",sourceDirName:"Examples/EMGProjects",slug:"/Examples/EMGProjects/EMG_LED",permalink:"/Examples/EMGProjects/EMG_LED",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/websitev2/docs/Examples/EMGProjects/04-EMG_LED.md",version:"current",lastUpdatedBy:"Richard Waltman",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:4,frontMatter:{id:"EMG_LED",title:"EMG-controlled LED"},sidebar:"docs",previous:{title:"EMG-controlled Slideshow",permalink:"/Examples/EMGProjects/EMGslideshow"},next:{title:"EMG Chrome Dino Game",permalink:"/Examples/EMGProjects/EMG_Chrome_Dino_Game"}},d=[{value:"Materials Required",id:"materials-required",children:[]},{value:"Step 1: Hardware Assembly",id:"step-1-hardware-assembly",children:[]},{value:"Step 2: Arduino Setup",id:"step-2-arduino-setup",children:[]},{value:"Step 3: Software Setup",id:"step-3-software-setup",children:[]},{value:"Step 4: Stream data using the GUI",id:"step-4-stream-data-using-the-gui",children:[]},{value:"Step 5: Using a Python Script to Send Data to the Arduino",id:"step-5-using-a-python-script-to-send-data-to-the-arduino",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial is little more involved than the other EMG tutorials. No fear, we've documented every step below. Happy bio-hacking!"),(0,a.kt)("p",null,"In this tutorial, we will show you how to change the color of an LED depending on your facial expression. To do that, we will read the peaks in EMG signals your face muscles produce when you flex them and use them to change the color of an LED. The yellow color will indicate smiling, the red color frowning, and the blue color a neutral expression."),(0,a.kt)("p",null,"Check out the example video of this tutorial being put into action!"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://media.giphy.com/media/W51AtZW7WN2Vg9F5mC/giphy.gif",alt:"EMG_LED_gif"})),(0,a.kt)("p",null,"The following instructions have been written for use with Windows 10."),(0,a.kt)("h2",{id:"materials-required"},"Materials Required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Computer or Laptop with ",(0,a.kt)("a",{parentName:"li",href:"https://docs.openbci.com/docs/Software/OpenBCISoftware/GUIDocs"},"OpenBCI GUI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://shop.openbci.com/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Cyton Board")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://store.arduino.cc/usa/arduino-uno-rev3"},"Arduino UNO or equivalent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/openbci-gold-cup-electrodes?variant=9056028163"},"Gold Cup Electrodes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://shop.openbci.com/products/ten20-conductive-paste-8oz-jar"},"Ten20 Conductive Paste")),(0,a.kt)("li",{parentName:"ul"},"USB Cable"),(0,a.kt)("li",{parentName:"ul"},"Blue, Red and Yellow LEDs - the number varies depending on the intensity"),(0,a.kt)("li",{parentName:"ul"},"150 and 100 Ohm Resistors"),(0,a.kt)("li",{parentName:"ul"},"3 NPN Transistors (one per color) such as the ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/2N2222"},"2N2222")),(0,a.kt)("li",{parentName:"ul"},"Breadboard with Jumper Wires")),(0,a.kt)("h2",{id:"step-1-hardware-assembly"},"Step 1: Hardware Assembly"),(0,a.kt)("p",null,"For this project you will need five gold cup electrodes. Connect the first electrode cable to the bottom AGND pin, and the other ",(0,a.kt)("em",{parentName:"p"},"four")," electrode cables to the top and bottom pins of Channel 1 (",(0,a.kt)("strong",{parentName:"p"},"N1P"),") and Channel 2 (",(0,a.kt)("strong",{parentName:"p"},"N2P"),"), as shown on the picture below."),(0,a.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/docs/assets/TutorialImages/Facial_EMG_Cyton.png?raw=true",width:"70%"}),(0,a.kt)("p",null,"Now it\u2019s time to connect the electrodes to your body. To connect a gold cup electrode to your skip, apply some Ten20 paste on it like shown on the picture below, and stick it to your skin. To secure the connection, you can put some medical tape over it."),(0,a.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/docs/assets/TutorialImages/Ten20.png?raw=true",width:"70%"}),(0,a.kt)("p",null,"Now connect the five electrodes as shown on the picture below. The two electrodes on top of your eyebrow go to top and bottom N2P pins on the Cyton, the two electrodes closest to your mouth go to top and bottom N1P pins, and the electrode closest to your ear goes to bottom AGND. You can also use the color of the wires as a guide to know which electrode goes where."),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Electrode Wire Color"),(0,a.kt)("th",{parentName:"tr",align:null},"Cyton Board Pin"),(0,a.kt)("th",{parentName:"tr",align:null},"Body Location"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"grey"),(0,a.kt)("td",{parentName:"tr",align:null},"bottom AGND pin"),(0,a.kt)("td",{parentName:"tr",align:null},"on face, close to ear"),(0,a.kt)("td",{parentName:"tr",align:null},"reference")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"purple"),(0,a.kt)("td",{parentName:"tr",align:null},"top N1P pin"),(0,a.kt)("td",{parentName:"tr",align:null},"corner of mouth"),(0,a.kt)("td",{parentName:"tr",align:null},"measuring potential difference on channel 1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"white"),(0,a.kt)("td",{parentName:"tr",align:null},"bottom N1P pin"),(0,a.kt)("td",{parentName:"tr",align:null},"middle of cheek"),(0,a.kt)("td",{parentName:"tr",align:null},"measuring potential difference on channel 1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"green"),(0,a.kt)("td",{parentName:"tr",align:null},"top N2P pin"),(0,a.kt)("td",{parentName:"tr",align:null},"outer brow"),(0,a.kt)("td",{parentName:"tr",align:null},"measuring potential difference on channel 2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blue"),(0,a.kt)("td",{parentName:"tr",align:null},"bottom N2P pin"),(0,a.kt)("td",{parentName:"tr",align:null},"inner brow"),(0,a.kt)("td",{parentName:"tr",align:null},"measuring potential difference on channel 2")))),(0,a.kt)("br",null),(0,a.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/docs/assets/TutorialImages/Facial_EMG_Positions.jpeg?raw=true",width:"70%"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"To assemble the circuit for the LEDs and Arduino, the first step is to connect the\nLEDs to the Arduino for each color. The connections are shown on the diagram below. For each color, yellow, red and blue, the Collector pin of the transistor (top connection in the diagram below) needs to be connected to 5 volts either through the USB pin or the 5V pin of the Arduino. Next, the Base of the transistor (middle pin in the diagram) gets connected to the Arduino GPIO pin of choice. In this case, we will use pin 12 for red, pin 11 for blue and pin 8 for yellow."),(0,a.kt)("p",null,"Finally, the LED gets connected to the Emitter pin of the transistor and to the Arduino pin GND through a resistor. In this way, the transistor acts as a switch to turn ON/OFF the group of LEDs while protecting the Arduino pin from receiving too much current."),(0,a.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/docs/assets/TutorialImages/Facial_EMG_Diagram.png?raw=true",width:"70%"}),(0,a.kt)("p",null,"The diagram above needs to be replicated for every color, with as many LEDs as you like. An example breadboard set-up is shown below."),(0,a.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/docs/assets/TutorialImages/LED_Panels.jpeg?raw=true",width:"70%"}),(0,a.kt)("h2",{id:"step-2-arduino-setup"},"Step 2: Arduino Setup"),(0,a.kt)("p",null,"The first step is to download the Arduino IDE from ",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/main/software"},"here"),". Once you have downloaded and installed the Arduino IDE, you should see a screen like the one below."),(0,a.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/docs/assets/TutorialImages/init_arduino_pic.png?raw=true",width:"70%"}),(0,a.kt)("p",null,"Download the folder with the code from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Tutorials/tree/master/Facial_EMG_Multiple_LEDs"},"here")," and open it using the Arduino IDE by clicking on File ",">",">"," Open... and selecting the entire folder.  Connect the Arduino to the computer by clicking on ",(0,a.kt)("strong",{parentName:"p"},"Tools"),", then selecting the right Board and Port options. Next, click on Upload and wait for the code to be uploaded."),(0,a.kt)("p",null,"Once the code has been loaded into the Arduino, open the Serial Monitor in the Arduino IDE and try sending the commands \u2018Y\u2019, \u2018G\u2019, and \u2018B\u2019 to the Arduino. The LED color should change to Red, Green and Blue respectively if everything is correct. After testing, close the Serial Monitor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important"),": Don\u2019t proceed to the next step until you have closed it."),(0,a.kt)("h2",{id:"step-3-software-setup"},"Step 3: Software Setup"),(0,a.kt)("p",null,"Download and install Python (either version 2 or 3). Python might already be installed on your computer. Type python --version to check if you have Python version 2 or 3 installed. To use this program, you need the following Python packages installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pylsl"),": use ",(0,a.kt)("inlineCode",{parentName:"li"},"python -m pip install pylsl")," from the Python folder in the command line to install it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"serial"),": use ",(0,a.kt)("inlineCode",{parentName:"li"},"python -m pip install serial")," to install it.")),(0,a.kt)("h2",{id:"step-4-stream-data-using-the-gui"},"Step 4: Stream data using the GUI"),(0,a.kt)("p",null,"Follow the Networking ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openbci.com/docs/Software/OpenBCISoftware/GUIWidgets#networking"},"Tutorial")," to learn how to stream data using LSL from the GUI. For this project, you will need to stream the EMG data from Channels 1 and 2 using the Networking Widget. Your Networking settings should look as follows:"),(0,a.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/docs/assets/TutorialImages/EMG_Facial_GUI.png?raw=true",width:"70%"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important"),": Make sure your EMG widget is open before you start streaming."),(0,a.kt)("h2",{id:"step-5-using-a-python-script-to-send-data-to-the-arduino"},"Step 5: Using a Python Script to Send Data to the Arduino"),(0,a.kt)("p",null,"The Python script will search for the EMG data streams. Once it finds them it will read it and detect any spikes that correspond to the face muscle flexing. If a flex is detected and 10 milliseconds have passed since the last flex, it will send the corresponding letter \u2018R\u2019, \u2018Y\u2019 or \u2018B\u2019 depending on which gesture was detected.  The threshold for the time between flexes can be modified as needed to avoid debouncing."),(0,a.kt)("p",null,"Get the Python script from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Tutorials/tree/master/Facial_EMG_Multiple_LEDs"},"here")," by clicking on \u2018Raw\u2019 and copying it to a .py file in your Python folder. Once you\u2019re streaming data from the GUI, go to the folder that you stored the script in from your command line, and run it using ",(0,a.kt)("inlineCode",{parentName:"p"},"python.exe <script_name>.py")),(0,a.kt)("p",null,"Hold the breadboard with LEDs towards your face in a dark environment and check how the color changes when you smile and frown. By modifying the time_thres and flex_thres parameters in the code you can adjust the time to wait between flexes and the flex strength to your needs."),(0,a.kt)("p",null,"Try it out and send us a video of your final prototype!"))}u.isMDXComponent=!0}}]);