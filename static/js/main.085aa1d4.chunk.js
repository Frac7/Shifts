(this.webpackJsonpshifts=this.webpackJsonpshifts||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),c=a.n(s),l=(a(13),a(3)),i=a(4),o=a(7),m=a(6),u=a(5),d=function(e){var t=e.date,a=Object(n.useMemo)((function(){return new Date(t)}),[t]),s=Object(n.useMemo)((function(){var e=a.getDay();if(1!==e){var t=e-1;a.setDate(a.getDate()-t)}return Math.floor((a-new Date("2020-10-04"))/6048e5%5)}),[a]),c=Object(n.useMemo)((function(){return u.people[s]}),[s]);return r.a.createElement("div",{className:"container jumbotron clean-turns"},r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",{className:"lead"},"Turno delle pulizie: ")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",{className:"h3"},r.a.createElement("span",{className:"badge badge-secondary clean-turns-badge"},c)))))},h=function(e){var t=e.date,a=Object(n.useMemo)((function(){return new Date(t)}),[t]),s=Object(n.useMemo)((function(){return a.getDay()-1}),[a]),c=Object(n.useMemo)((function(){return u.streetTurns}),[]),l=Object(n.useMemo)((function(){return c.map((function(e){return e.day})).indexOf(s)}),[c,s]),i=Object(n.useMemo)((function(){var e=new Date(a.getFullYear(),a.getMonth(),1).getDay()-1;return-1!==l&&(e>s?7-e+s+1:s-e+1)+7*c[l].week}),[a,s,c,l]);return r.a.createElement("div",{className:"container jumbotron street-turns"},r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",{className:"lead"},"Turno della lavastrada: ")),r.a.createElement("div",{className:"col-md-6"},-1!==l&&i===a.getDate()?r.a.createElement("p",{className:"h3"},r.a.createElement("span",{className:"badge badge-secondary street-turns-badge"},c[l].street)):r.a.createElement("p",{className:"lead"}," - "))))},p=function(e){var t=e.date,a=Object(n.useMemo)((function(){return{turns:u.trash,people:u.people,trashTurns:u.trashTurns}}),[]),s=a.turns,c=a.people,l=a.trashTurns,i=Object(n.useMemo)((function(){return new Date(t)}),[t]),o=Object(n.useMemo)((function(){var e=i.getDay()-1;return-1===e?l.length-1:e}),[i,l]),m=Object(n.useMemo)((function(){return l[o]}),[l,o]),d=Object(n.useMemo)((function(){var e=new Date(i.getFullYear(),i.getMonth()+1,0).getDate(),t=new Date("2020-10-01");return Math.floor((i-t)/(864e5*e))}),[i]);return r.a.createElement("div",{className:"container jumbotron trash-turns"},r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",{className:"lead"},"Turni della spazzatura: ")),r.a.createElement("div",{className:"col-md-6"},i.getDay()-1===5?r.a.createElement("p",{className:"lead"}," - "):l[o].length&&l[o].map((function(e,t){return r.a.createElement("div",{key:t,className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-md-10"},r.a.createElement("p",{className:"h3"},s[e].trash,":",r.a.createElement("span",{className:"mx-2 badge badge-secondary trash"+e+"-badge"},c[Math.floor(s[e].initial+d)%5]))))}))||r.a.createElement("p",{className:"h3"},s[m].trash,":",r.a.createElement("span",{className:"mx-2 badge badge-secondary trash"+m+"-badge"},c[Math.floor(s[m].initial+d)%5])))))},E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);var r=(new Date).toISOString().substr(0,10);return n.state={date:r,curDate:r},n}return Object(i.a)(a,[{key:"dateChanged",value:function(e){this.setState({date:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App container"},r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"jumbotron col-12 wrapper",align:"center"},r.a.createElement("h1",{className:"display-4"},"Calendario Turni"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",{className:"lead"},"Data: ")),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"date",onChange:this.dateChanged.bind(this),defaultValue:this.state.date,min:this.state.curDate}))))),""===this.state.date?r.a.createElement("div",{className:"jumbotron col-12 wrapper",align:"center"},r.a.createElement("h1",{className:"display-6"},"Nessuna data selezionata")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement(p,{date:this.state.date})),r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement(d,{date:this.state.date})),r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement(h,{date:this.state.date}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e){e.exports=JSON.parse('{"people":["Alessandro","Francesca S.","Giuseppe","Francesca C.","Chiara"],"streetTurns":[{"street":"Via Trentino","day":1,"week":3},{"street":"Via Basilicata","day":0,"week":0},{"street":"Via Istria","day":3,"week":1},{"street":"Via Lombardia","day":4,"week":1}],"trash":[{"trash":"Umido","initial":2},{"trash":"Secco","initial":3},{"trash":"Vetro e lattine","initial":4},{"trash":"Plastica","initial":0},{"trash":"Carta e cartone","initial":1}],"trashTurns":[1,[0,2],4,0,3,0]}')},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.085aa1d4.chunk.js.map