(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{111:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||n;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,c=new Array(n);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<n;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var o=r(2),a=r(6),n=(r(0),r(111)),c={id:"keytool",title:"keytool",sidebar_label:"keytool"},i={unversionedId:"tools/keytool",id:"tools/keytool",isDocsHomePage:!1,title:"keytool",description:"keytool \xe9 uma ferramenta usada via linha de comandos para gerenciar um",source:"@site/docs\\tools\\keytool.md",slug:"/tools/keytool",permalink:"/rnds/docs/tools/keytool",editUrl:"https://github.com/kyriosdata/rnds/edit/master/guia/docs/tools/keytool.md",version:"current",sidebar_label:"keytool",sidebar:"someSidebar",previous:{title:"FHIRPath",permalink:"/rnds/docs/tools/fhirpath"},next:{title:"Valida\xe7\xe3o de Recursos",permalink:"/rnds/docs/tools/validacao"}},s=[],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/10/tools/keytool.htm#JSWOR-GUID-5990A2E4-78E3-47B7-AE75-6D1826259549"}),"keytool")," \xe9 uma ferramenta usada via linha de comandos para gerenciar um\n",Object(n.b)("em",{parentName:"p"},"keystore"),", ou base de dados contendo chaves, cadeias de certificados e certificados confi\xe1veis (",Object(n.b)("em",{parentName:"p"},"trusted certificates"),"). A ",Object(n.b)("em",{parentName:"p"},"keytool")," \xe9 uma das\nv\xe1rias ferramentas que acompanham as distribui\xe7\xf5es de Java, por exemplo,\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://adoptopenjdk.net/"}),"OpenJDK"),"."),Object(n.b)("p",null,"A ferramenta ",Object(n.b)("em",{parentName:"p"},"keytool"),' \xe9 empregada para acrescentar o certificado da autoridade\ncertificadora que criou o certificado empregado pelos servi\xe7os oferecidos pelo\nDATASUS. Desta forma, uma aplica\xe7\xe3o em Java ter\xe1 "confian\xe7a" no certificado\nempregado pelos servidores do DATASUS. Veja ',Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/rnds/docs/ti/autenticacao"}),"autentica\xe7\xe3o")," para detalhes."))}p.isMDXComponent=!0}}]);