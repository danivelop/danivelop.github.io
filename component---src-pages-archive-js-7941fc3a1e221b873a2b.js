(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});a(164);var n=a(0),l=a.n(n),r=a(163),c=(a(152),a(154),a(173)),i=a(171),s=a(175),o=a(168),m="97121327";t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n=t.site.siteMetadata.labels;return l.a.createElement(c.a,null,l.a.createElement(i.a,{title:"Archive",keywords:["gatsby","javascript","react","web development","blog","graphql"]}),l.a.createElement("div",{className:"index-main"},l.a.createElement("div",{className:"sidebar px-4 py-2"},l.a.createElement(s.a,null)),l.a.createElement("div",{className:"post-list-main"},l.a.createElement("h2",{className:"heading mt-3"},"All Posts"),a.map(function(e){var t=e.node.frontmatter.tags;return l.a.createElement("div",{key:e.node.id,className:"container mt-5"},l.a.createElement(r.a,{to:e.node.fields.slug,className:"text-dark"},l.a.createElement("h2",{className:"title"},e.node.frontmatter.title)),l.a.createElement("small",{className:"d-block text-info"},l.a.createElement("i",null,"Posted on ",e.node.frontmatter.date)),l.a.createElement("p",{className:"mt-3 d-inline"},e.node.excerpt),l.a.createElement(r.a,{to:e.node.fields.slug,className:"text-primary"},l.a.createElement("small",{className:"d-inline-block ml-3"}," Read full post")),l.a.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach(function(e,a){n.forEach(function(n){e===n.tag&&t.push(l.a.createElement(o.a,{key:a,tag:n.tag,tech:n.tech,name:n.name,size:n.size,color:n.color}))})}),t}(t)))}))))}},163:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),l=a.n(n),r=a(4),c=a.n(r),i=a(33),s=a.n(i);a.d(t,"a",function(){return s.a});a(166);var o=l.a.createContext({}),m=function(e){return l.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},164:function(e,t,a){var n=a(25).f,l=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in l||a(18)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},166:function(e,t,a){var n;e.exports=(n=a(170))&&n.default||n},167:function(e,t,a){e.exports=a.p+"static/danivelop-e4779314e6fc0af2fea09591f35fa90c.png"},168:function(e,t,a){"use strict";a(164);var n=a(0),l=a.n(n),r=(a(153),a(163));t.a=function(e){var t=e.tag,a=e.tech,n=e.name,c=e.size,i=e.color;return l.a.createElement("div",{className:"d-inline-block p-1"},l.a.createElement(r.a,{to:"/tags/"+t+"/"},l.a.createElement("button",{className:"tech-tag text-white"},l.a.createElement("p",{className:"d-inline"},a," "),l.a.createElement("div",{className:"d-inline",style:{fontSize:c,color:i}},l.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:c,height:c,style:{fill:""+i}},l.a.createElement("title",null,a),l.a.createElement("path",{d:n}))))))}},169:function(e){e.exports={data:{site:{siteMetadata:{title:"danivelop's blog",tagline:"코드의 구조화, 미니멀리즘을 추구하는 프론트엔드 개발자입니다. React를 좋아하며 NodeJS를 활용한 백앤드 개발과 DevOps에도 관심이 많습니다.",author:"Yoon DaeYong",contacts:{linkedin:"",github:"https://github.com/danivelop",stackoverflow:"",freecodecamp:"",twitter:""}}}}}},170:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),i=a(55),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?l.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},171:function(e,t,a){"use strict";var n=a(172),l=a(0),r=a.n(l),c=a(4),i=a.n(c),s=a(178),o=a.n(s);function m(e){var t=e.description,a=e.lang,l=e.meta,c=e.title,i=n.data.site,s=t||i.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(l)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},172:function(e){e.exports={data:{site:{siteMetadata:{title:"danivelop's blog",description:"A blog template for web developers that's ready to go out of the box. Feel free to modify it to your liking.",author:"Yoon DaeYong"}}}}},173:function(e,t,a){"use strict";var n=a(169),l=a(0),r=a.n(l),c=a(4),i=a.n(c),s=a(163),o=(a(152),a(165)),m=(a(150),function(e){var t=e.contacts;return r.a.createElement("div",{className:"bottom-bar py-1"},r.a.createElement("a",{className:"text-light",target:"_blank",href:t.github},r.a.createElement("span",{title:"GitHub"},r.a.createElement(o.d,{size:26,style:{color:"light"}}))))}),d=function(){return r.a.createElement("div",{className:"mobile-pages-main"},r.a.createElement("div",{className:"text-center"},r.a.createElement("p",{className:"d-inline p-4"},r.a.createElement(s.a,{to:"/"},r.a.createElement("span",{className:"text-dark"},"Blog Home"))),r.a.createElement("p",{className:"d-inline p-4"},r.a.createElement(s.a,{to:"/about"},r.a.createElement("span",{className:"text-dark"},"About"))),r.a.createElement("p",{className:"d-inline p-4"},r.a.createElement(s.a,{to:"/archive"},r.a.createElement("span",{className:"text-dark"},"Archive")))))},u=function(e){var t=e.contacts;return r.a.createElement("div",{className:"social-links float-right mr-4"},r.a.createElement("a",{className:"text-light ml-4",target:"_blank",href:t.github},r.a.createElement("span",{title:"GitHub"},r.a.createElement(o.d,{size:40,style:{color:"light"}}))))},p=(a(151),a(167)),g=a.n(p),h=function(e){return r.a.createElement("div",{className:"mobile-bio-main"},r.a.createElement("div",{className:"ml-4 mt-2 mobile-profile"},r.a.createElement("img",{src:g.a,alt:"author-pic"})),r.a.createElement("h4",{className:"mr-4 mt-4"},e.author))},E=function(e){var t=e.siteTitle,a=(e.tagline,e.author),n=e.contacts;return r.a.createElement("header",{className:"head-main",style:{background:"black"}},r.a.createElement("div",{className:"head-elements",style:{margin:"0",padding:".75rem"}},r.a.createElement("h1",{className:"head-logo ml-4",style:{margin:0}},r.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),r.a.createElement(u,{contacts:n})),r.a.createElement(m,{contacts:n}),r.a.createElement(d,null),r.a.createElement(h,{author:a}))};E.propTypes={siteTitle:i.a.string},E.defaultProps={siteTitle:""};var f=E,v=function(e){var t=e.children;return r.a.createElement(s.b,{query:"2988051195",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{siteTitle:e.site.siteMetadata.title,tagline:e.site.siteMetadata.tagline,author:e.site.siteMetadata.author,contacts:e.site.siteMetadata.contacts}),r.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",{className:"p-4"},t),r.a.createElement("footer",{className:"text-center"},r.a.createElement("hr",null),r.a.createElement("p",{className:"d-inline"},"© ",(new Date).getFullYear()," ",r.a.createElement("a",{className:"text-info",href:"https://willjw3.github.io/"},"willjw3"),", All Rights Reserved."),r.a.createElement("p",{className:"mt-5 text-muted d-inline"},r.a.createElement("i",null," Built with"," ",r.a.createElement("a",{className:"text-info",href:"https://www.gatsbyjs.org"},"Gatsby"))))))},data:n})};v.propTypes={children:i.a.node.isRequired};t.a=v},174:function(e){e.exports={data:{site:{siteMetadata:{title:"danivelop's blog",tagline:"코드의 구조화, 미니멀리즘을 추구하는 프론트엔드 개발자입니다. React를 좋아하며 NodeJS를 활용한 백앤드 개발과 DevOps에도 관심이 많습니다.",author:"Yoon DaeYong",contacts:{linkedin:"",github:"https://github.com/danivelop",stackoverflow:"",freecodecamp:"",twitter:""},labels:[{tag:"react",tech:"React",name:"M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z",size:20,color:"deepskyblue"},{tag:"javascript",tech:"JavaScript",name:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",size:20,color:"yellow"},{tag:"graphql",tech:"GraphQL",name:"M14.051 2.751l4.935 2.85c.816-.859 2.173-.893 3.032-.077.148.14.274.301.377.477.589 1.028.232 2.339-.796 2.928-.174.1-.361.175-.558.223v5.699c1.146.273 1.854 1.423 1.58 2.569-.048.204-.127.4-.232.581-.592 1.023-1.901 1.374-2.927.782-.196-.113-.375-.259-.526-.429l-4.905 2.832c.372 1.124-.238 2.335-1.361 2.706-.217.071-.442.108-.67.108-1.181.001-2.139-.955-2.14-2.136 0-.205.029-.41.088-.609l-4.936-2.847c-.816.854-2.171.887-3.026.07-.854-.816-.886-2.171-.07-3.026.283-.297.646-.506 1.044-.603l.001-5.699c-1.15-.276-1.858-1.433-1.581-2.584.047-.198.123-.389.224-.566.592-1.024 1.902-1.374 2.927-.782.177.101.339.228.48.377l4.938-2.85C9.613 1.612 10.26.423 11.39.088 11.587.029 11.794 0 12 0c1.181-.001 2.139.954 2.14 2.134.001.209-.03.418-.089.617zm-.515.877c-.019.021-.037.039-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146c-1.145-.283-1.842-1.442-1.558-2.588.006-.024.012-.049.019-.072l-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852c.327 1.135-.327 2.318-1.461 2.645-.026.008-.051.014-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838c-.015-.047-.027-.094-.038-.142H5.542l-.021.083 4.939 2.852c.388-.404.934-.653 1.54-.653.627 0 1.19.269 1.583.698z",size:20,color:"hotpink"}]}},allMarkdownRemark:{edges:[{node:{frontmatter:{tags:["javascript","react"]}}},{node:{frontmatter:{tags:["javascript","graphql","apollo"]}}}]}}}},175:function(e,t,a){"use strict";var n=a(174),l=a(0),r=a.n(l),c=a(163),i=(a(149),a(167)),s=a.n(i),o=function(e){var t=e.author,a=e.tagline;return r.a.createElement("div",{className:"bio-main w-75"},r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile-img"},r.a.createElement("img",{src:s.a,alt:""})),r.a.createElement("h3",{className:"mt-2 author-bio"},t)),r.a.createElement("small",{className:"text-muted"},a))},m=a(165),d=function(e){var t=e.contacts;return r.a.createElement("div",{className:"side-social-links float-left mt-3 mb-3"},r.a.createElement("a",{className:"text-secondary p-2",target:"_blank",href:t.github},r.a.createElement("span",{title:"GitHub"},r.a.createElement(m.d,{size:26,style:{color:"secondary"}}))))},u=(a(164),a(74),a(75),a(168)),p=function(e){var t=e.labels,a=e.posts,n=t.map(function(e){var t=0;return a.forEach(function(a){a.node.frontmatter.tags.includes(e.tag)&&(t+=1)}),[e.tag,t]}).filter(function(e){return e[1]>0}).map(function(e){return e[0]});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Tech Topics"),r.a.createElement("div",{className:"d-block"},function(e){var a=[];return e.forEach(function(e,n){t.forEach(function(t){e===t.tag&&a.push(r.a.createElement(u.a,{key:n,tag:t.tag,tech:t.tech,name:t.name,size:t.size,color:t.color}))})}),a}(n)))};t.a=function(){return r.a.createElement(c.b,{query:"1503498308",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sidebar-main border-right"},r.a.createElement(o,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),r.a.createElement(d,{contacts:e.site.siteMetadata.contacts}),r.a.createElement("div",{className:"page-links"},r.a.createElement(c.a,{to:"/"},r.a.createElement("span",{className:"text-dark d-block py-1"},"Blog Home")),r.a.createElement(c.a,{to:"/about"},r.a.createElement("span",{className:"text-dark d-block py-1"},"About")),r.a.createElement(c.a,{to:"/archive"},r.a.createElement("span",{className:"text-dark d-block py-1"},"Archive"))),r.a.createElement("div",{className:"tech-tags mt-4"},r.a.createElement(p,{labels:e.site.siteMetadata.labels,posts:e.allMarkdownRemark.edges}))))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-archive-js-7941fc3a1e221b873a2b.js.map