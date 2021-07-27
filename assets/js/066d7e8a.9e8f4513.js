"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||o;return n?a.createElement(g,r(r({ref:t},h),{},{components:n})):a.createElement(g,r({ref:t},h))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15774:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>h,default:()=>c});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r=["components"],s={id:"GUIWidgets",title:"GUI Widget Guide"},l=void 0,d={unversionedId:"Software/OpenBCISoftware/GUIWidgets",id:"Software/OpenBCISoftware/GUIWidgets",isDocsHomePage:!1,title:"GUI Widget Guide",description:"What is a GUI Widget?",source:"@site/docs/Software/OpenBCISoftware/02_GUI_Widget_Guide.md",sourceDirName:"Software/OpenBCISoftware",slug:"/Software/OpenBCISoftware/GUIWidgets",permalink:"/Documentation/Software/OpenBCISoftware/GUIWidgets",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/websitev2/docs/Software/OpenBCISoftware/02_GUI_Widget_Guide.md",version:"current",lastUpdatedBy:"Richard Waltman",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:2,frontMatter:{id:"GUIWidgets",title:"GUI Widget Guide"},sidebar:"docs",previous:{title:"The OpenBCI GUI",permalink:"/Documentation/Software/OpenBCISoftware/GUIDocs"},next:{title:"MATLAB",permalink:"/Documentation/Software/CompatibleThirdPartySoftware/Matlab"}},h=[{value:"What is a GUI Widget?",id:"what-is-a-gui-widget",children:[]},{value:"Time Series",id:"time-series",children:[{value:"Hardware Settings",id:"hardware-settings",children:[]},{value:"Other Settings",id:"other-settings",children:[]}]},{value:"FFT Plot",id:"fft-plot",children:[]},{value:"Accelerometer",id:"accelerometer",children:[]},{value:"Head Plot",id:"head-plot",children:[{value:"Default Node Placement",id:"default-node-placement",children:[]},{value:"Polarity",id:"polarity",children:[]}]},{value:"Spectrogram Widget",id:"spectrogram-widget",children:[]},{value:"Focus Widget (Temporarily Deprecated)",id:"focus-widget-temporarily-deprecated",children:[]},{value:"Band Power",id:"band-power",children:[{value:"Types of Waves",id:"types-of-waves",children:[]}]},{value:"EMG",id:"emg",children:[{value:"Options",id:"options",children:[]}]},{value:"Networking",id:"networking",children:[{value:"Serial",id:"serial",children:[]},{value:"UDP",id:"udp",children:[]},{value:"LSL",id:"lsl",children:[]},{value:"OSC",id:"osc",children:[]}]},{value:"Playback Widget",id:"playback-widget",children:[]},{value:"Pulse Widget",id:"pulse-widget",children:[]},{value:"Custom Widget",id:"custom-widget",children:[{value:"Step 1 - Duplicate the W_template.pde file &amp; rename",id:"step-1---duplicate-the-w_templatepde-file--rename",children:[]},{value:"Step 2 - Add your new widget to the widgetManager.pde file",id:"step-2---add-your-new-widget-to-the-widgetmanagerpde-file",children:[]},{value:"Step 3 - Add dropdowns to control your widget, if needed",id:"step-3---add-dropdowns-to-control-your-widget-if-needed",children:[]},{value:"Step 4 - Design your custom widget",id:"step-4---design-your-custom-widget",children:[]},{value:"Step 5 - Add any dropdown settings to SessionSettings.pde",id:"step-5---add-any-dropdown-settings-to-sessionsettingspde",children:[]},{value:"Step 6 - Initial Testing",id:"step-6---initial-testing",children:[]},{value:"Step 7 - Share your custom widget with the world!",id:"step-7---share-your-custom-widget-with-the-world",children:[]}]}],p={toc:h};function c(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-a-gui-widget"},"What is a GUI Widget?"),(0,o.kt)("p",null,"GUI widgets are the mini tools that fit into the OpenBCI GUI\u2019s interface panes. Examples of GUI widgets include the Time Series, the FFT widget, the Networking widget, and so on. In the upper left-hand corner of every widget, there is a dropdown menu that lists all of the available widgets. If you click the dropdown and select a new widget from the dropdown, it will replace the current widget in that window. You can rearrange the layout of the widgets by clicking the \u201cLayout\u201d button in the upper right-hand side of the GUI."),(0,o.kt)("p",null,"The OpenBCI GUI software is compatible with MacOS, Windows 10, and Linux. Download the stand-alone GUI directly from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_GUI/releases"},"OpenBCI GitHub")),(0,o.kt)("h2",{id:"time-series"},"Time Series"),(0,o.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_TimeSeries.jpg?raw=true",width:"50%"}),(0,o.kt)("p",null,"The time series is the main widget for displaying biosensing data. It processes and displays the electrophysiological signal in real-time, with each graph representing the voltage detected at one point in time by an electrode."),(0,o.kt)("p",null,"It measures the absolute amplitude of the signal in voltage, in units of \u03bcVrms (microvolts, root mean squared)."),(0,o.kt)("p",null,"Each Ultracortex comes with wires that are color-coded to match the GUI, which can be a useful way of keeping track of which electrode maps to which channel."),(0,o.kt)("h3",{id:"hardware-settings"},"Hardware Settings"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(11736).Z})),(0,o.kt)("p",null,"For Cyton users, clicking the Hardware Settings button opens a menu that allows you to fine-tune the PGA Gain, Bias, and other hardware settings for each channel. After updating these settings, the channel will be highlighted in blue to show that there are unapplied settings. Next, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Send")," to send the updated settings to the board. Then, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Time Series")," button again to view the data."),(0,o.kt)("p",null,"Starting with GUI v5.0.2, all ADS1299 boards (Cyton, Cyton+Daisy) will use a dynamic scaler. This ensures that the scale factor, set in the Hardware Settings view, is always in sync with the numbers shown on user interface displays and recordings. Also, users will need to stop the data stream in order to access the Hardware Settings UI inside the Time Series Widget."),(0,o.kt)("h3",{id:"other-settings"},"Other Settings"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Channel Buttons"),": These buttons represent each connected electrode channel. You can toggle them on/off to control whether or not you want to collect data from that electrode."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"View Settings"),":"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Vertical Scale")," \u2014 Controls the range of \u03bcV displayed in the time series.\nNote: Set to auto to avoid chopping off data and showing good peaks and troughs. Fine-tune as necessary."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Window")," \u2014 Controls the amount of time that is shown in the series."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Railed/Near Railed Warnings"),":\nThese warnings show that there is no or poor signal and that you need to check the electrodes to ensure that they are making good contact with your body."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Impedance Check"),":\nSends a test current down the pin to check impedance. Information is given in k\u03a9.\nNote: Data will stop streaming automatically for the duration of the check."),(0,o.kt)("h2",{id:"fft-plot"},"FFT Plot"),(0,o.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_FTT.jpg?raw=true",width:"50%"}),(0,o.kt)("p",null,"This is a standard data visualization feature of biosensing tools. The x-axis displays various frequencies, and the y-axis shows each frequency\u2019s respective amplitudes in \u03bcV. These amplitudes are displayed logarithmically by default \u2014 a recommended setting \u2014 but you can alter this in the log/ln dropdown."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: Each color in the FFT Plot is color-coded to match the channels in the time series.")),(0,o.kt)("h2",{id:"accelerometer"},"Accelerometer"),(0,o.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_Accel.jpg?raw=true",width:"50%"}),(0,o.kt)("p",null,"Each OpenBCI board is fitted with a three-axis accelerometer, the data from which is streamed to this widget. This accelerometer measures the acceleration of the board itself on an XYZ-axis."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Axis Graph"),": Displays relative XYZ-acceleration at the current moment visually on a graph"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Timeline"),": Displays relative XYZ accelerations over time, color-coded by axis."),(0,o.kt)("h2",{id:"head-plot"},"Head Plot"),(0,o.kt)("p",null,"The head plot displays which regions of the head are experiencing the most activity. The deeper the red in a region, the more brain activity there is occurring in that region. Contour lines are also shown to connect various regions of similar activity levels."),(0,o.kt)("p",null,"Each number on the diagram corresponds to an electrode channel displayed in the time series widget. These numbers correspond with the suggested assembly for the Ultracortex Mark IV. However, each can be dragged to different locations for custom configurations."),(0,o.kt)("h3",{id:"default-node-placement"},"Default Node Placement"),(0,o.kt)("p",null,"Based off of 10-20 model"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"#"),(0,o.kt)("th",{parentName:"tr",align:null},"10-20 Node"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Fp1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"Fp2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"C3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"C4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},"P7/T5","*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"6"),(0,o.kt)("td",{parentName:"tr",align:null},"P8/T6","*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"7"),(0,o.kt)("td",{parentName:"tr",align:null},"O1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"8"),(0,o.kt)("td",{parentName:"tr",align:null},"O2")))),(0,o.kt)("p",null,"*"," P7 and P8 are the new terminologies for nodes T5 and T6"),(0,o.kt)("h3",{id:"polarity"},"Polarity"),(0,o.kt)("p",null,'When compared to a reference, the pin inputs can produce a positive or negative value. Choosing "+/-" will display the true value as measured from the reference. So if the voltage is measured as lower than the reference, your value will appear negative (or blue), and if the voltage is measured to be higher the value will be positive.'),(0,o.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_Headplot_both.jpg?raw=true",width:"50%"}),(0,o.kt)("p",null,'Alternatively, "+" will display only an absolute value, without regard to whether the signal was positive or negative.'),(0,o.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_Headplot_pos.jpg?raw=true",width:"50%"}),(0,o.kt)("h2",{id:"spectrogram-widget"},"Spectrogram Widget"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GUI v5 Screenshot with Spectrogram Labeled",src:n(42549).Z})),(0,o.kt)("p",null,'This widget contains a dual spectrogram display which allows users to see changes in FFT data over time. In the above screenshot, you can see GUI synthetic data being plotted in the Spectrogram widget, and this can be confirmed by counting the "peaks" in the TimeSeries data for each channel. Also, you can see the FFT widget is open and has been labeled. This allows us to see and confirm the data that is in the dual spectrogram display.'),(0,o.kt)("p",null,"The channel selector in this widget has two rows. The top row selects channels to include in the top spectrogram, and the bottom row selects channels for the lower spectrogram. By default, this widget will be setup to compare Left hemisphere vs Right hemisphere."),(0,o.kt)("p",null,'The "Max Freq." dropdown controls the maximum frequency to display. The "Samples" dropdown controls how fast data is fed to the graph (1Hz == Once per second). The "Log/Lin" dropdown toggles the color gradient to use on both spectrograms. On the right of the Spectrogram widget, you will see a thick line to display the current color gradient.'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Important: The data/graphs displayed in this widget are an approximation, and should not be used in any serious contexts or diagnosis.")),(0,o.kt)("h2",{id:"focus-widget-temporarily-deprecated"},"Focus Widget (Temporarily Deprecated)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Starting with GUI v5.0.0, this feature is temporarily deprecated until a more reliable and research-based Focus algorithm is implemented. If you would still like to use this widget, you can download and run ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/OpenBCI/OpenBCI_GUI/releases/tag/v4.2.0"},"GUI v4.2.0"),".")),(0,o.kt)("p",null,"The widget recognizes a focused mental state by looking at alpha and beta wave levels on channels 1 & 2. It is based on research supporting focused states aligning with alpha levels between 0.7-2.0 \u03bcV, and the beta levels between 0.0-0.7 \u03bcV. If your data is outside of this ratio, the algorithm states that you are not focused."),(0,o.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI_Focus.jpg?raw=true",width:"50%"}),(0,o.kt)("p",null,"*","For best results, try setting smooth to 0.98 in the FFT plot."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Key Press"),": When KeyPress is on, you can perform tasks and whenever you are focused, either your UP arrow or SPACE key will be pressed. Otherwise, it will be released."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"W_Focus Folder"),": This folder contains the original data the focus widget was based on and materials (including an example and instructions) regarding Arduino output."),(0,o.kt)("p",null,"The new Focus Widget is in progress and on schedule to be in the next version of the GUI at the end of May 2021.\nThere is also a ","[forum post]"," on this topic.\n(https:)"),(0,o.kt)("h2",{id:"band-power"},"Band Power"),(0,o.kt)("p",null,'The band power widget shows the relative voltages of the various brain wave categories. Each type of brain wave represents a subset of frequencies, which represent different states of activity. The widget is a great "at-a-glance" look into your brain\u2019s activity.'),(0,o.kt)("h3",{id:"types-of-waves"},"Types of Waves"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Wave"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Frequency (Hz)"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Gamma"),(0,o.kt)("td",{parentName:"tr",align:"center"},"32-100"),(0,o.kt)("td",{parentName:"tr",align:null},"Signifies heightened perception, learning and problem solving tasks, as well as alertness. It occurs when there is simueltaneous information processing from multiple parts of the brain.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Beta"),(0,o.kt)("td",{parentName:"tr",align:"center"},"13-32"),(0,o.kt)("td",{parentName:"tr",align:null},"Signfies normal alert consciousness and active thinking. It occurs when one is focusing on work, solving a problem, learning a new concept, or engaging in active conversation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Alpha"),(0,o.kt)("td",{parentName:"tr",align:"center"},"8-13"),(0,o.kt)("td",{parentName:"tr",align:null},"Signifies physical and mental relaxation. They occur when your eyes are closed, when one is being artistic, and during yoga.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Theta"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4-8"),(0,o.kt)("td",{parentName:"tr",align:null},"Signifies deep relaxation, creativity, insight, reduced consciousness. They are picked up during day dreaming and deep meditation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Delta"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.5-4"),(0,o.kt)("td",{parentName:"tr",align:null},"Signifies sleep, dreaming. Occurs when we enjoy restorative, deep, dreamless sleep.")))),(0,o.kt)("h2",{id:"emg"},"EMG"),(0,o.kt)("p",null,"In a nutshell, we are trying to map the current flex of a muscle into the \u201ccomfortable flex range\u201d of said muscle, and then represent that as a decimal between 0 and 1. In theory, if you relax, the value will be 0, and if you flex, the value will go to 1."),(0,o.kt)("p",null,"The current EMG strength is a collection of raw voltage values averaged (or smoothed) over a known window of time. The bigger the window you are averaging over, the smoother the data. We establish an upper threshold (the outer dark blue circle of the circular visualizer) and a lower threshold (the inner dark blue circle) for the constantly updating \u201ccomfortable EMG range.\u201d Then we\u2019re mapping the current EMG (the filled circle that matches the color of the channel) value between the upper and lower thresholds."),(0,o.kt)("p",null,"This pseudo-analog mapped value is represented more clearly in the bar graph off to the right of each channel\u2019s circular visualizer. The upper threshold is constantly creeping downwards and the lower threshold is constantly creeping upwards until they get the Min \u0394\u03bcV away from one another. This ensures that the overall system never creates an upper/lower flex range that is too big to influence with a muscle flex."),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("p",null,"The drop-downs of the widget are designed to allow you to tweak the various parameters of this relationship. There are 4 dropdowns used to control certain parameters:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Smooth"),": This is the size of the window. If we set this value at the smallest setting of 0.01 seconds (ie., lowering the smooth value), our data will be very jittery but responsive. Alternatively, if we increase the smooth and set our window to 2.0 seconds, the output will be very smooth but much less responsive."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u03bcV Limit"),": This is a cutoff point for an allowable \u03bcV value in any individual data block. Any \u03bcV values above this number will be chopped off and set to this upper \u03bcV limit. This is to prevent erratic blips in the data from substantially distorting the average. Sometimes dropped packets and rapid body movements can create large spikes that don\u2019t correlate to muscle activity. This helps account for those issues."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Creep"),": This value indicates how quickly the upper \u03bcV limit creeps downward and how quickly the lower limit creeps upward. Notice that by adjusting this value, the upper threshold and lower threshold rings will approach each other more quickly. We generally recommend this to be slow. If this is too fast and we wait too long between muscle activations, the upper threshold will have crept closer to the lower threshold and the system will be hypersensitive."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Min \u0394\u03bcV"),": This value sets the minimum voltage range between the upper threshold and the lower threshold. The upper threshold and lower threshold cannot get any closer than this. By making this value bigger, you will have to flex harder to go from 0 to 100% flex, after the thresholds have crept as close as they will get to one another (aka Min \u0394\u03bcV)."),(0,o.kt)("h2",{id:"networking"},"Networking"),(0,o.kt)("p",null,"The networking widget allows the streaming of data to other apps. Keep scrolling for an explanation of the four data types: Serial, UDP, OSC, and LSL. To see how it can be used with our different apps, check out our ",(0,o.kt)("a",{parentName:"p",href:"/Documentation/Software/SoftwareLanding"},"Software page"),"."),(0,o.kt)("p",null,"With the networking widget, you can send Time Series, FFT, EMG, Band Power, Accel/Aux, and Pulse data. The Accel/Aux option allows you to send Accelerometer, Analog Read, or Digital Read data. Make sure to have the corresponding widget open, depending on the data type you would like to stream. ",(0,o.kt)("strong",{parentName:"p"},"Full details of all possible outputs can be found at the ",(0,o.kt)("a",{parentName:"strong",href:"https://docs.google.com/document/d/e/2PACX-1vR_4DXPTh1nuiOwWKwIZN3NkGP3kRwpP4Hu6fQmy3jRAOaydOuEI1jket6V4V6PG4yIG15H1N7oFfdV/pub"},"GUI Networking Guide"),".")),(0,o.kt)("h3",{id:"serial"},"Serial"),(0,o.kt)("p",null,"Able to stream one data type. The data is sent sequentially, bit by bit, in consecutive packets. Serial is the main networking protocol that can be used when using OpenBCI with Arduino."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Baud Rate"),": The rate of data transfer in bits per second. This should correspond with the chosen baud rate for the receiving application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Port"),': The port of the receiving device. For Arduino, for example, this will likely be a "USB modem" with a serial number attached.'),(0,o.kt)("h3",{id:"udp"},"UDP"),(0,o.kt)("p",null,"User Datagram Protocol is used primarily for establishing low-latency and loss-tolerating connections between applications on the internet. The UDP protocol allows for up to three different data sets to be sent to three different applications."),(0,o.kt)("h3",{id:"lsl"},"LSL"),(0,o.kt)("p",null,"Lab Streaming Layer is a system for synchronizing streaming data for live analysis or recording. LSL is a good way to send your OpenBCI stream to applications that can record or manipulate the data, such as ",(0,o.kt)("a",{parentName:"p",href:"/Documentation/Software/CompatibleThirdPartySoftware/Matlab"},"Matlab"),"."),(0,o.kt)("p",null,"FFT data can now be sent over LSL, starting with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_GUI/releases"},"GUI v.4.1.5-beta.3.")),(0,o.kt)("p",null,"As of GUI v5.0.5, the ",(0,o.kt)("inlineCode",{parentName:"p"},"# Chan")," textfield has been removed.As an example, here's a screenshot streaming 3 data types to Python:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gui windows override high dpi scaling",src:n(53657).Z})),(0,o.kt)("p",null,"You can find the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_GUI/tree/master/Networking-Test-Kit"},"example Python script here in the GUI Networking Test Kit"),". Note: You will need to do ",(0,o.kt)("inlineCode",{parentName:"p"},"pip install pylsl")," if the dependency is not already installed."),(0,o.kt)("h3",{id:"osc"},"OSC"),(0,o.kt)("p",null,"Open Sound Control is a protocol for networking sound synthesizers, computers, and other multimedia devices for purposes such as musical performance or show control. OSC's advantages include interoperability, accuracy, flexibility, and enhanced organization and documentation."),(0,o.kt)("p",null,"OSC works with MaxMSP, PureData, and Resolume."),(0,o.kt)("h2",{id:"playback-widget"},"Playback Widget"),(0,o.kt)("p",null,"This Widget only appears when in playback mode. It allows you to select a different playback without having to \u201cStop System\u201d. There is a button in the top right of the Widget that allows you to select any OpenBCI playback file (.txt or .csv). Selecting other types of files may cause an error."),(0,o.kt)("h2",{id:"pulse-widget"},"Pulse Widget"),(0,o.kt)("p",null,"This widget will only show for Cyton in Live mode. It uses the Analog Read mode to get data from the pin marked D11 on the Cyton. Using this data, the widget will calculate the Beats per minute (BPM) and the Interbeat Interval (IBI). When using the Networking widget, this data type will send BPM, Raw Signal, and IBI."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"custom-widget"},"Custom Widget"),(0,o.kt)("p",null,"This tutorial shows you how to create custom widgets for the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_GUI"},"OpenBCI GUI"),". In just a few easy steps, you can have your mini-applications added to the dropdown menus of the OpenBCI GUI for running specialized applications in real-time. These widgets can tap directly into the main data structure of the OpenBCI GUI, so you can experiment with brain waves and other biodata right in the GUI."),(0,o.kt)("h4",{id:"helpful-background-skills"},"Helpful Background Skills"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Knowledge of ",(0,o.kt)("a",{parentName:"li",href:"https://processing.org/"},"Processing")," or Java-based programming"),(0,o.kt)("li",{parentName:"ul"},"Experience with ",(0,o.kt)("a",{parentName:"li",href:"/Documentation/Software/OpenBCISoftware/GUIDocs#running-the-openbci-gui-from-the-processing-ide"},"running the OpenBCI GUI from the Processing IDE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenBCI/OpenBCI_GUI/wiki/Developer-Setup"},"Developer Setup using Visual Studio Code or Processing")),(0,o.kt)("li",{parentName:"ul"},"Alternatively, you can edit using ",(0,o.kt)("a",{parentName:"li",href:"https://atom.io"},"Atom with Processing packages"))),(0,o.kt)("h3",{id:"step-1---duplicate-the-w_templatepde-file--rename"},"Step 1 - Duplicate the W_template.pde file & rename"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_GUI/blob/master/OpenBCI_GUI/W_Template.pde"},"W_template.pde")," file is designed to serve as a simple starting point for creating your widgets. You'll want to start by duplicating this file and renaming it to something like W",(0,o.kt)("em",{parentName:"p"},'myNewWidget.pde, where "myNewWidget" is something relevant to the purpose of your new widget! Try to adhere to the naming convention and put ',"*","*","W"),"*","*"," in front to make sure that all of your widgets end up next to one another in your project directory."),(0,o.kt)("p",null,"You need to remember to rename the class to make sure that it is unique and not the same class as W_template.pde. The first uncommented line of your file should read:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nclass W_myNewWidget extends Widget {\n\n")),(0,o.kt)("h3",{id:"step-2---add-your-new-widget-to-the-widgetmanagerpde-file"},"Step 2 - Add your new widget to the widgetManager.pde file"),(0,o.kt)("p",null,"Before adding any fancy code that grabs ahold of local data structures, make sure you add your new widget to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_GUI/blob/master/OpenBCI_GUI/WidgetManager.pde"},"widgetManager.pde")," file. By doing this, you make sure your new widget is added to the dropdown menu of each widget. This is helpful because now you can see what you are doing as you add graphics to your widget as you continue to develop it."),(0,o.kt)("p",null,"Follow the protocol instantiating your widget globally by adding it here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n// MAKE YOUR WIDGET GLOBALLY\nW_timeSeries w_timeSeries;\nW_fft w_fft;\nW_networking w_networking;\nW_BandPower w_bandPower;\nW_accelerometer w_accelerometer;\nW_ganglionImpedance w_ganglionImpedance;\nW_headPlot w_headPlot;\nW_template w_template1;\nW_emg w_emg;\nW_openBionics w_openbionics;\nW_Focus w_focus;\nW_PulseSensor w_pulsesensor;\nW_myNewWidget w_myNewWidget;\n\n")),(0,o.kt)("p",null,'Then, make sure to "setup" your widget and add it to the array of all widgets by mimicking the setup code lines'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\n  ...\n\n  w_networking = new W_networking(_this);\n  w_networking.setTitle("Networking");\n  addWidget(w_networking, w);\n\n  w_myNewWidget = new W_myNewWidget(_this);\n  w_myNewWidget.setTitle("My New Widget");\n  addWidget(w_myNewWidget, w);\n\n  w_bandPower = new W_BandPower(_this);\n  w_bandPower.setTitle("Band Power");\n  addWidget(w_bandPower, w);\n\n  ...\n\n')),(0,o.kt)("h3",{id:"step-3---add-dropdowns-to-control-your-widget-if-needed"},"Step 3 - Add dropdowns to control your widget, if needed"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:"),' Before you can compile the GUI, you\'ll need to rename the global functions at the bottom of your W_myNewWidget.pde file so that they are different from the global functions at the bottom of W_template.pde. While running the GUI, these functions are automatically activated when the corresponding dropdown is activated in the nav of your widget. Make sure that string (ex: "Dropdown1") in the ',(0,o.kt)("inlineCode",{parentName:"p"},"addDropdown()"),' function of the constructor is the same string as the name of your corresponding global function at the bottom of your .pde file. The index of the menu item selected is what is passed into the function (ie "int n").'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\n//These functions need to be global! These functions are activated when an item from the corresponding dropdown is selected\n\nvoid Dropdown1(int n){\n  println("Item " + (n+1) + " selected from Dropdown 1");\n  if(n==0){\n    //do this\n  } else if(n==1){\n    //do this instead\n  }\n\n  closeAllDropdowns(); // do this at the end of all widget-activated functions to ensure proper widget interactivity ... we want to make sure a click makes the menu close\n}\n\nvoid Dropdown2(int n){\n  println("Item " + (n+1) + " selected from Dropdown 2");\n  closeAllDropdowns();\n}\n\nvoid Dropdown3(int n){\n  println("Item " + (n+1) + " selected from Dropdown 3");\n  closeAllDropdowns();\n}\n\n')),(0,o.kt)("p",null,"Run the GUI, and make sure you can see your new widget in the widget dropdown menu in the upper left corner of all widgets. If you don't see it, make sure you did the above steps properly."),(0,o.kt)("h3",{id:"step-4---design-your-custom-widget"},"Step 4 - Design your custom widget"),(0,o.kt)("p",null,"Explore how the existing widgets are accessing data structures internal to the GUI, and see if you can make something cool!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Some cool things to know:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every widget has ",(0,o.kt)("inlineCode",{parentName:"li"},"x, y, w, h")," variables that correspond to the left edge of the widget (horizontal pixel location), the top edge of the widget (vertical pixel location), the # of pixels wide, and the # of pixels tall, respectively. These variables update automatically when the screen is resized or when the widgets are cycled through the layout containers. When adding graphics to your widget, do everything based on these variables to ensure responsiveness."),(0,o.kt)("li",{parentName:"ul"},"Aside from setting up your widget in the widgetManager.pde file, all of your code can live inside of the W_myNewWidget.pde file (if done correctly)."),(0,o.kt)("li",{parentName:"ul"},"To see how to access global data structures like FFT data and Time Series data, check out how the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenBCI/OpenBCI_GUI/tree/master/OpenBCI_GUI"},"other widgets")," are accessing data in their ",(0,o.kt)("inlineCode",{parentName:"li"},"update()")," functions"),(0,o.kt)("li",{parentName:"ul"},"One way that we add features such as dropdowns and radio buttons to our widgets is the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sojamo/controlp5"},"ControlP5 Library"),". This library has been modified extensively from the original to improve functionality in the GUI."),(0,o.kt)("li",{parentName:"ul"},"To learn more about how widgets work, look at the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenBCI/OpenBCI_GUI/blob/master/OpenBCI_GUI/Widget.pde"},"widget.pde")," file. That said, I don't recommend changing anything!")),(0,o.kt)("h3",{id:"step-5---add-any-dropdown-settings-to-sessionsettingspde"},"Step 5 - Add any dropdown settings to SessionSettings.pde"),(0,o.kt)("p",null,"As of GUI v4, the app attempts to auto-save and auto-load user settings. Otherwise, users would need to reconfigure the GUI every time! So, if you use dropdowns in your new widget, you need to include those settings in SoftwareSettings.pde in save() and load()."),(0,o.kt)("p",null,"There are a few details at the top of SessionSettings.pde that should be helpful. Just follow the style that is already in place to save and load from ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON"},"JSON"),". Skim through the code in save() or load(), you will see settings from some of your favorite widgets. Use this as your example!"),(0,o.kt)("h3",{id:"step-6---initial-testing"},"Step 6 - Initial Testing"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Debugging"),"\nIf you've added any ",(0,o.kt)("inlineCode",{parentName:"p"},"println()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"verbosePrint()")," in your widget, you can use the Console Log feature to see these messages, or just look at the console in your favorite IDE."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Screen Resized"),"\nSome objects may need to be resized or re-positioned when the user changes the GUI screen size. This is why the widget class has the ",(0,o.kt)("inlineCode",{parentName:"p"},"screenResized()")," method. Something not displaying right after the GUI is resized? This is where you need to add code. Typically, object x, y, width, and height are declared when the widget is instantiated, and again in ",(0,o.kt)("inlineCode",{parentName:"p"},"screenResized()")," using relative positioning."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Settings"),"\nTo test that everything is working, you should see the data in a settings JSON file for each data mode in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Documents/OpenBCI_GUI/Settings/")," folder. JSON files can be viewed as text. Confirm that your new JSON object and data are being written to file. Finally, confirm that the settings work properly when configuring the widget, saving, and loading."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"GUI Crash"),"\nOne of the most common ways to crash the GUI with a new widget is drawing ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," data, or some other error related to ",(0,o.kt)("inlineCode",{parentName:"p"},"draw()"),". Another common crash is an ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception"),", which will print to the console of Atom, VSCode, or Processing IDE."),(0,o.kt)("h3",{id:"step-7---share-your-custom-widget-with-the-world"},"Step 7 - Share your custom widget with the world!"),(0,o.kt)("p",null,"If you make a functional widget that you think others could benefit from, please share it with the world by submitting a pull request to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_GUI"},"OpenBCI_GUI repo"),"!"))}c.isMDXComponent=!0},11736:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/GUI_5.0.2-HardwareSettingsController_Screenshot-11c3f28bd64f5204c344a03aa432ce4e.png"},42549:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/GUIv5_SpectrogramScreenshot_Labeled-69fd11cd22bf0886c0c24c319e8ad2c2.png"},53657:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gui_lslStreaming_Example-d7a84f9ff753f1131a4f685d0fc7e329.png"}}]);