(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{101:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(97),m=t(94),c=t(100),i=t(96),o=t(105),s=t(98),g=t(47),u=t.n(g),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,g,v,d=e.children,p=e.frontMatter,_=e.metadata,b=e.truncated,h=e.isBlogPostPage,N=void 0!==h&&h,f=_.date,k=_.permalink,w=_.tags,y=_.readingTime,M=p.author,P=p.title,J=p.image,O=p.keywords,T=p.author_url||p.authorURL,j=p.author_title||p.authorTitle,x=p.author_image_url||p.authorImageURL,F=Object(s.a)(J,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,O&&O.length&&r.a.createElement("meta",{name:"keywords",content:O.join(",")}),J&&r.a.createElement("meta",{property:"og:image",content:F}),J&&r.a.createElement("meta",{property:"twitter:image",content:F}),J&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+P})),r.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=f.substring(0,10).split("-"),n=t[0],g=E[parseInt(t[1],10)-1],v=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},N?P:r.a.createElement(i.a,{to:k},P)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:f,className:u.a.blogPostDate},g," ",v,", ",n," ",y&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},x&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:T,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:x,alt:M})),r.a.createElement("div",{className:"avatar__intro"},M&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:T,target:"_blank",rel:"noreferrer noopener"},M)),r.a.createElement("small",{className:"avatar__subtitle"},j)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:o.a},d)),(w.length>0||b)&&r.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),w.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),b&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:_.permalink,"aria-label":"Read more about "+P},r.a.createElement("strong",null,"Read More"))))))}},92:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(95),m=t(99),c=t(101),i=t(96);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,n=Object(l.a)().siteConfig.title,i="/"===a.permalink?n:"Blog",s=a.blogDescription;return r.a.createElement(m.a,{title:i,description:s},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(o,{metadata:a})))))}}}]);