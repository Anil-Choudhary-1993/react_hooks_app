(this.webpackJsonpreact_hooks_sample_app=this.webpackJsonpreact_hooks_sample_app||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(20),a=n.n(r),i=(n(28),n(10)),u=n(2),o=(n(29),n(30),n(0));function l(){var e=window.location.pathname;Object(u.f)();return Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"/"==e?"active":"",children:Object(o.jsx)(i.b,{to:"/",children:"Autocomplete app"})}),Object(o.jsx)("li",{className:"/crud"==e?"active":"",children:Object(o.jsx)(i.b,{to:"/crud",children:"Crud app"})}),Object(o.jsx)("li",{className:"/search"==e?"active":"",children:Object(o.jsx)(i.b,{to:"/search",children:"SearchList app"})})]})})}var j=n(5),d=n(3),h=s.a.createContext(),b="ADD_USER",p="EDIT_USER",O="DELETE_USER",x=function(e){return{type:b,payload:e}};var g=function(){var e=s.a.useContext(h),t=e.state,n=e.dispatch,c=s.a.useState(t.user.name),r=Object(j.a)(c,2),a=r[0],i=r[1],u=s.a.useState(t.user.userName),l=Object(j.a)(u,2),b=l[0],p=l[1];return s.a.useEffect((function(){t.user.name&&i(t.user.name),t.user.userName&&p(t.user.userName)}),[t.user]),Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("h1",{children:"Add User"}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("span",{className:"input-group-title",children:"Name"}),Object(o.jsx)("input",{className:"input-group-field",type:"text",value:a,onChange:function(e){return i(e.target.value)}})]}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("span",{className:"input-group-title",children:"User-Name"}),Object(o.jsx)("input",{className:"input-group-field",type:"text",value:b,onChange:function(e){return p(e.target.value)}})]}),Object(o.jsx)("div",{className:"input-group",children:Object(o.jsx)("button",{className:"button",onClick:function(){p(""),i(""),t.user.id?n(x(Object(d.a)(Object(d.a)({},t.user),{},{name:a,userName:b}))):n(x({name:a,userName:b}))},children:"Add User"})})]})};var f=function(){var e,t=s.a.useContext(h),n=t.state,c=t.dispatch;return Object(o.jsxs)("div",{className:"table",children:[Object(o.jsx)("h1",{children:"View Users"}),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"User-Name"}),Object(o.jsx)("th",{children:"Actions"})]})}),Object(o.jsx)("tbody",{children:(null===(e=n.users)||void 0===e?void 0:e.length)>0&&n.users.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.userName}),Object(o.jsxs)("td",{children:[Object(o.jsx)("button",{onClick:function(){return c((t=e.id,{type:p,payload:t}));var t},children:"Edit"}),Object(o.jsx)("button",{onClick:function(){return c((t=e.id,{type:O,payload:t}));var t},children:"Delete"})]})]},t)}))})]})]})},m=(n(37),n(23));var v=function(e,t){switch(t.type){case b:return t.payload.id?Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.id?t.payload:e})),user:{id:"",name:"",userName:""}}):Object(d.a)(Object(d.a)({},e),{},{users:[].concat(Object(m.a)(e.users),[Object(d.a)({id:e.users.length+1},t.payload)]),user:{id:"",name:"",userName:""}});case p:return Object(d.a)(Object(d.a)({},e),{},{user:e.users.find((function(e){return e.id===t.payload}))||{name:"",userName:""}});case O:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.filter((function(e){return e.id!==t.payload}))});default:return e}};var S=function(){var e=s.a.useReducer(v,{users:[],user:{id:"",name:"",userName:""}}),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(o.jsx)(h.Provider,{value:{state:n,dispatch:c},children:Object(o.jsxs)("div",{className:"crud_app",children:[Object(o.jsx)("h1",{children:"Crud App With Hooks"}),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(g,{}),Object(o.jsx)(f,{})]})]})})},N=(n(38),["Mango","Grapes","Musk","Banana","grapes","lime","lemon","cherry","blueberry","apple","watermelon"]);function y(){var e=s.a.useRef(),t=s.a.useState({showSuggestion:!1,filteredSuggestions:[],input:"",currentSuggestionIndex:0}),n=Object(j.a)(t,2),c=n[0],r=n[1],a=function(e){r({input:e.target.innerText,showSuggestion:!1,filteredSuggestions:[],currentSuggestionIndex:0})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"React Autocomplete Demo Start typing and experience the autocomplete wizardry!"}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"input_field",children:Object(o.jsx)("input",{type:"text",value:c.input,onChange:function(e){var t=e.target.value.trim(),n=!1,s=[];t&&(s=N.filter((function(e){return e.toLowerCase().indexOf(t.toLowerCase())>-1})),n=!0),r(Object(d.a)(Object(d.a)({},c),{},{showSuggestion:n,input:t,filteredSuggestions:s,currentSuggestionIndex:0}))},onKeyDown:function(t){if(13===t.keyCode)r({input:c.filteredSuggestions[c.currentSuggestionIndex],showSuggestion:!1,filteredSuggestions:[],currentSuggestionIndex:0});else if(38===t.keyCode){var n=c.currentSuggestionIndex;n>0&&n--,0===n?e.current.scrollTop=0:e.current.scrollTop-=20,r(Object(d.a)(Object(d.a)({},c),{},{currentSuggestionIndex:n}))}else if(40===t.keyCode){var s=c.currentSuggestionIndex;s<c.filteredSuggestions.length-1&&s++,s===c.filteredSuggestions.length-1?e.current.scrollTop=e.current.scrollHeight:e.current.scrollTop+=20,r(Object(d.a)(Object(d.a)({},c),{},{currentSuggestionIndex:s}))}}})}),c.showSuggestion&&Object(o.jsx)("div",{className:"suggestions",ref:e,children:Object(o.jsx)("ul",{children:c.filteredSuggestions.map((function(e,t){return Object(o.jsx)("li",{onClick:a,className:c.currentSuggestionIndex===t?"highlight":"",children:e},t)}))})})]})]})}var C=n(18),w=n.n(C),k=n(22),I=(n(40),"https://hn.algolia.com/api/v1/search");var _=function(){var e=s.a.useState(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=s.a.useState(I),a=Object(j.a)(r,2),i=a[0],u=a[1],l=s.a.useState([]),d=Object(j.a)(l,2),h=d[0],b=d[1],p=s.a.useState(!1),O=Object(j.a)(p,2),x=O[0],g=O[1],f=s.a.useState(""),m=Object(j.a)(f,2),v=m[0],S=m[1],N=s.a.useCallback(Object(k.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),b([]),S(""),e.prev=3,e.next=6,fetch(i);case 6:return t=e.sent,e.next=9,t.json();case 9:t=e.sent,b(t.hits),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0),S(JSON.stringify(e.t0));case 17:return e.prev=17,g(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[3,13,17,20]])}))),[i]);return s.a.useEffect((function(){N()}),[N]),Object(o.jsxs)("div",{className:"search_container",children:[Object(o.jsxs)("div",{className:"input_group",children:[Object(o.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){return u("".concat(I,"?query=").concat(n))},children:"Search"})]}),Object(o.jsxs)("div",{className:"content",children:[v&&Object(o.jsx)("h1",{children:v}),x&&Object(o.jsx)("h3",{children:"Loading..."}),(null===h||void 0===h?void 0:h.length)>0&&Object(o.jsx)("ul",{children:h.map((function(e,t){return Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:e.author}),Object(o.jsx)("i",{children:e.title})]},t)}))})]})]})};var E=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/crud",component:S}),Object(o.jsx)(u.a,{exact:!0,path:"/search",component:_}),Object(o.jsx)(u.a,{exact:!0,path:"/",component:y})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(E,{}),document.getElementById("root")),T()}},[[41,1,2]]]);
//# sourceMappingURL=main.c2a9d741.chunk.js.map