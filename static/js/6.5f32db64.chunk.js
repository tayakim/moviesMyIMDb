(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{65:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var a=c(66);function n(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,a)}return c}function s(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?n(Object(c),!0).forEach((function(t){Object(a.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}},66:function(e,t,c){"use strict";function a(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}c.d(t,"a",(function(){return a}))},67:function(e,t,c){e.exports={castList:"cast_castList__1eqr0",item:"cast_item__2HhtQ",castText:"cast_castText__3wOKS",active:"cast_active__1PEYW",castImg:"cast_castImg__3_f15",button:"cast_button__17axi"}},68:function(e,t,c){e.exports={wrap:"movie_wrap__l86Rc",movieText:"movie_movieText__19-yI",movieTextBold:"movie_movieTextBold__2IRBM",movieTextTitle:"movie_movieTextTitle__ZRdsv",movieImg:"movie_movieImg__3X7jj"}},73:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(65),s=c(13),i=c(14),r=c(16),o=c(15),l=c(0),m=c(2),j=c(22),p=c(68),h=c.n(p),b=function(e){var t=e.poster_path,c=e.title,n=e.overview,s=e.genres,i=10*e.vote_average,r=e.release_date.slice(0,4);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:h.a.wrap,children:[Object(a.jsx)("img",{className:h.a.movieImg,src:"".concat("https://image.tmdb.org/t/p/w185").concat(t),alt:c}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{className:h.a.movieTextTitle,children:[c," (",r,")"]}),Object(a.jsxs)("p",{className:h.a.movieText,children:[Object(a.jsx)("span",{className:h.a.movieTextBold,children:"User Score:"})," ",i,"%"]}),Object(a.jsx)("h3",{className:h.a.movieTextBold,children:"Overview:"}),Object(a.jsx)("p",{className:h.a.movieText,children:n}),Object(a.jsx)("h3",{className:h.a.movieTextBold,children:"Genres:"}),s.map((function(e){return Object(a.jsx)("p",{className:h.a.movieText,children:e.name},e.id)}))]})]})})},u=c(8),v=c(10),O=c.n(v),d=function(e){Object(r.a)(c,e);var t=Object(o.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props.match.params.movieId;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("ul",{className:O.a.box,children:[Object(a.jsx)("li",{className:O.a.list,children:Object(a.jsx)(u.c,{className:O.a.link,activeClassName:O.a.active,to:{pathname:"/movie/".concat(e,"/cast"),state:{from:this.props.location}},children:"Cast"})}),Object(a.jsx)("li",{className:O.a.list,children:Object(a.jsx)(u.c,{className:O.a.link,activeClassName:O.a.active,to:{pathname:"/movie/".concat(e,"/reviews"),state:{from:this.props.location}},children:"Reviews"})})]})})}}]),c}(l.Component),x=Object(m.f)(d),f=c(67),_=c.n(f),g=Object(l.lazy)((function(){return c.e(0).then(c.bind(null,76))})),y=Object(l.lazy)((function(){return c.e(1).then(c.bind(null,75))})),w=function(e){Object(r.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={film:null},e.handleGoBack=function(){var t=e.props.location.state;t?e.props.history.push(t.from):e.props.history.push({pathname:"/"})},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;j.c(t).then((function(t){return e.setState({film:t})}))}},{key:"render",value:function(){var e=this.state.film;return e&&console.log("film:",e),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:_.a.button,type:"button",onClick:this.handleGoBack,children:"Go back"}),e&&Object(a.jsx)(b,Object(n.a)({},e)),Object(a.jsx)("p",{className:_.a.castText,children:"Additional information:"}),Object(a.jsx)(x,{}),Object(a.jsx)(l.Suspense,{fallback:Object(a.jsx)("h2",{className:_.a.castText,children:"Loading..."}),children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{path:"".concat(this.props.match.path,"/cast"),exact:!0,component:g}),Object(a.jsx)(m.a,{path:"".concat(this.props.match.path,"/reviews"),component:y})]})})]})}}]),c}(l.Component);t.default=w}}]);
//# sourceMappingURL=6.5f32db64.chunk.js.map