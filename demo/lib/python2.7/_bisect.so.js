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



var $0___SIZE = 112; // %0
  
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
  
var _PyExc_ValueError;
var __str;
var __str1;
var _keywords_8354;
var __str2;
var __str3;
var __str4;
var __str5;
var _bisect_right_doc;
var __str6;
var _keywords_8380;
var _PyList_Type;
var __str7;
var __str8;
var __Py_NoneStruct;
var _insort_right_doc;
var __str9;
var _keywords_8467;
var _bisect_left_doc;
var __str10;
var _keywords_8493;
var __str11;
var _insort_left_doc;
var _bisect_doc;
var _insort_doc;
var __str12;
var __str13;
var __str14;
var __str15;
var __str16;
var __str17;
var _bisect_methods;
var _module_doc;
var __str18;














  function _internal_bisect_right($list, $item, $lo, $hi) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $list_addr=__stackBase__;
        var $item_addr=__stackBase__+4;
        var $lo_addr=__stackBase__+8;
        var $hi_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $litem=__stackBase__+24;
        var $mid=__stackBase__+28;
        var $res=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$list_addr]=$list;
        HEAP[$item_addr]=$item;
        HEAP[$lo_addr]=$lo;
        HEAP[$hi_addr]=$hi;
        var $1=HEAP[$lo_addr]; //@line 14 "_bisectmodule.c"
        var $2=((($1))|0) < 0; //@line 14 "_bisectmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 14 "_bisectmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_ValueError]; //@line 15 "_bisectmodule.c"
        _PyErr_SetString($3, ((__str)&4294967295)); //@line 15 "_bisectmodule.c"
        HEAP[$0]=-1; //@line 16 "_bisectmodule.c"
        __label__ = 17; break; //@line 16 "_bisectmodule.c"
      case 2: // $bb1
        var $4=HEAP[$hi_addr]; //@line 18 "_bisectmodule.c"
        var $5=((($4))|0)==-1; //@line 18 "_bisectmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 18 "_bisectmodule.c"
      case 3: // $bb2
        var $6=HEAP[$list_addr]; //@line 19 "_bisectmodule.c"
        var $7=_PySequence_Size($6); //@line 19 "_bisectmodule.c"
        HEAP[$hi_addr]=$7; //@line 19 "_bisectmodule.c"
        var $8=HEAP[$hi_addr]; //@line 20 "_bisectmodule.c"
        var $9=((($8))|0) < 0; //@line 20 "_bisectmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 20 "_bisectmodule.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 21 "_bisectmodule.c"
        __label__ = 17; break; //@line 21 "_bisectmodule.c"
      case 5: // $bb4
        __label__ = 15; break; //@line 21 "_bisectmodule.c"
      case 6: // $bb5
        var $10=HEAP[$lo_addr]; //@line 24 "_bisectmodule.c"
        var $11=HEAP[$hi_addr]; //@line 24 "_bisectmodule.c"
        var $12=((($10) + ($11))&4294967295); //@line 24 "_bisectmodule.c"
        var $13=((((($12))|0)/2)|0); //@line 24 "_bisectmodule.c"
        HEAP[$mid]=$13; //@line 24 "_bisectmodule.c"
        var $14=HEAP[$list_addr]; //@line 25 "_bisectmodule.c"
        var $15=HEAP[$mid]; //@line 25 "_bisectmodule.c"
        var $16=_PySequence_GetItem($14, $15); //@line 25 "_bisectmodule.c"
        HEAP[$litem]=$16; //@line 25 "_bisectmodule.c"
        var $17=HEAP[$litem]; //@line 26 "_bisectmodule.c"
        var $18=($17)==0; //@line 26 "_bisectmodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 26 "_bisectmodule.c"
      case 7: // $bb6
        HEAP[$0]=-1; //@line 27 "_bisectmodule.c"
        __label__ = 17; break; //@line 27 "_bisectmodule.c"
      case 8: // $bb7
        var $19=HEAP[$item_addr]; //@line 28 "_bisectmodule.c"
        var $20=HEAP[$litem]; //@line 28 "_bisectmodule.c"
        var $21=_PyObject_RichCompareBool($19, $20, 0); //@line 28 "_bisectmodule.c"
        HEAP[$res]=$21; //@line 28 "_bisectmodule.c"
        var $22=HEAP[$litem]; //@line 29 "_bisectmodule.c"
        var $23=(($22)&4294967295); //@line 29 "_bisectmodule.c"
        var $24=HEAP[$23]; //@line 29 "_bisectmodule.c"
        var $25=((($24) - 1)&4294967295); //@line 29 "_bisectmodule.c"
        var $26=HEAP[$litem]; //@line 29 "_bisectmodule.c"
        var $27=(($26)&4294967295); //@line 29 "_bisectmodule.c"
        HEAP[$27]=$25; //@line 29 "_bisectmodule.c"
        var $28=HEAP[$litem]; //@line 29 "_bisectmodule.c"
        var $29=(($28)&4294967295); //@line 29 "_bisectmodule.c"
        var $30=HEAP[$29]; //@line 29 "_bisectmodule.c"
        var $31=((($30))|0)==0; //@line 29 "_bisectmodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 29 "_bisectmodule.c"
      case 9: // $bb8
        var $32=HEAP[$litem]; //@line 29 "_bisectmodule.c"
        var $33=(($32+4)&4294967295); //@line 29 "_bisectmodule.c"
        var $34=HEAP[$33]; //@line 29 "_bisectmodule.c"
        var $35=(($34+24)&4294967295); //@line 29 "_bisectmodule.c"
        var $36=HEAP[$35]; //@line 29 "_bisectmodule.c"
        var $37=HEAP[$litem]; //@line 29 "_bisectmodule.c"
        FUNCTION_TABLE[$36]($37); //@line 29 "_bisectmodule.c"
        __label__ = 10; break; //@line 29 "_bisectmodule.c"
      case 10: // $bb9
        var $38=HEAP[$res]; //@line 30 "_bisectmodule.c"
        var $39=((($38))|0) < 0; //@line 30 "_bisectmodule.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 30 "_bisectmodule.c"
      case 11: // $bb10
        HEAP[$0]=-1; //@line 31 "_bisectmodule.c"
        __label__ = 17; break; //@line 31 "_bisectmodule.c"
      case 12: // $bb11
        var $40=HEAP[$res]; //@line 32 "_bisectmodule.c"
        var $41=((($40))|0)!=0; //@line 32 "_bisectmodule.c"
        if ($41) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 32 "_bisectmodule.c"
      case 13: // $bb12
        var $42=HEAP[$mid]; //@line 33 "_bisectmodule.c"
        HEAP[$hi_addr]=$42; //@line 33 "_bisectmodule.c"
        __label__ = 15; break; //@line 33 "_bisectmodule.c"
      case 14: // $bb13
        var $43=HEAP[$mid]; //@line 35 "_bisectmodule.c"
        var $44=((($43) + 1)&4294967295); //@line 35 "_bisectmodule.c"
        HEAP[$lo_addr]=$44; //@line 35 "_bisectmodule.c"
        __label__ = 15; break; //@line 35 "_bisectmodule.c"
      case 15: // $bb14
        var $45=HEAP[$lo_addr]; //@line 23 "_bisectmodule.c"
        var $46=HEAP[$hi_addr]; //@line 23 "_bisectmodule.c"
        var $47=((($45))|0) < ((($46))|0); //@line 23 "_bisectmodule.c"
        if ($47) { __label__ = 6; break; } else { __label__ = 16; break; } //@line 23 "_bisectmodule.c"
      case 16: // $bb15
        var $48=HEAP[$lo_addr]; //@line 37 "_bisectmodule.c"
        HEAP[$0]=$48; //@line 37 "_bisectmodule.c"
        __label__ = 17; break; //@line 37 "_bisectmodule.c"
      case 17: // $bb16
        var $49=HEAP[$0]; //@line 16 "_bisectmodule.c"
        HEAP[$retval]=$49; //@line 16 "_bisectmodule.c"
        __label__ = 18; break; //@line 16 "_bisectmodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 16 "_bisectmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 16 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bisect_right($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $list=__stackBase__+20;
        var $item=__stackBase__+24;
        var $lo=__stackBase__+28;
        var $hi=__stackBase__+32;
        var $index=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$lo]=0; //@line 44 "_bisectmodule.c"
        HEAP[$hi]=-1; //@line 45 "_bisectmodule.c"
        var $1=HEAP[$args_addr]; //@line 49 "_bisectmodule.c"
        var $2=HEAP[$kw_addr]; //@line 49 "_bisectmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str1)&4294967295), ((_keywords_8354)&4294967295), $list, $item, $lo, $hi); //@line 49 "_bisectmodule.c"
        var $4=((($3))|0)==0; //@line 49 "_bisectmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 49 "_bisectmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 51 "_bisectmodule.c"
        __label__ = 5; break; //@line 51 "_bisectmodule.c"
      case 2: // $bb1
        var $5=HEAP[$hi]; //@line 52 "_bisectmodule.c"
        var $6=HEAP[$lo]; //@line 52 "_bisectmodule.c"
        var $7=HEAP[$item]; //@line 52 "_bisectmodule.c"
        var $8=HEAP[$list]; //@line 52 "_bisectmodule.c"
        var $9=_internal_bisect_right($8, $7, $6, $5); //@line 52 "_bisectmodule.c"
        HEAP[$index]=$9; //@line 52 "_bisectmodule.c"
        var $10=HEAP[$index]; //@line 53 "_bisectmodule.c"
        var $11=((($10))|0) < 0; //@line 53 "_bisectmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 53 "_bisectmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 54 "_bisectmodule.c"
        __label__ = 5; break; //@line 54 "_bisectmodule.c"
      case 4: // $bb3
        var $12=HEAP[$index]; //@line 55 "_bisectmodule.c"
        var $13=_PyInt_FromSsize_t($12); //@line 55 "_bisectmodule.c"
        HEAP[$0]=$13; //@line 55 "_bisectmodule.c"
        __label__ = 5; break; //@line 55 "_bisectmodule.c"
      case 5: // $bb4
        var $14=HEAP[$0]; //@line 51 "_bisectmodule.c"
        HEAP[$retval]=$14; //@line 51 "_bisectmodule.c"
        __label__ = 6; break; //@line 51 "_bisectmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 51 "_bisectmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 51 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _insort_right($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $list=__stackBase__+20;
        var $item=__stackBase__+24;
        var $result=__stackBase__+28;
        var $lo=__stackBase__+32;
        var $hi=__stackBase__+36;
        var $index=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$lo]=0; //@line 74 "_bisectmodule.c"
        HEAP[$hi]=-1; //@line 75 "_bisectmodule.c"
        var $1=HEAP[$args_addr]; //@line 79 "_bisectmodule.c"
        var $2=HEAP[$kw_addr]; //@line 79 "_bisectmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str6)&4294967295), ((_keywords_8380)&4294967295), $list, $item, $lo, $hi); //@line 79 "_bisectmodule.c"
        var $4=((($3))|0)==0; //@line 79 "_bisectmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 79 "_bisectmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 81 "_bisectmodule.c"
        __label__ = 13; break; //@line 81 "_bisectmodule.c"
      case 2: // $bb1
        var $5=HEAP[$hi]; //@line 82 "_bisectmodule.c"
        var $6=HEAP[$lo]; //@line 82 "_bisectmodule.c"
        var $7=HEAP[$item]; //@line 82 "_bisectmodule.c"
        var $8=HEAP[$list]; //@line 82 "_bisectmodule.c"
        var $9=_internal_bisect_right($8, $7, $6, $5); //@line 82 "_bisectmodule.c"
        HEAP[$index]=$9; //@line 82 "_bisectmodule.c"
        var $10=HEAP[$index]; //@line 83 "_bisectmodule.c"
        var $11=((($10))|0) < 0; //@line 83 "_bisectmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 83 "_bisectmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 84 "_bisectmodule.c"
        __label__ = 13; break; //@line 84 "_bisectmodule.c"
      case 4: // $bb3
        var $12=HEAP[$list]; //@line 85 "_bisectmodule.c"
        var $13=(($12+4)&4294967295); //@line 85 "_bisectmodule.c"
        var $14=HEAP[$13]; //@line 85 "_bisectmodule.c"
        var $15=($14)==(_PyList_Type); //@line 85 "_bisectmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 85 "_bisectmodule.c"
      case 5: // $bb4
        var $16=HEAP[$item]; //@line 86 "_bisectmodule.c"
        var $17=HEAP[$list]; //@line 86 "_bisectmodule.c"
        var $18=HEAP[$index]; //@line 86 "_bisectmodule.c"
        var $19=_PyList_Insert($17, $18, $16); //@line 86 "_bisectmodule.c"
        var $20=((($19))|0) < 0; //@line 86 "_bisectmodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 86 "_bisectmodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 87 "_bisectmodule.c"
        __label__ = 13; break; //@line 87 "_bisectmodule.c"
      case 7: // $bb6
        __label__ = 12; break; //@line 87 "_bisectmodule.c"
      case 8: // $bb7
        var $21=HEAP[$item]; //@line 89 "_bisectmodule.c"
        var $22=HEAP[$list]; //@line 89 "_bisectmodule.c"
        var $23=HEAP[$index]; //@line 89 "_bisectmodule.c"
        var $24=_PyObject_CallMethod($22, ((__str7)&4294967295), ((__str8)&4294967295), $23, $21); //@line 89 "_bisectmodule.c"
        HEAP[$result]=$24; //@line 89 "_bisectmodule.c"
        var $25=HEAP[$result]; //@line 91 "_bisectmodule.c"
        var $26=($25)==0; //@line 91 "_bisectmodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 91 "_bisectmodule.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 92 "_bisectmodule.c"
        __label__ = 13; break; //@line 92 "_bisectmodule.c"
      case 10: // $bb9
        var $27=HEAP[$result]; //@line 93 "_bisectmodule.c"
        var $28=(($27)&4294967295); //@line 93 "_bisectmodule.c"
        var $29=HEAP[$28]; //@line 93 "_bisectmodule.c"
        var $30=((($29) - 1)&4294967295); //@line 93 "_bisectmodule.c"
        var $31=HEAP[$result]; //@line 93 "_bisectmodule.c"
        var $32=(($31)&4294967295); //@line 93 "_bisectmodule.c"
        HEAP[$32]=$30; //@line 93 "_bisectmodule.c"
        var $33=HEAP[$result]; //@line 93 "_bisectmodule.c"
        var $34=(($33)&4294967295); //@line 93 "_bisectmodule.c"
        var $35=HEAP[$34]; //@line 93 "_bisectmodule.c"
        var $36=((($35))|0)==0; //@line 93 "_bisectmodule.c"
        if ($36) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 93 "_bisectmodule.c"
      case 11: // $bb10
        var $37=HEAP[$result]; //@line 93 "_bisectmodule.c"
        var $38=(($37+4)&4294967295); //@line 93 "_bisectmodule.c"
        var $39=HEAP[$38]; //@line 93 "_bisectmodule.c"
        var $40=(($39+24)&4294967295); //@line 93 "_bisectmodule.c"
        var $41=HEAP[$40]; //@line 93 "_bisectmodule.c"
        var $42=HEAP[$result]; //@line 93 "_bisectmodule.c"
        FUNCTION_TABLE[$41]($42); //@line 93 "_bisectmodule.c"
        __label__ = 12; break; //@line 93 "_bisectmodule.c"
      case 12: // $bb11
        var $43=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 96 "_bisectmodule.c"
        var $44=((($43) + 1)&4294967295); //@line 96 "_bisectmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$44; //@line 96 "_bisectmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 96 "_bisectmodule.c"
        __label__ = 13; break; //@line 96 "_bisectmodule.c"
      case 13: // $bb12
        var $45=HEAP[$0]; //@line 81 "_bisectmodule.c"
        HEAP[$retval]=$45; //@line 81 "_bisectmodule.c"
        __label__ = 14; break; //@line 81 "_bisectmodule.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 81 "_bisectmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 81 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _internal_bisect_left($list, $item, $lo, $hi) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $list_addr=__stackBase__;
        var $item_addr=__stackBase__+4;
        var $lo_addr=__stackBase__+8;
        var $hi_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $litem=__stackBase__+24;
        var $mid=__stackBase__+28;
        var $res=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$list_addr]=$list;
        HEAP[$item_addr]=$item;
        HEAP[$lo_addr]=$lo;
        HEAP[$hi_addr]=$hi;
        var $1=HEAP[$lo_addr]; //@line 115 "_bisectmodule.c"
        var $2=((($1))|0) < 0; //@line 115 "_bisectmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 115 "_bisectmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_ValueError]; //@line 116 "_bisectmodule.c"
        _PyErr_SetString($3, ((__str)&4294967295)); //@line 116 "_bisectmodule.c"
        HEAP[$0]=-1; //@line 117 "_bisectmodule.c"
        __label__ = 17; break; //@line 117 "_bisectmodule.c"
      case 2: // $bb1
        var $4=HEAP[$hi_addr]; //@line 119 "_bisectmodule.c"
        var $5=((($4))|0)==-1; //@line 119 "_bisectmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 119 "_bisectmodule.c"
      case 3: // $bb2
        var $6=HEAP[$list_addr]; //@line 120 "_bisectmodule.c"
        var $7=_PySequence_Size($6); //@line 120 "_bisectmodule.c"
        HEAP[$hi_addr]=$7; //@line 120 "_bisectmodule.c"
        var $8=HEAP[$hi_addr]; //@line 121 "_bisectmodule.c"
        var $9=((($8))|0) < 0; //@line 121 "_bisectmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 121 "_bisectmodule.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 122 "_bisectmodule.c"
        __label__ = 17; break; //@line 122 "_bisectmodule.c"
      case 5: // $bb4
        __label__ = 15; break; //@line 122 "_bisectmodule.c"
      case 6: // $bb5
        var $10=HEAP[$lo_addr]; //@line 125 "_bisectmodule.c"
        var $11=HEAP[$hi_addr]; //@line 125 "_bisectmodule.c"
        var $12=((($10) + ($11))&4294967295); //@line 125 "_bisectmodule.c"
        var $13=((((($12))|0)/2)|0); //@line 125 "_bisectmodule.c"
        HEAP[$mid]=$13; //@line 125 "_bisectmodule.c"
        var $14=HEAP[$list_addr]; //@line 126 "_bisectmodule.c"
        var $15=HEAP[$mid]; //@line 126 "_bisectmodule.c"
        var $16=_PySequence_GetItem($14, $15); //@line 126 "_bisectmodule.c"
        HEAP[$litem]=$16; //@line 126 "_bisectmodule.c"
        var $17=HEAP[$litem]; //@line 127 "_bisectmodule.c"
        var $18=($17)==0; //@line 127 "_bisectmodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 127 "_bisectmodule.c"
      case 7: // $bb6
        HEAP[$0]=-1; //@line 128 "_bisectmodule.c"
        __label__ = 17; break; //@line 128 "_bisectmodule.c"
      case 8: // $bb7
        var $19=HEAP[$litem]; //@line 129 "_bisectmodule.c"
        var $20=HEAP[$item_addr]; //@line 129 "_bisectmodule.c"
        var $21=_PyObject_RichCompareBool($19, $20, 0); //@line 129 "_bisectmodule.c"
        HEAP[$res]=$21; //@line 129 "_bisectmodule.c"
        var $22=HEAP[$litem]; //@line 130 "_bisectmodule.c"
        var $23=(($22)&4294967295); //@line 130 "_bisectmodule.c"
        var $24=HEAP[$23]; //@line 130 "_bisectmodule.c"
        var $25=((($24) - 1)&4294967295); //@line 130 "_bisectmodule.c"
        var $26=HEAP[$litem]; //@line 130 "_bisectmodule.c"
        var $27=(($26)&4294967295); //@line 130 "_bisectmodule.c"
        HEAP[$27]=$25; //@line 130 "_bisectmodule.c"
        var $28=HEAP[$litem]; //@line 130 "_bisectmodule.c"
        var $29=(($28)&4294967295); //@line 130 "_bisectmodule.c"
        var $30=HEAP[$29]; //@line 130 "_bisectmodule.c"
        var $31=((($30))|0)==0; //@line 130 "_bisectmodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 130 "_bisectmodule.c"
      case 9: // $bb8
        var $32=HEAP[$litem]; //@line 130 "_bisectmodule.c"
        var $33=(($32+4)&4294967295); //@line 130 "_bisectmodule.c"
        var $34=HEAP[$33]; //@line 130 "_bisectmodule.c"
        var $35=(($34+24)&4294967295); //@line 130 "_bisectmodule.c"
        var $36=HEAP[$35]; //@line 130 "_bisectmodule.c"
        var $37=HEAP[$litem]; //@line 130 "_bisectmodule.c"
        FUNCTION_TABLE[$36]($37); //@line 130 "_bisectmodule.c"
        __label__ = 10; break; //@line 130 "_bisectmodule.c"
      case 10: // $bb9
        var $38=HEAP[$res]; //@line 131 "_bisectmodule.c"
        var $39=((($38))|0) < 0; //@line 131 "_bisectmodule.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 131 "_bisectmodule.c"
      case 11: // $bb10
        HEAP[$0]=-1; //@line 132 "_bisectmodule.c"
        __label__ = 17; break; //@line 132 "_bisectmodule.c"
      case 12: // $bb11
        var $40=HEAP[$res]; //@line 133 "_bisectmodule.c"
        var $41=((($40))|0)!=0; //@line 133 "_bisectmodule.c"
        if ($41) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 133 "_bisectmodule.c"
      case 13: // $bb12
        var $42=HEAP[$mid]; //@line 134 "_bisectmodule.c"
        var $43=((($42) + 1)&4294967295); //@line 134 "_bisectmodule.c"
        HEAP[$lo_addr]=$43; //@line 134 "_bisectmodule.c"
        __label__ = 15; break; //@line 134 "_bisectmodule.c"
      case 14: // $bb13
        var $44=HEAP[$mid]; //@line 136 "_bisectmodule.c"
        HEAP[$hi_addr]=$44; //@line 136 "_bisectmodule.c"
        __label__ = 15; break; //@line 136 "_bisectmodule.c"
      case 15: // $bb14
        var $45=HEAP[$lo_addr]; //@line 124 "_bisectmodule.c"
        var $46=HEAP[$hi_addr]; //@line 124 "_bisectmodule.c"
        var $47=((($45))|0) < ((($46))|0); //@line 124 "_bisectmodule.c"
        if ($47) { __label__ = 6; break; } else { __label__ = 16; break; } //@line 124 "_bisectmodule.c"
      case 16: // $bb15
        var $48=HEAP[$lo_addr]; //@line 138 "_bisectmodule.c"
        HEAP[$0]=$48; //@line 138 "_bisectmodule.c"
        __label__ = 17; break; //@line 138 "_bisectmodule.c"
      case 17: // $bb16
        var $49=HEAP[$0]; //@line 117 "_bisectmodule.c"
        HEAP[$retval]=$49; //@line 117 "_bisectmodule.c"
        __label__ = 18; break; //@line 117 "_bisectmodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 117 "_bisectmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 117 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bisect_left($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $list=__stackBase__+20;
        var $item=__stackBase__+24;
        var $lo=__stackBase__+28;
        var $hi=__stackBase__+32;
        var $index=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$lo]=0; //@line 145 "_bisectmodule.c"
        HEAP[$hi]=-1; //@line 146 "_bisectmodule.c"
        var $1=HEAP[$args_addr]; //@line 150 "_bisectmodule.c"
        var $2=HEAP[$kw_addr]; //@line 150 "_bisectmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str9)&4294967295), ((_keywords_8467)&4294967295), $list, $item, $lo, $hi); //@line 150 "_bisectmodule.c"
        var $4=((($3))|0)==0; //@line 150 "_bisectmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 150 "_bisectmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 152 "_bisectmodule.c"
        __label__ = 5; break; //@line 152 "_bisectmodule.c"
      case 2: // $bb1
        var $5=HEAP[$hi]; //@line 153 "_bisectmodule.c"
        var $6=HEAP[$lo]; //@line 153 "_bisectmodule.c"
        var $7=HEAP[$item]; //@line 153 "_bisectmodule.c"
        var $8=HEAP[$list]; //@line 153 "_bisectmodule.c"
        var $9=_internal_bisect_left($8, $7, $6, $5); //@line 153 "_bisectmodule.c"
        HEAP[$index]=$9; //@line 153 "_bisectmodule.c"
        var $10=HEAP[$index]; //@line 154 "_bisectmodule.c"
        var $11=((($10))|0) < 0; //@line 154 "_bisectmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 154 "_bisectmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 155 "_bisectmodule.c"
        __label__ = 5; break; //@line 155 "_bisectmodule.c"
      case 4: // $bb3
        var $12=HEAP[$index]; //@line 156 "_bisectmodule.c"
        var $13=_PyInt_FromSsize_t($12); //@line 156 "_bisectmodule.c"
        HEAP[$0]=$13; //@line 156 "_bisectmodule.c"
        __label__ = 5; break; //@line 156 "_bisectmodule.c"
      case 5: // $bb4
        var $14=HEAP[$0]; //@line 152 "_bisectmodule.c"
        HEAP[$retval]=$14; //@line 152 "_bisectmodule.c"
        __label__ = 6; break; //@line 152 "_bisectmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 152 "_bisectmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 152 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _insort_left($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $list=__stackBase__+20;
        var $item=__stackBase__+24;
        var $result=__stackBase__+28;
        var $lo=__stackBase__+32;
        var $hi=__stackBase__+36;
        var $index=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$lo]=0; //@line 175 "_bisectmodule.c"
        HEAP[$hi]=-1; //@line 176 "_bisectmodule.c"
        var $1=HEAP[$args_addr]; //@line 180 "_bisectmodule.c"
        var $2=HEAP[$kw_addr]; //@line 180 "_bisectmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str10)&4294967295), ((_keywords_8493)&4294967295), $list, $item, $lo, $hi); //@line 180 "_bisectmodule.c"
        var $4=((($3))|0)==0; //@line 180 "_bisectmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 180 "_bisectmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 182 "_bisectmodule.c"
        __label__ = 13; break; //@line 182 "_bisectmodule.c"
      case 2: // $bb1
        var $5=HEAP[$hi]; //@line 183 "_bisectmodule.c"
        var $6=HEAP[$lo]; //@line 183 "_bisectmodule.c"
        var $7=HEAP[$item]; //@line 183 "_bisectmodule.c"
        var $8=HEAP[$list]; //@line 183 "_bisectmodule.c"
        var $9=_internal_bisect_left($8, $7, $6, $5); //@line 183 "_bisectmodule.c"
        HEAP[$index]=$9; //@line 183 "_bisectmodule.c"
        var $10=HEAP[$index]; //@line 184 "_bisectmodule.c"
        var $11=((($10))|0) < 0; //@line 184 "_bisectmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 184 "_bisectmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 185 "_bisectmodule.c"
        __label__ = 13; break; //@line 185 "_bisectmodule.c"
      case 4: // $bb3
        var $12=HEAP[$list]; //@line 186 "_bisectmodule.c"
        var $13=(($12+4)&4294967295); //@line 186 "_bisectmodule.c"
        var $14=HEAP[$13]; //@line 186 "_bisectmodule.c"
        var $15=($14)==(_PyList_Type); //@line 186 "_bisectmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 186 "_bisectmodule.c"
      case 5: // $bb4
        var $16=HEAP[$item]; //@line 187 "_bisectmodule.c"
        var $17=HEAP[$list]; //@line 187 "_bisectmodule.c"
        var $18=HEAP[$index]; //@line 187 "_bisectmodule.c"
        var $19=_PyList_Insert($17, $18, $16); //@line 187 "_bisectmodule.c"
        var $20=((($19))|0) < 0; //@line 187 "_bisectmodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 187 "_bisectmodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 188 "_bisectmodule.c"
        __label__ = 13; break; //@line 188 "_bisectmodule.c"
      case 7: // $bb6
        __label__ = 12; break; //@line 188 "_bisectmodule.c"
      case 8: // $bb7
        var $21=HEAP[$item]; //@line 190 "_bisectmodule.c"
        var $22=HEAP[$list]; //@line 190 "_bisectmodule.c"
        var $23=HEAP[$index]; //@line 190 "_bisectmodule.c"
        var $24=_PyObject_CallMethod($22, ((__str7)&4294967295), ((__str11)&4294967295), $23, $21); //@line 190 "_bisectmodule.c"
        HEAP[$result]=$24; //@line 190 "_bisectmodule.c"
        var $25=HEAP[$result]; //@line 192 "_bisectmodule.c"
        var $26=($25)==0; //@line 192 "_bisectmodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 192 "_bisectmodule.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 193 "_bisectmodule.c"
        __label__ = 13; break; //@line 193 "_bisectmodule.c"
      case 10: // $bb9
        var $27=HEAP[$result]; //@line 194 "_bisectmodule.c"
        var $28=(($27)&4294967295); //@line 194 "_bisectmodule.c"
        var $29=HEAP[$28]; //@line 194 "_bisectmodule.c"
        var $30=((($29) - 1)&4294967295); //@line 194 "_bisectmodule.c"
        var $31=HEAP[$result]; //@line 194 "_bisectmodule.c"
        var $32=(($31)&4294967295); //@line 194 "_bisectmodule.c"
        HEAP[$32]=$30; //@line 194 "_bisectmodule.c"
        var $33=HEAP[$result]; //@line 194 "_bisectmodule.c"
        var $34=(($33)&4294967295); //@line 194 "_bisectmodule.c"
        var $35=HEAP[$34]; //@line 194 "_bisectmodule.c"
        var $36=((($35))|0)==0; //@line 194 "_bisectmodule.c"
        if ($36) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 194 "_bisectmodule.c"
      case 11: // $bb10
        var $37=HEAP[$result]; //@line 194 "_bisectmodule.c"
        var $38=(($37+4)&4294967295); //@line 194 "_bisectmodule.c"
        var $39=HEAP[$38]; //@line 194 "_bisectmodule.c"
        var $40=(($39+24)&4294967295); //@line 194 "_bisectmodule.c"
        var $41=HEAP[$40]; //@line 194 "_bisectmodule.c"
        var $42=HEAP[$result]; //@line 194 "_bisectmodule.c"
        FUNCTION_TABLE[$41]($42); //@line 194 "_bisectmodule.c"
        __label__ = 12; break; //@line 194 "_bisectmodule.c"
      case 12: // $bb11
        var $43=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 197 "_bisectmodule.c"
        var $44=((($43) + 1)&4294967295); //@line 197 "_bisectmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$44; //@line 197 "_bisectmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 197 "_bisectmodule.c"
        __label__ = 13; break; //@line 197 "_bisectmodule.c"
      case 13: // $bb12
        var $45=HEAP[$0]; //@line 182 "_bisectmodule.c"
        HEAP[$retval]=$45; //@line 182 "_bisectmodule.c"
        __label__ = 14; break; //@line 182 "_bisectmodule.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 182 "_bisectmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 182 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_bisect() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $0=_Py_InitModule4(((__str18)&4294967295), ((_bisect_methods)&4294967295), ((_module_doc)&4294967295), 0, 1013); //@line 240 "_bisectmodule.c"
        __label__ = 1; break; //@line 241 "_bisectmodule.c"
      case 1: // $return
        ;
        return; //@line 241 "_bisectmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_bisect"] = _init_bisect;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_bisect_right,0,_insort_right,0,_bisect_left,0,_insort_left,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([108,111,32,109,117,115,116,32,98,101,32,110,111,110,45,110,101,103,97,116,105,118,101,0] /* lo must be non-negat */, "i8", ALLOC_NORMAL);
