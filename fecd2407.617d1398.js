(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{105:function(e,r,o){"use strict";o.r(r),o.d(r,"frontMatter",(function(){return i})),o.d(r,"metadata",(function(){return s})),o.d(r,"rightToc",(function(){return c})),o.d(r,"default",(function(){return d}));var n=o(2),t=o(6),a=(o(0),o(111)),i={id:"erros",title:"Erros",sidebar_label:"Erros"},s={unversionedId:"ti/erros",id:"ti/erros",isDocsHomePage:!1,title:"Erros",description:"Requisi\xe7\xf5es",source:"@site/docs\\ti\\erros.md",slug:"/ti/erros",permalink:"/rnds/docs/ti/erros",editUrl:"https://github.com/kyriosdata/rnds/edit/master/guia/docs/ti/erros.md",version:"current",sidebar_label:"Erros",sidebar:"someSidebar",previous:{title:"Requisi\xe7\xf5es",permalink:"/rnds/docs/ti/requisicoes"},next:{title:"Autentica\xe7\xe3o",permalink:"/rnds/docs/ti/autenticacao"}},c=[{value:"Requisi\xe7\xf5es",id:"requisi\xe7\xf5es",children:[]},{value:"Erros",id:"erros",children:[]}],u={rightToc:c};function d(e){var r=e.components,o=Object(t.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,o,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"requisi\xe7\xf5es"},"Requisi\xe7\xf5es"),Object(a.b)("h4",{id:"obter-token"},"Obter token"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "access_token": "longa sequencia aqui. Este token ser\xe1 necess\xe1rio, o valor deste campo, em todas as demais requisi\xe7\xf5es. Ele ser\xe1 fornecido por meio do header X-Authorization-Server, conforme detalhado abaixo.",\n  "scope": "read write",\n  "token_type": "jwt",\n  "expires_in": 1800000\n}\n')),Object(a.b)("p",null,"O valor da propriedade ",Object(a.b)("strong",{parentName:"p"},"access_token")," ser\xe1 empregado em todas as demais requisi\xe7\xf5es. As requisi\xe7\xf5es fazem uso deste valor por\nmeio do header ",Object(a.b)("strong",{parentName:"p"},"X-Authorization-Server"),". Em particular, o valor deste ",Object(a.b)("em",{parentName:"p"},"header")," deve ser fornecido no seguinte formato:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"X-Authorization-Server: Bearer <valor-de-access-token-aqui>\n")),Object(a.b)("h4",{id:"c\xf3digo-inv\xe1lido-cns"},"C\xf3digo inv\xe1lido CNS"),Object(a.b)("p",null,"Na consulta por profissional via CNS, se o c\xf3digo CNS \xe9 inv\xe1lido, por exemplo, ent\xe3o tem-se o resultado abaixo:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "processing",\n      "diagnostics": "Resource Practitioner/<codivo-invalido> is not known"\n    }\n  ]\n}\n')),Object(a.b)("h4",{id:"submeter-bundle-com-identificador-inv\xe1lido-do-solicitante"},"Submeter bundle com identificador inv\xe1lido do solicitante"),Object(a.b)("p",null,"O identificador do solicitante, ap\xf3s devidamente cadastrado, pode ser recuperado conforme ilustrado abaixo, pelo Portal de Servi\xe7os:"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/1735792/90821002-9eb30f80-e308-11ea-8636-58645a1fa3c2.png",alt:"image"}))),Object(a.b)("p",null,'O identificador que acima segue ocultado, deve ser fornecido no lugar do texto "qualquer", no trecho da requisi\xe7\xe3o (bundle),\nconforme ilustrado abaixo:'),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'    "identifier": {\n        "system": "http://www.saude.gov.br/fhir/r4/NamingSystem/BRRNDS-qualquer",\n        "value": "valor-unico-do-bundle-para-o-lab"\n    },\n')),Object(a.b)("p",null,'Se o valor "qualquer" n\xe3o \xe9 substitu\xeddo pelo identificador do solicitante, a resposta ser\xe1 aquela abaixo:'),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "security",\n      "diagnostics": "(EHR-ERR881) Voc\xea n\xe3o possui autoriza\xe7\xe3o para utilizar esse sistema de origem: http://www.saude.gov.br/fhir/r4/NamingSystem/BRRNDS-qualquer"\n    }\n  ]\n}\n')),Object(a.b)("h4",{id:"422-submeter-recurso-com-n\xfamero-que-n\xe3o-\xe9-\xfanico-para-o-laborat\xf3rio"},"(422) Submeter recurso com n\xfamero que n\xe3o \xe9 \xfanico para o laborat\xf3rio"),Object(a.b)("p",null,"Este identificador \xe9 aquele fornecido por meio da propriedade ",Object(a.b)("strong",{parentName:"p"},"identifier.value")," do ",Object(a.b)("em",{parentName:"p"},"bundle"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "processing",\n      "diagnostics": "(EHR-ERR866) O identifier informado j\xe1 foi utilizado para cadastrar outro documento e n\xe3o pode ser repetido."\n    }\n  ]\n}\n')),Object(a.b)("h3",{id:"erros"},"Erros"),Object(a.b)("h4",{id:"requisi\xe7\xf5es-dependem-de-valores-de-entrada"},"Requisi\xe7\xf5es dependem de valores de entrada"),Object(a.b)("p",null,"A consulta a um estabelecimento de sa\xfade via seu CNES exige que o c\xf3digo correspondente seja fornecido na URL, por exemplo,\n",Object(a.b)("inlineCode",{parentName:"p"},"https://ehr-services.hmg.saude.gov.br/api;fhir/r4/Organization/2337991"),". Se o c\xf3digo, neste exemplo, ",Object(a.b)("inlineCode",{parentName:"p"},"2337991")," ou outro n\xe3o\n\xe9 fornecido, ent\xe3o voc\xea receber\xe1 como resposta o conte\xfado abaixo:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "processing",\n      "diagnostics": "Invalid request: The FHIR endpoint on this server does not know how to handle GET operation[Organization/] with parameters [[]]"\n    }\n  ]\n}\n')),Object(a.b)("h4",{id:"requisi\xe7\xe3o-com-consist\xeancia-verificada"},"Requisi\xe7\xe3o com consist\xeancia verificada"),Object(a.b)("p",null,"A consulta por CNES retorna a resposta abaixo se o profissional de sa\xfade em nome do qual a\nrequisi\xe7\xe3o \xe9 feita (valor omitido na resposta abaixo) n\xe3o possui v\xednculo com a credencial tamb\xe9m omitida."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "security",\n      "diagnostics": "(EHR-ERR906) Profissional CNS <numero aqui> n\xe3o autorizado, pois n\xe3o possui v\xednculo CBO autorizado em nenhum dos estabelecimentos autorizados para a credencial <numero aqui>."\n    }\n  ]\n}\n')),Object(a.b)("h4",{id:"401-token-empregado-para-a-requisi\xe7\xe3o-expirou"},"(401) Token empregado para a requisi\xe7\xe3o expirou"),Object(a.b)("p",null,"Lembre-se de que o ",Object(a.b)("em",{parentName:"p"},"token"),", quando obtido, tem uma validade de 30 minutos. Ap\xf3s estes 30 minutos\nqualquer requisi\xe7\xe3o que o utilize ir\xe1 retornar algo similar ao conte\xfado abaixo:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n    "resourceType": "OperationOutcome",\n    "issue": [\n        {\n            "severity": "error",\n            "code": "security",\n            "diagnostics": "(EHR-ERR882) O token de certificado usado para autorizar o acesso n\xe3o \xe9 v\xe1lido. JWT expired at 2020-08-19T23:54:28Z. Current time: 2020-08-20T11:00:27Z, a difference of 39959356 milliseconds.  Allowed clock skew: 0 milliseconds."\n        }\n    ]\n}\n')),Object(a.b)("h4",{id:"422-valor-de-status-diferente-de-final"},'(422) Valor de "status" diferente de "final"'),Object(a.b)("p",null,"Se tentar submeter um laudo, cujo ",Object(a.b)("strong",{parentName:"p"},"status")," \xe9 diferente de ",Object(a.b)("strong",{parentName:"p"},"final"),", conforme ilustrado abaixo"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/1735792/91478272-f5bf6400-e875-11ea-98ab-ac7961384967.png",alt:"image"}))),Object(a.b)("p",null,"e compat\xedvel com o perfil ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://simplifier.net/RedeNacionaldeDadosemSade/BREstadoDocumento-1.0"}),"Estados do documento"),", ter\xe1 como resposta"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n    "resourceType": "OperationOutcome",\n    "issue": [\n        {\n            "severity": "error",\n            "code": "processing",\n            "diagnostics": "(EHR-ERR924) Ao enviar um documento \xe9 obrigat\xf3rio utilizar o status: final"\n        }\n    ]\n}\n')))}d.isMDXComponent=!0},111:function(e,r,o){"use strict";o.d(r,"a",(function(){return l})),o.d(r,"b",(function(){return m}));var n=o(0),t=o.n(n);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function c(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var u=t.a.createContext({}),d=function(e){var r=t.a.useContext(u),o=r;return e&&(o="function"==typeof e?e(r):s(s({},r),e)),o},l=function(e){var r=d(e.components);return t.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.a.createElement(t.a.Fragment,{},r)}},b=t.a.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(o),b=n,m=l["".concat(i,".").concat(b)]||l[b]||p[b]||a;return o?t.a.createElement(m,s(s({ref:r},u),{},{components:o})):t.a.createElement(m,s({ref:r},u))}));function m(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);