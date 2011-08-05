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
  
var __Py_NoneStruct;
var _PyExc_TypeError;
var __str;
var __str1;
var __str2;
var _PyExc_ValueError;
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
var _Py_Py3kWarningFlag;
var _PyExc_DeprecationWarning;
var __str13;
var _PyType_Type;
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
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $handle_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $xp=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$handle_addr]=$handle;
        var $1=__PyObject_New(_Dltype); //@line 30 "dlmodule.c"
        var $2=$1; //@line 30 "dlmodule.c"
        HEAP[$xp]=$2; //@line 30 "dlmodule.c"
        var $3=HEAP[$xp]; //@line 31 "dlmodule.c"
        var $4=($3)==0; //@line 31 "dlmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 31 "dlmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 32 "dlmodule.c"
        __label__ = 3; break; //@line 32 "dlmodule.c"
      case 2: // $bb1
        var $5=HEAP[$xp]; //@line 33 "dlmodule.c"
        var $6=(($5+8)&4294967295); //@line 33 "dlmodule.c"
        var $7=HEAP[$handle_addr]; //@line 33 "dlmodule.c"
        HEAP[$6]=$7; //@line 33 "dlmodule.c"
        var $8=HEAP[$xp]; //@line 34 "dlmodule.c"
        var $9=$8; //@line 34 "dlmodule.c"
        HEAP[$0]=$9; //@line 34 "dlmodule.c"
        __label__ = 3; break; //@line 34 "dlmodule.c"
      case 3: // $bb2
        var $10=HEAP[$0]; //@line 32 "dlmodule.c"
        HEAP[$retval]=$10; //@line 32 "dlmodule.c"
        __label__ = 4; break; //@line 32 "dlmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 32 "dlmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 32 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dl_dealloc($xp) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xp_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$xp_addr]=$xp;
        var $0=HEAP[$xp_addr]; //@line 40 "dlmodule.c"
        var $1=(($0+8)&4294967295); //@line 40 "dlmodule.c"
        var $2=HEAP[$1]; //@line 40 "dlmodule.c"
        var $3=($2)!=0; //@line 40 "dlmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 40 "dlmodule.c"
      case 1: // $bb
        var $4=HEAP[$xp_addr]; //@line 41 "dlmodule.c"
        var $5=(($4+8)&4294967295); //@line 41 "dlmodule.c"
        var $6=HEAP[$5]; //@line 41 "dlmodule.c"
        var $7=$6; //@line 41 "dlmodule.c"
        var $8=_dlclose($7); //@line 41 "dlmodule.c"
        __label__ = 2; break; //@line 41 "dlmodule.c"
      case 2: // $bb1
        var $9=HEAP[$xp_addr]; //@line 42 "dlmodule.c"
        var $10=$9; //@line 42 "dlmodule.c"
        _PyObject_Free($10); //@line 42 "dlmodule.c"
        __label__ = 3; break; //@line 43 "dlmodule.c"
      case 3: // $return
        STACKTOP = __stackBase__;
        return; //@line 43 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dl_close($xp) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xp_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$xp_addr]=$xp;
        var $1=HEAP[$xp_addr]; //@line 48 "dlmodule.c"
        var $2=(($1+8)&4294967295); //@line 48 "dlmodule.c"
        var $3=HEAP[$2]; //@line 48 "dlmodule.c"
        var $4=($3)!=0; //@line 48 "dlmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 48 "dlmodule.c"
      case 1: // $bb
        var $5=HEAP[$xp_addr]; //@line 49 "dlmodule.c"
        var $6=(($5+8)&4294967295); //@line 49 "dlmodule.c"
        var $7=HEAP[$6]; //@line 49 "dlmodule.c"
        var $8=$7; //@line 49 "dlmodule.c"
        var $9=_dlclose($8); //@line 49 "dlmodule.c"
        var $10=HEAP[$xp_addr]; //@line 50 "dlmodule.c"
        var $11=(($10+8)&4294967295); //@line 50 "dlmodule.c"
        HEAP[$11]=0; //@line 50 "dlmodule.c"
        __label__ = 2; break; //@line 50 "dlmodule.c"
      case 2: // $bb1
        var $12=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 52 "dlmodule.c"
        var $13=((($12) + 1)&4294967295); //@line 52 "dlmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$13; //@line 52 "dlmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 53 "dlmodule.c"
        var $14=HEAP[$0]; //@line 53 "dlmodule.c"
        HEAP[$retval]=$14; //@line 53 "dlmodule.c"
        __label__ = 3; break; //@line 53 "dlmodule.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 53 "dlmodule.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 53 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dl_sym($xp, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xp_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $name=__stackBase__+16;
        var $func=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$xp_addr]=$xp;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 61 "dlmodule.c"
        var $2=(($1+4)&4294967295); //@line 61 "dlmodule.c"
        var $3=HEAP[$2]; //@line 61 "dlmodule.c"
        var $4=(($3+84)&4294967295); //@line 61 "dlmodule.c"
        var $5=HEAP[$4]; //@line 61 "dlmodule.c"
        var $6=($5) & 134217728; //@line 61 "dlmodule.c"
        var $7=((($6))|0)!=0; //@line 61 "dlmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 61 "dlmodule.c"
      case 1: // $bb
        var $8=HEAP[$args_addr]; //@line 62 "dlmodule.c"
        var $9=$8; //@line 62 "dlmodule.c"
        var $10=(($9+20)&4294967295); //@line 62 "dlmodule.c"
        var $11=(($10)&4294967295); //@line 62 "dlmodule.c"
        HEAP[$name]=$11; //@line 62 "dlmodule.c"
        var $12=HEAP[$xp_addr]; //@line 68 "dlmodule.c"
        var $13=(($12+8)&4294967295); //@line 68 "dlmodule.c"
        var $14=HEAP[$13]; //@line 68 "dlmodule.c"
        var $15=$14; //@line 68 "dlmodule.c"
        var $16=HEAP[$name]; //@line 68 "dlmodule.c"
        var $17=_dlsym($15, $16); //@line 68 "dlmodule.c"
        var $18=$17; //@line 68 "dlmodule.c"
        HEAP[$func]=$18; //@line 68 "dlmodule.c"
        var $19=HEAP[$func]; //@line 69 "dlmodule.c"
        var $20=($19)==0; //@line 69 "dlmodule.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 69 "dlmodule.c"
      case 2: // $bb1
        var $21=HEAP[$args_addr]; //@line 64 "dlmodule.c"
        var $22=(($21+4)&4294967295); //@line 64 "dlmodule.c"
        var $23=HEAP[$22]; //@line 64 "dlmodule.c"
        var $24=(($23+12)&4294967295); //@line 64 "dlmodule.c"
        var $25=HEAP[$24]; //@line 64 "dlmodule.c"
        var $26=HEAP[_PyExc_TypeError]; //@line 64 "dlmodule.c"
        var $27=_PyErr_Format($26, ((__str)&4294967295), $25); //@line 64 "dlmodule.c"
        HEAP[$0]=0; //@line 66 "dlmodule.c"
        __label__ = 5; break; //@line 66 "dlmodule.c"
      case 3: // $bb2
        var $28=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 70 "dlmodule.c"
        var $29=((($28) + 1)&4294967295); //@line 70 "dlmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$29; //@line 70 "dlmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 71 "dlmodule.c"
        __label__ = 5; break; //@line 71 "dlmodule.c"
      case 4: // $bb3
        var $30=HEAP[$func]; //@line 73 "dlmodule.c"
        var $31=($30); //@line 73 "dlmodule.c"
        var $32=_PyInt_FromLong($31); //@line 73 "dlmodule.c"
        HEAP[$0]=$32; //@line 73 "dlmodule.c"
        __label__ = 5; break; //@line 73 "dlmodule.c"
      case 5: // $bb4
        var $33=HEAP[$0]; //@line 66 "dlmodule.c"
        HEAP[$retval]=$33; //@line 66 "dlmodule.c"
        __label__ = 6; break; //@line 66 "dlmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 66 "dlmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 66 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dl_call($xp, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 80; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xp_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $name=__stackBase__+16;
        var $func=__stackBase__+20;
        var $alist=__stackBase__+24;
        var $res=__stackBase__+64;
        var $i=__stackBase__+68;
        var $n=__stackBase__+72;
        var $v=__stackBase__+76;
        var $_alloca_point_=0;
        HEAP[$xp_addr]=$xp;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 85 "dlmodule.c"
        var $2=_PyTuple_Size($1); //@line 85 "dlmodule.c"
        HEAP[$n]=$2; //@line 85 "dlmodule.c"
        var $3=HEAP[$n]; //@line 86 "dlmodule.c"
        var $4=((($3))|0) <= 0; //@line 86 "dlmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 86 "dlmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_TypeError]; //@line 87 "dlmodule.c"
        _PyErr_SetString($5, ((__str1)&4294967295)); //@line 87 "dlmodule.c"
        HEAP[$0]=0; //@line 88 "dlmodule.c"
        __label__ = 22; break; //@line 88 "dlmodule.c"
      case 2: // $bb1
        var $6=HEAP[$args_addr]; //@line 90 "dlmodule.c"
        var $7=_PyTuple_GetItem($6, 0); //@line 90 "dlmodule.c"
        HEAP[$name]=$7; //@line 90 "dlmodule.c"
        var $8=HEAP[$name]; //@line 91 "dlmodule.c"
        var $9=(($8+4)&4294967295); //@line 91 "dlmodule.c"
        var $10=HEAP[$9]; //@line 91 "dlmodule.c"
        var $11=(($10+84)&4294967295); //@line 91 "dlmodule.c"
        var $12=HEAP[$11]; //@line 91 "dlmodule.c"
        var $13=($12) & 134217728; //@line 91 "dlmodule.c"
        var $14=((($13))|0)==0; //@line 91 "dlmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 91 "dlmodule.c"
      case 3: // $bb2
        var $15=HEAP[_PyExc_TypeError]; //@line 92 "dlmodule.c"
        _PyErr_SetString($15, ((__str2)&4294967295)); //@line 92 "dlmodule.c"
        HEAP[$0]=0; //@line 94 "dlmodule.c"
        __label__ = 22; break; //@line 94 "dlmodule.c"
      case 4: // $bb3
        var $16=HEAP[$name]; //@line 96 "dlmodule.c"
        var $17=_PyString_AsString($16); //@line 96 "dlmodule.c"
        var $18=HEAP[$xp_addr]; //@line 96 "dlmodule.c"
        var $19=(($18+8)&4294967295); //@line 96 "dlmodule.c"
        var $20=HEAP[$19]; //@line 96 "dlmodule.c"
        var $21=$20; //@line 96 "dlmodule.c"
        var $22=_dlsym($21, $17); //@line 96 "dlmodule.c"
        var $23=$22; //@line 96 "dlmodule.c"
        HEAP[$func]=$23; //@line 96 "dlmodule.c"
        var $24=HEAP[$func]; //@line 99 "dlmodule.c"
        var $25=($24)==0; //@line 99 "dlmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 99 "dlmodule.c"
      case 5: // $bb4
        var $26=_dlerror(); //@line 100 "dlmodule.c"
        var $27=HEAP[_PyExc_ValueError]; //@line 100 "dlmodule.c"
        _PyErr_SetString($27, $26); //@line 100 "dlmodule.c"
        HEAP[$0]=0; //@line 101 "dlmodule.c"
        __label__ = 22; break; //@line 101 "dlmodule.c"
      case 6: // $bb5
        var $28=HEAP[$n]; //@line 103 "dlmodule.c"
        var $29=((($28) - 1)&4294967295); //@line 103 "dlmodule.c"
        var $30=((($29))|0) > 10; //@line 103 "dlmodule.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 103 "dlmodule.c"
      case 7: // $bb6
        var $31=HEAP[_PyExc_TypeError]; //@line 104 "dlmodule.c"
        _PyErr_SetString($31, ((__str3)&4294967295)); //@line 104 "dlmodule.c"
        HEAP[$0]=0; //@line 106 "dlmodule.c"
        __label__ = 22; break; //@line 106 "dlmodule.c"
      case 8: // $bb7
        HEAP[$i]=1; //@line 108 "dlmodule.c"
        __label__ = 17; break; //@line 108 "dlmodule.c"
      case 9: // $bb8
        var $32=HEAP[$args_addr]; //@line 109 "dlmodule.c"
        var $33=HEAP[$i]; //@line 109 "dlmodule.c"
        var $34=_PyTuple_GetItem($32, $33); //@line 109 "dlmodule.c"
        HEAP[$v]=$34; //@line 109 "dlmodule.c"
        var $35=HEAP[$v]; //@line 110 "dlmodule.c"
        var $36=(($35+4)&4294967295); //@line 110 "dlmodule.c"
        var $37=HEAP[$36]; //@line 110 "dlmodule.c"
        var $38=(($37+84)&4294967295); //@line 110 "dlmodule.c"
        var $39=HEAP[$38]; //@line 110 "dlmodule.c"
        var $40=($39) & 8388608; //@line 110 "dlmodule.c"
        var $41=((($40))|0)!=0; //@line 110 "dlmodule.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 110 "dlmodule.c"
      case 10: // $bb9
        var $42=HEAP[$i]; //@line 111 "dlmodule.c"
        var $43=((($42) - 1)&4294967295); //@line 111 "dlmodule.c"
        var $44=HEAP[$v]; //@line 111 "dlmodule.c"
        var $45=_PyInt_AsLong($44); //@line 111 "dlmodule.c"
        var $46=(($alist+$43*4)&4294967295); //@line 111 "dlmodule.c"
        HEAP[$46]=$45; //@line 111 "dlmodule.c"
        __label__ = 16; break; //@line 111 "dlmodule.c"
      case 11: // $bb10
        var $47=HEAP[$v]; //@line 112 "dlmodule.c"
        var $48=(($47+4)&4294967295); //@line 112 "dlmodule.c"
        var $49=HEAP[$48]; //@line 112 "dlmodule.c"
        var $50=(($49+84)&4294967295); //@line 112 "dlmodule.c"
        var $51=HEAP[$50]; //@line 112 "dlmodule.c"
        var $52=($51) & 134217728; //@line 112 "dlmodule.c"
        var $53=((($52))|0)!=0; //@line 112 "dlmodule.c"
        if ($53) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 112 "dlmodule.c"
      case 12: // $bb11
        var $54=HEAP[$i]; //@line 113 "dlmodule.c"
        var $55=((($54) - 1)&4294967295); //@line 113 "dlmodule.c"
        var $56=HEAP[$v]; //@line 113 "dlmodule.c"
        var $57=_PyString_AsString($56); //@line 113 "dlmodule.c"
        var $58=($57); //@line 113 "dlmodule.c"
        var $59=(($alist+$55*4)&4294967295); //@line 113 "dlmodule.c"
        HEAP[$59]=$58; //@line 113 "dlmodule.c"
        __label__ = 16; break; //@line 113 "dlmodule.c"
      case 13: // $bb12
        var $60=HEAP[$v]; //@line 114 "dlmodule.c"
        var $61=($60)==(__Py_NoneStruct); //@line 114 "dlmodule.c"
        if ($61) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 114 "dlmodule.c"
      case 14: // $bb13
        var $62=HEAP[$i]; //@line 115 "dlmodule.c"
        var $63=((($62) - 1)&4294967295); //@line 115 "dlmodule.c"
        var $64=(($alist+$63*4)&4294967295); //@line 115 "dlmodule.c"
        HEAP[$64]=0; //@line 115 "dlmodule.c"
        __label__ = 16; break; //@line 115 "dlmodule.c"
      case 15: // $bb14
        var $65=HEAP[_PyExc_TypeError]; //@line 117 "dlmodule.c"
        _PyErr_SetString($65, ((__str4)&4294967295)); //@line 117 "dlmodule.c"
        HEAP[$0]=0; //@line 119 "dlmodule.c"
        __label__ = 22; break; //@line 119 "dlmodule.c"
      case 16: // $bb15
        var $66=HEAP[$i]; //@line 108 "dlmodule.c"
        var $67=((($66) + 1)&4294967295); //@line 108 "dlmodule.c"
        HEAP[$i]=$67; //@line 108 "dlmodule.c"
        __label__ = 17; break; //@line 108 "dlmodule.c"
      case 17: // $bb16
        var $68=HEAP[$i]; //@line 108 "dlmodule.c"
        var $69=HEAP[$n]; //@line 108 "dlmodule.c"
        var $70=((($68))|0) < ((($69))|0); //@line 108 "dlmodule.c"
        if ($70) { __label__ = 9; break; } else { __label__ = 18; break; } //@line 108 "dlmodule.c"
      case 18: // $bb17
        __label__ = 20; break; //@line 108 "dlmodule.c"
      case 19: // $bb18
        var $71=HEAP[$i]; //@line 123 "dlmodule.c"
        var $72=((($71) - 1)&4294967295); //@line 123 "dlmodule.c"
        var $73=(($alist+$72*4)&4294967295); //@line 123 "dlmodule.c"
        HEAP[$73]=0; //@line 123 "dlmodule.c"
        var $74=HEAP[$i]; //@line 122 "dlmodule.c"
        var $75=((($74) + 1)&4294967295); //@line 122 "dlmodule.c"
        HEAP[$i]=$75; //@line 122 "dlmodule.c"
        __label__ = 20; break; //@line 122 "dlmodule.c"
      case 20: // $bb19
        var $76=HEAP[$i]; //@line 122 "dlmodule.c"
        var $77=((($76))|0) <= 10; //@line 122 "dlmodule.c"
        if ($77) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 122 "dlmodule.c"
      case 21: // $bb20
        var $78=(($alist+36)&4294967295); //@line 124 "dlmodule.c"
        var $79=HEAP[$78]; //@line 124 "dlmodule.c"
        var $80=(($alist+32)&4294967295); //@line 124 "dlmodule.c"
        var $81=HEAP[$80]; //@line 124 "dlmodule.c"
        var $82=(($alist+28)&4294967295); //@line 124 "dlmodule.c"
        var $83=HEAP[$82]; //@line 124 "dlmodule.c"
        var $84=(($alist+24)&4294967295); //@line 124 "dlmodule.c"
        var $85=HEAP[$84]; //@line 124 "dlmodule.c"
        var $86=(($alist+20)&4294967295); //@line 124 "dlmodule.c"
        var $87=HEAP[$86]; //@line 124 "dlmodule.c"
        var $88=(($alist+16)&4294967295); //@line 124 "dlmodule.c"
        var $89=HEAP[$88]; //@line 124 "dlmodule.c"
        var $90=(($alist+12)&4294967295); //@line 124 "dlmodule.c"
        var $91=HEAP[$90]; //@line 124 "dlmodule.c"
        var $92=(($alist+8)&4294967295); //@line 124 "dlmodule.c"
        var $93=HEAP[$92]; //@line 124 "dlmodule.c"
        var $94=(($alist+4)&4294967295); //@line 124 "dlmodule.c"
        var $95=HEAP[$94]; //@line 124 "dlmodule.c"
        var $96=(($alist)&4294967295); //@line 124 "dlmodule.c"
        var $97=HEAP[$96]; //@line 124 "dlmodule.c"
        var $98=HEAP[$func]; //@line 124 "dlmodule.c"
        var $99=FUNCTION_TABLE[$98]($97, $95, $93, $91, $89, $87, $85, $83, $81, $79); //@line 124 "dlmodule.c"
        HEAP[$res]=$99; //@line 124 "dlmodule.c"
        var $100=HEAP[$res]; //@line 126 "dlmodule.c"
        var $101=_PyInt_FromLong($100); //@line 126 "dlmodule.c"
        HEAP[$0]=$101; //@line 126 "dlmodule.c"
        __label__ = 22; break; //@line 126 "dlmodule.c"
      case 22: // $bb21
        var $102=HEAP[$0]; //@line 88 "dlmodule.c"
        HEAP[$retval]=$102; //@line 88 "dlmodule.c"
        __label__ = 23; break; //@line 88 "dlmodule.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 88 "dlmodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 88 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dl_getattr($xp, $name) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xp_addr=__stackBase__;
        var $name_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$xp_addr]=$xp;
        HEAP[$name_addr]=$name;
        var $1=HEAP[$xp_addr]; //@line 139 "dlmodule.c"
        var $2=$1; //@line 139 "dlmodule.c"
        var $3=HEAP[$name_addr]; //@line 139 "dlmodule.c"
        var $4=_Py_FindMethod(_dlobject_methods, $2, $3); //@line 139 "dlmodule.c"
        HEAP[$0]=$4; //@line 139 "dlmodule.c"
        var $5=HEAP[$0]; //@line 139 "dlmodule.c"
        HEAP[$retval]=$5; //@line 139 "dlmodule.c"
        __label__ = 1; break; //@line 139 "dlmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 139 "dlmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 139 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dl_open($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $name=__stackBase__+16;
        var $mode=__stackBase__+20;
        var $handle=__stackBase__+24;
        var $errmsg=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 174 "dlmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str9)&4294967295), $name); //@line 174 "dlmodule.c"
        var $3=((($2))|0)!=0; //@line 174 "dlmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 174 "dlmodule.c"
      case 1: // $bb
        HEAP[$mode]=1; //@line 175 "dlmodule.c"
        __label__ = 4; break; //@line 175 "dlmodule.c"
      case 2: // $bb1
        _PyErr_Clear(); //@line 177 "dlmodule.c"
        var $4=HEAP[$args_addr]; //@line 178 "dlmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str10)&4294967295), $name, $mode); //@line 178 "dlmodule.c"
        var $6=((($5))|0)==0; //@line 178 "dlmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 178 "dlmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 179 "dlmodule.c"
        __label__ = 9; break; //@line 179 "dlmodule.c"
      case 4: // $bb3
        var $7=HEAP[$mode]; //@line 187 "dlmodule.c"
        var $8=HEAP[$name]; //@line 187 "dlmodule.c"
        var $9=_dlopen($8, $7); //@line 187 "dlmodule.c"
        var $10=$9; //@line 187 "dlmodule.c"
        HEAP[$handle]=$10; //@line 187 "dlmodule.c"
        var $11=HEAP[$handle]; //@line 188 "dlmodule.c"
        var $12=($11)==0; //@line 188 "dlmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 188 "dlmodule.c"
      case 5: // $bb4
        var $13=_dlerror(); //@line 189 "dlmodule.c"
        HEAP[$errmsg]=$13; //@line 189 "dlmodule.c"
        var $14=HEAP[$errmsg]; //@line 190 "dlmodule.c"
        var $15=($14)==0; //@line 190 "dlmodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 190 "dlmodule.c"
      case 6: // $bb5
        HEAP[$errmsg]=((__str11)&4294967295); //@line 191 "dlmodule.c"
        __label__ = 7; break; //@line 191 "dlmodule.c"
      case 7: // $bb6
        var $16=HEAP[_Dlerror]; //@line 192 "dlmodule.c"
        var $17=HEAP[$errmsg]; //@line 192 "dlmodule.c"
        _PyErr_SetString($16, $17); //@line 192 "dlmodule.c"
        HEAP[$0]=0; //@line 193 "dlmodule.c"
        __label__ = 9; break; //@line 193 "dlmodule.c"
      case 8: // $bb7
        var $18=HEAP[$handle]; //@line 213 "dlmodule.c"
        var $19=_newdlobject($18); //@line 213 "dlmodule.c"
        HEAP[$0]=$19; //@line 213 "dlmodule.c"
        __label__ = 9; break; //@line 213 "dlmodule.c"
      case 9: // $bb8
        var $20=HEAP[$0]; //@line 179 "dlmodule.c"
        HEAP[$retval]=$20; //@line 179 "dlmodule.c"
        __label__ = 10; break; //@line 179 "dlmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 179 "dlmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 179 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _insint($d, $name, $value) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $d_addr=__stackBase__;
        var $name_addr=__stackBase__+4;
        var $value_addr=__stackBase__+8;
        var $v=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$d_addr]=$d;
        HEAP[$name_addr]=$name;
        HEAP[$value_addr]=$value;
        var $0=HEAP[$value_addr]; //@line 229 "dlmodule.c"
        var $1=_PyInt_FromLong($0); //@line 229 "dlmodule.c"
        HEAP[$v]=$1; //@line 229 "dlmodule.c"
        var $2=HEAP[$v]; //@line 230 "dlmodule.c"
        var $3=($2)==0; //@line 230 "dlmodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 230 "dlmodule.c"
      case 1: // $bb
        var $4=HEAP[$d_addr]; //@line 230 "dlmodule.c"
        var $5=HEAP[$name_addr]; //@line 230 "dlmodule.c"
        var $6=HEAP[$v]; //@line 230 "dlmodule.c"
        var $7=_PyDict_SetItemString($4, $5, $6); //@line 230 "dlmodule.c"
        var $8=((($7))|0)!=0; //@line 230 "dlmodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 230 "dlmodule.c"
      case 2: // $bb1
        _PyErr_Clear(); //@line 231 "dlmodule.c"
        __label__ = 3; break; //@line 231 "dlmodule.c"
      case 3: // $bb2
        var $9=HEAP[$v]; //@line 233 "dlmodule.c"
        var $10=($9)!=0; //@line 233 "dlmodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 233 "dlmodule.c"
      case 4: // $bb3
        var $11=HEAP[$v]; //@line 233 "dlmodule.c"
        var $12=(($11)&4294967295); //@line 233 "dlmodule.c"
        var $13=HEAP[$12]; //@line 233 "dlmodule.c"
        var $14=((($13) - 1)&4294967295); //@line 233 "dlmodule.c"
        var $15=HEAP[$v]; //@line 233 "dlmodule.c"
        var $16=(($15)&4294967295); //@line 233 "dlmodule.c"
        HEAP[$16]=$14; //@line 233 "dlmodule.c"
        var $17=HEAP[$v]; //@line 233 "dlmodule.c"
        var $18=(($17)&4294967295); //@line 233 "dlmodule.c"
        var $19=HEAP[$18]; //@line 233 "dlmodule.c"
        var $20=((($19))|0)==0; //@line 233 "dlmodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 233 "dlmodule.c"
      case 5: // $bb4
        var $21=HEAP[$v]; //@line 233 "dlmodule.c"
        var $22=(($21+4)&4294967295); //@line 233 "dlmodule.c"
        var $23=HEAP[$22]; //@line 233 "dlmodule.c"
        var $24=(($23+24)&4294967295); //@line 233 "dlmodule.c"
        var $25=HEAP[$24]; //@line 233 "dlmodule.c"
        var $26=HEAP[$v]; //@line 233 "dlmodule.c"
        FUNCTION_TABLE[$25]($26); //@line 233 "dlmodule.c"
        __label__ = 6; break; //@line 233 "dlmodule.c"
      case 6: // $bb5
        __label__ = 7; break; //@line 234 "dlmodule.c"
      case 7: // $return
        STACKTOP = __stackBase__;
        return; //@line 234 "dlmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initdl() {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $d=__stackBase__+4;
        var $x=__stackBase__+8;
        var $_alloca_point_=0;
        var $0=HEAP[_Py_Py3kWarningFlag]; //@line 241 "dlmodule.c"
        var $1=((($0))|0)!=0; //@line 241 "dlmodule.c"
        if ($1) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 241 "dlmodule.c"
      case 1: // $bb
        var $2=HEAP[_PyExc_DeprecationWarning]; //@line 241 "dlmodule.c"
        var $3=_PyErr_WarnEx($2, ((__str13)&4294967295), 2); //@line 241 "dlmodule.c"
        var $4=((($3))|0) < 0; //@line 241 "dlmodule.c"
        if ($4) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 241 "dlmodule.c"
      case 2: // $bb1
        var $5=((_Dltype+4)&4294967295); //@line 246 "dlmodule.c"
        HEAP[$5]=_PyType_Type; //@line 246 "dlmodule.c"
        var $6=_Py_InitModule4(((__str14)&4294967295), _dl_methods, 0, 0, 1013); //@line 249 "dlmodule.c"
        HEAP[$m]=$6; //@line 249 "dlmodule.c"
        var $7=HEAP[$m]; //@line 250 "dlmodule.c"
        var $8=($7)==0; //@line 250 "dlmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 250 "dlmodule.c"
      case 3: // $bb2
        var $9=HEAP[$m]; //@line 254 "dlmodule.c"
        var $10=_PyModule_GetDict($9); //@line 254 "dlmodule.c"
        HEAP[$d]=$10; //@line 254 "dlmodule.c"
        var $11=_PyErr_NewException(((__str15)&4294967295), 0, 0); //@line 255 "dlmodule.c"
        HEAP[$x]=$11; //@line 255 "dlmodule.c"
        var $12=HEAP[$x]; //@line 255 "dlmodule.c"
        HEAP[_Dlerror]=$12; //@line 255 "dlmodule.c"
        var $13=HEAP[$d]; //@line 256 "dlmodule.c"
        var $14=HEAP[$x]; //@line 256 "dlmodule.c"
        var $15=_PyDict_SetItemString($13, ((__str16)&4294967295), $14); //@line 256 "dlmodule.c"
        var $16=_PyInt_FromLong(1); //@line 257 "dlmodule.c"
        HEAP[$x]=$16; //@line 257 "dlmodule.c"
        var $17=HEAP[$d]; //@line 258 "dlmodule.c"
        var $18=HEAP[$x]; //@line 258 "dlmodule.c"
        var $19=_PyDict_SetItemString($17, ((__str17)&4294967295), $18); //@line 258 "dlmodule.c"
        var $20=HEAP[$d]; //@line 261 "dlmodule.c"
        _insint($20, ((__str18)&4294967295), 2); //@line 261 "dlmodule.c"
        var $21=HEAP[$d]; //@line 264 "dlmodule.c"
        _insint($21, ((__str19)&4294967295), 4); //@line 264 "dlmodule.c"
        var $22=HEAP[$d]; //@line 267 "dlmodule.c"
        _insint($22, ((__str20)&4294967295), 256); //@line 267 "dlmodule.c"
        var $23=HEAP[$d]; //@line 270 "dlmodule.c"
        _insint($23, ((__str21)&4294967295), 0); //@line 270 "dlmodule.c"
        var $24=HEAP[$d]; //@line 282 "dlmodule.c"
        _insint($24, ((__str22)&4294967295), 4096); //@line 282 "dlmodule.c"
        __label__ = 4; break; //@line 282 "dlmodule.c"
      case 4: // $bb3
        __label__ = 5; break; //@line 243 "dlmodule.c"
      case 5: // $return
        STACKTOP = __stackBase__;
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
HEAP[_dlobject_methods]=((__str5)&4294967295);
HEAP[_dlobject_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_dlobject_methods+16]=((__str6)&4294967295);
HEAP[_dlobject_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_dlobject_methods+32]=((__str7)&4294967295);
HEAP[_dlobject_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_Dltype+12]=((__str8)&4294967295);
HEAP[_Dltype+24]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_Dltype+32]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_dl_methods]=((__str12)&4294967295);
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