__str1=allocate([79,79,124,110,110,58,98,105,115,101,99,116,95,114,105,103,104,116,0] /* OO|nn:bisect_right\0 */, "i8", ALLOC_NORMAL);
_keywords_8354=allocate(20, "i8*", ALLOC_NORMAL);
__str2=allocate([97,0] /* a\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([120,0] /* x\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([108,111,0] /* lo\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([104,105,0] /* hi\00 */, "i8", ALLOC_NORMAL);
_bisect_right_doc=allocate([98,105,115,101,99,116,95,114,105,103,104,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,32,45,62,32,105,110,100,101,120,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,100,101,120,32,119,104,101,114,101,32,116,111,32,105,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,84,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,32,105,115,32,115,117,99,104,32,116,104,97,116,32,97,108,108,32,101,32,105,110,32,97,91,58,105,93,32,104,97,118,101,32,101,32,60,61,32,120,44,32,97,110,100,32,97,108,108,32,101,32,105,110,10,97,91,105,58,93,32,104,97,118,101,32,101,32,62,32,120,46,32,32,83,111,32,105,102,32,120,32,97,108,114,101,97,100,121,32,97,112,112,101,97,114,115,32,105,110,32,116,104,101,32,108,105,115,116,44,32,105,32,112,111,105,110,116,115,32,106,117,115,116,10,98,101,121,111,110,100,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,120,32,97,108,114,101,97,100,121,32,116,104,101,114,101,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0] /* bisect_right(a, x[,  */, "i8", ALLOC_NORMAL);
__str6=allocate([79,79,124,110,110,58,105,110,115,111,114,116,95,114,105,103,104,116,0] /* OO|nn:insort_right\0 */, "i8", ALLOC_NORMAL);
_keywords_8380=allocate(20, "i8*", ALLOC_NORMAL);
__str7=allocate([105,110,115,101,114,116,0] /* insert\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([110,79,0] /* nO\00 */, "i8", ALLOC_NORMAL);
_insort_right_doc=allocate([105,110,115,111,114,116,95,114,105,103,104,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,10,10,73,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,110,100,32,107,101,101,112,32,105,116,32,115,111,114,116,101,100,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,73,102,32,120,32,105,115,32,97,108,114,101,97,100,121,32,105,110,32,97,44,32,105,110,115,101,114,116,32,105,116,32,116,111,32,116,104,101,32,114,105,103,104,116,32,111,102,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,120,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0] /* insort_right(a, x[,  */, "i8", ALLOC_NORMAL);
__str9=allocate([79,79,124,110,110,58,98,105,115,101,99,116,95,108,101,102,116,0] /* OO|nn:bisect_left\00 */, "i8", ALLOC_NORMAL);
_keywords_8467=allocate(20, "i8*", ALLOC_NORMAL);
_bisect_left_doc=allocate([98,105,115,101,99,116,95,108,101,102,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,32,45,62,32,105,110,100,101,120,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,100,101,120,32,119,104,101,114,101,32,116,111,32,105,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,84,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,32,105,115,32,115,117,99,104,32,116,104,97,116,32,97,108,108,32,101,32,105,110,32,97,91,58,105,93,32,104,97,118,101,32,101,32,60,32,120,44,32,97,110,100,32,97,108,108,32,101,32,105,110,10,97,91,105,58,93,32,104,97,118,101,32,101,32,62,61,32,120,46,32,32,83,111,32,105,102,32,120,32,97,108,114,101,97,100,121,32,97,112,112,101,97,114,115,32,105,110,32,116,104,101,32,108,105,115,116,44,32,105,32,112,111,105,110,116,115,32,106,117,115,116,10,98,101,102,111,114,101,32,116,104,101,32,108,101,102,116,109,111,115,116,32,120,32,97,108,114,101,97,100,121,32,116,104,101,114,101,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0] /* bisect_left(a, x[, l */, "i8", ALLOC_NORMAL);
__str10=allocate([79,79,124,110,110,58,105,110,115,111,114,116,95,108,101,102,116,0] /* OO|nn:insort_left\00 */, "i8", ALLOC_NORMAL);
_keywords_8493=allocate(20, "i8*", ALLOC_NORMAL);
__str11=allocate([105,79,0] /* iO\00 */, "i8", ALLOC_NORMAL);
_insort_left_doc=allocate([105,110,115,111,114,116,95,108,101,102,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,10,10,73,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,110,100,32,107,101,101,112,32,105,116,32,115,111,114,116,101,100,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,73,102,32,120,32,105,115,32,97,108,114,101,97,100,121,32,105,110,32,97,44,32,105,110,115,101,114,116,32,105,116,32,116,111,32,116,104,101,32,108,101,102,116,32,111,102,32,116,104,101,32,108,101,102,116,109,111,115,116,32,120,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0] /* insort_left(a, x[, l */, "i8", ALLOC_NORMAL);
_bisect_doc=allocate([65,108,105,97,115,32,102,111,114,32,98,105,115,101,99,116,95,114,105,103,104,116,40,41,46,10,0] /* Alias for bisect_rig */, "i8", ALLOC_NORMAL);
_insort_doc=allocate([65,108,105,97,115,32,102,111,114,32,105,110,115,111,114,116,95,114,105,103,104,116,40,41,46,10,0] /* Alias for insort_rig */, "i8", ALLOC_NORMAL);
__str12=allocate([98,105,115,101,99,116,95,114,105,103,104,116,0] /* bisect_right\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([98,105,115,101,99,116,0] /* bisect\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([105,110,115,111,114,116,95,114,105,103,104,116,0] /* insort_right\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([105,110,115,111,114,116,0] /* insort\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([98,105,115,101,99,116,95,108,101,102,116,0] /* bisect_left\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([105,110,115,111,114,116,95,108,101,102,116,0] /* insort_left\00 */, "i8", ALLOC_NORMAL);
_bisect_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([66,105,115,101,99,116,105,111,110,32,97,108,103,111,114,105,116,104,109,115,46,10,10,84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,115,117,112,112,111,114,116,32,102,111,114,32,109,97,105,110,116,97,105,110,105,110,103,32,97,32,108,105,115,116,32,105,110,32,115,111,114,116,101,100,32,111,114,100,101,114,32,119,105,116,104,111,117,116,10,104,97,118,105,110,103,32,116,111,32,115,111,114,116,32,116,104,101,32,108,105,115,116,32,97,102,116,101,114,32,101,97,99,104,32,105,110,115,101,114,116,105,111,110,46,32,70,111,114,32,108,111,110,103,32,108,105,115,116,115,32,111,102,32,105,116,101,109,115,32,119,105,116,104,10,101,120,112,101,110,115,105,118,101,32,99,111,109,112,97,114,105,115,111,110,32,111,112,101,114,97,116,105,111,110,115,44,32,116,104,105,115,32,99,97,110,32,98,101,32,97,110,32,105,109,112,114,111,118,101,109,101,110,116,32,111,118,101,114,32,116,104,101,32,109,111,114,101,10,99,111,109,109,111,110,32,97,112,112,114,111,97,99,104,46,10,0] /* Bisection algorithms */, "i8", ALLOC_NORMAL);
__str18=allocate([95,98,105,115,101,99,116,0] /* _bisect\00 */, "i8", ALLOC_NORMAL);
HEAP[_keywords_8354]=((__str2)&4294967295);
HEAP[_keywords_8354+4]=((__str3)&4294967295);
HEAP[_keywords_8354+8]=((__str4)&4294967295);
HEAP[_keywords_8354+12]=((__str5)&4294967295);
HEAP[_keywords_8380]=((__str2)&4294967295);
HEAP[_keywords_8380+4]=((__str3)&4294967295);
HEAP[_keywords_8380+8]=((__str4)&4294967295);
HEAP[_keywords_8380+12]=((__str5)&4294967295);
HEAP[_keywords_8467]=((__str2)&4294967295);
HEAP[_keywords_8467+4]=((__str3)&4294967295);
HEAP[_keywords_8467+8]=((__str4)&4294967295);
HEAP[_keywords_8467+12]=((__str5)&4294967295);
HEAP[_keywords_8493]=((__str2)&4294967295);
HEAP[_keywords_8493+4]=((__str3)&4294967295);
HEAP[_keywords_8493+8]=((__str4)&4294967295);
HEAP[_keywords_8493+12]=((__str5)&4294967295);
HEAP[_bisect_methods]=((__str12)&4294967295);
HEAP[_bisect_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_bisect_methods+12]=((_bisect_right_doc)&4294967295);
HEAP[_bisect_methods+16]=((__str13)&4294967295);
HEAP[_bisect_methods+20]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_bisect_methods+28]=((_bisect_doc)&4294967295);
HEAP[_bisect_methods+32]=((__str14)&4294967295);
HEAP[_bisect_methods+36]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_bisect_methods+44]=((_insort_right_doc)&4294967295);
HEAP[_bisect_methods+48]=((__str15)&4294967295);
HEAP[_bisect_methods+52]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_bisect_methods+60]=((_insort_doc)&4294967295);
HEAP[_bisect_methods+64]=((__str16)&4294967295);
HEAP[_bisect_methods+68]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_bisect_methods+76]=((_bisect_left_doc)&4294967295);
HEAP[_bisect_methods+80]=((__str17)&4294967295);
HEAP[_bisect_methods+84]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_bisect_methods+92]=((_insort_left_doc)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

