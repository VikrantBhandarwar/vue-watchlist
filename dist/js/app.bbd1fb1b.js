(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0473":function(t,e,a){"use strict";var n=a("5299"),i=a.n(n);i.a},"1ea1":function(t,e,a){},2922:function(t,e,a){"use strict";var n=a("78b8"),i=a.n(n);i.a},"3b2e":function(t,e,a){"use strict";var n=a("1ea1"),i=a.n(n);i.a},"3d3d":function(t,e,a){"use strict";var n=a("eaac"),i=a.n(n);i.a},5299:function(t,e,a){},5399:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("Header"),a("router-view",{attrs:{watchlist:t.watchlist},on:{"add-watchlist":t.addWatchlist,"mark-watched":t.handleToggle,"delete-movie":t.handleDelete}})],1)])},r=[],s=(a("99af"),a("4de4"),a("c740"),a("d81d"),a("5530")),o=a("2909"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("header",{staticClass:"nav"},[t._m(0),a("div",{staticClass:"links"},[a("ul",{staticClass:"link-items"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/watchlist"}},[t._v("Watchlist")])],1)])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("h1",{staticClass:"title"},[t._v("WATCHTIME")])])}],u={name:"Header"},d=u,h=(a("2922"),a("2877")),m=Object(h["a"])(d,c,l,!1,null,null,null),v=m.exports,p=function(t){window.localStorage.setItem("movies",JSON.stringify(t))},f=function(){return JSON.parse(window.localStorage.getItem("movies"))},w=(a("a1a3"),{components:{Header:v},data:function(){return{watchlist:[]}},methods:{addWatchlist:function(t){var e=this.watchlist.findIndex((function(e){return e.imdbID===t.imdbID}));if(-1!==e)return null;this.watchlist=[].concat(Object(o["a"])(this.watchlist),[t]),p(this.watchlist)},handleToggle:function(t){console.log(t),this.watchlist=this.watchlist.map((function(e){return e.imdbID===t?Object(s["a"])(Object(s["a"])({},e),{},{watched:!e.watched}):e})),p(this.watchlist)},handleDelete:function(t){this.watchlist=this.watchlist.filter((function(e){return e.imdbID!==t})),p(this.watchlist)}},created:function(){this.watchlist=f()||[]}}),b=w,g=Object(h["a"])(b,i,r,!1,null,null,null),_=g.exports,x=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Search",{on:{"search-movie":t.getMovie}}),a("MovieCard",{attrs:{movie:t.movieData},on:{"add-watchlist":t.addWatchlist}})],1)},k=[],C=(a("96cf"),a("1da1")),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.movie.Title?a("div",{staticClass:"movie-card"},[a("div",[a("img",{staticClass:"poster",attrs:{src:t.movie.Poster,alt:"Movie Poster"}})]),a("div",{staticClass:"movie-data"},[a("h2",[t._v(t._s(t.movie.Title))]),a("p",{staticClass:"year"},[t._v(t._s(t.movie.Year))]),a("p",{staticClass:"plot"},[t._v(" "+t._s(t.movie.Plot)+" "),a("a",{attrs:{href:"https://www.imdb.com/title/"+t.movie.imdbID}},[t._v("Read More...")])]),a("ActionButtons",{on:{"add-watchlist":function(e){return t.$emit("add-watchlist")}}}),t.movie.Ratings?a("div",{staticClass:"ratings"},t._l(t.movie.Ratings,(function(e){return a("div",{key:e.source,staticClass:"rating"},["Internet Movie Database"===e.Source?a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png",alt:"IMDb Logo"}}):t._e(),"Rotten Tomatoes"===e.Source?a("img",{attrs:{src:"https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_mvugqulj/def_height/55/def_width/200/version/100011/type/1",alt:"Rotten Tomatoes Logo"}}):t._e(),"Metacritic"===e.Source?a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Metacritic_logo.svg/726px-Metacritic_logo.svg.png",alt:"Metacritic Logo"}}):t._e(),t._v(" "+t._s(e.Value)+" ")])})),0):t._e(),a("div",{staticClass:"tags"},t._l(t.movie.Tags,(function(e){return a("span",{key:e},[t._v(" "+t._s(e)+" ")])})),0)],1)]):t._e()])},D=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"action-buttons"},[a("button",{attrs:{type:"button"},on:{click:function(e){return t.$emit("add-watchlist")}}},[t._v(" Add to Watchlist ")])])},T=[],j={name:"ActionButtons"},I=j,S=(a("3d3d"),Object(h["a"])(I,M,T,!1,null,"26d61cd8",null)),$=S.exports,P={name:"MovieCard",props:["movie"],components:{ActionButtons:$}},R=P,W=(a("b436"),Object(h["a"])(R,O,D,!1,null,null,null)),E=W.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("form",{on:{submit:t.handleSubmit}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text",name:"search",id:"search",placeholder:"Search Your Movies..."},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),a("button",[t._v("Search")])])])},H=[],A={Name:"Search",data:function(){return{searchText:""}},methods:{handleSubmit:function(t){t.preventDefault(),this.$emit("search-movie",this.searchText),this.searchText=""}}},B=A,N=(a("b014"),Object(h["a"])(B,L,H,!1,null,"17567a36",null)),Y=N.exports,J=(a("d3b7"),a("ac1f"),a("1276"),function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){var a,n,i,r,s,o,c,l,u,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.omdbapi.com/?t=".concat(e,"&apikey=1725226b"));case 2:return a=t.sent,t.next=5,a.json();case 5:return n=t.sent,i=n.Title,r=n.Year,s=n.Plot,o=n.Ratings,c=n.Poster,l=n.Genre,u=n.imdbID,d=l.split(","),t.abrupt("return",{Title:i,Year:r,Plot:s,Ratings:o,Poster:c,Tags:d,imdbID:u,watched:!1});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),q=J,F={name:"Home",components:{MovieCard:E,Search:Y},props:["movieDetails","test"],data:function(){return{movieData:null}},methods:{getMovie:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,q(t);case 2:e.movieData=a.sent;case 3:case"end":return a.stop()}}),a)})))()},addWatchlist:function(){this.$emit("add-watchlist",this.movieData)}},created:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getMovie("avengers");case 1:case"end":return e.stop()}}),e)})))()}},G=F,V=Object(h["a"])(G,y,k,!1,null,null,null),z=V.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"watchlist"},[0===t.watchlist.length?a("h1",[t._v("No Movies Found!")]):t._e(),t._l(t.watchlist,(function(e){return a("ListItem",{key:e.imdbID,attrs:{movie:e},on:{"mark-watched":t.handleToggle,"delete-movie":t.handleDelete}})}))],2)},Q=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.movie?a("div",{staticClass:"watched-item",class:{watched:t.movie.watched}},[a("div",{staticClass:"image"},[a("img",{attrs:{src:t.movie.Poster,alt:t.movie.Title}})]),a("p",[t._v(" "+t._s(t.movie.Title)+" ")]),a("p",[t._v(" "+t._s(t.movie.Year)+" ")]),a("p",[a("a",{attrs:{href:"https://www.imdb.com/title/"+t.movie.imdbID}},[t._v("Read More")])]),a("div",{staticClass:"buttons"},[a("button",{staticClass:"toggle",on:{click:function(e){return t.$emit("mark-watched",t.movie.imdbID)}}},[t._v(" "+t._s(t.movie.watched?"Move to Watchlist":"Mark as Watched")+" ")]),a("button",{staticClass:"delete",on:{click:function(e){return t.$emit("delete-movie",t.movie.imdbID)}}},[t._v(" Delete ")])])]):t._e()])},X=[],Z={name:"ListItem",props:["movie"]},tt=Z,et=(a("3b2e"),Object(h["a"])(tt,U,X,!1,null,null,null)),at=et.exports,nt={name:"Watchlist",props:["watchlist"],components:{ListItem:at},methods:{handleToggle:function(t){this.$emit("mark-watched",t)},handleDelete:function(t){this.$emit("delete-movie",t)}}},it=nt,rt=(a("0473"),Object(h["a"])(it,K,Q,!1,null,"a1984d70",null)),st=rt.exports;n["a"].use(x["a"]);var ot=[{path:"/",name:"Home",component:z},{path:"/watchlist",name:"Watchlist",component:st}],ct=new x["a"]({mode:"history",base:"/",routes:ot}),lt=ct;n["a"].config.productionTip=!1,new n["a"]({router:lt,render:function(t){return t(_)}}).$mount("#app")},"78b8":function(t,e,a){},a1a3:function(t,e,a){},b014:function(t,e,a){"use strict";var n=a("5399"),i=a.n(n);i.a},b436:function(t,e,a){"use strict";var n=a("de27"),i=a.n(n);i.a},de27:function(t,e,a){},eaac:function(t,e,a){}});
//# sourceMappingURL=app.bbd1fb1b.js.map