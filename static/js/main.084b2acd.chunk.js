(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),c=t.n(l),o=(t(14),t(3)),i=t(4),s=t(6),m=t(5),u=t(7),d=(t(15),function(e){return r.a.createElement("button",{className:"toggle-button",onClick:e.click},r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}))}),E=(t(16),function(e){var a=e.drawerClickHandler;return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",{className:"toolbar__toggle-button"},r.a.createElement(d,{click:a})),r.a.createElement("div",{className:"toolbar__logo"},r.a.createElement("a",{href:"/"},"LOGO")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar_navigation-items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Login")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Register")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Current Bids"))))))}),p=(t(17),function(e){var a="side-drawer";return e.show&&(a="side-drawer open"),r.a.createElement("nav",{className:a},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Login")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Register")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Current Bids"))))}),f=(t(18),function(e){var a=e.click;return r.a.createElement("div",{role:"presentation",className:"backdrop",onClick:a})}),h=function(e){var a=e.categories;return r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"input-group input-group-lg",style:{width:"".concat(100,"%")}},r.a.createElement("input",{type:"text",className:"form-control rounded-0",id:"search-query",placeholder:"Search...",style:{width:"".concat(40,"%")}}),r.a.createElement("select",{className:"form-control rounded-0",id:"categories"},r.a.createElement("option",{selected:!0},"Categories"),a.map(function(e){return r.a.createElement("option",null,e)})),r.a.createElement("button",{type:"button",className:"btn btn-lg btn-primary rounded-0 border-right"},"Search"),r.a.createElement("button",{type:"button",className:"btn btn-lg btn-primary rounded-0"},"Filters")))},g=function(e){var a=e.searches;return r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col"},"Popular Searches:",a.slice(0,10).map(function(e){return r.a.createElement("a",{className:"ml-3",href:"?search=".concat(e)},e)})))},v=function(e){var a=e.availableModes;return r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control"},a.map(function(e){return r.a.createElement("option",null,e)})))},b=function(e){var a=e.availableTypes;return r.a.createElement("div",{className:"form-group mx-sm-3"},r.a.createElement("select",{className:"form-control"},a.map(function(e){return r.a.createElement("option",null,e)})))},w=function(){return r.a.createElement("form",{className:"form-inline"},r.a.createElement(v,{availableModes:["Recent","AnotherMode","ThirdMode"]}),r.a.createElement(b,{availableTypes:["Cards","List","Compacted"]}))},N=function(){return r.a.createElement(w,null)},k=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={sideDrawerOpen:!1},t.drawerToggleClickHandler=function(){t.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},t.backdropClickHandler=function(){t.setState({sideDrawerOpen:!1})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e,a=this.state.sideDrawerOpen;return a&&(e=r.a.createElement(f,{click:this.backdropClickHandler})),r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(E,{drawerClickHandler:this.drawerToggleClickHandler}),r.a.createElement(p,{show:a}),e,r.a.createElement("main",{style:{marginTop:"80px"},className:"container"},r.a.createElement(h,{categories:["category1","category2"]}),r.a.createElement(g,{searches:["popular search 1","popular search 2","popular search 3"]}),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(N,null)),r.a.createElement("div",{className:"col-md-4"},"Latest Bids | User's bids"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(19);c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.084b2acd.chunk.js.map