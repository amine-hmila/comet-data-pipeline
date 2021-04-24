(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(r),u=n,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(134)),o={sidebar_position:20,title:"cnxload"},c={unversionedId:"cli/cnxload",id:"cli/cnxload",isDocsHomePage:!1,title:"cnxload",description:"Synopsis",source:"@site/docs/cli/cnxload.md",sourceDirName:"cli",slug:"/cli/cnxload",permalink:"/comet-data-pipeline/docs/cli/cnxload",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cli/cnxload.md",version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"cnxload"},sidebar:"cometSidebar",previous:{title:"bqload",permalink:"/comet-data-pipeline/docs/cli/bqload"},next:{title:"ddl2yml",permalink:"/comet-data-pipeline/docs/cli/ddl2yml"}},l=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]}],p={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"comet cnxload ","[options]")),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Parameter"),Object(i.b)("th",{parentName:"tr",align:null},"Cardinality"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"--source_file:",Object(i.b)("inlineCode",{parentName:"td"},"<value>")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Required")),Object(i.b)("td",{parentName:"tr",align:null},"Full Path to source file")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"--output_table:",Object(i.b)("inlineCode",{parentName:"td"},"<value>")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Required")),Object(i.b)("td",{parentName:"tr",align:null},"JDBC Output Table")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"--options:",Object(i.b)("inlineCode",{parentName:"td"},"<value>")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Optional")),Object(i.b)("td",{parentName:"tr",align:null},"Connection options eq for jdbc : driver, user, password, url, partitions, batchSize")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"--create_disposition:",Object(i.b)("inlineCode",{parentName:"td"},"<value>")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Optional")),Object(i.b)("td",{parentName:"tr",align:null},"Big Query Create disposition ",Object(i.b)("a",{parentName:"td",href:"https://cloud.google.com/bigquery/docs/reference/auditlogs/rest/Shared.Types/CreateDisposition"},"https://cloud.google.com/bigquery/docs/reference/auditlogs/rest/Shared.Types/CreateDisposition"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"--write_disposition:",Object(i.b)("inlineCode",{parentName:"td"},"<value>")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Optional")),Object(i.b)("td",{parentName:"tr",align:null},"Big Query Write disposition ",Object(i.b)("a",{parentName:"td",href:"https://cloud.google.com/bigquery/docs/reference/auditlogs/rest/Shared.Types/WriteDisposition"},"https://cloud.google.com/bigquery/docs/reference/auditlogs/rest/Shared.Types/WriteDisposition"))))))}b.isMDXComponent=!0}}]);