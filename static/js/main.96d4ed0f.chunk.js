(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(9),j=c.n(n),s=c(7),r=c(2),b=(c(15),c(10)),a=c(4),i=c(1),l=c(0),h=function(e){var t=e.person;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.name}),Object(l.jsx)("td",{children:t.sex}),Object(l.jsx)("td",{children:t.born}),Object(l.jsx)("td",{children:t.died}),Object(l.jsx)("td",{children:t.motherName}),Object(l.jsx)("td",{children:t.fatherName})]})})},d=function(e){var t=e.people;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("table",{className:"PeopleTable",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Name:"}),Object(l.jsx)("td",{children:"Sex:"}),Object(l.jsx)("td",{children:"Born:"}),Object(l.jsx)("td",{children:"Died:"}),Object(l.jsx)("td",{children:"Mother:"}),Object(l.jsx)("td",{children:"Father:"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(h,{person:e})}))})]})})},o=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){n(Object(b.a)(e))})).catch((function(){return n([])}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Below a table of people can be found:"}),Object(l.jsx)(d,{people:c})]})},O=function(){return Object(l.jsx)("main",{children:Object(l.jsx)("h1",{children:"This is a home page"})})},x=function(){return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"People Table"}),Object(l.jsxs)("nav",{children:[Object(l.jsx)(s.b,{to:"/",className:"nav__link",children:"Home"}),Object(l.jsx)(s.b,{to:"/people",className:"nav__link",children:"People"})]})]})},p=function(){return Object(l.jsx)("main",{children:Object(l.jsx)("h1",{children:"Page not found"})})},u=function(){return Object(l.jsxs)(s.a,{children:[Object(l.jsx)(x,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/",element:Object(l.jsx)(O,{})}),Object(l.jsx)(r.a,{path:"/home",element:Object(l.jsx)(O,{})}),Object(l.jsx)(r.a,{path:"/people",element:Object(l.jsx)(o,{})}),Object(l.jsx)(r.a,{path:"*",element:Object(l.jsx)(p,{})})]})]})};j.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.96d4ed0f.chunk.js.map