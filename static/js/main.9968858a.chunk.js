(this.webpackJsonpsearchgif=this.webpackJsonpsearchgif||[]).push([[0],{126:function(e,t,r){e.exports={card:"styles_card__B183x",img:"styles_img__1O9dg",btn:"styles_btn__2LeLg"}},169:function(e,t,r){},170:function(e,t,r){},282:function(e,t,r){},283:function(e,t,r){"use strict";r.r(t);var s,c,n=r(0),a=r.n(n),i=r(36),o=r.n(i),u=r(26),l=r(66),d=r(25),j=r(286),b=r(32),m=r(165),f=r(138),h=r(34),O=25,x=0,p="g",_="en",v="UFsb5tfUUEt9dcAmEQ1xYQbkL2SkQR9g",g=Object(f.a)({reducerPath:"giphy",tagTypes:["Gifs"],baseQuery:Object(h.d)({baseUrl:"https://api.giphy.com/v1/gifs"}),endpoints:function(e){return{search:e.query({query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return console.log(),"search?api_key=".concat(v,"&q=").concat(e,"&limit=").concat(O,"&offset=").concat(x,"&rating=").concat(p,"&lang=").concat(_)}})}}}),y=Object(f.a)({reducerPath:"translate",tagTypes:["Translate"],baseQuery:Object(h.d)({baseUrl:"https://translate.astian.org/translate"}),endpoints:function(e){return{ru2en:e.mutation({query:function(e){return{method:"POST",body:{q:e,source:"ru",target:"en",headers:{"Content-Type":"application/json"}}}}})}}}),k=r(39),N=r(61),T=r.n(N),w=r(89),L=r(11),S=r(291),E=function(e){var t=Object(S.a)(e).querySelectorAll("td>a").map((function(e,t){return decodeURI(e.getAttribute("href"))}));return t=t.slice(1,t.length)},C="https://music.p1ratrulezzz.com/FLAC/",F=Object(L.c)("musics/fetchMusicFolders",function(){var e=Object(w.a)(T.a.mark((function e(t,r){var s,c,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r.rejectWithValue,e.prev=1,e.next=4,fetch(C);case 4:if((c=e.sent).ok){e.next=7;break}throw new Error("Server Error!");case 7:return e.next=9,c.text();case 9:return n=e.sent,e.abrupt("return",E(n));case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,r){return e.apply(this,arguments)}}()),I=Object(L.c)("musics/fetchMusicLists",function(){var e=Object(w.a)(T.a.mark((function e(t,r){var s,c,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r.rejectWithValue,e.prev=1,e.next=4,fetch(C+t+"/");case 4:if((c=e.sent).ok){e.next=7;break}throw new Error("Server Error!");case 7:return e.next=9,c.text();case 9:return n=e.sent,e.abrupt("return",E(n));case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,r){return e.apply(this,arguments)}}()),z=Object(L.d)({name:"musics",initialState:{musicsFolder:{status:null,error:null,list:[]},musicsList:{status:null,error:null,list:[]}},reducers:{},extraReducers:(s={},Object(k.a)(s,F.pending,(function(e){e.musicsFolder.status="loading",e.musicsFolder.error=null})),Object(k.a)(s,F.fulfilled,(function(e,t){e.musicsFolder.status="fulfilled",e.musicsFolder.list=t.payload})),Object(k.a)(s,F.rejected,(function(e,t){e.musicsFolder.status="rejected",e.musicsFolder.error=t.payload})),Object(k.a)(s,I.pending,(function(e){e.musicsList.status="loading",e.musicsList.error=null})),Object(k.a)(s,I.fulfilled,(function(e,t){e.musicsList.status="fulfilled",e.musicsList.list=t.payload})),Object(k.a)(s,I.rejected,(function(e,t){e.musicsList.status="rejected",e.musicsList.error=t.payload})),s)}).reducer,U=g.useSearchQuery,M=y.useRu2enMutation,P=Object(L.a)({reducer:(c={},Object(k.a)(c,g.reducerPath,g.reducer),Object(k.a)(c,y.reducerPath,y.reducer),Object(k.a)(c,"musics",z),c),middleware:function(e){return e().concat(g.middleware,y.middleware)}}),q=r(289),A=r(290),Q=r(173),R=r(126),W=r.n(R),B=r(6),Y=function(e){var t=e.gifData;return console.log("g",t),Object(B.jsxs)(q.a,{hoverable:!0,className:W.a.card,children:[Object(B.jsx)(A.a,{className:W.a.img,title:t.title,src:t.images.preview_gif.url,width:"100%",preview:{src:t.images.original.url}}),Object(B.jsx)(Q.a,{type:"default",onClick:function(){return e=t.images.downsized_large.url,void navigator.clipboard.writeText(e);var e},className:W.a.btn,children:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})},D=r(293),G=r(287),H=r(91),J=r.n(H),K=D.a.Search,V=function(e){var t=e.changeSearch,r=G.a.useForm(),s=Object(b.a)(r,1)[0],c=M(),a=Object(b.a)(c,2),i=a[0],o=a[1].isLoading,u=Object(n.useState)(""),l=Object(b.a)(u,2),d=l[0],j=l[1],f=function(){var e=Object(w.a)(T.a.mark((function e(t){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t).unwrap();case 2:r=e.sent,j(r.translatedText);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t(d)}),[d]),Object(B.jsxs)(G.a,{form:s,name:"searchForm",layout:"vertical",initialValues:{remember:!1},className:J.a.searchForm,children:[Object(B.jsx)(G.a.Item,{name:"searchText",children:Object(B.jsx)(K,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u0438\u043b\u0438 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c",enterButton:"\u041f\u043e\u0438\u0441\u043a",size:"large",onSearch:function(e){return function(e){var t=e.searchText;/^[a-zA-Z]+$/.test(t)?(console.log("en"),j(t)):(console.log("ru"),f(t)),s.resetFields()}({searchText:e})}})}),Object(B.jsxs)("div",{className:J.a.englishText,children:[Object(B.jsx)("div",{className:J.a.head,children:"\u0422\u0435\u043a\u0441\u0442 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c:"}),Object(B.jsx)("div",{className:J.a.transText,children:o?Object(B.jsx)(m.a,{}):d})]})]})},X=r(82),Z=r.n(X),$=(j.a.Content,function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),r=t[0],s=t[1],c=U(r),a=c.data,i=c.isLoading,o=null===a||void 0===a?void 0:a.data,u=Object(n.useCallback)((function(e){s(e)}));return Object(B.jsxs)("div",{className:Z.a.container,children:[Object(B.jsxs)("div",{className:Z.a.blog,children:[Object(B.jsxs)("h2",{children:["\u041f\u043e\u0438\u0441\u043a gif \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0439 \u0438\u0437 \u0441\u0435\u0440\u0438\u0432\u0438\u0441\u0430"," ",Object(B.jsx)("a",{href:"https://giphy.com/",target:"_blank"})]}),Object(B.jsx)("p",{children:"\u0415\u0441\u043b\u0438 \u0432\u0432\u0435\u0441\u0442\u0438 \u043f\u0440\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u0442\u043e \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u0442 \u0442\u0435\u043a\u0441\u0442 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u0438 \u0432\u044b\u0434\u0430\u0441\u0442 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})]}),Object(B.jsx)("div",{className:Z.a.form,children:Object(B.jsx)(V,{changeSearch:u})}),Object(B.jsxs)("div",{className:Z.a.list,children:[o&&o.map((function(e,t){return Object(B.jsx)(Y,{gifData:e},t)})),i&&Object(B.jsx)("div",{className:Z.a.loader,children:Object(B.jsx)(m.a,{size:"large"})})]})]})}),ee=r(292),te=function(e){var t=e.status,r=e.error;return Object(B.jsxs)(B.Fragment,{children:["loading"===t&&Object(B.jsx)("div",{className:"loader",children:Object(B.jsx)(m.a,{size:"large"})}),r&&Object(B.jsx)(ee.a,{message:"Error",description:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430.",type:"error",showIcon:!0})]})},re=r(288),se=function(e){var t=e.folders;return console.log("folders",t),Object(B.jsx)(re.b,{header:Object(B.jsx)("div",{children:"Music folders"}),bordered:!0,dataSource:t,renderItem:function(e){return Object(B.jsx)(re.b.Item,{children:Object(B.jsx)(l.b,{to:"/music/"+e,children:e})})}})},ce=r(169),ne=r.n(ce),ae=function(){var e=Object(u.d)(),t=Object(u.e)((function(e){return e.musics})).musicsFolder,r=t.list,s=t.status,c=t.error;return Object(n.useEffect)((function(){e(F())}),[e]),Object(B.jsxs)("div",{className:ne.a.music,children:[Object(B.jsx)(te,{status:s,error:c}),Object(B.jsx)(se,{folders:r})]})},ie=r(295),oe=r(92),ue=r.n(oe);var le=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)(),a=Object(b.a)(c,2),i=a[0],o=a[1],u=Object(n.useState)(!1),l=Object(b.a)(u,2),d=l[0],j=l[1],m=Object(n.useState)(),f=Object(b.a)(m,2),h=f[0],O=f[1];return Object(n.useEffect)((function(){var e=document.getElementById("audio"),t=function(){s(e.duration),o(e.currentTime)},r=function(){return o(e.currentTime)};return e.addEventListener("loadeddata",t),e.addEventListener("timeupdate",r),d?e.play():e.pause(),h&&h!==i&&(e.currentTime=h,O(null)),function(){e.removeEventListener("loadeddata",t),e.removeEventListener("timeupdate",r)}})),{curTime:i,duration:r,playing:d,setPlaying:j,setClickedTime:O}},de=function(e){var t=e.handleClick;return Object(B.jsx)("button",{onClick:function(){return t()},children:Object(B.jsx)(ie.a,{style:{color:"#1890ff",fontSize:"60px"}})})},je=r(296),be=function(e){var t=e.handleClick;return Object(B.jsx)("button",{onClick:function(){return t()},children:Object(B.jsx)(je.a,{style:{color:"#52c41a",fontSize:"60px"}})})},me=r(137),fe=r.n(me),he=(r(281),r(83)),Oe=r.n(he),xe=function(e){var t=e.duration,r=e.curTime,s=e.onTimeUpdate,c=r/t*100;function n(e){return fe.a.duration(e,"seconds").format("mm:ss",{trim:!1})}function a(e){var r=e.pageX,s=document.querySelector(".bar__progress"),c=s.getBoundingClientRect().left+window.scrollX,n=s.offsetWidth;return t/n*(r-c)}return Object(B.jsxs)("div",{className:Oe.a.bar,children:[Object(B.jsx)("span",{className:Oe.a.time1,children:n(r)}),Object(B.jsx)("div",{className:Oe.a.progress,style:{background:"linear-gradient(to right, ".concat("#1890ff"," ").concat(c,"%, white 0)")},onMouseDown:function(e){return function(e){s(a(e));var t=function(e){s(a(e))};document.addEventListener("mousemove",t),document.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",t)}))}(e)},children:Object(B.jsx)("span",{className:Oe.a.knob,style:{left:"".concat(c-2,"%")}})}),Object(B.jsx)("span",{className:Oe.a.time2,children:n(t)})]})},pe=function(e){var t=e.url,r=e.name,s=le(),c=s.curTime,n=s.duration,a=s.playing,i=s.setPlaying,o=s.setClickedTime;return Object(B.jsxs)("div",{className:ue.a.audio,children:[Object(B.jsxs)("audio",{id:"audio",children:[Object(B.jsx)("source",{src:t}),"Your browser does not support the ",Object(B.jsx)("code",{children:"audio"})," element."]}),Object(B.jsxs)("div",{className:ue.a.control,children:[Object(B.jsx)("div",{className:ue.a.playpause,children:a?Object(B.jsx)(be,{handleClick:function(){return i(!1)}}):Object(B.jsx)(de,{handleClick:function(){return i(!0)}})}),Object(B.jsx)("div",{className:ue.a.trackName,children:r}),Object(B.jsx)(xe,{curTime:c,duration:n,onTimeUpdate:function(e){return o(e)}})]})]})},_e=r(84),ve=r.n(_e),ge=function(e){var t=e.folder,r=e.tracks,s=Object(n.useState)(!1),c=Object(b.a)(s,2),a=c[0],i=c[1],o=Object(n.useState)({url:"",name:""}),u=Object(b.a)(o,2),l=u[0],d=u[1];return Object(B.jsxs)("div",{className:ve.a.ListTrack,children:[Object(B.jsx)(re.b,{header:Object(B.jsx)("div",{children:"Music Track"}),bordered:!0,dataSource:r,renderItem:function(e){return Object(B.jsx)(re.b.Item,{className:ve.a.item,onClick:function(){return function(e){var r=e.name,s="".concat(C).concat(encodeURI(t),"/").concat(encodeURI(r));console.log("ttt",s),d({url:l,name:r}),i(!0)}({name:e})},children:Object(B.jsxs)("div",{className:ve.a.itemTrack,children:[Object(B.jsx)(ie.a,{}),Object(B.jsx)("div",{className:ve.a.text,children:e})]})})}}),a&&Object(B.jsx)("div",{className:ve.a.playerContainer,children:Object(B.jsx)(pe,{url:l.url,name:l.name})})]})},ye=r(170),ke=r.n(ye),Ne=function(e){var t=e.match.params.id,r=Object(u.d)(),s=Object(u.e)((function(e){return e.musics})).musicsList,c=s.list,a=s.status,i=s.error;return Object(n.useEffect)((function(){r(I(t))}),[r,t]),Object(B.jsxs)("div",{className:ke.a.music,children:[Object(B.jsx)(te,{status:a,error:i}),Object(B.jsx)(ge,{folder:t,tracks:c})]})},Te=r(294),we=r(297),Le=r(72),Se=r.n(Le),Ee=j.a.Header,Ce=function(){var e=Object(d.f)();return Object(B.jsxs)(Ee,{className:Se.a.header,children:[Object(B.jsxs)("div",{className:Se.a.left,children:[Object(B.jsx)(we.a,{className:Se.a.logo,twoToneColor:"#eb2f96",style:{fontSize:"20px"}}),Object(B.jsxs)(Te.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["/"],selectedKeys:[e.pathname],className:Se.a.menu,children:[Object(B.jsx)(Te.a.Item,{children:Object(B.jsx)(l.b,{to:"/",children:"Giphy"})},"/"),Object(B.jsx)(Te.a.Item,{children:Object(B.jsx)(l.b,{to:"/music",children:"Music"})},"/music")]})]}),Object(B.jsx)("div",{className:Se.a.right,children:Object(B.jsxs)("span",{className:Se.a.copyright,children:["Power by ",Object(B.jsx)("a",{href:"https://giphy.com/",children:"Giphy"})]})})]})},Fe=j.a.Content,Ie=function(){return Object(B.jsx)(l.a,{basename:"/searchgif",children:Object(B.jsxs)(j.a,{children:[Object(B.jsx)(Ce,{}),Object(B.jsx)(Fe,{className:"container",children:Object(B.jsxs)(d.c,{children:[Object(B.jsx)(d.a,{path:"/",exact:!0,children:Object(B.jsx)($,{})}),Object(B.jsx)(d.a,{path:"/music",exact:!0,children:Object(B.jsx)(ae,{})}),Object(B.jsx)(d.a,{path:"/music/:id",component:Ne})]})})]})})};r(282);o.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(u.a,{store:P,children:Object(B.jsx)(Ie,{})})}),document.getElementById("root"))},72:function(e,t,r){e.exports={header:"styles_header__3yExn",logo:"styles_logo__1Q2bG",left:"styles_left__1ir1n",copyright:"styles_copyright__3mqcn",menu:"styles_menu__2vLYW"}},82:function(e,t,r){e.exports={container:"styles_container__ttgLw",form:"styles_form__UF1pO",list:"styles_list__2LF3t",loader:"styles_loader__1mAIp"}},83:function(e,t,r){e.exports={bar:"styles_bar__13PEz",time1:"styles_time1__fQM8q",time2:"styles_time2__3HM6E",progress:"styles_progress__Sa4jf",knob:"styles_knob__3_jYZ"}},84:function(e,t,r){e.exports={itemTrack:"styles_itemTrack__2YP-f",text:"styles_text__2sezH",ListTrack:"styles_ListTrack__148iO",playerContainer:"styles_playerContainer__1XDjI"}},91:function(e,t,r){e.exports={englishText:"styles_englishText__2xIS4",head:"styles_head__3pOeK",transText:"styles_transText__1y7mW",searchForm:"styles_searchForm__3xJAL"}},92:function(e,t,r){e.exports={control:"styles_control__1CHLe",playpause:"styles_playpause__jcWTl",trackName:"styles_trackName__29wUA"}}},[[283,1,2]]]);
//# sourceMappingURL=main.9968858a.chunk.js.map