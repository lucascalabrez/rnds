(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{102:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return s})),o.d(a,"metadata",(function(){return n})),o.d(a,"rightToc",(function(){return c})),o.d(a,"default",(function(){return p}));var t=o(2),r=o(6),i=(o(0),o(115)),s={id:"conhecer",title:"Conhecer os servi\xe7os",sidebar_label:"Conhecer os servi\xe7os"},n={unversionedId:"ti/conhecer",id:"ti/conhecer",isDocsHomePage:!1,title:"Conhecer os servi\xe7os",description:"A integra\xe7\xe3o via padr\xe3o FHIR e perfis definidos pela RNDS realiza-se por meio de requisi\xe7\xf5es https, que devem partir do estabelecimento de sa\xfade e atingir o ambiente de produ\xe7\xe3o da RNDS (neste guia \xe9 feito uso do ambiente de homologa\xe7\xe3o).",source:"@site/docs\\ti\\conhecer.md",slug:"/ti/conhecer",permalink:"/rnds/docs/ti/conhecer",editUrl:"https://github.com/kyriosdata/rnds/edit/master/guia/docs/ti/conhecer.md",version:"current",sidebar_label:"Conhecer os servi\xe7os",sidebar:"someSidebar",previous:{title:"Respons\xe1vel pela TI",permalink:"/rnds/docs/ti/ti"},next:{title:"Desenvolver",permalink:"/rnds/docs/ti/si"}},c=[{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",children:[]},{value:"Passos",id:"passos",children:[]},{value:"Importar <em>collection</em>",id:"importar-collection",children:[]},{value:"Fornecer o certificado digital para uso",id:"fornecer-o-certificado-digital-para-uso",children:[]},{value:"Configurar vari\xe1veis",id:"configurar-vari\xe1veis",children:[]},{value:"Experimentar requisi\xe7\xf5es",id:"experimentar-requisi\xe7\xf5es",children:[]},{value:"Parab\xe9ns!",id:"parab\xe9ns",children:[]}],d={rightToc:c};function p(e){var a=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},d,s,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A integra\xe7\xe3o via padr\xe3o FHIR e ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"../rnds/perfis"}),"perfis")," definidos pela RNDS realiza-se por meio de ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://documenter.getpostman.com/view/2163377/TVRd9Wad"}),"requisi\xe7\xf5es https"),", que devem partir do estabelecimento de sa\xfade e atingir o ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"../rnds/ambientes"}),"ambiente")," de produ\xe7\xe3o da RNDS (neste guia \xe9 feito uso do ambiente de homologa\xe7\xe3o)."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Neste documento \xe9 apresentado como submeter tais requisi\xe7\xf5es.")),Object(i.b)("p",null,"A submiss\xe3o de requisi\xe7\xf5es ser\xe1 feita por meio da ferramenta\n",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.postman.com/downloads/"}),"Postman")," (empregada por desenvolvedores para intera\xe7\xe3o com ",Object(i.b)("em",{parentName:"p"},"web services"),"). Desta forma,\nsem escrever uma \xfanica linha de c\xf3digo, detalhes das requisi\xe7\xf5es podem consultados e o ambiente de homologa\xe7\xe3o experimentado (portas Auth e EHR), o que \xe9 relevante para\na produ\xe7\xe3o de c\xf3digo correspondente."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:o(250).default})),Object(i.b)("p",null,"Ao final, espera-se que:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Voc\xea saiba quais s\xe3o as requisi\xe7\xf5es dispon\xedveis."),Object(i.b)("li",{parentName:"ul"},"Voc\xea saiba quais s\xe3o os ",Object(i.b)("em",{parentName:"li"},"headers")," necess\xe1rios e como montar os valores correspondentes."),Object(i.b)("li",{parentName:"ul"},"Voc\xea saiba quais os dados a serem enviados por cada requisi\xe7\xe3o, ou ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"../intro/glossario#payload"}),"payload"),"."),Object(i.b)("li",{parentName:"ul"},"Voc\xea saiba submeter as requisi\xe7\xf5es por meio da ferramenta Postman."),Object(i.b)("li",{parentName:"ul"},"Voc\xea saiba experimentar valores diferentes para o ",Object(i.b)("em",{parentName:"li"},"payload"),", ",Object(i.b)("em",{parentName:"li"},"headers")," e observar os resultados."),Object(i.b)("li",{parentName:"ul"},"Voc\xea saiba interagir com a RNDS usando HTTPS."),Object(i.b)("li",{parentName:"ul"},"Voc\xea saiba empregar o certificado digital do laborat\xf3rio."),Object(i.b)("li",{parentName:"ul"},"Voc\xea saiba como realizar as atividades acima empregando a linguagem de program\xe7\xe3o Java."),Object(i.b)("li",{parentName:"ul"},"Voc\xea esteja apto para construir o ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"./si"}),"Software de Integra\xe7\xe3o"),".")),Object(i.b)("h3",{id:"pr\xe9-requisitos"},"Pr\xe9-requisitos"),Object(i.b)("p",null,"Conforme ilustrado na figura acima, o uso do Postman depende de tr\xeas informa\xe7\xf5es e dois arquivos:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Informa\xe7\xf5es necess\xe1rias:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"../gestor/identificador"}),"Identificador do solicitante")," fornecido pela RNDS quando a ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"../gestor/portal"}),"solicita\xe7\xe3o de acesso")," \xe9 aprovada. Esta aprova\xe7\xe3o, al\xe9m de definir o identificador do solicitante, tamb\xe9m autoriza o acesso ao ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"../rnds/ambientes"}),"ambiente de homologa\xe7\xe3o"),"."),Object(i.b)("li",{parentName:"ul"},"CNES. O CNES do laborat\xf3rio."),Object(i.b)("li",{parentName:"ul"},"CNS de um profissional de sa\xfade lotado no estabelecimento de sa\xfade cujo CNES \xe9 fornecido acima. O CNS indica em nome do quem as requisi\xe7\xf5es ao ambiente de homologa\xe7\xe3o ser\xe3o feitas."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Arquivos necess\xe1rios:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"../gestor/certificado"}),"Certificado digital"),". O arquivo correspondente deve estar dispon\xedvel, \xe9 um arquivo com a extens\xe3o ",Object(i.b)("strong",{parentName:"p"},".pfx"),", aqui ser\xe1 referenciado por ",Object(i.b)("strong",{parentName:"p"},"certificado.pfx"),". Tamb\xe9m ser\xe1 necess\xe1ria a senha para acesso ao conte\xfado do certificado.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Baixe o arquivo JSON (",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/kyriosdata/rnds/master/tools/postman/rnds-postman-collection.json"}),"collection"),"), empregado pelo Postman, contendo as requisi\xe7\xf5es a serem submetidas ao ambiente de homologa\xe7\xe3o. Al\xe9m das requisi\xe7\xf5es este arquivo tamb\xe9m cont\xe9m a documenta\xe7\xe3o de cada uma delas. A documenta\xe7\xe3o das requisi\xe7\xf5es tamb\xe9m encontra-se amplamente dispon\xedvel ","[online]","](",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://documenter.getpostman.com/view/215332/TVewY47S"}),"https://documenter.getpostman.com/view/215332/TVewY47S"),")."))))),Object(i.b)("h3",{id:"passos"},"Passos"),Object(i.b)("p",null,"De posse das informa\xe7\xf5es e dos arquivos, veja se\xe7\xe3o anterior, pode-se configurar o Postman: (a) importar ",Object(i.b)("em",{parentName:"p"},"collection"),"; (b) configurar certificado digital e (c) configurar vari\xe1veis."),Object(i.b)("h3",{id:"importar-collection"},"Importar ",Object(i.b)("em",{parentName:"h3"},"collection")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Veja o v\xeddeo acerca de como importar ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://drive.google.com/file/d/13hbA4uZlX_90wFt0ktCvkX2jBbhFkoDC/view"}),"aqui"))),Object(i.b)("p",null,"Ao abrir o Postman voc\xea ver\xe1 uma tela similar \xe0quela abaixo, exceto que n\xe3o ter\xe1 o destaque para o bot\xe3o ",Object(i.b)("inlineCode",{parentName:"p"},"Import"),', empregado para "importar" o arquivo baixado anteriormente:'),Object(i.b)("p",null,Object(i.b)("img",{alt:"postman-abertura",src:o(251).default})),Object(i.b)("p",null,'Ap\xf3s importado, o resultado \xe9 similar \xe0quele abaixo. A vers\xe3o pode ser diferente, por exemplo. Observe que est\xe3o dispon\xedveis 11 requisi\xe7\xf5es, agrupadas naquelas de "Seguran\xe7a" e "Sa\xfade".'),Object(i.b)("p",null,Object(i.b)("img",{alt:"image",src:o(252).default})),Object(i.b)("p",null,"Neste ponto pode-se selecionar uma das requisi\xe7\xf5es e, no canto superior direito, bot\xe3o ",Object(i.b)("inlineCode",{parentName:"p"},"Send")," submeter aquela selecionada. Contudo, qualquer uma delas deve falhar, afinal,\nn\xe3o indicamos o certificado a ser empregado nem outras configura\xe7\xf5es necess\xe1rias."),Object(i.b)("h3",{id:"fornecer-o-certificado-digital-para-uso"},"Fornecer o certificado digital para uso"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Veja o v\xeddeo acerca de como configurar o Postman com o certificado digital ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://drive.google.com/file/d/1V1mSYStqnEHNg0iznWhAnNBlX3jETe3o/view"}),"aqui"))),Object(i.b)("p",null,"O Postman precisa ser configurado para usar o certificado digital do estabelecimento de sa\xfade em quest\xe3o, quando uma requisi\xe7\xe3o for direcionada ao endere\xe7o empregado para autentica\xe7\xe3o do ambiente de homologa\xe7\xe3o."),Object(i.b)("p",null,'Esta configura\xe7\xe3o \xe9 exigida para a correta execu\xe7\xe3o do servi\xe7o denominado "Obter token de acesso". E o resultado desta requisi\xe7\xe3o \xe9 necess\xe1rio para a execu\xe7\xe3o de todos os demais servi\xe7os. Em tempo, este \xe9 o \xfanico servi\xe7o que usa diretamente o certificado digital.'),Object(i.b)("p",null,'O servi\xe7o "Obter token de acesso" produz como resultado (retorno) o ',Object(i.b)("em",{parentName:"p"},"token")," de acesso. Tal ",Object(i.b)("em",{parentName:"p"},"token")," \xe9 exigido por todos os demais servi\xe7os. Ou seja, primeiro se obt\xe9m o ",Object(i.b)("em",{parentName:"p"},"token"),' de acesso, que tem validade por 30 minutos, e depois ele \xe9 reutilizado, neste per\xedodo, em todas as demais requisi\xe7\xf5es. Transcorridos os 30 minutos, ser\xe1 necess\xe1rio uma nova requisi\xe7\xe3o ao servi\xe7o "Obter token de acesso", para que um novo ',Object(i.b)("em",{parentName:"p"},"token"),", v\xe1lido pelos pr\xf3ximos 30 minutos, possa ser reutilizado."),Object(i.b)("p",null,"A indica\xe7\xe3o do certificado digital a ser utilizado pelo Postman \xe9 realizada da seguinte forma. Selecione ",Object(i.b)("em",{parentName:"p"},"File")," (op\xe7\xe3o do ",Object(i.b)("em",{parentName:"p"},"menu"),"), na sequ\xeancia a op\xe7\xe3o ",Object(i.b)("em",{parentName:"p"},"Settings")," e, por fim, abre-se a janela abaixo, na qual a aba ",Object(i.b)("em",{parentName:"p"},"Certificates")," deve ser selecionada e, por \xfaltimo, ",Object(i.b)("em",{parentName:"p"},"Add Certificate"),"."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:o(253).default})),Object(i.b)("p",null,"Quando ",Object(i.b)("em",{parentName:"p"},"Add Certificate")," \xe9 pressionado, abre-se tela similar \xe0quela abaixo.\nObserve que nenhum valor estar\xe1 preenchido, ao contr\xe1rio da tela exibida abaixo, na qual as tr\xeas informa\xe7\xf5es exigidas j\xe1 est\xe3o fornecidas: (a) o dom\xednio para o qual o certificado ser\xe1 utilizado pelo Postman, ou seja, a porta ",Object(i.b)("em",{parentName:"p"},"Auth")," do ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"../rnds/ambientes"}),"ambiente")," de homologa\xe7\xe3o ou, especificamente, o endere\xe7o ",Object(i.b)("strong",{parentName:"p"},"ehr-auth-hmg.saude.gov.br"),"; (b) o arquivo ",Object(i.b)("strong",{parentName:"p"},".pfx")," contendo o certificado digital do estabelecimento de sa\xfade e, por \xfaltimo, (c) a senha empregada para se ter acesso ao conte\xfado do certificado."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:o(136).default})),Object(i.b)("p",null,"Ao clicar no bot\xe3o ",Object(i.b)("inlineCode",{parentName:"p"},"Add"),", o Postman estar\xe1 configurado para usar o certificado, para acesso ao endere\xe7o indicado e, para o uso, empregar\xe1 a senha fornecida."),Object(i.b)("p",null,'Ap\xf3s a configura\xe7\xe3o do certificado, quando se requisita a submiss\xe3o do servi\xe7o "Obter token de acesso", que est\xe1 dispon\xedvel exatamente\nno endere\xe7o fornecido na configura\xe7\xe3o acima, o certificado e a senha ser\xe3o utilizados pelo Postman para submter a requisi\xe7\xe3o em quest\xe3o. Agora, o resultado esperado \xe9 200 OK. Observe que, logo abaixo, uma visualiza\xe7\xe3o (',Object(i.b)("em",{parentName:"p"},"visualize"),") alternativa do retorno oferecido pela RNDS \xe9 exibida, na qual o ",Object(i.b)("em",{parentName:"p"},"access_token")," \xe9 ocultado. As demais informa\xe7\xf5es n\xe3o s\xe3o sigilosas. Em particular, observe que o ",Object(i.b)("em",{parentName:"p"},"token")," tem uma validade de 30 minutos, ou seja, a inten\xe7\xe3o \xe9 que seja reutilizado neste per\xedodo, conforme mencionado anteriormente."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:o(254).default})),Object(i.b)("p",null,"As demais requisi\xe7\xf5es dependem de outras configura\xe7\xf5es. Mais um passo e todas elas estar\xe3o funcionando."),Object(i.b)("h3",{id:"configurar-vari\xe1veis"},"Configurar vari\xe1veis"),Object(i.b)("p",null,'A configura\xe7\xe3o do Postman para fazer uso do certifica digital viabiliza a execu\xe7\xe3o da requisi\xe7\xe3o "Obter token de acesso". As demais, contudo, al\xe9m do\n',Object(i.b)("em",{parentName:"p"},"token")," retornado por esta requisi\xe7\xe3o, dependem de outros valores, neste caso, depositados em vari\xe1veis. Abaixo segue o conjunto das vari\xe1veis empregadas pelo Postman para execu\xe7\xe3o das requisi\xe7\xf5es."),Object(i.b)("p",null,Object(i.b)("img",{alt:"image",src:o(255).default})),Object(i.b)("p",null,"Ao todo s\xe3o 10 vari\xe1veis, nem todas podem ser vistas acima. Os valores para as 3 primeiras, ",Object(i.b)("strong",{parentName:"p"},"individuo-cns"),", ",Object(i.b)("strong",{parentName:"p"},"lab-cnes")," e ",Object(i.b)("strong",{parentName:"p"},"lab-identificador"),", devem ser definidos de forma compat\xedvel com o certificado digital utilizado. S\xe3o valores espec\xedficos por estabelecimento de sa\xfade. Na figura acima s\xe3o fornecidos valores esp\xfarios, fict\xedcios (a serem substitu\xeddos). Por exemplo, ",Object(i.b)("strong",{parentName:"p"},"lab-cnes")," deve ter como valor o CNES do estabelecimento de sa\xfade cujo certificado digital foi fornecido ao Postman no passo anterior. Assim como ",Object(i.b)("strong",{parentName:"p"},"individuo-cns")," deve ser o CNS de um profissional de sa\xfade lotado no estabelecimento de sa\xfade em quest\xe3o."),Object(i.b)("p",null,"As 3 vari\xe1veis seguintes, ",Object(i.b)("strong",{parentName:"p"},"auth"),", ",Object(i.b)("strong",{parentName:"p"},"ehr")," e ",Object(i.b)("strong",{parentName:"p"},"ufg-cnpj"),", s\xe3o independentes do estabelecimento de sa\xfade. As duas primeiras identificam valores pertinentes ao ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"../rnds/ambientes"}),"ambiente")," de homologa\xe7\xe3o da RNDS. A \xfaltima apenas configura um CNPJ para facilitar a execu\xe7\xe3o de requisi\xe7\xe3o de consulta por CNPJ. Neste caso, este CNPJ est\xe1 dison\xedvel no pr\xf3prio portal da ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://ufg.br"}),"UFG")," (CNPJ utilizado no exemplo)."),Object(i.b)("p",null,"Os valores das 4 \xfaltimas vari\xe1veis s\xe3o gerados pelo pr\xf3prio Postman durante a execu\xe7\xe3o das requisi\xe7\xf5es. Por exemplo, a vari\xe1vel ",Object(i.b)("em",{parentName:"p"},"access_token"),' \xe9 definida pela execu\xe7\xe3o do servi\xe7o "Obter token de acesso" e, como anteriormente informado, o valor desta vari\xe1vel \xe9 empregado na composi\xe7\xe3o do ',Object(i.b)("em",{parentName:"p"},"header")," de nome ",Object(i.b)("em",{parentName:"p"},"X-Authorization-Server")," por todas as demais requisi\xe7\xf5es."),Object(i.b)("p",null,"Vari\xe1veis espec\xedficas por estabelecimento de sa\xfade (assim como o certificado digital):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"lab-identificador"),": identificador do laborat\xf3rio fornecido pela RNDS quando o credenciamento \xe9 homologado. Observe que este identificador n\xe3o \xe9 o CNES. Observe que o respons\xe1vel pelo laborat\xf3rio dever\xe1 acompanhar o pedido de credenciamento e, quando este \xe9 homologado, este identificador estar\xe1 dispon\xedvel por meio do portal de servi\xe7os (o mesmo empregado para pedir o credenciamento). Veja ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"../gestor/identificador"}),"identificador do solicitante")," para detalhes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"lab-cnes"),": o c\xf3digo CNES do laborat\xf3rio cujo credenciamento foi solicitado por meio do portal de servi\xe7os da RNDS e tamb\xe9m aprovado. Naturalmente, o\ncertificado digital empregado para configurar o Postaman deve ser do laborat\xf3rio em quest\xe3o.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"individuo-cns"),": conforme o pr\xf3prio nome\nindica, \xe9 o CNS de um indiv\xedduo, em particular, o CNS do profissional de sa\xfade em nome do qual requisi\xe7\xf5es ser\xe3o feitas. Ou seja, este CNS deve estar associado ao laborat\xf3rio em quest\xe3o (CNES fornecido na vari\xe1vel acima). Este valor ser\xe1 enviado para a RNDS por meio do ",Object(i.b)("em",{parentName:"p"},"header")," de nome ",Object(i.b)("strong",{parentName:"p"},"Authorization"),' em todos os contatos com a RNDS. A exce\xe7\xe3o \xe9 o servi\xe7o "Obter token de acesso", que n\xe3o faz uso deste ',Object(i.b)("em",{parentName:"p"},"header"),". Adicionalmente a este uso, com o prop\xf3sito de evitar a defini\xe7\xe3o de outra vari\xe1vel, este valor tamb\xe9m \xe9 reutilizado para outras finalidades, por exemplo, para identificar o paciente\nde um exame."))),Object(i.b)("p",null,"Vari\xe1veis de uso amplo:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"auth"),': endere\xe7o empregado para autentica\xe7\xe3o. Este valor \xe9 empregado na requisi\xe7\xe3o "Obter token de acesso", conforme ilustrado abaixo, na montagem da URL correspondente (destaque na cor laranja).')),Object(i.b)("p",null,Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/1735792/92814239-45834c80-f399-11ea-80b9-db68d3e4128d.png",alt:"Vari\xe1vel auth usada em URL"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ehr"),": endere\xe7o para envio das requisi\xe7\xf5es de servi\xe7os (",Object(i.b)("em",{parentName:"li"},"web services"),") de sa\xfade. Enquanto o valor da vari\xe1vel ",Object(i.b)("strong",{parentName:"li"},"auth"),' \xe9 empregado apenas para a requisi\xe7\xe3o do servi\xe7o "Obter token de acesso", o valor da vari\xe1vel ',Object(i.b)("strong",{parentName:"li"},"ehr")," \xe9 empregado em todas as demais requisi\xe7\xf5es. \xc0 semelhan\xe7a de ",Object(i.b)("strong",{parentName:"li"},"auth"),", a vari\xe1vel ",Object(i.b)("strong",{parentName:"li"},"ehr")," \xe9 empregada na montagem da URL da requisi\xe7\xe3o, conforme ilustrado abaixo (destaque na cor laranja).")),Object(i.b)("p",null,Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/1735792/92814560-bfb3d100-f399-11ea-8c8c-d811aa75b227.png",alt:"Vari\xe1vel ehr usada em URL"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ufg-cnpj"),": CNPJ da Universidade Federal de Goi\xe1s (UFG). Empregado apenas para teste. Observe que este valor pode ser obtido do pr\xf3prio portal da ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://ufg.br"}),"UFG"),".")),Object(i.b)("p",null,"Vari\xe1veis geradas pelo pr\xf3prio Postman:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"access_token"),': gerada a partir da resposta para a requisi\xe7\xe3o "Obter token de acesso". Se executada de forma satisfat\xf3ria, deposita nesta vari\xe1vel o ',Object(i.b)("em",{parentName:"p"},"token")," de acesso a ser consultado por todas as demais requisi\xe7\xf5es.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"exame-id-lab"),': identificador gerado de forma aleat\xf3ria para um resultado de exame laboratorial. Este valor \xe9 gerado pela requisi\xe7\xe3o "Enviar resultado de exame" e utilizado pela requisi\xe7\xe3o "Substituir resultado de exame".')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"exame-id-rnds"),': identificador gerado pela pr\xf3pria RNDS para um resultado de exame submetido de forma satisfat\xf3ria (requisi\xe7\xe3o "Enviar resultado de exame"). Este identificador \xfanico, gerado pela RNDS, \xe9 depositado nesta vari\xe1vel e, \xe0 semelhan\xe7a de ',Object(i.b)("strong",{parentName:"p"},"exame-id-lab"),', tamb\xe9m \xe9 empregado pela requisi\xe7\xe3o "Substituir resultado de exame".'))),Object(i.b)("h3",{id:"experimentar-requisi\xe7\xf5es"},"Experimentar requisi\xe7\xf5es"),Object(i.b)("p",null,"A execu\xe7\xe3o de requisi\xe7\xf5es \xe9 feita com a sele\xe7\xe3o da requisi\xe7\xe3o a ser executada e, em seguida, ao clicar no bot\xe3o ",Object(i.b)("inlineCode",{parentName:"p"},"Send"),". A requisi\xe7\xe3o ser\xe1 submetida e o retorno ser\xe1 exibido. A sugest\xe3o \xe9 experimentar mudan\xe7as nos par\xe2metros das requisi\xe7\xf5es, no ",Object(i.b)("em",{parentName:"p"},"payload")," de um resultado de exame, remover um ",Object(i.b)("em",{parentName:"p"},"header"),", alterar o valor de um ",Object(i.b)("em",{parentName:"p"},"header")," e observar os resultados. Desta forma ser\xe1 poss\xedvel adquirir flu\xeancia na intera\xe7\xe3o com a RNDS."),Object(i.b)("h3",{id:"parab\xe9ns"},"Parab\xe9ns!"),Object(i.b)("p",null,'Os "primeiros contatos" com a RNDS foram estabelecidos. Seguramente,\nap\xf3s exercitar as v\xe1rias requisi\xe7\xf5es, a ambienta\xe7\xe3o necess\xe1ria tanto com\nos dados necess\xe1rios, quanto aqueles produzidos e a estrutura da requisi\xe7\xe3o\nestar\xe1 conclu\xedda.'),Object(i.b)("p",null,"O pr\xf3ximo passo \xe9 o desenvolvimento do c\xf3digo que executa as requisi\xe7\xf5es exercitadas com o prop\xf3sito de integra\xe7\xe3o\nentre o estabelecimento de sa\xfade e a RNDS. seja atribui\xe7\xe3o de cada laborat\xf3rio, e cada um possui suas especificidades, isto n\xe3o inviabiliza mais um passo na dire\xe7\xe3o de facilitar esta integra\xe7\xe3o, que \xe9 o motivo de exist\xeancia do presente guia: ilustrar o ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"./si"}),"Software de Integra\xe7\xe3o"),", um componente de software implementado, que pode inspirar ou at\xe9 ser reutilizado pelo laborat\xf3rio para a sua integra\xe7\xe3o."))}p.isMDXComponent=!0},115:function(e,a,o){"use strict";o.d(a,"a",(function(){return b})),o.d(a,"b",(function(){return u}));var t=o(0),r=o.n(t);function i(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){i(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=r.a.createContext({}),p=function(e){var a=r.a.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):n(n({},a),e)),o},b=function(e){var a=p(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},l=r.a.forwardRef((function(e,a){var o=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=p(o),l=t,u=b["".concat(s,".").concat(l)]||b[l]||m[l]||i;return o?r.a.createElement(u,n(n({ref:a},d),{},{components:o})):r.a.createElement(u,n({ref:a},d))}));function u(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=o.length,s=new Array(i);s[0]=l;var n={};for(var c in a)hasOwnProperty.call(a,c)&&(n[c]=a[c]);n.originalType=e,n.mdxType="string"==typeof e?e:t,s[1]=n;for(var d=2;d<i;d++)s[d]=o[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,o)}l.displayName="MDXCreateElement"},136:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/postman-certificado-dfe6a3e44aff7f30110f9f66d691213a.png"},250:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/postman-desenvolvedor-cf3bc3873d439b6b174c80a35c3f7c63.png"},251:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/postman-import-d853abdb28b274037111ecb86fbec6b6.png"},252:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/postman-carregado-5166dd1a2d16d271fca4894f78e39e09.png"},253:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/postman-settings-eed38bbd80ab67ccc8dab96eee96c591.png"},254:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/postman-obter-token-c2da9cac696d68c6f4e4b3abca054d77.png"},255:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/postman-variaveis-3fe564ed2b511a8f95cb380523d67d2c.png"}}]);