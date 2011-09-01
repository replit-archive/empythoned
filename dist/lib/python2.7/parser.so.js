<<<<<<< HEAD
(function(g){function e(a,b,c,d,f){var g;for(g=-1;;)switch(g){case -1:var h,j,k,l,m,n,o,p,q,r;h=a;j=b;k=c;l=d;m=f;g=h==0?1:2;break;case 1:HEAP[__Py_NoneStruct]+=1;n=__Py_NoneStruct;g=27;break;case 2:var s=h;g=HEAP[h]>255?3:19;break;case 3:p=FUNCTION_TABLE[j](HEAP[s+16]+1+(HEAP[h]==339));g=p==0?4:5;break;case 4:n=p;g=27;break;case 5:q=_PyInt_FromLong(HEAP[h]);g=q==0?6:9;break;case 6:HEAP[p]-=1;g=HEAP[p]==0?7:8;break;case 7:FUNCTION_TABLE[HEAP[HEAP[p+
4]+24]](p);g=8;break;case 8:n=0;g=27;break;case 9:FUNCTION_TABLE[k](p,0,q);o=0;g=15;break;case 10:q=e(HEAP[t+20]+24*o,j,k,l,m);g=q==0?11:14;break;case 11:HEAP[p]-=1;g=HEAP[p]==0?12:13;break;case 12:FUNCTION_TABLE[HEAP[HEAP[p+4]+24]](p);g=13;break;case 13:n=0;g=27;break;case 14:FUNCTION_TABLE[k](p,o+1,q);o+=1;g=15;break;case 15:var t=h;g=HEAP[h+16]>o?10:16;break;case 16:g=HEAP[t]==339?17:18;break;case 17:g=_PyString_FromString(HEAP[h+4]);FUNCTION_TABLE[k](p,o+1,g);g=18;break;case 18:n=p;g=27;break;
case 19:g=HEAP[s]<=255?20:26;break;case 20:r=FUNCTION_TABLE[j](l+2+m);g=r!=0?21:25;break;case 21:g=_PyInt_FromLong(HEAP[h]);FUNCTION_TABLE[k](r,0,g);g=_PyString_FromString(HEAP[h+4]);FUNCTION_TABLE[k](r,1,g);g=l==1?22:23;break;case 22:g=_PyInt_FromLong(HEAP[h+8]);FUNCTION_TABLE[k](r,2,g);g=23;break;case 23:g=m==1?24:25;break;case 24:g=_PyInt_FromLong(HEAP[h+12]);FUNCTION_TABLE[k](r,3,g);g=25;break;case 25:n=r;g=27;break;case 26:_PyErr_SetString(HEAP[_PyExc_SystemError],Ba);n=0;g=27;break;case 27:return a=
n;default:assert(0,"bad label: "+g)}}function b(a,c){var d;for(d=-1;;)switch(d){case -1:var e,f,g,h,j;e=a;f=c;d=HEAP[e]<HEAP[f]?1:2;break;case 1:g=-1;d=16;break;case 2:d=HEAP[f]<HEAP[e]?3:4;break;case 3:g=1;d=16;break;case 4:d=HEAP[e]<=255?5:6;break;case 5:g=_strcmp(HEAP[e+4],HEAP[f+4]);d=16;break;case 6:d=HEAP[e+16]<HEAP[f+16]?7:8;break;case 7:g=-1;d=16;break;case 8:d=HEAP[f+16]<HEAP[e+16]?9:10;break;case 9:g=1;d=16;break;case 10:h=0;d=14;break;case 11:j=b(HEAP[e+20]+24*h,HEAP[f+20]+24*h);d=j!=0?
12:13;break;case 12:g=j;d=16;break;case 13:h+=1;d=14;break;case 14:d=HEAP[e+16]>h?11:15;break;case 15:g=0;d=16;break;case 16:return d=g;default:assert(0,"bad label: "+d)}}function a(a,b){var c;for(c=-1;;)switch(c){case -1:var d,e,f;d=a;e=b;f=__PyObject_New(Ga);c=f!=0?1:2;break;case 1:HEAP[f+8]=d;HEAP[f+12]=e;HEAP[f+16]=0;c=3;break;case 2:_PyNode_Free(d);c=3;break;case 3:return c=f;default:assert(0,"bad label: "+c)}}function c(a,b,c){var d=STACKTOP;STACKTOP+=12;_memset(d,0,12);var f,h=null;for(f=-1;;)switch(f){case -1:var j=
d,k,l=d+4,m=d+8,n,o,p;HEAP[j]=a;k=b;f=c;HEAP[l]=0;n=HEAP[m]=0;var q=f;f=HEAP[j]==0?1:2;break;case 1:var r=_PyArg_ParseTupleAndKeywords(k,q,ka,Fa,allocate([Ga,0,0,0,j,0,0,0,l,0,0,0,m,0,0,0],["%struct._typeobject*",0,0,0,"%struct.PyST_Object**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0],ALLOC_STACK)),h=1;f=3;break;case 2:var s=_PyArg_ParseTupleAndKeywords(k,q,Ka,Fa+4,allocate([l,0,0,0,m,0,0,0],["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0],ALLOC_STACK)),h=2;f=3;break;case 3:f=
(h==2?s:r)!=0?4:9;break;case 4:p=o=0;f=HEAP[l]!=0?5:6;break;case 5:o=_PyObject_IsTrue(HEAP[l])!=0;f=6;break;case 6:f=HEAP[m]!=0?7:8;break;case 7:p=_PyObject_IsTrue(HEAP[m])!=0;f=8;break;case 8:n=e(HEAP[HEAP[j]+8],g+2,g+4,o,p);f=9;break;case 9:return a=n,STACKTOP=d,a;default:assert(0,"bad label: "+f)}}function d(a,b,c){var d=STACKTOP;STACKTOP+=12;_memset(d,0,12);var f,h=null;for(f=-1;;)switch(f){case -1:var j=d,k,l=d+4,m=d+8,n,o,p;HEAP[j]=a;k=b;f=c;HEAP[l]=0;n=HEAP[m]=0;var q=f;f=HEAP[j]==0?1:2;break;
case 1:var r=_PyArg_ParseTupleAndKeywords(k,q,$a,Ja,allocate([Ga,0,0,0,j,0,0,0,l,0,0,0,m,0,0,0],["%struct._typeobject*",0,0,0,"%struct.PyST_Object**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0],ALLOC_STACK)),h=1;f=3;break;case 2:var s=_PyArg_ParseTupleAndKeywords(k,q,ja,Ja+4,allocate([l,0,0,0,m,0,0,0],["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0],ALLOC_STACK)),h=2;f=3;break;case 3:f=(h==2?s:r)!=0?4:9;break;case 4:p=o=0;f=HEAP[l]!=0?5:6;break;case 5:o=_PyObject_IsTrue(HEAP[l])!=
0;f=6;break;case 6:f=HEAP[m]!=0?7:8;break;case 7:p=_PyObject_IsTrue(HEAP[m])!=0;f=8;break;case 8:n=e(HEAP[HEAP[j]+8],g+6,g+8,o,p);f=9;break;case 9:return a=n,STACKTOP=d,a;default:assert(0,"bad label: "+f)}}function f(a,b,c){var d=STACKTOP;STACKTOP+=8;_memset(d,0,8);var e,f=null;for(e=-1;;)switch(e){case -1:var g=d,h,j,k,l,m=d+4;HEAP[g]=a;h=b;e=c;j=0;HEAP[m]=bb;var n=e;e=HEAP[g]==0?1:2;break;case 1:var o=_PyArg_ParseTupleAndKeywords(h,n,qa,P,allocate([Ga,0,0,0,g,0,0,0,m,0,0,0],["%struct._typeobject*",
0,0,0,"%struct.PyST_Object**",0,0,0,"i8**",0,0,0],ALLOC_STACK)),f=1;e=3;break;case 2:var p=_PyArg_ParseTupleAndKeywords(h,n,Qa,P+4,allocate([m,0,0,0],["i8**",0,0,0],ALLOC_STACK)),f=2;e=3;break;case 3:e=(f==2?p:o)!=0?4:8;break;case 4:k=_PyArena_New();e=k!=0?5:8;break;case 5:l=_PyAST_FromNode(HEAP[HEAP[g]+8],HEAP[g]+16,HEAP[m],k);e=l!=0?6:7;break;case 6:j=_PyAST_Compile(l,HEAP[m],HEAP[g]+16,k);e=7;break;case 7:_PyArena_Free(k);e=8;break;case 8:return a=j,STACKTOP=d,a;default:assert(0,"bad label: "+
e)}}function h(a){_PyErr_SetString(HEAP[Xa],a)}function j(b,c,d,e){var f=STACKTOP;STACKTOP+=36;_memset(f,0,36);var g;for(g=-1;;)switch(g){case -1:var h,j,k,l,m=f,n,o=f+4,p=f+8,q;g=b;h=c;j=d;k=e;n=HEAP[m]=0;HEAP[o]=0;g=_PyArg_ParseTupleAndKeywords(g,h,j,va,allocate([m,0,0,0],["i8**",0,0,0],ALLOC_STACK))!=0?1:8;break;case 1:g=k==1?2:3;break;case 2:l=258;g=4;break;case 3:l=257;g=4;break;case 4:q=g=_PyParser_ParseStringFlagsFilenameEx(HEAP[m],0,__PyParser_Grammar,l,p,o);g=g!=0?5:7;break;case 5:n=a(q,
k);g=n!=0?6:8;break;case 6:HEAP[n+16]=HEAP[o]&253952;g=8;break;case 7:_PyParser_SetError(p);g=8;break;case 8:return b=n,STACKTOP=f,b;default:assert(0,"bad label: "+g)}}function k(b,c,d){b=STACKTOP;STACKTOP+=4;_memset(b,0,4);var e,f=null;for(e=-1;;)switch(e){case -1:var g,j,k,n=b,o,p;e=c;g=d;k=0;e=_PyArg_ParseTupleAndKeywords(e,g,xb,db,allocate([n,0,0,0],["%struct.PyObject**",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:j=0;e=23;break;case 2:e=_PySequence_Check(HEAP[n])==0?3:4;break;case 3:_PyErr_SetString(HEAP[_PyExc_ValueError],
rb);j=0;e=23;break;case 4:a:{e=HEAP[n];o=STACKTOP;STACKTOP+=4;_memset(o,0,4);var q=void 0;g=null;for(q=-1;;)switch(q){case -1:var r,s,t,B,v,w,x=o,H,O,y;r=e;B=0;v=_PySequence_GetItem(r,0);w=-1;q=v!=0?1:4;break;case 1:var U=_PyInt_AsLong(v);w=U;v!=0?(g=1,q=2):(g=1,q=5);break;case 2:HEAP[v]-=1;q=HEAP[v]==0?3:4;break;case 3:FUNCTION_TABLE[HEAP[HEAP[v+4]+24]](v);q=4;break;case 4:var F=w;g=4;q=5;break;case 5:q=(g==4?F:U)<=255?6:9;break;case 6:r=_Py_BuildValue(Nb,allocate([r,0,0,0,da,0,0,0],["%struct.PyObject*",
0,0,0,"i8*",0,0,0],ALLOC_STACK));_PyErr_SetObject(HEAP[Xa],r);q=r!=0?7:32;break;case 7:HEAP[r]-=1;q=HEAP[r]==0?8:32;break;case 8:FUNCTION_TABLE[HEAP[HEAP[r+4]+24]](r);q=32;break;case 9:q=w>255?10:29;break;case 10:H=HEAP[x]=0;q=w==339?11:12;break;case 11:H=_PySequence_GetItem(r,2);r=_PySequence_GetSlice(r,0,2);q=12;break;case 12:B=q=_PyNode_New(w);q=q!=0?13:32;break;case 13:var q=l(r,B,x),N=B,q=q!=N?14:15;break;case 14:_PyNode_Free(B);B=0;q=32;break;case 15:q=N!=0?16:32;break;case 16:q=H!=0?17:32;
break;case 17:O=HEAP[H+8]+1;q=O>=0?18:22;break;case 18:q=O!=0?19:20;break;case 19:s=O;q=21;break;case 20:s=1;q=21;break;case 21:t=_malloc(s);q=23;break;case 22:t=0;q=23;break;case 23:HEAP[B+4]=t;q=HEAP[B+4]!=0?24:25;break;case 24:_llvm_memcpy_p0i8_p0i8_i32(HEAP[B+4],H+20,O,1,0);q=25;break;case 25:HEAP[H]-=1;q=HEAP[H]==0?26:27;break;case 26:FUNCTION_TABLE[HEAP[HEAP[H+4]+24]](H);q=27;break;case 27:HEAP[r]-=1;q=HEAP[r]==0?28:32;break;case 28:FUNCTION_TABLE[HEAP[HEAP[r+4]+24]](r);q=32;break;case 29:y=
_Py_BuildValue(Nb,allocate([r,0,0,0,Jb,0,0,0],["%struct.PyObject*",0,0,0,"i8*",0,0,0],ALLOC_STACK));_PyErr_SetObject(HEAP[Xa],y);q=y!=0?30:32;break;case 30:HEAP[y]-=1;q=HEAP[y]==0?31:32;break;case 31:FUNCTION_TABLE[HEAP[HEAP[y+4]+24]](y);q=32;break;case 32:e=B;STACKTOP=o;o=e;break a;default:assert(0,"bad label: "+q)}o=void 0}e=o!=0?5:18;break;case 5:p=HEAP[o];e=p==258?6:9;break;case 6:a:{var z=o;e=void 0;for(e=-1;;)switch(e){case -1:var A;b:{A=z;e=void 0;g=null;for(e=-1;;)switch(e){case -1:var ea,
T,xa,K,C;ea=A;K=HEAP[ea+16];e=m(ea,258)==0?5:1;break;case 1:e=K<=1?5:2;break;case 2:e=u(HEAP[ea+20])==0?5:3;break;case 3:e=m(HEAP[ea+20]+24*(K-1),0)==0?5:4;break;case 4:T=1;e=6;break;case 5:T=0;e=6;break;case 6:var I=T;C=I;xa=1;g=6;e=8;break;case 7:var W=m(HEAP[ea+20]+24*xa,4);C=W;xa+=1;g=7;e=8;break;case 8:e=(g==7?W:I)==0?10:9;break;case 9:e=K-1>xa?7:10;break;case 10:A=C;break b;default:assert(0,"bad label: "+e)}A=void 0}e=A==0?1:3;break;case 1:e=_PyErr_Occurred()==0?2:3;break;case 2:h(ce);e=3;break;
case 3:e=z=A;break a;default:assert(0,"bad label: "+e)}e=void 0}z=o;e=e!=0?7:8;break;case 7:var ga=a(z,1);k=ga;f=7;e=19;break;case 8:_PyNode_Free(z);e=18;break;case 9:e=p==257?10:13;break;case 10:e=Ha(o);var X=o;e=e!=0?11:12;break;case 11:var va=a(X,2);k=va;f=11;e=19;break;case 12:_PyNode_Free(X);e=18;break;case 13:var D=o;e=p==339?14:17;break;case 14:a:{var cb=D;e=void 0;for(e=-1;;)switch(e){case -1:var E,Q;E=cb;e=HEAP[E+16]!=1?3:1;break;case 1:e=Ha(HEAP[E+20])==0?3:2;break;case 2:Q=1;e=5;break;
case 3:Q=0;e=_PyErr_Occurred()==0?4:5;break;case 4:h(Qe);e=5;break;case 5:e=cb=Q;break a;default:assert(0,"bad label: "+e)}e=void 0}cb=o;e=e!=0?15:16;break;case 15:var sa=a(cb,2);k=sa;f=15;e=19;break;case 16:_PyNode_Free(cb);e=18;break;case 17:_PyNode_Free(D);h(sb);e=18;break;case 18:var Bc=k,f=18;e=19;break;case 19:e=(f==18?Bc:f==15?sa:f==11?va:ga)==0?20:22;break;case 20:e=_PyErr_Occurred()==0?21:22;break;case 21:h(Kb);e=22;break;case 22:j=k;e=23;break;case 23:return c=j,STACKTOP=b,c;default:assert(0,
"bad label: "+e)}}function l(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,f,g,j,k,m,n,o,p,q,r,s,t,u,B,v,w,x;e=a;f=b;g=c;m=_PyObject_Size(e);n=1;d=69;break;case 1:p=_PySequence_GetItem(e,n);q=p!=0;s=r=0;d=q!=0?2:10;break;case 2:q=d=_PySequence_Check(p);d=d!=0?3:10;break;case 3:t=_PySequence_GetItem(p,0);d=t==0?4:5;break;case 4:q=0;d=10;break;case 5:q=(HEAP[HEAP[t+4]+84]&8388608)!=0;d=q!=0?6:7;break;case 6:r=HEAP[t+8];d=7;break;case 7:HEAP[t]-=1;d=HEAP[t]==0?8:9;break;case 8:FUNCTION_TABLE[HEAP[HEAP[t+
4]+24]](t);d=9;break;case 9:d=q==0?10:17;break;case 10:u=_Py_BuildValue(Nb,allocate([p,0,0,0,Ab,0,0,0],["%struct.PyObject*",0,0,0,"i8*",0,0,0],ALLOC_STACK));_PyErr_SetObject(HEAP[Xa],u);d=u!=0?11:13;break;case 11:HEAP[u]-=1;d=HEAP[u]==0?12:13;break;case 12:FUNCTION_TABLE[HEAP[HEAP[u+4]+24]](u);d=13;break;case 13:d=p!=0?14:16;break;case 14:HEAP[p]-=1;d=HEAP[p]==0?15:16;break;case 15:FUNCTION_TABLE[HEAP[HEAP[p+4]+24]](p);d=16;break;case 16:k=0;d=71;break;case 17:d=r<=255?18:45;break;case 18:B=_PyObject_Size(p);
d=B!=2&B!=3?19:20;break;case 19:h(Sb);k=0;d=71;break;case 20:v=_PySequence_GetItem(p,1);d=v==0?21:22;break;case 21:k=0;d=71;break;case 22:d=(HEAP[HEAP[v+4]+84]&134217728)==0?23:26;break;case 23:_PyErr_Format(HEAP[Xa],pb,allocate([HEAP[HEAP[v+4]+12],0,0,0],["i8*",0,0,0],ALLOC_STACK));HEAP[v]-=1;d=HEAP[v]==0?24:25;break;case 24:FUNCTION_TABLE[HEAP[HEAP[v+4]+24]](v);d=25;break;case 25:k=0;d=71;break;case 26:d=B==3?27:36;break;case 27:w=_PySequence_GetItem(p,2);d=w!=0?28:36;break;case 28:d=(HEAP[HEAP[w+
4]+84]&8388608)!=0?29:30;break;case 29:HEAP[g]=HEAP[w+8];HEAP[w]-=1;d=HEAP[w]==0?35:36;break;case 30:_PyErr_Format(HEAP[Xa],Mb,allocate([HEAP[HEAP[v+4]+12],0,0,0],["i8*",0,0,0],ALLOC_STACK));HEAP[w]-=1;d=HEAP[w]==0?31:32;break;case 31:FUNCTION_TABLE[HEAP[HEAP[w+4]+24]](w);d=32;break;case 32:HEAP[v]-=1;d=HEAP[v]==0?33:34;break;case 33:FUNCTION_TABLE[HEAP[HEAP[v+4]+24]](v);d=34;break;case 34:k=0;d=71;break;case 35:FUNCTION_TABLE[HEAP[HEAP[w+4]+24]](w);d=36;break;case 36:B=HEAP[v+8]+1;d=HEAP[v+8]+1>=
0?37:40;break;case 37:d=B!=0?38:39;break;case 38:j=B;d=41;break;case 39:j=1;d=41;break;case 40:s=0;d=43;break;case 41:s=d=_malloc(j);d=d!=0?42:43;break;case 42:_llvm_memcpy_p0i8_p0i8_i32(s,v+20,B,1,0);d=43;break;case 43:HEAP[v]-=1;d=HEAP[v]==0?44:53;break;case 44:FUNCTION_TABLE[HEAP[HEAP[v+4]+24]](v);d=53;break;case 45:d=r<=255?46:53;break;case 46:x=_Py_BuildValue(Nb,allocate([p,0,0,0,tb,0,0,0],["%struct.PyObject*",0,0,0,"i8*",0,0,0],ALLOC_STACK));_PyErr_SetObject(HEAP[Xa],x);d=x!=0?47:49;break;case 47:HEAP[x]-=
1;d=HEAP[x]==0?48:49;break;case 48:FUNCTION_TABLE[HEAP[HEAP[x+4]+24]](x);d=49;break;case 49:d=p!=0?50:52;break;case 50:HEAP[p]-=1;d=HEAP[p]==0?51:52;break;case 51:FUNCTION_TABLE[HEAP[HEAP[p+4]+24]](p);d=52;break;case 52:k=0;d=71;break;case 53:o=d=_PyNode_AddChild(f,r,s,HEAP[g],0);d=d==15?54:55;break;case 54:_free(s);k=_PyErr_NoMemory();d=71;break;case 55:d=o==19?56:57;break;case 56:_free(s);_PyErr_SetString(HEAP[_PyExc_ValueError],Hb);k=0;d=71;break;case 57:d=r>255?58:63;break;case 58:d=HEAP[f+20]+
24*(n-1);d=l(p,d,g)!=d?59:65;break;case 59:d=p!=0?60:62;break;case 60:HEAP[p]-=1;d=HEAP[p]==0?61:62;break;case 61:FUNCTION_TABLE[HEAP[HEAP[p+4]+24]](p);d=62;break;case 62:k=0;d=71;break;case 63:d=r==4?64:65;break;case 64:HEAP[g]+=1;d=65;break;case 65:d=p!=0?66:68;break;case 66:HEAP[p]-=1;d=HEAP[p]==0?67:68;break;case 67:FUNCTION_TABLE[HEAP[HEAP[p+4]+24]](p);d=68;break;case 68:n+=1;d=69;break;case 69:d=n<m?1:70;break;case 70:k=f;d=71;break;case 71:return a=k;default:assert(0,"bad label: "+d)}}function m(a,
b){var c;for(c=-1;;)switch(c){case -1:var d,e,f;d=a;e=b;c=HEAP[d]!=e?1:2;break;case 1:_PyErr_Format(HEAP[Xa],jb,allocate([e,0,0,0,HEAP[d],0,0,0],["i32",0,0,0,"i32",0,0,0],ALLOC_STACK));f=0;c=3;break;case 2:f=1;c=3;break;case 3:return c=f;default:assert(0,"bad label: "+c)}}function n(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,f,g;d=a;e=b;f=c;d=HEAP[d+16]!=e?1:2;break;case 1:_PyErr_Format(HEAP[Xa],bc,allocate([f,0,0,0],["i8*",0,0,0],ALLOC_STACK));g=0;d=3;break;case 2:g=1;d=3;break;case 3:return a=
g;default:assert(0,"bad label: "+d)}}function o(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,f,g;e=a;d=b;f=c;d=m(e,d)==0?4:1;break;case 1:d=f==0?3:2;break;case 2:d=_strcmp(f,HEAP[e+4])==0?3:4;break;case 3:g=1;d=6;break;case 4:g=0;d=_PyErr_Occurred()==0?5:6;break;case 5:_PyErr_Format(HEAP[Xa],Wb,allocate([f,0,0,0],["i8*",0,0,0],ALLOC_STACK));d=6;break;case 6:return a=g;default:assert(0,"bad label: "+d)}}function p(a,b,c,d){var e,f=null;for(e=-1;;)switch(e){case -1:var g,h,j,k,l,p,q,r;g=a;h=b;j=
c;k=d;p=HEAP[g+16];e=p==0?4:1;break;case 1:e=m(g,h)==0?4:2;break;case 2:e=FUNCTION_TABLE[j](HEAP[g+20])==0?4:3;break;case 3:q=1;e=6;break;case 4:q=0;e=_PyErr_Occurred()!=0?6:5;break;case 5:n(g,1,k);e=19;break;case 6:e=(p&1)==0?7:8;break;case 7:e=HEAP[g+20];p-=1;var s=o(e+24*p,12,lb);q=s;f=7;e=9;break;case 8:var t=q,f=8;e=9;break;case 9:e=(f==8?t:s)!=0?10:19;break;case 10:e=p>1?11:19;break;case 11:r=1;var u=q,f=11;e=17;break;case 12:e=o(HEAP[g+20]+24*r,12,lb)==0?15:13;break;case 13:e=FUNCTION_TABLE[j](HEAP[g+
20]+24*(r+1))==0?15:14;break;case 14:l=1;e=16;break;case 15:l=0;e=16;break;case 16:var B=l;q=B;r+=2;f=16;e=17;break;case 17:e=(f==16?B:u)==0?19:18;break;case 18:e=r<p?12:19;break;case 19:return a=q;default:assert(0,"bad label: "+e)}}function q(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,h,j;d=a;h=HEAP[d+16];b=m(d,329)==0?9:1;break;case 1:b=h==4|h==6|h==7?2:9;break;case 2:j=1;b=o(HEAP[d+20],1,kb)==0?7:3;break;case 3:b=m(HEAP[d+20]+24,1)==0?7:4;break;case 4:b=o(HEAP[d+20]+24*(h-2),11,Lb)==
0?7:5;break;case 5:b=r(HEAP[d+20]+24*(h-1))==0?7:6;break;case 6:g=1;b=8;break;case 7:g=0;b=8;break;case 8:var k=g;j=k;c=8;b=10;break;case 9:j=0;n(d,4,kb);var l=j,c=9;b=10;break;case 10:b=(c==9?l:k)!=0?11:24;break;case 11:b=h==7?12:18;break;case 12:b=o(HEAP[d+20]+48,7,Eb)==0?16:13;break;case 13:b=u(HEAP[d+20]+72)==0?16:14;break;case 14:b=o(HEAP[d+20]+96,8,Yb)==0?16:15;break;case 15:f=1;b=17;break;case 16:f=0;b=17;break;case 17:j=f;b=24;break;case 18:b=h==6?19:24;break;case 19:b=o(HEAP[d+20]+48,7,Eb)==
0?22:20;break;case 20:b=o(HEAP[d+20]+72,8,Yb)==0?22:21;break;case 21:e=1;b=23;break;case 22:e=0;b=23;break;case 23:j=e;b=24;break;case 24:return a=j;default:assert(0,"bad label: "+b)}}function r(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g;d=a;e=HEAP[d+16];b=m(d,300)==0?4:1;break;case 1:b=e==1|e>3?2:4;break;case 2:f=1;var h=HEAP[d+20];b=e!=1?5:3;break;case 3:f=A(h);b=17;break;case 4:f=0;b=17;break;case 5:b=o(h,4,0)==0?9:6;break;case 6:b=o(HEAP[d+20]+24,5,0)==0?9:7;break;case 7:b=C(HEAP[d+
20]+48)==0?9:8;break;case 8:b=o(HEAP[d+20]+24*(e-1),6,mc)==0?9:10;break;case 9:f=0;var j=e,c=9;b=15;break;case 10:f=1;var k=e;k<=4?(c=10,b=15):(c=10,b=11);break;case 11:g=3;e-=1;var l=f,c=11;b=13;break;case 12:var p=C(HEAP[d+20]+24*g);f=p;g+=1;c=12;b=13;break;case 13:b=(c==12?p:l)==0?17:14;break;case 14:b=g<e?12:17;break;case 15:b=(c==9?j:k)<=3?16:17;break;case 16:f=n(d,4,Xb);b=17;break;case 17:return a=f;default:assert(0,"bad label: "+b)}}function u(a){return p(a,327,g+10,qc)}function s(a,b){var c,
d=null;for(c=-1;;)switch(c){case -1:var e,f,g,j,k,l,m;e=a;f=b;k=HEAP[e+16];l=0;c=k<=f?1:2;break;case 1:h(eb);j=0;c=20;break;case 2:m=HEAP[HEAP[e+20]+24*f];c=m==16?3:13;break;case 3:c=k-f==2?4:5;break;case 4:var n=o(HEAP[e+20]+24*(f+1),1,0);l=n;d=4;c=17;break;case 5:c=k-f==5?6:16;break;case 6:c=o(HEAP[e+20]+24*(f+1),1,0)==0?11:7;break;case 7:c=o(HEAP[e+20]+24*(f+2),12,lb)==0?11:8;break;case 8:c=o(HEAP[e+20]+24*(f+3),36,Tb)==0?11:9;break;case 9:c=o(HEAP[e+20]+24*(f+4),1,0)==0?11:10;break;case 10:g=
1;c=12;break;case 11:g=0;c=12;break;case 12:var p=g;l=p;d=12;c=17;break;case 13:c=m==36?14:16;break;case 14:c=k-f==2?15:16;break;case 15:var q=o(HEAP[e+20]+24*(f+1),1,0);l=q;d=15;c=17;break;case 16:var r=l,d=16;c=17;break;case 17:c=(d==16?r:d==4?n:d==12?p:q)==0?18:19;break;case 18:h(oc);c=19;break;case 19:j=l;c=20;break;case 20:return c=j;default:assert(0,"bad label: "+c)}}function t(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,j,k,l,n;d=a;j=HEAP[d+16];b=m(d,264)==0?2:1;break;case 1:b=
j==0?2:3;break;case 2:g=k=0;b=56;break;case 3:k=1;b=j<=0?4:5;break;case 4:h(Fb);g=0;b=56;break;case 5:l=HEAP[HEAP[d+20]];b=l==16|l==36?6:7;break;case 6:k=s(d,0);b=55;break;case 7:b=l==265?8:55;break;case 8:n=0;l=HEAP[HEAP[d+20]+24*(j-1)];b=l==1?22:27;break;case 9:k=z(HEAP[d+20]+24*n);n+=1;b=k!=0?10:22;break;case 10:b=HEAP[HEAP[d+20]+24*n]==22?11:16;break;case 11:b=n+2<=j?12:16;break;case 12:b=o(HEAP[d+20]+24*n,22,Pb)==0?14:13;break;case 13:b=F(HEAP[d+20]+24*(n+1))==0?14:15;break;case 14:k=0;b=22;
break;case 15:k=1;n+=2;b=17;break;case 16:k!=0?(c=16,b=17):(c=16,b=23);break;case 17:b=n<j?18:22;break;case 18:k=o(HEAP[d+20]+24*n,12,lb);n+=1;k!=0?(c=18,b=19):(c=18,b=23);break;case 19:b=n<j?20:22;break;case 20:b=HEAP[HEAP[d+20]+24*n]==36?25:21;break;case 21:b=HEAP[HEAP[d+20]+24*n]==16?25:22;break;case 22:var p=k,c=22;b=23;break;case 23:b=(c==22?p:c==18?0:0)==0?25:24;break;case 24:b=n+2<=j?9:25;break;case 25:b=k!=0?26:55;break;case 26:k=s(d,n);b=55;break;case 27:b=l==12?28:31;break;case 28:k=o(HEAP[d+
20]+24*(j-1),12,lb);b=k==0?29:30;break;case 29:g=0;b=56;break;case 30:j-=1;b=31;break;case 31:k=b=z(HEAP[d+20]);n+=1;b!=0?(c=31,b=32):(c=31,b=50);break;case 32:b=n+2<=j?33:49;break;case 33:b=HEAP[HEAP[d+20]+24*n]==22?34:49;break;case 34:b=o(HEAP[d+20]+24*n,22,Pb)==0?37:35;break;case 35:b=F(HEAP[d+20]+24*(n+1))==0?37:36;break;case 36:f=1;b=38;break;case 37:f=0;b=38;break;case 38:var q=f;k=q;n+=2;c=38;b=50;break;case 39:b=o(HEAP[d+20]+24*n,12,lb)==0?41:40;break;case 40:b=z(HEAP[d+20]+24*(n+1))==0?41:
42;break;case 41:k=0;n+=2;c=41;b=50;break;case 42:k=1;n+=2;b=j-n>1?43:49;break;case 43:b=HEAP[HEAP[d+20]+24*n]==22?44:49;break;case 44:b=o(HEAP[d+20]+24*n,22,Pb)==0?47:45;break;case 45:b=F(HEAP[d+20]+24*(n+1))==0?47:46;break;case 46:e=1;b=48;break;case 47:e=0;b=48;break;case 48:var r=e;k=r;n+=2;c=48;b=50;break;case 49:var t=k,c=49;b=50;break;case 50:b=(c==41?0:c==48?r:c==49?t:c==31?0:q)==0?52:51;break;case 51:b=j-n>1?39:52;break;case 52:b=k!=0?53:55;break;case 53:b=j!=n?54:55;break;case 54:k=0;h(Vb);
b=55;break;case 55:g=k;b=56;break;case 56:return a=g;default:assert(0,"bad label: "+b)}}function v(a){var b;for(b=-1;;)switch(b){case -1:var c,d;c=a;b=m(c,332)==0?2:1;break;case 1:b=n(c,1,Dc)==0?2:3;break;case 2:d=0;b=5;break;case 3:d=1;b=HEAP[HEAP[c+20]]!=333?5:4;break;case 4:d=x(HEAP[c+20]);b=6;break;case 5:a:{b=HEAP[c+20];d=void 0;var e=null;for(d=-1;;)switch(d){case -1:var f,g,h,j=f=b;d=HEAP[f+16]==3?1:2;break;case 1:var k=v(HEAP[j+20]+48);h=k;e=1;d=3;break;case 2:var l=n(j,2,Nc);h=l;e=2;d=3;
break;case 3:d=(e==2?l:k)!=0?4:9;break;case 4:d=o(HEAP[f+20],1,yb)==0?7:5;break;case 5:d=V(HEAP[f+20]+24)==0?7:6;break;case 6:g=1;d=8;break;case 7:g=0;d=8;break;case 8:h=g;d=9;break;case 9:d=b=h;break a;default:assert(0,"bad label: "+d)}d=void 0}b=6;break;case 6:return a=d;default:assert(0,"bad label: "+b)}}function w(a){var b;for(b=-1;;)switch(b){case -1:var c,d;c=a;b=m(c,335)==0?2:1;break;case 1:b=n(c,1,yc)==0?2:3;break;case 2:d=0;b=5;break;case 3:d=1;b=HEAP[HEAP[c+20]]!=336?5:4;break;case 4:d=
y(HEAP[c+20]);b=6;break;case 5:a:{b=HEAP[c+20];d=void 0;var e=null;for(d=-1;;)switch(d){case -1:var f,g,h,j=f=b;d=HEAP[f+16]==3?1:2;break;case 1:var k=w(HEAP[j+20]+48);h=k;e=1;d=3;break;case 2:var l=n(j,2,ic);h=l;e=2;d=3;break;case 3:d=(e==2?l:k)!=0?4:9;break;case 4:d=o(HEAP[f+20],1,yb)==0?7:5;break;case 5:d=V(HEAP[f+20]+24)==0?7:6;break;case 6:g=1;d=8;break;case 7:g=0;d=8;break;case 8:h=g;d=9;break;case 9:d=b=h;break a;default:assert(0,"bad label: "+d)}d=void 0}b=6;break;case 6:return a=d;default:assert(0,
"bad label: "+b)}}function x(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,h=d=a;b=HEAP[d+16]==5?1:2;break;case 1:var j=v(HEAP[h+20]+96);f=j;c=1;b=3;break;case 2:var k=n(h,4,Kc);f=k;c=2;b=3;break;case 3:b=(c==2?k:j)!=0?4:11;break;case 4:b=o(HEAP[d+20],1,sa)==0?9:5;break;case 5:b=wa(HEAP[d+20]+24)==0?9:6;break;case 6:b=o(HEAP[d+20]+48,1,Bb)==0?9:7;break;case 7:b=void 0;b=p(HEAP[d+20]+72,301,g+12,vb);b=b==0?9:8;break;case 8:e=1;b=10;break;case 9:e=0;b=10;break;case 10:f=e;b=11;break;case 11:return a=
f;default:assert(0,"bad label: "+b)}}function y(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g=d=a;b=HEAP[d+16]==5?1:2;break;case 1:var h=w(HEAP[g+20]+96);f=h;c=1;b=3;break;case 2:var j=n(g,4,cb);f=j;c=2;b=3;break;case 3:b=(c==2?j:h)!=0?4:11;break;case 4:b=o(HEAP[d+20],1,sa)==0?9:5;break;case 5:b=wa(HEAP[d+20]+24)==0?9:6;break;case 6:b=o(HEAP[d+20]+48,1,Bb)==0?9:7;break;case 7:b=Q(HEAP[d+20]+72)==0?9:8;break;case 8:e=1;b=10;break;case 9:e=0;b=10;break;case 10:f=e;b=11;break;case 11:return a=
f;default:assert(0,"bad label: "+b)}}function z(a){var b;for(b=-1;;)switch(b){case -1:var c,d,e,f;c=a;e=HEAP[c+16];f=m(c,265);b=f!=0?1:11;break;case 1:b=e==1?2:3;break;case 2:f=m(HEAP[c+20],1);b=11;break;case 3:var h=c;b=e==3?4:10;break;case 4:b=o(HEAP[h+20],7,Eb)==0?8:5;break;case 5:b=void 0;b=p(HEAP[c+20]+24,266,g+14,Qb);b=b==0?8:6;break;case 6:b=o(HEAP[c+20]+48,8,Yb)==0?8:7;break;case 7:d=1;b=9;break;case 8:d=0;b=9;break;case 9:f=d;b=11;break;case 10:f=n(h,1,$b);b=11;break;case 11:return a=f;default:assert(0,
"bad label: "+b)}}function C(a){var b;for(b=-1;;)switch(b){case -1:var c,d;c=a;b=m(c,267)==0?2:1;break;case 1:b=n(c,1,uc)==0?2:3;break;case 2:d=0;b=6;break;case 3:d=1;var e=c=HEAP[c+20];b=HEAP[c]==268?4:5;break;case 4:d=A(e);b=6;break;case 5:d=E(e);b=6;break;case 6:return a=d;default:assert(0,"bad label: "+b)}}function A(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,h,j;d=a;g=HEAP[d+16];b=m(d,268)==0?5:1;break;case 1:b=g<=1?5:2;break;case 2:b=G(HEAP[d+20])==0?5:3;break;case 3:b=o(HEAP[d+
20]+24*(g-1),4,0)==0?5:4;break;case 4:f=1;b=6;break;case 5:f=0;b=6;break;case 6:var k=f;h=k;g<=1?(c=6,b=7):(c=6,b=8);break;case 7:var l=n(d,2,Gc);h=l;c=7;b=8;break;case 8:b=c==7?l:k;g-=1;b=b!=0?9:11;break;case 9:b=(g&1)==0?10:11;break;case 10:c=HEAP[d+20];g-=1;var p=o(c+24*g,13,pc);h=p;c=10;b=12;break;case 11:var q=h,c=11;b=12;break;case 12:b=(c==11?q:p)!=0?13:22;break;case 13:b=g>2?14:22;break;case 14:j=1;var r=h,c=14;b=20;break;case 15:b=o(HEAP[d+20]+24*j,13,pc)==0?18:16;break;case 16:b=G(HEAP[d+
20]+24*(j+1))==0?18:17;break;case 17:e=1;b=19;break;case 18:e=0;b=19;break;case 19:var s=e;h=s;j+=2;c=19;b=20;break;case 20:b=(c==19?s:r)==0?22:21;break;case 21:b=j<g?15:22;break;case 22:return a=h;default:assert(0,"bad label: "+b)}}function G(a){var b;for(b=-1;;)switch(b){case -1:var c,d,e;c=a;d=HEAP[c+16];e=n(c,1,Zb);b=e!=0?1:4;break;case 1:b=HEAP[HEAP[c+20]];b=b==270|b==272|b==273|b==274|b==275|b==281|b==289|b==291|b==290?2:3;break;case 2:e=Ya(HEAP[c+20]);b=6;break;case 3:e=0;h(wc);b=6;break;case 4:b=
d==1?5:6;break;case 5:e=0;_PyErr_Format(HEAP[Xa],sc,allocate([HEAP[HEAP[c+20]],0,0,0],["i32",0,0,0],ALLOC_STACK));b=6;break;case 6:return a=e;default:assert(0,"bad label: "+b)}}function E(a){var b;for(b=-1;;)switch(b){case -1:var c,d,e;c=a;b=m(c,292)==0?2:1;break;case 1:b=n(c,1,Oc)==0?2:3;break;case 2:d=e=0;b=7;break;case 3:e=1;c=HEAP[c+20];b=HEAP[c];b=b==293|b==294|b==295|b==296|b==297|b==262|b==329|b==261?4:5;break;case 4:e=Ya(c);b=6;break;case 5:e=0;_PyErr_Format(HEAP[Xa],Zc,allocate([HEAP[c],
0,0,0],["i32",0,0,0],ALLOC_STACK));b=6;break;case 6:d=e;b=7;break;case 7:return a=d;default:assert(0,"bad label: "+b)}}function D(a){var b;for(b=-1;;)switch(b){case -1:var c,d=b=a;b=HEAP[b]==340?1:2;break;case 1:c=R(d);b=3;break;case 2:c=u(d);b=3;break;case 3:return a=c;default:assert(0,"bad label: "+b)}}function R(a){var b;for(b=-1;;)switch(b){case -1:var c,d,e;c=a;d=HEAP[c+16];b=m(c,340)==0?3:1;break;case 1:b=d==1|d==2?2:3;break;case 2:b=o(HEAP[c+20],1,Gd)==0?3:4;break;case 3:e=0;b=6;break;case 4:e=
1;b=d==2?5:6;break;case 5:e=u(HEAP[c+20]+24);b=6;break;case 6:return a=e;default:assert(0,"bad label: "+b)}}function M(a){var b;for(b=-1;;)switch(b){case -1:var c,d,e,f;c=a;e=HEAP[c+16];f=m(c,284);b=f!=0?1:11;break;case 1:b=e==1?2:3;break;case 2:f=o(HEAP[c+20],1,0);b=11;break;case 3:var g=c;b=e==3?4:10;break;case 4:b=o(HEAP[g+20],1,0)==0?8:5;break;case 5:b=o(HEAP[c+20]+24,1,Od)==0?8:6;break;case 6:b=o(HEAP[c+20]+48,1,0)==0?8:7;break;case 7:d=1;b=9;break;case 8:d=0;b=9;break;case 9:f=d;b=11;break;
case 10:f=n(g,3,fd);b=11;break;case 11:return a=f;default:assert(0,"bad label: "+b)}}function L(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,h,j;d=a;g=HEAP[d+16];b=m(d,288)==0?4:1;break;case 1:b=((g&1)!=0^1)!=0?4:2;break;case 2:b=o(HEAP[d+20],1,0)==0?4:3;break;case 3:f=1;b=5;break;case 4:f=0;b=5;break;case 5:var k=f;h=k;j=1;c=5;b=11;break;case 6:b=o(HEAP[d+20]+24*j,23,Ld)==0?9:7;break;case 7:b=o(HEAP[d+20]+24*(j+1),1,0)==0?9:8;break;case 8:e=1;b=10;break;case 9:e=0;b=10;break;case 10:var l=
e;h=l;j+=2;c=10;b=11;break;case 11:b=(c==10?l:k)==0?13:12;break;case 12:b=j<g?6:13;break;case 13:return a=h;default:assert(0,"bad label: "+b)}}function I(a){var b;for(b=-1;;)switch(b){case -1:var c,d,e,f;c=a;e=HEAP[c+16];f=m(c,285);b=f!=0?1:11;break;case 1:b=e==1?2:3;break;case 2:f=L(HEAP[c+20]);b=11;break;case 3:b=e==3?4:10;break;case 4:b=L(HEAP[c+20])==0?8:5;break;case 5:b=o(HEAP[c+20]+24,1,Od)==0?8:6;break;case 6:b=o(HEAP[c+20]+48,1,0)==0?8:7;break;case 7:d=1;b=9;break;case 8:d=0;b=9;break;case 9:f=
d;b=11;break;case 10:f=0;h(oe);b=11;break;case 11:return a=f;default:assert(0,"bad label: "+b)}}function J(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,h;d=a;f=HEAP[d+16];var j=M(HEAP[d+20]);g=j;h=1;c=-1;b=6;break;case 1:b=o(HEAP[d+20]+24*h,12,lb)==0?4:2;break;case 2:b=M(HEAP[d+20]+24*(h+1))==0?4:3;break;case 3:e=1;b=5;break;case 4:e=0;b=5;break;case 5:var k=e;g=k;h+=2;c=5;b=6;break;case 6:b=(c==5?k:j)==0?8:7;break;case 7:b=h+1<f?1:8;break;case 8:return a=g;default:assert(0,"bad label: "+
b)}}function F(a){var b;for(b=-1;;)switch(b){case -1:var c,d,e,f,g;c=a;f=HEAP[c+16];b=m(c,304)==0?2:1;break;case 1:b=((f&1)!=0^1)!=0?2:3;break;case 2:g=0;b=20;break;case 3:g=1;b=HEAP[HEAP[c+20]]!=321?9:4;break;case 4:b=f!=1?7:5;break;case 5:a:{b=HEAP[c+20];for(var h=void 0,h=-1;;)switch(h){case -1:var j,k,l;j=b;k=HEAP[j+16];h=m(j,321)==0?7:1;break;case 1:h=k==3|k==4?2:7;break;case 2:h=o(HEAP[j+20],1,Fc)==0?7:3;break;case 3:h=o(HEAP[j+20]+24*(k-2),11,Lb)==0?7:4;break;case 4:h=F(HEAP[j+20]+24*(k-1))==
0?7:5;break;case 5:l=1;h=k!=4?9:6;break;case 6:l=t(HEAP[j+20]+24);h=9;break;case 7:l=0;h=_PyErr_Occurred()==0?8:9;break;case 8:n(j,3,Dd);h=9;break;case 9:b=l;break a;default:assert(0,"bad label: "+h)}b=void 0}b=b==0?7:6;break;case 6:e=1;b=8;break;case 7:e=0;b=8;break;case 8:g=e;b=20;break;case 9:b=g!=0?10:20;break;case 10:g=Q(HEAP[c+20]);b=g==0?18:11;break;case 11:b=f==1?17:12;break;case 12:b=f!=5?18:13;break;case 13:b=o(HEAP[c+20]+24,1,yb)==0?18:14;break;case 14:b=Q(HEAP[c+20]+48)==0?18:15;break;
case 15:b=o(HEAP[c+20]+72,1,fc)==0?18:16;break;case 16:b=F(HEAP[c+20]+96)!=0?17:18;break;case 17:d=1;b=19;break;case 18:d=0;b=19;break;case 19:g=d;b=20;break;case 20:return a=g;default:assert(0,"bad label: "+b)}}function V(a){var b;for(b=-1;;)switch(b){case -1:var c,d,e;c=a;d=HEAP[c+16];b=m(c,302)==0?2:1;break;case 1:b=d!=1?2:3;break;case 2:e=0;b=7;break;case 3:e=1;b=HEAP[HEAP[c+20]]!=303?5:4;break;case 4:a:{b=HEAP[c+20];e=void 0;for(e=-1;;)switch(e){case -1:var f,g,h;f=b;g=HEAP[f+16];e=m(f,303)==
0?7:1;break;case 1:e=g==3|g==4?2:7;break;case 2:e=o(HEAP[f+20],1,Fc)==0?7:3;break;case 3:e=o(HEAP[f+20]+24*(g-2),11,Lb)==0?7:4;break;case 4:e=F(HEAP[f+20]+24*(g-1))==0?7:5;break;case 5:h=1;e=g!=4?9:6;break;case 6:h=t(HEAP[f+20]+24);e=9;break;case 7:h=0;e=_PyErr_Occurred()==0?8:9;break;case 8:n(f,3,De);e=9;break;case 9:e=b=h;break a;default:assert(0,"bad label: "+e)}e=void 0}b=7;break;case 5:b=e!=0?6:7;break;case 6:e=Q(HEAP[c+20]);b=7;break;case 7:return a=e;default:assert(0,"bad label: "+b)}}function Q(a){var b,
c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,h;d=a;f=HEAP[d+16];b=m(d,305)==0?2:1;break;case 1:b=((f&1)!=0^1)!=0?2:3;break;case 2:g=0;b=11;break;case 3:var j=Z(HEAP[d+20]);g=j;h=1;c=3;b=9;break;case 4:b=o(HEAP[d+20]+24*h,1,Rd)==0?7:5;break;case 5:b=Z(HEAP[d+20]+24*(h+1))==0?7:6;break;case 6:e=1;b=8;break;case 7:e=0;b=8;break;case 8:var k=e;g=k;h+=2;c=8;b=9;break;case 9:b=(c==8?k:j)==0?11:10;break;case 10:b=h<f?4:11;break;case 11:return a=g;default:assert(0,"bad label: "+b)}}function Z(a){var b,
c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,h,j;d=a;h=HEAP[d+16];b=m(d,306)==0?4:1;break;case 1:b=((h&1)!=0^1)!=0?4:2;break;case 2:b=K(HEAP[d+20])==0?4:3;break;case 3:f=1;b=5;break;case 4:f=0;b=5;break;case 5:var k=f;j=k;g=1;c=5;b=11;break;case 6:b=o(HEAP[d+20]+24*g,1,vd)==0?9:7;break;case 7:b=K(HEAP[d+20])==0?9:8;break;case 8:e=1;b=10;break;case 9:e=0;b=10;break;case 10:var l=e;j=l;g+=2;c=10;b=11;break;case 11:b=(c==10?l:k)==0?13:12;break;case 12:b=g<h?6:13;break;case 13:return a=j;default:assert(0,
"bad label: "+b)}}function K(a){var b;for(b=-1;;)switch(b){case -1:var c,d,e,f;c=a;e=HEAP[c+16];b=m(c,307)==0?2:1;break;case 1:b=e==1|e==2?3:2;break;case 2:f=0;b=11;break;case 3:f=1;b=e==2?4:9;break;case 4:b=o(HEAP[c+20],1,Qc)==0?7:5;break;case 5:b=K(HEAP[c+20]+24)==0?7:6;break;case 6:d=1;b=8;break;case 7:d=0;b=8;break;case 8:f=d;b=11;break;case 9:b=e==1?10:11;break;case 10:f=N(HEAP[c+20]);b=11;break;case 11:return a=f;default:assert(0,"bad label: "+b)}}function N(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,
e,f,g,h,j;d=a;h=HEAP[d+16];b=m(d,308)==0?4:1;break;case 1:b=((h&1)!=0^1)!=0?4:2;break;case 2:b=ba(HEAP[d+20])==0?4:3;break;case 3:f=1;b=5;break;case 4:f=0;b=5;break;case 5:var k=f;j=k;g=1;c=5;b=11;break;case 6:b=H(HEAP[d+20]+24*g)==0?9:7;break;case 7:b=ba(HEAP[d+20]+24*(g+1))==0?9:8;break;case 8:e=1;b=10;break;case 9:e=0;b=10;break;case 10:var l=e;j=l;g+=2;c=10;b=11;break;case 11:b=(c==10?l:k)==0?13:12;break;case 12:b=g<h?6:13;break;case 13:return a=j;default:assert(0,"bad label: "+b)}}function H(a){var b;
for(b=-1;;)switch(b){case -1:var c,d,e,f;c=a;e=0;f=HEAP[c+16];b=m(c,309)==0?1:2;break;case 1:d=0;b=21;break;case 2:var g=c;b=f==1?3:10;break;case 3:c=HEAP[g+20];b=HEAP[c];b=b==1?5:b==20?4:b==21?4:b==22?4:b==28?4:b==29?4:b==30?4:b==31?4:9;break;case 4:e=1;b=20;break;case 5:b=_strcmp(HEAP[c+4],Bb)==0?7:6;break;case 6:b=_strcmp(HEAP[c+4],je)==0?7:8;break;case 7:e=1;b=20;break;case 8:e=0;_PyErr_Format(HEAP[Xa],re,allocate([HEAP[c+4],0,0,0],["i8*",0,0,0],ALLOC_STACK));b=20;break;case 9:h(se);b=20;break;
case 10:e=n(g,2,Ob);b=e!=0?11:20;break;case 11:b=m(HEAP[c+20],1)==0?18:12;break;case 12:b=m(HEAP[c+20]+24,1)==0?18:13;break;case 13:b=_strcmp(HEAP[HEAP[c+20]+4],je)!=0?15:14;break;case 14:b=_strcmp(HEAP[HEAP[c+20]+24+4],Qc)==0?17:15;break;case 15:b=_strcmp(HEAP[HEAP[c+20]+4],Qc)!=0?18:16;break;case 16:b=_strcmp(HEAP[HEAP[c+20]+24+4],Bb)==0?17:18;break;case 17:e=1;b=20;break;case 18:e=0;b=_PyErr_Occurred()==0?19:20;break;case 19:h(Be);b=20;break;case 20:d=e;b=21;break;case 21:return a=d;default:assert(0,
"bad label: "+b)}}function ba(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,h,j;d=a;h=HEAP[d+16];b=m(d,310)==0?4:1;break;case 1:b=((h&1)!=0^1)!=0?4:2;break;case 2:b=W(HEAP[d+20])==0?4:3;break;case 3:f=1;b=5;break;case 4:f=0;b=5;break;case 5:var k=f;j=k;g=2;c=5;b=11;break;case 6:b=W(HEAP[d+20]+24*g)==0?9:7;break;case 7:b=o(HEAP[d+20]+24*(g-1),18,te)==0?9:8;break;case 8:e=1;b=10;break;case 9:e=0;b=10;break;case 10:var l=e;j=l;g+=2;c=10;b=11;break;case 11:b=(c==10?l:k)==0?13:12;break;case 12:b=
g<h?6:13;break;case 13:return a=j;default:assert(0,"bad label: "+b)}}function W(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,h,j;d=a;h=HEAP[d+16];b=m(d,311)==0?4:1;break;case 1:b=((h&1)!=0^1)!=0?4:2;break;case 2:b=B(HEAP[d+20])==0?4:3;break;case 3:f=1;b=5;break;case 4:f=0;b=5;break;case 5:var k=f;j=k;g=2;c=5;b=11;break;case 6:b=o(HEAP[d+20]+24*(g-1),33,wb)==0?9:7;break;case 7:b=B(HEAP[d+20]+24*g)==0?9:8;break;case 8:e=1;b=10;break;case 9:e=0;b=10;break;case 10:var l=e;j=l;g+=2;c=10;b=
11;break;case 11:b=(c==10?l:k)==0?13:12;break;case 12:b=g<h?6:13;break;case 13:return a=j;default:assert(0,"bad label: "+b)}}function B(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,h,j;d=a;h=HEAP[d+16];b=m(d,312)==0?4:1;break;case 1:b=((h&1)!=0^1)!=0?4:2;break;case 2:b=fa(HEAP[d+20])==0?4:3;break;case 3:f=1;b=5;break;case 4:f=0;b=5;break;case 5:var k=f;j=k;g=1;c=5;b=11;break;case 6:b=o(HEAP[d+20]+24*g,19,aa)==0?9:7;break;case 7:b=fa(HEAP[d+20]+24*(g+1))==0?9:8;break;case 8:e=1;b=10;break;
case 9:e=0;b=10;break;case 10:var l=e;j=l;g+=2;c=10;b=11;break;case 11:b=(c==10?l:k)==0?13:12;break;case 12:b=g<h?6:13;break;case 13:return a=j;default:assert(0,"bad label: "+b)}}function Y(a,b,c,d){var e,f=null;for(e=-1;;)switch(e){case -1:var g,h,j,k,l,n,o,p;g=a;h=b;j=c;k=d;n=1;o=HEAP[g+16];e=((o&1)!=0^1)!=0?3:1;break;case 1:e=FUNCTION_TABLE[h](HEAP[g+20])==0?3:2;break;case 2:l=1;e=4;break;case 3:l=0;e=4;break;case 4:var q=l;p=q;f=4;e=11;break;case 5:e=HEAP[HEAP[g+20]+24*n]!=j?6:7;break;case 6:var r=
m(HEAP[g+20]+24*n,k);p=r;f=6;e=8;break;case 7:var s=p,f=7;e=8;break;case 8:e=(f==7?s:r)!=0?9:10;break;case 9:p=FUNCTION_TABLE[h](HEAP[g+20]+24*(n+1));e=10;break;case 10:n+=2;var t=p,f=10;e=11;break;case 11:e=(f==10?t:q)==0?13:12;break;case 12:e=n<o?5:13;break;case 13:return a=p;default:assert(0,"bad label: "+e)}}function fa(a){var b;for(b=-1;;)switch(b){case -1:var c,d;c=a;b=m(c,313)==0?3:1;break;case 1:b=Y(c,g+16,34,35)==0?3:2;break;case 2:d=1;b=4;break;case 3:d=0;b=4;break;case 4:return a=d;default:assert(0,
"bad label: "+b)}}function ha(a){var b;for(b=-1;;)switch(b){case -1:var c,d;c=a;b=m(c,314)==0?3:1;break;case 1:b=Y(c,g+18,14,15)==0?3:2;break;case 2:d=1;b=4;break;case 3:d=0;b=4;break;case 4:return a=d;default:assert(0,"bad label: "+b)}}function la(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,h,j;d=a;g=1;h=HEAP[d+16];b=m(d,315)==0?4:1;break;case 1:b=((h&1)!=0^1)!=0?4:2;break;case 2:b=ra(HEAP[d+20])==0?4:3;break;case 3:f=1;b=5;break;case 4:f=0;b=5;break;case 5:var k=f;j=k;c=5;b=14;break;
case 6:b=HEAP[HEAP[d+20]+24*g]==16?10:7;break;case 7:b=HEAP[HEAP[d+20]+24*g]==17?10:8;break;case 8:b=HEAP[HEAP[d+20]+24*g]==48?10:9;break;case 9:b=HEAP[HEAP[d+20]+24*g]==24?10:12;break;case 10:b=ra(HEAP[d+20]+24*(g+1))==0?12:11;break;case 11:e=1;b=13;break;case 12:e=0;b=13;break;case 13:var l=e;j=l;g+=2;c=13;b=14;break;case 14:b=(c==13?l:k)==0?16:15;break;case 15:b=g<h?6:16;break;case 16:return a=j;default:assert(0,"bad label: "+b)}}function ra(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,
f;d=a;f=HEAP[d+16];b=m(d,316)==0?10:1;break;case 1:var g=f;g!=2?(c=1,b=7):(c=1,b=2);break;case 2:b=HEAP[HEAP[d+20]]==14?5:3;break;case 3:b=HEAP[HEAP[d+20]]==15?5:4;break;case 4:b=HEAP[HEAP[d+20]]==32?5:6;break;case 5:b=ra(HEAP[d+20]+24)!=0?9:6;break;case 6:var h=f,c=6;b=7;break;case 7:b=(c==6?h:g)!=1?10:8;break;case 8:b=ya(HEAP[d+20])!=0?9:10;break;case 9:e=1;b=11;break;case 10:e=0;b=11;break;case 11:return a=e;default:assert(0,"bad label: "+b)}}function ya(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,
e,f,j,k,l,q;d=a;k=1;l=HEAP[d+16];b=m(d,317)==0?4:1;break;case 1:b=l<=0?4:2;break;case 2:b=Da(HEAP[d+20])==0?4:3;break;case 3:j=1;b=5;break;case 4:j=0;b=5;break;case 5:var r=j;q=r;c=5;b=7;break;case 6:b=HEAP[d+20]+24*k;k+=1;var s;a:{c=void 0;for(c=-1;;)switch(c){case -1:var t,u,B,v,w;t=b;v=HEAP[t+16];c=m(t,322)==0?18:1;break;case 1:c=v==2|v==3?2:18;break;case 2:w=1;c=HEAP[HEAP[t+20]];c=c==7?3:c==9?6:c==23?12:17;break;case 3:w=o(HEAP[t+20]+24*(v-1),8,Yb);c=w!=0?4:19;break;case 4:c=v==3?5:19;break;case 5:w=
Na(HEAP[t+20]+24);c=19;break;case 6:c=n(t,3,be)==0?10:7;break;case 7:c=p(HEAP[t+20]+24,323,g+20,hd)==0?10:8;break;case 8:c=m(HEAP[t+20]+48,10)==0?10:9;break;case 9:B=1;c=11;break;case 10:B=0;c=11;break;case 11:w=B;c=19;break;case 12:c=n(t,2,be)==0?15:13;break;case 13:c=m(HEAP[t+20]+24,1)==0?15:14;break;case 14:u=1;c=16;break;case 15:u=0;c=16;break;case 16:w=u;c=19;break;case 17:w=0;c=19;break;case 18:w=0;n(t,2,be);c=19;break;case 19:s=b=w;break a;default:assert(0,"bad label: "+c)}s=void 0}q=s;c=6;
b=7;break;case 7:b=(c==6?s:r)==0?10:8;break;case 8:b=k>=l?10:9;break;case 9:b=HEAP[HEAP[d+20]+24*k]==322?6:10;break;case 10:b=q!=0?11:22;break;case 11:b=k<l?12:22;break;case 12:b=(l-k&1)!=0?13:19;break;case 13:h(Hc);f=0;b=23;break;case 14:b=o(HEAP[d+20]+24*k,36,Tb)==0?17:15;break;case 15:b=ra(HEAP[d+20]+24*(k+1))==0?17:16;break;case 16:e=1;b=18;break;case 17:e=0;b=18;break;case 18:var x=e;q=x;k+=2;c=18;b=20;break;case 19:var H=q,c=19;b=20;break;case 20:b=(c==19?H:x)==0?22:21;break;case 21:b=l-1>k?
14:22;break;case 22:f=q;b=23;break;case 23:return a=f;default:assert(0,"bad label: "+b)}}function Da(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,j,k,l;d=a;k=HEAP[d+16];l=m(d,318);b=l!=0?1:39;break;case 1:b=k<=0?2:3;break;case 2:var q=n(d,k+1,ae);l=q;c=2;b=4;break;case 3:var r=l,c=3;b=4;break;case 4:b=(c==3?r:q)!=0?5:39;break;case 5:b=HEAP[HEAP[d+20]];b=b==1?33:b==2?33:b==3?34:b==7?6:b==9?13:b==25?27:b==26?22:38;break;case 6:b=k>3?8:7;break;case 7:b=o(HEAP[d+20]+24*(k-1),8,Yb)==0?8:9;break;
case 8:l=0;b=39;break;case 9:l=1;b=k==3?10:39;break;case 10:var s=HEAP[d+20]+24;b=HEAP[HEAP[d+20]+24]==340?11:12;break;case 11:l=R(s);b=39;break;case 12:a:{l=s;b=void 0;var t=null;for(b=-1;;)switch(b){case -1:var u,B,v,w,H;u=l;w=v=HEAP[u+16];b=v==0?1:2;break;case 1:h(Vc);b=3;break;case 2:w=F(HEAP[u+20]);b=3;break;case 3:b=v!=2?6:4;break;case 4:b=HEAP[HEAP[u+20]+24]!=336?6:5;break;case 5:w=y(HEAP[u+20]+24);b=19;break;case 6:H=1;var O=w,t=6;b=12;break;case 7:b=o(HEAP[u+20]+24*H,12,lb)==0?10:8;break;
case 8:b=F(HEAP[u+20]+24*(H+1))==0?10:9;break;case 9:B=1;b=11;break;case 10:B=0;b=11;break;case 11:var U=B;w=U;H+=2;t=11;b=12;break;case 12:b=(t==11?U:O)==0?14:13;break;case 13:b=v-H>1?7:14;break;case 14:b=w==0?17:15;break;case 15:b=v-1!=H?17:16;break;case 16:w=o(HEAP[u+20]+24*H,12,lb);b=19;break;case 17:b=H!=v?18:19;break;case 18:w=0;h(Ke);b=19;break;case 19:l=w;break a;default:assert(0,"bad label: "+b)}l=void 0}b=39;break;case 13:b=k==2?14:15;break;case 14:l=m(HEAP[d+20]+24,10);b=39;break;case 15:b=
k==3?16:21;break;case 16:a:{b=HEAP[d+20]+24;for(var t=void 0,N=null,t=-1;;)switch(t){case -1:var z,A,xa,K,C;z=b;K=xa=HEAP[z+16];t=xa==0?1:2;break;case 1:h(ue);t=3;break;case 2:K=F(HEAP[z+20]);t=3;break;case 3:t=xa!=2?6:4;break;case 4:t=HEAP[HEAP[z+20]+24]!=333?6:5;break;case 5:K=x(HEAP[z+20]+24);t=19;break;case 6:C=1;var I=K,N=6,t=12;break;case 7:t=o(HEAP[z+20]+24*C,12,lb)==0?10:8;break;case 8:t=F(HEAP[z+20]+24*(C+1))==0?10:9;break;case 9:A=1;t=11;break;case 10:A=0;t=11;break;case 11:var ea=A;K=ea;
C+=2;N=11;t=12;break;case 12:t=(N==11?ea:I)==0?14:13;break;case 13:t=xa-C>1?7:14;break;case 14:t=K==0?17:15;break;case 15:t=xa-1!=C?17:16;break;case 16:K=o(HEAP[z+20]+24*C,12,lb);t=19;break;case 17:t=C!=xa?18:19;break;case 18:K=0;h(wd);t=19;break;case 19:b=K;break a;default:assert(0,"bad label: "+t)}b=void 0}b=b==0?19:17;break;case 17:b=m(HEAP[d+20]+48,10)==0?19:18;break;case 18:f=1;b=20;break;case 19:f=0;b=20;break;case 20:l=f;b=39;break;case 21:l=0;h(qe);b=39;break;case 22:b=k>3?24:23;break;case 23:b=
m(HEAP[d+20]+24*(k-1),27)==0?24:25;break;case 24:l=0;b=39;break;case 25:l=1;b=k==3?26:39;break;case 26:a:{l=HEAP[d+20]+24;b=void 0;t=null;for(b=-1;;)switch(b){case -1:var T,qb,W,ga,X,va,D,cb,E,Q;T=l;D=HEAP[T+16];cb=m(T,328);Q=E=0;b=D<=0?1:2;break;case 1:throw ___assert_fail(Ic,nc,2987,kd),"Reached an unreachable!";case 2:b=cb==0?50:3;break;case 3:b=D==1?5:4;break;case 4:b=HEAP[HEAP[T+20]+24]==12?5:14;break;case 5:cb=HEAP[T+20]+24*E;E+=1;var sa=F(cb);cb=sa;t=5;b=11;break;case 6:b=o(HEAP[T+20]+24*E,
12,lb)==0?9:7;break;case 7:b=F(HEAP[T+20]+24*(E+1))==0?9:8;break;case 8:va=1;b=10;break;case 9:va=0;b=10;break;case 10:var Bc=va;cb=Bc;E+=2;t=10;b=11;break;case 11:b=(t==10?Bc:sa)==0?13:12;break;case 12:b=D-E>1?6:13;break;case 13:Q=1;b=50;break;case 14:b=cb==0?57:15;break;case 15:b=HEAP[HEAP[T+20]+24]!=336?21:16;break;case 16:b=F(HEAP[T+20])==0?19:17;break;case 17:b=y(HEAP[T+20]+24)==0?19:18;break;case 18:X=1;b=20;break;case 19:X=0;b=20;break;case 20:var Bb=X;cb=Bb;t=20;b=51;break;case 21:b=cb==0?
50:22;break;case 22:b=HEAP[T+16]<=3?31:23;break;case 23:b=HEAP[HEAP[T+20]+72]!=336?31:24;break;case 24:b=F(HEAP[T+20])==0?29:25;break;case 25:b=o(HEAP[T+20]+24,11,Lb)==0?29:26;break;case 26:b=F(HEAP[T+20]+48)==0?29:27;break;case 27:b=y(HEAP[T+20]+72)==0?29:28;break;case 28:ga=1;b=30;break;case 29:ga=0;b=30;break;case 30:var G=ga;cb=G;t=30;b=51;break;case 31:b=cb!=0?32:57;break;case 32:b=D>2?33:39;break;case 33:b=F(HEAP[T+20]+24*E)==0?37:34;break;case 34:b=o(HEAP[T+20]+24*(E+1),11,Lb)==0?37:35;break;
case 35:b=F(HEAP[T+20]+24*(E+2))==0?37:36;break;case 36:W=1;b=38;break;case 37:W=0;b=38;break;case 38:var Pb=W;cb=Pb;E+=3;t=38;b=47;break;case 39:cb=0;h(Sd);var J=cb,t=39;b=47;break;case 40:b=o(HEAP[T+20]+24*E,12,lb)==0?45:41;break;case 41:b=F(HEAP[T+20]+24*(E+1))==0?45:42;break;case 42:b=o(HEAP[T+20]+24*(E+2),11,Lb)==0?45:43;break;case 43:b=F(HEAP[T+20]+24*(E+3))==0?45:44;break;case 44:qb=1;b=46;break;case 45:qb=0;b=46;break;case 46:var Oa=qb;cb=Oa;E+=4;t=46;b=47;break;case 47:b=(t==46?Oa:t==38?
Pb:J)==0?49:48;break;case 48:b=D-E>3?40:49;break;case 49:Q=1;b=50;break;case 50:var Y=cb,t=50;b=51;break;case 51:b=(t==50?Y:t==30?G:Bb)!=0?52:57;break;case 52:b=Q!=0?53:57;break;case 53:b=D-1==E?54:55;break;case 54:cb=o(HEAP[T+20]+24*E,12,lb);b=57;break;case 55:b=E!=D?56:57;break;case 56:cb=0;h($c);b=57;break;case 57:l=cb;break a;default:assert(0,"bad label: "+b)}l=void 0}b=39;break;case 27:b=k!=3?31:28;break;case 28:b=p(HEAP[d+20]+24,338,g+10,tc)==0?31:29;break;case 29:b=m(HEAP[d+20]+48,25)==0?31:
30;break;case 30:e=1;b=32;break;case 31:e=0;b=32;break;case 32:l=e;b=39;break;case 33:l=k==1;b=39;break;case 34:j=1;var ba=l,c=34;b=36;break;case 35:var ec=m(HEAP[d+20]+24*j,3);l=ec;j+=1;c=35;b=36;break;case 36:b=(c==35?ec:ba)==0?39:37;break;case 37:b=j<k?35:39;break;case 38:l=0;b=39;break;case 39:return a=l;default:assert(0,"bad label: "+b)}}function Ua(a){var b;for(b=-1;;)switch(b){case -1:var c,d,e;c=a;e=HEAP[c+16];b=m(c,262)==0?8:1;break;case 1:b=e!=5?8:2;break;case 2:b=o(HEAP[c+20]+24*(HEAP[c+
16]+-5),1,Ce)==0?8:3;break;case 3:b=m(HEAP[c+20]+24*(HEAP[c+16]+-4),1)==0?8:4;break;case 4:b=o(HEAP[c+20]+24*(HEAP[c+16]+-2),11,Lb)==0?8:5;break;case 5:a:{b=HEAP[c+20]+24*(HEAP[c+16]+-3);for(var f=void 0,f=-1;;)switch(f){case -1:var g,h,j;g=b;h=HEAP[g+16];f=m(g,263)==0?7:1;break;case 1:f=h==2|h==3?2:7;break;case 2:j=1;f=o(HEAP[g+20],7,Eb)==0?4:3;break;case 3:f=o(HEAP[g+20]+24*(h-1),8,Yb)==0?4:5;break;case 4:j=0;f=8;break;case 5:j=1;f=h==3?6:8;break;case 6:j=t(HEAP[g+20]+24);f=8;break;case 7:j=0;n(g,
2,jc);f=8;break;case 8:b=j;break a;default:assert(0,"bad label: "+f)}b=void 0}b=b==0?8:6;break;case 6:b=r(HEAP[c+20]+24*(HEAP[c+16]+-1))==0?8:7;break;case 7:d=1;b=9;break;case 8:d=0;b=9;break;case 9:return a=d;default:assert(0,"bad label: "+b)}}function Na(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,j,k,l,m,p;d=a;j=HEAP[d+16];k=0;l=1;var q=j;b=j<=0?1:2;break;case 1:g=n(d,q+1,xd);b=46;break;case 2:b=q>1?3:14;break;case 3:k=0;b=9;break;case 4:b=HEAP[HEAP[d+20]+24*k]==331?5:8;break;case 5:m=
HEAP[d+20]+24*k;b=HEAP[m+16]==2?6:8;break;case 6:b=HEAP[HEAP[m+20]+24]==336?7:8;break;case 7:h(cd);g=0;b=46;break;case 8:k+=1;b=9;break;case 9:b=k<j?4:14;break;case 10:b=Pa(HEAP[d+20]+24*k)==0?13:11;break;case 11:b=o(HEAP[d+20]+24*(k+1),12,lb)==0?13:12;break;case 12:l=1;k+=2;c=12;b=15;break;case 13:l=0;_PyErr_Clear();b=14;break;case 14:var r=l,c=14;b=15;break;case 15:b=(c==14?r:1)==0?17:16;break;case 16:b=j-k>1?10:17;break;case 17:l=1;b=j-k>0?18:45;break;case 18:p=HEAP[HEAP[d+20]+24*k];b=p==331?19:
22;break;case 19:l=Pa(HEAP[d+20]+24*k);b=l!=0?20:45;break;case 20:b=k+1!=j?21:45;break;case 21:h(Ed);l=0;b=45;break;case 22:b=p==16?23:36;break;case 23:l=o(HEAP[d+20]+24*k,16,Ge);b=l==0?35:24;break;case 24:b=j-k!=2?26:25;break;case 25:l=F(HEAP[d+20]+24*(k+1));b=45;break;case 26:b=l==0?35:27;break;case 27:b=j-k!=5?35:28;break;case 28:b=F(HEAP[d+20]+24*(k+1))==0?33:29;break;case 29:b=o(HEAP[d+20]+24*(k+2),12,lb)==0?33:30;break;case 30:b=o(HEAP[d+20]+24*(k+3),36,Tb)==0?33:31;break;case 31:b=F(HEAP[d+
20]+24*(k+4))==0?33:32;break;case 32:f=1;b=34;break;case 33:f=0;b=34;break;case 34:l=f;b=45;break;case 35:h(ub);l=0;b=45;break;case 36:b=p==36?37:44;break;case 37:b=j-k==2?38:43;break;case 38:b=o(HEAP[d+20]+24*k,36,Tb)==0?41:39;break;case 39:b=F(HEAP[d+20]+24*(k+1))==0?41:40;break;case 40:e=1;b=42;break;case 41:e=0;b=42;break;case 42:l=e;b=45;break;case 43:h(gd);l=0;b=45;break;case 44:h(Rb);l=0;b=45;break;case 45:g=l;b=46;break;case 46:return a=g;default:assert(0,"bad label: "+b)}}function Pa(a){var b;
for(b=-1;;)switch(b){case -1:var c,d,e,f;c=a;e=HEAP[c+16];b=m(c,331)==0?5:1;break;case 1:b=e==1|e==2|e==3?2:5;break;case 2:b=F(HEAP[c+20])==0?5:3;break;case 3:f=1;b=e!=2?6:4;break;case 4:f=y(HEAP[c+20]+24);b=12;break;case 5:f=0;b=12;break;case 6:b=e==3?7:12;break;case 7:b=o(HEAP[c+20]+24,22,Pb)==0?10:8;break;case 8:b=F(HEAP[c+20]+48)==0?10:9;break;case 9:d=1;b=11;break;case 10:d=0;b=11;break;case 11:f=d;b=12;break;case 12:return a=f;default:assert(0,"bad label: "+b)}}function wa(a){return p(a,326,
g+22,qd)}function Ya(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,j,k,l,s;d=a;k=0;l=1;s=0;c=-1;b=71;break;case 1:k=HEAP[d+16];s=0;b=HEAP[d];b=b==261?5:b==262?2:b==267?6:b==268?18:b==269?7:b==270?20:b==272?21:b==273?22:b==274?23:b==275?8:b==276?28:b==277?33:b==278?38:b==279?17:b==280?39:b==281?40:b==282?41:b==283?42:b==289?43:b==290?44:b==291?45:b==292?19:b==293?46:b==294?47:b==295?48:b==296?49:b==297?3:b==300?50:b==304?54:b==306?55:b==307?56:b==308?57:b==309?59:b==310?60:b==311?61:b==312?
62:b==313?63:b==314?64:b==315?65:b==316?66:b==317?67:b==318?68:b==326?58:b==327?51:b==329?4:b==338?53:b==340?52:69;break;case 2:l=Ua(d);b=70;break;case 3:a:{l=d;b=void 0;var t=null;for(b=-1;;)switch(b){case -1:var v,w,x,O,y;v=l;O=HEAP[v+16];b=m(v,297)==0?6:1;break;case 1:b=(O&1)!=0?6:2;break;case 2:b=o(HEAP[v+20],1,Wc)==0?6:3;break;case 3:b=o(HEAP[v+20]+24*(HEAP[v+16]+-2),11,Lb)==0?6:4;break;case 4:b=r(HEAP[v+20]+24*(HEAP[v+16]+-1))==0?6:5;break;case 5:w=1;b=7;break;case 6:w=0;b=7;break;case 7:var U=
w;y=U;x=1;t=7;b=9;break;case 8:var z;b:{y=HEAP[v+20]+24*x;z=void 0;for(z=-1;;)switch(z){case -1:var cb,ga,X,va;cb=y;X=HEAP[cb+16];z=m(cb,298)==0?3:1;break;case 1:z=X==1|X==3?2:3;break;case 2:z=F(HEAP[cb+20])==0?3:4;break;case 3:va=0;z=10;break;case 4:va=1;z=X==3?5:10;break;case 5:z=o(HEAP[cb+20]+24,1,Od)==0?8:6;break;case 6:z=ba(HEAP[cb+20]+48)==0?8:7;break;case 7:ga=1;z=9;break;case 8:ga=0;z=9;break;case 9:va=ga;z=10;break;case 10:z=y=va;break b;default:assert(0,"bad label: "+z)}z=void 0}y=z;x+=
2;t=8;b=9;break;case 9:b=(t==8?z:U)==0?11:10;break;case 10:b=O-2>x?8:11;break;case 11:l=y;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 4:l=q(d);b=70;break;case 5:a:{l=d;b=void 0;for(b=-1;;)switch(b){case -1:var Q,Oa,Y,oa,Fb,ea;Q=l;Fb=HEAP[Q+16];b=m(Q,261)==0?4:1;break;case 1:b=Fb!=2?4:2;break;case 2:b:{b=HEAP[Q+20]+24*(HEAP[Q+16]+-2);for(var t=void 0,T=null,t=-1;;)switch(t){case -1:var qb,Sc,$,Ma,M;qb=b;Ma=HEAP[qb+16];t=m(qb,260)==0?3:1;break;case 1:t=Ma<=0?3:2;break;case 2:Sc=
1;t=4;break;case 3:Sc=0;t=4;break;case 4:var P=Sc;M=P;$=0;T=4;t=6;break;case 5:var nc;c:{M=HEAP[qb+20]+24*$;nc=void 0;for(nc=-1;;)switch(nc){case -1:var ab,V,yc;ab=M;yc=HEAP[ab+16];nc=m(ab,259)==0?5:1;break;case 1:nc=yc==3|yc==5|yc==6?2:5;break;case 2:nc=o(HEAP[ab+20],50,Le)==0?5:3;break;case 3:nc=L(HEAP[ab+20]+24)==0?5:4;break;case 4:nc=o(HEAP[ab+20]+24*(HEAP[ab+16]+-1),4,0)==0?5:6;break;case 5:V=0;nc=12;break;case 6:V=1;nc=yc!=3?7:12;break;case 7:nc=o(HEAP[ab+20]+48,7,Eb)==0?9:8;break;case 8:nc=
o(HEAP[ab+20]+24*(HEAP[ab+16]+-2),8,Yb)==0?9:10;break;case 9:V=0;nc=12;break;case 10:V=1;nc=yc==6?11:12;break;case 11:V=Na(HEAP[ab+20]+72);nc=12;break;case 12:nc=M=V;break c;default:assert(0,"bad label: "+nc)}nc=void 0}M=nc;$+=1;T=5;t=6;break;case 6:t=(T==5?nc:P)==0?8:7;break;case 7:t=$<Ma?5:8;break;case 8:b=M;break b;default:assert(0,"bad label: "+t)}b=void 0}b=b==0?4:3;break;case 3:oa=1;b=5;break;case 4:oa=0;b=5;break;case 5:ea=oa;var db=ea==0;b=HEAP[HEAP[Q+20]+24*(HEAP[Q+16]+-1)]==262?6:11;break;
case 6:b=db?9:7;break;case 7:b=Ua(HEAP[Q+20]+24*(HEAP[Q+16]+-1))==0?9:8;break;case 8:Y=1;b=10;break;case 9:Y=0;b=10;break;case 10:ea=Y;b=16;break;case 11:b=db?14:12;break;case 12:b=q(HEAP[Q+20]+24*(HEAP[Q+16]+-1))==0?14:13;break;case 13:Oa=1;b=15;break;case 14:Oa=0;b=15;break;case 15:ea=Oa;b=16;break;case 16:l=ea;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 6:l=C(d);b=70;break;case 7:l=G(d);b=70;break;case 8:b=n(d,1,Ye)==0?15:9;break;case 9:b=HEAP[HEAP[d+20]]==276?14:10;break;
case 10:b=HEAP[HEAP[d+20]]==277?14:11;break;case 11:b=HEAP[HEAP[d+20]]==279?14:12;break;case 12:b=HEAP[HEAP[d+20]]==278?14:13;break;case 13:b=HEAP[HEAP[d+20]]==280?14:15;break;case 14:l=1;s=HEAP[d+20];b=70;break;case 15:l=0;b=k==1?16:70;break;case 16:h(Bc);b=70;break;case 17:a:{l=d;b=void 0;for(b=-1;;)switch(b){case -1:var Sa,Wa;Sa=l;b=m(Sa,279)==0?4:1;break;case 1:b=n(Sa,1,Je)==0?4:2;break;case 2:b=R(HEAP[Sa+20])==0?4:3;break;case 3:Wa=1;b=5;break;case 4:Wa=0;b=5;break;case 5:l=Wa;break a;default:assert(0,
"bad label: "+b)}l=void 0}b=70;break;case 18:l=A(d);b=70;break;case 19:l=E(d);b=70;break;case 20:a:{l=d;b=void 0;t=null;for(b=-1;;)switch(b){case -1:var na,S,Ea,Kc,Ia,fb;na=l;Kc=HEAP[na+16];b=m(na,270)==0?3:1;break;case 1:b=((Kc&1)!=0^1)!=0?3:2;break;case 2:b=u(HEAP[na+20])==0?3:4;break;case 3:Ia=0;b=23;break;case 4:Ia=1;b=Kc!=3?23:5;break;case 5:b=HEAP[HEAP[na+20]+24]!=271?23:6;break;case 6:b=n(HEAP[na+20]+24,1,yd)==0?8:7;break;case 7:b=D(HEAP[na+20]+48)==0?8:9;break;case 8:Ia=0;b=31;break;case 9:Ia=
1;fb=HEAP[HEAP[HEAP[na+20]+24+20]+4];b=_strcmp(fb,Tc)==0?21:10;break;case 10:b=_strcmp(fb,sd)==0?21:11;break;case 11:b=_strcmp(fb,nd)==0?21:12;break;case 12:b=_strcmp(fb,zc)==0?21:13;break;case 13:b=_strcmp(fb,Pc)==0?21:14;break;case 14:b=_strcmp(fb,Ec)==0?21:15;break;case 15:b=_strcmp(fb,zd)==0?21:16;break;case 16:b=_strcmp(fb,Uc)==0?21:17;break;case 17:b=_strcmp(fb,ec)==0?21:18;break;case 18:b=_strcmp(fb,xa)==0?21:19;break;case 19:b=_strcmp(fb,gc)==0?21:20;break;case 20:b=_strcmp(fb,Lc)==0?21:22;
break;case 21:Ia=1;b=31;break;case 22:Ia=0;h(xc);b=31;break;case 23:Ea=1;var kb=Ia,t=23;b=29;break;case 24:b=o(HEAP[na+20]+24*Ea,22,Pb)==0?27:25;break;case 25:b=D(HEAP[na+20]+24*(Ea+1))==0?27:26;break;case 26:S=1;b=28;break;case 27:S=0;b=28;break;case 28:var ja=S;Ia=ja;Ea+=2;t=28;b=29;break;case 29:b=(t==28?ja:kb)==0?31:30;break;case 30:b=Ea<Kc?24:31;break;case 31:l=Ia;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 21:a:{l=d;t=void 0;b=null;for(t=-1;;)switch(t){case -1:var oc,
Nc,Cb,xb,ia,Ic,ic;oc=l;xb=HEAP[oc+16];t=m(oc,272)==0?3:1;break;case 1:t=xb<=0?3:2;break;case 2:t=o(HEAP[oc+20],1,cc)==0?3:4;break;case 3:ia=0;t=29;break;case 4:ia=1;t=xb>1?5:29;break;case 5:t=HEAP[HEAP[oc+20]+24];ic=Ic=1;t=t==304?6:7;break;case 6:ia=HEAP[oc+20]+24*Ic;Ic+=1;var Vb=F(ia);ia=Vb;b=6;t=14;break;case 7:var mc=oc,t=xb<=2?8:9;break;case 8:var ca=n(mc,3,Ad);ia=ca;b=8;t=14;break;case 9:t=m(HEAP[mc+20]+24*Ic,35)==0?12:10;break;case 10:t=F(HEAP[oc+20]+24*(Ic+1))==0?12:11;break;case 11:Cb=1;t=
13;break;case 12:Cb=0;t=13;break;case 13:var Ga=Cb;ia=Ga;Ic+=2;ic=0;b=13;t=14;break;case 14:t=(b==13?Ga:b==8?ca:Vb)!=0?20:29;break;case 15:t=o(HEAP[oc+20]+24*Ic,12,lb)==0?18:16;break;case 16:t=F(HEAP[oc+20]+24*(Ic+1))==0?18:17;break;case 17:Nc=1;t=19;break;case 18:Nc=0;t=19;break;case 19:var ka=Nc;ia=ka;ic=1;Ic+=2;b=19;t=21;break;case 20:var jc=ia;b=20;t=21;break;case 21:t=(b==20?jc:ka)==0?23:22;break;case 22:t=Ic+2<=xb?15:23;break;case 23:t=ia==0?29:24;break;case 24:t=ic!=0?26:25;break;case 25:ia=
n(oc,Ic,Ad);t=29;break;case 26:t=ia!=0?27:29;break;case 27:t=Ic<xb?28:29;break;case 28:ia=o(HEAP[oc+20]+24*Ic,12,lb);t=29;break;case 29:l=ia;break a;default:assert(0,"bad label: "+t)}l=void 0}b=70;break;case 22:a:{l=d;b=void 0;for(b=-1;;)switch(b){case -1:var gb,aa;gb=l;b=n(gb,2,Bd)==0?4:1;break;case 1:b=o(HEAP[gb+20],1,nb)==0?4:2;break;case 2:b=wa(HEAP[gb+20]+24)==0?4:3;break;case 3:aa=1;b=5;break;case 4:aa=0;b=5;break;case 5:l=aa;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 23:b=
n(d,1,Ze)==0?26:24;break;case 24:b=o(HEAP[d+20],1,Ze)==0?26:25;break;case 25:j=1;b=27;break;case 26:j=0;b=27;break;case 27:l=j;b=70;break;case 28:b=n(d,1,Pe)==0?31:29;break;case 29:b=o(HEAP[d+20],1,Pe)==0?31:30;break;case 30:f=1;b=32;break;case 31:f=0;b=32;break;case 32:l=f;b=70;break;case 33:b=n(d,1,nf)==0?36:34;break;case 34:b=o(HEAP[d+20],1,nf)==0?36:35;break;case 35:e=1;b=37;break;case 36:e=0;b=37;break;case 37:l=e;b=70;break;case 38:a:{l=d;b=void 0;for(b=-1;;)switch(b){case -1:var sb,Ja,Qb;sb=
l;Ja=HEAP[sb+16];b=m(sb,278)==0?3:1;break;case 1:b=Ja==1|Ja==2?2:3;break;case 2:b=o(HEAP[sb+20],1,Kd)==0?3:4;break;case 3:Qb=0;b=6;break;case 4:Qb=1;b=Ja==2?5:6;break;case 5:Qb=u(HEAP[sb+20]+24);b=6;break;case 6:l=Qb;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 39:a:{l=d;b=void 0;t=null;for(b=-1;;)switch(b){case -1:var kd,ma,vb,Xb,$b;kd=l;Xb=HEAP[kd+16];b=m(kd,280)==0?17:1;break;case 1:b=Xb==1|Xb==2|Xb==4|Xb==6?2:17;break;case 2:$b=o(HEAP[kd+20],1,Nd);b=$b!=0?3:18;break;case 3:b=
Xb>1?4:5;break;case 4:var Dc=F(HEAP[kd+20]+24);$b=Dc;t=4;b=6;break;case 5:var $a=$b,t=5;b=6;break;case 6:b=(t==5?$a:Dc)!=0?7:18;break;case 7:b=Xb>2?8:18;break;case 8:b=o(HEAP[kd+20]+48,12,lb)==0?10:9;break;case 9:b=F(HEAP[kd+20]+72)==0?10:11;break;case 10:$b=0;b=27;break;case 11:$b=1;var Ba=Xb;Ba>4?(t=11,b=12):(t=11,b=21);break;case 12:b=o(HEAP[kd+20]+96,12,lb)==0?15:13;break;case 13:b=F(HEAP[kd+20]+120)==0?15:14;break;case 14:vb=1;b=16;break;case 15:vb=0;b=16;break;case 16:var ta=vb;$b=ta;t=16;b=
19;break;case 17:$b=0;n(kd,2,Nd);b=18;break;case 18:var da=$b,t=18;b=19;break;case 19:b=(t==18?da:ta)!=0?20:27;break;case 20:var ua=Xb,t=20;b=21;break;case 21:b=(t==20?ua:Ba)==4?22:27;break;case 22:b=o(HEAP[kd+20]+48,12,lb)==0?25:23;break;case 23:b=F(HEAP[kd+20]+72)==0?25:24;break;case 24:ma=1;b=26;break;case 25:ma=0;b=26;break;case 26:$b=ma;b=27;break;case 27:l=$b;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 40:a:{l=d;b=void 0;for(b=-1;;)switch(b){case -1:var rb,De,xd;rb=l;
De=HEAP[rb+16];xd=n(rb,1,Md);b=xd!=0?1:4;break;case 1:b=HEAP[HEAP[rb+20]];b=b==282|b==283?2:3;break;case 2:xd=Ya(HEAP[rb+20]);b=6;break;case 3:xd=0;h(Fe);b=6;break;case 4:b=De==1?5:6;break;case 5:xd=0;_PyErr_Format(HEAP[Xa],ye,allocate([HEAP[HEAP[rb+20]],0,0,0],["i32",0,0,0],ALLOC_STACK));b=6;break;case 6:l=xd;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 41:a:{l=d;b=void 0;for(b=-1;;)switch(b){case -1:var Fa,La;Fa=l;b=m(Fa,282)==0?5:1;break;case 1:b=n(Fa,2,Yd)==0?5:2;break;case 2:b=
o(HEAP[Fa+20],1,Pd)==0?5:3;break;case 3:b:{b=HEAP[Fa+20]+24;t=void 0;T=null;for(t=-1;;)switch(t){case -1:var Ra,Pa,Tb,Ha,qa,Gb;Ra=b;Ha=HEAP[Ra+16];t=((Ha&1)!=0^1)!=0?3:1;break;case 1:t=I(HEAP[Ra+20])==0?3:2;break;case 2:Tb=1;t=4;break;case 3:Tb=0;t=4;break;case 4:var uc=Tb;qa=uc;Gb=1;T=4;t=10;break;case 5:t=o(HEAP[Ra+20]+24*Gb,12,lb)==0?8:6;break;case 6:t=I(HEAP[Ra+20]+24*(Gb+1))==0?8:7;break;case 7:Pa=1;t=9;break;case 8:Pa=0;t=9;break;case 9:var Va=Pa;qa=Va;Gb+=2;T=9;t=10;break;case 10:t=(T==9?Va:
uc)==0?12:11;break;case 11:t=Gb<Ha?5:12;break;case 12:b=qa;break b;default:assert(0,"bad label: "+t)}b=void 0}b=b==0?5:4;break;case 4:La=1;b=6;break;case 5:La=0;b=6;break;case 6:l=La;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 42:a:{l=d;b=void 0;for(b=-1;;)switch(b){case -1:var Ka,qc,Kb,Sd,$c,qd,pa;Ka=l;Kb=HEAP[Ka+16];b:{Sd=Ka;$c=void 0;for($c=-1;;)switch($c){case -1:var eb,Ta;eb=Sd;Ta=1;$c=3;break;case 1:$c=HEAP[HEAP[eb+20]+24*Ta]!=23?4:2;break;case 2:Ta+=1;$c=3;break;case 3:$c=
HEAP[eb+16]>Ta?1:4;break;case 4:Sd=Ta-1;break b;default:assert(0,"bad label: "+$c)}Sd=void 0}$c=HEAP[HEAP[Ka+20]+24*(Sd+1)]==288;qd=$c+Sd;b=m(Ka,283)==0?7:1;break;case 1:b=qd<=0?7:2;break;case 2:b=qd+3>Kb?7:3;break;case 3:b=o(HEAP[Ka+20],1,vc)==0?7:4;break;case 4:b=$c==0?6:5;break;case 5:b=L(HEAP[Ka+20]+24*(Sd+1))!=0?6:7;break;case 6:b=o(HEAP[Ka+20]+24*(qd+1),1,Pd)==0?7:8;break;case 7:pa=0;b=19;break;case 8:pa=1;b=HEAP[HEAP[Ka+20]+24*(qd+2)]!=7?16:9;break;case 9:b=qd+5!=Kb?14:10;break;case 10:b=o(HEAP[Ka+
20]+24*(qd+2),7,Eb)==0?14:11;break;case 11:b=J(HEAP[Ka+20]+24*(qd+3))==0?14:12;break;case 12:b=o(HEAP[Ka+20]+24*(qd+4),8,Yb)==0?14:13;break;case 13:qc=1;b=15;break;case 14:qc=0;b=15;break;case 15:pa=qc;b=19;break;case 16:b=pa!=0?17:19;break;case 17:b=HEAP[HEAP[Ka+20]+24*(qd+2)]!=16?18:19;break;case 18:pa=J(HEAP[Ka+20]+24*(qd+2));b=19;break;case 19:l=pa;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 43:a:{l=d;b=void 0;t=null;for(b=-1;;)switch(b){case -1:var Za,Nb,bb,Ca,Aa,ub;Za=
l;Aa=HEAP[Za+16];b=m(Za,289)==0?3:1;break;case 1:b=(Aa&1)!=0|Aa<=1?3:2;break;case 2:ub=1;b=6;break;case 3:ub=0;b=_PyErr_Occurred()==0?4:5;break;case 4:h(Hd);b=5;break;case 5:b=ub!=0?6:11;break;case 6:b=o(HEAP[Za+20],1,ze)==0?9:7;break;case 7:b=m(HEAP[Za+20]+24,1)==0?9:8;break;case 8:bb=1;b=10;break;case 9:bb=0;b=10;break;case 10:ub=bb;b=11;break;case 11:Ca=2;var Gc=ub,t=11;b=17;break;case 12:b=o(HEAP[Za+20]+24*Ca,12,lb)==0?15:13;break;case 13:b=m(HEAP[Za+20]+24*(Ca+1),1)==0?15:14;break;case 14:Nb=
1;b=16;break;case 15:Nb=0;b=16;break;case 16:var hb=Nb;ub=hb;Ca+=2;t=16;b=17;break;case 17:b=(t==16?hb:Gc)==0?19:18;break;case 18:b=Ca<Aa?12:19;break;case 19:l=ub;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 44:a:{l=d;b=void 0;t=null;for(b=-1;;)switch(b){case -1:var cd,Qa,jd,tb,ib;cd=l;tb=HEAP[cd+16];b=m(cd,290)==0?5:1;break;case 1:b=tb==2|tb==4|tb==6?2:5;break;case 2:b=o(HEAP[cd+20],1,Id)==0?5:3;break;case 3:b=ba(HEAP[cd+20]+24)==0?5:4;break;case 4:ib=1;b=8;break;case 5:ib=
0;b=_PyErr_Occurred()==0?6:7;break;case 6:h(de);b=7;break;case 7:b=ib!=0?8:22;break;case 8:b=tb>2?9:14;break;case 9:b=o(HEAP[cd+20]+48,1,Bb)==0?12:10;break;case 10:b=F(HEAP[cd+20]+72)==0?12:11;break;case 11:jd=1;b=13;break;case 12:jd=0;b=13;break;case 13:var Rb=jd;ib=Rb;t=13;b=15;break;case 14:var Zb=ib,t=14;b=15;break;case 15:b=(t==14?Zb:Rb)!=0?16:22;break;case 16:b=tb==6?17:22;break;case 17:b=o(HEAP[cd+20]+96,12,lb)==0?20:18;break;case 18:b=F(HEAP[cd+20]+120)==0?20:19;break;case 19:Qa=1;b=21;break;
case 20:Qa=0;b=21;break;case 21:ib=Qa;b=22;break;case 22:l=ib;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 45:a:{l=d;b=void 0;for(b=-1;;)switch(b){case -1:var pc,Sb,pb,wc;pc=l;pb=HEAP[pc+16];b=m(pc,291)==0?5:1;break;case 1:b=pb==2|pb==4?2:5;break;case 2:b=o(HEAP[pc+20],1,ee)==0?5:3;break;case 3:b=F(HEAP[pc+20]+24)==0?5:4;break;case 4:wc=1;b=8;break;case 5:wc=0;b=_PyErr_Occurred()==0?6:7;break;case 6:h(fe);b=7;break;case 7:b=wc!=0?8:14;break;case 8:b=pb>2?9:14;break;case 9:b=
o(HEAP[pc+20]+48,12,lb)==0?12:10;break;case 10:b=F(HEAP[pc+20]+72)==0?12:11;break;case 11:Sb=1;b=13;break;case 12:Sb=0;b=13;break;case 13:wc=Sb;b=14;break;case 14:l=wc;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 46:a:{l=d;b=void 0;for(b=-1;;)switch(b){case -1:var Ab,Ge,mb,Dd,Fc,Me;Ab=l;Dd=HEAP[Ab+16];b=m(Ab,293)==0?13:1;break;case 1:b=Dd<=3?13:2;break;case 2:b=o(HEAP[Ab+20],1,yb)==0?13:3;break;case 3:b=F(HEAP[Ab+20]+24)==0?13:4;break;case 4:b=o(HEAP[Ab+20]+48,11,Lb)==0?13:5;
break;case 5:b=r(HEAP[Ab+20]+72)==0?13:6;break;case 6:Fc=1;b=Dd%4!=3?15:7;break;case 7:b=o(HEAP[Ab+20]+24*(Dd-3),1,fc)==0?11:8;break;case 8:b=o(HEAP[Ab+20]+24*(Dd-2),11,Lb)==0?11:9;break;case 9:b=r(HEAP[Ab+20]+24*(Dd-1))==0?11:10;break;case 10:mb=1;b=12;break;case 11:mb=0;b=12;break;case 12:Fc=mb;Dd-=3;b=15;break;case 13:Fc=0;b=_PyErr_Occurred()==0?14:15;break;case 14:n(Ab,4,yb);b=15;break;case 15:b=(Dd&3)!=0?16:17;break;case 16:Fc=n(Ab,0,yb);b=29;break;case 17:b=Fc!=0?18:29;break;case 18:b=Dd>4?
19:29;break;case 19:Me=4;b=27;break;case 20:b=o(HEAP[Ab+20]+24*Me,1,zb)==0?25:21;break;case 21:b=o(HEAP[Ab+20]+24*(Me+2),11,Lb)==0?25:22;break;case 22:b=F(HEAP[Ab+20]+24*(Me+1))==0?25:23;break;case 23:b=r(HEAP[Ab+20]+24*(Me+3))==0?25:24;break;case 24:Ge=1;b=26;break;case 25:Ge=0;b=26;break;case 26:Fc=Ge;Me+=4;b=27;break;case 27:b=Me>=Dd?29:28;break;case 28:b=Fc!=0?20:29;break;case 29:l=Fc;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 47:a:{l=d;b=void 0;for(b=-1;;)switch(b){case -1:var gd,
Qe,sc,Mb;gd=l;sc=HEAP[gd+16];b=m(gd,294)==0?6:1;break;case 1:b=sc==4|sc==7?2:6;break;case 2:b=o(HEAP[gd+20],1,pe)==0?6:3;break;case 3:b=F(HEAP[gd+20]+24)==0?6:4;break;case 4:b=o(HEAP[gd+20]+48,11,Lb)==0?6:5;break;case 5:b=r(HEAP[gd+20]+72)==0?6:7;break;case 6:Mb=0;b=14;break;case 7:Mb=1;b=sc==7?8:14;break;case 8:b=o(HEAP[gd+20]+96,1,fc)==0?12:9;break;case 9:b=o(HEAP[gd+20]+120,11,Lb)==0?12:10;break;case 10:b=r(HEAP[gd+20]+144)==0?12:11;break;case 11:Qe=1;b=13;break;case 12:Qe=0;b=13;break;case 13:Mb=
Qe;b=14;break;case 14:l=Mb;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 48:a:{l=d;b=void 0;for(b=-1;;)switch(b){case -1:var ce,Ed,Hb,ob;ce=l;Hb=HEAP[ce+16];b=m(ce,295)==0?8:1;break;case 1:b=Hb==6|Hb==9?2:8;break;case 2:b=o(HEAP[ce+20],1,sa)==0?8:3;break;case 3:b=wa(HEAP[ce+20]+24)==0?8:4;break;case 4:b=o(HEAP[ce+20]+48,1,Bb)==0?8:5;break;case 5:b=u(HEAP[ce+20]+72)==0?8:6;break;case 6:b=o(HEAP[ce+20]+96,11,Lb)==0?8:7;break;case 7:b=r(HEAP[ce+20]+120)==0?8:9;break;case 8:ob=0;
b=16;break;case 9:ob=1;b=Hb==9?10:16;break;case 10:b=o(HEAP[ce+20]+144,1,fc)==0?14:11;break;case 11:b=o(HEAP[ce+20]+168,11,Lb)==0?14:12;break;case 12:b=r(HEAP[ce+20]+192)==0?14:13;break;case 13:Ed=1;b=15;break;case 14:Ed=0;b=15;break;case 15:ob=Ed;b=16;break;case 16:l=ob;break a;default:assert(0,"bad label: "+b)}l=void 0}b=70;break;case 49:a:{l=d;t=void 0;b=null;for(t=-1;;)switch(t){case -1:var jb,Jb,Zc,Ce,wb,be,Oc,ld,bd,hd,dd;jb=l;ld=HEAP[jb+16];bd=3;t=m(jb,296)==0?11:1;break;case 1:t=ld<=5?11:2;
break;case 2:t=ld%3!=0?11:3;break;case 3:hd=1;t=o(HEAP[jb+20],1,Db)==0?9:4;break;case 4:t=o(HEAP[jb+20]+24,11,Lb)==0?9:5;break;case 5:t=r(HEAP[jb+20]+48)==0?9:6;break;case 6:t=o(HEAP[jb+20]+24*(ld-2),11,Lb)==0?9:7;break;case 7:t=r(HEAP[jb+20]+24*(ld-1))==0?9:8;break;case 8:Oc=1;t=10;break;case 9:Oc=0;t=10;break;case 10:var Td=Oc;hd=Td;b=10;t=16;break;case 11:hd=0;t=_PyErr_Occurred()==0?12:15;break;case 12:dd=ge;t=HEAP[HEAP[jb+20]+24*(ld-3)]!=299?13:14;break;case 13:dd=HEAP[HEAP[jb+20]+24*(ld-3)+4];
t=14;break;case 14:_PyErr_Format(HEAP[Xa],Zd,allocate([dd,0,0,0],["i8*",0,0,0],ALLOC_STACK));t=15;break;case 15:var Wb=hd;b=15;t=16;break;case 16:t=(b==15?Wb:Td)!=0?17:31;break;case 17:t=HEAP[HEAP[jb+20]+24*bd]==1?18:31;break;case 18:t=_strcmp(HEAP[HEAP[jb+20]+24*bd+4],$d)==0?19:31;break;case 19:t=n(jb,6,ie)==0?23:20;break;case 20:t=o(HEAP[jb+20]+96,11,Lb)==0?23:21;break;case 21:t=r(HEAP[jb+20]+120)==0?23:22;break;case 22:be=1;t=24;break;case 23:be=0;t=24;break;case 24:wb=hd=be;t=55;break;case 25:b:{for(var t=
HEAP[jb+20]+24*bd,Ub=void 0,T=null,Ub=-1;;)switch(Ub){case -1:var Ob,bc,Gd,id;Ob=t;Gd=HEAP[Ob+16];Ub=m(Ob,299)==0?3:1;break;case 1:Ub=Gd==1|Gd==2|Gd==4?2:3;break;case 2:Ub=o(HEAP[Ob+20],1,ge)==0?3:4;break;case 3:id=0;Ub=15;break;case 4:id=1;Ub=Gd>1?5:15;break;case 5:id=Ub=F(HEAP[Ob+20]+24);Ub=Ub!=0?6:15;break;case 6:Ub=Gd==4?7:15;break;case 7:var $e=HEAP[Ob+20]+48,Ub=HEAP[HEAP[Ob+20]+48]==1?8:9;break;case 8:var Se=o($e,1,Od);id=Se;T=8;Ub=10;break;case 9:var fd=o($e,12,lb);id=fd;T=9;Ub=10;break;case 10:Ub=
(T==9?fd:Se)==0?13:11;break;case 11:Ub=F(HEAP[Ob+20]+72)==0?13:12;break;case 12:bc=1;Ub=14;break;case 13:bc=0;Ub=14;break;case 14:id=bc;Ub=15;break;case 15:t=id;break b;default:assert(0,"bad label: "+Ub)}t=void 0}t=t==0?29:26;break;case 26:t=o(HEAP[jb+20]+24*(bd+1),11,Lb)==0?29:27;break;case 27:t=r(HEAP[jb+20]+24*(bd+2))==0?29:28;break;case 28:Ce=1;t=30;break;case 29:Ce=0;t=30;break;case 30:var hc=Ce;hd=hc;bd+=3;b=30;t=32;break;case 31:var lc=hd;b=31;t=32;break;case 32:t=(b==31?lc:hc)==0?35:33;break;
case 33:t=bd>=ld?35:34;break;case 34:t=HEAP[HEAP[jb+20]+24*bd]==299?25:35;break;case 35:t=hd!=0?36:54;break;case 36:t=bd<ld?37:44;break;case 37:t=HEAP[HEAP[jb+20]+24*bd]==1?38:44;break;case 38:t=_strcmp(HEAP[HEAP[jb+20]+24*bd+4],fc)==0?39:44;break;case 39:t=o(HEAP[jb+20]+24*(bd+1),11,Lb)==0?42:40;break;case 40:t=r(HEAP[jb+20]+24*(bd+2))==0?42:41;break;case 41:Zc=1;t=43;break;case 42:Zc=0;t=43;break;case 43:var ff=Zc;hd=ff;bd+=3;b=43;t=45;break;case 44:var af=hd;b=44;t=45;break;case 45:t=(b==44?af:
ff)!=0?46:54;break;case 46:t=bd<ld?47:54;break;case 47:t=o(HEAP[jb+20]+24*bd,1,$d)==0?52:48;break;case 48:t=n(jb,bd+3,ad)==0?52:49;break;case 49:t=o(HEAP[jb+20]+24*(bd+1),11,Lb)==0?52:50;break;case 50:t=r(HEAP[jb+20]+24*(bd+2))==0?52:51;break;case 51:Jb=1;t=53;break;case 52:Jb=0;t=53;break;case 53:hd=Jb;t=54;break;case 54:wb=hd;t=55;break;case 55:l=wb;break a;default:assert(0,"bad label: "+t)}l=void 0}b=70;break;case 50:l=r(d);b=70;break;case 51:l=u(d);b=70;break;case 52:l=R(d);b=70;break;case 53:l=
p(d,338,g+10,tc);b=70;break;case 54:l=F(d);b=70;break;case 55:l=Z(d);b=70;break;case 56:l=K(d);b=70;break;case 57:l=N(d);b=70;break;case 58:l=wa(d);b=70;break;case 59:l=H(d);b=70;break;case 60:l=ba(d);b=70;break;case 61:l=W(d);b=70;break;case 62:l=B(d);b=70;break;case 63:l=fa(d);b=70;break;case 64:l=ha(d);b=70;break;case 65:l=la(d);b=70;break;case 66:l=ra(d);b=70;break;case 67:l=ya(d);b=70;break;case 68:l=Da(d);b=70;break;case 69:h(sf);l=0;b=70;break;case 70:d=s;var Ld=l,c=70;b=71;break;case 71:b=
(c==70?Ld:1)==0?73:72;break;case 72:b=d!=0?1:73;break;case 73:return a=l;default:assert(0,"bad label: "+b)}}function Ha(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,j;d=a;g=HEAP[d+16]-1;b=g<0?3:1;break;case 1:b=m(HEAP[d+20]+24*g,0)==0?3:2;break;case 2:e=1;b=4;break;case 3:e=0;b=4;break;case 4:var k=e;j=k;f=0;c=4;b=9;break;case 5:var l=HEAP[d+20]+24*f;b=HEAP[HEAP[d+20]+24*f]==267?6:7;break;case 6:j=C(l);b=8;break;case 7:j=o(l,4,0);b=8;break;case 8:f+=1;var n=j,c=8;b=9;break;case 9:b=(c==
8?n:k)==0?11:10;break;case 10:b=f<g?5:11;break;case 11:b=j==0?12:14;break;case 12:b=_PyErr_Occurred()==0?13:14;break;case 13:h(Me);b=14;break;case 14:return a=j;default:assert(0,"bad label: "+b)}}function ta(){Ia=allocate([67,111,112,121,114,105,103,104,116,32,49,57,57,53,45,49,57,57,54,32,98,121,32,86,105,114,103,105,110,105,97,32,80,111,108,121,116,101,99,104,110,105,99,32,73,110,115,116,105,116,117,116,101,32,38,32,83,116,97,116,101,10,85,110,105,118,101,114,115,105,116,121,44,32,66,108,97,99,
107,115,98,117,114,103,44,32,86,105,114,103,105,110,105,97,44,32,85,83,65,44,32,97,110,100,32,70,114,101,100,32,76,46,32,68,114,97,107,101,44,32,74,114,46,44,32,82,101,115,116,111,110,44,10,86,105,114,103,105,110,105,97,44,32,85,83,65,46,32,32,80,111,114,116,105,111,110,115,32,99,111,112,121,114,105,103,104,116,32,49,57,57,49,45,49,57,57,53,32,98,121,32,83,116,105,99,104,116,105,110,103,32,77,97,116,104,101,109,97,116,105,115,99,104,10,67,101,110,116,114,117,109,44,32,65,109,115,116,101,114,100,97,
109,44,32,84,104,101,32,78,101,116,104,101,114,108,97,110,100,115,46,0],"i8",ALLOC_NORMAL);Wa=allocate([84,104,105,115,32,105,115,32,97,110,32,105,110,116,101,114,102,97,99,101,32,116,111,32,80,121,116,104,111,110,39,115,32,105,110,116,101,114,110,97,108,32,112,97,114,115,101,114,46,0],"i8",ALLOC_NORMAL);ia=allocate([48,46,53,0],"i8",ALLOC_NORMAL);Ba=allocate([117,110,114,101,99,111,103,110,105,122,101,100,32,112,97,114,115,101,32,116,114,101,101,32,110,111,100,101,32,116,121,112,101,0],"i8",ALLOC_NORMAL);
Xa=allocate(1,"%struct.PyObject*",ALLOC_NORMAL);Ta=allocate([112,97,114,115,101,114,46,115,116,0],"i8",ALLOC_NORMAL);Ea=allocate([73,110,116,101,114,109,101,100,105,97,116,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,32,80,121,116,104,111,110,32,112,97,114,115,101,32,116,114,101,101,46,0],"i8",ALLOC_NORMAL);Ga=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,131563,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",
0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8",
"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);ka=allocate([79,33,124,79,79,58,115,116,50,116,117,112,108,101,0],"i8",ALLOC_NORMAL);Fa=allocate(16,"i8*",ALLOC_NORMAL);ma=allocate([97,115,116,0],"i8",ALLOC_NORMAL);La=allocate([108,105,110,101,95,105,110,102,111,0],"i8",ALLOC_NORMAL);Za=allocate([99,111,108,95,105,110,102,111,0],"i8",ALLOC_NORMAL);Ka=allocate([124,79,79,58,116,111,116,117,112,108,101,0],"i8",ALLOC_NORMAL);Ra=allocate([97,115,116,50,116,
117,112,108,101,32,105,115,32,114,101,109,111,118,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,115,116,50,116,117,112,108,101,0],"i8",ALLOC_NORMAL);$a=allocate([79,33,124,79,79,58,115,116,50,108,105,115,116,0],"i8",ALLOC_NORMAL);Ja=allocate(16,"i8*",ALLOC_NORMAL);ja=allocate([124,79,79,58,116,111,108,105,115,116,0],"i8",ALLOC_NORMAL);ua=allocate([97,115,116,50,108,105,115,116,32,105,115,32,114,101,109,111,118,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,115,116,50,108,105,115,116,
0],"i8",ALLOC_NORMAL);bb=allocate([60,115,121,110,116,97,120,45,116,114,101,101,62,0],"i8",ALLOC_NORMAL);qa=allocate([79,33,124,115,58,99,111,109,112,105,108,101,115,116,0],"i8",ALLOC_NORMAL);P=allocate(12,"i8*",ALLOC_NORMAL);hb=allocate([102,105,108,101,110,97,109,101,0],"i8",ALLOC_NORMAL);Qa=allocate([124,115,58,99,111,109,112,105,108,101,0],"i8",ALLOC_NORMAL);mb=allocate([99,111,109,112,105,108,101,97,115,116,32,105,115,32,114,101,109,111,118,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,
99,111,109,112,105,108,101,115,116,0],"i8",ALLOC_NORMAL);S=allocate([79,33,58,105,115,101,120,112,114,0],"i8",ALLOC_NORMAL);Ca=allocate(8,"i8*",ALLOC_NORMAL);pa=allocate([58,105,115,101,120,112,114,0],"i8",ALLOC_NORMAL);Aa=allocate([79,33,58,105,115,115,117,105,116,101,0],"i8",ALLOC_NORMAL);ob=allocate(8,"i8*",ALLOC_NORMAL);ib=allocate([58,105,115,115,117,105,116,101,0],"i8",ALLOC_NORMAL);ca=allocate([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,
0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0],ALLOC_NORMAL);na=allocate([99,111,109,112,105,108,101,0],"i8",ALLOC_NORMAL);O=allocate([67,111,109,112,105,108,101,32,116,104,105,115,32,83,84,32,111,98,106,101,99,116,32,105,110,116,111,32,97,32,99,111,100,101,32,111,98,106,101,99,116,46,0],"i8",ALLOC_NORMAL);Ma=allocate([105,115,101,120,112,
114,0],"i8",ALLOC_NORMAL);$=allocate([68,101,116,101,114,109,105,110,101,115,32,105,102,32,116,104,105,115,32,83,84,32,111,98,106,101,99,116,32,119,97,115,32,99,114,101,97,116,101,100,32,102,114,111,109,32,97,110,32,101,120,112,114,101,115,115,105,111,110,46,0],"i8",ALLOC_NORMAL);ga=allocate([105,115,115,117,105,116,101,0],"i8",ALLOC_NORMAL);Sa=allocate([68,101,116,101,114,109,105,110,101,115,32,105,102,32,116,104,105,115,32,83,84,32,111,98,106,101,99,116,32,119,97,115,32,99,114,101,97,116,101,100,
32,102,114,111,109,32,97,32,115,117,105,116,101,46,0],"i8",ALLOC_NORMAL);X=allocate([116,111,108,105,115,116,0],"i8",ALLOC_NORMAL);oa=allocate([67,114,101,97,116,101,115,32,97,32,108,105,115,116,45,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,116,104,105,115,32,83,84,46,0],"i8",ALLOC_NORMAL);ab=allocate([116,111,116,117,112,108,101,0],"i8",ALLOC_NORMAL);Oa=allocate([67,114,101,97,116,101,115,32,97,32,116,117,112,108,101,45,116,114,101,101,32,114,101,112,
114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,116,104,105,115,32,83,84,46,0],"i8",ALLOC_NORMAL);va=allocate(8,"i8*",ALLOC_NORMAL);U=allocate([115,111,117,114,99,101,0],"i8",ALLOC_NORMAL);fb=allocate([115,58,101,120,112,114,0],"i8",ALLOC_NORMAL);Cb=allocate([115,58,115,117,105,116,101,0],"i8",ALLOC_NORMAL);xb=allocate([79,58,115,101,113,117,101,110,99,101,50,115,116,0],"i8",ALLOC_NORMAL);db=allocate(8,"i8*",ALLOC_NORMAL);gb=allocate([115,101,113,117,101,110,99,101,0],"i8",ALLOC_NORMAL);
rb=allocate([115,101,113,117,101,110,99,101,50,115,116,40,41,32,114,101,113,117,105,114,101,115,32,97,32,115,105,110,103,108,101,32,115,101,113,117,101,110,99,101,32,97,114,103,117,109,101,110,116,0],"i8",ALLOC_NORMAL);sb=allocate([112,97,114,115,101,32,116,114,101,101,32,100,111,101,115,32,110,111,116,32,117,115,101,32,97,32,118,97,108,105,100,32,115,116,97,114,116,32,115,121,109,98,111,108,0],"i8",ALLOC_NORMAL);Kb=allocate([117,110,115,112,101,99,105,102,105,101,100,32,83,84,32,101,114,114,111,
114,32,111,99,99,117,114,114,101,100,0],"i8",ALLOC_NORMAL);Gb=allocate([116,117,112,108,101,50,97,115,116,32,105,115,32,114,101,109,111,118,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,116,117,112,108,101,50,115,116,0],"i8",ALLOC_NORMAL);Nb=allocate([111,115,0],"i8",ALLOC_NORMAL);Ab=allocate([73,108,108,101,103,97,108,32,110,111,100,101,32,99,111,110,115,116,114,117,99,116,46,0],"i8",ALLOC_NORMAL);Sb=allocate([116,101,114,109,105,110,97,108,32,110,111,100,101,115,32,109,117,115,116,32,104,
97,118,101,32,50,32,111,114,32,51,32,101,110,116,114,105,101,115,0],"i8",ALLOC_NORMAL);pb=allocate([115,101,99,111,110,100,32,105,116,101,109,32,105,110,32,116,101,114,109,105,110,97,108,32,110,111,100,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,44,32,102,111,117,110,100,32,37,115,0],"i8",ALLOC_NORMAL);Mb=allocate([116,104,105,114,100,32,105,116,101,109,32,105,110,32,116,101,114,109,105,110,97,108,32,110,111,100,101,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,
101,114,44,32,102,111,117,110,100,32,37,115,0],"i8",ALLOC_NORMAL);tb=allocate([117,110,107,110,111,119,110,32,110,111,100,101,32,116,121,112,101,46,0],"i8",ALLOC_NORMAL);Hb=allocate([117,110,115,117,112,112,111,114,116,101,100,32,110,117,109,98,101,114,32,111,102,32,99,104,105,108,100,32,110,111,100,101,115,0],"i8",ALLOC_NORMAL);da=allocate([73,108,108,101,103,97,108,32,115,121,110,116,97,120,45,116,114,101,101,59,32,99,97,110,110,111,116,32,115,116,97,114,116,32,119,105,116,104,32,116,101,114,109,
105,110,97,108,32,115,121,109,98,111,108,46,0],"i8",ALLOC_NORMAL);Jb=allocate([73,108,108,101,103,97,108,32,99,111,109,112,111,110,101,110,116,32,116,117,112,108,101,46,0],"i8",ALLOC_NORMAL);jb=allocate([69,120,112,101,99,116,101,100,32,110,111,100,101,32,116,121,112,101,32,37,100,44,32,103,111,116,32,37,100,46,0],"i8",ALLOC_NORMAL);bc=allocate([73,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,99,104,105,108,100,114,101,110,32,102,111,114,32,37,115,32,110,111,100,101,46,0],"i8",ALLOC_NORMAL);
Wb=allocate([73,108,108,101,103,97,108,32,116,101,114,109,105,110,97,108,58,32,101,120,112,101,99,116,101,100,32,34,37,115,34,0],"i8",ALLOC_NORMAL);lb=allocate([44,0],"i8",ALLOC_NORMAL);kb=allocate([99,108,97,115,115,0],"i8",ALLOC_NORMAL);Lb=allocate([58,0],"i8",ALLOC_NORMAL);Eb=allocate([40,0],"i8",ALLOC_NORMAL);Yb=allocate([41,0],"i8",ALLOC_NORMAL);yb=allocate([105,102,0],"i8",ALLOC_NORMAL);fc=allocate([101,108,115,101,0],"i8",ALLOC_NORMAL);zb=allocate([101,108,105,102,0],"i8",ALLOC_NORMAL);jc=
allocate([112,97,114,97,109,101,116,101,114,115,0],"i8",ALLOC_NORMAL);mc=allocate(1,"i8",ALLOC_NORMAL);Xb=allocate([115,117,105,116,101,0],"i8",ALLOC_NORMAL);qc=allocate([116,101,115,116,108,105,115,116,0],"i8",ALLOC_NORMAL);tc=allocate([116,101,115,116,108,105,115,116,49,0],"i8",ALLOC_NORMAL);vb=allocate([116,101,115,116,108,105,115,116,95,115,97,102,101,0],"i8",ALLOC_NORMAL);eb=allocate([101,120,112,101,99,116,101,100,32,118,97,114,105,97,98,108,101,32,97,114,103,117,109,101,110,116,32,116,114,
97,105,108,101,114,32,102,111,114,32,118,97,114,97,114,103,115,108,105,115,116,0],"i8",ALLOC_NORMAL);Tb=allocate([42,42,0],"i8",ALLOC_NORMAL);oc=allocate([105,108,108,101,103,97,108,32,118,97,114,105,97,98,108,101,32,97,114,103,117,109,101,110,116,32,116,114,97,105,108,101,114,32,102,111,114,32,118,97,114,97,114,103,115,108,105,115,116,0],"i8",ALLOC_NORMAL);Fb=allocate([118,97,114,97,114,103,115,108,105,115,116,32,109,105,115,115,105,110,103,32,99,104,105,108,100,32,110,111,100,101,115,0],"i8",ALLOC_NORMAL);
Pb=allocate([61,0],"i8",ALLOC_NORMAL);Vb=allocate([105,108,108,101,103,97,108,32,102,111,114,109,97,116,105,111,110,32,102,111,114,32,118,97,114,97,114,103,115,108,105,115,116,0],"i8",ALLOC_NORMAL);Dc=allocate([108,105,115,116,95,105,116,101,114,0],"i8",ALLOC_NORMAL);yc=allocate([99,111,109,112,95,105,116,101,114,0],"i8",ALLOC_NORMAL);Kc=allocate([108,105,115,116,95,102,111,114,0],"i8",ALLOC_NORMAL);sa=allocate([102,111,114,0],"i8",ALLOC_NORMAL);Bb=allocate([105,110,0],"i8",ALLOC_NORMAL);cb=allocate([99,
111,109,112,95,102,111,114,0],"i8",ALLOC_NORMAL);Nc=allocate([108,105,115,116,95,105,102,0],"i8",ALLOC_NORMAL);ic=allocate([99,111,109,112,95,105,102,0],"i8",ALLOC_NORMAL);$b=allocate([102,112,100,101,102,0],"i8",ALLOC_NORMAL);Qb=allocate([102,112,108,105,115,116,0],"i8",ALLOC_NORMAL);uc=allocate([115,116,109,116,0],"i8",ALLOC_NORMAL);Gc=allocate([115,105,109,112,108,101,95,115,116,109,116,0],"i8",ALLOC_NORMAL);pc=allocate([59,0],"i8",ALLOC_NORMAL);Zb=allocate([115,109,97,108,108,95,115,116,109,116,
0],"i8",ALLOC_NORMAL);wc=allocate([105,108,108,101,103,97,108,32,115,109,97,108,108,95,115,116,109,116,32,99,104,105,108,100,32,116,121,112,101,0],"i8",ALLOC_NORMAL);sc=allocate([85,110,114,101,99,111,103,110,105,122,101,100,32,99,104,105,108,100,32,110,111,100,101,32,111,102,32,115,109,97,108,108,95,115,116,109,116,58,32,37,100,46,0],"i8",ALLOC_NORMAL);Oc=allocate([99,111,109,112,111,117,110,100,95,115,116,109,116,0],"i8",ALLOC_NORMAL);Zc=allocate([73,108,108,101,103,97,108,32,99,111,109,112,111,
117,110,100,32,115,116,97,116,101,109,101,110,116,32,116,121,112,101,58,32,37,100,46,0],"i8",ALLOC_NORMAL);yd=allocate([97,117,103,97,115,115,105,103,110,0],"i8",ALLOC_NORMAL);Tc=allocate([43,61,0],"i8",ALLOC_NORMAL);sd=allocate([45,61,0],"i8",ALLOC_NORMAL);nd=allocate([42,61,0],"i8",ALLOC_NORMAL);zc=allocate([47,61,0],"i8",ALLOC_NORMAL);Pc=allocate([47,47,61,0],"i8",ALLOC_NORMAL);Ec=allocate([37,61,0],"i8",ALLOC_NORMAL);zd=allocate([38,61,0],"i8",ALLOC_NORMAL);Uc=allocate([124,61,0],"i8",ALLOC_NORMAL);
ec=allocate([94,61,0],"i8",ALLOC_NORMAL);xa=allocate([60,60,61,0],"i8",ALLOC_NORMAL);gc=allocate([62,62,61,0],"i8",ALLOC_NORMAL);Lc=allocate([42,42,61,0],"i8",ALLOC_NORMAL);xc=allocate([105,108,108,101,103,97,108,32,97,117,103,109,101,110,116,101,100,32,97,115,115,105,103,110,109,101,110,116,32,111,112,101,114,97,116,111,114,0],"i8",ALLOC_NORMAL);cc=allocate([112,114,105,110,116,0],"i8",ALLOC_NORMAL);Ad=allocate([112,114,105,110,116,95,115,116,109,116,0],"i8",ALLOC_NORMAL);Bd=allocate([100,101,108,
95,115,116,109,116,0],"i8",ALLOC_NORMAL);nb=allocate([100,101,108,0],"i8",ALLOC_NORMAL);Kd=allocate([114,101,116,117,114,110,0],"i8",ALLOC_NORMAL);Nd=allocate([114,97,105,115,101,0],"i8",ALLOC_NORMAL);Gd=allocate([121,105,101,108,100,0],"i8",ALLOC_NORMAL);Je=allocate([121,105,101,108,100,95,115,116,109,116,0],"i8",ALLOC_NORMAL);Od=allocate([97,115,0],"i8",ALLOC_NORMAL);fd=allocate([105,109,112,111,114,116,95,97,115,95,110,97,109,101,0],"i8",ALLOC_NORMAL);Ld=allocate([46,0],"i8",ALLOC_NORMAL);oe=allocate([105,
108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,99,104,105,108,100,114,101,110,32,102,111,114,32,100,111,116,116,101,100,95,97,115,95,110,97,109,101,0],"i8",ALLOC_NORMAL);Yd=allocate([105,109,112,111,114,116,95,110,97,109,101,0],"i8",ALLOC_NORMAL);Pd=allocate([105,109,112,111,114,116,0],"i8",ALLOC_NORMAL);vc=allocate([102,114,111,109,0],"i8",ALLOC_NORMAL);Md=allocate([105,109,112,111,114,116,95,115,116,109,116,0],"i8",ALLOC_NORMAL);Fe=allocate([105,108,108,101,103,97,108,32,105,109,
112,111,114,116,95,115,116,109,116,32,99,104,105,108,100,32,116,121,112,101,0],"i8",ALLOC_NORMAL);ye=allocate([85,110,114,101,99,111,103,110,105,122,101,100,32,99,104,105,108,100,32,110,111,100,101,32,111,102,32,105,109,112,111,114,116,95,115,116,109,116,58,32,37,100,46,0],"i8",ALLOC_NORMAL);Hd=allocate([105,108,108,101,103,97,108,32,103,108,111,98,97,108,32,115,116,97,116,101,109,101,110,116,0],"i8",ALLOC_NORMAL);ze=allocate([103,108,111,98,97,108,0],"i8",ALLOC_NORMAL);Id=allocate([101,120,101,99,
0],"i8",ALLOC_NORMAL);de=allocate([105,108,108,101,103,97,108,32,101,120,101,99,32,115,116,97,116,101,109,101,110,116,0],"i8",ALLOC_NORMAL);ee=allocate([97,115,115,101,114,116,0],"i8",ALLOC_NORMAL);fe=allocate([105,108,108,101,103,97,108,32,97,115,115,101,114,116,32,115,116,97,116,101,109,101,110,116,0],"i8",ALLOC_NORMAL);pe=allocate([119,104,105,108,101,0],"i8",ALLOC_NORMAL);Db=allocate([116,114,121,0],"i8",ALLOC_NORMAL);ge=allocate([101,120,99,101,112,116,0],"i8",ALLOC_NORMAL);Zd=allocate([73,108,
108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,99,104,105,108,100,114,101,110,32,102,111,114,32,116,114,121,47,37,115,32,110,111,100,101,46,0],"i8",ALLOC_NORMAL);$d=allocate([102,105,110,97,108,108,121,0],"i8",ALLOC_NORMAL);ie=allocate([116,114,121,47,102,105,110,97,108,108,121,0],"i8",ALLOC_NORMAL);ad=allocate([116,114,121,47,101,120,99,101,112,116,47,102,105,110,97,108,108,121,0],"i8",ALLOC_NORMAL);Rd=allocate([111,114,0],"i8",ALLOC_NORMAL);vd=allocate([97,110,100,0],"i8",ALLOC_NORMAL);
Qc=allocate([110,111,116,0],"i8",ALLOC_NORMAL);je=allocate([105,115,0],"i8",ALLOC_NORMAL);re=allocate([105,108,108,101,103,97,108,32,111,112,101,114,97,116,111,114,32,39,37,115,39,0],"i8",ALLOC_NORMAL);se=allocate([105,108,108,101,103,97,108,32,99,111,109,112,97,114,105,115,111,110,32,111,112,101,114,97,116,111,114,32,116,121,112,101,0],"i8",ALLOC_NORMAL);Ob=allocate([99,111,109,112,95,111,112,0],"i8",ALLOC_NORMAL);Be=allocate([117,110,107,110,111,119,110,32,99,111,109,112,97,114,105,115,111,110,
32,111,112,101,114,97,116,111,114,0],"i8",ALLOC_NORMAL);te=allocate([124,0],"i8",ALLOC_NORMAL);wb=allocate([94,0],"i8",ALLOC_NORMAL);aa=allocate([38,0],"i8",ALLOC_NORMAL);Hc=allocate([105,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,110,111,100,101,115,32,102,111,114,32,39,112,111,119,101,114,39,0],"i8",ALLOC_NORMAL);ae=allocate([97,116,111,109,0],"i8",ALLOC_NORMAL);qe=allocate([105,108,108,101,103,97,108,32,108,105,115,116,32,100,105,115,112,108,97,121,32,97,116,111,109,0],"i8",
ALLOC_NORMAL);ue=allocate([109,105,115,115,105,110,103,32,99,104,105,108,100,32,110,111,100,101,115,32,111,102,32,108,105,115,116,109,97,107,101,114,0],"i8",ALLOC_NORMAL);wd=allocate([105,108,108,101,103,97,108,32,116,114,97,105,108,105,110,103,32,110,111,100,101,115,32,102,111,114,32,108,105,115,116,109,97,107,101,114,0],"i8",ALLOC_NORMAL);Vc=allocate([109,105,115,115,105,110,103,32,99,104,105,108,100,32,110,111,100,101,115,32,111,102,32,116,101,115,116,108,105,115,116,95,99,111,109,112,0],"i8",
ALLOC_NORMAL);Ke=allocate([105,108,108,101,103,97,108,32,116,114,97,105,108,105,110,103,32,110,111,100,101,115,32,102,111,114,32,116,101,115,116,108,105,115,116,95,99,111,109,112,0],"i8",ALLOC_NORMAL);Le=allocate([64,0],"i8",ALLOC_NORMAL);Wc=allocate([119,105,116,104,0],"i8",ALLOC_NORMAL);Ce=allocate([100,101,102,0],"i8",ALLOC_NORMAL);Fc=allocate([108,97,109,98,100,97,0],"i8",ALLOC_NORMAL);Dd=allocate([108,97,109,98,100,101,102,0],"i8",ALLOC_NORMAL);De=allocate([111,108,100,95,108,97,109,98,100,101,
102,0],"i8",ALLOC_NORMAL);xd=allocate([97,114,103,108,105,115,116,0],"i8",ALLOC_NORMAL);cd=allocate([110,101,101,100,32,39,40,39,44,32,39,41,39,32,102,111,114,32,103,101,110,101,114,97,116,111,114,32,101,120,112,114,101,115,115,105,111,110,0],"i8",ALLOC_NORMAL);Ed=allocate([105,108,108,101,103,97,108,32,97,114,103,108,105,115,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,32,40,101,120,116,114,97,32,115,116,117,102,102,32,111,110,32,101,110,100,41,0],"i8",ALLOC_NORMAL);Ge=allocate([42,0],
"i8",ALLOC_NORMAL);ub=allocate([105,108,108,101,103,97,108,32,117,115,101,32,111,102,32,39,42,39,32,105,110,32,97,114,103,108,105,115,116,0],"i8",ALLOC_NORMAL);gd=allocate([105,108,108,101,103,97,108,32,117,115,101,32,111,102,32,39,42,42,39,32,105,110,32,97,114,103,108,105,115,116,0],"i8",ALLOC_NORMAL);Rb=allocate([105,108,108,101,103,97,108,32,97,114,103,108,105,115,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,0],"i8",ALLOC_NORMAL);be=allocate([116,114,97,105,108,101,114,0],"i8",ALLOC_NORMAL);
hd=allocate([115,117,98,115,99,114,105,112,116,108,105,115,116,0],"i8",ALLOC_NORMAL);dd=allocate([105,110,118,97,108,105,100,32,110,117,109,98,101,114,32,111,102,32,97,114,103,117,109,101,110,116,115,32,102,111,114,32,115,117,98,115,99,114,105,112,116,32,110,111,100,101,0],"i8",ALLOC_NORMAL);id=allocate([115,117,98,115,99,114,105,112,116,0],"i8",ALLOC_NORMAL);jd=allocate([115,108,105,99,101,111,112,0],"i8",ALLOC_NORMAL);qd=allocate([101,120,112,114,108,105,115,116,0],"i8",ALLOC_NORMAL);Ic=allocate([110,
99,104,32,62,32,48,0],"i8",ALLOC_NORMAL);nc=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,112,97,114,115,101,114,109,111,100,117,108,101,46,99,0],"i8",ALLOC_NORMAL);kd=allocate([118,97,108,105,100,97,116,101,95,100,105,99,116,111,114,115,101,116,109,97,107,101,114,0],"i8",ALLOC_NORMAL);Sd=allocate([105,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,110,111,100,101,115,32,102,111,114,32,100,105,99,116,111,114,115,101,116,109,97,107,101,114,0],"i8",ALLOC_NORMAL);
$c=allocate([105,108,108,101,103,97,108,32,116,114,97,105,108,105,110,103,32,110,111,100,101,115,32,102,111,114,32,100,105,99,116,111,114,115,101,116,109,97,107,101,114,0],"i8",ALLOC_NORMAL);Ye=allocate([102,108,111,119,95,115,116,109,116,0],"i8",ALLOC_NORMAL);Bc=allocate([105,108,108,101,103,97,108,32,102,108,111,119,95,115,116,109,116,32,116,121,112,101,0],"i8",ALLOC_NORMAL);Ze=allocate([112,97,115,115,0],"i8",ALLOC_NORMAL);Pe=allocate([98,114,101,97,107,0],"i8",ALLOC_NORMAL);nf=allocate([99,111,
110,116,105,110,117,101,0],"i8",ALLOC_NORMAL);sf=allocate([117,110,114,101,99,111,103,110,105,122,101,100,32,110,111,100,101,32,116,121,112,101,0],"i8",ALLOC_NORMAL);ce=allocate([99,111,117,108,100,32,110,111,116,32,118,97,108,105,100,97,116,101,32,101,120,112,114,101,115,115,105,111,110,32,116,117,112,108,101,0],"i8",ALLOC_NORMAL);Me=allocate([86,65,76,73,68,65,84,73,79,78,32,70,65,73,76,85,82,69,58,32,114,101,112,111,114,116,32,116,104,105,115,32,116,111,32,116,104,101,32,109,97,105,110,116,97,
105,110,101,114,33,0],"i8",ALLOC_NORMAL);Qe=allocate([69,114,114,111,114,32,80,97,114,115,105,110,103,32,101,110,99,111,100,105,110,103,95,100,101,99,108,0],"i8",ALLOC_NORMAL);Td=allocate(1,"%struct.PyObject*",ALLOC_NORMAL);$e=allocate([79,33,58,95,112,105,99,107,108,101,114,0],"i8",ALLOC_NORMAL);ff=allocate([79,105,0],"i8",ALLOC_NORMAL);af=allocate([79,40,79,41,0],"i8",ALLOC_NORMAL);Ub=allocate([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,
"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",
0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,
0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i8*",0,0,0],ALLOC_NORMAL);Se=allocate([97,115,116,50,116,117,112,108,101,0],"i8",ALLOC_NORMAL);bd=allocate([67,114,101,97,116,101,115,32,97,32,116,117,112,108,101,45,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,83,84,46,0],"i8",ALLOC_NORMAL);ld=allocate([97,115,116,50,108,105,115,116,0],"i8",ALLOC_NORMAL);of=allocate([67,114,101,97,116,101,115,32,97,32,108,105,115,116,45,116,114,101,101,32,114,101,112,114,101,115,101,110,116,
97,116,105,111,110,32,111,102,32,97,110,32,83,84,46,0],"i8",ALLOC_NORMAL);tf=allocate([99,111,109,112,105,108,101,97,115,116,0],"i8",ALLOC_NORMAL);pf=allocate([67,111,109,112,105,108,101,115,32,97,110,32,83,84,32,111,98,106,101,99,116,32,105,110,116,111,32,97,32,99,111,100,101,32,111,98,106,101,99,116,46,0],"i8",ALLOC_NORMAL);xf=allocate([99,111,109,112,105,108,101,115,116,0],"i8",ALLOC_NORMAL);yf=allocate([101,120,112,114,0],"i8",ALLOC_NORMAL);zf=allocate([67,114,101,97,116,101,115,32,97,110,32,
83,84,32,111,98,106,101,99,116,32,102,114,111,109,32,97,110,32,101,120,112,114,101,115,115,105,111,110,46,0],"i8",ALLOC_NORMAL);Af=allocate([68,101,116,101,114,109,105,110,101,115,32,105,102,32,97,110,32,83,84,32,111,98,106,101,99,116,32,119,97,115,32,99,114,101,97,116,101,100,32,102,114,111,109,32,97,110,32,101,120,112,114,101,115,115,105,111,110,46,0],"i8",ALLOC_NORMAL);Bf=allocate([68,101,116,101,114,109,105,110,101,115,32,105,102,32,97,110,32,83,84,32,111,98,106,101,99,116,32,119,97,115,32,99,
114,101,97,116,101,100,32,102,114,111,109,32,97,32,115,117,105,116,101,46,0],"i8",ALLOC_NORMAL);Cf=allocate([67,114,101,97,116,101,115,32,97,110,32,83,84,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,115,117,105,116,101,46,0],"i8",ALLOC_NORMAL);Df=allocate([115,101,113,117,101,110,99,101,50,97,115,116,0],"i8",ALLOC_NORMAL);md=allocate([67,114,101,97,116,101,115,32,97,110,32,83,84,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,
116,105,111,110,46,0],"i8",ALLOC_NORMAL);uf=allocate([115,101,113,117,101,110,99,101,50,115,116,0],"i8",ALLOC_NORMAL);Ef=allocate([115,116,50,116,117,112,108,101,0],"i8",ALLOC_NORMAL);hc=allocate([115,116,50,108,105,115,116,0],"i8",ALLOC_NORMAL);Ff=allocate([116,117,112,108,101,50,97,115,116,0],"i8",ALLOC_NORMAL);lc=allocate([116,117,112,108,101,50,115,116,0],"i8",ALLOC_NORMAL);vf=allocate([95,112,105,99,107,108,101,114,0],"i8",ALLOC_NORMAL);Cc=allocate([82,101,116,117,114,110,115,32,116,104,101,
32,112,105,99,107,108,101,32,109,97,103,105,99,32,116,111,32,97,108,108,111,119,32,83,84,32,111,98,106,101,99,116,115,32,116,111,32,98,101,32,112,105,99,107,108,101,100,46,0],"i8",ALLOC_NORMAL);Gf=allocate([112,97,114,115,101,114,0],"i8",ALLOC_NORMAL);Hf=allocate([112,97,114,115,101,114,46,80,97,114,115,101,114,69,114,114,111,114,0],"i8",ALLOC_NORMAL);He=allocate([80,97,114,115,101,114,69,114,114,111,114,0],"i8",ALLOC_NORMAL);If=allocate([65,83,84,84,121,112,101,0],"i8",ALLOC_NORMAL);Rc=allocate([83,
84,84,121,112,101,0],"i8",ALLOC_NORMAL);Jf=allocate([95,95,99,111,112,121,114,105,103,104,116,95,95,0],"i8",ALLOC_NORMAL);Kf=allocate([95,95,100,111,99,95,95,0],"i8",ALLOC_NORMAL);qf=allocate([95,95,118,101,114,115,105,111,110,95,95,0],"i8",ALLOC_NORMAL);Lf=allocate([99,111,112,121,95,114,101,103,0],"i8",ALLOC_NORMAL);Mf=allocate([112,105,99,107,108,101,0],"i8",ALLOC_NORMAL);HEAP[Ga+12]=Ta;HEAP[Ga+24]=g+24;HEAP[Ga+32]=g+26;HEAP[Ga+40]=g+28;HEAP[Ga+88]=Ea;HEAP[Fa]=ma;HEAP[Fa+4]=La;HEAP[Fa+8]=Za;HEAP[Ja]=
ma;HEAP[Ja+4]=La;HEAP[Ja+8]=Za;HEAP[P]=ma;HEAP[P+4]=hb;HEAP[Ca]=ma;HEAP[ob]=ma;HEAP[ca]=na;HEAP[ca+4]=g+30;HEAP[ca+12]=O;HEAP[ca+16]=Ma;HEAP[ca+20]=g+32;HEAP[ca+28]=$;HEAP[ca+32]=ga;HEAP[ca+36]=g+34;HEAP[ca+44]=Sa;HEAP[ca+48]=X;HEAP[ca+52]=g+36;HEAP[ca+60]=oa;HEAP[ca+64]=ab;HEAP[ca+68]=g+38;HEAP[ca+76]=Oa;HEAP[va]=U;HEAP[db]=gb;HEAP[Ub]=Se;HEAP[Ub+4]=g+40;HEAP[Ub+12]=bd;HEAP[Ub+16]=ld;HEAP[Ub+20]=g+42;HEAP[Ub+28]=of;HEAP[Ub+32]=tf;HEAP[Ub+36]=g+44;HEAP[Ub+44]=pf;HEAP[Ub+48]=xf;HEAP[Ub+52]=g+30;HEAP[Ub+
60]=pf;HEAP[Ub+64]=yf;HEAP[Ub+68]=g+46;HEAP[Ub+76]=zf;HEAP[Ub+80]=Ma;HEAP[Ub+84]=g+32;HEAP[Ub+92]=Af;HEAP[Ub+96]=ga;HEAP[Ub+100]=g+34;HEAP[Ub+108]=Bf;HEAP[Ub+112]=Xb;HEAP[Ub+116]=g+48;HEAP[Ub+124]=Cf;HEAP[Ub+128]=Df;HEAP[Ub+132]=g+50;HEAP[Ub+140]=md;HEAP[Ub+144]=uf;HEAP[Ub+148]=g+52;HEAP[Ub+156]=md;HEAP[Ub+160]=Ef;HEAP[Ub+164]=g+38;HEAP[Ub+172]=bd;HEAP[Ub+176]=hc;HEAP[Ub+180]=g+36;HEAP[Ub+188]=of;HEAP[Ub+192]=Ff;HEAP[Ub+196]=g+50;HEAP[Ub+204]=md;HEAP[Ub+208]=lc;HEAP[Ub+212]=g+52;HEAP[Ub+220]=md;HEAP[Ub+
224]=vf;HEAP[Ub+228]=g+54;HEAP[Ub+236]=Cc}var Va={arguments:[]},Ia,Wa,ia,Ba,Xa,Ta,Ea,Ga,ka,Fa,ma,La,Za,Ka,Ra,$a,Ja,ja,ua,bb,qa,P,hb,Qa,mb,S,Ca,pa,Aa,ob,ib,ca,na,O,Ma,$,ga,Sa,X,oa,ab,Oa,va,U,fb,Cb,xb,db,gb,rb,sb,Kb,Gb,Nb,Ab,Sb,pb,Mb,tb,Hb,da,Jb,jb,bc,Wb,lb,kb,Lb,Eb,Yb,yb,fc,zb,jc,mc,Xb,qc,tc,vb,eb,Tb,oc,Fb,Pb,Vb,Dc,yc,Kc,sa,Bb,cb,Nc,ic,$b,Qb,uc,Gc,pc,Zb,wc,sc,Oc,Zc,yd,Tc,sd,nd,zc,Pc,Ec,zd,Uc,ec,xa,gc,Lc,xc,cc,Ad,Bd,nb,Kd,Nd,Gd,Je,Od,fd,Ld,oe,Yd,Pd,vc,Md,Fe,ye,Hd,ze,Id,de,ee,fe,pe,Db,ge,Zd,$d,ie,ad,
Rd,vd,Qc,je,re,se,Ob,Be,te,wb,aa,Hc,ae,qe,ue,wd,Vc,Ke,Le,Wc,Ce,Fc,Dd,De,xd,cd,Ed,Ge,ub,gd,Rb,be,hd,dd,id,jd,qd,Ic,nc,kd,Sd,$c,Ye,Bc,Ze,Pe,nf,sf,ce,Me,Qe,Td,$e,ff,af,Ub,Se,bd,ld,of,tf,pf,xf,yf,zf,Af,Bf,Cf,Df,md,uf,Ef,hc,Ff,lc,vf,Cc,Gf,Hf,He,If,Rc,Jf,Kf,qf,Lf,Mf;Va._initparser=function(){var a,b=null;for(a=-1;;)switch(a){case -1:var c,d,e,f,g;HEAP[Ga+4]=_PyType_Type;c=_Py_InitModule4(Gf,Ub,0,0,1013);a=c==0?24:1;break;case 1:a=HEAP[Xa]==0?2:3;break;case 2:a=_PyErr_NewException(Hf,0,0);HEAP[Xa]=a;a=a==
0?24:3;break;case 3:HEAP[HEAP[Xa]]+=1;a=_PyModule_AddObject(c,He,HEAP[Xa])!=0?24:4;break;case 4:HEAP[Ga]+=1;_PyModule_AddObject(c,If,Ga);HEAP[Ga]+=1;_PyModule_AddObject(c,Rc,Ga);_PyModule_AddStringConstant(c,Jf,Ia);_PyModule_AddStringConstant(c,Kf,Wa);_PyModule_AddStringConstant(c,qf,ia);d=_PyImport_ImportModuleNoBlock(Lf);a=d!=0?5:24;break;case 5:e=_PyObject_GetAttrString(d,Mf);f=_PyObject_GetAttrString(c,uf);HEAP[Td]=f;f=_PyObject_GetAttrString(c,vf);a=HEAP[Td]!=0?6:7;break;case 6:HEAP[HEAP[Td]]+=
1;a=7;break;case 7:var h=e;h!=0&HEAP[Td]!=0?(b=7,a=8):(b=7,a=13);break;case 8:a=f!=0?9:12;break;case 9:g=_PyObject_CallFunctionObjArgs(e,allocate([Ga,0,0,0,f,0,0,0,HEAP[Td],0,0,0,0,0,0,0],["%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"i8*",0,0,0],ALLOC_STACK));a=g!=0?10:12;break;case 10:HEAP[g]-=1;a=HEAP[g]==0?11:12;break;case 11:FUNCTION_TABLE[HEAP[HEAP[g+4]+24]](g);a=12;break;case 12:var j=e,b=12;a=13;break;case 13:a=(b==12?j:h)!=0?14:16;break;case 14:HEAP[e]-=
1;a=HEAP[e]==0?15:16;break;case 15:FUNCTION_TABLE[HEAP[HEAP[e+4]+24]](e);a=16;break;case 16:a=HEAP[Td]!=0?17:19;break;case 17:a=HEAP[Td];HEAP[a]-=1;a=HEAP[a]==0?18:19;break;case 18:FUNCTION_TABLE[HEAP[HEAP[HEAP[Td]+4]+24]](HEAP[Td]);a=19;break;case 19:a=f!=0?20:22;break;case 20:HEAP[f]-=1;a=HEAP[f]==0?21:22;break;case 21:FUNCTION_TABLE[HEAP[HEAP[f+4]+24]](f);a=22;break;case 22:HEAP[d]-=1;a=HEAP[d]==0?23:24;break;case 23:FUNCTION_TABLE[HEAP[HEAP[d+4]+24]](d);a=24;break;case 24:return;default:assert(0,
"bad label: "+a)}};FUNCTION_TABLE=FUNCTION_TABLE.concat([0,0,_PyTuple_New,0,_PyTuple_SetItem,0,_PyList_New,0,_PyList_SetItem,0,F,0,V,0,z,0,ha,0,la,0,function(a){var b,c=null;for(b=-1;;)switch(b){case -1:var d,e,f,g,j,k,l;d=a;g=0;j=HEAP[d+16];b=m(d,324)==0?2:1;break;case 1:b=j<=0|j>4?2:5;break;case 2:k=0;b=_PyErr_Occurred()==0?3:4;break;case 3:h(dd);b=4;break;case 4:f=0;b=33;break;case 5:k=1;b=HEAP[HEAP[d+20]]==23?6:13;break;case 6:b=n(d,3,id)==0?11:7;break;case 7:b=o(HEAP[d+20],23,Ld)==0?11:8;break;
case 8:b=o(HEAP[d+20]+24,23,Ld)==0?11:9;break;case 9:b=o(HEAP[d+20]+48,23,Ld)==0?11:10;break;case 10:e=1;b=12;break;case 11:e=0;b=12;break;case 12:f=e;b=33;break;case 13:var p=HEAP[HEAP[d+20]];b=j==1?14:18;break;case 14:var q=HEAP[d+20];b=p==304?15:16;break;case 15:k=F(q);b=17;break;case 16:k=o(q,11,Lb);b=17;break;case 17:f=k;b=33;break;case 18:b=p!=11?20:19;break;case 19:b=j==4?20:21;break;case 20:var r=F(HEAP[d+20]);k=r;g=1;c=20;b=22;break;case 21:var s=k,c=21;b=22;break;case 22:b=(c==21?s:r)!=
0?23:24;break;case 23:var t=o(HEAP[d+20]+24*g,11,Lb);k=t;c=23;b=25;break;case 24:var u=k,c=24;b=25;break;case 25:b=(c==24?u:t)!=0?26:32;break;case 26:g+=1;l=j-g;b=l!=0?27:32;break;case 27:b=HEAP[HEAP[d+20]+24*g]==304?28:29;break;case 28:k=F(HEAP[d+20]+24*g);g+=1;l-=1;b=29;break;case 29:b=k!=0?30:32;break;case 30:b=l!=0?31:32;break;case 31:a:{b=HEAP[d+20]+24*g;k=void 0;var B=null;for(k=-1;;)switch(k){case -1:var v,w,x;v=b;w=HEAP[v+16];k=w==1?2:1;break;case 1:k=n(v,2,jd)!=0?2:4;break;case 2:k=m(v,325)==
0?4:3;break;case 3:x=1;k=8;break;case 4:x=0;k=_PyErr_Occurred()==0?5:6;break;case 5:var H=n(v,1,jd);x=H;B=5;k=7;break;case 6:var O=x,B=6;k=7;break;case 7:k=(B==6?O:H)!=0?8:9;break;case 8:var y=o(HEAP[v+20],11,Lb);x=y;B=8;k=10;break;case 9:var U=x,B=9;k=10;break;case 10:k=(B==9?U:y)!=0?11:13;break;case 11:k=w==2?12:13;break;case 12:x=F(HEAP[v+20]+24);k=13;break;case 13:k=b=x;break a;default:assert(0,"bad label: "+k)}k=void 0}b=32;break;case 32:f=k;b=33;break;case 33:return a=f;default:assert(0,"bad label: "+
b)}},0,ba,0,function(a){_PyNode_Free(HEAP[a+8]);_PyObject_Free(a)},0,function(a,b){return _Py_FindMethod(ca,a,b)},0,function(a,c){var d;for(d=-1;;)switch(d){case -1:var e,f,g;e=a;f=c;d=e==f?1:2;break;case 1:g=0;d=6;break;case 2:d=e==0?4:3;break;case 3:d=f==0?4:5;break;case 4:g=-1;d=6;break;case 5:g=b(HEAP[e+8],HEAP[f+8]);d=6;break;case 6:return d=g;default:assert(0,"bad label: "+d)}},0,f,0,function(a,b,c){var d=STACKTOP;STACKTOP+=4;_memset(d,0,4);var e,f=null;for(e=-1;;)switch(e){case -1:var g=d,
h,j,k;HEAP[g]=a;h=b;e=c;k=0;var l=e;e=HEAP[g]==0?1:2;break;case 1:var m=_PyArg_ParseTupleAndKeywords(h,l,S,Ca,allocate([Ga,0,0,0,g,0,0,0],["%struct._typeobject*",0,0,0,"%struct.PyST_Object**",0,0,0],ALLOC_STACK)),f=1;e=3;break;case 2:var n=_PyArg_ParseTupleAndKeywords(h,l,pa,Ca+4,allocate(1,"i32",ALLOC_STACK)),f=2;e=3;break;case 3:e=(f==2?n:m)!=0?4:8;break;case 4:e=HEAP[HEAP[g]+12]==1?5:6;break;case 5:j=__Py_TrueStruct;e=7;break;case 6:j=__Py_ZeroStruct;e=7;break;case 7:k=j;HEAP[k]+=1;e=8;break;case 8:return a=
k,STACKTOP=d,a;default:assert(0,"bad label: "+e)}},0,function(a,b,c){var d=STACKTOP;STACKTOP+=4;_memset(d,0,4);var e,f=null;for(e=-1;;)switch(e){case -1:var g=d,h,j,k;HEAP[g]=a;h=b;e=c;k=0;var l=e;e=HEAP[g]==0?1:2;break;case 1:var m=_PyArg_ParseTupleAndKeywords(h,l,Aa,ob,allocate([Ga,0,0,0,g,0,0,0],["%struct._typeobject*",0,0,0,"%struct.PyST_Object**",0,0,0],ALLOC_STACK)),f=1;e=3;break;case 2:var n=_PyArg_ParseTupleAndKeywords(h,l,ib,ob+4,allocate(1,"i32",ALLOC_STACK)),f=2;e=3;break;case 3:e=(f==
2?n:m)!=0?4:8;break;case 4:e=HEAP[HEAP[g]+12]==1?5:6;break;case 5:j=__Py_ZeroStruct;e=7;break;case 6:j=__Py_TrueStruct;e=7;break;case 7:k=j;HEAP[k]+=1;e=8;break;case 8:return a=k,STACKTOP=d,a;default:assert(0,"bad label: "+e)}},0,d,0,c,0,function(a,b,d){var e;for(e=-1;;)switch(e){case -1:var f,g,h,j;f=a;g=b;h=d;e=HEAP[_Py_Py3kWarningFlag]!=0?1:3;break;case 1:e=_PyErr_WarnEx(HEAP[_PyExc_DeprecationWarning],Ra,1)<0?2:3;break;case 2:j=0;e=4;break;case 3:j=c(f,g,h);e=4;break;case 4:return a=j;default:assert(0,
"bad label: "+e)}},0,function(a,b,c){var e;for(e=-1;;)switch(e){case -1:var f,g,h,j;f=a;g=b;h=c;e=HEAP[_Py_Py3kWarningFlag]!=0?1:3;break;case 1:e=_PyErr_WarnEx(HEAP[_PyExc_DeprecationWarning],ua,1)<0?2:3;break;case 2:j=0;e=4;break;case 3:j=d(f,g,h);e=4;break;case 4:return a=j;default:assert(0,"bad label: "+e)}},0,function(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,g,h,j;e=a;g=b;h=c;d=HEAP[_Py_Py3kWarningFlag]!=0?1:3;break;case 1:d=_PyErr_WarnEx(HEAP[_PyExc_DeprecationWarning],mb,1)<0?2:3;break;
case 2:j=0;d=4;break;case 3:j=f(e,g,h);d=4;break;case 4:return a=j;default:assert(0,"bad label: "+d)}},0,function(a,b,c){return j(b,c,fb,1)},0,function(a,b,c){return j(b,c,Cb,2)},0,function(a,b,c){var d;for(d=-1;;)switch(d){case -1:var e,f,g,h;e=a;f=b;g=c;d=HEAP[_Py_Py3kWarningFlag]!=0?1:3;break;case 1:d=_PyErr_WarnEx(HEAP[_PyExc_DeprecationWarning],Gb,1)<0?2:3;break;case 2:h=0;d=4;break;case 3:h=k(e,f,g);d=4;break;case 4:return a=h;default:assert(0,"bad label: "+d)}},0,k,0,function(a,b){var d=STACKTOP;
STACKTOP+=4;_memset(d,0,4);var e;for(e=-1;;)switch(e){case -1:var f,g=d,h,j,k;e=b;f=0;h=HEAP[g]=0;e=_PyArg_ParseTuple(e,$e,allocate([Ga,0,0,0,g,0,0,0],["%struct._typeobject*",0,0,0,"%struct.PyObject**",0,0,0],ALLOC_STACK))!=0?1:10;break;case 1:h=_PyDict_New();e=h==0?13:2;break;case 2:j=_Py_BuildValue(ff,allocate([HEAP[g],0,0,0,1,0,0,0],["%struct.PyObject*",0,0,0,"i32",0,0,0],ALLOC_STACK));e=j==0?10:3;break;case 3:k=c(0,j,h);e=k!=0?4:6;break;case 4:f=_Py_BuildValue(af,allocate([HEAP[Td],0,0,0,k,0,
0,0],["%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0],ALLOC_STACK));HEAP[k]-=1;e=HEAP[k]==0?5:6;break;case 5:FUNCTION_TABLE[HEAP[HEAP[k+4]+24]](k);e=6;break;case 6:HEAP[h]-=1;e=HEAP[h]==0?7:8;break;case 7:FUNCTION_TABLE[HEAP[HEAP[h+4]+24]](h);e=8;break;case 8:HEAP[j]-=1;e=HEAP[j]==0?9:10;break;case 9:FUNCTION_TABLE[HEAP[HEAP[j+4]+24]](j);e=10;break;case 10:e=h!=0?11:13;break;case 11:HEAP[h]-=1;e=HEAP[h]==0?12:13;break;case 12:FUNCTION_TABLE[HEAP[HEAP[h+4]+24]](h);e=13;break;case 13:return STACKTOP=
d,f;default:assert(0,"bad label: "+e)}},0]);Va.run=ta;ta();return Va});
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



var $0___SIZE = 196; // %0
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyArena___SIZE = 0; // %struct.PyArena
  var $struct_PyArena___FLATTENER = [];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyCodeObject___SIZE = 72; // %struct.PyCodeObject
  
var $struct_PyCompilerFlags___SIZE = 4; // %struct.PyCompilerFlags
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PyST_Object___SIZE = 20; // %struct.PyST_Object
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__mod___SIZE = 8; // %struct._mod
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_anon___SIZE = 4; // %struct.anon
  
var $struct_arc___SIZE = 4; // %struct.arc
  
var $struct_asdl_seq___SIZE = 8; // %struct.asdl_seq
  
var $struct_dfa___SIZE = 24; // %struct.dfa
  
var $struct_grammar___SIZE = 24; // %struct.grammar
  var $struct_grammar___FLATTENER = [0,4,8,16,20];
var $struct_label___SIZE = 8; // %struct.label
  
var $struct_labellist___SIZE = 8; // %struct.labellist
  
var $struct_node___SIZE = 24; // %struct.node
  
var $struct_perrdetail___SIZE = 28; // %struct.perrdetail
  
var $struct_state___SIZE = 24; // %struct.state
  
var $union_anon___SIZE = 4; // %union.anon
  
var _parser_copyright_string;
var _parser_doc_string;
var _parser_version_string;


var __str;
var _parser_error;
var __str1;
var __str2;
var _PyST_Type;
var __str3;
var _keywords_9402;
var __str4;
var __str5;
var __str6;
var __str7;


var __str8;
var __str9;
var _keywords_9452;
var __str10;
var __str11;
var __str12;
var __str13;
var _keywords_9503;
var __str14;
var __str15;
var __str16;
var __str17;
var _keywords_9551;
var __str18;


var __str19;
var _keywords_9577;
var __str20;
var _parser_methods;
var __str21;
var __str22;
var __str23;
var __str24;
var __str25;
var __str26;
var __str27;
var __str28;
var __str29;
var __str30;
var _keywords_9618;
var __str31;

var __str32;
var __str33;
var __str34;
var _keywords_9672;
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
var __str53;
var __str54;
var __str55;
var __str56;
var __str57;
var __str58;
var __str59;
var __str60;
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
var __str75;
var __str76;
var __str77;
var __str78;
var __str79;
var __str80;
var __str81;
var __str82;
var __str83;
var __str84;
var __str85;
var __str86;
var __str87;
var __str88;
var __str89;
var __str90;
var __str91;
var __str92;
var __str93;
var __str94;
var __str95;
var __str96;
var __str97;
var __str98;
var __str99;
var __str100;
var __str101;
var __str102;
var __str103;
var __str104;
var __str105;
var __str106;
var __str107;
var __str108;
var __str109;
var __str110;
var __str111;
var __str112;
var __str113;
var __str114;
var __str115;
var __str116;
var __str117;
var __str118;
var __str119;
var __str120;
var __str121;
var __str122;
var __str123;
var __str124;
var __str125;
var __str126;
var __str127;
var __str128;
var __str129;
var __str130;
var __str131;
var __str132;
var __str133;
var __str134;
var __str135;
var __str136;
var __str137;
var __str138;
var __str139;
var __str140;
var __str141;
var __str142;
var __str143;
var __str144;
var __str145;
var __str146;
var __str147;
var __str148;
var __str149;
var __str150;
var __str151;
var __str152;
var __str153;
var __str154;
var __str155;
var __str156;
var __str157;
var __str158;
var __str159;
var __str160;
var __str161;
var __str162;
var __str163;
var __str164;
var __str165;
var __str166;
var __str167;
var __str168;
var __str169;
var __str170;
var __str171;
var __str172;
var __str173;
var ___PRETTY_FUNCTION___13794;
var __str174;
var __str175;
var __str176;
var __str177;
var __str178;
var __str179;
var __str180;
var __str181;
var __str182;
var __str183;
var __str184;
var _pickle_constructor;
var __str185;
var __str186;
var __str187;
var _parser_functions;
var __str188;
var __str189;
var __str190;
var __str191;
var __str192;
var __str193;
var __str194;
var __str195;
var __str196;
var __str197;
var __str198;
var __str199;
var __str200;
var __str201;
var __str202;
var __str203;
var __str204;
var __str205;
var __str206;
var __str207;
var __str208;

var __str209;
var __str210;
var __str211;
var __str212;
var __str213;
var __str214;
var __str215;
var __str216;
var __str217;
var __str218;




















































  function _node2tuple($n, $mkseq, $addelem, $lineno, $col_offset) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr;
        var $mkseq_addr;
        var $addelem_addr;
        var $lineno_addr;
        var $col_offset_addr;
        var $retval;
        var $0;
        var $i;
        var $v;
        var $w;
        var $result;
        $n_addr=$n;
        $mkseq_addr=$mkseq;
        $addelem_addr=$addelem;
        $lineno_addr=$lineno;
        $col_offset_addr=$col_offset;
        var $1=$n_addr; //@line 88 "parsermodule.c"
        var $2=($1)==0; //@line 88 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 88 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[__Py_NoneStruct]; //@line 89 "parsermodule.c"
        var $4=($3) + 1; //@line 89 "parsermodule.c"
        HEAP[__Py_NoneStruct]=$4; //@line 89 "parsermodule.c"
        $0=__Py_NoneStruct; //@line 90 "parsermodule.c"
        __label__ = 27; break; //@line 90 "parsermodule.c"
      case 2: // $bb1
        var $5=$n_addr; //@line 92 "parsermodule.c"
        var $6=$5; //@line 92 "parsermodule.c"
        var $7=HEAP[$6]; //@line 92 "parsermodule.c"
        var $8=($7) > 255; //@line 92 "parsermodule.c"
        var $9=$n_addr; //@line 97 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 19; break; } //@line 92 "parsermodule.c"
      case 3: // $bb2
        var $10=$9+16; //@line 97 "parsermodule.c"
        var $11=HEAP[$10]; //@line 97 "parsermodule.c"
        var $12=$n_addr; //@line 97 "parsermodule.c"
        var $13=$12; //@line 97 "parsermodule.c"
        var $14=HEAP[$13]; //@line 97 "parsermodule.c"
        var $15=($14)==339; //@line 97 "parsermodule.c"
        var $16=($15); //@line 97 "parsermodule.c"
        var $17=($11) + 1; //@line 97 "parsermodule.c"
        var $18=($17) + ($16); //@line 97 "parsermodule.c"
        var $19=$mkseq_addr; //@line 97 "parsermodule.c"
        var $20=FUNCTION_TABLE[$19]($18); //@line 97 "parsermodule.c"
        $v=$20; //@line 97 "parsermodule.c"
        var $21=$v; //@line 98 "parsermodule.c"
        var $22=($21)==0; //@line 98 "parsermodule.c"
        if ($22) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 98 "parsermodule.c"
      case 4: // $bb3
        var $23=$v; //@line 99 "parsermodule.c"
        $0=$23; //@line 99 "parsermodule.c"
        __label__ = 27; break; //@line 99 "parsermodule.c"
      case 5: // $bb4
        var $24=$n_addr; //@line 100 "parsermodule.c"
        var $25=$24; //@line 100 "parsermodule.c"
        var $26=HEAP[$25]; //@line 100 "parsermodule.c"
        var $27=($26); //@line 100 "parsermodule.c"
        var $28=_PyInt_FromLong($27); //@line 100 "parsermodule.c"
        $w=$28; //@line 100 "parsermodule.c"
        var $29=$w; //@line 101 "parsermodule.c"
        var $30=($29)==0; //@line 101 "parsermodule.c"
        if ($30) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 101 "parsermodule.c"
      case 6: // $bb5
        var $31=$v; //@line 102 "parsermodule.c"
        var $32=$31; //@line 102 "parsermodule.c"
        var $33=HEAP[$32]; //@line 102 "parsermodule.c"
        var $34=($33) - 1; //@line 102 "parsermodule.c"
        var $35=$v; //@line 102 "parsermodule.c"
        var $36=$35; //@line 102 "parsermodule.c"
        HEAP[$36]=$34; //@line 102 "parsermodule.c"
        var $37=$v; //@line 102 "parsermodule.c"
        var $38=$37; //@line 102 "parsermodule.c"
        var $39=HEAP[$38]; //@line 102 "parsermodule.c"
        var $40=($39)==0; //@line 102 "parsermodule.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 102 "parsermodule.c"
      case 7: // $bb6
        var $41=$v; //@line 102 "parsermodule.c"
        var $42=$41+4; //@line 102 "parsermodule.c"
        var $43=HEAP[$42]; //@line 102 "parsermodule.c"
        var $44=$43+24; //@line 102 "parsermodule.c"
        var $45=HEAP[$44]; //@line 102 "parsermodule.c"
        var $46=$v; //@line 102 "parsermodule.c"
        FUNCTION_TABLE[$45]($46); //@line 102 "parsermodule.c"
        __label__ = 8; break; //@line 102 "parsermodule.c"
      case 8: // $bb7
        $0=0; //@line 103 "parsermodule.c"
        __label__ = 27; break; //@line 103 "parsermodule.c"
      case 9: // $bb8
        var $47=$addelem_addr; //@line 105 "parsermodule.c"
        var $48=$v; //@line 105 "parsermodule.c"
        var $49=$w; //@line 105 "parsermodule.c"
        var $50=FUNCTION_TABLE[$47]($48, 0, $49); //@line 105 "parsermodule.c"
        $i=0; //@line 106 "parsermodule.c"
        __label__ = 15; break; //@line 106 "parsermodule.c"
      case 10: // $bb9
        var $51=$91+20; //@line 107 "parsermodule.c"
        var $52=HEAP[$51]; //@line 107 "parsermodule.c"
        var $53=$i; //@line 107 "parsermodule.c"
        var $54=$52+24*$53; //@line 107 "parsermodule.c"
        var $55=$mkseq_addr; //@line 107 "parsermodule.c"
        var $56=$addelem_addr; //@line 107 "parsermodule.c"
        var $57=$lineno_addr; //@line 107 "parsermodule.c"
        var $58=$col_offset_addr; //@line 107 "parsermodule.c"
        var $59=_node2tuple($54, $55, $56, $57, $58); //@line 107 "parsermodule.c"
        $w=$59; //@line 107 "parsermodule.c"
        var $60=$w; //@line 108 "parsermodule.c"
        var $61=($60)==0; //@line 108 "parsermodule.c"
        if ($61) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 108 "parsermodule.c"
      case 11: // $bb10
        var $62=$v; //@line 109 "parsermodule.c"
        var $63=$62; //@line 109 "parsermodule.c"
        var $64=HEAP[$63]; //@line 109 "parsermodule.c"
        var $65=($64) - 1; //@line 109 "parsermodule.c"
        var $66=$v; //@line 109 "parsermodule.c"
        var $67=$66; //@line 109 "parsermodule.c"
        HEAP[$67]=$65; //@line 109 "parsermodule.c"
        var $68=$v; //@line 109 "parsermodule.c"
        var $69=$68; //@line 109 "parsermodule.c"
        var $70=HEAP[$69]; //@line 109 "parsermodule.c"
        var $71=($70)==0; //@line 109 "parsermodule.c"
        if ($71) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 109 "parsermodule.c"
      case 12: // $bb11
        var $72=$v; //@line 109 "parsermodule.c"
        var $73=$72+4; //@line 109 "parsermodule.c"
        var $74=HEAP[$73]; //@line 109 "parsermodule.c"
        var $75=$74+24; //@line 109 "parsermodule.c"
        var $76=HEAP[$75]; //@line 109 "parsermodule.c"
        var $77=$v; //@line 109 "parsermodule.c"
        FUNCTION_TABLE[$76]($77); //@line 109 "parsermodule.c"
        __label__ = 13; break; //@line 109 "parsermodule.c"
      case 13: // $bb12
        $0=0; //@line 110 "parsermodule.c"
        __label__ = 27; break; //@line 110 "parsermodule.c"
      case 14: // $bb13
        var $78=$i; //@line 112 "parsermodule.c"
        var $79=($78) + 1; //@line 112 "parsermodule.c"
        var $80=$addelem_addr; //@line 112 "parsermodule.c"
        var $81=$v; //@line 112 "parsermodule.c"
        var $82=$w; //@line 112 "parsermodule.c"
        var $83=FUNCTION_TABLE[$80]($81, $79, $82); //@line 112 "parsermodule.c"
        var $84=$i; //@line 106 "parsermodule.c"
        var $85=($84) + 1; //@line 106 "parsermodule.c"
        $i=$85; //@line 106 "parsermodule.c"
        __label__ = 15; break; //@line 106 "parsermodule.c"
      case 15: // $bb14
        var $86=$n_addr; //@line 106 "parsermodule.c"
        var $87=$86+16; //@line 106 "parsermodule.c"
        var $88=HEAP[$87]; //@line 106 "parsermodule.c"
        var $89=$i; //@line 106 "parsermodule.c"
        var $90=($88) > ($89); //@line 106 "parsermodule.c"
        var $91=$n_addr; //@line 107 "parsermodule.c"
        if ($90) { __label__ = 10; break; } else { __label__ = 16; break; } //@line 106 "parsermodule.c"
      case 16: // $bb15
        var $92=$91; //@line 115 "parsermodule.c"
        var $93=HEAP[$92]; //@line 115 "parsermodule.c"
        var $94=($93)==339; //@line 115 "parsermodule.c"
        if ($94) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 115 "parsermodule.c"
      case 17: // $bb16
        var $95=$n_addr; //@line 116 "parsermodule.c"
        var $96=$95+4; //@line 116 "parsermodule.c"
        var $97=HEAP[$96]; //@line 116 "parsermodule.c"
        var $98=_PyString_FromString($97); //@line 116 "parsermodule.c"
        var $99=$i; //@line 116 "parsermodule.c"
        var $100=($99) + 1; //@line 116 "parsermodule.c"
        var $101=$addelem_addr; //@line 116 "parsermodule.c"
        var $102=$v; //@line 116 "parsermodule.c"
        var $103=FUNCTION_TABLE[$101]($102, $100, $98); //@line 116 "parsermodule.c"
        __label__ = 18; break; //@line 116 "parsermodule.c"
      case 18: // $bb17
        var $104=$v; //@line 117 "parsermodule.c"
        $0=$104; //@line 117 "parsermodule.c"
        __label__ = 27; break; //@line 117 "parsermodule.c"
      case 19: // $bb18
        var $105=$9; //@line 119 "parsermodule.c"
        var $106=HEAP[$105]; //@line 119 "parsermodule.c"
        var $107=($106) <= 255; //@line 119 "parsermodule.c"
        if ($107) { __label__ = 20; break; } else { __label__ = 26; break; } //@line 119 "parsermodule.c"
      case 20: // $bb19
        var $108=$lineno_addr; //@line 120 "parsermodule.c"
        var $109=$col_offset_addr; //@line 120 "parsermodule.c"
        var $110=($108) + 2; //@line 120 "parsermodule.c"
        var $111=($110) + ($109); //@line 120 "parsermodule.c"
        var $112=$mkseq_addr; //@line 120 "parsermodule.c"
        var $113=FUNCTION_TABLE[$112]($111); //@line 120 "parsermodule.c"
        $result=$113; //@line 120 "parsermodule.c"
        var $114=$result; //@line 121 "parsermodule.c"
        var $115=($114)!=0; //@line 121 "parsermodule.c"
        if ($115) { __label__ = 21; break; } else { __label__ = 25; break; } //@line 121 "parsermodule.c"
      case 21: // $bb20
        var $116=$n_addr; //@line 122 "parsermodule.c"
        var $117=$116; //@line 122 "parsermodule.c"
        var $118=HEAP[$117]; //@line 122 "parsermodule.c"
        var $119=($118); //@line 122 "parsermodule.c"
        var $120=_PyInt_FromLong($119); //@line 122 "parsermodule.c"
        var $121=$addelem_addr; //@line 122 "parsermodule.c"
        var $122=$result; //@line 122 "parsermodule.c"
        var $123=FUNCTION_TABLE[$121]($122, 0, $120); //@line 122 "parsermodule.c"
        var $124=$n_addr; //@line 123 "parsermodule.c"
        var $125=$124+4; //@line 123 "parsermodule.c"
        var $126=HEAP[$125]; //@line 123 "parsermodule.c"
        var $127=_PyString_FromString($126); //@line 123 "parsermodule.c"
        var $128=$addelem_addr; //@line 123 "parsermodule.c"
        var $129=$result; //@line 123 "parsermodule.c"
        var $130=FUNCTION_TABLE[$128]($129, 1, $127); //@line 123 "parsermodule.c"
        var $131=$lineno_addr; //@line 124 "parsermodule.c"
        var $132=($131)==1; //@line 124 "parsermodule.c"
        if ($132) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 124 "parsermodule.c"
      case 22: // $bb21
        var $133=$n_addr; //@line 125 "parsermodule.c"
        var $134=$133+8; //@line 125 "parsermodule.c"
        var $135=HEAP[$134]; //@line 125 "parsermodule.c"
        var $136=_PyInt_FromLong($135); //@line 125 "parsermodule.c"
        var $137=$addelem_addr; //@line 125 "parsermodule.c"
        var $138=$result; //@line 125 "parsermodule.c"
        var $139=FUNCTION_TABLE[$137]($138, 2, $136); //@line 125 "parsermodule.c"
        __label__ = 23; break; //@line 125 "parsermodule.c"
      case 23: // $bb22
        var $140=$col_offset_addr; //@line 126 "parsermodule.c"
        var $141=($140)==1; //@line 126 "parsermodule.c"
        if ($141) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 126 "parsermodule.c"
      case 24: // $bb23
        var $142=$n_addr; //@line 127 "parsermodule.c"
        var $143=$142+12; //@line 127 "parsermodule.c"
        var $144=HEAP[$143]; //@line 127 "parsermodule.c"
        var $145=_PyInt_FromLong($144); //@line 127 "parsermodule.c"
        var $146=$addelem_addr; //@line 127 "parsermodule.c"
        var $147=$result; //@line 127 "parsermodule.c"
        var $148=FUNCTION_TABLE[$146]($147, 3, $145); //@line 127 "parsermodule.c"
        __label__ = 25; break; //@line 127 "parsermodule.c"
      case 25: // $bb24
        var $149=$result; //@line 129 "parsermodule.c"
        $0=$149; //@line 129 "parsermodule.c"
        __label__ = 27; break; //@line 129 "parsermodule.c"
      case 26: // $bb25
        var $150=HEAP[_PyExc_SystemError]; //@line 132 "parsermodule.c"
        _PyErr_SetString($150, __str); //@line 132 "parsermodule.c"
        $0=0; //@line 134 "parsermodule.c"
        __label__ = 27; break; //@line 134 "parsermodule.c"
      case 27: // $bb26
        var $151=$0; //@line 90 "parsermodule.c"
        $retval=$151; //@line 90 "parsermodule.c"
        var $retval27=$retval; //@line 90 "parsermodule.c"
        ;
        return $retval27; //@line 90 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_compare_nodes($left, $right) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr;
        var $right_addr;
        var $retval;
        var $0;
        var $j;
        var $v;
        $left_addr=$left;
        $right_addr=$right;
        var $1=$left_addr; //@line 212 "parsermodule.c"
        var $2=$1; //@line 212 "parsermodule.c"
        var $3=HEAP[$2]; //@line 212 "parsermodule.c"
        var $4=$right_addr; //@line 212 "parsermodule.c"
        var $5=$4; //@line 212 "parsermodule.c"
        var $6=HEAP[$5]; //@line 212 "parsermodule.c"
        var $7=($3) < ($6); //@line 212 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 212 "parsermodule.c"
      case 1: // $bb
        $0=-1; //@line 213 "parsermodule.c"
        __label__ = 16; break; //@line 213 "parsermodule.c"
      case 2: // $bb1
        var $8=$right_addr; //@line 215 "parsermodule.c"
        var $9=$8; //@line 215 "parsermodule.c"
        var $10=HEAP[$9]; //@line 215 "parsermodule.c"
        var $11=$left_addr; //@line 215 "parsermodule.c"
        var $12=$11; //@line 215 "parsermodule.c"
        var $13=HEAP[$12]; //@line 215 "parsermodule.c"
        var $14=($10) < ($13); //@line 215 "parsermodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 215 "parsermodule.c"
      case 3: // $bb2
        $0=1; //@line 216 "parsermodule.c"
        __label__ = 16; break; //@line 216 "parsermodule.c"
      case 4: // $bb3
        var $15=$left_addr; //@line 218 "parsermodule.c"
        var $16=$15; //@line 218 "parsermodule.c"
        var $17=HEAP[$16]; //@line 218 "parsermodule.c"
        var $18=($17) <= 255; //@line 218 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 218 "parsermodule.c"
      case 5: // $bb4
        var $19=$right_addr; //@line 219 "parsermodule.c"
        var $20=$19+4; //@line 219 "parsermodule.c"
        var $21=HEAP[$20]; //@line 219 "parsermodule.c"
        var $22=$left_addr; //@line 219 "parsermodule.c"
        var $23=$22+4; //@line 219 "parsermodule.c"
        var $24=HEAP[$23]; //@line 219 "parsermodule.c"
        var $25=_strcmp($24, $21); //@line 219 "parsermodule.c"
        $0=$25; //@line 219 "parsermodule.c"
        __label__ = 16; break; //@line 219 "parsermodule.c"
      case 6: // $bb5
        var $26=$left_addr; //@line 221 "parsermodule.c"
        var $27=$26+16; //@line 221 "parsermodule.c"
        var $28=HEAP[$27]; //@line 221 "parsermodule.c"
        var $29=$right_addr; //@line 221 "parsermodule.c"
        var $30=$29+16; //@line 221 "parsermodule.c"
        var $31=HEAP[$30]; //@line 221 "parsermodule.c"
        var $32=($28) < ($31); //@line 221 "parsermodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 221 "parsermodule.c"
      case 7: // $bb6
        $0=-1; //@line 222 "parsermodule.c"
        __label__ = 16; break; //@line 222 "parsermodule.c"
      case 8: // $bb7
        var $33=$right_addr; //@line 224 "parsermodule.c"
        var $34=$33+16; //@line 224 "parsermodule.c"
        var $35=HEAP[$34]; //@line 224 "parsermodule.c"
        var $36=$left_addr; //@line 224 "parsermodule.c"
        var $37=$36+16; //@line 224 "parsermodule.c"
        var $38=HEAP[$37]; //@line 224 "parsermodule.c"
        var $39=($35) < ($38); //@line 224 "parsermodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 224 "parsermodule.c"
      case 9: // $bb8
        $0=1; //@line 225 "parsermodule.c"
        __label__ = 16; break; //@line 225 "parsermodule.c"
      case 10: // $bb9
        $j=0; //@line 227 "parsermodule.c"
        __label__ = 14; break; //@line 227 "parsermodule.c"
      case 11: // $bb10
        var $40=$right_addr; //@line 228 "parsermodule.c"
        var $41=$40+20; //@line 228 "parsermodule.c"
        var $42=HEAP[$41]; //@line 228 "parsermodule.c"
        var $43=$j; //@line 228 "parsermodule.c"
        var $44=$42+24*$43; //@line 228 "parsermodule.c"
        var $45=$left_addr; //@line 228 "parsermodule.c"
        var $46=$45+20; //@line 228 "parsermodule.c"
        var $47=HEAP[$46]; //@line 228 "parsermodule.c"
        var $48=$j; //@line 228 "parsermodule.c"
        var $49=$47+24*$48; //@line 228 "parsermodule.c"
        var $50=_parser_compare_nodes($49, $44); //@line 228 "parsermodule.c"
        $v=$50; //@line 228 "parsermodule.c"
        var $51=$v; //@line 230 "parsermodule.c"
        var $52=($51)!=0; //@line 230 "parsermodule.c"
        if ($52) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 230 "parsermodule.c"
      case 12: // $bb11
        var $53=$v; //@line 231 "parsermodule.c"
        $0=$53; //@line 231 "parsermodule.c"
        __label__ = 16; break; //@line 231 "parsermodule.c"
      case 13: // $bb12
        var $54=$j; //@line 227 "parsermodule.c"
        var $55=($54) + 1; //@line 227 "parsermodule.c"
        $j=$55; //@line 227 "parsermodule.c"
        __label__ = 14; break; //@line 227 "parsermodule.c"
      case 14: // $bb13
        var $56=$left_addr; //@line 227 "parsermodule.c"
        var $57=$56+16; //@line 227 "parsermodule.c"
        var $58=HEAP[$57]; //@line 227 "parsermodule.c"
        var $59=$j; //@line 227 "parsermodule.c"
        var $60=($58) > ($59); //@line 227 "parsermodule.c"
        if ($60) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 227 "parsermodule.c"
      case 15: // $bb14
        $0=0; //@line 233 "parsermodule.c"
        __label__ = 16; break; //@line 233 "parsermodule.c"
      case 16: // $bb15
        var $61=$0; //@line 213 "parsermodule.c"
        $retval=$61; //@line 213 "parsermodule.c"
        var $retval16=$retval; //@line 213 "parsermodule.c"
        ;
        return $retval16; //@line 213 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_compare($left, $right) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr;
        var $right_addr;
        var $retval;
        var $0;
        $left_addr=$left;
        $right_addr=$right;
        var $1=$left_addr; //@line 247 "parsermodule.c"
        var $2=$right_addr; //@line 247 "parsermodule.c"
        var $3=($1)==($2); //@line 247 "parsermodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 247 "parsermodule.c"
      case 1: // $bb
        $0=0; //@line 248 "parsermodule.c"
        __label__ = 6; break; //@line 248 "parsermodule.c"
      case 2: // $bb1
        var $4=$left_addr; //@line 250 "parsermodule.c"
        var $5=($4)==0; //@line 250 "parsermodule.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 250 "parsermodule.c"
      case 3: // $bb2
        var $6=$right_addr; //@line 250 "parsermodule.c"
        var $7=($6)==0; //@line 250 "parsermodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 250 "parsermodule.c"
      case 4: // $bb3
        $0=-1; //@line 251 "parsermodule.c"
        __label__ = 6; break; //@line 251 "parsermodule.c"
      case 5: // $bb4
        var $8=$right_addr; //@line 253 "parsermodule.c"
        var $9=$8+8; //@line 253 "parsermodule.c"
        var $10=HEAP[$9]; //@line 253 "parsermodule.c"
        var $11=$left_addr; //@line 253 "parsermodule.c"
        var $12=$11+8; //@line 253 "parsermodule.c"
        var $13=HEAP[$12]; //@line 253 "parsermodule.c"
        var $14=_parser_compare_nodes($13, $10); //@line 253 "parsermodule.c"
        $0=$14; //@line 253 "parsermodule.c"
        __label__ = 6; break; //@line 253 "parsermodule.c"
      case 6: // $bb5
        var $15=$0; //@line 248 "parsermodule.c"
        $retval=$15; //@line 248 "parsermodule.c"
        var $retval6=$retval; //@line 248 "parsermodule.c"
        ;
        return $retval6; //@line 248 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_newstobject($st, $type) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $st_addr;
        var $type_addr;
        var $retval;
        var $0;
        var $o;
        $st_addr=$st;
        $type_addr=$type;
        var $1=__PyObject_New(_PyST_Type); //@line 267 "parsermodule.c"
        var $2=$1; //@line 267 "parsermodule.c"
        $o=$2; //@line 267 "parsermodule.c"
        var $3=$o; //@line 269 "parsermodule.c"
        var $4=($3)!=0; //@line 269 "parsermodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 269 "parsermodule.c"
      case 1: // $bb
        var $5=$o; //@line 270 "parsermodule.c"
        var $6=$5+8; //@line 270 "parsermodule.c"
        var $7=$st_addr; //@line 270 "parsermodule.c"
        HEAP[$6]=$7; //@line 270 "parsermodule.c"
        var $8=$o; //@line 271 "parsermodule.c"
        var $9=$8+12; //@line 271 "parsermodule.c"
        var $10=$type_addr; //@line 271 "parsermodule.c"
        HEAP[$9]=$10; //@line 271 "parsermodule.c"
        var $11=$o; //@line 272 "parsermodule.c"
        var $12=$11+16; //@line 272 "parsermodule.c"
        var $13=$12; //@line 272 "parsermodule.c"
        HEAP[$13]=0; //@line 272 "parsermodule.c"
        __label__ = 3; break; //@line 272 "parsermodule.c"
      case 2: // $bb1
        var $14=$st_addr; //@line 275 "parsermodule.c"
        _PyNode_Free($14); //@line 275 "parsermodule.c"
        __label__ = 3; break; //@line 275 "parsermodule.c"
      case 3: // $bb2
        var $15=$o; //@line 277 "parsermodule.c"
        var $16=$15; //@line 277 "parsermodule.c"
        $0=$16; //@line 277 "parsermodule.c"
        var $17=$0; //@line 277 "parsermodule.c"
        $retval=$17; //@line 277 "parsermodule.c"
        var $retval3=$retval; //@line 277 "parsermodule.c"
        ;
        return $retval3; //@line 277 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_free($st) {
    ;
    var __label__;
  
    var $st_addr;
    $st_addr=$st;
    var $0=$st_addr; //@line 289 "parsermodule.c"
    var $1=$0+8; //@line 289 "parsermodule.c"
    var $2=HEAP[$1]; //@line 289 "parsermodule.c"
    _PyNode_Free($2); //@line 289 "parsermodule.c"
    var $3=$st_addr; //@line 290 "parsermodule.c"
    var $4=$3; //@line 290 "parsermodule.c"
    _PyObject_Free($4); //@line 290 "parsermodule.c"
    ;
    return; //@line 291 "parsermodule.c"
  }
  

  function _parser_st2tuple($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $line_option=__stackBase__+4;
        var $col_option=__stackBase__+8;
        var $res;
        var $ok;
        var $lineno;
        var $col_offset;
        HEAP[$self_addr]=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$line_option]=0; //@line 303 "parsermodule.c"
        HEAP[$col_option]=0; //@line 304 "parsermodule.c"
        $res=0; //@line 305 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 310 "parsermodule.c"
        var $2=($1)==0; //@line 310 "parsermodule.c"
        var $3=$args_addr; //@line 311 "parsermodule.c"
        var $4=$kw_addr; //@line 311 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 310 "parsermodule.c"
      case 1: // $bb
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str3, _keywords_9402, allocate([_PyST_Type,0,0,0,$self_addr,0,0,0,$line_option,0,0,0,$col_option,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyST_Object**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 311 "parsermodule.c"
        $ok=$5; //@line 311 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 311 "parsermodule.c"
      case 2: // $bb1
        var $6=_PyArg_ParseTupleAndKeywords($3, $4, __str7, _keywords_9402+4, allocate([$line_option,0,0,0,$col_option,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 316 "parsermodule.c"
        $ok=$6; //@line 316 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 316 "parsermodule.c"
      case 3: // $bb2
        var $7=__lastLabel__ == 2 ? $6 : ($5);
        var $8=($7)!=0; //@line 318 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 318 "parsermodule.c"
      case 4: // $bb3
        $lineno=0; //@line 319 "parsermodule.c"
        $col_offset=0; //@line 320 "parsermodule.c"
        var $9=HEAP[$line_option]; //@line 321 "parsermodule.c"
        var $10=($9)!=0; //@line 321 "parsermodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 321 "parsermodule.c"
      case 5: // $bb4
        var $11=HEAP[$line_option]; //@line 322 "parsermodule.c"
        var $12=_PyObject_IsTrue($11); //@line 322 "parsermodule.c"
        var $13=($12)!=0; //@line 322 "parsermodule.c"
        var $14=($13); //@line 322 "parsermodule.c"
        $lineno=$14; //@line 322 "parsermodule.c"
        __label__ = 6; break; //@line 322 "parsermodule.c"
      case 6: // $bb5
        var $15=HEAP[$col_option]; //@line 324 "parsermodule.c"
        var $16=($15)!=0; //@line 324 "parsermodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 324 "parsermodule.c"
      case 7: // $bb6
        var $17=HEAP[$col_option]; //@line 325 "parsermodule.c"
        var $18=_PyObject_IsTrue($17); //@line 325 "parsermodule.c"
        var $19=($18)!=0; //@line 325 "parsermodule.c"
        var $20=($19); //@line 325 "parsermodule.c"
        $col_offset=$20; //@line 325 "parsermodule.c"
        __label__ = 8; break; //@line 325 "parsermodule.c"
      case 8: // $bb7
        var $21=HEAP[$self_addr]; //@line 331 "parsermodule.c"
        var $22=$21+8; //@line 331 "parsermodule.c"
        var $23=HEAP[$22]; //@line 331 "parsermodule.c"
        var $24=$lineno; //@line 331 "parsermodule.c"
        var $25=$col_offset; //@line 331 "parsermodule.c"
        var $26=_node2tuple($23, (FUNCTION_TABLE_OFFSET + 2), (FUNCTION_TABLE_OFFSET + 4), $24, $25); //@line 331 "parsermodule.c"
        $res=$26; //@line 331 "parsermodule.c"
        __label__ = 9; break; //@line 331 "parsermodule.c"
      case 9: // $bb8
        var $27=$res; //@line 334 "parsermodule.c"
        $0=$27; //@line 334 "parsermodule.c"
        var $28=$0; //@line 334 "parsermodule.c"
        $retval=$28; //@line 334 "parsermodule.c"
        var $retval9=$retval; //@line 334 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 334 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_ast2tuple($self, $args, $kw) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 340 "parsermodule.c"
        var $2=($1)!=0; //@line 340 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 340 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 340 "parsermodule.c"
        var $4=_PyErr_WarnEx($3, __str8, 1); //@line 340 "parsermodule.c"
        var $5=($4) < 0; //@line 340 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 340 "parsermodule.c"
      case 2: // $bb1
        $0=0; //@line 341 "parsermodule.c"
        __label__ = 4; break; //@line 341 "parsermodule.c"
      case 3: // $bb2
        var $6=$self_addr; //@line 342 "parsermodule.c"
        var $7=$args_addr; //@line 342 "parsermodule.c"
        var $8=$kw_addr; //@line 342 "parsermodule.c"
        var $9=_parser_st2tuple($6, $7, $8); //@line 342 "parsermodule.c"
        $0=$9; //@line 342 "parsermodule.c"
        __label__ = 4; break; //@line 342 "parsermodule.c"
      case 4: // $bb3
        var $10=$0; //@line 341 "parsermodule.c"
        $retval=$10; //@line 341 "parsermodule.c"
        var $retval4=$retval; //@line 341 "parsermodule.c"
        ;
        return $retval4; //@line 341 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_st2list($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $line_option=__stackBase__+4;
        var $col_option=__stackBase__+8;
        var $res;
        var $ok;
        var $lineno;
        var $col_offset;
        HEAP[$self_addr]=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$line_option]=0; //@line 355 "parsermodule.c"
        HEAP[$col_option]=0; //@line 356 "parsermodule.c"
        $res=0; //@line 357 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 362 "parsermodule.c"
        var $2=($1)==0; //@line 362 "parsermodule.c"
        var $3=$args_addr; //@line 363 "parsermodule.c"
        var $4=$kw_addr; //@line 363 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 362 "parsermodule.c"
      case 1: // $bb
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str9, _keywords_9452, allocate([_PyST_Type,0,0,0,$self_addr,0,0,0,$line_option,0,0,0,$col_option,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyST_Object**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 363 "parsermodule.c"
        $ok=$5; //@line 363 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 363 "parsermodule.c"
      case 2: // $bb1
        var $6=_PyArg_ParseTupleAndKeywords($3, $4, __str10, _keywords_9452+4, allocate([$line_option,0,0,0,$col_option,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 367 "parsermodule.c"
        $ok=$6; //@line 367 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 367 "parsermodule.c"
      case 3: // $bb2
        var $7=__lastLabel__ == 2 ? $6 : ($5);
        var $8=($7)!=0; //@line 369 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 369 "parsermodule.c"
      case 4: // $bb3
        $lineno=0; //@line 370 "parsermodule.c"
        $col_offset=0; //@line 371 "parsermodule.c"
        var $9=HEAP[$line_option]; //@line 372 "parsermodule.c"
        var $10=($9)!=0; //@line 372 "parsermodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 372 "parsermodule.c"
      case 5: // $bb4
        var $11=HEAP[$line_option]; //@line 373 "parsermodule.c"
        var $12=_PyObject_IsTrue($11); //@line 373 "parsermodule.c"
        var $13=($12)!=0; //@line 373 "parsermodule.c"
        var $14=($13); //@line 373 "parsermodule.c"
        $lineno=$14; //@line 373 "parsermodule.c"
        __label__ = 6; break; //@line 373 "parsermodule.c"
      case 6: // $bb5
        var $15=HEAP[$col_option]; //@line 375 "parsermodule.c"
        var $16=($15)!=0; //@line 375 "parsermodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 375 "parsermodule.c"
      case 7: // $bb6
        var $17=HEAP[$col_option]; //@line 376 "parsermodule.c"
        var $18=_PyObject_IsTrue($17); //@line 376 "parsermodule.c"
        var $19=($18)!=0; //@line 376 "parsermodule.c"
        var $20=($19); //@line 376 "parsermodule.c"
        $col_offset=$20; //@line 376 "parsermodule.c"
        __label__ = 8; break; //@line 376 "parsermodule.c"
      case 8: // $bb7
        var $21=HEAP[$self_addr]; //@line 382 "parsermodule.c"
        var $22=$21+8; //@line 382 "parsermodule.c"
        var $23=HEAP[$22]; //@line 382 "parsermodule.c"
        var $24=$lineno; //@line 382 "parsermodule.c"
        var $25=$col_offset; //@line 382 "parsermodule.c"
        var $26=_node2tuple($23, (FUNCTION_TABLE_OFFSET + 6), (FUNCTION_TABLE_OFFSET + 8), $24, $25); //@line 382 "parsermodule.c"
        $res=$26; //@line 382 "parsermodule.c"
        __label__ = 9; break; //@line 382 "parsermodule.c"
      case 9: // $bb8
        var $27=$res; //@line 385 "parsermodule.c"
        $0=$27; //@line 385 "parsermodule.c"
        var $28=$0; //@line 385 "parsermodule.c"
        $retval=$28; //@line 385 "parsermodule.c"
        var $retval9=$retval; //@line 385 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 385 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_ast2list($self, $args, $kw) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 391 "parsermodule.c"
        var $2=($1)!=0; //@line 391 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 391 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 391 "parsermodule.c"
        var $4=_PyErr_WarnEx($3, __str11, 1); //@line 391 "parsermodule.c"
        var $5=($4) < 0; //@line 391 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 391 "parsermodule.c"
      case 2: // $bb1
        $0=0; //@line 392 "parsermodule.c"
        __label__ = 4; break; //@line 392 "parsermodule.c"
      case 3: // $bb2
        var $6=$self_addr; //@line 393 "parsermodule.c"
        var $7=$args_addr; //@line 393 "parsermodule.c"
        var $8=$kw_addr; //@line 393 "parsermodule.c"
        var $9=_parser_st2list($6, $7, $8); //@line 393 "parsermodule.c"
        $0=$9; //@line 393 "parsermodule.c"
        __label__ = 4; break; //@line 393 "parsermodule.c"
      case 4: // $bb3
        var $10=$0; //@line 392 "parsermodule.c"
        $retval=$10; //@line 392 "parsermodule.c"
        var $retval4=$retval; //@line 392 "parsermodule.c"
        ;
        return $retval4; //@line 392 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_compilest($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $res;
        var $arena;
        var $mod;
        var $str=__stackBase__+4;
        var $ok;
        HEAP[$self_addr]=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        $res=0; //@line 406 "parsermodule.c"
        HEAP[$str]=__str12; //@line 409 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 414 "parsermodule.c"
        var $2=($1)==0; //@line 414 "parsermodule.c"
        var $3=$args_addr; //@line 415 "parsermodule.c"
        var $4=$kw_addr; //@line 415 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 414 "parsermodule.c"
      case 1: // $bb
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str13, _keywords_9503, allocate([_PyST_Type,0,0,0,$self_addr,0,0,0,$str,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyST_Object**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 415 "parsermodule.c"
        $ok=$5; //@line 415 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 415 "parsermodule.c"
      case 2: // $bb1
        var $6=_PyArg_ParseTupleAndKeywords($3, $4, __str15, _keywords_9503+4, allocate([$str,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 418 "parsermodule.c"
        $ok=$6; //@line 418 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 418 "parsermodule.c"
      case 3: // $bb2
        var $7=__lastLabel__ == 2 ? $6 : ($5);
        var $8=($7)!=0; //@line 421 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 421 "parsermodule.c"
      case 4: // $bb3
        var $9=_PyArena_New(); //@line 422 "parsermodule.c"
        $arena=$9; //@line 422 "parsermodule.c"
        var $10=$arena; //@line 423 "parsermodule.c"
        var $11=($10)!=0; //@line 423 "parsermodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 423 "parsermodule.c"
      case 5: // $bb4
        var $12=HEAP[$str]; //@line 424 "parsermodule.c"
        var $13=HEAP[$self_addr]; //@line 424 "parsermodule.c"
        var $14=$13+16; //@line 424 "parsermodule.c"
        var $15=HEAP[$self_addr]; //@line 424 "parsermodule.c"
        var $16=$15+8; //@line 424 "parsermodule.c"
        var $17=HEAP[$16]; //@line 424 "parsermodule.c"
        var $18=$arena; //@line 424 "parsermodule.c"
        var $19=_PyAST_FromNode($17, $14, $12, $18); //@line 424 "parsermodule.c"
        $mod=$19; //@line 424 "parsermodule.c"
        var $20=$mod; //@line 425 "parsermodule.c"
        var $21=($20)!=0; //@line 425 "parsermodule.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 425 "parsermodule.c"
      case 6: // $bb5
        var $22=HEAP[$self_addr]; //@line 426 "parsermodule.c"
        var $23=$22+16; //@line 426 "parsermodule.c"
        var $24=HEAP[$str]; //@line 426 "parsermodule.c"
        var $25=$mod; //@line 426 "parsermodule.c"
        var $26=$arena; //@line 426 "parsermodule.c"
        var $27=_PyAST_Compile($25, $24, $23, $26); //@line 426 "parsermodule.c"
        var $28=$27; //@line 426 "parsermodule.c"
        $res=$28; //@line 426 "parsermodule.c"
        __label__ = 7; break; //@line 426 "parsermodule.c"
      case 7: // $bb6
        var $29=$arena; //@line 428 "parsermodule.c"
        _PyArena_Free($29); //@line 428 "parsermodule.c"
        __label__ = 8; break; //@line 428 "parsermodule.c"
      case 8: // $bb7
        var $30=$res; //@line 432 "parsermodule.c"
        $0=$30; //@line 432 "parsermodule.c"
        var $31=$0; //@line 432 "parsermodule.c"
        $retval=$31; //@line 432 "parsermodule.c"
        var $retval8=$retval; //@line 432 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 432 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_compileast($self, $args, $kw) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 438 "parsermodule.c"
        var $2=($1)!=0; //@line 438 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 438 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 438 "parsermodule.c"
        var $4=_PyErr_WarnEx($3, __str16, 1); //@line 438 "parsermodule.c"
        var $5=($4) < 0; //@line 438 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 438 "parsermodule.c"
      case 2: // $bb1
        $0=0; //@line 439 "parsermodule.c"
        __label__ = 4; break; //@line 439 "parsermodule.c"
      case 3: // $bb2
        var $6=$self_addr; //@line 440 "parsermodule.c"
        var $7=$args_addr; //@line 440 "parsermodule.c"
        var $8=$kw_addr; //@line 440 "parsermodule.c"
        var $9=_parser_compilest($6, $7, $8); //@line 440 "parsermodule.c"
        $0=$9; //@line 440 "parsermodule.c"
        __label__ = 4; break; //@line 440 "parsermodule.c"
      case 4: // $bb3
        var $10=$0; //@line 439 "parsermodule.c"
        $retval=$10; //@line 439 "parsermodule.c"
        var $retval4=$retval; //@line 439 "parsermodule.c"
        ;
        return $retval4; //@line 439 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_isexpr($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $iftmp_26;
        var $res;
        var $ok;
        HEAP[$self_addr]=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        $res=0; //@line 454 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 459 "parsermodule.c"
        var $2=($1)==0; //@line 459 "parsermodule.c"
        var $3=$args_addr; //@line 460 "parsermodule.c"
        var $4=$kw_addr; //@line 460 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 459 "parsermodule.c"
      case 1: // $bb
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str17, _keywords_9551, allocate([_PyST_Type,0,0,0,$self_addr,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyST_Object**",0,0,0], ALLOC_STACK)); //@line 460 "parsermodule.c"
        $ok=$5; //@line 460 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 460 "parsermodule.c"
      case 2: // $bb1
        var $6=_PyArg_ParseTupleAndKeywords($3, $4, __str18, _keywords_9551+4, allocate(1, "i32", ALLOC_STACK)); //@line 463 "parsermodule.c"
        $ok=$6; //@line 463 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 463 "parsermodule.c"
      case 3: // $bb2
        var $7=__lastLabel__ == 2 ? $6 : ($5);
        var $8=($7)!=0; //@line 465 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 465 "parsermodule.c"
      case 4: // $bb3
        var $9=HEAP[$self_addr]; //@line 467 "parsermodule.c"
        var $10=$9+12; //@line 467 "parsermodule.c"
        var $11=HEAP[$10]; //@line 467 "parsermodule.c"
        var $12=($11)==1; //@line 467 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 467 "parsermodule.c"
      case 5: // $bb4
        $iftmp_26=__Py_TrueStruct; //@line 467 "parsermodule.c"
        __label__ = 7; break; //@line 467 "parsermodule.c"
      case 6: // $bb5
        $iftmp_26=__Py_ZeroStruct; //@line 467 "parsermodule.c"
        __label__ = 7; break; //@line 467 "parsermodule.c"
      case 7: // $bb6
        var $13=$iftmp_26; //@line 467 "parsermodule.c"
        $res=$13; //@line 467 "parsermodule.c"
        var $14=$res; //@line 468 "parsermodule.c"
        var $15=$14; //@line 468 "parsermodule.c"
        var $16=HEAP[$15]; //@line 468 "parsermodule.c"
        var $17=($16) + 1; //@line 468 "parsermodule.c"
        var $18=$res; //@line 468 "parsermodule.c"
        var $19=$18; //@line 468 "parsermodule.c"
        HEAP[$19]=$17; //@line 468 "parsermodule.c"
        __label__ = 8; break; //@line 468 "parsermodule.c"
      case 8: // $bb7
        var $20=$res; //@line 470 "parsermodule.c"
        $0=$20; //@line 470 "parsermodule.c"
        var $21=$0; //@line 470 "parsermodule.c"
        $retval=$21; //@line 470 "parsermodule.c"
        var $retval8=$retval; //@line 470 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 470 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_issuite($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $iftmp_29;
        var $res;
        var $ok;
        HEAP[$self_addr]=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        $res=0; //@line 477 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 482 "parsermodule.c"
        var $2=($1)==0; //@line 482 "parsermodule.c"
        var $3=$args_addr; //@line 483 "parsermodule.c"
        var $4=$kw_addr; //@line 483 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 482 "parsermodule.c"
      case 1: // $bb
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str19, _keywords_9577, allocate([_PyST_Type,0,0,0,$self_addr,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyST_Object**",0,0,0], ALLOC_STACK)); //@line 483 "parsermodule.c"
        $ok=$5; //@line 483 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 483 "parsermodule.c"
      case 2: // $bb1
        var $6=_PyArg_ParseTupleAndKeywords($3, $4, __str20, _keywords_9577+4, allocate(1, "i32", ALLOC_STACK)); //@line 486 "parsermodule.c"
        $ok=$6; //@line 486 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 486 "parsermodule.c"
      case 3: // $bb2
        var $7=__lastLabel__ == 2 ? $6 : ($5);
        var $8=($7)!=0; //@line 488 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 488 "parsermodule.c"
      case 4: // $bb3
        var $9=HEAP[$self_addr]; //@line 490 "parsermodule.c"
        var $10=$9+12; //@line 490 "parsermodule.c"
        var $11=HEAP[$10]; //@line 490 "parsermodule.c"
        var $12=($11)==1; //@line 490 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 490 "parsermodule.c"
      case 5: // $bb4
        $iftmp_29=__Py_ZeroStruct; //@line 490 "parsermodule.c"
        __label__ = 7; break; //@line 490 "parsermodule.c"
      case 6: // $bb5
        $iftmp_29=__Py_TrueStruct; //@line 490 "parsermodule.c"
        __label__ = 7; break; //@line 490 "parsermodule.c"
      case 7: // $bb6
        var $13=$iftmp_29; //@line 490 "parsermodule.c"
        $res=$13; //@line 490 "parsermodule.c"
        var $14=$res; //@line 491 "parsermodule.c"
        var $15=$14; //@line 491 "parsermodule.c"
        var $16=HEAP[$15]; //@line 491 "parsermodule.c"
        var $17=($16) + 1; //@line 491 "parsermodule.c"
        var $18=$res; //@line 491 "parsermodule.c"
        var $19=$18; //@line 491 "parsermodule.c"
        HEAP[$19]=$17; //@line 491 "parsermodule.c"
        __label__ = 8; break; //@line 491 "parsermodule.c"
      case 8: // $bb7
        var $20=$res; //@line 493 "parsermodule.c"
        $0=$20; //@line 493 "parsermodule.c"
        var $21=$0; //@line 493 "parsermodule.c"
        $retval=$21; //@line 493 "parsermodule.c"
        var $retval8=$retval; //@line 493 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 493 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_getattr($self, $name) {
    ;
    var __label__;
  
    var $self_addr;
    var $name_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $name_addr=$name;
    var $1=$self_addr; //@line 519 "parsermodule.c"
    var $2=$name_addr; //@line 519 "parsermodule.c"
    var $3=_Py_FindMethod(_parser_methods, $1, $2); //@line 519 "parsermodule.c"
    $0=$3; //@line 519 "parsermodule.c"
    var $4=$0; //@line 519 "parsermodule.c"
    $retval=$4; //@line 519 "parsermodule.c"
    var $retval1=$retval; //@line 519 "parsermodule.c"
    ;
    return $retval1; //@line 519 "parsermodule.c"
  }
  

  function _err_string($message) {
    ;
    var __label__;
  
    var $message_addr;
    $message_addr=$message;
    var $0=HEAP[_parser_error]; //@line 531 "parsermodule.c"
    var $1=$message_addr; //@line 531 "parsermodule.c"
    _PyErr_SetString($0, $1); //@line 531 "parsermodule.c"
    ;
    return; //@line 532 "parsermodule.c"
  }
  

  function _parser_do_parse($args, $kw, $argspec, $type) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $args_addr;
        var $kw_addr;
        var $argspec_addr;
        var $type_addr;
        var $retval;
        var $0;
        var $iftmp_32;
        var $string=__stackBase__;
        var $res;
        var $flags=__stackBase__+4;
        var $err=__stackBase__+8;
        var $n;
        $args_addr=$args;
        $kw_addr=$kw;
        $argspec_addr=$argspec;
        $type_addr=$type;
        HEAP[$string]=0; //@line 544 "parsermodule.c"
        $res=0; //@line 545 "parsermodule.c"
        HEAP[$flags]=0; //@line 546 "parsermodule.c"
        var $1=$args_addr; //@line 551 "parsermodule.c"
        var $2=$kw_addr; //@line 551 "parsermodule.c"
        var $3=$argspec_addr; //@line 551 "parsermodule.c"
        var $4=_PyArg_ParseTupleAndKeywords($1, $2, $3, _keywords_9618, allocate([$string,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 551 "parsermodule.c"
        var $5=($4)!=0; //@line 551 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 8; break; } //@line 551 "parsermodule.c"
      case 1: // $bb
        var $6=$type_addr; //@line 556 "parsermodule.c"
        var $7=($6)==1; //@line 556 "parsermodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 556 "parsermodule.c"
      case 2: // $bb1
        $iftmp_32=258; //@line 556 "parsermodule.c"
        __label__ = 4; break; //@line 556 "parsermodule.c"
      case 3: // $bb2
        $iftmp_32=257; //@line 556 "parsermodule.c"
        __label__ = 4; break; //@line 556 "parsermodule.c"
      case 4: // $bb3
        var $8=HEAP[$string]; //@line 556 "parsermodule.c"
        var $9=$iftmp_32; //@line 556 "parsermodule.c"
        var $10=_PyParser_ParseStringFlagsFilenameEx($8, 0, __PyParser_Grammar, $9, $err, $flags); //@line 556 "parsermodule.c"
        $n=$10; //@line 556 "parsermodule.c"
        var $11=($10)!=0; //@line 558 "parsermodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 558 "parsermodule.c"
      case 5: // $bb4
        var $12=$n; //@line 559 "parsermodule.c"
        var $13=$type_addr; //@line 559 "parsermodule.c"
        var $14=_parser_newstobject($12, $13); //@line 559 "parsermodule.c"
        $res=$14; //@line 559 "parsermodule.c"
        var $15=$res; //@line 560 "parsermodule.c"
        var $16=($15)!=0; //@line 560 "parsermodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 560 "parsermodule.c"
      case 6: // $bb5
        var $17=$res; //@line 561 "parsermodule.c"
        var $18=$17; //@line 561 "parsermodule.c"
        var $19=HEAP[$flags]; //@line 561 "parsermodule.c"
        var $20=($19) & 253952; //@line 561 "parsermodule.c"
        var $21=$18+16; //@line 561 "parsermodule.c"
        var $22=$21; //@line 561 "parsermodule.c"
        HEAP[$22]=$20; //@line 561 "parsermodule.c"
        __label__ = 8; break; //@line 561 "parsermodule.c"
      case 7: // $bb7
        _PyParser_SetError($err); //@line 564 "parsermodule.c"
        __label__ = 8; break; //@line 564 "parsermodule.c"
      case 8: // $bb8
        var $23=$res; //@line 566 "parsermodule.c"
        $0=$23; //@line 566 "parsermodule.c"
        var $24=$0; //@line 566 "parsermodule.c"
        $retval=$24; //@line 566 "parsermodule.c"
        var $retval9=$retval; //@line 566 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 566 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_expr($self, $args, $kw) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $kw_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    $kw_addr=$kw;
    var $1=$args_addr; //@line 582 "parsermodule.c"
    var $2=$kw_addr; //@line 582 "parsermodule.c"
    var $3=_parser_do_parse($1, $2, __str32, 1); //@line 582 "parsermodule.c"
    $0=$3; //@line 582 "parsermodule.c"
    var $4=$0; //@line 582 "parsermodule.c"
    $retval=$4; //@line 582 "parsermodule.c"
    var $retval1=$retval; //@line 582 "parsermodule.c"
    ;
    return $retval1; //@line 582 "parsermodule.c"
  }
  

  function _parser_suite($self, $args, $kw) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $kw_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    $kw_addr=$kw;
    var $1=$args_addr; //@line 590 "parsermodule.c"
    var $2=$kw_addr; //@line 590 "parsermodule.c"
    var $3=_parser_do_parse($1, $2, __str33, 2); //@line 590 "parsermodule.c"
    $0=$3; //@line 590 "parsermodule.c"
    var $4=$0; //@line 590 "parsermodule.c"
    $retval=$4; //@line 590 "parsermodule.c"
    var $retval1=$retval; //@line 590 "parsermodule.c"
    ;
    return $retval1; //@line 590 "parsermodule.c"
  }
  

  function _parser_tuple2st($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $st;
        var $tuple=__stackBase__;
        var $tree;
        var $start_sym;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        $st=0; //@line 634 "parsermodule.c"
        var $1=$args_addr; //@line 640 "parsermodule.c"
        var $2=$kw_addr; //@line 640 "parsermodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str34, _keywords_9672, allocate([$tuple,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 640 "parsermodule.c"
        var $4=($3)==0; //@line 640 "parsermodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 640 "parsermodule.c"
      case 1: // $bb
        $0=0; //@line 642 "parsermodule.c"
        __label__ = 23; break; //@line 642 "parsermodule.c"
      case 2: // $bb1
        var $5=HEAP[$tuple]; //@line 643 "parsermodule.c"
        var $6=_PySequence_Check($5); //@line 643 "parsermodule.c"
        var $7=($6)==0; //@line 643 "parsermodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 643 "parsermodule.c"
      case 3: // $bb2
        var $8=HEAP[_PyExc_ValueError]; //@line 644 "parsermodule.c"
        _PyErr_SetString($8, __str36); //@line 644 "parsermodule.c"
        $0=0; //@line 646 "parsermodule.c"
        __label__ = 23; break; //@line 646 "parsermodule.c"
      case 4: // $bb3
        var $9=HEAP[$tuple]; //@line 651 "parsermodule.c"
        var $10=_build_node_tree($9); //@line 651 "parsermodule.c"
        $tree=$10; //@line 651 "parsermodule.c"
        var $11=$tree; //@line 652 "parsermodule.c"
        var $12=($11)!=0; //@line 652 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 18; break; } //@line 652 "parsermodule.c"
      case 5: // $bb4
        var $13=$tree; //@line 653 "parsermodule.c"
        var $14=$13; //@line 653 "parsermodule.c"
        var $15=HEAP[$14]; //@line 653 "parsermodule.c"
        var $16=($15); //@line 653 "parsermodule.c"
        $start_sym=$16; //@line 653 "parsermodule.c"
        var $17=$start_sym; //@line 654 "parsermodule.c"
        var $18=($17)==258; //@line 654 "parsermodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 654 "parsermodule.c"
      case 6: // $bb5
        var $19=$tree; //@line 656 "parsermodule.c"
        var $20=_validate_expr_tree($19); //@line 656 "parsermodule.c"
        var $21=($20)!=0; //@line 656 "parsermodule.c"
        var $22=$tree; //@line 657 "parsermodule.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 656 "parsermodule.c"
      case 7: // $bb6
        var $23=_parser_newstobject($22, 1); //@line 657 "parsermodule.c"
        $st=$23; //@line 657 "parsermodule.c"
        __lastLabel__ = 7; __label__ = 19; break; //@line 657 "parsermodule.c"
      case 8: // $bb7
        _PyNode_Free($22); //@line 659 "parsermodule.c"
        __label__ = 18; break; //@line 659 "parsermodule.c"
      case 9: // $bb9
        var $24=$start_sym; //@line 661 "parsermodule.c"
        var $25=($24)==257; //@line 661 "parsermodule.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 661 "parsermodule.c"
      case 10: // $bb10
        var $26=$tree; //@line 663 "parsermodule.c"
        var $27=_validate_file_input($26); //@line 663 "parsermodule.c"
        var $28=($27)!=0; //@line 663 "parsermodule.c"
        var $29=$tree; //@line 664 "parsermodule.c"
        if ($28) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 663 "parsermodule.c"
      case 11: // $bb11
        var $30=_parser_newstobject($29, 2); //@line 664 "parsermodule.c"
        $st=$30; //@line 664 "parsermodule.c"
        __lastLabel__ = 11; __label__ = 19; break; //@line 664 "parsermodule.c"
      case 12: // $bb12
        _PyNode_Free($29); //@line 666 "parsermodule.c"
        __label__ = 18; break; //@line 666 "parsermodule.c"
      case 13: // $bb14
        var $31=$start_sym; //@line 668 "parsermodule.c"
        var $32=($31)==339; //@line 668 "parsermodule.c"
        var $33=$tree; //@line 670 "parsermodule.c"
        if ($32) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 668 "parsermodule.c"
      case 14: // $bb15
        var $34=_validate_encoding_decl($33); //@line 670 "parsermodule.c"
        var $35=($34)!=0; //@line 670 "parsermodule.c"
        var $36=$tree; //@line 671 "parsermodule.c"
        if ($35) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 670 "parsermodule.c"
      case 15: // $bb16
        var $37=_parser_newstobject($36, 2); //@line 671 "parsermodule.c"
        $st=$37; //@line 671 "parsermodule.c"
        __lastLabel__ = 15; __label__ = 19; break; //@line 671 "parsermodule.c"
      case 16: // $bb17
        _PyNode_Free($36); //@line 673 "parsermodule.c"
        __label__ = 18; break; //@line 673 "parsermodule.c"
      case 17: // $bb19
        _PyNode_Free($33); //@line 677 "parsermodule.c"
        _err_string(__str37); //@line 678 "parsermodule.c"
        __label__ = 18; break; //@line 678 "parsermodule.c"
      case 18: // $bb20thread_pre_split
        var $_pr=$st;
        __lastLabel__ = 18; __label__ = 19; break;
      case 19: // $bb20
        var $38=__lastLabel__ == 18 ? $_pr : (__lastLabel__ == 15 ? $37 : (__lastLabel__ == 11 ? $30 : ($23)));
        var $39=($38)==0; //@line 684 "parsermodule.c"
        if ($39) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 684 "parsermodule.c"
      case 20: // $bb21
        var $40=_PyErr_Occurred(); //@line 684 "parsermodule.c"
        var $41=($40)==0; //@line 684 "parsermodule.c"
        if ($41) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 684 "parsermodule.c"
      case 21: // $bb22
        _err_string(__str38); //@line 685 "parsermodule.c"
        __label__ = 22; break; //@line 685 "parsermodule.c"
      case 22: // $bb23
        var $42=$st; //@line 687 "parsermodule.c"
        $0=$42; //@line 687 "parsermodule.c"
        __label__ = 23; break; //@line 687 "parsermodule.c"
      case 23: // $bb24
        var $43=$0; //@line 642 "parsermodule.c"
        $retval=$43; //@line 642 "parsermodule.c"
        var $retval25=$retval; //@line 642 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 642 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_tuple2ast($self, $args, $kw) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 693 "parsermodule.c"
        var $2=($1)!=0; //@line 693 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 693 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 693 "parsermodule.c"
        var $4=_PyErr_WarnEx($3, __str39, 1); //@line 693 "parsermodule.c"
        var $5=($4) < 0; //@line 693 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 693 "parsermodule.c"
      case 2: // $bb1
        $0=0; //@line 694 "parsermodule.c"
        __label__ = 4; break; //@line 694 "parsermodule.c"
      case 3: // $bb2
        var $6=$self_addr; //@line 695 "parsermodule.c"
        var $7=$args_addr; //@line 695 "parsermodule.c"
        var $8=$kw_addr; //@line 695 "parsermodule.c"
        var $9=_parser_tuple2st($6, $7, $8); //@line 695 "parsermodule.c"
        $0=$9; //@line 695 "parsermodule.c"
        __label__ = 4; break; //@line 695 "parsermodule.c"
      case 4: // $bb3
        var $10=$0; //@line 694 "parsermodule.c"
        $retval=$10; //@line 694 "parsermodule.c"
        var $retval4=$retval; //@line 694 "parsermodule.c"
        ;
        return $retval4; //@line 694 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _build_node_children($tuple, $root, $line_num) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tuple_addr;
        var $root_addr;
        var $line_num_addr;
        var $retval;
        var $iftmp_48;
        var $iftmp_47;
        var $0;
        var $len;
        var $i;
        var $err;
        var $elem;
        var $ok;
        var $type;
        var $strn;
        var $temp;
        var $err11;
        var $len20;
        var $temp21;
        var $o;
        var $err53;
        var $new_child;
        $tuple_addr=$tuple;
        $root_addr=$root;
        $line_num_addr=$line_num;
        var $1=$tuple_addr; //@line 710 "parsermodule.c"
        var $2=_PyObject_Size($1); //@line 710 "parsermodule.c"
        $len=$2; //@line 710 "parsermodule.c"
        $i=1; //@line 714 "parsermodule.c"
        __label__ = 69; break; //@line 714 "parsermodule.c"
      case 1: // $bb
        var $3=$tuple_addr; //@line 716 "parsermodule.c"
        var $4=$i; //@line 716 "parsermodule.c"
        var $5=_PySequence_GetItem($3, $4); //@line 716 "parsermodule.c"
        $elem=$5; //@line 716 "parsermodule.c"
        var $6=$elem; //@line 717 "parsermodule.c"
        var $7=($6)!=0; //@line 717 "parsermodule.c"
        var $8=($7); //@line 717 "parsermodule.c"
        $ok=$8; //@line 717 "parsermodule.c"
        $type=0; //@line 718 "parsermodule.c"
        $strn=0; //@line 719 "parsermodule.c"
        var $9=$ok; //@line 721 "parsermodule.c"
        var $10=($9)!=0; //@line 721 "parsermodule.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 10; break; } //@line 721 "parsermodule.c"
      case 2: // $bb2
        var $11=$elem; //@line 722 "parsermodule.c"
        var $12=_PySequence_Check($11); //@line 722 "parsermodule.c"
        $ok=$12; //@line 722 "parsermodule.c"
        var $13=($12)!=0; //@line 723 "parsermodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 723 "parsermodule.c"
      case 3: // $bb3
        var $14=$elem; //@line 724 "parsermodule.c"
        var $15=_PySequence_GetItem($14, 0); //@line 724 "parsermodule.c"
        $temp=$15; //@line 724 "parsermodule.c"
        var $16=$temp; //@line 725 "parsermodule.c"
        var $17=($16)==0; //@line 725 "parsermodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 725 "parsermodule.c"
      case 4: // $bb4
        $ok=0; //@line 726 "parsermodule.c"
        __label__ = 10; break; //@line 726 "parsermodule.c"
      case 5: // $bb5
        var $18=$temp; //@line 728 "parsermodule.c"
        var $19=$18+4; //@line 728 "parsermodule.c"
        var $20=HEAP[$19]; //@line 728 "parsermodule.c"
        var $21=$20+84; //@line 728 "parsermodule.c"
        var $22=HEAP[$21]; //@line 728 "parsermodule.c"
        var $23=($22) & 8388608; //@line 728 "parsermodule.c"
        var $24=($23)!=0; //@line 728 "parsermodule.c"
        var $25=($24); //@line 728 "parsermodule.c"
        $ok=$25; //@line 728 "parsermodule.c"
        var $26=$ok; //@line 729 "parsermodule.c"
        var $27=($26)!=0; //@line 729 "parsermodule.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 729 "parsermodule.c"
      case 6: // $bb6
        var $28=$temp; //@line 730 "parsermodule.c"
        var $29=$28; //@line 730 "parsermodule.c"
        var $30=$29+8; //@line 730 "parsermodule.c"
        var $31=HEAP[$30]; //@line 730 "parsermodule.c"
        $type=$31; //@line 730 "parsermodule.c"
        __label__ = 7; break; //@line 730 "parsermodule.c"
      case 7: // $bb7
        var $32=$temp; //@line 731 "parsermodule.c"
        var $33=$32; //@line 731 "parsermodule.c"
        var $34=HEAP[$33]; //@line 731 "parsermodule.c"
        var $35=($34) - 1; //@line 731 "parsermodule.c"
        var $36=$temp; //@line 731 "parsermodule.c"
        var $37=$36; //@line 731 "parsermodule.c"
        HEAP[$37]=$35; //@line 731 "parsermodule.c"
        var $38=$temp; //@line 731 "parsermodule.c"
        var $39=$38; //@line 731 "parsermodule.c"
        var $40=HEAP[$39]; //@line 731 "parsermodule.c"
        var $41=($40)==0; //@line 731 "parsermodule.c"
        if ($41) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 731 "parsermodule.c"
      case 8: // $bb8
        var $42=$temp; //@line 731 "parsermodule.c"
        var $43=$42+4; //@line 731 "parsermodule.c"
        var $44=HEAP[$43]; //@line 731 "parsermodule.c"
        var $45=$44+24; //@line 731 "parsermodule.c"
        var $46=HEAP[$45]; //@line 731 "parsermodule.c"
        var $47=$temp; //@line 731 "parsermodule.c"
        FUNCTION_TABLE[$46]($47); //@line 731 "parsermodule.c"
        __label__ = 9; break; //@line 731 "parsermodule.c"
      case 9: // $bb9
        var $_pr_pr=$ok;
        var $48=($_pr_pr)==0; //@line 734 "parsermodule.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 17; break; } //@line 734 "parsermodule.c"
      case 10: // $bb10
        var $49=$elem; //@line 736 "parsermodule.c"
        var $50=_Py_BuildValue(__str40, allocate([$49,0,0,0,__str41,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 736 "parsermodule.c"
        $err11=$50; //@line 736 "parsermodule.c"
        var $51=HEAP[_parser_error]; //@line 737 "parsermodule.c"
        var $52=$err11; //@line 737 "parsermodule.c"
        _PyErr_SetObject($51, $52); //@line 737 "parsermodule.c"
        var $53=$err11; //@line 738 "parsermodule.c"
        var $54=($53)!=0; //@line 738 "parsermodule.c"
        if ($54) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 738 "parsermodule.c"
      case 11: // $bb12
        var $55=$err11; //@line 738 "parsermodule.c"
        var $56=$55; //@line 738 "parsermodule.c"
        var $57=HEAP[$56]; //@line 738 "parsermodule.c"
        var $58=($57) - 1; //@line 738 "parsermodule.c"
        var $59=$err11; //@line 738 "parsermodule.c"
        var $60=$59; //@line 738 "parsermodule.c"
        HEAP[$60]=$58; //@line 738 "parsermodule.c"
        var $61=$err11; //@line 738 "parsermodule.c"
        var $62=$61; //@line 738 "parsermodule.c"
        var $63=HEAP[$62]; //@line 738 "parsermodule.c"
        var $64=($63)==0; //@line 738 "parsermodule.c"
        if ($64) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 738 "parsermodule.c"
      case 12: // $bb13
        var $65=$err11; //@line 738 "parsermodule.c"
        var $66=$65+4; //@line 738 "parsermodule.c"
        var $67=HEAP[$66]; //@line 738 "parsermodule.c"
        var $68=$67+24; //@line 738 "parsermodule.c"
        var $69=HEAP[$68]; //@line 738 "parsermodule.c"
        var $70=$err11; //@line 738 "parsermodule.c"
        FUNCTION_TABLE[$69]($70); //@line 738 "parsermodule.c"
        __label__ = 13; break; //@line 738 "parsermodule.c"
      case 13: // $bb14
        var $71=$elem; //@line 739 "parsermodule.c"
        var $72=($71)!=0; //@line 739 "parsermodule.c"
        if ($72) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 739 "parsermodule.c"
      case 14: // $bb15
        var $73=$elem; //@line 739 "parsermodule.c"
        var $74=$73; //@line 739 "parsermodule.c"
        var $75=HEAP[$74]; //@line 739 "parsermodule.c"
        var $76=($75) - 1; //@line 739 "parsermodule.c"
        var $77=$elem; //@line 739 "parsermodule.c"
        var $78=$77; //@line 739 "parsermodule.c"
        HEAP[$78]=$76; //@line 739 "parsermodule.c"
        var $79=$elem; //@line 739 "parsermodule.c"
        var $80=$79; //@line 739 "parsermodule.c"
        var $81=HEAP[$80]; //@line 739 "parsermodule.c"
        var $82=($81)==0; //@line 739 "parsermodule.c"
        if ($82) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 739 "parsermodule.c"
      case 15: // $bb16
        var $83=$elem; //@line 739 "parsermodule.c"
        var $84=$83+4; //@line 739 "parsermodule.c"
        var $85=HEAP[$84]; //@line 739 "parsermodule.c"
        var $86=$85+24; //@line 739 "parsermodule.c"
        var $87=HEAP[$86]; //@line 739 "parsermodule.c"
        var $88=$elem; //@line 739 "parsermodule.c"
        FUNCTION_TABLE[$87]($88); //@line 739 "parsermodule.c"
        __label__ = 16; break; //@line 739 "parsermodule.c"
      case 16: // $bb17
        $0=0; //@line 740 "parsermodule.c"
        __label__ = 71; break; //@line 740 "parsermodule.c"
      case 17: // $bb18
        var $89=$type; //@line 742 "parsermodule.c"
        var $90=($89) <= 255; //@line 742 "parsermodule.c"
        if ($90) { __label__ = 18; break; } else { __label__ = 45; break; } //@line 742 "parsermodule.c"
      case 18: // $bb19
        var $91=$elem; //@line 743 "parsermodule.c"
        var $92=_PyObject_Size($91); //@line 743 "parsermodule.c"
        $len20=$92; //@line 743 "parsermodule.c"
        var $93=$len20; //@line 746 "parsermodule.c"
        var $94=($93)!=2; //@line 746 "parsermodule.c"
        var $95=$len20; //@line 746 "parsermodule.c"
        var $96=($95)!=3; //@line 746 "parsermodule.c"
        var $or_cond=($94) & ($96);
        if ($or_cond) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 746 "parsermodule.c"
      case 19: // $bb23
        _err_string(__str42); //@line 747 "parsermodule.c"
        $0=0; //@line 748 "parsermodule.c"
        __label__ = 71; break; //@line 748 "parsermodule.c"
      case 20: // $bb24
        var $97=$elem; //@line 750 "parsermodule.c"
        var $98=_PySequence_GetItem($97, 1); //@line 750 "parsermodule.c"
        $temp21=$98; //@line 750 "parsermodule.c"
        var $99=$temp21; //@line 751 "parsermodule.c"
        var $100=($99)==0; //@line 751 "parsermodule.c"
        if ($100) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 751 "parsermodule.c"
      case 21: // $bb25
        $0=0; //@line 752 "parsermodule.c"
        __label__ = 71; break; //@line 752 "parsermodule.c"
      case 22: // $bb26
        var $101=$temp21; //@line 753 "parsermodule.c"
        var $102=$101+4; //@line 753 "parsermodule.c"
        var $103=HEAP[$102]; //@line 753 "parsermodule.c"
        var $104=$103+84; //@line 753 "parsermodule.c"
        var $105=HEAP[$104]; //@line 753 "parsermodule.c"
        var $106=($105) & 134217728; //@line 753 "parsermodule.c"
        var $107=($106)==0; //@line 753 "parsermodule.c"
        if ($107) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 753 "parsermodule.c"
      case 23: // $bb27
        var $108=$temp21; //@line 754 "parsermodule.c"
        var $109=$108+4; //@line 754 "parsermodule.c"
        var $110=HEAP[$109]; //@line 754 "parsermodule.c"
        var $111=$110+12; //@line 754 "parsermodule.c"
        var $112=HEAP[$111]; //@line 754 "parsermodule.c"
        var $113=HEAP[_parser_error]; //@line 754 "parsermodule.c"
        var $114=_PyErr_Format($113, __str43, allocate([$112,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 754 "parsermodule.c"
        var $115=$temp21; //@line 758 "parsermodule.c"
        var $116=$115; //@line 758 "parsermodule.c"
        var $117=HEAP[$116]; //@line 758 "parsermodule.c"
        var $118=($117) - 1; //@line 758 "parsermodule.c"
        var $119=$temp21; //@line 758 "parsermodule.c"
        var $120=$119; //@line 758 "parsermodule.c"
        HEAP[$120]=$118; //@line 758 "parsermodule.c"
        var $121=$temp21; //@line 758 "parsermodule.c"
        var $122=$121; //@line 758 "parsermodule.c"
        var $123=HEAP[$122]; //@line 758 "parsermodule.c"
        var $124=($123)==0; //@line 758 "parsermodule.c"
        if ($124) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 758 "parsermodule.c"
      case 24: // $bb28
        var $125=$temp21; //@line 758 "parsermodule.c"
        var $126=$125+4; //@line 758 "parsermodule.c"
        var $127=HEAP[$126]; //@line 758 "parsermodule.c"
        var $128=$127+24; //@line 758 "parsermodule.c"
        var $129=HEAP[$128]; //@line 758 "parsermodule.c"
        var $130=$temp21; //@line 758 "parsermodule.c"
        FUNCTION_TABLE[$129]($130); //@line 758 "parsermodule.c"
        __label__ = 25; break; //@line 758 "parsermodule.c"
      case 25: // $bb29
        $0=0; //@line 759 "parsermodule.c"
        __label__ = 71; break; //@line 759 "parsermodule.c"
      case 26: // $bb30
        var $131=$len20; //@line 761 "parsermodule.c"
        var $132=($131)==3; //@line 761 "parsermodule.c"
        if ($132) { __label__ = 27; break; } else { __label__ = 36; break; } //@line 761 "parsermodule.c"
      case 27: // $bb31
        var $133=$elem; //@line 762 "parsermodule.c"
        var $134=_PySequence_GetItem($133, 2); //@line 762 "parsermodule.c"
        $o=$134; //@line 762 "parsermodule.c"
        var $135=$o; //@line 763 "parsermodule.c"
        var $136=($135)!=0; //@line 763 "parsermodule.c"
        if ($136) { __label__ = 28; break; } else { __label__ = 36; break; } //@line 763 "parsermodule.c"
      case 28: // $bb32
        var $137=$o; //@line 764 "parsermodule.c"
        var $138=$137+4; //@line 764 "parsermodule.c"
        var $139=HEAP[$138]; //@line 764 "parsermodule.c"
        var $140=$139+84; //@line 764 "parsermodule.c"
        var $141=HEAP[$140]; //@line 764 "parsermodule.c"
        var $142=($141) & 8388608; //@line 764 "parsermodule.c"
        var $143=($142)!=0; //@line 764 "parsermodule.c"
        if ($143) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 764 "parsermodule.c"
      case 29: // $bb33
        var $144=$o; //@line 765 "parsermodule.c"
        var $145=$144; //@line 765 "parsermodule.c"
        var $146=$145+8; //@line 765 "parsermodule.c"
        var $147=HEAP[$146]; //@line 765 "parsermodule.c"
        var $148=$line_num_addr; //@line 765 "parsermodule.c"
        HEAP[$148]=$147; //@line 765 "parsermodule.c"
        var $149=$o; //@line 775 "parsermodule.c"
        var $150=$149; //@line 775 "parsermodule.c"
        var $151=HEAP[$150]; //@line 775 "parsermodule.c"
        var $152=($151) - 1; //@line 775 "parsermodule.c"
        var $153=$o; //@line 775 "parsermodule.c"
        var $154=$153; //@line 775 "parsermodule.c"
        HEAP[$154]=$152; //@line 775 "parsermodule.c"
        var $155=$o; //@line 775 "parsermodule.c"
        var $156=$155; //@line 775 "parsermodule.c"
        var $157=HEAP[$156]; //@line 775 "parsermodule.c"
        var $158=($157)==0; //@line 775 "parsermodule.c"
        if ($158) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 775 "parsermodule.c"
      case 30: // $bb34
        var $159=$temp21; //@line 767 "parsermodule.c"
        var $160=$159+4; //@line 767 "parsermodule.c"
        var $161=HEAP[$160]; //@line 767 "parsermodule.c"
        var $162=$161+12; //@line 767 "parsermodule.c"
        var $163=HEAP[$162]; //@line 767 "parsermodule.c"
        var $164=HEAP[_parser_error]; //@line 767 "parsermodule.c"
        var $165=_PyErr_Format($164, __str44, allocate([$163,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 767 "parsermodule.c"
        var $166=$o; //@line 771 "parsermodule.c"
        var $167=$166; //@line 771 "parsermodule.c"
        var $168=HEAP[$167]; //@line 771 "parsermodule.c"
        var $169=($168) - 1; //@line 771 "parsermodule.c"
        var $170=$o; //@line 771 "parsermodule.c"
        var $171=$170; //@line 771 "parsermodule.c"
        HEAP[$171]=$169; //@line 771 "parsermodule.c"
        var $172=$o; //@line 771 "parsermodule.c"
        var $173=$172; //@line 771 "parsermodule.c"
        var $174=HEAP[$173]; //@line 771 "parsermodule.c"
        var $175=($174)==0; //@line 771 "parsermodule.c"
        if ($175) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 771 "parsermodule.c"
      case 31: // $bb35
        var $176=$o; //@line 771 "parsermodule.c"
        var $177=$176+4; //@line 771 "parsermodule.c"
        var $178=HEAP[$177]; //@line 771 "parsermodule.c"
        var $179=$178+24; //@line 771 "parsermodule.c"
        var $180=HEAP[$179]; //@line 771 "parsermodule.c"
        var $181=$o; //@line 771 "parsermodule.c"
        FUNCTION_TABLE[$180]($181); //@line 771 "parsermodule.c"
        __label__ = 32; break; //@line 771 "parsermodule.c"
      case 32: // $bb36
        var $182=$temp21; //@line 772 "parsermodule.c"
        var $183=$182; //@line 772 "parsermodule.c"
        var $184=HEAP[$183]; //@line 772 "parsermodule.c"
        var $185=($184) - 1; //@line 772 "parsermodule.c"
        var $186=$temp21; //@line 772 "parsermodule.c"
        var $187=$186; //@line 772 "parsermodule.c"
        HEAP[$187]=$185; //@line 772 "parsermodule.c"
        var $188=$temp21; //@line 772 "parsermodule.c"
        var $189=$188; //@line 772 "parsermodule.c"
        var $190=HEAP[$189]; //@line 772 "parsermodule.c"
        var $191=($190)==0; //@line 772 "parsermodule.c"
        if ($191) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 772 "parsermodule.c"
      case 33: // $bb37
        var $192=$temp21; //@line 772 "parsermodule.c"
        var $193=$192+4; //@line 772 "parsermodule.c"
        var $194=HEAP[$193]; //@line 772 "parsermodule.c"
        var $195=$194+24; //@line 772 "parsermodule.c"
        var $196=HEAP[$195]; //@line 772 "parsermodule.c"
        var $197=$temp21; //@line 772 "parsermodule.c"
        FUNCTION_TABLE[$196]($197); //@line 772 "parsermodule.c"
        __label__ = 34; break; //@line 772 "parsermodule.c"
      case 34: // $bb38
        $0=0; //@line 773 "parsermodule.c"
        __label__ = 71; break; //@line 773 "parsermodule.c"
      case 35: // $bb39
        var $198=$o; //@line 775 "parsermodule.c"
        var $199=$198+4; //@line 775 "parsermodule.c"
        var $200=HEAP[$199]; //@line 775 "parsermodule.c"
        var $201=$200+24; //@line 775 "parsermodule.c"
        var $202=HEAP[$201]; //@line 775 "parsermodule.c"
        var $203=$o; //@line 775 "parsermodule.c"
        FUNCTION_TABLE[$202]($203); //@line 775 "parsermodule.c"
        __label__ = 36; break; //@line 775 "parsermodule.c"
      case 36: // $bb40
        var $204=$temp21; //@line 778 "parsermodule.c"
        var $205=$204; //@line 778 "parsermodule.c"
        var $206=$205+8; //@line 778 "parsermodule.c"
        var $207=HEAP[$206]; //@line 778 "parsermodule.c"
        var $208=($207) + 1; //@line 778 "parsermodule.c"
        $len20=$208; //@line 778 "parsermodule.c"
        var $209=($208) >= 0; //@line 779 "parsermodule.c"
        if ($209) { __label__ = 37; break; } else { __label__ = 40; break; } //@line 779 "parsermodule.c"
      case 37: // $bb41
        var $210=$len20; //@line 779 "parsermodule.c"
        var $211=($210)!=0; //@line 779 "parsermodule.c"
        if ($211) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 779 "parsermodule.c"
      case 38: // $bb42
        var $212=$len20; //@line 779 "parsermodule.c"
        $iftmp_48=$212; //@line 779 "parsermodule.c"
        __label__ = 41; break; //@line 779 "parsermodule.c"
      case 39: // $bb43
        $iftmp_48=1; //@line 779 "parsermodule.c"
        __label__ = 41; break; //@line 779 "parsermodule.c"
      case 40: // $bb46_thread
        $iftmp_47=0; //@line 779 "parsermodule.c"
        $strn=0; //@line 779 "parsermodule.c"
        __label__ = 43; break;
      case 41: // $bb46
        var $213=$iftmp_48; //@line 779 "parsermodule.c"
        var $214=_malloc($213); //@line 779 "parsermodule.c"
        $iftmp_47=$214; //@line 779 "parsermodule.c"
        $strn=$214; //@line 779 "parsermodule.c"
        var $215=($214)!=0; //@line 780 "parsermodule.c"
        if ($215) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 780 "parsermodule.c"
      case 42: // $bb47
        var $216=$len20; //@line 781 "parsermodule.c"
        var $217=$temp21; //@line 781 "parsermodule.c"
        var $218=$217; //@line 781 "parsermodule.c"
        var $219=$218+20; //@line 781 "parsermodule.c"
        var $220=$219; //@line 781 "parsermodule.c"
        var $221=$strn; //@line 781 "parsermodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($221, $220, $216, 1, 0); //@line 781 "parsermodule.c"
        __label__ = 43; break; //@line 781 "parsermodule.c"
      case 43: // $bb48
        var $222=$temp21; //@line 782 "parsermodule.c"
        var $223=$222; //@line 782 "parsermodule.c"
        var $224=HEAP[$223]; //@line 782 "parsermodule.c"
        var $225=($224) - 1; //@line 782 "parsermodule.c"
        var $226=$temp21; //@line 782 "parsermodule.c"
        var $227=$226; //@line 782 "parsermodule.c"
        HEAP[$227]=$225; //@line 782 "parsermodule.c"
        var $228=$temp21; //@line 782 "parsermodule.c"
        var $229=$228; //@line 782 "parsermodule.c"
        var $230=HEAP[$229]; //@line 782 "parsermodule.c"
        var $231=($230)==0; //@line 782 "parsermodule.c"
        if ($231) { __label__ = 44; break; } else { __label__ = 53; break; } //@line 782 "parsermodule.c"
      case 44: // $bb49
        var $232=$temp21; //@line 782 "parsermodule.c"
        var $233=$232+4; //@line 782 "parsermodule.c"
        var $234=HEAP[$233]; //@line 782 "parsermodule.c"
        var $235=$234+24; //@line 782 "parsermodule.c"
        var $236=HEAP[$235]; //@line 782 "parsermodule.c"
        var $237=$temp21; //@line 782 "parsermodule.c"
        FUNCTION_TABLE[$236]($237); //@line 782 "parsermodule.c"
        __label__ = 53; break; //@line 782 "parsermodule.c"
      case 45: // $bb51
        var $238=$type; //@line 784 "parsermodule.c"
        var $239=($238) <= 255; //@line 784 "parsermodule.c"
        if ($239) { __label__ = 46; break; } else { __label__ = 53; break; } //@line 784 "parsermodule.c"
      case 46: // $bb52
        var $240=$elem; //@line 789 "parsermodule.c"
        var $241=_Py_BuildValue(__str40, allocate([$240,0,0,0,__str45,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 789 "parsermodule.c"
        $err53=$241; //@line 789 "parsermodule.c"
        var $242=HEAP[_parser_error]; //@line 790 "parsermodule.c"
        var $243=$err53; //@line 790 "parsermodule.c"
        _PyErr_SetObject($242, $243); //@line 790 "parsermodule.c"
        var $244=$err53; //@line 791 "parsermodule.c"
        var $245=($244)!=0; //@line 791 "parsermodule.c"
        if ($245) { __label__ = 47; break; } else { __label__ = 49; break; } //@line 791 "parsermodule.c"
      case 47: // $bb54
        var $246=$err53; //@line 791 "parsermodule.c"
        var $247=$246; //@line 791 "parsermodule.c"
        var $248=HEAP[$247]; //@line 791 "parsermodule.c"
        var $249=($248) - 1; //@line 791 "parsermodule.c"
        var $250=$err53; //@line 791 "parsermodule.c"
        var $251=$250; //@line 791 "parsermodule.c"
        HEAP[$251]=$249; //@line 791 "parsermodule.c"
        var $252=$err53; //@line 791 "parsermodule.c"
        var $253=$252; //@line 791 "parsermodule.c"
        var $254=HEAP[$253]; //@line 791 "parsermodule.c"
        var $255=($254)==0; //@line 791 "parsermodule.c"
        if ($255) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 791 "parsermodule.c"
      case 48: // $bb55
        var $256=$err53; //@line 791 "parsermodule.c"
        var $257=$256+4; //@line 791 "parsermodule.c"
        var $258=HEAP[$257]; //@line 791 "parsermodule.c"
        var $259=$258+24; //@line 791 "parsermodule.c"
        var $260=HEAP[$259]; //@line 791 "parsermodule.c"
        var $261=$err53; //@line 791 "parsermodule.c"
        FUNCTION_TABLE[$260]($261); //@line 791 "parsermodule.c"
        __label__ = 49; break; //@line 791 "parsermodule.c"
      case 49: // $bb56
        var $262=$elem; //@line 792 "parsermodule.c"
        var $263=($262)!=0; //@line 792 "parsermodule.c"
        if ($263) { __label__ = 50; break; } else { __label__ = 52; break; } //@line 792 "parsermodule.c"
      case 50: // $bb57
        var $264=$elem; //@line 792 "parsermodule.c"
        var $265=$264; //@line 792 "parsermodule.c"
        var $266=HEAP[$265]; //@line 792 "parsermodule.c"
        var $267=($266) - 1; //@line 792 "parsermodule.c"
        var $268=$elem; //@line 792 "parsermodule.c"
        var $269=$268; //@line 792 "parsermodule.c"
        HEAP[$269]=$267; //@line 792 "parsermodule.c"
        var $270=$elem; //@line 792 "parsermodule.c"
        var $271=$270; //@line 792 "parsermodule.c"
        var $272=HEAP[$271]; //@line 792 "parsermodule.c"
        var $273=($272)==0; //@line 792 "parsermodule.c"
        if ($273) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 792 "parsermodule.c"
      case 51: // $bb58
        var $274=$elem; //@line 792 "parsermodule.c"
        var $275=$274+4; //@line 792 "parsermodule.c"
        var $276=HEAP[$275]; //@line 792 "parsermodule.c"
        var $277=$276+24; //@line 792 "parsermodule.c"
        var $278=HEAP[$277]; //@line 792 "parsermodule.c"
        var $279=$elem; //@line 792 "parsermodule.c"
        FUNCTION_TABLE[$278]($279); //@line 792 "parsermodule.c"
        __label__ = 52; break; //@line 792 "parsermodule.c"
      case 52: // $bb59
        $0=0; //@line 793 "parsermodule.c"
        __label__ = 71; break; //@line 793 "parsermodule.c"
      case 53: // $bb60
        var $280=$line_num_addr; //@line 795 "parsermodule.c"
        var $281=HEAP[$280]; //@line 795 "parsermodule.c"
        var $282=$root_addr; //@line 795 "parsermodule.c"
        var $283=$type; //@line 795 "parsermodule.c"
        var $284=$strn; //@line 795 "parsermodule.c"
        var $285=_PyNode_AddChild($282, $283, $284, $281, 0); //@line 795 "parsermodule.c"
        $err=$285; //@line 795 "parsermodule.c"
        var $286=($285)==15; //@line 796 "parsermodule.c"
        if ($286) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 796 "parsermodule.c"
      case 54: // $bb61
        var $287=$strn; //@line 797 "parsermodule.c"
        _free($287); //@line 797 "parsermodule.c"
        var $288=_PyErr_NoMemory(); //@line 798 "parsermodule.c"
        var $289=$288; //@line 798 "parsermodule.c"
        $0=$289; //@line 798 "parsermodule.c"
        __label__ = 71; break; //@line 798 "parsermodule.c"
      case 55: // $bb62
        var $290=$err; //@line 800 "parsermodule.c"
        var $291=($290)==19; //@line 800 "parsermodule.c"
        if ($291) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 800 "parsermodule.c"
      case 56: // $bb63
        var $292=$strn; //@line 801 "parsermodule.c"
        _free($292); //@line 801 "parsermodule.c"
        var $293=HEAP[_PyExc_ValueError]; //@line 802 "parsermodule.c"
        _PyErr_SetString($293, __str46); //@line 802 "parsermodule.c"
        $0=0; //@line 804 "parsermodule.c"
        __label__ = 71; break; //@line 804 "parsermodule.c"
      case 57: // $bb64
        var $294=$type; //@line 807 "parsermodule.c"
        var $295=($294) > 255; //@line 807 "parsermodule.c"
        if ($295) { __label__ = 58; break; } else { __label__ = 63; break; } //@line 807 "parsermodule.c"
      case 58: // $bb65
        var $296=$root_addr; //@line 808 "parsermodule.c"
        var $297=$296+20; //@line 808 "parsermodule.c"
        var $298=HEAP[$297]; //@line 808 "parsermodule.c"
        var $299=$i; //@line 808 "parsermodule.c"
        var $300=($299) - 1; //@line 808 "parsermodule.c"
        var $301=$298+24*$300; //@line 808 "parsermodule.c"
        $new_child=$301; //@line 808 "parsermodule.c"
        var $302=$elem; //@line 810 "parsermodule.c"
        var $303=$new_child; //@line 810 "parsermodule.c"
        var $304=$line_num_addr; //@line 810 "parsermodule.c"
        var $305=_build_node_children($302, $303, $304); //@line 810 "parsermodule.c"
        var $306=$new_child; //@line 810 "parsermodule.c"
        var $307=($305)!=($306); //@line 810 "parsermodule.c"
        if ($307) { __label__ = 59; break; } else { __label__ = 65; break; } //@line 810 "parsermodule.c"
      case 59: // $bb66
        var $308=$elem; //@line 811 "parsermodule.c"
        var $309=($308)!=0; //@line 811 "parsermodule.c"
        if ($309) { __label__ = 60; break; } else { __label__ = 62; break; } //@line 811 "parsermodule.c"
      case 60: // $bb67
        var $310=$elem; //@line 811 "parsermodule.c"
        var $311=$310; //@line 811 "parsermodule.c"
        var $312=HEAP[$311]; //@line 811 "parsermodule.c"
        var $313=($312) - 1; //@line 811 "parsermodule.c"
        var $314=$elem; //@line 811 "parsermodule.c"
        var $315=$314; //@line 811 "parsermodule.c"
        HEAP[$315]=$313; //@line 811 "parsermodule.c"
        var $316=$elem; //@line 811 "parsermodule.c"
        var $317=$316; //@line 811 "parsermodule.c"
        var $318=HEAP[$317]; //@line 811 "parsermodule.c"
        var $319=($318)==0; //@line 811 "parsermodule.c"
        if ($319) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 811 "parsermodule.c"
      case 61: // $bb68
        var $320=$elem; //@line 811 "parsermodule.c"
        var $321=$320+4; //@line 811 "parsermodule.c"
        var $322=HEAP[$321]; //@line 811 "parsermodule.c"
        var $323=$322+24; //@line 811 "parsermodule.c"
        var $324=HEAP[$323]; //@line 811 "parsermodule.c"
        var $325=$elem; //@line 811 "parsermodule.c"
        FUNCTION_TABLE[$324]($325); //@line 811 "parsermodule.c"
        __label__ = 62; break; //@line 811 "parsermodule.c"
      case 62: // $bb69
        $0=0; //@line 812 "parsermodule.c"
        __label__ = 71; break; //@line 812 "parsermodule.c"
      case 63: // $bb71
        var $326=$type; //@line 815 "parsermodule.c"
        var $327=($326)==4; //@line 815 "parsermodule.c"
        if ($327) { __label__ = 64; break; } else { __label__ = 65; break; } //@line 815 "parsermodule.c"
      case 64: // $bb72
        var $328=$line_num_addr; //@line 816 "parsermodule.c"
        var $329=HEAP[$328]; //@line 816 "parsermodule.c"
        var $330=($329) + 1; //@line 816 "parsermodule.c"
        var $331=$line_num_addr; //@line 816 "parsermodule.c"
        HEAP[$331]=$330; //@line 816 "parsermodule.c"
        __label__ = 65; break; //@line 816 "parsermodule.c"
      case 65: // $bb73
        var $332=$elem; //@line 818 "parsermodule.c"
        var $333=($332)!=0; //@line 818 "parsermodule.c"
        if ($333) { __label__ = 66; break; } else { __label__ = 68; break; } //@line 818 "parsermodule.c"
      case 66: // $bb74
        var $334=$elem; //@line 818 "parsermodule.c"
        var $335=$334; //@line 818 "parsermodule.c"
        var $336=HEAP[$335]; //@line 818 "parsermodule.c"
        var $337=($336) - 1; //@line 818 "parsermodule.c"
        var $338=$elem; //@line 818 "parsermodule.c"
        var $339=$338; //@line 818 "parsermodule.c"
        HEAP[$339]=$337; //@line 818 "parsermodule.c"
        var $340=$elem; //@line 818 "parsermodule.c"
        var $341=$340; //@line 818 "parsermodule.c"
        var $342=HEAP[$341]; //@line 818 "parsermodule.c"
        var $343=($342)==0; //@line 818 "parsermodule.c"
        if ($343) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 818 "parsermodule.c"
      case 67: // $bb75
        var $344=$elem; //@line 818 "parsermodule.c"
        var $345=$344+4; //@line 818 "parsermodule.c"
        var $346=HEAP[$345]; //@line 818 "parsermodule.c"
        var $347=$346+24; //@line 818 "parsermodule.c"
        var $348=HEAP[$347]; //@line 818 "parsermodule.c"
        var $349=$elem; //@line 818 "parsermodule.c"
        FUNCTION_TABLE[$348]($349); //@line 818 "parsermodule.c"
        __label__ = 68; break; //@line 818 "parsermodule.c"
      case 68: // $bb76
        var $350=$i; //@line 714 "parsermodule.c"
        var $351=($350) + 1; //@line 714 "parsermodule.c"
        $i=$351; //@line 714 "parsermodule.c"
        __label__ = 69; break; //@line 714 "parsermodule.c"
      case 69: // $bb77
        var $352=$i; //@line 714 "parsermodule.c"
        var $353=$len; //@line 714 "parsermodule.c"
        var $354=($352) < ($353); //@line 714 "parsermodule.c"
        if ($354) { __label__ = 1; break; } else { __label__ = 70; break; } //@line 714 "parsermodule.c"
      case 70: // $bb78
        var $355=$root_addr; //@line 820 "parsermodule.c"
        $0=$355; //@line 820 "parsermodule.c"
        __label__ = 71; break; //@line 820 "parsermodule.c"
      case 71: // $bb79
        var $356=$0; //@line 740 "parsermodule.c"
        $retval=$356; //@line 740 "parsermodule.c"
        var $retval80=$retval; //@line 740 "parsermodule.c"
        ;
        return $retval80; //@line 740 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _build_node_tree($tuple) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tuple_addr;
        var $retval;
        var $0;
        var $iftmp_56;
        var $iftmp_55;
        var $res;
        var $temp;
        var $num;
        var $line_num=__stackBase__;
        var $encoding;
        var $len;
        var $err;
        $tuple_addr=$tuple;
        $res=0; //@line 827 "parsermodule.c"
        var $1=$tuple_addr; //@line 828 "parsermodule.c"
        var $2=_PySequence_GetItem($1, 0); //@line 828 "parsermodule.c"
        $temp=$2; //@line 828 "parsermodule.c"
        $num=-1; //@line 829 "parsermodule.c"
        var $3=$temp; //@line 831 "parsermodule.c"
        var $4=($3)!=0; //@line 831 "parsermodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 831 "parsermodule.c"
      case 1: // $bb1
        var $5=$temp; //@line 832 "parsermodule.c"
        var $6=_PyInt_AsLong($5); //@line 832 "parsermodule.c"
        $num=$6; //@line 832 "parsermodule.c"
        var $_pr=$temp;
        var $7=($_pr)!=0; //@line 833 "parsermodule.c"
        if ($7) { __lastLabel__ = 1; __label__ = 2; break; } else { __lastLabel__ = 1; __label__ = 5; break; } //@line 833 "parsermodule.c"
      case 2: // $bb2
        var $8=$temp; //@line 833 "parsermodule.c"
        var $9=$8; //@line 833 "parsermodule.c"
        var $10=HEAP[$9]; //@line 833 "parsermodule.c"
        var $11=($10) - 1; //@line 833 "parsermodule.c"
        var $12=$temp; //@line 833 "parsermodule.c"
        var $13=$12; //@line 833 "parsermodule.c"
        HEAP[$13]=$11; //@line 833 "parsermodule.c"
        var $14=$temp; //@line 833 "parsermodule.c"
        var $15=$14; //@line 833 "parsermodule.c"
        var $16=HEAP[$15]; //@line 833 "parsermodule.c"
        var $17=($16)==0; //@line 833 "parsermodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 833 "parsermodule.c"
      case 3: // $bb3
        var $18=$temp; //@line 833 "parsermodule.c"
        var $19=$18+4; //@line 833 "parsermodule.c"
        var $20=HEAP[$19]; //@line 833 "parsermodule.c"
        var $21=$20+24; //@line 833 "parsermodule.c"
        var $22=HEAP[$21]; //@line 833 "parsermodule.c"
        var $23=$temp; //@line 833 "parsermodule.c"
        FUNCTION_TABLE[$22]($23); //@line 833 "parsermodule.c"
        __label__ = 4; break; //@line 833 "parsermodule.c"
      case 4: // $bb4thread_pre_split
        var $_pr1=$num;
        __lastLabel__ = 4; __label__ = 5; break;
      case 5: // $bb4
        var $24=__lastLabel__ == 4 ? $_pr1 : ($6);
        var $25=($24) <= 255; //@line 834 "parsermodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 834 "parsermodule.c"
      case 6: // $bb5
        var $26=$tuple_addr; //@line 839 "parsermodule.c"
        var $27=_Py_BuildValue(__str40, allocate([$26,0,0,0,__str47,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 839 "parsermodule.c"
        $tuple_addr=$27; //@line 839 "parsermodule.c"
        var $28=HEAP[_parser_error]; //@line 841 "parsermodule.c"
        var $29=$tuple_addr; //@line 841 "parsermodule.c"
        _PyErr_SetObject($28, $29); //@line 841 "parsermodule.c"
        var $30=$tuple_addr; //@line 842 "parsermodule.c"
        var $31=($30)!=0; //@line 842 "parsermodule.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 32; break; } //@line 842 "parsermodule.c"
      case 7: // $bb6
        var $32=$tuple_addr; //@line 842 "parsermodule.c"
        var $33=$32; //@line 842 "parsermodule.c"
        var $34=HEAP[$33]; //@line 842 "parsermodule.c"
        var $35=($34) - 1; //@line 842 "parsermodule.c"
        var $36=$tuple_addr; //@line 842 "parsermodule.c"
        var $37=$36; //@line 842 "parsermodule.c"
        HEAP[$37]=$35; //@line 842 "parsermodule.c"
        var $38=$tuple_addr; //@line 842 "parsermodule.c"
        var $39=$38; //@line 842 "parsermodule.c"
        var $40=HEAP[$39]; //@line 842 "parsermodule.c"
        var $41=($40)==0; //@line 842 "parsermodule.c"
        if ($41) { __label__ = 8; break; } else { __label__ = 32; break; } //@line 842 "parsermodule.c"
      case 8: // $bb7
        var $42=$tuple_addr; //@line 842 "parsermodule.c"
        var $43=$42+4; //@line 842 "parsermodule.c"
        var $44=HEAP[$43]; //@line 842 "parsermodule.c"
        var $45=$44+24; //@line 842 "parsermodule.c"
        var $46=HEAP[$45]; //@line 842 "parsermodule.c"
        var $47=$tuple_addr; //@line 842 "parsermodule.c"
        FUNCTION_TABLE[$46]($47); //@line 842 "parsermodule.c"
        __label__ = 32; break; //@line 842 "parsermodule.c"
      case 9: // $bb9
        var $48=$num; //@line 844 "parsermodule.c"
        var $49=($48) > 255; //@line 844 "parsermodule.c"
        if ($49) { __label__ = 10; break; } else { __label__ = 29; break; } //@line 844 "parsermodule.c"
      case 10: // $bb10
        HEAP[$line_num]=0; //@line 848 "parsermodule.c"
        $encoding=0; //@line 849 "parsermodule.c"
        var $50=$num; //@line 851 "parsermodule.c"
        var $51=($50)==339; //@line 851 "parsermodule.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 851 "parsermodule.c"
      case 11: // $bb11
        var $52=$tuple_addr; //@line 852 "parsermodule.c"
        var $53=_PySequence_GetItem($52, 2); //@line 852 "parsermodule.c"
        $encoding=$53; //@line 852 "parsermodule.c"
        var $54=$tuple_addr; //@line 854 "parsermodule.c"
        var $55=_PySequence_GetSlice($54, 0, 2); //@line 854 "parsermodule.c"
        $tuple_addr=$55; //@line 854 "parsermodule.c"
        __label__ = 12; break; //@line 854 "parsermodule.c"
      case 12: // $bb12
        var $56=$num; //@line 856 "parsermodule.c"
        var $57=_PyNode_New($56); //@line 856 "parsermodule.c"
        $res=$57; //@line 856 "parsermodule.c"
        var $58=($57)!=0; //@line 857 "parsermodule.c"
        if ($58) { __label__ = 13; break; } else { __label__ = 32; break; } //@line 857 "parsermodule.c"
      case 13: // $bb13
        var $59=$tuple_addr; //@line 858 "parsermodule.c"
        var $60=$res; //@line 858 "parsermodule.c"
        var $61=_build_node_children($59, $60, $line_num); //@line 858 "parsermodule.c"
        var $62=$res; //@line 858 "parsermodule.c"
        var $63=($61)!=($62); //@line 858 "parsermodule.c"
        if ($63) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 858 "parsermodule.c"
      case 14: // $bb15_thread
        var $64=$res; //@line 859 "parsermodule.c"
        _PyNode_Free($64); //@line 859 "parsermodule.c"
        $res=0; //@line 860 "parsermodule.c"
        __label__ = 32; break;
      case 15: // $bb15
        var $65=($62)!=0; //@line 862 "parsermodule.c"
        if ($65) { __label__ = 16; break; } else { __label__ = 32; break; } //@line 862 "parsermodule.c"
      case 16: // $bb16
        var $66=$encoding; //@line 862 "parsermodule.c"
        var $67=($66)!=0; //@line 862 "parsermodule.c"
        if ($67) { __label__ = 17; break; } else { __label__ = 32; break; } //@line 862 "parsermodule.c"
      case 17: // $bb17
        var $68=$encoding; //@line 864 "parsermodule.c"
        var $69=$68; //@line 864 "parsermodule.c"
        var $70=$69+8; //@line 864 "parsermodule.c"
        var $71=HEAP[$70]; //@line 864 "parsermodule.c"
        var $72=($71) + 1; //@line 864 "parsermodule.c"
        $len=$72; //@line 864 "parsermodule.c"
        var $73=$len; //@line 865 "parsermodule.c"
        var $74=($73) >= 0; //@line 865 "parsermodule.c"
        if ($74) { __label__ = 18; break; } else { __label__ = 22; break; } //@line 865 "parsermodule.c"
      case 18: // $bb18
        var $75=$len; //@line 865 "parsermodule.c"
        var $76=($75)!=0; //@line 865 "parsermodule.c"
        if ($76) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 865 "parsermodule.c"
      case 19: // $bb19
        var $77=$len; //@line 865 "parsermodule.c"
        $iftmp_56=$77; //@line 865 "parsermodule.c"
        __label__ = 21; break; //@line 865 "parsermodule.c"
      case 20: // $bb20
        $iftmp_56=1; //@line 865 "parsermodule.c"
        __label__ = 21; break; //@line 865 "parsermodule.c"
      case 21: // $bb21
        var $78=$iftmp_56; //@line 865 "parsermodule.c"
        var $79=_malloc($78); //@line 865 "parsermodule.c"
        $iftmp_55=$79; //@line 865 "parsermodule.c"
        __label__ = 23; break; //@line 865 "parsermodule.c"
      case 22: // $bb22
        $iftmp_55=0; //@line 865 "parsermodule.c"
        __label__ = 23; break; //@line 865 "parsermodule.c"
      case 23: // $bb23
        var $80=$res; //@line 865 "parsermodule.c"
        var $81=$80+4; //@line 865 "parsermodule.c"
        var $82=$iftmp_55; //@line 865 "parsermodule.c"
        HEAP[$81]=$82; //@line 865 "parsermodule.c"
        var $83=$res; //@line 866 "parsermodule.c"
        var $84=$83+4; //@line 866 "parsermodule.c"
        var $85=HEAP[$84]; //@line 866 "parsermodule.c"
        var $86=($85)!=0; //@line 866 "parsermodule.c"
        if ($86) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 866 "parsermodule.c"
      case 24: // $bb24
        var $87=$len; //@line 867 "parsermodule.c"
        var $88=$encoding; //@line 867 "parsermodule.c"
        var $89=$88; //@line 867 "parsermodule.c"
        var $90=$89+20; //@line 867 "parsermodule.c"
        var $91=$90; //@line 867 "parsermodule.c"
        var $92=$res; //@line 867 "parsermodule.c"
        var $93=$92+4; //@line 867 "parsermodule.c"
        var $94=HEAP[$93]; //@line 867 "parsermodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($94, $91, $87, 1, 0); //@line 867 "parsermodule.c"
        __label__ = 25; break; //@line 867 "parsermodule.c"
      case 25: // $bb25
        var $95=$encoding; //@line 868 "parsermodule.c"
        var $96=$95; //@line 868 "parsermodule.c"
        var $97=HEAP[$96]; //@line 868 "parsermodule.c"
        var $98=($97) - 1; //@line 868 "parsermodule.c"
        var $99=$encoding; //@line 868 "parsermodule.c"
        var $100=$99; //@line 868 "parsermodule.c"
        HEAP[$100]=$98; //@line 868 "parsermodule.c"
        var $101=$encoding; //@line 868 "parsermodule.c"
        var $102=$101; //@line 868 "parsermodule.c"
        var $103=HEAP[$102]; //@line 868 "parsermodule.c"
        var $104=($103)==0; //@line 868 "parsermodule.c"
        if ($104) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 868 "parsermodule.c"
      case 26: // $bb26
        var $105=$encoding; //@line 868 "parsermodule.c"
        var $106=$105+4; //@line 868 "parsermodule.c"
        var $107=HEAP[$106]; //@line 868 "parsermodule.c"
        var $108=$107+24; //@line 868 "parsermodule.c"
        var $109=HEAP[$108]; //@line 868 "parsermodule.c"
        var $110=$encoding; //@line 868 "parsermodule.c"
        FUNCTION_TABLE[$109]($110); //@line 868 "parsermodule.c"
        __label__ = 27; break; //@line 868 "parsermodule.c"
      case 27: // $bb27
        var $111=$tuple_addr; //@line 869 "parsermodule.c"
        var $112=$111; //@line 869 "parsermodule.c"
        var $113=HEAP[$112]; //@line 869 "parsermodule.c"
        var $114=($113) - 1; //@line 869 "parsermodule.c"
        var $115=$tuple_addr; //@line 869 "parsermodule.c"
        var $116=$115; //@line 869 "parsermodule.c"
        HEAP[$116]=$114; //@line 869 "parsermodule.c"
        var $117=$tuple_addr; //@line 869 "parsermodule.c"
        var $118=$117; //@line 869 "parsermodule.c"
        var $119=HEAP[$118]; //@line 869 "parsermodule.c"
        var $120=($119)==0; //@line 869 "parsermodule.c"
        if ($120) { __label__ = 28; break; } else { __label__ = 32; break; } //@line 869 "parsermodule.c"
      case 28: // $bb28
        var $121=$tuple_addr; //@line 869 "parsermodule.c"
        var $122=$121+4; //@line 869 "parsermodule.c"
        var $123=HEAP[$122]; //@line 869 "parsermodule.c"
        var $124=$123+24; //@line 869 "parsermodule.c"
        var $125=HEAP[$124]; //@line 869 "parsermodule.c"
        var $126=$tuple_addr; //@line 869 "parsermodule.c"
        FUNCTION_TABLE[$125]($126); //@line 869 "parsermodule.c"
        __label__ = 32; break; //@line 869 "parsermodule.c"
      case 29: // $bb30
        var $127=$tuple_addr; //@line 879 "parsermodule.c"
        var $128=_Py_BuildValue(__str40, allocate([$127,0,0,0,__str48,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 879 "parsermodule.c"
        $err=$128; //@line 879 "parsermodule.c"
        var $129=HEAP[_parser_error]; //@line 880 "parsermodule.c"
        var $130=$err; //@line 880 "parsermodule.c"
        _PyErr_SetObject($129, $130); //@line 880 "parsermodule.c"
        var $131=$err; //@line 881 "parsermodule.c"
        var $132=($131)!=0; //@line 881 "parsermodule.c"
        if ($132) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 881 "parsermodule.c"
      case 30: // $bb31
        var $133=$err; //@line 881 "parsermodule.c"
        var $134=$133; //@line 881 "parsermodule.c"
        var $135=HEAP[$134]; //@line 881 "parsermodule.c"
        var $136=($135) - 1; //@line 881 "parsermodule.c"
        var $137=$err; //@line 881 "parsermodule.c"
        var $138=$137; //@line 881 "parsermodule.c"
        HEAP[$138]=$136; //@line 881 "parsermodule.c"
        var $139=$err; //@line 881 "parsermodule.c"
        var $140=$139; //@line 881 "parsermodule.c"
        var $141=HEAP[$140]; //@line 881 "parsermodule.c"
        var $142=($141)==0; //@line 881 "parsermodule.c"
        if ($142) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 881 "parsermodule.c"
      case 31: // $bb32
        var $143=$err; //@line 881 "parsermodule.c"
        var $144=$143+4; //@line 881 "parsermodule.c"
        var $145=HEAP[$144]; //@line 881 "parsermodule.c"
        var $146=$145+24; //@line 881 "parsermodule.c"
        var $147=HEAP[$146]; //@line 881 "parsermodule.c"
        var $148=$err; //@line 881 "parsermodule.c"
        FUNCTION_TABLE[$147]($148); //@line 881 "parsermodule.c"
        __label__ = 32; break; //@line 881 "parsermodule.c"
      case 32: // $bb33
        var $149=$res; //@line 884 "parsermodule.c"
        $0=$149; //@line 884 "parsermodule.c"
        var $150=$0; //@line 884 "parsermodule.c"
        $retval=$150; //@line 884 "parsermodule.c"
        var $retval34=$retval; //@line 884 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval34; //@line 884 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_ntype($n, $t) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr;
        var $t_addr;
        var $retval;
        var $0;
        $n_addr=$n;
        $t_addr=$t;
        var $1=$n_addr; //@line 956 "parsermodule.c"
        var $2=$1; //@line 956 "parsermodule.c"
        var $3=HEAP[$2]; //@line 956 "parsermodule.c"
        var $4=($3); //@line 956 "parsermodule.c"
        var $5=$t_addr; //@line 956 "parsermodule.c"
        var $6=($4)!=($5); //@line 956 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $bb
        var $7=$n_addr; //@line 957 "parsermodule.c"
        var $8=$7; //@line 957 "parsermodule.c"
        var $9=HEAP[$8]; //@line 957 "parsermodule.c"
        var $10=($9); //@line 957 "parsermodule.c"
        var $11=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $12=$t_addr; //@line 957 "parsermodule.c"
        var $13=_PyErr_Format($11, __str49, allocate([$12,0,0,0,$10,0,0,0], ["i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        __label__ = 3; break; //@line 959 "parsermodule.c"
      case 2: // $bb1
        $0=1; //@line 961 "parsermodule.c"
        __label__ = 3; break; //@line 961 "parsermodule.c"
      case 3: // $bb2
        var $14=$0; //@line 959 "parsermodule.c"
        $retval=$14; //@line 959 "parsermodule.c"
        var $retval3=$retval; //@line 959 "parsermodule.c"
        ;
        return $retval3; //@line 959 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_numnodes($n, $num, $name) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr;
        var $num_addr;
        var $name_addr;
        var $retval;
        var $0;
        $n_addr=$n;
        $num_addr=$num;
        $name_addr=$name;
        var $1=$n_addr; //@line 975 "parsermodule.c"
        var $2=$1+16; //@line 975 "parsermodule.c"
        var $3=HEAP[$2]; //@line 975 "parsermodule.c"
        var $4=$num_addr; //@line 975 "parsermodule.c"
        var $5=($3)!=($4); //@line 975 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 975 "parsermodule.c"
      case 1: // $bb
        var $6=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $7=$name_addr; //@line 976 "parsermodule.c"
        var $8=_PyErr_Format($6, __str50, allocate([$7,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 3; break; //@line 978 "parsermodule.c"
      case 2: // $bb1
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 3; break; //@line 980 "parsermodule.c"
      case 3: // $bb2
        var $9=$0; //@line 978 "parsermodule.c"
        $retval=$9; //@line 978 "parsermodule.c"
        var $retval3=$retval; //@line 978 "parsermodule.c"
        ;
        return $retval3; //@line 978 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_terminal($terminal, $type, $string) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $terminal_addr;
        var $type_addr;
        var $string_addr;
        var $retval;
        var $0;
        var $iftmp_62;
        var $res;
        $terminal_addr=$terminal;
        $type_addr=$type;
        $string_addr=$string;
        var $1=$terminal_addr; //@line 988 "parsermodule.c"
        var $2=$type_addr; //@line 988 "parsermodule.c"
        var $3=_validate_ntype($1, $2); //@line 988 "parsermodule.c"
        var $4=($3)==0; //@line 988 "parsermodule.c"
        if ($4) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 988 "parsermodule.c"
      case 1: // $bb
        var $5=$string_addr; //@line 988 "parsermodule.c"
        var $6=($5)==0; //@line 988 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 988 "parsermodule.c"
      case 2: // $bb1
        var $7=$terminal_addr; //@line 988 "parsermodule.c"
        var $8=$7+4; //@line 988 "parsermodule.c"
        var $9=HEAP[$8]; //@line 988 "parsermodule.c"
        var $10=$string_addr; //@line 988 "parsermodule.c"
        var $11=_strcmp($10, $9); //@line 988 "parsermodule.c"
        var $12=($11)==0; //@line 988 "parsermodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 988 "parsermodule.c"
      case 3: // $bb4
        $iftmp_62=1; //@line 988 "parsermodule.c"
        $res=1; //@line 988 "parsermodule.c"
        __label__ = 6; break;
      case 4: // $bb5
        $iftmp_62=0; //@line 988 "parsermodule.c"
        $res=0; //@line 988 "parsermodule.c"
        var $13=_PyErr_Occurred(); //@line 990 "parsermodule.c"
        var $14=($13)==0; //@line 990 "parsermodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 990 "parsermodule.c"
      case 5: // $bb6
        var $15=HEAP[_parser_error]; //@line 991 "parsermodule.c"
        var $16=$string_addr; //@line 991 "parsermodule.c"
        var $17=_PyErr_Format($15, __str51, allocate([$16,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 991 "parsermodule.c"
        __label__ = 6; break; //@line 991 "parsermodule.c"
      case 6: // $bb7
        var $18=$res; //@line 994 "parsermodule.c"
        $0=$18; //@line 994 "parsermodule.c"
        var $19=$0; //@line 994 "parsermodule.c"
        $retval=$19; //@line 994 "parsermodule.c"
        var $retval8=$retval; //@line 994 "parsermodule.c"
        ;
        return $retval8; //@line 994 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_repeating_list($tree, $ntype, $vfunc, $name) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $ntype_addr;
        var $vfunc_addr;
        var $name_addr;
        var $retval;
        var $0;
        var $iftmp_65;
        var $iftmp_64;
        var $nch;
        var $res;
        var $pos;
        $tree_addr=$tree;
        $ntype_addr=$ntype;
        $vfunc_addr=$vfunc;
        $name_addr=$name;
        var $1=$tree_addr; //@line 1004 "parsermodule.c"
        var $2=$1+16; //@line 1004 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1004 "parsermodule.c"
        $nch=$3; //@line 1004 "parsermodule.c"
        var $4=$nch; //@line 1006 "parsermodule.c"
        var $5=($4)==0; //@line 1006 "parsermodule.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1006 "parsermodule.c"
      case 1: // $bb
        var $6=$tree_addr; //@line 1006 "parsermodule.c"
        var $7=$ntype_addr; //@line 1006 "parsermodule.c"
        var $8=_validate_ntype($6, $7); //@line 1006 "parsermodule.c"
        var $9=($8)==0; //@line 1006 "parsermodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1006 "parsermodule.c"
      case 2: // $bb1
        var $10=$tree_addr; //@line 1006 "parsermodule.c"
        var $11=$10+20; //@line 1006 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1006 "parsermodule.c"
        var $13=$12; //@line 1006 "parsermodule.c"
        var $14=$vfunc_addr; //@line 1006 "parsermodule.c"
        var $15=FUNCTION_TABLE[$14]($13); //@line 1006 "parsermodule.c"
        var $16=($15)==0; //@line 1006 "parsermodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1006 "parsermodule.c"
      case 3: // $bb4_thread
        $iftmp_64=1; //@line 1006 "parsermodule.c"
        $res=1; //@line 1006 "parsermodule.c"
        __label__ = 6; break;
      case 4: // $bb5
        $iftmp_64=0; //@line 1006 "parsermodule.c"
        $res=0; //@line 1006 "parsermodule.c"
        var $17=_PyErr_Occurred(); //@line 1008 "parsermodule.c"
        var $18=($17)!=0; //@line 1008 "parsermodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 1008 "parsermodule.c"
      case 5: // $bb6
        var $19=$tree_addr; //@line 1009 "parsermodule.c"
        var $20=$name_addr; //@line 1009 "parsermodule.c"
        var $21=_validate_numnodes($19, 1, $20); //@line 1009 "parsermodule.c"
        __label__ = 19; break; //@line 1009 "parsermodule.c"
      case 6: // $bb7
        var $22=$nch; //@line 1011 "parsermodule.c"
        var $23=($22) & 1; //@line 1011 "parsermodule.c"
        var $24=($23)==0; //@line 1011 "parsermodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1011 "parsermodule.c"
      case 7: // $bb8
        var $25=$tree_addr; //@line 1012 "parsermodule.c"
        var $26=$25+20; //@line 1012 "parsermodule.c"
        var $27=HEAP[$26]; //@line 1012 "parsermodule.c"
        var $28=$nch; //@line 1012 "parsermodule.c"
        var $29=($28) - 1; //@line 1012 "parsermodule.c"
        $nch=$29; //@line 1012 "parsermodule.c"
        var $30=$nch; //@line 1012 "parsermodule.c"
        var $31=$27+24*$30; //@line 1012 "parsermodule.c"
        var $32=_validate_terminal($31, 12, __str52); //@line 1012 "parsermodule.c"
        $res=$32; //@line 1012 "parsermodule.c"
        __lastLabel__ = 7; __label__ = 9; break; //@line 1012 "parsermodule.c"
      case 8: // $bb9thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 8; __label__ = 9; break;
      case 9: // $bb9
        var $33=__lastLabel__ == 8 ? $_pr : ($32);
        var $34=($33)!=0; //@line 1013 "parsermodule.c"
        if ($34) { __label__ = 10; break; } else { __label__ = 19; break; } //@line 1013 "parsermodule.c"
      case 10: // $bb10
        var $35=$nch; //@line 1013 "parsermodule.c"
        var $36=($35) > 1; //@line 1013 "parsermodule.c"
        if ($36) { __label__ = 11; break; } else { __label__ = 19; break; } //@line 1013 "parsermodule.c"
      case 11: // $bb11
        $pos=1; //@line 1014 "parsermodule.c"
        var $_pr1=$res;
        __lastLabel__ = 11; __label__ = 17; break; //@line 1014 "parsermodule.c"
      case 12: // $bb12
        var $37=$tree_addr; //@line 1016 "parsermodule.c"
        var $38=$37+20; //@line 1016 "parsermodule.c"
        var $39=HEAP[$38]; //@line 1016 "parsermodule.c"
        var $40=$pos; //@line 1016 "parsermodule.c"
        var $41=$39+24*$40; //@line 1016 "parsermodule.c"
        var $42=_validate_terminal($41, 12, __str52); //@line 1016 "parsermodule.c"
        var $43=($42)==0; //@line 1016 "parsermodule.c"
        if ($43) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 1016 "parsermodule.c"
      case 13: // $bb13
        var $44=$tree_addr; //@line 1016 "parsermodule.c"
        var $45=$44+20; //@line 1016 "parsermodule.c"
        var $46=HEAP[$45]; //@line 1016 "parsermodule.c"
        var $47=$pos; //@line 1016 "parsermodule.c"
        var $48=($47) + 1; //@line 1016 "parsermodule.c"
        var $49=$46+24*$48; //@line 1016 "parsermodule.c"
        var $50=$vfunc_addr; //@line 1016 "parsermodule.c"
        var $51=FUNCTION_TABLE[$50]($49); //@line 1016 "parsermodule.c"
        var $52=($51)==0; //@line 1016 "parsermodule.c"
        if ($52) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 1016 "parsermodule.c"
      case 14: // $bb14
        $iftmp_65=1; //@line 1016 "parsermodule.c"
        __label__ = 16; break; //@line 1016 "parsermodule.c"
      case 15: // $bb15
        $iftmp_65=0; //@line 1016 "parsermodule.c"
        __label__ = 16; break; //@line 1016 "parsermodule.c"
      case 16: // $bb16
        var $53=$iftmp_65; //@line 1016 "parsermodule.c"
        $res=$53; //@line 1016 "parsermodule.c"
        var $54=$pos; //@line 1015 "parsermodule.c"
        var $55=($54) + 2; //@line 1015 "parsermodule.c"
        $pos=$55; //@line 1015 "parsermodule.c"
        __lastLabel__ = 16; __label__ = 17; break; //@line 1015 "parsermodule.c"
      case 17: // $bb17
        var $56=__lastLabel__ == 16 ? $53 : ($_pr1);
        var $57=($56)==0; //@line 1015 "parsermodule.c"
        if ($57) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 1015 "parsermodule.c"
      case 18: // $bb18
        var $58=$pos; //@line 1015 "parsermodule.c"
        var $59=$nch; //@line 1015 "parsermodule.c"
        var $60=($58) < ($59); //@line 1015 "parsermodule.c"
        if ($60) { __label__ = 12; break; } else { __label__ = 19; break; } //@line 1015 "parsermodule.c"
      case 19: // $bb19
        var $61=$res; //@line 1020 "parsermodule.c"
        $0=$61; //@line 1020 "parsermodule.c"
        var $62=$0; //@line 1020 "parsermodule.c"
        $retval=$62; //@line 1020 "parsermodule.c"
        var $retval20=$retval; //@line 1020 "parsermodule.c"
        ;
        return $retval20; //@line 1020 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_class($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_69;
        var $iftmp_68;
        var $iftmp_67;
        var $iftmp_66;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1032 "parsermodule.c"
        var $2=$1+16; //@line 1032 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1032 "parsermodule.c"
        $nch=$3; //@line 1032 "parsermodule.c"
        var $4=$tree_addr; //@line 1034 "parsermodule.c"
        var $5=_validate_ntype($4, 329); //@line 1034 "parsermodule.c"
        var $6=($5)==0; //@line 1034 "parsermodule.c"
        if ($6) { __label__ = 9; break; } else { __label__ = 1; break; } //@line 1034 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1034 "parsermodule.c"
        var $8=($7)==4; //@line 1034 "parsermodule.c"
        var $9=$nch; //@line 1034 "parsermodule.c"
        var $10=($9)==6; //@line 1034 "parsermodule.c"
        var $or_cond=($8) | ($10);
        var $11=$nch; //@line 1034 "parsermodule.c"
        var $12=($11)==7; //@line 1034 "parsermodule.c"
        var $or_cond3=($or_cond) | ($12);
        if ($or_cond3) { __label__ = 2; break; } else { __label__ = 9; break; } //@line 1034 "parsermodule.c"
      case 2: // $bb6
        $iftmp_66=1; //@line 1034 "parsermodule.c"
        $res=1; //@line 1034 "parsermodule.c"
        var $13=$tree_addr; //@line 1037 "parsermodule.c"
        var $14=$13+20; //@line 1037 "parsermodule.c"
        var $15=HEAP[$14]; //@line 1037 "parsermodule.c"
        var $16=$15; //@line 1037 "parsermodule.c"
        var $17=_validate_terminal($16, 1, __str53); //@line 1037 "parsermodule.c"
        var $18=($17)==0; //@line 1037 "parsermodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 3; break; } //@line 1037 "parsermodule.c"
      case 3: // $bb7
        var $19=$tree_addr; //@line 1037 "parsermodule.c"
        var $20=$19+20; //@line 1037 "parsermodule.c"
        var $21=HEAP[$20]; //@line 1037 "parsermodule.c"
        var $22=$21+24; //@line 1037 "parsermodule.c"
        var $23=_validate_ntype($22, 1); //@line 1037 "parsermodule.c"
        var $24=($23)==0; //@line 1037 "parsermodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 4; break; } //@line 1037 "parsermodule.c"
      case 4: // $bb8
        var $25=$tree_addr; //@line 1037 "parsermodule.c"
        var $26=$25+20; //@line 1037 "parsermodule.c"
        var $27=HEAP[$26]; //@line 1037 "parsermodule.c"
        var $28=$nch; //@line 1037 "parsermodule.c"
        var $29=($28) - 2; //@line 1037 "parsermodule.c"
        var $30=$27+24*$29; //@line 1037 "parsermodule.c"
        var $31=_validate_terminal($30, 11, __str54); //@line 1037 "parsermodule.c"
        var $32=($31)==0; //@line 1037 "parsermodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 1037 "parsermodule.c"
      case 5: // $bb9
        var $33=$tree_addr; //@line 1037 "parsermodule.c"
        var $34=$33+20; //@line 1037 "parsermodule.c"
        var $35=HEAP[$34]; //@line 1037 "parsermodule.c"
        var $36=$nch; //@line 1037 "parsermodule.c"
        var $37=($36) - 1; //@line 1037 "parsermodule.c"
        var $38=$35+24*$37; //@line 1037 "parsermodule.c"
        var $39=_validate_suite($38); //@line 1037 "parsermodule.c"
        var $40=($39)==0; //@line 1037 "parsermodule.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1037 "parsermodule.c"
      case 6: // $bb10
        $iftmp_67=1; //@line 1037 "parsermodule.c"
        __label__ = 8; break; //@line 1037 "parsermodule.c"
      case 7: // $bb11
        $iftmp_67=0; //@line 1037 "parsermodule.c"
        __label__ = 8; break; //@line 1037 "parsermodule.c"
      case 8: // $bb12
        var $41=$iftmp_67; //@line 1037 "parsermodule.c"
        $res=$41; //@line 1037 "parsermodule.c"
        __lastLabel__ = 8; __label__ = 10; break; //@line 1037 "parsermodule.c"
      case 9: // $bb13
        $iftmp_66=0; //@line 1034 "parsermodule.c"
        $res=0; //@line 1034 "parsermodule.c"
        var $42=$tree_addr; //@line 1037 "parsermodule.c"
        var $43=_validate_numnodes($42, 4, __str53); //@line 1043 "parsermodule.c"
        var $_pr=$res;
        __lastLabel__ = 9; __label__ = 10; break; //@line 1043 "parsermodule.c"
      case 10: // $bb14
        var $44=__lastLabel__ == 9 ? $_pr : ($41);
        var $45=($44)!=0; //@line 1046 "parsermodule.c"
        if ($45) { __label__ = 11; break; } else { __label__ = 24; break; } //@line 1046 "parsermodule.c"
      case 11: // $bb15
        var $46=$nch; //@line 1047 "parsermodule.c"
        var $47=($46)==7; //@line 1047 "parsermodule.c"
        if ($47) { __label__ = 12; break; } else { __label__ = 18; break; } //@line 1047 "parsermodule.c"
      case 12: // $bb16
        var $48=$tree_addr; //@line 1048 "parsermodule.c"
        var $49=$48+20; //@line 1048 "parsermodule.c"
        var $50=HEAP[$49]; //@line 1048 "parsermodule.c"
        var $51=$50+48; //@line 1048 "parsermodule.c"
        var $52=_validate_terminal($51, 7, __str55); //@line 1048 "parsermodule.c"
        var $53=($52)==0; //@line 1048 "parsermodule.c"
        if ($53) { __label__ = 16; break; } else { __label__ = 13; break; } //@line 1048 "parsermodule.c"
      case 13: // $bb17
        var $54=$tree_addr; //@line 1048 "parsermodule.c"
        var $55=$54+20; //@line 1048 "parsermodule.c"
        var $56=HEAP[$55]; //@line 1048 "parsermodule.c"
        var $57=$56+72; //@line 1048 "parsermodule.c"
        var $58=_validate_testlist($57); //@line 1048 "parsermodule.c"
        var $59=($58)==0; //@line 1048 "parsermodule.c"
        if ($59) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 1048 "parsermodule.c"
      case 14: // $bb18
        var $60=$tree_addr; //@line 1048 "parsermodule.c"
        var $61=$60+20; //@line 1048 "parsermodule.c"
        var $62=HEAP[$61]; //@line 1048 "parsermodule.c"
        var $63=$62+96; //@line 1048 "parsermodule.c"
        var $64=_validate_terminal($63, 8, __str56); //@line 1048 "parsermodule.c"
        var $65=($64)==0; //@line 1048 "parsermodule.c"
        if ($65) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 1048 "parsermodule.c"
      case 15: // $bb19
        $iftmp_68=1; //@line 1048 "parsermodule.c"
        __label__ = 17; break; //@line 1048 "parsermodule.c"
      case 16: // $bb20
        $iftmp_68=0; //@line 1048 "parsermodule.c"
        __label__ = 17; break; //@line 1048 "parsermodule.c"
      case 17: // $bb21
        var $66=$iftmp_68; //@line 1048 "parsermodule.c"
        $res=$66; //@line 1048 "parsermodule.c"
        __label__ = 24; break; //@line 1048 "parsermodule.c"
      case 18: // $bb22
        var $67=$nch; //@line 1052 "parsermodule.c"
        var $68=($67)==6; //@line 1052 "parsermodule.c"
        if ($68) { __label__ = 19; break; } else { __label__ = 24; break; } //@line 1052 "parsermodule.c"
      case 19: // $bb23
        var $69=$tree_addr; //@line 1053 "parsermodule.c"
        var $70=$69+20; //@line 1053 "parsermodule.c"
        var $71=HEAP[$70]; //@line 1053 "parsermodule.c"
        var $72=$71+48; //@line 1053 "parsermodule.c"
        var $73=_validate_terminal($72, 7, __str55); //@line 1053 "parsermodule.c"
        var $74=($73)==0; //@line 1053 "parsermodule.c"
        if ($74) { __label__ = 22; break; } else { __label__ = 20; break; } //@line 1053 "parsermodule.c"
      case 20: // $bb24
        var $75=$tree_addr; //@line 1053 "parsermodule.c"
        var $76=$75+20; //@line 1053 "parsermodule.c"
        var $77=HEAP[$76]; //@line 1053 "parsermodule.c"
        var $78=$77+72; //@line 1053 "parsermodule.c"
        var $79=_validate_terminal($78, 8, __str56); //@line 1053 "parsermodule.c"
        var $80=($79)==0; //@line 1053 "parsermodule.c"
        if ($80) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1053 "parsermodule.c"
      case 21: // $bb25
        $iftmp_69=1; //@line 1053 "parsermodule.c"
        __label__ = 23; break; //@line 1053 "parsermodule.c"
      case 22: // $bb26
        $iftmp_69=0; //@line 1053 "parsermodule.c"
        __label__ = 23; break; //@line 1053 "parsermodule.c"
      case 23: // $bb27
        var $81=$iftmp_69; //@line 1053 "parsermodule.c"
        $res=$81; //@line 1053 "parsermodule.c"
        __label__ = 24; break; //@line 1053 "parsermodule.c"
      case 24: // $bb28
        var $82=$res; //@line 1057 "parsermodule.c"
        $0=$82; //@line 1057 "parsermodule.c"
        var $83=$0; //@line 1057 "parsermodule.c"
        $retval=$83; //@line 1057 "parsermodule.c"
        var $retval29=$retval; //@line 1057 "parsermodule.c"
        ;
        return $retval29; //@line 1057 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_if($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_73;
        var $iftmp_71;
        var $iftmp_70;
        var $nch;
        var $res;
        var $j;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1067 "parsermodule.c"
        var $2=$1+16; //@line 1067 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1067 "parsermodule.c"
        $nch=$3; //@line 1067 "parsermodule.c"
        var $4=$tree_addr; //@line 1073 "parsermodule.c"
        var $5=_validate_ntype($4, 293); //@line 1073 "parsermodule.c"
        var $6=($5)==0; //@line 1073 "parsermodule.c"
        if ($6) { __label__ = 13; break; } else { __label__ = 1; break; } //@line 1073 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1073 "parsermodule.c"
        var $8=($7) <= 3; //@line 1073 "parsermodule.c"
        if ($8) { __label__ = 13; break; } else { __label__ = 2; break; } //@line 1073 "parsermodule.c"
      case 2: // $bb1
        var $9=$tree_addr; //@line 1073 "parsermodule.c"
        var $10=$9+20; //@line 1073 "parsermodule.c"
        var $11=HEAP[$10]; //@line 1073 "parsermodule.c"
        var $12=$11; //@line 1073 "parsermodule.c"
        var $13=_validate_terminal($12, 1, __str57); //@line 1073 "parsermodule.c"
        var $14=($13)==0; //@line 1073 "parsermodule.c"
        if ($14) { __label__ = 13; break; } else { __label__ = 3; break; } //@line 1073 "parsermodule.c"
      case 3: // $bb2
        var $15=$tree_addr; //@line 1073 "parsermodule.c"
        var $16=$15+20; //@line 1073 "parsermodule.c"
        var $17=HEAP[$16]; //@line 1073 "parsermodule.c"
        var $18=$17+24; //@line 1073 "parsermodule.c"
        var $19=_validate_test($18); //@line 1073 "parsermodule.c"
        var $20=($19)==0; //@line 1073 "parsermodule.c"
        if ($20) { __label__ = 13; break; } else { __label__ = 4; break; } //@line 1073 "parsermodule.c"
      case 4: // $bb3
        var $21=$tree_addr; //@line 1073 "parsermodule.c"
        var $22=$21+20; //@line 1073 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1073 "parsermodule.c"
        var $24=$23+48; //@line 1073 "parsermodule.c"
        var $25=_validate_terminal($24, 11, __str54); //@line 1073 "parsermodule.c"
        var $26=($25)==0; //@line 1073 "parsermodule.c"
        if ($26) { __label__ = 13; break; } else { __label__ = 5; break; } //@line 1073 "parsermodule.c"
      case 5: // $bb4
        var $27=$tree_addr; //@line 1073 "parsermodule.c"
        var $28=$27+20; //@line 1073 "parsermodule.c"
        var $29=HEAP[$28]; //@line 1073 "parsermodule.c"
        var $30=$29+72; //@line 1073 "parsermodule.c"
        var $31=_validate_suite($30); //@line 1073 "parsermodule.c"
        var $32=($31)==0; //@line 1073 "parsermodule.c"
        if ($32) { __label__ = 13; break; } else { __label__ = 6; break; } //@line 1073 "parsermodule.c"
      case 6: // $bb8
        $iftmp_70=1; //@line 1073 "parsermodule.c"
        $res=1; //@line 1073 "parsermodule.c"
        var $33=$nch; //@line 1075 "parsermodule.c"
        var $34=($33) % 4; //@line 1075 "parsermodule.c"
        var $35=($34)!=3; //@line 1075 "parsermodule.c"
        if ($35) { __label__ = 15; break; } else { __label__ = 7; break; } //@line 1075 "parsermodule.c"
      case 7: // $bb9
        var $36=$tree_addr; //@line 1077 "parsermodule.c"
        var $37=$36+20; //@line 1077 "parsermodule.c"
        var $38=HEAP[$37]; //@line 1077 "parsermodule.c"
        var $39=$nch; //@line 1077 "parsermodule.c"
        var $40=($39) - 3; //@line 1077 "parsermodule.c"
        var $41=$38+24*$40; //@line 1077 "parsermodule.c"
        var $42=_validate_terminal($41, 1, __str58); //@line 1077 "parsermodule.c"
        var $43=($42)==0; //@line 1077 "parsermodule.c"
        if ($43) { __label__ = 11; break; } else { __label__ = 8; break; } //@line 1077 "parsermodule.c"
      case 8: // $bb10
        var $44=$tree_addr; //@line 1077 "parsermodule.c"
        var $45=$44+20; //@line 1077 "parsermodule.c"
        var $46=HEAP[$45]; //@line 1077 "parsermodule.c"
        var $47=$nch; //@line 1077 "parsermodule.c"
        var $48=($47) - 2; //@line 1077 "parsermodule.c"
        var $49=$46+24*$48; //@line 1077 "parsermodule.c"
        var $50=_validate_terminal($49, 11, __str54); //@line 1077 "parsermodule.c"
        var $51=($50)==0; //@line 1077 "parsermodule.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 1077 "parsermodule.c"
      case 9: // $bb11
        var $52=$tree_addr; //@line 1077 "parsermodule.c"
        var $53=$52+20; //@line 1077 "parsermodule.c"
        var $54=HEAP[$53]; //@line 1077 "parsermodule.c"
        var $55=$nch; //@line 1077 "parsermodule.c"
        var $56=($55) - 1; //@line 1077 "parsermodule.c"
        var $57=$54+24*$56; //@line 1077 "parsermodule.c"
        var $58=_validate_suite($57); //@line 1077 "parsermodule.c"
        var $59=($58)==0; //@line 1077 "parsermodule.c"
        if ($59) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1077 "parsermodule.c"
      case 10: // $bb12
        $iftmp_71=1; //@line 1077 "parsermodule.c"
        __label__ = 12; break; //@line 1077 "parsermodule.c"
      case 11: // $bb13
        $iftmp_71=0; //@line 1077 "parsermodule.c"
        __label__ = 12; break; //@line 1077 "parsermodule.c"
      case 12: // $bb14
        var $60=$iftmp_71; //@line 1077 "parsermodule.c"
        $res=$60; //@line 1077 "parsermodule.c"
        var $61=$nch; //@line 1080 "parsermodule.c"
        var $62=($61) - 3; //@line 1080 "parsermodule.c"
        $nch=$62; //@line 1080 "parsermodule.c"
        __label__ = 15; break; //@line 1080 "parsermodule.c"
      case 13: // $bb16
        $iftmp_70=0; //@line 1073 "parsermodule.c"
        $res=0; //@line 1073 "parsermodule.c"
        var $63=_PyErr_Occurred(); //@line 1082 "parsermodule.c"
        var $64=($63)==0; //@line 1082 "parsermodule.c"
        if ($64) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1082 "parsermodule.c"
      case 14: // $bb17
        var $65=$tree_addr; //@line 1083 "parsermodule.c"
        var $66=_validate_numnodes($65, 4, __str57); //@line 1083 "parsermodule.c"
        __label__ = 15; break; //@line 1083 "parsermodule.c"
      case 15: // $bb18
        var $67=$nch; //@line 1084 "parsermodule.c"
        var $68=($67) & 3; //@line 1084 "parsermodule.c"
        var $69=($68)!=0; //@line 1084 "parsermodule.c"
        if ($69) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1084 "parsermodule.c"
      case 16: // $bb19
        var $70=$tree_addr; //@line 1086 "parsermodule.c"
        var $71=_validate_numnodes($70, 0, __str57); //@line 1086 "parsermodule.c"
        $res=$71; //@line 1086 "parsermodule.c"
        __label__ = 29; break; //@line 1086 "parsermodule.c"
      case 17: // $bb20
        var $72=$res; //@line 1087 "parsermodule.c"
        var $73=($72)!=0; //@line 1087 "parsermodule.c"
        if ($73) { __label__ = 18; break; } else { __label__ = 29; break; } //@line 1087 "parsermodule.c"
      case 18: // $bb21
        var $74=$nch; //@line 1087 "parsermodule.c"
        var $75=($74) > 4; //@line 1087 "parsermodule.c"
        if ($75) { __label__ = 19; break; } else { __label__ = 29; break; } //@line 1087 "parsermodule.c"
      case 19: // $bb22
        $j=4; //@line 1089 "parsermodule.c"
        __label__ = 27; break; //@line 1089 "parsermodule.c"
      case 20: // $bb23
        var $76=$tree_addr; //@line 1091 "parsermodule.c"
        var $77=$76+20; //@line 1091 "parsermodule.c"
        var $78=HEAP[$77]; //@line 1091 "parsermodule.c"
        var $79=$j; //@line 1091 "parsermodule.c"
        var $80=$78+24*$79; //@line 1091 "parsermodule.c"
        var $81=_validate_terminal($80, 1, __str59); //@line 1091 "parsermodule.c"
        var $82=($81)==0; //@line 1091 "parsermodule.c"
        if ($82) { __label__ = 25; break; } else { __label__ = 21; break; } //@line 1091 "parsermodule.c"
      case 21: // $bb24
        var $83=$tree_addr; //@line 1091 "parsermodule.c"
        var $84=$83+20; //@line 1091 "parsermodule.c"
        var $85=HEAP[$84]; //@line 1091 "parsermodule.c"
        var $86=$j; //@line 1091 "parsermodule.c"
        var $87=($86) + 2; //@line 1091 "parsermodule.c"
        var $88=$85+24*$87; //@line 1091 "parsermodule.c"
        var $89=_validate_terminal($88, 11, __str54); //@line 1091 "parsermodule.c"
        var $90=($89)==0; //@line 1091 "parsermodule.c"
        if ($90) { __label__ = 25; break; } else { __label__ = 22; break; } //@line 1091 "parsermodule.c"
      case 22: // $bb25
        var $91=$tree_addr; //@line 1091 "parsermodule.c"
        var $92=$91+20; //@line 1091 "parsermodule.c"
        var $93=HEAP[$92]; //@line 1091 "parsermodule.c"
        var $94=$j; //@line 1091 "parsermodule.c"
        var $95=($94) + 1; //@line 1091 "parsermodule.c"
        var $96=$93+24*$95; //@line 1091 "parsermodule.c"
        var $97=_validate_test($96); //@line 1091 "parsermodule.c"
        var $98=($97)==0; //@line 1091 "parsermodule.c"
        if ($98) { __label__ = 25; break; } else { __label__ = 23; break; } //@line 1091 "parsermodule.c"
      case 23: // $bb26
        var $99=$tree_addr; //@line 1091 "parsermodule.c"
        var $100=$99+20; //@line 1091 "parsermodule.c"
        var $101=HEAP[$100]; //@line 1091 "parsermodule.c"
        var $102=$j; //@line 1091 "parsermodule.c"
        var $103=($102) + 3; //@line 1091 "parsermodule.c"
        var $104=$101+24*$103; //@line 1091 "parsermodule.c"
        var $105=_validate_suite($104); //@line 1091 "parsermodule.c"
        var $106=($105)==0; //@line 1091 "parsermodule.c"
        if ($106) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 1091 "parsermodule.c"
      case 24: // $bb27
        $iftmp_73=1; //@line 1091 "parsermodule.c"
        __label__ = 26; break; //@line 1091 "parsermodule.c"
      case 25: // $bb28
        $iftmp_73=0; //@line 1091 "parsermodule.c"
        __label__ = 26; break; //@line 1091 "parsermodule.c"
      case 26: // $bb29
        var $107=$iftmp_73; //@line 1091 "parsermodule.c"
        $res=$107; //@line 1091 "parsermodule.c"
        var $108=$j; //@line 1095 "parsermodule.c"
        var $109=($108) + 4; //@line 1095 "parsermodule.c"
        $j=$109; //@line 1095 "parsermodule.c"
        __label__ = 27; break; //@line 1095 "parsermodule.c"
      case 27: // $bb30
        var $110=$j; //@line 1090 "parsermodule.c"
        var $111=$nch; //@line 1090 "parsermodule.c"
        var $112=($110) >= ($111); //@line 1090 "parsermodule.c"
        if ($112) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 1090 "parsermodule.c"
      case 28: // $bb31
        var $113=$res; //@line 1090 "parsermodule.c"
        var $114=($113)!=0; //@line 1090 "parsermodule.c"
        if ($114) { __label__ = 20; break; } else { __label__ = 29; break; } //@line 1090 "parsermodule.c"
      case 29: // $bb32
        var $115=$res; //@line 1098 "parsermodule.c"
        $0=$115; //@line 1098 "parsermodule.c"
        var $116=$0; //@line 1098 "parsermodule.c"
        $retval=$116; //@line 1098 "parsermodule.c"
        var $retval33=$retval; //@line 1098 "parsermodule.c"
        ;
        return $retval33; //@line 1098 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_parameters($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_75;
        var $iftmp_74;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1109 "parsermodule.c"
        var $2=$1+16; //@line 1109 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1109 "parsermodule.c"
        $nch=$3; //@line 1109 "parsermodule.c"
        var $4=$tree_addr; //@line 1110 "parsermodule.c"
        var $5=_validate_ntype($4, 263); //@line 1110 "parsermodule.c"
        var $6=($5)==0; //@line 1110 "parsermodule.c"
        if ($6) { __label__ = 7; break; } else { __label__ = 1; break; } //@line 1110 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1110 "parsermodule.c"
        var $8=($7)==2; //@line 1110 "parsermodule.c"
        var $9=$nch; //@line 1110 "parsermodule.c"
        var $10=($9)==3; //@line 1110 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 1110 "parsermodule.c"
      case 2: // $bb5
        $iftmp_74=1; //@line 1110 "parsermodule.c"
        $res=1; //@line 1110 "parsermodule.c"
        var $11=$tree_addr; //@line 1113 "parsermodule.c"
        var $12=$11+20; //@line 1113 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1113 "parsermodule.c"
        var $14=$13; //@line 1113 "parsermodule.c"
        var $15=_validate_terminal($14, 7, __str55); //@line 1113 "parsermodule.c"
        var $16=($15)==0; //@line 1113 "parsermodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1113 "parsermodule.c"
      case 3: // $bb6
        var $17=$tree_addr; //@line 1113 "parsermodule.c"
        var $18=$17+20; //@line 1113 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1113 "parsermodule.c"
        var $20=$nch; //@line 1113 "parsermodule.c"
        var $21=($20) - 1; //@line 1113 "parsermodule.c"
        var $22=$19+24*$21; //@line 1113 "parsermodule.c"
        var $23=_validate_terminal($22, 8, __str56); //@line 1113 "parsermodule.c"
        var $24=($23)==0; //@line 1113 "parsermodule.c"
        if ($24) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1113 "parsermodule.c"
      case 4: // $bb9
        $iftmp_75=0; //@line 1113 "parsermodule.c"
        $res=0; //@line 1113 "parsermodule.c"
        __label__ = 8; break;
      case 5: // $bb10
        $iftmp_75=1; //@line 1113 "parsermodule.c"
        $res=1; //@line 1113 "parsermodule.c"
        var $25=$nch; //@line 1115 "parsermodule.c"
        var $26=($25)==3; //@line 1115 "parsermodule.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1115 "parsermodule.c"
      case 6: // $bb11
        var $27=$tree_addr; //@line 1116 "parsermodule.c"
        var $28=$27+20; //@line 1116 "parsermodule.c"
        var $29=HEAP[$28]; //@line 1116 "parsermodule.c"
        var $30=$29+24; //@line 1116 "parsermodule.c"
        var $31=_validate_varargslist($30); //@line 1116 "parsermodule.c"
        $res=$31; //@line 1116 "parsermodule.c"
        __label__ = 8; break; //@line 1116 "parsermodule.c"
      case 7: // $bb13
        $iftmp_74=0; //@line 1110 "parsermodule.c"
        $res=0; //@line 1110 "parsermodule.c"
        var $32=$tree_addr; //@line 1113 "parsermodule.c"
        var $33=_validate_numnodes($32, 2, __str60); //@line 1119 "parsermodule.c"
        __label__ = 8; break; //@line 1119 "parsermodule.c"
      case 8: // $bb14
        var $34=$res; //@line 1121 "parsermodule.c"
        $0=$34; //@line 1121 "parsermodule.c"
        var $35=$0; //@line 1121 "parsermodule.c"
        $retval=$35; //@line 1121 "parsermodule.c"
        var $retval15=$retval; //@line 1121 "parsermodule.c"
        ;
        return $retval15; //@line 1121 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_suite($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_77;
        var $iftmp_76;
        var $nch;
        var $res;
        var $i;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1134 "parsermodule.c"
        var $2=$1+16; //@line 1134 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1134 "parsermodule.c"
        $nch=$3; //@line 1134 "parsermodule.c"
        var $4=$tree_addr; //@line 1135 "parsermodule.c"
        var $5=_validate_ntype($4, 300); //@line 1135 "parsermodule.c"
        var $6=($5)==0; //@line 1135 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1135 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1135 "parsermodule.c"
        var $8=($7)==1; //@line 1135 "parsermodule.c"
        var $9=$nch; //@line 1135 "parsermodule.c"
        var $10=($9) > 3; //@line 1135 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 1135 "parsermodule.c"
      case 2: // $bb5
        $iftmp_76=1; //@line 1135 "parsermodule.c"
        $res=1; //@line 1135 "parsermodule.c"
        var $11=$nch; //@line 1137 "parsermodule.c"
        var $12=($11)!=1; //@line 1137 "parsermodule.c"
        var $13=$tree_addr; //@line 1141 "parsermodule.c"
        var $14=$13+20; //@line 1141 "parsermodule.c"
        var $15=HEAP[$14]; //@line 1141 "parsermodule.c"
        var $16=$15; //@line 1141 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1137 "parsermodule.c"
      case 3: // $bb6
        var $17=_validate_simple_stmt($16); //@line 1138 "parsermodule.c"
        $res=$17; //@line 1138 "parsermodule.c"
        __label__ = 17; break; //@line 1138 "parsermodule.c"
      case 4: // $bb7
        $iftmp_76=0; //@line 1135 "parsermodule.c"
        $res=0; //@line 1135 "parsermodule.c"
        __label__ = 17; break;
      case 5: // $bb8
        var $18=_validate_terminal($16, 4, 0); //@line 1141 "parsermodule.c"
        var $19=($18)==0; //@line 1141 "parsermodule.c"
        if ($19) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 1141 "parsermodule.c"
      case 6: // $bb9
        var $20=$tree_addr; //@line 1141 "parsermodule.c"
        var $21=$20+20; //@line 1141 "parsermodule.c"
        var $22=HEAP[$21]; //@line 1141 "parsermodule.c"
        var $23=$22+24; //@line 1141 "parsermodule.c"
        var $24=_validate_terminal($23, 5, 0); //@line 1141 "parsermodule.c"
        var $25=($24)==0; //@line 1141 "parsermodule.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1141 "parsermodule.c"
      case 7: // $bb10
        var $26=$tree_addr; //@line 1141 "parsermodule.c"
        var $27=$26+20; //@line 1141 "parsermodule.c"
        var $28=HEAP[$27]; //@line 1141 "parsermodule.c"
        var $29=$28+48; //@line 1141 "parsermodule.c"
        var $30=_validate_stmt($29); //@line 1141 "parsermodule.c"
        var $31=($30)==0; //@line 1141 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1141 "parsermodule.c"
      case 8: // $bb11
        var $32=$tree_addr; //@line 1141 "parsermodule.c"
        var $33=$32+20; //@line 1141 "parsermodule.c"
        var $34=HEAP[$33]; //@line 1141 "parsermodule.c"
        var $35=$nch; //@line 1141 "parsermodule.c"
        var $36=($35) - 1; //@line 1141 "parsermodule.c"
        var $37=$34+24*$36; //@line 1141 "parsermodule.c"
        var $38=_validate_terminal($37, 6, __str61); //@line 1141 "parsermodule.c"
        var $39=($38)==0; //@line 1141 "parsermodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1141 "parsermodule.c"
      case 9: // $bb14_thread
        $iftmp_77=0; //@line 1141 "parsermodule.c"
        $res=0; //@line 1141 "parsermodule.c"
        var $_pr2=$nch;
        __lastLabel__ = 9; __label__ = 15; break;
      case 10: // $bb15
        $iftmp_77=1; //@line 1141 "parsermodule.c"
        $res=1; //@line 1141 "parsermodule.c"
        var $40=$nch; //@line 1146 "parsermodule.c"
        var $41=($40) <= 4; //@line 1146 "parsermodule.c"
        if ($41) { __lastLabel__ = 10; __label__ = 15; break; } else { __lastLabel__ = 10; __label__ = 11; break; } //@line 1146 "parsermodule.c"
      case 11: // $bb16
        $i=3; //@line 1147 "parsermodule.c"
        var $42=$nch; //@line 1148 "parsermodule.c"
        var $43=($42) - 1; //@line 1148 "parsermodule.c"
        $nch=$43; //@line 1148 "parsermodule.c"
        var $_pr=$res;
        __lastLabel__ = 11; __label__ = 13; break; //@line 1148 "parsermodule.c"
      case 12: // $bb17
        var $44=$tree_addr; //@line 1150 "parsermodule.c"
        var $45=$44+20; //@line 1150 "parsermodule.c"
        var $46=HEAP[$45]; //@line 1150 "parsermodule.c"
        var $47=$i; //@line 1150 "parsermodule.c"
        var $48=$46+24*$47; //@line 1150 "parsermodule.c"
        var $49=_validate_stmt($48); //@line 1150 "parsermodule.c"
        $res=$49; //@line 1150 "parsermodule.c"
        var $50=$i; //@line 1149 "parsermodule.c"
        var $51=($50) + 1; //@line 1149 "parsermodule.c"
        $i=$51; //@line 1149 "parsermodule.c"
        __lastLabel__ = 12; __label__ = 13; break; //@line 1149 "parsermodule.c"
      case 13: // $bb18
        var $52=__lastLabel__ == 12 ? $49 : ($_pr);
        var $53=($52)==0; //@line 1149 "parsermodule.c"
        if ($53) { __label__ = 17; break; } else { __label__ = 14; break; } //@line 1149 "parsermodule.c"
      case 14: // $bb19
        var $54=$i; //@line 1149 "parsermodule.c"
        var $55=$nch; //@line 1149 "parsermodule.c"
        var $56=($54) < ($55); //@line 1149 "parsermodule.c"
        if ($56) { __label__ = 12; break; } else { __label__ = 17; break; } //@line 1149 "parsermodule.c"
      case 15: // $bb21
        var $57=__lastLabel__ == 9 ? $_pr2 : ($40);
        var $58=($57) <= 3; //@line 1152 "parsermodule.c"
        if ($58) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1152 "parsermodule.c"
      case 16: // $bb22
        var $59=$tree_addr; //@line 1153 "parsermodule.c"
        var $60=_validate_numnodes($59, 4, __str62); //@line 1153 "parsermodule.c"
        $res=$60; //@line 1153 "parsermodule.c"
        __label__ = 17; break; //@line 1153 "parsermodule.c"
      case 17: // $bb23
        var $61=$res; //@line 1155 "parsermodule.c"
        $0=$61; //@line 1155 "parsermodule.c"
        var $62=$0; //@line 1155 "parsermodule.c"
        $retval=$62; //@line 1155 "parsermodule.c"
        var $retval24=$retval; //@line 1155 "parsermodule.c"
        ;
        return $retval24; //@line 1155 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_testlist($tree) {
    ;
    var __label__;
  
    var $tree_addr;
    var $retval;
    var $0;
    $tree_addr=$tree;
    var $1=$tree_addr; //@line 1162 "parsermodule.c"
    var $2=_validate_repeating_list($1, 327, (FUNCTION_TABLE_OFFSET + 10), __str63); //@line 1162 "parsermodule.c"
    $0=$2; //@line 1162 "parsermodule.c"
    var $3=$0; //@line 1162 "parsermodule.c"
    $retval=$3; //@line 1162 "parsermodule.c"
    var $retval1=$retval; //@line 1162 "parsermodule.c"
    ;
    return $retval1; //@line 1162 "parsermodule.c"
  }
  

  function _validate_testlist1($tree) {
    ;
    var __label__;
  
    var $tree_addr;
    var $retval;
    var $0;
    $tree_addr=$tree;
    var $1=$tree_addr; //@line 1170 "parsermodule.c"
    var $2=_validate_repeating_list($1, 338, (FUNCTION_TABLE_OFFSET + 10), __str64); //@line 1170 "parsermodule.c"
    $0=$2; //@line 1170 "parsermodule.c"
    var $3=$0; //@line 1170 "parsermodule.c"
    $retval=$3; //@line 1170 "parsermodule.c"
    var $retval1=$retval; //@line 1170 "parsermodule.c"
    ;
    return $retval1; //@line 1170 "parsermodule.c"
  }
  

  function _validate_testlist_safe($tree) {
    ;
    var __label__;
  
    var $tree_addr;
    var $retval;
    var $0;
    $tree_addr=$tree;
    var $1=$tree_addr; //@line 1178 "parsermodule.c"
    var $2=_validate_repeating_list($1, 301, (FUNCTION_TABLE_OFFSET + 12), __str65); //@line 1178 "parsermodule.c"
    $0=$2; //@line 1178 "parsermodule.c"
    var $3=$0; //@line 1178 "parsermodule.c"
    $retval=$3; //@line 1178 "parsermodule.c"
    var $retval1=$retval; //@line 1178 "parsermodule.c"
    ;
    return $retval1; //@line 1178 "parsermodule.c"
  }
  

  function _validate_varargslist_trailer($tree, $start) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $start_addr;
        var $retval;
        var $iftmp_78;
        var $0;
        var $nch;
        var $res;
        var $sym;
        $tree_addr=$tree;
        $start_addr=$start;
        var $1=$tree_addr; //@line 1188 "parsermodule.c"
        var $2=$1+16; //@line 1188 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1188 "parsermodule.c"
        $nch=$3; //@line 1188 "parsermodule.c"
        $res=0; //@line 1189 "parsermodule.c"
        var $4=$nch; //@line 1192 "parsermodule.c"
        var $5=$start_addr; //@line 1192 "parsermodule.c"
        var $6=($4) <= ($5); //@line 1192 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1192 "parsermodule.c"
      case 1: // $bb
        _err_string(__str66); //@line 1193 "parsermodule.c"
        $0=0; //@line 1194 "parsermodule.c"
        __label__ = 20; break; //@line 1194 "parsermodule.c"
      case 2: // $bb1
        var $7=$tree_addr; //@line 1196 "parsermodule.c"
        var $8=$7+20; //@line 1196 "parsermodule.c"
        var $9=HEAP[$8]; //@line 1196 "parsermodule.c"
        var $10=$start_addr; //@line 1196 "parsermodule.c"
        var $11=$9+24*$10; //@line 1196 "parsermodule.c"
        var $12=$11; //@line 1196 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1196 "parsermodule.c"
        var $14=($13); //@line 1196 "parsermodule.c"
        $sym=$14; //@line 1196 "parsermodule.c"
        var $15=$sym; //@line 1197 "parsermodule.c"
        var $16=($15)==16; //@line 1197 "parsermodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 13; break; } //@line 1197 "parsermodule.c"
      case 3: // $bb2
        var $17=$nch; //@line 1201 "parsermodule.c"
        var $18=$start_addr; //@line 1201 "parsermodule.c"
        var $19=($17) - ($18); //@line 1201 "parsermodule.c"
        var $20=($19)==2; //@line 1201 "parsermodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1201 "parsermodule.c"
      case 4: // $bb3
        var $21=$tree_addr; //@line 1202 "parsermodule.c"
        var $22=$21+20; //@line 1202 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1202 "parsermodule.c"
        var $24=$start_addr; //@line 1202 "parsermodule.c"
        var $25=($24) + 1; //@line 1202 "parsermodule.c"
        var $26=$23+24*$25; //@line 1202 "parsermodule.c"
        var $27=_validate_terminal($26, 1, 0); //@line 1202 "parsermodule.c"
        $res=$27; //@line 1202 "parsermodule.c"
        __lastLabel__ = 4; __label__ = 17; break; //@line 1202 "parsermodule.c"
      case 5: // $bb4
        var $28=$nch; //@line 1203 "parsermodule.c"
        var $29=$start_addr; //@line 1203 "parsermodule.c"
        var $30=($28) - ($29); //@line 1203 "parsermodule.c"
        var $31=($30)==5; //@line 1203 "parsermodule.c"
        if ($31) { __label__ = 6; break; } else { __label__ = 16; break; } //@line 1203 "parsermodule.c"
      case 6: // $bb5
        var $32=$tree_addr; //@line 1204 "parsermodule.c"
        var $33=$32+20; //@line 1204 "parsermodule.c"
        var $34=HEAP[$33]; //@line 1204 "parsermodule.c"
        var $35=$start_addr; //@line 1204 "parsermodule.c"
        var $36=($35) + 1; //@line 1204 "parsermodule.c"
        var $37=$34+24*$36; //@line 1204 "parsermodule.c"
        var $38=_validate_terminal($37, 1, 0); //@line 1204 "parsermodule.c"
        var $39=($38)==0; //@line 1204 "parsermodule.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 7; break; } //@line 1204 "parsermodule.c"
      case 7: // $bb6
        var $40=$tree_addr; //@line 1204 "parsermodule.c"
        var $41=$40+20; //@line 1204 "parsermodule.c"
        var $42=HEAP[$41]; //@line 1204 "parsermodule.c"
        var $43=$start_addr; //@line 1204 "parsermodule.c"
        var $44=($43) + 2; //@line 1204 "parsermodule.c"
        var $45=$42+24*$44; //@line 1204 "parsermodule.c"
        var $46=_validate_terminal($45, 12, __str52); //@line 1204 "parsermodule.c"
        var $47=($46)==0; //@line 1204 "parsermodule.c"
        if ($47) { __label__ = 11; break; } else { __label__ = 8; break; } //@line 1204 "parsermodule.c"
      case 8: // $bb7
        var $48=$tree_addr; //@line 1204 "parsermodule.c"
        var $49=$48+20; //@line 1204 "parsermodule.c"
        var $50=HEAP[$49]; //@line 1204 "parsermodule.c"
        var $51=$start_addr; //@line 1204 "parsermodule.c"
        var $52=($51) + 3; //@line 1204 "parsermodule.c"
        var $53=$50+24*$52; //@line 1204 "parsermodule.c"
        var $54=_validate_terminal($53, 36, __str67); //@line 1204 "parsermodule.c"
        var $55=($54)==0; //@line 1204 "parsermodule.c"
        if ($55) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 1204 "parsermodule.c"
      case 9: // $bb8
        var $56=$tree_addr; //@line 1204 "parsermodule.c"
        var $57=$56+20; //@line 1204 "parsermodule.c"
        var $58=HEAP[$57]; //@line 1204 "parsermodule.c"
        var $59=$start_addr; //@line 1204 "parsermodule.c"
        var $60=($59) + 4; //@line 1204 "parsermodule.c"
        var $61=$58+24*$60; //@line 1204 "parsermodule.c"
        var $62=_validate_terminal($61, 1, 0); //@line 1204 "parsermodule.c"
        var $63=($62)==0; //@line 1204 "parsermodule.c"
        if ($63) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1204 "parsermodule.c"
      case 10: // $bb9
        $iftmp_78=1; //@line 1204 "parsermodule.c"
        __label__ = 12; break; //@line 1204 "parsermodule.c"
      case 11: // $bb10
        $iftmp_78=0; //@line 1204 "parsermodule.c"
        __label__ = 12; break; //@line 1204 "parsermodule.c"
      case 12: // $bb11
        var $64=$iftmp_78; //@line 1204 "parsermodule.c"
        $res=$64; //@line 1204 "parsermodule.c"
        __lastLabel__ = 12; __label__ = 17; break; //@line 1204 "parsermodule.c"
      case 13: // $bb13
        var $65=$sym; //@line 1209 "parsermodule.c"
        var $66=($65)==36; //@line 1209 "parsermodule.c"
        if ($66) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 1209 "parsermodule.c"
      case 14: // $bb14
        var $67=$nch; //@line 1213 "parsermodule.c"
        var $68=$start_addr; //@line 1213 "parsermodule.c"
        var $69=($67) - ($68); //@line 1213 "parsermodule.c"
        var $70=($69)==2; //@line 1213 "parsermodule.c"
        if ($70) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1213 "parsermodule.c"
      case 15: // $bb15
        var $71=$tree_addr; //@line 1214 "parsermodule.c"
        var $72=$71+20; //@line 1214 "parsermodule.c"
        var $73=HEAP[$72]; //@line 1214 "parsermodule.c"
        var $74=$start_addr; //@line 1214 "parsermodule.c"
        var $75=($74) + 1; //@line 1214 "parsermodule.c"
        var $76=$73+24*$75; //@line 1214 "parsermodule.c"
        var $77=_validate_terminal($76, 1, 0); //@line 1214 "parsermodule.c"
        $res=$77; //@line 1214 "parsermodule.c"
        __lastLabel__ = 15; __label__ = 17; break; //@line 1214 "parsermodule.c"
      case 16: // $bb16thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 16; __label__ = 17; break;
      case 17: // $bb16
        var $78=__lastLabel__ == 16 ? $_pr : (__lastLabel__ == 4 ? $27 : (__lastLabel__ == 12 ? $64 : ($77)));
        var $79=($78)==0; //@line 1216 "parsermodule.c"
        if ($79) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1216 "parsermodule.c"
      case 18: // $bb17
        _err_string(__str68); //@line 1217 "parsermodule.c"
        __label__ = 19; break; //@line 1217 "parsermodule.c"
      case 19: // $bb18
        var $80=$res; //@line 1218 "parsermodule.c"
        $0=$80; //@line 1218 "parsermodule.c"
        __label__ = 20; break; //@line 1218 "parsermodule.c"
      case 20: // $bb19
        var $81=$0; //@line 1194 "parsermodule.c"
        $retval=$81; //@line 1194 "parsermodule.c"
        var $retval20=$retval; //@line 1194 "parsermodule.c"
        ;
        return $retval20; //@line 1194 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_varargslist($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $iftmp_83;
        var $iftmp_82;
        var $iftmp_81;
        var $iftmp_80;
        var $0;
        var $iftmp_79;
        var $nch;
        var $res;
        var $sym;
        var $i;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1234 "parsermodule.c"
        var $2=$1+16; //@line 1234 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1234 "parsermodule.c"
        $nch=$3; //@line 1234 "parsermodule.c"
        var $4=$tree_addr; //@line 1235 "parsermodule.c"
        var $5=_validate_ntype($4, 264); //@line 1235 "parsermodule.c"
        var $6=($5)==0; //@line 1235 "parsermodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1235 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1235 "parsermodule.c"
        var $8=($7)==0; //@line 1235 "parsermodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1235 "parsermodule.c"
      case 2: // $bb4
        $iftmp_79=0; //@line 1235 "parsermodule.c"
        $res=0; //@line 1235 "parsermodule.c"
        $0=0; //@line 1239 "parsermodule.c"
        __label__ = 56; break; //@line 1239 "parsermodule.c"
      case 3: // $bb5
        $iftmp_79=1; //@line 1235 "parsermodule.c"
        $res=1; //@line 1235 "parsermodule.c"
        var $9=$nch; //@line 1240 "parsermodule.c"
        var $10=($9) <= 0; //@line 1240 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1240 "parsermodule.c"
      case 4: // $bb6
        _err_string(__str69); //@line 1241 "parsermodule.c"
        $0=0; //@line 1242 "parsermodule.c"
        __label__ = 56; break; //@line 1242 "parsermodule.c"
      case 5: // $bb7
        var $11=$tree_addr; //@line 1244 "parsermodule.c"
        var $12=$11+20; //@line 1244 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1244 "parsermodule.c"
        var $14=$13; //@line 1244 "parsermodule.c"
        var $15=$14; //@line 1244 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1244 "parsermodule.c"
        var $17=($16); //@line 1244 "parsermodule.c"
        $sym=$17; //@line 1244 "parsermodule.c"
        var $18=$sym; //@line 1245 "parsermodule.c"
        var $19=($18)==16; //@line 1245 "parsermodule.c"
        var $20=$sym; //@line 1245 "parsermodule.c"
        var $21=($20)==36; //@line 1245 "parsermodule.c"
        var $or_cond=($19) | ($21);
        if ($or_cond) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1245 "parsermodule.c"
      case 6: // $bb9
        var $22=$tree_addr; //@line 1249 "parsermodule.c"
        var $23=_validate_varargslist_trailer($22, 0); //@line 1249 "parsermodule.c"
        $res=$23; //@line 1249 "parsermodule.c"
        __label__ = 55; break; //@line 1249 "parsermodule.c"
      case 7: // $bb10
        var $24=$sym; //@line 1250 "parsermodule.c"
        var $25=($24)==265; //@line 1250 "parsermodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 55; break; } //@line 1250 "parsermodule.c"
      case 8: // $bb11
        $i=0; //@line 1251 "parsermodule.c"
        var $26=$tree_addr; //@line 1253 "parsermodule.c"
        var $27=$26+20; //@line 1253 "parsermodule.c"
        var $28=HEAP[$27]; //@line 1253 "parsermodule.c"
        var $29=$nch; //@line 1253 "parsermodule.c"
        var $30=($29) - 1; //@line 1253 "parsermodule.c"
        var $31=$28+24*$30; //@line 1253 "parsermodule.c"
        var $32=$31; //@line 1253 "parsermodule.c"
        var $33=HEAP[$32]; //@line 1253 "parsermodule.c"
        var $34=($33); //@line 1253 "parsermodule.c"
        $sym=$34; //@line 1253 "parsermodule.c"
        var $35=$sym; //@line 1254 "parsermodule.c"
        var $36=($35)==1; //@line 1254 "parsermodule.c"
        if ($36) { __label__ = 22; break; } else { __label__ = 27; break; } //@line 1254 "parsermodule.c"
      case 9: // $bb13
        var $37=$tree_addr; //@line 1262 "parsermodule.c"
        var $38=$37+20; //@line 1262 "parsermodule.c"
        var $39=HEAP[$38]; //@line 1262 "parsermodule.c"
        var $40=$i; //@line 1262 "parsermodule.c"
        var $41=$39+24*$40; //@line 1262 "parsermodule.c"
        var $42=_validate_fpdef($41); //@line 1262 "parsermodule.c"
        $res=$42; //@line 1262 "parsermodule.c"
        var $43=$i; //@line 1263 "parsermodule.c"
        var $44=($43) + 1; //@line 1263 "parsermodule.c"
        $i=$44; //@line 1263 "parsermodule.c"
        var $45=$res; //@line 1264 "parsermodule.c"
        var $46=($45)!=0; //@line 1264 "parsermodule.c"
        if ($46) { __label__ = 10; break; } else { __label__ = 22; break; } //@line 1264 "parsermodule.c"
      case 10: // $bb14
        var $47=$tree_addr; //@line 1264 "parsermodule.c"
        var $48=$47+20; //@line 1264 "parsermodule.c"
        var $49=HEAP[$48]; //@line 1264 "parsermodule.c"
        var $50=$i; //@line 1264 "parsermodule.c"
        var $51=$49+24*$50; //@line 1264 "parsermodule.c"
        var $52=$51; //@line 1264 "parsermodule.c"
        var $53=HEAP[$52]; //@line 1264 "parsermodule.c"
        var $54=($53)==22; //@line 1264 "parsermodule.c"
        if ($54) { __label__ = 11; break; } else { __label__ = 16; break; } //@line 1264 "parsermodule.c"
      case 11: // $bb15
        var $55=$i; //@line 1264 "parsermodule.c"
        var $56=($55) + 2; //@line 1264 "parsermodule.c"
        var $57=$nch; //@line 1264 "parsermodule.c"
        var $58=($56) <= ($57); //@line 1264 "parsermodule.c"
        if ($58) { __label__ = 12; break; } else { __label__ = 16; break; } //@line 1264 "parsermodule.c"
      case 12: // $bb16
        var $59=$tree_addr; //@line 1265 "parsermodule.c"
        var $60=$59+20; //@line 1265 "parsermodule.c"
        var $61=HEAP[$60]; //@line 1265 "parsermodule.c"
        var $62=$i; //@line 1265 "parsermodule.c"
        var $63=$61+24*$62; //@line 1265 "parsermodule.c"
        var $64=_validate_terminal($63, 22, __str70); //@line 1265 "parsermodule.c"
        var $65=($64)==0; //@line 1265 "parsermodule.c"
        if ($65) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 1265 "parsermodule.c"
      case 13: // $bb17
        var $66=$tree_addr; //@line 1265 "parsermodule.c"
        var $67=$66+20; //@line 1265 "parsermodule.c"
        var $68=HEAP[$67]; //@line 1265 "parsermodule.c"
        var $69=$i; //@line 1265 "parsermodule.c"
        var $70=($69) + 1; //@line 1265 "parsermodule.c"
        var $71=$68+24*$70; //@line 1265 "parsermodule.c"
        var $72=_validate_test($71); //@line 1265 "parsermodule.c"
        var $73=($72)==0; //@line 1265 "parsermodule.c"
        if ($73) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1265 "parsermodule.c"
      case 14: // $bb20
        $iftmp_80=0; //@line 1265 "parsermodule.c"
        $res=0; //@line 1265 "parsermodule.c"
        __label__ = 22; break;
      case 15: // $bb22_thread2
        $iftmp_80=1; //@line 1265 "parsermodule.c"
        $res=1; //@line 1265 "parsermodule.c"
        var $74=$i; //@line 1268 "parsermodule.c"
        var $75=($74) + 2; //@line 1268 "parsermodule.c"
        $i=$75; //@line 1268 "parsermodule.c"
        __label__ = 17; break;
      case 16: // $bb22
        var $_pr=$res;
        var $76=($_pr)!=0; //@line 1270 "parsermodule.c"
        if ($76) { __lastLabel__ = 16; __label__ = 17; break; } else { __lastLabel__ = 16; __label__ = 23; break; } //@line 1270 "parsermodule.c"
      case 17: // $bb23
        var $77=$i; //@line 1270 "parsermodule.c"
        var $78=$nch; //@line 1270 "parsermodule.c"
        var $79=($77) < ($78); //@line 1270 "parsermodule.c"
        if ($79) { __label__ = 18; break; } else { __label__ = 22; break; } //@line 1270 "parsermodule.c"
      case 18: // $bb24
        var $80=$tree_addr; //@line 1271 "parsermodule.c"
        var $81=$80+20; //@line 1271 "parsermodule.c"
        var $82=HEAP[$81]; //@line 1271 "parsermodule.c"
        var $83=$i; //@line 1271 "parsermodule.c"
        var $84=$82+24*$83; //@line 1271 "parsermodule.c"
        var $85=_validate_terminal($84, 12, __str52); //@line 1271 "parsermodule.c"
        $res=$85; //@line 1271 "parsermodule.c"
        var $86=$i; //@line 1272 "parsermodule.c"
        var $87=($86) + 1; //@line 1272 "parsermodule.c"
        $i=$87; //@line 1272 "parsermodule.c"
        var $88=$res; //@line 1273 "parsermodule.c"
        var $89=($88)!=0; //@line 1273 "parsermodule.c"
        if ($89) { __lastLabel__ = 18; __label__ = 19; break; } else { __lastLabel__ = 18; __label__ = 23; break; } //@line 1273 "parsermodule.c"
      case 19: // $bb25
        var $90=$i; //@line 1273 "parsermodule.c"
        var $91=$nch; //@line 1273 "parsermodule.c"
        var $92=($90) < ($91); //@line 1273 "parsermodule.c"
        if ($92) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 1273 "parsermodule.c"
      case 20: // $bb26
        var $93=$tree_addr; //@line 1273 "parsermodule.c"
        var $94=$93+20; //@line 1273 "parsermodule.c"
        var $95=HEAP[$94]; //@line 1273 "parsermodule.c"
        var $96=$i; //@line 1273 "parsermodule.c"
        var $97=$95+24*$96; //@line 1273 "parsermodule.c"
        var $98=$97; //@line 1273 "parsermodule.c"
        var $99=HEAP[$98]; //@line 1273 "parsermodule.c"
        var $100=($99)==36; //@line 1273 "parsermodule.c"
        if ($100) { __label__ = 25; break; } else { __label__ = 21; break; } //@line 1273 "parsermodule.c"
      case 21: // $bb27
        var $101=$tree_addr; //@line 1273 "parsermodule.c"
        var $102=$101+20; //@line 1273 "parsermodule.c"
        var $103=HEAP[$102]; //@line 1273 "parsermodule.c"
        var $104=$i; //@line 1273 "parsermodule.c"
        var $105=$103+24*$104; //@line 1273 "parsermodule.c"
        var $106=$105; //@line 1273 "parsermodule.c"
        var $107=HEAP[$106]; //@line 1273 "parsermodule.c"
        var $108=($107)==16; //@line 1273 "parsermodule.c"
        if ($108) { __label__ = 25; break; } else { __label__ = 22; break; } //@line 1273 "parsermodule.c"
      case 22: // $bb28thread_pre_split
        var $_pr3=$res;
        __lastLabel__ = 22; __label__ = 23; break;
      case 23: // $bb28
        var $109=__lastLabel__ == 22 ? $_pr3 : (__lastLabel__ == 18 ? 0 : (0));
        var $110=($109)==0; //@line 1261 "parsermodule.c"
        if ($110) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 1261 "parsermodule.c"
      case 24: // $bb29
        var $111=$i; //@line 1261 "parsermodule.c"
        var $112=($111) + 2; //@line 1261 "parsermodule.c"
        var $113=$nch; //@line 1261 "parsermodule.c"
        var $114=($112) <= ($113); //@line 1261 "parsermodule.c"
        if ($114) { __label__ = 9; break; } else { __label__ = 25; break; } //@line 1261 "parsermodule.c"
      case 25: // $bb30
        var $115=$res; //@line 1282 "parsermodule.c"
        var $116=($115)!=0; //@line 1282 "parsermodule.c"
        if ($116) { __label__ = 26; break; } else { __label__ = 55; break; } //@line 1282 "parsermodule.c"
      case 26: // $bb31
        var $117=$tree_addr; //@line 1283 "parsermodule.c"
        var $118=$i; //@line 1283 "parsermodule.c"
        var $119=_validate_varargslist_trailer($117, $118); //@line 1283 "parsermodule.c"
        $res=$119; //@line 1283 "parsermodule.c"
        __label__ = 55; break; //@line 1283 "parsermodule.c"
      case 27: // $bb33
        var $120=$sym; //@line 1290 "parsermodule.c"
        var $121=($120)==12; //@line 1290 "parsermodule.c"
        if ($121) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 1290 "parsermodule.c"
      case 28: // $bb34
        var $122=$tree_addr; //@line 1291 "parsermodule.c"
        var $123=$122+20; //@line 1291 "parsermodule.c"
        var $124=HEAP[$123]; //@line 1291 "parsermodule.c"
        var $125=$nch; //@line 1291 "parsermodule.c"
        var $126=($125) - 1; //@line 1291 "parsermodule.c"
        var $127=$124+24*$126; //@line 1291 "parsermodule.c"
        var $128=_validate_terminal($127, 12, __str52); //@line 1291 "parsermodule.c"
        $res=$128; //@line 1291 "parsermodule.c"
        var $129=$res; //@line 1292 "parsermodule.c"
        var $130=($129)==0; //@line 1292 "parsermodule.c"
        if ($130) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1292 "parsermodule.c"
      case 29: // $bb35
        $0=0; //@line 1293 "parsermodule.c"
        __label__ = 56; break; //@line 1293 "parsermodule.c"
      case 30: // $bb36
        var $131=$nch; //@line 1294 "parsermodule.c"
        var $132=($131) - 1; //@line 1294 "parsermodule.c"
        $nch=$132; //@line 1294 "parsermodule.c"
        __label__ = 31; break; //@line 1294 "parsermodule.c"
      case 31: // $bb37
        var $133=$tree_addr; //@line 1299 "parsermodule.c"
        var $134=$133+20; //@line 1299 "parsermodule.c"
        var $135=HEAP[$134]; //@line 1299 "parsermodule.c"
        var $136=$135; //@line 1299 "parsermodule.c"
        var $137=_validate_fpdef($136); //@line 1299 "parsermodule.c"
        $res=$137; //@line 1299 "parsermodule.c"
        var $138=$i; //@line 1300 "parsermodule.c"
        var $139=($138) + 1; //@line 1300 "parsermodule.c"
        $i=$139; //@line 1300 "parsermodule.c"
        var $140=($137)!=0; //@line 1301 "parsermodule.c"
        if ($140) { __lastLabel__ = 31; __label__ = 32; break; } else { __lastLabel__ = 31; __label__ = 50; break; } //@line 1301 "parsermodule.c"
      case 32: // $bb38
        var $141=$i; //@line 1301 "parsermodule.c"
        var $142=($141) + 2; //@line 1301 "parsermodule.c"
        var $143=$nch; //@line 1301 "parsermodule.c"
        var $144=($142) <= ($143); //@line 1301 "parsermodule.c"
        if ($144) { __label__ = 33; break; } else { __label__ = 49; break; } //@line 1301 "parsermodule.c"
      case 33: // $bb39
        var $145=$tree_addr; //@line 1301 "parsermodule.c"
        var $146=$145+20; //@line 1301 "parsermodule.c"
        var $147=HEAP[$146]; //@line 1301 "parsermodule.c"
        var $148=$i; //@line 1301 "parsermodule.c"
        var $149=$147+24*$148; //@line 1301 "parsermodule.c"
        var $150=$149; //@line 1301 "parsermodule.c"
        var $151=HEAP[$150]; //@line 1301 "parsermodule.c"
        var $152=($151)==22; //@line 1301 "parsermodule.c"
        if ($152) { __label__ = 34; break; } else { __label__ = 49; break; } //@line 1301 "parsermodule.c"
      case 34: // $bb40
        var $153=$tree_addr; //@line 1302 "parsermodule.c"
        var $154=$153+20; //@line 1302 "parsermodule.c"
        var $155=HEAP[$154]; //@line 1302 "parsermodule.c"
        var $156=$i; //@line 1302 "parsermodule.c"
        var $157=$155+24*$156; //@line 1302 "parsermodule.c"
        var $158=_validate_terminal($157, 22, __str70); //@line 1302 "parsermodule.c"
        var $159=($158)==0; //@line 1302 "parsermodule.c"
        if ($159) { __label__ = 37; break; } else { __label__ = 35; break; } //@line 1302 "parsermodule.c"
      case 35: // $bb41
        var $160=$tree_addr; //@line 1302 "parsermodule.c"
        var $161=$160+20; //@line 1302 "parsermodule.c"
        var $162=HEAP[$161]; //@line 1302 "parsermodule.c"
        var $163=$i; //@line 1302 "parsermodule.c"
        var $164=($163) + 1; //@line 1302 "parsermodule.c"
        var $165=$162+24*$164; //@line 1302 "parsermodule.c"
        var $166=_validate_test($165); //@line 1302 "parsermodule.c"
        var $167=($166)==0; //@line 1302 "parsermodule.c"
        if ($167) { __label__ = 37; break; } else { __label__ = 36; break; } //@line 1302 "parsermodule.c"
      case 36: // $bb42
        $iftmp_81=1; //@line 1302 "parsermodule.c"
        __label__ = 38; break; //@line 1302 "parsermodule.c"
      case 37: // $bb43
        $iftmp_81=0; //@line 1302 "parsermodule.c"
        __label__ = 38; break; //@line 1302 "parsermodule.c"
      case 38: // $bb44
        var $168=$iftmp_81; //@line 1302 "parsermodule.c"
        $res=$168; //@line 1302 "parsermodule.c"
        var $169=$i; //@line 1304 "parsermodule.c"
        var $170=($169) + 2; //@line 1304 "parsermodule.c"
        $i=$170; //@line 1304 "parsermodule.c"
        __lastLabel__ = 38; __label__ = 50; break; //@line 1304 "parsermodule.c"
      case 39: // $bb46
        var $171=$tree_addr; //@line 1311 "parsermodule.c"
        var $172=$171+20; //@line 1311 "parsermodule.c"
        var $173=HEAP[$172]; //@line 1311 "parsermodule.c"
        var $174=$i; //@line 1311 "parsermodule.c"
        var $175=$173+24*$174; //@line 1311 "parsermodule.c"
        var $176=_validate_terminal($175, 12, __str52); //@line 1311 "parsermodule.c"
        var $177=($176)==0; //@line 1311 "parsermodule.c"
        if ($177) { __label__ = 41; break; } else { __label__ = 40; break; } //@line 1311 "parsermodule.c"
      case 40: // $bb47
        var $178=$tree_addr; //@line 1311 "parsermodule.c"
        var $179=$178+20; //@line 1311 "parsermodule.c"
        var $180=HEAP[$179]; //@line 1311 "parsermodule.c"
        var $181=$i; //@line 1311 "parsermodule.c"
        var $182=($181) + 1; //@line 1311 "parsermodule.c"
        var $183=$180+24*$182; //@line 1311 "parsermodule.c"
        var $184=_validate_fpdef($183); //@line 1311 "parsermodule.c"
        var $185=($184)==0; //@line 1311 "parsermodule.c"
        if ($185) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1311 "parsermodule.c"
      case 41: // $bb50
        $iftmp_82=0; //@line 1311 "parsermodule.c"
        $res=0; //@line 1311 "parsermodule.c"
        var $186=$i; //@line 1313 "parsermodule.c"
        var $187=($186) + 2; //@line 1313 "parsermodule.c"
        $i=$187; //@line 1313 "parsermodule.c"
        __lastLabel__ = 41; __label__ = 50; break;
      case 42: // $bb51
        $iftmp_82=1; //@line 1311 "parsermodule.c"
        $res=1; //@line 1311 "parsermodule.c"
        var $188=$i; //@line 1313 "parsermodule.c"
        var $189=($188) + 2; //@line 1313 "parsermodule.c"
        $i=$189; //@line 1313 "parsermodule.c"
        var $190=$nch; //@line 1314 "parsermodule.c"
        var $191=$i; //@line 1314 "parsermodule.c"
        var $192=($190) - ($191); //@line 1314 "parsermodule.c"
        var $193=($192) > 1; //@line 1314 "parsermodule.c"
        if ($193) { __label__ = 43; break; } else { __label__ = 49; break; } //@line 1314 "parsermodule.c"
      case 43: // $bb52
        var $194=$tree_addr; //@line 1314 "parsermodule.c"
        var $195=$194+20; //@line 1314 "parsermodule.c"
        var $196=HEAP[$195]; //@line 1314 "parsermodule.c"
        var $197=$i; //@line 1314 "parsermodule.c"
        var $198=$196+24*$197; //@line 1314 "parsermodule.c"
        var $199=$198; //@line 1314 "parsermodule.c"
        var $200=HEAP[$199]; //@line 1314 "parsermodule.c"
        var $201=($200)==22; //@line 1314 "parsermodule.c"
        if ($201) { __label__ = 44; break; } else { __label__ = 49; break; } //@line 1314 "parsermodule.c"
      case 44: // $bb53
        var $202=$tree_addr; //@line 1315 "parsermodule.c"
        var $203=$202+20; //@line 1315 "parsermodule.c"
        var $204=HEAP[$203]; //@line 1315 "parsermodule.c"
        var $205=$i; //@line 1315 "parsermodule.c"
        var $206=$204+24*$205; //@line 1315 "parsermodule.c"
        var $207=_validate_terminal($206, 22, __str70); //@line 1315 "parsermodule.c"
        var $208=($207)==0; //@line 1315 "parsermodule.c"
        if ($208) { __label__ = 47; break; } else { __label__ = 45; break; } //@line 1315 "parsermodule.c"
      case 45: // $bb54
        var $209=$tree_addr; //@line 1315 "parsermodule.c"
        var $210=$209+20; //@line 1315 "parsermodule.c"
        var $211=HEAP[$210]; //@line 1315 "parsermodule.c"
        var $212=$i; //@line 1315 "parsermodule.c"
        var $213=($212) + 1; //@line 1315 "parsermodule.c"
        var $214=$211+24*$213; //@line 1315 "parsermodule.c"
        var $215=_validate_test($214); //@line 1315 "parsermodule.c"
        var $216=($215)==0; //@line 1315 "parsermodule.c"
        if ($216) { __label__ = 47; break; } else { __label__ = 46; break; } //@line 1315 "parsermodule.c"
      case 46: // $bb55
        $iftmp_83=1; //@line 1315 "parsermodule.c"
        __label__ = 48; break; //@line 1315 "parsermodule.c"
      case 47: // $bb56
        $iftmp_83=0; //@line 1315 "parsermodule.c"
        __label__ = 48; break; //@line 1315 "parsermodule.c"
      case 48: // $bb57
        var $217=$iftmp_83; //@line 1315 "parsermodule.c"
        $res=$217; //@line 1315 "parsermodule.c"
        var $218=$i; //@line 1317 "parsermodule.c"
        var $219=($218) + 2; //@line 1317 "parsermodule.c"
        $i=$219; //@line 1317 "parsermodule.c"
        __lastLabel__ = 48; __label__ = 50; break; //@line 1317 "parsermodule.c"
      case 49: // $bb58thread_pre_split
        var $_pr4=$res;
        __lastLabel__ = 49; __label__ = 50; break;
      case 50: // $bb58
        var $220=__lastLabel__ == 41 ? 0 : (__lastLabel__ == 48 ? $217 : (__lastLabel__ == 49 ? $_pr4 : (__lastLabel__ == 31 ? 0 : ($168))));
        var $221=($220)==0; //@line 1310 "parsermodule.c"
        if ($221) { __label__ = 52; break; } else { __label__ = 51; break; } //@line 1310 "parsermodule.c"
      case 51: // $bb59
        var $222=$nch; //@line 1310 "parsermodule.c"
        var $223=$i; //@line 1310 "parsermodule.c"
        var $224=($222) - ($223); //@line 1310 "parsermodule.c"
        var $225=($224) > 1; //@line 1310 "parsermodule.c"
        if ($225) { __label__ = 39; break; } else { __label__ = 52; break; } //@line 1310 "parsermodule.c"
      case 52: // $bb60
        var $226=$res; //@line 1320 "parsermodule.c"
        var $227=($226)!=0; //@line 1320 "parsermodule.c"
        if ($227) { __label__ = 53; break; } else { __label__ = 55; break; } //@line 1320 "parsermodule.c"
      case 53: // $bb61
        var $228=$nch; //@line 1320 "parsermodule.c"
        var $229=$i; //@line 1320 "parsermodule.c"
        var $230=($228)!=($229); //@line 1320 "parsermodule.c"
        if ($230) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 1320 "parsermodule.c"
      case 54: // $bb62
        $res=0; //@line 1321 "parsermodule.c"
        _err_string(__str71); //@line 1322 "parsermodule.c"
        __label__ = 55; break; //@line 1322 "parsermodule.c"
      case 55: // $bb63
        var $231=$res; //@line 1326 "parsermodule.c"
        $0=$231; //@line 1326 "parsermodule.c"
        __label__ = 56; break; //@line 1326 "parsermodule.c"
      case 56: // $bb64
        var $232=$0; //@line 1239 "parsermodule.c"
        $retval=$232; //@line 1239 "parsermodule.c"
        var $retval65=$retval; //@line 1239 "parsermodule.c"
        ;
        return $retval65; //@line 1239 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_list_iter($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_84;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1336 "parsermodule.c"
        var $2=_validate_ntype($1, 332); //@line 1336 "parsermodule.c"
        var $3=($2)==0; //@line 1336 "parsermodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1336 "parsermodule.c"
      case 1: // $bb
        var $4=$tree_addr; //@line 1336 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, __str72); //@line 1336 "parsermodule.c"
        var $6=($5)==0; //@line 1336 "parsermodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1336 "parsermodule.c"
      case 2: // $bb3_thread
        $iftmp_84=0; //@line 1336 "parsermodule.c"
        $res=0; //@line 1336 "parsermodule.c"
        __label__ = 5; break;
      case 3: // $bb4
        $iftmp_84=1; //@line 1336 "parsermodule.c"
        $res=1; //@line 1336 "parsermodule.c"
        var $7=$tree_addr; //@line 1337 "parsermodule.c"
        var $8=$7+20; //@line 1337 "parsermodule.c"
        var $9=HEAP[$8]; //@line 1337 "parsermodule.c"
        var $10=$9; //@line 1337 "parsermodule.c"
        var $11=$10; //@line 1337 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1337 "parsermodule.c"
        var $13=($12)!=333; //@line 1337 "parsermodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1337 "parsermodule.c"
      case 4: // $bb5
        var $14=$tree_addr; //@line 1338 "parsermodule.c"
        var $15=$14+20; //@line 1338 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1338 "parsermodule.c"
        var $17=$16; //@line 1338 "parsermodule.c"
        var $18=_validate_list_for($17); //@line 1338 "parsermodule.c"
        $res=$18; //@line 1338 "parsermodule.c"
        __label__ = 6; break; //@line 1338 "parsermodule.c"
      case 5: // $bb6
        var $19=$tree_addr; //@line 1340 "parsermodule.c"
        var $20=$19+20; //@line 1340 "parsermodule.c"
        var $21=HEAP[$20]; //@line 1340 "parsermodule.c"
        var $22=$21; //@line 1340 "parsermodule.c"
        var $23=_validate_list_if($22); //@line 1340 "parsermodule.c"
        $res=$23; //@line 1340 "parsermodule.c"
        __label__ = 6; break; //@line 1340 "parsermodule.c"
      case 6: // $bb7
        var $24=$res; //@line 1342 "parsermodule.c"
        $0=$24; //@line 1342 "parsermodule.c"
        var $25=$0; //@line 1342 "parsermodule.c"
        $retval=$25; //@line 1342 "parsermodule.c"
        var $retval8=$retval; //@line 1342 "parsermodule.c"
        ;
        return $retval8; //@line 1342 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comp_iter($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_85;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1351 "parsermodule.c"
        var $2=_validate_ntype($1, 335); //@line 1351 "parsermodule.c"
        var $3=($2)==0; //@line 1351 "parsermodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1351 "parsermodule.c"
      case 1: // $bb
        var $4=$tree_addr; //@line 1351 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, __str73); //@line 1351 "parsermodule.c"
        var $6=($5)==0; //@line 1351 "parsermodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1351 "parsermodule.c"
      case 2: // $bb3_thread
        $iftmp_85=0; //@line 1351 "parsermodule.c"
        $res=0; //@line 1351 "parsermodule.c"
        __label__ = 5; break;
      case 3: // $bb4
        $iftmp_85=1; //@line 1351 "parsermodule.c"
        $res=1; //@line 1351 "parsermodule.c"
        var $7=$tree_addr; //@line 1352 "parsermodule.c"
        var $8=$7+20; //@line 1352 "parsermodule.c"
        var $9=HEAP[$8]; //@line 1352 "parsermodule.c"
        var $10=$9; //@line 1352 "parsermodule.c"
        var $11=$10; //@line 1352 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1352 "parsermodule.c"
        var $13=($12)!=336; //@line 1352 "parsermodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1352 "parsermodule.c"
      case 4: // $bb5
        var $14=$tree_addr; //@line 1353 "parsermodule.c"
        var $15=$14+20; //@line 1353 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1353 "parsermodule.c"
        var $17=$16; //@line 1353 "parsermodule.c"
        var $18=_validate_comp_for($17); //@line 1353 "parsermodule.c"
        $res=$18; //@line 1353 "parsermodule.c"
        __label__ = 6; break; //@line 1353 "parsermodule.c"
      case 5: // $bb6
        var $19=$tree_addr; //@line 1355 "parsermodule.c"
        var $20=$19+20; //@line 1355 "parsermodule.c"
        var $21=HEAP[$20]; //@line 1355 "parsermodule.c"
        var $22=$21; //@line 1355 "parsermodule.c"
        var $23=_validate_comp_if($22); //@line 1355 "parsermodule.c"
        $res=$23; //@line 1355 "parsermodule.c"
        __label__ = 6; break; //@line 1355 "parsermodule.c"
      case 6: // $bb7
        var $24=$res; //@line 1357 "parsermodule.c"
        $0=$24; //@line 1357 "parsermodule.c"
        var $25=$0; //@line 1357 "parsermodule.c"
        $retval=$25; //@line 1357 "parsermodule.c"
        var $retval8=$retval; //@line 1357 "parsermodule.c"
        ;
        return $retval8; //@line 1357 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_list_for($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_86;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1365 "parsermodule.c"
        var $2=$1+16; //@line 1365 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1365 "parsermodule.c"
        $nch=$3; //@line 1365 "parsermodule.c"
        var $4=$nch; //@line 1368 "parsermodule.c"
        var $5=($4)==5; //@line 1368 "parsermodule.c"
        var $6=$tree_addr; //@line 1369 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1368 "parsermodule.c"
      case 1: // $bb
        var $7=$6+20; //@line 1369 "parsermodule.c"
        var $8=HEAP[$7]; //@line 1369 "parsermodule.c"
        var $9=$8+96; //@line 1369 "parsermodule.c"
        var $10=_validate_list_iter($9); //@line 1369 "parsermodule.c"
        $res=$10; //@line 1369 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 1369 "parsermodule.c"
      case 2: // $bb1
        var $11=_validate_numnodes($6, 4, __str74); //@line 1371 "parsermodule.c"
        $res=$11; //@line 1371 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 1371 "parsermodule.c"
      case 3: // $bb2
        var $12=__lastLabel__ == 2 ? $11 : ($10);
        var $13=($12)!=0; //@line 1373 "parsermodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 11; break; } //@line 1373 "parsermodule.c"
      case 4: // $bb3
        var $14=$tree_addr; //@line 1374 "parsermodule.c"
        var $15=$14+20; //@line 1374 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1374 "parsermodule.c"
        var $17=$16; //@line 1374 "parsermodule.c"
        var $18=_validate_terminal($17, 1, __str75); //@line 1374 "parsermodule.c"
        var $19=($18)==0; //@line 1374 "parsermodule.c"
        if ($19) { __label__ = 9; break; } else { __label__ = 5; break; } //@line 1374 "parsermodule.c"
      case 5: // $bb4
        var $20=$tree_addr; //@line 1374 "parsermodule.c"
        var $21=$20+20; //@line 1374 "parsermodule.c"
        var $22=HEAP[$21]; //@line 1374 "parsermodule.c"
        var $23=$22+24; //@line 1374 "parsermodule.c"
        var $24=_validate_exprlist($23); //@line 1374 "parsermodule.c"
        var $25=($24)==0; //@line 1374 "parsermodule.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 1374 "parsermodule.c"
      case 6: // $bb5
        var $26=$tree_addr; //@line 1374 "parsermodule.c"
        var $27=$26+20; //@line 1374 "parsermodule.c"
        var $28=HEAP[$27]; //@line 1374 "parsermodule.c"
        var $29=$28+48; //@line 1374 "parsermodule.c"
        var $30=_validate_terminal($29, 1, __str76); //@line 1374 "parsermodule.c"
        var $31=($30)==0; //@line 1374 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1374 "parsermodule.c"
      case 7: // $bb6
        var $32=$tree_addr; //@line 1374 "parsermodule.c"
        var $33=$32+20; //@line 1374 "parsermodule.c"
        var $34=HEAP[$33]; //@line 1374 "parsermodule.c"
        var $35=$34+72; //@line 1374 "parsermodule.c"
        var $36=_validate_testlist_safe($35); //@line 1374 "parsermodule.c"
        var $37=($36)==0; //@line 1374 "parsermodule.c"
        if ($37) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1374 "parsermodule.c"
      case 8: // $bb7
        $iftmp_86=1; //@line 1374 "parsermodule.c"
        __label__ = 10; break; //@line 1374 "parsermodule.c"
      case 9: // $bb8
        $iftmp_86=0; //@line 1374 "parsermodule.c"
        __label__ = 10; break; //@line 1374 "parsermodule.c"
      case 10: // $bb9
        var $38=$iftmp_86; //@line 1374 "parsermodule.c"
        $res=$38; //@line 1374 "parsermodule.c"
        __label__ = 11; break; //@line 1374 "parsermodule.c"
      case 11: // $bb10
        var $39=$res; //@line 1379 "parsermodule.c"
        $0=$39; //@line 1379 "parsermodule.c"
        var $40=$0; //@line 1379 "parsermodule.c"
        $retval=$40; //@line 1379 "parsermodule.c"
        var $retval11=$retval; //@line 1379 "parsermodule.c"
        ;
        return $retval11; //@line 1379 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comp_for($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_87;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1387 "parsermodule.c"
        var $2=$1+16; //@line 1387 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1387 "parsermodule.c"
        $nch=$3; //@line 1387 "parsermodule.c"
        var $4=$nch; //@line 1390 "parsermodule.c"
        var $5=($4)==5; //@line 1390 "parsermodule.c"
        var $6=$tree_addr; //@line 1391 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1390 "parsermodule.c"
      case 1: // $bb
        var $7=$6+20; //@line 1391 "parsermodule.c"
        var $8=HEAP[$7]; //@line 1391 "parsermodule.c"
        var $9=$8+96; //@line 1391 "parsermodule.c"
        var $10=_validate_comp_iter($9); //@line 1391 "parsermodule.c"
        $res=$10; //@line 1391 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 1391 "parsermodule.c"
      case 2: // $bb1
        var $11=_validate_numnodes($6, 4, __str77); //@line 1393 "parsermodule.c"
        $res=$11; //@line 1393 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 1393 "parsermodule.c"
      case 3: // $bb2
        var $12=__lastLabel__ == 2 ? $11 : ($10);
        var $13=($12)!=0; //@line 1395 "parsermodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 11; break; } //@line 1395 "parsermodule.c"
      case 4: // $bb3
        var $14=$tree_addr; //@line 1396 "parsermodule.c"
        var $15=$14+20; //@line 1396 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1396 "parsermodule.c"
        var $17=$16; //@line 1396 "parsermodule.c"
        var $18=_validate_terminal($17, 1, __str75); //@line 1396 "parsermodule.c"
        var $19=($18)==0; //@line 1396 "parsermodule.c"
        if ($19) { __label__ = 9; break; } else { __label__ = 5; break; } //@line 1396 "parsermodule.c"
      case 5: // $bb4
        var $20=$tree_addr; //@line 1396 "parsermodule.c"
        var $21=$20+20; //@line 1396 "parsermodule.c"
        var $22=HEAP[$21]; //@line 1396 "parsermodule.c"
        var $23=$22+24; //@line 1396 "parsermodule.c"
        var $24=_validate_exprlist($23); //@line 1396 "parsermodule.c"
        var $25=($24)==0; //@line 1396 "parsermodule.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 1396 "parsermodule.c"
      case 6: // $bb5
        var $26=$tree_addr; //@line 1396 "parsermodule.c"
        var $27=$26+20; //@line 1396 "parsermodule.c"
        var $28=HEAP[$27]; //@line 1396 "parsermodule.c"
        var $29=$28+48; //@line 1396 "parsermodule.c"
        var $30=_validate_terminal($29, 1, __str76); //@line 1396 "parsermodule.c"
        var $31=($30)==0; //@line 1396 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1396 "parsermodule.c"
      case 7: // $bb6
        var $32=$tree_addr; //@line 1396 "parsermodule.c"
        var $33=$32+20; //@line 1396 "parsermodule.c"
        var $34=HEAP[$33]; //@line 1396 "parsermodule.c"
        var $35=$34+72; //@line 1396 "parsermodule.c"
        var $36=_validate_or_test($35); //@line 1396 "parsermodule.c"
        var $37=($36)==0; //@line 1396 "parsermodule.c"
        if ($37) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1396 "parsermodule.c"
      case 8: // $bb7
        $iftmp_87=1; //@line 1396 "parsermodule.c"
        __label__ = 10; break; //@line 1396 "parsermodule.c"
      case 9: // $bb8
        $iftmp_87=0; //@line 1396 "parsermodule.c"
        __label__ = 10; break; //@line 1396 "parsermodule.c"
      case 10: // $bb9
        var $38=$iftmp_87; //@line 1396 "parsermodule.c"
        $res=$38; //@line 1396 "parsermodule.c"
        __label__ = 11; break; //@line 1396 "parsermodule.c"
      case 11: // $bb10
        var $39=$res; //@line 1401 "parsermodule.c"
        $0=$39; //@line 1401 "parsermodule.c"
        var $40=$0; //@line 1401 "parsermodule.c"
        $retval=$40; //@line 1401 "parsermodule.c"
        var $retval11=$retval; //@line 1401 "parsermodule.c"
        ;
        return $retval11; //@line 1401 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_list_if($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_88;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1409 "parsermodule.c"
        var $2=$1+16; //@line 1409 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1409 "parsermodule.c"
        $nch=$3; //@line 1409 "parsermodule.c"
        var $4=$nch; //@line 1412 "parsermodule.c"
        var $5=($4)==3; //@line 1412 "parsermodule.c"
        var $6=$tree_addr; //@line 1413 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1412 "parsermodule.c"
      case 1: // $bb
        var $7=$6+20; //@line 1413 "parsermodule.c"
        var $8=HEAP[$7]; //@line 1413 "parsermodule.c"
        var $9=$8+48; //@line 1413 "parsermodule.c"
        var $10=_validate_list_iter($9); //@line 1413 "parsermodule.c"
        $res=$10; //@line 1413 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 1413 "parsermodule.c"
      case 2: // $bb1
        var $11=_validate_numnodes($6, 2, __str78); //@line 1415 "parsermodule.c"
        $res=$11; //@line 1415 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 1415 "parsermodule.c"
      case 3: // $bb2
        var $12=__lastLabel__ == 2 ? $11 : ($10);
        var $13=($12)!=0; //@line 1417 "parsermodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 1417 "parsermodule.c"
      case 4: // $bb3
        var $14=$tree_addr; //@line 1418 "parsermodule.c"
        var $15=$14+20; //@line 1418 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1418 "parsermodule.c"
        var $17=$16; //@line 1418 "parsermodule.c"
        var $18=_validate_terminal($17, 1, __str57); //@line 1418 "parsermodule.c"
        var $19=($18)==0; //@line 1418 "parsermodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 1418 "parsermodule.c"
      case 5: // $bb4
        var $20=$tree_addr; //@line 1418 "parsermodule.c"
        var $21=$20+20; //@line 1418 "parsermodule.c"
        var $22=HEAP[$21]; //@line 1418 "parsermodule.c"
        var $23=$22+24; //@line 1418 "parsermodule.c"
        var $24=_validate_old_test($23); //@line 1418 "parsermodule.c"
        var $25=($24)==0; //@line 1418 "parsermodule.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1418 "parsermodule.c"
      case 6: // $bb5
        $iftmp_88=1; //@line 1418 "parsermodule.c"
        __label__ = 8; break; //@line 1418 "parsermodule.c"
      case 7: // $bb6
        $iftmp_88=0; //@line 1418 "parsermodule.c"
        __label__ = 8; break; //@line 1418 "parsermodule.c"
      case 8: // $bb7
        var $26=$iftmp_88; //@line 1418 "parsermodule.c"
        $res=$26; //@line 1418 "parsermodule.c"
        __label__ = 9; break; //@line 1418 "parsermodule.c"
      case 9: // $bb8
        var $27=$res; //@line 1421 "parsermodule.c"
        $0=$27; //@line 1421 "parsermodule.c"
        var $28=$0; //@line 1421 "parsermodule.c"
        $retval=$28; //@line 1421 "parsermodule.c"
        var $retval9=$retval; //@line 1421 "parsermodule.c"
        ;
        return $retval9; //@line 1421 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comp_if($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_89;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1429 "parsermodule.c"
        var $2=$1+16; //@line 1429 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1429 "parsermodule.c"
        $nch=$3; //@line 1429 "parsermodule.c"
        var $4=$nch; //@line 1432 "parsermodule.c"
        var $5=($4)==3; //@line 1432 "parsermodule.c"
        var $6=$tree_addr; //@line 1433 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1432 "parsermodule.c"
      case 1: // $bb
        var $7=$6+20; //@line 1433 "parsermodule.c"
        var $8=HEAP[$7]; //@line 1433 "parsermodule.c"
        var $9=$8+48; //@line 1433 "parsermodule.c"
        var $10=_validate_comp_iter($9); //@line 1433 "parsermodule.c"
        $res=$10; //@line 1433 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 1433 "parsermodule.c"
      case 2: // $bb1
        var $11=_validate_numnodes($6, 2, __str79); //@line 1435 "parsermodule.c"
        $res=$11; //@line 1435 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 1435 "parsermodule.c"
      case 3: // $bb2
        var $12=__lastLabel__ == 2 ? $11 : ($10);
        var $13=($12)!=0; //@line 1437 "parsermodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 1437 "parsermodule.c"
      case 4: // $bb3
        var $14=$tree_addr; //@line 1438 "parsermodule.c"
        var $15=$14+20; //@line 1438 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1438 "parsermodule.c"
        var $17=$16; //@line 1438 "parsermodule.c"
        var $18=_validate_terminal($17, 1, __str57); //@line 1438 "parsermodule.c"
        var $19=($18)==0; //@line 1438 "parsermodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 1438 "parsermodule.c"
      case 5: // $bb4
        var $20=$tree_addr; //@line 1438 "parsermodule.c"
        var $21=$20+20; //@line 1438 "parsermodule.c"
        var $22=HEAP[$21]; //@line 1438 "parsermodule.c"
        var $23=$22+24; //@line 1438 "parsermodule.c"
        var $24=_validate_old_test($23); //@line 1438 "parsermodule.c"
        var $25=($24)==0; //@line 1438 "parsermodule.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1438 "parsermodule.c"
      case 6: // $bb5
        $iftmp_89=1; //@line 1438 "parsermodule.c"
        __label__ = 8; break; //@line 1438 "parsermodule.c"
      case 7: // $bb6
        $iftmp_89=0; //@line 1438 "parsermodule.c"
        __label__ = 8; break; //@line 1438 "parsermodule.c"
      case 8: // $bb7
        var $26=$iftmp_89; //@line 1438 "parsermodule.c"
        $res=$26; //@line 1438 "parsermodule.c"
        __label__ = 9; break; //@line 1438 "parsermodule.c"
      case 9: // $bb8
        var $27=$res; //@line 1441 "parsermodule.c"
        $0=$27; //@line 1441 "parsermodule.c"
        var $28=$0; //@line 1441 "parsermodule.c"
        $retval=$28; //@line 1441 "parsermodule.c"
        var $retval9=$retval; //@line 1441 "parsermodule.c"
        ;
        return $retval9; //@line 1441 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_fpdef($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_90;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1453 "parsermodule.c"
        var $2=$1+16; //@line 1453 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1453 "parsermodule.c"
        $nch=$3; //@line 1453 "parsermodule.c"
        var $4=$tree_addr; //@line 1454 "parsermodule.c"
        var $5=_validate_ntype($4, 265); //@line 1454 "parsermodule.c"
        $res=$5; //@line 1454 "parsermodule.c"
        var $6=$res; //@line 1456 "parsermodule.c"
        var $7=($6)!=0; //@line 1456 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 11; break; } //@line 1456 "parsermodule.c"
      case 1: // $bb
        var $8=$nch; //@line 1457 "parsermodule.c"
        var $9=($8)==1; //@line 1457 "parsermodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1457 "parsermodule.c"
      case 2: // $bb1
        var $10=$tree_addr; //@line 1458 "parsermodule.c"
        var $11=$10+20; //@line 1458 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1458 "parsermodule.c"
        var $13=$12; //@line 1458 "parsermodule.c"
        var $14=_validate_ntype($13, 1); //@line 1458 "parsermodule.c"
        $res=$14; //@line 1458 "parsermodule.c"
        __label__ = 11; break; //@line 1458 "parsermodule.c"
      case 3: // $bb2
        var $15=$nch; //@line 1459 "parsermodule.c"
        var $16=($15)==3; //@line 1459 "parsermodule.c"
        var $17=$tree_addr; //@line 1460 "parsermodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 1459 "parsermodule.c"
      case 4: // $bb3
        var $18=$17+20; //@line 1460 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1460 "parsermodule.c"
        var $20=$19; //@line 1460 "parsermodule.c"
        var $21=_validate_terminal($20, 7, __str55); //@line 1460 "parsermodule.c"
        var $22=($21)==0; //@line 1460 "parsermodule.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 1460 "parsermodule.c"
      case 5: // $bb4
        var $23=$tree_addr; //@line 1460 "parsermodule.c"
        var $24=$23+20; //@line 1460 "parsermodule.c"
        var $25=HEAP[$24]; //@line 1460 "parsermodule.c"
        var $26=$25+24; //@line 1460 "parsermodule.c"
        var $27=_validate_fplist($26); //@line 1460 "parsermodule.c"
        var $28=($27)==0; //@line 1460 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1460 "parsermodule.c"
      case 6: // $bb5
        var $29=$tree_addr; //@line 1460 "parsermodule.c"
        var $30=$29+20; //@line 1460 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1460 "parsermodule.c"
        var $32=$31+48; //@line 1460 "parsermodule.c"
        var $33=_validate_terminal($32, 8, __str56); //@line 1460 "parsermodule.c"
        var $34=($33)==0; //@line 1460 "parsermodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1460 "parsermodule.c"
      case 7: // $bb6
        $iftmp_90=1; //@line 1460 "parsermodule.c"
        __label__ = 9; break; //@line 1460 "parsermodule.c"
      case 8: // $bb7
        $iftmp_90=0; //@line 1460 "parsermodule.c"
        __label__ = 9; break; //@line 1460 "parsermodule.c"
      case 9: // $bb8
        var $35=$iftmp_90; //@line 1460 "parsermodule.c"
        $res=$35; //@line 1460 "parsermodule.c"
        __label__ = 11; break; //@line 1460 "parsermodule.c"
      case 10: // $bb9
        var $36=_validate_numnodes($17, 1, __str80); //@line 1464 "parsermodule.c"
        $res=$36; //@line 1464 "parsermodule.c"
        __label__ = 11; break; //@line 1464 "parsermodule.c"
      case 11: // $bb10
        var $37=$res; //@line 1466 "parsermodule.c"
        $0=$37; //@line 1466 "parsermodule.c"
        var $38=$0; //@line 1466 "parsermodule.c"
        $retval=$38; //@line 1466 "parsermodule.c"
        var $retval11=$retval; //@line 1466 "parsermodule.c"
        ;
        return $retval11; //@line 1466 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_fplist($tree) {
    ;
    var __label__;
  
    var $tree_addr;
    var $retval;
    var $0;
    $tree_addr=$tree;
    var $1=$tree_addr; //@line 1473 "parsermodule.c"
    var $2=_validate_repeating_list($1, 266, (FUNCTION_TABLE_OFFSET + 14), __str81); //@line 1473 "parsermodule.c"
    $0=$2; //@line 1473 "parsermodule.c"
    var $3=$0; //@line 1473 "parsermodule.c"
    $retval=$3; //@line 1473 "parsermodule.c"
    var $retval1=$retval; //@line 1473 "parsermodule.c"
    ;
    return $retval1; //@line 1473 "parsermodule.c"
  }
  

  function _validate_stmt($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_91;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1485 "parsermodule.c"
        var $2=_validate_ntype($1, 267); //@line 1485 "parsermodule.c"
        var $3=($2)==0; //@line 1485 "parsermodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1485 "parsermodule.c"
      case 1: // $bb
        var $4=$tree_addr; //@line 1485 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, __str82); //@line 1485 "parsermodule.c"
        var $6=($5)==0; //@line 1485 "parsermodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1485 "parsermodule.c"
      case 2: // $bb3
        $iftmp_91=0; //@line 1485 "parsermodule.c"
        $res=0; //@line 1485 "parsermodule.c"
        __label__ = 6; break;
      case 3: // $bb4
        $iftmp_91=1; //@line 1485 "parsermodule.c"
        $res=1; //@line 1485 "parsermodule.c"
        var $7=$tree_addr; //@line 1488 "parsermodule.c"
        var $8=$7+20; //@line 1488 "parsermodule.c"
        var $9=HEAP[$8]; //@line 1488 "parsermodule.c"
        var $10=$9; //@line 1488 "parsermodule.c"
        $tree_addr=$10; //@line 1488 "parsermodule.c"
        var $11=$tree_addr; //@line 1490 "parsermodule.c"
        var $12=$11; //@line 1490 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1490 "parsermodule.c"
        var $14=($13)==268; //@line 1490 "parsermodule.c"
        var $15=$tree_addr; //@line 1491 "parsermodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1490 "parsermodule.c"
      case 4: // $bb5
        var $16=_validate_simple_stmt($15); //@line 1491 "parsermodule.c"
        $res=$16; //@line 1491 "parsermodule.c"
        __label__ = 6; break; //@line 1491 "parsermodule.c"
      case 5: // $bb6
        var $17=_validate_compound_stmt($15); //@line 1493 "parsermodule.c"
        $res=$17; //@line 1493 "parsermodule.c"
        __label__ = 6; break; //@line 1493 "parsermodule.c"
      case 6: // $bb7
        var $18=$res; //@line 1495 "parsermodule.c"
        $0=$18; //@line 1495 "parsermodule.c"
        var $19=$0; //@line 1495 "parsermodule.c"
        $retval=$19; //@line 1495 "parsermodule.c"
        var $retval8=$retval; //@line 1495 "parsermodule.c"
        ;
        return $retval8; //@line 1495 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_simple_stmt($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_93;
        var $iftmp_92;
        var $nch;
        var $res;
        var $i;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1505 "parsermodule.c"
        var $2=$1+16; //@line 1505 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1505 "parsermodule.c"
        $nch=$3; //@line 1505 "parsermodule.c"
        var $4=$tree_addr; //@line 1509 "parsermodule.c"
        var $5=_validate_ntype($4, 268); //@line 1509 "parsermodule.c"
        var $6=($5)==0; //@line 1509 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1509 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1509 "parsermodule.c"
        var $8=($7) <= 1; //@line 1509 "parsermodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 1509 "parsermodule.c"
      case 2: // $bb1
        var $9=$tree_addr; //@line 1509 "parsermodule.c"
        var $10=$9+20; //@line 1509 "parsermodule.c"
        var $11=HEAP[$10]; //@line 1509 "parsermodule.c"
        var $12=$11; //@line 1509 "parsermodule.c"
        var $13=_validate_small_stmt($12); //@line 1509 "parsermodule.c"
        var $14=($13)==0; //@line 1509 "parsermodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1509 "parsermodule.c"
      case 3: // $bb2
        var $15=$tree_addr; //@line 1509 "parsermodule.c"
        var $16=$15+20; //@line 1509 "parsermodule.c"
        var $17=HEAP[$16]; //@line 1509 "parsermodule.c"
        var $18=$nch; //@line 1509 "parsermodule.c"
        var $19=($18) - 1; //@line 1509 "parsermodule.c"
        var $20=$17+24*$19; //@line 1509 "parsermodule.c"
        var $21=_validate_terminal($20, 4, 0); //@line 1509 "parsermodule.c"
        var $22=($21)==0; //@line 1509 "parsermodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1509 "parsermodule.c"
      case 4: // $bb3
        $iftmp_92=1; //@line 1509 "parsermodule.c"
        __label__ = 6; break; //@line 1509 "parsermodule.c"
      case 5: // $bb4
        $iftmp_92=0; //@line 1509 "parsermodule.c"
        __label__ = 6; break; //@line 1509 "parsermodule.c"
      case 6: // $bb5
        var $23=$iftmp_92; //@line 1509 "parsermodule.c"
        $res=$23; //@line 1509 "parsermodule.c"
        var $24=$nch; //@line 1511 "parsermodule.c"
        var $25=($24) <= 1; //@line 1511 "parsermodule.c"
        if ($25) { __lastLabel__ = 6; __label__ = 7; break; } else { __lastLabel__ = 6; __label__ = 8; break; } //@line 1511 "parsermodule.c"
      case 7: // $bb6
        var $26=$tree_addr; //@line 1512 "parsermodule.c"
        var $27=_validate_numnodes($26, 2, __str83); //@line 1512 "parsermodule.c"
        $res=$27; //@line 1512 "parsermodule.c"
        __lastLabel__ = 7; __label__ = 8; break; //@line 1512 "parsermodule.c"
      case 8: // $bb7
        var $28=__lastLabel__ == 7 ? $27 : ($23);
        var $29=$nch; //@line 1513 "parsermodule.c"
        var $30=($29) - 1; //@line 1513 "parsermodule.c"
        $nch=$30; //@line 1513 "parsermodule.c"
        var $31=($28)!=0; //@line 1514 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 1514 "parsermodule.c"
      case 9: // $bb8
        var $32=$nch; //@line 1514 "parsermodule.c"
        var $33=($32) & 1; //@line 1514 "parsermodule.c"
        var $34=($33)==0; //@line 1514 "parsermodule.c"
        if ($34) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1514 "parsermodule.c"
      case 10: // $bb9
        var $35=$tree_addr; //@line 1515 "parsermodule.c"
        var $36=$35+20; //@line 1515 "parsermodule.c"
        var $37=HEAP[$36]; //@line 1515 "parsermodule.c"
        var $38=$nch; //@line 1515 "parsermodule.c"
        var $39=($38) - 1; //@line 1515 "parsermodule.c"
        $nch=$39; //@line 1515 "parsermodule.c"
        var $40=$nch; //@line 1515 "parsermodule.c"
        var $41=$37+24*$40; //@line 1515 "parsermodule.c"
        var $42=_validate_terminal($41, 13, __str84); //@line 1515 "parsermodule.c"
        $res=$42; //@line 1515 "parsermodule.c"
        __lastLabel__ = 10; __label__ = 12; break; //@line 1515 "parsermodule.c"
      case 11: // $bb10thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 11; __label__ = 12; break;
      case 12: // $bb10
        var $43=__lastLabel__ == 11 ? $_pr : ($42);
        var $44=($43)!=0; //@line 1516 "parsermodule.c"
        if ($44) { __label__ = 13; break; } else { __label__ = 22; break; } //@line 1516 "parsermodule.c"
      case 13: // $bb11
        var $45=$nch; //@line 1516 "parsermodule.c"
        var $46=($45) > 2; //@line 1516 "parsermodule.c"
        if ($46) { __label__ = 14; break; } else { __label__ = 22; break; } //@line 1516 "parsermodule.c"
      case 14: // $bb12
        $i=1; //@line 1519 "parsermodule.c"
        var $_pr1=$res;
        __lastLabel__ = 14; __label__ = 20; break; //@line 1519 "parsermodule.c"
      case 15: // $bb13
        var $47=$tree_addr; //@line 1520 "parsermodule.c"
        var $48=$47+20; //@line 1520 "parsermodule.c"
        var $49=HEAP[$48]; //@line 1520 "parsermodule.c"
        var $50=$i; //@line 1520 "parsermodule.c"
        var $51=$49+24*$50; //@line 1520 "parsermodule.c"
        var $52=_validate_terminal($51, 13, __str84); //@line 1520 "parsermodule.c"
        var $53=($52)==0; //@line 1520 "parsermodule.c"
        if ($53) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 1520 "parsermodule.c"
      case 16: // $bb14
        var $54=$tree_addr; //@line 1520 "parsermodule.c"
        var $55=$54+20; //@line 1520 "parsermodule.c"
        var $56=HEAP[$55]; //@line 1520 "parsermodule.c"
        var $57=$i; //@line 1520 "parsermodule.c"
        var $58=($57) + 1; //@line 1520 "parsermodule.c"
        var $59=$56+24*$58; //@line 1520 "parsermodule.c"
        var $60=_validate_small_stmt($59); //@line 1520 "parsermodule.c"
        var $61=($60)==0; //@line 1520 "parsermodule.c"
        if ($61) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 1520 "parsermodule.c"
      case 17: // $bb15
        $iftmp_93=1; //@line 1520 "parsermodule.c"
        __label__ = 19; break; //@line 1520 "parsermodule.c"
      case 18: // $bb16
        $iftmp_93=0; //@line 1520 "parsermodule.c"
        __label__ = 19; break; //@line 1520 "parsermodule.c"
      case 19: // $bb17
        var $62=$iftmp_93; //@line 1520 "parsermodule.c"
        $res=$62; //@line 1520 "parsermodule.c"
        var $63=$i; //@line 1519 "parsermodule.c"
        var $64=($63) + 2; //@line 1519 "parsermodule.c"
        $i=$64; //@line 1519 "parsermodule.c"
        __lastLabel__ = 19; __label__ = 20; break; //@line 1519 "parsermodule.c"
      case 20: // $bb18
        var $65=__lastLabel__ == 19 ? $62 : ($_pr1);
        var $66=($65)==0; //@line 1519 "parsermodule.c"
        if ($66) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1519 "parsermodule.c"
      case 21: // $bb19
        var $67=$i; //@line 1519 "parsermodule.c"
        var $68=$nch; //@line 1519 "parsermodule.c"
        var $69=($67) < ($68); //@line 1519 "parsermodule.c"
        if ($69) { __label__ = 15; break; } else { __label__ = 22; break; } //@line 1519 "parsermodule.c"
      case 22: // $bb20
        var $70=$res; //@line 1523 "parsermodule.c"
        $0=$70; //@line 1523 "parsermodule.c"
        var $71=$0; //@line 1523 "parsermodule.c"
        $retval=$71; //@line 1523 "parsermodule.c"
        var $retval21=$retval; //@line 1523 "parsermodule.c"
        ;
        return $retval21; //@line 1523 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_small_stmt($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $nch;
        var $res;
        var $ntype;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1530 "parsermodule.c"
        var $2=$1+16; //@line 1530 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1530 "parsermodule.c"
        $nch=$3; //@line 1530 "parsermodule.c"
        var $4=$tree_addr; //@line 1531 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, __str85); //@line 1531 "parsermodule.c"
        $res=$5; //@line 1531 "parsermodule.c"
        var $6=$res; //@line 1533 "parsermodule.c"
        var $7=($6)!=0; //@line 1533 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1533 "parsermodule.c"
      case 1: // $bb
        var $8=$tree_addr; //@line 1534 "parsermodule.c"
        var $9=$8+20; //@line 1534 "parsermodule.c"
        var $10=HEAP[$9]; //@line 1534 "parsermodule.c"
        var $11=$10; //@line 1534 "parsermodule.c"
        var $12=$11; //@line 1534 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1534 "parsermodule.c"
        var $14=($13); //@line 1534 "parsermodule.c"
        $ntype=$14; //@line 1534 "parsermodule.c"
        var $15=$ntype; //@line 1536 "parsermodule.c"
        var $16=($15)==270; //@line 1536 "parsermodule.c"
        var $17=$ntype; //@line 1536 "parsermodule.c"
        var $18=($17)==272; //@line 1536 "parsermodule.c"
        var $or_cond=($16) | ($18);
        var $19=$ntype; //@line 1536 "parsermodule.c"
        var $20=($19)==273; //@line 1536 "parsermodule.c"
        var $or_cond3=($or_cond) | ($20);
        var $21=$ntype; //@line 1536 "parsermodule.c"
        var $22=($21)==274; //@line 1536 "parsermodule.c"
        var $or_cond5=($or_cond3) | ($22);
        var $23=$ntype; //@line 1536 "parsermodule.c"
        var $24=($23)==275; //@line 1536 "parsermodule.c"
        var $or_cond7=($or_cond5) | ($24);
        var $25=$ntype; //@line 1536 "parsermodule.c"
        var $26=($25)==281; //@line 1536 "parsermodule.c"
        var $or_cond9=($or_cond7) | ($26);
        var $27=$ntype; //@line 1536 "parsermodule.c"
        var $28=($27)==289; //@line 1536 "parsermodule.c"
        var $or_cond11=($or_cond9) | ($28);
        var $29=$ntype; //@line 1536 "parsermodule.c"
        var $30=($29)==291; //@line 1536 "parsermodule.c"
        var $or_cond13=($or_cond11) | ($30);
        var $31=$ntype; //@line 1536 "parsermodule.c"
        var $32=($31)==290; //@line 1536 "parsermodule.c"
        var $or_cond15=($or_cond13) | ($32);
        if ($or_cond15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1536 "parsermodule.c"
      case 2: // $bb9
        var $33=$tree_addr; //@line 1545 "parsermodule.c"
        var $34=$33+20; //@line 1545 "parsermodule.c"
        var $35=HEAP[$34]; //@line 1545 "parsermodule.c"
        var $36=$35; //@line 1545 "parsermodule.c"
        var $37=_validate_node($36); //@line 1545 "parsermodule.c"
        $res=$37; //@line 1545 "parsermodule.c"
        __label__ = 6; break; //@line 1545 "parsermodule.c"
      case 3: // $bb10
        $res=0; //@line 1547 "parsermodule.c"
        _err_string(__str86); //@line 1548 "parsermodule.c"
        __label__ = 6; break; //@line 1548 "parsermodule.c"
      case 4: // $bb12
        var $38=$nch; //@line 1551 "parsermodule.c"
        var $39=($38)==1; //@line 1551 "parsermodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1551 "parsermodule.c"
      case 5: // $bb13
        $res=0; //@line 1552 "parsermodule.c"
        var $40=$tree_addr; //@line 1553 "parsermodule.c"
        var $41=$40+20; //@line 1553 "parsermodule.c"
        var $42=HEAP[$41]; //@line 1553 "parsermodule.c"
        var $43=$42; //@line 1553 "parsermodule.c"
        var $44=$43; //@line 1553 "parsermodule.c"
        var $45=HEAP[$44]; //@line 1553 "parsermodule.c"
        var $46=($45); //@line 1553 "parsermodule.c"
        var $47=HEAP[_parser_error]; //@line 1553 "parsermodule.c"
        var $48=_PyErr_Format($47, __str87, allocate([$46,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1553 "parsermodule.c"
        __label__ = 6; break; //@line 1553 "parsermodule.c"
      case 6: // $bb14
        var $49=$res; //@line 1557 "parsermodule.c"
        $0=$49; //@line 1557 "parsermodule.c"
        var $50=$0; //@line 1557 "parsermodule.c"
        $retval=$50; //@line 1557 "parsermodule.c"
        var $retval15=$retval; //@line 1557 "parsermodule.c"
        ;
        return $retval15; //@line 1557 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_compound_stmt($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_95;
        var $res;
        var $ntype;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1568 "parsermodule.c"
        var $2=_validate_ntype($1, 292); //@line 1568 "parsermodule.c"
        var $3=($2)==0; //@line 1568 "parsermodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1568 "parsermodule.c"
      case 1: // $bb
        var $4=$tree_addr; //@line 1568 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, __str88); //@line 1568 "parsermodule.c"
        var $6=($5)==0; //@line 1568 "parsermodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1568 "parsermodule.c"
      case 2: // $bb4
        $iftmp_95=0; //@line 1568 "parsermodule.c"
        $res=0; //@line 1568 "parsermodule.c"
        $0=0; //@line 1572 "parsermodule.c"
        __label__ = 7; break; //@line 1572 "parsermodule.c"
      case 3: // $bb5
        $iftmp_95=1; //@line 1568 "parsermodule.c"
        $res=1; //@line 1568 "parsermodule.c"
        var $7=$tree_addr; //@line 1574 "parsermodule.c"
        var $8=$7+20; //@line 1574 "parsermodule.c"
        var $9=HEAP[$8]; //@line 1574 "parsermodule.c"
        var $10=$9; //@line 1574 "parsermodule.c"
        $tree_addr=$10; //@line 1574 "parsermodule.c"
        var $11=$tree_addr; //@line 1575 "parsermodule.c"
        var $12=$11; //@line 1575 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1575 "parsermodule.c"
        var $14=($13); //@line 1575 "parsermodule.c"
        $ntype=$14; //@line 1575 "parsermodule.c"
        var $15=$ntype; //@line 1576 "parsermodule.c"
        var $16=($15)==293; //@line 1576 "parsermodule.c"
        var $17=$ntype; //@line 1576 "parsermodule.c"
        var $18=($17)==294; //@line 1576 "parsermodule.c"
        var $or_cond=($16) | ($18);
        var $19=$ntype; //@line 1576 "parsermodule.c"
        var $20=($19)==295; //@line 1576 "parsermodule.c"
        var $or_cond3=($or_cond) | ($20);
        var $21=$ntype; //@line 1576 "parsermodule.c"
        var $22=($21)==296; //@line 1576 "parsermodule.c"
        var $or_cond5=($or_cond3) | ($22);
        var $23=$ntype; //@line 1576 "parsermodule.c"
        var $24=($23)==297; //@line 1576 "parsermodule.c"
        var $or_cond7=($or_cond5) | ($24);
        var $25=$ntype; //@line 1576 "parsermodule.c"
        var $26=($25)==262; //@line 1576 "parsermodule.c"
        var $or_cond9=($or_cond7) | ($26);
        var $27=$ntype; //@line 1576 "parsermodule.c"
        var $28=($27)==329; //@line 1576 "parsermodule.c"
        var $or_cond11=($or_cond9) | ($28);
        var $29=$ntype; //@line 1576 "parsermodule.c"
        var $30=($29)==261; //@line 1576 "parsermodule.c"
        var $or_cond13=($or_cond11) | ($30);
        if ($or_cond13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1576 "parsermodule.c"
      case 4: // $bb13
        var $31=$tree_addr; //@line 1584 "parsermodule.c"
        var $32=_validate_node($31); //@line 1584 "parsermodule.c"
        $res=$32; //@line 1584 "parsermodule.c"
        __label__ = 6; break; //@line 1584 "parsermodule.c"
      case 5: // $bb14
        $res=0; //@line 1586 "parsermodule.c"
        var $33=$tree_addr; //@line 1587 "parsermodule.c"
        var $34=$33; //@line 1587 "parsermodule.c"
        var $35=HEAP[$34]; //@line 1587 "parsermodule.c"
        var $36=($35); //@line 1587 "parsermodule.c"
        var $37=HEAP[_parser_error]; //@line 1587 "parsermodule.c"
        var $38=_PyErr_Format($37, __str89, allocate([$36,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1587 "parsermodule.c"
        __label__ = 6; break; //@line 1587 "parsermodule.c"
      case 6: // $bb15
        var $39=$res; //@line 1590 "parsermodule.c"
        $0=$39; //@line 1590 "parsermodule.c"
        __label__ = 7; break; //@line 1590 "parsermodule.c"
      case 7: // $bb16
        var $40=$0; //@line 1572 "parsermodule.c"
        $retval=$40; //@line 1572 "parsermodule.c"
        var $retval17=$retval; //@line 1572 "parsermodule.c"
        ;
        return $retval17; //@line 1572 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_yield_or_testlist($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1596 "parsermodule.c"
        var $2=$1; //@line 1596 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1596 "parsermodule.c"
        var $4=($3)==340; //@line 1596 "parsermodule.c"
        var $5=$tree_addr; //@line 1597 "parsermodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1596 "parsermodule.c"
      case 1: // $bb
        var $6=_validate_yield_expr($5); //@line 1597 "parsermodule.c"
        $0=$6; //@line 1597 "parsermodule.c"
        __label__ = 3; break; //@line 1597 "parsermodule.c"
      case 2: // $bb1
        var $7=_validate_testlist($5); //@line 1599 "parsermodule.c"
        $0=$7; //@line 1599 "parsermodule.c"
        __label__ = 3; break; //@line 1599 "parsermodule.c"
      case 3: // $bb2
        var $8=$0; //@line 1597 "parsermodule.c"
        $retval=$8; //@line 1597 "parsermodule.c"
        var $retval3=$retval; //@line 1597 "parsermodule.c"
        ;
        return $retval3; //@line 1597 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_expr_stmt($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_100;
        var $iftmp_99;
        var $iftmp_98;
        var $iftmp_97;
        var $j;
        var $nch;
        var $res;
        var $s;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1606 "parsermodule.c"
        var $2=$1+16; //@line 1606 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1606 "parsermodule.c"
        $nch=$3; //@line 1606 "parsermodule.c"
        var $4=$tree_addr; //@line 1609 "parsermodule.c"
        var $5=_validate_ntype($4, 270); //@line 1609 "parsermodule.c"
        var $6=($5)==0; //@line 1609 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1609 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1609 "parsermodule.c"
        var $8=($7) & 1; //@line 1609 "parsermodule.c"
        var $9=((($8)) & 255); //@line 1609 "parsermodule.c"
        var $toBool=($9)!=0; //@line 1609 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1609 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 1609 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 1609 "parsermodule.c"
        if ($toBool3) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1609 "parsermodule.c"
      case 2: // $bb4
        var $10=$tree_addr; //@line 1609 "parsermodule.c"
        var $11=$10+20; //@line 1609 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1609 "parsermodule.c"
        var $13=$12; //@line 1609 "parsermodule.c"
        var $14=_validate_testlist($13); //@line 1609 "parsermodule.c"
        var $15=($14)==0; //@line 1609 "parsermodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1609 "parsermodule.c"
      case 3: // $bb7_thread
        $iftmp_97=0; //@line 1609 "parsermodule.c"
        $res=0; //@line 1609 "parsermodule.c"
        __label__ = 23; break;
      case 4: // $bb8
        $iftmp_97=1; //@line 1609 "parsermodule.c"
        $res=1; //@line 1609 "parsermodule.c"
        var $16=$nch; //@line 1611 "parsermodule.c"
        var $17=($16)!=3; //@line 1611 "parsermodule.c"
        if ($17) { __label__ = 23; break; } else { __label__ = 5; break; } //@line 1611 "parsermodule.c"
      case 5: // $bb9
        var $18=$tree_addr; //@line 1611 "parsermodule.c"
        var $19=$18+20; //@line 1611 "parsermodule.c"
        var $20=HEAP[$19]; //@line 1611 "parsermodule.c"
        var $21=$20+24; //@line 1611 "parsermodule.c"
        var $22=$21; //@line 1611 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1611 "parsermodule.c"
        var $24=($23)!=271; //@line 1611 "parsermodule.c"
        if ($24) { __label__ = 23; break; } else { __label__ = 6; break; } //@line 1611 "parsermodule.c"
      case 6: // $bb10
        var $25=$tree_addr; //@line 1613 "parsermodule.c"
        var $26=$25+20; //@line 1613 "parsermodule.c"
        var $27=HEAP[$26]; //@line 1613 "parsermodule.c"
        var $28=$27+24; //@line 1613 "parsermodule.c"
        var $29=_validate_numnodes($28, 1, __str90); //@line 1613 "parsermodule.c"
        var $30=($29)==0; //@line 1613 "parsermodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1613 "parsermodule.c"
      case 7: // $bb11
        var $31=$tree_addr; //@line 1613 "parsermodule.c"
        var $32=$31+20; //@line 1613 "parsermodule.c"
        var $33=HEAP[$32]; //@line 1613 "parsermodule.c"
        var $34=$33+48; //@line 1613 "parsermodule.c"
        var $35=_validate_yield_or_testlist($34); //@line 1613 "parsermodule.c"
        var $36=($35)==0; //@line 1613 "parsermodule.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1613 "parsermodule.c"
      case 8: // $bb14
        $iftmp_98=0; //@line 1613 "parsermodule.c"
        $res=0; //@line 1613 "parsermodule.c"
        __label__ = 31; break;
      case 9: // $bb15
        $iftmp_98=1; //@line 1613 "parsermodule.c"
        $res=1; //@line 1613 "parsermodule.c"
        var $37=$tree_addr; //@line 1617 "parsermodule.c"
        var $38=$37+20; //@line 1617 "parsermodule.c"
        var $39=HEAP[$38]; //@line 1617 "parsermodule.c"
        var $40=$39+24; //@line 1617 "parsermodule.c"
        var $41=$40+20; //@line 1617 "parsermodule.c"
        var $42=HEAP[$41]; //@line 1617 "parsermodule.c"
        var $43=$42; //@line 1617 "parsermodule.c"
        var $44=$43+4; //@line 1617 "parsermodule.c"
        var $45=HEAP[$44]; //@line 1617 "parsermodule.c"
        $s=$45; //@line 1617 "parsermodule.c"
        var $46=$s; //@line 1619 "parsermodule.c"
        var $47=_strcmp($46, __str91); //@line 1619 "parsermodule.c"
        var $48=($47)==0; //@line 1619 "parsermodule.c"
        if ($48) { __label__ = 21; break; } else { __label__ = 10; break; } //@line 1619 "parsermodule.c"
      case 10: // $bb16
        var $49=$s; //@line 1619 "parsermodule.c"
        var $50=_strcmp($49, __str92); //@line 1619 "parsermodule.c"
        var $51=($50)==0; //@line 1619 "parsermodule.c"
        if ($51) { __label__ = 21; break; } else { __label__ = 11; break; } //@line 1619 "parsermodule.c"
      case 11: // $bb17
        var $52=$s; //@line 1619 "parsermodule.c"
        var $53=_strcmp($52, __str93); //@line 1619 "parsermodule.c"
        var $54=($53)==0; //@line 1619 "parsermodule.c"
        if ($54) { __label__ = 21; break; } else { __label__ = 12; break; } //@line 1619 "parsermodule.c"
      case 12: // $bb18
        var $55=$s; //@line 1619 "parsermodule.c"
        var $56=_strcmp($55, __str94); //@line 1619 "parsermodule.c"
        var $57=($56)==0; //@line 1619 "parsermodule.c"
        if ($57) { __label__ = 21; break; } else { __label__ = 13; break; } //@line 1619 "parsermodule.c"
      case 13: // $bb19
        var $58=$s; //@line 1619 "parsermodule.c"
        var $59=_strcmp($58, __str95); //@line 1619 "parsermodule.c"
        var $60=($59)==0; //@line 1619 "parsermodule.c"
        if ($60) { __label__ = 21; break; } else { __label__ = 14; break; } //@line 1619 "parsermodule.c"
      case 14: // $bb20
        var $61=$s; //@line 1619 "parsermodule.c"
        var $62=_strcmp($61, __str96); //@line 1619 "parsermodule.c"
        var $63=($62)==0; //@line 1619 "parsermodule.c"
        if ($63) { __label__ = 21; break; } else { __label__ = 15; break; } //@line 1619 "parsermodule.c"
      case 15: // $bb21
        var $64=$s; //@line 1619 "parsermodule.c"
        var $65=_strcmp($64, __str97); //@line 1619 "parsermodule.c"
        var $66=($65)==0; //@line 1619 "parsermodule.c"
        if ($66) { __label__ = 21; break; } else { __label__ = 16; break; } //@line 1619 "parsermodule.c"
      case 16: // $bb22
        var $67=$s; //@line 1619 "parsermodule.c"
        var $68=_strcmp($67, __str98); //@line 1619 "parsermodule.c"
        var $69=($68)==0; //@line 1619 "parsermodule.c"
        if ($69) { __label__ = 21; break; } else { __label__ = 17; break; } //@line 1619 "parsermodule.c"
      case 17: // $bb23
        var $70=$s; //@line 1619 "parsermodule.c"
        var $71=_strcmp($70, __str99); //@line 1619 "parsermodule.c"
        var $72=($71)==0; //@line 1619 "parsermodule.c"
        if ($72) { __label__ = 21; break; } else { __label__ = 18; break; } //@line 1619 "parsermodule.c"
      case 18: // $bb24
        var $73=$s; //@line 1619 "parsermodule.c"
        var $74=_strcmp($73, __str100); //@line 1619 "parsermodule.c"
        var $75=($74)==0; //@line 1619 "parsermodule.c"
        if ($75) { __label__ = 21; break; } else { __label__ = 19; break; } //@line 1619 "parsermodule.c"
      case 19: // $bb25
        var $76=$s; //@line 1619 "parsermodule.c"
        var $77=_strcmp($76, __str101); //@line 1619 "parsermodule.c"
        var $78=($77)==0; //@line 1619 "parsermodule.c"
        if ($78) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 1619 "parsermodule.c"
      case 20: // $bb26
        var $79=$s; //@line 1619 "parsermodule.c"
        var $80=_strcmp($79, __str102); //@line 1619 "parsermodule.c"
        var $81=($80)==0; //@line 1619 "parsermodule.c"
        if ($81) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1619 "parsermodule.c"
      case 21: // $bb29
        $iftmp_99=1; //@line 1619 "parsermodule.c"
        $res=1; //@line 1619 "parsermodule.c"
        __label__ = 31; break;
      case 22: // $bb30
        $iftmp_99=0; //@line 1619 "parsermodule.c"
        $res=0; //@line 1619 "parsermodule.c"
        _err_string(__str103); //@line 1632 "parsermodule.c"
        __label__ = 31; break; //@line 1632 "parsermodule.c"
      case 23: // $bb32
        $j=1; //@line 1636 "parsermodule.c"
        var $_pr=$res;
        __lastLabel__ = 23; __label__ = 29; break; //@line 1636 "parsermodule.c"
      case 24: // $bb33
        var $82=$tree_addr; //@line 1637 "parsermodule.c"
        var $83=$82+20; //@line 1637 "parsermodule.c"
        var $84=HEAP[$83]; //@line 1637 "parsermodule.c"
        var $85=$j; //@line 1637 "parsermodule.c"
        var $86=$84+24*$85; //@line 1637 "parsermodule.c"
        var $87=_validate_terminal($86, 22, __str70); //@line 1637 "parsermodule.c"
        var $88=($87)==0; //@line 1637 "parsermodule.c"
        if ($88) { __label__ = 27; break; } else { __label__ = 25; break; } //@line 1637 "parsermodule.c"
      case 25: // $bb34
        var $89=$tree_addr; //@line 1637 "parsermodule.c"
        var $90=$89+20; //@line 1637 "parsermodule.c"
        var $91=HEAP[$90]; //@line 1637 "parsermodule.c"
        var $92=$j; //@line 1637 "parsermodule.c"
        var $93=($92) + 1; //@line 1637 "parsermodule.c"
        var $94=$91+24*$93; //@line 1637 "parsermodule.c"
        var $95=_validate_yield_or_testlist($94); //@line 1637 "parsermodule.c"
        var $96=($95)==0; //@line 1637 "parsermodule.c"
        if ($96) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 1637 "parsermodule.c"
      case 26: // $bb35
        $iftmp_100=1; //@line 1637 "parsermodule.c"
        __label__ = 28; break; //@line 1637 "parsermodule.c"
      case 27: // $bb36
        $iftmp_100=0; //@line 1637 "parsermodule.c"
        __label__ = 28; break; //@line 1637 "parsermodule.c"
      case 28: // $bb37
        var $97=$iftmp_100; //@line 1637 "parsermodule.c"
        $res=$97; //@line 1637 "parsermodule.c"
        var $98=$j; //@line 1636 "parsermodule.c"
        var $99=($98) + 2; //@line 1636 "parsermodule.c"
        $j=$99; //@line 1636 "parsermodule.c"
        __lastLabel__ = 28; __label__ = 29; break; //@line 1636 "parsermodule.c"
      case 29: // $bb38
        var $100=__lastLabel__ == 28 ? $97 : ($_pr);
        var $101=($100)==0; //@line 1636 "parsermodule.c"
        if ($101) { __label__ = 31; break; } else { __label__ = 30; break; } //@line 1636 "parsermodule.c"
      case 30: // $bb39
        var $102=$j; //@line 1636 "parsermodule.c"
        var $103=$nch; //@line 1636 "parsermodule.c"
        var $104=($102) < ($103); //@line 1636 "parsermodule.c"
        if ($104) { __label__ = 24; break; } else { __label__ = 31; break; } //@line 1636 "parsermodule.c"
      case 31: // $bb40
        var $105=$res; //@line 1640 "parsermodule.c"
        $0=$105; //@line 1640 "parsermodule.c"
        var $106=$0; //@line 1640 "parsermodule.c"
        $retval=$106; //@line 1640 "parsermodule.c"
        var $retval41=$retval; //@line 1640 "parsermodule.c"
        ;
        return $retval41; //@line 1640 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_print_stmt($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_103;
        var $iftmp_102;
        var $iftmp_101;
        var $nch;
        var $res;
        var $sym;
        var $i;
        var $allow_trailing_comma;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1652 "parsermodule.c"
        var $2=$1+16; //@line 1652 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1652 "parsermodule.c"
        $nch=$3; //@line 1652 "parsermodule.c"
        var $4=$tree_addr; //@line 1655 "parsermodule.c"
        var $5=_validate_ntype($4, 272); //@line 1655 "parsermodule.c"
        var $6=($5)==0; //@line 1655 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1655 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1655 "parsermodule.c"
        var $8=($7) <= 0; //@line 1655 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1655 "parsermodule.c"
      case 2: // $bb1
        var $9=$tree_addr; //@line 1655 "parsermodule.c"
        var $10=$9+20; //@line 1655 "parsermodule.c"
        var $11=HEAP[$10]; //@line 1655 "parsermodule.c"
        var $12=$11; //@line 1655 "parsermodule.c"
        var $13=_validate_terminal($12, 1, __str104); //@line 1655 "parsermodule.c"
        var $14=($13)==0; //@line 1655 "parsermodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1655 "parsermodule.c"
      case 3: // $bb4
        $iftmp_101=0; //@line 1655 "parsermodule.c"
        $res=0; //@line 1655 "parsermodule.c"
        __label__ = 29; break;
      case 4: // $bb5
        $iftmp_101=1; //@line 1655 "parsermodule.c"
        $res=1; //@line 1655 "parsermodule.c"
        var $15=$nch; //@line 1657 "parsermodule.c"
        var $16=($15) > 1; //@line 1657 "parsermodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 29; break; } //@line 1657 "parsermodule.c"
      case 5: // $bb6
        var $17=$tree_addr; //@line 1658 "parsermodule.c"
        var $18=$17+20; //@line 1658 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1658 "parsermodule.c"
        var $20=$19+24; //@line 1658 "parsermodule.c"
        var $21=$20; //@line 1658 "parsermodule.c"
        var $22=HEAP[$21]; //@line 1658 "parsermodule.c"
        var $23=($22); //@line 1658 "parsermodule.c"
        $sym=$23; //@line 1658 "parsermodule.c"
        $i=1; //@line 1659 "parsermodule.c"
        $allow_trailing_comma=1; //@line 1660 "parsermodule.c"
        var $24=$sym; //@line 1662 "parsermodule.c"
        var $25=($24)==304; //@line 1662 "parsermodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1662 "parsermodule.c"
      case 6: // $bb7
        var $26=$tree_addr; //@line 1663 "parsermodule.c"
        var $27=$26+20; //@line 1663 "parsermodule.c"
        var $28=HEAP[$27]; //@line 1663 "parsermodule.c"
        var $29=$i; //@line 1663 "parsermodule.c"
        var $30=$28+24*$29; //@line 1663 "parsermodule.c"
        var $31=$i; //@line 1663 "parsermodule.c"
        var $32=($31) + 1; //@line 1663 "parsermodule.c"
        $i=$32; //@line 1663 "parsermodule.c"
        var $33=_validate_test($30); //@line 1663 "parsermodule.c"
        $res=$33; //@line 1663 "parsermodule.c"
        __lastLabel__ = 6; __label__ = 14; break; //@line 1663 "parsermodule.c"
      case 7: // $bb8
        var $34=$nch; //@line 1665 "parsermodule.c"
        var $35=($34) <= 2; //@line 1665 "parsermodule.c"
        var $36=$tree_addr; //@line 1666 "parsermodule.c"
        if ($35) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1665 "parsermodule.c"
      case 8: // $bb9
        var $37=_validate_numnodes($36, 3, __str105); //@line 1666 "parsermodule.c"
        $res=$37; //@line 1666 "parsermodule.c"
        __lastLabel__ = 8; __label__ = 14; break; //@line 1666 "parsermodule.c"
      case 9: // $bb10
        var $38=$36+20; //@line 1668 "parsermodule.c"
        var $39=HEAP[$38]; //@line 1668 "parsermodule.c"
        var $40=$i; //@line 1668 "parsermodule.c"
        var $41=$39+24*$40; //@line 1668 "parsermodule.c"
        var $42=_validate_ntype($41, 35); //@line 1668 "parsermodule.c"
        var $43=($42)==0; //@line 1668 "parsermodule.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 1668 "parsermodule.c"
      case 10: // $bb11
        var $44=$tree_addr; //@line 1668 "parsermodule.c"
        var $45=$44+20; //@line 1668 "parsermodule.c"
        var $46=HEAP[$45]; //@line 1668 "parsermodule.c"
        var $47=$i; //@line 1668 "parsermodule.c"
        var $48=($47) + 1; //@line 1668 "parsermodule.c"
        var $49=$46+24*$48; //@line 1668 "parsermodule.c"
        var $50=_validate_test($49); //@line 1668 "parsermodule.c"
        var $51=($50)==0; //@line 1668 "parsermodule.c"
        if ($51) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1668 "parsermodule.c"
      case 11: // $bb12
        $iftmp_102=1; //@line 1668 "parsermodule.c"
        __label__ = 13; break; //@line 1668 "parsermodule.c"
      case 12: // $bb13
        $iftmp_102=0; //@line 1668 "parsermodule.c"
        __label__ = 13; break; //@line 1668 "parsermodule.c"
      case 13: // $bb14
        var $52=$iftmp_102; //@line 1668 "parsermodule.c"
        $res=$52; //@line 1668 "parsermodule.c"
        var $53=$i; //@line 1670 "parsermodule.c"
        var $54=($53) + 2; //@line 1670 "parsermodule.c"
        $i=$54; //@line 1670 "parsermodule.c"
        $allow_trailing_comma=0; //@line 1671 "parsermodule.c"
        __lastLabel__ = 13; __label__ = 14; break; //@line 1671 "parsermodule.c"
      case 14: // $bb15
        var $55=__lastLabel__ == 13 ? $52 : (__lastLabel__ == 8 ? $37 : ($33));
        var $56=($55)!=0; //@line 1674 "parsermodule.c"
        if ($56) { __label__ = 20; break; } else { __label__ = 29; break; } //@line 1674 "parsermodule.c"
      case 15: // $bb17
        var $57=$tree_addr; //@line 1677 "parsermodule.c"
        var $58=$57+20; //@line 1677 "parsermodule.c"
        var $59=HEAP[$58]; //@line 1677 "parsermodule.c"
        var $60=$i; //@line 1677 "parsermodule.c"
        var $61=$59+24*$60; //@line 1677 "parsermodule.c"
        var $62=_validate_terminal($61, 12, __str52); //@line 1677 "parsermodule.c"
        var $63=($62)==0; //@line 1677 "parsermodule.c"
        if ($63) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 1677 "parsermodule.c"
      case 16: // $bb18
        var $64=$tree_addr; //@line 1677 "parsermodule.c"
        var $65=$64+20; //@line 1677 "parsermodule.c"
        var $66=HEAP[$65]; //@line 1677 "parsermodule.c"
        var $67=$i; //@line 1677 "parsermodule.c"
        var $68=($67) + 1; //@line 1677 "parsermodule.c"
        var $69=$66+24*$68; //@line 1677 "parsermodule.c"
        var $70=_validate_test($69); //@line 1677 "parsermodule.c"
        var $71=($70)==0; //@line 1677 "parsermodule.c"
        if ($71) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 1677 "parsermodule.c"
      case 17: // $bb19
        $iftmp_103=1; //@line 1677 "parsermodule.c"
        __label__ = 19; break; //@line 1677 "parsermodule.c"
      case 18: // $bb20
        $iftmp_103=0; //@line 1677 "parsermodule.c"
        __label__ = 19; break; //@line 1677 "parsermodule.c"
      case 19: // $bb21
        var $72=$iftmp_103; //@line 1677 "parsermodule.c"
        $res=$72; //@line 1677 "parsermodule.c"
        $allow_trailing_comma=1; //@line 1679 "parsermodule.c"
        var $73=$i; //@line 1680 "parsermodule.c"
        var $74=($73) + 2; //@line 1680 "parsermodule.c"
        $i=$74; //@line 1680 "parsermodule.c"
        __lastLabel__ = 19; __label__ = 21; break; //@line 1680 "parsermodule.c"
      case 20: // $bb22thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 20; __label__ = 21; break;
      case 21: // $bb22
        var $75=__lastLabel__ == 20 ? $_pr : ($72);
        var $76=($75)==0; //@line 1676 "parsermodule.c"
        if ($76) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 1676 "parsermodule.c"
      case 22: // $bb23
        var $77=$i; //@line 1676 "parsermodule.c"
        var $78=($77) + 2; //@line 1676 "parsermodule.c"
        var $79=$nch; //@line 1676 "parsermodule.c"
        var $80=($78) <= ($79); //@line 1676 "parsermodule.c"
        if ($80) { __label__ = 15; break; } else { __label__ = 23; break; } //@line 1676 "parsermodule.c"
      case 23: // $bb24
        var $81=$res; //@line 1682 "parsermodule.c"
        var $82=($81)==0; //@line 1682 "parsermodule.c"
        if ($82) { __label__ = 29; break; } else { __label__ = 24; break; } //@line 1682 "parsermodule.c"
      case 24: // $bb25
        var $83=$allow_trailing_comma; //@line 1682 "parsermodule.c"
        var $84=($83)!=0; //@line 1682 "parsermodule.c"
        if ($84) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 1682 "parsermodule.c"
      case 25: // $bb26
        var $85=$tree_addr; //@line 1683 "parsermodule.c"
        var $86=$i; //@line 1683 "parsermodule.c"
        var $87=_validate_numnodes($85, $86, __str105); //@line 1683 "parsermodule.c"
        $res=$87; //@line 1683 "parsermodule.c"
        __label__ = 29; break; //@line 1683 "parsermodule.c"
      case 26: // $bb27
        var $_pr1=$res;
        var $88=($_pr1)!=0; //@line 1684 "parsermodule.c"
        if ($88) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 1684 "parsermodule.c"
      case 27: // $bb28
        var $89=$i; //@line 1684 "parsermodule.c"
        var $90=$nch; //@line 1684 "parsermodule.c"
        var $91=($89) < ($90); //@line 1684 "parsermodule.c"
        if ($91) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1684 "parsermodule.c"
      case 28: // $bb29
        var $92=$tree_addr; //@line 1685 "parsermodule.c"
        var $93=$92+20; //@line 1685 "parsermodule.c"
        var $94=HEAP[$93]; //@line 1685 "parsermodule.c"
        var $95=$i; //@line 1685 "parsermodule.c"
        var $96=$94+24*$95; //@line 1685 "parsermodule.c"
        var $97=_validate_terminal($96, 12, __str52); //@line 1685 "parsermodule.c"
        $res=$97; //@line 1685 "parsermodule.c"
        __label__ = 29; break; //@line 1685 "parsermodule.c"
      case 29: // $bb30
        var $98=$res; //@line 1688 "parsermodule.c"
        $0=$98; //@line 1688 "parsermodule.c"
        var $99=$0; //@line 1688 "parsermodule.c"
        $retval=$99; //@line 1688 "parsermodule.c"
        var $retval31=$retval; //@line 1688 "parsermodule.c"
        ;
        return $retval31; //@line 1688 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_del_stmt($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $iftmp_104;
        var $0;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1695 "parsermodule.c"
        var $2=_validate_numnodes($1, 2, __str106); //@line 1695 "parsermodule.c"
        var $3=($2)==0; //@line 1695 "parsermodule.c"
        if ($3) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1695 "parsermodule.c"
      case 1: // $bb
        var $4=$tree_addr; //@line 1695 "parsermodule.c"
        var $5=$4+20; //@line 1695 "parsermodule.c"
        var $6=HEAP[$5]; //@line 1695 "parsermodule.c"
        var $7=$6; //@line 1695 "parsermodule.c"
        var $8=_validate_terminal($7, 1, __str107); //@line 1695 "parsermodule.c"
        var $9=($8)==0; //@line 1695 "parsermodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1695 "parsermodule.c"
      case 2: // $bb1
        var $10=$tree_addr; //@line 1695 "parsermodule.c"
        var $11=$10+20; //@line 1695 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1695 "parsermodule.c"
        var $13=$12+24; //@line 1695 "parsermodule.c"
        var $14=_validate_exprlist($13); //@line 1695 "parsermodule.c"
        var $15=($14)==0; //@line 1695 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1695 "parsermodule.c"
      case 3: // $bb2
        $iftmp_104=1; //@line 1695 "parsermodule.c"
        __label__ = 5; break; //@line 1695 "parsermodule.c"
      case 4: // $bb3
        $iftmp_104=0; //@line 1695 "parsermodule.c"
        __label__ = 5; break; //@line 1695 "parsermodule.c"
      case 5: // $bb4
        var $16=$iftmp_104; //@line 1695 "parsermodule.c"
        $0=$16; //@line 1695 "parsermodule.c"
        var $17=$0; //@line 1695 "parsermodule.c"
        $retval=$17; //@line 1695 "parsermodule.c"
        var $retval5=$retval; //@line 1695 "parsermodule.c"
        ;
        return $retval5; //@line 1695 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_return_stmt($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_105;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1704 "parsermodule.c"
        var $2=$1+16; //@line 1704 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1704 "parsermodule.c"
        $nch=$3; //@line 1704 "parsermodule.c"
        var $4=$tree_addr; //@line 1707 "parsermodule.c"
        var $5=_validate_ntype($4, 278); //@line 1707 "parsermodule.c"
        var $6=($5)==0; //@line 1707 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1707 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1707 "parsermodule.c"
        var $8=($7)==1; //@line 1707 "parsermodule.c"
        var $9=$nch; //@line 1707 "parsermodule.c"
        var $10=($9)==2; //@line 1707 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1707 "parsermodule.c"
      case 2: // $bb2
        var $11=$tree_addr; //@line 1707 "parsermodule.c"
        var $12=$11+20; //@line 1707 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1707 "parsermodule.c"
        var $14=$13; //@line 1707 "parsermodule.c"
        var $15=_validate_terminal($14, 1, __str108); //@line 1707 "parsermodule.c"
        var $16=($15)==0; //@line 1707 "parsermodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1707 "parsermodule.c"
      case 3: // $bb5
        $iftmp_105=0; //@line 1707 "parsermodule.c"
        $res=0; //@line 1707 "parsermodule.c"
        __label__ = 6; break;
      case 4: // $bb6
        $iftmp_105=1; //@line 1707 "parsermodule.c"
        $res=1; //@line 1707 "parsermodule.c"
        var $17=$nch; //@line 1709 "parsermodule.c"
        var $18=($17)==2; //@line 1709 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1709 "parsermodule.c"
      case 5: // $bb7
        var $19=$tree_addr; //@line 1710 "parsermodule.c"
        var $20=$19+20; //@line 1710 "parsermodule.c"
        var $21=HEAP[$20]; //@line 1710 "parsermodule.c"
        var $22=$21+24; //@line 1710 "parsermodule.c"
        var $23=_validate_testlist($22); //@line 1710 "parsermodule.c"
        $res=$23; //@line 1710 "parsermodule.c"
        __label__ = 6; break; //@line 1710 "parsermodule.c"
      case 6: // $bb8
        var $24=$res; //@line 1712 "parsermodule.c"
        $0=$24; //@line 1712 "parsermodule.c"
        var $25=$0; //@line 1712 "parsermodule.c"
        $retval=$25; //@line 1712 "parsermodule.c"
        var $retval9=$retval; //@line 1712 "parsermodule.c"
        ;
        return $retval9; //@line 1712 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_raise_stmt($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_109;
        var $iftmp_108;
        var $iftmp_107;
        var $iftmp_106;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1719 "parsermodule.c"
        var $2=$1+16; //@line 1719 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1719 "parsermodule.c"
        $nch=$3; //@line 1719 "parsermodule.c"
        var $4=$tree_addr; //@line 1721 "parsermodule.c"
        var $5=_validate_ntype($4, 280); //@line 1721 "parsermodule.c"
        var $6=($5)==0; //@line 1721 "parsermodule.c"
        if ($6) { __label__ = 17; break; } else { __label__ = 1; break; } //@line 1721 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1721 "parsermodule.c"
        var $8=($7)==1; //@line 1721 "parsermodule.c"
        var $9=$nch; //@line 1721 "parsermodule.c"
        var $10=($9)==2; //@line 1721 "parsermodule.c"
        var $or_cond=($8) | ($10);
        var $11=$nch; //@line 1721 "parsermodule.c"
        var $12=($11)==4; //@line 1721 "parsermodule.c"
        var $or_cond3=($or_cond) | ($12);
        var $13=$nch; //@line 1721 "parsermodule.c"
        var $14=($13)==6; //@line 1721 "parsermodule.c"
        var $or_cond5=($or_cond3) | ($14);
        if ($or_cond5) { __label__ = 2; break; } else { __label__ = 17; break; } //@line 1721 "parsermodule.c"
      case 2: // $bb7
        $iftmp_106=1; //@line 1721 "parsermodule.c"
        $res=1; //@line 1721 "parsermodule.c"
        var $15=$tree_addr; //@line 1724 "parsermodule.c"
        var $16=$15+20; //@line 1724 "parsermodule.c"
        var $17=HEAP[$16]; //@line 1724 "parsermodule.c"
        var $18=$17; //@line 1724 "parsermodule.c"
        var $19=_validate_terminal($18, 1, __str109); //@line 1724 "parsermodule.c"
        $res=$19; //@line 1724 "parsermodule.c"
        var $20=$res; //@line 1725 "parsermodule.c"
        var $21=($20)!=0; //@line 1725 "parsermodule.c"
        if ($21) { __label__ = 3; break; } else { __label__ = 18; break; } //@line 1725 "parsermodule.c"
      case 3: // $bb8
        var $22=$nch; //@line 1725 "parsermodule.c"
        var $23=($22) > 1; //@line 1725 "parsermodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1725 "parsermodule.c"
      case 4: // $bb9
        var $24=$tree_addr; //@line 1726 "parsermodule.c"
        var $25=$24+20; //@line 1726 "parsermodule.c"
        var $26=HEAP[$25]; //@line 1726 "parsermodule.c"
        var $27=$26+24; //@line 1726 "parsermodule.c"
        var $28=_validate_test($27); //@line 1726 "parsermodule.c"
        $res=$28; //@line 1726 "parsermodule.c"
        __lastLabel__ = 4; __label__ = 6; break; //@line 1726 "parsermodule.c"
      case 5: // $bb10thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 5; __label__ = 6; break;
      case 6: // $bb10
        var $29=__lastLabel__ == 5 ? $_pr : ($28);
        var $30=($29)!=0; //@line 1727 "parsermodule.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 18; break; } //@line 1727 "parsermodule.c"
      case 7: // $bb11
        var $31=$nch; //@line 1727 "parsermodule.c"
        var $32=($31) > 2; //@line 1727 "parsermodule.c"
        if ($32) { __label__ = 8; break; } else { __label__ = 18; break; } //@line 1727 "parsermodule.c"
      case 8: // $bb12
        var $33=$tree_addr; //@line 1728 "parsermodule.c"
        var $34=$33+20; //@line 1728 "parsermodule.c"
        var $35=HEAP[$34]; //@line 1728 "parsermodule.c"
        var $36=$35+48; //@line 1728 "parsermodule.c"
        var $37=_validate_terminal($36, 12, __str52); //@line 1728 "parsermodule.c"
        var $38=($37)==0; //@line 1728 "parsermodule.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 1728 "parsermodule.c"
      case 9: // $bb13
        var $39=$tree_addr; //@line 1728 "parsermodule.c"
        var $40=$39+20; //@line 1728 "parsermodule.c"
        var $41=HEAP[$40]; //@line 1728 "parsermodule.c"
        var $42=$41+72; //@line 1728 "parsermodule.c"
        var $43=_validate_test($42); //@line 1728 "parsermodule.c"
        var $44=($43)==0; //@line 1728 "parsermodule.c"
        if ($44) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1728 "parsermodule.c"
      case 10: // $bb25_thread7
        $iftmp_107=0; //@line 1728 "parsermodule.c"
        $res=0; //@line 1728 "parsermodule.c"
        __label__ = 27; break;
      case 11: // $bb17
        $iftmp_107=1; //@line 1728 "parsermodule.c"
        $res=1; //@line 1728 "parsermodule.c"
        var $45=$nch; //@line 1730 "parsermodule.c"
        var $46=($45) > 4; //@line 1730 "parsermodule.c"
        if ($46) { __lastLabel__ = 11; __label__ = 12; break; } else { __lastLabel__ = 11; __label__ = 21; break; } //@line 1730 "parsermodule.c"
      case 12: // $bb18
        var $47=$tree_addr; //@line 1731 "parsermodule.c"
        var $48=$47+20; //@line 1731 "parsermodule.c"
        var $49=HEAP[$48]; //@line 1731 "parsermodule.c"
        var $50=$49+96; //@line 1731 "parsermodule.c"
        var $51=_validate_terminal($50, 12, __str52); //@line 1731 "parsermodule.c"
        var $52=($51)==0; //@line 1731 "parsermodule.c"
        if ($52) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 1731 "parsermodule.c"
      case 13: // $bb19
        var $53=$tree_addr; //@line 1731 "parsermodule.c"
        var $54=$53+20; //@line 1731 "parsermodule.c"
        var $55=HEAP[$54]; //@line 1731 "parsermodule.c"
        var $56=$55+120; //@line 1731 "parsermodule.c"
        var $57=_validate_test($56); //@line 1731 "parsermodule.c"
        var $58=($57)==0; //@line 1731 "parsermodule.c"
        if ($58) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 1731 "parsermodule.c"
      case 14: // $bb20
        $iftmp_108=1; //@line 1731 "parsermodule.c"
        __label__ = 16; break; //@line 1731 "parsermodule.c"
      case 15: // $bb21
        $iftmp_108=0; //@line 1731 "parsermodule.c"
        __label__ = 16; break; //@line 1731 "parsermodule.c"
      case 16: // $bb22
        var $59=$iftmp_108; //@line 1731 "parsermodule.c"
        $res=$59; //@line 1731 "parsermodule.c"
        __lastLabel__ = 16; __label__ = 19; break; //@line 1731 "parsermodule.c"
      case 17: // $bb24
        $iftmp_106=0; //@line 1721 "parsermodule.c"
        $res=0; //@line 1721 "parsermodule.c"
        var $60=$tree_addr; //@line 1724 "parsermodule.c"
        var $61=_validate_numnodes($60, 2, __str109); //@line 1736 "parsermodule.c"
        __label__ = 18; break; //@line 1736 "parsermodule.c"
      case 18: // $bb25thread_pre_split
        var $_pr6=$res;
        __lastLabel__ = 18; __label__ = 19; break;
      case 19: // $bb25
        var $62=__lastLabel__ == 18 ? $_pr6 : ($59);
        var $63=($62)!=0; //@line 1737 "parsermodule.c"
        if ($63) { __label__ = 20; break; } else { __label__ = 27; break; } //@line 1737 "parsermodule.c"
      case 20: // $bb26thread_pre_split
        var $_pr8=$nch;
        __lastLabel__ = 20; __label__ = 21; break;
      case 21: // $bb26
        var $64=__lastLabel__ == 20 ? $_pr8 : ($45);
        var $65=($64)==4; //@line 1737 "parsermodule.c"
        if ($65) { __label__ = 22; break; } else { __label__ = 27; break; } //@line 1737 "parsermodule.c"
      case 22: // $bb27
        var $66=$tree_addr; //@line 1738 "parsermodule.c"
        var $67=$66+20; //@line 1738 "parsermodule.c"
        var $68=HEAP[$67]; //@line 1738 "parsermodule.c"
        var $69=$68+48; //@line 1738 "parsermodule.c"
        var $70=_validate_terminal($69, 12, __str52); //@line 1738 "parsermodule.c"
        var $71=($70)==0; //@line 1738 "parsermodule.c"
        if ($71) { __label__ = 25; break; } else { __label__ = 23; break; } //@line 1738 "parsermodule.c"
      case 23: // $bb28
        var $72=$tree_addr; //@line 1738 "parsermodule.c"
        var $73=$72+20; //@line 1738 "parsermodule.c"
        var $74=HEAP[$73]; //@line 1738 "parsermodule.c"
        var $75=$74+72; //@line 1738 "parsermodule.c"
        var $76=_validate_test($75); //@line 1738 "parsermodule.c"
        var $77=($76)==0; //@line 1738 "parsermodule.c"
        if ($77) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 1738 "parsermodule.c"
      case 24: // $bb29
        $iftmp_109=1; //@line 1738 "parsermodule.c"
        __label__ = 26; break; //@line 1738 "parsermodule.c"
      case 25: // $bb30
        $iftmp_109=0; //@line 1738 "parsermodule.c"
        __label__ = 26; break; //@line 1738 "parsermodule.c"
      case 26: // $bb31
        var $78=$iftmp_109; //@line 1738 "parsermodule.c"
        $res=$78; //@line 1738 "parsermodule.c"
        __label__ = 27; break; //@line 1738 "parsermodule.c"
      case 27: // $bb32
        var $79=$res; //@line 1741 "parsermodule.c"
        $0=$79; //@line 1741 "parsermodule.c"
        var $80=$0; //@line 1741 "parsermodule.c"
        $retval=$80; //@line 1741 "parsermodule.c"
        var $retval33=$retval; //@line 1741 "parsermodule.c"
        ;
        return $retval33; //@line 1741 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_yield_expr($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_110;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1750 "parsermodule.c"
        var $2=$1+16; //@line 1750 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1750 "parsermodule.c"
        $nch=$3; //@line 1750 "parsermodule.c"
        var $4=$tree_addr; //@line 1753 "parsermodule.c"
        var $5=_validate_ntype($4, 340); //@line 1753 "parsermodule.c"
        var $6=($5)==0; //@line 1753 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1753 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1753 "parsermodule.c"
        var $8=($7)==1; //@line 1753 "parsermodule.c"
        var $9=$nch; //@line 1753 "parsermodule.c"
        var $10=($9)==2; //@line 1753 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1753 "parsermodule.c"
      case 2: // $bb2
        var $11=$tree_addr; //@line 1753 "parsermodule.c"
        var $12=$11+20; //@line 1753 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1753 "parsermodule.c"
        var $14=$13; //@line 1753 "parsermodule.c"
        var $15=_validate_terminal($14, 1, __str110); //@line 1753 "parsermodule.c"
        var $16=($15)==0; //@line 1753 "parsermodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1753 "parsermodule.c"
      case 3: // $bb5
        $iftmp_110=0; //@line 1753 "parsermodule.c"
        $res=0; //@line 1753 "parsermodule.c"
        __label__ = 6; break;
      case 4: // $bb6
        $iftmp_110=1; //@line 1753 "parsermodule.c"
        $res=1; //@line 1753 "parsermodule.c"
        var $17=$nch; //@line 1755 "parsermodule.c"
        var $18=($17)==2; //@line 1755 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1755 "parsermodule.c"
      case 5: // $bb7
        var $19=$tree_addr; //@line 1756 "parsermodule.c"
        var $20=$19+20; //@line 1756 "parsermodule.c"
        var $21=HEAP[$20]; //@line 1756 "parsermodule.c"
        var $22=$21+24; //@line 1756 "parsermodule.c"
        var $23=_validate_testlist($22); //@line 1756 "parsermodule.c"
        $res=$23; //@line 1756 "parsermodule.c"
        __label__ = 6; break; //@line 1756 "parsermodule.c"
      case 6: // $bb8
        var $24=$res; //@line 1758 "parsermodule.c"
        $0=$24; //@line 1758 "parsermodule.c"
        var $25=$0; //@line 1758 "parsermodule.c"
        $retval=$25; //@line 1758 "parsermodule.c"
        var $retval9=$retval; //@line 1758 "parsermodule.c"
        ;
        return $retval9; //@line 1758 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_yield_stmt($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $iftmp_111;
        var $0;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1767 "parsermodule.c"
        var $2=_validate_ntype($1, 279); //@line 1767 "parsermodule.c"
        var $3=($2)==0; //@line 1767 "parsermodule.c"
        if ($3) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1767 "parsermodule.c"
      case 1: // $bb
        var $4=$tree_addr; //@line 1767 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, __str111); //@line 1767 "parsermodule.c"
        var $6=($5)==0; //@line 1767 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1767 "parsermodule.c"
      case 2: // $bb1
        var $7=$tree_addr; //@line 1767 "parsermodule.c"
        var $8=$7+20; //@line 1767 "parsermodule.c"
        var $9=HEAP[$8]; //@line 1767 "parsermodule.c"
        var $10=$9; //@line 1767 "parsermodule.c"
        var $11=_validate_yield_expr($10); //@line 1767 "parsermodule.c"
        var $12=($11)==0; //@line 1767 "parsermodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1767 "parsermodule.c"
      case 3: // $bb2
        $iftmp_111=1; //@line 1767 "parsermodule.c"
        __label__ = 5; break; //@line 1767 "parsermodule.c"
      case 4: // $bb3
        $iftmp_111=0; //@line 1767 "parsermodule.c"
        __label__ = 5; break; //@line 1767 "parsermodule.c"
      case 5: // $bb4
        var $13=$iftmp_111; //@line 1767 "parsermodule.c"
        $0=$13; //@line 1767 "parsermodule.c"
        var $14=$0; //@line 1767 "parsermodule.c"
        $retval=$14; //@line 1767 "parsermodule.c"
        var $retval5=$retval; //@line 1767 "parsermodule.c"
        ;
        return $retval5; //@line 1767 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_import_as_name($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_112;
        var $nch;
        var $ok;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1776 "parsermodule.c"
        var $2=$1+16; //@line 1776 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1776 "parsermodule.c"
        $nch=$3; //@line 1776 "parsermodule.c"
        var $4=$tree_addr; //@line 1777 "parsermodule.c"
        var $5=_validate_ntype($4, 284); //@line 1777 "parsermodule.c"
        $ok=$5; //@line 1777 "parsermodule.c"
        var $6=$ok; //@line 1779 "parsermodule.c"
        var $7=($6)!=0; //@line 1779 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 11; break; } //@line 1779 "parsermodule.c"
      case 1: // $bb
        var $8=$nch; //@line 1780 "parsermodule.c"
        var $9=($8)==1; //@line 1780 "parsermodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1780 "parsermodule.c"
      case 2: // $bb1
        var $10=$tree_addr; //@line 1781 "parsermodule.c"
        var $11=$10+20; //@line 1781 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1781 "parsermodule.c"
        var $13=$12; //@line 1781 "parsermodule.c"
        var $14=_validate_terminal($13, 1, 0); //@line 1781 "parsermodule.c"
        $ok=$14; //@line 1781 "parsermodule.c"
        __label__ = 11; break; //@line 1781 "parsermodule.c"
      case 3: // $bb2
        var $15=$nch; //@line 1782 "parsermodule.c"
        var $16=($15)==3; //@line 1782 "parsermodule.c"
        var $17=$tree_addr; //@line 1783 "parsermodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 1782 "parsermodule.c"
      case 4: // $bb3
        var $18=$17+20; //@line 1783 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1783 "parsermodule.c"
        var $20=$19; //@line 1783 "parsermodule.c"
        var $21=_validate_terminal($20, 1, 0); //@line 1783 "parsermodule.c"
        var $22=($21)==0; //@line 1783 "parsermodule.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 1783 "parsermodule.c"
      case 5: // $bb4
        var $23=$tree_addr; //@line 1783 "parsermodule.c"
        var $24=$23+20; //@line 1783 "parsermodule.c"
        var $25=HEAP[$24]; //@line 1783 "parsermodule.c"
        var $26=$25+24; //@line 1783 "parsermodule.c"
        var $27=_validate_terminal($26, 1, __str112); //@line 1783 "parsermodule.c"
        var $28=($27)==0; //@line 1783 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1783 "parsermodule.c"
      case 6: // $bb5
        var $29=$tree_addr; //@line 1783 "parsermodule.c"
        var $30=$29+20; //@line 1783 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1783 "parsermodule.c"
        var $32=$31+48; //@line 1783 "parsermodule.c"
        var $33=_validate_terminal($32, 1, 0); //@line 1783 "parsermodule.c"
        var $34=($33)==0; //@line 1783 "parsermodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1783 "parsermodule.c"
      case 7: // $bb6
        $iftmp_112=1; //@line 1783 "parsermodule.c"
        __label__ = 9; break; //@line 1783 "parsermodule.c"
      case 8: // $bb7
        $iftmp_112=0; //@line 1783 "parsermodule.c"
        __label__ = 9; break; //@line 1783 "parsermodule.c"
      case 9: // $bb8
        var $35=$iftmp_112; //@line 1783 "parsermodule.c"
        $ok=$35; //@line 1783 "parsermodule.c"
        __label__ = 11; break; //@line 1783 "parsermodule.c"
      case 10: // $bb9
        var $36=_validate_numnodes($17, 3, __str113); //@line 1787 "parsermodule.c"
        $ok=$36; //@line 1787 "parsermodule.c"
        __label__ = 11; break; //@line 1787 "parsermodule.c"
      case 11: // $bb10
        var $37=$ok; //@line 1789 "parsermodule.c"
        $0=$37; //@line 1789 "parsermodule.c"
        var $38=$0; //@line 1789 "parsermodule.c"
        $retval=$38; //@line 1789 "parsermodule.c"
        var $retval11=$retval; //@line 1789 "parsermodule.c"
        ;
        return $retval11; //@line 1789 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_dotted_name($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_114;
        var $iftmp_113;
        var $nch;
        var $res;
        var $i;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1798 "parsermodule.c"
        var $2=$1+16; //@line 1798 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1798 "parsermodule.c"
        $nch=$3; //@line 1798 "parsermodule.c"
        var $4=$tree_addr; //@line 1801 "parsermodule.c"
        var $5=_validate_ntype($4, 288); //@line 1801 "parsermodule.c"
        var $6=($5)==0; //@line 1801 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1801 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1801 "parsermodule.c"
        var $8=($7) & 1; //@line 1801 "parsermodule.c"
        var $9=((($8)) & 255); //@line 1801 "parsermodule.c"
        var $toBool=($9)!=0; //@line 1801 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1801 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 1801 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 1801 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1801 "parsermodule.c"
      case 2: // $bb4
        var $10=$tree_addr; //@line 1801 "parsermodule.c"
        var $11=$10+20; //@line 1801 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1801 "parsermodule.c"
        var $13=$12; //@line 1801 "parsermodule.c"
        var $14=_validate_terminal($13, 1, 0); //@line 1801 "parsermodule.c"
        var $15=($14)==0; //@line 1801 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1801 "parsermodule.c"
      case 3: // $bb5
        $iftmp_113=1; //@line 1801 "parsermodule.c"
        __label__ = 5; break; //@line 1801 "parsermodule.c"
      case 4: // $bb6
        $iftmp_113=0; //@line 1801 "parsermodule.c"
        __label__ = 5; break; //@line 1801 "parsermodule.c"
      case 5: // $bb7
        var $16=$iftmp_113; //@line 1801 "parsermodule.c"
        $res=$16; //@line 1801 "parsermodule.c"
        $i=1; //@line 1804 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 11; break; //@line 1804 "parsermodule.c"
      case 6: // $bb8
        var $17=$tree_addr; //@line 1805 "parsermodule.c"
        var $18=$17+20; //@line 1805 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1805 "parsermodule.c"
        var $20=$i; //@line 1805 "parsermodule.c"
        var $21=$19+24*$20; //@line 1805 "parsermodule.c"
        var $22=_validate_terminal($21, 23, __str114); //@line 1805 "parsermodule.c"
        var $23=($22)==0; //@line 1805 "parsermodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1805 "parsermodule.c"
      case 7: // $bb9
        var $24=$tree_addr; //@line 1805 "parsermodule.c"
        var $25=$24+20; //@line 1805 "parsermodule.c"
        var $26=HEAP[$25]; //@line 1805 "parsermodule.c"
        var $27=$i; //@line 1805 "parsermodule.c"
        var $28=($27) + 1; //@line 1805 "parsermodule.c"
        var $29=$26+24*$28; //@line 1805 "parsermodule.c"
        var $30=_validate_terminal($29, 1, 0); //@line 1805 "parsermodule.c"
        var $31=($30)==0; //@line 1805 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1805 "parsermodule.c"
      case 8: // $bb10
        $iftmp_114=1; //@line 1805 "parsermodule.c"
        __label__ = 10; break; //@line 1805 "parsermodule.c"
      case 9: // $bb11
        $iftmp_114=0; //@line 1805 "parsermodule.c"
        __label__ = 10; break; //@line 1805 "parsermodule.c"
      case 10: // $bb12
        var $32=$iftmp_114; //@line 1805 "parsermodule.c"
        $res=$32; //@line 1805 "parsermodule.c"
        var $33=$i; //@line 1804 "parsermodule.c"
        var $34=($33) + 2; //@line 1804 "parsermodule.c"
        $i=$34; //@line 1804 "parsermodule.c"
        __lastLabel__ = 10; __label__ = 11; break; //@line 1804 "parsermodule.c"
      case 11: // $bb13
        var $35=__lastLabel__ == 10 ? $32 : ($16);
        var $36=($35)==0; //@line 1804 "parsermodule.c"
        if ($36) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 1804 "parsermodule.c"
      case 12: // $bb14
        var $37=$i; //@line 1804 "parsermodule.c"
        var $38=$nch; //@line 1804 "parsermodule.c"
        var $39=($37) < ($38); //@line 1804 "parsermodule.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 1804 "parsermodule.c"
      case 13: // $bb15
        var $40=$res; //@line 1808 "parsermodule.c"
        $0=$40; //@line 1808 "parsermodule.c"
        var $41=$0; //@line 1808 "parsermodule.c"
        $retval=$41; //@line 1808 "parsermodule.c"
        var $retval16=$retval; //@line 1808 "parsermodule.c"
        ;
        return $retval16; //@line 1808 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_dotted_as_name($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_115;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1817 "parsermodule.c"
        var $2=$1+16; //@line 1817 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1817 "parsermodule.c"
        $nch=$3; //@line 1817 "parsermodule.c"
        var $4=$tree_addr; //@line 1818 "parsermodule.c"
        var $5=_validate_ntype($4, 285); //@line 1818 "parsermodule.c"
        $res=$5; //@line 1818 "parsermodule.c"
        var $6=$res; //@line 1820 "parsermodule.c"
        var $7=($6)!=0; //@line 1820 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 11; break; } //@line 1820 "parsermodule.c"
      case 1: // $bb
        var $8=$nch; //@line 1821 "parsermodule.c"
        var $9=($8)==1; //@line 1821 "parsermodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1821 "parsermodule.c"
      case 2: // $bb1
        var $10=$tree_addr; //@line 1822 "parsermodule.c"
        var $11=$10+20; //@line 1822 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1822 "parsermodule.c"
        var $13=$12; //@line 1822 "parsermodule.c"
        var $14=_validate_dotted_name($13); //@line 1822 "parsermodule.c"
        $res=$14; //@line 1822 "parsermodule.c"
        __label__ = 11; break; //@line 1822 "parsermodule.c"
      case 3: // $bb2
        var $15=$nch; //@line 1823 "parsermodule.c"
        var $16=($15)==3; //@line 1823 "parsermodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 1823 "parsermodule.c"
      case 4: // $bb3
        var $17=$tree_addr; //@line 1824 "parsermodule.c"
        var $18=$17+20; //@line 1824 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1824 "parsermodule.c"
        var $20=$19; //@line 1824 "parsermodule.c"
        var $21=_validate_dotted_name($20); //@line 1824 "parsermodule.c"
        var $22=($21)==0; //@line 1824 "parsermodule.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 1824 "parsermodule.c"
      case 5: // $bb4
        var $23=$tree_addr; //@line 1824 "parsermodule.c"
        var $24=$23+20; //@line 1824 "parsermodule.c"
        var $25=HEAP[$24]; //@line 1824 "parsermodule.c"
        var $26=$25+24; //@line 1824 "parsermodule.c"
        var $27=_validate_terminal($26, 1, __str112); //@line 1824 "parsermodule.c"
        var $28=($27)==0; //@line 1824 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1824 "parsermodule.c"
      case 6: // $bb5
        var $29=$tree_addr; //@line 1824 "parsermodule.c"
        var $30=$29+20; //@line 1824 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1824 "parsermodule.c"
        var $32=$31+48; //@line 1824 "parsermodule.c"
        var $33=_validate_terminal($32, 1, 0); //@line 1824 "parsermodule.c"
        var $34=($33)==0; //@line 1824 "parsermodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1824 "parsermodule.c"
      case 7: // $bb6
        $iftmp_115=1; //@line 1824 "parsermodule.c"
        __label__ = 9; break; //@line 1824 "parsermodule.c"
      case 8: // $bb7
        $iftmp_115=0; //@line 1824 "parsermodule.c"
        __label__ = 9; break; //@line 1824 "parsermodule.c"
      case 9: // $bb8
        var $35=$iftmp_115; //@line 1824 "parsermodule.c"
        $res=$35; //@line 1824 "parsermodule.c"
        __label__ = 11; break; //@line 1824 "parsermodule.c"
      case 10: // $bb9
        $res=0; //@line 1828 "parsermodule.c"
        _err_string(__str115); //@line 1829 "parsermodule.c"
        __label__ = 11; break; //@line 1829 "parsermodule.c"
      case 11: // $bb10
        var $36=$res; //@line 1832 "parsermodule.c"
        $0=$36; //@line 1832 "parsermodule.c"
        var $37=$0; //@line 1832 "parsermodule.c"
        $retval=$37; //@line 1832 "parsermodule.c"
        var $retval11=$retval; //@line 1832 "parsermodule.c"
        ;
        return $retval11; //@line 1832 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_dotted_as_names($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_117;
        var $iftmp_116;
        var $nch;
        var $res;
        var $i;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1840 "parsermodule.c"
        var $2=$1+16; //@line 1840 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1840 "parsermodule.c"
        $nch=$3; //@line 1840 "parsermodule.c"
        var $4=$nch; //@line 1841 "parsermodule.c"
        var $5=($4) & 1; //@line 1841 "parsermodule.c"
        var $6=((($5)) & 255); //@line 1841 "parsermodule.c"
        var $toBool=($6)!=0; //@line 1841 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1841 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 1841 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 1841 "parsermodule.c"
        if ($toBool3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1841 "parsermodule.c"
      case 1: // $bb
        var $7=$tree_addr; //@line 1841 "parsermodule.c"
        var $8=$7+20; //@line 1841 "parsermodule.c"
        var $9=HEAP[$8]; //@line 1841 "parsermodule.c"
        var $10=$9; //@line 1841 "parsermodule.c"
        var $11=_validate_dotted_as_name($10); //@line 1841 "parsermodule.c"
        var $12=($11)==0; //@line 1841 "parsermodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1841 "parsermodule.c"
      case 2: // $bb4
        $iftmp_116=1; //@line 1841 "parsermodule.c"
        __label__ = 4; break; //@line 1841 "parsermodule.c"
      case 3: // $bb5
        $iftmp_116=0; //@line 1841 "parsermodule.c"
        __label__ = 4; break; //@line 1841 "parsermodule.c"
      case 4: // $bb6
        var $13=$iftmp_116; //@line 1841 "parsermodule.c"
        $res=$13; //@line 1841 "parsermodule.c"
        $i=1; //@line 1844 "parsermodule.c"
        __lastLabel__ = 4; __label__ = 10; break; //@line 1844 "parsermodule.c"
      case 5: // $bb7
        var $14=$tree_addr; //@line 1845 "parsermodule.c"
        var $15=$14+20; //@line 1845 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1845 "parsermodule.c"
        var $17=$i; //@line 1845 "parsermodule.c"
        var $18=$16+24*$17; //@line 1845 "parsermodule.c"
        var $19=_validate_terminal($18, 12, __str52); //@line 1845 "parsermodule.c"
        var $20=($19)==0; //@line 1845 "parsermodule.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1845 "parsermodule.c"
      case 6: // $bb8
        var $21=$tree_addr; //@line 1845 "parsermodule.c"
        var $22=$21+20; //@line 1845 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1845 "parsermodule.c"
        var $24=$i; //@line 1845 "parsermodule.c"
        var $25=($24) + 1; //@line 1845 "parsermodule.c"
        var $26=$23+24*$25; //@line 1845 "parsermodule.c"
        var $27=_validate_dotted_as_name($26); //@line 1845 "parsermodule.c"
        var $28=($27)==0; //@line 1845 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1845 "parsermodule.c"
      case 7: // $bb9
        $iftmp_117=1; //@line 1845 "parsermodule.c"
        __label__ = 9; break; //@line 1845 "parsermodule.c"
      case 8: // $bb10
        $iftmp_117=0; //@line 1845 "parsermodule.c"
        __label__ = 9; break; //@line 1845 "parsermodule.c"
      case 9: // $bb11
        var $29=$iftmp_117; //@line 1845 "parsermodule.c"
        $res=$29; //@line 1845 "parsermodule.c"
        var $30=$i; //@line 1844 "parsermodule.c"
        var $31=($30) + 2; //@line 1844 "parsermodule.c"
        $i=$31; //@line 1844 "parsermodule.c"
        __lastLabel__ = 9; __label__ = 10; break; //@line 1844 "parsermodule.c"
      case 10: // $bb12
        var $32=__lastLabel__ == 9 ? $29 : ($13);
        var $33=($32)==0; //@line 1844 "parsermodule.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1844 "parsermodule.c"
      case 11: // $bb13
        var $34=$i; //@line 1844 "parsermodule.c"
        var $35=$nch; //@line 1844 "parsermodule.c"
        var $36=($34) < ($35); //@line 1844 "parsermodule.c"
        if ($36) { __label__ = 5; break; } else { __label__ = 12; break; } //@line 1844 "parsermodule.c"
      case 12: // $bb14
        var $37=$res; //@line 1847 "parsermodule.c"
        $0=$37; //@line 1847 "parsermodule.c"
        var $38=$0; //@line 1847 "parsermodule.c"
        $retval=$38; //@line 1847 "parsermodule.c"
        var $retval15=$retval; //@line 1847 "parsermodule.c"
        ;
        return $retval15; //@line 1847 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_import_as_names($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_118;
        var $nch;
        var $res;
        var $i;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1855 "parsermodule.c"
        var $2=$1+16; //@line 1855 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1855 "parsermodule.c"
        $nch=$3; //@line 1855 "parsermodule.c"
        var $4=$tree_addr; //@line 1856 "parsermodule.c"
        var $5=$4+20; //@line 1856 "parsermodule.c"
        var $6=HEAP[$5]; //@line 1856 "parsermodule.c"
        var $7=$6; //@line 1856 "parsermodule.c"
        var $8=_validate_import_as_name($7); //@line 1856 "parsermodule.c"
        $res=$8; //@line 1856 "parsermodule.c"
        $i=1; //@line 1859 "parsermodule.c"
        __lastLabel__ = -1; __label__ = 6; break; //@line 1859 "parsermodule.c"
      case 1: // $bb
        var $9=$tree_addr; //@line 1860 "parsermodule.c"
        var $10=$9+20; //@line 1860 "parsermodule.c"
        var $11=HEAP[$10]; //@line 1860 "parsermodule.c"
        var $12=$i; //@line 1860 "parsermodule.c"
        var $13=$11+24*$12; //@line 1860 "parsermodule.c"
        var $14=_validate_terminal($13, 12, __str52); //@line 1860 "parsermodule.c"
        var $15=($14)==0; //@line 1860 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1860 "parsermodule.c"
      case 2: // $bb1
        var $16=$tree_addr; //@line 1860 "parsermodule.c"
        var $17=$16+20; //@line 1860 "parsermodule.c"
        var $18=HEAP[$17]; //@line 1860 "parsermodule.c"
        var $19=$i; //@line 1860 "parsermodule.c"
        var $20=($19) + 1; //@line 1860 "parsermodule.c"
        var $21=$18+24*$20; //@line 1860 "parsermodule.c"
        var $22=_validate_import_as_name($21); //@line 1860 "parsermodule.c"
        var $23=($22)==0; //@line 1860 "parsermodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1860 "parsermodule.c"
      case 3: // $bb2
        $iftmp_118=1; //@line 1860 "parsermodule.c"
        __label__ = 5; break; //@line 1860 "parsermodule.c"
      case 4: // $bb3
        $iftmp_118=0; //@line 1860 "parsermodule.c"
        __label__ = 5; break; //@line 1860 "parsermodule.c"
      case 5: // $bb4
        var $24=$iftmp_118; //@line 1860 "parsermodule.c"
        $res=$24; //@line 1860 "parsermodule.c"
        var $25=$i; //@line 1859 "parsermodule.c"
        var $26=($25) + 2; //@line 1859 "parsermodule.c"
        $i=$26; //@line 1859 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 1859 "parsermodule.c"
      case 6: // $bb5
        var $27=__lastLabel__ == 5 ? $24 : ($8);
        var $28=($27)==0; //@line 1859 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1859 "parsermodule.c"
      case 7: // $bb6
        var $29=$i; //@line 1859 "parsermodule.c"
        var $30=($29) + 1; //@line 1859 "parsermodule.c"
        var $31=$nch; //@line 1859 "parsermodule.c"
        var $32=($30) < ($31); //@line 1859 "parsermodule.c"
        if ($32) { __label__ = 1; break; } else { __label__ = 8; break; } //@line 1859 "parsermodule.c"
      case 8: // $bb7
        var $33=$res; //@line 1862 "parsermodule.c"
        $0=$33; //@line 1862 "parsermodule.c"
        var $34=$0; //@line 1862 "parsermodule.c"
        $retval=$34; //@line 1862 "parsermodule.c"
        var $retval8=$retval; //@line 1862 "parsermodule.c"
        ;
        return $retval8; //@line 1862 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_import_name($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $iftmp_119;
        var $0;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1870 "parsermodule.c"
        var $2=_validate_ntype($1, 282); //@line 1870 "parsermodule.c"
        var $3=($2)==0; //@line 1870 "parsermodule.c"
        if ($3) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1870 "parsermodule.c"
      case 1: // $bb
        var $4=$tree_addr; //@line 1870 "parsermodule.c"
        var $5=_validate_numnodes($4, 2, __str116); //@line 1870 "parsermodule.c"
        var $6=($5)==0; //@line 1870 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 1870 "parsermodule.c"
      case 2: // $bb1
        var $7=$tree_addr; //@line 1870 "parsermodule.c"
        var $8=$7+20; //@line 1870 "parsermodule.c"
        var $9=HEAP[$8]; //@line 1870 "parsermodule.c"
        var $10=$9; //@line 1870 "parsermodule.c"
        var $11=_validate_terminal($10, 1, __str117); //@line 1870 "parsermodule.c"
        var $12=($11)==0; //@line 1870 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1870 "parsermodule.c"
      case 3: // $bb2
        var $13=$tree_addr; //@line 1870 "parsermodule.c"
        var $14=$13+20; //@line 1870 "parsermodule.c"
        var $15=HEAP[$14]; //@line 1870 "parsermodule.c"
        var $16=$15+24; //@line 1870 "parsermodule.c"
        var $17=_validate_dotted_as_names($16); //@line 1870 "parsermodule.c"
        var $18=($17)==0; //@line 1870 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1870 "parsermodule.c"
      case 4: // $bb3
        $iftmp_119=1; //@line 1870 "parsermodule.c"
        __label__ = 6; break; //@line 1870 "parsermodule.c"
      case 5: // $bb4
        $iftmp_119=0; //@line 1870 "parsermodule.c"
        __label__ = 6; break; //@line 1870 "parsermodule.c"
      case 6: // $bb5
        var $19=$iftmp_119; //@line 1870 "parsermodule.c"
        $0=$19; //@line 1870 "parsermodule.c"
        var $20=$0; //@line 1870 "parsermodule.c"
        $retval=$20; //@line 1870 "parsermodule.c"
        var $retval6=$retval; //@line 1870 "parsermodule.c"
        ;
        return $retval6; //@line 1870 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _count_from_dots($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $i;
        $tree_addr=$tree;
        $i=1; //@line 1883 "parsermodule.c"
        __label__ = 3; break; //@line 1883 "parsermodule.c"
      case 1: // $bb
        var $1=$tree_addr; //@line 1884 "parsermodule.c"
        var $2=$1+20; //@line 1884 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1884 "parsermodule.c"
        var $4=$i; //@line 1884 "parsermodule.c"
        var $5=$3+24*$4; //@line 1884 "parsermodule.c"
        var $6=$5; //@line 1884 "parsermodule.c"
        var $7=HEAP[$6]; //@line 1884 "parsermodule.c"
        var $8=($7)!=23; //@line 1884 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1884 "parsermodule.c"
      case 2: // $bb1
        var $9=$i; //@line 1883 "parsermodule.c"
        var $10=($9) + 1; //@line 1883 "parsermodule.c"
        $i=$10; //@line 1883 "parsermodule.c"
        __label__ = 3; break; //@line 1883 "parsermodule.c"
      case 3: // $bb2
        var $11=$tree_addr; //@line 1883 "parsermodule.c"
        var $12=$11+16; //@line 1883 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1883 "parsermodule.c"
        var $14=$i; //@line 1883 "parsermodule.c"
        var $15=($13) > ($14); //@line 1883 "parsermodule.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1883 "parsermodule.c"
      case 4: // $bb3
        var $16=$i; //@line 1886 "parsermodule.c"
        var $17=($16) - 1; //@line 1886 "parsermodule.c"
        $0=$17; //@line 1886 "parsermodule.c"
        var $18=$0; //@line 1886 "parsermodule.c"
        $retval=$18; //@line 1886 "parsermodule.c"
        var $retval4=$retval; //@line 1886 "parsermodule.c"
        ;
        return $retval4; //@line 1886 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_import_from($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_121;
        var $iftmp_120;
        var $nch;
        var $ndots;
        var $havename;
        var $offset;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1895 "parsermodule.c"
        var $2=$1+16; //@line 1895 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1895 "parsermodule.c"
        $nch=$3; //@line 1895 "parsermodule.c"
        var $4=$tree_addr; //@line 1896 "parsermodule.c"
        var $5=_count_from_dots($4); //@line 1896 "parsermodule.c"
        $ndots=$5; //@line 1896 "parsermodule.c"
        var $6=$tree_addr; //@line 1897 "parsermodule.c"
        var $7=$6+20; //@line 1897 "parsermodule.c"
        var $8=HEAP[$7]; //@line 1897 "parsermodule.c"
        var $9=$ndots; //@line 1897 "parsermodule.c"
        var $10=($9) + 1; //@line 1897 "parsermodule.c"
        var $11=$8+24*$10; //@line 1897 "parsermodule.c"
        var $12=$11; //@line 1897 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1897 "parsermodule.c"
        var $14=($13)==288; //@line 1897 "parsermodule.c"
        var $15=($14); //@line 1897 "parsermodule.c"
        $havename=$15; //@line 1897 "parsermodule.c"
        var $16=$ndots; //@line 1898 "parsermodule.c"
        var $17=$havename; //@line 1898 "parsermodule.c"
        var $18=($17) + ($16); //@line 1898 "parsermodule.c"
        $offset=$18; //@line 1898 "parsermodule.c"
        var $19=$tree_addr; //@line 1904 "parsermodule.c"
        var $20=_validate_ntype($19, 283); //@line 1904 "parsermodule.c"
        var $21=($20)==0; //@line 1904 "parsermodule.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 1; break; } //@line 1904 "parsermodule.c"
      case 1: // $bb
        var $22=$offset; //@line 1904 "parsermodule.c"
        var $23=($22) <= 0; //@line 1904 "parsermodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 2; break; } //@line 1904 "parsermodule.c"
      case 2: // $bb1
        var $24=$offset; //@line 1904 "parsermodule.c"
        var $25=($24) + 3; //@line 1904 "parsermodule.c"
        var $26=$nch; //@line 1904 "parsermodule.c"
        var $27=($25) > ($26); //@line 1904 "parsermodule.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 3; break; } //@line 1904 "parsermodule.c"
      case 3: // $bb2
        var $28=$tree_addr; //@line 1904 "parsermodule.c"
        var $29=$28+20; //@line 1904 "parsermodule.c"
        var $30=HEAP[$29]; //@line 1904 "parsermodule.c"
        var $31=$30; //@line 1904 "parsermodule.c"
        var $32=_validate_terminal($31, 1, __str118); //@line 1904 "parsermodule.c"
        var $33=($32)==0; //@line 1904 "parsermodule.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 4; break; } //@line 1904 "parsermodule.c"
      case 4: // $bb3
        var $34=$havename; //@line 1904 "parsermodule.c"
        var $35=($34)==0; //@line 1904 "parsermodule.c"
        if ($35) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 1904 "parsermodule.c"
      case 5: // $bb4
        var $36=$tree_addr; //@line 1904 "parsermodule.c"
        var $37=$36+20; //@line 1904 "parsermodule.c"
        var $38=HEAP[$37]; //@line 1904 "parsermodule.c"
        var $39=$ndots; //@line 1904 "parsermodule.c"
        var $40=($39) + 1; //@line 1904 "parsermodule.c"
        var $41=$38+24*$40; //@line 1904 "parsermodule.c"
        var $42=_validate_dotted_name($41); //@line 1904 "parsermodule.c"
        var $43=($42)!=0; //@line 1904 "parsermodule.c"
        if ($43) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1904 "parsermodule.c"
      case 6: // $bb5
        var $44=$tree_addr; //@line 1904 "parsermodule.c"
        var $45=$44+20; //@line 1904 "parsermodule.c"
        var $46=HEAP[$45]; //@line 1904 "parsermodule.c"
        var $47=$offset; //@line 1904 "parsermodule.c"
        var $48=($47) + 1; //@line 1904 "parsermodule.c"
        var $49=$46+24*$48; //@line 1904 "parsermodule.c"
        var $50=_validate_terminal($49, 1, __str117); //@line 1904 "parsermodule.c"
        var $51=($50)==0; //@line 1904 "parsermodule.c"
        if ($51) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1904 "parsermodule.c"
      case 7: // $bb17_thread
        $iftmp_120=0; //@line 1904 "parsermodule.c"
        $res=0; //@line 1904 "parsermodule.c"
        __label__ = 19; break;
      case 8: // $bb9
        $iftmp_120=1; //@line 1904 "parsermodule.c"
        $res=1; //@line 1904 "parsermodule.c"
        var $52=$tree_addr; //@line 1906 "parsermodule.c"
        var $53=$52+20; //@line 1906 "parsermodule.c"
        var $54=HEAP[$53]; //@line 1906 "parsermodule.c"
        var $55=$offset; //@line 1906 "parsermodule.c"
        var $56=($55) + 2; //@line 1906 "parsermodule.c"
        var $57=$54+24*$56; //@line 1906 "parsermodule.c"
        var $58=$57; //@line 1906 "parsermodule.c"
        var $59=HEAP[$58]; //@line 1906 "parsermodule.c"
        var $60=($59)!=7; //@line 1906 "parsermodule.c"
        if ($60) { __label__ = 16; break; } else { __label__ = 9; break; } //@line 1906 "parsermodule.c"
      case 9: // $bb10
        var $61=$offset; //@line 1907 "parsermodule.c"
        var $62=($61) + 5; //@line 1907 "parsermodule.c"
        var $63=$nch; //@line 1907 "parsermodule.c"
        var $64=($62)!=($63); //@line 1907 "parsermodule.c"
        if ($64) { __label__ = 14; break; } else { __label__ = 10; break; } //@line 1907 "parsermodule.c"
      case 10: // $bb11
        var $65=$tree_addr; //@line 1907 "parsermodule.c"
        var $66=$65+20; //@line 1907 "parsermodule.c"
        var $67=HEAP[$66]; //@line 1907 "parsermodule.c"
        var $68=$offset; //@line 1907 "parsermodule.c"
        var $69=($68) + 2; //@line 1907 "parsermodule.c"
        var $70=$67+24*$69; //@line 1907 "parsermodule.c"
        var $71=_validate_terminal($70, 7, __str55); //@line 1907 "parsermodule.c"
        var $72=($71)==0; //@line 1907 "parsermodule.c"
        if ($72) { __label__ = 14; break; } else { __label__ = 11; break; } //@line 1907 "parsermodule.c"
      case 11: // $bb12
        var $73=$tree_addr; //@line 1907 "parsermodule.c"
        var $74=$73+20; //@line 1907 "parsermodule.c"
        var $75=HEAP[$74]; //@line 1907 "parsermodule.c"
        var $76=$offset; //@line 1907 "parsermodule.c"
        var $77=($76) + 3; //@line 1907 "parsermodule.c"
        var $78=$75+24*$77; //@line 1907 "parsermodule.c"
        var $79=_validate_import_as_names($78); //@line 1907 "parsermodule.c"
        var $80=($79)==0; //@line 1907 "parsermodule.c"
        if ($80) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 1907 "parsermodule.c"
      case 12: // $bb13
        var $81=$tree_addr; //@line 1907 "parsermodule.c"
        var $82=$81+20; //@line 1907 "parsermodule.c"
        var $83=HEAP[$82]; //@line 1907 "parsermodule.c"
        var $84=$offset; //@line 1907 "parsermodule.c"
        var $85=($84) + 4; //@line 1907 "parsermodule.c"
        var $86=$83+24*$85; //@line 1907 "parsermodule.c"
        var $87=_validate_terminal($86, 8, __str56); //@line 1907 "parsermodule.c"
        var $88=($87)==0; //@line 1907 "parsermodule.c"
        if ($88) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 1907 "parsermodule.c"
      case 13: // $bb14
        $iftmp_121=1; //@line 1907 "parsermodule.c"
        __label__ = 15; break; //@line 1907 "parsermodule.c"
      case 14: // $bb15
        $iftmp_121=0; //@line 1907 "parsermodule.c"
        __label__ = 15; break; //@line 1907 "parsermodule.c"
      case 15: // $bb16
        var $89=$iftmp_121; //@line 1907 "parsermodule.c"
        $res=$89; //@line 1907 "parsermodule.c"
        __label__ = 19; break; //@line 1907 "parsermodule.c"
      case 16: // $bb17
        var $_pr=$res;
        var $90=($_pr)!=0; //@line 1911 "parsermodule.c"
        if ($90) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 1911 "parsermodule.c"
      case 17: // $bb18
        var $91=$tree_addr; //@line 1911 "parsermodule.c"
        var $92=$91+20; //@line 1911 "parsermodule.c"
        var $93=HEAP[$92]; //@line 1911 "parsermodule.c"
        var $94=$offset; //@line 1911 "parsermodule.c"
        var $95=($94) + 2; //@line 1911 "parsermodule.c"
        var $96=$93+24*$95; //@line 1911 "parsermodule.c"
        var $97=$96; //@line 1911 "parsermodule.c"
        var $98=HEAP[$97]; //@line 1911 "parsermodule.c"
        var $99=($98)!=16; //@line 1911 "parsermodule.c"
        if ($99) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1911 "parsermodule.c"
      case 18: // $bb19
        var $100=$tree_addr; //@line 1912 "parsermodule.c"
        var $101=$100+20; //@line 1912 "parsermodule.c"
        var $102=HEAP[$101]; //@line 1912 "parsermodule.c"
        var $103=$offset; //@line 1912 "parsermodule.c"
        var $104=($103) + 2; //@line 1912 "parsermodule.c"
        var $105=$102+24*$104; //@line 1912 "parsermodule.c"
        var $106=_validate_import_as_names($105); //@line 1912 "parsermodule.c"
        $res=$106; //@line 1912 "parsermodule.c"
        __label__ = 19; break; //@line 1912 "parsermodule.c"
      case 19: // $bb20
        var $107=$res; //@line 1913 "parsermodule.c"
        $0=$107; //@line 1913 "parsermodule.c"
        var $108=$0; //@line 1913 "parsermodule.c"
        $retval=$108; //@line 1913 "parsermodule.c"
        var $retval21=$retval; //@line 1913 "parsermodule.c"
        ;
        return $retval21; //@line 1913 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_import_stmt($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $nch;
        var $res;
        var $ntype;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1921 "parsermodule.c"
        var $2=$1+16; //@line 1921 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1921 "parsermodule.c"
        $nch=$3; //@line 1921 "parsermodule.c"
        var $4=$tree_addr; //@line 1922 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, __str119); //@line 1922 "parsermodule.c"
        $res=$5; //@line 1922 "parsermodule.c"
        var $6=$res; //@line 1924 "parsermodule.c"
        var $7=($6)!=0; //@line 1924 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1924 "parsermodule.c"
      case 1: // $bb
        var $8=$tree_addr; //@line 1925 "parsermodule.c"
        var $9=$8+20; //@line 1925 "parsermodule.c"
        var $10=HEAP[$9]; //@line 1925 "parsermodule.c"
        var $11=$10; //@line 1925 "parsermodule.c"
        var $12=$11; //@line 1925 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1925 "parsermodule.c"
        var $14=($13); //@line 1925 "parsermodule.c"
        $ntype=$14; //@line 1925 "parsermodule.c"
        var $15=$ntype; //@line 1927 "parsermodule.c"
        var $16=($15)==282; //@line 1927 "parsermodule.c"
        var $17=$ntype; //@line 1927 "parsermodule.c"
        var $18=($17)==283; //@line 1927 "parsermodule.c"
        var $or_cond=($16) | ($18);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1927 "parsermodule.c"
      case 2: // $bb2
        var $19=$tree_addr; //@line 1928 "parsermodule.c"
        var $20=$19+20; //@line 1928 "parsermodule.c"
        var $21=HEAP[$20]; //@line 1928 "parsermodule.c"
        var $22=$21; //@line 1928 "parsermodule.c"
        var $23=_validate_node($22); //@line 1928 "parsermodule.c"
        $res=$23; //@line 1928 "parsermodule.c"
        __label__ = 6; break; //@line 1928 "parsermodule.c"
      case 3: // $bb3
        $res=0; //@line 1930 "parsermodule.c"
        _err_string(__str120); //@line 1931 "parsermodule.c"
        __label__ = 6; break; //@line 1931 "parsermodule.c"
      case 4: // $bb5
        var $24=$nch; //@line 1934 "parsermodule.c"
        var $25=($24)==1; //@line 1934 "parsermodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1934 "parsermodule.c"
      case 5: // $bb6
        $res=0; //@line 1935 "parsermodule.c"
        var $26=$tree_addr; //@line 1936 "parsermodule.c"
        var $27=$26+20; //@line 1936 "parsermodule.c"
        var $28=HEAP[$27]; //@line 1936 "parsermodule.c"
        var $29=$28; //@line 1936 "parsermodule.c"
        var $30=$29; //@line 1936 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1936 "parsermodule.c"
        var $32=($31); //@line 1936 "parsermodule.c"
        var $33=HEAP[_parser_error]; //@line 1936 "parsermodule.c"
        var $34=_PyErr_Format($33, __str121, allocate([$32,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1936 "parsermodule.c"
        __label__ = 6; break; //@line 1936 "parsermodule.c"
      case 6: // $bb7
        var $35=$res; //@line 1940 "parsermodule.c"
        $0=$35; //@line 1940 "parsermodule.c"
        var $36=$0; //@line 1940 "parsermodule.c"
        $retval=$36; //@line 1940 "parsermodule.c"
        var $retval8=$retval; //@line 1940 "parsermodule.c"
        ;
        return $retval8; //@line 1940 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_global_stmt($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_125;
        var $iftmp_124;
        var $iftmp_123;
        var $j;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1950 "parsermodule.c"
        var $2=$1+16; //@line 1950 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1950 "parsermodule.c"
        $nch=$3; //@line 1950 "parsermodule.c"
        var $4=$tree_addr; //@line 1952 "parsermodule.c"
        var $5=_validate_ntype($4, 289); //@line 1952 "parsermodule.c"
        var $6=($5)==0; //@line 1952 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1952 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1952 "parsermodule.c"
        var $8=($7) & 1; //@line 1952 "parsermodule.c"
        var $9=($8)!=0; //@line 1952 "parsermodule.c"
        var $10=$nch; //@line 1952 "parsermodule.c"
        var $11=($10) <= 1; //@line 1952 "parsermodule.c"
        var $or_cond=($9) | ($11);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1952 "parsermodule.c"
      case 2: // $bb7_thread
        $iftmp_123=1; //@line 1952 "parsermodule.c"
        $res=1; //@line 1952 "parsermodule.c"
        __label__ = 6; break;
      case 3: // $bb5
        $iftmp_123=0; //@line 1952 "parsermodule.c"
        $res=0; //@line 1952 "parsermodule.c"
        var $12=_PyErr_Occurred(); //@line 1954 "parsermodule.c"
        var $13=($12)==0; //@line 1954 "parsermodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1954 "parsermodule.c"
      case 4: // $bb6
        _err_string(__str122); //@line 1955 "parsermodule.c"
        __label__ = 5; break; //@line 1955 "parsermodule.c"
      case 5: // $bb7
        var $_pr=$res;
        var $14=($_pr)!=0; //@line 1957 "parsermodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 1957 "parsermodule.c"
      case 6: // $bb8
        var $15=$tree_addr; //@line 1958 "parsermodule.c"
        var $16=$15+20; //@line 1958 "parsermodule.c"
        var $17=HEAP[$16]; //@line 1958 "parsermodule.c"
        var $18=$17; //@line 1958 "parsermodule.c"
        var $19=_validate_terminal($18, 1, __str123); //@line 1958 "parsermodule.c"
        var $20=($19)==0; //@line 1958 "parsermodule.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1958 "parsermodule.c"
      case 7: // $bb9
        var $21=$tree_addr; //@line 1958 "parsermodule.c"
        var $22=$21+20; //@line 1958 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1958 "parsermodule.c"
        var $24=$23+24; //@line 1958 "parsermodule.c"
        var $25=_validate_ntype($24, 1); //@line 1958 "parsermodule.c"
        var $26=($25)==0; //@line 1958 "parsermodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1958 "parsermodule.c"
      case 8: // $bb10
        $iftmp_124=1; //@line 1958 "parsermodule.c"
        __label__ = 10; break; //@line 1958 "parsermodule.c"
      case 9: // $bb11
        $iftmp_124=0; //@line 1958 "parsermodule.c"
        __label__ = 10; break; //@line 1958 "parsermodule.c"
      case 10: // $bb12
        var $27=$iftmp_124; //@line 1958 "parsermodule.c"
        $res=$27; //@line 1958 "parsermodule.c"
        __label__ = 11; break; //@line 1958 "parsermodule.c"
      case 11: // $bb13
        $j=2; //@line 1960 "parsermodule.c"
        var $_pr2=$res;
        __lastLabel__ = 11; __label__ = 17; break; //@line 1960 "parsermodule.c"
      case 12: // $bb14
        var $28=$tree_addr; //@line 1961 "parsermodule.c"
        var $29=$28+20; //@line 1961 "parsermodule.c"
        var $30=HEAP[$29]; //@line 1961 "parsermodule.c"
        var $31=$j; //@line 1961 "parsermodule.c"
        var $32=$30+24*$31; //@line 1961 "parsermodule.c"
        var $33=_validate_terminal($32, 12, __str52); //@line 1961 "parsermodule.c"
        var $34=($33)==0; //@line 1961 "parsermodule.c"
        if ($34) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 1961 "parsermodule.c"
      case 13: // $bb15
        var $35=$tree_addr; //@line 1961 "parsermodule.c"
        var $36=$35+20; //@line 1961 "parsermodule.c"
        var $37=HEAP[$36]; //@line 1961 "parsermodule.c"
        var $38=$j; //@line 1961 "parsermodule.c"
        var $39=($38) + 1; //@line 1961 "parsermodule.c"
        var $40=$37+24*$39; //@line 1961 "parsermodule.c"
        var $41=_validate_ntype($40, 1); //@line 1961 "parsermodule.c"
        var $42=($41)==0; //@line 1961 "parsermodule.c"
        if ($42) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 1961 "parsermodule.c"
      case 14: // $bb16
        $iftmp_125=1; //@line 1961 "parsermodule.c"
        __label__ = 16; break; //@line 1961 "parsermodule.c"
      case 15: // $bb17
        $iftmp_125=0; //@line 1961 "parsermodule.c"
        __label__ = 16; break; //@line 1961 "parsermodule.c"
      case 16: // $bb18
        var $43=$iftmp_125; //@line 1961 "parsermodule.c"
        $res=$43; //@line 1961 "parsermodule.c"
        var $44=$j; //@line 1960 "parsermodule.c"
        var $45=($44) + 2; //@line 1960 "parsermodule.c"
        $j=$45; //@line 1960 "parsermodule.c"
        __lastLabel__ = 16; __label__ = 17; break; //@line 1960 "parsermodule.c"
      case 17: // $bb19
        var $46=__lastLabel__ == 16 ? $43 : ($_pr2);
        var $47=($46)==0; //@line 1960 "parsermodule.c"
        if ($47) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 1960 "parsermodule.c"
      case 18: // $bb20
        var $48=$j; //@line 1960 "parsermodule.c"
        var $49=$nch; //@line 1960 "parsermodule.c"
        var $50=($48) < ($49); //@line 1960 "parsermodule.c"
        if ($50) { __label__ = 12; break; } else { __label__ = 19; break; } //@line 1960 "parsermodule.c"
      case 19: // $bb21
        var $51=$res; //@line 1964 "parsermodule.c"
        $0=$51; //@line 1964 "parsermodule.c"
        var $52=$0; //@line 1964 "parsermodule.c"
        $retval=$52; //@line 1964 "parsermodule.c"
        var $retval22=$retval; //@line 1964 "parsermodule.c"
        ;
        return $retval22; //@line 1964 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_exec_stmt($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_128;
        var $iftmp_127;
        var $iftmp_126;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1975 "parsermodule.c"
        var $2=$1+16; //@line 1975 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1975 "parsermodule.c"
        $nch=$3; //@line 1975 "parsermodule.c"
        var $4=$tree_addr; //@line 1979 "parsermodule.c"
        var $5=_validate_ntype($4, 290); //@line 1979 "parsermodule.c"
        var $6=($5)==0; //@line 1979 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1979 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 1979 "parsermodule.c"
        var $8=($7)==2; //@line 1979 "parsermodule.c"
        var $9=$nch; //@line 1979 "parsermodule.c"
        var $10=($9)==4; //@line 1979 "parsermodule.c"
        var $or_cond=($8) | ($10);
        var $11=$nch; //@line 1979 "parsermodule.c"
        var $12=($11)==6; //@line 1979 "parsermodule.c"
        var $or_cond3=($or_cond) | ($12);
        if ($or_cond3) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1979 "parsermodule.c"
      case 2: // $bb3
        var $13=$tree_addr; //@line 1979 "parsermodule.c"
        var $14=$13+20; //@line 1979 "parsermodule.c"
        var $15=HEAP[$14]; //@line 1979 "parsermodule.c"
        var $16=$15; //@line 1979 "parsermodule.c"
        var $17=_validate_terminal($16, 1, __str124); //@line 1979 "parsermodule.c"
        var $18=($17)==0; //@line 1979 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1979 "parsermodule.c"
      case 3: // $bb4
        var $19=$tree_addr; //@line 1979 "parsermodule.c"
        var $20=$19+20; //@line 1979 "parsermodule.c"
        var $21=HEAP[$20]; //@line 1979 "parsermodule.c"
        var $22=$21+24; //@line 1979 "parsermodule.c"
        var $23=_validate_expr($22); //@line 1979 "parsermodule.c"
        var $24=($23)==0; //@line 1979 "parsermodule.c"
        if ($24) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1979 "parsermodule.c"
      case 4: // $bb10_thread
        $iftmp_126=1; //@line 1979 "parsermodule.c"
        $res=1; //@line 1979 "parsermodule.c"
        __label__ = 8; break;
      case 5: // $bb8
        $iftmp_126=0; //@line 1979 "parsermodule.c"
        $res=0; //@line 1979 "parsermodule.c"
        var $25=_PyErr_Occurred(); //@line 1981 "parsermodule.c"
        var $26=($25)==0; //@line 1981 "parsermodule.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1981 "parsermodule.c"
      case 6: // $bb9
        _err_string(__str125); //@line 1982 "parsermodule.c"
        __label__ = 7; break; //@line 1982 "parsermodule.c"
      case 7: // $bb10
        var $_pr=$res;
        var $27=($_pr)!=0; //@line 1983 "parsermodule.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 22; break; } //@line 1983 "parsermodule.c"
      case 8: // $bb11
        var $28=$nch; //@line 1983 "parsermodule.c"
        var $29=($28) > 2; //@line 1983 "parsermodule.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 1983 "parsermodule.c"
      case 9: // $bb12
        var $30=$tree_addr; //@line 1984 "parsermodule.c"
        var $31=$30+20; //@line 1984 "parsermodule.c"
        var $32=HEAP[$31]; //@line 1984 "parsermodule.c"
        var $33=$32+48; //@line 1984 "parsermodule.c"
        var $34=_validate_terminal($33, 1, __str76); //@line 1984 "parsermodule.c"
        var $35=($34)==0; //@line 1984 "parsermodule.c"
        if ($35) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 1984 "parsermodule.c"
      case 10: // $bb13
        var $36=$tree_addr; //@line 1984 "parsermodule.c"
        var $37=$36+20; //@line 1984 "parsermodule.c"
        var $38=HEAP[$37]; //@line 1984 "parsermodule.c"
        var $39=$38+72; //@line 1984 "parsermodule.c"
        var $40=_validate_test($39); //@line 1984 "parsermodule.c"
        var $41=($40)==0; //@line 1984 "parsermodule.c"
        if ($41) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1984 "parsermodule.c"
      case 11: // $bb14
        $iftmp_127=1; //@line 1984 "parsermodule.c"
        __label__ = 13; break; //@line 1984 "parsermodule.c"
      case 12: // $bb15
        $iftmp_127=0; //@line 1984 "parsermodule.c"
        __label__ = 13; break; //@line 1984 "parsermodule.c"
      case 13: // $bb16
        var $42=$iftmp_127; //@line 1984 "parsermodule.c"
        $res=$42; //@line 1984 "parsermodule.c"
        __lastLabel__ = 13; __label__ = 15; break; //@line 1984 "parsermodule.c"
      case 14: // $bb17thread_pre_split
        var $_pr4=$res;
        __lastLabel__ = 14; __label__ = 15; break;
      case 15: // $bb17
        var $43=__lastLabel__ == 14 ? $_pr4 : ($42);
        var $44=($43)!=0; //@line 1986 "parsermodule.c"
        if ($44) { __label__ = 16; break; } else { __label__ = 22; break; } //@line 1986 "parsermodule.c"
      case 16: // $bb18
        var $45=$nch; //@line 1986 "parsermodule.c"
        var $46=($45)==6; //@line 1986 "parsermodule.c"
        if ($46) { __label__ = 17; break; } else { __label__ = 22; break; } //@line 1986 "parsermodule.c"
      case 17: // $bb19
        var $47=$tree_addr; //@line 1987 "parsermodule.c"
        var $48=$47+20; //@line 1987 "parsermodule.c"
        var $49=HEAP[$48]; //@line 1987 "parsermodule.c"
        var $50=$49+96; //@line 1987 "parsermodule.c"
        var $51=_validate_terminal($50, 12, __str52); //@line 1987 "parsermodule.c"
        var $52=($51)==0; //@line 1987 "parsermodule.c"
        if ($52) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 1987 "parsermodule.c"
      case 18: // $bb20
        var $53=$tree_addr; //@line 1987 "parsermodule.c"
        var $54=$53+20; //@line 1987 "parsermodule.c"
        var $55=HEAP[$54]; //@line 1987 "parsermodule.c"
        var $56=$55+120; //@line 1987 "parsermodule.c"
        var $57=_validate_test($56); //@line 1987 "parsermodule.c"
        var $58=($57)==0; //@line 1987 "parsermodule.c"
        if ($58) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 1987 "parsermodule.c"
      case 19: // $bb21
        $iftmp_128=1; //@line 1987 "parsermodule.c"
        __label__ = 21; break; //@line 1987 "parsermodule.c"
      case 20: // $bb22
        $iftmp_128=0; //@line 1987 "parsermodule.c"
        __label__ = 21; break; //@line 1987 "parsermodule.c"
      case 21: // $bb23
        var $59=$iftmp_128; //@line 1987 "parsermodule.c"
        $res=$59; //@line 1987 "parsermodule.c"
        __label__ = 22; break; //@line 1987 "parsermodule.c"
      case 22: // $bb24
        var $60=$res; //@line 1990 "parsermodule.c"
        $0=$60; //@line 1990 "parsermodule.c"
        var $61=$0; //@line 1990 "parsermodule.c"
        $retval=$61; //@line 1990 "parsermodule.c"
        var $retval25=$retval; //@line 1990 "parsermodule.c"
        ;
        return $retval25; //@line 1990 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_assert_stmt($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_130;
        var $iftmp_129;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2001 "parsermodule.c"
        var $2=$1+16; //@line 2001 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2001 "parsermodule.c"
        $nch=$3; //@line 2001 "parsermodule.c"
        var $4=$tree_addr; //@line 2005 "parsermodule.c"
        var $5=_validate_ntype($4, 291); //@line 2005 "parsermodule.c"
        var $6=($5)==0; //@line 2005 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 2005 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2005 "parsermodule.c"
        var $8=($7)==2; //@line 2005 "parsermodule.c"
        var $9=$nch; //@line 2005 "parsermodule.c"
        var $10=($9)==4; //@line 2005 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 2005 "parsermodule.c"
      case 2: // $bb2
        var $11=$tree_addr; //@line 2005 "parsermodule.c"
        var $12=$11+20; //@line 2005 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2005 "parsermodule.c"
        var $14=$13; //@line 2005 "parsermodule.c"
        var $15=_validate_terminal($14, 1, __str126); //@line 2005 "parsermodule.c"
        var $16=($15)==0; //@line 2005 "parsermodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2005 "parsermodule.c"
      case 3: // $bb3
        var $17=$tree_addr; //@line 2005 "parsermodule.c"
        var $18=$17+20; //@line 2005 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2005 "parsermodule.c"
        var $20=$19+24; //@line 2005 "parsermodule.c"
        var $21=_validate_test($20); //@line 2005 "parsermodule.c"
        var $22=($21)==0; //@line 2005 "parsermodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2005 "parsermodule.c"
      case 4: // $bb9_thread
        $iftmp_129=1; //@line 2005 "parsermodule.c"
        $res=1; //@line 2005 "parsermodule.c"
        __label__ = 8; break;
      case 5: // $bb7
        $iftmp_129=0; //@line 2005 "parsermodule.c"
        $res=0; //@line 2005 "parsermodule.c"
        var $23=_PyErr_Occurred(); //@line 2007 "parsermodule.c"
        var $24=($23)==0; //@line 2007 "parsermodule.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2007 "parsermodule.c"
      case 6: // $bb8
        _err_string(__str127); //@line 2008 "parsermodule.c"
        __label__ = 7; break; //@line 2008 "parsermodule.c"
      case 7: // $bb9
        var $_pr=$res;
        var $25=($_pr)!=0; //@line 2009 "parsermodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 14; break; } //@line 2009 "parsermodule.c"
      case 8: // $bb10
        var $26=$nch; //@line 2009 "parsermodule.c"
        var $27=($26) > 2; //@line 2009 "parsermodule.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 2009 "parsermodule.c"
      case 9: // $bb11
        var $28=$tree_addr; //@line 2010 "parsermodule.c"
        var $29=$28+20; //@line 2010 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2010 "parsermodule.c"
        var $31=$30+48; //@line 2010 "parsermodule.c"
        var $32=_validate_terminal($31, 12, __str52); //@line 2010 "parsermodule.c"
        var $33=($32)==0; //@line 2010 "parsermodule.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 2010 "parsermodule.c"
      case 10: // $bb12
        var $34=$tree_addr; //@line 2010 "parsermodule.c"
        var $35=$34+20; //@line 2010 "parsermodule.c"
        var $36=HEAP[$35]; //@line 2010 "parsermodule.c"
        var $37=$36+72; //@line 2010 "parsermodule.c"
        var $38=_validate_test($37); //@line 2010 "parsermodule.c"
        var $39=($38)==0; //@line 2010 "parsermodule.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 2010 "parsermodule.c"
      case 11: // $bb13
        $iftmp_130=1; //@line 2010 "parsermodule.c"
        __label__ = 13; break; //@line 2010 "parsermodule.c"
      case 12: // $bb14
        $iftmp_130=0; //@line 2010 "parsermodule.c"
        __label__ = 13; break; //@line 2010 "parsermodule.c"
      case 13: // $bb15
        var $40=$iftmp_130; //@line 2010 "parsermodule.c"
        $res=$40; //@line 2010 "parsermodule.c"
        __label__ = 14; break; //@line 2010 "parsermodule.c"
      case 14: // $bb16
        var $41=$res; //@line 2013 "parsermodule.c"
        $0=$41; //@line 2013 "parsermodule.c"
        var $42=$0; //@line 2013 "parsermodule.c"
        $retval=$42; //@line 2013 "parsermodule.c"
        var $retval17=$retval; //@line 2013 "parsermodule.c"
        ;
        return $retval17; //@line 2013 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_while($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_132;
        var $iftmp_131;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2020 "parsermodule.c"
        var $2=$1+16; //@line 2020 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2020 "parsermodule.c"
        $nch=$3; //@line 2020 "parsermodule.c"
        var $4=$tree_addr; //@line 2026 "parsermodule.c"
        var $5=_validate_ntype($4, 294); //@line 2026 "parsermodule.c"
        var $6=($5)==0; //@line 2026 "parsermodule.c"
        if ($6) { __label__ = 6; break; } else { __label__ = 1; break; } //@line 2026 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2026 "parsermodule.c"
        var $8=($7)==4; //@line 2026 "parsermodule.c"
        var $9=$nch; //@line 2026 "parsermodule.c"
        var $10=($9)==7; //@line 2026 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 2026 "parsermodule.c"
      case 2: // $bb2
        var $11=$tree_addr; //@line 2026 "parsermodule.c"
        var $12=$11+20; //@line 2026 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2026 "parsermodule.c"
        var $14=$13; //@line 2026 "parsermodule.c"
        var $15=_validate_terminal($14, 1, __str128); //@line 2026 "parsermodule.c"
        var $16=($15)==0; //@line 2026 "parsermodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 3; break; } //@line 2026 "parsermodule.c"
      case 3: // $bb3
        var $17=$tree_addr; //@line 2026 "parsermodule.c"
        var $18=$17+20; //@line 2026 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2026 "parsermodule.c"
        var $20=$19+24; //@line 2026 "parsermodule.c"
        var $21=_validate_test($20); //@line 2026 "parsermodule.c"
        var $22=($21)==0; //@line 2026 "parsermodule.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2026 "parsermodule.c"
      case 4: // $bb4
        var $23=$tree_addr; //@line 2026 "parsermodule.c"
        var $24=$23+20; //@line 2026 "parsermodule.c"
        var $25=HEAP[$24]; //@line 2026 "parsermodule.c"
        var $26=$25+48; //@line 2026 "parsermodule.c"
        var $27=_validate_terminal($26, 11, __str54); //@line 2026 "parsermodule.c"
        var $28=($27)==0; //@line 2026 "parsermodule.c"
        if ($28) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2026 "parsermodule.c"
      case 5: // $bb5
        var $29=$tree_addr; //@line 2026 "parsermodule.c"
        var $30=$29+20; //@line 2026 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2026 "parsermodule.c"
        var $32=$31+72; //@line 2026 "parsermodule.c"
        var $33=_validate_suite($32); //@line 2026 "parsermodule.c"
        var $34=($33)==0; //@line 2026 "parsermodule.c"
        if ($34) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2026 "parsermodule.c"
      case 6: // $bb8
        $iftmp_131=0; //@line 2026 "parsermodule.c"
        $res=0; //@line 2026 "parsermodule.c"
        __label__ = 14; break;
      case 7: // $bb9
        $iftmp_131=1; //@line 2026 "parsermodule.c"
        $res=1; //@line 2026 "parsermodule.c"
        var $35=$nch; //@line 2028 "parsermodule.c"
        var $36=($35)==7; //@line 2028 "parsermodule.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 14; break; } //@line 2028 "parsermodule.c"
      case 8: // $bb10
        var $37=$tree_addr; //@line 2029 "parsermodule.c"
        var $38=$37+20; //@line 2029 "parsermodule.c"
        var $39=HEAP[$38]; //@line 2029 "parsermodule.c"
        var $40=$39+96; //@line 2029 "parsermodule.c"
        var $41=_validate_terminal($40, 1, __str58); //@line 2029 "parsermodule.c"
        var $42=($41)==0; //@line 2029 "parsermodule.c"
        if ($42) { __label__ = 12; break; } else { __label__ = 9; break; } //@line 2029 "parsermodule.c"
      case 9: // $bb11
        var $43=$tree_addr; //@line 2029 "parsermodule.c"
        var $44=$43+20; //@line 2029 "parsermodule.c"
        var $45=HEAP[$44]; //@line 2029 "parsermodule.c"
        var $46=$45+120; //@line 2029 "parsermodule.c"
        var $47=_validate_terminal($46, 11, __str54); //@line 2029 "parsermodule.c"
        var $48=($47)==0; //@line 2029 "parsermodule.c"
        if ($48) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 2029 "parsermodule.c"
      case 10: // $bb12
        var $49=$tree_addr; //@line 2029 "parsermodule.c"
        var $50=$49+20; //@line 2029 "parsermodule.c"
        var $51=HEAP[$50]; //@line 2029 "parsermodule.c"
        var $52=$51+144; //@line 2029 "parsermodule.c"
        var $53=_validate_suite($52); //@line 2029 "parsermodule.c"
        var $54=($53)==0; //@line 2029 "parsermodule.c"
        if ($54) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 2029 "parsermodule.c"
      case 11: // $bb13
        $iftmp_132=1; //@line 2029 "parsermodule.c"
        __label__ = 13; break; //@line 2029 "parsermodule.c"
      case 12: // $bb14
        $iftmp_132=0; //@line 2029 "parsermodule.c"
        __label__ = 13; break; //@line 2029 "parsermodule.c"
      case 13: // $bb15
        var $55=$iftmp_132; //@line 2029 "parsermodule.c"
        $res=$55; //@line 2029 "parsermodule.c"
        __label__ = 14; break; //@line 2029 "parsermodule.c"
      case 14: // $bb16
        var $56=$res; //@line 2033 "parsermodule.c"
        $0=$56; //@line 2033 "parsermodule.c"
        var $57=$0; //@line 2033 "parsermodule.c"
        $retval=$57; //@line 2033 "parsermodule.c"
        var $retval17=$retval; //@line 2033 "parsermodule.c"
        ;
        return $retval17; //@line 2033 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_for($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_134;
        var $iftmp_133;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2040 "parsermodule.c"
        var $2=$1+16; //@line 2040 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2040 "parsermodule.c"
        $nch=$3; //@line 2040 "parsermodule.c"
        var $4=$tree_addr; //@line 2048 "parsermodule.c"
        var $5=_validate_ntype($4, 295); //@line 2048 "parsermodule.c"
        var $6=($5)==0; //@line 2048 "parsermodule.c"
        if ($6) { __label__ = 8; break; } else { __label__ = 1; break; } //@line 2048 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2048 "parsermodule.c"
        var $8=($7)==6; //@line 2048 "parsermodule.c"
        var $9=$nch; //@line 2048 "parsermodule.c"
        var $10=($9)==9; //@line 2048 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 2048 "parsermodule.c"
      case 2: // $bb2
        var $11=$tree_addr; //@line 2048 "parsermodule.c"
        var $12=$11+20; //@line 2048 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2048 "parsermodule.c"
        var $14=$13; //@line 2048 "parsermodule.c"
        var $15=_validate_terminal($14, 1, __str75); //@line 2048 "parsermodule.c"
        var $16=($15)==0; //@line 2048 "parsermodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 3; break; } //@line 2048 "parsermodule.c"
      case 3: // $bb3
        var $17=$tree_addr; //@line 2048 "parsermodule.c"
        var $18=$17+20; //@line 2048 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2048 "parsermodule.c"
        var $20=$19+24; //@line 2048 "parsermodule.c"
        var $21=_validate_exprlist($20); //@line 2048 "parsermodule.c"
        var $22=($21)==0; //@line 2048 "parsermodule.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 2048 "parsermodule.c"
      case 4: // $bb4
        var $23=$tree_addr; //@line 2048 "parsermodule.c"
        var $24=$23+20; //@line 2048 "parsermodule.c"
        var $25=HEAP[$24]; //@line 2048 "parsermodule.c"
        var $26=$25+48; //@line 2048 "parsermodule.c"
        var $27=_validate_terminal($26, 1, __str76); //@line 2048 "parsermodule.c"
        var $28=($27)==0; //@line 2048 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 2048 "parsermodule.c"
      case 5: // $bb5
        var $29=$tree_addr; //@line 2048 "parsermodule.c"
        var $30=$29+20; //@line 2048 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2048 "parsermodule.c"
        var $32=$31+72; //@line 2048 "parsermodule.c"
        var $33=_validate_testlist($32); //@line 2048 "parsermodule.c"
        var $34=($33)==0; //@line 2048 "parsermodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 2048 "parsermodule.c"
      case 6: // $bb6
        var $35=$tree_addr; //@line 2048 "parsermodule.c"
        var $36=$35+20; //@line 2048 "parsermodule.c"
        var $37=HEAP[$36]; //@line 2048 "parsermodule.c"
        var $38=$37+96; //@line 2048 "parsermodule.c"
        var $39=_validate_terminal($38, 11, __str54); //@line 2048 "parsermodule.c"
        var $40=($39)==0; //@line 2048 "parsermodule.c"
        if ($40) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 2048 "parsermodule.c"
      case 7: // $bb7
        var $41=$tree_addr; //@line 2048 "parsermodule.c"
        var $42=$41+20; //@line 2048 "parsermodule.c"
        var $43=HEAP[$42]; //@line 2048 "parsermodule.c"
        var $44=$43+120; //@line 2048 "parsermodule.c"
        var $45=_validate_suite($44); //@line 2048 "parsermodule.c"
        var $46=($45)==0; //@line 2048 "parsermodule.c"
        if ($46) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2048 "parsermodule.c"
      case 8: // $bb10
        $iftmp_133=0; //@line 2048 "parsermodule.c"
        $res=0; //@line 2048 "parsermodule.c"
        __label__ = 16; break;
      case 9: // $bb11
        $iftmp_133=1; //@line 2048 "parsermodule.c"
        $res=1; //@line 2048 "parsermodule.c"
        var $47=$nch; //@line 2050 "parsermodule.c"
        var $48=($47)==9; //@line 2050 "parsermodule.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 16; break; } //@line 2050 "parsermodule.c"
      case 10: // $bb12
        var $49=$tree_addr; //@line 2051 "parsermodule.c"
        var $50=$49+20; //@line 2051 "parsermodule.c"
        var $51=HEAP[$50]; //@line 2051 "parsermodule.c"
        var $52=$51+144; //@line 2051 "parsermodule.c"
        var $53=_validate_terminal($52, 1, __str58); //@line 2051 "parsermodule.c"
        var $54=($53)==0; //@line 2051 "parsermodule.c"
        if ($54) { __label__ = 14; break; } else { __label__ = 11; break; } //@line 2051 "parsermodule.c"
      case 11: // $bb13
        var $55=$tree_addr; //@line 2051 "parsermodule.c"
        var $56=$55+20; //@line 2051 "parsermodule.c"
        var $57=HEAP[$56]; //@line 2051 "parsermodule.c"
        var $58=$57+168; //@line 2051 "parsermodule.c"
        var $59=_validate_terminal($58, 11, __str54); //@line 2051 "parsermodule.c"
        var $60=($59)==0; //@line 2051 "parsermodule.c"
        if ($60) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 2051 "parsermodule.c"
      case 12: // $bb14
        var $61=$tree_addr; //@line 2051 "parsermodule.c"
        var $62=$61+20; //@line 2051 "parsermodule.c"
        var $63=HEAP[$62]; //@line 2051 "parsermodule.c"
        var $64=$63+192; //@line 2051 "parsermodule.c"
        var $65=_validate_suite($64); //@line 2051 "parsermodule.c"
        var $66=($65)==0; //@line 2051 "parsermodule.c"
        if ($66) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2051 "parsermodule.c"
      case 13: // $bb15
        $iftmp_134=1; //@line 2051 "parsermodule.c"
        __label__ = 15; break; //@line 2051 "parsermodule.c"
      case 14: // $bb16
        $iftmp_134=0; //@line 2051 "parsermodule.c"
        __label__ = 15; break; //@line 2051 "parsermodule.c"
      case 15: // $bb17
        var $67=$iftmp_134; //@line 2051 "parsermodule.c"
        $res=$67; //@line 2051 "parsermodule.c"
        __label__ = 16; break; //@line 2051 "parsermodule.c"
      case 16: // $bb18
        var $68=$res; //@line 2055 "parsermodule.c"
        $0=$68; //@line 2055 "parsermodule.c"
        var $69=$0; //@line 2055 "parsermodule.c"
        $retval=$69; //@line 2055 "parsermodule.c"
        var $retval19=$retval; //@line 2055 "parsermodule.c"
        ;
        return $retval19; //@line 2055 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_try($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $iftmp_141;
        var $iftmp_140;
        var $iftmp_139;
        var $0;
        var $iftmp_138;
        var $iftmp_136;
        var $iftmp_135;
        var $nch;
        var $pos;
        var $res;
        var $name;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2068 "parsermodule.c"
        var $2=$1+16; //@line 2068 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2068 "parsermodule.c"
        $nch=$3; //@line 2068 "parsermodule.c"
        $pos=3; //@line 2069 "parsermodule.c"
        var $4=$tree_addr; //@line 2071 "parsermodule.c"
        var $5=_validate_ntype($4, 296); //@line 2071 "parsermodule.c"
        var $6=($5)==0; //@line 2071 "parsermodule.c"
        if ($6) { __label__ = 11; break; } else { __label__ = 1; break; } //@line 2071 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2071 "parsermodule.c"
        var $8=($7) <= 5; //@line 2071 "parsermodule.c"
        if ($8) { __label__ = 11; break; } else { __label__ = 2; break; } //@line 2071 "parsermodule.c"
      case 2: // $bb1
        var $9=$nch; //@line 2071 "parsermodule.c"
        var $10=($9) % 3; //@line 2071 "parsermodule.c"
        var $11=($10)!=0; //@line 2071 "parsermodule.c"
        if ($11) { __label__ = 11; break; } else { __label__ = 3; break; } //@line 2071 "parsermodule.c"
      case 3: // $bb5
        $iftmp_135=1; //@line 2071 "parsermodule.c"
        $res=1; //@line 2071 "parsermodule.c"
        var $12=$tree_addr; //@line 2074 "parsermodule.c"
        var $13=$12+20; //@line 2074 "parsermodule.c"
        var $14=HEAP[$13]; //@line 2074 "parsermodule.c"
        var $15=$14; //@line 2074 "parsermodule.c"
        var $16=_validate_terminal($15, 1, __str129); //@line 2074 "parsermodule.c"
        var $17=($16)==0; //@line 2074 "parsermodule.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 4; break; } //@line 2074 "parsermodule.c"
      case 4: // $bb6
        var $18=$tree_addr; //@line 2074 "parsermodule.c"
        var $19=$18+20; //@line 2074 "parsermodule.c"
        var $20=HEAP[$19]; //@line 2074 "parsermodule.c"
        var $21=$20+24; //@line 2074 "parsermodule.c"
        var $22=_validate_terminal($21, 11, __str54); //@line 2074 "parsermodule.c"
        var $23=($22)==0; //@line 2074 "parsermodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 5; break; } //@line 2074 "parsermodule.c"
      case 5: // $bb7
        var $24=$tree_addr; //@line 2074 "parsermodule.c"
        var $25=$24+20; //@line 2074 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2074 "parsermodule.c"
        var $27=$26+48; //@line 2074 "parsermodule.c"
        var $28=_validate_suite($27); //@line 2074 "parsermodule.c"
        var $29=($28)==0; //@line 2074 "parsermodule.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 2074 "parsermodule.c"
      case 6: // $bb8
        var $30=$tree_addr; //@line 2074 "parsermodule.c"
        var $31=$30+20; //@line 2074 "parsermodule.c"
        var $32=HEAP[$31]; //@line 2074 "parsermodule.c"
        var $33=$nch; //@line 2074 "parsermodule.c"
        var $34=($33) - 2; //@line 2074 "parsermodule.c"
        var $35=$32+24*$34; //@line 2074 "parsermodule.c"
        var $36=_validate_terminal($35, 11, __str54); //@line 2074 "parsermodule.c"
        var $37=($36)==0; //@line 2074 "parsermodule.c"
        if ($37) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2074 "parsermodule.c"
      case 7: // $bb9
        var $38=$tree_addr; //@line 2074 "parsermodule.c"
        var $39=$38+20; //@line 2074 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2074 "parsermodule.c"
        var $41=$nch; //@line 2074 "parsermodule.c"
        var $42=($41) - 1; //@line 2074 "parsermodule.c"
        var $43=$40+24*$42; //@line 2074 "parsermodule.c"
        var $44=_validate_suite($43); //@line 2074 "parsermodule.c"
        var $45=($44)==0; //@line 2074 "parsermodule.c"
        if ($45) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2074 "parsermodule.c"
      case 8: // $bb10
        $iftmp_136=1; //@line 2074 "parsermodule.c"
        __label__ = 10; break; //@line 2074 "parsermodule.c"
      case 9: // $bb11
        $iftmp_136=0; //@line 2074 "parsermodule.c"
        __label__ = 10; break; //@line 2074 "parsermodule.c"
      case 10: // $bb12
        var $46=$iftmp_136; //@line 2074 "parsermodule.c"
        $res=$46; //@line 2074 "parsermodule.c"
        __lastLabel__ = 10; __label__ = 16; break; //@line 2074 "parsermodule.c"
      case 11: // $bb13
        $iftmp_135=0; //@line 2071 "parsermodule.c"
        $res=0; //@line 2071 "parsermodule.c"
        var $47=_PyErr_Occurred(); //@line 2079 "parsermodule.c"
        var $48=($47)==0; //@line 2079 "parsermodule.c"
        if ($48) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 2079 "parsermodule.c"
      case 12: // $bb14
        $name=__str130; //@line 2080 "parsermodule.c"
        var $49=$tree_addr; //@line 2081 "parsermodule.c"
        var $50=$49+20; //@line 2081 "parsermodule.c"
        var $51=HEAP[$50]; //@line 2081 "parsermodule.c"
        var $52=$nch; //@line 2081 "parsermodule.c"
        var $53=($52) - 3; //@line 2081 "parsermodule.c"
        var $54=$51+24*$53; //@line 2081 "parsermodule.c"
        var $55=$54; //@line 2081 "parsermodule.c"
        var $56=HEAP[$55]; //@line 2081 "parsermodule.c"
        var $57=($56)!=299; //@line 2081 "parsermodule.c"
        if ($57) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2081 "parsermodule.c"
      case 13: // $bb15
        var $58=$tree_addr; //@line 2082 "parsermodule.c"
        var $59=$58+20; //@line 2082 "parsermodule.c"
        var $60=HEAP[$59]; //@line 2082 "parsermodule.c"
        var $61=$nch; //@line 2082 "parsermodule.c"
        var $62=($61) - 3; //@line 2082 "parsermodule.c"
        var $63=$60+24*$62; //@line 2082 "parsermodule.c"
        var $64=$63+4; //@line 2082 "parsermodule.c"
        var $65=HEAP[$64]; //@line 2082 "parsermodule.c"
        $name=$65; //@line 2082 "parsermodule.c"
        __label__ = 14; break; //@line 2082 "parsermodule.c"
      case 14: // $bb16
        var $66=HEAP[_parser_error]; //@line 2084 "parsermodule.c"
        var $67=$name; //@line 2084 "parsermodule.c"
        var $68=_PyErr_Format($66, __str131, allocate([$67,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 2084 "parsermodule.c"
        __label__ = 15; break; //@line 2084 "parsermodule.c"
      case 15: // $bb17thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 15; __label__ = 16; break;
      case 16: // $bb17
        var $69=__lastLabel__ == 15 ? $_pr : ($46);
        var $70=($69)!=0; //@line 2088 "parsermodule.c"
        if ($70) { __label__ = 17; break; } else { __label__ = 31; break; } //@line 2088 "parsermodule.c"
      case 17: // $bb18
        var $71=$tree_addr; //@line 2088 "parsermodule.c"
        var $72=$71+20; //@line 2088 "parsermodule.c"
        var $73=HEAP[$72]; //@line 2088 "parsermodule.c"
        var $74=$pos; //@line 2088 "parsermodule.c"
        var $75=$73+24*$74; //@line 2088 "parsermodule.c"
        var $76=$75; //@line 2088 "parsermodule.c"
        var $77=HEAP[$76]; //@line 2088 "parsermodule.c"
        var $78=($77)==1; //@line 2088 "parsermodule.c"
        if ($78) { __label__ = 18; break; } else { __label__ = 31; break; } //@line 2088 "parsermodule.c"
      case 18: // $bb19
        var $79=$tree_addr; //@line 2088 "parsermodule.c"
        var $80=$79+20; //@line 2088 "parsermodule.c"
        var $81=HEAP[$80]; //@line 2088 "parsermodule.c"
        var $82=$pos; //@line 2088 "parsermodule.c"
        var $83=$81+24*$82; //@line 2088 "parsermodule.c"
        var $84=$83+4; //@line 2088 "parsermodule.c"
        var $85=HEAP[$84]; //@line 2088 "parsermodule.c"
        var $86=_strcmp($85, __str132); //@line 2088 "parsermodule.c"
        var $87=($86)==0; //@line 2088 "parsermodule.c"
        if ($87) { __label__ = 19; break; } else { __label__ = 31; break; } //@line 2088 "parsermodule.c"
      case 19: // $bb20
        var $88=$tree_addr; //@line 2090 "parsermodule.c"
        var $89=_validate_numnodes($88, 6, __str133); //@line 2090 "parsermodule.c"
        var $90=($89)==0; //@line 2090 "parsermodule.c"
        if ($90) { __label__ = 23; break; } else { __label__ = 20; break; } //@line 2090 "parsermodule.c"
      case 20: // $bb21
        var $91=$tree_addr; //@line 2090 "parsermodule.c"
        var $92=$91+20; //@line 2090 "parsermodule.c"
        var $93=HEAP[$92]; //@line 2090 "parsermodule.c"
        var $94=$93+96; //@line 2090 "parsermodule.c"
        var $95=_validate_terminal($94, 11, __str54); //@line 2090 "parsermodule.c"
        var $96=($95)==0; //@line 2090 "parsermodule.c"
        if ($96) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 2090 "parsermodule.c"
      case 21: // $bb22
        var $97=$tree_addr; //@line 2090 "parsermodule.c"
        var $98=$97+20; //@line 2090 "parsermodule.c"
        var $99=HEAP[$98]; //@line 2090 "parsermodule.c"
        var $100=$99+120; //@line 2090 "parsermodule.c"
        var $101=_validate_suite($100); //@line 2090 "parsermodule.c"
        var $102=($101)==0; //@line 2090 "parsermodule.c"
        if ($102) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 2090 "parsermodule.c"
      case 22: // $bb23
        $iftmp_138=1; //@line 2090 "parsermodule.c"
        __label__ = 24; break; //@line 2090 "parsermodule.c"
      case 23: // $bb24
        $iftmp_138=0; //@line 2090 "parsermodule.c"
        __label__ = 24; break; //@line 2090 "parsermodule.c"
      case 24: // $bb25
        var $103=$iftmp_138; //@line 2090 "parsermodule.c"
        $res=$103; //@line 2090 "parsermodule.c"
        var $104=$res; //@line 2093 "parsermodule.c"
        $0=$104; //@line 2093 "parsermodule.c"
        __label__ = 55; break; //@line 2093 "parsermodule.c"
      case 25: // $bb27
        var $105=$tree_addr; //@line 2097 "parsermodule.c"
        var $106=$105+20; //@line 2097 "parsermodule.c"
        var $107=HEAP[$106]; //@line 2097 "parsermodule.c"
        var $108=$pos; //@line 2097 "parsermodule.c"
        var $109=$107+24*$108; //@line 2097 "parsermodule.c"
        var $110=_validate_except_clause($109); //@line 2097 "parsermodule.c"
        var $111=($110)==0; //@line 2097 "parsermodule.c"
        if ($111) { __label__ = 29; break; } else { __label__ = 26; break; } //@line 2097 "parsermodule.c"
      case 26: // $bb28
        var $112=$tree_addr; //@line 2097 "parsermodule.c"
        var $113=$112+20; //@line 2097 "parsermodule.c"
        var $114=HEAP[$113]; //@line 2097 "parsermodule.c"
        var $115=$pos; //@line 2097 "parsermodule.c"
        var $116=($115) + 1; //@line 2097 "parsermodule.c"
        var $117=$114+24*$116; //@line 2097 "parsermodule.c"
        var $118=_validate_terminal($117, 11, __str54); //@line 2097 "parsermodule.c"
        var $119=($118)==0; //@line 2097 "parsermodule.c"
        if ($119) { __label__ = 29; break; } else { __label__ = 27; break; } //@line 2097 "parsermodule.c"
      case 27: // $bb29
        var $120=$tree_addr; //@line 2097 "parsermodule.c"
        var $121=$120+20; //@line 2097 "parsermodule.c"
        var $122=HEAP[$121]; //@line 2097 "parsermodule.c"
        var $123=$pos; //@line 2097 "parsermodule.c"
        var $124=($123) + 2; //@line 2097 "parsermodule.c"
        var $125=$122+24*$124; //@line 2097 "parsermodule.c"
        var $126=_validate_suite($125); //@line 2097 "parsermodule.c"
        var $127=($126)==0; //@line 2097 "parsermodule.c"
        if ($127) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 2097 "parsermodule.c"
      case 28: // $bb30
        $iftmp_139=1; //@line 2097 "parsermodule.c"
        __label__ = 30; break; //@line 2097 "parsermodule.c"
      case 29: // $bb31
        $iftmp_139=0; //@line 2097 "parsermodule.c"
        __label__ = 30; break; //@line 2097 "parsermodule.c"
      case 30: // $bb32
        var $128=$iftmp_139; //@line 2097 "parsermodule.c"
        $res=$128; //@line 2097 "parsermodule.c"
        var $129=$pos; //@line 2100 "parsermodule.c"
        var $130=($129) + 3; //@line 2100 "parsermodule.c"
        $pos=$130; //@line 2100 "parsermodule.c"
        __lastLabel__ = 30; __label__ = 32; break; //@line 2100 "parsermodule.c"
      case 31: // $bb33thread_pre_split
        var $_pr1=$res;
        __lastLabel__ = 31; __label__ = 32; break;
      case 32: // $bb33
        var $131=__lastLabel__ == 31 ? $_pr1 : ($128);
        var $132=($131)==0; //@line 2096 "parsermodule.c"
        if ($132) { __label__ = 35; break; } else { __label__ = 33; break; } //@line 2096 "parsermodule.c"
      case 33: // $bb34
        var $133=$pos; //@line 2096 "parsermodule.c"
        var $134=$nch; //@line 2096 "parsermodule.c"
        var $135=($133) >= ($134); //@line 2096 "parsermodule.c"
        if ($135) { __label__ = 35; break; } else { __label__ = 34; break; } //@line 2096 "parsermodule.c"
      case 34: // $bb35
        var $136=$tree_addr; //@line 2096 "parsermodule.c"
        var $137=$136+20; //@line 2096 "parsermodule.c"
        var $138=HEAP[$137]; //@line 2096 "parsermodule.c"
        var $139=$pos; //@line 2096 "parsermodule.c"
        var $140=$138+24*$139; //@line 2096 "parsermodule.c"
        var $141=$140; //@line 2096 "parsermodule.c"
        var $142=HEAP[$141]; //@line 2096 "parsermodule.c"
        var $143=($142)==299; //@line 2096 "parsermodule.c"
        if ($143) { __label__ = 25; break; } else { __label__ = 35; break; } //@line 2096 "parsermodule.c"
      case 35: // $bb36
        var $144=$res; //@line 2103 "parsermodule.c"
        var $145=($144)!=0; //@line 2103 "parsermodule.c"
        if ($145) { __label__ = 36; break; } else { __label__ = 54; break; } //@line 2103 "parsermodule.c"
      case 36: // $bb37
        var $146=$pos; //@line 2103 "parsermodule.c"
        var $147=$nch; //@line 2103 "parsermodule.c"
        var $148=($146) < ($147); //@line 2103 "parsermodule.c"
        if ($148) { __label__ = 37; break; } else { __label__ = 44; break; } //@line 2103 "parsermodule.c"
      case 37: // $bb38
        var $149=$tree_addr; //@line 2103 "parsermodule.c"
        var $150=$149+20; //@line 2103 "parsermodule.c"
        var $151=HEAP[$150]; //@line 2103 "parsermodule.c"
        var $152=$pos; //@line 2103 "parsermodule.c"
        var $153=$151+24*$152; //@line 2103 "parsermodule.c"
        var $154=$153; //@line 2103 "parsermodule.c"
        var $155=HEAP[$154]; //@line 2103 "parsermodule.c"
        var $156=($155)==1; //@line 2103 "parsermodule.c"
        if ($156) { __label__ = 38; break; } else { __label__ = 44; break; } //@line 2103 "parsermodule.c"
      case 38: // $bb39
        var $157=$tree_addr; //@line 2103 "parsermodule.c"
        var $158=$157+20; //@line 2103 "parsermodule.c"
        var $159=HEAP[$158]; //@line 2103 "parsermodule.c"
        var $160=$pos; //@line 2103 "parsermodule.c"
        var $161=$159+24*$160; //@line 2103 "parsermodule.c"
        var $162=$161+4; //@line 2103 "parsermodule.c"
        var $163=HEAP[$162]; //@line 2103 "parsermodule.c"
        var $164=_strcmp($163, __str58); //@line 2103 "parsermodule.c"
        var $165=($164)==0; //@line 2103 "parsermodule.c"
        if ($165) { __label__ = 39; break; } else { __label__ = 44; break; } //@line 2103 "parsermodule.c"
      case 39: // $bb40
        var $166=$tree_addr; //@line 2105 "parsermodule.c"
        var $167=$166+20; //@line 2105 "parsermodule.c"
        var $168=HEAP[$167]; //@line 2105 "parsermodule.c"
        var $169=$pos; //@line 2105 "parsermodule.c"
        var $170=($169) + 1; //@line 2105 "parsermodule.c"
        var $171=$168+24*$170; //@line 2105 "parsermodule.c"
        var $172=_validate_terminal($171, 11, __str54); //@line 2105 "parsermodule.c"
        var $173=($172)==0; //@line 2105 "parsermodule.c"
        if ($173) { __label__ = 42; break; } else { __label__ = 40; break; } //@line 2105 "parsermodule.c"
      case 40: // $bb41
        var $174=$tree_addr; //@line 2105 "parsermodule.c"
        var $175=$174+20; //@line 2105 "parsermodule.c"
        var $176=HEAP[$175]; //@line 2105 "parsermodule.c"
        var $177=$pos; //@line 2105 "parsermodule.c"
        var $178=($177) + 2; //@line 2105 "parsermodule.c"
        var $179=$176+24*$178; //@line 2105 "parsermodule.c"
        var $180=_validate_suite($179); //@line 2105 "parsermodule.c"
        var $181=($180)==0; //@line 2105 "parsermodule.c"
        if ($181) { __label__ = 42; break; } else { __label__ = 41; break; } //@line 2105 "parsermodule.c"
      case 41: // $bb42
        $iftmp_140=1; //@line 2105 "parsermodule.c"
        __label__ = 43; break; //@line 2105 "parsermodule.c"
      case 42: // $bb43
        $iftmp_140=0; //@line 2105 "parsermodule.c"
        __label__ = 43; break; //@line 2105 "parsermodule.c"
      case 43: // $bb44
        var $182=$iftmp_140; //@line 2105 "parsermodule.c"
        $res=$182; //@line 2105 "parsermodule.c"
        var $183=$pos; //@line 2107 "parsermodule.c"
        var $184=($183) + 3; //@line 2107 "parsermodule.c"
        $pos=$184; //@line 2107 "parsermodule.c"
        __lastLabel__ = 43; __label__ = 45; break; //@line 2107 "parsermodule.c"
      case 44: // $bb45thread_pre_split
        var $_pr2=$res;
        __lastLabel__ = 44; __label__ = 45; break;
      case 45: // $bb45
        var $185=__lastLabel__ == 44 ? $_pr2 : ($182);
        var $186=($185)!=0; //@line 2109 "parsermodule.c"
        if ($186) { __label__ = 46; break; } else { __label__ = 54; break; } //@line 2109 "parsermodule.c"
      case 46: // $bb46
        var $187=$pos; //@line 2109 "parsermodule.c"
        var $188=$nch; //@line 2109 "parsermodule.c"
        var $189=($187) < ($188); //@line 2109 "parsermodule.c"
        if ($189) { __label__ = 47; break; } else { __label__ = 54; break; } //@line 2109 "parsermodule.c"
      case 47: // $bb47
        var $190=$tree_addr; //@line 2111 "parsermodule.c"
        var $191=$190+20; //@line 2111 "parsermodule.c"
        var $192=HEAP[$191]; //@line 2111 "parsermodule.c"
        var $193=$pos; //@line 2111 "parsermodule.c"
        var $194=$192+24*$193; //@line 2111 "parsermodule.c"
        var $195=_validate_terminal($194, 1, __str132); //@line 2111 "parsermodule.c"
        var $196=($195)==0; //@line 2111 "parsermodule.c"
        if ($196) { __label__ = 52; break; } else { __label__ = 48; break; } //@line 2111 "parsermodule.c"
      case 48: // $bb48
        var $197=$pos; //@line 2111 "parsermodule.c"
        var $198=($197) + 3; //@line 2111 "parsermodule.c"
        var $199=$tree_addr; //@line 2111 "parsermodule.c"
        var $200=_validate_numnodes($199, $198, __str134); //@line 2111 "parsermodule.c"
        var $201=($200)==0; //@line 2111 "parsermodule.c"
        if ($201) { __label__ = 52; break; } else { __label__ = 49; break; } //@line 2111 "parsermodule.c"
      case 49: // $bb49
        var $202=$tree_addr; //@line 2111 "parsermodule.c"
        var $203=$202+20; //@line 2111 "parsermodule.c"
        var $204=HEAP[$203]; //@line 2111 "parsermodule.c"
        var $205=$pos; //@line 2111 "parsermodule.c"
        var $206=($205) + 1; //@line 2111 "parsermodule.c"
        var $207=$204+24*$206; //@line 2111 "parsermodule.c"
        var $208=_validate_terminal($207, 11, __str54); //@line 2111 "parsermodule.c"
        var $209=($208)==0; //@line 2111 "parsermodule.c"
        if ($209) { __label__ = 52; break; } else { __label__ = 50; break; } //@line 2111 "parsermodule.c"
      case 50: // $bb50
        var $210=$tree_addr; //@line 2111 "parsermodule.c"
        var $211=$210+20; //@line 2111 "parsermodule.c"
        var $212=HEAP[$211]; //@line 2111 "parsermodule.c"
        var $213=$pos; //@line 2111 "parsermodule.c"
        var $214=($213) + 2; //@line 2111 "parsermodule.c"
        var $215=$212+24*$214; //@line 2111 "parsermodule.c"
        var $216=_validate_suite($215); //@line 2111 "parsermodule.c"
        var $217=($216)==0; //@line 2111 "parsermodule.c"
        if ($217) { __label__ = 52; break; } else { __label__ = 51; break; } //@line 2111 "parsermodule.c"
      case 51: // $bb51
        $iftmp_141=1; //@line 2111 "parsermodule.c"
        __label__ = 53; break; //@line 2111 "parsermodule.c"
      case 52: // $bb52
        $iftmp_141=0; //@line 2111 "parsermodule.c"
        __label__ = 53; break; //@line 2111 "parsermodule.c"
      case 53: // $bb53
        var $218=$iftmp_141; //@line 2111 "parsermodule.c"
        $res=$218; //@line 2111 "parsermodule.c"
        __label__ = 54; break; //@line 2111 "parsermodule.c"
      case 54: // $bb54
        var $219=$res; //@line 2116 "parsermodule.c"
        $0=$219; //@line 2116 "parsermodule.c"
        __label__ = 55; break; //@line 2116 "parsermodule.c"
      case 55: // $bb55
        var $220=$0; //@line 2093 "parsermodule.c"
        $retval=$220; //@line 2093 "parsermodule.c"
        var $retval56=$retval; //@line 2093 "parsermodule.c"
        ;
        return $retval56; //@line 2093 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_except_clause($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_143;
        var $iftmp_142;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2123 "parsermodule.c"
        var $2=$1+16; //@line 2123 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2123 "parsermodule.c"
        $nch=$3; //@line 2123 "parsermodule.c"
        var $4=$tree_addr; //@line 2126 "parsermodule.c"
        var $5=_validate_ntype($4, 299); //@line 2126 "parsermodule.c"
        var $6=($5)==0; //@line 2126 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2126 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2126 "parsermodule.c"
        var $8=($7)==1; //@line 2126 "parsermodule.c"
        var $9=$nch; //@line 2126 "parsermodule.c"
        var $10=($9)==2; //@line 2126 "parsermodule.c"
        var $or_cond=($8) | ($10);
        var $11=$nch; //@line 2126 "parsermodule.c"
        var $12=($11)==4; //@line 2126 "parsermodule.c"
        var $or_cond3=($or_cond) | ($12);
        if ($or_cond3) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2126 "parsermodule.c"
      case 2: // $bb3
        var $13=$tree_addr; //@line 2126 "parsermodule.c"
        var $14=$13+20; //@line 2126 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2126 "parsermodule.c"
        var $16=$15; //@line 2126 "parsermodule.c"
        var $17=_validate_terminal($16, 1, __str130); //@line 2126 "parsermodule.c"
        var $18=($17)==0; //@line 2126 "parsermodule.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2126 "parsermodule.c"
      case 3: // $bb9_thread4
        $iftmp_142=0; //@line 2126 "parsermodule.c"
        $res=0; //@line 2126 "parsermodule.c"
        __label__ = 15; break;
      case 4: // $bb7
        $iftmp_142=1; //@line 2126 "parsermodule.c"
        $res=1; //@line 2126 "parsermodule.c"
        var $19=$nch; //@line 2128 "parsermodule.c"
        var $20=($19) > 1; //@line 2128 "parsermodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 15; break; } //@line 2128 "parsermodule.c"
      case 5: // $bb9
        var $21=$tree_addr; //@line 2129 "parsermodule.c"
        var $22=$21+20; //@line 2129 "parsermodule.c"
        var $23=HEAP[$22]; //@line 2129 "parsermodule.c"
        var $24=$23+24; //@line 2129 "parsermodule.c"
        var $25=_validate_test($24); //@line 2129 "parsermodule.c"
        $res=$25; //@line 2129 "parsermodule.c"
        var $26=($25)!=0; //@line 2130 "parsermodule.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 15; break; } //@line 2130 "parsermodule.c"
      case 6: // $bb10
        var $_pr=$nch;
        var $27=($_pr)==4; //@line 2130 "parsermodule.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 15; break; } //@line 2130 "parsermodule.c"
      case 7: // $bb11
        var $28=$tree_addr; //@line 2131 "parsermodule.c"
        var $29=$28+20; //@line 2131 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2131 "parsermodule.c"
        var $31=$30+48; //@line 2131 "parsermodule.c"
        var $32=$31; //@line 2131 "parsermodule.c"
        var $33=HEAP[$32]; //@line 2131 "parsermodule.c"
        var $34=($33)==1; //@line 2131 "parsermodule.c"
        var $35=$tree_addr; //@line 2132 "parsermodule.c"
        var $36=$35+20; //@line 2132 "parsermodule.c"
        var $37=HEAP[$36]; //@line 2132 "parsermodule.c"
        var $38=$37+48; //@line 2132 "parsermodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2131 "parsermodule.c"
      case 8: // $bb12
        var $39=_validate_terminal($38, 1, __str112); //@line 2132 "parsermodule.c"
        $res=$39; //@line 2132 "parsermodule.c"
        __lastLabel__ = 8; __label__ = 10; break; //@line 2132 "parsermodule.c"
      case 9: // $bb13
        var $40=_validate_terminal($38, 12, __str52); //@line 2134 "parsermodule.c"
        $res=$40; //@line 2134 "parsermodule.c"
        __lastLabel__ = 9; __label__ = 10; break; //@line 2134 "parsermodule.c"
      case 10: // $bb14
        var $41=__lastLabel__ == 9 ? $40 : ($39);
        var $42=($41)==0; //@line 2135 "parsermodule.c"
        if ($42) { __label__ = 13; break; } else { __label__ = 11; break; } //@line 2135 "parsermodule.c"
      case 11: // $bb15
        var $43=$tree_addr; //@line 2135 "parsermodule.c"
        var $44=$43+20; //@line 2135 "parsermodule.c"
        var $45=HEAP[$44]; //@line 2135 "parsermodule.c"
        var $46=$45+72; //@line 2135 "parsermodule.c"
        var $47=_validate_test($46); //@line 2135 "parsermodule.c"
        var $48=($47)==0; //@line 2135 "parsermodule.c"
        if ($48) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2135 "parsermodule.c"
      case 12: // $bb16
        $iftmp_143=1; //@line 2135 "parsermodule.c"
        __label__ = 14; break; //@line 2135 "parsermodule.c"
      case 13: // $bb17
        $iftmp_143=0; //@line 2135 "parsermodule.c"
        __label__ = 14; break; //@line 2135 "parsermodule.c"
      case 14: // $bb18
        var $49=$iftmp_143; //@line 2135 "parsermodule.c"
        $res=$49; //@line 2135 "parsermodule.c"
        __label__ = 15; break; //@line 2135 "parsermodule.c"
      case 15: // $bb19
        var $50=$res; //@line 2137 "parsermodule.c"
        $0=$50; //@line 2137 "parsermodule.c"
        var $51=$0; //@line 2137 "parsermodule.c"
        $retval=$51; //@line 2137 "parsermodule.c"
        var $retval20=$retval; //@line 2137 "parsermodule.c"
        ;
        return $retval20; //@line 2137 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_test($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_146;
        var $iftmp_145;
        var $iftmp_144;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2144 "parsermodule.c"
        var $2=$1+16; //@line 2144 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2144 "parsermodule.c"
        $nch=$3; //@line 2144 "parsermodule.c"
        var $4=$tree_addr; //@line 2145 "parsermodule.c"
        var $5=_validate_ntype($4, 304); //@line 2145 "parsermodule.c"
        var $6=($5)==0; //@line 2145 "parsermodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 2145 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2145 "parsermodule.c"
        var $8=($7) & 1; //@line 2145 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2145 "parsermodule.c"
        var $toBool=($9)!=0; //@line 2145 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2145 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2145 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2145 "parsermodule.c"
        if ($toBool3) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2145 "parsermodule.c"
      case 2: // $bb13_thread
        $iftmp_144=0; //@line 2145 "parsermodule.c"
        $res=0; //@line 2145 "parsermodule.c"
        __label__ = 20; break;
      case 3: // $bb7
        $iftmp_144=1; //@line 2145 "parsermodule.c"
        $res=1; //@line 2145 "parsermodule.c"
        var $10=$tree_addr; //@line 2147 "parsermodule.c"
        var $11=$10+20; //@line 2147 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2147 "parsermodule.c"
        var $13=$12; //@line 2147 "parsermodule.c"
        var $14=$13; //@line 2147 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2147 "parsermodule.c"
        var $16=($15)!=321; //@line 2147 "parsermodule.c"
        if ($16) { __label__ = 9; break; } else { __label__ = 4; break; } //@line 2147 "parsermodule.c"
      case 4: // $bb8
        var $17=$nch; //@line 2148 "parsermodule.c"
        var $18=($17)!=1; //@line 2148 "parsermodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 2148 "parsermodule.c"
      case 5: // $bb9
        var $19=$tree_addr; //@line 2148 "parsermodule.c"
        var $20=$19+20; //@line 2148 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2148 "parsermodule.c"
        var $22=$21; //@line 2148 "parsermodule.c"
        var $23=_validate_lambdef($22); //@line 2148 "parsermodule.c"
        var $24=($23)==0; //@line 2148 "parsermodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 2148 "parsermodule.c"
      case 6: // $bb10
        $iftmp_145=1; //@line 2148 "parsermodule.c"
        __label__ = 8; break; //@line 2148 "parsermodule.c"
      case 7: // $bb11
        $iftmp_145=0; //@line 2148 "parsermodule.c"
        __label__ = 8; break; //@line 2148 "parsermodule.c"
      case 8: // $bb12
        var $25=$iftmp_145; //@line 2148 "parsermodule.c"
        $res=$25; //@line 2148 "parsermodule.c"
        __label__ = 20; break; //@line 2148 "parsermodule.c"
      case 9: // $bb13
        var $_pr=$res;
        var $26=($_pr)!=0; //@line 2150 "parsermodule.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 20; break; } //@line 2150 "parsermodule.c"
      case 10: // $bb14
        var $27=$tree_addr; //@line 2151 "parsermodule.c"
        var $28=$27+20; //@line 2151 "parsermodule.c"
        var $29=HEAP[$28]; //@line 2151 "parsermodule.c"
        var $30=$29; //@line 2151 "parsermodule.c"
        var $31=_validate_or_test($30); //@line 2151 "parsermodule.c"
        $res=$31; //@line 2151 "parsermodule.c"
        var $32=$res; //@line 2152 "parsermodule.c"
        var $33=($32)==0; //@line 2152 "parsermodule.c"
        if ($33) { __label__ = 18; break; } else { __label__ = 11; break; } //@line 2152 "parsermodule.c"
      case 11: // $bb15
        var $34=$nch; //@line 2152 "parsermodule.c"
        var $35=($34)==1; //@line 2152 "parsermodule.c"
        if ($35) { __label__ = 17; break; } else { __label__ = 12; break; } //@line 2152 "parsermodule.c"
      case 12: // $bb16
        var $36=$nch; //@line 2152 "parsermodule.c"
        var $37=($36)!=5; //@line 2152 "parsermodule.c"
        if ($37) { __label__ = 18; break; } else { __label__ = 13; break; } //@line 2152 "parsermodule.c"
      case 13: // $bb17
        var $38=$tree_addr; //@line 2152 "parsermodule.c"
        var $39=$38+20; //@line 2152 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2152 "parsermodule.c"
        var $41=$40+24; //@line 2152 "parsermodule.c"
        var $42=_validate_terminal($41, 1, __str57); //@line 2152 "parsermodule.c"
        var $43=($42)==0; //@line 2152 "parsermodule.c"
        if ($43) { __label__ = 18; break; } else { __label__ = 14; break; } //@line 2152 "parsermodule.c"
      case 14: // $bb18
        var $44=$tree_addr; //@line 2152 "parsermodule.c"
        var $45=$44+20; //@line 2152 "parsermodule.c"
        var $46=HEAP[$45]; //@line 2152 "parsermodule.c"
        var $47=$46+48; //@line 2152 "parsermodule.c"
        var $48=_validate_or_test($47); //@line 2152 "parsermodule.c"
        var $49=($48)==0; //@line 2152 "parsermodule.c"
        if ($49) { __label__ = 18; break; } else { __label__ = 15; break; } //@line 2152 "parsermodule.c"
      case 15: // $bb19
        var $50=$tree_addr; //@line 2152 "parsermodule.c"
        var $51=$50+20; //@line 2152 "parsermodule.c"
        var $52=HEAP[$51]; //@line 2152 "parsermodule.c"
        var $53=$52+72; //@line 2152 "parsermodule.c"
        var $54=_validate_terminal($53, 1, __str58); //@line 2152 "parsermodule.c"
        var $55=($54)==0; //@line 2152 "parsermodule.c"
        if ($55) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 2152 "parsermodule.c"
      case 16: // $bb20
        var $56=$tree_addr; //@line 2152 "parsermodule.c"
        var $57=$56+20; //@line 2152 "parsermodule.c"
        var $58=HEAP[$57]; //@line 2152 "parsermodule.c"
        var $59=$58+96; //@line 2152 "parsermodule.c"
        var $60=_validate_test($59); //@line 2152 "parsermodule.c"
        var $61=($60)!=0; //@line 2152 "parsermodule.c"
        if ($61) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2152 "parsermodule.c"
      case 17: // $bb21
        $iftmp_146=1; //@line 2152 "parsermodule.c"
        __label__ = 19; break; //@line 2152 "parsermodule.c"
      case 18: // $bb22
        $iftmp_146=0; //@line 2152 "parsermodule.c"
        __label__ = 19; break; //@line 2152 "parsermodule.c"
      case 19: // $bb23
        var $62=$iftmp_146; //@line 2152 "parsermodule.c"
        $res=$62; //@line 2152 "parsermodule.c"
        __label__ = 20; break; //@line 2152 "parsermodule.c"
      case 20: // $bb24
        var $63=$res; //@line 2158 "parsermodule.c"
        $0=$63; //@line 2158 "parsermodule.c"
        var $64=$0; //@line 2158 "parsermodule.c"
        $retval=$64; //@line 2158 "parsermodule.c"
        var $retval25=$retval; //@line 2158 "parsermodule.c"
        ;
        return $retval25; //@line 2158 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_old_test($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_147;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2164 "parsermodule.c"
        var $2=$1+16; //@line 2164 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2164 "parsermodule.c"
        $nch=$3; //@line 2164 "parsermodule.c"
        var $4=$tree_addr; //@line 2165 "parsermodule.c"
        var $5=_validate_ntype($4, 302); //@line 2165 "parsermodule.c"
        var $6=($5)==0; //@line 2165 "parsermodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 2165 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2165 "parsermodule.c"
        var $8=($7)!=1; //@line 2165 "parsermodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2165 "parsermodule.c"
      case 2: // $bb6_thread
        $iftmp_147=0; //@line 2165 "parsermodule.c"
        $res=0; //@line 2165 "parsermodule.c"
        __label__ = 7; break;
      case 3: // $bb4
        $iftmp_147=1; //@line 2165 "parsermodule.c"
        $res=1; //@line 2165 "parsermodule.c"
        var $9=$tree_addr; //@line 2167 "parsermodule.c"
        var $10=$9+20; //@line 2167 "parsermodule.c"
        var $11=HEAP[$10]; //@line 2167 "parsermodule.c"
        var $12=$11; //@line 2167 "parsermodule.c"
        var $13=$12; //@line 2167 "parsermodule.c"
        var $14=HEAP[$13]; //@line 2167 "parsermodule.c"
        var $15=($14)!=303; //@line 2167 "parsermodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2167 "parsermodule.c"
      case 4: // $bb5
        var $16=$tree_addr; //@line 2168 "parsermodule.c"
        var $17=$16+20; //@line 2168 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2168 "parsermodule.c"
        var $19=$18; //@line 2168 "parsermodule.c"
        var $20=_validate_old_lambdef($19); //@line 2168 "parsermodule.c"
        $res=$20; //@line 2168 "parsermodule.c"
        __label__ = 7; break; //@line 2168 "parsermodule.c"
      case 5: // $bb6
        var $_pr=$res;
        var $21=($_pr)!=0; //@line 2169 "parsermodule.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2169 "parsermodule.c"
      case 6: // $bb7
        var $22=$tree_addr; //@line 2170 "parsermodule.c"
        var $23=$22+20; //@line 2170 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2170 "parsermodule.c"
        var $25=$24; //@line 2170 "parsermodule.c"
        var $26=_validate_or_test($25); //@line 2170 "parsermodule.c"
        $res=$26; //@line 2170 "parsermodule.c"
        __label__ = 7; break; //@line 2170 "parsermodule.c"
      case 7: // $bb8
        var $27=$res; //@line 2172 "parsermodule.c"
        $0=$27; //@line 2172 "parsermodule.c"
        var $28=$0; //@line 2172 "parsermodule.c"
        $retval=$28; //@line 2172 "parsermodule.c"
        var $retval9=$retval; //@line 2172 "parsermodule.c"
        ;
        return $retval9; //@line 2172 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_or_test($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_149;
        var $iftmp_148;
        var $nch;
        var $res;
        var $pos;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2178 "parsermodule.c"
        var $2=$1+16; //@line 2178 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2178 "parsermodule.c"
        $nch=$3; //@line 2178 "parsermodule.c"
        var $4=$tree_addr; //@line 2179 "parsermodule.c"
        var $5=_validate_ntype($4, 305); //@line 2179 "parsermodule.c"
        var $6=($5)==0; //@line 2179 "parsermodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 2179 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2179 "parsermodule.c"
        var $8=($7) & 1; //@line 2179 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2179 "parsermodule.c"
        var $toBool=($9)!=0; //@line 2179 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2179 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2179 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2179 "parsermodule.c"
        if ($toBool3) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2179 "parsermodule.c"
      case 2: // $bb6
        $iftmp_148=0; //@line 2179 "parsermodule.c"
        $res=0; //@line 2179 "parsermodule.c"
        __label__ = 11; break;
      case 3: // $bb7
        $iftmp_148=1; //@line 2179 "parsermodule.c"
        $res=1; //@line 2179 "parsermodule.c"
        var $10=$tree_addr; //@line 2183 "parsermodule.c"
        var $11=$10+20; //@line 2183 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2183 "parsermodule.c"
        var $13=$12; //@line 2183 "parsermodule.c"
        var $14=_validate_and_test($13); //@line 2183 "parsermodule.c"
        $res=$14; //@line 2183 "parsermodule.c"
        $pos=1; //@line 2184 "parsermodule.c"
        __lastLabel__ = 3; __label__ = 9; break; //@line 2184 "parsermodule.c"
      case 4: // $bb8
        var $15=$tree_addr; //@line 2185 "parsermodule.c"
        var $16=$15+20; //@line 2185 "parsermodule.c"
        var $17=HEAP[$16]; //@line 2185 "parsermodule.c"
        var $18=$pos; //@line 2185 "parsermodule.c"
        var $19=$17+24*$18; //@line 2185 "parsermodule.c"
        var $20=_validate_terminal($19, 1, __str135); //@line 2185 "parsermodule.c"
        var $21=($20)==0; //@line 2185 "parsermodule.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 2185 "parsermodule.c"
      case 5: // $bb9
        var $22=$tree_addr; //@line 2185 "parsermodule.c"
        var $23=$22+20; //@line 2185 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2185 "parsermodule.c"
        var $25=$pos; //@line 2185 "parsermodule.c"
        var $26=($25) + 1; //@line 2185 "parsermodule.c"
        var $27=$24+24*$26; //@line 2185 "parsermodule.c"
        var $28=_validate_and_test($27); //@line 2185 "parsermodule.c"
        var $29=($28)==0; //@line 2185 "parsermodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 2185 "parsermodule.c"
      case 6: // $bb10
        $iftmp_149=1; //@line 2185 "parsermodule.c"
        __label__ = 8; break; //@line 2185 "parsermodule.c"
      case 7: // $bb11
        $iftmp_149=0; //@line 2185 "parsermodule.c"
        __label__ = 8; break; //@line 2185 "parsermodule.c"
      case 8: // $bb12
        var $30=$iftmp_149; //@line 2185 "parsermodule.c"
        $res=$30; //@line 2185 "parsermodule.c"
        var $31=$pos; //@line 2184 "parsermodule.c"
        var $32=($31) + 2; //@line 2184 "parsermodule.c"
        $pos=$32; //@line 2184 "parsermodule.c"
        __lastLabel__ = 8; __label__ = 9; break; //@line 2184 "parsermodule.c"
      case 9: // $bb13
        var $33=__lastLabel__ == 8 ? $30 : ($14);
        var $34=($33)==0; //@line 2184 "parsermodule.c"
        if ($34) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2184 "parsermodule.c"
      case 10: // $bb14
        var $35=$pos; //@line 2184 "parsermodule.c"
        var $36=$nch; //@line 2184 "parsermodule.c"
        var $37=($35) < ($36); //@line 2184 "parsermodule.c"
        if ($37) { __label__ = 4; break; } else { __label__ = 11; break; } //@line 2184 "parsermodule.c"
      case 11: // $bb15
        var $38=$res; //@line 2188 "parsermodule.c"
        $0=$38; //@line 2188 "parsermodule.c"
        var $39=$0; //@line 2188 "parsermodule.c"
        $retval=$39; //@line 2188 "parsermodule.c"
        var $retval16=$retval; //@line 2188 "parsermodule.c"
        ;
        return $retval16; //@line 2188 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_and_test($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_151;
        var $iftmp_150;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2196 "parsermodule.c"
        var $2=$1+16; //@line 2196 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2196 "parsermodule.c"
        $nch=$3; //@line 2196 "parsermodule.c"
        var $4=$tree_addr; //@line 2199 "parsermodule.c"
        var $5=_validate_ntype($4, 306); //@line 2199 "parsermodule.c"
        var $6=($5)==0; //@line 2199 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2199 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2199 "parsermodule.c"
        var $8=($7) & 1; //@line 2199 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2199 "parsermodule.c"
        var $toBool=($9)!=0; //@line 2199 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2199 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2199 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2199 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2199 "parsermodule.c"
      case 2: // $bb4
        var $10=$tree_addr; //@line 2199 "parsermodule.c"
        var $11=$10+20; //@line 2199 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2199 "parsermodule.c"
        var $13=$12; //@line 2199 "parsermodule.c"
        var $14=_validate_not_test($13); //@line 2199 "parsermodule.c"
        var $15=($14)==0; //@line 2199 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2199 "parsermodule.c"
      case 3: // $bb5
        $iftmp_150=1; //@line 2199 "parsermodule.c"
        __label__ = 5; break; //@line 2199 "parsermodule.c"
      case 4: // $bb6
        $iftmp_150=0; //@line 2199 "parsermodule.c"
        __label__ = 5; break; //@line 2199 "parsermodule.c"
      case 5: // $bb7
        var $16=$iftmp_150; //@line 2199 "parsermodule.c"
        $res=$16; //@line 2199 "parsermodule.c"
        $pos=1; //@line 2201 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 11; break; //@line 2201 "parsermodule.c"
      case 6: // $bb8
        var $17=$tree_addr; //@line 2202 "parsermodule.c"
        var $18=$17+20; //@line 2202 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2202 "parsermodule.c"
        var $20=$pos; //@line 2202 "parsermodule.c"
        var $21=$19+24*$20; //@line 2202 "parsermodule.c"
        var $22=_validate_terminal($21, 1, __str136); //@line 2202 "parsermodule.c"
        var $23=($22)==0; //@line 2202 "parsermodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2202 "parsermodule.c"
      case 7: // $bb9
        var $24=$tree_addr; //@line 2202 "parsermodule.c"
        var $25=$24+20; //@line 2202 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2202 "parsermodule.c"
        var $27=$26; //@line 2202 "parsermodule.c"
        var $28=_validate_not_test($27); //@line 2202 "parsermodule.c"
        var $29=($28)==0; //@line 2202 "parsermodule.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2202 "parsermodule.c"
      case 8: // $bb10
        $iftmp_151=1; //@line 2202 "parsermodule.c"
        __label__ = 10; break; //@line 2202 "parsermodule.c"
      case 9: // $bb11
        $iftmp_151=0; //@line 2202 "parsermodule.c"
        __label__ = 10; break; //@line 2202 "parsermodule.c"
      case 10: // $bb12
        var $30=$iftmp_151; //@line 2202 "parsermodule.c"
        $res=$30; //@line 2202 "parsermodule.c"
        var $31=$pos; //@line 2201 "parsermodule.c"
        var $32=($31) + 2; //@line 2201 "parsermodule.c"
        $pos=$32; //@line 2201 "parsermodule.c"
        __lastLabel__ = 10; __label__ = 11; break; //@line 2201 "parsermodule.c"
      case 11: // $bb13
        var $33=__lastLabel__ == 10 ? $30 : ($16);
        var $34=($33)==0; //@line 2201 "parsermodule.c"
        if ($34) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2201 "parsermodule.c"
      case 12: // $bb14
        var $35=$pos; //@line 2201 "parsermodule.c"
        var $36=$nch; //@line 2201 "parsermodule.c"
        var $37=($35) < ($36); //@line 2201 "parsermodule.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2201 "parsermodule.c"
      case 13: // $bb15
        var $38=$res; //@line 2205 "parsermodule.c"
        $0=$38; //@line 2205 "parsermodule.c"
        var $39=$0; //@line 2205 "parsermodule.c"
        $retval=$39; //@line 2205 "parsermodule.c"
        var $retval16=$retval; //@line 2205 "parsermodule.c"
        ;
        return $retval16; //@line 2205 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_not_test($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_153;
        var $iftmp_152;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2212 "parsermodule.c"
        var $2=$1+16; //@line 2212 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2212 "parsermodule.c"
        $nch=$3; //@line 2212 "parsermodule.c"
        var $4=$tree_addr; //@line 2213 "parsermodule.c"
        var $5=_validate_ntype($4, 307); //@line 2213 "parsermodule.c"
        var $6=($5)==0; //@line 2213 "parsermodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 2213 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2213 "parsermodule.c"
        var $8=($7)==1; //@line 2213 "parsermodule.c"
        var $9=$nch; //@line 2213 "parsermodule.c"
        var $10=($9)==2; //@line 2213 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2213 "parsermodule.c"
      case 2: // $bb4
        $iftmp_152=0; //@line 2213 "parsermodule.c"
        $res=0; //@line 2213 "parsermodule.c"
        __label__ = 11; break;
      case 3: // $bb5
        $iftmp_152=1; //@line 2213 "parsermodule.c"
        $res=1; //@line 2213 "parsermodule.c"
        var $11=$nch; //@line 2216 "parsermodule.c"
        var $12=($11)==2; //@line 2216 "parsermodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 2216 "parsermodule.c"
      case 4: // $bb6
        var $13=$tree_addr; //@line 2217 "parsermodule.c"
        var $14=$13+20; //@line 2217 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2217 "parsermodule.c"
        var $16=$15; //@line 2217 "parsermodule.c"
        var $17=_validate_terminal($16, 1, __str137); //@line 2217 "parsermodule.c"
        var $18=($17)==0; //@line 2217 "parsermodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 2217 "parsermodule.c"
      case 5: // $bb7
        var $19=$tree_addr; //@line 2217 "parsermodule.c"
        var $20=$19+20; //@line 2217 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2217 "parsermodule.c"
        var $22=$21+24; //@line 2217 "parsermodule.c"
        var $23=_validate_not_test($22); //@line 2217 "parsermodule.c"
        var $24=($23)==0; //@line 2217 "parsermodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 2217 "parsermodule.c"
      case 6: // $bb8
        $iftmp_153=1; //@line 2217 "parsermodule.c"
        __label__ = 8; break; //@line 2217 "parsermodule.c"
      case 7: // $bb9
        $iftmp_153=0; //@line 2217 "parsermodule.c"
        __label__ = 8; break; //@line 2217 "parsermodule.c"
      case 8: // $bb10
        var $25=$iftmp_153; //@line 2217 "parsermodule.c"
        $res=$25; //@line 2217 "parsermodule.c"
        __label__ = 11; break; //@line 2217 "parsermodule.c"
      case 9: // $bb11
        var $26=$nch; //@line 2219 "parsermodule.c"
        var $27=($26)==1; //@line 2219 "parsermodule.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2219 "parsermodule.c"
      case 10: // $bb12
        var $28=$tree_addr; //@line 2220 "parsermodule.c"
        var $29=$28+20; //@line 2220 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2220 "parsermodule.c"
        var $31=$30; //@line 2220 "parsermodule.c"
        var $32=_validate_comparison($31); //@line 2220 "parsermodule.c"
        $res=$32; //@line 2220 "parsermodule.c"
        __label__ = 11; break; //@line 2220 "parsermodule.c"
      case 11: // $bb13
        var $33=$res; //@line 2222 "parsermodule.c"
        $0=$33; //@line 2222 "parsermodule.c"
        var $34=$0; //@line 2222 "parsermodule.c"
        $retval=$34; //@line 2222 "parsermodule.c"
        var $retval14=$retval; //@line 2222 "parsermodule.c"
        ;
        return $retval14; //@line 2222 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comparison($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_155;
        var $iftmp_154;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2230 "parsermodule.c"
        var $2=$1+16; //@line 2230 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2230 "parsermodule.c"
        $nch=$3; //@line 2230 "parsermodule.c"
        var $4=$tree_addr; //@line 2233 "parsermodule.c"
        var $5=_validate_ntype($4, 308); //@line 2233 "parsermodule.c"
        var $6=($5)==0; //@line 2233 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2233 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2233 "parsermodule.c"
        var $8=($7) & 1; //@line 2233 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2233 "parsermodule.c"
        var $toBool=($9)!=0; //@line 2233 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2233 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2233 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2233 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2233 "parsermodule.c"
      case 2: // $bb4
        var $10=$tree_addr; //@line 2233 "parsermodule.c"
        var $11=$10+20; //@line 2233 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2233 "parsermodule.c"
        var $13=$12; //@line 2233 "parsermodule.c"
        var $14=_validate_expr($13); //@line 2233 "parsermodule.c"
        var $15=($14)==0; //@line 2233 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2233 "parsermodule.c"
      case 3: // $bb5
        $iftmp_154=1; //@line 2233 "parsermodule.c"
        __label__ = 5; break; //@line 2233 "parsermodule.c"
      case 4: // $bb6
        $iftmp_154=0; //@line 2233 "parsermodule.c"
        __label__ = 5; break; //@line 2233 "parsermodule.c"
      case 5: // $bb7
        var $16=$iftmp_154; //@line 2233 "parsermodule.c"
        $res=$16; //@line 2233 "parsermodule.c"
        $pos=1; //@line 2235 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 11; break; //@line 2235 "parsermodule.c"
      case 6: // $bb8
        var $17=$tree_addr; //@line 2236 "parsermodule.c"
        var $18=$17+20; //@line 2236 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2236 "parsermodule.c"
        var $20=$pos; //@line 2236 "parsermodule.c"
        var $21=$19+24*$20; //@line 2236 "parsermodule.c"
        var $22=_validate_comp_op($21); //@line 2236 "parsermodule.c"
        var $23=($22)==0; //@line 2236 "parsermodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2236 "parsermodule.c"
      case 7: // $bb9
        var $24=$tree_addr; //@line 2236 "parsermodule.c"
        var $25=$24+20; //@line 2236 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2236 "parsermodule.c"
        var $27=$pos; //@line 2236 "parsermodule.c"
        var $28=($27) + 1; //@line 2236 "parsermodule.c"
        var $29=$26+24*$28; //@line 2236 "parsermodule.c"
        var $30=_validate_expr($29); //@line 2236 "parsermodule.c"
        var $31=($30)==0; //@line 2236 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2236 "parsermodule.c"
      case 8: // $bb10
        $iftmp_155=1; //@line 2236 "parsermodule.c"
        __label__ = 10; break; //@line 2236 "parsermodule.c"
      case 9: // $bb11
        $iftmp_155=0; //@line 2236 "parsermodule.c"
        __label__ = 10; break; //@line 2236 "parsermodule.c"
      case 10: // $bb12
        var $32=$iftmp_155; //@line 2236 "parsermodule.c"
        $res=$32; //@line 2236 "parsermodule.c"
        var $33=$pos; //@line 2235 "parsermodule.c"
        var $34=($33) + 2; //@line 2235 "parsermodule.c"
        $pos=$34; //@line 2235 "parsermodule.c"
        __lastLabel__ = 10; __label__ = 11; break; //@line 2235 "parsermodule.c"
      case 11: // $bb13
        var $35=__lastLabel__ == 10 ? $32 : ($16);
        var $36=($35)==0; //@line 2235 "parsermodule.c"
        if ($36) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2235 "parsermodule.c"
      case 12: // $bb14
        var $37=$pos; //@line 2235 "parsermodule.c"
        var $38=$nch; //@line 2235 "parsermodule.c"
        var $39=($37) < ($38); //@line 2235 "parsermodule.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2235 "parsermodule.c"
      case 13: // $bb15
        var $40=$res; //@line 2239 "parsermodule.c"
        $0=$40; //@line 2239 "parsermodule.c"
        var $41=$0; //@line 2239 "parsermodule.c"
        $retval=$41; //@line 2239 "parsermodule.c"
        var $retval16=$retval; //@line 2239 "parsermodule.c"
        ;
        return $retval16; //@line 2239 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comp_op($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $iftmp_158;
        var $iftmp_156;
        var $0;
        var $res;
        var $nch;
        $tree_addr=$tree;
        $res=0; //@line 2246 "parsermodule.c"
        var $1=$tree_addr; //@line 2247 "parsermodule.c"
        var $2=$1+16; //@line 2247 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2247 "parsermodule.c"
        $nch=$3; //@line 2247 "parsermodule.c"
        var $4=$tree_addr; //@line 2249 "parsermodule.c"
        var $5=_validate_ntype($4, 309); //@line 2249 "parsermodule.c"
        var $6=($5)==0; //@line 2249 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2249 "parsermodule.c"
      case 1: // $bb
        $0=0; //@line 2250 "parsermodule.c"
        __label__ = 21; break; //@line 2250 "parsermodule.c"
      case 2: // $bb1
        var $7=$nch; //@line 2251 "parsermodule.c"
        var $8=($7)==1; //@line 2251 "parsermodule.c"
        var $9=$tree_addr; //@line 2256 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 2251 "parsermodule.c"
      case 3: // $bb2
        var $10=$9+20; //@line 2256 "parsermodule.c"
        var $11=HEAP[$10]; //@line 2256 "parsermodule.c"
        var $12=$11; //@line 2256 "parsermodule.c"
        $tree_addr=$12; //@line 2256 "parsermodule.c"
        var $13=$tree_addr; //@line 2257 "parsermodule.c"
        var $14=$13; //@line 2257 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2257 "parsermodule.c"
        var $16=($15); //@line 2257 "parsermodule.c"
        if ($16 == 1) {
          __label__ = 5; break;
        }
        else if ($16 == 20) {
          __label__ = 4; break;
        }
        else if ($16 == 21) {
          __label__ = 4; break;
        }
        else if ($16 == 22) {
          __label__ = 4; break;
        }
        else if ($16 == 28) {
          __label__ = 4; break;
        }
        else if ($16 == 29) {
          __label__ = 4; break;
        }
        else if ($16 == 30) {
          __label__ = 4; break;
        }
        else if ($16 == 31) {
          __label__ = 4; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 4: // $bb3
        $res=1; //@line 2265 "parsermodule.c"
        __label__ = 20; break; //@line 2265 "parsermodule.c"
      case 5: // $bb4
        var $17=$tree_addr; //@line 2268 "parsermodule.c"
        var $18=$17+4; //@line 2268 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2268 "parsermodule.c"
        var $20=_strcmp($19, __str76); //@line 2268 "parsermodule.c"
        var $21=($20)==0; //@line 2268 "parsermodule.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 2268 "parsermodule.c"
      case 6: // $bb5
        var $22=$tree_addr; //@line 2268 "parsermodule.c"
        var $23=$22+4; //@line 2268 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2268 "parsermodule.c"
        var $25=_strcmp($24, __str138); //@line 2268 "parsermodule.c"
        var $26=($25)==0; //@line 2268 "parsermodule.c"
        if ($26) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2268 "parsermodule.c"
      case 7: // $bb8
        $iftmp_156=1; //@line 2268 "parsermodule.c"
        $res=1; //@line 2268 "parsermodule.c"
        __label__ = 20; break;
      case 8: // $bb9
        $iftmp_156=0; //@line 2268 "parsermodule.c"
        $res=0; //@line 2268 "parsermodule.c"
        var $27=$tree_addr; //@line 2271 "parsermodule.c"
        var $28=$27+4; //@line 2271 "parsermodule.c"
        var $29=HEAP[$28]; //@line 2271 "parsermodule.c"
        var $30=HEAP[_parser_error]; //@line 2271 "parsermodule.c"
        var $31=_PyErr_Format($30, __str139, allocate([$29,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 2271 "parsermodule.c"
        __label__ = 20; break; //@line 2271 "parsermodule.c"
      case 9: // $bb11
        _err_string(__str140); //@line 2276 "parsermodule.c"
        __label__ = 20; break; //@line 2276 "parsermodule.c"
      case 10: // $bb13
        var $32=_validate_numnodes($9, 2, __str141); //@line 2280 "parsermodule.c"
        $res=$32; //@line 2280 "parsermodule.c"
        var $33=$res; //@line 2280 "parsermodule.c"
        var $34=($33)!=0; //@line 2280 "parsermodule.c"
        if ($34) { __label__ = 11; break; } else { __label__ = 20; break; } //@line 2280 "parsermodule.c"
      case 11: // $bb14
        var $35=$tree_addr; //@line 2281 "parsermodule.c"
        var $36=$35+20; //@line 2281 "parsermodule.c"
        var $37=HEAP[$36]; //@line 2281 "parsermodule.c"
        var $38=$37; //@line 2281 "parsermodule.c"
        var $39=_validate_ntype($38, 1); //@line 2281 "parsermodule.c"
        var $40=($39)==0; //@line 2281 "parsermodule.c"
        if ($40) { __label__ = 18; break; } else { __label__ = 12; break; } //@line 2281 "parsermodule.c"
      case 12: // $bb15
        var $41=$tree_addr; //@line 2281 "parsermodule.c"
        var $42=$41+20; //@line 2281 "parsermodule.c"
        var $43=HEAP[$42]; //@line 2281 "parsermodule.c"
        var $44=$43+24; //@line 2281 "parsermodule.c"
        var $45=_validate_ntype($44, 1); //@line 2281 "parsermodule.c"
        var $46=($45)==0; //@line 2281 "parsermodule.c"
        if ($46) { __label__ = 18; break; } else { __label__ = 13; break; } //@line 2281 "parsermodule.c"
      case 13: // $bb16
        var $47=$tree_addr; //@line 2281 "parsermodule.c"
        var $48=$47+20; //@line 2281 "parsermodule.c"
        var $49=HEAP[$48]; //@line 2281 "parsermodule.c"
        var $50=$49; //@line 2281 "parsermodule.c"
        var $51=$50+4; //@line 2281 "parsermodule.c"
        var $52=HEAP[$51]; //@line 2281 "parsermodule.c"
        var $53=_strcmp($52, __str138); //@line 2281 "parsermodule.c"
        var $54=($53)!=0; //@line 2281 "parsermodule.c"
        if ($54) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 2281 "parsermodule.c"
      case 14: // $bb17
        var $55=$tree_addr; //@line 2281 "parsermodule.c"
        var $56=$55+20; //@line 2281 "parsermodule.c"
        var $57=HEAP[$56]; //@line 2281 "parsermodule.c"
        var $58=$57+24; //@line 2281 "parsermodule.c"
        var $59=$58+4; //@line 2281 "parsermodule.c"
        var $60=HEAP[$59]; //@line 2281 "parsermodule.c"
        var $61=_strcmp($60, __str137); //@line 2281 "parsermodule.c"
        var $62=($61)==0; //@line 2281 "parsermodule.c"
        if ($62) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 2281 "parsermodule.c"
      case 15: // $bb18
        var $63=$tree_addr; //@line 2281 "parsermodule.c"
        var $64=$63+20; //@line 2281 "parsermodule.c"
        var $65=HEAP[$64]; //@line 2281 "parsermodule.c"
        var $66=$65; //@line 2281 "parsermodule.c"
        var $67=$66+4; //@line 2281 "parsermodule.c"
        var $68=HEAP[$67]; //@line 2281 "parsermodule.c"
        var $69=_strcmp($68, __str137); //@line 2281 "parsermodule.c"
        var $70=($69)!=0; //@line 2281 "parsermodule.c"
        if ($70) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 2281 "parsermodule.c"
      case 16: // $bb19
        var $71=$tree_addr; //@line 2281 "parsermodule.c"
        var $72=$71+20; //@line 2281 "parsermodule.c"
        var $73=HEAP[$72]; //@line 2281 "parsermodule.c"
        var $74=$73+24; //@line 2281 "parsermodule.c"
        var $75=$74+4; //@line 2281 "parsermodule.c"
        var $76=HEAP[$75]; //@line 2281 "parsermodule.c"
        var $77=_strcmp($76, __str76); //@line 2281 "parsermodule.c"
        var $78=($77)==0; //@line 2281 "parsermodule.c"
        if ($78) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2281 "parsermodule.c"
      case 17: // $bb22
        $iftmp_158=1; //@line 2281 "parsermodule.c"
        $res=1; //@line 2281 "parsermodule.c"
        __label__ = 20; break;
      case 18: // $bb23
        $iftmp_158=0; //@line 2281 "parsermodule.c"
        $res=0; //@line 2281 "parsermodule.c"
        var $79=_PyErr_Occurred(); //@line 2287 "parsermodule.c"
        var $80=($79)==0; //@line 2287 "parsermodule.c"
        if ($80) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 2287 "parsermodule.c"
      case 19: // $bb24
        _err_string(__str142); //@line 2288 "parsermodule.c"
        __label__ = 20; break; //@line 2288 "parsermodule.c"
      case 20: // $bb25
        var $81=$res; //@line 2290 "parsermodule.c"
        $0=$81; //@line 2290 "parsermodule.c"
        __label__ = 21; break; //@line 2290 "parsermodule.c"
      case 21: // $bb26
        var $82=$0; //@line 2250 "parsermodule.c"
        $retval=$82; //@line 2250 "parsermodule.c"
        var $retval27=$retval; //@line 2250 "parsermodule.c"
        ;
        return $retval27; //@line 2250 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_expr($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_160;
        var $iftmp_159;
        var $j;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2298 "parsermodule.c"
        var $2=$1+16; //@line 2298 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2298 "parsermodule.c"
        $nch=$3; //@line 2298 "parsermodule.c"
        var $4=$tree_addr; //@line 2301 "parsermodule.c"
        var $5=_validate_ntype($4, 310); //@line 2301 "parsermodule.c"
        var $6=($5)==0; //@line 2301 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2301 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2301 "parsermodule.c"
        var $8=($7) & 1; //@line 2301 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2301 "parsermodule.c"
        var $toBool=($9)!=0; //@line 2301 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2301 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2301 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2301 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2301 "parsermodule.c"
      case 2: // $bb4
        var $10=$tree_addr; //@line 2301 "parsermodule.c"
        var $11=$10+20; //@line 2301 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2301 "parsermodule.c"
        var $13=$12; //@line 2301 "parsermodule.c"
        var $14=_validate_xor_expr($13); //@line 2301 "parsermodule.c"
        var $15=($14)==0; //@line 2301 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2301 "parsermodule.c"
      case 3: // $bb5
        $iftmp_159=1; //@line 2301 "parsermodule.c"
        __label__ = 5; break; //@line 2301 "parsermodule.c"
      case 4: // $bb6
        $iftmp_159=0; //@line 2301 "parsermodule.c"
        __label__ = 5; break; //@line 2301 "parsermodule.c"
      case 5: // $bb7
        var $16=$iftmp_159; //@line 2301 "parsermodule.c"
        $res=$16; //@line 2301 "parsermodule.c"
        $j=2; //@line 2303 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 11; break; //@line 2303 "parsermodule.c"
      case 6: // $bb8
        var $17=$tree_addr; //@line 2304 "parsermodule.c"
        var $18=$17+20; //@line 2304 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2304 "parsermodule.c"
        var $20=$j; //@line 2304 "parsermodule.c"
        var $21=$19+24*$20; //@line 2304 "parsermodule.c"
        var $22=_validate_xor_expr($21); //@line 2304 "parsermodule.c"
        var $23=($22)==0; //@line 2304 "parsermodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2304 "parsermodule.c"
      case 7: // $bb9
        var $24=$tree_addr; //@line 2304 "parsermodule.c"
        var $25=$24+20; //@line 2304 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2304 "parsermodule.c"
        var $27=$j; //@line 2304 "parsermodule.c"
        var $28=($27) - 1; //@line 2304 "parsermodule.c"
        var $29=$26+24*$28; //@line 2304 "parsermodule.c"
        var $30=_validate_terminal($29, 18, __str143); //@line 2304 "parsermodule.c"
        var $31=($30)==0; //@line 2304 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2304 "parsermodule.c"
      case 8: // $bb10
        $iftmp_160=1; //@line 2304 "parsermodule.c"
        __label__ = 10; break; //@line 2304 "parsermodule.c"
      case 9: // $bb11
        $iftmp_160=0; //@line 2304 "parsermodule.c"
        __label__ = 10; break; //@line 2304 "parsermodule.c"
      case 10: // $bb12
        var $32=$iftmp_160; //@line 2304 "parsermodule.c"
        $res=$32; //@line 2304 "parsermodule.c"
        var $33=$j; //@line 2303 "parsermodule.c"
        var $34=($33) + 2; //@line 2303 "parsermodule.c"
        $j=$34; //@line 2303 "parsermodule.c"
        __lastLabel__ = 10; __label__ = 11; break; //@line 2303 "parsermodule.c"
      case 11: // $bb13
        var $35=__lastLabel__ == 10 ? $32 : ($16);
        var $36=($35)==0; //@line 2303 "parsermodule.c"
        if ($36) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2303 "parsermodule.c"
      case 12: // $bb14
        var $37=$j; //@line 2303 "parsermodule.c"
        var $38=$nch; //@line 2303 "parsermodule.c"
        var $39=($37) < ($38); //@line 2303 "parsermodule.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2303 "parsermodule.c"
      case 13: // $bb15
        var $40=$res; //@line 2307 "parsermodule.c"
        $0=$40; //@line 2307 "parsermodule.c"
        var $41=$0; //@line 2307 "parsermodule.c"
        $retval=$41; //@line 2307 "parsermodule.c"
        var $retval16=$retval; //@line 2307 "parsermodule.c"
        ;
        return $retval16; //@line 2307 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_xor_expr($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_162;
        var $iftmp_161;
        var $j;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2315 "parsermodule.c"
        var $2=$1+16; //@line 2315 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2315 "parsermodule.c"
        $nch=$3; //@line 2315 "parsermodule.c"
        var $4=$tree_addr; //@line 2318 "parsermodule.c"
        var $5=_validate_ntype($4, 311); //@line 2318 "parsermodule.c"
        var $6=($5)==0; //@line 2318 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2318 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2318 "parsermodule.c"
        var $8=($7) & 1; //@line 2318 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2318 "parsermodule.c"
        var $toBool=($9)!=0; //@line 2318 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2318 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2318 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2318 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2318 "parsermodule.c"
      case 2: // $bb4
        var $10=$tree_addr; //@line 2318 "parsermodule.c"
        var $11=$10+20; //@line 2318 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2318 "parsermodule.c"
        var $13=$12; //@line 2318 "parsermodule.c"
        var $14=_validate_and_expr($13); //@line 2318 "parsermodule.c"
        var $15=($14)==0; //@line 2318 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2318 "parsermodule.c"
      case 3: // $bb5
        $iftmp_161=1; //@line 2318 "parsermodule.c"
        __label__ = 5; break; //@line 2318 "parsermodule.c"
      case 4: // $bb6
        $iftmp_161=0; //@line 2318 "parsermodule.c"
        __label__ = 5; break; //@line 2318 "parsermodule.c"
      case 5: // $bb7
        var $16=$iftmp_161; //@line 2318 "parsermodule.c"
        $res=$16; //@line 2318 "parsermodule.c"
        $j=2; //@line 2320 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 11; break; //@line 2320 "parsermodule.c"
      case 6: // $bb8
        var $17=$tree_addr; //@line 2321 "parsermodule.c"
        var $18=$17+20; //@line 2321 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2321 "parsermodule.c"
        var $20=$j; //@line 2321 "parsermodule.c"
        var $21=($20) - 1; //@line 2321 "parsermodule.c"
        var $22=$19+24*$21; //@line 2321 "parsermodule.c"
        var $23=_validate_terminal($22, 33, __str144); //@line 2321 "parsermodule.c"
        var $24=($23)==0; //@line 2321 "parsermodule.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2321 "parsermodule.c"
      case 7: // $bb9
        var $25=$tree_addr; //@line 2321 "parsermodule.c"
        var $26=$25+20; //@line 2321 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2321 "parsermodule.c"
        var $28=$j; //@line 2321 "parsermodule.c"
        var $29=$27+24*$28; //@line 2321 "parsermodule.c"
        var $30=_validate_and_expr($29); //@line 2321 "parsermodule.c"
        var $31=($30)==0; //@line 2321 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2321 "parsermodule.c"
      case 8: // $bb10
        $iftmp_162=1; //@line 2321 "parsermodule.c"
        __label__ = 10; break; //@line 2321 "parsermodule.c"
      case 9: // $bb11
        $iftmp_162=0; //@line 2321 "parsermodule.c"
        __label__ = 10; break; //@line 2321 "parsermodule.c"
      case 10: // $bb12
        var $32=$iftmp_162; //@line 2321 "parsermodule.c"
        $res=$32; //@line 2321 "parsermodule.c"
        var $33=$j; //@line 2320 "parsermodule.c"
        var $34=($33) + 2; //@line 2320 "parsermodule.c"
        $j=$34; //@line 2320 "parsermodule.c"
        __lastLabel__ = 10; __label__ = 11; break; //@line 2320 "parsermodule.c"
      case 11: // $bb13
        var $35=__lastLabel__ == 10 ? $32 : ($16);
        var $36=($35)==0; //@line 2320 "parsermodule.c"
        if ($36) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2320 "parsermodule.c"
      case 12: // $bb14
        var $37=$j; //@line 2320 "parsermodule.c"
        var $38=$nch; //@line 2320 "parsermodule.c"
        var $39=($37) < ($38); //@line 2320 "parsermodule.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2320 "parsermodule.c"
      case 13: // $bb15
        var $40=$res; //@line 2324 "parsermodule.c"
        $0=$40; //@line 2324 "parsermodule.c"
        var $41=$0; //@line 2324 "parsermodule.c"
        $retval=$41; //@line 2324 "parsermodule.c"
        var $retval16=$retval; //@line 2324 "parsermodule.c"
        ;
        return $retval16; //@line 2324 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_and_expr($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_164;
        var $iftmp_163;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2332 "parsermodule.c"
        var $2=$1+16; //@line 2332 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2332 "parsermodule.c"
        $nch=$3; //@line 2332 "parsermodule.c"
        var $4=$tree_addr; //@line 2335 "parsermodule.c"
        var $5=_validate_ntype($4, 312); //@line 2335 "parsermodule.c"
        var $6=($5)==0; //@line 2335 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2335 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2335 "parsermodule.c"
        var $8=($7) & 1; //@line 2335 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2335 "parsermodule.c"
        var $toBool=($9)!=0; //@line 2335 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2335 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2335 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2335 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2335 "parsermodule.c"
      case 2: // $bb4
        var $10=$tree_addr; //@line 2335 "parsermodule.c"
        var $11=$10+20; //@line 2335 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2335 "parsermodule.c"
        var $13=$12; //@line 2335 "parsermodule.c"
        var $14=_validate_shift_expr($13); //@line 2335 "parsermodule.c"
        var $15=($14)==0; //@line 2335 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2335 "parsermodule.c"
      case 3: // $bb5
        $iftmp_163=1; //@line 2335 "parsermodule.c"
        __label__ = 5; break; //@line 2335 "parsermodule.c"
      case 4: // $bb6
        $iftmp_163=0; //@line 2335 "parsermodule.c"
        __label__ = 5; break; //@line 2335 "parsermodule.c"
      case 5: // $bb7
        var $16=$iftmp_163; //@line 2335 "parsermodule.c"
        $res=$16; //@line 2335 "parsermodule.c"
        $pos=1; //@line 2337 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 11; break; //@line 2337 "parsermodule.c"
      case 6: // $bb8
        var $17=$tree_addr; //@line 2338 "parsermodule.c"
        var $18=$17+20; //@line 2338 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2338 "parsermodule.c"
        var $20=$pos; //@line 2338 "parsermodule.c"
        var $21=$19+24*$20; //@line 2338 "parsermodule.c"
        var $22=_validate_terminal($21, 19, __str145); //@line 2338 "parsermodule.c"
        var $23=($22)==0; //@line 2338 "parsermodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2338 "parsermodule.c"
      case 7: // $bb9
        var $24=$tree_addr; //@line 2338 "parsermodule.c"
        var $25=$24+20; //@line 2338 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2338 "parsermodule.c"
        var $27=$pos; //@line 2338 "parsermodule.c"
        var $28=($27) + 1; //@line 2338 "parsermodule.c"
        var $29=$26+24*$28; //@line 2338 "parsermodule.c"
        var $30=_validate_shift_expr($29); //@line 2338 "parsermodule.c"
        var $31=($30)==0; //@line 2338 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2338 "parsermodule.c"
      case 8: // $bb10
        $iftmp_164=1; //@line 2338 "parsermodule.c"
        __label__ = 10; break; //@line 2338 "parsermodule.c"
      case 9: // $bb11
        $iftmp_164=0; //@line 2338 "parsermodule.c"
        __label__ = 10; break; //@line 2338 "parsermodule.c"
      case 10: // $bb12
        var $32=$iftmp_164; //@line 2338 "parsermodule.c"
        $res=$32; //@line 2338 "parsermodule.c"
        var $33=$pos; //@line 2337 "parsermodule.c"
        var $34=($33) + 2; //@line 2337 "parsermodule.c"
        $pos=$34; //@line 2337 "parsermodule.c"
        __lastLabel__ = 10; __label__ = 11; break; //@line 2337 "parsermodule.c"
      case 11: // $bb13
        var $35=__lastLabel__ == 10 ? $32 : ($16);
        var $36=($35)==0; //@line 2337 "parsermodule.c"
        if ($36) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2337 "parsermodule.c"
      case 12: // $bb14
        var $37=$pos; //@line 2337 "parsermodule.c"
        var $38=$nch; //@line 2337 "parsermodule.c"
        var $39=($37) < ($38); //@line 2337 "parsermodule.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2337 "parsermodule.c"
      case 13: // $bb15
        var $40=$res; //@line 2341 "parsermodule.c"
        $0=$40; //@line 2341 "parsermodule.c"
        var $41=$0; //@line 2341 "parsermodule.c"
        $retval=$41; //@line 2341 "parsermodule.c"
        var $retval16=$retval; //@line 2341 "parsermodule.c"
        ;
        return $retval16; //@line 2341 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_chain_two_ops($tree, $termvalid, $op1, $op2) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $termvalid_addr;
        var $op1_addr;
        var $op2_addr;
        var $retval;
        var $0;
        var $iftmp_165;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        $termvalid_addr=$termvalid;
        $op1_addr=$op1;
        $op2_addr=$op2;
        $pos=1; //@line 2348 "parsermodule.c"
        var $1=$tree_addr; //@line 2349 "parsermodule.c"
        var $2=$1+16; //@line 2349 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2349 "parsermodule.c"
        $nch=$3; //@line 2349 "parsermodule.c"
        var $4=$nch; //@line 2351 "parsermodule.c"
        var $5=($4) & 1; //@line 2351 "parsermodule.c"
        var $6=((($5)) & 255); //@line 2351 "parsermodule.c"
        var $toBool=($6)!=0; //@line 2351 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2351 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2351 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2351 "parsermodule.c"
        if ($toBool3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2351 "parsermodule.c"
      case 1: // $bb
        var $7=$tree_addr; //@line 2351 "parsermodule.c"
        var $8=$7+20; //@line 2351 "parsermodule.c"
        var $9=HEAP[$8]; //@line 2351 "parsermodule.c"
        var $10=$9; //@line 2351 "parsermodule.c"
        var $11=$termvalid_addr; //@line 2351 "parsermodule.c"
        var $12=FUNCTION_TABLE[$11]($10); //@line 2351 "parsermodule.c"
        var $13=($12)==0; //@line 2351 "parsermodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2351 "parsermodule.c"
      case 2: // $bb4
        $iftmp_165=1; //@line 2351 "parsermodule.c"
        __label__ = 4; break; //@line 2351 "parsermodule.c"
      case 3: // $bb5
        $iftmp_165=0; //@line 2351 "parsermodule.c"
        __label__ = 4; break; //@line 2351 "parsermodule.c"
      case 4: // $bb6
        var $14=$iftmp_165; //@line 2351 "parsermodule.c"
        $res=$14; //@line 2351 "parsermodule.c"
        __lastLabel__ = 4; __label__ = 11; break; //@line 2351 "parsermodule.c"
      case 5: // $bb7
        var $15=$tree_addr; //@line 2354 "parsermodule.c"
        var $16=$15+20; //@line 2354 "parsermodule.c"
        var $17=HEAP[$16]; //@line 2354 "parsermodule.c"
        var $18=$pos; //@line 2354 "parsermodule.c"
        var $19=$17+24*$18; //@line 2354 "parsermodule.c"
        var $20=$19; //@line 2354 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2354 "parsermodule.c"
        var $22=($21); //@line 2354 "parsermodule.c"
        var $23=$op1_addr; //@line 2354 "parsermodule.c"
        var $24=($22)!=($23); //@line 2354 "parsermodule.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2354 "parsermodule.c"
      case 6: // $bb8
        var $25=$tree_addr; //@line 2355 "parsermodule.c"
        var $26=$25+20; //@line 2355 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2355 "parsermodule.c"
        var $28=$pos; //@line 2355 "parsermodule.c"
        var $29=$27+24*$28; //@line 2355 "parsermodule.c"
        var $30=$op2_addr; //@line 2355 "parsermodule.c"
        var $31=_validate_ntype($29, $30); //@line 2355 "parsermodule.c"
        $res=$31; //@line 2355 "parsermodule.c"
        __lastLabel__ = 6; __label__ = 8; break; //@line 2355 "parsermodule.c"
      case 7: // $bb9thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 7; __label__ = 8; break;
      case 8: // $bb9
        var $32=__lastLabel__ == 7 ? $_pr : ($31);
        var $33=($32)!=0; //@line 2356 "parsermodule.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2356 "parsermodule.c"
      case 9: // $bb10
        var $34=$tree_addr; //@line 2357 "parsermodule.c"
        var $35=$34+20; //@line 2357 "parsermodule.c"
        var $36=HEAP[$35]; //@line 2357 "parsermodule.c"
        var $37=$pos; //@line 2357 "parsermodule.c"
        var $38=($37) + 1; //@line 2357 "parsermodule.c"
        var $39=$36+24*$38; //@line 2357 "parsermodule.c"
        var $40=$termvalid_addr; //@line 2357 "parsermodule.c"
        var $41=FUNCTION_TABLE[$40]($39); //@line 2357 "parsermodule.c"
        $res=$41; //@line 2357 "parsermodule.c"
        __label__ = 10; break; //@line 2357 "parsermodule.c"
      case 10: // $bb11
        var $42=$pos; //@line 2353 "parsermodule.c"
        var $43=($42) + 2; //@line 2353 "parsermodule.c"
        $pos=$43; //@line 2353 "parsermodule.c"
        var $_pr1=$res;
        __lastLabel__ = 10; __label__ = 11; break; //@line 2353 "parsermodule.c"
      case 11: // $bb12
        var $44=__lastLabel__ == 10 ? $_pr1 : ($14);
        var $45=($44)==0; //@line 2353 "parsermodule.c"
        if ($45) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2353 "parsermodule.c"
      case 12: // $bb13
        var $46=$pos; //@line 2353 "parsermodule.c"
        var $47=$nch; //@line 2353 "parsermodule.c"
        var $48=($46) < ($47); //@line 2353 "parsermodule.c"
        if ($48) { __label__ = 5; break; } else { __label__ = 13; break; } //@line 2353 "parsermodule.c"
      case 13: // $bb14
        var $49=$res; //@line 2359 "parsermodule.c"
        $0=$49; //@line 2359 "parsermodule.c"
        var $50=$0; //@line 2359 "parsermodule.c"
        $retval=$50; //@line 2359 "parsermodule.c"
        var $retval15=$retval; //@line 2359 "parsermodule.c"
        ;
        return $retval15; //@line 2359 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_shift_expr($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $iftmp_166;
        var $0;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2366 "parsermodule.c"
        var $2=_validate_ntype($1, 313); //@line 2366 "parsermodule.c"
        var $3=($2)==0; //@line 2366 "parsermodule.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2366 "parsermodule.c"
      case 1: // $bb
        var $4=$tree_addr; //@line 2366 "parsermodule.c"
        var $5=_validate_chain_two_ops($4, (FUNCTION_TABLE_OFFSET + 16), 34, 35); //@line 2366 "parsermodule.c"
        var $6=($5)==0; //@line 2366 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2366 "parsermodule.c"
      case 2: // $bb1
        $iftmp_166=1; //@line 2366 "parsermodule.c"
        __label__ = 4; break; //@line 2366 "parsermodule.c"
      case 3: // $bb2
        $iftmp_166=0; //@line 2366 "parsermodule.c"
        __label__ = 4; break; //@line 2366 "parsermodule.c"
      case 4: // $bb3
        var $7=$iftmp_166; //@line 2366 "parsermodule.c"
        $0=$7; //@line 2366 "parsermodule.c"
        var $8=$0; //@line 2366 "parsermodule.c"
        $retval=$8; //@line 2366 "parsermodule.c"
        var $retval4=$retval; //@line 2366 "parsermodule.c"
        ;
        return $retval4; //@line 2366 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_arith_expr($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $iftmp_167;
        var $0;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2375 "parsermodule.c"
        var $2=_validate_ntype($1, 314); //@line 2375 "parsermodule.c"
        var $3=($2)==0; //@line 2375 "parsermodule.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2375 "parsermodule.c"
      case 1: // $bb
        var $4=$tree_addr; //@line 2375 "parsermodule.c"
        var $5=_validate_chain_two_ops($4, (FUNCTION_TABLE_OFFSET + 18), 14, 15); //@line 2375 "parsermodule.c"
        var $6=($5)==0; //@line 2375 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2375 "parsermodule.c"
      case 2: // $bb1
        $iftmp_167=1; //@line 2375 "parsermodule.c"
        __label__ = 4; break; //@line 2375 "parsermodule.c"
      case 3: // $bb2
        $iftmp_167=0; //@line 2375 "parsermodule.c"
        __label__ = 4; break; //@line 2375 "parsermodule.c"
      case 4: // $bb3
        var $7=$iftmp_167; //@line 2375 "parsermodule.c"
        $0=$7; //@line 2375 "parsermodule.c"
        var $8=$0; //@line 2375 "parsermodule.c"
        $retval=$8; //@line 2375 "parsermodule.c"
        var $retval4=$retval; //@line 2375 "parsermodule.c"
        ;
        return $retval4; //@line 2375 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_term($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_169;
        var $iftmp_168;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        $pos=1; //@line 2383 "parsermodule.c"
        var $1=$tree_addr; //@line 2384 "parsermodule.c"
        var $2=$1+16; //@line 2384 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2384 "parsermodule.c"
        $nch=$3; //@line 2384 "parsermodule.c"
        var $4=$tree_addr; //@line 2387 "parsermodule.c"
        var $5=_validate_ntype($4, 315); //@line 2387 "parsermodule.c"
        var $6=($5)==0; //@line 2387 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2387 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2387 "parsermodule.c"
        var $8=($7) & 1; //@line 2387 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2387 "parsermodule.c"
        var $toBool=($9)!=0; //@line 2387 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2387 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2387 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2387 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2387 "parsermodule.c"
      case 2: // $bb4
        var $10=$tree_addr; //@line 2387 "parsermodule.c"
        var $11=$10+20; //@line 2387 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2387 "parsermodule.c"
        var $13=$12; //@line 2387 "parsermodule.c"
        var $14=_validate_factor($13); //@line 2387 "parsermodule.c"
        var $15=($14)==0; //@line 2387 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2387 "parsermodule.c"
      case 3: // $bb5
        $iftmp_168=1; //@line 2387 "parsermodule.c"
        __label__ = 5; break; //@line 2387 "parsermodule.c"
      case 4: // $bb6
        $iftmp_168=0; //@line 2387 "parsermodule.c"
        __label__ = 5; break; //@line 2387 "parsermodule.c"
      case 5: // $bb7
        var $16=$iftmp_168; //@line 2387 "parsermodule.c"
        $res=$16; //@line 2387 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 14; break; //@line 2387 "parsermodule.c"
      case 6: // $bb8
        var $17=$tree_addr; //@line 2390 "parsermodule.c"
        var $18=$17+20; //@line 2390 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2390 "parsermodule.c"
        var $20=$pos; //@line 2390 "parsermodule.c"
        var $21=$19+24*$20; //@line 2390 "parsermodule.c"
        var $22=$21; //@line 2390 "parsermodule.c"
        var $23=HEAP[$22]; //@line 2390 "parsermodule.c"
        var $24=($23)==16; //@line 2390 "parsermodule.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 2390 "parsermodule.c"
      case 7: // $bb9
        var $25=$tree_addr; //@line 2390 "parsermodule.c"
        var $26=$25+20; //@line 2390 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2390 "parsermodule.c"
        var $28=$pos; //@line 2390 "parsermodule.c"
        var $29=$27+24*$28; //@line 2390 "parsermodule.c"
        var $30=$29; //@line 2390 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2390 "parsermodule.c"
        var $32=($31)==17; //@line 2390 "parsermodule.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2390 "parsermodule.c"
      case 8: // $bb10
        var $33=$tree_addr; //@line 2390 "parsermodule.c"
        var $34=$33+20; //@line 2390 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2390 "parsermodule.c"
        var $36=$pos; //@line 2390 "parsermodule.c"
        var $37=$35+24*$36; //@line 2390 "parsermodule.c"
        var $38=$37; //@line 2390 "parsermodule.c"
        var $39=HEAP[$38]; //@line 2390 "parsermodule.c"
        var $40=($39)==48; //@line 2390 "parsermodule.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2390 "parsermodule.c"
      case 9: // $bb11
        var $41=$tree_addr; //@line 2390 "parsermodule.c"
        var $42=$41+20; //@line 2390 "parsermodule.c"
        var $43=HEAP[$42]; //@line 2390 "parsermodule.c"
        var $44=$pos; //@line 2390 "parsermodule.c"
        var $45=$43+24*$44; //@line 2390 "parsermodule.c"
        var $46=$45; //@line 2390 "parsermodule.c"
        var $47=HEAP[$46]; //@line 2390 "parsermodule.c"
        var $48=($47)==24; //@line 2390 "parsermodule.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 2390 "parsermodule.c"
      case 10: // $bb12
        var $49=$tree_addr; //@line 2390 "parsermodule.c"
        var $50=$49+20; //@line 2390 "parsermodule.c"
        var $51=HEAP[$50]; //@line 2390 "parsermodule.c"
        var $52=$pos; //@line 2390 "parsermodule.c"
        var $53=($52) + 1; //@line 2390 "parsermodule.c"
        var $54=$51+24*$53; //@line 2390 "parsermodule.c"
        var $55=_validate_factor($54); //@line 2390 "parsermodule.c"
        var $56=($55)==0; //@line 2390 "parsermodule.c"
        if ($56) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 2390 "parsermodule.c"
      case 11: // $bb13
        $iftmp_169=1; //@line 2390 "parsermodule.c"
        __label__ = 13; break; //@line 2390 "parsermodule.c"
      case 12: // $bb14
        $iftmp_169=0; //@line 2390 "parsermodule.c"
        __label__ = 13; break; //@line 2390 "parsermodule.c"
      case 13: // $bb15
        var $57=$iftmp_169; //@line 2390 "parsermodule.c"
        $res=$57; //@line 2390 "parsermodule.c"
        var $58=$pos; //@line 2389 "parsermodule.c"
        var $59=($58) + 2; //@line 2389 "parsermodule.c"
        $pos=$59; //@line 2389 "parsermodule.c"
        __lastLabel__ = 13; __label__ = 14; break; //@line 2389 "parsermodule.c"
      case 14: // $bb16
        var $60=__lastLabel__ == 13 ? $57 : ($16);
        var $61=($60)==0; //@line 2389 "parsermodule.c"
        if ($61) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 2389 "parsermodule.c"
      case 15: // $bb17
        var $62=$pos; //@line 2389 "parsermodule.c"
        var $63=$nch; //@line 2389 "parsermodule.c"
        var $64=($62) < ($63); //@line 2389 "parsermodule.c"
        if ($64) { __label__ = 6; break; } else { __label__ = 16; break; } //@line 2389 "parsermodule.c"
      case 16: // $bb18
        var $65=$res; //@line 2396 "parsermodule.c"
        $0=$65; //@line 2396 "parsermodule.c"
        var $66=$0; //@line 2396 "parsermodule.c"
        $retval=$66; //@line 2396 "parsermodule.c"
        var $retval19=$retval; //@line 2396 "parsermodule.c"
        ;
        return $retval19; //@line 2396 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_factor($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_170;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2407 "parsermodule.c"
        var $2=$1+16; //@line 2407 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2407 "parsermodule.c"
        $nch=$3; //@line 2407 "parsermodule.c"
        var $4=$tree_addr; //@line 2415 "parsermodule.c"
        var $5=_validate_ntype($4, 316); //@line 2415 "parsermodule.c"
        var $6=($5)==0; //@line 2415 "parsermodule.c"
        if ($6) { __label__ = 10; break; } else { __label__ = 1; break; } //@line 2415 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2415 "parsermodule.c"
        var $8=($7)!=2; //@line 2415 "parsermodule.c"
        if ($8) { __lastLabel__ = 1; __label__ = 7; break; } else { __lastLabel__ = 1; __label__ = 2; break; } //@line 2415 "parsermodule.c"
      case 2: // $bb1
        var $9=$tree_addr; //@line 2415 "parsermodule.c"
        var $10=$9+20; //@line 2415 "parsermodule.c"
        var $11=HEAP[$10]; //@line 2415 "parsermodule.c"
        var $12=$11; //@line 2415 "parsermodule.c"
        var $13=$12; //@line 2415 "parsermodule.c"
        var $14=HEAP[$13]; //@line 2415 "parsermodule.c"
        var $15=($14)==14; //@line 2415 "parsermodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2415 "parsermodule.c"
      case 3: // $bb2
        var $16=$tree_addr; //@line 2415 "parsermodule.c"
        var $17=$16+20; //@line 2415 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2415 "parsermodule.c"
        var $19=$18; //@line 2415 "parsermodule.c"
        var $20=$19; //@line 2415 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2415 "parsermodule.c"
        var $22=($21)==15; //@line 2415 "parsermodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2415 "parsermodule.c"
      case 4: // $bb3
        var $23=$tree_addr; //@line 2415 "parsermodule.c"
        var $24=$23+20; //@line 2415 "parsermodule.c"
        var $25=HEAP[$24]; //@line 2415 "parsermodule.c"
        var $26=$25; //@line 2415 "parsermodule.c"
        var $27=$26; //@line 2415 "parsermodule.c"
        var $28=HEAP[$27]; //@line 2415 "parsermodule.c"
        var $29=($28)==32; //@line 2415 "parsermodule.c"
        if ($29) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2415 "parsermodule.c"
      case 5: // $bb4
        var $30=$tree_addr; //@line 2415 "parsermodule.c"
        var $31=$30+20; //@line 2415 "parsermodule.c"
        var $32=HEAP[$31]; //@line 2415 "parsermodule.c"
        var $33=$32+24; //@line 2415 "parsermodule.c"
        var $34=_validate_factor($33); //@line 2415 "parsermodule.c"
        var $35=($34)!=0; //@line 2415 "parsermodule.c"
        if ($35) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 2415 "parsermodule.c"
      case 6: // $bb5thread_pre_split
        var $_pr=$nch;
        __lastLabel__ = 6; __label__ = 7; break;
      case 7: // $bb5
        var $36=__lastLabel__ == 6 ? $_pr : ($7);
        var $37=($36)!=1; //@line 2415 "parsermodule.c"
        if ($37) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2415 "parsermodule.c"
      case 8: // $bb6
        var $38=$tree_addr; //@line 2415 "parsermodule.c"
        var $39=$38+20; //@line 2415 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2415 "parsermodule.c"
        var $41=$40; //@line 2415 "parsermodule.c"
        var $42=_validate_power($41); //@line 2415 "parsermodule.c"
        var $43=($42)!=0; //@line 2415 "parsermodule.c"
        if ($43) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2415 "parsermodule.c"
      case 9: // $bb7
        $iftmp_170=1; //@line 2415 "parsermodule.c"
        __label__ = 11; break; //@line 2415 "parsermodule.c"
      case 10: // $bb8
        $iftmp_170=0; //@line 2415 "parsermodule.c"
        __label__ = 11; break; //@line 2415 "parsermodule.c"
      case 11: // $bb9
        var $44=$iftmp_170; //@line 2415 "parsermodule.c"
        $res=$44; //@line 2415 "parsermodule.c"
        var $45=$res; //@line 2416 "parsermodule.c"
        $0=$45; //@line 2416 "parsermodule.c"
        var $46=$0; //@line 2416 "parsermodule.c"
        $retval=$46; //@line 2416 "parsermodule.c"
        var $retval10=$retval; //@line 2416 "parsermodule.c"
        ;
        return $retval10; //@line 2416 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_power($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $iftmp_172;
        var $0;
        var $iftmp_171;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        $pos=1; //@line 2427 "parsermodule.c"
        var $1=$tree_addr; //@line 2428 "parsermodule.c"
        var $2=$1+16; //@line 2428 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2428 "parsermodule.c"
        $nch=$3; //@line 2428 "parsermodule.c"
        var $4=$tree_addr; //@line 2430 "parsermodule.c"
        var $5=_validate_ntype($4, 317); //@line 2430 "parsermodule.c"
        var $6=($5)==0; //@line 2430 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2430 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2430 "parsermodule.c"
        var $8=($7) <= 0; //@line 2430 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2430 "parsermodule.c"
      case 2: // $bb1
        var $9=$tree_addr; //@line 2430 "parsermodule.c"
        var $10=$9+20; //@line 2430 "parsermodule.c"
        var $11=HEAP[$10]; //@line 2430 "parsermodule.c"
        var $12=$11; //@line 2430 "parsermodule.c"
        var $13=_validate_atom($12); //@line 2430 "parsermodule.c"
        var $14=($13)==0; //@line 2430 "parsermodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2430 "parsermodule.c"
      case 3: // $bb2
        $iftmp_171=1; //@line 2430 "parsermodule.c"
        __label__ = 5; break; //@line 2430 "parsermodule.c"
      case 4: // $bb3
        $iftmp_171=0; //@line 2430 "parsermodule.c"
        __label__ = 5; break; //@line 2430 "parsermodule.c"
      case 5: // $bb4
        var $15=$iftmp_171; //@line 2430 "parsermodule.c"
        $res=$15; //@line 2430 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 7; break; //@line 2430 "parsermodule.c"
      case 6: // $bb5
        var $16=$tree_addr; //@line 2433 "parsermodule.c"
        var $17=$16+20; //@line 2433 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2433 "parsermodule.c"
        var $19=$pos; //@line 2433 "parsermodule.c"
        var $20=$18+24*$19; //@line 2433 "parsermodule.c"
        var $21=$pos; //@line 2433 "parsermodule.c"
        var $22=($21) + 1; //@line 2433 "parsermodule.c"
        $pos=$22; //@line 2433 "parsermodule.c"
        var $23=_validate_trailer($20); //@line 2433 "parsermodule.c"
        $res=$23; //@line 2433 "parsermodule.c"
        __lastLabel__ = 6; __label__ = 7; break; //@line 2433 "parsermodule.c"
      case 7: // $bb6
        var $24=__lastLabel__ == 6 ? $23 : ($15);
        var $25=($24)==0; //@line 2432 "parsermodule.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2432 "parsermodule.c"
      case 8: // $bb7
        var $26=$pos; //@line 2432 "parsermodule.c"
        var $27=$nch; //@line 2432 "parsermodule.c"
        var $28=($26) >= ($27); //@line 2432 "parsermodule.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2432 "parsermodule.c"
      case 9: // $bb8
        var $29=$tree_addr; //@line 2432 "parsermodule.c"
        var $30=$29+20; //@line 2432 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2432 "parsermodule.c"
        var $32=$pos; //@line 2432 "parsermodule.c"
        var $33=$31+24*$32; //@line 2432 "parsermodule.c"
        var $34=$33; //@line 2432 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2432 "parsermodule.c"
        var $36=($35)==322; //@line 2432 "parsermodule.c"
        if ($36) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 2432 "parsermodule.c"
      case 10: // $bb9
        var $37=$res; //@line 2434 "parsermodule.c"
        var $38=($37)!=0; //@line 2434 "parsermodule.c"
        if ($38) { __label__ = 11; break; } else { __label__ = 22; break; } //@line 2434 "parsermodule.c"
      case 11: // $bb10
        var $39=$pos; //@line 2434 "parsermodule.c"
        var $40=$nch; //@line 2434 "parsermodule.c"
        var $41=($39) < ($40); //@line 2434 "parsermodule.c"
        if ($41) { __label__ = 12; break; } else { __label__ = 22; break; } //@line 2434 "parsermodule.c"
      case 12: // $bb11
        var $42=$nch; //@line 2435 "parsermodule.c"
        var $43=$pos; //@line 2435 "parsermodule.c"
        var $44=($42) - ($43); //@line 2435 "parsermodule.c"
        var $45=($44) & 1; //@line 2435 "parsermodule.c"
        var $46=($45)!=0; //@line 2435 "parsermodule.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 19; break; } //@line 2435 "parsermodule.c"
      case 13: // $bb12
        _err_string(__str146); //@line 2436 "parsermodule.c"
        $0=0; //@line 2437 "parsermodule.c"
        __label__ = 23; break; //@line 2437 "parsermodule.c"
      case 14: // $bb14
        var $47=$tree_addr; //@line 2440 "parsermodule.c"
        var $48=$47+20; //@line 2440 "parsermodule.c"
        var $49=HEAP[$48]; //@line 2440 "parsermodule.c"
        var $50=$pos; //@line 2440 "parsermodule.c"
        var $51=$49+24*$50; //@line 2440 "parsermodule.c"
        var $52=_validate_terminal($51, 36, __str67); //@line 2440 "parsermodule.c"
        var $53=($52)==0; //@line 2440 "parsermodule.c"
        if ($53) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 2440 "parsermodule.c"
      case 15: // $bb15
        var $54=$tree_addr; //@line 2440 "parsermodule.c"
        var $55=$54+20; //@line 2440 "parsermodule.c"
        var $56=HEAP[$55]; //@line 2440 "parsermodule.c"
        var $57=$pos; //@line 2440 "parsermodule.c"
        var $58=($57) + 1; //@line 2440 "parsermodule.c"
        var $59=$56+24*$58; //@line 2440 "parsermodule.c"
        var $60=_validate_factor($59); //@line 2440 "parsermodule.c"
        var $61=($60)==0; //@line 2440 "parsermodule.c"
        if ($61) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 2440 "parsermodule.c"
      case 16: // $bb16
        $iftmp_172=1; //@line 2440 "parsermodule.c"
        __label__ = 18; break; //@line 2440 "parsermodule.c"
      case 17: // $bb17
        $iftmp_172=0; //@line 2440 "parsermodule.c"
        __label__ = 18; break; //@line 2440 "parsermodule.c"
      case 18: // $bb18
        var $62=$iftmp_172; //@line 2440 "parsermodule.c"
        $res=$62; //@line 2440 "parsermodule.c"
        var $63=$pos; //@line 2439 "parsermodule.c"
        var $64=($63) + 2; //@line 2439 "parsermodule.c"
        $pos=$64; //@line 2439 "parsermodule.c"
        __lastLabel__ = 18; __label__ = 20; break; //@line 2439 "parsermodule.c"
      case 19: // $bb19thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 19; __label__ = 20; break;
      case 20: // $bb19
        var $65=__lastLabel__ == 19 ? $_pr : ($62);
        var $66=($65)==0; //@line 2439 "parsermodule.c"
        if ($66) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 2439 "parsermodule.c"
      case 21: // $bb20
        var $67=$nch; //@line 2439 "parsermodule.c"
        var $68=($67) - 1; //@line 2439 "parsermodule.c"
        var $69=$pos; //@line 2439 "parsermodule.c"
        var $70=($68) > ($69); //@line 2439 "parsermodule.c"
        if ($70) { __label__ = 14; break; } else { __label__ = 22; break; } //@line 2439 "parsermodule.c"
      case 22: // $bb21
        var $71=$res; //@line 2443 "parsermodule.c"
        $0=$71; //@line 2443 "parsermodule.c"
        __label__ = 23; break; //@line 2443 "parsermodule.c"
      case 23: // $bb22
        var $72=$0; //@line 2437 "parsermodule.c"
        $retval=$72; //@line 2437 "parsermodule.c"
        var $retval23=$retval; //@line 2437 "parsermodule.c"
        ;
        return $retval23; //@line 2437 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_atom($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_176;
        var $iftmp_175;
        var $iftmp_174;
        var $iftmp_173;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2451 "parsermodule.c"
        var $2=$1+16; //@line 2451 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2451 "parsermodule.c"
        $nch=$3; //@line 2451 "parsermodule.c"
        var $4=$tree_addr; //@line 2452 "parsermodule.c"
        var $5=_validate_ntype($4, 318); //@line 2452 "parsermodule.c"
        $res=$5; //@line 2452 "parsermodule.c"
        var $6=$res; //@line 2454 "parsermodule.c"
        var $7=($6)!=0; //@line 2454 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 39; break; } //@line 2454 "parsermodule.c"
      case 1: // $bb
        var $8=$nch; //@line 2454 "parsermodule.c"
        var $9=($8) <= 0; //@line 2454 "parsermodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2454 "parsermodule.c"
      case 2: // $bb1
        var $10=$nch; //@line 2455 "parsermodule.c"
        var $11=($10) + 1; //@line 2455 "parsermodule.c"
        var $12=$tree_addr; //@line 2455 "parsermodule.c"
        var $13=_validate_numnodes($12, $11, __str147); //@line 2455 "parsermodule.c"
        $res=$13; //@line 2455 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 4; break; //@line 2455 "parsermodule.c"
      case 3: // $bb2thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 3; __label__ = 4; break;
      case 4: // $bb2
        var $14=__lastLabel__ == 3 ? $_pr : ($13);
        var $15=($14)!=0; //@line 2456 "parsermodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 39; break; } //@line 2456 "parsermodule.c"
      case 5: // $bb3
        var $16=$tree_addr; //@line 2457 "parsermodule.c"
        var $17=$16+20; //@line 2457 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2457 "parsermodule.c"
        var $19=$18; //@line 2457 "parsermodule.c"
        var $20=$19; //@line 2457 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2457 "parsermodule.c"
        var $22=($21); //@line 2457 "parsermodule.c"
        if ($22 == 1) {
          __label__ = 33; break;
        }
        else if ($22 == 2) {
          __label__ = 33; break;
        }
        else if ($22 == 3) {
          __label__ = 34; break;
        }
        else if ($22 == 7) {
          __label__ = 6; break;
        }
        else if ($22 == 9) {
          __label__ = 13; break;
        }
        else if ($22 == 25) {
          __label__ = 27; break;
        }
        else if ($22 == 26) {
          __label__ = 22; break;
        }
        else {
        __label__ = 38; break;
        }
        
      case 6: // $bb4
        var $23=$nch; //@line 2459 "parsermodule.c"
        var $24=($23) > 3; //@line 2459 "parsermodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 2459 "parsermodule.c"
      case 7: // $bb5
        var $25=$tree_addr; //@line 2459 "parsermodule.c"
        var $26=$25+20; //@line 2459 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2459 "parsermodule.c"
        var $28=$nch; //@line 2459 "parsermodule.c"
        var $29=($28) - 1; //@line 2459 "parsermodule.c"
        var $30=$27+24*$29; //@line 2459 "parsermodule.c"
        var $31=_validate_terminal($30, 8, __str56); //@line 2459 "parsermodule.c"
        var $32=($31)==0; //@line 2459 "parsermodule.c"
        if ($32) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2459 "parsermodule.c"
      case 8: // $bb8
        $iftmp_173=0; //@line 2459 "parsermodule.c"
        $res=0; //@line 2459 "parsermodule.c"
        __label__ = 39; break;
      case 9: // $bb9
        $iftmp_173=1; //@line 2459 "parsermodule.c"
        $res=1; //@line 2459 "parsermodule.c"
        var $33=$nch; //@line 2462 "parsermodule.c"
        var $34=($33)==3; //@line 2462 "parsermodule.c"
        if ($34) { __label__ = 10; break; } else { __label__ = 39; break; } //@line 2462 "parsermodule.c"
      case 10: // $bb10
        var $35=$tree_addr; //@line 2463 "parsermodule.c"
        var $36=$35+20; //@line 2463 "parsermodule.c"
        var $37=HEAP[$36]; //@line 2463 "parsermodule.c"
        var $38=$37+24; //@line 2463 "parsermodule.c"
        var $39=$38; //@line 2463 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2463 "parsermodule.c"
        var $41=($40)==340; //@line 2463 "parsermodule.c"
        var $42=$tree_addr; //@line 2464 "parsermodule.c"
        var $43=$42+20; //@line 2464 "parsermodule.c"
        var $44=HEAP[$43]; //@line 2464 "parsermodule.c"
        var $45=$44+24; //@line 2464 "parsermodule.c"
        if ($41) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2463 "parsermodule.c"
      case 11: // $bb11
        var $46=_validate_yield_expr($45); //@line 2464 "parsermodule.c"
        $res=$46; //@line 2464 "parsermodule.c"
        __label__ = 39; break; //@line 2464 "parsermodule.c"
      case 12: // $bb12
        var $47=_validate_testlist_comp($45); //@line 2466 "parsermodule.c"
        $res=$47; //@line 2466 "parsermodule.c"
        __label__ = 39; break; //@line 2466 "parsermodule.c"
      case 13: // $bb14
        var $48=$nch; //@line 2470 "parsermodule.c"
        var $49=($48)==2; //@line 2470 "parsermodule.c"
        if ($49) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2470 "parsermodule.c"
      case 14: // $bb15
        var $50=$tree_addr; //@line 2471 "parsermodule.c"
        var $51=$50+20; //@line 2471 "parsermodule.c"
        var $52=HEAP[$51]; //@line 2471 "parsermodule.c"
        var $53=$52+24; //@line 2471 "parsermodule.c"
        var $54=_validate_ntype($53, 10); //@line 2471 "parsermodule.c"
        $res=$54; //@line 2471 "parsermodule.c"
        __label__ = 39; break; //@line 2471 "parsermodule.c"
      case 15: // $bb16
        var $55=$nch; //@line 2472 "parsermodule.c"
        var $56=($55)==3; //@line 2472 "parsermodule.c"
        if ($56) { __label__ = 16; break; } else { __label__ = 21; break; } //@line 2472 "parsermodule.c"
      case 16: // $bb17
        var $57=$tree_addr; //@line 2473 "parsermodule.c"
        var $58=$57+20; //@line 2473 "parsermodule.c"
        var $59=HEAP[$58]; //@line 2473 "parsermodule.c"
        var $60=$59+24; //@line 2473 "parsermodule.c"
        var $61=_validate_listmaker($60); //@line 2473 "parsermodule.c"
        var $62=($61)==0; //@line 2473 "parsermodule.c"
        if ($62) { __label__ = 19; break; } else { __label__ = 17; break; } //@line 2473 "parsermodule.c"
      case 17: // $bb18
        var $63=$tree_addr; //@line 2473 "parsermodule.c"
        var $64=$63+20; //@line 2473 "parsermodule.c"
        var $65=HEAP[$64]; //@line 2473 "parsermodule.c"
        var $66=$65+48; //@line 2473 "parsermodule.c"
        var $67=_validate_ntype($66, 10); //@line 2473 "parsermodule.c"
        var $68=($67)==0; //@line 2473 "parsermodule.c"
        if ($68) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 2473 "parsermodule.c"
      case 18: // $bb19
        $iftmp_174=1; //@line 2473 "parsermodule.c"
        __label__ = 20; break; //@line 2473 "parsermodule.c"
      case 19: // $bb20
        $iftmp_174=0; //@line 2473 "parsermodule.c"
        __label__ = 20; break; //@line 2473 "parsermodule.c"
      case 20: // $bb21
        var $69=$iftmp_174; //@line 2473 "parsermodule.c"
        $res=$69; //@line 2473 "parsermodule.c"
        __label__ = 39; break; //@line 2473 "parsermodule.c"
      case 21: // $bb22
        $res=0; //@line 2476 "parsermodule.c"
        _err_string(__str148); //@line 2477 "parsermodule.c"
        __label__ = 39; break; //@line 2477 "parsermodule.c"
      case 22: // $bb24
        var $70=$nch; //@line 2481 "parsermodule.c"
        var $71=($70) > 3; //@line 2481 "parsermodule.c"
        if ($71) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 2481 "parsermodule.c"
      case 23: // $bb25
        var $72=$tree_addr; //@line 2481 "parsermodule.c"
        var $73=$72+20; //@line 2481 "parsermodule.c"
        var $74=HEAP[$73]; //@line 2481 "parsermodule.c"
        var $75=$nch; //@line 2481 "parsermodule.c"
        var $76=($75) - 1; //@line 2481 "parsermodule.c"
        var $77=$74+24*$76; //@line 2481 "parsermodule.c"
        var $78=_validate_ntype($77, 27); //@line 2481 "parsermodule.c"
        var $79=($78)==0; //@line 2481 "parsermodule.c"
        if ($79) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 2481 "parsermodule.c"
      case 24: // $bb28
        $iftmp_175=0; //@line 2481 "parsermodule.c"
        $res=0; //@line 2481 "parsermodule.c"
        __label__ = 39; break;
      case 25: // $bb29
        $iftmp_175=1; //@line 2481 "parsermodule.c"
        $res=1; //@line 2481 "parsermodule.c"
        var $80=$nch; //@line 2484 "parsermodule.c"
        var $81=($80)==3; //@line 2484 "parsermodule.c"
        if ($81) { __label__ = 26; break; } else { __label__ = 39; break; } //@line 2484 "parsermodule.c"
      case 26: // $bb30
        var $82=$tree_addr; //@line 2485 "parsermodule.c"
        var $83=$82+20; //@line 2485 "parsermodule.c"
        var $84=HEAP[$83]; //@line 2485 "parsermodule.c"
        var $85=$84+24; //@line 2485 "parsermodule.c"
        var $86=_validate_dictorsetmaker($85); //@line 2485 "parsermodule.c"
        $res=$86; //@line 2485 "parsermodule.c"
        __label__ = 39; break; //@line 2485 "parsermodule.c"
      case 27: // $bb32
        var $87=$nch; //@line 2488 "parsermodule.c"
        var $88=($87)!=3; //@line 2488 "parsermodule.c"
        if ($88) { __label__ = 31; break; } else { __label__ = 28; break; } //@line 2488 "parsermodule.c"
      case 28: // $bb33
        var $89=$tree_addr; //@line 2488 "parsermodule.c"
        var $90=$89+20; //@line 2488 "parsermodule.c"
        var $91=HEAP[$90]; //@line 2488 "parsermodule.c"
        var $92=$91+24; //@line 2488 "parsermodule.c"
        var $93=_validate_testlist1($92); //@line 2488 "parsermodule.c"
        var $94=($93)==0; //@line 2488 "parsermodule.c"
        if ($94) { __label__ = 31; break; } else { __label__ = 29; break; } //@line 2488 "parsermodule.c"
      case 29: // $bb34
        var $95=$tree_addr; //@line 2488 "parsermodule.c"
        var $96=$95+20; //@line 2488 "parsermodule.c"
        var $97=HEAP[$96]; //@line 2488 "parsermodule.c"
        var $98=$97+48; //@line 2488 "parsermodule.c"
        var $99=_validate_ntype($98, 25); //@line 2488 "parsermodule.c"
        var $100=($99)==0; //@line 2488 "parsermodule.c"
        if ($100) { __label__ = 31; break; } else { __label__ = 30; break; } //@line 2488 "parsermodule.c"
      case 30: // $bb35
        $iftmp_176=1; //@line 2488 "parsermodule.c"
        __label__ = 32; break; //@line 2488 "parsermodule.c"
      case 31: // $bb36
        $iftmp_176=0; //@line 2488 "parsermodule.c"
        __label__ = 32; break; //@line 2488 "parsermodule.c"
      case 32: // $bb37
        var $101=$iftmp_176; //@line 2488 "parsermodule.c"
        $res=$101; //@line 2488 "parsermodule.c"
        __label__ = 39; break; //@line 2488 "parsermodule.c"
      case 33: // $bb38
        var $102=$nch; //@line 2494 "parsermodule.c"
        var $103=($102)==1; //@line 2494 "parsermodule.c"
        var $104=($103); //@line 2494 "parsermodule.c"
        $res=$104; //@line 2494 "parsermodule.c"
        __label__ = 39; break; //@line 2494 "parsermodule.c"
      case 34: // $bb39
        $pos=1; //@line 2497 "parsermodule.c"
        var $_pr1=$res;
        __lastLabel__ = 34; __label__ = 36; break; //@line 2497 "parsermodule.c"
      case 35: // $bb40
        var $105=$tree_addr; //@line 2498 "parsermodule.c"
        var $106=$105+20; //@line 2498 "parsermodule.c"
        var $107=HEAP[$106]; //@line 2498 "parsermodule.c"
        var $108=$pos; //@line 2498 "parsermodule.c"
        var $109=$107+24*$108; //@line 2498 "parsermodule.c"
        var $110=_validate_ntype($109, 3); //@line 2498 "parsermodule.c"
        $res=$110; //@line 2498 "parsermodule.c"
        var $111=$pos; //@line 2497 "parsermodule.c"
        var $112=($111) + 1; //@line 2497 "parsermodule.c"
        $pos=$112; //@line 2497 "parsermodule.c"
        __lastLabel__ = 35; __label__ = 36; break; //@line 2497 "parsermodule.c"
      case 36: // $bb41
        var $113=__lastLabel__ == 35 ? $110 : ($_pr1);
        var $114=($113)==0; //@line 2497 "parsermodule.c"
        if ($114) { __label__ = 39; break; } else { __label__ = 37; break; } //@line 2497 "parsermodule.c"
      case 37: // $bb42
        var $115=$pos; //@line 2497 "parsermodule.c"
        var $116=$nch; //@line 2497 "parsermodule.c"
        var $117=($115) < ($116); //@line 2497 "parsermodule.c"
        if ($117) { __label__ = 35; break; } else { __label__ = 39; break; } //@line 2497 "parsermodule.c"
      case 38: // $bb44
        $res=0; //@line 2501 "parsermodule.c"
        __label__ = 39; break; //@line 2501 "parsermodule.c"
      case 39: // $bb45
        var $118=$res; //@line 2505 "parsermodule.c"
        $0=$118; //@line 2505 "parsermodule.c"
        var $119=$0; //@line 2505 "parsermodule.c"
        $retval=$119; //@line 2505 "parsermodule.c"
        var $retval46=$retval; //@line 2505 "parsermodule.c"
        ;
        return $retval46; //@line 2505 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_listmaker($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_177;
        var $nch;
        var $ok;
        var $i;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2515 "parsermodule.c"
        var $2=$1+16; //@line 2515 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2515 "parsermodule.c"
        $nch=$3; //@line 2515 "parsermodule.c"
        var $4=$nch; //@line 2516 "parsermodule.c"
        $ok=$4; //@line 2516 "parsermodule.c"
        var $5=$nch; //@line 2518 "parsermodule.c"
        var $6=($5)==0; //@line 2518 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2518 "parsermodule.c"
      case 1: // $bb
        _err_string(__str149); //@line 2519 "parsermodule.c"
        __label__ = 3; break; //@line 2519 "parsermodule.c"
      case 2: // $bb1
        var $7=$tree_addr; //@line 2521 "parsermodule.c"
        var $8=$7+20; //@line 2521 "parsermodule.c"
        var $9=HEAP[$8]; //@line 2521 "parsermodule.c"
        var $10=$9; //@line 2521 "parsermodule.c"
        var $11=_validate_test($10); //@line 2521 "parsermodule.c"
        $ok=$11; //@line 2521 "parsermodule.c"
        __label__ = 3; break; //@line 2521 "parsermodule.c"
      case 3: // $bb2
        var $12=$nch; //@line 2526 "parsermodule.c"
        var $13=($12)!=2; //@line 2526 "parsermodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2526 "parsermodule.c"
      case 4: // $bb3
        var $14=$tree_addr; //@line 2526 "parsermodule.c"
        var $15=$14+20; //@line 2526 "parsermodule.c"
        var $16=HEAP[$15]; //@line 2526 "parsermodule.c"
        var $17=$16+24; //@line 2526 "parsermodule.c"
        var $18=$17; //@line 2526 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2526 "parsermodule.c"
        var $20=($19)!=333; //@line 2526 "parsermodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2526 "parsermodule.c"
      case 5: // $bb4
        var $21=$tree_addr; //@line 2527 "parsermodule.c"
        var $22=$21+20; //@line 2527 "parsermodule.c"
        var $23=HEAP[$22]; //@line 2527 "parsermodule.c"
        var $24=$23+24; //@line 2527 "parsermodule.c"
        var $25=_validate_list_for($24); //@line 2527 "parsermodule.c"
        $ok=$25; //@line 2527 "parsermodule.c"
        __label__ = 19; break; //@line 2527 "parsermodule.c"
      case 6: // $bb5
        $i=1; //@line 2530 "parsermodule.c"
        var $_pr=$ok;
        __lastLabel__ = 6; __label__ = 12; break; //@line 2530 "parsermodule.c"
      case 7: // $bb6
        var $26=$tree_addr; //@line 2532 "parsermodule.c"
        var $27=$26+20; //@line 2532 "parsermodule.c"
        var $28=HEAP[$27]; //@line 2532 "parsermodule.c"
        var $29=$i; //@line 2532 "parsermodule.c"
        var $30=$28+24*$29; //@line 2532 "parsermodule.c"
        var $31=_validate_terminal($30, 12, __str52); //@line 2532 "parsermodule.c"
        var $32=($31)==0; //@line 2532 "parsermodule.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2532 "parsermodule.c"
      case 8: // $bb7
        var $33=$tree_addr; //@line 2532 "parsermodule.c"
        var $34=$33+20; //@line 2532 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2532 "parsermodule.c"
        var $36=$i; //@line 2532 "parsermodule.c"
        var $37=($36) + 1; //@line 2532 "parsermodule.c"
        var $38=$35+24*$37; //@line 2532 "parsermodule.c"
        var $39=_validate_test($38); //@line 2532 "parsermodule.c"
        var $40=($39)==0; //@line 2532 "parsermodule.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2532 "parsermodule.c"
      case 9: // $bb8
        $iftmp_177=1; //@line 2532 "parsermodule.c"
        __label__ = 11; break; //@line 2532 "parsermodule.c"
      case 10: // $bb9
        $iftmp_177=0; //@line 2532 "parsermodule.c"
        __label__ = 11; break; //@line 2532 "parsermodule.c"
      case 11: // $bb10
        var $41=$iftmp_177; //@line 2532 "parsermodule.c"
        $ok=$41; //@line 2532 "parsermodule.c"
        var $42=$i; //@line 2534 "parsermodule.c"
        var $43=($42) + 2; //@line 2534 "parsermodule.c"
        $i=$43; //@line 2534 "parsermodule.c"
        __lastLabel__ = 11; __label__ = 12; break; //@line 2534 "parsermodule.c"
      case 12: // $bb11
        var $44=__lastLabel__ == 11 ? $41 : ($_pr);
        var $45=($44)==0; //@line 2531 "parsermodule.c"
        if ($45) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2531 "parsermodule.c"
      case 13: // $bb12
        var $46=$nch; //@line 2531 "parsermodule.c"
        var $47=$i; //@line 2531 "parsermodule.c"
        var $48=($46) - ($47); //@line 2531 "parsermodule.c"
        var $49=($48) > 1; //@line 2531 "parsermodule.c"
        if ($49) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 2531 "parsermodule.c"
      case 14: // $bb13
        var $50=$ok; //@line 2536 "parsermodule.c"
        var $51=($50)==0; //@line 2536 "parsermodule.c"
        if ($51) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 2536 "parsermodule.c"
      case 15: // $bb14
        var $52=$nch; //@line 2536 "parsermodule.c"
        var $53=($52) - 1; //@line 2536 "parsermodule.c"
        var $54=$i; //@line 2536 "parsermodule.c"
        var $55=($53)!=($54); //@line 2536 "parsermodule.c"
        if ($55) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 2536 "parsermodule.c"
      case 16: // $bb15
        var $56=$tree_addr; //@line 2537 "parsermodule.c"
        var $57=$56+20; //@line 2537 "parsermodule.c"
        var $58=HEAP[$57]; //@line 2537 "parsermodule.c"
        var $59=$i; //@line 2537 "parsermodule.c"
        var $60=$58+24*$59; //@line 2537 "parsermodule.c"
        var $61=_validate_terminal($60, 12, __str52); //@line 2537 "parsermodule.c"
        $ok=$61; //@line 2537 "parsermodule.c"
        __label__ = 19; break; //@line 2537 "parsermodule.c"
      case 17: // $bb16
        var $62=$i; //@line 2538 "parsermodule.c"
        var $63=$nch; //@line 2538 "parsermodule.c"
        var $64=($62)!=($63); //@line 2538 "parsermodule.c"
        if ($64) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 2538 "parsermodule.c"
      case 18: // $bb17
        $ok=0; //@line 2539 "parsermodule.c"
        _err_string(__str150); //@line 2540 "parsermodule.c"
        __label__ = 19; break; //@line 2540 "parsermodule.c"
      case 19: // $bb18
        var $65=$ok; //@line 2543 "parsermodule.c"
        $0=$65; //@line 2543 "parsermodule.c"
        var $66=$0; //@line 2543 "parsermodule.c"
        $retval=$66; //@line 2543 "parsermodule.c"
        var $retval19=$retval; //@line 2543 "parsermodule.c"
        ;
        return $retval19; //@line 2543 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_testlist_comp($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_178;
        var $nch;
        var $ok;
        var $i;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2552 "parsermodule.c"
        var $2=$1+16; //@line 2552 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2552 "parsermodule.c"
        $nch=$3; //@line 2552 "parsermodule.c"
        var $4=$nch; //@line 2553 "parsermodule.c"
        $ok=$4; //@line 2553 "parsermodule.c"
        var $5=$nch; //@line 2555 "parsermodule.c"
        var $6=($5)==0; //@line 2555 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2555 "parsermodule.c"
      case 1: // $bb
        _err_string(__str151); //@line 2556 "parsermodule.c"
        __label__ = 3; break; //@line 2556 "parsermodule.c"
      case 2: // $bb1
        var $7=$tree_addr; //@line 2558 "parsermodule.c"
        var $8=$7+20; //@line 2558 "parsermodule.c"
        var $9=HEAP[$8]; //@line 2558 "parsermodule.c"
        var $10=$9; //@line 2558 "parsermodule.c"
        var $11=_validate_test($10); //@line 2558 "parsermodule.c"
        $ok=$11; //@line 2558 "parsermodule.c"
        __label__ = 3; break; //@line 2558 "parsermodule.c"
      case 3: // $bb2
        var $12=$nch; //@line 2564 "parsermodule.c"
        var $13=($12)!=2; //@line 2564 "parsermodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2564 "parsermodule.c"
      case 4: // $bb3
        var $14=$tree_addr; //@line 2564 "parsermodule.c"
        var $15=$14+20; //@line 2564 "parsermodule.c"
        var $16=HEAP[$15]; //@line 2564 "parsermodule.c"
        var $17=$16+24; //@line 2564 "parsermodule.c"
        var $18=$17; //@line 2564 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2564 "parsermodule.c"
        var $20=($19)!=336; //@line 2564 "parsermodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2564 "parsermodule.c"
      case 5: // $bb4
        var $21=$tree_addr; //@line 2565 "parsermodule.c"
        var $22=$21+20; //@line 2565 "parsermodule.c"
        var $23=HEAP[$22]; //@line 2565 "parsermodule.c"
        var $24=$23+24; //@line 2565 "parsermodule.c"
        var $25=_validate_comp_for($24); //@line 2565 "parsermodule.c"
        $ok=$25; //@line 2565 "parsermodule.c"
        __label__ = 19; break; //@line 2565 "parsermodule.c"
      case 6: // $bb5
        $i=1; //@line 2568 "parsermodule.c"
        var $_pr=$ok;
        __lastLabel__ = 6; __label__ = 12; break; //@line 2568 "parsermodule.c"
      case 7: // $bb6
        var $26=$tree_addr; //@line 2570 "parsermodule.c"
        var $27=$26+20; //@line 2570 "parsermodule.c"
        var $28=HEAP[$27]; //@line 2570 "parsermodule.c"
        var $29=$i; //@line 2570 "parsermodule.c"
        var $30=$28+24*$29; //@line 2570 "parsermodule.c"
        var $31=_validate_terminal($30, 12, __str52); //@line 2570 "parsermodule.c"
        var $32=($31)==0; //@line 2570 "parsermodule.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2570 "parsermodule.c"
      case 8: // $bb7
        var $33=$tree_addr; //@line 2570 "parsermodule.c"
        var $34=$33+20; //@line 2570 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2570 "parsermodule.c"
        var $36=$i; //@line 2570 "parsermodule.c"
        var $37=($36) + 1; //@line 2570 "parsermodule.c"
        var $38=$35+24*$37; //@line 2570 "parsermodule.c"
        var $39=_validate_test($38); //@line 2570 "parsermodule.c"
        var $40=($39)==0; //@line 2570 "parsermodule.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2570 "parsermodule.c"
      case 9: // $bb8
        $iftmp_178=1; //@line 2570 "parsermodule.c"
        __label__ = 11; break; //@line 2570 "parsermodule.c"
      case 10: // $bb9
        $iftmp_178=0; //@line 2570 "parsermodule.c"
        __label__ = 11; break; //@line 2570 "parsermodule.c"
      case 11: // $bb10
        var $41=$iftmp_178; //@line 2570 "parsermodule.c"
        $ok=$41; //@line 2570 "parsermodule.c"
        var $42=$i; //@line 2572 "parsermodule.c"
        var $43=($42) + 2; //@line 2572 "parsermodule.c"
        $i=$43; //@line 2572 "parsermodule.c"
        __lastLabel__ = 11; __label__ = 12; break; //@line 2572 "parsermodule.c"
      case 12: // $bb11
        var $44=__lastLabel__ == 11 ? $41 : ($_pr);
        var $45=($44)==0; //@line 2569 "parsermodule.c"
        if ($45) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2569 "parsermodule.c"
      case 13: // $bb12
        var $46=$nch; //@line 2569 "parsermodule.c"
        var $47=$i; //@line 2569 "parsermodule.c"
        var $48=($46) - ($47); //@line 2569 "parsermodule.c"
        var $49=($48) > 1; //@line 2569 "parsermodule.c"
        if ($49) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 2569 "parsermodule.c"
      case 14: // $bb13
        var $50=$ok; //@line 2574 "parsermodule.c"
        var $51=($50)==0; //@line 2574 "parsermodule.c"
        if ($51) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 2574 "parsermodule.c"
      case 15: // $bb14
        var $52=$nch; //@line 2574 "parsermodule.c"
        var $53=($52) - 1; //@line 2574 "parsermodule.c"
        var $54=$i; //@line 2574 "parsermodule.c"
        var $55=($53)!=($54); //@line 2574 "parsermodule.c"
        if ($55) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 2574 "parsermodule.c"
      case 16: // $bb15
        var $56=$tree_addr; //@line 2575 "parsermodule.c"
        var $57=$56+20; //@line 2575 "parsermodule.c"
        var $58=HEAP[$57]; //@line 2575 "parsermodule.c"
        var $59=$i; //@line 2575 "parsermodule.c"
        var $60=$58+24*$59; //@line 2575 "parsermodule.c"
        var $61=_validate_terminal($60, 12, __str52); //@line 2575 "parsermodule.c"
        $ok=$61; //@line 2575 "parsermodule.c"
        __label__ = 19; break; //@line 2575 "parsermodule.c"
      case 17: // $bb16
        var $62=$i; //@line 2576 "parsermodule.c"
        var $63=$nch; //@line 2576 "parsermodule.c"
        var $64=($62)!=($63); //@line 2576 "parsermodule.c"
        if ($64) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 2576 "parsermodule.c"
      case 18: // $bb17
        $ok=0; //@line 2577 "parsermodule.c"
        _err_string(__str152); //@line 2578 "parsermodule.c"
        __label__ = 19; break; //@line 2578 "parsermodule.c"
      case 19: // $bb18
        var $65=$ok; //@line 2581 "parsermodule.c"
        $0=$65; //@line 2581 "parsermodule.c"
        var $66=$0; //@line 2581 "parsermodule.c"
        $retval=$66; //@line 2581 "parsermodule.c"
        var $retval19=$retval; //@line 2581 "parsermodule.c"
        ;
        return $retval19; //@line 2581 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_decorator($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_180;
        var $iftmp_179;
        var $ok;
        var $nch;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2591 "parsermodule.c"
        var $2=$1+16; //@line 2591 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2591 "parsermodule.c"
        $nch=$3; //@line 2591 "parsermodule.c"
        var $4=$tree_addr; //@line 2592 "parsermodule.c"
        var $5=_validate_ntype($4, 259); //@line 2592 "parsermodule.c"
        var $6=($5)==0; //@line 2592 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 2592 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2592 "parsermodule.c"
        var $8=($7)==3; //@line 2592 "parsermodule.c"
        var $9=$nch; //@line 2592 "parsermodule.c"
        var $10=($9)==5; //@line 2592 "parsermodule.c"
        var $or_cond=($8) | ($10);
        var $11=$nch; //@line 2592 "parsermodule.c"
        var $12=($11)==6; //@line 2592 "parsermodule.c"
        var $or_cond3=($or_cond) | ($12);
        if ($or_cond3) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 2592 "parsermodule.c"
      case 2: // $bb3
        var $13=$tree_addr; //@line 2592 "parsermodule.c"
        var $14=$13+20; //@line 2592 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2592 "parsermodule.c"
        var $16=$15; //@line 2592 "parsermodule.c"
        var $17=_validate_terminal($16, 50, __str153); //@line 2592 "parsermodule.c"
        var $18=($17)==0; //@line 2592 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2592 "parsermodule.c"
      case 3: // $bb4
        var $19=$tree_addr; //@line 2592 "parsermodule.c"
        var $20=$19+20; //@line 2592 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2592 "parsermodule.c"
        var $22=$21+24; //@line 2592 "parsermodule.c"
        var $23=_validate_dotted_name($22); //@line 2592 "parsermodule.c"
        var $24=($23)==0; //@line 2592 "parsermodule.c"
        if ($24) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2592 "parsermodule.c"
      case 4: // $bb5
        var $25=$tree_addr; //@line 2592 "parsermodule.c"
        var $26=$25+20; //@line 2592 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2592 "parsermodule.c"
        var $28=$tree_addr; //@line 2592 "parsermodule.c"
        var $29=$28+16; //@line 2592 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2592 "parsermodule.c"
        var $31=($30) + -1; //@line 2592 "parsermodule.c"
        var $32=$27+24*$31; //@line 2592 "parsermodule.c"
        var $33=_validate_terminal($32, 4, 0); //@line 2592 "parsermodule.c"
        var $34=($33)==0; //@line 2592 "parsermodule.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2592 "parsermodule.c"
      case 5: // $bb8
        $iftmp_179=0; //@line 2592 "parsermodule.c"
        $ok=0; //@line 2592 "parsermodule.c"
        __label__ = 12; break;
      case 6: // $bb9
        $iftmp_179=1; //@line 2592 "parsermodule.c"
        $ok=1; //@line 2592 "parsermodule.c"
        var $35=$nch; //@line 2598 "parsermodule.c"
        var $36=($35)!=3; //@line 2598 "parsermodule.c"
        if ($36) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 2598 "parsermodule.c"
      case 7: // $bb10
        var $37=$tree_addr; //@line 2599 "parsermodule.c"
        var $38=$37+20; //@line 2599 "parsermodule.c"
        var $39=HEAP[$38]; //@line 2599 "parsermodule.c"
        var $40=$39+48; //@line 2599 "parsermodule.c"
        var $41=_validate_terminal($40, 7, __str55); //@line 2599 "parsermodule.c"
        var $42=($41)==0; //@line 2599 "parsermodule.c"
        if ($42) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2599 "parsermodule.c"
      case 8: // $bb11
        var $43=$tree_addr; //@line 2599 "parsermodule.c"
        var $44=$43+20; //@line 2599 "parsermodule.c"
        var $45=HEAP[$44]; //@line 2599 "parsermodule.c"
        var $46=$tree_addr; //@line 2599 "parsermodule.c"
        var $47=$46+16; //@line 2599 "parsermodule.c"
        var $48=HEAP[$47]; //@line 2599 "parsermodule.c"
        var $49=($48) + -2; //@line 2599 "parsermodule.c"
        var $50=$45+24*$49; //@line 2599 "parsermodule.c"
        var $51=_validate_terminal($50, 8, __str56); //@line 2599 "parsermodule.c"
        var $52=($51)==0; //@line 2599 "parsermodule.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2599 "parsermodule.c"
      case 9: // $bb14
        $iftmp_180=0; //@line 2599 "parsermodule.c"
        $ok=0; //@line 2599 "parsermodule.c"
        __label__ = 12; break;
      case 10: // $bb15
        $iftmp_180=1; //@line 2599 "parsermodule.c"
        $ok=1; //@line 2599 "parsermodule.c"
        var $53=$nch; //@line 2602 "parsermodule.c"
        var $54=($53)==6; //@line 2602 "parsermodule.c"
        if ($54) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2602 "parsermodule.c"
      case 11: // $bb16
        var $55=$tree_addr; //@line 2603 "parsermodule.c"
        var $56=$55+20; //@line 2603 "parsermodule.c"
        var $57=HEAP[$56]; //@line 2603 "parsermodule.c"
        var $58=$57+72; //@line 2603 "parsermodule.c"
        var $59=_validate_arglist($58); //@line 2603 "parsermodule.c"
        $ok=$59; //@line 2603 "parsermodule.c"
        __label__ = 12; break; //@line 2603 "parsermodule.c"
      case 12: // $bb17
        var $60=$ok; //@line 2606 "parsermodule.c"
        $0=$60; //@line 2606 "parsermodule.c"
        var $61=$0; //@line 2606 "parsermodule.c"
        $retval=$61; //@line 2606 "parsermodule.c"
        var $retval18=$retval; //@line 2606 "parsermodule.c"
        ;
        return $retval18; //@line 2606 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_decorators($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_181;
        var $i;
        var $nch;
        var $ok;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2616 "parsermodule.c"
        var $2=$1+16; //@line 2616 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2616 "parsermodule.c"
        $nch=$3; //@line 2616 "parsermodule.c"
        var $4=$tree_addr; //@line 2617 "parsermodule.c"
        var $5=_validate_ntype($4, 260); //@line 2617 "parsermodule.c"
        var $6=($5)==0; //@line 2617 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2617 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2617 "parsermodule.c"
        var $8=($7) <= 0; //@line 2617 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2617 "parsermodule.c"
      case 2: // $bb1
        $iftmp_181=1; //@line 2617 "parsermodule.c"
        __label__ = 4; break; //@line 2617 "parsermodule.c"
      case 3: // $bb2
        $iftmp_181=0; //@line 2617 "parsermodule.c"
        __label__ = 4; break; //@line 2617 "parsermodule.c"
      case 4: // $bb3
        var $9=$iftmp_181; //@line 2617 "parsermodule.c"
        $ok=$9; //@line 2617 "parsermodule.c"
        $i=0; //@line 2619 "parsermodule.c"
        __lastLabel__ = 4; __label__ = 6; break; //@line 2619 "parsermodule.c"
      case 5: // $bb4
        var $10=$tree_addr; //@line 2620 "parsermodule.c"
        var $11=$10+20; //@line 2620 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2620 "parsermodule.c"
        var $13=$i; //@line 2620 "parsermodule.c"
        var $14=$12+24*$13; //@line 2620 "parsermodule.c"
        var $15=_validate_decorator($14); //@line 2620 "parsermodule.c"
        $ok=$15; //@line 2620 "parsermodule.c"
        var $16=$i; //@line 2619 "parsermodule.c"
        var $17=($16) + 1; //@line 2619 "parsermodule.c"
        $i=$17; //@line 2619 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 2619 "parsermodule.c"
      case 6: // $bb5
        var $18=__lastLabel__ == 5 ? $15 : ($9);
        var $19=($18)==0; //@line 2619 "parsermodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 2619 "parsermodule.c"
      case 7: // $bb6
        var $20=$i; //@line 2619 "parsermodule.c"
        var $21=$nch; //@line 2619 "parsermodule.c"
        var $22=($20) < ($21); //@line 2619 "parsermodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 2619 "parsermodule.c"
      case 8: // $bb7
        var $23=$ok; //@line 2622 "parsermodule.c"
        $0=$23; //@line 2622 "parsermodule.c"
        var $24=$0; //@line 2622 "parsermodule.c"
        $retval=$24; //@line 2622 "parsermodule.c"
        var $retval8=$retval; //@line 2622 "parsermodule.c"
        ;
        return $retval8; //@line 2622 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_with_item($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_183;
        var $iftmp_182;
        var $nch;
        var $ok;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2631 "parsermodule.c"
        var $2=$1+16; //@line 2631 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2631 "parsermodule.c"
        $nch=$3; //@line 2631 "parsermodule.c"
        var $4=$tree_addr; //@line 2634 "parsermodule.c"
        var $5=_validate_ntype($4, 298); //@line 2634 "parsermodule.c"
        var $6=($5)==0; //@line 2634 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2634 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2634 "parsermodule.c"
        var $8=($7)==1; //@line 2634 "parsermodule.c"
        var $9=$nch; //@line 2634 "parsermodule.c"
        var $10=($9)==3; //@line 2634 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2634 "parsermodule.c"
      case 2: // $bb2
        var $11=$tree_addr; //@line 2634 "parsermodule.c"
        var $12=$11+20; //@line 2634 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2634 "parsermodule.c"
        var $14=$13; //@line 2634 "parsermodule.c"
        var $15=_validate_test($14); //@line 2634 "parsermodule.c"
        var $16=($15)==0; //@line 2634 "parsermodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2634 "parsermodule.c"
      case 3: // $bb5
        $iftmp_182=0; //@line 2634 "parsermodule.c"
        $ok=0; //@line 2634 "parsermodule.c"
        __label__ = 10; break;
      case 4: // $bb6
        $iftmp_182=1; //@line 2634 "parsermodule.c"
        $ok=1; //@line 2634 "parsermodule.c"
        var $17=$nch; //@line 2635 "parsermodule.c"
        var $18=($17)==3; //@line 2635 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 2635 "parsermodule.c"
      case 5: // $bb7
        var $19=$tree_addr; //@line 2636 "parsermodule.c"
        var $20=$19+20; //@line 2636 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2636 "parsermodule.c"
        var $22=$21+24; //@line 2636 "parsermodule.c"
        var $23=_validate_terminal($22, 1, __str112); //@line 2636 "parsermodule.c"
        var $24=($23)==0; //@line 2636 "parsermodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 2636 "parsermodule.c"
      case 6: // $bb8
        var $25=$tree_addr; //@line 2636 "parsermodule.c"
        var $26=$25+20; //@line 2636 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2636 "parsermodule.c"
        var $28=$27+48; //@line 2636 "parsermodule.c"
        var $29=_validate_expr($28); //@line 2636 "parsermodule.c"
        var $30=($29)==0; //@line 2636 "parsermodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 2636 "parsermodule.c"
      case 7: // $bb9
        $iftmp_183=1; //@line 2636 "parsermodule.c"
        __label__ = 9; break; //@line 2636 "parsermodule.c"
      case 8: // $bb10
        $iftmp_183=0; //@line 2636 "parsermodule.c"
        __label__ = 9; break; //@line 2636 "parsermodule.c"
      case 9: // $bb11
        var $31=$iftmp_183; //@line 2636 "parsermodule.c"
        $ok=$31; //@line 2636 "parsermodule.c"
        __label__ = 10; break; //@line 2636 "parsermodule.c"
      case 10: // $bb12
        var $32=$ok; //@line 2638 "parsermodule.c"
        $0=$32; //@line 2638 "parsermodule.c"
        var $33=$0; //@line 2638 "parsermodule.c"
        $retval=$33; //@line 2638 "parsermodule.c"
        var $retval13=$retval; //@line 2638 "parsermodule.c"
        ;
        return $retval13; //@line 2638 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_with_stmt($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_184;
        var $i;
        var $nch;
        var $ok;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2649 "parsermodule.c"
        var $2=$1+16; //@line 2649 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2649 "parsermodule.c"
        $nch=$3; //@line 2649 "parsermodule.c"
        var $4=$tree_addr; //@line 2654 "parsermodule.c"
        var $5=_validate_ntype($4, 297); //@line 2654 "parsermodule.c"
        var $6=($5)==0; //@line 2654 "parsermodule.c"
        if ($6) { __label__ = 6; break; } else { __label__ = 1; break; } //@line 2654 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2654 "parsermodule.c"
        var $8=($7) & 1; //@line 2654 "parsermodule.c"
        var $9=($8)!=0; //@line 2654 "parsermodule.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 2; break; } //@line 2654 "parsermodule.c"
      case 2: // $bb1
        var $10=$tree_addr; //@line 2654 "parsermodule.c"
        var $11=$10+20; //@line 2654 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2654 "parsermodule.c"
        var $13=$12; //@line 2654 "parsermodule.c"
        var $14=_validate_terminal($13, 1, __str154); //@line 2654 "parsermodule.c"
        var $15=($14)==0; //@line 2654 "parsermodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 3; break; } //@line 2654 "parsermodule.c"
      case 3: // $bb2
        var $16=$tree_addr; //@line 2654 "parsermodule.c"
        var $17=$16+20; //@line 2654 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2654 "parsermodule.c"
        var $19=$tree_addr; //@line 2654 "parsermodule.c"
        var $20=$19+16; //@line 2654 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2654 "parsermodule.c"
        var $22=($21) + -2; //@line 2654 "parsermodule.c"
        var $23=$18+24*$22; //@line 2654 "parsermodule.c"
        var $24=_validate_terminal($23, 11, __str54); //@line 2654 "parsermodule.c"
        var $25=($24)==0; //@line 2654 "parsermodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2654 "parsermodule.c"
      case 4: // $bb3
        var $26=$tree_addr; //@line 2654 "parsermodule.c"
        var $27=$26+20; //@line 2654 "parsermodule.c"
        var $28=HEAP[$27]; //@line 2654 "parsermodule.c"
        var $29=$tree_addr; //@line 2654 "parsermodule.c"
        var $30=$29+16; //@line 2654 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2654 "parsermodule.c"
        var $32=($31) + -1; //@line 2654 "parsermodule.c"
        var $33=$28+24*$32; //@line 2654 "parsermodule.c"
        var $34=_validate_suite($33); //@line 2654 "parsermodule.c"
        var $35=($34)==0; //@line 2654 "parsermodule.c"
        if ($35) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2654 "parsermodule.c"
      case 5: // $bb4
        $iftmp_184=1; //@line 2654 "parsermodule.c"
        __label__ = 7; break; //@line 2654 "parsermodule.c"
      case 6: // $bb5
        $iftmp_184=0; //@line 2654 "parsermodule.c"
        __label__ = 7; break; //@line 2654 "parsermodule.c"
      case 7: // $bb6
        var $36=$iftmp_184; //@line 2654 "parsermodule.c"
        $ok=$36; //@line 2654 "parsermodule.c"
        $i=1; //@line 2655 "parsermodule.c"
        __lastLabel__ = 7; __label__ = 9; break; //@line 2655 "parsermodule.c"
      case 8: // $bb7
        var $37=$tree_addr; //@line 2656 "parsermodule.c"
        var $38=$37+20; //@line 2656 "parsermodule.c"
        var $39=HEAP[$38]; //@line 2656 "parsermodule.c"
        var $40=$i; //@line 2656 "parsermodule.c"
        var $41=$39+24*$40; //@line 2656 "parsermodule.c"
        var $42=_validate_with_item($41); //@line 2656 "parsermodule.c"
        $ok=$42; //@line 2656 "parsermodule.c"
        var $43=$i; //@line 2655 "parsermodule.c"
        var $44=($43) + 2; //@line 2655 "parsermodule.c"
        $i=$44; //@line 2655 "parsermodule.c"
        __lastLabel__ = 8; __label__ = 9; break; //@line 2655 "parsermodule.c"
      case 9: // $bb8
        var $45=__lastLabel__ == 8 ? $42 : ($36);
        var $46=($45)==0; //@line 2655 "parsermodule.c"
        if ($46) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2655 "parsermodule.c"
      case 10: // $bb9
        var $47=$nch; //@line 2655 "parsermodule.c"
        var $48=($47) - 2; //@line 2655 "parsermodule.c"
        var $49=$i; //@line 2655 "parsermodule.c"
        var $50=($48) > ($49); //@line 2655 "parsermodule.c"
        if ($50) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 2655 "parsermodule.c"
      case 11: // $bb10
        var $51=$ok; //@line 2657 "parsermodule.c"
        $0=$51; //@line 2657 "parsermodule.c"
        var $52=$0; //@line 2657 "parsermodule.c"
        $retval=$52; //@line 2657 "parsermodule.c"
        var $retval11=$retval; //@line 2657 "parsermodule.c"
        ;
        return $retval11; //@line 2657 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_funcdef($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_186;
        var $nch;
        var $ok;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2668 "parsermodule.c"
        var $2=$1+16; //@line 2668 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2668 "parsermodule.c"
        $nch=$3; //@line 2668 "parsermodule.c"
        var $4=$tree_addr; //@line 2675 "parsermodule.c"
        var $5=_validate_ntype($4, 262); //@line 2675 "parsermodule.c"
        var $6=($5)==0; //@line 2675 "parsermodule.c"
        if ($6) { __label__ = 8; break; } else { __label__ = 1; break; } //@line 2675 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2675 "parsermodule.c"
        var $8=($7)!=5; //@line 2675 "parsermodule.c"
        if ($8) { __label__ = 8; break; } else { __label__ = 2; break; } //@line 2675 "parsermodule.c"
      case 2: // $bb1
        var $9=$tree_addr; //@line 2675 "parsermodule.c"
        var $10=$9+20; //@line 2675 "parsermodule.c"
        var $11=HEAP[$10]; //@line 2675 "parsermodule.c"
        var $12=$tree_addr; //@line 2675 "parsermodule.c"
        var $13=$12+16; //@line 2675 "parsermodule.c"
        var $14=HEAP[$13]; //@line 2675 "parsermodule.c"
        var $15=($14) + -5; //@line 2675 "parsermodule.c"
        var $16=$11+24*$15; //@line 2675 "parsermodule.c"
        var $17=_validate_terminal($16, 1, __str155); //@line 2675 "parsermodule.c"
        var $18=($17)==0; //@line 2675 "parsermodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 3; break; } //@line 2675 "parsermodule.c"
      case 3: // $bb2
        var $19=$tree_addr; //@line 2675 "parsermodule.c"
        var $20=$19+20; //@line 2675 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2675 "parsermodule.c"
        var $22=$tree_addr; //@line 2675 "parsermodule.c"
        var $23=$22+16; //@line 2675 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2675 "parsermodule.c"
        var $25=($24) + -4; //@line 2675 "parsermodule.c"
        var $26=$21+24*$25; //@line 2675 "parsermodule.c"
        var $27=_validate_ntype($26, 1); //@line 2675 "parsermodule.c"
        var $28=($27)==0; //@line 2675 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 2675 "parsermodule.c"
      case 4: // $bb3
        var $29=$tree_addr; //@line 2675 "parsermodule.c"
        var $30=$29+20; //@line 2675 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2675 "parsermodule.c"
        var $32=$tree_addr; //@line 2675 "parsermodule.c"
        var $33=$32+16; //@line 2675 "parsermodule.c"
        var $34=HEAP[$33]; //@line 2675 "parsermodule.c"
        var $35=($34) + -2; //@line 2675 "parsermodule.c"
        var $36=$31+24*$35; //@line 2675 "parsermodule.c"
        var $37=_validate_terminal($36, 11, __str54); //@line 2675 "parsermodule.c"
        var $38=($37)==0; //@line 2675 "parsermodule.c"
        if ($38) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 2675 "parsermodule.c"
      case 5: // $bb4
        var $39=$tree_addr; //@line 2675 "parsermodule.c"
        var $40=$39+20; //@line 2675 "parsermodule.c"
        var $41=HEAP[$40]; //@line 2675 "parsermodule.c"
        var $42=$tree_addr; //@line 2675 "parsermodule.c"
        var $43=$42+16; //@line 2675 "parsermodule.c"
        var $44=HEAP[$43]; //@line 2675 "parsermodule.c"
        var $45=($44) + -3; //@line 2675 "parsermodule.c"
        var $46=$41+24*$45; //@line 2675 "parsermodule.c"
        var $47=_validate_parameters($46); //@line 2675 "parsermodule.c"
        var $48=($47)==0; //@line 2675 "parsermodule.c"
        if ($48) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 2675 "parsermodule.c"
      case 6: // $bb5
        var $49=$tree_addr; //@line 2675 "parsermodule.c"
        var $50=$49+20; //@line 2675 "parsermodule.c"
        var $51=HEAP[$50]; //@line 2675 "parsermodule.c"
        var $52=$tree_addr; //@line 2675 "parsermodule.c"
        var $53=$52+16; //@line 2675 "parsermodule.c"
        var $54=HEAP[$53]; //@line 2675 "parsermodule.c"
        var $55=($54) + -1; //@line 2675 "parsermodule.c"
        var $56=$51+24*$55; //@line 2675 "parsermodule.c"
        var $57=_validate_suite($56); //@line 2675 "parsermodule.c"
        var $58=($57)==0; //@line 2675 "parsermodule.c"
        if ($58) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 2675 "parsermodule.c"
      case 7: // $bb6
        $iftmp_186=1; //@line 2675 "parsermodule.c"
        __label__ = 9; break; //@line 2675 "parsermodule.c"
      case 8: // $bb7
        $iftmp_186=0; //@line 2675 "parsermodule.c"
        __label__ = 9; break; //@line 2675 "parsermodule.c"
      case 9: // $bb8
        var $59=$iftmp_186; //@line 2675 "parsermodule.c"
        $ok=$59; //@line 2675 "parsermodule.c"
        var $60=$ok; //@line 2676 "parsermodule.c"
        $0=$60; //@line 2676 "parsermodule.c"
        var $61=$0; //@line 2676 "parsermodule.c"
        $retval=$61; //@line 2676 "parsermodule.c"
        var $retval9=$retval; //@line 2676 "parsermodule.c"
        ;
        return $retval9; //@line 2676 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_decorated($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_189;
        var $iftmp_188;
        var $iftmp_187;
        var $nch;
        var $ok;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2686 "parsermodule.c"
        var $2=$1+16; //@line 2686 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2686 "parsermodule.c"
        $nch=$3; //@line 2686 "parsermodule.c"
        var $4=$tree_addr; //@line 2689 "parsermodule.c"
        var $5=_validate_ntype($4, 261); //@line 2689 "parsermodule.c"
        var $6=($5)==0; //@line 2689 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2689 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2689 "parsermodule.c"
        var $8=($7)!=2; //@line 2689 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2689 "parsermodule.c"
      case 2: // $bb1
        var $9=$tree_addr; //@line 2689 "parsermodule.c"
        var $10=$9+20; //@line 2689 "parsermodule.c"
        var $11=HEAP[$10]; //@line 2689 "parsermodule.c"
        var $12=$tree_addr; //@line 2689 "parsermodule.c"
        var $13=$12+16; //@line 2689 "parsermodule.c"
        var $14=HEAP[$13]; //@line 2689 "parsermodule.c"
        var $15=($14) + -2; //@line 2689 "parsermodule.c"
        var $16=$11+24*$15; //@line 2689 "parsermodule.c"
        var $17=_validate_decorators($16); //@line 2689 "parsermodule.c"
        var $18=($17)==0; //@line 2689 "parsermodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2689 "parsermodule.c"
      case 3: // $bb2
        $iftmp_187=1; //@line 2689 "parsermodule.c"
        __label__ = 5; break; //@line 2689 "parsermodule.c"
      case 4: // $bb3
        $iftmp_187=0; //@line 2689 "parsermodule.c"
        __label__ = 5; break; //@line 2689 "parsermodule.c"
      case 5: // $bb4
        var $19=$iftmp_187; //@line 2689 "parsermodule.c"
        $ok=$19; //@line 2689 "parsermodule.c"
        var $20=$tree_addr; //@line 2690 "parsermodule.c"
        var $21=$20+20; //@line 2690 "parsermodule.c"
        var $22=HEAP[$21]; //@line 2690 "parsermodule.c"
        var $23=$tree_addr; //@line 2690 "parsermodule.c"
        var $24=$23+16; //@line 2690 "parsermodule.c"
        var $25=HEAP[$24]; //@line 2690 "parsermodule.c"
        var $26=($25) + -1; //@line 2690 "parsermodule.c"
        var $27=$22+24*$26; //@line 2690 "parsermodule.c"
        var $28=$27; //@line 2690 "parsermodule.c"
        var $29=HEAP[$28]; //@line 2690 "parsermodule.c"
        var $30=($29)==262; //@line 2690 "parsermodule.c"
        var $31=$ok; //@line 2691 "parsermodule.c"
        var $32=($31)==0; //@line 2691 "parsermodule.c"
        if ($30) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 2690 "parsermodule.c"
      case 6: // $bb5
        if ($32) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2691 "parsermodule.c"
      case 7: // $bb6
        var $33=$tree_addr; //@line 2691 "parsermodule.c"
        var $34=$33+20; //@line 2691 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2691 "parsermodule.c"
        var $36=$tree_addr; //@line 2691 "parsermodule.c"
        var $37=$36+16; //@line 2691 "parsermodule.c"
        var $38=HEAP[$37]; //@line 2691 "parsermodule.c"
        var $39=($38) + -1; //@line 2691 "parsermodule.c"
        var $40=$35+24*$39; //@line 2691 "parsermodule.c"
        var $41=_validate_funcdef($40); //@line 2691 "parsermodule.c"
        var $42=($41)==0; //@line 2691 "parsermodule.c"
        if ($42) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2691 "parsermodule.c"
      case 8: // $bb7
        $iftmp_188=1; //@line 2691 "parsermodule.c"
        __label__ = 10; break; //@line 2691 "parsermodule.c"
      case 9: // $bb8
        $iftmp_188=0; //@line 2691 "parsermodule.c"
        __label__ = 10; break; //@line 2691 "parsermodule.c"
      case 10: // $bb9
        var $43=$iftmp_188; //@line 2691 "parsermodule.c"
        $ok=$43; //@line 2691 "parsermodule.c"
        __label__ = 16; break; //@line 2691 "parsermodule.c"
      case 11: // $bb10
        if ($32) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 2693 "parsermodule.c"
      case 12: // $bb11
        var $44=$tree_addr; //@line 2693 "parsermodule.c"
        var $45=$44+20; //@line 2693 "parsermodule.c"
        var $46=HEAP[$45]; //@line 2693 "parsermodule.c"
        var $47=$tree_addr; //@line 2693 "parsermodule.c"
        var $48=$47+16; //@line 2693 "parsermodule.c"
        var $49=HEAP[$48]; //@line 2693 "parsermodule.c"
        var $50=($49) + -1; //@line 2693 "parsermodule.c"
        var $51=$46+24*$50; //@line 2693 "parsermodule.c"
        var $52=_validate_class($51); //@line 2693 "parsermodule.c"
        var $53=($52)==0; //@line 2693 "parsermodule.c"
        if ($53) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2693 "parsermodule.c"
      case 13: // $bb12
        $iftmp_189=1; //@line 2693 "parsermodule.c"
        __label__ = 15; break; //@line 2693 "parsermodule.c"
      case 14: // $bb13
        $iftmp_189=0; //@line 2693 "parsermodule.c"
        __label__ = 15; break; //@line 2693 "parsermodule.c"
      case 15: // $bb14
        var $54=$iftmp_189; //@line 2693 "parsermodule.c"
        $ok=$54; //@line 2693 "parsermodule.c"
        __label__ = 16; break; //@line 2693 "parsermodule.c"
      case 16: // $bb15
        var $55=$ok; //@line 2694 "parsermodule.c"
        $0=$55; //@line 2694 "parsermodule.c"
        var $56=$0; //@line 2694 "parsermodule.c"
        $retval=$56; //@line 2694 "parsermodule.c"
        var $retval16=$retval; //@line 2694 "parsermodule.c"
        ;
        return $retval16; //@line 2694 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_lambdef($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_190;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2700 "parsermodule.c"
        var $2=$1+16; //@line 2700 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2700 "parsermodule.c"
        $nch=$3; //@line 2700 "parsermodule.c"
        var $4=$tree_addr; //@line 2705 "parsermodule.c"
        var $5=_validate_ntype($4, 321); //@line 2705 "parsermodule.c"
        var $6=($5)==0; //@line 2705 "parsermodule.c"
        if ($6) { __label__ = 7; break; } else { __label__ = 1; break; } //@line 2705 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2705 "parsermodule.c"
        var $8=($7)==3; //@line 2705 "parsermodule.c"
        var $9=$nch; //@line 2705 "parsermodule.c"
        var $10=($9)==4; //@line 2705 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 2705 "parsermodule.c"
      case 2: // $bb2
        var $11=$tree_addr; //@line 2705 "parsermodule.c"
        var $12=$11+20; //@line 2705 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2705 "parsermodule.c"
        var $14=$13; //@line 2705 "parsermodule.c"
        var $15=_validate_terminal($14, 1, __str156); //@line 2705 "parsermodule.c"
        var $16=($15)==0; //@line 2705 "parsermodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 3; break; } //@line 2705 "parsermodule.c"
      case 3: // $bb3
        var $17=$tree_addr; //@line 2705 "parsermodule.c"
        var $18=$17+20; //@line 2705 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2705 "parsermodule.c"
        var $20=$nch; //@line 2705 "parsermodule.c"
        var $21=($20) - 2; //@line 2705 "parsermodule.c"
        var $22=$19+24*$21; //@line 2705 "parsermodule.c"
        var $23=_validate_terminal($22, 11, __str54); //@line 2705 "parsermodule.c"
        var $24=($23)==0; //@line 2705 "parsermodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 4; break; } //@line 2705 "parsermodule.c"
      case 4: // $bb4
        var $25=$tree_addr; //@line 2705 "parsermodule.c"
        var $26=$25+20; //@line 2705 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2705 "parsermodule.c"
        var $28=$nch; //@line 2705 "parsermodule.c"
        var $29=($28) - 1; //@line 2705 "parsermodule.c"
        var $30=$27+24*$29; //@line 2705 "parsermodule.c"
        var $31=_validate_test($30); //@line 2705 "parsermodule.c"
        var $32=($31)==0; //@line 2705 "parsermodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 2705 "parsermodule.c"
      case 5: // $bb8
        $iftmp_190=1; //@line 2705 "parsermodule.c"
        $res=1; //@line 2705 "parsermodule.c"
        var $33=$nch; //@line 2707 "parsermodule.c"
        var $34=($33)!=4; //@line 2707 "parsermodule.c"
        if ($34) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 2707 "parsermodule.c"
      case 6: // $bb9
        var $35=$tree_addr; //@line 2708 "parsermodule.c"
        var $36=$35+20; //@line 2708 "parsermodule.c"
        var $37=HEAP[$36]; //@line 2708 "parsermodule.c"
        var $38=$37+24; //@line 2708 "parsermodule.c"
        var $39=_validate_varargslist($38); //@line 2708 "parsermodule.c"
        $res=$39; //@line 2708 "parsermodule.c"
        __label__ = 9; break; //@line 2708 "parsermodule.c"
      case 7: // $bb11
        $iftmp_190=0; //@line 2705 "parsermodule.c"
        $res=0; //@line 2705 "parsermodule.c"
        var $40=_PyErr_Occurred(); //@line 2709 "parsermodule.c"
        var $41=($40)==0; //@line 2709 "parsermodule.c"
        if ($41) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2709 "parsermodule.c"
      case 8: // $bb12
        var $42=$tree_addr; //@line 2710 "parsermodule.c"
        var $43=_validate_numnodes($42, 3, __str157); //@line 2710 "parsermodule.c"
        __label__ = 9; break; //@line 2710 "parsermodule.c"
      case 9: // $bb13
        var $44=$res; //@line 2712 "parsermodule.c"
        $0=$44; //@line 2712 "parsermodule.c"
        var $45=$0; //@line 2712 "parsermodule.c"
        $retval=$45; //@line 2712 "parsermodule.c"
        var $retval14=$retval; //@line 2712 "parsermodule.c"
        ;
        return $retval14; //@line 2712 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_old_lambdef($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_191;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2719 "parsermodule.c"
        var $2=$1+16; //@line 2719 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2719 "parsermodule.c"
        $nch=$3; //@line 2719 "parsermodule.c"
        var $4=$tree_addr; //@line 2724 "parsermodule.c"
        var $5=_validate_ntype($4, 303); //@line 2724 "parsermodule.c"
        var $6=($5)==0; //@line 2724 "parsermodule.c"
        if ($6) { __label__ = 7; break; } else { __label__ = 1; break; } //@line 2724 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2724 "parsermodule.c"
        var $8=($7)==3; //@line 2724 "parsermodule.c"
        var $9=$nch; //@line 2724 "parsermodule.c"
        var $10=($9)==4; //@line 2724 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 2724 "parsermodule.c"
      case 2: // $bb2
        var $11=$tree_addr; //@line 2724 "parsermodule.c"
        var $12=$11+20; //@line 2724 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2724 "parsermodule.c"
        var $14=$13; //@line 2724 "parsermodule.c"
        var $15=_validate_terminal($14, 1, __str156); //@line 2724 "parsermodule.c"
        var $16=($15)==0; //@line 2724 "parsermodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 3; break; } //@line 2724 "parsermodule.c"
      case 3: // $bb3
        var $17=$tree_addr; //@line 2724 "parsermodule.c"
        var $18=$17+20; //@line 2724 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2724 "parsermodule.c"
        var $20=$nch; //@line 2724 "parsermodule.c"
        var $21=($20) - 2; //@line 2724 "parsermodule.c"
        var $22=$19+24*$21; //@line 2724 "parsermodule.c"
        var $23=_validate_terminal($22, 11, __str54); //@line 2724 "parsermodule.c"
        var $24=($23)==0; //@line 2724 "parsermodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 4; break; } //@line 2724 "parsermodule.c"
      case 4: // $bb4
        var $25=$tree_addr; //@line 2724 "parsermodule.c"
        var $26=$25+20; //@line 2724 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2724 "parsermodule.c"
        var $28=$nch; //@line 2724 "parsermodule.c"
        var $29=($28) - 1; //@line 2724 "parsermodule.c"
        var $30=$27+24*$29; //@line 2724 "parsermodule.c"
        var $31=_validate_test($30); //@line 2724 "parsermodule.c"
        var $32=($31)==0; //@line 2724 "parsermodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 2724 "parsermodule.c"
      case 5: // $bb8
        $iftmp_191=1; //@line 2724 "parsermodule.c"
        $res=1; //@line 2724 "parsermodule.c"
        var $33=$nch; //@line 2726 "parsermodule.c"
        var $34=($33)!=4; //@line 2726 "parsermodule.c"
        if ($34) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 2726 "parsermodule.c"
      case 6: // $bb9
        var $35=$tree_addr; //@line 2727 "parsermodule.c"
        var $36=$35+20; //@line 2727 "parsermodule.c"
        var $37=HEAP[$36]; //@line 2727 "parsermodule.c"
        var $38=$37+24; //@line 2727 "parsermodule.c"
        var $39=_validate_varargslist($38); //@line 2727 "parsermodule.c"
        $res=$39; //@line 2727 "parsermodule.c"
        __label__ = 9; break; //@line 2727 "parsermodule.c"
      case 7: // $bb11
        $iftmp_191=0; //@line 2724 "parsermodule.c"
        $res=0; //@line 2724 "parsermodule.c"
        var $40=_PyErr_Occurred(); //@line 2728 "parsermodule.c"
        var $41=($40)==0; //@line 2728 "parsermodule.c"
        if ($41) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2728 "parsermodule.c"
      case 8: // $bb12
        var $42=$tree_addr; //@line 2729 "parsermodule.c"
        var $43=_validate_numnodes($42, 3, __str158); //@line 2729 "parsermodule.c"
        __label__ = 9; break; //@line 2729 "parsermodule.c"
      case 9: // $bb13
        var $44=$res; //@line 2731 "parsermodule.c"
        $0=$44; //@line 2731 "parsermodule.c"
        var $45=$0; //@line 2731 "parsermodule.c"
        $retval=$45; //@line 2731 "parsermodule.c"
        var $retval14=$retval; //@line 2731 "parsermodule.c"
        ;
        return $retval14; //@line 2731 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_arglist($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $iftmp_194;
        var $iftmp_193;
        var $iftmp_192;
        var $0;
        var $nch;
        var $i;
        var $ok;
        var $ch;
        var $sym;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2742 "parsermodule.c"
        var $2=$1+16; //@line 2742 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2742 "parsermodule.c"
        $nch=$3; //@line 2742 "parsermodule.c"
        $i=0; //@line 2743 "parsermodule.c"
        $ok=1; //@line 2744 "parsermodule.c"
        var $4=$nch; //@line 2746 "parsermodule.c"
        var $5=($4) <= 0; //@line 2746 "parsermodule.c"
        var $6=$nch; //@line 2748 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2746 "parsermodule.c"
      case 1: // $bb
        var $7=($6) + 1; //@line 2748 "parsermodule.c"
        var $8=$tree_addr; //@line 2748 "parsermodule.c"
        var $9=_validate_numnodes($8, $7, __str159); //@line 2748 "parsermodule.c"
        $0=$9; //@line 2748 "parsermodule.c"
        __label__ = 46; break; //@line 2748 "parsermodule.c"
      case 2: // $bb1
        var $10=($6) > 1; //@line 2750 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 2750 "parsermodule.c"
      case 3: // $bb2
        $i=0; //@line 2751 "parsermodule.c"
        __label__ = 9; break; //@line 2751 "parsermodule.c"
      case 4: // $bb3
        var $11=$tree_addr; //@line 2752 "parsermodule.c"
        var $12=$11+20; //@line 2752 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2752 "parsermodule.c"
        var $14=$i; //@line 2752 "parsermodule.c"
        var $15=$13+24*$14; //@line 2752 "parsermodule.c"
        var $16=$15; //@line 2752 "parsermodule.c"
        var $17=HEAP[$16]; //@line 2752 "parsermodule.c"
        var $18=($17)==331; //@line 2752 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 2752 "parsermodule.c"
      case 5: // $bb4
        var $19=$tree_addr; //@line 2753 "parsermodule.c"
        var $20=$19+20; //@line 2753 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2753 "parsermodule.c"
        var $22=$i; //@line 2753 "parsermodule.c"
        var $23=$21+24*$22; //@line 2753 "parsermodule.c"
        $ch=$23; //@line 2753 "parsermodule.c"
        var $24=$ch; //@line 2754 "parsermodule.c"
        var $25=$24+16; //@line 2754 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2754 "parsermodule.c"
        var $27=($26)==2; //@line 2754 "parsermodule.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 2754 "parsermodule.c"
      case 6: // $bb5
        var $28=$ch; //@line 2754 "parsermodule.c"
        var $29=$28+20; //@line 2754 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2754 "parsermodule.c"
        var $31=$30+24; //@line 2754 "parsermodule.c"
        var $32=$31; //@line 2754 "parsermodule.c"
        var $33=HEAP[$32]; //@line 2754 "parsermodule.c"
        var $34=($33)==336; //@line 2754 "parsermodule.c"
        if ($34) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2754 "parsermodule.c"
      case 7: // $bb6
        _err_string(__str160); //@line 2755 "parsermodule.c"
        $0=0; //@line 2756 "parsermodule.c"
        __label__ = 46; break; //@line 2756 "parsermodule.c"
      case 8: // $bb7
        var $35=$i; //@line 2751 "parsermodule.c"
        var $36=($35) + 1; //@line 2751 "parsermodule.c"
        $i=$36; //@line 2751 "parsermodule.c"
        __label__ = 9; break; //@line 2751 "parsermodule.c"
      case 9: // $bb8
        var $37=$i; //@line 2751 "parsermodule.c"
        var $38=$nch; //@line 2751 "parsermodule.c"
        var $39=($37) < ($38); //@line 2751 "parsermodule.c"
        if ($39) { __label__ = 4; break; } else { __label__ = 14; break; } //@line 2751 "parsermodule.c"
      case 10: // $bb10
        var $40=$tree_addr; //@line 2764 "parsermodule.c"
        var $41=$40+20; //@line 2764 "parsermodule.c"
        var $42=HEAP[$41]; //@line 2764 "parsermodule.c"
        var $43=$i; //@line 2764 "parsermodule.c"
        var $44=$42+24*$43; //@line 2764 "parsermodule.c"
        var $45=_validate_argument($44); //@line 2764 "parsermodule.c"
        var $46=($45)==0; //@line 2764 "parsermodule.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 11; break; } //@line 2764 "parsermodule.c"
      case 11: // $bb11
        var $47=$tree_addr; //@line 2764 "parsermodule.c"
        var $48=$47+20; //@line 2764 "parsermodule.c"
        var $49=HEAP[$48]; //@line 2764 "parsermodule.c"
        var $50=$i; //@line 2764 "parsermodule.c"
        var $51=($50) + 1; //@line 2764 "parsermodule.c"
        var $52=$49+24*$51; //@line 2764 "parsermodule.c"
        var $53=_validate_terminal($52, 12, __str52); //@line 2764 "parsermodule.c"
        var $54=($53)==0; //@line 2764 "parsermodule.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2764 "parsermodule.c"
      case 12: // $bb15
        $iftmp_192=1; //@line 2764 "parsermodule.c"
        $ok=1; //@line 2764 "parsermodule.c"
        var $55=$i; //@line 2767 "parsermodule.c"
        var $56=($55) + 2; //@line 2767 "parsermodule.c"
        $i=$56; //@line 2767 "parsermodule.c"
        __lastLabel__ = 12; __label__ = 15; break; //@line 2767 "parsermodule.c"
      case 13: // $bb16
        $iftmp_192=0; //@line 2764 "parsermodule.c"
        $ok=0; //@line 2764 "parsermodule.c"
        _PyErr_Clear(); //@line 2769 "parsermodule.c"
        __label__ = 14; break; //@line 2769 "parsermodule.c"
      case 14: // $bb17thread_pre_split
        var $_pr=$ok;
        __lastLabel__ = 14; __label__ = 15; break;
      case 15: // $bb17
        var $57=__lastLabel__ == 14 ? $_pr : (1);
        var $58=($57)==0; //@line 2762 "parsermodule.c"
        if ($58) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 2762 "parsermodule.c"
      case 16: // $bb18
        var $59=$nch; //@line 2762 "parsermodule.c"
        var $60=$i; //@line 2762 "parsermodule.c"
        var $61=($59) - ($60); //@line 2762 "parsermodule.c"
        var $62=($61) > 1; //@line 2762 "parsermodule.c"
        if ($62) { __label__ = 10; break; } else { __label__ = 17; break; } //@line 2762 "parsermodule.c"
      case 17: // $bb19
        $ok=1; //@line 2771 "parsermodule.c"
        var $63=$nch; //@line 2772 "parsermodule.c"
        var $64=$i; //@line 2772 "parsermodule.c"
        var $65=($63) - ($64); //@line 2772 "parsermodule.c"
        var $66=($65) > 0; //@line 2772 "parsermodule.c"
        if ($66) { __label__ = 18; break; } else { __label__ = 45; break; } //@line 2772 "parsermodule.c"
      case 18: // $bb20
        var $67=$tree_addr; //@line 2776 "parsermodule.c"
        var $68=$67+20; //@line 2776 "parsermodule.c"
        var $69=HEAP[$68]; //@line 2776 "parsermodule.c"
        var $70=$i; //@line 2776 "parsermodule.c"
        var $71=$69+24*$70; //@line 2776 "parsermodule.c"
        var $72=$71; //@line 2776 "parsermodule.c"
        var $73=HEAP[$72]; //@line 2776 "parsermodule.c"
        var $74=($73); //@line 2776 "parsermodule.c"
        $sym=$74; //@line 2776 "parsermodule.c"
        var $75=$sym; //@line 2778 "parsermodule.c"
        var $76=($75)==331; //@line 2778 "parsermodule.c"
        if ($76) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 2778 "parsermodule.c"
      case 19: // $bb21
        var $77=$tree_addr; //@line 2779 "parsermodule.c"
        var $78=$77+20; //@line 2779 "parsermodule.c"
        var $79=HEAP[$78]; //@line 2779 "parsermodule.c"
        var $80=$i; //@line 2779 "parsermodule.c"
        var $81=$79+24*$80; //@line 2779 "parsermodule.c"
        var $82=_validate_argument($81); //@line 2779 "parsermodule.c"
        $ok=$82; //@line 2779 "parsermodule.c"
        var $83=$ok; //@line 2780 "parsermodule.c"
        var $84=($83)!=0; //@line 2780 "parsermodule.c"
        if ($84) { __label__ = 20; break; } else { __label__ = 45; break; } //@line 2780 "parsermodule.c"
      case 20: // $bb22
        var $85=$i; //@line 2780 "parsermodule.c"
        var $86=($85) + 1; //@line 2780 "parsermodule.c"
        var $87=$nch; //@line 2780 "parsermodule.c"
        var $88=($86)!=($87); //@line 2780 "parsermodule.c"
        if ($88) { __label__ = 21; break; } else { __label__ = 45; break; } //@line 2780 "parsermodule.c"
      case 21: // $bb23
        _err_string(__str161); //@line 2781 "parsermodule.c"
        $ok=0; //@line 2783 "parsermodule.c"
        __label__ = 45; break; //@line 2783 "parsermodule.c"
      case 22: // $bb25
        var $89=$sym; //@line 2786 "parsermodule.c"
        var $90=($89)==16; //@line 2786 "parsermodule.c"
        if ($90) { __label__ = 23; break; } else { __label__ = 36; break; } //@line 2786 "parsermodule.c"
      case 23: // $bb26
        var $91=$tree_addr; //@line 2787 "parsermodule.c"
        var $92=$91+20; //@line 2787 "parsermodule.c"
        var $93=HEAP[$92]; //@line 2787 "parsermodule.c"
        var $94=$i; //@line 2787 "parsermodule.c"
        var $95=$93+24*$94; //@line 2787 "parsermodule.c"
        var $96=_validate_terminal($95, 16, __str162); //@line 2787 "parsermodule.c"
        $ok=$96; //@line 2787 "parsermodule.c"
        var $97=$ok; //@line 2788 "parsermodule.c"
        var $98=($97)==0; //@line 2788 "parsermodule.c"
        if ($98) { __label__ = 35; break; } else { __label__ = 24; break; } //@line 2788 "parsermodule.c"
      case 24: // $bb27
        var $99=$nch; //@line 2788 "parsermodule.c"
        var $100=$i; //@line 2788 "parsermodule.c"
        var $101=($99) - ($100); //@line 2788 "parsermodule.c"
        var $102=($101)!=2; //@line 2788 "parsermodule.c"
        if ($102) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 2788 "parsermodule.c"
      case 25: // $bb28
        var $103=$tree_addr; //@line 2789 "parsermodule.c"
        var $104=$103+20; //@line 2789 "parsermodule.c"
        var $105=HEAP[$104]; //@line 2789 "parsermodule.c"
        var $106=$i; //@line 2789 "parsermodule.c"
        var $107=($106) + 1; //@line 2789 "parsermodule.c"
        var $108=$105+24*$107; //@line 2789 "parsermodule.c"
        var $109=_validate_test($108); //@line 2789 "parsermodule.c"
        $ok=$109; //@line 2789 "parsermodule.c"
        __label__ = 45; break; //@line 2789 "parsermodule.c"
      case 26: // $bb29
        var $_pr1=$ok;
        var $110=($_pr1)==0; //@line 2790 "parsermodule.c"
        if ($110) { __label__ = 35; break; } else { __label__ = 27; break; } //@line 2790 "parsermodule.c"
      case 27: // $bb30
        var $111=$nch; //@line 2790 "parsermodule.c"
        var $112=$i; //@line 2790 "parsermodule.c"
        var $113=($111) - ($112); //@line 2790 "parsermodule.c"
        var $114=($113)!=5; //@line 2790 "parsermodule.c"
        if ($114) { __label__ = 35; break; } else { __label__ = 28; break; } //@line 2790 "parsermodule.c"
      case 28: // $bb31
        var $115=$tree_addr; //@line 2791 "parsermodule.c"
        var $116=$115+20; //@line 2791 "parsermodule.c"
        var $117=HEAP[$116]; //@line 2791 "parsermodule.c"
        var $118=$i; //@line 2791 "parsermodule.c"
        var $119=($118) + 1; //@line 2791 "parsermodule.c"
        var $120=$117+24*$119; //@line 2791 "parsermodule.c"
        var $121=_validate_test($120); //@line 2791 "parsermodule.c"
        var $122=($121)==0; //@line 2791 "parsermodule.c"
        if ($122) { __label__ = 33; break; } else { __label__ = 29; break; } //@line 2791 "parsermodule.c"
      case 29: // $bb32
        var $123=$tree_addr; //@line 2791 "parsermodule.c"
        var $124=$123+20; //@line 2791 "parsermodule.c"
        var $125=HEAP[$124]; //@line 2791 "parsermodule.c"
        var $126=$i; //@line 2791 "parsermodule.c"
        var $127=($126) + 2; //@line 2791 "parsermodule.c"
        var $128=$125+24*$127; //@line 2791 "parsermodule.c"
        var $129=_validate_terminal($128, 12, __str52); //@line 2791 "parsermodule.c"
        var $130=($129)==0; //@line 2791 "parsermodule.c"
        if ($130) { __label__ = 33; break; } else { __label__ = 30; break; } //@line 2791 "parsermodule.c"
      case 30: // $bb33
        var $131=$tree_addr; //@line 2791 "parsermodule.c"
        var $132=$131+20; //@line 2791 "parsermodule.c"
        var $133=HEAP[$132]; //@line 2791 "parsermodule.c"
        var $134=$i; //@line 2791 "parsermodule.c"
        var $135=($134) + 3; //@line 2791 "parsermodule.c"
        var $136=$133+24*$135; //@line 2791 "parsermodule.c"
        var $137=_validate_terminal($136, 36, __str67); //@line 2791 "parsermodule.c"
        var $138=($137)==0; //@line 2791 "parsermodule.c"
        if ($138) { __label__ = 33; break; } else { __label__ = 31; break; } //@line 2791 "parsermodule.c"
      case 31: // $bb34
        var $139=$tree_addr; //@line 2791 "parsermodule.c"
        var $140=$139+20; //@line 2791 "parsermodule.c"
        var $141=HEAP[$140]; //@line 2791 "parsermodule.c"
        var $142=$i; //@line 2791 "parsermodule.c"
        var $143=($142) + 4; //@line 2791 "parsermodule.c"
        var $144=$141+24*$143; //@line 2791 "parsermodule.c"
        var $145=_validate_test($144); //@line 2791 "parsermodule.c"
        var $146=($145)==0; //@line 2791 "parsermodule.c"
        if ($146) { __label__ = 33; break; } else { __label__ = 32; break; } //@line 2791 "parsermodule.c"
      case 32: // $bb35
        $iftmp_193=1; //@line 2791 "parsermodule.c"
        __label__ = 34; break; //@line 2791 "parsermodule.c"
      case 33: // $bb36
        $iftmp_193=0; //@line 2791 "parsermodule.c"
        __label__ = 34; break; //@line 2791 "parsermodule.c"
      case 34: // $bb37
        var $147=$iftmp_193; //@line 2791 "parsermodule.c"
        $ok=$147; //@line 2791 "parsermodule.c"
        __label__ = 45; break; //@line 2791 "parsermodule.c"
      case 35: // $bb38
        _err_string(__str163); //@line 2796 "parsermodule.c"
        $ok=0; //@line 2797 "parsermodule.c"
        __label__ = 45; break; //@line 2797 "parsermodule.c"
      case 36: // $bb40
        var $148=$sym; //@line 2800 "parsermodule.c"
        var $149=($148)==36; //@line 2800 "parsermodule.c"
        if ($149) { __label__ = 37; break; } else { __label__ = 44; break; } //@line 2800 "parsermodule.c"
      case 37: // $bb41
        var $150=$nch; //@line 2801 "parsermodule.c"
        var $151=$i; //@line 2801 "parsermodule.c"
        var $152=($150) - ($151); //@line 2801 "parsermodule.c"
        var $153=($152)==2; //@line 2801 "parsermodule.c"
        if ($153) { __label__ = 38; break; } else { __label__ = 43; break; } //@line 2801 "parsermodule.c"
      case 38: // $bb42
        var $154=$tree_addr; //@line 2802 "parsermodule.c"
        var $155=$154+20; //@line 2802 "parsermodule.c"
        var $156=HEAP[$155]; //@line 2802 "parsermodule.c"
        var $157=$i; //@line 2802 "parsermodule.c"
        var $158=$156+24*$157; //@line 2802 "parsermodule.c"
        var $159=_validate_terminal($158, 36, __str67); //@line 2802 "parsermodule.c"
        var $160=($159)==0; //@line 2802 "parsermodule.c"
        if ($160) { __label__ = 41; break; } else { __label__ = 39; break; } //@line 2802 "parsermodule.c"
      case 39: // $bb43
        var $161=$tree_addr; //@line 2802 "parsermodule.c"
        var $162=$161+20; //@line 2802 "parsermodule.c"
        var $163=HEAP[$162]; //@line 2802 "parsermodule.c"
        var $164=$i; //@line 2802 "parsermodule.c"
        var $165=($164) + 1; //@line 2802 "parsermodule.c"
        var $166=$163+24*$165; //@line 2802 "parsermodule.c"
        var $167=_validate_test($166); //@line 2802 "parsermodule.c"
        var $168=($167)==0; //@line 2802 "parsermodule.c"
        if ($168) { __label__ = 41; break; } else { __label__ = 40; break; } //@line 2802 "parsermodule.c"
      case 40: // $bb44
        $iftmp_194=1; //@line 2802 "parsermodule.c"
        __label__ = 42; break; //@line 2802 "parsermodule.c"
      case 41: // $bb45
        $iftmp_194=0; //@line 2802 "parsermodule.c"
        __label__ = 42; break; //@line 2802 "parsermodule.c"
      case 42: // $bb46
        var $169=$iftmp_194; //@line 2802 "parsermodule.c"
        $ok=$169; //@line 2802 "parsermodule.c"
        __label__ = 45; break; //@line 2802 "parsermodule.c"
      case 43: // $bb47
        _err_string(__str164); //@line 2805 "parsermodule.c"
        $ok=0; //@line 2806 "parsermodule.c"
        __label__ = 45; break; //@line 2806 "parsermodule.c"
      case 44: // $bb49
        _err_string(__str165); //@line 2810 "parsermodule.c"
        $ok=0; //@line 2811 "parsermodule.c"
        __label__ = 45; break; //@line 2811 "parsermodule.c"
      case 45: // $bb50
        var $170=$ok; //@line 2814 "parsermodule.c"
        $0=$170; //@line 2814 "parsermodule.c"
        __label__ = 46; break; //@line 2814 "parsermodule.c"
      case 46: // $bb51
        var $171=$0; //@line 2748 "parsermodule.c"
        $retval=$171; //@line 2748 "parsermodule.c"
        var $retval52=$retval; //@line 2748 "parsermodule.c"
        ;
        return $retval52; //@line 2748 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_argument($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_196;
        var $iftmp_195;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2826 "parsermodule.c"
        var $2=$1+16; //@line 2826 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2826 "parsermodule.c"
        $nch=$3; //@line 2826 "parsermodule.c"
        var $4=$tree_addr; //@line 2829 "parsermodule.c"
        var $5=_validate_ntype($4, 331); //@line 2829 "parsermodule.c"
        var $6=($5)==0; //@line 2829 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 2829 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2829 "parsermodule.c"
        var $8=($7)==1; //@line 2829 "parsermodule.c"
        var $9=$nch; //@line 2829 "parsermodule.c"
        var $10=($9)==2; //@line 2829 "parsermodule.c"
        var $or_cond=($8) | ($10);
        var $11=$nch; //@line 2829 "parsermodule.c"
        var $12=($11)==3; //@line 2829 "parsermodule.c"
        var $or_cond3=($or_cond) | ($12);
        if ($or_cond3) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 2829 "parsermodule.c"
      case 2: // $bb3
        var $13=$tree_addr; //@line 2829 "parsermodule.c"
        var $14=$13+20; //@line 2829 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2829 "parsermodule.c"
        var $16=$15; //@line 2829 "parsermodule.c"
        var $17=_validate_test($16); //@line 2829 "parsermodule.c"
        var $18=($17)==0; //@line 2829 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2829 "parsermodule.c"
      case 3: // $bb7
        $iftmp_195=1; //@line 2829 "parsermodule.c"
        $res=1; //@line 2829 "parsermodule.c"
        var $19=$nch; //@line 2831 "parsermodule.c"
        var $20=($19)!=2; //@line 2831 "parsermodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2831 "parsermodule.c"
      case 4: // $bb8
        var $21=$tree_addr; //@line 2832 "parsermodule.c"
        var $22=$21+20; //@line 2832 "parsermodule.c"
        var $23=HEAP[$22]; //@line 2832 "parsermodule.c"
        var $24=$23+24; //@line 2832 "parsermodule.c"
        var $25=_validate_comp_for($24); //@line 2832 "parsermodule.c"
        $res=$25; //@line 2832 "parsermodule.c"
        __label__ = 12; break; //@line 2832 "parsermodule.c"
      case 5: // $bb9
        $iftmp_195=0; //@line 2829 "parsermodule.c"
        $res=0; //@line 2829 "parsermodule.c"
        __label__ = 12; break;
      case 6: // $bb10
        var $26=$nch; //@line 2833 "parsermodule.c"
        var $27=($26)==3; //@line 2833 "parsermodule.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 2833 "parsermodule.c"
      case 7: // $bb11
        var $28=$tree_addr; //@line 2834 "parsermodule.c"
        var $29=$28+20; //@line 2834 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2834 "parsermodule.c"
        var $31=$30+24; //@line 2834 "parsermodule.c"
        var $32=_validate_terminal($31, 22, __str70); //@line 2834 "parsermodule.c"
        var $33=($32)==0; //@line 2834 "parsermodule.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2834 "parsermodule.c"
      case 8: // $bb12
        var $34=$tree_addr; //@line 2834 "parsermodule.c"
        var $35=$34+20; //@line 2834 "parsermodule.c"
        var $36=HEAP[$35]; //@line 2834 "parsermodule.c"
        var $37=$36+48; //@line 2834 "parsermodule.c"
        var $38=_validate_test($37); //@line 2834 "parsermodule.c"
        var $39=($38)==0; //@line 2834 "parsermodule.c"
        if ($39) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2834 "parsermodule.c"
      case 9: // $bb13
        $iftmp_196=1; //@line 2834 "parsermodule.c"
        __label__ = 11; break; //@line 2834 "parsermodule.c"
      case 10: // $bb14
        $iftmp_196=0; //@line 2834 "parsermodule.c"
        __label__ = 11; break; //@line 2834 "parsermodule.c"
      case 11: // $bb15
        var $40=$iftmp_196; //@line 2834 "parsermodule.c"
        $res=$40; //@line 2834 "parsermodule.c"
        __label__ = 12; break; //@line 2834 "parsermodule.c"
      case 12: // $bb16
        var $41=$res; //@line 2837 "parsermodule.c"
        $0=$41; //@line 2837 "parsermodule.c"
        var $42=$0; //@line 2837 "parsermodule.c"
        $retval=$42; //@line 2837 "parsermodule.c"
        var $retval17=$retval; //@line 2837 "parsermodule.c"
        ;
        return $retval17; //@line 2837 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_trailer($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_199;
        var $iftmp_198;
        var $iftmp_197;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2849 "parsermodule.c"
        var $2=$1+16; //@line 2849 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2849 "parsermodule.c"
        $nch=$3; //@line 2849 "parsermodule.c"
        var $4=$tree_addr; //@line 2850 "parsermodule.c"
        var $5=_validate_ntype($4, 322); //@line 2850 "parsermodule.c"
        var $6=($5)==0; //@line 2850 "parsermodule.c"
        if ($6) { __label__ = 18; break; } else { __label__ = 1; break; } //@line 2850 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2850 "parsermodule.c"
        var $8=($7)==2; //@line 2850 "parsermodule.c"
        var $9=$nch; //@line 2850 "parsermodule.c"
        var $10=($9)==3; //@line 2850 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 18; break; } //@line 2850 "parsermodule.c"
      case 2: // $bb5
        $iftmp_197=1; //@line 2850 "parsermodule.c"
        $res=1; //@line 2850 "parsermodule.c"
        var $11=$tree_addr; //@line 2853 "parsermodule.c"
        var $12=$11+20; //@line 2853 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2853 "parsermodule.c"
        var $14=$13; //@line 2853 "parsermodule.c"
        var $15=$14; //@line 2853 "parsermodule.c"
        var $16=HEAP[$15]; //@line 2853 "parsermodule.c"
        var $17=($16); //@line 2853 "parsermodule.c"
        if ($17 == 7) {
          __label__ = 3; break;
        }
        else if ($17 == 9) {
          __label__ = 6; break;
        }
        else if ($17 == 23) {
          __label__ = 12; break;
        }
        else {
        __label__ = 17; break;
        }
        
      case 3: // $bb6
        var $18=$tree_addr; //@line 2855 "parsermodule.c"
        var $19=$18+20; //@line 2855 "parsermodule.c"
        var $20=HEAP[$19]; //@line 2855 "parsermodule.c"
        var $21=$nch; //@line 2855 "parsermodule.c"
        var $22=($21) - 1; //@line 2855 "parsermodule.c"
        var $23=$20+24*$22; //@line 2855 "parsermodule.c"
        var $24=_validate_terminal($23, 8, __str56); //@line 2855 "parsermodule.c"
        $res=$24; //@line 2855 "parsermodule.c"
        var $25=$res; //@line 2856 "parsermodule.c"
        var $26=($25)!=0; //@line 2856 "parsermodule.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 19; break; } //@line 2856 "parsermodule.c"
      case 4: // $bb7
        var $27=$nch; //@line 2856 "parsermodule.c"
        var $28=($27)==3; //@line 2856 "parsermodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 19; break; } //@line 2856 "parsermodule.c"
      case 5: // $bb8
        var $29=$tree_addr; //@line 2857 "parsermodule.c"
        var $30=$29+20; //@line 2857 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2857 "parsermodule.c"
        var $32=$31+24; //@line 2857 "parsermodule.c"
        var $33=_validate_arglist($32); //@line 2857 "parsermodule.c"
        $res=$33; //@line 2857 "parsermodule.c"
        __label__ = 19; break; //@line 2857 "parsermodule.c"
      case 6: // $bb10
        var $34=$tree_addr; //@line 2860 "parsermodule.c"
        var $35=_validate_numnodes($34, 3, __str166); //@line 2860 "parsermodule.c"
        var $36=($35)==0; //@line 2860 "parsermodule.c"
        if ($36) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 2860 "parsermodule.c"
      case 7: // $bb11
        var $37=$tree_addr; //@line 2860 "parsermodule.c"
        var $38=$37+20; //@line 2860 "parsermodule.c"
        var $39=HEAP[$38]; //@line 2860 "parsermodule.c"
        var $40=$39+24; //@line 2860 "parsermodule.c"
        var $41=_validate_subscriptlist($40); //@line 2860 "parsermodule.c"
        var $42=($41)==0; //@line 2860 "parsermodule.c"
        if ($42) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2860 "parsermodule.c"
      case 8: // $bb12
        var $43=$tree_addr; //@line 2860 "parsermodule.c"
        var $44=$43+20; //@line 2860 "parsermodule.c"
        var $45=HEAP[$44]; //@line 2860 "parsermodule.c"
        var $46=$45+48; //@line 2860 "parsermodule.c"
        var $47=_validate_ntype($46, 10); //@line 2860 "parsermodule.c"
        var $48=($47)==0; //@line 2860 "parsermodule.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2860 "parsermodule.c"
      case 9: // $bb13
        $iftmp_198=1; //@line 2860 "parsermodule.c"
        __label__ = 11; break; //@line 2860 "parsermodule.c"
      case 10: // $bb14
        $iftmp_198=0; //@line 2860 "parsermodule.c"
        __label__ = 11; break; //@line 2860 "parsermodule.c"
      case 11: // $bb15
        var $49=$iftmp_198; //@line 2860 "parsermodule.c"
        $res=$49; //@line 2860 "parsermodule.c"
        __label__ = 19; break; //@line 2860 "parsermodule.c"
      case 12: // $bb16
        var $50=$tree_addr; //@line 2865 "parsermodule.c"
        var $51=_validate_numnodes($50, 2, __str166); //@line 2865 "parsermodule.c"
        var $52=($51)==0; //@line 2865 "parsermodule.c"
        if ($52) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 2865 "parsermodule.c"
      case 13: // $bb17
        var $53=$tree_addr; //@line 2865 "parsermodule.c"
        var $54=$53+20; //@line 2865 "parsermodule.c"
        var $55=HEAP[$54]; //@line 2865 "parsermodule.c"
        var $56=$55+24; //@line 2865 "parsermodule.c"
        var $57=_validate_ntype($56, 1); //@line 2865 "parsermodule.c"
        var $58=($57)==0; //@line 2865 "parsermodule.c"
        if ($58) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 2865 "parsermodule.c"
      case 14: // $bb18
        $iftmp_199=1; //@line 2865 "parsermodule.c"
        __label__ = 16; break; //@line 2865 "parsermodule.c"
      case 15: // $bb19
        $iftmp_199=0; //@line 2865 "parsermodule.c"
        __label__ = 16; break; //@line 2865 "parsermodule.c"
      case 16: // $bb20
        var $59=$iftmp_199; //@line 2865 "parsermodule.c"
        $res=$59; //@line 2865 "parsermodule.c"
        __label__ = 19; break; //@line 2865 "parsermodule.c"
      case 17: // $bb21
        $res=0; //@line 2869 "parsermodule.c"
        __label__ = 19; break; //@line 2869 "parsermodule.c"
      case 18: // $bb23
        $iftmp_197=0; //@line 2850 "parsermodule.c"
        $res=0; //@line 2850 "parsermodule.c"
        var $60=$tree_addr; //@line 2853 "parsermodule.c"
        var $61=_validate_numnodes($60, 2, __str166); //@line 2874 "parsermodule.c"
        __label__ = 19; break; //@line 2874 "parsermodule.c"
      case 19: // $bb24
        var $62=$res; //@line 2876 "parsermodule.c"
        $0=$62; //@line 2876 "parsermodule.c"
        var $63=$0; //@line 2876 "parsermodule.c"
        $retval=$63; //@line 2876 "parsermodule.c"
        var $retval25=$retval; //@line 2876 "parsermodule.c"
        ;
        return $retval25; //@line 2876 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_subscriptlist($tree) {
    ;
    var __label__;
  
    var $tree_addr;
    var $retval;
    var $0;
    $tree_addr=$tree;
    var $1=$tree_addr; //@line 2887 "parsermodule.c"
    var $2=_validate_repeating_list($1, 323, (FUNCTION_TABLE_OFFSET + 20), __str167); //@line 2887 "parsermodule.c"
    $0=$2; //@line 2887 "parsermodule.c"
    var $3=$0; //@line 2887 "parsermodule.c"
    $retval=$3; //@line 2887 "parsermodule.c"
    var $retval1=$retval; //@line 2887 "parsermodule.c"
    ;
    return $retval1; //@line 2887 "parsermodule.c"
  }
  

  function _validate_subscript($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $iftmp_201;
        var $0;
        var $iftmp_200;
        var $offset;
        var $nch;
        var $res;
        var $rem;
        $tree_addr=$tree;
        $offset=0; //@line 2899 "parsermodule.c"
        var $1=$tree_addr; //@line 2900 "parsermodule.c"
        var $2=$1+16; //@line 2900 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2900 "parsermodule.c"
        $nch=$3; //@line 2900 "parsermodule.c"
        var $4=$tree_addr; //@line 2901 "parsermodule.c"
        var $5=_validate_ntype($4, 324); //@line 2901 "parsermodule.c"
        var $6=($5)==0; //@line 2901 "parsermodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 2901 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 2901 "parsermodule.c"
        var $8=($7) <= 0; //@line 2901 "parsermodule.c"
        var $9=$nch; //@line 2901 "parsermodule.c"
        var $10=($9) > 4; //@line 2901 "parsermodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 2901 "parsermodule.c"
      case 2: // $bb5
        $iftmp_200=0; //@line 2901 "parsermodule.c"
        $res=0; //@line 2901 "parsermodule.c"
        var $11=_PyErr_Occurred(); //@line 2904 "parsermodule.c"
        var $12=($11)==0; //@line 2904 "parsermodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2904 "parsermodule.c"
      case 3: // $bb6
        _err_string(__str168); //@line 2905 "parsermodule.c"
        __label__ = 4; break; //@line 2905 "parsermodule.c"
      case 4: // $bb7
        $0=0; //@line 2906 "parsermodule.c"
        __label__ = 33; break; //@line 2906 "parsermodule.c"
      case 5: // $bb8
        $iftmp_200=1; //@line 2901 "parsermodule.c"
        $res=1; //@line 2901 "parsermodule.c"
        var $13=$tree_addr; //@line 2908 "parsermodule.c"
        var $14=$13+20; //@line 2908 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2908 "parsermodule.c"
        var $16=$15; //@line 2908 "parsermodule.c"
        var $17=$16; //@line 2908 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2908 "parsermodule.c"
        var $19=($18)==23; //@line 2908 "parsermodule.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2908 "parsermodule.c"
      case 6: // $bb9
        var $20=$tree_addr; //@line 2910 "parsermodule.c"
        var $21=_validate_numnodes($20, 3, __str169); //@line 2910 "parsermodule.c"
        var $22=($21)==0; //@line 2910 "parsermodule.c"
        if ($22) { __label__ = 11; break; } else { __label__ = 7; break; } //@line 2910 "parsermodule.c"
      case 7: // $bb10
        var $23=$tree_addr; //@line 2910 "parsermodule.c"
        var $24=$23+20; //@line 2910 "parsermodule.c"
        var $25=HEAP[$24]; //@line 2910 "parsermodule.c"
        var $26=$25; //@line 2910 "parsermodule.c"
        var $27=_validate_terminal($26, 23, __str114); //@line 2910 "parsermodule.c"
        var $28=($27)==0; //@line 2910 "parsermodule.c"
        if ($28) { __label__ = 11; break; } else { __label__ = 8; break; } //@line 2910 "parsermodule.c"
      case 8: // $bb11
        var $29=$tree_addr; //@line 2910 "parsermodule.c"
        var $30=$29+20; //@line 2910 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2910 "parsermodule.c"
        var $32=$31+24; //@line 2910 "parsermodule.c"
        var $33=_validate_terminal($32, 23, __str114); //@line 2910 "parsermodule.c"
        var $34=($33)==0; //@line 2910 "parsermodule.c"
        if ($34) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 2910 "parsermodule.c"
      case 9: // $bb12
        var $35=$tree_addr; //@line 2910 "parsermodule.c"
        var $36=$35+20; //@line 2910 "parsermodule.c"
        var $37=HEAP[$36]; //@line 2910 "parsermodule.c"
        var $38=$37+48; //@line 2910 "parsermodule.c"
        var $39=_validate_terminal($38, 23, __str114); //@line 2910 "parsermodule.c"
        var $40=($39)==0; //@line 2910 "parsermodule.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2910 "parsermodule.c"
      case 10: // $bb13
        $iftmp_201=1; //@line 2910 "parsermodule.c"
        __label__ = 12; break; //@line 2910 "parsermodule.c"
      case 11: // $bb14
        $iftmp_201=0; //@line 2910 "parsermodule.c"
        __label__ = 12; break; //@line 2910 "parsermodule.c"
      case 12: // $bb15
        var $41=$iftmp_201; //@line 2910 "parsermodule.c"
        $0=$41; //@line 2910 "parsermodule.c"
        __label__ = 33; break; //@line 2910 "parsermodule.c"
      case 13: // $bb16
        var $42=$nch; //@line 2914 "parsermodule.c"
        var $43=($42)==1; //@line 2914 "parsermodule.c"
        var $44=$tree_addr; //@line 2915 "parsermodule.c"
        var $45=$44+20; //@line 2915 "parsermodule.c"
        var $46=HEAP[$45]; //@line 2915 "parsermodule.c"
        var $47=$46; //@line 2915 "parsermodule.c"
        var $48=$47; //@line 2915 "parsermodule.c"
        var $49=HEAP[$48]; //@line 2915 "parsermodule.c"
        if ($43) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 2914 "parsermodule.c"
      case 14: // $bb17
        var $50=($49)==304; //@line 2915 "parsermodule.c"
        var $51=$tree_addr; //@line 2916 "parsermodule.c"
        var $52=$51+20; //@line 2916 "parsermodule.c"
        var $53=HEAP[$52]; //@line 2916 "parsermodule.c"
        var $54=$53; //@line 2916 "parsermodule.c"
        if ($50) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2915 "parsermodule.c"
      case 15: // $bb18
        var $55=_validate_test($54); //@line 2916 "parsermodule.c"
        $res=$55; //@line 2916 "parsermodule.c"
        __label__ = 17; break; //@line 2916 "parsermodule.c"
      case 16: // $bb19
        var $56=_validate_terminal($54, 11, __str54); //@line 2918 "parsermodule.c"
        $res=$56; //@line 2918 "parsermodule.c"
        __label__ = 17; break; //@line 2918 "parsermodule.c"
      case 17: // $bb20
        var $57=$res; //@line 2919 "parsermodule.c"
        $0=$57; //@line 2919 "parsermodule.c"
        __label__ = 33; break; //@line 2919 "parsermodule.c"
      case 18: // $bb21
        var $58=($49)!=11; //@line 2925 "parsermodule.c"
        if ($58) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 2925 "parsermodule.c"
      case 19: // $bb22
        var $59=$nch; //@line 2925 "parsermodule.c"
        var $60=($59)==4; //@line 2925 "parsermodule.c"
        if ($60) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2925 "parsermodule.c"
      case 20: // $bb23
        var $61=$tree_addr; //@line 2926 "parsermodule.c"
        var $62=$61+20; //@line 2926 "parsermodule.c"
        var $63=HEAP[$62]; //@line 2926 "parsermodule.c"
        var $64=$63; //@line 2926 "parsermodule.c"
        var $65=_validate_test($64); //@line 2926 "parsermodule.c"
        $res=$65; //@line 2926 "parsermodule.c"
        $offset=1; //@line 2927 "parsermodule.c"
        __lastLabel__ = 20; __label__ = 22; break; //@line 2927 "parsermodule.c"
      case 21: // $bb24thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 21; __label__ = 22; break;
      case 22: // $bb24
        var $66=__lastLabel__ == 21 ? $_pr : ($65);
        var $67=($66)!=0; //@line 2929 "parsermodule.c"
        if ($67) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 2929 "parsermodule.c"
      case 23: // $bb25
        var $68=$tree_addr; //@line 2930 "parsermodule.c"
        var $69=$68+20; //@line 2930 "parsermodule.c"
        var $70=HEAP[$69]; //@line 2930 "parsermodule.c"
        var $71=$offset; //@line 2930 "parsermodule.c"
        var $72=$70+24*$71; //@line 2930 "parsermodule.c"
        var $73=_validate_terminal($72, 11, __str54); //@line 2930 "parsermodule.c"
        $res=$73; //@line 2930 "parsermodule.c"
        __lastLabel__ = 23; __label__ = 25; break; //@line 2930 "parsermodule.c"
      case 24: // $bb26thread_pre_split
        var $_pr2=$res;
        __lastLabel__ = 24; __label__ = 25; break;
      case 25: // $bb26
        var $74=__lastLabel__ == 24 ? $_pr2 : ($73);
        var $75=($74)!=0; //@line 2931 "parsermodule.c"
        if ($75) { __label__ = 26; break; } else { __label__ = 32; break; } //@line 2931 "parsermodule.c"
      case 26: // $bb27
        var $76=$offset; //@line 2932 "parsermodule.c"
        var $77=($76) + 1; //@line 2932 "parsermodule.c"
        $offset=$77; //@line 2932 "parsermodule.c"
        var $78=$nch; //@line 2932 "parsermodule.c"
        var $79=$offset; //@line 2932 "parsermodule.c"
        var $80=($78) - ($79); //@line 2932 "parsermodule.c"
        $rem=$80; //@line 2932 "parsermodule.c"
        var $81=$rem; //@line 2933 "parsermodule.c"
        var $82=($81)!=0; //@line 2933 "parsermodule.c"
        if ($82) { __label__ = 27; break; } else { __label__ = 32; break; } //@line 2933 "parsermodule.c"
      case 27: // $bb28
        var $83=$tree_addr; //@line 2934 "parsermodule.c"
        var $84=$83+20; //@line 2934 "parsermodule.c"
        var $85=HEAP[$84]; //@line 2934 "parsermodule.c"
        var $86=$offset; //@line 2934 "parsermodule.c"
        var $87=$85+24*$86; //@line 2934 "parsermodule.c"
        var $88=$87; //@line 2934 "parsermodule.c"
        var $89=HEAP[$88]; //@line 2934 "parsermodule.c"
        var $90=($89)==304; //@line 2934 "parsermodule.c"
        if ($90) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 2934 "parsermodule.c"
      case 28: // $bb29
        var $91=$tree_addr; //@line 2935 "parsermodule.c"
        var $92=$91+20; //@line 2935 "parsermodule.c"
        var $93=HEAP[$92]; //@line 2935 "parsermodule.c"
        var $94=$offset; //@line 2935 "parsermodule.c"
        var $95=$93+24*$94; //@line 2935 "parsermodule.c"
        var $96=_validate_test($95); //@line 2935 "parsermodule.c"
        $res=$96; //@line 2935 "parsermodule.c"
        var $97=$offset; //@line 2936 "parsermodule.c"
        var $98=($97) + 1; //@line 2936 "parsermodule.c"
        $offset=$98; //@line 2936 "parsermodule.c"
        var $99=$rem; //@line 2937 "parsermodule.c"
        var $100=($99) - 1; //@line 2937 "parsermodule.c"
        $rem=$100; //@line 2937 "parsermodule.c"
        __label__ = 29; break; //@line 2937 "parsermodule.c"
      case 29: // $bb30
        var $101=$res; //@line 2939 "parsermodule.c"
        var $102=($101)!=0; //@line 2939 "parsermodule.c"
        if ($102) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 2939 "parsermodule.c"
      case 30: // $bb31
        var $103=$rem; //@line 2939 "parsermodule.c"
        var $104=($103)!=0; //@line 2939 "parsermodule.c"
        if ($104) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 2939 "parsermodule.c"
      case 31: // $bb32
        var $105=$tree_addr; //@line 2940 "parsermodule.c"
        var $106=$105+20; //@line 2940 "parsermodule.c"
        var $107=HEAP[$106]; //@line 2940 "parsermodule.c"
        var $108=$offset; //@line 2940 "parsermodule.c"
        var $109=$107+24*$108; //@line 2940 "parsermodule.c"
        var $110=_validate_sliceop($109); //@line 2940 "parsermodule.c"
        $res=$110; //@line 2940 "parsermodule.c"
        __label__ = 32; break; //@line 2940 "parsermodule.c"
      case 32: // $bb33
        var $111=$res; //@line 2943 "parsermodule.c"
        $0=$111; //@line 2943 "parsermodule.c"
        __label__ = 33; break; //@line 2943 "parsermodule.c"
      case 33: // $bb34
        var $112=$0; //@line 2906 "parsermodule.c"
        $retval=$112; //@line 2906 "parsermodule.c"
        var $retval35=$retval; //@line 2906 "parsermodule.c"
        ;
        return $retval35; //@line 2906 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_sliceop($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_202;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2950 "parsermodule.c"
        var $2=$1+16; //@line 2950 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2950 "parsermodule.c"
        $nch=$3; //@line 2950 "parsermodule.c"
        var $4=$nch; //@line 2952 "parsermodule.c"
        var $5=($4)==1; //@line 2952 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 2952 "parsermodule.c"
      case 1: // $bb
        var $6=$tree_addr; //@line 2952 "parsermodule.c"
        var $7=_validate_numnodes($6, 2, __str170); //@line 2952 "parsermodule.c"
        var $8=($7)!=0; //@line 2952 "parsermodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 2952 "parsermodule.c"
      case 2: // $bb1
        var $9=$tree_addr; //@line 2952 "parsermodule.c"
        var $10=_validate_ntype($9, 325); //@line 2952 "parsermodule.c"
        var $11=($10)==0; //@line 2952 "parsermodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2952 "parsermodule.c"
      case 3: // $bb7_thread
        $iftmp_202=1; //@line 2952 "parsermodule.c"
        $res=1; //@line 2952 "parsermodule.c"
        __label__ = 8; break;
      case 4: // $bb5
        $iftmp_202=0; //@line 2952 "parsermodule.c"
        $res=0; //@line 2952 "parsermodule.c"
        var $12=_PyErr_Occurred(); //@line 2953 "parsermodule.c"
        var $13=($12)==0; //@line 2953 "parsermodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2953 "parsermodule.c"
      case 5: // $bb6
        var $14=$tree_addr; //@line 2954 "parsermodule.c"
        var $15=_validate_numnodes($14, 1, __str170); //@line 2954 "parsermodule.c"
        $res=$15; //@line 2954 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 7; break; //@line 2954 "parsermodule.c"
      case 6: // $bb7thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 6; __label__ = 7; break;
      case 7: // $bb7
        var $16=__lastLabel__ == 6 ? $_pr : ($15);
        var $17=($16)!=0; //@line 2956 "parsermodule.c"
        if ($17) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2956 "parsermodule.c"
      case 8: // $bb8
        var $18=$tree_addr; //@line 2957 "parsermodule.c"
        var $19=$18+20; //@line 2957 "parsermodule.c"
        var $20=HEAP[$19]; //@line 2957 "parsermodule.c"
        var $21=$20; //@line 2957 "parsermodule.c"
        var $22=_validate_terminal($21, 11, __str54); //@line 2957 "parsermodule.c"
        $res=$22; //@line 2957 "parsermodule.c"
        __lastLabel__ = 8; __label__ = 10; break; //@line 2957 "parsermodule.c"
      case 9: // $bb9thread_pre_split
        var $_pr1=$res;
        __lastLabel__ = 9; __label__ = 10; break;
      case 10: // $bb9
        var $23=__lastLabel__ == 9 ? $_pr1 : ($22);
        var $24=($23)!=0; //@line 2958 "parsermodule.c"
        if ($24) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2958 "parsermodule.c"
      case 11: // $bb10
        var $25=$nch; //@line 2958 "parsermodule.c"
        var $26=($25)==2; //@line 2958 "parsermodule.c"
        if ($26) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2958 "parsermodule.c"
      case 12: // $bb11
        var $27=$tree_addr; //@line 2959 "parsermodule.c"
        var $28=$27+20; //@line 2959 "parsermodule.c"
        var $29=HEAP[$28]; //@line 2959 "parsermodule.c"
        var $30=$29+24; //@line 2959 "parsermodule.c"
        var $31=_validate_test($30); //@line 2959 "parsermodule.c"
        $res=$31; //@line 2959 "parsermodule.c"
        __label__ = 13; break; //@line 2959 "parsermodule.c"
      case 13: // $bb12
        var $32=$res; //@line 2961 "parsermodule.c"
        $0=$32; //@line 2961 "parsermodule.c"
        var $33=$0; //@line 2961 "parsermodule.c"
        $retval=$33; //@line 2961 "parsermodule.c"
        var $retval13=$retval; //@line 2961 "parsermodule.c"
        ;
        return $retval13; //@line 2961 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_exprlist($tree) {
    ;
    var __label__;
  
    var $tree_addr;
    var $retval;
    var $0;
    $tree_addr=$tree;
    var $1=$tree_addr; //@line 2968 "parsermodule.c"
    var $2=_validate_repeating_list($1, 326, (FUNCTION_TABLE_OFFSET + 22), __str171); //@line 2968 "parsermodule.c"
    $0=$2; //@line 2968 "parsermodule.c"
    var $3=$0; //@line 2968 "parsermodule.c"
    $retval=$3; //@line 2968 "parsermodule.c"
    var $retval1=$retval; //@line 2968 "parsermodule.c"
    ;
    return $retval1; //@line 2968 "parsermodule.c"
  }
  

  function _validate_dictorsetmaker($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_207;
        var $iftmp_206;
        var $iftmp_205;
        var $iftmp_204;
        var $iftmp_203;
        var $nch;
        var $ok;
        var $i;
        var $check_trailing_comma;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 2982 "parsermodule.c"
        var $2=$1+16; //@line 2982 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2982 "parsermodule.c"
        $nch=$3; //@line 2982 "parsermodule.c"
        var $4=$tree_addr; //@line 2983 "parsermodule.c"
        var $5=_validate_ntype($4, 328); //@line 2983 "parsermodule.c"
        $ok=$5; //@line 2983 "parsermodule.c"
        $i=0; //@line 2984 "parsermodule.c"
        $check_trailing_comma=0; //@line 2985 "parsermodule.c"
        var $6=$nch; //@line 2987 "parsermodule.c"
        var $7=($6) <= 0; //@line 2987 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2987 "parsermodule.c"
      case 1: // $bb
        ___assert_fail(__str172, __str173, 2987, ___PRETTY_FUNCTION___13794); //@line 2987 "parsermodule.c"
        throw "Reached an unreachable!" //@line 2987 "parsermodule.c"
      case 2: // $bb1
        var $8=$ok; //@line 2989 "parsermodule.c"
        var $9=($8)==0; //@line 2989 "parsermodule.c"
        if ($9) { __label__ = 50; break; } else { __label__ = 3; break; } //@line 2989 "parsermodule.c"
      case 3: // $bb2
        var $10=$nch; //@line 2989 "parsermodule.c"
        var $11=($10)==1; //@line 2989 "parsermodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2989 "parsermodule.c"
      case 4: // $bb3
        var $12=$tree_addr; //@line 2989 "parsermodule.c"
        var $13=$12+20; //@line 2989 "parsermodule.c"
        var $14=HEAP[$13]; //@line 2989 "parsermodule.c"
        var $15=$14+24; //@line 2989 "parsermodule.c"
        var $16=$15; //@line 2989 "parsermodule.c"
        var $17=HEAP[$16]; //@line 2989 "parsermodule.c"
        var $18=($17)==12; //@line 2989 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 14; break; } //@line 2989 "parsermodule.c"
      case 5: // $bb4
        var $19=$tree_addr; //@line 2993 "parsermodule.c"
        var $20=$19+20; //@line 2993 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2993 "parsermodule.c"
        var $22=$i; //@line 2993 "parsermodule.c"
        var $23=$21+24*$22; //@line 2993 "parsermodule.c"
        var $24=$i; //@line 2993 "parsermodule.c"
        var $25=($24) + 1; //@line 2993 "parsermodule.c"
        $i=$25; //@line 2993 "parsermodule.c"
        var $26=_validate_test($23); //@line 2993 "parsermodule.c"
        $ok=$26; //@line 2993 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 11; break; //@line 2993 "parsermodule.c"
      case 6: // $bb5
        var $27=$tree_addr; //@line 2995 "parsermodule.c"
        var $28=$27+20; //@line 2995 "parsermodule.c"
        var $29=HEAP[$28]; //@line 2995 "parsermodule.c"
        var $30=$i; //@line 2995 "parsermodule.c"
        var $31=$29+24*$30; //@line 2995 "parsermodule.c"
        var $32=_validate_terminal($31, 12, __str52); //@line 2995 "parsermodule.c"
        var $33=($32)==0; //@line 2995 "parsermodule.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2995 "parsermodule.c"
      case 7: // $bb6
        var $34=$tree_addr; //@line 2995 "parsermodule.c"
        var $35=$34+20; //@line 2995 "parsermodule.c"
        var $36=HEAP[$35]; //@line 2995 "parsermodule.c"
        var $37=$i; //@line 2995 "parsermodule.c"
        var $38=($37) + 1; //@line 2995 "parsermodule.c"
        var $39=$36+24*$38; //@line 2995 "parsermodule.c"
        var $40=_validate_test($39); //@line 2995 "parsermodule.c"
        var $41=($40)==0; //@line 2995 "parsermodule.c"
        if ($41) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2995 "parsermodule.c"
      case 8: // $bb7
        $iftmp_203=1; //@line 2995 "parsermodule.c"
        __label__ = 10; break; //@line 2995 "parsermodule.c"
      case 9: // $bb8
        $iftmp_203=0; //@line 2995 "parsermodule.c"
        __label__ = 10; break; //@line 2995 "parsermodule.c"
      case 10: // $bb9
        var $42=$iftmp_203; //@line 2995 "parsermodule.c"
        $ok=$42; //@line 2995 "parsermodule.c"
        var $43=$i; //@line 2997 "parsermodule.c"
        var $44=($43) + 2; //@line 2997 "parsermodule.c"
        $i=$44; //@line 2997 "parsermodule.c"
        __lastLabel__ = 10; __label__ = 11; break; //@line 2997 "parsermodule.c"
      case 11: // $bb10
        var $45=__lastLabel__ == 10 ? $42 : ($26);
        var $46=($45)==0; //@line 2994 "parsermodule.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2994 "parsermodule.c"
      case 12: // $bb11
        var $47=$nch; //@line 2994 "parsermodule.c"
        var $48=$i; //@line 2994 "parsermodule.c"
        var $49=($47) - ($48); //@line 2994 "parsermodule.c"
        var $50=($49) > 1; //@line 2994 "parsermodule.c"
        if ($50) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2994 "parsermodule.c"
      case 13: // $bb12
        $check_trailing_comma=1; //@line 2999 "parsermodule.c"
        __label__ = 50; break; //@line 2999 "parsermodule.c"
      case 14: // $bb13
        var $_pr=$ok;
        var $51=($_pr)==0; //@line 3001 "parsermodule.c"
        if ($51) { __label__ = 57; break; } else { __label__ = 15; break; } //@line 3001 "parsermodule.c"
      case 15: // $bb14
        var $52=$tree_addr; //@line 3001 "parsermodule.c"
        var $53=$52+20; //@line 3001 "parsermodule.c"
        var $54=HEAP[$53]; //@line 3001 "parsermodule.c"
        var $55=$54+24; //@line 3001 "parsermodule.c"
        var $56=$55; //@line 3001 "parsermodule.c"
        var $57=HEAP[$56]; //@line 3001 "parsermodule.c"
        var $58=($57)!=336; //@line 3001 "parsermodule.c"
        if ($58) { __label__ = 21; break; } else { __label__ = 16; break; } //@line 3001 "parsermodule.c"
      case 16: // $bb15
        var $59=$tree_addr; //@line 3005 "parsermodule.c"
        var $60=$59+20; //@line 3005 "parsermodule.c"
        var $61=HEAP[$60]; //@line 3005 "parsermodule.c"
        var $62=$61; //@line 3005 "parsermodule.c"
        var $63=_validate_test($62); //@line 3005 "parsermodule.c"
        var $64=($63)==0; //@line 3005 "parsermodule.c"
        if ($64) { __label__ = 19; break; } else { __label__ = 17; break; } //@line 3005 "parsermodule.c"
      case 17: // $bb16
        var $65=$tree_addr; //@line 3005 "parsermodule.c"
        var $66=$65+20; //@line 3005 "parsermodule.c"
        var $67=HEAP[$66]; //@line 3005 "parsermodule.c"
        var $68=$67+24; //@line 3005 "parsermodule.c"
        var $69=_validate_comp_for($68); //@line 3005 "parsermodule.c"
        var $70=($69)==0; //@line 3005 "parsermodule.c"
        if ($70) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 3005 "parsermodule.c"
      case 18: // $bb17
        $iftmp_204=1; //@line 3005 "parsermodule.c"
        __label__ = 20; break; //@line 3005 "parsermodule.c"
      case 19: // $bb18
        $iftmp_204=0; //@line 3005 "parsermodule.c"
        __label__ = 20; break; //@line 3005 "parsermodule.c"
      case 20: // $bb19
        var $71=$iftmp_204; //@line 3005 "parsermodule.c"
        $ok=$71; //@line 3005 "parsermodule.c"
        __lastLabel__ = 20; __label__ = 51; break; //@line 3005 "parsermodule.c"
      case 21: // $bb20
        var $_pr1_pr=$ok;
        var $72=($_pr1_pr)==0; //@line 3008 "parsermodule.c"
        if ($72) { __label__ = 50; break; } else { __label__ = 22; break; } //@line 3008 "parsermodule.c"
      case 22: // $bb21
        var $73=$tree_addr; //@line 3008 "parsermodule.c"
        var $74=$73+16; //@line 3008 "parsermodule.c"
        var $75=HEAP[$74]; //@line 3008 "parsermodule.c"
        var $76=($75) <= 3; //@line 3008 "parsermodule.c"
        if ($76) { __label__ = 31; break; } else { __label__ = 23; break; } //@line 3008 "parsermodule.c"
      case 23: // $bb22
        var $77=$tree_addr; //@line 3008 "parsermodule.c"
        var $78=$77+20; //@line 3008 "parsermodule.c"
        var $79=HEAP[$78]; //@line 3008 "parsermodule.c"
        var $80=$79+72; //@line 3008 "parsermodule.c"
        var $81=$80; //@line 3008 "parsermodule.c"
        var $82=HEAP[$81]; //@line 3008 "parsermodule.c"
        var $83=($82)!=336; //@line 3008 "parsermodule.c"
        if ($83) { __label__ = 31; break; } else { __label__ = 24; break; } //@line 3008 "parsermodule.c"
      case 24: // $bb23
        var $84=$tree_addr; //@line 3012 "parsermodule.c"
        var $85=$84+20; //@line 3012 "parsermodule.c"
        var $86=HEAP[$85]; //@line 3012 "parsermodule.c"
        var $87=$86; //@line 3012 "parsermodule.c"
        var $88=_validate_test($87); //@line 3012 "parsermodule.c"
        var $89=($88)==0; //@line 3012 "parsermodule.c"
        if ($89) { __label__ = 29; break; } else { __label__ = 25; break; } //@line 3012 "parsermodule.c"
      case 25: // $bb24
        var $90=$tree_addr; //@line 3012 "parsermodule.c"
        var $91=$90+20; //@line 3012 "parsermodule.c"
        var $92=HEAP[$91]; //@line 3012 "parsermodule.c"
        var $93=$92+24; //@line 3012 "parsermodule.c"
        var $94=_validate_terminal($93, 11, __str54); //@line 3012 "parsermodule.c"
        var $95=($94)==0; //@line 3012 "parsermodule.c"
        if ($95) { __label__ = 29; break; } else { __label__ = 26; break; } //@line 3012 "parsermodule.c"
      case 26: // $bb25
        var $96=$tree_addr; //@line 3012 "parsermodule.c"
        var $97=$96+20; //@line 3012 "parsermodule.c"
        var $98=HEAP[$97]; //@line 3012 "parsermodule.c"
        var $99=$98+48; //@line 3012 "parsermodule.c"
        var $100=_validate_test($99); //@line 3012 "parsermodule.c"
        var $101=($100)==0; //@line 3012 "parsermodule.c"
        if ($101) { __label__ = 29; break; } else { __label__ = 27; break; } //@line 3012 "parsermodule.c"
      case 27: // $bb26
        var $102=$tree_addr; //@line 3012 "parsermodule.c"
        var $103=$102+20; //@line 3012 "parsermodule.c"
        var $104=HEAP[$103]; //@line 3012 "parsermodule.c"
        var $105=$104+72; //@line 3012 "parsermodule.c"
        var $106=_validate_comp_for($105); //@line 3012 "parsermodule.c"
        var $107=($106)==0; //@line 3012 "parsermodule.c"
        if ($107) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 3012 "parsermodule.c"
      case 28: // $bb27
        $iftmp_205=1; //@line 3012 "parsermodule.c"
        __label__ = 30; break; //@line 3012 "parsermodule.c"
      case 29: // $bb28
        $iftmp_205=0; //@line 3012 "parsermodule.c"
        __label__ = 30; break; //@line 3012 "parsermodule.c"
      case 30: // $bb29
        var $108=$iftmp_205; //@line 3012 "parsermodule.c"
        $ok=$108; //@line 3012 "parsermodule.c"
        __lastLabel__ = 30; __label__ = 51; break; //@line 3012 "parsermodule.c"
      case 31: // $bb30
        var $_pr2_pr=$ok;
        var $109=($_pr2_pr)!=0; //@line 3017 "parsermodule.c"
        if ($109) { __label__ = 32; break; } else { __label__ = 57; break; } //@line 3017 "parsermodule.c"
      case 32: // $bb31
        var $110=$nch; //@line 3021 "parsermodule.c"
        var $111=($110) > 2; //@line 3021 "parsermodule.c"
        if ($111) { __label__ = 33; break; } else { __label__ = 39; break; } //@line 3021 "parsermodule.c"
      case 33: // $bb32
        var $112=$tree_addr; //@line 3022 "parsermodule.c"
        var $113=$112+20; //@line 3022 "parsermodule.c"
        var $114=HEAP[$113]; //@line 3022 "parsermodule.c"
        var $115=$i; //@line 3022 "parsermodule.c"
        var $116=$114+24*$115; //@line 3022 "parsermodule.c"
        var $117=_validate_test($116); //@line 3022 "parsermodule.c"
        var $118=($117)==0; //@line 3022 "parsermodule.c"
        if ($118) { __label__ = 37; break; } else { __label__ = 34; break; } //@line 3022 "parsermodule.c"
      case 34: // $bb33
        var $119=$tree_addr; //@line 3022 "parsermodule.c"
        var $120=$119+20; //@line 3022 "parsermodule.c"
        var $121=HEAP[$120]; //@line 3022 "parsermodule.c"
        var $122=$i; //@line 3022 "parsermodule.c"
        var $123=($122) + 1; //@line 3022 "parsermodule.c"
        var $124=$121+24*$123; //@line 3022 "parsermodule.c"
        var $125=_validate_terminal($124, 11, __str54); //@line 3022 "parsermodule.c"
        var $126=($125)==0; //@line 3022 "parsermodule.c"
        if ($126) { __label__ = 37; break; } else { __label__ = 35; break; } //@line 3022 "parsermodule.c"
      case 35: // $bb34
        var $127=$tree_addr; //@line 3022 "parsermodule.c"
        var $128=$127+20; //@line 3022 "parsermodule.c"
        var $129=HEAP[$128]; //@line 3022 "parsermodule.c"
        var $130=$i; //@line 3022 "parsermodule.c"
        var $131=($130) + 2; //@line 3022 "parsermodule.c"
        var $132=$129+24*$131; //@line 3022 "parsermodule.c"
        var $133=_validate_test($132); //@line 3022 "parsermodule.c"
        var $134=($133)==0; //@line 3022 "parsermodule.c"
        if ($134) { __label__ = 37; break; } else { __label__ = 36; break; } //@line 3022 "parsermodule.c"
      case 36: // $bb35
        $iftmp_206=1; //@line 3022 "parsermodule.c"
        __label__ = 38; break; //@line 3022 "parsermodule.c"
      case 37: // $bb36
        $iftmp_206=0; //@line 3022 "parsermodule.c"
        __label__ = 38; break; //@line 3022 "parsermodule.c"
      case 38: // $bb37
        var $135=$iftmp_206; //@line 3022 "parsermodule.c"
        $ok=$135; //@line 3022 "parsermodule.c"
        var $136=$i; //@line 3025 "parsermodule.c"
        var $137=($136) + 3; //@line 3025 "parsermodule.c"
        $i=$137; //@line 3025 "parsermodule.c"
        __lastLabel__ = 38; __label__ = 47; break; //@line 3025 "parsermodule.c"
      case 39: // $bb38
        $ok=0; //@line 3028 "parsermodule.c"
        _err_string(__str174); //@line 3029 "parsermodule.c"
        var $_pr3=$ok;
        __lastLabel__ = 39; __label__ = 47; break; //@line 3029 "parsermodule.c"
      case 40: // $bb40
        var $138=$tree_addr; //@line 3033 "parsermodule.c"
        var $139=$138+20; //@line 3033 "parsermodule.c"
        var $140=HEAP[$139]; //@line 3033 "parsermodule.c"
        var $141=$i; //@line 3033 "parsermodule.c"
        var $142=$140+24*$141; //@line 3033 "parsermodule.c"
        var $143=_validate_terminal($142, 12, __str52); //@line 3033 "parsermodule.c"
        var $144=($143)==0; //@line 3033 "parsermodule.c"
        if ($144) { __label__ = 45; break; } else { __label__ = 41; break; } //@line 3033 "parsermodule.c"
      case 41: // $bb41
        var $145=$tree_addr; //@line 3033 "parsermodule.c"
        var $146=$145+20; //@line 3033 "parsermodule.c"
        var $147=HEAP[$146]; //@line 3033 "parsermodule.c"
        var $148=$i; //@line 3033 "parsermodule.c"
        var $149=($148) + 1; //@line 3033 "parsermodule.c"
        var $150=$147+24*$149; //@line 3033 "parsermodule.c"
        var $151=_validate_test($150); //@line 3033 "parsermodule.c"
        var $152=($151)==0; //@line 3033 "parsermodule.c"
        if ($152) { __label__ = 45; break; } else { __label__ = 42; break; } //@line 3033 "parsermodule.c"
      case 42: // $bb42
        var $153=$tree_addr; //@line 3033 "parsermodule.c"
        var $154=$153+20; //@line 3033 "parsermodule.c"
        var $155=HEAP[$154]; //@line 3033 "parsermodule.c"
        var $156=$i; //@line 3033 "parsermodule.c"
        var $157=($156) + 2; //@line 3033 "parsermodule.c"
        var $158=$155+24*$157; //@line 3033 "parsermodule.c"
        var $159=_validate_terminal($158, 11, __str54); //@line 3033 "parsermodule.c"
        var $160=($159)==0; //@line 3033 "parsermodule.c"
        if ($160) { __label__ = 45; break; } else { __label__ = 43; break; } //@line 3033 "parsermodule.c"
      case 43: // $bb43
        var $161=$tree_addr; //@line 3033 "parsermodule.c"
        var $162=$161+20; //@line 3033 "parsermodule.c"
        var $163=HEAP[$162]; //@line 3033 "parsermodule.c"
        var $164=$i; //@line 3033 "parsermodule.c"
        var $165=($164) + 3; //@line 3033 "parsermodule.c"
        var $166=$163+24*$165; //@line 3033 "parsermodule.c"
        var $167=_validate_test($166); //@line 3033 "parsermodule.c"
        var $168=($167)==0; //@line 3033 "parsermodule.c"
        if ($168) { __label__ = 45; break; } else { __label__ = 44; break; } //@line 3033 "parsermodule.c"
      case 44: // $bb44
        $iftmp_207=1; //@line 3033 "parsermodule.c"
        __label__ = 46; break; //@line 3033 "parsermodule.c"
      case 45: // $bb45
        $iftmp_207=0; //@line 3033 "parsermodule.c"
        __label__ = 46; break; //@line 3033 "parsermodule.c"
      case 46: // $bb46
        var $169=$iftmp_207; //@line 3033 "parsermodule.c"
        $ok=$169; //@line 3033 "parsermodule.c"
        var $170=$i; //@line 3037 "parsermodule.c"
        var $171=($170) + 4; //@line 3037 "parsermodule.c"
        $i=$171; //@line 3037 "parsermodule.c"
        __lastLabel__ = 46; __label__ = 47; break; //@line 3037 "parsermodule.c"
      case 47: // $bb47
        var $172=__lastLabel__ == 46 ? $169 : (__lastLabel__ == 38 ? $135 : ($_pr3));
        var $173=($172)==0; //@line 3032 "parsermodule.c"
        if ($173) { __label__ = 49; break; } else { __label__ = 48; break; } //@line 3032 "parsermodule.c"
      case 48: // $bb48
        var $174=$nch; //@line 3032 "parsermodule.c"
        var $175=$i; //@line 3032 "parsermodule.c"
        var $176=($174) - ($175); //@line 3032 "parsermodule.c"
        var $177=($176) > 3; //@line 3032 "parsermodule.c"
        if ($177) { __label__ = 40; break; } else { __label__ = 49; break; } //@line 3032 "parsermodule.c"
      case 49: // $bb49
        $check_trailing_comma=1; //@line 3039 "parsermodule.c"
        __label__ = 50; break; //@line 3039 "parsermodule.c"
      case 50: // $bb50thread_pre_split
        var $_pr4=$ok;
        __lastLabel__ = 50; __label__ = 51; break;
      case 51: // $bb50
        var $178=__lastLabel__ == 50 ? $_pr4 : (__lastLabel__ == 30 ? $108 : ($71));
        var $179=($178)!=0; //@line 3041 "parsermodule.c"
        if ($179) { __label__ = 52; break; } else { __label__ = 57; break; } //@line 3041 "parsermodule.c"
      case 52: // $bb51
        var $180=$check_trailing_comma; //@line 3041 "parsermodule.c"
        var $181=($180)!=0; //@line 3041 "parsermodule.c"
        if ($181) { __label__ = 53; break; } else { __label__ = 57; break; } //@line 3041 "parsermodule.c"
      case 53: // $bb52
        var $182=$nch; //@line 3042 "parsermodule.c"
        var $183=($182) - 1; //@line 3042 "parsermodule.c"
        var $184=$i; //@line 3042 "parsermodule.c"
        var $185=($183)==($184); //@line 3042 "parsermodule.c"
        if ($185) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 3042 "parsermodule.c"
      case 54: // $bb53
        var $186=$tree_addr; //@line 3043 "parsermodule.c"
        var $187=$186+20; //@line 3043 "parsermodule.c"
        var $188=HEAP[$187]; //@line 3043 "parsermodule.c"
        var $189=$i; //@line 3043 "parsermodule.c"
        var $190=$188+24*$189; //@line 3043 "parsermodule.c"
        var $191=_validate_terminal($190, 12, __str52); //@line 3043 "parsermodule.c"
        $ok=$191; //@line 3043 "parsermodule.c"
        __label__ = 57; break; //@line 3043 "parsermodule.c"
      case 55: // $bb54
        var $192=$i; //@line 3044 "parsermodule.c"
        var $193=$nch; //@line 3044 "parsermodule.c"
        var $194=($192)!=($193); //@line 3044 "parsermodule.c"
        if ($194) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 3044 "parsermodule.c"
      case 56: // $bb55
        $ok=0; //@line 3045 "parsermodule.c"
        _err_string(__str175); //@line 3046 "parsermodule.c"
        __label__ = 57; break; //@line 3046 "parsermodule.c"
      case 57: // $bb56
        var $195=$ok; //@line 3050 "parsermodule.c"
        $0=$195; //@line 3050 "parsermodule.c"
        var $196=$0; //@line 3050 "parsermodule.c"
        $retval=$196; //@line 3050 "parsermodule.c"
        var $retval57=$retval; //@line 3050 "parsermodule.c"
        ;
        return $retval57; //@line 3050 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_eval_input($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_208;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 3058 "parsermodule.c"
        var $2=$1+16; //@line 3058 "parsermodule.c"
        var $3=HEAP[$2]; //@line 3058 "parsermodule.c"
        $nch=$3; //@line 3058 "parsermodule.c"
        var $4=$tree_addr; //@line 3062 "parsermodule.c"
        var $5=_validate_ntype($4, 258); //@line 3062 "parsermodule.c"
        var $6=($5)==0; //@line 3062 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 3062 "parsermodule.c"
      case 1: // $bb
        var $7=$nch; //@line 3062 "parsermodule.c"
        var $8=($7) <= 1; //@line 3062 "parsermodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 3062 "parsermodule.c"
      case 2: // $bb1
        var $9=$tree_addr; //@line 3062 "parsermodule.c"
        var $10=$9+20; //@line 3062 "parsermodule.c"
        var $11=HEAP[$10]; //@line 3062 "parsermodule.c"
        var $12=$11; //@line 3062 "parsermodule.c"
        var $13=_validate_testlist($12); //@line 3062 "parsermodule.c"
        var $14=($13)==0; //@line 3062 "parsermodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 3062 "parsermodule.c"
      case 3: // $bb2
        var $15=$tree_addr; //@line 3062 "parsermodule.c"
        var $16=$15+20; //@line 3062 "parsermodule.c"
        var $17=HEAP[$16]; //@line 3062 "parsermodule.c"
        var $18=$nch; //@line 3062 "parsermodule.c"
        var $19=($18) - 1; //@line 3062 "parsermodule.c"
        var $20=$17+24*$19; //@line 3062 "parsermodule.c"
        var $21=_validate_ntype($20, 0); //@line 3062 "parsermodule.c"
        var $22=($21)==0; //@line 3062 "parsermodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 3062 "parsermodule.c"
      case 4: // $bb3
        $iftmp_208=1; //@line 3062 "parsermodule.c"
        __label__ = 6; break; //@line 3062 "parsermodule.c"
      case 5: // $bb4
        $iftmp_208=0; //@line 3062 "parsermodule.c"
        __label__ = 6; break; //@line 3062 "parsermodule.c"
      case 6: // $bb5
        var $23=$iftmp_208; //@line 3062 "parsermodule.c"
        $res=$23; //@line 3062 "parsermodule.c"
        $pos=1; //@line 3064 "parsermodule.c"
        __lastLabel__ = 6; __label__ = 8; break; //@line 3064 "parsermodule.c"
      case 7: // $bb6
        var $24=$tree_addr; //@line 3065 "parsermodule.c"
        var $25=$24+20; //@line 3065 "parsermodule.c"
        var $26=HEAP[$25]; //@line 3065 "parsermodule.c"
        var $27=$pos; //@line 3065 "parsermodule.c"
        var $28=$26+24*$27; //@line 3065 "parsermodule.c"
        var $29=_validate_ntype($28, 4); //@line 3065 "parsermodule.c"
        $res=$29; //@line 3065 "parsermodule.c"
        var $30=$pos; //@line 3064 "parsermodule.c"
        var $31=($30) + 1; //@line 3064 "parsermodule.c"
        $pos=$31; //@line 3064 "parsermodule.c"
        __lastLabel__ = 7; __label__ = 8; break; //@line 3064 "parsermodule.c"
      case 8: // $bb7
        var $32=__lastLabel__ == 7 ? $29 : ($23);
        var $33=($32)==0; //@line 3064 "parsermodule.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 3064 "parsermodule.c"
      case 9: // $bb8
        var $34=$nch; //@line 3064 "parsermodule.c"
        var $35=($34) - 1; //@line 3064 "parsermodule.c"
        var $36=$pos; //@line 3064 "parsermodule.c"
        var $37=($35) > ($36); //@line 3064 "parsermodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 3064 "parsermodule.c"
      case 10: // $bb9
        var $38=$res; //@line 3067 "parsermodule.c"
        $0=$38; //@line 3067 "parsermodule.c"
        var $39=$0; //@line 3067 "parsermodule.c"
        $retval=$39; //@line 3067 "parsermodule.c"
        var $retval10=$retval; //@line 3067 "parsermodule.c"
        ;
        return $retval10; //@line 3067 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_node($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_212;
        var $iftmp_211;
        var $iftmp_210;
        var $iftmp_209;
        var $nch;
        var $res;
        var $next;
        $tree_addr=$tree;
        $nch=0; //@line 3074 "parsermodule.c"
        $res=1; //@line 3075 "parsermodule.c"
        $next=0; //@line 3076 "parsermodule.c"
        __lastLabel__ = -1; __label__ = 71; break; //@line 3076 "parsermodule.c"
      case 1: // $bb
        var $1=$tree_addr; //@line 3079 "parsermodule.c"
        var $2=$1+16; //@line 3079 "parsermodule.c"
        var $3=HEAP[$2]; //@line 3079 "parsermodule.c"
        $nch=$3; //@line 3079 "parsermodule.c"
        $next=0; //@line 3080 "parsermodule.c"
        var $4=$tree_addr; //@line 3081 "parsermodule.c"
        var $5=$4; //@line 3081 "parsermodule.c"
        var $6=HEAP[$5]; //@line 3081 "parsermodule.c"
        var $7=($6); //@line 3081 "parsermodule.c"
        if ($7 == 261) {
          __label__ = 5; break;
        }
        else if ($7 == 262) {
          __label__ = 2; break;
        }
        else if ($7 == 267) {
          __label__ = 6; break;
        }
        else if ($7 == 268) {
          __label__ = 18; break;
        }
        else if ($7 == 269) {
          __label__ = 7; break;
        }
        else if ($7 == 270) {
          __label__ = 20; break;
        }
        else if ($7 == 272) {
          __label__ = 21; break;
        }
        else if ($7 == 273) {
          __label__ = 22; break;
        }
        else if ($7 == 274) {
          __label__ = 23; break;
        }
        else if ($7 == 275) {
          __label__ = 8; break;
        }
        else if ($7 == 276) {
          __label__ = 28; break;
        }
        else if ($7 == 277) {
          __label__ = 33; break;
        }
        else if ($7 == 278) {
          __label__ = 38; break;
        }
        else if ($7 == 279) {
          __label__ = 17; break;
        }
        else if ($7 == 280) {
          __label__ = 39; break;
        }
        else if ($7 == 281) {
          __label__ = 40; break;
        }
        else if ($7 == 282) {
          __label__ = 41; break;
        }
        else if ($7 == 283) {
          __label__ = 42; break;
        }
        else if ($7 == 289) {
          __label__ = 43; break;
        }
        else if ($7 == 290) {
          __label__ = 44; break;
        }
        else if ($7 == 291) {
          __label__ = 45; break;
        }
        else if ($7 == 292) {
          __label__ = 19; break;
        }
        else if ($7 == 293) {
          __label__ = 46; break;
        }
        else if ($7 == 294) {
          __label__ = 47; break;
        }
        else if ($7 == 295) {
          __label__ = 48; break;
        }
        else if ($7 == 296) {
          __label__ = 49; break;
        }
        else if ($7 == 297) {
          __label__ = 3; break;
        }
        else if ($7 == 300) {
          __label__ = 50; break;
        }
        else if ($7 == 304) {
          __label__ = 54; break;
        }
        else if ($7 == 306) {
          __label__ = 55; break;
        }
        else if ($7 == 307) {
          __label__ = 56; break;
        }
        else if ($7 == 308) {
          __label__ = 57; break;
        }
        else if ($7 == 309) {
          __label__ = 59; break;
        }
        else if ($7 == 310) {
          __label__ = 60; break;
        }
        else if ($7 == 311) {
          __label__ = 61; break;
        }
        else if ($7 == 312) {
          __label__ = 62; break;
        }
        else if ($7 == 313) {
          __label__ = 63; break;
        }
        else if ($7 == 314) {
          __label__ = 64; break;
        }
        else if ($7 == 315) {
          __label__ = 65; break;
        }
        else if ($7 == 316) {
          __label__ = 66; break;
        }
        else if ($7 == 317) {
          __label__ = 67; break;
        }
        else if ($7 == 318) {
          __label__ = 68; break;
        }
        else if ($7 == 326) {
          __label__ = 58; break;
        }
        else if ($7 == 327) {
          __label__ = 51; break;
        }
        else if ($7 == 329) {
          __label__ = 4; break;
        }
        else if ($7 == 338) {
          __label__ = 53; break;
        }
        else if ($7 == 340) {
          __label__ = 52; break;
        }
        else {
        __label__ = 69; break;
        }
        
      case 2: // $bb1
        var $8=$tree_addr; //@line 3086 "parsermodule.c"
        var $9=_validate_funcdef($8); //@line 3086 "parsermodule.c"
        $res=$9; //@line 3086 "parsermodule.c"
        __label__ = 70; break; //@line 3086 "parsermodule.c"
      case 3: // $bb2
        var $10=$tree_addr; //@line 3089 "parsermodule.c"
        var $11=_validate_with_stmt($10); //@line 3089 "parsermodule.c"
        $res=$11; //@line 3089 "parsermodule.c"
        __label__ = 70; break; //@line 3089 "parsermodule.c"
      case 4: // $bb3
        var $12=$tree_addr; //@line 3092 "parsermodule.c"
        var $13=_validate_class($12); //@line 3092 "parsermodule.c"
        $res=$13; //@line 3092 "parsermodule.c"
        __label__ = 70; break; //@line 3092 "parsermodule.c"
      case 5: // $bb4
        var $14=$tree_addr; //@line 3095 "parsermodule.c"
        var $15=_validate_decorated($14); //@line 3095 "parsermodule.c"
        $res=$15; //@line 3095 "parsermodule.c"
        __label__ = 70; break; //@line 3095 "parsermodule.c"
      case 6: // $bb5
        var $16=$tree_addr; //@line 3102 "parsermodule.c"
        var $17=_validate_stmt($16); //@line 3102 "parsermodule.c"
        $res=$17; //@line 3102 "parsermodule.c"
        __label__ = 70; break; //@line 3102 "parsermodule.c"
      case 7: // $bb6
        var $18=$tree_addr; //@line 3109 "parsermodule.c"
        var $19=_validate_small_stmt($18); //@line 3109 "parsermodule.c"
        $res=$19; //@line 3109 "parsermodule.c"
        __label__ = 70; break; //@line 3109 "parsermodule.c"
      case 8: // $bb7
        var $20=$tree_addr; //@line 3112 "parsermodule.c"
        var $21=_validate_numnodes($20, 1, __str176); //@line 3112 "parsermodule.c"
        var $22=($21)==0; //@line 3112 "parsermodule.c"
        if ($22) { __label__ = 15; break; } else { __label__ = 9; break; } //@line 3112 "parsermodule.c"
      case 9: // $bb8
        var $23=$tree_addr; //@line 3112 "parsermodule.c"
        var $24=$23+20; //@line 3112 "parsermodule.c"
        var $25=HEAP[$24]; //@line 3112 "parsermodule.c"
        var $26=$25; //@line 3112 "parsermodule.c"
        var $27=$26; //@line 3112 "parsermodule.c"
        var $28=HEAP[$27]; //@line 3112 "parsermodule.c"
        var $29=($28)==276; //@line 3112 "parsermodule.c"
        if ($29) { __label__ = 14; break; } else { __label__ = 10; break; } //@line 3112 "parsermodule.c"
      case 10: // $bb9
        var $30=$tree_addr; //@line 3112 "parsermodule.c"
        var $31=$30+20; //@line 3112 "parsermodule.c"
        var $32=HEAP[$31]; //@line 3112 "parsermodule.c"
        var $33=$32; //@line 3112 "parsermodule.c"
        var $34=$33; //@line 3112 "parsermodule.c"
        var $35=HEAP[$34]; //@line 3112 "parsermodule.c"
        var $36=($35)==277; //@line 3112 "parsermodule.c"
        if ($36) { __label__ = 14; break; } else { __label__ = 11; break; } //@line 3112 "parsermodule.c"
      case 11: // $bb10
        var $37=$tree_addr; //@line 3112 "parsermodule.c"
        var $38=$37+20; //@line 3112 "parsermodule.c"
        var $39=HEAP[$38]; //@line 3112 "parsermodule.c"
        var $40=$39; //@line 3112 "parsermodule.c"
        var $41=$40; //@line 3112 "parsermodule.c"
        var $42=HEAP[$41]; //@line 3112 "parsermodule.c"
        var $43=($42)==279; //@line 3112 "parsermodule.c"
        if ($43) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 3112 "parsermodule.c"
      case 12: // $bb11
        var $44=$tree_addr; //@line 3112 "parsermodule.c"
        var $45=$44+20; //@line 3112 "parsermodule.c"
        var $46=HEAP[$45]; //@line 3112 "parsermodule.c"
        var $47=$46; //@line 3112 "parsermodule.c"
        var $48=$47; //@line 3112 "parsermodule.c"
        var $49=HEAP[$48]; //@line 3112 "parsermodule.c"
        var $50=($49)==278; //@line 3112 "parsermodule.c"
        if ($50) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 3112 "parsermodule.c"
      case 13: // $bb12
        var $51=$tree_addr; //@line 3112 "parsermodule.c"
        var $52=$51+20; //@line 3112 "parsermodule.c"
        var $53=HEAP[$52]; //@line 3112 "parsermodule.c"
        var $54=$53; //@line 3112 "parsermodule.c"
        var $55=$54; //@line 3112 "parsermodule.c"
        var $56=HEAP[$55]; //@line 3112 "parsermodule.c"
        var $57=($56)==280; //@line 3112 "parsermodule.c"
        if ($57) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 3112 "parsermodule.c"
      case 14: // $bb16
        $iftmp_209=1; //@line 3112 "parsermodule.c"
        $res=1; //@line 3112 "parsermodule.c"
        var $58=$tree_addr; //@line 3119 "parsermodule.c"
        var $59=$58+20; //@line 3119 "parsermodule.c"
        var $60=HEAP[$59]; //@line 3119 "parsermodule.c"
        var $61=$60; //@line 3119 "parsermodule.c"
        $next=$61; //@line 3119 "parsermodule.c"
        __label__ = 70; break; //@line 3119 "parsermodule.c"
      case 15: // $bb17
        $iftmp_209=0; //@line 3112 "parsermodule.c"
        $res=0; //@line 3112 "parsermodule.c"
        var $62=$nch; //@line 3120 "parsermodule.c"
        var $63=($62)==1; //@line 3120 "parsermodule.c"
        if ($63) { __label__ = 16; break; } else { __label__ = 70; break; } //@line 3120 "parsermodule.c"
      case 16: // $bb18
        _err_string(__str177); //@line 3121 "parsermodule.c"
        __label__ = 70; break; //@line 3121 "parsermodule.c"
      case 17: // $bb20
        var $64=$tree_addr; //@line 3124 "parsermodule.c"
        var $65=_validate_yield_stmt($64); //@line 3124 "parsermodule.c"
        $res=$65; //@line 3124 "parsermodule.c"
        __label__ = 70; break; //@line 3124 "parsermodule.c"
      case 18: // $bb21
        var $66=$tree_addr; //@line 3130 "parsermodule.c"
        var $67=_validate_simple_stmt($66); //@line 3130 "parsermodule.c"
        $res=$67; //@line 3130 "parsermodule.c"
        __label__ = 70; break; //@line 3130 "parsermodule.c"
      case 19: // $bb22
        var $68=$tree_addr; //@line 3133 "parsermodule.c"
        var $69=_validate_compound_stmt($68); //@line 3133 "parsermodule.c"
        $res=$69; //@line 3133 "parsermodule.c"
        __label__ = 70; break; //@line 3133 "parsermodule.c"
      case 20: // $bb23
        var $70=$tree_addr; //@line 3139 "parsermodule.c"
        var $71=_validate_expr_stmt($70); //@line 3139 "parsermodule.c"
        $res=$71; //@line 3139 "parsermodule.c"
        __label__ = 70; break; //@line 3139 "parsermodule.c"
      case 21: // $bb24
        var $72=$tree_addr; //@line 3142 "parsermodule.c"
        var $73=_validate_print_stmt($72); //@line 3142 "parsermodule.c"
        $res=$73; //@line 3142 "parsermodule.c"
        __label__ = 70; break; //@line 3142 "parsermodule.c"
      case 22: // $bb25
        var $74=$tree_addr; //@line 3145 "parsermodule.c"
        var $75=_validate_del_stmt($74); //@line 3145 "parsermodule.c"
        $res=$75; //@line 3145 "parsermodule.c"
        __label__ = 70; break; //@line 3145 "parsermodule.c"
      case 23: // $bb26
        var $76=$tree_addr; //@line 3148 "parsermodule.c"
        var $77=_validate_numnodes($76, 1, __str178); //@line 3148 "parsermodule.c"
        var $78=($77)==0; //@line 3148 "parsermodule.c"
        if ($78) { __label__ = 26; break; } else { __label__ = 24; break; } //@line 3148 "parsermodule.c"
      case 24: // $bb27
        var $79=$tree_addr; //@line 3148 "parsermodule.c"
        var $80=$79+20; //@line 3148 "parsermodule.c"
        var $81=HEAP[$80]; //@line 3148 "parsermodule.c"
        var $82=$81; //@line 3148 "parsermodule.c"
        var $83=_validate_terminal($82, 1, __str178); //@line 3148 "parsermodule.c"
        var $84=($83)==0; //@line 3148 "parsermodule.c"
        if ($84) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 3148 "parsermodule.c"
      case 25: // $bb28
        $iftmp_210=1; //@line 3148 "parsermodule.c"
        __label__ = 27; break; //@line 3148 "parsermodule.c"
      case 26: // $bb29
        $iftmp_210=0; //@line 3148 "parsermodule.c"
        __label__ = 27; break; //@line 3148 "parsermodule.c"
      case 27: // $bb30
        var $85=$iftmp_210; //@line 3148 "parsermodule.c"
        $res=$85; //@line 3148 "parsermodule.c"
        __label__ = 70; break; //@line 3148 "parsermodule.c"
      case 28: // $bb31
        var $86=$tree_addr; //@line 3152 "parsermodule.c"
        var $87=_validate_numnodes($86, 1, __str179); //@line 3152 "parsermodule.c"
        var $88=($87)==0; //@line 3152 "parsermodule.c"
        if ($88) { __label__ = 31; break; } else { __label__ = 29; break; } //@line 3152 "parsermodule.c"
      case 29: // $bb32
        var $89=$tree_addr; //@line 3152 "parsermodule.c"
        var $90=$89+20; //@line 3152 "parsermodule.c"
        var $91=HEAP[$90]; //@line 3152 "parsermodule.c"
        var $92=$91; //@line 3152 "parsermodule.c"
        var $93=_validate_terminal($92, 1, __str179); //@line 3152 "parsermodule.c"
        var $94=($93)==0; //@line 3152 "parsermodule.c"
        if ($94) { __label__ = 31; break; } else { __label__ = 30; break; } //@line 3152 "parsermodule.c"
      case 30: // $bb33
        $iftmp_211=1; //@line 3152 "parsermodule.c"
        __label__ = 32; break; //@line 3152 "parsermodule.c"
      case 31: // $bb34
        $iftmp_211=0; //@line 3152 "parsermodule.c"
        __label__ = 32; break; //@line 3152 "parsermodule.c"
      case 32: // $bb35
        var $95=$iftmp_211; //@line 3152 "parsermodule.c"
        $res=$95; //@line 3152 "parsermodule.c"
        __label__ = 70; break; //@line 3152 "parsermodule.c"
      case 33: // $bb36
        var $96=$tree_addr; //@line 3156 "parsermodule.c"
        var $97=_validate_numnodes($96, 1, __str180); //@line 3156 "parsermodule.c"
        var $98=($97)==0; //@line 3156 "parsermodule.c"
        if ($98) { __label__ = 36; break; } else { __label__ = 34; break; } //@line 3156 "parsermodule.c"
      case 34: // $bb37
        var $99=$tree_addr; //@line 3156 "parsermodule.c"
        var $100=$99+20; //@line 3156 "parsermodule.c"
        var $101=HEAP[$100]; //@line 3156 "parsermodule.c"
        var $102=$101; //@line 3156 "parsermodule.c"
        var $103=_validate_terminal($102, 1, __str180); //@line 3156 "parsermodule.c"
        var $104=($103)==0; //@line 3156 "parsermodule.c"
        if ($104) { __label__ = 36; break; } else { __label__ = 35; break; } //@line 3156 "parsermodule.c"
      case 35: // $bb38
        $iftmp_212=1; //@line 3156 "parsermodule.c"
        __label__ = 37; break; //@line 3156 "parsermodule.c"
      case 36: // $bb39
        $iftmp_212=0; //@line 3156 "parsermodule.c"
        __label__ = 37; break; //@line 3156 "parsermodule.c"
      case 37: // $bb40
        var $105=$iftmp_212; //@line 3156 "parsermodule.c"
        $res=$105; //@line 3156 "parsermodule.c"
        __label__ = 70; break; //@line 3156 "parsermodule.c"
      case 38: // $bb41
        var $106=$tree_addr; //@line 3160 "parsermodule.c"
        var $107=_validate_return_stmt($106); //@line 3160 "parsermodule.c"
        $res=$107; //@line 3160 "parsermodule.c"
        __label__ = 70; break; //@line 3160 "parsermodule.c"
      case 39: // $bb42
        var $108=$tree_addr; //@line 3163 "parsermodule.c"
        var $109=_validate_raise_stmt($108); //@line 3163 "parsermodule.c"
        $res=$109; //@line 3163 "parsermodule.c"
        __label__ = 70; break; //@line 3163 "parsermodule.c"
      case 40: // $bb43
        var $110=$tree_addr; //@line 3166 "parsermodule.c"
        var $111=_validate_import_stmt($110); //@line 3166 "parsermodule.c"
        $res=$111; //@line 3166 "parsermodule.c"
        __label__ = 70; break; //@line 3166 "parsermodule.c"
      case 41: // $bb44
        var $112=$tree_addr; //@line 3169 "parsermodule.c"
        var $113=_validate_import_name($112); //@line 3169 "parsermodule.c"
        $res=$113; //@line 3169 "parsermodule.c"
        __label__ = 70; break; //@line 3169 "parsermodule.c"
      case 42: // $bb45
        var $114=$tree_addr; //@line 3172 "parsermodule.c"
        var $115=_validate_import_from($114); //@line 3172 "parsermodule.c"
        $res=$115; //@line 3172 "parsermodule.c"
        __label__ = 70; break; //@line 3172 "parsermodule.c"
      case 43: // $bb46
        var $116=$tree_addr; //@line 3175 "parsermodule.c"
        var $117=_validate_global_stmt($116); //@line 3175 "parsermodule.c"
        $res=$117; //@line 3175 "parsermodule.c"
        __label__ = 70; break; //@line 3175 "parsermodule.c"
      case 44: // $bb47
        var $118=$tree_addr; //@line 3178 "parsermodule.c"
        var $119=_validate_exec_stmt($118); //@line 3178 "parsermodule.c"
        $res=$119; //@line 3178 "parsermodule.c"
        __label__ = 70; break; //@line 3178 "parsermodule.c"
      case 45: // $bb48
        var $120=$tree_addr; //@line 3181 "parsermodule.c"
        var $121=_validate_assert_stmt($120); //@line 3181 "parsermodule.c"
        $res=$121; //@line 3181 "parsermodule.c"
        __label__ = 70; break; //@line 3181 "parsermodule.c"
      case 46: // $bb49
        var $122=$tree_addr; //@line 3184 "parsermodule.c"
        var $123=_validate_if($122); //@line 3184 "parsermodule.c"
        $res=$123; //@line 3184 "parsermodule.c"
        __label__ = 70; break; //@line 3184 "parsermodule.c"
      case 47: // $bb50
        var $124=$tree_addr; //@line 3187 "parsermodule.c"
        var $125=_validate_while($124); //@line 3187 "parsermodule.c"
        $res=$125; //@line 3187 "parsermodule.c"
        __label__ = 70; break; //@line 3187 "parsermodule.c"
      case 48: // $bb51
        var $126=$tree_addr; //@line 3190 "parsermodule.c"
        var $127=_validate_for($126); //@line 3190 "parsermodule.c"
        $res=$127; //@line 3190 "parsermodule.c"
        __label__ = 70; break; //@line 3190 "parsermodule.c"
      case 49: // $bb52
        var $128=$tree_addr; //@line 3193 "parsermodule.c"
        var $129=_validate_try($128); //@line 3193 "parsermodule.c"
        $res=$129; //@line 3193 "parsermodule.c"
        __label__ = 70; break; //@line 3193 "parsermodule.c"
      case 50: // $bb53
        var $130=$tree_addr; //@line 3196 "parsermodule.c"
        var $131=_validate_suite($130); //@line 3196 "parsermodule.c"
        $res=$131; //@line 3196 "parsermodule.c"
        __label__ = 70; break; //@line 3196 "parsermodule.c"
      case 51: // $bb54
        var $132=$tree_addr; //@line 3202 "parsermodule.c"
        var $133=_validate_testlist($132); //@line 3202 "parsermodule.c"
        $res=$133; //@line 3202 "parsermodule.c"
        __label__ = 70; break; //@line 3202 "parsermodule.c"
      case 52: // $bb55
        var $134=$tree_addr; //@line 3205 "parsermodule.c"
        var $135=_validate_yield_expr($134); //@line 3205 "parsermodule.c"
        $res=$135; //@line 3205 "parsermodule.c"
        __label__ = 70; break; //@line 3205 "parsermodule.c"
      case 53: // $bb56
        var $136=$tree_addr; //@line 3208 "parsermodule.c"
        var $137=_validate_testlist1($136); //@line 3208 "parsermodule.c"
        $res=$137; //@line 3208 "parsermodule.c"
        __label__ = 70; break; //@line 3208 "parsermodule.c"
      case 54: // $bb57
        var $138=$tree_addr; //@line 3211 "parsermodule.c"
        var $139=_validate_test($138); //@line 3211 "parsermodule.c"
        $res=$139; //@line 3211 "parsermodule.c"
        __label__ = 70; break; //@line 3211 "parsermodule.c"
      case 55: // $bb58
        var $140=$tree_addr; //@line 3214 "parsermodule.c"
        var $141=_validate_and_test($140); //@line 3214 "parsermodule.c"
        $res=$141; //@line 3214 "parsermodule.c"
        __label__ = 70; break; //@line 3214 "parsermodule.c"
      case 56: // $bb59
        var $142=$tree_addr; //@line 3217 "parsermodule.c"
        var $143=_validate_not_test($142); //@line 3217 "parsermodule.c"
        $res=$143; //@line 3217 "parsermodule.c"
        __label__ = 70; break; //@line 3217 "parsermodule.c"
      case 57: // $bb60
        var $144=$tree_addr; //@line 3220 "parsermodule.c"
        var $145=_validate_comparison($144); //@line 3220 "parsermodule.c"
        $res=$145; //@line 3220 "parsermodule.c"
        __label__ = 70; break; //@line 3220 "parsermodule.c"
      case 58: // $bb61
        var $146=$tree_addr; //@line 3223 "parsermodule.c"
        var $147=_validate_exprlist($146); //@line 3223 "parsermodule.c"
        $res=$147; //@line 3223 "parsermodule.c"
        __label__ = 70; break; //@line 3223 "parsermodule.c"
      case 59: // $bb62
        var $148=$tree_addr; //@line 3226 "parsermodule.c"
        var $149=_validate_comp_op($148); //@line 3226 "parsermodule.c"
        $res=$149; //@line 3226 "parsermodule.c"
        __label__ = 70; break; //@line 3226 "parsermodule.c"
      case 60: // $bb63
        var $150=$tree_addr; //@line 3229 "parsermodule.c"
        var $151=_validate_expr($150); //@line 3229 "parsermodule.c"
        $res=$151; //@line 3229 "parsermodule.c"
        __label__ = 70; break; //@line 3229 "parsermodule.c"
      case 61: // $bb64
        var $152=$tree_addr; //@line 3232 "parsermodule.c"
        var $153=_validate_xor_expr($152); //@line 3232 "parsermodule.c"
        $res=$153; //@line 3232 "parsermodule.c"
        __label__ = 70; break; //@line 3232 "parsermodule.c"
      case 62: // $bb65
        var $154=$tree_addr; //@line 3235 "parsermodule.c"
        var $155=_validate_and_expr($154); //@line 3235 "parsermodule.c"
        $res=$155; //@line 3235 "parsermodule.c"
        __label__ = 70; break; //@line 3235 "parsermodule.c"
      case 63: // $bb66
        var $156=$tree_addr; //@line 3238 "parsermodule.c"
        var $157=_validate_shift_expr($156); //@line 3238 "parsermodule.c"
        $res=$157; //@line 3238 "parsermodule.c"
        __label__ = 70; break; //@line 3238 "parsermodule.c"
      case 64: // $bb67
        var $158=$tree_addr; //@line 3241 "parsermodule.c"
        var $159=_validate_arith_expr($158); //@line 3241 "parsermodule.c"
        $res=$159; //@line 3241 "parsermodule.c"
        __label__ = 70; break; //@line 3241 "parsermodule.c"
      case 65: // $bb68
        var $160=$tree_addr; //@line 3244 "parsermodule.c"
        var $161=_validate_term($160); //@line 3244 "parsermodule.c"
        $res=$161; //@line 3244 "parsermodule.c"
        __label__ = 70; break; //@line 3244 "parsermodule.c"
      case 66: // $bb69
        var $162=$tree_addr; //@line 3247 "parsermodule.c"
        var $163=_validate_factor($162); //@line 3247 "parsermodule.c"
        $res=$163; //@line 3247 "parsermodule.c"
        __label__ = 70; break; //@line 3247 "parsermodule.c"
      case 67: // $bb70
        var $164=$tree_addr; //@line 3250 "parsermodule.c"
        var $165=_validate_power($164); //@line 3250 "parsermodule.c"
        $res=$165; //@line 3250 "parsermodule.c"
        __label__ = 70; break; //@line 3250 "parsermodule.c"
      case 68: // $bb71
        var $166=$tree_addr; //@line 3253 "parsermodule.c"
        var $167=_validate_atom($166); //@line 3253 "parsermodule.c"
        $res=$167; //@line 3253 "parsermodule.c"
        __label__ = 70; break; //@line 3253 "parsermodule.c"
      case 69: // $bb72
        _err_string(__str181); //@line 3258 "parsermodule.c"
        $res=0; //@line 3259 "parsermodule.c"
        __label__ = 70; break; //@line 3259 "parsermodule.c"
      case 70: // $bb73
        var $168=$next; //@line 3262 "parsermodule.c"
        $tree_addr=$168; //@line 3262 "parsermodule.c"
        var $_pr=$res;
        __lastLabel__ = 70; __label__ = 71; break; //@line 3262 "parsermodule.c"
      case 71: // $bb74
        var $169=__lastLabel__ == 70 ? $_pr : (1);
        var $170=($169)==0; //@line 3078 "parsermodule.c"
        if ($170) { __label__ = 73; break; } else { __label__ = 72; break; } //@line 3078 "parsermodule.c"
      case 72: // $bb75
        var $171=$tree_addr; //@line 3078 "parsermodule.c"
        var $172=($171)!=0; //@line 3078 "parsermodule.c"
        if ($172) { __label__ = 1; break; } else { __label__ = 73; break; } //@line 3078 "parsermodule.c"
      case 73: // $bb76
        var $173=$res; //@line 3264 "parsermodule.c"
        $0=$173; //@line 3264 "parsermodule.c"
        var $174=$0; //@line 3264 "parsermodule.c"
        $retval=$174; //@line 3264 "parsermodule.c"
        var $retval77=$retval; //@line 3264 "parsermodule.c"
        ;
        return $retval77; //@line 3264 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_expr_tree($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 3271 "parsermodule.c"
        var $2=_validate_eval_input($1); //@line 3271 "parsermodule.c"
        $res=$2; //@line 3271 "parsermodule.c"
        var $3=$res; //@line 3273 "parsermodule.c"
        var $4=($3)==0; //@line 3273 "parsermodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3273 "parsermodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 3273 "parsermodule.c"
        var $6=($5)==0; //@line 3273 "parsermodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3273 "parsermodule.c"
      case 2: // $bb1
        _err_string(__str182); //@line 3274 "parsermodule.c"
        __label__ = 3; break; //@line 3274 "parsermodule.c"
      case 3: // $bb2
        var $7=$res; //@line 3276 "parsermodule.c"
        $0=$7; //@line 3276 "parsermodule.c"
        var $8=$0; //@line 3276 "parsermodule.c"
        $retval=$8; //@line 3276 "parsermodule.c"
        var $retval3=$retval; //@line 3276 "parsermodule.c"
        ;
        return $retval3; //@line 3276 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_file_input($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_213;
        var $j;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 3287 "parsermodule.c"
        var $2=$1+16; //@line 3287 "parsermodule.c"
        var $3=HEAP[$2]; //@line 3287 "parsermodule.c"
        var $4=($3) - 1; //@line 3287 "parsermodule.c"
        $nch=$4; //@line 3287 "parsermodule.c"
        var $5=$nch; //@line 3289 "parsermodule.c"
        var $6=($5) < 0; //@line 3289 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 3289 "parsermodule.c"
      case 1: // $bb
        var $7=$tree_addr; //@line 3289 "parsermodule.c"
        var $8=$7+20; //@line 3289 "parsermodule.c"
        var $9=HEAP[$8]; //@line 3289 "parsermodule.c"
        var $10=$nch; //@line 3289 "parsermodule.c"
        var $11=$9+24*$10; //@line 3289 "parsermodule.c"
        var $12=_validate_ntype($11, 0); //@line 3289 "parsermodule.c"
        var $13=($12)==0; //@line 3289 "parsermodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 3289 "parsermodule.c"
      case 2: // $bb1
        $iftmp_213=1; //@line 3289 "parsermodule.c"
        __label__ = 4; break; //@line 3289 "parsermodule.c"
      case 3: // $bb2
        $iftmp_213=0; //@line 3289 "parsermodule.c"
        __label__ = 4; break; //@line 3289 "parsermodule.c"
      case 4: // $bb3
        var $14=$iftmp_213; //@line 3289 "parsermodule.c"
        $res=$14; //@line 3289 "parsermodule.c"
        $j=0; //@line 3291 "parsermodule.c"
        __lastLabel__ = 4; __label__ = 9; break; //@line 3291 "parsermodule.c"
      case 5: // $bb4
        var $15=$tree_addr; //@line 3292 "parsermodule.c"
        var $16=$15+20; //@line 3292 "parsermodule.c"
        var $17=HEAP[$16]; //@line 3292 "parsermodule.c"
        var $18=$j; //@line 3292 "parsermodule.c"
        var $19=$17+24*$18; //@line 3292 "parsermodule.c"
        var $20=$19; //@line 3292 "parsermodule.c"
        var $21=HEAP[$20]; //@line 3292 "parsermodule.c"
        var $22=($21)==267; //@line 3292 "parsermodule.c"
        var $23=$tree_addr; //@line 3293 "parsermodule.c"
        var $24=$23+20; //@line 3293 "parsermodule.c"
        var $25=HEAP[$24]; //@line 3293 "parsermodule.c"
        var $26=$j; //@line 3293 "parsermodule.c"
        var $27=$25+24*$26; //@line 3293 "parsermodule.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3292 "parsermodule.c"
      case 6: // $bb5
        var $28=_validate_stmt($27); //@line 3293 "parsermodule.c"
        $res=$28; //@line 3293 "parsermodule.c"
        __label__ = 8; break; //@line 3293 "parsermodule.c"
      case 7: // $bb6
        var $29=_validate_terminal($27, 4, 0); //@line 3295 "parsermodule.c"
        $res=$29; //@line 3295 "parsermodule.c"
        __label__ = 8; break; //@line 3295 "parsermodule.c"
      case 8: // $bb7
        var $30=$j; //@line 3291 "parsermodule.c"
        var $31=($30) + 1; //@line 3291 "parsermodule.c"
        $j=$31; //@line 3291 "parsermodule.c"
        var $_pr=$res;
        __lastLabel__ = 8; __label__ = 9; break; //@line 3291 "parsermodule.c"
      case 9: // $bb8
        var $32=__lastLabel__ == 8 ? $_pr : ($14);
        var $33=($32)==0; //@line 3291 "parsermodule.c"
        if ($33) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 3291 "parsermodule.c"
      case 10: // $bb9
        var $34=$j; //@line 3291 "parsermodule.c"
        var $35=$nch; //@line 3291 "parsermodule.c"
        var $36=($34) < ($35); //@line 3291 "parsermodule.c"
        if ($36) { __label__ = 5; break; } else { __label__ = 11; break; } //@line 3291 "parsermodule.c"
      case 11: // $bb10
        var $37=$res; //@line 3301 "parsermodule.c"
        var $38=($37)==0; //@line 3301 "parsermodule.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 3301 "parsermodule.c"
      case 12: // $bb11
        var $39=_PyErr_Occurred(); //@line 3301 "parsermodule.c"
        var $40=($39)==0; //@line 3301 "parsermodule.c"
        if ($40) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 3301 "parsermodule.c"
      case 13: // $bb12
        _err_string(__str183); //@line 3302 "parsermodule.c"
        __label__ = 14; break; //@line 3302 "parsermodule.c"
      case 14: // $bb13
        var $41=$res; //@line 3304 "parsermodule.c"
        $0=$41; //@line 3304 "parsermodule.c"
        var $42=$0; //@line 3304 "parsermodule.c"
        $retval=$42; //@line 3304 "parsermodule.c"
        var $retval14=$retval; //@line 3304 "parsermodule.c"
        ;
        return $retval14; //@line 3304 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_encoding_decl($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_214;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 3310 "parsermodule.c"
        var $2=$1+16; //@line 3310 "parsermodule.c"
        var $3=HEAP[$2]; //@line 3310 "parsermodule.c"
        $nch=$3; //@line 3310 "parsermodule.c"
        var $4=$nch; //@line 3312 "parsermodule.c"
        var $5=($4)!=1; //@line 3312 "parsermodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 3312 "parsermodule.c"
      case 1: // $bb
        var $6=$tree_addr; //@line 3312 "parsermodule.c"
        var $7=$6+20; //@line 3312 "parsermodule.c"
        var $8=HEAP[$7]; //@line 3312 "parsermodule.c"
        var $9=$8; //@line 3312 "parsermodule.c"
        var $10=_validate_file_input($9); //@line 3312 "parsermodule.c"
        var $11=($10)==0; //@line 3312 "parsermodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 3312 "parsermodule.c"
      case 2: // $bb3
        $iftmp_214=1; //@line 3312 "parsermodule.c"
        $res=1; //@line 3312 "parsermodule.c"
        __label__ = 5; break;
      case 3: // $bb4
        $iftmp_214=0; //@line 3312 "parsermodule.c"
        $res=0; //@line 3312 "parsermodule.c"
        var $12=_PyErr_Occurred(); //@line 3314 "parsermodule.c"
        var $13=($12)==0; //@line 3314 "parsermodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 3314 "parsermodule.c"
      case 4: // $bb5
        _err_string(__str184); //@line 3315 "parsermodule.c"
        __label__ = 5; break; //@line 3315 "parsermodule.c"
      case 5: // $bb6
        var $14=$res; //@line 3317 "parsermodule.c"
        $0=$14; //@line 3317 "parsermodule.c"
        var $15=$0; //@line 3317 "parsermodule.c"
        $retval=$15; //@line 3317 "parsermodule.c"
        var $retval7=$retval; //@line 3317 "parsermodule.c"
        ;
        return $retval7; //@line 3317 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser__pickler($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        var $st=__stackBase__;
        var $empty_dict;
        var $newargs;
        var $tuple;
        $self_addr=$self;
        $args_addr=$args;
        $result=0; //@line 3328 "parsermodule.c"
        HEAP[$st]=0; //@line 3329 "parsermodule.c"
        $empty_dict=0; //@line 3330 "parsermodule.c"
        var $1=$args_addr; //@line 3332 "parsermodule.c"
        var $2=_PyArg_ParseTuple($1, __str185, allocate([_PyST_Type,0,0,0,$st,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 3332 "parsermodule.c"
        var $3=($2)!=0; //@line 3332 "parsermodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 10; break; } //@line 3332 "parsermodule.c"
      case 1: // $bb
        var $4=_PyDict_New(); //@line 3336 "parsermodule.c"
        $empty_dict=$4; //@line 3336 "parsermodule.c"
        var $5=$empty_dict; //@line 3336 "parsermodule.c"
        var $6=($5)==0; //@line 3336 "parsermodule.c"
        if ($6) { __label__ = 13; break; } else { __label__ = 2; break; } //@line 3336 "parsermodule.c"
      case 2: // $bb1
        var $7=HEAP[$st]; //@line 3338 "parsermodule.c"
        var $8=_Py_BuildValue(__str186, allocate([$7,0,0,0,1,0,0,0], ["%struct.PyObject*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 3338 "parsermodule.c"
        $newargs=$8; //@line 3338 "parsermodule.c"
        var $9=$newargs; //@line 3338 "parsermodule.c"
        var $10=($9)==0; //@line 3338 "parsermodule.c"
        if ($10) { __label__ = 10; break; } else { __label__ = 3; break; } //@line 3338 "parsermodule.c"
      case 3: // $bb2
        var $11=$newargs; //@line 3340 "parsermodule.c"
        var $12=$empty_dict; //@line 3340 "parsermodule.c"
        var $13=_parser_st2tuple(0, $11, $12); //@line 3340 "parsermodule.c"
        $tuple=$13; //@line 3340 "parsermodule.c"
        var $14=$tuple; //@line 3341 "parsermodule.c"
        var $15=($14)!=0; //@line 3341 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 3341 "parsermodule.c"
      case 4: // $bb3
        var $16=HEAP[_pickle_constructor]; //@line 3342 "parsermodule.c"
        var $17=$tuple; //@line 3342 "parsermodule.c"
        var $18=_Py_BuildValue(__str187, allocate([$16,0,0,0,$17,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 3342 "parsermodule.c"
        $result=$18; //@line 3342 "parsermodule.c"
        var $19=$tuple; //@line 3343 "parsermodule.c"
        var $20=$19; //@line 3343 "parsermodule.c"
        var $21=HEAP[$20]; //@line 3343 "parsermodule.c"
        var $22=($21) - 1; //@line 3343 "parsermodule.c"
        var $23=$tuple; //@line 3343 "parsermodule.c"
        var $24=$23; //@line 3343 "parsermodule.c"
        HEAP[$24]=$22; //@line 3343 "parsermodule.c"
        var $25=$tuple; //@line 3343 "parsermodule.c"
        var $26=$25; //@line 3343 "parsermodule.c"
        var $27=HEAP[$26]; //@line 3343 "parsermodule.c"
        var $28=($27)==0; //@line 3343 "parsermodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3343 "parsermodule.c"
      case 5: // $bb4
        var $29=$tuple; //@line 3343 "parsermodule.c"
        var $30=$29+4; //@line 3343 "parsermodule.c"
        var $31=HEAP[$30]; //@line 3343 "parsermodule.c"
        var $32=$31+24; //@line 3343 "parsermodule.c"
        var $33=HEAP[$32]; //@line 3343 "parsermodule.c"
        var $34=$tuple; //@line 3343 "parsermodule.c"
        FUNCTION_TABLE[$33]($34); //@line 3343 "parsermodule.c"
        __label__ = 6; break; //@line 3343 "parsermodule.c"
      case 6: // $bb5
        var $35=$empty_dict; //@line 3345 "parsermodule.c"
        var $36=$35; //@line 3345 "parsermodule.c"
        var $37=HEAP[$36]; //@line 3345 "parsermodule.c"
        var $38=($37) - 1; //@line 3345 "parsermodule.c"
        var $39=$empty_dict; //@line 3345 "parsermodule.c"
        var $40=$39; //@line 3345 "parsermodule.c"
        HEAP[$40]=$38; //@line 3345 "parsermodule.c"
        var $41=$empty_dict; //@line 3345 "parsermodule.c"
        var $42=$41; //@line 3345 "parsermodule.c"
        var $43=HEAP[$42]; //@line 3345 "parsermodule.c"
        var $44=($43)==0; //@line 3345 "parsermodule.c"
        if ($44) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3345 "parsermodule.c"
      case 7: // $bb6
        var $45=$empty_dict; //@line 3345 "parsermodule.c"
        var $46=$45+4; //@line 3345 "parsermodule.c"
        var $47=HEAP[$46]; //@line 3345 "parsermodule.c"
        var $48=$47+24; //@line 3345 "parsermodule.c"
        var $49=HEAP[$48]; //@line 3345 "parsermodule.c"
        var $50=$empty_dict; //@line 3345 "parsermodule.c"
        FUNCTION_TABLE[$49]($50); //@line 3345 "parsermodule.c"
        __label__ = 8; break; //@line 3345 "parsermodule.c"
      case 8: // $bb7
        var $51=$newargs; //@line 3346 "parsermodule.c"
        var $52=$51; //@line 3346 "parsermodule.c"
        var $53=HEAP[$52]; //@line 3346 "parsermodule.c"
        var $54=($53) - 1; //@line 3346 "parsermodule.c"
        var $55=$newargs; //@line 3346 "parsermodule.c"
        var $56=$55; //@line 3346 "parsermodule.c"
        HEAP[$56]=$54; //@line 3346 "parsermodule.c"
        var $57=$newargs; //@line 3346 "parsermodule.c"
        var $58=$57; //@line 3346 "parsermodule.c"
        var $59=HEAP[$58]; //@line 3346 "parsermodule.c"
        var $60=($59)==0; //@line 3346 "parsermodule.c"
        if ($60) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3346 "parsermodule.c"
      case 9: // $bb8
        var $61=$newargs; //@line 3346 "parsermodule.c"
        var $62=$61+4; //@line 3346 "parsermodule.c"
        var $63=HEAP[$62]; //@line 3346 "parsermodule.c"
        var $64=$63+24; //@line 3346 "parsermodule.c"
        var $65=HEAP[$64]; //@line 3346 "parsermodule.c"
        var $66=$newargs; //@line 3346 "parsermodule.c"
        FUNCTION_TABLE[$65]($66); //@line 3346 "parsermodule.c"
        __label__ = 10; break; //@line 3348 "parsermodule.c"
      case 10: // $finally
        var $_pr=$empty_dict;
        var $67=($_pr)!=0; //@line 3349 "parsermodule.c"
        if ($67) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 3349 "parsermodule.c"
      case 11: // $bb9
        var $68=$empty_dict; //@line 3349 "parsermodule.c"
        var $69=$68; //@line 3349 "parsermodule.c"
        var $70=HEAP[$69]; //@line 3349 "parsermodule.c"
        var $71=($70) - 1; //@line 3349 "parsermodule.c"
        var $72=$empty_dict; //@line 3349 "parsermodule.c"
        var $73=$72; //@line 3349 "parsermodule.c"
        HEAP[$73]=$71; //@line 3349 "parsermodule.c"
        var $74=$empty_dict; //@line 3349 "parsermodule.c"
        var $75=$74; //@line 3349 "parsermodule.c"
        var $76=HEAP[$75]; //@line 3349 "parsermodule.c"
        var $77=($76)==0; //@line 3349 "parsermodule.c"
        if ($77) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 3349 "parsermodule.c"
      case 12: // $bb10
        var $78=$empty_dict; //@line 3349 "parsermodule.c"
        var $79=$78+4; //@line 3349 "parsermodule.c"
        var $80=HEAP[$79]; //@line 3349 "parsermodule.c"
        var $81=$80+24; //@line 3349 "parsermodule.c"
        var $82=HEAP[$81]; //@line 3349 "parsermodule.c"
        var $83=$empty_dict; //@line 3349 "parsermodule.c"
        FUNCTION_TABLE[$82]($83); //@line 3349 "parsermodule.c"
        __label__ = 13; break; //@line 3349 "parsermodule.c"
      case 13: // $bb11
        var $84=$result; //@line 3351 "parsermodule.c"
        $0=$84; //@line 3351 "parsermodule.c"
        var $85=$0; //@line 3351 "parsermodule.c"
        $retval=$85; //@line 3351 "parsermodule.c"
        var $retval12=$retval; //@line 3351 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 3351 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initparser() {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module;
        var $copyreg;
        var $func;
        var $pickler;
        var $res;
        HEAP[_PyST_Type+4]=_PyType_Type; //@line 3406 "parsermodule.c"
        var $0=_Py_InitModule4(__str209, _parser_functions, 0, 0, 1013); //@line 3407 "parsermodule.c"
        $module=$0; //@line 3407 "parsermodule.c"
        var $1=$module; //@line 3408 "parsermodule.c"
        var $2=($1)==0; //@line 3408 "parsermodule.c"
        if ($2) { __label__ = 24; break; } else { __label__ = 1; break; } //@line 3408 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_parser_error]; //@line 3411 "parsermodule.c"
        var $4=($3)==0; //@line 3411 "parsermodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3411 "parsermodule.c"
      case 2: // $bb2
        var $5=_PyErr_NewException(__str210, 0, 0); //@line 3412 "parsermodule.c"
        HEAP[_parser_error]=$5; //@line 3412 "parsermodule.c"
        var $6=($5)==0; //@line 3414 "parsermodule.c"
        if ($6) { __label__ = 24; break; } else { __label__ = 3; break; } //@line 3414 "parsermodule.c"
      case 3: // $bb3
        var $7=HEAP[_parser_error]; //@line 3423 "parsermodule.c"
        var $8=$7; //@line 3423 "parsermodule.c"
        var $9=HEAP[$8]; //@line 3423 "parsermodule.c"
        var $10=($9) + 1; //@line 3423 "parsermodule.c"
        var $11=$7; //@line 3423 "parsermodule.c"
        HEAP[$11]=$10; //@line 3423 "parsermodule.c"
        var $12=HEAP[_parser_error]; //@line 3424 "parsermodule.c"
        var $13=$module; //@line 3424 "parsermodule.c"
        var $14=_PyModule_AddObject($13, __str211, $12); //@line 3424 "parsermodule.c"
        var $15=($14)!=0; //@line 3424 "parsermodule.c"
        if ($15) { __label__ = 24; break; } else { __label__ = 4; break; } //@line 3424 "parsermodule.c"
      case 4: // $bb4
        var $16=HEAP[_PyST_Type]; //@line 3427 "parsermodule.c"
        var $17=($16) + 1; //@line 3427 "parsermodule.c"
        HEAP[_PyST_Type]=$17; //@line 3427 "parsermodule.c"
        var $18=$module; //@line 3428 "parsermodule.c"
        var $19=_PyModule_AddObject($18, __str212, _PyST_Type); //@line 3428 "parsermodule.c"
        var $20=HEAP[_PyST_Type]; //@line 3429 "parsermodule.c"
        var $21=($20) + 1; //@line 3429 "parsermodule.c"
        HEAP[_PyST_Type]=$21; //@line 3429 "parsermodule.c"
        var $22=$module; //@line 3430 "parsermodule.c"
        var $23=_PyModule_AddObject($22, __str213, _PyST_Type); //@line 3430 "parsermodule.c"
        var $24=$module; //@line 3432 "parsermodule.c"
        var $25=_PyModule_AddStringConstant($24, __str214, _parser_copyright_string); //@line 3432 "parsermodule.c"
        var $26=$module; //@line 3434 "parsermodule.c"
        var $27=_PyModule_AddStringConstant($26, __str215, _parser_doc_string); //@line 3434 "parsermodule.c"
        var $28=$module; //@line 3436 "parsermodule.c"
        var $29=_PyModule_AddStringConstant($28, __str216, _parser_version_string); //@line 3436 "parsermodule.c"
        var $30=_PyImport_ImportModuleNoBlock(__str217); //@line 3443 "parsermodule.c"
        $copyreg=$30; //@line 3443 "parsermodule.c"
        var $31=$copyreg; //@line 3444 "parsermodule.c"
        var $32=($31)!=0; //@line 3444 "parsermodule.c"
        if ($32) { __label__ = 5; break; } else { __label__ = 24; break; } //@line 3444 "parsermodule.c"
      case 5: // $bb5
        var $33=$copyreg; //@line 3447 "parsermodule.c"
        var $34=_PyObject_GetAttrString($33, __str218); //@line 3447 "parsermodule.c"
        $func=$34; //@line 3447 "parsermodule.c"
        var $35=$module; //@line 3448 "parsermodule.c"
        var $36=_PyObject_GetAttrString($35, __str202); //@line 3448 "parsermodule.c"
        HEAP[_pickle_constructor]=$36; //@line 3448 "parsermodule.c"
        var $37=$module; //@line 3449 "parsermodule.c"
        var $38=_PyObject_GetAttrString($37, __str207); //@line 3449 "parsermodule.c"
        $pickler=$38; //@line 3449 "parsermodule.c"
        var $39=HEAP[_pickle_constructor]; //@line 3450 "parsermodule.c"
        var $40=($39)!=0; //@line 3450 "parsermodule.c"
        if ($40) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3450 "parsermodule.c"
      case 6: // $bb6
        var $41=HEAP[_pickle_constructor]; //@line 3450 "parsermodule.c"
        var $42=$41; //@line 3450 "parsermodule.c"
        var $43=HEAP[$42]; //@line 3450 "parsermodule.c"
        var $44=($43) + 1; //@line 3450 "parsermodule.c"
        var $45=$41; //@line 3450 "parsermodule.c"
        HEAP[$45]=$44; //@line 3450 "parsermodule.c"
        __label__ = 7; break; //@line 3450 "parsermodule.c"
      case 7: // $bb7
        var $46=$func; //@line 3451 "parsermodule.c"
        var $47=($46)!=0; //@line 3451 "parsermodule.c"
        var $48=HEAP[_pickle_constructor]; //@line 3451 "parsermodule.c"
        var $49=($48)!=0; //@line 3451 "parsermodule.c"
        var $or_cond=($47) & ($49);
        if ($or_cond) { __lastLabel__ = 7; __label__ = 8; break; } else { __lastLabel__ = 7; __label__ = 13; break; } //@line 3451 "parsermodule.c"
      case 8: // $bb9
        var $50=$pickler; //@line 3451 "parsermodule.c"
        var $51=($50)!=0; //@line 3451 "parsermodule.c"
        if ($51) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 3451 "parsermodule.c"
      case 9: // $bb10
        var $52=HEAP[_pickle_constructor]; //@line 3455 "parsermodule.c"
        var $53=$func; //@line 3455 "parsermodule.c"
        var $54=$pickler; //@line 3455 "parsermodule.c"
        var $55=_PyObject_CallFunctionObjArgs($53, allocate([_PyST_Type,0,0,0,$54,0,0,0,$52,0,0,0,0,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 3455 "parsermodule.c"
        $res=$55; //@line 3455 "parsermodule.c"
        var $56=$res; //@line 3457 "parsermodule.c"
        var $57=($56)!=0; //@line 3457 "parsermodule.c"
        if ($57) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 3457 "parsermodule.c"
      case 10: // $bb11
        var $58=$res; //@line 3457 "parsermodule.c"
        var $59=$58; //@line 3457 "parsermodule.c"
        var $60=HEAP[$59]; //@line 3457 "parsermodule.c"
        var $61=($60) - 1; //@line 3457 "parsermodule.c"
        var $62=$res; //@line 3457 "parsermodule.c"
        var $63=$62; //@line 3457 "parsermodule.c"
        HEAP[$63]=$61; //@line 3457 "parsermodule.c"
        var $64=$res; //@line 3457 "parsermodule.c"
        var $65=$64; //@line 3457 "parsermodule.c"
        var $66=HEAP[$65]; //@line 3457 "parsermodule.c"
        var $67=($66)==0; //@line 3457 "parsermodule.c"
        if ($67) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 3457 "parsermodule.c"
      case 11: // $bb12
        var $68=$res; //@line 3457 "parsermodule.c"
        var $69=$68+4; //@line 3457 "parsermodule.c"
        var $70=HEAP[$69]; //@line 3457 "parsermodule.c"
        var $71=$70+24; //@line 3457 "parsermodule.c"
        var $72=HEAP[$71]; //@line 3457 "parsermodule.c"
        var $73=$res; //@line 3457 "parsermodule.c"
        FUNCTION_TABLE[$72]($73); //@line 3457 "parsermodule.c"
        __label__ = 12; break; //@line 3457 "parsermodule.c"
      case 12: // $bb13thread_pre_split
        var $_pr=$func;
        __lastLabel__ = 12; __label__ = 13; break;
      case 13: // $bb13
        var $74=__lastLabel__ == 12 ? $_pr : ($46);
        var $75=($74)!=0; //@line 3459 "parsermodule.c"
        if ($75) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 3459 "parsermodule.c"
      case 14: // $bb14
        var $76=$func; //@line 3459 "parsermodule.c"
        var $77=$76; //@line 3459 "parsermodule.c"
        var $78=HEAP[$77]; //@line 3459 "parsermodule.c"
        var $79=($78) - 1; //@line 3459 "parsermodule.c"
        var $80=$func; //@line 3459 "parsermodule.c"
        var $81=$80; //@line 3459 "parsermodule.c"
        HEAP[$81]=$79; //@line 3459 "parsermodule.c"
        var $82=$func; //@line 3459 "parsermodule.c"
        var $83=$82; //@line 3459 "parsermodule.c"
        var $84=HEAP[$83]; //@line 3459 "parsermodule.c"
        var $85=($84)==0; //@line 3459 "parsermodule.c"
        if ($85) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 3459 "parsermodule.c"
      case 15: // $bb15
        var $86=$func; //@line 3459 "parsermodule.c"
        var $87=$86+4; //@line 3459 "parsermodule.c"
        var $88=HEAP[$87]; //@line 3459 "parsermodule.c"
        var $89=$88+24; //@line 3459 "parsermodule.c"
        var $90=HEAP[$89]; //@line 3459 "parsermodule.c"
        var $91=$func; //@line 3459 "parsermodule.c"
        FUNCTION_TABLE[$90]($91); //@line 3459 "parsermodule.c"
        __label__ = 16; break; //@line 3459 "parsermodule.c"
      case 16: // $bb16
        var $92=HEAP[_pickle_constructor]; //@line 3460 "parsermodule.c"
        var $93=($92)!=0; //@line 3460 "parsermodule.c"
        if ($93) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 3460 "parsermodule.c"
      case 17: // $bb17
        var $94=HEAP[_pickle_constructor]; //@line 3460 "parsermodule.c"
        var $95=$94; //@line 3460 "parsermodule.c"
        var $96=HEAP[$95]; //@line 3460 "parsermodule.c"
        var $97=($96) - 1; //@line 3460 "parsermodule.c"
        var $98=$94; //@line 3460 "parsermodule.c"
        HEAP[$98]=$97; //@line 3460 "parsermodule.c"
        var $99=$94; //@line 3460 "parsermodule.c"
        var $100=HEAP[$99]; //@line 3460 "parsermodule.c"
        var $101=($100)==0; //@line 3460 "parsermodule.c"
        if ($101) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 3460 "parsermodule.c"
      case 18: // $bb18
        var $102=HEAP[_pickle_constructor]; //@line 3460 "parsermodule.c"
        var $103=$102+4; //@line 3460 "parsermodule.c"
        var $104=HEAP[$103]; //@line 3460 "parsermodule.c"
        var $105=$104+24; //@line 3460 "parsermodule.c"
        var $106=HEAP[$105]; //@line 3460 "parsermodule.c"
        var $107=HEAP[_pickle_constructor]; //@line 3460 "parsermodule.c"
        FUNCTION_TABLE[$106]($107); //@line 3460 "parsermodule.c"
        __label__ = 19; break; //@line 3460 "parsermodule.c"
      case 19: // $bb19
        var $108=$pickler; //@line 3461 "parsermodule.c"
        var $109=($108)!=0; //@line 3461 "parsermodule.c"
        if ($109) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 3461 "parsermodule.c"
      case 20: // $bb20
        var $110=$pickler; //@line 3461 "parsermodule.c"
        var $111=$110; //@line 3461 "parsermodule.c"
        var $112=HEAP[$111]; //@line 3461 "parsermodule.c"
        var $113=($112) - 1; //@line 3461 "parsermodule.c"
        var $114=$pickler; //@line 3461 "parsermodule.c"
        var $115=$114; //@line 3461 "parsermodule.c"
        HEAP[$115]=$113; //@line 3461 "parsermodule.c"
        var $116=$pickler; //@line 3461 "parsermodule.c"
        var $117=$116; //@line 3461 "parsermodule.c"
        var $118=HEAP[$117]; //@line 3461 "parsermodule.c"
        var $119=($118)==0; //@line 3461 "parsermodule.c"
        if ($119) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 3461 "parsermodule.c"
      case 21: // $bb21
        var $120=$pickler; //@line 3461 "parsermodule.c"
        var $121=$120+4; //@line 3461 "parsermodule.c"
        var $122=HEAP[$121]; //@line 3461 "parsermodule.c"
        var $123=$122+24; //@line 3461 "parsermodule.c"
        var $124=HEAP[$123]; //@line 3461 "parsermodule.c"
        var $125=$pickler; //@line 3461 "parsermodule.c"
        FUNCTION_TABLE[$124]($125); //@line 3461 "parsermodule.c"
        __label__ = 22; break; //@line 3461 "parsermodule.c"
      case 22: // $bb22
        var $126=$copyreg; //@line 3462 "parsermodule.c"
        var $127=$126; //@line 3462 "parsermodule.c"
        var $128=HEAP[$127]; //@line 3462 "parsermodule.c"
        var $129=($128) - 1; //@line 3462 "parsermodule.c"
        var $130=$copyreg; //@line 3462 "parsermodule.c"
        var $131=$130; //@line 3462 "parsermodule.c"
        HEAP[$131]=$129; //@line 3462 "parsermodule.c"
        var $132=$copyreg; //@line 3462 "parsermodule.c"
        var $133=$132; //@line 3462 "parsermodule.c"
        var $134=HEAP[$133]; //@line 3462 "parsermodule.c"
        var $135=($134)==0; //@line 3462 "parsermodule.c"
        if ($135) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 3462 "parsermodule.c"
      case 23: // $bb23
        var $136=$copyreg; //@line 3462 "parsermodule.c"
        var $137=$136+4; //@line 3462 "parsermodule.c"
        var $138=HEAP[$137]; //@line 3462 "parsermodule.c"
        var $139=$138+24; //@line 3462 "parsermodule.c"
        var $140=HEAP[$139]; //@line 3462 "parsermodule.c"
        var $141=$copyreg; //@line 3462 "parsermodule.c"
        FUNCTION_TABLE[$140]($141); //@line 3462 "parsermodule.c"
        __label__ = 24; break; //@line 3462 "parsermodule.c"
      case 24: // $return
        ;
        return; //@line 3409 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initparser"] = _initparser;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_PyTuple_New,0,_PyTuple_SetItem,0,_PyList_New,0,_PyList_SetItem,0,_validate_test,0,_validate_old_test,0,_validate_fpdef,0,_validate_arith_expr,0,_validate_term,0,_validate_subscript,0,_validate_expr,0,_parser_free,0,_parser_getattr,0,_parser_compare,0,_parser_compilest,0,_parser_isexpr,0,_parser_issuite,0,_parser_st2list,0,_parser_st2tuple,0,_parser_ast2tuple,0,_parser_ast2list,0,_parser_compileast,0,_parser_expr,0,_parser_suite,0,_parser_tuple2ast,0,_parser_tuple2st,0,_parser__pickler,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_parser_copyright_string=allocate([67,111,112,121,114,105,103,104,116,32,49,57,57,53,45,49,57,57,54,32,98,121,32,86,105,114,103,105,110,105,97,32,80,111,108,121,116,101,99,104,110,105,99,32,73,110,115,116,105,116,117,116,101,32,38,32,83,116,97,116,101,10,85,110,105,118,101,114,115,105,116,121,44,32,66,108,97,99,107,115,98,117,114,103,44,32,86,105,114,103,105,110,105,97,44,32,85,83,65,44,32,97,110,100,32,70,114,101,100,32,76,46,32,68,114,97,107,101,44,32,74,114,46,44,32,82,101,115,116,111,110,44,10,86,105,114,103,105,110,105,97,44,32,85,83,65,46,32,32,80,111,114,116,105,111,110,115,32,99,111,112,121,114,105,103,104,116,32,49,57,57,49,45,49,57,57,53,32,98,121,32,83,116,105,99,104,116,105,110,103,32,77,97,116,104,101,109,97,116,105,115,99,104,10,67,101,110,116,114,117,109,44,32,65,109,115,116,101,114,100,97,109,44,32,84,104,101,32,78,101,116,104,101,114,108,97,110,100,115,46,0] /* Copyright 1995-1996  */, "i8", ALLOC_NORMAL);
_parser_doc_string=allocate([84,104,105,115,32,105,115,32,97,110,32,105,110,116,101,114,102,97,99,101,32,116,111,32,80,121,116,104,111,110,39,115,32,105,110,116,101,114,110,97,108,32,112,97,114,115,101,114,46,0] /* This is an interface */, "i8", ALLOC_NORMAL);
_parser_version_string=allocate([48,46,53,0] /* 0.5\00 */, "i8", ALLOC_NORMAL);
__str=allocate([117,110,114,101,99,111,103,110,105,122,101,100,32,112,97,114,115,101,32,116,114,101,101,32,110,111,100,101,32,116,121,112,101,0] /* unrecognized parse t */, "i8", ALLOC_NORMAL);
_parser_error=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str1=allocate([112,97,114,115,101,114,46,115,116,0] /* parser.st\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([73,110,116,101,114,109,101,100,105,97,116,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,32,80,121,116,104,111,110,32,112,97,114,115,101,32,116,114,101,101,46,0] /* Intermediate represe */, "i8", ALLOC_NORMAL);
_PyST_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str3=allocate([79,33,124,79,79,58,115,116,50,116,117,112,108,101,0] /* O!|OO:st2tuple\00 */, "i8", ALLOC_NORMAL);
_keywords_9402=allocate(16, "i8*", ALLOC_NORMAL);
__str4=allocate([97,115,116,0] /* ast\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([108,105,110,101,95,105,110,102,111,0] /* line_info\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([99,111,108,95,105,110,102,111,0] /* col_info\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([124,79,79,58,116,111,116,117,112,108,101,0] /* |OO:totuple\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([97,115,116,50,116,117,112,108,101,32,105,115,32,114,101,109,111,118,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,115,116,50,116,117,112,108,101,0] /* ast2tuple is removed */, "i8", ALLOC_NORMAL);
__str9=allocate([79,33,124,79,79,58,115,116,50,108,105,115,116,0] /* O!|OO:st2list\00 */, "i8", ALLOC_NORMAL);
_keywords_9452=allocate(16, "i8*", ALLOC_NORMAL);
__str10=allocate([124,79,79,58,116,111,108,105,115,116,0] /* |OO:tolist\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([97,115,116,50,108,105,115,116,32,105,115,32,114,101,109,111,118,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,115,116,50,108,105,115,116,0] /* ast2list is removed  */, "i8", ALLOC_NORMAL);
__str12=allocate([60,115,121,110,116,97,120,45,116,114,101,101,62,0] /* <syntax-tree>\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([79,33,124,115,58,99,111,109,112,105,108,101,115,116,0] /* O!|s:compilest\00 */, "i8", ALLOC_NORMAL);
_keywords_9503=allocate(12, "i8*", ALLOC_NORMAL);
__str14=allocate([102,105,108,101,110,97,109,101,0] /* filename\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([124,115,58,99,111,109,112,105,108,101,0] /* |s:compile\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([99,111,109,112,105,108,101,97,115,116,32,105,115,32,114,101,109,111,118,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,99,111,109,112,105,108,101,115,116,0] /* compileast is remove */, "i8", ALLOC_NORMAL);
__str17=allocate([79,33,58,105,115,101,120,112,114,0] /* O!:isexpr\00 */, "i8", ALLOC_NORMAL);
_keywords_9551=allocate(8, "i8*", ALLOC_NORMAL);
__str18=allocate([58,105,115,101,120,112,114,0] /* :isexpr\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([79,33,58,105,115,115,117,105,116,101,0] /* O!:issuite\00 */, "i8", ALLOC_NORMAL);
_keywords_9577=allocate(8, "i8*", ALLOC_NORMAL);
__str20=allocate([58,105,115,115,117,105,116,101,0] /* :issuite\00 */, "i8", ALLOC_NORMAL);
_parser_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0], ALLOC_NORMAL);
__str21=allocate([99,111,109,112,105,108,101,0] /* compile\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([67,111,109,112,105,108,101,32,116,104,105,115,32,83,84,32,111,98,106,101,99,116,32,105,110,116,111,32,97,32,99,111,100,101,32,111,98,106,101,99,116,46,0] /* Compile this ST obje */, "i8", ALLOC_NORMAL);
__str23=allocate([105,115,101,120,112,114,0] /* isexpr\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([68,101,116,101,114,109,105,110,101,115,32,105,102,32,116,104,105,115,32,83,84,32,111,98,106,101,99,116,32,119,97,115,32,99,114,101,97,116,101,100,32,102,114,111,109,32,97,110,32,101,120,112,114,101,115,115,105,111,110,46,0] /* Determines if this S */, "i8", ALLOC_NORMAL);
__str25=allocate([105,115,115,117,105,116,101,0] /* issuite\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([68,101,116,101,114,109,105,110,101,115,32,105,102,32,116,104,105,115,32,83,84,32,111,98,106,101,99,116,32,119,97,115,32,99,114,101,97,116,101,100,32,102,114,111,109,32,97,32,115,117,105,116,101,46,0] /* Determines if this S */, "i8", ALLOC_NORMAL);
__str27=allocate([116,111,108,105,115,116,0] /* tolist\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([67,114,101,97,116,101,115,32,97,32,108,105,115,116,45,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,116,104,105,115,32,83,84,46,0] /* Creates a list-tree  */, "i8", ALLOC_NORMAL);
__str29=allocate([116,111,116,117,112,108,101,0] /* totuple\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([67,114,101,97,116,101,115,32,97,32,116,117,112,108,101,45,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,116,104,105,115,32,83,84,46,0] /* Creates a tuple-tree */, "i8", ALLOC_NORMAL);
_keywords_9618=allocate(8, "i8*", ALLOC_NORMAL);
__str31=allocate([115,111,117,114,99,101,0] /* source\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([115,58,101,120,112,114,0] /* s:expr\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([115,58,115,117,105,116,101,0] /* s:suite\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([79,58,115,101,113,117,101,110,99,101,50,115,116,0] /* O:sequence2st\00 */, "i8", ALLOC_NORMAL);
_keywords_9672=allocate(8, "i8*", ALLOC_NORMAL);
__str35=allocate([115,101,113,117,101,110,99,101,0] /* sequence\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([115,101,113,117,101,110,99,101,50,115,116,40,41,32,114,101,113,117,105,114,101,115,32,97,32,115,105,110,103,108,101,32,115,101,113,117,101,110,99,101,32,97,114,103,117,109,101,110,116,0] /* sequence2st() requir */, "i8", ALLOC_NORMAL);
__str37=allocate([112,97,114,115,101,32,116,114,101,101,32,100,111,101,115,32,110,111,116,32,117,115,101,32,97,32,118,97,108,105,100,32,115,116,97,114,116,32,115,121,109,98,111,108,0] /* parse tree does not  */, "i8", ALLOC_NORMAL);
__str38=allocate([117,110,115,112,101,99,105,102,105,101,100,32,83,84,32,101,114,114,111,114,32,111,99,99,117,114,114,101,100,0] /* unspecified ST error */, "i8", ALLOC_NORMAL);
__str39=allocate([116,117,112,108,101,50,97,115,116,32,105,115,32,114,101,109,111,118,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,116,117,112,108,101,50,115,116,0] /* tuple2ast is removed */, "i8", ALLOC_NORMAL);
__str40=allocate([111,115,0] /* os\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([73,108,108,101,103,97,108,32,110,111,100,101,32,99,111,110,115,116,114,117,99,116,46,0] /* Illegal node constru */, "i8", ALLOC_NORMAL);
__str42=allocate([116,101,114,109,105,110,97,108,32,110,111,100,101,115,32,109,117,115,116,32,104,97,118,101,32,50,32,111,114,32,51,32,101,110,116,114,105,101,115,0] /* terminal nodes must  */, "i8", ALLOC_NORMAL);
__str43=allocate([115,101,99,111,110,100,32,105,116,101,109,32,105,110,32,116,101,114,109,105,110,97,108,32,110,111,100,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,44,32,102,111,117,110,100,32,37,115,0] /* second item in termi */, "i8", ALLOC_NORMAL);
__str44=allocate([116,104,105,114,100,32,105,116,101,109,32,105,110,32,116,101,114,109,105,110,97,108,32,110,111,100,101,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,101,114,44,32,102,111,117,110,100,32,37,115,0] /* third item in termin */, "i8", ALLOC_NORMAL);
__str45=allocate([117,110,107,110,111,119,110,32,110,111,100,101,32,116,121,112,101,46,0] /* unknown node type.\0 */, "i8", ALLOC_NORMAL);
__str46=allocate([117,110,115,117,112,112,111,114,116,101,100,32,110,117,109,98,101,114,32,111,102,32,99,104,105,108,100,32,110,111,100,101,115,0] /* unsupported number o */, "i8", ALLOC_NORMAL);
__str47=allocate([73,108,108,101,103,97,108,32,115,121,110,116,97,120,45,116,114,101,101,59,32,99,97,110,110,111,116,32,115,116,97,114,116,32,119,105,116,104,32,116,101,114,109,105,110,97,108,32,115,121,109,98,111,108,46,0] /* Illegal syntax-tree; */, "i8", ALLOC_NORMAL);
__str48=allocate([73,108,108,101,103,97,108,32,99,111,109,112,111,110,101,110,116,32,116,117,112,108,101,46,0] /* Illegal component tu */, "i8", ALLOC_NORMAL);
__str49=allocate([69,120,112,101,99,116,101,100,32,110,111,100,101,32,116,121,112,101,32,37,100,44,32,103,111,116,32,37,100,46,0] /* Expected node type % */, "i8", ALLOC_NORMAL);
__str50=allocate([73,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,99,104,105,108,100,114,101,110,32,102,111,114,32,37,115,32,110,111,100,101,46,0] /* Illegal number of ch */, "i8", ALLOC_NORMAL);
__str51=allocate([73,108,108,101,103,97,108,32,116,101,114,109,105,110,97,108,58,32,101,120,112,101,99,116,101,100,32,34,37,115,34,0] /* Illegal terminal: ex */, "i8", ALLOC_NORMAL);
__str52=allocate([44,0] /* ,\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([99,108,97,115,115,0] /* class\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([58,0] /* :\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([40,0] /* (\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([41,0] /* )\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([105,102,0] /* if\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([101,108,115,101,0] /* else\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([101,108,105,102,0] /* elif\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([112,97,114,97,109,101,116,101,114,115,0] /* parameters\00 */, "i8", ALLOC_NORMAL);
__str61=allocate(1, "i8", ALLOC_NORMAL);
__str62=allocate([115,117,105,116,101,0] /* suite\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([116,101,115,116,108,105,115,116,0] /* testlist\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([116,101,115,116,108,105,115,116,49,0] /* testlist1\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([116,101,115,116,108,105,115,116,95,115,97,102,101,0] /* testlist_safe\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([101,120,112,101,99,116,101,100,32,118,97,114,105,97,98,108,101,32,97,114,103,117,109,101,110,116,32,116,114,97,105,108,101,114,32,102,111,114,32,118,97,114,97,114,103,115,108,105,115,116,0] /* expected variable ar */, "i8", ALLOC_NORMAL);
__str67=allocate([42,42,0] /* __\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([105,108,108,101,103,97,108,32,118,97,114,105,97,98,108,101,32,97,114,103,117,109,101,110,116,32,116,114,97,105,108,101,114,32,102,111,114,32,118,97,114,97,114,103,115,108,105,115,116,0] /* illegal variable arg */, "i8", ALLOC_NORMAL);
__str69=allocate([118,97,114,97,114,103,115,108,105,115,116,32,109,105,115,115,105,110,103,32,99,104,105,108,100,32,110,111,100,101,115,0] /* varargslist missing  */, "i8", ALLOC_NORMAL);
__str70=allocate([61,0] /* =\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([105,108,108,101,103,97,108,32,102,111,114,109,97,116,105,111,110,32,102,111,114,32,118,97,114,97,114,103,115,108,105,115,116,0] /* illegal formation fo */, "i8", ALLOC_NORMAL);
__str72=allocate([108,105,115,116,95,105,116,101,114,0] /* list_iter\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([99,111,109,112,95,105,116,101,114,0] /* comp_iter\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([108,105,115,116,95,102,111,114,0] /* list_for\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([102,111,114,0] /* for\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([105,110,0] /* in\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([99,111,109,112,95,102,111,114,0] /* comp_for\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([108,105,115,116,95,105,102,0] /* list_if\00 */, "i8", ALLOC_NORMAL);
__str79=allocate([99,111,109,112,95,105,102,0] /* comp_if\00 */, "i8", ALLOC_NORMAL);
__str80=allocate([102,112,100,101,102,0] /* fpdef\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([102,112,108,105,115,116,0] /* fplist\00 */, "i8", ALLOC_NORMAL);
__str82=allocate([115,116,109,116,0] /* stmt\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([115,105,109,112,108,101,95,115,116,109,116,0] /* simple_stmt\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([59,0] /* ;\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([115,109,97,108,108,95,115,116,109,116,0] /* small_stmt\00 */, "i8", ALLOC_NORMAL);
__str86=allocate([105,108,108,101,103,97,108,32,115,109,97,108,108,95,115,116,109,116,32,99,104,105,108,100,32,116,121,112,101,0] /* illegal small_stmt c */, "i8", ALLOC_NORMAL);
__str87=allocate([85,110,114,101,99,111,103,110,105,122,101,100,32,99,104,105,108,100,32,110,111,100,101,32,111,102,32,115,109,97,108,108,95,115,116,109,116,58,32,37,100,46,0] /* Unrecognized child n */, "i8", ALLOC_NORMAL);
__str88=allocate([99,111,109,112,111,117,110,100,95,115,116,109,116,0] /* compound_stmt\00 */, "i8", ALLOC_NORMAL);
__str89=allocate([73,108,108,101,103,97,108,32,99,111,109,112,111,117,110,100,32,115,116,97,116,101,109,101,110,116,32,116,121,112,101,58,32,37,100,46,0] /* Illegal compound sta */, "i8", ALLOC_NORMAL);
__str90=allocate([97,117,103,97,115,115,105,103,110,0] /* augassign\00 */, "i8", ALLOC_NORMAL);
__str91=allocate([43,61,0] /* +=\00 */, "i8", ALLOC_NORMAL);
__str92=allocate([45,61,0] /* -=\00 */, "i8", ALLOC_NORMAL);
__str93=allocate([42,61,0] /* _=\00 */, "i8", ALLOC_NORMAL);
__str94=allocate([47,61,0] /* /=\00 */, "i8", ALLOC_NORMAL);
__str95=allocate([47,47,61,0] /* //=\00 */, "i8", ALLOC_NORMAL);
__str96=allocate([37,61,0] /* %=\00 */, "i8", ALLOC_NORMAL);
__str97=allocate([38,61,0] /* &=\00 */, "i8", ALLOC_NORMAL);
__str98=allocate([124,61,0] /* |=\00 */, "i8", ALLOC_NORMAL);
__str99=allocate([94,61,0] /* ^=\00 */, "i8", ALLOC_NORMAL);
__str100=allocate([60,60,61,0] /* <<=\00 */, "i8", ALLOC_NORMAL);
__str101=allocate([62,62,61,0] /* >>=\00 */, "i8", ALLOC_NORMAL);
__str102=allocate([42,42,61,0] /* __=\00 */, "i8", ALLOC_NORMAL);
__str103=allocate([105,108,108,101,103,97,108,32,97,117,103,109,101,110,116,101,100,32,97,115,115,105,103,110,109,101,110,116,32,111,112,101,114,97,116,111,114,0] /* illegal augmented as */, "i8", ALLOC_NORMAL);
__str104=allocate([112,114,105,110,116,0] /* print\00 */, "i8", ALLOC_NORMAL);
__str105=allocate([112,114,105,110,116,95,115,116,109,116,0] /* print_stmt\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([100,101,108,95,115,116,109,116,0] /* del_stmt\00 */, "i8", ALLOC_NORMAL);
__str107=allocate([100,101,108,0] /* del\00 */, "i8", ALLOC_NORMAL);
__str108=allocate([114,101,116,117,114,110,0] /* return\00 */, "i8", ALLOC_NORMAL);
__str109=allocate([114,97,105,115,101,0] /* raise\00 */, "i8", ALLOC_NORMAL);
__str110=allocate([121,105,101,108,100,0] /* yield\00 */, "i8", ALLOC_NORMAL);
__str111=allocate([121,105,101,108,100,95,115,116,109,116,0] /* yield_stmt\00 */, "i8", ALLOC_NORMAL);
__str112=allocate([97,115,0] /* as\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([105,109,112,111,114,116,95,97,115,95,110,97,109,101,0] /* import_as_name\00 */, "i8", ALLOC_NORMAL);
__str114=allocate([46,0] /* .\00 */, "i8", ALLOC_NORMAL);
__str115=allocate([105,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,99,104,105,108,100,114,101,110,32,102,111,114,32,100,111,116,116,101,100,95,97,115,95,110,97,109,101,0] /* illegal number of ch */, "i8", ALLOC_NORMAL);
__str116=allocate([105,109,112,111,114,116,95,110,97,109,101,0] /* import_name\00 */, "i8", ALLOC_NORMAL);
__str117=allocate([105,109,112,111,114,116,0] /* import\00 */, "i8", ALLOC_NORMAL);
__str118=allocate([102,114,111,109,0] /* from\00 */, "i8", ALLOC_NORMAL);
__str119=allocate([105,109,112,111,114,116,95,115,116,109,116,0] /* import_stmt\00 */, "i8", ALLOC_NORMAL);
__str120=allocate([105,108,108,101,103,97,108,32,105,109,112,111,114,116,95,115,116,109,116,32,99,104,105,108,100,32,116,121,112,101,0] /* illegal import_stmt  */, "i8", ALLOC_NORMAL);
__str121=allocate([85,110,114,101,99,111,103,110,105,122,101,100,32,99,104,105,108,100,32,110,111,100,101,32,111,102,32,105,109,112,111,114,116,95,115,116,109,116,58,32,37,100,46,0] /* Unrecognized child n */, "i8", ALLOC_NORMAL);
__str122=allocate([105,108,108,101,103,97,108,32,103,108,111,98,97,108,32,115,116,97,116,101,109,101,110,116,0] /* illegal global state */, "i8", ALLOC_NORMAL);
__str123=allocate([103,108,111,98,97,108,0] /* global\00 */, "i8", ALLOC_NORMAL);
__str124=allocate([101,120,101,99,0] /* exec\00 */, "i8", ALLOC_NORMAL);
__str125=allocate([105,108,108,101,103,97,108,32,101,120,101,99,32,115,116,97,116,101,109,101,110,116,0] /* illegal exec stateme */, "i8", ALLOC_NORMAL);
__str126=allocate([97,115,115,101,114,116,0] /* assert\00 */, "i8", ALLOC_NORMAL);
__str127=allocate([105,108,108,101,103,97,108,32,97,115,115,101,114,116,32,115,116,97,116,101,109,101,110,116,0] /* illegal assert state */, "i8", ALLOC_NORMAL);
__str128=allocate([119,104,105,108,101,0] /* while\00 */, "i8", ALLOC_NORMAL);
__str129=allocate([116,114,121,0] /* try\00 */, "i8", ALLOC_NORMAL);
__str130=allocate([101,120,99,101,112,116,0] /* except\00 */, "i8", ALLOC_NORMAL);
__str131=allocate([73,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,99,104,105,108,100,114,101,110,32,102,111,114,32,116,114,121,47,37,115,32,110,111,100,101,46,0] /* Illegal number of ch */, "i8", ALLOC_NORMAL);
__str132=allocate([102,105,110,97,108,108,121,0] /* finally\00 */, "i8", ALLOC_NORMAL);
__str133=allocate([116,114,121,47,102,105,110,97,108,108,121,0] /* try/finally\00 */, "i8", ALLOC_NORMAL);
__str134=allocate([116,114,121,47,101,120,99,101,112,116,47,102,105,110,97,108,108,121,0] /* try/except/finally\0 */, "i8", ALLOC_NORMAL);
__str135=allocate([111,114,0] /* or\00 */, "i8", ALLOC_NORMAL);
__str136=allocate([97,110,100,0] /* and\00 */, "i8", ALLOC_NORMAL);
__str137=allocate([110,111,116,0] /* not\00 */, "i8", ALLOC_NORMAL);
__str138=allocate([105,115,0] /* is\00 */, "i8", ALLOC_NORMAL);
__str139=allocate([105,108,108,101,103,97,108,32,111,112,101,114,97,116,111,114,32,39,37,115,39,0] /* illegal operator '%s */, "i8", ALLOC_NORMAL);
__str140=allocate([105,108,108,101,103,97,108,32,99,111,109,112,97,114,105,115,111,110,32,111,112,101,114,97,116,111,114,32,116,121,112,101,0] /* illegal comparison o */, "i8", ALLOC_NORMAL);
__str141=allocate([99,111,109,112,95,111,112,0] /* comp_op\00 */, "i8", ALLOC_NORMAL);
__str142=allocate([117,110,107,110,111,119,110,32,99,111,109,112,97,114,105,115,111,110,32,111,112,101,114,97,116,111,114,0] /* unknown comparison o */, "i8", ALLOC_NORMAL);
__str143=allocate([124,0] /* |\00 */, "i8", ALLOC_NORMAL);
__str144=allocate([94,0] /* ^\00 */, "i8", ALLOC_NORMAL);
__str145=allocate([38,0] /* &\00 */, "i8", ALLOC_NORMAL);
__str146=allocate([105,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,110,111,100,101,115,32,102,111,114,32,39,112,111,119,101,114,39,0] /* illegal number of no */, "i8", ALLOC_NORMAL);
__str147=allocate([97,116,111,109,0] /* atom\00 */, "i8", ALLOC_NORMAL);
__str148=allocate([105,108,108,101,103,97,108,32,108,105,115,116,32,100,105,115,112,108,97,121,32,97,116,111,109,0] /* illegal list display */, "i8", ALLOC_NORMAL);
__str149=allocate([109,105,115,115,105,110,103,32,99,104,105,108,100,32,110,111,100,101,115,32,111,102,32,108,105,115,116,109,97,107,101,114,0] /* missing child nodes  */, "i8", ALLOC_NORMAL);
__str150=allocate([105,108,108,101,103,97,108,32,116,114,97,105,108,105,110,103,32,110,111,100,101,115,32,102,111,114,32,108,105,115,116,109,97,107,101,114,0] /* illegal trailing nod */, "i8", ALLOC_NORMAL);
__str151=allocate([109,105,115,115,105,110,103,32,99,104,105,108,100,32,110,111,100,101,115,32,111,102,32,116,101,115,116,108,105,115,116,95,99,111,109,112,0] /* missing child nodes  */, "i8", ALLOC_NORMAL);
__str152=allocate([105,108,108,101,103,97,108,32,116,114,97,105,108,105,110,103,32,110,111,100,101,115,32,102,111,114,32,116,101,115,116,108,105,115,116,95,99,111,109,112,0] /* illegal trailing nod */, "i8", ALLOC_NORMAL);
__str153=allocate([64,0] /* @\00 */, "i8", ALLOC_NORMAL);
__str154=allocate([119,105,116,104,0] /* with\00 */, "i8", ALLOC_NORMAL);
__str155=allocate([100,101,102,0] /* def\00 */, "i8", ALLOC_NORMAL);
__str156=allocate([108,97,109,98,100,97,0] /* lambda\00 */, "i8", ALLOC_NORMAL);
__str157=allocate([108,97,109,98,100,101,102,0] /* lambdef\00 */, "i8", ALLOC_NORMAL);
__str158=allocate([111,108,100,95,108,97,109,98,100,101,102,0] /* old_lambdef\00 */, "i8", ALLOC_NORMAL);
__str159=allocate([97,114,103,108,105,115,116,0] /* arglist\00 */, "i8", ALLOC_NORMAL);
__str160=allocate([110,101,101,100,32,39,40,39,44,32,39,41,39,32,102,111,114,32,103,101,110,101,114,97,116,111,114,32,101,120,112,114,101,115,115,105,111,110,0] /* need '(', ')' for ge */, "i8", ALLOC_NORMAL);
__str161=allocate([105,108,108,101,103,97,108,32,97,114,103,108,105,115,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,32,40,101,120,116,114,97,32,115,116,117,102,102,32,111,110,32,101,110,100,41,0] /* illegal arglist spec */, "i8", ALLOC_NORMAL);
__str162=allocate([42,0] /* _\00 */, "i8", ALLOC_NORMAL);
__str163=allocate([105,108,108,101,103,97,108,32,117,115,101,32,111,102,32,39,42,39,32,105,110,32,97,114,103,108,105,115,116,0] /* illegal use of '_' i */, "i8", ALLOC_NORMAL);
__str164=allocate([105,108,108,101,103,97,108,32,117,115,101,32,111,102,32,39,42,42,39,32,105,110,32,97,114,103,108,105,115,116,0] /* illegal use of '__'  */, "i8", ALLOC_NORMAL);
__str165=allocate([105,108,108,101,103,97,108,32,97,114,103,108,105,115,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,0] /* illegal arglist spec */, "i8", ALLOC_NORMAL);
__str166=allocate([116,114,97,105,108,101,114,0] /* trailer\00 */, "i8", ALLOC_NORMAL);
__str167=allocate([115,117,98,115,99,114,105,112,116,108,105,115,116,0] /* subscriptlist\00 */, "i8", ALLOC_NORMAL);
__str168=allocate([105,110,118,97,108,105,100,32,110,117,109,98,101,114,32,111,102,32,97,114,103,117,109,101,110,116,115,32,102,111,114,32,115,117,98,115,99,114,105,112,116,32,110,111,100,101,0] /* invalid number of ar */, "i8", ALLOC_NORMAL);
__str169=allocate([115,117,98,115,99,114,105,112,116,0] /* subscript\00 */, "i8", ALLOC_NORMAL);
__str170=allocate([115,108,105,99,101,111,112,0] /* sliceop\00 */, "i8", ALLOC_NORMAL);
__str171=allocate([101,120,112,114,108,105,115,116,0] /* exprlist\00 */, "i8", ALLOC_NORMAL);
__str172=allocate([110,99,104,32,62,32,48,0] /* nch > 0\00 */, "i8", ALLOC_NORMAL);
__str173=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,112,97,114,115,101,114,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/p */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___13794=allocate([118,97,108,105,100,97,116,101,95,100,105,99,116,111,114,115,101,116,109,97,107,101,114,0] /* validate_dictorsetma */, "i8", ALLOC_NORMAL);
__str174=allocate([105,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,110,111,100,101,115,32,102,111,114,32,100,105,99,116,111,114,115,101,116,109,97,107,101,114,0] /* illegal number of no */, "i8", ALLOC_NORMAL);
__str175=allocate([105,108,108,101,103,97,108,32,116,114,97,105,108,105,110,103,32,110,111,100,101,115,32,102,111,114,32,100,105,99,116,111,114,115,101,116,109,97,107,101,114,0] /* illegal trailing nod */, "i8", ALLOC_NORMAL);
__str176=allocate([102,108,111,119,95,115,116,109,116,0] /* flow_stmt\00 */, "i8", ALLOC_NORMAL);
__str177=allocate([105,108,108,101,103,97,108,32,102,108,111,119,95,115,116,109,116,32,116,121,112,101,0] /* illegal flow_stmt ty */, "i8", ALLOC_NORMAL);
__str178=allocate([112,97,115,115,0] /* pass\00 */, "i8", ALLOC_NORMAL);
__str179=allocate([98,114,101,97,107,0] /* break\00 */, "i8", ALLOC_NORMAL);
__str180=allocate([99,111,110,116,105,110,117,101,0] /* continue\00 */, "i8", ALLOC_NORMAL);
__str181=allocate([117,110,114,101,99,111,103,110,105,122,101,100,32,110,111,100,101,32,116,121,112,101,0] /* unrecognized node ty */, "i8", ALLOC_NORMAL);
__str182=allocate([99,111,117,108,100,32,110,111,116,32,118,97,108,105,100,97,116,101,32,101,120,112,114,101,115,115,105,111,110,32,116,117,112,108,101,0] /* could not validate e */, "i8", ALLOC_NORMAL);
__str183=allocate([86,65,76,73,68,65,84,73,79,78,32,70,65,73,76,85,82,69,58,32,114,101,112,111,114,116,32,116,104,105,115,32,116,111,32,116,104,101,32,109,97,105,110,116,97,105,110,101,114,33,0] /* VALIDATION FAILURE:  */, "i8", ALLOC_NORMAL);
__str184=allocate([69,114,114,111,114,32,80,97,114,115,105,110,103,32,101,110,99,111,100,105,110,103,95,100,101,99,108,0] /* Error Parsing encodi */, "i8", ALLOC_NORMAL);
_pickle_constructor=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str185=allocate([79,33,58,95,112,105,99,107,108,101,114,0] /* O!:_pickler\00 */, "i8", ALLOC_NORMAL);
__str186=allocate([79,105,0] /* Oi\00 */, "i8", ALLOC_NORMAL);
__str187=allocate([79,40,79,41,0] /* O(O)\00 */, "i8", ALLOC_NORMAL);
_parser_functions=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0], ALLOC_NORMAL);
__str188=allocate([97,115,116,50,116,117,112,108,101,0] /* ast2tuple\00 */, "i8", ALLOC_NORMAL);
__str189=allocate([67,114,101,97,116,101,115,32,97,32,116,117,112,108,101,45,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,83,84,46,0] /* Creates a tuple-tree */, "i8", ALLOC_NORMAL);
__str190=allocate([97,115,116,50,108,105,115,116,0] /* ast2list\00 */, "i8", ALLOC_NORMAL);
__str191=allocate([67,114,101,97,116,101,115,32,97,32,108,105,115,116,45,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,83,84,46,0] /* Creates a list-tree  */, "i8", ALLOC_NORMAL);
__str192=allocate([99,111,109,112,105,108,101,97,115,116,0] /* compileast\00 */, "i8", ALLOC_NORMAL);
__str193=allocate([67,111,109,112,105,108,101,115,32,97,110,32,83,84,32,111,98,106,101,99,116,32,105,110,116,111,32,97,32,99,111,100,101,32,111,98,106,101,99,116,46,0] /* Compiles an ST objec */, "i8", ALLOC_NORMAL);
__str194=allocate([99,111,109,112,105,108,101,115,116,0] /* compilest\00 */, "i8", ALLOC_NORMAL);
__str195=allocate([101,120,112,114,0] /* expr\00 */, "i8", ALLOC_NORMAL);
__str196=allocate([67,114,101,97,116,101,115,32,97,110,32,83,84,32,111,98,106,101,99,116,32,102,114,111,109,32,97,110,32,101,120,112,114,101,115,115,105,111,110,46,0] /* Creates an ST object */, "i8", ALLOC_NORMAL);
__str197=allocate([68,101,116,101,114,109,105,110,101,115,32,105,102,32,97,110,32,83,84,32,111,98,106,101,99,116,32,119,97,115,32,99,114,101,97,116,101,100,32,102,114,111,109,32,97,110,32,101,120,112,114,101,115,115,105,111,110,46,0] /* Determines if an ST  */, "i8", ALLOC_NORMAL);
__str198=allocate([68,101,116,101,114,109,105,110,101,115,32,105,102,32,97,110,32,83,84,32,111,98,106,101,99,116,32,119,97,115,32,99,114,101,97,116,101,100,32,102,114,111,109,32,97,32,115,117,105,116,101,46,0] /* Determines if an ST  */, "i8", ALLOC_NORMAL);
__str199=allocate([67,114,101,97,116,101,115,32,97,110,32,83,84,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,115,117,105,116,101,46,0] /* Creates an ST object */, "i8", ALLOC_NORMAL);
__str200=allocate([115,101,113,117,101,110,99,101,50,97,115,116,0] /* sequence2ast\00 */, "i8", ALLOC_NORMAL);
__str201=allocate([67,114,101,97,116,101,115,32,97,110,32,83,84,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,46,0] /* Creates an ST object */, "i8", ALLOC_NORMAL);
__str202=allocate([115,101,113,117,101,110,99,101,50,115,116,0] /* sequence2st\00 */, "i8", ALLOC_NORMAL);
__str203=allocate([115,116,50,116,117,112,108,101,0] /* st2tuple\00 */, "i8", ALLOC_NORMAL);
__str204=allocate([115,116,50,108,105,115,116,0] /* st2list\00 */, "i8", ALLOC_NORMAL);
__str205=allocate([116,117,112,108,101,50,97,115,116,0] /* tuple2ast\00 */, "i8", ALLOC_NORMAL);
__str206=allocate([116,117,112,108,101,50,115,116,0] /* tuple2st\00 */, "i8", ALLOC_NORMAL);
__str207=allocate([95,112,105,99,107,108,101,114,0] /* _pickler\00 */, "i8", ALLOC_NORMAL);
__str208=allocate([82,101,116,117,114,110,115,32,116,104,101,32,112,105,99,107,108,101,32,109,97,103,105,99,32,116,111,32,97,108,108,111,119,32,83,84,32,111,98,106,101,99,116,115,32,116,111,32,98,101,32,112,105,99,107,108,101,100,46,0] /* Returns the pickle m */, "i8", ALLOC_NORMAL);
__str209=allocate([112,97,114,115,101,114,0] /* parser\00 */, "i8", ALLOC_NORMAL);
__str210=allocate([112,97,114,115,101,114,46,80,97,114,115,101,114,69,114,114,111,114,0] /* parser.ParserError\0 */, "i8", ALLOC_NORMAL);
__str211=allocate([80,97,114,115,101,114,69,114,114,111,114,0] /* ParserError\00 */, "i8", ALLOC_NORMAL);
__str212=allocate([65,83,84,84,121,112,101,0] /* ASTType\00 */, "i8", ALLOC_NORMAL);
__str213=allocate([83,84,84,121,112,101,0] /* STType\00 */, "i8", ALLOC_NORMAL);
__str214=allocate([95,95,99,111,112,121,114,105,103,104,116,95,95,0] /* __copyright__\00 */, "i8", ALLOC_NORMAL);
__str215=allocate([95,95,100,111,99,95,95,0] /* __doc__\00 */, "i8", ALLOC_NORMAL);
__str216=allocate([95,95,118,101,114,115,105,111,110,95,95,0] /* __version__\00 */, "i8", ALLOC_NORMAL);
__str217=allocate([99,111,112,121,95,114,101,103,0] /* copy_reg\00 */, "i8", ALLOC_NORMAL);
__str218=allocate([112,105,99,107,108,101,0] /* pickle\00 */, "i8", ALLOC_NORMAL);
HEAP[_PyST_Type+12]=__str1;
HEAP[_PyST_Type+24]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_PyST_Type+32]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_PyST_Type+40]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_PyST_Type+88]=__str2;
HEAP[_keywords_9402]=__str4;
HEAP[_keywords_9402+4]=__str5;
HEAP[_keywords_9402+8]=__str6;
HEAP[_keywords_9452]=__str4;
HEAP[_keywords_9452+4]=__str5;
HEAP[_keywords_9452+8]=__str6;
HEAP[_keywords_9503]=__str4;
HEAP[_keywords_9503+4]=__str14;
HEAP[_keywords_9551]=__str4;
HEAP[_keywords_9577]=__str4;
HEAP[_parser_methods]=__str21;
HEAP[_parser_methods+4]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_parser_methods+12]=__str22;
HEAP[_parser_methods+16]=__str23;
HEAP[_parser_methods+20]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_parser_methods+28]=__str24;
HEAP[_parser_methods+32]=__str25;
HEAP[_parser_methods+36]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_parser_methods+44]=__str26;
HEAP[_parser_methods+48]=__str27;
HEAP[_parser_methods+52]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_parser_methods+60]=__str28;
HEAP[_parser_methods+64]=__str29;
HEAP[_parser_methods+68]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_parser_methods+76]=__str30;
HEAP[_keywords_9618]=__str31;
HEAP[_keywords_9672]=__str35;
HEAP[_parser_functions]=__str188;
HEAP[_parser_functions+4]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_parser_functions+12]=__str189;
HEAP[_parser_functions+16]=__str190;
HEAP[_parser_functions+20]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_parser_functions+28]=__str191;
HEAP[_parser_functions+32]=__str192;
HEAP[_parser_functions+36]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_parser_functions+44]=__str193;
HEAP[_parser_functions+48]=__str194;
HEAP[_parser_functions+52]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_parser_functions+60]=__str193;
HEAP[_parser_functions+64]=__str195;
HEAP[_parser_functions+68]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_parser_functions+76]=__str196;
HEAP[_parser_functions+80]=__str23;
HEAP[_parser_functions+84]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_parser_functions+92]=__str197;
HEAP[_parser_functions+96]=__str25;
HEAP[_parser_functions+100]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_parser_functions+108]=__str198;
HEAP[_parser_functions+112]=__str62;
HEAP[_parser_functions+116]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_parser_functions+124]=__str199;
HEAP[_parser_functions+128]=__str200;
HEAP[_parser_functions+132]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_parser_functions+140]=__str201;
HEAP[_parser_functions+144]=__str202;
HEAP[_parser_functions+148]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_parser_functions+156]=__str201;
HEAP[_parser_functions+160]=__str203;
HEAP[_parser_functions+164]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_parser_functions+172]=__str189;
HEAP[_parser_functions+176]=__str204;
HEAP[_parser_functions+180]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_parser_functions+188]=__str191;
HEAP[_parser_functions+192]=__str205;
HEAP[_parser_functions+196]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_parser_functions+204]=__str201;
HEAP[_parser_functions+208]=__str206;
HEAP[_parser_functions+212]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_parser_functions+220]=__str201;
HEAP[_parser_functions+224]=__str207;
HEAP[_parser_functions+228]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_parser_functions+236]=__str208;

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
