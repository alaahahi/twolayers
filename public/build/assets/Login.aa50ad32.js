import{c as k,w,v as x,u as s,o as d,a as b,i as v,b as y,d as c,e as m,f as a,H as V,t as $,g as u,h as r,L as B,j as p,n as C,k as L}from"./app.c91e89d4.js";import{_ as N,a as f,b as U}from"./PrimaryButton.96063f98.js";import{_,a as g}from"./TextInput.eb06525d.js";import"./ApplicationLogo.489ae9c4.js";const R=["value"],S={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const i=l,n=k({get(){return i.checked},set(t){e("update:checked",t)}});return(t,o)=>w((d(),b("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=h=>v(n)?n.value=h:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,R)),[[x,s(n)]])}},q={key:0,class:"mb-4 font-medium text-sm text-green-600"},F=["onSubmit"],P={class:"mt-4"},j={class:"block mt-4"},D={class:"flex items-center"},H=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),M={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=y({email:"",password:"",remember:!1}),i=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(d(),c(N,null,{default:m(()=>[a(s(V),{title:"Log in"}),l.status?(d(),b("div",q,$(l.status),1)):u("",!0),r("form",{onSubmit:L(i,["prevent"])},[r("div",null,[a(_,{for:"email",value:"User Name"}),a(g,{id:"email",type:"text",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",P,[a(_,{for:"password",value:"Password"}),a(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",j,[r("label",D,[a(S,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=o=>s(e).remember=o)},null,8,["checked"]),H])]),r("div",M,[l.canResetPassword?(d(),c(s(B),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[p(" Forgot your password? ")]),_:1},8,["href"])):u("",!0),a(U,{class:C(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[p(" Log in ")]),_:1},8,["class","disabled"])])],40,F)]),_:1}))}};export{G as default};
