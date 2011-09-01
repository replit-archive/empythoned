<<<<<<< HEAD
(function(g){function e(a,b,c){var e;for(e=-1;;)switch(e){case -1:var d,f,g;d=a;f=b;g=_PyInt_FromLong(c);e=g==0?2:1;break;case 1:e=_PyDict_SetItemString(d,f,g)!=0?2:3;break;case 2:_PyErr_Clear();e=3;break;case 3:e=g!=0?4:6;break;case 4:HEAP[g]-=1;e=HEAP[g]==0?5:6;break;case 5:FUNCTION_TABLE[HEAP[HEAP[g+4]+24]](g);e=6;break;case 6:return;default:assert(0,"bad label: "+e)}}function b(){c=allocate([101,120,112,101,99,116,101,100,32,115,116,114,105,
110,103,44,32,102,111,117,110,100,32,37,46,50,48,48,115,0],"i8",ALLOC_NORMAL);d=allocate([97,116,32,108,101,97,115,116,32,97,32,110,97,109,101,32,105,115,32,110,101,101,100,101,100,0],"i8",ALLOC_NORMAL);f=allocate([102,117,110,99,116,105,111,110,32,110,97,109,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0],"i8",ALLOC_NORMAL);h=allocate([116,111,111,32,109,97,110,121,32,97,114,103,117,109,101,110,116,115,32,40,109,97,120,32,49,48,41,0],"i8",ALLOC_NORMAL);j=allocate([97,114,103,
117,109,101,110,116,115,32,109,117,115,116,32,98,101,32,105,110,116,44,32,115,116,114,105,110,103,32,111,114,32,78,111,110,101,0],"i8",ALLOC_NORMAL);k=allocate([99,97,108,108,0],"i8",ALLOC_NORMAL);l=allocate([115,121,109,0],"i8",ALLOC_NORMAL);m=allocate([99,108,111,115,101,0],"i8",ALLOC_NORMAL);n=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);o=allocate([100,108,46,100,108,0],"i8",ALLOC_NORMAL);p=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",
0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8",
"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],
ALLOC_NORMAL);q=allocate([122,58,111,112,101,110,0],"i8",ALLOC_NORMAL);r=allocate([122,105,58,111,112,101,110,0],"i8",ALLOC_NORMAL);u=allocate([100,108,111,112,101,110,40,41,32,101,114,114,111,114,0],"i8",ALLOC_NORMAL);s=allocate(1,"%struct.PyObject*",ALLOC_NORMAL);t=allocate([111,112,101,110,0],"i8",ALLOC_NORMAL);v=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8",
"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);w=allocate([116,104,101,32,100,108,32,109,111,100,117,108,101,32,104,97,115,32,98,101,101,110,32,114,101,109,111,118,101,100,32,105,110,32,80,121,116,104,111,110,32,51,46,48,59,32,117,115,101,32,116,104,101,32,99,116,121,112,101,115,32,109,111,100,117,108,101,32,105,110,115,116,101,97,100,0],"i8",ALLOC_NORMAL);x=allocate([100,108,0],"i8",ALLOC_NORMAL);y=allocate([100,
108,46,101,114,114,111,114,0],"i8",ALLOC_NORMAL);z=allocate([101,114,114,111,114,0],"i8",ALLOC_NORMAL);C=allocate([82,84,76,68,95,76,65,90,89,0],"i8",ALLOC_NORMAL);A=allocate([82,84,76,68,95,78,79,87,0],"i8",ALLOC_NORMAL);G=allocate([82,84,76,68,95,78,79,76,79,65,68,0],"i8",ALLOC_NORMAL);E=allocate([82,84,76,68,95,71,76,79,66,65,76,0],"i8",ALLOC_NORMAL);D=allocate([82,84,76,68,95,76,79,67,65,76,0],"i8",ALLOC_NORMAL);R=allocate([82,84,76,68,95,78,79,68,69,76,69,84,69,0],"i8",ALLOC_NORMAL);HEAP[n]=
k;HEAP[n+4]=g+2;HEAP[n+16]=l;HEAP[n+20]=g+4;HEAP[n+32]=m;HEAP[n+36]=g+6;HEAP[p+12]=o;HEAP[p+24]=g+8;HEAP[p+32]=g+10;HEAP[v]=t;HEAP[v+4]=g+12}var a={arguments:[]},c,d,f,h,j,k,l,m,n,o,p,q,r,u,s,t,v,w,x,y,z,C,A,G,E,D,R;a._initdl=function(){var a;for(a=-1;;)switch(a){case -1:var b,c;a=HEAP[_Py_Py3kWarningFlag]!=0?1:2;break;case 1:a=_PyErr_WarnEx(HEAP[_PyExc_DeprecationWarning],w,2)<0?4:2;break;case 2:HEAP[p+4]=_PyType_Type;b=a=_Py_InitModule4(x,v,0,0,1013);a=a==0?4:3;break;case 3:a=_PyModule_GetDict(b);
c=_PyErr_NewException(y,0,0);HEAP[s]=c;_PyDict_SetItemString(a,z,c);c=_PyInt_FromLong(1);_PyDict_SetItemString(a,C,c);e(a,A,2);e(a,G,4);e(a,E,256);e(a,D,0);e(a,R,4096);a=4;break;case 4:return;default:assert(0,"bad label: "+a)}};FUNCTION_TABLE=FUNCTION_TABLE.concat([0,0,function(a,b){var c=STACKTOP;STACKTOP+=40;_memset(c,0,40);var e;for(e=-1;;)switch(e){case -1:var g,k,l,m,n,o=c,p,q,r;g=a;k=b;q=_PyTuple_Size(k);e=q<=0?1:2;break;case 1:_PyErr_SetString(HEAP[_PyExc_TypeError],d);l=0;e=21;break;case 2:m=
_PyTuple_GetItem(k,0);e=(HEAP[HEAP[m+4]+84]&134217728)==0?3:4;break;case 3:_PyErr_SetString(HEAP[_PyExc_TypeError],f);l=0;e=21;break;case 4:n=_PyString_AsString(m);n=_dlsym(HEAP[g+8],n);e=n==0?5:6;break;case 5:l=_dlerror();_PyErr_SetString(HEAP[_PyExc_ValueError],l);l=0;e=21;break;case 6:e=q-1>10?7:8;break;case 7:_PyErr_SetString(HEAP[_PyExc_TypeError],h);l=0;e=21;break;case 8:p=1;e=17;break;case 9:r=_PyTuple_GetItem(k,p);e=(HEAP[HEAP[r+4]+84]&8388608)!=0?10:11;break;case 10:e=p-1;var B=_PyInt_AsLong(r);
HEAP[o+e*4]=B;e=16;break;case 11:e=(HEAP[HEAP[r+4]+84]&134217728)!=0?12:13;break;case 12:e=p-1;B=_PyString_AsString(r);HEAP[o+e*4]=B;e=16;break;case 13:e=r==__Py_NoneStruct?14:15;break;case 14:HEAP[o+(p-1)*4]=0;e=16;break;case 15:_PyErr_SetString(HEAP[_PyExc_TypeError],j);l=0;e=21;break;case 16:p+=1;e=17;break;case 17:var s=p;e=s<q?9:18;break;case 18:e=s<=10?19:20;break;case 19:HEAP[o+(p-1)*4]=0;p=e=p+1;e=e<=10?19:20;break;case 20:l=FUNCTION_TABLE[n](HEAP[o],HEAP[o+4],HEAP[o+8],HEAP[o+12],HEAP[o+
16],HEAP[o+20],HEAP[o+24],HEAP[o+28],HEAP[o+32],HEAP[o+36]);l=_PyInt_FromLong(l);e=21;break;case 21:return g=l,STACKTOP=c,g;default:assert(0,"bad label: "+e)}},0,function(a,b){var e;for(e=-1;;)switch(e){case -1:var d,f,g;d=a;var h=e=b;e=(HEAP[HEAP[e+4]+84]&134217728)!=0?1:2;break;case 1:g=h+20;g=_dlsym(HEAP[d+8],g);e=g==0?3:4;break;case 2:_PyErr_Format(HEAP[_PyExc_TypeError],c,allocate([HEAP[HEAP[h+4]+12],0,0,0],["i8*",0,0,0],ALLOC_STACK));f=0;e=5;break;case 3:HEAP[__Py_NoneStruct]+=1;f=__Py_NoneStruct;
e=5;break;case 4:f=_PyInt_FromLong(g);e=5;break;case 5:return d=f;default:assert(0,"bad label: "+e)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c;c=a;b=HEAP[c+8]!=0?1:2;break;case 1:_dlclose(HEAP[c+8]);HEAP[c+8]=0;b=2;break;case 2:return HEAP[__Py_NoneStruct]+=1,a=__Py_NoneStruct;default:assert(0,"bad label: "+b)}},0,function(a){var b;for(b=-1;;)switch(b){case -1:var c;c=a;b=HEAP[c+8]!=0?1:2;break;case 1:_dlclose(HEAP[c+8]);b=2;break;case 2:_PyObject_Free(c);return;default:assert(0,"bad label: "+
b)}},0,function(a,b){return _Py_FindMethod(n,a,b)},0,function(a,b){var c=STACKTOP;STACKTOP+=8;_memset(c,0,8);var e;for(e=-1;;)switch(e){case -1:var d,f,g=c,h=c+4,j,k;d=b;e=_PyArg_ParseTuple(d,q,allocate([g,0,0,0],["i8**",0,0,0],ALLOC_STACK))!=0?1:2;break;case 1:HEAP[h]=1;e=4;break;case 2:_PyErr_Clear();e=_PyArg_ParseTuple(d,r,allocate([g,0,0,0,h,0,0,0],["i8**",0,0,0,"i32*",0,0,0],ALLOC_STACK))==0?3:4;break;case 3:f=0;e=9;break;case 4:j=e=_dlopen(HEAP[g],HEAP[h]);e=e==0?5:8;break;case 5:k=_dlerror();
e=k==0?6:7;break;case 6:k=u;e=7;break;case 7:_PyErr_SetString(HEAP[s],k);f=0;e=9;break;case 8:a:{f=j;e=void 0;for(e=-1;;)switch(e){case -1:var l,m,n;l=f;n=__PyObject_New(p);e=n==0?1:2;break;case 1:m=0;e=3;break;case 2:HEAP[n+8]=l;m=n;e=3;break;case 3:f=m;break a;default:assert(0,"bad label: "+e)}f=void 0}e=9;break;case 9:return d=f,STACKTOP=c,d;default:assert(0,"bad label: "+e)}},0]);a.run=b;b();return a});
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



