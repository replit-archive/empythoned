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
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _module_doc;
var _hex_doc;
var _oct_doc;
var _ascii_doc;
var __str;
var __str1;
var __str2;
var _module_functions;
var _C_0_8342;
var __str3;
var __str4;
var __str5;
var __str6;
var __str7;











  function _builtin_hex($self, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $v_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 35 "future_builtins.c"
        var $2=_PyNumber_ToBase($1, 16); //@line 35 "future_builtins.c"
        HEAP[$0]=$2; //@line 35 "future_builtins.c"
        var $3=HEAP[$0]; //@line 35 "future_builtins.c"
        HEAP[$retval]=$3; //@line 35 "future_builtins.c"
        __label__ = 1; break; //@line 35 "future_builtins.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 35 "future_builtins.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 35 "future_builtins.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _builtin_oct($self, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $v_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 47 "future_builtins.c"
        var $2=_PyNumber_ToBase($1, 8); //@line 47 "future_builtins.c"
        HEAP[$0]=$2; //@line 47 "future_builtins.c"
        var $3=HEAP[$0]; //@line 47 "future_builtins.c"
        HEAP[$retval]=$3; //@line 47 "future_builtins.c"
        __label__ = 1; break; //@line 47 "future_builtins.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 47 "future_builtins.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 47 "future_builtins.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _builtin_ascii($self, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $v_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 59 "future_builtins.c"
        var $2=_PyObject_Repr($1); //@line 59 "future_builtins.c"
        HEAP[$0]=$2; //@line 59 "future_builtins.c"
        var $3=HEAP[$0]; //@line 59 "future_builtins.c"
        HEAP[$retval]=$3; //@line 59 "future_builtins.c"
        __label__ = 1; break; //@line 59 "future_builtins.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 59 "future_builtins.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 59 "future_builtins.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initfuture_builtins() {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $itertools=__stackBase__+4;
        var $iter_func=__stackBase__+8;
        var $it_funcs=__stackBase__+12;
        var $cur_func=__stackBase__+28;
        var $_alloca_point_=0;
        var $0=(($it_funcs)&4294967295); //@line 85 "future_builtins.c"
        var $1=HEAP[((_C_0_8342)&4294967295)]; //@line 85 "future_builtins.c"
        HEAP[$0]=$1; //@line 85 "future_builtins.c"
        var $2=(($it_funcs+4)&4294967295); //@line 85 "future_builtins.c"
        var $3=HEAP[((_C_0_8342+4)&4294967295)]; //@line 85 "future_builtins.c"
        HEAP[$2]=$3; //@line 85 "future_builtins.c"
        var $4=(($it_funcs+8)&4294967295); //@line 85 "future_builtins.c"
        var $5=HEAP[((_C_0_8342+8)&4294967295)]; //@line 85 "future_builtins.c"
        HEAP[$4]=$5; //@line 85 "future_builtins.c"
        var $6=(($it_funcs+12)&4294967295); //@line 85 "future_builtins.c"
        var $7=HEAP[((_C_0_8342+12)&4294967295)]; //@line 85 "future_builtins.c"
        HEAP[$6]=$7; //@line 85 "future_builtins.c"
        var $8=_Py_InitModule4(((__str6)&4294967295), ((_module_functions)&4294967295), ((_module_doc)&4294967295), 0, 1013); //@line 88 "future_builtins.c"
        HEAP[$m]=$8; //@line 88 "future_builtins.c"
        var $9=HEAP[$m]; //@line 89 "future_builtins.c"
        var $10=($9)==0; //@line 89 "future_builtins.c"
        if ($10) { __label__ = 9; break; } else { __label__ = 1; break; } //@line 89 "future_builtins.c"
      case 1: // $bb
        var $11=_PyImport_ImportModuleNoBlock(((__str7)&4294967295)); //@line 92 "future_builtins.c"
        HEAP[$itertools]=$11; //@line 92 "future_builtins.c"
        var $12=HEAP[$itertools]; //@line 93 "future_builtins.c"
        var $13=($12)==0; //@line 93 "future_builtins.c"
        if ($13) { __label__ = 9; break; } else { __label__ = 2; break; } //@line 93 "future_builtins.c"
      case 2: // $bb1
        var $it_funcs2=$it_funcs; //@line 97 "future_builtins.c"
        HEAP[$cur_func]=$it_funcs2; //@line 97 "future_builtins.c"
        __label__ = 6; break; //@line 97 "future_builtins.c"
      case 3: // $bb3
        var $14=HEAP[$cur_func]; //@line 98 "future_builtins.c"
        var $15=HEAP[$14]; //@line 98 "future_builtins.c"
        var $16=HEAP[$itertools]; //@line 98 "future_builtins.c"
        var $17=_PyObject_GetAttrString($16, $15); //@line 98 "future_builtins.c"
        HEAP[$iter_func]=$17; //@line 98 "future_builtins.c"
        var $18=HEAP[$iter_func]; //@line 99 "future_builtins.c"
        var $19=($18)==0; //@line 99 "future_builtins.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 4; break; } //@line 99 "future_builtins.c"
      case 4: // $bb4
        var $20=HEAP[$cur_func]; //@line 99 "future_builtins.c"
        var $21=HEAP[$20]; //@line 99 "future_builtins.c"
        var $22=(($21+1)&4294967295); //@line 99 "future_builtins.c"
        var $23=HEAP[$m]; //@line 99 "future_builtins.c"
        var $24=HEAP[$iter_func]; //@line 99 "future_builtins.c"
        var $25=_PyModule_AddObject($23, $22, $24); //@line 99 "future_builtins.c"
        var $26=((($25))|0) < 0; //@line 99 "future_builtins.c"
        if ($26) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 99 "future_builtins.c"
      case 5: // $bb5
        var $27=HEAP[$cur_func]; //@line 97 "future_builtins.c"
        var $28=(($27+4)&4294967295); //@line 97 "future_builtins.c"
        HEAP[$cur_func]=$28; //@line 97 "future_builtins.c"
        __label__ = 6; break; //@line 97 "future_builtins.c"
      case 6: // $bb6
        var $29=HEAP[$cur_func]; //@line 97 "future_builtins.c"
        var $30=HEAP[$29]; //@line 97 "future_builtins.c"
        var $31=($30)!=0; //@line 97 "future_builtins.c"
        if ($31) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 97 "future_builtins.c"
      case 7: // $bb7
        var $32=HEAP[$itertools]; //@line 103 "future_builtins.c"
        var $33=(($32)&4294967295); //@line 103 "future_builtins.c"
        var $34=HEAP[$33]; //@line 103 "future_builtins.c"
        var $35=((($34) - 1)&4294967295); //@line 103 "future_builtins.c"
        var $36=HEAP[$itertools]; //@line 103 "future_builtins.c"
        var $37=(($36)&4294967295); //@line 103 "future_builtins.c"
        HEAP[$37]=$35; //@line 103 "future_builtins.c"
        var $38=HEAP[$itertools]; //@line 103 "future_builtins.c"
        var $39=(($38)&4294967295); //@line 103 "future_builtins.c"
        var $40=HEAP[$39]; //@line 103 "future_builtins.c"
        var $41=((($40))|0)==0; //@line 103 "future_builtins.c"
        if ($41) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 103 "future_builtins.c"
      case 8: // $bb8
        var $42=HEAP[$itertools]; //@line 103 "future_builtins.c"
        var $43=(($42+4)&4294967295); //@line 103 "future_builtins.c"
        var $44=HEAP[$43]; //@line 103 "future_builtins.c"
        var $45=(($44+24)&4294967295); //@line 103 "future_builtins.c"
        var $46=HEAP[$45]; //@line 103 "future_builtins.c"
        var $47=HEAP[$itertools]; //@line 103 "future_builtins.c"
        FUNCTION_TABLE[$46]($47); //@line 103 "future_builtins.c"
        __label__ = 9; break; //@line 103 "future_builtins.c"
      case 9: // $bb9
        __label__ = 10; break; //@line 90 "future_builtins.c"
      case 10: // $return
        STACKTOP = __stackBase__;
        return; //@line 90 "future_builtins.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initfuture_builtins"] = _initfuture_builtins;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_builtin_hex,0,_builtin_oct,0,_builtin_ascii,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_module_doc=allocate([84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,102,117,110,99,116,105,111,110,115,32,116,104,97,116,32,119,105,108,108,32,98,101,32,98,117,105,108,116,105,110,115,32,105,110,32,80,121,116,104,111,110,32,51,46,48,44,10,98,117,116,32,116,104,97,116,32,99,111,110,102,108,105,99,116,32,119,105,116,104,32,98,117,105,108,116,105,110,115,32,116,104,97,116,32,97,108,114,101,97,100,121,32,101,120,105,115,116,32,105,110,32,80,121,116,104,111,110,32,50,46,120,46,10,10,70,117,110,99,116,105,111,110,115,58,10,10,97,115,99,105,105,40,97,114,103,41,32,45,45,32,82,101,116,117,114,110,115,32,116,104,101,32,99,97,110,111,110,105,99,97,108,32,115,116,114,105,110,103,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,111,98,106,101,99,116,46,10,102,105,108,116,101,114,40,112,114,101,100,44,32,105,116,101,114,97,98,108,101,41,32,45,45,32,82,101,116,117,114,110,115,32,97,110,32,105,116,101,114,97,116,111,114,32,121,105,101,108,100,105,110,103,32,116,104,111,115,101,32,105,116,101,109,115,32,111,102,32,10,32,32,32,32,32,32,32,105,116,101,114,97,98,108,101,32,102,111,114,32,119,104,105,99,104,32,112,114,101,100,40,105,116,101,109,41,32,105,115,32,116,114,117,101,46,10,104,101,120,40,97,114,103,41,32,45,45,32,82,101,116,117,114,110,115,32,116,104,101,32,104,101,120,97,100,101,99,105,109,97,108,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,105,110,116,101,103,101,114,46,10,109,97,112,40,102,117,110,99,44,32,42,105,116,101,114,97,98,108,101,115,41,32,45,45,32,82,101,116,117,114,110,115,32,97,110,32,105,116,101,114,97,116,111,114,32,116,104,97,116,32,99,111,109,112,117,116,101,115,32,116,104,101,32,102,117,110,99,116,105,111,110,32,10,32,32,32,32,117,115,105,110,103,32,97,114,103,117,109,101,110,116,115,32,102,114,111,109,32,101,97,99,104,32,111,102,32,116,104,101,32,105,116,101,114,97,98,108,101,115,46,10,111,99,116,40,97,114,103,41,32,45,45,32,82,101,116,117,114,110,115,32,116,104,101,32,111,99,116,97,108,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,105,110,116,101,103,101,114,46,10,122,105,112,40,105,116,101,114,49,32,91,44,105,116,101,114,50,32,91,46,46,46,93,93,41,32,45,45,32,82,101,116,117,114,110,115,32,97,32,122,105,112,32,111,98,106,101,99,116,32,119,104,111,115,101,32,46,110,101,120,116,40,41,32,109,101,116,104,111,100,32,10,32,32,32,32,114,101,116,117,114,110,115,32,97,32,116,117,112,108,101,32,119,104,101,114,101,32,116,104,101,32,105,45,116,104,32,101,108,101,109,101,110,116,32,99,111,109,101,115,32,102,114,111,109,32,116,104,101,32,105,45,116,104,32,105,116,101,114,97,98,108,101,32,10,32,32,32,32,97,114,103,117,109,101,110,116,46,10,10,84,104,101,32,116,121,112,105,99,97,108,32,117,115,97,103,101,32,111,102,32,116,104,105,115,32,109,111,100,117,108,101,32,105,115,32,116,111,32,114,101,112,108,97,99,101,32,101,120,105,115,116,105,110,103,32,98,117,105,108,116,105,110,115,32,105,110,32,97,10,109,111,100,117,108,101,39,115,32,110,97,109,101,115,112,97,99,101,58,10,32,10,102,114,111,109,32,102,117,116,117,114,101,95,98,117,105,108,116,105,110,115,32,105,109,112,111,114,116,32,97,115,99,105,105,44,32,102,105,108,116,101,114,44,32,109,97,112,44,32,104,101,120,44,32,111,99,116,44,32,122,105,112,10,0] /* This module provides */, "i8", ALLOC_NORMAL);
_hex_doc=allocate([104,101,120,40,110,117,109,98,101,114,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,104,101,120,97,100,101,99,105,109,97,108,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,105,110,116,101,103,101,114,32,111,114,32,108,111,110,103,32,105,110,116,101,103,101,114,46,0] /* hex(number) -> strin */, "i8", ALLOC_NORMAL);
_oct_doc=allocate([111,99,116,40,110,117,109,98,101,114,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,111,99,116,97,108,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,105,110,116,101,103,101,114,32,111,114,32,108,111,110,103,32,105,110,116,101,103,101,114,46,0] /* oct(number) -> strin */, "i8", ALLOC_NORMAL);
_ascii_doc=allocate([97,115,99,105,105,40,111,98,106,101,99,116,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,115,97,109,101,32,97,115,32,114,101,112,114,40,41,46,32,32,73,110,32,80,121,116,104,111,110,32,51,46,120,44,32,116,104,101,32,114,101,112,114,40,41,32,114,101,115,117,108,116,32,119,105,108,108,10,99,111,110,116,97,105,110,32,112,114,105,110,116,97,98,108,101,32,99,104,97,114,97,99,116,101,114,115,32,117,110,101,115,99,97,112,101,100,44,32,119,104,105,108,101,32,116,104,101,32,97,115,99,105,105,40,41,32,114,101,115,117,108,116,10,119,105,108,108,32,104,97,118,101,32,115,117,99,104,32,99,104,97,114,97,99,116,101,114,115,32,98,97,99,107,115,108,97,115,104,45,101,115,99,97,112,101,100,46,0] /* ascii(object) -> str */, "i8", ALLOC_NORMAL);
__str=allocate([104,101,120,0] /* hex\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([111,99,116,0] /* oct\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([97,115,99,105,105,0] /* ascii\00 */, "i8", ALLOC_NORMAL);
_module_functions=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_C_0_8342=allocate(16, "i8*", ALLOC_NORMAL);
__str3=allocate([105,109,97,112,0] /* imap\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([105,102,105,108,116,101,114,0] /* ifilter\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([105,122,105,112,0] /* izip\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([102,117,116,117,114,101,95,98,117,105,108,116,105,110,115,0] /* future_builtins\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([105,116,101,114,116,111,111,108,115,0] /* itertools\00 */, "i8", ALLOC_NORMAL);
HEAP[_module_functions]=((__str)&4294967295);
HEAP[_module_functions+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_module_functions+12]=((_hex_doc)&4294967295);
HEAP[_module_functions+16]=((__str1)&4294967295);
HEAP[_module_functions+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_module_functions+28]=((_oct_doc)&4294967295);
HEAP[_module_functions+32]=((__str2)&4294967295);
HEAP[_module_functions+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_module_functions+44]=((_ascii_doc)&4294967295);
HEAP[_C_0_8342]=((__str3)&4294967295);
HEAP[_C_0_8342+4]=((__str4)&4294967295);
HEAP[_C_0_8342+8]=((__str5)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

