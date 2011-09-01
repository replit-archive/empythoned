<<<<<<< HEAD
(function(g){function e(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,f,g,h,j,k,l;e=a;f=b;g=c;l=k=0;d=1;break;case 1:j=d=_fgetc(HEAP[e+12]);d=d==-1?2:3;break;case 2:h=-1;d=5;break;case 3:k|=(j&127)>>g<<l;l=0-g+7+l;d=j&128;g=0;d=d!=0?1:4;break;case 4:HEAP[f]=k;h=0;d=5;break;case 5:return a=h;default:assert(0,"bad label: "+d)}}function b(a,b){var c=STACKTOP;STACKTOP+=4;_memset(c,0,4);var d;for(d=-1;;)switch(d){case -1:var f,g,h,j,k=c,l,
m;f=a;g=b;l=e(f,k,0);d=l!=0?1:2;break;case 1:h=l;d=12;break;case 2:m=_malloc(HEAP[k]);d=m==0?3:4;break;case 3:_PyErr_NoMemory();h=-2;d=12;break;case 4:j=0;d=8;break;case 5:d=_fgetc(HEAP[f+12]);HEAP[m+j]=d&255;d=d==-1?6:7;break;case 6:_free(m);h=-1;d=12;break;case 7:j+=1;d=8;break;case 8:d=j<HEAP[k]?5:9;break;case 9:d=_PyString_FromStringAndSize(m,HEAP[k]);HEAP[g]=d;_free(m);d=HEAP[g]==0?10:11;break;case 10:h=-2;d=12;break;case 11:h=0;d=12;break;case 12:return f=h,STACKTOP=c,f;default:assert(0,"bad label: "+
d)}}function a(a){var c=STACKTOP;STACKTOP+=8;_memset(c,0,8);var d;for(d=-1;;)switch(d){case -1:var e,f=c,g=c+4,h,j;e=a;HEAP[g]=0;h=b(e,f);d=h==0?1:15;break;case 1:h=b(e,g);var k=HEAP[f];d=h!=0?2:4;break;case 2:HEAP[k]-=1;d=HEAP[k]==0?3:15;break;case 3:FUNCTION_TABLE[HEAP[HEAP[HEAP[f]+4]+24]](HEAP[f]);d=15;break;case 4:j=_PyDict_GetItem(HEAP[e+8],k);d=j==0?5:13;break;case 5:j=_PyList_New(0);d=j==0?6:7;break;case 6:h=-2;d=15;break;case 7:d=_PyDict_SetItem(HEAP[e+8],HEAP[f],j)!=0;HEAP[j]-=1;var l=HEAP[j]==
0;d=d?8:11;break;case 8:d=l?9:10;break;case 9:FUNCTION_TABLE[HEAP[HEAP[j+4]+24]](j);d=10;break;case 10:h=-2;d=15;break;case 11:d=l?12:13;break;case 12:FUNCTION_TABLE[HEAP[HEAP[j+4]+24]](j);d=13;break;case 13:d=_PyList_Append(j,HEAP[g])!=0?14:15;break;case 14:h=-2;d=15;break;case 15:d=HEAP[f]!=0?16:18;break;case 16:d=HEAP[f];HEAP[d]-=1;d=HEAP[d]==0?17:18;break;case 17:FUNCTION_TABLE[HEAP[HEAP[HEAP[f]+4]+24]](HEAP[f]);d=18;break;case 18:d=HEAP[g]!=0?19:21;break;case 19:d=HEAP[g];HEAP[d]-=1;d=HEAP[d]==
0?20:21;break;case 20:FUNCTION_TABLE[HEAP[HEAP[HEAP[g]+4]+24]](HEAP[g]);d=21;break;case 21:return a=h,STACKTOP=c,a;default:assert(0,"bad label: "+d)}}function c(a){_fclose(HEAP[a+12]);HEAP[a+12]=0;_PyErr_SetString(HEAP[_PyExc_EOFError],z)}function d(d){var f=STACKTOP;STACKTOP+=16;_memset(f,0,16);var g,h=null;for(g=-1;;)switch(g){case -1:var j,k,l,m,n,o=f,p=f+4,q=f+8,r=f+12,s,t;j=d;n=0;HEAP[o]=-1;HEAP[p]=-1;HEAP[q]=-1;t=s=HEAP[r]=0;g=HEAP[j+12]==0?1:2;break;case 1:_PyErr_SetString(HEAP[v],C);k=0;g=
44;break;case 2:l=g=_fgetc(HEAP[j+12]);g=g==-1?3:4;break;case 3:_fclose(HEAP[j+12]);k=HEAP[j+12]=0;g=44;break;case 4:m=l&3;g=m==3?5:6;break;case 5:var u=l;m=u;h=5;g=7;break;case 6:_ungetc(l,HEAP[j+12]);var B=m,h=6;g=7;break;case 7:g=h==6?B:u;g=g==0?8:g==1?12:g==2?13:g==19?16:g==35?17:g==51?23:g==67?20:g==83?26:29;break;case 8:var w=n=e(j,p,2);w==0?(h=8,g=9):(h=8,g=30);break;case 9:var x=e(j,o,0);n=x;HEAP[j+20]!=0?(h=9,g=10):(h=9,g=30);break;case 10:var H=n;H==0?(h=10,g=11):(h=10,g=30);break;case 11:var O=
e(j,q,0);n=O;h=11;g=30;break;case 12:var U=e(j,q,2);n=U;h=12;g=30;break;case 13:var y=e(j,o,2);n=y;HEAP[j+16]!=0?(h=13,g=14):(h=13,g=30);break;case 14:var F=n;F==0?(h=14,g=15):(h=14,g=30);break;case 15:var N=e(j,q,0);n=N;h=15;g=30;break;case 16:var z=a(j);n=z;h=16;g=30;break;case 17:var Q=n=e(j,p,0);Q==0?(h=17,g=18):(h=17,g=30);break;case 18:var K=n=b(j,r);K==0?(h=18,g=19):(h=18,g=30);break;case 19:HEAP[__Py_NoneStruct]+=1;s=__Py_NoneStruct;var ga=n,h=19;g=30;break;case 20:var W=n=e(j,p,0);W==0?(h=
20,g=21):(h=20,g=30);break;case 21:var X=n=e(j,o,0);X==0?(h=21,g=22):(h=21,g=30);break;case 22:var I=b(j,r);n=I;h=22;g=30;break;case 23:l=_fgetc(HEAP[j+12]);g=l==-1?24:25;break;case 24:n=-1;g=33;break;case 25:HEAP[j+16]=l!=0;g=2;break;case 26:l=_fgetc(HEAP[j+12]);g=l==-1?27:28;break;case 27:n=-1;g=33;break;case 28:HEAP[j+20]=l!=0;g=2;break;case 29:n=-3;g=31;break;case 30:g=(h==20?W:h==21?X:h==22?I:h==17?Q:h==18?K:h==19?ga:h==13?y:h==14?F:h==15?N:h==8?w:h==9?x:h==10?H:h==11?O:h==16?z:U)==-3?31:32;
break;case 31:_PyErr_SetString(HEAP[_PyExc_ValueError],A);g=43;break;case 32:g=n==-1?33:34;break;case 33:c(j);g=43;break;case 34:g=n==0?35:43;break;case 35:t=_PyTuple_New(4);g=t==0?36:37;break;case 36:k=0;g=44;break;case 37:var va=t;g=_PyInt_FromLong(m);HEAP[va+12]=g;va=t;g=_PyInt_FromLong(HEAP[p]);HEAP[va+12+8]=g;va=t;g=HEAP[r]==0?38:39;break;case 38:g=_PyInt_FromLong(HEAP[q]);HEAP[va+12+4]=g;g=40;break;case 39:HEAP[va+12+4]=HEAP[r];g=40;break;case 40:var D=t;g=s==0?41:42;break;case 41:g=_PyInt_FromLong(HEAP[o]);
HEAP[D+12+12]=g;g=43;break;case 42:HEAP[D+12+12]=s;g=43;break;case 43:k=t;g=44;break;case 44:return d=k,STACKTOP=f,d;default:assert(0,"bad label: "+g)}}function f(a){var b;for(b=-1;;)switch(b){case -1:var c,d,e;c=a;e=_fwrite(c+20,1,HEAP[c+16],HEAP[c+10260]);var f=c+16;b=HEAP[c+16]==e?3:1;break;case 1:_llvm_memmove_p0i8_p0i8_i32(c+20,c+20+e,HEAP[f]-e,1,0);HEAP[c+16]-=e;b=e==0?2:4;break;case 2:b=_PyString_AsString(HEAP[c+12]);_PyErr_SetFromErrnoWithFilename(HEAP[_PyExc_IOError],b);p(c);d=-1;b=7;break;
case 3:HEAP[f]=0;b=e!=0?4:6;break;case 4:b=_fflush(HEAP[c+10260])!=0?5:6;break;case 5:b=_PyString_AsString(HEAP[c+12]);_PyErr_SetFromErrnoWithFilename(HEAP[_PyExc_IOError],b);p(c);d=-1;b=7;break;case 6:d=0;b=7;break;case 7:return a=d;default:assert(0,"bad label: "+b)}}function h(a,b,c){var d,e=null;for(d=-1;;)switch(d){case -1:var g,h,k,l;g=a;h=b;var m=k=c;HEAP[g+16]+5+m>10239?(e=-1,d=1):(e=-1,d=4);break;case 1:d=f(g)<0?2:3;break;case 2:l=-1;d=9;break;case 3:var n=k,e=3;d=4;break;case 4:d=(e==3?n:
m)==2147483647?5:6;break;case 5:throw ___assert_fail(E,D,630,R),"Reached an unreachable!";case 6:d=j(g,k)<0?7:8;break;case 7:l=-1;d=9;break;case 8:_llvm_memcpy_p0i8_p0i8_i32(g+20+HEAP[g+16],h,k,1,0);HEAP[g+16]=k+HEAP[g+16];l=0;d=9;break;case 9:return a=l;default:assert(0,"bad label: "+d)}}function j(a,b){var c;for(c=-1;;)switch(c){case -1:var d,e,f;d=a;e=b;c=1;break;case 1:f=e&127;e=c=e>>7;c=c!=0?2:3;break;case 2:f|=-128;c=3;break;case 3:HEAP[d+20+HEAP[d+16]]=f;HEAP[d+16]+=1;c=e!=0?1:4;break;case 4:return 0;
default:assert(0,"bad label: "+c)}}function k(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,g,j,k,l,m;e=a;g=b;j=c;l=_strlen(g);m=_strlen(j);d=l+11+m+HEAP[e+16]>10239?1:3;break;case 1:d=f(e)<0?2:3;break;case 2:k=-1;d=6;break;case 3:HEAP[e+20+HEAP[e+16]]=19;HEAP[e+16]+=1;d=h(e,g,l)<0?4:5;break;case 4:k=-1;d=6;break;case 5:k=h(e,j,m);d=6;break;case 6:return a=k;default:assert(0,"bad label: "+d)}}function l(a){var b=STACKTOP;STACKTOP+=8;_memset(b,0,8);var c,d=null;for(c=-1;;)switch(c){case -1:var e,
f,g,h=b;e=a;_gettimeofday(h,0);g=HEAP[h+4]-HEAP[e+10284+4];c=HEAP[h]!=HEAP[e+10284]?1:2;break;case 1:var j=(HEAP[h]-HEAP[e+10284])*1E6+g;g=j;d=1;c=3;break;case 2:var k=g,d=2;c=3;break;case 3:c=(d==2?k:j)<0?4:5;break;case 4:f=0;c=6;break;case 5:HEAP[e+10284]=HEAP[h];HEAP[e+10284+4]=HEAP[h+4];f=g;c=6;break;case 6:return a=f,STACKTOP=b,a;default:assert(0,"bad label: "+c)}}function m(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,f,g,h,k;e=a;f=b;g=c;k=5;d=f&HEAP[L+k*4];g=d<<2&255|g&255;d=d!=f?1:2;break;
case 1:g|=-128;HEAP[e+20+HEAP[e+16]]=g;HEAP[e+16]+=1;h=j(e,f>>k);d=3;break;case 2:HEAP[e+20+HEAP[e+16]]=g;HEAP[e+16]+=1;h=0;d=3;break;case 3:return a=h;default:assert(0,"bad label: "+d)}}function n(){var a=STACKTOP;STACKTOP+=160;_memset(a,0,160);var b;for(b=-1;;)switch(b){case -1:var c=a,d=a+8,e=a+16,f=a+88;_gettimeofday(c,0);var g=c+4,h=c,j=d,k=d+4;b=1;break;case 1:_gettimeofday(d,0);b=HEAP[h]!=HEAP[j]?3:2;break;case 2:b=HEAP[g]!=HEAP[k]?3:1;break;case 3:b=HEAP[c]==HEAP[d]?4:5;break;case 4:HEAP[I]=
HEAP[d+4]-HEAP[c+4];b=6;break;case 5:HEAP[I]=0-HEAP[c+4]+1E6+HEAP[d+4];b=6;break;case 6:_getrusage(0,e);var l=e,m=f,n=e+4,o=f+4,p=e+8,q=f+8,r=e+8+4,s=f+8+4;b=7;break;case 7:_getrusage(0,f);var t=HEAP[n];b=HEAP[l]!=HEAP[m]?8:9;break;case 8:HEAP[J]=0-t+1E6+HEAP[f+4];b=15;break;case 9:b=t!=HEAP[o]?10:11;break;case 10:HEAP[J]=HEAP[f+4]-HEAP[e+4];b=15;break;case 11:var u=HEAP[r];b=HEAP[p]!=HEAP[q]?12:13;break;case 12:HEAP[J]=0-u+1E6+HEAP[f+8+4];b=15;break;case 13:b=u!=HEAP[s]?14:7;break;case 14:HEAP[J]=
HEAP[f+8+4]-HEAP[e+8+4];b=15;break;case 15:STACKTOP=a;return;default:assert(0,"bad label: "+b)}}function o(a){var b;for(b=-1;;)switch(b){case -1:b=a;HEAP[b+10276]=1;_gettimeofday(b+10284,0);var c=b;b=HEAP[b+10264]!=0?1:2;break;case 1:_PyEval_SetTrace(g+2,c);b=3;break;case 2:_PyEval_SetProfile(g+2,c);b=3;break;case 3:return;default:assert(0,"bad label: "+b)}}function p(a){var b;for(b=-1;;)switch(b){case -1:var c;c=a;b=HEAP[c+10276]!=0?1:4;break;case 1:HEAP[c+10276]=0;b=HEAP[c+10264]!=0?2:3;break;case 2:_PyEval_SetTrace(0,
0);b=4;break;case 3:_PyEval_SetProfile(0,0);b=4;break;case 4:b=HEAP[c+16]>0?5:6;break;case 5:f(c);b=6;break;case 6:return;default:assert(0,"bad label: "+b)}}function q(a){var b;for(b=-1;;)switch(b){case -1:var c,d;c=a;b=HEAP[c+10276]!=0?1:2;break;case 1:_PyErr_SetString(HEAP[v],F);d=0;b=5;break;case 2:b=HEAP[c+10260]==0?3:4;break;case 3:_PyErr_SetString(HEAP[v],V);d=0;b=5;break;case 4:d=1;b=5;break;case 5:return a=d;default:assert(0,"bad label: "+b)}}function r(){var a;for(a=-1;;)switch(a){case -1:var b,
c,d;b=bb;d=0;a=2;break;case 1:b+=1;a=2;break;case 2:a=HEAP[b]==0?5:3;break;case 3:a=___ctype_b_loc();a=(HEAP[HEAP[a]+2*HEAP[b]]&2048)==0?1:5;break;case 4:d+=1;a=5;break;case 5:a=HEAP[b+d]==32?7:6;break;case 6:a=HEAP[b+d]!=0?4:7;break;case 7:c=a=_malloc(d+1);a=a!=0?8:9;break;case 8:_llvm_memmove_p0i8_p0i8_i32(c,b,d,1,0);HEAP[c+d]=0;a=9;break;case 9:return b=c;default:assert(0,"bad label: "+a)}}function u(a,b){var c=STACKTOP;STACKTOP+=12;_memset(c,0,12);var d;for(d=-1;;)switch(d){case -1:var e,g,h,
j=c,l,m=c+4,o=c+8;e=b;l=0;HEAP[m]=0;HEAP[o]=1;d=_PyArg_ParseTuple(e,X,allocate([j,0,0,0,m,0,0,0,o,0,0,0],["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0],ALLOC_STACK))!=0?1:21;break;case 1:l=__PyObject_New(Ta);d=l==0?2:3;break;case 2:h=0;d=22;break;case 3:HEAP[l+10272]=1;HEAP[l+10264]=HEAP[m]!=0;d=HEAP[m]==0?6:4;break;case 4:d=HEAP[o]==0?6:5;break;case 5:g=1;d=7;break;case 6:g=0;d=7;break;case 7:HEAP[l+10268]=g;HEAP[l+16]=0;HEAP[l+10276]=0;HEAP[l+10280]=0;HEAP[l+10260]=0;HEAP[l+12]=HEAP[e+12];HEAP[HEAP[l+
12]]+=1;d=_PyDict_New();HEAP[l+8]=d;d=HEAP[l+8]==0?8:11;break;case 8:HEAP[l]-=1;d=HEAP[l]==0?9:10;break;case 9:FUNCTION_TABLE[HEAP[HEAP[l+4]+24]](l);d=10;break;case 10:h=0;d=22;break;case 11:d=___01fopen64_(HEAP[j],oa);HEAP[l+10260]=d;d=HEAP[l+10260]==0?12:15;break;case 12:HEAP[l]-=1;d=HEAP[l]==0?13:14;break;case 13:FUNCTION_TABLE[HEAP[HEAP[l+4]+24]](l);d=14;break;case 14:_PyErr_SetFromErrnoWithFilename(HEAP[_PyExc_IOError],HEAP[j]);h=0;d=22;break;case 15:d=HEAP[I]==0?16:17;break;case 16:n();n();
n();d=17;break;case 17:a:{var p=l;d=STACKTOP;STACKTOP+=4096;_memset(d,0,4096);for(var q=void 0,q=-1;;)switch(q){case -1:var s,t,u,B,v,w,x=d,H,U,y;s=p;w=r();q=w==0?1:2;break;case 1:_PyErr_NoMemory();v=-1;q=23;break;case 2:k(s,qa,w);q=HEAP[s+10272]!=0?3:4;break;case 3:B=P;q=5;break;case 4:B=hb;q=5;break;case 5:k(s,Qa,B);q=HEAP[s+10264]!=0?6:7;break;case 6:u=P;q=8;break;case 7:u=hb;q=8;break;case 8:k(s,mb,u);q=HEAP[s+10268]!=0?9:10;break;case 9:t=P;q=11;break;case 10:t=hb;q=11;break;case 11:k(s,S,t);
q=_Py_GetPlatform();k(s,Ca,q);q=_Py_GetProgramFullPath();k(s,pa,q);_free(w);w=q=_Py_GetVersion();q=q==0?12:13;break;case 12:_PyErr_Clear();q=14;break;case 13:k(s,Aa,w);q=14;break;case 14:_PyOS_snprintf(x,4096,ob,allocate([HEAP[J],0,0,0],["i32",0,0,0],ALLOC_STACK));k(s,ib,x);_PyOS_snprintf(x,4096,ob,allocate([HEAP[I],0,0,0],["i32",0,0,0],ALLOC_STACK));k(s,ca,x);H=_getcwd(x,4096);k(s,na,H);H=q=_PySys_GetObject(O);q=q==0?16:15;break;case 15:q=(HEAP[HEAP[H+4]+84]&33554432)==0?16:17;break;case 16:_PyErr_SetString(HEAP[_PyExc_RuntimeError],
Ma);v=-1;q=23;break;case 17:y=HEAP[H+8];U=0;q=U<y?18:22;break;case 18:w=HEAP[HEAP[H+12]+4*U];w=q=_PyString_AsString(w);var F=s,q=q==0?19:20;break;case 19:k(F,$,ga);_PyErr_Clear();q=21;break;case 20:k(F,$,w);q=21;break;case 21:U+=1;q=U<y?18:22;break;case 22:b:{v=s;q=void 0;for(q=-1;;)switch(q){case -1:var N;N=v;q=HEAP[N+16]+2>10239?1:3;break;case 1:q=f(N)<0?2:3;break;case 2:q=4;break;case 3:HEAP[N+20+HEAP[N+16]]=83;HEAP[N+20+(HEAP[N+16]+1)]=HEAP[N+10272]!=0;HEAP[N+16]+=2;q=4;break;case 4:break b;default:assert(0,
"bad label: "+q)}}b:{v=s;q=void 0;for(q=-1;;)switch(q){case -1:var z;z=v;q=HEAP[z+16]+2>10239?1:3;break;case 1:q=f(z)<0?2:3;break;case 2:q=4;break;case 3:HEAP[z+20+HEAP[z+16]]=51;HEAP[z+20+(HEAP[z+16]+1)]=HEAP[z+10268]!=0;HEAP[z+16]+=2;q=4;break;case 4:break b;default:assert(0,"bad label: "+q)}}v=0;q=23;break;case 23:p=v;STACKTOP=d;d=p;break a;default:assert(0,"bad label: "+q)}d=void 0}d=d!=0?18:21;break;case 18:HEAP[l]-=1;d=HEAP[l]==0?19:20;break;case 19:FUNCTION_TABLE[HEAP[HEAP[l+4]+24]](l);d=20;
break;case 20:l=0;d=21;break;case 21:h=l;d=22;break;case 22:return e=h,STACKTOP=c,e;default:assert(0,"bad label: "+d)}}function s(){v=allocate(1,"%struct.PyObject*",ALLOC_NORMAL);w=allocate([99,108,111,115,101,40,41,10,67,108,111,115,101,32,116,104,101,32,108,111,103,32,102,105,108,101,44,32,112,114,101,118,101,110,116,105,110,103,32,97,100,100,105,116,105,111,110,97,108,32,114,101,99,111,114,100,115,32,102,114,111,109,32,98,101,105,110,103,32,114,101,97,100,46,0],"i8",ALLOC_NORMAL);x=allocate([102,
105,108,101,110,111,40,41,32,45,62,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,10,82,101,116,117,114,110,115,32,116,104,101,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,111,114,32,116,104,101,32,108,111,103,32,102,105,108,101,44,32,105,102,32,111,112,101,110,46,10,82,97,105,115,101,115,32,86,97,108,117,101,69,114,114,111,114,32,105,102,32,116,104,101,32,108,111,103,32,102,105,108,101,32,105,115,32,99,108,111,115,101,100,46,0],"i8",ALLOC_NORMAL);y=allocate([108,
111,103,114,101,97,100,101,114,39,115,32,102,105,108,101,32,111,98,106,101,99,116,32,97,108,114,101,97,100,121,32,99,108,111,115,101,100,0],"i8",ALLOC_NORMAL);z=allocate([101,110,100,32,111,102,32,102,105,108,101,32,119,105,116,104,32,105,110,99,111,109,112,108,101,116,101,32,112,114,111,102,105,108,101,32,114,101,99,111,114,100,0],"i8",ALLOC_NORMAL);C=allocate([99,97,110,110,111,116,32,105,116,101,114,97,116,101,32,111,118,101,114,32,99,108,111,115,101,100,32,76,111,103,82,101,97,100,101,114,32,
111,98,106,101,99,116,0],"i8",ALLOC_NORMAL);A=allocate([117,110,107,110,111,119,110,32,114,101,99,111,114,100,32,116,121,112,101,32,105,110,32,108,111,103,32,102,105,108,101,0],"i8",ALLOC_NORMAL);G=allocate([110,111,32,109,111,114,101,32,101,118,101,110,116,115,32,105,110,32,108,111,103,0],"i8",ALLOC_NORMAL);E=allocate([108,101,110,32,60,32,50,49,52,55,52,56,51,54,52,55,0],"i8",ALLOC_NORMAL);D=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,95,104,111,116,115,104,111,
116,46,99,0],"i8",ALLOC_NORMAL);R=allocate([112,97,99,107,95,115,116,114,105,110,103,0],"i8",ALLOC_NORMAL);M=allocate([105,78,0],"i8",ALLOC_NORMAL);L=allocate([-1,0,0,0,1,0,0,0,3,0,0,0,7,0,0,0,15,0,0,0,31,0,0,0,63,0,0,0,127,0,0,0],["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0],ALLOC_NORMAL);I=allocate(1,"i32",ALLOC_NORMAL);J=allocate(1,"i32",ALLOC_NORMAL);F=allocate([112,114,111,102,105,108,101,114,32,97,108,114,101,97,100,121,32,97,99,116,105,118,
101,0],"i8",ALLOC_NORMAL);V=allocate([112,114,111,102,105,108,101,114,32,97,108,114,101,97,100,121,32,99,108,111,115,101,100,0],"i8",ALLOC_NORMAL);Q=allocate([97,100,100,105,110,102,111,40,107,101,121,44,32,118,97,108,117,101,41,10,73,110,115,101,114,116,32,97,110,32,65,68,68,95,73,78,70,79,32,114,101,99,111,114,100,32,105,110,116,111,32,116,104,101,32,108,111,103,46,0],"i8",ALLOC_NORMAL);Z=allocate([115,115,58,97,100,100,105,110,102,111,0],"i8",ALLOC_NORMAL);K=allocate([99,108,111,115,101,40,41,
10,83,104,117,116,32,100,111,119,110,32,116,104,105,115,32,112,114,111,102,105,108,101,114,32,97,110,100,32,99,108,111,115,101,32,116,104,101,32,108,111,103,32,102,105,108,101,115,44,32,101,118,101,110,32,105,102,32,105,116,115,32,97,99,116,105,118,101,46,0],"i8",ALLOC_NORMAL);N=allocate([112,114,111,102,105,108,101,114,39,115,32,102,105,108,101,32,111,98,106,101,99,116,32,97,108,114,101,97,100,121,32,99,108,111,115,101,100,0],"i8",ALLOC_NORMAL);H=allocate([114,117,110,99,97,108,108,40,99,97,108,
108,97,98,108,101,91,44,32,97,114,103,115,91,44,32,107,119,93,93,41,32,45,62,32,99,97,108,108,97,98,108,101,40,41,10,80,114,111,102,105,108,101,32,97,32,115,112,101,99,105,102,105,99,32,102,117,110,99,116,105,111,110,32,99,97,108,108,44,32,114,101,116,117,114,110,105,110,103,32,116,104,101,32,114,101,115,117,108,116,32,111,102,32,116,104,97,116,32,99,97,108,108,46,0],"i8",ALLOC_NORMAL);ba=allocate([114,117,110,99,97,108,108,0],"i8",ALLOC_NORMAL);W=allocate([114,117,110,99,111,100,101,40,99,111,100,
101,44,32,103,108,111,98,97,108,115,91,44,32,108,111,99,97,108,115,93,41,10,69,120,101,99,117,116,101,32,97,32,99,111,100,101,32,111,98,106,101,99,116,32,119,104,105,108,101,32,99,111,108,108,101,99,116,105,110,103,32,112,114,111,102,105,108,101,32,100,97,116,97,46,32,32,73,102,32,108,111,99,97,108,115,32,105,115,10,111,109,105,116,116,101,100,44,32,103,108,111,98,97,108,115,32,105,115,32,117,115,101,100,32,102,111,114,32,116,104,101,32,108,111,99,97,108,115,32,97,115,32,119,101,108,108,46,0],"i8",
ALLOC_NORMAL);B=allocate([79,33,79,33,124,79,58,114,117,110,99,111,100,101,0],"i8",ALLOC_NORMAL);Y=allocate([108,111,99,97,108,115,32,109,117,115,116,32,98,101,32,97,32,100,105,99,116,105,111,110,97,114,121,32,111,114,32,78,111,110,101,0],"i8",ALLOC_NORMAL);fa=allocate([115,116,97,114,116,40,41,10,73,110,115,116,97,108,108,32,116,104,105,115,32,112,114,111,102,105,108,101,114,32,102,111,114,32,116,104,101,32,99,117,114,114,101,110,116,32,116,104,114,101,97,100,46,0],"i8",ALLOC_NORMAL);ha=allocate([115,
116,111,112,40,41,10,82,101,109,111,118,101,32,116,104,105,115,32,112,114,111,102,105,108,101,114,32,102,114,111,109,32,116,104,101,32,99,117,114,114,101,110,116,32,116,104,114,101,97,100,46,0],"i8",ALLOC_NORMAL);la=allocate([112,114,111,102,105,108,101,114,32,110,111,116,32,97,99,116,105,118,101,0],"i8",ALLOC_NORMAL);ra=allocate([97,100,100,105,110,102,111,0],"i8",ALLOC_NORMAL);ya=allocate([99,108,111,115,101,0],"i8",ALLOC_NORMAL);Da=allocate([102,105,108,101,110,111,0],"i8",ALLOC_NORMAL);Ua=allocate([114,
117,110,99,111,100,101,0],"i8",ALLOC_NORMAL);Na=allocate([115,116,97,114,116,0],"i8",ALLOC_NORMAL);Pa=allocate([115,116,111,112,0],"i8",ALLOC_NORMAL);wa=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",
0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,
0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ya=allocate([102,114,97,109,101,116,105,109,105,110,103,115,0],"i8",ALLOC_NORMAL);Ha=allocate([108,105,110,101,101,118,101,110,116,115,0],"i8",ALLOC_NORMAL);ta=allocate([108,105,110,101,116,105,109,105,110,103,115,0],"i8",ALLOC_NORMAL);Va=allocate([0,
0,0,0,2,0,0,0,10268,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,10264,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,10268,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ia=allocate([99,108,
111,115,101,100,0],"i8",ALLOC_NORMAL);Wa=allocate([84,114,117,101,32,105,102,32,116,104,101,32,112,114,111,102,105,108,101,114,39,115,32,111,117,116,112,117,116,32,102,105,108,101,32,104,97,115,32,97,108,114,101,97,100,121,32,98,101,101,110,32,99,108,111,115,101,100,46,0],"i8",ALLOC_NORMAL);ia=allocate(40,["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8",
"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ba=allocate([72,105,103,104,45,112,101,114,102,111,114,109,97,110,99,101,32,112,114,111,102,105,108,101,114,32,111,98,106,101,99,116,46,10,10,77,101,116,104,111,100,115,58,10,10,99,108,111,115,101,40,41,58,32,32,32,32,32,32,83,116,111,112,32,116,104,101,32,112,114,111,102,105,108,101,114,32,97,110,100,32,99,108,111,115,101,32,116,104,101,32,108,111,103,32,102,105,108,101,115,46,10,102,105,108,101,110,111,40,41,58,32,32,32,32,32,82,101,
116,117,114,110,115,32,116,104,101,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,111,102,32,116,104,101,32,108,111,103,32,102,105,108,101,46,10,114,117,110,99,97,108,108,40,41,58,32,32,32,32,82,117,110,32,97,32,115,105,110,103,108,101,32,102,117,110,99,116,105,111,110,32,99,97,108,108,32,119,105,116,104,32,112,114,111,102,105,108,105,110,103,32,101,110,97,98,108,101,100,46,10,114,117,110,99,111,100,101,40,41,58,32,32,32,32,69,120,101,99,117,116,101,32,97,32,99,111,100,101,32,111,
98,106,101,99,116,32,119,105,116,104,32,112,114,111,102,105,108,105,110,103,32,101,110,97,98,108,101,100,46,10,115,116,97,114,116,40,41,58,32,32,32,32,32,32,73,110,115,116,97,108,108,32,116,104,101,32,112,114,111,102,105,108,101,114,32,97,110,100,32,114,101,116,117,114,110,46,10,115,116,111,112,40,41,58,32,32,32,32,32,32,32,82,101,109,111,118,101,32,116,104,101,32,112,114,111,102,105,108,101,114,46,10,10,65,116,116,114,105,98,117,116,101,115,32,40,114,101,97,100,45,111,110,108,121,41,58,10,10,99,
108,111,115,101,100,58,32,32,32,32,32,32,32,84,114,117,101,32,105,102,32,116,104,101,32,112,114,111,102,105,108,101,114,32,104,97,115,32,97,108,114,101,97,100,121,32,98,101,101,110,32,99,108,111,115,101,100,46,10,102,114,97,109,101,116,105,109,105,110,103,115,58,32,84,114,117,101,32,105,102,32,69,78,84,69,82,47,69,88,73,84,32,101,118,101,110,116,115,32,99,111,108,108,101,99,116,32,116,105,109,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,46,10,108,105,110,101,101,118,101,110,116,115,58,
32,32,32,84,114,117,101,32,105,102,32,108,105,110,101,32,101,118,101,110,116,115,32,97,114,101,32,114,101,112,111,114,116,101,100,32,116,111,32,116,104,101,32,112,114,111,102,105,108,101,114,46,10,108,105,110,101,116,105,109,105,110,103,115,58,32,32,84,114,117,101,32,105,102,32,108,105,110,101,32,101,118,101,110,116,115,32,99,111,108,108,101,99,116,32,116,105,109,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,46,0],"i8",ALLOC_NORMAL);Xa=allocate([95,104,111,116,115,104,111,116,46,80,114,
111,102,105,108,101,114,84,121,112,101,0],"i8",ALLOC_NORMAL);Ta=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10292,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,131563,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",
0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",
0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8",
"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ea=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8",
"i8"],ALLOC_NORMAL);Ga=allocate([105,110,102,111,0],"i8",ALLOC_NORMAL);ka=allocate([68,105,99,116,105,111,110,97,114,121,32,109,97,112,112,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,97,108,32,107,101,121,115,32,116,111,32,108,105,115,116,115,32,111,102,32,118,97,108,117,101,115,46,0],"i8",ALLOC_NORMAL);Fa=allocate([0,0,0,0,6,0,0,0,8,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8",
"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);ma=allocate([108,111,103,114,101,97,100,101,114,40,102,105,108,101,110,97,109,101,41,32,45,45,62,32,108,111,103,45,105,116,101,114,97,116,111,114,10,67,114,101,97,116,101,32,97,32,108,111,103,45,114,101,97,100,101,114,32,102,111,114,32,116,104,101,32,116,105,109,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,32,102,105,108,101,46,0],"i8",ALLOC_NORMAL);La=allocate(40,["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32, i32)*",0,0,0,"i32 (%struct.PyObject*, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0],ALLOC_NORMAL);Za=allocate([84,114,117,101,32,
105,102,32,116,104,101,32,108,111,103,114,101,97,100,101,114,39,115,32,105,110,112,117,116,32,102,105,108,101,32,104,97,115,32,97,108,114,101,97,100,121,32,98,101,101,110,32,99,108,111,115,101,100,46,0],"i8",ALLOC_NORMAL);Ka=allocate(40,["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ra=
allocate([95,104,111,116,115,104,111,116,46,76,111,103,82,101,97,100,101,114,84,121,112,101,0],"i8",ALLOC_NORMAL);$a=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,131563,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",
0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",
0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8",
"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);Ja=allocate([115,58,108,111,103,114,101,97,100,101,114,0],"i8",ALLOC_NORMAL);ja=allocate([114,98,0],"i8",ALLOC_NORMAL);ua=allocate([117,110,101,120,112,101,99,116,101,100,32,101,114,114,111,114,0],"i8",ALLOC_NORMAL);bb=allocate([36,82,101,118,105,115,105,111,110,36,0],"i8",ALLOC_NORMAL);qa=allocate([104,111,116,115,104,
111,116,45,118,101,114,115,105,111,110,0],"i8",ALLOC_NORMAL);P=allocate([121,101,115,0],"i8",ALLOC_NORMAL);hb=allocate([110,111,0],"i8",ALLOC_NORMAL);Qa=allocate([114,101,113,117,101,115,116,101,100,45,102,114,97,109,101,45,116,105,109,105,110,103,115,0],"i8",ALLOC_NORMAL);mb=allocate([114,101,113,117,101,115,116,101,100,45,108,105,110,101,45,101,118,101,110,116,115,0],"i8",ALLOC_NORMAL);S=allocate([114,101,113,117,101,115,116,101,100,45,108,105,110,101,45,116,105,109,105,110,103,115,0],"i8",ALLOC_NORMAL);
Ca=allocate([112,108,97,116,102,111,114,109,0],"i8",ALLOC_NORMAL);pa=allocate([101,120,101,99,117,116,97,98,108,101,0],"i8",ALLOC_NORMAL);Aa=allocate([101,120,101,99,117,116,97,98,108,101,45,118,101,114,115,105,111,110,0],"i8",ALLOC_NORMAL);ob=allocate([37,108,117,0],"i8",ALLOC_NORMAL);ib=allocate([111,98,115,101,114,118,101,100,45,105,110,116,101,114,118,97,108,45,103,101,116,114,117,115,97,103,101,0],"i8",ALLOC_NORMAL);ca=allocate([111,98,115,101,114,118,101,100,45,105,110,116,101,114,118,97,108,
45,103,101,116,116,105,109,101,111,102,100,97,121,0],"i8",ALLOC_NORMAL);na=allocate([99,117,114,114,101,110,116,45,100,105,114,101,99,116,111,114,121,0],"i8",ALLOC_NORMAL);O=allocate([112,97,116,104,0],"i8",ALLOC_NORMAL);Ma=allocate([115,121,115,46,112,97,116,104,32,109,117,115,116,32,98,101,32,97,32,108,105,115,116,0],"i8",ALLOC_NORMAL);$=allocate([115,121,115,45,112,97,116,104,45,101,110,116,114,121,0],"i8",ALLOC_NORMAL);ga=allocate([60,110,111,110,45,115,116,114,105,110,103,45,112,97,116,104,45,
101,110,116,114,121,62,0],"i8",ALLOC_NORMAL);Sa=allocate([112,114,111,102,105,108,101,114,40,108,111,103,102,105,108,101,110,97,109,101,91,44,32,108,105,110,101,101,118,101,110,116,115,91,44,32,108,105,110,101,116,105,109,101,115,93,93,41,32,45,62,32,112,114,111,102,105,108,101,114,10,67,114,101,97,116,101,32,97,32,110,101,119,32,112,114,111,102,105,108,101,114,32,111,98,106,101,99,116,46,0],"i8",ALLOC_NORMAL);X=allocate([115,124,105,105,58,112,114,111,102,105,108,101,114,0],"i8",ALLOC_NORMAL);oa=
allocate([119,98,0],"i8",ALLOC_NORMAL);ab=allocate([99,111,118,101,114,97,103,101,40,108,111,103,102,105,108,101,110,97,109,101,41,32,45,62,32,112,114,111,102,105,108,101,114,10,82,101,116,117,114,110,115,32,97,32,112,114,111,102,105,108,101,114,32,116,104,97,116,32,100,111,101,115,110,39,116,32,99,111,108,108,101,99,116,32,97,110,121,32,116,105,109,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,44,32,119,104,105,99,104,32,105,115,10,117,115,101,102,117,108,32,105,110,32,98,117,105,108,
100,105,110,103,32,97,32,99,111,118,101,114,97,103,101,32,97,110,97,108,121,115,105,115,32,116,111,111,108,46,0],"i8",ALLOC_NORMAL);Oa=allocate([115,58,99,111,118,101,114,97,103,101,0],"i8",ALLOC_NORMAL);va=allocate([114,101,115,111,108,117,116,105,111,110,40,41,32,45,62,32,40,103,101,116,116,105,109,101,111,102,100,97,121,45,117,115,101,99,115,44,32,103,101,116,114,117,115,97,103,101,45,117,115,101,99,115,41,10,82,101,116,117,114,110,32,116,104,101,32,114,101,115,111,108,117,116,105,111,110,32,111,
102,32,116,104,101,32,116,105,109,101,114,115,32,112,114,111,118,105,100,101,100,32,98,121,32,116,104,101,32,103,101,116,116,105,109,101,111,102,100,97,121,40,41,32,97,110,100,10,103,101,116,114,117,115,97,103,101,40,41,32,115,121,115,116,101,109,32,99,97,108,108,115,44,32,111,114,32,45,49,32,105,102,32,116,104,101,32,99,97,108,108,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,46,0],"i8",ALLOC_NORMAL);U=allocate([105,105,0],"i8",ALLOC_NORMAL);fb=allocate([99,111,118,101,114,97,
103,101,0],"i8",ALLOC_NORMAL);Cb=allocate([112,114,111,102,105,108,101,114,0],"i8",ALLOC_NORMAL);xb=allocate([108,111,103,114,101,97,100,101,114,0],"i8",ALLOC_NORMAL);db=allocate([114,101,115,111,108,117,116,105,111,110,0],"i8",ALLOC_NORMAL);gb=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",
0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);rb=allocate([95,104,111,116,115,104,111,116,
0],"i8",ALLOC_NORMAL);sb=allocate([95,95,118,101,114,115,105,111,110,95,95,0],"i8",ALLOC_NORMAL);Kb=allocate([76,111,103,82,101,97,100,101,114,84,121,112,101,0],"i8",ALLOC_NORMAL);Gb=allocate([80,114,111,102,105,108,101,114,84,121,112,101,0],"i8",ALLOC_NORMAL);Nb=allocate([104,111,116,115,104,111,116,46,80,114,111,102,105,108,101,114,69,114,114,111,114,0],"i8",ALLOC_NORMAL);Ab=allocate([80,114,111,102,105,108,101,114,69,114,114,111,114,0],"i8",ALLOC_NORMAL);Sb=allocate([87,72,65,84,95,69,78,84,69,
82,0],"i8",ALLOC_NORMAL);pb=allocate([87,72,65,84,95,69,88,73,84,0],"i8",ALLOC_NORMAL);Mb=allocate([87,72,65,84,95,76,73,78,69,78,79,0],"i8",ALLOC_NORMAL);tb=allocate([87,72,65,84,95,79,84,72,69,82,0],"i8",ALLOC_NORMAL);Hb=allocate([87,72,65,84,95,65,68,68,95,73,78,70,79,0],"i8",ALLOC_NORMAL);da=allocate([87,72,65,84,95,68,69,70,73,78,69,95,70,73,76,69,0],"i8",ALLOC_NORMAL);Jb=allocate([87,72,65,84,95,68,69,70,73,78,69,95,70,85,78,67,0],"i8",ALLOC_NORMAL);jb=allocate([87,72,65,84,95,76,73,78,69,95,
84,73,77,69,83,0],"i8",ALLOC_NORMAL);HEAP[wa]=ra;HEAP[wa+4]=g+4;HEAP[wa+12]=Q;HEAP[wa+16]=ya;HEAP[wa+20]=g+6;HEAP[wa+28]=K;HEAP[wa+32]=Da;HEAP[wa+36]=g+8;HEAP[wa+44]=x;HEAP[wa+48]=ba;HEAP[wa+52]=g+10;HEAP[wa+60]=H;HEAP[wa+64]=Ua;HEAP[wa+68]=g+12;HEAP[wa+76]=W;HEAP[wa+80]=Na;HEAP[wa+84]=g+14;HEAP[wa+92]=fa;HEAP[wa+96]=Pa;HEAP[wa+100]=g+16;HEAP[wa+108]=ha;HEAP[Va]=Ya;HEAP[Va+20]=Ha;HEAP[Va+40]=ta;HEAP[ia]=Ia;HEAP[ia+4]=g+18;HEAP[ia+12]=Wa;HEAP[Ta+12]=Xa;HEAP[Ta+24]=g+20;HEAP[Ta+72]=g+22;HEAP[Ta+88]=
Ba;HEAP[Ta+116]=wa;HEAP[Ta+120]=Va;HEAP[Ta+124]=ia;HEAP[Ea]=ya;HEAP[Ea+4]=g+24;HEAP[Ea+12]=w;HEAP[Ea+16]=Da;HEAP[Ea+20]=g+26;HEAP[Ea+28]=x;HEAP[Fa]=Ga;HEAP[Fa+16]=ka;HEAP[La+12]=g+28;HEAP[Ka]=Ia;HEAP[Ka+4]=g+30;HEAP[Ka+12]=Za;HEAP[$a+12]=Ra;HEAP[$a+24]=g+32;HEAP[$a+52]=La;HEAP[$a+72]=g+22;HEAP[$a+88]=ma;HEAP[$a+108]=g+34;HEAP[$a+112]=g+36;HEAP[$a+116]=Ea;HEAP[$a+120]=Fa;HEAP[$a+124]=Ka;HEAP[gb]=fb;HEAP[gb+4]=g+38;HEAP[gb+12]=ab;HEAP[gb+16]=Cb;HEAP[gb+20]=g+40;HEAP[gb+28]=Sa;HEAP[gb+32]=xb;HEAP[gb+
36]=g+42;HEAP[gb+44]=ma;HEAP[gb+48]=db;HEAP[gb+52]=g+44;HEAP[gb+60]=va}var t={arguments:[]},v,w,x,y,z,C,A,G,E,D,R,M,L,I,J,F,V,Q,Z,K,N,H,ba,W,B,Y,fa,ha,la,ra,ya,Da,Ua,Na,Pa,wa,Ya,Ha,ta,Va,Ia,Wa,ia,Ba,Xa,Ta,Ea,Ga,ka,Fa,ma,La,Za,Ka,Ra,$a,Ja,ja,ua,bb,qa,P,hb,Qa,mb,S,Ca,pa,Aa,ob,ib,ca,na,O,Ma,$,ga,Sa,X,oa,ab,Oa,va,U,fb,Cb,xb,db,gb,rb,sb,Kb,Gb,Nb,Ab,Sb,pb,Mb,tb,Hb,da,Jb,jb;t._init_hotshot=function(){var a;for(a=-1;;)switch(a){case -1:var b;HEAP[$a+4]=_PyType_Type;HEAP[Ta+4]=_PyType_Type;b=_Py_InitModule4(rb,
gb,0,0,1013);a=b!=0?1:5;break;case 1:a=r();_PyModule_AddStringConstant(b,sb,a);_free(a);HEAP[$a]+=1;_PyModule_AddObject(b,Kb,$a);HEAP[Ta]+=1;_PyModule_AddObject(b,Gb,Ta);a=HEAP[v]==0?2:3;break;case 2:a=_PyErr_NewException(Nb,0,0);HEAP[v]=a;a=a!=0?3:4;break;case 3:HEAP[HEAP[v]]+=1;_PyModule_AddObject(b,Ab,HEAP[v]);a=4;break;case 4:_PyModule_AddIntConstant(b,Sb,0);_PyModule_AddIntConstant(b,pb,1);_PyModule_AddIntConstant(b,Mb,2);_PyModule_AddIntConstant(b,tb,3);_PyModule_AddIntConstant(b,Hb,19);_PyModule_AddIntConstant(b,
da,35);_PyModule_AddIntConstant(b,Jb,67);_PyModule_AddIntConstant(b,jb,51);a=5;break;case 5:return;default:assert(0,"bad label: "+a)}};FUNCTION_TABLE=FUNCTION_TABLE.concat([0,0,function(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,g,k,n,o;e=a;g=b;d=c;d=d==0?1:d==2?8:d==3?7:11;break;case 1:a:{o=e;d=HEAP[g+16];for(var p=void 0,p=-1;;)switch(p){case -1:var q,r,s,t,u,B;q=o;r=d;t=_PyDict_GetItem(HEAP[q+8],HEAP[r+48]);p=t==0?1:13;break;case 1:u=_PyDict_New();p=u==0?2:3;break;case 2:s=-1;p=28;break;case 3:B=
HEAP[q+10280];t=_Py_BuildValue(M,allocate([B,0,0,0,u,0,0,0],["i32",0,0,0,"%struct.PyObject*",0,0,0],ALLOC_STACK));p=t==0?4:5;break;case 4:s=-1;p=28;break;case 5:p=_PyDict_SetItem(HEAP[q+8],HEAP[r+48],t)!=0?6:9;break;case 6:HEAP[t]-=1;p=HEAP[t]==0?7:8;break;case 7:FUNCTION_TABLE[HEAP[HEAP[t+4]+24]](t);p=8;break;case 8:s=-1;p=28;break;case 9:HEAP[q+10280]+=1;HEAP[t]-=1;p=HEAP[t]==0?10:11;break;case 10:FUNCTION_TABLE[HEAP[HEAP[t+4]+24]](t);p=11;break;case 11:b:{for(var p=q,v=B,w=HEAP[r+48]+20,x=void 0,
x=-1;;)switch(x){case -1:var H,O,U,y,F;H=p;O=v;U=w;F=_strlen(U);x=HEAP[H+16]+11+F>10239?1:3;break;case 1:x=f(H)<0?2:3;break;case 2:y=-1;x=6;break;case 3:HEAP[H+20+HEAP[H+16]]=35;HEAP[H+16]+=1;x=j(H,O)<0?4:5;break;case 4:y=-1;x=6;break;case 5:y=h(H,U,F);x=6;break;case 6:p=y;break b;default:assert(0,"bad label: "+x)}p=void 0}p=p<0?12:14;break;case 12:s=-1;p=28;break;case 13:B=HEAP[HEAP[t+12]+8];u=HEAP[t+12+4];p=14;break;case 14:t=p=_PyInt_FromLong(HEAP[r+56]);p=p==0?15:16;break;case 15:_PyErr_Clear();
p=27;break;case 16:p=_PyDict_GetItem(u,t);p=p==0?17:25;break;case 17:b:{for(var p=q,v=B,w=HEAP[r+56],x=HEAP[r+52]+20,N=void 0,N=-1;;)switch(N){case -1:var z,A,Q,K,ga,W;z=p;A=v;Q=w;K=x;W=_strlen(K);N=HEAP[z+16]+16+W>10239?1:3;break;case 1:N=f(z)<0?2:3;break;case 2:ga=-1;N=8;break;case 3:HEAP[z+20+HEAP[z+16]]=67;HEAP[z+16]+=1;N=j(z,A)<0?4:5;break;case 4:ga=-1;N=8;break;case 5:N=j(z,Q)<0?6:7;break;case 6:ga=-1;N=8;break;case 7:ga=h(z,K,W);N=8;break;case 8:p=ga;break b;default:assert(0,"bad label: "+
N)}p=void 0}p=p<0?18:21;break;case 18:HEAP[t]-=1;p=HEAP[t]==0?19:20;break;case 19:FUNCTION_TABLE[HEAP[HEAP[t+4]+24]](t);p=20;break;case 20:s=-1;p=28;break;case 21:p=_PyDict_SetItem(u,t,HEAP[r+52])!=0?22:25;break;case 22:HEAP[t]-=1;p=HEAP[t]==0?23:24;break;case 23:FUNCTION_TABLE[HEAP[HEAP[t+4]+24]](t);p=24;break;case 24:s=-1;p=28;break;case 25:HEAP[t]-=1;p=HEAP[t]==0?26:27;break;case 26:FUNCTION_TABLE[HEAP[HEAP[t+4]+24]](t);p=27;break;case 27:s=B;p=28;break;case 28:o=s;break a;default:assert(0,"bad label: "+
p)}o=void 0}d=o<0?2:3;break;case 2:n=-1;d=12;break;case 3:var C=HEAP[HEAP[g+16]+56];d=HEAP[e+10272]!=0?4:5;break;case 4:k=l(e);d=6;break;case 5:k=-1;d=6;break;case 6:a:{n=e;d=o;p=k;v=C;w=void 0;for(w=-1;;)switch(w){case -1:var X,I,va,D,$;X=n;I=d;va=p;D=v;w=HEAP[X+16]+16>10239?1:3;break;case 1:w=f(X)<0?2:3;break;case 2:$=-1;w=6;break;case 3:m(X,I,0);j(X,D);w=HEAP[X+10272]!=0?4:5;break;case 4:$=j(X,va);w=6;break;case 5:$=0;w=6;break;case 6:n=$;break a;default:assert(0,"bad label: "+w)}n=void 0}d=12;
break;case 7:d=l(e);a:{n=e;p=void 0;for(p=-1;;)switch(p){case -1:var ba,db,E;ba=n;db=d;p=HEAP[ba+16]+6>10239?1:3;break;case 1:p=f(ba)<0?2:3;break;case 2:E=-1;p=6;break;case 3:var J=ba,p=HEAP[ba+10272]!=0?4:5;break;case 4:E=m(J,db,1);p=6;break;case 5:HEAP[ba+20+HEAP[J+16]]=1;HEAP[ba+16]+=1;E=0;p=6;break;case 6:n=E;break a;default:assert(0,"bad label: "+p)}n=void 0}d=12;break;case 8:d=HEAP[e+10268]!=0?9:10;break;case 9:p=l(e);a:{n=e;d=HEAP[g+64];v=void 0;for(v=-1;;)switch(v){case -1:var Y,P,G,Oa;Y=
n;P=d;G=p;v=HEAP[Y+16]+11>10239?1:3;break;case 1:v=f(Y)<0?2:3;break;case 2:Oa=0;v=6;break;case 3:v=m(Y,P,2)<0?4:5;break;case 4:Oa=-1;v=6;break;case 5:Oa=j(Y,G);v=6;break;case 6:n=Oa;break a;default:assert(0,"bad label: "+v)}n=void 0}d=12;break;case 10:a:{n=e;d=HEAP[g+64];p=void 0;for(p=-1;;)switch(p){case -1:var oa,Ma,xb;oa=n;Ma=d;p=HEAP[oa+16]+6>10239?1:3;break;case 1:p=f(oa)<0?2:3;break;case 2:xb=-1;p=4;break;case 3:xb=m(oa,Ma,2);p=4;break;case 4:n=xb;break a;default:assert(0,"bad label: "+p)}n=
void 0}d=12;break;case 11:n=0;d=12;break;case 12:return a=n;default:assert(0,"bad label: "+d)}},0,function(a,b){var c=STACKTOP;STACKTOP+=8;_memset(c,0,8);var d;for(d=-1;;)switch(d){case -1:var e,f,g=c,h=c+4;e=a;d=b;f=0;d=_PyArg_ParseTuple(d,Z,allocate([g,0,0,0,h,0,0,0],["i8**",0,0,0,"i8**",0,0,0],ALLOC_STACK))!=0?1:5;break;case 1:d=HEAP[e+10260]==0?2:3;break;case 2:_PyErr_SetString(HEAP[v],V);d=5;break;case 3:d=k(e,HEAP[g],HEAP[h])==0?4:5;break;case 4:f=__Py_NoneStruct;HEAP[f]+=1;d=5;break;case 5:return e=
f,STACKTOP=c,e;default:assert(0,"bad label: "+d)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c;c=a;p(c);b=HEAP[c+10260]!=0?1:2;break;case 1:_fclose(HEAP[c+10260]);HEAP[c+10260]=0;b=2;break;case 2:return HEAP[__Py_NoneStruct]+=1,a=__Py_NoneStruct;default:assert(0,"bad label: "+b)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c,d;c=a;b=HEAP[c+10260]==0?1:2;break;case 1:_PyErr_SetString(HEAP[_PyExc_ValueError],N);d=0;b=3;break;case 2:b=_fileno(HEAP[c+10260]);d=_PyInt_FromLong(b);
b=3;break;case 3:return a=d;default:assert(0,"bad label: "+b)}},0,function(a,b){var c=STACKTOP;STACKTOP+=12;_memset(c,0,12);var d;for(d=-1;;)switch(d){case -1:var e,f,g=c,h=c+4,j=c+8;e=a;d=b;f=0;HEAP[g]=0;HEAP[h]=0;d=_PyArg_UnpackTuple(d,ba,1,3,allocate([j,0,0,0,g,0,0,0,h,0,0,0],["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0],ALLOC_STACK))!=0?1:3;break;case 1:d=q(e)!=0?2:3;break;case 2:o(e);f=_PyEval_CallObjectWithKeywords(HEAP[j],HEAP[g],HEAP[h]);p(e);d=3;break;
case 3:return e=f,STACKTOP=c,e;default:assert(0,"bad label: "+d)}},0,function(a,b){var c=STACKTOP;STACKTOP+=12;_memset(c,0,12);var d;for(d=-1;;)switch(d){case -1:var e,f,g,h=c,j=c+4,k=c+8;e=a;d=b;g=0;HEAP[k]=0;d=_PyArg_ParseTuple(d,B,allocate([_PyCode_Type,0,0,0,h,0,0,0,_PyDict_Type,0,0,0,j,0,0,0,k,0,0,0],["%struct._typeobject*",0,0,0,"%struct.PyCodeObject**",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0],ALLOC_STACK))!=0?1:7;break;case 1:d=q(e)!=0?2:7;break;
case 2:d=HEAP[k]==0|HEAP[k]==__Py_NoneStruct?3:4;break;case 3:HEAP[k]=HEAP[j];d=6;break;case 4:d=(HEAP[HEAP[HEAP[k]+4]+84]&536870912)==0?5:6;break;case 5:_PyErr_SetString(HEAP[_PyExc_TypeError],Y);f=0;d=8;break;case 6:o(e);g=_PyEval_EvalCode(HEAP[h],HEAP[j],HEAP[k]);p(e);d=7;break;case 7:f=g;d=8;break;case 8:return e=f,STACKTOP=c,e;default:assert(0,"bad label: "+d)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c,d;c=a;d=0;b=q(c)!=0?1:2;break;case 1:o(c);d=__Py_NoneStruct;HEAP[d]+=1;b=2;break;
case 2:return a=d;default:assert(0,"bad label: "+b)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c,d;c=a;d=0;b=HEAP[c+10276]==0?1:2;break;case 1:_PyErr_SetString(HEAP[v],la);b=3;break;case 2:p(c);d=__Py_NoneStruct;HEAP[d]+=1;b=3;break;case 3:return a=d;default:assert(0,"bad label: "+b)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c;b=HEAP[a+10260]==0?1:2;break;case 1:c=__Py_TrueStruct;b=3;break;case 2:c=__Py_ZeroStruct;b=3;break;case 3:return a=c,HEAP[a]+=1,a;default:assert(0,
"bad label: "+b)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c;c=a;p(c);b=HEAP[c+10260]!=0?1:2;break;case 1:_fclose(HEAP[c+10260]);b=2;break;case 2:b=HEAP[c+8]!=0?3:5;break;case 3:b=HEAP[c+8];HEAP[b]-=1;b=HEAP[b]==0?4:5;break;case 4:FUNCTION_TABLE[HEAP[HEAP[HEAP[c+8]+4]+24]](HEAP[c+8]);b=5;break;case 5:b=HEAP[c+12]!=0?6:8;break;case 6:b=HEAP[c+12];HEAP[b]-=1;b=HEAP[b]==0?7:8;break;case 7:FUNCTION_TABLE[HEAP[HEAP[HEAP[c+12]+4]+24]](HEAP[c+12]);b=8;break;case 8:_PyObject_Free(c);return;default:assert(0,
"bad label: "+b)}},0,_PyObject_GenericGetAttr,0,function(a){var b;for(b=-1;;)switch(b){case -1:var c;c=a;b=HEAP[c+12]!=0?1:2;break;case 1:_fclose(HEAP[c+12]);HEAP[c+12]=0;b=2;break;case 2:return HEAP[__Py_NoneStruct]+=1,a=__Py_NoneStruct;default:assert(0,"bad label: "+b)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c,d;c=a;b=HEAP[c+12]==0?1:2;break;case 1:_PyErr_SetString(HEAP[_PyExc_ValueError],y);d=0;b=3;break;case 2:b=_fileno(HEAP[c+12]);d=_PyInt_FromLong(b);b=3;break;case 3:return a=
d;default:assert(0,"bad label: "+b)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c,e;e=d(a);b=e==0?1:3;break;case 1:b=_PyErr_Occurred()==0?2:3;break;case 2:_PyErr_SetString(HEAP[_PyExc_IndexError],G);c=0;b=4;break;case 3:c=e;b=4;break;case 4:return a=c;default:assert(0,"bad label: "+b)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c;b=HEAP[a+12]==0?1:2;break;case 1:c=__Py_TrueStruct;b=3;break;case 2:c=__Py_ZeroStruct;b=3;break;case 3:return a=c,HEAP[a]+=1,a;default:assert(0,"bad label: "+
b)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c;c=a;b=HEAP[c+12]!=0?1:2;break;case 1:_fclose(HEAP[c+12]);HEAP[c+12]=0;b=2;break;case 2:b=HEAP[c+8]!=0?3:5;break;case 3:b=HEAP[c+8];HEAP[b]-=1;b=HEAP[b]==0?4:5;break;case 4:FUNCTION_TABLE[HEAP[HEAP[HEAP[c+8]+4]+24]](HEAP[c+8]);b=5;break;case 5:_PyObject_Free(c);return;default:assert(0,"bad label: "+b)}},0,_PyObject_SelfIter,0,d,0,function(a,b){var c=STACKTOP;STACKTOP+=4;_memset(c,0,4);var d;for(d=-1;;)switch(d){case -1:var e,f;d=c;var g;e=
a;f=b;g=0;d=_PyArg_ParseTuple(f,Oa,allocate([d,0,0,0],["i8**",0,0,0],ALLOC_STACK))!=0?1:3;break;case 1:g=u(e,f);d=g!=0?2:3;break;case 2:d=g;HEAP[d+10272]=0;HEAP[d+10268]=0;HEAP[d+10264]=1;d=3;break;case 3:return e=g,STACKTOP=c,e;default:assert(0,"bad label: "+d)}},0,u,0,function(b,d){var e=STACKTOP;STACKTOP+=4;_memset(e,0,4);var f;for(f=-1;;)switch(f){case -1:var g,h,j=e,k,l;f=d;l=h=0;f=_PyArg_ParseTuple(f,Ja,allocate([j,0,0,0],["i8**",0,0,0],ALLOC_STACK))!=0?1:13;break;case 1:h=__PyObject_New($a);
f=h!=0?2:13;break;case 2:HEAP[h+20]=1;HEAP[h+16]=0;HEAP[h+8]=0;f=___01fopen64_(HEAP[j],ja);HEAP[h+12]=f;f=HEAP[h+12]==0?3:4;break;case 3:_PyErr_SetFromErrnoWithFilename(HEAP[_PyExc_IOError],HEAP[j]);f=14;break;case 4:f=_PyDict_New();HEAP[h+8]=f;f=HEAP[h+8]==0?14:5;break;case 5:k=f=_fgetc(HEAP[h+12]);f=f==-1?6:7;break;case 6:c(h);f=14;break;case 7:var m=h;f=k!=19?8:9;break;case 8:_ungetc(k,HEAP[m+12]);f=13;break;case 9:l=a(m);f=l!=0?10:5;break;case 10:f=l==-1?11:12;break;case 11:c(h);f=14;break;case 12:_PyErr_SetString(HEAP[_PyExc_RuntimeError],
ua);f=14;break;case 13:g=h;f=17;break;case 14:HEAP[h]-=1;f=HEAP[h]==0?15:16;break;case 15:FUNCTION_TABLE[HEAP[HEAP[h+4]+24]](h);f=16;break;case 16:g=0;f=17;break;case 17:return STACKTOP=e,g;default:assert(0,"bad label: "+f)}},0,function(){var a;for(a=-1;;)switch(a){case -1:a=HEAP[I]==0?1:2;break;case 1:n();n();n();a=2;break;case 2:return a=_Py_BuildValue(U,allocate([HEAP[I],0,0,0,HEAP[J],0,0,0],["i32",0,0,0,"i32",0,0,0],ALLOC_STACK));default:assert(0,"bad label: "+a)}},0]);t.run=s;s();return t});
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



