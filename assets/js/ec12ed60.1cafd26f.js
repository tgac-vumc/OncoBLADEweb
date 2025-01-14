"use strict";(self.webpackChunkStatescope=self.webpackChunkStatescope||[]).push([[7347],{9920:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"create-signatures","title":"Create Signatures from scRNA Data","description":"This page guides you through the process of creating signature matrices (X and stdX) from your own single-cell RNA-seq data. Additionally, instructions for using a Snakemake pipeline and optionally scheduling it with SLURM on the HPC are provided.","source":"@site/docs/create-signatures.md","sourceDirName":".","slug":"/create-signatures","permalink":"/Statescopeweb/docs/create-signatures","draft":false,"unlisted":false,"editUrl":"https://github.com/tgac-vumc/Statescopeweb.git/docs/create-signatures.md","tags":[],"version":"current","frontMatter":{"id":"create-signatures","title":"Create Signatures from scRNA Data","sidebar_label":"Create Signatures"},"sidebar":"tutorialSidebar","previous":{"title":"R","permalink":"/Statescopeweb/docs/r"},"next":{"title":"Run Deconvolution","permalink":"/Statescopeweb/docs/deconvolution"}}');var i=s(4848),t=s(8453);const l={id:"create-signatures",title:"Create Signatures from scRNA Data",sidebar_label:"Create Signatures"},a="Create Signatures from Single-cell RNA-seq Data",c={},o=[{value:"Accepted Input Formats",id:"accepted-input-formats",level:2},{value:"Steps to Create Signatures",id:"steps-to-create-signatures",level:2},{value:"<strong>1. Preprocess Your scRNA-seq Data</strong>",id:"1-preprocess-your-scrna-seq-data",level:3},{value:"<strong>2. Annotate Cell Types</strong>",id:"2-annotate-cell-types",level:3},{value:"<strong>3. Calculate Average Expression Profiles</strong>",id:"3-calculate-average-expression-profiles",level:3},{value:"<strong>4. Use the Snakemake Pipeline</strong>",id:"4-use-the-snakemake-pipeline",level:3},{value:"Using the Snakemake Pipeline",id:"using-the-snakemake-pipeline",level:2},{value:"<strong>Prerequisites</strong>",id:"prerequisites",level:3},{value:"<strong>Running the Pipeline</strong>",id:"running-the-pipeline",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"create-signatures-from-single-cell-rna-seq-data",children:"Create Signatures from Single-cell RNA-seq Data"})}),"\n",(0,i.jsxs)(n.p,{children:["This page guides you through the process of creating signature matrices (",(0,i.jsx)(n.code,{children:"X"})," and ",(0,i.jsx)(n.code,{children:"stdX"}),") from your own single-cell RNA-seq data. Additionally, instructions for using a ",(0,i.jsx)(n.strong,{children:"Snakemake pipeline"})," and optionally scheduling it with ",(0,i.jsx)(n.strong,{children:"SLURM"})," on the HPC are provided."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"accepted-input-formats",children:"Accepted Input Formats"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Anndata"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add some information about the file types"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Have data in some other format ?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Convert it using our script","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:".rds files"}),"\n",(0,i.jsx)(n.li,{children:"counts data and metadata separately (.mtx, .csv....)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"steps-to-create-signatures",children:"Steps to Create Signatures"}),"\n",(0,i.jsx)(n.h3,{id:"1-preprocess-your-scrna-seq-data",children:(0,i.jsx)(n.strong,{children:"1. Preprocess Your scRNA-seq Data"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Quality Control"}),": Filter out low-quality cells and genes."]}),"\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-annotate-cell-types",children:(0,i.jsx)(n.strong,{children:"2. Annotate Cell Types"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Assign cell type labels to each cell in your dataset."}),"\n",(0,i.jsxs)(n.li,{children:["Ensure that the metadata includes a column for cell type annotations (e.g., ",(0,i.jsx)(n.code,{children:"cell_type_major"}),").","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For adata objects should be a column in adata.obs"}),"\n",(0,i.jsx)(n.li,{children:"For .rds and metadata should have an appropriate column with the cell type annotations for the cells"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-calculate-average-expression-profiles",children:(0,i.jsx)(n.strong,{children:"3. Calculate Average Expression Profiles"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Compute ",(0,i.jsx)(n.code,{children:"X"})]}),": Calculate the average expression of each gene for each cell type."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use log-transformed data for consistency."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Compute ",(0,i.jsx)(n.code,{children:"stdX"})]}),": Calculate the standard deviation of gene expression for each gene within each cell type."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-use-the-snakemake-pipeline",children:(0,i.jsx)(n.strong,{children:"4. Use the Snakemake Pipeline"})}),"\n",(0,i.jsx)(n.p,{children:"To streamline the process, you can use the Snakemake pipeline provided in the example above. It handles data preprocessing, identifying highly variable genes, running AutoGeneS, and generating the signature matrices."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"using-the-snakemake-pipeline",children:"Using the Snakemake Pipeline"}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Install Snakemake"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"conda"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"conda install -c bioconda -c conda-forge snakemake\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Prepare Configuration"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Edit the ",(0,i.jsx)(n.code,{children:"config.yaml"})," file to match your dataset:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"use_existing_h5ad"})," to ",(0,i.jsx)(n.code,{children:"True"})," or ",(0,i.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Provide paths to raw or existing ",(0,i.jsx)(n.code,{children:".h5ad"})," data."]}),"\n",(0,i.jsxs)(n.li,{children:["Adjust parameters like ",(0,i.jsx)(n.code,{children:"Ngenes"})," and relevant column names."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Directory Structure"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure your data is organized as follows:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"data/\n  \u251c\u2500\u2500 raw/\n  \u2502   \u251c\u2500\u2500 RNA_rawcounts_matrix.rds\n  \u2502   \u251c\u2500\u2500 metadata.csv\n  \u251c\u2500\u2500 processed/\nresults/\nscripts/\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Activate Environment"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use the appropriate Conda environment for each rule (e.g., ",(0,i.jsx)(n.code,{children:"env_r.yaml"}),", ",(0,i.jsx)(n.code,{children:"env_preprocess.yaml"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"running-the-pipeline",children:(0,i.jsx)(n.strong,{children:"Running the Pipeline"})}),"\n",(0,i.jsx)(n.p,{children:"To run the pipeline locally:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"snakemake --cores 4\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var r=s(6540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);