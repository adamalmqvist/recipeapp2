(this.webpackJsonprecipieapp=this.webpackJsonprecipieapp||[]).push([[0],{36:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(28),i=n.n(r),o=(n(36),n(10)),j=n(3),u=n(12),l=n.n(u),b=n(14),d=n(2),O=n(29),p=n.n(O).a.create({baseURL:"http://localhost:3001"}),h=function(e){return p.post("/user",e)},x=function(e){return p.post("/signIn",e)},m=function(e){return p.post("/post",e)},f=function(){return p.get("/post")},v=(n(56),function(){var e=Object(s.useState)([{}]),t=Object(d.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,a(t.data),console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){r()}),[]),Object(c.jsx)("div",{className:"container",children:n.map((function(e){return Object(c.jsx)("p",{className:"containerItem",children:Object.values(e).map((function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:e})})}))},e.title)}))})}),g=Object(s.createContext)(null),N=function(e){var t=Object(s.useState)({}),n=Object(d.a)(t,2),a=n[0],r=n[1],i=e.children;return Object(c.jsx)(g.Provider,{value:[a,r],children:i})},C=(n(57),function(){Object(j.f)();var e=Object(s.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),i=Object(d.a)(r,2),o=i[0],u=i[1],O=Object(s.useState)(),p=Object(d.a)(O,2),h=(p[0],p[1],Object(s.useState)("")),m=Object(d.a)(h,2),f=m[0],v=(m[1],Object(s.useContext)(g)),N=Object(d.a)(v,2),C=N[0],w=N[1],k=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({username:n,password:o});case 3:t=e.sent,w(t),console.log(C),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"loginView-container",children:[Object(c.jsx)("p",{children:f}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"input-container",children:[Object(c.jsx)("input",{className:"input",placeholder:"Username",name:"username",onChange:function(e){return a(e.target.value)}})," ",Object(c.jsx)("br",{})]}),Object(c.jsxs)("div",{className:"input-container",children:[Object(c.jsx)("input",{className:"input",type:"password",placeholder:"Password",name:"password",onChange:function(e){return u(e.target.value)}}),Object(c.jsx)("button",{className:"btn",onClick:function(){return k()},children:"Sign in"})]})]})]})}),w=n(5),k=(n(63),function(){var e=Object(s.useState)({title:"random",duration:"random",ingredients:"random",description:"random"}),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"CreateUserView-container",children:Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"input-container",children:[Object(c.jsx)("input",{className:"input",placeholder:"title",name:"title",onChange:function(e){return a(Object(w.a)(Object(w.a)({},n),{},{title:e.target.value}))}})," ",Object(c.jsx)("br",{})]}),Object(c.jsxs)("div",{className:"input-container",children:[Object(c.jsx)("input",{className:"input",placeholder:"duration",name:"duration",onChange:function(e){return a(Object(w.a)(Object(w.a)({},n),{},{duration:e.target.value}))}})," ",Object(c.jsx)("br",{})]}),Object(c.jsxs)("div",{className:"input-container",children:[Object(c.jsx)("textarea",{className:"textArea",placeholder:"ingredients",name:"ingrediens",onChange:function(e){return a(Object(w.a)(Object(w.a)({},n),{},{ingrediens:e.target.value}))}})," ",Object(c.jsx)("br",{})]}),Object(c.jsxs)("div",{className:"input-container",children:[Object(c.jsx)("textarea",{className:"textArea",placeholder:"description",onChange:function(e){return a(Object(w.a)(Object(w.a)({},n),{},{description:e.target.value}))}}),Object(c.jsx)("button",{className:"btn",onClick:function(){return m(n)},children:"Create Post"})]})]})})})}),S="/",T="/login",I="/post",H="/user/settings",P="/createUser",U=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"This is the SettingsView"})})},y=(n(64),function(){var e=Object(s.useState)({username:"adam23",password:"hemligt"}),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"CreateUserView-container",children:Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"input-container",children:[Object(c.jsx)("input",{className:"input",placeholder:"Username",name:"username",onChange:function(e){return a(Object(w.a)(Object(w.a)({},n),{},{username:e.target.value}))}})," ",Object(c.jsx)("br",{})]}),Object(c.jsxs)("div",{className:"input-container",children:[Object(c.jsx)("input",{className:"input",type:"password",placeholder:"Password",name:"password",onChange:function(e){return a(Object(w.a)(Object(w.a)({},n),{},{password:e.target.value}))}}),Object(c.jsx)("button",{className:"btn",onClick:function(){return h(n)},children:"Create user"})]})]})})})}),B=function(e){var t=e.children;return Object(c.jsxs)(o.a,{children:[t,Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:S,component:v}),Object(c.jsx)(j.a,{exact:!0,path:T,component:C}),Object(c.jsx)(j.a,{exact:!0,path:P,component:y}),Object(c.jsx)(j.a,{exact:!0,path:I,component:k}),Object(c.jsx)(j.a,{exact:!0,path:H,component:U})]})]})},E=(n(65),n(66),n(67),function(e){return Object(c.jsxs)("button",{className:"toggle-button",onClick:function(){return e.drawerHandler(!0)},children:[Object(c.jsx)("div",{className:"toggle-button_line"}),Object(c.jsx)("div",{className:"toggle-button_line"}),Object(c.jsx)("div",{className:"toggle-button_line"})]})}),L=(n(68),function(e){var t=Object(j.f)();return Object(c.jsxs)("div",{className:e.drawerIsOpen?"side-drawer open":"side-drawer",children:[Object(c.jsx)("div",{onClick:function(){return e.drawerHandler(!1)},id:"mdiv",children:Object(c.jsx)("div",{className:"mdiv",children:Object(c.jsx)("div",{className:"md"})})}),Object(c.jsxs)("ul",{className:"ulTabsContainer",children:[Object(c.jsx)("li",{className:"listTabs",onClick:function(){return t.push(S)},children:"Home"}),Object(c.jsx)("li",{className:"listTabs",onClick:function(){return t.push(I)},children:"PostRecipe"}),Object(c.jsx)("li",{className:"listTabs",onClick:function(){return t.push(T)},children:"Sign In"}),Object(c.jsx)("li",{className:"listTabs",onClick:function(){return t.push(P)},children:"Create User"})]})]})}),D=(n(69),function(e){return Object(c.jsx)("div",{className:"backDrop",onClick:function(){return e.drawerHandler(!1)}})}),F=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"hamburgerContainer",children:Object(c.jsx)(E,{drawerHandler:a})}),Object(c.jsx)(L,{drawerIsOpen:n,drawerHandler:a}),!n||Object(c.jsx)(D,{drawerHandler:a})]})},V=(n(70),n(71),function(){var e=Object(j.f)();return Object(c.jsxs)("ul",{className:"ulTabsWrapper",children:[Object(c.jsx)("li",{className:"liTabs",onClick:function(){return e.push(S)},children:"Home"}),Object(c.jsx)("li",{className:"liTabs",onClick:function(){return e.push(I)},children:"PostRecipe"})]})}),R=function(){return Object(c.jsx)("div",{className:"desktopNavigationContainer",children:Object(c.jsx)("div",{className:"deskotopNavigationTabs",children:Object(c.jsx)(V,{})})})},W=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},_=(n(72),n(73),function(){var e=Object(j.f)(),t=Object(s.useContext)(g),n=Object(d.a)(t,2),a=(n[0],n[1]);return Object(c.jsxs)("div",{className:"profileDropdown",children:[Object(c.jsx)("span",{onClick:function(){return e.push(H)},children:"Settings"}),Object(c.jsx)("span",{onClick:function(){return a({}),void e.push(S)},children:"logout"})]})}),z=function(){var e=Object(s.useContext)(g),t=Object(d.a)(e,2),n=t[0];t[1];return Object(c.jsxs)("div",{className:"profileWrapper",children:[Object(c.jsx)("img",{src:"https://thispersondoesnotexist.com/image",alt:"",className:"profileImg"}),Object(c.jsx)("div",{className:"usernameP",children:n.username}),Object(c.jsx)(_,{})]})},A=n.p+"static/media/fast-food.5acaf4b9.svg",J=function(){var e=Object(j.f)(),t=Object(s.useContext)(g),n=Object(d.a)(t,2),a=n[0],r=(n[1],function(){var e=Object(s.useState)(W),t=Object(d.a)(e,2),n=t[0],c=t[1],a=function(){c(W)};return Object(s.useEffect)((function(){return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),n}()),i=(r.height,r.width);return Object(c.jsxs)("div",{className:"navigationContainer",children:[Object(c.jsxs)("div",{className:"navigationButton",children:[i<=1e3?Object(c.jsx)(F,{}):Object(c.jsx)(R,{})," "]}),Object(c.jsxs)("div",{className:"logoTypeDiv",children:[" ",Object(c.jsx)("img",{src:A,className:"logoType"})]}),a.auth?Object(c.jsxs)("div",{className:"profile",children:[Object(c.jsx)(z,{})," "]}):Object(c.jsxs)("div",{className:"divButton",children:[Object(c.jsx)("span",{className:"signInButton",onClick:function(){return e.push(T)},children:"Sign In"}),Object(c.jsx)("span",{className:"CreateUserButton",onClick:function(){return e.push(P)},children:"Create User"})]})]})};var M=function(){return Object(c.jsx)(N,{children:Object(c.jsx)(B,{children:Object(c.jsx)(J,{})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),q()}},[[74,1,2]]]);
//# sourceMappingURL=main.960aaf9e.chunk.js.map