var $0___SIZE = 64; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 16; // %2
  
var $3___SIZE = 196; // %3
  
var $4___SIZE = 32; // %4
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_dlobject___SIZE = 12; // %struct.dlobject
  


var __str;
var __str1;
var __str2;

var __str3;
var __str4;
var __str5;
var __str6;
var __str7;
var _dlobject_methods;
var __str8;
var _Dltype;
var __str9;
var __str10;
var __str11;
var _Dlerror;
var __str12;
var _dl_methods;


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


























  function _newdlobject($handle) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $handle_addr;
        var $retval;
        var $0;
        var $xp;
        $handle_addr=$handle;
        var $1=__PyObject_New(_Dltype); //@line 30 "dlmodule.c"
        var $2=$1; //@line 30 "dlmodule.c"
        $xp=$2; //@line 30 "dlmodule.c"
        var $3=$xp; //@line 31 "dlmodule.c"
        var $4=($3)==0; //@line 31 "dlmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 31 "dlmodule.c"
      case 1: // $bb
        $0=0; //@line 32 "dlmodule.c"
        __label__ = 3; break; //@line 32 "dlmodule.c"
      case 2: // $bb1
        var $5=$xp; //@line 33 "dlmodule.c"
        var $6=$5+8; //@line 33 "dlmodule.c"
        var $7=$handle_addr; //@line 33 "dlmodule.c"
        HEAP[$6]=$7; //@line 33 "dlmodule.c"
        var $8=$xp; //@line 34 "dlmodule.c"
        var $9=$8; //@line 34 "dlmodule.c"
        $0=$9; //@line 34 "dlmodule.c"
        __label__ = 3; break; //@line 34 "dlmodule.c"
      case 3: // $bb2
        var $10=$0; //@line 32 "dlmodule.c"
        $retval=$10; //@line 32 "dlmodule.c"
        var $retval3=$retval; //@line 32 "dlmodule.c"
        ;
        return $retval3; //@line 32 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dl_dealloc($xp) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xp_addr;
        $xp_addr=$xp;
        var $0=$xp_addr; //@line 40 "dlmodule.c"
        var $1=$0+8; //@line 40 "dlmodule.c"
        var $2=HEAP[$1]; //@line 40 "dlmodule.c"
        var $3=($2)!=0; //@line 40 "dlmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 40 "dlmodule.c"
      case 1: // $bb
        var $4=$xp_addr; //@line 41 "dlmodule.c"
        var $5=$4+8; //@line 41 "dlmodule.c"
        var $6=HEAP[$5]; //@line 41 "dlmodule.c"
        var $7=$6; //@line 41 "dlmodule.c"
        var $8=_dlclose($7); //@line 41 "dlmodule.c"
        __label__ = 2; break; //@line 41 "dlmodule.c"
      case 2: // $bb1
        var $9=$xp_addr; //@line 42 "dlmodule.c"
        var $10=$9; //@line 42 "dlmodule.c"
        _PyObject_Free($10); //@line 42 "dlmodule.c"
        ;
        return; //@line 43 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dl_close($xp) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xp_addr;
        var $retval;
        var $0;
        $xp_addr=$xp;
        var $1=$xp_addr; //@line 48 "dlmodule.c"
        var $2=$1+8; //@line 48 "dlmodule.c"
        var $3=HEAP[$2]; //@line 48 "dlmodule.c"
        var $4=($3)!=0; //@line 48 "dlmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 48 "dlmodule.c"
      case 1: // $bb
        var $5=$xp_addr; //@line 49 "dlmodule.c"
        var $6=$5+8; //@line 49 "dlmodule.c"
        var $7=HEAP[$6]; //@line 49 "dlmodule.c"
        var $8=$7; //@line 49 "dlmodule.c"
        var $9=_dlclose($8); //@line 49 "dlmodule.c"
        var $10=$xp_addr; //@line 50 "dlmodule.c"
        var $11=$10+8; //@line 50 "dlmodule.c"
        HEAP[$11]=0; //@line 50 "dlmodule.c"
        __label__ = 2; break; //@line 50 "dlmodule.c"
      case 2: // $bb1
        var $12=HEAP[__Py_NoneStruct]; //@line 52 "dlmodule.c"
        var $13=($12) + 1; //@line 52 "dlmodule.c"
        HEAP[__Py_NoneStruct]=$13; //@line 52 "dlmodule.c"
        $0=__Py_NoneStruct; //@line 53 "dlmodule.c"
        var $14=$0; //@line 53 "dlmodule.c"
        $retval=$14; //@line 53 "dlmodule.c"
        var $retval2=$retval; //@line 53 "dlmodule.c"
        ;
        return $retval2; //@line 53 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dl_sym($xp, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xp_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $name;
        var $func;
        $xp_addr=$xp;
        $args_addr=$args;
        var $1=$args_addr; //@line 61 "dlmodule.c"
        var $2=$1+4; //@line 61 "dlmodule.c"
        var $3=HEAP[$2]; //@line 61 "dlmodule.c"
        var $4=$3+84; //@line 61 "dlmodule.c"
        var $5=HEAP[$4]; //@line 61 "dlmodule.c"
        var $6=($5) & 134217728; //@line 61 "dlmodule.c"
        var $7=($6)!=0; //@line 61 "dlmodule.c"
        var $8=$args_addr; //@line 62 "dlmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 61 "dlmodule.c"
      case 1: // $bb
        var $9=$8; //@line 62 "dlmodule.c"
        var $10=$9+20; //@line 62 "dlmodule.c"
        var $11=$10; //@line 62 "dlmodule.c"
        $name=$11; //@line 62 "dlmodule.c"
        var $12=$xp_addr; //@line 68 "dlmodule.c"
        var $13=$12+8; //@line 68 "dlmodule.c"
        var $14=HEAP[$13]; //@line 68 "dlmodule.c"
        var $15=$14; //@line 68 "dlmodule.c"
        var $16=$name; //@line 68 "dlmodule.c"
        var $17=_dlsym($15, $16); //@line 68 "dlmodule.c"
        var $18=$17; //@line 68 "dlmodule.c"
        $func=$18; //@line 68 "dlmodule.c"
        var $19=$func; //@line 69 "dlmodule.c"
        var $20=($19)==0; //@line 69 "dlmodule.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 69 "dlmodule.c"
      case 2: // $bb1
        var $21=$8+4; //@line 64 "dlmodule.c"
        var $22=HEAP[$21]; //@line 64 "dlmodule.c"
        var $23=$22+12; //@line 64 "dlmodule.c"
        var $24=HEAP[$23]; //@line 64 "dlmodule.c"
        var $25=HEAP[_PyExc_TypeError]; //@line 64 "dlmodule.c"
        var $26=_PyErr_Format($25, __str, allocate([$24,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 64 "dlmodule.c"
        $0=0; //@line 66 "dlmodule.c"
        __label__ = 5; break; //@line 66 "dlmodule.c"
      case 3: // $bb2
        var $27=HEAP[__Py_NoneStruct]; //@line 70 "dlmodule.c"
        var $28=($27) + 1; //@line 70 "dlmodule.c"
        HEAP[__Py_NoneStruct]=$28; //@line 70 "dlmodule.c"
        $0=__Py_NoneStruct; //@line 71 "dlmodule.c"
        __label__ = 5; break; //@line 71 "dlmodule.c"
      case 4: // $bb3
        var $29=$func; //@line 73 "dlmodule.c"
        var $30=($29); //@line 73 "dlmodule.c"
        var $31=_PyInt_FromLong($30); //@line 73 "dlmodule.c"
        $0=$31; //@line 73 "dlmodule.c"
        __label__ = 5; break; //@line 73 "dlmodule.c"
      case 5: // $bb4
        var $32=$0; //@line 66 "dlmodule.c"
        $retval=$32; //@line 66 "dlmodule.c"
        var $retval5=$retval; //@line 66 "dlmodule.c"
        ;
        return $retval5; //@line 66 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dl_call($xp, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xp_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $name;
        var $func;
        var $alist=__stackBase__;
        var $res;
        var $i;
        var $n;
        var $v;
        $xp_addr=$xp;
        $args_addr=$args;
        var $1=$args_addr; //@line 85 "dlmodule.c"
        var $2=_PyTuple_Size($1); //@line 85 "dlmodule.c"
        $n=$2; //@line 85 "dlmodule.c"
        var $3=$n; //@line 86 "dlmodule.c"
        var $4=($3) <= 0; //@line 86 "dlmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 86 "dlmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_TypeError]; //@line 87 "dlmodule.c"
        _PyErr_SetString($5, __str1); //@line 87 "dlmodule.c"
        $0=0; //@line 88 "dlmodule.c"
        __label__ = 21; break; //@line 88 "dlmodule.c"
      case 2: // $bb1
        var $6=$args_addr; //@line 90 "dlmodule.c"
        var $7=_PyTuple_GetItem($6, 0); //@line 90 "dlmodule.c"
        $name=$7; //@line 90 "dlmodule.c"
        var $8=$name; //@line 91 "dlmodule.c"
        var $9=$8+4; //@line 91 "dlmodule.c"
        var $10=HEAP[$9]; //@line 91 "dlmodule.c"
        var $11=$10+84; //@line 91 "dlmodule.c"
        var $12=HEAP[$11]; //@line 91 "dlmodule.c"
        var $13=($12) & 134217728; //@line 91 "dlmodule.c"
        var $14=($13)==0; //@line 91 "dlmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 91 "dlmodule.c"
      case 3: // $bb2
        var $15=HEAP[_PyExc_TypeError]; //@line 92 "dlmodule.c"
        _PyErr_SetString($15, __str2); //@line 92 "dlmodule.c"
        $0=0; //@line 94 "dlmodule.c"
        __label__ = 21; break; //@line 94 "dlmodule.c"
      case 4: // $bb3
        var $16=$name; //@line 96 "dlmodule.c"
        var $17=_PyString_AsString($16); //@line 96 "dlmodule.c"
        var $18=$xp_addr; //@line 96 "dlmodule.c"
        var $19=$18+8; //@line 96 "dlmodule.c"
        var $20=HEAP[$19]; //@line 96 "dlmodule.c"
        var $21=$20; //@line 96 "dlmodule.c"
        var $22=_dlsym($21, $17); //@line 96 "dlmodule.c"
        var $23=$22; //@line 96 "dlmodule.c"
        $func=$23; //@line 96 "dlmodule.c"
        var $24=$func; //@line 99 "dlmodule.c"
        var $25=($24)==0; //@line 99 "dlmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 99 "dlmodule.c"
      case 5: // $bb4
        var $26=_dlerror(); //@line 100 "dlmodule.c"
        var $27=HEAP[_PyExc_ValueError]; //@line 100 "dlmodule.c"
        _PyErr_SetString($27, $26); //@line 100 "dlmodule.c"
        $0=0; //@line 101 "dlmodule.c"
        __label__ = 21; break; //@line 101 "dlmodule.c"
      case 6: // $bb5
        var $28=$n; //@line 103 "dlmodule.c"
        var $29=($28) - 1; //@line 103 "dlmodule.c"
        var $30=($29) > 10; //@line 103 "dlmodule.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 103 "dlmodule.c"
      case 7: // $bb6
        var $31=HEAP[_PyExc_TypeError]; //@line 104 "dlmodule.c"
        _PyErr_SetString($31, __str3); //@line 104 "dlmodule.c"
        $0=0; //@line 106 "dlmodule.c"
        __label__ = 21; break; //@line 106 "dlmodule.c"
      case 8: // $bb7
        $i=1; //@line 108 "dlmodule.c"
        __label__ = 17; break; //@line 108 "dlmodule.c"
      case 9: // $bb8
        var $32=$args_addr; //@line 109 "dlmodule.c"
        var $33=$i; //@line 109 "dlmodule.c"
        var $34=_PyTuple_GetItem($32, $33); //@line 109 "dlmodule.c"
        $v=$34; //@line 109 "dlmodule.c"
        var $35=$v; //@line 110 "dlmodule.c"
        var $36=$35+4; //@line 110 "dlmodule.c"
        var $37=HEAP[$36]; //@line 110 "dlmodule.c"
        var $38=$37+84; //@line 110 "dlmodule.c"
        var $39=HEAP[$38]; //@line 110 "dlmodule.c"
        var $40=($39) & 8388608; //@line 110 "dlmodule.c"
        var $41=($40)!=0; //@line 110 "dlmodule.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 110 "dlmodule.c"
      case 10: // $bb9
        var $42=$i; //@line 111 "dlmodule.c"
        var $43=($42) - 1; //@line 111 "dlmodule.c"
        var $44=$v; //@line 111 "dlmodule.c"
        var $45=_PyInt_AsLong($44); //@line 111 "dlmodule.c"
        var $46=$alist+$43*4; //@line 111 "dlmodule.c"
        HEAP[$46]=$45; //@line 111 "dlmodule.c"
        __label__ = 16; break; //@line 111 "dlmodule.c"
      case 11: // $bb10
        var $47=$v; //@line 112 "dlmodule.c"
        var $48=$47+4; //@line 112 "dlmodule.c"
        var $49=HEAP[$48]; //@line 112 "dlmodule.c"
        var $50=$49+84; //@line 112 "dlmodule.c"
        var $51=HEAP[$50]; //@line 112 "dlmodule.c"
        var $52=($51) & 134217728; //@line 112 "dlmodule.c"
        var $53=($52)!=0; //@line 112 "dlmodule.c"
        if ($53) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 112 "dlmodule.c"
      case 12: // $bb11
        var $54=$i; //@line 113 "dlmodule.c"
        var $55=($54) - 1; //@line 113 "dlmodule.c"
        var $56=$v; //@line 113 "dlmodule.c"
        var $57=_PyString_AsString($56); //@line 113 "dlmodule.c"
        var $58=($57); //@line 113 "dlmodule.c"
        var $59=$alist+$55*4; //@line 113 "dlmodule.c"
        HEAP[$59]=$58; //@line 113 "dlmodule.c"
        __label__ = 16; break; //@line 113 "dlmodule.c"
      case 13: // $bb12
        var $60=$v; //@line 114 "dlmodule.c"
        var $61=($60)==(__Py_NoneStruct); //@line 114 "dlmodule.c"
        if ($61) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 114 "dlmodule.c"
      case 14: // $bb13
        var $62=$i; //@line 115 "dlmodule.c"
        var $63=($62) - 1; //@line 115 "dlmodule.c"
        var $64=$alist+$63*4; //@line 115 "dlmodule.c"
        HEAP[$64]=0; //@line 115 "dlmodule.c"
        __label__ = 16; break; //@line 115 "dlmodule.c"
      case 15: // $bb14
        var $65=HEAP[_PyExc_TypeError]; //@line 117 "dlmodule.c"
        _PyErr_SetString($65, __str4); //@line 117 "dlmodule.c"
        $0=0; //@line 119 "dlmodule.c"
        __label__ = 21; break; //@line 119 "dlmodule.c"
      case 16: // $bb15
        var $66=$i; //@line 108 "dlmodule.c"
        var $67=($66) + 1; //@line 108 "dlmodule.c"
        $i=$67; //@line 108 "dlmodule.c"
        __label__ = 17; break; //@line 108 "dlmodule.c"
      case 17: // $bb16
        var $68=$i; //@line 108 "dlmodule.c"
        var $69=$n; //@line 108 "dlmodule.c"
        var $70=($68) < ($69); //@line 108 "dlmodule.c"
        if ($70) { __label__ = 9; break; } else { __label__ = 18; break; } //@line 108 "dlmodule.c"
      case 18: // $bb19_preheader
        var $71=($68) <= 10; //@line 122 "dlmodule.c"
        if ($71) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 122 "dlmodule.c"
      case 19: // $bb18
        var $72=$i; //@line 123 "dlmodule.c"
        var $73=($72) - 1; //@line 123 "dlmodule.c"
        var $74=$alist+$73*4; //@line 123 "dlmodule.c"
        HEAP[$74]=0; //@line 123 "dlmodule.c"
        var $75=$i; //@line 122 "dlmodule.c"
        var $76=($75) + 1; //@line 122 "dlmodule.c"
        $i=$76; //@line 122 "dlmodule.c"
        var $77=($76) <= 10; //@line 122 "dlmodule.c"
        if ($77) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 122 "dlmodule.c"
      case 20: // $bb20
        var $78=$alist+36; //@line 124 "dlmodule.c"
        var $79=HEAP[$78]; //@line 124 "dlmodule.c"
        var $80=$alist+32; //@line 124 "dlmodule.c"
        var $81=HEAP[$80]; //@line 124 "dlmodule.c"
        var $82=$alist+28; //@line 124 "dlmodule.c"
        var $83=HEAP[$82]; //@line 124 "dlmodule.c"
        var $84=$alist+24; //@line 124 "dlmodule.c"
        var $85=HEAP[$84]; //@line 124 "dlmodule.c"
        var $86=$alist+20; //@line 124 "dlmodule.c"
        var $87=HEAP[$86]; //@line 124 "dlmodule.c"
        var $88=$alist+16; //@line 124 "dlmodule.c"
        var $89=HEAP[$88]; //@line 124 "dlmodule.c"
        var $90=$alist+12; //@line 124 "dlmodule.c"
        var $91=HEAP[$90]; //@line 124 "dlmodule.c"
        var $92=$alist+8; //@line 124 "dlmodule.c"
        var $93=HEAP[$92]; //@line 124 "dlmodule.c"
        var $94=$alist+4; //@line 124 "dlmodule.c"
        var $95=HEAP[$94]; //@line 124 "dlmodule.c"
        var $96=$alist; //@line 124 "dlmodule.c"
        var $97=HEAP[$96]; //@line 124 "dlmodule.c"
        var $98=$func; //@line 124 "dlmodule.c"
        var $99=FUNCTION_TABLE[$98]($97, $95, $93, $91, $89, $87, $85, $83, $81, $79); //@line 124 "dlmodule.c"
        $res=$99; //@line 124 "dlmodule.c"
        var $100=$res; //@line 126 "dlmodule.c"
        var $101=_PyInt_FromLong($100); //@line 126 "dlmodule.c"
        $0=$101; //@line 126 "dlmodule.c"
        __label__ = 21; break; //@line 126 "dlmodule.c"
      case 21: // $bb21
        var $102=$0; //@line 88 "dlmodule.c"
        $retval=$102; //@line 88 "dlmodule.c"
        var $retval22=$retval; //@line 88 "dlmodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 88 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dl_getattr($xp, $name) {
    ;
    var __label__;
  
    var $xp_addr;
    var $name_addr;
    var $retval;
    var $0;
    $xp_addr=$xp;
    $name_addr=$name;
    var $1=$xp_addr; //@line 139 "dlmodule.c"
    var $2=$1; //@line 139 "dlmodule.c"
    var $3=$name_addr; //@line 139 "dlmodule.c"
    var $4=_Py_FindMethod(_dlobject_methods, $2, $3); //@line 139 "dlmodule.c"
    $0=$4; //@line 139 "dlmodule.c"
    var $5=$0; //@line 139 "dlmodule.c"
    $retval=$5; //@line 139 "dlmodule.c"
    var $retval1=$retval; //@line 139 "dlmodule.c"
    ;
    return $retval1; //@line 139 "dlmodule.c"
  }
  

  function _dl_open($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $name=__stackBase__;
        var $mode=__stackBase__+4;
        var $handle;
        var $errmsg;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 174 "dlmodule.c"
        var $2=_PyArg_ParseTuple($1, __str9, allocate([$name,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 174 "dlmodule.c"
        var $3=($2)!=0; //@line 174 "dlmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 174 "dlmodule.c"
      case 1: // $bb
        HEAP[$mode]=1; //@line 175 "dlmodule.c"
        __label__ = 4; break; //@line 175 "dlmodule.c"
      case 2: // $bb1
        _PyErr_Clear(); //@line 177 "dlmodule.c"
        var $4=$args_addr; //@line 178 "dlmodule.c"
        var $5=_PyArg_ParseTuple($4, __str10, allocate([$name,0,0,0,$mode,0,0,0], ["i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 178 "dlmodule.c"
        var $6=($5)==0; //@line 178 "dlmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 178 "dlmodule.c"
      case 3: // $bb2
        $0=0; //@line 179 "dlmodule.c"
        __label__ = 9; break; //@line 179 "dlmodule.c"
      case 4: // $bb3
        var $7=HEAP[$mode]; //@line 187 "dlmodule.c"
        var $8=HEAP[$name]; //@line 187 "dlmodule.c"
        var $9=_dlopen($8, $7); //@line 187 "dlmodule.c"
        var $10=$9; //@line 187 "dlmodule.c"
        $handle=$10; //@line 187 "dlmodule.c"
        var $11=($10)==0; //@line 188 "dlmodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 188 "dlmodule.c"
      case 5: // $bb4
        var $12=_dlerror(); //@line 189 "dlmodule.c"
        $errmsg=$12; //@line 189 "dlmodule.c"
        var $13=$errmsg; //@line 190 "dlmodule.c"
        var $14=($13)==0; //@line 190 "dlmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 190 "dlmodule.c"
      case 6: // $bb5
        $errmsg=__str11; //@line 191 "dlmodule.c"
        __label__ = 7; break; //@line 191 "dlmodule.c"
      case 7: // $bb6
        var $15=HEAP[_Dlerror]; //@line 192 "dlmodule.c"
        var $16=$errmsg; //@line 192 "dlmodule.c"
        _PyErr_SetString($15, $16); //@line 192 "dlmodule.c"
        $0=0; //@line 193 "dlmodule.c"
        __label__ = 9; break; //@line 193 "dlmodule.c"
      case 8: // $bb7
        var $17=$handle; //@line 213 "dlmodule.c"
        var $18=_newdlobject($17); //@line 213 "dlmodule.c"
        $0=$18; //@line 213 "dlmodule.c"
        __label__ = 9; break; //@line 213 "dlmodule.c"
      case 9: // $bb8
        var $19=$0; //@line 179 "dlmodule.c"
        $retval=$19; //@line 179 "dlmodule.c"
        var $retval9=$retval; //@line 179 "dlmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 179 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _insint($d, $name, $value) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $d_addr;
        var $name_addr;
        var $value_addr;
        var $v;
        $d_addr=$d;
        $name_addr=$name;
        $value_addr=$value;
        var $0=$value_addr; //@line 229 "dlmodule.c"
        var $1=_PyInt_FromLong($0); //@line 229 "dlmodule.c"
        $v=$1; //@line 229 "dlmodule.c"
        var $2=$v; //@line 230 "dlmodule.c"
        var $3=($2)==0; //@line 230 "dlmodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 230 "dlmodule.c"
      case 1: // $bb
        var $4=$d_addr; //@line 230 "dlmodule.c"
        var $5=$name_addr; //@line 230 "dlmodule.c"
        var $6=$v; //@line 230 "dlmodule.c"
        var $7=_PyDict_SetItemString($4, $5, $6); //@line 230 "dlmodule.c"
        var $8=($7)!=0; //@line 230 "dlmodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 230 "dlmodule.c"
      case 2: // $bb1
        _PyErr_Clear(); //@line 231 "dlmodule.c"
        __label__ = 3; break; //@line 231 "dlmodule.c"
      case 3: // $bb2
        var $9=$v; //@line 233 "dlmodule.c"
        var $10=($9)!=0; //@line 233 "dlmodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 233 "dlmodule.c"
      case 4: // $bb3
        var $11=$v; //@line 233 "dlmodule.c"
        var $12=$11; //@line 233 "dlmodule.c"
        var $13=HEAP[$12]; //@line 233 "dlmodule.c"
        var $14=($13) - 1; //@line 233 "dlmodule.c"
        var $15=$v; //@line 233 "dlmodule.c"
        var $16=$15; //@line 233 "dlmodule.c"
        HEAP[$16]=$14; //@line 233 "dlmodule.c"
        var $17=$v; //@line 233 "dlmodule.c"
        var $18=$17; //@line 233 "dlmodule.c"
        var $19=HEAP[$18]; //@line 233 "dlmodule.c"
        var $20=($19)==0; //@line 233 "dlmodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 233 "dlmodule.c"
      case 5: // $bb4
        var $21=$v; //@line 233 "dlmodule.c"
        var $22=$21+4; //@line 233 "dlmodule.c"
        var $23=HEAP[$22]; //@line 233 "dlmodule.c"
        var $24=$23+24; //@line 233 "dlmodule.c"
        var $25=HEAP[$24]; //@line 233 "dlmodule.c"
        var $26=$v; //@line 233 "dlmodule.c"
        FUNCTION_TABLE[$25]($26); //@line 233 "dlmodule.c"
        __label__ = 6; break; //@line 233 "dlmodule.c"
      case 6: // $return
        ;
        return; //@line 234 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initdl() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $d;
        var $x;
        var $0=HEAP[_Py_Py3kWarningFlag]; //@line 241 "dlmodule.c"
        var $1=($0)!=0; //@line 241 "dlmodule.c"
        if ($1) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 241 "dlmodule.c"
      case 1: // $bb
        var $2=HEAP[_PyExc_DeprecationWarning]; //@line 241 "dlmodule.c"
        var $3=_PyErr_WarnEx($2, __str13, 2); //@line 241 "dlmodule.c"
        var $4=($3) < 0; //@line 241 "dlmodule.c"
        if ($4) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 241 "dlmodule.c"
      case 2: // $bb1
        HEAP[_Dltype+4]=_PyType_Type; //@line 246 "dlmodule.c"
        var $5=_Py_InitModule4(__str14, _dl_methods, 0, 0, 1013); //@line 249 "dlmodule.c"
        $m=$5; //@line 249 "dlmodule.c"
        var $6=($5)==0; //@line 250 "dlmodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 250 "dlmodule.c"
      case 3: // $bb2
        var $7=$m; //@line 254 "dlmodule.c"
        var $8=_PyModule_GetDict($7); //@line 254 "dlmodule.c"
        $d=$8; //@line 254 "dlmodule.c"
        var $9=_PyErr_NewException(__str15, 0, 0); //@line 255 "dlmodule.c"
        $x=$9; //@line 255 "dlmodule.c"
        var $10=$x; //@line 255 "dlmodule.c"
        HEAP[_Dlerror]=$10; //@line 255 "dlmodule.c"
        var $11=$d; //@line 256 "dlmodule.c"
        var $12=$x; //@line 256 "dlmodule.c"
        var $13=_PyDict_SetItemString($11, __str16, $12); //@line 256 "dlmodule.c"
        var $14=_PyInt_FromLong(1); //@line 257 "dlmodule.c"
        $x=$14; //@line 257 "dlmodule.c"
        var $15=$d; //@line 258 "dlmodule.c"
        var $16=$x; //@line 258 "dlmodule.c"
        var $17=_PyDict_SetItemString($15, __str17, $16); //@line 258 "dlmodule.c"
        var $18=$d; //@line 261 "dlmodule.c"
        _insint($18, __str18, 2); //@line 261 "dlmodule.c"
        var $19=$d; //@line 264 "dlmodule.c"
        _insint($19, __str19, 4); //@line 264 "dlmodule.c"
        var $20=$d; //@line 267 "dlmodule.c"
        _insint($20, __str20, 256); //@line 267 "dlmodule.c"
        var $21=$d; //@line 270 "dlmodule.c"
        _insint($21, __str21, 0); //@line 270 "dlmodule.c"
        var $22=$d; //@line 282 "dlmodule.c"
        _insint($22, __str22, 4096); //@line 282 "dlmodule.c"
        __label__ = 4; break; //@line 282 "dlmodule.c"
      case 4: // $return
        ;
        return; //@line 243 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initdl"] = _initdl;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_dl_call,0,_dl_sym,0,_dl_close,0,_dl_dealloc,0,_dl_getattr,0,_dl_open,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([101,120,112,101,99,116,101,100,32,115,116,114,105,110,103,44,32,102,111,117,110,100,32,37,46,50,48,48,115,0] /* expected string, fou */, "i8", ALLOC_NORMAL);
__str1=allocate([97,116,32,108,101,97,115,116,32,97,32,110,97,109,101,32,105,115,32,110,101,101,100,101,100,0] /* at least a name is n */, "i8", ALLOC_NORMAL);
__str2=allocate([102,117,110,99,116,105,111,110,32,110,97,109,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0] /* function name must b */, "i8", ALLOC_NORMAL);
__str3=allocate([116,111,111,32,109,97,110,121,32,97,114,103,117,109,101,110,116,115,32,40,109,97,120,32,49,48,41,0] /* too many arguments ( */, "i8", ALLOC_NORMAL);
__str4=allocate([97,114,103,117,109,101,110,116,115,32,109,117,115,116,32,98,101,32,105,110,116,44,32,115,116,114,105,110,103,32,111,114,32,78,111,110,101,0] /* arguments must be in */, "i8", ALLOC_NORMAL);
__str5=allocate([99,97,108,108,0] /* call\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([115,121,109,0] /* sym\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([99,108,111,115,101,0] /* close\00 */, "i8", ALLOC_NORMAL);
_dlobject_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str8=allocate([100,108,46,100,108,0] /* dl.dl\00 */, "i8", ALLOC_NORMAL);
_Dltype=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str9=allocate([122,58,111,112,101,110,0] /* z:open\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([122,105,58,111,112,101,110,0] /* zi:open\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([100,108,111,112,101,110,40,41,32,101,114,114,111,114,0] /* dlopen() error\00 */, "i8", ALLOC_NORMAL);
_Dlerror=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str12=allocate([111,112,101,110,0] /* open\00 */, "i8", ALLOC_NORMAL);
_dl_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str13=allocate([116,104,101,32,100,108,32,109,111,100,117,108,101,32,104,97,115,32,98,101,101,110,32,114,101,109,111,118,101,100,32,105,110,32,80,121,116,104,111,110,32,51,46,48,59,32,117,115,101,32,116,104,101,32,99,116,121,112,101,115,32,109,111,100,117,108,101,32,105,110,115,116,101,97,100,0] /* the dl module has be */, "i8", ALLOC_NORMAL);
__str14=allocate([100,108,0] /* dl\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([100,108,46,101,114,114,111,114,0] /* dl.error\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([82,84,76,68,95,76,65,90,89,0] /* RTLD_LAZY\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([82,84,76,68,95,78,79,87,0] /* RTLD_NOW\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([82,84,76,68,95,78,79,76,79,65,68,0] /* RTLD_NOLOAD\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([82,84,76,68,95,71,76,79,66,65,76,0] /* RTLD_GLOBAL\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([82,84,76,68,95,76,79,67,65,76,0] /* RTLD_LOCAL\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([82,84,76,68,95,78,79,68,69,76,69,84,69,0] /* RTLD_NODELETE\00 */, "i8", ALLOC_NORMAL);
HEAP[_dlobject_methods]=__str5;
HEAP[_dlobject_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_dlobject_methods+16]=__str6;
HEAP[_dlobject_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_dlobject_methods+32]=__str7;
HEAP[_dlobject_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_Dltype+12]=__str8;
HEAP[_Dltype+24]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_Dltype+32]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_dl_methods]=__str12;
HEAP[_dl_methods+4]=(FUNCTION_TABLE_OFFSET + 12);

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
