(this.webpackJsonpshifts=this.webpackJsonpshifts||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),c=a.n(s),l=(a(13),a(3)),i=a(4),o=a(7),m=a(6),u=a(5),d=function(e){var t=e.date,a=e.initialDate,s=Object(n.useMemo)((function(){return new Date(t)}),[t]),c=Object(n.useMemo)((function(){var e=s.getDay();if(1!==e){var t=e-1;s.setDate(s.getDate()-t)}return Math.floor((s-new Date(a))/6048e5%5)}),[s,a]),l=Object(n.useMemo)((function(){return u.people[c]}),[c]);return r.a.createElement("div",{className:"container jumbotron clean-turns"},r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",{className:"lead"},"Turno delle pulizie: ")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",{className:"h3"},r.a.createElement("span",{className:"badge badge-secondary clean-turns-badge"},l)))))},h=function(e){var t=e.date,a=Object(n.useMemo)((function(){return new Date(t)}),[t]),s=Object(n.useMemo)((function(){return a.getDay()-1}),[a]),c=Object(n.useMemo)((function(){return u.streetTurns}),[]),l=Object(n.useMemo)((function(){return c.map((function(e){return e.day})).indexOf(s)}),[c,s]),i=Object(n.useMemo)((function(){var e=new Date(a.getFullYear(),a.getMonth(),1).getDay()-1;return-1!==l&&(e>s?7-e+s+1:s-e+1)+7*c[l].week}),[a,s,c,l]);return r.a.createElement("div",{className:"container jumbotron street-turns"},r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",{className:"lead"},"Turno della lavastrada: ")),r.a.createElement("div",{className:"col-md-6"},-1!==l&&i===a.getDate()?r.a.createElement("p",{className:"h3"},r.a.createElement("span",{className:"badge badge-secondary street-turns-badge"},c[l].street)):r.a.createElement("p",{className:"lead"}," - "))))},E=function(e){var t=e.date,a=e.initialDate,s=Object(n.useMemo)((function(){return{turns:u.trash,people:u.people,trashTurns:u.trashTurns}}),[]),c=s.turns,l=s.people,i=s.trashTurns,o=Object(n.useMemo)((function(){return new Date(t)}),[t]),m=Object(n.useMemo)((function(){var e=o.getDay()-1;return-1===e?i.length-1:e}),[o,i]),d=Object(n.useMemo)((function(){return i[m]}),[i,m]),h=Object(n.useMemo)((function(){var e=new Date(o.getFullYear(),o.getMonth()+1,0).getDate(),t=new Date(a);return Math.floor((o-t)/(864e5*e))}),[a,o]);return r.a.createElement("div",{className:"container jumbotron trash-turns"},r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",{className:"lead"},"Turni della spazzatura: ")),r.a.createElement("div",{className:"col-md-6"},o.getDay()-1===5?r.a.createElement("p",{className:"lead"}," - "):i[m].length&&i[m].map((function(e,t){return r.a.createElement("div",{key:t,className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-md-10"},r.a.createElement("p",{className:"h3"},c[e].trash,":",r.a.createElement("span",{className:"mx-2 badge badge-secondary trash"+e+"-badge"},l[Math.floor(c[e].initial+h)%5]))))}))||r.a.createElement("p",{className:"h3"},c[d].trash,":",r.a.createElement("span",{className:"mx-2 badge badge-secondary trash"+d+"-badge"},l[Math.floor(c[d].initial+h)%5])))))},g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);var r=(new Date).toISOString().substr(0,10);return n.state={date:r,curDate:r,cleanInitialDate:"2019-11-11",trashInitialDate:"2019-11-01"},n}return Object(i.a)(a,[{key:"dateChanged",value:function(e){this.setState({date:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App container"},r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"jumbotron col-12 wrapper",align:"center"},r.a.createElement("h1",{className:"display-4"},"Calendario Turni"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",{className:"lead"},"Data: ")),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"date",onChange:this.dateChanged.bind(this),defaultValue:this.state.date,min:this.state.curDate}))))),""===this.state.date?r.a.createElement("div",{className:"jumbotron col-12 wrapper",align:"center"},r.a.createElement("h1",{className:"display-6"},"Nessuna data selezionata")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement(E,{date:this.state.date,initialDate:this.state.trashInitialDate})),r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement(d,{date:this.state.date,initialDate:this.state.cleanInitialDate})),r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement(h,{date:this.state.date}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e){e.exports=JSON.parse('{"people":["Chiara","Francesca C.","Alessio","Francesca S.","Alessandro"],"streetTurns":[{"street":"Via Trentino","day":1,"week":3},{"street":"Via Basilicata","day":0,"week":0},{"street":"Via Istria","day":3,"week":1},{"street":"Via Lombardia","day":4,"week":1}],"trash":[{"trash":"Umido","initial":0},{"trash":"Secco","initial":2},{"trash":"Vetro e lattine","initial":3},{"trash":"Plastica","initial":1},{"trash":"Carta e cartone","initial":4}],"trashTurns":[1,[0,2],4,0,3,0]}')},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b8fb81cc.chunk.js.map