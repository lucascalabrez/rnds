(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{115:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return i})),r.d(a,"metadata",(function(){return n})),r.d(a,"rightToc",(function(){return p})),r.d(a,"default",(function(){return m}));var o=r(2),t=r(6),s=(r(0),r(133)),i={id:"tecnologias",title:"Ecossistema FHIR",sidebar_label:"Ecossistema FHIR"},n={unversionedId:"tecnologias",id:"tecnologias",isDocsHomePage:!1,title:"Ecossistema FHIR",description:"FHIR",source:"@site/docs\\tecnologias.md",slug:"/tecnologias",permalink:"/rnds/docs/tecnologias",editUrl:"https://github.com/kyriosdata/rnds/edit/master/guia/docs/tecnologias.md",version:"current",sidebar_label:"Ecossistema FHIR",sidebar:"someSidebar",previous:{title:"Defini\xe7\xf5es",permalink:"/rnds/docs/definicoes"},next:{title:"Ambientes",permalink:"/rnds/docs/ambientes"}},p=[{value:"FHIR",id:"fhir",children:[]},{value:"Forge (editor de perfis)",id:"forge-editor-de-perfis",children:[]},{value:"Simplifier.NET",id:"simplifiernet",children:[]},{value:"JSON (h\xe1 ainda XML e RDF)",id:"json-h\xe1-ainda-xml-e-rdf",children:[]},{value:"Implementa\xe7\xe3o do FHIR",id:"implementa\xe7\xe3o-do-fhir",children:[]},{value:"Implementa\xe7\xf5es para testes",id:"implementa\xe7\xf5es-para-testes",children:[]},{value:"RESTful API FHIR",id:"restful-api-fhir",children:[]},{value:"FHIRPath",id:"fhirpath",children:[]}],c={rightToc:p};function m(e){var a=e.components,r=Object(t.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},c,r,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"fhir"},"FHIR"),Object(s.b)("p",null,Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://hl7.org/fhir/"}),"FHIR")," ",Object(s.b)("em",{parentName:"p"},"\xe9 um padr\xe3o para a troca de dados em sa\xfade"),", o acr\xf4nimo vem de ",Object(s.b)("em",{parentName:"p"},"Fast Healthcare Interoperability Resources"),". Destacado no pr\xf3prio nome, ",Object(s.b)("em",{parentName:"p"},"resource"),", ou recurso, \xe9 o elemento b\xe1sico empregado para a interoperabilidade de sistemas de informa\xe7\xe3o em sa\xfade usando FHIR."),Object(s.b)("p",null,"Um recurso representa algum tipo de entidade do cuidado em sa\xfade. Por exemplo, o recurso ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/patient.html"}),Object(s.b)("em",{parentName:"a"},"Patient"))," \xe9 empregado para dados demogr\xe1ficos ou outra informa\xe7\xe3o administrativa acerca do indiv\xedduo. Por outro lado, se o que se deseja trocar s\xe3o medidas como press\xe3o ou temperatura, por exemplo, ent\xe3o far\xe1 uso do recurso ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/observation.html"}),Object(s.b)("em",{parentName:"a"},"Observation")),". No momento em que esta p\xe1gina \xe9 escrita est\xe3o definidos 145 tipos distintos de ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/resourcelist.html"}),"recursos"),". Todos eles devidamente documentados."),Object(s.b)("p",null,"Est\xe1 al\xe9m do escopo apresentar o FHIR em abrang\xeancia e profundidade. Os primeiros passos podem ser orientados por ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://blog.heliossoftware.com/fhir-training-the-early-steps-of-mastering-hl7-fhir-997d8dfa1320"}),"aqui"),"."),Object(s.b)("h3",{id:"forge-editor-de-perfis"},"Forge (editor de perfis)"),Object(s.b)("p",null,'O FHIR visa contemplar um conjunto razo\xe1vel de cen\xe1rios, mas n\xe3o \xe9 poss\xedvel abarcar os usos espec\xedficos de todo o planeta. Felizmente, o FHIR permite "personaliza\xe7\xf5es" por meio de perfis (',Object(s.b)("em",{parentName:"p"},"profiles"),")."),Object(s.b)("p",null,"A defini\xe7\xe3o de perfis \xe9 um esfor\xe7o de modelagem de informa\xe7\xe3o em sa\xfade.\nDesenvolvedores ter\xe3o que ter acesso aos perfis que personalizam os recursos a serem trocados. Afinal, toda a troca de\ndados dever\xe1 estar em conformidade com os perfis definidos. Veja ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"./perfis"}),"Perfis")," para acesso aos perfis definidos pela RNDS."),Object(s.b)("p",null,"A edi\xe7\xe3o de um perfil \xe9 melhor realizada com o apoio de um editor\nespec\xedfico para esta finalidade. ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://simplifier.net/forge"}),"Forge"),", dispon\xedvel para Windows, \xe9 uma op\xe7\xe3o."),Object(s.b)("p",null,"Conv\xe9m ressaltar que para a integra\xe7\xe3o com a RNDS n\xe3o ser\xe1 necess\xe1rio definir perfis (",Object(s.b)("em",{parentName:"p"},"profiles"),"). Esta \xe9 uma atribui\xe7\xe3o da RNDS e os ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"./perfis"}),"perfis")," j\xe1 est\xe3o definidos. O acesso a eles, contudo, \xe9 necess\xe1rio para verificar se as personaliza\xe7\xf5es definidas s\xe3o atendidas."),Object(s.b)("h3",{id:"simplifiernet"},"Simplifier.NET"),Object(s.b)("p",null,Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://simplifier.net"}),"Simplifier.NET")," \xe9 um servi\xe7o que permite\npublicar e consultar perfis (",Object(s.b)("em",{parentName:"p"},"profiles"),"). Conv\xe9m ressaltar que perfis precisam ser conhecidos entre as partes que ir\xe3o interagir e que ferramenta a Forge, por exemplo, apresentada na se\xe7\xe3o anterior, permite apenas cri\xe1-los."),Object(s.b)("p",null,"As facilidades oferecidas pelo Simplifier.NET incluem a navega\xe7\xe3o entre recursos e defini\xe7\xf5es pertinentes, o que \xe9 desej\xe1vel para\nquem deseja consultar perfis."),Object(s.b)("p",null,"Os ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"./perfis"}),"perfis")," definidos pela RNDS podem ser consultados via este servi\xe7o."),Object(s.b)("h2",{id:"json-h\xe1-ainda-xml-e-rdf"},"JSON (h\xe1 ainda XML e RDF)"),Object(s.b)("p",null,"Quando se usa o FHIR para troca de dados, o que ocorre \xe9 a troca de recursos. Tais recursos podem trafegar representados em v\xe1rios formatos, dentre eles, JSON. Este guia de integra\xe7\xe3o faz uso de JSON."),Object(s.b)("p",null,"O portal oficial define ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.json.org/json-en.html"}),"JSON")," (JavaScript Object Notation) como ",Object(s.b)("em",{parentName:"p"},"um formato leve para troca de dados"),". Ainda acrescenta que este formato \xe9 ",Object(s.b)("em",{parentName:"p"},"f\xe1cil para seres humanos escreverem e lerem"),"."),Object(s.b)("p",null,Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/XML"}),"XML"),", \xe0 semelhan\xe7a de JSON, \xe9 comumente empregado em ",Object(s.b)("em",{parentName:"p"},"web services")," (servi\xe7os oferecidos por meio da internet). Por outro lado, ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/rdf.html"}),"RDF")," est\xe1 associado, em geral, a quest\xf5es sem\xe2nticas, por exemplo, quando se deseja realizar infer\xeancia sobre os dados."),Object(s.b)("h2",{id:"implementa\xe7\xe3o-do-fhir"},"Implementa\xe7\xe3o do FHIR"),Object(s.b)("p",null,"FHIR \xe9 uma especifica\xe7\xe3o, um padr\xe3o. Computador, por outro lado, precisa de um software que implementa este padr\xe3o para ser executado. H\xe1 v\xe1rias implementa\xe7\xf5es do padr\xe3o FHIR e algumas s\xe3o ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://wiki.hl7.org/Open_Source_FHIR_implementations"}),Object(s.b)("em",{parentName:"a"},"open source")),", como a implementa\xe7\xe3o de refer\xeancia do FHIR, a ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://hapifhir.io"}),"Hapi FHIR"),"."),Object(s.b)("p",null,"A integra\xe7\xe3o com a RNDS significa que h\xe1 uma implementa\xe7\xe3o do FHIR oferecida pela RNDS, observando os perfis definidas pela RNDS, por meio da qual laborat\xf3rios e outros estabelecimentos de s\xfade consultam e enviam informa\xe7\xf5es de sa\xfade."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Quem disponibiliza uma implementa\xe7\xe3o do FHIR \xe9 a RNDS. Laborat\xf3rios s\xe3o clientes desta implementa\xe7\xe3o. Laborat\xf3rios n\xe3o precisam disponibilizar uma implementa\xe7\xe3o do FHIR.")),Object(s.b)("p",null,"A implementa\xe7\xe3o do FHIR oferecida pela RNDS est\xe1 dispon\xedvel em dois ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"/rnds/docs/ambientes"}),"ambientes"),", um de homologa\xe7\xe3o e outro de produ\xe7\xe3o."),Object(s.b)("h2",{id:"implementa\xe7\xf5es-para-testes"},"Implementa\xe7\xf5es para testes"),Object(s.b)("p",null,"H\xe1 ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://wiki.hl7.org/Publicly_Available_FHIR_Servers_for_testing"}),"v\xe1rios")," servidores dispon\xedveis para experimenta\xe7\xe3o com o FHIR. Ou seja, s\xe3o computadores que est\xe3o executando alguma implementa\xe7\xe3o do FHIR e n\xe3o cobram nada por isso. Estes servidores s\xe3o empregados apenas para testes, o que\n\xe9 suficiente para desenvolvedores que queiram conhecer mais sobre o padr\xe3o."),Object(s.b)("p",null,"Cada um destes servidores funciona como um estabelecimento apto a interagir com outros por meio do FHIR. Desta forma, sem exig\xeancias que s\xe3o necess\xe1rias em um cen\xe1rio real, at\xe9 porque os dados disponibilizados n\xe3o s\xe3o dados reais, voc\xea pode submeter requisi\xe7\xf5es e observar os recursos retornados no formato da sua escolha, em geral XML ou JSON, conforme visto anteriormente."),Object(s.b)("p",null,"Desenvolvedores podem empregar estes servidores para se ambientar com o padr\xe3o FHIR. De fato, o acesso ao ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"/rnds/docs/ambientes"}),"ambiente")," de homologa\xe7\xe3o da RNDS pode ser precedido pelo contato com um destes servidores."),Object(s.b)("p",null,'Antes que o respons\xe1vel pelo laborat\xf3rio obtenha um certificado digital, pe\xe7a o credenciamento e aguarde pela homologa\xe7\xe3o, desenvolvedores podem empregar um destes servidores para experimenta\xe7\xe3o. Conv\xe9m observar, contudo, que nestes casos tais servidores n\xe3o estar\xe3o aderentes aos perfis estabelecidos pela RNDS.\nOu seja, seguem o padr\xe3o FHIR, mas sem "obdecer" as especificidades impostas pelos perfis nacionais.'),Object(s.b)("p",null,"Em tempo, a implementa\xe7\xe3o de refer\xeancia do FHIR, Hapi FHIR, citada anteriormente, tamb\xe9m possui um servidor para testes dispon\xedvel em ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"http://hapi.fhir.org/"}),"http://hapi.fhir.org/"),"."),Object(s.b)("h2",{id:"restful-api-fhir"},"RESTful API FHIR"),Object(s.b)("p",null,"H\xe1 uma API (",Object(s.b)("em",{parentName:"p"},"Application Programming Interface"),") bem-definida para o acesso\na um servidor FHIR. Trata-se de uma RESTFul API, a ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"http://hl7.org/fhir/http.html"}),"RESTful API FHIR"),"."),Object(s.b)("p",null,"Consulte ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://restfulapi.net/"}),"What is REST")," para saber o que \xe9 uma RESTful API, e portais ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Kikobeats/awesome-api"}),"pertinentes"),". RESTful API \xe9 um estilo amplamente empregado para integra\xe7\xe3o entre sistemas, e n\xe3o \xe9 espec\xedfico para a sa\xfade. H\xe1 um conjunto significativo de servi\xe7\xf5es dispon\xedveis\npor meio de uma RESTful API (veja uma lista deles ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://medium.com/better-programming/a-curated-list-of-100-cool-and-fun-public-apis-to-inspire-your-next-project-7600ce3e9b3"}),"aqui"),")."),Object(s.b)("h2",{id:"fhirpath"},"FHIRPath"),Object(s.b)("p",null,"FHIRPath \xe9 um mecanismo para manusear documentos JSON contendo recursos FHIR.\nTrata-se de proposta similar \xe0 JsonPath e XML Path, por exemplo. Contudo,\npossui fun\xe7\xf5es espec\xedficas para documentos contendo recursos FHIR."))}m.isMDXComponent=!0},133:function(e,a,r){"use strict";r.d(a,"a",(function(){return d})),r.d(a,"b",(function(){return b}));var o=r(0),t=r.n(o);function s(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){s(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a){if(null==e)return{};var r,o,t=function(e,a){if(null==e)return{};var r,o,t={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=t.a.createContext({}),m=function(e){var a=t.a.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):n(n({},a),e)),r},d=function(e){var a=m(e.components);return t.a.createElement(c.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},u=t.a.forwardRef((function(e,a){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,b=d["".concat(i,".").concat(u)]||d[u]||l[u]||s;return r?t.a.createElement(b,n(n({ref:a},c),{},{components:r})):t.a.createElement(b,n({ref:a},c))}));function b(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=u;var n={};for(var p in a)hasOwnProperty.call(a,p)&&(n[p]=a[p]);n.originalType=e,n.mdxType="string"==typeof e?e:o,i[1]=n;for(var c=2;c<s;c++)i[c]=r[c];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);