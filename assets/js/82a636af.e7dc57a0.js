"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=h(a),m=o,p=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(p,i(i({ref:t},u),{},{components:a})):n.createElement(p,i({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var h=2;h<r;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9278:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var n=a(7462),o=(a(7294),a(3905)),r=a(9960),i=a(2506);const l={title:"Change The Rules",hide_table_of_contents:!0},s="Change The Rules",h={type:"mdx",permalink:"/projects/changeTheRules",source:"@site/src/pages/projects/changeTheRules.mdx",title:"Change The Rules",description:"Change The Rules is a Call of Duty Black Ops 3 mod that I made for the zombie game mode. If you are unfamiliar with Call of Duty zombies, it is a game mode where you fight off zombies which get increasingly harder as you go through the waves. The mod as the title hints at changes the general rules of this gamemode each wave. When the mod is enabled, it will randomly apply an event that can either be a benefit or a detriment to you and your team. For example, one round you may get an event which gives you double health and then the next round you might lose all your weapons. There are also events that are not really a benefit or a detriment but will require players to change their playstyle. Two examples of these types of events are an event which allows you to fly and an event which makes all zombies ignore all but one player and if that player dies the game ends. The full list of events is available here in case you are interested.",frontMatter:{title:"Change The Rules",hide_table_of_contents:!0}},u=[{value:"Making the Mod",id:"making-the-mod",level:2},{value:"Trailer",id:"trailer",level:2},{value:"Play the Mod",id:"play-the-mod",level:2}],c={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"change-the-rules"},"Change The Rules"),(0,o.kt)("p",null,"Change The Rules is a Call of Duty Black Ops 3 mod that I made for the zombie game mode. If you are unfamiliar with Call of Duty zombies, it is a game mode where you fight off zombies which get increasingly harder as you go through the waves. The mod as the title hints at changes the general rules of this gamemode each wave. When the mod is enabled, it will randomly apply an event that can either be a benefit or a detriment to you and your team. For example, one round you may get an event which gives you double health and then the next round you might lose all your weapons. There are also events that are not really a benefit or a detriment but will require players to change their playstyle. Two examples of these types of events are an event which allows you to fly and an event which makes all zombies ignore all but one player and if that player dies the game ends. The full list of events is available ",(0,o.kt)("a",{parentName:"p",href:"https://steamcommunity.com/workshop/filedetails/discussion/2842245738/3428948355365751853/"},"here")," in case you are interested."),(0,o.kt)("h2",{id:"making-the-mod"},"Making the Mod"),(0,o.kt)("p",null,"Making this mod was a fun challenge because of the lack of GSC documentation available. GSC is the scripting language that is used in Black Ops 3 and writes like C# or C++. However, documentation detailing methods or functions that can be used is basically nonexistent outside some text files that are included with the mod tools which usually led to more questions than answers in my experience. Therefore because of this lack of documentation I relied heavily on just trying things and seeing what worked and what did not. Luckily, there is also an active modding community around this game which was a huge boon in this project as I was able to ask questions to people more experienced than me in GSC. Overall, I am happy with how this mod turned out and I personally think it provides a fun and interesting twist on the Call of Duty zombie game mode."),(0,o.kt)("h2",{id:"trailer"},"Trailer"),(0,o.kt)("p",null,"I made a short trailer for this mod when I released it, and you can view it below."),(0,o.kt)("div",{className:i.Z.container},(0,o.kt)("iframe",{className:i.Z.responsiveEmbed,src:"https://www.youtube.com/embed/c54Te5e5iPo",allow:"fullscreen"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"play-the-mod"},"Play the Mod"),(0,o.kt)("p",null,"If you own Black Ops 3 on Steam you can play this mod yourself. The mod is available at the link below on the Steam Workshop. Give it a shot and I hope you like it. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://steamcommunity.com/sharedfiles/filedetails/?id=2842245738"},"Download the mod here"),"."),(0,o.kt)("div",{className:"buttonCenter"},(0,o.kt)(r.Z,{className:"buttonsStyle",to:"/projects/",mdxType:"Link"},"Back")))}m.isMDXComponent=!0},2506:(e,t,a)=>{a.d(t,{Z:()=>n});const n={projectCardText:"projectCardText_ludf",projectCard:"projectCard_wUxn",projectCardButton:"projectCardButton_L6vb",container:"container_o40c",responsiveEmbed:"responsiveEmbed_tj6S"}}}]);