"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4695],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(i),u=r,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||a;return i?n.createElement(m,o(o({ref:t},d),{},{components:i})):n.createElement(m,o({ref:t},d))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},86191:(e,t,i)=>{i.r(t),i.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>d,default:()=>c});var n=i(22122),r=i(19756),a=(i(67294),i(3905)),o=["components"],s={id:"WiFiAPI",title:"OpenBCI WiFi Shield API"},l=void 0,p={unversionedId:"ThirdParty/WiFiShield/WiFiAPI",id:"ThirdParty/WiFiShield/WiFiAPI",isDocsHomePage:!1,title:"OpenBCI WiFi Shield API",description:"The OpenBCI Wifi Shield seeks to offer a plug and play Wifi solution for the OpenBCI Cyton and Ganglion.",source:"@site/docs/ThirdParty/WiFiShield/03-OpenBCI_Wifi_Server.md",sourceDirName:"ThirdParty/WiFiShield",slug:"/ThirdParty/WiFiShield/WiFiAPI",permalink:"/ThirdParty/WiFiShield/WiFiAPI",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/websitev2/docs/ThirdParty/WiFiShield/03-OpenBCI_Wifi_Server.md",version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:3,frontMatter:{id:"WiFiAPI",title:"OpenBCI WiFi Shield API"},sidebar:"docs",previous:{title:"Wifi Shield Programming Tutorial",permalink:"/ThirdParty/WiFiShield/WiFiProgam"},next:{title:"OpenBCI Wifi SDK",permalink:"/ThirdParty/WiFiShield/WiFiSDK"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Get Wifi Shield on Local Wireless Network",id:"get-wifi-shield-on-local-wireless-network",children:[]},{value:"Get IP Address of Wifi Shield",id:"get-ip-address-of-wifi-shield",children:[]},{value:"Open a TCP Socket on Host Computer",id:"open-a-tcp-socket-on-host-computer",children:[{value:"Raw Output Mode",id:"raw-output-mode",children:[]},{value:"JSON Output Mode",id:"json-output-mode",children:[]}]},{value:"OpenBCI WiFi Shield HTTP Rest Server",id:"openbci-wifi-shield-http-rest-server",children:[{value:"Send <code>/tcp</code> http request for TCP configuration",id:"send-tcp-http-request-for-tcp-configuration",children:[]},{value:"Send <code>/mqtt</code> http request for MQTT configuration",id:"send-mqtt-http-request-for-mqtt-configuration",children:[]},{value:"Send <code>/command</code> http requests for control",id:"send-command-http-requests-for-control",children:[]},{value:"Send <code>/latency</code> http requests for tuning",id:"send-latency-http-requests-for-tuning",children:[]}]},{value:"Parsing Data from Wifi Shield",id:"parsing-data-from-wifi-shield",children:[{value:"<code>raw</code> Byte Stream Format",id:"raw-byte-stream-format",children:[]},{value:"JSON format",id:"json-format",children:[]}]}],h={toc:d};function c(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The OpenBCI Wifi Shield seeks to offer a plug and play Wifi solution for the OpenBCI Cyton and Ganglion."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"One of the coolest parts of the WiFi Shield is its HTTP web server. For developers looking to get data from OpenBCI with a WiFi Shield, these HTTP commands will allow you to stream data to your applications over TCP or MQTT."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Follow the ",(0,a.kt)("a",{parentName:"p",href:"/GettingStarted/Boards/WiFiGS#wifi-getting-started-guide-prerequisites"},"WiFi Getting Started Guide")," to get your WiFi Shield on your Wireless Network."),(0,a.kt)("h2",{id:"get-wifi-shield-on-local-wireless-network"},"Get Wifi Shield on Local Wireless Network"),(0,a.kt)("p",null,"Be sure that your WiFi Shield is on your local network."),(0,a.kt)("p",null,"The steps for connecting to the Wifi Shield and streaming over TCP:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get IP Address of the Wifi Shield"),(0,a.kt)("li",{parentName:"ol"},"Open a TCP Socket on Host Computer"),(0,a.kt)("li",{parentName:"ol"},"Send ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"li"},"/tcp")," http request with open socket IP/Port number, can include options (i.e. output format of JSON or RAW output, use delimiters between packets, adjust latency)"),(0,a.kt)("li",{parentName:"ol"},"Send ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,a.kt)("inlineCode",{parentName:"li"},"/stream/start")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,a.kt)("inlineCode",{parentName:"li"},"/stream/stop"))),(0,a.kt)("p",null,"The steps for connecting to the Wifi Shield and streaming over MQTT:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Find IP Address of Wifi Shield"),(0,a.kt)("li",{parentName:"ol"},"Set up MQTT broker"),(0,a.kt)("li",{parentName:"ol"},"Send ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"li"},"/mqtt")," http request with broker address with optional username and password"),(0,a.kt)("li",{parentName:"ol"},"Send ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,a.kt)("inlineCode",{parentName:"li"},"/stream/start")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,a.kt)("inlineCode",{parentName:"li"},"/stream/stop"))),(0,a.kt)("h2",{id:"get-ip-address-of-wifi-shield"},"Get IP Address of Wifi Shield"),(0,a.kt)("p",null,"To programmatically discover WiFi Shields on your local network use ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol"},"Simple Service Discovery Protocol")," (SSDP) to find the device on your local network."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aj-ptw/OpenBCI_NodeJS/blob/wifi/examples/getStreamingWifi/getStreamingWifi.js"},"Node.js OpenBCI WiFi Driver")," will implement SSDP for you."),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"/GettingStarted/Boards/WiFiGS#get-wifi-shield-ip-address"},"OpenBCI WiFi GUI")," which will use the ",(0,a.kt)("a",{parentName:"p",href:"/Deprecated/Hub#scan"},"OpenBCI Electron Hub")," to find WiFi Shields IP Address. ",(0,a.kt)("strong",{parentName:"p"},"THE OPENBCI_HUB HAS BEEN DEPRECATED, TO ACCESS THIS FEATURE USE ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/OpenBCI/OpenBCI_GUI/releases/tag/v4.2.0"},"GUI V4.2.0"),".")," You can also get the IP address in GUI v5 by selecting the WiFi shield from the list. Depending on your network configuration, it may not show automatically."),(0,a.kt)("p",null,"Use a graphical user interface ",(0,a.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/lanscan/id472226235?mt=12"},"Mac - Lan Scan")),(0,a.kt)("p",null,"We are still hashing out the best ways to discover the Wifi shield on the networks (home vs. enterprise and beyond) so ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_WIFI/issues/8"},"please contribute ides if you have any on this github issue")," and we can add it in! ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_WIFI/issues/9"},"Wifi Direct Feature Request (researcher frequently requested feature)")),(0,a.kt)("h2",{id:"open-a-tcp-socket-on-host-computer"},"Open a TCP Socket on Host Computer"),(0,a.kt)("p",null,"In order to get low latency high-reliability wireless data transmission we will open a TCP socket on your host Computer. The Wifi Shield will stream data to this socket."),(0,a.kt)("h3",{id:"raw-output-mode"},"Raw Output Mode"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"raw")," output mode the data format follows the OpenBCI ",(0,a.kt)("a",{parentName:"p",href:"/Cyton/CytonDataFormat#binary-format"},"33byte Binary Data Format"),". Even the Ganglion over WiFi Shield will send in the 33byte with the first four channels containing data and the upper four channels are all zeros."),(0,a.kt)("h3",{id:"json-output-mode"},"JSON Output Mode"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," output mode, the WiFi Shield will convert raw data into nano volts. As of ",(0,a.kt)("inlineCode",{parentName:"p"},"v3.0.0")," firmware for Cyton and ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.0.0")," firmware for Ganglion, the gain for each channel will be sent to the WiFi Shield once at the first connection between devices, and once each time the Ganglion or Cyton receives a start of streaming command. The WiFi Shield will connect to an NTP server to get the time once, and the WiFi Shield will then send the data in JSON."),(0,a.kt)("p",null,"The JSON Adheres to the popular LSL stream format by default"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n{\n  "chunk": [\n    {"data": [<float>, ..., <float>],  "timestamp": <float> },\n    ...\n    {"data": [<float>, ..., <float>],  "timestamp": <float> }\n  ]\n}\n\n')),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Buffer of 5 samples. Each sample has 4 channels:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n[\n  { "data":[ 7056745022195285, -475495395375, 475495395375, -495395375], "timestamp": 1497479774194733},\n  { "data":[ 7056745022195285, -475495395375, 475495395375, -495395375], "timestamp": 1497479774195230},\n  { "data":[ 7056745022195285, -475495395375, 475495395375, -495395375], "timestamp": 1497479774195735},\n  { "data":[ 7056745022195285, -475495395375, 475495395375, -495395375], "timestamp": 1497479774196209},\n  { "data":[ 7056745022195285, -475495395375, 475495395375, -495395375], "timestamp": 1497479774196715}\n]\n\n')),(0,a.kt)("h2",{id:"openbci-wifi-shield-http-rest-server"},"OpenBCI WiFi Shield HTTP Rest Server"),(0,a.kt)("h3",{id:"send-tcp-http-request-for-tcp-configuration"},"Send ",(0,a.kt)("inlineCode",{parentName:"h3"},"/tcp")," http request for TCP configuration"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/pushtheworld/openbci-wifi-server/1.3.0"},"http server description")," swagger.io page as the single source of truth in regards to the OpenBCI Wifi Server. There are many options such as ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," mode for JSON or raw output, latency, delimiters and many more awesome options to help you easily process data in a driver."),(0,a.kt)("h3",{id:"send-mqtt-http-request-for-mqtt-configuration"},"Send ",(0,a.kt)("inlineCode",{parentName:"h3"},"/mqtt")," http request for MQTT configuration"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/pushtheworld/openbci-wifi-server/1.3.0"},"http server description")," swagger.io page as the single source of truth in regards to the OpenBCI Wifi Server. There are many options such as ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," mode for JSON or raw output, latency, delimiters and many more awesome options to help you easily process data in a driver."),(0,a.kt)("h3",{id:"send-command-http-requests-for-control"},"Send ",(0,a.kt)("inlineCode",{parentName:"h3"},"/command")," http requests for control"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/pushtheworld/openbci-wifi-server/1.3.0"},"http server description")," swagger.io page as the single source of truth in regards to the OpenBCI Wifi Server. To change the sample rate of the Cyton, please use the ",(0,a.kt)("inlineCode",{parentName:"p"},"~")," command as defined in the Cyton SDK docs."),(0,a.kt)("h3",{id:"send-latency-http-requests-for-tuning"},"Send ",(0,a.kt)("inlineCode",{parentName:"h3"},"/latency")," http requests for tuning"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/pushtheworld/openbci-wifi-server/1.3.0"},"http server description")," swagger.io page as the single source of truth in regards to the OpenBCI Wifi Server."),(0,a.kt)("p",null,"The time in micro seconds (us) between packet sends. The higher the OpenBCI sample rate, the higher the latency needed. Default is 1000us, minimum stable is 50us. For upper limit sample rates such as 4kHz/8kHz/16kHz, latency around 20ms seems to really stabilize the system.  "),(0,a.kt)("h2",{id:"parsing-data-from-wifi-shield"},"Parsing Data from Wifi Shield"),(0,a.kt)("p",null,"Data can be sent from the Wifi shield in two different formats: ",(0,a.kt)("inlineCode",{parentName:"p"},"raw")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON"),"."),(0,a.kt)("h3",{id:"raw-byte-stream-format"},(0,a.kt)("inlineCode",{parentName:"h3"},"raw")," Byte Stream Format"),(0,a.kt)("p",null,"The first byte to send is the control byte. For streaming data, that goes on the TCP socket, send ",(0,a.kt)("inlineCode",{parentName:"p"},"0xCX")," (where ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"0-F")," in hex) as the control byte. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenBCI_32bit_Library")," code base:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n/*  \n * @description Writes channel data and axisData array to serial port in\n *  the correct stream packet format.\n */\nvoid OpenBCI_32bit_Library::sendChannelDataWifi(void)  {\n\n    wifiStoreByte(OPENBCI_EOP_STND_ACCEL); // 0xC0 1 byte\n\n    wifiStoreByte(sampleCounter); // 1 byte\n\n    ADS_writeChannelDataWifi(); // 24 bytes\n\n    accelWriteAxisDataWifi(); // 6 bytes\n\n    wifiFlushBuffer(); // Flushes the buffer to the SPISlave ESP8266 device!\n\n    sampleCounter++;\n\n}\n\n")),(0,a.kt)("p",null,"This code writes 32 bytes of data in the correct format and therefore as soon as it arrives at the Wifi shield. The Wifi shield will convert the 32 byte packet to the standard 33 byte ",(0,a.kt)("a",{parentName:"p",href:"/Cyton/CytonDataFormat#binary-format"},"binary format")," by moving the control byte ",(0,a.kt)("inlineCode",{parentName:"p"},"0xCn"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"0-F")," (hex), to the stop position and add add ",(0,a.kt)("inlineCode",{parentName:"p"},"0xA0")," to the start position. This allows for a seamless integration with the tried and tested parsing systems already built for the Cyton.\n",(0,a.kt)("strong",{parentName:"p"},"Important")," if you want to only send ",(0,a.kt)("inlineCode",{parentName:"p"},"20")," bytes of data per packet, you still must send this ",(0,a.kt)("inlineCode",{parentName:"p"},"32")," bytes with the proper start and stop bytes."),(0,a.kt)("h3",{id:"json-format"},"JSON format"),(0,a.kt)("p",null,"Suggested options for ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," /tcp or ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," /mqtt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n{\n  "port": ..., // Enter your local server port\n  "ip": ..., // Enter your local ip address of server\n  "delimiter": true, // will place `\\r\\n` at end of each chunk\n  "latency": 20000, // Time to wait between packet sends in micro seconds.. i.e. latency here is 20ms\n  "sample_numbers": false, // Don\'t include sampleNumber in each sample\n  "timestamps": true // Include timestamps in each sample\n}\n\nNow when you start streaming data, you can simply look for `\\r\\n` in the incoming stream of data and each time you find it, you know you just got then end of packet and can parse everything before that `\\r\\n` as JSON.\n\n\n')))}c.isMDXComponent=!0}}]);