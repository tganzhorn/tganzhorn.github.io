(this["webpackJsonpxise-0.0.1"]=this["webpackJsonpxise-0.0.1"]||[]).push([[0],{12:function(n,e,t){n.exports=t(22)},22:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(7),i=t.n(a),c=t(1),l=t(2);function u(){var n=Object(c.a)(["\n    height: 2px;\n    border-radius: 1px;\n    background-color: #666;\n    \n    :after {\n        content: '';\n        display: block;\n        height: 2px;\n        border-radius: 1px;\n        background-color: #666;\n        transform: translateY(4px);\n    }\n    \n    :before {\n        content: '';\n        display: block;\n        height: 2px;\n        border-radius: 1px;\n        background-color: #666;\n        transform: translateY(12px);\n    }\n"]);return u=function(){return n},n}function d(){var n=Object(c.a)(["\n    width: 16px;\n    height: 16px;\n    overflow: hidden;\n"]);return d=function(){return n},n}var s=l.a.div(d()),f=l.a.div(u()),p=function(n){return o.a.createElement(s,null,o.a.createElement(f,null))};function m(){var n=Object(c.a)(["\n    color: ",";\n    ","\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: ",";\n    whitespace-nowrap;\n    display: inline-block;\n    direction: ltr;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    -webkit-font-smoothing: antialiased;\n    text-shadow: inherit;\n"]);return m=function(){return n},n}var b=l.a.div(m(),(function(n){return n.color||"black"}),(function(n){return n.outlined?"padding: 4px; border-radius: 100%; background-color: #ccc; color: #666":""}),(function(n){return n.size||"24px"}));function v(){var n=Object(c.a)(["\n    border: none;\n"]);return v=function(){return n},n}function h(){var n=Object(c.a)(["\n    flex-grow: 1;\n    padding: 0 16px;\n    color: #666;\n"]);return h=function(){return n},n}var x=l.a.div(h()),g=l.a.input(v()),w=function(n){return o.a.createElement(x,null,o.a.createElement(g,{placeholder:"in Xise suchen"}))};function E(){var n=Object(c.a)(["\n    padding: 0 16px;\n    height: 40px;\n    border-radius: 4px;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: white;\n"]);return E=function(){return n},n}function y(){var n=Object(c.a)(["\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    padding: 12px;\n    box-sizing: border-box;\n    transition: 0.3s ease top;\n    z-index: 1200;\n"]);return y=function(){return n},n}var j=l.a.div(y()),k=l.a.div(E()),O=function(n){var e=Object(r.useRef)(null),t=0,a=function(){window.scrollY>50&&t-window.scrollY<0?e.current.style.top=-e.current.offsetHeight+"px":e.current.style.top=0,t=window.scrollY};return Object(r.useEffect)((function(){t=window.scrollY,window.addEventListener("scroll",a)})),o.a.createElement(j,{ref:e},o.a.createElement(k,null,o.a.createElement(p,null),o.a.createElement(w,null)))};function z(){var n=Object(c.a)(["\n    transition: opacity 0.3s ease, transform 0.3s ease;\n    position: absolute;\n    color: white;\n    text-shadow: 0 0 8px black;\n    user-select: none;\n    \n    :active {\n        transform: scale(1.2);\n    }\n"]);return z=function(){return n},n}function L(){var n=Object(c.a)(["\n    width: 100%;\n    height: 350px;\n    overflow: auto;\n    display: flex;\n    flex-wrap: no-wrap;\n"]);return L=function(){return n},n}var T=l.a.div(L()),W=l.a.div(z()),Y=function(n){var e,t,a,i=Object(r.useRef)(null),c=Object(r.useRef)(null),l=Object(r.useRef)(null),u=0,d=0,s=function(){c.current.style.opacity=0===u?0:1,u===i.current.childElementCount-3?l.current.style.opacity=0:l.current.style.opacity=1,window.clearTimeout(t),d!==i.current.scrollLeft&&(window.clearTimeout(a),e=i.current.scrollLeft,u=Math.floor((i.current.offsetWidth/2+i.current.scrollLeft)/i.current.offsetWidth),t=window.setTimeout(f,150))},f=function(){p(0,30)},p=function n(t,r){r+1!==t&&(a=window.setTimeout((function(){d=Math.round((i.current.offsetWidth*u-e)*(t/r)*(t/r)*(t/r)+e),i.current.scrollLeft=d,n(t+1,r)}),16.6))};Object(r.useEffect)((function(){return window.addEventListener("resize",m),m(),s(),function(){window.removeEventListener("resize",m)}}));var m=function(){c.current.style.top=i.current.offsetTop+100+"px",c.current.style.left="12px",l.current.style.top=i.current.offsetTop+100+"px",l.current.style.left=document.documentElement.offsetWidth-60+"px"},v=function(n){console.log(n),e=i.current.scrollLeft,"left"===n&&(u=Math.max(0,u-1)),"right"===n&&(u=Math.min(i.current.childElementCount-3,u+1)),p(0,30)};return o.a.createElement(T,{ref:i,onScroll:s},o.a.createElement(W,{ref:c,onClick:function(){return v("left")}},o.a.createElement(b,{color:"rgba(255, 255, 255, 0.9)",size:"48px"},"arrow_back")),o.a.createElement(W,{ref:l,onClick:function(){return v("right")}},o.a.createElement(b,{color:"rgba(255, 255, 255, 0.9)",size:"48px"},"arrow_forward")),n.children)};function C(){var n=Object(c.a)(["\n    padding: 8px;\n"]);return C=function(){return n},n}function M(){var n=Object(c.a)(["\n    height: 180px;\n    width: 100%;\n    background-image: url('https://www.fom.de/fileadmin/user_upload/BA_ELEKTROTECH_470x281.jpg');\n    background-size: cover;\n"]);return M=function(){return n},n}function R(){var n=Object(c.a)(["\n    margin-top: 8px;\n    padding: 0 8px;\n    overflow: auto;\n    color: #444;\n    font-size: 10pt;\n    flex-grow: 1;\n    box-sizing: border-box;\n"]);return R=function(){return n},n}function _(){var n=Object(c.a)(["\n    padding: 8px;\n    display: flex;\n    align-items: center;\n"]);return _=function(){return n},n}function S(){var n=Object(c.a)(["\n    font-size: 10pt;\n    color: #444;\n"]);return S=function(){return n},n}function A(){var n=Object(c.a)(["\n    font-weight: bold;\n    font-size: 12pt;\n    padding-bottom: 4px;\n"]);return A=function(){return n},n}function B(){var n=Object(c.a)(["\n    padding-left: 8px;\n    display: flex;\n    flex-direction: column;\n"]);return B=function(){return n},n}function q(){var n=Object(c.a)(["\n    background-color: white;\n    height: 100%;\n    width: 100%;\n    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);\n    overflow: hidden;\n    border-radius: 4px;\n    display: flex;\n    flex-direction: column;\n"]);return q=function(){return n},n}function H(){var n=Object(c.a)(["\n    width: 100%;\n    flex: 0 0 100%;\n    padding: 8px 12px 8px 12px;\n    box-sizing: border-box;\n"]);return H=function(){return n},n}var I=l.a.div(H()),J=l.a.div(q()),K=l.a.div(B()),P=l.a.div(A()),X=l.a.div(S()),$=l.a.div(_()),D=l.a.div(R()),F=l.a.div(M()),G=l.a.div(C()),N=function(n){return o.a.createElement(I,null,o.a.createElement(J,null,o.a.createElement($,null,o.a.createElement(b,{outlined:!0},"search"),o.a.createElement(K,null,o.a.createElement(P,null,"Prim\xe4rtitel"),o.a.createElement(X,null,"Sekund\xe4rtitel"))),o.a.createElement(F,null),o.a.createElement(D,null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),o.a.createElement(G,null,o.a.createElement(b,{color:"#666"},"favorite"),o.a.createElement(b,{color:"#666"},"share"))))};function Q(){var n=Object(c.a)(["\n  width: 100%;\n  padding-top: 56px;\n  height: 100vh;\n  background-color: rebeccapurple;\n"]);return Q=function(){return n},n}var U=l.a.div(Q());var V=function(){return o.a.createElement("div",null,o.a.createElement(O,null),o.a.createElement(U,null,o.a.createElement(Y,null,o.a.createElement(N,null),o.a.createElement(N,null),o.a.createElement(N,null),o.a.createElement(N,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.a7ee383a.chunk.js.map