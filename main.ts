F=require('fs')
for(d of F.readdirSync(I='/input/')){L=F.readFileSync(I+d+'/level.txt')+'';W=L.indexOf`
`+1;D=[1,-1,W,-W];p=L.indexOf`@`;o=''
for(k=4;k--;){B=[];A=[...L].map((c,i)=>(c>'#'&c<'+'&(G=i/W<8|(i%W>7)*2)==k&&B.push(i),c!='#'&&((i/W|0)==8?2:G==k)))
V={};for([p,B,s]of Q=[[p,B,o]]){for([x,t]of X=(R=V[B]||=[])[p]?[]:[[p,s]])for(j=4;j--;)B.includes(y=x+(e=D[c='rldu'[j],j]))?A[z=y+e]==1&!B.includes(z)&&Q.push([y,B.map(v=>v-y?v:z).sort(),t+c]):A[y]&&!R[y]&&(R[y]=X.push([y,t+c]))
if(B.every(x=>L[x]>'$')){[p,o]=X.find(([x])=>A[x]>1);break}}}
F.mkdirSync(O='/output/'+d);F.writeFileSync(O+'/solution.txt',o)}
