"use strict";(self.webpackChunkStatescope=self.webpackChunkStatescope||[]).push([[8413],{6785:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"overview","title":"Overview","description":"In the BLADE package, you can load the following functions and modules.","source":"@site/docs/overview.md","sourceDirName":".","slug":"/overview","permalink":"/docs/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/tgac-vumc/Statescopeweb.git/docs/overview.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"overview","title":"Overview","sidebar_position":3}}');var i=s(4848),r=s(8453);const a={id:"overview",title:"Overview",sidebar_position:3},o="Overview of BLADE",l={},c=[{value:"BLADE: Core Algorithms",id:"blade-core-algorithms",level:2},{value:"Framework",id:"framework",level:2},{value:"Input arguments",id:"input-arguments",level:3},{value:"Output values",id:"output-values",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"overview-of-blade",children:"Overview of BLADE"})}),"\n",(0,i.jsx)(n.p,{children:"In the BLADE package, you can load the following functions and modules."}),"\n",(0,i.jsx)(n.h2,{id:"blade-core-algorithms",children:"BLADE: Core Algorithms"}),"\n",(0,i.jsxs)(n.p,{children:["A class object contains core algorithms of BLADE. Users can reach internal variables (Nu, Omega, and Beta) and functions for calculating objective functions (ELBO function) and gradients with respect to the variational parameters. There is an optimization function (",(0,i.jsx)(n.code,{children:"BLADE.Optimize()"}),") for performing L-BFGS optimization."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ExpF(self.Beta)"}),": returns a matrix containing estimated fractions of each cell type in each sample."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"self.Nu"}),": contains estimated gene expression levels of each gene in each cell type for each sample."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"numpy.mean(self.Nu,0)"}),": To obtain an estimated gene expression profile per cell type, we can simply take an average across the samples."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"framework",children:"Framework"}),"\n",(0,i.jsx)(n.p,{children:"A framework based on the BLADE class module above. Here are the inputs and outputs for using the Framework function:"}),"\n",(0,i.jsx)(n.h3,{id:"input-arguments",children:"Input arguments"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"X"}),": A matrix contains average gene expression profiles per cell type (a signature matrix) in log-scale."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"stdX"}),": A matrix contains standard deviation per gene per cell type."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Y"}),": A matrix contains bulk gene expression data in linear-scale."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Ind_Marker"}),": Index for marker genes, defaults to [True]*Ngene."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Alphas, Alpha0s, Kappa0s, SYs"}),": Hyperparameters considered in the Empirical Bayes phase."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"output-values",children:"Output values"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"final_obj"}),": A final BLADE object with optimized variational parameters and hyperparameters."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"best_obj"}),": The best object from Empirical Bayes step."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"best_set"}),": A list contains the hyperparameters selected in the Empirical Bayes step."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"All_out"}),": A list of BLADE objects from the Empirical Bayes step."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);