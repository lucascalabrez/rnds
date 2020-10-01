(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{106:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var a=t(0),n=t.n(a);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),d=function(e){var r=n.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=d(e.components);return n.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},f=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(t),f=a,m=l["".concat(o,".").concat(f)]||l[f]||u[f]||i;return t?n.a.createElement(m,s(s({ref:r},p),{},{components:t})):n.a.createElement(m,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},69:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return d}));var a=t(2),n=t(6),i=(t(0),t(106)),o={id:"perfis",title:"Defini\xe7\xf5es",sidebar_label:"Defini\xe7\xf5es"},s={unversionedId:"rnds/perfis",id:"rnds/perfis",isDocsHomePage:!1,title:"Defini\xe7\xf5es",description:"FHIR \xe9 um padr\xe3o proposto para ser estendido e, dessa forma, permitir que especificidades locais sejam contempladas.",source:"@site/docs\\rnds\\perfis.md",slug:"/rnds/perfis",permalink:"/rnds/docs/rnds/perfis",editUrl:"https://github.com/kyriosdata/rnds/edit/master/guia/docs/rnds/perfis.md",version:"current",sidebar_label:"Defini\xe7\xf5es",sidebar:"someSidebar",previous:{title:"Servi\xe7os",permalink:"/rnds/docs/rnds/servicos"},next:{title:"Resultado de Exame Laboratorial",permalink:"/rnds/docs/rnds/resultado"}},c=[],p={rightToc:c};function d(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"FHIR \xe9 um padr\xe3o proposto para ser estendido e, dessa forma, permitir que especificidades locais sejam contempladas."),Object(i.b)("p",null,'A RNDS j\xe1 realizou v\xe1rias "adequa\xe7\xf5es" para o Brasil, definiu perfis (',Object(i.b)("em",{parentName:"p"},"profiles"),"), criou sistemas de c\xf3digos (",Object(i.b)("em",{parentName:"p"},"code systems"),"), conjuntos de valores (",Object(i.b)("em",{parentName:"p"},"value sets"),") e extens\xf5es. Naturalmente, na intera\xe7\xe3o com a RNDS esta particulariza\xe7\xe3o para o contexto nacional deve ser atendida. Em consequ\xeancia, todas as defini\xe7\xf5es devem ser amplamente disponibilizadas\naos estabelecimentos de sa\xfade."),Object(i.b)("p",null,"As defini\xe7\xf5es est\xe3o acess\xedveis:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No arquivo ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://mobileapps.saude.gov.br/portal-servicos/files/f3bd659c8c8ae3ee966e575fde27eb58/9c3445f12823fd4c4f66e107617fc131_inp88qqqi.zip"}),"zip"),". Este arquivo \xe9 particularmente \xfatil para o processo de verifica\xe7\xe3o por meio de software. Ou seja, antes que um recursos seja enviado, pode-se verificar se as defini\xe7\xf5es estabelecidas pela RNDS s\xe3o atendidas. O software que realizada a verifica\xe7\xe3o ter\xe1 que consultar os v\xe1rios esquemas estabelecidos em arquivos contidos neste zip.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No projeto ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://simplifier.net/RedeNacionaldeDadosemSade"}),"RNDS no portal Simplifier.NET"),". Este servi\xe7o, via navegador, inclui recursos de navega\xe7\xe3o e visualiza\xe7\xe3o das defini\xe7\xf5es, o que o torna atrativo para consumo humano e, em particular, ambienta\xe7\xf5es com as personaliza\xe7\xf5es nacionais."))))}d.isMDXComponent=!0}}]);