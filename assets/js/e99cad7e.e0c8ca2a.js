"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[219],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return a?o.createElement(m,i(i({ref:t},c),{},{components:a})):o.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},96498:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>h});var o=a(22122),n=a(19756),r=(a(67294),a(3905)),i=["components"],s={id:"ElectrodeCap",title:"Electrode Cap Getting Started Guide"},l=void 0,p={unversionedId:"AddOns/Headwear/ElectrodeCap",id:"AddOns/Headwear/ElectrodeCap",isDocsHomePage:!1,title:"Electrode Cap Getting Started Guide",description:"This is a guide to setting up and cleaning your OpenBCI Electrode Cap. Please consult the Electrode Cap",source:"@site/docs/AddOns/Headwear/04-Electrode_Cap_Tutorial.md",sourceDirName:"AddOns/Headwear",slug:"/AddOns/Headwear/ElectrodeCap",permalink:"/Documentation/AddOns/Headwear/ElectrodeCap",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/websitev2/docs/AddOns/Headwear/04-Electrode_Cap_Tutorial.md",version:"current",lastUpdatedBy:"Richard Waltman",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:4,frontMatter:{id:"ElectrodeCap",title:"Electrode Cap Getting Started Guide"},sidebar:"docs",previous:{title:"OpenBCI EEG Headband Kit Guide",permalink:"/Documentation/AddOns/Headwear/HeadBand"},next:{title:"Electrode Guide",permalink:"/Documentation/AddOns/Electrodes/ElectrodesLanding"}},c=[{value:"Electrode Cap With CytonDaisy Tutorial",id:"electrode-cap-with-cytondaisy-tutorial",children:[{value:"What You&#39;ll Need",id:"what-youll-need",children:[]},{value:"Connecting the Electrode Cap to the CytonDaisy",id:"connecting-the-electrode-cap-to-the-cytondaisy",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Software",id:"software",children:[]},{value:"Use Cases for OpenBCI GUI",id:"use-cases-for-openbci-gui",children:[]},{value:"What You Can Do with OpenBCI GUI and Software Stack",id:"what-you-can-do-with-openbci-gui-and-software-stack",children:[]}]},{value:"Electrode Cap With Third-Party Bioamplifier Tutorial",id:"electrode-cap-with-third-party-bioamplifier-tutorial",children:[{value:"What You&#39;ll Need",id:"what-youll-need-1",children:[]},{value:"The set-up",id:"the-set-up",children:[]}]},{value:"Electrode Cap Care and Cleaning Guide",id:"electrode-cap-care-and-cleaning-guide",children:[]},{value:"Electrode Cap FAQ",id:"electrode-cap-faq",children:[{value:"A compilation of the most commonly asked questions",id:"a-compilation-of-the-most-commonly-asked-questions",children:[]}]}],d={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a guide to setting up and cleaning your OpenBCI Electrode Cap. Please consult the ",(0,r.kt)("a",{parentName:"p",href:"https://shop.openbci.com/products/openbci-eeg-electrocap"},"Electrode Cap"),"\nProduct Page and review this guide in its entirety before starting.\nThe Electrode Cap allows up to 19 channels of EEG data to be obtained using wet electrodes.\nYou can pair the the Electrode Cap with the OpenBCI ",(0,r.kt)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel"},"CytonDaisy 16-channel Biosensing Board,"),"\nor a bioamplifier of your choice. Electrode gel must be used with the electrode cap."),(0,r.kt)("p",null,"The placement of these electrodes is as shown in the image below:"),(0,r.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/electrode%20cap%20nodes_1.png?raw=true",width:"50%"}),(0,r.kt)("p",null,"These electrodes map to labels on the electrodes. Please note that the cap uses older labelling, and that ",(0,r.kt)("em",{parentName:"p"},"T3, T4, T5, and T6")," were updated to be ",(0,r.kt)("em",{parentName:"p"},"T7, T8, P7, and P8"),", respectively. These placements are interchangeable, and while the labels on the cap use older naming, they correspond to nodes on the diagram."),(0,r.kt)("p",null,"The Electrode Cap comes in two variants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"19-channel electrode cap with Ag/AgCl ",(0,r.kt)("strong",{parentName:"li"},"coated")," electrodes"),(0,r.kt)("li",{parentName:"ul"},"Premium 19-channel electrode cap with patented, ",(0,r.kt)("strong",{parentName:"li"},"sintered")," Ag/AgCl electrodes")),(0,r.kt)("p",null,"The set up is the same between the two cap variants. You can follow this tutorial for both coated and sintered caps."),(0,r.kt)("h2",{id:"electrode-cap-with-cytondaisy-tutorial"},"Electrode Cap With CytonDaisy Tutorial"),(0,r.kt)("p",null,"When combined with the OpenBCI ",(0,r.kt)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel"},"CytonDaisy 16-channel Biosensing Board"),",\nthe Electrode Cap is a low-cost, research-grade tool for obtaining 16 channels of EEG data."),(0,r.kt)("h3",{id:"what-youll-need"},"What You'll Need"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/cyton-daisy-biosensing-boards-16-channel"},"CytonDaisy 16-channel Biosensing Board,")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/touch-proof-electrode-cable-adapter"},"Header Pin to Touchproof Adapter")," (HPTA) x2"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/electrodegel"},"Electrode Gel")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/products/openbci-eeg-electrocap"},"Electrode Cap"))),(0,r.kt)("h3",{id:"connecting-the-electrode-cap-to-the-cytondaisy"},"Connecting the Electrode Cap to the CytonDaisy"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"../../GettingStarted/Boards/DaisyGS#2-y-splitter-cable"},"y-splitter cable"),' that came with your CytonDaisy to "gang" together the bottom SRB pins on the Cyton and the Daisy module, as shown below. This will be the reference electrode for the other electrodes on the subject\'s head.'),(0,r.kt)("img",{src:"https://github.com/OpenBCI/Documentation/blob/master/docs/assets/GettingStartedImages/cytonDaisy_ySplitter_on_SRBpins.jpg?raw=true",width:"50%"}),(0,r.kt)("p",null,"Connect a HPTA cable to the single end of the y-splitter cable, then connect the its blue termination to the REF electrode of the cap, shown below."),(0,r.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/cap_ref_pin.png?raw=true",width:"50%"}),(0,r.kt)("p",null,"Connect bottom pins N1P through N8P on the Cyton to a set of HPTA cables, shown below. These pins will be channels 1-8 on the OpenBCI GUI."),(0,r.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/cap_cyton_pins.png?raw=true",width:"50%"}),(0,r.kt)("p",null,"Connect top pins N1P through N8P on the Daisy module to another set of HPTA cables, shown below. These pins will be channels 9-16."),(0,r.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/cap_cytondaisy_pins.png?raw=true",width:"50%"}),(0,r.kt)("p",null,"Connect a leftover HPTA cable to the bottom BIAS pin of the Cyton. The BIAS pin is used for noise cancelling. It is similar to a GROUND pin, which establishes a common ground between the Cyton board and your body, but it has some extra destructive interference noise cancelling techniques built in! Connect the blue termination of this HPTA cable to the GND cap electrode, shown below."),(0,r.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/cap_GND_pin.png?raw=true",width:"50%"}),(0,r.kt)("p",null,"For WHY these connections are recommended, see the ",(0,r.kt)("a",{parentName:"p",href:"/Documentation/GettingStarted/Biosensing-Setups/EEGSetup"},"EEG explanation"),"page."),(0,r.kt)("p",null,"After the cables are all connected as shown above, place the cap on the subject's head and inject a small amount of electrode gel using the included syringe. After each data recording session, be sure to clean the gel off the cap!"),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Seeing a lot of noise? Check your electrode connections -"),(0,r.kt)("p",null,"These steps can be done in any order:"),(0,r.kt)("p",null,"1) The bottom BIAS pin of the Cyton ",(0,r.kt)("strong",{parentName:"p"},"board")," goes to the GND electrode of the ",(0,r.kt)("strong",{parentName:"p"},"cap"),". ",(0,r.kt)("strong",{parentName:"p"},"You would use the HPTA cable to connect them.")),(0,r.kt)("p",null,"2) The bottom SRB pins on the Cyton and the Daisy ",(0,r.kt)("strong",{parentName:"p"},"boards"),' should be "ganged together" using the split end of the y-splitter cable.\nThe single end of the y-splitter cable should go to the REF electrode of the ',(0,r.kt)("strong",{parentName:"p"},"cap"),". ",(0,r.kt)("strong",{parentName:"p"},"You would use the HPTA cable to connect them.")),(0,r.kt)("p",null,"The rest of the cap electrodes are completely up to you how you want to connect them to the Cyton."),(0,r.kt)("p",null,"3) For example, if you want data from Fp1 (of the cap) to show up on channel 1 of the OpenBCI GUI, then connect Fp1 cable to the bottom pin N1P of the Cyton. Use the HPTA cable to connect them."),(0,r.kt)("p",null,"If you want Fp1 data to show up on channel 9 of the OpenBCI GUI, then connect Fp1 to the bottom pin N1P of the CytonDaisy. You can pair any cap electrode (aside from GND and REF) with any pins N1P through N8P on the Cyton and Daisy boards"),(0,r.kt)("p",null,"Channels 1-8 on the GUI correspond to bottom pins N1P through N8P on the Cyton\nChannels 9-16 on the GUI correspond to bottoms pins N1P through N8P on the Daisy."),(0,r.kt)("h3",{id:"software"},"Software"),(0,r.kt)("img",{src:"https://github.com/openbci-archive/Docs/blob/master/assets/images/GUI-V4-Screenshot.jpg?raw=true",width:"50%"}),(0,r.kt)("p",null,"Head over to the OpenBCI GUI ",(0,r.kt)("a",{parentName:"p",href:"/Documentation/Software/OpenBCISoftware/GUIDocs"},"tutorial")," to set up your free live-streaming software!"),(0,r.kt)("h3",{id:"use-cases-for-openbci-gui"},"Use Cases for OpenBCI GUI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OpenBCI device owners want to visualize their brainwaves!"),(0,r.kt)("li",{parentName:"ul"},"Many of the researchers, hackers and students alike who purchase OpenBCI devices want to use them to acquire data as soon as their device arrives."),(0,r.kt)("li",{parentName:"ul"},"Users use macOS, Windows and Linux to acquire data"),(0,r.kt)("li",{parentName:"ul"},"Users want to filter incoming data in real time"),(0,r.kt)("li",{parentName:"ul"},"Users want to make their own experiments to test their awesome theories or duplicate state of the art research at home!"),(0,r.kt)("li",{parentName:"ul"},"Users struggle to get prerequisites properly installed to get data on their own from OpenBCI Cyton and Ganglion."),(0,r.kt)("li",{parentName:"ul"},"Users want to stream data into their own custom applications such as MATLAB.")),(0,r.kt)("h3",{id:"what-you-can-do-with-openbci-gui-and-software-stack"},"What You Can Do with OpenBCI GUI and Software Stack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visualize data from every OpenBCI device: Ganglion, Cyton, Cyton with Daisy, and the WiFi Shield")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Playback files using GUI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run as a native application on macOS, Windows, and Linux.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apply filters and other data processing tools to quickly clean raw data in real time")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the GUI as a networking system to move data out of GUI into other apps over UDP, OSC, LSL, and Serial.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Send data to ",(0,r.kt)("a",{parentName:"p",href:"/Documentation/Software/CompatibleThirdPartySoftware/Matlab"},"MATLAB"),", Neuropype (using LSL), and other ",(0,r.kt)("a",{parentName:"p",href:"/Documentation/Software/SoftwareLanding"},"third-party softwares."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Analyze data with ",(0,r.kt)("a",{parentName:"p",href:"/Documentation/ForDevelopers/SoftwareDevelopment#brainflow---python"},"Python and Brainflow"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/Documentation/Software/OpenBCISoftware/GUIWidgets#custom-widget"},"Create a widget framework")," that allows users to create their own experiments.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Output data into a saved file for later offline processing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/Documentation/Software/OpenBCISoftware/GUIDocs#customize-your-layout"},"Customize the layout"),", change the gain, toggle on/off, check impedance of individual channels of the CytonDaisy board (or any connected OpenBCI board) directly in the GUI!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access built-in widgets such as Band Power, Spectrogram, Accelerometer, EEG Head Plot, and MUCH more"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"If you just want to visualize EEG, EMG, ECG data (and do some basic analysis) and save the data to start with, download the standalone ",(0,r.kt)("a",{parentName:"strong",href:"https://openbci.com/index.php/downloads"},"OpenBCI GUI")," and connect it to an OpenBCI Cyton, CytonDaisy, or Ganglion!")))),(0,r.kt)("h2",{id:"electrode-cap-with-third-party-bioamplifier-tutorial"},"Electrode Cap With Third-Party Bioamplifier Tutorial"),(0,r.kt)("p",null," The Electrode Cap comes with industry-standard touchproof terminations that can be plugged directly into most bioamplifers. The 10-20 locations are marked on the electrodes on the cap."),(0,r.kt)("h3",{id:"what-youll-need-1"},"What You'll Need"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/electrodegel"},"Electrode Gel")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://shop.openbci.com/products/openbci-eeg-electrocap"},"Electrode Cap")),(0,r.kt)("li",{parentName:"ol"},"Your own bioamplifier")),(0,r.kt)("h3",{id:"the-set-up"},"The set-up"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Place the Electrode Cap on the subject's head and apply electrode gel with the included syringe."),(0,r.kt)("li",{parentName:"ol"},'Connect the Electrode Cap to your bioamplifier using the marked guides on the cap. The electrodes on the cap are labeled "GND", "REF", "C3", etc.'),(0,r.kt)("li",{parentName:"ol"},"Follow the manufacturer's instructions for your bioamplifier")),(0,r.kt)("p",null,"If you're using a third-party bioamplifier, you'll need the software that is compatible with that particular bioamplifier. The OpenBCI GUI is intended to be used with OpenBCI biosensing boards (Cyton, CytonDaisy, and Ganglion), not third-party bioamplifiers such as g.tec devices."),(0,r.kt)("p",null,"Find it all overwhelming? Don't know where to start? Questions, comments, suggestions? Email ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@openbci.com"},"support@openbci.com")),(0,r.kt)("h2",{id:"electrode-cap-care-and-cleaning-guide"},"Electrode Cap Care and Cleaning Guide"),(0,r.kt)("p",null,"A routine schedule for cleaning and disinfecting the Electrode\nCap helps assure accurate EEG signals and the reuse of\nelectrodes between different participants. Furthermore, you will\npreserve the excellent characteristics of your electrodes and will\nensure a long product life."),(0,r.kt)("h4",{id:"cleaning-method"},"Cleaning Method:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clean the residual gel off the Sintered Ag-AgCl Electrodes immediately after use.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Soak the cap for about 15 minutes in warm water (up to 50\ndegrees Celsius), so that the remaining gel can dissolves off\nquickly into the water. Use a cotton ball for removing gel residues\nfrom the electrodes only if absolutely necessary.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In case the gel stays on the surface of the electrodes or the cap\nshell, then soak the cap in diluted detergent for a few hours.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rinse the cap in tap water thoroughly. Finish rinsing with deionized water or distilled water, if available. Air dry the cap and store the cap in a dark dry place."))),(0,r.kt)("p",null,"Cleaning frequency-after each use."),(0,r.kt)("h4",{id:"disinfecting-method"},"Disinfecting Method:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clean the residual gel off the Sintered Ag-AgCl Electrodes immediately after use.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Soak the cap for about 15 minutes in warm water (up to 50\ndegrees Celsius), so that the remaining gel can dissolves off\nquickly into the water. Use a cotton ball for removing gel residues\nfrom the electrodes only if absolutely necessary.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then soak the cap for up to 30 minutes in 1% diluted bleach solution\n(100 ppm sodium hypochlorite).\nHousehold bleach has a concentration of 52,500ppm of available\nchlorine (5.25% Sodium Hypochlorite). A 1:500 dilution of household\nbleach provides the 100ppm concentration required)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rinse the cap in tap water thoroughly. Finish rinsing with deionized water or distilled water, if available. Air dry the cap and store the cap in a dark dry place."))),(0,r.kt)("p",null,"Disinfecting frequency-every two weeks."),(0,r.kt)("p",null,"Caution:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Gently handle the connection point where the electrodes attach to the lead wire."),(0,r.kt)("li",{parentName:"ol"},"Don\u2019t touch other metals."),(0,r.kt)("li",{parentName:"ol"},"Don\u2019t leave residual gel on any part of the electrodes or wire."),(0,r.kt)("li",{parentName:"ol"},"Keep the electrodes and the wire away from any corrosive\nliquid."),(0,r.kt)("li",{parentName:"ol"},"Keep the touch-proof adapter ends away from water.")),(0,r.kt)("h2",{id:"electrode-cap-faq"},"Electrode Cap FAQ"),(0,r.kt)("h3",{id:"a-compilation-of-the-most-commonly-asked-questions"},"A compilation of the most commonly asked questions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Can participants take the items home? As in, can it be used outside of a laboratory setting?\n",(0,r.kt)("strong",{parentName:"p"},"Yes. Many OpenBCI customers are citizen scientists, hackers, artists, and casual at-home users of EEG hardware."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Are these items comfortable enough for people to sleep in for multiple days?\n",(0,r.kt)("strong",{parentName:"p"},"I would say that the electrode cap is most comfortable option. It is the same type of equipment used in professional and diagnostic sleep labs."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Is it durable enough to be used for multiple days?\n",(0,r.kt)("strong",{parentName:"p"},'Yes. The electrode is a medical-grade product at a "kickstarter" price and is scientifically validated. It includes designs such as the durable cable sleeve to prevent tangled cables. The sintered cap is especially durable, given its sintered electrode design which is hardy to corrosion.'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How would you recommend logging data from the participants every day?\n",(0,r.kt)("strong",{parentName:"p"},"OpenBCI provides the free GUI to help customers verify proper hardware connection and provide a software for free raw data storage, visualization, and streaming. Please note the OpenBCI GUI does not provide built-in data cleaning or analysis. Many third-party softwares are compatible with the OpenBCI system. For a full list, head to ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.openbci.com/Software/SoftwareLanding"},"https://docs.openbci.com/Software/SoftwareLanding"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Do you recommend using the OpenBCI EEG Headband Kit or the EEG Electrode Cap?\n",(0,r.kt)("strong",{parentName:"p"},"We recommend the EEG electrode cap for sleep study. Sintered electrode cap plus electrode gel is the gold standard of EEG data acquisition."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Have you ever had consumers in the past use these items for a long duration? If so, what did they think of it?\n",(0,r.kt)("strong",{parentName:"p"},"Our customers have compared OpenBCI products favorably to medical equipment at many times the cost. Please contact OpenBCI for the PDF on independent evaluation and scientific verification of OpenBCI hardware or head to the ",(0,r.kt)("a",{parentName:"strong",href:"https://openbci.com/citations"},"Research Collection"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Are the devices easy to learn and handle?\n",(0,r.kt)("strong",{parentName:"p"},"I have personally worked with customers who have zero previous experience with EEG and were able to follow the guides at docs.openbci.com to see their raw EEG data in live-time, as well as store the data for later analysis."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Would the hardware and data be messed up and skewed if the participants move around too much in their sleep?\n",(0,r.kt)("strong",{parentName:"p"},"Subject movement will nearly always introduce noise into the system. This is true of all EEG equipment, no matter the brand or type. The cap's design in conjunction with the use of electrode gel (sold separately in the OpenBCI store) ensures good contact between the electrode and scalp, helping to reduce noise artifacts."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What are the potential negatives of using the wet EEG electrode cap? My team is wondering if it would be comfortable for participants to wear for the 10 days of our sleep study especially because the electrode gel may be too time consuming to apply and participants may create a mess if they get electrode gel in their hair.\n",(0,r.kt)("strong",{parentName:"p"},"The electrode cap kit comes with a syringe applicator for easy, mess-free application of electrode gel. It is the same set-up as the ones used in medical lab sleep studies. At this time, as far as we know, there is no affordable, high-channel, dry electrode cap system."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How long does it take to set up the EEG electrode cap prior to use?\n",(0,r.kt)("strong",{parentName:"p"},"It's very easy to set-up. The first time may take 15 min as the user gets accustomed to the steps. Subsequent sessions would take just a few minutes to set up. Please refer to the EEG electrode cap guide to get an idea of how long it would take."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If participants get the electrode gel in their hair, how easy is it for them to safely and cleanly remove it?\n",(0,r.kt)("strong",{parentName:"p"},"The electrode gel is water-based and can easily be washed off with shampoo."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"My team is also looking into using the EEG Headband Kit and we wanted to know would this EEG be durable and accurate enough for a multiple day sleep study?\n",(0,r.kt)("strong",{parentName:"p"},"The EEG headband is a starter kit for those new to EEG. It has not been tested for applications like sleep studies. The EEG electrode cap is a more suitable product"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We want to be able to use the EEG data for sleep scoring, and I was wondering whether the output file can be saved in edf format, so that is readable with some sleep scoring softwares such as RemLogic?\n",(0,r.kt)("strong",{parentName:"p"},"The files are saved to .csv or bdf format. For information on the software, head to the ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.openbci.com/docs/Software/OpenBCISoftware/GUIWidgets"},"GUI Widget Guide"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Since we want to record data during sleep (~8-9 hours), I wanted to know the power consumption of the system, and how long the battery can last.\n",(0,r.kt)("strong",{parentName:"p"},"A Lithium battery with high capacitance, such as ",(0,r.kt)("a",{parentName:"strong",href:"https://www.digikey.com/products/en?mpart=328&v=1528"},"this one")," with 2500 mAh, should allow the system to operate overnight")))),(0,r.kt)("ol",{start:15},(0,r.kt)("li",{parentName:"ol"},"What is the difference between coated and sintered electrode and which one you think would be better for us?\n",(0,r.kt)("strong",{parentName:"li"},"You can find details on the difference between the two at the electrode cap product ",(0,r.kt)("a",{parentName:"strong",href:"https://shop.openbci.com/collections/frontpage/products/openbci-eeg-electrocap"},"page"),".\nThe sintered cap lasts longer and offers more consistent signal due to the unique manufacturing process."))),(0,r.kt)("ol",{start:16},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"I also would like to capture the EOG signal. Can I modify the amplification factor of the biosensing board for each different type of signals? Do you also suggest the best filter specifications for EEG/EOG/EMG recording?\nBy pairing electrodes to the OpenBCI Cytondaisy, you can obtain up to 16 channels from different data sources simultaneously.\n",(0,r.kt)("strong",{parentName:"p"},"You can modify the gain on each channel. Please refer to the ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.openbci.com/docs/Software/OpenBCISoftware/GUIWidgets#time-series"},"hardware settings section")," of the GUI widget guide.\nUsing the gold cup electrodes plus ten20 paste, with the CytonDaisy, you can capture EOG signals. You can connect the gold cup electrodes to the CytonDaisy at the same time as you connect the electrode cap to the CytonDaisy."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Can I buy multiple caps (for different head sizes) with this kit?\n",(0,r.kt)("strong",{parentName:"p"},"The electrode cap kits come in different sizes. Choose from small, medium, and large in the ",(0,r.kt)("a",{parentName:"strong",href:"https://shop.openbci.com/collections/frontpage/products/openbci-eeg-electrocap-kit?variant=16456863776840"},"product page"),".")))))}h.isMDXComponent=!0}}]);