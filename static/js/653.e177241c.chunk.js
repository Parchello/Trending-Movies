"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{1653:function(e,n,r){r.r(n),r.d(n,{default:function(){return P}});var t,i,s,a,l,o=r(5861),c=r(9439),d=r(4687),h=r.n(d),p=r(9075),u=r(2791),v=r(3656),x=r(7689),j=r(1087),g=r(168),f=r(6487),m=f.ZP.div(t||(t=(0,g.Z)(["\n  display: 'flex';\n  justify-content: 'center';\n  align-items: 'center';\n  height: '100vh';\n"]))),w=f.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n  margin-left: 40px;\n  margin-right: 40px;\n"]))),k=f.ZP.div(s||(s=(0,g.Z)(["\n  margin-top: 100px;\n  margin-left: 50px;\n"]))),Z=f.ZP.ul(a||(a=(0,g.Z)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n"]))),b=(0,f.ZP)(j.NavLink)(l||(l=(0,g.Z)(["\n  text-decoration: none;\n  color: navy;\n\n  &:hover {\n    color: orange;\n  }\n  &.active {\n    color: orange;\n  }\n"]))),y=r(8571),_=r(184);function C(e){var n,r,t=e.movie,i=e.genres,s=(0,x.TH)(),a=(0,u.useRef)(null!==(n=null===(r=s.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/movies");return(0,_.jsxs)("div",{children:[t?(0,_.jsxs)(w,{children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{children:(0,_.jsx)(y.Z,{component:j.Link,to:a.current,variant:"outlined",style:{marginTop:"10px"},children:"Go back"})}),(0,_.jsx)("h1",{children:t.title}),(0,_.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w300"+t.poster_path:"https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg",alt:t.title,width:300,height:450})]}),(0,_.jsxs)(k,{children:[(0,_.jsx)("h2",{children:"Overview"}),(0,_.jsxs)("p",{children:["Relase date: ",t.release_date]}),(0,_.jsxs)("p",{children:["User score: ",t.vote_average,"/10"]}),(0,_.jsx)("p",{children:t.overview}),(0,_.jsx)("h2",{children:"Genres"}),(0,_.jsx)("ul",{children:i.map((function(e){return(0,_.jsx)("li",{children:(0,_.jsx)("p",{children:e.name})},e.id)}))})]})]}):(0,_.jsx)(m,{children:(0,_.jsx)(v.ko,{height:"400",width:"400",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"grey",barColor:"orange"})}),(0,_.jsxs)(Z,{children:[(0,_.jsx)("li",{children:(0,_.jsx)(b,{to:"casts",children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(b,{to:"reviews",children:"Reviews"})})]}),(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading"}),children:(0,_.jsx)(x.j3,{})})]})}function P(){var e=(0,u.useState)(null),n=(0,c.Z)(e,2),r=n[0],t=n[1],i=(0,u.useState)([]),s=(0,c.Z)(i,2),a=s[0],l=s[1],d=(0,x.UO)().movieId;return(0,u.useEffect)((function(){var e=function(){var e=(0,o.Z)(h().mark((function e(){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.m4)(d);case 3:void 0!==(n=e.sent)&&(t(n),l(n.genres)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[d]),(0,_.jsx)("div",{children:(0,_.jsx)(C,{movie:r,genres:a})})}}}]);
//# sourceMappingURL=653.e177241c.chunk.js.map