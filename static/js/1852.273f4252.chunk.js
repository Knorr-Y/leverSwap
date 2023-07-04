"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1852],{21852:function(e,n,t){t.r(n),t.d(n,{default:function(){return mn}});var r,i=t(98985),o=t(3884),a=t(95744),c=t(29439),l=t(13746),d=t(55644),s=t(92311),u=t(71233),p=t(52015),h=t(31865),f=t(74165),m=t(15861),x=t(58600),g=t(49406),v=t(37881),w=i.default.div.withConfig({componentId:"sc-oqttp6-0"})(["display:flex;width:100%;justify-content:flex-end;"]),j=i.default.div.withConfig({componentId:"sc-oqttp6-1"})(["position:relative;width:100%;overflow-x:hidden;max-width:100%;height:390px;@media only screen and (min-width:","){max-width:600px;}"],(function(e){var n=e.theme;return"".concat(n.breakpoint.md,"px")})),b=(0,i.default)(g.a.div).withConfig({componentId:"sc-oqttp6-2"})(["display:flex;justify-content:center;padding:4px 12px 32px;position:absolute;will-change:transform;width:calc(100%);height:calc(100%);@media screen and (min-width:","px){padding:4px 32px 32px;}"],(function(e){return e.theme.breakpoint.md})),y=i.default.div.withConfig({componentId:"sc-oqttp6-3"})(["align-items:center;color:",";cursor:pointer;display:none;user-select:none;height:calc(100%);padding:4px 0 32px;@media only screen and (min-width:","){display:flex;}:hover{opacity:",";}"],(function(e){return e.theme.textPrimary}),(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")}),(function(e){return e.theme.opacity.hover})),C=800,k=function(e){var n=e.children,t=e.activeIndex,r=e.toggleNextSlide,i=(0,u.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.length;return(0,s.ef)(e,t)}),[n]),o=(0,u.useCallback)((function(e,n,t){return(0,s.E)(e,n,t,i)}),[i]),a=(0,g.useSprings)(n.length,(function(e){return{x:(e<n.length-1?e:-1)*C}})),l=(0,c.Z)(a,2),d=l[0],p=l[1],h=(0,u.useRef)([0,1]),k=(0,u.useCallback)((function(e,t){var r=i(Math.floor(e/C)%n.length),a=t<0?n.length-2:1;p((function(i){var c=o(i,r,a),l=o(i,h.current[0],h.current[1]),d=(0,s.Z1)(r,a,c,n.length,e);return{x:-e%(C*n.length)+C*d,immediate:t<0?l>c:l<c,config:{tension:250,friction:30}}})),h.current=[r,a]}),[i,o,p,n.length]),z=(0,u.useRef)(0);(0,u.useEffect)((function(){k(t*C,z.current)}),[t,k]);var I=(0,u.useCallback)((function(e){z.current=e,r(e)}),[r]);return(0,u.useEffect)((function(){var e=setInterval((0,m.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I(1);case 1:case"end":return e.stop()}}),e)}))),7e3);return function(){clearInterval(e)}}),[I,t]),(0,v.jsxs)(w,{children:[(0,v.jsx)(y,{onClick:function(){return I(-1)},children:(0,v.jsx)(x.wy,{width:"16px",height:"16px"})}),(0,v.jsx)(j,{children:d.map((function(e,t){var r=e.x;return(0,v.jsx)(b,{style:{x:r},children:n[t]},t)}))}),(0,v.jsx)(y,{onClick:function(){return I(1)},children:(0,v.jsx)(x.XC,{width:"16px",height:"16px"})})]})},z=function(e){var n=e.children;return(0,v.jsx)(k,{activeIndex:0,toggleNextSlide:function(){},children:[n]})},I=t(93433),T=t(4942),S=t(50881),H=t(96253),Z=t(83143),P=t(83414),F=t(72249),E=t(96476),N=i.default.div.withConfig({componentId:"sc-1j367rv-0"})(["width:100%;position:relative;border-radius:21px;cursor:pointer;border:1px solid transparent;transition-property:border-color;transition-duration:",";transition-timing-function:",";:hover{border:1px solid ",";}::after{content:'';opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;border-radius:21px;z-index:-1;box-shadow:",";transition-property:opacity;transition-duration:",";transition-timing-function:",";}:hover::after{opacity:1;}"],(function(e){return e.theme.transition.duration.fast}),(function(e){return e.theme.transition.timing.inOut}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.deepShadow}),(function(e){return e.theme.transition.duration.fast}),(function(e){return e.theme.transition.timing.inOut})),D=i.default.div.withConfig({componentId:"sc-1j367rv-1"})(["position:relative;background-image:",";background-size:cover;background-position:center;"],(function(e){var n=e.src;return"url(".concat(n,")")})),O=i.default.div.withConfig({componentId:"sc-1j367rv-2"})(["position:relative;animation:"," 1.5s infinite;animation-fill-mode:both;background:linear-gradient( to left,"," 25%,"," 50%,"," 75% );will-change:background-position;background-size:400%;"],H.gz,(function(e){return e.theme.backgroundInteractive}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.backgroundInteractive})),X=i.default.div.withConfig({componentId:"sc-1j367rv-3"})(["position:relative;display:flex;flex:1;align-items:center;flex-direction:column;gap:8px;height:202px;justify-content:center;padding:0 40px;z-index:1;"]),M=i.default.div.withConfig({componentId:"sc-1j367rv-4"})(["display:inline;vertical-align:text-bottom;margin-left:2px;"]),V=i.default.div.withConfig({componentId:"sc-1j367rv-5"})(["display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-align:center;max-height:56px;"]),_=(0,i.default)(Z.X).withConfig({componentId:"sc-1j367rv-6"})(["width:50%;"]),B=i.default.div.withConfig({componentId:"sc-1j367rv-7"})(["background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.08));bottom:0px;left:0px;position:absolute;right:0px;top:0px;z-index:0;@supports (-moz-appearance:none){bottom:-1px;}"]),L=i.default.img.withConfig({componentId:"sc-1j367rv-8"})(["width:86px;height:86px;background:",";border:2px solid ",";border-radius:100px;"],(function(e){return e.theme.accentTextLightPrimary}),(function(e){return e.theme.accentTextLightPrimary})),A=i.default.div.withConfig({componentId:"sc-1j367rv-9"})(["width:86px;height:86px;border-radius:100px;animation:"," 1.5s infinite;animation-fill-mode:both;background:linear-gradient( to left,"," 25%,"," 50%,"," 75% );will-change:background-position;background-size:400%;"],H.gz,(function(e){return e.theme.backgroundInteractive}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.backgroundInteractive})),G=(0,i.default)(Z.X).withConfig({componentId:"sc-1j367rv-10"})(["width:50px;"]),R=i.default.div.withConfig({componentId:"sc-1j367rv-11"})(["display:flex;align-items:center;gap:6px;"]),q=i.default.div.withConfig({componentId:"sc-1j367rv-12"})([""]),W=i.default.div.withConfig({componentId:"sc-1j367rv-13"})(["display:grid;flex:1;gap:8px;grid-template-columns:auto auto auto;padding:16px 16px 20px;"]),U=i.default.img.withConfig({componentId:"sc-1j367rv-14"})(["width:20px;height:20px;"]),Y=i.default.div.withConfig({componentId:"sc-1j367rv-15"})(["display:flex;flex-direction:column;background-color:",";border:1px solid ",";border-radius:20px;overflow:hidden;height:100%;",":nth-child(3n-1),",":nth-child(3n-1){justify-self:center;}",":nth-child(3n),",":nth-child(3n){justify-self:right;}@media (max-width:","px) or ((min-width:","px) and (max-width:880px)){","{display:none;}","{justify-self:left !important;}","{padding:0 20px;}}"],(function(e){return e.theme.backgroundSurface}),(function(e){return e.theme.backgroundOutline}),R,G,R,G,(function(e){return e.theme.breakpoint.xs}),(function(e){return e.theme.breakpoint.sm}),q,R,X),J=function(e){var n=e.marketplace,t=e.floorInEth,r=e.listings;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(R,{children:[(0,v.jsx)(U,{src:"/nft/svgs/marketplaces/".concat(n.toLowerCase(),"-grey.svg"),alt:"".concat(n," icon")}),(0,v.jsx)(q,{children:(0,v.jsx)(E.T.BodySmall,{color:"textSecondary",children:n})})]}),(0,v.jsx)(R,{children:(0,v.jsx)(E.T.BodySmall,{color:"textSecondary",children:Number(t)>0?"".concat((0,S.dZ)(t,S.sw.NFTTokenFloorPriceTrailingZeros)," ETH"):"-"})}),(0,v.jsx)(R,{children:(0,v.jsx)(E.T.BodySmall,{color:"textSecondary",children:Number(r)>0?r:"None"})})]})},K=[F.Fz.Opensea,F.Fz.X2Y2,F.Fz.LooksRare],Q=(r={},(0,T.Z)(r,F.Fz.Opensea,"OpenSea"),(0,T.Z)(r,F.Fz.X2Y2,"X2Y2"),(0,T.Z)(r,F.Fz.LooksRare,"LooksRare"),r),$=function(e){var n,t,r=e.collection,i=e.onClick,o=(0,P.K)(null!==(n=r.address)&&void 0!==n?n:""),a=o.data;return o.loading?(0,v.jsx)(re,{}):(0,v.jsx)(N,{children:(0,v.jsxs)(Y,{onClick:i,children:[(0,v.jsx)(te,{collection:r}),(0,v.jsx)(W,{children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(R,{children:[(0,v.jsx)(x.pD,{width:"20",height:"20"}),(0,v.jsx)(q,{children:(0,v.jsx)(E.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,v.jsx)(R,{children:r.floor&&(0,v.jsxs)(E.T.SubHeaderSmall,{color:"userThemeColor",children:[(0,s.Nd)(r.floor)," ETH Floor"]})}),(0,v.jsx)(R,{children:(0,v.jsxs)(E.T.SubHeaderSmall,{color:"userThemeColor",children:[null===(t=a.marketplaceCount)||void 0===t?void 0:t.reduce((function(e,n){return e+n.count}),0)," Listings"]})}),K.map((function(e){var n,t=null===(n=a.marketplaceCount)||void 0===n?void 0:n.find((function(n){return n.marketplace===e}));return t?(0,v.jsx)(J,{marketplace:Q[e],listings:t.count,floorInEth:t.floorPrice},"CarouselCard-key-".concat(r.address,"-").concat(t.marketplace)):null}))]})})]})})},ee=function(){return(0,v.jsx)(v.Fragment,{children:(0,I.Z)(Array(12)).map((function(e){return(0,v.jsx)(G,{},e)}))})},ne=(0,i.default)(E.T.MediumHeader).withConfig({componentId:"sc-1j367rv-16"})(["display:inline;vertical-align:text-bottom;line-height:28px;"]),te=function(e){var n,t=e.collection;return(0,v.jsxs)(D,{src:null!==(n=t.bannerImageUrl)&&void 0!==n?n:"",children:[(0,v.jsxs)(X,{children:[(0,v.jsx)(L,{src:t.imageUrl}),(0,v.jsxs)(V,{children:[(0,v.jsx)(ne,{color:"accentTextLightPrimary",fontWeight:"500",children:t.name}),t.isVerified&&(0,v.jsx)(M,{children:(0,v.jsx)(x.SA,{width:"24px",height:"24px"})})]})]}),(0,v.jsx)(B,{})]})},re=function(e){var n=e.collection;return(0,v.jsx)(N,{children:(0,v.jsxs)(Y,{children:[n?(0,v.jsx)(te,{collection:n}):(0,v.jsxs)(O,{children:[(0,v.jsxs)(X,{children:[(0,v.jsx)(A,{}),(0,v.jsx)(_,{})]}),(0,v.jsx)(B,{})]}),(0,v.jsx)(W,{children:(0,v.jsx)(ee,{})})]})})},ie=i.default.div.withConfig({componentId:"sc-1cwmkpz-0"})(["display:flex;justify-content:center;width:100%;padding-top:22px;position:relative;@media only screen and (min-width:","){padding:32px 16px;}"],(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),oe=i.default.div.withConfig({componentId:"sc-1cwmkpz-1"})(["position:absolute;top:-96px;left:0;right:0;bottom:0;"]),ae=(0,i.default)(oe).withConfig({componentId:"sc-1cwmkpz-2"})(["transform:translate3d(0,0,0) scaleY(1.1);background-image:",";filter:blur(62px);opacity:",";"],(function(e){return"url(".concat(e.backgroundImage,")")}),(function(e){return e.theme.darkMode?.3:.2})),ce=(0,i.default)(oe).withConfig({componentId:"sc-1cwmkpz-3"})(["background:",";"],(function(e){var n=e.theme;return"linear-gradient(".concat((0,h.j)(10,n.userThemeColor),", transparent)")})),le=i.default.div.withConfig({componentId:"sc-1cwmkpz-4"})(["display:flex;flex-direction:row;width:100%;height:100%;gap:36px;max-width:",";justify-content:space-between;z-index:2;@media only screen and (max-width:","){flex-direction:column;height:100%;gap:14px;margin-top:4px;margin-bottom:6px;}"],(function(e){return e.theme.maxWidth}),(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),de=i.default.div.withConfig({componentId:"sc-1cwmkpz-5"})(["display:flex;max-width:500px;font-weight:500;font-size:72px;line-height:88px;align-self:center;flex-shrink:0;padding-bottom:32px;color:",";@media only screen and (max-width:","){font-size:48px;line-height:67px;}@media only screen and (max-width:","){font-size:36px;line-height:50px;}@media only screen and (max-width:","){line-height:43px;text-align:center;padding-bottom:16px;br{display:none;}}@media only screen and (max-width:550px){font-size:28px;line-height:34px;padding-bottom:0;br{display:unset;}}"],(function(e){return e.theme.textPrimary}),(function(e){var n=e.theme;return"".concat(n.breakpoint.lg,"px")}),(function(e){var n=e.theme;return"".concat(n.breakpoint.md,"px")}),(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),se=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],ue=function(){var e=(0,p.s0)(),n=(0,d.S)(5+se.length,l._u.Day).data,t=(0,u.useMemo)((function(){return null===n||void 0===n?void 0:n.filter((function(e){return e.address&&!se.includes(e.address)})).slice(0,5)}),[n]),r=(0,u.useState)(0),i=(0,c.Z)(r,2),o=i[0],a=i[1],h=(0,u.useCallback)((function(e){t&&a((function(n){return(0,s.ef)(n+e,t.length)}))}),[t]),f=null===t||void 0===t?void 0:t[o];return(0,v.jsxs)(ie,{children:[f?f.bannerImageUrl?(0,v.jsx)(ae,{backgroundImage:f.bannerImageUrl}):(0,v.jsx)(ce,{}):null,(0,v.jsxs)(le,{children:[(0,v.jsxs)(de,{children:["Better prices. ",(0,v.jsx)("br",{}),"More listings."]}),t?(0,v.jsx)(k,{activeIndex:o,toggleNextSlide:h,children:t.map((function(n){return(0,v.jsx)($,{collection:n,onClick:function(){return e("/nfts/collection/".concat(n.address))}},n.address)}))}):(0,v.jsx)(z,{children:(0,v.jsx)(re,{})})]})]})},pe=t(1413),he=t(49815),fe=t(80989),me=t(25618),xe=t(61018),ge=t(83138),ve=t(67917),we=(t(21844),t(30473),i.default.div.withConfig({componentId:"sc-1qdt28z-0"})(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"])),je=(0,i.default)(we).withConfig({componentId:"sc-1qdt28z-1"})(["display:flex;padding:14px 0px 14px 8px;align-items:center;"]),be=(0,i.default)(we).withConfig({componentId:"sc-1qdt28z-2"})(["margin-left:8px;"]),ye=(0,i.default)(me.Tv.SubHeader).withConfig({componentId:"sc-1qdt28z-3"})(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),Ce=(0,i.default)(me.Tv.SubHeaderSmall).withConfig({componentId:"sc-1qdt28z-4"})(["color:",";overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"],(function(e){var n=e.theme;return"".concat(n.textPrimary)})),ke=i.default.div.withConfig({componentId:"sc-1qdt28z-5"})(["height:36px;width:36px;border-radius:36px;background:",";background-size:cover;background-position:center;flex-shrink:0;"],(function(e){var n=e.src,t=e.theme;return n?"url(".concat(n,")"):t.backgroundModule})),ze=i.default.div.withConfig({componentId:"sc-1qdt28z-6"})(["display:flex;color:",";justify-content:flex-end;align-items:center;gap:2px;"],(function(e){var n=e.theme;return e.change>=0?n.accentSuccess:n.accentFailure})),Ie=i.default.div.withConfig({componentId:"sc-1qdt28z-7"})(["display:flex;justify-content:flex-end;"]),Te=function(e){var n=e.value,t=(0,ve.dD)();return(0,v.jsxs)(je,{children:[(0,v.jsx)(ke,{src:n.logo}),(0,v.jsx)(be,{children:t?(0,v.jsx)(Ce,{children:n.name}):(0,v.jsx)(ye,{children:n.name})}),n.isVerified&&(0,v.jsx)("span",{className:"rgw6ezl7 rgw6ez457 rgw6ez2o7 rgw6ez19v rgw6ez12v rgw6ez461",children:(0,v.jsx)(x.SA,{})})]})},Se=function(e){var n=e.value;return(0,v.jsx)("span",{children:n.value?(0,s.Ci)(n.value):"-"})},He=function(e,n,t,r){return e===F.VG.ETH?t:r&&t?r*(n?parseFloat((0,ge.formatEther)(t)):t):void 0},Ze=function(e){var n=e.value,t=e.denomination,r=e.usdPrice,i=He(t,!1,n,r),o=i?t===F.VG.ETH?(0,s.Nd)(i.toString(),!1,!0,!1)+" ETH":(0,s.Nd)(i,!0,!1,!0):"-",a=(0,ve.dD)()?me.Tv.BodySmall:me.Tv.BodyPrimary;return(0,v.jsx)(Ie,{children:(0,v.jsx)(a,{children:n?o:"-"})})},Pe=function(e){var n=e.value;return(0,v.jsx)(me.Tv.BodyPrimary,{children:n})},Fe=function(e){var n=e.value,t=e.denomination,r=e.usdPrice,i=He(t,!1,n,r),o=i?t===F.VG.ETH?(0,s.Nd)(i.toString(),!1,!1,!0)+" ETH":(0,s.Nd)(i,!0,!1,!0):"-";return(0,v.jsx)(Ie,{children:(0,v.jsx)(me.Tv.BodyPrimary,{children:n?o:"-"})})},Ee=function(e){var n=e.change,t=e.children,r=(0,ve.dD)()?me.Tv.Caption:me.Tv.BodyPrimary;return(0,v.jsxs)(ze,{change:null!==n&&void 0!==n?n:0,children:[!n||n>0?(0,v.jsx)(x.PH,{width:"20px",height:"20px"}):(0,v.jsx)(x.HE,{width:"20px",height:"20px"}),(0,v.jsx)(r,{color:"currentColor",children:t||"".concat(n?Math.abs(Math.round(n)):0,"%")})]})},Ne=t(45987),De=t(17248),Oe=t(88742),Xe=t(62710),Me=t(27811),Ve="_1mor7veh rgw6ezcp rgw6ezb1 rgw6ezed rgw6ez2oj rgw6ez281 rgw6ez1jp rgw6ez467 rgw6ez491",_e="_1mor7vea rgw6ez4pd rgw6ez16v rgw6ez7bj rgw6ez7a7",Be="_1mor7ved rgw6ezcp rgw6ezav rgw6eze7 rgw6ez4ep rgw6ez2ov rgw6ez28d",Le="rgw6ezrd rgw6ez50p rgw6ez7jr rgw6ez7ar",Ae=["columns","data","smallHiddenColumns","mediumHiddenColumns","largeHiddenColumns"],Ge=["headerGroups","visibleColumns"],Re=i.default.div.withConfig({componentId:"sc-iwpsza-0"})(["display:flex;align-items:center;padding-left:24px;gap:12px;@media only screen and (max-width:","){padding-left:8px;}"],(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),qe=i.default.tr.withConfig({componentId:"sc-iwpsza-1"})(["cursor:pointer;:hover{background:",";}:active{background:",";}"],(function(e){return e.theme.stateOverlayHover}),(function(e){return e.theme.stateOverlayPressed})),We=i.default.tr.withConfig({componentId:"sc-iwpsza-2"})(["height:80px;"]),Ue=i.default.th.withConfig({componentId:"sc-iwpsza-3"})(["",":hover{","}:active{","}"],(function(e){return!e.disabled&&"cursor: pointer;"}),(function(e){var n=e.theme;return!e.disabled&&"opacity: ".concat(n.opacity.hover,";")}),(function(e){var n=e.theme;return!e.disabled&&"opacity: ".concat(n.opacity.click,";")})),Ye=i.default.div.withConfig({componentId:"sc-iwpsza-4"})(["display:flex;width:100%;justify-content:flex-end;align-items:center;"]),Je=i.default.div.withConfig({componentId:"sc-iwpsza-5"})(["display:flex;margin-left:24px;gap:8px;align-items:center;"]),Ke=(0,i.default)(Z.X).withConfig({componentId:"sc-iwpsza-6"})(["width:36px;height:36px;border-radius:36px;"]),Qe=(0,i.default)(Z.X).withConfig({componentId:"sc-iwpsza-7"})(["width:8px;height:16px;margin-right:12px;"]),$e=10;function en(e){var n=e.columns,t=e.data,r=e.smallHiddenColumns,c=e.mediumHiddenColumns,l=e.largeHiddenColumns,d=(0,Ne.Z)(e,Ae),s=(0,i.useTheme)(),h=(0,De.useWeb3React)().chainId,f=(0,Oe.i)().width,m=(0,ve.dD)(),g=(0,Xe.useTable)((0,pe.Z)({columns:n,data:t,initialState:{sortBy:[{desc:!0,id:tn.Volume}]}},d),Xe.useSortBy),w=g.getTableProps,j=g.getTableBodyProps,b=g.headerGroups,y=g.rows,C=g.prepareRow,k=g.setHiddenColumns,z=g.visibleColumns,I=(0,p.s0)();return(0,u.useEffect)((function(){f&&(f<=s.breakpoint.sm?k(r):f<=s.breakpoint.md?k(c):f<=s.breakpoint.lg?k(l):k([]))}),[f,k,n,r,c,l,s.breakpoint]),0===t.length?(0,v.jsx)(nn,(0,pe.Z)({headerGroups:b,visibleColumns:z},w())):(0,v.jsx)(me.Vj,{children:(0,v.jsxs)("table",(0,pe.Z)((0,pe.Z)({},w()),{},{className:_e,children:[(0,v.jsx)("thead",{className:Le,children:b.map((function(e){return(0,u.createElement)("tr",(0,pe.Z)((0,pe.Z)({},e.getHeaderGroupProps()),{},{key:e.id}),e.headers.map((function(e,n){return(0,u.createElement)(Ue,(0,pe.Z)((0,pe.Z)({className:Be},e.getHeaderProps(e.getSortByToggleProps())),{},{style:{textAlign:0===n?"left":"right",paddingLeft:0===n?m?"16px":"52px":0},disabled:e.disableSortBy,key:n}),(0,v.jsx)(Me.n,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?(0,v.jsx)(x.LZ,{style:{transform:"rotate(90deg)",position:"absolute"}}):(0,v.jsx)(x.LZ,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),(0,v.jsx)(Me.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")}))})))}))}),(0,v.jsx)("tbody",(0,pe.Z)((0,pe.Z)({},j()),{},{children:y.map((function(e,n){return C(e),(0,v.jsx)(o.M8,{events:[a.TM.onClick],name:a.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:h},element:a.xo.NFT_TRENDING_ROW,children:(0,u.createElement)(qe,(0,pe.Z)((0,pe.Z)({},e.getRowProps()),{},{key:e.id,onClick:function(){return I("/nfts/collection/".concat(e.original.collection.address))},"data-testid":"nft-trending-collection"}),e.cells.map((function(e,t){return(0,u.createElement)("td",(0,pe.Z)((0,pe.Z)({className:"_1mor7vef rgw6ezcp rgw6ezb1 rgw6ezed rgw6ez2o7 rgw6ez27p rgw6ez1jp rgw6ez467 rgw6ez491"},e.getCellProps()),{},{key:t,style:{maxWidth:0===t?m?"240px":"360px":"160px"}}),0===t?(0,v.jsxs)(Re,{children:[!m&&(0,v.jsx)(me.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:n+1}),e.render("Cell")]}):e.render("Cell"))})))},n)}))}))]}))})}function nn(e){var n=e.headerGroups,t=e.visibleColumns,r=(0,Ne.Z)(e,Ge);return(0,v.jsx)(me.Vj,{children:(0,v.jsxs)("table",(0,pe.Z)((0,pe.Z)({},r),{},{className:_e,children:[(0,v.jsx)("thead",{className:Le,children:n.map((function(e){return(0,u.createElement)("tr",(0,pe.Z)((0,pe.Z)({},e.getHeaderGroupProps()),{},{key:e.id}),e.headers.map((function(e,n){return(0,u.createElement)(Ue,(0,pe.Z)((0,pe.Z)({className:Be},e.getHeaderProps(e.getSortByToggleProps())),{},{style:{textAlign:0===n?"left":"right",paddingLeft:0===n?"52px":0},disabled:0===n,key:n}),(0,v.jsx)(Me.n,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?(0,v.jsx)(x.LZ,{style:{transform:"rotate(90deg)",position:"absolute"}}):(0,v.jsx)(x.LZ,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),(0,v.jsx)(Me.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")}))})))}))}),(0,v.jsx)("tbody",(0,pe.Z)((0,pe.Z)({},r),{},{children:(0,I.Z)(Array($e)).map((function(e,n){return(0,v.jsx)(We,{children:(0,I.Z)(Array(t.length)).map((function(e,n){return(0,v.jsx)("td",{className:Ve,children:0===n?(0,v.jsxs)(Je,{children:[(0,v.jsx)(Qe,{}),(0,v.jsx)(Ke,{}),(0,v.jsx)(Z.X,{})]}):(0,v.jsx)(Ye,{children:(0,v.jsx)(Z.X,{})})},n)}))},n)}))}))]}))})}var tn=function(e){return e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners",e}({}),rn=function(e,n){return e?n?Math.round(1e5*e)>=Math.round(1e5*n)?1:-1:1:-1},on=function(e){var n=e.data,t=e.timePeriod,r=(0,u.useMemo)((function(){return function(e,n){return rn(e.original.floor.value,n.original.floor.value)}}),[]),i=(0,u.useMemo)((function(){return function(e,n){return rn(e.original.floor.change,n.original.floor.change)}}),[]),o=(0,u.useMemo)((function(){return function(e,n){return rn(e.original.volume.value,n.original.volume.value)}}),[]),a=(0,u.useMemo)((function(){return function(e,n){return rn(e.original.volume.change,n.original.volume.change)}}),[]),c=(0,u.useMemo)((function(){return[{Header:"Collection name",accessor:"collection",Cell:Te,disableSortBy:!0},{id:tn.Floor,Header:tn.Floor,accessor:function(e){return e.floor.value},sortType:r,Cell:function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Ze,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),t!==F.XH.AllTime&&(0,v.jsx)(xe.SF,{children:(0,v.jsx)(Ee,{change:e.row.original.floor.change})})]})}},{id:tn.FloorChange,Header:tn.FloorChange,accessor:function(e){return e.floor.value},sortDescFirst:!0,disableSortBy:t===F.XH.AllTime,sortType:i,Cell:function(e){return t===F.XH.AllTime?(0,v.jsx)(Pe,{value:"-"}):(0,v.jsx)(Ee,{change:e.row.original.floor.change})}},{id:tn.Volume,Header:tn.Volume,accessor:function(e){return e.volume.value},sortDescFirst:!0,sortType:o,Cell:function(e){return(0,v.jsx)(Fe,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:tn.VolumeChange,Header:tn.VolumeChange,accessor:function(e){return e.volume.value},sortDescFirst:!0,disableSortBy:t===F.XH.AllTime,sortType:a,Cell:function(e){var n=e.row.original.volume.change;return t===F.XH.AllTime?(0,v.jsx)(Pe,{value:"-"}):n&&n>=9999?(0,v.jsxs)(Ee,{change:n,children:[">".concat(9999),"%"]}):(0,v.jsx)(Ee,{change:n})}},{id:tn.Items,Header:tn.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,v.jsx)(Se,{value:{value:e.row.original.totalSupply}})}},{Header:tn.Owners,accessor:function(e){return e.owners.value},sortDescFirst:!0,Cell:function(e){return(0,v.jsx)(Se,{value:e.row.original.owners})}}]}),[i,r,a,o,t]);return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(en,{smallHiddenColumns:[tn.Items,tn.FloorChange,tn.Volume,tn.VolumeChange,tn.Owners],mediumHiddenColumns:[tn.Items,tn.FloorChange,tn.VolumeChange,tn.Owners],largeHiddenColumns:[tn.Items,tn.Owners],data:n,columns:c})})},an=[{label:"1D",value:F.XH.OneDay},{label:"1W",value:F.XH.SevenDays},{label:"1M",value:F.XH.ThirtyDays},{label:"All",value:F.XH.AllTime}],cn=i.default.div.withConfig({componentId:"sc-1dnk851-0"})(["display:flex;flex-direction:column;width:100%;max-width:",";padding:0 16px;"],(function(e){return e.theme.maxWidth})),ln=i.default.div.withConfig({componentId:"sc-1dnk851-1"})(["color:",";font-size:36px;line-height:44px;font-weight:500;@media only screen and (max-width:","){font-size:20px;line-height:28px;}"],(function(e){return e.theme.textPrimary}),(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),dn=i.default.div.withConfig({componentId:"sc-1dnk851-2"})(["display:flex;justify-content:space-between;margin-top:36px;margin-bottom:20px;@media only screen and (max-width:","){margin-bottom:16px;margin-top:16px;}"],(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),sn=i.default.div.withConfig({componentId:"sc-1dnk851-3"})(["display:flex;border:1px solid ",";border-radius:16px;padding:4px;"],(function(e){return e.theme.backgroundOutline})),un=i.default.div.withConfig({componentId:"sc-1dnk851-4"})(["padding:8px 12px;border-radius:12px;background:",";cursor:pointer;",""],(function(e){var n=e.active,t=e.theme;return n?t.backgroundInteractive:"none"}),he.c),pn=(0,i.default)(me.Tv.SubHeader).withConfig({componentId:"sc-1dnk851-5"})(["color:",";"],(function(e){var n=e.theme;return e.active?n.textPrimary:n.textSecondary}));var hn=function(){var e=(0,u.useState)(F.XH.OneDay),n=(0,c.Z)(e,2),t=n[0],r=n[1],i=(0,u.useState)(!0),o=(0,c.Z)(i,2),a=o[0],p=o[1],h=(0,d.S)(100,function(e){switch(e){case F.XH.OneDay:return l._u.Day;case F.XH.SevenDays:return l._u.Week;case F.XH.ThirtyDays:return l._u.Month;case F.XH.AllTime:return l._u.Max;default:return l._u.Day}}(t)),f=h.data,m=h.loading,x=(0,fe.useQuery)(["fetchPrice",{}],(function(){return(0,s.tw)()}),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchInterval:6e4}).data,g=(0,u.useMemo)((function(){return!m&&f?f.map((function(e){return(0,pe.Z)((0,pe.Z)({},e),{},{collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:a?F.VG.ETH:F.VG.USD,usdPrice:x})})):[]}),[f,m,a,x]);return(0,v.jsxs)(cn,{children:[(0,v.jsx)(ln,{children:"Trending NFT collections"}),(0,v.jsxs)(dn,{children:[(0,v.jsx)(sn,{children:an.map((function(e){return(0,v.jsx)(un,{active:e.value===t,onClick:function(){return r(e.value)},children:(0,v.jsx)(pn,{lineHeight:"20px",active:e.value===t,children:e.label})},e.value)}))}),(0,v.jsxs)(sn,{onClick:function(){return p(!a)},children:[(0,v.jsx)(un,{active:a,children:(0,v.jsx)(pn,{lineHeight:"20px",active:a,children:"ETH"})}),(0,v.jsx)(un,{active:!a,children:(0,v.jsx)(pn,{lineHeight:"20px",active:!a,children:"USD"})})]})]}),(0,v.jsx)(on,{data:g,timePeriod:t})]})},fn=i.default.div.withConfig({componentId:"sc-j2zxi9-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;@media only screen and (max-width:","){gap:16px;}@media only screen and (max-width:","){gap:0px;}"],(function(e){var n=e.theme;return"".concat(n.breakpoint.md,"px")}),(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),mn=function(){var e=(0,ve.cP)((function(e){return e.setBagExpanded}));return(0,u.useEffect)((function(){e({bagExpanded:!1,manualClose:!1})}),[]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(o.fM,{page:a.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,v.jsxs)(fn,{children:[(0,v.jsx)(ue,{}),(0,v.jsx)(hn,{})]})})})}}}]);
//# sourceMappingURL=1852.273f4252.chunk.js.map