(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2306],{2306:function(e,n,t){"use strict";t.r(n),t.d(n,{UserDropdown:function(){return x}});var o=t(85893),r=t(70449),a=t(56469),i=t(93967),l=t.n(i),s=t(4480),c=t(67294),u=t(46977),d=t(5152),f=t.n(d),p=t(4511),h=t(28049),v=t(29223),b=t.n(v),y=t(69583);let m=f()(()=>Promise.all([t.e(3247),t.e(9036)]).then(t.t.bind(t,9036,23)),{loadableGenerated:{webpack:()=>[9036]},ssr:!1}),k=f()(()=>Promise.all([t.e(3247),t.e(3181)]).then(t.t.bind(t,93181,23)),{loadableGenerated:{webpack:()=>[93181]},ssr:!1}),g=f()(()=>Promise.all([t.e(3247),t.e(9712)]).then(t.t.bind(t,49712,23)),{loadableGenerated:{webpack:()=>[49712]},ssr:!1}),w=f()(()=>Promise.all([t.e(3247),t.e(795)]).then(t.t.bind(t,30795,23)),{loadableGenerated:{webpack:()=>[30795]},ssr:!1}),E=f()(()=>Promise.all([t.e(3247),t.e(3632)]).then(t.t.bind(t,43632,23)),{loadableGenerated:{webpack:()=>[43632]},ssr:!1}),C=f()(()=>Promise.all([t.e(3247),t.e(604)]).then(t.t.bind(t,50604,23)),{loadableGenerated:{webpack:()=>[50604]},ssr:!1}),L=f()(()=>Promise.all([t.e(3247),t.e(6681)]).then(t.t.bind(t,96681,23)),{loadableGenerated:{webpack:()=>[96681]},ssr:!1}),_=f()(()=>Promise.all([t.e(9675),t.e(1287),t.e(7786),t.e(4955)]).then(t.bind(t,4955)).then(e=>e.Modal),{loadableGenerated:{webpack:()=>[4955]},ssr:!1}),j=f()(()=>Promise.all([t.e(7561),t.e(83),t.e(1287),t.e(9904),t.e(7528),t.e(8836)]).then(t.bind(t,70202)).then(e=>e.NameChangeModal),{loadableGenerated:{webpack:()=>[70202]},ssr:!1}),S=f()(()=>Promise.all([t.e(6030),t.e(83),t.e(1287),t.e(3657),t.e(9307),t.e(9671),t.e(5042)]).then(t.bind(t,65042)).then(e=>e.AuthModal),{loadableGenerated:{webpack:()=>[65042]},ssr:!1}),x=e=>{let{id:n,username:t,hideTitleOnMobile:i=!1,showToggleChatOption:d=!0}=e,[f,v]=(0,c.useState)(!1),[x,G]=(0,c.useState)(!1),[P,D]=(0,s.FV)(h.vZ),[I,A]=(0,c.useState)(null),O=(0,s.sJ)(h.Q),N=()=>{d&&D(P===h.gG.VISIBLE?h.gG.HIDDEN:h.gG.VISIBLE)},K=()=>{v(!1)},M=()=>{I&&I.close(),A(null),D(h.gG.VISIBLE)},R=d&&O.chatAvailable&&(P===h.gG.HIDDEN||P===h.gG.VISIBLE),T=d&&O.chatAvailable&&(P===h.gG.HIDDEN||P===h.gG.VISIBLE||P===h.gG.POPPED_OUT);(0,u.y1)("c",N,{enableOnContentEditable:!1},[P===h.gG.VISIBLE]);let U=(0,s.sJ)(h.db);if(!U)return null;let{displayName:V}=U,B=[{key:0,icon:(0,o.jsx)(k,{}),label:"Change name",onClick:()=>{v(!0)}},{key:1,icon:(0,o.jsx)(g,{}),label:"Authenticate",onClick:()=>G(!0)}];return R&&B.push({key:3,"aria-expanded":P===h.gG.VISIBLE,className:b().chatToggle,icon:(0,o.jsx)(C,{}),label:P===h.gG.VISIBLE?"Hide Chat":"Show Chat",onClick:N}),T&&B.push({key:4,icon:I?(0,o.jsx)(w,{}):(0,o.jsx)(E,{}),label:I?"Put chat back":"Pop out chat",onClick:I?M:()=>{M();let e=window.open("/embed/chat/readwrite","_blank","popup");e.addEventListener("beforeunload",M),A(e),D(h.gG.POPPED_OUT)}}),(0,o.jsx)(p.SV,{fallbackRender:e=>{let{error:n,resetErrorBoundary:t}=e;return(0,o.jsx)(y.A,{componentName:"UserDropdown",message:n.message,retryFunction:t})},children:(0,o.jsxs)("div",{className:b().root,children:[(0,o.jsx)(r.Z,{menu:{items:B},trigger:["click"],children:(0,o.jsxs)(a.Z,{id:n,type:"primary",icon:(0,o.jsx)(L,{className:b().userIcon}),children:[(0,o.jsx)("span",{className:l()([b().username,i&&b().hideTitleOnMobile]),children:t||V}),(0,o.jsx)(m,{})]})}),(0,o.jsx)(_,{title:"Change Chat Display Name",open:f,handleCancel:K,children:(0,o.jsx)(j,{closeModal:K})}),(0,o.jsx)(_,{title:"Authenticate",open:x,handleCancel:()=>G(!1),children:(0,o.jsx)(S,{})})]})})}},29223:function(e){e.exports={root:"UserDropdown_root__XCKtE","ant-space":"UserDropdown_ant-space__NT8a9","ant-space-item":"UserDropdown_ant-space-item__D6AUQ",username:"UserDropdown_username__1vJf_",hideTitleOnMobile:"UserDropdown_hideTitleOnMobile__Nd7fp",chatToggle:"UserDropdown_chatToggle__MEP4e"}},46977:function(e,n,t){"use strict";t.d(n,{y1:function(){return g}});var o=t(67294);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(null,arguments)}t(85893);var a=["shift","alt","meta","mod","ctrl"],i={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function l(e){return(e&&i[e]||e||"").trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function s(e,n){return void 0===n&&(n=","),e.split(n)}function c(e,n,t){void 0===n&&(n="+");var o=e.toLocaleLowerCase().split(n).map(function(e){return l(e)}),i={alt:o.includes("alt"),ctrl:o.includes("ctrl")||o.includes("control"),shift:o.includes("shift"),meta:o.includes("meta"),mod:o.includes("mod")},s=o.filter(function(e){return!a.includes(e)});return r({},i,{keys:s,description:t})}"undefined"!=typeof document&&(document.addEventListener("keydown",function(e){void 0!==e.key&&f([l(e.key),l(e.code)])}),document.addEventListener("keyup",function(e){void 0!==e.key&&p([l(e.key),l(e.code)])})),"undefined"!=typeof window&&window.addEventListener("blur",function(){u.clear()});var u=new Set;function d(e){return Array.isArray(e)}function f(e){var n=Array.isArray(e)?e:[e];u.has("meta")&&u.forEach(function(e){return!a.includes(e)&&u.delete(e.toLowerCase())}),n.forEach(function(e){return u.add(e.toLowerCase())})}function p(e){var n=Array.isArray(e)?e:[e];"meta"===e?u.clear():n.forEach(function(e){return u.delete(e.toLowerCase())})}function h(e,n){var t=e.target;void 0===n&&(n=!1);var o=t&&t.tagName;return d(n)?!!(o&&n&&n.some(function(e){return e.toLowerCase()===o.toLowerCase()})):!!(o&&n&&!0===n)}var v=function(e,n,t){void 0===t&&(t=!1);var o,r=n.alt,a=n.meta,i=n.mod,s=n.shift,c=n.ctrl,f=n.keys,p=e.key,h=e.code,v=e.ctrlKey,b=e.metaKey,y=e.shiftKey,m=e.altKey,k=l(h),g=p.toLowerCase();if(!(null!=f&&f.includes(k))&&!(null!=f&&f.includes(g))&&!["ctrl","control","unknown","meta","alt","shift","os"].includes(k))return!1;if(!t){if(!m===r&&"alt"!==g||!y===s&&"shift"!==g)return!1;if(i){if(!b&&!v)return!1}else if(!b===a&&"meta"!==g&&"os"!==g||!v===c&&"ctrl"!==g&&"control"!==g)return!1}return!!(f&&1===f.length&&(f.includes(g)||f.includes(k)))||(f?(void 0===o&&(o=","),(d(f)?f:f.split(o)).every(function(e){return u.has(e.trim().toLowerCase())})):!f)},b=(0,o.createContext)(void 0),y=(0,o.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),m=function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},k="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function g(e,n,t,r){var a,i=(0,o.useState)(null),u=i[0],g=i[1],w=(0,o.useRef)(!1),E=t instanceof Array?r instanceof Array?void 0:r:t,C=d(e)?e.join(null==E?void 0:E.splitKey):e,L=t instanceof Array?t:r instanceof Array?r:void 0,_=(0,o.useCallback)(n,null!=L?L:[]),j=(0,o.useRef)(_);L?j.current=_:j.current=n;var S=(!function e(n,t){return n&&t&&"object"==typeof n&&"object"==typeof t?Object.keys(n).length===Object.keys(t).length&&Object.keys(n).reduce(function(o,r){return o&&e(n[r],t[r])},!0):n===t}((a=(0,o.useRef)(void 0)).current,E)&&(a.current=E),a.current),x=(0,o.useContext)(y).enabledScopes,G=(0,o.useContext)(b);return k(function(){if((null==S?void 0:S.enabled)!==!1&&(e=null==S?void 0:S.scopes,0===x.length&&e?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):!!(!e||x.some(function(n){return e.includes(n)})||x.includes("*")))){var e,n=function(e,n){var t;if(void 0===n&&(n=!1),!h(e,["input","textarea","select"])||h(e,null==S?void 0:S.enableOnFormTags)){if(null!==u){var o=u.getRootNode();if((o instanceof Document||o instanceof ShadowRoot)&&o.activeElement!==u&&!u.contains(o.activeElement)){m(e);return}}(null==(t=e.target)||!t.isContentEditable||null!=S&&S.enableOnContentEditable)&&s(C,null==S?void 0:S.splitKey).forEach(function(t){var o,r,a,i=c(t,null==S?void 0:S.combinationKey);if(v(e,i,null==S?void 0:S.ignoreModifiers)||null!=(a=i.keys)&&a.includes("*")){if(null!=S&&null!=S.ignoreEventWhen&&S.ignoreEventWhen(e)||n&&w.current)return;if(("function"==typeof(o=null==S?void 0:S.preventDefault)&&o(e,i)||!0===o)&&e.preventDefault(),"function"==typeof(r=null==S?void 0:S.enabled)?!r(e,i):!0!==r&&void 0!==r){m(e);return}j.current(e,i),n||(w.current=!0)}})}},t=function(e){void 0!==e.key&&(f(l(e.code)),((null==S?void 0:S.keydown)===void 0&&(null==S?void 0:S.keyup)!==!0||null!=S&&S.keydown)&&n(e))},o=function(e){void 0!==e.key&&(p(l(e.code)),w.current=!1,null!=S&&S.keyup&&n(e,!0))},r=u||(null==E?void 0:E.document)||document;return r.addEventListener("keyup",o),r.addEventListener("keydown",t),G&&s(C,null==S?void 0:S.splitKey).forEach(function(e){return G.addHotkey(c(e,null==S?void 0:S.combinationKey,null==S?void 0:S.description))}),function(){r.removeEventListener("keyup",o),r.removeEventListener("keydown",t),G&&s(C,null==S?void 0:S.splitKey).forEach(function(e){return G.removeHotkey(c(e,null==S?void 0:S.combinationKey,null==S?void 0:S.description))})}}},[u,C,S,x]),g}}}]);