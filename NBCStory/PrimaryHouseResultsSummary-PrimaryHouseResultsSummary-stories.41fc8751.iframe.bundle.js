"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[6452],{"./components/PrimaryHouseResultsSummary/PrimaryHouseResultsSummary.stories.js":(O,t,s)=>{s.r(t),s.d(t,{BothWithNoUncalledRaces:()=>R,BothWithUncalledRaces:()=>N,NoWinners:()=>D,OnlyDemWinners:()=>W,OnlyDemWinsWithUncalled:()=>f,OnlyRepWinners:()=>x,OnlyRepWinsWithUncalled:()=>_,__namedExportsOrder:()=>C,default:()=>P});var r=s("./node_modules/next/dist/compiled/react/index.js"),e=s("./node_modules/styled-jsx/style.js"),i=s.n(e),u=s("./node_modules/prop-types/index.js"),d=s.n(u),c=s("./node_modules/classnames/index.js"),l=s.n(c),p=s("./components/HouseResultsSummary/HouseResultsSummaryItem.js"),m=s("./helpers/pluralize.js"),h=s("./components/props/stateResults.js"),E=s("./helpers/constants.js"),g=r.createElement;function o({results:b}){if(!b.length)return null;const M=v=>(0,m.default)("race",v);return g(r.Fragment,null,g(i(),{id:"2035315013"},[".houseResultsSummaryItem.house-results-summary__item{padding:5px 10px;line-height:1;display:block;text-align:left;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;}",".house-results-summary__item .houseResultsSummaryItem__checkmark{padding:0.375rem;}","@media screen and (min-width:758px){.house-results-summary.jsx-2035315013{display:grid;grid-gap:8px;grid-template-columns:repeat(2,minmax(0,max-content));}.houseResultsSummaryItem.house-results-summary__item{-webkit-flex:0;-ms-flex:0;flex:0;min-width:280px;}}"]),g("div",{"data-testid":"house-results-summary",className:"jsx-2035315013 white df mh-auto mt4 tc ttu founders-cond f6 justify-center flex-wrap house-results-summary"},b.map(({party:v,bgClass:I,electionType:T,runoffs:B,total:j,winners:S})=>{const U=B+S,A=T===E.ELECTION_TYPE_CODES.JUNGLE_PRIMARY?"":v.toUpperCase();return g(p.default,{classes:l()(`flex-1 flex-none-m ${I} white mb2 mb0-m house-results-summary__item`,{"has-checkmark":U>0}),showCheckmark:U>0,key:`horseRaceItem--${v}`},U," / ",j," ",A," House ",M(j)," ","called")})))}o.propTypes={results:d().arrayOf(h.primaryResultsSummary).isRequired};const n=o,y=JSON.parse('{"noWinners":[{"party":"dem","results":[],"displayName":"","bgClass":"bg-0471E6","runoffs":0,"winners":0,"total":32},{"party":"gop","results":[],"displayName":"","bgClass":"bg-DE3535","runoffs":0,"winners":0,"total":38}],"onlyGopWins":[{"party":"dem","results":[],"displayName":"","bgClass":"bg-0471E6","runoffs":0,"winners":0,"total":32},{"party":"gop","results":[],"displayName":"","bgClass":"bg-DE3535","runoffs":0,"winners":38,"total":38}],"onlyDemWins":[{"party":"dem","results":[],"displayName":"","bgClass":"bg-0471E6","runoffs":0,"winners":32,"total":32},{"party":"gop","results":[],"displayName":"","bgClass":"bg-DE3535","runoffs":0,"winners":0,"total":38}],"onlyGopWinsWithUncalled":[{"party":"dem","results":[],"displayName":"","bgClass":"bg-0471E6","runoffs":0,"winners":0,"total":32},{"party":"gop","results":[],"displayName":"","bgClass":"bg-DE3535","runoffs":0,"winners":20,"total":38}],"onlyDemWinsWithUncalled":[{"party":"dem","results":[],"displayName":"","bgClass":"bg-0471E6","runoffs":0,"winners":30,"total":32},{"party":"gop","results":[],"displayName":"","bgClass":"bg-DE3535","runoffs":0,"winners":0,"total":38}],"bothWinsWithUncalled":[{"party":"dem","results":[],"displayName":"","bgClass":"bg-0471E6","runoffs":3,"winners":15,"total":32},{"party":"gop","results":[],"displayName":"","bgClass":"bg-DE3535","runoffs":2,"winners":18,"total":38}],"bothWinsNoUncalled":[{"party":"dem","results":[],"displayName":"","bgClass":"bg-0471E6","runoffs":2,"winners":30,"total":32},{"party":"gop","results":[],"displayName":"","bgClass":"bg-DE3535","runoffs":0,"winners":38,"total":38}]}');var a=r.createElement;const P={component:n,title:"Global Components/Horse Races/House"},D=()=>a("div",{className:"ma6"},a(n,{results:y.noWinners}));D.displayName="NoWinners";const W=()=>a("div",{className:"ma6"},a(n,{results:y.onlyDemWins}));W.displayName="OnlyDemWinners";const x=()=>a("div",{className:"ma6"},a(n,{results:y.onlyGopWins}));x.displayName="OnlyRepWinners";const f=()=>a("div",{className:"ma6"},a(n,{results:y.onlyDemWinsWithUncalled}));f.displayName="OnlyDemWinsWithUncalled";const _=()=>a("div",{className:"ma6"},a(n,{results:y.onlyGopWinsWithUncalled}));_.displayName="OnlyRepWinsWithUncalled";const N=()=>a("div",{className:"ma6"},a(n,{results:y.bothWinsWithUncalled}));N.displayName="BothWithUncalledRaces";const R=()=>a("div",{className:"ma6"},a(n,{results:y.bothWinsNoUncalled}));R.displayName="BothWithNoUncalledRaces";const C=["NoWinners","OnlyDemWinners","OnlyRepWinners","OnlyDemWinsWithUncalled","OnlyRepWinsWithUncalled","BothWithUncalledRaces","BothWithNoUncalledRaces"]},"./components/Checkmark.js":(O,t,s)=>{s.r(t),s.d(t,{default:()=>E});var r=s("./node_modules/styled-jsx/style.js"),e=s.n(r),i=s("./node_modules/classnames/index.js"),u=s.n(i),d=s("./node_modules/next/dist/compiled/react/index.js"),c=s("./node_modules/prop-types/index.js"),l=s.n(c),p=s("./node_modules/react-i18next/dist/es/index.js"),m=d.createElement;const h=({t:g,color:o,height:n,hasTransparentBackground:y,width:a,nonpartisanWinner:P,addMargin:D,shouldDisplay:W,hideOnMobile:x=!1,verticalAlign:f,className:_})=>{const R=y?"transparent":P?"#FFD60C":"#fff",C=u()({ml1:D,dib:W&&!x,"dib-m":W&&x});return m("span",{"data-test":"checkmark-wrapper",className:e().dynamic([["1491606757",[R,n||a,a,f,o]]])+" "+(_||"")},m(e(),{id:"1491606757",dynamic:[R,n||a,a,f,o]},[`.checkmark.__jsx-style-dynamic-selector{background-color:${R};height:${n||a};width:${a};vertical-align:${f};stroke:${o};}`]),m("svg",{"data-test":"checkmark","data-testid":"checkmark",viewBox:"0 0 14 14",strokeWidth:"2",role:"img","aria-label":g("Winner"),className:e().dynamic([["1491606757",[R,n||a,a,f,o]]])+` checkmark dn ${C}`},m("path",{fill:"none",d:"M12,3.5l-6.81,7L2,7.8",className:e().dynamic([["1491606757",[R,n||a,a,f,o]]])})))};h.displayName="Checkmark",h.propTypes={color:l().string,height:l().string,addMargin:l().bool,nonpartisanWinner:l().bool,width:l().string,shouldDisplay:l().bool,hideOnMobile:l().bool,verticalAlign:l().oneOf(["bottom","top","middle","unset","baseline"]),hasTransparentBackground:l().bool,className:l().string},h.defaultProps={color:"#2A2A2A",height:null,addMargin:!0,nonpartisanWinner:!1,width:"20px",shouldDisplay:!1,hideOnMobile:!1,verticalAlign:"bottom",hasTransparentBackground:!1,className:""};const E=(0,p.withTranslation)()(h)},"./components/HouseResultsSummary/HouseResultsSummaryItem.js":(O,t,s)=>{s.r(t),s.d(t,{default:()=>m});var r=s("./node_modules/styled-jsx/style.js"),e=s.n(r),i=s("./node_modules/next/dist/compiled/react/index.js"),u=s("./node_modules/prop-types/index.js"),d=s.n(u),c=s("./components/Checkmark.js"),l=i.createElement;function p({classes:h="",children:E,showCheckmark:g}){const o="4px";return l(i.Fragment,null,l(e(),{id:"3088610636"},[`.houseResultsSummaryItem{margin-left:${o};margin-right:${o};-webkit-flex:1;-ms-flex:1;flex:1;}`,".houseResultsSummaryItem.houseResultsSummaryItem--winner{height:52px;}",".houseResultsSummaryItem__checkmark{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;left:0;}",".houseResultsSummaryItem__checkmark+.houseResultsSummaryItem__text{padding-left:1.5em;}","@media all and (min-width:758px){.houseResultsSummaryItem{min-width:180px;-webkit-flex:0;-ms-flex:0;flex:0;}.houseResultsSummaryItem.houseResultsSummaryItem--winner{height:auto;}}"]),l("div",{className:`jsx-3088610636 ml2 mr2 pv2 houseResultsSummaryItem relative justify-center items-center df ${h}`},g&&l("div",{className:"jsx-3088610636 check h-100 tc bg-FFD60C houseResultsSummaryItem__checkmark ph2"},l(c.default,{shouldDisplay:!0,nonpartisanWinner:!0,width:"20px",addMargin:!1})),l("div",{className:"jsx-3088610636 houseResultsSummaryItem__text"},E)))}p.propTypes={classes:d().string},p.defaultProps={classes:""};const m=p},"./components/props/stateResults.js":(O,t,s)=>{s.r(t),s.d(t,{candidateResults:()=>i,districtResults:()=>u,primaryResultsSummary:()=>d});var r=s("./node_modules/prop-types/index.js"),e=s.n(r);const i=e().shape({isWinner:e().bool.isRequired}),u=e().shape({electionType:e().string.isRequired,name:e().string.isRequired,percentIn:e().number.isRequired,candidateResults:e().arrayOf(i).isRequired,raceHasWinner:e().bool.isRequired,raceGoesToRunoff:e().bool.isRequired}),d=e().shape({displayName:e().string.isRequired,runoffs:e().number.isRequired,total:e().number.isRequired,winners:e().number.isRequired,results:e().arrayOf(u).isRequired})},"./helpers/pluralize.js":(O,t,s)=>{s.r(t),s.d(t,{default:()=>d});var r=s("./node_modules/lodash.get/index.js"),e=s.n(r);const i=[{singular:"seat",plural:"seats"},{singular:"race",plural:"races"},{singular:"is",plural:"are"},{singular:"wins",plural:"win"},{singular:"advances",plural:"advance"},{singular:"day",plural:"days"},{singular:"delegate",plural:"delegates"},{singular:"primary",plural:"primaries"},{singular:"race",plural:"races"},{singular:"candidate",plural:"candidates"},{singular:"republican",plural:"republicans"},{singular:"democrat",plural:"democrats"},{singular:"advances",plural:"advance"},{singular:"municipality",plural:"municipalities"},{singular:"legislative district",plural:"legislative districts"},{singular:"congressional district",plural:"congressional districts"},{singular:"township",plural:"townships"},{singular:"district",plural:"districts"},{singular:"ward",plural:"wards"},{singular:"county",plural:"counties"},{singular:"superdelegate",plural:"superdelegates"}],d=(c,l)=>{if(l===1)return c;const p=i.find(({singular:m})=>m===c);return e()(p,"plural",c)}}}]);
