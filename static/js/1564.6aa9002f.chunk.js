"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1564],{65885:function(e,n,r){r.d(n,{R_:function(){return t},gS:function(){return i},xr:function(){return o},oj:function(){return a},Co:function(){return s},Yb:function(){return l},fb:function(){return c},hX:function(){return d},rG:function(){return u},FC:function(){return g},rZ:function(){return f}});r(21844),r(30473);var t="e2d0r6e rgw6ezd1 rgw6ezb1 rgw6eze7 rgw6ez4ej rgw6ez1dv rgw6ez47p rgw6ez2d1",i="e2d0r6h e2d0r6g rgw6ezd1 rgw6ezb1 rgw6eze7 rgw6ez2e7 rgw6ez2jp rgw6ez2ov rgw6ez28d rgw6ez177 rgw6ez4sj rgw6ez7iz rgw6ez7bj rgw6ez7on",o="rgw6ez14j rgw6ez1bj rgw6ez7bb",a="rgw6ezcp rgw6ezb1 rgw6ezed rgw6ezfv rgw6ez7m3 rgw6ez45p rgw6ez45v",s="e2d0r6a rgw6ezcv rgw6ezb1 rgw6ezed rgw6ez3t7",l="e2d0r63 e2d0r61 rgw6ez45d rgw6ez2d7 rgw6ez2e8 rgw6ez2ip rgw6ez2jq rgw6ez2ov rgw6ez28d rgw6ez4ej rgw6ez79z rgw6ez7jr rgw6ez7ab rgw6ez547 rgw6ez5op",c="e2d0r6c rgw6ezcp rgw6ezav rgw6eze7 rgw6ez4ep",d="e2d0r6l rgw6ezcv rgw6ezav rgw6ezdv rgw6ez2e7 rgw6ez2jp rgw6ez2ov rgw6ez28d rgw6ez4ov rgw6ez4ej rgw6ez7bj rgw6ez79z",u="e2d0r65 e2d0r61 rgw6ez45d rgw6ez2e7 rgw6ez2jp rgw6ez281 rgw6ez4ep rgw6ezap rgw6ezd1",g="e2d0r6n rgw6ez2d7 rgw6ez2ip rgw6ez44v rgw6ez7b7 rgw6ez191 rgw6ez171 rgw6ez4ej rgw6ez4ov rgw6ezaj rgw6ezd1 rgw6ez79z",f="e2d0r6j e2d0r6g rgw6ezd1 rgw6ezb1 rgw6eze7 rgw6ez2e7 rgw6ez2jp rgw6ez2ov rgw6ez28d rgw6ez177 rgw6ez4sj rgw6ez7iz rgw6ez7bj rgw6ez7on rgw6ez4bd rgw6ez79z"},86256:function(e,n,r){r.d(n,{m:function(){return c}});var t,i=r(1413),o=r(30168),a=r(49200),s=r(71233),l=r(13746);function c(e,n,r){var t,o,a=(0,l.YV)({variables:{filter:e,first:n},fetchPolicy:r}),c=a.data,d=a.loading,u=a.fetchMore,g=a.error,f=null===c||void 0===c||null===(t=c.nftActivity)||void 0===t||null===(o=t.pageInfo)||void 0===o?void 0:o.hasNextPage,v=(0,s.useCallback)((function(){var e,n;return u({variables:{after:null===c||void 0===c||null===(e=c.nftActivity)||void 0===e||null===(n=e.pageInfo)||void 0===n?void 0:n.endCursor}})}),[c,u]),m=(0,s.useMemo)((function(){var e,n;return null===c||void 0===c||null===(e=c.nftActivity)||void 0===e||null===(n=e.edges)||void 0===n?void 0:n.map((function(e){var n,r,t,o,a,s,l,c=null===e||void 0===e?void 0:e.node,d=null===c||void 0===c?void 0:c.asset;return{collectionAddress:c.address,tokenId:c.tokenId,tokenMetadata:{name:null===d||void 0===d?void 0:d.name,imageUrl:null===d||void 0===d||null===(n=d.image)||void 0===n?void 0:n.url,smallImageUrl:null===d||void 0===d||null===(r=d.smallImage)||void 0===r?void 0:r.url,metadataUrl:null===d||void 0===d?void 0:d.metadataUrl,rarity:{primaryProvider:"Rarity Sniper",providers:null===d||void 0===d||null===(t=d.rarities)||void 0===t?void 0:t.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{provider:"Rarity Sniper"})}))},suspiciousFlag:null===d||void 0===d?void 0:d.suspiciousFlag,standard:null===d||void 0===d||null===(o=d.nftContract)||void 0===o?void 0:o.standard},eventType:c.type,marketplace:c.marketplace,fromAddress:c.fromAddress,toAddress:c.toAddress,transactionHash:c.transactionHash,orderStatus:c.orderStatus,price:null===(a=c.price)||void 0===a?void 0:a.value.toString(),symbol:null===d||void 0===d||null===(s=d.collection)||void 0===s||null===(l=s.image)||void 0===l?void 0:l.url,quantity:c.quantity,url:c.url,eventTimestamp:1e3*c.timestamp}}))}),[c]);return(0,s.useMemo)((function(){return{nftActivity:m,hasNext:f,loadMore:v,loading:d,error:g}}),[f,v,d,m,g])}(0,a.ZP)(t||(t=(0,o.Z)(["\n  query NftActivity($filter: NftActivityFilterInput, $after: String, $first: Int) {\n    nftActivity(filter: $filter, after: $after, first: $first) {\n      edges {\n        node {\n          id\n          address\n          tokenId\n          asset {\n            id\n            metadataUrl\n            image {\n              id\n              url\n            }\n            smallImage {\n              id\n              url\n            }\n            name\n            rarities {\n              id\n              provider\n              rank\n              score\n            }\n            suspiciousFlag\n            nftContract {\n              id\n              standard\n            }\n            collection {\n              id\n              image {\n                id\n                url\n              }\n            }\n          }\n          type\n          marketplace\n          fromAddress\n          toAddress\n          transactionHash\n          price {\n            id\n            value\n          }\n          orderStatus\n          quantity\n          url\n          timestamp\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n"])))},51564:function(e,n,r){r.d(n,{cS:function(){return E},VJ:function(){return M},YQ:function(){return P}});var t,i=r(29439),o=r(1413),a=r(4942),s=r(98985),l=r(49815),c=r(86256),d=r(27811),u=r(38757),g=r(82530),f=r(67917),v=r(72249),m=r(7473),p=r(71233),x=r(97856),h=r(70825),w=r(65885),j=r(26634),z=r(93433),y=(r(21844),r(83675),r(37881)),k=function(){return(0,y.jsx)(d.n,{className:"_2kdvfw1 rgw6ez14j rgw6ez1bj rgw6ez7bb"})},b=function(){return(0,y.jsx)(d.n,{className:"fbjar43 _2kdvfw1 rgw6ez191 rgw6ez7cj"})},T=function(){return(0,y.jsxs)(d.n,{as:"a",className:w.Yb,children:[(0,y.jsxs)(u.X2,{gap:"16",children:[(0,y.jsx)(k,{}),(0,y.jsx)(b,{})]}),(0,y.jsx)(u.X2,{children:(0,y.jsx)(b,{})}),(0,y.jsx)(u.X2,{display:{sm:"none",md:"flex"},children:(0,y.jsx)(b,{})}),(0,y.jsx)(u.X2,{display:{sm:"none",lg:"flex"},children:(0,y.jsx)(b,{})}),(0,y.jsx)(u.X2,{display:{sm:"none",xl:"flex"},children:(0,y.jsx)(b,{})})]})},C=function(e){var n=e.rowCount;return(0,y.jsx)(y.Fragment,{children:(0,z.Z)(Array(n)).map((function(e,n){return(0,y.jsx)(T,{},n)}))})},I=function(){return(0,y.jsxs)(u.sg,{marginTop:"36",children:[(0,y.jsx)(M,{}),(0,y.jsx)(C,{rowCount:10})]})},A=function(e){return e.Item="Item",e.Event="Event",e.Price="Price",e.By="By",e.To="To",e}(A||{}),S=s.default.div.withConfig({componentId:"sc-164q6ku-0"})(["display:flex;background:",";",";"],(function(e){return e.backgroundColor}),l.c),M=function(){return(0,y.jsxs)(d.n,{className:w.rG,children:[(0,y.jsx)(d.n,{children:A.Item}),(0,y.jsx)(d.n,{children:A.Event}),(0,y.jsx)(d.n,{display:{sm:"none",md:"block"},children:A.Price}),(0,y.jsx)(d.n,{display:{sm:"none",xl:"block"},children:A.By}),(0,y.jsx)(d.n,{display:{sm:"none",xxl:"block"},children:A.To})]})},N=(t={},(0,a.Z)(t,v.n$.Listing,!0),(0,a.Z)(t,v.n$.Sale,!0),(0,a.Z)(t,v.n$.Transfer,!1),(0,a.Z)(t,v.n$.CancelListing,!1),t),P=function(e,n){return(0,o.Z)((0,o.Z)({},e),{},(0,a.Z)({},n.eventType,!e[n.eventType]))},F=function(e){return"/#/nfts/asset/".concat(e.collectionAddress,"/").concat(e.tokenId,"?origin=activity")},E=function(e){var n,r=e.contractAddress,t=e.rarityVerified,o=e.collectionName,a=e.chainId,s=(0,p.useReducer)(P,N),l=(0,i.Z)(s,2),z=l[0],k=l[1],b=(0,c.m)({activityTypes:Object.keys(z).map((function(e){return e})).filter((function(e){return z[e]})),address:r},25),T=b.nftActivity,A=b.hasNext,E=b.loadMore,Z=b.loading,L=A&&(null===T||void 0===T?void 0:T.length),U=(0,f.cP)((function(e){return e.itemsInBag})),_=(0,f.cP)((function(e){return e.addAssetsToBag})),X=(0,f.cP)((function(e){return e.removeAssetsFromBag})),D=(0,f.cP)((function(e){return e.bagExpanded})),B=(0,f.cP)((function(e){return e.toggleBag})),H=(0,f.dD)(),R=(0,p.useState)(0),V=(0,i.Z)(R,2),$=V[0],G=V[1],Y=(0,h.Gv)();(0,p.useEffect)((function(){(0,m.tw)().then((function(e){G(e||0)}))}),[]);var q=(0,p.useCallback)((function(e){var n=e.eventType,r=z[n],t=Y?g.gR.color.gray500:g.gR.color.gray200;return(0,y.jsx)(S,{className:w.hX,backgroundColor:r?t:g.Z4.colors.backgroundInteractive,onClick:function(){return k({eventType:n})},children:n.charAt(0)+n.slice(1).toLowerCase()+"s"})}),[z,Y]);return(0,y.jsxs)(d.n,{marginLeft:{sm:"16",md:"48"},children:[(0,y.jsxs)(u.X2,{gap:"8",paddingTop:{sm:"0",md:"16"},children:[(0,y.jsx)(q,{eventType:v.n$.Listing}),(0,y.jsx)(q,{eventType:v.n$.Sale}),(0,y.jsx)(q,{eventType:v.n$.Transfer})]}),Z?(0,y.jsx)(I,{}):T&&(0,y.jsxs)(u.sg,{marginTop:"36",children:[(0,y.jsx)(M,{}),(0,y.jsx)(x.Z,{next:E,hasMore:!!A,loader:L?(0,y.jsx)(C,{rowCount:2}):null,dataLength:null!==(n=null===T||void 0===T?void 0:T.length)&&void 0!==n?n:0,style:{overflow:"unset"},children:T.map((function(e,n){return e.eventType&&(0,y.jsxs)(d.n,{as:"a","data-testid":"nft-activity-row",href:F(e),className:w.Yb,children:[(0,y.jsx)(j.Et,{event:e,rarityVerified:t,collectionName:o,eventTimestamp:e.eventTimestamp,isMobile:H}),(0,y.jsx)(j.VM,{eventType:e.eventType,eventTimestamp:e.eventTimestamp,eventTransactionHash:e.transactionHash,price:e.price,isMobile:H}),(0,y.jsx)(j.Ic,{marketplace:e.marketplace,price:e.price}),(0,y.jsx)(j.UM,{address:e.fromAddress,chainId:a}),(0,y.jsx)(j.UM,{address:e.toAddress,chainId:a,desktopLBreakpoint:!0}),(0,y.jsx)(j.Dg,{event:e,collectionName:o,selectAsset:_,removeAsset:X,itemsInBag:U,cartExpanded:D,toggleCart:B,isMobile:H,ethPriceInUSD:$})]},n)}))})]})]})}},26634:function(e,n,r){r.d(n,{UM:function(){return N},Dg:function(){return M},VM:function(){return U},Et:function(){return B},Ic:function(){return F}});var t=r(29439),i=r(4942),o=r(1413),a=r(98985),s=r(73955),l=r(3884),c=r(95744),d=r(22604),u=r(42320),g=r(13746),f=r(27811),v=r(38757),m=r(58600),p=r(72249),x=r(92311),h=r(75073),w=r(29463),j=r(81099),z=r(79502),y=r(71233),k=r(25618),b=r(70823),T=r(34578),C=r(65885),I=r(37881),A=(0,a.default)(k.dL).withConfig({componentId:"sc-ey20j9-0"})(["color:",";text-decoration:none;font-weight:400;line-height:20px;a{color:",";text-decoration:none;}a:hover{color:",";text-decoration:none;opacity:",";}a:focus{color:",";text-decoration:none;opacity:",";}"],(function(e){return e.theme.textPrimary}),(function(e){return e.theme.textPrimary}),(function(e){return e.theme.textPrimary}),(function(e){return e.theme.opacity.hover}),(function(e){return e.theme.textPrimary}),(function(e){return e.theme.opacity.click})),S=function(e,n,r){if(n)return r?(0,I.jsx)(s.cC,{id:"Remove"}):(0,I.jsx)(s.cC,{id:"Add to bag"});switch(e){case g.iF.Executed:return(0,I.jsx)(s.cC,{id:"Sold"});case g.iF.Cancelled:return(0,I.jsx)(s.cC,{id:"Cancelled"});case g.iF.Expired:return(0,I.jsx)(s.cC,{id:"Expired"});case g.iF.Valid:return(0,I.jsx)(s.cC,{id:"Unavailable"});default:return null}},M=function(e){var n=e.event,r=e.collectionName,t=e.selectAsset,i=e.removeAsset,a=e.itemsInBag,s=e.cartExpanded,d=e.toggleCart,u=e.isMobile,m=e.ethPriceInUSD,p=(0,y.useMemo)((function(){return function(e,n,r){var t,i,o,a,s,l=e.price?(0,w.GA)(parseFloat(e.price)*r):"0",c=e.price?(0,h.parseEther)(e.price):"";return{address:e.collectionAddress,collectionName:n,imageUrl:null===(t=e.tokenMetadata)||void 0===t?void 0:t.imageUrl,marketplace:e.marketplace,name:null===(i=e.tokenMetadata)||void 0===i?void 0:i.name,tokenId:e.tokenId,susFlag:null===(o=e.tokenMetadata)||void 0===o?void 0:o.suspiciousFlag,smallImageUrl:null===(a=e.tokenMetadata)||void 0===a?void 0:a.smallImageUrl,collectionSymbol:e.symbol,priceInfo:{USDPrice:l,ETHPrice:c,basePrice:c,baseAsset:"ETH"},tokenType:null===(s=e.tokenMetadata)||void 0===s?void 0:s.standard}}(n,r,m)}),[n,r,m]),x=(0,y.useMemo)((function(){return a.some((function(e){return p.tokenId===e.asset.tokenId&&p.address===e.asset.address}))}),[p,a]),j=function(e,n){if(!n||!e)return!1;var r=Object.keys(g.Wf).map((function(e){return e.toLowerCase()})),t=e===g.iF.Valid,i=r.includes(n.toLowerCase());return t&&i}(n.orderStatus,n.marketplace),z=(0,l.oO)({page:c.yJ.NFT_COLLECTION_PAGE}),k=(0,o.Z)({collection_address:p.address,token_id:p.tokenId,token_type:p.tokenType},z);return(0,I.jsx)(v.sg,{display:{sm:"none",lg:"flex"},height:"full",justifyContent:"center",marginX:"auto",children:n.eventType===g.y3.Listing&&n.orderStatus?(0,I.jsx)(f.n,{as:"button",className:j&&x?C.rZ:C.gS,onClick:function(e){e.preventDefault(),x?i([p]):t([p]),!x&&!s&&!u&&d(),!x&&(0,l._P)(c.Yz.NFT_BUY_ADDED,{eventProperties:k})},disabled:!j,children:S(n.orderStatus,j,x)}):"-"})},N=function(e){var n=e.address,r=e.desktopLBreakpoint,t=e.chainId;return(0,I.jsx)(v.sg,{display:{sm:"none",xl:r?"none":"flex",xxl:"flex"},className:C.R_,children:(0,I.jsx)(A,{href:(0,T.E)(null!==t&&void 0!==t?t:d.a_e.MAINNET,null!==n&&void 0!==n?n:"",T.r.ADDRESS),style:{textDecoration:"none"},children:(0,I.jsx)(f.n,{onClick:function(e){return e.stopPropagation()},children:n?(0,b.X)(n,2):"-"})})})},P=function(e){var n=e.price;return(0,I.jsx)(u.ud,{text:(0,I.jsx)(f.n,{textAlign:"left",fontSize:"14",fontWeight:"normal",color:"textSecondary",children:"".concat(n," ETH")}),placement:"top",children:(0,I.jsx)(f.n,{children:"".concat(n.substring(0,5),"... ETH")})})},F=function(e){var n=e.marketplace,r=e.price,t=(0,y.useMemo)((function(){return r?(0,w.GA)(parseFloat(null===r||void 0===r?void 0:r.toString())):null}),[r]);return(0,I.jsxs)(v.X2,{display:{sm:"none",md:"flex"},gap:"8",children:[n&&(0,x.Dp)(n,"16"),t?t.length>6?(0,I.jsx)(P,{price:t}):(0,I.jsx)(I.Fragment,{children:"".concat(t," ETH")}):(0,I.jsx)(I.Fragment,{children:"-"})]})},E=function(e){switch(e){case g.y3.Listing:return(0,I.jsx)(m.TV,{width:16,height:16});case g.y3.Sale:return(0,I.jsx)(m.QF,{width:16,height:16});case g.y3.Transfer:return(0,I.jsx)(m.dj,{width:16,height:16});case g.y3.CancelListing:return(0,I.jsx)(m.Io,{width:16,height:16});default:return null}},Z=function(e){var n=e.transactionHash;return(0,I.jsx)(v.X2,{onClick:function(e){return function(e,n){e.preventDefault(),window.open("https://etherscan.io/tx/".concat(n),"_blank","noopener,noreferrer")}(e,n)},marginLeft:"4",children:(0,I.jsx)(m.Bu,{})})},L=function(e){var n;return(n={},(0,i.Z)(n,g.y3.Listing,"gold"),(0,i.Z)(n,g.y3.Sale,"green"),(0,i.Z)(n,g.y3.Transfer,"violet"),(0,i.Z)(n,g.y3.CancelListing,"accentFailure"),n)[e]},U=function(e){var n=e.eventType,r=e.eventTimestamp,t=e.eventTransactionHash,i=e.eventOnly,o=e.price,a=e.isMobile,s=(0,y.useMemo)((function(){return o?(0,w.GA)(parseFloat(null===o||void 0===o?void 0:o.toString())):null}),[o]);return(0,I.jsxs)(v.sg,{height:"full",justifyContent:"center",gap:"4",children:[(0,I.jsxs)(v.X2,{className:C.Co,color:L(n),children:[E(n),p.ze[n]]}),r&&!a&&!i&&(0,I.jsxs)(v.X2,{className:C.fb,children:[(0,j.F)(r.toString()),t&&(0,I.jsx)(Z,{transactionHash:t})]}),a&&o&&(0,I.jsx)(v.X2,{fontSize:"16",fontWeight:"normal",color:"textPrimary",children:"".concat(s," ETH")})]})},_=function(){return(0,I.jsx)(f.n,{position:"relative",style:{background:"#24272e"},className:C.xr,children:(0,I.jsxs)(f.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"normal",children:["Image",(0,I.jsx)("br",{}),"not",(0,I.jsx)("br",{}),"available"]})})},X=function(e){var n,r=e.rarity,t=e.collectionName,i=e.rarityVerified,o=r.rank||(null===(n=r.providers)||void 0===n?void 0:n[0].rank);return o?(0,I.jsx)(f.n,{children:(0,I.jsx)(u.ud,{text:(0,I.jsxs)(v.X2,{children:[(0,I.jsx)(f.n,{display:"flex",marginRight:"4",children:(0,I.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,I.jsx)(f.n,{width:"full",fontSize:"14",children:i?"Verified by ".concat(t):"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,I.jsxs)(f.n,{className:C.FC,children:[(0,I.jsx)(f.n,{paddingTop:"2",paddingBottom:"2",display:"flex",children:(0,z.U)(o)}),(0,I.jsx)(f.n,{display:"flex",height:"16",children:i?(0,I.jsx)(m.w,{}):null})]})})}):null},D=function(e){return(null===e||void 0===e?void 0:e.smallImageUrl)||(null===e||void 0===e?void 0:e.imageUrl)},B=function(e){var n,r,i,o,a=e.event,s=e.rarityVerified,l=e.collectionName,c=e.eventTimestamp,d=e.isMobile,u=(0,y.useState)(!1),g=(0,t.Z)(u,2),m=g[0],p=g[1],x=(0,y.useState)(!D(a.tokenMetadata)),h=(0,t.Z)(x,2),w=h[0],z=h[1];return(0,I.jsxs)(v.X2,{gap:"16",overflow:"hidden",whiteSpace:"nowrap",children:[w?(0,I.jsx)(_,{}):(0,I.jsx)(f.n,{as:"img",alt:(null===(n=a.tokenMetadata)||void 0===n?void 0:n.name)||a.tokenId,src:D(a.tokenMetadata),draggable:!1,className:C.xr,style:{background:m?"none":"#24272e"},onLoad:function(){return p(!0)},onError:function(){return z(!0)}}),(0,I.jsxs)(v.sg,{height:"full",justifyContent:"center",overflow:"hidden",whiteSpace:"nowrap",marginRight:"24",children:[(0,I.jsx)(f.n,{className:C.oj,children:(null===(r=a.tokenMetadata)||void 0===r?void 0:r.name)||a.tokenId}),(null===(i=a.tokenMetadata)||void 0===i?void 0:i.rarity)&&!d&&(0,I.jsx)(X,{rarity:null===(o=a.tokenMetadata)||void 0===o?void 0:o.rarity,rarityVerified:s,collectionName:l}),d&&c&&(0,j.F)(c.toString())]})]})}},81099:function(e,n,r){r.d(n,{F:function(){return t}});var t=function(e){var n=parseFloat(e),r=(new Date).getTime()-n,t=Math.floor(r/864e5),i=Math.floor(r%864e5/36e5),o=Math.floor(r%36e5/6e4);return t>0?"".concat(t," day").concat(t>1?"s":""," ago"):i>0?"".concat(i," hour").concat(i>1?"s":""," ago"):o>1?"".concat(o," minutes ago"):"Just now"}}}]);
//# sourceMappingURL=1564.6aa9002f.chunk.js.map