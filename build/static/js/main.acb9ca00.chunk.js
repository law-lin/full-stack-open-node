(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=(t(19),t(2)),l=t(3),i=t.n(l),s="/api/people",m=function(){return i.a.get(s)},d=function(e){return i.a.post(s,e)},f=function(e,n){return i.a.put("".concat(s,"/").concat(e),n)},h=function(e){return i.a.delete("".concat(s,"/").concat(e))};var b=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"filter shown with"),r.a.createElement("input",{type:"text",onChange:e.onChange}))};var p=function(e){return r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:e.onNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:e.onNumberChange})),r.a.createElement("div",null,r.a.createElement("button",null,"add")))};var v=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,e.persons.map((function(n){if(n.name.toLowerCase().includes(e.filter))return r.a.createElement("li",{key:n.name},n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return t=n.id,a=n.name,void(window.confirm("Delete ".concat(a,"?"))&&h(t).then((function(n){return e.setMessage("".concat(a," successfully removed!"))})).catch((function(n){return e.setMessage("Information of ".concat(a," has already been removed from server"))})));var t,a}},"delete"))}))))},E=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),i=l[0],s=l[1],h=Object(a.useState)(""),E=Object(u.a)(h,2),g=E[0],w=E[1],C=Object(a.useState)(""),j=Object(u.a)(C,2),O=j[0],k=j[1],y=Object(a.useState)(null),S=Object(u.a)(y,2),N=S[0],L=S[1];Object(a.useEffect)((function(){m().then((function(e){o(e.data)}))}),[]);var M=function(e){var n=e.message;return null===n?null:n.toLowerCase().includes("success")||n.toLowerCase().includes("added")?r.a.createElement("div",{className:"success"},n):n.toLowerCase().includes("fail")||n.toLowerCase().includes("has already")?r.a.createElement("div",{className:"error"},n):null};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(M,{message:N}),r.a.createElement(b,{onChange:function(e){return k(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(p,{onSubmit:function(e){e.preventDefault();var n={name:i,number:g},a=null;t.find((function(e){return a=e,e.name===i}))?window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))&&f(a.id,n).then((function(e){L("".concat(i,"'s number updated successfully!"))})).catch((function(e){return L("".concat(i,"'s number failed to update"))})):d(n).then((function(e){o(t.concat({name:i,number:g})),L("Added ".concat(i)),setTimeout((function(){L(null)}),5e3)})).catch((function(e){console.log(e.response.data),L(e.response.data.error)}))},onNameChange:function(e){return s(e.target.value)},onNumberChange:function(e){return w(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(v,{persons:t,filter:O,setMessage:function(e){return L(e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.acb9ca00.chunk.js.map