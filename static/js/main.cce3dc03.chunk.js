(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{15:function(e,t,a){e.exports=a(39)},20:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),i=(a(20),a(2)),o=a(14);var u=function(e){return r.a.createElement("div",{className:"Result",onClick:function(){return e.handleItemClick(e.movie.imdbID)}},r.a.createElement("h1",{className:"Result_title"},e.movie.Title),r.a.createElement("img",{className:"Result_image",src:e.movie.Poster,alt:e.movie.Title}))},m=a(13),s=a.n(m);var d=function(e){return e.trigger.Ratings,r.a.createElement("div",{className:"popup",style:{display:e.trigger?"block":"none"}},r.a.createElement("div",{className:"popup_close",onClick:e.close},r.a.createElement("h3",null,"Close")),r.a.createElement("header",null,r.a.createElement("h1",null,e.trigger.Title,"(",e.trigger.Year,")")),r.a.createElement("div",{className:"popup_image"},r.a.createElement("img",{src:e.trigger.Poster,alt:e.trigger.Title}),r.a.createElement("div",{className:"popup_content"},r.a.createElement("h2",null,e.trigger.Plot),r.a.createElement("div",{className:"popup_content_cast"},r.a.createElement("h3",null,"Starring:")," ",r.a.createElement("h2",null,e.trigger.Actors)),r.a.createElement("div",{className:"popup_content_rating"},JSON.stringify.ratings,r.a.createElement("h3",null,"IMDB: "),r.a.createElement("h2",null,e.trigger.imdbRating),r.a.createElement("h3",null,"MetaScore: "),r.a.createElement("h2",null,e.trigger.Metascore)))))};var p=function(){var e=Object(n.useState)({query:"",results:[],Valid:!1,id:"",detailedInfo:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],l="https://www.omdbapi.com/?apikey=".concat("e9b430ec","&s=").concat(a.query),m="http://www.omdbapi.com/?apikey=".concat("e9b430ec","&i="),p=function(e){c((function(t){return Object(i.a)(Object(i.a)({},t),{},{id:e})})),fetch(m+e).then((function(e){return e.json()})).then((function(e){c((function(t){return Object(i.a)(Object(i.a)({},t),{},{detailedInfo:e})}))}))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.query.length>0&&s()(l).then((function(e){return c((function(t){return Object(i.a)(Object(i.a)({},t),{},{results:e.data.Search,Valid:!0})}))})).catch((function(e){return e})),c((function(e){return Object(i.a)(Object(i.a)({},e),{},{query:""})}))},className:"Search_form"},r.a.createElement("div",{className:"inputField"},r.a.createElement("input",{type:"text",placeholder:"Start typing...",onChange:function(e){var t=e.target.value;c((function(e){return Object(i.a)(Object(i.a)({},e),{},{query:t})}))},value:a.query})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Search")),r.a.createElement("div",{className:"resultsinSearch"},a.results.map((function(e){return r.a.createElement(u,{key:e.imdbID,movie:e,query:a.query,handleItemClick:p})}))),r.a.createElement(d,{trigger:a.detailedInfo,close:function(){c((function(e){return Object(i.a)(Object(i.a)({},e),{},{detailedInfo:""})}))}}))};a(38);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App_title"},r.a.createElement("h1",null,"The Movie Database")),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.cce3dc03.chunk.js.map