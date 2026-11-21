F=require('fs')
f=(x,t,e)=>B.includes(x)?A[z=x+e]%9&&!B.includes(z)&&Q.push([x,B.map(v=>v-x?v:z).sort(),t]):R[x]||!A[x]||(R[x]=A[x]>8?H=[x,t]:1,D.map((e,j)=>f(x+e,t+'rldu'[j],e)))
for(n=0;n<5;){L=F.readFileSync('/input'+(d='/i00'+ ++n)+'/level.txt');D=[1,-1,W=L.indexOf(10)+1,-W];p=L.indexOf(64);o=''
for(k=4;k--;[p,o]=H)for([p,B,s]of(B=[],A=[...L].map((c,i)=>c-35&&(i/W^8?(i/W<8|i%W/4&2)==k&&(c<36|c>42||B.push(i)):9)),V={},Q=[[p,B,o]]))if(f(p,s,R=V[B]||=[]),B.every(x=>L[x]>36))break
F.mkdirSync(O='/output'+d);F.writeFileSync(O+'/solution.txt',o)}
