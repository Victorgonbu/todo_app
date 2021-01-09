(()=>{"use strict";var r={740:(r,n,e)=>{e.d(n,{Z:()=>i});var t=e(645),o=e.n(t)()((function(r){return r[1]}));o.push([r.id,"/* http://meyerweb.com/eric/tools/css/reset/ */\r\n/* v1.0 | 20080212 */\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\toutline: 0;\r\n\tfont-size: 100%;\r\n\tvertical-align: baseline;\r\n    background: transparent;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    line-height: 1;\r\n   \r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\n/* remember to define focus styles! */\r\n:focus {\r\n\toutline: 0;\r\n}\r\n\r\n/* remember to highlight inserts somehow! */\r\nins {\r\n\ttext-decoration: none;\r\n}\r\ndel {\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n/* tables still need 'cellspacing=\"0\"' in the markup */\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}",""]);const i=o},122:(r,n,e)=>{e.d(n,{Z:()=>i});var t=e(645),o=e.n(t)()((function(r){return r[1]}));o.push([r.id,"\r\n:root {\r\n  --main-black: #0c0900;\r\n  --main-orange: rgba(3, 105, 238, 0.1);\r\n  --second-orange: rgba(3, 104, 237, 0.2);\r\n  --main-green: #d3fbd8;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n}\r\n\r\nh3 {\r\n  padding: 1em 0;\r\n}\r\n\r\n.main-container {\r\n  background-color: var(--main-orange);\r\n  min-height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n.projects {\r\n  width: 25%;\r\n  padding: 2em;\r\n}\r\n\r\n.projects-title {\r\n  font-size: 1.5em;\r\n}\r\n\r\n.input-field {\r\n  display: flex;\r\n  padding-top: 1em;\r\n}\r\n\r\n.new-project {\r\n  background-color: var(--main-black);\r\n  color: white;\r\n  padding: 4px 7px;\r\n  margin: 0;\r\n  width: 40%;\r\n  transform: translateX(-135%);\r\n  cursor: pointer;\r\n  border-top-right-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.active-btn {\r\n  transform: translateX(0);\r\n  transition: 150ms ease-in;\r\n}\r\n\r\n.new-project-input {\r\n  transform: scaleX(0);\r\n  width: 60%;\r\n  margin: 0;\r\n  border-bottom-left-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  border: 1px solid white;\r\n}\r\n\r\n.active-input {\r\n  transform: scaleX(1);\r\n  transition: 150ms ease-in;\r\n}\r\n\r\n.list {\r\n  padding: 1em 0;\r\n}\r\n\r\n.project-item {\r\n  padding: 3px 0;\r\n  cursor: pointer;\r\n  border-bottom: 2px solid rgba(243, 148, 76, 0);\r\n  width: 50%;\r\n  transition: padding 150ms ease-out;\r\n}\r\n\r\n.project-item:hover {\r\n  border-bottom: 2px solid white;\r\n  padding: 3px 3px;\r\n}\r\n\r\n.display-board {\r\n  width: 100%;\r\n  transform: scaleX(0);\r\n  background-color: white;\r\n  border: 1px solid white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1em;\r\n}\r\n\r\n.active-board {\r\n  border: none;\r\n  transform: scaleX(1);\r\n  transition: 400ms ease-in;\r\n}\r\n\r\n.wrapper-field {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.add-todo-form {\r\n  border-bottom: 2px solid var(--main-orange);\r\n  padding: 0.5em;\r\n  width: 37%;\r\n}\r\n\r\n.input {\r\n  border-radius: 5px;\r\n  border: 1px solid rgb(202, 202, 202);\r\n  padding: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.text-input {\r\n  width: 100%;\r\n}\r\n\r\n.area-input {\r\n  resize: none;\r\n  width: calc(100% - 1em);\r\n}\r\n\r\n.notes-input {\r\n  width: 85%;\r\n}\r\n\r\n.notes-label {\r\n  width: calc(15% - 1.1em);\r\n  display: inline-block;\r\n}\r\n\r\n.submit-field {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100%;\r\n}\r\n\r\n.submit-todo {\r\n  background-color: var(--main-black);\r\n  color: white;\r\n  border: 1px solid white;\r\n  font-weight: 600;\r\n  padding: 5px 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit-todo:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.board {\r\n  margin-top: 1em;\r\n  padding: 1em;\r\n  width: 100%;\r\n}\r\n\r\n.project-title {\r\n  text-transform: capitalize;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.done {\r\n  width: 49%;\r\n  float: right;\r\n  opacity: 0.4;\r\n}\r\n\r\n.undone {\r\n  width: 49%;\r\n  float: left;\r\n}\r\n\r\n.high-priority {\r\n  border: 1px solid red;\r\n}\r\n\r\n.medium-priority {\r\n  border: 1px solid orange;\r\n}\r\n\r\n.low-priority {\r\n  border: 1px solid green;\r\n}\r\n\r\n.todo-card {\r\n  border-radius: 5px;\r\n  margin: 10px 0;\r\n  padding: 0.5em;\r\n  transition: 200ms ease-out;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.todo {\r\n  width: 50%;\r\n  background-color: green;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.priority-High {\r\n  background-color: rgb(235, 0, 0, 0.6);\r\n  padding: 0 7px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.priority-Medium {\r\n  background-color: rgb(243, 148, 76, 1);\r\n  padding: 0 7px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.priority-Low {\r\n  background-color: rgb(145, 238, 143, 0.6);\r\n  padding: 0 7px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.card-field {\r\n  padding: 0.5em 0;\r\n}\r\n\r\n.priority-field {\r\n  position: absolute;\r\n  right: 0.5em;\r\n  top: 1.5em;\r\n  text-align: center;\r\n  width: min-content;\r\n}\r\n\r\n.checklist-field {\r\n  position: absolute;\r\n  right: 0.5em;\r\n  bottom: 0.5em;\r\n}\r\n\r\n.priority-span {\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n.remove-button {\r\n  position: absolute;\r\n  top: 2px;\r\n  right: 2px;\r\n  background-color: white;\r\n  border: none;\r\n  font-size: 1.2em;\r\n  cursor: pointer;\r\n}\r\n\r\n.label {\r\n  vertical-align: text-top;\r\n}\r\n\r\n.checkbox-card {\r\n  vertical-align: bottom;\r\n  margin: 0;\r\n}\r\n\r\n.edit-button {\r\n  position: absolute;\r\n  top: 4px;\r\n  right: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n.edit-input {\r\n  border: 0;\r\n  border-bottom: 1px solid gray;\r\n}\r\n\r\n.save-button {\r\n  position: absolute;\r\n  bottom: 1em;\r\n  right: 1em;\r\n  background-color: black;\r\n  color: white;\r\n  border: white;\r\n  border-radius: 2px;\r\n  padding: 5px 7px;\r\n}\r\n",""]);const i=o},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(o[d]=!0)}for(var a=0;a<r.length;a++){var s=[].concat(r[a]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},379:(r,n,e)=>{var t,o=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),i=[];function d(r){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===r){n=e;break}return n}function a(r,n){for(var e={},t=[],o=0;o<r.length;o++){var a=r[o],s=n.base?a[0]+n.base:a[0],c=e[s]||0,l="".concat(s," ").concat(c);e[s]=c+1;var p=d(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:f(u,n),references:1}),t.push(l)}return t}function s(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var d=o(r.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(n)}return n}var c,l=(c=[],function(r,n){return c[r]=n,c.filter(Boolean).join("\n")});function p(r,n,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),d=r.childNodes;d[n]&&r.removeChild(d[n]),d.length?r.insertBefore(i,d[n]):r.appendChild(i)}}function u(r,n,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var m=null,h=0;function f(r,n){var e,t,o;if(n.singleton){var i=h++;e=m||(m=s(n)),t=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=s(n),t=u.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=a(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var o=d(e[t]);i[o].references--}for(var s=a(r,n),c=0;c<e.length;c++){var l=d(e[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=s}}}}},n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={id:t,exports:{}};return r[t](o,o.exports,e),o.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r=e(379),n=e.n(r),t=e(740);n()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var o=e(122);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const i=(r,n)=>{const e=(r,n,e="")=>{const t=document.createElement(r);return t.classList.add(n),t.textContent=e,t};return{name:r,displayNewProject:()=>{const t=document.createElement("li");return t.classList.add("project-item"),t.textContent=r,(r=>{r.addEventListener("click",(()=>{const t=document.querySelector(".display-board"),o=document.querySelector(".todo-lists");(r=>{for(;r.firstChild;)r.removeChild(r.firstChild)})(o);const i=e("div","done");i.classList.add("todos-container");const d=e("div","undone");d.classList.add("todos-container");const a=e("h3","done-title","Done");i.insertBefore(a,i.firstChild);const s=e("h3","undone-title","To Do");d.insertBefore(s,d.firstChild),o.appendChild(i),o.insertBefore(d,o.firstChild),t.classList.add("active-board");const c=(r=>{const n=document.createElement("h2");return n.classList.add("project-title"),n.textContent=r.textContent,n})(r);o.insertBefore(c,o.firstChild),(r=>{let e;e="All To-Do's"===r.textContent?n():n().filter((n=>n.project===r.textContent)),e&&e.forEach((r=>{r.displayNewTodo()}))})(r)}))})(t),t}}},d=(r,n,e,t,o,i,d,a,s)=>{function c(r){const n=document.querySelectorAll(".todos-container");n[0].contains(r)?n[0].removeChild(r):n[1].removeChild(r)}function l(r,n){const e=document.createElement("p");if(e.classList.add(`${r}-field`),e.classList.add("card-field"),"checklist"===r){if(!0===n.checklist)return e;let r=document.createElement("input");r.classList.add("checkbox-card"),r.setAttribute("type","checkbox"),r=function(r,n){return r.addEventListener("click",(()=>{n.checklist=!0,a(n),c(r.closest(".todo-card")),n.displayNewTodo()})),r}(r,n),e.appendChild(r)}else e.innerHTML=`<span class="${r}-span">${t=r,t.charAt(0).toUpperCase()+t.slice(1)}: </span> <span class='${r}-${n.priority} ${r}-card'> ${n[r]}</span>`;var t;return e}return{title:r,description:n,dueDate:e,priority:t,notes:o,checklist:i,project:d,generateTodoTags:function(){const r=[];return["title","description","dueDate","priority","notes","checklist"].forEach((n=>{r.push(l(n,this))})),r},displayNewTodo:function(){let r=document.createElement("div");r=function(r,n){switch(r.priority){case"High":n.classList.add("high-priority");break;case"Medium":n.classList.add("medium-priority");break;default:n.classList.add("low-priority")}return n}(this,r);const n=document.createElement("button");n.classList.add("remove-button"),n.innerHTML="<span>&times;</span>";const e=document.createElement("span");e.innerHTML="<i class='fas fa-edit edit-button'></i>",n.addEventListener("click",(()=>{c(n.closest(".todo-card")),s(this)})),r.appendChild(n),e.addEventListener("click",(()=>{const r=e.closest(".todo-card");let n=[];n=function(r){const n=[];return["title","description","dueDate","notes"].forEach((e=>{const t=r.querySelector(`.${e}-card`);n.push(t)})),n}(r),n.forEach((r=>{const e=r.textContent,t=r.classList;r===n[2]?r.innerHTML=`<input type='date' value='${e}' class='edit-input ${t[1]}-edit'>`:r.innerHTML=`<input type='text' value='${e}' class='edit-input ${t[1]}-edit'>`})),r.removeChild(r.lastChild);const t=document.createElement("button");t.classList.add("save-button"),t.innerHTML="<span>Save</span>",t.addEventListener("click",(()=>{const e=r.querySelector(".title-card-edit").value,t=r.querySelector(".description-card-edit").value,o=r.querySelector(".dueDate-card-edit").value,i=r.querySelector(".notes-card-edit").value;this.title=e,this.description=t,this.dueDate=o,this.notes=i,a(this),r.removeChild(r.lastChild);const d=l("checklist",this);d.classList.add("checkbox-card"),r.appendChild(d),n[0].textContent=this.title,n[1].textContent=this.description,n[2].textContent=this.dueDate,n[3].textContent=this.notes})),r.appendChild(t)})),r.appendChild(e),r.classList.add("todo-card"),this.generateTodoTags().forEach((n=>{r.appendChild(n)})),function(r,n){const e=document.querySelector(".undone"),t=document.querySelector(".done");!1===r.checklist?e.appendChild(n):t.appendChild(n)}(this,r)}}},a=(()=>{let r,n;const e=()=>(r=JSON.parse(localStorage.getItem("projectarr")),r=r?r.map((r=>i(r.name,a.getTodoListArr))):[],r),t=r=>{const e=n.indexOf(r);n[e]=r,localStorage.setItem("todolistarr",JSON.stringify(n))},o=r=>{const e=n.indexOf(r);n.splice(e,1),localStorage.setItem("todolistarr",JSON.stringify(n))};return{getProjectArr:e,getTodoListArr:()=>(n=JSON.parse(localStorage.getItem("todolistarr")),n=n?n.map((r=>d(r.title,r.description,r.dueDate,r.priority,r.notes,r.checklist,r.project,t,o))):[],n),addProject:n=>{r.push(n),localStorage.setItem("projectarr",JSON.stringify(r))},addTodo:r=>{n.push(r),localStorage.setItem("todolistarr",JSON.stringify(n))},savedProjects:()=>{const r=document.querySelector(".list");e().length>0&&e().forEach((n=>{r.appendChild(n.displayNewProject())}))},updateTodo:t,deleteTodo:o}})(),s=a,c=document.querySelector(".new-project"),l=document.querySelector(".new-project-input"),p=document.querySelector(".projects"),u=document.querySelectorAll(".submit-todo"),m=document.querySelector(".list");c.addEventListener("click",(()=>{if(c.classList.toggle("active-btn"),l.classList.toggle("active-input"),"Add Project"===c.textContent?c.textContent="New Project":c.textContent="Add Project",l.value){const r=i(l.value,s.getTodoListArr),n=r.displayNewProject();s.addProject(r),m.appendChild(n),p.querySelector("form").reset()}})),u.forEach((r=>{r.addEventListener("click",(()=>{const r=document.getElementById("title").value,n=document.getElementById("description").value,e=document.getElementById("due-date").value,t=document.getElementById("check").checked,o=document.getElementById("notes").value,i=document.getElementById("priority").value,a=document.querySelector(".project-title").textContent,c=document.querySelector(".add-todo-form"),l=d(r,n,e,i,o,t,a,s.updateTodo,s.deleteTodo);l.displayNewTodo(),s.addTodo(l),c.reset()}))})),s.savedProjects();const h=i("All To-Do's",s.getTodoListArr).displayNewProject();setTimeout(h.click(),500),m.insertBefore(h,m.firstChild)})()})();