import{F as c}from"./Footer.0312ce52.js";import{y as d}from"./your_name_stars.4fe10f7f.js";import{c as m}from"./rockwell_cover.650aff66.js";import{c as u}from"./cant-hurt-me-cover.76c3e5ba.js";import{_ as p,r as h,o,c as r,a as e,R as g,S as b,e as v,U as _,W as i}from"./index.b832e2a6.js";var y="/c-collection/assets/red.7128da49.jpg",f="/c-collection/assets/black_swan_cover.83a36b68.jpg";const k=[{src:d,title:"Your Name",route:"your-name"},{src:y,title:"Blood Meridian",route:"blood-meridian"},{src:f,title:"Black Swan",route:"black-swan"},{src:m,title:"My Adventures as an Illustrator",route:"rockwell"},{src:u,title:"Can't Hurt Me",route:"cant-hurt-me"}];const w={name:"Archive",components:{Footer:c},data(){return{shareLink:"calebwelch1.github.io/c-collection/",amazonLink:"calebwelch1.github.io",archiveArr:k}},methods:{routeMedia(a){this.$router.push(a)}}},x={class:"main"},z=e("div",{class:"col-span-12",style:{height:"6rem",width:"100%",background:"#252525","margin-top":"0rem"}},[e("p",{style:{visibility:"hidden"}}," invisible ")],-1),M={class:"col-span-12 flex-col my-auto justify-between",style:{height:"100vh",width:"100%",background:"#fff","margin-top":"5rem"}},$=["onClick"],B={style:{color:"white","font-size":"4rem","text-align":"center"}},F={class:"absolute",style:{bottom:"-30%",left:"47%"}};function S(a,j,A,C,s,n){const l=h("Footer");return o(),r("main",null,[e("div",x,[z,e("div",M,[(o(!0),r(g,null,b(s.archiveArr,t=>(o(),r("div",{key:t,class:"mx-auto relative",style:_(`width: 50vw; height: 8rem; background: url(${t.src}); margin-bottom: 4rem;`)},[e("div",{onClick:N=>n.routeMedia(t.route),class:"absolute title-appear",style:"width: 50vw; height: 8rem; cursor:pointer; background:black;"},[e("p",B,i(t.title),1)],8,$),e("p",F,i(t.title),1)],4))),128))]),v(l)])])}var I=p(w,[["render",S]]);export{I as default};
