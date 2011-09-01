<<<<<<< HEAD
(function(g){function e(a,b){var c;for(c=-1;;)switch(c){case -1:var d,e,f,g,h;d=a;e=b;c=d==0?1:2;break;case 1:f=0;c=11;break;case 2:g=_PyTuple_New(2);c=g==0?3:6;break;case 3:HEAP[d]-=1;c=HEAP[d]==0?4:5;break;case 4:FUNCTION_TABLE[HEAP[HEAP[d+4]+24]](d);c=5;break;case 5:f=0;c=11;break;case 6:HEAP[g+12]=d;h=_PyInt_FromSsize_t(e);var j=g;c=h==0?7:10;break;case 7:HEAP[g]=HEAP[j]-1;c=HEAP[g]==0?8:9;break;case 8:FUNCTION_TABLE[HEAP[HEAP[g+
4]+24]](g);c=9;break;case 9:f=0;c=11;break;case 10:HEAP[j+12+4]=h;f=g;c=11;break;case 11:return c=f;default:assert(0,"bad label: "+c)}}function b(a){var b;for(b=-1;;)switch(b){case -1:var c,d;c=a;b=c==0?2:1;break;case 1:b=_strcmp(c,G)==0?2:3;break;case 2:d=1;b=8;break;case 3:b=_strcmp(c,E)==0?4:5;break;case 4:d=2;b=8;break;case 5:b=_strcmp(c,D)==0?6:7;break;case 6:d=3;b=8;break;case 7:d=_PyString_FromString(c);b=8;break;case 8:return a=d;default:assert(0,"bad label: "+b)}}function a(a,b){var c;for(c=
-1;;)switch(c){case -1:var d,e,f,g,h,j;d=a;e=b;c=(HEAP[HEAP[d+4]+84]&134217728)==0?1:2;break;case 1:throw ___assert_fail(R,M,96,L),"Reached an unreachable!";case 2:h=_PyCodec_LookupError(d+20);c=h==0?3:4;break;case 3:f=0;c=13;break;case 4:g=_PyTuple_New(1);c=g==0?5:8;break;case 5:HEAP[h]-=1;c=HEAP[h]==0?6:7;break;case 6:FUNCTION_TABLE[HEAP[HEAP[h+4]+24]](h);c=7;break;case 7:f=0;c=13;break;case 8:HEAP[g+12]=e;HEAP[e]+=1;j=_PyObject_CallObject(h,g);HEAP[g]-=1;c=HEAP[g]==0?9:10;break;case 9:FUNCTION_TABLE[HEAP[HEAP[g+
4]+24]](g);c=10;break;case 10:HEAP[h]-=1;c=HEAP[h]==0?11:12;break;case 11:FUNCTION_TABLE[HEAP[HEAP[h+4]+24]](h);c=12;break;case 12:f=j;c=13;break;case 13:return c=f;default:assert(0,"bad label: "+c)}}function c(a,b){var c;for(c=-1;;)switch(c){case -1:var d,e,f,g,h,j,k;d=a;e=b;h=HEAP[d+12]-(HEAP[d+24]+20);j=HEAP[HEAP[d+24]+8];c=j>>1>e?1:2;break;case 1:g=j>>1|1;c=3;break;case 2:g=e;c=3;break;case 3:k=g;c=2147483647-k<j?4:5;break;case 4:f=-1;c=8;break;case 5:c=__PyString_Resize(d+24,k+j)==-1?6:7;break;
case 6:f=-1;c=8;break;case 7:HEAP[d+12]=HEAP[d+24]+20+h;HEAP[d+16]=HEAP[d+24]+20+HEAP[HEAP[d+24]+8];f=0;c=8;break;case 8:return c=f;default:assert(0,"bad label: "+c)}}function d(a,b){var c;for(c=-1;;)switch(c){case -1:var d,e,f,g,h,j;d=a;e=b;h=(HEAP[d+12]-HEAP[HEAP[d+24]+12])/2|0;j=HEAP[HEAP[d+24]+8];c=j>>1>e?1:2;break;case 1:g=j>>1|1;c=3;break;case 2:g=e;c=3;break;case 3:c=_PyUnicodeUCS2_Resize(d+24,j+g)==-1?4:5;break;case 4:f=-1;c=6;break;case 5:HEAP[d+12]=HEAP[HEAP[d+24]+12]+2*h;HEAP[d+16]=HEAP[HEAP[d+
24]+12]+2*HEAP[HEAP[d+24]+8];f=0;c=6;break;case 6:return c=f;default:assert(0,"bad label: "+c)}}function f(b,d,e,f,g){var h=STACKTOP;STACKTOP+=10;_memset(h,0,10);var k,l=null;for(k=-1;;)switch(k){case -1:var m,n,o,p,q,r,s,t,u,v,w,x,y,B,F,A=h,z=h+2,C,I=h+6;m=b;n=d;o=e;p=f;q=g;t=s=0;k=q>0?1:2;break;case 1:F=V;x=q;k=8;break;case 2:k=q;k=k==-3?6:k==-2?5:k==-1?3:7;break;case 3:k=c(o,-1)==-1?48:4;break;case 4:r=0;k=55;break;case 5:F=Q;x=(HEAP[o+8]-HEAP[o])/2|0;k=8;break;case 6:_PyErr_SetString(HEAP[_PyExc_RuntimeError],
Z);r=-1;k=55;break;case 7:_PyErr_SetString(HEAP[_PyExc_RuntimeError],K);r=-1;k=55;break;case 8:k=p==3?9:16;break;case 9:HEAP[A]=63;HEAP[z]=A;k=10;break;case 10:C=HEAP[o+16]-HEAP[o+12];C=k=FUNCTION_TABLE[HEAP[m+12]](n,HEAP[m+4],z,1,o+12,C,0);k=k==-1?11:12;break;case 11:k=c(o,-1)==-1?48:10;break;case 12:k=C!=0?13:16;break;case 13:k=HEAP[o+12]+1>HEAP[o+16]?14:15;break;case 14:k=c(o,1)==-1?48:15;break;case 15:k=HEAP[o+12];HEAP[k]=63;HEAP[o+12]=k+1;k=16;break;case 16:var D=HEAP[o];k=p==2|p==3?17:18;break;
case 17:HEAP[o]=D+2*x;r=0;k=55;break;case 18:y=(D-HEAP[o+4])/2|0;B=x+y;var E=o;k=HEAP[o+20]==0?19:20;break;case 19:k=_PyUnicodeEncodeError_Create(HEAP[m],HEAP[o+4],(HEAP[E+8]-HEAP[o+4])/2|0,y,B,F);HEAP[o+20]=k;k=HEAP[o+20]==0?48:23;break;case 20:k=_PyUnicodeEncodeError_SetStart(HEAP[E+20],y)!=0?48:21;break;case 21:k=_PyUnicodeEncodeError_SetEnd(HEAP[o+20],B)!=0?48:22;break;case 22:k=_PyUnicodeEncodeError_SetReason(HEAP[o+20],F)!=0?48:23;break;case 23:var G=HEAP[o+20];k=p==1?24:25;break;case 24:_PyCodec_StrictErrors(G);
k=48;break;case 25:s=a(p,G);k=s==0?51:26;break;case 26:k=(HEAP[HEAP[s+4]+84]&67108864)==0?31:27;break;case 27:k=HEAP[s+8]!=2?31:28;break;case 28:u=HEAP[s+12];k=(HEAP[HEAP[u+4]+84]&268435456)==0?31:29;break;case 29:k=(HEAP[HEAP[HEAP[s+12+4]+4]+84]&8388608)!=0?32:30;break;case 30:k=(HEAP[HEAP[HEAP[s+12+4]+4]+84]&16777216)==0?31:32;break;case 31:_PyErr_SetString(HEAP[_PyExc_TypeError],N);k=48;break;case 32:HEAP[I]=HEAP[u+12];t=k=j(m,n,I,HEAP[u+8],1,1);k=k==0?48:33;break;case 33:v=HEAP[t+8];k=v<=0?35:
34;break;case 34:k=HEAP[o+12]+v>HEAP[o+16]?35:36;break;case 35:k=c(o,v)==-1?48:36;break;case 36:_llvm_memcpy_p0i8_p0i8_i32(HEAP[o+12],t+20,v,1,0);HEAP[o+12]+=v;w=k=_PyInt_AsSsize_t(HEAP[s+12+4]);k=k<0?37:41;break;case 37:k=_PyErr_Occurred()==0?38:39;break;case 38:var J=w+((HEAP[o+8]-HEAP[o+4])/2|0);w=J;l=38;k=40;break;case 39:var M=w,l=39;k=40;break;case 40:k=(l==39?M:J)<0?42:41;break;case 41:k=HEAP[o+4]+2*w>HEAP[o+8]?42:43;break;case 42:_PyErr_Clear();_PyErr_Format(HEAP[_PyExc_IndexError],H,allocate([w,
0,0,0],["i32",0,0,0],ALLOC_STACK));k=48;break;case 43:HEAP[o]=HEAP[o+4]+2*w;HEAP[s]-=1;k=HEAP[s]==0?44:45;break;case 44:FUNCTION_TABLE[HEAP[HEAP[s+4]+24]](s);k=45;break;case 45:HEAP[t]-=1;k=HEAP[t]==0?46:47;break;case 46:FUNCTION_TABLE[HEAP[HEAP[t+4]+24]](t);k=47;break;case 47:r=0;k=55;break;case 48:k=s!=0?49:51;break;case 49:HEAP[s]-=1;k=HEAP[s]==0?50:51;break;case 50:FUNCTION_TABLE[HEAP[HEAP[s+4]+24]](s);k=51;break;case 51:k=t!=0?52:54;break;case 52:HEAP[t]-=1;k=HEAP[t]==0?53:54;break;case 53:FUNCTION_TABLE[HEAP[HEAP[t+
4]+24]](t);k=54;break;case 54:r=-1;k=55;break;case 55:return b=r,STACKTOP=h,b;default:assert(0,"bad label: "+k)}}function h(b,c,e,f,g){var h,c=null;for(h=-1;;)switch(h){case -1:var j,k,l,m,n,o,p,q,r,s,t,u,v;j=b;k=e;l=f;m=g;p=o=0;h=m>0?1:2;break;case 1:s=V;t=m;h=8;break;case 2:h=m;h=h==-3?6:h==-2?5:h==-1?3:7;break;case 3:h=d(k,-1)==-1?43:4;break;case 4:n=0;h=47;break;case 5:s=Q;t=HEAP[k+8]-HEAP[k];h=8;break;case 6:_PyErr_SetString(HEAP[_PyExc_RuntimeError],Z);n=-1;h=47;break;case 7:_PyErr_SetString(HEAP[_PyExc_RuntimeError],
K);n=-1;h=47;break;case 8:h=l==3?9:12;break;case 9:h=HEAP[k+12]+2>HEAP[k+16]?10:11;break;case 10:h=d(k,1)==-1?43:11;break;case 11:h=HEAP[k+12];HEAP[h]=-3;HEAP[k+12]=h+2;h=12;break;case 12:var w=HEAP[k];h=l==2|l==3?13:14;break;case 13:HEAP[k]=w+t;n=0;h=47;break;case 14:u=w-HEAP[k+4];v=t+u;var x=k;h=HEAP[k+20]==0?15:16;break;case 15:h=_PyUnicodeDecodeError_Create(HEAP[j],HEAP[k+4],HEAP[x+8]-HEAP[k+4],u,v,s);HEAP[k+20]=h;h=HEAP[k+20]==0?43:19;break;case 16:h=_PyUnicodeDecodeError_SetStart(HEAP[x+20],
u)!=0?43:17;break;case 17:h=_PyUnicodeDecodeError_SetEnd(HEAP[k+20],v)!=0?43:18;break;case 18:h=_PyUnicodeDecodeError_SetReason(HEAP[k+20],s)!=0?43:19;break;case 19:var y=HEAP[k+20];h=l==1?20:21;break;case 20:_PyCodec_StrictErrors(y);h=43;break;case 21:o=a(l,y);h=o==0?46:22;break;case 22:h=(HEAP[HEAP[o+4]+84]&67108864)==0?27:23;break;case 23:h=HEAP[o+8]!=2?27:24;break;case 24:p=HEAP[o+12];h=(HEAP[HEAP[p+4]+84]&268435456)==0?27:25;break;case 25:h=(HEAP[HEAP[HEAP[o+12+4]+4]+84]&8388608)!=0?28:26;break;
case 26:h=(HEAP[HEAP[HEAP[o+12+4]+4]+84]&16777216)==0?27:28;break;case 27:_PyErr_SetString(HEAP[_PyExc_TypeError],ba);h=43;break;case 28:q=HEAP[p+8];h=HEAP[p+8]>0?29:33;break;case 29:h=q<=0?31:30;break;case 30:h=HEAP[k+12]+2*q>HEAP[k+16]?31:32;break;case 31:h=d(k,q)==-1?43:32;break;case 32:_llvm_memcpy_p0i8_p0i8_i32(HEAP[k+12],HEAP[p+12],q*2,1,0);HEAP[k+12]+=2*q;h=33;break;case 33:r=h=_PyInt_AsSsize_t(HEAP[o+12+4]);h=h<0?34:38;break;case 34:h=_PyErr_Occurred()==0?35:36;break;case 35:var B=HEAP[k+
8]-HEAP[k+4]+r;r=B;c=35;h=37;break;case 36:var F=r,c=36;h=37;break;case 37:h=(c==36?F:B)<0?39:38;break;case 38:h=HEAP[k+4]+r>HEAP[k+8]?39:40;break;case 39:_PyErr_Clear();_PyErr_Format(HEAP[_PyExc_IndexError],H,allocate([r,0,0,0],["i32",0,0,0],ALLOC_STACK));h=43;break;case 40:HEAP[k]=HEAP[k+4]+r;HEAP[o]-=1;h=HEAP[o]==0?41:42;break;case 41:FUNCTION_TABLE[HEAP[HEAP[o+4]+24]](o);h=42;break;case 42:n=0;h=47;break;case 43:h=o!=0?44:46;break;case 44:HEAP[o]-=1;h=HEAP[o]==0?45:46;break;case 45:FUNCTION_TABLE[HEAP[HEAP[o+
4]+24]](o);h=46;break;case 46:n=-1;h=47;break;case 47:return b=n;default:assert(0,"bad label: "+h)}}function j(a,b,c,d,e,g){var h=STACKTOP;STACKTOP+=28;_memset(h,0,28);var j;for(j=-1;;)switch(j){case -1:var k,l,m,n,o,p,q,r=h,s,t;k=a;l=b;m=c;n=d;o=e;p=g;t=0;j=n==0?1:3;break;case 1:j=(p&2)==0?2:3;break;case 2:q=_PyString_FromString(W);j=31;break;case 3:HEAP[r+20]=0;HEAP[r+4]=HEAP[m];HEAP[r]=HEAP[r+4];HEAP[r+8]=HEAP[r+4]+2*n;j=n>1073741815?4:5;break;case 4:_PyErr_NoMemory();j=24;break;case 5:j=_PyString_FromStringAndSize(0,
n*2+16);HEAP[r+24]=j;j=HEAP[r+24]==0?24:6;break;case 6:HEAP[r+12]=HEAP[r+24]+20;HEAP[r+16]=HEAP[r+12]+HEAP[HEAP[r+24]+8];var u=r,v=r+8,w=r+8,x=r,y=r+16,B=r+12,F=r,A=r+12;j=12;break;case 7:t=(HEAP[w]-HEAP[x])/2|0;j=HEAP[y]-HEAP[B];t=FUNCTION_TABLE[HEAP[k+12]](l,HEAP[k+4],F,t,A,j,p);j=t==0?13:8;break;case 8:j=t!=-2?10:9;break;case 9:j=(p&1)==0?13:10;break;case 10:j=f(k,l,r,o,t)!=0?24:11;break;case 11:j=t==-2?13:12;break;case 12:j=HEAP[u]<HEAP[v]?7:13;break;case 13:j=HEAP[k+20]!=0?14:18;break;case 14:j=
(p&2)!=0?15:18;break;case 15:var z=r+16,H=r+12,C=r+12;j=16;break;case 16:t=HEAP[z]-HEAP[H];t=j=FUNCTION_TABLE[HEAP[k+20]](l,HEAP[k+4],C,t);j=j==0?18:17;break;case 17:j=f(k,l,r,o,t)!=0?24:16;break;case 18:s=HEAP[r+12]-(HEAP[r+24]+20);j=HEAP[HEAP[r+24]+8]!=s?19:20;break;case 19:j=__PyString_Resize(r+24,s)==-1?24:20;break;case 20:HEAP[m]=HEAP[r];j=HEAP[r+20]!=0?21:23;break;case 21:j=HEAP[r+20];HEAP[j]-=1;j=HEAP[j]==0?22:23;break;case 22:FUNCTION_TABLE[HEAP[HEAP[HEAP[r+20]+4]+24]](HEAP[r+20]);j=23;break;
case 23:q=HEAP[r+24];j=31;break;case 24:j=HEAP[r+20]!=0?25:27;break;case 25:j=HEAP[r+20];HEAP[j]-=1;j=HEAP[j]==0?26:27;break;case 26:FUNCTION_TABLE[HEAP[HEAP[HEAP[r+20]+4]+24]](HEAP[r+20]);j=27;break;case 27:j=HEAP[r+24]!=0?28:30;break;case 28:j=HEAP[r+24];HEAP[j]-=1;j=HEAP[j]==0?29:30;break;case 29:FUNCTION_TABLE[HEAP[HEAP[HEAP[r+24]+4]+24]](HEAP[r+24]);j=30;break;case 30:q=0;j=31;break;case 31:return a=q,STACKTOP=h,a;default:assert(0,"bad label: "+j)}}function k(a,b,c){var d=STACKTOP;STACKTOP+=
4;_memset(d,0,4);var e;for(e=-1;;)switch(e){case -1:var f,g,h,k,l,m,n,o=d,p,q,r,s;f=a;g=b;h=c;q=n=0;e=(HEAP[HEAP[g+4]+84]&268435456)!=0?1:2;break;case 1:m=0;e=8;break;case 2:g=m=_PyObject_Unicode(g);e=g==0?3:4;break;case 3:l=0;e=42;break;case 4:e=(HEAP[HEAP[g+4]+84]&268435456)==0?5:8;break;case 5:_PyErr_SetString(HEAP[_PyExc_TypeError],Y);HEAP[m]-=1;e=HEAP[m]==0?6:7;break;case 6:FUNCTION_TABLE[HEAP[HEAP[m+4]+24]](m);e=7;break;case 7:l=0;e=42;break;case 8:r=HEAP[g+8];s=HEAP[f+28];e=HEAP[f+28]>0?9:
15;break;case 9:e=2147483647-HEAP[f+28]<r?10:11;break;case 10:_PyErr_NoMemory();e=33;break;case 11:e=r+HEAP[f+28]<=1073741823?13:12;break;case 12:q=0;e=35;break;case 13:q=e=_PyMem_Malloc((r+HEAP[f+28])*2);e=e==0?35:14;break;case 14:_llvm_memcpy_p0i8_p0i8_i32(q,f+24,HEAP[f+28]*2,1,0);_llvm_memcpy_p0i8_p0i8_i32(q+2*HEAP[f+28],HEAP[g+12],r*2,1,0);r+=HEAP[f+28];HEAP[f+28]=0;HEAP[o]=q;e=16;break;case 15:HEAP[o]=HEAP[g+12];e=16;break;case 16:p=HEAP[o]+2*r;e=h!=0?17:18;break;case 17:k=3;e=19;break;case 18:k=
0;e=19;break;case 19:n=e=j(HEAP[f+8],f+12,o,r,HEAP[f+20],k);e=e==0?20:23;break;case 20:e=s>0?21:22;break;case 21:_llvm_memcpy_p0i8_p0i8_i32(f+24,q,s*2,1,0);e=22;break;case 22:HEAP[f+28]=s;e=33;break;case 23:e=HEAP[o]<p?24:27;break;case 24:HEAP[f+28]=(p-HEAP[o])/2|0;var t=f+28;e=HEAP[f+28]>2?25:26;break;case 25:HEAP[t]=0;_PyErr_SetString(HEAP[_PyExc_UnicodeError],Ua);e=33;break;case 26:_llvm_memcpy_p0i8_p0i8_i32(f+24,HEAP[o],HEAP[t]*2,1,0);e=27;break;case 27:e=q!=0?28:29;break;case 28:_PyMem_Free(q);
e=29;break;case 29:e=m!=0?30:32;break;case 30:HEAP[m]-=1;e=HEAP[m]==0?31:32;break;case 31:FUNCTION_TABLE[HEAP[HEAP[m+4]+24]](m);e=32;break;case 32:l=n;e=42;break;case 33:e=q!=0?34:35;break;case 34:_PyMem_Free(q);e=35;break;case 35:e=n!=0?36:38;break;case 36:HEAP[n]-=1;e=HEAP[n]==0?37:38;break;case 37:FUNCTION_TABLE[HEAP[HEAP[n+4]+24]](n);e=38;break;case 38:e=m!=0?39:41;break;case 39:HEAP[m]-=1;e=HEAP[m]==0?40:41;break;case 40:FUNCTION_TABLE[HEAP[HEAP[m+4]+24]](m);e=41;break;case 41:l=0;e=42;break;
case 42:return a=l,STACKTOP=d,a;default:assert(0,"bad label: "+e)}}function l(a,b){var c;for(c=-1;;)switch(c){case -1:var d,e,f,g;d=a;e=b;g=HEAP[e+8]-HEAP[e];c=g+HEAP[d+32]>8?2:1;break;case 1:c=2147483647-HEAP[d+32]<g?2:3;break;case 2:_PyErr_SetString(HEAP[_PyExc_UnicodeError],Ua);f=-1;c=4;break;case 3:_llvm_memcpy_p0i8_p0i8_i32(d+24+HEAP[d+32],HEAP[e],g,1,0);HEAP[d+32]=g+HEAP[d+32];f=0;c=4;break;case 4:return c=f;default:assert(0,"bad label: "+c)}}function m(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,
f,g;e=a;d=b;f=c;HEAP[e+4]=d;HEAP[e]=HEAP[e+4];HEAP[e+8]=HEAP[e+4]+f;d=HEAP[e+24]==0?1:4;break;case 1:d=_PyUnicodeUCS2_FromUnicode(0,f);HEAP[e+24]=d;d=HEAP[e+24]==0?2:3;break;case 2:g=-1;d=5;break;case 3:HEAP[e+12]=HEAP[HEAP[e+24]+12];HEAP[e+16]=HEAP[e+12]+2*HEAP[HEAP[e+24]+8];d=4;break;case 4:g=0;d=5;break;case 5:return a=g;default:assert(0,"bad label: "+d)}}function n(a,b){var c;for(c=-1;;)switch(c){case -1:var d,e,f,g;d=a;e=b;c=4;break;case 1:c=HEAP[e+8]-HEAP[e];g=(HEAP[e+16]-HEAP[e+12])/2|0;g=
FUNCTION_TABLE[HEAP[HEAP[d+8]+24]](d+12,HEAP[HEAP[d+8]+4],e,c,e+12,g);c=g==0|g==-2?5:2;break;case 2:c=h(HEAP[d+8],d+12,e,HEAP[d+20],g)!=0?3:4;break;case 3:f=-1;c=6;break;case 4:c=HEAP[e]<HEAP[e+8]?1:5;break;case 5:f=0;c=6;break;case 6:return d=f;default:assert(0,"bad label: "+c)}}function o(a,b,c){var d=STACKTOP;STACKTOP+=28;_memset(d,0,28);var e,f=null;for(e=-1;;)switch(e){case -1:var g,j,k,o,p=d,q,r,s,t,u;g=a;j=b;k=c;s=0;e=k==0?1:2;break;case 1:o=_PyUnicodeUCS2_FromUnicode(0,0);e=50;break;case 2:HEAP[p+
20]=0;HEAP[p+24]=HEAP[p+20];q=0;var v=k,w=p,x=p+8,y=p,B=p+8,F=p+12,A=p+24,f=2;e=3;break;case 3:var z=j,H=HEAP[g+36];e=(f==30?1:v)<0?4:5;break;case 4:var C=__PyObject_CallMethod_SizeT(H,z,0,allocate(1,"i32",ALLOC_STACK));q=C;f=4;e=6;break;case 5:var N=__PyObject_CallMethod_SizeT(H,z,Ea,allocate([k,0,0,0],["i32",0,0,0],ALLOC_STACK));q=N;f=5;e=6;break;case 6:e=(f==5?N:C)==0?40:7;break;case 7:e=(HEAP[HEAP[q+4]+84]&134217728)==0?8:9;break;case 8:_PyErr_SetString(HEAP[_PyExc_TypeError],Ga);e=40;break;case 9:t=
HEAP[q+8]==0;e=HEAP[g+32]>0?10:16;break;case 10:e=HEAP[q+8]>2147483647-HEAP[g+32]?11:12;break;case 11:_PyErr_NoMemory();e=40;break;case 12:r=HEAP[g+32]+HEAP[q+8];u=_PyString_FromStringAndSize(0,r);e=u==0?40:13;break;case 13:e=u+20;_llvm_memcpy_p0i8_p0i8_i32(e,g+24,HEAP[g+32],1,0);_llvm_memcpy_p0i8_p0i8_i32(e+HEAP[g+32],q+20,HEAP[q+8],1,0);HEAP[q]-=1;e=HEAP[q]==0?14:15;break;case 14:FUNCTION_TABLE[HEAP[HEAP[q+4]+24]](q);e=15;break;case 15:q=u;HEAP[g+32]=0;e=16;break;case 16:r=HEAP[q+8];e=m(p,q+20,
r)!=0?40:17;break;case 17:e=r>0?18:19;break;case 18:e=n(g,p)!=0?40:19;break;case 19:e=t!=0?21:20;break;case 20:e=k<0?21:23;break;case 21:e=HEAP[w]<HEAP[x]?22:23;break;case 22:e=h(HEAP[g+8],g+12,p,HEAP[g+20],-2)!=0?40:23;break;case 23:e=HEAP[y]<HEAP[B]?24:25;break;case 24:e=l(g,p)!=0?40:25;break;case 25:s=(HEAP[F]-HEAP[HEAP[A]+12])/2|0;HEAP[q]-=1;e=HEAP[q]==0?26:27;break;case 26:FUNCTION_TABLE[HEAP[HEAP[q+4]+24]](q);e=27;break;case 27:q=0;e=k<0?31:28;break;case 28:e=s!=0?31:29;break;case 29:e=r==0?
31:30;break;case 30:k=1;f=30;e=3;break;case 31:e=HEAP[HEAP[p+24]+8]!=s?32:33;break;case 32:e=_PyUnicodeUCS2_Resize(p+24,s)==-1?40:33;break;case 33:e=q!=0?34:36;break;case 34:HEAP[q]-=1;e=HEAP[q]==0?35:36;break;case 35:FUNCTION_TABLE[HEAP[HEAP[q+4]+24]](q);e=36;break;case 36:e=HEAP[p+20]!=0?37:39;break;case 37:e=HEAP[p+20];HEAP[e]-=1;e=HEAP[e]==0?38:39;break;case 38:FUNCTION_TABLE[HEAP[HEAP[HEAP[p+20]+4]+24]](HEAP[p+20]);e=39;break;case 39:o=HEAP[p+24];e=50;break;case 40:e=q!=0?41:43;break;case 41:HEAP[q]-=
1;e=HEAP[q]==0?42:43;break;case 42:FUNCTION_TABLE[HEAP[HEAP[q+4]+24]](q);e=43;break;case 43:e=HEAP[p+20]!=0?44:46;break;case 44:e=HEAP[p+20];HEAP[e]-=1;e=HEAP[e]==0?45:46;break;case 45:FUNCTION_TABLE[HEAP[HEAP[HEAP[p+20]+4]+24]](HEAP[p+20]);e=46;break;case 46:e=HEAP[p+24]!=0?47:49;break;case 47:e=HEAP[p+24];HEAP[e]-=1;e=HEAP[e]==0?48:49;break;case 48:FUNCTION_TABLE[HEAP[HEAP[HEAP[p+24]+4]+24]](HEAP[p+24]);e=49;break;case 49:o=0;e=50;break;case 50:return a=o,STACKTOP=d,a;default:assert(0,"bad label: "+
e)}}function p(a,b){var c;for(c=-1;;)switch(c){case -1:var d,e,f,g;d=a;f=k(d,b,0);c=f==0?1:2;break;case 1:e=-1;c=9;break;case 2:g=__PyObject_CallMethod_SizeT(HEAP[d+32],ja,ua,allocate([f,0,0,0],["%struct.PyObject*",0,0,0],ALLOC_STACK));HEAP[f]-=1;c=HEAP[f]==0?3:4;break;case 3:FUNCTION_TABLE[HEAP[HEAP[f+4]+24]](f);c=4;break;case 4:c=g==0?5:6;break;case 5:e=-1;c=9;break;case 6:HEAP[g]-=1;c=HEAP[g]==0?7:8;break;case 7:FUNCTION_TABLE[HEAP[HEAP[g+4]+24]](g);c=8;break;case 8:e=0;c=9;break;case 9:return c=
e;default:assert(0,"bad label: "+c)}}function q(){u=allocate([73,46,101,110,99,111,100,101,40,117,110,105,99,111,100,101,91,44,32,101,114,114,111,114,115,93,41,32,45,62,32,40,115,116,114,105,110,103,44,32,108,101,110,103,116,104,32,99,111,110,115,117,109,101,100,41,10,10,82,101,116,117,114,110,32,97,110,32,101,110,99,111,100,101,100,32,115,116,114,105,110,103,32,118,101,114,115,105,111,110,32,111,102,32,96,117,110,105,99,111,100,101,39,46,32,101,114,114,111,114,115,32,109,97,121,32,98,101,32,103,
105,118,101,110,32,116,111,10,115,101,116,32,97,32,100,105,102,102,101,114,101,110,116,32,101,114,114,111,114,32,104,97,110,100,108,105,110,103,32,115,99,104,101,109,101,46,32,68,101,102,97,117,108,116,32,105,115,32,39,115,116,114,105,99,116,39,32,109,101,97,110,105,110,103,32,116,104,97,116,10,101,110,99,111,100,105,110,103,32,101,114,114,111,114,115,32,114,97,105,115,101,32,97,32,85,110,105,99,111,100,101,69,110,99,111,100,101,69,114,114,111,114,46,32,79,116,104,101,114,32,112,111,115,115,105,98,
108,101,32,118,97,108,117,101,115,32,97,114,101,10,39,105,103,110,111,114,101,39,44,32,39,114,101,112,108,97,99,101,39,32,97,110,100,32,39,120,109,108,99,104,97,114,114,101,102,114,101,112,108,97,99,101,39,32,97,115,32,119,101,108,108,32,97,115,32,97,110,121,32,111,116,104,101,114,32,110,97,109,101,10,114,101,103,105,115,116,101,114,101,100,32,119,105,116,104,32,99,111,100,101,99,115,46,114,101,103,105,115,116,101,114,95,101,114,114,111,114,32,116,104,97,116,32,99,97,110,32,104,97,110,100,108,101,
32,85,110,105,99,111,100,101,69,110,99,111,100,101,69,114,114,111,114,115,46,0],"i8",ALLOC_NORMAL);s=allocate([73,46,100,101,99,111,100,101,40,115,116,114,105,110,103,91,44,32,101,114,114,111,114,115,93,41,32,45,62,32,40,117,110,105,99,111,100,101,111,98,106,101,99,116,44,32,108,101,110,103,116,104,32,99,111,110,115,117,109,101,100,41,10,10,68,101,99,111,100,101,115,32,96,115,116,114,105,110,103,39,32,117,115,105,110,103,32,73,44,32,97,110,32,77,117,108,116,105,98,121,116,101,67,111,100,101,99,32,
105,110,115,116,97,110,99,101,46,32,101,114,114,111,114,115,32,109,97,121,32,98,101,32,103,105,118,101,110,10,116,111,32,115,101,116,32,97,32,100,105,102,102,101,114,101,110,116,32,101,114,114,111,114,32,104,97,110,100,108,105,110,103,32,115,99,104,101,109,101,46,32,68,101,102,97,117,108,116,32,105,115,32,39,115,116,114,105,99,116,39,32,109,101,97,110,105,110,103,10,116,104,97,116,32,101,110,99,111,100,105,110,103,32,101,114,114,111,114,115,32,114,97,105,115,101,32,97,32,85,110,105,99,111,100,101,
68,101,99,111,100,101,69,114,114,111,114,46,32,79,116,104,101,114,32,112,111,115,115,105,98,108,101,32,118,97,108,117,101,115,10,97,114,101,32,39,105,103,110,111,114,101,39,32,97,110,100,32,39,114,101,112,108,97,99,101,39,32,97,115,32,119,101,108,108,32,97,115,32,97,110,121,32,111,116,104,101,114,32,110,97,109,101,32,114,101,103,105,115,116,101,114,101,100,32,119,105,116,104,10,99,111,100,101,99,115,46,114,101,103,105,115,116,101,114,95,101,114,114,111,114,32,116,104,97,116,32,105,115,32,97,98,108,
101,32,116,111,32,104,97,110,100,108,101,32,85,110,105,99,111,100,101,68,101,99,111,100,101,69,114,114,111,114,115,46,0],"i8",ALLOC_NORMAL);t=allocate(12,"i8*",ALLOC_NORMAL);v=allocate([105,110,112,117,116,0],"i8",ALLOC_NORMAL);w=allocate([101,114,114,111,114,115,0],"i8",ALLOC_NORMAL);x=allocate(8,"i8*",ALLOC_NORMAL);y=allocate(12,"i8*",ALLOC_NORMAL);z=allocate([102,105,110,97,108,0],"i8",ALLOC_NORMAL);C=allocate(12,"i8*",ALLOC_NORMAL);A=allocate([115,116,114,101,97,109,0],"i8",ALLOC_NORMAL);G=allocate([115,
116,114,105,99,116,0],"i8",ALLOC_NORMAL);E=allocate([105,103,110,111,114,101,0],"i8",ALLOC_NORMAL);D=allocate([114,101,112,108,97,99,101,0],"i8",ALLOC_NORMAL);R=allocate([40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,101,114,114,111,114,115,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,55,41,41,41,32,33,61,32,48,41,0],"i8",ALLOC_NORMAL);M=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,99,106,107,
99,111,100,101,99,115,47,109,117,108,116,105,98,121,116,101,99,111,100,101,99,46,99,0],"i8",ALLOC_NORMAL);L=allocate([99,97,108,108,95,101,114,114,111,114,95,99,97,108,108,98,97,99,107,0],"i8",ALLOC_NORMAL);I=allocate([101,114,114,111,114,115,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0],"i8",ALLOC_NORMAL);J=allocate([104,111,119,32,116,111,32,116,114,101,97,116,32,101,114,114,111,114,115,0],"i8",ALLOC_NORMAL);F=allocate(40,["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",
0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);V=allocate([105,108,108,101,103,97,108,32,109,117,108,116,105,98,121,116,101,32,115,101,113,117,101,110,99,101,0],"i8",ALLOC_NORMAL);Q=allocate([105,110,99,111,109,112,108,101,116,101,32,109,117,108,116,105,98,121,116,101,32,115,101,113,117,101,110,99,101,0],"i8",ALLOC_NORMAL);Z=allocate([105,110,116,
101,114,110,97,108,32,99,111,100,101,99,32,101,114,114,111,114,0],"i8",ALLOC_NORMAL);K=allocate([117,110,107,110,111,119,110,32,114,117,110,116,105,109,101,32,101,114,114,111,114,0],"i8",ALLOC_NORMAL);N=allocate([101,110,99,111,100,105,110,103,32,101,114,114,111,114,32,104,97,110,100,108,101,114,32,109,117,115,116,32,114,101,116,117,114,110,32,40,117,110,105,99,111,100,101,44,32,105,110,116,41,32,116,117,112,108,101,0],"i8",ALLOC_NORMAL);H=allocate([112,111,115,105,116,105,111,110,32,37,122,100,32,
102,114,111,109,32,101,114,114,111,114,32,104,97,110,100,108,101,114,32,111,117,116,32,111,102,32,98,111,117,110,100,115,0],"i8",ALLOC_NORMAL);ba=allocate([100,101,99,111,100,105,110,103,32,101,114,114,111,114,32,104,97,110,100,108,101,114,32,109,117,115,116,32,114,101,116,117,114,110,32,40,117,110,105,99,111,100,101,44,32,105,110,116,41,32,116,117,112,108,101,0],"i8",ALLOC_NORMAL);W=allocate(1,"i8",ALLOC_NORMAL);B=allocate([79,124,122,58,101,110,99,111,100,101,0],"i8",ALLOC_NORMAL);Y=allocate([99,
111,117,108,100,110,39,116,32,99,111,110,118,101,114,116,32,116,104,101,32,111,98,106,101,99,116,32,116,111,32,117,110,105,99,111,100,101,46,0],"i8",ALLOC_NORMAL);fa=allocate([115,42,124,122,58,100,101,99,111,100,101,0],"i8",ALLOC_NORMAL);ha=allocate([101,110,99,111,100,101,0],"i8",ALLOC_NORMAL);la=allocate([100,101,99,111,100,101,0],"i8",ALLOC_NORMAL);ra=allocate([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);ya=allocate([77,117,108,116,105,98,121,116,101,67,111,100,101,99,0],"i8",ALLOC_NORMAL);Da=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,131563,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",
0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8",
"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ua=allocate([112,101,110,100,105,110,103,32,98,117,102,102,101,114,32,111,118,101,114,102,108,111,119,0],"i8",ALLOC_NORMAL);Na=allocate([79,124,105,58,101,110,99,111,100,101,0],"i8",ALLOC_NORMAL);Pa=allocate([114,101,115,101,116,0],"i8",ALLOC_NORMAL);
wa=allocate([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ya=allocate([124,115,58,73,110,99,114,101,109,101,110,
116,97,108,69,110,99,111,100,101,114,0],"i8",ALLOC_NORMAL);Ha=allocate([99,111,100,101,99,0],"i8",ALLOC_NORMAL);ta=allocate([99,111,100,101,99,32,105,115,32,117,110,101,120,112,101,99,116,101,100,32,116,121,112,101,0],"i8",ALLOC_NORMAL);Va=allocate([77,117,108,116,105,98,121,116,101,73,110,99,114,101,109,101,110,116,97,108,69,110,99,111,100,101,114,0],"i8",ALLOC_NORMAL);Ia=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,148971,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",
0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Wa=
allocate([115,42,124,105,58,100,101,99,111,100,101,0],"i8",ALLOC_NORMAL);ia=allocate([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8",
"i8"],ALLOC_NORMAL);Ba=allocate([124,115,58,73,110,99,114,101,109,101,110,116,97,108,68,101,99,111,100,101,114,0],"i8",ALLOC_NORMAL);Xa=allocate([77,117,108,116,105,98,121,116,101,73,110,99,114,101,109,101,110,116,97,108,68,101,99,111,100,101,114,0],"i8",ALLOC_NORMAL);Ta=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,148971,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",
0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ea=
allocate([105,0],"i8",ALLOC_NORMAL);Ga=allocate([115,116,114,101,97,109,32,102,117,110,99,116,105,111,110,32,114,101,116,117,114,110,101,100,32,97,32,110,111,110,45,115,116,114,105,110,103,32,111,98,106,101,99,116,0],"i8",ALLOC_NORMAL);ka=allocate([114,101,97,100,0],"i8",ALLOC_NORMAL);Fa=allocate([97,114,103,32,49,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,101,114,0],"i8",ALLOC_NORMAL);ma=allocate([114,101,97,100,108,105,110,101,0],"i8",ALLOC_NORMAL);La=allocate([114,101,97,100,
108,105,110,101,115,0],"i8",ALLOC_NORMAL);Za=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",
0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ka=allocate([0,0,0,0,6,0,0,0,36,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],
ALLOC_NORMAL);Ra=allocate([79,124,115,58,83,116,114,101,97,109,82,101,97,100,101,114,0],"i8",ALLOC_NORMAL);$a=allocate([77,117,108,116,105,98,121,116,101,83,116,114,101,97,109,82,101,97,100,101,114,0],"i8",ALLOC_NORMAL);Ja=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,148971,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",
0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",
0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);ja=allocate([119,114,105,116,101,0],"i8",ALLOC_NORMAL);ua=allocate([79,0],
"i8",ALLOC_NORMAL);bb=allocate([97,114,103,32,109,117,115,116,32,98,101,32,97,32,115,101,113,117,101,110,99,101,32,111,98,106,101,99,116,0],"i8",ALLOC_NORMAL);qa=allocate([79,124,115,58,83,116,114,101,97,109,87,114,105,116,101,114,0],"i8",ALLOC_NORMAL);P=allocate([119,114,105,116,101,108,105,110,101,115,0],"i8",ALLOC_NORMAL);hb=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Qa=allocate([0,0,0,0,6,0,0,0,32,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",
0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);mb=allocate([77,117,108,116,105,98,121,116,101,83,116,114,101,97,109,87,114,105,116,101,114,0],"i8",ALLOC_NORMAL);S=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,148971,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",
0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",
0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ca=allocate([109,117,108,116,105,98,121,116,101,99,111,100,101,99,46,95,95,
109,97,112,95,42,0],"i8",ALLOC_NORMAL);pa=allocate([97,114,103,117,109,101,110,116,32,116,121,112,101,32,105,110,118,97,108,105,100,0],"i8",ALLOC_NORMAL);Aa=allocate([95,95,99,114,101,97,116,101,95,99,111,100,101,99,0],"i8",ALLOC_NORMAL);ob=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,
0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);ib=allocate([95,109,117,108,116,105,98,121,116,101,99,111,100,101,99,0],"i8",ALLOC_NORMAL);ca=allocate([99,97,110,39,116,32,105,110,105,116,105,97,108,105,122,101,32,116,104,101,32,95,109,117,108,116,105,98,121,116,101,99,111,100,101,99,32,109,111,100,117,108,101,0],"i8",ALLOC_NORMAL);HEAP[t]=v;HEAP[t+4]=w;HEAP[x]=w;HEAP[y]=v;HEAP[y+4]=z;HEAP[C]=A;HEAP[C+4]=w;HEAP[F]=w;HEAP[F+4]=g+2;HEAP[F+8]=g+4;HEAP[F+12]=J;HEAP[ra]=ha;HEAP[ra+4]=g+6;HEAP[ra+
12]=u;HEAP[ra+16]=la;HEAP[ra+20]=g+8;HEAP[ra+28]=s;HEAP[Da+12]=ya;HEAP[Da+24]=g+10;HEAP[Da+72]=g+12;HEAP[Da+116]=ra;HEAP[wa]=ha;HEAP[wa+4]=g+14;HEAP[wa+16]=Pa;HEAP[wa+20]=g+16;HEAP[Ia+12]=Va;HEAP[Ia+24]=g+18;HEAP[Ia+72]=g+12;HEAP[Ia+92]=g+20;HEAP[Ia+116]=wa;HEAP[Ia+124]=F;HEAP[Ia+148]=g+22;HEAP[Ia+156]=g+24;HEAP[ia]=la;HEAP[ia+4]=g+26;HEAP[ia+16]=Pa;HEAP[ia+20]=g+28;HEAP[Ta+12]=Xa;HEAP[Ta+24]=g+30;HEAP[Ta+72]=g+12;HEAP[Ta+92]=g+32;HEAP[Ta+116]=ia;HEAP[Ta+124]=F;HEAP[Ta+148]=g+34;HEAP[Ta+156]=g+36;
HEAP[Za]=ka;HEAP[Za+4]=g+38;HEAP[Za+16]=ma;HEAP[Za+20]=g+40;HEAP[Za+32]=La;HEAP[Za+36]=g+42;HEAP[Za+48]=Pa;HEAP[Za+52]=g+44;HEAP[Ka]=A;HEAP[Ja+12]=$a;HEAP[Ja+24]=g+46;HEAP[Ja+72]=g+12;HEAP[Ja+92]=g+48;HEAP[Ja+116]=Za;HEAP[Ja+120]=Ka;HEAP[Ja+124]=F;HEAP[Ja+148]=g+50;HEAP[Ja+156]=g+52;HEAP[hb]=ja;HEAP[hb+4]=g+54;HEAP[hb+16]=P;HEAP[hb+20]=g+56;HEAP[hb+32]=Pa;HEAP[hb+36]=g+58;HEAP[Qa]=A;HEAP[S+12]=mb;HEAP[S+24]=g+60;HEAP[S+72]=g+12;HEAP[S+92]=g+62;HEAP[S+116]=hb;HEAP[S+120]=Qa;HEAP[S+124]=F;HEAP[S+148]=
g+64;HEAP[S+156]=g+66;HEAP[ob]=Aa;HEAP[ob+4]=g+68}var r={arguments:[]},u,s,t,v,w,x,y,z,C,A,G,E,D,R,M,L,I,J,F,V,Q,Z,K,N,H,ba,W,B,Y,fa,ha,la,ra,ya,Da,Ua,Na,Pa,wa,Ya,Ha,ta,Va,Ia,Wa,ia,Ba,Xa,Ta,Ea,Ga,ka,Fa,ma,La,Za,Ka,Ra,$a,Ja,ja,ua,bb,qa,P,hb,Qa,mb,S,Ca,pa,Aa,ob,ib,ca;r._init_multibytecodec=function(){var a=STACKTOP;STACKTOP+=20;_memset(a,0,20);var b;for(b=-1;;)switch(b){case -1:var c,d,e=a;HEAP[e]=Ia;HEAP[e+4]=Ta;HEAP[e+8]=Ja;HEAP[e+12]=S;HEAP[e+16]=0;b=_PyType_Ready(Da)<0?8:1;break;case 1:d=_Py_InitModule4(ib,
ob,0,0,1013);b=d==0?8:2;break;case 2:c=0;b=5;break;case 3:b=_PyType_Ready(HEAP[e+c*4])<0?8:4;break;case 4:HEAP[HEAP[e+c*4]]+=1;_PyModule_AddObject(d,HEAP[HEAP[e+c*4]+12],HEAP[e+c*4]);c+=1;b=5;break;case 5:b=HEAP[e+c*4]!=0?3:6;break;case 6:b=_PyErr_Occurred()!=0?7:8;break;case 7:_Py_FatalError(ca);b=8;break;case 8:STACKTOP=a;return;default:assert(0,"bad label: "+b)}};FUNCTION_TABLE=FUNCTION_TABLE.concat([0,0,function(a){var b;for(b=-1;;)switch(b){case -1:var c,d,e;c=a;b=HEAP[c+20]==1?1:2;break;case 1:e=
G;b=7;break;case 2:b=HEAP[c+20]==2?3:4;break;case 3:e=E;b=7;break;case 4:b=HEAP[c+20]==3?5:6;break;case 5:e=D;b=7;break;case 6:HEAP[HEAP[c+20]]+=1;d=HEAP[c+20];b=8;break;case 7:d=_PyString_FromString(e);b=8;break;case 8:return a=d;default:assert(0,"bad label: "+b)}},0,function(a,c){var d;for(d=-1;;)switch(d){case -1:var e,f,g,h;e=a;f=c;d=(HEAP[HEAP[f+4]+84]&134217728)==0?1:2;break;case 1:_PyErr_SetString(HEAP[_PyExc_TypeError],I);g=-1;d=10;break;case 2:h=b(f+20);d=h==0?3:4;break;case 3:g=-1;d=10;
break;case 4:d=HEAP[e+20]!=0?5:9;break;case 5:d=HEAP[e+20]==0?7:6;break;case 6:d=HEAP[e+20]>3?7:9;break;case 7:d=HEAP[e+20];HEAP[d]-=1;d=HEAP[d]==0?8:9;break;case 8:FUNCTION_TABLE[HEAP[HEAP[HEAP[e+20]+4]+24]](HEAP[e+20]);d=9;break;case 9:HEAP[e+20]=h;g=0;d=10;break;case 10:return e=g;default:assert(0,"bad label: "+d)}},0,function(a,c,d){var f=STACKTOP;STACKTOP+=20;_memset(f,0,20);var g;for(g=-1;;)switch(g){case -1:var h,k,l,m=f,n=f+8,o,p,q=f+12,r,s=f+16,u;h=a;g=c;k=d;HEAP[s]=0;g=__PyArg_ParseTupleAndKeywords_SizeT(g,
k,B,t,allocate([q,0,0,0,s,0,0,0],["%struct.PyObject**",0,0,0,"i8**",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:l=0;g=34;break;case 2:g=(HEAP[HEAP[HEAP[q]+4]+84]&268435456)!=0?3:4;break;case 3:r=0;g=10;break;case 4:r=_PyObject_Unicode(HEAP[q]);HEAP[q]=r;g=HEAP[q]==0?5:6;break;case 5:l=0;g=34;break;case 6:g=(HEAP[HEAP[HEAP[q]+4]+84]&268435456)==0?7:10;break;case 7:_PyErr_SetString(HEAP[_PyExc_TypeError],Y);HEAP[r]-=1;g=HEAP[r]==0?8:9;break;case 8:FUNCTION_TABLE[HEAP[HEAP[r+4]+24]](r);g=9;break;case 9:l=
0;g=34;break;case 10:HEAP[n]=HEAP[HEAP[q]+12];u=HEAP[HEAP[q]+8];o=g=b(HEAP[s]);g=g==0?11:15;break;case 11:g=r!=0?12:14;break;case 12:HEAP[r]-=1;g=HEAP[r]==0?13:14;break;case 13:FUNCTION_TABLE[HEAP[HEAP[r+4]+24]](r);g=14;break;case 14:l=0;g=34;break;case 15:g=HEAP[HEAP[h+8]+16]!=0?16:17;break;case 16:g=FUNCTION_TABLE[HEAP[HEAP[h+8]+16]](m,HEAP[HEAP[h+8]+4])!=0?26:17;break;case 17:p=g=j(HEAP[h+8],m,n,u,o,3);g=g==0?26:18;break;case 18:g=o!=0?19:22;break;case 19:g=o==0|o>3?20:22;break;case 20:HEAP[o]-=
1;g=HEAP[o]==0?21:22;break;case 21:FUNCTION_TABLE[HEAP[HEAP[o+4]+24]](o);g=22;break;case 22:g=r!=0?23:25;break;case 23:HEAP[r]-=1;g=HEAP[r]==0?24:25;break;case 24:FUNCTION_TABLE[HEAP[HEAP[r+4]+24]](r);g=25;break;case 25:l=e(p,u);g=34;break;case 26:g=o!=0?27:30;break;case 27:g=o==0|o>3?28:30;break;case 28:HEAP[o]-=1;g=HEAP[o]==0?29:30;break;case 29:FUNCTION_TABLE[HEAP[HEAP[o+4]+24]](o);g=30;break;case 30:g=r!=0?31:33;break;case 31:HEAP[r]-=1;g=HEAP[r]==0?32:33;break;case 32:FUNCTION_TABLE[HEAP[HEAP[r+
4]+24]](r);g=33;break;case 33:l=0;g=34;break;case 34:return a=l,STACKTOP=f,a;default:assert(0,"bad label: "+g)}},0,function(a,c,d){var f=STACKTOP;STACKTOP+=92;_memset(f,0,92);var g;for(g=-1;;)switch(g){case -1:var j,k,l,m=f,n=f+8,o,p=f+36,q,r=f+88,s,u,v;j=a;g=c;k=d;HEAP[r]=0;g=__PyArg_ParseTupleAndKeywords_SizeT(g,k,fa,t,allocate([p,0,0,0,r,0,0,0],["%struct.Py_buffer*",0,0,0,"i8**",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:l=0;g=38;break;case 2:q=HEAP[p];s=HEAP[p+8];o=b(HEAP[r]);g=o==0?3:4;break;case 3:_PyBuffer_Release(p);
l=0;g=38;break;case 4:g=s==0?5:10;break;case 5:_PyBuffer_Release(p);g=o!=0?6:9;break;case 6:g=o==0|o>3?7:9;break;case 7:HEAP[o]-=1;g=HEAP[o]==0?8:9;break;case 8:FUNCTION_TABLE[HEAP[HEAP[o+4]+24]](o);g=9;break;case 9:l=_PyUnicodeUCS2_FromUnicode(0,0);l=e(l,0);g=38;break;case 10:HEAP[n+20]=0;HEAP[n+4]=q;HEAP[n]=HEAP[n+4];HEAP[n+8]=HEAP[n+4]+s;g=_PyUnicodeUCS2_FromUnicode(0,s);HEAP[n+24]=g;g=HEAP[n+24]==0?27:11;break;case 11:HEAP[n+12]=HEAP[HEAP[n+24]+12];HEAP[n+16]=HEAP[n+12]+2*HEAP[HEAP[n+24]+8];g=
HEAP[HEAP[j+8]+28]!=0?12:13;break;case 12:g=FUNCTION_TABLE[HEAP[HEAP[j+8]+28]](m,HEAP[HEAP[j+8]+4])!=0?27:13;break;case 13:var w=n,x=n+8,y=n+8,B=n,F=n+16,A=n+12,z=n,H=n+12;g=16;break;case 14:v=HEAP[y]-HEAP[B];g=(HEAP[F]-HEAP[A])/2|0;v=FUNCTION_TABLE[HEAP[HEAP[j+8]+24]](m,HEAP[HEAP[j+8]+4],z,v,H,g);g=v==0?17:15;break;case 15:g=h(HEAP[j+8],m,n,o,v)!=0?27:16;break;case 16:g=HEAP[w]<HEAP[x]?14:17;break;case 17:u=(HEAP[n+12]-HEAP[HEAP[n+24]+12])/2|0;g=HEAP[HEAP[n+24]+8]!=u?18:19;break;case 18:g=_PyUnicodeUCS2_Resize(n+
24,u)==-1?27:19;break;case 19:_PyBuffer_Release(p);g=HEAP[n+20]!=0?20:22;break;case 20:g=HEAP[n+20];HEAP[g]-=1;g=HEAP[g]==0?21:22;break;case 21:FUNCTION_TABLE[HEAP[HEAP[HEAP[n+20]+4]+24]](HEAP[n+20]);g=22;break;case 22:g=o!=0?23:26;break;case 23:g=o==0|o>3?24:26;break;case 24:HEAP[o]-=1;g=HEAP[o]==0?25:26;break;case 25:FUNCTION_TABLE[HEAP[HEAP[o+4]+24]](o);g=26;break;case 26:l=e(HEAP[n+24],s);g=38;break;case 27:_PyBuffer_Release(p);g=o!=0?28:31;break;case 28:g=o==0|o>3?29:31;break;case 29:HEAP[o]-=
1;g=HEAP[o]==0?30:31;break;case 30:FUNCTION_TABLE[HEAP[HEAP[o+4]+24]](o);g=31;break;case 31:g=HEAP[n+20]!=0?32:34;break;case 32:g=HEAP[n+20];HEAP[g]-=1;g=HEAP[g]==0?33:34;break;case 33:FUNCTION_TABLE[HEAP[HEAP[HEAP[n+20]+4]+24]](HEAP[n+20]);g=34;break;case 34:g=HEAP[n+24]!=0?35:37;break;case 35:g=HEAP[n+24];HEAP[g]-=1;g=HEAP[g]==0?36:37;break;case 36:FUNCTION_TABLE[HEAP[HEAP[HEAP[n+24]+4]+24]](HEAP[n+24]);g=37;break;case 37:l=0;g=38;break;case 38:return a=l,STACKTOP=f,a;default:assert(0,"bad label: "+
g)}},0,function(a){_PyObject_Free(a)},0,_PyObject_GenericGetAttr,0,function(a,b,c){var d=STACKTOP;STACKTOP+=8;_memset(d,0,8);var e;for(e=-1;;)switch(e){case -1:var f,g,h,j=d,l=d+4;f=a;e=b;g=c;HEAP[l]=0;e=__PyArg_ParseTupleAndKeywords_SizeT(e,g,Na,y,allocate([j,0,0,0,l,0,0,0],["%struct.PyObject**",0,0,0,"i32*",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:h=0;e=3;break;case 2:h=k(f,HEAP[j],HEAP[l]);e=3;break;case 3:return a=h,STACKTOP=d,a;default:assert(0,"bad label: "+e)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c,
d;c=a;b=HEAP[HEAP[c+8]+32]!=0?1:3;break;case 1:b=FUNCTION_TABLE[HEAP[HEAP[c+8]+32]](c+12,HEAP[HEAP[c+8]+4])!=0?2:3;break;case 2:d=0;b=4;break;case 3:HEAP[c+28]=0;HEAP[__Py_NoneStruct]+=1;d=__Py_NoneStruct;b=4;break;case 4:return a=d;default:assert(0,"bad label: "+b)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c;c=a;_PyObject_GC_UnTrack(c);b=HEAP[c+20]!=0?1:5;break;case 1:b=HEAP[c+20]==0?3:2;break;case 2:b=HEAP[c+20]>3?3:5;break;case 3:b=HEAP[c+20];HEAP[b]-=1;b=HEAP[b]==0?4:5;break;case 4:FUNCTION_TABLE[HEAP[HEAP[HEAP[c+
20]+4]+24]](HEAP[c+20]);b=5;break;case 5:FUNCTION_TABLE[HEAP[HEAP[c+4]+160]](c);return;default:assert(0,"bad label: "+b)}},0,function(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,f,g,h,j;e=a;f=b;g=c;d=HEAP[e+20]==0?2:1;break;case 1:d=HEAP[e+20]>3?2:5;break;case 2:d=HEAP[e+20]!=0?3:5;break;case 3:j=FUNCTION_TABLE[f](HEAP[e+20],g);d=j!=0?4:5;break;case 4:h=j;d=6;break;case 5:h=0;d=6;break;case 6:return a=h;default:assert(0,"bad label: "+d)}},0,function(){return 0},0,function(a,c,d){var e=STACKTOP;
STACKTOP+=4;_memset(e,0,4);var f,g=null;for(f=-1;;)switch(f){case -1:var h,j,k,l,m,n=e;h=a;f=c;j=d;m=0;HEAP[n]=0;f=__PyArg_ParseTupleAndKeywords_SizeT(f,j,Ya,x,allocate([n,0,0,0],["i8**",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:k=0;f=21;break;case 2:l=FUNCTION_TABLE[HEAP[h+152]](h,0);f=l==0?3:4;break;case 3:k=0;f=21;break;case 4:m=_PyObject_GetAttrString(h,Ha);f=m==0?13:5;break;case 5:f=HEAP[m+4]!=Da?6:7;break;case 6:_PyErr_SetString(HEAP[_PyExc_TypeError],ta);f=13;break;case 7:HEAP[l+8]=HEAP[m+8];
HEAP[l+28]=0;g=b(HEAP[n]);HEAP[l+20]=g;var o=l;HEAP[o+20]==0?(g=7,f=14):(g=7,f=8);break;case 8:f=HEAP[HEAP[l+8]+16]!=0?9:10;break;case 9:f=FUNCTION_TABLE[HEAP[HEAP[l+8]+16]](l+12,HEAP[HEAP[l+8]+4])!=0?13:10;break;case 10:HEAP[m]-=1;f=HEAP[m]==0?11:12;break;case 11:FUNCTION_TABLE[HEAP[HEAP[m+4]+24]](m);f=12;break;case 12:k=l;f=21;break;case 13:var p=l,g=13;f=14;break;case 14:f=(g==13?p:o)!=0?15:17;break;case 15:HEAP[l]-=1;f=HEAP[l]==0?16:17;break;case 16:FUNCTION_TABLE[HEAP[HEAP[l+4]+24]](l);f=17;
break;case 17:f=m!=0?18:20;break;case 18:HEAP[m]-=1;f=HEAP[m]==0?19:20;break;case 19:FUNCTION_TABLE[HEAP[HEAP[m+4]+24]](m);f=20;break;case 20:k=0;f=21;break;case 21:return a=k,STACKTOP=e,a;default:assert(0,"bad label: "+f)}},0,function(a,b,c){var d=STACKTOP;STACKTOP+=84;_memset(d,0,84);var e;for(e=-1;;)switch(e){case -1:var f,g,j,k=d,o,p,q=d+28,r,s,t,u,v=d+80;f=a;e=b;g=c;s=p=0;HEAP[v]=0;e=__PyArg_ParseTupleAndKeywords_SizeT(e,g,Wa,y,allocate([q,0,0,0,v,0,0,0],["%struct.Py_buffer*",0,0,0,"i32*",0,
0,0],ALLOC_STACK))==0?1:2;break;case 1:j=0;e=34;break;case 2:o=HEAP[q];t=HEAP[q+8];HEAP[k+20]=0;HEAP[k+24]=HEAP[k+20];u=HEAP[f+32];e=HEAP[f+32]==0?3:4;break;case 3:r=t;p=o;e=8;break;case 4:e=2147483647-HEAP[f+32]<t?5:6;break;case 5:_PyErr_NoMemory();e=24;break;case 6:r=t+HEAP[f+32];p=_PyMem_Malloc(r);e=p==0?24:7;break;case 7:_llvm_memcpy_p0i8_p0i8_i32(p,f+24,HEAP[f+32],1,0);_llvm_memcpy_p0i8_p0i8_i32(p+HEAP[f+32],o,t,1,0);HEAP[f+32]=0;e=8;break;case 8:e=m(k,p,r)!=0?24:9;break;case 9:e=n(f,k)!=0?24:
10;break;case 10:e=HEAP[v]!=0?11:14;break;case 11:e=HEAP[k]<HEAP[k+8]?12:14;break;case 12:e=h(HEAP[f+8],f+12,k,HEAP[f+20],-2)!=0?13:14;break;case 13:_llvm_memcpy_p0i8_p0i8_i32(f+24,p,u,1,0);HEAP[f+32]=u;e=24;break;case 14:e=HEAP[k]<HEAP[k+8]?15:16;break;case 15:e=l(f,k)!=0?24:16;break;case 16:s=(HEAP[k+12]-HEAP[HEAP[k+24]+12])/2|0;e=HEAP[HEAP[k+24]+8]!=s?17:18;break;case 17:e=_PyUnicodeUCS2_Resize(k+24,s)==-1?24:18;break;case 18:_PyBuffer_Release(q);e=p!=o?19:20;break;case 19:_PyMem_Free(p);e=20;
break;case 20:e=HEAP[k+20]!=0?21:23;break;case 21:e=HEAP[k+20];HEAP[e]-=1;e=HEAP[e]==0?22:23;break;case 22:FUNCTION_TABLE[HEAP[HEAP[HEAP[k+20]+4]+24]](HEAP[k+20]);e=23;break;case 23:j=HEAP[k+24];e=34;break;case 24:_PyBuffer_Release(q);e=p!=0?25:27;break;case 25:e=p!=o?26:27;break;case 26:_PyMem_Free(p);e=27;break;case 27:e=HEAP[k+20]!=0?28:30;break;case 28:e=HEAP[k+20];HEAP[e]-=1;e=HEAP[e]==0?29:30;break;case 29:FUNCTION_TABLE[HEAP[HEAP[HEAP[k+20]+4]+24]](HEAP[k+20]);e=30;break;case 30:e=HEAP[k+24]!=
0?31:33;break;case 31:e=HEAP[k+24];HEAP[e]-=1;e=HEAP[e]==0?32:33;break;case 32:FUNCTION_TABLE[HEAP[HEAP[HEAP[k+24]+4]+24]](HEAP[k+24]);e=33;break;case 33:j=0;e=34;break;case 34:return a=j,STACKTOP=d,a;default:assert(0,"bad label: "+e)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c,d;c=a;b=HEAP[HEAP[c+8]+32]!=0?1:3;break;case 1:b=FUNCTION_TABLE[HEAP[HEAP[c+8]+32]](c+12,HEAP[HEAP[c+8]+4])!=0?2:3;break;case 2:d=0;b=4;break;case 3:HEAP[c+32]=0;HEAP[__Py_NoneStruct]+=1;d=__Py_NoneStruct;b=4;
break;case 4:return a=d;default:assert(0,"bad label: "+b)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c;c=a;_PyObject_GC_UnTrack(c);b=HEAP[c+20]!=0?1:5;break;case 1:b=HEAP[c+20]==0?3:2;break;case 2:b=HEAP[c+20]>3?3:5;break;case 3:b=HEAP[c+20];HEAP[b]-=1;b=HEAP[b]==0?4:5;break;case 4:FUNCTION_TABLE[HEAP[HEAP[HEAP[c+20]+4]+24]](HEAP[c+20]);b=5;break;case 5:FUNCTION_TABLE[HEAP[HEAP[c+4]+160]](c);return;default:assert(0,"bad label: "+b)}},0,function(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,
f,g,h,j;e=a;f=b;g=c;d=HEAP[e+20]==0?2:1;break;case 1:d=HEAP[e+20]>3?2:5;break;case 2:d=HEAP[e+20]!=0?3:5;break;case 3:j=FUNCTION_TABLE[f](HEAP[e+20],g);d=j!=0?4:5;break;case 4:h=j;d=6;break;case 5:h=0;d=6;break;case 6:return a=h;default:assert(0,"bad label: "+d)}},0,function(){return 0},0,function(a,c,d){var e=STACKTOP;STACKTOP+=4;_memset(e,0,4);var f,g=null;for(f=-1;;)switch(f){case -1:var h,j,k,l,m,n=e;h=a;f=c;j=d;m=0;HEAP[n]=0;f=__PyArg_ParseTupleAndKeywords_SizeT(f,j,Ba,x,allocate([n,0,0,0],["i8**",
0,0,0],ALLOC_STACK))==0?1:2;break;case 1:k=0;f=21;break;case 2:l=FUNCTION_TABLE[HEAP[h+152]](h,0);f=l==0?3:4;break;case 3:k=0;f=21;break;case 4:m=_PyObject_GetAttrString(h,Ha);f=m==0?13:5;break;case 5:f=HEAP[m+4]!=Da?6:7;break;case 6:_PyErr_SetString(HEAP[_PyExc_TypeError],ta);f=13;break;case 7:HEAP[l+8]=HEAP[m+8];HEAP[l+32]=0;g=b(HEAP[n]);HEAP[l+20]=g;var o=l;HEAP[o+20]==0?(g=7,f=14):(g=7,f=8);break;case 8:f=HEAP[HEAP[l+8]+28]!=0?9:10;break;case 9:f=FUNCTION_TABLE[HEAP[HEAP[l+8]+28]](l+12,HEAP[HEAP[l+
8]+4])!=0?13:10;break;case 10:HEAP[m]-=1;f=HEAP[m]==0?11:12;break;case 11:FUNCTION_TABLE[HEAP[HEAP[m+4]+24]](m);f=12;break;case 12:k=l;f=21;break;case 13:var p=l,g=13;f=14;break;case 14:f=(g==13?p:o)!=0?15:17;break;case 15:HEAP[l]-=1;f=HEAP[l]==0?16:17;break;case 16:FUNCTION_TABLE[HEAP[HEAP[l+4]+24]](l);f=17;break;case 17:f=m!=0?18:20;break;case 18:HEAP[m]-=1;f=HEAP[m]==0?19:20;break;case 19:FUNCTION_TABLE[HEAP[HEAP[m+4]+24]](m);f=20;break;case 20:k=0;f=21;break;case 21:return a=k,STACKTOP=e,a;default:assert(0,
"bad label: "+f)}},0,function(a,b){var c=STACKTOP;STACKTOP+=4;_memset(c,0,4);var d;for(d=-1;;)switch(d){case -1:var e,f,g=c,h;e=a;d=b;HEAP[g]=0;d=_PyArg_UnpackTuple(d,ka,0,1,allocate([g,0,0,0],["%struct.PyObject**",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:f=0;d=8;break;case 2:d=HEAP[g]==__Py_NoneStruct|HEAP[g]==0?3:4;break;case 3:h=-1;d=7;break;case 4:d=(HEAP[HEAP[HEAP[g]+4]+84]&8388608)!=0?5:6;break;case 5:h=_PyInt_AsSsize_t(HEAP[g]);d=7;break;case 6:_PyErr_SetString(HEAP[_PyExc_TypeError],Fa);f=
0;d=8;break;case 7:f=o(e,ka,h);d=8;break;case 8:return e=f,STACKTOP=c,e;default:assert(0,"bad label: "+d)}},0,function(a,b){var c=STACKTOP;STACKTOP+=4;_memset(c,0,4);var d;for(d=-1;;)switch(d){case -1:var e,f,g=c,h;e=a;d=b;HEAP[g]=0;d=_PyArg_UnpackTuple(d,ma,0,1,allocate([g,0,0,0],["%struct.PyObject**",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:f=0;d=8;break;case 2:d=HEAP[g]==__Py_NoneStruct|HEAP[g]==0?3:4;break;case 3:h=-1;d=7;break;case 4:d=(HEAP[HEAP[HEAP[g]+4]+84]&8388608)!=0?5:6;break;case 5:h=
_PyInt_AsSsize_t(HEAP[g]);d=7;break;case 6:_PyErr_SetString(HEAP[_PyExc_TypeError],Fa);f=0;d=8;break;case 7:f=o(e,ma,h);d=8;break;case 8:return e=f,STACKTOP=c,e;default:assert(0,"bad label: "+d)}},0,function(a,b){var c=STACKTOP;STACKTOP+=4;_memset(c,0,4);var d;for(d=-1;;)switch(d){case -1:var e,f,g=c,h,j,k;e=a;d=b;HEAP[g]=0;d=_PyArg_UnpackTuple(d,La,0,1,allocate([g,0,0,0],["%struct.PyObject**",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:f=0;d=12;break;case 2:d=HEAP[g]==__Py_NoneStruct|HEAP[g]==0?3:4;
break;case 3:k=-1;d=7;break;case 4:d=(HEAP[HEAP[HEAP[g]+4]+84]&8388608)!=0?5:6;break;case 5:k=_PyInt_AsSsize_t(HEAP[g]);d=7;break;case 6:_PyErr_SetString(HEAP[_PyExc_TypeError],Fa);f=0;d=12;break;case 7:h=d=o(e,ka,k);d=d==0?8:9;break;case 8:f=0;d=12;break;case 9:j=_PyUnicodeUCS2_Splitlines(h,1);HEAP[h]-=1;d=HEAP[h]==0?10:11;break;case 10:FUNCTION_TABLE[HEAP[HEAP[h+4]+24]](h);d=11;break;case 11:f=j;d=12;break;case 12:return e=f,STACKTOP=c,e;default:assert(0,"bad label: "+d)}},0,function(a){var b;for(b=
-1;;)switch(b){case -1:var c,d;c=a;b=HEAP[HEAP[c+8]+32]!=0?1:3;break;case 1:b=FUNCTION_TABLE[HEAP[HEAP[c+8]+32]](c+12,HEAP[HEAP[c+8]+4])!=0?2:3;break;case 2:d=0;b=4;break;case 3:HEAP[c+32]=0;HEAP[__Py_NoneStruct]+=1;d=__Py_NoneStruct;b=4;break;case 4:return a=d;default:assert(0,"bad label: "+b)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c;c=a;_PyObject_GC_UnTrack(c);b=HEAP[c+20]!=0?1:5;break;case 1:b=HEAP[c+20]==0?3:2;break;case 2:b=HEAP[c+20]>3?3:5;break;case 3:b=HEAP[c+20];HEAP[b]-=
1;b=HEAP[b]==0?4:5;break;case 4:FUNCTION_TABLE[HEAP[HEAP[HEAP[c+20]+4]+24]](HEAP[c+20]);b=5;break;case 5:b=HEAP[c+36]!=0?6:8;break;case 6:b=HEAP[c+36];HEAP[b]-=1;b=HEAP[b]==0?7:8;break;case 7:FUNCTION_TABLE[HEAP[HEAP[HEAP[c+36]+4]+24]](HEAP[c+36]);b=8;break;case 8:FUNCTION_TABLE[HEAP[HEAP[c+4]+160]](c);return;default:assert(0,"bad label: "+b)}},0,function(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,f,g,h,j,k;e=a;f=b;g=c;d=HEAP[e+20]==0?2:1;break;case 1:d=HEAP[e+20]>3?2:5;break;case 2:d=HEAP[e+
20]!=0?3:5;break;case 3:j=FUNCTION_TABLE[f](HEAP[e+20],g);d=j!=0?4:5;break;case 4:h=j;d=9;break;case 5:d=HEAP[e+36]!=0?6:8;break;case 6:k=FUNCTION_TABLE[f](HEAP[e+36],g);d=k!=0?7:8;break;case 7:h=k;d=9;break;case 8:h=0;d=9;break;case 9:return a=h;default:assert(0,"bad label: "+d)}},0,function(){return 0},0,function(a,c,d){var e=STACKTOP;STACKTOP+=8;_memset(e,0,8);var f,g=null;for(f=-1;;)switch(f){case -1:var h,j,k,l,m=e,n,o=e+4;h=a;f=c;j=d;n=0;HEAP[o]=0;f=__PyArg_ParseTupleAndKeywords_SizeT(f,j,Ra,
C,allocate([m,0,0,0,o,0,0,0],["%struct.PyObject**",0,0,0,"i8**",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:k=0;f=21;break;case 2:l=FUNCTION_TABLE[HEAP[h+152]](h,0);f=l==0?3:4;break;case 3:k=0;f=21;break;case 4:n=_PyObject_GetAttrString(h,Ha);f=n==0?13:5;break;case 5:f=HEAP[n+4]!=Da?6:7;break;case 6:_PyErr_SetString(HEAP[_PyExc_TypeError],ta);f=13;break;case 7:HEAP[l+8]=HEAP[n+8];HEAP[l+36]=HEAP[m];HEAP[HEAP[m]]+=1;HEAP[l+32]=0;g=b(HEAP[o]);HEAP[l+20]=g;var p=l;HEAP[p+20]==0?(g=7,f=14):(g=7,f=8);break;
case 8:f=HEAP[HEAP[l+8]+28]!=0?9:10;break;case 9:f=FUNCTION_TABLE[HEAP[HEAP[l+8]+28]](l+12,HEAP[HEAP[l+8]+4])!=0?13:10;break;case 10:HEAP[n]-=1;f=HEAP[n]==0?11:12;break;case 11:FUNCTION_TABLE[HEAP[HEAP[n+4]+24]](n);f=12;break;case 12:k=l;f=21;break;case 13:var q=l,g=13;f=14;break;case 14:f=(g==13?q:p)!=0?15:17;break;case 15:HEAP[l]-=1;f=HEAP[l]==0?16:17;break;case 16:FUNCTION_TABLE[HEAP[HEAP[l+4]+24]](l);f=17;break;case 17:f=n!=0?18:20;break;case 18:HEAP[n]-=1;f=HEAP[n]==0?19:20;break;case 19:FUNCTION_TABLE[HEAP[HEAP[n+
4]+24]](n);f=20;break;case 20:k=0;f=21;break;case 21:return a=k,STACKTOP=e,a;default:assert(0,"bad label: "+f)}},0,function(a,b){var c;for(c=-1;;)switch(c){case -1:var d;c=p(a,b)!=0?1:2;break;case 1:d=0;c=3;break;case 2:HEAP[__Py_NoneStruct]+=1;d=__Py_NoneStruct;c=3;break;case 3:return c=d;default:assert(0,"bad label: "+c)}},0,function(a,b){var c;for(c=-1;;)switch(c){case -1:var d,e,f,g,h,j;d=a;e=b;c=_PySequence_Check(e)==0?1:2;break;case 1:_PyErr_SetString(HEAP[_PyExc_TypeError],bb);f=0;c=12;break;
case 2:h=0;c=10;break;case 3:g=_PySequence_GetItem(e,h);c=g==0?4:5;break;case 4:f=0;c=12;break;case 5:j=p(d,g);HEAP[g]-=1;c=HEAP[g]==0?6:7;break;case 6:FUNCTION_TABLE[HEAP[HEAP[g+4]+24]](g);c=7;break;case 7:c=j==-1?8:9;break;case 8:f=0;c=12;break;case 9:h+=1;c=10;break;case 10:c=_PySequence_Size(e)>h?3:11;break;case 11:HEAP[__Py_NoneStruct]+=1;f=__Py_NoneStruct;c=12;break;case 12:return c=f;default:assert(0,"bad label: "+c)}},0,function(a){var b=STACKTOP;STACKTOP+=4;_memset(b,0,4);var c;for(c=-1;;)switch(c){case -1:var d,
e,f=b;d=a;HEAP[f]=d+24;f=j(HEAP[d+8],d+12,f,HEAP[d+28],HEAP[d+20],3);HEAP[d+28]=0;c=f==0?1:2;break;case 1:e=0;c=10;break;case 2:c=_PyString_Size(f)>0?3:7;break;case 3:c=__PyObject_CallMethod_SizeT(HEAP[d+32],ja,ua,allocate([f,0,0,0],["%struct.PyObject*",0,0,0],ALLOC_STACK));c=c==0?4:7;break;case 4:HEAP[f]-=1;c=HEAP[f]==0?5:6;break;case 5:FUNCTION_TABLE[HEAP[HEAP[f+4]+24]](f);c=6;break;case 6:e=0;c=10;break;case 7:HEAP[f]-=1;c=HEAP[f]==0?8:9;break;case 8:FUNCTION_TABLE[HEAP[HEAP[f+4]+24]](f);c=9;break;
case 9:HEAP[__Py_NoneStruct]+=1;e=__Py_NoneStruct;c=10;break;case 10:return a=e,STACKTOP=b,a;default:assert(0,"bad label: "+c)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c;c=a;_PyObject_GC_UnTrack(c);b=HEAP[c+20]!=0?1:5;break;case 1:b=HEAP[c+20]==0?3:2;break;case 2:b=HEAP[c+20]>3?3:5;break;case 3:b=HEAP[c+20];HEAP[b]-=1;b=HEAP[b]==0?4:5;break;case 4:FUNCTION_TABLE[HEAP[HEAP[HEAP[c+20]+4]+24]](HEAP[c+20]);b=5;break;case 5:b=HEAP[c+32]!=0?6:8;break;case 6:b=HEAP[c+32];HEAP[b]-=1;b=HEAP[b]==
0?7:8;break;case 7:FUNCTION_TABLE[HEAP[HEAP[HEAP[c+32]+4]+24]](HEAP[c+32]);b=8;break;case 8:FUNCTION_TABLE[HEAP[HEAP[c+4]+160]](c);return;default:assert(0,"bad label: "+b)}},0,function(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,f,g,h,j,k;e=a;f=b;g=c;d=HEAP[e+20]==0?2:1;break;case 1:d=HEAP[e+20]>3?2:5;break;case 2:d=HEAP[e+20]!=0?3:5;break;case 3:j=FUNCTION_TABLE[f](HEAP[e+20],g);d=j!=0?4:5;break;case 4:h=j;d=9;break;case 5:d=HEAP[e+32]!=0?6:8;break;case 6:k=FUNCTION_TABLE[f](HEAP[e+32],g);d=
k!=0?7:8;break;case 7:h=k;d=9;break;case 8:h=0;d=9;break;case 9:return a=h;default:assert(0,"bad label: "+d)}},0,function(){return 0},0,function(a,c,d){var e=STACKTOP;STACKTOP+=8;_memset(e,0,8);var f,g=null;for(f=-1;;)switch(f){case -1:var h,j,k,l,m=e,n,o=e+4;h=a;f=c;j=d;n=0;HEAP[o]=0;f=__PyArg_ParseTupleAndKeywords_SizeT(f,j,qa,C,allocate([m,0,0,0,o,0,0,0],["%struct.PyObject**",0,0,0,"i8**",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:k=0;f=21;break;case 2:l=FUNCTION_TABLE[HEAP[h+152]](h,0);f=l==0?3:
4;break;case 3:k=0;f=21;break;case 4:n=_PyObject_GetAttrString(h,Ha);f=n==0?13:5;break;case 5:f=HEAP[n+4]!=Da?6:7;break;case 6:_PyErr_SetString(HEAP[_PyExc_TypeError],ta);f=13;break;case 7:HEAP[l+8]=HEAP[n+8];HEAP[l+32]=HEAP[m];HEAP[HEAP[m]]+=1;HEAP[l+28]=0;g=b(HEAP[o]);HEAP[l+20]=g;var p=l;HEAP[p+20]==0?(g=7,f=14):(g=7,f=8);break;case 8:f=HEAP[HEAP[l+8]+16]!=0?9:10;break;case 9:f=FUNCTION_TABLE[HEAP[HEAP[l+8]+16]](l+12,HEAP[HEAP[l+8]+4])!=0?13:10;break;case 10:HEAP[n]-=1;f=HEAP[n]==0?11:12;break;
case 11:FUNCTION_TABLE[HEAP[HEAP[n+4]+24]](n);f=12;break;case 12:k=l;f=21;break;case 13:var q=l,g=13;f=14;break;case 14:f=(g==13?q:p)!=0?15:17;break;case 15:HEAP[l]-=1;f=HEAP[l]==0?16:17;break;case 16:FUNCTION_TABLE[HEAP[HEAP[l+4]+24]](l);f=17;break;case 17:f=n!=0?18:20;break;case 18:HEAP[n]-=1;f=HEAP[n]==0?19:20;break;case 19:FUNCTION_TABLE[HEAP[HEAP[n+4]+24]](n);f=20;break;case 20:k=0;f=21;break;case 21:return a=k,STACKTOP=e,a;default:assert(0,"bad label: "+f)}},0,function(a,b){var c;for(c=-1;;)switch(c){case -1:var d,
e,f,g;d=b;c=_PyCapsule_IsValid(d,Ca)==0?1:2;break;case 1:_PyErr_SetString(HEAP[_PyExc_ValueError],pa);e=0;c=8;break;case 2:g=_PyCapsule_GetPointer(d,Ca);c=HEAP[g+8]!=0?3:5;break;case 3:c=FUNCTION_TABLE[HEAP[g+8]](HEAP[g+4])!=0?4:5;break;case 4:e=0;c=8;break;case 5:f=c=__PyObject_New(Da);c=c==0?6:7;break;case 6:e=0;c=8;break;case 7:HEAP[f+8]=g;e=f;c=8;break;case 8:return d=e;default:assert(0,"bad label: "+c)}},0]);r.run=q;q();return r});
=======
"use strict";

// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];

  
// === Auto-generated preamble library stuff ===

//========================================
// Runtime essentials
//========================================

var __globalConstructor__ = function globalConstructor() {
}

// === Body ===



var $0___SIZE = 40; // %0
  
var $1___SIZE = 20; // %1
  
var $2___SIZE = 20; // %2
  
var $3___SIZE = 48; // %3
  
var $4___SIZE = 16; // %4
  
var $5___SIZE = 196; // %5
  
var $6___SIZE = 196; // %6
  
var $7___SIZE = 80; // %7
  
var $8___SIZE = 40; // %8
  
var $9___SIZE = 64; // %9
  
var $10___SIZE = 32; // %10
  
var $11___SIZE = 16; // %11
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_MultibyteCodec___SIZE = 36; // %struct.MultibyteCodec
  
var $struct_MultibyteCodecObject___SIZE = 12; // %struct.MultibyteCodecObject
  
var $struct_MultibyteDecodeBuffer___SIZE = 28; // %struct.MultibyteDecodeBuffer
  
var $struct_MultibyteEncodeBuffer___SIZE = 28; // %struct.MultibyteEncodeBuffer
  
var $struct_MultibyteIncrementalDecoderObject___SIZE = 36; // %struct.MultibyteIncrementalDecoderObject
  var $struct_MultibyteIncrementalDecoderObject___FLATTENER = [0,4,8,12,20,24,32];
var $struct_MultibyteIncrementalEncoderObject___SIZE = 32; // %struct.MultibyteIncrementalEncoderObject
  var $struct_MultibyteIncrementalEncoderObject___FLATTENER = [0,4,8,12,20,24,28];
var $struct_MultibyteStatefulCodecContext___SIZE = 24; // %struct.MultibyteStatefulCodecContext
  var $struct_MultibyteStatefulCodecContext___FLATTENER = [0,4,8,12,20];
var $struct_MultibyteStreamReaderObject___SIZE = 40; // %struct.MultibyteStreamReaderObject
  var $struct_MultibyteStreamReaderObject___FLATTENER = [0,4,8,12,20,24,32,36];
var $struct_MultibyteStreamWriterObject___SIZE = 36; // %struct.MultibyteStreamWriterObject
  var $struct_MultibyteStreamWriterObject___FLATTENER = [0,4,8,12,20,24,28,32];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $union_MultibyteCodec_State___SIZE = 8; // %union.MultibyteCodec_State
  
var _MultibyteCodec_Encode__doc__;
var _MultibyteCodec_Decode__doc__;
var _codeckwarglist;
var __str;
var __str1;
var _incnewkwarglist;
var _incrementalkwarglist;
var __str2;
var _streamkwarglist;
var __str3;
var __str4;
var __str5;
var __str6;
var __str7;
var __str8;
var ___PRETTY_FUNCTION___8537;

var __str9;
var __str10;
var _codecctx_getsets;
var __str11;
var __str12;

var __str13;
var __str14;
var __str15;

var __str16;
var __str17;
var __str18;
var __str19;
var __str20;
var __str21;
var __str22;
var __str23;
var _multibytecodec_methods;
var __str24;
var _MultibyteCodec_Type;

var __str25;
var __str26;

var __str27;
var _mbiencoder_methods;
var __str28;
var __str29;
var __str30;
var __str31;
var _MultibyteIncrementalEncoder_Type;
var __str32;
var _mbidecoder_methods;
var __str33;
var __str34;
var _MultibyteIncrementalDecoder_Type;
var __str35;
var __str36;
var __str37;
var __str38;
var __str39;
var __str40;
var _mbstreamreader_methods;
var _mbstreamreader_members;
var __str41;
var __str42;
var _MultibyteStreamReader_Type;
var __str43;
var __str44;
var __str45;
var __str46;
var __str47;
var _mbstreamwriter_methods;
var _mbstreamwriter_members;
var __str48;
var _MultibyteStreamWriter_Type;
var __str49;

var __str50;
var __str51;
var ___methods;
var __str52;
var __str53;























































  function _make_tuple($object, $len) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $object_addr;
        var $len_addr;
        var $retval;
        var $0;
        var $v;
        var $w;
        $object_addr=$object;
        $len_addr=$len;
        var $1=$object_addr; //@line 58 "multibytecodec.c"
        var $2=($1)==0; //@line 58 "multibytecodec.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 58 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 59 "multibytecodec.c"
        __label__ = 11; break; //@line 59 "multibytecodec.c"
      case 2: // $bb1
        var $3=_PyTuple_New(2); //@line 61 "multibytecodec.c"
        $v=$3; //@line 61 "multibytecodec.c"
        var $4=$v; //@line 62 "multibytecodec.c"
        var $5=($4)==0; //@line 62 "multibytecodec.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 62 "multibytecodec.c"
      case 3: // $bb2
        var $6=$object_addr; //@line 63 "multibytecodec.c"
        var $7=$6; //@line 63 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 63 "multibytecodec.c"
        var $9=($8) - 1; //@line 63 "multibytecodec.c"
        var $10=$object_addr; //@line 63 "multibytecodec.c"
        var $11=$10; //@line 63 "multibytecodec.c"
        HEAP[$11]=$9; //@line 63 "multibytecodec.c"
        var $12=$object_addr; //@line 63 "multibytecodec.c"
        var $13=$12; //@line 63 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 63 "multibytecodec.c"
        var $15=($14)==0; //@line 63 "multibytecodec.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 63 "multibytecodec.c"
      case 4: // $bb3
        var $16=$object_addr; //@line 63 "multibytecodec.c"
        var $17=$16+4; //@line 63 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 63 "multibytecodec.c"
        var $19=$18+24; //@line 63 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 63 "multibytecodec.c"
        var $21=$object_addr; //@line 63 "multibytecodec.c"
        FUNCTION_TABLE[$20]($21); //@line 63 "multibytecodec.c"
        __label__ = 5; break; //@line 63 "multibytecodec.c"
      case 5: // $bb4
        $0=0; //@line 64 "multibytecodec.c"
        __label__ = 11; break; //@line 64 "multibytecodec.c"
      case 6: // $bb5
        var $22=$v; //@line 66 "multibytecodec.c"
        var $23=$22; //@line 66 "multibytecodec.c"
        var $24=$23+12; //@line 66 "multibytecodec.c"
        var $25=$24; //@line 66 "multibytecodec.c"
        var $26=$object_addr; //@line 66 "multibytecodec.c"
        HEAP[$25]=$26; //@line 66 "multibytecodec.c"
        var $27=$len_addr; //@line 68 "multibytecodec.c"
        var $28=_PyInt_FromSsize_t($27); //@line 68 "multibytecodec.c"
        $w=$28; //@line 68 "multibytecodec.c"
        var $29=$w; //@line 69 "multibytecodec.c"
        var $30=($29)==0; //@line 69 "multibytecodec.c"
        var $31=$v; //@line 70 "multibytecodec.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 69 "multibytecodec.c"
      case 7: // $bb6
        var $32=$31; //@line 70 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 70 "multibytecodec.c"
        var $34=($33) - 1; //@line 70 "multibytecodec.c"
        var $35=$v; //@line 70 "multibytecodec.c"
        var $36=$35; //@line 70 "multibytecodec.c"
        HEAP[$36]=$34; //@line 70 "multibytecodec.c"
        var $37=$v; //@line 70 "multibytecodec.c"
        var $38=$37; //@line 70 "multibytecodec.c"
        var $39=HEAP[$38]; //@line 70 "multibytecodec.c"
        var $40=($39)==0; //@line 70 "multibytecodec.c"
        if ($40) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 70 "multibytecodec.c"
      case 8: // $bb7
        var $41=$v; //@line 70 "multibytecodec.c"
        var $42=$41+4; //@line 70 "multibytecodec.c"
        var $43=HEAP[$42]; //@line 70 "multibytecodec.c"
        var $44=$43+24; //@line 70 "multibytecodec.c"
        var $45=HEAP[$44]; //@line 70 "multibytecodec.c"
        var $46=$v; //@line 70 "multibytecodec.c"
        FUNCTION_TABLE[$45]($46); //@line 70 "multibytecodec.c"
        __label__ = 9; break; //@line 70 "multibytecodec.c"
      case 9: // $bb8
        $0=0; //@line 71 "multibytecodec.c"
        __label__ = 11; break; //@line 71 "multibytecodec.c"
      case 10: // $bb9
        var $47=$31; //@line 73 "multibytecodec.c"
        var $48=$47+12; //@line 73 "multibytecodec.c"
        var $49=$48+4; //@line 73 "multibytecodec.c"
        var $50=$w; //@line 73 "multibytecodec.c"
        HEAP[$49]=$50; //@line 73 "multibytecodec.c"
        var $51=$v; //@line 75 "multibytecodec.c"
        $0=$51; //@line 75 "multibytecodec.c"
        __label__ = 11; break; //@line 75 "multibytecodec.c"
      case 11: // $bb10
        var $52=$0; //@line 59 "multibytecodec.c"
        $retval=$52; //@line 59 "multibytecodec.c"
        var $retval11=$retval; //@line 59 "multibytecodec.c"
        ;
        return $retval11; //@line 59 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _internal_error_callback($errors) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $errors_addr;
        var $retval;
        var $0;
        $errors_addr=$errors;
        var $1=$errors_addr; //@line 81 "multibytecodec.c"
        var $2=($1)==0; //@line 81 "multibytecodec.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 81 "multibytecodec.c"
      case 1: // $bb
        var $3=$errors_addr; //@line 81 "multibytecodec.c"
        var $4=_strcmp($3, __str4); //@line 81 "multibytecodec.c"
        var $5=($4)==0; //@line 81 "multibytecodec.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 81 "multibytecodec.c"
      case 2: // $bb1
        $0=1; //@line 82 "multibytecodec.c"
        __label__ = 8; break; //@line 82 "multibytecodec.c"
      case 3: // $bb2
        var $6=$errors_addr; //@line 83 "multibytecodec.c"
        var $7=_strcmp($6, __str5); //@line 83 "multibytecodec.c"
        var $8=($7)==0; //@line 83 "multibytecodec.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 83 "multibytecodec.c"
      case 4: // $bb3
        $0=2; //@line 84 "multibytecodec.c"
        __label__ = 8; break; //@line 84 "multibytecodec.c"
      case 5: // $bb4
        var $9=$errors_addr; //@line 85 "multibytecodec.c"
        var $10=_strcmp($9, __str6); //@line 85 "multibytecodec.c"
        var $11=($10)==0; //@line 85 "multibytecodec.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 85 "multibytecodec.c"
      case 6: // $bb5
        $0=3; //@line 86 "multibytecodec.c"
        __label__ = 8; break; //@line 86 "multibytecodec.c"
      case 7: // $bb6
        var $12=$errors_addr; //@line 88 "multibytecodec.c"
        var $13=_PyString_FromString($12); //@line 88 "multibytecodec.c"
        $0=$13; //@line 88 "multibytecodec.c"
        __label__ = 8; break; //@line 88 "multibytecodec.c"
      case 8: // $bb7
        var $14=$0; //@line 82 "multibytecodec.c"
        $retval=$14; //@line 82 "multibytecodec.c"
        var $retval8=$retval; //@line 82 "multibytecodec.c"
        ;
        return $retval8; //@line 82 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _call_error_callback($errors, $exc) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $errors_addr;
        var $exc_addr;
        var $retval;
        var $0;
        var $args;
        var $cb;
        var $r;
        $errors_addr=$errors;
        $exc_addr=$exc;
        var $1=$errors_addr; //@line 96 "multibytecodec.c"
        var $2=$1+4; //@line 96 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 96 "multibytecodec.c"
        var $4=$3+84; //@line 96 "multibytecodec.c"
        var $5=HEAP[$4]; //@line 96 "multibytecodec.c"
        var $6=($5) & 134217728; //@line 96 "multibytecodec.c"
        var $7=($6)==0; //@line 96 "multibytecodec.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 96 "multibytecodec.c"
      case 1: // $bb
        ___assert_fail(__str7, __str8, 96, ___PRETTY_FUNCTION___8537); //@line 96 "multibytecodec.c"
        throw "Reached an unreachable!" //@line 96 "multibytecodec.c"
      case 2: // $bb1
        var $8=$errors_addr; //@line 97 "multibytecodec.c"
        var $9=$8; //@line 97 "multibytecodec.c"
        var $10=$9+20; //@line 97 "multibytecodec.c"
        var $11=$10; //@line 97 "multibytecodec.c"
        var $12=_PyCodec_LookupError($11); //@line 97 "multibytecodec.c"
        $cb=$12; //@line 97 "multibytecodec.c"
        var $13=$cb; //@line 98 "multibytecodec.c"
        var $14=($13)==0; //@line 98 "multibytecodec.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 98 "multibytecodec.c"
      case 3: // $bb2
        $0=0; //@line 99 "multibytecodec.c"
        __label__ = 13; break; //@line 99 "multibytecodec.c"
      case 4: // $bb3
        var $15=_PyTuple_New(1); //@line 101 "multibytecodec.c"
        $args=$15; //@line 101 "multibytecodec.c"
        var $16=$args; //@line 102 "multibytecodec.c"
        var $17=($16)==0; //@line 102 "multibytecodec.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 102 "multibytecodec.c"
      case 5: // $bb4
        var $18=$cb; //@line 103 "multibytecodec.c"
        var $19=$18; //@line 103 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 103 "multibytecodec.c"
        var $21=($20) - 1; //@line 103 "multibytecodec.c"
        var $22=$cb; //@line 103 "multibytecodec.c"
        var $23=$22; //@line 103 "multibytecodec.c"
        HEAP[$23]=$21; //@line 103 "multibytecodec.c"
        var $24=$cb; //@line 103 "multibytecodec.c"
        var $25=$24; //@line 103 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 103 "multibytecodec.c"
        var $27=($26)==0; //@line 103 "multibytecodec.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 103 "multibytecodec.c"
      case 6: // $bb5
        var $28=$cb; //@line 103 "multibytecodec.c"
        var $29=$28+4; //@line 103 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 103 "multibytecodec.c"
        var $31=$30+24; //@line 103 "multibytecodec.c"
        var $32=HEAP[$31]; //@line 103 "multibytecodec.c"
        var $33=$cb; //@line 103 "multibytecodec.c"
        FUNCTION_TABLE[$32]($33); //@line 103 "multibytecodec.c"
        __label__ = 7; break; //@line 103 "multibytecodec.c"
      case 7: // $bb6
        $0=0; //@line 104 "multibytecodec.c"
        __label__ = 13; break; //@line 104 "multibytecodec.c"
      case 8: // $bb7
        var $34=$args; //@line 107 "multibytecodec.c"
        var $35=$34; //@line 107 "multibytecodec.c"
        var $36=$35+12; //@line 107 "multibytecodec.c"
        var $37=$36; //@line 107 "multibytecodec.c"
        var $38=$exc_addr; //@line 107 "multibytecodec.c"
        HEAP[$37]=$38; //@line 107 "multibytecodec.c"
        var $39=$exc_addr; //@line 108 "multibytecodec.c"
        var $40=$39; //@line 108 "multibytecodec.c"
        var $41=HEAP[$40]; //@line 108 "multibytecodec.c"
        var $42=($41) + 1; //@line 108 "multibytecodec.c"
        var $43=$exc_addr; //@line 108 "multibytecodec.c"
        var $44=$43; //@line 108 "multibytecodec.c"
        HEAP[$44]=$42; //@line 108 "multibytecodec.c"
        var $45=$cb; //@line 110 "multibytecodec.c"
        var $46=$args; //@line 110 "multibytecodec.c"
        var $47=_PyObject_CallObject($45, $46); //@line 110 "multibytecodec.c"
        $r=$47; //@line 110 "multibytecodec.c"
        var $48=$args; //@line 111 "multibytecodec.c"
        var $49=$48; //@line 111 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 111 "multibytecodec.c"
        var $51=($50) - 1; //@line 111 "multibytecodec.c"
        var $52=$args; //@line 111 "multibytecodec.c"
        var $53=$52; //@line 111 "multibytecodec.c"
        HEAP[$53]=$51; //@line 111 "multibytecodec.c"
        var $54=$args; //@line 111 "multibytecodec.c"
        var $55=$54; //@line 111 "multibytecodec.c"
        var $56=HEAP[$55]; //@line 111 "multibytecodec.c"
        var $57=($56)==0; //@line 111 "multibytecodec.c"
        if ($57) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 111 "multibytecodec.c"
      case 9: // $bb8
        var $58=$args; //@line 111 "multibytecodec.c"
        var $59=$58+4; //@line 111 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 111 "multibytecodec.c"
        var $61=$60+24; //@line 111 "multibytecodec.c"
        var $62=HEAP[$61]; //@line 111 "multibytecodec.c"
        var $63=$args; //@line 111 "multibytecodec.c"
        FUNCTION_TABLE[$62]($63); //@line 111 "multibytecodec.c"
        __label__ = 10; break; //@line 111 "multibytecodec.c"
      case 10: // $bb9
        var $64=$cb; //@line 112 "multibytecodec.c"
        var $65=$64; //@line 112 "multibytecodec.c"
        var $66=HEAP[$65]; //@line 112 "multibytecodec.c"
        var $67=($66) - 1; //@line 112 "multibytecodec.c"
        var $68=$cb; //@line 112 "multibytecodec.c"
        var $69=$68; //@line 112 "multibytecodec.c"
        HEAP[$69]=$67; //@line 112 "multibytecodec.c"
        var $70=$cb; //@line 112 "multibytecodec.c"
        var $71=$70; //@line 112 "multibytecodec.c"
        var $72=HEAP[$71]; //@line 112 "multibytecodec.c"
        var $73=($72)==0; //@line 112 "multibytecodec.c"
        if ($73) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 112 "multibytecodec.c"
      case 11: // $bb10
        var $74=$cb; //@line 112 "multibytecodec.c"
        var $75=$74+4; //@line 112 "multibytecodec.c"
        var $76=HEAP[$75]; //@line 112 "multibytecodec.c"
        var $77=$76+24; //@line 112 "multibytecodec.c"
        var $78=HEAP[$77]; //@line 112 "multibytecodec.c"
        var $79=$cb; //@line 112 "multibytecodec.c"
        FUNCTION_TABLE[$78]($79); //@line 112 "multibytecodec.c"
        __label__ = 12; break; //@line 112 "multibytecodec.c"
      case 12: // $bb11
        var $80=$r; //@line 113 "multibytecodec.c"
        $0=$80; //@line 113 "multibytecodec.c"
        __label__ = 13; break; //@line 113 "multibytecodec.c"
      case 13: // $bb12
        var $81=$0; //@line 99 "multibytecodec.c"
        $retval=$81; //@line 99 "multibytecodec.c"
        var $retval13=$retval; //@line 99 "multibytecodec.c"
        ;
        return $retval13; //@line 99 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _codecctx_errors_get($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $errors;
        $self_addr=$self;
        var $1=$self_addr; //@line 121 "multibytecodec.c"
        var $2=$1+20; //@line 121 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 121 "multibytecodec.c"
        var $4=($3)==1; //@line 121 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 121 "multibytecodec.c"
      case 1: // $bb
        $errors=__str4; //@line 122 "multibytecodec.c"
        __label__ = 7; break; //@line 122 "multibytecodec.c"
      case 2: // $bb1
        var $5=$self_addr; //@line 123 "multibytecodec.c"
        var $6=$5+20; //@line 123 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 123 "multibytecodec.c"
        var $8=($7)==2; //@line 123 "multibytecodec.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 123 "multibytecodec.c"
      case 3: // $bb2
        $errors=__str5; //@line 124 "multibytecodec.c"
        __label__ = 7; break; //@line 124 "multibytecodec.c"
      case 4: // $bb3
        var $9=$self_addr; //@line 125 "multibytecodec.c"
        var $10=$9+20; //@line 125 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 125 "multibytecodec.c"
        var $12=($11)==3; //@line 125 "multibytecodec.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 125 "multibytecodec.c"
      case 5: // $bb4
        $errors=__str6; //@line 126 "multibytecodec.c"
        __label__ = 7; break; //@line 126 "multibytecodec.c"
      case 6: // $bb5
        var $13=$self_addr; //@line 128 "multibytecodec.c"
        var $14=$13+20; //@line 128 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 128 "multibytecodec.c"
        var $16=$15; //@line 128 "multibytecodec.c"
        var $17=HEAP[$16]; //@line 128 "multibytecodec.c"
        var $18=($17) + 1; //@line 128 "multibytecodec.c"
        var $19=$15; //@line 128 "multibytecodec.c"
        HEAP[$19]=$18; //@line 128 "multibytecodec.c"
        var $20=$self_addr; //@line 129 "multibytecodec.c"
        var $21=$20+20; //@line 129 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 129 "multibytecodec.c"
        $0=$22; //@line 129 "multibytecodec.c"
        __label__ = 8; break; //@line 129 "multibytecodec.c"
      case 7: // $bb6
        var $23=$errors; //@line 132 "multibytecodec.c"
        var $24=_PyString_FromString($23); //@line 132 "multibytecodec.c"
        $0=$24; //@line 132 "multibytecodec.c"
        __label__ = 8; break; //@line 132 "multibytecodec.c"
      case 8: // $bb7
        var $25=$0; //@line 129 "multibytecodec.c"
        $retval=$25; //@line 129 "multibytecodec.c"
        var $retval8=$retval; //@line 129 "multibytecodec.c"
        ;
        return $retval8; //@line 129 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _codecctx_errors_set($self, $value, $closure) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $value_addr;
        var $closure_addr;
        var $retval;
        var $0;
        var $cb;
        $self_addr=$self;
        $value_addr=$value;
        $closure_addr=$closure;
        var $1=$value_addr; //@line 141 "multibytecodec.c"
        var $2=$1+4; //@line 141 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 141 "multibytecodec.c"
        var $4=$3+84; //@line 141 "multibytecodec.c"
        var $5=HEAP[$4]; //@line 141 "multibytecodec.c"
        var $6=($5) & 134217728; //@line 141 "multibytecodec.c"
        var $7=($6)==0; //@line 141 "multibytecodec.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 141 "multibytecodec.c"
      case 1: // $bb
        var $8=HEAP[_PyExc_TypeError]; //@line 142 "multibytecodec.c"
        _PyErr_SetString($8, __str9); //@line 142 "multibytecodec.c"
        $0=-1; //@line 143 "multibytecodec.c"
        __label__ = 10; break; //@line 143 "multibytecodec.c"
      case 2: // $bb1
        var $9=$value_addr; //@line 146 "multibytecodec.c"
        var $10=$9; //@line 146 "multibytecodec.c"
        var $11=$10+20; //@line 146 "multibytecodec.c"
        var $12=$11; //@line 146 "multibytecodec.c"
        var $13=_internal_error_callback($12); //@line 146 "multibytecodec.c"
        $cb=$13; //@line 146 "multibytecodec.c"
        var $14=$cb; //@line 147 "multibytecodec.c"
        var $15=($14)==0; //@line 147 "multibytecodec.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 147 "multibytecodec.c"
      case 3: // $bb2
        $0=-1; //@line 148 "multibytecodec.c"
        __label__ = 10; break; //@line 148 "multibytecodec.c"
      case 4: // $bb3
        var $16=$self_addr; //@line 150 "multibytecodec.c"
        var $17=$16+20; //@line 150 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 150 "multibytecodec.c"
        var $19=($18)!=0; //@line 150 "multibytecodec.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 150 "multibytecodec.c"
      case 5: // $bb4
        var $20=$self_addr; //@line 150 "multibytecodec.c"
        var $21=$20+20; //@line 150 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 150 "multibytecodec.c"
        var $23=($22)==0; //@line 150 "multibytecodec.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 150 "multibytecodec.c"
      case 6: // $bb5
        var $24=$self_addr; //@line 150 "multibytecodec.c"
        var $25=$24+20; //@line 150 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 150 "multibytecodec.c"
        var $27=($26) > 3; //@line 150 "multibytecodec.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 150 "multibytecodec.c"
      case 7: // $bb6
        var $28=$self_addr; //@line 150 "multibytecodec.c"
        var $29=$28+20; //@line 150 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 150 "multibytecodec.c"
        var $31=$30; //@line 150 "multibytecodec.c"
        var $32=HEAP[$31]; //@line 150 "multibytecodec.c"
        var $33=($32) - 1; //@line 150 "multibytecodec.c"
        var $34=$30; //@line 150 "multibytecodec.c"
        HEAP[$34]=$33; //@line 150 "multibytecodec.c"
        var $35=$30; //@line 150 "multibytecodec.c"
        var $36=HEAP[$35]; //@line 150 "multibytecodec.c"
        var $37=($36)==0; //@line 150 "multibytecodec.c"
        if ($37) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 150 "multibytecodec.c"
      case 8: // $bb7
        var $38=$self_addr; //@line 150 "multibytecodec.c"
        var $39=$38+20; //@line 150 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 150 "multibytecodec.c"
        var $41=$40+4; //@line 150 "multibytecodec.c"
        var $42=HEAP[$41]; //@line 150 "multibytecodec.c"
        var $43=$42+24; //@line 150 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 150 "multibytecodec.c"
        var $45=$self_addr; //@line 150 "multibytecodec.c"
        var $46=$45+20; //@line 150 "multibytecodec.c"
        var $47=HEAP[$46]; //@line 150 "multibytecodec.c"
        FUNCTION_TABLE[$44]($47); //@line 150 "multibytecodec.c"
        __label__ = 9; break; //@line 150 "multibytecodec.c"
      case 9: // $bb8
        var $48=$self_addr; //@line 151 "multibytecodec.c"
        var $49=$48+20; //@line 151 "multibytecodec.c"
        var $50=$cb; //@line 151 "multibytecodec.c"
        HEAP[$49]=$50; //@line 151 "multibytecodec.c"
        $0=0; //@line 152 "multibytecodec.c"
        __label__ = 10; break; //@line 152 "multibytecodec.c"
      case 10: // $bb9
        var $51=$0; //@line 143 "multibytecodec.c"
        $retval=$51; //@line 143 "multibytecodec.c"
        var $retval10=$retval; //@line 143 "multibytecodec.c"
        ;
        return $retval10; //@line 143 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expand_encodebuffer($buf, $esize) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $buf_addr;
        var $esize_addr;
        var $retval;
        var $0;
        var $iftmp_7;
        var $orgpos;
        var $orgsize;
        var $incsize;
        $buf_addr=$buf;
        $esize_addr=$esize;
        var $1=$buf_addr; //@line 168 "multibytecodec.c"
        var $2=$1+12; //@line 168 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 168 "multibytecodec.c"
        var $4=($3); //@line 168 "multibytecodec.c"
        var $5=$buf_addr; //@line 168 "multibytecodec.c"
        var $6=$5+24; //@line 168 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 168 "multibytecodec.c"
        var $8=$7; //@line 168 "multibytecodec.c"
        var $9=$8+20; //@line 168 "multibytecodec.c"
        var $10=($9); //@line 168 "multibytecodec.c"
        var $11=($4) - ($10); //@line 168 "multibytecodec.c"
        $orgpos=$11; //@line 168 "multibytecodec.c"
        var $12=$buf_addr; //@line 170 "multibytecodec.c"
        var $13=$12+24; //@line 170 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 170 "multibytecodec.c"
        var $15=$14; //@line 170 "multibytecodec.c"
        var $16=$15+8; //@line 170 "multibytecodec.c"
        var $17=HEAP[$16]; //@line 170 "multibytecodec.c"
        $orgsize=$17; //@line 170 "multibytecodec.c"
        var $18=$orgsize; //@line 171 "multibytecodec.c"
        var $19=($18) >> 1; //@line 171 "multibytecodec.c"
        var $20=$esize_addr; //@line 171 "multibytecodec.c"
        var $21=($19) > ($20); //@line 171 "multibytecodec.c"
        if ($21) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 171 "multibytecodec.c"
      case 1: // $bb
        var $22=$orgsize; //@line 171 "multibytecodec.c"
        var $23=($22) >> 1; //@line 171 "multibytecodec.c"
        var $24=($23) | 1; //@line 171 "multibytecodec.c"
        $iftmp_7=$24; //@line 171 "multibytecodec.c"
        __label__ = 3; break; //@line 171 "multibytecodec.c"
      case 2: // $bb1
        var $25=$esize_addr; //@line 171 "multibytecodec.c"
        $iftmp_7=$25; //@line 171 "multibytecodec.c"
        __label__ = 3; break; //@line 171 "multibytecodec.c"
      case 3: // $bb2
        var $26=$iftmp_7; //@line 171 "multibytecodec.c"
        $incsize=$26; //@line 171 "multibytecodec.c"
        var $27=$incsize; //@line 173 "multibytecodec.c"
        var $28=2147483647 - ($27); //@line 173 "multibytecodec.c"
        var $29=$orgsize; //@line 173 "multibytecodec.c"
        var $30=($28) < ($29); //@line 173 "multibytecodec.c"
        if ($30) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 173 "multibytecodec.c"
      case 4: // $bb3
        $0=-1; //@line 174 "multibytecodec.c"
        __label__ = 8; break; //@line 174 "multibytecodec.c"
      case 5: // $bb4
        var $31=$orgsize; //@line 176 "multibytecodec.c"
        var $32=$incsize; //@line 176 "multibytecodec.c"
        var $33=($32) + ($31); //@line 176 "multibytecodec.c"
        var $34=$buf_addr; //@line 176 "multibytecodec.c"
        var $35=$34+24; //@line 176 "multibytecodec.c"
        var $36=__PyString_Resize($35, $33); //@line 176 "multibytecodec.c"
        var $37=($36)==-1; //@line 176 "multibytecodec.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 176 "multibytecodec.c"
      case 6: // $bb5
        $0=-1; //@line 177 "multibytecodec.c"
        __label__ = 8; break; //@line 177 "multibytecodec.c"
      case 7: // $bb6
        var $38=$buf_addr; //@line 179 "multibytecodec.c"
        var $39=$38+24; //@line 179 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 179 "multibytecodec.c"
        var $41=$40; //@line 179 "multibytecodec.c"
        var $42=$41+20; //@line 179 "multibytecodec.c"
        var $43=$42; //@line 179 "multibytecodec.c"
        var $44=$orgpos; //@line 179 "multibytecodec.c"
        var $45=$43+$44; //@line 179 "multibytecodec.c"
        var $46=$buf_addr; //@line 179 "multibytecodec.c"
        var $47=$46+12; //@line 179 "multibytecodec.c"
        HEAP[$47]=$45; //@line 179 "multibytecodec.c"
        var $48=$buf_addr; //@line 180 "multibytecodec.c"
        var $49=$48+24; //@line 180 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 180 "multibytecodec.c"
        var $51=$50; //@line 180 "multibytecodec.c"
        var $52=$51+20; //@line 180 "multibytecodec.c"
        var $53=$52; //@line 180 "multibytecodec.c"
        var $54=$buf_addr; //@line 180 "multibytecodec.c"
        var $55=$54+24; //@line 180 "multibytecodec.c"
        var $56=HEAP[$55]; //@line 180 "multibytecodec.c"
        var $57=$56; //@line 180 "multibytecodec.c"
        var $58=$57+8; //@line 180 "multibytecodec.c"
        var $59=HEAP[$58]; //@line 180 "multibytecodec.c"
        var $60=$53+$59; //@line 180 "multibytecodec.c"
        var $61=$buf_addr; //@line 180 "multibytecodec.c"
        var $62=$61+16; //@line 180 "multibytecodec.c"
        HEAP[$62]=$60; //@line 180 "multibytecodec.c"
        $0=0; //@line 183 "multibytecodec.c"
        __label__ = 8; break; //@line 183 "multibytecodec.c"
      case 8: // $bb7
        var $63=$0; //@line 174 "multibytecodec.c"
        $retval=$63; //@line 174 "multibytecodec.c"
        var $retval8=$retval; //@line 174 "multibytecodec.c"
        ;
        return $retval8; //@line 174 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expand_decodebuffer($buf, $esize) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $buf_addr;
        var $esize_addr;
        var $retval;
        var $0;
        var $iftmp_8;
        var $orgpos;
        var $orgsize;
        $buf_addr=$buf;
        $esize_addr=$esize;
        var $1=$buf_addr; //@line 196 "multibytecodec.c"
        var $2=$1+12; //@line 196 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 196 "multibytecodec.c"
        var $4=($3); //@line 196 "multibytecodec.c"
        var $5=$buf_addr; //@line 196 "multibytecodec.c"
        var $6=$5+24; //@line 196 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 196 "multibytecodec.c"
        var $8=$7; //@line 196 "multibytecodec.c"
        var $9=$8+12; //@line 196 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 196 "multibytecodec.c"
        var $11=($10); //@line 196 "multibytecodec.c"
        var $12=($4) - ($11); //@line 196 "multibytecodec.c"
        var $13=((($12)/2)|0); //@line 196 "multibytecodec.c"
        $orgpos=$13; //@line 196 "multibytecodec.c"
        var $14=$buf_addr; //@line 197 "multibytecodec.c"
        var $15=$14+24; //@line 197 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 197 "multibytecodec.c"
        var $17=$16; //@line 197 "multibytecodec.c"
        var $18=$17+8; //@line 197 "multibytecodec.c"
        var $19=HEAP[$18]; //@line 197 "multibytecodec.c"
        $orgsize=$19; //@line 197 "multibytecodec.c"
        var $20=$orgsize; //@line 198 "multibytecodec.c"
        var $21=($20) >> 1; //@line 198 "multibytecodec.c"
        var $22=$esize_addr; //@line 198 "multibytecodec.c"
        var $23=($21) > ($22); //@line 198 "multibytecodec.c"
        if ($23) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 198 "multibytecodec.c"
      case 1: // $bb
        var $24=$orgsize; //@line 198 "multibytecodec.c"
        var $25=($24) >> 1; //@line 198 "multibytecodec.c"
        var $26=($25) | 1; //@line 198 "multibytecodec.c"
        $iftmp_8=$26; //@line 198 "multibytecodec.c"
        __label__ = 3; break; //@line 198 "multibytecodec.c"
      case 2: // $bb1
        var $27=$esize_addr; //@line 198 "multibytecodec.c"
        $iftmp_8=$27; //@line 198 "multibytecodec.c"
        __label__ = 3; break; //@line 198 "multibytecodec.c"
      case 3: // $bb2
        var $28=$iftmp_8; //@line 198 "multibytecodec.c"
        var $29=$orgsize; //@line 198 "multibytecodec.c"
        var $30=($29) + ($28); //@line 198 "multibytecodec.c"
        var $31=$buf_addr; //@line 198 "multibytecodec.c"
        var $32=$31+24; //@line 198 "multibytecodec.c"
        var $33=_PyUnicodeUCS2_Resize($32, $30); //@line 198 "multibytecodec.c"
        var $34=($33)==-1; //@line 198 "multibytecodec.c"
        if ($34) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 198 "multibytecodec.c"
      case 4: // $bb3
        $0=-1; //@line 200 "multibytecodec.c"
        __label__ = 6; break; //@line 200 "multibytecodec.c"
      case 5: // $bb4
        var $35=$buf_addr; //@line 202 "multibytecodec.c"
        var $36=$35+24; //@line 202 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 202 "multibytecodec.c"
        var $38=$37; //@line 202 "multibytecodec.c"
        var $39=$38+12; //@line 202 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 202 "multibytecodec.c"
        var $41=$orgpos; //@line 202 "multibytecodec.c"
        var $42=$40+2*$41; //@line 202 "multibytecodec.c"
        var $43=$buf_addr; //@line 202 "multibytecodec.c"
        var $44=$43+12; //@line 202 "multibytecodec.c"
        HEAP[$44]=$42; //@line 202 "multibytecodec.c"
        var $45=$buf_addr; //@line 203 "multibytecodec.c"
        var $46=$45+24; //@line 203 "multibytecodec.c"
        var $47=HEAP[$46]; //@line 203 "multibytecodec.c"
        var $48=$47; //@line 203 "multibytecodec.c"
        var $49=$48+12; //@line 203 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 203 "multibytecodec.c"
        var $51=$buf_addr; //@line 203 "multibytecodec.c"
        var $52=$51+24; //@line 203 "multibytecodec.c"
        var $53=HEAP[$52]; //@line 203 "multibytecodec.c"
        var $54=$53; //@line 203 "multibytecodec.c"
        var $55=$54+8; //@line 203 "multibytecodec.c"
        var $56=HEAP[$55]; //@line 203 "multibytecodec.c"
        var $57=$50+2*$56; //@line 203 "multibytecodec.c"
        var $58=$buf_addr; //@line 203 "multibytecodec.c"
        var $59=$58+16; //@line 203 "multibytecodec.c"
        HEAP[$59]=$57; //@line 203 "multibytecodec.c"
        $0=0; //@line 206 "multibytecodec.c"
        __label__ = 6; break; //@line 206 "multibytecodec.c"
      case 6: // $bb5
        var $60=$0; //@line 200 "multibytecodec.c"
        $retval=$60; //@line 200 "multibytecodec.c"
        var $retval6=$retval; //@line 200 "multibytecodec.c"
        ;
        return $retval6; //@line 200 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _multibytecodec_encerror($codec, $state, $buf, $errors, $e) {
    var __stackBase__  = STACKTOP; STACKTOP += 10; _memset(__stackBase__, 0, 10);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $codec_addr;
        var $state_addr;
        var $buf_addr;
        var $errors_addr;
        var $e_addr;
        var $retval;
        var $0;
        var $retobj;
        var $retstr;
        var $tobj;
        var $retstrsize;
        var $newpos;
        var $esize;
        var $start;
        var $end;
        var $reason;
        var $replchar=__stackBase__;
        var $inbuf=__stackBase__+2;
        var $r;
        var $outleft;
        var $uraw=__stackBase__+6;
        $codec_addr=$codec;
        $state_addr=$state;
        $buf_addr=$buf;
        $errors_addr=$errors;
        $e_addr=$e;
        $retobj=0; //@line 225 "multibytecodec.c"
        $retstr=0; //@line 225 "multibytecodec.c"
        var $1=$e_addr; //@line 230 "multibytecodec.c"
        var $2=($1) > 0; //@line 230 "multibytecodec.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 230 "multibytecodec.c"
      case 1: // $bb
        $reason=__str11; //@line 231 "multibytecodec.c"
        var $3=$e_addr; //@line 232 "multibytecodec.c"
        $esize=$3; //@line 232 "multibytecodec.c"
        __label__ = 8; break; //@line 232 "multibytecodec.c"
      case 2: // $bb1
        var $4=$e_addr; //@line 235 "multibytecodec.c"
        if ($4 == -3) {
          __label__ = 6; break;
        }
        else if ($4 == -2) {
          __label__ = 5; break;
        }
        else if ($4 == -1) {
          __label__ = 3; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 3: // $bb2
        var $5=$buf_addr; //@line 237 "multibytecodec.c"
        var $6=_expand_encodebuffer($5, -1); //@line 237 "multibytecodec.c"
        var $7=($6)==-1; //@line 237 "multibytecodec.c"
        if ($7) { __label__ = 48; break; } else { __label__ = 4; break; } //@line 237 "multibytecodec.c"
      case 4: // $bb3
        $0=0; //@line 238 "multibytecodec.c"
        __label__ = 55; break; //@line 238 "multibytecodec.c"
      case 5: // $bb4
        $reason=__str12; //@line 240 "multibytecodec.c"
        var $8=$buf_addr; //@line 241 "multibytecodec.c"
        var $9=$8+8; //@line 241 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 241 "multibytecodec.c"
        var $11=($10); //@line 241 "multibytecodec.c"
        var $12=$buf_addr; //@line 241 "multibytecodec.c"
        var $13=$12; //@line 241 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 241 "multibytecodec.c"
        var $15=($14); //@line 241 "multibytecodec.c"
        var $16=($11) - ($15); //@line 241 "multibytecodec.c"
        var $17=((($16)/2)|0); //@line 241 "multibytecodec.c"
        $esize=$17; //@line 241 "multibytecodec.c"
        __label__ = 8; break; //@line 241 "multibytecodec.c"
      case 6: // $bb5
        var $18=HEAP[_PyExc_RuntimeError]; //@line 244 "multibytecodec.c"
        _PyErr_SetString($18, __str13); //@line 244 "multibytecodec.c"
        $0=-1; //@line 246 "multibytecodec.c"
        __label__ = 55; break; //@line 246 "multibytecodec.c"
      case 7: // $bb6
        var $19=HEAP[_PyExc_RuntimeError]; //@line 248 "multibytecodec.c"
        _PyErr_SetString($19, __str14); //@line 248 "multibytecodec.c"
        $0=-1; //@line 250 "multibytecodec.c"
        __label__ = 55; break; //@line 250 "multibytecodec.c"
      case 8: // $bb7
        var $20=$errors_addr; //@line 254 "multibytecodec.c"
        var $21=($20)==3; //@line 254 "multibytecodec.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 254 "multibytecodec.c"
      case 9: // $bb8
        HEAP[$replchar]=63; //@line 255 "multibytecodec.c"
        HEAP[$inbuf]=$replchar; //@line 255 "multibytecodec.c"
        __label__ = 10; break; //@line 255 "multibytecodec.c"
      case 10: // $bb9
        var $22=$buf_addr; //@line 261 "multibytecodec.c"
        var $23=$22+16; //@line 261 "multibytecodec.c"
        var $24=HEAP[$23]; //@line 261 "multibytecodec.c"
        var $25=($24); //@line 261 "multibytecodec.c"
        var $26=$buf_addr; //@line 261 "multibytecodec.c"
        var $27=$26+12; //@line 261 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 261 "multibytecodec.c"
        var $29=($28); //@line 261 "multibytecodec.c"
        var $30=($25) - ($29); //@line 261 "multibytecodec.c"
        $outleft=$30; //@line 261 "multibytecodec.c"
        var $31=$codec_addr; //@line 262 "multibytecodec.c"
        var $32=$31+12; //@line 262 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 262 "multibytecodec.c"
        var $34=$buf_addr; //@line 262 "multibytecodec.c"
        var $35=$34+12; //@line 262 "multibytecodec.c"
        var $36=$codec_addr; //@line 262 "multibytecodec.c"
        var $37=$36+4; //@line 262 "multibytecodec.c"
        var $38=HEAP[$37]; //@line 262 "multibytecodec.c"
        var $39=$state_addr; //@line 262 "multibytecodec.c"
        var $40=$outleft; //@line 262 "multibytecodec.c"
        var $41=FUNCTION_TABLE[$33]($39, $38, $inbuf, 1, $35, $40, 0); //@line 262 "multibytecodec.c"
        $r=$41; //@line 262 "multibytecodec.c"
        var $42=($41)==-1; //@line 264 "multibytecodec.c"
        if ($42) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 264 "multibytecodec.c"
      case 11: // $bb10
        var $43=$buf_addr; //@line 265 "multibytecodec.c"
        var $44=_expand_encodebuffer($43, -1); //@line 265 "multibytecodec.c"
        var $45=($44)==-1; //@line 265 "multibytecodec.c"
        if ($45) { __label__ = 48; break; } else { __label__ = 10; break; } //@line 265 "multibytecodec.c"
      case 12: // $bb12
        var $46=$r; //@line 272 "multibytecodec.c"
        var $47=($46)!=0; //@line 272 "multibytecodec.c"
        if ($47) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 272 "multibytecodec.c"
      case 13: // $bb13
        var $48=$buf_addr; //@line 273 "multibytecodec.c"
        var $49=$48+12; //@line 273 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 273 "multibytecodec.c"
        var $51=$50+1; //@line 273 "multibytecodec.c"
        var $52=$buf_addr; //@line 273 "multibytecodec.c"
        var $53=$52+16; //@line 273 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 273 "multibytecodec.c"
        var $55=($51) > ($54); //@line 273 "multibytecodec.c"
        if ($55) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 273 "multibytecodec.c"
      case 14: // $bb14
        var $56=$buf_addr; //@line 273 "multibytecodec.c"
        var $57=_expand_encodebuffer($56, 1); //@line 273 "multibytecodec.c"
        var $58=($57)==-1; //@line 273 "multibytecodec.c"
        if ($58) { __label__ = 48; break; } else { __label__ = 15; break; } //@line 273 "multibytecodec.c"
      case 15: // $bb15
        var $59=$buf_addr; //@line 274 "multibytecodec.c"
        var $60=$59+12; //@line 274 "multibytecodec.c"
        var $61=HEAP[$60]; //@line 274 "multibytecodec.c"
        HEAP[$61]=63; //@line 274 "multibytecodec.c"
        var $62=$61+1; //@line 274 "multibytecodec.c"
        var $63=$buf_addr; //@line 274 "multibytecodec.c"
        var $64=$63+12; //@line 274 "multibytecodec.c"
        HEAP[$64]=$62; //@line 274 "multibytecodec.c"
        __label__ = 16; break; //@line 274 "multibytecodec.c"
      case 16: // $bb16
        var $65=$errors_addr; //@line 277 "multibytecodec.c"
        var $66=($65)==2; //@line 277 "multibytecodec.c"
        var $67=$errors_addr; //@line 277 "multibytecodec.c"
        var $68=($67)==3; //@line 277 "multibytecodec.c"
        var $or_cond=($66) | ($68);
        var $69=$buf_addr; //@line 278 "multibytecodec.c"
        var $70=$69; //@line 278 "multibytecodec.c"
        var $71=HEAP[$70]; //@line 278 "multibytecodec.c"
        if ($or_cond) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 277 "multibytecodec.c"
      case 17: // $bb18
        var $72=$esize; //@line 278 "multibytecodec.c"
        var $73=$71+2*$72; //@line 278 "multibytecodec.c"
        var $74=$buf_addr; //@line 278 "multibytecodec.c"
        var $75=$74; //@line 278 "multibytecodec.c"
        HEAP[$75]=$73; //@line 278 "multibytecodec.c"
        $0=0; //@line 279 "multibytecodec.c"
        __label__ = 55; break; //@line 279 "multibytecodec.c"
      case 18: // $bb19
        var $76=($71); //@line 282 "multibytecodec.c"
        var $77=$buf_addr; //@line 282 "multibytecodec.c"
        var $78=$77+4; //@line 282 "multibytecodec.c"
        var $79=HEAP[$78]; //@line 282 "multibytecodec.c"
        var $80=($79); //@line 282 "multibytecodec.c"
        var $81=($76) - ($80); //@line 282 "multibytecodec.c"
        var $82=((($81)/2)|0); //@line 282 "multibytecodec.c"
        $start=$82; //@line 282 "multibytecodec.c"
        var $83=$start; //@line 283 "multibytecodec.c"
        var $84=$esize; //@line 283 "multibytecodec.c"
        var $85=($84) + ($83); //@line 283 "multibytecodec.c"
        $end=$85; //@line 283 "multibytecodec.c"
        var $86=$buf_addr; //@line 286 "multibytecodec.c"
        var $87=$86+20; //@line 286 "multibytecodec.c"
        var $88=HEAP[$87]; //@line 286 "multibytecodec.c"
        var $89=($88)==0; //@line 286 "multibytecodec.c"
        var $90=$buf_addr; //@line 287 "multibytecodec.c"
        if ($89) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 286 "multibytecodec.c"
      case 19: // $bb20
        var $91=$90+8; //@line 287 "multibytecodec.c"
        var $92=HEAP[$91]; //@line 287 "multibytecodec.c"
        var $93=($92); //@line 287 "multibytecodec.c"
        var $94=$buf_addr; //@line 287 "multibytecodec.c"
        var $95=$94+4; //@line 287 "multibytecodec.c"
        var $96=HEAP[$95]; //@line 287 "multibytecodec.c"
        var $97=($96); //@line 287 "multibytecodec.c"
        var $98=($93) - ($97); //@line 287 "multibytecodec.c"
        var $99=((($98)/2)|0); //@line 287 "multibytecodec.c"
        var $100=$buf_addr; //@line 287 "multibytecodec.c"
        var $101=$100+4; //@line 287 "multibytecodec.c"
        var $102=HEAP[$101]; //@line 287 "multibytecodec.c"
        var $103=$codec_addr; //@line 287 "multibytecodec.c"
        var $104=$103; //@line 287 "multibytecodec.c"
        var $105=HEAP[$104]; //@line 287 "multibytecodec.c"
        var $106=$start; //@line 287 "multibytecodec.c"
        var $107=$end; //@line 287 "multibytecodec.c"
        var $108=$reason; //@line 287 "multibytecodec.c"
        var $109=_PyUnicodeEncodeError_Create($105, $102, $99, $106, $107, $108); //@line 287 "multibytecodec.c"
        var $110=$buf_addr; //@line 287 "multibytecodec.c"
        var $111=$110+20; //@line 287 "multibytecodec.c"
        HEAP[$111]=$109; //@line 287 "multibytecodec.c"
        var $112=$buf_addr; //@line 291 "multibytecodec.c"
        var $113=$112+20; //@line 291 "multibytecodec.c"
        var $114=HEAP[$113]; //@line 291 "multibytecodec.c"
        var $115=($114)==0; //@line 291 "multibytecodec.c"
        if ($115) { __label__ = 48; break; } else { __label__ = 23; break; } //@line 291 "multibytecodec.c"
      case 20: // $bb22
        var $116=$90+20; //@line 295 "multibytecodec.c"
        var $117=HEAP[$116]; //@line 295 "multibytecodec.c"
        var $118=$start; //@line 295 "multibytecodec.c"
        var $119=_PyUnicodeEncodeError_SetStart($117, $118); //@line 295 "multibytecodec.c"
        var $120=($119)!=0; //@line 295 "multibytecodec.c"
        if ($120) { __label__ = 48; break; } else { __label__ = 21; break; } //@line 295 "multibytecodec.c"
      case 21: // $bb23
        var $121=$buf_addr; //@line 295 "multibytecodec.c"
        var $122=$121+20; //@line 295 "multibytecodec.c"
        var $123=HEAP[$122]; //@line 295 "multibytecodec.c"
        var $124=$end; //@line 295 "multibytecodec.c"
        var $125=_PyUnicodeEncodeError_SetEnd($123, $124); //@line 295 "multibytecodec.c"
        var $126=($125)!=0; //@line 295 "multibytecodec.c"
        if ($126) { __label__ = 48; break; } else { __label__ = 22; break; } //@line 295 "multibytecodec.c"
      case 22: // $bb24
        var $127=$buf_addr; //@line 295 "multibytecodec.c"
        var $128=$127+20; //@line 295 "multibytecodec.c"
        var $129=HEAP[$128]; //@line 295 "multibytecodec.c"
        var $130=$reason; //@line 295 "multibytecodec.c"
        var $131=_PyUnicodeEncodeError_SetReason($129, $130); //@line 295 "multibytecodec.c"
        var $132=($131)!=0; //@line 295 "multibytecodec.c"
        if ($132) { __label__ = 48; break; } else { __label__ = 23; break; } //@line 295 "multibytecodec.c"
      case 23: // $bb25
        var $133=$errors_addr; //@line 300 "multibytecodec.c"
        var $134=($133)==1; //@line 300 "multibytecodec.c"
        var $135=$buf_addr; //@line 301 "multibytecodec.c"
        var $136=$135+20; //@line 301 "multibytecodec.c"
        var $137=HEAP[$136]; //@line 301 "multibytecodec.c"
        if ($134) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 300 "multibytecodec.c"
      case 24: // $bb26
        var $138=_PyCodec_StrictErrors($137); //@line 301 "multibytecodec.c"
        __label__ = 48; break; //@line 301 "multibytecodec.c"
      case 25: // $bb27
        var $139=$errors_addr; //@line 305 "multibytecodec.c"
        var $140=_call_error_callback($139, $137); //@line 305 "multibytecodec.c"
        $retobj=$140; //@line 305 "multibytecodec.c"
        var $141=$retobj; //@line 306 "multibytecodec.c"
        var $142=($141)==0; //@line 306 "multibytecodec.c"
        if ($142) { __label__ = 51; break; } else { __label__ = 26; break; } //@line 306 "multibytecodec.c"
      case 26: // $bb28
        var $143=$retobj; //@line 309 "multibytecodec.c"
        var $144=$143+4; //@line 309 "multibytecodec.c"
        var $145=HEAP[$144]; //@line 309 "multibytecodec.c"
        var $146=$145+84; //@line 309 "multibytecodec.c"
        var $147=HEAP[$146]; //@line 309 "multibytecodec.c"
        var $148=($147) & 67108864; //@line 309 "multibytecodec.c"
        var $149=($148)==0; //@line 309 "multibytecodec.c"
        if ($149) { __label__ = 31; break; } else { __label__ = 27; break; } //@line 309 "multibytecodec.c"
      case 27: // $bb29
        var $150=$retobj; //@line 309 "multibytecodec.c"
        var $151=$150; //@line 309 "multibytecodec.c"
        var $152=$151+8; //@line 309 "multibytecodec.c"
        var $153=HEAP[$152]; //@line 309 "multibytecodec.c"
        var $154=($153)!=2; //@line 309 "multibytecodec.c"
        if ($154) { __label__ = 31; break; } else { __label__ = 28; break; } //@line 309 "multibytecodec.c"
      case 28: // $bb30
        var $155=$retobj; //@line 309 "multibytecodec.c"
        var $156=$155; //@line 309 "multibytecodec.c"
        var $157=$156+12; //@line 309 "multibytecodec.c"
        var $158=$157; //@line 309 "multibytecodec.c"
        var $159=HEAP[$158]; //@line 309 "multibytecodec.c"
        $tobj=$159; //@line 309 "multibytecodec.c"
        var $160=$tobj; //@line 309 "multibytecodec.c"
        var $161=$160+4; //@line 309 "multibytecodec.c"
        var $162=HEAP[$161]; //@line 309 "multibytecodec.c"
        var $163=$162+84; //@line 309 "multibytecodec.c"
        var $164=HEAP[$163]; //@line 309 "multibytecodec.c"
        var $165=($164) & 268435456; //@line 309 "multibytecodec.c"
        var $166=($165)==0; //@line 309 "multibytecodec.c"
        if ($166) { __label__ = 31; break; } else { __label__ = 29; break; } //@line 309 "multibytecodec.c"
      case 29: // $bb31
        var $167=$retobj; //@line 309 "multibytecodec.c"
        var $168=$167; //@line 309 "multibytecodec.c"
        var $169=$168+12; //@line 309 "multibytecodec.c"
        var $170=$169+4; //@line 309 "multibytecodec.c"
        var $171=HEAP[$170]; //@line 309 "multibytecodec.c"
        var $172=$171+4; //@line 309 "multibytecodec.c"
        var $173=HEAP[$172]; //@line 309 "multibytecodec.c"
        var $174=$173+84; //@line 309 "multibytecodec.c"
        var $175=HEAP[$174]; //@line 309 "multibytecodec.c"
        var $176=($175) & 8388608; //@line 309 "multibytecodec.c"
        var $177=($176)!=0; //@line 309 "multibytecodec.c"
        if ($177) { __label__ = 32; break; } else { __label__ = 30; break; } //@line 309 "multibytecodec.c"
      case 30: // $bb32
        var $178=$retobj; //@line 309 "multibytecodec.c"
        var $179=$178; //@line 309 "multibytecodec.c"
        var $180=$179+12; //@line 309 "multibytecodec.c"
        var $181=$180+4; //@line 309 "multibytecodec.c"
        var $182=HEAP[$181]; //@line 309 "multibytecodec.c"
        var $183=$182+4; //@line 309 "multibytecodec.c"
        var $184=HEAP[$183]; //@line 309 "multibytecodec.c"
        var $185=$184+84; //@line 309 "multibytecodec.c"
        var $186=HEAP[$185]; //@line 309 "multibytecodec.c"
        var $187=($186) & 16777216; //@line 309 "multibytecodec.c"
        var $188=($187)==0; //@line 309 "multibytecodec.c"
        if ($188) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 309 "multibytecodec.c"
      case 31: // $bb33
        var $189=HEAP[_PyExc_TypeError]; //@line 313 "multibytecodec.c"
        _PyErr_SetString($189, __str15); //@line 313 "multibytecodec.c"
        __label__ = 48; break; //@line 313 "multibytecodec.c"
      case 32: // $bb34
        var $190=$tobj; //@line 320 "multibytecodec.c"
        var $191=$190; //@line 320 "multibytecodec.c"
        var $192=$191+12; //@line 320 "multibytecodec.c"
        var $193=HEAP[$192]; //@line 320 "multibytecodec.c"
        HEAP[$uraw]=$193; //@line 320 "multibytecodec.c"
        var $194=$tobj; //@line 322 "multibytecodec.c"
        var $195=$194; //@line 322 "multibytecodec.c"
        var $196=$195+8; //@line 322 "multibytecodec.c"
        var $197=HEAP[$196]; //@line 322 "multibytecodec.c"
        var $198=$codec_addr; //@line 322 "multibytecodec.c"
        var $199=$state_addr; //@line 322 "multibytecodec.c"
        var $200=_multibytecodec_encode($198, $199, $uraw, $197, 1, 1); //@line 322 "multibytecodec.c"
        $retstr=$200; //@line 322 "multibytecodec.c"
        var $201=($200)==0; //@line 325 "multibytecodec.c"
        if ($201) { __label__ = 48; break; } else { __label__ = 33; break; } //@line 325 "multibytecodec.c"
      case 33: // $bb35
        var $202=$retstr; //@line 329 "multibytecodec.c"
        var $203=$202; //@line 329 "multibytecodec.c"
        var $204=$203+8; //@line 329 "multibytecodec.c"
        var $205=HEAP[$204]; //@line 329 "multibytecodec.c"
        $retstrsize=$205; //@line 329 "multibytecodec.c"
        var $206=$retstrsize; //@line 330 "multibytecodec.c"
        var $207=($206) <= 0; //@line 330 "multibytecodec.c"
        if ($207) { __label__ = 35; break; } else { __label__ = 34; break; } //@line 330 "multibytecodec.c"
      case 34: // $bb36
        var $208=$buf_addr; //@line 330 "multibytecodec.c"
        var $209=$208+12; //@line 330 "multibytecodec.c"
        var $210=HEAP[$209]; //@line 330 "multibytecodec.c"
        var $211=$retstrsize; //@line 330 "multibytecodec.c"
        var $212=$210+$211; //@line 330 "multibytecodec.c"
        var $213=$buf_addr; //@line 330 "multibytecodec.c"
        var $214=$213+16; //@line 330 "multibytecodec.c"
        var $215=HEAP[$214]; //@line 330 "multibytecodec.c"
        var $216=($212) > ($215); //@line 330 "multibytecodec.c"
        if ($216) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 330 "multibytecodec.c"
      case 35: // $bb37
        var $217=$buf_addr; //@line 330 "multibytecodec.c"
        var $218=$retstrsize; //@line 330 "multibytecodec.c"
        var $219=_expand_encodebuffer($217, $218); //@line 330 "multibytecodec.c"
        var $220=($219)==-1; //@line 330 "multibytecodec.c"
        if ($220) { __label__ = 48; break; } else { __label__ = 36; break; } //@line 330 "multibytecodec.c"
      case 36: // $bb38
        var $221=$retstrsize; //@line 332 "multibytecodec.c"
        var $222=$retstr; //@line 332 "multibytecodec.c"
        var $223=$222; //@line 332 "multibytecodec.c"
        var $224=$223+20; //@line 332 "multibytecodec.c"
        var $225=$224; //@line 332 "multibytecodec.c"
        var $226=$buf_addr; //@line 332 "multibytecodec.c"
        var $227=$226+12; //@line 332 "multibytecodec.c"
        var $228=HEAP[$227]; //@line 332 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($228, $225, $221, 1, 0); //@line 332 "multibytecodec.c"
        var $229=$buf_addr; //@line 333 "multibytecodec.c"
        var $230=$229+12; //@line 333 "multibytecodec.c"
        var $231=HEAP[$230]; //@line 333 "multibytecodec.c"
        var $232=$retstrsize; //@line 333 "multibytecodec.c"
        var $233=$231+$232; //@line 333 "multibytecodec.c"
        var $234=$buf_addr; //@line 333 "multibytecodec.c"
        var $235=$234+12; //@line 333 "multibytecodec.c"
        HEAP[$235]=$233; //@line 333 "multibytecodec.c"
        var $236=$retobj; //@line 335 "multibytecodec.c"
        var $237=$236; //@line 335 "multibytecodec.c"
        var $238=$237+12; //@line 335 "multibytecodec.c"
        var $239=$238+4; //@line 335 "multibytecodec.c"
        var $240=HEAP[$239]; //@line 335 "multibytecodec.c"
        var $241=_PyInt_AsSsize_t($240); //@line 335 "multibytecodec.c"
        $newpos=$241; //@line 335 "multibytecodec.c"
        var $242=($241) < 0; //@line 336 "multibytecodec.c"
        if ($242) { __label__ = 37; break; } else { __label__ = 41; break; } //@line 336 "multibytecodec.c"
      case 37: // $bb39
        var $243=_PyErr_Occurred(); //@line 336 "multibytecodec.c"
        var $244=($243)==0; //@line 336 "multibytecodec.c"
        if ($244) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 336 "multibytecodec.c"
      case 38: // $bb40
        var $245=$buf_addr; //@line 337 "multibytecodec.c"
        var $246=$245+8; //@line 337 "multibytecodec.c"
        var $247=HEAP[$246]; //@line 337 "multibytecodec.c"
        var $248=($247); //@line 337 "multibytecodec.c"
        var $249=$buf_addr; //@line 337 "multibytecodec.c"
        var $250=$249+4; //@line 337 "multibytecodec.c"
        var $251=HEAP[$250]; //@line 337 "multibytecodec.c"
        var $252=($251); //@line 337 "multibytecodec.c"
        var $253=($248) - ($252); //@line 337 "multibytecodec.c"
        var $254=((($253)/2)|0); //@line 337 "multibytecodec.c"
        var $255=$newpos; //@line 337 "multibytecodec.c"
        var $256=($255) + ($254); //@line 337 "multibytecodec.c"
        $newpos=$256; //@line 337 "multibytecodec.c"
        __lastLabel__ = 38; __label__ = 40; break; //@line 337 "multibytecodec.c"
      case 39: // $bb41thread_pre_split
        var $_pr=$newpos;
        __lastLabel__ = 39; __label__ = 40; break;
      case 40: // $bb41
        var $257=__lastLabel__ == 39 ? $_pr : ($256);
        var $258=($257) < 0; //@line 338 "multibytecodec.c"
        if ($258) { __label__ = 42; break; } else { __label__ = 41; break; } //@line 338 "multibytecodec.c"
      case 41: // $bb42
        var $259=$buf_addr; //@line 338 "multibytecodec.c"
        var $260=$259+4; //@line 338 "multibytecodec.c"
        var $261=HEAP[$260]; //@line 338 "multibytecodec.c"
        var $262=$newpos; //@line 338 "multibytecodec.c"
        var $263=$261+2*$262; //@line 338 "multibytecodec.c"
        var $264=$buf_addr; //@line 338 "multibytecodec.c"
        var $265=$264+8; //@line 338 "multibytecodec.c"
        var $266=HEAP[$265]; //@line 338 "multibytecodec.c"
        var $267=($263) > ($266); //@line 338 "multibytecodec.c"
        if ($267) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 338 "multibytecodec.c"
      case 42: // $bb43
        _PyErr_Clear(); //@line 339 "multibytecodec.c"
        var $268=HEAP[_PyExc_IndexError]; //@line 340 "multibytecodec.c"
        var $269=$newpos; //@line 340 "multibytecodec.c"
        var $270=_PyErr_Format($268, __str16, allocate([$269,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 340 "multibytecodec.c"
        __label__ = 48; break; //@line 340 "multibytecodec.c"
      case 43: // $bb44
        var $271=$buf_addr; //@line 345 "multibytecodec.c"
        var $272=$271+4; //@line 345 "multibytecodec.c"
        var $273=HEAP[$272]; //@line 345 "multibytecodec.c"
        var $274=$newpos; //@line 345 "multibytecodec.c"
        var $275=$273+2*$274; //@line 345 "multibytecodec.c"
        var $276=$buf_addr; //@line 345 "multibytecodec.c"
        var $277=$276; //@line 345 "multibytecodec.c"
        HEAP[$277]=$275; //@line 345 "multibytecodec.c"
        var $278=$retobj; //@line 347 "multibytecodec.c"
        var $279=$278; //@line 347 "multibytecodec.c"
        var $280=HEAP[$279]; //@line 347 "multibytecodec.c"
        var $281=($280) - 1; //@line 347 "multibytecodec.c"
        var $282=$retobj; //@line 347 "multibytecodec.c"
        var $283=$282; //@line 347 "multibytecodec.c"
        HEAP[$283]=$281; //@line 347 "multibytecodec.c"
        var $284=$retobj; //@line 347 "multibytecodec.c"
        var $285=$284; //@line 347 "multibytecodec.c"
        var $286=HEAP[$285]; //@line 347 "multibytecodec.c"
        var $287=($286)==0; //@line 347 "multibytecodec.c"
        if ($287) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 347 "multibytecodec.c"
      case 44: // $bb45
        var $288=$retobj; //@line 347 "multibytecodec.c"
        var $289=$288+4; //@line 347 "multibytecodec.c"
        var $290=HEAP[$289]; //@line 347 "multibytecodec.c"
        var $291=$290+24; //@line 347 "multibytecodec.c"
        var $292=HEAP[$291]; //@line 347 "multibytecodec.c"
        var $293=$retobj; //@line 347 "multibytecodec.c"
        FUNCTION_TABLE[$292]($293); //@line 347 "multibytecodec.c"
        __label__ = 45; break; //@line 347 "multibytecodec.c"
      case 45: // $bb46
        var $294=$retstr; //@line 348 "multibytecodec.c"
        var $295=$294; //@line 348 "multibytecodec.c"
        var $296=HEAP[$295]; //@line 348 "multibytecodec.c"
        var $297=($296) - 1; //@line 348 "multibytecodec.c"
        var $298=$retstr; //@line 348 "multibytecodec.c"
        var $299=$298; //@line 348 "multibytecodec.c"
        HEAP[$299]=$297; //@line 348 "multibytecodec.c"
        var $300=$retstr; //@line 348 "multibytecodec.c"
        var $301=$300; //@line 348 "multibytecodec.c"
        var $302=HEAP[$301]; //@line 348 "multibytecodec.c"
        var $303=($302)==0; //@line 348 "multibytecodec.c"
        if ($303) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 348 "multibytecodec.c"
      case 46: // $bb47
        var $304=$retstr; //@line 348 "multibytecodec.c"
        var $305=$304+4; //@line 348 "multibytecodec.c"
        var $306=HEAP[$305]; //@line 348 "multibytecodec.c"
        var $307=$306+24; //@line 348 "multibytecodec.c"
        var $308=HEAP[$307]; //@line 348 "multibytecodec.c"
        var $309=$retstr; //@line 348 "multibytecodec.c"
        FUNCTION_TABLE[$308]($309); //@line 348 "multibytecodec.c"
        __label__ = 47; break; //@line 348 "multibytecodec.c"
      case 47: // $bb48
        $0=0; //@line 349 "multibytecodec.c"
        __label__ = 55; break; //@line 349 "multibytecodec.c"
      case 48: // $errorexit
        var $_pr2=$retobj;
        var $310=($_pr2)!=0; //@line 352 "multibytecodec.c"
        if ($310) { __label__ = 49; break; } else { __label__ = 51; break; } //@line 352 "multibytecodec.c"
      case 49: // $bb49
        var $311=$retobj; //@line 352 "multibytecodec.c"
        var $312=$311; //@line 352 "multibytecodec.c"
        var $313=HEAP[$312]; //@line 352 "multibytecodec.c"
        var $314=($313) - 1; //@line 352 "multibytecodec.c"
        var $315=$retobj; //@line 352 "multibytecodec.c"
        var $316=$315; //@line 352 "multibytecodec.c"
        HEAP[$316]=$314; //@line 352 "multibytecodec.c"
        var $317=$retobj; //@line 352 "multibytecodec.c"
        var $318=$317; //@line 352 "multibytecodec.c"
        var $319=HEAP[$318]; //@line 352 "multibytecodec.c"
        var $320=($319)==0; //@line 352 "multibytecodec.c"
        if ($320) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 352 "multibytecodec.c"
      case 50: // $bb50
        var $321=$retobj; //@line 352 "multibytecodec.c"
        var $322=$321+4; //@line 352 "multibytecodec.c"
        var $323=HEAP[$322]; //@line 352 "multibytecodec.c"
        var $324=$323+24; //@line 352 "multibytecodec.c"
        var $325=HEAP[$324]; //@line 352 "multibytecodec.c"
        var $326=$retobj; //@line 352 "multibytecodec.c"
        FUNCTION_TABLE[$325]($326); //@line 352 "multibytecodec.c"
        __label__ = 51; break; //@line 352 "multibytecodec.c"
      case 51: // $bb51
        var $327=$retstr; //@line 353 "multibytecodec.c"
        var $328=($327)!=0; //@line 353 "multibytecodec.c"
        if ($328) { __label__ = 52; break; } else { __label__ = 54; break; } //@line 353 "multibytecodec.c"
      case 52: // $bb52
        var $329=$retstr; //@line 353 "multibytecodec.c"
        var $330=$329; //@line 353 "multibytecodec.c"
        var $331=HEAP[$330]; //@line 353 "multibytecodec.c"
        var $332=($331) - 1; //@line 353 "multibytecodec.c"
        var $333=$retstr; //@line 353 "multibytecodec.c"
        var $334=$333; //@line 353 "multibytecodec.c"
        HEAP[$334]=$332; //@line 353 "multibytecodec.c"
        var $335=$retstr; //@line 353 "multibytecodec.c"
        var $336=$335; //@line 353 "multibytecodec.c"
        var $337=HEAP[$336]; //@line 353 "multibytecodec.c"
        var $338=($337)==0; //@line 353 "multibytecodec.c"
        if ($338) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 353 "multibytecodec.c"
      case 53: // $bb53
        var $339=$retstr; //@line 353 "multibytecodec.c"
        var $340=$339+4; //@line 353 "multibytecodec.c"
        var $341=HEAP[$340]; //@line 353 "multibytecodec.c"
        var $342=$341+24; //@line 353 "multibytecodec.c"
        var $343=HEAP[$342]; //@line 353 "multibytecodec.c"
        var $344=$retstr; //@line 353 "multibytecodec.c"
        FUNCTION_TABLE[$343]($344); //@line 353 "multibytecodec.c"
        __label__ = 54; break; //@line 353 "multibytecodec.c"
      case 54: // $bb54
        $0=-1; //@line 354 "multibytecodec.c"
        __label__ = 55; break; //@line 354 "multibytecodec.c"
      case 55: // $bb55
        var $345=$0; //@line 238 "multibytecodec.c"
        $retval=$345; //@line 238 "multibytecodec.c"
        var $retval56=$retval; //@line 238 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval56; //@line 238 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _multibytecodec_decerror($codec, $state, $buf, $errors, $e) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $codec_addr;
        var $state_addr;
        var $buf_addr;
        var $errors_addr;
        var $e_addr;
        var $retval;
        var $0;
        var $retobj;
        var $retuni;
        var $retunisize;
        var $newpos;
        var $reason;
        var $esize;
        var $start;
        var $end;
        $codec_addr=$codec;
        $state_addr=$state;
        $buf_addr=$buf;
        $errors_addr=$errors;
        $e_addr=$e;
        $retobj=0; //@line 363 "multibytecodec.c"
        $retuni=0; //@line 363 "multibytecodec.c"
        var $1=$e_addr; //@line 368 "multibytecodec.c"
        var $2=($1) > 0; //@line 368 "multibytecodec.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 368 "multibytecodec.c"
      case 1: // $bb
        $reason=__str11; //@line 369 "multibytecodec.c"
        var $3=$e_addr; //@line 370 "multibytecodec.c"
        $esize=$3; //@line 370 "multibytecodec.c"
        __label__ = 8; break; //@line 370 "multibytecodec.c"
      case 2: // $bb1
        var $4=$e_addr; //@line 373 "multibytecodec.c"
        if ($4 == -3) {
          __label__ = 6; break;
        }
        else if ($4 == -2) {
          __label__ = 5; break;
        }
        else if ($4 == -1) {
          __label__ = 3; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 3: // $bb2
        var $5=$buf_addr; //@line 375 "multibytecodec.c"
        var $6=_expand_decodebuffer($5, -1); //@line 375 "multibytecodec.c"
        var $7=($6)==-1; //@line 375 "multibytecodec.c"
        if ($7) { __label__ = 43; break; } else { __label__ = 4; break; } //@line 375 "multibytecodec.c"
      case 4: // $bb3
        $0=0; //@line 376 "multibytecodec.c"
        __label__ = 47; break; //@line 376 "multibytecodec.c"
      case 5: // $bb4
        $reason=__str12; //@line 378 "multibytecodec.c"
        var $8=$buf_addr; //@line 379 "multibytecodec.c"
        var $9=$8+8; //@line 379 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 379 "multibytecodec.c"
        var $11=($10); //@line 379 "multibytecodec.c"
        var $12=$buf_addr; //@line 379 "multibytecodec.c"
        var $13=$12; //@line 379 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 379 "multibytecodec.c"
        var $15=($14); //@line 379 "multibytecodec.c"
        var $16=($11) - ($15); //@line 379 "multibytecodec.c"
        $esize=$16; //@line 379 "multibytecodec.c"
        __label__ = 8; break; //@line 379 "multibytecodec.c"
      case 6: // $bb5
        var $17=HEAP[_PyExc_RuntimeError]; //@line 382 "multibytecodec.c"
        _PyErr_SetString($17, __str13); //@line 382 "multibytecodec.c"
        $0=-1; //@line 384 "multibytecodec.c"
        __label__ = 47; break; //@line 384 "multibytecodec.c"
      case 7: // $bb6
        var $18=HEAP[_PyExc_RuntimeError]; //@line 386 "multibytecodec.c"
        _PyErr_SetString($18, __str14); //@line 386 "multibytecodec.c"
        $0=-1; //@line 388 "multibytecodec.c"
        __label__ = 47; break; //@line 388 "multibytecodec.c"
      case 8: // $bb7
        var $19=$errors_addr; //@line 392 "multibytecodec.c"
        var $20=($19)==3; //@line 392 "multibytecodec.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 392 "multibytecodec.c"
      case 9: // $bb8
        var $21=$buf_addr; //@line 393 "multibytecodec.c"
        var $22=$21+12; //@line 393 "multibytecodec.c"
        var $23=HEAP[$22]; //@line 393 "multibytecodec.c"
        var $24=$23+2; //@line 393 "multibytecodec.c"
        var $25=$buf_addr; //@line 393 "multibytecodec.c"
        var $26=$25+16; //@line 393 "multibytecodec.c"
        var $27=HEAP[$26]; //@line 393 "multibytecodec.c"
        var $28=($24) > ($27); //@line 393 "multibytecodec.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 393 "multibytecodec.c"
      case 10: // $bb9
        var $29=$buf_addr; //@line 393 "multibytecodec.c"
        var $30=_expand_decodebuffer($29, 1); //@line 393 "multibytecodec.c"
        var $31=($30)==-1; //@line 393 "multibytecodec.c"
        if ($31) { __label__ = 43; break; } else { __label__ = 11; break; } //@line 393 "multibytecodec.c"
      case 11: // $bb10
        var $32=$buf_addr; //@line 394 "multibytecodec.c"
        var $33=$32+12; //@line 394 "multibytecodec.c"
        var $34=HEAP[$33]; //@line 394 "multibytecodec.c"
        HEAP[$34]=-3; //@line 394 "multibytecodec.c"
        var $35=$34+2; //@line 394 "multibytecodec.c"
        var $36=$buf_addr; //@line 394 "multibytecodec.c"
        var $37=$36+12; //@line 394 "multibytecodec.c"
        HEAP[$37]=$35; //@line 394 "multibytecodec.c"
        __label__ = 12; break; //@line 394 "multibytecodec.c"
      case 12: // $bb11
        var $38=$errors_addr; //@line 396 "multibytecodec.c"
        var $39=($38)==2; //@line 396 "multibytecodec.c"
        var $40=$errors_addr; //@line 396 "multibytecodec.c"
        var $41=($40)==3; //@line 396 "multibytecodec.c"
        var $or_cond=($39) | ($41);
        var $42=$buf_addr; //@line 397 "multibytecodec.c"
        var $43=$42; //@line 397 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 397 "multibytecodec.c"
        if ($or_cond) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 396 "multibytecodec.c"
      case 13: // $bb13
        var $45=$esize; //@line 397 "multibytecodec.c"
        var $46=$44+$45; //@line 397 "multibytecodec.c"
        var $47=$buf_addr; //@line 397 "multibytecodec.c"
        var $48=$47; //@line 397 "multibytecodec.c"
        HEAP[$48]=$46; //@line 397 "multibytecodec.c"
        $0=0; //@line 398 "multibytecodec.c"
        __label__ = 47; break; //@line 398 "multibytecodec.c"
      case 14: // $bb14
        var $49=($44); //@line 401 "multibytecodec.c"
        var $50=$buf_addr; //@line 401 "multibytecodec.c"
        var $51=$50+4; //@line 401 "multibytecodec.c"
        var $52=HEAP[$51]; //@line 401 "multibytecodec.c"
        var $53=($52); //@line 401 "multibytecodec.c"
        var $54=($49) - ($53); //@line 401 "multibytecodec.c"
        $start=$54; //@line 401 "multibytecodec.c"
        var $55=$start; //@line 402 "multibytecodec.c"
        var $56=$esize; //@line 402 "multibytecodec.c"
        var $57=($56) + ($55); //@line 402 "multibytecodec.c"
        $end=$57; //@line 402 "multibytecodec.c"
        var $58=$buf_addr; //@line 405 "multibytecodec.c"
        var $59=$58+20; //@line 405 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 405 "multibytecodec.c"
        var $61=($60)==0; //@line 405 "multibytecodec.c"
        var $62=$buf_addr; //@line 406 "multibytecodec.c"
        if ($61) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 405 "multibytecodec.c"
      case 15: // $bb15
        var $63=$62+8; //@line 406 "multibytecodec.c"
        var $64=HEAP[$63]; //@line 406 "multibytecodec.c"
        var $65=($64); //@line 406 "multibytecodec.c"
        var $66=$buf_addr; //@line 406 "multibytecodec.c"
        var $67=$66+4; //@line 406 "multibytecodec.c"
        var $68=HEAP[$67]; //@line 406 "multibytecodec.c"
        var $69=($68); //@line 406 "multibytecodec.c"
        var $70=($65) - ($69); //@line 406 "multibytecodec.c"
        var $71=$buf_addr; //@line 406 "multibytecodec.c"
        var $72=$71+4; //@line 406 "multibytecodec.c"
        var $73=HEAP[$72]; //@line 406 "multibytecodec.c"
        var $74=$codec_addr; //@line 406 "multibytecodec.c"
        var $75=$74; //@line 406 "multibytecodec.c"
        var $76=HEAP[$75]; //@line 406 "multibytecodec.c"
        var $77=$start; //@line 406 "multibytecodec.c"
        var $78=$end; //@line 406 "multibytecodec.c"
        var $79=$reason; //@line 406 "multibytecodec.c"
        var $80=_PyUnicodeDecodeError_Create($76, $73, $70, $77, $78, $79); //@line 406 "multibytecodec.c"
        var $81=$buf_addr; //@line 406 "multibytecodec.c"
        var $82=$81+20; //@line 406 "multibytecodec.c"
        HEAP[$82]=$80; //@line 406 "multibytecodec.c"
        var $83=$buf_addr; //@line 410 "multibytecodec.c"
        var $84=$83+20; //@line 410 "multibytecodec.c"
        var $85=HEAP[$84]; //@line 410 "multibytecodec.c"
        var $86=($85)==0; //@line 410 "multibytecodec.c"
        if ($86) { __label__ = 43; break; } else { __label__ = 19; break; } //@line 410 "multibytecodec.c"
      case 16: // $bb17
        var $87=$62+20; //@line 414 "multibytecodec.c"
        var $88=HEAP[$87]; //@line 414 "multibytecodec.c"
        var $89=$start; //@line 414 "multibytecodec.c"
        var $90=_PyUnicodeDecodeError_SetStart($88, $89); //@line 414 "multibytecodec.c"
        var $91=($90)!=0; //@line 414 "multibytecodec.c"
        if ($91) { __label__ = 43; break; } else { __label__ = 17; break; } //@line 414 "multibytecodec.c"
      case 17: // $bb18
        var $92=$buf_addr; //@line 414 "multibytecodec.c"
        var $93=$92+20; //@line 414 "multibytecodec.c"
        var $94=HEAP[$93]; //@line 414 "multibytecodec.c"
        var $95=$end; //@line 414 "multibytecodec.c"
        var $96=_PyUnicodeDecodeError_SetEnd($94, $95); //@line 414 "multibytecodec.c"
        var $97=($96)!=0; //@line 414 "multibytecodec.c"
        if ($97) { __label__ = 43; break; } else { __label__ = 18; break; } //@line 414 "multibytecodec.c"
      case 18: // $bb19
        var $98=$buf_addr; //@line 414 "multibytecodec.c"
        var $99=$98+20; //@line 414 "multibytecodec.c"
        var $100=HEAP[$99]; //@line 414 "multibytecodec.c"
        var $101=$reason; //@line 414 "multibytecodec.c"
        var $102=_PyUnicodeDecodeError_SetReason($100, $101); //@line 414 "multibytecodec.c"
        var $103=($102)!=0; //@line 414 "multibytecodec.c"
        if ($103) { __label__ = 43; break; } else { __label__ = 19; break; } //@line 414 "multibytecodec.c"
      case 19: // $bb20
        var $104=$errors_addr; //@line 419 "multibytecodec.c"
        var $105=($104)==1; //@line 419 "multibytecodec.c"
        var $106=$buf_addr; //@line 420 "multibytecodec.c"
        var $107=$106+20; //@line 420 "multibytecodec.c"
        var $108=HEAP[$107]; //@line 420 "multibytecodec.c"
        if ($105) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 419 "multibytecodec.c"
      case 20: // $bb21
        var $109=_PyCodec_StrictErrors($108); //@line 420 "multibytecodec.c"
        __label__ = 43; break; //@line 420 "multibytecodec.c"
      case 21: // $bb22
        var $110=$errors_addr; //@line 424 "multibytecodec.c"
        var $111=_call_error_callback($110, $108); //@line 424 "multibytecodec.c"
        $retobj=$111; //@line 424 "multibytecodec.c"
        var $112=$retobj; //@line 425 "multibytecodec.c"
        var $113=($112)==0; //@line 425 "multibytecodec.c"
        if ($113) { __label__ = 46; break; } else { __label__ = 22; break; } //@line 425 "multibytecodec.c"
      case 22: // $bb23
        var $114=$retobj; //@line 428 "multibytecodec.c"
        var $115=$114+4; //@line 428 "multibytecodec.c"
        var $116=HEAP[$115]; //@line 428 "multibytecodec.c"
        var $117=$116+84; //@line 428 "multibytecodec.c"
        var $118=HEAP[$117]; //@line 428 "multibytecodec.c"
        var $119=($118) & 67108864; //@line 428 "multibytecodec.c"
        var $120=($119)==0; //@line 428 "multibytecodec.c"
        if ($120) { __label__ = 27; break; } else { __label__ = 23; break; } //@line 428 "multibytecodec.c"
      case 23: // $bb24
        var $121=$retobj; //@line 428 "multibytecodec.c"
        var $122=$121; //@line 428 "multibytecodec.c"
        var $123=$122+8; //@line 428 "multibytecodec.c"
        var $124=HEAP[$123]; //@line 428 "multibytecodec.c"
        var $125=($124)!=2; //@line 428 "multibytecodec.c"
        if ($125) { __label__ = 27; break; } else { __label__ = 24; break; } //@line 428 "multibytecodec.c"
      case 24: // $bb25
        var $126=$retobj; //@line 428 "multibytecodec.c"
        var $127=$126; //@line 428 "multibytecodec.c"
        var $128=$127+12; //@line 428 "multibytecodec.c"
        var $129=$128; //@line 428 "multibytecodec.c"
        var $130=HEAP[$129]; //@line 428 "multibytecodec.c"
        $retuni=$130; //@line 428 "multibytecodec.c"
        var $131=$retuni; //@line 428 "multibytecodec.c"
        var $132=$131+4; //@line 428 "multibytecodec.c"
        var $133=HEAP[$132]; //@line 428 "multibytecodec.c"
        var $134=$133+84; //@line 428 "multibytecodec.c"
        var $135=HEAP[$134]; //@line 428 "multibytecodec.c"
        var $136=($135) & 268435456; //@line 428 "multibytecodec.c"
        var $137=($136)==0; //@line 428 "multibytecodec.c"
        if ($137) { __label__ = 27; break; } else { __label__ = 25; break; } //@line 428 "multibytecodec.c"
      case 25: // $bb26
        var $138=$retobj; //@line 428 "multibytecodec.c"
        var $139=$138; //@line 428 "multibytecodec.c"
        var $140=$139+12; //@line 428 "multibytecodec.c"
        var $141=$140+4; //@line 428 "multibytecodec.c"
        var $142=HEAP[$141]; //@line 428 "multibytecodec.c"
        var $143=$142+4; //@line 428 "multibytecodec.c"
        var $144=HEAP[$143]; //@line 428 "multibytecodec.c"
        var $145=$144+84; //@line 428 "multibytecodec.c"
        var $146=HEAP[$145]; //@line 428 "multibytecodec.c"
        var $147=($146) & 8388608; //@line 428 "multibytecodec.c"
        var $148=($147)!=0; //@line 428 "multibytecodec.c"
        if ($148) { __label__ = 28; break; } else { __label__ = 26; break; } //@line 428 "multibytecodec.c"
      case 26: // $bb27
        var $149=$retobj; //@line 428 "multibytecodec.c"
        var $150=$149; //@line 428 "multibytecodec.c"
        var $151=$150+12; //@line 428 "multibytecodec.c"
        var $152=$151+4; //@line 428 "multibytecodec.c"
        var $153=HEAP[$152]; //@line 428 "multibytecodec.c"
        var $154=$153+4; //@line 428 "multibytecodec.c"
        var $155=HEAP[$154]; //@line 428 "multibytecodec.c"
        var $156=$155+84; //@line 428 "multibytecodec.c"
        var $157=HEAP[$156]; //@line 428 "multibytecodec.c"
        var $158=($157) & 16777216; //@line 428 "multibytecodec.c"
        var $159=($158)==0; //@line 428 "multibytecodec.c"
        if ($159) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 428 "multibytecodec.c"
      case 27: // $bb28
        var $160=HEAP[_PyExc_TypeError]; //@line 432 "multibytecodec.c"
        _PyErr_SetString($160, __str17); //@line 432 "multibytecodec.c"
        __label__ = 43; break; //@line 432 "multibytecodec.c"
      case 28: // $bb29
        var $161=$retuni; //@line 438 "multibytecodec.c"
        var $162=$161; //@line 438 "multibytecodec.c"
        var $163=$162+8; //@line 438 "multibytecodec.c"
        var $164=HEAP[$163]; //@line 438 "multibytecodec.c"
        $retunisize=$164; //@line 438 "multibytecodec.c"
        var $165=($164) > 0; //@line 439 "multibytecodec.c"
        if ($165) { __label__ = 29; break; } else { __label__ = 33; break; } //@line 439 "multibytecodec.c"
      case 29: // $bb30
        var $166=$retunisize; //@line 440 "multibytecodec.c"
        var $167=($166) <= 0; //@line 440 "multibytecodec.c"
        if ($167) { __label__ = 31; break; } else { __label__ = 30; break; } //@line 440 "multibytecodec.c"
      case 30: // $bb31
        var $168=$buf_addr; //@line 440 "multibytecodec.c"
        var $169=$168+12; //@line 440 "multibytecodec.c"
        var $170=HEAP[$169]; //@line 440 "multibytecodec.c"
        var $171=$retunisize; //@line 440 "multibytecodec.c"
        var $172=$170+2*$171; //@line 440 "multibytecodec.c"
        var $173=$buf_addr; //@line 440 "multibytecodec.c"
        var $174=$173+16; //@line 440 "multibytecodec.c"
        var $175=HEAP[$174]; //@line 440 "multibytecodec.c"
        var $176=($172) > ($175); //@line 440 "multibytecodec.c"
        if ($176) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 440 "multibytecodec.c"
      case 31: // $bb32
        var $177=$buf_addr; //@line 440 "multibytecodec.c"
        var $178=$retunisize; //@line 440 "multibytecodec.c"
        var $179=_expand_decodebuffer($177, $178); //@line 440 "multibytecodec.c"
        var $180=($179)==-1; //@line 440 "multibytecodec.c"
        if ($180) { __label__ = 43; break; } else { __label__ = 32; break; } //@line 440 "multibytecodec.c"
      case 32: // $bb33
        var $181=$retunisize; //@line 441 "multibytecodec.c"
        var $182=($181) * 2; //@line 441 "multibytecodec.c"
        var $183=$retuni; //@line 441 "multibytecodec.c"
        var $184=$183; //@line 441 "multibytecodec.c"
        var $185=$184+12; //@line 441 "multibytecodec.c"
        var $186=HEAP[$185]; //@line 441 "multibytecodec.c"
        var $187=$buf_addr; //@line 441 "multibytecodec.c"
        var $188=$187+12; //@line 441 "multibytecodec.c"
        var $189=HEAP[$188]; //@line 441 "multibytecodec.c"
        var $190=$189; //@line 441 "multibytecodec.c"
        var $191=$186; //@line 441 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($190, $191, $182, 1, 0); //@line 441 "multibytecodec.c"
        var $192=$buf_addr; //@line 443 "multibytecodec.c"
        var $193=$192+12; //@line 443 "multibytecodec.c"
        var $194=HEAP[$193]; //@line 443 "multibytecodec.c"
        var $195=$retunisize; //@line 443 "multibytecodec.c"
        var $196=$194+2*$195; //@line 443 "multibytecodec.c"
        var $197=$buf_addr; //@line 443 "multibytecodec.c"
        var $198=$197+12; //@line 443 "multibytecodec.c"
        HEAP[$198]=$196; //@line 443 "multibytecodec.c"
        __label__ = 33; break; //@line 443 "multibytecodec.c"
      case 33: // $bb34
        var $199=$retobj; //@line 446 "multibytecodec.c"
        var $200=$199; //@line 446 "multibytecodec.c"
        var $201=$200+12; //@line 446 "multibytecodec.c"
        var $202=$201+4; //@line 446 "multibytecodec.c"
        var $203=HEAP[$202]; //@line 446 "multibytecodec.c"
        var $204=_PyInt_AsSsize_t($203); //@line 446 "multibytecodec.c"
        $newpos=$204; //@line 446 "multibytecodec.c"
        var $205=($204) < 0; //@line 447 "multibytecodec.c"
        if ($205) { __label__ = 34; break; } else { __label__ = 38; break; } //@line 447 "multibytecodec.c"
      case 34: // $bb35
        var $206=_PyErr_Occurred(); //@line 447 "multibytecodec.c"
        var $207=($206)==0; //@line 447 "multibytecodec.c"
        if ($207) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 447 "multibytecodec.c"
      case 35: // $bb36
        var $208=$buf_addr; //@line 448 "multibytecodec.c"
        var $209=$208+8; //@line 448 "multibytecodec.c"
        var $210=HEAP[$209]; //@line 448 "multibytecodec.c"
        var $211=($210); //@line 448 "multibytecodec.c"
        var $212=$buf_addr; //@line 448 "multibytecodec.c"
        var $213=$212+4; //@line 448 "multibytecodec.c"
        var $214=HEAP[$213]; //@line 448 "multibytecodec.c"
        var $215=($214); //@line 448 "multibytecodec.c"
        var $216=($211) - ($215); //@line 448 "multibytecodec.c"
        var $217=$newpos; //@line 448 "multibytecodec.c"
        var $218=($216) + ($217); //@line 448 "multibytecodec.c"
        $newpos=$218; //@line 448 "multibytecodec.c"
        __lastLabel__ = 35; __label__ = 37; break; //@line 448 "multibytecodec.c"
      case 36: // $bb37thread_pre_split
        var $_pr=$newpos;
        __lastLabel__ = 36; __label__ = 37; break;
      case 37: // $bb37
        var $219=__lastLabel__ == 36 ? $_pr : ($218);
        var $220=($219) < 0; //@line 449 "multibytecodec.c"
        if ($220) { __label__ = 39; break; } else { __label__ = 38; break; } //@line 449 "multibytecodec.c"
      case 38: // $bb38
        var $221=$buf_addr; //@line 449 "multibytecodec.c"
        var $222=$221+4; //@line 449 "multibytecodec.c"
        var $223=HEAP[$222]; //@line 449 "multibytecodec.c"
        var $224=$newpos; //@line 449 "multibytecodec.c"
        var $225=$223+$224; //@line 449 "multibytecodec.c"
        var $226=$buf_addr; //@line 449 "multibytecodec.c"
        var $227=$226+8; //@line 449 "multibytecodec.c"
        var $228=HEAP[$227]; //@line 449 "multibytecodec.c"
        var $229=($225) > ($228); //@line 449 "multibytecodec.c"
        if ($229) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 449 "multibytecodec.c"
      case 39: // $bb39
        _PyErr_Clear(); //@line 450 "multibytecodec.c"
        var $230=HEAP[_PyExc_IndexError]; //@line 451 "multibytecodec.c"
        var $231=$newpos; //@line 451 "multibytecodec.c"
        var $232=_PyErr_Format($230, __str16, allocate([$231,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 451 "multibytecodec.c"
        __label__ = 43; break; //@line 451 "multibytecodec.c"
      case 40: // $bb40
        var $233=$buf_addr; //@line 456 "multibytecodec.c"
        var $234=$233+4; //@line 456 "multibytecodec.c"
        var $235=HEAP[$234]; //@line 456 "multibytecodec.c"
        var $236=$newpos; //@line 456 "multibytecodec.c"
        var $237=$235+$236; //@line 456 "multibytecodec.c"
        var $238=$buf_addr; //@line 456 "multibytecodec.c"
        var $239=$238; //@line 456 "multibytecodec.c"
        HEAP[$239]=$237; //@line 456 "multibytecodec.c"
        var $240=$retobj; //@line 457 "multibytecodec.c"
        var $241=$240; //@line 457 "multibytecodec.c"
        var $242=HEAP[$241]; //@line 457 "multibytecodec.c"
        var $243=($242) - 1; //@line 457 "multibytecodec.c"
        var $244=$retobj; //@line 457 "multibytecodec.c"
        var $245=$244; //@line 457 "multibytecodec.c"
        HEAP[$245]=$243; //@line 457 "multibytecodec.c"
        var $246=$retobj; //@line 457 "multibytecodec.c"
        var $247=$246; //@line 457 "multibytecodec.c"
        var $248=HEAP[$247]; //@line 457 "multibytecodec.c"
        var $249=($248)==0; //@line 457 "multibytecodec.c"
        if ($249) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 457 "multibytecodec.c"
      case 41: // $bb41
        var $250=$retobj; //@line 457 "multibytecodec.c"
        var $251=$250+4; //@line 457 "multibytecodec.c"
        var $252=HEAP[$251]; //@line 457 "multibytecodec.c"
        var $253=$252+24; //@line 457 "multibytecodec.c"
        var $254=HEAP[$253]; //@line 457 "multibytecodec.c"
        var $255=$retobj; //@line 457 "multibytecodec.c"
        FUNCTION_TABLE[$254]($255); //@line 457 "multibytecodec.c"
        __label__ = 42; break; //@line 457 "multibytecodec.c"
      case 42: // $bb42
        $0=0; //@line 458 "multibytecodec.c"
        __label__ = 47; break; //@line 458 "multibytecodec.c"
      case 43: // $errorexit
        var $_pr2=$retobj;
        var $256=($_pr2)!=0; //@line 461 "multibytecodec.c"
        if ($256) { __label__ = 44; break; } else { __label__ = 46; break; } //@line 461 "multibytecodec.c"
      case 44: // $bb43
        var $257=$retobj; //@line 461 "multibytecodec.c"
        var $258=$257; //@line 461 "multibytecodec.c"
        var $259=HEAP[$258]; //@line 461 "multibytecodec.c"
        var $260=($259) - 1; //@line 461 "multibytecodec.c"
        var $261=$retobj; //@line 461 "multibytecodec.c"
        var $262=$261; //@line 461 "multibytecodec.c"
        HEAP[$262]=$260; //@line 461 "multibytecodec.c"
        var $263=$retobj; //@line 461 "multibytecodec.c"
        var $264=$263; //@line 461 "multibytecodec.c"
        var $265=HEAP[$264]; //@line 461 "multibytecodec.c"
        var $266=($265)==0; //@line 461 "multibytecodec.c"
        if ($266) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 461 "multibytecodec.c"
      case 45: // $bb44
        var $267=$retobj; //@line 461 "multibytecodec.c"
        var $268=$267+4; //@line 461 "multibytecodec.c"
        var $269=HEAP[$268]; //@line 461 "multibytecodec.c"
        var $270=$269+24; //@line 461 "multibytecodec.c"
        var $271=HEAP[$270]; //@line 461 "multibytecodec.c"
        var $272=$retobj; //@line 461 "multibytecodec.c"
        FUNCTION_TABLE[$271]($272); //@line 461 "multibytecodec.c"
        __label__ = 46; break; //@line 461 "multibytecodec.c"
      case 46: // $bb45
        $0=-1; //@line 462 "multibytecodec.c"
        __label__ = 47; break; //@line 462 "multibytecodec.c"
      case 47: // $bb46
        var $273=$0; //@line 376 "multibytecodec.c"
        $retval=$273; //@line 376 "multibytecodec.c"
        var $retval47=$retval; //@line 376 "multibytecodec.c"
        ;
        return $retval47; //@line 376 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _multibytecodec_encode($codec, $state, $data, $datalen, $errors, $flags) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $codec_addr;
        var $state_addr;
        var $data_addr;
        var $datalen_addr;
        var $errors_addr;
        var $flags_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $finalsize;
        var $r;
        var $inleft;
        var $outleft;
        var $outleft15;
        $codec_addr=$codec;
        $state_addr=$state;
        $data_addr=$data;
        $datalen_addr=$datalen;
        $errors_addr=$errors;
        $flags_addr=$flags;
        $r=0; //@line 472 "multibytecodec.c"
        var $1=$datalen_addr; //@line 474 "multibytecodec.c"
        var $2=($1)==0; //@line 474 "multibytecodec.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 474 "multibytecodec.c"
      case 1: // $bb
        var $3=$flags_addr; //@line 474 "multibytecodec.c"
        var $4=($3) & 2; //@line 474 "multibytecodec.c"
        var $5=($4)==0; //@line 474 "multibytecodec.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 474 "multibytecodec.c"
      case 2: // $bb1
        var $6=_PyString_FromString(__str18); //@line 475 "multibytecodec.c"
        $0=$6; //@line 475 "multibytecodec.c"
        __label__ = 31; break; //@line 475 "multibytecodec.c"
      case 3: // $bb2
        var $7=$buf+20; //@line 477 "multibytecodec.c"
        HEAP[$7]=0; //@line 477 "multibytecodec.c"
        var $8=$data_addr; //@line 478 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 478 "multibytecodec.c"
        var $10=$buf+4; //@line 478 "multibytecodec.c"
        HEAP[$10]=$9; //@line 478 "multibytecodec.c"
        var $11=$buf+4; //@line 478 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 478 "multibytecodec.c"
        var $13=$buf; //@line 478 "multibytecodec.c"
        HEAP[$13]=$12; //@line 478 "multibytecodec.c"
        var $14=$buf+4; //@line 479 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 479 "multibytecodec.c"
        var $16=$datalen_addr; //@line 479 "multibytecodec.c"
        var $17=$15+2*$16; //@line 479 "multibytecodec.c"
        var $18=$buf+8; //@line 479 "multibytecodec.c"
        HEAP[$18]=$17; //@line 479 "multibytecodec.c"
        var $19=$datalen_addr; //@line 481 "multibytecodec.c"
        var $20=($19) > 1073741815; //@line 481 "multibytecodec.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 481 "multibytecodec.c"
      case 4: // $bb3
        var $21=_PyErr_NoMemory(); //@line 482 "multibytecodec.c"
        __label__ = 24; break; //@line 482 "multibytecodec.c"
      case 5: // $bb4
        var $22=$datalen_addr; //@line 486 "multibytecodec.c"
        var $23=($22) * 2; //@line 486 "multibytecodec.c"
        var $24=($23) + 16; //@line 486 "multibytecodec.c"
        var $25=_PyString_FromStringAndSize(0, $24); //@line 486 "multibytecodec.c"
        var $26=$buf+24; //@line 486 "multibytecodec.c"
        HEAP[$26]=$25; //@line 486 "multibytecodec.c"
        var $27=$buf+24; //@line 487 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 487 "multibytecodec.c"
        var $29=($28)==0; //@line 487 "multibytecodec.c"
        if ($29) { __label__ = 24; break; } else { __label__ = 6; break; } //@line 487 "multibytecodec.c"
      case 6: // $bb5
        var $30=$buf+24; //@line 489 "multibytecodec.c"
        var $31=HEAP[$30]; //@line 489 "multibytecodec.c"
        var $32=$31; //@line 489 "multibytecodec.c"
        var $33=$32+20; //@line 489 "multibytecodec.c"
        var $34=$33; //@line 489 "multibytecodec.c"
        var $35=$buf+12; //@line 489 "multibytecodec.c"
        HEAP[$35]=$34; //@line 489 "multibytecodec.c"
        var $36=$buf+12; //@line 490 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 490 "multibytecodec.c"
        var $38=$buf+24; //@line 490 "multibytecodec.c"
        var $39=HEAP[$38]; //@line 490 "multibytecodec.c"
        var $40=$39; //@line 490 "multibytecodec.c"
        var $41=$40+8; //@line 490 "multibytecodec.c"
        var $42=HEAP[$41]; //@line 490 "multibytecodec.c"
        var $43=$37+$42; //@line 490 "multibytecodec.c"
        var $44=$buf+16; //@line 490 "multibytecodec.c"
        HEAP[$44]=$43; //@line 490 "multibytecodec.c"
        var $45=$buf; //@line 492 "multibytecodec.c"
        var $46=$buf+8; //@line 492 "multibytecodec.c"
        var $47=$buf+8; //@line 497 "multibytecodec.c"
        var $48=$buf; //@line 497 "multibytecodec.c"
        var $49=$buf+16; //@line 498 "multibytecodec.c"
        var $50=$buf+12; //@line 498 "multibytecodec.c"
        var $51=$buf; //@line 499 "multibytecodec.c"
        var $52=$buf+12; //@line 499 "multibytecodec.c"
        __label__ = 12; break; //@line 490 "multibytecodec.c"
      case 7: // $bb6
        var $53=HEAP[$47]; //@line 497 "multibytecodec.c"
        var $54=($53); //@line 497 "multibytecodec.c"
        var $55=HEAP[$48]; //@line 497 "multibytecodec.c"
        var $56=($55); //@line 497 "multibytecodec.c"
        var $57=($54) - ($56); //@line 497 "multibytecodec.c"
        var $58=((($57)/2)|0); //@line 497 "multibytecodec.c"
        $inleft=$58; //@line 497 "multibytecodec.c"
        var $59=HEAP[$49]; //@line 498 "multibytecodec.c"
        var $60=($59); //@line 498 "multibytecodec.c"
        var $61=HEAP[$50]; //@line 498 "multibytecodec.c"
        var $62=($61); //@line 498 "multibytecodec.c"
        var $63=($60) - ($62); //@line 498 "multibytecodec.c"
        $outleft=$63; //@line 498 "multibytecodec.c"
        var $64=$codec_addr; //@line 499 "multibytecodec.c"
        var $65=$64+12; //@line 499 "multibytecodec.c"
        var $66=HEAP[$65]; //@line 499 "multibytecodec.c"
        var $67=$codec_addr; //@line 499 "multibytecodec.c"
        var $68=$67+4; //@line 499 "multibytecodec.c"
        var $69=HEAP[$68]; //@line 499 "multibytecodec.c"
        var $70=$state_addr; //@line 499 "multibytecodec.c"
        var $71=$inleft; //@line 499 "multibytecodec.c"
        var $72=$outleft; //@line 499 "multibytecodec.c"
        var $73=$flags_addr; //@line 499 "multibytecodec.c"
        var $74=FUNCTION_TABLE[$66]($70, $69, $51, $71, $52, $72, $73); //@line 499 "multibytecodec.c"
        $r=$74; //@line 499 "multibytecodec.c"
        var $75=$r; //@line 501 "multibytecodec.c"
        var $76=($75)==0; //@line 501 "multibytecodec.c"
        if ($76) { __label__ = 13; break; } else { __label__ = 8; break; } //@line 501 "multibytecodec.c"
      case 8: // $bb7
        var $77=$r; //@line 501 "multibytecodec.c"
        var $78=($77)!=-2; //@line 501 "multibytecodec.c"
        if ($78) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 501 "multibytecodec.c"
      case 9: // $bb8
        var $79=$flags_addr; //@line 501 "multibytecodec.c"
        var $80=($79) & 1; //@line 501 "multibytecodec.c"
        var $81=($80)==0; //@line 501 "multibytecodec.c"
        if ($81) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 501 "multibytecodec.c"
      case 10: // $bb9
        var $82=$codec_addr; //@line 503 "multibytecodec.c"
        var $83=$state_addr; //@line 503 "multibytecodec.c"
        var $84=$errors_addr; //@line 503 "multibytecodec.c"
        var $85=$r; //@line 503 "multibytecodec.c"
        var $86=_multibytecodec_encerror($82, $83, $buf, $84, $85); //@line 503 "multibytecodec.c"
        var $87=($86)!=0; //@line 503 "multibytecodec.c"
        if ($87) { __label__ = 24; break; } else { __label__ = 11; break; } //@line 503 "multibytecodec.c"
      case 11: // $bb10
        var $88=$r; //@line 505 "multibytecodec.c"
        var $89=($88)==-2; //@line 505 "multibytecodec.c"
        if ($89) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 505 "multibytecodec.c"
      case 12: // $bb11
        var $90=HEAP[$45]; //@line 492 "multibytecodec.c"
        var $91=HEAP[$46]; //@line 492 "multibytecodec.c"
        var $92=($90) < ($91); //@line 492 "multibytecodec.c"
        if ($92) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 492 "multibytecodec.c"
      case 13: // $bb12
        var $93=$codec_addr; //@line 509 "multibytecodec.c"
        var $94=$93+20; //@line 509 "multibytecodec.c"
        var $95=HEAP[$94]; //@line 509 "multibytecodec.c"
        var $96=($95)!=0; //@line 509 "multibytecodec.c"
        if ($96) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 509 "multibytecodec.c"
      case 14: // $bb13
        var $97=$flags_addr; //@line 509 "multibytecodec.c"
        var $98=($97) & 2; //@line 509 "multibytecodec.c"
        var $99=($98)!=0; //@line 509 "multibytecodec.c"
        if ($99) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 509 "multibytecodec.c"
      case 15: // $bb14_preheader
        var $100=$buf+16; //@line 513 "multibytecodec.c"
        var $101=$buf+12; //@line 513 "multibytecodec.c"
        var $102=$buf+12; //@line 514 "multibytecodec.c"
        __label__ = 16; break;
      case 16: // $bb14
        var $103=HEAP[$100]; //@line 513 "multibytecodec.c"
        var $104=($103); //@line 513 "multibytecodec.c"
        var $105=HEAP[$101]; //@line 513 "multibytecodec.c"
        var $106=($105); //@line 513 "multibytecodec.c"
        var $107=($104) - ($106); //@line 513 "multibytecodec.c"
        $outleft15=$107; //@line 513 "multibytecodec.c"
        var $108=$codec_addr; //@line 514 "multibytecodec.c"
        var $109=$108+20; //@line 514 "multibytecodec.c"
        var $110=HEAP[$109]; //@line 514 "multibytecodec.c"
        var $111=$codec_addr; //@line 514 "multibytecodec.c"
        var $112=$111+4; //@line 514 "multibytecodec.c"
        var $113=HEAP[$112]; //@line 514 "multibytecodec.c"
        var $114=$state_addr; //@line 514 "multibytecodec.c"
        var $115=$outleft15; //@line 514 "multibytecodec.c"
        var $116=FUNCTION_TABLE[$110]($114, $113, $102, $115); //@line 514 "multibytecodec.c"
        $r=$116; //@line 514 "multibytecodec.c"
        var $117=($116)==0; //@line 516 "multibytecodec.c"
        if ($117) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 516 "multibytecodec.c"
      case 17: // $bb16
        var $118=$codec_addr; //@line 518 "multibytecodec.c"
        var $119=$state_addr; //@line 518 "multibytecodec.c"
        var $120=$errors_addr; //@line 518 "multibytecodec.c"
        var $121=$r; //@line 518 "multibytecodec.c"
        var $122=_multibytecodec_encerror($118, $119, $buf, $120, $121); //@line 518 "multibytecodec.c"
        var $123=($122)!=0; //@line 518 "multibytecodec.c"
        if ($123) { __label__ = 24; break; } else { __label__ = 16; break; } //@line 518 "multibytecodec.c"
      case 18: // $bb18
        var $124=$buf+12; //@line 523 "multibytecodec.c"
        var $125=HEAP[$124]; //@line 523 "multibytecodec.c"
        var $126=($125); //@line 523 "multibytecodec.c"
        var $127=$buf+24; //@line 523 "multibytecodec.c"
        var $128=HEAP[$127]; //@line 523 "multibytecodec.c"
        var $129=$128; //@line 523 "multibytecodec.c"
        var $130=$129+20; //@line 523 "multibytecodec.c"
        var $131=($130); //@line 523 "multibytecodec.c"
        var $132=($126) - ($131); //@line 523 "multibytecodec.c"
        $finalsize=$132; //@line 523 "multibytecodec.c"
        var $133=$buf+24; //@line 526 "multibytecodec.c"
        var $134=HEAP[$133]; //@line 526 "multibytecodec.c"
        var $135=$134; //@line 526 "multibytecodec.c"
        var $136=$135+8; //@line 526 "multibytecodec.c"
        var $137=HEAP[$136]; //@line 526 "multibytecodec.c"
        var $138=$finalsize; //@line 526 "multibytecodec.c"
        var $139=($137)!=($138); //@line 526 "multibytecodec.c"
        if ($139) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 526 "multibytecodec.c"
      case 19: // $bb19
        var $140=$buf+24; //@line 527 "multibytecodec.c"
        var $141=$finalsize; //@line 527 "multibytecodec.c"
        var $142=__PyString_Resize($140, $141); //@line 527 "multibytecodec.c"
        var $143=($142)==-1; //@line 527 "multibytecodec.c"
        if ($143) { __label__ = 24; break; } else { __label__ = 20; break; } //@line 527 "multibytecodec.c"
      case 20: // $bb20
        var $144=$buf; //@line 530 "multibytecodec.c"
        var $145=HEAP[$144]; //@line 530 "multibytecodec.c"
        var $146=$data_addr; //@line 530 "multibytecodec.c"
        HEAP[$146]=$145; //@line 530 "multibytecodec.c"
        var $147=$buf+20; //@line 531 "multibytecodec.c"
        var $148=HEAP[$147]; //@line 531 "multibytecodec.c"
        var $149=($148)!=0; //@line 531 "multibytecodec.c"
        if ($149) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 531 "multibytecodec.c"
      case 21: // $bb21
        var $150=$buf+20; //@line 531 "multibytecodec.c"
        var $151=HEAP[$150]; //@line 531 "multibytecodec.c"
        var $152=$151; //@line 531 "multibytecodec.c"
        var $153=HEAP[$152]; //@line 531 "multibytecodec.c"
        var $154=($153) - 1; //@line 531 "multibytecodec.c"
        var $155=$151; //@line 531 "multibytecodec.c"
        HEAP[$155]=$154; //@line 531 "multibytecodec.c"
        var $156=$151; //@line 531 "multibytecodec.c"
        var $157=HEAP[$156]; //@line 531 "multibytecodec.c"
        var $158=($157)==0; //@line 531 "multibytecodec.c"
        if ($158) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 531 "multibytecodec.c"
      case 22: // $bb22
        var $159=$buf+20; //@line 531 "multibytecodec.c"
        var $160=HEAP[$159]; //@line 531 "multibytecodec.c"
        var $161=$160+4; //@line 531 "multibytecodec.c"
        var $162=HEAP[$161]; //@line 531 "multibytecodec.c"
        var $163=$162+24; //@line 531 "multibytecodec.c"
        var $164=HEAP[$163]; //@line 531 "multibytecodec.c"
        var $165=$buf+20; //@line 531 "multibytecodec.c"
        var $166=HEAP[$165]; //@line 531 "multibytecodec.c"
        FUNCTION_TABLE[$164]($166); //@line 531 "multibytecodec.c"
        __label__ = 23; break; //@line 531 "multibytecodec.c"
      case 23: // $bb23
        var $167=$buf+24; //@line 532 "multibytecodec.c"
        var $168=HEAP[$167]; //@line 532 "multibytecodec.c"
        $0=$168; //@line 532 "multibytecodec.c"
        __label__ = 31; break; //@line 532 "multibytecodec.c"
      case 24: // $errorexit
        var $169=$buf+20; //@line 535 "multibytecodec.c"
        var $170=HEAP[$169]; //@line 535 "multibytecodec.c"
        var $171=($170)!=0; //@line 535 "multibytecodec.c"
        if ($171) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 535 "multibytecodec.c"
      case 25: // $bb24
        var $172=$buf+20; //@line 535 "multibytecodec.c"
        var $173=HEAP[$172]; //@line 535 "multibytecodec.c"
        var $174=$173; //@line 535 "multibytecodec.c"
        var $175=HEAP[$174]; //@line 535 "multibytecodec.c"
        var $176=($175) - 1; //@line 535 "multibytecodec.c"
        var $177=$173; //@line 535 "multibytecodec.c"
        HEAP[$177]=$176; //@line 535 "multibytecodec.c"
        var $178=$173; //@line 535 "multibytecodec.c"
        var $179=HEAP[$178]; //@line 535 "multibytecodec.c"
        var $180=($179)==0; //@line 535 "multibytecodec.c"
        if ($180) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 535 "multibytecodec.c"
      case 26: // $bb25
        var $181=$buf+20; //@line 535 "multibytecodec.c"
        var $182=HEAP[$181]; //@line 535 "multibytecodec.c"
        var $183=$182+4; //@line 535 "multibytecodec.c"
        var $184=HEAP[$183]; //@line 535 "multibytecodec.c"
        var $185=$184+24; //@line 535 "multibytecodec.c"
        var $186=HEAP[$185]; //@line 535 "multibytecodec.c"
        var $187=$buf+20; //@line 535 "multibytecodec.c"
        var $188=HEAP[$187]; //@line 535 "multibytecodec.c"
        FUNCTION_TABLE[$186]($188); //@line 535 "multibytecodec.c"
        __label__ = 27; break; //@line 535 "multibytecodec.c"
      case 27: // $bb26
        var $189=$buf+24; //@line 536 "multibytecodec.c"
        var $190=HEAP[$189]; //@line 536 "multibytecodec.c"
        var $191=($190)!=0; //@line 536 "multibytecodec.c"
        if ($191) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 536 "multibytecodec.c"
      case 28: // $bb27
        var $192=$buf+24; //@line 536 "multibytecodec.c"
        var $193=HEAP[$192]; //@line 536 "multibytecodec.c"
        var $194=$193; //@line 536 "multibytecodec.c"
        var $195=HEAP[$194]; //@line 536 "multibytecodec.c"
        var $196=($195) - 1; //@line 536 "multibytecodec.c"
        var $197=$193; //@line 536 "multibytecodec.c"
        HEAP[$197]=$196; //@line 536 "multibytecodec.c"
        var $198=$193; //@line 536 "multibytecodec.c"
        var $199=HEAP[$198]; //@line 536 "multibytecodec.c"
        var $200=($199)==0; //@line 536 "multibytecodec.c"
        if ($200) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 536 "multibytecodec.c"
      case 29: // $bb28
        var $201=$buf+24; //@line 536 "multibytecodec.c"
        var $202=HEAP[$201]; //@line 536 "multibytecodec.c"
        var $203=$202+4; //@line 536 "multibytecodec.c"
        var $204=HEAP[$203]; //@line 536 "multibytecodec.c"
        var $205=$204+24; //@line 536 "multibytecodec.c"
        var $206=HEAP[$205]; //@line 536 "multibytecodec.c"
        var $207=$buf+24; //@line 536 "multibytecodec.c"
        var $208=HEAP[$207]; //@line 536 "multibytecodec.c"
        FUNCTION_TABLE[$206]($208); //@line 536 "multibytecodec.c"
        __label__ = 30; break; //@line 536 "multibytecodec.c"
      case 30: // $bb29
        $0=0; //@line 537 "multibytecodec.c"
        __label__ = 31; break; //@line 537 "multibytecodec.c"
      case 31: // $bb30
        var $209=$0; //@line 475 "multibytecodec.c"
        $retval=$209; //@line 475 "multibytecodec.c"
        var $retval31=$retval; //@line 475 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval31; //@line 475 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _MultibyteCodec_Encode($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $state=__stackBase__;
        var $data=__stackBase__+8;
        var $errorcb;
        var $r;
        var $arg=__stackBase__+12;
        var $ucvt;
        var $errors=__stackBase__+16;
        var $datalen;
        $self_addr=$self;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        HEAP[$errors]=0; //@line 547 "multibytecodec.c"
        var $1=$args_addr; //@line 550 "multibytecodec.c"
        var $2=$kwargs_addr; //@line 550 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str19, _codeckwarglist, allocate([$arg,0,0,0,$errors,0,0,0], ["%struct.PyObject**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 550 "multibytecodec.c"
        var $4=($3)==0; //@line 550 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 550 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 552 "multibytecodec.c"
        __label__ = 34; break; //@line 552 "multibytecodec.c"
      case 2: // $bb1
        var $5=HEAP[$arg]; //@line 554 "multibytecodec.c"
        var $6=$5+4; //@line 554 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 554 "multibytecodec.c"
        var $8=$7+84; //@line 554 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 554 "multibytecodec.c"
        var $10=($9) & 268435456; //@line 554 "multibytecodec.c"
        var $11=($10)!=0; //@line 554 "multibytecodec.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 554 "multibytecodec.c"
      case 3: // $bb2
        $ucvt=0; //@line 555 "multibytecodec.c"
        __label__ = 10; break; //@line 555 "multibytecodec.c"
      case 4: // $bb3
        var $12=HEAP[$arg]; //@line 557 "multibytecodec.c"
        var $13=_PyObject_Unicode($12); //@line 557 "multibytecodec.c"
        $ucvt=$13; //@line 557 "multibytecodec.c"
        var $14=$ucvt; //@line 557 "multibytecodec.c"
        HEAP[$arg]=$14; //@line 557 "multibytecodec.c"
        var $15=HEAP[$arg]; //@line 558 "multibytecodec.c"
        var $16=($15)==0; //@line 558 "multibytecodec.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 558 "multibytecodec.c"
      case 5: // $bb4
        $0=0; //@line 559 "multibytecodec.c"
        __label__ = 34; break; //@line 559 "multibytecodec.c"
      case 6: // $bb5
        var $17=HEAP[$arg]; //@line 560 "multibytecodec.c"
        var $18=$17+4; //@line 560 "multibytecodec.c"
        var $19=HEAP[$18]; //@line 560 "multibytecodec.c"
        var $20=$19+84; //@line 560 "multibytecodec.c"
        var $21=HEAP[$20]; //@line 560 "multibytecodec.c"
        var $22=($21) & 268435456; //@line 560 "multibytecodec.c"
        var $23=($22)==0; //@line 560 "multibytecodec.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 560 "multibytecodec.c"
      case 7: // $bb6
        var $24=HEAP[_PyExc_TypeError]; //@line 561 "multibytecodec.c"
        _PyErr_SetString($24, __str20); //@line 561 "multibytecodec.c"
        var $25=$ucvt; //@line 563 "multibytecodec.c"
        var $26=$25; //@line 563 "multibytecodec.c"
        var $27=HEAP[$26]; //@line 563 "multibytecodec.c"
        var $28=($27) - 1; //@line 563 "multibytecodec.c"
        var $29=$ucvt; //@line 563 "multibytecodec.c"
        var $30=$29; //@line 563 "multibytecodec.c"
        HEAP[$30]=$28; //@line 563 "multibytecodec.c"
        var $31=$ucvt; //@line 563 "multibytecodec.c"
        var $32=$31; //@line 563 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 563 "multibytecodec.c"
        var $34=($33)==0; //@line 563 "multibytecodec.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 563 "multibytecodec.c"
      case 8: // $bb7
        var $35=$ucvt; //@line 563 "multibytecodec.c"
        var $36=$35+4; //@line 563 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 563 "multibytecodec.c"
        var $38=$37+24; //@line 563 "multibytecodec.c"
        var $39=HEAP[$38]; //@line 563 "multibytecodec.c"
        var $40=$ucvt; //@line 563 "multibytecodec.c"
        FUNCTION_TABLE[$39]($40); //@line 563 "multibytecodec.c"
        __label__ = 9; break; //@line 563 "multibytecodec.c"
      case 9: // $bb8
        $0=0; //@line 564 "multibytecodec.c"
        __label__ = 34; break; //@line 564 "multibytecodec.c"
      case 10: // $bb9
        var $41=HEAP[$arg]; //@line 568 "multibytecodec.c"
        var $42=$41; //@line 568 "multibytecodec.c"
        var $43=$42+12; //@line 568 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 568 "multibytecodec.c"
        HEAP[$data]=$44; //@line 568 "multibytecodec.c"
        var $45=HEAP[$arg]; //@line 569 "multibytecodec.c"
        var $46=$45; //@line 569 "multibytecodec.c"
        var $47=$46+8; //@line 569 "multibytecodec.c"
        var $48=HEAP[$47]; //@line 569 "multibytecodec.c"
        $datalen=$48; //@line 569 "multibytecodec.c"
        var $49=HEAP[$errors]; //@line 571 "multibytecodec.c"
        var $50=_internal_error_callback($49); //@line 571 "multibytecodec.c"
        $errorcb=$50; //@line 571 "multibytecodec.c"
        var $51=($50)==0; //@line 572 "multibytecodec.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 572 "multibytecodec.c"
      case 11: // $bb10
        var $52=$ucvt; //@line 573 "multibytecodec.c"
        var $53=($52)!=0; //@line 573 "multibytecodec.c"
        if ($53) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 573 "multibytecodec.c"
      case 12: // $bb11
        var $54=$ucvt; //@line 573 "multibytecodec.c"
        var $55=$54; //@line 573 "multibytecodec.c"
        var $56=HEAP[$55]; //@line 573 "multibytecodec.c"
        var $57=($56) - 1; //@line 573 "multibytecodec.c"
        var $58=$ucvt; //@line 573 "multibytecodec.c"
        var $59=$58; //@line 573 "multibytecodec.c"
        HEAP[$59]=$57; //@line 573 "multibytecodec.c"
        var $60=$ucvt; //@line 573 "multibytecodec.c"
        var $61=$60; //@line 573 "multibytecodec.c"
        var $62=HEAP[$61]; //@line 573 "multibytecodec.c"
        var $63=($62)==0; //@line 573 "multibytecodec.c"
        if ($63) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 573 "multibytecodec.c"
      case 13: // $bb12
        var $64=$ucvt; //@line 573 "multibytecodec.c"
        var $65=$64+4; //@line 573 "multibytecodec.c"
        var $66=HEAP[$65]; //@line 573 "multibytecodec.c"
        var $67=$66+24; //@line 573 "multibytecodec.c"
        var $68=HEAP[$67]; //@line 573 "multibytecodec.c"
        var $69=$ucvt; //@line 573 "multibytecodec.c"
        FUNCTION_TABLE[$68]($69); //@line 573 "multibytecodec.c"
        __label__ = 14; break; //@line 573 "multibytecodec.c"
      case 14: // $bb13
        $0=0; //@line 574 "multibytecodec.c"
        __label__ = 34; break; //@line 574 "multibytecodec.c"
      case 15: // $bb14
        var $70=$self_addr; //@line 577 "multibytecodec.c"
        var $71=$70+8; //@line 577 "multibytecodec.c"
        var $72=HEAP[$71]; //@line 577 "multibytecodec.c"
        var $73=$72+16; //@line 577 "multibytecodec.c"
        var $74=HEAP[$73]; //@line 577 "multibytecodec.c"
        var $75=($74)!=0; //@line 577 "multibytecodec.c"
        if ($75) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 577 "multibytecodec.c"
      case 16: // $bb15
        var $76=$self_addr; //@line 577 "multibytecodec.c"
        var $77=$76+8; //@line 577 "multibytecodec.c"
        var $78=HEAP[$77]; //@line 577 "multibytecodec.c"
        var $79=$78+16; //@line 577 "multibytecodec.c"
        var $80=HEAP[$79]; //@line 577 "multibytecodec.c"
        var $81=$self_addr; //@line 577 "multibytecodec.c"
        var $82=$81+8; //@line 577 "multibytecodec.c"
        var $83=HEAP[$82]; //@line 577 "multibytecodec.c"
        var $84=$83+4; //@line 577 "multibytecodec.c"
        var $85=HEAP[$84]; //@line 577 "multibytecodec.c"
        var $86=FUNCTION_TABLE[$80]($state, $85); //@line 577 "multibytecodec.c"
        var $87=($86)!=0; //@line 577 "multibytecodec.c"
        if ($87) { __label__ = 26; break; } else { __label__ = 17; break; } //@line 577 "multibytecodec.c"
      case 17: // $bb16
        var $88=$self_addr; //@line 580 "multibytecodec.c"
        var $89=$88+8; //@line 580 "multibytecodec.c"
        var $90=HEAP[$89]; //@line 580 "multibytecodec.c"
        var $91=$datalen; //@line 580 "multibytecodec.c"
        var $92=$errorcb; //@line 580 "multibytecodec.c"
        var $93=_multibytecodec_encode($90, $state, $data, $91, $92, 3); //@line 580 "multibytecodec.c"
        $r=$93; //@line 580 "multibytecodec.c"
        var $94=($93)==0; //@line 583 "multibytecodec.c"
        if ($94) { __label__ = 26; break; } else { __label__ = 18; break; } //@line 583 "multibytecodec.c"
      case 18: // $bb18
        var $95=$errorcb; //@line 586 "multibytecodec.c"
        var $96=($95)!=0; //@line 586 "multibytecodec.c"
        if ($96) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 586 "multibytecodec.c"
      case 19: // $bb19
        var $97=$errorcb; //@line 586 "multibytecodec.c"
        var $98=($97)==0; //@line 586 "multibytecodec.c"
        var $99=$errorcb; //@line 586 "multibytecodec.c"
        var $100=($99) > 3; //@line 586 "multibytecodec.c"
        var $or_cond=($98) | ($100);
        if ($or_cond) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 586 "multibytecodec.c"
      case 20: // $bb21
        var $101=$errorcb; //@line 586 "multibytecodec.c"
        var $102=$101; //@line 586 "multibytecodec.c"
        var $103=HEAP[$102]; //@line 586 "multibytecodec.c"
        var $104=($103) - 1; //@line 586 "multibytecodec.c"
        var $105=$errorcb; //@line 586 "multibytecodec.c"
        var $106=$105; //@line 586 "multibytecodec.c"
        HEAP[$106]=$104; //@line 586 "multibytecodec.c"
        var $107=$errorcb; //@line 586 "multibytecodec.c"
        var $108=$107; //@line 586 "multibytecodec.c"
        var $109=HEAP[$108]; //@line 586 "multibytecodec.c"
        var $110=($109)==0; //@line 586 "multibytecodec.c"
        if ($110) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 586 "multibytecodec.c"
      case 21: // $bb22
        var $111=$errorcb; //@line 586 "multibytecodec.c"
        var $112=$111+4; //@line 586 "multibytecodec.c"
        var $113=HEAP[$112]; //@line 586 "multibytecodec.c"
        var $114=$113+24; //@line 586 "multibytecodec.c"
        var $115=HEAP[$114]; //@line 586 "multibytecodec.c"
        var $116=$errorcb; //@line 586 "multibytecodec.c"
        FUNCTION_TABLE[$115]($116); //@line 586 "multibytecodec.c"
        __label__ = 22; break; //@line 586 "multibytecodec.c"
      case 22: // $bb23
        var $117=$ucvt; //@line 587 "multibytecodec.c"
        var $118=($117)!=0; //@line 587 "multibytecodec.c"
        if ($118) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 587 "multibytecodec.c"
      case 23: // $bb24
        var $119=$ucvt; //@line 587 "multibytecodec.c"
        var $120=$119; //@line 587 "multibytecodec.c"
        var $121=HEAP[$120]; //@line 587 "multibytecodec.c"
        var $122=($121) - 1; //@line 587 "multibytecodec.c"
        var $123=$ucvt; //@line 587 "multibytecodec.c"
        var $124=$123; //@line 587 "multibytecodec.c"
        HEAP[$124]=$122; //@line 587 "multibytecodec.c"
        var $125=$ucvt; //@line 587 "multibytecodec.c"
        var $126=$125; //@line 587 "multibytecodec.c"
        var $127=HEAP[$126]; //@line 587 "multibytecodec.c"
        var $128=($127)==0; //@line 587 "multibytecodec.c"
        if ($128) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 587 "multibytecodec.c"
      case 24: // $bb25
        var $129=$ucvt; //@line 587 "multibytecodec.c"
        var $130=$129+4; //@line 587 "multibytecodec.c"
        var $131=HEAP[$130]; //@line 587 "multibytecodec.c"
        var $132=$131+24; //@line 587 "multibytecodec.c"
        var $133=HEAP[$132]; //@line 587 "multibytecodec.c"
        var $134=$ucvt; //@line 587 "multibytecodec.c"
        FUNCTION_TABLE[$133]($134); //@line 587 "multibytecodec.c"
        __label__ = 25; break; //@line 587 "multibytecodec.c"
      case 25: // $bb26
        var $135=$r; //@line 588 "multibytecodec.c"
        var $136=$datalen; //@line 588 "multibytecodec.c"
        var $137=_make_tuple($135, $136); //@line 588 "multibytecodec.c"
        $0=$137; //@line 588 "multibytecodec.c"
        __label__ = 34; break; //@line 588 "multibytecodec.c"
      case 26: // $errorexit
        var $138=$errorcb; //@line 591 "multibytecodec.c"
        var $139=($138)!=0; //@line 591 "multibytecodec.c"
        if ($139) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 591 "multibytecodec.c"
      case 27: // $bb27
        var $140=$errorcb; //@line 591 "multibytecodec.c"
        var $141=($140)==0; //@line 591 "multibytecodec.c"
        var $142=$errorcb; //@line 591 "multibytecodec.c"
        var $143=($142) > 3; //@line 591 "multibytecodec.c"
        var $or_cond3=($141) | ($143);
        if ($or_cond3) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 591 "multibytecodec.c"
      case 28: // $bb29
        var $144=$errorcb; //@line 591 "multibytecodec.c"
        var $145=$144; //@line 591 "multibytecodec.c"
        var $146=HEAP[$145]; //@line 591 "multibytecodec.c"
        var $147=($146) - 1; //@line 591 "multibytecodec.c"
        var $148=$errorcb; //@line 591 "multibytecodec.c"
        var $149=$148; //@line 591 "multibytecodec.c"
        HEAP[$149]=$147; //@line 591 "multibytecodec.c"
        var $150=$errorcb; //@line 591 "multibytecodec.c"
        var $151=$150; //@line 591 "multibytecodec.c"
        var $152=HEAP[$151]; //@line 591 "multibytecodec.c"
        var $153=($152)==0; //@line 591 "multibytecodec.c"
        if ($153) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 591 "multibytecodec.c"
      case 29: // $bb30
        var $154=$errorcb; //@line 591 "multibytecodec.c"
        var $155=$154+4; //@line 591 "multibytecodec.c"
        var $156=HEAP[$155]; //@line 591 "multibytecodec.c"
        var $157=$156+24; //@line 591 "multibytecodec.c"
        var $158=HEAP[$157]; //@line 591 "multibytecodec.c"
        var $159=$errorcb; //@line 591 "multibytecodec.c"
        FUNCTION_TABLE[$158]($159); //@line 591 "multibytecodec.c"
        __label__ = 30; break; //@line 591 "multibytecodec.c"
      case 30: // $bb31
        var $160=$ucvt; //@line 592 "multibytecodec.c"
        var $161=($160)!=0; //@line 592 "multibytecodec.c"
        if ($161) { __label__ = 31; break; } else { __label__ = 33; break; } //@line 592 "multibytecodec.c"
      case 31: // $bb32
        var $162=$ucvt; //@line 592 "multibytecodec.c"
        var $163=$162; //@line 592 "multibytecodec.c"
        var $164=HEAP[$163]; //@line 592 "multibytecodec.c"
        var $165=($164) - 1; //@line 592 "multibytecodec.c"
        var $166=$ucvt; //@line 592 "multibytecodec.c"
        var $167=$166; //@line 592 "multibytecodec.c"
        HEAP[$167]=$165; //@line 592 "multibytecodec.c"
        var $168=$ucvt; //@line 592 "multibytecodec.c"
        var $169=$168; //@line 592 "multibytecodec.c"
        var $170=HEAP[$169]; //@line 592 "multibytecodec.c"
        var $171=($170)==0; //@line 592 "multibytecodec.c"
        if ($171) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 592 "multibytecodec.c"
      case 32: // $bb33
        var $172=$ucvt; //@line 592 "multibytecodec.c"
        var $173=$172+4; //@line 592 "multibytecodec.c"
        var $174=HEAP[$173]; //@line 592 "multibytecodec.c"
        var $175=$174+24; //@line 592 "multibytecodec.c"
        var $176=HEAP[$175]; //@line 592 "multibytecodec.c"
        var $177=$ucvt; //@line 592 "multibytecodec.c"
        FUNCTION_TABLE[$176]($177); //@line 592 "multibytecodec.c"
        __label__ = 33; break; //@line 592 "multibytecodec.c"
      case 33: // $bb34
        $0=0; //@line 593 "multibytecodec.c"
        __label__ = 34; break; //@line 593 "multibytecodec.c"
      case 34: // $bb35
        var $178=$0; //@line 552 "multibytecodec.c"
        $retval=$178; //@line 552 "multibytecodec.c"
        var $retval36=$retval; //@line 552 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval36; //@line 552 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _MultibyteCodec_Decode($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 92; _memset(__stackBase__, 0, 92);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $state=__stackBase__;
        var $buf=__stackBase__+8;
        var $errorcb;
        var $pdata=__stackBase__+36;
        var $data;
        var $errors=__stackBase__+88;
        var $datalen;
        var $finalsize;
        var $inleft;
        var $outleft;
        var $r;
        $self_addr=$self;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        HEAP[$errors]=0; //@line 604 "multibytecodec.c"
        var $1=$args_addr; //@line 607 "multibytecodec.c"
        var $2=$kwargs_addr; //@line 607 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str21, _codeckwarglist, allocate([$pdata,0,0,0,$errors,0,0,0], ["%struct.Py_buffer*",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 607 "multibytecodec.c"
        var $4=($3)==0; //@line 607 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 607 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 609 "multibytecodec.c"
        __label__ = 38; break; //@line 609 "multibytecodec.c"
      case 2: // $bb1
        var $5=$pdata; //@line 610 "multibytecodec.c"
        var $6=HEAP[$5]; //@line 610 "multibytecodec.c"
        $data=$6; //@line 610 "multibytecodec.c"
        var $7=$pdata+8; //@line 611 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 611 "multibytecodec.c"
        $datalen=$8; //@line 611 "multibytecodec.c"
        var $9=HEAP[$errors]; //@line 613 "multibytecodec.c"
        var $10=_internal_error_callback($9); //@line 613 "multibytecodec.c"
        $errorcb=$10; //@line 613 "multibytecodec.c"
        var $11=$errorcb; //@line 614 "multibytecodec.c"
        var $12=($11)==0; //@line 614 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 614 "multibytecodec.c"
      case 3: // $bb2
        _PyBuffer_Release($pdata); //@line 615 "multibytecodec.c"
        $0=0; //@line 616 "multibytecodec.c"
        __label__ = 38; break; //@line 616 "multibytecodec.c"
      case 4: // $bb3
        var $13=$datalen; //@line 619 "multibytecodec.c"
        var $14=($13)==0; //@line 619 "multibytecodec.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 619 "multibytecodec.c"
      case 5: // $bb4
        _PyBuffer_Release($pdata); //@line 620 "multibytecodec.c"
        var $15=$errorcb; //@line 621 "multibytecodec.c"
        var $16=($15)!=0; //@line 621 "multibytecodec.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 621 "multibytecodec.c"
      case 6: // $bb5
        var $17=$errorcb; //@line 621 "multibytecodec.c"
        var $18=($17)==0; //@line 621 "multibytecodec.c"
        var $19=$errorcb; //@line 621 "multibytecodec.c"
        var $20=($19) > 3; //@line 621 "multibytecodec.c"
        var $or_cond=($18) | ($20);
        if ($or_cond) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 621 "multibytecodec.c"
      case 7: // $bb7
        var $21=$errorcb; //@line 621 "multibytecodec.c"
        var $22=$21; //@line 621 "multibytecodec.c"
        var $23=HEAP[$22]; //@line 621 "multibytecodec.c"
        var $24=($23) - 1; //@line 621 "multibytecodec.c"
        var $25=$errorcb; //@line 621 "multibytecodec.c"
        var $26=$25; //@line 621 "multibytecodec.c"
        HEAP[$26]=$24; //@line 621 "multibytecodec.c"
        var $27=$errorcb; //@line 621 "multibytecodec.c"
        var $28=$27; //@line 621 "multibytecodec.c"
        var $29=HEAP[$28]; //@line 621 "multibytecodec.c"
        var $30=($29)==0; //@line 621 "multibytecodec.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 621 "multibytecodec.c"
      case 8: // $bb8
        var $31=$errorcb; //@line 621 "multibytecodec.c"
        var $32=$31+4; //@line 621 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 621 "multibytecodec.c"
        var $34=$33+24; //@line 621 "multibytecodec.c"
        var $35=HEAP[$34]; //@line 621 "multibytecodec.c"
        var $36=$errorcb; //@line 621 "multibytecodec.c"
        FUNCTION_TABLE[$35]($36); //@line 621 "multibytecodec.c"
        __label__ = 9; break; //@line 621 "multibytecodec.c"
      case 9: // $bb9
        var $37=_PyUnicodeUCS2_FromUnicode(0, 0); //@line 622 "multibytecodec.c"
        var $38=_make_tuple($37, 0); //@line 622 "multibytecodec.c"
        $0=$38; //@line 622 "multibytecodec.c"
        __label__ = 38; break; //@line 622 "multibytecodec.c"
      case 10: // $bb10
        var $39=$buf+20; //@line 625 "multibytecodec.c"
        HEAP[$39]=0; //@line 625 "multibytecodec.c"
        var $40=$data; //@line 626 "multibytecodec.c"
        var $41=$buf+4; //@line 626 "multibytecodec.c"
        HEAP[$41]=$40; //@line 626 "multibytecodec.c"
        var $42=$buf+4; //@line 626 "multibytecodec.c"
        var $43=HEAP[$42]; //@line 626 "multibytecodec.c"
        var $44=$buf; //@line 626 "multibytecodec.c"
        HEAP[$44]=$43; //@line 626 "multibytecodec.c"
        var $45=$buf+4; //@line 627 "multibytecodec.c"
        var $46=HEAP[$45]; //@line 627 "multibytecodec.c"
        var $47=$datalen; //@line 627 "multibytecodec.c"
        var $48=$46+$47; //@line 627 "multibytecodec.c"
        var $49=$buf+8; //@line 627 "multibytecodec.c"
        HEAP[$49]=$48; //@line 627 "multibytecodec.c"
        var $50=$datalen; //@line 628 "multibytecodec.c"
        var $51=_PyUnicodeUCS2_FromUnicode(0, $50); //@line 628 "multibytecodec.c"
        var $52=$buf+24; //@line 628 "multibytecodec.c"
        HEAP[$52]=$51; //@line 628 "multibytecodec.c"
        var $53=$buf+24; //@line 629 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 629 "multibytecodec.c"
        var $55=($54)==0; //@line 629 "multibytecodec.c"
        if ($55) { __label__ = 27; break; } else { __label__ = 11; break; } //@line 629 "multibytecodec.c"
      case 11: // $bb11
        var $56=$buf+24; //@line 631 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 631 "multibytecodec.c"
        var $58=$57; //@line 631 "multibytecodec.c"
        var $59=$58+12; //@line 631 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 631 "multibytecodec.c"
        var $61=$buf+12; //@line 631 "multibytecodec.c"
        HEAP[$61]=$60; //@line 631 "multibytecodec.c"
        var $62=$buf+12; //@line 632 "multibytecodec.c"
        var $63=HEAP[$62]; //@line 632 "multibytecodec.c"
        var $64=$buf+24; //@line 632 "multibytecodec.c"
        var $65=HEAP[$64]; //@line 632 "multibytecodec.c"
        var $66=$65; //@line 632 "multibytecodec.c"
        var $67=$66+8; //@line 632 "multibytecodec.c"
        var $68=HEAP[$67]; //@line 632 "multibytecodec.c"
        var $69=$63+2*$68; //@line 632 "multibytecodec.c"
        var $70=$buf+16; //@line 632 "multibytecodec.c"
        HEAP[$70]=$69; //@line 632 "multibytecodec.c"
        var $71=$self_addr; //@line 634 "multibytecodec.c"
        var $72=$71+8; //@line 634 "multibytecodec.c"
        var $73=HEAP[$72]; //@line 634 "multibytecodec.c"
        var $74=$73+28; //@line 634 "multibytecodec.c"
        var $75=HEAP[$74]; //@line 634 "multibytecodec.c"
        var $76=($75)!=0; //@line 634 "multibytecodec.c"
        if ($76) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 634 "multibytecodec.c"
      case 12: // $bb12
        var $77=$self_addr; //@line 634 "multibytecodec.c"
        var $78=$77+8; //@line 634 "multibytecodec.c"
        var $79=HEAP[$78]; //@line 634 "multibytecodec.c"
        var $80=$79+28; //@line 634 "multibytecodec.c"
        var $81=HEAP[$80]; //@line 634 "multibytecodec.c"
        var $82=$self_addr; //@line 634 "multibytecodec.c"
        var $83=$82+8; //@line 634 "multibytecodec.c"
        var $84=HEAP[$83]; //@line 634 "multibytecodec.c"
        var $85=$84+4; //@line 634 "multibytecodec.c"
        var $86=HEAP[$85]; //@line 634 "multibytecodec.c"
        var $87=FUNCTION_TABLE[$81]($state, $86); //@line 634 "multibytecodec.c"
        var $88=($87)!=0; //@line 634 "multibytecodec.c"
        if ($88) { __label__ = 27; break; } else { __label__ = 13; break; } //@line 634 "multibytecodec.c"
      case 13: // $bb16_preheader
        var $89=$buf; //@line 638 "multibytecodec.c"
        var $90=$buf+8; //@line 638 "multibytecodec.c"
        var $91=$buf+8; //@line 641 "multibytecodec.c"
        var $92=$buf; //@line 641 "multibytecodec.c"
        var $93=$buf+16; //@line 642 "multibytecodec.c"
        var $94=$buf+12; //@line 642 "multibytecodec.c"
        var $95=$buf; //@line 644 "multibytecodec.c"
        var $96=$buf+12; //@line 644 "multibytecodec.c"
        __label__ = 16; break;
      case 14: // $bb14
        var $97=HEAP[$91]; //@line 641 "multibytecodec.c"
        var $98=($97); //@line 641 "multibytecodec.c"
        var $99=HEAP[$92]; //@line 641 "multibytecodec.c"
        var $100=($99); //@line 641 "multibytecodec.c"
        var $101=($98) - ($100); //@line 641 "multibytecodec.c"
        $inleft=$101; //@line 641 "multibytecodec.c"
        var $102=HEAP[$93]; //@line 642 "multibytecodec.c"
        var $103=($102); //@line 642 "multibytecodec.c"
        var $104=HEAP[$94]; //@line 642 "multibytecodec.c"
        var $105=($104); //@line 642 "multibytecodec.c"
        var $106=($103) - ($105); //@line 642 "multibytecodec.c"
        var $107=((($106)/2)|0); //@line 642 "multibytecodec.c"
        $outleft=$107; //@line 642 "multibytecodec.c"
        var $108=$self_addr; //@line 644 "multibytecodec.c"
        var $109=$108+8; //@line 644 "multibytecodec.c"
        var $110=HEAP[$109]; //@line 644 "multibytecodec.c"
        var $111=$110+24; //@line 644 "multibytecodec.c"
        var $112=HEAP[$111]; //@line 644 "multibytecodec.c"
        var $113=$self_addr; //@line 644 "multibytecodec.c"
        var $114=$113+8; //@line 644 "multibytecodec.c"
        var $115=HEAP[$114]; //@line 644 "multibytecodec.c"
        var $116=$115+4; //@line 644 "multibytecodec.c"
        var $117=HEAP[$116]; //@line 644 "multibytecodec.c"
        var $118=$inleft; //@line 644 "multibytecodec.c"
        var $119=$outleft; //@line 644 "multibytecodec.c"
        var $120=FUNCTION_TABLE[$112]($state, $117, $95, $118, $96, $119); //@line 644 "multibytecodec.c"
        $r=$120; //@line 644 "multibytecodec.c"
        var $121=$r; //@line 646 "multibytecodec.c"
        var $122=($121)==0; //@line 646 "multibytecodec.c"
        if ($122) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 646 "multibytecodec.c"
      case 15: // $bb15
        var $123=$self_addr; //@line 648 "multibytecodec.c"
        var $124=$123+8; //@line 648 "multibytecodec.c"
        var $125=HEAP[$124]; //@line 648 "multibytecodec.c"
        var $126=$errorcb; //@line 648 "multibytecodec.c"
        var $127=$r; //@line 648 "multibytecodec.c"
        var $128=_multibytecodec_decerror($125, $state, $buf, $126, $127); //@line 648 "multibytecodec.c"
        var $129=($128)!=0; //@line 648 "multibytecodec.c"
        if ($129) { __label__ = 27; break; } else { __label__ = 16; break; } //@line 648 "multibytecodec.c"
      case 16: // $bb16
        var $130=HEAP[$89]; //@line 638 "multibytecodec.c"
        var $131=HEAP[$90]; //@line 638 "multibytecodec.c"
        var $132=($130) < ($131); //@line 638 "multibytecodec.c"
        if ($132) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 638 "multibytecodec.c"
      case 17: // $bb17
        var $133=$buf+12; //@line 653 "multibytecodec.c"
        var $134=HEAP[$133]; //@line 653 "multibytecodec.c"
        var $135=($134); //@line 653 "multibytecodec.c"
        var $136=$buf+24; //@line 653 "multibytecodec.c"
        var $137=HEAP[$136]; //@line 653 "multibytecodec.c"
        var $138=$137; //@line 653 "multibytecodec.c"
        var $139=$138+12; //@line 653 "multibytecodec.c"
        var $140=HEAP[$139]; //@line 653 "multibytecodec.c"
        var $141=($140); //@line 653 "multibytecodec.c"
        var $142=($135) - ($141); //@line 653 "multibytecodec.c"
        var $143=((($142)/2)|0); //@line 653 "multibytecodec.c"
        $finalsize=$143; //@line 653 "multibytecodec.c"
        var $144=$buf+24; //@line 656 "multibytecodec.c"
        var $145=HEAP[$144]; //@line 656 "multibytecodec.c"
        var $146=$145; //@line 656 "multibytecodec.c"
        var $147=$146+8; //@line 656 "multibytecodec.c"
        var $148=HEAP[$147]; //@line 656 "multibytecodec.c"
        var $149=$finalsize; //@line 656 "multibytecodec.c"
        var $150=($148)!=($149); //@line 656 "multibytecodec.c"
        if ($150) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 656 "multibytecodec.c"
      case 18: // $bb18
        var $151=$buf+24; //@line 657 "multibytecodec.c"
        var $152=$finalsize; //@line 657 "multibytecodec.c"
        var $153=_PyUnicodeUCS2_Resize($151, $152); //@line 657 "multibytecodec.c"
        var $154=($153)==-1; //@line 657 "multibytecodec.c"
        if ($154) { __label__ = 27; break; } else { __label__ = 19; break; } //@line 657 "multibytecodec.c"
      case 19: // $bb19
        _PyBuffer_Release($pdata); //@line 660 "multibytecodec.c"
        var $155=$buf+20; //@line 661 "multibytecodec.c"
        var $156=HEAP[$155]; //@line 661 "multibytecodec.c"
        var $157=($156)!=0; //@line 661 "multibytecodec.c"
        if ($157) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 661 "multibytecodec.c"
      case 20: // $bb20
        var $158=$buf+20; //@line 661 "multibytecodec.c"
        var $159=HEAP[$158]; //@line 661 "multibytecodec.c"
        var $160=$159; //@line 661 "multibytecodec.c"
        var $161=HEAP[$160]; //@line 661 "multibytecodec.c"
        var $162=($161) - 1; //@line 661 "multibytecodec.c"
        var $163=$159; //@line 661 "multibytecodec.c"
        HEAP[$163]=$162; //@line 661 "multibytecodec.c"
        var $164=$159; //@line 661 "multibytecodec.c"
        var $165=HEAP[$164]; //@line 661 "multibytecodec.c"
        var $166=($165)==0; //@line 661 "multibytecodec.c"
        if ($166) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 661 "multibytecodec.c"
      case 21: // $bb21
        var $167=$buf+20; //@line 661 "multibytecodec.c"
        var $168=HEAP[$167]; //@line 661 "multibytecodec.c"
        var $169=$168+4; //@line 661 "multibytecodec.c"
        var $170=HEAP[$169]; //@line 661 "multibytecodec.c"
        var $171=$170+24; //@line 661 "multibytecodec.c"
        var $172=HEAP[$171]; //@line 661 "multibytecodec.c"
        var $173=$buf+20; //@line 661 "multibytecodec.c"
        var $174=HEAP[$173]; //@line 661 "multibytecodec.c"
        FUNCTION_TABLE[$172]($174); //@line 661 "multibytecodec.c"
        __label__ = 22; break; //@line 661 "multibytecodec.c"
      case 22: // $bb22
        var $175=$errorcb; //@line 662 "multibytecodec.c"
        var $176=($175)!=0; //@line 662 "multibytecodec.c"
        if ($176) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 662 "multibytecodec.c"
      case 23: // $bb23
        var $177=$errorcb; //@line 662 "multibytecodec.c"
        var $178=($177)==0; //@line 662 "multibytecodec.c"
        var $179=$errorcb; //@line 662 "multibytecodec.c"
        var $180=($179) > 3; //@line 662 "multibytecodec.c"
        var $or_cond3=($178) | ($180);
        if ($or_cond3) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 662 "multibytecodec.c"
      case 24: // $bb25
        var $181=$errorcb; //@line 662 "multibytecodec.c"
        var $182=$181; //@line 662 "multibytecodec.c"
        var $183=HEAP[$182]; //@line 662 "multibytecodec.c"
        var $184=($183) - 1; //@line 662 "multibytecodec.c"
        var $185=$errorcb; //@line 662 "multibytecodec.c"
        var $186=$185; //@line 662 "multibytecodec.c"
        HEAP[$186]=$184; //@line 662 "multibytecodec.c"
        var $187=$errorcb; //@line 662 "multibytecodec.c"
        var $188=$187; //@line 662 "multibytecodec.c"
        var $189=HEAP[$188]; //@line 662 "multibytecodec.c"
        var $190=($189)==0; //@line 662 "multibytecodec.c"
        if ($190) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 662 "multibytecodec.c"
      case 25: // $bb26
        var $191=$errorcb; //@line 662 "multibytecodec.c"
        var $192=$191+4; //@line 662 "multibytecodec.c"
        var $193=HEAP[$192]; //@line 662 "multibytecodec.c"
        var $194=$193+24; //@line 662 "multibytecodec.c"
        var $195=HEAP[$194]; //@line 662 "multibytecodec.c"
        var $196=$errorcb; //@line 662 "multibytecodec.c"
        FUNCTION_TABLE[$195]($196); //@line 662 "multibytecodec.c"
        __label__ = 26; break; //@line 662 "multibytecodec.c"
      case 26: // $bb27
        var $197=$buf+24; //@line 663 "multibytecodec.c"
        var $198=HEAP[$197]; //@line 663 "multibytecodec.c"
        var $199=$datalen; //@line 663 "multibytecodec.c"
        var $200=_make_tuple($198, $199); //@line 663 "multibytecodec.c"
        $0=$200; //@line 663 "multibytecodec.c"
        __label__ = 38; break; //@line 663 "multibytecodec.c"
      case 27: // $errorexit
        _PyBuffer_Release($pdata); //@line 666 "multibytecodec.c"
        var $201=$errorcb; //@line 667 "multibytecodec.c"
        var $202=($201)!=0; //@line 667 "multibytecodec.c"
        if ($202) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 667 "multibytecodec.c"
      case 28: // $bb28
        var $203=$errorcb; //@line 667 "multibytecodec.c"
        var $204=($203)==0; //@line 667 "multibytecodec.c"
        var $205=$errorcb; //@line 667 "multibytecodec.c"
        var $206=($205) > 3; //@line 667 "multibytecodec.c"
        var $or_cond5=($204) | ($206);
        if ($or_cond5) { __label__ = 29; break; } else { __label__ = 31; break; } //@line 667 "multibytecodec.c"
      case 29: // $bb30
        var $207=$errorcb; //@line 667 "multibytecodec.c"
        var $208=$207; //@line 667 "multibytecodec.c"
        var $209=HEAP[$208]; //@line 667 "multibytecodec.c"
        var $210=($209) - 1; //@line 667 "multibytecodec.c"
        var $211=$errorcb; //@line 667 "multibytecodec.c"
        var $212=$211; //@line 667 "multibytecodec.c"
        HEAP[$212]=$210; //@line 667 "multibytecodec.c"
        var $213=$errorcb; //@line 667 "multibytecodec.c"
        var $214=$213; //@line 667 "multibytecodec.c"
        var $215=HEAP[$214]; //@line 667 "multibytecodec.c"
        var $216=($215)==0; //@line 667 "multibytecodec.c"
        if ($216) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 667 "multibytecodec.c"
      case 30: // $bb31
        var $217=$errorcb; //@line 667 "multibytecodec.c"
        var $218=$217+4; //@line 667 "multibytecodec.c"
        var $219=HEAP[$218]; //@line 667 "multibytecodec.c"
        var $220=$219+24; //@line 667 "multibytecodec.c"
        var $221=HEAP[$220]; //@line 667 "multibytecodec.c"
        var $222=$errorcb; //@line 667 "multibytecodec.c"
        FUNCTION_TABLE[$221]($222); //@line 667 "multibytecodec.c"
        __label__ = 31; break; //@line 667 "multibytecodec.c"
      case 31: // $bb32
        var $223=$buf+20; //@line 668 "multibytecodec.c"
        var $224=HEAP[$223]; //@line 668 "multibytecodec.c"
        var $225=($224)!=0; //@line 668 "multibytecodec.c"
        if ($225) { __label__ = 32; break; } else { __label__ = 34; break; } //@line 668 "multibytecodec.c"
      case 32: // $bb33
        var $226=$buf+20; //@line 668 "multibytecodec.c"
        var $227=HEAP[$226]; //@line 668 "multibytecodec.c"
        var $228=$227; //@line 668 "multibytecodec.c"
        var $229=HEAP[$228]; //@line 668 "multibytecodec.c"
        var $230=($229) - 1; //@line 668 "multibytecodec.c"
        var $231=$227; //@line 668 "multibytecodec.c"
        HEAP[$231]=$230; //@line 668 "multibytecodec.c"
        var $232=$227; //@line 668 "multibytecodec.c"
        var $233=HEAP[$232]; //@line 668 "multibytecodec.c"
        var $234=($233)==0; //@line 668 "multibytecodec.c"
        if ($234) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 668 "multibytecodec.c"
      case 33: // $bb34
        var $235=$buf+20; //@line 668 "multibytecodec.c"
        var $236=HEAP[$235]; //@line 668 "multibytecodec.c"
        var $237=$236+4; //@line 668 "multibytecodec.c"
        var $238=HEAP[$237]; //@line 668 "multibytecodec.c"
        var $239=$238+24; //@line 668 "multibytecodec.c"
        var $240=HEAP[$239]; //@line 668 "multibytecodec.c"
        var $241=$buf+20; //@line 668 "multibytecodec.c"
        var $242=HEAP[$241]; //@line 668 "multibytecodec.c"
        FUNCTION_TABLE[$240]($242); //@line 668 "multibytecodec.c"
        __label__ = 34; break; //@line 668 "multibytecodec.c"
      case 34: // $bb35
        var $243=$buf+24; //@line 669 "multibytecodec.c"
        var $244=HEAP[$243]; //@line 669 "multibytecodec.c"
        var $245=($244)!=0; //@line 669 "multibytecodec.c"
        if ($245) { __label__ = 35; break; } else { __label__ = 37; break; } //@line 669 "multibytecodec.c"
      case 35: // $bb36
        var $246=$buf+24; //@line 669 "multibytecodec.c"
        var $247=HEAP[$246]; //@line 669 "multibytecodec.c"
        var $248=$247; //@line 669 "multibytecodec.c"
        var $249=HEAP[$248]; //@line 669 "multibytecodec.c"
        var $250=($249) - 1; //@line 669 "multibytecodec.c"
        var $251=$247; //@line 669 "multibytecodec.c"
        HEAP[$251]=$250; //@line 669 "multibytecodec.c"
        var $252=$247; //@line 669 "multibytecodec.c"
        var $253=HEAP[$252]; //@line 669 "multibytecodec.c"
        var $254=($253)==0; //@line 669 "multibytecodec.c"
        if ($254) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 669 "multibytecodec.c"
      case 36: // $bb37
        var $255=$buf+24; //@line 669 "multibytecodec.c"
        var $256=HEAP[$255]; //@line 669 "multibytecodec.c"
        var $257=$256+4; //@line 669 "multibytecodec.c"
        var $258=HEAP[$257]; //@line 669 "multibytecodec.c"
        var $259=$258+24; //@line 669 "multibytecodec.c"
        var $260=HEAP[$259]; //@line 669 "multibytecodec.c"
        var $261=$buf+24; //@line 669 "multibytecodec.c"
        var $262=HEAP[$261]; //@line 669 "multibytecodec.c"
        FUNCTION_TABLE[$260]($262); //@line 669 "multibytecodec.c"
        __label__ = 37; break; //@line 669 "multibytecodec.c"
      case 37: // $bb38
        $0=0; //@line 671 "multibytecodec.c"
        __label__ = 38; break; //@line 671 "multibytecodec.c"
      case 38: // $bb39
        var $263=$0; //@line 609 "multibytecodec.c"
        $retval=$263; //@line 609 "multibytecodec.c"
        var $retval40=$retval; //@line 609 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval40; //@line 609 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _multibytecodec_dealloc($self) {
    ;
    var __label__;
  
    var $self_addr;
    $self_addr=$self;
    var $0=$self_addr; //@line 687 "multibytecodec.c"
    var $1=$0; //@line 687 "multibytecodec.c"
    _PyObject_Free($1); //@line 687 "multibytecodec.c"
    ;
    return; //@line 688 "multibytecodec.c"
  }
  

  function _encoder_encode_stateful($ctx, $unistr, $final) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ctx_addr;
        var $unistr_addr;
        var $final_addr;
        var $retval;
        var $iftmp_53;
        var $iftmp_49;
        var $0;
        var $ucvt;
        var $r;
        var $inbuf=__stackBase__;
        var $inbuf_end;
        var $inbuf_tmp;
        var $datalen;
        var $origpending;
        $ctx_addr=$ctx;
        $unistr_addr=$unistr;
        $final_addr=$final;
        $r=0; //@line 734 "multibytecodec.c"
        $inbuf_tmp=0; //@line 735 "multibytecodec.c"
        var $1=$unistr_addr; //@line 738 "multibytecodec.c"
        var $2=$1+4; //@line 738 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 738 "multibytecodec.c"
        var $4=$3+84; //@line 738 "multibytecodec.c"
        var $5=HEAP[$4]; //@line 738 "multibytecodec.c"
        var $6=($5) & 268435456; //@line 738 "multibytecodec.c"
        var $7=($6)!=0; //@line 738 "multibytecodec.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 738 "multibytecodec.c"
      case 1: // $bb
        $ucvt=0; //@line 739 "multibytecodec.c"
        __label__ = 8; break; //@line 739 "multibytecodec.c"
      case 2: // $bb1
        var $8=$unistr_addr; //@line 741 "multibytecodec.c"
        var $9=_PyObject_Unicode($8); //@line 741 "multibytecodec.c"
        $ucvt=$9; //@line 741 "multibytecodec.c"
        var $10=$ucvt; //@line 741 "multibytecodec.c"
        $unistr_addr=$10; //@line 741 "multibytecodec.c"
        var $11=$unistr_addr; //@line 742 "multibytecodec.c"
        var $12=($11)==0; //@line 742 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 742 "multibytecodec.c"
      case 3: // $bb2
        $0=0; //@line 743 "multibytecodec.c"
        __label__ = 42; break; //@line 743 "multibytecodec.c"
      case 4: // $bb3
        var $13=$unistr_addr; //@line 744 "multibytecodec.c"
        var $14=$13+4; //@line 744 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 744 "multibytecodec.c"
        var $16=$15+84; //@line 744 "multibytecodec.c"
        var $17=HEAP[$16]; //@line 744 "multibytecodec.c"
        var $18=($17) & 268435456; //@line 744 "multibytecodec.c"
        var $19=($18)==0; //@line 744 "multibytecodec.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 744 "multibytecodec.c"
      case 5: // $bb4
        var $20=HEAP[_PyExc_TypeError]; //@line 745 "multibytecodec.c"
        _PyErr_SetString($20, __str20); //@line 745 "multibytecodec.c"
        var $21=$ucvt; //@line 747 "multibytecodec.c"
        var $22=$21; //@line 747 "multibytecodec.c"
        var $23=HEAP[$22]; //@line 747 "multibytecodec.c"
        var $24=($23) - 1; //@line 747 "multibytecodec.c"
        var $25=$ucvt; //@line 747 "multibytecodec.c"
        var $26=$25; //@line 747 "multibytecodec.c"
        HEAP[$26]=$24; //@line 747 "multibytecodec.c"
        var $27=$ucvt; //@line 747 "multibytecodec.c"
        var $28=$27; //@line 747 "multibytecodec.c"
        var $29=HEAP[$28]; //@line 747 "multibytecodec.c"
        var $30=($29)==0; //@line 747 "multibytecodec.c"
        if ($30) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 747 "multibytecodec.c"
      case 6: // $bb5
        var $31=$ucvt; //@line 747 "multibytecodec.c"
        var $32=$31+4; //@line 747 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 747 "multibytecodec.c"
        var $34=$33+24; //@line 747 "multibytecodec.c"
        var $35=HEAP[$34]; //@line 747 "multibytecodec.c"
        var $36=$ucvt; //@line 747 "multibytecodec.c"
        FUNCTION_TABLE[$35]($36); //@line 747 "multibytecodec.c"
        __label__ = 7; break; //@line 747 "multibytecodec.c"
      case 7: // $bb6
        $0=0; //@line 748 "multibytecodec.c"
        __label__ = 42; break; //@line 748 "multibytecodec.c"
      case 8: // $bb7
        var $37=$unistr_addr; //@line 752 "multibytecodec.c"
        var $38=$37; //@line 752 "multibytecodec.c"
        var $39=$38+8; //@line 752 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 752 "multibytecodec.c"
        $datalen=$40; //@line 752 "multibytecodec.c"
        var $41=$ctx_addr; //@line 753 "multibytecodec.c"
        var $42=$41+28; //@line 753 "multibytecodec.c"
        var $43=HEAP[$42]; //@line 753 "multibytecodec.c"
        $origpending=$43; //@line 753 "multibytecodec.c"
        var $44=($43) > 0; //@line 755 "multibytecodec.c"
        if ($44) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 755 "multibytecodec.c"
      case 9: // $bb8
        var $45=$ctx_addr; //@line 756 "multibytecodec.c"
        var $46=$45+28; //@line 756 "multibytecodec.c"
        var $47=HEAP[$46]; //@line 756 "multibytecodec.c"
        var $48=2147483647 - ($47); //@line 756 "multibytecodec.c"
        var $49=$datalen; //@line 756 "multibytecodec.c"
        var $50=($48) < ($49); //@line 756 "multibytecodec.c"
        if ($50) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 756 "multibytecodec.c"
      case 10: // $bb9
        var $51=_PyErr_NoMemory(); //@line 757 "multibytecodec.c"
        __label__ = 33; break; //@line 757 "multibytecodec.c"
      case 11: // $bb10
        var $52=$ctx_addr; //@line 761 "multibytecodec.c"
        var $53=$52+28; //@line 761 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 761 "multibytecodec.c"
        var $55=$datalen; //@line 761 "multibytecodec.c"
        var $56=($55) + ($54); //@line 761 "multibytecodec.c"
        var $57=($56) <= 1073741823; //@line 761 "multibytecodec.c"
        if ($57) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 761 "multibytecodec.c"
      case 12: // $bb13_thread
        $iftmp_49=0; //@line 761 "multibytecodec.c"
        $inbuf_tmp=0; //@line 761 "multibytecodec.c"
        __label__ = 35; break;
      case 13: // $bb13
        var $58=$ctx_addr; //@line 761 "multibytecodec.c"
        var $59=$58+28; //@line 761 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 761 "multibytecodec.c"
        var $61=$datalen; //@line 761 "multibytecodec.c"
        var $62=($61) + ($60); //@line 761 "multibytecodec.c"
        var $63=($62) * 2; //@line 761 "multibytecodec.c"
        var $64=_PyMem_Malloc($63); //@line 761 "multibytecodec.c"
        var $65=$64; //@line 761 "multibytecodec.c"
        $iftmp_49=$65; //@line 761 "multibytecodec.c"
        $inbuf_tmp=$65; //@line 761 "multibytecodec.c"
        var $66=($65)==0; //@line 762 "multibytecodec.c"
        if ($66) { __label__ = 35; break; } else { __label__ = 14; break; } //@line 762 "multibytecodec.c"
      case 14: // $bb14
        var $67=$ctx_addr; //@line 764 "multibytecodec.c"
        var $68=$67+28; //@line 764 "multibytecodec.c"
        var $69=HEAP[$68]; //@line 764 "multibytecodec.c"
        var $70=($69) * 2; //@line 764 "multibytecodec.c"
        var $71=$ctx_addr; //@line 764 "multibytecodec.c"
        var $72=$71+24; //@line 764 "multibytecodec.c"
        var $73=$72; //@line 764 "multibytecodec.c"
        var $74=$inbuf_tmp; //@line 764 "multibytecodec.c"
        var $75=$74; //@line 764 "multibytecodec.c"
        var $76=$73; //@line 764 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($75, $76, $70, 1, 0); //@line 764 "multibytecodec.c"
        var $77=$datalen; //@line 766 "multibytecodec.c"
        var $78=($77) * 2; //@line 766 "multibytecodec.c"
        var $79=$unistr_addr; //@line 766 "multibytecodec.c"
        var $80=$79; //@line 766 "multibytecodec.c"
        var $81=$80+12; //@line 766 "multibytecodec.c"
        var $82=HEAP[$81]; //@line 766 "multibytecodec.c"
        var $83=$ctx_addr; //@line 766 "multibytecodec.c"
        var $84=$83+28; //@line 766 "multibytecodec.c"
        var $85=HEAP[$84]; //@line 766 "multibytecodec.c"
        var $86=$inbuf_tmp; //@line 766 "multibytecodec.c"
        var $87=$86+2*$85; //@line 766 "multibytecodec.c"
        var $88=$87; //@line 766 "multibytecodec.c"
        var $89=$82; //@line 766 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($88, $89, $78, 1, 0); //@line 766 "multibytecodec.c"
        var $90=$ctx_addr; //@line 769 "multibytecodec.c"
        var $91=$90+28; //@line 769 "multibytecodec.c"
        var $92=HEAP[$91]; //@line 769 "multibytecodec.c"
        var $93=$datalen; //@line 769 "multibytecodec.c"
        var $94=($93) + ($92); //@line 769 "multibytecodec.c"
        $datalen=$94; //@line 769 "multibytecodec.c"
        var $95=$ctx_addr; //@line 770 "multibytecodec.c"
        var $96=$95+28; //@line 770 "multibytecodec.c"
        HEAP[$96]=0; //@line 770 "multibytecodec.c"
        var $97=$inbuf_tmp; //@line 771 "multibytecodec.c"
        HEAP[$inbuf]=$97; //@line 771 "multibytecodec.c"
        __label__ = 16; break; //@line 771 "multibytecodec.c"
      case 15: // $bb15
        var $98=$unistr_addr; //@line 774 "multibytecodec.c"
        var $99=$98; //@line 774 "multibytecodec.c"
        var $100=$99+12; //@line 774 "multibytecodec.c"
        var $101=HEAP[$100]; //@line 774 "multibytecodec.c"
        HEAP[$inbuf]=$101; //@line 774 "multibytecodec.c"
        __label__ = 16; break; //@line 774 "multibytecodec.c"
      case 16: // $bb16
        var $102=HEAP[$inbuf]; //@line 776 "multibytecodec.c"
        var $103=$datalen; //@line 776 "multibytecodec.c"
        var $104=$102+2*$103; //@line 776 "multibytecodec.c"
        $inbuf_end=$104; //@line 776 "multibytecodec.c"
        var $105=$final_addr; //@line 778 "multibytecodec.c"
        var $106=($105)!=0; //@line 778 "multibytecodec.c"
        if ($106) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 778 "multibytecodec.c"
      case 17: // $bb17
        $iftmp_53=3; //@line 778 "multibytecodec.c"
        __label__ = 19; break; //@line 778 "multibytecodec.c"
      case 18: // $bb18
        $iftmp_53=0; //@line 778 "multibytecodec.c"
        __label__ = 19; break; //@line 778 "multibytecodec.c"
      case 19: // $bb19
        var $107=$ctx_addr; //@line 778 "multibytecodec.c"
        var $108=$107+20; //@line 778 "multibytecodec.c"
        var $109=HEAP[$108]; //@line 778 "multibytecodec.c"
        var $110=$ctx_addr; //@line 778 "multibytecodec.c"
        var $111=$110+12; //@line 778 "multibytecodec.c"
        var $112=$ctx_addr; //@line 778 "multibytecodec.c"
        var $113=$112+8; //@line 778 "multibytecodec.c"
        var $114=HEAP[$113]; //@line 778 "multibytecodec.c"
        var $115=$datalen; //@line 778 "multibytecodec.c"
        var $116=$iftmp_53; //@line 778 "multibytecodec.c"
        var $117=_multibytecodec_encode($114, $111, $inbuf, $115, $109, $116); //@line 778 "multibytecodec.c"
        $r=$117; //@line 778 "multibytecodec.c"
        var $118=($117)==0; //@line 781 "multibytecodec.c"
        if ($118) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 781 "multibytecodec.c"
      case 20: // $bb21
        var $119=$origpending; //@line 783 "multibytecodec.c"
        var $120=($119) > 0; //@line 783 "multibytecodec.c"
        if ($120) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 783 "multibytecodec.c"
      case 21: // $bb22
        var $121=$origpending; //@line 784 "multibytecodec.c"
        var $122=($121) * 2; //@line 784 "multibytecodec.c"
        var $123=$ctx_addr; //@line 784 "multibytecodec.c"
        var $124=$123+24; //@line 784 "multibytecodec.c"
        var $125=$124; //@line 784 "multibytecodec.c"
        var $126=$inbuf_tmp; //@line 784 "multibytecodec.c"
        var $127=$125; //@line 784 "multibytecodec.c"
        var $128=$126; //@line 784 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($127, $128, $122, 1, 0); //@line 784 "multibytecodec.c"
        __label__ = 22; break; //@line 784 "multibytecodec.c"
      case 22: // $bb23
        var $129=$ctx_addr; //@line 786 "multibytecodec.c"
        var $130=$129+28; //@line 786 "multibytecodec.c"
        var $131=$origpending; //@line 786 "multibytecodec.c"
        HEAP[$130]=$131; //@line 786 "multibytecodec.c"
        __label__ = 33; break; //@line 786 "multibytecodec.c"
      case 23: // $bb24
        var $132=HEAP[$inbuf]; //@line 790 "multibytecodec.c"
        var $133=$inbuf_end; //@line 790 "multibytecodec.c"
        var $134=($132) < ($133); //@line 790 "multibytecodec.c"
        if ($134) { __label__ = 24; break; } else { __label__ = 27; break; } //@line 790 "multibytecodec.c"
      case 24: // $bb25
        var $135=$inbuf_end; //@line 791 "multibytecodec.c"
        var $136=($135); //@line 791 "multibytecodec.c"
        var $137=HEAP[$inbuf]; //@line 791 "multibytecodec.c"
        var $138=($137); //@line 791 "multibytecodec.c"
        var $139=($136) - ($138); //@line 791 "multibytecodec.c"
        var $140=((($139)/2)|0); //@line 791 "multibytecodec.c"
        var $141=$ctx_addr; //@line 791 "multibytecodec.c"
        var $142=$141+28; //@line 791 "multibytecodec.c"
        HEAP[$142]=$140; //@line 791 "multibytecodec.c"
        var $143=$ctx_addr; //@line 792 "multibytecodec.c"
        var $144=$143+28; //@line 792 "multibytecodec.c"
        var $145=HEAP[$144]; //@line 792 "multibytecodec.c"
        var $146=($145) > 2; //@line 792 "multibytecodec.c"
        var $147=$ctx_addr; //@line 794 "multibytecodec.c"
        var $148=$147+28; //@line 794 "multibytecodec.c"
        if ($146) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 792 "multibytecodec.c"
      case 25: // $bb26
        HEAP[$148]=0; //@line 794 "multibytecodec.c"
        var $149=HEAP[_PyExc_UnicodeError]; //@line 795 "multibytecodec.c"
        _PyErr_SetString($149, __str25); //@line 795 "multibytecodec.c"
        __label__ = 33; break; //@line 795 "multibytecodec.c"
      case 26: // $bb27
        var $150=HEAP[$148]; //@line 799 "multibytecodec.c"
        var $151=($150) * 2; //@line 799 "multibytecodec.c"
        var $152=HEAP[$inbuf]; //@line 799 "multibytecodec.c"
        var $153=$ctx_addr; //@line 799 "multibytecodec.c"
        var $154=$153+24; //@line 799 "multibytecodec.c"
        var $155=$154; //@line 799 "multibytecodec.c"
        var $156=$155; //@line 799 "multibytecodec.c"
        var $157=$152; //@line 799 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($156, $157, $151, 1, 0); //@line 799 "multibytecodec.c"
        __label__ = 27; break; //@line 799 "multibytecodec.c"
      case 27: // $bb28
        var $158=$inbuf_tmp; //@line 803 "multibytecodec.c"
        var $159=($158)!=0; //@line 803 "multibytecodec.c"
        if ($159) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 803 "multibytecodec.c"
      case 28: // $bb29
        var $160=$inbuf_tmp; //@line 804 "multibytecodec.c"
        var $161=$160; //@line 804 "multibytecodec.c"
        _PyMem_Free($161); //@line 804 "multibytecodec.c"
        __label__ = 29; break; //@line 804 "multibytecodec.c"
      case 29: // $bb30
        var $162=$ucvt; //@line 805 "multibytecodec.c"
        var $163=($162)!=0; //@line 805 "multibytecodec.c"
        if ($163) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 805 "multibytecodec.c"
      case 30: // $bb31
        var $164=$ucvt; //@line 805 "multibytecodec.c"
        var $165=$164; //@line 805 "multibytecodec.c"
        var $166=HEAP[$165]; //@line 805 "multibytecodec.c"
        var $167=($166) - 1; //@line 805 "multibytecodec.c"
        var $168=$ucvt; //@line 805 "multibytecodec.c"
        var $169=$168; //@line 805 "multibytecodec.c"
        HEAP[$169]=$167; //@line 805 "multibytecodec.c"
        var $170=$ucvt; //@line 805 "multibytecodec.c"
        var $171=$170; //@line 805 "multibytecodec.c"
        var $172=HEAP[$171]; //@line 805 "multibytecodec.c"
        var $173=($172)==0; //@line 805 "multibytecodec.c"
        if ($173) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 805 "multibytecodec.c"
      case 31: // $bb32
        var $174=$ucvt; //@line 805 "multibytecodec.c"
        var $175=$174+4; //@line 805 "multibytecodec.c"
        var $176=HEAP[$175]; //@line 805 "multibytecodec.c"
        var $177=$176+24; //@line 805 "multibytecodec.c"
        var $178=HEAP[$177]; //@line 805 "multibytecodec.c"
        var $179=$ucvt; //@line 805 "multibytecodec.c"
        FUNCTION_TABLE[$178]($179); //@line 805 "multibytecodec.c"
        __label__ = 32; break; //@line 805 "multibytecodec.c"
      case 32: // $bb33
        var $180=$r; //@line 806 "multibytecodec.c"
        $0=$180; //@line 806 "multibytecodec.c"
        __label__ = 42; break; //@line 806 "multibytecodec.c"
      case 33: // $errorexit
        var $_pr=$inbuf_tmp;
        var $181=($_pr)!=0; //@line 809 "multibytecodec.c"
        if ($181) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 809 "multibytecodec.c"
      case 34: // $bb34
        var $182=$inbuf_tmp; //@line 810 "multibytecodec.c"
        var $183=$182; //@line 810 "multibytecodec.c"
        _PyMem_Free($183); //@line 810 "multibytecodec.c"
        __label__ = 35; break; //@line 810 "multibytecodec.c"
      case 35: // $bb35
        var $184=$r; //@line 811 "multibytecodec.c"
        var $185=($184)!=0; //@line 811 "multibytecodec.c"
        if ($185) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 811 "multibytecodec.c"
      case 36: // $bb36
        var $186=$r; //@line 811 "multibytecodec.c"
        var $187=$186; //@line 811 "multibytecodec.c"
        var $188=HEAP[$187]; //@line 811 "multibytecodec.c"
        var $189=($188) - 1; //@line 811 "multibytecodec.c"
        var $190=$r; //@line 811 "multibytecodec.c"
        var $191=$190; //@line 811 "multibytecodec.c"
        HEAP[$191]=$189; //@line 811 "multibytecodec.c"
        var $192=$r; //@line 811 "multibytecodec.c"
        var $193=$192; //@line 811 "multibytecodec.c"
        var $194=HEAP[$193]; //@line 811 "multibytecodec.c"
        var $195=($194)==0; //@line 811 "multibytecodec.c"
        if ($195) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 811 "multibytecodec.c"
      case 37: // $bb37
        var $196=$r; //@line 811 "multibytecodec.c"
        var $197=$196+4; //@line 811 "multibytecodec.c"
        var $198=HEAP[$197]; //@line 811 "multibytecodec.c"
        var $199=$198+24; //@line 811 "multibytecodec.c"
        var $200=HEAP[$199]; //@line 811 "multibytecodec.c"
        var $201=$r; //@line 811 "multibytecodec.c"
        FUNCTION_TABLE[$200]($201); //@line 811 "multibytecodec.c"
        __label__ = 38; break; //@line 811 "multibytecodec.c"
      case 38: // $bb38
        var $202=$ucvt; //@line 812 "multibytecodec.c"
        var $203=($202)!=0; //@line 812 "multibytecodec.c"
        if ($203) { __label__ = 39; break; } else { __label__ = 41; break; } //@line 812 "multibytecodec.c"
      case 39: // $bb39
        var $204=$ucvt; //@line 812 "multibytecodec.c"
        var $205=$204; //@line 812 "multibytecodec.c"
        var $206=HEAP[$205]; //@line 812 "multibytecodec.c"
        var $207=($206) - 1; //@line 812 "multibytecodec.c"
        var $208=$ucvt; //@line 812 "multibytecodec.c"
        var $209=$208; //@line 812 "multibytecodec.c"
        HEAP[$209]=$207; //@line 812 "multibytecodec.c"
        var $210=$ucvt; //@line 812 "multibytecodec.c"
        var $211=$210; //@line 812 "multibytecodec.c"
        var $212=HEAP[$211]; //@line 812 "multibytecodec.c"
        var $213=($212)==0; //@line 812 "multibytecodec.c"
        if ($213) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 812 "multibytecodec.c"
      case 40: // $bb40
        var $214=$ucvt; //@line 812 "multibytecodec.c"
        var $215=$214+4; //@line 812 "multibytecodec.c"
        var $216=HEAP[$215]; //@line 812 "multibytecodec.c"
        var $217=$216+24; //@line 812 "multibytecodec.c"
        var $218=HEAP[$217]; //@line 812 "multibytecodec.c"
        var $219=$ucvt; //@line 812 "multibytecodec.c"
        FUNCTION_TABLE[$218]($219); //@line 812 "multibytecodec.c"
        __label__ = 41; break; //@line 812 "multibytecodec.c"
      case 41: // $bb41
        $0=0; //@line 813 "multibytecodec.c"
        __label__ = 42; break; //@line 813 "multibytecodec.c"
      case 42: // $bb42
        var $220=$0; //@line 743 "multibytecodec.c"
        $retval=$220; //@line 743 "multibytecodec.c"
        var $retval43=$retval; //@line 743 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval43; //@line 743 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _decoder_append_pending($ctx, $buf) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ctx_addr;
        var $buf_addr;
        var $retval;
        var $0;
        var $npendings;
        $ctx_addr=$ctx;
        $buf_addr=$buf;
        var $1=$buf_addr; //@line 822 "multibytecodec.c"
        var $2=$1+8; //@line 822 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 822 "multibytecodec.c"
        var $4=($3); //@line 822 "multibytecodec.c"
        var $5=$buf_addr; //@line 822 "multibytecodec.c"
        var $6=$5; //@line 822 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 822 "multibytecodec.c"
        var $8=($7); //@line 822 "multibytecodec.c"
        var $9=($4) - ($8); //@line 822 "multibytecodec.c"
        $npendings=$9; //@line 822 "multibytecodec.c"
        var $10=$ctx_addr; //@line 823 "multibytecodec.c"
        var $11=$10+32; //@line 823 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 823 "multibytecodec.c"
        var $13=$npendings; //@line 823 "multibytecodec.c"
        var $14=($13) + ($12); //@line 823 "multibytecodec.c"
        var $15=($14) > 8; //@line 823 "multibytecodec.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 823 "multibytecodec.c"
      case 1: // $bb
        var $16=$ctx_addr; //@line 823 "multibytecodec.c"
        var $17=$16+32; //@line 823 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 823 "multibytecodec.c"
        var $19=2147483647 - ($18); //@line 823 "multibytecodec.c"
        var $20=$npendings; //@line 823 "multibytecodec.c"
        var $21=($19) < ($20); //@line 823 "multibytecodec.c"
        if ($21) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 823 "multibytecodec.c"
      case 2: // $bb1
        var $22=HEAP[_PyExc_UnicodeError]; //@line 825 "multibytecodec.c"
        _PyErr_SetString($22, __str25); //@line 825 "multibytecodec.c"
        $0=-1; //@line 826 "multibytecodec.c"
        __label__ = 4; break; //@line 826 "multibytecodec.c"
      case 3: // $bb2
        var $23=$npendings; //@line 828 "multibytecodec.c"
        var $24=$buf_addr; //@line 828 "multibytecodec.c"
        var $25=$24; //@line 828 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 828 "multibytecodec.c"
        var $27=$ctx_addr; //@line 828 "multibytecodec.c"
        var $28=$27+24; //@line 828 "multibytecodec.c"
        var $29=$28; //@line 828 "multibytecodec.c"
        var $30=$ctx_addr; //@line 828 "multibytecodec.c"
        var $31=$30+32; //@line 828 "multibytecodec.c"
        var $32=HEAP[$31]; //@line 828 "multibytecodec.c"
        var $33=$29+$32; //@line 828 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($33, $26, $23, 1, 0); //@line 828 "multibytecodec.c"
        var $34=$ctx_addr; //@line 829 "multibytecodec.c"
        var $35=$34+32; //@line 829 "multibytecodec.c"
        var $36=HEAP[$35]; //@line 829 "multibytecodec.c"
        var $37=$npendings; //@line 829 "multibytecodec.c"
        var $38=($37) + ($36); //@line 829 "multibytecodec.c"
        var $39=$ctx_addr; //@line 829 "multibytecodec.c"
        var $40=$39+32; //@line 829 "multibytecodec.c"
        HEAP[$40]=$38; //@line 829 "multibytecodec.c"
        $0=0; //@line 830 "multibytecodec.c"
        __label__ = 4; break; //@line 830 "multibytecodec.c"
      case 4: // $bb3
        var $41=$0; //@line 826 "multibytecodec.c"
        $retval=$41; //@line 826 "multibytecodec.c"
        var $retval4=$retval; //@line 826 "multibytecodec.c"
        ;
        return $retval4; //@line 826 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _decoder_prepare_buffer($buf, $data, $size) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $buf_addr;
        var $data_addr;
        var $size_addr;
        var $retval;
        var $0;
        $buf_addr=$buf;
        $data_addr=$data;
        $size_addr=$size;
        var $1=$data_addr; //@line 837 "multibytecodec.c"
        var $2=$buf_addr; //@line 837 "multibytecodec.c"
        var $3=$2+4; //@line 837 "multibytecodec.c"
        HEAP[$3]=$1; //@line 837 "multibytecodec.c"
        var $4=$buf_addr; //@line 837 "multibytecodec.c"
        var $5=$4+4; //@line 837 "multibytecodec.c"
        var $6=HEAP[$5]; //@line 837 "multibytecodec.c"
        var $7=$buf_addr; //@line 837 "multibytecodec.c"
        var $8=$7; //@line 837 "multibytecodec.c"
        HEAP[$8]=$6; //@line 837 "multibytecodec.c"
        var $9=$buf_addr; //@line 838 "multibytecodec.c"
        var $10=$9+4; //@line 838 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 838 "multibytecodec.c"
        var $12=$size_addr; //@line 838 "multibytecodec.c"
        var $13=$11+$12; //@line 838 "multibytecodec.c"
        var $14=$buf_addr; //@line 838 "multibytecodec.c"
        var $15=$14+8; //@line 838 "multibytecodec.c"
        HEAP[$15]=$13; //@line 838 "multibytecodec.c"
        var $16=$buf_addr; //@line 839 "multibytecodec.c"
        var $17=$16+24; //@line 839 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 839 "multibytecodec.c"
        var $19=($18)==0; //@line 839 "multibytecodec.c"
        if ($19) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 839 "multibytecodec.c"
      case 1: // $bb
        var $20=$size_addr; //@line 840 "multibytecodec.c"
        var $21=_PyUnicodeUCS2_FromUnicode(0, $20); //@line 840 "multibytecodec.c"
        var $22=$buf_addr; //@line 840 "multibytecodec.c"
        var $23=$22+24; //@line 840 "multibytecodec.c"
        HEAP[$23]=$21; //@line 840 "multibytecodec.c"
        var $24=$buf_addr; //@line 841 "multibytecodec.c"
        var $25=$24+24; //@line 841 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 841 "multibytecodec.c"
        var $27=($26)==0; //@line 841 "multibytecodec.c"
        if ($27) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 841 "multibytecodec.c"
      case 2: // $bb1
        $0=-1; //@line 842 "multibytecodec.c"
        __label__ = 5; break; //@line 842 "multibytecodec.c"
      case 3: // $bb2
        var $28=$buf_addr; //@line 843 "multibytecodec.c"
        var $29=$28+24; //@line 843 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 843 "multibytecodec.c"
        var $31=$30; //@line 843 "multibytecodec.c"
        var $32=$31+12; //@line 843 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 843 "multibytecodec.c"
        var $34=$buf_addr; //@line 843 "multibytecodec.c"
        var $35=$34+12; //@line 843 "multibytecodec.c"
        HEAP[$35]=$33; //@line 843 "multibytecodec.c"
        var $36=$buf_addr; //@line 844 "multibytecodec.c"
        var $37=$36+12; //@line 844 "multibytecodec.c"
        var $38=HEAP[$37]; //@line 844 "multibytecodec.c"
        var $39=$buf_addr; //@line 844 "multibytecodec.c"
        var $40=$39+24; //@line 844 "multibytecodec.c"
        var $41=HEAP[$40]; //@line 844 "multibytecodec.c"
        var $42=$41; //@line 844 "multibytecodec.c"
        var $43=$42+8; //@line 844 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 844 "multibytecodec.c"
        var $45=$38+2*$44; //@line 844 "multibytecodec.c"
        var $46=$buf_addr; //@line 844 "multibytecodec.c"
        var $47=$46+16; //@line 844 "multibytecodec.c"
        HEAP[$47]=$45; //@line 844 "multibytecodec.c"
        __label__ = 4; break; //@line 844 "multibytecodec.c"
      case 4: // $bb3
        $0=0; //@line 848 "multibytecodec.c"
        __label__ = 5; break; //@line 848 "multibytecodec.c"
      case 5: // $bb4
        var $48=$0; //@line 842 "multibytecodec.c"
        $retval=$48; //@line 842 "multibytecodec.c"
        var $retval5=$retval; //@line 842 "multibytecodec.c"
        ;
        return $retval5; //@line 842 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _decoder_feed_buffer($ctx, $buf) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ctx_addr;
        var $buf_addr;
        var $retval;
        var $0;
        var $inleft;
        var $outleft;
        var $r;
        $ctx_addr=$ctx;
        $buf_addr=$buf;
        __label__ = 4; break; //@line 855 "multibytecodec.c"
      case 1: // $bb
        var $1=$buf_addr; //@line 859 "multibytecodec.c"
        var $2=$1+8; //@line 859 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 859 "multibytecodec.c"
        var $4=($3); //@line 859 "multibytecodec.c"
        var $5=$buf_addr; //@line 859 "multibytecodec.c"
        var $6=$5; //@line 859 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 859 "multibytecodec.c"
        var $8=($7); //@line 859 "multibytecodec.c"
        var $9=($4) - ($8); //@line 859 "multibytecodec.c"
        $inleft=$9; //@line 859 "multibytecodec.c"
        var $10=$buf_addr; //@line 860 "multibytecodec.c"
        var $11=$10+16; //@line 860 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 860 "multibytecodec.c"
        var $13=($12); //@line 860 "multibytecodec.c"
        var $14=$buf_addr; //@line 860 "multibytecodec.c"
        var $15=$14+12; //@line 860 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 860 "multibytecodec.c"
        var $17=($16); //@line 860 "multibytecodec.c"
        var $18=($13) - ($17); //@line 860 "multibytecodec.c"
        var $19=((($18)/2)|0); //@line 860 "multibytecodec.c"
        $outleft=$19; //@line 860 "multibytecodec.c"
        var $20=$ctx_addr; //@line 862 "multibytecodec.c"
        var $21=$20+8; //@line 862 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 862 "multibytecodec.c"
        var $23=$22+24; //@line 862 "multibytecodec.c"
        var $24=HEAP[$23]; //@line 862 "multibytecodec.c"
        var $25=$buf_addr; //@line 862 "multibytecodec.c"
        var $26=$25+12; //@line 862 "multibytecodec.c"
        var $27=$buf_addr; //@line 862 "multibytecodec.c"
        var $28=$27; //@line 862 "multibytecodec.c"
        var $29=$ctx_addr; //@line 862 "multibytecodec.c"
        var $30=$29+8; //@line 862 "multibytecodec.c"
        var $31=HEAP[$30]; //@line 862 "multibytecodec.c"
        var $32=$31+4; //@line 862 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 862 "multibytecodec.c"
        var $34=$ctx_addr; //@line 862 "multibytecodec.c"
        var $35=$34+12; //@line 862 "multibytecodec.c"
        var $36=$inleft; //@line 862 "multibytecodec.c"
        var $37=$outleft; //@line 862 "multibytecodec.c"
        var $38=FUNCTION_TABLE[$24]($35, $33, $28, $36, $26, $37); //@line 862 "multibytecodec.c"
        $r=$38; //@line 862 "multibytecodec.c"
        var $39=$r; //@line 864 "multibytecodec.c"
        var $40=($39)==0; //@line 864 "multibytecodec.c"
        var $41=$r; //@line 864 "multibytecodec.c"
        var $42=($41)==-2; //@line 864 "multibytecodec.c"
        var $or_cond=($40) | ($42);
        if ($or_cond) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 864 "multibytecodec.c"
      case 2: // $bb2
        var $43=$ctx_addr; //@line 866 "multibytecodec.c"
        var $44=$43+20; //@line 866 "multibytecodec.c"
        var $45=HEAP[$44]; //@line 866 "multibytecodec.c"
        var $46=$ctx_addr; //@line 866 "multibytecodec.c"
        var $47=$46+12; //@line 866 "multibytecodec.c"
        var $48=$ctx_addr; //@line 866 "multibytecodec.c"
        var $49=$48+8; //@line 866 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 866 "multibytecodec.c"
        var $51=$buf_addr; //@line 866 "multibytecodec.c"
        var $52=$r; //@line 866 "multibytecodec.c"
        var $53=_multibytecodec_decerror($50, $47, $51, $45, $52); //@line 866 "multibytecodec.c"
        var $54=($53)!=0; //@line 866 "multibytecodec.c"
        if ($54) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 866 "multibytecodec.c"
      case 3: // $bb3
        $0=-1; //@line 868 "multibytecodec.c"
        __label__ = 6; break; //@line 868 "multibytecodec.c"
      case 4: // $bb4
        var $55=$buf_addr; //@line 855 "multibytecodec.c"
        var $56=$55; //@line 855 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 855 "multibytecodec.c"
        var $58=$buf_addr; //@line 855 "multibytecodec.c"
        var $59=$58+8; //@line 855 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 855 "multibytecodec.c"
        var $61=($57) < ($60); //@line 855 "multibytecodec.c"
        if ($61) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 855 "multibytecodec.c"
      case 5: // $bb5
        $0=0; //@line 870 "multibytecodec.c"
        __label__ = 6; break; //@line 870 "multibytecodec.c"
      case 6: // $bb6
        var $62=$0; //@line 868 "multibytecodec.c"
        $retval=$62; //@line 868 "multibytecodec.c"
        var $retval7=$retval; //@line 868 "multibytecodec.c"
        ;
        return $retval7; //@line 868 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbiencoder_encode($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $data=__stackBase__;
        var $final=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        HEAP[$final]=0; //@line 883 "multibytecodec.c"
        var $1=$args_addr; //@line 885 "multibytecodec.c"
        var $2=$kwargs_addr; //@line 885 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str26, _incrementalkwarglist, allocate([$data,0,0,0,$final,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 885 "multibytecodec.c"
        var $4=($3)==0; //@line 885 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 885 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 887 "multibytecodec.c"
        __label__ = 3; break; //@line 887 "multibytecodec.c"
      case 2: // $bb1
        var $5=HEAP[$final]; //@line 889 "multibytecodec.c"
        var $6=HEAP[$data]; //@line 889 "multibytecodec.c"
        var $7=$self_addr; //@line 889 "multibytecodec.c"
        var $8=_encoder_encode_stateful($7, $6, $5); //@line 889 "multibytecodec.c"
        $0=$8; //@line 889 "multibytecodec.c"
        __label__ = 3; break; //@line 889 "multibytecodec.c"
      case 3: // $bb2
        var $9=$0; //@line 887 "multibytecodec.c"
        $retval=$9; //@line 887 "multibytecodec.c"
        var $retval3=$retval; //@line 887 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 887 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbiencoder_reset($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 895 "multibytecodec.c"
        var $2=$1+8; //@line 895 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 895 "multibytecodec.c"
        var $4=$3+32; //@line 895 "multibytecodec.c"
        var $5=HEAP[$4]; //@line 895 "multibytecodec.c"
        var $6=($5)!=0; //@line 895 "multibytecodec.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 895 "multibytecodec.c"
      case 1: // $bb
        var $7=$self_addr; //@line 895 "multibytecodec.c"
        var $8=$7+8; //@line 895 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 895 "multibytecodec.c"
        var $10=$9+32; //@line 895 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 895 "multibytecodec.c"
        var $12=$self_addr; //@line 895 "multibytecodec.c"
        var $13=$12+8; //@line 895 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 895 "multibytecodec.c"
        var $15=$14+4; //@line 895 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 895 "multibytecodec.c"
        var $17=$self_addr; //@line 895 "multibytecodec.c"
        var $18=$17+12; //@line 895 "multibytecodec.c"
        var $19=FUNCTION_TABLE[$11]($18, $16); //@line 895 "multibytecodec.c"
        var $20=($19)!=0; //@line 895 "multibytecodec.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 895 "multibytecodec.c"
      case 2: // $bb1
        $0=0; //@line 897 "multibytecodec.c"
        __label__ = 4; break; //@line 897 "multibytecodec.c"
      case 3: // $bb2
        var $21=$self_addr; //@line 898 "multibytecodec.c"
        var $22=$21+28; //@line 898 "multibytecodec.c"
        HEAP[$22]=0; //@line 898 "multibytecodec.c"
        var $23=HEAP[__Py_NoneStruct]; //@line 900 "multibytecodec.c"
        var $24=($23) + 1; //@line 900 "multibytecodec.c"
        HEAP[__Py_NoneStruct]=$24; //@line 900 "multibytecodec.c"
        $0=__Py_NoneStruct; //@line 900 "multibytecodec.c"
        __label__ = 4; break; //@line 900 "multibytecodec.c"
      case 4: // $bb3
        var $25=$0; //@line 897 "multibytecodec.c"
        $retval=$25; //@line 897 "multibytecodec.c"
        var $retval4=$retval; //@line 897 "multibytecodec.c"
        ;
        return $retval4; //@line 897 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbiencoder_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $self;
        var $codec;
        var $errors=__stackBase__;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        $codec=0; //@line 915 "multibytecodec.c"
        HEAP[$errors]=0; //@line 916 "multibytecodec.c"
        var $1=$args_addr; //@line 918 "multibytecodec.c"
        var $2=$kwds_addr; //@line 918 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str28, _incnewkwarglist, allocate([$errors,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 918 "multibytecodec.c"
        var $4=($3)==0; //@line 918 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 918 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 920 "multibytecodec.c"
        __label__ = 21; break; //@line 920 "multibytecodec.c"
      case 2: // $bb1
        var $5=$type_addr; //@line 922 "multibytecodec.c"
        var $6=$5+152; //@line 922 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 922 "multibytecodec.c"
        var $8=$type_addr; //@line 922 "multibytecodec.c"
        var $9=FUNCTION_TABLE[$7]($8, 0); //@line 922 "multibytecodec.c"
        var $10=$9; //@line 922 "multibytecodec.c"
        $self=$10; //@line 922 "multibytecodec.c"
        var $11=$self; //@line 923 "multibytecodec.c"
        var $12=($11)==0; //@line 923 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 923 "multibytecodec.c"
      case 3: // $bb2
        $0=0; //@line 924 "multibytecodec.c"
        __label__ = 21; break; //@line 924 "multibytecodec.c"
      case 4: // $bb3
        var $13=$type_addr; //@line 926 "multibytecodec.c"
        var $14=$13; //@line 926 "multibytecodec.c"
        var $15=_PyObject_GetAttrString($14, __str29); //@line 926 "multibytecodec.c"
        $codec=$15; //@line 926 "multibytecodec.c"
        var $16=$codec; //@line 927 "multibytecodec.c"
        var $17=($16)==0; //@line 927 "multibytecodec.c"
        if ($17) { __label__ = 13; break; } else { __label__ = 5; break; } //@line 927 "multibytecodec.c"
      case 5: // $bb4
        var $18=$codec; //@line 929 "multibytecodec.c"
        var $19=$18+4; //@line 929 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 929 "multibytecodec.c"
        var $21=($20)!=(_MultibyteCodec_Type); //@line 929 "multibytecodec.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 929 "multibytecodec.c"
      case 6: // $bb5
        var $22=HEAP[_PyExc_TypeError]; //@line 930 "multibytecodec.c"
        _PyErr_SetString($22, __str30); //@line 930 "multibytecodec.c"
        __label__ = 13; break; //@line 930 "multibytecodec.c"
      case 7: // $bb6
        var $23=$codec; //@line 934 "multibytecodec.c"
        var $24=$23; //@line 934 "multibytecodec.c"
        var $25=$24+8; //@line 934 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 934 "multibytecodec.c"
        var $27=$self; //@line 934 "multibytecodec.c"
        var $28=$27+8; //@line 934 "multibytecodec.c"
        HEAP[$28]=$26; //@line 934 "multibytecodec.c"
        var $29=$self; //@line 935 "multibytecodec.c"
        var $30=$29+28; //@line 935 "multibytecodec.c"
        HEAP[$30]=0; //@line 935 "multibytecodec.c"
        var $31=HEAP[$errors]; //@line 936 "multibytecodec.c"
        var $32=_internal_error_callback($31); //@line 936 "multibytecodec.c"
        var $33=$self; //@line 936 "multibytecodec.c"
        var $34=$33+20; //@line 936 "multibytecodec.c"
        HEAP[$34]=$32; //@line 936 "multibytecodec.c"
        var $35=$self; //@line 937 "multibytecodec.c"
        var $36=$35+20; //@line 937 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 937 "multibytecodec.c"
        var $38=($37)==0; //@line 937 "multibytecodec.c"
        if ($38) { __lastLabel__ = 7; __label__ = 14; break; } else { __lastLabel__ = 7; __label__ = 8; break; } //@line 937 "multibytecodec.c"
      case 8: // $bb7
        var $39=$self; //@line 939 "multibytecodec.c"
        var $40=$39+8; //@line 939 "multibytecodec.c"
        var $41=HEAP[$40]; //@line 939 "multibytecodec.c"
        var $42=$41+16; //@line 939 "multibytecodec.c"
        var $43=HEAP[$42]; //@line 939 "multibytecodec.c"
        var $44=($43)!=0; //@line 939 "multibytecodec.c"
        if ($44) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 939 "multibytecodec.c"
      case 9: // $bb8
        var $45=$self; //@line 939 "multibytecodec.c"
        var $46=$45+8; //@line 939 "multibytecodec.c"
        var $47=HEAP[$46]; //@line 939 "multibytecodec.c"
        var $48=$47+16; //@line 939 "multibytecodec.c"
        var $49=HEAP[$48]; //@line 939 "multibytecodec.c"
        var $50=$self; //@line 939 "multibytecodec.c"
        var $51=$50+8; //@line 939 "multibytecodec.c"
        var $52=HEAP[$51]; //@line 939 "multibytecodec.c"
        var $53=$52+4; //@line 939 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 939 "multibytecodec.c"
        var $55=$self; //@line 939 "multibytecodec.c"
        var $56=$55+12; //@line 939 "multibytecodec.c"
        var $57=FUNCTION_TABLE[$49]($56, $54); //@line 939 "multibytecodec.c"
        var $58=($57)!=0; //@line 939 "multibytecodec.c"
        if ($58) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 939 "multibytecodec.c"
      case 10: // $bb9
        var $59=$codec; //@line 943 "multibytecodec.c"
        var $60=$59; //@line 943 "multibytecodec.c"
        var $61=HEAP[$60]; //@line 943 "multibytecodec.c"
        var $62=($61) - 1; //@line 943 "multibytecodec.c"
        var $63=$codec; //@line 943 "multibytecodec.c"
        var $64=$63; //@line 943 "multibytecodec.c"
        HEAP[$64]=$62; //@line 943 "multibytecodec.c"
        var $65=$codec; //@line 943 "multibytecodec.c"
        var $66=$65; //@line 943 "multibytecodec.c"
        var $67=HEAP[$66]; //@line 943 "multibytecodec.c"
        var $68=($67)==0; //@line 943 "multibytecodec.c"
        if ($68) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 943 "multibytecodec.c"
      case 11: // $bb10
        var $69=$codec; //@line 943 "multibytecodec.c"
        var $70=$69+4; //@line 943 "multibytecodec.c"
        var $71=HEAP[$70]; //@line 943 "multibytecodec.c"
        var $72=$71+24; //@line 943 "multibytecodec.c"
        var $73=HEAP[$72]; //@line 943 "multibytecodec.c"
        var $74=$codec; //@line 943 "multibytecodec.c"
        FUNCTION_TABLE[$73]($74); //@line 943 "multibytecodec.c"
        __label__ = 12; break; //@line 943 "multibytecodec.c"
      case 12: // $bb11
        var $75=$self; //@line 944 "multibytecodec.c"
        var $76=$75; //@line 944 "multibytecodec.c"
        $0=$76; //@line 944 "multibytecodec.c"
        __label__ = 21; break; //@line 944 "multibytecodec.c"
      case 13: // $errorexitthread_pre_split
        var $_pr=$self;
        __lastLabel__ = 13; __label__ = 14; break;
      case 14: // $errorexit
        var $77=__lastLabel__ == 13 ? $_pr : ($35);
        var $78=($77)!=0; //@line 947 "multibytecodec.c"
        if ($78) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 947 "multibytecodec.c"
      case 15: // $bb12
        var $79=$self; //@line 947 "multibytecodec.c"
        var $80=$79; //@line 947 "multibytecodec.c"
        var $81=$80; //@line 947 "multibytecodec.c"
        var $82=HEAP[$81]; //@line 947 "multibytecodec.c"
        var $83=($82) - 1; //@line 947 "multibytecodec.c"
        var $84=$80; //@line 947 "multibytecodec.c"
        HEAP[$84]=$83; //@line 947 "multibytecodec.c"
        var $85=$80; //@line 947 "multibytecodec.c"
        var $86=HEAP[$85]; //@line 947 "multibytecodec.c"
        var $87=($86)==0; //@line 947 "multibytecodec.c"
        if ($87) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 947 "multibytecodec.c"
      case 16: // $bb13
        var $88=$self; //@line 947 "multibytecodec.c"
        var $89=$88; //@line 947 "multibytecodec.c"
        var $90=$89+4; //@line 947 "multibytecodec.c"
        var $91=HEAP[$90]; //@line 947 "multibytecodec.c"
        var $92=$91+24; //@line 947 "multibytecodec.c"
        var $93=HEAP[$92]; //@line 947 "multibytecodec.c"
        var $94=$self; //@line 947 "multibytecodec.c"
        var $95=$94; //@line 947 "multibytecodec.c"
        FUNCTION_TABLE[$93]($95); //@line 947 "multibytecodec.c"
        __label__ = 17; break; //@line 947 "multibytecodec.c"
      case 17: // $bb14
        var $96=$codec; //@line 948 "multibytecodec.c"
        var $97=($96)!=0; //@line 948 "multibytecodec.c"
        if ($97) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 948 "multibytecodec.c"
      case 18: // $bb15
        var $98=$codec; //@line 948 "multibytecodec.c"
        var $99=$98; //@line 948 "multibytecodec.c"
        var $100=HEAP[$99]; //@line 948 "multibytecodec.c"
        var $101=($100) - 1; //@line 948 "multibytecodec.c"
        var $102=$codec; //@line 948 "multibytecodec.c"
        var $103=$102; //@line 948 "multibytecodec.c"
        HEAP[$103]=$101; //@line 948 "multibytecodec.c"
        var $104=$codec; //@line 948 "multibytecodec.c"
        var $105=$104; //@line 948 "multibytecodec.c"
        var $106=HEAP[$105]; //@line 948 "multibytecodec.c"
        var $107=($106)==0; //@line 948 "multibytecodec.c"
        if ($107) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 948 "multibytecodec.c"
      case 19: // $bb16
        var $108=$codec; //@line 948 "multibytecodec.c"
        var $109=$108+4; //@line 948 "multibytecodec.c"
        var $110=HEAP[$109]; //@line 948 "multibytecodec.c"
        var $111=$110+24; //@line 948 "multibytecodec.c"
        var $112=HEAP[$111]; //@line 948 "multibytecodec.c"
        var $113=$codec; //@line 948 "multibytecodec.c"
        FUNCTION_TABLE[$112]($113); //@line 948 "multibytecodec.c"
        __label__ = 20; break; //@line 948 "multibytecodec.c"
      case 20: // $bb17
        $0=0; //@line 949 "multibytecodec.c"
        __label__ = 21; break; //@line 949 "multibytecodec.c"
      case 21: // $bb18
        var $114=$0; //@line 920 "multibytecodec.c"
        $retval=$114; //@line 920 "multibytecodec.c"
        var $retval19=$retval; //@line 920 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 920 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbiencoder_init($self, $args, $kwds) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    $0=0; //@line 955 "multibytecodec.c"
    var $1=$0; //@line 955 "multibytecodec.c"
    $retval=$1; //@line 955 "multibytecodec.c"
    var $retval1=$retval; //@line 955 "multibytecodec.c"
    ;
    return $retval1; //@line 955 "multibytecodec.c"
  }
  

  function _mbiencoder_traverse($self, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        $self_addr=$self;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$self_addr; //@line 962 "multibytecodec.c"
        var $2=$1+20; //@line 962 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 962 "multibytecodec.c"
        var $4=($3)==0; //@line 962 "multibytecodec.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 962 "multibytecodec.c"
      case 1: // $bb
        var $5=$self_addr; //@line 962 "multibytecodec.c"
        var $6=$5+20; //@line 962 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 962 "multibytecodec.c"
        var $8=($7) > 3; //@line 962 "multibytecodec.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 962 "multibytecodec.c"
      case 2: // $bb1
        var $9=$self_addr; //@line 963 "multibytecodec.c"
        var $10=$9+20; //@line 963 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 963 "multibytecodec.c"
        var $12=($11)!=0; //@line 963 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 963 "multibytecodec.c"
      case 3: // $bb2
        var $13=$self_addr; //@line 963 "multibytecodec.c"
        var $14=$13+20; //@line 963 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 963 "multibytecodec.c"
        var $16=$visit_addr; //@line 963 "multibytecodec.c"
        var $17=$arg_addr; //@line 963 "multibytecodec.c"
        var $18=FUNCTION_TABLE[$16]($15, $17); //@line 963 "multibytecodec.c"
        $vret=$18; //@line 963 "multibytecodec.c"
        var $19=$vret; //@line 963 "multibytecodec.c"
        var $20=($19)!=0; //@line 963 "multibytecodec.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 963 "multibytecodec.c"
      case 4: // $bb3
        var $21=$vret; //@line 963 "multibytecodec.c"
        $0=$21; //@line 963 "multibytecodec.c"
        __label__ = 6; break; //@line 963 "multibytecodec.c"
      case 5: // $bb4
        $0=0; //@line 964 "multibytecodec.c"
        __label__ = 6; break; //@line 964 "multibytecodec.c"
      case 6: // $bb5
        var $22=$0; //@line 963 "multibytecodec.c"
        $retval=$22; //@line 963 "multibytecodec.c"
        var $retval6=$retval; //@line 963 "multibytecodec.c"
        ;
        return $retval6; //@line 963 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbiencoder_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 970 "multibytecodec.c"
        var $1=$0; //@line 970 "multibytecodec.c"
        _PyObject_GC_UnTrack($1); //@line 970 "multibytecodec.c"
        var $2=$self_addr; //@line 971 "multibytecodec.c"
        var $3=$2+20; //@line 971 "multibytecodec.c"
        var $4=HEAP[$3]; //@line 971 "multibytecodec.c"
        var $5=($4)!=0; //@line 971 "multibytecodec.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 971 "multibytecodec.c"
      case 1: // $bb
        var $6=$self_addr; //@line 971 "multibytecodec.c"
        var $7=$6+20; //@line 971 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 971 "multibytecodec.c"
        var $9=($8)==0; //@line 971 "multibytecodec.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 971 "multibytecodec.c"
      case 2: // $bb1
        var $10=$self_addr; //@line 971 "multibytecodec.c"
        var $11=$10+20; //@line 971 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 971 "multibytecodec.c"
        var $13=($12) > 3; //@line 971 "multibytecodec.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 971 "multibytecodec.c"
      case 3: // $bb2
        var $14=$self_addr; //@line 971 "multibytecodec.c"
        var $15=$14+20; //@line 971 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 971 "multibytecodec.c"
        var $17=$16; //@line 971 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 971 "multibytecodec.c"
        var $19=($18) - 1; //@line 971 "multibytecodec.c"
        var $20=$16; //@line 971 "multibytecodec.c"
        HEAP[$20]=$19; //@line 971 "multibytecodec.c"
        var $21=$16; //@line 971 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 971 "multibytecodec.c"
        var $23=($22)==0; //@line 971 "multibytecodec.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 971 "multibytecodec.c"
      case 4: // $bb3
        var $24=$self_addr; //@line 971 "multibytecodec.c"
        var $25=$24+20; //@line 971 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 971 "multibytecodec.c"
        var $27=$26+4; //@line 971 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 971 "multibytecodec.c"
        var $29=$28+24; //@line 971 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 971 "multibytecodec.c"
        var $31=$self_addr; //@line 971 "multibytecodec.c"
        var $32=$31+20; //@line 971 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 971 "multibytecodec.c"
        FUNCTION_TABLE[$30]($33); //@line 971 "multibytecodec.c"
        __label__ = 5; break; //@line 971 "multibytecodec.c"
      case 5: // $bb4
        var $34=$self_addr; //@line 972 "multibytecodec.c"
        var $35=$34; //@line 972 "multibytecodec.c"
        var $36=$35+4; //@line 972 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 972 "multibytecodec.c"
        var $38=$37+160; //@line 972 "multibytecodec.c"
        var $39=HEAP[$38]; //@line 972 "multibytecodec.c"
        var $40=$self_addr; //@line 972 "multibytecodec.c"
        var $41=$40; //@line 972 "multibytecodec.c"
        FUNCTION_TABLE[$39]($41); //@line 972 "multibytecodec.c"
        ;
        return; //@line 973 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbidecoder_decode($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 84; _memset(__stackBase__, 0, 84);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $data;
        var $wdata;
        var $pdata=__stackBase__+28;
        var $wsize;
        var $finalsize;
        var $size;
        var $origpending;
        var $final=__stackBase__+80;
        $self_addr=$self;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        $wdata=0; //@line 1028 "multibytecodec.c"
        $finalsize=0; //@line 1030 "multibytecodec.c"
        HEAP[$final]=0; //@line 1031 "multibytecodec.c"
        var $1=$args_addr; //@line 1033 "multibytecodec.c"
        var $2=$kwargs_addr; //@line 1033 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str32, _incrementalkwarglist, allocate([$pdata,0,0,0,$final,0,0,0], ["%struct.Py_buffer*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1033 "multibytecodec.c"
        var $4=($3)==0; //@line 1033 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1033 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 1035 "multibytecodec.c"
        __label__ = 34; break; //@line 1035 "multibytecodec.c"
      case 2: // $bb1
        var $5=$pdata; //@line 1036 "multibytecodec.c"
        var $6=HEAP[$5]; //@line 1036 "multibytecodec.c"
        $data=$6; //@line 1036 "multibytecodec.c"
        var $7=$pdata+8; //@line 1037 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 1037 "multibytecodec.c"
        $size=$8; //@line 1037 "multibytecodec.c"
        var $9=$buf+20; //@line 1039 "multibytecodec.c"
        HEAP[$9]=0; //@line 1039 "multibytecodec.c"
        var $10=$buf+20; //@line 1039 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 1039 "multibytecodec.c"
        var $12=$buf+24; //@line 1039 "multibytecodec.c"
        HEAP[$12]=$11; //@line 1039 "multibytecodec.c"
        var $13=$self_addr; //@line 1040 "multibytecodec.c"
        var $14=$13+32; //@line 1040 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 1040 "multibytecodec.c"
        $origpending=$15; //@line 1040 "multibytecodec.c"
        var $16=$self_addr; //@line 1042 "multibytecodec.c"
        var $17=$16+32; //@line 1042 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 1042 "multibytecodec.c"
        var $19=($18)==0; //@line 1042 "multibytecodec.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1042 "multibytecodec.c"
      case 3: // $bb2
        var $20=$size; //@line 1043 "multibytecodec.c"
        $wsize=$20; //@line 1043 "multibytecodec.c"
        var $21=$data; //@line 1044 "multibytecodec.c"
        $wdata=$21; //@line 1044 "multibytecodec.c"
        __label__ = 8; break; //@line 1044 "multibytecodec.c"
      case 4: // $bb3
        var $22=$self_addr; //@line 1047 "multibytecodec.c"
        var $23=$22+32; //@line 1047 "multibytecodec.c"
        var $24=HEAP[$23]; //@line 1047 "multibytecodec.c"
        var $25=2147483647 - ($24); //@line 1047 "multibytecodec.c"
        var $26=$size; //@line 1047 "multibytecodec.c"
        var $27=($25) < ($26); //@line 1047 "multibytecodec.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1047 "multibytecodec.c"
      case 5: // $bb4
        var $28=_PyErr_NoMemory(); //@line 1048 "multibytecodec.c"
        __label__ = 24; break; //@line 1048 "multibytecodec.c"
      case 6: // $bb5
        var $29=$self_addr; //@line 1051 "multibytecodec.c"
        var $30=$29+32; //@line 1051 "multibytecodec.c"
        var $31=HEAP[$30]; //@line 1051 "multibytecodec.c"
        var $32=$size; //@line 1051 "multibytecodec.c"
        var $33=($32) + ($31); //@line 1051 "multibytecodec.c"
        $wsize=$33; //@line 1051 "multibytecodec.c"
        var $34=$wsize; //@line 1052 "multibytecodec.c"
        var $35=_PyMem_Malloc($34); //@line 1052 "multibytecodec.c"
        $wdata=$35; //@line 1052 "multibytecodec.c"
        var $36=$wdata; //@line 1053 "multibytecodec.c"
        var $37=($36)==0; //@line 1053 "multibytecodec.c"
        if ($37) { __label__ = 24; break; } else { __label__ = 7; break; } //@line 1053 "multibytecodec.c"
      case 7: // $bb6
        var $38=$self_addr; //@line 1055 "multibytecodec.c"
        var $39=$38+32; //@line 1055 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 1055 "multibytecodec.c"
        var $41=$self_addr; //@line 1055 "multibytecodec.c"
        var $42=$41+24; //@line 1055 "multibytecodec.c"
        var $43=$42; //@line 1055 "multibytecodec.c"
        var $44=$wdata; //@line 1055 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($44, $43, $40, 1, 0); //@line 1055 "multibytecodec.c"
        var $45=$size; //@line 1056 "multibytecodec.c"
        var $46=$self_addr; //@line 1056 "multibytecodec.c"
        var $47=$46+32; //@line 1056 "multibytecodec.c"
        var $48=HEAP[$47]; //@line 1056 "multibytecodec.c"
        var $49=$wdata; //@line 1056 "multibytecodec.c"
        var $50=$49+$48; //@line 1056 "multibytecodec.c"
        var $51=$data; //@line 1056 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($50, $51, $45, 1, 0); //@line 1056 "multibytecodec.c"
        var $52=$self_addr; //@line 1057 "multibytecodec.c"
        var $53=$52+32; //@line 1057 "multibytecodec.c"
        HEAP[$53]=0; //@line 1057 "multibytecodec.c"
        __label__ = 8; break; //@line 1057 "multibytecodec.c"
      case 8: // $bb7
        var $54=$wdata; //@line 1060 "multibytecodec.c"
        var $55=$wsize; //@line 1060 "multibytecodec.c"
        var $56=_decoder_prepare_buffer($buf, $54, $55); //@line 1060 "multibytecodec.c"
        var $57=($56)!=0; //@line 1060 "multibytecodec.c"
        if ($57) { __label__ = 24; break; } else { __label__ = 9; break; } //@line 1060 "multibytecodec.c"
      case 9: // $bb8
        var $58=$self_addr; //@line 1063 "multibytecodec.c"
        var $59=_decoder_feed_buffer($58, $buf); //@line 1063 "multibytecodec.c"
        var $60=($59)!=0; //@line 1063 "multibytecodec.c"
        if ($60) { __label__ = 24; break; } else { __label__ = 10; break; } //@line 1063 "multibytecodec.c"
      case 10: // $bb9
        var $61=HEAP[$final]; //@line 1066 "multibytecodec.c"
        var $62=($61)!=0; //@line 1066 "multibytecodec.c"
        if ($62) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1066 "multibytecodec.c"
      case 11: // $bb10
        var $63=$buf; //@line 1066 "multibytecodec.c"
        var $64=HEAP[$63]; //@line 1066 "multibytecodec.c"
        var $65=$buf+8; //@line 1066 "multibytecodec.c"
        var $66=HEAP[$65]; //@line 1066 "multibytecodec.c"
        var $67=($64) < ($66); //@line 1066 "multibytecodec.c"
        if ($67) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1066 "multibytecodec.c"
      case 12: // $bb11
        var $68=$self_addr; //@line 1067 "multibytecodec.c"
        var $69=$68+20; //@line 1067 "multibytecodec.c"
        var $70=HEAP[$69]; //@line 1067 "multibytecodec.c"
        var $71=$self_addr; //@line 1067 "multibytecodec.c"
        var $72=$71+12; //@line 1067 "multibytecodec.c"
        var $73=$self_addr; //@line 1067 "multibytecodec.c"
        var $74=$73+8; //@line 1067 "multibytecodec.c"
        var $75=HEAP[$74]; //@line 1067 "multibytecodec.c"
        var $76=_multibytecodec_decerror($75, $72, $buf, $70, -2); //@line 1067 "multibytecodec.c"
        var $77=($76)!=0; //@line 1067 "multibytecodec.c"
        if ($77) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1067 "multibytecodec.c"
      case 13: // $bb12
        var $78=$origpending; //@line 1070 "multibytecodec.c"
        var $79=$self_addr; //@line 1070 "multibytecodec.c"
        var $80=$79+24; //@line 1070 "multibytecodec.c"
        var $81=$80; //@line 1070 "multibytecodec.c"
        var $82=$wdata; //@line 1070 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($81, $82, $78, 1, 0); //@line 1070 "multibytecodec.c"
        var $83=$self_addr; //@line 1071 "multibytecodec.c"
        var $84=$83+32; //@line 1071 "multibytecodec.c"
        var $85=$origpending; //@line 1071 "multibytecodec.c"
        HEAP[$84]=$85; //@line 1071 "multibytecodec.c"
        __label__ = 24; break; //@line 1071 "multibytecodec.c"
      case 14: // $bb13
        var $86=$buf; //@line 1076 "multibytecodec.c"
        var $87=HEAP[$86]; //@line 1076 "multibytecodec.c"
        var $88=$buf+8; //@line 1076 "multibytecodec.c"
        var $89=HEAP[$88]; //@line 1076 "multibytecodec.c"
        var $90=($87) < ($89); //@line 1076 "multibytecodec.c"
        if ($90) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1076 "multibytecodec.c"
      case 15: // $bb14
        var $91=$self_addr; //@line 1077 "multibytecodec.c"
        var $92=_decoder_append_pending($91, $buf); //@line 1077 "multibytecodec.c"
        var $93=($92)!=0; //@line 1077 "multibytecodec.c"
        if ($93) { __label__ = 24; break; } else { __label__ = 16; break; } //@line 1077 "multibytecodec.c"
      case 16: // $bb15
        var $94=$buf+12; //@line 1081 "multibytecodec.c"
        var $95=HEAP[$94]; //@line 1081 "multibytecodec.c"
        var $96=($95); //@line 1081 "multibytecodec.c"
        var $97=$buf+24; //@line 1081 "multibytecodec.c"
        var $98=HEAP[$97]; //@line 1081 "multibytecodec.c"
        var $99=$98; //@line 1081 "multibytecodec.c"
        var $100=$99+12; //@line 1081 "multibytecodec.c"
        var $101=HEAP[$100]; //@line 1081 "multibytecodec.c"
        var $102=($101); //@line 1081 "multibytecodec.c"
        var $103=($96) - ($102); //@line 1081 "multibytecodec.c"
        var $104=((($103)/2)|0); //@line 1081 "multibytecodec.c"
        $finalsize=$104; //@line 1081 "multibytecodec.c"
        var $105=$buf+24; //@line 1082 "multibytecodec.c"
        var $106=HEAP[$105]; //@line 1082 "multibytecodec.c"
        var $107=$106; //@line 1082 "multibytecodec.c"
        var $108=$107+8; //@line 1082 "multibytecodec.c"
        var $109=HEAP[$108]; //@line 1082 "multibytecodec.c"
        var $110=$finalsize; //@line 1082 "multibytecodec.c"
        var $111=($109)!=($110); //@line 1082 "multibytecodec.c"
        if ($111) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1082 "multibytecodec.c"
      case 17: // $bb16
        var $112=$buf+24; //@line 1083 "multibytecodec.c"
        var $113=$finalsize; //@line 1083 "multibytecodec.c"
        var $114=_PyUnicodeUCS2_Resize($112, $113); //@line 1083 "multibytecodec.c"
        var $115=($114)==-1; //@line 1083 "multibytecodec.c"
        if ($115) { __label__ = 24; break; } else { __label__ = 18; break; } //@line 1083 "multibytecodec.c"
      case 18: // $bb17
        _PyBuffer_Release($pdata); //@line 1086 "multibytecodec.c"
        var $116=$wdata; //@line 1087 "multibytecodec.c"
        var $117=$data; //@line 1087 "multibytecodec.c"
        var $118=($116)!=($117); //@line 1087 "multibytecodec.c"
        if ($118) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1087 "multibytecodec.c"
      case 19: // $bb18
        var $119=$wdata; //@line 1088 "multibytecodec.c"
        _PyMem_Free($119); //@line 1088 "multibytecodec.c"
        __label__ = 20; break; //@line 1088 "multibytecodec.c"
      case 20: // $bb19
        var $120=$buf+20; //@line 1089 "multibytecodec.c"
        var $121=HEAP[$120]; //@line 1089 "multibytecodec.c"
        var $122=($121)!=0; //@line 1089 "multibytecodec.c"
        if ($122) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 1089 "multibytecodec.c"
      case 21: // $bb20
        var $123=$buf+20; //@line 1089 "multibytecodec.c"
        var $124=HEAP[$123]; //@line 1089 "multibytecodec.c"
        var $125=$124; //@line 1089 "multibytecodec.c"
        var $126=HEAP[$125]; //@line 1089 "multibytecodec.c"
        var $127=($126) - 1; //@line 1089 "multibytecodec.c"
        var $128=$124; //@line 1089 "multibytecodec.c"
        HEAP[$128]=$127; //@line 1089 "multibytecodec.c"
        var $129=$124; //@line 1089 "multibytecodec.c"
        var $130=HEAP[$129]; //@line 1089 "multibytecodec.c"
        var $131=($130)==0; //@line 1089 "multibytecodec.c"
        if ($131) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1089 "multibytecodec.c"
      case 22: // $bb21
        var $132=$buf+20; //@line 1089 "multibytecodec.c"
        var $133=HEAP[$132]; //@line 1089 "multibytecodec.c"
        var $134=$133+4; //@line 1089 "multibytecodec.c"
        var $135=HEAP[$134]; //@line 1089 "multibytecodec.c"
        var $136=$135+24; //@line 1089 "multibytecodec.c"
        var $137=HEAP[$136]; //@line 1089 "multibytecodec.c"
        var $138=$buf+20; //@line 1089 "multibytecodec.c"
        var $139=HEAP[$138]; //@line 1089 "multibytecodec.c"
        FUNCTION_TABLE[$137]($139); //@line 1089 "multibytecodec.c"
        __label__ = 23; break; //@line 1089 "multibytecodec.c"
      case 23: // $bb22
        var $140=$buf+24; //@line 1090 "multibytecodec.c"
        var $141=HEAP[$140]; //@line 1090 "multibytecodec.c"
        $0=$141; //@line 1090 "multibytecodec.c"
        __label__ = 34; break; //@line 1090 "multibytecodec.c"
      case 24: // $errorexit
        _PyBuffer_Release($pdata); //@line 1093 "multibytecodec.c"
        var $142=$wdata; //@line 1094 "multibytecodec.c"
        var $143=($142)!=0; //@line 1094 "multibytecodec.c"
        if ($143) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 1094 "multibytecodec.c"
      case 25: // $bb23
        var $144=$wdata; //@line 1094 "multibytecodec.c"
        var $145=$data; //@line 1094 "multibytecodec.c"
        var $146=($144)!=($145); //@line 1094 "multibytecodec.c"
        if ($146) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1094 "multibytecodec.c"
      case 26: // $bb24
        var $147=$wdata; //@line 1095 "multibytecodec.c"
        _PyMem_Free($147); //@line 1095 "multibytecodec.c"
        __label__ = 27; break; //@line 1095 "multibytecodec.c"
      case 27: // $bb25
        var $148=$buf+20; //@line 1096 "multibytecodec.c"
        var $149=HEAP[$148]; //@line 1096 "multibytecodec.c"
        var $150=($149)!=0; //@line 1096 "multibytecodec.c"
        if ($150) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 1096 "multibytecodec.c"
      case 28: // $bb26
        var $151=$buf+20; //@line 1096 "multibytecodec.c"
        var $152=HEAP[$151]; //@line 1096 "multibytecodec.c"
        var $153=$152; //@line 1096 "multibytecodec.c"
        var $154=HEAP[$153]; //@line 1096 "multibytecodec.c"
        var $155=($154) - 1; //@line 1096 "multibytecodec.c"
        var $156=$152; //@line 1096 "multibytecodec.c"
        HEAP[$156]=$155; //@line 1096 "multibytecodec.c"
        var $157=$152; //@line 1096 "multibytecodec.c"
        var $158=HEAP[$157]; //@line 1096 "multibytecodec.c"
        var $159=($158)==0; //@line 1096 "multibytecodec.c"
        if ($159) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1096 "multibytecodec.c"
      case 29: // $bb27
        var $160=$buf+20; //@line 1096 "multibytecodec.c"
        var $161=HEAP[$160]; //@line 1096 "multibytecodec.c"
        var $162=$161+4; //@line 1096 "multibytecodec.c"
        var $163=HEAP[$162]; //@line 1096 "multibytecodec.c"
        var $164=$163+24; //@line 1096 "multibytecodec.c"
        var $165=HEAP[$164]; //@line 1096 "multibytecodec.c"
        var $166=$buf+20; //@line 1096 "multibytecodec.c"
        var $167=HEAP[$166]; //@line 1096 "multibytecodec.c"
        FUNCTION_TABLE[$165]($167); //@line 1096 "multibytecodec.c"
        __label__ = 30; break; //@line 1096 "multibytecodec.c"
      case 30: // $bb28
        var $168=$buf+24; //@line 1097 "multibytecodec.c"
        var $169=HEAP[$168]; //@line 1097 "multibytecodec.c"
        var $170=($169)!=0; //@line 1097 "multibytecodec.c"
        if ($170) { __label__ = 31; break; } else { __label__ = 33; break; } //@line 1097 "multibytecodec.c"
      case 31: // $bb29
        var $171=$buf+24; //@line 1097 "multibytecodec.c"
        var $172=HEAP[$171]; //@line 1097 "multibytecodec.c"
        var $173=$172; //@line 1097 "multibytecodec.c"
        var $174=HEAP[$173]; //@line 1097 "multibytecodec.c"
        var $175=($174) - 1; //@line 1097 "multibytecodec.c"
        var $176=$172; //@line 1097 "multibytecodec.c"
        HEAP[$176]=$175; //@line 1097 "multibytecodec.c"
        var $177=$172; //@line 1097 "multibytecodec.c"
        var $178=HEAP[$177]; //@line 1097 "multibytecodec.c"
        var $179=($178)==0; //@line 1097 "multibytecodec.c"
        if ($179) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1097 "multibytecodec.c"
      case 32: // $bb30
        var $180=$buf+24; //@line 1097 "multibytecodec.c"
        var $181=HEAP[$180]; //@line 1097 "multibytecodec.c"
        var $182=$181+4; //@line 1097 "multibytecodec.c"
        var $183=HEAP[$182]; //@line 1097 "multibytecodec.c"
        var $184=$183+24; //@line 1097 "multibytecodec.c"
        var $185=HEAP[$184]; //@line 1097 "multibytecodec.c"
        var $186=$buf+24; //@line 1097 "multibytecodec.c"
        var $187=HEAP[$186]; //@line 1097 "multibytecodec.c"
        FUNCTION_TABLE[$185]($187); //@line 1097 "multibytecodec.c"
        __label__ = 33; break; //@line 1097 "multibytecodec.c"
      case 33: // $bb31
        $0=0; //@line 1098 "multibytecodec.c"
        __label__ = 34; break; //@line 1098 "multibytecodec.c"
      case 34: // $bb32
        var $188=$0; //@line 1035 "multibytecodec.c"
        $retval=$188; //@line 1035 "multibytecodec.c"
        var $retval33=$retval; //@line 1035 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval33; //@line 1035 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbidecoder_reset($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 1104 "multibytecodec.c"
        var $2=$1+8; //@line 1104 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 1104 "multibytecodec.c"
        var $4=$3+32; //@line 1104 "multibytecodec.c"
        var $5=HEAP[$4]; //@line 1104 "multibytecodec.c"
        var $6=($5)!=0; //@line 1104 "multibytecodec.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1104 "multibytecodec.c"
      case 1: // $bb
        var $7=$self_addr; //@line 1104 "multibytecodec.c"
        var $8=$7+8; //@line 1104 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 1104 "multibytecodec.c"
        var $10=$9+32; //@line 1104 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 1104 "multibytecodec.c"
        var $12=$self_addr; //@line 1104 "multibytecodec.c"
        var $13=$12+8; //@line 1104 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 1104 "multibytecodec.c"
        var $15=$14+4; //@line 1104 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 1104 "multibytecodec.c"
        var $17=$self_addr; //@line 1104 "multibytecodec.c"
        var $18=$17+12; //@line 1104 "multibytecodec.c"
        var $19=FUNCTION_TABLE[$11]($18, $16); //@line 1104 "multibytecodec.c"
        var $20=($19)!=0; //@line 1104 "multibytecodec.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1104 "multibytecodec.c"
      case 2: // $bb1
        $0=0; //@line 1106 "multibytecodec.c"
        __label__ = 4; break; //@line 1106 "multibytecodec.c"
      case 3: // $bb2
        var $21=$self_addr; //@line 1107 "multibytecodec.c"
        var $22=$21+32; //@line 1107 "multibytecodec.c"
        HEAP[$22]=0; //@line 1107 "multibytecodec.c"
        var $23=HEAP[__Py_NoneStruct]; //@line 1109 "multibytecodec.c"
        var $24=($23) + 1; //@line 1109 "multibytecodec.c"
        HEAP[__Py_NoneStruct]=$24; //@line 1109 "multibytecodec.c"
        $0=__Py_NoneStruct; //@line 1109 "multibytecodec.c"
        __label__ = 4; break; //@line 1109 "multibytecodec.c"
      case 4: // $bb3
        var $25=$0; //@line 1106 "multibytecodec.c"
        $retval=$25; //@line 1106 "multibytecodec.c"
        var $retval4=$retval; //@line 1106 "multibytecodec.c"
        ;
        return $retval4; //@line 1106 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbidecoder_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $self;
        var $codec;
        var $errors=__stackBase__;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        $codec=0; //@line 1124 "multibytecodec.c"
        HEAP[$errors]=0; //@line 1125 "multibytecodec.c"
        var $1=$args_addr; //@line 1127 "multibytecodec.c"
        var $2=$kwds_addr; //@line 1127 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str33, _incnewkwarglist, allocate([$errors,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 1127 "multibytecodec.c"
        var $4=($3)==0; //@line 1127 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1127 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 1129 "multibytecodec.c"
        __label__ = 21; break; //@line 1129 "multibytecodec.c"
      case 2: // $bb1
        var $5=$type_addr; //@line 1131 "multibytecodec.c"
        var $6=$5+152; //@line 1131 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 1131 "multibytecodec.c"
        var $8=$type_addr; //@line 1131 "multibytecodec.c"
        var $9=FUNCTION_TABLE[$7]($8, 0); //@line 1131 "multibytecodec.c"
        var $10=$9; //@line 1131 "multibytecodec.c"
        $self=$10; //@line 1131 "multibytecodec.c"
        var $11=$self; //@line 1132 "multibytecodec.c"
        var $12=($11)==0; //@line 1132 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1132 "multibytecodec.c"
      case 3: // $bb2
        $0=0; //@line 1133 "multibytecodec.c"
        __label__ = 21; break; //@line 1133 "multibytecodec.c"
      case 4: // $bb3
        var $13=$type_addr; //@line 1135 "multibytecodec.c"
        var $14=$13; //@line 1135 "multibytecodec.c"
        var $15=_PyObject_GetAttrString($14, __str29); //@line 1135 "multibytecodec.c"
        $codec=$15; //@line 1135 "multibytecodec.c"
        var $16=$codec; //@line 1136 "multibytecodec.c"
        var $17=($16)==0; //@line 1136 "multibytecodec.c"
        if ($17) { __label__ = 13; break; } else { __label__ = 5; break; } //@line 1136 "multibytecodec.c"
      case 5: // $bb4
        var $18=$codec; //@line 1138 "multibytecodec.c"
        var $19=$18+4; //@line 1138 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 1138 "multibytecodec.c"
        var $21=($20)!=(_MultibyteCodec_Type); //@line 1138 "multibytecodec.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1138 "multibytecodec.c"
      case 6: // $bb5
        var $22=HEAP[_PyExc_TypeError]; //@line 1139 "multibytecodec.c"
        _PyErr_SetString($22, __str30); //@line 1139 "multibytecodec.c"
        __label__ = 13; break; //@line 1139 "multibytecodec.c"
      case 7: // $bb6
        var $23=$codec; //@line 1143 "multibytecodec.c"
        var $24=$23; //@line 1143 "multibytecodec.c"
        var $25=$24+8; //@line 1143 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1143 "multibytecodec.c"
        var $27=$self; //@line 1143 "multibytecodec.c"
        var $28=$27+8; //@line 1143 "multibytecodec.c"
        HEAP[$28]=$26; //@line 1143 "multibytecodec.c"
        var $29=$self; //@line 1144 "multibytecodec.c"
        var $30=$29+32; //@line 1144 "multibytecodec.c"
        HEAP[$30]=0; //@line 1144 "multibytecodec.c"
        var $31=HEAP[$errors]; //@line 1145 "multibytecodec.c"
        var $32=_internal_error_callback($31); //@line 1145 "multibytecodec.c"
        var $33=$self; //@line 1145 "multibytecodec.c"
        var $34=$33+20; //@line 1145 "multibytecodec.c"
        HEAP[$34]=$32; //@line 1145 "multibytecodec.c"
        var $35=$self; //@line 1146 "multibytecodec.c"
        var $36=$35+20; //@line 1146 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 1146 "multibytecodec.c"
        var $38=($37)==0; //@line 1146 "multibytecodec.c"
        if ($38) { __lastLabel__ = 7; __label__ = 14; break; } else { __lastLabel__ = 7; __label__ = 8; break; } //@line 1146 "multibytecodec.c"
      case 8: // $bb7
        var $39=$self; //@line 1148 "multibytecodec.c"
        var $40=$39+8; //@line 1148 "multibytecodec.c"
        var $41=HEAP[$40]; //@line 1148 "multibytecodec.c"
        var $42=$41+28; //@line 1148 "multibytecodec.c"
        var $43=HEAP[$42]; //@line 1148 "multibytecodec.c"
        var $44=($43)!=0; //@line 1148 "multibytecodec.c"
        if ($44) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1148 "multibytecodec.c"
      case 9: // $bb8
        var $45=$self; //@line 1148 "multibytecodec.c"
        var $46=$45+8; //@line 1148 "multibytecodec.c"
        var $47=HEAP[$46]; //@line 1148 "multibytecodec.c"
        var $48=$47+28; //@line 1148 "multibytecodec.c"
        var $49=HEAP[$48]; //@line 1148 "multibytecodec.c"
        var $50=$self; //@line 1148 "multibytecodec.c"
        var $51=$50+8; //@line 1148 "multibytecodec.c"
        var $52=HEAP[$51]; //@line 1148 "multibytecodec.c"
        var $53=$52+4; //@line 1148 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 1148 "multibytecodec.c"
        var $55=$self; //@line 1148 "multibytecodec.c"
        var $56=$55+12; //@line 1148 "multibytecodec.c"
        var $57=FUNCTION_TABLE[$49]($56, $54); //@line 1148 "multibytecodec.c"
        var $58=($57)!=0; //@line 1148 "multibytecodec.c"
        if ($58) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 1148 "multibytecodec.c"
      case 10: // $bb9
        var $59=$codec; //@line 1152 "multibytecodec.c"
        var $60=$59; //@line 1152 "multibytecodec.c"
        var $61=HEAP[$60]; //@line 1152 "multibytecodec.c"
        var $62=($61) - 1; //@line 1152 "multibytecodec.c"
        var $63=$codec; //@line 1152 "multibytecodec.c"
        var $64=$63; //@line 1152 "multibytecodec.c"
        HEAP[$64]=$62; //@line 1152 "multibytecodec.c"
        var $65=$codec; //@line 1152 "multibytecodec.c"
        var $66=$65; //@line 1152 "multibytecodec.c"
        var $67=HEAP[$66]; //@line 1152 "multibytecodec.c"
        var $68=($67)==0; //@line 1152 "multibytecodec.c"
        if ($68) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1152 "multibytecodec.c"
      case 11: // $bb10
        var $69=$codec; //@line 1152 "multibytecodec.c"
        var $70=$69+4; //@line 1152 "multibytecodec.c"
        var $71=HEAP[$70]; //@line 1152 "multibytecodec.c"
        var $72=$71+24; //@line 1152 "multibytecodec.c"
        var $73=HEAP[$72]; //@line 1152 "multibytecodec.c"
        var $74=$codec; //@line 1152 "multibytecodec.c"
        FUNCTION_TABLE[$73]($74); //@line 1152 "multibytecodec.c"
        __label__ = 12; break; //@line 1152 "multibytecodec.c"
      case 12: // $bb11
        var $75=$self; //@line 1153 "multibytecodec.c"
        var $76=$75; //@line 1153 "multibytecodec.c"
        $0=$76; //@line 1153 "multibytecodec.c"
        __label__ = 21; break; //@line 1153 "multibytecodec.c"
      case 13: // $errorexitthread_pre_split
        var $_pr=$self;
        __lastLabel__ = 13; __label__ = 14; break;
      case 14: // $errorexit
        var $77=__lastLabel__ == 13 ? $_pr : ($35);
        var $78=($77)!=0; //@line 1156 "multibytecodec.c"
        if ($78) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1156 "multibytecodec.c"
      case 15: // $bb12
        var $79=$self; //@line 1156 "multibytecodec.c"
        var $80=$79; //@line 1156 "multibytecodec.c"
        var $81=$80; //@line 1156 "multibytecodec.c"
        var $82=HEAP[$81]; //@line 1156 "multibytecodec.c"
        var $83=($82) - 1; //@line 1156 "multibytecodec.c"
        var $84=$80; //@line 1156 "multibytecodec.c"
        HEAP[$84]=$83; //@line 1156 "multibytecodec.c"
        var $85=$80; //@line 1156 "multibytecodec.c"
        var $86=HEAP[$85]; //@line 1156 "multibytecodec.c"
        var $87=($86)==0; //@line 1156 "multibytecodec.c"
        if ($87) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1156 "multibytecodec.c"
      case 16: // $bb13
        var $88=$self; //@line 1156 "multibytecodec.c"
        var $89=$88; //@line 1156 "multibytecodec.c"
        var $90=$89+4; //@line 1156 "multibytecodec.c"
        var $91=HEAP[$90]; //@line 1156 "multibytecodec.c"
        var $92=$91+24; //@line 1156 "multibytecodec.c"
        var $93=HEAP[$92]; //@line 1156 "multibytecodec.c"
        var $94=$self; //@line 1156 "multibytecodec.c"
        var $95=$94; //@line 1156 "multibytecodec.c"
        FUNCTION_TABLE[$93]($95); //@line 1156 "multibytecodec.c"
        __label__ = 17; break; //@line 1156 "multibytecodec.c"
      case 17: // $bb14
        var $96=$codec; //@line 1157 "multibytecodec.c"
        var $97=($96)!=0; //@line 1157 "multibytecodec.c"
        if ($97) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 1157 "multibytecodec.c"
      case 18: // $bb15
        var $98=$codec; //@line 1157 "multibytecodec.c"
        var $99=$98; //@line 1157 "multibytecodec.c"
        var $100=HEAP[$99]; //@line 1157 "multibytecodec.c"
        var $101=($100) - 1; //@line 1157 "multibytecodec.c"
        var $102=$codec; //@line 1157 "multibytecodec.c"
        var $103=$102; //@line 1157 "multibytecodec.c"
        HEAP[$103]=$101; //@line 1157 "multibytecodec.c"
        var $104=$codec; //@line 1157 "multibytecodec.c"
        var $105=$104; //@line 1157 "multibytecodec.c"
        var $106=HEAP[$105]; //@line 1157 "multibytecodec.c"
        var $107=($106)==0; //@line 1157 "multibytecodec.c"
        if ($107) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1157 "multibytecodec.c"
      case 19: // $bb16
        var $108=$codec; //@line 1157 "multibytecodec.c"
        var $109=$108+4; //@line 1157 "multibytecodec.c"
        var $110=HEAP[$109]; //@line 1157 "multibytecodec.c"
        var $111=$110+24; //@line 1157 "multibytecodec.c"
        var $112=HEAP[$111]; //@line 1157 "multibytecodec.c"
        var $113=$codec; //@line 1157 "multibytecodec.c"
        FUNCTION_TABLE[$112]($113); //@line 1157 "multibytecodec.c"
        __label__ = 20; break; //@line 1157 "multibytecodec.c"
      case 20: // $bb17
        $0=0; //@line 1158 "multibytecodec.c"
        __label__ = 21; break; //@line 1158 "multibytecodec.c"
      case 21: // $bb18
        var $114=$0; //@line 1129 "multibytecodec.c"
        $retval=$114; //@line 1129 "multibytecodec.c"
        var $retval19=$retval; //@line 1129 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1129 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbidecoder_init($self, $args, $kwds) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    $0=0; //@line 1164 "multibytecodec.c"
    var $1=$0; //@line 1164 "multibytecodec.c"
    $retval=$1; //@line 1164 "multibytecodec.c"
    var $retval1=$retval; //@line 1164 "multibytecodec.c"
    ;
    return $retval1; //@line 1164 "multibytecodec.c"
  }
  

  function _mbidecoder_traverse($self, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        $self_addr=$self;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$self_addr; //@line 1171 "multibytecodec.c"
        var $2=$1+20; //@line 1171 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 1171 "multibytecodec.c"
        var $4=($3)==0; //@line 1171 "multibytecodec.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1171 "multibytecodec.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1171 "multibytecodec.c"
        var $6=$5+20; //@line 1171 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 1171 "multibytecodec.c"
        var $8=($7) > 3; //@line 1171 "multibytecodec.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1171 "multibytecodec.c"
      case 2: // $bb1
        var $9=$self_addr; //@line 1172 "multibytecodec.c"
        var $10=$9+20; //@line 1172 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 1172 "multibytecodec.c"
        var $12=($11)!=0; //@line 1172 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1172 "multibytecodec.c"
      case 3: // $bb2
        var $13=$self_addr; //@line 1172 "multibytecodec.c"
        var $14=$13+20; //@line 1172 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 1172 "multibytecodec.c"
        var $16=$visit_addr; //@line 1172 "multibytecodec.c"
        var $17=$arg_addr; //@line 1172 "multibytecodec.c"
        var $18=FUNCTION_TABLE[$16]($15, $17); //@line 1172 "multibytecodec.c"
        $vret=$18; //@line 1172 "multibytecodec.c"
        var $19=$vret; //@line 1172 "multibytecodec.c"
        var $20=($19)!=0; //@line 1172 "multibytecodec.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1172 "multibytecodec.c"
      case 4: // $bb3
        var $21=$vret; //@line 1172 "multibytecodec.c"
        $0=$21; //@line 1172 "multibytecodec.c"
        __label__ = 6; break; //@line 1172 "multibytecodec.c"
      case 5: // $bb4
        $0=0; //@line 1173 "multibytecodec.c"
        __label__ = 6; break; //@line 1173 "multibytecodec.c"
      case 6: // $bb5
        var $22=$0; //@line 1172 "multibytecodec.c"
        $retval=$22; //@line 1172 "multibytecodec.c"
        var $retval6=$retval; //@line 1172 "multibytecodec.c"
        ;
        return $retval6; //@line 1172 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbidecoder_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 1179 "multibytecodec.c"
        var $1=$0; //@line 1179 "multibytecodec.c"
        _PyObject_GC_UnTrack($1); //@line 1179 "multibytecodec.c"
        var $2=$self_addr; //@line 1180 "multibytecodec.c"
        var $3=$2+20; //@line 1180 "multibytecodec.c"
        var $4=HEAP[$3]; //@line 1180 "multibytecodec.c"
        var $5=($4)!=0; //@line 1180 "multibytecodec.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 1180 "multibytecodec.c"
      case 1: // $bb
        var $6=$self_addr; //@line 1180 "multibytecodec.c"
        var $7=$6+20; //@line 1180 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 1180 "multibytecodec.c"
        var $9=($8)==0; //@line 1180 "multibytecodec.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1180 "multibytecodec.c"
      case 2: // $bb1
        var $10=$self_addr; //@line 1180 "multibytecodec.c"
        var $11=$10+20; //@line 1180 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1180 "multibytecodec.c"
        var $13=($12) > 3; //@line 1180 "multibytecodec.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1180 "multibytecodec.c"
      case 3: // $bb2
        var $14=$self_addr; //@line 1180 "multibytecodec.c"
        var $15=$14+20; //@line 1180 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 1180 "multibytecodec.c"
        var $17=$16; //@line 1180 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 1180 "multibytecodec.c"
        var $19=($18) - 1; //@line 1180 "multibytecodec.c"
        var $20=$16; //@line 1180 "multibytecodec.c"
        HEAP[$20]=$19; //@line 1180 "multibytecodec.c"
        var $21=$16; //@line 1180 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 1180 "multibytecodec.c"
        var $23=($22)==0; //@line 1180 "multibytecodec.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1180 "multibytecodec.c"
      case 4: // $bb3
        var $24=$self_addr; //@line 1180 "multibytecodec.c"
        var $25=$24+20; //@line 1180 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1180 "multibytecodec.c"
        var $27=$26+4; //@line 1180 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 1180 "multibytecodec.c"
        var $29=$28+24; //@line 1180 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 1180 "multibytecodec.c"
        var $31=$self_addr; //@line 1180 "multibytecodec.c"
        var $32=$31+20; //@line 1180 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 1180 "multibytecodec.c"
        FUNCTION_TABLE[$30]($33); //@line 1180 "multibytecodec.c"
        __label__ = 5; break; //@line 1180 "multibytecodec.c"
      case 5: // $bb4
        var $34=$self_addr; //@line 1181 "multibytecodec.c"
        var $35=$34; //@line 1181 "multibytecodec.c"
        var $36=$35+4; //@line 1181 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 1181 "multibytecodec.c"
        var $38=$37+160; //@line 1181 "multibytecodec.c"
        var $39=HEAP[$38]; //@line 1181 "multibytecodec.c"
        var $40=$self_addr; //@line 1181 "multibytecodec.c"
        var $41=$40; //@line 1181 "multibytecodec.c"
        FUNCTION_TABLE[$39]($41); //@line 1181 "multibytecodec.c"
        ;
        return; //@line 1182 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_iread($self, $method, $sizehint) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; _memset(__stackBase__, 0, 28);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $method_addr;
        var $sizehint_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $cres;
        var $rsize;
        var $finalsize;
        var $endoffile;
        var $ctr;
        var $ctrdata;
        $self_addr=$self;
        $method_addr=$method;
        $sizehint_addr=$sizehint;
        $finalsize=0; //@line 1238 "multibytecodec.c"
        var $1=$sizehint_addr; //@line 1240 "multibytecodec.c"
        var $2=($1)==0; //@line 1240 "multibytecodec.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1240 "multibytecodec.c"
      case 1: // $bb
        var $3=_PyUnicodeUCS2_FromUnicode(0, 0); //@line 1241 "multibytecodec.c"
        $0=$3; //@line 1241 "multibytecodec.c"
        __label__ = 50; break; //@line 1241 "multibytecodec.c"
      case 2: // $bb1
        var $4=$buf+20; //@line 1243 "multibytecodec.c"
        HEAP[$4]=0; //@line 1243 "multibytecodec.c"
        var $5=$buf+20; //@line 1243 "multibytecodec.c"
        var $6=HEAP[$5]; //@line 1243 "multibytecodec.c"
        var $7=$buf+24; //@line 1243 "multibytecodec.c"
        HEAP[$7]=$6; //@line 1243 "multibytecodec.c"
        $cres=0; //@line 1244 "multibytecodec.c"
        var $_pr=$sizehint_addr;
        var $8=$buf; //@line 1299 "multibytecodec.c"
        var $9=$buf+8; //@line 1299 "multibytecodec.c"
        var $10=$buf; //@line 1305 "multibytecodec.c"
        var $11=$buf+8; //@line 1305 "multibytecodec.c"
        var $12=$buf+12; //@line 1311 "multibytecodec.c"
        var $13=$buf+24; //@line 1311 "multibytecodec.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 1244 "multibytecodec.c"
      case 3: // $bb2
        var $14=__lastLabel__ == 30 ? 1 : ($_pr);
        var $15=($14) < 0; //@line 1249 "multibytecodec.c"
        var $16=$method_addr; //@line 1250 "multibytecodec.c"
        var $17=$self_addr; //@line 1250 "multibytecodec.c"
        var $18=$17+36; //@line 1250 "multibytecodec.c"
        var $19=HEAP[$18]; //@line 1250 "multibytecodec.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1249 "multibytecodec.c"
      case 4: // $bb3
        var $20=__PyObject_CallMethod_SizeT($19, $16, 0, allocate(1, "i32", ALLOC_STACK)); //@line 1250 "multibytecodec.c"
        $cres=$20; //@line 1250 "multibytecodec.c"
        __lastLabel__ = 4; __label__ = 6; break; //@line 1250 "multibytecodec.c"
      case 5: // $bb4
        var $21=$sizehint_addr; //@line 1253 "multibytecodec.c"
        var $22=__PyObject_CallMethod_SizeT($19, $16, __str35, allocate([$21,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1253 "multibytecodec.c"
        $cres=$22; //@line 1253 "multibytecodec.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 1253 "multibytecodec.c"
      case 6: // $bb5
        var $23=__lastLabel__ == 5 ? $22 : ($20);
        var $24=($23)==0; //@line 1255 "multibytecodec.c"
        if ($24) { __label__ = 40; break; } else { __label__ = 7; break; } //@line 1255 "multibytecodec.c"
      case 7: // $bb6
        var $25=$cres; //@line 1258 "multibytecodec.c"
        var $26=$25+4; //@line 1258 "multibytecodec.c"
        var $27=HEAP[$26]; //@line 1258 "multibytecodec.c"
        var $28=$27+84; //@line 1258 "multibytecodec.c"
        var $29=HEAP[$28]; //@line 1258 "multibytecodec.c"
        var $30=($29) & 134217728; //@line 1258 "multibytecodec.c"
        var $31=($30)==0; //@line 1258 "multibytecodec.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1258 "multibytecodec.c"
      case 8: // $bb7
        var $32=HEAP[_PyExc_TypeError]; //@line 1259 "multibytecodec.c"
        _PyErr_SetString($32, __str36); //@line 1259 "multibytecodec.c"
        __label__ = 40; break; //@line 1259 "multibytecodec.c"
      case 9: // $bb8
        var $33=$cres; //@line 1265 "multibytecodec.c"
        var $34=$33; //@line 1265 "multibytecodec.c"
        var $35=$34+8; //@line 1265 "multibytecodec.c"
        var $36=HEAP[$35]; //@line 1265 "multibytecodec.c"
        var $37=($36)==0; //@line 1265 "multibytecodec.c"
        var $38=($37); //@line 1265 "multibytecodec.c"
        $endoffile=$38; //@line 1265 "multibytecodec.c"
        var $39=$self_addr; //@line 1267 "multibytecodec.c"
        var $40=$39+32; //@line 1267 "multibytecodec.c"
        var $41=HEAP[$40]; //@line 1267 "multibytecodec.c"
        var $42=($41) > 0; //@line 1267 "multibytecodec.c"
        if ($42) { __label__ = 10; break; } else { __label__ = 16; break; } //@line 1267 "multibytecodec.c"
      case 10: // $bb9
        var $43=$cres; //@line 1271 "multibytecodec.c"
        var $44=$43; //@line 1271 "multibytecodec.c"
        var $45=$44+8; //@line 1271 "multibytecodec.c"
        var $46=HEAP[$45]; //@line 1271 "multibytecodec.c"
        var $47=$self_addr; //@line 1271 "multibytecodec.c"
        var $48=$47+32; //@line 1271 "multibytecodec.c"
        var $49=HEAP[$48]; //@line 1271 "multibytecodec.c"
        var $50=2147483647 - ($49); //@line 1271 "multibytecodec.c"
        var $51=($46) > ($50); //@line 1271 "multibytecodec.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1271 "multibytecodec.c"
      case 11: // $bb10
        var $52=_PyErr_NoMemory(); //@line 1272 "multibytecodec.c"
        __label__ = 40; break; //@line 1272 "multibytecodec.c"
      case 12: // $bb11
        var $53=$cres; //@line 1275 "multibytecodec.c"
        var $54=$53; //@line 1275 "multibytecodec.c"
        var $55=$54+8; //@line 1275 "multibytecodec.c"
        var $56=HEAP[$55]; //@line 1275 "multibytecodec.c"
        var $57=$self_addr; //@line 1275 "multibytecodec.c"
        var $58=$57+32; //@line 1275 "multibytecodec.c"
        var $59=HEAP[$58]; //@line 1275 "multibytecodec.c"
        var $60=($59) + ($56); //@line 1275 "multibytecodec.c"
        $rsize=$60; //@line 1275 "multibytecodec.c"
        var $61=$rsize; //@line 1276 "multibytecodec.c"
        var $62=_PyString_FromStringAndSize(0, $61); //@line 1276 "multibytecodec.c"
        $ctr=$62; //@line 1276 "multibytecodec.c"
        var $63=$ctr; //@line 1277 "multibytecodec.c"
        var $64=($63)==0; //@line 1277 "multibytecodec.c"
        if ($64) { __label__ = 40; break; } else { __label__ = 13; break; } //@line 1277 "multibytecodec.c"
      case 13: // $bb12
        var $65=$ctr; //@line 1279 "multibytecodec.c"
        var $66=$65; //@line 1279 "multibytecodec.c"
        var $67=$66+20; //@line 1279 "multibytecodec.c"
        var $68=$67; //@line 1279 "multibytecodec.c"
        $ctrdata=$68; //@line 1279 "multibytecodec.c"
        var $69=$self_addr; //@line 1280 "multibytecodec.c"
        var $70=$69+32; //@line 1280 "multibytecodec.c"
        var $71=HEAP[$70]; //@line 1280 "multibytecodec.c"
        var $72=$self_addr; //@line 1280 "multibytecodec.c"
        var $73=$72+24; //@line 1280 "multibytecodec.c"
        var $74=$73; //@line 1280 "multibytecodec.c"
        var $75=$ctrdata; //@line 1280 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($75, $74, $71, 1, 0); //@line 1280 "multibytecodec.c"
        var $76=$cres; //@line 1281 "multibytecodec.c"
        var $77=$76; //@line 1281 "multibytecodec.c"
        var $78=$77+8; //@line 1281 "multibytecodec.c"
        var $79=HEAP[$78]; //@line 1281 "multibytecodec.c"
        var $80=$cres; //@line 1281 "multibytecodec.c"
        var $81=$80; //@line 1281 "multibytecodec.c"
        var $82=$81+20; //@line 1281 "multibytecodec.c"
        var $83=$82; //@line 1281 "multibytecodec.c"
        var $84=$self_addr; //@line 1281 "multibytecodec.c"
        var $85=$84+32; //@line 1281 "multibytecodec.c"
        var $86=HEAP[$85]; //@line 1281 "multibytecodec.c"
        var $87=$ctrdata; //@line 1281 "multibytecodec.c"
        var $88=$87+$86; //@line 1281 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($88, $83, $79, 1, 0); //@line 1281 "multibytecodec.c"
        var $89=$cres; //@line 1284 "multibytecodec.c"
        var $90=$89; //@line 1284 "multibytecodec.c"
        var $91=HEAP[$90]; //@line 1284 "multibytecodec.c"
        var $92=($91) - 1; //@line 1284 "multibytecodec.c"
        var $93=$cres; //@line 1284 "multibytecodec.c"
        var $94=$93; //@line 1284 "multibytecodec.c"
        HEAP[$94]=$92; //@line 1284 "multibytecodec.c"
        var $95=$cres; //@line 1284 "multibytecodec.c"
        var $96=$95; //@line 1284 "multibytecodec.c"
        var $97=HEAP[$96]; //@line 1284 "multibytecodec.c"
        var $98=($97)==0; //@line 1284 "multibytecodec.c"
        if ($98) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1284 "multibytecodec.c"
      case 14: // $bb13
        var $99=$cres; //@line 1284 "multibytecodec.c"
        var $100=$99+4; //@line 1284 "multibytecodec.c"
        var $101=HEAP[$100]; //@line 1284 "multibytecodec.c"
        var $102=$101+24; //@line 1284 "multibytecodec.c"
        var $103=HEAP[$102]; //@line 1284 "multibytecodec.c"
        var $104=$cres; //@line 1284 "multibytecodec.c"
        FUNCTION_TABLE[$103]($104); //@line 1284 "multibytecodec.c"
        __label__ = 15; break; //@line 1284 "multibytecodec.c"
      case 15: // $bb14
        var $105=$ctr; //@line 1285 "multibytecodec.c"
        $cres=$105; //@line 1285 "multibytecodec.c"
        var $106=$self_addr; //@line 1286 "multibytecodec.c"
        var $107=$106+32; //@line 1286 "multibytecodec.c"
        HEAP[$107]=0; //@line 1286 "multibytecodec.c"
        __label__ = 16; break; //@line 1286 "multibytecodec.c"
      case 16: // $bb15
        var $108=$cres; //@line 1289 "multibytecodec.c"
        var $109=$108; //@line 1289 "multibytecodec.c"
        var $110=$109+8; //@line 1289 "multibytecodec.c"
        var $111=HEAP[$110]; //@line 1289 "multibytecodec.c"
        $rsize=$111; //@line 1289 "multibytecodec.c"
        var $112=$cres; //@line 1290 "multibytecodec.c"
        var $113=$112; //@line 1290 "multibytecodec.c"
        var $114=$113+20; //@line 1290 "multibytecodec.c"
        var $115=$114; //@line 1290 "multibytecodec.c"
        var $116=$rsize; //@line 1290 "multibytecodec.c"
        var $117=_decoder_prepare_buffer($buf, $115, $116); //@line 1290 "multibytecodec.c"
        var $118=($117)!=0; //@line 1290 "multibytecodec.c"
        if ($118) { __label__ = 40; break; } else { __label__ = 17; break; } //@line 1290 "multibytecodec.c"
      case 17: // $bb16
        var $119=$rsize; //@line 1294 "multibytecodec.c"
        var $120=($119) > 0; //@line 1294 "multibytecodec.c"
        if ($120) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1294 "multibytecodec.c"
      case 18: // $bb17
        var $121=$self_addr; //@line 1294 "multibytecodec.c"
        var $122=$121; //@line 1294 "multibytecodec.c"
        var $123=_decoder_feed_buffer($122, $buf); //@line 1294 "multibytecodec.c"
        var $124=($123)!=0; //@line 1294 "multibytecodec.c"
        if ($124) { __label__ = 40; break; } else { __label__ = 19; break; } //@line 1294 "multibytecodec.c"
      case 19: // $bb18
        var $125=$endoffile; //@line 1298 "multibytecodec.c"
        var $126=($125)!=0; //@line 1298 "multibytecodec.c"
        if ($126) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 1298 "multibytecodec.c"
      case 20: // $bb19
        var $127=$sizehint_addr; //@line 1298 "multibytecodec.c"
        var $128=($127) < 0; //@line 1298 "multibytecodec.c"
        if ($128) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 1298 "multibytecodec.c"
      case 21: // $bb20
        var $129=HEAP[$8]; //@line 1299 "multibytecodec.c"
        var $130=HEAP[$9]; //@line 1299 "multibytecodec.c"
        var $131=($129) < ($130); //@line 1299 "multibytecodec.c"
        if ($131) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1299 "multibytecodec.c"
      case 22: // $bb21
        var $132=$self_addr; //@line 1299 "multibytecodec.c"
        var $133=$132+20; //@line 1299 "multibytecodec.c"
        var $134=HEAP[$133]; //@line 1299 "multibytecodec.c"
        var $135=$self_addr; //@line 1299 "multibytecodec.c"
        var $136=$135+12; //@line 1299 "multibytecodec.c"
        var $137=$self_addr; //@line 1299 "multibytecodec.c"
        var $138=$137+8; //@line 1299 "multibytecodec.c"
        var $139=HEAP[$138]; //@line 1299 "multibytecodec.c"
        var $140=_multibytecodec_decerror($139, $136, $buf, $134, -2); //@line 1299 "multibytecodec.c"
        var $141=($140)!=0; //@line 1299 "multibytecodec.c"
        if ($141) { __label__ = 40; break; } else { __label__ = 23; break; } //@line 1299 "multibytecodec.c"
      case 23: // $bb22
        var $142=HEAP[$10]; //@line 1305 "multibytecodec.c"
        var $143=HEAP[$11]; //@line 1305 "multibytecodec.c"
        var $144=($142) < ($143); //@line 1305 "multibytecodec.c"
        if ($144) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1305 "multibytecodec.c"
      case 24: // $bb23
        var $145=$self_addr; //@line 1306 "multibytecodec.c"
        var $146=$145; //@line 1306 "multibytecodec.c"
        var $147=_decoder_append_pending($146, $buf); //@line 1306 "multibytecodec.c"
        var $148=($147)!=0; //@line 1306 "multibytecodec.c"
        if ($148) { __label__ = 40; break; } else { __label__ = 25; break; } //@line 1306 "multibytecodec.c"
      case 25: // $bb24
        var $149=HEAP[$12]; //@line 1311 "multibytecodec.c"
        var $150=($149); //@line 1311 "multibytecodec.c"
        var $151=HEAP[$13]; //@line 1311 "multibytecodec.c"
        var $152=$151; //@line 1311 "multibytecodec.c"
        var $153=$152+12; //@line 1311 "multibytecodec.c"
        var $154=HEAP[$153]; //@line 1311 "multibytecodec.c"
        var $155=($154); //@line 1311 "multibytecodec.c"
        var $156=($150) - ($155); //@line 1311 "multibytecodec.c"
        var $157=((($156)/2)|0); //@line 1311 "multibytecodec.c"
        $finalsize=$157; //@line 1311 "multibytecodec.c"
        var $158=$cres; //@line 1313 "multibytecodec.c"
        var $159=$158; //@line 1313 "multibytecodec.c"
        var $160=HEAP[$159]; //@line 1313 "multibytecodec.c"
        var $161=($160) - 1; //@line 1313 "multibytecodec.c"
        var $162=$cres; //@line 1313 "multibytecodec.c"
        var $163=$162; //@line 1313 "multibytecodec.c"
        HEAP[$163]=$161; //@line 1313 "multibytecodec.c"
        var $164=$cres; //@line 1313 "multibytecodec.c"
        var $165=$164; //@line 1313 "multibytecodec.c"
        var $166=HEAP[$165]; //@line 1313 "multibytecodec.c"
        var $167=($166)==0; //@line 1313 "multibytecodec.c"
        if ($167) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1313 "multibytecodec.c"
      case 26: // $bb25
        var $168=$cres; //@line 1313 "multibytecodec.c"
        var $169=$168+4; //@line 1313 "multibytecodec.c"
        var $170=HEAP[$169]; //@line 1313 "multibytecodec.c"
        var $171=$170+24; //@line 1313 "multibytecodec.c"
        var $172=HEAP[$171]; //@line 1313 "multibytecodec.c"
        var $173=$cres; //@line 1313 "multibytecodec.c"
        FUNCTION_TABLE[$172]($173); //@line 1313 "multibytecodec.c"
        __label__ = 27; break; //@line 1313 "multibytecodec.c"
      case 27: // $bb26
        $cres=0; //@line 1314 "multibytecodec.c"
        var $174=$sizehint_addr; //@line 1316 "multibytecodec.c"
        var $175=($174) < 0; //@line 1316 "multibytecodec.c"
        if ($175) { __label__ = 31; break; } else { __label__ = 28; break; } //@line 1316 "multibytecodec.c"
      case 28: // $bb27
        var $176=$finalsize; //@line 1316 "multibytecodec.c"
        var $177=($176)!=0; //@line 1316 "multibytecodec.c"
        if ($177) { __label__ = 31; break; } else { __label__ = 29; break; } //@line 1316 "multibytecodec.c"
      case 29: // $bb28
        var $178=$rsize; //@line 1316 "multibytecodec.c"
        var $179=($178)==0; //@line 1316 "multibytecodec.c"
        if ($179) { __label__ = 31; break; } else { __label__ = 30; break; } //@line 1316 "multibytecodec.c"
      case 30: // $bb29
        $sizehint_addr=1; //@line 1319 "multibytecodec.c"
        __lastLabel__ = 30; __label__ = 3; break; //@line 1319 "multibytecodec.c"
      case 31: // $bb30
        var $180=$buf+24; //@line 1322 "multibytecodec.c"
        var $181=HEAP[$180]; //@line 1322 "multibytecodec.c"
        var $182=$181; //@line 1322 "multibytecodec.c"
        var $183=$182+8; //@line 1322 "multibytecodec.c"
        var $184=HEAP[$183]; //@line 1322 "multibytecodec.c"
        var $185=$finalsize; //@line 1322 "multibytecodec.c"
        var $186=($184)!=($185); //@line 1322 "multibytecodec.c"
        if ($186) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1322 "multibytecodec.c"
      case 32: // $bb31
        var $187=$buf+24; //@line 1323 "multibytecodec.c"
        var $188=$finalsize; //@line 1323 "multibytecodec.c"
        var $189=_PyUnicodeUCS2_Resize($187, $188); //@line 1323 "multibytecodec.c"
        var $190=($189)==-1; //@line 1323 "multibytecodec.c"
        if ($190) { __label__ = 40; break; } else { __label__ = 33; break; } //@line 1323 "multibytecodec.c"
      case 33: // $bb32
        var $191=$cres; //@line 1326 "multibytecodec.c"
        var $192=($191)!=0; //@line 1326 "multibytecodec.c"
        if ($192) { __label__ = 34; break; } else { __label__ = 36; break; } //@line 1326 "multibytecodec.c"
      case 34: // $bb33
        var $193=$cres; //@line 1326 "multibytecodec.c"
        var $194=$193; //@line 1326 "multibytecodec.c"
        var $195=HEAP[$194]; //@line 1326 "multibytecodec.c"
        var $196=($195) - 1; //@line 1326 "multibytecodec.c"
        var $197=$cres; //@line 1326 "multibytecodec.c"
        var $198=$197; //@line 1326 "multibytecodec.c"
        HEAP[$198]=$196; //@line 1326 "multibytecodec.c"
        var $199=$cres; //@line 1326 "multibytecodec.c"
        var $200=$199; //@line 1326 "multibytecodec.c"
        var $201=HEAP[$200]; //@line 1326 "multibytecodec.c"
        var $202=($201)==0; //@line 1326 "multibytecodec.c"
        if ($202) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1326 "multibytecodec.c"
      case 35: // $bb34
        var $203=$cres; //@line 1326 "multibytecodec.c"
        var $204=$203+4; //@line 1326 "multibytecodec.c"
        var $205=HEAP[$204]; //@line 1326 "multibytecodec.c"
        var $206=$205+24; //@line 1326 "multibytecodec.c"
        var $207=HEAP[$206]; //@line 1326 "multibytecodec.c"
        var $208=$cres; //@line 1326 "multibytecodec.c"
        FUNCTION_TABLE[$207]($208); //@line 1326 "multibytecodec.c"
        __label__ = 36; break; //@line 1326 "multibytecodec.c"
      case 36: // $bb35
        var $209=$buf+20; //@line 1327 "multibytecodec.c"
        var $210=HEAP[$209]; //@line 1327 "multibytecodec.c"
        var $211=($210)!=0; //@line 1327 "multibytecodec.c"
        if ($211) { __label__ = 37; break; } else { __label__ = 39; break; } //@line 1327 "multibytecodec.c"
      case 37: // $bb36
        var $212=$buf+20; //@line 1327 "multibytecodec.c"
        var $213=HEAP[$212]; //@line 1327 "multibytecodec.c"
        var $214=$213; //@line 1327 "multibytecodec.c"
        var $215=HEAP[$214]; //@line 1327 "multibytecodec.c"
        var $216=($215) - 1; //@line 1327 "multibytecodec.c"
        var $217=$213; //@line 1327 "multibytecodec.c"
        HEAP[$217]=$216; //@line 1327 "multibytecodec.c"
        var $218=$213; //@line 1327 "multibytecodec.c"
        var $219=HEAP[$218]; //@line 1327 "multibytecodec.c"
        var $220=($219)==0; //@line 1327 "multibytecodec.c"
        if ($220) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1327 "multibytecodec.c"
      case 38: // $bb37
        var $221=$buf+20; //@line 1327 "multibytecodec.c"
        var $222=HEAP[$221]; //@line 1327 "multibytecodec.c"
        var $223=$222+4; //@line 1327 "multibytecodec.c"
        var $224=HEAP[$223]; //@line 1327 "multibytecodec.c"
        var $225=$224+24; //@line 1327 "multibytecodec.c"
        var $226=HEAP[$225]; //@line 1327 "multibytecodec.c"
        var $227=$buf+20; //@line 1327 "multibytecodec.c"
        var $228=HEAP[$227]; //@line 1327 "multibytecodec.c"
        FUNCTION_TABLE[$226]($228); //@line 1327 "multibytecodec.c"
        __label__ = 39; break; //@line 1327 "multibytecodec.c"
      case 39: // $bb38
        var $229=$buf+24; //@line 1328 "multibytecodec.c"
        var $230=HEAP[$229]; //@line 1328 "multibytecodec.c"
        $0=$230; //@line 1328 "multibytecodec.c"
        __label__ = 50; break; //@line 1328 "multibytecodec.c"
      case 40: // $errorexit
        var $231=$cres; //@line 1331 "multibytecodec.c"
        var $232=($231)!=0; //@line 1331 "multibytecodec.c"
        if ($232) { __label__ = 41; break; } else { __label__ = 43; break; } //@line 1331 "multibytecodec.c"
      case 41: // $bb39
        var $233=$cres; //@line 1331 "multibytecodec.c"
        var $234=$233; //@line 1331 "multibytecodec.c"
        var $235=HEAP[$234]; //@line 1331 "multibytecodec.c"
        var $236=($235) - 1; //@line 1331 "multibytecodec.c"
        var $237=$cres; //@line 1331 "multibytecodec.c"
        var $238=$237; //@line 1331 "multibytecodec.c"
        HEAP[$238]=$236; //@line 1331 "multibytecodec.c"
        var $239=$cres; //@line 1331 "multibytecodec.c"
        var $240=$239; //@line 1331 "multibytecodec.c"
        var $241=HEAP[$240]; //@line 1331 "multibytecodec.c"
        var $242=($241)==0; //@line 1331 "multibytecodec.c"
        if ($242) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1331 "multibytecodec.c"
      case 42: // $bb40
        var $243=$cres; //@line 1331 "multibytecodec.c"
        var $244=$243+4; //@line 1331 "multibytecodec.c"
        var $245=HEAP[$244]; //@line 1331 "multibytecodec.c"
        var $246=$245+24; //@line 1331 "multibytecodec.c"
        var $247=HEAP[$246]; //@line 1331 "multibytecodec.c"
        var $248=$cres; //@line 1331 "multibytecodec.c"
        FUNCTION_TABLE[$247]($248); //@line 1331 "multibytecodec.c"
        __label__ = 43; break; //@line 1331 "multibytecodec.c"
      case 43: // $bb41
        var $249=$buf+20; //@line 1332 "multibytecodec.c"
        var $250=HEAP[$249]; //@line 1332 "multibytecodec.c"
        var $251=($250)!=0; //@line 1332 "multibytecodec.c"
        if ($251) { __label__ = 44; break; } else { __label__ = 46; break; } //@line 1332 "multibytecodec.c"
      case 44: // $bb42
        var $252=$buf+20; //@line 1332 "multibytecodec.c"
        var $253=HEAP[$252]; //@line 1332 "multibytecodec.c"
        var $254=$253; //@line 1332 "multibytecodec.c"
        var $255=HEAP[$254]; //@line 1332 "multibytecodec.c"
        var $256=($255) - 1; //@line 1332 "multibytecodec.c"
        var $257=$253; //@line 1332 "multibytecodec.c"
        HEAP[$257]=$256; //@line 1332 "multibytecodec.c"
        var $258=$253; //@line 1332 "multibytecodec.c"
        var $259=HEAP[$258]; //@line 1332 "multibytecodec.c"
        var $260=($259)==0; //@line 1332 "multibytecodec.c"
        if ($260) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 1332 "multibytecodec.c"
      case 45: // $bb43
        var $261=$buf+20; //@line 1332 "multibytecodec.c"
        var $262=HEAP[$261]; //@line 1332 "multibytecodec.c"
        var $263=$262+4; //@line 1332 "multibytecodec.c"
        var $264=HEAP[$263]; //@line 1332 "multibytecodec.c"
        var $265=$264+24; //@line 1332 "multibytecodec.c"
        var $266=HEAP[$265]; //@line 1332 "multibytecodec.c"
        var $267=$buf+20; //@line 1332 "multibytecodec.c"
        var $268=HEAP[$267]; //@line 1332 "multibytecodec.c"
        FUNCTION_TABLE[$266]($268); //@line 1332 "multibytecodec.c"
        __label__ = 46; break; //@line 1332 "multibytecodec.c"
      case 46: // $bb44
        var $269=$buf+24; //@line 1333 "multibytecodec.c"
        var $270=HEAP[$269]; //@line 1333 "multibytecodec.c"
        var $271=($270)!=0; //@line 1333 "multibytecodec.c"
        if ($271) { __label__ = 47; break; } else { __label__ = 49; break; } //@line 1333 "multibytecodec.c"
      case 47: // $bb45
        var $272=$buf+24; //@line 1333 "multibytecodec.c"
        var $273=HEAP[$272]; //@line 1333 "multibytecodec.c"
        var $274=$273; //@line 1333 "multibytecodec.c"
        var $275=HEAP[$274]; //@line 1333 "multibytecodec.c"
        var $276=($275) - 1; //@line 1333 "multibytecodec.c"
        var $277=$273; //@line 1333 "multibytecodec.c"
        HEAP[$277]=$276; //@line 1333 "multibytecodec.c"
        var $278=$273; //@line 1333 "multibytecodec.c"
        var $279=HEAP[$278]; //@line 1333 "multibytecodec.c"
        var $280=($279)==0; //@line 1333 "multibytecodec.c"
        if ($280) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 1333 "multibytecodec.c"
      case 48: // $bb46
        var $281=$buf+24; //@line 1333 "multibytecodec.c"
        var $282=HEAP[$281]; //@line 1333 "multibytecodec.c"
        var $283=$282+4; //@line 1333 "multibytecodec.c"
        var $284=HEAP[$283]; //@line 1333 "multibytecodec.c"
        var $285=$284+24; //@line 1333 "multibytecodec.c"
        var $286=HEAP[$285]; //@line 1333 "multibytecodec.c"
        var $287=$buf+24; //@line 1333 "multibytecodec.c"
        var $288=HEAP[$287]; //@line 1333 "multibytecodec.c"
        FUNCTION_TABLE[$286]($288); //@line 1333 "multibytecodec.c"
        __label__ = 49; break; //@line 1333 "multibytecodec.c"
      case 49: // $bb47
        $0=0; //@line 1334 "multibytecodec.c"
        __label__ = 50; break; //@line 1334 "multibytecodec.c"
      case 50: // $bb48
        var $289=$0; //@line 1241 "multibytecodec.c"
        $retval=$289; //@line 1241 "multibytecodec.c"
        var $retval49=$retval; //@line 1241 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval49; //@line 1241 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_read($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $sizeobj=__stackBase__;
        var $size;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$sizeobj]=0; //@line 1340 "multibytecodec.c"
        var $1=$args_addr; //@line 1343 "multibytecodec.c"
        var $2=_PyArg_UnpackTuple($1, __str37, 0, 1, allocate([$sizeobj,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1343 "multibytecodec.c"
        var $3=($2)==0; //@line 1343 "multibytecodec.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1343 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 1344 "multibytecodec.c"
        __label__ = 8; break; //@line 1344 "multibytecodec.c"
      case 2: // $bb1
        var $4=HEAP[$sizeobj]; //@line 1346 "multibytecodec.c"
        var $5=($4)==(__Py_NoneStruct); //@line 1346 "multibytecodec.c"
        var $6=HEAP[$sizeobj]; //@line 1346 "multibytecodec.c"
        var $7=($6)==0; //@line 1346 "multibytecodec.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1346 "multibytecodec.c"
      case 3: // $bb3
        $size=-1; //@line 1347 "multibytecodec.c"
        __label__ = 7; break; //@line 1347 "multibytecodec.c"
      case 4: // $bb4
        var $8=HEAP[$sizeobj]; //@line 1348 "multibytecodec.c"
        var $9=$8+4; //@line 1348 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 1348 "multibytecodec.c"
        var $11=$10+84; //@line 1348 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1348 "multibytecodec.c"
        var $13=($12) & 8388608; //@line 1348 "multibytecodec.c"
        var $14=($13)!=0; //@line 1348 "multibytecodec.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1348 "multibytecodec.c"
      case 5: // $bb5
        var $15=HEAP[$sizeobj]; //@line 1349 "multibytecodec.c"
        var $16=_PyInt_AsSsize_t($15); //@line 1349 "multibytecodec.c"
        $size=$16; //@line 1349 "multibytecodec.c"
        __label__ = 7; break; //@line 1349 "multibytecodec.c"
      case 6: // $bb6
        var $17=HEAP[_PyExc_TypeError]; //@line 1351 "multibytecodec.c"
        _PyErr_SetString($17, __str38); //@line 1351 "multibytecodec.c"
        $0=0; //@line 1352 "multibytecodec.c"
        __label__ = 8; break; //@line 1352 "multibytecodec.c"
      case 7: // $bb7
        var $18=$self_addr; //@line 1355 "multibytecodec.c"
        var $19=$size; //@line 1355 "multibytecodec.c"
        var $20=_mbstreamreader_iread($18, __str37, $19); //@line 1355 "multibytecodec.c"
        $0=$20; //@line 1355 "multibytecodec.c"
        __label__ = 8; break; //@line 1355 "multibytecodec.c"
      case 8: // $bb8
        var $21=$0; //@line 1344 "multibytecodec.c"
        $retval=$21; //@line 1344 "multibytecodec.c"
        var $retval9=$retval; //@line 1344 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1344 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_readline($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $sizeobj=__stackBase__;
        var $size;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$sizeobj]=0; //@line 1361 "multibytecodec.c"
        var $1=$args_addr; //@line 1364 "multibytecodec.c"
        var $2=_PyArg_UnpackTuple($1, __str39, 0, 1, allocate([$sizeobj,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1364 "multibytecodec.c"
        var $3=($2)==0; //@line 1364 "multibytecodec.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1364 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 1365 "multibytecodec.c"
        __label__ = 8; break; //@line 1365 "multibytecodec.c"
      case 2: // $bb1
        var $4=HEAP[$sizeobj]; //@line 1367 "multibytecodec.c"
        var $5=($4)==(__Py_NoneStruct); //@line 1367 "multibytecodec.c"
        var $6=HEAP[$sizeobj]; //@line 1367 "multibytecodec.c"
        var $7=($6)==0; //@line 1367 "multibytecodec.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1367 "multibytecodec.c"
      case 3: // $bb3
        $size=-1; //@line 1368 "multibytecodec.c"
        __label__ = 7; break; //@line 1368 "multibytecodec.c"
      case 4: // $bb4
        var $8=HEAP[$sizeobj]; //@line 1369 "multibytecodec.c"
        var $9=$8+4; //@line 1369 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 1369 "multibytecodec.c"
        var $11=$10+84; //@line 1369 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1369 "multibytecodec.c"
        var $13=($12) & 8388608; //@line 1369 "multibytecodec.c"
        var $14=($13)!=0; //@line 1369 "multibytecodec.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1369 "multibytecodec.c"
      case 5: // $bb5
        var $15=HEAP[$sizeobj]; //@line 1370 "multibytecodec.c"
        var $16=_PyInt_AsSsize_t($15); //@line 1370 "multibytecodec.c"
        $size=$16; //@line 1370 "multibytecodec.c"
        __label__ = 7; break; //@line 1370 "multibytecodec.c"
      case 6: // $bb6
        var $17=HEAP[_PyExc_TypeError]; //@line 1372 "multibytecodec.c"
        _PyErr_SetString($17, __str38); //@line 1372 "multibytecodec.c"
        $0=0; //@line 1373 "multibytecodec.c"
        __label__ = 8; break; //@line 1373 "multibytecodec.c"
      case 7: // $bb7
        var $18=$self_addr; //@line 1376 "multibytecodec.c"
        var $19=$size; //@line 1376 "multibytecodec.c"
        var $20=_mbstreamreader_iread($18, __str39, $19); //@line 1376 "multibytecodec.c"
        $0=$20; //@line 1376 "multibytecodec.c"
        __label__ = 8; break; //@line 1376 "multibytecodec.c"
      case 8: // $bb8
        var $21=$0; //@line 1365 "multibytecodec.c"
        $retval=$21; //@line 1365 "multibytecodec.c"
        var $retval9=$retval; //@line 1365 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1365 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_readlines($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $sizehintobj=__stackBase__;
        var $r;
        var $sr;
        var $sizehint;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$sizehintobj]=0; //@line 1382 "multibytecodec.c"
        var $1=$args_addr; //@line 1385 "multibytecodec.c"
        var $2=_PyArg_UnpackTuple($1, __str40, 0, 1, allocate([$sizehintobj,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1385 "multibytecodec.c"
        var $3=($2)==0; //@line 1385 "multibytecodec.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1385 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 1386 "multibytecodec.c"
        __label__ = 12; break; //@line 1386 "multibytecodec.c"
      case 2: // $bb1
        var $4=HEAP[$sizehintobj]; //@line 1388 "multibytecodec.c"
        var $5=($4)==(__Py_NoneStruct); //@line 1388 "multibytecodec.c"
        var $6=HEAP[$sizehintobj]; //@line 1388 "multibytecodec.c"
        var $7=($6)==0; //@line 1388 "multibytecodec.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1388 "multibytecodec.c"
      case 3: // $bb3
        $sizehint=-1; //@line 1389 "multibytecodec.c"
        __label__ = 7; break; //@line 1389 "multibytecodec.c"
      case 4: // $bb4
        var $8=HEAP[$sizehintobj]; //@line 1390 "multibytecodec.c"
        var $9=$8+4; //@line 1390 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 1390 "multibytecodec.c"
        var $11=$10+84; //@line 1390 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1390 "multibytecodec.c"
        var $13=($12) & 8388608; //@line 1390 "multibytecodec.c"
        var $14=($13)!=0; //@line 1390 "multibytecodec.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1390 "multibytecodec.c"
      case 5: // $bb5
        var $15=HEAP[$sizehintobj]; //@line 1391 "multibytecodec.c"
        var $16=_PyInt_AsSsize_t($15); //@line 1391 "multibytecodec.c"
        $sizehint=$16; //@line 1391 "multibytecodec.c"
        __label__ = 7; break; //@line 1391 "multibytecodec.c"
      case 6: // $bb6
        var $17=HEAP[_PyExc_TypeError]; //@line 1393 "multibytecodec.c"
        _PyErr_SetString($17, __str38); //@line 1393 "multibytecodec.c"
        $0=0; //@line 1394 "multibytecodec.c"
        __label__ = 12; break; //@line 1394 "multibytecodec.c"
      case 7: // $bb7
        var $18=$self_addr; //@line 1397 "multibytecodec.c"
        var $19=$sizehint; //@line 1397 "multibytecodec.c"
        var $20=_mbstreamreader_iread($18, __str37, $19); //@line 1397 "multibytecodec.c"
        $r=$20; //@line 1397 "multibytecodec.c"
        var $21=($20)==0; //@line 1398 "multibytecodec.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1398 "multibytecodec.c"
      case 8: // $bb8
        $0=0; //@line 1399 "multibytecodec.c"
        __label__ = 12; break; //@line 1399 "multibytecodec.c"
      case 9: // $bb9
        var $22=$r; //@line 1401 "multibytecodec.c"
        var $23=_PyUnicodeUCS2_Splitlines($22, 1); //@line 1401 "multibytecodec.c"
        $sr=$23; //@line 1401 "multibytecodec.c"
        var $24=$r; //@line 1402 "multibytecodec.c"
        var $25=$24; //@line 1402 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1402 "multibytecodec.c"
        var $27=($26) - 1; //@line 1402 "multibytecodec.c"
        var $28=$r; //@line 1402 "multibytecodec.c"
        var $29=$28; //@line 1402 "multibytecodec.c"
        HEAP[$29]=$27; //@line 1402 "multibytecodec.c"
        var $30=$r; //@line 1402 "multibytecodec.c"
        var $31=$30; //@line 1402 "multibytecodec.c"
        var $32=HEAP[$31]; //@line 1402 "multibytecodec.c"
        var $33=($32)==0; //@line 1402 "multibytecodec.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1402 "multibytecodec.c"
      case 10: // $bb10
        var $34=$r; //@line 1402 "multibytecodec.c"
        var $35=$34+4; //@line 1402 "multibytecodec.c"
        var $36=HEAP[$35]; //@line 1402 "multibytecodec.c"
        var $37=$36+24; //@line 1402 "multibytecodec.c"
        var $38=HEAP[$37]; //@line 1402 "multibytecodec.c"
        var $39=$r; //@line 1402 "multibytecodec.c"
        FUNCTION_TABLE[$38]($39); //@line 1402 "multibytecodec.c"
        __label__ = 11; break; //@line 1402 "multibytecodec.c"
      case 11: // $bb11
        var $40=$sr; //@line 1403 "multibytecodec.c"
        $0=$40; //@line 1403 "multibytecodec.c"
        __label__ = 12; break; //@line 1403 "multibytecodec.c"
      case 12: // $bb12
        var $41=$0; //@line 1386 "multibytecodec.c"
        $retval=$41; //@line 1386 "multibytecodec.c"
        var $retval13=$retval; //@line 1386 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 1386 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_reset($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 1409 "multibytecodec.c"
        var $2=$1+8; //@line 1409 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 1409 "multibytecodec.c"
        var $4=$3+32; //@line 1409 "multibytecodec.c"
        var $5=HEAP[$4]; //@line 1409 "multibytecodec.c"
        var $6=($5)!=0; //@line 1409 "multibytecodec.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1409 "multibytecodec.c"
      case 1: // $bb
        var $7=$self_addr; //@line 1409 "multibytecodec.c"
        var $8=$7+8; //@line 1409 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 1409 "multibytecodec.c"
        var $10=$9+32; //@line 1409 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 1409 "multibytecodec.c"
        var $12=$self_addr; //@line 1409 "multibytecodec.c"
        var $13=$12+8; //@line 1409 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 1409 "multibytecodec.c"
        var $15=$14+4; //@line 1409 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 1409 "multibytecodec.c"
        var $17=$self_addr; //@line 1409 "multibytecodec.c"
        var $18=$17+12; //@line 1409 "multibytecodec.c"
        var $19=FUNCTION_TABLE[$11]($18, $16); //@line 1409 "multibytecodec.c"
        var $20=($19)!=0; //@line 1409 "multibytecodec.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1409 "multibytecodec.c"
      case 2: // $bb1
        $0=0; //@line 1411 "multibytecodec.c"
        __label__ = 4; break; //@line 1411 "multibytecodec.c"
      case 3: // $bb2
        var $21=$self_addr; //@line 1412 "multibytecodec.c"
        var $22=$21+32; //@line 1412 "multibytecodec.c"
        HEAP[$22]=0; //@line 1412 "multibytecodec.c"
        var $23=HEAP[__Py_NoneStruct]; //@line 1414 "multibytecodec.c"
        var $24=($23) + 1; //@line 1414 "multibytecodec.c"
        HEAP[__Py_NoneStruct]=$24; //@line 1414 "multibytecodec.c"
        $0=__Py_NoneStruct; //@line 1414 "multibytecodec.c"
        __label__ = 4; break; //@line 1414 "multibytecodec.c"
      case 4: // $bb3
        var $25=$0; //@line 1411 "multibytecodec.c"
        $retval=$25; //@line 1411 "multibytecodec.c"
        var $retval4=$retval; //@line 1411 "multibytecodec.c"
        ;
        return $retval4; //@line 1411 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $self;
        var $stream=__stackBase__;
        var $codec;
        var $errors=__stackBase__+4;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        $codec=0; //@line 1440 "multibytecodec.c"
        HEAP[$errors]=0; //@line 1441 "multibytecodec.c"
        var $1=$args_addr; //@line 1443 "multibytecodec.c"
        var $2=$kwds_addr; //@line 1443 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str41, _streamkwarglist, allocate([$stream,0,0,0,$errors,0,0,0], ["%struct.PyObject**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 1443 "multibytecodec.c"
        var $4=($3)==0; //@line 1443 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1443 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 1445 "multibytecodec.c"
        __label__ = 21; break; //@line 1445 "multibytecodec.c"
      case 2: // $bb1
        var $5=$type_addr; //@line 1447 "multibytecodec.c"
        var $6=$5+152; //@line 1447 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 1447 "multibytecodec.c"
        var $8=$type_addr; //@line 1447 "multibytecodec.c"
        var $9=FUNCTION_TABLE[$7]($8, 0); //@line 1447 "multibytecodec.c"
        var $10=$9; //@line 1447 "multibytecodec.c"
        $self=$10; //@line 1447 "multibytecodec.c"
        var $11=$self; //@line 1448 "multibytecodec.c"
        var $12=($11)==0; //@line 1448 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1448 "multibytecodec.c"
      case 3: // $bb2
        $0=0; //@line 1449 "multibytecodec.c"
        __label__ = 21; break; //@line 1449 "multibytecodec.c"
      case 4: // $bb3
        var $13=$type_addr; //@line 1451 "multibytecodec.c"
        var $14=$13; //@line 1451 "multibytecodec.c"
        var $15=_PyObject_GetAttrString($14, __str29); //@line 1451 "multibytecodec.c"
        $codec=$15; //@line 1451 "multibytecodec.c"
        var $16=$codec; //@line 1452 "multibytecodec.c"
        var $17=($16)==0; //@line 1452 "multibytecodec.c"
        if ($17) { __label__ = 13; break; } else { __label__ = 5; break; } //@line 1452 "multibytecodec.c"
      case 5: // $bb4
        var $18=$codec; //@line 1454 "multibytecodec.c"
        var $19=$18+4; //@line 1454 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 1454 "multibytecodec.c"
        var $21=($20)!=(_MultibyteCodec_Type); //@line 1454 "multibytecodec.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1454 "multibytecodec.c"
      case 6: // $bb5
        var $22=HEAP[_PyExc_TypeError]; //@line 1455 "multibytecodec.c"
        _PyErr_SetString($22, __str30); //@line 1455 "multibytecodec.c"
        __label__ = 13; break; //@line 1455 "multibytecodec.c"
      case 7: // $bb6
        var $23=$codec; //@line 1459 "multibytecodec.c"
        var $24=$23; //@line 1459 "multibytecodec.c"
        var $25=$24+8; //@line 1459 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1459 "multibytecodec.c"
        var $27=$self; //@line 1459 "multibytecodec.c"
        var $28=$27+8; //@line 1459 "multibytecodec.c"
        HEAP[$28]=$26; //@line 1459 "multibytecodec.c"
        var $29=HEAP[$stream]; //@line 1460 "multibytecodec.c"
        var $30=$self; //@line 1460 "multibytecodec.c"
        var $31=$30+36; //@line 1460 "multibytecodec.c"
        HEAP[$31]=$29; //@line 1460 "multibytecodec.c"
        var $32=HEAP[$stream]; //@line 1461 "multibytecodec.c"
        var $33=$32; //@line 1461 "multibytecodec.c"
        var $34=HEAP[$33]; //@line 1461 "multibytecodec.c"
        var $35=($34) + 1; //@line 1461 "multibytecodec.c"
        var $36=$32; //@line 1461 "multibytecodec.c"
        HEAP[$36]=$35; //@line 1461 "multibytecodec.c"
        var $37=$self; //@line 1462 "multibytecodec.c"
        var $38=$37+32; //@line 1462 "multibytecodec.c"
        HEAP[$38]=0; //@line 1462 "multibytecodec.c"
        var $39=HEAP[$errors]; //@line 1463 "multibytecodec.c"
        var $40=_internal_error_callback($39); //@line 1463 "multibytecodec.c"
        var $41=$self; //@line 1463 "multibytecodec.c"
        var $42=$41+20; //@line 1463 "multibytecodec.c"
        HEAP[$42]=$40; //@line 1463 "multibytecodec.c"
        var $43=$self; //@line 1464 "multibytecodec.c"
        var $44=$43+20; //@line 1464 "multibytecodec.c"
        var $45=HEAP[$44]; //@line 1464 "multibytecodec.c"
        var $46=($45)==0; //@line 1464 "multibytecodec.c"
        if ($46) { __lastLabel__ = 7; __label__ = 14; break; } else { __lastLabel__ = 7; __label__ = 8; break; } //@line 1464 "multibytecodec.c"
      case 8: // $bb7
        var $47=$self; //@line 1466 "multibytecodec.c"
        var $48=$47+8; //@line 1466 "multibytecodec.c"
        var $49=HEAP[$48]; //@line 1466 "multibytecodec.c"
        var $50=$49+28; //@line 1466 "multibytecodec.c"
        var $51=HEAP[$50]; //@line 1466 "multibytecodec.c"
        var $52=($51)!=0; //@line 1466 "multibytecodec.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1466 "multibytecodec.c"
      case 9: // $bb8
        var $53=$self; //@line 1466 "multibytecodec.c"
        var $54=$53+8; //@line 1466 "multibytecodec.c"
        var $55=HEAP[$54]; //@line 1466 "multibytecodec.c"
        var $56=$55+28; //@line 1466 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 1466 "multibytecodec.c"
        var $58=$self; //@line 1466 "multibytecodec.c"
        var $59=$58+8; //@line 1466 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 1466 "multibytecodec.c"
        var $61=$60+4; //@line 1466 "multibytecodec.c"
        var $62=HEAP[$61]; //@line 1466 "multibytecodec.c"
        var $63=$self; //@line 1466 "multibytecodec.c"
        var $64=$63+12; //@line 1466 "multibytecodec.c"
        var $65=FUNCTION_TABLE[$57]($64, $62); //@line 1466 "multibytecodec.c"
        var $66=($65)!=0; //@line 1466 "multibytecodec.c"
        if ($66) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 1466 "multibytecodec.c"
      case 10: // $bb9
        var $67=$codec; //@line 1470 "multibytecodec.c"
        var $68=$67; //@line 1470 "multibytecodec.c"
        var $69=HEAP[$68]; //@line 1470 "multibytecodec.c"
        var $70=($69) - 1; //@line 1470 "multibytecodec.c"
        var $71=$codec; //@line 1470 "multibytecodec.c"
        var $72=$71; //@line 1470 "multibytecodec.c"
        HEAP[$72]=$70; //@line 1470 "multibytecodec.c"
        var $73=$codec; //@line 1470 "multibytecodec.c"
        var $74=$73; //@line 1470 "multibytecodec.c"
        var $75=HEAP[$74]; //@line 1470 "multibytecodec.c"
        var $76=($75)==0; //@line 1470 "multibytecodec.c"
        if ($76) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1470 "multibytecodec.c"
      case 11: // $bb10
        var $77=$codec; //@line 1470 "multibytecodec.c"
        var $78=$77+4; //@line 1470 "multibytecodec.c"
        var $79=HEAP[$78]; //@line 1470 "multibytecodec.c"
        var $80=$79+24; //@line 1470 "multibytecodec.c"
        var $81=HEAP[$80]; //@line 1470 "multibytecodec.c"
        var $82=$codec; //@line 1470 "multibytecodec.c"
        FUNCTION_TABLE[$81]($82); //@line 1470 "multibytecodec.c"
        __label__ = 12; break; //@line 1470 "multibytecodec.c"
      case 12: // $bb11
        var $83=$self; //@line 1471 "multibytecodec.c"
        var $84=$83; //@line 1471 "multibytecodec.c"
        $0=$84; //@line 1471 "multibytecodec.c"
        __label__ = 21; break; //@line 1471 "multibytecodec.c"
      case 13: // $errorexitthread_pre_split
        var $_pr=$self;
        __lastLabel__ = 13; __label__ = 14; break;
      case 14: // $errorexit
        var $85=__lastLabel__ == 13 ? $_pr : ($43);
        var $86=($85)!=0; //@line 1474 "multibytecodec.c"
        if ($86) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1474 "multibytecodec.c"
      case 15: // $bb12
        var $87=$self; //@line 1474 "multibytecodec.c"
        var $88=$87; //@line 1474 "multibytecodec.c"
        var $89=$88; //@line 1474 "multibytecodec.c"
        var $90=HEAP[$89]; //@line 1474 "multibytecodec.c"
        var $91=($90) - 1; //@line 1474 "multibytecodec.c"
        var $92=$88; //@line 1474 "multibytecodec.c"
        HEAP[$92]=$91; //@line 1474 "multibytecodec.c"
        var $93=$88; //@line 1474 "multibytecodec.c"
        var $94=HEAP[$93]; //@line 1474 "multibytecodec.c"
        var $95=($94)==0; //@line 1474 "multibytecodec.c"
        if ($95) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1474 "multibytecodec.c"
      case 16: // $bb13
        var $96=$self; //@line 1474 "multibytecodec.c"
        var $97=$96; //@line 1474 "multibytecodec.c"
        var $98=$97+4; //@line 1474 "multibytecodec.c"
        var $99=HEAP[$98]; //@line 1474 "multibytecodec.c"
        var $100=$99+24; //@line 1474 "multibytecodec.c"
        var $101=HEAP[$100]; //@line 1474 "multibytecodec.c"
        var $102=$self; //@line 1474 "multibytecodec.c"
        var $103=$102; //@line 1474 "multibytecodec.c"
        FUNCTION_TABLE[$101]($103); //@line 1474 "multibytecodec.c"
        __label__ = 17; break; //@line 1474 "multibytecodec.c"
      case 17: // $bb14
        var $104=$codec; //@line 1475 "multibytecodec.c"
        var $105=($104)!=0; //@line 1475 "multibytecodec.c"
        if ($105) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 1475 "multibytecodec.c"
      case 18: // $bb15
        var $106=$codec; //@line 1475 "multibytecodec.c"
        var $107=$106; //@line 1475 "multibytecodec.c"
        var $108=HEAP[$107]; //@line 1475 "multibytecodec.c"
        var $109=($108) - 1; //@line 1475 "multibytecodec.c"
        var $110=$codec; //@line 1475 "multibytecodec.c"
        var $111=$110; //@line 1475 "multibytecodec.c"
        HEAP[$111]=$109; //@line 1475 "multibytecodec.c"
        var $112=$codec; //@line 1475 "multibytecodec.c"
        var $113=$112; //@line 1475 "multibytecodec.c"
        var $114=HEAP[$113]; //@line 1475 "multibytecodec.c"
        var $115=($114)==0; //@line 1475 "multibytecodec.c"
        if ($115) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1475 "multibytecodec.c"
      case 19: // $bb16
        var $116=$codec; //@line 1475 "multibytecodec.c"
        var $117=$116+4; //@line 1475 "multibytecodec.c"
        var $118=HEAP[$117]; //@line 1475 "multibytecodec.c"
        var $119=$118+24; //@line 1475 "multibytecodec.c"
        var $120=HEAP[$119]; //@line 1475 "multibytecodec.c"
        var $121=$codec; //@line 1475 "multibytecodec.c"
        FUNCTION_TABLE[$120]($121); //@line 1475 "multibytecodec.c"
        __label__ = 20; break; //@line 1475 "multibytecodec.c"
      case 20: // $bb17
        $0=0; //@line 1476 "multibytecodec.c"
        __label__ = 21; break; //@line 1476 "multibytecodec.c"
      case 21: // $bb18
        var $122=$0; //@line 1445 "multibytecodec.c"
        $retval=$122; //@line 1445 "multibytecodec.c"
        var $retval19=$retval; //@line 1445 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1445 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_init($self, $args, $kwds) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    $0=0; //@line 1482 "multibytecodec.c"
    var $1=$0; //@line 1482 "multibytecodec.c"
    $retval=$1; //@line 1482 "multibytecodec.c"
    var $retval1=$retval; //@line 1482 "multibytecodec.c"
    ;
    return $retval1; //@line 1482 "multibytecodec.c"
  }
  

  function _mbstreamreader_traverse($self, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret6;
        $self_addr=$self;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$self_addr; //@line 1489 "multibytecodec.c"
        var $2=$1+20; //@line 1489 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 1489 "multibytecodec.c"
        var $4=($3)==0; //@line 1489 "multibytecodec.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1489 "multibytecodec.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1489 "multibytecodec.c"
        var $6=$5+20; //@line 1489 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 1489 "multibytecodec.c"
        var $8=($7) > 3; //@line 1489 "multibytecodec.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1489 "multibytecodec.c"
      case 2: // $bb1
        var $9=$self_addr; //@line 1490 "multibytecodec.c"
        var $10=$9+20; //@line 1490 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 1490 "multibytecodec.c"
        var $12=($11)!=0; //@line 1490 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1490 "multibytecodec.c"
      case 3: // $bb2
        var $13=$self_addr; //@line 1490 "multibytecodec.c"
        var $14=$13+20; //@line 1490 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 1490 "multibytecodec.c"
        var $16=$visit_addr; //@line 1490 "multibytecodec.c"
        var $17=$arg_addr; //@line 1490 "multibytecodec.c"
        var $18=FUNCTION_TABLE[$16]($15, $17); //@line 1490 "multibytecodec.c"
        $vret=$18; //@line 1490 "multibytecodec.c"
        var $19=$vret; //@line 1490 "multibytecodec.c"
        var $20=($19)!=0; //@line 1490 "multibytecodec.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1490 "multibytecodec.c"
      case 4: // $bb3
        var $21=$vret; //@line 1490 "multibytecodec.c"
        $0=$21; //@line 1490 "multibytecodec.c"
        __label__ = 9; break; //@line 1490 "multibytecodec.c"
      case 5: // $bb4
        var $22=$self_addr; //@line 1491 "multibytecodec.c"
        var $23=$22+36; //@line 1491 "multibytecodec.c"
        var $24=HEAP[$23]; //@line 1491 "multibytecodec.c"
        var $25=($24)!=0; //@line 1491 "multibytecodec.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1491 "multibytecodec.c"
      case 6: // $bb5
        var $26=$self_addr; //@line 1491 "multibytecodec.c"
        var $27=$26+36; //@line 1491 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 1491 "multibytecodec.c"
        var $29=$visit_addr; //@line 1491 "multibytecodec.c"
        var $30=$arg_addr; //@line 1491 "multibytecodec.c"
        var $31=FUNCTION_TABLE[$29]($28, $30); //@line 1491 "multibytecodec.c"
        $vret6=$31; //@line 1491 "multibytecodec.c"
        var $32=$vret6; //@line 1491 "multibytecodec.c"
        var $33=($32)!=0; //@line 1491 "multibytecodec.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1491 "multibytecodec.c"
      case 7: // $bb7
        var $34=$vret6; //@line 1491 "multibytecodec.c"
        $0=$34; //@line 1491 "multibytecodec.c"
        __label__ = 9; break; //@line 1491 "multibytecodec.c"
      case 8: // $bb8
        $0=0; //@line 1492 "multibytecodec.c"
        __label__ = 9; break; //@line 1492 "multibytecodec.c"
      case 9: // $bb9
        var $35=$0; //@line 1490 "multibytecodec.c"
        $retval=$35; //@line 1490 "multibytecodec.c"
        var $retval10=$retval; //@line 1490 "multibytecodec.c"
        ;
        return $retval10; //@line 1490 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 1498 "multibytecodec.c"
        var $1=$0; //@line 1498 "multibytecodec.c"
        _PyObject_GC_UnTrack($1); //@line 1498 "multibytecodec.c"
        var $2=$self_addr; //@line 1499 "multibytecodec.c"
        var $3=$2+20; //@line 1499 "multibytecodec.c"
        var $4=HEAP[$3]; //@line 1499 "multibytecodec.c"
        var $5=($4)!=0; //@line 1499 "multibytecodec.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 1499 "multibytecodec.c"
      case 1: // $bb
        var $6=$self_addr; //@line 1499 "multibytecodec.c"
        var $7=$6+20; //@line 1499 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 1499 "multibytecodec.c"
        var $9=($8)==0; //@line 1499 "multibytecodec.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1499 "multibytecodec.c"
      case 2: // $bb1
        var $10=$self_addr; //@line 1499 "multibytecodec.c"
        var $11=$10+20; //@line 1499 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1499 "multibytecodec.c"
        var $13=($12) > 3; //@line 1499 "multibytecodec.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1499 "multibytecodec.c"
      case 3: // $bb2
        var $14=$self_addr; //@line 1499 "multibytecodec.c"
        var $15=$14+20; //@line 1499 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 1499 "multibytecodec.c"
        var $17=$16; //@line 1499 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 1499 "multibytecodec.c"
        var $19=($18) - 1; //@line 1499 "multibytecodec.c"
        var $20=$16; //@line 1499 "multibytecodec.c"
        HEAP[$20]=$19; //@line 1499 "multibytecodec.c"
        var $21=$16; //@line 1499 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 1499 "multibytecodec.c"
        var $23=($22)==0; //@line 1499 "multibytecodec.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1499 "multibytecodec.c"
      case 4: // $bb3
        var $24=$self_addr; //@line 1499 "multibytecodec.c"
        var $25=$24+20; //@line 1499 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1499 "multibytecodec.c"
        var $27=$26+4; //@line 1499 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 1499 "multibytecodec.c"
        var $29=$28+24; //@line 1499 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 1499 "multibytecodec.c"
        var $31=$self_addr; //@line 1499 "multibytecodec.c"
        var $32=$31+20; //@line 1499 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 1499 "multibytecodec.c"
        FUNCTION_TABLE[$30]($33); //@line 1499 "multibytecodec.c"
        __label__ = 5; break; //@line 1499 "multibytecodec.c"
      case 5: // $bb4
        var $34=$self_addr; //@line 1500 "multibytecodec.c"
        var $35=$34+36; //@line 1500 "multibytecodec.c"
        var $36=HEAP[$35]; //@line 1500 "multibytecodec.c"
        var $37=($36)!=0; //@line 1500 "multibytecodec.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1500 "multibytecodec.c"
      case 6: // $bb5
        var $38=$self_addr; //@line 1500 "multibytecodec.c"
        var $39=$38+36; //@line 1500 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 1500 "multibytecodec.c"
        var $41=$40; //@line 1500 "multibytecodec.c"
        var $42=HEAP[$41]; //@line 1500 "multibytecodec.c"
        var $43=($42) - 1; //@line 1500 "multibytecodec.c"
        var $44=$40; //@line 1500 "multibytecodec.c"
        HEAP[$44]=$43; //@line 1500 "multibytecodec.c"
        var $45=$40; //@line 1500 "multibytecodec.c"
        var $46=HEAP[$45]; //@line 1500 "multibytecodec.c"
        var $47=($46)==0; //@line 1500 "multibytecodec.c"
        if ($47) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1500 "multibytecodec.c"
      case 7: // $bb6
        var $48=$self_addr; //@line 1500 "multibytecodec.c"
        var $49=$48+36; //@line 1500 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 1500 "multibytecodec.c"
        var $51=$50+4; //@line 1500 "multibytecodec.c"
        var $52=HEAP[$51]; //@line 1500 "multibytecodec.c"
        var $53=$52+24; //@line 1500 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 1500 "multibytecodec.c"
        var $55=$self_addr; //@line 1500 "multibytecodec.c"
        var $56=$55+36; //@line 1500 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 1500 "multibytecodec.c"
        FUNCTION_TABLE[$54]($57); //@line 1500 "multibytecodec.c"
        __label__ = 8; break; //@line 1500 "multibytecodec.c"
      case 8: // $bb7
        var $58=$self_addr; //@line 1501 "multibytecodec.c"
        var $59=$58; //@line 1501 "multibytecodec.c"
        var $60=$59+4; //@line 1501 "multibytecodec.c"
        var $61=HEAP[$60]; //@line 1501 "multibytecodec.c"
        var $62=$61+160; //@line 1501 "multibytecodec.c"
        var $63=HEAP[$62]; //@line 1501 "multibytecodec.c"
        var $64=$self_addr; //@line 1501 "multibytecodec.c"
        var $65=$64; //@line 1501 "multibytecodec.c"
        FUNCTION_TABLE[$63]($65); //@line 1501 "multibytecodec.c"
        ;
        return; //@line 1502 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_iwrite($self, $unistr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unistr_addr;
        var $retval;
        var $0;
        var $str;
        var $wr;
        $self_addr=$self;
        $unistr_addr=$unistr;
        var $1=$self_addr; //@line 1558 "multibytecodec.c"
        var $2=$1; //@line 1558 "multibytecodec.c"
        var $3=$unistr_addr; //@line 1558 "multibytecodec.c"
        var $4=_encoder_encode_stateful($2, $3, 0); //@line 1558 "multibytecodec.c"
        $str=$4; //@line 1558 "multibytecodec.c"
        var $5=$str; //@line 1559 "multibytecodec.c"
        var $6=($5)==0; //@line 1559 "multibytecodec.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1559 "multibytecodec.c"
      case 1: // $bb
        $0=-1; //@line 1560 "multibytecodec.c"
        __label__ = 9; break; //@line 1560 "multibytecodec.c"
      case 2: // $bb1
        var $7=$self_addr; //@line 1562 "multibytecodec.c"
        var $8=$7+32; //@line 1562 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 1562 "multibytecodec.c"
        var $10=$str; //@line 1562 "multibytecodec.c"
        var $11=__PyObject_CallMethod_SizeT($9, __str43, __str44, allocate([$10,0,0,0], ["%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1562 "multibytecodec.c"
        $wr=$11; //@line 1562 "multibytecodec.c"
        var $12=$str; //@line 1563 "multibytecodec.c"
        var $13=$12; //@line 1563 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 1563 "multibytecodec.c"
        var $15=($14) - 1; //@line 1563 "multibytecodec.c"
        var $16=$str; //@line 1563 "multibytecodec.c"
        var $17=$16; //@line 1563 "multibytecodec.c"
        HEAP[$17]=$15; //@line 1563 "multibytecodec.c"
        var $18=$str; //@line 1563 "multibytecodec.c"
        var $19=$18; //@line 1563 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 1563 "multibytecodec.c"
        var $21=($20)==0; //@line 1563 "multibytecodec.c"
        if ($21) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1563 "multibytecodec.c"
      case 3: // $bb2
        var $22=$str; //@line 1563 "multibytecodec.c"
        var $23=$22+4; //@line 1563 "multibytecodec.c"
        var $24=HEAP[$23]; //@line 1563 "multibytecodec.c"
        var $25=$24+24; //@line 1563 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1563 "multibytecodec.c"
        var $27=$str; //@line 1563 "multibytecodec.c"
        FUNCTION_TABLE[$26]($27); //@line 1563 "multibytecodec.c"
        __label__ = 4; break; //@line 1563 "multibytecodec.c"
      case 4: // $bb3
        var $28=$wr; //@line 1564 "multibytecodec.c"
        var $29=($28)==0; //@line 1564 "multibytecodec.c"
        if ($29) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1564 "multibytecodec.c"
      case 5: // $bb4
        $0=-1; //@line 1565 "multibytecodec.c"
        __label__ = 9; break; //@line 1565 "multibytecodec.c"
      case 6: // $bb5
        var $30=$wr; //@line 1567 "multibytecodec.c"
        var $31=$30; //@line 1567 "multibytecodec.c"
        var $32=HEAP[$31]; //@line 1567 "multibytecodec.c"
        var $33=($32) - 1; //@line 1567 "multibytecodec.c"
        var $34=$wr; //@line 1567 "multibytecodec.c"
        var $35=$34; //@line 1567 "multibytecodec.c"
        HEAP[$35]=$33; //@line 1567 "multibytecodec.c"
        var $36=$wr; //@line 1567 "multibytecodec.c"
        var $37=$36; //@line 1567 "multibytecodec.c"
        var $38=HEAP[$37]; //@line 1567 "multibytecodec.c"
        var $39=($38)==0; //@line 1567 "multibytecodec.c"
        if ($39) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1567 "multibytecodec.c"
      case 7: // $bb6
        var $40=$wr; //@line 1567 "multibytecodec.c"
        var $41=$40+4; //@line 1567 "multibytecodec.c"
        var $42=HEAP[$41]; //@line 1567 "multibytecodec.c"
        var $43=$42+24; //@line 1567 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 1567 "multibytecodec.c"
        var $45=$wr; //@line 1567 "multibytecodec.c"
        FUNCTION_TABLE[$44]($45); //@line 1567 "multibytecodec.c"
        __label__ = 8; break; //@line 1567 "multibytecodec.c"
      case 8: // $bb7
        $0=0; //@line 1568 "multibytecodec.c"
        __label__ = 9; break; //@line 1568 "multibytecodec.c"
      case 9: // $bb8
        var $46=$0; //@line 1560 "multibytecodec.c"
        $retval=$46; //@line 1560 "multibytecodec.c"
        var $retval9=$retval; //@line 1560 "multibytecodec.c"
        ;
        return $retval9; //@line 1560 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_write($self, $strobj) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $strobj_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $strobj_addr=$strobj;
        var $1=$self_addr; //@line 1574 "multibytecodec.c"
        var $2=$strobj_addr; //@line 1574 "multibytecodec.c"
        var $3=_mbstreamwriter_iwrite($1, $2); //@line 1574 "multibytecodec.c"
        var $4=($3)!=0; //@line 1574 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1574 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 1575 "multibytecodec.c"
        __label__ = 3; break; //@line 1575 "multibytecodec.c"
      case 2: // $bb1
        var $5=HEAP[__Py_NoneStruct]; //@line 1577 "multibytecodec.c"
        var $6=($5) + 1; //@line 1577 "multibytecodec.c"
        HEAP[__Py_NoneStruct]=$6; //@line 1577 "multibytecodec.c"
        $0=__Py_NoneStruct; //@line 1577 "multibytecodec.c"
        __label__ = 3; break; //@line 1577 "multibytecodec.c"
      case 3: // $bb2
        var $7=$0; //@line 1575 "multibytecodec.c"
        $retval=$7; //@line 1575 "multibytecodec.c"
        var $retval3=$retval; //@line 1575 "multibytecodec.c"
        ;
        return $retval3; //@line 1575 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_writelines($self, $lines) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $lines_addr;
        var $retval;
        var $0;
        var $strobj;
        var $i;
        var $r;
        $self_addr=$self;
        $lines_addr=$lines;
        var $1=$lines_addr; //@line 1586 "multibytecodec.c"
        var $2=_PySequence_Check($1); //@line 1586 "multibytecodec.c"
        var $3=($2)==0; //@line 1586 "multibytecodec.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1586 "multibytecodec.c"
      case 1: // $bb
        var $4=HEAP[_PyExc_TypeError]; //@line 1587 "multibytecodec.c"
        _PyErr_SetString($4, __str45); //@line 1587 "multibytecodec.c"
        $0=0; //@line 1589 "multibytecodec.c"
        __label__ = 12; break; //@line 1589 "multibytecodec.c"
      case 2: // $bb1
        $i=0; //@line 1592 "multibytecodec.c"
        __label__ = 10; break; //@line 1592 "multibytecodec.c"
      case 3: // $bb2
        var $5=$lines_addr; //@line 1594 "multibytecodec.c"
        var $6=$i; //@line 1594 "multibytecodec.c"
        var $7=_PySequence_GetItem($5, $6); //@line 1594 "multibytecodec.c"
        $strobj=$7; //@line 1594 "multibytecodec.c"
        var $8=$strobj; //@line 1595 "multibytecodec.c"
        var $9=($8)==0; //@line 1595 "multibytecodec.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1595 "multibytecodec.c"
      case 4: // $bb3
        $0=0; //@line 1596 "multibytecodec.c"
        __label__ = 12; break; //@line 1596 "multibytecodec.c"
      case 5: // $bb4
        var $10=$self_addr; //@line 1598 "multibytecodec.c"
        var $11=$strobj; //@line 1598 "multibytecodec.c"
        var $12=_mbstreamwriter_iwrite($10, $11); //@line 1598 "multibytecodec.c"
        $r=$12; //@line 1598 "multibytecodec.c"
        var $13=$strobj; //@line 1599 "multibytecodec.c"
        var $14=$13; //@line 1599 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 1599 "multibytecodec.c"
        var $16=($15) - 1; //@line 1599 "multibytecodec.c"
        var $17=$strobj; //@line 1599 "multibytecodec.c"
        var $18=$17; //@line 1599 "multibytecodec.c"
        HEAP[$18]=$16; //@line 1599 "multibytecodec.c"
        var $19=$strobj; //@line 1599 "multibytecodec.c"
        var $20=$19; //@line 1599 "multibytecodec.c"
        var $21=HEAP[$20]; //@line 1599 "multibytecodec.c"
        var $22=($21)==0; //@line 1599 "multibytecodec.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1599 "multibytecodec.c"
      case 6: // $bb5
        var $23=$strobj; //@line 1599 "multibytecodec.c"
        var $24=$23+4; //@line 1599 "multibytecodec.c"
        var $25=HEAP[$24]; //@line 1599 "multibytecodec.c"
        var $26=$25+24; //@line 1599 "multibytecodec.c"
        var $27=HEAP[$26]; //@line 1599 "multibytecodec.c"
        var $28=$strobj; //@line 1599 "multibytecodec.c"
        FUNCTION_TABLE[$27]($28); //@line 1599 "multibytecodec.c"
        __label__ = 7; break; //@line 1599 "multibytecodec.c"
      case 7: // $bb6
        var $29=$r; //@line 1600 "multibytecodec.c"
        var $30=($29)==-1; //@line 1600 "multibytecodec.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1600 "multibytecodec.c"
      case 8: // $bb7
        $0=0; //@line 1601 "multibytecodec.c"
        __label__ = 12; break; //@line 1601 "multibytecodec.c"
      case 9: // $bb8
        var $31=$i; //@line 1592 "multibytecodec.c"
        var $32=($31) + 1; //@line 1592 "multibytecodec.c"
        $i=$32; //@line 1592 "multibytecodec.c"
        __label__ = 10; break; //@line 1592 "multibytecodec.c"
      case 10: // $bb9
        var $33=$lines_addr; //@line 1592 "multibytecodec.c"
        var $34=_PySequence_Size($33); //@line 1592 "multibytecodec.c"
        var $35=$i; //@line 1592 "multibytecodec.c"
        var $36=($34) > ($35); //@line 1592 "multibytecodec.c"
        if ($36) { __label__ = 3; break; } else { __label__ = 11; break; } //@line 1592 "multibytecodec.c"
      case 11: // $bb10
        var $37=HEAP[__Py_NoneStruct]; //@line 1604 "multibytecodec.c"
        var $38=($37) + 1; //@line 1604 "multibytecodec.c"
        HEAP[__Py_NoneStruct]=$38; //@line 1604 "multibytecodec.c"
        $0=__Py_NoneStruct; //@line 1604 "multibytecodec.c"
        __label__ = 12; break; //@line 1604 "multibytecodec.c"
      case 12: // $bb11
        var $39=$0; //@line 1589 "multibytecodec.c"
        $retval=$39; //@line 1589 "multibytecodec.c"
        var $retval12=$retval; //@line 1589 "multibytecodec.c"
        ;
        return $retval12; //@line 1589 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_reset($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $pending=__stackBase__;
        var $pwrt;
        var $wr;
        $self_addr=$self;
        var $1=$self_addr; //@line 1613 "multibytecodec.c"
        var $2=$1+24; //@line 1613 "multibytecodec.c"
        var $3=$2; //@line 1613 "multibytecodec.c"
        HEAP[$pending]=$3; //@line 1613 "multibytecodec.c"
        var $4=$self_addr; //@line 1614 "multibytecodec.c"
        var $5=$4+20; //@line 1614 "multibytecodec.c"
        var $6=HEAP[$5]; //@line 1614 "multibytecodec.c"
        var $7=$self_addr; //@line 1614 "multibytecodec.c"
        var $8=$7+28; //@line 1614 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 1614 "multibytecodec.c"
        var $10=$self_addr; //@line 1614 "multibytecodec.c"
        var $11=$10+12; //@line 1614 "multibytecodec.c"
        var $12=$self_addr; //@line 1614 "multibytecodec.c"
        var $13=$12+8; //@line 1614 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 1614 "multibytecodec.c"
        var $15=_multibytecodec_encode($14, $11, $pending, $9, $6, 3); //@line 1614 "multibytecodec.c"
        $pwrt=$15; //@line 1614 "multibytecodec.c"
        var $16=$self_addr; //@line 1621 "multibytecodec.c"
        var $17=$16+28; //@line 1621 "multibytecodec.c"
        HEAP[$17]=0; //@line 1621 "multibytecodec.c"
        var $18=$pwrt; //@line 1622 "multibytecodec.c"
        var $19=($18)==0; //@line 1622 "multibytecodec.c"
        if ($19) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1622 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 1623 "multibytecodec.c"
        __label__ = 10; break; //@line 1623 "multibytecodec.c"
      case 2: // $bb1
        var $20=$pwrt; //@line 1625 "multibytecodec.c"
        var $21=_PyString_Size($20); //@line 1625 "multibytecodec.c"
        var $22=($21) > 0; //@line 1625 "multibytecodec.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 1625 "multibytecodec.c"
      case 3: // $bb2
        var $23=$self_addr; //@line 1627 "multibytecodec.c"
        var $24=$23+32; //@line 1627 "multibytecodec.c"
        var $25=HEAP[$24]; //@line 1627 "multibytecodec.c"
        var $26=$pwrt; //@line 1627 "multibytecodec.c"
        var $27=__PyObject_CallMethod_SizeT($25, __str43, __str44, allocate([$26,0,0,0], ["%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1627 "multibytecodec.c"
        $wr=$27; //@line 1627 "multibytecodec.c"
        var $28=$wr; //@line 1628 "multibytecodec.c"
        var $29=($28)==0; //@line 1628 "multibytecodec.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 1628 "multibytecodec.c"
      case 4: // $bb3
        var $30=$pwrt; //@line 1629 "multibytecodec.c"
        var $31=$30; //@line 1629 "multibytecodec.c"
        var $32=HEAP[$31]; //@line 1629 "multibytecodec.c"
        var $33=($32) - 1; //@line 1629 "multibytecodec.c"
        var $34=$pwrt; //@line 1629 "multibytecodec.c"
        var $35=$34; //@line 1629 "multibytecodec.c"
        HEAP[$35]=$33; //@line 1629 "multibytecodec.c"
        var $36=$pwrt; //@line 1629 "multibytecodec.c"
        var $37=$36; //@line 1629 "multibytecodec.c"
        var $38=HEAP[$37]; //@line 1629 "multibytecodec.c"
        var $39=($38)==0; //@line 1629 "multibytecodec.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1629 "multibytecodec.c"
      case 5: // $bb4
        var $40=$pwrt; //@line 1629 "multibytecodec.c"
        var $41=$40+4; //@line 1629 "multibytecodec.c"
        var $42=HEAP[$41]; //@line 1629 "multibytecodec.c"
        var $43=$42+24; //@line 1629 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 1629 "multibytecodec.c"
        var $45=$pwrt; //@line 1629 "multibytecodec.c"
        FUNCTION_TABLE[$44]($45); //@line 1629 "multibytecodec.c"
        __label__ = 6; break; //@line 1629 "multibytecodec.c"
      case 6: // $bb5
        $0=0; //@line 1630 "multibytecodec.c"
        __label__ = 10; break; //@line 1630 "multibytecodec.c"
      case 7: // $bb6
        var $46=$pwrt; //@line 1633 "multibytecodec.c"
        var $47=$46; //@line 1633 "multibytecodec.c"
        var $48=HEAP[$47]; //@line 1633 "multibytecodec.c"
        var $49=($48) - 1; //@line 1633 "multibytecodec.c"
        var $50=$pwrt; //@line 1633 "multibytecodec.c"
        var $51=$50; //@line 1633 "multibytecodec.c"
        HEAP[$51]=$49; //@line 1633 "multibytecodec.c"
        var $52=$pwrt; //@line 1633 "multibytecodec.c"
        var $53=$52; //@line 1633 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 1633 "multibytecodec.c"
        var $55=($54)==0; //@line 1633 "multibytecodec.c"
        if ($55) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1633 "multibytecodec.c"
      case 8: // $bb7
        var $56=$pwrt; //@line 1633 "multibytecodec.c"
        var $57=$56+4; //@line 1633 "multibytecodec.c"
        var $58=HEAP[$57]; //@line 1633 "multibytecodec.c"
        var $59=$58+24; //@line 1633 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 1633 "multibytecodec.c"
        var $61=$pwrt; //@line 1633 "multibytecodec.c"
        FUNCTION_TABLE[$60]($61); //@line 1633 "multibytecodec.c"
        __label__ = 9; break; //@line 1633 "multibytecodec.c"
      case 9: // $bb8
        var $62=HEAP[__Py_NoneStruct]; //@line 1635 "multibytecodec.c"
        var $63=($62) + 1; //@line 1635 "multibytecodec.c"
        HEAP[__Py_NoneStruct]=$63; //@line 1635 "multibytecodec.c"
        $0=__Py_NoneStruct; //@line 1635 "multibytecodec.c"
        __label__ = 10; break; //@line 1635 "multibytecodec.c"
      case 10: // $bb9
        var $64=$0; //@line 1623 "multibytecodec.c"
        $retval=$64; //@line 1623 "multibytecodec.c"
        var $retval10=$retval; //@line 1623 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1623 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $self;
        var $stream=__stackBase__;
        var $codec;
        var $errors=__stackBase__+4;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        $codec=0; //@line 1642 "multibytecodec.c"
        HEAP[$errors]=0; //@line 1643 "multibytecodec.c"
        var $1=$args_addr; //@line 1645 "multibytecodec.c"
        var $2=$kwds_addr; //@line 1645 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str46, _streamkwarglist, allocate([$stream,0,0,0,$errors,0,0,0], ["%struct.PyObject**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 1645 "multibytecodec.c"
        var $4=($3)==0; //@line 1645 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1645 "multibytecodec.c"
      case 1: // $bb
        $0=0; //@line 1647 "multibytecodec.c"
        __label__ = 21; break; //@line 1647 "multibytecodec.c"
      case 2: // $bb1
        var $5=$type_addr; //@line 1649 "multibytecodec.c"
        var $6=$5+152; //@line 1649 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 1649 "multibytecodec.c"
        var $8=$type_addr; //@line 1649 "multibytecodec.c"
        var $9=FUNCTION_TABLE[$7]($8, 0); //@line 1649 "multibytecodec.c"
        var $10=$9; //@line 1649 "multibytecodec.c"
        $self=$10; //@line 1649 "multibytecodec.c"
        var $11=$self; //@line 1650 "multibytecodec.c"
        var $12=($11)==0; //@line 1650 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1650 "multibytecodec.c"
      case 3: // $bb2
        $0=0; //@line 1651 "multibytecodec.c"
        __label__ = 21; break; //@line 1651 "multibytecodec.c"
      case 4: // $bb3
        var $13=$type_addr; //@line 1653 "multibytecodec.c"
        var $14=$13; //@line 1653 "multibytecodec.c"
        var $15=_PyObject_GetAttrString($14, __str29); //@line 1653 "multibytecodec.c"
        $codec=$15; //@line 1653 "multibytecodec.c"
        var $16=$codec; //@line 1654 "multibytecodec.c"
        var $17=($16)==0; //@line 1654 "multibytecodec.c"
        if ($17) { __label__ = 13; break; } else { __label__ = 5; break; } //@line 1654 "multibytecodec.c"
      case 5: // $bb4
        var $18=$codec; //@line 1656 "multibytecodec.c"
        var $19=$18+4; //@line 1656 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 1656 "multibytecodec.c"
        var $21=($20)!=(_MultibyteCodec_Type); //@line 1656 "multibytecodec.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1656 "multibytecodec.c"
      case 6: // $bb5
        var $22=HEAP[_PyExc_TypeError]; //@line 1657 "multibytecodec.c"
        _PyErr_SetString($22, __str30); //@line 1657 "multibytecodec.c"
        __label__ = 13; break; //@line 1657 "multibytecodec.c"
      case 7: // $bb6
        var $23=$codec; //@line 1661 "multibytecodec.c"
        var $24=$23; //@line 1661 "multibytecodec.c"
        var $25=$24+8; //@line 1661 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1661 "multibytecodec.c"
        var $27=$self; //@line 1661 "multibytecodec.c"
        var $28=$27+8; //@line 1661 "multibytecodec.c"
        HEAP[$28]=$26; //@line 1661 "multibytecodec.c"
        var $29=HEAP[$stream]; //@line 1662 "multibytecodec.c"
        var $30=$self; //@line 1662 "multibytecodec.c"
        var $31=$30+32; //@line 1662 "multibytecodec.c"
        HEAP[$31]=$29; //@line 1662 "multibytecodec.c"
        var $32=HEAP[$stream]; //@line 1663 "multibytecodec.c"
        var $33=$32; //@line 1663 "multibytecodec.c"
        var $34=HEAP[$33]; //@line 1663 "multibytecodec.c"
        var $35=($34) + 1; //@line 1663 "multibytecodec.c"
        var $36=$32; //@line 1663 "multibytecodec.c"
        HEAP[$36]=$35; //@line 1663 "multibytecodec.c"
        var $37=$self; //@line 1664 "multibytecodec.c"
        var $38=$37+28; //@line 1664 "multibytecodec.c"
        HEAP[$38]=0; //@line 1664 "multibytecodec.c"
        var $39=HEAP[$errors]; //@line 1665 "multibytecodec.c"
        var $40=_internal_error_callback($39); //@line 1665 "multibytecodec.c"
        var $41=$self; //@line 1665 "multibytecodec.c"
        var $42=$41+20; //@line 1665 "multibytecodec.c"
        HEAP[$42]=$40; //@line 1665 "multibytecodec.c"
        var $43=$self; //@line 1666 "multibytecodec.c"
        var $44=$43+20; //@line 1666 "multibytecodec.c"
        var $45=HEAP[$44]; //@line 1666 "multibytecodec.c"
        var $46=($45)==0; //@line 1666 "multibytecodec.c"
        if ($46) { __lastLabel__ = 7; __label__ = 14; break; } else { __lastLabel__ = 7; __label__ = 8; break; } //@line 1666 "multibytecodec.c"
      case 8: // $bb7
        var $47=$self; //@line 1668 "multibytecodec.c"
        var $48=$47+8; //@line 1668 "multibytecodec.c"
        var $49=HEAP[$48]; //@line 1668 "multibytecodec.c"
        var $50=$49+16; //@line 1668 "multibytecodec.c"
        var $51=HEAP[$50]; //@line 1668 "multibytecodec.c"
        var $52=($51)!=0; //@line 1668 "multibytecodec.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1668 "multibytecodec.c"
      case 9: // $bb8
        var $53=$self; //@line 1668 "multibytecodec.c"
        var $54=$53+8; //@line 1668 "multibytecodec.c"
        var $55=HEAP[$54]; //@line 1668 "multibytecodec.c"
        var $56=$55+16; //@line 1668 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 1668 "multibytecodec.c"
        var $58=$self; //@line 1668 "multibytecodec.c"
        var $59=$58+8; //@line 1668 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 1668 "multibytecodec.c"
        var $61=$60+4; //@line 1668 "multibytecodec.c"
        var $62=HEAP[$61]; //@line 1668 "multibytecodec.c"
        var $63=$self; //@line 1668 "multibytecodec.c"
        var $64=$63+12; //@line 1668 "multibytecodec.c"
        var $65=FUNCTION_TABLE[$57]($64, $62); //@line 1668 "multibytecodec.c"
        var $66=($65)!=0; //@line 1668 "multibytecodec.c"
        if ($66) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 1668 "multibytecodec.c"
      case 10: // $bb9
        var $67=$codec; //@line 1672 "multibytecodec.c"
        var $68=$67; //@line 1672 "multibytecodec.c"
        var $69=HEAP[$68]; //@line 1672 "multibytecodec.c"
        var $70=($69) - 1; //@line 1672 "multibytecodec.c"
        var $71=$codec; //@line 1672 "multibytecodec.c"
        var $72=$71; //@line 1672 "multibytecodec.c"
        HEAP[$72]=$70; //@line 1672 "multibytecodec.c"
        var $73=$codec; //@line 1672 "multibytecodec.c"
        var $74=$73; //@line 1672 "multibytecodec.c"
        var $75=HEAP[$74]; //@line 1672 "multibytecodec.c"
        var $76=($75)==0; //@line 1672 "multibytecodec.c"
        if ($76) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1672 "multibytecodec.c"
      case 11: // $bb10
        var $77=$codec; //@line 1672 "multibytecodec.c"
        var $78=$77+4; //@line 1672 "multibytecodec.c"
        var $79=HEAP[$78]; //@line 1672 "multibytecodec.c"
        var $80=$79+24; //@line 1672 "multibytecodec.c"
        var $81=HEAP[$80]; //@line 1672 "multibytecodec.c"
        var $82=$codec; //@line 1672 "multibytecodec.c"
        FUNCTION_TABLE[$81]($82); //@line 1672 "multibytecodec.c"
        __label__ = 12; break; //@line 1672 "multibytecodec.c"
      case 12: // $bb11
        var $83=$self; //@line 1673 "multibytecodec.c"
        var $84=$83; //@line 1673 "multibytecodec.c"
        $0=$84; //@line 1673 "multibytecodec.c"
        __label__ = 21; break; //@line 1673 "multibytecodec.c"
      case 13: // $errorexitthread_pre_split
        var $_pr=$self;
        __lastLabel__ = 13; __label__ = 14; break;
      case 14: // $errorexit
        var $85=__lastLabel__ == 13 ? $_pr : ($43);
        var $86=($85)!=0; //@line 1676 "multibytecodec.c"
        if ($86) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1676 "multibytecodec.c"
      case 15: // $bb12
        var $87=$self; //@line 1676 "multibytecodec.c"
        var $88=$87; //@line 1676 "multibytecodec.c"
        var $89=$88; //@line 1676 "multibytecodec.c"
        var $90=HEAP[$89]; //@line 1676 "multibytecodec.c"
        var $91=($90) - 1; //@line 1676 "multibytecodec.c"
        var $92=$88; //@line 1676 "multibytecodec.c"
        HEAP[$92]=$91; //@line 1676 "multibytecodec.c"
        var $93=$88; //@line 1676 "multibytecodec.c"
        var $94=HEAP[$93]; //@line 1676 "multibytecodec.c"
        var $95=($94)==0; //@line 1676 "multibytecodec.c"
        if ($95) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1676 "multibytecodec.c"
      case 16: // $bb13
        var $96=$self; //@line 1676 "multibytecodec.c"
        var $97=$96; //@line 1676 "multibytecodec.c"
        var $98=$97+4; //@line 1676 "multibytecodec.c"
        var $99=HEAP[$98]; //@line 1676 "multibytecodec.c"
        var $100=$99+24; //@line 1676 "multibytecodec.c"
        var $101=HEAP[$100]; //@line 1676 "multibytecodec.c"
        var $102=$self; //@line 1676 "multibytecodec.c"
        var $103=$102; //@line 1676 "multibytecodec.c"
        FUNCTION_TABLE[$101]($103); //@line 1676 "multibytecodec.c"
        __label__ = 17; break; //@line 1676 "multibytecodec.c"
      case 17: // $bb14
        var $104=$codec; //@line 1677 "multibytecodec.c"
        var $105=($104)!=0; //@line 1677 "multibytecodec.c"
        if ($105) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 1677 "multibytecodec.c"
      case 18: // $bb15
        var $106=$codec; //@line 1677 "multibytecodec.c"
        var $107=$106; //@line 1677 "multibytecodec.c"
        var $108=HEAP[$107]; //@line 1677 "multibytecodec.c"
        var $109=($108) - 1; //@line 1677 "multibytecodec.c"
        var $110=$codec; //@line 1677 "multibytecodec.c"
        var $111=$110; //@line 1677 "multibytecodec.c"
        HEAP[$111]=$109; //@line 1677 "multibytecodec.c"
        var $112=$codec; //@line 1677 "multibytecodec.c"
        var $113=$112; //@line 1677 "multibytecodec.c"
        var $114=HEAP[$113]; //@line 1677 "multibytecodec.c"
        var $115=($114)==0; //@line 1677 "multibytecodec.c"
        if ($115) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1677 "multibytecodec.c"
      case 19: // $bb16
        var $116=$codec; //@line 1677 "multibytecodec.c"
        var $117=$116+4; //@line 1677 "multibytecodec.c"
        var $118=HEAP[$117]; //@line 1677 "multibytecodec.c"
        var $119=$118+24; //@line 1677 "multibytecodec.c"
        var $120=HEAP[$119]; //@line 1677 "multibytecodec.c"
        var $121=$codec; //@line 1677 "multibytecodec.c"
        FUNCTION_TABLE[$120]($121); //@line 1677 "multibytecodec.c"
        __label__ = 20; break; //@line 1677 "multibytecodec.c"
      case 20: // $bb17
        $0=0; //@line 1678 "multibytecodec.c"
        __label__ = 21; break; //@line 1678 "multibytecodec.c"
      case 21: // $bb18
        var $122=$0; //@line 1647 "multibytecodec.c"
        $retval=$122; //@line 1647 "multibytecodec.c"
        var $retval19=$retval; //@line 1647 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1647 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_init($self, $args, $kwds) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    $0=0; //@line 1684 "multibytecodec.c"
    var $1=$0; //@line 1684 "multibytecodec.c"
    $retval=$1; //@line 1684 "multibytecodec.c"
    var $retval1=$retval; //@line 1684 "multibytecodec.c"
    ;
    return $retval1; //@line 1684 "multibytecodec.c"
  }
  

  function _mbstreamwriter_traverse($self, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret6;
        $self_addr=$self;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$self_addr; //@line 1691 "multibytecodec.c"
        var $2=$1+20; //@line 1691 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 1691 "multibytecodec.c"
        var $4=($3)==0; //@line 1691 "multibytecodec.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1691 "multibytecodec.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1691 "multibytecodec.c"
        var $6=$5+20; //@line 1691 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 1691 "multibytecodec.c"
        var $8=($7) > 3; //@line 1691 "multibytecodec.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1691 "multibytecodec.c"
      case 2: // $bb1
        var $9=$self_addr; //@line 1692 "multibytecodec.c"
        var $10=$9+20; //@line 1692 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 1692 "multibytecodec.c"
        var $12=($11)!=0; //@line 1692 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1692 "multibytecodec.c"
      case 3: // $bb2
        var $13=$self_addr; //@line 1692 "multibytecodec.c"
        var $14=$13+20; //@line 1692 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 1692 "multibytecodec.c"
        var $16=$visit_addr; //@line 1692 "multibytecodec.c"
        var $17=$arg_addr; //@line 1692 "multibytecodec.c"
        var $18=FUNCTION_TABLE[$16]($15, $17); //@line 1692 "multibytecodec.c"
        $vret=$18; //@line 1692 "multibytecodec.c"
        var $19=$vret; //@line 1692 "multibytecodec.c"
        var $20=($19)!=0; //@line 1692 "multibytecodec.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1692 "multibytecodec.c"
      case 4: // $bb3
        var $21=$vret; //@line 1692 "multibytecodec.c"
        $0=$21; //@line 1692 "multibytecodec.c"
        __label__ = 9; break; //@line 1692 "multibytecodec.c"
      case 5: // $bb4
        var $22=$self_addr; //@line 1693 "multibytecodec.c"
        var $23=$22+32; //@line 1693 "multibytecodec.c"
        var $24=HEAP[$23]; //@line 1693 "multibytecodec.c"
        var $25=($24)!=0; //@line 1693 "multibytecodec.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1693 "multibytecodec.c"
      case 6: // $bb5
        var $26=$self_addr; //@line 1693 "multibytecodec.c"
        var $27=$26+32; //@line 1693 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 1693 "multibytecodec.c"
        var $29=$visit_addr; //@line 1693 "multibytecodec.c"
        var $30=$arg_addr; //@line 1693 "multibytecodec.c"
        var $31=FUNCTION_TABLE[$29]($28, $30); //@line 1693 "multibytecodec.c"
        $vret6=$31; //@line 1693 "multibytecodec.c"
        var $32=$vret6; //@line 1693 "multibytecodec.c"
        var $33=($32)!=0; //@line 1693 "multibytecodec.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1693 "multibytecodec.c"
      case 7: // $bb7
        var $34=$vret6; //@line 1693 "multibytecodec.c"
        $0=$34; //@line 1693 "multibytecodec.c"
        __label__ = 9; break; //@line 1693 "multibytecodec.c"
      case 8: // $bb8
        $0=0; //@line 1694 "multibytecodec.c"
        __label__ = 9; break; //@line 1694 "multibytecodec.c"
      case 9: // $bb9
        var $35=$0; //@line 1692 "multibytecodec.c"
        $retval=$35; //@line 1692 "multibytecodec.c"
        var $retval10=$retval; //@line 1692 "multibytecodec.c"
        ;
        return $retval10; //@line 1692 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 1700 "multibytecodec.c"
        var $1=$0; //@line 1700 "multibytecodec.c"
        _PyObject_GC_UnTrack($1); //@line 1700 "multibytecodec.c"
        var $2=$self_addr; //@line 1701 "multibytecodec.c"
        var $3=$2+20; //@line 1701 "multibytecodec.c"
        var $4=HEAP[$3]; //@line 1701 "multibytecodec.c"
        var $5=($4)!=0; //@line 1701 "multibytecodec.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 1701 "multibytecodec.c"
      case 1: // $bb
        var $6=$self_addr; //@line 1701 "multibytecodec.c"
        var $7=$6+20; //@line 1701 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 1701 "multibytecodec.c"
        var $9=($8)==0; //@line 1701 "multibytecodec.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1701 "multibytecodec.c"
      case 2: // $bb1
        var $10=$self_addr; //@line 1701 "multibytecodec.c"
        var $11=$10+20; //@line 1701 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1701 "multibytecodec.c"
        var $13=($12) > 3; //@line 1701 "multibytecodec.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1701 "multibytecodec.c"
      case 3: // $bb2
        var $14=$self_addr; //@line 1701 "multibytecodec.c"
        var $15=$14+20; //@line 1701 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 1701 "multibytecodec.c"
        var $17=$16; //@line 1701 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 1701 "multibytecodec.c"
        var $19=($18) - 1; //@line 1701 "multibytecodec.c"
        var $20=$16; //@line 1701 "multibytecodec.c"
        HEAP[$20]=$19; //@line 1701 "multibytecodec.c"
        var $21=$16; //@line 1701 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 1701 "multibytecodec.c"
        var $23=($22)==0; //@line 1701 "multibytecodec.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1701 "multibytecodec.c"
      case 4: // $bb3
        var $24=$self_addr; //@line 1701 "multibytecodec.c"
        var $25=$24+20; //@line 1701 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1701 "multibytecodec.c"
        var $27=$26+4; //@line 1701 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 1701 "multibytecodec.c"
        var $29=$28+24; //@line 1701 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 1701 "multibytecodec.c"
        var $31=$self_addr; //@line 1701 "multibytecodec.c"
        var $32=$31+20; //@line 1701 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 1701 "multibytecodec.c"
        FUNCTION_TABLE[$30]($33); //@line 1701 "multibytecodec.c"
        __label__ = 5; break; //@line 1701 "multibytecodec.c"
      case 5: // $bb4
        var $34=$self_addr; //@line 1702 "multibytecodec.c"
        var $35=$34+32; //@line 1702 "multibytecodec.c"
        var $36=HEAP[$35]; //@line 1702 "multibytecodec.c"
        var $37=($36)!=0; //@line 1702 "multibytecodec.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1702 "multibytecodec.c"
      case 6: // $bb5
        var $38=$self_addr; //@line 1702 "multibytecodec.c"
        var $39=$38+32; //@line 1702 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 1702 "multibytecodec.c"
        var $41=$40; //@line 1702 "multibytecodec.c"
        var $42=HEAP[$41]; //@line 1702 "multibytecodec.c"
        var $43=($42) - 1; //@line 1702 "multibytecodec.c"
        var $44=$40; //@line 1702 "multibytecodec.c"
        HEAP[$44]=$43; //@line 1702 "multibytecodec.c"
        var $45=$40; //@line 1702 "multibytecodec.c"
        var $46=HEAP[$45]; //@line 1702 "multibytecodec.c"
        var $47=($46)==0; //@line 1702 "multibytecodec.c"
        if ($47) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1702 "multibytecodec.c"
      case 7: // $bb6
        var $48=$self_addr; //@line 1702 "multibytecodec.c"
        var $49=$48+32; //@line 1702 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 1702 "multibytecodec.c"
        var $51=$50+4; //@line 1702 "multibytecodec.c"
        var $52=HEAP[$51]; //@line 1702 "multibytecodec.c"
        var $53=$52+24; //@line 1702 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 1702 "multibytecodec.c"
        var $55=$self_addr; //@line 1702 "multibytecodec.c"
        var $56=$55+32; //@line 1702 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 1702 "multibytecodec.c"
        FUNCTION_TABLE[$54]($57); //@line 1702 "multibytecodec.c"
        __label__ = 8; break; //@line 1702 "multibytecodec.c"
      case 8: // $bb7
        var $58=$self_addr; //@line 1703 "multibytecodec.c"
        var $59=$58; //@line 1703 "multibytecodec.c"
        var $60=$59+4; //@line 1703 "multibytecodec.c"
        var $61=HEAP[$60]; //@line 1703 "multibytecodec.c"
        var $62=$61+160; //@line 1703 "multibytecodec.c"
        var $63=HEAP[$62]; //@line 1703 "multibytecodec.c"
        var $64=$self_addr; //@line 1703 "multibytecodec.c"
        var $65=$64; //@line 1703 "multibytecodec.c"
        FUNCTION_TABLE[$63]($65); //@line 1703 "multibytecodec.c"
        ;
        return; //@line 1704 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function ___create_codec($ignore, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ignore_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $self;
        var $codec;
        $ignore_addr=$ignore;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1777 "multibytecodec.c"
        var $2=_PyCapsule_IsValid($1, __str49); //@line 1777 "multibytecodec.c"
        var $3=($2)==0; //@line 1777 "multibytecodec.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1777 "multibytecodec.c"
      case 1: // $bb
        var $4=HEAP[_PyExc_ValueError]; //@line 1778 "multibytecodec.c"
        _PyErr_SetString($4, __str50); //@line 1778 "multibytecodec.c"
        $0=0; //@line 1779 "multibytecodec.c"
        __label__ = 8; break; //@line 1779 "multibytecodec.c"
      case 2: // $bb1
        var $5=$arg_addr; //@line 1782 "multibytecodec.c"
        var $6=_PyCapsule_GetPointer($5, __str49); //@line 1782 "multibytecodec.c"
        var $7=$6; //@line 1782 "multibytecodec.c"
        $codec=$7; //@line 1782 "multibytecodec.c"
        var $8=$codec; //@line 1783 "multibytecodec.c"
        var $9=$8+8; //@line 1783 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 1783 "multibytecodec.c"
        var $11=($10)!=0; //@line 1783 "multibytecodec.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1783 "multibytecodec.c"
      case 3: // $bb2
        var $12=$codec; //@line 1783 "multibytecodec.c"
        var $13=$12+8; //@line 1783 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 1783 "multibytecodec.c"
        var $15=$codec; //@line 1783 "multibytecodec.c"
        var $16=$15+4; //@line 1783 "multibytecodec.c"
        var $17=HEAP[$16]; //@line 1783 "multibytecodec.c"
        var $18=FUNCTION_TABLE[$14]($17); //@line 1783 "multibytecodec.c"
        var $19=($18)!=0; //@line 1783 "multibytecodec.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1783 "multibytecodec.c"
      case 4: // $bb3
        $0=0; //@line 1784 "multibytecodec.c"
        __label__ = 8; break; //@line 1784 "multibytecodec.c"
      case 5: // $bb4
        var $20=__PyObject_New(_MultibyteCodec_Type); //@line 1786 "multibytecodec.c"
        var $21=$20; //@line 1786 "multibytecodec.c"
        $self=$21; //@line 1786 "multibytecodec.c"
        var $22=($21)==0; //@line 1787 "multibytecodec.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1787 "multibytecodec.c"
      case 6: // $bb5
        $0=0; //@line 1788 "multibytecodec.c"
        __label__ = 8; break; //@line 1788 "multibytecodec.c"
      case 7: // $bb6
        var $23=$self; //@line 1789 "multibytecodec.c"
        var $24=$23+8; //@line 1789 "multibytecodec.c"
        var $25=$codec; //@line 1789 "multibytecodec.c"
        HEAP[$24]=$25; //@line 1789 "multibytecodec.c"
        var $26=$self; //@line 1791 "multibytecodec.c"
        var $27=$26; //@line 1791 "multibytecodec.c"
        $0=$27; //@line 1791 "multibytecodec.c"
        __label__ = 8; break; //@line 1791 "multibytecodec.c"
      case 8: // $bb7
        var $28=$0; //@line 1779 "multibytecodec.c"
        $retval=$28; //@line 1779 "multibytecodec.c"
        var $retval8=$retval; //@line 1779 "multibytecodec.c"
        ;
        return $retval8; //@line 1779 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_multibytecodec() {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $i;
        var $m;
        var $typelist=__stackBase__;
        var $0=$typelist; //@line 1810 "multibytecodec.c"
        HEAP[$0]=_MultibyteIncrementalEncoder_Type; //@line 1810 "multibytecodec.c"
        var $1=$typelist+4; //@line 1810 "multibytecodec.c"
        HEAP[$1]=_MultibyteIncrementalDecoder_Type; //@line 1810 "multibytecodec.c"
        var $2=$typelist+8; //@line 1810 "multibytecodec.c"
        HEAP[$2]=_MultibyteStreamReader_Type; //@line 1810 "multibytecodec.c"
        var $3=$typelist+12; //@line 1810 "multibytecodec.c"
        HEAP[$3]=_MultibyteStreamWriter_Type; //@line 1810 "multibytecodec.c"
        var $4=$typelist+16; //@line 1810 "multibytecodec.c"
        HEAP[$4]=0; //@line 1810 "multibytecodec.c"
        var $5=_PyType_Ready(_MultibyteCodec_Type); //@line 1812 "multibytecodec.c"
        var $6=($5) < 0; //@line 1812 "multibytecodec.c"
        if ($6) { __label__ = 8; break; } else { __label__ = 1; break; } //@line 1812 "multibytecodec.c"
      case 1: // $bb
        var $7=_Py_InitModule4(__str52, ___methods, 0, 0, 1013); //@line 1815 "multibytecodec.c"
        $m=$7; //@line 1815 "multibytecodec.c"
        var $8=$m; //@line 1816 "multibytecodec.c"
        var $9=($8)==0; //@line 1816 "multibytecodec.c"
        if ($9) { __label__ = 8; break; } else { __label__ = 2; break; } //@line 1816 "multibytecodec.c"
      case 2: // $bb1
        $i=0; //@line 1819 "multibytecodec.c"
        __label__ = 5; break; //@line 1819 "multibytecodec.c"
      case 3: // $bb2
        var $10=$i; //@line 1820 "multibytecodec.c"
        var $11=$typelist+$10*4; //@line 1820 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1820 "multibytecodec.c"
        var $13=_PyType_Ready($12); //@line 1820 "multibytecodec.c"
        var $14=($13) < 0; //@line 1820 "multibytecodec.c"
        if ($14) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 1820 "multibytecodec.c"
      case 4: // $bb3
        var $15=$i; //@line 1822 "multibytecodec.c"
        var $16=$typelist+$15*4; //@line 1822 "multibytecodec.c"
        var $17=HEAP[$16]; //@line 1822 "multibytecodec.c"
        var $18=$17; //@line 1822 "multibytecodec.c"
        var $19=$18; //@line 1822 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 1822 "multibytecodec.c"
        var $21=($20) + 1; //@line 1822 "multibytecodec.c"
        var $22=$18; //@line 1822 "multibytecodec.c"
        HEAP[$22]=$21; //@line 1822 "multibytecodec.c"
        var $23=$i; //@line 1823 "multibytecodec.c"
        var $24=$typelist+$23*4; //@line 1823 "multibytecodec.c"
        var $25=HEAP[$24]; //@line 1823 "multibytecodec.c"
        var $26=$25; //@line 1823 "multibytecodec.c"
        var $27=$i; //@line 1823 "multibytecodec.c"
        var $28=$typelist+$27*4; //@line 1823 "multibytecodec.c"
        var $29=HEAP[$28]; //@line 1823 "multibytecodec.c"
        var $30=$29+12; //@line 1823 "multibytecodec.c"
        var $31=HEAP[$30]; //@line 1823 "multibytecodec.c"
        var $32=$m; //@line 1823 "multibytecodec.c"
        var $33=_PyModule_AddObject($32, $31, $26); //@line 1823 "multibytecodec.c"
        var $34=$i; //@line 1819 "multibytecodec.c"
        var $35=($34) + 1; //@line 1819 "multibytecodec.c"
        $i=$35; //@line 1819 "multibytecodec.c"
        __label__ = 5; break; //@line 1819 "multibytecodec.c"
      case 5: // $bb4
        var $36=$i; //@line 1819 "multibytecodec.c"
        var $37=$typelist+$36*4; //@line 1819 "multibytecodec.c"
        var $38=HEAP[$37]; //@line 1819 "multibytecodec.c"
        var $39=($38)!=0; //@line 1819 "multibytecodec.c"
        if ($39) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1819 "multibytecodec.c"
      case 6: // $bb5
        var $40=_PyErr_Occurred(); //@line 1827 "multibytecodec.c"
        var $41=($40)!=0; //@line 1827 "multibytecodec.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1827 "multibytecodec.c"
      case 7: // $bb6
        _Py_FatalError(__str53); //@line 1828 "multibytecodec.c"
        __label__ = 8; break; //@line 1828 "multibytecodec.c"
      case 8: // $return
        STACKTOP = __stackBase__;
        return; //@line 1813 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_multibytecodec"] = _init_multibytecodec;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_codecctx_errors_get,0,_codecctx_errors_set,0,_MultibyteCodec_Encode,0,_MultibyteCodec_Decode,0,_multibytecodec_dealloc,0,_PyObject_GenericGetAttr,0,_mbiencoder_encode,0,_mbiencoder_reset,0,_mbiencoder_dealloc,0,_mbiencoder_traverse,0,_mbiencoder_init,0,_mbiencoder_new,0,_mbidecoder_decode,0,_mbidecoder_reset,0,_mbidecoder_dealloc,0,_mbidecoder_traverse,0,_mbidecoder_init,0,_mbidecoder_new,0,_mbstreamreader_read,0,_mbstreamreader_readline,0,_mbstreamreader_readlines,0,_mbstreamreader_reset,0,_mbstreamreader_dealloc,0,_mbstreamreader_traverse,0,_mbstreamreader_init,0,_mbstreamreader_new,0,_mbstreamwriter_write,0,_mbstreamwriter_writelines,0,_mbstreamwriter_reset,0,_mbstreamwriter_dealloc,0,_mbstreamwriter_traverse,0,_mbstreamwriter_init,0,_mbstreamwriter_new,0,___create_codec,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_MultibyteCodec_Encode__doc__=allocate([73,46,101,110,99,111,100,101,40,117,110,105,99,111,100,101,91,44,32,101,114,114,111,114,115,93,41,32,45,62,32,40,115,116,114,105,110,103,44,32,108,101,110,103,116,104,32,99,111,110,115,117,109,101,100,41,10,10,82,101,116,117,114,110,32,97,110,32,101,110,99,111,100,101,100,32,115,116,114,105,110,103,32,118,101,114,115,105,111,110,32,111,102,32,96,117,110,105,99,111,100,101,39,46,32,101,114,114,111,114,115,32,109,97,121,32,98,101,32,103,105,118,101,110,32,116,111,10,115,101,116,32,97,32,100,105,102,102,101,114,101,110,116,32,101,114,114,111,114,32,104,97,110,100,108,105,110,103,32,115,99,104,101,109,101,46,32,68,101,102,97,117,108,116,32,105,115,32,39,115,116,114,105,99,116,39,32,109,101,97,110,105,110,103,32,116,104,97,116,10,101,110,99,111,100,105,110,103,32,101,114,114,111,114,115,32,114,97,105,115,101,32,97,32,85,110,105,99,111,100,101,69,110,99,111,100,101,69,114,114,111,114,46,32,79,116,104,101,114,32,112,111,115,115,105,98,108,101,32,118,97,108,117,101,115,32,97,114,101,10,39,105,103,110,111,114,101,39,44,32,39,114,101,112,108,97,99,101,39,32,97,110,100,32,39,120,109,108,99,104,97,114,114,101,102,114,101,112,108,97,99,101,39,32,97,115,32,119,101,108,108,32,97,115,32,97,110,121,32,111,116,104,101,114,32,110,97,109,101,10,114,101,103,105,115,116,101,114,101,100,32,119,105,116,104,32,99,111,100,101,99,115,46,114,101,103,105,115,116,101,114,95,101,114,114,111,114,32,116,104,97,116,32,99,97,110,32,104,97,110,100,108,101,32,85,110,105,99,111,100,101,69,110,99,111,100,101,69,114,114,111,114,115,46,0] /* I.encode(unicode[, e */, "i8", ALLOC_NORMAL);
_MultibyteCodec_Decode__doc__=allocate([73,46,100,101,99,111,100,101,40,115,116,114,105,110,103,91,44,32,101,114,114,111,114,115,93,41,32,45,62,32,40,117,110,105,99,111,100,101,111,98,106,101,99,116,44,32,108,101,110,103,116,104,32,99,111,110,115,117,109,101,100,41,10,10,68,101,99,111,100,101,115,32,96,115,116,114,105,110,103,39,32,117,115,105,110,103,32,73,44,32,97,110,32,77,117,108,116,105,98,121,116,101,67,111,100,101,99,32,105,110,115,116,97,110,99,101,46,32,101,114,114,111,114,115,32,109,97,121,32,98,101,32,103,105,118,101,110,10,116,111,32,115,101,116,32,97,32,100,105,102,102,101,114,101,110,116,32,101,114,114,111,114,32,104,97,110,100,108,105,110,103,32,115,99,104,101,109,101,46,32,68,101,102,97,117,108,116,32,105,115,32,39,115,116,114,105,99,116,39,32,109,101,97,110,105,110,103,10,116,104,97,116,32,101,110,99,111,100,105,110,103,32,101,114,114,111,114,115,32,114,97,105,115,101,32,97,32,85,110,105,99,111,100,101,68,101,99,111,100,101,69,114,114,111,114,46,32,79,116,104,101,114,32,112,111,115,115,105,98,108,101,32,118,97,108,117,101,115,10,97,114,101,32,39,105,103,110,111,114,101,39,32,97,110,100,32,39,114,101,112,108,97,99,101,39,32,97,115,32,119,101,108,108,32,97,115,32,97,110,121,32,111,116,104,101,114,32,110,97,109,101,32,114,101,103,105,115,116,101,114,101,100,32,119,105,116,104,10,99,111,100,101,99,115,46,114,101,103,105,115,116,101,114,95,101,114,114,111,114,32,116,104,97,116,32,105,115,32,97,98,108,101,32,116,111,32,104,97,110,100,108,101,32,85,110,105,99,111,100,101,68,101,99,111,100,101,69,114,114,111,114,115,46,0] /* I.decode(string[, er */, "i8", ALLOC_NORMAL);
_codeckwarglist=allocate(12, "i8*", ALLOC_NORMAL);
__str=allocate([105,110,112,117,116,0] /* input\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([101,114,114,111,114,115,0] /* errors\00 */, "i8", ALLOC_NORMAL);
_incnewkwarglist=allocate(8, "i8*", ALLOC_NORMAL);
_incrementalkwarglist=allocate(12, "i8*", ALLOC_NORMAL);
__str2=allocate([102,105,110,97,108,0] /* final\00 */, "i8", ALLOC_NORMAL);
_streamkwarglist=allocate(12, "i8*", ALLOC_NORMAL);
__str3=allocate([115,116,114,101,97,109,0] /* stream\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([115,116,114,105,99,116,0] /* strict\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([105,103,110,111,114,101,0] /* ignore\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([114,101,112,108,97,99,101,0] /* replace\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,101,114,114,111,114,115,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,55,41,41,41,32,33,61,32,48,41,0] /* ((((((PyObject_)(err */, "i8", ALLOC_NORMAL);
__str8=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,99,106,107,99,111,100,101,99,115,47,109,117,108,116,105,98,121,116,101,99,111,100,101,99,46,99,0] /* ../cpython/Modules/c */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8537=allocate([99,97,108,108,95,101,114,114,111,114,95,99,97,108,108,98,97,99,107,0] /* call_error_callback\ */, "i8", ALLOC_NORMAL);
__str9=allocate([101,114,114,111,114,115,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0] /* errors must be a str */, "i8", ALLOC_NORMAL);
__str10=allocate([104,111,119,32,116,111,32,116,114,101,97,116,32,101,114,114,111,114,115,0] /* how to treat errors\ */, "i8", ALLOC_NORMAL);
_codecctx_getsets=allocate(40, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str11=allocate([105,108,108,101,103,97,108,32,109,117,108,116,105,98,121,116,101,32,115,101,113,117,101,110,99,101,0] /* illegal multibyte se */, "i8", ALLOC_NORMAL);
__str12=allocate([105,110,99,111,109,112,108,101,116,101,32,109,117,108,116,105,98,121,116,101,32,115,101,113,117,101,110,99,101,0] /* incomplete multibyte */, "i8", ALLOC_NORMAL);
__str13=allocate([105,110,116,101,114,110,97,108,32,99,111,100,101,99,32,101,114,114,111,114,0] /* internal codec error */, "i8", ALLOC_NORMAL);
__str14=allocate([117,110,107,110,111,119,110,32,114,117,110,116,105,109,101,32,101,114,114,111,114,0] /* unknown runtime erro */, "i8", ALLOC_NORMAL);
__str15=allocate([101,110,99,111,100,105,110,103,32,101,114,114,111,114,32,104,97,110,100,108,101,114,32,109,117,115,116,32,114,101,116,117,114,110,32,40,117,110,105,99,111,100,101,44,32,105,110,116,41,32,116,117,112,108,101,0] /* encoding error handl */, "i8", ALLOC_NORMAL);
__str16=allocate([112,111,115,105,116,105,111,110,32,37,122,100,32,102,114,111,109,32,101,114,114,111,114,32,104,97,110,100,108,101,114,32,111,117,116,32,111,102,32,98,111,117,110,100,115,0] /* position %zd from er */, "i8", ALLOC_NORMAL);
__str17=allocate([100,101,99,111,100,105,110,103,32,101,114,114,111,114,32,104,97,110,100,108,101,114,32,109,117,115,116,32,114,101,116,117,114,110,32,40,117,110,105,99,111,100,101,44,32,105,110,116,41,32,116,117,112,108,101,0] /* decoding error handl */, "i8", ALLOC_NORMAL);
__str18=allocate(1, "i8", ALLOC_NORMAL);
__str19=allocate([79,124,122,58,101,110,99,111,100,101,0] /* O|z:encode\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([99,111,117,108,100,110,39,116,32,99,111,110,118,101,114,116,32,116,104,101,32,111,98,106,101,99,116,32,116,111,32,117,110,105,99,111,100,101,46,0] /* couldn't convert the */, "i8", ALLOC_NORMAL);
__str21=allocate([115,42,124,122,58,100,101,99,111,100,101,0] /* s_|z:decode\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([101,110,99,111,100,101,0] /* encode\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([100,101,99,111,100,101,0] /* decode\00 */, "i8", ALLOC_NORMAL);
_multibytecodec_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str24=allocate([77,117,108,116,105,98,121,116,101,67,111,100,101,99,0] /* MultibyteCodec\00 */, "i8", ALLOC_NORMAL);
_MultibyteCodec_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str25=allocate([112,101,110,100,105,110,103,32,98,117,102,102,101,114,32,111,118,101,114,102,108,111,119,0] /* pending buffer overf */, "i8", ALLOC_NORMAL);
__str26=allocate([79,124,105,58,101,110,99,111,100,101,0] /* O|i:encode\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([114,101,115,101,116,0] /* reset\00 */, "i8", ALLOC_NORMAL);
_mbiencoder_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str28=allocate([124,115,58,73,110,99,114,101,109,101,110,116,97,108,69,110,99,111,100,101,114,0] /* |s:IncrementalEncode */, "i8", ALLOC_NORMAL);
__str29=allocate([99,111,100,101,99,0] /* codec\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([99,111,100,101,99,32,105,115,32,117,110,101,120,112,101,99,116,101,100,32,116,121,112,101,0] /* codec is unexpected  */, "i8", ALLOC_NORMAL);
__str31=allocate([77,117,108,116,105,98,121,116,101,73,110,99,114,101,109,101,110,116,97,108,69,110,99,111,100,101,114,0] /* MultibyteIncremental */, "i8", ALLOC_NORMAL);
_MultibyteIncrementalEncoder_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str32=allocate([115,42,124,105,58,100,101,99,111,100,101,0] /* s_|i:decode\00 */, "i8", ALLOC_NORMAL);
_mbidecoder_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str33=allocate([124,115,58,73,110,99,114,101,109,101,110,116,97,108,68,101,99,111,100,101,114,0] /* |s:IncrementalDecode */, "i8", ALLOC_NORMAL);
__str34=allocate([77,117,108,116,105,98,121,116,101,73,110,99,114,101,109,101,110,116,97,108,68,101,99,111,100,101,114,0] /* MultibyteIncremental */, "i8", ALLOC_NORMAL);
_MultibyteIncrementalDecoder_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str35=allocate([105,0] /* i\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([115,116,114,101,97,109,32,102,117,110,99,116,105,111,110,32,114,101,116,117,114,110,101,100,32,97,32,110,111,110,45,115,116,114,105,110,103,32,111,98,106,101,99,116,0] /* stream function retu */, "i8", ALLOC_NORMAL);
__str37=allocate([114,101,97,100,0] /* read\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([97,114,103,32,49,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,101,114,0] /* arg 1 must be an int */, "i8", ALLOC_NORMAL);
__str39=allocate([114,101,97,100,108,105,110,101,0] /* readline\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([114,101,97,100,108,105,110,101,115,0] /* readlines\00 */, "i8", ALLOC_NORMAL);
_mbstreamreader_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_mbstreamreader_members=allocate([0, 0, 0, 0, 6, 0, 0, 0, 36, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str41=allocate([79,124,115,58,83,116,114,101,97,109,82,101,97,100,101,114,0] /* O|s:StreamReader\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([77,117,108,116,105,98,121,116,101,83,116,114,101,97,109,82,101,97,100,101,114,0] /* MultibyteStreamReade */, "i8", ALLOC_NORMAL);
_MultibyteStreamReader_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str43=allocate([119,114,105,116,101,0] /* write\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([79,0] /* O\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([97,114,103,32,109,117,115,116,32,98,101,32,97,32,115,101,113,117,101,110,99,101,32,111,98,106,101,99,116,0] /* arg must be a sequen */, "i8", ALLOC_NORMAL);
__str46=allocate([79,124,115,58,83,116,114,101,97,109,87,114,105,116,101,114,0] /* O|s:StreamWriter\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([119,114,105,116,101,108,105,110,101,115,0] /* writelines\00 */, "i8", ALLOC_NORMAL);
_mbstreamwriter_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_mbstreamwriter_members=allocate([0, 0, 0, 0, 6, 0, 0, 0, 32, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str48=allocate([77,117,108,116,105,98,121,116,101,83,116,114,101,97,109,87,114,105,116,101,114,0] /* MultibyteStreamWrite */, "i8", ALLOC_NORMAL);
_MultibyteStreamWriter_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str49=allocate([109,117,108,116,105,98,121,116,101,99,111,100,101,99,46,95,95,109,97,112,95,42,0] /* multibytecodec.__map */, "i8", ALLOC_NORMAL);
__str50=allocate([97,114,103,117,109,101,110,116,32,116,121,112,101,32,105,110,118,97,108,105,100,0] /* argument type invali */, "i8", ALLOC_NORMAL);
__str51=allocate([95,95,99,114,101,97,116,101,95,99,111,100,101,99,0] /* __create_codec\00 */, "i8", ALLOC_NORMAL);
___methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str52=allocate([95,109,117,108,116,105,98,121,116,101,99,111,100,101,99,0] /* _multibytecodec\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([99,97,110,39,116,32,105,110,105,116,105,97,108,105,122,101,32,116,104,101,32,95,109,117,108,116,105,98,121,116,101,99,111,100,101,99,32,109,111,100,117,108,101,0] /* can't initialize the */, "i8", ALLOC_NORMAL);
HEAP[_codeckwarglist]=__str;
HEAP[_codeckwarglist+4]=__str1;
HEAP[_incnewkwarglist]=__str1;
HEAP[_incrementalkwarglist]=__str;
HEAP[_incrementalkwarglist+4]=__str2;
HEAP[_streamkwarglist]=__str3;
HEAP[_streamkwarglist+4]=__str1;
HEAP[_codecctx_getsets]=__str1;
HEAP[_codecctx_getsets+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_codecctx_getsets+8]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_codecctx_getsets+12]=__str10;
HEAP[_multibytecodec_methods]=__str22;
HEAP[_multibytecodec_methods+4]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_multibytecodec_methods+12]=_MultibyteCodec_Encode__doc__;
HEAP[_multibytecodec_methods+16]=__str23;
HEAP[_multibytecodec_methods+20]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_multibytecodec_methods+28]=_MultibyteCodec_Decode__doc__;
HEAP[_MultibyteCodec_Type+12]=__str24;
HEAP[_MultibyteCodec_Type+24]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_MultibyteCodec_Type+72]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_MultibyteCodec_Type+116]=_multibytecodec_methods;
HEAP[_mbiencoder_methods]=__str22;
HEAP[_mbiencoder_methods+4]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_mbiencoder_methods+16]=__str27;
HEAP[_mbiencoder_methods+20]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_MultibyteIncrementalEncoder_Type+12]=__str31;
HEAP[_MultibyteIncrementalEncoder_Type+24]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_MultibyteIncrementalEncoder_Type+72]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_MultibyteIncrementalEncoder_Type+92]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_MultibyteIncrementalEncoder_Type+116]=_mbiencoder_methods;
HEAP[_MultibyteIncrementalEncoder_Type+124]=_codecctx_getsets;
HEAP[_MultibyteIncrementalEncoder_Type+148]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_MultibyteIncrementalEncoder_Type+156]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_mbidecoder_methods]=__str23;
HEAP[_mbidecoder_methods+4]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_mbidecoder_methods+16]=__str27;
HEAP[_mbidecoder_methods+20]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_MultibyteIncrementalDecoder_Type+12]=__str34;
HEAP[_MultibyteIncrementalDecoder_Type+24]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_MultibyteIncrementalDecoder_Type+72]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_MultibyteIncrementalDecoder_Type+92]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_MultibyteIncrementalDecoder_Type+116]=_mbidecoder_methods;
HEAP[_MultibyteIncrementalDecoder_Type+124]=_codecctx_getsets;
HEAP[_MultibyteIncrementalDecoder_Type+148]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_MultibyteIncrementalDecoder_Type+156]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_mbstreamreader_methods]=__str37;
HEAP[_mbstreamreader_methods+4]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_mbstreamreader_methods+16]=__str39;
HEAP[_mbstreamreader_methods+20]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_mbstreamreader_methods+32]=__str40;
HEAP[_mbstreamreader_methods+36]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_mbstreamreader_methods+48]=__str27;
HEAP[_mbstreamreader_methods+52]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_mbstreamreader_members]=__str3;
HEAP[_MultibyteStreamReader_Type+12]=__str42;
HEAP[_MultibyteStreamReader_Type+24]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_MultibyteStreamReader_Type+72]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_MultibyteStreamReader_Type+92]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_MultibyteStreamReader_Type+116]=_mbstreamreader_methods;
HEAP[_MultibyteStreamReader_Type+120]=_mbstreamreader_members;
HEAP[_MultibyteStreamReader_Type+124]=_codecctx_getsets;
HEAP[_MultibyteStreamReader_Type+148]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_MultibyteStreamReader_Type+156]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_mbstreamwriter_methods]=__str43;
HEAP[_mbstreamwriter_methods+4]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_mbstreamwriter_methods+16]=__str47;
HEAP[_mbstreamwriter_methods+20]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_mbstreamwriter_methods+32]=__str27;
HEAP[_mbstreamwriter_methods+36]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_mbstreamwriter_members]=__str3;
HEAP[_MultibyteStreamWriter_Type+12]=__str48;
HEAP[_MultibyteStreamWriter_Type+24]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_MultibyteStreamWriter_Type+72]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_MultibyteStreamWriter_Type+92]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_MultibyteStreamWriter_Type+116]=_mbstreamwriter_methods;
HEAP[_MultibyteStreamWriter_Type+120]=_mbstreamwriter_members;
HEAP[_MultibyteStreamWriter_Type+124]=_codecctx_getsets;
HEAP[_MultibyteStreamWriter_Type+148]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_MultibyteStreamWriter_Type+156]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[___methods]=__str51;
HEAP[___methods+4]=(FUNCTION_TABLE_OFFSET + 68);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

>>>>>>> f1726142f40cb660652d789a0d51be1d72d90630
