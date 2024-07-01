(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[4380,2384],{"./components/stories/DonutChart.stories.js":(S,u,o)=>{"use strict";o.r(u),o.d(u,{Default:()=>g,DifferentValues:()=>x,__namedExportsOrder:()=>b,default:()=>f});var E=o("./node_modules/next/dist/compiled/react/index.js"),l=o("./components/DonutChart/2020/DonutChart.js"),m=E.createElement;const d={type:"range",min:0,max:100,step:1},f={component:l.default,title:"Global Components/Donut Chart/2020",argTypes:{demVal:{control:d},repVal:{control:d},label:{control:{type:"text"}},electionSeason:{control:{type:"text"}},useV2:{control:"boolean"}},args:{demVal:50,repVal:50,label:"College Graduate",electionSeason:"2020",useV2:!1},parameters:{status:{type:"deprecated"}}},g=P=>m(l.default,P);g.displayName="Default";const x=P=>m(l.default,P);x.displayName="DifferentValues",x.args={demVal:25,repVal:70};const b=["Default","DifferentValues"]},"./components/DonutChart/2020/DonutChart.js":(S,u,o)=>{"use strict";o.r(u),o.d(u,{default:()=>B});var E=o("./node_modules/styled-jsx/style.js"),l=o.n(E),m=o("./node_modules/prop-types/index.js"),d=o.n(m),f=o("./node_modules/next/dist/compiled/react/index.js"),g=o("./node_modules/lodash.kebabcase/index.js"),x=o.n(g),b=o("./node_modules/lodash.startcase/index.js"),P=o.n(b),N=o("./node_modules/classnames/index.js"),v=o.n(N),p=o("./node_modules/react-i18next/dist/es/index.js"),C=o("./helpers/getPartyColor.js"),c=f.createElement;const y=({t:D,i18n:I,demVal:z,repVal:R,label:A,electionSeason:O,useV2:j})=>{const e={white:"#fff",gray:"#ccc",blue:(0,C.default)({party:"dem",electionSeason:O}),red:(0,C.default)({party:"rep",electionSeason:O})},n=R>0||z>0,t=T=>T>0?(T*226.08/100).toFixed(2):0,s=(T,K)=>T>0?`${T} ${K}`:"",i=()=>{const T=t(.5),K=t(R-.5),U=t(z-.5);return[T,s(K,T),s(U,T),226.08].join(" ")},a=I.language==="es",_=v()({"f4 lh-none":!a&&!j,"f3 lh-90 gray-100":!a&&j,"f2 lh-none":a}),h=j?e.red:"#bb2323",M=v()("founders-mono lh-none fw4",{f3:!j,f2:j});return c(f.Fragment,null,c(l(),{id:"1774538533"},[".donut-chart svg{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}"]),c(l(),{id:"1809212782",dynamic:[76,76,e.red,e.blue,e.white,e.blue,h]},[".donut-chart.__jsx-style-dynamic-selector{height:76px;width:76px;}",`.rep-stroke.__jsx-style-dynamic-selector{stroke:${e.red};stroke-dashoffset:0;}`,`.dem-stroke.__jsx-style-dynamic-selector{stroke:${e.blue};}`,`.white-rings.__jsx-style-dynamic-selector{stroke:${e.white};stroke-dashoffset:0;}`,`.dem.__jsx-style-dynamic-selector{color:${e.blue};}`,`.rep.__jsx-style-dynamic-selector{color:${h};}`,".chart-key.__jsx-style-dynamic-selector{max-width:70px;}",".lh-90.__jsx-style-dynamic-selector{line-height:90%;}"]),c("div",{className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+" dib"},c("div",{className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+" donut-chart df items-center justify-center relative"},c("svg",{viewBox:"0 0 76 76",className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+" absolute"},c("circle",{cx:76/2,cy:76/2,r:36,stroke:e.gray,strokeWidth:4,fill:"none",className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])}),R>0&&c("circle",{cx:76/2,cy:76/2,r:36,strokeWidth:4,strokeDasharray:`${t(R)} ${226.08}`,fill:"none",className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+" rep-stroke"}),z>0&&c("circle",{cx:76/2,cy:76/2,r:36,strokeWidth:4,strokeDasharray:`${t(z)}
            ${226.08}`,strokeDashoffset:`-${t(R)}`,fill:"none",className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+" dem-stroke"}),n&&c("circle",{cx:76/2,cy:76/2,r:36,strokeWidth:4,strokeDasharray:i(),fill:"none",className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+" white-rings"})),c("div",{className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+` label tc founders-cond fw6 pa1 ${_}`},D(P()(A)))),!n&&c("div",{className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+" chart-key tc m-auto mt2"},c("span",{className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+" founders-mono gray-80 f2 lh-none pa0 fw4 dib"},D("polls.notEnoughData"))),n&&c("div",{"data-testid":`chart-key__${x()(A)}`,className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+" chart-key df justify-between mt2"},c("span",{className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+` dem ${M}`},c("span",{className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+" screen-reader-only"},`${A}: ${D("democrats")}`),`${z}%`),c("span",{className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+` rep  ${M}`},c("span",{className:"jsx-1774538533 "+l().dynamic([["1809212782",[76,76,e.red,e.blue,e.white,e.blue,h]]])+" screen-reader-only"},`${A}: ${D("republicans")}`),`${R}%`))))};y.propTypes={demVal:d().number,repVal:d().number,label:d().string,electionSeason:d().string,useV2:d().bool},y.defaultProps={demVal:0,repVal:0,label:"",electionSeason:"",useV2:!1};const B=(0,p.withTranslation)()(y)},"./data/partyColors.js":(S,u,o)=>{"use strict";o.r(u),o.d(u,{default:()=>E});const E={default:{dem:"#0471E6",rep:"#DE3535",grn:"#7A7A7A",con:"#7A7A7A",rp:"#7A7A7A",wf:"#7A7A7A",ind:"#595959",lib:"#A99369",oth:"#7A7A7A",weq:"black",yes:"#9E0084",no:"#2AA78B",ballotyes:"#9E0084",ballotno:"#2AA78B",iap:"salmon",npa:"brown",non:"green",for:"green",agn:"red",uncalled:"#e6e6e6",default:"#595959",other:"#7A7A7A",undecided:"#EBEBEB"},2022:{dem:"#009AF4",rep:"#D42F37",yes:"#9E0084",no:"#2AA78B",uncalled:"#e6e6e6",default:"#5C5C5C",other:"#7A7A7A",undecided:"#EBEBEB"},2023:{dem:"#009AF4",rep:"#D42F37",yes:"#F96419",no:"#645FAA",uncalled:"#e6e6e6",default:"#5C5C5C",other:"#7A7A7A",undecided:"#EBEBEB"},2024:{dem:"#0487E6",rep:"#DD2929",yes:"#F96419",no:"#645FAA",uncalled:"#BEBEBE",default:"#959595",other:"#7A7A7A",undecided:"#BEBEBE"}}},"./helpers/getPartyColor.js":(S,u,o)=>{"use strict";o.r(u),o.d(u,{default:()=>v});var E=o("./node_modules/lodash.get/index.js"),l=o.n(E),m=o("./data/partyColors.js"),d=o("./data/primaryColors.json"),f=o("./helpers/constants.js"),g=o("./helpers/isPrimaryElection.js");const x=["dem","rep"],b=["ind","npa","npt"],P=({normalizedParty:p,order:C,officeCode:c,useHousePrimaryColors:y,useFullColorPalette:B,electionSeason:D,electionTypeCode:I,stateAbbr:z})=>{const[R]=d.default;if(!p||typeof p!="string"||!C||typeof C!="number"||!c||typeof c!="string")return R;const A=f.OFFICE_NAMES[c]||"";let O="other",j="other";B&&p==="nonpartisan"?j=c:!B&&A.includes("president")?O="president":A==="house"&&(O=y&&!B?"house":"other",j=B?"other":"house");const w=l()(d,["season",D,c,z,I]),F=l()(d,["season",D,j,p]),W=l()(d,[O,p]),L=C-1,r=l()(w||F||W,[L]),e=l()(d,["season",D,j,"default",p]);return r||e||R},v=({party:p,order:C,officeCode:c,electionSeason:y,electionType:B,electionTypeCode:D="",stateAbbr:I,onlySupportMajorParties:z=!0,useHousePrimaryColors:R=!1,useFullColorPalette:A=!1})=>{const{default:{default:O}}=m.default,w=y&&l()(m.default,[y,"default"])||O;if(!p||typeof p!="string")return w;let F=p.toLowerCase();if(F==="gop"?F="rep":b.includes(F)&&(F="nonpartisan"),(0,g.default)(D)||B===f.ELECTION_TYPE.PRIMARY||A)return P({electionTypeCode:D,normalizedParty:F,order:C,officeCode:c,useHousePrimaryColors:R,useFullColorPalette:A,electionSeason:y,stateAbbr:I});if(z&&!x.includes(F))return w;const W=y&&l()(m.default,[y,F]),L=l()(m.default,["default",F],null);return W||L||w}},"./helpers/isPrimaryElection.js":(S,u,o)=>{"use strict";o.r(u),o.d(u,{default:()=>d});var E=o("./helpers/constants.js"),l=o("./node_modules/console-browserify/index.js");const d=(f="")=>typeof f!="string"?(l.warn("isPrimaryElection expects a type of string"),!1):E.PRIMARY_ELECTION_TYPE_CODES.includes(f)},"./node_modules/client-only/index.js":()=>{},"./node_modules/prop-types/factoryWithThrowingShims.js":(S,u,o)=>{"use strict";var E=o("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function l(){}function m(){}m.resetWarningCache=l,S.exports=function(){function d(x,b,P,N,v,p){if(p!==E){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}d.isRequired=d;function f(){return d}var g={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:f,element:d,elementType:d,instanceOf:f,node:d,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:m,resetWarningCache:l};return g.PropTypes=g,g}},"./node_modules/prop-types/index.js":(S,u,o)=>{if(!1)var E,l;else S.exports=o("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":S=>{"use strict";var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";S.exports=u},"./node_modules/styled-jsx/dist/index/index.js":(S,u,o)=>{var E=o("./node_modules/process/browser.js"),l=o("./node_modules/console-browserify/index.js");o("./node_modules/client-only/index.js");var m=o("./node_modules/next/dist/compiled/react/index.js");function d(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var f=d(m);function g(r,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function x(r,e,n){return e&&g(r.prototype,e),n&&g(r,n),r}var b=typeof E<"u"&&E.env&&!0,P=function(r){return Object.prototype.toString.call(r)==="[object String]"},N=function(){function r(n){var t=n===void 0?{}:n,s=t.name,i=s===void 0?"stylesheet":s,a=t.optimizeForSpeed,_=a===void 0?b:a;v(P(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",v(typeof _=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=_,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var e=r.prototype;return e.setOptimizeForSpeed=function(t){v(typeof t=="boolean","`setOptimizeForSpeed` accepts a boolean"),v(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=t,this.inject()},e.isOptimizeForSpeed=function(){return this._optimizeForSpeed},e.inject=function(){var t=this;if(v(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(b||l.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(s,i){return typeof i=="number"?t._serverSheet.cssRules[i]={cssText:s}:t._serverSheet.cssRules.push({cssText:s}),i},deleteRule:function(s){t._serverSheet.cssRules[s]=null}}},e.getSheetForTag=function(t){if(t.sheet)return t.sheet;for(var s=0;s<document.styleSheets.length;s++)if(document.styleSheets[s].ownerNode===t)return document.styleSheets[s]},e.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},e.insertRule=function(t,s){if(v(P(t),"`insertRule` accepts only strings"),typeof window>"u")return typeof s!="number"&&(s=this._serverSheet.cssRules.length),this._serverSheet.insertRule(t,s),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();typeof s!="number"&&(s=i.cssRules.length);try{i.insertRule(t,s)}catch{return b||l.warn(`StyleSheet: illegal rule: 

`+t+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var a=this._tags[s];this._tags.push(this.makeStyleTag(this._name,t,a))}return this._rulesCount++},e.replaceRule=function(t,s){if(this._optimizeForSpeed||typeof window>"u"){var i=typeof window<"u"?this.getSheet():this._serverSheet;if(s.trim()||(s=this._deletedRulePlaceholder),!i.cssRules[t])return t;i.deleteRule(t);try{i.insertRule(s,t)}catch{b||l.warn(`StyleSheet: illegal rule: 

`+s+`

See https://stackoverflow.com/q/20007992 for more info`),i.insertRule(this._deletedRulePlaceholder,t)}}else{var a=this._tags[t];v(a,"old rule at index `"+t+"` not found"),a.textContent=s}return t},e.deleteRule=function(t){if(typeof window>"u"){this._serverSheet.deleteRule(t);return}if(this._optimizeForSpeed)this.replaceRule(t,"");else{var s=this._tags[t];v(s,"rule at index `"+t+"` not found"),s.parentNode.removeChild(s),this._tags[t]=null}},e.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(t){return t&&t.parentNode.removeChild(t)}),this._tags=[]):this._serverSheet.cssRules=[]},e.cssRules=function(){var t=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(s,i){return i?s=s.concat(Array.prototype.map.call(t.getSheetForTag(i).cssRules,function(a){return a.cssText===t._deletedRulePlaceholder?null:a})):s.push(null),s},[])},e.makeStyleTag=function(t,s,i){s&&v(P(s),"makeStyleTag accepts only strings as second parameter");var a=document.createElement("style");this._nonce&&a.setAttribute("nonce",this._nonce),a.type="text/css",a.setAttribute("data-"+t,""),s&&a.appendChild(document.createTextNode(s));var _=document.head||document.getElementsByTagName("head")[0];return i?_.insertBefore(a,i):_.appendChild(a),a},x(r,[{key:"length",get:function(){return this._rulesCount}}]),r}();function v(r,e){if(!r)throw new Error("StyleSheet: "+e+".")}function p(r){for(var e=5381,n=r.length;n;)e=e*33^r.charCodeAt(--n);return e>>>0}var C=p,c=function(r){return r.replace(/\/style/gi,"\\/style")},y={};function B(r,e){if(!e)return"jsx-"+r;var n=String(e),t=r+n;return y[t]||(y[t]="jsx-"+C(r+"-"+n)),y[t]}function D(r,e){var n=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(e=c(e));var t=r+e;return y[t]||(y[t]=e.replace(n,r)),y[t]}function I(r,e){return e===void 0&&(e={}),r.map(function(n){var t=n[0],s=n[1];return f.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:e.nonce?e.nonce:void 0,dangerouslySetInnerHTML:{__html:s}})})}var z=function(){function r(n){var t=n===void 0?{}:n,s=t.styleSheet,i=s===void 0?null:s,a=t.optimizeForSpeed,_=a===void 0?!1:a;this._sheet=i||new N({name:"styled-jsx",optimizeForSpeed:_}),this._sheet.inject(),i&&typeof _=="boolean"&&(this._sheet.setOptimizeForSpeed(_),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var e=r.prototype;return e.add=function(t){var s=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(t.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(M,T){return M[T]=0,M},{}));var i=this.getIdAndRules(t),a=i.styleId,_=i.rules;if(a in this._instancesCounts){this._instancesCounts[a]+=1;return}var h=_.map(function(M){return s._sheet.insertRule(M)}).filter(function(M){return M!==-1});this._indices[a]=h,this._instancesCounts[a]=1},e.remove=function(t){var s=this,i=this.getIdAndRules(t).styleId;if(R(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var a=this._fromServer&&this._fromServer[i];a?(a.parentNode.removeChild(a),delete this._fromServer[i]):(this._indices[i].forEach(function(_){return s._sheet.deleteRule(_)}),delete this._indices[i]),delete this._instancesCounts[i]}},e.update=function(t,s){this.add(s),this.remove(t)},e.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},e.cssRules=function(){var t=this,s=this._fromServer?Object.keys(this._fromServer).map(function(a){return[a,t._fromServer[a]]}):[],i=this._sheet.cssRules();return s.concat(Object.keys(this._indices).map(function(a){return[a,t._indices[a].map(function(_){return i[_].cssText}).join(t._optimizeForSpeed?"":`
`)]}).filter(function(a){return!!a[1]}))},e.styles=function(t){return I(this.cssRules(),t)},e.getIdAndRules=function(t){var s=t.children,i=t.dynamic,a=t.id;if(i){var _=B(a,i);return{styleId:_,rules:Array.isArray(s)?s.map(function(h){return D(_,h)}):[D(_,s)]}}return{styleId:B(a),rules:Array.isArray(s)?s:[s]}},e.selectFromServer=function(){var t=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return t.reduce(function(s,i){var a=i.id.slice(2);return s[a]=i,s},{})},r}();function R(r,e){if(!r)throw new Error("StyleSheetRegistry: "+e+".")}var A=m.createContext(null);A.displayName="StyleSheetContext";function O(){return new z}function j(r){var e=r.registry,n=r.children,t=m.useContext(A),s=m.useState(function(){return t||e||O()}),i=s[0];return f.default.createElement(A.Provider,{value:i},n)}function w(){return m.useContext(A)}var F=f.default.useInsertionEffect||f.default.useLayoutEffect,W=typeof window<"u"?O():void 0;function L(r){var e=W||w();return e?typeof window>"u"?(e.add(r),null):(F(function(){return e.add(r),function(){e.remove(r)}},[r.id,String(r.dynamic)]),null):null}L.dynamic=function(r){return r.map(function(e){var n=e[0],t=e[1];return B(n,t)}).join(" ")},u.StyleRegistry=j,u.createStyleRegistry=O,u.style=L,u.useStyleRegistry=w},"./node_modules/styled-jsx/style.js":(S,u,o)=>{S.exports=o("./node_modules/styled-jsx/dist/index/index.js").style},"./data/primaryColors.json":S=>{"use strict";S.exports=JSON.parse('{"president":{"dem":["#3899E7","#A861B5","#84AD48","#DD7026","#697BB6","#3A766F","#6C4682","#F1A410","#89D0E0","#414E7D","#8DB0D9","#8D438B","#738754","#90E0AD","#B8983B","#46A695"],"rep":["#DE3535","#750C0C","#CD7575","#A80101","#9B7777","#470000"]},"house":{"dem":["#308CEF","#C00594","#84AD48","#F96419","#7D78C3","#14866D","#730069","#EEB900","#50CDB1","#68A9EF","#113F75"],"rep":["#DE3535","#6D0000","#EEB8B8","#BB2323","#EE6868","#952727"]},"other":{"dem":["#388FC2","#213F64","#839EBE","#2D5D98","#5F7887","#011521","#285F7F","#5D8CA9","#3A719C","#1F4C83","#3F82AA","#05334F"],"rep":["#DE3535","#750C0C","#CD7575","#A80101","#9B7777","#470000"]},"default":["#595959"],"season":{"2022":{"house":{"dem":[],"rep":[],"default":{"rep":"#D42F37","dem":"#009AF4"}},"other":{"dem":["#009AF4","#8567E6","#20A4A8","#1F69AB","#8A8FBF"],"rep":["#D42F37","#D77F2D","#A23D69","#BD84A3","#CE5883"],"default":{"rep":"#5C5C5C","dem":"#5C5C5C","yes":"#9E0084","no":"#2AA78B"}}},"2023":{"B":{"WI":{"G":["#CD7575","#6873AE"]}},"M":{"CH":{"W":["#5F7887","#839EBE"]}}},"2024":{"other":{"dem":["#0487E6","#034B8F","#00CBAC","#8370F1","#79AF2D","#F1A410","#278685","#8D43AB","#73718B","#8DB0D9","#B89846","#80DAEE","#738754","#90EDAD","#41D7ED"],"rep":["#DD2929","#8F1B1B","#F69696","#E38B39","#B84C96","#FF6000","#9F8383","#BC8604","#DEB703","#E26D99","#D8A084","#877354","#470000","#BB37FF","#8A3752"],"default":{"rep":"#959595","dem":"#959595","yes":"#F96419","no":"#645FAA","other":"#959595"}}}}}')}}]);
