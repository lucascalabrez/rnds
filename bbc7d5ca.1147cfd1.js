(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),p=function(e){var r=a.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return a.a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(t),m=n,b=l["".concat(i,".").concat(m)]||l[m]||u[m]||o;return t?a.a.createElement(b,s(s({ref:r},d),{},{components:t})):a.a.createElement(b,s({ref:r},d))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(2),a=t(6),o=(t(0),t(103)),i={id:"rnds",title:"RNDS",sidebar_label:"Apresenta\xe7\xe3o"},s={unversionedId:"rnds",id:"rnds",isDocsHomePage:!1,title:"RNDS",description:"Na perspectiva de um estabelecimento de sa\xfade, a Rede Nacional de Dados em Sa\xfade (RNDS) oferece servi\xe7os",source:"@site/docs/rnds.md",slug:"/rnds",permalink:"/rnds/docs/rnds",editUrl:"https://github.com/kyriosdata/rnds/edit/master/guia/docs/rnds.md",version:"current",sidebar_label:"Apresenta\xe7\xe3o",sidebar:"someSidebar",previous:{title:"Contexto",permalink:"/rnds/docs/contexto"},next:{title:"Servi\xe7os",permalink:"/rnds/docs/servicos"}},c=[],d={rightToc:c};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Na perspectiva de um estabelecimento de sa\xfade, a Rede Nacional de Dados em Sa\xfade (RNDS) oferece servi\xe7os\npara a interoperabilidade em sa\xfade no territ\xf3rio nacional. Noutras\npalavras, \xe9 por meio da RNDS que a "informa\xe7\xe3o em sa\xfade estar\xe1 dispon\xedvel\nonde \xe9 necess\xe1ria". '),Object(o.b)("p",null,"Os ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./servicos"}),"servi\xe7os")," oferecidos, no momento, est\xe3o voltados para\na notifica\xe7\xe3o de resultados de exames de SARS-CoV-2. "),Object(o.b)("p",null,"Tais servi\xe7os est\xe3o em conformidade com o padr\xe3o ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://hl7.org/fhir/"}),"FHIR"),", adotado pelo Brasil, e com as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./perfis"}),"defini\xe7\xf5es")," necess\xe1rias para acomodar as especificidades nacionais. "),Object(o.b)("p",null,"O resultado de exame laboratorial, escopo do primeiro conjunto de servi\xe7os, encontra-se devidamente ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./resultado"}),"detalhado"),". Desta forma, exemplifica como o\nFHIR pode ser empregado em conformidade com os perfis estabelecidos\npelo Brasil.  "),Object(o.b)("p",null,"Por fim, tais servi\xe7os est\xe3o dispon\xedveis por meio de dois ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./ambientes"}),"ambientes"),". S\xe3o eles que viabilizam uma rede nacional de dados em sa\xfade.  "))}p.isMDXComponent=!0}}]);