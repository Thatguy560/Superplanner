(this["webpackJsonpsuper-planner"]=this["webpackJsonpsuper-planner"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),i=n.n(r),o=(n(15),n(3)),u=n(2),d=n(10),s=n(0);function l(){var e=Object(c.useState)(new Date),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){var e;return e=setInterval((function(){a(new Date)}),1e3),function(){return clearInterval(e)}}));return Object(s.jsxs)("div",{id:"dateInfo",children:[Object(s.jsx)("p",{id:"monthYear",children:"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]," ").concat(n.getFullYear())}),Object(s.jsx)("p",{id:"todaysDate",children:"".concat(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].slice(n.getDay()-1)[0],", ").concat(function(e){var t=["th","st","nd","rd"],n=e%100;return e+(t[(n-20)%10]||t[n]||t[0])}(n.getDate()))}),Object(s.jsx)("p",{id:"currentTime",children:function(e){var t=e.getHours(),n=e.getMinutes(),c=t>=12?"PM":"AM";return(t=t%12===0?12:t)+":"+(n=n<10?"0"+n:n)+c}(n)})]})}var j=n(8),b=n.n(j),h=n(9),m="35b3cb0c406aa148e36dbe8f8ad4e352",p="https://api.openweathermap.org/data/2.5/";function f(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),o=i[0],d=i[1],l=Object(c.useState)({}),j=Object(u.a)(l,2),f=j[0],O=j[1];return Object(c.useEffect)((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){a(e.coords.latitude),d(e.coords.longitude)})),e.next=3,fetch("".concat(p,"/weather/?lat=").concat(n,"&lon=").concat(o,"&units=metric&APPID=").concat(m)).then((function(e){return e.json()})).then((function(e){O(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n,o]),Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"undefined"!=typeof f.main?f.main.temp>15&&f.main.temp<30&&"Clouds"===f.weather[0].main?"weather warmcloudy":f.main.temp>15&&f.main.temp<30&&"Clear"===f.weather[0].main?"weather warm":f.main.temp<1&&"Rain"!==f.weather[0].main?"weather ice":"Thunderstorm"===f.weather[0].main?"weather lightning":"Snow"===f.weather[0].main?"weather snow":f.main.temp>=30&&"Rain"!==f.weather[0].main?"weather hot":f.main.temp<6&&"Clear"===f.weather[0].main?"weather coldclear":"Rain"===f.weather[0].main?"weather raining":"weather clear":"weather",children:"undefined"!=typeof f.main?Object(s.jsx)("div",{className:"weather-box",children:Object(s.jsxs)("div",{id:"location",children:[f.name,", ",f.sys.country,Object(s.jsxs)("div",{id:"temp",children:[Math.round(f.main.temp),"\xb0c"]}),Object(s.jsx)("div",{id:"weather",children:f.weather[0].main})]})}):Object(s.jsx)("div",{})})})}n(18),n(19),n(20);var O=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),j=Object(u.a)(i,2),b=j[0],h=j[1],m=Object(c.useState)(""),p=Object(u.a)(m,2),O=p[0],x=p[1],v=Object(c.useState)(""),w=Object(u.a)(v,2),g=w[0],y=w[1];return a.a.useEffect((function(){var e=localStorage.getItem("todoList"),t=JSON.parse(e);t.length&&h(t)}),[]),a.a.useEffect((function(){var e=JSON.stringify(b);localStorage.setItem("todoList",e)}),[b]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:(new Date).getTime(),text:n,completed:!1};""!==t.text&&(h([].concat(Object(o.a)(b),[t])),r(""))},children:[Object(s.jsxs)("div",{className:"box",children:[Object(s.jsx)(l,{}),Object(s.jsx)(f,{})]}),Object(s.jsx)("input",{id:"Input",placeholder:"Enter Todo...",onChange:function(e){return r(e.target.value)},value:n}),Object(s.jsx)("button",{id:"Add",type:"submit",children:"Add"})]}),Object(s.jsx)("button",{id:"seeCompleted",onClick:function(){var e=Object(o.a)(b).filter((function(e){return!0!==e.completed}));h(e)},children:"Remove Completed Todos \u2714"}),Object(s.jsx)(d.a,{enterAnimation:"accordionVertical",leaveAnimation:"accordionVertical",children:b.map((function(e,t){return Object(s.jsx)("ol",{children:Object(s.jsxs)("p",{id:"list",style:{textDecoration:!0===e.completed?"line-through":""},children:[Object(s.jsx)("input",{type:"checkbox",onClick:function(){return function(e){var t=Object(o.a)(b);t[e].completed=!t[e].completed,h(t)}(t)}}),g===e.id?Object(s.jsx)("input",{type:"text",placeholder:e.text[0].toUpperCase()+e.text.slice(1),onChange:function(e){return x(e.target.value)},value:O}):"".concat(t+1,". ").concat(e.text[0].toUpperCase()).concat(e.text.slice(1)),g===e.id?Object(s.jsx)("button",{id:"SubmitEdit",onClick:function(){return function(e){var t=Object(o.a)(b).map((function(t){return t.id===e&&""!==O&&(t.text=O),t}));h(t),y(""),x("")}(e.id)},children:"Submit Edit \u270e"}):Object(s.jsx)("button",{id:"Edit",onClick:function(){return y(e.id)},children:"Edit \u270e"}),Object(s.jsx)("button",{id:"Delete",onClick:function(){return function(e){var t=Object(o.a)(b);t.splice(e,1),h(t)}(t)},children:"Delete \u2715"})]})},e.id)}))})]})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9293f433.chunk.js.map