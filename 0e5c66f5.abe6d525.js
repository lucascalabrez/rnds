(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{153:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=n,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return t?o.a.createElement(m,c(c({ref:r},p),{},{components:t})):o.a.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(153)),i={id:"api",title:"RNDS API",sidebar_label:"RNDS API"},c={unversionedId:"rnds/tools/api",id:"rnds/tools/api",isDocsHomePage:!1,title:"RNDS API",description:"H\xe1 uma API (Application Programming Interface) definida para o acesso a um servidor FHIR. Trata-se de uma RESTFul API, a RESTful API FHIR.",source:"@site/docs\\rnds\\tools\\api.md",slug:"/rnds/tools/api",permalink:"/rnds/docs/rnds/tools/api",version:"current",lastUpdatedAt:1611440500,sidebar_label:"RNDS API",sidebar:"someSidebar",previous:{title:"Ecossistema FHIR",permalink:"/rnds/docs/rnds/tecnologias"},next:{title:"Bibliotecas",permalink:"/rnds/docs/rnds/tools/bibliotecas"}},s=[],p={toc:s};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"H\xe1 uma API (",Object(a.b)("em",{parentName:"p"},"Application Programming Interface"),") definida para o acesso a um servidor FHIR. Trata-se de uma RESTFul API, a ",Object(a.b)("a",{parentName:"p",href:"http://hl7.org/fhir/http.html"},"RESTful API FHIR"),"."),Object(a.b)("p",null,"A RNDS faz uso do padr\xe3o FHIR e, portanto, a intera\xe7\xe3o com\nos ambientes oferecidos pela RNDS obedece tal API. Contudo, h\xe1 especificidades."),Object(a.b)("p",null,"Felizmente h\xe1 um roteiro para ",Object(a.b)("a",{parentName:"p",href:"../../publico-alvo/ti/conhecer"},"conhecer os servi\xe7os em detalhes"),", por meio do qual a API de acesso \xe0 RNDS pode ser exercitada."))}l.isMDXComponent=!0}}]);