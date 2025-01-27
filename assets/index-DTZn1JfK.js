var Z=Object.defineProperty;var W=(t,e,n)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var g=(t,e,n)=>W(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const j="https://forkify-api.herokuapp.com/api/v2/recipes/",z=10;function w(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild}function J(t){return new Promise((e,n)=>{setTimeout(()=>n(new Error(`Request timed out after ${t} seconds`)),t*1e3)})}class G{constructor(e){this.title=e.title,this.publisher=e.publisher,this.id=e.id,this.sourceURL=e.source_url,this.imageURL=e.image_url,this.ingredients=e.ingredients,this.servings=e.servings,this.cookingTime=e.cooking_time}}class K{constructor(){g(this,"_recipe");g(this,"_bookmarked");g(this,"_servings")}get recipe(){return this._recipe}get bookmarked(){return this._bookmarked}set bookmarked(e){this._bookmarked=e}get servings(){return this._servings}set servings(e){this._servings=e}async getRecipeById(e){try{const n=await Promise.race([fetch(`${j}${e}`),J(z)]),i=await n.json();if(!n.ok)throw new Error(i.message);return this._recipe=new G(i.data.recipe),this._servings=this._recipe.servings,this._recipe}catch(n){throw console.error(n),n}}}const v=new K,X=10;class Y{constructor(){g(this,"_list");g(this,"_currentPage");g(this,"_perPage",X)}get list(){return this._list}get currentPage(){return this._currentPage}set currentPage(e){this._currentPage=e}get perPage(){return this._perPage}async searchRecipes(e){try{const n=await Promise.race([fetch(`${j}?search=${e}`),J(z)]),i=await n.json();if(!n.ok)throw new Error(i.error);const s=i.data.recipes;return this._list=s.map(r=>new Q(r)),this._currentPage=1,this._list}catch(n){throw console.error(n),n}}}class Q{constructor(e){this.title=e.title,this.publisher=e.publisher,this.id=e.id,this.imageURL=e.image_url}}const B=new Y,k=""+new URL("icons-CcdzzWd0.svg",import.meta.url).href;class R{constructor(){g(this,"_parentElement");g(this,"_handler")}render(){}addHandler(e){this._handler=e}_clear(){this._parentElement.innerHTML=""}spinner(){this._clear();const e=`<div class="spinner message">
    <svg>
    <use href="${k}#icon-loader"></use>
    </svg>
    </div>`;this._parentElement.append(w(e))}error(e){this._clear();const n=`<div class="error message">
    <svg>
    <use href="${k}#icon-alert-circle"></use>
    </svg>
    <span class="error-text">${e.message}</span>
    </div>`;this._parentElement.append(w(n))}}typeof BigInt>"u"&&(BigInt=function(t){if(isNaN(t))throw new Error("");return t});const c=BigInt(0),l=BigInt(1),M=BigInt(2),C=BigInt(5),_=BigInt(10),ee=2e3,o={s:l,n:c,d:l};function E(t,e){try{t=BigInt(t)}catch{throw $()}return t*e}function y(t){return typeof t=="bigint"?t:Math.floor(t)}function f(t,e){if(e===c)throw V();const n=Object.create(O.prototype);n.s=t<c?-l:l,t=t<c?-t:t;const i=I(t,e);return n.n=t/i,n.d=e/i,n}function q(t){const e={};let n=t,i=M,s=C-l;for(;s<=n;){for(;n%i===c;)n/=i,e[i]=(e[i]||c)+l;s+=l+M*i++}return n!==t?n>1&&(e[n]=(e[n]||c)+l):e[t]=(e[t]||c)+l,e}const m=function(t,e){let n=c,i=l,s=l;if(t!=null)if(e!==void 0){if(typeof t=="bigint")n=t;else{if(isNaN(t))throw $();if(t%1!==0)throw U();n=BigInt(t)}if(typeof e=="bigint")i=e;else{if(isNaN(e))throw $();if(e%1!==0)throw U();i=BigInt(e)}s=n*i}else if(typeof t=="object"){if("d"in t&&"n"in t)n=BigInt(t.n),i=BigInt(t.d),"s"in t&&(n*=BigInt(t.s));else if(0 in t)n=BigInt(t[0]),1 in t&&(i=BigInt(t[1]));else if(typeof t=="bigint")n=t;else throw $();s=n*i}else if(typeof t=="number"){if(isNaN(t))throw $();if(t<0&&(s=-l,t=-t),t%1===0)n=BigInt(t);else if(t>0){let r=1,a=0,h=1,p=1,d=1,b=1e7;for(t>=1&&(r=10**Math.floor(1+Math.log10(t)),t/=r);h<=b&&d<=b;){let u=(a+p)/(h+d);if(t===u){h+d<=b?(n=a+p,i=h+d):d>h?(n=p,i=d):(n=a,i=h);break}else t>u?(a+=p,h+=d):(p+=a,d+=h),h>b?(n=p,i=d):(n=a,i=h)}n=BigInt(n)*BigInt(r),i=BigInt(i)}}else if(typeof t=="string"){let r=0,a=c,h=c,p=c,d=l,b=l,u=t.replace(/_/g,"").match(/\d+|./g);if(u===null)throw $();if(u[r]==="-"?(s=-l,r++):u[r]==="+"&&r++,u.length===r+1?h=E(u[r++],s):u[r+1]==="."||u[r]==="."?(u[r]!=="."&&(a=E(u[r++],s)),r++,(r+1===u.length||u[r+1]==="("&&u[r+3]===")"||u[r+1]==="'"&&u[r+3]==="'")&&(h=E(u[r],s),d=_**BigInt(u[r].length),r++),(u[r]==="("&&u[r+2]===")"||u[r]==="'"&&u[r+2]==="'")&&(p=E(u[r+1],s),b=_**BigInt(u[r+1].length)-l,r+=3)):u[r+1]==="/"||u[r+1]===":"?(h=E(u[r],s),d=E(u[r+2],l),r+=3):u[r+3]==="/"&&u[r+1]===" "&&(a=E(u[r],s),h=E(u[r+2],s),d=E(u[r+4],l),r+=5),u.length<=r)i=d*b,s=n=p+i*a+b*h;else throw $()}else if(typeof t=="bigint")n=t,s=t,i=l;else throw $();if(i===c)throw V();o.s=s<c?-l:l,o.n=n<c?-n:n,o.d=i<c?-i:i};function te(t,e,n){let i=l;for(;e>c;t=t*t%n,e>>=l)e&l&&(i=i*t%n);return i}function ne(t,e){for(;e%M===c;e/=M);for(;e%C===c;e/=C);if(e===l)return c;let n=_%e,i=1;for(;n!==l;i++)if(n=n*_%e,i>ee)return c;return BigInt(i)}function ie(t,e,n){let i=l,s=te(_,n,e);for(let r=0;r<300;r++){if(i===s)return BigInt(r);i=i*_%e,s=s*_%e}return 0}function I(t,e){if(!t)return e;if(!e)return t;for(;;){if(t%=e,!t)return e;if(e%=t,!e)return t}}function O(t,e){if(m(t,e),this instanceof O)t=I(o.d,o.n),this.s=o.s,this.n=o.n/t,this.d=o.d/t;else return f(o.s*o.n,o.d)}var V=function(){return new Error("Division by Zero")},$=function(){return new Error("Invalid argument")},U=function(){return new Error("Parameters must be integer")};O.prototype={s:l,n:c,d:l,abs:function(){return f(this.n,this.d)},neg:function(){return f(-this.s*this.n,this.d)},add:function(t,e){return m(t,e),f(this.s*this.n*o.d+o.s*this.d*o.n,this.d*o.d)},sub:function(t,e){return m(t,e),f(this.s*this.n*o.d-o.s*this.d*o.n,this.d*o.d)},mul:function(t,e){return m(t,e),f(this.s*o.s*this.n*o.n,this.d*o.d)},div:function(t,e){return m(t,e),f(this.s*o.s*this.n*o.d,this.d*o.n)},clone:function(){return f(this.s*this.n,this.d)},mod:function(t,e){if(t===void 0)return f(this.s*this.n%this.d,l);if(m(t,e),c===o.n*this.d)throw V();return f(this.s*(o.d*this.n)%(o.n*this.d),o.d*this.d)},gcd:function(t,e){return m(t,e),f(I(o.n,this.n)*I(o.d,this.d),o.d*this.d)},lcm:function(t,e){return m(t,e),o.n===c&&this.n===c?f(c,l):f(o.n*this.n,I(o.n,this.n)*I(o.d,this.d))},inverse:function(){return f(this.s*this.d,this.n)},pow:function(t,e){if(m(t,e),o.d===l)return o.s<c?f((this.s*this.d)**o.n,this.n**o.n):f((this.s*this.n)**o.n,this.d**o.n);if(this.s<c)return null;let n=q(this.n),i=q(this.d),s=l,r=l;for(let a in n)if(a!=="1"){if(a==="0"){s=c;break}if(n[a]*=o.n,n[a]%o.d===c)n[a]/=o.d;else return null;s*=BigInt(a)**n[a]}for(let a in i)if(a!=="1"){if(i[a]*=o.n,i[a]%o.d===c)i[a]/=o.d;else return null;r*=BigInt(a)**i[a]}return o.s<c?f(r,s):f(s,r)},log:function(t,e){if(m(t,e),this.s<=c||o.s<=c)return null;const n={},i=q(o.n),s=q(o.d),r=q(this.n),a=q(this.d);for(const d in s)i[d]=(i[d]||c)-s[d];for(const d in a)r[d]=(r[d]||c)-a[d];for(const d in i)d!=="1"&&(n[d]=!0);for(const d in r)d!=="1"&&(n[d]=!0);let h=null,p=null;for(const d in n){const b=i[d]||c,u=r[d]||c;if(b===c){if(u!==c)return null;continue}let H=u,T=b;const D=I(H,T);if(H/=D,T/=D,h===null&&p===null)h=H,p=T;else if(H*p!==h*T)return null}return h!==null&&p!==null?f(h,p):null},equals:function(t,e){return m(t,e),this.s*this.n*o.d===o.s*o.n*this.d},lt:function(t,e){return m(t,e),this.s*this.n*o.d<o.s*o.n*this.d},lte:function(t,e){return m(t,e),this.s*this.n*o.d<=o.s*o.n*this.d},gt:function(t,e){return m(t,e),this.s*this.n*o.d>o.s*o.n*this.d},gte:function(t,e){return m(t,e),this.s*this.n*o.d>=o.s*o.n*this.d},compare:function(t,e){m(t,e);let n=this.s*this.n*o.d-o.s*o.n*this.d;return(c<n)-(n<c)},ceil:function(t){return t=_**BigInt(t||0),f(y(this.s*t*this.n/this.d)+(t*this.n%this.d>c&&this.s>=c?l:c),t)},floor:function(t){return t=_**BigInt(t||0),f(y(this.s*t*this.n/this.d)-(t*this.n%this.d>c&&this.s<c?l:c),t)},round:function(t){return t=_**BigInt(t||0),f(y(this.s*t*this.n/this.d)+this.s*((this.s>=c?l:c)+M*(t*this.n%this.d)>this.d?l:c),t)},roundTo:function(t,e){m(t,e);const n=this.n*o.d,i=this.d*o.n,s=n%i;let r=y(n/i);return s+s>=i&&r++,f(this.s*r*o.n,o.d)},divisible:function(t,e){return m(t,e),!(!(o.n*this.d)||this.n*o.d%(o.n*this.d))},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(t){let e=this.n,n=this.d;t=t||15;let i=ne(e,n),s=ie(e,n,i),r=this.s<c?"-":"";if(r+=y(e/n),e%=n,e*=_,e&&(r+="."),i){for(let a=s;a--;)r+=y(e/n),e%=n,e*=_;r+="(";for(let a=i;a--;)r+=y(e/n),e%=n,e*=_;r+=")"}else for(let a=t;e&&a--;)r+=y(e/n),e%=n,e*=_;return r},toFraction:function(t){let e=this.n,n=this.d,i=this.s<c?"-":"";if(n===l)i+=e;else{let s=y(e/n);t&&s>c&&(i+=s,i+=" ",e%=n),i+=e,i+="/",i+=n}return i},toLatex:function(t){let e=this.n,n=this.d,i=this.s<c?"-":"";if(n===l)i+=e;else{let s=y(e/n);t&&s>c&&(i+=s,e%=n),i+="\\frac{",i+=e,i+="}{",i+=n,i+="}"}return i},toContinued:function(){let t=this.n,e=this.d,n=[];do{n.push(y(t/e));let i=t%e;t=e,e=i}while(t!==l);return n},simplify:function(t){const e=BigInt(1/(t||.001)|0),n=this.abs(),i=n.toContinued();for(let s=1;s<i.length;s++){let r=f(i[s-1],l);for(let h=s-2;h>=0;h--)r=r.inverse().add(i[h]);let a=r.sub(n);if(a.n*e<a.d)return r.mul(this.s)}return this}};class re extends R{constructor(){super(...arguments);g(this,"_parentElement",document.querySelector(".recipe-container"));g(this,"_bookmarkHandler");g(this,"_decServings");g(this,"_incServings")}render(n,i){this._clear();const s=`
    <article class="recipe">
  <div class="recipe__figure">
    <img src="${n.imageURL}" alt="${n.title}" />
    <h1 class="recipe__title"><span>${n.title}</span></h1>
  </div>
  <div class="recipe__details">
    <div class="recipe__detail">
      <svg>
        <use href="${k}#icon-clock"></use>
      </svg>
      <span class="recipe__time">${n.cookingTime} Minutes</span>
    </div>
    <div class="recipe__detail">
      <svg>
        <use href="${k}#icon-users"></use>
      </svg>
      <span class="recipe__servings">${n.servings} Servings</span>
      <button class="decServings">
        <svg>
          <use href="${k}#icon-minus-circle"></use>
        </svg>
      </button>
      <button class="incServings">
        <svg>
          <use href="${k}#icon-plus-circle"></use>
        </svg>
      </button>
    </div>
    <div class="bookmark__btn">
      <button class="btn">
        <svg>
          <use href="${k}#icon-bookmark${i?"-fill":""}"></use>
        </svg>
      </button>
    </div>
  </div>
  <div class="recipe__ingredients__container">
    <h2>Recipe ingredients</h2>
    <ul class="recipe__ingredients">
    </ul>
  </div>
  <div class="recipe__how">
    <h2>How to cook it</h2>
    <p>
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${n.publisher}</span>. Please
      check out directions at their website.
    </p>
    <a href="${n.sourceURL}" class="btn"
      >Directions
      <svg>
        <use href="${k}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
</article>
`,r=w(s);r.querySelector(".bookmark__btn").addEventListener("click",()=>this._bookmarkHandler(n)),r.querySelector(".decServings").addEventListener("click",this._decServings),r.querySelector(".incServings").addEventListener("click",this._incServings),this._parentElement.append(r),this.updateServings(n,n.servings)}updateBookmark(n){this._parentElement.querySelector(".bookmark__btn").innerHTML=`<button class="btn">
        <svg>
          <use href="${k}#icon-bookmark${n?"-fill":""}"></use>
        </svg>
      </button>`}updateServings(n,i){this._parentElement.querySelector(".decServings").disabled=i===1,this._parentElement.querySelector(".recipe__servings").innerHTML=`${i} Servings`,this._parentElement.querySelector(".recipe__ingredients").innerHTML=`${n.ingredients.map(s=>`
      <li class="recipe__ingredient">
        <svg>
          <use href="${k}#icon-check"></use>
        </svg>
        <span
          >${s.quantity?`${O(s.quantity).mul(i).div(n.servings).toFraction()} ${s.unit}`:""} ${s.description}</span
        >
      </li>
      `).join("")}`}addHandler(n,i,s){this._bookmarkHandler=n,this._decServings=i,this._incServings=s}}const P=new re;class se extends R{constructor(){super(...arguments);g(this,"_parentElement",document.querySelector(".pagination"));g(this,"_prevBtn",w(`<button class="prev-page">
    <svg><use href="${k}#icon-arrow-left"></use></svg>
    </button>`));g(this,"_nextBtn",w(`<button class="next-page">
    <svg><use href="${k}#icon-arrow-right"></use></svg>
    </button>`))}addHandler(n,i){this._prevBtn.addEventListener("click",n),this._nextBtn.addEventListener("click",i)}render(n){this._clear();const i=w('<div class="page-numbers"></div>');for(let s=0;s<n;s++)i.append(w(`<p>${s+1}</p>`));this._parentElement.append(this._prevBtn,i,this._nextBtn)}updatePage(n){const i=this._parentElement.querySelectorAll(".page-numbers p");i.forEach((s,r)=>{var a;r+1===n&&((a=this._parentElement.querySelector(".current-page-number"))==null||a.classList.remove("current-page-number"),s.classList.add("current-page-number")),s.style.transform=`translate(${(r+1-n)*100}%)`}),this._prevBtn.disabled=n===1,this._nextBtn.disabled=n===i.length}}const x=new se;class oe extends R{constructor(){super(...arguments);g(this,"_parentElement",document.querySelector(".preview-list"))}render(n,i){this._clear();for(let s=0;s<Math.ceil(n.length/i);s++){const r=w('<div class="page"></div>');n.slice(s*i,(s+1)*i).forEach(a=>r.append(this._recipePreviewElement(a))),this._parentElement.append(r)}}updatePage(n){this._parentElement.querySelectorAll(".page").forEach((i,s)=>{var r;s+1===n&&((r=this._parentElement.querySelector(".current-page"))==null||r.classList.remove("current-page"),i.classList.add("current-page")),i.style.transform=`translate(${(s+1-n)*100}%)`})}_recipePreviewElement(n){const i=`<div class="recipe-preview" data-id=${n.id} >
      <img src="${n.imageURL}" alt="${n.title}" />
      <div>
        <h4>${n.title}</h4>
        <p>${n.publisher}</p>
      </div>
    </div>`,s=w(i);return s.addEventListener("click",this._handler),s}}const N=new oe;class ce extends R{constructor(){super(...arguments);g(this,"_parentElement",document.querySelector(".search-results"))}render(n,i){N.render(n,i),x.render(Math.ceil(n.length/i))}updatePage(n){N.updatePage(n),x.updatePage(n)}addHandler(n,i,s){N.addHandler(n),x.addHandler(i,s)}spinner(){this._clear(),N.spinner()}_clear(){N._clear(),x._clear()}error(n){N.error(n)}}const L=new ce;class ae extends R{constructor(){super(...arguments);g(this,"_parentElement",document.querySelector(".bookmarks"))}render(n){this._clear(),n.length?n.forEach(i=>this._parentElement.append(this._recipePreviewElement(i))):this.error(new Error("No bookmarks yet."))}_recipePreviewElement(n){const i=`<div class="recipe-preview" data-id=${n.id} >
      <img src="${n.imageURL}" alt="${n.title}" />
      <div>
        <h4>${n.title}</h4>
        <p>${n.publisher}</p>
      </div>
    </div>`,s=w(i);return s.addEventListener("click",this._handler),s}}const A=new ae;class le{constructor(){g(this,"_bookmarks",[]);g(this,"_visible",!1)}addBookmark(e){this._bookmarks.push(e),localStorage.setItem("forkify",JSON.stringify(this._bookmarks))}removeBookmark(e){this._bookmarks.splice(this._bookmarks.findIndex(n=>n.id===e),1),localStorage.setItem("forkify",JSON.stringify(this._bookmarks))}get visible(){return this._visible}set visible(e){this._visible=e}get bookmarks(){return this._bookmarks}}const S=new le;document.querySelector(".search-form").addEventListener("submit",t=>{t.preventDefault();const e=t.target.querySelector("input[name='search-query']").value.trim();e&&(L.spinner(),ue(e))});async function ue(t){try{const e=await B.searchRecipes(t);if(!Array.isArray(e)||e.length===0)throw new Error("No Recipe Found!");L.render(B.list,B.perPage),L.updatePage(B.currentPage)}catch(e){console.error(e),L.error(e)}}document.querySelector(".bookmarks-btn").addEventListener("click",t=>{t.preventDefault(),S.visible=!S.visible;const e=document.querySelector(".bookmarks");S.visible?(e.style.display="flex",A.render(S.bookmarks)):e.style.display="none"});function de(){var t;(t=JSON.parse(localStorage.getItem("forkify")))==null||t.forEach(e=>S.addBookmark(e)),L.addHandler(F,fe,ge),P.addHandler(me,pe,ve),A.addHandler(F)}function F(){var t,e;(t=document.querySelectorAll(".active-recipe"))==null||t.forEach(n=>n.classList.remove("active-recipe")),(e=document.querySelectorAll(`div[data-id="${this.dataset.id}"]`))==null||e.forEach(n=>n.classList.add("active-recipe")),P.spinner(),he(this.dataset.id)}async function he(t){try{const e=await v.getRecipeById(t);v.bookmarked=!1,S.bookmarks.forEach(n=>{n.id===e.id&&(v.bookmarked=!0)}),P.render(v.recipe,v.bookmarked)}catch(e){console.error(e),P.error(e)}}function fe(){B.currentPage--,L.updatePage(B.currentPage)}function ge(){B.currentPage++,L.updatePage(B.currentPage)}function me(t){v.bookmarked?S.removeBookmark(t.id):S.addBookmark(t),A.render(S.bookmarks),v.bookmarked=!v.bookmarked,P.updateBookmark(v.bookmarked)}function pe(){v.servings--,P.updateServings(v.recipe,v.servings)}function ve(){v.servings++,P.updateServings(v.recipe,v.servings)}de();
