"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=o,g=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},57476:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>h});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i=["components"],l={id:"EEGSetup",title:"Setting up for EEG"},s=void 0,p={unversionedId:"GettingStarted/Biosensing-Setups/EEGSetup",id:"GettingStarted/Biosensing-Setups/EEGSetup",isDocsHomePage:!1,title:"Setting up for EEG",description:"This page will explain the most basic setup to process EEG Data using your OpenBCI board, using our gold cup electrodes.",source:"@site/docs/GettingStarted/Biosensing-Setups/01-EEG-Setup.md",sourceDirName:"GettingStarted/Biosensing-Setups",slug:"/GettingStarted/Biosensing-Setups/EEGSetup",permalink:"/GettingStarted/Biosensing-Setups/EEGSetup",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/websitev2/docs/GettingStarted/Biosensing-Setups/01-EEG-Setup.md",version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:1,frontMatter:{id:"EEGSetup",title:"Setting up for EEG"},sidebar:"docs",previous:{title:"WiFi Shield Getting Started Guide",permalink:"/GettingStarted/Boards/WiFiGS"},next:{title:"Setting up for ECG",permalink:"/GettingStarted/Biosensing-Setups/ECGSetup"}},c=[{value:"Related Headware",id:"related-headware",children:[]},{value:"What you will need",id:"what-you-will-need",children:[]},{value:"1. Connect your electrodes to OpenBCI",id:"1-connect-your-electrodes-to-openbci",children:[]},{value:"2. Connect your electrodes to your head and body",id:"2-connect-your-electrodes-to-your-head-and-body",children:[]},{value:"3. Launch the GUI and adjust your channel settings",id:"3-launch-the-gui-and-adjust-your-channel-settings",children:[]},{value:"4. Alpha brain waves (EEG)",id:"4-alpha-brain-waves-eeg",children:[]},{value:"Improving Signal Quality",id:"improving-signal-quality",children:[]}],d={toc:c};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page will explain the most basic setup to process EEG Data using your OpenBCI board, using our gold cup electrodes."),(0,r.kt)("h2",{id:"related-headware"},"Related Headware"),(0,r.kt)("p",null,"To learn more about specific OpenBCI Headware and how to set them up for EEG, follow the links below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AddOns/Headwear/HeadBand"},"Headband kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AddOns/Headwear/MarkIV"},"Ultracortex Mark IV")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AddOns/Headwear/MarkIII"},"Ultracortex Mark III")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AddOns/Headwear/ElectrodeCap"},"Electrode Cap"))),(0,r.kt)("h2",{id:"what-you-will-need"},"What you will need"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"What You Need",src:n(10911).Z})),(0,r.kt)("h4",{id:"necessary"},"Necessary:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/products/ten20-conductive-paste-8oz-jar"},"Ten20 conductive electrode paste")," (or other conductive electrode gel)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Cyton board, USB Dongle, and battery pack")," OR ",(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/ganglion-board"},"Ganglion Board")),(0,r.kt)("li",{parentName:"ul"},"x4 AA batteries"),(0,r.kt)("li",{parentName:"ul"},"x6 ",(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/openbci-gold-cup-electrodes?variant=9056028163"},"gold cup electrodes"))),(0,r.kt)("p",null,"Before applying ten20 paste on subjects with long hair, refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://www.aset.org/files/public/10-20_System_Demonstration.pdf"},"guide")," on parting the hair for 10-20 international standard electrode positions."),(0,r.kt)("p",null,"If you are using an OpenBCI electrode starter kit, use the following electrodes so as to be consistent with the GUI's color-coding protocol:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Black"),(0,r.kt)("li",{parentName:"ol"},"White"),(0,r.kt)("li",{parentName:"ol"},"Purple"),(0,r.kt)("li",{parentName:"ol"},"Green"),(0,r.kt)("li",{parentName:"ol"},"Blue"),(0,r.kt)("li",{parentName:"ol"},"Red")),(0,r.kt)("h4",{id:"optional"},"Optional:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Paper towels for cleaning excess Ten20 paste"),(0,r.kt)("li",{parentName:"ul"},"Medical tape (or other tape) for adding extra stability to electrodes"),(0,r.kt)("li",{parentName:"ul"},"Ear swabs for cleaning paste from electrodes, once you're finished")),(0,r.kt)("h2",{id:"1-connect-your-electrodes-to-openbci"},"1. Connect your electrodes to OpenBCI"),(0,r.kt)("p",null,"Connect the electrode wires to your Cyton board as shown below. The proper wire connections are shown in table form as well. You can see in the image below pins N1P through N8P on the Cyton. These correspond to the 8 channels available for data."),(0,r.kt)("p",null,"On the Ganglion you have pins 1 through 4, corresponding to Ganglion's 4 channels available for data. Please note, the four switches on the Ganglion should be set to ",(0,r.kt)("em",{parentName:"p"},"'DOWN'")," for EEG.\nExplanation in detail ",(0,r.kt)("a",{parentName:"p",href:"/Ganglion/GanglionSpecs#inverting-input-select-switches"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"eegGoldCupSetup",src:n(64217).Z})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Electrode Wire Color"),(0,r.kt)("th",{parentName:"tr",align:null},"Cyton Board Pin"),(0,r.kt)("th",{parentName:"tr",align:null},"Ganglion Board Pin"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"white"),(0,r.kt)("td",{parentName:"tr",align:null},"SRB2 (bottom SRB pin)"),(0,r.kt)("td",{parentName:"tr",align:null},"REF (top pin)"),(0,r.kt)("td",{parentName:"tr",align:null},"Reference Pin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"black"),(0,r.kt)("td",{parentName:"tr",align:null},"bottom BIAS pin"),(0,r.kt)("td",{parentName:"tr",align:null},"D_G (top pin)"),(0,r.kt)("td",{parentName:"tr",align:null},"Noise-cancelling Pin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"purple"),(0,r.kt)("td",{parentName:"tr",align:null},"2N (bottom N2P pin)"),(0,r.kt)("td",{parentName:"tr",align:null},"+2 (on top row)"),(0,r.kt)("td",{parentName:"tr",align:null},"Analog input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"red"),(0,r.kt)("td",{parentName:"tr",align:null},"7N (bottom N7P pin)"),(0,r.kt)("td",{parentName:"tr",align:null},"+4 (on top row)"),(0,r.kt)("td",{parentName:"tr",align:null},"Analog input")))),(0,r.kt)("p",null,"The white and black electrodes must always connect to the SRB2 pin and the bottom BIAS pin, but the purple, and red electrodes can be connected to any of N1P through N8P channels (or pins 1 through 4 in the case of the Ganglion). We decided to use channels 2 and 7 for this tutorial. The results with Ganglion should be the same, but signals will show up on channels 2 and 4."),(0,r.kt)("h2",{id:"2-connect-your-electrodes-to-your-head-and-body"},"2. Connect your electrodes to your head and body"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Electrode Paste",src:n(32646).Z})),(0,r.kt)("p",null,"a) We're going to start with the electrodes on your head. Begin by scooping Ten20 electrode paste into your white gold cup electrode. This is going to be your reference (or SRB2) electrode for the other electrodes on your head. Fill the electrode so there is a little extra electrode paste spilling over the top of the gold cup, as seen in the picture to the right."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Use a paper towel or napkin to remove excess electrode paste as you are applying your electrodes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SRB2",src:n(80189).Z})),(0,r.kt)("p",null,"b) Now apply this electrode to either one of your earlobes (either A1 or A2 as seen on the 10-20 system image  below). You can use some medical tape (or electric tape!) to give this electrode some extra stability, ensuring that it does not fall off. This electrode is the reference that all of the EEG electrodes on your head will be measured in comparison to. The uV reading that will appear in the GUI's EEG DATA montage is a measure of the potential difference between each electrode and this reference electrode (SRB2). SRB1 (the top SRB pin) can also be used as a reference pin, but we won't discuss that here. Check out the other docs on how to maximize the usage of the other pins!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fp2",src:n(4585).Z})),(0,r.kt)("p",null,"c) Follow the same procedure for the purple electrode and apply it to your forehead 1 inch above your left eyebrow (as if you were looking at yourself) and an inch to the left of your forehead's centerline."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1020",src:n(81132).Z})),(0,r.kt)("p",null,"This electrode location is Fp2 on the ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/10-20_system_%28EEG%29"},"10-20 System"),'. The 10-20 System international standard for electrode placement in the context of EEG. Fp indicates the a "frontal polar" site.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"O1",src:n(8047).Z})),(0,r.kt)("p",null,"d) Now follow the same procedure for the red electrode and place it on the back of your head, 1 inch above the inion (as seen on the 10-20 system), and 1 inch to the left. This electrode location is O1 on the 10-20 system. The 'O' stands for occiptal, meaning above your occipital lobe (or visual cortex)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," to do this, pull your hair aside and make sure the electrode is nested as deeply as possible, with the electrode paste making a definitive conductive connection between your scalp and the gold cup."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"headband",src:n(93703).Z})),(0,r.kt)("p",null,"e) Now follow the same procedure as step 2 above to apply the black electrode to your other earlobe (either A1 or A2 from the 10-20 system). The black electrode is connected to the BIAS pin, which is used for noise cancelling. It is similar to a GROUND pin, which establishes a common ground between the Cyton board and your body, but it has some extra destructive interference noise cancelling techniques built in!"),(0,r.kt)("p",null,"You're now done connecting electrodes to your noggin! I like to use a cheap cotton hairband to add extra stability to all of the electrodes connected to my head, by placing it gently on top of all of the electrodes."),(0,r.kt)("h2",{id:"3-launch-the-gui-and-adjust-your-channel-settings"},"3. Launch the GUI and adjust your channel settings"),(0,r.kt)("p",null,"a) If your OpenBCI GUI is not already running, relaunch it and configure the DATA SOURCE mode to LIVE (from Cyton) and Serial (from Dongle). Select your Cyton board from the list of devices, set the Channel Count to 8, and click START SYSTEM. Refer to ",(0,r.kt)("strong",{parentName:"p"},"section IV")," of this guide for more information on this process."),(0,r.kt)("p",null,"If you're using the Daisy Cyton board, still set the Channel Count to 8, even though the Daisy has 16 channels. Nothing will go wrong if you start the system with 16 channels, except the ",(0,r.kt)("inlineCode",{parentName:"p"},"Time Series")," display will be unnecessarily cluttered."),(0,r.kt)("p",null,"b) Click START DATA STREAM to begin streaming data from your board. You should see live data from your body (and the unattached channels) streaming into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Time Series")," montage on the left side of the GUI."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Power Down",src:n(3033).Z})),(0,r.kt)("p",null,"c) Now we are going to power down the channels we aren't using. Do this by clicking the circular channel number buttons outside of the left side of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Time Series")," montage. Each time you power down a channel, the channel will show a burst of signal and then settle at 0 mV."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Signals At Start",src:n(74722).Z})),(0,r.kt)("p",null,"We are only using channels 2 and 7, so power down every other channel. You can also power down the channels with keyboard shortcuts (1-8). Power them back up with ","[SHIFT]"," + 1-8. If you are working with a daisy module, channels 9-16 can be powered down with q, w, e, r, t, y, u, i, respectively. You can power those channels back up with ","[SHIFT]"," + the same key."),(0,r.kt)("p",null,"Don't bother with the ohm symbols to the right of the buttons with numbers; they are used for impedance measuring, but we won't go into that now."),(0,r.kt)("p",null,"d) Now it's time to optimize your Cyton board's channel settings for this setup. Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hardware Settings")," button above the data oscilloscope display and an array of buttons should appear in place of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Time Series")," montage. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Hardware Settings")," that are configured when you first open the GUI set every channel to EEG mode (Included in BIAS with SRB2 On) with a Gain of 24."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hardware Settings",src:n(73653).Z})),(0,r.kt)("p",null,"The dropdowns inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hardware Settings")," controller indicate the current settings of the ADS1299 registers on your Cyton board. For more information on these settings, refer to pages 39-47 of the ",(0,r.kt)("a",{parentName:"p",href:"https://www.ti.com/lit/ds/symlink/ads1299.pdf"},"ADS1299 datasheet"),"."),(0,r.kt)("p",null,"We have simplified the interface through the OpenBCI firmware and OpenBCI GUI to allow easy, real-time interaction with these registers. For more information on this, please refer to our doc page regarding the ADS1299 interface."),(0,r.kt)("p",null,"By deactivating channels 1, 3, 4, 5, 6, and 8, those channels were automatically removed from the BIAS and SRB2, so as not to interfere with the signal."),(0,r.kt)("p",null,"e) After updating these settings, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Send")," to send the updated settings to the board. Then click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Time Series")," button again to view the data."),(0,r.kt)("h2",{id:"4-alpha-brain-waves-eeg"},"4. Alpha brain waves (EEG)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alpha Brain Waves!",src:n(41947).Z})),(0,r.kt)("p",null,"Now, for what we've all been waiting for... let's check out some brain waves!"),(0,r.kt)("p",null,"It's best to do this portion of the tutorial with a friend. You'll understand why in a second. It just so happens that the easiest way to consciously produce brain waves is by closing your eyes. When you do this, your occipital lobe (the part of your brain responsible for processing visual information) enters into an alpha wave state at a frequency between 7.5-12.5 Hz. Alpha brain waves are the strongest EEG brain signal! Historically, they are thought to represent the activity of the visual cortex in an idle state. An alpha-like variant called ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Mu_wave"},"mu (\u03bc)")," can be found over the motor cortex (central scalp) that is reduced with movement, or the intention to move ","[Wikipedia]","."),(0,r.kt)("p",null,"For more information on Alpha waves check out ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Alpha_wave"},"Wikipedia")," and Chip's EEG Hacker ",(0,r.kt)("a",{parentName:"p",href:"http://eeghacker.blogspot.com/2014/10/detecting-alpha-waves-threshold.html"},"blog post")," about detecting alpha waves with OpenBCI V3."),(0,r.kt)("p",null,"Once you've closed your eyes, have your friend press the 'm' key on your keyboard to take screenshots. Tell him or her to wait until a strong alpha spike emerges on the Fast Fourier Transform (FFT) Graph, the graph in the lower-right of the GUI. The spike should be somewhere between 7.5-12.5 on the the x-asix of the FFT graph, indicating that there is a strong presence of waves in that frequency range."),(0,r.kt)("p",null,"After you've taken a few good screenshots, open up the .JPGs and take a look. ",(0,r.kt)("strong",{parentName:"p"},"Note:")," the screenshots are located in the root directory of your application, or in the OpenBCI_GUI directory if you are working from Processing."),(0,r.kt)("p",null,"You'll notice that the strongest alpha wave signals should be appearing in channel 7, the O2 (O standing for occipital) electrode on the back of your head. Count the number of waves in a single 1-second time period on channel 7 of the EEG DATA montage. The number of waves should correspond x-axis position of the spike on the FFT graph. If you've identified your alpha waves, congratulations! You've now seen your first brain waves with OpenBCI!"),(0,r.kt)("h2",{id:"improving-signal-quality"},"Improving Signal Quality"),(0,r.kt)("p",null,"For help minimizing noise and improving the quality of your EEG signals, check out ",(0,r.kt)("a",{parentName:"p",href:"/Troubleshooting/minimizingNoise"},"this document")))}h.isMDXComponent=!0},81132:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1020-67d7423b302652cc5e0397f90a0d7abc.jpg"},3033:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CytonGS_pic1-8c14ecfc7738123c91be998a2a71ab65.png"},74722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CytonGS_pic2-7617b753a2e63ea464e3e6b0a865f8ab.png"},73653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CytonGS_pic3_GUI-5.0.2_HardwareSettings-b1b4cc6516e60284fcb366b9231220a6.png"},4585:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Fp2-827c7d0623395af3da8415fadae764e1.JPG"},8047:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/O1-0fe8db80b84300f021421e0657cc8160.JPG"},41947:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cytonGS_fft_alpha_spike-a9591488d04c0b74d4e8b7e2ebb40af1.png"},80189:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/earlobe-5e110d720ebfe231be46e67a57edc24b.JPG"},64217:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eeg_cytonSetup-71bfae0c3cc7fab5a157af2c855e3daa.JPG"},32646:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/electrodePaste-ebf70e24abd3da32cc84a7c820610f0c.png"},93703:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/headband-1821dffefd9af389e6fe28e8719e75fb.JPG"},10911:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/whatYouNeed-2b83577ac5c328754bdd03a7185a363d.JPG"}}]);