var $0___SIZE = 128; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 80; // %2
  
var $3___SIZE = 20; // %3
  
var $4___SIZE = 20; // %4
  
var $5___SIZE = 40; // %5
  
var $6___SIZE = 20; // %6
  
var $7___SIZE = 196; // %7
  
var $8___SIZE = 48; // %8
  
var $9___SIZE = 40; // %9
  
var $10___SIZE = 80; // %10
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_LogReaderObject___SIZE = 24; // %struct.LogReaderObject
  
var $struct_ProfilerObject___SIZE = 10292; // %struct.ProfilerObject
  var $struct_ProfilerObject___FLATTENER = [0,4,8,12,16,20,10260,10264,10268,10272,10276,10280,10284];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyCodeObject___SIZE = 72; // %struct.PyCodeObject
  
var $struct_PyFrameObject___SIZE = 316; // %struct.PyFrameObject
  var $struct_PyFrameObject___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,312];
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyInterpreterState___SIZE = 40; // %struct.PyInterpreterState
  
var $struct_PyListObject___SIZE = 20; // %struct.PyListObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyThreadState___SIZE = 84; // %struct.PyThreadState
  
var $struct_PyTryBlock___SIZE = 12; // %struct.PyTryBlock
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_hs_time___SIZE = 8; // %struct.hs_time
  
var $struct_rusage___SIZE = 72; // %struct.rusage
  var $struct_rusage___FLATTENER = [0,8,16,20,24,28,32,36,40,44,48,52,56,60,64,68];
var _ProfilerError;
var _logreader_close__doc__;

var _logreader_fileno__doc__;

var __str;

var __str1;
var __str2;
var __str3;

var __str4;

var __str5;
var __str6;
var ___PRETTY_FUNCTION___8917;
var __str7;
var _maxvalues_8890;
var _timeofday_diff;
var _rusage_diff;
var __str8;
var __str9;
var _addinfo__doc__;
var __str10;
var _close__doc__;
var __str11;
var _runcall__doc__;
var __str12;
var _runcode__doc__;
var __str13;



var __str14;
var _start__doc__;
var _stop__doc__;
var __str15;
var __str16;
var __str17;
var __str18;
var __str19;
var __str20;
var __str21;
var _profiler_methods;
var __str22;
var __str23;
var __str24;
var _profiler_members;


var __str25;
var __str26;
var _profiler_getsets;
var _profiler_object__doc__;
var __str27;
var _ProfilerType;
var _logreader_methods;
var __str28;
var __str29;
var _logreader_members;
var _logreader__doc__;
var _logreader_as_sequence;
var __str30;
var _logreader_getsets;
var __str31;
var _LogReaderType;
var __str32;
var __str33;

var __str34;
var __str35;
var __str36;
var __str37;
var __str38;
var __str39;
var __str40;
var __str41;
var __str42;
var __str43;
var __str44;
var __str45;
var __str46;
var __str47;
var __str48;
var __str49;
var __str50;
var __str51;
var __str52;
var _profiler__doc__;
var __str53;
var __str54;
var _coverage__doc__;
var __str55;
var _resolution__doc__;
var __str56;
var __str57;
var __str58;
var __str59;
var __str60;
var _functions;

