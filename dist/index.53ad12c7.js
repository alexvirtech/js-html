function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=r.parcelRequirec33c;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},r.parcelRequirec33c=s),s.register("dRo73",(function(t,r){var n,o;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var s={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)s[t[r]]=e[t[r]]},o=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("dRo73").register(JSON.parse('{"kh1xT":"index.53ad12c7.js","1Xyv7":"ort.438f3dc3.jpg"}'));const i=e=>`<div class="row">${e}</div>`,u=e=>`<div class="col-sm">${e}</div>`;class c{constructor(e,t){this.type=e,this.value=t}toHTML(){throw"toHTML function must be implemented"}}var l;l=new URL(s("dRo73").resolve("1Xyv7"),import.meta.url).toString();const a="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea amet doloribus animi eum, sit eligendi consequuntur cumque. Nam, dolor tempora rerum sit, vel accusantium magni accusamus fuga eveniet totam quia.",d=[new class extends c{constructor(e){super("title",e)}toHTML(){return i(u(`<h1>${this.value}</h1>`))}}("Hello, Alex!"),new class extends c{constructor(e){super("text",e)}toHTML(){return i(u(this.value))}}(a),new class extends c{constructor(e){super("columns",e)}toHTML(){return i(this.value.map((e=>u(e))).join(""))}}([a,a,a,a,a,a]),new class extends c{constructor(e){super("image",e)}toHTML(){return i(u(`<img src="${this.value}" class="img-fluid"/>`))}}(t(l))];new class{constructor(e){this.$el=document.querySelector(e)}render(e){this.$el.innerHTML=e.map((e=>e.toHTML())).join("")}}(".content").render(d);