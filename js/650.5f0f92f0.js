"use strict";(globalThis["webpackChunksolair"]=globalThis["webpackChunksolair"]||[]).push([[650],{4611:(e,o,l)=>{l.r(o),l.d(o,{default:()=>T});var a=l(9835);const s={class:"q-px-lg div-contactez-nous"},t=(0,a._)("h2",{class:"text-custom-h2 text-center"},"CONTACTEZ NOUS",-1),n=(0,a._)("p",{class:"text-custom-p text-center"}," Un message ou un avis à nous adresser ? N’hésitez pas à remplir notre questionnaire et nous partager ce que vous en pensez. Tout avis est bon à prendre. ",-1),u={class:"q-pa-md text-center",style:{"align-items":"center","max-width":"300px",margin:"0 auto"}},i={hidden:"",class:"div-informations"},r=(0,a._)("h2",{class:"text-custom-h2"},"NOS INFORMATIONS",-1),m=(0,a._)("p",{class:"text-custom-p"}," Si vous souhaitez nous contacter, voici nos coordonnées ainsi que nos réseaux sociaux. ",-1),d={class:"text-custom-p"},c=(0,a._)("span",{style:{"margin-left":"8px"}},"04 90 49 39 39",-1),p={class:"text-custom-p"},v=(0,a._)("span",{style:{"margin-left":"8px"}},"solair@gmail.com",-1);function g(e,o,l,g,h,b){const x=(0,a.up)("HeaderCustom"),y=(0,a.up)("q-input"),V=(0,a.up)("q-form"),f=(0,a.up)("q-icon"),_=(0,a.up)("FooterComponent");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(x,{label:"Contact"}),(0,a._)("div",s,[t,n,(0,a.Wm)(V,{class:"q-gutter-md",onSubmit:e.envoyerFormulaire},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a.Wm)(y,{outlined:"",modelValue:e.nom,"onUpdate:modelValue":o[0]||(o[0]=o=>e.nom=o),placeholder:"Nom*",rules:[e=>!!e||"Le nom est obligatoire*"],"lazy-rules":""},null,8,["modelValue","rules"]),(0,a.Wm)(y,{outlined:"",modelValue:e.prenom,"onUpdate:modelValue":o[1]||(o[1]=o=>e.prenom=o),placeholder:"Prénom*",rules:[e=>!!e||"Le Prénom est obligatoire*"],"lazy-rules":""},null,8,["modelValue","rules"]),(0,a.Wm)(y,{outlined:"",modelValue:e.mail,"onUpdate:modelValue":o[2]||(o[2]=o=>e.mail=o),placeholder:"E-mail*",rules:[e=>!!e||"Le E-mail est obligatoire*",e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||"L'adresse e-mail doit être valide"],"lazy-rules":""},null,8,["modelValue","rules"]),(0,a.Wm)(y,{outlined:"",modelValue:e.telephone,"onUpdate:modelValue":o[3]||(o[3]=o=>e.telephone=o),placeholder:"Téléphone*",rules:[e=>!!e||"Le Téléphone est obligatoire*"],"lazy-rules":""},null,8,["modelValue","rules"]),(0,a.Wm)(y,{autogrow:"",outlined:"",modelValue:e.message,"onUpdate:modelValue":o[4]||(o[4]=o=>e.message=o),placeholder:"Message*",rules:[e=>!!e||"Le Message est obligatoire*"],"lazy-rules":""},null,8,["modelValue","rules"]),(0,a._)("button",{type:"submit",onClick:o[5]||(o[5]=(...o)=>e.envoyerFormulaire&&e.envoyerFormulaire(...o)),class:"button-select-custom"}," ENVOYER ")])])),_:1},8,["onSubmit"])]),(0,a._)("div",i,[r,m,(0,a._)("p",d,[(0,a.Wm)(f,{size:"20px",name:"call",style:{color:"#fa6f6f"}}),c]),(0,a._)("p",p,[(0,a.Wm)(f,{name:"mail",style:{color:"#fa6f6f"}}),v])]),(0,a.Wm)(_)],64)}var h=l(499),b=l(4664),x=l(8706),y=l(9302);const V=(0,a.aZ)({name:"ContactPage",setup(){const e=(0,y.Z)(),o=(0,h.iH)(""),l=(0,h.iH)(""),a=(0,h.iH)(""),s=(0,h.iH)(""),t=(0,h.iH)(""),n=()=>{u()?location.href="mailto:solair@gmail.com?subject=Nouveau message de contact&body=Nom: "+o.value+"%0D%0APrénom: "+l.value+"%0D%0AE-mail: "+a.value+"%0D%0ATéléphone: "+s.value+"%0D%0AMessage: "+t.value:e.notify({color:"red-5",textColor:"white",icon:"warning",message:"Remplisser les champs obligatoire",position:"bottom"})},u=()=>!!(null===o||void 0===o?void 0:o.value)&&!!(null===l||void 0===l?void 0:l.value)&&!!(null===a||void 0===a?void 0:a.value)&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.value)&&!!(null===s||void 0===s?void 0:s.value)&&!!(null===t||void 0===t?void 0:t.value);return{nom:o,prenom:l,mail:a,telephone:s,message:t,envoyerFormulaire:n}},components:{HeaderCustom:b.Z,FooterComponent:x.Z}});var f=l(1639),_=l(8326),C=l(7471),z=l(2857),N=l(9984),W=l.n(N);const q=(0,f.Z)(V,[["render",g]]),T=q;W()(V,"components",{QForm:_.Z,QInput:C.Z,QIcon:z.Z})}}]);