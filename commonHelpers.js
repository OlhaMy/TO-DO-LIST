(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const p={time:document.querySelector(".time")};function g(){const t=new Date,e=t.getDate().toString().padStart(2,"0"),s=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],o=t.getFullYear(),n=t.getHours().toString().padStart(2,"0"),c=t.getMinutes().toString().padStart(2,"0"),m=t.getSeconds().toString().padStart(2,"0");return`${e} ${s} ${o}, ${n}:${c}:${m}`}function d(){p.time.textContent=g()}setInterval(d,1e3);d();const y=Date;function u(t,e){const r=JSON.stringify(e);localStorage.setItem(t,r)}function l(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return null}}const i={form:document.querySelector(".js-form"),todoList:document.querySelector(".todos-list"),select:document.querySelector(".todos-select")};let a=l("todos")||[];i.form.addEventListener("submit",t=>{t.preventDefault();const e=t.currentTarget.elements.todos.value.trim(),r=t.currentTarget.elements.select.value;if(!e||!r){alert("Please enter both a task and a priority");return}const s={id:y.now(),text:e,priority:r};a.push(s),u("todos",a),i.todoList.insertAdjacentHTML("beforeend",f(s)),t.currentTarget.reset()});document.addEventListener("DOMContentLoaded",()=>{const t=l("todos");t&&(a=t,i.todoList.innerHTML=a.map(f).join(""))});i.todoList.addEventListener("click",t=>{if(t.target.nodeName!=="BUTTON")return;const e=Number(t.target.dataset.id);t.target.id==="delete"&&(a=a.filter(r=>r.id!==e),u("todos",a),t.target.closest(".todos-item").remove())});function b(t){switch(t){case"high":return"#F08080";case"medium":return"#FFFACD";case"low":return"#D3D3D3";default:return"#fff"}}function f({text:t,priority:e,id:r}){return`
    <li class="todos-item" style="background-color: ${b(e)}">
      <span class="todos-text">${t}</span>
      <span class="todos-info">${e}</span>
      <div class="btn-wrapper">
        <button id="edit" class="edit" data-id="${r}" type="button">&#9998;</button>
        <button id="done" class="done" data-id="${r}" type="button">&#10003;</button>
        <button id="delete" class="delete" data-id="${r}" type="button">&#10007;</button>
      </div>
    </li>`}
//# sourceMappingURL=commonHelpers.js.map
