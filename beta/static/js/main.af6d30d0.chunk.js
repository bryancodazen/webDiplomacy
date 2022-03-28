(this["webpackJsonpbeta-src"]=this["webpackJsonpbeta-src"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},11:function(e,t,a){"use strict";var n;!function(e){e.DESKTOP="DESKTOP",e.MOBILE="MOBILE",e.MOBILE_LANDSCAPE="MOBILE_LANDSCAPE",e.MOBILE_LG="MOBILE_LG",e.MOBILE_LG_LANDSCAPE="MOBILE_LG_LANDSCAPE",e.TABLET="TABLET",e.TABLET_LANDSCAPE="TABLET_LANDSCAPE"}(n||(n={})),t.a=n},128:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(27),o=a.n(c),s=a(163),l=a(171),u=a(45),d=a(73),p=(a(106),a(107),a(164)),b=a(16),j=a(9),h=a(39),O=a(170);!function(e){e.BOTTOM_LEFT="bottom-left",e.BOTTOM_RIGHT="bottom-right",e.TOP_LEFT="top-left",e.TOP_RIGHT="top-right"}(n||(n={}));var C=n,x=a(1),f={mobile:16,tablet:24,desktop:24},g=function(e){var t=e.children,a=e.position,n=Object(r.useMemo)((function(){switch(a){case C.BOTTOM_LEFT:return{bottom:f,left:f};case C.BOTTOM_RIGHT:return{bottom:f,right:f};case C.TOP_RIGHT:return{right:f,top:f};case C.TOP_LEFT:default:return{left:f,top:f}}}),[a]);return Object(x.jsx)(p.a,{sx:Object(b.a)({position:"absolute",zIndex:2},n),children:t})};g.defaultProps={position:C.TOP_LEFT};var m,v=g,L=u.c,E=a(54),w=a(36),y=a.n(w),A=a(37);!function(e){e.GAME_DATA="game/data",e.GAME_STATUS="game/status",e.GAME_OVERVIEW="game/overview"}(m||(m={}));var I,S=m,T=a(89),M=a.n(T).a.create({baseURL:"https://test.webdiplomacy.net/api.php",headers:{"Content-Type":"multipart/form-data"}}),B=function(e,t){return M.get("?route=".concat(e,"&").concat((a=t,Object.entries(a).reduce((function(e,t){var a=Object(j.a)(t,2),n=a[0],r=a[1];return r&&e.push("".concat(encodeURI(n),"=").concat(encodeURI(r))),e}),[]).join("&"))));var a},D={apiStatus:"idle",data:{msg:"",referenceCode:"",success:!1,data:{contextVars:{context:"",contextKey:""},currentOrders:[]}},error:null,overview:{alternatives:"",anon:"Yes",drawType:"draw-votes-public",excusedMissedTurns:4,gameOver:"No",members:[],minimumBet:5,name:"",pauseTimeRemaining:null,phase:"",phaseMinutes:14400,playerTypes:"",pot:35,potType:"",processStatus:"",processTime:null,season:"Spring",startTime:0,turn:0,user:{member:{bet:5,country:"Russia",countryID:1,excusedMissedTurns:0,missedPhases:0,newMessagesFrom:[],online:!1,orderStatus:{},status:"Playing",supplyCenterNo:4,timeLoggedIn:0,unitNo:4,userID:1,username:"",votes:[]}},variant:{id:1,mapID:1,name:"Classic",fullName:"Classic",description:"The standard Diplomacy map of Europe.",author:"Avalon Hill",countries:[],variantClasses:{drawMap:"Classic",adjudicatorPreGame:"Classic"},codeVersion:null,cacheVersion:null,coastParentIDByChildID:{76:8,77:8,78:32,79:32,80:20,81:20},coastChildIDsByParentID:{8:[76,77],32:[78,79],20:[80,81]},terrIDByName:null,supplyCenterCount:34,supplyCenterTarget:18},variantID:1,year:1901},status:{gameID:2,countryID:0,variantID:1,potType:"",turn:0,phase:"",gameOver:"No",pressType:"",phases:[],standoffs:[],occupiedFrom:[],votes:null,orderStatus:"",status:""}},k=Object(A.b)(S.GAME_DATA,function(){var e=Object(E.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(S.GAME_DATA,t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),_=Object(A.b)(S.GAME_OVERVIEW,function(){var e=Object(E.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(S.GAME_OVERVIEW,t);case 2:return a=e.sent,n=a.data.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(A.b)(S.GAME_STATUS,function(){var e=Object(E.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(S.GAME_STATUS,t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F=Object(A.c)({name:"game",initialState:D,reducers:{},extraReducers:function(e){e.addCase(k.pending,(function(e){e.apiStatus="loading"})).addCase(k.fulfilled,(function(e,t){e.apiStatus="succeeded",e.data=t.payload})).addCase(k.rejected,(function(e,t){e.apiStatus="failed",e.error=t.error.message})).addCase(_.pending,(function(e){e.apiStatus="loading"})).addCase(_.fulfilled,(function(e,t){e.apiStatus="succeeded",e.overview=t.payload})).addCase(_.rejected,(function(e,t){e.apiStatus="failed",e.error=t.error.message})).addCase(N.pending,(function(e){e.apiStatus="loading"})).addCase(N.fulfilled,(function(e,t){e.apiStatus="succeeded",e.status=t.payload})).addCase(N.rejected,(function(e,t){e.apiStatus="failed",e.error=t.error.message}))}}),R=function(e){return e.game.overview},P=F.reducer,G=a(32),V=a(165),H=a(166),U=a(167),W=a(168),z=a(154),Z=a(169),Y=function(e){var t=e.children,a=e.lineHeight,n=e.maxHeight,r=e.WebkitLineClamp;return Object(x.jsx)(p.a,{sx:{display:"-webkit-box",lineHeight:a,maxHeight:n,overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical",WebkitLineClamp:r,wordWrap:"break-word"},children:t})},K=a(11),J=a(23),Q=a(24),q={border:"none",fontSize:"0.7rem",p:"0 5px 0 0"},X=function(e){var t=e.alternatives,a=e.potNumber,n=e.season,r=e.title,i=e.year,c=Object(Q.a)(),o=Object(j.a)(c,1)[0],s=Object(J.a)(o),l=s===K.a.MOBILE_LANDSCAPE||s===K.a.MOBILE_LG_LANDSCAPE||s===K.a.MOBILE?260:320;return Object(x.jsx)(V.a,{children:Object(x.jsxs)(H.a,{"aria-label":"A table of game information",size:"small",sx:{width:l},children:[Object(x.jsx)(U.a,{children:Object(x.jsx)(W.a,{children:Object(x.jsx)(z.a,{sx:{border:"none",fontWeight:600,p:"2px 5px 5px 0"},children:Object(x.jsx)(Y,{lineHeight:"1.2rem",maxHeight:"2.4rem",WebkitLineClamp:2,children:r})})})}),Object(x.jsxs)(Z.a,{children:[Object(x.jsx)(W.a,{children:Object(x.jsxs)(z.a,{sx:q,children:["Pot: ",a," - ",n," ",i]})}),Object(x.jsx)(W.a,{children:Object(x.jsx)(z.a,{sx:q,children:t})})]})]})})},$=a(20),ee=a(3);!function(e){e[e.cancel=0]="cancel",e[e.draw=1]="draw",e[e.pause=2]="pause"}(I||(I={}));var te=I,ae=a(62),ne=a(160),re=a(8),ie=[{id:"power",label:"Power",icon:function(){var e=Object(h.a)();return Object(x.jsx)("svg",{width:"17",height:"16",viewBox:"0 0 17 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.70981 0.477386C1.78835 0.619928 1.82959 0.781129 1.82946 0.94512C1.82981 1.10363 1.79129 1.25965 1.71748 1.39864C1.64367 1.53763 1.53697 1.65507 1.40733 1.74V15H0.422124V1.74C0.288272 1.65169 0.179006 1.52891 0.105082 1.38376C0.0311585 1.23861 -0.0048749 1.07608 0.000529656 0.912187C0.00593421 0.748291 0.0525902 0.588672 0.135905 0.449046C0.219219 0.309419 0.336321 0.194598 0.47568 0.115885C0.615039 0.0371731 0.771851 -0.00271635 0.93068 0.000143651C1.08951 0.00300365 1.24488 0.0485146 1.38149 0.132196C1.51811 0.215878 1.63126 0.334845 1.70981 0.477386ZM6.82686 10.3877C3.67647 10.3877 2.34265 11.6935 2.34265 11.6935V2.12591C3.87882 0.511105 5.98034 0.288913 10.7745 2.00699C14.7654 3.44263 16.7615 1.84034 16.7615 1.84034C15.5 6.5 12.8518 6.80289 12.8518 6.80289C13.3353 8.67822 16.1636 11.7529 16.1636 11.7529C15.8415 11.8953 14.876 12.1089 14.1977 12.0729C12.8739 12.0034 11.8654 11.6305 10.8447 11.2531C9.68237 10.8233 8.50427 10.3877 6.82686 10.3877Z",fill:e.palette.primary.main})})},align:"left"},{id:"unitNo",label:"Units",icon:function(){var e=Object(h.a)();return Object(x.jsx)("svg",{width:"31",height:"16",viewBox:"0 0 30 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.96588 5.41579H14L9.71916 8.56579L11.2992 14L7 10.8684L2.68241 14L4.29921 8.54737L0 5.41579H5.07087L6.98163 0L8.96588 5.41579ZM28.3195 7.60486C28.8782 7.02312 29.3431 6.35499 29.6971 5.62524C30.0303 6.56852 30.09 7.58962 29.8693 8.56659C29.4904 10.1601 28.9394 10.5462 28.9394 10.5462C28.9274 10.1651 28.8906 9.78515 28.8292 9.40898C28.2569 10.2167 27.5751 10.9376 26.8041 11.5501C26.0815 12.1296 25.3093 12.6418 24.4967 13.0804C24.1235 13.3383 23.7874 13.6478 23.4979 14C23.2105 13.6483 22.8767 13.3388 22.506 13.0804C21.6934 12.6418 20.9212 12.1296 20.1986 11.5501C19.4276 10.9376 18.7458 10.2167 18.1735 9.40898C18.1122 9.78515 18.0753 10.1651 18.0633 10.5462C18.0633 10.5462 17.5123 10.1601 17.1334 8.56659C16.9105 7.59029 16.9678 6.56921 17.2988 5.62524C17.6527 6.35499 18.1176 7.02312 18.6763 7.60486C19.2836 8.05578 19.958 8.40421 20.6739 8.63679C20.195 8.92681 19.6233 9.01258 19.0827 8.87546C19.0827 8.87546 18.7315 8.86142 19.3445 9.38792C19.9317 9.99516 20.635 10.473 21.4109 10.7919C21.5608 10.8277 21.7163 10.8322 21.868 10.8049C22.0197 10.7776 22.1643 10.7192 22.2931 10.6332C22.422 10.5472 22.5323 10.4354 22.6175 10.3046C22.7026 10.1738 22.7608 10.0267 22.7884 9.87229C22.878 9.50726 22.9469 6.45359 22.9469 4.45994L21.5142 4.03172C21.4877 4.06765 21.451 4.09436 21.4091 4.10818C21.3672 4.12201 21.3221 4.12227 21.28 4.10894C21.2372 4.09511 21.1991 4.06938 21.1699 4.03465C21.1407 3.99993 21.1216 3.95758 21.1147 3.91238L20.7427 3.80006C20.7146 3.8358 20.6766 3.86222 20.6337 3.87596C20.5908 3.88971 20.5448 3.89017 20.5017 3.87728C20.4588 3.86468 20.4208 3.83915 20.3925 3.80406C20.3642 3.76897 20.347 3.72597 20.3432 3.68073L20.0264 3.58245C20.001 3.57517 19.9773 3.56284 19.9566 3.54618C19.9359 3.52951 19.9187 3.50883 19.9058 3.48534C19.893 3.46184 19.8849 3.436 19.882 3.40929C19.879 3.38258 19.8813 3.35554 19.8886 3.32973L20.0539 2.76814C20.0763 2.72192 20.1151 2.68607 20.1624 2.66783C20.2097 2.64959 20.262 2.65032 20.3088 2.66986L20.6256 2.76814C20.6538 2.7324 20.6918 2.70598 20.7347 2.69224C20.7776 2.67849 20.8235 2.67803 20.8667 2.69092C20.9091 2.70436 20.9466 2.73013 20.9748 2.76505C21.0029 2.79998 21.0204 2.84253 21.0251 2.88748L21.404 2.99979C21.4304 2.96387 21.4671 2.93716 21.5091 2.92333C21.551 2.90951 21.5961 2.90924 21.6382 2.92258C21.681 2.93518 21.719 2.96071 21.7473 2.9958C21.7756 3.03089 21.7928 3.07389 21.7966 3.11913L22.9606 3.46311V2.86642C22.6471 2.73621 22.3877 2.49902 22.2268 2.19543C22.066 1.89183 22.0136 1.54069 22.0787 1.20209C22.1438 0.863481 22.3223 0.558448 22.5837 0.339171C22.8451 0.119894 23.1731 0 23.5117 0C23.8502 0 24.1783 0.119894 24.4397 0.339171C24.7011 0.558448 24.8796 0.863481 24.9447 1.20209C25.0098 1.54069 24.9574 1.89183 24.7965 2.19543C24.6356 2.49902 24.3762 2.73621 24.0627 2.86642V3.46311L25.2268 3.11913C25.2306 3.07389 25.2478 3.03089 25.2761 2.9958C25.3043 2.96071 25.3424 2.93518 25.3852 2.92258C25.4273 2.90924 25.4724 2.90951 25.5143 2.92333C25.5562 2.93716 25.5929 2.96387 25.6194 2.99979L25.9982 2.88748C26.0029 2.84253 26.0205 2.79998 26.0486 2.76505C26.0768 2.73013 26.1143 2.70436 26.1567 2.69092C26.1998 2.67803 26.2458 2.67849 26.2887 2.69224C26.3316 2.70598 26.3696 2.7324 26.3977 2.76814L26.6939 2.62774C26.7192 2.62025 26.7458 2.61794 26.772 2.62095C26.7982 2.62397 26.8235 2.63224 26.8466 2.64529C26.8696 2.65834 26.8899 2.67592 26.9063 2.697C26.9226 2.71809 26.9347 2.74226 26.9419 2.76814L27.1003 3.34377C27.1077 3.36958 27.1099 3.39662 27.107 3.42333C27.104 3.45004 27.0959 3.47588 27.0831 3.49938C27.0703 3.52287 27.053 3.54355 27.0323 3.56022C27.0117 3.57688 26.9879 3.58921 26.9625 3.59649L26.6457 3.69477C26.6419 3.74001 26.6247 3.78301 26.5964 3.8181C26.5681 3.85319 26.5301 3.87872 26.4873 3.89132C26.4441 3.90421 26.3981 3.90375 26.3552 3.89C26.3123 3.87626 26.2744 3.84984 26.2462 3.8141L25.8742 3.92642C25.8674 3.97162 25.8483 4.01396 25.8191 4.04869C25.7898 4.08342 25.7517 4.10915 25.7089 4.12298C25.6669 4.13631 25.6218 4.13605 25.5798 4.12222C25.5379 4.1084 25.5012 4.08169 25.4747 4.04576L24.0421 4.47398L24.0429 4.5346C24.0704 6.52893 24.1118 9.52497 24.2005 9.88633C24.2281 10.0407 24.2863 10.1878 24.3715 10.3186C24.4566 10.4494 24.5669 10.5612 24.6958 10.6472C24.8246 10.7332 24.9693 10.7916 25.1209 10.8189C25.2726 10.8462 25.4281 10.8418 25.5781 10.8059C26.3539 10.4871 27.0572 10.0092 27.6444 9.40196C28.2575 8.8895 27.9062 8.8895 27.9062 8.8895C27.3657 9.02662 26.7939 8.94085 26.3151 8.65082C27.0342 8.41461 27.7111 8.0614 28.3195 7.60486ZM22.7088 1.11528C22.6659 1.22089 22.6438 1.33408 22.6438 1.44839C22.6414 1.5843 22.6707 1.71886 22.7294 1.84092C22.7881 1.96299 22.8744 2.06907 22.9813 2.15038C22.9951 1.70813 23.0777 1.44839 23.5117 1.44839C23.9456 1.44839 24.0421 1.74323 24.0421 2.15038C24.1439 2.06614 24.225 1.95878 24.2788 1.83688C24.3326 1.71498 24.3577 1.58194 24.352 1.44839C24.352 1.33408 24.3299 1.22089 24.287 1.11528C24.2441 1.00967 24.1812 0.913708 24.1019 0.832878C24.0225 0.752047 23.9284 0.687929 23.8248 0.644184C23.7211 0.600439 23.6101 0.577923 23.4979 0.577923C23.3857 0.577923 23.2747 0.600439 23.1711 0.644184C23.0674 0.687929 22.9733 0.752047 22.894 0.832878C22.8147 0.913708 22.7517 1.00967 22.7088 1.11528Z",fill:e.palette.primary.main})})},align:"center"},{id:"supplyCenterNo",label:"Centers",icon:function(){var e=Object(h.a)();return Object(x.jsxs)("svg",{width:"18",height:"16",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("path",{d:"M9.00005 17C13.4183 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4183 1 9.00005 1C4.58174 1 1 4.58172 1 9C1 13.4183 4.58174 17 9.00005 17Z",stroke:"black"}),Object(x.jsx)("path",{d:"M9.00324 13.3635C11.4132 13.3635 13.3668 11.4098 13.3668 8.99987C13.3668 6.5899 11.4132 4.63623 9.00324 4.63623C6.5933 4.63623 4.63965 6.5899 4.63965 8.99987C4.63965 11.4098 6.5933 13.3635 9.00324 13.3635Z",fill:e.palette.primary.main})]})},align:"center"},{id:"bet",label:"Bet",icon:function(){var e=Object(h.a)();return Object(x.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4.79785 11.8914V4H8.17207C10.5674 4 11.9729 5.36172 11.9729 7.88828C11.9729 10.4148 10.5619 11.8914 8.17207 11.8914H4.79785ZM7.84394 5.84297H7.1166V10.0484H7.84394C9.00332 10.0484 9.61035 9.34297 9.61035 7.88828C9.61035 6.55938 8.9541 5.84297 7.84394 5.84297Z",fill:e.palette.primary.main})})},align:"center"},{id:"excusedMissedTurns",label:"Delays",icon:function(){var e=Object(h.a)();return Object(x.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsx)("circle",{cx:"8",cy:"8",r:"7",stroke:e.palette.primary.main,strokeWidth:"2"}),Object(x.jsx)("path",{d:"M8 3.5L8 8.5L11 10.5",stroke:e.palette.primary.main,strokeWidth:"2"})]})},align:"center"}],ce=function(e){var t=e.countries,a=e.maxDelays,n=Object(h.a)(),i=Object(Q.a)(),c=Object(j.a)(i,1)[0],o=Object(J.a)(c),s=o===K.a.MOBILE_LANDSCAPE||o===K.a.MOBILE_LG_LANDSCAPE||o===K.a.MOBILE,l=Object(re.a)(z.a)((function(){var e,t=s?6:"6px 16px";return e={},Object(ee.a)(e,"&.".concat(ae.a.head),{borderBottom:0,lineHeight:"normal",padding:t}),Object(ee.a)(e,"&.".concat(ae.a.body),{borderBottom:0,padding:t}),e}));return Object(x.jsx)("div",{children:Object(x.jsxs)(H.a,{"aria-label":"country info table",size:"small",stickyHeader:!0,children:[Object(x.jsx)(U.a,{sx:{height:"55px"},children:Object(x.jsx)(W.a,{sx:{verticalAlign:"top"},children:ie.map((function(e){return Object(x.jsxs)(l,{align:e.align,children:[e.icon&&Object(x.jsx)(e.icon,{}),Object(x.jsx)(p.a,{sx:{fontSize:10,fontWeight:400},children:e.label.toUpperCase()})]},e.id)}))})}),Object(x.jsx)(Z.a,{children:t.map((function(e){return Object(x.jsxs)(r.Fragment,{children:[Object(x.jsx)(W.a,{children:ie.map((function(t){var r,i={color:n.palette.primary.main,fontWeight:400};switch(t.id){case"power":r=s?e.abbr.toUpperCase():e.power.toUpperCase(),i.color=e.color,i.fontWeight=700;break;case"excusedMissedTurns":r="".concat(e[t.id],"/").concat(a);break;default:r="".concat(e[t.id])}return Object(x.jsx)(l,{align:t.align,children:Object(x.jsx)("span",{style:i,children:r})},t.id)}))}),e.votes&&Object(x.jsx)(W.a,{children:Object(x.jsxs)(l,{sx:{fontSize:"70%",paddingTop:"0px !important",fontWeight:700},colSpan:ie.length,children:[Object.values(e.votes).reduce((function(e,t){return e+ +t}),0)>0&&Object(x.jsx)(p.a,{sx:{color:n.palette.action.disabledBackground,display:"inline-block",marginRight:1.5},children:"VOTED"}),Object.entries(e.votes).map((function(t){return t[1]&&Object(x.jsx)(ne.a,{size:"small",label:t[0].toUpperCase(),sx:{color:n.palette.secondary.main,background:e.color,fontWeight:900,fontSize:"90%",height:14,marginRight:1}},"".concat(e.power,"-vote-").concat(t[0]))}))]})})]},e.power)}))})]})})},oe=a(156),se=function(){return Object(x.jsx)("svg",{width:12,height:11,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{d:"m2 6.164 2.5 2.5 5.5-7.5",stroke:"#000",strokeWidth:"3"})})},le=a(162),ue=function(e){var t=e.children,a=e.color,n=e.disabled,r=e.onClick,i=e.startIcon,c=e.sx;return Object(x.jsx)(le.a,{sx:c,color:a,disabled:n,onClick:r,startIcon:i,variant:"contained",children:t})};ue.defaultProps={color:"primary",disabled:!1,onClick:void 0,startIcon:void 0,sx:void 0};var de,pe=ue,be={draw:"Draw",pause:"Pause",cancel:"Cancel"},je=function(e){var t=e.voteState,a=e.toggleVote,n=Object(Q.a)(),r=Object(j.a)(n,1)[0],i=Object(J.a)(r),c=i===K.a.MOBILE_LANDSCAPE||i===K.a.MOBILE_LG_LANDSCAPE||i===K.a.MOBILE,o=c?"10px 10px":"10px 18px",s=c?1:2,l=Object.entries(t).map((function(e){var t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(x.jsx)(pe,{sx:{p:o},color:r?"secondary":"primary",onClick:function(){return a(te[n])},startIcon:r?Object(x.jsx)(se,{}):"",children:be[n]},n)}));return Object(x.jsx)(oe.a,{direction:"row",spacing:s,alignItems:"center",children:l})},he=function(e){var t=e.countries,a=e.maxDelays,n=e.userCountry,i=r.useState(n.votes),c=Object(j.a)(i,2),o=c[0],s=c[1],l=Object(Q.a)(),u=Object(j.a)(l,1)[0],d=Object(J.a)(u);r.useEffect((function(){s(n.votes)}),[n]);var h=d===K.a.MOBILE_LANDSCAPE||d===K.a.MOBILE_LG_LANDSCAPE||d===K.a.MOBILE?"0 6px":"0 16px";return Object(x.jsxs)(p.a,{children:[Object(x.jsx)(p.a,{sx:{p:h},children:Object(x.jsx)(je,{toggleVote:function(e){var t=te[e],a=Object(b.a)(Object(b.a)({},o),{},Object(ee.a)({},t,!o[t]));s(a)},voteState:o})}),Object(x.jsx)(p.a,{sx:{m:"20px 5px 10px 0"},children:Object(x.jsx)(ce,{maxDelays:a,countries:[Object(b.a)(Object(b.a)({},n),{},{votes:o})].concat(Object($.a)(t))})})]})},Oe=function(e){var t=e.children,a=Object(Q.a)(),n=Object(j.a)(a,1)[0],r=Object(J.a)(n),i=r===K.a.MOBILE_LANDSCAPE||r===K.a.MOBILE_LG_LANDSCAPE||r===K.a.MOBILE,c=i?"0 6px":"0 16px",o=i?272:358;return Object(x.jsx)(p.a,{sx:{m:"20px 0 10px 0",p:c,width:o},children:t})};!function(e){e.PRESS="PRESS",e.ORDERS="ORDERS",e.INFO="INFO"}(de||(de={}));var Ce=de,xe={borderRadius:0,fontWeight:400,minWidth:0,p:"0 0 5px 0","&:hover":{background:"transparent"}},fe={borderRadius:0,borderBottom:"solid black 2px",fontWeight:600,minWidth:0,p:"0 0 5px 0","&:hover":{background:"transparent"}},ge=function(e){var t=e.currentTab,a=e.currentView,n=e.onChange;return Object(x.jsx)(le.a,{onClick:function(){return n(t)},sx:a===t?fe:xe,children:t})},me=function(e){var t=e.currentView,a=e.onChange,n=e.padding,r=e.tabGroup.map((function(e){return Object(x.jsx)(ge,{currentTab:e,currentView:t,onChange:a},e)}));return Object(x.jsx)(oe.a,{alignItems:"center",direction:"row",spacing:2,sx:{p:n},children:r})},ve=function(e){var t=e.children,a=e.currentView,n=e.onChange,r=e.padding,i=e.tabGroup;return Object(x.jsxs)(p.a,{children:[Object(x.jsx)(me,{currentView:a,onChange:n,padding:r,tabGroup:i}),t]})},Le=function(e){var t=e.currentTab,a=e.currentView,n=e.children;return Object(x.jsx)(p.a,{hidden:a!==t,id:t,"aria-labelledby":t,children:a===t&&Object(x.jsx)(p.a,{children:n})})},Ee=[Ce.PRESS,Ce.INFO],we=function(e){var t=e.alternatives,a=e.children,n=e.countries,i=e.excusedMissedTurns,c=e.potNumber,o=e.season,s=e.title,l=e.userCountry,u=e.year,d=Object(r.useState)(Ce.INFO),b=Object(j.a)(d,2),h=b[0],O=b[1],C=Object(Q.a)(),f=Object(j.a)(C,1)[0],g=Object(J.a)(f),m=g===K.a.MOBILE_LANDSCAPE||g===K.a.MOBILE_LG_LANDSCAPE||g===K.a.MOBILE?"0 6px":"0 16px";return Object(x.jsxs)(ve,{tabGroup:Ee,currentView:h,onChange:function(e){return O(e)},padding:m,children:[Object(x.jsx)(Le,{currentTab:Ce.INFO,currentView:h,children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)(p.a,{sx:{m:"20px 0 10px 0",p:m},children:Object(x.jsx)(X,{alternatives:t,potNumber:c,season:o,title:s,year:u})}),Object(x.jsx)(he,{countries:n,maxDelays:i,userCountry:l})]})}),Object(x.jsx)(Le,{currentTab:Ce.PRESS,currentView:h,children:Object(x.jsx)(Oe,{children:a})})]})},ye=a(158),Ae=function(e){var t=e.children,a=e.isOpen,n=e.onClose,i=e.popoverTrigger,c=Object(r.useRef)(null),o=Object(Q.a)(),s=Object(j.a)(o,1)[0],l=Object(J.a)(s),u=l===K.a.MOBILE_LANDSCAPE||l===K.a.MOBILE_LG_LANDSCAPE||l===K.a.MOBILE?32:40;return Object(x.jsxs)(p.a,{children:[Object(x.jsx)(p.a,{sx:{pt:"15px"},ref:c,children:i}),Object(x.jsxs)(ye.a,{anchorEl:c.current,anchorOrigin:{horizontal:"left",vertical:"center"},onClose:n,open:a,PaperProps:{style:{backgroundColor:"transparent",borderRadius:"3px 13px 13px 3px",boxShadow:"-5px 4px 6px -4px black"}},transformOrigin:{horizontal:"right",vertical:"center"},children:[Object(x.jsx)(p.a,{sx:{mt:"0px",position:"relative","&::before":{background:"linear-gradient(45deg, transparent 50%, white 50%)",content:'""',height:22,position:"absolute",right:3,top:u,transform:"rotate(45deg)",width:22}}}),Object(x.jsx)(p.a,{sx:{background:"linear-gradient(to right, white 97%, transparent 3%)",m:0,p:"16px 9px 16px 0"},children:t})]})]})};Ae.defaultProps={onClose:void 0};var Ie=Ae,Se=a(34),Te=function(e){var t=e.iconState,a=void 0===t?Se.a.INACTIVE:t;return Object(x.jsxs)("svg",{filter:"drop-shadow(-1px 12px 7px #636363)",height:42,width:42,viewBox:"6 3 42 42",xmlns:"http://www.w3.org/2000/svg",children:[a===Se.a.ACTIVE&&Object(x.jsx)("circle",{cx:27,cy:24,r:20,fill:"#000"}),Object(x.jsx)("g",{filter:a===Se.a.ACTIVE?"drop-shadow(.5px 2px 6px #404040)":"",fill:"#fff",children:Object(x.jsx)("path",{d:"M37.12 20.147h-4.293c-.88 0-1.651.77-1.651 1.651v4.294c0 .88.77 1.651 1.651 1.651h4.294c.88 0 1.651-.77 1.651-1.651v-4.294c0-.88-.77-1.651-1.651-1.651Zm-.22 4.073-1.21 1.211c-.11.11-.11.11-.22.11s-.22 0-.22-.11a.335.335 0 0 1 0-.44l.66-.66h-2.642c-.22 0-.33-.11-.33-.331 0-.22.11-.33.33-.33H35.8l-.55-.66a.335.335 0 0 1 0-.441c.11-.11.33-.11.44 0l1.21 1.21c.11.11.11.221 0 .441ZM20.718 20.147h-4.183c-.881 0-1.652.77-1.652 1.651v4.294c0 .88.77 1.651 1.652 1.651h4.293c.88 0 1.652-.77 1.652-1.651v-4.294c-.11-.88-.771-1.651-1.762-1.651Zm-.33 4.073h-2.642l.66.66c.11.11.11.331 0 .441-.11.11-.11.11-.22.11s-.22 0-.22-.11l-1.211-1.21a.335.335 0 0 1 0-.441l1.21-1.211c.11-.11.331-.11.441 0 .11.11.11.33 0 .44l-.66.66h2.642c.22 0 .33.11.33.33 0 .221-.22.331-.33.331ZM28.975 28.404h-4.293c-.88 0-1.651.77-1.651 1.651v4.294c0 .88.77 1.651 1.65 1.651h4.294c.881 0 1.652-.77 1.652-1.651v-4.294c0-.99-.77-1.651-1.652-1.651Zm-.66 4.403-1.211 1.211c-.11.11-.33.11-.44 0l-1.212-1.21c-.11-.11-.11-.11-.11-.22 0-.111 0-.221.11-.221.11-.11.33-.11.44 0l.661.66v-2.642c0-.22.11-.33.33-.33.22 0 .331.11.331.33v2.532l.66-.66c.11-.11.33-.11.44 0 .111.22.111.44 0 .55ZM28.975 12h-4.293c-.88 0-1.651.77-1.651 1.651v4.294c0 .88.77 1.651 1.65 1.651h4.294c.881 0 1.652-.77 1.652-1.651V13.65c0-.88-.77-1.651-1.652-1.651Zm-.66 3.523c-.11.11-.33.11-.44 0l-.661-.66v2.532c0 .22-.11.33-.33.33-.22 0-.33-.11-.33-.33v-2.533l-.661.66c-.11.111-.33.111-.44 0a.335.335 0 0 1 0-.44l1.21-1.21c.11-.11.33-.11.44 0l1.212 1.21c.11.11.11.11.11.22s-.11.22-.11.22Z"})}),Object(x.jsx)("defs",{children:Object(x.jsxs)("filter",{colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",height:52,id:"actionIcon-selected_svg__a",width:51.889,x:.883,y:0,children:[Object(x.jsx)("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),Object(x.jsx)("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),Object(x.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),Object(x.jsx)("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"})]})})]})};function Me(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Be={Russia:G.a.RUSSIA,Germany:G.a.GERMANY,Italy:G.a.ITALY,Austria:G.a.AUSTRIA,England:G.a.ENGLAND,France:G.a.FRANCE,Turkey:G.a.TURKEY},De={Russia:"RUS",Germany:"GER",Italy:"ITA",Austria:"AUS",England:"ENG",France:"FRA",Turkey:"TUR"},ke=function(){var e=Object(h.a)(),t=r.useState(!1),a=Object(j.a)(t,2),n=a[0],i=a[1],c=L(R),o=c.alternatives,s=c.excusedMissedTurns,l=c.members,u=c.name,d=c.pot,p=c.season,f=c.user,g=c.year,m=function(t){var a=Be[t.country];return Object(b.a)(Object(b.a)({},t),{},{abbr:De[t.country],color:e.palette[a].main,power:a,votes:{cancel:t.votes.includes(Me(te[te.cancel])),draw:t.votes.includes(Me(te[te.draw])),pause:t.votes.includes(Me(te[te.pause]))}})},E=[];l.forEach((function(e){e.userID!==f.member.userID&&E.push(m(e))}));var w=m(f.member),y=Object(x.jsx)(O.a,{onClick:function(){i(!0)},children:Object(x.jsx)(Te,{iconState:n?Se.a.ACTIVE:Se.a.INACTIVE})});return Object(x.jsx)(v,{position:C.TOP_RIGHT,children:Object(x.jsx)(Ie,{isOpen:n,onClose:function(){i(!1)},popoverTrigger:y,children:Object(x.jsx)(we,{alternatives:o,countries:E,excusedMissedTurns:s,potNumber:d,season:p,title:u,userCountry:w,year:g,children:null})})})},_e=r.lazy((function(){return Promise.all([a.e(4),a.e(3)]).then(a.bind(null,204))})),Ne=function(){return Object(x.jsxs)(r.Suspense,{fallback:Object(x.jsx)("div",{children:"Loading..."}),children:[Object(x.jsx)(_e,{}),Object(x.jsx)(ke,{})]})},Fe=function(){var e=new URLSearchParams(window.location.search).get("gameID");return Object(u.b)()(_({gameID:e})),Object(x.jsx)(p.a,{className:"App",children:Object(x.jsx)(Ne,{})})},Re=Object(A.a)({reducer:{game:P}});o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(u.a,{store:Re,children:Object(x.jsxs)(s.a,{theme:d.a,children:[Object(x.jsx)(l.a,{}),Object(x.jsx)(Fe,{})]})})}),document.getElementById("root"))},23:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(39),r=a(11);function i(e){var t=e.height,a=e.width,i=Object(n.a)();return a>=i.breakpoints.values.desktop?r.a.DESKTOP:a>=i.breakpoints.values.tabletLandscape&&t<=i.breakpoints.values.tablet?r.a.TABLET_LANDSCAPE:a>=i.breakpoints.values.mobileLgLandscape&&t<=i.breakpoints.values.mobileLg?r.a.MOBILE_LG_LANDSCAPE:a>=i.breakpoints.values.tablet&&t>=i.breakpoints.values.tabletLandscape?r.a.TABLET:a>=i.breakpoints.values.mobileLg&&t>=i.breakpoints.values.mobileLgLandscape?r.a.MOBILE_LG:a>=i.breakpoints.values.mobileLandscape?r.a.MOBILE_LANDSCAPE:r.a.MOBILE}},24:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(9),r=a(0);function i(){var e=function(){var e=window.visualViewport,t=e.height,a=e.width,n=window.visualViewport.scale;return{height:t=Math.round(t*n),width:a=Math.round(a*n),scale:n}},t=r.useState(e()),a=Object(n.a)(t,2),i=a[0],c=a[1],o=function(){c(e())};return r.useEffect((function(){return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}}),[]),[i,o]}},32:function(e,t,a){"use strict";var n;!function(e){e.FRANCE="France",e.AUSTRIA="Austria",e.ENGLAND="England",e.GERMANY="Germany",e.RUSSIA="Russia",e.ITALY="Italy",e.TURKEY="Turkey"}(n||(n={})),t.a=n},34:function(e,t,a){"use strict";var n;!function(e){e.NONE="none",e.SELECTED="selected",e.HOLD="hold",e.DISBANDED="disbanded",e.DISLODGED="dislodged",e.BUILD="build",e.ACTIVE="active",e.INACTIVE="inactive"}(n||(n={})),t.a=n},73:function(e,t,a){"use strict";var n=a(3),r=a(16),i=a(64),c="#000",o="#fff",s={backgroundColor:o,boxShadow:"0 0 2px 2px",color:c},l={backgroundColor:c,boxShadow:"0 0 2px 2px",color:o},u=1.2,d=Object(i.a)({breakpoints:{values:{mobile:0,mobileLandscape:600,mobileLg:414,mobileLgLandscape:896,tablet:834,tabletLandscape:1024,desktop:1500}},components:{MuiUseMediaQuery:{defaultProps:{noSsr:!0}},MuiButton:{styleOverrides:{root:{borderRadius:18,padding:"10px 18px"},containedPrimary:{"&:active":Object(r.a)({},s),"&:focus":Object(r.a)({},l),"&:hover":{backgroundColor:"#757575",color:o}},containedSecondary:{"&.Mui-disabled":{backgroundColor:"transparent",color:"#bababa"},"&:active":Object(r.a)({},s),"&:focus":Object(r.a)({},s),"&:hover":{backgroundColor:"#fafafa"}}}}},palette:Object(r.a)(Object(r.a)({action:{disabledBackground:"#b8b8b8",disabled:"#cacaca"},error:{main:"#f00",contrastText:o},primary:{main:c,contrastText:o},secondary:{main:o,contrastText:c}},{France:{main:"#2D5EE8",light:"#B9C9F7"},Austria:{main:"#FC4343",light:"#FEC0C0"},England:{main:"#E136EA",light:"#F5BCF8"},Germany:{main:"#F37C0E",light:"#FBD3AF"},Russia:{main:"#3F1BC1",light:"#BFB3EA"},Italy:{main:"#47D2A0",light:"#C2F0DF"},Turkey:{main:"#F3C400",light:"#FBEBAA"}}),{},{arrowColors:{moveOrderSelected:{main:"#FFFFFF"},move:{main:"#000000"},convoy:{main:"#2042B8"},moveFailed:{main:"#BB0000"},moveSupport:{main:"#F8F83D"},holdSupport:{main:"#3FC621"},retreat:{main:"#BD2894"}}}),typography:{button:{fontSize:12,fontWeight:700,lineHeight:u,textTransform:"none"}}});d.typography.body1={fontFamily:d.typography.fontFamily,fontSize:14,fontWeight:400,lineHeight:u},d.typography.h1=Object(n.a)({fontFamily:d.typography.fontFamily,fontSize:16,fontWeight:700,lineHeight:u},d.breakpoints.up("desktop"),{fontSize:20}),d.typography.h2={fontFamily:d.typography.fontFamily,fontSize:14,fontWeight:700,lineHeight:u},d.typography.label={fontFamily:d.typography.fontFamily,fontSize:10,fontWeight:400,lineHeight:1},t.a=d}},[[128,1,2]]]);
//# sourceMappingURL=main.af6d30d0.chunk.js.map