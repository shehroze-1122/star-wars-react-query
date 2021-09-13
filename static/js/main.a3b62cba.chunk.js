(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{35:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(3),s=t.n(c),a=t(21),r=t.n(a),i=(t(35),t(55)),l=t(23),j=t(22),o=t(11),u=t(2),d=function(e){var n=e.page,t=e.setPage;return Object(u.jsxs)("div",{className:"NavBar",children:[Object(u.jsx)("button",{onClick:function(){return t("planets")},className:"planets"===n?"NavBar-active":null,children:"Planets"}),Object(u.jsx)("button",{onClick:function(){return t("people")},className:"people"===n?"NavBar-active":null,children:"People"})]})},p=t(12),b=t.n(p),h=t(16),x=t(56),O=t(54),f=function(e){var n=e.planet,t=n.name,c=n.rotation_period,s=n.orbital_period,a=n.climate,r=n.terrain,i=n.population;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsxs)("p",{children:["Rotation Period- ",Object(u.jsx)("span",{className:"info",children:c})]}),Object(u.jsxs)("p",{children:["Orbital Period-  ",Object(u.jsx)("span",{className:"info",children:s})]}),Object(u.jsxs)("p",{children:["Climate-  ",Object(u.jsx)("span",{className:"info",children:a})]}),Object(u.jsxs)("p",{children:["Terrain-  ",Object(u.jsx)("span",{className:"info",children:r})]}),Object(u.jsxs)("p",{children:["Population-  ",Object(u.jsx)("span",{className:"info",children:i})]})]})},v=function(){var e=Object(h.a)(b.a.mark((function e(n){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/planets/?page=".concat(n));case 2:return t=e.sent,console.log("https://swapi.dev/api/planets/?page=".concat(n," ")),c=t.json(),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.useState)(1),n=Object(o.a)(e,2),t=n[0],s=n[1],a=Object(x.a)(["planets",t],(function(){return v(t)}),{keepPreviousData:!0}),r=a.data,i=a.status,l=a.isFetching;return Object(u.jsxs)("div",{children:["loading"===i&&Object(u.jsx)("span",{className:"center",children:Object(u.jsx)(O.a,{})}),"error"===i&&Object(u.jsx)("h2",{children:"Error occured while fetching data"}),"success"===i&&Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"pagination",children:[Object(u.jsx)("button",{onClick:function(){return 1!==t&&s((function(e){return e-1}))},className:"prev",disabled:1===t||l,children:"Previous Page"}),Object(u.jsxs)("p",{className:"current",children:["Current Page: ",t]}),Object(u.jsx)("button",{onClick:function(){null!==r.next&&s((function(e){return e+1}))},className:"next",id:"next-page",disabled:null===r.next||l,children:"Next Page"})]}),r.results.map((function(e){return Object(u.jsx)(f,{planet:e},e.name)}))]})]})},N=function(e){var n=e.person,t=n.name,c=n.height,s=n.eye_color,a=n.skin_color,r=n.gender;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsxs)("p",{children:["Height- ",Object(u.jsx)("span",{className:"info",children:c})]}),Object(u.jsxs)("p",{children:["Eye color- ",Object(u.jsx)("span",{className:"info",children:s})]}),Object(u.jsxs)("p",{children:["Skin Color- ",Object(u.jsx)("span",{className:"info",children:a})]}),Object(u.jsxs)("p",{children:["Gender- ",Object(u.jsx)("span",{className:"info",children:r})]})]})},g=function(){var e=Object(h.a)(b.a.mark((function e(n){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/people?page=".concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),P=function(){var e=Object(c.useState)(1),n=Object(o.a)(e,2),t=n[0],s=n[1],a=Object(x.a)(["people",t],(function(){return g(t)}),{keepPreviousData:!0}),r=a.data,i=a.status;return Object(u.jsxs)("div",{children:["loading"===i&&Object(u.jsx)("span",{className:"center",children:Object(u.jsx)(O.a,{})}),"error"===i&&Object(u.jsx)("h2",{children:"Error occured while fetching data"}),"success"===i&&Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"pagination",children:[Object(u.jsx)("button",{onClick:function(){return 1!==t&&s((function(e){return e-1}))},className:"prev",disabled:1===t,children:"Previous Page"}),Object(u.jsxs)("p",{className:"current",children:["Current Page: ",t]}),Object(u.jsx)("button",{onClick:function(){return null!==r.next&&s((function(e){return e+1}))},className:"next",disabled:null===r.next,children:"Next Page"})]}),r.results.map((function(e){return Object(u.jsx)(N,{person:e},e.name)}))]})]})},k=function(){var e=Object(c.useState)("planets"),n=Object(o.a)(e,2),t=n[0],s=n[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Star Wars"}),Object(u.jsx)(d,{page:t,setPage:s}),Object(u.jsx)("div",{className:"content",children:"planets"===t?Object(u.jsx)(m,{}):Object(u.jsx)(P,{})})]})},w=new i.a;r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsxs)(l.a,{client:w,children:[Object(u.jsx)(k,{}),Object(u.jsx)(j.ReactQueryDevtools,{initialIsOpen:!1})]})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a3b62cba.chunk.js.map