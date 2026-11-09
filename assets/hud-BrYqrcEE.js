import{t as s}from"./index-CR3B90ir.js";import{J as Q,j as W}from"./movement-C9TTJP4a.js";const X="fs-world-hud-css";function Z(){if(typeof document>"u"||document.getElementById(X))return;const u=document.createElement("style");u.id=X,u.textContent=`
.fs-hud{position:absolute;inset:0;pointer-events:none;font-family:var(--font-text,'Source Sans 3','Segoe UI',system-ui,sans-serif);color:var(--ink,#1a1c28);z-index:2;user-select:none;-webkit-user-select:none}
.fs-hud__prompt{position:absolute;left:50%;bottom:clamp(76px,16%,120px);transform:translateX(-50%);background:var(--surface,#fbf8f0);color:var(--ink,#1a1c28);border:1.5px solid var(--rule-strong,#1a1c28);border-radius:4px;padding:.4rem .8rem;font-size:.95rem;font-weight:600;box-shadow:2px 2px 0 0 var(--rule-strong,#1a1c28);white-space:nowrap;max-width:calc(100% - 32px);overflow:hidden;text-overflow:ellipsis;opacity:0;transition:opacity 160ms}
.fs-hud__prompt.is-on{opacity:1}
.fs-hud__prompt.is-locked{border-color:var(--rouge,#b0232c);color:var(--rouge,#b0232c);box-shadow:2px 2px 0 0 var(--rouge,#b0232c)}
.fs-hud__key{display:inline-block;min-width:1.4em;padding:0 .3em;margin-right:.45em;border:1px solid currentColor;border-radius:3px;font-family:var(--font-mono,ui-monospace,monospace);font-size:.8em;line-height:1.5;text-align:center}
.fs-hud__room{position:absolute;top:12px;right:12px;background:var(--bleu,#1d2e6e);color:var(--bleu-ink,#fbf8f0);font-family:var(--font-display,'Playfair Display',Georgia,serif);font-weight:800;font-size:.9rem;letter-spacing:.04em;padding:.3rem .7rem;border-radius:3px;opacity:0;transition:opacity 300ms}
.fs-hud__room.is-on{opacity:1}
.fs-hud__hint{position:absolute;top:12px;left:12px;background:color-mix(in srgb,var(--surface,#fbf8f0) 88%,transparent);color:var(--ink-soft,#4b4d5c);border:1px solid var(--rule,#cfc5ae);border-radius:4px;padding:.35rem .6rem;font-size:.78rem;line-height:1.4;max-width:min(52%,22rem);opacity:0;transition:opacity 400ms}
.fs-hud__hint.is-on{opacity:1}
.fs-hud__joy{position:absolute;left:18px;bottom:18px;width:124px;height:124px;border-radius:50%;background:color-mix(in srgb,var(--ink,#1a1c28) 14%,transparent);border:2px solid color-mix(in srgb,var(--ink,#1a1c28) 40%,transparent);pointer-events:auto;touch-action:none;display:none}
.fs-hud__joy::after{content:'';position:absolute;left:50%;top:50%;width:52px;height:52px;margin:-26px 0 0 -26px;border-radius:50%;background:var(--surface,#fbf8f0);border:2px solid var(--rule-strong,#1a1c28);transform:translate(var(--jx,0px),var(--jy,0px));box-shadow:0 2px 6px rgba(0,0,0,.3)}
.fs-hud__btn{position:absolute;right:18px;bottom:28px;width:84px;height:84px;border-radius:50%;background:var(--bleu,#1d2e6e);color:var(--bleu-ink,#fbf8f0);border:2px solid var(--bleu-ink,#fbf8f0);font:700 .85rem/1.1 var(--font-text,sans-serif);text-transform:uppercase;letter-spacing:.06em;pointer-events:auto;touch-action:manipulation;display:none;box-shadow:0 3px 10px rgba(0,0,0,.35);cursor:pointer}
.fs-hud__btn:active{transform:scale(.95)}
.fs-hud__jump{position:absolute;right:116px;bottom:28px;width:84px;height:84px;border-radius:50%;background:var(--surface,#fbf8f0);color:var(--bleu,#1d2e6e);border:2px solid var(--bleu,#1d2e6e);font:700 .8rem/1.1 var(--font-text,sans-serif);text-transform:uppercase;letter-spacing:.05em;pointer-events:auto;touch-action:manipulation;display:none;box-shadow:0 3px 10px rgba(0,0,0,.35);cursor:pointer}
.fs-hud__jump:active{transform:scale(.95)}
.fs-hud__jump:focus-visible{outline:3px solid var(--or,#c9a227);outline-offset:2px}
.fs-hud__stand{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);display:none;background:var(--surface,#fbf8f0);color:var(--ink,#1a1c28);border:1.5px solid var(--rule-strong,#1a1c28);border-radius:4px;padding:.45rem .9rem;font:700 .9rem var(--font-text,sans-serif);pointer-events:auto;cursor:pointer;box-shadow:2px 2px 0 0 var(--rule-strong,#1a1c28);touch-action:manipulation}
.fs-hud__stand.is-on{display:block}
.fs-hud__stand:focus-visible{outline:3px solid var(--or,#c9a227);outline-offset:2px}
.fs-hud.is-paused .fs-hud__stand{display:none}
.fs-hud.is-touch .fs-hud__jump{display:block}
.fs-hud.is-paused .fs-hud__jump,.fs-hud.no-jump .fs-hud__jump{display:none}
.fs-hud__btn[disabled]{opacity:.45}
.fs-hud.is-touch .fs-hud__joy,.fs-hud.is-touch .fs-hud__btn{display:block}
.fs-hud.is-paused .fs-hud__joy,.fs-hud.is-paused .fs-hud__btn,.fs-hud.is-paused .fs-hud__prompt{display:none}
.fs-hud__flash{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none}
.fs-hud__flash.is-on{animation:fs-hud-flash 220ms ease-out}
@keyframes fs-hud-flash{0%{opacity:.75}100%{opacity:0}}
.fs-hud__reticle{position:absolute;left:50%;top:50%;width:14px;height:14px;margin:-7px 0 0 -7px;display:none}
.fs-hud__reticle::before,.fs-hud__reticle::after{content:'';position:absolute;background:#fff;box-shadow:0 0 2px rgba(0,0,0,.8)}
.fs-hud__reticle::before{left:6px;top:0;width:2px;height:14px}
.fs-hud__reticle::after{left:0;top:6px;width:14px;height:2px}
.fs-hud__reticle.is-on{display:block}
.fs-hud__reticle.is-active::before,.fs-hud__reticle.is-active::after{background:var(--or,#c9a227)}
.fs-hud__reticle.is-active{transform:scale(1.35)}
.fs-hud__view{position:absolute;right:12px;top:50px;background:var(--surface,#fbf8f0);color:var(--ink,#1a1c28);border:1.5px solid var(--rule-strong,#1a1c28);border-radius:4px;padding:.25rem .55rem;font:600 .78rem var(--font-text,sans-serif);pointer-events:auto;cursor:pointer;box-shadow:2px 2px 0 0 var(--rule-strong,#1a1c28)}
.fs-hud__view:focus-visible{outline:2px solid var(--or,#c9a227);outline-offset:2px}
.fs-hud__full{position:absolute;right:12px;top:88px;background:var(--surface,#fbf8f0);color:var(--ink,#1a1c28);border:1.5px solid var(--rule-strong,#1a1c28);border-radius:4px;padding:.25rem .55rem;font:600 .78rem var(--font-text,sans-serif);pointer-events:auto;cursor:pointer;box-shadow:2px 2px 0 0 var(--rule-strong,#1a1c28)}
.fs-hud__full[hidden]{display:none}
.fs-hud.is-touch .fs-hud__view,.fs-hud.is-touch .fs-hud__full{padding:.45rem .7rem;font-size:.85rem}
.fs-hud.is-touch .fs-hud__full{top:96px}
.fs-hud.is-touch .fs-hud__hint{max-width:min(58%,16rem);font-size:.72rem}
.fs-hud.is-touch .fs-hud__prompt{bottom:auto;top:12px;left:50%;max-width:calc(100% - 200px);font-size:.85rem;white-space:normal;text-align:center}
@media (max-height:480px){.fs-hud__joy{width:104px;height:104px;left:12px;bottom:12px}.fs-hud__btn{width:72px;height:72px;right:12px;bottom:16px}.fs-hud__jump{width:72px;height:72px;right:96px;bottom:16px}}
.fs-hud.is-paused .fs-hud__full,.fs-hud.is-paused .fs-hud__view,.fs-hud.is-paused .fs-hud__reticle{display:none}
.fs-hud__fade{position:absolute;inset:0;background:#000;color:#e8e8e8;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.8rem;text-align:center;opacity:0;pointer-events:none;transition:opacity 650ms ease-in-out;z-index:5}
.fs-hud__fade.is-on{opacity:1;pointer-events:auto;cursor:pointer}
.fs-hud__fade.is-calm{transition:none}
.fs-hud__fade-msg{font:800 clamp(1.1rem,3.4vw,1.8rem) var(--font-display,Georgia,serif);letter-spacing:.06em;text-transform:uppercase}
.fs-hud__fade-skip{font:600 .78rem var(--font-text,sans-serif);color:#8f9296}
.fs-world-canvas{display:block;width:100%;height:100%;touch-action:none;outline:none;cursor:grab}
.fs-world-canvas.is-dragging{cursor:grabbing}
.fs-world-canvas.is-hover{cursor:pointer}
`,document.head.appendChild(u)}function ee(){return typeof matchMedia=="function"&&(matchMedia("(pointer: coarse)").matches||!matchMedia("(hover: hover)").matches)}function se(u,Y,T,P,D){Z();const t=document.createElement("div");t.className="fs-hud",ee()&&t.classList.add("is-touch"),t.innerHTML=s(`
    <div class="fs-hud__flash"></div>
    <div class="fs-hud__hint" role="note"></div>
    <div class="fs-hud__room" aria-live="polite"></div>
    <div class="fs-hud__reticle" aria-hidden="true"></div>
    <button type="button" class="fs-hud__view" title="Changer de vue (touche V)">Vue : 3ᵉ pers.</button>
    <button type="button" class="fs-hud__full" hidden>⛶ Plein écran</button>
    <div class="fs-hud__prompt" aria-live="polite"></div>
    <div class="fs-hud__joy" aria-label="Joystick de déplacement"></div>
    <button type="button" class="fs-hud__btn" aria-label="Interagir">Interagir</button>`),u.appendChild(t);let I,q=!1;const l=t.querySelector(".fs-hud__prompt"),_=t.querySelector(".fs-hud__room"),x=t.querySelector(".fs-hud__hint"),n=t.querySelector(".fs-hud__joy"),d=t.querySelector(".fs-hud__btn"),f=t.querySelector(".fs-hud__flash"),F=t.querySelector(".fs-hud__reticle"),c=t.querySelector(".fs-hud__view"),M=e=>{e.preventDefault(),e.stopPropagation(),T?.()};c.addEventListener("click",M);const h=t.querySelector(".fs-hud__full"),b=document,v=document.documentElement,G=!!(document.fullscreenEnabled||b.webkitFullscreenEnabled),V=()=>!!(document.fullscreenElement||b.webkitFullscreenElement),O=typeof matchMedia=="function"&&matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches;h.hidden=!G||O;const g=()=>{h.textContent=V()?s("✕ Quitter le plein écran"):s("⛶ Plein écran")},z=e=>{e.preventDefault(),e.stopPropagation();try{V()?document.exitFullscreen?document.exitFullscreen().catch(()=>{}):b.webkitExitFullscreen?.():v.requestFullscreen?v.requestFullscreen({navigationUI:"hide"}).catch(()=>{}):v.webkitRequestFullscreen?.()}catch{}};h.addEventListener("click",z),document.addEventListener("fullscreenchange",g),g(),T||c.remove();const K=t.classList.contains("is-touch"),i={x:0,y:0,active:!1,run:!1};let B=-1e9,y=!1,m=null;const A=e=>{if(e.pointerId!==m)return;const o=n.getBoundingClientRect(),E=e.clientX-(o.left+o.width/2),j=e.clientY-(o.top+o.height/2),S=o.width/2-10,p=Math.hypot(E,j)||1,C=Math.min(1,p/S),U=W(C);i.x=E/p*U,i.y=-(j/p)*U,i.run=y,n.style.setProperty("--jx",`${E/p*C*S}px`),n.style.setProperty("--jy",`${j/p*C*S}px`)},H=e=>{e.pointerId===m&&(m=null,i.active=!1,i.run=!1,y=!1,i.x=i.y=0,n.style.setProperty("--jx","0px"),n.style.setProperty("--jy","0px"))};n.addEventListener("pointerdown",e=>{m=e.pointerId,y=e.timeStamp-B<Q,B=e.timeStamp,i.active=!0,n.setPointerCapture(e.pointerId),A(e),e.preventDefault()}),n.addEventListener("pointermove",A),n.addEventListener("pointerup",H),n.addEventListener("pointercancel",H);const J=e=>{e.preventDefault(),Y()};d.addEventListener("pointerdown",J);const a=document.createElement("button");a.type="button",a.className="fs-hud__jump",a.textContent=s("Sauter"),a.setAttribute("aria-label",s("Sauter")),t.appendChild(a);const R=e=>{e.preventDefault(),e.stopPropagation(),P?.()};a.addEventListener("pointerdown",R),P||a.remove();const r=document.createElement("button");r.type="button",r.className="fs-hud__stand",r.setAttribute("aria-label",s("Se lever")),t.appendChild(r),r.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation(),D?.()}),r.addEventListener("click",e=>{e.detail===0&&D?.()});let N=null,$=null,w=0,k=0,L=0;return{root:t,joystick:i,setPrompt(e,o=!1){if(!(e===I&&o===q)){if(I=e,q=o,!e){l.classList.remove("is-on"),d.disabled=!0;return}l.innerHTML=K?"":'<span class="fs-hud__key">E</span>',l.appendChild(document.createTextNode(e)),l.classList.toggle("is-locked",o),l.classList.add("is-on"),d.disabled=!1}},setActionLabel(e){e!==$&&($=e,d.textContent=e??s("Interagir"),d.setAttribute("aria-label",e??s("Interagir")))},setStandVisible(e,o){e===r.classList.contains("is-on")&&o===N||(N=o,r.classList.toggle("is-on",e),r.textContent=o?`${s("Se lever")} (${o})`:s("Se lever"))},setRoom(e){_.textContent=e,_.classList.add("is-on"),clearTimeout(w),w=window.setTimeout(()=>_.classList.remove("is-on"),2600)},setPaused(e){t.classList.toggle("is-paused",e)},showHint(e,o){x.textContent=e,x.classList.add("is-on"),clearTimeout(k),k=window.setTimeout(()=>x.classList.remove("is-on"),o)},flash(){f.classList.remove("is-on"),f.offsetWidth,f.classList.add("is-on"),clearTimeout(L),L=window.setTimeout(()=>f.classList.remove("is-on"),260)},setReticle(e,o=!1){F.classList.toggle("is-on",e),F.classList.toggle("is-active",e&&o)},setJumpVisible(e){t.classList.toggle("no-jump",!e)},setViewLabel(e){c.textContent=e==="fp"?s("Vue : 1ʳᵉ pers."):s("Vue : 3ᵉ pers."),c.setAttribute("aria-label",e==="fp"?s("Vue à la première personne (V pour changer)"):s("Vue à la troisième personne (V pour changer)"))},dispose(){c.removeEventListener("click",M),h.removeEventListener("click",z),document.removeEventListener("fullscreenchange",g),clearTimeout(w),clearTimeout(k),clearTimeout(L),d.removeEventListener("pointerdown",J),a.removeEventListener("pointerdown",R),t.remove()}}}export{se as c,ee as i};
