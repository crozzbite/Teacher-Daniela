import{a as o}from"./chunk-37PIXH5Y.js";import{J as a,P as n}from"./chunk-7UXSPQUU.js";var r=class i{state=n(o);PHONE_NUMBER="+521234567890";buildMessage(){let e=this.state.level()||"Principiante",t=this.state.goal()||"Mejorar mi fluidez",s=this.state.recommendedPlan();return`\xA1Hola Teacher Daniela! Acabo de hacer el diagn\xF3stico interactivo.

\u{1F4CA} *Mi Nivel Actual:* ${e}
\u{1F3AF} *Mi Objetivo Principal:* ${t}
\u{1F4A1} *Plan Recomendado:* ${s}

Me gustar\xEDa recibir mi clase diagn\xF3stica gratuita y conocer m\xE1s sobre este plan.`}getDeepLink(){let e=this.buildMessage(),t=encodeURIComponent(e);return`https://wa.me/${this.PHONE_NUMBER}?text=${t}`}triggerRedirection(){let e=this.getDeepLink();window.open(e,"_blank")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=a({token:i,factory:i.\u0275fac,providedIn:"root"})};export{r as a};
