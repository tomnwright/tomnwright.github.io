(this.webpackJsonpsnakegame=this.webpackJsonpsnakegame||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(6),o=n.n(a),u=(n(12),n(13),n(7)),s=n(2);var i=n(0);function f(e,t){return Math.floor(Math.random()*(t-e+1))+e}var l=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];do{e=f(0,80)}while(t.includes(e));return e},d=0,b=1,j=2,O=3,h={0:{dRow:-1,dCol:0},1:{dRow:0,dCol:1},2:{dRow:1,dCol:0},3:{dRow:0,dCol:-1}},v={0:j,1:O,2:d,3:b},w={0:0,1:90,2:180,3:-90},g=function(){var e=Object(r.useState)(new Array(9).fill(0).map((function(e){return new Array(9).fill(0)}))),t=Object(s.a)(e,1)[0],n=Object(r.useState)([l()]),c=Object(s.a)(n,2),a=c[0],o=c[1],g=Object(r.useState)(l(a)),m=Object(s.a)(g,2),N=m[0],k=m[1],p=Object(r.useState)(0),x=Object(s.a)(p,2),R=x[0],C=x[1],S=Object(r.useState)(!1),y=Object(s.a)(S,2),A=y[0],E=y[1],F=Object(r.useRef)(!0),M=Object(r.useRef)(f(0,3)),T=Object(r.useRef)(NaN);!function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){I()}),A?null:250),Object(r.useEffect)((function(){window.addEventListener("keydown",(function(e){L(e)}))}),[]);var I=function(){console.log("Moving Snake"),F.current=!0;var e=a[0],t=G(e,M.current);if(isNaN(t))return J();var n=[t].concat(Object(u.a)(a));if(t===N?(console.log("EAT!"),k(l(n))):n.pop(),a.includes(t))return J();o(n),C(10*(n.length-1)),D()},L=function(e){var t;switch(e.key){case"ArrowRight":case"d":t=b;break;case"ArrowLeft":case"a":t=O;break;case"ArrowUp":case"w":t=d;break;case"ArrowDown":case"s":t=j;break;default:return}F.current?B(t):T.current=t},B=function(e){var t=v[M.current];M.current!==e&&t!==e&&(M.current=e,F.current=!1)},D=function(){isNaN(T.current)||(B(T.current),T.current=NaN)},J=function(){E(!0),setTimeout(P,1e3),T.current=NaN},P=function(){var e=[l()];o(e),k(l(e)),C(0),M.current=f(0,3),E(!1)},G=function(e,t){var n=Math.floor(e/9),r=e%9,c=h[t],a=c.dRow;return r+=c.dCol,(n+=a)<0||n>=9||r<0||r>=9?NaN:9*n+r},U=function(e,t){var n=9*e+t;return N===n?"food":a.includes(n)?n!==a[0]?"snake-body":A?"snake-dead":"snake-head":""},W=function(e,t){return 9*e+t!==a[0]?{}:{transform:"rotate(".concat(w[M.current],"deg)")}};return Object(i.jsxs)("div",{className:"board",onClick:I,children:[Object(i.jsxs)("h1",{children:["Score: ",R]}),t.map((function(e,t){return Object(i.jsx)("div",{className:"row",children:e.map((function(e,n){return Object(i.jsx)("div",{className:"cell ".concat(U(t,n)),style:W(t,n)},n)}))},t)}))]})},m=function(){return Object(i.jsxs)("footer",{className:"footer",children:["Created by Tom Wright \xa9 2021. ",Object(i.jsx)("a",{href:"github.com/tomnwright/react-snake-game",children:"Github Repo"})]})};var N=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(g,{})}),Object(i.jsx)(m,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),k()}},[[15,1,2]]]);
//# sourceMappingURL=main.c4bc076b.chunk.js.map