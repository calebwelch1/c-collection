import{d}from"./demon.96aa7188.js";import{F as m}from"./Footer.4db73362.js";import{_ as p}from"./link.6545dbc3.js";import{_ as h,N as g,r,o as u,c as f,a as t,b as s,w as b,e as o}from"./index.aab22b1f.js";var _="/c-collection/assets/black_swan_cover.83a36b68.jpg",x="/c-collection/assets/black-swan-trailer.9b077bb2.mp4";const v={name:"BlackSwan",props:{mainImg:{type:String,required:!1,default:d}},components:{NCarousel:g,Footer:m},data(){return{blackSwanTrailer:x,cover:_,shareLink:"calebwelch1.github.io/c-collection/black-swan",amazonLink:"https://www.amazon.com/gp/video/detail/B004Q08BE2/ref=atv_dp_share_cu_r"}},methods:{copyText(){navigator.clipboard.writeText(this.shareLink)}}},y={class:"main"},w=t("div",{class:"col-span-12",style:{height:"6rem",width:"100%",background:"#252525","margin-top":"0rem"}},[t("p",{style:{visibility:"hidden"}}," invisible ")],-1),k={id:"top",class:"col-span-12 my-auto flex-col",style:{display:"block"}},z={class:"grid-12",style:{}},C={class:"flex-col left",style:{height:"auto",width:"100%",display:"block","margin-top":"auto","margin-bottom":"auto","padding-left":"2rem","padding-right":"2rem","padding-top":"0rem"}},B={class:"grid-12",style:{"padding-left":"2rem","padding-right":"2rem"}},S={id:"contain-share"},T=t("p",null," Share ",-1),j=o('<p style="font-size:18px;color:#cdcdcb;margin-bottom:1rem;"> Film Info </p><p style="font-size:16px;color:#8e8e8e;"> American </p><p style="font-size:16px;color:#8e8e8e;"> 2010 </p><p style="font-size:16px;color:#8e8e8e;"> R </p><p style="font-size:16px;color:#8e8e8e;"> 108 minutes </p>',5),A=o('<div id="contain-text" style="padding-left:4rem;padding-right:4rem;"><p class="author gold"> Darren Aronofsky </p><h1 class="media-title"> Black Swan </h1><p class="content-text" style="display:block;"> --- Black Swan </p></div><div class="col-span-1"></div>',2),F={class:"flex-col right",style:{height:"auto",width:"100%",display:"block margin-top: auto","margin-bottom":"auto","padding-top":"4rem","padding-bottom":"2rem"}},N=["src"],L={class:"info-box flex-col mx-auto"},V=t("p",{class:"mx-auto"}," Viewing Options ",-1),D=["href"],E=t("button",{class:"view-button"},"Amazon",-1),I=[E],R={id:"scene-carousel",class:"col-span-12 flex-col my-auto",style:{"margin-left":"0rem",height:"100vh"}},q=["src"],M=["src"],O=o('<div class="col-span-12" style="margin-left:2rem;margin-right:2rem;height:auto;width:100;"><div class="justify-around flex-wrap content-container" style="padding-top:6rem;"><div class="sub-content flex-col" style="height:98vh;width:100%;display:block;margin-top:auto;margin-bottom:auto;"><h1 class=""> Creator </h1><div style="border-bottom:2px solid black;width:80%;margin-bottom:3rem;"></div><p class="content-text" style="display:block;white-space:nowrap;"><strong>Director</strong> ................................. Darren Aronofsky <br></p></div><div class="sub-content flex-col" style="height:98vh;width:100%;display:block;margin-top:auto;margin-bottom:auto;min-width:0rem;"><h1 style="margin-bottom:3rem;"> Related Media </h1><div class="flex-wrap related-media-flex" style=""><div class="related-media mx-auto flex-col justify-start"><div style="height:15rem;width:9rem;background-color:black;"></div><p>Title</p><p class="creator-text">Creator</p></div><div class="related-media mx-auto flex-col justify-start"><div style="height:15rem;width:9rem;background-color:black;"></div><p>Title</p><p class="creator-text">Creator</p></div></div></div></div></div>',1);function Q(G,i,H,J,e,a){const n=r("n-carousel"),l=r("Footer");return u(),f("main",null,[t("div",y,[w,t("div",k,[t("div",z,[t("div",C,[t("div",B,[t("div",S,[T,t("img",{onClick:i[0]||(i[0]=(...c)=>a.copyText&&a.copyText(...c)),class:"h-2 w-2",src:p,style:{"margin-top":"0.4rem",margin:"1rem",cursor:"pointer"},alt:"images made by https://www.flaticon.com - Creaticca Creative Agency"}),j]),A])]),t("div",F,[t("img",{src:e.cover,style:{display:"block","margin-top":"2rem","margin-bottom":"2rem"},class:"art mx-auto"},null,8,N),t("div",L,[V,t("a",{href:e.amazonLink,target:"_blank"},I,8,D)])])])]),t("div",R,[s(n,{direction:"horizontal","dot-placement":"bottom",effect:"slide",mousewheel:"",style:{width:"80%",height:"85%",display:"block",margin:"auto"},"show-arrow":""},{default:b(()=>[t("video",{src:e.blackSwanTrailer,class:"c-image",controls:"",preload:"auto",type:"video/mp4"},null,8,q),t("img",{src:e.cover,class:"c-image"},null,8,M)]),_:1})]),O,s(l)])])}var X=h(v,[["render",Q]]);export{X as default};