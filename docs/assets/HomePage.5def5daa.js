import{d as m,b as r,r as v,o as i,c as _,e,t as n,u as d,p as u,f as p,g as s,s as f,h as b,F as V}from"./index.37bc1dfc.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";const k=m("user",{state:()=>({userName:"LiuJie",age:23}),getters:{doubleAge(){return this.age*2}},actions:{changeAge(t){console.log(t,this.age),this.age=t}}}),y="/vite3.0-vue3.2-TypeScript-Pinia-sass-eslint-prettier-template/vite.svg",S="/vite3.0-vue3.2-TypeScript-Pinia-sass-eslint-prettier-template/assets/vue.5532db34.svg",a=t=>(u("data-v-d426c898"),t=t(),p(),t),H={class:"home"},I={class:"card"},x=a(()=>e("p",null,[s(" Edit "),e("code",null,"components/HelloWorld.vue"),s(" to test HMR ")],-1)),N=a(()=>e("p",null,[s(" Check out "),e("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),s(" , the official Vue + Vite starter ")],-1)),P=a(()=>e("p",null,[s(" Install "),e("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",class:"tag"},"Volar"),s(" in your IDE for a better DX ")],-1)),$=a(()=>e("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),j=r({__name:"HelloWorld",props:{msg:null},setup(t){const o=v(0),c="https://production.com";return(h,l)=>(i(),_("div",H,[e("h1",null,n(t.msg)+"----"+n(d(c)),1),e("div",I,[e("button",{class:"btn",type:"button",onClick:l[0]||(l[0]=D=>o.value++)},"count is "+n(o.value),1),x]),N,P,$]))}});const C=g(j,[["__scopeId","data-v-d426c898"]]),T=t=>(u("data-v-858cd61d"),t=t(),p(),t),W=T(()=>e("div",null,[e("a",{href:"https://vitejs.dev",target:"_blank"},[e("img",{src:y,class:"logo",alt:"Vite logo"})]),e("a",{href:"https://vuejs.org/",target:"_blank"},[e("img",{src:S,class:"logo vue",alt:"Vue logo"})])],-1)),B=r({__name:"HomePage",setup(t){const o=k(),{userName:c}=f(o);return(h,l)=>(i(),_(V,null,[W,b(C,{msg:`Vite + Vue + Mobile + by${d(c)}`},null,8,["msg"])],64))}});const A=g(B,[["__scopeId","data-v-858cd61d"]]);export{A as default};