var __str61;
var __str62;
var __str63;
var __str64;
var __str65;
var __str66;
var __str67;
var __str68;
var __str69;
var __str70;
var __str71;
var __str72;
var __str73;
var __str74;

























































  function _logreader_close($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$self_addr; //@line 119 "_hotshot.c"
        var $2=$1+12; //@line 119 "_hotshot.c"
        var $3=HEAP[$2]; //@line 119 "_hotshot.c"
        var $4=($3)!=0; //@line 119 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 119 "_hotshot.c"
      case 1: // $bb
        var $5=$self_addr; //@line 120 "_hotshot.c"
        var $6=$5+12; //@line 120 "_hotshot.c"
        var $7=HEAP[$6]; //@line 120 "_hotshot.c"
        var $8=_fclose($7); //@line 120 "_hotshot.c"
        var $9=$self_addr; //@line 121 "_hotshot.c"
        var $10=$9+12; //@line 121 "_hotshot.c"
        HEAP[$10]=0; //@line 121 "_hotshot.c"
        __label__ = 2; break; //@line 121 "_hotshot.c"
      case 2: // $bb1
        var $11=HEAP[__Py_NoneStruct]; //@line 123 "_hotshot.c"
        var $12=($11) + 1; //@line 123 "_hotshot.c"
        HEAP[__Py_NoneStruct]=$12; //@line 123 "_hotshot.c"
        $0=__Py_NoneStruct; //@line 125 "_hotshot.c"
        var $13=$0; //@line 125 "_hotshot.c"
        $retval=$13; //@line 125 "_hotshot.c"
        var $retval2=$retval; //@line 125 "_hotshot.c"
        ;
        return $retval2; //@line 125 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _logreader_fileno($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 136 "_hotshot.c"
        var $2=$1+12; //@line 136 "_hotshot.c"
        var $3=HEAP[$2]; //@line 136 "_hotshot.c"
        var $4=($3)==0; //@line 136 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 136 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 137 "_hotshot.c"
        _PyErr_SetString($5, __str); //@line 137 "_hotshot.c"
        $0=0; //@line 139 "_hotshot.c"
        __label__ = 3; break; //@line 139 "_hotshot.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 141 "_hotshot.c"
        var $7=$6+12; //@line 141 "_hotshot.c"
        var $8=HEAP[$7]; //@line 141 "_hotshot.c"
        var $9=_fileno($8); //@line 141 "_hotshot.c"
        var $10=_PyInt_FromLong($9); //@line 141 "_hotshot.c"
        $0=$10; //@line 141 "_hotshot.c"
        __label__ = 3; break; //@line 141 "_hotshot.c"
      case 3: // $bb2
        var $11=$0; //@line 139 "_hotshot.c"
        $retval=$11; //@line 139 "_hotshot.c"
        var $retval3=$retval; //@line 139 "_hotshot.c"
        ;
        return $retval3; //@line 139 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _unpack_packed_int($self, $pvalue, $discard) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $pvalue_addr;
        var $discard_addr;
        var $retval;
        var $0;
        var $c;
        var $accum;
        var $bits;
        var $cont;
        $self_addr=$self;
        $pvalue_addr=$pvalue;
        $discard_addr=$discard;
        $accum=0; //@line 281 "_hotshot.c"
        $bits=0; //@line 282 "_hotshot.c"
        __label__ = 1; break; //@line 282 "_hotshot.c"
      case 1: // $bb
        var $1=$self_addr; //@line 287 "_hotshot.c"
        var $2=$1+12; //@line 287 "_hotshot.c"
        var $3=HEAP[$2]; //@line 287 "_hotshot.c"
        var $4=_fgetc($3); //@line 287 "_hotshot.c"
        $c=$4; //@line 287 "_hotshot.c"
        var $5=($4)==-1; //@line 287 "_hotshot.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 287 "_hotshot.c"
      case 2: // $bb1
        $0=-1; //@line 288 "_hotshot.c"
        __label__ = 5; break; //@line 288 "_hotshot.c"
      case 3: // $bb2
        var $6=$c; //@line 289 "_hotshot.c"
        var $7=($6) & 127; //@line 289 "_hotshot.c"
        var $8=$discard_addr; //@line 289 "_hotshot.c"
        var $9=($7) >> ($8); //@line 289 "_hotshot.c"
        var $10=$bits; //@line 289 "_hotshot.c"
        var $11=($9) << ($10); //@line 289 "_hotshot.c"
        var $12=$accum; //@line 289 "_hotshot.c"
        var $13=($11) | ($12); //@line 289 "_hotshot.c"
        $accum=$13; //@line 289 "_hotshot.c"
        var $14=$discard_addr; //@line 290 "_hotshot.c"
        var $_neg=0 - ($14);
        var $15=$bits; //@line 290 "_hotshot.c"
        var $16=($_neg) + 7;
        var $17=($16) + ($15); //@line 290 "_hotshot.c"
        $bits=$17; //@line 290 "_hotshot.c"
        var $18=$c; //@line 291 "_hotshot.c"
        var $19=($18) & 128; //@line 291 "_hotshot.c"
        $cont=$19; //@line 291 "_hotshot.c"
        $discard_addr=0; //@line 292 "_hotshot.c"
        var $20=$cont; //@line 293 "_hotshot.c"
        var $21=($20)!=0; //@line 293 "_hotshot.c"
        if ($21) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 293 "_hotshot.c"
      case 4: // $bb3
        var $22=$pvalue_addr; //@line 295 "_hotshot.c"
        var $23=$accum; //@line 295 "_hotshot.c"
        HEAP[$22]=$23; //@line 295 "_hotshot.c"
        $0=0; //@line 297 "_hotshot.c"
        __label__ = 5; break; //@line 297 "_hotshot.c"
      case 5: // $bb4
        var $24=$0; //@line 288 "_hotshot.c"
        $retval=$24; //@line 288 "_hotshot.c"
        var $retval5=$retval; //@line 288 "_hotshot.c"
        ;
        return $retval5; //@line 288 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _unpack_string($self, $pvalue) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $pvalue_addr;
        var $retval;
        var $0;
        var $i;
        var $len=__stackBase__;
        var $err;
        var $ch;
        var $buf;
        $self_addr=$self;
        $pvalue_addr=$pvalue;
        var $1=$self_addr; //@line 312 "_hotshot.c"
        var $2=_unpack_packed_int($1, $len, 0); //@line 312 "_hotshot.c"
        $err=$2; //@line 312 "_hotshot.c"
        var $3=$err; //@line 312 "_hotshot.c"
        var $4=($3)!=0; //@line 312 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 312 "_hotshot.c"
      case 1: // $bb
        var $5=$err; //@line 313 "_hotshot.c"
        $0=$5; //@line 313 "_hotshot.c"
        __label__ = 12; break; //@line 313 "_hotshot.c"
      case 2: // $bb1
        var $6=HEAP[$len]; //@line 315 "_hotshot.c"
        var $7=_malloc($6); //@line 315 "_hotshot.c"
        $buf=$7; //@line 315 "_hotshot.c"
        var $8=$buf; //@line 316 "_hotshot.c"
        var $9=($8)==0; //@line 316 "_hotshot.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 316 "_hotshot.c"
      case 3: // $bb2
        var $10=_PyErr_NoMemory(); //@line 317 "_hotshot.c"
        $0=-2; //@line 318 "_hotshot.c"
        __label__ = 12; break; //@line 318 "_hotshot.c"
      case 4: // $bb3
        $i=0; //@line 321 "_hotshot.c"
        __label__ = 8; break; //@line 321 "_hotshot.c"
      case 5: // $bb4
        var $11=$self_addr; //@line 322 "_hotshot.c"
        var $12=$11+12; //@line 322 "_hotshot.c"
        var $13=HEAP[$12]; //@line 322 "_hotshot.c"
        var $14=_fgetc($13); //@line 322 "_hotshot.c"
        $ch=$14; //@line 322 "_hotshot.c"
        var $15=$ch; //@line 323 "_hotshot.c"
        var $16=((($15)) & 255); //@line 323 "_hotshot.c"
        var $17=$buf; //@line 323 "_hotshot.c"
        var $18=$i; //@line 323 "_hotshot.c"
        var $19=$17+$18; //@line 323 "_hotshot.c"
        HEAP[$19]=$16; //@line 323 "_hotshot.c"
        var $20=$ch; //@line 324 "_hotshot.c"
        var $21=($20)==-1; //@line 324 "_hotshot.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 324 "_hotshot.c"
      case 6: // $bb5
        var $22=$buf; //@line 325 "_hotshot.c"
        _free($22); //@line 325 "_hotshot.c"
        $0=-1; //@line 326 "_hotshot.c"
        __label__ = 12; break; //@line 326 "_hotshot.c"
      case 7: // $bb6
        var $23=$i; //@line 321 "_hotshot.c"
        var $24=($23) + 1; //@line 321 "_hotshot.c"
        $i=$24; //@line 321 "_hotshot.c"
        __label__ = 8; break; //@line 321 "_hotshot.c"
      case 8: // $bb7
        var $25=HEAP[$len]; //@line 321 "_hotshot.c"
        var $26=$i; //@line 321 "_hotshot.c"
        var $27=($26) < ($25); //@line 321 "_hotshot.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 321 "_hotshot.c"
      case 9: // $bb8
        var $28=HEAP[$len]; //@line 329 "_hotshot.c"
        var $29=$buf; //@line 329 "_hotshot.c"
        var $30=_PyString_FromStringAndSize($29, $28); //@line 329 "_hotshot.c"
        var $31=$pvalue_addr; //@line 329 "_hotshot.c"
        HEAP[$31]=$30; //@line 329 "_hotshot.c"
        var $32=$buf; //@line 330 "_hotshot.c"
        _free($32); //@line 330 "_hotshot.c"
        var $33=$pvalue_addr; //@line 331 "_hotshot.c"
        var $34=HEAP[$33]; //@line 331 "_hotshot.c"
        var $35=($34)==0; //@line 331 "_hotshot.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 331 "_hotshot.c"
      case 10: // $bb9
        $0=-2; //@line 332 "_hotshot.c"
        __label__ = 12; break; //@line 332 "_hotshot.c"
      case 11: // $bb10
        $0=0; //@line 334 "_hotshot.c"
        __label__ = 12; break; //@line 334 "_hotshot.c"
      case 12: // $bb11
        var $36=$0; //@line 313 "_hotshot.c"
        $retval=$36; //@line 313 "_hotshot.c"
        var $retval12=$retval; //@line 313 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 313 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _unpack_add_info($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $key=__stackBase__;
        var $value=__stackBase__+4;
        var $err;
        var $list;
        $self_addr=$self;
        HEAP[$value]=0; //@line 342 "_hotshot.c"
        var $1=$self_addr; //@line 345 "_hotshot.c"
        var $2=_unpack_string($1, $key); //@line 345 "_hotshot.c"
        $err=$2; //@line 345 "_hotshot.c"
        var $3=$err; //@line 346 "_hotshot.c"
        var $4=($3)==0; //@line 346 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 15; break; } //@line 346 "_hotshot.c"
      case 1: // $bb
        var $5=$self_addr; //@line 347 "_hotshot.c"
        var $6=_unpack_string($5, $value); //@line 347 "_hotshot.c"
        $err=$6; //@line 347 "_hotshot.c"
        var $7=$err; //@line 348 "_hotshot.c"
        var $8=($7)!=0; //@line 348 "_hotshot.c"
        var $9=HEAP[$key]; //@line 349 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 348 "_hotshot.c"
      case 2: // $bb1
        var $10=$9; //@line 349 "_hotshot.c"
        var $11=HEAP[$10]; //@line 349 "_hotshot.c"
        var $12=($11) - 1; //@line 349 "_hotshot.c"
        var $13=$9; //@line 349 "_hotshot.c"
        HEAP[$13]=$12; //@line 349 "_hotshot.c"
        var $14=$9; //@line 349 "_hotshot.c"
        var $15=HEAP[$14]; //@line 349 "_hotshot.c"
        var $16=($15)==0; //@line 349 "_hotshot.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 15; break; } //@line 349 "_hotshot.c"
      case 3: // $bb2
        var $17=HEAP[$key]; //@line 349 "_hotshot.c"
        var $18=$17+4; //@line 349 "_hotshot.c"
        var $19=HEAP[$18]; //@line 349 "_hotshot.c"
        var $20=$19+24; //@line 349 "_hotshot.c"
        var $21=HEAP[$20]; //@line 349 "_hotshot.c"
        var $22=HEAP[$key]; //@line 349 "_hotshot.c"
        FUNCTION_TABLE[$21]($22); //@line 349 "_hotshot.c"
        __label__ = 15; break; //@line 349 "_hotshot.c"
      case 4: // $bb4
        var $23=$self_addr; //@line 351 "_hotshot.c"
        var $24=$23+8; //@line 351 "_hotshot.c"
        var $25=HEAP[$24]; //@line 351 "_hotshot.c"
        var $26=_PyDict_GetItem($25, $9); //@line 351 "_hotshot.c"
        $list=$26; //@line 351 "_hotshot.c"
        var $27=$list; //@line 352 "_hotshot.c"
        var $28=($27)==0; //@line 352 "_hotshot.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 13; break; } //@line 352 "_hotshot.c"
      case 5: // $bb5
        var $29=_PyList_New(0); //@line 353 "_hotshot.c"
        $list=$29; //@line 353 "_hotshot.c"
        var $30=$list; //@line 354 "_hotshot.c"
        var $31=($30)==0; //@line 354 "_hotshot.c"
        if ($31) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 354 "_hotshot.c"
      case 6: // $bb6
        $err=-2; //@line 355 "_hotshot.c"
        __label__ = 15; break; //@line 355 "_hotshot.c"
      case 7: // $bb7
        var $32=HEAP[$key]; //@line 358 "_hotshot.c"
        var $33=$self_addr; //@line 358 "_hotshot.c"
        var $34=$33+8; //@line 358 "_hotshot.c"
        var $35=HEAP[$34]; //@line 358 "_hotshot.c"
        var $36=$list; //@line 358 "_hotshot.c"
        var $37=_PyDict_SetItem($35, $32, $36); //@line 358 "_hotshot.c"
        var $38=($37)!=0; //@line 358 "_hotshot.c"
        var $39=$list; //@line 359 "_hotshot.c"
        var $40=$39; //@line 359 "_hotshot.c"
        var $41=HEAP[$40]; //@line 359 "_hotshot.c"
        var $42=($41) - 1; //@line 359 "_hotshot.c"
        var $43=$list; //@line 359 "_hotshot.c"
        var $44=$43; //@line 359 "_hotshot.c"
        HEAP[$44]=$42; //@line 359 "_hotshot.c"
        var $45=$list; //@line 359 "_hotshot.c"
        var $46=$45; //@line 359 "_hotshot.c"
        var $47=HEAP[$46]; //@line 359 "_hotshot.c"
        var $48=($47)==0; //@line 359 "_hotshot.c"
        if ($38) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 358 "_hotshot.c"
      case 8: // $bb8
        if ($48) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 359 "_hotshot.c"
      case 9: // $bb9
        var $49=$list; //@line 359 "_hotshot.c"
        var $50=$49+4; //@line 359 "_hotshot.c"
        var $51=HEAP[$50]; //@line 359 "_hotshot.c"
        var $52=$51+24; //@line 359 "_hotshot.c"
        var $53=HEAP[$52]; //@line 359 "_hotshot.c"
        var $54=$list; //@line 359 "_hotshot.c"
        FUNCTION_TABLE[$53]($54); //@line 359 "_hotshot.c"
        __label__ = 10; break; //@line 359 "_hotshot.c"
      case 10: // $bb10
        $err=-2; //@line 360 "_hotshot.c"
        __label__ = 15; break; //@line 360 "_hotshot.c"
      case 11: // $bb11
        if ($48) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 363 "_hotshot.c"
      case 12: // $bb12
        var $55=$list; //@line 363 "_hotshot.c"
        var $56=$55+4; //@line 363 "_hotshot.c"
        var $57=HEAP[$56]; //@line 363 "_hotshot.c"
        var $58=$57+24; //@line 363 "_hotshot.c"
        var $59=HEAP[$58]; //@line 363 "_hotshot.c"
        var $60=$list; //@line 363 "_hotshot.c"
        FUNCTION_TABLE[$59]($60); //@line 363 "_hotshot.c"
        __label__ = 13; break; //@line 363 "_hotshot.c"
      case 13: // $bb13
        var $61=HEAP[$value]; //@line 365 "_hotshot.c"
        var $62=$list; //@line 365 "_hotshot.c"
        var $63=_PyList_Append($62, $61); //@line 365 "_hotshot.c"
        var $64=($63)!=0; //@line 365 "_hotshot.c"
        if ($64) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 365 "_hotshot.c"
      case 14: // $bb14
        $err=-2; //@line 366 "_hotshot.c"
        __label__ = 15; break; //@line 369 "_hotshot.c"
      case 15: // $finally
        var $65=HEAP[$key]; //@line 370 "_hotshot.c"
        var $66=($65)!=0; //@line 370 "_hotshot.c"
        if ($66) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 370 "_hotshot.c"
      case 16: // $bb15
        var $67=HEAP[$key]; //@line 370 "_hotshot.c"
        var $68=$67; //@line 370 "_hotshot.c"
        var $69=HEAP[$68]; //@line 370 "_hotshot.c"
        var $70=($69) - 1; //@line 370 "_hotshot.c"
        var $71=$67; //@line 370 "_hotshot.c"
        HEAP[$71]=$70; //@line 370 "_hotshot.c"
        var $72=$67; //@line 370 "_hotshot.c"
        var $73=HEAP[$72]; //@line 370 "_hotshot.c"
        var $74=($73)==0; //@line 370 "_hotshot.c"
        if ($74) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 370 "_hotshot.c"
      case 17: // $bb16
        var $75=HEAP[$key]; //@line 370 "_hotshot.c"
        var $76=$75+4; //@line 370 "_hotshot.c"
        var $77=HEAP[$76]; //@line 370 "_hotshot.c"
        var $78=$77+24; //@line 370 "_hotshot.c"
        var $79=HEAP[$78]; //@line 370 "_hotshot.c"
        var $80=HEAP[$key]; //@line 370 "_hotshot.c"
        FUNCTION_TABLE[$79]($80); //@line 370 "_hotshot.c"
        __label__ = 18; break; //@line 370 "_hotshot.c"
      case 18: // $bb17
        var $81=HEAP[$value]; //@line 371 "_hotshot.c"
        var $82=($81)!=0; //@line 371 "_hotshot.c"
        if ($82) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 371 "_hotshot.c"
      case 19: // $bb18
        var $83=HEAP[$value]; //@line 371 "_hotshot.c"
        var $84=$83; //@line 371 "_hotshot.c"
        var $85=HEAP[$84]; //@line 371 "_hotshot.c"
        var $86=($85) - 1; //@line 371 "_hotshot.c"
        var $87=$83; //@line 371 "_hotshot.c"
        HEAP[$87]=$86; //@line 371 "_hotshot.c"
        var $88=$83; //@line 371 "_hotshot.c"
        var $89=HEAP[$88]; //@line 371 "_hotshot.c"
        var $90=($89)==0; //@line 371 "_hotshot.c"
        if ($90) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 371 "_hotshot.c"
      case 20: // $bb19
        var $91=HEAP[$value]; //@line 371 "_hotshot.c"
        var $92=$91+4; //@line 371 "_hotshot.c"
        var $93=HEAP[$92]; //@line 371 "_hotshot.c"
        var $94=$93+24; //@line 371 "_hotshot.c"
        var $95=HEAP[$94]; //@line 371 "_hotshot.c"
        var $96=HEAP[$value]; //@line 371 "_hotshot.c"
        FUNCTION_TABLE[$95]($96); //@line 371 "_hotshot.c"
        __label__ = 21; break; //@line 371 "_hotshot.c"
      case 21: // $bb20
        var $97=$err; //@line 372 "_hotshot.c"
        $0=$97; //@line 372 "_hotshot.c"
        var $98=$0; //@line 372 "_hotshot.c"
        $retval=$98; //@line 372 "_hotshot.c"
        var $retval21=$retval; //@line 372 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 372 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _eof_error($self) {
    ;
    var __label__;
  
    var $self_addr;
    $self_addr=$self;
    var $0=$self_addr; //@line 379 "_hotshot.c"
    var $1=$0+12; //@line 379 "_hotshot.c"
    var $2=HEAP[$1]; //@line 379 "_hotshot.c"
    var $3=_fclose($2); //@line 379 "_hotshot.c"
    var $4=$self_addr; //@line 380 "_hotshot.c"
    var $5=$4+12; //@line 380 "_hotshot.c"
    HEAP[$5]=0; //@line 380 "_hotshot.c"
    var $6=HEAP[_PyExc_EOFError]; //@line 381 "_hotshot.c"
    _PyErr_SetString($6, __str1); //@line 381 "_hotshot.c"
    ;
    return; //@line 383 "_hotshot.c"
  }
  

  function _logreader_tp_iternext($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $c;
        var $what;
        var $err;
        var $lineno=__stackBase__;
        var $fileno=__stackBase__+4;
        var $tdelta=__stackBase__+8;
        var $s1=__stackBase__+12;
        var $s2;
        var $result;
        $self_addr=$self;
        $err=0; //@line 390 "_hotshot.c"
        HEAP[$lineno]=-1; //@line 391 "_hotshot.c"
        HEAP[$fileno]=-1; //@line 392 "_hotshot.c"
        HEAP[$tdelta]=-1; //@line 393 "_hotshot.c"
        HEAP[$s1]=0; //@line 394 "_hotshot.c"
        $s2=0; //@line 394 "_hotshot.c"
        $result=0; //@line 395 "_hotshot.c"
        var $1=$self_addr; //@line 400 "_hotshot.c"
        var $2=$1+12; //@line 400 "_hotshot.c"
        var $3=HEAP[$2]; //@line 400 "_hotshot.c"
        var $4=($3)==0; //@line 400 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 400 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[_ProfilerError]; //@line 401 "_hotshot.c"
        _PyErr_SetString($5, __str2); //@line 401 "_hotshot.c"
        $0=0; //@line 403 "_hotshot.c"
        __label__ = 44; break; //@line 403 "_hotshot.c"
      case 2: // $restart
        var $6=$self_addr; //@line 408 "_hotshot.c"
        var $7=$6+12; //@line 408 "_hotshot.c"
        var $8=HEAP[$7]; //@line 408 "_hotshot.c"
        var $9=_fgetc($8); //@line 408 "_hotshot.c"
        $c=$9; //@line 408 "_hotshot.c"
        var $10=($9)==-1; //@line 408 "_hotshot.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 408 "_hotshot.c"
      case 3: // $bb1
        var $11=$self_addr; //@line 409 "_hotshot.c"
        var $12=$11+12; //@line 409 "_hotshot.c"
        var $13=HEAP[$12]; //@line 409 "_hotshot.c"
        var $14=_fclose($13); //@line 409 "_hotshot.c"
        var $15=$self_addr; //@line 410 "_hotshot.c"
        var $16=$15+12; //@line 410 "_hotshot.c"
        HEAP[$16]=0; //@line 410 "_hotshot.c"
        $0=0; //@line 411 "_hotshot.c"
        __label__ = 44; break; //@line 411 "_hotshot.c"
      case 4: // $bb2
        var $17=$c; //@line 413 "_hotshot.c"
        var $18=($17) & 3; //@line 413 "_hotshot.c"
        $what=$18; //@line 413 "_hotshot.c"
        var $19=$what; //@line 414 "_hotshot.c"
        var $20=($19)==3; //@line 414 "_hotshot.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 414 "_hotshot.c"
      case 5: // $bb3
        var $21=$c; //@line 415 "_hotshot.c"
        $what=$21; //@line 415 "_hotshot.c"
        __lastLabel__ = 5; __label__ = 7; break; //@line 415 "_hotshot.c"
      case 6: // $bb4
        var $22=$self_addr; //@line 417 "_hotshot.c"
        var $23=$22+12; //@line 417 "_hotshot.c"
        var $24=HEAP[$23]; //@line 417 "_hotshot.c"
        var $25=$c; //@line 417 "_hotshot.c"
        var $26=_ungetc($25, $24); //@line 417 "_hotshot.c"
        var $_pr=$what;
        __lastLabel__ = 6; __label__ = 7; break; //@line 417 "_hotshot.c"
      case 7: // $bb5
        var $27=__lastLabel__ == 6 ? $_pr : ($21);
        if ($27 == 0) {
          __label__ = 8; break;
        }
        else if ($27 == 1) {
          __label__ = 12; break;
        }
        else if ($27 == 2) {
          __label__ = 13; break;
        }
        else if ($27 == 19) {
          __label__ = 16; break;
        }
        else if ($27 == 35) {
          __label__ = 17; break;
        }
        else if ($27 == 51) {
          __label__ = 23; break;
        }
        else if ($27 == 67) {
          __label__ = 20; break;
        }
        else if ($27 == 83) {
          __label__ = 26; break;
        }
        else {
        __label__ = 29; break;
        }
        
      case 8: // $bb6
        var $28=$self_addr; //@line 421 "_hotshot.c"
        var $29=_unpack_packed_int($28, $fileno, 2); //@line 421 "_hotshot.c"
        $err=$29; //@line 421 "_hotshot.c"
        var $30=$err; //@line 422 "_hotshot.c"
        var $31=($30)==0; //@line 422 "_hotshot.c"
        if ($31) { __lastLabel__ = 8; __label__ = 9; break; } else { __lastLabel__ = 8; __label__ = 30; break; } //@line 422 "_hotshot.c"
      case 9: // $bb7
        var $32=$self_addr; //@line 423 "_hotshot.c"
        var $33=_unpack_packed_int($32, $lineno, 0); //@line 423 "_hotshot.c"
        $err=$33; //@line 423 "_hotshot.c"
        var $34=$self_addr; //@line 424 "_hotshot.c"
        var $35=$34+20; //@line 424 "_hotshot.c"
        var $36=HEAP[$35]; //@line 424 "_hotshot.c"
        var $37=($36)!=0; //@line 424 "_hotshot.c"
        if ($37) { __lastLabel__ = 9; __label__ = 10; break; } else { __lastLabel__ = 9; __label__ = 30; break; } //@line 424 "_hotshot.c"
      case 10: // $bb8
        var $38=$err; //@line 424 "_hotshot.c"
        var $39=($38)==0; //@line 424 "_hotshot.c"
        if ($39) { __lastLabel__ = 10; __label__ = 11; break; } else { __lastLabel__ = 10; __label__ = 30; break; } //@line 424 "_hotshot.c"
      case 11: // $bb9
        var $40=$self_addr; //@line 425 "_hotshot.c"
        var $41=_unpack_packed_int($40, $tdelta, 0); //@line 425 "_hotshot.c"
        $err=$41; //@line 425 "_hotshot.c"
        __lastLabel__ = 11; __label__ = 30; break; //@line 425 "_hotshot.c"
      case 12: // $bb11
        var $42=$self_addr; //@line 429 "_hotshot.c"
        var $43=_unpack_packed_int($42, $tdelta, 2); //@line 429 "_hotshot.c"
        $err=$43; //@line 429 "_hotshot.c"
        __lastLabel__ = 12; __label__ = 30; break; //@line 429 "_hotshot.c"
      case 13: // $bb12
        var $44=$self_addr; //@line 432 "_hotshot.c"
        var $45=_unpack_packed_int($44, $lineno, 2); //@line 432 "_hotshot.c"
        $err=$45; //@line 432 "_hotshot.c"
        var $46=$self_addr; //@line 433 "_hotshot.c"
        var $47=$46+16; //@line 433 "_hotshot.c"
        var $48=HEAP[$47]; //@line 433 "_hotshot.c"
        var $49=($48)!=0; //@line 433 "_hotshot.c"
        if ($49) { __lastLabel__ = 13; __label__ = 14; break; } else { __lastLabel__ = 13; __label__ = 30; break; } //@line 433 "_hotshot.c"
      case 14: // $bb13
        var $50=$err; //@line 433 "_hotshot.c"
        var $51=($50)==0; //@line 433 "_hotshot.c"
        if ($51) { __lastLabel__ = 14; __label__ = 15; break; } else { __lastLabel__ = 14; __label__ = 30; break; } //@line 433 "_hotshot.c"
      case 15: // $bb14
        var $52=$self_addr; //@line 434 "_hotshot.c"
        var $53=_unpack_packed_int($52, $tdelta, 0); //@line 434 "_hotshot.c"
        $err=$53; //@line 434 "_hotshot.c"
        __lastLabel__ = 15; __label__ = 30; break; //@line 434 "_hotshot.c"
      case 16: // $bb16
        var $54=$self_addr; //@line 437 "_hotshot.c"
        var $55=_unpack_add_info($54); //@line 437 "_hotshot.c"
        $err=$55; //@line 437 "_hotshot.c"
        __lastLabel__ = 16; __label__ = 30; break; //@line 437 "_hotshot.c"
      case 17: // $bb17
        var $56=$self_addr; //@line 440 "_hotshot.c"
        var $57=_unpack_packed_int($56, $fileno, 0); //@line 440 "_hotshot.c"
        $err=$57; //@line 440 "_hotshot.c"
        var $58=$err; //@line 441 "_hotshot.c"
        var $59=($58)==0; //@line 441 "_hotshot.c"
        if ($59) { __lastLabel__ = 17; __label__ = 18; break; } else { __lastLabel__ = 17; __label__ = 30; break; } //@line 441 "_hotshot.c"
      case 18: // $bb18
        var $60=$self_addr; //@line 442 "_hotshot.c"
        var $61=_unpack_string($60, $s1); //@line 442 "_hotshot.c"
        $err=$61; //@line 442 "_hotshot.c"
        var $62=$err; //@line 443 "_hotshot.c"
        var $63=($62)==0; //@line 443 "_hotshot.c"
        if ($63) { __lastLabel__ = 18; __label__ = 19; break; } else { __lastLabel__ = 18; __label__ = 30; break; } //@line 443 "_hotshot.c"
      case 19: // $bb19
        var $64=HEAP[__Py_NoneStruct]; //@line 444 "_hotshot.c"
        var $65=($64) + 1; //@line 444 "_hotshot.c"
        HEAP[__Py_NoneStruct]=$65; //@line 444 "_hotshot.c"
        $s2=__Py_NoneStruct; //@line 445 "_hotshot.c"
        var $_pr1=$err;
        __lastLabel__ = 19; __label__ = 30; break; //@line 445 "_hotshot.c"
      case 20: // $bb21
        var $66=$self_addr; //@line 450 "_hotshot.c"
        var $67=_unpack_packed_int($66, $fileno, 0); //@line 450 "_hotshot.c"
        $err=$67; //@line 450 "_hotshot.c"
        var $68=$err; //@line 451 "_hotshot.c"
        var $69=($68)==0; //@line 451 "_hotshot.c"
        if ($69) { __lastLabel__ = 20; __label__ = 21; break; } else { __lastLabel__ = 20; __label__ = 30; break; } //@line 451 "_hotshot.c"
      case 21: // $bb22
        var $70=$self_addr; //@line 452 "_hotshot.c"
        var $71=_unpack_packed_int($70, $lineno, 0); //@line 452 "_hotshot.c"
        $err=$71; //@line 452 "_hotshot.c"
        var $72=$err; //@line 453 "_hotshot.c"
        var $73=($72)==0; //@line 453 "_hotshot.c"
        if ($73) { __lastLabel__ = 21; __label__ = 22; break; } else { __lastLabel__ = 21; __label__ = 30; break; } //@line 453 "_hotshot.c"
      case 22: // $bb23
        var $74=$self_addr; //@line 454 "_hotshot.c"
        var $75=_unpack_string($74, $s1); //@line 454 "_hotshot.c"
        $err=$75; //@line 454 "_hotshot.c"
        __lastLabel__ = 22; __label__ = 30; break; //@line 454 "_hotshot.c"
      case 23: // $bb25
        var $76=$self_addr; //@line 458 "_hotshot.c"
        var $77=$76+12; //@line 458 "_hotshot.c"
        var $78=HEAP[$77]; //@line 458 "_hotshot.c"
        var $79=_fgetc($78); //@line 458 "_hotshot.c"
        $c=$79; //@line 458 "_hotshot.c"
        var $80=$c; //@line 458 "_hotshot.c"
        var $81=($80)==-1; //@line 458 "_hotshot.c"
        if ($81) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 458 "_hotshot.c"
      case 24: // $bb26
        $err=-1; //@line 459 "_hotshot.c"
        __label__ = 33; break; //@line 459 "_hotshot.c"
      case 25: // $bb27
        var $82=$c; //@line 461 "_hotshot.c"
        var $83=($82)!=0; //@line 461 "_hotshot.c"
        var $84=($83); //@line 461 "_hotshot.c"
        var $85=$self_addr; //@line 461 "_hotshot.c"
        var $86=$85+16; //@line 461 "_hotshot.c"
        HEAP[$86]=$84; //@line 461 "_hotshot.c"
        __label__ = 2; break; //@line 461 "_hotshot.c"
      case 26: // $bb28
        var $87=$self_addr; //@line 466 "_hotshot.c"
        var $88=$87+12; //@line 466 "_hotshot.c"
        var $89=HEAP[$88]; //@line 466 "_hotshot.c"
        var $90=_fgetc($89); //@line 466 "_hotshot.c"
        $c=$90; //@line 466 "_hotshot.c"
        var $91=$c; //@line 466 "_hotshot.c"
        var $92=($91)==-1; //@line 466 "_hotshot.c"
        if ($92) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 466 "_hotshot.c"
      case 27: // $bb29
        $err=-1; //@line 467 "_hotshot.c"
        __label__ = 33; break; //@line 467 "_hotshot.c"
      case 28: // $bb30
        var $93=$c; //@line 469 "_hotshot.c"
        var $94=($93)!=0; //@line 469 "_hotshot.c"
        var $95=($94); //@line 469 "_hotshot.c"
        var $96=$self_addr; //@line 469 "_hotshot.c"
        var $97=$96+20; //@line 469 "_hotshot.c"
        HEAP[$97]=$95; //@line 469 "_hotshot.c"
        __label__ = 2; break; //@line 469 "_hotshot.c"
      case 29: // $bb32_thread2
        $err=-3; //@line 474 "_hotshot.c"
        __label__ = 31; break;
      case 30: // $bb32
        var $98=__lastLabel__ == 20 ? $68 : (__lastLabel__ == 21 ? $72 : (__lastLabel__ == 22 ? $75 : (__lastLabel__ == 17 ? $58 : (__lastLabel__ == 18 ? $62 : (__lastLabel__ == 19 ? $_pr1 : (__lastLabel__ == 13 ? $45 : (__lastLabel__ == 14 ? $50 : (__lastLabel__ == 15 ? $53 : (__lastLabel__ == 8 ? $30 : (__lastLabel__ == 9 ? $33 : (__lastLabel__ == 10 ? $38 : (__lastLabel__ == 11 ? $41 : (__lastLabel__ == 16 ? $55 : ($43))))))))))))));
        var $99=($98)==-3; //@line 476 "_hotshot.c"
        if ($99) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 476 "_hotshot.c"
      case 31: // $bb33
        var $100=HEAP[_PyExc_ValueError]; //@line 477 "_hotshot.c"
        _PyErr_SetString($100, __str3); //@line 477 "_hotshot.c"
        __label__ = 43; break; //@line 477 "_hotshot.c"
      case 32: // $bb34
        var $_pr3=$err;
        var $101=($_pr3)==-1; //@line 480 "_hotshot.c"
        if ($101) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 480 "_hotshot.c"
      case 33: // $bb35
        var $102=$self_addr; //@line 481 "_hotshot.c"
        _eof_error($102); //@line 481 "_hotshot.c"
        __label__ = 43; break; //@line 481 "_hotshot.c"
      case 34: // $bb36
        var $103=$err; //@line 483 "_hotshot.c"
        var $104=($103)==0; //@line 483 "_hotshot.c"
        if ($104) { __label__ = 35; break; } else { __label__ = 43; break; } //@line 483 "_hotshot.c"
      case 35: // $bb37
        var $105=_PyTuple_New(4); //@line 484 "_hotshot.c"
        $result=$105; //@line 484 "_hotshot.c"
        var $106=$result; //@line 485 "_hotshot.c"
        var $107=($106)==0; //@line 485 "_hotshot.c"
        if ($107) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 485 "_hotshot.c"
      case 36: // $bb38
        $0=0; //@line 486 "_hotshot.c"
        __label__ = 44; break; //@line 486 "_hotshot.c"
      case 37: // $bb39
        var $108=$result; //@line 487 "_hotshot.c"
        var $109=$108; //@line 487 "_hotshot.c"
        var $110=$what; //@line 487 "_hotshot.c"
        var $111=_PyInt_FromLong($110); //@line 487 "_hotshot.c"
        var $112=$109+12; //@line 487 "_hotshot.c"
        var $113=$112; //@line 487 "_hotshot.c"
        HEAP[$113]=$111; //@line 487 "_hotshot.c"
        var $114=$result; //@line 488 "_hotshot.c"
        var $115=$114; //@line 488 "_hotshot.c"
        var $116=HEAP[$fileno]; //@line 488 "_hotshot.c"
        var $117=_PyInt_FromLong($116); //@line 488 "_hotshot.c"
        var $118=$115+12; //@line 488 "_hotshot.c"
        var $119=$118+8; //@line 488 "_hotshot.c"
        HEAP[$119]=$117; //@line 488 "_hotshot.c"
        var $120=HEAP[$s1]; //@line 489 "_hotshot.c"
        var $121=($120)==0; //@line 489 "_hotshot.c"
        var $122=$result; //@line 490 "_hotshot.c"
        var $123=$122; //@line 490 "_hotshot.c"
        if ($121) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 489 "_hotshot.c"
      case 38: // $bb40
        var $124=HEAP[$tdelta]; //@line 490 "_hotshot.c"
        var $125=_PyInt_FromLong($124); //@line 490 "_hotshot.c"
        var $126=$123+12; //@line 490 "_hotshot.c"
        var $127=$126+4; //@line 490 "_hotshot.c"
        HEAP[$127]=$125; //@line 490 "_hotshot.c"
        __label__ = 40; break; //@line 490 "_hotshot.c"
      case 39: // $bb41
        var $128=HEAP[$s1]; //@line 492 "_hotshot.c"
        var $129=$123+12; //@line 492 "_hotshot.c"
        var $130=$129+4; //@line 492 "_hotshot.c"
        HEAP[$130]=$128; //@line 492 "_hotshot.c"
        __label__ = 40; break; //@line 492 "_hotshot.c"
      case 40: // $bb42
        var $131=$s2; //@line 493 "_hotshot.c"
        var $132=($131)==0; //@line 493 "_hotshot.c"
        var $133=$result; //@line 494 "_hotshot.c"
        var $134=$133; //@line 494 "_hotshot.c"
        if ($132) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 493 "_hotshot.c"
      case 41: // $bb43
        var $135=HEAP[$lineno]; //@line 494 "_hotshot.c"
        var $136=_PyInt_FromLong($135); //@line 494 "_hotshot.c"
        var $137=$134+12; //@line 494 "_hotshot.c"
        var $138=$137+12; //@line 494 "_hotshot.c"
        HEAP[$138]=$136; //@line 494 "_hotshot.c"
        __label__ = 43; break; //@line 494 "_hotshot.c"
      case 42: // $bb44
        var $139=$134+12; //@line 496 "_hotshot.c"
        var $140=$139+12; //@line 496 "_hotshot.c"
        var $141=$s2; //@line 496 "_hotshot.c"
        HEAP[$140]=$141; //@line 496 "_hotshot.c"
        __label__ = 43; break; //@line 496 "_hotshot.c"
      case 43: // $bb45
        var $142=$result; //@line 525 "_hotshot.c"
        $0=$142; //@line 525 "_hotshot.c"
        __label__ = 44; break; //@line 525 "_hotshot.c"
      case 44: // $bb46
        var $143=$0; //@line 403 "_hotshot.c"
        $retval=$143; //@line 403 "_hotshot.c"
        var $retval47=$retval; //@line 403 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval47; //@line 403 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _logreader_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 531 "_hotshot.c"
        var $1=$0+12; //@line 531 "_hotshot.c"
        var $2=HEAP[$1]; //@line 531 "_hotshot.c"
        var $3=($2)!=0; //@line 531 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 531 "_hotshot.c"
      case 1: // $bb
        var $4=$self_addr; //@line 532 "_hotshot.c"
        var $5=$4+12; //@line 532 "_hotshot.c"
        var $6=HEAP[$5]; //@line 532 "_hotshot.c"
        var $7=_fclose($6); //@line 532 "_hotshot.c"
        var $8=$self_addr; //@line 533 "_hotshot.c"
        var $9=$8+12; //@line 533 "_hotshot.c"
        HEAP[$9]=0; //@line 533 "_hotshot.c"
        __label__ = 2; break; //@line 533 "_hotshot.c"
      case 2: // $bb1
        var $10=$self_addr; //@line 535 "_hotshot.c"
        var $11=$10+8; //@line 535 "_hotshot.c"
        var $12=HEAP[$11]; //@line 535 "_hotshot.c"
        var $13=($12)!=0; //@line 535 "_hotshot.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 535 "_hotshot.c"
      case 3: // $bb2
        var $14=$self_addr; //@line 535 "_hotshot.c"
        var $15=$14+8; //@line 535 "_hotshot.c"
        var $16=HEAP[$15]; //@line 535 "_hotshot.c"
        var $17=$16; //@line 535 "_hotshot.c"
        var $18=HEAP[$17]; //@line 535 "_hotshot.c"
        var $19=($18) - 1; //@line 535 "_hotshot.c"
        var $20=$16; //@line 535 "_hotshot.c"
        HEAP[$20]=$19; //@line 535 "_hotshot.c"
        var $21=$16; //@line 535 "_hotshot.c"
        var $22=HEAP[$21]; //@line 535 "_hotshot.c"
        var $23=($22)==0; //@line 535 "_hotshot.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 535 "_hotshot.c"
      case 4: // $bb3
        var $24=$self_addr; //@line 535 "_hotshot.c"
        var $25=$24+8; //@line 535 "_hotshot.c"
        var $26=HEAP[$25]; //@line 535 "_hotshot.c"
        var $27=$26+4; //@line 535 "_hotshot.c"
        var $28=HEAP[$27]; //@line 535 "_hotshot.c"
        var $29=$28+24; //@line 535 "_hotshot.c"
        var $30=HEAP[$29]; //@line 535 "_hotshot.c"
        var $31=$self_addr; //@line 535 "_hotshot.c"
        var $32=$31+8; //@line 535 "_hotshot.c"
        var $33=HEAP[$32]; //@line 535 "_hotshot.c"
        FUNCTION_TABLE[$30]($33); //@line 535 "_hotshot.c"
        __label__ = 5; break; //@line 535 "_hotshot.c"
      case 5: // $bb4
        var $34=$self_addr; //@line 536 "_hotshot.c"
        var $35=$34; //@line 536 "_hotshot.c"
        _PyObject_Free($35); //@line 536 "_hotshot.c"
        ;
        return; //@line 537 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _logreader_sq_item($self, $index) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $index_addr;
        var $retval;
        var $0;
        var $result;
        $self_addr=$self;
        $index_addr=$index;
        var $1=$self_addr; //@line 542 "_hotshot.c"
        var $2=_logreader_tp_iternext($1); //@line 542 "_hotshot.c"
        $result=$2; //@line 542 "_hotshot.c"
        var $3=$result; //@line 543 "_hotshot.c"
        var $4=($3)==0; //@line 543 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 543 "_hotshot.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 543 "_hotshot.c"
        var $6=($5)==0; //@line 543 "_hotshot.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 543 "_hotshot.c"
      case 2: // $bb1
        var $7=HEAP[_PyExc_IndexError]; //@line 544 "_hotshot.c"
        _PyErr_SetString($7, __str4); //@line 544 "_hotshot.c"
        $0=0; //@line 545 "_hotshot.c"
        __label__ = 4; break; //@line 545 "_hotshot.c"
      case 3: // $bb2
        var $8=$result; //@line 547 "_hotshot.c"
        $0=$8; //@line 547 "_hotshot.c"
        __label__ = 4; break; //@line 547 "_hotshot.c"
      case 4: // $bb3
        var $9=$0; //@line 545 "_hotshot.c"
        $retval=$9; //@line 545 "_hotshot.c"
        var $retval4=$retval; //@line 545 "_hotshot.c"
        ;
        return $retval4; //@line 545 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _flush_data($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $written;
        var $s;
        var $s6;
        $self_addr=$self;
        var $1=$self_addr; //@line 557 "_hotshot.c"
        var $2=$1+10260; //@line 557 "_hotshot.c"
        var $3=HEAP[$2]; //@line 557 "_hotshot.c"
        var $4=$self_addr; //@line 557 "_hotshot.c"
        var $5=$4+16; //@line 557 "_hotshot.c"
        var $6=HEAP[$5]; //@line 557 "_hotshot.c"
        var $7=$self_addr; //@line 557 "_hotshot.c"
        var $8=$7+20; //@line 557 "_hotshot.c"
        var $9=$8; //@line 557 "_hotshot.c"
        var $10=_fwrite($9, 1, $6, $3); //@line 557 "_hotshot.c"
        $written=$10; //@line 557 "_hotshot.c"
        var $11=$self_addr; //@line 558 "_hotshot.c"
        var $12=$11+16; //@line 558 "_hotshot.c"
        var $13=HEAP[$12]; //@line 558 "_hotshot.c"
        var $14=$written; //@line 558 "_hotshot.c"
        var $15=($13)==($14); //@line 558 "_hotshot.c"
        var $16=$self_addr; //@line 559 "_hotshot.c"
        var $17=$16+16; //@line 559 "_hotshot.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 558 "_hotshot.c"
      case 1: // $bb1
        var $18=HEAP[$17]; //@line 561 "_hotshot.c"
        var $19=$written; //@line 561 "_hotshot.c"
        var $20=($18) - ($19); //@line 561 "_hotshot.c"
        var $21=$written; //@line 561 "_hotshot.c"
        var $22=$self_addr; //@line 561 "_hotshot.c"
        var $23=$22+20; //@line 561 "_hotshot.c"
        var $24=$23+$21; //@line 561 "_hotshot.c"
        var $25=$self_addr; //@line 561 "_hotshot.c"
        var $26=$25+20; //@line 561 "_hotshot.c"
        var $27=$26; //@line 561 "_hotshot.c"
        _llvm_memmove_p0i8_p0i8_i32($27, $24, $20, 1, 0); //@line 561 "_hotshot.c"
        var $28=$self_addr; //@line 563 "_hotshot.c"
        var $29=$28+16; //@line 563 "_hotshot.c"
        var $30=HEAP[$29]; //@line 563 "_hotshot.c"
        var $31=$written; //@line 563 "_hotshot.c"
        var $32=($30) - ($31); //@line 563 "_hotshot.c"
        var $33=$self_addr; //@line 563 "_hotshot.c"
        var $34=$33+16; //@line 563 "_hotshot.c"
        HEAP[$34]=$32; //@line 563 "_hotshot.c"
        var $35=$written; //@line 564 "_hotshot.c"
        var $36=($35)==0; //@line 564 "_hotshot.c"
        if ($36) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 564 "_hotshot.c"
      case 2: // $bb2
        var $37=$self_addr; //@line 565 "_hotshot.c"
        var $38=$37+12; //@line 565 "_hotshot.c"
        var $39=HEAP[$38]; //@line 565 "_hotshot.c"
        var $40=_PyString_AsString($39); //@line 565 "_hotshot.c"
        $s=$40; //@line 565 "_hotshot.c"
        var $41=HEAP[_PyExc_IOError]; //@line 566 "_hotshot.c"
        var $42=$s; //@line 566 "_hotshot.c"
        var $43=_PyErr_SetFromErrnoWithFilename($41, $42); //@line 566 "_hotshot.c"
        var $44=$self_addr; //@line 567 "_hotshot.c"
        _do_stop($44); //@line 567 "_hotshot.c"
        $0=-1; //@line 568 "_hotshot.c"
        __label__ = 7; break; //@line 568 "_hotshot.c"
      case 3: // $bb3
        HEAP[$17]=0; //@line 559 "_hotshot.c"
        var $_pr=$written;
        var $45=($_pr)!=0; //@line 571 "_hotshot.c"
        if ($45) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 571 "_hotshot.c"
      case 4: // $bb4
        var $46=$self_addr; //@line 572 "_hotshot.c"
        var $47=$46+10260; //@line 572 "_hotshot.c"
        var $48=HEAP[$47]; //@line 572 "_hotshot.c"
        var $49=_fflush($48); //@line 572 "_hotshot.c"
        var $50=($49)!=0; //@line 572 "_hotshot.c"
        if ($50) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 572 "_hotshot.c"
      case 5: // $bb5
        var $51=$self_addr; //@line 573 "_hotshot.c"
        var $52=$51+12; //@line 573 "_hotshot.c"
        var $53=HEAP[$52]; //@line 573 "_hotshot.c"
        var $54=_PyString_AsString($53); //@line 573 "_hotshot.c"
        $s6=$54; //@line 573 "_hotshot.c"
        var $55=HEAP[_PyExc_IOError]; //@line 574 "_hotshot.c"
        var $56=$s6; //@line 574 "_hotshot.c"
        var $57=_PyErr_SetFromErrnoWithFilename($55, $56); //@line 574 "_hotshot.c"
        var $58=$self_addr; //@line 575 "_hotshot.c"
        _do_stop($58); //@line 575 "_hotshot.c"
        $0=-1; //@line 576 "_hotshot.c"
        __label__ = 7; break; //@line 576 "_hotshot.c"
      case 6: // $bb7
        $0=0; //@line 579 "_hotshot.c"
        __label__ = 7; break; //@line 579 "_hotshot.c"
      case 7: // $bb8
        var $59=$0; //@line 568 "_hotshot.c"
        $retval=$59; //@line 568 "_hotshot.c"
        var $retval9=$retval; //@line 568 "_hotshot.c"
        ;
        return $retval9; //@line 568 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_string($self, $s, $len) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $s_addr;
        var $len_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $s_addr=$s;
        $len_addr=$len;
        var $1=$self_addr; //@line 626 "_hotshot.c"
        var $2=$1+16; //@line 626 "_hotshot.c"
        var $3=HEAP[$2]; //@line 626 "_hotshot.c"
        var $4=$len_addr; //@line 626 "_hotshot.c"
        var $5=($3) + 5; //@line 626 "_hotshot.c"
        var $6=($5) + ($4); //@line 626 "_hotshot.c"
        var $7=($6) > 10239; //@line 626 "_hotshot.c"
        if ($7) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 4; break; } //@line 626 "_hotshot.c"
      case 1: // $bb
        var $8=$self_addr; //@line 627 "_hotshot.c"
        var $9=_flush_data($8); //@line 627 "_hotshot.c"
        var $10=($9) < 0; //@line 627 "_hotshot.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 627 "_hotshot.c"
      case 2: // $bb1
        $0=-1; //@line 628 "_hotshot.c"
        __label__ = 9; break; //@line 628 "_hotshot.c"
      case 3: // $bb2thread_pre_split
        var $_pr=$len_addr;
        __lastLabel__ = 3; __label__ = 4; break;
      case 4: // $bb2
        var $11=__lastLabel__ == 3 ? $_pr : ($4);
        var $12=($11)==2147483647; //@line 630 "_hotshot.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 630 "_hotshot.c"
      case 5: // $bb3
        ___assert_fail(__str5, __str6, 630, ___PRETTY_FUNCTION___8917); //@line 630 "_hotshot.c"
        throw "Reached an unreachable!" //@line 630 "_hotshot.c"
      case 6: // $bb4
        var $13=$self_addr; //@line 631 "_hotshot.c"
        var $14=$len_addr; //@line 631 "_hotshot.c"
        var $15=_pack_packed_int($13, $14); //@line 631 "_hotshot.c"
        var $16=($15) < 0; //@line 631 "_hotshot.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 631 "_hotshot.c"
      case 7: // $bb5
        $0=-1; //@line 632 "_hotshot.c"
        __label__ = 9; break; //@line 632 "_hotshot.c"
      case 8: // $bb6
        var $17=$len_addr; //@line 633 "_hotshot.c"
        var $18=$self_addr; //@line 633 "_hotshot.c"
        var $19=$18+20; //@line 633 "_hotshot.c"
        var $20=$19; //@line 633 "_hotshot.c"
        var $21=$self_addr; //@line 633 "_hotshot.c"
        var $22=$21+16; //@line 633 "_hotshot.c"
        var $23=HEAP[$22]; //@line 633 "_hotshot.c"
        var $24=$20+$23; //@line 633 "_hotshot.c"
        var $25=$s_addr; //@line 633 "_hotshot.c"
        _llvm_memcpy_p0i8_p0i8_i32($24, $25, $17, 1, 0); //@line 633 "_hotshot.c"
        var $26=$self_addr; //@line 634 "_hotshot.c"
        var $27=$26+16; //@line 634 "_hotshot.c"
        var $28=HEAP[$27]; //@line 634 "_hotshot.c"
        var $29=$len_addr; //@line 634 "_hotshot.c"
        var $30=($29) + ($28); //@line 634 "_hotshot.c"
        var $31=$self_addr; //@line 634 "_hotshot.c"
        var $32=$31+16; //@line 634 "_hotshot.c"
        HEAP[$32]=$30; //@line 634 "_hotshot.c"
        $0=0; //@line 635 "_hotshot.c"
        __label__ = 9; break; //@line 635 "_hotshot.c"
      case 9: // $bb7
        var $33=$0; //@line 628 "_hotshot.c"
        $retval=$33; //@line 628 "_hotshot.c"
        var $retval8=$retval; //@line 628 "_hotshot.c"
        ;
        return $retval8; //@line 628 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_packed_int($self, $value) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $value_addr;
        var $retval;
        var $0;
        var $partial;
        $self_addr=$self;
        $value_addr=$value;
        __label__ = 1; break; //@line 584 "_hotshot.c"
      case 1: // $bb
        var $1=$value_addr; //@line 588 "_hotshot.c"
        var $2=((($1)) & 255); //@line 588 "_hotshot.c"
        var $3=($2) & 127; //@line 588 "_hotshot.c"
        $partial=$3; //@line 588 "_hotshot.c"
        var $4=$value_addr; //@line 589 "_hotshot.c"
        var $5=($4) >> 7; //@line 589 "_hotshot.c"
        $value_addr=$5; //@line 589 "_hotshot.c"
        var $6=($5)!=0; //@line 590 "_hotshot.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 590 "_hotshot.c"
      case 2: // $bb1
        var $7=$partial; //@line 591 "_hotshot.c"
        var $8=($7) | -128; //@line 591 "_hotshot.c"
        $partial=$8; //@line 591 "_hotshot.c"
        __label__ = 3; break; //@line 591 "_hotshot.c"
      case 3: // $bb2
        var $9=$self_addr; //@line 592 "_hotshot.c"
        var $10=$9+16; //@line 592 "_hotshot.c"
        var $11=HEAP[$10]; //@line 592 "_hotshot.c"
        var $12=$self_addr; //@line 592 "_hotshot.c"
        var $13=$12+20; //@line 592 "_hotshot.c"
        var $14=$13+$11; //@line 592 "_hotshot.c"
        var $15=$partial; //@line 592 "_hotshot.c"
        HEAP[$14]=$15; //@line 592 "_hotshot.c"
        var $16=$self_addr; //@line 593 "_hotshot.c"
        var $17=$16+16; //@line 593 "_hotshot.c"
        var $18=HEAP[$17]; //@line 593 "_hotshot.c"
        var $19=($18) + 1; //@line 593 "_hotshot.c"
        var $20=$self_addr; //@line 593 "_hotshot.c"
        var $21=$20+16; //@line 593 "_hotshot.c"
        HEAP[$21]=$19; //@line 593 "_hotshot.c"
        var $22=$value_addr; //@line 594 "_hotshot.c"
        var $23=($22)!=0; //@line 594 "_hotshot.c"
        if ($23) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 594 "_hotshot.c"
      case 4: // $bb3
        $0=0; //@line 595 "_hotshot.c"
        var $24=$0; //@line 595 "_hotshot.c"
        $retval=$24; //@line 595 "_hotshot.c"
        var $retval4=$retval; //@line 595 "_hotshot.c"
        ;
        return $retval4; //@line 595 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_add_info($self, $s1, $s2) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $s1_addr;
        var $s2_addr;
        var $retval;
        var $0;
        var $len1;
        var $len2;
        $self_addr=$self;
        $s1_addr=$s1;
        $s2_addr=$s2;
        var $1=$s1_addr; //@line 641 "_hotshot.c"
        var $2=_strlen($1); //@line 641 "_hotshot.c"
        $len1=$2; //@line 641 "_hotshot.c"
        var $3=$s2_addr; //@line 642 "_hotshot.c"
        var $4=_strlen($3); //@line 642 "_hotshot.c"
        $len2=$4; //@line 642 "_hotshot.c"
        var $5=$len1; //@line 644 "_hotshot.c"
        var $6=$len2; //@line 644 "_hotshot.c"
        var $7=$self_addr; //@line 644 "_hotshot.c"
        var $8=$7+16; //@line 644 "_hotshot.c"
        var $9=HEAP[$8]; //@line 644 "_hotshot.c"
        var $10=($5) + 11; //@line 644 "_hotshot.c"
        var $11=($10) + ($6); //@line 644 "_hotshot.c"
        var $12=($11) + ($9); //@line 644 "_hotshot.c"
        var $13=($12) > 10239; //@line 644 "_hotshot.c"
        if ($13) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 644 "_hotshot.c"
      case 1: // $bb
        var $14=$self_addr; //@line 645 "_hotshot.c"
        var $15=_flush_data($14); //@line 645 "_hotshot.c"
        var $16=($15) < 0; //@line 645 "_hotshot.c"
        if ($16) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 645 "_hotshot.c"
      case 2: // $bb1
        $0=-1; //@line 646 "_hotshot.c"
        __label__ = 6; break; //@line 646 "_hotshot.c"
      case 3: // $bb2
        var $17=$self_addr; //@line 648 "_hotshot.c"
        var $18=$17+16; //@line 648 "_hotshot.c"
        var $19=HEAP[$18]; //@line 648 "_hotshot.c"
        var $20=$self_addr; //@line 648 "_hotshot.c"
        var $21=$20+20; //@line 648 "_hotshot.c"
        var $22=$21+$19; //@line 648 "_hotshot.c"
        HEAP[$22]=19; //@line 648 "_hotshot.c"
        var $23=$self_addr; //@line 649 "_hotshot.c"
        var $24=$23+16; //@line 649 "_hotshot.c"
        var $25=HEAP[$24]; //@line 649 "_hotshot.c"
        var $26=($25) + 1; //@line 649 "_hotshot.c"
        var $27=$self_addr; //@line 649 "_hotshot.c"
        var $28=$27+16; //@line 649 "_hotshot.c"
        HEAP[$28]=$26; //@line 649 "_hotshot.c"
        var $29=$self_addr; //@line 650 "_hotshot.c"
        var $30=$s1_addr; //@line 650 "_hotshot.c"
        var $31=$len1; //@line 650 "_hotshot.c"
        var $32=_pack_string($29, $30, $31); //@line 650 "_hotshot.c"
        var $33=($32) < 0; //@line 650 "_hotshot.c"
        if ($33) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 650 "_hotshot.c"
      case 4: // $bb3
        $0=-1; //@line 651 "_hotshot.c"
        __label__ = 6; break; //@line 651 "_hotshot.c"
      case 5: // $bb4
        var $34=$self_addr; //@line 652 "_hotshot.c"
        var $35=$s2_addr; //@line 652 "_hotshot.c"
        var $36=$len2; //@line 652 "_hotshot.c"
        var $37=_pack_string($34, $35, $36); //@line 652 "_hotshot.c"
        $0=$37; //@line 652 "_hotshot.c"
        __label__ = 6; break; //@line 652 "_hotshot.c"
      case 6: // $bb5
        var $38=$0; //@line 646 "_hotshot.c"
        $retval=$38; //@line 646 "_hotshot.c"
        var $retval6=$retval; //@line 646 "_hotshot.c"
        ;
        return $retval6; //@line 646 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_define_file($self, $fileno, $filename) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $fileno_addr;
        var $filename_addr;
        var $retval;
        var $0;
        var $len;
        $self_addr=$self;
        $fileno_addr=$fileno;
        $filename_addr=$filename;
        var $1=$filename_addr; //@line 658 "_hotshot.c"
        var $2=_strlen($1); //@line 658 "_hotshot.c"
        $len=$2; //@line 658 "_hotshot.c"
        var $3=$self_addr; //@line 660 "_hotshot.c"
        var $4=$3+16; //@line 660 "_hotshot.c"
        var $5=HEAP[$4]; //@line 660 "_hotshot.c"
        var $6=$len; //@line 660 "_hotshot.c"
        var $7=($5) + 11; //@line 660 "_hotshot.c"
        var $8=($7) + ($6); //@line 660 "_hotshot.c"
        var $9=($8) > 10239; //@line 660 "_hotshot.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 660 "_hotshot.c"
      case 1: // $bb
        var $10=$self_addr; //@line 661 "_hotshot.c"
        var $11=_flush_data($10); //@line 661 "_hotshot.c"
        var $12=($11) < 0; //@line 661 "_hotshot.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 661 "_hotshot.c"
      case 2: // $bb1
        $0=-1; //@line 662 "_hotshot.c"
        __label__ = 6; break; //@line 662 "_hotshot.c"
      case 3: // $bb2
        var $13=$self_addr; //@line 664 "_hotshot.c"
        var $14=$13+16; //@line 664 "_hotshot.c"
        var $15=HEAP[$14]; //@line 664 "_hotshot.c"
        var $16=$self_addr; //@line 664 "_hotshot.c"
        var $17=$16+20; //@line 664 "_hotshot.c"
        var $18=$17+$15; //@line 664 "_hotshot.c"
        HEAP[$18]=35; //@line 664 "_hotshot.c"
        var $19=$self_addr; //@line 665 "_hotshot.c"
        var $20=$19+16; //@line 665 "_hotshot.c"
        var $21=HEAP[$20]; //@line 665 "_hotshot.c"
        var $22=($21) + 1; //@line 665 "_hotshot.c"
        var $23=$self_addr; //@line 665 "_hotshot.c"
        var $24=$23+16; //@line 665 "_hotshot.c"
        HEAP[$24]=$22; //@line 665 "_hotshot.c"
        var $25=$self_addr; //@line 666 "_hotshot.c"
        var $26=$fileno_addr; //@line 666 "_hotshot.c"
        var $27=_pack_packed_int($25, $26); //@line 666 "_hotshot.c"
        var $28=($27) < 0; //@line 666 "_hotshot.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 666 "_hotshot.c"
      case 4: // $bb3
        $0=-1; //@line 667 "_hotshot.c"
        __label__ = 6; break; //@line 667 "_hotshot.c"
      case 5: // $bb4
        var $29=$self_addr; //@line 668 "_hotshot.c"
        var $30=$filename_addr; //@line 668 "_hotshot.c"
        var $31=$len; //@line 668 "_hotshot.c"
        var $32=_pack_string($29, $30, $31); //@line 668 "_hotshot.c"
        $0=$32; //@line 668 "_hotshot.c"
        __label__ = 6; break; //@line 668 "_hotshot.c"
      case 6: // $bb5
        var $33=$0; //@line 662 "_hotshot.c"
        $retval=$33; //@line 662 "_hotshot.c"
        var $retval6=$retval; //@line 662 "_hotshot.c"
        ;
        return $retval6; //@line 662 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_define_func($self, $fileno, $lineno, $funcname) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $fileno_addr;
        var $lineno_addr;
        var $funcname_addr;
        var $retval;
        var $0;
        var $len;
        $self_addr=$self;
        $fileno_addr=$fileno;
        $lineno_addr=$lineno;
        $funcname_addr=$funcname;
        var $1=$funcname_addr; //@line 675 "_hotshot.c"
        var $2=_strlen($1); //@line 675 "_hotshot.c"
        $len=$2; //@line 675 "_hotshot.c"
        var $3=$self_addr; //@line 677 "_hotshot.c"
        var $4=$3+16; //@line 677 "_hotshot.c"
        var $5=HEAP[$4]; //@line 677 "_hotshot.c"
        var $6=$len; //@line 677 "_hotshot.c"
        var $7=($5) + 16; //@line 677 "_hotshot.c"
        var $8=($7) + ($6); //@line 677 "_hotshot.c"
        var $9=($8) > 10239; //@line 677 "_hotshot.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 677 "_hotshot.c"
      case 1: // $bb
        var $10=$self_addr; //@line 678 "_hotshot.c"
        var $11=_flush_data($10); //@line 678 "_hotshot.c"
        var $12=($11) < 0; //@line 678 "_hotshot.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 678 "_hotshot.c"
      case 2: // $bb1
        $0=-1; //@line 679 "_hotshot.c"
        __label__ = 8; break; //@line 679 "_hotshot.c"
      case 3: // $bb2
        var $13=$self_addr; //@line 681 "_hotshot.c"
        var $14=$13+16; //@line 681 "_hotshot.c"
        var $15=HEAP[$14]; //@line 681 "_hotshot.c"
        var $16=$self_addr; //@line 681 "_hotshot.c"
        var $17=$16+20; //@line 681 "_hotshot.c"
        var $18=$17+$15; //@line 681 "_hotshot.c"
        HEAP[$18]=67; //@line 681 "_hotshot.c"
        var $19=$self_addr; //@line 682 "_hotshot.c"
        var $20=$19+16; //@line 682 "_hotshot.c"
        var $21=HEAP[$20]; //@line 682 "_hotshot.c"
        var $22=($21) + 1; //@line 682 "_hotshot.c"
        var $23=$self_addr; //@line 682 "_hotshot.c"
        var $24=$23+16; //@line 682 "_hotshot.c"
        HEAP[$24]=$22; //@line 682 "_hotshot.c"
        var $25=$self_addr; //@line 683 "_hotshot.c"
        var $26=$fileno_addr; //@line 683 "_hotshot.c"
        var $27=_pack_packed_int($25, $26); //@line 683 "_hotshot.c"
        var $28=($27) < 0; //@line 683 "_hotshot.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 683 "_hotshot.c"
      case 4: // $bb3
        $0=-1; //@line 684 "_hotshot.c"
        __label__ = 8; break; //@line 684 "_hotshot.c"
      case 5: // $bb4
        var $29=$self_addr; //@line 685 "_hotshot.c"
        var $30=$lineno_addr; //@line 685 "_hotshot.c"
        var $31=_pack_packed_int($29, $30); //@line 685 "_hotshot.c"
        var $32=($31) < 0; //@line 685 "_hotshot.c"
        if ($32) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 685 "_hotshot.c"
      case 6: // $bb5
        $0=-1; //@line 686 "_hotshot.c"
        __label__ = 8; break; //@line 686 "_hotshot.c"
      case 7: // $bb6
        var $33=$self_addr; //@line 687 "_hotshot.c"
        var $34=$funcname_addr; //@line 687 "_hotshot.c"
        var $35=$len; //@line 687 "_hotshot.c"
        var $36=_pack_string($33, $34, $35); //@line 687 "_hotshot.c"
        $0=$36; //@line 687 "_hotshot.c"
        __label__ = 8; break; //@line 687 "_hotshot.c"
      case 8: // $bb7
        var $37=$0; //@line 679 "_hotshot.c"
        $retval=$37; //@line 679 "_hotshot.c"
        var $retval8=$retval; //@line 679 "_hotshot.c"
        ;
        return $retval8; //@line 679 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_line_times($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 693 "_hotshot.c"
        var $2=$1+16; //@line 693 "_hotshot.c"
        var $3=HEAP[$2]; //@line 693 "_hotshot.c"
        var $4=($3) + 2; //@line 693 "_hotshot.c"
        var $5=($4) > 10239; //@line 693 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 693 "_hotshot.c"
      case 1: // $bb
        var $6=$self_addr; //@line 694 "_hotshot.c"
        var $7=_flush_data($6); //@line 694 "_hotshot.c"
        var $8=($7) < 0; //@line 694 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 694 "_hotshot.c"
      case 2: // $bb1
        $0=-1; //@line 695 "_hotshot.c"
        __label__ = 4; break; //@line 695 "_hotshot.c"
      case 3: // $bb2
        var $9=$self_addr; //@line 697 "_hotshot.c"
        var $10=$9+16; //@line 697 "_hotshot.c"
        var $11=HEAP[$10]; //@line 697 "_hotshot.c"
        var $12=$self_addr; //@line 697 "_hotshot.c"
        var $13=$12+20; //@line 697 "_hotshot.c"
        var $14=$13+$11; //@line 697 "_hotshot.c"
        HEAP[$14]=51; //@line 697 "_hotshot.c"
        var $15=$self_addr; //@line 698 "_hotshot.c"
        var $16=$15+16; //@line 698 "_hotshot.c"
        var $17=HEAP[$16]; //@line 698 "_hotshot.c"
        var $18=($17) + 1; //@line 698 "_hotshot.c"
        var $19=$self_addr; //@line 698 "_hotshot.c"
        var $20=$19+10268; //@line 698 "_hotshot.c"
        var $21=HEAP[$20]; //@line 698 "_hotshot.c"
        var $22=($21)!=0; //@line 698 "_hotshot.c"
        var $23=($22); //@line 698 "_hotshot.c"
        var $24=$self_addr; //@line 698 "_hotshot.c"
        var $25=$24+20; //@line 698 "_hotshot.c"
        var $26=$25+$18; //@line 698 "_hotshot.c"
        HEAP[$26]=$23; //@line 698 "_hotshot.c"
        var $27=$self_addr; //@line 699 "_hotshot.c"
        var $28=$27+16; //@line 699 "_hotshot.c"
        var $29=HEAP[$28]; //@line 699 "_hotshot.c"
        var $30=($29) + 2; //@line 699 "_hotshot.c"
        var $31=$self_addr; //@line 699 "_hotshot.c"
        var $32=$31+16; //@line 699 "_hotshot.c"
        HEAP[$32]=$30; //@line 699 "_hotshot.c"
        $0=0; //@line 700 "_hotshot.c"
        __label__ = 4; break; //@line 700 "_hotshot.c"
      case 4: // $bb3
        ;
        return;
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_frame_times($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 706 "_hotshot.c"
        var $2=$1+16; //@line 706 "_hotshot.c"
        var $3=HEAP[$2]; //@line 706 "_hotshot.c"
        var $4=($3) + 2; //@line 706 "_hotshot.c"
        var $5=($4) > 10239; //@line 706 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 706 "_hotshot.c"
      case 1: // $bb
        var $6=$self_addr; //@line 707 "_hotshot.c"
        var $7=_flush_data($6); //@line 707 "_hotshot.c"
        var $8=($7) < 0; //@line 707 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 707 "_hotshot.c"
      case 2: // $bb1
        $0=-1; //@line 708 "_hotshot.c"
        __label__ = 4; break; //@line 708 "_hotshot.c"
      case 3: // $bb2
        var $9=$self_addr; //@line 710 "_hotshot.c"
        var $10=$9+16; //@line 710 "_hotshot.c"
        var $11=HEAP[$10]; //@line 710 "_hotshot.c"
        var $12=$self_addr; //@line 710 "_hotshot.c"
        var $13=$12+20; //@line 710 "_hotshot.c"
        var $14=$13+$11; //@line 710 "_hotshot.c"
        HEAP[$14]=83; //@line 710 "_hotshot.c"
        var $15=$self_addr; //@line 711 "_hotshot.c"
        var $16=$15+16; //@line 711 "_hotshot.c"
        var $17=HEAP[$16]; //@line 711 "_hotshot.c"
        var $18=($17) + 1; //@line 711 "_hotshot.c"
        var $19=$self_addr; //@line 711 "_hotshot.c"
        var $20=$19+10272; //@line 711 "_hotshot.c"
        var $21=HEAP[$20]; //@line 711 "_hotshot.c"
        var $22=($21)!=0; //@line 711 "_hotshot.c"
        var $23=($22); //@line 711 "_hotshot.c"
        var $24=$self_addr; //@line 711 "_hotshot.c"
        var $25=$24+20; //@line 711 "_hotshot.c"
        var $26=$25+$18; //@line 711 "_hotshot.c"
        HEAP[$26]=$23; //@line 711 "_hotshot.c"
        var $27=$self_addr; //@line 712 "_hotshot.c"
        var $28=$27+16; //@line 712 "_hotshot.c"
        var $29=HEAP[$28]; //@line 712 "_hotshot.c"
        var $30=($29) + 2; //@line 712 "_hotshot.c"
        var $31=$self_addr; //@line 712 "_hotshot.c"
        var $32=$31+16; //@line 712 "_hotshot.c"
        HEAP[$32]=$30; //@line 712 "_hotshot.c"
        $0=0; //@line 713 "_hotshot.c"
        __label__ = 4; break; //@line 713 "_hotshot.c"
      case 4: // $bb3
        ;
        return;
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _tracer_callback($self, $frame, $what, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $frame_addr;
        var $what_addr;
        var $arg_addr;
        var $retval;
        var $iftmp_44;
        var $0;
        var $fileno;
        $self_addr=$self;
        $frame_addr=$frame;
        $what_addr=$what;
        $arg_addr=$arg;
        var $1=$what_addr; //@line 864 "_hotshot.c"
        if ($1 == 0) {
          __label__ = 1; break;
        }
        else if ($1 == 2) {
          __label__ = 8; break;
        }
        else if ($1 == 3) {
          __label__ = 7; break;
        }
        else {
        __label__ = 11; break;
        }
        
      case 1: // $bb
        var $2=$frame_addr; //@line 866 "_hotshot.c"
        var $3=$2+16; //@line 866 "_hotshot.c"
        var $4=HEAP[$3]; //@line 866 "_hotshot.c"
        var $5=$self_addr; //@line 866 "_hotshot.c"
        var $6=_get_fileno($5, $4); //@line 866 "_hotshot.c"
        $fileno=$6; //@line 866 "_hotshot.c"
        var $7=$fileno; //@line 867 "_hotshot.c"
        var $8=($7) < 0; //@line 867 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 867 "_hotshot.c"
      case 2: // $bb1
        $0=-1; //@line 868 "_hotshot.c"
        __label__ = 12; break; //@line 868 "_hotshot.c"
      case 3: // $bb2
        var $9=$frame_addr; //@line 869 "_hotshot.c"
        var $10=$9+16; //@line 869 "_hotshot.c"
        var $11=HEAP[$10]; //@line 869 "_hotshot.c"
        var $12=$11+56; //@line 869 "_hotshot.c"
        var $13=HEAP[$12]; //@line 869 "_hotshot.c"
        var $14=$self_addr; //@line 869 "_hotshot.c"
        var $15=$14+10272; //@line 869 "_hotshot.c"
        var $16=HEAP[$15]; //@line 869 "_hotshot.c"
        var $17=($16)!=0; //@line 869 "_hotshot.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 869 "_hotshot.c"
      case 4: // $bb3
        var $18=$self_addr; //@line 869 "_hotshot.c"
        var $19=_get_tdelta($18); //@line 869 "_hotshot.c"
        $iftmp_44=$19; //@line 869 "_hotshot.c"
        __label__ = 6; break; //@line 869 "_hotshot.c"
      case 5: // $bb4
        $iftmp_44=-1; //@line 869 "_hotshot.c"
        __label__ = 6; break; //@line 869 "_hotshot.c"
      case 6: // $bb5
        var $20=$self_addr; //@line 869 "_hotshot.c"
        var $21=$fileno; //@line 869 "_hotshot.c"
        var $22=$iftmp_44; //@line 869 "_hotshot.c"
        var $23=_pack_enter($20, $21, $22, $13); //@line 869 "_hotshot.c"
        $0=$23; //@line 869 "_hotshot.c"
        __label__ = 12; break; //@line 869 "_hotshot.c"
      case 7: // $bb6
        var $24=$self_addr; //@line 874 "_hotshot.c"
        var $25=_get_tdelta($24); //@line 874 "_hotshot.c"
        var $26=$self_addr; //@line 874 "_hotshot.c"
        var $27=_pack_exit($26, $25); //@line 874 "_hotshot.c"
        $0=$27; //@line 874 "_hotshot.c"
        __label__ = 12; break; //@line 874 "_hotshot.c"
      case 8: // $bb7
        var $28=$self_addr; //@line 877 "_hotshot.c"
        var $29=$28+10268; //@line 877 "_hotshot.c"
        var $30=HEAP[$29]; //@line 877 "_hotshot.c"
        var $31=($30)!=0; //@line 877 "_hotshot.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 877 "_hotshot.c"
      case 9: // $bb8
        var $32=$self_addr; //@line 878 "_hotshot.c"
        var $33=_get_tdelta($32); //@line 878 "_hotshot.c"
        var $34=$frame_addr; //@line 878 "_hotshot.c"
        var $35=$34+64; //@line 878 "_hotshot.c"
        var $36=HEAP[$35]; //@line 878 "_hotshot.c"
        var $37=$self_addr; //@line 878 "_hotshot.c"
        var $38=_pack_lineno_tdelta($37, $36, $33); //@line 878 "_hotshot.c"
        $0=$38; //@line 878 "_hotshot.c"
        __label__ = 12; break; //@line 878 "_hotshot.c"
      case 10: // $bb9
        var $39=$frame_addr; //@line 881 "_hotshot.c"
        var $40=$39+64; //@line 881 "_hotshot.c"
        var $41=HEAP[$40]; //@line 881 "_hotshot.c"
        var $42=$self_addr; //@line 881 "_hotshot.c"
        var $43=_pack_lineno($42, $41); //@line 881 "_hotshot.c"
        $0=$43; //@line 881 "_hotshot.c"
        __label__ = 12; break; //@line 881 "_hotshot.c"
      case 11: // $bb10
        $0=0; //@line 887 "_hotshot.c"
        __label__ = 12; break; //@line 887 "_hotshot.c"
      case 12: // $bb11
        var $44=$0; //@line 868 "_hotshot.c"
        $retval=$44; //@line 868 "_hotshot.c"
        var $retval12=$retval; //@line 868 "_hotshot.c"
        ;
        return $retval12; //@line 868 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_fileno($self, $fcode) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $fcode_addr;
        var $retval;
        var $0;
        var $obj;
        var $dict;
        var $fileno;
        var $name;
        $self_addr=$self;
        $fcode_addr=$fcode;
        var $1=$fcode_addr; //@line 776 "_hotshot.c"
        var $2=$1+48; //@line 776 "_hotshot.c"
        var $3=HEAP[$2]; //@line 776 "_hotshot.c"
        var $4=$self_addr; //@line 776 "_hotshot.c"
        var $5=$4+8; //@line 776 "_hotshot.c"
        var $6=HEAP[$5]; //@line 776 "_hotshot.c"
        var $7=_PyDict_GetItem($6, $3); //@line 776 "_hotshot.c"
        $obj=$7; //@line 776 "_hotshot.c"
        var $8=$obj; //@line 777 "_hotshot.c"
        var $9=($8)==0; //@line 777 "_hotshot.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 13; break; } //@line 777 "_hotshot.c"
      case 1: // $bb
        var $10=_PyDict_New(); //@line 779 "_hotshot.c"
        $dict=$10; //@line 779 "_hotshot.c"
        var $11=$dict; //@line 780 "_hotshot.c"
        var $12=($11)==0; //@line 780 "_hotshot.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 780 "_hotshot.c"
      case 2: // $bb1
        $0=-1; //@line 781 "_hotshot.c"
        __label__ = 28; break; //@line 781 "_hotshot.c"
      case 3: // $bb2
        var $13=$self_addr; //@line 783 "_hotshot.c"
        var $14=$13+10280; //@line 783 "_hotshot.c"
        var $15=HEAP[$14]; //@line 783 "_hotshot.c"
        $fileno=$15; //@line 783 "_hotshot.c"
        var $16=$fileno; //@line 784 "_hotshot.c"
        var $17=$dict; //@line 784 "_hotshot.c"
        var $18=_Py_BuildValue(__str7, allocate([$16,0,0,0,$17,0,0,0], ["i32",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 784 "_hotshot.c"
        $obj=$18; //@line 784 "_hotshot.c"
        var $19=$obj; //@line 785 "_hotshot.c"
        var $20=($19)==0; //@line 785 "_hotshot.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 785 "_hotshot.c"
      case 4: // $bb3
        $0=-1; //@line 786 "_hotshot.c"
        __label__ = 28; break; //@line 786 "_hotshot.c"
      case 5: // $bb4
        var $21=$fcode_addr; //@line 788 "_hotshot.c"
        var $22=$21+48; //@line 788 "_hotshot.c"
        var $23=HEAP[$22]; //@line 788 "_hotshot.c"
        var $24=$self_addr; //@line 788 "_hotshot.c"
        var $25=$24+8; //@line 788 "_hotshot.c"
        var $26=HEAP[$25]; //@line 788 "_hotshot.c"
        var $27=$obj; //@line 788 "_hotshot.c"
        var $28=_PyDict_SetItem($26, $23, $27); //@line 788 "_hotshot.c"
        var $29=($28)!=0; //@line 788 "_hotshot.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 788 "_hotshot.c"
      case 6: // $bb5
        var $30=$obj; //@line 789 "_hotshot.c"
        var $31=$30; //@line 789 "_hotshot.c"
        var $32=HEAP[$31]; //@line 789 "_hotshot.c"
        var $33=($32) - 1; //@line 789 "_hotshot.c"
        var $34=$obj; //@line 789 "_hotshot.c"
        var $35=$34; //@line 789 "_hotshot.c"
        HEAP[$35]=$33; //@line 789 "_hotshot.c"
        var $36=$obj; //@line 789 "_hotshot.c"
        var $37=$36; //@line 789 "_hotshot.c"
        var $38=HEAP[$37]; //@line 789 "_hotshot.c"
        var $39=($38)==0; //@line 789 "_hotshot.c"
        if ($39) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 789 "_hotshot.c"
      case 7: // $bb6
        var $40=$obj; //@line 789 "_hotshot.c"
        var $41=$40+4; //@line 789 "_hotshot.c"
        var $42=HEAP[$41]; //@line 789 "_hotshot.c"
        var $43=$42+24; //@line 789 "_hotshot.c"
        var $44=HEAP[$43]; //@line 789 "_hotshot.c"
        var $45=$obj; //@line 789 "_hotshot.c"
        FUNCTION_TABLE[$44]($45); //@line 789 "_hotshot.c"
        __label__ = 8; break; //@line 789 "_hotshot.c"
      case 8: // $bb7
        $0=-1; //@line 790 "_hotshot.c"
        __label__ = 28; break; //@line 790 "_hotshot.c"
      case 9: // $bb8
        var $46=$self_addr; //@line 792 "_hotshot.c"
        var $47=$46+10280; //@line 792 "_hotshot.c"
        var $48=HEAP[$47]; //@line 792 "_hotshot.c"
        var $49=($48) + 1; //@line 792 "_hotshot.c"
        var $50=$self_addr; //@line 792 "_hotshot.c"
        var $51=$50+10280; //@line 792 "_hotshot.c"
        HEAP[$51]=$49; //@line 792 "_hotshot.c"
        var $52=$obj; //@line 793 "_hotshot.c"
        var $53=$52; //@line 793 "_hotshot.c"
        var $54=HEAP[$53]; //@line 793 "_hotshot.c"
        var $55=($54) - 1; //@line 793 "_hotshot.c"
        var $56=$obj; //@line 793 "_hotshot.c"
        var $57=$56; //@line 793 "_hotshot.c"
        HEAP[$57]=$55; //@line 793 "_hotshot.c"
        var $58=$obj; //@line 793 "_hotshot.c"
        var $59=$58; //@line 793 "_hotshot.c"
        var $60=HEAP[$59]; //@line 793 "_hotshot.c"
        var $61=($60)==0; //@line 793 "_hotshot.c"
        if ($61) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 793 "_hotshot.c"
      case 10: // $bb9
        var $62=$obj; //@line 793 "_hotshot.c"
        var $63=$62+4; //@line 793 "_hotshot.c"
        var $64=HEAP[$63]; //@line 793 "_hotshot.c"
        var $65=$64+24; //@line 793 "_hotshot.c"
        var $66=HEAP[$65]; //@line 793 "_hotshot.c"
        var $67=$obj; //@line 793 "_hotshot.c"
        FUNCTION_TABLE[$66]($67); //@line 793 "_hotshot.c"
        __label__ = 11; break; //@line 793 "_hotshot.c"
      case 11: // $bb10
        var $68=$fcode_addr; //@line 794 "_hotshot.c"
        var $69=$68+48; //@line 794 "_hotshot.c"
        var $70=HEAP[$69]; //@line 794 "_hotshot.c"
        var $71=$70; //@line 794 "_hotshot.c"
        var $72=$71+20; //@line 794 "_hotshot.c"
        var $73=$72; //@line 794 "_hotshot.c"
        var $74=$self_addr; //@line 794 "_hotshot.c"
        var $75=$fileno; //@line 794 "_hotshot.c"
        var $76=_pack_define_file($74, $75, $73); //@line 794 "_hotshot.c"
        var $77=($76) < 0; //@line 794 "_hotshot.c"
        if ($77) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 794 "_hotshot.c"
      case 12: // $bb11
        $0=-1; //@line 796 "_hotshot.c"
        __label__ = 28; break; //@line 796 "_hotshot.c"
      case 13: // $bb13
        var $78=$obj; //@line 800 "_hotshot.c"
        var $79=$78; //@line 800 "_hotshot.c"
        var $80=$79+12; //@line 800 "_hotshot.c"
        var $81=$80; //@line 800 "_hotshot.c"
        var $82=HEAP[$81]; //@line 800 "_hotshot.c"
        var $83=$82; //@line 800 "_hotshot.c"
        var $84=$83+8; //@line 800 "_hotshot.c"
        var $85=HEAP[$84]; //@line 800 "_hotshot.c"
        $fileno=$85; //@line 800 "_hotshot.c"
        var $86=$obj; //@line 801 "_hotshot.c"
        var $87=$86; //@line 801 "_hotshot.c"
        var $88=$87+12; //@line 801 "_hotshot.c"
        var $89=$88+4; //@line 801 "_hotshot.c"
        var $90=HEAP[$89]; //@line 801 "_hotshot.c"
        $dict=$90; //@line 801 "_hotshot.c"
        __label__ = 14; break; //@line 801 "_hotshot.c"
      case 14: // $bb14
        var $91=$fcode_addr; //@line 804 "_hotshot.c"
        var $92=$91+56; //@line 804 "_hotshot.c"
        var $93=HEAP[$92]; //@line 804 "_hotshot.c"
        var $94=_PyInt_FromLong($93); //@line 804 "_hotshot.c"
        $obj=$94; //@line 804 "_hotshot.c"
        var $95=($94)==0; //@line 805 "_hotshot.c"
        if ($95) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 805 "_hotshot.c"
      case 15: // $bb15
        _PyErr_Clear(); //@line 807 "_hotshot.c"
        __label__ = 27; break; //@line 807 "_hotshot.c"
      case 16: // $bb16
        var $96=$dict; //@line 810 "_hotshot.c"
        var $97=$obj; //@line 810 "_hotshot.c"
        var $98=_PyDict_GetItem($96, $97); //@line 810 "_hotshot.c"
        $name=$98; //@line 810 "_hotshot.c"
        var $99=$name; //@line 811 "_hotshot.c"
        var $100=($99)==0; //@line 811 "_hotshot.c"
        if ($100) { __label__ = 17; break; } else { __label__ = 25; break; } //@line 811 "_hotshot.c"
      case 17: // $bb17
        var $101=$fcode_addr; //@line 812 "_hotshot.c"
        var $102=$101+52; //@line 812 "_hotshot.c"
        var $103=HEAP[$102]; //@line 812 "_hotshot.c"
        var $104=$103; //@line 812 "_hotshot.c"
        var $105=$104+20; //@line 812 "_hotshot.c"
        var $106=$105; //@line 812 "_hotshot.c"
        var $107=$fcode_addr; //@line 812 "_hotshot.c"
        var $108=$107+56; //@line 812 "_hotshot.c"
        var $109=HEAP[$108]; //@line 812 "_hotshot.c"
        var $110=$self_addr; //@line 812 "_hotshot.c"
        var $111=$fileno; //@line 812 "_hotshot.c"
        var $112=_pack_define_func($110, $111, $109, $106); //@line 812 "_hotshot.c"
        var $113=($112) < 0; //@line 812 "_hotshot.c"
        if ($113) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 812 "_hotshot.c"
      case 18: // $bb18
        var $114=$obj; //@line 814 "_hotshot.c"
        var $115=$114; //@line 814 "_hotshot.c"
        var $116=HEAP[$115]; //@line 814 "_hotshot.c"
        var $117=($116) - 1; //@line 814 "_hotshot.c"
        var $118=$obj; //@line 814 "_hotshot.c"
        var $119=$118; //@line 814 "_hotshot.c"
        HEAP[$119]=$117; //@line 814 "_hotshot.c"
        var $120=$obj; //@line 814 "_hotshot.c"
        var $121=$120; //@line 814 "_hotshot.c"
        var $122=HEAP[$121]; //@line 814 "_hotshot.c"
        var $123=($122)==0; //@line 814 "_hotshot.c"
        if ($123) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 814 "_hotshot.c"
      case 19: // $bb19
        var $124=$obj; //@line 814 "_hotshot.c"
        var $125=$124+4; //@line 814 "_hotshot.c"
        var $126=HEAP[$125]; //@line 814 "_hotshot.c"
        var $127=$126+24; //@line 814 "_hotshot.c"
        var $128=HEAP[$127]; //@line 814 "_hotshot.c"
        var $129=$obj; //@line 814 "_hotshot.c"
        FUNCTION_TABLE[$128]($129); //@line 814 "_hotshot.c"
        __label__ = 20; break; //@line 814 "_hotshot.c"
      case 20: // $bb20
        $0=-1; //@line 815 "_hotshot.c"
        __label__ = 28; break; //@line 815 "_hotshot.c"
      case 21: // $bb21
        var $130=$fcode_addr; //@line 817 "_hotshot.c"
        var $131=$130+52; //@line 817 "_hotshot.c"
        var $132=HEAP[$131]; //@line 817 "_hotshot.c"
        var $133=$dict; //@line 817 "_hotshot.c"
        var $134=$obj; //@line 817 "_hotshot.c"
        var $135=_PyDict_SetItem($133, $134, $132); //@line 817 "_hotshot.c"
        var $136=($135)!=0; //@line 817 "_hotshot.c"
        if ($136) { __label__ = 22; break; } else { __label__ = 25; break; } //@line 817 "_hotshot.c"
      case 22: // $bb22
        var $137=$obj; //@line 818 "_hotshot.c"
        var $138=$137; //@line 818 "_hotshot.c"
        var $139=HEAP[$138]; //@line 818 "_hotshot.c"
        var $140=($139) - 1; //@line 818 "_hotshot.c"
        var $141=$obj; //@line 818 "_hotshot.c"
        var $142=$141; //@line 818 "_hotshot.c"
        HEAP[$142]=$140; //@line 818 "_hotshot.c"
        var $143=$obj; //@line 818 "_hotshot.c"
        var $144=$143; //@line 818 "_hotshot.c"
        var $145=HEAP[$144]; //@line 818 "_hotshot.c"
        var $146=($145)==0; //@line 818 "_hotshot.c"
        if ($146) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 818 "_hotshot.c"
      case 23: // $bb23
        var $147=$obj; //@line 818 "_hotshot.c"
        var $148=$147+4; //@line 818 "_hotshot.c"
        var $149=HEAP[$148]; //@line 818 "_hotshot.c"
        var $150=$149+24; //@line 818 "_hotshot.c"
        var $151=HEAP[$150]; //@line 818 "_hotshot.c"
        var $152=$obj; //@line 818 "_hotshot.c"
        FUNCTION_TABLE[$151]($152); //@line 818 "_hotshot.c"
        __label__ = 24; break; //@line 818 "_hotshot.c"
      case 24: // $bb24
        $0=-1; //@line 819 "_hotshot.c"
        __label__ = 28; break; //@line 819 "_hotshot.c"
      case 25: // $bb25
        var $153=$obj; //@line 822 "_hotshot.c"
        var $154=$153; //@line 822 "_hotshot.c"
        var $155=HEAP[$154]; //@line 822 "_hotshot.c"
        var $156=($155) - 1; //@line 822 "_hotshot.c"
        var $157=$obj; //@line 822 "_hotshot.c"
        var $158=$157; //@line 822 "_hotshot.c"
        HEAP[$158]=$156; //@line 822 "_hotshot.c"
        var $159=$obj; //@line 822 "_hotshot.c"
        var $160=$159; //@line 822 "_hotshot.c"
        var $161=HEAP[$160]; //@line 822 "_hotshot.c"
        var $162=($161)==0; //@line 822 "_hotshot.c"
        if ($162) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 822 "_hotshot.c"
      case 26: // $bb26
        var $163=$obj; //@line 822 "_hotshot.c"
        var $164=$163+4; //@line 822 "_hotshot.c"
        var $165=HEAP[$164]; //@line 822 "_hotshot.c"
        var $166=$165+24; //@line 822 "_hotshot.c"
        var $167=HEAP[$166]; //@line 822 "_hotshot.c"
        var $168=$obj; //@line 822 "_hotshot.c"
        FUNCTION_TABLE[$167]($168); //@line 822 "_hotshot.c"
        __label__ = 27; break; //@line 822 "_hotshot.c"
      case 27: // $bb27
        var $169=$fileno; //@line 824 "_hotshot.c"
        $0=$169; //@line 824 "_hotshot.c"
        __label__ = 28; break; //@line 824 "_hotshot.c"
      case 28: // $bb28
        var $170=$0; //@line 781 "_hotshot.c"
        $retval=$170; //@line 781 "_hotshot.c"
        var $retval29=$retval; //@line 781 "_hotshot.c"
        ;
        return $retval29; //@line 781 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_tdelta($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $tdelta;
        var $tv=__stackBase__;
        $self_addr=$self;
        var $1=_gettimeofday($tv, 0); //@line 841 "_hotshot.c"
        var $2=$tv+4; //@line 843 "_hotshot.c"
        var $3=HEAP[$2]; //@line 843 "_hotshot.c"
        var $4=$self_addr; //@line 843 "_hotshot.c"
        var $5=$4+10284; //@line 843 "_hotshot.c"
        var $6=$5+4; //@line 843 "_hotshot.c"
        var $7=HEAP[$6]; //@line 843 "_hotshot.c"
        var $8=($3) - ($7); //@line 843 "_hotshot.c"
        $tdelta=$8; //@line 843 "_hotshot.c"
        var $9=$tv; //@line 844 "_hotshot.c"
        var $10=HEAP[$9]; //@line 844 "_hotshot.c"
        var $11=$self_addr; //@line 844 "_hotshot.c"
        var $12=$11+10284; //@line 844 "_hotshot.c"
        var $13=$12; //@line 844 "_hotshot.c"
        var $14=HEAP[$13]; //@line 844 "_hotshot.c"
        var $15=($10)!=($14); //@line 844 "_hotshot.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 844 "_hotshot.c"
      case 1: // $bb
        var $16=$tv; //@line 845 "_hotshot.c"
        var $17=HEAP[$16]; //@line 845 "_hotshot.c"
        var $18=$self_addr; //@line 845 "_hotshot.c"
        var $19=$18+10284; //@line 845 "_hotshot.c"
        var $20=$19; //@line 845 "_hotshot.c"
        var $21=HEAP[$20]; //@line 845 "_hotshot.c"
        var $22=($17) - ($21); //@line 845 "_hotshot.c"
        var $23=($22) * 1000000; //@line 845 "_hotshot.c"
        var $24=$tdelta; //@line 845 "_hotshot.c"
        var $25=($23) + ($24); //@line 845 "_hotshot.c"
        $tdelta=$25; //@line 845 "_hotshot.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 845 "_hotshot.c"
      case 2: // $bb1thread_pre_split
        var $_pr=$tdelta;
        __lastLabel__ = 2; __label__ = 3; break;
      case 3: // $bb1
        var $26=__lastLabel__ == 2 ? $_pr : ($25);
        var $27=($26) < 0; //@line 848 "_hotshot.c"
        if ($27) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 848 "_hotshot.c"
      case 4: // $bb2
        $0=0; //@line 849 "_hotshot.c"
        __label__ = 6; break; //@line 849 "_hotshot.c"
      case 5: // $bb3
        var $28=$self_addr; //@line 851 "_hotshot.c"
        var $29=$28+10284; //@line 851 "_hotshot.c"
        var $30=$29; //@line 851 "_hotshot.c"
        var $31=$tv; //@line 851 "_hotshot.c"
        var $32=HEAP[$31]; //@line 851 "_hotshot.c"
        HEAP[$30]=$32; //@line 851 "_hotshot.c"
        var $33=$29+4; //@line 851 "_hotshot.c"
        var $34=$tv+4; //@line 851 "_hotshot.c"
        var $35=HEAP[$34]; //@line 851 "_hotshot.c"
        HEAP[$33]=$35; //@line 851 "_hotshot.c"
        var $36=$tdelta; //@line 852 "_hotshot.c"
        $0=$36; //@line 852 "_hotshot.c"
        __label__ = 6; break; //@line 852 "_hotshot.c"
      case 6: // $bb4
        var $37=$0; //@line 849 "_hotshot.c"
        $retval=$37; //@line 849 "_hotshot.c"
        var $retval5=$retval; //@line 849 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 849 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_enter($self, $fileno, $tdelta, $lineno) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $fileno_addr;
        var $tdelta_addr;
        var $lineno_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $fileno_addr=$fileno;
        $tdelta_addr=$tdelta;
        $lineno_addr=$lineno;
        var $1=$self_addr; //@line 719 "_hotshot.c"
        var $2=$1+16; //@line 719 "_hotshot.c"
        var $3=HEAP[$2]; //@line 719 "_hotshot.c"
        var $4=($3) + 16; //@line 719 "_hotshot.c"
        var $5=($4) > 10239; //@line 719 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 719 "_hotshot.c"
      case 1: // $bb
        var $6=$self_addr; //@line 720 "_hotshot.c"
        var $7=_flush_data($6); //@line 720 "_hotshot.c"
        var $8=($7) < 0; //@line 720 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 720 "_hotshot.c"
      case 2: // $bb1
        $0=-1; //@line 721 "_hotshot.c"
        __label__ = 6; break; //@line 721 "_hotshot.c"
      case 3: // $bb2
        var $9=$self_addr; //@line 723 "_hotshot.c"
        var $10=$fileno_addr; //@line 723 "_hotshot.c"
        var $11=_pack_modified_packed_int($9, $10, 0); //@line 723 "_hotshot.c"
        var $12=$self_addr; //@line 724 "_hotshot.c"
        var $13=$lineno_addr; //@line 724 "_hotshot.c"
        var $14=_pack_packed_int($12, $13); //@line 724 "_hotshot.c"
        var $15=$self_addr; //@line 725 "_hotshot.c"
        var $16=$15+10272; //@line 725 "_hotshot.c"
        var $17=HEAP[$16]; //@line 725 "_hotshot.c"
        var $18=($17)!=0; //@line 725 "_hotshot.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 725 "_hotshot.c"
      case 4: // $bb3
        var $19=$self_addr; //@line 726 "_hotshot.c"
        var $20=$tdelta_addr; //@line 726 "_hotshot.c"
        var $21=_pack_packed_int($19, $20); //@line 726 "_hotshot.c"
        $0=$21; //@line 726 "_hotshot.c"
        __label__ = 6; break; //@line 726 "_hotshot.c"
      case 5: // $bb4
        $0=0; //@line 728 "_hotshot.c"
        __label__ = 6; break; //@line 728 "_hotshot.c"
      case 6: // $bb5
        var $22=$0; //@line 721 "_hotshot.c"
        $retval=$22; //@line 721 "_hotshot.c"
        var $retval6=$retval; //@line 721 "_hotshot.c"
        ;
        return $retval6; //@line 721 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_exit($self, $tdelta) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $tdelta_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $tdelta_addr=$tdelta;
        var $1=$self_addr; //@line 734 "_hotshot.c"
        var $2=$1+16; //@line 734 "_hotshot.c"
        var $3=HEAP[$2]; //@line 734 "_hotshot.c"
        var $4=($3) + 6; //@line 734 "_hotshot.c"
        var $5=($4) > 10239; //@line 734 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 734 "_hotshot.c"
      case 1: // $bb
        var $6=$self_addr; //@line 735 "_hotshot.c"
        var $7=_flush_data($6); //@line 735 "_hotshot.c"
        var $8=($7) < 0; //@line 735 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 735 "_hotshot.c"
      case 2: // $bb1
        $0=-1; //@line 736 "_hotshot.c"
        __label__ = 6; break; //@line 736 "_hotshot.c"
      case 3: // $bb2
        var $9=$self_addr; //@line 738 "_hotshot.c"
        var $10=$9+10272; //@line 738 "_hotshot.c"
        var $11=HEAP[$10]; //@line 738 "_hotshot.c"
        var $12=($11)!=0; //@line 738 "_hotshot.c"
        var $13=$self_addr; //@line 739 "_hotshot.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 738 "_hotshot.c"
      case 4: // $bb3
        var $14=$tdelta_addr; //@line 739 "_hotshot.c"
        var $15=_pack_modified_packed_int($13, $14, 1); //@line 739 "_hotshot.c"
        $0=$15; //@line 739 "_hotshot.c"
        __label__ = 6; break; //@line 739 "_hotshot.c"
      case 5: // $bb4
        var $16=$13+16; //@line 740 "_hotshot.c"
        var $17=HEAP[$16]; //@line 740 "_hotshot.c"
        var $18=$self_addr; //@line 740 "_hotshot.c"
        var $19=$18+20; //@line 740 "_hotshot.c"
        var $20=$19+$17; //@line 740 "_hotshot.c"
        HEAP[$20]=1; //@line 740 "_hotshot.c"
        var $21=$self_addr; //@line 741 "_hotshot.c"
        var $22=$21+16; //@line 741 "_hotshot.c"
        var $23=HEAP[$22]; //@line 741 "_hotshot.c"
        var $24=($23) + 1; //@line 741 "_hotshot.c"
        var $25=$self_addr; //@line 741 "_hotshot.c"
        var $26=$25+16; //@line 741 "_hotshot.c"
        HEAP[$26]=$24; //@line 741 "_hotshot.c"
        $0=0; //@line 742 "_hotshot.c"
        __label__ = 6; break; //@line 742 "_hotshot.c"
      case 6: // $bb5
        var $27=$0; //@line 736 "_hotshot.c"
        $retval=$27; //@line 736 "_hotshot.c"
        var $retval6=$retval; //@line 736 "_hotshot.c"
        ;
        return $retval6; //@line 736 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_lineno_tdelta($self, $lineno, $tdelta) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $lineno_addr;
        var $tdelta_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $lineno_addr=$lineno;
        $tdelta_addr=$tdelta;
        var $1=$self_addr; //@line 758 "_hotshot.c"
        var $2=$1+16; //@line 758 "_hotshot.c"
        var $3=HEAP[$2]; //@line 758 "_hotshot.c"
        var $4=($3) + 11; //@line 758 "_hotshot.c"
        var $5=($4) > 10239; //@line 758 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 758 "_hotshot.c"
      case 1: // $bb
        var $6=$self_addr; //@line 759 "_hotshot.c"
        var $7=_flush_data($6); //@line 759 "_hotshot.c"
        var $8=($7) < 0; //@line 759 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 759 "_hotshot.c"
      case 2: // $bb1
        $0=0; //@line 760 "_hotshot.c"
        __label__ = 6; break; //@line 760 "_hotshot.c"
      case 3: // $bb2
        var $9=$self_addr; //@line 762 "_hotshot.c"
        var $10=$lineno_addr; //@line 762 "_hotshot.c"
        var $11=_pack_modified_packed_int($9, $10, 2); //@line 762 "_hotshot.c"
        var $12=($11) < 0; //@line 762 "_hotshot.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 762 "_hotshot.c"
      case 4: // $bb3
        $0=-1; //@line 763 "_hotshot.c"
        __label__ = 6; break; //@line 763 "_hotshot.c"
      case 5: // $bb4
        var $13=$self_addr; //@line 764 "_hotshot.c"
        var $14=$tdelta_addr; //@line 764 "_hotshot.c"
        var $15=_pack_packed_int($13, $14); //@line 764 "_hotshot.c"
        $0=$15; //@line 764 "_hotshot.c"
        __label__ = 6; break; //@line 764 "_hotshot.c"
      case 6: // $bb5
        var $16=$0; //@line 760 "_hotshot.c"
        $retval=$16; //@line 760 "_hotshot.c"
        var $retval6=$retval; //@line 760 "_hotshot.c"
        ;
        return $retval6; //@line 760 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_lineno($self, $lineno) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $lineno_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $lineno_addr=$lineno;
        var $1=$self_addr; //@line 748 "_hotshot.c"
        var $2=$1+16; //@line 748 "_hotshot.c"
        var $3=HEAP[$2]; //@line 748 "_hotshot.c"
        var $4=($3) + 6; //@line 748 "_hotshot.c"
        var $5=($4) > 10239; //@line 748 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 748 "_hotshot.c"
      case 1: // $bb
        var $6=$self_addr; //@line 749 "_hotshot.c"
        var $7=_flush_data($6); //@line 749 "_hotshot.c"
        var $8=($7) < 0; //@line 749 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 749 "_hotshot.c"
      case 2: // $bb1
        $0=-1; //@line 750 "_hotshot.c"
        __label__ = 4; break; //@line 750 "_hotshot.c"
      case 3: // $bb2
        var $9=$self_addr; //@line 752 "_hotshot.c"
        var $10=$lineno_addr; //@line 752 "_hotshot.c"
        var $11=_pack_modified_packed_int($9, $10, 2); //@line 752 "_hotshot.c"
        $0=$11; //@line 752 "_hotshot.c"
        __label__ = 4; break; //@line 752 "_hotshot.c"
      case 4: // $bb3
        var $12=$0; //@line 750 "_hotshot.c"
        $retval=$12; //@line 750 "_hotshot.c"
        var $retval4=$retval; //@line 750 "_hotshot.c"
        ;
        return $retval4; //@line 750 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_modified_packed_int($self, $value, $subfield) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $value_addr;
        var $modsize_addr;
        var $subfield_addr;
        var $retval;
        var $0;
        var $bits;
        var $partial;
        var $b;
        $self_addr=$self;
        $value_addr=$value;
        $modsize_addr=2;
        $subfield_addr=$subfield;
        var $1=$modsize_addr; //@line 608 "_hotshot.c"
        var $2=7 - ($1); //@line 608 "_hotshot.c"
        $bits=$2; //@line 608 "_hotshot.c"
        var $3=$bits; //@line 609 "_hotshot.c"
        var $4=_maxvalues_8890+$3*4; //@line 609 "_hotshot.c"
        var $5=HEAP[$4]; //@line 609 "_hotshot.c"
        var $6=$value_addr; //@line 609 "_hotshot.c"
        var $7=($6) & ($5); //@line 609 "_hotshot.c"
        $partial=$7; //@line 609 "_hotshot.c"
        var $8=$partial; //@line 610 "_hotshot.c"
        var $9=$modsize_addr; //@line 610 "_hotshot.c"
        var $10=($8) << ($9); //@line 610 "_hotshot.c"
        var $11=((($10)) & 255); //@line 610 "_hotshot.c"
        var $12=$subfield_addr; //@line 610 "_hotshot.c"
        var $13=((($12)) & 255); //@line 610 "_hotshot.c"
        var $14=($11) | ($13); //@line 610 "_hotshot.c"
        $b=$14; //@line 610 "_hotshot.c"
        var $15=$partial; //@line 612 "_hotshot.c"
        var $16=$value_addr; //@line 612 "_hotshot.c"
        var $17=($15)!=($16); //@line 612 "_hotshot.c"
        if ($17) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 612 "_hotshot.c"
      case 1: // $bb
        var $18=$b; //@line 613 "_hotshot.c"
        var $19=($18) | -128; //@line 613 "_hotshot.c"
        $b=$19; //@line 613 "_hotshot.c"
        var $20=$self_addr; //@line 614 "_hotshot.c"
        var $21=$20+16; //@line 614 "_hotshot.c"
        var $22=HEAP[$21]; //@line 614 "_hotshot.c"
        var $23=$self_addr; //@line 614 "_hotshot.c"
        var $24=$23+20; //@line 614 "_hotshot.c"
        var $25=$24+$22; //@line 614 "_hotshot.c"
        var $26=$b; //@line 614 "_hotshot.c"
        HEAP[$25]=$26; //@line 614 "_hotshot.c"
        var $27=$self_addr; //@line 615 "_hotshot.c"
        var $28=$27+16; //@line 615 "_hotshot.c"
        var $29=HEAP[$28]; //@line 615 "_hotshot.c"
        var $30=($29) + 1; //@line 615 "_hotshot.c"
        var $31=$self_addr; //@line 615 "_hotshot.c"
        var $32=$31+16; //@line 615 "_hotshot.c"
        HEAP[$32]=$30; //@line 615 "_hotshot.c"
        var $33=$value_addr; //@line 616 "_hotshot.c"
        var $34=$bits; //@line 616 "_hotshot.c"
        var $35=($33) >> ($34); //@line 616 "_hotshot.c"
        var $36=$self_addr; //@line 616 "_hotshot.c"
        var $37=_pack_packed_int($36, $35); //@line 616 "_hotshot.c"
        $0=$37; //@line 616 "_hotshot.c"
        __label__ = 3; break; //@line 616 "_hotshot.c"
      case 2: // $bb1
        var $38=$self_addr; //@line 618 "_hotshot.c"
        var $39=$38+16; //@line 618 "_hotshot.c"
        var $40=HEAP[$39]; //@line 618 "_hotshot.c"
        var $41=$self_addr; //@line 618 "_hotshot.c"
        var $42=$41+20; //@line 618 "_hotshot.c"
        var $43=$42+$40; //@line 618 "_hotshot.c"
        var $44=$b; //@line 618 "_hotshot.c"
        HEAP[$43]=$44; //@line 618 "_hotshot.c"
        var $45=$self_addr; //@line 619 "_hotshot.c"
        var $46=$45+16; //@line 619 "_hotshot.c"
        var $47=HEAP[$46]; //@line 619 "_hotshot.c"
        var $48=($47) + 1; //@line 619 "_hotshot.c"
        var $49=$self_addr; //@line 619 "_hotshot.c"
        var $50=$49+16; //@line 619 "_hotshot.c"
        HEAP[$50]=$48; //@line 619 "_hotshot.c"
        $0=0; //@line 620 "_hotshot.c"
        __label__ = 3; break; //@line 620 "_hotshot.c"
      case 3: // $bb2
        var $51=$0; //@line 616 "_hotshot.c"
        $retval=$51; //@line 616 "_hotshot.c"
        var $retval3=$retval; //@line 616 "_hotshot.c"
        ;
        return $retval3; //@line 616 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _calibrate() {
    var __stackBase__  = STACKTOP; STACKTOP += 160; _memset(__stackBase__, 0, 160);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tv1=__stackBase__;
        var $tv2=__stackBase__+8;
        var $ru1=__stackBase__+16;
        var $ru2=__stackBase__+88;
        var $0=_gettimeofday($tv1, 0); //@line 910 "_hotshot.c"
        var $1=$tv1+4; //@line 920 "_hotshot.c"
        var $2=$tv1; //@line 920 "_hotshot.c"
        var $3=$tv2; //@line 920 "_hotshot.c"
        var $4=$tv2+4; //@line 920 "_hotshot.c"
        __label__ = 1; break; //@line 910 "_hotshot.c"
      case 1: // $bb
        var $5=_gettimeofday($tv2, 0); //@line 912 "_hotshot.c"
        var $6=HEAP[$2]; //@line 920 "_hotshot.c"
        var $7=HEAP[$3]; //@line 920 "_hotshot.c"
        var $8=($6)!=($7); //@line 920 "_hotshot.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 920 "_hotshot.c"
      case 2: // $bb1
        var $9=HEAP[$1]; //@line 920 "_hotshot.c"
        var $10=HEAP[$4]; //@line 920 "_hotshot.c"
        var $11=($9)!=($10); //@line 920 "_hotshot.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 920 "_hotshot.c"
      case 3: // $bb2
        var $12=$tv1; //@line 921 "_hotshot.c"
        var $13=HEAP[$12]; //@line 921 "_hotshot.c"
        var $14=$tv2; //@line 921 "_hotshot.c"
        var $15=HEAP[$14]; //@line 921 "_hotshot.c"
        var $16=($13)==($15); //@line 921 "_hotshot.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 921 "_hotshot.c"
      case 4: // $bb3
        var $17=$tv2+4; //@line 922 "_hotshot.c"
        var $18=HEAP[$17]; //@line 922 "_hotshot.c"
        var $19=$tv1+4; //@line 922 "_hotshot.c"
        var $20=HEAP[$19]; //@line 922 "_hotshot.c"
        var $21=($18) - ($20); //@line 922 "_hotshot.c"
        HEAP[_timeofday_diff]=$21; //@line 922 "_hotshot.c"
        __label__ = 6; break; //@line 922 "_hotshot.c"
      case 5: // $bb4
        var $22=$tv1+4; //@line 924 "_hotshot.c"
        var $23=HEAP[$22]; //@line 924 "_hotshot.c"
        var $_neg=0 - ($23);
        var $24=$tv2+4; //@line 924 "_hotshot.c"
        var $25=HEAP[$24]; //@line 924 "_hotshot.c"
        var $26=($_neg) + 1000000;
        var $27=($26) + ($25); //@line 924 "_hotshot.c"
        HEAP[_timeofday_diff]=$27; //@line 924 "_hotshot.c"
        __label__ = 6; break; //@line 924 "_hotshot.c"
      case 6: // $bb5
        var $28=_getrusage(0, $ru1); //@line 936 "_hotshot.c"
        var $29=$ru1; //@line 939 "_hotshot.c"
        var $30=$29; //@line 939 "_hotshot.c"
        var $31=$ru2; //@line 939 "_hotshot.c"
        var $32=$31; //@line 939 "_hotshot.c"
        var $33=$ru1; //@line 940 "_hotshot.c"
        var $34=$33+4; //@line 940 "_hotshot.c"
        var $35=$ru2; //@line 944 "_hotshot.c"
        var $36=$35+4; //@line 944 "_hotshot.c"
        var $37=$ru1+8; //@line 948 "_hotshot.c"
        var $38=$37; //@line 948 "_hotshot.c"
        var $39=$ru2+8; //@line 948 "_hotshot.c"
        var $40=$39; //@line 948 "_hotshot.c"
        var $41=$ru1+8; //@line 949 "_hotshot.c"
        var $42=$41+4; //@line 949 "_hotshot.c"
        var $43=$ru2+8; //@line 953 "_hotshot.c"
        var $44=$43+4; //@line 953 "_hotshot.c"
        __label__ = 7; break; //@line 936 "_hotshot.c"
      case 7: // $bb7
        var $45=_getrusage(0, $ru2); //@line 938 "_hotshot.c"
        var $46=HEAP[$30]; //@line 939 "_hotshot.c"
        var $47=HEAP[$32]; //@line 939 "_hotshot.c"
        var $48=($46)!=($47); //@line 939 "_hotshot.c"
        var $49=HEAP[$34]; //@line 940 "_hotshot.c"
        if ($48) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 939 "_hotshot.c"
      case 8: // $bb8
        var $_neg1=0 - ($49);
        var $50=$ru2; //@line 940 "_hotshot.c"
        var $51=$50+4; //@line 940 "_hotshot.c"
        var $52=HEAP[$51]; //@line 940 "_hotshot.c"
        var $53=($_neg1) + 1000000;
        var $54=($53) + ($52); //@line 940 "_hotshot.c"
        HEAP[_rusage_diff]=$54; //@line 940 "_hotshot.c"
        __label__ = 15; break; //@line 940 "_hotshot.c"
      case 9: // $bb9
        var $55=HEAP[$36]; //@line 944 "_hotshot.c"
        var $56=($49)!=($55); //@line 944 "_hotshot.c"
        if ($56) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 944 "_hotshot.c"
      case 10: // $bb10
        var $57=$ru2; //@line 945 "_hotshot.c"
        var $58=$57+4; //@line 945 "_hotshot.c"
        var $59=HEAP[$58]; //@line 945 "_hotshot.c"
        var $60=$ru1; //@line 945 "_hotshot.c"
        var $61=$60+4; //@line 945 "_hotshot.c"
        var $62=HEAP[$61]; //@line 945 "_hotshot.c"
        var $63=($59) - ($62); //@line 945 "_hotshot.c"
        HEAP[_rusage_diff]=$63; //@line 945 "_hotshot.c"
        __label__ = 15; break; //@line 945 "_hotshot.c"
      case 11: // $bb11
        var $64=HEAP[$38]; //@line 948 "_hotshot.c"
        var $65=HEAP[$40]; //@line 948 "_hotshot.c"
        var $66=($64)!=($65); //@line 948 "_hotshot.c"
        var $67=HEAP[$42]; //@line 949 "_hotshot.c"
        if ($66) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 948 "_hotshot.c"
      case 12: // $bb12
        var $_neg2=0 - ($67);
        var $68=$ru2+8; //@line 949 "_hotshot.c"
        var $69=$68+4; //@line 949 "_hotshot.c"
        var $70=HEAP[$69]; //@line 949 "_hotshot.c"
        var $71=($_neg2) + 1000000;
        var $72=($71) + ($70); //@line 949 "_hotshot.c"
        HEAP[_rusage_diff]=$72; //@line 949 "_hotshot.c"
        __label__ = 15; break; //@line 949 "_hotshot.c"
      case 13: // $bb13
        var $73=HEAP[$44]; //@line 953 "_hotshot.c"
        var $74=($67)!=($73); //@line 953 "_hotshot.c"
        if ($74) { __label__ = 14; break; } else { __label__ = 7; break; } //@line 953 "_hotshot.c"
      case 14: // $bb14
        var $75=$ru2+8; //@line 954 "_hotshot.c"
        var $76=$75+4; //@line 954 "_hotshot.c"
        var $77=HEAP[$76]; //@line 954 "_hotshot.c"
        var $78=$ru1+8; //@line 954 "_hotshot.c"
        var $79=$78+4; //@line 954 "_hotshot.c"
        var $80=HEAP[$79]; //@line 954 "_hotshot.c"
        var $81=($77) - ($80); //@line 954 "_hotshot.c"
        HEAP[_rusage_diff]=$81; //@line 954 "_hotshot.c"
        __label__ = 15; break; //@line 954 "_hotshot.c"
      case 15: // $return
        STACKTOP = __stackBase__;
        return; //@line 960 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _do_start($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 965 "_hotshot.c"
        var $1=$0+10276; //@line 965 "_hotshot.c"
        HEAP[$1]=1; //@line 965 "_hotshot.c"
        var $2=$self_addr; //@line 966 "_hotshot.c"
        var $3=$2+10284; //@line 966 "_hotshot.c"
        var $4=_gettimeofday($3, 0); //@line 966 "_hotshot.c"
        var $5=$self_addr; //@line 967 "_hotshot.c"
        var $6=$5+10264; //@line 967 "_hotshot.c"
        var $7=HEAP[$6]; //@line 967 "_hotshot.c"
        var $8=($7)!=0; //@line 967 "_hotshot.c"
        var $9=$self_addr; //@line 968 "_hotshot.c"
        var $10=$9; //@line 968 "_hotshot.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 967 "_hotshot.c"
      case 1: // $bb
        _PyEval_SetTrace((FUNCTION_TABLE_OFFSET + 2), $10); //@line 968 "_hotshot.c"
        __label__ = 3; break; //@line 968 "_hotshot.c"
      case 2: // $bb1
        _PyEval_SetProfile((FUNCTION_TABLE_OFFSET + 2), $10); //@line 970 "_hotshot.c"
        __label__ = 3; break; //@line 970 "_hotshot.c"
      case 3: // $return
        ;
        return; //@line 971 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _do_stop($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 976 "_hotshot.c"
        var $1=$0+10276; //@line 976 "_hotshot.c"
        var $2=HEAP[$1]; //@line 976 "_hotshot.c"
        var $3=($2)!=0; //@line 976 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 976 "_hotshot.c"
      case 1: // $bb
        var $4=$self_addr; //@line 977 "_hotshot.c"
        var $5=$4+10276; //@line 977 "_hotshot.c"
        HEAP[$5]=0; //@line 977 "_hotshot.c"
        var $6=$self_addr; //@line 978 "_hotshot.c"
        var $7=$6+10264; //@line 978 "_hotshot.c"
        var $8=HEAP[$7]; //@line 978 "_hotshot.c"
        var $9=($8)!=0; //@line 978 "_hotshot.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 978 "_hotshot.c"
      case 2: // $bb1
        _PyEval_SetTrace(0, 0); //@line 979 "_hotshot.c"
        __label__ = 4; break; //@line 979 "_hotshot.c"
      case 3: // $bb2
        _PyEval_SetProfile(0, 0); //@line 981 "_hotshot.c"
        __label__ = 4; break; //@line 981 "_hotshot.c"
      case 4: // $bb3
        var $10=$self_addr; //@line 983 "_hotshot.c"
        var $11=$10+16; //@line 983 "_hotshot.c"
        var $12=HEAP[$11]; //@line 983 "_hotshot.c"
        var $13=($12) > 0; //@line 983 "_hotshot.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 983 "_hotshot.c"
      case 5: // $bb4
        var $14=$self_addr; //@line 985 "_hotshot.c"
        var $15=_flush_data($14); //@line 985 "_hotshot.c"
        __label__ = 6; break; //@line 985 "_hotshot.c"
      case 6: // $return
        ;
        return; //@line 987 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _is_available($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 992 "_hotshot.c"
        var $2=$1+10276; //@line 992 "_hotshot.c"
        var $3=HEAP[$2]; //@line 992 "_hotshot.c"
        var $4=($3)!=0; //@line 992 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 992 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[_ProfilerError]; //@line 993 "_hotshot.c"
        _PyErr_SetString($5, __str8); //@line 993 "_hotshot.c"
        $0=0; //@line 994 "_hotshot.c"
        __label__ = 5; break; //@line 994 "_hotshot.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 996 "_hotshot.c"
        var $7=$6+10260; //@line 996 "_hotshot.c"
        var $8=HEAP[$7]; //@line 996 "_hotshot.c"
        var $9=($8)==0; //@line 996 "_hotshot.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 996 "_hotshot.c"
      case 3: // $bb2
        var $10=HEAP[_ProfilerError]; //@line 997 "_hotshot.c"
        _PyErr_SetString($10, __str9); //@line 997 "_hotshot.c"
        $0=0; //@line 998 "_hotshot.c"
        __label__ = 5; break; //@line 998 "_hotshot.c"
      case 4: // $bb3
        $0=1; //@line 1000 "_hotshot.c"
        __label__ = 5; break; //@line 1000 "_hotshot.c"
      case 5: // $bb4
        var $11=$0; //@line 994 "_hotshot.c"
        $retval=$11; //@line 994 "_hotshot.c"
        var $retval5=$retval; //@line 994 "_hotshot.c"
        ;
        return $retval5; //@line 994 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_addinfo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        var $key=__stackBase__;
        var $value=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        $result=0; //@line 1013 "_hotshot.c"
        var $1=$args_addr; //@line 1016 "_hotshot.c"
        var $2=_PyArg_ParseTuple($1, __str10, allocate([$key,0,0,0,$value,0,0,0], ["i8**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 1016 "_hotshot.c"
        var $3=($2)!=0; //@line 1016 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 1016 "_hotshot.c"
      case 1: // $bb
        var $4=$self_addr; //@line 1017 "_hotshot.c"
        var $5=$4+10260; //@line 1017 "_hotshot.c"
        var $6=HEAP[$5]; //@line 1017 "_hotshot.c"
        var $7=($6)==0; //@line 1017 "_hotshot.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1017 "_hotshot.c"
      case 2: // $bb1
        var $8=HEAP[_ProfilerError]; //@line 1018 "_hotshot.c"
        _PyErr_SetString($8, __str9); //@line 1018 "_hotshot.c"
        __label__ = 5; break; //@line 1018 "_hotshot.c"
      case 3: // $bb2
        var $9=HEAP[$value]; //@line 1020 "_hotshot.c"
        var $10=HEAP[$key]; //@line 1020 "_hotshot.c"
        var $11=$self_addr; //@line 1020 "_hotshot.c"
        var $12=_pack_add_info($11, $10, $9); //@line 1020 "_hotshot.c"
        var $13=($12)==0; //@line 1020 "_hotshot.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1020 "_hotshot.c"
      case 4: // $bb3
        $result=__Py_NoneStruct; //@line 1021 "_hotshot.c"
        var $14=$result; //@line 1022 "_hotshot.c"
        var $15=$14; //@line 1022 "_hotshot.c"
        var $16=HEAP[$15]; //@line 1022 "_hotshot.c"
        var $17=($16) + 1; //@line 1022 "_hotshot.c"
        var $18=$result; //@line 1022 "_hotshot.c"
        var $19=$18; //@line 1022 "_hotshot.c"
        HEAP[$19]=$17; //@line 1022 "_hotshot.c"
        __label__ = 5; break; //@line 1022 "_hotshot.c"
      case 5: // $bb4
        var $20=$result; //@line 1026 "_hotshot.c"
        $0=$20; //@line 1026 "_hotshot.c"
        var $21=$0; //@line 1026 "_hotshot.c"
        $retval=$21; //@line 1026 "_hotshot.c"
        var $retval5=$retval; //@line 1026 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1026 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_close($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 1036 "_hotshot.c"
        _do_stop($1); //@line 1036 "_hotshot.c"
        var $2=$self_addr; //@line 1037 "_hotshot.c"
        var $3=$2+10260; //@line 1037 "_hotshot.c"
        var $4=HEAP[$3]; //@line 1037 "_hotshot.c"
        var $5=($4)!=0; //@line 1037 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1037 "_hotshot.c"
      case 1: // $bb
        var $6=$self_addr; //@line 1038 "_hotshot.c"
        var $7=$6+10260; //@line 1038 "_hotshot.c"
        var $8=HEAP[$7]; //@line 1038 "_hotshot.c"
        var $9=_fclose($8); //@line 1038 "_hotshot.c"
        var $10=$self_addr; //@line 1039 "_hotshot.c"
        var $11=$10+10260; //@line 1039 "_hotshot.c"
        HEAP[$11]=0; //@line 1039 "_hotshot.c"
        __label__ = 2; break; //@line 1039 "_hotshot.c"
      case 2: // $bb1
        var $12=HEAP[__Py_NoneStruct]; //@line 1041 "_hotshot.c"
        var $13=($12) + 1; //@line 1041 "_hotshot.c"
        HEAP[__Py_NoneStruct]=$13; //@line 1041 "_hotshot.c"
        $0=__Py_NoneStruct; //@line 1042 "_hotshot.c"
        var $14=$0; //@line 1042 "_hotshot.c"
        $retval=$14; //@line 1042 "_hotshot.c"
        var $retval2=$retval; //@line 1042 "_hotshot.c"
        ;
        return $retval2; //@line 1042 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_fileno($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 1050 "_hotshot.c"
        var $2=$1+10260; //@line 1050 "_hotshot.c"
        var $3=HEAP[$2]; //@line 1050 "_hotshot.c"
        var $4=($3)==0; //@line 1050 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1050 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 1051 "_hotshot.c"
        _PyErr_SetString($5, __str11); //@line 1051 "_hotshot.c"
        $0=0; //@line 1053 "_hotshot.c"
        __label__ = 3; break; //@line 1053 "_hotshot.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 1055 "_hotshot.c"
        var $7=$6+10260; //@line 1055 "_hotshot.c"
        var $8=HEAP[$7]; //@line 1055 "_hotshot.c"
        var $9=_fileno($8); //@line 1055 "_hotshot.c"
        var $10=_PyInt_FromLong($9); //@line 1055 "_hotshot.c"
        $0=$10; //@line 1055 "_hotshot.c"
        __label__ = 3; break; //@line 1055 "_hotshot.c"
      case 3: // $bb2
        var $11=$0; //@line 1053 "_hotshot.c"
        $retval=$11; //@line 1053 "_hotshot.c"
        var $retval3=$retval; //@line 1053 "_hotshot.c"
        ;
        return $retval3; //@line 1053 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_runcall($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        var $callargs=__stackBase__;
        var $callkw=__stackBase__+4;
        var $callable=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        $result=0; //@line 1065 "_hotshot.c"
        HEAP[$callargs]=0; //@line 1066 "_hotshot.c"
        HEAP[$callkw]=0; //@line 1067 "_hotshot.c"
        var $1=$args_addr; //@line 1070 "_hotshot.c"
        var $2=_PyArg_UnpackTuple($1, __str12, 1, 3, allocate([$callable,0,0,0,$callargs,0,0,0,$callkw,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1070 "_hotshot.c"
        var $3=($2)!=0; //@line 1070 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1070 "_hotshot.c"
      case 1: // $bb
        var $4=$self_addr; //@line 1072 "_hotshot.c"
        var $5=_is_available($4); //@line 1072 "_hotshot.c"
        var $6=($5)!=0; //@line 1072 "_hotshot.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1072 "_hotshot.c"
      case 2: // $bb1
        var $7=$self_addr; //@line 1073 "_hotshot.c"
        _do_start($7); //@line 1073 "_hotshot.c"
        var $8=HEAP[$callkw]; //@line 1074 "_hotshot.c"
        var $9=HEAP[$callargs]; //@line 1074 "_hotshot.c"
        var $10=HEAP[$callable]; //@line 1074 "_hotshot.c"
        var $11=_PyEval_CallObjectWithKeywords($10, $9, $8); //@line 1074 "_hotshot.c"
        $result=$11; //@line 1074 "_hotshot.c"
        var $12=$self_addr; //@line 1075 "_hotshot.c"
        _do_stop($12); //@line 1075 "_hotshot.c"
        __label__ = 3; break; //@line 1075 "_hotshot.c"
      case 3: // $bb2
        var $13=$result; //@line 1078 "_hotshot.c"
        $0=$13; //@line 1078 "_hotshot.c"
        var $14=$0; //@line 1078 "_hotshot.c"
        $retval=$14; //@line 1078 "_hotshot.c"
        var $retval3=$retval; //@line 1078 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1078 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_runcode($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        var $code=__stackBase__;
        var $globals=__stackBase__+4;
        var $locals=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        $result=0; //@line 1089 "_hotshot.c"
        HEAP[$locals]=0; //@line 1092 "_hotshot.c"
        var $1=$args_addr; //@line 1094 "_hotshot.c"
        var $2=_PyArg_ParseTuple($1, __str13, allocate([_PyCode_Type,0,0,0,$code,0,0,0,_PyDict_Type,0,0,0,$globals,0,0,0,$locals,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyCodeObject**",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1094 "_hotshot.c"
        var $3=($2)!=0; //@line 1094 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 1094 "_hotshot.c"
      case 1: // $bb
        var $4=$self_addr; //@line 1098 "_hotshot.c"
        var $5=_is_available($4); //@line 1098 "_hotshot.c"
        var $6=($5)!=0; //@line 1098 "_hotshot.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 1098 "_hotshot.c"
      case 2: // $bb1
        var $7=HEAP[$locals]; //@line 1099 "_hotshot.c"
        var $8=($7)==0; //@line 1099 "_hotshot.c"
        var $9=HEAP[$locals]; //@line 1099 "_hotshot.c"
        var $10=($9)==(__Py_NoneStruct); //@line 1099 "_hotshot.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1099 "_hotshot.c"
      case 3: // $bb3
        var $11=HEAP[$globals]; //@line 1100 "_hotshot.c"
        HEAP[$locals]=$11; //@line 1100 "_hotshot.c"
        __label__ = 6; break; //@line 1100 "_hotshot.c"
      case 4: // $bb4
        var $12=HEAP[$locals]; //@line 1101 "_hotshot.c"
        var $13=$12+4; //@line 1101 "_hotshot.c"
        var $14=HEAP[$13]; //@line 1101 "_hotshot.c"
        var $15=$14+84; //@line 1101 "_hotshot.c"
        var $16=HEAP[$15]; //@line 1101 "_hotshot.c"
        var $17=($16) & 536870912; //@line 1101 "_hotshot.c"
        var $18=($17)==0; //@line 1101 "_hotshot.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1101 "_hotshot.c"
      case 5: // $bb5
        var $19=HEAP[_PyExc_TypeError]; //@line 1102 "_hotshot.c"
        _PyErr_SetString($19, __str14); //@line 1102 "_hotshot.c"
        $0=0; //@line 1104 "_hotshot.c"
        __label__ = 8; break; //@line 1104 "_hotshot.c"
      case 6: // $bb6
        var $20=$self_addr; //@line 1106 "_hotshot.c"
        _do_start($20); //@line 1106 "_hotshot.c"
        var $21=HEAP[$locals]; //@line 1107 "_hotshot.c"
        var $22=HEAP[$globals]; //@line 1107 "_hotshot.c"
        var $23=HEAP[$code]; //@line 1107 "_hotshot.c"
        var $24=_PyEval_EvalCode($23, $22, $21); //@line 1107 "_hotshot.c"
        $result=$24; //@line 1107 "_hotshot.c"
        var $25=$self_addr; //@line 1108 "_hotshot.c"
        _do_stop($25); //@line 1108 "_hotshot.c"
        __label__ = 7; break; //@line 1108 "_hotshot.c"
      case 7: // $bb7
        var $26=$result; //@line 1117 "_hotshot.c"
        $0=$26; //@line 1117 "_hotshot.c"
        __label__ = 8; break; //@line 1117 "_hotshot.c"
      case 8: // $bb8
        var $27=$0; //@line 1104 "_hotshot.c"
        $retval=$27; //@line 1104 "_hotshot.c"
        var $retval9=$retval; //@line 1104 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1104 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_start($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        $result=0; //@line 1127 "_hotshot.c"
        var $1=$self_addr; //@line 1129 "_hotshot.c"
        var $2=_is_available($1); //@line 1129 "_hotshot.c"
        var $3=($2)!=0; //@line 1129 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1129 "_hotshot.c"
      case 1: // $bb
        var $4=$self_addr; //@line 1130 "_hotshot.c"
        _do_start($4); //@line 1130 "_hotshot.c"
        $result=__Py_NoneStruct; //@line 1131 "_hotshot.c"
        var $5=$result; //@line 1132 "_hotshot.c"
        var $6=$5; //@line 1132 "_hotshot.c"
        var $7=HEAP[$6]; //@line 1132 "_hotshot.c"
        var $8=($7) + 1; //@line 1132 "_hotshot.c"
        var $9=$result; //@line 1132 "_hotshot.c"
        var $10=$9; //@line 1132 "_hotshot.c"
        HEAP[$10]=$8; //@line 1132 "_hotshot.c"
        __label__ = 2; break; //@line 1132 "_hotshot.c"
      case 2: // $bb1
        var $11=$result; //@line 1134 "_hotshot.c"
        $0=$11; //@line 1134 "_hotshot.c"
        var $12=$0; //@line 1134 "_hotshot.c"
        $retval=$12; //@line 1134 "_hotshot.c"
        var $retval2=$retval; //@line 1134 "_hotshot.c"
        ;
        return $retval2; //@line 1134 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_stop($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        $result=0; //@line 1144 "_hotshot.c"
        var $1=$self_addr; //@line 1146 "_hotshot.c"
        var $2=$1+10276; //@line 1146 "_hotshot.c"
        var $3=HEAP[$2]; //@line 1146 "_hotshot.c"
        var $4=($3)==0; //@line 1146 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1146 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[_ProfilerError]; //@line 1147 "_hotshot.c"
        _PyErr_SetString($5, __str15); //@line 1147 "_hotshot.c"
        __label__ = 3; break; //@line 1147 "_hotshot.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 1149 "_hotshot.c"
        _do_stop($6); //@line 1149 "_hotshot.c"
        $result=__Py_NoneStruct; //@line 1150 "_hotshot.c"
        var $7=$result; //@line 1151 "_hotshot.c"
        var $8=$7; //@line 1151 "_hotshot.c"
        var $9=HEAP[$8]; //@line 1151 "_hotshot.c"
        var $10=($9) + 1; //@line 1151 "_hotshot.c"
        var $11=$result; //@line 1151 "_hotshot.c"
        var $12=$11; //@line 1151 "_hotshot.c"
        HEAP[$12]=$10; //@line 1151 "_hotshot.c"
        __label__ = 3; break; //@line 1151 "_hotshot.c"
      case 3: // $bb2
        var $13=$result; //@line 1153 "_hotshot.c"
        $0=$13; //@line 1153 "_hotshot.c"
        var $14=$0; //@line 1153 "_hotshot.c"
        $retval=$14; //@line 1153 "_hotshot.c"
        var $retval3=$retval; //@line 1153 "_hotshot.c"
        ;
        return $retval3; //@line 1153 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 1162 "_hotshot.c"
        _do_stop($0); //@line 1162 "_hotshot.c"
        var $1=$self_addr; //@line 1163 "_hotshot.c"
        var $2=$1+10260; //@line 1163 "_hotshot.c"
        var $3=HEAP[$2]; //@line 1163 "_hotshot.c"
        var $4=($3)!=0; //@line 1163 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1163 "_hotshot.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1164 "_hotshot.c"
        var $6=$5+10260; //@line 1164 "_hotshot.c"
        var $7=HEAP[$6]; //@line 1164 "_hotshot.c"
        var $8=_fclose($7); //@line 1164 "_hotshot.c"
        __label__ = 2; break; //@line 1164 "_hotshot.c"
      case 2: // $bb1
        var $9=$self_addr; //@line 1165 "_hotshot.c"
        var $10=$9+8; //@line 1165 "_hotshot.c"
        var $11=HEAP[$10]; //@line 1165 "_hotshot.c"
        var $12=($11)!=0; //@line 1165 "_hotshot.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1165 "_hotshot.c"
      case 3: // $bb2
        var $13=$self_addr; //@line 1165 "_hotshot.c"
        var $14=$13+8; //@line 1165 "_hotshot.c"
        var $15=HEAP[$14]; //@line 1165 "_hotshot.c"
        var $16=$15; //@line 1165 "_hotshot.c"
        var $17=HEAP[$16]; //@line 1165 "_hotshot.c"
        var $18=($17) - 1; //@line 1165 "_hotshot.c"
        var $19=$15; //@line 1165 "_hotshot.c"
        HEAP[$19]=$18; //@line 1165 "_hotshot.c"
        var $20=$15; //@line 1165 "_hotshot.c"
        var $21=HEAP[$20]; //@line 1165 "_hotshot.c"
        var $22=($21)==0; //@line 1165 "_hotshot.c"
        if ($22) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1165 "_hotshot.c"
      case 4: // $bb3
        var $23=$self_addr; //@line 1165 "_hotshot.c"
        var $24=$23+8; //@line 1165 "_hotshot.c"
        var $25=HEAP[$24]; //@line 1165 "_hotshot.c"
        var $26=$25+4; //@line 1165 "_hotshot.c"
        var $27=HEAP[$26]; //@line 1165 "_hotshot.c"
        var $28=$27+24; //@line 1165 "_hotshot.c"
        var $29=HEAP[$28]; //@line 1165 "_hotshot.c"
        var $30=$self_addr; //@line 1165 "_hotshot.c"
        var $31=$30+8; //@line 1165 "_hotshot.c"
        var $32=HEAP[$31]; //@line 1165 "_hotshot.c"
        FUNCTION_TABLE[$29]($32); //@line 1165 "_hotshot.c"
        __label__ = 5; break; //@line 1165 "_hotshot.c"
      case 5: // $bb4
        var $33=$self_addr; //@line 1166 "_hotshot.c"
        var $34=$33+12; //@line 1166 "_hotshot.c"
        var $35=HEAP[$34]; //@line 1166 "_hotshot.c"
        var $36=($35)!=0; //@line 1166 "_hotshot.c"
        if ($36) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1166 "_hotshot.c"
      case 6: // $bb5
        var $37=$self_addr; //@line 1166 "_hotshot.c"
        var $38=$37+12; //@line 1166 "_hotshot.c"
        var $39=HEAP[$38]; //@line 1166 "_hotshot.c"
        var $40=$39; //@line 1166 "_hotshot.c"
        var $41=HEAP[$40]; //@line 1166 "_hotshot.c"
        var $42=($41) - 1; //@line 1166 "_hotshot.c"
        var $43=$39; //@line 1166 "_hotshot.c"
        HEAP[$43]=$42; //@line 1166 "_hotshot.c"
        var $44=$39; //@line 1166 "_hotshot.c"
        var $45=HEAP[$44]; //@line 1166 "_hotshot.c"
        var $46=($45)==0; //@line 1166 "_hotshot.c"
        if ($46) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1166 "_hotshot.c"
      case 7: // $bb6
        var $47=$self_addr; //@line 1166 "_hotshot.c"
        var $48=$47+12; //@line 1166 "_hotshot.c"
        var $49=HEAP[$48]; //@line 1166 "_hotshot.c"
        var $50=$49+4; //@line 1166 "_hotshot.c"
        var $51=HEAP[$50]; //@line 1166 "_hotshot.c"
        var $52=$51+24; //@line 1166 "_hotshot.c"
        var $53=HEAP[$52]; //@line 1166 "_hotshot.c"
        var $54=$self_addr; //@line 1166 "_hotshot.c"
        var $55=$54+12; //@line 1166 "_hotshot.c"
        var $56=HEAP[$55]; //@line 1166 "_hotshot.c"
        FUNCTION_TABLE[$53]($56); //@line 1166 "_hotshot.c"
        __label__ = 8; break; //@line 1166 "_hotshot.c"
      case 8: // $bb7
        var $57=$self_addr; //@line 1167 "_hotshot.c"
        var $58=$57; //@line 1167 "_hotshot.c"
        _PyObject_Free($58); //@line 1167 "_hotshot.c"
        ;
        return; //@line 1168 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_get_closed($self, $closure) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $closure_addr;
        var $retval;
        var $0;
        var $iftmp_67;
        var $result;
        $self_addr=$self;
        $closure_addr=$closure;
        var $1=$self_addr; //@line 1191 "_hotshot.c"
        var $2=$1+10260; //@line 1191 "_hotshot.c"
        var $3=HEAP[$2]; //@line 1191 "_hotshot.c"
        var $4=($3)==0; //@line 1191 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1191 "_hotshot.c"
      case 1: // $bb
        $iftmp_67=__Py_TrueStruct; //@line 1191 "_hotshot.c"
        __label__ = 3; break; //@line 1191 "_hotshot.c"
      case 2: // $bb1
        $iftmp_67=__Py_ZeroStruct; //@line 1191 "_hotshot.c"
        __label__ = 3; break; //@line 1191 "_hotshot.c"
      case 3: // $bb2
        var $5=$iftmp_67; //@line 1191 "_hotshot.c"
        $result=$5; //@line 1191 "_hotshot.c"
        var $6=$result; //@line 1192 "_hotshot.c"
        var $7=$6; //@line 1192 "_hotshot.c"
        var $8=HEAP[$7]; //@line 1192 "_hotshot.c"
        var $9=($8) + 1; //@line 1192 "_hotshot.c"
        var $10=$result; //@line 1192 "_hotshot.c"
        var $11=$10; //@line 1192 "_hotshot.c"
        HEAP[$11]=$9; //@line 1192 "_hotshot.c"
        var $12=$result; //@line 1193 "_hotshot.c"
        $0=$12; //@line 1193 "_hotshot.c"
        var $13=$0; //@line 1193 "_hotshot.c"
        $retval=$13; //@line 1193 "_hotshot.c"
        var $retval3=$retval; //@line 1193 "_hotshot.c"
        ;
        return $retval3; //@line 1193 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _logreader_get_closed($self, $closure) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $closure_addr;
        var $retval;
        var $0;
        var $iftmp_68;
        var $result;
        $self_addr=$self;
        $closure_addr=$closure;
        var $1=$self_addr; //@line 1295 "_hotshot.c"
        var $2=$1+12; //@line 1295 "_hotshot.c"
        var $3=HEAP[$2]; //@line 1295 "_hotshot.c"
        var $4=($3)==0; //@line 1295 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1295 "_hotshot.c"
      case 1: // $bb
        $iftmp_68=__Py_TrueStruct; //@line 1295 "_hotshot.c"
        __label__ = 3; break; //@line 1295 "_hotshot.c"
      case 2: // $bb1
        $iftmp_68=__Py_ZeroStruct; //@line 1295 "_hotshot.c"
        __label__ = 3; break; //@line 1295 "_hotshot.c"
      case 3: // $bb2
        var $5=$iftmp_68; //@line 1295 "_hotshot.c"
        $result=$5; //@line 1295 "_hotshot.c"
        var $6=$result; //@line 1296 "_hotshot.c"
        var $7=$6; //@line 1296 "_hotshot.c"
        var $8=HEAP[$7]; //@line 1296 "_hotshot.c"
        var $9=($8) + 1; //@line 1296 "_hotshot.c"
        var $10=$result; //@line 1296 "_hotshot.c"
        var $11=$10; //@line 1296 "_hotshot.c"
        HEAP[$11]=$9; //@line 1296 "_hotshot.c"
        var $12=$result; //@line 1297 "_hotshot.c"
        $0=$12; //@line 1297 "_hotshot.c"
        var $13=$0; //@line 1297 "_hotshot.c"
        $retval=$13; //@line 1297 "_hotshot.c"
        var $retval3=$retval; //@line 1297 "_hotshot.c"
        ;
        return $retval3; //@line 1297 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _hotshot_logreader($unused, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $unused_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $self;
        var $filename=__stackBase__;
        var $c;
        var $err;
        $unused_addr=$unused;
        $args_addr=$args;
        $self=0; //@line 1346 "_hotshot.c"
        $err=0; //@line 1349 "_hotshot.c"
        var $1=$args_addr; //@line 1351 "_hotshot.c"
        var $2=_PyArg_ParseTuple($1, __str32, allocate([$filename,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 1351 "_hotshot.c"
        var $3=($2)!=0; //@line 1351 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 13; break; } //@line 1351 "_hotshot.c"
      case 1: // $bb
        var $4=__PyObject_New(_LogReaderType); //@line 1352 "_hotshot.c"
        var $5=$4; //@line 1352 "_hotshot.c"
        $self=$5; //@line 1352 "_hotshot.c"
        var $6=$self; //@line 1353 "_hotshot.c"
        var $7=($6)!=0; //@line 1353 "_hotshot.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 13; break; } //@line 1353 "_hotshot.c"
      case 2: // $bb1
        var $8=$self; //@line 1354 "_hotshot.c"
        var $9=$8+20; //@line 1354 "_hotshot.c"
        HEAP[$9]=1; //@line 1354 "_hotshot.c"
        var $10=$self; //@line 1355 "_hotshot.c"
        var $11=$10+16; //@line 1355 "_hotshot.c"
        HEAP[$11]=0; //@line 1355 "_hotshot.c"
        var $12=$self; //@line 1356 "_hotshot.c"
        var $13=$12+8; //@line 1356 "_hotshot.c"
        HEAP[$13]=0; //@line 1356 "_hotshot.c"
        var $14=HEAP[$filename]; //@line 1357 "_hotshot.c"
        var $15=___01fopen64_($14, __str33); //@line 1357 "_hotshot.c"
        var $16=$self; //@line 1357 "_hotshot.c"
        var $17=$16+12; //@line 1357 "_hotshot.c"
        HEAP[$17]=$15; //@line 1357 "_hotshot.c"
        var $18=$self; //@line 1358 "_hotshot.c"
        var $19=$18+12; //@line 1358 "_hotshot.c"
        var $20=HEAP[$19]; //@line 1358 "_hotshot.c"
        var $21=($20)==0; //@line 1358 "_hotshot.c"
        if ($21) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1358 "_hotshot.c"
      case 3: // $bb2
        var $22=HEAP[$filename]; //@line 1359 "_hotshot.c"
        var $23=HEAP[_PyExc_IOError]; //@line 1359 "_hotshot.c"
        var $24=_PyErr_SetFromErrnoWithFilename($23, $22); //@line 1359 "_hotshot.c"
        __label__ = 14; break; //@line 1359 "_hotshot.c"
      case 4: // $bb3
        var $25=_PyDict_New(); //@line 1362 "_hotshot.c"
        var $26=$self; //@line 1362 "_hotshot.c"
        var $27=$26+8; //@line 1362 "_hotshot.c"
        HEAP[$27]=$25; //@line 1362 "_hotshot.c"
        var $28=$self; //@line 1363 "_hotshot.c"
        var $29=$28+8; //@line 1363 "_hotshot.c"
        var $30=HEAP[$29]; //@line 1363 "_hotshot.c"
        var $31=($30)==0; //@line 1363 "_hotshot.c"
        if ($31) { __label__ = 14; break; } else { __label__ = 5; break; } //@line 1363 "_hotshot.c"
      case 5: // $bb4
        var $32=$self; //@line 1367 "_hotshot.c"
        var $33=$32+12; //@line 1367 "_hotshot.c"
        var $34=HEAP[$33]; //@line 1367 "_hotshot.c"
        var $35=_fgetc($34); //@line 1367 "_hotshot.c"
        $c=$35; //@line 1367 "_hotshot.c"
        var $36=($35)==-1; //@line 1367 "_hotshot.c"
        if ($36) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1367 "_hotshot.c"
      case 6: // $bb5
        var $37=$self; //@line 1368 "_hotshot.c"
        _eof_error($37); //@line 1368 "_hotshot.c"
        __label__ = 14; break; //@line 1368 "_hotshot.c"
      case 7: // $bb6
        var $38=$c; //@line 1371 "_hotshot.c"
        var $39=($38)!=19; //@line 1371 "_hotshot.c"
        var $40=$self; //@line 1372 "_hotshot.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1371 "_hotshot.c"
      case 8: // $bb7
        var $41=$40+12; //@line 1372 "_hotshot.c"
        var $42=HEAP[$41]; //@line 1372 "_hotshot.c"
        var $43=$c; //@line 1372 "_hotshot.c"
        var $44=_ungetc($43, $42); //@line 1372 "_hotshot.c"
        __label__ = 13; break; //@line 1372 "_hotshot.c"
      case 9: // $bb8
        var $45=_unpack_add_info($40); //@line 1375 "_hotshot.c"
        $err=$45; //@line 1375 "_hotshot.c"
        var $46=$err; //@line 1376 "_hotshot.c"
        var $47=($46)!=0; //@line 1376 "_hotshot.c"
        if ($47) { __label__ = 10; break; } else { __label__ = 5; break; } //@line 1376 "_hotshot.c"
      case 10: // $bb9
        var $48=$err; //@line 1377 "_hotshot.c"
        var $49=($48)==-1; //@line 1377 "_hotshot.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1377 "_hotshot.c"
      case 11: // $bb10
        var $50=$self; //@line 1378 "_hotshot.c"
        _eof_error($50); //@line 1378 "_hotshot.c"
        __label__ = 14; break; //@line 1378 "_hotshot.c"
      case 12: // $bb11
        var $51=HEAP[_PyExc_RuntimeError]; //@line 1380 "_hotshot.c"
        _PyErr_SetString($51, __str34); //@line 1380 "_hotshot.c"
        __label__ = 14; break; //@line 1380 "_hotshot.c"
      case 13: // $bb14
        var $52=$self; //@line 1387 "_hotshot.c"
        var $53=$52; //@line 1387 "_hotshot.c"
        $0=$53; //@line 1387 "_hotshot.c"
        __label__ = 17; break; //@line 1387 "_hotshot.c"
      case 14: // $error
        var $54=$self; //@line 1389 "_hotshot.c"
        var $55=$54; //@line 1389 "_hotshot.c"
        var $56=$55; //@line 1389 "_hotshot.c"
        var $57=HEAP[$56]; //@line 1389 "_hotshot.c"
        var $58=($57) - 1; //@line 1389 "_hotshot.c"
        var $59=$55; //@line 1389 "_hotshot.c"
        HEAP[$59]=$58; //@line 1389 "_hotshot.c"
        var $60=$55; //@line 1389 "_hotshot.c"
        var $61=HEAP[$60]; //@line 1389 "_hotshot.c"
        var $62=($61)==0; //@line 1389 "_hotshot.c"
        if ($62) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1389 "_hotshot.c"
      case 15: // $bb15
        var $63=$self; //@line 1389 "_hotshot.c"
        var $64=$63; //@line 1389 "_hotshot.c"
        var $65=$64+4; //@line 1389 "_hotshot.c"
        var $66=HEAP[$65]; //@line 1389 "_hotshot.c"
        var $67=$66+24; //@line 1389 "_hotshot.c"
        var $68=HEAP[$67]; //@line 1389 "_hotshot.c"
        var $69=$self; //@line 1389 "_hotshot.c"
        var $70=$69; //@line 1389 "_hotshot.c"
        FUNCTION_TABLE[$68]($70); //@line 1389 "_hotshot.c"
        __label__ = 16; break; //@line 1389 "_hotshot.c"
      case 16: // $bb16
        $0=0; //@line 1390 "_hotshot.c"
        __label__ = 17; break; //@line 1390 "_hotshot.c"
      case 17: // $bb17
        var $71=$0; //@line 1387 "_hotshot.c"
        $retval=$71; //@line 1387 "_hotshot.c"
        var $retval18=$retval; //@line 1387 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1387 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_version_string() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval;
        var $0;
        var $rev;
        var $buffer;
        var $i;
        $rev=__str35; //@line 1403 "_hotshot.c"
        $i=0; //@line 1405 "_hotshot.c"
        __label__ = 2; break; //@line 1405 "_hotshot.c"
      case 1: // $bb
        var $1=$rev; //@line 1408 "_hotshot.c"
        var $2=$1+1; //@line 1408 "_hotshot.c"
        $rev=$2; //@line 1408 "_hotshot.c"
        __label__ = 2; break; //@line 1408 "_hotshot.c"
      case 2: // $bb1
        var $3=$rev; //@line 1407 "_hotshot.c"
        var $4=HEAP[$3]; //@line 1407 "_hotshot.c"
        var $5=($4)==0; //@line 1407 "_hotshot.c"
        if ($5) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1407 "_hotshot.c"
      case 3: // $bb2
        var $6=___ctype_b_loc(); //@line 1407 "_hotshot.c"
        var $7=HEAP[$6]; //@line 1407 "_hotshot.c"
        var $8=$rev; //@line 1407 "_hotshot.c"
        var $9=HEAP[$8]; //@line 1407 "_hotshot.c"
        var $10=($9); //@line 1407 "_hotshot.c"
        var $11=$7+2*$10; //@line 1407 "_hotshot.c"
        var $12=HEAP[$11]; //@line 1407 "_hotshot.c"
        var $13=($12); //@line 1407 "_hotshot.c"
        var $14=($13) & 2048; //@line 1407 "_hotshot.c"
        var $15=($14)==0; //@line 1407 "_hotshot.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 1407 "_hotshot.c"
      case 4: // $bb4
        var $16=$i; //@line 1410 "_hotshot.c"
        var $17=($16) + 1; //@line 1410 "_hotshot.c"
        $i=$17; //@line 1410 "_hotshot.c"
        __label__ = 5; break; //@line 1410 "_hotshot.c"
      case 5: // $bb5
        var $18=$rev; //@line 1409 "_hotshot.c"
        var $19=$i; //@line 1409 "_hotshot.c"
        var $20=$18+$19; //@line 1409 "_hotshot.c"
        var $21=HEAP[$20]; //@line 1409 "_hotshot.c"
        var $22=($21)==32; //@line 1409 "_hotshot.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1409 "_hotshot.c"
      case 6: // $bb6
        var $23=$rev; //@line 1409 "_hotshot.c"
        var $24=$i; //@line 1409 "_hotshot.c"
        var $25=$23+$24; //@line 1409 "_hotshot.c"
        var $26=HEAP[$25]; //@line 1409 "_hotshot.c"
        var $27=($26)!=0; //@line 1409 "_hotshot.c"
        if ($27) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 1409 "_hotshot.c"
      case 7: // $bb7
        var $28=$i; //@line 1411 "_hotshot.c"
        var $29=($28) + 1; //@line 1411 "_hotshot.c"
        var $30=_malloc($29); //@line 1411 "_hotshot.c"
        $buffer=$30; //@line 1411 "_hotshot.c"
        var $31=($30)!=0; //@line 1412 "_hotshot.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1412 "_hotshot.c"
      case 8: // $bb8
        var $32=$i; //@line 1413 "_hotshot.c"
        var $33=$buffer; //@line 1413 "_hotshot.c"
        var $34=$rev; //@line 1413 "_hotshot.c"
        _llvm_memmove_p0i8_p0i8_i32($33, $34, $32, 1, 0); //@line 1413 "_hotshot.c"
        var $35=$buffer; //@line 1414 "_hotshot.c"
        var $36=$i; //@line 1414 "_hotshot.c"
        var $37=$35+$36; //@line 1414 "_hotshot.c"
        HEAP[$37]=0; //@line 1414 "_hotshot.c"
        __label__ = 9; break; //@line 1414 "_hotshot.c"
      case 9: // $bb9
        var $38=$buffer; //@line 1416 "_hotshot.c"
        $0=$38; //@line 1416 "_hotshot.c"
        var $39=$0; //@line 1416 "_hotshot.c"
        $retval=$39; //@line 1416 "_hotshot.c"
        var $retval10=$retval; //@line 1416 "_hotshot.c"
        ;
        return $retval10; //@line 1416 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _write_header($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4096; _memset(__stackBase__, 0, 4096);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $iftmp_79;
        var $iftmp_78;
        var $iftmp_77;
        var $0;
        var $buffer;
        var $cwdbuffer=__stackBase__;
        var $temp;
        var $i;
        var $len;
        var $item;
        $self_addr=$self;
        var $1=_get_version_string(); //@line 1430 "_hotshot.c"
        $buffer=$1; //@line 1430 "_hotshot.c"
        var $2=$buffer; //@line 1431 "_hotshot.c"
        var $3=($2)==0; //@line 1431 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1431 "_hotshot.c"
      case 1: // $bb
        var $4=_PyErr_NoMemory(); //@line 1432 "_hotshot.c"
        $0=-1; //@line 1433 "_hotshot.c"
        __label__ = 23; break; //@line 1433 "_hotshot.c"
      case 2: // $bb1
        var $5=$self_addr; //@line 1435 "_hotshot.c"
        var $6=$buffer; //@line 1435 "_hotshot.c"
        var $7=_pack_add_info($5, __str36, $6); //@line 1435 "_hotshot.c"
        var $8=$self_addr; //@line 1436 "_hotshot.c"
        var $9=$8+10272; //@line 1436 "_hotshot.c"
        var $10=HEAP[$9]; //@line 1436 "_hotshot.c"
        var $11=($10)!=0; //@line 1436 "_hotshot.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1436 "_hotshot.c"
      case 3: // $bb2
        $iftmp_77=__str37; //@line 1436 "_hotshot.c"
        __label__ = 5; break; //@line 1436 "_hotshot.c"
      case 4: // $bb3
        $iftmp_77=__str38; //@line 1436 "_hotshot.c"
        __label__ = 5; break; //@line 1436 "_hotshot.c"
      case 5: // $bb4
        var $12=$self_addr; //@line 1436 "_hotshot.c"
        var $13=$iftmp_77; //@line 1436 "_hotshot.c"
        var $14=_pack_add_info($12, __str39, $13); //@line 1436 "_hotshot.c"
        var $15=$self_addr; //@line 1438 "_hotshot.c"
        var $16=$15+10264; //@line 1438 "_hotshot.c"
        var $17=HEAP[$16]; //@line 1438 "_hotshot.c"
        var $18=($17)!=0; //@line 1438 "_hotshot.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1438 "_hotshot.c"
      case 6: // $bb5
        $iftmp_78=__str37; //@line 1438 "_hotshot.c"
        __label__ = 8; break; //@line 1438 "_hotshot.c"
      case 7: // $bb6
        $iftmp_78=__str38; //@line 1438 "_hotshot.c"
        __label__ = 8; break; //@line 1438 "_hotshot.c"
      case 8: // $bb7
        var $19=$self_addr; //@line 1438 "_hotshot.c"
        var $20=$iftmp_78; //@line 1438 "_hotshot.c"
        var $21=_pack_add_info($19, __str40, $20); //@line 1438 "_hotshot.c"
        var $22=$self_addr; //@line 1440 "_hotshot.c"
        var $23=$22+10268; //@line 1440 "_hotshot.c"
        var $24=HEAP[$23]; //@line 1440 "_hotshot.c"
        var $25=($24)!=0; //@line 1440 "_hotshot.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1440 "_hotshot.c"
      case 9: // $bb8
        $iftmp_79=__str37; //@line 1440 "_hotshot.c"
        __label__ = 11; break; //@line 1440 "_hotshot.c"
      case 10: // $bb9
        $iftmp_79=__str38; //@line 1440 "_hotshot.c"
        __label__ = 11; break; //@line 1440 "_hotshot.c"
      case 11: // $bb10
        var $26=$self_addr; //@line 1440 "_hotshot.c"
        var $27=$iftmp_79; //@line 1440 "_hotshot.c"
        var $28=_pack_add_info($26, __str41, $27); //@line 1440 "_hotshot.c"
        var $29=_Py_GetPlatform(); //@line 1442 "_hotshot.c"
        var $30=$self_addr; //@line 1442 "_hotshot.c"
        var $31=_pack_add_info($30, __str42, $29); //@line 1442 "_hotshot.c"
        var $32=_Py_GetProgramFullPath(); //@line 1443 "_hotshot.c"
        var $33=$self_addr; //@line 1443 "_hotshot.c"
        var $34=_pack_add_info($33, __str43, $32); //@line 1443 "_hotshot.c"
        var $35=$buffer; //@line 1444 "_hotshot.c"
        _free($35); //@line 1444 "_hotshot.c"
        var $36=_Py_GetVersion(); //@line 1445 "_hotshot.c"
        $buffer=$36; //@line 1445 "_hotshot.c"
        var $37=($36)==0; //@line 1446 "_hotshot.c"
        if ($37) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1446 "_hotshot.c"
      case 12: // $bb11
        _PyErr_Clear(); //@line 1447 "_hotshot.c"
        __label__ = 14; break; //@line 1447 "_hotshot.c"
      case 13: // $bb12
        var $38=$self_addr; //@line 1449 "_hotshot.c"
        var $39=$buffer; //@line 1449 "_hotshot.c"
        var $40=_pack_add_info($38, __str44, $39); //@line 1449 "_hotshot.c"
        __label__ = 14; break; //@line 1449 "_hotshot.c"
      case 14: // $bb13
        var $41=HEAP[_rusage_diff]; //@line 1455 "_hotshot.c"
        var $cwdbuffer14=$cwdbuffer; //@line 1455 "_hotshot.c"
        var $42=_PyOS_snprintf($cwdbuffer14, 4096, __str45, allocate([$41,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1455 "_hotshot.c"
        var $43=$self_addr; //@line 1456 "_hotshot.c"
        var $cwdbuffer15=$cwdbuffer; //@line 1456 "_hotshot.c"
        var $44=_pack_add_info($43, __str46, $cwdbuffer15); //@line 1456 "_hotshot.c"
        var $45=HEAP[_timeofday_diff]; //@line 1457 "_hotshot.c"
        var $cwdbuffer16=$cwdbuffer; //@line 1457 "_hotshot.c"
        var $46=_PyOS_snprintf($cwdbuffer16, 4096, __str45, allocate([$45,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1457 "_hotshot.c"
        var $47=$self_addr; //@line 1458 "_hotshot.c"
        var $cwdbuffer17=$cwdbuffer; //@line 1458 "_hotshot.c"
        var $48=_pack_add_info($47, __str47, $cwdbuffer17); //@line 1458 "_hotshot.c"
        var $cwdbuffer18=$cwdbuffer; //@line 1461 "_hotshot.c"
        var $49=_getcwd($cwdbuffer18, 4096); //@line 1461 "_hotshot.c"
        var $50=$self_addr; //@line 1461 "_hotshot.c"
        var $51=_pack_add_info($50, __str48, $49); //@line 1461 "_hotshot.c"
        var $52=_PySys_GetObject(__str49); //@line 1464 "_hotshot.c"
        $temp=$52; //@line 1464 "_hotshot.c"
        var $53=($52)==0; //@line 1465 "_hotshot.c"
        if ($53) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 1465 "_hotshot.c"
      case 15: // $bb19
        var $54=$temp; //@line 1465 "_hotshot.c"
        var $55=$54+4; //@line 1465 "_hotshot.c"
        var $56=HEAP[$55]; //@line 1465 "_hotshot.c"
        var $57=$56+84; //@line 1465 "_hotshot.c"
        var $58=HEAP[$57]; //@line 1465 "_hotshot.c"
        var $59=($58) & 33554432; //@line 1465 "_hotshot.c"
        var $60=($59)==0; //@line 1465 "_hotshot.c"
        if ($60) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1465 "_hotshot.c"
      case 16: // $bb20
        var $61=HEAP[_PyExc_RuntimeError]; //@line 1466 "_hotshot.c"
        _PyErr_SetString($61, __str50); //@line 1466 "_hotshot.c"
        $0=-1; //@line 1467 "_hotshot.c"
        __label__ = 23; break; //@line 1467 "_hotshot.c"
      case 17: // $bb21
        var $62=$temp; //@line 1469 "_hotshot.c"
        var $63=$62; //@line 1469 "_hotshot.c"
        var $64=$63+8; //@line 1469 "_hotshot.c"
        var $65=HEAP[$64]; //@line 1469 "_hotshot.c"
        $len=$65; //@line 1469 "_hotshot.c"
        $i=0; //@line 1470 "_hotshot.c"
        var $66=$i; //@line 1470 "_hotshot.c"
        var $67=$len; //@line 1470 "_hotshot.c"
        var $68=($66) < ($67); //@line 1470 "_hotshot.c"
        if ($68) { __label__ = 18; break; } else { __label__ = 22; break; } //@line 1470 "_hotshot.c"
      case 18: // $bb22
        var $69=$temp; //@line 1471 "_hotshot.c"
        var $70=$69; //@line 1471 "_hotshot.c"
        var $71=$70+12; //@line 1471 "_hotshot.c"
        var $72=HEAP[$71]; //@line 1471 "_hotshot.c"
        var $73=$i; //@line 1471 "_hotshot.c"
        var $74=$72+4*$73; //@line 1471 "_hotshot.c"
        var $75=HEAP[$74]; //@line 1471 "_hotshot.c"
        $item=$75; //@line 1471 "_hotshot.c"
        var $76=$item; //@line 1472 "_hotshot.c"
        var $77=_PyString_AsString($76); //@line 1472 "_hotshot.c"
        $buffer=$77; //@line 1472 "_hotshot.c"
        var $78=($77)==0; //@line 1473 "_hotshot.c"
        var $79=$self_addr; //@line 1474 "_hotshot.c"
        if ($78) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1473 "_hotshot.c"
      case 19: // $bb23
        var $80=_pack_add_info($79, __str51, __str52); //@line 1474 "_hotshot.c"
        _PyErr_Clear(); //@line 1475 "_hotshot.c"
        __label__ = 21; break; //@line 1475 "_hotshot.c"
      case 20: // $bb24
        var $81=$buffer; //@line 1478 "_hotshot.c"
        var $82=_pack_add_info($79, __str51, $81); //@line 1478 "_hotshot.c"
        __label__ = 21; break; //@line 1478 "_hotshot.c"
      case 21: // $bb25
        var $83=$i; //@line 1470 "_hotshot.c"
        var $84=($83) + 1; //@line 1470 "_hotshot.c"
        $i=$84; //@line 1470 "_hotshot.c"
        var $85=$i; //@line 1470 "_hotshot.c"
        var $86=$len; //@line 1470 "_hotshot.c"
        var $87=($85) < ($86); //@line 1470 "_hotshot.c"
        if ($87) { __label__ = 18; break; } else { __label__ = 22; break; } //@line 1470 "_hotshot.c"
      case 22: // $bb27
        var $88=$self_addr; //@line 1481 "_hotshot.c"
        _pack_frame_times($88); //@line 1481 "_hotshot.c"
        var $89=$self_addr; //@line 1482 "_hotshot.c"
        _pack_line_times($89); //@line 1482 "_hotshot.c"
        $0=0; //@line 1484 "_hotshot.c"
        __label__ = 23; break; //@line 1484 "_hotshot.c"
      case 23: // $bb28
        var $90=$0; //@line 1433 "_hotshot.c"
        $retval=$90; //@line 1433 "_hotshot.c"
        var $retval29=$retval; //@line 1433 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 1433 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _hotshot_profiler($unused, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $unused_addr;
        var $args_addr;
        var $retval;
        var $iftmp_86;
        var $0;
        var $logfilename=__stackBase__;
        var $self;
        var $lineevents=__stackBase__+4;
        var $linetimings=__stackBase__+8;
        $unused_addr=$unused;
        $args_addr=$args;
        $self=0; //@line 1495 "_hotshot.c"
        HEAP[$lineevents]=0; //@line 1496 "_hotshot.c"
        HEAP[$linetimings]=1; //@line 1497 "_hotshot.c"
        var $1=$args_addr; //@line 1499 "_hotshot.c"
        var $2=_PyArg_ParseTuple($1, __str53, allocate([$logfilename,0,0,0,$lineevents,0,0,0,$linetimings,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1499 "_hotshot.c"
        var $3=($2)!=0; //@line 1499 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 21; break; } //@line 1499 "_hotshot.c"
      case 1: // $bb
        var $4=__PyObject_New(_ProfilerType); //@line 1501 "_hotshot.c"
        var $5=$4; //@line 1501 "_hotshot.c"
        $self=$5; //@line 1501 "_hotshot.c"
        var $6=$self; //@line 1502 "_hotshot.c"
        var $7=($6)==0; //@line 1502 "_hotshot.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1502 "_hotshot.c"
      case 2: // $bb1
        $0=0; //@line 1503 "_hotshot.c"
        __label__ = 22; break; //@line 1503 "_hotshot.c"
      case 3: // $bb2
        var $8=$self; //@line 1504 "_hotshot.c"
        var $9=$8+10272; //@line 1504 "_hotshot.c"
        HEAP[$9]=1; //@line 1504 "_hotshot.c"
        var $10=HEAP[$lineevents]; //@line 1505 "_hotshot.c"
        var $11=($10)!=0; //@line 1505 "_hotshot.c"
        var $12=($11); //@line 1505 "_hotshot.c"
        var $13=$self; //@line 1505 "_hotshot.c"
        var $14=$13+10264; //@line 1505 "_hotshot.c"
        HEAP[$14]=$12; //@line 1505 "_hotshot.c"
        var $15=HEAP[$lineevents]; //@line 1506 "_hotshot.c"
        var $16=($15)==0; //@line 1506 "_hotshot.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 1506 "_hotshot.c"
      case 4: // $bb3
        var $17=HEAP[$linetimings]; //@line 1506 "_hotshot.c"
        var $18=($17)==0; //@line 1506 "_hotshot.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 1506 "_hotshot.c"
      case 5: // $bb4
        $iftmp_86=1; //@line 1506 "_hotshot.c"
        __label__ = 7; break; //@line 1506 "_hotshot.c"
      case 6: // $bb5
        $iftmp_86=0; //@line 1506 "_hotshot.c"
        __label__ = 7; break; //@line 1506 "_hotshot.c"
      case 7: // $bb6
        var $19=$self; //@line 1506 "_hotshot.c"
        var $20=$19+10268; //@line 1506 "_hotshot.c"
        var $21=$iftmp_86; //@line 1506 "_hotshot.c"
        HEAP[$20]=$21; //@line 1506 "_hotshot.c"
        var $22=$self; //@line 1507 "_hotshot.c"
        var $23=$22+16; //@line 1507 "_hotshot.c"
        HEAP[$23]=0; //@line 1507 "_hotshot.c"
        var $24=$self; //@line 1508 "_hotshot.c"
        var $25=$24+10276; //@line 1508 "_hotshot.c"
        HEAP[$25]=0; //@line 1508 "_hotshot.c"
        var $26=$self; //@line 1509 "_hotshot.c"
        var $27=$26+10280; //@line 1509 "_hotshot.c"
        HEAP[$27]=0; //@line 1509 "_hotshot.c"
        var $28=$self; //@line 1510 "_hotshot.c"
        var $29=$28+10260; //@line 1510 "_hotshot.c"
        HEAP[$29]=0; //@line 1510 "_hotshot.c"
        var $30=$args_addr; //@line 1511 "_hotshot.c"
        var $31=$30; //@line 1511 "_hotshot.c"
        var $32=$31+12; //@line 1511 "_hotshot.c"
        var $33=$32; //@line 1511 "_hotshot.c"
        var $34=HEAP[$33]; //@line 1511 "_hotshot.c"
        var $35=$self; //@line 1511 "_hotshot.c"
        var $36=$35+12; //@line 1511 "_hotshot.c"
        HEAP[$36]=$34; //@line 1511 "_hotshot.c"
        var $37=$self; //@line 1512 "_hotshot.c"
        var $38=$37+12; //@line 1512 "_hotshot.c"
        var $39=HEAP[$38]; //@line 1512 "_hotshot.c"
        var $40=$39; //@line 1512 "_hotshot.c"
        var $41=HEAP[$40]; //@line 1512 "_hotshot.c"
        var $42=($41) + 1; //@line 1512 "_hotshot.c"
        var $43=$39; //@line 1512 "_hotshot.c"
        HEAP[$43]=$42; //@line 1512 "_hotshot.c"
        var $44=_PyDict_New(); //@line 1513 "_hotshot.c"
        var $45=$self; //@line 1513 "_hotshot.c"
        var $46=$45+8; //@line 1513 "_hotshot.c"
        HEAP[$46]=$44; //@line 1513 "_hotshot.c"
        var $47=$self; //@line 1514 "_hotshot.c"
        var $48=$47+8; //@line 1514 "_hotshot.c"
        var $49=HEAP[$48]; //@line 1514 "_hotshot.c"
        var $50=($49)==0; //@line 1514 "_hotshot.c"
        if ($50) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1514 "_hotshot.c"
      case 8: // $bb7
        var $51=$self; //@line 1515 "_hotshot.c"
        var $52=$51; //@line 1515 "_hotshot.c"
        var $53=$52; //@line 1515 "_hotshot.c"
        var $54=HEAP[$53]; //@line 1515 "_hotshot.c"
        var $55=($54) - 1; //@line 1515 "_hotshot.c"
        var $56=$52; //@line 1515 "_hotshot.c"
        HEAP[$56]=$55; //@line 1515 "_hotshot.c"
        var $57=$52; //@line 1515 "_hotshot.c"
        var $58=HEAP[$57]; //@line 1515 "_hotshot.c"
        var $59=($58)==0; //@line 1515 "_hotshot.c"
        if ($59) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1515 "_hotshot.c"
      case 9: // $bb8
        var $60=$self; //@line 1515 "_hotshot.c"
        var $61=$60; //@line 1515 "_hotshot.c"
        var $62=$61+4; //@line 1515 "_hotshot.c"
        var $63=HEAP[$62]; //@line 1515 "_hotshot.c"
        var $64=$63+24; //@line 1515 "_hotshot.c"
        var $65=HEAP[$64]; //@line 1515 "_hotshot.c"
        var $66=$self; //@line 1515 "_hotshot.c"
        var $67=$66; //@line 1515 "_hotshot.c"
        FUNCTION_TABLE[$65]($67); //@line 1515 "_hotshot.c"
        __label__ = 10; break; //@line 1515 "_hotshot.c"
      case 10: // $bb9
        $0=0; //@line 1516 "_hotshot.c"
        __label__ = 22; break; //@line 1516 "_hotshot.c"
      case 11: // $bb10
        var $68=HEAP[$logfilename]; //@line 1518 "_hotshot.c"
        var $69=___01fopen64_($68, __str54); //@line 1518 "_hotshot.c"
        var $70=$self; //@line 1518 "_hotshot.c"
        var $71=$70+10260; //@line 1518 "_hotshot.c"
        HEAP[$71]=$69; //@line 1518 "_hotshot.c"
        var $72=$self; //@line 1519 "_hotshot.c"
        var $73=$72+10260; //@line 1519 "_hotshot.c"
        var $74=HEAP[$73]; //@line 1519 "_hotshot.c"
        var $75=($74)==0; //@line 1519 "_hotshot.c"
        if ($75) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 1519 "_hotshot.c"
      case 12: // $bb11
        var $76=$self; //@line 1520 "_hotshot.c"
        var $77=$76; //@line 1520 "_hotshot.c"
        var $78=$77; //@line 1520 "_hotshot.c"
        var $79=HEAP[$78]; //@line 1520 "_hotshot.c"
        var $80=($79) - 1; //@line 1520 "_hotshot.c"
        var $81=$77; //@line 1520 "_hotshot.c"
        HEAP[$81]=$80; //@line 1520 "_hotshot.c"
        var $82=$77; //@line 1520 "_hotshot.c"
        var $83=HEAP[$82]; //@line 1520 "_hotshot.c"
        var $84=($83)==0; //@line 1520 "_hotshot.c"
        if ($84) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1520 "_hotshot.c"
      case 13: // $bb12
        var $85=$self; //@line 1520 "_hotshot.c"
        var $86=$85; //@line 1520 "_hotshot.c"
        var $87=$86+4; //@line 1520 "_hotshot.c"
        var $88=HEAP[$87]; //@line 1520 "_hotshot.c"
        var $89=$88+24; //@line 1520 "_hotshot.c"
        var $90=HEAP[$89]; //@line 1520 "_hotshot.c"
        var $91=$self; //@line 1520 "_hotshot.c"
        var $92=$91; //@line 1520 "_hotshot.c"
        FUNCTION_TABLE[$90]($92); //@line 1520 "_hotshot.c"
        __label__ = 14; break; //@line 1520 "_hotshot.c"
      case 14: // $bb13
        var $93=HEAP[$logfilename]; //@line 1521 "_hotshot.c"
        var $94=HEAP[_PyExc_IOError]; //@line 1521 "_hotshot.c"
        var $95=_PyErr_SetFromErrnoWithFilename($94, $93); //@line 1521 "_hotshot.c"
        $0=0; //@line 1522 "_hotshot.c"
        __label__ = 22; break; //@line 1522 "_hotshot.c"
      case 15: // $bb14
        var $96=HEAP[_timeofday_diff]; //@line 1524 "_hotshot.c"
        var $97=($96)==0; //@line 1524 "_hotshot.c"
        if ($97) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1524 "_hotshot.c"
      case 16: // $bb15
        _calibrate(); //@line 1529 "_hotshot.c"
        _calibrate(); //@line 1530 "_hotshot.c"
        _calibrate(); //@line 1531 "_hotshot.c"
        __label__ = 17; break; //@line 1531 "_hotshot.c"
      case 17: // $bb16
        var $98=$self; //@line 1533 "_hotshot.c"
        var $99=_write_header($98); //@line 1533 "_hotshot.c"
        var $100=($99)!=0; //@line 1533 "_hotshot.c"
        if ($100) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 1533 "_hotshot.c"
      case 18: // $bb17
        var $101=$self; //@line 1535 "_hotshot.c"
        var $102=$101; //@line 1535 "_hotshot.c"
        var $103=$102; //@line 1535 "_hotshot.c"
        var $104=HEAP[$103]; //@line 1535 "_hotshot.c"
        var $105=($104) - 1; //@line 1535 "_hotshot.c"
        var $106=$102; //@line 1535 "_hotshot.c"
        HEAP[$106]=$105; //@line 1535 "_hotshot.c"
        var $107=$102; //@line 1535 "_hotshot.c"
        var $108=HEAP[$107]; //@line 1535 "_hotshot.c"
        var $109=($108)==0; //@line 1535 "_hotshot.c"
        if ($109) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1535 "_hotshot.c"
      case 19: // $bb18
        var $110=$self; //@line 1535 "_hotshot.c"
        var $111=$110; //@line 1535 "_hotshot.c"
        var $112=$111+4; //@line 1535 "_hotshot.c"
        var $113=HEAP[$112]; //@line 1535 "_hotshot.c"
        var $114=$113+24; //@line 1535 "_hotshot.c"
        var $115=HEAP[$114]; //@line 1535 "_hotshot.c"
        var $116=$self; //@line 1535 "_hotshot.c"
        var $117=$116; //@line 1535 "_hotshot.c"
        FUNCTION_TABLE[$115]($117); //@line 1535 "_hotshot.c"
        __label__ = 20; break; //@line 1535 "_hotshot.c"
      case 20: // $bb19
        $self=0; //@line 1536 "_hotshot.c"
        __label__ = 21; break; //@line 1536 "_hotshot.c"
      case 21: // $bb20
        var $118=$self; //@line 1539 "_hotshot.c"
        var $119=$118; //@line 1539 "_hotshot.c"
        $0=$119; //@line 1539 "_hotshot.c"
        __label__ = 22; break; //@line 1539 "_hotshot.c"
      case 22: // $bb21
        var $120=$0; //@line 1503 "_hotshot.c"
        $retval=$120; //@line 1503 "_hotshot.c"
        var $retval22=$retval; //@line 1503 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 1503 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _hotshot_coverage($unused, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $unused_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $logfilename=__stackBase__;
        var $result;
        var $self;
        $unused_addr=$unused;
        $args_addr=$args;
        $result=0; //@line 1551 "_hotshot.c"
        var $1=$args_addr; //@line 1553 "_hotshot.c"
        var $2=_PyArg_ParseTuple($1, __str55, allocate([$logfilename,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 1553 "_hotshot.c"
        var $3=($2)!=0; //@line 1553 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1553 "_hotshot.c"
      case 1: // $bb
        var $4=$unused_addr; //@line 1554 "_hotshot.c"
        var $5=$args_addr; //@line 1554 "_hotshot.c"
        var $6=_hotshot_profiler($4, $5); //@line 1554 "_hotshot.c"
        $result=$6; //@line 1554 "_hotshot.c"
        var $7=$result; //@line 1555 "_hotshot.c"
        var $8=($7)!=0; //@line 1555 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1555 "_hotshot.c"
      case 2: // $bb1
        var $9=$result; //@line 1556 "_hotshot.c"
        var $10=$9; //@line 1556 "_hotshot.c"
        $self=$10; //@line 1556 "_hotshot.c"
        var $11=$self; //@line 1557 "_hotshot.c"
        var $12=$11+10272; //@line 1557 "_hotshot.c"
        HEAP[$12]=0; //@line 1557 "_hotshot.c"
        var $13=$self; //@line 1558 "_hotshot.c"
        var $14=$13+10268; //@line 1558 "_hotshot.c"
        HEAP[$14]=0; //@line 1558 "_hotshot.c"
        var $15=$self; //@line 1559 "_hotshot.c"
        var $16=$15+10264; //@line 1559 "_hotshot.c"
        HEAP[$16]=1; //@line 1559 "_hotshot.c"
        __label__ = 3; break; //@line 1559 "_hotshot.c"
      case 3: // $bb2
        var $17=$result; //@line 1562 "_hotshot.c"
        $0=$17; //@line 1562 "_hotshot.c"
        var $18=$0; //@line 1562 "_hotshot.c"
        $retval=$18; //@line 1562 "_hotshot.c"
        var $retval3=$retval; //@line 1562 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1562 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _hotshot_resolution($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=HEAP[_timeofday_diff]; //@line 1585 "_hotshot.c"
        var $2=($1)==0; //@line 1585 "_hotshot.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1585 "_hotshot.c"
      case 1: // $bb
        _calibrate(); //@line 1586 "_hotshot.c"
        _calibrate(); //@line 1587 "_hotshot.c"
        _calibrate(); //@line 1588 "_hotshot.c"
        __label__ = 2; break; //@line 1588 "_hotshot.c"
      case 2: // $bb1
        var $3=HEAP[_rusage_diff]; //@line 1593 "_hotshot.c"
        var $4=HEAP[_timeofday_diff]; //@line 1593 "_hotshot.c"
        var $5=_Py_BuildValue(__str56, allocate([$4,0,0,0,$3,0,0,0], ["i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1593 "_hotshot.c"
        $0=$5; //@line 1593 "_hotshot.c"
        var $6=$0; //@line 1593 "_hotshot.c"
        $retval=$6; //@line 1593 "_hotshot.c"
        var $retval2=$retval; //@line 1593 "_hotshot.c"
        ;
        return $retval2; //@line 1593 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_hotshot() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module;
        var $s;
        HEAP[_LogReaderType+4]=_PyType_Type; //@line 1612 "_hotshot.c"
        HEAP[_ProfilerType+4]=_PyType_Type; //@line 1613 "_hotshot.c"
        var $0=_Py_InitModule4(__str61, _functions, 0, 0, 1013); //@line 1614 "_hotshot.c"
        $module=$0; //@line 1614 "_hotshot.c"
        var $1=$module; //@line 1615 "_hotshot.c"
        var $2=($1)!=0; //@line 1615 "_hotshot.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 1615 "_hotshot.c"
      case 1: // $bb
        var $3=_get_version_string(); //@line 1616 "_hotshot.c"
        $s=$3; //@line 1616 "_hotshot.c"
        var $4=$module; //@line 1618 "_hotshot.c"
        var $5=$s; //@line 1618 "_hotshot.c"
        var $6=_PyModule_AddStringConstant($4, __str62, $5); //@line 1618 "_hotshot.c"
        var $7=$s; //@line 1619 "_hotshot.c"
        _free($7); //@line 1619 "_hotshot.c"
        var $8=HEAP[_LogReaderType]; //@line 1620 "_hotshot.c"
        var $9=($8) + 1; //@line 1620 "_hotshot.c"
        HEAP[_LogReaderType]=$9; //@line 1620 "_hotshot.c"
        var $10=$module; //@line 1621 "_hotshot.c"
        var $11=_PyModule_AddObject($10, __str63, _LogReaderType); //@line 1621 "_hotshot.c"
        var $12=HEAP[_ProfilerType]; //@line 1623 "_hotshot.c"
        var $13=($12) + 1; //@line 1623 "_hotshot.c"
        HEAP[_ProfilerType]=$13; //@line 1623 "_hotshot.c"
        var $14=$module; //@line 1624 "_hotshot.c"
        var $15=_PyModule_AddObject($14, __str64, _ProfilerType); //@line 1624 "_hotshot.c"
        var $16=HEAP[_ProfilerError]; //@line 1627 "_hotshot.c"
        var $17=($16)==0; //@line 1627 "_hotshot.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1627 "_hotshot.c"
      case 2: // $bb2
        var $18=_PyErr_NewException(__str65, 0, 0); //@line 1628 "_hotshot.c"
        HEAP[_ProfilerError]=$18; //@line 1628 "_hotshot.c"
        var $19=($18)!=0; //@line 1630 "_hotshot.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1630 "_hotshot.c"
      case 3: // $bb3
        var $20=HEAP[_ProfilerError]; //@line 1631 "_hotshot.c"
        var $21=$20; //@line 1631 "_hotshot.c"
        var $22=HEAP[$21]; //@line 1631 "_hotshot.c"
        var $23=($22) + 1; //@line 1631 "_hotshot.c"
        var $24=$20; //@line 1631 "_hotshot.c"
        HEAP[$24]=$23; //@line 1631 "_hotshot.c"
        var $25=HEAP[_ProfilerError]; //@line 1632 "_hotshot.c"
        var $26=$module; //@line 1632 "_hotshot.c"
        var $27=_PyModule_AddObject($26, __str66, $25); //@line 1632 "_hotshot.c"
        __label__ = 4; break; //@line 1632 "_hotshot.c"
      case 4: // $bb4
        var $28=$module; //@line 1634 "_hotshot.c"
        var $29=_PyModule_AddIntConstant($28, __str67, 0); //@line 1634 "_hotshot.c"
        var $30=$module; //@line 1635 "_hotshot.c"
        var $31=_PyModule_AddIntConstant($30, __str68, 1); //@line 1635 "_hotshot.c"
        var $32=$module; //@line 1636 "_hotshot.c"
        var $33=_PyModule_AddIntConstant($32, __str69, 2); //@line 1636 "_hotshot.c"
        var $34=$module; //@line 1637 "_hotshot.c"
        var $35=_PyModule_AddIntConstant($34, __str70, 3); //@line 1637 "_hotshot.c"
        var $36=$module; //@line 1638 "_hotshot.c"
        var $37=_PyModule_AddIntConstant($36, __str71, 19); //@line 1638 "_hotshot.c"
        var $38=$module; //@line 1639 "_hotshot.c"
        var $39=_PyModule_AddIntConstant($38, __str72, 35); //@line 1639 "_hotshot.c"
        var $40=$module; //@line 1640 "_hotshot.c"
        var $41=_PyModule_AddIntConstant($40, __str73, 67); //@line 1640 "_hotshot.c"
        var $42=$module; //@line 1641 "_hotshot.c"
        var $43=_PyModule_AddIntConstant($42, __str74, 51); //@line 1641 "_hotshot.c"
        __label__ = 5; break; //@line 1641 "_hotshot.c"
      case 5: // $return
        ;
        return; //@line 1643 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_hotshot"] = _init_hotshot;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_tracer_callback,0,_profiler_addinfo,0,_profiler_close,0,_profiler_fileno,0,_profiler_runcall,0,_profiler_runcode,0,_profiler_start,0,_profiler_stop,0,_profiler_get_closed,0,_profiler_dealloc,0,_PyObject_GenericGetAttr,0,_logreader_close,0,_logreader_fileno,0,_logreader_sq_item,0,_logreader_get_closed,0,_logreader_dealloc,0,_PyObject_SelfIter,0,_logreader_tp_iternext,0,_hotshot_coverage,0,_hotshot_profiler,0,_hotshot_logreader,0,_hotshot_resolution,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_ProfilerError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_logreader_close__doc__=allocate([99,108,111,115,101,40,41,10,67,108,111,115,101,32,116,104,101,32,108,111,103,32,102,105,108,101,44,32,112,114,101,118,101,110,116,105,110,103,32,97,100,100,105,116,105,111,110,97,108,32,114,101,99,111,114,100,115,32,102,114,111,109,32,98,101,105,110,103,32,114,101,97,100,46,0] /* close()\0AClose the  */, "i8", ALLOC_NORMAL);
_logreader_fileno__doc__=allocate([102,105,108,101,110,111,40,41,32,45,62,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,10,82,101,116,117,114,110,115,32,116,104,101,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,111,114,32,116,104,101,32,108,111,103,32,102,105,108,101,44,32,105,102,32,111,112,101,110,46,10,82,97,105,115,101,115,32,86,97,108,117,101,69,114,114,111,114,32,105,102,32,116,104,101,32,108,111,103,32,102,105,108,101,32,105,115,32,99,108,111,115,101,100,46,0] /* fileno() -> file des */, "i8", ALLOC_NORMAL);
__str=allocate([108,111,103,114,101,97,100,101,114,39,115,32,102,105,108,101,32,111,98,106,101,99,116,32,97,108,114,101,97,100,121,32,99,108,111,115,101,100,0] /* logreader's file obj */, "i8", ALLOC_NORMAL);
__str1=allocate([101,110,100,32,111,102,32,102,105,108,101,32,119,105,116,104,32,105,110,99,111,109,112,108,101,116,101,32,112,114,111,102,105,108,101,32,114,101,99,111,114,100,0] /* end of file with inc */, "i8", ALLOC_NORMAL);
__str2=allocate([99,97,110,110,111,116,32,105,116,101,114,97,116,101,32,111,118,101,114,32,99,108,111,115,101,100,32,76,111,103,82,101,97,100,101,114,32,111,98,106,101,99,116,0] /* cannot iterate over  */, "i8", ALLOC_NORMAL);
__str3=allocate([117,110,107,110,111,119,110,32,114,101,99,111,114,100,32,116,121,112,101,32,105,110,32,108,111,103,32,102,105,108,101,0] /* unknown record type  */, "i8", ALLOC_NORMAL);
__str4=allocate([110,111,32,109,111,114,101,32,101,118,101,110,116,115,32,105,110,32,108,111,103,0] /* no more events in lo */, "i8", ALLOC_NORMAL);
__str5=allocate([108,101,110,32,60,32,50,49,52,55,52,56,51,54,52,55,0] /* len < 2147483647\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,95,104,111,116,115,104,111,116,46,99,0] /* ../cpython/Modules/_ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8917=allocate([112,97,99,107,95,115,116,114,105,110,103,0] /* pack_string\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([105,78,0] /* iN\00 */, "i8", ALLOC_NORMAL);
_maxvalues_8890=allocate([-1, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 7, 0, 0, 0, 15, 0, 0, 0, 31, 0, 0, 0, 63, 0, 0, 0, 127, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
_timeofday_diff=allocate(1, "i32", ALLOC_NORMAL);
_rusage_diff=allocate(1, "i32", ALLOC_NORMAL);
__str8=allocate([112,114,111,102,105,108,101,114,32,97,108,114,101,97,100,121,32,97,99,116,105,118,101,0] /* profiler already act */, "i8", ALLOC_NORMAL);
__str9=allocate([112,114,111,102,105,108,101,114,32,97,108,114,101,97,100,121,32,99,108,111,115,101,100,0] /* profiler already clo */, "i8", ALLOC_NORMAL);
_addinfo__doc__=allocate([97,100,100,105,110,102,111,40,107,101,121,44,32,118,97,108,117,101,41,10,73,110,115,101,114,116,32,97,110,32,65,68,68,95,73,78,70,79,32,114,101,99,111,114,100,32,105,110,116,111,32,116,104,101,32,108,111,103,46,0] /* addinfo(key, value)\ */, "i8", ALLOC_NORMAL);
__str10=allocate([115,115,58,97,100,100,105,110,102,111,0] /* ss:addinfo\00 */, "i8", ALLOC_NORMAL);
_close__doc__=allocate([99,108,111,115,101,40,41,10,83,104,117,116,32,100,111,119,110,32,116,104,105,115,32,112,114,111,102,105,108,101,114,32,97,110,100,32,99,108,111,115,101,32,116,104,101,32,108,111,103,32,102,105,108,101,115,44,32,101,118,101,110,32,105,102,32,105,116,115,32,97,99,116,105,118,101,46,0] /* close()\0AShut down  */, "i8", ALLOC_NORMAL);
__str11=allocate([112,114,111,102,105,108,101,114,39,115,32,102,105,108,101,32,111,98,106,101,99,116,32,97,108,114,101,97,100,121,32,99,108,111,115,101,100,0] /* profiler's file obje */, "i8", ALLOC_NORMAL);
_runcall__doc__=allocate([114,117,110,99,97,108,108,40,99,97,108,108,97,98,108,101,91,44,32,97,114,103,115,91,44,32,107,119,93,93,41,32,45,62,32,99,97,108,108,97,98,108,101,40,41,10,80,114,111,102,105,108,101,32,97,32,115,112,101,99,105,102,105,99,32,102,117,110,99,116,105,111,110,32,99,97,108,108,44,32,114,101,116,117,114,110,105,110,103,32,116,104,101,32,114,101,115,117,108,116,32,111,102,32,116,104,97,116,32,99,97,108,108,46,0] /* runcall(callable[, a */, "i8", ALLOC_NORMAL);
__str12=allocate([114,117,110,99,97,108,108,0] /* runcall\00 */, "i8", ALLOC_NORMAL);
_runcode__doc__=allocate([114,117,110,99,111,100,101,40,99,111,100,101,44,32,103,108,111,98,97,108,115,91,44,32,108,111,99,97,108,115,93,41,10,69,120,101,99,117,116,101,32,97,32,99,111,100,101,32,111,98,106,101,99,116,32,119,104,105,108,101,32,99,111,108,108,101,99,116,105,110,103,32,112,114,111,102,105,108,101,32,100,97,116,97,46,32,32,73,102,32,108,111,99,97,108,115,32,105,115,10,111,109,105,116,116,101,100,44,32,103,108,111,98,97,108,115,32,105,115,32,117,115,101,100,32,102,111,114,32,116,104,101,32,108,111,99,97,108,115,32,97,115,32,119,101,108,108,46,0] /* runcode(code, global */, "i8", ALLOC_NORMAL);
__str13=allocate([79,33,79,33,124,79,58,114,117,110,99,111,100,101,0] /* O!O!|O:runcode\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([108,111,99,97,108,115,32,109,117,115,116,32,98,101,32,97,32,100,105,99,116,105,111,110,97,114,121,32,111,114,32,78,111,110,101,0] /* locals must be a dic */, "i8", ALLOC_NORMAL);
_start__doc__=allocate([115,116,97,114,116,40,41,10,73,110,115,116,97,108,108,32,116,104,105,115,32,112,114,111,102,105,108,101,114,32,102,111,114,32,116,104,101,32,99,117,114,114,101,110,116,32,116,104,114,101,97,100,46,0] /* start()\0AInstall th */, "i8", ALLOC_NORMAL);
_stop__doc__=allocate([115,116,111,112,40,41,10,82,101,109,111,118,101,32,116,104,105,115,32,112,114,111,102,105,108,101,114,32,102,114,111,109,32,116,104,101,32,99,117,114,114,101,110,116,32,116,104,114,101,97,100,46,0] /* stop()\0ARemove this */, "i8", ALLOC_NORMAL);
__str15=allocate([112,114,111,102,105,108,101,114,32,110,111,116,32,97,99,116,105,118,101,0] /* profiler not active\ */, "i8", ALLOC_NORMAL);
__str16=allocate([97,100,100,105,110,102,111,0] /* addinfo\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([99,108,111,115,101,0] /* close\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([102,105,108,101,110,111,0] /* fileno\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([114,117,110,99,111,100,101,0] /* runcode\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([115,116,97,114,116,0] /* start\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([115,116,111,112,0] /* stop\00 */, "i8", ALLOC_NORMAL);
_profiler_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str22=allocate([102,114,97,109,101,116,105,109,105,110,103,115,0] /* frametimings\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([108,105,110,101,101,118,101,110,116,115,0] /* lineevents\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([108,105,110,101,116,105,109,105,110,103,115,0] /* linetimings\00 */, "i8", ALLOC_NORMAL);
_profiler_members=allocate([0, 0, 0, 0, 2, 0, 0, 0, 10268, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 10264, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 10268, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str25=allocate([99,108,111,115,101,100,0] /* closed\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([84,114,117,101,32,105,102,32,116,104,101,32,112,114,111,102,105,108,101,114,39,115,32,111,117,116,112,117,116,32,102,105,108,101,32,104,97,115,32,97,108,114,101,97,100,121,32,98,101,101,110,32,99,108,111,115,101,100,46,0] /* True if the profiler */, "i8", ALLOC_NORMAL);
_profiler_getsets=allocate(40, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_profiler_object__doc__=allocate([72,105,103,104,45,112,101,114,102,111,114,109,97,110,99,101,32,112,114,111,102,105,108,101,114,32,111,98,106,101,99,116,46,10,10,77,101,116,104,111,100,115,58,10,10,99,108,111,115,101,40,41,58,32,32,32,32,32,32,83,116,111,112,32,116,104,101,32,112,114,111,102,105,108,101,114,32,97,110,100,32,99,108,111,115,101,32,116,104,101,32,108,111,103,32,102,105,108,101,115,46,10,102,105,108,101,110,111,40,41,58,32,32,32,32,32,82,101,116,117,114,110,115,32,116,104,101,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,111,102,32,116,104,101,32,108,111,103,32,102,105,108,101,46,10,114,117,110,99,97,108,108,40,41,58,32,32,32,32,82,117,110,32,97,32,115,105,110,103,108,101,32,102,117,110,99,116,105,111,110,32,99,97,108,108,32,119,105,116,104,32,112,114,111,102,105,108,105,110,103,32,101,110,97,98,108,101,100,46,10,114,117,110,99,111,100,101,40,41,58,32,32,32,32,69,120,101,99,117,116,101,32,97,32,99,111,100,101,32,111,98,106,101,99,116,32,119,105,116,104,32,112,114,111,102,105,108,105,110,103,32,101,110,97,98,108,101,100,46,10,115,116,97,114,116,40,41,58,32,32,32,32,32,32,73,110,115,116,97,108,108,32,116,104,101,32,112,114,111,102,105,108,101,114,32,97,110,100,32,114,101,116,117,114,110,46,10,115,116,111,112,40,41,58,32,32,32,32,32,32,32,82,101,109,111,118,101,32,116,104,101,32,112,114,111,102,105,108,101,114,46,10,10,65,116,116,114,105,98,117,116,101,115,32,40,114,101,97,100,45,111,110,108,121,41,58,10,10,99,108,111,115,101,100,58,32,32,32,32,32,32,32,84,114,117,101,32,105,102,32,116,104,101,32,112,114,111,102,105,108,101,114,32,104,97,115,32,97,108,114,101,97,100,121,32,98,101,101,110,32,99,108,111,115,101,100,46,10,102,114,97,109,101,116,105,109,105,110,103,115,58,32,84,114,117,101,32,105,102,32,69,78,84,69,82,47,69,88,73,84,32,101,118,101,110,116,115,32,99,111,108,108,101,99,116,32,116,105,109,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,46,10,108,105,110,101,101,118,101,110,116,115,58,32,32,32,84,114,117,101,32,105,102,32,108,105,110,101,32,101,118,101,110,116,115,32,97,114,101,32,114,101,112,111,114,116,101,100,32,116,111,32,116,104,101,32,112,114,111,102,105,108,101,114,46,10,108,105,110,101,116,105,109,105,110,103,115,58,32,32,84,114,117,101,32,105,102,32,108,105,110,101,32,101,118,101,110,116,115,32,99,111,108,108,101,99,116,32,116,105,109,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,46,0] /* High-performance pro */, "i8", ALLOC_NORMAL);
__str27=allocate([95,104,111,116,115,104,111,116,46,80,114,111,102,105,108,101,114,84,121,112,101,0] /* _hotshot.ProfilerTyp */, "i8", ALLOC_NORMAL);
_ProfilerType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_logreader_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str28=allocate([105,110,102,111,0] /* info\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([68,105,99,116,105,111,110,97,114,121,32,109,97,112,112,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,97,108,32,107,101,121,115,32,116,111,32,108,105,115,116,115,32,111,102,32,118,97,108,117,101,115,46,0] /* Dictionary mapping i */, "i8", ALLOC_NORMAL);
_logreader_members=allocate([0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_logreader__doc__=allocate([108,111,103,114,101,97,100,101,114,40,102,105,108,101,110,97,109,101,41,32,45,45,62,32,108,111,103,45,105,116,101,114,97,116,111,114,10,67,114,101,97,116,101,32,97,32,108,111,103,45,114,101,97,100,101,114,32,102,111,114,32,116,104,101,32,116,105,109,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,32,102,105,108,101,46,0] /* logreader(filename)  */, "i8", ALLOC_NORMAL);
_logreader_as_sequence=allocate(40, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32, i32)*",0,0,0,"i32 (%struct.PyObject*, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0], ALLOC_NORMAL);
__str30=allocate([84,114,117,101,32,105,102,32,116,104,101,32,108,111,103,114,101,97,100,101,114,39,115,32,105,110,112,117,116,32,102,105,108,101,32,104,97,115,32,97,108,114,101,97,100,121,32,98,101,101,110,32,99,108,111,115,101,100,46,0] /* True if the logreade */, "i8", ALLOC_NORMAL);
_logreader_getsets=allocate(40, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str31=allocate([95,104,111,116,115,104,111,116,46,76,111,103,82,101,97,100,101,114,84,121,112,101,0] /* _hotshot.LogReaderTy */, "i8", ALLOC_NORMAL);
_LogReaderType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str32=allocate([115,58,108,111,103,114,101,97,100,101,114,0] /* s:logreader\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([114,98,0] /* rb\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([117,110,101,120,112,101,99,116,101,100,32,101,114,114,111,114,0] /* unexpected error\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([36,82,101,118,105,115,105,111,110,36,0] /* $Revision$\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([104,111,116,115,104,111,116,45,118,101,114,115,105,111,110,0] /* hotshot-version\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([121,101,115,0] /* yes\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([110,111,0] /* no\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([114,101,113,117,101,115,116,101,100,45,102,114,97,109,101,45,116,105,109,105,110,103,115,0] /* requested-frame-timi */, "i8", ALLOC_NORMAL);
__str40=allocate([114,101,113,117,101,115,116,101,100,45,108,105,110,101,45,101,118,101,110,116,115,0] /* requested-line-event */, "i8", ALLOC_NORMAL);
__str41=allocate([114,101,113,117,101,115,116,101,100,45,108,105,110,101,45,116,105,109,105,110,103,115,0] /* requested-line-timin */, "i8", ALLOC_NORMAL);
__str42=allocate([112,108,97,116,102,111,114,109,0] /* platform\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([101,120,101,99,117,116,97,98,108,101,0] /* executable\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([101,120,101,99,117,116,97,98,108,101,45,118,101,114,115,105,111,110,0] /* executable-version\0 */, "i8", ALLOC_NORMAL);
__str45=allocate([37,108,117,0] /* %lu\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([111,98,115,101,114,118,101,100,45,105,110,116,101,114,118,97,108,45,103,101,116,114,117,115,97,103,101,0] /* observed-interval-ge */, "i8", ALLOC_NORMAL);
__str47=allocate([111,98,115,101,114,118,101,100,45,105,110,116,101,114,118,97,108,45,103,101,116,116,105,109,101,111,102,100,97,121,0] /* observed-interval-ge */, "i8", ALLOC_NORMAL);
__str48=allocate([99,117,114,114,101,110,116,45,100,105,114,101,99,116,111,114,121,0] /* current-directory\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([112,97,116,104,0] /* path\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([115,121,115,46,112,97,116,104,32,109,117,115,116,32,98,101,32,97,32,108,105,115,116,0] /* sys.path must be a l */, "i8", ALLOC_NORMAL);
__str51=allocate([115,121,115,45,112,97,116,104,45,101,110,116,114,121,0] /* sys-path-entry\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([60,110,111,110,45,115,116,114,105,110,103,45,112,97,116,104,45,101,110,116,114,121,62,0] /* <non-string-path-ent */, "i8", ALLOC_NORMAL);
_profiler__doc__=allocate([112,114,111,102,105,108,101,114,40,108,111,103,102,105,108,101,110,97,109,101,91,44,32,108,105,110,101,101,118,101,110,116,115,91,44,32,108,105,110,101,116,105,109,101,115,93,93,41,32,45,62,32,112,114,111,102,105,108,101,114,10,67,114,101,97,116,101,32,97,32,110,101,119,32,112,114,111,102,105,108,101,114,32,111,98,106,101,99,116,46,0] /* profiler(logfilename */, "i8", ALLOC_NORMAL);
__str53=allocate([115,124,105,105,58,112,114,111,102,105,108,101,114,0] /* s|ii:profiler\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([119,98,0] /* wb\00 */, "i8", ALLOC_NORMAL);
_coverage__doc__=allocate([99,111,118,101,114,97,103,101,40,108,111,103,102,105,108,101,110,97,109,101,41,32,45,62,32,112,114,111,102,105,108,101,114,10,82,101,116,117,114,110,115,32,97,32,112,114,111,102,105,108,101,114,32,116,104,97,116,32,100,111,101,115,110,39,116,32,99,111,108,108,101,99,116,32,97,110,121,32,116,105,109,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,44,32,119,104,105,99,104,32,105,115,10,117,115,101,102,117,108,32,105,110,32,98,117,105,108,100,105,110,103,32,97,32,99,111,118,101,114,97,103,101,32,97,110,97,108,121,115,105,115,32,116,111,111,108,46,0] /* coverage(logfilename */, "i8", ALLOC_NORMAL);
__str55=allocate([115,58,99,111,118,101,114,97,103,101,0] /* s:coverage\00 */, "i8", ALLOC_NORMAL);
_resolution__doc__=allocate([114,101,115,111,108,117,116,105,111,110,40,41,32,45,62,32,40,103,101,116,116,105,109,101,111,102,100,97,121,45,117,115,101,99,115,44,32,103,101,116,114,117,115,97,103,101,45,117,115,101,99,115,41,10,82,101,116,117,114,110,32,116,104,101,32,114,101,115,111,108,117,116,105,111,110,32,111,102,32,116,104,101,32,116,105,109,101,114,115,32,112,114,111,118,105,100,101,100,32,98,121,32,116,104,101,32,103,101,116,116,105,109,101,111,102,100,97,121,40,41,32,97,110,100,10,103,101,116,114,117,115,97,103,101,40,41,32,115,121,115,116,101,109,32,99,97,108,108,115,44,32,111,114,32,45,49,32,105,102,32,116,104,101,32,99,97,108,108,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,46,0] /* resolution() -> (get */, "i8", ALLOC_NORMAL);
__str56=allocate([105,105,0] /* ii\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([99,111,118,101,114,97,103,101,0] /* coverage\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([112,114,111,102,105,108,101,114,0] /* profiler\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([108,111,103,114,101,97,100,101,114,0] /* logreader\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([114,101,115,111,108,117,116,105,111,110,0] /* resolution\00 */, "i8", ALLOC_NORMAL);
_functions=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str61=allocate([95,104,111,116,115,104,111,116,0] /* _hotshot\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([95,95,118,101,114,115,105,111,110,95,95,0] /* __version__\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([76,111,103,82,101,97,100,101,114,84,121,112,101,0] /* LogReaderType\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([80,114,111,102,105,108,101,114,84,121,112,101,0] /* ProfilerType\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([104,111,116,115,104,111,116,46,80,114,111,102,105,108,101,114,69,114,114,111,114,0] /* hotshot.ProfilerErro */, "i8", ALLOC_NORMAL);
__str66=allocate([80,114,111,102,105,108,101,114,69,114,114,111,114,0] /* ProfilerError\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([87,72,65,84,95,69,78,84,69,82,0] /* WHAT_ENTER\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([87,72,65,84,95,69,88,73,84,0] /* WHAT_EXIT\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([87,72,65,84,95,76,73,78,69,78,79,0] /* WHAT_LINENO\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([87,72,65,84,95,79,84,72,69,82,0] /* WHAT_OTHER\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([87,72,65,84,95,65,68,68,95,73,78,70,79,0] /* WHAT_ADD_INFO\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([87,72,65,84,95,68,69,70,73,78,69,95,70,73,76,69,0] /* WHAT_DEFINE_FILE\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([87,72,65,84,95,68,69,70,73,78,69,95,70,85,78,67,0] /* WHAT_DEFINE_FUNC\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([87,72,65,84,95,76,73,78,69,95,84,73,77,69,83,0] /* WHAT_LINE_TIMES\00 */, "i8", ALLOC_NORMAL);
HEAP[_profiler_methods]=__str16;
HEAP[_profiler_methods+4]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_profiler_methods+12]=_addinfo__doc__;
HEAP[_profiler_methods+16]=__str17;
HEAP[_profiler_methods+20]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_profiler_methods+28]=_close__doc__;
HEAP[_profiler_methods+32]=__str18;
HEAP[_profiler_methods+36]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_profiler_methods+44]=_logreader_fileno__doc__;
HEAP[_profiler_methods+48]=__str12;
HEAP[_profiler_methods+52]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_profiler_methods+60]=_runcall__doc__;
HEAP[_profiler_methods+64]=__str19;
HEAP[_profiler_methods+68]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_profiler_methods+76]=_runcode__doc__;
HEAP[_profiler_methods+80]=__str20;
HEAP[_profiler_methods+84]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_profiler_methods+92]=_start__doc__;
HEAP[_profiler_methods+96]=__str21;
HEAP[_profiler_methods+100]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_profiler_methods+108]=_stop__doc__;
HEAP[_profiler_members]=__str22;
HEAP[_profiler_members+20]=__str23;
HEAP[_profiler_members+40]=__str24;
HEAP[_profiler_getsets]=__str25;
HEAP[_profiler_getsets+4]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_profiler_getsets+12]=__str26;
HEAP[_ProfilerType+12]=__str27;
HEAP[_ProfilerType+24]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_ProfilerType+72]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_ProfilerType+88]=_profiler_object__doc__;
HEAP[_ProfilerType+116]=_profiler_methods;
HEAP[_ProfilerType+120]=_profiler_members;
HEAP[_ProfilerType+124]=_profiler_getsets;
HEAP[_logreader_methods]=__str17;
HEAP[_logreader_methods+4]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_logreader_methods+12]=_logreader_close__doc__;
HEAP[_logreader_methods+16]=__str18;
HEAP[_logreader_methods+20]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_logreader_methods+28]=_logreader_fileno__doc__;
HEAP[_logreader_members]=__str28;
HEAP[_logreader_members+16]=__str29;
HEAP[_logreader_as_sequence+12]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_logreader_getsets]=__str25;
HEAP[_logreader_getsets+4]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_logreader_getsets+12]=__str30;
HEAP[_LogReaderType+12]=__str31;
HEAP[_LogReaderType+24]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_LogReaderType+52]=_logreader_as_sequence;
HEAP[_LogReaderType+72]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_LogReaderType+88]=_logreader__doc__;
HEAP[_LogReaderType+108]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_LogReaderType+112]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_LogReaderType+116]=_logreader_methods;
HEAP[_LogReaderType+120]=_logreader_members;
HEAP[_LogReaderType+124]=_logreader_getsets;
HEAP[_functions]=__str57;
HEAP[_functions+4]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_functions+12]=_coverage__doc__;
HEAP[_functions+16]=__str58;
HEAP[_functions+20]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_functions+28]=_profiler__doc__;
HEAP[_functions+32]=__str59;
HEAP[_functions+36]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_functions+44]=_logreader__doc__;
HEAP[_functions+48]=__str60;
HEAP[_functions+52]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_functions+60]=_resolution__doc__;

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
