(this["webpackJsonpreact-demo-employee-directory"]=this["webpackJsonpreact-demo-employee-directory"]||[]).push([[0],{23:function(e,n,t){},41:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(2),o=t.n(i),a=t(12),s=t.n(a),l=(t(23),t(13)),r=t(14),d=t(17),j=t(16);var m=function(){return Object(c.jsx)("div",{className:"col nav",children:"Nav bar and sort by"})};var u=function(e){return Object(c.jsx)("div",{className:"row dir ",children:e.dir.map((function(n){return Object(c.jsxs)("div",{className:"employee-name",onClick:function(){return e.loadEmployee(n)},children:[n.name.title," ",n.name.first," ",n.name.last]},n.login.uuid)}))})};var f=function(e){return console.log(e.info),e.info.name?Object(c.jsx)("div",{className:"col col-lg-4 info-cont",children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{className:"info",id:"nameInfo",children:[e.info.name.title," ",e.info.name.first," ",e.info.name.last]}),Object(c.jsxs)("li",{className:"info",id:"cellInfo",children:["Cell: ",e.info.cell]}),Object(c.jsxs)("li",{className:"info",id:"emailInfo",children:["Email: ",e.info.email]}),Object(c.jsx)("li",{className:"info",id:"countryInfo",children:e.info.location.country})]})}):Object(c.jsx)("div",{})};var h=function(){return Object(c.jsxs)("div",{className:"row search",children:["Search by:",Object(c.jsx)("input",{})]})};var b=function(e){return console.log(e),Object(c.jsx)("div",{className:"col col-lg-8 img-cont",children:Object(c.jsx)("img",{width:"100%",src:e.url,alt:"placeholder"})})},O=t(15),v=t.n(O),x=function(e){return v.a.get("https://randomuser.me/api/?results="+e)},p=(t(41),t(42),function(e){Object(d.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(l.a)(this,t);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).state={dir:[],image:"https://via.placeholder.com/150",info:{}},e.loadDir=function(){x(30).then((function(n){e.setState({dir:n.data.results}),e.loadEmployee(n.data.results[0])}))},e.loadEmployee=function(n){e.handleImage(n.picture.large),e.handleInfo(n)},e.handleInfo=function(n){e.setState({info:n})},e.handleImage=function(n){e.setState({image:n})},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.loadDir()}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"container test",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col col-sm-8 order-sm-2 info-cont",id:"display",children:[Object(c.jsxs)("div",{className:"row ",children:[Object(c.jsx)(b,{url:this.state.image}),Object(c.jsx)(f,{info:this.state.info})]}),Object(c.jsx)(h,{})]}),Object(c.jsxs)("div",{className:"col col-sm-4 order-sm-1 dir-cont",id:"directory",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(m,{})}),Object(c.jsx)(u,{dir:this.state.dir,loadEmployee:this.loadEmployee})]})]})})}}]),t}(i.Component)),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),o(e),a(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),g()}},[[43,1,2]]]);
//# sourceMappingURL=main.08f3040f.chunk.js.map