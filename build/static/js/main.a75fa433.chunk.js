(this["webpackJsonppeel-js-challenge"]=this["webpackJsonppeel-js-challenge"]||[]).push([[0],{23:function(e,t,n){e.exports=n(54)},34:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),u=n(4),o=(n(34),n(9)),i=n(10),s=n(5),p=n(12),d=n(11);var m=n(2);var f=Object(m.b)({revenue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":return t.payload;default:return e}}}),b=Object(m.c)(f),h=n(35).default,v=function(e){Object(p.a)(t,e);Object(d.a)(t);function t(){return Object(o.a)(this,t),Object(s.a)(void 0)}return Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;h.get("http://app.peelinsights.com/api/test_stats/").then((function(t){e.props.setPage(t.results.all)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,this.props.revData.map((function(e,t){return r.a.createElement(E,{key:t,data:e})})))))}}]),t}(r.a.Component),E=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.data.ds),r.a.createElement("td",null,this.props.data.y))}}]),n}(r.a.Component),j=Object(u.b)((function(e){return{revData:e.data}}),(function(e){return{type:"SET_PAGE",pageData:e}}))(v);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))};n(53);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:b},r.a.createElement(O,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a75fa433.chunk.js.map