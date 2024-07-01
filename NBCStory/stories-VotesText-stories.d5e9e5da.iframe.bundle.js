(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[4731],{"./components/stories/VotesText.stories.js":(p,a,n)=>{"use strict";n.r(a),n.d(a,{VotesText:()=>o,__namedExportsOrder:()=>m,default:()=>e});var l=n("./node_modules/next/dist/compiled/react/index.js"),u=n("./components/VotesText.js"),r=l.createElement;const e={component:u.default,title:"Global Components/Text/Votes Text",args:{votes:1e6,showVotesLabel:!1}},o=P=>r(u.default,P);o.displayName="VotesText";const m=["VotesText"]},"./components/VotesText.js":(p,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>P});var l=n("./node_modules/next/dist/compiled/react/index.js"),u=n("./node_modules/prop-types/index.js"),r=n.n(u),e=n("./helpers/formatVotes.js"),o=l.createElement;const m=({votes:M,showVotesLabel:b,classes:C})=>M===null||M<0?null:o("p",{className:`founders-mono f2 lh-none fw6 gray-80 mv0 ${C}`,"data-test":"votes-text","data-testid":"votes-text"},(0,e.default)({showVotesLabel:b,votes:M}));m.displayName="VotesText",m.propTypes={votes:r().number,showVotesLabel:r().bool},m.defaultProps={votes:null,showVotesLabel:!1};const P=m},"./helpers/formatVotes.js":(p,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>o});var l=n("./node_modules/d3-format/src/defaultLocale.js"),u=n("./helpers/typeChecker.js");const r=(0,l.format)(","),o=({showVotesLabel:m,votes:P,label:M="votes"})=>(0,u.isNumber)(P)?m?`${r(P)} ${M}`:r(P):""},"./helpers/typeChecker.js":(p,a,n)=>{"use strict";n.r(a),n.d(a,{isEmptyObject:()=>u,isNumber:()=>l});const l=r=>typeof r=="number",u=r=>typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).length===0},"./node_modules/d3-format/src/defaultLocale.js":(p,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>X,format:()=>z,formatPrefix:()=>$});var l=n("./node_modules/d3-format/src/exponent.js");function u(t,d){return function(f,i){for(var c=f.length,y=[],_=0,x=t[0],L=0;c>0&&x>0&&(L+x+1>i&&(x=Math.max(1,i-L)),y.push(f.substring(c-=x,c+x)),!((L+=x+1)>i));)x=t[_=(_+1)%t.length];return y.reverse().join(d)}}function r(t){return function(d){return d.replace(/[0-9]/g,function(f){return t[+f]})}}var e=n("./node_modules/d3-format/src/formatSpecifier.js");function o(t){t:for(var d=t.length,f=1,i=-1,c;f<d;++f)switch(t[f]){case".":i=c=f;break;case"0":i===0&&(i=f),c=f;break;default:if(!+t[f])break t;i>0&&(i=0);break}return i>0?t.slice(0,i)+t.slice(c+1):t}var m=n("./node_modules/d3-format/src/formatDecimal.js"),P;function M(t,d){var f=(0,m.formatDecimalParts)(t,d);if(!f)return t+"";var i=f[0],c=f[1],y=c-(P=Math.max(-8,Math.min(8,Math.floor(c/3)))*3)+1,_=i.length;return y===_?i:y>_?i+new Array(y-_+1).join("0"):y>0?i.slice(0,y)+"."+i.slice(y):"0."+new Array(1-y).join("0")+(0,m.formatDecimalParts)(t,Math.max(0,d+y-1))[0]}function b(t,d){var f=(0,m.formatDecimalParts)(t,d);if(!f)return t+"";var i=f[0],c=f[1];return c<0?"0."+new Array(-c).join("0")+i:i.length>c+1?i.slice(0,c+1)+"."+i.slice(c+1):i+new Array(c-i.length+2).join("0")}const C={"%":(t,d)=>(t*100).toFixed(d),b:t=>Math.round(t).toString(2),c:t=>t+"",d:m.default,e:(t,d)=>t.toExponential(d),f:(t,d)=>t.toFixed(d),g:(t,d)=>t.toPrecision(d),o:t=>Math.round(t).toString(8),p:(t,d)=>b(t*100,d),r:b,s:M,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function v(t){return t}var N=Array.prototype.map,R=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function Q(t){var d=t.grouping===void 0||t.thousands===void 0?v:u(N.call(t.grouping,Number),t.thousands+""),f=t.currency===void 0?"":t.currency[0]+"",i=t.currency===void 0?"":t.currency[1]+"",c=t.decimal===void 0?".":t.decimal+"",y=t.numerals===void 0?v:r(N.call(t.numerals,String)),_=t.percent===void 0?"%":t.percent+"",x=t.minus===void 0?"\u2212":t.minus+"",L=t.nan===void 0?"NaN":t.nan+"";function G(h){h=(0,e.default)(h);var V=h.fill,W=h.align,T=h.sign,U=h.symbol,A=h.zero,I=h.width,k=h.comma,O=h.precision,Y=h.trim,g=h.type;g==="n"?(k=!0,g="g"):C[g]||(O===void 0&&(O=12),Y=!0,g="g"),(A||V==="0"&&W==="=")&&(A=!0,V="0",W="=");var tt=U==="$"?f:U==="#"&&/[boxX]/.test(g)?"0"+g.toLowerCase():"",et=U==="$"?i:/[%p]/.test(g)?_:"",H=C[g],nt=/[defgprs%]/.test(g);O=O===void 0?6:/[gprs]/.test(g)?Math.max(1,Math.min(21,O)):Math.max(0,Math.min(20,O));function Z(s){var D=tt,E=et,S,J,w;if(g==="c")E=H(s)+E,s="";else{s=+s;var F=s<0||1/s<0;if(s=isNaN(s)?L:H(Math.abs(s),O),Y&&(s=o(s)),F&&+s==0&&T!=="+"&&(F=!1),D=(F?T==="("?T:x:T==="-"||T==="("?"":T)+D,E=(g==="s"?R[8+P/3]:"")+E+(F&&T==="("?")":""),nt){for(S=-1,J=s.length;++S<J;)if(w=s.charCodeAt(S),48>w||w>57){E=(w===46?c+s.slice(S+1):s.slice(S))+E,s=s.slice(0,S);break}}}k&&!A&&(s=d(s,1/0));var K=D.length+s.length+E.length,j=K<I?new Array(I-K+1).join(V):"";switch(k&&A&&(s=d(j+s,j.length?I-E.length:1/0),j=""),W){case"<":s=D+s+E+j;break;case"=":s=D+j+s+E;break;case"^":s=j.slice(0,K=j.length>>1)+D+s+E+j.slice(K);break;default:s=j+D+s+E;break}return y(s)}return Z.toString=function(){return h+""},Z}function q(h,V){var W=G((h=(0,e.default)(h),h.type="f",h)),T=Math.max(-8,Math.min(8,Math.floor((0,l.default)(V)/3)))*3,U=Math.pow(10,-T),A=R[8+T/3];return function(I){return W(U*I)+A}}return{format:G,formatPrefix:q}}var B,z,$;X({thousands:",",grouping:[3],currency:["$",""]});function X(t){return B=Q(t),z=B.format,$=B.formatPrefix,B}},"./node_modules/d3-format/src/exponent.js":(p,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>u});var l=n("./node_modules/d3-format/src/formatDecimal.js");function u(r){return r=(0,l.formatDecimalParts)(Math.abs(r)),r?r[1]:NaN}},"./node_modules/d3-format/src/formatDecimal.js":(p,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>l,formatDecimalParts:()=>u});function l(r){return Math.abs(r=Math.round(r))>=1e21?r.toLocaleString("en").replace(/,/g,""):r.toString(10)}function u(r,e){if((o=(r=e?r.toExponential(e-1):r.toExponential()).indexOf("e"))<0)return null;var o,m=r.slice(0,o);return[m.length>1?m[0]+m.slice(2):m,+r.slice(o+1)]}},"./node_modules/d3-format/src/formatSpecifier.js":(p,a,n)=>{"use strict";n.r(a),n.d(a,{FormatSpecifier:()=>r,default:()=>u});var l=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function u(e){if(!(o=l.exec(e)))throw new Error("invalid format: "+e);var o;return new r({fill:o[1],align:o[2],sign:o[3],symbol:o[4],zero:o[5],width:o[6],comma:o[7],precision:o[8]&&o[8].slice(1),trim:o[9],type:o[10]})}u.prototype=r.prototype;function r(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}r.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type}},"./node_modules/prop-types/factoryWithThrowingShims.js":(p,a,n)=>{"use strict";var l=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function u(){}function r(){}r.resetWarningCache=u,p.exports=function(){function e(P,M,b,C,v,N){if(N!==l){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}e.isRequired=e;function o(){return e}var m={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:u};return m.PropTypes=m,m}},"./node_modules/prop-types/index.js":(p,a,n)=>{if(!1)var l,u;else p.exports=n("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":p=>{"use strict";var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";p.exports=a}}]);
