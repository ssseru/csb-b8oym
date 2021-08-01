(this["webpackJsonpgithub-issues-page"]=this["webpackJsonpgithub-issues-page"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(11),s=c.n(a),i=(c(37),c(31)),o=(c(38),c(59)),u=c(60),j=c(61),l=c(62),h=c(63),b=c(64),O=c(65),d=c(66),f=c(67),p=c(68),x=c(69),m=c(8),v=c.n(m),g=c(12),y="FETCH_ISSUES",w="INCREMENT_WATCH",E="INCREMENT_STAR",_="INCREMENT_FORK",k=c(13),N=c(27),S=c.n(N),C=c(28),I=c.n(C),T=c(29),R=c.n(T),z=c(26),M=c(3);var D=function(){var e=Object(k.c)((function(e){return e.listOfIssues})),t=Object(k.c)((function(e){return e.fetchCounter})),c=Object(n.useState)(1),r=Object(i.a)(c,2),a=r[0],s=r[1],m=Object(k.b)();function N(){m(function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:E});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}function C(){m(function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:w});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}function T(){m(function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:_});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}return Object(n.useEffect)((function(){m(function(e){return function(){var t=Object(g.a)(v.a.mark((function t(c){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n="https://api.github.com/repos/facebook/create-react-app/issues?page="+e,console.log("fetched page",e,"from github repo create-react-app"),fetch(n,{headers:{Accept:"application/vnd.github.v3+json"}}).then((function(e){return e.json()})).then((function(e){return c({type:y,payload:e})})).catch((function(e){return console.error(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(a))}),[m,a]),Object(M.jsxs)(o.a,{children:[Object(M.jsx)("hr",{}),Object(M.jsxs)(u.a,{children:[Object(M.jsx)(j.a,{md:6,children:Object(M.jsx)("h1",{children:"Github Issues Page"})}),Object(M.jsx)(j.a,{children:Object(M.jsxs)(l.a,{children:[Object(M.jsxs)(h.a,{outline:!0,size:"sm",color:"primary",onClick:function(){return C()},children:[Object(M.jsx)(S.a,{})," Watch"]}),Object(M.jsx)(h.a,{active:!0,outline:!0,size:"sm",color:"primary",children:t.watch})]})}),Object(M.jsx)(j.a,{children:Object(M.jsxs)(l.a,{children:[Object(M.jsxs)(h.a,{outline:!0,size:"sm",color:"primary",onClick:function(){return N()},children:[Object(M.jsx)(I.a,{}),"Star"]}),Object(M.jsx)(h.a,{active:!0,outline:!0,size:"sm",color:"primary",children:t.star})]})}),Object(M.jsx)(j.a,{children:Object(M.jsxs)(l.a,{children:[Object(M.jsxs)(h.a,{outline:!0,size:"sm",color:"primary",onClick:function(){return T()},children:[Object(M.jsx)(R.a,{})," Fork"]})," ",Object(M.jsx)(h.a,{active:!0,outline:!0,size:"sm",color:"primary",children:t.fork})]})})]}),Object(M.jsx)("hr",{}),Object(M.jsx)(u.a,{children:Object(M.jsx)(z.a,{dataLength:e.issues.length,next:function(){s(a+1)},loader:Object(M.jsx)("h4",{children:"Loading..."}),hasMore:!0,children:e.issues.length>0?e.issues.map((function(e){return Object(M.jsx)("div",{className:"container",children:Object(M.jsx)(b.a,{children:Object(M.jsxs)(O.a,{children:[Object(M.jsx)(d.a,{tag:"h5",children:e.title}),e.labels[0]?Object(M.jsx)(f.a,{color:"info",children:e.labels[0].name}):"",Object(M.jsxs)(p.a,{tag:"h6",className:"mb-2 text-muted",children:["#",e.number," created at ",e.created_at," by"," ",e.user.login]}),Object(M.jsx)(x.a,{children:e.title})]})})},e.title)})):Object(M.jsx)("p",{})})})]})},L=c(18),X=c(30),A=c(24),F=c(9),U={issues:[]},H={watch:0,star:0,fork:0},J=[X.a],V=Object(L.b)({listOfIssues:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(F.a)(Object(F.a)({},e),{},{issues:[].concat(Object(A.a)(e.issues),Object(A.a)(t.payload))});default:return e}},fetchCounter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(F.a)(Object(F.a)({},e),{},{star:e.star+1});case w:return Object(F.a)(Object(F.a)({},e),{},{watch:e.watch+1});case _:return Object(F.a)(Object(F.a)({},e),{},{fork:e.fork+1});default:return e}}}),W=Object(L.d)(V,{},Object(L.c)(L.a.apply(void 0,J),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));s.a.render(Object(M.jsx)(k.a,{store:W,children:Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(D,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.07a8f35f.chunk.js.map