(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{176:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),o=a(197),l=a.n(o),i=a(207),s=a(199),m=a(189),u=a(190),d=a(177),b=a.n(d),h=[{title:c.a.createElement(c.a.Fragment,null,"Use platform native gesture recognizers\ud83d\udc4d"),description:c.a.createElement(c.a.Fragment,null,"With Gesture Handler touch stream handling happens on the UI thread and uses APIs native to each platform.")},{title:c.a.createElement(c.a.Fragment,null,"Works with Animated API"),description:c.a.createElement(c.a.Fragment,null,"Pass and process gesture specific data to React Native's Animated library and build smooth gesture based experiences with useNativeDriver flag.")},{title:c.a.createElement(c.a.Fragment,null,"Use cross platform components built with Gesture Handler"),description:c.a.createElement(c.a.Fragment,null,"Gesture Handler library ships with a set of components that aims to provide best possible interations such as SwipeableRow or Drawer. More components to come!")},{title:c.a.createElement(c.a.Fragment,null,"Available in Expo.io"),description:c.a.createElement(c.a.Fragment,null,"Gesture Handler is available for you to use with"," ",c.a.createElement("a",{href:"https://expo.io/"},"Expo")," and to play with on"," ",c.a.createElement("a",{href:"https://snack.expo.io/"},"Snack"),".")}];function v(e){var t=e.title,a=e.description;return c.a.createElement("div",{className:"col col--6 info-box"},c.a.createElement("h3",null,t),c.a.createElement("p",null,a))}function g(){var e=Object(m.a)().siteConfig,t=void 0===e?{}:e;return c.a.createElement("header",{className:l()("hero hero--secondary",b.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row row-hero"},c.a.createElement("div",{className:"col col--5 hero-content"},c.a.createElement("h1",{className:"hero__title"},t.title),c.a.createElement("p",{className:"hero__p"},t.tagline),c.a.createElement("div",{className:l()("hero-buttons",b.a.buttons)},c.a.createElement(s.a,{className:l()("button button--primary button--lg",b.a.getStarted),to:Object(u.a)("docs/")},"View Docs"),c.a.createElement(s.a,{className:l()("button button--primary button--lg",b.a.getStarted),to:"https://expo.io/@sauzy3450/react-native-gesture-handler-demo"},"Try demo app on Expo"))),c.a.createElement("div",{className:"col col--7 hero-image",style:{backgroundImage:"url(img/pinch-reworked.svg)"}}))))}function f(){return c.a.createElement("div",{className:"col col--12 section-boxes"},h&&h.length>0&&c.a.createElement("div",{className:"row box-container"},h.map((function(e,t){return c.a.createElement(v,Object(n.a)({key:t},e))}))))}t.default=function(){var e=Object(m.a)().siteConfig,t=void 0===e?{}:e;return c.a.createElement(i.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},c.a.createElement(g,null),c.a.createElement("main",null,c.a.createElement("section",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row row--box-section"},c.a.createElement(f,null)))),c.a.createElement("section",null,c.a.createElement("div",{className:"container container--center"},c.a.createElement("div",{className:"row row--center"},c.a.createElement("div",{className:"col col--7 text--center col--bottom-section"},c.a.createElement("h2",null,"Try it out"),c.a.createElement("p",null,"Check out the documentation and learn how to quickly get up and running with Gesture Handler. Take a look at our API guides to get familiarize with it."),c.a.createElement("p",null,"Try our showcase app or"," ",c.a.createElement("a",{href:"https://expo.io/@sauzy3450/react-native-gesture-handler-demo"},"get it here using Expo"),". Or just"," ",c.a.createElement("a",{href:"/react-native-gesture-handler/docs/example"},"go to this page")," ","to see how you can run it locally with React Native on both Android and iOS."),c.a.createElement("div",{className:"item screenshot-container"},c.a.createElement("img",{src:"gifs/sampleswipeable.gif",alt:"Gesture handler screenshot"}))))))))}},201:function(e,t,a){"use strict";var n=a(0),r=a(203);t.a=function(){return Object(n.useContext)(r.a)}},202:function(e,t,a){"use strict";var n=a(189),r=a(201),c=a(190),o=a(200);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,l=(a=void 0===a?{}:a).logo,i=void 0===l?{}:l,s=Object(r.a)().isDarkTheme,m=i.href||t,u={};i.target?u={target:i.target}:Object(o.a)(m)||(u={rel:"noopener noreferrer",target:"_blank"});var d=i.srcDark&&s?i.srcDark:i.src;return{logoLink:m,logoLinkProps:u,logoImageUrl:Object(c.a)(d),logoAlt:i.alt}}},203:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},205:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(208),o=a(200),l=a(189),i=a(190),s="",m="dark",u=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],o=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),i=Object(n.useCallback)((function(){c(s),o(s)}),[]),u=Object(n.useCallback)((function(){c(m),o(m)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?m:s)}))}),[]),{isDarkTheme:r===m,setLightTheme:i,setDarkTheme:u}},d=a(203);var b=function(e){var t=u(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(d.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},h=(a(192),a(191),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign(Object.assign({},a),{},((n={})[e]=t,n))})),r(e,t)}}}),v=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var g=function(e){var t=h(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(v.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},f=a(127),E=a.n(f);var p=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,c=a.id,o=a.content,i=a.backgroundColor,s=a.textColor,m=Object(n.useState)(!0),u=m[0],d=m[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&d(!1)}),[]),!o||u?null:r.a.createElement("div",{className:E.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:E.a.announcementBarContent,dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("button",{type:"button",className:E.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),d(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},k=a(2),w=(a(209),a(9)),O=a(197),N=a.n(O),j=a(199),_=a(204),C=a(212),y=a.n(C),S=a(128),T=a.n(S),x=function(){return r.a.createElement("span",{className:N()(T.a.toggle,T.a.moon)})},D=function(){return r.a.createElement("span",{className:N()(T.a.toggle,T.a.sun)})},L=function(e){var t=Object(l.a)().isClient;return r.a.createElement(y.a,Object(k.a)({disabled:!t,icons:{checked:r.a.createElement(x,null),unchecked:r.a.createElement(D,null)}},e))},I=a(201),G=a(210);var B=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},H=a(52),M=function(){return{scrollX:H.a.canUseDOM?window.pageXOffset:0,scrollY:H.a.canUseDOM?window.pageYOffset:0}},A=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(M()),r=a[0],c=a[1],o=function(){var t=M();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o,{passive:!0})}}),t),r},P=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),o=c[0],l=c[1],i=Object(n.useState)(0),s=i[0],m=i[1],u=Object(n.useState)(0),d=u[0],b=u[1],h=Object(n.useCallback)((function(e){null!==e&&b(e.getBoundingClientRect().height)}),[]),v=Object(G.b)(),g=B(v.hash),f=g[0],E=g[1];return A((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<d))){if(o)return l(!1),r(!1),void m(a);var n=document.documentElement.scrollHeight-d,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),m(a)}}),[s,d]),Object(n.useEffect)((function(){e&&(r(!0),E(v.hash))}),[v]),Object(n.useEffect)((function(){e&&f&&l(!0)}),[f]),{navbarRef:h,isNavbarVisible:a}},U=a(205),F=a(202),R=a(206),W=a(129),z=a.n(W);function V(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,o=e.label,l=e.activeClassName,s=void 0===l?"navbar__link--active":l,m=e.prependBaseUrlToHref,u=Object(w.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),d=Object(i.a)(n),b=Object(i.a)(t),h=Object(i.a)(c,!0);return r.a.createElement(j.a,Object(k.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:m?h:c}:Object.assign({isNavLink:!0,activeClassName:s,to:d},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(b)}}:null),u),o)}function Y(e){var t=e.items,a=e.position,n=e.className,c=Object(w.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),N()({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:N()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(V,Object(k.a)({className:o(n)},c,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),c.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(w.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(V,Object(k.a)({activeClassName:"dropdown__link--active",className:o(a,!0)},n)))})))):r.a.createElement(V,Object(k.a)({className:o(n)},c))}function J(e){var t=e.items,a=(e.position,e.className),n=Object(w.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),N()("menu__link","navbar__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(V,Object(k.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,o=Object(w.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(V,Object(k.a)({activeClassName:"menu__link--active",className:c(a)},o,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(V,Object(k.a)({className:c(a)},n)))}var K=function(){var e,t,a=Object(l.a)(),c=a.siteConfig.themeConfig,o=c.navbar,i=(o=void 0===o?{}:o).title,s=o.links,m=void 0===s?[]:s,u=o.hideOnScroll,d=void 0!==u&&u,b=c.disableDarkMode,h=void 0!==b&&b,v=a.isClient,g=Object(n.useState)(!1),f=g[0],E=g[1],p=Object(n.useState)(!1),w=p[0],O=p[1],C=Object(I.a)(),y=C.isDarkTheme,S=C.setLightTheme,T=C.setDarkTheme,x=P(d),D=x.navbarRef,G=x.isNavbarVisible,B=Object(F.a)(),H=B.logoLink,M=B.logoLinkProps,A=B.logoImageUrl,W=B.logoAlt;Object(U.a)(f);var V=Object(n.useCallback)((function(){E(!0)}),[E]),K=Object(n.useCallback)((function(){E(!1)}),[E]),X=Object(n.useCallback)((function(e){return e.target.checked?T():S()}),[S,T]);return r.a.createElement("nav",{ref:D,className:N()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":f},e[z.a.navbarHideable]=d,e[z.a.navbarHidden]=!G,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=m&&0!==m.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:V,onKeyDown:V},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(j.a,Object(k.a)({className:"navbar__brand",to:H},M),null!=i&&r.a.createElement("strong",{className:N()("navbar__title",(t={},t[z.a.hideLogoText]=w,t))},i))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter((function(e){return"left"===e.position})).map((function(e,t){return r.a.createElement(Y,Object(k.a)({},e,{key:t}))})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(R.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")),m.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(Y,Object(k.a)({},e,{key:t}))})),!h&&r.a.createElement(L,{className:z.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:X}),r.a.createElement(_.a,{handleSearchBarToggle:O,isSearchBarExpanded:w}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:K}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(j.a,Object(k.a)({className:"navbar__brand",onClick:K,to:H},M),null!=A&&r.a.createElement("img",{key:v,className:"navbar__logo",src:A,alt:W}),null!=i&&r.a.createElement("strong",{className:"navbar__title"},i)),!h&&f&&r.a.createElement(L,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:X})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((function(e,t){return r.a.createElement(J,Object(k.a)({},e,{onClick:K,key:t}))})))))))};a(130);var X=function(){var e=Object(l.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=Object(i.a)("/img/swmLogo.svg");return a?r.a.createElement("footer",{className:N()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"footer-container"},r.a.createElement(j.a,{className:"navbar__brand footer-image-link",to:"https://www.swmansion.com/"},null!=n&&r.a.createElement("img",{className:"navbar__logo",src:n,alt:"Software Mansion logo"})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(R.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")))):null};a(131);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,m=a.themeConfig.image,u=a.url,d=e.children,h=e.title,v=e.noFooter,f=e.description,E=e.image,k=e.keywords,w=e.permalink,O=e.version,N=h?h+" | "+s:s,j=E||m,_=u+Object(i.a)(j);Object(o.a)(j)||(_=j);var C=Object(i.a)(n);return r.a.createElement(b,null,r.a.createElement(g,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),N&&r.a.createElement("title",null,N),N&&r.a.createElement("meta",{property:"og:title",content:N}),n&&r.a.createElement("link",{rel:"shortcut icon",href:C}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),k&&k.length&&r.a.createElement("meta",{name:"keywords",content:k.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:_}),j&&r.a.createElement("meta",{property:"twitter:image",content:_}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N}),w&&r.a.createElement("meta",{property:"og:url",content:u+w}),w&&r.a.createElement("link",{rel:"canonical",href:u+w}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(p,null),r.a.createElement(K,null),r.a.createElement("div",{className:"main-wrapper"},d),!v&&r.a.createElement(X,null)))}}}]);