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



var $0___SIZE = 60; // %0
  
var $1___SIZE = 20; // %1
  
var $2___SIZE = 20; // %2
  
var $3___SIZE = 384; // %3
  
var $4___SIZE = 16; // %4
  
var $5___SIZE = 24; // %5
  
var $6___SIZE = 196; // %6
  
var $7___SIZE = 196; // %7
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PySliceObject___SIZE = 20; // %struct.PySliceObject
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_arraydescr___SIZE = 16; // %struct.arraydescr
  
var $struct_arrayiterobject___SIZE = 20; // %struct.arrayiterobject
  
var $struct_arrayobject___SIZE = 28; // %struct.arrayobject
  
var __str;
var __str1;
var _PyExc_OverflowError;
var __str2;
var __str3;
var __str4;
var __str5;
var _PyExc_TypeError;
var __str6;
var __str7;
var __str8;
var __str9;
var __str10;
var __str11;
var __str12;
var __str13;
var __str14;
var _descriptors;
var __str15;
var __str16;
var ___PRETTY_FUNCTION___8858;
var __str17;
var __Py_NotImplementedStruct;
var __Py_ZeroStruct;
var __Py_TrueStruct;
var _PyExc_IndexError;
var __str18;
var _copy_doc;
var __str19;
var __str20;
var __str21;
var __str22;
var ___PRETTY_FUNCTION___9470;
var __str23;
var __str24;
var __Py_NoneStruct;
var _count_doc;
var _PyExc_ValueError;
var __str25;
var _index_doc;
var __str26;
var _remove_doc;
var __str27;
var __str28;
var __str29;
var _pop_doc;
var _extend_doc;
var __str30;
var _insert_doc;
var _buffer_info_doc;
var _append_doc;
var _PyExc_RuntimeError;
var __str31;
var _byteswap_doc;
var __str32;
var ___PRETTY_FUNCTION___10009;
var _reverse_doc;
var __str33;
var __str34;
var _PyExc_IOError;
var _PyExc_EOFError;
var __str35;
var _fromfile_doc;
var _Py_Py3kWarningFlag;
var _PyExc_DeprecationWarning;
var __str36;
var __str37;
var _tofile_doc;
var __str38;
var __str39;
var _fromlist_doc;
var _tolist_doc;
var __str40;
var __str41;
var _fromstring_doc;
var _tostring_doc;
var __str42;
var __str43;
var _fromunicode_doc;
var __str44;
var _tounicode_doc;
var __str45;
var _PyExc_AttributeError;
var __str46;
var _reduce_doc;
var __str47;
var __str48;
var __str49;
var __str50;
var _array_getsets;
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
var _array_methods;
var __str74;
var __str75;
var __str76;
var _PySlice_Type;
var __str77;
var __str78;
var __str79;
var _array_as_mapping;
var _emptybuf;
var __str80;
var _PyExc_SystemError;
var __str81;
var _array_as_sequence;
var _array_as_buffer;
var __str82;
var __str83;
var __str84;
var _module_doc;
var _arraytype_doc;
var __str85;
var _Arraytype;
var __str86;
var ___PRETTY_FUNCTION___11388;
var __str87;
var _PyArrayIter_Type;
var _a_methods;
var _PyType_Type;
var __str88;
var __str89;






































































  function _array_resize($self, $newsize) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $newsize_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_6=__stackBase__+12;
        var $iftmp_5=__stackBase__+16;
        var $iftmp_4=__stackBase__+20;
        var $iftmp_2=__stackBase__+24;
        var $0=__stackBase__+28;
        var $items=__stackBase__+32;
        var $_new_size=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$newsize_addr]=$newsize;
        var $1=HEAP[$self_addr]; //@line 55 "arraymodule.c"
        var $2=(($1+16)&4294967295); //@line 55 "arraymodule.c"
        var $3=HEAP[$2]; //@line 55 "arraymodule.c"
        var $4=HEAP[$newsize_addr]; //@line 55 "arraymodule.c"
        var $5=((($3))|0) >= ((($4))|0); //@line 55 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 55 "arraymodule.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 55 "arraymodule.c"
        var $7=$6; //@line 55 "arraymodule.c"
        var $8=(($7+8)&4294967295); //@line 55 "arraymodule.c"
        var $9=HEAP[$8]; //@line 55 "arraymodule.c"
        var $10=HEAP[$newsize_addr]; //@line 55 "arraymodule.c"
        var $11=((($10) + 16)&4294967295); //@line 55 "arraymodule.c"
        var $12=((($9))|0) < ((($11))|0); //@line 55 "arraymodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 55 "arraymodule.c"
      case 2: // $bb1
        var $13=HEAP[$self_addr]; //@line 55 "arraymodule.c"
        var $14=(($13+12)&4294967295); //@line 55 "arraymodule.c"
        var $15=HEAP[$14]; //@line 55 "arraymodule.c"
        var $16=($15)!=0; //@line 55 "arraymodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 55 "arraymodule.c"
      case 3: // $bb2
        var $17=HEAP[$self_addr]; //@line 58 "arraymodule.c"
        var $18=$17; //@line 58 "arraymodule.c"
        var $19=(($18+8)&4294967295); //@line 58 "arraymodule.c"
        var $20=HEAP[$newsize_addr]; //@line 58 "arraymodule.c"
        HEAP[$19]=$20; //@line 58 "arraymodule.c"
        HEAP[$0]=0; //@line 59 "arraymodule.c"
        __label__ = 22; break; //@line 59 "arraymodule.c"
      case 4: // $bb3
        var $21=HEAP[$newsize_addr]; //@line 74 "arraymodule.c"
        var $22=((($21))|0) >> 4; //@line 74 "arraymodule.c"
        var $23=HEAP[$self_addr]; //@line 74 "arraymodule.c"
        var $24=$23; //@line 74 "arraymodule.c"
        var $25=(($24+8)&4294967295); //@line 74 "arraymodule.c"
        var $26=HEAP[$25]; //@line 74 "arraymodule.c"
        var $27=((($26))|0) <= 7; //@line 74 "arraymodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 74 "arraymodule.c"
      case 5: // $bb4
        HEAP[$iftmp_2]=3; //@line 74 "arraymodule.c"
        __label__ = 7; break; //@line 74 "arraymodule.c"
      case 6: // $bb5
        HEAP[$iftmp_2]=7; //@line 74 "arraymodule.c"
        __label__ = 7; break; //@line 74 "arraymodule.c"
      case 7: // $bb6
        var $28=HEAP[$iftmp_2]; //@line 74 "arraymodule.c"
        var $29=((($22) + ($28))&4294967295); //@line 74 "arraymodule.c"
        var $30=HEAP[$newsize_addr]; //@line 74 "arraymodule.c"
        var $31=((($29) + ($30))&4294967295); //@line 74 "arraymodule.c"
        HEAP[$_new_size]=$31; //@line 74 "arraymodule.c"
        var $32=HEAP[$self_addr]; //@line 75 "arraymodule.c"
        var $33=(($32+12)&4294967295); //@line 75 "arraymodule.c"
        var $34=HEAP[$33]; //@line 75 "arraymodule.c"
        HEAP[$items]=$34; //@line 75 "arraymodule.c"
        var $35=HEAP[$self_addr]; //@line 78 "arraymodule.c"
        var $36=(($35+20)&4294967295); //@line 78 "arraymodule.c"
        var $37=HEAP[$36]; //@line 78 "arraymodule.c"
        var $38=(($37+4)&4294967295); //@line 78 "arraymodule.c"
        var $39=HEAP[$38]; //@line 78 "arraymodule.c"
        var $40=Math.floor(4294967295/((($39))>>>0)); //@line 78 "arraymodule.c"
        var $41=HEAP[$_new_size]; //@line 78 "arraymodule.c"
        var $42=((($40))>>>0) >= ((($41))>>>0); //@line 78 "arraymodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 18; break; } //@line 78 "arraymodule.c"
      case 8: // $bb7
        var $43=HEAP[$self_addr]; //@line 79 "arraymodule.c"
        var $44=(($43+20)&4294967295); //@line 79 "arraymodule.c"
        var $45=HEAP[$44]; //@line 79 "arraymodule.c"
        var $46=(($45+4)&4294967295); //@line 79 "arraymodule.c"
        var $47=HEAP[$46]; //@line 79 "arraymodule.c"
        var $48=HEAP[$_new_size]; //@line 79 "arraymodule.c"
        var $49=((($47) * ($48))&4294967295); //@line 79 "arraymodule.c"
        var $50=((($49))|0) >= 0; //@line 79 "arraymodule.c"
        if ($50) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 79 "arraymodule.c"
      case 9: // $bb8
        var $51=HEAP[$self_addr]; //@line 79 "arraymodule.c"
        var $52=(($51+20)&4294967295); //@line 79 "arraymodule.c"
        var $53=HEAP[$52]; //@line 79 "arraymodule.c"
        var $54=(($53+4)&4294967295); //@line 79 "arraymodule.c"
        var $55=HEAP[$54]; //@line 79 "arraymodule.c"
        var $56=HEAP[$_new_size]; //@line 79 "arraymodule.c"
        var $57=((($55) * ($56))&4294967295); //@line 79 "arraymodule.c"
        var $58=((($57))|0) >= 0; //@line 79 "arraymodule.c"
        if ($58) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 79 "arraymodule.c"
      case 10: // $bb9
        var $59=HEAP[$self_addr]; //@line 79 "arraymodule.c"
        var $60=(($59+20)&4294967295); //@line 79 "arraymodule.c"
        var $61=HEAP[$60]; //@line 79 "arraymodule.c"
        var $62=(($61+4)&4294967295); //@line 79 "arraymodule.c"
        var $63=HEAP[$62]; //@line 79 "arraymodule.c"
        var $64=HEAP[$_new_size]; //@line 79 "arraymodule.c"
        var $65=((($63) * ($64))&4294967295); //@line 79 "arraymodule.c"
        var $66=((($65))|0)!=0; //@line 79 "arraymodule.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 79 "arraymodule.c"
      case 11: // $bb10
        var $67=HEAP[$self_addr]; //@line 79 "arraymodule.c"
        var $68=(($67+20)&4294967295); //@line 79 "arraymodule.c"
        var $69=HEAP[$68]; //@line 79 "arraymodule.c"
        var $70=(($69+4)&4294967295); //@line 79 "arraymodule.c"
        var $71=HEAP[$70]; //@line 79 "arraymodule.c"
        var $72=HEAP[$_new_size]; //@line 79 "arraymodule.c"
        var $73=((($71) * ($72))&4294967295); //@line 79 "arraymodule.c"
        HEAP[$iftmp_6]=$73; //@line 79 "arraymodule.c"
        __label__ = 13; break; //@line 79 "arraymodule.c"
      case 12: // $bb11
        HEAP[$iftmp_6]=1; //@line 79 "arraymodule.c"
        __label__ = 13; break; //@line 79 "arraymodule.c"
      case 13: // $bb12
        var $74=HEAP[$items]; //@line 79 "arraymodule.c"
        var $75=HEAP[$iftmp_6]; //@line 79 "arraymodule.c"
        var $76=_realloc($74, $75); //@line 79 "arraymodule.c"
        HEAP[$iftmp_5]=$76; //@line 79 "arraymodule.c"
        __label__ = 15; break; //@line 79 "arraymodule.c"
      case 14: // $bb13
        HEAP[$iftmp_5]=0; //@line 79 "arraymodule.c"
        __label__ = 15; break; //@line 79 "arraymodule.c"
      case 15: // $bb14
        var $77=HEAP[$iftmp_5]; //@line 79 "arraymodule.c"
        HEAP[$iftmp_4]=$77; //@line 79 "arraymodule.c"
        __label__ = 17; break; //@line 79 "arraymodule.c"
      case 16: // $bb15
        HEAP[$iftmp_4]=0; //@line 79 "arraymodule.c"
        __label__ = 17; break; //@line 79 "arraymodule.c"
      case 17: // $bb16
        var $78=HEAP[$iftmp_4]; //@line 79 "arraymodule.c"
        HEAP[$items]=$78; //@line 79 "arraymodule.c"
        __label__ = 19; break; //@line 79 "arraymodule.c"
      case 18: // $bb17
        HEAP[$items]=0; //@line 81 "arraymodule.c"
        __label__ = 19; break; //@line 81 "arraymodule.c"
      case 19: // $bb18
        var $79=HEAP[$items]; //@line 82 "arraymodule.c"
        var $80=($79)==0; //@line 82 "arraymodule.c"
        if ($80) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 82 "arraymodule.c"
      case 20: // $bb19
        var $81=_PyErr_NoMemory(); //@line 83 "arraymodule.c"
        HEAP[$0]=-1; //@line 84 "arraymodule.c"
        __label__ = 22; break; //@line 84 "arraymodule.c"
      case 21: // $bb20
        var $82=HEAP[$self_addr]; //@line 86 "arraymodule.c"
        var $83=(($82+12)&4294967295); //@line 86 "arraymodule.c"
        var $84=HEAP[$items]; //@line 86 "arraymodule.c"
        HEAP[$83]=$84; //@line 86 "arraymodule.c"
        var $85=HEAP[$self_addr]; //@line 87 "arraymodule.c"
        var $86=$85; //@line 87 "arraymodule.c"
        var $87=(($86+8)&4294967295); //@line 87 "arraymodule.c"
        var $88=HEAP[$newsize_addr]; //@line 87 "arraymodule.c"
        HEAP[$87]=$88; //@line 87 "arraymodule.c"
        var $89=HEAP[$_new_size]; //@line 88 "arraymodule.c"
        var $90=HEAP[$self_addr]; //@line 88 "arraymodule.c"
        var $91=(($90+16)&4294967295); //@line 88 "arraymodule.c"
        HEAP[$91]=$89; //@line 88 "arraymodule.c"
        HEAP[$0]=0; //@line 89 "arraymodule.c"
        __label__ = 22; break; //@line 89 "arraymodule.c"
      case 22: // $bb21
        var $92=HEAP[$0]; //@line 59 "arraymodule.c"
        HEAP[$retval]=$92; //@line 59 "arraymodule.c"
        __label__ = 23; break; //@line 59 "arraymodule.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 59 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 59 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _c_getitem($ap, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$ap_addr]; //@line 107 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 107 "arraymodule.c"
        var $3=HEAP[$2]; //@line 107 "arraymodule.c"
        var $4=HEAP[$i_addr]; //@line 107 "arraymodule.c"
        var $5=(($3+$4)&4294967295); //@line 107 "arraymodule.c"
        var $6=_PyString_FromStringAndSize($5, 1); //@line 107 "arraymodule.c"
        HEAP[$0]=$6; //@line 107 "arraymodule.c"
        var $7=HEAP[$0]; //@line 107 "arraymodule.c"
        HEAP[$retval]=$7; //@line 107 "arraymodule.c"
        __label__ = 1; break; //@line 107 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 107 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 107 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _c_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 21; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 21);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 114 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, ((__str)&4294967295), $x); //@line 114 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 114 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 114 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 115 "arraymodule.c"
        __label__ = 5; break; //@line 115 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$i_addr]; //@line 116 "arraymodule.c"
        var $5=((($4))|0) >= 0; //@line 116 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 116 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[$ap_addr]; //@line 117 "arraymodule.c"
        var $7=(($6+12)&4294967295); //@line 117 "arraymodule.c"
        var $8=HEAP[$7]; //@line 117 "arraymodule.c"
        var $9=HEAP[$x]; //@line 117 "arraymodule.c"
        var $10=HEAP[$i_addr]; //@line 117 "arraymodule.c"
        var $11=(($8+$10)&4294967295); //@line 117 "arraymodule.c"
        HEAP[$11]=$9; //@line 117 "arraymodule.c"
        __label__ = 4; break; //@line 117 "arraymodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 118 "arraymodule.c"
        __label__ = 5; break; //@line 118 "arraymodule.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 115 "arraymodule.c"
        HEAP[$retval]=$12; //@line 115 "arraymodule.c"
        __label__ = 6; break; //@line 115 "arraymodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 115 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 115 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _b_getitem($ap, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $x=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$ap_addr]; //@line 124 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 124 "arraymodule.c"
        var $3=HEAP[$2]; //@line 124 "arraymodule.c"
        var $4=HEAP[$i_addr]; //@line 124 "arraymodule.c"
        var $5=(($3+$4)&4294967295); //@line 124 "arraymodule.c"
        var $6=HEAP[$5]; //@line 124 "arraymodule.c"
        var $7=reSign(($6), 8, 0); //@line 124 "arraymodule.c"
        HEAP[$x]=$7; //@line 124 "arraymodule.c"
        var $8=HEAP[$x]; //@line 125 "arraymodule.c"
        var $9=((($8))|0) > 127; //@line 125 "arraymodule.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 125 "arraymodule.c"
      case 1: // $bb
        var $10=HEAP[$x]; //@line 126 "arraymodule.c"
        var $11=((($10) - 256)&4294967295); //@line 126 "arraymodule.c"
        HEAP[$x]=$11; //@line 126 "arraymodule.c"
        __label__ = 2; break; //@line 126 "arraymodule.c"
      case 2: // $bb1
        var $12=HEAP[$x]; //@line 127 "arraymodule.c"
        var $13=_PyInt_FromLong($12); //@line 127 "arraymodule.c"
        HEAP[$0]=$13; //@line 127 "arraymodule.c"
        var $14=HEAP[$0]; //@line 127 "arraymodule.c"
        HEAP[$retval]=$14; //@line 127 "arraymodule.c"
        __label__ = 3; break; //@line 127 "arraymodule.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 127 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 127 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _b_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 22; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 137 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, ((__str1)&4294967295), $x); //@line 137 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 137 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 137 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 138 "arraymodule.c"
        __label__ = 9; break; //@line 138 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 139 "arraymodule.c"
        var $5=reSign(($4), 16, 0) < -128; //@line 139 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 139 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_OverflowError]; //@line 140 "arraymodule.c"
        _PyErr_SetString($6, ((__str2)&4294967295)); //@line 140 "arraymodule.c"
        HEAP[$0]=-1; //@line 142 "arraymodule.c"
        __label__ = 9; break; //@line 142 "arraymodule.c"
      case 4: // $bb3
        var $7=HEAP[$x]; //@line 144 "arraymodule.c"
        var $8=reSign(($7), 16, 0) > 127; //@line 144 "arraymodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 144 "arraymodule.c"
      case 5: // $bb4
        var $9=HEAP[_PyExc_OverflowError]; //@line 145 "arraymodule.c"
        _PyErr_SetString($9, ((__str3)&4294967295)); //@line 145 "arraymodule.c"
        HEAP[$0]=-1; //@line 147 "arraymodule.c"
        __label__ = 9; break; //@line 147 "arraymodule.c"
      case 6: // $bb5
        var $10=HEAP[$i_addr]; //@line 149 "arraymodule.c"
        var $11=((($10))|0) >= 0; //@line 149 "arraymodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 149 "arraymodule.c"
      case 7: // $bb6
        var $12=HEAP[$ap_addr]; //@line 150 "arraymodule.c"
        var $13=(($12+12)&4294967295); //@line 150 "arraymodule.c"
        var $14=HEAP[$13]; //@line 150 "arraymodule.c"
        var $15=HEAP[$x]; //@line 150 "arraymodule.c"
        var $16=((($15)) & 255); //@line 150 "arraymodule.c"
        var $17=HEAP[$i_addr]; //@line 150 "arraymodule.c"
        var $18=(($14+$17)&4294967295); //@line 150 "arraymodule.c"
        HEAP[$18]=$16; //@line 150 "arraymodule.c"
        __label__ = 8; break; //@line 150 "arraymodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 151 "arraymodule.c"
        __label__ = 9; break; //@line 151 "arraymodule.c"
      case 9: // $bb8
        var $19=HEAP[$0]; //@line 138 "arraymodule.c"
        HEAP[$retval]=$19; //@line 138 "arraymodule.c"
        __label__ = 10; break; //@line 138 "arraymodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 138 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 138 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BB_getitem($ap, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $x=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$ap_addr]; //@line 157 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 157 "arraymodule.c"
        var $3=HEAP[$2]; //@line 157 "arraymodule.c"
        var $4=HEAP[$i_addr]; //@line 157 "arraymodule.c"
        var $5=(($3+$4)&4294967295); //@line 157 "arraymodule.c"
        var $6=HEAP[$5]; //@line 157 "arraymodule.c"
        var $7=unSign(($6), 8, 0); //@line 157 "arraymodule.c"
        HEAP[$x]=$7; //@line 157 "arraymodule.c"
        var $8=HEAP[$x]; //@line 158 "arraymodule.c"
        var $9=_PyInt_FromLong($8); //@line 158 "arraymodule.c"
        HEAP[$0]=$9; //@line 158 "arraymodule.c"
        var $10=HEAP[$0]; //@line 158 "arraymodule.c"
        HEAP[$retval]=$10; //@line 158 "arraymodule.c"
        __label__ = 1; break; //@line 158 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 158 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 158 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BB_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 21; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 21);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 166 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, ((__str4)&4294967295), $x); //@line 166 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 166 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 166 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 167 "arraymodule.c"
        __label__ = 5; break; //@line 167 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$i_addr]; //@line 168 "arraymodule.c"
        var $5=((($4))|0) >= 0; //@line 168 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 168 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[$ap_addr]; //@line 169 "arraymodule.c"
        var $7=(($6+12)&4294967295); //@line 169 "arraymodule.c"
        var $8=HEAP[$7]; //@line 169 "arraymodule.c"
        var $9=HEAP[$x]; //@line 169 "arraymodule.c"
        var $10=HEAP[$i_addr]; //@line 169 "arraymodule.c"
        var $11=(($8+$10)&4294967295); //@line 169 "arraymodule.c"
        HEAP[$11]=$9; //@line 169 "arraymodule.c"
        __label__ = 4; break; //@line 169 "arraymodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 170 "arraymodule.c"
        __label__ = 5; break; //@line 170 "arraymodule.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 167 "arraymodule.c"
        HEAP[$retval]=$12; //@line 167 "arraymodule.c"
        __label__ = 6; break; //@line 167 "arraymodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 167 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 167 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _u_getitem($ap, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$ap_addr]; //@line 177 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 177 "arraymodule.c"
        var $3=HEAP[$2]; //@line 177 "arraymodule.c"
        var $4=$3; //@line 177 "arraymodule.c"
        var $5=HEAP[$i_addr]; //@line 177 "arraymodule.c"
        var $6=(($4+2*$5)&4294967295); //@line 177 "arraymodule.c"
        var $7=_PyUnicodeUCS2_FromUnicode($6, 1); //@line 177 "arraymodule.c"
        HEAP[$0]=$7; //@line 177 "arraymodule.c"
        var $8=HEAP[$0]; //@line 177 "arraymodule.c"
        HEAP[$retval]=$8; //@line 177 "arraymodule.c"
        __label__ = 1; break; //@line 177 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 177 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 177 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _u_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $p=__stackBase__+20;
        var $len=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 186 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, ((__str5)&4294967295), $p, $len); //@line 186 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 186 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 186 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 187 "arraymodule.c"
        __label__ = 7; break; //@line 187 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$len]; //@line 188 "arraymodule.c"
        var $5=((($4))|0)!=1; //@line 188 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 188 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_TypeError]; //@line 189 "arraymodule.c"
        _PyErr_SetString($6, ((__str6)&4294967295)); //@line 189 "arraymodule.c"
        HEAP[$0]=-1; //@line 191 "arraymodule.c"
        __label__ = 7; break; //@line 191 "arraymodule.c"
      case 4: // $bb3
        var $7=HEAP[$i_addr]; //@line 193 "arraymodule.c"
        var $8=((($7))|0) >= 0; //@line 193 "arraymodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 193 "arraymodule.c"
      case 5: // $bb4
        var $9=HEAP[$ap_addr]; //@line 194 "arraymodule.c"
        var $10=(($9+12)&4294967295); //@line 194 "arraymodule.c"
        var $11=HEAP[$10]; //@line 194 "arraymodule.c"
        var $12=$11; //@line 194 "arraymodule.c"
        var $13=HEAP[$p]; //@line 194 "arraymodule.c"
        var $14=(($13)&4294967295); //@line 194 "arraymodule.c"
        var $15=HEAP[$14]; //@line 194 "arraymodule.c"
        var $16=HEAP[$i_addr]; //@line 194 "arraymodule.c"
        var $17=(($12+2*$16)&4294967295); //@line 194 "arraymodule.c"
        HEAP[$17]=$15; //@line 194 "arraymodule.c"
        __label__ = 6; break; //@line 194 "arraymodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 195 "arraymodule.c"
        __label__ = 7; break; //@line 195 "arraymodule.c"
      case 7: // $bb6
        var $18=HEAP[$0]; //@line 187 "arraymodule.c"
        HEAP[$retval]=$18; //@line 187 "arraymodule.c"
        __label__ = 8; break; //@line 187 "arraymodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 187 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 187 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _h_getitem($ap, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$ap_addr]; //@line 202 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 202 "arraymodule.c"
        var $3=HEAP[$2]; //@line 202 "arraymodule.c"
        var $4=$3; //@line 202 "arraymodule.c"
        var $5=HEAP[$i_addr]; //@line 202 "arraymodule.c"
        var $6=(($4+2*$5)&4294967295); //@line 202 "arraymodule.c"
        var $7=HEAP[$6]; //@line 202 "arraymodule.c"
        var $8=reSign(($7), 16, 0); //@line 202 "arraymodule.c"
        var $9=_PyInt_FromLong($8); //@line 202 "arraymodule.c"
        HEAP[$0]=$9; //@line 202 "arraymodule.c"
        var $10=HEAP[$0]; //@line 202 "arraymodule.c"
        HEAP[$retval]=$10; //@line 202 "arraymodule.c"
        __label__ = 1; break; //@line 202 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 202 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 202 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _h_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 22; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 210 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, ((__str1)&4294967295), $x); //@line 210 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 210 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 210 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 211 "arraymodule.c"
        __label__ = 5; break; //@line 211 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$i_addr]; //@line 212 "arraymodule.c"
        var $5=((($4))|0) >= 0; //@line 212 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 212 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[$ap_addr]; //@line 213 "arraymodule.c"
        var $7=(($6+12)&4294967295); //@line 213 "arraymodule.c"
        var $8=HEAP[$7]; //@line 213 "arraymodule.c"
        var $9=$8; //@line 213 "arraymodule.c"
        var $10=HEAP[$x]; //@line 213 "arraymodule.c"
        var $11=HEAP[$i_addr]; //@line 213 "arraymodule.c"
        var $12=(($9+2*$11)&4294967295); //@line 213 "arraymodule.c"
        HEAP[$12]=$10; //@line 213 "arraymodule.c"
        __label__ = 4; break; //@line 213 "arraymodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 214 "arraymodule.c"
        __label__ = 5; break; //@line 214 "arraymodule.c"
      case 5: // $bb4
        var $13=HEAP[$0]; //@line 211 "arraymodule.c"
        HEAP[$retval]=$13; //@line 211 "arraymodule.c"
        __label__ = 6; break; //@line 211 "arraymodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 211 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 211 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _HH_getitem($ap, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$ap_addr]; //@line 220 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 220 "arraymodule.c"
        var $3=HEAP[$2]; //@line 220 "arraymodule.c"
        var $4=$3; //@line 220 "arraymodule.c"
        var $5=HEAP[$i_addr]; //@line 220 "arraymodule.c"
        var $6=(($4+2*$5)&4294967295); //@line 220 "arraymodule.c"
        var $7=HEAP[$6]; //@line 220 "arraymodule.c"
        var $8=unSign(($7), 16, 0); //@line 220 "arraymodule.c"
        var $9=_PyInt_FromLong($8); //@line 220 "arraymodule.c"
        HEAP[$0]=$9; //@line 220 "arraymodule.c"
        var $10=HEAP[$0]; //@line 220 "arraymodule.c"
        HEAP[$retval]=$10; //@line 220 "arraymodule.c"
        __label__ = 1; break; //@line 220 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 220 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 220 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _HH_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 229 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, ((__str7)&4294967295), $x); //@line 229 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 229 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 229 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 230 "arraymodule.c"
        __label__ = 9; break; //@line 230 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 231 "arraymodule.c"
        var $5=((($4))|0) < 0; //@line 231 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 231 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_OverflowError]; //@line 232 "arraymodule.c"
        _PyErr_SetString($6, ((__str8)&4294967295)); //@line 232 "arraymodule.c"
        HEAP[$0]=-1; //@line 234 "arraymodule.c"
        __label__ = 9; break; //@line 234 "arraymodule.c"
      case 4: // $bb3
        var $7=HEAP[$x]; //@line 236 "arraymodule.c"
        var $8=((($7))|0) > 65535; //@line 236 "arraymodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 236 "arraymodule.c"
      case 5: // $bb4
        var $9=HEAP[_PyExc_OverflowError]; //@line 237 "arraymodule.c"
        _PyErr_SetString($9, ((__str9)&4294967295)); //@line 237 "arraymodule.c"
        HEAP[$0]=-1; //@line 239 "arraymodule.c"
        __label__ = 9; break; //@line 239 "arraymodule.c"
      case 6: // $bb5
        var $10=HEAP[$i_addr]; //@line 241 "arraymodule.c"
        var $11=((($10))|0) >= 0; //@line 241 "arraymodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 241 "arraymodule.c"
      case 7: // $bb6
        var $12=HEAP[$ap_addr]; //@line 242 "arraymodule.c"
        var $13=(($12+12)&4294967295); //@line 242 "arraymodule.c"
        var $14=HEAP[$13]; //@line 242 "arraymodule.c"
        var $15=$14; //@line 242 "arraymodule.c"
        var $16=HEAP[$x]; //@line 242 "arraymodule.c"
        var $17=((($16)) & 65535); //@line 242 "arraymodule.c"
        var $18=HEAP[$i_addr]; //@line 242 "arraymodule.c"
        var $19=(($15+2*$18)&4294967295); //@line 242 "arraymodule.c"
        HEAP[$19]=$17; //@line 242 "arraymodule.c"
        __label__ = 8; break; //@line 242 "arraymodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 243 "arraymodule.c"
        __label__ = 9; break; //@line 243 "arraymodule.c"
      case 9: // $bb8
        var $20=HEAP[$0]; //@line 230 "arraymodule.c"
        HEAP[$retval]=$20; //@line 230 "arraymodule.c"
        __label__ = 10; break; //@line 230 "arraymodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 230 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 230 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _i_getitem($ap, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$ap_addr]; //@line 249 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 249 "arraymodule.c"
        var $3=HEAP[$2]; //@line 249 "arraymodule.c"
        var $4=$3; //@line 249 "arraymodule.c"
        var $5=HEAP[$i_addr]; //@line 249 "arraymodule.c"
        var $6=(($4+4*$5)&4294967295); //@line 249 "arraymodule.c"
        var $7=HEAP[$6]; //@line 249 "arraymodule.c"
        var $8=_PyInt_FromLong($7); //@line 249 "arraymodule.c"
        HEAP[$0]=$8; //@line 249 "arraymodule.c"
        var $9=HEAP[$0]; //@line 249 "arraymodule.c"
        HEAP[$retval]=$9; //@line 249 "arraymodule.c"
        __label__ = 1; break; //@line 249 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 249 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 249 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _i_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 257 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, ((__str7)&4294967295), $x); //@line 257 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 257 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 257 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 258 "arraymodule.c"
        __label__ = 5; break; //@line 258 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$i_addr]; //@line 259 "arraymodule.c"
        var $5=((($4))|0) >= 0; //@line 259 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 259 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[$ap_addr]; //@line 260 "arraymodule.c"
        var $7=(($6+12)&4294967295); //@line 260 "arraymodule.c"
        var $8=HEAP[$7]; //@line 260 "arraymodule.c"
        var $9=$8; //@line 260 "arraymodule.c"
        var $10=HEAP[$x]; //@line 260 "arraymodule.c"
        var $11=HEAP[$i_addr]; //@line 260 "arraymodule.c"
        var $12=(($9+4*$11)&4294967295); //@line 260 "arraymodule.c"
        HEAP[$12]=$10; //@line 260 "arraymodule.c"
        __label__ = 4; break; //@line 260 "arraymodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 261 "arraymodule.c"
        __label__ = 5; break; //@line 261 "arraymodule.c"
      case 5: // $bb4
        var $13=HEAP[$0]; //@line 258 "arraymodule.c"
        HEAP[$retval]=$13; //@line 258 "arraymodule.c"
        __label__ = 6; break; //@line 258 "arraymodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 258 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 258 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _II_getitem($ap, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$ap_addr]; //@line 267 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 267 "arraymodule.c"
        var $3=HEAP[$2]; //@line 267 "arraymodule.c"
        var $4=$3; //@line 267 "arraymodule.c"
        var $5=HEAP[$i_addr]; //@line 267 "arraymodule.c"
        var $6=(($4+4*$5)&4294967295); //@line 267 "arraymodule.c"
        var $7=HEAP[$6]; //@line 267 "arraymodule.c"
        var $8=_PyLong_FromUnsignedLong($7); //@line 267 "arraymodule.c"
        HEAP[$0]=$8; //@line 267 "arraymodule.c"
        var $9=HEAP[$0]; //@line 267 "arraymodule.c"
        HEAP[$retval]=$9; //@line 267 "arraymodule.c"
        __label__ = 1; break; //@line 267 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 267 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 267 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _II_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $y=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 275 "arraymodule.c"
        var $2=(($1+4)&4294967295); //@line 275 "arraymodule.c"
        var $3=HEAP[$2]; //@line 275 "arraymodule.c"
        var $4=(($3+84)&4294967295); //@line 275 "arraymodule.c"
        var $5=HEAP[$4]; //@line 275 "arraymodule.c"
        var $6=($5) & 16777216; //@line 275 "arraymodule.c"
        var $7=((($6))|0)!=0; //@line 275 "arraymodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 275 "arraymodule.c"
      case 1: // $bb
        var $8=HEAP[$v_addr]; //@line 276 "arraymodule.c"
        var $9=_PyLong_AsUnsignedLong($8); //@line 276 "arraymodule.c"
        HEAP[$x]=$9; //@line 276 "arraymodule.c"
        var $10=HEAP[$x]; //@line 277 "arraymodule.c"
        var $11=((($10))|0)==-1; //@line 277 "arraymodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 277 "arraymodule.c"
      case 2: // $bb1
        var $12=_PyErr_Occurred(); //@line 277 "arraymodule.c"
        var $13=($12)!=0; //@line 277 "arraymodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 277 "arraymodule.c"
      case 3: // $bb2
        HEAP[$0]=-1; //@line 278 "arraymodule.c"
        __label__ = 13; break; //@line 278 "arraymodule.c"
      case 4: // $bb3
        __label__ = 10; break; //@line 278 "arraymodule.c"
      case 5: // $bb4
        var $14=HEAP[$v_addr]; //@line 282 "arraymodule.c"
        var $15=__PyArg_Parse_SizeT($14, ((__str10)&4294967295), $y); //@line 282 "arraymodule.c"
        var $16=((($15))|0)==0; //@line 282 "arraymodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 282 "arraymodule.c"
      case 6: // $bb5
        HEAP[$0]=-1; //@line 283 "arraymodule.c"
        __label__ = 13; break; //@line 283 "arraymodule.c"
      case 7: // $bb6
        var $17=HEAP[$y]; //@line 284 "arraymodule.c"
        var $18=((($17))|0) < 0; //@line 284 "arraymodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 284 "arraymodule.c"
      case 8: // $bb7
        var $19=HEAP[_PyExc_OverflowError]; //@line 285 "arraymodule.c"
        _PyErr_SetString($19, ((__str11)&4294967295)); //@line 285 "arraymodule.c"
        HEAP[$0]=-1; //@line 287 "arraymodule.c"
        __label__ = 13; break; //@line 287 "arraymodule.c"
      case 9: // $bb8
        var $20=HEAP[$y]; //@line 289 "arraymodule.c"
        HEAP[$x]=$20; //@line 289 "arraymodule.c"
        __label__ = 10; break; //@line 289 "arraymodule.c"
      case 10: // $bb9
        var $21=HEAP[$i_addr]; //@line 298 "arraymodule.c"
        var $22=((($21))|0) >= 0; //@line 298 "arraymodule.c"
        if ($22) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 298 "arraymodule.c"
      case 11: // $bb10
        var $23=HEAP[$ap_addr]; //@line 299 "arraymodule.c"
        var $24=(($23+12)&4294967295); //@line 299 "arraymodule.c"
        var $25=HEAP[$24]; //@line 299 "arraymodule.c"
        var $26=$25; //@line 299 "arraymodule.c"
        var $27=HEAP[$i_addr]; //@line 299 "arraymodule.c"
        var $28=(($26+4*$27)&4294967295); //@line 299 "arraymodule.c"
        var $29=HEAP[$x]; //@line 299 "arraymodule.c"
        HEAP[$28]=$29; //@line 299 "arraymodule.c"
        __label__ = 12; break; //@line 299 "arraymodule.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 300 "arraymodule.c"
        __label__ = 13; break; //@line 300 "arraymodule.c"
      case 13: // $bb12
        var $30=HEAP[$0]; //@line 278 "arraymodule.c"
        HEAP[$retval]=$30; //@line 278 "arraymodule.c"
        __label__ = 14; break; //@line 278 "arraymodule.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 278 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 278 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _l_getitem($ap, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$ap_addr]; //@line 306 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 306 "arraymodule.c"
        var $3=HEAP[$2]; //@line 306 "arraymodule.c"
        var $4=$3; //@line 306 "arraymodule.c"
        var $5=HEAP[$i_addr]; //@line 306 "arraymodule.c"
        var $6=(($4+4*$5)&4294967295); //@line 306 "arraymodule.c"
        var $7=HEAP[$6]; //@line 306 "arraymodule.c"
        var $8=_PyInt_FromLong($7); //@line 306 "arraymodule.c"
        HEAP[$0]=$8; //@line 306 "arraymodule.c"
        var $9=HEAP[$0]; //@line 306 "arraymodule.c"
        HEAP[$retval]=$9; //@line 306 "arraymodule.c"
        __label__ = 1; break; //@line 306 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 306 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 306 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _l_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 313 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, ((__str10)&4294967295), $x); //@line 313 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 313 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 313 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 314 "arraymodule.c"
        __label__ = 5; break; //@line 314 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$i_addr]; //@line 315 "arraymodule.c"
        var $5=((($4))|0) >= 0; //@line 315 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 315 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[$ap_addr]; //@line 316 "arraymodule.c"
        var $7=(($6+12)&4294967295); //@line 316 "arraymodule.c"
        var $8=HEAP[$7]; //@line 316 "arraymodule.c"
        var $9=$8; //@line 316 "arraymodule.c"
        var $10=HEAP[$x]; //@line 316 "arraymodule.c"
        var $11=HEAP[$i_addr]; //@line 316 "arraymodule.c"
        var $12=(($9+4*$11)&4294967295); //@line 316 "arraymodule.c"
        HEAP[$12]=$10; //@line 316 "arraymodule.c"
        __label__ = 4; break; //@line 316 "arraymodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 317 "arraymodule.c"
        __label__ = 5; break; //@line 317 "arraymodule.c"
      case 5: // $bb4
        var $13=HEAP[$0]; //@line 314 "arraymodule.c"
        HEAP[$retval]=$13; //@line 314 "arraymodule.c"
        __label__ = 6; break; //@line 314 "arraymodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 314 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 314 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _LL_getitem($ap, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$ap_addr]; //@line 323 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 323 "arraymodule.c"
        var $3=HEAP[$2]; //@line 323 "arraymodule.c"
        var $4=$3; //@line 323 "arraymodule.c"
        var $5=HEAP[$i_addr]; //@line 323 "arraymodule.c"
        var $6=(($4+4*$5)&4294967295); //@line 323 "arraymodule.c"
        var $7=HEAP[$6]; //@line 323 "arraymodule.c"
        var $8=_PyLong_FromUnsignedLong($7); //@line 323 "arraymodule.c"
        HEAP[$0]=$8; //@line 323 "arraymodule.c"
        var $9=HEAP[$0]; //@line 323 "arraymodule.c"
        HEAP[$retval]=$9; //@line 323 "arraymodule.c"
        __label__ = 1; break; //@line 323 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 323 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 323 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _LL_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $y=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 330 "arraymodule.c"
        var $2=(($1+4)&4294967295); //@line 330 "arraymodule.c"
        var $3=HEAP[$2]; //@line 330 "arraymodule.c"
        var $4=(($3+84)&4294967295); //@line 330 "arraymodule.c"
        var $5=HEAP[$4]; //@line 330 "arraymodule.c"
        var $6=($5) & 16777216; //@line 330 "arraymodule.c"
        var $7=((($6))|0)!=0; //@line 330 "arraymodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 330 "arraymodule.c"
      case 1: // $bb
        var $8=HEAP[$v_addr]; //@line 331 "arraymodule.c"
        var $9=_PyLong_AsUnsignedLong($8); //@line 331 "arraymodule.c"
        HEAP[$x]=$9; //@line 331 "arraymodule.c"
        var $10=HEAP[$x]; //@line 332 "arraymodule.c"
        var $11=((($10))|0)==-1; //@line 332 "arraymodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 332 "arraymodule.c"
      case 2: // $bb1
        var $12=_PyErr_Occurred(); //@line 332 "arraymodule.c"
        var $13=($12)!=0; //@line 332 "arraymodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 332 "arraymodule.c"
      case 3: // $bb2
        HEAP[$0]=-1; //@line 333 "arraymodule.c"
        __label__ = 13; break; //@line 333 "arraymodule.c"
      case 4: // $bb3
        __label__ = 10; break; //@line 333 "arraymodule.c"
      case 5: // $bb4
        var $14=HEAP[$v_addr]; //@line 337 "arraymodule.c"
        var $15=__PyArg_Parse_SizeT($14, ((__str10)&4294967295), $y); //@line 337 "arraymodule.c"
        var $16=((($15))|0)==0; //@line 337 "arraymodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 337 "arraymodule.c"
      case 6: // $bb5
        HEAP[$0]=-1; //@line 338 "arraymodule.c"
        __label__ = 13; break; //@line 338 "arraymodule.c"
      case 7: // $bb6
        var $17=HEAP[$y]; //@line 339 "arraymodule.c"
        var $18=((($17))|0) < 0; //@line 339 "arraymodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 339 "arraymodule.c"
      case 8: // $bb7
        var $19=HEAP[_PyExc_OverflowError]; //@line 340 "arraymodule.c"
        _PyErr_SetString($19, ((__str12)&4294967295)); //@line 340 "arraymodule.c"
        HEAP[$0]=-1; //@line 342 "arraymodule.c"
        __label__ = 13; break; //@line 342 "arraymodule.c"
      case 9: // $bb8
        var $20=HEAP[$y]; //@line 344 "arraymodule.c"
        HEAP[$x]=$20; //@line 344 "arraymodule.c"
        __label__ = 10; break; //@line 344 "arraymodule.c"
      case 10: // $bb9
        var $21=HEAP[$i_addr]; //@line 353 "arraymodule.c"
        var $22=((($21))|0) >= 0; //@line 353 "arraymodule.c"
        if ($22) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 353 "arraymodule.c"
      case 11: // $bb10
        var $23=HEAP[$ap_addr]; //@line 354 "arraymodule.c"
        var $24=(($23+12)&4294967295); //@line 354 "arraymodule.c"
        var $25=HEAP[$24]; //@line 354 "arraymodule.c"
        var $26=$25; //@line 354 "arraymodule.c"
        var $27=HEAP[$i_addr]; //@line 354 "arraymodule.c"
        var $28=(($26+4*$27)&4294967295); //@line 354 "arraymodule.c"
        var $29=HEAP[$x]; //@line 354 "arraymodule.c"
        HEAP[$28]=$29; //@line 354 "arraymodule.c"
        __label__ = 12; break; //@line 354 "arraymodule.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 355 "arraymodule.c"
        __label__ = 13; break; //@line 355 "arraymodule.c"
      case 13: // $bb12
        var $30=HEAP[$0]; //@line 333 "arraymodule.c"
        HEAP[$retval]=$30; //@line 333 "arraymodule.c"
        __label__ = 14; break; //@line 333 "arraymodule.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 333 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 333 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _f_getitem($ap, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$ap_addr]; //@line 361 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 361 "arraymodule.c"
        var $3=HEAP[$2]; //@line 361 "arraymodule.c"
        var $4=$3; //@line 361 "arraymodule.c"
        var $5=HEAP[$i_addr]; //@line 361 "arraymodule.c"
        var $6=(($4+4*$5)&4294967295); //@line 361 "arraymodule.c"
        var $7=HEAP[$6]; //@line 361 "arraymodule.c"
        var $8=($7); //@line 361 "arraymodule.c"
        var $9=_PyFloat_FromDouble($8); //@line 361 "arraymodule.c"
        HEAP[$0]=$9; //@line 361 "arraymodule.c"
        var $10=HEAP[$0]; //@line 361 "arraymodule.c"
        HEAP[$retval]=$10; //@line 361 "arraymodule.c"
        __label__ = 1; break; //@line 361 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 361 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 361 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _f_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 368 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, ((__str13)&4294967295), $x); //@line 368 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 368 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 368 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 369 "arraymodule.c"
        __label__ = 5; break; //@line 369 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$i_addr]; //@line 370 "arraymodule.c"
        var $5=((($4))|0) >= 0; //@line 370 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 370 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[$ap_addr]; //@line 371 "arraymodule.c"
        var $7=(($6+12)&4294967295); //@line 371 "arraymodule.c"
        var $8=HEAP[$7]; //@line 371 "arraymodule.c"
        var $9=$8; //@line 371 "arraymodule.c"
        var $10=HEAP[$x]; //@line 371 "arraymodule.c"
        var $11=HEAP[$i_addr]; //@line 371 "arraymodule.c"
        var $12=(($9+4*$11)&4294967295); //@line 371 "arraymodule.c"
        HEAP[$12]=$10; //@line 371 "arraymodule.c"
        __label__ = 4; break; //@line 371 "arraymodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 372 "arraymodule.c"
        __label__ = 5; break; //@line 372 "arraymodule.c"
      case 5: // $bb4
        var $13=HEAP[$0]; //@line 369 "arraymodule.c"
        HEAP[$retval]=$13; //@line 369 "arraymodule.c"
        __label__ = 6; break; //@line 369 "arraymodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 369 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 369 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _d_getitem($ap, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$ap_addr]; //@line 378 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 378 "arraymodule.c"
        var $3=HEAP[$2]; //@line 378 "arraymodule.c"
        var $4=$3; //@line 378 "arraymodule.c"
        var $5=HEAP[$i_addr]; //@line 378 "arraymodule.c"
        var $6=(($4+8*$5)&4294967295); //@line 378 "arraymodule.c"
        var $7=HEAP[$6]; //@line 378 "arraymodule.c"
        var $8=_PyFloat_FromDouble($7); //@line 378 "arraymodule.c"
        HEAP[$0]=$8; //@line 378 "arraymodule.c"
        var $9=HEAP[$0]; //@line 378 "arraymodule.c"
        HEAP[$retval]=$9; //@line 378 "arraymodule.c"
        __label__ = 1; break; //@line 378 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 378 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 378 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _d_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$ap_addr]=$ap;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 385 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, ((__str14)&4294967295), $x); //@line 385 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 385 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 385 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 386 "arraymodule.c"
        __label__ = 5; break; //@line 386 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$i_addr]; //@line 387 "arraymodule.c"
        var $5=((($4))|0) >= 0; //@line 387 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 387 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[$ap_addr]; //@line 388 "arraymodule.c"
        var $7=(($6+12)&4294967295); //@line 388 "arraymodule.c"
        var $8=HEAP[$7]; //@line 388 "arraymodule.c"
        var $9=$8; //@line 388 "arraymodule.c"
        var $10=HEAP[$x]; //@line 388 "arraymodule.c"
        var $11=HEAP[$i_addr]; //@line 388 "arraymodule.c"
        var $12=(($9+8*$11)&4294967295); //@line 388 "arraymodule.c"
        HEAP[$12]=$10; //@line 388 "arraymodule.c"
        __label__ = 4; break; //@line 388 "arraymodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 389 "arraymodule.c"
        __label__ = 5; break; //@line 389 "arraymodule.c"
      case 5: // $bb4
        var $13=HEAP[$0]; //@line 386 "arraymodule.c"
        HEAP[$retval]=$13; //@line 386 "arraymodule.c"
        __label__ = 6; break; //@line 386 "arraymodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 386 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 386 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _newarrayobject($type, $size, $descr) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $size_addr=__stackBase__+4;
        var $descr_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $iftmp_44=__stackBase__+16;
        var $iftmp_42=__stackBase__+20;
        var $iftmp_40=__stackBase__+24;
        var $0=__stackBase__+28;
        var $op=__stackBase__+32;
        var $nbytes=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        HEAP[$size_addr]=$size;
        HEAP[$descr_addr]=$descr;
        var $1=HEAP[$size_addr]; //@line 421 "arraymodule.c"
        var $2=((($1))|0) < 0; //@line 421 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 421 "arraymodule.c"
      case 1: // $bb
        __PyErr_BadInternalCall(((__str15)&4294967295), 422); //@line 422 "arraymodule.c"
        HEAP[$0]=0; //@line 423 "arraymodule.c"
        __label__ = 22; break; //@line 423 "arraymodule.c"
      case 2: // $bb1
        var $3=HEAP[$descr_addr]; //@line 426 "arraymodule.c"
        var $4=(($3+4)&4294967295); //@line 426 "arraymodule.c"
        var $5=HEAP[$4]; //@line 426 "arraymodule.c"
        var $6=HEAP[$size_addr]; //@line 426 "arraymodule.c"
        var $7=((($5) * ($6))&4294967295); //@line 426 "arraymodule.c"
        HEAP[$nbytes]=$7; //@line 426 "arraymodule.c"
        var $8=HEAP[$descr_addr]; //@line 428 "arraymodule.c"
        var $9=(($8+4)&4294967295); //@line 428 "arraymodule.c"
        var $10=HEAP[$9]; //@line 428 "arraymodule.c"
        var $11=HEAP[$nbytes]; //@line 428 "arraymodule.c"
        var $12=Math.floor(((($11))>>>0)/((($10))>>>0)); //@line 428 "arraymodule.c"
        var $13=HEAP[$size_addr]; //@line 428 "arraymodule.c"
        var $14=((($12))|0)!=((($13))|0); //@line 428 "arraymodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 428 "arraymodule.c"
      case 3: // $bb2
        var $15=_PyErr_NoMemory(); //@line 429 "arraymodule.c"
        HEAP[$0]=$15; //@line 429 "arraymodule.c"
        __label__ = 22; break; //@line 429 "arraymodule.c"
      case 4: // $bb3
        var $16=HEAP[$type_addr]; //@line 431 "arraymodule.c"
        var $17=(($16+152)&4294967295); //@line 431 "arraymodule.c"
        var $18=HEAP[$17]; //@line 431 "arraymodule.c"
        var $19=HEAP[$type_addr]; //@line 431 "arraymodule.c"
        var $20=FUNCTION_TABLE[$18]($19, 0); //@line 431 "arraymodule.c"
        var $21=$20; //@line 431 "arraymodule.c"
        HEAP[$op]=$21; //@line 431 "arraymodule.c"
        var $22=HEAP[$op]; //@line 432 "arraymodule.c"
        var $23=($22)==0; //@line 432 "arraymodule.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 432 "arraymodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 433 "arraymodule.c"
        __label__ = 22; break; //@line 433 "arraymodule.c"
      case 6: // $bb5
        var $24=HEAP[$op]; //@line 435 "arraymodule.c"
        var $25=(($24+20)&4294967295); //@line 435 "arraymodule.c"
        var $26=HEAP[$descr_addr]; //@line 435 "arraymodule.c"
        HEAP[$25]=$26; //@line 435 "arraymodule.c"
        var $27=HEAP[$op]; //@line 436 "arraymodule.c"
        var $28=(($27+16)&4294967295); //@line 436 "arraymodule.c"
        var $29=HEAP[$size_addr]; //@line 436 "arraymodule.c"
        HEAP[$28]=$29; //@line 436 "arraymodule.c"
        var $30=HEAP[$op]; //@line 437 "arraymodule.c"
        var $31=(($30+24)&4294967295); //@line 437 "arraymodule.c"
        HEAP[$31]=0; //@line 437 "arraymodule.c"
        var $32=HEAP[$op]; //@line 438 "arraymodule.c"
        var $33=$32; //@line 438 "arraymodule.c"
        var $34=(($33+8)&4294967295); //@line 438 "arraymodule.c"
        var $35=HEAP[$size_addr]; //@line 438 "arraymodule.c"
        HEAP[$34]=$35; //@line 438 "arraymodule.c"
        var $36=HEAP[$size_addr]; //@line 439 "arraymodule.c"
        var $37=((($36))|0) <= 0; //@line 439 "arraymodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 439 "arraymodule.c"
      case 7: // $bb6
        var $38=HEAP[$op]; //@line 440 "arraymodule.c"
        var $39=(($38+12)&4294967295); //@line 440 "arraymodule.c"
        HEAP[$39]=0; //@line 440 "arraymodule.c"
        __label__ = 21; break; //@line 440 "arraymodule.c"
      case 8: // $bb7
        var $40=HEAP[$nbytes]; //@line 443 "arraymodule.c"
        var $41=((($40))|0) >= 0; //@line 443 "arraymodule.c"
        if ($41) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 443 "arraymodule.c"
      case 9: // $bb8
        var $42=HEAP[$nbytes]; //@line 443 "arraymodule.c"
        var $43=((($42))|0) >= 0; //@line 443 "arraymodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 443 "arraymodule.c"
      case 10: // $bb9
        var $44=HEAP[$nbytes]; //@line 443 "arraymodule.c"
        var $45=((($44))|0)!=0; //@line 443 "arraymodule.c"
        if ($45) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 443 "arraymodule.c"
      case 11: // $bb10
        var $46=HEAP[$nbytes]; //@line 443 "arraymodule.c"
        HEAP[$iftmp_44]=$46; //@line 443 "arraymodule.c"
        __label__ = 13; break; //@line 443 "arraymodule.c"
      case 12: // $bb11
        HEAP[$iftmp_44]=1; //@line 443 "arraymodule.c"
        __label__ = 13; break; //@line 443 "arraymodule.c"
      case 13: // $bb12
        var $47=HEAP[$iftmp_44]; //@line 443 "arraymodule.c"
        var $48=_malloc($47); //@line 443 "arraymodule.c"
        HEAP[$iftmp_42]=$48; //@line 443 "arraymodule.c"
        __label__ = 15; break; //@line 443 "arraymodule.c"
      case 14: // $bb13
        HEAP[$iftmp_42]=0; //@line 443 "arraymodule.c"
        __label__ = 15; break; //@line 443 "arraymodule.c"
      case 15: // $bb14
        var $49=HEAP[$iftmp_42]; //@line 443 "arraymodule.c"
        HEAP[$iftmp_40]=$49; //@line 443 "arraymodule.c"
        __label__ = 17; break; //@line 443 "arraymodule.c"
      case 16: // $bb15
        HEAP[$iftmp_40]=0; //@line 443 "arraymodule.c"
        __label__ = 17; break; //@line 443 "arraymodule.c"
      case 17: // $bb16
        var $50=HEAP[$op]; //@line 443 "arraymodule.c"
        var $51=(($50+12)&4294967295); //@line 443 "arraymodule.c"
        var $52=HEAP[$iftmp_40]; //@line 443 "arraymodule.c"
        HEAP[$51]=$52; //@line 443 "arraymodule.c"
        var $53=HEAP[$op]; //@line 444 "arraymodule.c"
        var $54=(($53+12)&4294967295); //@line 444 "arraymodule.c"
        var $55=HEAP[$54]; //@line 444 "arraymodule.c"
        var $56=($55)==0; //@line 444 "arraymodule.c"
        if ($56) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 444 "arraymodule.c"
      case 18: // $bb17
        var $57=HEAP[$op]; //@line 445 "arraymodule.c"
        var $58=$57; //@line 445 "arraymodule.c"
        var $59=(($58)&4294967295); //@line 445 "arraymodule.c"
        var $60=HEAP[$59]; //@line 445 "arraymodule.c"
        var $61=((($60) - 1)&4294967295); //@line 445 "arraymodule.c"
        var $62=(($58)&4294967295); //@line 445 "arraymodule.c"
        HEAP[$62]=$61; //@line 445 "arraymodule.c"
        var $63=(($58)&4294967295); //@line 445 "arraymodule.c"
        var $64=HEAP[$63]; //@line 445 "arraymodule.c"
        var $65=((($64))|0)==0; //@line 445 "arraymodule.c"
        if ($65) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 445 "arraymodule.c"
      case 19: // $bb18
        var $66=HEAP[$op]; //@line 445 "arraymodule.c"
        var $67=$66; //@line 445 "arraymodule.c"
        var $68=(($67+4)&4294967295); //@line 445 "arraymodule.c"
        var $69=HEAP[$68]; //@line 445 "arraymodule.c"
        var $70=(($69+24)&4294967295); //@line 445 "arraymodule.c"
        var $71=HEAP[$70]; //@line 445 "arraymodule.c"
        var $72=HEAP[$op]; //@line 445 "arraymodule.c"
        var $73=$72; //@line 445 "arraymodule.c"
        FUNCTION_TABLE[$71]($73); //@line 445 "arraymodule.c"
        __label__ = 20; break; //@line 445 "arraymodule.c"
      case 20: // $bb19
        var $74=_PyErr_NoMemory(); //@line 446 "arraymodule.c"
        HEAP[$0]=$74; //@line 446 "arraymodule.c"
        __label__ = 22; break; //@line 446 "arraymodule.c"
      case 21: // $bb20
        var $75=HEAP[$op]; //@line 449 "arraymodule.c"
        var $76=$75; //@line 449 "arraymodule.c"
        HEAP[$0]=$76; //@line 449 "arraymodule.c"
        __label__ = 22; break; //@line 449 "arraymodule.c"
      case 22: // $bb21
        var $77=HEAP[$0]; //@line 423 "arraymodule.c"
        HEAP[$retval]=$77; //@line 423 "arraymodule.c"
        __label__ = 23; break; //@line 423 "arraymodule.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 423 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 423 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getarrayitem($op, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $op_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ap=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$op_addr]=$op;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$op_addr]; //@line 456 "arraymodule.c"
        var $2=(($1+4)&4294967295); //@line 456 "arraymodule.c"
        var $3=HEAP[$2]; //@line 456 "arraymodule.c"
        var $4=($3)!=(_Arraytype); //@line 456 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 456 "arraymodule.c"
      case 1: // $bb
        var $5=HEAP[$op_addr]; //@line 456 "arraymodule.c"
        var $6=(($5+4)&4294967295); //@line 456 "arraymodule.c"
        var $7=HEAP[$6]; //@line 456 "arraymodule.c"
        var $8=_PyType_IsSubtype($7, _Arraytype); //@line 456 "arraymodule.c"
        var $9=((($8))|0)==0; //@line 456 "arraymodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 456 "arraymodule.c"
      case 2: // $bb1
        ___assert_fail(((__str16)&4294967295), ((__str15)&4294967295), 456, ((___PRETTY_FUNCTION___8858)&4294967295)); //@line 456 "arraymodule.c"
        throw "Reached an unreachable! Original .ll line: 1855"; //@line 456 "arraymodule.c"
      case 3: // $bb2
        var $10=HEAP[$op_addr]; //@line 457 "arraymodule.c"
        var $11=$10; //@line 457 "arraymodule.c"
        HEAP[$ap]=$11; //@line 457 "arraymodule.c"
        var $12=HEAP[$i_addr]; //@line 458 "arraymodule.c"
        var $13=((($12))|0) < 0; //@line 458 "arraymodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 458 "arraymodule.c"
      case 4: // $bb3
        var $14=HEAP[$ap]; //@line 458 "arraymodule.c"
        var $15=$14; //@line 458 "arraymodule.c"
        var $16=(($15+8)&4294967295); //@line 458 "arraymodule.c"
        var $17=HEAP[$16]; //@line 458 "arraymodule.c"
        var $18=HEAP[$i_addr]; //@line 458 "arraymodule.c"
        var $19=((($17))|0) <= ((($18))|0); //@line 458 "arraymodule.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 458 "arraymodule.c"
      case 5: // $bb4
        ___assert_fail(((__str17)&4294967295), ((__str15)&4294967295), 458, ((___PRETTY_FUNCTION___8858)&4294967295)); //@line 458 "arraymodule.c"
        throw "Reached an unreachable! Original .ll line: 1876"; //@line 458 "arraymodule.c"
      case 6: // $bb5
        var $20=HEAP[$ap]; //@line 459 "arraymodule.c"
        var $21=(($20+20)&4294967295); //@line 459 "arraymodule.c"
        var $22=HEAP[$21]; //@line 459 "arraymodule.c"
        var $23=(($22+8)&4294967295); //@line 459 "arraymodule.c"
        var $24=HEAP[$23]; //@line 459 "arraymodule.c"
        var $25=HEAP[$ap]; //@line 459 "arraymodule.c"
        var $26=HEAP[$i_addr]; //@line 459 "arraymodule.c"
        var $27=FUNCTION_TABLE[$24]($25, $26); //@line 459 "arraymodule.c"
        HEAP[$0]=$27; //@line 459 "arraymodule.c"
        var $28=HEAP[$0]; //@line 459 "arraymodule.c"
        HEAP[$retval]=$28; //@line 459 "arraymodule.c"
        __label__ = 7; break; //@line 459 "arraymodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 459 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 459 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ins1($self, $where, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $where_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $items=__stackBase__+20;
        var $n=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$where_addr]=$where;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$self_addr]; //@line 466 "arraymodule.c"
        var $2=$1; //@line 466 "arraymodule.c"
        var $3=(($2+8)&4294967295); //@line 466 "arraymodule.c"
        var $4=HEAP[$3]; //@line 466 "arraymodule.c"
        HEAP[$n]=$4; //@line 466 "arraymodule.c"
        var $5=HEAP[$v_addr]; //@line 467 "arraymodule.c"
        var $6=($5)==0; //@line 467 "arraymodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 467 "arraymodule.c"
      case 1: // $bb
        __PyErr_BadInternalCall(((__str15)&4294967295), 468); //@line 468 "arraymodule.c"
        HEAP[$0]=-1; //@line 469 "arraymodule.c"
        __label__ = 14; break; //@line 469 "arraymodule.c"
      case 2: // $bb1
        var $7=HEAP[$self_addr]; //@line 471 "arraymodule.c"
        var $8=(($7+20)&4294967295); //@line 471 "arraymodule.c"
        var $9=HEAP[$8]; //@line 471 "arraymodule.c"
        var $10=(($9+12)&4294967295); //@line 471 "arraymodule.c"
        var $11=HEAP[$10]; //@line 471 "arraymodule.c"
        var $12=HEAP[$self_addr]; //@line 471 "arraymodule.c"
        var $13=HEAP[$v_addr]; //@line 471 "arraymodule.c"
        var $14=FUNCTION_TABLE[$11]($12, -1, $13); //@line 471 "arraymodule.c"
        var $15=((($14))|0) < 0; //@line 471 "arraymodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 471 "arraymodule.c"
      case 3: // $bb2
        HEAP[$0]=-1; //@line 472 "arraymodule.c"
        __label__ = 14; break; //@line 472 "arraymodule.c"
      case 4: // $bb3
        var $16=HEAP[$n]; //@line 474 "arraymodule.c"
        var $17=((($16) + 1)&4294967295); //@line 474 "arraymodule.c"
        var $18=HEAP[$self_addr]; //@line 474 "arraymodule.c"
        var $19=_array_resize($18, $17); //@line 474 "arraymodule.c"
        var $20=((($19))|0)==-1; //@line 474 "arraymodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 474 "arraymodule.c"
      case 5: // $bb4
        HEAP[$0]=-1; //@line 475 "arraymodule.c"
        __label__ = 14; break; //@line 475 "arraymodule.c"
      case 6: // $bb5
        var $21=HEAP[$self_addr]; //@line 476 "arraymodule.c"
        var $22=(($21+12)&4294967295); //@line 476 "arraymodule.c"
        var $23=HEAP[$22]; //@line 476 "arraymodule.c"
        HEAP[$items]=$23; //@line 476 "arraymodule.c"
        var $24=HEAP[$where_addr]; //@line 477 "arraymodule.c"
        var $25=((($24))|0) < 0; //@line 477 "arraymodule.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 477 "arraymodule.c"
      case 7: // $bb6
        var $26=HEAP[$where_addr]; //@line 478 "arraymodule.c"
        var $27=HEAP[$n]; //@line 478 "arraymodule.c"
        var $28=((($26) + ($27))&4294967295); //@line 478 "arraymodule.c"
        HEAP[$where_addr]=$28; //@line 478 "arraymodule.c"
        var $29=HEAP[$where_addr]; //@line 479 "arraymodule.c"
        var $30=((($29))|0) < 0; //@line 479 "arraymodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 479 "arraymodule.c"
      case 8: // $bb7
        HEAP[$where_addr]=0; //@line 480 "arraymodule.c"
        __label__ = 9; break; //@line 480 "arraymodule.c"
      case 9: // $bb8
        var $31=HEAP[$where_addr]; //@line 482 "arraymodule.c"
        var $32=HEAP[$n]; //@line 482 "arraymodule.c"
        var $33=((($31))|0) > ((($32))|0); //@line 482 "arraymodule.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 482 "arraymodule.c"
      case 10: // $bb9
        var $34=HEAP[$n]; //@line 483 "arraymodule.c"
        HEAP[$where_addr]=$34; //@line 483 "arraymodule.c"
        __label__ = 11; break; //@line 483 "arraymodule.c"
      case 11: // $bb10
        var $35=HEAP[$where_addr]; //@line 485 "arraymodule.c"
        var $36=HEAP[$n]; //@line 485 "arraymodule.c"
        var $37=((($35))|0)!=((($36))|0); //@line 485 "arraymodule.c"
        if ($37) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 485 "arraymodule.c"
      case 12: // $bb11
        var $38=HEAP[$n]; //@line 486 "arraymodule.c"
        var $39=HEAP[$where_addr]; //@line 486 "arraymodule.c"
        var $40=((($38) - ($39))&4294967295); //@line 486 "arraymodule.c"
        var $41=HEAP[$self_addr]; //@line 486 "arraymodule.c"
        var $42=(($41+20)&4294967295); //@line 486 "arraymodule.c"
        var $43=HEAP[$42]; //@line 486 "arraymodule.c"
        var $44=(($43+4)&4294967295); //@line 486 "arraymodule.c"
        var $45=HEAP[$44]; //@line 486 "arraymodule.c"
        var $46=((($40) * ($45))&4294967295); //@line 486 "arraymodule.c"
        var $47=HEAP[$self_addr]; //@line 486 "arraymodule.c"
        var $48=(($47+20)&4294967295); //@line 486 "arraymodule.c"
        var $49=HEAP[$48]; //@line 486 "arraymodule.c"
        var $50=(($49+4)&4294967295); //@line 486 "arraymodule.c"
        var $51=HEAP[$50]; //@line 486 "arraymodule.c"
        var $52=HEAP[$where_addr]; //@line 486 "arraymodule.c"
        var $53=((($51) * ($52))&4294967295); //@line 486 "arraymodule.c"
        var $54=HEAP[$items]; //@line 486 "arraymodule.c"
        var $55=(($54+$53)&4294967295); //@line 486 "arraymodule.c"
        var $56=HEAP[$where_addr]; //@line 486 "arraymodule.c"
        var $57=((($56) + 1)&4294967295); //@line 486 "arraymodule.c"
        var $58=HEAP[$self_addr]; //@line 486 "arraymodule.c"
        var $59=(($58+20)&4294967295); //@line 486 "arraymodule.c"
        var $60=HEAP[$59]; //@line 486 "arraymodule.c"
        var $61=(($60+4)&4294967295); //@line 486 "arraymodule.c"
        var $62=HEAP[$61]; //@line 486 "arraymodule.c"
        var $63=((($57) * ($62))&4294967295); //@line 486 "arraymodule.c"
        var $64=HEAP[$items]; //@line 486 "arraymodule.c"
        var $65=(($64+$63)&4294967295); //@line 486 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($65, $55, $46, 1, 0); //@line 486 "arraymodule.c"
        __label__ = 13; break; //@line 486 "arraymodule.c"
      case 13: // $bb12
        var $66=HEAP[$self_addr]; //@line 489 "arraymodule.c"
        var $67=(($66+20)&4294967295); //@line 489 "arraymodule.c"
        var $68=HEAP[$67]; //@line 489 "arraymodule.c"
        var $69=(($68+12)&4294967295); //@line 489 "arraymodule.c"
        var $70=HEAP[$69]; //@line 489 "arraymodule.c"
        var $71=HEAP[$self_addr]; //@line 489 "arraymodule.c"
        var $72=HEAP[$where_addr]; //@line 489 "arraymodule.c"
        var $73=HEAP[$v_addr]; //@line 489 "arraymodule.c"
        var $74=FUNCTION_TABLE[$70]($71, $72, $73); //@line 489 "arraymodule.c"
        HEAP[$0]=$74; //@line 489 "arraymodule.c"
        __label__ = 14; break; //@line 489 "arraymodule.c"
      case 14: // $bb13
        var $75=HEAP[$0]; //@line 469 "arraymodule.c"
        HEAP[$retval]=$75; //@line 469 "arraymodule.c"
        __label__ = 15; break; //@line 469 "arraymodule.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 469 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 469 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_dealloc($op) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $op_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$op_addr]=$op;
        var $0=HEAP[$op_addr]; //@line 497 "arraymodule.c"
        var $1=(($0+24)&4294967295); //@line 497 "arraymodule.c"
        var $2=HEAP[$1]; //@line 497 "arraymodule.c"
        var $3=($2)!=0; //@line 497 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 497 "arraymodule.c"
      case 1: // $bb
        var $4=HEAP[$op_addr]; //@line 498 "arraymodule.c"
        var $5=$4; //@line 498 "arraymodule.c"
        _PyObject_ClearWeakRefs($5); //@line 498 "arraymodule.c"
        __label__ = 2; break; //@line 498 "arraymodule.c"
      case 2: // $bb1
        var $6=HEAP[$op_addr]; //@line 499 "arraymodule.c"
        var $7=(($6+12)&4294967295); //@line 499 "arraymodule.c"
        var $8=HEAP[$7]; //@line 499 "arraymodule.c"
        var $9=($8)!=0; //@line 499 "arraymodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 499 "arraymodule.c"
      case 3: // $bb2
        var $10=HEAP[$op_addr]; //@line 500 "arraymodule.c"
        var $11=(($10+12)&4294967295); //@line 500 "arraymodule.c"
        var $12=HEAP[$11]; //@line 500 "arraymodule.c"
        _free($12); //@line 500 "arraymodule.c"
        __label__ = 4; break; //@line 500 "arraymodule.c"
      case 4: // $bb3
        var $13=HEAP[$op_addr]; //@line 501 "arraymodule.c"
        var $14=$13; //@line 501 "arraymodule.c"
        var $15=(($14+4)&4294967295); //@line 501 "arraymodule.c"
        var $16=HEAP[$15]; //@line 501 "arraymodule.c"
        var $17=(($16+160)&4294967295); //@line 501 "arraymodule.c"
        var $18=HEAP[$17]; //@line 501 "arraymodule.c"
        var $19=HEAP[$op_addr]; //@line 501 "arraymodule.c"
        var $20=$19; //@line 501 "arraymodule.c"
        FUNCTION_TABLE[$18]($20); //@line 501 "arraymodule.c"
        __label__ = 5; break; //@line 502 "arraymodule.c"
      case 5: // $return
        STACKTOP = __stackBase__;
        return; //@line 502 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_richcompare($v, $w, $op) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $v_addr=__stackBase__;
        var $w_addr=__stackBase__+4;
        var $op_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $va=__stackBase__+20;
        var $wa=__stackBase__+24;
        var $vi=__stackBase__+28;
        var $wi=__stackBase__+32;
        var $i=__stackBase__+36;
        var $k=__stackBase__+40;
        var $res=__stackBase__+44;
        var $vs=__stackBase__+48;
        var $ws=__stackBase__+52;
        var $cmp=__stackBase__+56;
        var $_alloca_point_=0;
        HEAP[$v_addr]=$v;
        HEAP[$w_addr]=$w;
        HEAP[$op_addr]=$op;
        HEAP[$vi]=0; //@line 508 "arraymodule.c"
        HEAP[$wi]=0; //@line 509 "arraymodule.c"
        var $1=HEAP[$v_addr]; //@line 513 "arraymodule.c"
        var $2=(($1+4)&4294967295); //@line 513 "arraymodule.c"
        var $3=HEAP[$2]; //@line 513 "arraymodule.c"
        var $4=($3)==(_Arraytype); //@line 513 "arraymodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 513 "arraymodule.c"
      case 1: // $bb
        var $5=HEAP[$v_addr]; //@line 513 "arraymodule.c"
        var $6=(($5+4)&4294967295); //@line 513 "arraymodule.c"
        var $7=HEAP[$6]; //@line 513 "arraymodule.c"
        var $8=_PyType_IsSubtype($7, _Arraytype); //@line 513 "arraymodule.c"
        var $9=((($8))|0)==0; //@line 513 "arraymodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 513 "arraymodule.c"
      case 2: // $bb1
        var $10=HEAP[$w_addr]; //@line 513 "arraymodule.c"
        var $11=(($10+4)&4294967295); //@line 513 "arraymodule.c"
        var $12=HEAP[$11]; //@line 513 "arraymodule.c"
        var $13=($12)==(_Arraytype); //@line 513 "arraymodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 513 "arraymodule.c"
      case 3: // $bb2
        var $14=HEAP[$w_addr]; //@line 513 "arraymodule.c"
        var $15=(($14+4)&4294967295); //@line 513 "arraymodule.c"
        var $16=HEAP[$15]; //@line 513 "arraymodule.c"
        var $17=_PyType_IsSubtype($16, _Arraytype); //@line 513 "arraymodule.c"
        var $18=((($17))|0)==0; //@line 513 "arraymodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 513 "arraymodule.c"
      case 4: // $bb3
        var $19=HEAP[((__Py_NotImplementedStruct)&4294967295)]; //@line 514 "arraymodule.c"
        var $20=((($19) + 1)&4294967295); //@line 514 "arraymodule.c"
        HEAP[((__Py_NotImplementedStruct)&4294967295)]=$20; //@line 514 "arraymodule.c"
        HEAP[$0]=__Py_NotImplementedStruct; //@line 515 "arraymodule.c"
        __label__ = 55; break; //@line 515 "arraymodule.c"
      case 5: // $bb4
        var $21=HEAP[$v_addr]; //@line 518 "arraymodule.c"
        var $22=$21; //@line 518 "arraymodule.c"
        HEAP[$va]=$22; //@line 518 "arraymodule.c"
        var $23=HEAP[$w_addr]; //@line 519 "arraymodule.c"
        var $24=$23; //@line 519 "arraymodule.c"
        HEAP[$wa]=$24; //@line 519 "arraymodule.c"
        var $25=HEAP[$va]; //@line 521 "arraymodule.c"
        var $26=$25; //@line 521 "arraymodule.c"
        var $27=(($26+8)&4294967295); //@line 521 "arraymodule.c"
        var $28=HEAP[$27]; //@line 521 "arraymodule.c"
        var $29=HEAP[$wa]; //@line 521 "arraymodule.c"
        var $30=$29; //@line 521 "arraymodule.c"
        var $31=(($30+8)&4294967295); //@line 521 "arraymodule.c"
        var $32=HEAP[$31]; //@line 521 "arraymodule.c"
        var $33=((($28))|0)!=((($32))|0); //@line 521 "arraymodule.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 12; break; } //@line 521 "arraymodule.c"
      case 6: // $bb5
        var $34=HEAP[$op_addr]; //@line 521 "arraymodule.c"
        var $35=((($34))|0)==2; //@line 521 "arraymodule.c"
        if ($35) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 521 "arraymodule.c"
      case 7: // $bb6
        var $36=HEAP[$op_addr]; //@line 521 "arraymodule.c"
        var $37=((($36))|0)==3; //@line 521 "arraymodule.c"
        if ($37) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 521 "arraymodule.c"
      case 8: // $bb7
        var $38=HEAP[$op_addr]; //@line 523 "arraymodule.c"
        var $39=((($38))|0)==2; //@line 523 "arraymodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 523 "arraymodule.c"
      case 9: // $bb8
        HEAP[$res]=__Py_ZeroStruct; //@line 524 "arraymodule.c"
        __label__ = 11; break; //@line 524 "arraymodule.c"
      case 10: // $bb9
        HEAP[$res]=__Py_TrueStruct; //@line 526 "arraymodule.c"
        __label__ = 11; break; //@line 526 "arraymodule.c"
      case 11: // $bb10
        var $40=HEAP[$res]; //@line 527 "arraymodule.c"
        var $41=(($40)&4294967295); //@line 527 "arraymodule.c"
        var $42=HEAP[$41]; //@line 527 "arraymodule.c"
        var $43=((($42) + 1)&4294967295); //@line 527 "arraymodule.c"
        var $44=HEAP[$res]; //@line 527 "arraymodule.c"
        var $45=(($44)&4294967295); //@line 527 "arraymodule.c"
        HEAP[$45]=$43; //@line 527 "arraymodule.c"
        var $46=HEAP[$res]; //@line 528 "arraymodule.c"
        HEAP[$0]=$46; //@line 528 "arraymodule.c"
        __label__ = 55; break; //@line 528 "arraymodule.c"
      case 12: // $bb11
        HEAP[$k]=1; //@line 532 "arraymodule.c"
        HEAP[$i]=0; //@line 533 "arraymodule.c"
        __label__ = 30; break; //@line 533 "arraymodule.c"
      case 13: // $bb12
        var $47=HEAP[$v_addr]; //@line 534 "arraymodule.c"
        var $48=HEAP[$i]; //@line 534 "arraymodule.c"
        var $49=_getarrayitem($47, $48); //@line 534 "arraymodule.c"
        HEAP[$vi]=$49; //@line 534 "arraymodule.c"
        var $50=HEAP[$w_addr]; //@line 535 "arraymodule.c"
        var $51=HEAP[$i]; //@line 535 "arraymodule.c"
        var $52=_getarrayitem($50, $51); //@line 535 "arraymodule.c"
        HEAP[$wi]=$52; //@line 535 "arraymodule.c"
        var $53=HEAP[$vi]; //@line 536 "arraymodule.c"
        var $54=($53)==0; //@line 536 "arraymodule.c"
        if ($54) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 536 "arraymodule.c"
      case 14: // $bb13
        var $55=HEAP[$wi]; //@line 536 "arraymodule.c"
        var $56=($55)==0; //@line 536 "arraymodule.c"
        if ($56) { __label__ = 15; break; } else { __label__ = 22; break; } //@line 536 "arraymodule.c"
      case 15: // $bb14
        var $57=HEAP[$vi]; //@line 537 "arraymodule.c"
        var $58=($57)!=0; //@line 537 "arraymodule.c"
        if ($58) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 537 "arraymodule.c"
      case 16: // $bb15
        var $59=HEAP[$vi]; //@line 537 "arraymodule.c"
        var $60=(($59)&4294967295); //@line 537 "arraymodule.c"
        var $61=HEAP[$60]; //@line 537 "arraymodule.c"
        var $62=((($61) - 1)&4294967295); //@line 537 "arraymodule.c"
        var $63=HEAP[$vi]; //@line 537 "arraymodule.c"
        var $64=(($63)&4294967295); //@line 537 "arraymodule.c"
        HEAP[$64]=$62; //@line 537 "arraymodule.c"
        var $65=HEAP[$vi]; //@line 537 "arraymodule.c"
        var $66=(($65)&4294967295); //@line 537 "arraymodule.c"
        var $67=HEAP[$66]; //@line 537 "arraymodule.c"
        var $68=((($67))|0)==0; //@line 537 "arraymodule.c"
        if ($68) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 537 "arraymodule.c"
      case 17: // $bb16
        var $69=HEAP[$vi]; //@line 537 "arraymodule.c"
        var $70=(($69+4)&4294967295); //@line 537 "arraymodule.c"
        var $71=HEAP[$70]; //@line 537 "arraymodule.c"
        var $72=(($71+24)&4294967295); //@line 537 "arraymodule.c"
        var $73=HEAP[$72]; //@line 537 "arraymodule.c"
        var $74=HEAP[$vi]; //@line 537 "arraymodule.c"
        FUNCTION_TABLE[$73]($74); //@line 537 "arraymodule.c"
        __label__ = 18; break; //@line 537 "arraymodule.c"
      case 18: // $bb17
        var $75=HEAP[$wi]; //@line 538 "arraymodule.c"
        var $76=($75)!=0; //@line 538 "arraymodule.c"
        if ($76) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 538 "arraymodule.c"
      case 19: // $bb18
        var $77=HEAP[$wi]; //@line 538 "arraymodule.c"
        var $78=(($77)&4294967295); //@line 538 "arraymodule.c"
        var $79=HEAP[$78]; //@line 538 "arraymodule.c"
        var $80=((($79) - 1)&4294967295); //@line 538 "arraymodule.c"
        var $81=HEAP[$wi]; //@line 538 "arraymodule.c"
        var $82=(($81)&4294967295); //@line 538 "arraymodule.c"
        HEAP[$82]=$80; //@line 538 "arraymodule.c"
        var $83=HEAP[$wi]; //@line 538 "arraymodule.c"
        var $84=(($83)&4294967295); //@line 538 "arraymodule.c"
        var $85=HEAP[$84]; //@line 538 "arraymodule.c"
        var $86=((($85))|0)==0; //@line 538 "arraymodule.c"
        if ($86) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 538 "arraymodule.c"
      case 20: // $bb19
        var $87=HEAP[$wi]; //@line 538 "arraymodule.c"
        var $88=(($87+4)&4294967295); //@line 538 "arraymodule.c"
        var $89=HEAP[$88]; //@line 538 "arraymodule.c"
        var $90=(($89+24)&4294967295); //@line 538 "arraymodule.c"
        var $91=HEAP[$90]; //@line 538 "arraymodule.c"
        var $92=HEAP[$wi]; //@line 538 "arraymodule.c"
        FUNCTION_TABLE[$91]($92); //@line 538 "arraymodule.c"
        __label__ = 21; break; //@line 538 "arraymodule.c"
      case 21: // $bb20
        HEAP[$0]=0; //@line 539 "arraymodule.c"
        __label__ = 55; break; //@line 539 "arraymodule.c"
      case 22: // $bb21
        var $93=HEAP[$vi]; //@line 541 "arraymodule.c"
        var $94=HEAP[$wi]; //@line 541 "arraymodule.c"
        var $95=_PyObject_RichCompareBool($93, $94, 2); //@line 541 "arraymodule.c"
        HEAP[$k]=$95; //@line 541 "arraymodule.c"
        var $96=HEAP[$k]; //@line 542 "arraymodule.c"
        var $97=((($96))|0)==0; //@line 542 "arraymodule.c"
        if ($97) { __label__ = 32; break; } else { __label__ = 23; break; } //@line 542 "arraymodule.c"
      case 23: // $bb22
        var $98=HEAP[$vi]; //@line 544 "arraymodule.c"
        var $99=(($98)&4294967295); //@line 544 "arraymodule.c"
        var $100=HEAP[$99]; //@line 544 "arraymodule.c"
        var $101=((($100) - 1)&4294967295); //@line 544 "arraymodule.c"
        var $102=HEAP[$vi]; //@line 544 "arraymodule.c"
        var $103=(($102)&4294967295); //@line 544 "arraymodule.c"
        HEAP[$103]=$101; //@line 544 "arraymodule.c"
        var $104=HEAP[$vi]; //@line 544 "arraymodule.c"
        var $105=(($104)&4294967295); //@line 544 "arraymodule.c"
        var $106=HEAP[$105]; //@line 544 "arraymodule.c"
        var $107=((($106))|0)==0; //@line 544 "arraymodule.c"
        if ($107) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 544 "arraymodule.c"
      case 24: // $bb23
        var $108=HEAP[$vi]; //@line 544 "arraymodule.c"
        var $109=(($108+4)&4294967295); //@line 544 "arraymodule.c"
        var $110=HEAP[$109]; //@line 544 "arraymodule.c"
        var $111=(($110+24)&4294967295); //@line 544 "arraymodule.c"
        var $112=HEAP[$111]; //@line 544 "arraymodule.c"
        var $113=HEAP[$vi]; //@line 544 "arraymodule.c"
        FUNCTION_TABLE[$112]($113); //@line 544 "arraymodule.c"
        __label__ = 25; break; //@line 544 "arraymodule.c"
      case 25: // $bb24
        var $114=HEAP[$wi]; //@line 545 "arraymodule.c"
        var $115=(($114)&4294967295); //@line 545 "arraymodule.c"
        var $116=HEAP[$115]; //@line 545 "arraymodule.c"
        var $117=((($116) - 1)&4294967295); //@line 545 "arraymodule.c"
        var $118=HEAP[$wi]; //@line 545 "arraymodule.c"
        var $119=(($118)&4294967295); //@line 545 "arraymodule.c"
        HEAP[$119]=$117; //@line 545 "arraymodule.c"
        var $120=HEAP[$wi]; //@line 545 "arraymodule.c"
        var $121=(($120)&4294967295); //@line 545 "arraymodule.c"
        var $122=HEAP[$121]; //@line 545 "arraymodule.c"
        var $123=((($122))|0)==0; //@line 545 "arraymodule.c"
        if ($123) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 545 "arraymodule.c"
      case 26: // $bb25
        var $124=HEAP[$wi]; //@line 545 "arraymodule.c"
        var $125=(($124+4)&4294967295); //@line 545 "arraymodule.c"
        var $126=HEAP[$125]; //@line 545 "arraymodule.c"
        var $127=(($126+24)&4294967295); //@line 545 "arraymodule.c"
        var $128=HEAP[$127]; //@line 545 "arraymodule.c"
        var $129=HEAP[$wi]; //@line 545 "arraymodule.c"
        FUNCTION_TABLE[$128]($129); //@line 545 "arraymodule.c"
        __label__ = 27; break; //@line 545 "arraymodule.c"
      case 27: // $bb26
        var $130=HEAP[$k]; //@line 546 "arraymodule.c"
        var $131=((($130))|0) < 0; //@line 546 "arraymodule.c"
        if ($131) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 546 "arraymodule.c"
      case 28: // $bb27
        HEAP[$0]=0; //@line 547 "arraymodule.c"
        __label__ = 55; break; //@line 547 "arraymodule.c"
      case 29: // $bb28
        var $132=HEAP[$i]; //@line 533 "arraymodule.c"
        var $133=((($132) + 1)&4294967295); //@line 533 "arraymodule.c"
        HEAP[$i]=$133; //@line 533 "arraymodule.c"
        __label__ = 30; break; //@line 533 "arraymodule.c"
      case 30: // $bb29
        var $134=HEAP[$va]; //@line 533 "arraymodule.c"
        var $135=$134; //@line 533 "arraymodule.c"
        var $136=(($135+8)&4294967295); //@line 533 "arraymodule.c"
        var $137=HEAP[$136]; //@line 533 "arraymodule.c"
        var $138=HEAP[$i]; //@line 533 "arraymodule.c"
        var $139=((($137))|0) <= ((($138))|0); //@line 533 "arraymodule.c"
        if ($139) { __label__ = 32; break; } else { __label__ = 31; break; } //@line 533 "arraymodule.c"
      case 31: // $bb30
        var $140=HEAP[$wa]; //@line 533 "arraymodule.c"
        var $141=$140; //@line 533 "arraymodule.c"
        var $142=(($141+8)&4294967295); //@line 533 "arraymodule.c"
        var $143=HEAP[$142]; //@line 533 "arraymodule.c"
        var $144=HEAP[$i]; //@line 533 "arraymodule.c"
        var $145=((($143))|0) > ((($144))|0); //@line 533 "arraymodule.c"
        if ($145) { __label__ = 13; break; } else { __label__ = 32; break; } //@line 533 "arraymodule.c"
      case 32: // $bb31
        var $146=HEAP[$k]; //@line 550 "arraymodule.c"
        var $147=((($146))|0)!=0; //@line 550 "arraymodule.c"
        if ($147) { __label__ = 33; break; } else { __label__ = 45; break; } //@line 550 "arraymodule.c"
      case 33: // $bb32
        var $148=HEAP[$va]; //@line 552 "arraymodule.c"
        var $149=$148; //@line 552 "arraymodule.c"
        var $150=(($149+8)&4294967295); //@line 552 "arraymodule.c"
        var $151=HEAP[$150]; //@line 552 "arraymodule.c"
        HEAP[$vs]=$151; //@line 552 "arraymodule.c"
        var $152=HEAP[$wa]; //@line 553 "arraymodule.c"
        var $153=$152; //@line 553 "arraymodule.c"
        var $154=(($153+8)&4294967295); //@line 553 "arraymodule.c"
        var $155=HEAP[$154]; //@line 553 "arraymodule.c"
        HEAP[$ws]=$155; //@line 553 "arraymodule.c"
        var $156=HEAP[$op_addr]; //@line 555 "arraymodule.c"
        if ($156 == 0) {
          __label__ = 34; break;
        }
        else if ($156 == 1) {
          __label__ = 35; break;
        }
        else if ($156 == 2) {
          __label__ = 36; break;
        }
        else if ($156 == 3) {
          __label__ = 37; break;
        }
        else if ($156 == 4) {
          __label__ = 38; break;
        }
        else if ($156 == 5) {
          __label__ = 39; break;
        }
        else {
        __label__ = 40; break;
        }
        
      case 34: // $bb33
        var $157=HEAP[$vs]; //@line 556 "arraymodule.c"
        var $158=HEAP[$ws]; //@line 556 "arraymodule.c"
        var $159=((($157))|0) < ((($158))|0); //@line 556 "arraymodule.c"
        var $160=unSign(($159), 1, 0); //@line 556 "arraymodule.c"
        HEAP[$cmp]=$160; //@line 556 "arraymodule.c"
        __label__ = 41; break; //@line 556 "arraymodule.c"
      case 35: // $bb34
        var $161=HEAP[$vs]; //@line 557 "arraymodule.c"
        var $162=HEAP[$ws]; //@line 557 "arraymodule.c"
        var $163=((($161))|0) <= ((($162))|0); //@line 557 "arraymodule.c"
        var $164=unSign(($163), 1, 0); //@line 557 "arraymodule.c"
        HEAP[$cmp]=$164; //@line 557 "arraymodule.c"
        __label__ = 41; break; //@line 557 "arraymodule.c"
      case 36: // $bb35
        var $165=HEAP[$vs]; //@line 558 "arraymodule.c"
        var $166=HEAP[$ws]; //@line 558 "arraymodule.c"
        var $167=((($165))|0)==((($166))|0); //@line 558 "arraymodule.c"
        var $168=unSign(($167), 1, 0); //@line 558 "arraymodule.c"
        HEAP[$cmp]=$168; //@line 558 "arraymodule.c"
        __label__ = 41; break; //@line 558 "arraymodule.c"
      case 37: // $bb36
        var $169=HEAP[$vs]; //@line 559 "arraymodule.c"
        var $170=HEAP[$ws]; //@line 559 "arraymodule.c"
        var $171=((($169))|0)!=((($170))|0); //@line 559 "arraymodule.c"
        var $172=unSign(($171), 1, 0); //@line 559 "arraymodule.c"
        HEAP[$cmp]=$172; //@line 559 "arraymodule.c"
        __label__ = 41; break; //@line 559 "arraymodule.c"
      case 38: // $bb37
        var $173=HEAP[$vs]; //@line 560 "arraymodule.c"
        var $174=HEAP[$ws]; //@line 560 "arraymodule.c"
        var $175=((($173))|0) > ((($174))|0); //@line 560 "arraymodule.c"
        var $176=unSign(($175), 1, 0); //@line 560 "arraymodule.c"
        HEAP[$cmp]=$176; //@line 560 "arraymodule.c"
        __label__ = 41; break; //@line 560 "arraymodule.c"
      case 39: // $bb38
        var $177=HEAP[$vs]; //@line 561 "arraymodule.c"
        var $178=HEAP[$ws]; //@line 561 "arraymodule.c"
        var $179=((($177))|0) >= ((($178))|0); //@line 561 "arraymodule.c"
        var $180=unSign(($179), 1, 0); //@line 561 "arraymodule.c"
        HEAP[$cmp]=$180; //@line 561 "arraymodule.c"
        __label__ = 41; break; //@line 561 "arraymodule.c"
      case 40: // $bb39
        HEAP[$0]=0; //@line 562 "arraymodule.c"
        __label__ = 55; break; //@line 562 "arraymodule.c"
      case 41: // $bb40
        var $181=HEAP[$cmp]; //@line 564 "arraymodule.c"
        var $182=((($181))|0)!=0; //@line 564 "arraymodule.c"
        if ($182) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 564 "arraymodule.c"
      case 42: // $bb41
        HEAP[$res]=__Py_TrueStruct; //@line 565 "arraymodule.c"
        __label__ = 44; break; //@line 565 "arraymodule.c"
      case 43: // $bb42
        HEAP[$res]=__Py_ZeroStruct; //@line 567 "arraymodule.c"
        __label__ = 44; break; //@line 567 "arraymodule.c"
      case 44: // $bb43
        var $183=HEAP[$res]; //@line 568 "arraymodule.c"
        var $184=(($183)&4294967295); //@line 568 "arraymodule.c"
        var $185=HEAP[$184]; //@line 568 "arraymodule.c"
        var $186=((($185) + 1)&4294967295); //@line 568 "arraymodule.c"
        var $187=HEAP[$res]; //@line 568 "arraymodule.c"
        var $188=(($187)&4294967295); //@line 568 "arraymodule.c"
        HEAP[$188]=$186; //@line 568 "arraymodule.c"
        var $189=HEAP[$res]; //@line 569 "arraymodule.c"
        HEAP[$0]=$189; //@line 569 "arraymodule.c"
        __label__ = 55; break; //@line 569 "arraymodule.c"
      case 45: // $bb44
        var $190=HEAP[$op_addr]; //@line 573 "arraymodule.c"
        var $191=((($190))|0)==2; //@line 573 "arraymodule.c"
        if ($191) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 573 "arraymodule.c"
      case 46: // $bb45
        var $192=((__Py_ZeroStruct)&4294967295); //@line 574 "arraymodule.c"
        var $193=HEAP[$192]; //@line 574 "arraymodule.c"
        var $194=((($193) + 1)&4294967295); //@line 574 "arraymodule.c"
        var $195=((__Py_ZeroStruct)&4294967295); //@line 574 "arraymodule.c"
        HEAP[$195]=$194; //@line 574 "arraymodule.c"
        HEAP[$res]=__Py_ZeroStruct; //@line 575 "arraymodule.c"
        __label__ = 50; break; //@line 575 "arraymodule.c"
      case 47: // $bb46
        var $196=HEAP[$op_addr]; //@line 577 "arraymodule.c"
        var $197=((($196))|0)==3; //@line 577 "arraymodule.c"
        if ($197) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 577 "arraymodule.c"
      case 48: // $bb47
        var $198=((__Py_TrueStruct)&4294967295); //@line 578 "arraymodule.c"
        var $199=HEAP[$198]; //@line 578 "arraymodule.c"
        var $200=((($199) + 1)&4294967295); //@line 578 "arraymodule.c"
        var $201=((__Py_TrueStruct)&4294967295); //@line 578 "arraymodule.c"
        HEAP[$201]=$200; //@line 578 "arraymodule.c"
        HEAP[$res]=__Py_TrueStruct; //@line 579 "arraymodule.c"
        __label__ = 50; break; //@line 579 "arraymodule.c"
      case 49: // $bb48
        var $202=HEAP[$vi]; //@line 583 "arraymodule.c"
        var $203=HEAP[$wi]; //@line 583 "arraymodule.c"
        var $204=HEAP[$op_addr]; //@line 583 "arraymodule.c"
        var $205=_PyObject_RichCompare($202, $203, $204); //@line 583 "arraymodule.c"
        HEAP[$res]=$205; //@line 583 "arraymodule.c"
        __label__ = 50; break; //@line 583 "arraymodule.c"
      case 50: // $bb49
        var $206=HEAP[$vi]; //@line 585 "arraymodule.c"
        var $207=(($206)&4294967295); //@line 585 "arraymodule.c"
        var $208=HEAP[$207]; //@line 585 "arraymodule.c"
        var $209=((($208) - 1)&4294967295); //@line 585 "arraymodule.c"
        var $210=HEAP[$vi]; //@line 585 "arraymodule.c"
        var $211=(($210)&4294967295); //@line 585 "arraymodule.c"
        HEAP[$211]=$209; //@line 585 "arraymodule.c"
        var $212=HEAP[$vi]; //@line 585 "arraymodule.c"
        var $213=(($212)&4294967295); //@line 585 "arraymodule.c"
        var $214=HEAP[$213]; //@line 585 "arraymodule.c"
        var $215=((($214))|0)==0; //@line 585 "arraymodule.c"
        if ($215) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 585 "arraymodule.c"
      case 51: // $bb50
        var $216=HEAP[$vi]; //@line 585 "arraymodule.c"
        var $217=(($216+4)&4294967295); //@line 585 "arraymodule.c"
        var $218=HEAP[$217]; //@line 585 "arraymodule.c"
        var $219=(($218+24)&4294967295); //@line 585 "arraymodule.c"
        var $220=HEAP[$219]; //@line 585 "arraymodule.c"
        var $221=HEAP[$vi]; //@line 585 "arraymodule.c"
        FUNCTION_TABLE[$220]($221); //@line 585 "arraymodule.c"
        __label__ = 52; break; //@line 585 "arraymodule.c"
      case 52: // $bb51
        var $222=HEAP[$wi]; //@line 586 "arraymodule.c"
        var $223=(($222)&4294967295); //@line 586 "arraymodule.c"
        var $224=HEAP[$223]; //@line 586 "arraymodule.c"
        var $225=((($224) - 1)&4294967295); //@line 586 "arraymodule.c"
        var $226=HEAP[$wi]; //@line 586 "arraymodule.c"
        var $227=(($226)&4294967295); //@line 586 "arraymodule.c"
        HEAP[$227]=$225; //@line 586 "arraymodule.c"
        var $228=HEAP[$wi]; //@line 586 "arraymodule.c"
        var $229=(($228)&4294967295); //@line 586 "arraymodule.c"
        var $230=HEAP[$229]; //@line 586 "arraymodule.c"
        var $231=((($230))|0)==0; //@line 586 "arraymodule.c"
        if ($231) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 586 "arraymodule.c"
      case 53: // $bb52
        var $232=HEAP[$wi]; //@line 586 "arraymodule.c"
        var $233=(($232+4)&4294967295); //@line 586 "arraymodule.c"
        var $234=HEAP[$233]; //@line 586 "arraymodule.c"
        var $235=(($234+24)&4294967295); //@line 586 "arraymodule.c"
        var $236=HEAP[$235]; //@line 586 "arraymodule.c"
        var $237=HEAP[$wi]; //@line 586 "arraymodule.c"
        FUNCTION_TABLE[$236]($237); //@line 586 "arraymodule.c"
        __label__ = 54; break; //@line 586 "arraymodule.c"
      case 54: // $bb53
        var $238=HEAP[$res]; //@line 587 "arraymodule.c"
        HEAP[$0]=$238; //@line 587 "arraymodule.c"
        __label__ = 55; break; //@line 587 "arraymodule.c"
      case 55: // $bb54
        var $239=HEAP[$0]; //@line 515 "arraymodule.c"
        HEAP[$retval]=$239; //@line 515 "arraymodule.c"
        __label__ = 56; break; //@line 515 "arraymodule.c"
      case 56: // $return
        var $retval55=HEAP[$retval]; //@line 515 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval55; //@line 515 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_length($a) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        var $1=HEAP[$a_addr]; //@line 593 "arraymodule.c"
        var $2=$1; //@line 593 "arraymodule.c"
        var $3=(($2+8)&4294967295); //@line 593 "arraymodule.c"
        var $4=HEAP[$3]; //@line 593 "arraymodule.c"
        HEAP[$0]=$4; //@line 593 "arraymodule.c"
        var $5=HEAP[$0]; //@line 593 "arraymodule.c"
        HEAP[$retval]=$5; //@line 593 "arraymodule.c"
        __label__ = 1; break; //@line 593 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 593 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 593 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_item($a, $i) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$i_addr]=$i;
        var $1=HEAP[$i_addr]; //@line 599 "arraymodule.c"
        var $2=((($1))|0) < 0; //@line 599 "arraymodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 599 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[$a_addr]; //@line 599 "arraymodule.c"
        var $4=$3; //@line 599 "arraymodule.c"
        var $5=(($4+8)&4294967295); //@line 599 "arraymodule.c"
        var $6=HEAP[$5]; //@line 599 "arraymodule.c"
        var $7=HEAP[$i_addr]; //@line 599 "arraymodule.c"
        var $8=((($6))|0) <= ((($7))|0); //@line 599 "arraymodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 599 "arraymodule.c"
      case 2: // $bb1
        var $9=HEAP[_PyExc_IndexError]; //@line 600 "arraymodule.c"
        _PyErr_SetString($9, ((__str18)&4294967295)); //@line 600 "arraymodule.c"
        HEAP[$0]=0; //@line 601 "arraymodule.c"
        __label__ = 4; break; //@line 601 "arraymodule.c"
      case 3: // $bb2
        var $10=HEAP[$a_addr]; //@line 603 "arraymodule.c"
        var $11=$10; //@line 603 "arraymodule.c"
        var $12=HEAP[$i_addr]; //@line 603 "arraymodule.c"
        var $13=_getarrayitem($11, $12); //@line 603 "arraymodule.c"
        HEAP[$0]=$13; //@line 603 "arraymodule.c"
        __label__ = 4; break; //@line 603 "arraymodule.c"
      case 4: // $bb3
        var $14=HEAP[$0]; //@line 601 "arraymodule.c"
        HEAP[$retval]=$14; //@line 601 "arraymodule.c"
        __label__ = 5; break; //@line 601 "arraymodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 601 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 601 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_slice($a, $ilow, $ihigh) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $ilow_addr=__stackBase__+4;
        var $ihigh_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $np=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$ilow_addr]=$ilow;
        HEAP[$ihigh_addr]=$ihigh;
        var $1=HEAP[$ilow_addr]; //@line 610 "arraymodule.c"
        var $2=((($1))|0) < 0; //@line 610 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 610 "arraymodule.c"
      case 1: // $bb
        HEAP[$ilow_addr]=0; //@line 611 "arraymodule.c"
        __label__ = 4; break; //@line 611 "arraymodule.c"
      case 2: // $bb1
        var $3=HEAP[$a_addr]; //@line 612 "arraymodule.c"
        var $4=$3; //@line 612 "arraymodule.c"
        var $5=(($4+8)&4294967295); //@line 612 "arraymodule.c"
        var $6=HEAP[$5]; //@line 612 "arraymodule.c"
        var $7=HEAP[$ilow_addr]; //@line 612 "arraymodule.c"
        var $8=((($6))|0) < ((($7))|0); //@line 612 "arraymodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 612 "arraymodule.c"
      case 3: // $bb2
        var $9=HEAP[$a_addr]; //@line 613 "arraymodule.c"
        var $10=$9; //@line 613 "arraymodule.c"
        var $11=(($10+8)&4294967295); //@line 613 "arraymodule.c"
        var $12=HEAP[$11]; //@line 613 "arraymodule.c"
        HEAP[$ilow_addr]=$12; //@line 613 "arraymodule.c"
        __label__ = 4; break; //@line 613 "arraymodule.c"
      case 4: // $bb3
        var $13=HEAP[$ihigh_addr]; //@line 614 "arraymodule.c"
        var $14=((($13))|0) < 0; //@line 614 "arraymodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 614 "arraymodule.c"
      case 5: // $bb4
        HEAP[$ihigh_addr]=0; //@line 615 "arraymodule.c"
        __label__ = 6; break; //@line 615 "arraymodule.c"
      case 6: // $bb5
        var $15=HEAP[$ihigh_addr]; //@line 616 "arraymodule.c"
        var $16=HEAP[$ilow_addr]; //@line 616 "arraymodule.c"
        var $17=((($15))|0) < ((($16))|0); //@line 616 "arraymodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 616 "arraymodule.c"
      case 7: // $bb6
        var $18=HEAP[$ilow_addr]; //@line 617 "arraymodule.c"
        HEAP[$ihigh_addr]=$18; //@line 617 "arraymodule.c"
        __label__ = 10; break; //@line 617 "arraymodule.c"
      case 8: // $bb7
        var $19=HEAP[$a_addr]; //@line 618 "arraymodule.c"
        var $20=$19; //@line 618 "arraymodule.c"
        var $21=(($20+8)&4294967295); //@line 618 "arraymodule.c"
        var $22=HEAP[$21]; //@line 618 "arraymodule.c"
        var $23=HEAP[$ihigh_addr]; //@line 618 "arraymodule.c"
        var $24=((($22))|0) < ((($23))|0); //@line 618 "arraymodule.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 618 "arraymodule.c"
      case 9: // $bb8
        var $25=HEAP[$a_addr]; //@line 619 "arraymodule.c"
        var $26=$25; //@line 619 "arraymodule.c"
        var $27=(($26+8)&4294967295); //@line 619 "arraymodule.c"
        var $28=HEAP[$27]; //@line 619 "arraymodule.c"
        HEAP[$ihigh_addr]=$28; //@line 619 "arraymodule.c"
        __label__ = 10; break; //@line 619 "arraymodule.c"
      case 10: // $bb9
        var $29=HEAP[$a_addr]; //@line 620 "arraymodule.c"
        var $30=(($29+20)&4294967295); //@line 620 "arraymodule.c"
        var $31=HEAP[$30]; //@line 620 "arraymodule.c"
        var $32=HEAP[$ihigh_addr]; //@line 620 "arraymodule.c"
        var $33=HEAP[$ilow_addr]; //@line 620 "arraymodule.c"
        var $34=((($32) - ($33))&4294967295); //@line 620 "arraymodule.c"
        var $35=_newarrayobject(_Arraytype, $34, $31); //@line 620 "arraymodule.c"
        var $36=$35; //@line 620 "arraymodule.c"
        HEAP[$np]=$36; //@line 620 "arraymodule.c"
        var $37=HEAP[$np]; //@line 621 "arraymodule.c"
        var $38=($37)==0; //@line 621 "arraymodule.c"
        if ($38) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 621 "arraymodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 622 "arraymodule.c"
        __label__ = 13; break; //@line 622 "arraymodule.c"
      case 12: // $bb11
        var $39=HEAP[$ihigh_addr]; //@line 623 "arraymodule.c"
        var $40=HEAP[$ilow_addr]; //@line 623 "arraymodule.c"
        var $41=((($39) - ($40))&4294967295); //@line 623 "arraymodule.c"
        var $42=HEAP[$a_addr]; //@line 623 "arraymodule.c"
        var $43=(($42+20)&4294967295); //@line 623 "arraymodule.c"
        var $44=HEAP[$43]; //@line 623 "arraymodule.c"
        var $45=(($44+4)&4294967295); //@line 623 "arraymodule.c"
        var $46=HEAP[$45]; //@line 623 "arraymodule.c"
        var $47=((($41) * ($46))&4294967295); //@line 623 "arraymodule.c"
        var $48=HEAP[$a_addr]; //@line 623 "arraymodule.c"
        var $49=(($48+12)&4294967295); //@line 623 "arraymodule.c"
        var $50=HEAP[$49]; //@line 623 "arraymodule.c"
        var $51=HEAP[$a_addr]; //@line 623 "arraymodule.c"
        var $52=(($51+20)&4294967295); //@line 623 "arraymodule.c"
        var $53=HEAP[$52]; //@line 623 "arraymodule.c"
        var $54=(($53+4)&4294967295); //@line 623 "arraymodule.c"
        var $55=HEAP[$54]; //@line 623 "arraymodule.c"
        var $56=HEAP[$ilow_addr]; //@line 623 "arraymodule.c"
        var $57=((($55) * ($56))&4294967295); //@line 623 "arraymodule.c"
        var $58=(($50+$57)&4294967295); //@line 623 "arraymodule.c"
        var $59=HEAP[$np]; //@line 623 "arraymodule.c"
        var $60=(($59+12)&4294967295); //@line 623 "arraymodule.c"
        var $61=HEAP[$60]; //@line 623 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($61, $58, $47, 1, 0); //@line 623 "arraymodule.c"
        var $62=HEAP[$np]; //@line 625 "arraymodule.c"
        var $63=$62; //@line 625 "arraymodule.c"
        HEAP[$0]=$63; //@line 625 "arraymodule.c"
        __label__ = 13; break; //@line 625 "arraymodule.c"
      case 13: // $bb12
        var $64=HEAP[$0]; //@line 622 "arraymodule.c"
        HEAP[$retval]=$64; //@line 622 "arraymodule.c"
        __label__ = 14; break; //@line 622 "arraymodule.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 622 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 622 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_copy($a, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $unused_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$unused_addr]=$unused;
        var $1=HEAP[$a_addr]; //@line 631 "arraymodule.c"
        var $2=$1; //@line 631 "arraymodule.c"
        var $3=(($2+8)&4294967295); //@line 631 "arraymodule.c"
        var $4=HEAP[$3]; //@line 631 "arraymodule.c"
        var $5=HEAP[$a_addr]; //@line 631 "arraymodule.c"
        var $6=_array_slice($5, 0, $4); //@line 631 "arraymodule.c"
        HEAP[$0]=$6; //@line 631 "arraymodule.c"
        var $7=HEAP[$0]; //@line 631 "arraymodule.c"
        HEAP[$retval]=$7; //@line 631 "arraymodule.c"
        __label__ = 1; break; //@line 631 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 631 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 631 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_concat($a, $bb) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $bb_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $size=__stackBase__+16;
        var $np=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$bb_addr]=$bb;
        var $1=HEAP[$bb_addr]; //@line 644 "arraymodule.c"
        var $2=(($1+4)&4294967295); //@line 644 "arraymodule.c"
        var $3=HEAP[$2]; //@line 644 "arraymodule.c"
        var $4=($3)!=(_Arraytype); //@line 644 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 644 "arraymodule.c"
      case 1: // $bb1
        var $5=HEAP[$bb_addr]; //@line 644 "arraymodule.c"
        var $6=(($5+4)&4294967295); //@line 644 "arraymodule.c"
        var $7=HEAP[$6]; //@line 644 "arraymodule.c"
        var $8=_PyType_IsSubtype($7, _Arraytype); //@line 644 "arraymodule.c"
        var $9=((($8))|0)==0; //@line 644 "arraymodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 644 "arraymodule.c"
      case 2: // $bb2
        var $10=HEAP[$bb_addr]; //@line 645 "arraymodule.c"
        var $11=(($10+4)&4294967295); //@line 645 "arraymodule.c"
        var $12=HEAP[$11]; //@line 645 "arraymodule.c"
        var $13=(($12+12)&4294967295); //@line 645 "arraymodule.c"
        var $14=HEAP[$13]; //@line 645 "arraymodule.c"
        var $15=HEAP[_PyExc_TypeError]; //@line 645 "arraymodule.c"
        var $16=_PyErr_Format($15, ((__str19)&4294967295), $14); //@line 645 "arraymodule.c"
        HEAP[$0]=0; //@line 648 "arraymodule.c"
        __label__ = 10; break; //@line 648 "arraymodule.c"
      case 3: // $bb3
        var $17=HEAP[$a_addr]; //@line 651 "arraymodule.c"
        var $18=(($17+20)&4294967295); //@line 651 "arraymodule.c"
        var $19=HEAP[$18]; //@line 651 "arraymodule.c"
        var $20=HEAP[$bb_addr]; //@line 651 "arraymodule.c"
        var $21=$20; //@line 651 "arraymodule.c"
        var $22=(($21+20)&4294967295); //@line 651 "arraymodule.c"
        var $23=HEAP[$22]; //@line 651 "arraymodule.c"
        var $24=($19)!=($23); //@line 651 "arraymodule.c"
        if ($24) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 651 "arraymodule.c"
      case 4: // $bb4
        var $25=_PyErr_BadArgument(); //@line 652 "arraymodule.c"
        HEAP[$0]=0; //@line 653 "arraymodule.c"
        __label__ = 10; break; //@line 653 "arraymodule.c"
      case 5: // $bb5
        var $26=HEAP[$a_addr]; //@line 655 "arraymodule.c"
        var $27=$26; //@line 655 "arraymodule.c"
        var $28=(($27+8)&4294967295); //@line 655 "arraymodule.c"
        var $29=HEAP[$28]; //@line 655 "arraymodule.c"
        var $30=HEAP[$bb_addr]; //@line 655 "arraymodule.c"
        var $31=$30; //@line 655 "arraymodule.c"
        var $32=(($31+8)&4294967295); //@line 655 "arraymodule.c"
        var $33=HEAP[$32]; //@line 655 "arraymodule.c"
        var $34=((2147483647 - ($33))&4294967295); //@line 655 "arraymodule.c"
        var $35=((($29))|0) > ((($34))|0); //@line 655 "arraymodule.c"
        if ($35) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 655 "arraymodule.c"
      case 6: // $bb6
        var $36=_PyErr_NoMemory(); //@line 656 "arraymodule.c"
        HEAP[$0]=$36; //@line 656 "arraymodule.c"
        __label__ = 10; break; //@line 656 "arraymodule.c"
      case 7: // $bb7
        var $37=HEAP[$a_addr]; //@line 658 "arraymodule.c"
        var $38=$37; //@line 658 "arraymodule.c"
        var $39=(($38+8)&4294967295); //@line 658 "arraymodule.c"
        var $40=HEAP[$39]; //@line 658 "arraymodule.c"
        var $41=HEAP[$bb_addr]; //@line 658 "arraymodule.c"
        var $42=$41; //@line 658 "arraymodule.c"
        var $43=(($42+8)&4294967295); //@line 658 "arraymodule.c"
        var $44=HEAP[$43]; //@line 658 "arraymodule.c"
        var $45=((($40) + ($44))&4294967295); //@line 658 "arraymodule.c"
        HEAP[$size]=$45; //@line 658 "arraymodule.c"
        var $46=HEAP[$a_addr]; //@line 659 "arraymodule.c"
        var $47=(($46+20)&4294967295); //@line 659 "arraymodule.c"
        var $48=HEAP[$47]; //@line 659 "arraymodule.c"
        var $49=HEAP[$size]; //@line 659 "arraymodule.c"
        var $50=_newarrayobject(_Arraytype, $49, $48); //@line 659 "arraymodule.c"
        var $51=$50; //@line 659 "arraymodule.c"
        HEAP[$np]=$51; //@line 659 "arraymodule.c"
        var $52=HEAP[$np]; //@line 660 "arraymodule.c"
        var $53=($52)==0; //@line 660 "arraymodule.c"
        if ($53) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 660 "arraymodule.c"
      case 8: // $bb8
        HEAP[$0]=0; //@line 661 "arraymodule.c"
        __label__ = 10; break; //@line 661 "arraymodule.c"
      case 9: // $bb9
        var $54=HEAP[$a_addr]; //@line 663 "arraymodule.c"
        var $55=$54; //@line 663 "arraymodule.c"
        var $56=(($55+8)&4294967295); //@line 663 "arraymodule.c"
        var $57=HEAP[$56]; //@line 663 "arraymodule.c"
        var $58=HEAP[$a_addr]; //@line 663 "arraymodule.c"
        var $59=(($58+20)&4294967295); //@line 663 "arraymodule.c"
        var $60=HEAP[$59]; //@line 663 "arraymodule.c"
        var $61=(($60+4)&4294967295); //@line 663 "arraymodule.c"
        var $62=HEAP[$61]; //@line 663 "arraymodule.c"
        var $63=((($57) * ($62))&4294967295); //@line 663 "arraymodule.c"
        var $64=HEAP[$a_addr]; //@line 663 "arraymodule.c"
        var $65=(($64+12)&4294967295); //@line 663 "arraymodule.c"
        var $66=HEAP[$65]; //@line 663 "arraymodule.c"
        var $67=HEAP[$np]; //@line 663 "arraymodule.c"
        var $68=(($67+12)&4294967295); //@line 663 "arraymodule.c"
        var $69=HEAP[$68]; //@line 663 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($69, $66, $63, 1, 0); //@line 663 "arraymodule.c"
        var $70=HEAP[$bb_addr]; //@line 664 "arraymodule.c"
        var $71=$70; //@line 664 "arraymodule.c"
        var $72=(($71+8)&4294967295); //@line 664 "arraymodule.c"
        var $73=HEAP[$72]; //@line 664 "arraymodule.c"
        var $74=HEAP[$bb_addr]; //@line 664 "arraymodule.c"
        var $75=$74; //@line 664 "arraymodule.c"
        var $76=(($75+20)&4294967295); //@line 664 "arraymodule.c"
        var $77=HEAP[$76]; //@line 664 "arraymodule.c"
        var $78=(($77+4)&4294967295); //@line 664 "arraymodule.c"
        var $79=HEAP[$78]; //@line 664 "arraymodule.c"
        var $80=((($73) * ($79))&4294967295); //@line 664 "arraymodule.c"
        var $81=HEAP[$bb_addr]; //@line 664 "arraymodule.c"
        var $82=$81; //@line 664 "arraymodule.c"
        var $83=(($82+12)&4294967295); //@line 664 "arraymodule.c"
        var $84=HEAP[$83]; //@line 664 "arraymodule.c"
        var $85=HEAP[$np]; //@line 664 "arraymodule.c"
        var $86=(($85+12)&4294967295); //@line 664 "arraymodule.c"
        var $87=HEAP[$86]; //@line 664 "arraymodule.c"
        var $88=HEAP[$a_addr]; //@line 664 "arraymodule.c"
        var $89=$88; //@line 664 "arraymodule.c"
        var $90=(($89+8)&4294967295); //@line 664 "arraymodule.c"
        var $91=HEAP[$90]; //@line 664 "arraymodule.c"
        var $92=HEAP[$a_addr]; //@line 664 "arraymodule.c"
        var $93=(($92+20)&4294967295); //@line 664 "arraymodule.c"
        var $94=HEAP[$93]; //@line 664 "arraymodule.c"
        var $95=(($94+4)&4294967295); //@line 664 "arraymodule.c"
        var $96=HEAP[$95]; //@line 664 "arraymodule.c"
        var $97=((($91) * ($96))&4294967295); //@line 664 "arraymodule.c"
        var $98=(($87+$97)&4294967295); //@line 664 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($98, $84, $80, 1, 0); //@line 664 "arraymodule.c"
        var $99=HEAP[$np]; //@line 666 "arraymodule.c"
        var $100=$99; //@line 666 "arraymodule.c"
        HEAP[$0]=$100; //@line 666 "arraymodule.c"
        __label__ = 10; break; //@line 666 "arraymodule.c"
      case 10: // $bb10
        var $101=HEAP[$0]; //@line 648 "arraymodule.c"
        HEAP[$retval]=$101; //@line 648 "arraymodule.c"
        __label__ = 11; break; //@line 648 "arraymodule.c"
      case 11: // $return
        var $retval11=HEAP[$retval]; //@line 648 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 648 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_repeat($a, $n) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $n_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $size=__stackBase__+20;
        var $np=__stackBase__+24;
        var $p=__stackBase__+28;
        var $nbytes=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$n_addr]=$n;
        var $1=HEAP[$n_addr]; //@line 678 "arraymodule.c"
        var $2=((($1))|0) < 0; //@line 678 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 678 "arraymodule.c"
      case 1: // $bb
        HEAP[$n_addr]=0; //@line 679 "arraymodule.c"
        __label__ = 2; break; //@line 679 "arraymodule.c"
      case 2: // $bb1
        var $3=HEAP[$a_addr]; //@line 680 "arraymodule.c"
        var $4=$3; //@line 680 "arraymodule.c"
        var $5=(($4+8)&4294967295); //@line 680 "arraymodule.c"
        var $6=HEAP[$5]; //@line 680 "arraymodule.c"
        var $7=((($6))|0)!=0; //@line 680 "arraymodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 680 "arraymodule.c"
      case 3: // $bb2
        var $8=HEAP[$a_addr]; //@line 680 "arraymodule.c"
        var $9=$8; //@line 680 "arraymodule.c"
        var $10=(($9+8)&4294967295); //@line 680 "arraymodule.c"
        var $11=HEAP[$10]; //@line 680 "arraymodule.c"
        var $12=((2147483647/((($11))|0))|0); //@line 680 "arraymodule.c"
        var $13=HEAP[$n_addr]; //@line 680 "arraymodule.c"
        var $14=((($12))|0) < ((($13))|0); //@line 680 "arraymodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 680 "arraymodule.c"
      case 4: // $bb3
        var $15=_PyErr_NoMemory(); //@line 681 "arraymodule.c"
        HEAP[$0]=$15; //@line 681 "arraymodule.c"
        __label__ = 11; break; //@line 681 "arraymodule.c"
      case 5: // $bb4
        var $16=HEAP[$a_addr]; //@line 683 "arraymodule.c"
        var $17=$16; //@line 683 "arraymodule.c"
        var $18=(($17+8)&4294967295); //@line 683 "arraymodule.c"
        var $19=HEAP[$18]; //@line 683 "arraymodule.c"
        var $20=HEAP[$n_addr]; //@line 683 "arraymodule.c"
        var $21=((($19) * ($20))&4294967295); //@line 683 "arraymodule.c"
        HEAP[$size]=$21; //@line 683 "arraymodule.c"
        var $22=HEAP[$a_addr]; //@line 684 "arraymodule.c"
        var $23=(($22+20)&4294967295); //@line 684 "arraymodule.c"
        var $24=HEAP[$23]; //@line 684 "arraymodule.c"
        var $25=HEAP[$size]; //@line 684 "arraymodule.c"
        var $26=_newarrayobject(_Arraytype, $25, $24); //@line 684 "arraymodule.c"
        var $27=$26; //@line 684 "arraymodule.c"
        HEAP[$np]=$27; //@line 684 "arraymodule.c"
        var $28=HEAP[$np]; //@line 685 "arraymodule.c"
        var $29=($28)==0; //@line 685 "arraymodule.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 685 "arraymodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 686 "arraymodule.c"
        __label__ = 11; break; //@line 686 "arraymodule.c"
      case 7: // $bb6
        var $30=HEAP[$np]; //@line 687 "arraymodule.c"
        var $31=(($30+12)&4294967295); //@line 687 "arraymodule.c"
        var $32=HEAP[$31]; //@line 687 "arraymodule.c"
        HEAP[$p]=$32; //@line 687 "arraymodule.c"
        var $33=HEAP[$a_addr]; //@line 688 "arraymodule.c"
        var $34=$33; //@line 688 "arraymodule.c"
        var $35=(($34+8)&4294967295); //@line 688 "arraymodule.c"
        var $36=HEAP[$35]; //@line 688 "arraymodule.c"
        var $37=HEAP[$a_addr]; //@line 688 "arraymodule.c"
        var $38=(($37+20)&4294967295); //@line 688 "arraymodule.c"
        var $39=HEAP[$38]; //@line 688 "arraymodule.c"
        var $40=(($39+4)&4294967295); //@line 688 "arraymodule.c"
        var $41=HEAP[$40]; //@line 688 "arraymodule.c"
        var $42=((($36) * ($41))&4294967295); //@line 688 "arraymodule.c"
        HEAP[$nbytes]=$42; //@line 688 "arraymodule.c"
        HEAP[$i]=0; //@line 689 "arraymodule.c"
        __label__ = 9; break; //@line 689 "arraymodule.c"
      case 8: // $bb7
        var $43=HEAP[$nbytes]; //@line 690 "arraymodule.c"
        var $44=HEAP[$a_addr]; //@line 690 "arraymodule.c"
        var $45=(($44+12)&4294967295); //@line 690 "arraymodule.c"
        var $46=HEAP[$45]; //@line 690 "arraymodule.c"
        var $47=HEAP[$p]; //@line 690 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($47, $46, $43, 1, 0); //@line 690 "arraymodule.c"
        var $48=HEAP[$p]; //@line 691 "arraymodule.c"
        var $49=HEAP[$nbytes]; //@line 691 "arraymodule.c"
        var $50=(($48+$49)&4294967295); //@line 691 "arraymodule.c"
        HEAP[$p]=$50; //@line 691 "arraymodule.c"
        var $51=HEAP[$i]; //@line 689 "arraymodule.c"
        var $52=((($51) + 1)&4294967295); //@line 689 "arraymodule.c"
        HEAP[$i]=$52; //@line 689 "arraymodule.c"
        __label__ = 9; break; //@line 689 "arraymodule.c"
      case 9: // $bb8
        var $53=HEAP[$i]; //@line 689 "arraymodule.c"
        var $54=HEAP[$n_addr]; //@line 689 "arraymodule.c"
        var $55=((($53))|0) < ((($54))|0); //@line 689 "arraymodule.c"
        if ($55) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 689 "arraymodule.c"
      case 10: // $bb9
        var $56=HEAP[$np]; //@line 693 "arraymodule.c"
        var $57=$56; //@line 693 "arraymodule.c"
        HEAP[$0]=$57; //@line 693 "arraymodule.c"
        __label__ = 11; break; //@line 693 "arraymodule.c"
      case 11: // $bb10
        var $58=HEAP[$0]; //@line 681 "arraymodule.c"
        HEAP[$retval]=$58; //@line 681 "arraymodule.c"
        __label__ = 12; break; //@line 681 "arraymodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 681 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 681 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_ass_slice($a, $ilow, $ihigh, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 64; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $ilow_addr=__stackBase__+4;
        var $ihigh_addr=__stackBase__+8;
        var $v_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $iftmp_109=__stackBase__+20;
        var $iftmp_107=__stackBase__+24;
        var $iftmp_105=__stackBase__+28;
        var $iftmp_101=__stackBase__+32;
        var $iftmp_99=__stackBase__+36;
        var $iftmp_97=__stackBase__+40;
        var $0=__stackBase__+44;
        var $item=__stackBase__+48;
        var $n=__stackBase__+52;
        var $d=__stackBase__+56;
        var $ret=__stackBase__+60;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$ilow_addr]=$ilow;
        HEAP[$ihigh_addr]=$ihigh;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$v_addr]; //@line 703 "arraymodule.c"
        var $2=($1)==0; //@line 703 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 703 "arraymodule.c"
      case 1: // $bb
        HEAP[$n]=0; //@line 704 "arraymodule.c"
        __label__ = 14; break; //@line 704 "arraymodule.c"
      case 2: // $bb1
        var $3=HEAP[$v_addr]; //@line 705 "arraymodule.c"
        var $4=(($3+4)&4294967295); //@line 705 "arraymodule.c"
        var $5=HEAP[$4]; //@line 705 "arraymodule.c"
        var $6=($5)==(_Arraytype); //@line 705 "arraymodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 705 "arraymodule.c"
      case 3: // $bb2
        var $7=HEAP[$v_addr]; //@line 705 "arraymodule.c"
        var $8=(($7+4)&4294967295); //@line 705 "arraymodule.c"
        var $9=HEAP[$8]; //@line 705 "arraymodule.c"
        var $10=_PyType_IsSubtype($9, _Arraytype); //@line 705 "arraymodule.c"
        var $11=((($10))|0)!=0; //@line 705 "arraymodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 13; break; } //@line 705 "arraymodule.c"
      case 4: // $bb3
        var $12=HEAP[$v_addr]; //@line 706 "arraymodule.c"
        var $13=$12; //@line 706 "arraymodule.c"
        var $14=(($13+8)&4294967295); //@line 706 "arraymodule.c"
        var $15=HEAP[$14]; //@line 706 "arraymodule.c"
        HEAP[$n]=$15; //@line 706 "arraymodule.c"
        var $16=HEAP[$v_addr]; //@line 707 "arraymodule.c"
        var $17=$16; //@line 707 "arraymodule.c"
        var $18=HEAP[$a_addr]; //@line 707 "arraymodule.c"
        var $19=($18)==($17); //@line 707 "arraymodule.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 707 "arraymodule.c"
      case 5: // $bb4
        var $20=HEAP[$v_addr]; //@line 710 "arraymodule.c"
        var $21=$20; //@line 710 "arraymodule.c"
        var $22=HEAP[$n]; //@line 710 "arraymodule.c"
        var $23=_array_slice($21, 0, $22); //@line 710 "arraymodule.c"
        HEAP[$v_addr]=$23; //@line 710 "arraymodule.c"
        var $24=HEAP[$v_addr]; //@line 711 "arraymodule.c"
        var $25=($24)==0; //@line 711 "arraymodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 711 "arraymodule.c"
      case 6: // $bb5
        HEAP[$0]=-1; //@line 712 "arraymodule.c"
        __label__ = 51; break; //@line 712 "arraymodule.c"
      case 7: // $bb6
        var $26=HEAP[$a_addr]; //@line 713 "arraymodule.c"
        var $27=HEAP[$ilow_addr]; //@line 713 "arraymodule.c"
        var $28=HEAP[$ihigh_addr]; //@line 713 "arraymodule.c"
        var $29=HEAP[$v_addr]; //@line 713 "arraymodule.c"
        var $30=_array_ass_slice($26, $27, $28, $29); //@line 713 "arraymodule.c"
        HEAP[$ret]=$30; //@line 713 "arraymodule.c"
        var $31=HEAP[$v_addr]; //@line 714 "arraymodule.c"
        var $32=(($31)&4294967295); //@line 714 "arraymodule.c"
        var $33=HEAP[$32]; //@line 714 "arraymodule.c"
        var $34=((($33) - 1)&4294967295); //@line 714 "arraymodule.c"
        var $35=HEAP[$v_addr]; //@line 714 "arraymodule.c"
        var $36=(($35)&4294967295); //@line 714 "arraymodule.c"
        HEAP[$36]=$34; //@line 714 "arraymodule.c"
        var $37=HEAP[$v_addr]; //@line 714 "arraymodule.c"
        var $38=(($37)&4294967295); //@line 714 "arraymodule.c"
        var $39=HEAP[$38]; //@line 714 "arraymodule.c"
        var $40=((($39))|0)==0; //@line 714 "arraymodule.c"
        if ($40) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 714 "arraymodule.c"
      case 8: // $bb7
        var $41=HEAP[$v_addr]; //@line 714 "arraymodule.c"
        var $42=(($41+4)&4294967295); //@line 714 "arraymodule.c"
        var $43=HEAP[$42]; //@line 714 "arraymodule.c"
        var $44=(($43+24)&4294967295); //@line 714 "arraymodule.c"
        var $45=HEAP[$44]; //@line 714 "arraymodule.c"
        var $46=HEAP[$v_addr]; //@line 714 "arraymodule.c"
        FUNCTION_TABLE[$45]($46); //@line 714 "arraymodule.c"
        __label__ = 9; break; //@line 714 "arraymodule.c"
      case 9: // $bb8
        var $47=HEAP[$ret]; //@line 715 "arraymodule.c"
        HEAP[$0]=$47; //@line 715 "arraymodule.c"
        __label__ = 51; break; //@line 715 "arraymodule.c"
      case 10: // $bb9
        var $48=HEAP[$v_addr]; //@line 717 "arraymodule.c"
        var $49=$48; //@line 717 "arraymodule.c"
        var $50=(($49+20)&4294967295); //@line 717 "arraymodule.c"
        var $51=HEAP[$50]; //@line 717 "arraymodule.c"
        var $52=HEAP[$a_addr]; //@line 717 "arraymodule.c"
        var $53=(($52+20)&4294967295); //@line 717 "arraymodule.c"
        var $54=HEAP[$53]; //@line 717 "arraymodule.c"
        var $55=($51)!=($54); //@line 717 "arraymodule.c"
        if ($55) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 717 "arraymodule.c"
      case 11: // $bb10
        var $56=_PyErr_BadArgument(); //@line 718 "arraymodule.c"
        HEAP[$0]=-1; //@line 719 "arraymodule.c"
        __label__ = 51; break; //@line 719 "arraymodule.c"
      case 12: // $bb11
        __label__ = 14; break; //@line 719 "arraymodule.c"
      case 13: // $bb12
        var $57=HEAP[$v_addr]; //@line 723 "arraymodule.c"
        var $58=(($57+4)&4294967295); //@line 723 "arraymodule.c"
        var $59=HEAP[$58]; //@line 723 "arraymodule.c"
        var $60=(($59+12)&4294967295); //@line 723 "arraymodule.c"
        var $61=HEAP[$60]; //@line 723 "arraymodule.c"
        var $62=HEAP[_PyExc_TypeError]; //@line 723 "arraymodule.c"
        var $63=_PyErr_Format($62, ((__str20)&4294967295), $61); //@line 723 "arraymodule.c"
        HEAP[$0]=-1; //@line 726 "arraymodule.c"
        __label__ = 51; break; //@line 726 "arraymodule.c"
      case 14: // $bb13
        var $64=HEAP[$ilow_addr]; //@line 728 "arraymodule.c"
        var $65=((($64))|0) < 0; //@line 728 "arraymodule.c"
        if ($65) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 728 "arraymodule.c"
      case 15: // $bb14
        HEAP[$ilow_addr]=0; //@line 729 "arraymodule.c"
        __label__ = 18; break; //@line 729 "arraymodule.c"
      case 16: // $bb15
        var $66=HEAP[$a_addr]; //@line 730 "arraymodule.c"
        var $67=$66; //@line 730 "arraymodule.c"
        var $68=(($67+8)&4294967295); //@line 730 "arraymodule.c"
        var $69=HEAP[$68]; //@line 730 "arraymodule.c"
        var $70=HEAP[$ilow_addr]; //@line 730 "arraymodule.c"
        var $71=((($69))|0) < ((($70))|0); //@line 730 "arraymodule.c"
        if ($71) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 730 "arraymodule.c"
      case 17: // $bb16
        var $72=HEAP[$a_addr]; //@line 731 "arraymodule.c"
        var $73=$72; //@line 731 "arraymodule.c"
        var $74=(($73+8)&4294967295); //@line 731 "arraymodule.c"
        var $75=HEAP[$74]; //@line 731 "arraymodule.c"
        HEAP[$ilow_addr]=$75; //@line 731 "arraymodule.c"
        __label__ = 18; break; //@line 731 "arraymodule.c"
      case 18: // $bb17
        var $76=HEAP[$ihigh_addr]; //@line 732 "arraymodule.c"
        var $77=((($76))|0) < 0; //@line 732 "arraymodule.c"
        if ($77) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 732 "arraymodule.c"
      case 19: // $bb18
        HEAP[$ihigh_addr]=0; //@line 733 "arraymodule.c"
        __label__ = 20; break; //@line 733 "arraymodule.c"
      case 20: // $bb19
        var $78=HEAP[$ihigh_addr]; //@line 734 "arraymodule.c"
        var $79=HEAP[$ilow_addr]; //@line 734 "arraymodule.c"
        var $80=((($78))|0) < ((($79))|0); //@line 734 "arraymodule.c"
        if ($80) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 734 "arraymodule.c"
      case 21: // $bb20
        var $81=HEAP[$ilow_addr]; //@line 735 "arraymodule.c"
        HEAP[$ihigh_addr]=$81; //@line 735 "arraymodule.c"
        __label__ = 24; break; //@line 735 "arraymodule.c"
      case 22: // $bb21
        var $82=HEAP[$a_addr]; //@line 736 "arraymodule.c"
        var $83=$82; //@line 736 "arraymodule.c"
        var $84=(($83+8)&4294967295); //@line 736 "arraymodule.c"
        var $85=HEAP[$84]; //@line 736 "arraymodule.c"
        var $86=HEAP[$ihigh_addr]; //@line 736 "arraymodule.c"
        var $87=((($85))|0) < ((($86))|0); //@line 736 "arraymodule.c"
        if ($87) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 736 "arraymodule.c"
      case 23: // $bb22
        var $88=HEAP[$a_addr]; //@line 737 "arraymodule.c"
        var $89=$88; //@line 737 "arraymodule.c"
        var $90=(($89+8)&4294967295); //@line 737 "arraymodule.c"
        var $91=HEAP[$90]; //@line 737 "arraymodule.c"
        HEAP[$ihigh_addr]=$91; //@line 737 "arraymodule.c"
        __label__ = 24; break; //@line 737 "arraymodule.c"
      case 24: // $bb23
        var $92=HEAP[$a_addr]; //@line 738 "arraymodule.c"
        var $93=(($92+12)&4294967295); //@line 738 "arraymodule.c"
        var $94=HEAP[$93]; //@line 738 "arraymodule.c"
        HEAP[$item]=$94; //@line 738 "arraymodule.c"
        var $95=HEAP[$ihigh_addr]; //@line 739 "arraymodule.c"
        var $96=HEAP[$ilow_addr]; //@line 739 "arraymodule.c"
        var $97=((($95) - ($96))&4294967295); //@line 739 "arraymodule.c"
        var $98=HEAP[$n]; //@line 739 "arraymodule.c"
        var $99=((($98) - ($97))&4294967295); //@line 739 "arraymodule.c"
        HEAP[$d]=$99; //@line 739 "arraymodule.c"
        var $100=HEAP[$d]; //@line 740 "arraymodule.c"
        var $101=((($100))|0) < 0; //@line 740 "arraymodule.c"
        if ($101) { __label__ = 25; break; } else { __label__ = 35; break; } //@line 740 "arraymodule.c"
      case 25: // $bb24
        var $102=HEAP[$a_addr]; //@line 741 "arraymodule.c"
        var $103=$102; //@line 741 "arraymodule.c"
        var $104=(($103+8)&4294967295); //@line 741 "arraymodule.c"
        var $105=HEAP[$104]; //@line 741 "arraymodule.c"
        var $106=HEAP[$ihigh_addr]; //@line 741 "arraymodule.c"
        var $107=((($105) - ($106))&4294967295); //@line 741 "arraymodule.c"
        var $108=HEAP[$a_addr]; //@line 741 "arraymodule.c"
        var $109=(($108+20)&4294967295); //@line 741 "arraymodule.c"
        var $110=HEAP[$109]; //@line 741 "arraymodule.c"
        var $111=(($110+4)&4294967295); //@line 741 "arraymodule.c"
        var $112=HEAP[$111]; //@line 741 "arraymodule.c"
        var $113=((($107) * ($112))&4294967295); //@line 741 "arraymodule.c"
        var $114=HEAP[$a_addr]; //@line 741 "arraymodule.c"
        var $115=(($114+20)&4294967295); //@line 741 "arraymodule.c"
        var $116=HEAP[$115]; //@line 741 "arraymodule.c"
        var $117=(($116+4)&4294967295); //@line 741 "arraymodule.c"
        var $118=HEAP[$117]; //@line 741 "arraymodule.c"
        var $119=HEAP[$ihigh_addr]; //@line 741 "arraymodule.c"
        var $120=((($118) * ($119))&4294967295); //@line 741 "arraymodule.c"
        var $121=HEAP[$item]; //@line 741 "arraymodule.c"
        var $122=(($121+$120)&4294967295); //@line 741 "arraymodule.c"
        var $123=HEAP[$ihigh_addr]; //@line 741 "arraymodule.c"
        var $124=HEAP[$d]; //@line 741 "arraymodule.c"
        var $125=((($123) + ($124))&4294967295); //@line 741 "arraymodule.c"
        var $126=HEAP[$a_addr]; //@line 741 "arraymodule.c"
        var $127=(($126+20)&4294967295); //@line 741 "arraymodule.c"
        var $128=HEAP[$127]; //@line 741 "arraymodule.c"
        var $129=(($128+4)&4294967295); //@line 741 "arraymodule.c"
        var $130=HEAP[$129]; //@line 741 "arraymodule.c"
        var $131=((($125) * ($130))&4294967295); //@line 741 "arraymodule.c"
        var $132=HEAP[$item]; //@line 741 "arraymodule.c"
        var $133=(($132+$131)&4294967295); //@line 741 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($133, $122, $113, 1, 0); //@line 741 "arraymodule.c"
        var $134=HEAP[$a_addr]; //@line 744 "arraymodule.c"
        var $135=$134; //@line 744 "arraymodule.c"
        var $136=HEAP[$a_addr]; //@line 744 "arraymodule.c"
        var $137=$136; //@line 744 "arraymodule.c"
        var $138=(($137+8)&4294967295); //@line 744 "arraymodule.c"
        var $139=HEAP[$138]; //@line 744 "arraymodule.c"
        var $140=HEAP[$d]; //@line 744 "arraymodule.c"
        var $141=((($139) + ($140))&4294967295); //@line 744 "arraymodule.c"
        var $142=(($135+8)&4294967295); //@line 744 "arraymodule.c"
        HEAP[$142]=$141; //@line 744 "arraymodule.c"
        var $143=HEAP[$a_addr]; //@line 745 "arraymodule.c"
        var $144=$143; //@line 745 "arraymodule.c"
        var $145=(($144+8)&4294967295); //@line 745 "arraymodule.c"
        var $146=HEAP[$145]; //@line 745 "arraymodule.c"
        var $147=HEAP[$a_addr]; //@line 745 "arraymodule.c"
        var $148=(($147+20)&4294967295); //@line 745 "arraymodule.c"
        var $149=HEAP[$148]; //@line 745 "arraymodule.c"
        var $150=(($149+4)&4294967295); //@line 745 "arraymodule.c"
        var $151=HEAP[$150]; //@line 745 "arraymodule.c"
        var $152=((($146) * ($151))&4294967295); //@line 745 "arraymodule.c"
        var $153=((($152))|0) >= 0; //@line 745 "arraymodule.c"
        if ($153) { __label__ = 26; break; } else { __label__ = 33; break; } //@line 745 "arraymodule.c"
      case 26: // $bb25
        var $154=HEAP[$a_addr]; //@line 745 "arraymodule.c"
        var $155=$154; //@line 745 "arraymodule.c"
        var $156=(($155+8)&4294967295); //@line 745 "arraymodule.c"
        var $157=HEAP[$156]; //@line 745 "arraymodule.c"
        var $158=HEAP[$a_addr]; //@line 745 "arraymodule.c"
        var $159=(($158+20)&4294967295); //@line 745 "arraymodule.c"
        var $160=HEAP[$159]; //@line 745 "arraymodule.c"
        var $161=(($160+4)&4294967295); //@line 745 "arraymodule.c"
        var $162=HEAP[$161]; //@line 745 "arraymodule.c"
        var $163=((($157) * ($162))&4294967295); //@line 745 "arraymodule.c"
        var $164=((($163))|0) >= 0; //@line 745 "arraymodule.c"
        if ($164) { __label__ = 27; break; } else { __label__ = 31; break; } //@line 745 "arraymodule.c"
      case 27: // $bb26
        var $165=HEAP[$a_addr]; //@line 745 "arraymodule.c"
        var $166=$165; //@line 745 "arraymodule.c"
        var $167=(($166+8)&4294967295); //@line 745 "arraymodule.c"
        var $168=HEAP[$167]; //@line 745 "arraymodule.c"
        var $169=HEAP[$a_addr]; //@line 745 "arraymodule.c"
        var $170=(($169+20)&4294967295); //@line 745 "arraymodule.c"
        var $171=HEAP[$170]; //@line 745 "arraymodule.c"
        var $172=(($171+4)&4294967295); //@line 745 "arraymodule.c"
        var $173=HEAP[$172]; //@line 745 "arraymodule.c"
        var $174=((($168) * ($173))&4294967295); //@line 745 "arraymodule.c"
        var $175=((($174))|0)!=0; //@line 745 "arraymodule.c"
        if ($175) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 745 "arraymodule.c"
      case 28: // $bb27
        var $176=HEAP[$a_addr]; //@line 745 "arraymodule.c"
        var $177=$176; //@line 745 "arraymodule.c"
        var $178=(($177+8)&4294967295); //@line 745 "arraymodule.c"
        var $179=HEAP[$178]; //@line 745 "arraymodule.c"
        var $180=HEAP[$a_addr]; //@line 745 "arraymodule.c"
        var $181=(($180+20)&4294967295); //@line 745 "arraymodule.c"
        var $182=HEAP[$181]; //@line 745 "arraymodule.c"
        var $183=(($182+4)&4294967295); //@line 745 "arraymodule.c"
        var $184=HEAP[$183]; //@line 745 "arraymodule.c"
        var $185=((($179) * ($184))&4294967295); //@line 745 "arraymodule.c"
        HEAP[$iftmp_101]=$185; //@line 745 "arraymodule.c"
        __label__ = 30; break; //@line 745 "arraymodule.c"
      case 29: // $bb28
        HEAP[$iftmp_101]=1; //@line 745 "arraymodule.c"
        __label__ = 30; break; //@line 745 "arraymodule.c"
      case 30: // $bb29
        var $186=HEAP[$item]; //@line 745 "arraymodule.c"
        var $187=HEAP[$iftmp_101]; //@line 745 "arraymodule.c"
        var $188=_realloc($186, $187); //@line 745 "arraymodule.c"
        HEAP[$iftmp_99]=$188; //@line 745 "arraymodule.c"
        __label__ = 32; break; //@line 745 "arraymodule.c"
      case 31: // $bb30
        HEAP[$iftmp_99]=0; //@line 745 "arraymodule.c"
        __label__ = 32; break; //@line 745 "arraymodule.c"
      case 32: // $bb31
        var $189=HEAP[$iftmp_99]; //@line 745 "arraymodule.c"
        HEAP[$iftmp_97]=$189; //@line 745 "arraymodule.c"
        __label__ = 34; break; //@line 745 "arraymodule.c"
      case 33: // $bb32
        HEAP[$iftmp_97]=0; //@line 745 "arraymodule.c"
        __label__ = 34; break; //@line 745 "arraymodule.c"
      case 34: // $bb33
        var $190=HEAP[$iftmp_97]; //@line 745 "arraymodule.c"
        HEAP[$item]=$190; //@line 745 "arraymodule.c"
        var $191=HEAP[$a_addr]; //@line 747 "arraymodule.c"
        var $192=(($191+12)&4294967295); //@line 747 "arraymodule.c"
        var $193=HEAP[$item]; //@line 747 "arraymodule.c"
        HEAP[$192]=$193; //@line 747 "arraymodule.c"
        var $194=HEAP[$a_addr]; //@line 748 "arraymodule.c"
        var $195=$194; //@line 748 "arraymodule.c"
        var $196=(($195+8)&4294967295); //@line 748 "arraymodule.c"
        var $197=HEAP[$196]; //@line 748 "arraymodule.c"
        var $198=HEAP[$a_addr]; //@line 748 "arraymodule.c"
        var $199=(($198+16)&4294967295); //@line 748 "arraymodule.c"
        HEAP[$199]=$197; //@line 748 "arraymodule.c"
        __label__ = 48; break; //@line 748 "arraymodule.c"
      case 35: // $bb34
        var $200=HEAP[$d]; //@line 750 "arraymodule.c"
        var $201=((($200))|0) > 0; //@line 750 "arraymodule.c"
        if ($201) { __label__ = 36; break; } else { __label__ = 48; break; } //@line 750 "arraymodule.c"
      case 36: // $bb35
        var $202=HEAP[$a_addr]; //@line 751 "arraymodule.c"
        var $203=$202; //@line 751 "arraymodule.c"
        var $204=(($203+8)&4294967295); //@line 751 "arraymodule.c"
        var $205=HEAP[$204]; //@line 751 "arraymodule.c"
        var $206=HEAP[$d]; //@line 751 "arraymodule.c"
        var $207=((($205) + ($206))&4294967295); //@line 751 "arraymodule.c"
        var $208=HEAP[$a_addr]; //@line 751 "arraymodule.c"
        var $209=(($208+20)&4294967295); //@line 751 "arraymodule.c"
        var $210=HEAP[$209]; //@line 751 "arraymodule.c"
        var $211=(($210+4)&4294967295); //@line 751 "arraymodule.c"
        var $212=HEAP[$211]; //@line 751 "arraymodule.c"
        var $213=((($207) * ($212))&4294967295); //@line 751 "arraymodule.c"
        var $214=((($213))|0) >= 0; //@line 751 "arraymodule.c"
        if ($214) { __label__ = 37; break; } else { __label__ = 44; break; } //@line 751 "arraymodule.c"
      case 37: // $bb36
        var $215=HEAP[$a_addr]; //@line 751 "arraymodule.c"
        var $216=$215; //@line 751 "arraymodule.c"
        var $217=(($216+8)&4294967295); //@line 751 "arraymodule.c"
        var $218=HEAP[$217]; //@line 751 "arraymodule.c"
        var $219=HEAP[$d]; //@line 751 "arraymodule.c"
        var $220=((($218) + ($219))&4294967295); //@line 751 "arraymodule.c"
        var $221=HEAP[$a_addr]; //@line 751 "arraymodule.c"
        var $222=(($221+20)&4294967295); //@line 751 "arraymodule.c"
        var $223=HEAP[$222]; //@line 751 "arraymodule.c"
        var $224=(($223+4)&4294967295); //@line 751 "arraymodule.c"
        var $225=HEAP[$224]; //@line 751 "arraymodule.c"
        var $226=((($220) * ($225))&4294967295); //@line 751 "arraymodule.c"
        var $227=((($226))|0) >= 0; //@line 751 "arraymodule.c"
        if ($227) { __label__ = 38; break; } else { __label__ = 42; break; } //@line 751 "arraymodule.c"
      case 38: // $bb37
        var $228=HEAP[$a_addr]; //@line 751 "arraymodule.c"
        var $229=$228; //@line 751 "arraymodule.c"
        var $230=(($229+8)&4294967295); //@line 751 "arraymodule.c"
        var $231=HEAP[$230]; //@line 751 "arraymodule.c"
        var $232=HEAP[$d]; //@line 751 "arraymodule.c"
        var $233=((($231) + ($232))&4294967295); //@line 751 "arraymodule.c"
        var $234=HEAP[$a_addr]; //@line 751 "arraymodule.c"
        var $235=(($234+20)&4294967295); //@line 751 "arraymodule.c"
        var $236=HEAP[$235]; //@line 751 "arraymodule.c"
        var $237=(($236+4)&4294967295); //@line 751 "arraymodule.c"
        var $238=HEAP[$237]; //@line 751 "arraymodule.c"
        var $239=((($233) * ($238))&4294967295); //@line 751 "arraymodule.c"
        var $240=((($239))|0)!=0; //@line 751 "arraymodule.c"
        if ($240) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 751 "arraymodule.c"
      case 39: // $bb38
        var $241=HEAP[$a_addr]; //@line 751 "arraymodule.c"
        var $242=$241; //@line 751 "arraymodule.c"
        var $243=(($242+8)&4294967295); //@line 751 "arraymodule.c"
        var $244=HEAP[$243]; //@line 751 "arraymodule.c"
        var $245=HEAP[$d]; //@line 751 "arraymodule.c"
        var $246=((($244) + ($245))&4294967295); //@line 751 "arraymodule.c"
        var $247=HEAP[$a_addr]; //@line 751 "arraymodule.c"
        var $248=(($247+20)&4294967295); //@line 751 "arraymodule.c"
        var $249=HEAP[$248]; //@line 751 "arraymodule.c"
        var $250=(($249+4)&4294967295); //@line 751 "arraymodule.c"
        var $251=HEAP[$250]; //@line 751 "arraymodule.c"
        var $252=((($246) * ($251))&4294967295); //@line 751 "arraymodule.c"
        HEAP[$iftmp_109]=$252; //@line 751 "arraymodule.c"
        __label__ = 41; break; //@line 751 "arraymodule.c"
      case 40: // $bb39
        HEAP[$iftmp_109]=1; //@line 751 "arraymodule.c"
        __label__ = 41; break; //@line 751 "arraymodule.c"
      case 41: // $bb40
        var $253=HEAP[$item]; //@line 751 "arraymodule.c"
        var $254=HEAP[$iftmp_109]; //@line 751 "arraymodule.c"
        var $255=_realloc($253, $254); //@line 751 "arraymodule.c"
        HEAP[$iftmp_107]=$255; //@line 751 "arraymodule.c"
        __label__ = 43; break; //@line 751 "arraymodule.c"
      case 42: // $bb41
        HEAP[$iftmp_107]=0; //@line 751 "arraymodule.c"
        __label__ = 43; break; //@line 751 "arraymodule.c"
      case 43: // $bb42
        var $256=HEAP[$iftmp_107]; //@line 751 "arraymodule.c"
        HEAP[$iftmp_105]=$256; //@line 751 "arraymodule.c"
        __label__ = 45; break; //@line 751 "arraymodule.c"
      case 44: // $bb43
        HEAP[$iftmp_105]=0; //@line 751 "arraymodule.c"
        __label__ = 45; break; //@line 751 "arraymodule.c"
      case 45: // $bb44
        var $257=HEAP[$iftmp_105]; //@line 751 "arraymodule.c"
        HEAP[$item]=$257; //@line 751 "arraymodule.c"
        var $258=HEAP[$item]; //@line 753 "arraymodule.c"
        var $259=($258)==0; //@line 753 "arraymodule.c"
        if ($259) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 753 "arraymodule.c"
      case 46: // $bb45
        var $260=_PyErr_NoMemory(); //@line 754 "arraymodule.c"
        HEAP[$0]=-1; //@line 755 "arraymodule.c"
        __label__ = 51; break; //@line 755 "arraymodule.c"
      case 47: // $bb46
        var $261=HEAP[$a_addr]; //@line 757 "arraymodule.c"
        var $262=$261; //@line 757 "arraymodule.c"
        var $263=(($262+8)&4294967295); //@line 757 "arraymodule.c"
        var $264=HEAP[$263]; //@line 757 "arraymodule.c"
        var $265=HEAP[$ihigh_addr]; //@line 757 "arraymodule.c"
        var $266=((($264) - ($265))&4294967295); //@line 757 "arraymodule.c"
        var $267=HEAP[$a_addr]; //@line 757 "arraymodule.c"
        var $268=(($267+20)&4294967295); //@line 757 "arraymodule.c"
        var $269=HEAP[$268]; //@line 757 "arraymodule.c"
        var $270=(($269+4)&4294967295); //@line 757 "arraymodule.c"
        var $271=HEAP[$270]; //@line 757 "arraymodule.c"
        var $272=((($266) * ($271))&4294967295); //@line 757 "arraymodule.c"
        var $273=HEAP[$a_addr]; //@line 757 "arraymodule.c"
        var $274=(($273+20)&4294967295); //@line 757 "arraymodule.c"
        var $275=HEAP[$274]; //@line 757 "arraymodule.c"
        var $276=(($275+4)&4294967295); //@line 757 "arraymodule.c"
        var $277=HEAP[$276]; //@line 757 "arraymodule.c"
        var $278=HEAP[$ihigh_addr]; //@line 757 "arraymodule.c"
        var $279=((($277) * ($278))&4294967295); //@line 757 "arraymodule.c"
        var $280=HEAP[$item]; //@line 757 "arraymodule.c"
        var $281=(($280+$279)&4294967295); //@line 757 "arraymodule.c"
        var $282=HEAP[$ihigh_addr]; //@line 757 "arraymodule.c"
        var $283=HEAP[$d]; //@line 757 "arraymodule.c"
        var $284=((($282) + ($283))&4294967295); //@line 757 "arraymodule.c"
        var $285=HEAP[$a_addr]; //@line 757 "arraymodule.c"
        var $286=(($285+20)&4294967295); //@line 757 "arraymodule.c"
        var $287=HEAP[$286]; //@line 757 "arraymodule.c"
        var $288=(($287+4)&4294967295); //@line 757 "arraymodule.c"
        var $289=HEAP[$288]; //@line 757 "arraymodule.c"
        var $290=((($284) * ($289))&4294967295); //@line 757 "arraymodule.c"
        var $291=HEAP[$item]; //@line 757 "arraymodule.c"
        var $292=(($291+$290)&4294967295); //@line 757 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($292, $281, $272, 1, 0); //@line 757 "arraymodule.c"
        var $293=HEAP[$a_addr]; //@line 760 "arraymodule.c"
        var $294=(($293+12)&4294967295); //@line 760 "arraymodule.c"
        var $295=HEAP[$item]; //@line 760 "arraymodule.c"
        HEAP[$294]=$295; //@line 760 "arraymodule.c"
        var $296=HEAP[$a_addr]; //@line 761 "arraymodule.c"
        var $297=$296; //@line 761 "arraymodule.c"
        var $298=HEAP[$a_addr]; //@line 761 "arraymodule.c"
        var $299=$298; //@line 761 "arraymodule.c"
        var $300=(($299+8)&4294967295); //@line 761 "arraymodule.c"
        var $301=HEAP[$300]; //@line 761 "arraymodule.c"
        var $302=HEAP[$d]; //@line 761 "arraymodule.c"
        var $303=((($301) + ($302))&4294967295); //@line 761 "arraymodule.c"
        var $304=(($297+8)&4294967295); //@line 761 "arraymodule.c"
        HEAP[$304]=$303; //@line 761 "arraymodule.c"
        var $305=HEAP[$a_addr]; //@line 762 "arraymodule.c"
        var $306=$305; //@line 762 "arraymodule.c"
        var $307=(($306+8)&4294967295); //@line 762 "arraymodule.c"
        var $308=HEAP[$307]; //@line 762 "arraymodule.c"
        var $309=HEAP[$a_addr]; //@line 762 "arraymodule.c"
        var $310=(($309+16)&4294967295); //@line 762 "arraymodule.c"
        HEAP[$310]=$308; //@line 762 "arraymodule.c"
        __label__ = 48; break; //@line 762 "arraymodule.c"
      case 48: // $bb47
        var $311=HEAP[$n]; //@line 764 "arraymodule.c"
        var $312=((($311))|0) > 0; //@line 764 "arraymodule.c"
        if ($312) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 764 "arraymodule.c"
      case 49: // $bb48
        var $313=HEAP[$v_addr]; //@line 765 "arraymodule.c"
        var $314=$313; //@line 765 "arraymodule.c"
        var $315=(($314+20)&4294967295); //@line 765 "arraymodule.c"
        var $316=HEAP[$315]; //@line 765 "arraymodule.c"
        var $317=(($316+4)&4294967295); //@line 765 "arraymodule.c"
        var $318=HEAP[$317]; //@line 765 "arraymodule.c"
        var $319=HEAP[$n]; //@line 765 "arraymodule.c"
        var $320=((($318) * ($319))&4294967295); //@line 765 "arraymodule.c"
        var $321=HEAP[$v_addr]; //@line 765 "arraymodule.c"
        var $322=$321; //@line 765 "arraymodule.c"
        var $323=(($322+12)&4294967295); //@line 765 "arraymodule.c"
        var $324=HEAP[$323]; //@line 765 "arraymodule.c"
        var $325=HEAP[$a_addr]; //@line 765 "arraymodule.c"
        var $326=(($325+20)&4294967295); //@line 765 "arraymodule.c"
        var $327=HEAP[$326]; //@line 765 "arraymodule.c"
        var $328=(($327+4)&4294967295); //@line 765 "arraymodule.c"
        var $329=HEAP[$328]; //@line 765 "arraymodule.c"
        var $330=HEAP[$ilow_addr]; //@line 765 "arraymodule.c"
        var $331=((($329) * ($330))&4294967295); //@line 765 "arraymodule.c"
        var $332=HEAP[$item]; //@line 765 "arraymodule.c"
        var $333=(($332+$331)&4294967295); //@line 765 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($333, $324, $320, 1, 0); //@line 765 "arraymodule.c"
        __label__ = 50; break; //@line 765 "arraymodule.c"
      case 50: // $bb49
        HEAP[$0]=0; //@line 767 "arraymodule.c"
        __label__ = 51; break; //@line 767 "arraymodule.c"
      case 51: // $bb50
        var $334=HEAP[$0]; //@line 712 "arraymodule.c"
        HEAP[$retval]=$334; //@line 712 "arraymodule.c"
        __label__ = 52; break; //@line 712 "arraymodule.c"
      case 52: // $return
        var $retval51=HEAP[$retval]; //@line 712 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval51; //@line 712 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_ass_item($a, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$i_addr]; //@line 774 "arraymodule.c"
        var $2=((($1))|0) < 0; //@line 774 "arraymodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 774 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[$a_addr]; //@line 774 "arraymodule.c"
        var $4=$3; //@line 774 "arraymodule.c"
        var $5=(($4+8)&4294967295); //@line 774 "arraymodule.c"
        var $6=HEAP[$5]; //@line 774 "arraymodule.c"
        var $7=HEAP[$i_addr]; //@line 774 "arraymodule.c"
        var $8=((($6))|0) <= ((($7))|0); //@line 774 "arraymodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 774 "arraymodule.c"
      case 2: // $bb1
        var $9=HEAP[_PyExc_IndexError]; //@line 775 "arraymodule.c"
        _PyErr_SetString($9, ((__str21)&4294967295)); //@line 775 "arraymodule.c"
        HEAP[$0]=-1; //@line 777 "arraymodule.c"
        __label__ = 6; break; //@line 777 "arraymodule.c"
      case 3: // $bb2
        var $10=HEAP[$v_addr]; //@line 779 "arraymodule.c"
        var $11=($10)==0; //@line 779 "arraymodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 779 "arraymodule.c"
      case 4: // $bb3
        var $12=HEAP[$i_addr]; //@line 780 "arraymodule.c"
        var $13=((($12) + 1)&4294967295); //@line 780 "arraymodule.c"
        var $14=HEAP[$a_addr]; //@line 780 "arraymodule.c"
        var $15=HEAP[$i_addr]; //@line 780 "arraymodule.c"
        var $16=HEAP[$v_addr]; //@line 780 "arraymodule.c"
        var $17=_array_ass_slice($14, $15, $13, $16); //@line 780 "arraymodule.c"
        HEAP[$0]=$17; //@line 780 "arraymodule.c"
        __label__ = 6; break; //@line 780 "arraymodule.c"
      case 5: // $bb4
        var $18=HEAP[$a_addr]; //@line 781 "arraymodule.c"
        var $19=(($18+20)&4294967295); //@line 781 "arraymodule.c"
        var $20=HEAP[$19]; //@line 781 "arraymodule.c"
        var $21=(($20+12)&4294967295); //@line 781 "arraymodule.c"
        var $22=HEAP[$21]; //@line 781 "arraymodule.c"
        var $23=HEAP[$a_addr]; //@line 781 "arraymodule.c"
        var $24=HEAP[$i_addr]; //@line 781 "arraymodule.c"
        var $25=HEAP[$v_addr]; //@line 781 "arraymodule.c"
        var $26=FUNCTION_TABLE[$22]($23, $24, $25); //@line 781 "arraymodule.c"
        HEAP[$0]=$26; //@line 781 "arraymodule.c"
        __label__ = 6; break; //@line 781 "arraymodule.c"
      case 6: // $bb5
        var $27=HEAP[$0]; //@line 777 "arraymodule.c"
        HEAP[$retval]=$27; //@line 777 "arraymodule.c"
        __label__ = 7; break; //@line 777 "arraymodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 777 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 777 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _setarrayitem($a, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$i_addr]=$i;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$a_addr]; //@line 787 "arraymodule.c"
        var $2=(($1+4)&4294967295); //@line 787 "arraymodule.c"
        var $3=HEAP[$2]; //@line 787 "arraymodule.c"
        var $4=($3)!=(_Arraytype); //@line 787 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 787 "arraymodule.c"
      case 1: // $bb
        var $5=HEAP[$a_addr]; //@line 787 "arraymodule.c"
        var $6=(($5+4)&4294967295); //@line 787 "arraymodule.c"
        var $7=HEAP[$6]; //@line 787 "arraymodule.c"
        var $8=_PyType_IsSubtype($7, _Arraytype); //@line 787 "arraymodule.c"
        var $9=((($8))|0)==0; //@line 787 "arraymodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 787 "arraymodule.c"
      case 2: // $bb1
        ___assert_fail(((__str22)&4294967295), ((__str15)&4294967295), 787, ((___PRETTY_FUNCTION___9470)&4294967295)); //@line 787 "arraymodule.c"
        throw "Reached an unreachable! Original .ll line: 3840"; //@line 787 "arraymodule.c"
      case 3: // $bb2
        var $10=HEAP[$a_addr]; //@line 788 "arraymodule.c"
        var $11=$10; //@line 788 "arraymodule.c"
        var $12=HEAP[$i_addr]; //@line 788 "arraymodule.c"
        var $13=HEAP[$v_addr]; //@line 788 "arraymodule.c"
        var $14=_array_ass_item($11, $12, $13); //@line 788 "arraymodule.c"
        HEAP[$0]=$14; //@line 788 "arraymodule.c"
        var $15=HEAP[$0]; //@line 788 "arraymodule.c"
        HEAP[$retval]=$15; //@line 788 "arraymodule.c"
        __label__ = 4; break; //@line 788 "arraymodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 788 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 788 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_iter_extend($self, $bb) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $bb_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $it=__stackBase__+16;
        var $v=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$bb_addr]=$bb;
        var $1=HEAP[$bb_addr]; //@line 796 "arraymodule.c"
        var $2=_PyObject_GetIter($1); //@line 796 "arraymodule.c"
        HEAP[$it]=$2; //@line 796 "arraymodule.c"
        var $3=HEAP[$it]; //@line 797 "arraymodule.c"
        var $4=($3)==0; //@line 797 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 797 "arraymodule.c"
      case 1: // $bb1
        HEAP[$0]=-1; //@line 798 "arraymodule.c"
        __label__ = 17; break; //@line 798 "arraymodule.c"
      case 2: // $bb2
        __label__ = 11; break; //@line 798 "arraymodule.c"
      case 3: // $bb3
        var $5=HEAP[$self_addr]; //@line 801 "arraymodule.c"
        var $6=$5; //@line 801 "arraymodule.c"
        var $7=(($6+8)&4294967295); //@line 801 "arraymodule.c"
        var $8=HEAP[$7]; //@line 801 "arraymodule.c"
        var $9=HEAP[$self_addr]; //@line 801 "arraymodule.c"
        var $10=HEAP[$v]; //@line 801 "arraymodule.c"
        var $11=_ins1($9, $8, $10); //@line 801 "arraymodule.c"
        var $12=((($11))|0)!=0; //@line 801 "arraymodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 801 "arraymodule.c"
      case 4: // $bb4
        var $13=HEAP[$v]; //@line 802 "arraymodule.c"
        var $14=(($13)&4294967295); //@line 802 "arraymodule.c"
        var $15=HEAP[$14]; //@line 802 "arraymodule.c"
        var $16=((($15) - 1)&4294967295); //@line 802 "arraymodule.c"
        var $17=HEAP[$v]; //@line 802 "arraymodule.c"
        var $18=(($17)&4294967295); //@line 802 "arraymodule.c"
        HEAP[$18]=$16; //@line 802 "arraymodule.c"
        var $19=HEAP[$v]; //@line 802 "arraymodule.c"
        var $20=(($19)&4294967295); //@line 802 "arraymodule.c"
        var $21=HEAP[$20]; //@line 802 "arraymodule.c"
        var $22=((($21))|0)==0; //@line 802 "arraymodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 802 "arraymodule.c"
      case 5: // $bb5
        var $23=HEAP[$v]; //@line 802 "arraymodule.c"
        var $24=(($23+4)&4294967295); //@line 802 "arraymodule.c"
        var $25=HEAP[$24]; //@line 802 "arraymodule.c"
        var $26=(($25+24)&4294967295); //@line 802 "arraymodule.c"
        var $27=HEAP[$26]; //@line 802 "arraymodule.c"
        var $28=HEAP[$v]; //@line 802 "arraymodule.c"
        FUNCTION_TABLE[$27]($28); //@line 802 "arraymodule.c"
        __label__ = 6; break; //@line 802 "arraymodule.c"
      case 6: // $bb6
        var $29=HEAP[$it]; //@line 803 "arraymodule.c"
        var $30=(($29)&4294967295); //@line 803 "arraymodule.c"
        var $31=HEAP[$30]; //@line 803 "arraymodule.c"
        var $32=((($31) - 1)&4294967295); //@line 803 "arraymodule.c"
        var $33=HEAP[$it]; //@line 803 "arraymodule.c"
        var $34=(($33)&4294967295); //@line 803 "arraymodule.c"
        HEAP[$34]=$32; //@line 803 "arraymodule.c"
        var $35=HEAP[$it]; //@line 803 "arraymodule.c"
        var $36=(($35)&4294967295); //@line 803 "arraymodule.c"
        var $37=HEAP[$36]; //@line 803 "arraymodule.c"
        var $38=((($37))|0)==0; //@line 803 "arraymodule.c"
        if ($38) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 803 "arraymodule.c"
      case 7: // $bb7
        var $39=HEAP[$it]; //@line 803 "arraymodule.c"
        var $40=(($39+4)&4294967295); //@line 803 "arraymodule.c"
        var $41=HEAP[$40]; //@line 803 "arraymodule.c"
        var $42=(($41+24)&4294967295); //@line 803 "arraymodule.c"
        var $43=HEAP[$42]; //@line 803 "arraymodule.c"
        var $44=HEAP[$it]; //@line 803 "arraymodule.c"
        FUNCTION_TABLE[$43]($44); //@line 803 "arraymodule.c"
        __label__ = 8; break; //@line 803 "arraymodule.c"
      case 8: // $bb8
        HEAP[$0]=-1; //@line 804 "arraymodule.c"
        __label__ = 17; break; //@line 804 "arraymodule.c"
      case 9: // $bb9
        var $45=HEAP[$v]; //@line 806 "arraymodule.c"
        var $46=(($45)&4294967295); //@line 806 "arraymodule.c"
        var $47=HEAP[$46]; //@line 806 "arraymodule.c"
        var $48=((($47) - 1)&4294967295); //@line 806 "arraymodule.c"
        var $49=HEAP[$v]; //@line 806 "arraymodule.c"
        var $50=(($49)&4294967295); //@line 806 "arraymodule.c"
        HEAP[$50]=$48; //@line 806 "arraymodule.c"
        var $51=HEAP[$v]; //@line 806 "arraymodule.c"
        var $52=(($51)&4294967295); //@line 806 "arraymodule.c"
        var $53=HEAP[$52]; //@line 806 "arraymodule.c"
        var $54=((($53))|0)==0; //@line 806 "arraymodule.c"
        if ($54) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 806 "arraymodule.c"
      case 10: // $bb10
        var $55=HEAP[$v]; //@line 806 "arraymodule.c"
        var $56=(($55+4)&4294967295); //@line 806 "arraymodule.c"
        var $57=HEAP[$56]; //@line 806 "arraymodule.c"
        var $58=(($57+24)&4294967295); //@line 806 "arraymodule.c"
        var $59=HEAP[$58]; //@line 806 "arraymodule.c"
        var $60=HEAP[$v]; //@line 806 "arraymodule.c"
        FUNCTION_TABLE[$59]($60); //@line 806 "arraymodule.c"
        __label__ = 11; break; //@line 806 "arraymodule.c"
      case 11: // $bb11
        var $61=HEAP[$it]; //@line 800 "arraymodule.c"
        var $62=_PyIter_Next($61); //@line 800 "arraymodule.c"
        HEAP[$v]=$62; //@line 800 "arraymodule.c"
        var $63=HEAP[$v]; //@line 800 "arraymodule.c"
        var $64=($63)!=0; //@line 800 "arraymodule.c"
        if ($64) { __label__ = 3; break; } else { __label__ = 12; break; } //@line 800 "arraymodule.c"
      case 12: // $bb12
        var $65=HEAP[$it]; //@line 808 "arraymodule.c"
        var $66=(($65)&4294967295); //@line 808 "arraymodule.c"
        var $67=HEAP[$66]; //@line 808 "arraymodule.c"
        var $68=((($67) - 1)&4294967295); //@line 808 "arraymodule.c"
        var $69=HEAP[$it]; //@line 808 "arraymodule.c"
        var $70=(($69)&4294967295); //@line 808 "arraymodule.c"
        HEAP[$70]=$68; //@line 808 "arraymodule.c"
        var $71=HEAP[$it]; //@line 808 "arraymodule.c"
        var $72=(($71)&4294967295); //@line 808 "arraymodule.c"
        var $73=HEAP[$72]; //@line 808 "arraymodule.c"
        var $74=((($73))|0)==0; //@line 808 "arraymodule.c"
        if ($74) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 808 "arraymodule.c"
      case 13: // $bb13
        var $75=HEAP[$it]; //@line 808 "arraymodule.c"
        var $76=(($75+4)&4294967295); //@line 808 "arraymodule.c"
        var $77=HEAP[$76]; //@line 808 "arraymodule.c"
        var $78=(($77+24)&4294967295); //@line 808 "arraymodule.c"
        var $79=HEAP[$78]; //@line 808 "arraymodule.c"
        var $80=HEAP[$it]; //@line 808 "arraymodule.c"
        FUNCTION_TABLE[$79]($80); //@line 808 "arraymodule.c"
        __label__ = 14; break; //@line 808 "arraymodule.c"
      case 14: // $bb14
        var $81=_PyErr_Occurred(); //@line 809 "arraymodule.c"
        var $82=($81)!=0; //@line 809 "arraymodule.c"
        if ($82) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 809 "arraymodule.c"
      case 15: // $bb15
        HEAP[$0]=-1; //@line 810 "arraymodule.c"
        __label__ = 17; break; //@line 810 "arraymodule.c"
      case 16: // $bb16
        HEAP[$0]=0; //@line 811 "arraymodule.c"
        __label__ = 17; break; //@line 811 "arraymodule.c"
      case 17: // $bb17
        var $83=HEAP[$0]; //@line 798 "arraymodule.c"
        HEAP[$retval]=$83; //@line 798 "arraymodule.c"
        __label__ = 18; break; //@line 798 "arraymodule.c"
      case 18: // $return
        var $retval18=HEAP[$retval]; //@line 798 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 798 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_do_extend($self, $bb) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $bb_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_132=__stackBase__+12;
        var $iftmp_131=__stackBase__+16;
        var $iftmp_130=__stackBase__+20;
        var $0=__stackBase__+24;
        var $size=__stackBase__+28;
        var $old_item=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$bb_addr]=$bb;
        var $1=HEAP[$bb_addr]; //@line 820 "arraymodule.c"
        var $2=(($1+4)&4294967295); //@line 820 "arraymodule.c"
        var $3=HEAP[$2]; //@line 820 "arraymodule.c"
        var $4=($3)!=(_Arraytype); //@line 820 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 820 "arraymodule.c"
      case 1: // $bb1
        var $5=HEAP[$bb_addr]; //@line 820 "arraymodule.c"
        var $6=(($5+4)&4294967295); //@line 820 "arraymodule.c"
        var $7=HEAP[$6]; //@line 820 "arraymodule.c"
        var $8=_PyType_IsSubtype($7, _Arraytype); //@line 820 "arraymodule.c"
        var $9=((($8))|0)==0; //@line 820 "arraymodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 820 "arraymodule.c"
      case 2: // $bb2
        var $10=HEAP[$self_addr]; //@line 821 "arraymodule.c"
        var $11=HEAP[$bb_addr]; //@line 821 "arraymodule.c"
        var $12=_array_iter_extend($10, $11); //@line 821 "arraymodule.c"
        HEAP[$0]=$12; //@line 821 "arraymodule.c"
        __label__ = 20; break; //@line 821 "arraymodule.c"
      case 3: // $bb3
        var $13=HEAP[$self_addr]; //@line 823 "arraymodule.c"
        var $14=(($13+20)&4294967295); //@line 823 "arraymodule.c"
        var $15=HEAP[$14]; //@line 823 "arraymodule.c"
        var $16=HEAP[$bb_addr]; //@line 823 "arraymodule.c"
        var $17=$16; //@line 823 "arraymodule.c"
        var $18=(($17+20)&4294967295); //@line 823 "arraymodule.c"
        var $19=HEAP[$18]; //@line 823 "arraymodule.c"
        var $20=($15)!=($19); //@line 823 "arraymodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 823 "arraymodule.c"
      case 4: // $bb4
        var $21=HEAP[_PyExc_TypeError]; //@line 824 "arraymodule.c"
        _PyErr_SetString($21, ((__str23)&4294967295)); //@line 824 "arraymodule.c"
        HEAP[$0]=-1; //@line 826 "arraymodule.c"
        __label__ = 20; break; //@line 826 "arraymodule.c"
      case 5: // $bb5
        var $22=HEAP[$self_addr]; //@line 828 "arraymodule.c"
        var $23=$22; //@line 828 "arraymodule.c"
        var $24=(($23+8)&4294967295); //@line 828 "arraymodule.c"
        var $25=HEAP[$24]; //@line 828 "arraymodule.c"
        var $26=HEAP[$bb_addr]; //@line 828 "arraymodule.c"
        var $27=$26; //@line 828 "arraymodule.c"
        var $28=(($27+8)&4294967295); //@line 828 "arraymodule.c"
        var $29=HEAP[$28]; //@line 828 "arraymodule.c"
        var $30=((2147483647 - ($29))&4294967295); //@line 828 "arraymodule.c"
        var $31=((($25))|0) > ((($30))|0); //@line 828 "arraymodule.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 828 "arraymodule.c"
      case 6: // $bb6
        var $32=HEAP[$self_addr]; //@line 828 "arraymodule.c"
        var $33=$32; //@line 828 "arraymodule.c"
        var $34=(($33+8)&4294967295); //@line 828 "arraymodule.c"
        var $35=HEAP[$34]; //@line 828 "arraymodule.c"
        var $36=HEAP[$bb_addr]; //@line 828 "arraymodule.c"
        var $37=$36; //@line 828 "arraymodule.c"
        var $38=(($37+8)&4294967295); //@line 828 "arraymodule.c"
        var $39=HEAP[$38]; //@line 828 "arraymodule.c"
        var $40=((($35) + ($39))&4294967295); //@line 828 "arraymodule.c"
        var $41=HEAP[$self_addr]; //@line 828 "arraymodule.c"
        var $42=(($41+20)&4294967295); //@line 828 "arraymodule.c"
        var $43=HEAP[$42]; //@line 828 "arraymodule.c"
        var $44=(($43+4)&4294967295); //@line 828 "arraymodule.c"
        var $45=HEAP[$44]; //@line 828 "arraymodule.c"
        var $46=((2147483647/((($45))|0))|0); //@line 828 "arraymodule.c"
        var $47=((($40))|0) > ((($46))|0); //@line 828 "arraymodule.c"
        if ($47) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 828 "arraymodule.c"
      case 7: // $bb7
        var $48=_PyErr_NoMemory(); //@line 830 "arraymodule.c"
        HEAP[$0]=-1; //@line 831 "arraymodule.c"
        __label__ = 20; break; //@line 831 "arraymodule.c"
      case 8: // $bb8
        var $49=HEAP[$self_addr]; //@line 833 "arraymodule.c"
        var $50=$49; //@line 833 "arraymodule.c"
        var $51=(($50+8)&4294967295); //@line 833 "arraymodule.c"
        var $52=HEAP[$51]; //@line 833 "arraymodule.c"
        var $53=HEAP[$bb_addr]; //@line 833 "arraymodule.c"
        var $54=$53; //@line 833 "arraymodule.c"
        var $55=(($54+8)&4294967295); //@line 833 "arraymodule.c"
        var $56=HEAP[$55]; //@line 833 "arraymodule.c"
        var $57=((($52) + ($56))&4294967295); //@line 833 "arraymodule.c"
        HEAP[$size]=$57; //@line 833 "arraymodule.c"
        var $58=HEAP[$self_addr]; //@line 834 "arraymodule.c"
        var $59=(($58+12)&4294967295); //@line 834 "arraymodule.c"
        var $60=HEAP[$59]; //@line 834 "arraymodule.c"
        HEAP[$old_item]=$60; //@line 834 "arraymodule.c"
        var $61=HEAP[$self_addr]; //@line 835 "arraymodule.c"
        var $62=(($61+20)&4294967295); //@line 835 "arraymodule.c"
        var $63=HEAP[$62]; //@line 835 "arraymodule.c"
        var $64=(($63+4)&4294967295); //@line 835 "arraymodule.c"
        var $65=HEAP[$64]; //@line 835 "arraymodule.c"
        var $66=HEAP[$size]; //@line 835 "arraymodule.c"
        var $67=((($65) * ($66))&4294967295); //@line 835 "arraymodule.c"
        var $68=((($67))|0) >= 0; //@line 835 "arraymodule.c"
        if ($68) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 835 "arraymodule.c"
      case 9: // $bb9
        var $69=HEAP[$self_addr]; //@line 835 "arraymodule.c"
        var $70=(($69+20)&4294967295); //@line 835 "arraymodule.c"
        var $71=HEAP[$70]; //@line 835 "arraymodule.c"
        var $72=(($71+4)&4294967295); //@line 835 "arraymodule.c"
        var $73=HEAP[$72]; //@line 835 "arraymodule.c"
        var $74=HEAP[$size]; //@line 835 "arraymodule.c"
        var $75=((($73) * ($74))&4294967295); //@line 835 "arraymodule.c"
        var $76=((($75))|0) >= 0; //@line 835 "arraymodule.c"
        if ($76) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 835 "arraymodule.c"
      case 10: // $bb10
        var $77=HEAP[$self_addr]; //@line 835 "arraymodule.c"
        var $78=(($77+20)&4294967295); //@line 835 "arraymodule.c"
        var $79=HEAP[$78]; //@line 835 "arraymodule.c"
        var $80=(($79+4)&4294967295); //@line 835 "arraymodule.c"
        var $81=HEAP[$80]; //@line 835 "arraymodule.c"
        var $82=HEAP[$size]; //@line 835 "arraymodule.c"
        var $83=((($81) * ($82))&4294967295); //@line 835 "arraymodule.c"
        var $84=((($83))|0)!=0; //@line 835 "arraymodule.c"
        if ($84) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 835 "arraymodule.c"
      case 11: // $bb11
        var $85=HEAP[$self_addr]; //@line 835 "arraymodule.c"
        var $86=(($85+20)&4294967295); //@line 835 "arraymodule.c"
        var $87=HEAP[$86]; //@line 835 "arraymodule.c"
        var $88=(($87+4)&4294967295); //@line 835 "arraymodule.c"
        var $89=HEAP[$88]; //@line 835 "arraymodule.c"
        var $90=HEAP[$size]; //@line 835 "arraymodule.c"
        var $91=((($89) * ($90))&4294967295); //@line 835 "arraymodule.c"
        HEAP[$iftmp_132]=$91; //@line 835 "arraymodule.c"
        __label__ = 13; break; //@line 835 "arraymodule.c"
      case 12: // $bb12
        HEAP[$iftmp_132]=1; //@line 835 "arraymodule.c"
        __label__ = 13; break; //@line 835 "arraymodule.c"
      case 13: // $bb13
        var $92=HEAP[$self_addr]; //@line 835 "arraymodule.c"
        var $93=(($92+12)&4294967295); //@line 835 "arraymodule.c"
        var $94=HEAP[$93]; //@line 835 "arraymodule.c"
        var $95=HEAP[$iftmp_132]; //@line 835 "arraymodule.c"
        var $96=_realloc($94, $95); //@line 835 "arraymodule.c"
        HEAP[$iftmp_131]=$96; //@line 835 "arraymodule.c"
        __label__ = 15; break; //@line 835 "arraymodule.c"
      case 14: // $bb14
        HEAP[$iftmp_131]=0; //@line 835 "arraymodule.c"
        __label__ = 15; break; //@line 835 "arraymodule.c"
      case 15: // $bb15
        var $97=HEAP[$iftmp_131]; //@line 835 "arraymodule.c"
        HEAP[$iftmp_130]=$97; //@line 835 "arraymodule.c"
        __label__ = 17; break; //@line 835 "arraymodule.c"
      case 16: // $bb16
        HEAP[$iftmp_130]=0; //@line 835 "arraymodule.c"
        __label__ = 17; break; //@line 835 "arraymodule.c"
      case 17: // $bb17
        var $98=HEAP[$self_addr]; //@line 835 "arraymodule.c"
        var $99=(($98+12)&4294967295); //@line 835 "arraymodule.c"
        var $100=HEAP[$iftmp_130]; //@line 835 "arraymodule.c"
        HEAP[$99]=$100; //@line 835 "arraymodule.c"
        var $101=HEAP[$self_addr]; //@line 836 "arraymodule.c"
        var $102=(($101+12)&4294967295); //@line 836 "arraymodule.c"
        var $103=HEAP[$102]; //@line 836 "arraymodule.c"
        var $104=($103)==0; //@line 836 "arraymodule.c"
        if ($104) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 836 "arraymodule.c"
      case 18: // $bb18
        var $105=HEAP[$self_addr]; //@line 837 "arraymodule.c"
        var $106=(($105+12)&4294967295); //@line 837 "arraymodule.c"
        var $107=HEAP[$old_item]; //@line 837 "arraymodule.c"
        HEAP[$106]=$107; //@line 837 "arraymodule.c"
        var $108=_PyErr_NoMemory(); //@line 838 "arraymodule.c"
        HEAP[$0]=-1; //@line 839 "arraymodule.c"
        __label__ = 20; break; //@line 839 "arraymodule.c"
      case 19: // $bb19
        var $109=HEAP[$bb_addr]; //@line 841 "arraymodule.c"
        var $110=$109; //@line 841 "arraymodule.c"
        var $111=(($110+8)&4294967295); //@line 841 "arraymodule.c"
        var $112=HEAP[$111]; //@line 841 "arraymodule.c"
        var $113=HEAP[$bb_addr]; //@line 841 "arraymodule.c"
        var $114=$113; //@line 841 "arraymodule.c"
        var $115=(($114+20)&4294967295); //@line 841 "arraymodule.c"
        var $116=HEAP[$115]; //@line 841 "arraymodule.c"
        var $117=(($116+4)&4294967295); //@line 841 "arraymodule.c"
        var $118=HEAP[$117]; //@line 841 "arraymodule.c"
        var $119=((($112) * ($118))&4294967295); //@line 841 "arraymodule.c"
        var $120=HEAP[$bb_addr]; //@line 841 "arraymodule.c"
        var $121=$120; //@line 841 "arraymodule.c"
        var $122=(($121+12)&4294967295); //@line 841 "arraymodule.c"
        var $123=HEAP[$122]; //@line 841 "arraymodule.c"
        var $124=HEAP[$self_addr]; //@line 841 "arraymodule.c"
        var $125=(($124+12)&4294967295); //@line 841 "arraymodule.c"
        var $126=HEAP[$125]; //@line 841 "arraymodule.c"
        var $127=HEAP[$self_addr]; //@line 841 "arraymodule.c"
        var $128=$127; //@line 841 "arraymodule.c"
        var $129=(($128+8)&4294967295); //@line 841 "arraymodule.c"
        var $130=HEAP[$129]; //@line 841 "arraymodule.c"
        var $131=HEAP[$self_addr]; //@line 841 "arraymodule.c"
        var $132=(($131+20)&4294967295); //@line 841 "arraymodule.c"
        var $133=HEAP[$132]; //@line 841 "arraymodule.c"
        var $134=(($133+4)&4294967295); //@line 841 "arraymodule.c"
        var $135=HEAP[$134]; //@line 841 "arraymodule.c"
        var $136=((($130) * ($135))&4294967295); //@line 841 "arraymodule.c"
        var $137=(($126+$136)&4294967295); //@line 841 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($137, $123, $119, 1, 0); //@line 841 "arraymodule.c"
        var $138=HEAP[$self_addr]; //@line 843 "arraymodule.c"
        var $139=$138; //@line 843 "arraymodule.c"
        var $140=(($139+8)&4294967295); //@line 843 "arraymodule.c"
        var $141=HEAP[$size]; //@line 843 "arraymodule.c"
        HEAP[$140]=$141; //@line 843 "arraymodule.c"
        var $142=HEAP[$self_addr]; //@line 844 "arraymodule.c"
        var $143=(($142+16)&4294967295); //@line 844 "arraymodule.c"
        var $144=HEAP[$size]; //@line 844 "arraymodule.c"
        HEAP[$143]=$144; //@line 844 "arraymodule.c"
        HEAP[$0]=0; //@line 846 "arraymodule.c"
        __label__ = 20; break; //@line 846 "arraymodule.c"
      case 20: // $bb20
        var $145=HEAP[$0]; //@line 821 "arraymodule.c"
        HEAP[$retval]=$145; //@line 821 "arraymodule.c"
        __label__ = 21; break; //@line 821 "arraymodule.c"
      case 21: // $return
        var $retval21=HEAP[$retval]; //@line 821 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 821 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_inplace_concat($self, $bb) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $bb_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$bb_addr]=$bb;
        var $1=HEAP[$bb_addr]; //@line 853 "arraymodule.c"
        var $2=(($1+4)&4294967295); //@line 853 "arraymodule.c"
        var $3=HEAP[$2]; //@line 853 "arraymodule.c"
        var $4=($3)!=(_Arraytype); //@line 853 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 853 "arraymodule.c"
      case 1: // $bb1
        var $5=HEAP[$bb_addr]; //@line 853 "arraymodule.c"
        var $6=(($5+4)&4294967295); //@line 853 "arraymodule.c"
        var $7=HEAP[$6]; //@line 853 "arraymodule.c"
        var $8=_PyType_IsSubtype($7, _Arraytype); //@line 853 "arraymodule.c"
        var $9=((($8))|0)==0; //@line 853 "arraymodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 853 "arraymodule.c"
      case 2: // $bb2
        var $10=HEAP[$bb_addr]; //@line 854 "arraymodule.c"
        var $11=(($10+4)&4294967295); //@line 854 "arraymodule.c"
        var $12=HEAP[$11]; //@line 854 "arraymodule.c"
        var $13=(($12+12)&4294967295); //@line 854 "arraymodule.c"
        var $14=HEAP[$13]; //@line 854 "arraymodule.c"
        var $15=HEAP[_PyExc_TypeError]; //@line 854 "arraymodule.c"
        var $16=_PyErr_Format($15, ((__str24)&4294967295), $14); //@line 854 "arraymodule.c"
        HEAP[$0]=0; //@line 857 "arraymodule.c"
        __label__ = 6; break; //@line 857 "arraymodule.c"
      case 3: // $bb3
        var $17=HEAP[$self_addr]; //@line 859 "arraymodule.c"
        var $18=HEAP[$bb_addr]; //@line 859 "arraymodule.c"
        var $19=_array_do_extend($17, $18); //@line 859 "arraymodule.c"
        var $20=((($19))|0)==-1; //@line 859 "arraymodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 859 "arraymodule.c"
      case 4: // $bb4
        HEAP[$0]=0; //@line 860 "arraymodule.c"
        __label__ = 6; break; //@line 860 "arraymodule.c"
      case 5: // $bb5
        var $21=HEAP[$self_addr]; //@line 861 "arraymodule.c"
        var $22=$21; //@line 861 "arraymodule.c"
        var $23=(($22)&4294967295); //@line 861 "arraymodule.c"
        var $24=HEAP[$23]; //@line 861 "arraymodule.c"
        var $25=((($24) + 1)&4294967295); //@line 861 "arraymodule.c"
        var $26=(($22)&4294967295); //@line 861 "arraymodule.c"
        HEAP[$26]=$25; //@line 861 "arraymodule.c"
        var $27=HEAP[$self_addr]; //@line 862 "arraymodule.c"
        var $28=$27; //@line 862 "arraymodule.c"
        HEAP[$0]=$28; //@line 862 "arraymodule.c"
        __label__ = 6; break; //@line 862 "arraymodule.c"
      case 6: // $bb6
        var $29=HEAP[$0]; //@line 857 "arraymodule.c"
        HEAP[$retval]=$29; //@line 857 "arraymodule.c"
        __label__ = 7; break; //@line 857 "arraymodule.c"
      case 7: // $return
        var $retval7=HEAP[$retval]; //@line 857 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 857 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_inplace_repeat($self, $n) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $n_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_146=__stackBase__+12;
        var $iftmp_145=__stackBase__+16;
        var $iftmp_144=__stackBase__+20;
        var $0=__stackBase__+24;
        var $items=__stackBase__+28;
        var $p=__stackBase__+32;
        var $size=__stackBase__+36;
        var $i=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$n_addr]=$n;
        var $1=HEAP[$self_addr]; //@line 871 "arraymodule.c"
        var $2=$1; //@line 871 "arraymodule.c"
        var $3=(($2+8)&4294967295); //@line 871 "arraymodule.c"
        var $4=HEAP[$3]; //@line 871 "arraymodule.c"
        var $5=((($4))|0) > 0; //@line 871 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 25; break; } //@line 871 "arraymodule.c"
      case 1: // $bb
        var $6=HEAP[$n_addr]; //@line 872 "arraymodule.c"
        var $7=((($6))|0) < 0; //@line 872 "arraymodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 872 "arraymodule.c"
      case 2: // $bb1
        HEAP[$n_addr]=0; //@line 873 "arraymodule.c"
        __label__ = 3; break; //@line 873 "arraymodule.c"
      case 3: // $bb2
        var $8=HEAP[$self_addr]; //@line 874 "arraymodule.c"
        var $9=(($8+12)&4294967295); //@line 874 "arraymodule.c"
        var $10=HEAP[$9]; //@line 874 "arraymodule.c"
        HEAP[$items]=$10; //@line 874 "arraymodule.c"
        var $11=HEAP[$self_addr]; //@line 875 "arraymodule.c"
        var $12=(($11+20)&4294967295); //@line 875 "arraymodule.c"
        var $13=HEAP[$12]; //@line 875 "arraymodule.c"
        var $14=(($13+4)&4294967295); //@line 875 "arraymodule.c"
        var $15=HEAP[$14]; //@line 875 "arraymodule.c"
        var $16=((($15))|0)!=0; //@line 875 "arraymodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 875 "arraymodule.c"
      case 4: // $bb3
        var $17=HEAP[$self_addr]; //@line 875 "arraymodule.c"
        var $18=$17; //@line 875 "arraymodule.c"
        var $19=(($18+8)&4294967295); //@line 875 "arraymodule.c"
        var $20=HEAP[$19]; //@line 875 "arraymodule.c"
        var $21=HEAP[$self_addr]; //@line 875 "arraymodule.c"
        var $22=(($21+20)&4294967295); //@line 875 "arraymodule.c"
        var $23=HEAP[$22]; //@line 875 "arraymodule.c"
        var $24=(($23+4)&4294967295); //@line 875 "arraymodule.c"
        var $25=HEAP[$24]; //@line 875 "arraymodule.c"
        var $26=((2147483647/((($25))|0))|0); //@line 875 "arraymodule.c"
        var $27=((($20))|0) > ((($26))|0); //@line 875 "arraymodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 875 "arraymodule.c"
      case 5: // $bb4
        var $28=_PyErr_NoMemory(); //@line 877 "arraymodule.c"
        HEAP[$0]=$28; //@line 877 "arraymodule.c"
        __label__ = 26; break; //@line 877 "arraymodule.c"
      case 6: // $bb5
        var $29=HEAP[$self_addr]; //@line 879 "arraymodule.c"
        var $30=$29; //@line 879 "arraymodule.c"
        var $31=(($30+8)&4294967295); //@line 879 "arraymodule.c"
        var $32=HEAP[$31]; //@line 879 "arraymodule.c"
        var $33=HEAP[$self_addr]; //@line 879 "arraymodule.c"
        var $34=(($33+20)&4294967295); //@line 879 "arraymodule.c"
        var $35=HEAP[$34]; //@line 879 "arraymodule.c"
        var $36=(($35+4)&4294967295); //@line 879 "arraymodule.c"
        var $37=HEAP[$36]; //@line 879 "arraymodule.c"
        var $38=((($32) * ($37))&4294967295); //@line 879 "arraymodule.c"
        HEAP[$size]=$38; //@line 879 "arraymodule.c"
        var $39=HEAP[$n_addr]; //@line 880 "arraymodule.c"
        var $40=((($39))|0)==0; //@line 880 "arraymodule.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 880 "arraymodule.c"
      case 7: // $bb6
        var $41=HEAP[$items]; //@line 881 "arraymodule.c"
        _free($41); //@line 881 "arraymodule.c"
        var $42=HEAP[$self_addr]; //@line 882 "arraymodule.c"
        var $43=(($42+12)&4294967295); //@line 882 "arraymodule.c"
        HEAP[$43]=0; //@line 882 "arraymodule.c"
        var $44=HEAP[$self_addr]; //@line 883 "arraymodule.c"
        var $45=$44; //@line 883 "arraymodule.c"
        var $46=(($45+8)&4294967295); //@line 883 "arraymodule.c"
        HEAP[$46]=0; //@line 883 "arraymodule.c"
        var $47=HEAP[$self_addr]; //@line 884 "arraymodule.c"
        var $48=(($47+16)&4294967295); //@line 884 "arraymodule.c"
        HEAP[$48]=0; //@line 884 "arraymodule.c"
        __label__ = 25; break; //@line 884 "arraymodule.c"
      case 8: // $bb7
        var $49=HEAP[$n_addr]; //@line 887 "arraymodule.c"
        var $50=((2147483647/((($49))|0))|0); //@line 887 "arraymodule.c"
        var $51=HEAP[$size]; //@line 887 "arraymodule.c"
        var $52=((($50))|0) < ((($51))|0); //@line 887 "arraymodule.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 887 "arraymodule.c"
      case 9: // $bb8
        var $53=_PyErr_NoMemory(); //@line 888 "arraymodule.c"
        HEAP[$0]=$53; //@line 888 "arraymodule.c"
        __label__ = 26; break; //@line 888 "arraymodule.c"
      case 10: // $bb9
        var $54=HEAP[$n_addr]; //@line 890 "arraymodule.c"
        var $55=HEAP[$size]; //@line 890 "arraymodule.c"
        var $56=((($54) * ($55))&4294967295); //@line 890 "arraymodule.c"
        var $57=((($56))|0) >= 0; //@line 890 "arraymodule.c"
        if ($57) { __label__ = 11; break; } else { __label__ = 18; break; } //@line 890 "arraymodule.c"
      case 11: // $bb10
        var $58=HEAP[$n_addr]; //@line 890 "arraymodule.c"
        var $59=HEAP[$size]; //@line 890 "arraymodule.c"
        var $60=((($58) * ($59))&4294967295); //@line 890 "arraymodule.c"
        var $61=((($60))|0) >= 0; //@line 890 "arraymodule.c"
        if ($61) { __label__ = 12; break; } else { __label__ = 16; break; } //@line 890 "arraymodule.c"
      case 12: // $bb11
        var $62=HEAP[$n_addr]; //@line 890 "arraymodule.c"
        var $63=HEAP[$size]; //@line 890 "arraymodule.c"
        var $64=((($62) * ($63))&4294967295); //@line 890 "arraymodule.c"
        var $65=((($64))|0)!=0; //@line 890 "arraymodule.c"
        if ($65) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 890 "arraymodule.c"
      case 13: // $bb12
        var $66=HEAP[$n_addr]; //@line 890 "arraymodule.c"
        var $67=HEAP[$size]; //@line 890 "arraymodule.c"
        var $68=((($66) * ($67))&4294967295); //@line 890 "arraymodule.c"
        HEAP[$iftmp_146]=$68; //@line 890 "arraymodule.c"
        __label__ = 15; break; //@line 890 "arraymodule.c"
      case 14: // $bb13
        HEAP[$iftmp_146]=1; //@line 890 "arraymodule.c"
        __label__ = 15; break; //@line 890 "arraymodule.c"
      case 15: // $bb14
        var $69=HEAP[$items]; //@line 890 "arraymodule.c"
        var $70=HEAP[$iftmp_146]; //@line 890 "arraymodule.c"
        var $71=_realloc($69, $70); //@line 890 "arraymodule.c"
        HEAP[$iftmp_145]=$71; //@line 890 "arraymodule.c"
        __label__ = 17; break; //@line 890 "arraymodule.c"
      case 16: // $bb15
        HEAP[$iftmp_145]=0; //@line 890 "arraymodule.c"
        __label__ = 17; break; //@line 890 "arraymodule.c"
      case 17: // $bb16
        var $72=HEAP[$iftmp_145]; //@line 890 "arraymodule.c"
        HEAP[$iftmp_144]=$72; //@line 890 "arraymodule.c"
        __label__ = 19; break; //@line 890 "arraymodule.c"
      case 18: // $bb17
        HEAP[$iftmp_144]=0; //@line 890 "arraymodule.c"
        __label__ = 19; break; //@line 890 "arraymodule.c"
      case 19: // $bb18
        var $73=HEAP[$iftmp_144]; //@line 890 "arraymodule.c"
        HEAP[$items]=$73; //@line 890 "arraymodule.c"
        var $74=HEAP[$items]; //@line 891 "arraymodule.c"
        var $75=($74)==0; //@line 891 "arraymodule.c"
        if ($75) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 891 "arraymodule.c"
      case 20: // $bb19
        var $76=_PyErr_NoMemory(); //@line 892 "arraymodule.c"
        HEAP[$0]=$76; //@line 892 "arraymodule.c"
        __label__ = 26; break; //@line 892 "arraymodule.c"
      case 21: // $bb20
        var $77=HEAP[$items]; //@line 893 "arraymodule.c"
        HEAP[$p]=$77; //@line 893 "arraymodule.c"
        HEAP[$i]=1; //@line 894 "arraymodule.c"
        __label__ = 23; break; //@line 894 "arraymodule.c"
      case 22: // $bb21
        var $78=HEAP[$p]; //@line 895 "arraymodule.c"
        var $79=HEAP[$size]; //@line 895 "arraymodule.c"
        var $80=(($78+$79)&4294967295); //@line 895 "arraymodule.c"
        HEAP[$p]=$80; //@line 895 "arraymodule.c"
        var $81=HEAP[$size]; //@line 896 "arraymodule.c"
        var $82=HEAP[$p]; //@line 896 "arraymodule.c"
        var $83=HEAP[$items]; //@line 896 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($82, $83, $81, 1, 0); //@line 896 "arraymodule.c"
        var $84=HEAP[$i]; //@line 894 "arraymodule.c"
        var $85=((($84) + 1)&4294967295); //@line 894 "arraymodule.c"
        HEAP[$i]=$85; //@line 894 "arraymodule.c"
        __label__ = 23; break; //@line 894 "arraymodule.c"
      case 23: // $bb22
        var $86=HEAP[$i]; //@line 894 "arraymodule.c"
        var $87=HEAP[$n_addr]; //@line 894 "arraymodule.c"
        var $88=((($86))|0) < ((($87))|0); //@line 894 "arraymodule.c"
        if ($88) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 894 "arraymodule.c"
      case 24: // $bb23
        var $89=HEAP[$self_addr]; //@line 898 "arraymodule.c"
        var $90=(($89+12)&4294967295); //@line 898 "arraymodule.c"
        var $91=HEAP[$items]; //@line 898 "arraymodule.c"
        HEAP[$90]=$91; //@line 898 "arraymodule.c"
        var $92=HEAP[$self_addr]; //@line 899 "arraymodule.c"
        var $93=$92; //@line 899 "arraymodule.c"
        var $94=HEAP[$self_addr]; //@line 899 "arraymodule.c"
        var $95=$94; //@line 899 "arraymodule.c"
        var $96=(($95+8)&4294967295); //@line 899 "arraymodule.c"
        var $97=HEAP[$96]; //@line 899 "arraymodule.c"
        var $98=HEAP[$n_addr]; //@line 899 "arraymodule.c"
        var $99=((($97) * ($98))&4294967295); //@line 899 "arraymodule.c"
        var $100=(($93+8)&4294967295); //@line 899 "arraymodule.c"
        HEAP[$100]=$99; //@line 899 "arraymodule.c"
        var $101=HEAP[$self_addr]; //@line 900 "arraymodule.c"
        var $102=$101; //@line 900 "arraymodule.c"
        var $103=(($102+8)&4294967295); //@line 900 "arraymodule.c"
        var $104=HEAP[$103]; //@line 900 "arraymodule.c"
        var $105=HEAP[$self_addr]; //@line 900 "arraymodule.c"
        var $106=(($105+16)&4294967295); //@line 900 "arraymodule.c"
        HEAP[$106]=$104; //@line 900 "arraymodule.c"
        __label__ = 25; break; //@line 900 "arraymodule.c"
      case 25: // $bb24
        var $107=HEAP[$self_addr]; //@line 903 "arraymodule.c"
        var $108=$107; //@line 903 "arraymodule.c"
        var $109=(($108)&4294967295); //@line 903 "arraymodule.c"
        var $110=HEAP[$109]; //@line 903 "arraymodule.c"
        var $111=((($110) + 1)&4294967295); //@line 903 "arraymodule.c"
        var $112=(($108)&4294967295); //@line 903 "arraymodule.c"
        HEAP[$112]=$111; //@line 903 "arraymodule.c"
        var $113=HEAP[$self_addr]; //@line 904 "arraymodule.c"
        var $114=$113; //@line 904 "arraymodule.c"
        HEAP[$0]=$114; //@line 904 "arraymodule.c"
        __label__ = 26; break; //@line 904 "arraymodule.c"
      case 26: // $bb25
        var $115=HEAP[$0]; //@line 877 "arraymodule.c"
        HEAP[$retval]=$115; //@line 877 "arraymodule.c"
        __label__ = 27; break; //@line 877 "arraymodule.c"
      case 27: // $return
        var $retval26=HEAP[$retval]; //@line 877 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 877 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ins($self, $where, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $where_addr=__stackBase__+4;
        var $v_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$where_addr]=$where;
        HEAP[$v_addr]=$v;
        var $1=HEAP[$self_addr]; //@line 911 "arraymodule.c"
        var $2=HEAP[$where_addr]; //@line 911 "arraymodule.c"
        var $3=HEAP[$v_addr]; //@line 911 "arraymodule.c"
        var $4=_ins1($1, $2, $3); //@line 911 "arraymodule.c"
        var $5=((($4))|0)!=0; //@line 911 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 911 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 912 "arraymodule.c"
        __label__ = 3; break; //@line 912 "arraymodule.c"
      case 2: // $bb1
        var $6=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 913 "arraymodule.c"
        var $7=((($6) + 1)&4294967295); //@line 913 "arraymodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$7; //@line 913 "arraymodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 914 "arraymodule.c"
        __label__ = 3; break; //@line 914 "arraymodule.c"
      case 3: // $bb2
        var $8=HEAP[$0]; //@line 912 "arraymodule.c"
        HEAP[$retval]=$8; //@line 912 "arraymodule.c"
        __label__ = 4; break; //@line 912 "arraymodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 912 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 912 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_count($self, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $v_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $count=__stackBase__+16;
        var $i=__stackBase__+20;
        var $selfi=__stackBase__+24;
        var $cmp=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$v_addr]=$v;
        HEAP[$count]=0; //@line 920 "arraymodule.c"
        HEAP[$i]=0; //@line 923 "arraymodule.c"
        __label__ = 8; break; //@line 923 "arraymodule.c"
      case 1: // $bb
        var $1=HEAP[$self_addr]; //@line 924 "arraymodule.c"
        var $2=$1; //@line 924 "arraymodule.c"
        var $3=HEAP[$i]; //@line 924 "arraymodule.c"
        var $4=_getarrayitem($2, $3); //@line 924 "arraymodule.c"
        HEAP[$selfi]=$4; //@line 924 "arraymodule.c"
        var $5=HEAP[$selfi]; //@line 925 "arraymodule.c"
        var $6=HEAP[$v_addr]; //@line 925 "arraymodule.c"
        var $7=_PyObject_RichCompareBool($5, $6, 2); //@line 925 "arraymodule.c"
        HEAP[$cmp]=$7; //@line 925 "arraymodule.c"
        var $8=HEAP[$selfi]; //@line 926 "arraymodule.c"
        var $9=(($8)&4294967295); //@line 926 "arraymodule.c"
        var $10=HEAP[$9]; //@line 926 "arraymodule.c"
        var $11=((($10) - 1)&4294967295); //@line 926 "arraymodule.c"
        var $12=HEAP[$selfi]; //@line 926 "arraymodule.c"
        var $13=(($12)&4294967295); //@line 926 "arraymodule.c"
        HEAP[$13]=$11; //@line 926 "arraymodule.c"
        var $14=HEAP[$selfi]; //@line 926 "arraymodule.c"
        var $15=(($14)&4294967295); //@line 926 "arraymodule.c"
        var $16=HEAP[$15]; //@line 926 "arraymodule.c"
        var $17=((($16))|0)==0; //@line 926 "arraymodule.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 926 "arraymodule.c"
      case 2: // $bb1
        var $18=HEAP[$selfi]; //@line 926 "arraymodule.c"
        var $19=(($18+4)&4294967295); //@line 926 "arraymodule.c"
        var $20=HEAP[$19]; //@line 926 "arraymodule.c"
        var $21=(($20+24)&4294967295); //@line 926 "arraymodule.c"
        var $22=HEAP[$21]; //@line 926 "arraymodule.c"
        var $23=HEAP[$selfi]; //@line 926 "arraymodule.c"
        FUNCTION_TABLE[$22]($23); //@line 926 "arraymodule.c"
        __label__ = 3; break; //@line 926 "arraymodule.c"
      case 3: // $bb2
        var $24=HEAP[$cmp]; //@line 927 "arraymodule.c"
        var $25=((($24))|0) > 0; //@line 927 "arraymodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 927 "arraymodule.c"
      case 4: // $bb3
        var $26=HEAP[$count]; //@line 928 "arraymodule.c"
        var $27=((($26) + 1)&4294967295); //@line 928 "arraymodule.c"
        HEAP[$count]=$27; //@line 928 "arraymodule.c"
        __label__ = 7; break; //@line 928 "arraymodule.c"
      case 5: // $bb4
        var $28=HEAP[$cmp]; //@line 929 "arraymodule.c"
        var $29=((($28))|0) < 0; //@line 929 "arraymodule.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 929 "arraymodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 930 "arraymodule.c"
        __label__ = 10; break; //@line 930 "arraymodule.c"
      case 7: // $bb6
        var $30=HEAP[$i]; //@line 923 "arraymodule.c"
        var $31=((($30) + 1)&4294967295); //@line 923 "arraymodule.c"
        HEAP[$i]=$31; //@line 923 "arraymodule.c"
        __label__ = 8; break; //@line 923 "arraymodule.c"
      case 8: // $bb7
        var $32=HEAP[$self_addr]; //@line 923 "arraymodule.c"
        var $33=$32; //@line 923 "arraymodule.c"
        var $34=(($33+8)&4294967295); //@line 923 "arraymodule.c"
        var $35=HEAP[$34]; //@line 923 "arraymodule.c"
        var $36=HEAP[$i]; //@line 923 "arraymodule.c"
        var $37=((($35))|0) > ((($36))|0); //@line 923 "arraymodule.c"
        if ($37) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 923 "arraymodule.c"
      case 9: // $bb8
        var $38=HEAP[$count]; //@line 932 "arraymodule.c"
        var $39=_PyInt_FromSsize_t($38); //@line 932 "arraymodule.c"
        HEAP[$0]=$39; //@line 932 "arraymodule.c"
        __label__ = 10; break; //@line 932 "arraymodule.c"
      case 10: // $bb9
        var $40=HEAP[$0]; //@line 930 "arraymodule.c"
        HEAP[$retval]=$40; //@line 930 "arraymodule.c"
        __label__ = 11; break; //@line 930 "arraymodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 930 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 930 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_index($self, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $v_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $selfi=__stackBase__+20;
        var $cmp=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$v_addr]=$v;
        HEAP[$i]=0; //@line 945 "arraymodule.c"
        __label__ = 8; break; //@line 945 "arraymodule.c"
      case 1: // $bb
        var $1=HEAP[$self_addr]; //@line 946 "arraymodule.c"
        var $2=$1; //@line 946 "arraymodule.c"
        var $3=HEAP[$i]; //@line 946 "arraymodule.c"
        var $4=_getarrayitem($2, $3); //@line 946 "arraymodule.c"
        HEAP[$selfi]=$4; //@line 946 "arraymodule.c"
        var $5=HEAP[$selfi]; //@line 947 "arraymodule.c"
        var $6=HEAP[$v_addr]; //@line 947 "arraymodule.c"
        var $7=_PyObject_RichCompareBool($5, $6, 2); //@line 947 "arraymodule.c"
        HEAP[$cmp]=$7; //@line 947 "arraymodule.c"
        var $8=HEAP[$selfi]; //@line 948 "arraymodule.c"
        var $9=(($8)&4294967295); //@line 948 "arraymodule.c"
        var $10=HEAP[$9]; //@line 948 "arraymodule.c"
        var $11=((($10) - 1)&4294967295); //@line 948 "arraymodule.c"
        var $12=HEAP[$selfi]; //@line 948 "arraymodule.c"
        var $13=(($12)&4294967295); //@line 948 "arraymodule.c"
        HEAP[$13]=$11; //@line 948 "arraymodule.c"
        var $14=HEAP[$selfi]; //@line 948 "arraymodule.c"
        var $15=(($14)&4294967295); //@line 948 "arraymodule.c"
        var $16=HEAP[$15]; //@line 948 "arraymodule.c"
        var $17=((($16))|0)==0; //@line 948 "arraymodule.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 948 "arraymodule.c"
      case 2: // $bb1
        var $18=HEAP[$selfi]; //@line 948 "arraymodule.c"
        var $19=(($18+4)&4294967295); //@line 948 "arraymodule.c"
        var $20=HEAP[$19]; //@line 948 "arraymodule.c"
        var $21=(($20+24)&4294967295); //@line 948 "arraymodule.c"
        var $22=HEAP[$21]; //@line 948 "arraymodule.c"
        var $23=HEAP[$selfi]; //@line 948 "arraymodule.c"
        FUNCTION_TABLE[$22]($23); //@line 948 "arraymodule.c"
        __label__ = 3; break; //@line 948 "arraymodule.c"
      case 3: // $bb2
        var $24=HEAP[$cmp]; //@line 949 "arraymodule.c"
        var $25=((($24))|0) > 0; //@line 949 "arraymodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 949 "arraymodule.c"
      case 4: // $bb3
        var $26=HEAP[$i]; //@line 950 "arraymodule.c"
        var $27=_PyInt_FromLong($26); //@line 950 "arraymodule.c"
        HEAP[$0]=$27; //@line 950 "arraymodule.c"
        __label__ = 10; break; //@line 950 "arraymodule.c"
      case 5: // $bb4
        var $28=HEAP[$cmp]; //@line 952 "arraymodule.c"
        var $29=((($28))|0) < 0; //@line 952 "arraymodule.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 952 "arraymodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 953 "arraymodule.c"
        __label__ = 10; break; //@line 953 "arraymodule.c"
      case 7: // $bb6
        var $30=HEAP[$i]; //@line 945 "arraymodule.c"
        var $31=((($30) + 1)&4294967295); //@line 945 "arraymodule.c"
        HEAP[$i]=$31; //@line 945 "arraymodule.c"
        __label__ = 8; break; //@line 945 "arraymodule.c"
      case 8: // $bb7
        var $32=HEAP[$self_addr]; //@line 945 "arraymodule.c"
        var $33=$32; //@line 945 "arraymodule.c"
        var $34=(($33+8)&4294967295); //@line 945 "arraymodule.c"
        var $35=HEAP[$34]; //@line 945 "arraymodule.c"
        var $36=HEAP[$i]; //@line 945 "arraymodule.c"
        var $37=((($35))|0) > ((($36))|0); //@line 945 "arraymodule.c"
        if ($37) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 945 "arraymodule.c"
      case 9: // $bb8
        var $38=HEAP[_PyExc_ValueError]; //@line 955 "arraymodule.c"
        _PyErr_SetString($38, ((__str25)&4294967295)); //@line 955 "arraymodule.c"
        HEAP[$0]=0; //@line 956 "arraymodule.c"
        __label__ = 10; break; //@line 956 "arraymodule.c"
      case 10: // $bb9
        var $39=HEAP[$0]; //@line 950 "arraymodule.c"
        HEAP[$retval]=$39; //@line 950 "arraymodule.c"
        __label__ = 11; break; //@line 950 "arraymodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 950 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 950 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_contains($self, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $v_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $cmp=__stackBase__+20;
        var $selfi=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$v_addr]=$v;
        HEAP[$i]=0; //@line 970 "arraymodule.c"
        HEAP[$cmp]=0; //@line 970 "arraymodule.c"
        __label__ = 4; break; //@line 970 "arraymodule.c"
      case 1: // $bb
        var $1=HEAP[$self_addr]; //@line 971 "arraymodule.c"
        var $2=$1; //@line 971 "arraymodule.c"
        var $3=HEAP[$i]; //@line 971 "arraymodule.c"
        var $4=_getarrayitem($2, $3); //@line 971 "arraymodule.c"
        HEAP[$selfi]=$4; //@line 971 "arraymodule.c"
        var $5=HEAP[$selfi]; //@line 972 "arraymodule.c"
        var $6=HEAP[$v_addr]; //@line 972 "arraymodule.c"
        var $7=_PyObject_RichCompareBool($5, $6, 2); //@line 972 "arraymodule.c"
        HEAP[$cmp]=$7; //@line 972 "arraymodule.c"
        var $8=HEAP[$selfi]; //@line 973 "arraymodule.c"
        var $9=(($8)&4294967295); //@line 973 "arraymodule.c"
        var $10=HEAP[$9]; //@line 973 "arraymodule.c"
        var $11=((($10) - 1)&4294967295); //@line 973 "arraymodule.c"
        var $12=HEAP[$selfi]; //@line 973 "arraymodule.c"
        var $13=(($12)&4294967295); //@line 973 "arraymodule.c"
        HEAP[$13]=$11; //@line 973 "arraymodule.c"
        var $14=HEAP[$selfi]; //@line 973 "arraymodule.c"
        var $15=(($14)&4294967295); //@line 973 "arraymodule.c"
        var $16=HEAP[$15]; //@line 973 "arraymodule.c"
        var $17=((($16))|0)==0; //@line 973 "arraymodule.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 973 "arraymodule.c"
      case 2: // $bb1
        var $18=HEAP[$selfi]; //@line 973 "arraymodule.c"
        var $19=(($18+4)&4294967295); //@line 973 "arraymodule.c"
        var $20=HEAP[$19]; //@line 973 "arraymodule.c"
        var $21=(($20+24)&4294967295); //@line 973 "arraymodule.c"
        var $22=HEAP[$21]; //@line 973 "arraymodule.c"
        var $23=HEAP[$selfi]; //@line 973 "arraymodule.c"
        FUNCTION_TABLE[$22]($23); //@line 973 "arraymodule.c"
        __label__ = 3; break; //@line 973 "arraymodule.c"
      case 3: // $bb2
        var $24=HEAP[$i]; //@line 970 "arraymodule.c"
        var $25=((($24) + 1)&4294967295); //@line 970 "arraymodule.c"
        HEAP[$i]=$25; //@line 970 "arraymodule.c"
        __label__ = 4; break; //@line 970 "arraymodule.c"
      case 4: // $bb3
        var $26=HEAP[$cmp]; //@line 970 "arraymodule.c"
        var $27=((($26))|0)!=0; //@line 970 "arraymodule.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 970 "arraymodule.c"
      case 5: // $bb4
        var $28=HEAP[$self_addr]; //@line 970 "arraymodule.c"
        var $29=$28; //@line 970 "arraymodule.c"
        var $30=(($29+8)&4294967295); //@line 970 "arraymodule.c"
        var $31=HEAP[$30]; //@line 970 "arraymodule.c"
        var $32=HEAP[$i]; //@line 970 "arraymodule.c"
        var $33=((($31))|0) > ((($32))|0); //@line 970 "arraymodule.c"
        if ($33) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 970 "arraymodule.c"
      case 6: // $bb5
        var $34=HEAP[$cmp]; //@line 975 "arraymodule.c"
        HEAP[$0]=$34; //@line 975 "arraymodule.c"
        var $35=HEAP[$0]; //@line 975 "arraymodule.c"
        HEAP[$retval]=$35; //@line 975 "arraymodule.c"
        __label__ = 7; break; //@line 975 "arraymodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 975 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 975 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_remove($self, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $v_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $selfi=__stackBase__+20;
        var $cmp=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$v_addr]=$v;
        HEAP[$i]=0; //@line 983 "arraymodule.c"
        __label__ = 10; break; //@line 983 "arraymodule.c"
      case 1: // $bb
        var $1=HEAP[$self_addr]; //@line 984 "arraymodule.c"
        var $2=$1; //@line 984 "arraymodule.c"
        var $3=HEAP[$i]; //@line 984 "arraymodule.c"
        var $4=_getarrayitem($2, $3); //@line 984 "arraymodule.c"
        HEAP[$selfi]=$4; //@line 984 "arraymodule.c"
        var $5=HEAP[$selfi]; //@line 985 "arraymodule.c"
        var $6=HEAP[$v_addr]; //@line 985 "arraymodule.c"
        var $7=_PyObject_RichCompareBool($5, $6, 2); //@line 985 "arraymodule.c"
        HEAP[$cmp]=$7; //@line 985 "arraymodule.c"
        var $8=HEAP[$selfi]; //@line 986 "arraymodule.c"
        var $9=(($8)&4294967295); //@line 986 "arraymodule.c"
        var $10=HEAP[$9]; //@line 986 "arraymodule.c"
        var $11=((($10) - 1)&4294967295); //@line 986 "arraymodule.c"
        var $12=HEAP[$selfi]; //@line 986 "arraymodule.c"
        var $13=(($12)&4294967295); //@line 986 "arraymodule.c"
        HEAP[$13]=$11; //@line 986 "arraymodule.c"
        var $14=HEAP[$selfi]; //@line 986 "arraymodule.c"
        var $15=(($14)&4294967295); //@line 986 "arraymodule.c"
        var $16=HEAP[$15]; //@line 986 "arraymodule.c"
        var $17=((($16))|0)==0; //@line 986 "arraymodule.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 986 "arraymodule.c"
      case 2: // $bb1
        var $18=HEAP[$selfi]; //@line 986 "arraymodule.c"
        var $19=(($18+4)&4294967295); //@line 986 "arraymodule.c"
        var $20=HEAP[$19]; //@line 986 "arraymodule.c"
        var $21=(($20+24)&4294967295); //@line 986 "arraymodule.c"
        var $22=HEAP[$21]; //@line 986 "arraymodule.c"
        var $23=HEAP[$selfi]; //@line 986 "arraymodule.c"
        FUNCTION_TABLE[$22]($23); //@line 986 "arraymodule.c"
        __label__ = 3; break; //@line 986 "arraymodule.c"
      case 3: // $bb2
        var $24=HEAP[$cmp]; //@line 987 "arraymodule.c"
        var $25=((($24))|0) > 0; //@line 987 "arraymodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 987 "arraymodule.c"
      case 4: // $bb3
        var $26=HEAP[$i]; //@line 988 "arraymodule.c"
        var $27=((($26) + 1)&4294967295); //@line 988 "arraymodule.c"
        var $28=HEAP[$self_addr]; //@line 988 "arraymodule.c"
        var $29=HEAP[$i]; //@line 988 "arraymodule.c"
        var $30=_array_ass_slice($28, $29, $27, 0); //@line 988 "arraymodule.c"
        var $31=((($30))|0)!=0; //@line 988 "arraymodule.c"
        if ($31) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 988 "arraymodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 990 "arraymodule.c"
        __label__ = 12; break; //@line 990 "arraymodule.c"
      case 6: // $bb5
        var $32=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 991 "arraymodule.c"
        var $33=((($32) + 1)&4294967295); //@line 991 "arraymodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$33; //@line 991 "arraymodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 992 "arraymodule.c"
        __label__ = 12; break; //@line 992 "arraymodule.c"
      case 7: // $bb6
        var $34=HEAP[$cmp]; //@line 994 "arraymodule.c"
        var $35=((($34))|0) < 0; //@line 994 "arraymodule.c"
        if ($35) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 994 "arraymodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 995 "arraymodule.c"
        __label__ = 12; break; //@line 995 "arraymodule.c"
      case 9: // $bb8
        var $36=HEAP[$i]; //@line 983 "arraymodule.c"
        var $37=((($36) + 1)&4294967295); //@line 983 "arraymodule.c"
        HEAP[$i]=$37; //@line 983 "arraymodule.c"
        __label__ = 10; break; //@line 983 "arraymodule.c"
      case 10: // $bb9
        var $38=HEAP[$self_addr]; //@line 983 "arraymodule.c"
        var $39=$38; //@line 983 "arraymodule.c"
        var $40=(($39+8)&4294967295); //@line 983 "arraymodule.c"
        var $41=HEAP[$40]; //@line 983 "arraymodule.c"
        var $42=HEAP[$i]; //@line 983 "arraymodule.c"
        var $43=((($41))|0) > ((($42))|0); //@line 983 "arraymodule.c"
        if ($43) { __label__ = 1; break; } else { __label__ = 11; break; } //@line 983 "arraymodule.c"
      case 11: // $bb10
        var $44=HEAP[_PyExc_ValueError]; //@line 997 "arraymodule.c"
        _PyErr_SetString($44, ((__str26)&4294967295)); //@line 997 "arraymodule.c"
        HEAP[$0]=0; //@line 998 "arraymodule.c"
        __label__ = 12; break; //@line 998 "arraymodule.c"
      case 12: // $bb11
        var $45=HEAP[$0]; //@line 990 "arraymodule.c"
        HEAP[$retval]=$45; //@line 990 "arraymodule.c"
        __label__ = 13; break; //@line 990 "arraymodule.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 990 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 990 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_pop($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $v=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$i]=-1; //@line 1009 "arraymodule.c"
        var $1=HEAP[$args_addr]; //@line 1011 "arraymodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str27)&4294967295), $i); //@line 1011 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 1011 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1011 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1012 "arraymodule.c"
        __label__ = 14; break; //@line 1012 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 1013 "arraymodule.c"
        var $5=$4; //@line 1013 "arraymodule.c"
        var $6=(($5+8)&4294967295); //@line 1013 "arraymodule.c"
        var $7=HEAP[$6]; //@line 1013 "arraymodule.c"
        var $8=((($7))|0)==0; //@line 1013 "arraymodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1013 "arraymodule.c"
      case 3: // $bb2
        var $9=HEAP[_PyExc_IndexError]; //@line 1015 "arraymodule.c"
        _PyErr_SetString($9, ((__str28)&4294967295)); //@line 1015 "arraymodule.c"
        HEAP[$0]=0; //@line 1016 "arraymodule.c"
        __label__ = 14; break; //@line 1016 "arraymodule.c"
      case 4: // $bb3
        var $10=HEAP[$i]; //@line 1018 "arraymodule.c"
        var $11=((($10))|0) < 0; //@line 1018 "arraymodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1018 "arraymodule.c"
      case 5: // $bb4
        var $12=HEAP[$self_addr]; //@line 1019 "arraymodule.c"
        var $13=$12; //@line 1019 "arraymodule.c"
        var $14=(($13+8)&4294967295); //@line 1019 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1019 "arraymodule.c"
        var $16=HEAP[$i]; //@line 1019 "arraymodule.c"
        var $17=((($15) + ($16))&4294967295); //@line 1019 "arraymodule.c"
        HEAP[$i]=$17; //@line 1019 "arraymodule.c"
        __label__ = 6; break; //@line 1019 "arraymodule.c"
      case 6: // $bb5
        var $18=HEAP[$i]; //@line 1020 "arraymodule.c"
        var $19=((($18))|0) < 0; //@line 1020 "arraymodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1020 "arraymodule.c"
      case 7: // $bb6
        var $20=HEAP[$self_addr]; //@line 1020 "arraymodule.c"
        var $21=$20; //@line 1020 "arraymodule.c"
        var $22=(($21+8)&4294967295); //@line 1020 "arraymodule.c"
        var $23=HEAP[$22]; //@line 1020 "arraymodule.c"
        var $24=HEAP[$i]; //@line 1020 "arraymodule.c"
        var $25=((($23))|0) <= ((($24))|0); //@line 1020 "arraymodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1020 "arraymodule.c"
      case 8: // $bb7
        var $26=HEAP[_PyExc_IndexError]; //@line 1021 "arraymodule.c"
        _PyErr_SetString($26, ((__str29)&4294967295)); //@line 1021 "arraymodule.c"
        HEAP[$0]=0; //@line 1022 "arraymodule.c"
        __label__ = 14; break; //@line 1022 "arraymodule.c"
      case 9: // $bb8
        var $27=HEAP[$i]; //@line 1024 "arraymodule.c"
        var $28=HEAP[$self_addr]; //@line 1024 "arraymodule.c"
        var $29=$28; //@line 1024 "arraymodule.c"
        var $30=_getarrayitem($29, $27); //@line 1024 "arraymodule.c"
        HEAP[$v]=$30; //@line 1024 "arraymodule.c"
        var $31=HEAP[$i]; //@line 1025 "arraymodule.c"
        var $32=((($31) + 1)&4294967295); //@line 1025 "arraymodule.c"
        var $33=HEAP[$i]; //@line 1025 "arraymodule.c"
        var $34=HEAP[$self_addr]; //@line 1025 "arraymodule.c"
        var $35=_array_ass_slice($34, $33, $32, 0); //@line 1025 "arraymodule.c"
        var $36=((($35))|0)!=0; //@line 1025 "arraymodule.c"
        if ($36) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 1025 "arraymodule.c"
      case 10: // $bb9
        var $37=HEAP[$v]; //@line 1026 "arraymodule.c"
        var $38=(($37)&4294967295); //@line 1026 "arraymodule.c"
        var $39=HEAP[$38]; //@line 1026 "arraymodule.c"
        var $40=((($39) - 1)&4294967295); //@line 1026 "arraymodule.c"
        var $41=HEAP[$v]; //@line 1026 "arraymodule.c"
        var $42=(($41)&4294967295); //@line 1026 "arraymodule.c"
        HEAP[$42]=$40; //@line 1026 "arraymodule.c"
        var $43=HEAP[$v]; //@line 1026 "arraymodule.c"
        var $44=(($43)&4294967295); //@line 1026 "arraymodule.c"
        var $45=HEAP[$44]; //@line 1026 "arraymodule.c"
        var $46=((($45))|0)==0; //@line 1026 "arraymodule.c"
        if ($46) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1026 "arraymodule.c"
      case 11: // $bb10
        var $47=HEAP[$v]; //@line 1026 "arraymodule.c"
        var $48=(($47+4)&4294967295); //@line 1026 "arraymodule.c"
        var $49=HEAP[$48]; //@line 1026 "arraymodule.c"
        var $50=(($49+24)&4294967295); //@line 1026 "arraymodule.c"
        var $51=HEAP[$50]; //@line 1026 "arraymodule.c"
        var $52=HEAP[$v]; //@line 1026 "arraymodule.c"
        FUNCTION_TABLE[$51]($52); //@line 1026 "arraymodule.c"
        __label__ = 12; break; //@line 1026 "arraymodule.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 1027 "arraymodule.c"
        __label__ = 14; break; //@line 1027 "arraymodule.c"
      case 13: // $bb12
        var $53=HEAP[$v]; //@line 1029 "arraymodule.c"
        HEAP[$0]=$53; //@line 1029 "arraymodule.c"
        __label__ = 14; break; //@line 1029 "arraymodule.c"
      case 14: // $bb13
        var $54=HEAP[$0]; //@line 1012 "arraymodule.c"
        HEAP[$retval]=$54; //@line 1012 "arraymodule.c"
        __label__ = 15; break; //@line 1012 "arraymodule.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 1012 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 1012 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_extend($self, $bb) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $bb_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$bb_addr]=$bb;
        var $1=HEAP[$self_addr]; //@line 1040 "arraymodule.c"
        var $2=HEAP[$bb_addr]; //@line 1040 "arraymodule.c"
        var $3=_array_do_extend($1, $2); //@line 1040 "arraymodule.c"
        var $4=((($3))|0)==-1; //@line 1040 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1040 "arraymodule.c"
      case 1: // $bb1
        HEAP[$0]=0; //@line 1041 "arraymodule.c"
        __label__ = 3; break; //@line 1041 "arraymodule.c"
      case 2: // $bb2
        var $5=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1042 "arraymodule.c"
        var $6=((($5) + 1)&4294967295); //@line 1042 "arraymodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$6; //@line 1042 "arraymodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1043 "arraymodule.c"
        __label__ = 3; break; //@line 1043 "arraymodule.c"
      case 3: // $bb3
        var $7=HEAP[$0]; //@line 1041 "arraymodule.c"
        HEAP[$retval]=$7; //@line 1041 "arraymodule.c"
        __label__ = 4; break; //@line 1041 "arraymodule.c"
      case 4: // $return
        var $retval4=HEAP[$retval]; //@line 1041 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 1041 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_insert($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $v=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1056 "arraymodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str30)&4294967295), $i, $v); //@line 1056 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 1056 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1056 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1057 "arraymodule.c"
        __label__ = 3; break; //@line 1057 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$v]; //@line 1058 "arraymodule.c"
        var $5=HEAP[$i]; //@line 1058 "arraymodule.c"
        var $6=HEAP[$self_addr]; //@line 1058 "arraymodule.c"
        var $7=_ins($6, $5, $4); //@line 1058 "arraymodule.c"
        HEAP[$0]=$7; //@line 1058 "arraymodule.c"
        __label__ = 3; break; //@line 1058 "arraymodule.c"
      case 3: // $bb2
        var $8=HEAP[$0]; //@line 1057 "arraymodule.c"
        HEAP[$retval]=$8; //@line 1057 "arraymodule.c"
        __label__ = 4; break; //@line 1057 "arraymodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1057 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1057 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_buffer_info($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $unused_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $retval1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$unused_addr]=$unused;
        HEAP[$retval1]=0; //@line 1070 "arraymodule.c"
        var $1=_PyTuple_New(2); //@line 1071 "arraymodule.c"
        HEAP[$retval1]=$1; //@line 1071 "arraymodule.c"
        var $2=HEAP[$retval1]; //@line 1072 "arraymodule.c"
        var $3=($2)==0; //@line 1072 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1072 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1073 "arraymodule.c"
        __label__ = 3; break; //@line 1073 "arraymodule.c"
      case 2: // $bb2
        var $4=HEAP[$retval1]; //@line 1075 "arraymodule.c"
        var $5=$4; //@line 1075 "arraymodule.c"
        var $6=HEAP[$self_addr]; //@line 1075 "arraymodule.c"
        var $7=(($6+12)&4294967295); //@line 1075 "arraymodule.c"
        var $8=HEAP[$7]; //@line 1075 "arraymodule.c"
        var $9=_PyLong_FromVoidPtr($8); //@line 1075 "arraymodule.c"
        var $10=(($5+12)&4294967295); //@line 1075 "arraymodule.c"
        var $11=(($10)&4294967295); //@line 1075 "arraymodule.c"
        HEAP[$11]=$9; //@line 1075 "arraymodule.c"
        var $12=HEAP[$retval1]; //@line 1076 "arraymodule.c"
        var $13=$12; //@line 1076 "arraymodule.c"
        var $14=HEAP[$self_addr]; //@line 1076 "arraymodule.c"
        var $15=$14; //@line 1076 "arraymodule.c"
        var $16=(($15+8)&4294967295); //@line 1076 "arraymodule.c"
        var $17=HEAP[$16]; //@line 1076 "arraymodule.c"
        var $18=_PyInt_FromLong($17); //@line 1076 "arraymodule.c"
        var $19=(($13+12)&4294967295); //@line 1076 "arraymodule.c"
        var $20=(($19+4)&4294967295); //@line 1076 "arraymodule.c"
        HEAP[$20]=$18; //@line 1076 "arraymodule.c"
        var $21=HEAP[$retval1]; //@line 1078 "arraymodule.c"
        HEAP[$0]=$21; //@line 1078 "arraymodule.c"
        __label__ = 3; break; //@line 1078 "arraymodule.c"
      case 3: // $bb3
        var $22=HEAP[$0]; //@line 1073 "arraymodule.c"
        HEAP[$retval]=$22; //@line 1073 "arraymodule.c"
        __label__ = 4; break; //@line 1073 "arraymodule.c"
      case 4: // $return
        var $retval4=HEAP[$retval]; //@line 1073 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 1073 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_append($self, $v) {
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
        var $1=HEAP[$self_addr]; //@line 1093 "arraymodule.c"
        var $2=$1; //@line 1093 "arraymodule.c"
        var $3=(($2+8)&4294967295); //@line 1093 "arraymodule.c"
        var $4=HEAP[$3]; //@line 1093 "arraymodule.c"
        var $5=HEAP[$self_addr]; //@line 1093 "arraymodule.c"
        var $6=HEAP[$v_addr]; //@line 1093 "arraymodule.c"
        var $7=_ins($5, $4, $6); //@line 1093 "arraymodule.c"
        HEAP[$0]=$7; //@line 1093 "arraymodule.c"
        var $8=HEAP[$0]; //@line 1093 "arraymodule.c"
        HEAP[$retval]=$8; //@line 1093 "arraymodule.c"
        __label__ = 1; break; //@line 1093 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1093 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1093 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_byteswap($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 31; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 31);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $unused_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $p=__stackBase__+16;
        var $i=__stackBase__+20;
        var $p0=__stackBase__+24;
        var $p07=__stackBase__+25;
        var $p1=__stackBase__+26;
        var $p012=__stackBase__+27;
        var $p113=__stackBase__+28;
        var $p2=__stackBase__+29;
        var $p3=__stackBase__+30;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$unused_addr]=$unused;
        var $1=HEAP[$self_addr]; //@line 1108 "arraymodule.c"
        var $2=(($1+20)&4294967295); //@line 1108 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1108 "arraymodule.c"
        var $4=(($3+4)&4294967295); //@line 1108 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1108 "arraymodule.c"
        if ($5 == 1) {
          __label__ = 1; break;
        }
        else if ($5 == 2) {
          __label__ = 2; break;
        }
        else if ($5 == 4) {
          __label__ = 6; break;
        }
        else if ($5 == 8) {
          __label__ = 10; break;
        }
        else {
        __label__ = 14; break;
        }
        
      case 1: // $bb
        __label__ = 15; break; //@line 1108 "arraymodule.c"
      case 2: // $bb1
        var $6=HEAP[$self_addr]; //@line 1112 "arraymodule.c"
        var $7=(($6+12)&4294967295); //@line 1112 "arraymodule.c"
        var $8=HEAP[$7]; //@line 1112 "arraymodule.c"
        HEAP[$p]=$8; //@line 1112 "arraymodule.c"
        var $9=HEAP[$self_addr]; //@line 1112 "arraymodule.c"
        var $10=$9; //@line 1112 "arraymodule.c"
        var $11=(($10+8)&4294967295); //@line 1112 "arraymodule.c"
        var $12=HEAP[$11]; //@line 1112 "arraymodule.c"
        HEAP[$i]=$12; //@line 1112 "arraymodule.c"
        __label__ = 4; break; //@line 1112 "arraymodule.c"
      case 3: // $bb2
        var $13=HEAP[$p]; //@line 1113 "arraymodule.c"
        var $14=(($13)&4294967295); //@line 1113 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1113 "arraymodule.c"
        HEAP[$p0]=$15; //@line 1113 "arraymodule.c"
        var $16=HEAP[$p]; //@line 1114 "arraymodule.c"
        var $17=(($16+1)&4294967295); //@line 1114 "arraymodule.c"
        var $18=HEAP[$17]; //@line 1114 "arraymodule.c"
        var $19=HEAP[$p]; //@line 1114 "arraymodule.c"
        var $20=(($19)&4294967295); //@line 1114 "arraymodule.c"
        HEAP[$20]=$18; //@line 1114 "arraymodule.c"
        var $21=HEAP[$p]; //@line 1115 "arraymodule.c"
        var $22=(($21+1)&4294967295); //@line 1115 "arraymodule.c"
        var $23=HEAP[$p0]; //@line 1115 "arraymodule.c"
        HEAP[$22]=$23; //@line 1115 "arraymodule.c"
        var $24=HEAP[$p]; //@line 1112 "arraymodule.c"
        var $25=(($24+2)&4294967295); //@line 1112 "arraymodule.c"
        HEAP[$p]=$25; //@line 1112 "arraymodule.c"
        __label__ = 4; break; //@line 1112 "arraymodule.c"
      case 4: // $bb3
        var $26=HEAP[$i]; //@line 1112 "arraymodule.c"
        var $27=((($26) - 1)&4294967295); //@line 1112 "arraymodule.c"
        HEAP[$i]=$27; //@line 1112 "arraymodule.c"
        var $28=HEAP[$i]; //@line 1112 "arraymodule.c"
        var $29=((($28))|0) >= 0; //@line 1112 "arraymodule.c"
        if ($29) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1112 "arraymodule.c"
      case 5: // $bb4
        __label__ = 15; break; //@line 1112 "arraymodule.c"
      case 6: // $bb5
        var $30=HEAP[$self_addr]; //@line 1119 "arraymodule.c"
        var $31=(($30+12)&4294967295); //@line 1119 "arraymodule.c"
        var $32=HEAP[$31]; //@line 1119 "arraymodule.c"
        HEAP[$p]=$32; //@line 1119 "arraymodule.c"
        var $33=HEAP[$self_addr]; //@line 1119 "arraymodule.c"
        var $34=$33; //@line 1119 "arraymodule.c"
        var $35=(($34+8)&4294967295); //@line 1119 "arraymodule.c"
        var $36=HEAP[$35]; //@line 1119 "arraymodule.c"
        HEAP[$i]=$36; //@line 1119 "arraymodule.c"
        __label__ = 8; break; //@line 1119 "arraymodule.c"
      case 7: // $bb6
        var $37=HEAP[$p]; //@line 1120 "arraymodule.c"
        var $38=(($37)&4294967295); //@line 1120 "arraymodule.c"
        var $39=HEAP[$38]; //@line 1120 "arraymodule.c"
        HEAP[$p07]=$39; //@line 1120 "arraymodule.c"
        var $40=HEAP[$p]; //@line 1121 "arraymodule.c"
        var $41=(($40+1)&4294967295); //@line 1121 "arraymodule.c"
        var $42=HEAP[$41]; //@line 1121 "arraymodule.c"
        HEAP[$p1]=$42; //@line 1121 "arraymodule.c"
        var $43=HEAP[$p]; //@line 1122 "arraymodule.c"
        var $44=(($43+3)&4294967295); //@line 1122 "arraymodule.c"
        var $45=HEAP[$44]; //@line 1122 "arraymodule.c"
        var $46=HEAP[$p]; //@line 1122 "arraymodule.c"
        var $47=(($46)&4294967295); //@line 1122 "arraymodule.c"
        HEAP[$47]=$45; //@line 1122 "arraymodule.c"
        var $48=HEAP[$p]; //@line 1123 "arraymodule.c"
        var $49=(($48+2)&4294967295); //@line 1123 "arraymodule.c"
        var $50=HEAP[$49]; //@line 1123 "arraymodule.c"
        var $51=HEAP[$p]; //@line 1123 "arraymodule.c"
        var $52=(($51+1)&4294967295); //@line 1123 "arraymodule.c"
        HEAP[$52]=$50; //@line 1123 "arraymodule.c"
        var $53=HEAP[$p]; //@line 1124 "arraymodule.c"
        var $54=(($53+2)&4294967295); //@line 1124 "arraymodule.c"
        var $55=HEAP[$p1]; //@line 1124 "arraymodule.c"
        HEAP[$54]=$55; //@line 1124 "arraymodule.c"
        var $56=HEAP[$p]; //@line 1125 "arraymodule.c"
        var $57=(($56+3)&4294967295); //@line 1125 "arraymodule.c"
        var $58=HEAP[$p07]; //@line 1125 "arraymodule.c"
        HEAP[$57]=$58; //@line 1125 "arraymodule.c"
        var $59=HEAP[$p]; //@line 1119 "arraymodule.c"
        var $60=(($59+4)&4294967295); //@line 1119 "arraymodule.c"
        HEAP[$p]=$60; //@line 1119 "arraymodule.c"
        __label__ = 8; break; //@line 1119 "arraymodule.c"
      case 8: // $bb8
        var $61=HEAP[$i]; //@line 1119 "arraymodule.c"
        var $62=((($61) - 1)&4294967295); //@line 1119 "arraymodule.c"
        HEAP[$i]=$62; //@line 1119 "arraymodule.c"
        var $63=HEAP[$i]; //@line 1119 "arraymodule.c"
        var $64=((($63))|0) >= 0; //@line 1119 "arraymodule.c"
        if ($64) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1119 "arraymodule.c"
      case 9: // $bb9
        __label__ = 15; break; //@line 1119 "arraymodule.c"
      case 10: // $bb10
        var $65=HEAP[$self_addr]; //@line 1129 "arraymodule.c"
        var $66=(($65+12)&4294967295); //@line 1129 "arraymodule.c"
        var $67=HEAP[$66]; //@line 1129 "arraymodule.c"
        HEAP[$p]=$67; //@line 1129 "arraymodule.c"
        var $68=HEAP[$self_addr]; //@line 1129 "arraymodule.c"
        var $69=$68; //@line 1129 "arraymodule.c"
        var $70=(($69+8)&4294967295); //@line 1129 "arraymodule.c"
        var $71=HEAP[$70]; //@line 1129 "arraymodule.c"
        HEAP[$i]=$71; //@line 1129 "arraymodule.c"
        __label__ = 12; break; //@line 1129 "arraymodule.c"
      case 11: // $bb11
        var $72=HEAP[$p]; //@line 1130 "arraymodule.c"
        var $73=(($72)&4294967295); //@line 1130 "arraymodule.c"
        var $74=HEAP[$73]; //@line 1130 "arraymodule.c"
        HEAP[$p012]=$74; //@line 1130 "arraymodule.c"
        var $75=HEAP[$p]; //@line 1131 "arraymodule.c"
        var $76=(($75+1)&4294967295); //@line 1131 "arraymodule.c"
        var $77=HEAP[$76]; //@line 1131 "arraymodule.c"
        HEAP[$p113]=$77; //@line 1131 "arraymodule.c"
        var $78=HEAP[$p]; //@line 1132 "arraymodule.c"
        var $79=(($78+2)&4294967295); //@line 1132 "arraymodule.c"
        var $80=HEAP[$79]; //@line 1132 "arraymodule.c"
        HEAP[$p2]=$80; //@line 1132 "arraymodule.c"
        var $81=HEAP[$p]; //@line 1133 "arraymodule.c"
        var $82=(($81+3)&4294967295); //@line 1133 "arraymodule.c"
        var $83=HEAP[$82]; //@line 1133 "arraymodule.c"
        HEAP[$p3]=$83; //@line 1133 "arraymodule.c"
        var $84=HEAP[$p]; //@line 1134 "arraymodule.c"
        var $85=(($84+7)&4294967295); //@line 1134 "arraymodule.c"
        var $86=HEAP[$85]; //@line 1134 "arraymodule.c"
        var $87=HEAP[$p]; //@line 1134 "arraymodule.c"
        var $88=(($87)&4294967295); //@line 1134 "arraymodule.c"
        HEAP[$88]=$86; //@line 1134 "arraymodule.c"
        var $89=HEAP[$p]; //@line 1135 "arraymodule.c"
        var $90=(($89+6)&4294967295); //@line 1135 "arraymodule.c"
        var $91=HEAP[$90]; //@line 1135 "arraymodule.c"
        var $92=HEAP[$p]; //@line 1135 "arraymodule.c"
        var $93=(($92+1)&4294967295); //@line 1135 "arraymodule.c"
        HEAP[$93]=$91; //@line 1135 "arraymodule.c"
        var $94=HEAP[$p]; //@line 1136 "arraymodule.c"
        var $95=(($94+5)&4294967295); //@line 1136 "arraymodule.c"
        var $96=HEAP[$95]; //@line 1136 "arraymodule.c"
        var $97=HEAP[$p]; //@line 1136 "arraymodule.c"
        var $98=(($97+2)&4294967295); //@line 1136 "arraymodule.c"
        HEAP[$98]=$96; //@line 1136 "arraymodule.c"
        var $99=HEAP[$p]; //@line 1137 "arraymodule.c"
        var $100=(($99+4)&4294967295); //@line 1137 "arraymodule.c"
        var $101=HEAP[$100]; //@line 1137 "arraymodule.c"
        var $102=HEAP[$p]; //@line 1137 "arraymodule.c"
        var $103=(($102+3)&4294967295); //@line 1137 "arraymodule.c"
        HEAP[$103]=$101; //@line 1137 "arraymodule.c"
        var $104=HEAP[$p]; //@line 1138 "arraymodule.c"
        var $105=(($104+4)&4294967295); //@line 1138 "arraymodule.c"
        var $106=HEAP[$p3]; //@line 1138 "arraymodule.c"
        HEAP[$105]=$106; //@line 1138 "arraymodule.c"
        var $107=HEAP[$p]; //@line 1139 "arraymodule.c"
        var $108=(($107+5)&4294967295); //@line 1139 "arraymodule.c"
        var $109=HEAP[$p2]; //@line 1139 "arraymodule.c"
        HEAP[$108]=$109; //@line 1139 "arraymodule.c"
        var $110=HEAP[$p]; //@line 1140 "arraymodule.c"
        var $111=(($110+6)&4294967295); //@line 1140 "arraymodule.c"
        var $112=HEAP[$p113]; //@line 1140 "arraymodule.c"
        HEAP[$111]=$112; //@line 1140 "arraymodule.c"
        var $113=HEAP[$p]; //@line 1141 "arraymodule.c"
        var $114=(($113+7)&4294967295); //@line 1141 "arraymodule.c"
        var $115=HEAP[$p012]; //@line 1141 "arraymodule.c"
        HEAP[$114]=$115; //@line 1141 "arraymodule.c"
        var $116=HEAP[$p]; //@line 1129 "arraymodule.c"
        var $117=(($116+8)&4294967295); //@line 1129 "arraymodule.c"
        HEAP[$p]=$117; //@line 1129 "arraymodule.c"
        __label__ = 12; break; //@line 1129 "arraymodule.c"
      case 12: // $bb14
        var $118=HEAP[$i]; //@line 1129 "arraymodule.c"
        var $119=((($118) - 1)&4294967295); //@line 1129 "arraymodule.c"
        HEAP[$i]=$119; //@line 1129 "arraymodule.c"
        var $120=HEAP[$i]; //@line 1129 "arraymodule.c"
        var $121=((($120))|0) >= 0; //@line 1129 "arraymodule.c"
        if ($121) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 1129 "arraymodule.c"
      case 13: // $bb15
        __label__ = 15; break; //@line 1129 "arraymodule.c"
      case 14: // $bb16
        var $122=HEAP[_PyExc_RuntimeError]; //@line 1145 "arraymodule.c"
        _PyErr_SetString($122, ((__str31)&4294967295)); //@line 1145 "arraymodule.c"
        HEAP[$0]=0; //@line 1147 "arraymodule.c"
        __label__ = 16; break; //@line 1147 "arraymodule.c"
      case 15: // $bb17
        var $123=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1149 "arraymodule.c"
        var $124=((($123) + 1)&4294967295); //@line 1149 "arraymodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$124; //@line 1149 "arraymodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1150 "arraymodule.c"
        __label__ = 16; break; //@line 1150 "arraymodule.c"
      case 16: // $bb18
        var $125=HEAP[$0]; //@line 1147 "arraymodule.c"
        HEAP[$retval]=$125; //@line 1147 "arraymodule.c"
        __label__ = 17; break; //@line 1147 "arraymodule.c"
      case 17: // $return
        var $retval19=HEAP[$retval]; //@line 1147 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1147 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_reverse($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 284; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 284);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $unused_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $itemsize=__stackBase__+16;
        var $p=__stackBase__+20;
        var $q=__stackBase__+24;
        var $tmp=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$unused_addr]=$unused;
        var $1=HEAP[$self_addr]; //@line 1162 "arraymodule.c"
        var $2=(($1+20)&4294967295); //@line 1162 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1162 "arraymodule.c"
        var $4=(($3+4)&4294967295); //@line 1162 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1162 "arraymodule.c"
        HEAP[$itemsize]=$5; //@line 1162 "arraymodule.c"
        var $6=HEAP[$itemsize]; //@line 1166 "arraymodule.c"
        var $7=((($6))>>>0) > 256; //@line 1166 "arraymodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1166 "arraymodule.c"
      case 1: // $bb
        ___assert_fail(((__str32)&4294967295), ((__str15)&4294967295), 1166, ((___PRETTY_FUNCTION___10009)&4294967295)); //@line 1166 "arraymodule.c"
        throw "Reached an unreachable! Original .ll line: 5670"; //@line 1166 "arraymodule.c"
      case 2: // $bb1
        var $8=HEAP[$self_addr]; //@line 1168 "arraymodule.c"
        var $9=$8; //@line 1168 "arraymodule.c"
        var $10=(($9+8)&4294967295); //@line 1168 "arraymodule.c"
        var $11=HEAP[$10]; //@line 1168 "arraymodule.c"
        var $12=((($11))|0) > 1; //@line 1168 "arraymodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1168 "arraymodule.c"
      case 3: // $bb2
        var $13=HEAP[$self_addr]; //@line 1170 "arraymodule.c"
        var $14=(($13+12)&4294967295); //@line 1170 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1170 "arraymodule.c"
        HEAP[$p]=$15; //@line 1170 "arraymodule.c"
        var $16=HEAP[$self_addr]; //@line 1170 "arraymodule.c"
        var $17=(($16+12)&4294967295); //@line 1170 "arraymodule.c"
        var $18=HEAP[$17]; //@line 1170 "arraymodule.c"
        var $19=HEAP[$self_addr]; //@line 1170 "arraymodule.c"
        var $20=$19; //@line 1170 "arraymodule.c"
        var $21=(($20+8)&4294967295); //@line 1170 "arraymodule.c"
        var $22=HEAP[$21]; //@line 1170 "arraymodule.c"
        var $23=((($22) - 1)&4294967295); //@line 1170 "arraymodule.c"
        var $24=HEAP[$itemsize]; //@line 1170 "arraymodule.c"
        var $25=((($23) * ($24))&4294967295); //@line 1170 "arraymodule.c"
        var $26=(($18+$25)&4294967295); //@line 1170 "arraymodule.c"
        HEAP[$q]=$26; //@line 1170 "arraymodule.c"
        __label__ = 5; break; //@line 1170 "arraymodule.c"
      case 4: // $bb3
        var $27=HEAP[$itemsize]; //@line 1176 "arraymodule.c"
        var $tmp4=$tmp; //@line 1176 "arraymodule.c"
        var $28=HEAP[$p]; //@line 1176 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($tmp4, $28, $27, 1, 0); //@line 1176 "arraymodule.c"
        var $29=HEAP[$itemsize]; //@line 1177 "arraymodule.c"
        var $30=HEAP[$p]; //@line 1177 "arraymodule.c"
        var $31=HEAP[$q]; //@line 1177 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($30, $31, $29, 1, 0); //@line 1177 "arraymodule.c"
        var $32=HEAP[$itemsize]; //@line 1178 "arraymodule.c"
        var $33=HEAP[$q]; //@line 1178 "arraymodule.c"
        var $tmp5=$tmp; //@line 1178 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($33, $tmp5, $32, 1, 0); //@line 1178 "arraymodule.c"
        var $34=HEAP[$p]; //@line 1172 "arraymodule.c"
        var $35=HEAP[$itemsize]; //@line 1172 "arraymodule.c"
        var $36=(($34+$35)&4294967295); //@line 1172 "arraymodule.c"
        HEAP[$p]=$36; //@line 1172 "arraymodule.c"
        var $37=HEAP[$itemsize]; //@line 1172 "arraymodule.c"
        var $38=((0 - ($37))&4294967295); //@line 1172 "arraymodule.c"
        var $39=HEAP[$q]; //@line 1172 "arraymodule.c"
        var $40=(($39+$38)&4294967295); //@line 1172 "arraymodule.c"
        HEAP[$q]=$40; //@line 1172 "arraymodule.c"
        __label__ = 5; break; //@line 1172 "arraymodule.c"
      case 5: // $bb6
        var $41=HEAP[$p]; //@line 1171 "arraymodule.c"
        var $42=HEAP[$q]; //@line 1171 "arraymodule.c"
        var $43=($41) < ($42); //@line 1171 "arraymodule.c"
        if ($43) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1171 "arraymodule.c"
      case 6: // $bb7
        var $44=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1182 "arraymodule.c"
        var $45=((($44) + 1)&4294967295); //@line 1182 "arraymodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$45; //@line 1182 "arraymodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1183 "arraymodule.c"
        var $46=HEAP[$0]; //@line 1183 "arraymodule.c"
        HEAP[$retval]=$46; //@line 1183 "arraymodule.c"
        __label__ = 7; break; //@line 1183 "arraymodule.c"
      case 7: // $return
        var $retval8=HEAP[$retval]; //@line 1183 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1183 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_fromfile($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 72; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_222=__stackBase__+12;
        var $iftmp_220=__stackBase__+16;
        var $iftmp_218=__stackBase__+20;
        var $iftmp_202=__stackBase__+24;
        var $iftmp_200=__stackBase__+28;
        var $iftmp_198=__stackBase__+32;
        var $0=__stackBase__+36;
        var $f=__stackBase__+40;
        var $n=__stackBase__+44;
        var $fp=__stackBase__+48;
        var $item=__stackBase__+52;
        var $itemsize=__stackBase__+56;
        var $nread=__stackBase__+60;
        var $newlength=__stackBase__+64;
        var $newbytes=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1197 "arraymodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str33)&4294967295), $f, $n); //@line 1197 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 1197 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1197 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1198 "arraymodule.c"
        __label__ = 33; break; //@line 1198 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$f]; //@line 1199 "arraymodule.c"
        var $5=_PyFile_AsFile($4); //@line 1199 "arraymodule.c"
        HEAP[$fp]=$5; //@line 1199 "arraymodule.c"
        var $6=HEAP[$fp]; //@line 1200 "arraymodule.c"
        var $7=($6)==0; //@line 1200 "arraymodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1200 "arraymodule.c"
      case 3: // $bb2
        var $8=HEAP[_PyExc_TypeError]; //@line 1201 "arraymodule.c"
        _PyErr_SetString($8, ((__str34)&4294967295)); //@line 1201 "arraymodule.c"
        HEAP[$0]=0; //@line 1202 "arraymodule.c"
        __label__ = 33; break; //@line 1202 "arraymodule.c"
      case 4: // $bb3
        var $9=HEAP[$n]; //@line 1204 "arraymodule.c"
        var $10=((($9))|0) > 0; //@line 1204 "arraymodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 32; break; } //@line 1204 "arraymodule.c"
      case 5: // $bb4
        var $11=HEAP[$self_addr]; //@line 1205 "arraymodule.c"
        var $12=(($11+12)&4294967295); //@line 1205 "arraymodule.c"
        var $13=HEAP[$12]; //@line 1205 "arraymodule.c"
        HEAP[$item]=$13; //@line 1205 "arraymodule.c"
        var $14=HEAP[$self_addr]; //@line 1206 "arraymodule.c"
        var $15=(($14+20)&4294967295); //@line 1206 "arraymodule.c"
        var $16=HEAP[$15]; //@line 1206 "arraymodule.c"
        var $17=(($16+4)&4294967295); //@line 1206 "arraymodule.c"
        var $18=HEAP[$17]; //@line 1206 "arraymodule.c"
        HEAP[$itemsize]=$18; //@line 1206 "arraymodule.c"
        var $19=HEAP[$self_addr]; //@line 1211 "arraymodule.c"
        var $20=$19; //@line 1211 "arraymodule.c"
        var $21=(($20+8)&4294967295); //@line 1211 "arraymodule.c"
        var $22=HEAP[$21]; //@line 1211 "arraymodule.c"
        var $23=HEAP[$n]; //@line 1211 "arraymodule.c"
        var $24=((($22) + ($23))&4294967295); //@line 1211 "arraymodule.c"
        HEAP[$newlength]=$24; //@line 1211 "arraymodule.c"
        var $25=HEAP[$newlength]; //@line 1211 "arraymodule.c"
        var $26=((($25))|0) <= 0; //@line 1211 "arraymodule.c"
        if ($26) { __label__ = 17; break; } else { __label__ = 6; break; } //@line 1211 "arraymodule.c"
      case 6: // $bb5
        var $27=HEAP[$newlength]; //@line 1211 "arraymodule.c"
        var $28=HEAP[$itemsize]; //@line 1211 "arraymodule.c"
        var $29=((($27) * ($28))&4294967295); //@line 1211 "arraymodule.c"
        HEAP[$newbytes]=$29; //@line 1211 "arraymodule.c"
        var $30=HEAP[$itemsize]; //@line 1211 "arraymodule.c"
        var $31=HEAP[$newbytes]; //@line 1211 "arraymodule.c"
        var $32=Math.floor(((($31))>>>0)/((($30))>>>0)); //@line 1211 "arraymodule.c"
        var $33=HEAP[$newlength]; //@line 1211 "arraymodule.c"
        var $34=((($32))|0)!=((($33))|0); //@line 1211 "arraymodule.c"
        if ($34) { __label__ = 17; break; } else { __label__ = 7; break; } //@line 1211 "arraymodule.c"
      case 7: // $bb6
        var $35=HEAP[$newbytes]; //@line 1215 "arraymodule.c"
        var $36=((($35))|0) >= 0; //@line 1215 "arraymodule.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 15; break; } //@line 1215 "arraymodule.c"
      case 8: // $bb7
        var $37=HEAP[$newbytes]; //@line 1215 "arraymodule.c"
        var $38=((($37))|0) >= 0; //@line 1215 "arraymodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 1215 "arraymodule.c"
      case 9: // $bb8
        var $39=HEAP[$newbytes]; //@line 1215 "arraymodule.c"
        var $40=((($39))|0)!=0; //@line 1215 "arraymodule.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1215 "arraymodule.c"
      case 10: // $bb9
        var $41=HEAP[$newbytes]; //@line 1215 "arraymodule.c"
        HEAP[$iftmp_202]=$41; //@line 1215 "arraymodule.c"
        __label__ = 12; break; //@line 1215 "arraymodule.c"
      case 11: // $bb10
        HEAP[$iftmp_202]=1; //@line 1215 "arraymodule.c"
        __label__ = 12; break; //@line 1215 "arraymodule.c"
      case 12: // $bb11
        var $42=HEAP[$item]; //@line 1215 "arraymodule.c"
        var $43=HEAP[$iftmp_202]; //@line 1215 "arraymodule.c"
        var $44=_realloc($42, $43); //@line 1215 "arraymodule.c"
        HEAP[$iftmp_200]=$44; //@line 1215 "arraymodule.c"
        __label__ = 14; break; //@line 1215 "arraymodule.c"
      case 13: // $bb12
        HEAP[$iftmp_200]=0; //@line 1215 "arraymodule.c"
        __label__ = 14; break; //@line 1215 "arraymodule.c"
      case 14: // $bb13
        var $45=HEAP[$iftmp_200]; //@line 1215 "arraymodule.c"
        HEAP[$iftmp_198]=$45; //@line 1215 "arraymodule.c"
        __label__ = 16; break; //@line 1215 "arraymodule.c"
      case 15: // $bb14
        HEAP[$iftmp_198]=0; //@line 1215 "arraymodule.c"
        __label__ = 16; break; //@line 1215 "arraymodule.c"
      case 16: // $bb15
        var $46=HEAP[$iftmp_198]; //@line 1215 "arraymodule.c"
        HEAP[$item]=$46; //@line 1215 "arraymodule.c"
        var $47=HEAP[$item]; //@line 1216 "arraymodule.c"
        var $48=($47)==0; //@line 1216 "arraymodule.c"
        if ($48) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1216 "arraymodule.c"
      case 17: // $nomem
        var $49=_PyErr_NoMemory(); //@line 1218 "arraymodule.c"
        HEAP[$0]=0; //@line 1219 "arraymodule.c"
        __label__ = 33; break; //@line 1219 "arraymodule.c"
      case 18: // $bb16
        var $50=HEAP[$self_addr]; //@line 1221 "arraymodule.c"
        var $51=(($50+12)&4294967295); //@line 1221 "arraymodule.c"
        var $52=HEAP[$item]; //@line 1221 "arraymodule.c"
        HEAP[$51]=$52; //@line 1221 "arraymodule.c"
        var $53=HEAP[$self_addr]; //@line 1222 "arraymodule.c"
        var $54=$53; //@line 1222 "arraymodule.c"
        var $55=HEAP[$self_addr]; //@line 1222 "arraymodule.c"
        var $56=$55; //@line 1222 "arraymodule.c"
        var $57=(($56+8)&4294967295); //@line 1222 "arraymodule.c"
        var $58=HEAP[$57]; //@line 1222 "arraymodule.c"
        var $59=HEAP[$n]; //@line 1222 "arraymodule.c"
        var $60=((($58) + ($59))&4294967295); //@line 1222 "arraymodule.c"
        var $61=(($54+8)&4294967295); //@line 1222 "arraymodule.c"
        HEAP[$61]=$60; //@line 1222 "arraymodule.c"
        var $62=HEAP[$self_addr]; //@line 1223 "arraymodule.c"
        var $63=$62; //@line 1223 "arraymodule.c"
        var $64=(($63+8)&4294967295); //@line 1223 "arraymodule.c"
        var $65=HEAP[$64]; //@line 1223 "arraymodule.c"
        var $66=HEAP[$self_addr]; //@line 1223 "arraymodule.c"
        var $67=(($66+16)&4294967295); //@line 1223 "arraymodule.c"
        HEAP[$67]=$65; //@line 1223 "arraymodule.c"
        var $68=HEAP[$n]; //@line 1224 "arraymodule.c"
        var $69=HEAP[$itemsize]; //@line 1224 "arraymodule.c"
        var $70=HEAP[$self_addr]; //@line 1224 "arraymodule.c"
        var $71=$70; //@line 1224 "arraymodule.c"
        var $72=(($71+8)&4294967295); //@line 1224 "arraymodule.c"
        var $73=HEAP[$72]; //@line 1224 "arraymodule.c"
        var $74=HEAP[$n]; //@line 1224 "arraymodule.c"
        var $75=((($73) - ($74))&4294967295); //@line 1224 "arraymodule.c"
        var $76=HEAP[$itemsize]; //@line 1224 "arraymodule.c"
        var $77=((($75) * ($76))&4294967295); //@line 1224 "arraymodule.c"
        var $78=HEAP[$item]; //@line 1224 "arraymodule.c"
        var $79=(($78+$77)&4294967295); //@line 1224 "arraymodule.c"
        var $80=HEAP[$fp]; //@line 1224 "arraymodule.c"
        var $81=_fread($79, $69, $68, $80); //@line 1224 "arraymodule.c"
        HEAP[$nread]=$81; //@line 1224 "arraymodule.c"
        var $82=HEAP[$n]; //@line 1226 "arraymodule.c"
        var $83=HEAP[$nread]; //@line 1226 "arraymodule.c"
        var $84=((($82))>>>0) > ((($83))>>>0); //@line 1226 "arraymodule.c"
        if ($84) { __label__ = 19; break; } else { __label__ = 32; break; } //@line 1226 "arraymodule.c"
      case 19: // $bb17
        var $85=HEAP[$self_addr]; //@line 1227 "arraymodule.c"
        var $86=$85; //@line 1227 "arraymodule.c"
        var $87=HEAP[$self_addr]; //@line 1227 "arraymodule.c"
        var $88=$87; //@line 1227 "arraymodule.c"
        var $89=(($88+8)&4294967295); //@line 1227 "arraymodule.c"
        var $90=HEAP[$89]; //@line 1227 "arraymodule.c"
        var $91=HEAP[$n]; //@line 1227 "arraymodule.c"
        var $92=HEAP[$nread]; //@line 1227 "arraymodule.c"
        var $93=((($91) - ($92))&4294967295); //@line 1227 "arraymodule.c"
        var $94=((($90) - ($93))&4294967295); //@line 1227 "arraymodule.c"
        var $95=(($86+8)&4294967295); //@line 1227 "arraymodule.c"
        HEAP[$95]=$94; //@line 1227 "arraymodule.c"
        var $96=HEAP[$self_addr]; //@line 1228 "arraymodule.c"
        var $97=$96; //@line 1228 "arraymodule.c"
        var $98=(($97+8)&4294967295); //@line 1228 "arraymodule.c"
        var $99=HEAP[$98]; //@line 1228 "arraymodule.c"
        var $100=HEAP[$itemsize]; //@line 1228 "arraymodule.c"
        var $101=((($99) * ($100))&4294967295); //@line 1228 "arraymodule.c"
        var $102=((($101))|0) >= 0; //@line 1228 "arraymodule.c"
        if ($102) { __label__ = 20; break; } else { __label__ = 27; break; } //@line 1228 "arraymodule.c"
      case 20: // $bb18
        var $103=HEAP[$self_addr]; //@line 1228 "arraymodule.c"
        var $104=$103; //@line 1228 "arraymodule.c"
        var $105=(($104+8)&4294967295); //@line 1228 "arraymodule.c"
        var $106=HEAP[$105]; //@line 1228 "arraymodule.c"
        var $107=HEAP[$itemsize]; //@line 1228 "arraymodule.c"
        var $108=((($106) * ($107))&4294967295); //@line 1228 "arraymodule.c"
        var $109=((($108))|0) >= 0; //@line 1228 "arraymodule.c"
        if ($109) { __label__ = 21; break; } else { __label__ = 25; break; } //@line 1228 "arraymodule.c"
      case 21: // $bb19
        var $110=HEAP[$self_addr]; //@line 1228 "arraymodule.c"
        var $111=$110; //@line 1228 "arraymodule.c"
        var $112=(($111+8)&4294967295); //@line 1228 "arraymodule.c"
        var $113=HEAP[$112]; //@line 1228 "arraymodule.c"
        var $114=HEAP[$itemsize]; //@line 1228 "arraymodule.c"
        var $115=((($113) * ($114))&4294967295); //@line 1228 "arraymodule.c"
        var $116=((($115))|0)!=0; //@line 1228 "arraymodule.c"
        if ($116) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1228 "arraymodule.c"
      case 22: // $bb20
        var $117=HEAP[$self_addr]; //@line 1228 "arraymodule.c"
        var $118=$117; //@line 1228 "arraymodule.c"
        var $119=(($118+8)&4294967295); //@line 1228 "arraymodule.c"
        var $120=HEAP[$119]; //@line 1228 "arraymodule.c"
        var $121=HEAP[$itemsize]; //@line 1228 "arraymodule.c"
        var $122=((($120) * ($121))&4294967295); //@line 1228 "arraymodule.c"
        HEAP[$iftmp_222]=$122; //@line 1228 "arraymodule.c"
        __label__ = 24; break; //@line 1228 "arraymodule.c"
      case 23: // $bb21
        HEAP[$iftmp_222]=1; //@line 1228 "arraymodule.c"
        __label__ = 24; break; //@line 1228 "arraymodule.c"
      case 24: // $bb22
        var $123=HEAP[$item]; //@line 1228 "arraymodule.c"
        var $124=HEAP[$iftmp_222]; //@line 1228 "arraymodule.c"
        var $125=_realloc($123, $124); //@line 1228 "arraymodule.c"
        HEAP[$iftmp_220]=$125; //@line 1228 "arraymodule.c"
        __label__ = 26; break; //@line 1228 "arraymodule.c"
      case 25: // $bb23
        HEAP[$iftmp_220]=0; //@line 1228 "arraymodule.c"
        __label__ = 26; break; //@line 1228 "arraymodule.c"
      case 26: // $bb24
        var $126=HEAP[$iftmp_220]; //@line 1228 "arraymodule.c"
        HEAP[$iftmp_218]=$126; //@line 1228 "arraymodule.c"
        __label__ = 28; break; //@line 1228 "arraymodule.c"
      case 27: // $bb25
        HEAP[$iftmp_218]=0; //@line 1228 "arraymodule.c"
        __label__ = 28; break; //@line 1228 "arraymodule.c"
      case 28: // $bb26
        var $127=HEAP[$iftmp_218]; //@line 1228 "arraymodule.c"
        HEAP[$item]=$127; //@line 1228 "arraymodule.c"
        var $128=HEAP[$self_addr]; //@line 1229 "arraymodule.c"
        var $129=(($128+12)&4294967295); //@line 1229 "arraymodule.c"
        var $130=HEAP[$item]; //@line 1229 "arraymodule.c"
        HEAP[$129]=$130; //@line 1229 "arraymodule.c"
        var $131=HEAP[$self_addr]; //@line 1230 "arraymodule.c"
        var $132=$131; //@line 1230 "arraymodule.c"
        var $133=(($132+8)&4294967295); //@line 1230 "arraymodule.c"
        var $134=HEAP[$133]; //@line 1230 "arraymodule.c"
        var $135=HEAP[$self_addr]; //@line 1230 "arraymodule.c"
        var $136=(($135+16)&4294967295); //@line 1230 "arraymodule.c"
        HEAP[$136]=$134; //@line 1230 "arraymodule.c"
        var $137=HEAP[$fp]; //@line 1231 "arraymodule.c"
        var $138=_ferror($137); //@line 1231 "arraymodule.c"
        var $139=((($138))|0)!=0; //@line 1231 "arraymodule.c"
        if ($139) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1231 "arraymodule.c"
      case 29: // $bb27
        var $140=HEAP[_PyExc_IOError]; //@line 1232 "arraymodule.c"
        var $141=_PyErr_SetFromErrno($140); //@line 1232 "arraymodule.c"
        var $142=HEAP[$fp]; //@line 1233 "arraymodule.c"
        _clearerr($142); //@line 1233 "arraymodule.c"
        __label__ = 31; break; //@line 1233 "arraymodule.c"
      case 30: // $bb28
        var $143=HEAP[_PyExc_EOFError]; //@line 1236 "arraymodule.c"
        _PyErr_SetString($143, ((__str35)&4294967295)); //@line 1236 "arraymodule.c"
        __label__ = 31; break; //@line 1236 "arraymodule.c"
      case 31: // $bb29
        HEAP[$0]=0; //@line 1239 "arraymodule.c"
        __label__ = 33; break; //@line 1239 "arraymodule.c"
      case 32: // $bb30
        var $144=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1242 "arraymodule.c"
        var $145=((($144) + 1)&4294967295); //@line 1242 "arraymodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$145; //@line 1242 "arraymodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1243 "arraymodule.c"
        __label__ = 33; break; //@line 1243 "arraymodule.c"
      case 33: // $bb31
        var $146=HEAP[$0]; //@line 1198 "arraymodule.c"
        HEAP[$retval]=$146; //@line 1198 "arraymodule.c"
        __label__ = 34; break; //@line 1198 "arraymodule.c"
      case 34: // $return
        var $retval32=HEAP[$retval]; //@line 1198 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval32; //@line 1198 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_fromfile_as_read($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 1256 "arraymodule.c"
        var $2=((($1))|0)!=0; //@line 1256 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1256 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 1256 "arraymodule.c"
        var $4=_PyErr_WarnEx($3, ((__str36)&4294967295), 1); //@line 1256 "arraymodule.c"
        var $5=((($4))|0) < 0; //@line 1256 "arraymodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1256 "arraymodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1258 "arraymodule.c"
        __label__ = 4; break; //@line 1258 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[$self_addr]; //@line 1259 "arraymodule.c"
        var $7=HEAP[$args_addr]; //@line 1259 "arraymodule.c"
        var $8=_array_fromfile($6, $7); //@line 1259 "arraymodule.c"
        HEAP[$0]=$8; //@line 1259 "arraymodule.c"
        __label__ = 4; break; //@line 1259 "arraymodule.c"
      case 4: // $bb3
        var $9=HEAP[$0]; //@line 1258 "arraymodule.c"
        HEAP[$retval]=$9; //@line 1258 "arraymodule.c"
        __label__ = 5; break; //@line 1258 "arraymodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 1258 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 1258 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_tofile($self, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $f_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $fp=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$f_addr]=$f;
        var $1=HEAP[$f_addr]; //@line 1268 "arraymodule.c"
        var $2=_PyFile_AsFile($1); //@line 1268 "arraymodule.c"
        HEAP[$fp]=$2; //@line 1268 "arraymodule.c"
        var $3=HEAP[$fp]; //@line 1269 "arraymodule.c"
        var $4=($3)==0; //@line 1269 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1269 "arraymodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_TypeError]; //@line 1270 "arraymodule.c"
        _PyErr_SetString($5, ((__str37)&4294967295)); //@line 1270 "arraymodule.c"
        HEAP[$0]=0; //@line 1271 "arraymodule.c"
        __label__ = 6; break; //@line 1271 "arraymodule.c"
      case 2: // $bb1
        var $6=HEAP[$self_addr]; //@line 1273 "arraymodule.c"
        var $7=(($6+8)&4294967295); //@line 1273 "arraymodule.c"
        var $8=HEAP[$7]; //@line 1273 "arraymodule.c"
        var $9=((($8))|0) > 0; //@line 1273 "arraymodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1273 "arraymodule.c"
      case 3: // $bb2
        var $10=HEAP[$self_addr]; //@line 1274 "arraymodule.c"
        var $11=(($10+8)&4294967295); //@line 1274 "arraymodule.c"
        var $12=HEAP[$11]; //@line 1274 "arraymodule.c"
        var $13=HEAP[$self_addr]; //@line 1274 "arraymodule.c"
        var $14=(($13+20)&4294967295); //@line 1274 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1274 "arraymodule.c"
        var $16=(($15+4)&4294967295); //@line 1274 "arraymodule.c"
        var $17=HEAP[$16]; //@line 1274 "arraymodule.c"
        var $18=HEAP[$self_addr]; //@line 1274 "arraymodule.c"
        var $19=(($18+12)&4294967295); //@line 1274 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1274 "arraymodule.c"
        var $21=HEAP[$fp]; //@line 1274 "arraymodule.c"
        var $22=_fwrite($20, $17, $12, $21); //@line 1274 "arraymodule.c"
        var $23=HEAP[$self_addr]; //@line 1274 "arraymodule.c"
        var $24=(($23+8)&4294967295); //@line 1274 "arraymodule.c"
        var $25=HEAP[$24]; //@line 1274 "arraymodule.c"
        var $26=((($22))|0)!=((($25))|0); //@line 1274 "arraymodule.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1274 "arraymodule.c"
      case 4: // $bb3
        var $27=HEAP[_PyExc_IOError]; //@line 1276 "arraymodule.c"
        var $28=_PyErr_SetFromErrno($27); //@line 1276 "arraymodule.c"
        var $29=HEAP[$fp]; //@line 1277 "arraymodule.c"
        _clearerr($29); //@line 1277 "arraymodule.c"
        HEAP[$0]=0; //@line 1278 "arraymodule.c"
        __label__ = 6; break; //@line 1278 "arraymodule.c"
      case 5: // $bb4
        var $30=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1281 "arraymodule.c"
        var $31=((($30) + 1)&4294967295); //@line 1281 "arraymodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$31; //@line 1281 "arraymodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1282 "arraymodule.c"
        __label__ = 6; break; //@line 1282 "arraymodule.c"
      case 6: // $bb5
        var $32=HEAP[$0]; //@line 1271 "arraymodule.c"
        HEAP[$retval]=$32; //@line 1271 "arraymodule.c"
        __label__ = 7; break; //@line 1271 "arraymodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 1271 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 1271 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_tofile_as_write($self, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $f_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$f_addr]=$f;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 1295 "arraymodule.c"
        var $2=((($1))|0)!=0; //@line 1295 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1295 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 1295 "arraymodule.c"
        var $4=_PyErr_WarnEx($3, ((__str38)&4294967295), 1); //@line 1295 "arraymodule.c"
        var $5=((($4))|0) < 0; //@line 1295 "arraymodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1295 "arraymodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1297 "arraymodule.c"
        __label__ = 4; break; //@line 1297 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[$self_addr]; //@line 1298 "arraymodule.c"
        var $7=HEAP[$f_addr]; //@line 1298 "arraymodule.c"
        var $8=_array_tofile($6, $7); //@line 1298 "arraymodule.c"
        HEAP[$0]=$8; //@line 1298 "arraymodule.c"
        __label__ = 4; break; //@line 1298 "arraymodule.c"
      case 4: // $bb3
        var $9=HEAP[$0]; //@line 1297 "arraymodule.c"
        HEAP[$retval]=$9; //@line 1297 "arraymodule.c"
        __label__ = 5; break; //@line 1297 "arraymodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 1297 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 1297 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_fromlist($self, $list) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $list_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_252=__stackBase__+12;
        var $iftmp_250=__stackBase__+16;
        var $iftmp_248=__stackBase__+20;
        var $iftmp_239=__stackBase__+24;
        var $iftmp_237=__stackBase__+28;
        var $iftmp_235=__stackBase__+32;
        var $0=__stackBase__+36;
        var $n=__stackBase__+40;
        var $itemsize=__stackBase__+44;
        var $item=__stackBase__+48;
        var $i=__stackBase__+52;
        var $v=__stackBase__+56;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$list_addr]=$list;
        var $1=HEAP[$self_addr]; //@line 1306 "arraymodule.c"
        var $2=(($1+20)&4294967295); //@line 1306 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1306 "arraymodule.c"
        var $4=(($3+4)&4294967295); //@line 1306 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1306 "arraymodule.c"
        HEAP[$itemsize]=$5; //@line 1306 "arraymodule.c"
        var $6=HEAP[$list_addr]; //@line 1308 "arraymodule.c"
        var $7=(($6+4)&4294967295); //@line 1308 "arraymodule.c"
        var $8=HEAP[$7]; //@line 1308 "arraymodule.c"
        var $9=(($8+84)&4294967295); //@line 1308 "arraymodule.c"
        var $10=HEAP[$9]; //@line 1308 "arraymodule.c"
        var $11=($10) & 33554432; //@line 1308 "arraymodule.c"
        var $12=((($11))|0)==0; //@line 1308 "arraymodule.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1308 "arraymodule.c"
      case 1: // $bb
        var $13=HEAP[_PyExc_TypeError]; //@line 1309 "arraymodule.c"
        _PyErr_SetString($13, ((__str39)&4294967295)); //@line 1309 "arraymodule.c"
        HEAP[$0]=0; //@line 1310 "arraymodule.c"
        __label__ = 32; break; //@line 1310 "arraymodule.c"
      case 2: // $bb1
        var $14=HEAP[$list_addr]; //@line 1312 "arraymodule.c"
        var $15=_PyList_Size($14); //@line 1312 "arraymodule.c"
        HEAP[$n]=$15; //@line 1312 "arraymodule.c"
        var $16=HEAP[$n]; //@line 1313 "arraymodule.c"
        var $17=((($16))|0) > 0; //@line 1313 "arraymodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 31; break; } //@line 1313 "arraymodule.c"
      case 3: // $bb2
        var $18=HEAP[$self_addr]; //@line 1314 "arraymodule.c"
        var $19=(($18+12)&4294967295); //@line 1314 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1314 "arraymodule.c"
        HEAP[$item]=$20; //@line 1314 "arraymodule.c"
        var $21=HEAP[$self_addr]; //@line 1316 "arraymodule.c"
        var $22=$21; //@line 1316 "arraymodule.c"
        var $23=(($22+8)&4294967295); //@line 1316 "arraymodule.c"
        var $24=HEAP[$23]; //@line 1316 "arraymodule.c"
        var $25=HEAP[$n]; //@line 1316 "arraymodule.c"
        var $26=((($24) + ($25))&4294967295); //@line 1316 "arraymodule.c"
        var $27=HEAP[$itemsize]; //@line 1316 "arraymodule.c"
        var $28=((($26) * ($27))&4294967295); //@line 1316 "arraymodule.c"
        var $29=((($28))|0) >= 0; //@line 1316 "arraymodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 11; break; } //@line 1316 "arraymodule.c"
      case 4: // $bb3
        var $30=HEAP[$self_addr]; //@line 1316 "arraymodule.c"
        var $31=$30; //@line 1316 "arraymodule.c"
        var $32=(($31+8)&4294967295); //@line 1316 "arraymodule.c"
        var $33=HEAP[$32]; //@line 1316 "arraymodule.c"
        var $34=HEAP[$n]; //@line 1316 "arraymodule.c"
        var $35=((($33) + ($34))&4294967295); //@line 1316 "arraymodule.c"
        var $36=HEAP[$itemsize]; //@line 1316 "arraymodule.c"
        var $37=((($35) * ($36))&4294967295); //@line 1316 "arraymodule.c"
        var $38=((($37))|0) >= 0; //@line 1316 "arraymodule.c"
        if ($38) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 1316 "arraymodule.c"
      case 5: // $bb4
        var $39=HEAP[$self_addr]; //@line 1316 "arraymodule.c"
        var $40=$39; //@line 1316 "arraymodule.c"
        var $41=(($40+8)&4294967295); //@line 1316 "arraymodule.c"
        var $42=HEAP[$41]; //@line 1316 "arraymodule.c"
        var $43=HEAP[$n]; //@line 1316 "arraymodule.c"
        var $44=((($42) + ($43))&4294967295); //@line 1316 "arraymodule.c"
        var $45=HEAP[$itemsize]; //@line 1316 "arraymodule.c"
        var $46=((($44) * ($45))&4294967295); //@line 1316 "arraymodule.c"
        var $47=((($46))|0)!=0; //@line 1316 "arraymodule.c"
        if ($47) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1316 "arraymodule.c"
      case 6: // $bb5
        var $48=HEAP[$self_addr]; //@line 1316 "arraymodule.c"
        var $49=$48; //@line 1316 "arraymodule.c"
        var $50=(($49+8)&4294967295); //@line 1316 "arraymodule.c"
        var $51=HEAP[$50]; //@line 1316 "arraymodule.c"
        var $52=HEAP[$n]; //@line 1316 "arraymodule.c"
        var $53=((($51) + ($52))&4294967295); //@line 1316 "arraymodule.c"
        var $54=HEAP[$itemsize]; //@line 1316 "arraymodule.c"
        var $55=((($53) * ($54))&4294967295); //@line 1316 "arraymodule.c"
        HEAP[$iftmp_239]=$55; //@line 1316 "arraymodule.c"
        __label__ = 8; break; //@line 1316 "arraymodule.c"
      case 7: // $bb6
        HEAP[$iftmp_239]=1; //@line 1316 "arraymodule.c"
        __label__ = 8; break; //@line 1316 "arraymodule.c"
      case 8: // $bb7
        var $56=HEAP[$item]; //@line 1316 "arraymodule.c"
        var $57=HEAP[$iftmp_239]; //@line 1316 "arraymodule.c"
        var $58=_realloc($56, $57); //@line 1316 "arraymodule.c"
        HEAP[$iftmp_237]=$58; //@line 1316 "arraymodule.c"
        __label__ = 10; break; //@line 1316 "arraymodule.c"
      case 9: // $bb8
        HEAP[$iftmp_237]=0; //@line 1316 "arraymodule.c"
        __label__ = 10; break; //@line 1316 "arraymodule.c"
      case 10: // $bb9
        var $59=HEAP[$iftmp_237]; //@line 1316 "arraymodule.c"
        HEAP[$iftmp_235]=$59; //@line 1316 "arraymodule.c"
        __label__ = 12; break; //@line 1316 "arraymodule.c"
      case 11: // $bb10
        HEAP[$iftmp_235]=0; //@line 1316 "arraymodule.c"
        __label__ = 12; break; //@line 1316 "arraymodule.c"
      case 12: // $bb11
        var $60=HEAP[$iftmp_235]; //@line 1316 "arraymodule.c"
        HEAP[$item]=$60; //@line 1316 "arraymodule.c"
        var $61=HEAP[$item]; //@line 1317 "arraymodule.c"
        var $62=($61)==0; //@line 1317 "arraymodule.c"
        if ($62) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1317 "arraymodule.c"
      case 13: // $bb12
        var $63=_PyErr_NoMemory(); //@line 1318 "arraymodule.c"
        HEAP[$0]=0; //@line 1319 "arraymodule.c"
        __label__ = 32; break; //@line 1319 "arraymodule.c"
      case 14: // $bb13
        var $64=HEAP[$self_addr]; //@line 1321 "arraymodule.c"
        var $65=(($64+12)&4294967295); //@line 1321 "arraymodule.c"
        var $66=HEAP[$item]; //@line 1321 "arraymodule.c"
        HEAP[$65]=$66; //@line 1321 "arraymodule.c"
        var $67=HEAP[$self_addr]; //@line 1322 "arraymodule.c"
        var $68=$67; //@line 1322 "arraymodule.c"
        var $69=HEAP[$self_addr]; //@line 1322 "arraymodule.c"
        var $70=$69; //@line 1322 "arraymodule.c"
        var $71=(($70+8)&4294967295); //@line 1322 "arraymodule.c"
        var $72=HEAP[$71]; //@line 1322 "arraymodule.c"
        var $73=HEAP[$n]; //@line 1322 "arraymodule.c"
        var $74=((($72) + ($73))&4294967295); //@line 1322 "arraymodule.c"
        var $75=(($68+8)&4294967295); //@line 1322 "arraymodule.c"
        HEAP[$75]=$74; //@line 1322 "arraymodule.c"
        var $76=HEAP[$self_addr]; //@line 1323 "arraymodule.c"
        var $77=$76; //@line 1323 "arraymodule.c"
        var $78=(($77+8)&4294967295); //@line 1323 "arraymodule.c"
        var $79=HEAP[$78]; //@line 1323 "arraymodule.c"
        var $80=HEAP[$self_addr]; //@line 1323 "arraymodule.c"
        var $81=(($80+16)&4294967295); //@line 1323 "arraymodule.c"
        HEAP[$81]=$79; //@line 1323 "arraymodule.c"
        HEAP[$i]=0; //@line 1324 "arraymodule.c"
        __label__ = 30; break; //@line 1324 "arraymodule.c"
      case 15: // $bb14
        var $82=HEAP[$list_addr]; //@line 1325 "arraymodule.c"
        var $83=HEAP[$i]; //@line 1325 "arraymodule.c"
        var $84=_PyList_GetItem($82, $83); //@line 1325 "arraymodule.c"
        HEAP[$v]=$84; //@line 1325 "arraymodule.c"
        var $85=HEAP[$self_addr]; //@line 1326 "arraymodule.c"
        var $86=(($85+20)&4294967295); //@line 1326 "arraymodule.c"
        var $87=HEAP[$86]; //@line 1326 "arraymodule.c"
        var $88=(($87+12)&4294967295); //@line 1326 "arraymodule.c"
        var $89=HEAP[$88]; //@line 1326 "arraymodule.c"
        var $90=HEAP[$self_addr]; //@line 1326 "arraymodule.c"
        var $91=$90; //@line 1326 "arraymodule.c"
        var $92=(($91+8)&4294967295); //@line 1326 "arraymodule.c"
        var $93=HEAP[$92]; //@line 1326 "arraymodule.c"
        var $94=HEAP[$n]; //@line 1326 "arraymodule.c"
        var $95=((($93) - ($94))&4294967295); //@line 1326 "arraymodule.c"
        var $96=HEAP[$i]; //@line 1326 "arraymodule.c"
        var $97=((($95) + ($96))&4294967295); //@line 1326 "arraymodule.c"
        var $98=HEAP[$self_addr]; //@line 1326 "arraymodule.c"
        var $99=HEAP[$v]; //@line 1326 "arraymodule.c"
        var $100=FUNCTION_TABLE[$89]($98, $97, $99); //@line 1326 "arraymodule.c"
        var $101=((($100))|0)!=0; //@line 1326 "arraymodule.c"
        if ($101) { __label__ = 16; break; } else { __label__ = 29; break; } //@line 1326 "arraymodule.c"
      case 16: // $bb15
        var $102=HEAP[$self_addr]; //@line 1328 "arraymodule.c"
        var $103=$102; //@line 1328 "arraymodule.c"
        var $104=HEAP[$self_addr]; //@line 1328 "arraymodule.c"
        var $105=$104; //@line 1328 "arraymodule.c"
        var $106=(($105+8)&4294967295); //@line 1328 "arraymodule.c"
        var $107=HEAP[$106]; //@line 1328 "arraymodule.c"
        var $108=HEAP[$n]; //@line 1328 "arraymodule.c"
        var $109=((($107) - ($108))&4294967295); //@line 1328 "arraymodule.c"
        var $110=(($103+8)&4294967295); //@line 1328 "arraymodule.c"
        HEAP[$110]=$109; //@line 1328 "arraymodule.c"
        var $111=HEAP[$itemsize]; //@line 1329 "arraymodule.c"
        var $112=((($111))|0)!=0; //@line 1329 "arraymodule.c"
        if ($112) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 1329 "arraymodule.c"
      case 17: // $bb16
        var $113=HEAP[$self_addr]; //@line 1329 "arraymodule.c"
        var $114=(($113+8)&4294967295); //@line 1329 "arraymodule.c"
        var $115=HEAP[$114]; //@line 1329 "arraymodule.c"
        var $116=HEAP[$itemsize]; //@line 1329 "arraymodule.c"
        var $117=((2147483647/((($116))|0))|0); //@line 1329 "arraymodule.c"
        var $118=((($115))|0) > ((($117))|0); //@line 1329 "arraymodule.c"
        if ($118) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1329 "arraymodule.c"
      case 18: // $bb17
        var $119=_PyErr_NoMemory(); //@line 1330 "arraymodule.c"
        HEAP[$0]=$119; //@line 1330 "arraymodule.c"
        __label__ = 32; break; //@line 1330 "arraymodule.c"
      case 19: // $bb18
        var $120=HEAP[$self_addr]; //@line 1332 "arraymodule.c"
        var $121=$120; //@line 1332 "arraymodule.c"
        var $122=(($121+8)&4294967295); //@line 1332 "arraymodule.c"
        var $123=HEAP[$122]; //@line 1332 "arraymodule.c"
        var $124=HEAP[$itemsize]; //@line 1332 "arraymodule.c"
        var $125=((($123) * ($124))&4294967295); //@line 1332 "arraymodule.c"
        var $126=((($125))|0) >= 0; //@line 1332 "arraymodule.c"
        if ($126) { __label__ = 20; break; } else { __label__ = 27; break; } //@line 1332 "arraymodule.c"
      case 20: // $bb19
        var $127=HEAP[$self_addr]; //@line 1332 "arraymodule.c"
        var $128=$127; //@line 1332 "arraymodule.c"
        var $129=(($128+8)&4294967295); //@line 1332 "arraymodule.c"
        var $130=HEAP[$129]; //@line 1332 "arraymodule.c"
        var $131=HEAP[$itemsize]; //@line 1332 "arraymodule.c"
        var $132=((($130) * ($131))&4294967295); //@line 1332 "arraymodule.c"
        var $133=((($132))|0) >= 0; //@line 1332 "arraymodule.c"
        if ($133) { __label__ = 21; break; } else { __label__ = 25; break; } //@line 1332 "arraymodule.c"
      case 21: // $bb20
        var $134=HEAP[$self_addr]; //@line 1332 "arraymodule.c"
        var $135=$134; //@line 1332 "arraymodule.c"
        var $136=(($135+8)&4294967295); //@line 1332 "arraymodule.c"
        var $137=HEAP[$136]; //@line 1332 "arraymodule.c"
        var $138=HEAP[$itemsize]; //@line 1332 "arraymodule.c"
        var $139=((($137) * ($138))&4294967295); //@line 1332 "arraymodule.c"
        var $140=((($139))|0)!=0; //@line 1332 "arraymodule.c"
        if ($140) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1332 "arraymodule.c"
      case 22: // $bb21
        var $141=HEAP[$self_addr]; //@line 1332 "arraymodule.c"
        var $142=$141; //@line 1332 "arraymodule.c"
        var $143=(($142+8)&4294967295); //@line 1332 "arraymodule.c"
        var $144=HEAP[$143]; //@line 1332 "arraymodule.c"
        var $145=HEAP[$itemsize]; //@line 1332 "arraymodule.c"
        var $146=((($144) * ($145))&4294967295); //@line 1332 "arraymodule.c"
        HEAP[$iftmp_252]=$146; //@line 1332 "arraymodule.c"
        __label__ = 24; break; //@line 1332 "arraymodule.c"
      case 23: // $bb22
        HEAP[$iftmp_252]=1; //@line 1332 "arraymodule.c"
        __label__ = 24; break; //@line 1332 "arraymodule.c"
      case 24: // $bb23
        var $147=HEAP[$item]; //@line 1332 "arraymodule.c"
        var $148=HEAP[$iftmp_252]; //@line 1332 "arraymodule.c"
        var $149=_realloc($147, $148); //@line 1332 "arraymodule.c"
        HEAP[$iftmp_250]=$149; //@line 1332 "arraymodule.c"
        __label__ = 26; break; //@line 1332 "arraymodule.c"
      case 25: // $bb24
        HEAP[$iftmp_250]=0; //@line 1332 "arraymodule.c"
        __label__ = 26; break; //@line 1332 "arraymodule.c"
      case 26: // $bb25
        var $150=HEAP[$iftmp_250]; //@line 1332 "arraymodule.c"
        HEAP[$iftmp_248]=$150; //@line 1332 "arraymodule.c"
        __label__ = 28; break; //@line 1332 "arraymodule.c"
      case 27: // $bb26
        HEAP[$iftmp_248]=0; //@line 1332 "arraymodule.c"
        __label__ = 28; break; //@line 1332 "arraymodule.c"
      case 28: // $bb27
        var $151=HEAP[$iftmp_248]; //@line 1332 "arraymodule.c"
        HEAP[$item]=$151; //@line 1332 "arraymodule.c"
        var $152=HEAP[$self_addr]; //@line 1334 "arraymodule.c"
        var $153=(($152+12)&4294967295); //@line 1334 "arraymodule.c"
        var $154=HEAP[$item]; //@line 1334 "arraymodule.c"
        HEAP[$153]=$154; //@line 1334 "arraymodule.c"
        var $155=HEAP[$self_addr]; //@line 1335 "arraymodule.c"
        var $156=$155; //@line 1335 "arraymodule.c"
        var $157=(($156+8)&4294967295); //@line 1335 "arraymodule.c"
        var $158=HEAP[$157]; //@line 1335 "arraymodule.c"
        var $159=HEAP[$self_addr]; //@line 1335 "arraymodule.c"
        var $160=(($159+16)&4294967295); //@line 1335 "arraymodule.c"
        HEAP[$160]=$158; //@line 1335 "arraymodule.c"
        HEAP[$0]=0; //@line 1336 "arraymodule.c"
        __label__ = 32; break; //@line 1336 "arraymodule.c"
      case 29: // $bb28
        var $161=HEAP[$i]; //@line 1324 "arraymodule.c"
        var $162=((($161) + 1)&4294967295); //@line 1324 "arraymodule.c"
        HEAP[$i]=$162; //@line 1324 "arraymodule.c"
        __label__ = 30; break; //@line 1324 "arraymodule.c"
      case 30: // $bb29
        var $163=HEAP[$i]; //@line 1324 "arraymodule.c"
        var $164=HEAP[$n]; //@line 1324 "arraymodule.c"
        var $165=((($163))|0) < ((($164))|0); //@line 1324 "arraymodule.c"
        if ($165) { __label__ = 15; break; } else { __label__ = 31; break; } //@line 1324 "arraymodule.c"
      case 31: // $bb30
        var $166=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1340 "arraymodule.c"
        var $167=((($166) + 1)&4294967295); //@line 1340 "arraymodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$167; //@line 1340 "arraymodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1341 "arraymodule.c"
        __label__ = 32; break; //@line 1341 "arraymodule.c"
      case 32: // $bb31
        var $168=HEAP[$0]; //@line 1310 "arraymodule.c"
        HEAP[$retval]=$168; //@line 1310 "arraymodule.c"
        __label__ = 33; break; //@line 1310 "arraymodule.c"
      case 33: // $return
        var $retval32=HEAP[$retval]; //@line 1310 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval32; //@line 1310 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_tolist($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $unused_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $list=__stackBase__+16;
        var $i=__stackBase__+20;
        var $v=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$unused_addr]=$unused;
        var $1=HEAP[$self_addr]; //@line 1353 "arraymodule.c"
        var $2=$1; //@line 1353 "arraymodule.c"
        var $3=(($2+8)&4294967295); //@line 1353 "arraymodule.c"
        var $4=HEAP[$3]; //@line 1353 "arraymodule.c"
        var $5=_PyList_New($4); //@line 1353 "arraymodule.c"
        HEAP[$list]=$5; //@line 1353 "arraymodule.c"
        var $6=HEAP[$list]; //@line 1356 "arraymodule.c"
        var $7=($6)==0; //@line 1356 "arraymodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1356 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1357 "arraymodule.c"
        __label__ = 10; break; //@line 1357 "arraymodule.c"
      case 2: // $bb1
        HEAP[$i]=0; //@line 1358 "arraymodule.c"
        __label__ = 8; break; //@line 1358 "arraymodule.c"
      case 3: // $bb2
        var $8=HEAP[$self_addr]; //@line 1359 "arraymodule.c"
        var $9=$8; //@line 1359 "arraymodule.c"
        var $10=HEAP[$i]; //@line 1359 "arraymodule.c"
        var $11=_getarrayitem($9, $10); //@line 1359 "arraymodule.c"
        HEAP[$v]=$11; //@line 1359 "arraymodule.c"
        var $12=HEAP[$v]; //@line 1360 "arraymodule.c"
        var $13=($12)==0; //@line 1360 "arraymodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 1360 "arraymodule.c"
      case 4: // $bb3
        var $14=HEAP[$list]; //@line 1361 "arraymodule.c"
        var $15=(($14)&4294967295); //@line 1361 "arraymodule.c"
        var $16=HEAP[$15]; //@line 1361 "arraymodule.c"
        var $17=((($16) - 1)&4294967295); //@line 1361 "arraymodule.c"
        var $18=HEAP[$list]; //@line 1361 "arraymodule.c"
        var $19=(($18)&4294967295); //@line 1361 "arraymodule.c"
        HEAP[$19]=$17; //@line 1361 "arraymodule.c"
        var $20=HEAP[$list]; //@line 1361 "arraymodule.c"
        var $21=(($20)&4294967295); //@line 1361 "arraymodule.c"
        var $22=HEAP[$21]; //@line 1361 "arraymodule.c"
        var $23=((($22))|0)==0; //@line 1361 "arraymodule.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1361 "arraymodule.c"
      case 5: // $bb4
        var $24=HEAP[$list]; //@line 1361 "arraymodule.c"
        var $25=(($24+4)&4294967295); //@line 1361 "arraymodule.c"
        var $26=HEAP[$25]; //@line 1361 "arraymodule.c"
        var $27=(($26+24)&4294967295); //@line 1361 "arraymodule.c"
        var $28=HEAP[$27]; //@line 1361 "arraymodule.c"
        var $29=HEAP[$list]; //@line 1361 "arraymodule.c"
        FUNCTION_TABLE[$28]($29); //@line 1361 "arraymodule.c"
        __label__ = 6; break; //@line 1361 "arraymodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 1362 "arraymodule.c"
        __label__ = 10; break; //@line 1362 "arraymodule.c"
      case 7: // $bb6
        var $30=HEAP[$list]; //@line 1364 "arraymodule.c"
        var $31=HEAP[$i]; //@line 1364 "arraymodule.c"
        var $32=HEAP[$v]; //@line 1364 "arraymodule.c"
        var $33=_PyList_SetItem($30, $31, $32); //@line 1364 "arraymodule.c"
        var $34=HEAP[$i]; //@line 1358 "arraymodule.c"
        var $35=((($34) + 1)&4294967295); //@line 1358 "arraymodule.c"
        HEAP[$i]=$35; //@line 1358 "arraymodule.c"
        __label__ = 8; break; //@line 1358 "arraymodule.c"
      case 8: // $bb7
        var $36=HEAP[$self_addr]; //@line 1358 "arraymodule.c"
        var $37=$36; //@line 1358 "arraymodule.c"
        var $38=(($37+8)&4294967295); //@line 1358 "arraymodule.c"
        var $39=HEAP[$38]; //@line 1358 "arraymodule.c"
        var $40=HEAP[$i]; //@line 1358 "arraymodule.c"
        var $41=((($39))|0) > ((($40))|0); //@line 1358 "arraymodule.c"
        if ($41) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 1358 "arraymodule.c"
      case 9: // $bb8
        var $42=HEAP[$list]; //@line 1366 "arraymodule.c"
        HEAP[$0]=$42; //@line 1366 "arraymodule.c"
        __label__ = 10; break; //@line 1366 "arraymodule.c"
      case 10: // $bb9
        var $43=HEAP[$0]; //@line 1357 "arraymodule.c"
        HEAP[$retval]=$43; //@line 1357 "arraymodule.c"
        __label__ = 11; break; //@line 1357 "arraymodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 1357 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1357 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_fromstring($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_273=__stackBase__+12;
        var $iftmp_270=__stackBase__+16;
        var $iftmp_267=__stackBase__+20;
        var $0=__stackBase__+24;
        var $str=__stackBase__+28;
        var $n=__stackBase__+32;
        var $itemsize=__stackBase__+36;
        var $item=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$self_addr]; //@line 1380 "arraymodule.c"
        var $2=(($1+20)&4294967295); //@line 1380 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1380 "arraymodule.c"
        var $4=(($3+4)&4294967295); //@line 1380 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1380 "arraymodule.c"
        HEAP[$itemsize]=$5; //@line 1380 "arraymodule.c"
        var $6=HEAP[$args_addr]; //@line 1381 "arraymodule.c"
        var $7=__PyArg_ParseTuple_SizeT($6, ((__str40)&4294967295), $str, $n); //@line 1381 "arraymodule.c"
        var $8=((($7))|0)==0; //@line 1381 "arraymodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1381 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1382 "arraymodule.c"
        __label__ = 21; break; //@line 1382 "arraymodule.c"
      case 2: // $bb1
        var $9=HEAP[$n]; //@line 1383 "arraymodule.c"
        var $10=HEAP[$itemsize]; //@line 1383 "arraymodule.c"
        var $11=((($9))|0) % ((($10))|0); //@line 1383 "arraymodule.c"
        var $12=((($11))|0)!=0; //@line 1383 "arraymodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1383 "arraymodule.c"
      case 3: // $bb2
        var $13=HEAP[_PyExc_ValueError]; //@line 1384 "arraymodule.c"
        _PyErr_SetString($13, ((__str41)&4294967295)); //@line 1384 "arraymodule.c"
        HEAP[$0]=0; //@line 1386 "arraymodule.c"
        __label__ = 21; break; //@line 1386 "arraymodule.c"
      case 4: // $bb3
        var $14=HEAP[$n]; //@line 1388 "arraymodule.c"
        var $15=HEAP[$itemsize]; //@line 1388 "arraymodule.c"
        var $16=((((($14))|0)/((($15))|0))|0); //@line 1388 "arraymodule.c"
        HEAP[$n]=$16; //@line 1388 "arraymodule.c"
        var $17=HEAP[$n]; //@line 1389 "arraymodule.c"
        var $18=((($17))|0) > 0; //@line 1389 "arraymodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 20; break; } //@line 1389 "arraymodule.c"
      case 5: // $bb4
        var $19=HEAP[$self_addr]; //@line 1390 "arraymodule.c"
        var $20=(($19+12)&4294967295); //@line 1390 "arraymodule.c"
        var $21=HEAP[$20]; //@line 1390 "arraymodule.c"
        HEAP[$item]=$21; //@line 1390 "arraymodule.c"
        var $22=HEAP[$self_addr]; //@line 1391 "arraymodule.c"
        var $23=$22; //@line 1391 "arraymodule.c"
        var $24=(($23+8)&4294967295); //@line 1391 "arraymodule.c"
        var $25=HEAP[$24]; //@line 1391 "arraymodule.c"
        var $26=((2147483647 - ($25))&4294967295); //@line 1391 "arraymodule.c"
        var $27=HEAP[$n]; //@line 1391 "arraymodule.c"
        var $28=((($26))|0) < ((($27))|0); //@line 1391 "arraymodule.c"
        if ($28) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1391 "arraymodule.c"
      case 6: // $bb5
        var $29=HEAP[$self_addr]; //@line 1391 "arraymodule.c"
        var $30=$29; //@line 1391 "arraymodule.c"
        var $31=(($30+8)&4294967295); //@line 1391 "arraymodule.c"
        var $32=HEAP[$31]; //@line 1391 "arraymodule.c"
        var $33=HEAP[$n]; //@line 1391 "arraymodule.c"
        var $34=((($32) + ($33))&4294967295); //@line 1391 "arraymodule.c"
        var $35=HEAP[$itemsize]; //@line 1391 "arraymodule.c"
        var $36=((2147483647/((($35))|0))|0); //@line 1391 "arraymodule.c"
        var $37=((($34))|0) > ((($36))|0); //@line 1391 "arraymodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1391 "arraymodule.c"
      case 7: // $bb6
        var $38=_PyErr_NoMemory(); //@line 1393 "arraymodule.c"
        HEAP[$0]=$38; //@line 1393 "arraymodule.c"
        __label__ = 21; break; //@line 1393 "arraymodule.c"
      case 8: // $bb7
        var $39=HEAP[$self_addr]; //@line 1395 "arraymodule.c"
        var $40=$39; //@line 1395 "arraymodule.c"
        var $41=(($40+8)&4294967295); //@line 1395 "arraymodule.c"
        var $42=HEAP[$41]; //@line 1395 "arraymodule.c"
        var $43=HEAP[$n]; //@line 1395 "arraymodule.c"
        var $44=((($42) + ($43))&4294967295); //@line 1395 "arraymodule.c"
        var $45=HEAP[$itemsize]; //@line 1395 "arraymodule.c"
        var $46=((($44) * ($45))&4294967295); //@line 1395 "arraymodule.c"
        var $47=((($46))|0) >= 0; //@line 1395 "arraymodule.c"
        if ($47) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 1395 "arraymodule.c"
      case 9: // $bb8
        var $48=HEAP[$self_addr]; //@line 1395 "arraymodule.c"
        var $49=$48; //@line 1395 "arraymodule.c"
        var $50=(($49+8)&4294967295); //@line 1395 "arraymodule.c"
        var $51=HEAP[$50]; //@line 1395 "arraymodule.c"
        var $52=HEAP[$n]; //@line 1395 "arraymodule.c"
        var $53=((($51) + ($52))&4294967295); //@line 1395 "arraymodule.c"
        var $54=HEAP[$itemsize]; //@line 1395 "arraymodule.c"
        var $55=((($53) * ($54))&4294967295); //@line 1395 "arraymodule.c"
        var $56=((($55))|0) >= 0; //@line 1395 "arraymodule.c"
        if ($56) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 1395 "arraymodule.c"
      case 10: // $bb9
        var $57=HEAP[$self_addr]; //@line 1395 "arraymodule.c"
        var $58=$57; //@line 1395 "arraymodule.c"
        var $59=(($58+8)&4294967295); //@line 1395 "arraymodule.c"
        var $60=HEAP[$59]; //@line 1395 "arraymodule.c"
        var $61=HEAP[$n]; //@line 1395 "arraymodule.c"
        var $62=((($60) + ($61))&4294967295); //@line 1395 "arraymodule.c"
        var $63=HEAP[$itemsize]; //@line 1395 "arraymodule.c"
        var $64=((($62) * ($63))&4294967295); //@line 1395 "arraymodule.c"
        var $65=((($64))|0)!=0; //@line 1395 "arraymodule.c"
        if ($65) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1395 "arraymodule.c"
      case 11: // $bb10
        var $66=HEAP[$self_addr]; //@line 1395 "arraymodule.c"
        var $67=$66; //@line 1395 "arraymodule.c"
        var $68=(($67+8)&4294967295); //@line 1395 "arraymodule.c"
        var $69=HEAP[$68]; //@line 1395 "arraymodule.c"
        var $70=HEAP[$n]; //@line 1395 "arraymodule.c"
        var $71=((($69) + ($70))&4294967295); //@line 1395 "arraymodule.c"
        var $72=HEAP[$itemsize]; //@line 1395 "arraymodule.c"
        var $73=((($71) * ($72))&4294967295); //@line 1395 "arraymodule.c"
        HEAP[$iftmp_273]=$73; //@line 1395 "arraymodule.c"
        __label__ = 13; break; //@line 1395 "arraymodule.c"
      case 12: // $bb11
        HEAP[$iftmp_273]=1; //@line 1395 "arraymodule.c"
        __label__ = 13; break; //@line 1395 "arraymodule.c"
      case 13: // $bb12
        var $74=HEAP[$item]; //@line 1395 "arraymodule.c"
        var $75=HEAP[$iftmp_273]; //@line 1395 "arraymodule.c"
        var $76=_realloc($74, $75); //@line 1395 "arraymodule.c"
        HEAP[$iftmp_270]=$76; //@line 1395 "arraymodule.c"
        __label__ = 15; break; //@line 1395 "arraymodule.c"
      case 14: // $bb13
        HEAP[$iftmp_270]=0; //@line 1395 "arraymodule.c"
        __label__ = 15; break; //@line 1395 "arraymodule.c"
      case 15: // $bb14
        var $77=HEAP[$iftmp_270]; //@line 1395 "arraymodule.c"
        HEAP[$iftmp_267]=$77; //@line 1395 "arraymodule.c"
        __label__ = 17; break; //@line 1395 "arraymodule.c"
      case 16: // $bb15
        HEAP[$iftmp_267]=0; //@line 1395 "arraymodule.c"
        __label__ = 17; break; //@line 1395 "arraymodule.c"
      case 17: // $bb16
        var $78=HEAP[$iftmp_267]; //@line 1395 "arraymodule.c"
        HEAP[$item]=$78; //@line 1395 "arraymodule.c"
        var $79=HEAP[$item]; //@line 1396 "arraymodule.c"
        var $80=($79)==0; //@line 1396 "arraymodule.c"
        if ($80) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1396 "arraymodule.c"
      case 18: // $bb17
        var $81=_PyErr_NoMemory(); //@line 1397 "arraymodule.c"
        HEAP[$0]=0; //@line 1398 "arraymodule.c"
        __label__ = 21; break; //@line 1398 "arraymodule.c"
      case 19: // $bb18
        var $82=HEAP[$self_addr]; //@line 1400 "arraymodule.c"
        var $83=(($82+12)&4294967295); //@line 1400 "arraymodule.c"
        var $84=HEAP[$item]; //@line 1400 "arraymodule.c"
        HEAP[$83]=$84; //@line 1400 "arraymodule.c"
        var $85=HEAP[$self_addr]; //@line 1401 "arraymodule.c"
        var $86=$85; //@line 1401 "arraymodule.c"
        var $87=HEAP[$self_addr]; //@line 1401 "arraymodule.c"
        var $88=$87; //@line 1401 "arraymodule.c"
        var $89=(($88+8)&4294967295); //@line 1401 "arraymodule.c"
        var $90=HEAP[$89]; //@line 1401 "arraymodule.c"
        var $91=HEAP[$n]; //@line 1401 "arraymodule.c"
        var $92=((($90) + ($91))&4294967295); //@line 1401 "arraymodule.c"
        var $93=(($86+8)&4294967295); //@line 1401 "arraymodule.c"
        HEAP[$93]=$92; //@line 1401 "arraymodule.c"
        var $94=HEAP[$self_addr]; //@line 1402 "arraymodule.c"
        var $95=$94; //@line 1402 "arraymodule.c"
        var $96=(($95+8)&4294967295); //@line 1402 "arraymodule.c"
        var $97=HEAP[$96]; //@line 1402 "arraymodule.c"
        var $98=HEAP[$self_addr]; //@line 1402 "arraymodule.c"
        var $99=(($98+16)&4294967295); //@line 1402 "arraymodule.c"
        HEAP[$99]=$97; //@line 1402 "arraymodule.c"
        var $100=HEAP[$n]; //@line 1403 "arraymodule.c"
        var $101=HEAP[$itemsize]; //@line 1403 "arraymodule.c"
        var $102=((($101) * ($100))&4294967295); //@line 1403 "arraymodule.c"
        var $103=HEAP[$str]; //@line 1403 "arraymodule.c"
        var $104=HEAP[$self_addr]; //@line 1403 "arraymodule.c"
        var $105=$104; //@line 1403 "arraymodule.c"
        var $106=(($105+8)&4294967295); //@line 1403 "arraymodule.c"
        var $107=HEAP[$106]; //@line 1403 "arraymodule.c"
        var $108=HEAP[$n]; //@line 1403 "arraymodule.c"
        var $109=((($107) - ($108))&4294967295); //@line 1403 "arraymodule.c"
        var $110=HEAP[$itemsize]; //@line 1403 "arraymodule.c"
        var $111=((($109) * ($110))&4294967295); //@line 1403 "arraymodule.c"
        var $112=HEAP[$item]; //@line 1403 "arraymodule.c"
        var $113=(($112+$111)&4294967295); //@line 1403 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($113, $103, $102, 1, 0); //@line 1403 "arraymodule.c"
        __label__ = 20; break; //@line 1403 "arraymodule.c"
      case 20: // $bb19
        var $114=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1406 "arraymodule.c"
        var $115=((($114) + 1)&4294967295); //@line 1406 "arraymodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$115; //@line 1406 "arraymodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1407 "arraymodule.c"
        __label__ = 21; break; //@line 1407 "arraymodule.c"
      case 21: // $bb20
        var $116=HEAP[$0]; //@line 1382 "arraymodule.c"
        HEAP[$retval]=$116; //@line 1382 "arraymodule.c"
        __label__ = 22; break; //@line 1382 "arraymodule.c"
      case 22: // $return
        var $retval21=HEAP[$retval]; //@line 1382 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 1382 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_tostring($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $unused_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$unused_addr]=$unused;
        var $1=HEAP[$self_addr]; //@line 1420 "arraymodule.c"
        var $2=(($1+8)&4294967295); //@line 1420 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1420 "arraymodule.c"
        var $4=HEAP[$self_addr]; //@line 1420 "arraymodule.c"
        var $5=(($4+20)&4294967295); //@line 1420 "arraymodule.c"
        var $6=HEAP[$5]; //@line 1420 "arraymodule.c"
        var $7=(($6+4)&4294967295); //@line 1420 "arraymodule.c"
        var $8=HEAP[$7]; //@line 1420 "arraymodule.c"
        var $9=((2147483647/((($8))|0))|0); //@line 1420 "arraymodule.c"
        var $10=((($3))|0) <= ((($9))|0); //@line 1420 "arraymodule.c"
        if ($10) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1420 "arraymodule.c"
      case 1: // $bb
        var $11=HEAP[$self_addr]; //@line 1421 "arraymodule.c"
        var $12=$11; //@line 1421 "arraymodule.c"
        var $13=(($12+8)&4294967295); //@line 1421 "arraymodule.c"
        var $14=HEAP[$13]; //@line 1421 "arraymodule.c"
        var $15=HEAP[$self_addr]; //@line 1421 "arraymodule.c"
        var $16=(($15+20)&4294967295); //@line 1421 "arraymodule.c"
        var $17=HEAP[$16]; //@line 1421 "arraymodule.c"
        var $18=(($17+4)&4294967295); //@line 1421 "arraymodule.c"
        var $19=HEAP[$18]; //@line 1421 "arraymodule.c"
        var $20=((($14) * ($19))&4294967295); //@line 1421 "arraymodule.c"
        var $21=HEAP[$self_addr]; //@line 1421 "arraymodule.c"
        var $22=(($21+12)&4294967295); //@line 1421 "arraymodule.c"
        var $23=HEAP[$22]; //@line 1421 "arraymodule.c"
        var $24=_PyString_FromStringAndSize($23, $20); //@line 1421 "arraymodule.c"
        HEAP[$0]=$24; //@line 1421 "arraymodule.c"
        __label__ = 3; break; //@line 1421 "arraymodule.c"
      case 2: // $bb1
        var $25=_PyErr_NoMemory(); //@line 1424 "arraymodule.c"
        HEAP[$0]=$25; //@line 1424 "arraymodule.c"
        __label__ = 3; break; //@line 1424 "arraymodule.c"
      case 3: // $bb2
        var $26=HEAP[$0]; //@line 1421 "arraymodule.c"
        HEAP[$retval]=$26; //@line 1421 "arraymodule.c"
        __label__ = 4; break; //@line 1421 "arraymodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1421 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1421 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_fromunicode($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_297=__stackBase__+12;
        var $iftmp_294=__stackBase__+16;
        var $iftmp_291=__stackBase__+20;
        var $0=__stackBase__+24;
        var $ustr=__stackBase__+28;
        var $n=__stackBase__+32;
        var $item=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1443 "arraymodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str42)&4294967295), $ustr, $n); //@line 1443 "arraymodule.c"
        var $3=((($2))|0)==0; //@line 1443 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1443 "arraymodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1444 "arraymodule.c"
        __label__ = 20; break; //@line 1444 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 1445 "arraymodule.c"
        var $5=(($4+20)&4294967295); //@line 1445 "arraymodule.c"
        var $6=HEAP[$5]; //@line 1445 "arraymodule.c"
        var $7=(($6)&4294967295); //@line 1445 "arraymodule.c"
        var $8=HEAP[$7]; //@line 1445 "arraymodule.c"
        var $9=((($8))|0)!=117; //@line 1445 "arraymodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1445 "arraymodule.c"
      case 3: // $bb2
        var $10=HEAP[_PyExc_ValueError]; //@line 1446 "arraymodule.c"
        _PyErr_SetString($10, ((__str43)&4294967295)); //@line 1446 "arraymodule.c"
        HEAP[$0]=0; //@line 1449 "arraymodule.c"
        __label__ = 20; break; //@line 1449 "arraymodule.c"
      case 4: // $bb3
        var $11=HEAP[$n]; //@line 1451 "arraymodule.c"
        var $12=((($11))|0) > 0; //@line 1451 "arraymodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 19; break; } //@line 1451 "arraymodule.c"
      case 5: // $bb4
        var $13=HEAP[$self_addr]; //@line 1452 "arraymodule.c"
        var $14=(($13+12)&4294967295); //@line 1452 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1452 "arraymodule.c"
        var $16=$15; //@line 1452 "arraymodule.c"
        HEAP[$item]=$16; //@line 1452 "arraymodule.c"
        var $17=HEAP[$self_addr]; //@line 1453 "arraymodule.c"
        var $18=$17; //@line 1453 "arraymodule.c"
        var $19=(($18+8)&4294967295); //@line 1453 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1453 "arraymodule.c"
        var $21=HEAP[$n]; //@line 1453 "arraymodule.c"
        var $22=((2147483647 - ($21))&4294967295); //@line 1453 "arraymodule.c"
        var $23=((($20))|0) > ((($22))|0); //@line 1453 "arraymodule.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1453 "arraymodule.c"
      case 6: // $bb5
        var $24=_PyErr_NoMemory(); //@line 1454 "arraymodule.c"
        HEAP[$0]=$24; //@line 1454 "arraymodule.c"
        __label__ = 20; break; //@line 1454 "arraymodule.c"
      case 7: // $bb6
        var $25=HEAP[$self_addr]; //@line 1456 "arraymodule.c"
        var $26=$25; //@line 1456 "arraymodule.c"
        var $27=(($26+8)&4294967295); //@line 1456 "arraymodule.c"
        var $28=HEAP[$27]; //@line 1456 "arraymodule.c"
        var $29=HEAP[$n]; //@line 1456 "arraymodule.c"
        var $30=((($28) + ($29))&4294967295); //@line 1456 "arraymodule.c"
        var $31=((($30))>>>0) <= 1073741823; //@line 1456 "arraymodule.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 15; break; } //@line 1456 "arraymodule.c"
      case 8: // $bb7
        var $32=HEAP[$self_addr]; //@line 1456 "arraymodule.c"
        var $33=$32; //@line 1456 "arraymodule.c"
        var $34=(($33+8)&4294967295); //@line 1456 "arraymodule.c"
        var $35=HEAP[$34]; //@line 1456 "arraymodule.c"
        var $36=HEAP[$n]; //@line 1456 "arraymodule.c"
        var $37=((($35) + ($36))&4294967295); //@line 1456 "arraymodule.c"
        var $38=((($37) * 2)&4294967295); //@line 1456 "arraymodule.c"
        var $39=((($38))|0) >= 0; //@line 1456 "arraymodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 1456 "arraymodule.c"
      case 9: // $bb8
        var $40=HEAP[$self_addr]; //@line 1456 "arraymodule.c"
        var $41=$40; //@line 1456 "arraymodule.c"
        var $42=(($41+8)&4294967295); //@line 1456 "arraymodule.c"
        var $43=HEAP[$42]; //@line 1456 "arraymodule.c"
        var $44=HEAP[$n]; //@line 1456 "arraymodule.c"
        var $45=((($43) + ($44))&4294967295); //@line 1456 "arraymodule.c"
        var $46=((($45) * 2)&4294967295); //@line 1456 "arraymodule.c"
        var $47=((($46))|0)!=0; //@line 1456 "arraymodule.c"
        if ($47) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1456 "arraymodule.c"
      case 10: // $bb9
        var $48=HEAP[$self_addr]; //@line 1456 "arraymodule.c"
        var $49=$48; //@line 1456 "arraymodule.c"
        var $50=(($49+8)&4294967295); //@line 1456 "arraymodule.c"
        var $51=HEAP[$50]; //@line 1456 "arraymodule.c"
        var $52=HEAP[$n]; //@line 1456 "arraymodule.c"
        var $53=((($51) + ($52))&4294967295); //@line 1456 "arraymodule.c"
        var $54=((($53) * 2)&4294967295); //@line 1456 "arraymodule.c"
        HEAP[$iftmp_297]=$54; //@line 1456 "arraymodule.c"
        __label__ = 12; break; //@line 1456 "arraymodule.c"
      case 11: // $bb10
        HEAP[$iftmp_297]=1; //@line 1456 "arraymodule.c"
        __label__ = 12; break; //@line 1456 "arraymodule.c"
      case 12: // $bb11
        var $55=HEAP[$item]; //@line 1456 "arraymodule.c"
        var $56=$55; //@line 1456 "arraymodule.c"
        var $57=HEAP[$iftmp_297]; //@line 1456 "arraymodule.c"
        var $58=_realloc($56, $57); //@line 1456 "arraymodule.c"
        var $59=$58; //@line 1456 "arraymodule.c"
        HEAP[$iftmp_294]=$59; //@line 1456 "arraymodule.c"
        __label__ = 14; break; //@line 1456 "arraymodule.c"
      case 13: // $bb12
        HEAP[$iftmp_294]=0; //@line 1456 "arraymodule.c"
        __label__ = 14; break; //@line 1456 "arraymodule.c"
      case 14: // $bb13
        var $60=HEAP[$iftmp_294]; //@line 1456 "arraymodule.c"
        HEAP[$iftmp_291]=$60; //@line 1456 "arraymodule.c"
        __label__ = 16; break; //@line 1456 "arraymodule.c"
      case 15: // $bb14
        HEAP[$iftmp_291]=0; //@line 1456 "arraymodule.c"
        __label__ = 16; break; //@line 1456 "arraymodule.c"
      case 16: // $bb15
        var $61=HEAP[$iftmp_291]; //@line 1456 "arraymodule.c"
        HEAP[$item]=$61; //@line 1456 "arraymodule.c"
        var $62=HEAP[$item]; //@line 1457 "arraymodule.c"
        var $63=($62)==0; //@line 1457 "arraymodule.c"
        if ($63) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1457 "arraymodule.c"
      case 17: // $bb16
        var $64=_PyErr_NoMemory(); //@line 1458 "arraymodule.c"
        HEAP[$0]=0; //@line 1459 "arraymodule.c"
        __label__ = 20; break; //@line 1459 "arraymodule.c"
      case 18: // $bb17
        var $65=HEAP[$item]; //@line 1461 "arraymodule.c"
        var $66=$65; //@line 1461 "arraymodule.c"
        var $67=HEAP[$self_addr]; //@line 1461 "arraymodule.c"
        var $68=(($67+12)&4294967295); //@line 1461 "arraymodule.c"
        HEAP[$68]=$66; //@line 1461 "arraymodule.c"
        var $69=HEAP[$self_addr]; //@line 1462 "arraymodule.c"
        var $70=$69; //@line 1462 "arraymodule.c"
        var $71=HEAP[$self_addr]; //@line 1462 "arraymodule.c"
        var $72=$71; //@line 1462 "arraymodule.c"
        var $73=(($72+8)&4294967295); //@line 1462 "arraymodule.c"
        var $74=HEAP[$73]; //@line 1462 "arraymodule.c"
        var $75=HEAP[$n]; //@line 1462 "arraymodule.c"
        var $76=((($74) + ($75))&4294967295); //@line 1462 "arraymodule.c"
        var $77=(($70+8)&4294967295); //@line 1462 "arraymodule.c"
        HEAP[$77]=$76; //@line 1462 "arraymodule.c"
        var $78=HEAP[$self_addr]; //@line 1463 "arraymodule.c"
        var $79=$78; //@line 1463 "arraymodule.c"
        var $80=(($79+8)&4294967295); //@line 1463 "arraymodule.c"
        var $81=HEAP[$80]; //@line 1463 "arraymodule.c"
        var $82=HEAP[$self_addr]; //@line 1463 "arraymodule.c"
        var $83=(($82+16)&4294967295); //@line 1463 "arraymodule.c"
        HEAP[$83]=$81; //@line 1463 "arraymodule.c"
        var $84=HEAP[$n]; //@line 1464 "arraymodule.c"
        var $85=((($84) * 2)&4294967295); //@line 1464 "arraymodule.c"
        var $86=HEAP[$ustr]; //@line 1464 "arraymodule.c"
        var $87=HEAP[$self_addr]; //@line 1464 "arraymodule.c"
        var $88=$87; //@line 1464 "arraymodule.c"
        var $89=(($88+8)&4294967295); //@line 1464 "arraymodule.c"
        var $90=HEAP[$89]; //@line 1464 "arraymodule.c"
        var $91=HEAP[$item]; //@line 1464 "arraymodule.c"
        var $92=(($91+2*$90)&4294967295); //@line 1464 "arraymodule.c"
        var $93=HEAP[$n]; //@line 1464 "arraymodule.c"
        var $94=((0 - ($93))&4294967295); //@line 1464 "arraymodule.c"
        var $95=(($92+2*$94)&4294967295); //@line 1464 "arraymodule.c"
        var $96=$95; //@line 1464 "arraymodule.c"
        var $97=$86; //@line 1464 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($96, $97, $85, 1, 0); //@line 1464 "arraymodule.c"
        __label__ = 19; break; //@line 1464 "arraymodule.c"
      case 19: // $bb18
        var $98=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1468 "arraymodule.c"
        var $99=((($98) + 1)&4294967295); //@line 1468 "arraymodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$99; //@line 1468 "arraymodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1469 "arraymodule.c"
        __label__ = 20; break; //@line 1469 "arraymodule.c"
      case 20: // $bb19
        var $100=HEAP[$0]; //@line 1444 "arraymodule.c"
        HEAP[$retval]=$100; //@line 1444 "arraymodule.c"
        __label__ = 21; break; //@line 1444 "arraymodule.c"
      case 21: // $return
        var $retval20=HEAP[$retval]; //@line 1444 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 1444 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_tounicode($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $unused_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$unused_addr]=$unused;
        var $1=HEAP[$self_addr]; //@line 1484 "arraymodule.c"
        var $2=(($1+20)&4294967295); //@line 1484 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1484 "arraymodule.c"
        var $4=(($3)&4294967295); //@line 1484 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1484 "arraymodule.c"
        var $6=((($5))|0)!=117; //@line 1484 "arraymodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1484 "arraymodule.c"
      case 1: // $bb
        var $7=HEAP[_PyExc_ValueError]; //@line 1485 "arraymodule.c"
        _PyErr_SetString($7, ((__str44)&4294967295)); //@line 1485 "arraymodule.c"
        HEAP[$0]=0; //@line 1487 "arraymodule.c"
        __label__ = 3; break; //@line 1487 "arraymodule.c"
      case 2: // $bb1
        var $8=HEAP[$self_addr]; //@line 1489 "arraymodule.c"
        var $9=$8; //@line 1489 "arraymodule.c"
        var $10=(($9+8)&4294967295); //@line 1489 "arraymodule.c"
        var $11=HEAP[$10]; //@line 1489 "arraymodule.c"
        var $12=HEAP[$self_addr]; //@line 1489 "arraymodule.c"
        var $13=(($12+12)&4294967295); //@line 1489 "arraymodule.c"
        var $14=HEAP[$13]; //@line 1489 "arraymodule.c"
        var $15=$14; //@line 1489 "arraymodule.c"
        var $16=_PyUnicodeUCS2_FromUnicode($15, $11); //@line 1489 "arraymodule.c"
        HEAP[$0]=$16; //@line 1489 "arraymodule.c"
        __label__ = 3; break; //@line 1489 "arraymodule.c"
      case 3: // $bb2
        var $17=HEAP[$0]; //@line 1487 "arraymodule.c"
        HEAP[$retval]=$17; //@line 1487 "arraymodule.c"
        __label__ = 4; break; //@line 1487 "arraymodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1487 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1487 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_reduce($array) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $array_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $dict=__stackBase__+12;
        var $result=__stackBase__+16;
        var $list=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$array_addr]=$array;
        var $1=HEAP[$array_addr]; //@line 1507 "arraymodule.c"
        var $2=$1; //@line 1507 "arraymodule.c"
        var $3=_PyObject_GetAttrString($2, ((__str45)&4294967295)); //@line 1507 "arraymodule.c"
        HEAP[$dict]=$3; //@line 1507 "arraymodule.c"
        var $4=HEAP[$dict]; //@line 1508 "arraymodule.c"
        var $5=($4)==0; //@line 1508 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1508 "arraymodule.c"
      case 1: // $bb
        var $6=HEAP[_PyExc_AttributeError]; //@line 1509 "arraymodule.c"
        var $7=_PyErr_ExceptionMatches($6); //@line 1509 "arraymodule.c"
        var $8=((($7))|0)==0; //@line 1509 "arraymodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1509 "arraymodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1510 "arraymodule.c"
        __label__ = 13; break; //@line 1510 "arraymodule.c"
      case 3: // $bb2
        _PyErr_Clear(); //@line 1511 "arraymodule.c"
        HEAP[$dict]=__Py_NoneStruct; //@line 1512 "arraymodule.c"
        var $9=HEAP[$dict]; //@line 1513 "arraymodule.c"
        var $10=(($9)&4294967295); //@line 1513 "arraymodule.c"
        var $11=HEAP[$10]; //@line 1513 "arraymodule.c"
        var $12=((($11) + 1)&4294967295); //@line 1513 "arraymodule.c"
        var $13=HEAP[$dict]; //@line 1513 "arraymodule.c"
        var $14=(($13)&4294967295); //@line 1513 "arraymodule.c"
        HEAP[$14]=$12; //@line 1513 "arraymodule.c"
        __label__ = 4; break; //@line 1513 "arraymodule.c"
      case 4: // $bb3
        var $15=HEAP[$array_addr]; //@line 1521 "arraymodule.c"
        var $16=_array_tolist($15, 0); //@line 1521 "arraymodule.c"
        HEAP[$list]=$16; //@line 1521 "arraymodule.c"
        var $17=HEAP[$list]; //@line 1522 "arraymodule.c"
        var $18=($17)==0; //@line 1522 "arraymodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1522 "arraymodule.c"
      case 5: // $bb4
        var $19=HEAP[$dict]; //@line 1523 "arraymodule.c"
        var $20=(($19)&4294967295); //@line 1523 "arraymodule.c"
        var $21=HEAP[$20]; //@line 1523 "arraymodule.c"
        var $22=((($21) - 1)&4294967295); //@line 1523 "arraymodule.c"
        var $23=HEAP[$dict]; //@line 1523 "arraymodule.c"
        var $24=(($23)&4294967295); //@line 1523 "arraymodule.c"
        HEAP[$24]=$22; //@line 1523 "arraymodule.c"
        var $25=HEAP[$dict]; //@line 1523 "arraymodule.c"
        var $26=(($25)&4294967295); //@line 1523 "arraymodule.c"
        var $27=HEAP[$26]; //@line 1523 "arraymodule.c"
        var $28=((($27))|0)==0; //@line 1523 "arraymodule.c"
        if ($28) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1523 "arraymodule.c"
      case 6: // $bb5
        var $29=HEAP[$dict]; //@line 1523 "arraymodule.c"
        var $30=(($29+4)&4294967295); //@line 1523 "arraymodule.c"
        var $31=HEAP[$30]; //@line 1523 "arraymodule.c"
        var $32=(($31+24)&4294967295); //@line 1523 "arraymodule.c"
        var $33=HEAP[$32]; //@line 1523 "arraymodule.c"
        var $34=HEAP[$dict]; //@line 1523 "arraymodule.c"
        FUNCTION_TABLE[$33]($34); //@line 1523 "arraymodule.c"
        __label__ = 7; break; //@line 1523 "arraymodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 1524 "arraymodule.c"
        __label__ = 13; break; //@line 1524 "arraymodule.c"
      case 8: // $bb7
        var $35=HEAP[$array_addr]; //@line 1526 "arraymodule.c"
        var $36=(($35+20)&4294967295); //@line 1526 "arraymodule.c"
        var $37=HEAP[$36]; //@line 1526 "arraymodule.c"
        var $38=(($37)&4294967295); //@line 1526 "arraymodule.c"
        var $39=HEAP[$38]; //@line 1526 "arraymodule.c"
        var $40=HEAP[$array_addr]; //@line 1526 "arraymodule.c"
        var $41=$40; //@line 1526 "arraymodule.c"
        var $42=(($41+4)&4294967295); //@line 1526 "arraymodule.c"
        var $43=HEAP[$42]; //@line 1526 "arraymodule.c"
        var $44=HEAP[$list]; //@line 1526 "arraymodule.c"
        var $45=HEAP[$dict]; //@line 1526 "arraymodule.c"
        var $46=__Py_BuildValue_SizeT(((__str46)&4294967295), $43, $39, $44, $45); //@line 1526 "arraymodule.c"
        HEAP[$result]=$46; //@line 1526 "arraymodule.c"
        var $47=HEAP[$list]; //@line 1528 "arraymodule.c"
        var $48=(($47)&4294967295); //@line 1528 "arraymodule.c"
        var $49=HEAP[$48]; //@line 1528 "arraymodule.c"
        var $50=((($49) - 1)&4294967295); //@line 1528 "arraymodule.c"
        var $51=HEAP[$list]; //@line 1528 "arraymodule.c"
        var $52=(($51)&4294967295); //@line 1528 "arraymodule.c"
        HEAP[$52]=$50; //@line 1528 "arraymodule.c"
        var $53=HEAP[$list]; //@line 1528 "arraymodule.c"
        var $54=(($53)&4294967295); //@line 1528 "arraymodule.c"
        var $55=HEAP[$54]; //@line 1528 "arraymodule.c"
        var $56=((($55))|0)==0; //@line 1528 "arraymodule.c"
        if ($56) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1528 "arraymodule.c"
      case 9: // $bb8
        var $57=HEAP[$list]; //@line 1528 "arraymodule.c"
        var $58=(($57+4)&4294967295); //@line 1528 "arraymodule.c"
        var $59=HEAP[$58]; //@line 1528 "arraymodule.c"
        var $60=(($59+24)&4294967295); //@line 1528 "arraymodule.c"
        var $61=HEAP[$60]; //@line 1528 "arraymodule.c"
        var $62=HEAP[$list]; //@line 1528 "arraymodule.c"
        FUNCTION_TABLE[$61]($62); //@line 1528 "arraymodule.c"
        __label__ = 10; break; //@line 1528 "arraymodule.c"
      case 10: // $bb9
        var $63=HEAP[$dict]; //@line 1529 "arraymodule.c"
        var $64=(($63)&4294967295); //@line 1529 "arraymodule.c"
        var $65=HEAP[$64]; //@line 1529 "arraymodule.c"
        var $66=((($65) - 1)&4294967295); //@line 1529 "arraymodule.c"
        var $67=HEAP[$dict]; //@line 1529 "arraymodule.c"
        var $68=(($67)&4294967295); //@line 1529 "arraymodule.c"
        HEAP[$68]=$66; //@line 1529 "arraymodule.c"
        var $69=HEAP[$dict]; //@line 1529 "arraymodule.c"
        var $70=(($69)&4294967295); //@line 1529 "arraymodule.c"
        var $71=HEAP[$70]; //@line 1529 "arraymodule.c"
        var $72=((($71))|0)==0; //@line 1529 "arraymodule.c"
        if ($72) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1529 "arraymodule.c"
      case 11: // $bb10
        var $73=HEAP[$dict]; //@line 1529 "arraymodule.c"
        var $74=(($73+4)&4294967295); //@line 1529 "arraymodule.c"
        var $75=HEAP[$74]; //@line 1529 "arraymodule.c"
        var $76=(($75+24)&4294967295); //@line 1529 "arraymodule.c"
        var $77=HEAP[$76]; //@line 1529 "arraymodule.c"
        var $78=HEAP[$dict]; //@line 1529 "arraymodule.c"
        FUNCTION_TABLE[$77]($78); //@line 1529 "arraymodule.c"
        __label__ = 12; break; //@line 1529 "arraymodule.c"
      case 12: // $bb11
        var $79=HEAP[$result]; //@line 1530 "arraymodule.c"
        HEAP[$0]=$79; //@line 1530 "arraymodule.c"
        __label__ = 13; break; //@line 1530 "arraymodule.c"
      case 13: // $bb12
        var $80=HEAP[$0]; //@line 1510 "arraymodule.c"
        HEAP[$retval]=$80; //@line 1510 "arraymodule.c"
        __label__ = 14; break; //@line 1510 "arraymodule.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 1510 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 1510 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_get_typecode($a, $closure) {
    var __stackBase__  = STACKTOP; STACKTOP += 17; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $closure_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $tc=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$closure_addr]=$closure;
        var $1=HEAP[$a_addr]; //@line 1538 "arraymodule.c"
        var $2=(($1+20)&4294967295); //@line 1538 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1538 "arraymodule.c"
        var $4=(($3)&4294967295); //@line 1538 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1538 "arraymodule.c"
        var $6=((($5)) & 255); //@line 1538 "arraymodule.c"
        HEAP[$tc]=$6; //@line 1538 "arraymodule.c"
        var $7=_PyString_FromStringAndSize($tc, 1); //@line 1539 "arraymodule.c"
        HEAP[$0]=$7; //@line 1539 "arraymodule.c"
        var $8=HEAP[$0]; //@line 1539 "arraymodule.c"
        HEAP[$retval]=$8; //@line 1539 "arraymodule.c"
        __label__ = 1; break; //@line 1539 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1539 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1539 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_get_itemsize($a, $closure) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $closure_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$closure_addr]=$closure;
        var $1=HEAP[$a_addr]; //@line 1545 "arraymodule.c"
        var $2=(($1+20)&4294967295); //@line 1545 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1545 "arraymodule.c"
        var $4=(($3+4)&4294967295); //@line 1545 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1545 "arraymodule.c"
        var $6=_PyInt_FromLong($5); //@line 1545 "arraymodule.c"
        HEAP[$0]=$6; //@line 1545 "arraymodule.c"
        var $7=HEAP[$0]; //@line 1545 "arraymodule.c"
        HEAP[$retval]=$7; //@line 1545 "arraymodule.c"
        __label__ = 1; break; //@line 1545 "arraymodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1545 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1545 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_repr($a) {
    var __stackBase__  = STACKTOP; STACKTOP += 285; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 285);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $buf=__stackBase__+12;
        var $typecode=__stackBase__+268;
        var $s=__stackBase__+269;
        var $t=__stackBase__+273;
        var $v=__stackBase__+277;
        var $len=__stackBase__+281;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$v]=0; //@line 1616 "arraymodule.c"
        var $1=HEAP[$a_addr]; //@line 1619 "arraymodule.c"
        var $2=$1; //@line 1619 "arraymodule.c"
        var $3=(($2+8)&4294967295); //@line 1619 "arraymodule.c"
        var $4=HEAP[$3]; //@line 1619 "arraymodule.c"
        HEAP[$len]=$4; //@line 1619 "arraymodule.c"
        var $5=HEAP[$a_addr]; //@line 1620 "arraymodule.c"
        var $6=(($5+20)&4294967295); //@line 1620 "arraymodule.c"
        var $7=HEAP[$6]; //@line 1620 "arraymodule.c"
        var $8=(($7)&4294967295); //@line 1620 "arraymodule.c"
        var $9=HEAP[$8]; //@line 1620 "arraymodule.c"
        var $10=((($9)) & 255); //@line 1620 "arraymodule.c"
        HEAP[$typecode]=$10; //@line 1620 "arraymodule.c"
        var $11=HEAP[$len]; //@line 1621 "arraymodule.c"
        var $12=((($11))|0)==0; //@line 1621 "arraymodule.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1621 "arraymodule.c"
      case 1: // $bb
        var $13=HEAP[$typecode]; //@line 1622 "arraymodule.c"
        var $14=reSign(($13), 8, 0); //@line 1622 "arraymodule.c"
        var $buf1=$buf; //@line 1622 "arraymodule.c"
        var $15=_PyOS_snprintf($buf1, 256, ((__str74)&4294967295), $14); //@line 1622 "arraymodule.c"
        var $buf2=$buf; //@line 1623 "arraymodule.c"
        var $16=_PyString_FromString($buf2); //@line 1623 "arraymodule.c"
        HEAP[$0]=$16; //@line 1623 "arraymodule.c"
        __label__ = 11; break; //@line 1623 "arraymodule.c"
      case 2: // $bb3
        var $17=HEAP[$typecode]; //@line 1626 "arraymodule.c"
        var $18=reSign(($17), 8, 0)==99; //@line 1626 "arraymodule.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1626 "arraymodule.c"
      case 3: // $bb4
        var $19=HEAP[$a_addr]; //@line 1627 "arraymodule.c"
        var $20=_array_tostring($19, 0); //@line 1627 "arraymodule.c"
        HEAP[$v]=$20; //@line 1627 "arraymodule.c"
        __label__ = 7; break; //@line 1627 "arraymodule.c"
      case 4: // $bb5
        var $21=HEAP[$typecode]; //@line 1629 "arraymodule.c"
        var $22=reSign(($21), 8, 0)==117; //@line 1629 "arraymodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1629 "arraymodule.c"
      case 5: // $bb6
        var $23=HEAP[$a_addr]; //@line 1630 "arraymodule.c"
        var $24=_array_tounicode($23, 0); //@line 1630 "arraymodule.c"
        HEAP[$v]=$24; //@line 1630 "arraymodule.c"
        __label__ = 7; break; //@line 1630 "arraymodule.c"
      case 6: // $bb7
        var $25=HEAP[$a_addr]; //@line 1633 "arraymodule.c"
        var $26=_array_tolist($25, 0); //@line 1633 "arraymodule.c"
        HEAP[$v]=$26; //@line 1633 "arraymodule.c"
        __label__ = 7; break; //@line 1633 "arraymodule.c"
      case 7: // $bb8
        var $27=HEAP[$v]; //@line 1634 "arraymodule.c"
        var $28=_PyObject_Repr($27); //@line 1634 "arraymodule.c"
        HEAP[$t]=$28; //@line 1634 "arraymodule.c"
        var $29=HEAP[$v]; //@line 1635 "arraymodule.c"
        var $30=($29)!=0; //@line 1635 "arraymodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 1635 "arraymodule.c"
      case 8: // $bb9
        var $31=HEAP[$v]; //@line 1635 "arraymodule.c"
        var $32=(($31)&4294967295); //@line 1635 "arraymodule.c"
        var $33=HEAP[$32]; //@line 1635 "arraymodule.c"
        var $34=((($33) - 1)&4294967295); //@line 1635 "arraymodule.c"
        var $35=HEAP[$v]; //@line 1635 "arraymodule.c"
        var $36=(($35)&4294967295); //@line 1635 "arraymodule.c"
        HEAP[$36]=$34; //@line 1635 "arraymodule.c"
        var $37=HEAP[$v]; //@line 1635 "arraymodule.c"
        var $38=(($37)&4294967295); //@line 1635 "arraymodule.c"
        var $39=HEAP[$38]; //@line 1635 "arraymodule.c"
        var $40=((($39))|0)==0; //@line 1635 "arraymodule.c"
        if ($40) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1635 "arraymodule.c"
      case 9: // $bb10
        var $41=HEAP[$v]; //@line 1635 "arraymodule.c"
        var $42=(($41+4)&4294967295); //@line 1635 "arraymodule.c"
        var $43=HEAP[$42]; //@line 1635 "arraymodule.c"
        var $44=(($43+24)&4294967295); //@line 1635 "arraymodule.c"
        var $45=HEAP[$44]; //@line 1635 "arraymodule.c"
        var $46=HEAP[$v]; //@line 1635 "arraymodule.c"
        FUNCTION_TABLE[$45]($46); //@line 1635 "arraymodule.c"
        __label__ = 10; break; //@line 1635 "arraymodule.c"
      case 10: // $bb11
        var $47=HEAP[$typecode]; //@line 1637 "arraymodule.c"
        var $48=reSign(($47), 8, 0); //@line 1637 "arraymodule.c"
        var $buf12=$buf; //@line 1637 "arraymodule.c"
        var $49=_PyOS_snprintf($buf12, 256, ((__str75)&4294967295), $48); //@line 1637 "arraymodule.c"
        var $buf13=$buf; //@line 1638 "arraymodule.c"
        var $50=_PyString_FromString($buf13); //@line 1638 "arraymodule.c"
        HEAP[$s]=$50; //@line 1638 "arraymodule.c"
        var $51=HEAP[$t]; //@line 1639 "arraymodule.c"
        _PyString_ConcatAndDel($s, $51); //@line 1639 "arraymodule.c"
        var $52=_PyString_FromString(((__str76)&4294967295)); //@line 1640 "arraymodule.c"
        _PyString_ConcatAndDel($s, $52); //@line 1640 "arraymodule.c"
        var $53=HEAP[$s]; //@line 1641 "arraymodule.c"
        HEAP[$0]=$53; //@line 1641 "arraymodule.c"
        __label__ = 11; break; //@line 1641 "arraymodule.c"
      case 11: // $bb14
        var $54=HEAP[$0]; //@line 1623 "arraymodule.c"
        HEAP[$retval]=$54; //@line 1623 "arraymodule.c"
        __label__ = 12; break; //@line 1623 "arraymodule.c"
      case 12: // $return
        var $retval15=HEAP[$retval]; //@line 1623 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 1623 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_subscr($self, $item) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $item_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $start=__stackBase__+20;
        var $stop=__stackBase__+24;
        var $step=__stackBase__+28;
        var $slicelength=__stackBase__+32;
        var $cur=__stackBase__+36;
        var $i10=__stackBase__+40;
        var $result=__stackBase__+44;
        var $ar=__stackBase__+48;
        var $itemsize=__stackBase__+52;
        var $result16=__stackBase__+56;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$item_addr]=$item;
        var $1=HEAP[$item_addr]; //@line 1647 "arraymodule.c"
        var $2=(($1+4)&4294967295); //@line 1647 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1647 "arraymodule.c"
        var $4=(($3+48)&4294967295); //@line 1647 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1647 "arraymodule.c"
        var $6=($5)==0; //@line 1647 "arraymodule.c"
        if ($6) { __label__ = 9; break; } else { __label__ = 1; break; } //@line 1647 "arraymodule.c"
      case 1: // $bb
        var $7=HEAP[$item_addr]; //@line 1647 "arraymodule.c"
        var $8=(($7+4)&4294967295); //@line 1647 "arraymodule.c"
        var $9=HEAP[$8]; //@line 1647 "arraymodule.c"
        var $10=(($9+84)&4294967295); //@line 1647 "arraymodule.c"
        var $11=HEAP[$10]; //@line 1647 "arraymodule.c"
        var $12=($11) & 131072; //@line 1647 "arraymodule.c"
        var $13=((($12))|0)==0; //@line 1647 "arraymodule.c"
        if ($13) { __label__ = 9; break; } else { __label__ = 2; break; } //@line 1647 "arraymodule.c"
      case 2: // $bb1
        var $14=HEAP[$item_addr]; //@line 1647 "arraymodule.c"
        var $15=(($14+4)&4294967295); //@line 1647 "arraymodule.c"
        var $16=HEAP[$15]; //@line 1647 "arraymodule.c"
        var $17=(($16+48)&4294967295); //@line 1647 "arraymodule.c"
        var $18=HEAP[$17]; //@line 1647 "arraymodule.c"
        var $19=(($18+152)&4294967295); //@line 1647 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1647 "arraymodule.c"
        var $21=($20)==0; //@line 1647 "arraymodule.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 3; break; } //@line 1647 "arraymodule.c"
      case 3: // $bb2
        var $22=HEAP[_PyExc_IndexError]; //@line 1648 "arraymodule.c"
        var $23=HEAP[$item_addr]; //@line 1648 "arraymodule.c"
        var $24=_PyNumber_AsSsize_t($23, $22); //@line 1648 "arraymodule.c"
        HEAP[$i]=$24; //@line 1648 "arraymodule.c"
        var $25=HEAP[$i]; //@line 1649 "arraymodule.c"
        var $26=((($25))|0)==-1; //@line 1649 "arraymodule.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1649 "arraymodule.c"
      case 4: // $bb3
        var $27=_PyErr_Occurred(); //@line 1649 "arraymodule.c"
        var $28=($27)!=0; //@line 1649 "arraymodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1649 "arraymodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1650 "arraymodule.c"
        __label__ = 25; break; //@line 1650 "arraymodule.c"
      case 6: // $bb5
        var $29=HEAP[$i]; //@line 1652 "arraymodule.c"
        var $30=((($29))|0) < 0; //@line 1652 "arraymodule.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1652 "arraymodule.c"
      case 7: // $bb6
        var $31=HEAP[$self_addr]; //@line 1653 "arraymodule.c"
        var $32=$31; //@line 1653 "arraymodule.c"
        var $33=(($32+8)&4294967295); //@line 1653 "arraymodule.c"
        var $34=HEAP[$33]; //@line 1653 "arraymodule.c"
        var $35=HEAP[$i]; //@line 1653 "arraymodule.c"
        var $36=((($34) + ($35))&4294967295); //@line 1653 "arraymodule.c"
        HEAP[$i]=$36; //@line 1653 "arraymodule.c"
        __label__ = 8; break; //@line 1653 "arraymodule.c"
      case 8: // $bb7
        var $37=HEAP[$self_addr]; //@line 1654 "arraymodule.c"
        var $38=HEAP[$i]; //@line 1654 "arraymodule.c"
        var $39=_array_item($37, $38); //@line 1654 "arraymodule.c"
        HEAP[$0]=$39; //@line 1654 "arraymodule.c"
        __label__ = 25; break; //@line 1654 "arraymodule.c"
      case 9: // $bb8
        var $40=HEAP[$item_addr]; //@line 1656 "arraymodule.c"
        var $41=(($40+4)&4294967295); //@line 1656 "arraymodule.c"
        var $42=HEAP[$41]; //@line 1656 "arraymodule.c"
        var $43=($42)==(_PySlice_Type); //@line 1656 "arraymodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 24; break; } //@line 1656 "arraymodule.c"
      case 10: // $bb9
        var $44=HEAP[$self_addr]; //@line 1660 "arraymodule.c"
        var $45=(($44+20)&4294967295); //@line 1660 "arraymodule.c"
        var $46=HEAP[$45]; //@line 1660 "arraymodule.c"
        var $47=(($46+4)&4294967295); //@line 1660 "arraymodule.c"
        var $48=HEAP[$47]; //@line 1660 "arraymodule.c"
        HEAP[$itemsize]=$48; //@line 1660 "arraymodule.c"
        var $49=HEAP[$self_addr]; //@line 1662 "arraymodule.c"
        var $50=$49; //@line 1662 "arraymodule.c"
        var $51=(($50+8)&4294967295); //@line 1662 "arraymodule.c"
        var $52=HEAP[$51]; //@line 1662 "arraymodule.c"
        var $53=HEAP[$item_addr]; //@line 1662 "arraymodule.c"
        var $54=$53; //@line 1662 "arraymodule.c"
        var $55=_PySlice_GetIndicesEx($54, $52, $start, $stop, $step, $slicelength); //@line 1662 "arraymodule.c"
        var $56=((($55))|0) < 0; //@line 1662 "arraymodule.c"
        if ($56) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1662 "arraymodule.c"
      case 11: // $bb11
        HEAP[$0]=0; //@line 1664 "arraymodule.c"
        __label__ = 25; break; //@line 1664 "arraymodule.c"
      case 12: // $bb12
        var $57=HEAP[$slicelength]; //@line 1667 "arraymodule.c"
        var $58=((($57))|0) <= 0; //@line 1667 "arraymodule.c"
        if ($58) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1667 "arraymodule.c"
      case 13: // $bb13
        var $59=HEAP[$self_addr]; //@line 1668 "arraymodule.c"
        var $60=(($59+20)&4294967295); //@line 1668 "arraymodule.c"
        var $61=HEAP[$60]; //@line 1668 "arraymodule.c"
        var $62=_newarrayobject(_Arraytype, 0, $61); //@line 1668 "arraymodule.c"
        HEAP[$0]=$62; //@line 1668 "arraymodule.c"
        __label__ = 25; break; //@line 1668 "arraymodule.c"
      case 14: // $bb14
        var $63=HEAP[$step]; //@line 1670 "arraymodule.c"
        var $64=((($63))|0)==1; //@line 1670 "arraymodule.c"
        if ($64) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 1670 "arraymodule.c"
      case 15: // $bb15
        var $65=HEAP[$self_addr]; //@line 1672 "arraymodule.c"
        var $66=(($65+20)&4294967295); //@line 1672 "arraymodule.c"
        var $67=HEAP[$66]; //@line 1672 "arraymodule.c"
        var $68=HEAP[$slicelength]; //@line 1672 "arraymodule.c"
        var $69=_newarrayobject(_Arraytype, $68, $67); //@line 1672 "arraymodule.c"
        HEAP[$result16]=$69; //@line 1672 "arraymodule.c"
        var $70=HEAP[$result16]; //@line 1673 "arraymodule.c"
        var $71=($70)==0; //@line 1673 "arraymodule.c"
        if ($71) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1673 "arraymodule.c"
      case 16: // $bb17
        HEAP[$0]=0; //@line 1674 "arraymodule.c"
        __label__ = 25; break; //@line 1674 "arraymodule.c"
      case 17: // $bb18
        var $72=HEAP[$slicelength]; //@line 1675 "arraymodule.c"
        var $73=HEAP[$itemsize]; //@line 1675 "arraymodule.c"
        var $74=((($72) * ($73))&4294967295); //@line 1675 "arraymodule.c"
        var $75=HEAP[$self_addr]; //@line 1675 "arraymodule.c"
        var $76=(($75+12)&4294967295); //@line 1675 "arraymodule.c"
        var $77=HEAP[$76]; //@line 1675 "arraymodule.c"
        var $78=HEAP[$start]; //@line 1675 "arraymodule.c"
        var $79=HEAP[$itemsize]; //@line 1675 "arraymodule.c"
        var $80=((($78) * ($79))&4294967295); //@line 1675 "arraymodule.c"
        var $81=(($77+$80)&4294967295); //@line 1675 "arraymodule.c"
        var $82=HEAP[$result16]; //@line 1675 "arraymodule.c"
        var $83=$82; //@line 1675 "arraymodule.c"
        var $84=(($83+12)&4294967295); //@line 1675 "arraymodule.c"
        var $85=HEAP[$84]; //@line 1675 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($85, $81, $74, 1, 0); //@line 1675 "arraymodule.c"
        var $86=HEAP[$result16]; //@line 1678 "arraymodule.c"
        HEAP[$0]=$86; //@line 1678 "arraymodule.c"
        __label__ = 25; break; //@line 1678 "arraymodule.c"
      case 18: // $bb19
        var $87=HEAP[$self_addr]; //@line 1681 "arraymodule.c"
        var $88=(($87+20)&4294967295); //@line 1681 "arraymodule.c"
        var $89=HEAP[$88]; //@line 1681 "arraymodule.c"
        var $90=HEAP[$slicelength]; //@line 1681 "arraymodule.c"
        var $91=_newarrayobject(_Arraytype, $90, $89); //@line 1681 "arraymodule.c"
        HEAP[$result]=$91; //@line 1681 "arraymodule.c"
        var $92=HEAP[$result]; //@line 1682 "arraymodule.c"
        var $93=($92)==0; //@line 1682 "arraymodule.c"
        if ($93) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1682 "arraymodule.c"
      case 19: // $bb20
        HEAP[$0]=0; //@line 1682 "arraymodule.c"
        __label__ = 25; break; //@line 1682 "arraymodule.c"
      case 20: // $bb21
        var $94=HEAP[$result]; //@line 1684 "arraymodule.c"
        var $95=$94; //@line 1684 "arraymodule.c"
        HEAP[$ar]=$95; //@line 1684 "arraymodule.c"
        var $96=HEAP[$start]; //@line 1686 "arraymodule.c"
        HEAP[$cur]=$96; //@line 1686 "arraymodule.c"
        HEAP[$i10]=0; //@line 1686 "arraymodule.c"
        __label__ = 22; break; //@line 1686 "arraymodule.c"
      case 21: // $bb22
        var $97=HEAP[$itemsize]; //@line 1688 "arraymodule.c"
        var $98=HEAP[$self_addr]; //@line 1688 "arraymodule.c"
        var $99=(($98+12)&4294967295); //@line 1688 "arraymodule.c"
        var $100=HEAP[$99]; //@line 1688 "arraymodule.c"
        var $101=HEAP[$cur]; //@line 1688 "arraymodule.c"
        var $102=HEAP[$itemsize]; //@line 1688 "arraymodule.c"
        var $103=((($101) * ($102))&4294967295); //@line 1688 "arraymodule.c"
        var $104=(($100+$103)&4294967295); //@line 1688 "arraymodule.c"
        var $105=HEAP[$ar]; //@line 1688 "arraymodule.c"
        var $106=(($105+12)&4294967295); //@line 1688 "arraymodule.c"
        var $107=HEAP[$106]; //@line 1688 "arraymodule.c"
        var $108=HEAP[$i10]; //@line 1688 "arraymodule.c"
        var $109=HEAP[$itemsize]; //@line 1688 "arraymodule.c"
        var $110=((($108) * ($109))&4294967295); //@line 1688 "arraymodule.c"
        var $111=(($107+$110)&4294967295); //@line 1688 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($111, $104, $97, 1, 0); //@line 1688 "arraymodule.c"
        var $112=HEAP[$step]; //@line 1687 "arraymodule.c"
        var $113=HEAP[$cur]; //@line 1687 "arraymodule.c"
        var $114=((($113) + ($112))&4294967295); //@line 1687 "arraymodule.c"
        HEAP[$cur]=$114; //@line 1687 "arraymodule.c"
        var $115=HEAP[$i10]; //@line 1687 "arraymodule.c"
        var $116=((($115) + 1)&4294967295); //@line 1687 "arraymodule.c"
        HEAP[$i10]=$116; //@line 1687 "arraymodule.c"
        __label__ = 22; break; //@line 1687 "arraymodule.c"
      case 22: // $bb23
        var $117=HEAP[$slicelength]; //@line 1686 "arraymodule.c"
        var $118=HEAP[$i10]; //@line 1686 "arraymodule.c"
        var $119=((($118))|0) < ((($117))|0); //@line 1686 "arraymodule.c"
        if ($119) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 1686 "arraymodule.c"
      case 23: // $bb24
        var $120=HEAP[$result]; //@line 1693 "arraymodule.c"
        HEAP[$0]=$120; //@line 1693 "arraymodule.c"
        __label__ = 25; break; //@line 1693 "arraymodule.c"
      case 24: // $bb25
        var $121=HEAP[_PyExc_TypeError]; //@line 1697 "arraymodule.c"
        _PyErr_SetString($121, ((__str77)&4294967295)); //@line 1697 "arraymodule.c"
        HEAP[$0]=0; //@line 1699 "arraymodule.c"
        __label__ = 25; break; //@line 1699 "arraymodule.c"
      case 25: // $bb26
        var $122=HEAP[$0]; //@line 1650 "arraymodule.c"
        HEAP[$retval]=$122; //@line 1650 "arraymodule.c"
        __label__ = 26; break; //@line 1650 "arraymodule.c"
      case 26: // $return
        var $retval27=HEAP[$retval]; //@line 1650 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 1650 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_ass_subscr($self, $item, $value) {
    var __stackBase__  = STACKTOP; STACKTOP += 76; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $item_addr=__stackBase__+4;
        var $value_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $start=__stackBase__+20;
        var $stop=__stackBase__+24;
        var $step=__stackBase__+28;
        var $slicelength=__stackBase__+32;
        var $needed=__stackBase__+36;
        var $other=__stackBase__+40;
        var $itemsize=__stackBase__+44;
        var $i=__stackBase__+48;
        var $ret=__stackBase__+52;
        var $cur=__stackBase__+56;
        var $i51=__stackBase__+60;
        var $lim=__stackBase__+64;
        var $cur64=__stackBase__+68;
        var $i65=__stackBase__+72;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$item_addr]=$item;
        HEAP[$value_addr]=$value;
        var $1=HEAP[$item_addr]; //@line 1710 "arraymodule.c"
        var $2=(($1+4)&4294967295); //@line 1710 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1710 "arraymodule.c"
        var $4=(($3+48)&4294967295); //@line 1710 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1710 "arraymodule.c"
        var $6=($5)==0; //@line 1710 "arraymodule.c"
        if ($6) { __label__ = 14; break; } else { __label__ = 1; break; } //@line 1710 "arraymodule.c"
      case 1: // $bb
        var $7=HEAP[$item_addr]; //@line 1710 "arraymodule.c"
        var $8=(($7+4)&4294967295); //@line 1710 "arraymodule.c"
        var $9=HEAP[$8]; //@line 1710 "arraymodule.c"
        var $10=(($9+84)&4294967295); //@line 1710 "arraymodule.c"
        var $11=HEAP[$10]; //@line 1710 "arraymodule.c"
        var $12=($11) & 131072; //@line 1710 "arraymodule.c"
        var $13=((($12))|0)==0; //@line 1710 "arraymodule.c"
        if ($13) { __label__ = 14; break; } else { __label__ = 2; break; } //@line 1710 "arraymodule.c"
      case 2: // $bb1
        var $14=HEAP[$item_addr]; //@line 1710 "arraymodule.c"
        var $15=(($14+4)&4294967295); //@line 1710 "arraymodule.c"
        var $16=HEAP[$15]; //@line 1710 "arraymodule.c"
        var $17=(($16+48)&4294967295); //@line 1710 "arraymodule.c"
        var $18=HEAP[$17]; //@line 1710 "arraymodule.c"
        var $19=(($18+152)&4294967295); //@line 1710 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1710 "arraymodule.c"
        var $21=($20)==0; //@line 1710 "arraymodule.c"
        if ($21) { __label__ = 14; break; } else { __label__ = 3; break; } //@line 1710 "arraymodule.c"
      case 3: // $bb2
        var $22=HEAP[_PyExc_IndexError]; //@line 1711 "arraymodule.c"
        var $23=HEAP[$item_addr]; //@line 1711 "arraymodule.c"
        var $24=_PyNumber_AsSsize_t($23, $22); //@line 1711 "arraymodule.c"
        HEAP[$i]=$24; //@line 1711 "arraymodule.c"
        var $25=HEAP[$i]; //@line 1713 "arraymodule.c"
        var $26=((($25))|0)==-1; //@line 1713 "arraymodule.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1713 "arraymodule.c"
      case 4: // $bb3
        var $27=_PyErr_Occurred(); //@line 1713 "arraymodule.c"
        var $28=($27)!=0; //@line 1713 "arraymodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1713 "arraymodule.c"
      case 5: // $bb4
        HEAP[$0]=-1; //@line 1714 "arraymodule.c"
        __label__ = 69; break; //@line 1714 "arraymodule.c"
      case 6: // $bb5
        var $29=HEAP[$i]; //@line 1715 "arraymodule.c"
        var $30=((($29))|0) < 0; //@line 1715 "arraymodule.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1715 "arraymodule.c"
      case 7: // $bb6
        var $31=HEAP[$self_addr]; //@line 1716 "arraymodule.c"
        var $32=$31; //@line 1716 "arraymodule.c"
        var $33=(($32+8)&4294967295); //@line 1716 "arraymodule.c"
        var $34=HEAP[$33]; //@line 1716 "arraymodule.c"
        var $35=HEAP[$i]; //@line 1716 "arraymodule.c"
        var $36=((($34) + ($35))&4294967295); //@line 1716 "arraymodule.c"
        HEAP[$i]=$36; //@line 1716 "arraymodule.c"
        __label__ = 8; break; //@line 1716 "arraymodule.c"
      case 8: // $bb7
        var $37=HEAP[$i]; //@line 1717 "arraymodule.c"
        var $38=((($37))|0) < 0; //@line 1717 "arraymodule.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 1717 "arraymodule.c"
      case 9: // $bb8
        var $39=HEAP[$self_addr]; //@line 1717 "arraymodule.c"
        var $40=$39; //@line 1717 "arraymodule.c"
        var $41=(($40+8)&4294967295); //@line 1717 "arraymodule.c"
        var $42=HEAP[$41]; //@line 1717 "arraymodule.c"
        var $43=HEAP[$i]; //@line 1717 "arraymodule.c"
        var $44=((($42))|0) <= ((($43))|0); //@line 1717 "arraymodule.c"
        if ($44) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1717 "arraymodule.c"
      case 10: // $bb9
        var $45=HEAP[_PyExc_IndexError]; //@line 1718 "arraymodule.c"
        _PyErr_SetString($45, ((__str21)&4294967295)); //@line 1718 "arraymodule.c"
        HEAP[$0]=-1; //@line 1720 "arraymodule.c"
        __label__ = 69; break; //@line 1720 "arraymodule.c"
      case 11: // $bb10
        var $46=HEAP[$value_addr]; //@line 1722 "arraymodule.c"
        var $47=($46)==0; //@line 1722 "arraymodule.c"
        if ($47) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1722 "arraymodule.c"
      case 12: // $bb11
        var $48=HEAP[$i]; //@line 1724 "arraymodule.c"
        HEAP[$start]=$48; //@line 1724 "arraymodule.c"
        var $49=HEAP[$i]; //@line 1725 "arraymodule.c"
        var $50=((($49) + 1)&4294967295); //@line 1725 "arraymodule.c"
        HEAP[$stop]=$50; //@line 1725 "arraymodule.c"
        HEAP[$step]=1; //@line 1726 "arraymodule.c"
        HEAP[$slicelength]=1; //@line 1727 "arraymodule.c"
        __label__ = 19; break; //@line 1727 "arraymodule.c"
      case 13: // $bb12
        var $51=HEAP[$self_addr]; //@line 1730 "arraymodule.c"
        var $52=(($51+20)&4294967295); //@line 1730 "arraymodule.c"
        var $53=HEAP[$52]; //@line 1730 "arraymodule.c"
        var $54=(($53+12)&4294967295); //@line 1730 "arraymodule.c"
        var $55=HEAP[$54]; //@line 1730 "arraymodule.c"
        var $56=HEAP[$self_addr]; //@line 1730 "arraymodule.c"
        var $57=HEAP[$i]; //@line 1730 "arraymodule.c"
        var $58=HEAP[$value_addr]; //@line 1730 "arraymodule.c"
        var $59=FUNCTION_TABLE[$55]($56, $57, $58); //@line 1730 "arraymodule.c"
        HEAP[$0]=$59; //@line 1730 "arraymodule.c"
        __label__ = 69; break; //@line 1730 "arraymodule.c"
      case 14: // $bb13
        var $60=HEAP[$item_addr]; //@line 1732 "arraymodule.c"
        var $61=(($60+4)&4294967295); //@line 1732 "arraymodule.c"
        var $62=HEAP[$61]; //@line 1732 "arraymodule.c"
        var $63=($62)==(_PySlice_Type); //@line 1732 "arraymodule.c"
        if ($63) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 1732 "arraymodule.c"
      case 15: // $bb14
        var $64=HEAP[$self_addr]; //@line 1733 "arraymodule.c"
        var $65=$64; //@line 1733 "arraymodule.c"
        var $66=(($65+8)&4294967295); //@line 1733 "arraymodule.c"
        var $67=HEAP[$66]; //@line 1733 "arraymodule.c"
        var $68=HEAP[$item_addr]; //@line 1733 "arraymodule.c"
        var $69=$68; //@line 1733 "arraymodule.c"
        var $70=_PySlice_GetIndicesEx($69, $67, $start, $stop, $step, $slicelength); //@line 1733 "arraymodule.c"
        var $71=((($70))|0) < 0; //@line 1733 "arraymodule.c"
        if ($71) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1733 "arraymodule.c"
      case 16: // $bb15
        HEAP[$0]=-1; //@line 1736 "arraymodule.c"
        __label__ = 69; break; //@line 1736 "arraymodule.c"
      case 17: // $bb16
        __label__ = 19; break; //@line 1736 "arraymodule.c"
      case 18: // $bb17
        var $72=HEAP[_PyExc_TypeError]; //@line 1740 "arraymodule.c"
        _PyErr_SetString($72, ((__str78)&4294967295)); //@line 1740 "arraymodule.c"
        HEAP[$0]=-1; //@line 1742 "arraymodule.c"
        __label__ = 69; break; //@line 1742 "arraymodule.c"
      case 19: // $bb18
        var $73=HEAP[$value_addr]; //@line 1744 "arraymodule.c"
        var $74=($73)==0; //@line 1744 "arraymodule.c"
        if ($74) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1744 "arraymodule.c"
      case 20: // $bb19
        HEAP[$other]=0; //@line 1745 "arraymodule.c"
        HEAP[$needed]=0; //@line 1746 "arraymodule.c"
        __label__ = 33; break; //@line 1746 "arraymodule.c"
      case 21: // $bb20
        var $75=HEAP[$value_addr]; //@line 1748 "arraymodule.c"
        var $76=(($75+4)&4294967295); //@line 1748 "arraymodule.c"
        var $77=HEAP[$76]; //@line 1748 "arraymodule.c"
        var $78=($77)==(_Arraytype); //@line 1748 "arraymodule.c"
        if ($78) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 1748 "arraymodule.c"
      case 22: // $bb21
        var $79=HEAP[$value_addr]; //@line 1748 "arraymodule.c"
        var $80=(($79+4)&4294967295); //@line 1748 "arraymodule.c"
        var $81=HEAP[$80]; //@line 1748 "arraymodule.c"
        var $82=_PyType_IsSubtype($81, _Arraytype); //@line 1748 "arraymodule.c"
        var $83=((($82))|0)!=0; //@line 1748 "arraymodule.c"
        if ($83) { __label__ = 23; break; } else { __label__ = 32; break; } //@line 1748 "arraymodule.c"
      case 23: // $bb22
        var $84=HEAP[$value_addr]; //@line 1749 "arraymodule.c"
        var $85=$84; //@line 1749 "arraymodule.c"
        HEAP[$other]=$85; //@line 1749 "arraymodule.c"
        var $86=HEAP[$other]; //@line 1750 "arraymodule.c"
        var $87=$86; //@line 1750 "arraymodule.c"
        var $88=(($87+8)&4294967295); //@line 1750 "arraymodule.c"
        var $89=HEAP[$88]; //@line 1750 "arraymodule.c"
        HEAP[$needed]=$89; //@line 1750 "arraymodule.c"
        var $90=HEAP[$self_addr]; //@line 1751 "arraymodule.c"
        var $91=HEAP[$other]; //@line 1751 "arraymodule.c"
        var $92=($90)==($91); //@line 1751 "arraymodule.c"
        if ($92) { __label__ = 24; break; } else { __label__ = 29; break; } //@line 1751 "arraymodule.c"
      case 24: // $bb23
        var $93=HEAP[$other]; //@line 1754 "arraymodule.c"
        var $94=HEAP[$needed]; //@line 1754 "arraymodule.c"
        var $95=_array_slice($93, 0, $94); //@line 1754 "arraymodule.c"
        HEAP[$value_addr]=$95; //@line 1754 "arraymodule.c"
        var $96=HEAP[$value_addr]; //@line 1755 "arraymodule.c"
        var $97=($96)==0; //@line 1755 "arraymodule.c"
        if ($97) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1755 "arraymodule.c"
      case 25: // $bb24
        HEAP[$0]=-1; //@line 1756 "arraymodule.c"
        __label__ = 69; break; //@line 1756 "arraymodule.c"
      case 26: // $bb25
        var $98=HEAP[$self_addr]; //@line 1757 "arraymodule.c"
        var $99=HEAP[$item_addr]; //@line 1757 "arraymodule.c"
        var $100=HEAP[$value_addr]; //@line 1757 "arraymodule.c"
        var $101=_array_ass_subscr($98, $99, $100); //@line 1757 "arraymodule.c"
        HEAP[$ret]=$101; //@line 1757 "arraymodule.c"
        var $102=HEAP[$value_addr]; //@line 1758 "arraymodule.c"
        var $103=(($102)&4294967295); //@line 1758 "arraymodule.c"
        var $104=HEAP[$103]; //@line 1758 "arraymodule.c"
        var $105=((($104) - 1)&4294967295); //@line 1758 "arraymodule.c"
        var $106=HEAP[$value_addr]; //@line 1758 "arraymodule.c"
        var $107=(($106)&4294967295); //@line 1758 "arraymodule.c"
        HEAP[$107]=$105; //@line 1758 "arraymodule.c"
        var $108=HEAP[$value_addr]; //@line 1758 "arraymodule.c"
        var $109=(($108)&4294967295); //@line 1758 "arraymodule.c"
        var $110=HEAP[$109]; //@line 1758 "arraymodule.c"
        var $111=((($110))|0)==0; //@line 1758 "arraymodule.c"
        if ($111) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1758 "arraymodule.c"
      case 27: // $bb26
        var $112=HEAP[$value_addr]; //@line 1758 "arraymodule.c"
        var $113=(($112+4)&4294967295); //@line 1758 "arraymodule.c"
        var $114=HEAP[$113]; //@line 1758 "arraymodule.c"
        var $115=(($114+24)&4294967295); //@line 1758 "arraymodule.c"
        var $116=HEAP[$115]; //@line 1758 "arraymodule.c"
        var $117=HEAP[$value_addr]; //@line 1758 "arraymodule.c"
        FUNCTION_TABLE[$116]($117); //@line 1758 "arraymodule.c"
        __label__ = 28; break; //@line 1758 "arraymodule.c"
      case 28: // $bb27
        var $118=HEAP[$ret]; //@line 1759 "arraymodule.c"
        HEAP[$0]=$118; //@line 1759 "arraymodule.c"
        __label__ = 69; break; //@line 1759 "arraymodule.c"
      case 29: // $bb28
        var $119=HEAP[$other]; //@line 1761 "arraymodule.c"
        var $120=(($119+20)&4294967295); //@line 1761 "arraymodule.c"
        var $121=HEAP[$120]; //@line 1761 "arraymodule.c"
        var $122=HEAP[$self_addr]; //@line 1761 "arraymodule.c"
        var $123=(($122+20)&4294967295); //@line 1761 "arraymodule.c"
        var $124=HEAP[$123]; //@line 1761 "arraymodule.c"
        var $125=($121)!=($124); //@line 1761 "arraymodule.c"
        if ($125) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1761 "arraymodule.c"
      case 30: // $bb29
        var $126=_PyErr_BadArgument(); //@line 1762 "arraymodule.c"
        HEAP[$0]=-1; //@line 1763 "arraymodule.c"
        __label__ = 69; break; //@line 1763 "arraymodule.c"
      case 31: // $bb30
        __label__ = 33; break; //@line 1763 "arraymodule.c"
      case 32: // $bb31
        var $127=HEAP[$value_addr]; //@line 1767 "arraymodule.c"
        var $128=(($127+4)&4294967295); //@line 1767 "arraymodule.c"
        var $129=HEAP[$128]; //@line 1767 "arraymodule.c"
        var $130=(($129+12)&4294967295); //@line 1767 "arraymodule.c"
        var $131=HEAP[$130]; //@line 1767 "arraymodule.c"
        var $132=HEAP[_PyExc_TypeError]; //@line 1767 "arraymodule.c"
        var $133=_PyErr_Format($132, ((__str20)&4294967295), $131); //@line 1767 "arraymodule.c"
        HEAP[$0]=-1; //@line 1770 "arraymodule.c"
        __label__ = 69; break; //@line 1770 "arraymodule.c"
      case 33: // $bb32
        var $134=HEAP[$self_addr]; //@line 1772 "arraymodule.c"
        var $135=(($134+20)&4294967295); //@line 1772 "arraymodule.c"
        var $136=HEAP[$135]; //@line 1772 "arraymodule.c"
        var $137=(($136+4)&4294967295); //@line 1772 "arraymodule.c"
        var $138=HEAP[$137]; //@line 1772 "arraymodule.c"
        HEAP[$itemsize]=$138; //@line 1772 "arraymodule.c"
        var $139=HEAP[$step]; //@line 1774 "arraymodule.c"
        var $140=((($139))|0) <= 0; //@line 1774 "arraymodule.c"
        if ($140) { __label__ = 35; break; } else { __label__ = 34; break; } //@line 1774 "arraymodule.c"
      case 34: // $bb33
        var $141=HEAP[$stop]; //@line 1774 "arraymodule.c"
        var $142=HEAP[$start]; //@line 1774 "arraymodule.c"
        var $143=((($141))|0) < ((($142))|0); //@line 1774 "arraymodule.c"
        if ($143) { __label__ = 37; break; } else { __label__ = 35; break; } //@line 1774 "arraymodule.c"
      case 35: // $bb34
        var $144=HEAP[$step]; //@line 1774 "arraymodule.c"
        var $145=((($144))|0) >= 0; //@line 1774 "arraymodule.c"
        if ($145) { __label__ = 38; break; } else { __label__ = 36; break; } //@line 1774 "arraymodule.c"
      case 36: // $bb35
        var $146=HEAP[$stop]; //@line 1774 "arraymodule.c"
        var $147=HEAP[$start]; //@line 1774 "arraymodule.c"
        var $148=((($146))|0) > ((($147))|0); //@line 1774 "arraymodule.c"
        if ($148) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1774 "arraymodule.c"
      case 37: // $bb36
        var $149=HEAP[$start]; //@line 1776 "arraymodule.c"
        HEAP[$stop]=$149; //@line 1776 "arraymodule.c"
        __label__ = 38; break; //@line 1776 "arraymodule.c"
      case 38: // $bb37
        var $150=HEAP[$step]; //@line 1777 "arraymodule.c"
        var $151=((($150))|0)==1; //@line 1777 "arraymodule.c"
        if ($151) { __label__ = 39; break; } else { __label__ = 50; break; } //@line 1777 "arraymodule.c"
      case 39: // $bb38
        var $152=HEAP[$slicelength]; //@line 1778 "arraymodule.c"
        var $153=HEAP[$needed]; //@line 1778 "arraymodule.c"
        var $154=((($152))|0) > ((($153))|0); //@line 1778 "arraymodule.c"
        if ($154) { __label__ = 40; break; } else { __label__ = 43; break; } //@line 1778 "arraymodule.c"
      case 40: // $bb39
        var $155=HEAP[$self_addr]; //@line 1779 "arraymodule.c"
        var $156=$155; //@line 1779 "arraymodule.c"
        var $157=(($156+8)&4294967295); //@line 1779 "arraymodule.c"
        var $158=HEAP[$157]; //@line 1779 "arraymodule.c"
        var $159=HEAP[$stop]; //@line 1779 "arraymodule.c"
        var $160=((($158) - ($159))&4294967295); //@line 1779 "arraymodule.c"
        var $161=HEAP[$itemsize]; //@line 1779 "arraymodule.c"
        var $162=((($160) * ($161))&4294967295); //@line 1779 "arraymodule.c"
        var $163=HEAP[$self_addr]; //@line 1779 "arraymodule.c"
        var $164=(($163+12)&4294967295); //@line 1779 "arraymodule.c"
        var $165=HEAP[$164]; //@line 1779 "arraymodule.c"
        var $166=HEAP[$stop]; //@line 1779 "arraymodule.c"
        var $167=HEAP[$itemsize]; //@line 1779 "arraymodule.c"
        var $168=((($166) * ($167))&4294967295); //@line 1779 "arraymodule.c"
        var $169=(($165+$168)&4294967295); //@line 1779 "arraymodule.c"
        var $170=HEAP[$self_addr]; //@line 1779 "arraymodule.c"
        var $171=(($170+12)&4294967295); //@line 1779 "arraymodule.c"
        var $172=HEAP[$171]; //@line 1779 "arraymodule.c"
        var $173=HEAP[$start]; //@line 1779 "arraymodule.c"
        var $174=HEAP[$needed]; //@line 1779 "arraymodule.c"
        var $175=((($173) + ($174))&4294967295); //@line 1779 "arraymodule.c"
        var $176=HEAP[$itemsize]; //@line 1779 "arraymodule.c"
        var $177=((($175) * ($176))&4294967295); //@line 1779 "arraymodule.c"
        var $178=(($172+$177)&4294967295); //@line 1779 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($178, $169, $162, 1, 0); //@line 1779 "arraymodule.c"
        var $179=HEAP[$self_addr]; //@line 1782 "arraymodule.c"
        var $180=$179; //@line 1782 "arraymodule.c"
        var $181=(($180+8)&4294967295); //@line 1782 "arraymodule.c"
        var $182=HEAP[$181]; //@line 1782 "arraymodule.c"
        var $183=HEAP[$needed]; //@line 1782 "arraymodule.c"
        var $184=((($182) + ($183))&4294967295); //@line 1782 "arraymodule.c"
        var $185=HEAP[$slicelength]; //@line 1782 "arraymodule.c"
        var $186=((($184) - ($185))&4294967295); //@line 1782 "arraymodule.c"
        var $187=HEAP[$self_addr]; //@line 1782 "arraymodule.c"
        var $188=_array_resize($187, $186); //@line 1782 "arraymodule.c"
        var $189=((($188))|0) < 0; //@line 1782 "arraymodule.c"
        if ($189) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1782 "arraymodule.c"
      case 41: // $bb40
        HEAP[$0]=-1; //@line 1784 "arraymodule.c"
        __label__ = 69; break; //@line 1784 "arraymodule.c"
      case 42: // $bb41
        __label__ = 47; break; //@line 1784 "arraymodule.c"
      case 43: // $bb42
        var $190=HEAP[$slicelength]; //@line 1786 "arraymodule.c"
        var $191=HEAP[$needed]; //@line 1786 "arraymodule.c"
        var $192=((($190))|0) < ((($191))|0); //@line 1786 "arraymodule.c"
        if ($192) { __label__ = 44; break; } else { __label__ = 47; break; } //@line 1786 "arraymodule.c"
      case 44: // $bb43
        var $193=HEAP[$self_addr]; //@line 1787 "arraymodule.c"
        var $194=$193; //@line 1787 "arraymodule.c"
        var $195=(($194+8)&4294967295); //@line 1787 "arraymodule.c"
        var $196=HEAP[$195]; //@line 1787 "arraymodule.c"
        var $197=HEAP[$needed]; //@line 1787 "arraymodule.c"
        var $198=((($196) + ($197))&4294967295); //@line 1787 "arraymodule.c"
        var $199=HEAP[$slicelength]; //@line 1787 "arraymodule.c"
        var $200=((($198) - ($199))&4294967295); //@line 1787 "arraymodule.c"
        var $201=HEAP[$self_addr]; //@line 1787 "arraymodule.c"
        var $202=_array_resize($201, $200); //@line 1787 "arraymodule.c"
        var $203=((($202))|0) < 0; //@line 1787 "arraymodule.c"
        if ($203) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 1787 "arraymodule.c"
      case 45: // $bb44
        HEAP[$0]=-1; //@line 1789 "arraymodule.c"
        __label__ = 69; break; //@line 1789 "arraymodule.c"
      case 46: // $bb45
        var $204=HEAP[$self_addr]; //@line 1790 "arraymodule.c"
        var $205=$204; //@line 1790 "arraymodule.c"
        var $206=(($205+8)&4294967295); //@line 1790 "arraymodule.c"
        var $207=HEAP[$206]; //@line 1790 "arraymodule.c"
        var $208=HEAP[$start]; //@line 1790 "arraymodule.c"
        var $209=((($207) - ($208))&4294967295); //@line 1790 "arraymodule.c"
        var $210=HEAP[$needed]; //@line 1790 "arraymodule.c"
        var $211=((($209) - ($210))&4294967295); //@line 1790 "arraymodule.c"
        var $212=HEAP[$itemsize]; //@line 1790 "arraymodule.c"
        var $213=((($211) * ($212))&4294967295); //@line 1790 "arraymodule.c"
        var $214=HEAP[$self_addr]; //@line 1790 "arraymodule.c"
        var $215=(($214+12)&4294967295); //@line 1790 "arraymodule.c"
        var $216=HEAP[$215]; //@line 1790 "arraymodule.c"
        var $217=HEAP[$stop]; //@line 1790 "arraymodule.c"
        var $218=HEAP[$itemsize]; //@line 1790 "arraymodule.c"
        var $219=((($217) * ($218))&4294967295); //@line 1790 "arraymodule.c"
        var $220=(($216+$219)&4294967295); //@line 1790 "arraymodule.c"
        var $221=HEAP[$self_addr]; //@line 1790 "arraymodule.c"
        var $222=(($221+12)&4294967295); //@line 1790 "arraymodule.c"
        var $223=HEAP[$222]; //@line 1790 "arraymodule.c"
        var $224=HEAP[$start]; //@line 1790 "arraymodule.c"
        var $225=HEAP[$needed]; //@line 1790 "arraymodule.c"
        var $226=((($224) + ($225))&4294967295); //@line 1790 "arraymodule.c"
        var $227=HEAP[$itemsize]; //@line 1790 "arraymodule.c"
        var $228=((($226) * ($227))&4294967295); //@line 1790 "arraymodule.c"
        var $229=(($223+$228)&4294967295); //@line 1790 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($229, $220, $213, 1, 0); //@line 1790 "arraymodule.c"
        __label__ = 47; break; //@line 1790 "arraymodule.c"
      case 47: // $bb46
        var $230=HEAP[$needed]; //@line 1794 "arraymodule.c"
        var $231=((($230))|0) > 0; //@line 1794 "arraymodule.c"
        if ($231) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 1794 "arraymodule.c"
      case 48: // $bb47
        var $232=HEAP[$needed]; //@line 1795 "arraymodule.c"
        var $233=HEAP[$itemsize]; //@line 1795 "arraymodule.c"
        var $234=((($232) * ($233))&4294967295); //@line 1795 "arraymodule.c"
        var $235=HEAP[$other]; //@line 1795 "arraymodule.c"
        var $236=(($235+12)&4294967295); //@line 1795 "arraymodule.c"
        var $237=HEAP[$236]; //@line 1795 "arraymodule.c"
        var $238=HEAP[$self_addr]; //@line 1795 "arraymodule.c"
        var $239=(($238+12)&4294967295); //@line 1795 "arraymodule.c"
        var $240=HEAP[$239]; //@line 1795 "arraymodule.c"
        var $241=HEAP[$start]; //@line 1795 "arraymodule.c"
        var $242=HEAP[$itemsize]; //@line 1795 "arraymodule.c"
        var $243=((($241) * ($242))&4294967295); //@line 1795 "arraymodule.c"
        var $244=(($240+$243)&4294967295); //@line 1795 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($244, $237, $234, 1, 0); //@line 1795 "arraymodule.c"
        __label__ = 49; break; //@line 1795 "arraymodule.c"
      case 49: // $bb48
        HEAP[$0]=0; //@line 1797 "arraymodule.c"
        __label__ = 69; break; //@line 1797 "arraymodule.c"
      case 50: // $bb49
        var $245=HEAP[$needed]; //@line 1799 "arraymodule.c"
        var $246=((($245))|0)==0; //@line 1799 "arraymodule.c"
        if ($246) { __label__ = 51; break; } else { __label__ = 63; break; } //@line 1799 "arraymodule.c"
      case 51: // $bb50
        var $247=HEAP[$step]; //@line 1804 "arraymodule.c"
        var $248=((($247))|0) < 0; //@line 1804 "arraymodule.c"
        if ($248) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 1804 "arraymodule.c"
      case 52: // $bb52
        var $249=HEAP[$start]; //@line 1805 "arraymodule.c"
        var $250=((($249) + 1)&4294967295); //@line 1805 "arraymodule.c"
        HEAP[$stop]=$250; //@line 1805 "arraymodule.c"
        var $251=HEAP[$slicelength]; //@line 1806 "arraymodule.c"
        var $252=((($251) - 1)&4294967295); //@line 1806 "arraymodule.c"
        var $253=HEAP[$step]; //@line 1806 "arraymodule.c"
        var $254=((($252) * ($253))&4294967295); //@line 1806 "arraymodule.c"
        var $255=HEAP[$stop]; //@line 1806 "arraymodule.c"
        var $256=((($254) + ($255))&4294967295); //@line 1806 "arraymodule.c"
        var $257=((($256) - 1)&4294967295); //@line 1806 "arraymodule.c"
        HEAP[$start]=$257; //@line 1806 "arraymodule.c"
        var $258=HEAP[$step]; //@line 1807 "arraymodule.c"
        var $259=((0 - ($258))&4294967295); //@line 1807 "arraymodule.c"
        HEAP[$step]=$259; //@line 1807 "arraymodule.c"
        __label__ = 53; break; //@line 1807 "arraymodule.c"
      case 53: // $bb53
        var $260=HEAP[$start]; //@line 1809 "arraymodule.c"
        HEAP[$cur]=$260; //@line 1809 "arraymodule.c"
        HEAP[$i51]=0; //@line 1809 "arraymodule.c"
        __label__ = 57; break; //@line 1809 "arraymodule.c"
      case 54: // $bb54
        var $261=HEAP[$step]; //@line 1811 "arraymodule.c"
        var $262=((($261) - 1)&4294967295); //@line 1811 "arraymodule.c"
        HEAP[$lim]=$262; //@line 1811 "arraymodule.c"
        var $263=HEAP[$step]; //@line 1813 "arraymodule.c"
        var $264=HEAP[$cur]; //@line 1813 "arraymodule.c"
        var $265=((($264) + ($263))&4294967295); //@line 1813 "arraymodule.c"
        var $266=HEAP[$self_addr]; //@line 1813 "arraymodule.c"
        var $267=$266; //@line 1813 "arraymodule.c"
        var $268=(($267+8)&4294967295); //@line 1813 "arraymodule.c"
        var $269=HEAP[$268]; //@line 1813 "arraymodule.c"
        var $270=((($265))>>>0) >= ((($269))>>>0); //@line 1813 "arraymodule.c"
        if ($270) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1813 "arraymodule.c"
      case 55: // $bb55
        var $271=HEAP[$self_addr]; //@line 1814 "arraymodule.c"
        var $272=$271; //@line 1814 "arraymodule.c"
        var $273=(($272+8)&4294967295); //@line 1814 "arraymodule.c"
        var $274=HEAP[$273]; //@line 1814 "arraymodule.c"
        var $275=HEAP[$cur]; //@line 1814 "arraymodule.c"
        var $276=((($274) - ($275))&4294967295); //@line 1814 "arraymodule.c"
        var $277=((($276) - 1)&4294967295); //@line 1814 "arraymodule.c"
        HEAP[$lim]=$277; //@line 1814 "arraymodule.c"
        __label__ = 56; break; //@line 1814 "arraymodule.c"
      case 56: // $bb56
        var $278=HEAP[$lim]; //@line 1815 "arraymodule.c"
        var $279=HEAP[$itemsize]; //@line 1815 "arraymodule.c"
        var $280=((($278) * ($279))&4294967295); //@line 1815 "arraymodule.c"
        var $281=HEAP[$self_addr]; //@line 1815 "arraymodule.c"
        var $282=(($281+12)&4294967295); //@line 1815 "arraymodule.c"
        var $283=HEAP[$282]; //@line 1815 "arraymodule.c"
        var $284=HEAP[$cur]; //@line 1815 "arraymodule.c"
        var $285=((($284) + 1)&4294967295); //@line 1815 "arraymodule.c"
        var $286=HEAP[$itemsize]; //@line 1815 "arraymodule.c"
        var $287=((($285) * ($286))&4294967295); //@line 1815 "arraymodule.c"
        var $288=(($283+$287)&4294967295); //@line 1815 "arraymodule.c"
        var $289=HEAP[$self_addr]; //@line 1815 "arraymodule.c"
        var $290=(($289+12)&4294967295); //@line 1815 "arraymodule.c"
        var $291=HEAP[$290]; //@line 1815 "arraymodule.c"
        var $292=HEAP[$i51]; //@line 1815 "arraymodule.c"
        var $293=HEAP[$cur]; //@line 1815 "arraymodule.c"
        var $294=((($293) - ($292))&4294967295); //@line 1815 "arraymodule.c"
        var $295=HEAP[$itemsize]; //@line 1815 "arraymodule.c"
        var $296=((($294) * ($295))&4294967295); //@line 1815 "arraymodule.c"
        var $297=(($291+$296)&4294967295); //@line 1815 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($297, $288, $280, 1, 0); //@line 1815 "arraymodule.c"
        var $298=HEAP[$step]; //@line 1810 "arraymodule.c"
        var $299=HEAP[$cur]; //@line 1810 "arraymodule.c"
        var $300=((($299) + ($298))&4294967295); //@line 1810 "arraymodule.c"
        HEAP[$cur]=$300; //@line 1810 "arraymodule.c"
        var $301=HEAP[$i51]; //@line 1810 "arraymodule.c"
        var $302=((($301) + 1)&4294967295); //@line 1810 "arraymodule.c"
        HEAP[$i51]=$302; //@line 1810 "arraymodule.c"
        __label__ = 57; break; //@line 1810 "arraymodule.c"
      case 57: // $bb57
        var $303=HEAP[$slicelength]; //@line 1809 "arraymodule.c"
        var $304=HEAP[$i51]; //@line 1809 "arraymodule.c"
        var $305=((($304))|0) < ((($303))|0); //@line 1809 "arraymodule.c"
        if ($305) { __label__ = 54; break; } else { __label__ = 58; break; } //@line 1809 "arraymodule.c"
      case 58: // $bb58
        var $306=HEAP[$slicelength]; //@line 1819 "arraymodule.c"
        var $307=HEAP[$step]; //@line 1819 "arraymodule.c"
        var $308=((($306) * ($307))&4294967295); //@line 1819 "arraymodule.c"
        var $309=HEAP[$start]; //@line 1819 "arraymodule.c"
        var $310=((($308) + ($309))&4294967295); //@line 1819 "arraymodule.c"
        HEAP[$cur]=$310; //@line 1819 "arraymodule.c"
        var $311=HEAP[$self_addr]; //@line 1820 "arraymodule.c"
        var $312=$311; //@line 1820 "arraymodule.c"
        var $313=(($312+8)&4294967295); //@line 1820 "arraymodule.c"
        var $314=HEAP[$313]; //@line 1820 "arraymodule.c"
        var $315=HEAP[$cur]; //@line 1820 "arraymodule.c"
        var $316=((($314))>>>0) > ((($315))>>>0); //@line 1820 "arraymodule.c"
        if ($316) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 1820 "arraymodule.c"
      case 59: // $bb59
        var $317=HEAP[$self_addr]; //@line 1821 "arraymodule.c"
        var $318=$317; //@line 1821 "arraymodule.c"
        var $319=(($318+8)&4294967295); //@line 1821 "arraymodule.c"
        var $320=HEAP[$319]; //@line 1821 "arraymodule.c"
        var $321=HEAP[$cur]; //@line 1821 "arraymodule.c"
        var $322=((($320) - ($321))&4294967295); //@line 1821 "arraymodule.c"
        var $323=HEAP[$itemsize]; //@line 1821 "arraymodule.c"
        var $324=((($322) * ($323))&4294967295); //@line 1821 "arraymodule.c"
        var $325=HEAP[$self_addr]; //@line 1821 "arraymodule.c"
        var $326=(($325+12)&4294967295); //@line 1821 "arraymodule.c"
        var $327=HEAP[$326]; //@line 1821 "arraymodule.c"
        var $328=HEAP[$itemsize]; //@line 1821 "arraymodule.c"
        var $329=HEAP[$cur]; //@line 1821 "arraymodule.c"
        var $330=((($329) * ($328))&4294967295); //@line 1821 "arraymodule.c"
        var $331=(($327+$330)&4294967295); //@line 1821 "arraymodule.c"
        var $332=HEAP[$self_addr]; //@line 1821 "arraymodule.c"
        var $333=(($332+12)&4294967295); //@line 1821 "arraymodule.c"
        var $334=HEAP[$333]; //@line 1821 "arraymodule.c"
        var $335=HEAP[$slicelength]; //@line 1821 "arraymodule.c"
        var $336=HEAP[$cur]; //@line 1821 "arraymodule.c"
        var $337=((($336) - ($335))&4294967295); //@line 1821 "arraymodule.c"
        var $338=HEAP[$itemsize]; //@line 1821 "arraymodule.c"
        var $339=((($337) * ($338))&4294967295); //@line 1821 "arraymodule.c"
        var $340=(($334+$339)&4294967295); //@line 1821 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($340, $331, $324, 1, 0); //@line 1821 "arraymodule.c"
        __label__ = 60; break; //@line 1821 "arraymodule.c"
      case 60: // $bb60
        var $341=HEAP[$self_addr]; //@line 1825 "arraymodule.c"
        var $342=$341; //@line 1825 "arraymodule.c"
        var $343=(($342+8)&4294967295); //@line 1825 "arraymodule.c"
        var $344=HEAP[$343]; //@line 1825 "arraymodule.c"
        var $345=HEAP[$slicelength]; //@line 1825 "arraymodule.c"
        var $346=((($344) - ($345))&4294967295); //@line 1825 "arraymodule.c"
        var $347=HEAP[$self_addr]; //@line 1825 "arraymodule.c"
        var $348=_array_resize($347, $346); //@line 1825 "arraymodule.c"
        var $349=((($348))|0) < 0; //@line 1825 "arraymodule.c"
        if ($349) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 1825 "arraymodule.c"
      case 61: // $bb61
        HEAP[$0]=-1; //@line 1826 "arraymodule.c"
        __label__ = 69; break; //@line 1826 "arraymodule.c"
      case 62: // $bb62
        HEAP[$0]=0; //@line 1827 "arraymodule.c"
        __label__ = 69; break; //@line 1827 "arraymodule.c"
      case 63: // $bb63
        var $350=HEAP[$slicelength]; //@line 1832 "arraymodule.c"
        var $351=HEAP[$needed]; //@line 1832 "arraymodule.c"
        var $352=((($351))|0)!=((($350))|0); //@line 1832 "arraymodule.c"
        if ($352) { __label__ = 64; break; } else { __label__ = 65; break; } //@line 1832 "arraymodule.c"
      case 64: // $bb66
        var $353=HEAP[$slicelength]; //@line 1833 "arraymodule.c"
        var $354=HEAP[_PyExc_ValueError]; //@line 1833 "arraymodule.c"
        var $355=HEAP[$needed]; //@line 1833 "arraymodule.c"
        var $356=_PyErr_Format($354, ((__str79)&4294967295), $355, $353); //@line 1833 "arraymodule.c"
        HEAP[$0]=-1; //@line 1837 "arraymodule.c"
        __label__ = 69; break; //@line 1837 "arraymodule.c"
      case 65: // $bb67
        var $357=HEAP[$start]; //@line 1839 "arraymodule.c"
        HEAP[$cur64]=$357; //@line 1839 "arraymodule.c"
        HEAP[$i65]=0; //@line 1839 "arraymodule.c"
        __label__ = 67; break; //@line 1839 "arraymodule.c"
      case 66: // $bb68
        var $358=HEAP[$itemsize]; //@line 1841 "arraymodule.c"
        var $359=HEAP[$other]; //@line 1841 "arraymodule.c"
        var $360=(($359+12)&4294967295); //@line 1841 "arraymodule.c"
        var $361=HEAP[$360]; //@line 1841 "arraymodule.c"
        var $362=HEAP[$i65]; //@line 1841 "arraymodule.c"
        var $363=HEAP[$itemsize]; //@line 1841 "arraymodule.c"
        var $364=((($362) * ($363))&4294967295); //@line 1841 "arraymodule.c"
        var $365=(($361+$364)&4294967295); //@line 1841 "arraymodule.c"
        var $366=HEAP[$self_addr]; //@line 1841 "arraymodule.c"
        var $367=(($366+12)&4294967295); //@line 1841 "arraymodule.c"
        var $368=HEAP[$367]; //@line 1841 "arraymodule.c"
        var $369=HEAP[$cur64]; //@line 1841 "arraymodule.c"
        var $370=HEAP[$itemsize]; //@line 1841 "arraymodule.c"
        var $371=((($369) * ($370))&4294967295); //@line 1841 "arraymodule.c"
        var $372=(($368+$371)&4294967295); //@line 1841 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($372, $365, $358, 1, 0); //@line 1841 "arraymodule.c"
        var $373=HEAP[$step]; //@line 1840 "arraymodule.c"
        var $374=HEAP[$cur64]; //@line 1840 "arraymodule.c"
        var $375=((($374) + ($373))&4294967295); //@line 1840 "arraymodule.c"
        HEAP[$cur64]=$375; //@line 1840 "arraymodule.c"
        var $376=HEAP[$i65]; //@line 1840 "arraymodule.c"
        var $377=((($376) + 1)&4294967295); //@line 1840 "arraymodule.c"
        HEAP[$i65]=$377; //@line 1840 "arraymodule.c"
        __label__ = 67; break; //@line 1840 "arraymodule.c"
      case 67: // $bb69
        var $378=HEAP[$slicelength]; //@line 1839 "arraymodule.c"
        var $379=HEAP[$i65]; //@line 1839 "arraymodule.c"
        var $380=((($379))|0) < ((($378))|0); //@line 1839 "arraymodule.c"
        if ($380) { __label__ = 66; break; } else { __label__ = 68; break; } //@line 1839 "arraymodule.c"
      case 68: // $bb70
        HEAP[$0]=0; //@line 1845 "arraymodule.c"
        __label__ = 69; break; //@line 1845 "arraymodule.c"
      case 69: // $bb71
        var $381=HEAP[$0]; //@line 1714 "arraymodule.c"
        HEAP[$retval]=$381; //@line 1714 "arraymodule.c"
        __label__ = 70; break; //@line 1714 "arraymodule.c"
      case 70: // $return
        var $retval72=HEAP[$retval]; //@line 1714 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval72; //@line 1714 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_buffer_getreadbuf($self, $index, $ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $index_addr=__stackBase__+4;
        var $ptr_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$index_addr]=$index;
        HEAP[$ptr_addr]=$ptr;
        var $1=HEAP[$index_addr]; //@line 1860 "arraymodule.c"
        var $2=((($1))|0)!=0; //@line 1860 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1860 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_SystemError]; //@line 1861 "arraymodule.c"
        _PyErr_SetString($3, ((__str81)&4294967295)); //@line 1861 "arraymodule.c"
        HEAP[$0]=-1; //@line 1863 "arraymodule.c"
        __label__ = 5; break; //@line 1863 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 1865 "arraymodule.c"
        var $5=(($4+12)&4294967295); //@line 1865 "arraymodule.c"
        var $6=HEAP[$5]; //@line 1865 "arraymodule.c"
        var $7=HEAP[$ptr_addr]; //@line 1865 "arraymodule.c"
        HEAP[$7]=$6; //@line 1865 "arraymodule.c"
        var $8=HEAP[$ptr_addr]; //@line 1866 "arraymodule.c"
        var $9=HEAP[$8]; //@line 1866 "arraymodule.c"
        var $10=($9)==0; //@line 1866 "arraymodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1866 "arraymodule.c"
      case 3: // $bb2
        var $11=HEAP[_emptybuf]; //@line 1867 "arraymodule.c"
        var $12=HEAP[$ptr_addr]; //@line 1867 "arraymodule.c"
        HEAP[$12]=$11; //@line 1867 "arraymodule.c"
        __label__ = 4; break; //@line 1867 "arraymodule.c"
      case 4: // $bb3
        var $13=HEAP[$self_addr]; //@line 1868 "arraymodule.c"
        var $14=$13; //@line 1868 "arraymodule.c"
        var $15=(($14+8)&4294967295); //@line 1868 "arraymodule.c"
        var $16=HEAP[$15]; //@line 1868 "arraymodule.c"
        var $17=HEAP[$self_addr]; //@line 1868 "arraymodule.c"
        var $18=(($17+20)&4294967295); //@line 1868 "arraymodule.c"
        var $19=HEAP[$18]; //@line 1868 "arraymodule.c"
        var $20=(($19+4)&4294967295); //@line 1868 "arraymodule.c"
        var $21=HEAP[$20]; //@line 1868 "arraymodule.c"
        var $22=((($16) * ($21))&4294967295); //@line 1868 "arraymodule.c"
        HEAP[$0]=$22; //@line 1868 "arraymodule.c"
        __label__ = 5; break; //@line 1868 "arraymodule.c"
      case 5: // $bb4
        var $23=HEAP[$0]; //@line 1863 "arraymodule.c"
        HEAP[$retval]=$23; //@line 1863 "arraymodule.c"
        __label__ = 6; break; //@line 1863 "arraymodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1863 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1863 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_buffer_getwritebuf($self, $index, $ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $index_addr=__stackBase__+4;
        var $ptr_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$index_addr]=$index;
        HEAP[$ptr_addr]=$ptr;
        var $1=HEAP[$index_addr]; //@line 1874 "arraymodule.c"
        var $2=((($1))|0)!=0; //@line 1874 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1874 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_SystemError]; //@line 1875 "arraymodule.c"
        _PyErr_SetString($3, ((__str81)&4294967295)); //@line 1875 "arraymodule.c"
        HEAP[$0]=-1; //@line 1877 "arraymodule.c"
        __label__ = 5; break; //@line 1877 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 1879 "arraymodule.c"
        var $5=(($4+12)&4294967295); //@line 1879 "arraymodule.c"
        var $6=HEAP[$5]; //@line 1879 "arraymodule.c"
        var $7=HEAP[$ptr_addr]; //@line 1879 "arraymodule.c"
        HEAP[$7]=$6; //@line 1879 "arraymodule.c"
        var $8=HEAP[$ptr_addr]; //@line 1880 "arraymodule.c"
        var $9=HEAP[$8]; //@line 1880 "arraymodule.c"
        var $10=($9)==0; //@line 1880 "arraymodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1880 "arraymodule.c"
      case 3: // $bb2
        var $11=HEAP[_emptybuf]; //@line 1881 "arraymodule.c"
        var $12=HEAP[$ptr_addr]; //@line 1881 "arraymodule.c"
        HEAP[$12]=$11; //@line 1881 "arraymodule.c"
        __label__ = 4; break; //@line 1881 "arraymodule.c"
      case 4: // $bb3
        var $13=HEAP[$self_addr]; //@line 1882 "arraymodule.c"
        var $14=$13; //@line 1882 "arraymodule.c"
        var $15=(($14+8)&4294967295); //@line 1882 "arraymodule.c"
        var $16=HEAP[$15]; //@line 1882 "arraymodule.c"
        var $17=HEAP[$self_addr]; //@line 1882 "arraymodule.c"
        var $18=(($17+20)&4294967295); //@line 1882 "arraymodule.c"
        var $19=HEAP[$18]; //@line 1882 "arraymodule.c"
        var $20=(($19+4)&4294967295); //@line 1882 "arraymodule.c"
        var $21=HEAP[$20]; //@line 1882 "arraymodule.c"
        var $22=((($16) * ($21))&4294967295); //@line 1882 "arraymodule.c"
        HEAP[$0]=$22; //@line 1882 "arraymodule.c"
        __label__ = 5; break; //@line 1882 "arraymodule.c"
      case 5: // $bb4
        var $23=HEAP[$0]; //@line 1877 "arraymodule.c"
        HEAP[$retval]=$23; //@line 1877 "arraymodule.c"
        __label__ = 6; break; //@line 1877 "arraymodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1877 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1877 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_buffer_getsegcount($self, $lenp) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $lenp_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$lenp_addr]=$lenp;
        var $1=HEAP[$lenp_addr]; //@line 1888 "arraymodule.c"
        var $2=($1)!=0; //@line 1888 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1888 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[$self_addr]; //@line 1889 "arraymodule.c"
        var $4=$3; //@line 1889 "arraymodule.c"
        var $5=(($4+8)&4294967295); //@line 1889 "arraymodule.c"
        var $6=HEAP[$5]; //@line 1889 "arraymodule.c"
        var $7=HEAP[$self_addr]; //@line 1889 "arraymodule.c"
        var $8=(($7+20)&4294967295); //@line 1889 "arraymodule.c"
        var $9=HEAP[$8]; //@line 1889 "arraymodule.c"
        var $10=(($9+4)&4294967295); //@line 1889 "arraymodule.c"
        var $11=HEAP[$10]; //@line 1889 "arraymodule.c"
        var $12=((($6) * ($11))&4294967295); //@line 1889 "arraymodule.c"
        var $13=HEAP[$lenp_addr]; //@line 1889 "arraymodule.c"
        HEAP[$13]=$12; //@line 1889 "arraymodule.c"
        __label__ = 2; break; //@line 1889 "arraymodule.c"
      case 2: // $bb1
        HEAP[$0]=1; //@line 1890 "arraymodule.c"
        var $14=HEAP[$0]; //@line 1890 "arraymodule.c"
        HEAP[$retval]=$14; //@line 1890 "arraymodule.c"
        __label__ = 3; break; //@line 1890 "arraymodule.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 1890 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 1890 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 69; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 69);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $c=__stackBase__+20;
        var $initial=__stackBase__+21;
        var $it=__stackBase__+25;
        var $descr=__stackBase__+29;
        var $a=__stackBase__+33;
        var $len=__stackBase__+37;
        var $i=__stackBase__+41;
        var $v=__stackBase__+45;
        var $t_initial=__stackBase__+49;
        var $v42=__stackBase__+53;
        var $n=__stackBase__+57;
        var $self=__stackBase__+61;
        var $item=__stackBase__+65;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$initial]=0; //@line 1917 "arraymodule.c"
        HEAP[$it]=0; //@line 1917 "arraymodule.c"
        var $1=HEAP[$type_addr]; //@line 1920 "arraymodule.c"
        var $2=($1)==(_Arraytype); //@line 1920 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1920 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[$kwds_addr]; //@line 1920 "arraymodule.c"
        var $4=__PyArg_NoKeywords(((__str82)&4294967295), $3); //@line 1920 "arraymodule.c"
        var $5=((($4))|0)==0; //@line 1920 "arraymodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1920 "arraymodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1921 "arraymodule.c"
        __label__ = 76; break; //@line 1921 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[$args_addr]; //@line 1923 "arraymodule.c"
        var $7=__PyArg_ParseTuple_SizeT($6, ((__str83)&4294967295), $c, $initial); //@line 1923 "arraymodule.c"
        var $8=((($7))|0)==0; //@line 1923 "arraymodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1923 "arraymodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 1924 "arraymodule.c"
        __label__ = 76; break; //@line 1924 "arraymodule.c"
      case 5: // $bb4
        var $9=HEAP[$initial]; //@line 1926 "arraymodule.c"
        var $10=($9)!=0; //@line 1926 "arraymodule.c"
        if ($10) { __label__ = 6; break; } else { __label__ = 14; break; } //@line 1926 "arraymodule.c"
      case 6: // $bb5
        var $11=HEAP[$initial]; //@line 1926 "arraymodule.c"
        var $12=(($11+4)&4294967295); //@line 1926 "arraymodule.c"
        var $13=HEAP[$12]; //@line 1926 "arraymodule.c"
        var $14=(($13+84)&4294967295); //@line 1926 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1926 "arraymodule.c"
        var $16=($15) & 33554432; //@line 1926 "arraymodule.c"
        var $17=((($16))|0)==0; //@line 1926 "arraymodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 1926 "arraymodule.c"
      case 7: // $bb6
        var $18=HEAP[$initial]; //@line 1926 "arraymodule.c"
        var $19=(($18+4)&4294967295); //@line 1926 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1926 "arraymodule.c"
        var $21=(($20+84)&4294967295); //@line 1926 "arraymodule.c"
        var $22=HEAP[$21]; //@line 1926 "arraymodule.c"
        var $23=($22) & 134217728; //@line 1926 "arraymodule.c"
        var $24=((($23))|0)==0; //@line 1926 "arraymodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 14; break; } //@line 1926 "arraymodule.c"
      case 8: // $bb7
        var $25=HEAP[$initial]; //@line 1926 "arraymodule.c"
        var $26=(($25+4)&4294967295); //@line 1926 "arraymodule.c"
        var $27=HEAP[$26]; //@line 1926 "arraymodule.c"
        var $28=(($27+84)&4294967295); //@line 1926 "arraymodule.c"
        var $29=HEAP[$28]; //@line 1926 "arraymodule.c"
        var $30=($29) & 67108864; //@line 1926 "arraymodule.c"
        var $31=((($30))|0)==0; //@line 1926 "arraymodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 1926 "arraymodule.c"
      case 9: // $bb8
        var $32=HEAP[$c]; //@line 1926 "arraymodule.c"
        var $33=reSign(($32), 8, 0)!=117; //@line 1926 "arraymodule.c"
        if ($33) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1926 "arraymodule.c"
      case 10: // $bb9
        var $34=HEAP[$initial]; //@line 1926 "arraymodule.c"
        var $35=(($34+4)&4294967295); //@line 1926 "arraymodule.c"
        var $36=HEAP[$35]; //@line 1926 "arraymodule.c"
        var $37=(($36+84)&4294967295); //@line 1926 "arraymodule.c"
        var $38=HEAP[$37]; //@line 1926 "arraymodule.c"
        var $39=($38) & 268435456; //@line 1926 "arraymodule.c"
        var $40=((($39))|0)==0; //@line 1926 "arraymodule.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1926 "arraymodule.c"
      case 11: // $bb10
        var $41=HEAP[$initial]; //@line 1929 "arraymodule.c"
        var $42=_PyObject_GetIter($41); //@line 1929 "arraymodule.c"
        HEAP[$it]=$42; //@line 1929 "arraymodule.c"
        var $43=HEAP[$it]; //@line 1930 "arraymodule.c"
        var $44=($43)==0; //@line 1930 "arraymodule.c"
        if ($44) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1930 "arraymodule.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 1931 "arraymodule.c"
        __label__ = 76; break; //@line 1931 "arraymodule.c"
      case 13: // $bb12
        HEAP[$initial]=0; //@line 1937 "arraymodule.c"
        __label__ = 14; break; //@line 1937 "arraymodule.c"
      case 14: // $bb13
        HEAP[$descr]=((_descriptors)&4294967295); //@line 1939 "arraymodule.c"
        __label__ = 74; break; //@line 1939 "arraymodule.c"
      case 15: // $bb14
        var $45=HEAP[$descr]; //@line 1940 "arraymodule.c"
        var $46=(($45)&4294967295); //@line 1940 "arraymodule.c"
        var $47=HEAP[$46]; //@line 1940 "arraymodule.c"
        var $48=HEAP[$c]; //@line 1940 "arraymodule.c"
        var $49=reSign(($48), 8, 0); //@line 1940 "arraymodule.c"
        var $50=((($47))|0)==((($49))|0); //@line 1940 "arraymodule.c"
        if ($50) { __label__ = 16; break; } else { __label__ = 73; break; } //@line 1940 "arraymodule.c"
      case 16: // $bb15
        var $51=HEAP[$initial]; //@line 1944 "arraymodule.c"
        var $52=($51)==0; //@line 1944 "arraymodule.c"
        if ($52) { __label__ = 19; break; } else { __label__ = 17; break; } //@line 1944 "arraymodule.c"
      case 17: // $bb16
        var $53=HEAP[$initial]; //@line 1944 "arraymodule.c"
        var $54=(($53+4)&4294967295); //@line 1944 "arraymodule.c"
        var $55=HEAP[$54]; //@line 1944 "arraymodule.c"
        var $56=(($55+84)&4294967295); //@line 1944 "arraymodule.c"
        var $57=HEAP[$56]; //@line 1944 "arraymodule.c"
        var $58=($57) & 33554432; //@line 1944 "arraymodule.c"
        var $59=((($58))|0)!=0; //@line 1944 "arraymodule.c"
        if ($59) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 1944 "arraymodule.c"
      case 18: // $bb17
        var $60=HEAP[$initial]; //@line 1944 "arraymodule.c"
        var $61=(($60+4)&4294967295); //@line 1944 "arraymodule.c"
        var $62=HEAP[$61]; //@line 1944 "arraymodule.c"
        var $63=(($62+84)&4294967295); //@line 1944 "arraymodule.c"
        var $64=HEAP[$63]; //@line 1944 "arraymodule.c"
        var $65=($64) & 67108864; //@line 1944 "arraymodule.c"
        var $66=((($65))|0)==0; //@line 1944 "arraymodule.c"
        if ($66) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1944 "arraymodule.c"
      case 19: // $bb18
        HEAP[$len]=0; //@line 1946 "arraymodule.c"
        __label__ = 21; break; //@line 1946 "arraymodule.c"
      case 20: // $bb19
        var $67=HEAP[$initial]; //@line 1948 "arraymodule.c"
        var $68=_PySequence_Size($67); //@line 1948 "arraymodule.c"
        HEAP[$len]=$68; //@line 1948 "arraymodule.c"
        __label__ = 21; break; //@line 1948 "arraymodule.c"
      case 21: // $bb20
        var $69=HEAP[$type_addr]; //@line 1950 "arraymodule.c"
        var $70=HEAP[$len]; //@line 1950 "arraymodule.c"
        var $71=HEAP[$descr]; //@line 1950 "arraymodule.c"
        var $72=_newarrayobject($69, $70, $71); //@line 1950 "arraymodule.c"
        HEAP[$a]=$72; //@line 1950 "arraymodule.c"
        var $73=HEAP[$a]; //@line 1951 "arraymodule.c"
        var $74=($73)==0; //@line 1951 "arraymodule.c"
        if ($74) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1951 "arraymodule.c"
      case 22: // $bb21
        HEAP[$0]=0; //@line 1952 "arraymodule.c"
        __label__ = 76; break; //@line 1952 "arraymodule.c"
      case 23: // $bb22
        var $75=HEAP[$len]; //@line 1954 "arraymodule.c"
        var $76=((($75))|0) > 0; //@line 1954 "arraymodule.c"
        if ($76) { __label__ = 24; break; } else { __label__ = 40; break; } //@line 1954 "arraymodule.c"
      case 24: // $bb23
        HEAP[$i]=0; //@line 1956 "arraymodule.c"
        __label__ = 38; break; //@line 1956 "arraymodule.c"
      case 25: // $bb24
        var $77=HEAP[$initial]; //@line 1958 "arraymodule.c"
        var $78=HEAP[$i]; //@line 1958 "arraymodule.c"
        var $79=_PySequence_GetItem($77, $78); //@line 1958 "arraymodule.c"
        HEAP[$v]=$79; //@line 1958 "arraymodule.c"
        var $80=HEAP[$v]; //@line 1959 "arraymodule.c"
        var $81=($80)==0; //@line 1959 "arraymodule.c"
        if ($81) { __label__ = 26; break; } else { __label__ = 29; break; } //@line 1959 "arraymodule.c"
      case 26: // $bb25
        var $82=HEAP[$a]; //@line 1960 "arraymodule.c"
        var $83=(($82)&4294967295); //@line 1960 "arraymodule.c"
        var $84=HEAP[$83]; //@line 1960 "arraymodule.c"
        var $85=((($84) - 1)&4294967295); //@line 1960 "arraymodule.c"
        var $86=HEAP[$a]; //@line 1960 "arraymodule.c"
        var $87=(($86)&4294967295); //@line 1960 "arraymodule.c"
        HEAP[$87]=$85; //@line 1960 "arraymodule.c"
        var $88=HEAP[$a]; //@line 1960 "arraymodule.c"
        var $89=(($88)&4294967295); //@line 1960 "arraymodule.c"
        var $90=HEAP[$89]; //@line 1960 "arraymodule.c"
        var $91=((($90))|0)==0; //@line 1960 "arraymodule.c"
        if ($91) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1960 "arraymodule.c"
      case 27: // $bb26
        var $92=HEAP[$a]; //@line 1960 "arraymodule.c"
        var $93=(($92+4)&4294967295); //@line 1960 "arraymodule.c"
        var $94=HEAP[$93]; //@line 1960 "arraymodule.c"
        var $95=(($94+24)&4294967295); //@line 1960 "arraymodule.c"
        var $96=HEAP[$95]; //@line 1960 "arraymodule.c"
        var $97=HEAP[$a]; //@line 1960 "arraymodule.c"
        FUNCTION_TABLE[$96]($97); //@line 1960 "arraymodule.c"
        __label__ = 28; break; //@line 1960 "arraymodule.c"
      case 28: // $bb27
        HEAP[$0]=0; //@line 1961 "arraymodule.c"
        __label__ = 76; break; //@line 1961 "arraymodule.c"
      case 29: // $bb28
        var $98=HEAP[$a]; //@line 1963 "arraymodule.c"
        var $99=HEAP[$i]; //@line 1963 "arraymodule.c"
        var $100=HEAP[$v]; //@line 1963 "arraymodule.c"
        var $101=_setarrayitem($98, $99, $100); //@line 1963 "arraymodule.c"
        var $102=((($101))|0)!=0; //@line 1963 "arraymodule.c"
        if ($102) { __label__ = 30; break; } else { __label__ = 35; break; } //@line 1963 "arraymodule.c"
      case 30: // $bb29
        var $103=HEAP[$v]; //@line 1964 "arraymodule.c"
        var $104=(($103)&4294967295); //@line 1964 "arraymodule.c"
        var $105=HEAP[$104]; //@line 1964 "arraymodule.c"
        var $106=((($105) - 1)&4294967295); //@line 1964 "arraymodule.c"
        var $107=HEAP[$v]; //@line 1964 "arraymodule.c"
        var $108=(($107)&4294967295); //@line 1964 "arraymodule.c"
        HEAP[$108]=$106; //@line 1964 "arraymodule.c"
        var $109=HEAP[$v]; //@line 1964 "arraymodule.c"
        var $110=(($109)&4294967295); //@line 1964 "arraymodule.c"
        var $111=HEAP[$110]; //@line 1964 "arraymodule.c"
        var $112=((($111))|0)==0; //@line 1964 "arraymodule.c"
        if ($112) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1964 "arraymodule.c"
      case 31: // $bb30
        var $113=HEAP[$v]; //@line 1964 "arraymodule.c"
        var $114=(($113+4)&4294967295); //@line 1964 "arraymodule.c"
        var $115=HEAP[$114]; //@line 1964 "arraymodule.c"
        var $116=(($115+24)&4294967295); //@line 1964 "arraymodule.c"
        var $117=HEAP[$116]; //@line 1964 "arraymodule.c"
        var $118=HEAP[$v]; //@line 1964 "arraymodule.c"
        FUNCTION_TABLE[$117]($118); //@line 1964 "arraymodule.c"
        __label__ = 32; break; //@line 1964 "arraymodule.c"
      case 32: // $bb31
        var $119=HEAP[$a]; //@line 1965 "arraymodule.c"
        var $120=(($119)&4294967295); //@line 1965 "arraymodule.c"
        var $121=HEAP[$120]; //@line 1965 "arraymodule.c"
        var $122=((($121) - 1)&4294967295); //@line 1965 "arraymodule.c"
        var $123=HEAP[$a]; //@line 1965 "arraymodule.c"
        var $124=(($123)&4294967295); //@line 1965 "arraymodule.c"
        HEAP[$124]=$122; //@line 1965 "arraymodule.c"
        var $125=HEAP[$a]; //@line 1965 "arraymodule.c"
        var $126=(($125)&4294967295); //@line 1965 "arraymodule.c"
        var $127=HEAP[$126]; //@line 1965 "arraymodule.c"
        var $128=((($127))|0)==0; //@line 1965 "arraymodule.c"
        if ($128) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1965 "arraymodule.c"
      case 33: // $bb32
        var $129=HEAP[$a]; //@line 1965 "arraymodule.c"
        var $130=(($129+4)&4294967295); //@line 1965 "arraymodule.c"
        var $131=HEAP[$130]; //@line 1965 "arraymodule.c"
        var $132=(($131+24)&4294967295); //@line 1965 "arraymodule.c"
        var $133=HEAP[$132]; //@line 1965 "arraymodule.c"
        var $134=HEAP[$a]; //@line 1965 "arraymodule.c"
        FUNCTION_TABLE[$133]($134); //@line 1965 "arraymodule.c"
        __label__ = 34; break; //@line 1965 "arraymodule.c"
      case 34: // $bb33
        HEAP[$0]=0; //@line 1966 "arraymodule.c"
        __label__ = 76; break; //@line 1966 "arraymodule.c"
      case 35: // $bb34
        var $135=HEAP[$v]; //@line 1968 "arraymodule.c"
        var $136=(($135)&4294967295); //@line 1968 "arraymodule.c"
        var $137=HEAP[$136]; //@line 1968 "arraymodule.c"
        var $138=((($137) - 1)&4294967295); //@line 1968 "arraymodule.c"
        var $139=HEAP[$v]; //@line 1968 "arraymodule.c"
        var $140=(($139)&4294967295); //@line 1968 "arraymodule.c"
        HEAP[$140]=$138; //@line 1968 "arraymodule.c"
        var $141=HEAP[$v]; //@line 1968 "arraymodule.c"
        var $142=(($141)&4294967295); //@line 1968 "arraymodule.c"
        var $143=HEAP[$142]; //@line 1968 "arraymodule.c"
        var $144=((($143))|0)==0; //@line 1968 "arraymodule.c"
        if ($144) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1968 "arraymodule.c"
      case 36: // $bb35
        var $145=HEAP[$v]; //@line 1968 "arraymodule.c"
        var $146=(($145+4)&4294967295); //@line 1968 "arraymodule.c"
        var $147=HEAP[$146]; //@line 1968 "arraymodule.c"
        var $148=(($147+24)&4294967295); //@line 1968 "arraymodule.c"
        var $149=HEAP[$148]; //@line 1968 "arraymodule.c"
        var $150=HEAP[$v]; //@line 1968 "arraymodule.c"
        FUNCTION_TABLE[$149]($150); //@line 1968 "arraymodule.c"
        __label__ = 37; break; //@line 1968 "arraymodule.c"
      case 37: // $bb36
        var $151=HEAP[$i]; //@line 1956 "arraymodule.c"
        var $152=((($151) + 1)&4294967295); //@line 1956 "arraymodule.c"
        HEAP[$i]=$152; //@line 1956 "arraymodule.c"
        __label__ = 38; break; //@line 1956 "arraymodule.c"
      case 38: // $bb37
        var $153=HEAP[$i]; //@line 1956 "arraymodule.c"
        var $154=HEAP[$len]; //@line 1956 "arraymodule.c"
        var $155=((($153))|0) < ((($154))|0); //@line 1956 "arraymodule.c"
        if ($155) { __label__ = 25; break; } else { __label__ = 39; break; } //@line 1956 "arraymodule.c"
      case 39: // $bb38
        __label__ = 63; break; //@line 1956 "arraymodule.c"
      case 40: // $bb39
        var $156=HEAP[$initial]; //@line 1970 "arraymodule.c"
        var $157=($156)==0; //@line 1970 "arraymodule.c"
        if ($157) { __label__ = 55; break; } else { __label__ = 41; break; } //@line 1970 "arraymodule.c"
      case 41: // $bb40
        var $158=HEAP[$initial]; //@line 1970 "arraymodule.c"
        var $159=(($158+4)&4294967295); //@line 1970 "arraymodule.c"
        var $160=HEAP[$159]; //@line 1970 "arraymodule.c"
        var $161=(($160+84)&4294967295); //@line 1970 "arraymodule.c"
        var $162=HEAP[$161]; //@line 1970 "arraymodule.c"
        var $163=($162) & 134217728; //@line 1970 "arraymodule.c"
        var $164=((($163))|0)==0; //@line 1970 "arraymodule.c"
        if ($164) { __label__ = 55; break; } else { __label__ = 42; break; } //@line 1970 "arraymodule.c"
      case 42: // $bb41
        var $165=HEAP[$initial]; //@line 1972 "arraymodule.c"
        var $166=_PyTuple_Pack(1, $165); //@line 1972 "arraymodule.c"
        HEAP[$t_initial]=$166; //@line 1972 "arraymodule.c"
        var $167=HEAP[$t_initial]; //@line 1973 "arraymodule.c"
        var $168=($167)==0; //@line 1973 "arraymodule.c"
        if ($168) { __label__ = 43; break; } else { __label__ = 46; break; } //@line 1973 "arraymodule.c"
      case 43: // $bb43
        var $169=HEAP[$a]; //@line 1974 "arraymodule.c"
        var $170=(($169)&4294967295); //@line 1974 "arraymodule.c"
        var $171=HEAP[$170]; //@line 1974 "arraymodule.c"
        var $172=((($171) - 1)&4294967295); //@line 1974 "arraymodule.c"
        var $173=HEAP[$a]; //@line 1974 "arraymodule.c"
        var $174=(($173)&4294967295); //@line 1974 "arraymodule.c"
        HEAP[$174]=$172; //@line 1974 "arraymodule.c"
        var $175=HEAP[$a]; //@line 1974 "arraymodule.c"
        var $176=(($175)&4294967295); //@line 1974 "arraymodule.c"
        var $177=HEAP[$176]; //@line 1974 "arraymodule.c"
        var $178=((($177))|0)==0; //@line 1974 "arraymodule.c"
        if ($178) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1974 "arraymodule.c"
      case 44: // $bb44
        var $179=HEAP[$a]; //@line 1974 "arraymodule.c"
        var $180=(($179+4)&4294967295); //@line 1974 "arraymodule.c"
        var $181=HEAP[$180]; //@line 1974 "arraymodule.c"
        var $182=(($181+24)&4294967295); //@line 1974 "arraymodule.c"
        var $183=HEAP[$182]; //@line 1974 "arraymodule.c"
        var $184=HEAP[$a]; //@line 1974 "arraymodule.c"
        FUNCTION_TABLE[$183]($184); //@line 1974 "arraymodule.c"
        __label__ = 45; break; //@line 1974 "arraymodule.c"
      case 45: // $bb45
        HEAP[$0]=0; //@line 1975 "arraymodule.c"
        __label__ = 76; break; //@line 1975 "arraymodule.c"
      case 46: // $bb46
        var $185=HEAP[$a]; //@line 1977 "arraymodule.c"
        var $186=$185; //@line 1977 "arraymodule.c"
        var $187=HEAP[$t_initial]; //@line 1977 "arraymodule.c"
        var $188=_array_fromstring($186, $187); //@line 1977 "arraymodule.c"
        HEAP[$v42]=$188; //@line 1977 "arraymodule.c"
        var $189=HEAP[$t_initial]; //@line 1979 "arraymodule.c"
        var $190=(($189)&4294967295); //@line 1979 "arraymodule.c"
        var $191=HEAP[$190]; //@line 1979 "arraymodule.c"
        var $192=((($191) - 1)&4294967295); //@line 1979 "arraymodule.c"
        var $193=HEAP[$t_initial]; //@line 1979 "arraymodule.c"
        var $194=(($193)&4294967295); //@line 1979 "arraymodule.c"
        HEAP[$194]=$192; //@line 1979 "arraymodule.c"
        var $195=HEAP[$t_initial]; //@line 1979 "arraymodule.c"
        var $196=(($195)&4294967295); //@line 1979 "arraymodule.c"
        var $197=HEAP[$196]; //@line 1979 "arraymodule.c"
        var $198=((($197))|0)==0; //@line 1979 "arraymodule.c"
        if ($198) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 1979 "arraymodule.c"
      case 47: // $bb47
        var $199=HEAP[$t_initial]; //@line 1979 "arraymodule.c"
        var $200=(($199+4)&4294967295); //@line 1979 "arraymodule.c"
        var $201=HEAP[$200]; //@line 1979 "arraymodule.c"
        var $202=(($201+24)&4294967295); //@line 1979 "arraymodule.c"
        var $203=HEAP[$202]; //@line 1979 "arraymodule.c"
        var $204=HEAP[$t_initial]; //@line 1979 "arraymodule.c"
        FUNCTION_TABLE[$203]($204); //@line 1979 "arraymodule.c"
        __label__ = 48; break; //@line 1979 "arraymodule.c"
      case 48: // $bb48
        var $205=HEAP[$v42]; //@line 1980 "arraymodule.c"
        var $206=($205)==0; //@line 1980 "arraymodule.c"
        if ($206) { __label__ = 49; break; } else { __label__ = 52; break; } //@line 1980 "arraymodule.c"
      case 49: // $bb49
        var $207=HEAP[$a]; //@line 1981 "arraymodule.c"
        var $208=(($207)&4294967295); //@line 1981 "arraymodule.c"
        var $209=HEAP[$208]; //@line 1981 "arraymodule.c"
        var $210=((($209) - 1)&4294967295); //@line 1981 "arraymodule.c"
        var $211=HEAP[$a]; //@line 1981 "arraymodule.c"
        var $212=(($211)&4294967295); //@line 1981 "arraymodule.c"
        HEAP[$212]=$210; //@line 1981 "arraymodule.c"
        var $213=HEAP[$a]; //@line 1981 "arraymodule.c"
        var $214=(($213)&4294967295); //@line 1981 "arraymodule.c"
        var $215=HEAP[$214]; //@line 1981 "arraymodule.c"
        var $216=((($215))|0)==0; //@line 1981 "arraymodule.c"
        if ($216) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 1981 "arraymodule.c"
      case 50: // $bb50
        var $217=HEAP[$a]; //@line 1981 "arraymodule.c"
        var $218=(($217+4)&4294967295); //@line 1981 "arraymodule.c"
        var $219=HEAP[$218]; //@line 1981 "arraymodule.c"
        var $220=(($219+24)&4294967295); //@line 1981 "arraymodule.c"
        var $221=HEAP[$220]; //@line 1981 "arraymodule.c"
        var $222=HEAP[$a]; //@line 1981 "arraymodule.c"
        FUNCTION_TABLE[$221]($222); //@line 1981 "arraymodule.c"
        __label__ = 51; break; //@line 1981 "arraymodule.c"
      case 51: // $bb51
        HEAP[$0]=0; //@line 1982 "arraymodule.c"
        __label__ = 76; break; //@line 1982 "arraymodule.c"
      case 52: // $bb52
        var $223=HEAP[$v42]; //@line 1984 "arraymodule.c"
        var $224=(($223)&4294967295); //@line 1984 "arraymodule.c"
        var $225=HEAP[$224]; //@line 1984 "arraymodule.c"
        var $226=((($225) - 1)&4294967295); //@line 1984 "arraymodule.c"
        var $227=HEAP[$v42]; //@line 1984 "arraymodule.c"
        var $228=(($227)&4294967295); //@line 1984 "arraymodule.c"
        HEAP[$228]=$226; //@line 1984 "arraymodule.c"
        var $229=HEAP[$v42]; //@line 1984 "arraymodule.c"
        var $230=(($229)&4294967295); //@line 1984 "arraymodule.c"
        var $231=HEAP[$230]; //@line 1984 "arraymodule.c"
        var $232=((($231))|0)==0; //@line 1984 "arraymodule.c"
        if ($232) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 1984 "arraymodule.c"
      case 53: // $bb53
        var $233=HEAP[$v42]; //@line 1984 "arraymodule.c"
        var $234=(($233+4)&4294967295); //@line 1984 "arraymodule.c"
        var $235=HEAP[$234]; //@line 1984 "arraymodule.c"
        var $236=(($235+24)&4294967295); //@line 1984 "arraymodule.c"
        var $237=HEAP[$236]; //@line 1984 "arraymodule.c"
        var $238=HEAP[$v42]; //@line 1984 "arraymodule.c"
        FUNCTION_TABLE[$237]($238); //@line 1984 "arraymodule.c"
        __label__ = 54; break; //@line 1984 "arraymodule.c"
      case 54: // $bb54
        __label__ = 63; break; //@line 1984 "arraymodule.c"
      case 55: // $bb55
        var $239=HEAP[$initial]; //@line 1986 "arraymodule.c"
        var $240=($239)!=0; //@line 1986 "arraymodule.c"
        if ($240) { __label__ = 56; break; } else { __label__ = 63; break; } //@line 1986 "arraymodule.c"
      case 56: // $bb56
        var $241=HEAP[$initial]; //@line 1986 "arraymodule.c"
        var $242=(($241+4)&4294967295); //@line 1986 "arraymodule.c"
        var $243=HEAP[$242]; //@line 1986 "arraymodule.c"
        var $244=(($243+84)&4294967295); //@line 1986 "arraymodule.c"
        var $245=HEAP[$244]; //@line 1986 "arraymodule.c"
        var $246=($245) & 268435456; //@line 1986 "arraymodule.c"
        var $247=((($246))|0)!=0; //@line 1986 "arraymodule.c"
        if ($247) { __label__ = 57; break; } else { __label__ = 63; break; } //@line 1986 "arraymodule.c"
      case 57: // $bb57
        var $248=HEAP[$initial]; //@line 1987 "arraymodule.c"
        var $249=$248; //@line 1987 "arraymodule.c"
        var $250=(($249+8)&4294967295); //@line 1987 "arraymodule.c"
        var $251=HEAP[$250]; //@line 1987 "arraymodule.c"
        var $252=((($251) * 2)&4294967295); //@line 1987 "arraymodule.c"
        HEAP[$n]=$252; //@line 1987 "arraymodule.c"
        var $253=HEAP[$n]; //@line 1988 "arraymodule.c"
        var $254=((($253))|0) > 0; //@line 1988 "arraymodule.c"
        if ($254) { __label__ = 58; break; } else { __label__ = 63; break; } //@line 1988 "arraymodule.c"
      case 58: // $bb58
        var $255=HEAP[$a]; //@line 1989 "arraymodule.c"
        var $256=$255; //@line 1989 "arraymodule.c"
        HEAP[$self]=$256; //@line 1989 "arraymodule.c"
        var $257=HEAP[$self]; //@line 1990 "arraymodule.c"
        var $258=(($257+12)&4294967295); //@line 1990 "arraymodule.c"
        var $259=HEAP[$258]; //@line 1990 "arraymodule.c"
        HEAP[$item]=$259; //@line 1990 "arraymodule.c"
        var $260=HEAP[$n]; //@line 1991 "arraymodule.c"
        var $261=HEAP[$item]; //@line 1991 "arraymodule.c"
        var $262=_PyMem_Realloc($261, $260); //@line 1991 "arraymodule.c"
        HEAP[$item]=$262; //@line 1991 "arraymodule.c"
        var $263=HEAP[$item]; //@line 1992 "arraymodule.c"
        var $264=($263)==0; //@line 1992 "arraymodule.c"
        if ($264) { __label__ = 59; break; } else { __label__ = 62; break; } //@line 1992 "arraymodule.c"
      case 59: // $bb59
        var $265=_PyErr_NoMemory(); //@line 1993 "arraymodule.c"
        var $266=HEAP[$a]; //@line 1994 "arraymodule.c"
        var $267=(($266)&4294967295); //@line 1994 "arraymodule.c"
        var $268=HEAP[$267]; //@line 1994 "arraymodule.c"
        var $269=((($268) - 1)&4294967295); //@line 1994 "arraymodule.c"
        var $270=HEAP[$a]; //@line 1994 "arraymodule.c"
        var $271=(($270)&4294967295); //@line 1994 "arraymodule.c"
        HEAP[$271]=$269; //@line 1994 "arraymodule.c"
        var $272=HEAP[$a]; //@line 1994 "arraymodule.c"
        var $273=(($272)&4294967295); //@line 1994 "arraymodule.c"
        var $274=HEAP[$273]; //@line 1994 "arraymodule.c"
        var $275=((($274))|0)==0; //@line 1994 "arraymodule.c"
        if ($275) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 1994 "arraymodule.c"
      case 60: // $bb60
        var $276=HEAP[$a]; //@line 1994 "arraymodule.c"
        var $277=(($276+4)&4294967295); //@line 1994 "arraymodule.c"
        var $278=HEAP[$277]; //@line 1994 "arraymodule.c"
        var $279=(($278+24)&4294967295); //@line 1994 "arraymodule.c"
        var $280=HEAP[$279]; //@line 1994 "arraymodule.c"
        var $281=HEAP[$a]; //@line 1994 "arraymodule.c"
        FUNCTION_TABLE[$280]($281); //@line 1994 "arraymodule.c"
        __label__ = 61; break; //@line 1994 "arraymodule.c"
      case 61: // $bb61
        HEAP[$0]=0; //@line 1995 "arraymodule.c"
        __label__ = 76; break; //@line 1995 "arraymodule.c"
      case 62: // $bb62
        var $282=HEAP[$self]; //@line 1997 "arraymodule.c"
        var $283=(($282+12)&4294967295); //@line 1997 "arraymodule.c"
        var $284=HEAP[$item]; //@line 1997 "arraymodule.c"
        HEAP[$283]=$284; //@line 1997 "arraymodule.c"
        var $285=HEAP[$self]; //@line 1998 "arraymodule.c"
        var $286=$285; //@line 1998 "arraymodule.c"
        var $287=HEAP[$n]; //@line 1998 "arraymodule.c"
        var $288=Math.floor(((($287))>>>0)/2); //@line 1998 "arraymodule.c"
        var $289=(($286+8)&4294967295); //@line 1998 "arraymodule.c"
        HEAP[$289]=$288; //@line 1998 "arraymodule.c"
        var $290=HEAP[$n]; //@line 1999 "arraymodule.c"
        var $291=HEAP[$initial]; //@line 1999 "arraymodule.c"
        var $292=$291; //@line 1999 "arraymodule.c"
        var $293=(($292+12)&4294967295); //@line 1999 "arraymodule.c"
        var $294=HEAP[$293]; //@line 1999 "arraymodule.c"
        var $295=HEAP[$item]; //@line 1999 "arraymodule.c"
        var $296=$294; //@line 1999 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($295, $296, $290, 1, 0); //@line 1999 "arraymodule.c"
        var $297=HEAP[$self]; //@line 2000 "arraymodule.c"
        var $298=$297; //@line 2000 "arraymodule.c"
        var $299=(($298+8)&4294967295); //@line 2000 "arraymodule.c"
        var $300=HEAP[$299]; //@line 2000 "arraymodule.c"
        var $301=HEAP[$self]; //@line 2000 "arraymodule.c"
        var $302=(($301+16)&4294967295); //@line 2000 "arraymodule.c"
        HEAP[$302]=$300; //@line 2000 "arraymodule.c"
        __label__ = 63; break; //@line 2000 "arraymodule.c"
      case 63: // $bb63
        var $303=HEAP[$it]; //@line 2004 "arraymodule.c"
        var $304=($303)!=0; //@line 2004 "arraymodule.c"
        if ($304) { __label__ = 64; break; } else { __label__ = 72; break; } //@line 2004 "arraymodule.c"
      case 64: // $bb64
        var $305=HEAP[$a]; //@line 2005 "arraymodule.c"
        var $306=$305; //@line 2005 "arraymodule.c"
        var $307=HEAP[$it]; //@line 2005 "arraymodule.c"
        var $308=_array_iter_extend($306, $307); //@line 2005 "arraymodule.c"
        var $309=((($308))|0)==-1; //@line 2005 "arraymodule.c"
        if ($309) { __label__ = 65; break; } else { __label__ = 70; break; } //@line 2005 "arraymodule.c"
      case 65: // $bb65
        var $310=HEAP[$it]; //@line 2006 "arraymodule.c"
        var $311=(($310)&4294967295); //@line 2006 "arraymodule.c"
        var $312=HEAP[$311]; //@line 2006 "arraymodule.c"
        var $313=((($312) - 1)&4294967295); //@line 2006 "arraymodule.c"
        var $314=HEAP[$it]; //@line 2006 "arraymodule.c"
        var $315=(($314)&4294967295); //@line 2006 "arraymodule.c"
        HEAP[$315]=$313; //@line 2006 "arraymodule.c"
        var $316=HEAP[$it]; //@line 2006 "arraymodule.c"
        var $317=(($316)&4294967295); //@line 2006 "arraymodule.c"
        var $318=HEAP[$317]; //@line 2006 "arraymodule.c"
        var $319=((($318))|0)==0; //@line 2006 "arraymodule.c"
        if ($319) { __label__ = 66; break; } else { __label__ = 67; break; } //@line 2006 "arraymodule.c"
      case 66: // $bb66
        var $320=HEAP[$it]; //@line 2006 "arraymodule.c"
        var $321=(($320+4)&4294967295); //@line 2006 "arraymodule.c"
        var $322=HEAP[$321]; //@line 2006 "arraymodule.c"
        var $323=(($322+24)&4294967295); //@line 2006 "arraymodule.c"
        var $324=HEAP[$323]; //@line 2006 "arraymodule.c"
        var $325=HEAP[$it]; //@line 2006 "arraymodule.c"
        FUNCTION_TABLE[$324]($325); //@line 2006 "arraymodule.c"
        __label__ = 67; break; //@line 2006 "arraymodule.c"
      case 67: // $bb67
        var $326=HEAP[$a]; //@line 2007 "arraymodule.c"
        var $327=(($326)&4294967295); //@line 2007 "arraymodule.c"
        var $328=HEAP[$327]; //@line 2007 "arraymodule.c"
        var $329=((($328) - 1)&4294967295); //@line 2007 "arraymodule.c"
        var $330=HEAP[$a]; //@line 2007 "arraymodule.c"
        var $331=(($330)&4294967295); //@line 2007 "arraymodule.c"
        HEAP[$331]=$329; //@line 2007 "arraymodule.c"
        var $332=HEAP[$a]; //@line 2007 "arraymodule.c"
        var $333=(($332)&4294967295); //@line 2007 "arraymodule.c"
        var $334=HEAP[$333]; //@line 2007 "arraymodule.c"
        var $335=((($334))|0)==0; //@line 2007 "arraymodule.c"
        if ($335) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 2007 "arraymodule.c"
      case 68: // $bb68
        var $336=HEAP[$a]; //@line 2007 "arraymodule.c"
        var $337=(($336+4)&4294967295); //@line 2007 "arraymodule.c"
        var $338=HEAP[$337]; //@line 2007 "arraymodule.c"
        var $339=(($338+24)&4294967295); //@line 2007 "arraymodule.c"
        var $340=HEAP[$339]; //@line 2007 "arraymodule.c"
        var $341=HEAP[$a]; //@line 2007 "arraymodule.c"
        FUNCTION_TABLE[$340]($341); //@line 2007 "arraymodule.c"
        __label__ = 69; break; //@line 2007 "arraymodule.c"
      case 69: // $bb69
        HEAP[$0]=0; //@line 2008 "arraymodule.c"
        __label__ = 76; break; //@line 2008 "arraymodule.c"
      case 70: // $bb70
        var $342=HEAP[$it]; //@line 2010 "arraymodule.c"
        var $343=(($342)&4294967295); //@line 2010 "arraymodule.c"
        var $344=HEAP[$343]; //@line 2010 "arraymodule.c"
        var $345=((($344) - 1)&4294967295); //@line 2010 "arraymodule.c"
        var $346=HEAP[$it]; //@line 2010 "arraymodule.c"
        var $347=(($346)&4294967295); //@line 2010 "arraymodule.c"
        HEAP[$347]=$345; //@line 2010 "arraymodule.c"
        var $348=HEAP[$it]; //@line 2010 "arraymodule.c"
        var $349=(($348)&4294967295); //@line 2010 "arraymodule.c"
        var $350=HEAP[$349]; //@line 2010 "arraymodule.c"
        var $351=((($350))|0)==0; //@line 2010 "arraymodule.c"
        if ($351) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 2010 "arraymodule.c"
      case 71: // $bb71
        var $352=HEAP[$it]; //@line 2010 "arraymodule.c"
        var $353=(($352+4)&4294967295); //@line 2010 "arraymodule.c"
        var $354=HEAP[$353]; //@line 2010 "arraymodule.c"
        var $355=(($354+24)&4294967295); //@line 2010 "arraymodule.c"
        var $356=HEAP[$355]; //@line 2010 "arraymodule.c"
        var $357=HEAP[$it]; //@line 2010 "arraymodule.c"
        FUNCTION_TABLE[$356]($357); //@line 2010 "arraymodule.c"
        __label__ = 72; break; //@line 2010 "arraymodule.c"
      case 72: // $bb72
        var $358=HEAP[$a]; //@line 2012 "arraymodule.c"
        HEAP[$0]=$358; //@line 2012 "arraymodule.c"
        __label__ = 76; break; //@line 2012 "arraymodule.c"
      case 73: // $bb73
        var $359=HEAP[$descr]; //@line 1939 "arraymodule.c"
        var $360=(($359+16)&4294967295); //@line 1939 "arraymodule.c"
        HEAP[$descr]=$360; //@line 1939 "arraymodule.c"
        __label__ = 74; break; //@line 1939 "arraymodule.c"
      case 74: // $bb74
        var $361=HEAP[$descr]; //@line 1939 "arraymodule.c"
        var $362=(($361)&4294967295); //@line 1939 "arraymodule.c"
        var $363=HEAP[$362]; //@line 1939 "arraymodule.c"
        var $364=((($363))|0)!=0; //@line 1939 "arraymodule.c"
        if ($364) { __label__ = 15; break; } else { __label__ = 75; break; } //@line 1939 "arraymodule.c"
      case 75: // $bb75
        var $365=HEAP[_PyExc_ValueError]; //@line 2015 "arraymodule.c"
        _PyErr_SetString($365, ((__str84)&4294967295)); //@line 2015 "arraymodule.c"
        HEAP[$0]=0; //@line 2017 "arraymodule.c"
        __label__ = 76; break; //@line 2017 "arraymodule.c"
      case 76: // $bb76
        var $366=HEAP[$0]; //@line 1921 "arraymodule.c"
        HEAP[$retval]=$366; //@line 1921 "arraymodule.c"
        __label__ = 77; break; //@line 1921 "arraymodule.c"
      case 77: // $return
        var $retval77=HEAP[$retval]; //@line 1921 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval77; //@line 1921 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_iter($ao) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ao_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $it=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$ao_addr]=$ao;
        var $1=HEAP[$ao_addr]; //@line 2148 "arraymodule.c"
        var $2=$1; //@line 2148 "arraymodule.c"
        var $3=(($2+4)&4294967295); //@line 2148 "arraymodule.c"
        var $4=HEAP[$3]; //@line 2148 "arraymodule.c"
        var $5=($4)!=(_Arraytype); //@line 2148 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2148 "arraymodule.c"
      case 1: // $bb
        var $6=HEAP[$ao_addr]; //@line 2148 "arraymodule.c"
        var $7=$6; //@line 2148 "arraymodule.c"
        var $8=(($7+4)&4294967295); //@line 2148 "arraymodule.c"
        var $9=HEAP[$8]; //@line 2148 "arraymodule.c"
        var $10=_PyType_IsSubtype($9, _Arraytype); //@line 2148 "arraymodule.c"
        var $11=((($10))|0)==0; //@line 2148 "arraymodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2148 "arraymodule.c"
      case 2: // $bb1
        __PyErr_BadInternalCall(((__str15)&4294967295), 2149); //@line 2149 "arraymodule.c"
        HEAP[$0]=0; //@line 2150 "arraymodule.c"
        __label__ = 6; break; //@line 2150 "arraymodule.c"
      case 3: // $bb2
        var $12=__PyObject_GC_New(_PyArrayIter_Type); //@line 2153 "arraymodule.c"
        var $13=$12; //@line 2153 "arraymodule.c"
        HEAP[$it]=$13; //@line 2153 "arraymodule.c"
        var $14=HEAP[$it]; //@line 2154 "arraymodule.c"
        var $15=($14)==0; //@line 2154 "arraymodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2154 "arraymodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 2155 "arraymodule.c"
        __label__ = 6; break; //@line 2155 "arraymodule.c"
      case 5: // $bb4
        var $16=HEAP[$ao_addr]; //@line 2157 "arraymodule.c"
        var $17=$16; //@line 2157 "arraymodule.c"
        var $18=(($17)&4294967295); //@line 2157 "arraymodule.c"
        var $19=HEAP[$18]; //@line 2157 "arraymodule.c"
        var $20=((($19) + 1)&4294967295); //@line 2157 "arraymodule.c"
        var $21=(($17)&4294967295); //@line 2157 "arraymodule.c"
        HEAP[$21]=$20; //@line 2157 "arraymodule.c"
        var $22=HEAP[$it]; //@line 2158 "arraymodule.c"
        var $23=(($22+12)&4294967295); //@line 2158 "arraymodule.c"
        var $24=HEAP[$ao_addr]; //@line 2158 "arraymodule.c"
        HEAP[$23]=$24; //@line 2158 "arraymodule.c"
        var $25=HEAP[$it]; //@line 2159 "arraymodule.c"
        var $26=(($25+8)&4294967295); //@line 2159 "arraymodule.c"
        HEAP[$26]=0; //@line 2159 "arraymodule.c"
        var $27=HEAP[$ao_addr]; //@line 2160 "arraymodule.c"
        var $28=(($27+20)&4294967295); //@line 2160 "arraymodule.c"
        var $29=HEAP[$28]; //@line 2160 "arraymodule.c"
        var $30=(($29+8)&4294967295); //@line 2160 "arraymodule.c"
        var $31=HEAP[$30]; //@line 2160 "arraymodule.c"
        var $32=HEAP[$it]; //@line 2160 "arraymodule.c"
        var $33=(($32+16)&4294967295); //@line 2160 "arraymodule.c"
        HEAP[$33]=$31; //@line 2160 "arraymodule.c"
        var $34=HEAP[$it]; //@line 2161 "arraymodule.c"
        var $35=$34; //@line 2161 "arraymodule.c"
        _PyObject_GC_Track($35); //@line 2161 "arraymodule.c"
        var $36=HEAP[$it]; //@line 2162 "arraymodule.c"
        var $37=$36; //@line 2162 "arraymodule.c"
        HEAP[$0]=$37; //@line 2162 "arraymodule.c"
        __label__ = 6; break; //@line 2162 "arraymodule.c"
      case 6: // $bb5
        var $38=HEAP[$0]; //@line 2150 "arraymodule.c"
        HEAP[$retval]=$38; //@line 2150 "arraymodule.c"
        __label__ = 7; break; //@line 2150 "arraymodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 2150 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 2150 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _arrayiter_next($it) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $it_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$it_addr]=$it;
        var $1=HEAP[$it_addr]; //@line 2168 "arraymodule.c"
        var $2=$1; //@line 2168 "arraymodule.c"
        var $3=(($2+4)&4294967295); //@line 2168 "arraymodule.c"
        var $4=HEAP[$3]; //@line 2168 "arraymodule.c"
        var $5=($4)!=(_PyArrayIter_Type); //@line 2168 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2168 "arraymodule.c"
      case 1: // $bb
        var $6=HEAP[$it_addr]; //@line 2168 "arraymodule.c"
        var $7=$6; //@line 2168 "arraymodule.c"
        var $8=(($7+4)&4294967295); //@line 2168 "arraymodule.c"
        var $9=HEAP[$8]; //@line 2168 "arraymodule.c"
        var $10=_PyType_IsSubtype($9, _PyArrayIter_Type); //@line 2168 "arraymodule.c"
        var $11=((($10))|0)==0; //@line 2168 "arraymodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2168 "arraymodule.c"
      case 2: // $bb1
        ___assert_fail(((__str86)&4294967295), ((__str15)&4294967295), 2168, ((___PRETTY_FUNCTION___11388)&4294967295)); //@line 2168 "arraymodule.c"
        throw "Reached an unreachable! Original .ll line: 9602"; //@line 2168 "arraymodule.c"
      case 3: // $bb2
        var $12=HEAP[$it_addr]; //@line 2169 "arraymodule.c"
        var $13=(($12+8)&4294967295); //@line 2169 "arraymodule.c"
        var $14=HEAP[$13]; //@line 2169 "arraymodule.c"
        var $15=HEAP[$it_addr]; //@line 2169 "arraymodule.c"
        var $16=(($15+12)&4294967295); //@line 2169 "arraymodule.c"
        var $17=HEAP[$16]; //@line 2169 "arraymodule.c"
        var $18=$17; //@line 2169 "arraymodule.c"
        var $19=(($18+8)&4294967295); //@line 2169 "arraymodule.c"
        var $20=HEAP[$19]; //@line 2169 "arraymodule.c"
        var $21=((($14))|0) < ((($20))|0); //@line 2169 "arraymodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2169 "arraymodule.c"
      case 4: // $bb3
        var $22=HEAP[$it_addr]; //@line 2170 "arraymodule.c"
        var $23=(($22+16)&4294967295); //@line 2170 "arraymodule.c"
        var $24=HEAP[$23]; //@line 2170 "arraymodule.c"
        var $25=HEAP[$it_addr]; //@line 2170 "arraymodule.c"
        var $26=(($25+8)&4294967295); //@line 2170 "arraymodule.c"
        var $27=HEAP[$26]; //@line 2170 "arraymodule.c"
        var $28=((($27) + 1)&4294967295); //@line 2170 "arraymodule.c"
        var $29=HEAP[$it_addr]; //@line 2170 "arraymodule.c"
        var $30=(($29+8)&4294967295); //@line 2170 "arraymodule.c"
        HEAP[$30]=$28; //@line 2170 "arraymodule.c"
        var $31=HEAP[$it_addr]; //@line 2170 "arraymodule.c"
        var $32=(($31+12)&4294967295); //@line 2170 "arraymodule.c"
        var $33=HEAP[$32]; //@line 2170 "arraymodule.c"
        var $34=FUNCTION_TABLE[$24]($33, $27); //@line 2170 "arraymodule.c"
        HEAP[$0]=$34; //@line 2170 "arraymodule.c"
        __label__ = 6; break; //@line 2170 "arraymodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 2171 "arraymodule.c"
        __label__ = 6; break; //@line 2171 "arraymodule.c"
      case 6: // $bb5
        var $35=HEAP[$0]; //@line 2170 "arraymodule.c"
        HEAP[$retval]=$35; //@line 2170 "arraymodule.c"
        __label__ = 7; break; //@line 2170 "arraymodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 2170 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 2170 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _arrayiter_dealloc($it) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $it_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$it_addr]=$it;
        var $0=HEAP[$it_addr]; //@line 2177 "arraymodule.c"
        var $1=$0; //@line 2177 "arraymodule.c"
        _PyObject_GC_UnTrack($1); //@line 2177 "arraymodule.c"
        var $2=HEAP[$it_addr]; //@line 2178 "arraymodule.c"
        var $3=(($2+12)&4294967295); //@line 2178 "arraymodule.c"
        var $4=HEAP[$3]; //@line 2178 "arraymodule.c"
        var $5=($4)!=0; //@line 2178 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2178 "arraymodule.c"
      case 1: // $bb
        var $6=HEAP[$it_addr]; //@line 2178 "arraymodule.c"
        var $7=(($6+12)&4294967295); //@line 2178 "arraymodule.c"
        var $8=HEAP[$7]; //@line 2178 "arraymodule.c"
        var $9=$8; //@line 2178 "arraymodule.c"
        var $10=(($9)&4294967295); //@line 2178 "arraymodule.c"
        var $11=HEAP[$10]; //@line 2178 "arraymodule.c"
        var $12=((($11) - 1)&4294967295); //@line 2178 "arraymodule.c"
        var $13=(($9)&4294967295); //@line 2178 "arraymodule.c"
        HEAP[$13]=$12; //@line 2178 "arraymodule.c"
        var $14=(($9)&4294967295); //@line 2178 "arraymodule.c"
        var $15=HEAP[$14]; //@line 2178 "arraymodule.c"
        var $16=((($15))|0)==0; //@line 2178 "arraymodule.c"
        if ($16) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2178 "arraymodule.c"
      case 2: // $bb1
        var $17=HEAP[$it_addr]; //@line 2178 "arraymodule.c"
        var $18=(($17+12)&4294967295); //@line 2178 "arraymodule.c"
        var $19=HEAP[$18]; //@line 2178 "arraymodule.c"
        var $20=$19; //@line 2178 "arraymodule.c"
        var $21=(($20+4)&4294967295); //@line 2178 "arraymodule.c"
        var $22=HEAP[$21]; //@line 2178 "arraymodule.c"
        var $23=(($22+24)&4294967295); //@line 2178 "arraymodule.c"
        var $24=HEAP[$23]; //@line 2178 "arraymodule.c"
        var $25=HEAP[$it_addr]; //@line 2178 "arraymodule.c"
        var $26=(($25+12)&4294967295); //@line 2178 "arraymodule.c"
        var $27=HEAP[$26]; //@line 2178 "arraymodule.c"
        var $28=$27; //@line 2178 "arraymodule.c"
        FUNCTION_TABLE[$24]($28); //@line 2178 "arraymodule.c"
        __label__ = 3; break; //@line 2178 "arraymodule.c"
      case 3: // $bb2
        var $29=HEAP[$it_addr]; //@line 2179 "arraymodule.c"
        var $30=$29; //@line 2179 "arraymodule.c"
        _PyObject_GC_Del($30); //@line 2179 "arraymodule.c"
        __label__ = 4; break; //@line 2180 "arraymodule.c"
      case 4: // $return
        STACKTOP = __stackBase__;
        return; //@line 2180 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _arrayiter_traverse($it, $visit, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $it_addr=__stackBase__;
        var $visit_addr=__stackBase__+4;
        var $arg_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $vret=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$it_addr]=$it;
        HEAP[$visit_addr]=$visit;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$it_addr]; //@line 2185 "arraymodule.c"
        var $2=(($1+12)&4294967295); //@line 2185 "arraymodule.c"
        var $3=HEAP[$2]; //@line 2185 "arraymodule.c"
        var $4=($3)!=0; //@line 2185 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2185 "arraymodule.c"
      case 1: // $bb
        var $5=HEAP[$it_addr]; //@line 2185 "arraymodule.c"
        var $6=(($5+12)&4294967295); //@line 2185 "arraymodule.c"
        var $7=HEAP[$6]; //@line 2185 "arraymodule.c"
        var $8=$7; //@line 2185 "arraymodule.c"
        var $9=HEAP[$visit_addr]; //@line 2185 "arraymodule.c"
        var $10=HEAP[$arg_addr]; //@line 2185 "arraymodule.c"
        var $11=FUNCTION_TABLE[$9]($8, $10); //@line 2185 "arraymodule.c"
        HEAP[$vret]=$11; //@line 2185 "arraymodule.c"
        var $12=HEAP[$vret]; //@line 2185 "arraymodule.c"
        var $13=((($12))|0)!=0; //@line 2185 "arraymodule.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2185 "arraymodule.c"
      case 2: // $bb1
        var $14=HEAP[$vret]; //@line 2185 "arraymodule.c"
        HEAP[$0]=$14; //@line 2185 "arraymodule.c"
        __label__ = 4; break; //@line 2185 "arraymodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2186 "arraymodule.c"
        __label__ = 4; break; //@line 2186 "arraymodule.c"
      case 4: // $bb3
        var $15=HEAP[$0]; //@line 2185 "arraymodule.c"
        HEAP[$retval]=$15; //@line 2185 "arraymodule.c"
        __label__ = 5; break; //@line 2185 "arraymodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 2185 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 2185 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initarray() {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $_alloca_point_=0;
        HEAP[((_Arraytype+4)&4294967295)]=_PyType_Type; //@line 2235 "arraymodule.c"
        HEAP[((_PyArrayIter_Type+4)&4294967295)]=_PyType_Type; //@line 2236 "arraymodule.c"
        var $0=_Py_InitModule4(((__str88)&4294967295), ((_a_methods)&4294967295), ((_module_doc)&4294967295), 0, 1013); //@line 2237 "arraymodule.c"
        HEAP[$m]=$0; //@line 2237 "arraymodule.c"
        var $1=HEAP[$m]; //@line 2238 "arraymodule.c"
        var $2=($1)==0; //@line 2238 "arraymodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 2238 "arraymodule.c"
      case 1: // $bb
        var $3=((_Arraytype)&4294967295); //@line 2241 "arraymodule.c"
        var $4=HEAP[$3]; //@line 2241 "arraymodule.c"
        var $5=((($4) + 1)&4294967295); //@line 2241 "arraymodule.c"
        var $6=((_Arraytype)&4294967295); //@line 2241 "arraymodule.c"
        HEAP[$6]=$5; //@line 2241 "arraymodule.c"
        var $7=HEAP[$m]; //@line 2242 "arraymodule.c"
        var $8=_PyModule_AddObject($7, ((__str89)&4294967295), _Arraytype); //@line 2242 "arraymodule.c"
        var $9=((_Arraytype)&4294967295); //@line 2243 "arraymodule.c"
        var $10=HEAP[$9]; //@line 2243 "arraymodule.c"
        var $11=((($10) + 1)&4294967295); //@line 2243 "arraymodule.c"
        var $12=((_Arraytype)&4294967295); //@line 2243 "arraymodule.c"
        HEAP[$12]=$11; //@line 2243 "arraymodule.c"
        var $13=HEAP[$m]; //@line 2244 "arraymodule.c"
        var $14=_PyModule_AddObject($13, ((__str88)&4294967295), _Arraytype); //@line 2244 "arraymodule.c"
        __label__ = 2; break; //@line 2244 "arraymodule.c"
      case 2: // $bb1
        __label__ = 3; break; //@line 2239 "arraymodule.c"
      case 3: // $return
        STACKTOP = __stackBase__;
        return; //@line 2239 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initarray"] = _initarray;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_c_getitem,0,_c_setitem,0,_b_getitem,0,_b_setitem,0,_BB_getitem,0,_BB_setitem,0,_u_getitem,0,_u_setitem,0,_h_getitem,0,_h_setitem,0,_HH_getitem,0,_HH_setitem,0,_i_getitem,0,_i_setitem,0,_II_getitem,0,_II_setitem,0,_l_getitem,0,_l_setitem,0,_LL_getitem,0,_LL_setitem,0,_f_getitem,0,_f_setitem,0,_d_getitem,0,_d_setitem,0,_array_get_typecode,0,_array_get_itemsize,0,_array_append,0,_array_buffer_info,0,_array_byteswap,0,_array_copy,0,_array_count,0,_array_extend,0,_array_fromfile,0,_array_fromlist,0,_array_fromstring,0,_array_fromunicode,0,_array_index,0,_array_insert,0,_array_pop,0,_array_fromfile_as_read,0,_array_reduce,0,_array_remove,0,_array_reverse,0,_array_tofile,0,_array_tolist,0,_array_tostring,0,_array_tounicode,0,_array_tofile_as_write,0,_array_length,0,_array_subscr,0,_array_ass_subscr,0,_array_concat,0,_array_repeat,0,_array_item,0,_array_slice,0,_array_ass_item,0,_array_ass_slice,0,_array_contains,0,_array_inplace_concat,0,_array_inplace_repeat,0,_array_buffer_getreadbuf,0,_array_buffer_getwritebuf,0,_array_buffer_getsegcount,0,_array_dealloc,0,_array_repr,0,_PyObject_GenericGetAttr,0,_array_richcompare,0,_array_iter,0,_PyType_GenericAlloc,0,_array_new,0,_PyObject_Free,0,_arrayiter_dealloc,0,_arrayiter_traverse,0,_PyObject_SelfIter,0,_arrayiter_next,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([99,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,99,104,97,114,0] /* c;array item must be */, "i8", ALLOC_NORMAL);
__str1=allocate([104,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0] /* h;array item must be */, "i8", ALLOC_NORMAL);
__str2=allocate([115,105,103,110,101,100,32,99,104,97,114,32,105,115,32,108,101,115,115,32,116,104,97,110,32,109,105,110,105,109,117,109,0] /* signed char is less  */, "i8", ALLOC_NORMAL);
__str3=allocate([115,105,103,110,101,100,32,99,104,97,114,32,105,115,32,103,114,101,97,116,101,114,32,116,104,97,110,32,109,97,120,105,109,117,109,0] /* signed char is great */, "i8", ALLOC_NORMAL);
__str4=allocate([98,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0] /* b;array item must be */, "i8", ALLOC_NORMAL);
__str5=allocate([117,35,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,117,110,105,99,111,100,101,32,99,104,97,114,97,99,116,101,114,0] /* u#;array item must b */, "i8", ALLOC_NORMAL);
__str6=allocate([97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,117,110,105,99,111,100,101,32,99,104,97,114,97,99,116,101,114,0] /* array item must be u */, "i8", ALLOC_NORMAL);
__str7=allocate([105,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0] /* i;array item must be */, "i8", ALLOC_NORMAL);
__str8=allocate([117,110,115,105,103,110,101,100,32,115,104,111,114,116,32,105,115,32,108,101,115,115,32,116,104,97,110,32,109,105,110,105,109,117,109,0] /* unsigned short is le */, "i8", ALLOC_NORMAL);
__str9=allocate([117,110,115,105,103,110,101,100,32,115,104,111,114,116,32,105,115,32,103,114,101,97,116,101,114,32,116,104,97,110,32,109,97,120,105,109,117,109,0] /* unsigned short is gr */, "i8", ALLOC_NORMAL);
__str10=allocate([108,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0] /* l;array item must be */, "i8", ALLOC_NORMAL);
__str11=allocate([117,110,115,105,103,110,101,100,32,105,110,116,32,105,115,32,108,101,115,115,32,116,104,97,110,32,109,105,110,105,109,117,109,0] /* unsigned int is less */, "i8", ALLOC_NORMAL);
__str12=allocate([117,110,115,105,103,110,101,100,32,108,111,110,103,32,105,115,32,108,101,115,115,32,116,104,97,110,32,109,105,110,105,109,117,109,0] /* unsigned long is les */, "i8", ALLOC_NORMAL);
__str13=allocate([102,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,102,108,111,97,116,0] /* f;array item must be */, "i8", ALLOC_NORMAL);
__str14=allocate([100,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,102,108,111,97,116,0] /* d;array item must be */, "i8", ALLOC_NORMAL);
_descriptors=allocate([99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0], ALLOC_NORMAL);
__str15=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,97,114,114,97,121,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/a */, "i8", ALLOC_NORMAL);
__str16=allocate([40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,111,112,41,41,45,62,111,98,95,116,121,112,101,41,32,61,61,32,40,38,65,114,114,97,121,116,121,112,101,41,32,124,124,32,80,121,84,121,112,101,95,73,115,83,117,98,116,121,112,101,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,111,112,41,41,45,62,111,98,95,116,121,112,101,41,44,32,40,38,65,114,114,97,121,116,121,112,101,41,41,41,0] /* ((((PyObject_)(op))- */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8858=allocate([103,101,116,97,114,114,97,121,105,116,101,109,0] /* getarrayitem\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([105,62,61,48,32,38,38,32,105,60,40,40,40,80,121,86,97,114,79,98,106,101,99,116,42,41,40,97,112,41,41,45,62,111,98,95,115,105,122,101,41,0] /* i>=0 && i<(((PyVarOb */, "i8", ALLOC_NORMAL);
__str18=allocate([97,114,114,97,121,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* array index out of r */, "i8", ALLOC_NORMAL);
_copy_doc=allocate([99,111,112,121,40,97,114,114,97,121,41,10,10,32,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,97,114,114,97,121,46,0] /* copy(array)\0A\0A Re */, "i8", ALLOC_NORMAL);
__str19=allocate([99,97,110,32,111,110,108,121,32,97,112,112,101,110,100,32,97,114,114,97,121,32,40,110,111,116,32,34,37,46,50,48,48,115,34,41,32,116,111,32,97,114,114,97,121,0] /* can only append arra */, "i8", ALLOC_NORMAL);
__str20=allocate([99,97,110,32,111,110,108,121,32,97,115,115,105,103,110,32,97,114,114,97,121,32,40,110,111,116,32,34,37,46,50,48,48,115,34,41,32,116,111,32,97,114,114,97,121,32,115,108,105,99,101,0] /* can only assign arra */, "i8", ALLOC_NORMAL);
__str21=allocate([97,114,114,97,121,32,97,115,115,105,103,110,109,101,110,116,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* array assignment ind */, "i8", ALLOC_NORMAL);
__str22=allocate([40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,97,41,41,45,62,111,98,95,116,121,112,101,41,32,61,61,32,40,38,65,114,114,97,121,116,121,112,101,41,32,124,124,32,80,121,84,121,112,101,95,73,115,83,117,98,116,121,112,101,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,97,41,41,45,62,111,98,95,116,121,112,101,41,44,32,40,38,65,114,114,97,121,116,121,112,101,41,41,41,0] /* ((((PyObject_)(a))-> */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9470=allocate([115,101,116,97,114,114,97,121,105,116,101,109,0] /* setarrayitem\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([99,97,110,32,111,110,108,121,32,101,120,116,101,110,100,32,119,105,116,104,32,97,114,114,97,121,32,111,102,32,115,97,109,101,32,107,105,110,100,0] /* can only extend with */, "i8", ALLOC_NORMAL);
__str24=allocate([99,97,110,32,111,110,108,121,32,101,120,116,101,110,100,32,97,114,114,97,121,32,119,105,116,104,32,97,114,114,97,121,32,40,110,111,116,32,34,37,46,50,48,48,115,34,41,0] /* can only extend arra */, "i8", ALLOC_NORMAL);
_count_doc=allocate([99,111,117,110,116,40,120,41,10,10,82,101,116,117,114,110,32,110,117,109,98,101,114,32,111,102,32,111,99,99,117,114,114,101,110,99,101,115,32,111,102,32,120,32,105,110,32,116,104,101,32,97,114,114,97,121,46,0] /* count(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
__str25=allocate([97,114,114,97,121,46,105,110,100,101,120,40,120,41,58,32,120,32,110,111,116,32,105,110,32,108,105,115,116,0] /* array.index(x): x no */, "i8", ALLOC_NORMAL);
_index_doc=allocate([105,110,100,101,120,40,120,41,10,10,82,101,116,117,114,110,32,105,110,100,101,120,32,111,102,32,102,105,114,115,116,32,111,99,99,117,114,114,101,110,99,101,32,111,102,32,120,32,105,110,32,116,104,101,32,97,114,114,97,121,46,0] /* index(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
__str26=allocate([97,114,114,97,121,46,114,101,109,111,118,101,40,120,41,58,32,120,32,110,111,116,32,105,110,32,108,105,115,116,0] /* array.remove(x): x n */, "i8", ALLOC_NORMAL);
_remove_doc=allocate([114,101,109,111,118,101,40,120,41,10,10,82,101,109,111,118,101,32,116,104,101,32,102,105,114,115,116,32,111,99,99,117,114,114,101,110,99,101,32,111,102,32,120,32,105,110,32,116,104,101,32,97,114,114,97,121,46,0] /* remove(x)\0A\0ARemov */, "i8", ALLOC_NORMAL);
__str27=allocate([124,110,58,112,111,112,0] /* |n:pop\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([112,111,112,32,102,114,111,109,32,101,109,112,116,121,32,97,114,114,97,121,0] /* pop from empty array */, "i8", ALLOC_NORMAL);
__str29=allocate([112,111,112,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* pop index out of ran */, "i8", ALLOC_NORMAL);
_pop_doc=allocate([112,111,112,40,91,105,93,41,10,10,82,101,116,117,114,110,32,116,104,101,32,105,45,116,104,32,101,108,101,109,101,110,116,32,97,110,100,32,100,101,108,101,116,101,32,105,116,32,102,114,111,109,32,116,104,101,32,97,114,114,97,121,46,32,105,32,100,101,102,97,117,108,116,115,32,116,111,32,45,49,46,0] /* pop([i])\0A\0AReturn */, "i8", ALLOC_NORMAL);
_extend_doc=allocate([101,120,116,101,110,100,40,97,114,114,97,121,32,111,114,32,105,116,101,114,97,98,108,101,41,10,10,32,65,112,112,101,110,100,32,105,116,101,109,115,32,116,111,32,116,104,101,32,101,110,100,32,111,102,32,116,104,101,32,97,114,114,97,121,46,0] /* extend(array or iter */, "i8", ALLOC_NORMAL);
__str30=allocate([110,79,58,105,110,115,101,114,116,0] /* nO:insert\00 */, "i8", ALLOC_NORMAL);
_insert_doc=allocate([105,110,115,101,114,116,40,105,44,120,41,10,10,73,110,115,101,114,116,32,97,32,110,101,119,32,105,116,101,109,32,120,32,105,110,116,111,32,116,104,101,32,97,114,114,97,121,32,98,101,102,111,114,101,32,112,111,115,105,116,105,111,110,32,105,46,0] /* insert(i,x)\0A\0AIns */, "i8", ALLOC_NORMAL);
_buffer_info_doc=allocate([98,117,102,102,101,114,95,105,110,102,111,40,41,32,45,62,32,40,97,100,100,114,101,115,115,44,32,108,101,110,103,116,104,41,10,10,82,101,116,117,114,110,32,97,32,116,117,112,108,101,32,40,97,100,100,114,101,115,115,44,32,108,101,110,103,116,104,41,32,103,105,118,105,110,103,32,116,104,101,32,99,117,114,114,101,110,116,32,109,101,109,111,114,121,32,97,100,100,114,101,115,115,32,97,110,100,10,116,104,101,32,108,101,110,103,116,104,32,105,110,32,105,116,101,109,115,32,111,102,32,116,104,101,32,98,117,102,102,101,114,32,117,115,101,100,32,116,111,32,104,111,108,100,32,97,114,114,97,121,39,115,32,99,111,110,116,101,110,116,115,10,84,104,101,32,108,101,110,103,116,104,32,115,104,111,117,108,100,32,98,101,32,109,117,108,116,105,112,108,105,101,100,32,98,121,32,116,104,101,32,105,116,101,109,115,105,122,101,32,97,116,116,114,105,98,117,116,101,32,116,111,32,99,97,108,99,117,108,97,116,101,10,116,104,101,32,98,117,102,102,101,114,32,108,101,110,103,116,104,32,105,110,32,98,121,116,101,115,46,0] /* buffer_info() -> (ad */, "i8", ALLOC_NORMAL);
_append_doc=allocate([97,112,112,101,110,100,40,120,41,10,10,65,112,112,101,110,100,32,110,101,119,32,118,97,108,117,101,32,120,32,116,111,32,116,104,101,32,101,110,100,32,111,102,32,116,104,101,32,97,114,114,97,121,46,0] /* append(x)\0A\0AAppen */, "i8", ALLOC_NORMAL);
__str31=allocate([100,111,110,39,116,32,107,110,111,119,32,104,111,119,32,116,111,32,98,121,116,101,115,119,97,112,32,116,104,105,115,32,97,114,114,97,121,32,116,121,112,101,0] /* don't know how to by */, "i8", ALLOC_NORMAL);
_byteswap_doc=allocate([98,121,116,101,115,119,97,112,40,41,10,10,66,121,116,101,115,119,97,112,32,97,108,108,32,105,116,101,109,115,32,111,102,32,116,104,101,32,97,114,114,97,121,46,32,32,73,102,32,116,104,101,32,105,116,101,109,115,32,105,110,32,116,104,101,32,97,114,114,97,121,32,97,114,101,32,110,111,116,32,49,44,32,50,44,10,52,44,32,111,114,32,56,32,98,121,116,101,115,32,105,110,32,115,105,122,101,44,32,82,117,110,116,105,109,101,69,114,114,111,114,32,105,115,32,114,97,105,115,101,100,46,0] /* byteswap()\0A\0AByte */, "i8", ALLOC_NORMAL);
__str32=allocate([40,115,105,122,101,95,116,41,105,116,101,109,115,105,122,101,32,60,61,32,115,105,122,101,111,102,40,116,109,112,41,0] /* (size_t)itemsize <=  */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10009=allocate([97,114,114,97,121,95,114,101,118,101,114,115,101,0] /* array_reverse\00 */, "i8", ALLOC_NORMAL);
_reverse_doc=allocate([114,101,118,101,114,115,101,40,41,10,10,82,101,118,101,114,115,101,32,116,104,101,32,111,114,100,101,114,32,111,102,32,116,104,101,32,105,116,101,109,115,32,105,110,32,116,104,101,32,97,114,114,97,121,46,0] /* reverse()\0A\0ARever */, "i8", ALLOC_NORMAL);
__str33=allocate([79,110,58,102,114,111,109,102,105,108,101,0] /* On:fromfile\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([97,114,103,49,32,109,117,115,116,32,98,101,32,111,112,101,110,32,102,105,108,101,0] /* arg1 must be open fi */, "i8", ALLOC_NORMAL);
__str35=allocate([110,111,116,32,101,110,111,117,103,104,32,105,116,101,109,115,32,105,110,32,102,105,108,101,0] /* not enough items in  */, "i8", ALLOC_NORMAL);
_fromfile_doc=allocate([102,114,111,109,102,105,108,101,40,102,44,32,110,41,10,10,82,101,97,100,32,110,32,111,98,106,101,99,116,115,32,102,114,111,109,32,116,104,101,32,102,105,108,101,32,111,98,106,101,99,116,32,102,32,97,110,100,32,97,112,112,101,110,100,32,116,104,101,109,32,116,111,32,116,104,101,32,101,110,100,32,111,102,32,116,104,101,10,97,114,114,97,121,46,32,32,65,108,115,111,32,99,97,108,108,101,100,32,97,115,32,114,101,97,100,46,0] /* fromfile(f, n)\0A\0A */, "i8", ALLOC_NORMAL);
__str36=allocate([97,114,114,97,121,46,114,101,97,100,40,41,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,97,114,114,97,121,46,102,114,111,109,102,105,108,101,40,41,0] /* array.read() not sup */, "i8", ALLOC_NORMAL);
__str37=allocate([97,114,103,32,109,117,115,116,32,98,101,32,111,112,101,110,32,102,105,108,101,0] /* arg must be open fil */, "i8", ALLOC_NORMAL);
_tofile_doc=allocate([116,111,102,105,108,101,40,102,41,10,10,87,114,105,116,101,32,97,108,108,32,105,116,101,109,115,32,40,97,115,32,109,97,99,104,105,110,101,32,118,97,108,117,101,115,41,32,116,111,32,116,104,101,32,102,105,108,101,32,111,98,106,101,99,116,32,102,46,32,32,65,108,115,111,32,99,97,108,108,101,100,32,97,115,10,119,114,105,116,101,46,0] /* tofile(f)\0A\0AWrite */, "i8", ALLOC_NORMAL);
__str38=allocate([97,114,114,97,121,46,119,114,105,116,101,40,41,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,97,114,114,97,121,46,116,111,102,105,108,101,40,41,0] /* array.write() not su */, "i8", ALLOC_NORMAL);
__str39=allocate([97,114,103,32,109,117,115,116,32,98,101,32,108,105,115,116,0] /* arg must be list\00 */, "i8", ALLOC_NORMAL);
_fromlist_doc=allocate([102,114,111,109,108,105,115,116,40,108,105,115,116,41,10,10,65,112,112,101,110,100,32,105,116,101,109,115,32,116,111,32,97,114,114,97,121,32,102,114,111,109,32,108,105,115,116,46,0] /* fromlist(list)\0A\0A */, "i8", ALLOC_NORMAL);
_tolist_doc=allocate([116,111,108,105,115,116,40,41,32,45,62,32,108,105,115,116,10,10,67,111,110,118,101,114,116,32,97,114,114,97,121,32,116,111,32,97,110,32,111,114,100,105,110,97,114,121,32,108,105,115,116,32,119,105,116,104,32,116,104,101,32,115,97,109,101,32,105,116,101,109,115,46,0] /* tolist() -> list\0A\ */, "i8", ALLOC_NORMAL);
__str40=allocate([115,35,58,102,114,111,109,115,116,114,105,110,103,0] /* s#:fromstring\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([115,116,114,105,110,103,32,108,101,110,103,116,104,32,110,111,116,32,97,32,109,117,108,116,105,112,108,101,32,111,102,32,105,116,101,109,32,115,105,122,101,0] /* string length not a  */, "i8", ALLOC_NORMAL);
_fromstring_doc=allocate([102,114,111,109,115,116,114,105,110,103,40,115,116,114,105,110,103,41,10,10,65,112,112,101,110,100,115,32,105,116,101,109,115,32,102,114,111,109,32,116,104,101,32,115,116,114,105,110,103,44,32,105,110,116,101,114,112,114,101,116,105,110,103,32,105,116,32,97,115,32,97,110,32,97,114,114,97,121,32,111,102,32,109,97,99,104,105,110,101,10,118,97,108,117,101,115,44,97,115,32,105,102,32,105,116,32,104,97,100,32,98,101,101,110,32,114,101,97,100,32,102,114,111,109,32,97,32,102,105,108,101,32,117,115,105,110,103,32,116,104,101,32,102,114,111,109,102,105,108,101,40,41,32,109,101,116,104,111,100,41,46,0] /* fromstring(string)\0 */, "i8", ALLOC_NORMAL);
_tostring_doc=allocate([116,111,115,116,114,105,110,103,40,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,116,104,101,32,97,114,114,97,121,32,116,111,32,97,110,32,97,114,114,97,121,32,111,102,32,109,97,99,104,105,110,101,32,118,97,108,117,101,115,32,97,110,100,32,114,101,116,117,114,110,32,116,104,101,32,115,116,114,105,110,103,10,114,101,112,114,101,115,101,110,116,97,116,105,111,110,46,0] /* tostring() -> string */, "i8", ALLOC_NORMAL);
__str42=allocate([117,35,58,102,114,111,109,117,110,105,99,111,100,101,0] /* u#:fromunicode\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([102,114,111,109,117,110,105,99,111,100,101,40,41,32,109,97,121,32,111,110,108,121,32,98,101,32,99,97,108,108,101,100,32,111,110,32,116,121,112,101,32,39,117,39,32,97,114,114,97,121,115,0] /* fromunicode() may on */, "i8", ALLOC_NORMAL);
_fromunicode_doc=allocate([102,114,111,109,117,110,105,99,111,100,101,40,117,115,116,114,41,10,10,69,120,116,101,110,100,115,32,116,104,105,115,32,97,114,114,97,121,32,119,105,116,104,32,100,97,116,97,32,102,114,111,109,32,116,104,101,32,117,110,105,99,111,100,101,32,115,116,114,105,110,103,32,117,115,116,114,46,10,84,104,101,32,97,114,114,97,121,32,109,117,115,116,32,98,101,32,97,32,116,121,112,101,32,39,117,39,32,97,114,114,97,121,59,32,111,116,104,101,114,119,105,115,101,32,97,32,86,97,108,117,101,69,114,114,111,114,10,105,115,32,114,97,105,115,101,100,46,32,32,85,115,101,32,97,114,114,97,121,46,102,114,111,109,115,116,114,105,110,103,40,117,115,116,114,46,100,101,99,111,100,101,40,46,46,46,41,41,32,116,111,10,97,112,112,101,110,100,32,85,110,105,99,111,100,101,32,100,97,116,97,32,116,111,32,97,110,32,97,114,114,97,121,32,111,102,32,115,111,109,101,32,111,116,104,101,114,32,116,121,112,101,46,0] /* fromunicode(ustr)\0A */, "i8", ALLOC_NORMAL);
__str44=allocate([116,111,117,110,105,99,111,100,101,40,41,32,109,97,121,32,111,110,108,121,32,98,101,32,99,97,108,108,101,100,32,111,110,32,116,121,112,101,32,39,117,39,32,97,114,114,97,121,115,0] /* tounicode() may only */, "i8", ALLOC_NORMAL);
_tounicode_doc=allocate([116,111,117,110,105,99,111,100,101,40,41,32,45,62,32,117,110,105,99,111,100,101,10,10,67,111,110,118,101,114,116,32,116,104,101,32,97,114,114,97,121,32,116,111,32,97,32,117,110,105,99,111,100,101,32,115,116,114,105,110,103,46,32,32,84,104,101,32,97,114,114,97,121,32,109,117,115,116,32,98,101,10,97,32,116,121,112,101,32,39,117,39,32,97,114,114,97,121,59,32,111,116,104,101,114,119,105,115,101,32,97,32,86,97,108,117,101,69,114,114,111,114,32,105,115,32,114,97,105,115,101,100,46,32,32,85,115,101,10,97,114,114,97,121,46,116,111,115,116,114,105,110,103,40,41,46,100,101,99,111,100,101,40,41,32,116,111,32,111,98,116,97,105,110,32,97,32,117,110,105,99,111,100,101,32,115,116,114,105,110,103,32,102,114,111,109,10,97,110,32,97,114,114,97,121,32,111,102,32,115,111,109,101,32,111,116,104,101,114,32,116,121,112,101,46,0] /* tounicode() -> unico */, "i8", ALLOC_NORMAL);
__str45=allocate([95,95,100,105,99,116,95,95,0] /* __dict__\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([79,40,99,79,41,79,0] /* O(cO)O\00 */, "i8", ALLOC_NORMAL);
_reduce_doc=allocate([82,101,116,117,114,110,32,115,116,97,116,101,32,105,110,102,111,114,109,97,116,105,111,110,32,102,111,114,32,112,105,99,107,108,105,110,103,46,0] /* Return state informa */, "i8", ALLOC_NORMAL);
__str47=allocate([116,121,112,101,99,111,100,101,0] /* typecode\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([116,104,101,32,116,121,112,101,99,111,100,101,32,99,104,97,114,97,99,116,101,114,32,117,115,101,100,32,116,111,32,99,114,101,97,116,101,32,116,104,101,32,97,114,114,97,121,0] /* the typecode charact */, "i8", ALLOC_NORMAL);
__str49=allocate([105,116,101,109,115,105,122,101,0] /* itemsize\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([116,104,101,32,115,105,122,101,44,32,105,110,32,98,121,116,101,115,44,32,111,102,32,111,110,101,32,97,114,114,97,121,32,105,116,101,109,0] /* the size, in bytes,  */, "i8", ALLOC_NORMAL);
_array_getsets=allocate(60, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str51=allocate([97,112,112,101,110,100,0] /* append\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([98,117,102,102,101,114,95,105,110,102,111,0] /* buffer_info\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([98,121,116,101,115,119,97,112,0] /* byteswap\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([95,95,99,111,112,121,95,95,0] /* __copy__\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([99,111,117,110,116,0] /* count\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([95,95,100,101,101,112,99,111,112,121,95,95,0] /* __deepcopy__\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([101,120,116,101,110,100,0] /* extend\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([102,114,111,109,102,105,108,101,0] /* fromfile\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([102,114,111,109,108,105,115,116,0] /* fromlist\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([102,114,111,109,115,116,114,105,110,103,0] /* fromstring\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([102,114,111,109,117,110,105,99,111,100,101,0] /* fromunicode\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([105,110,100,101,120,0] /* index\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([105,110,115,101,114,116,0] /* insert\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([112,111,112,0] /* pop\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([114,101,97,100,0] /* read\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([95,95,114,101,100,117,99,101,95,95,0] /* __reduce__\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([114,101,109,111,118,101,0] /* remove\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([114,101,118,101,114,115,101,0] /* reverse\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([116,111,102,105,108,101,0] /* tofile\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([116,111,108,105,115,116,0] /* tolist\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([116,111,115,116,114,105,110,103,0] /* tostring\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([116,111,117,110,105,99,111,100,101,0] /* tounicode\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([119,114,105,116,101,0] /* write\00 */, "i8", ALLOC_NORMAL);
_array_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str74=allocate([97,114,114,97,121,40,39,37,99,39,41,0] /* array('%c')\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([97,114,114,97,121,40,39,37,99,39,44,32,0] /* array('%c', \00 */, "i8", ALLOC_NORMAL);
__str76=allocate([41,0] /* )\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([97,114,114,97,121,32,105,110,100,105,99,101,115,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,115,0] /* array indices must b */, "i8", ALLOC_NORMAL);
__str78=allocate([97,114,114,97,121,32,105,110,100,105,99,101,115,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0] /* array indices must b */, "i8", ALLOC_NORMAL);
__str79=allocate([97,116,116,101,109,112,116,32,116,111,32,97,115,115,105,103,110,32,97,114,114,97,121,32,111,102,32,115,105,122,101,32,37,122,100,32,116,111,32,101,120,116,101,110,100,101,100,32,115,108,105,99,101,32,111,102,32,115,105,122,101,32,37,122,100,0] /* attempt to assign ar */, "i8", ALLOC_NORMAL);
_array_as_mapping=allocate(12, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0], ALLOC_NORMAL);
_emptybuf=allocate(1, "i8*", ALLOC_NORMAL);
__str80=allocate(1, "i8", ALLOC_NORMAL);
__str81=allocate([65,99,99,101,115,115,105,110,103,32,110,111,110,45,101,120,105,115,116,101,110,116,32,97,114,114,97,121,32,115,101,103,109,101,110,116,0] /* Accessing non-existe */, "i8", ALLOC_NORMAL);
_array_as_sequence=allocate(40, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32, i32)*",0,0,0,"i32 (%struct.PyObject*, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0], ALLOC_NORMAL);
_array_as_buffer=allocate(24, ["i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i32 (%struct.PyObject*, i32*)*",0,0,0,"i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str82=allocate([97,114,114,97,121,46,97,114,114,97,121,40,41,0] /* array.array()\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([99,124,79,58,97,114,114,97,121,0] /* c|O:array\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([98,97,100,32,116,121,112,101,99,111,100,101,32,40,109,117,115,116,32,98,101,32,99,44,32,98,44,32,66,44,32,117,44,32,104,44,32,72,44,32,105,44,32,73,44,32,108,44,32,76,44,32,102,32,111,114,32,100,41,0] /* bad typecode (must b */, "i8", ALLOC_NORMAL);
_module_doc=allocate([84,104,105,115,32,109,111,100,117,108,101,32,100,101,102,105,110,101,115,32,97,110,32,111,98,106,101,99,116,32,116,121,112,101,32,119,104,105,99,104,32,99,97,110,32,101,102,102,105,99,105,101,110,116,108,121,32,114,101,112,114,101,115,101,110,116,10,97,110,32,97,114,114,97,121,32,111,102,32,98,97,115,105,99,32,118,97,108,117,101,115,58,32,99,104,97,114,97,99,116,101,114,115,44,32,105,110,116,101,103,101,114,115,44,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,10,110,117,109,98,101,114,115,46,32,32,65,114,114,97,121,115,32,97,114,101,32,115,101,113,117,101,110,99,101,32,116,121,112,101,115,32,97,110,100,32,98,101,104,97,118,101,32,118,101,114,121,32,109,117,99,104,32,108,105,107,101,32,108,105,115,116,115,44,10,101,120,99,101,112,116,32,116,104,97,116,32,116,104,101,32,116,121,112,101,32,111,102,32,111,98,106,101,99,116,115,32,115,116,111,114,101,100,32,105,110,32,116,104,101,109,32,105,115,32,99,111,110,115,116,114,97,105,110,101,100,46,32,32,84,104,101,10,116,121,112,101,32,105,115,32,115,112,101,99,105,102,105,101,100,32,97,116,32,111,98,106,101,99,116,32,99,114,101,97,116,105,111,110,32,116,105,109,101,32,98,121,32,117,115,105,110,103,32,97,32,116,121,112,101,32,99,111,100,101,44,32,119,104,105,99,104,10,105,115,32,97,32,115,105,110,103,108,101,32,99,104,97,114,97,99,116,101,114,46,32,32,84,104,101,32,102,111,108,108,111,119,105,110,103,32,116,121,112,101,32,99,111,100,101,115,32,97,114,101,32,100,101,102,105,110,101,100,58,10,10,32,32,32,32,84,121,112,101,32,99,111,100,101,32,32,32,67,32,84,121,112,101,32,32,32,32,32,32,32,32,32,32,32,32,32,77,105,110,105,109,117,109,32,115,105,122,101,32,105,110,32,98,121,116,101,115,32,10,32,32,32,32,39,99,39,32,32,32,32,32,32,32,32,32,99,104,97,114,97,99,116,101,114,32,32,32,32,32,32,32,32,32,32,49,32,10,32,32,32,32,39,98,39,32,32,32,32,32,32,32,32,32,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,32,32,49,32,10,32,32,32,32,39,66,39,32,32,32,32,32,32,32,32,32,117,110,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,49,32,10,32,32,32,32,39,117,39,32,32,32,32,32,32,32,32,32,85,110,105,99,111,100,101,32,99,104,97,114,97,99,116,101,114,32,32,50,32,10,32,32,32,32,39,104,39,32,32,32,32,32,32,32,32,32,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,32,32,50,32,10,32,32,32,32,39,72,39,32,32,32,32,32,32,32,32,32,117,110,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,50,32,10,32,32,32,32,39,105,39,32,32,32,32,32,32,32,32,32,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,32,32,50,32,10,32,32,32,32,39,73,39,32,32,32,32,32,32,32,32,32,117,110,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,50,32,10,32,32,32,32,39,108,39,32,32,32,32,32,32,32,32,32,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,32,32,52,32,10,32,32,32,32,39,76,39,32,32,32,32,32,32,32,32,32,117,110,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,52,32,10,32,32,32,32,39,102,39,32,32,32,32,32,32,32,32,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,32,32,32,32,52,32,10,32,32,32,32,39,100,39,32,32,32,32,32,32,32,32,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,32,32,32,32,56,32,10,10,84,104,101,32,99,111,110,115,116,114,117,99,116,111,114,32,105,115,58,10,10,97,114,114,97,121,40,116,121,112,101,99,111,100,101,32,91,44,32,105,110,105,116,105,97,108,105,122,101,114,93,41,32,45,45,32,99,114,101,97,116,101,32,97,32,110,101,119,32,97,114,114,97,121,10,0] /* This module defines  */, "i8", ALLOC_NORMAL);
_arraytype_doc=allocate([97,114,114,97,121,40,116,121,112,101,99,111,100,101,32,91,44,32,105,110,105,116,105,97,108,105,122,101,114,93,41,32,45,62,32,97,114,114,97,121,10,10,82,101,116,117,114,110,32,97,32,110,101,119,32,97,114,114,97,121,32,119,104,111,115,101,32,105,116,101,109,115,32,97,114,101,32,114,101,115,116,114,105,99,116,101,100,32,98,121,32,116,121,112,101,99,111,100,101,44,32,97,110,100,10,105,110,105,116,105,97,108,105,122,101,100,32,102,114,111,109,32,116,104,101,32,111,112,116,105,111,110,97,108,32,105,110,105,116,105,97,108,105,122,101,114,32,118,97,108,117,101,44,32,119,104,105,99,104,32,109,117,115,116,32,98,101,32,97,32,108,105,115,116,44,10,115,116,114,105,110,103,46,32,111,114,32,105,116,101,114,97,98,108,101,32,111,118,101,114,32,101,108,101,109,101,110,116,115,32,111,102,32,116,104,101,32,97,112,112,114,111,112,114,105,97,116,101,32,116,121,112,101,46,10,10,65,114,114,97,121,115,32,114,101,112,114,101,115,101,110,116,32,98,97,115,105,99,32,118,97,108,117,101,115,32,97,110,100,32,98,101,104,97,118,101,32,118,101,114,121,32,109,117,99,104,32,108,105,107,101,32,108,105,115,116,115,44,32,101,120,99,101,112,116,10,116,104,101,32,116,121,112,101,32,111,102,32,111,98,106,101,99,116,115,32,115,116,111,114,101,100,32,105,110,32,116,104,101,109,32,105,115,32,99,111,110,115,116,114,97,105,110,101,100,46,10,10,77,101,116,104,111,100,115,58,10,10,97,112,112,101,110,100,40,41,32,45,45,32,97,112,112,101,110,100,32,97,32,110,101,119,32,105,116,101,109,32,116,111,32,116,104,101,32,101,110,100,32,111,102,32,116,104,101,32,97,114,114,97,121,10,98,117,102,102,101,114,95,105,110,102,111,40,41,32,45,45,32,114,101,116,117,114,110,32,105,110,102,111,114,109,97,116,105,111,110,32,103,105,118,105,110,103,32,116,104,101,32,99,117,114,114,101,110,116,32,109,101,109,111,114,121,32,105,110,102,111,10,98,121,116,101,115,119,97,112,40,41,32,45,45,32,98,121,116,101,115,119,97,112,32,97,108,108,32,116,104,101,32,105,116,101,109,115,32,111,102,32,116,104,101,32,97,114,114,97,121,10,99,111,117,110,116,40,41,32,45,45,32,114,101,116,117,114,110,32,110,117,109,98,101,114,32,111,102,32,111,99,99,117,114,114,101,110,99,101,115,32,111,102,32,97,110,32,111,98,106,101,99,116,10,101,120,116,101,110,100,40,41,32,45,45,32,101,120,116,101,110,100,32,97,114,114,97,121,32,98,121,32,97,112,112,101,110,100,105,110,103,32,109,117,108,116,105,112,108,101,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,97,110,32,105,116,101,114,97,98,108,101,10,102,114,111,109,102,105,108,101,40,41,32,45,45,32,114,101,97,100,32,105,116,101,109,115,32,102,114,111,109,32,97,32,102,105,108,101,32,111,98,106,101,99,116,10,102,114,111,109,108,105,115,116,40,41,32,45,45,32,97,112,112,101,110,100,32,105,116,101,109,115,32,102,114,111,109,32,116,104,101,32,108,105,115,116,10,102,114,111,109,115,116,114,105,110,103,40,41,32,45,45,32,97,112,112,101,110,100,32,105,116,101,109,115,32,102,114,111,109,32,116,104,101,32,115,116,114,105,110,103,10,105,110,100,101,120,40,41,32,45,45,32,114,101,116,117,114,110,32,105,110,100,101,120,32,111,102,32,102,105,114,115,116,32,111,99,99,117,114,114,101,110,99,101,32,111,102,32,97,110,32,111,98,106,101,99,116,10,105,110,115,101,114,116,40,41,32,45,45,32,105,110,115,101,114,116,32,97,32,110,101,119,32,105,116,101,109,32,105,110,116,111,32,116,104,101,32,97,114,114,97,121,32,97,116,32,97,32,112,114,111,118,105,100,101,100,32,112,111,115,105,116,105,111,110,10,112,111,112,40,41,32,45,45,32,114,101,109,111,118,101,32,97,110,100,32,114,101,116,117,114,110,32,105,116,101,109,32,40,100,101,102,97,117,108,116,32,108,97,115,116,41,10,114,101,97,100,40,41,32,45,45,32,68,69,80,82,69,67,65,84,69,68,44,32,117,115,101,32,102,114,111,109,102,105,108,101,40,41,10,114,101,109,111,118,101,40,41,32,45,45,32,114,101,109,111,118,101,32,102,105,114,115,116,32,111,99,99,117,114,114,101,110,99,101,32,111,102,32,97,110,32,111,98,106,101,99,116,10,114,101,118,101,114,115,101,40,41,32,45,45,32,114,101,118,101,114,115,101,32,116,104,101,32,111,114,100,101,114,32,111,102,32,116,104,101,32,105,116,101,109,115,32,105,110,32,116,104,101,32,97,114,114,97,121,10,116,111,102,105,108,101,40,41,32,45,45,32,119,114,105,116,101,32,97,108,108,32,105,116,101,109,115,32,116,111,32,97,32,102,105,108,101,32,111,98,106,101,99,116,10,116,111,108,105,115,116,40,41,32,45,45,32,114,101,116,117,114,110,32,116,104,101,32,97,114,114,97,121,32,99,111,110,118,101,114,116,101,100,32,116,111,32,97,110,32,111,114,100,105,110,97,114,121,32,108,105,115,116,10,116,111,115,116,114,105,110,103,40,41,32,45,45,32,114,101,116,117,114,110,32,116,104,101,32,97,114,114,97,121,32,99,111,110,118,101,114,116,101,100,32,116,111,32,97,32,115,116,114,105,110,103,10,119,114,105,116,101,40,41,32,45,45,32,68,69,80,82,69,67,65,84,69,68,44,32,117,115,101,32,116,111,102,105,108,101,40,41,10,10,65,116,116,114,105,98,117,116,101,115,58,10,10,116,121,112,101,99,111,100,101,32,45,45,32,116,104,101,32,116,121,112,101,99,111,100,101,32,99,104,97,114,97,99,116,101,114,32,117,115,101,100,32,116,111,32,99,114,101,97,116,101,32,116,104,101,32,97,114,114,97,121,10,105,116,101,109,115,105,122,101,32,45,45,32,116,104,101,32,108,101,110,103,116,104,32,105,110,32,98,121,116,101,115,32,111,102,32,111,110,101,32,97,114,114,97,121,32,105,116,101,109,10,0] /* array(typecode [, in */, "i8", ALLOC_NORMAL);
__str85=allocate([97,114,114,97,121,46,97,114,114,97,121,0] /* array.array\00 */, "i8", ALLOC_NORMAL);
_Arraytype=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str86=allocate([40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,105,116,41,41,45,62,111,98,95,116,121,112,101,41,32,61,61,32,40,38,80,121,65,114,114,97,121,73,116,101,114,95,84,121,112,101,41,32,124,124,32,80,121,84,121,112,101,95,73,115,83,117,98,116,121,112,101,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,105,116,41,41,45,62,111,98,95,116,121,112,101,41,44,32,40,38,80,121,65,114,114,97,121,73,116,101,114,95,84,121,112,101,41,41,41,0] /* ((((PyObject_)(it))- */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___11388=allocate([97,114,114,97,121,105,116,101,114,95,110,101,120,116,0] /* arrayiter_next\00 */, "i8", ALLOC_NORMAL);
__str87=allocate([97,114,114,97,121,105,116,101,114,97,116,111,114,0] /* arrayiterator\00 */, "i8", ALLOC_NORMAL);
_PyArrayIter_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_a_methods=allocate(16, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0], ALLOC_NORMAL);
__str88=allocate([97,114,114,97,121,0] /* array\00 */, "i8", ALLOC_NORMAL);
__str89=allocate([65,114,114,97,121,84,121,112,101,0] /* ArrayType\00 */, "i8", ALLOC_NORMAL);
HEAP[_descriptors+8]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_descriptors+12]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_descriptors+24]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_descriptors+28]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_descriptors+40]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_descriptors+44]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_descriptors+56]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_descriptors+60]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_descriptors+72]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_descriptors+76]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_descriptors+88]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_descriptors+92]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_descriptors+104]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_descriptors+108]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_descriptors+120]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_descriptors+124]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_descriptors+136]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_descriptors+140]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_descriptors+152]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_descriptors+156]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_descriptors+168]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_descriptors+172]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_descriptors+184]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_descriptors+188]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_array_getsets]=((__str47)&4294967295);
HEAP[_array_getsets+4]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_array_getsets+12]=((__str48)&4294967295);
HEAP[_array_getsets+20]=((__str49)&4294967295);
HEAP[_array_getsets+24]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_array_getsets+32]=((__str50)&4294967295);
HEAP[_array_methods]=((__str51)&4294967295);
HEAP[_array_methods+4]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_array_methods+12]=((_append_doc)&4294967295);
HEAP[_array_methods+16]=((__str52)&4294967295);
HEAP[_array_methods+20]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_array_methods+28]=((_buffer_info_doc)&4294967295);
HEAP[_array_methods+32]=((__str53)&4294967295);
HEAP[_array_methods+36]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_array_methods+44]=((_byteswap_doc)&4294967295);
HEAP[_array_methods+48]=((__str54)&4294967295);
HEAP[_array_methods+52]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_array_methods+60]=((_copy_doc)&4294967295);
HEAP[_array_methods+64]=((__str55)&4294967295);
HEAP[_array_methods+68]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_array_methods+76]=((_count_doc)&4294967295);
HEAP[_array_methods+80]=((__str56)&4294967295);
HEAP[_array_methods+84]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_array_methods+92]=((_copy_doc)&4294967295);
HEAP[_array_methods+96]=((__str57)&4294967295);
HEAP[_array_methods+100]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_array_methods+108]=((_extend_doc)&4294967295);
HEAP[_array_methods+112]=((__str58)&4294967295);
HEAP[_array_methods+116]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_array_methods+124]=((_fromfile_doc)&4294967295);
HEAP[_array_methods+128]=((__str59)&4294967295);
HEAP[_array_methods+132]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_array_methods+140]=((_fromlist_doc)&4294967295);
HEAP[_array_methods+144]=((__str60)&4294967295);
HEAP[_array_methods+148]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_array_methods+156]=((_fromstring_doc)&4294967295);
HEAP[_array_methods+160]=((__str61)&4294967295);
HEAP[_array_methods+164]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_array_methods+172]=((_fromunicode_doc)&4294967295);
HEAP[_array_methods+176]=((__str62)&4294967295);
HEAP[_array_methods+180]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_array_methods+188]=((_index_doc)&4294967295);
HEAP[_array_methods+192]=((__str63)&4294967295);
HEAP[_array_methods+196]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_array_methods+204]=((_insert_doc)&4294967295);
HEAP[_array_methods+208]=((__str64)&4294967295);
HEAP[_array_methods+212]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_array_methods+220]=((_pop_doc)&4294967295);
HEAP[_array_methods+224]=((__str65)&4294967295);
HEAP[_array_methods+228]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_array_methods+236]=((_fromfile_doc)&4294967295);
HEAP[_array_methods+240]=((__str66)&4294967295);
HEAP[_array_methods+244]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_array_methods+252]=((_reduce_doc)&4294967295);
HEAP[_array_methods+256]=((__str67)&4294967295);
HEAP[_array_methods+260]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_array_methods+268]=((_remove_doc)&4294967295);
HEAP[_array_methods+272]=((__str68)&4294967295);
HEAP[_array_methods+276]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_array_methods+284]=((_reverse_doc)&4294967295);
HEAP[_array_methods+288]=((__str69)&4294967295);
HEAP[_array_methods+292]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_array_methods+300]=((_tofile_doc)&4294967295);
HEAP[_array_methods+304]=((__str70)&4294967295);
HEAP[_array_methods+308]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_array_methods+316]=((_tolist_doc)&4294967295);
HEAP[_array_methods+320]=((__str71)&4294967295);
HEAP[_array_methods+324]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_array_methods+332]=((_tostring_doc)&4294967295);
HEAP[_array_methods+336]=((__str72)&4294967295);
HEAP[_array_methods+340]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_array_methods+348]=((_tounicode_doc)&4294967295);
HEAP[_array_methods+352]=((__str73)&4294967295);
HEAP[_array_methods+356]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_array_methods+364]=((_tofile_doc)&4294967295);
HEAP[_array_as_mapping]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_array_as_mapping+4]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_array_as_mapping+8]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_emptybuf]=((__str80)&4294967295);
HEAP[_array_as_sequence]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_array_as_sequence+4]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_array_as_sequence+8]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_array_as_sequence+12]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_array_as_sequence+16]=(FUNCTION_TABLE_OFFSET + 110);
HEAP[_array_as_sequence+20]=(FUNCTION_TABLE_OFFSET + 112);
HEAP[_array_as_sequence+24]=(FUNCTION_TABLE_OFFSET + 114);
HEAP[_array_as_sequence+28]=(FUNCTION_TABLE_OFFSET + 116);
HEAP[_array_as_sequence+32]=(FUNCTION_TABLE_OFFSET + 118);
HEAP[_array_as_sequence+36]=(FUNCTION_TABLE_OFFSET + 120);
HEAP[_array_as_buffer]=(FUNCTION_TABLE_OFFSET + 122);
HEAP[_array_as_buffer+4]=(FUNCTION_TABLE_OFFSET + 124);
HEAP[_array_as_buffer+8]=(FUNCTION_TABLE_OFFSET + 126);
HEAP[_Arraytype+12]=((__str85)&4294967295);
HEAP[_Arraytype+24]=(FUNCTION_TABLE_OFFSET + 128);
HEAP[_Arraytype+44]=(FUNCTION_TABLE_OFFSET + 130);
HEAP[_Arraytype+52]=_array_as_sequence;
HEAP[_Arraytype+56]=_array_as_mapping;
HEAP[_Arraytype+72]=(FUNCTION_TABLE_OFFSET + 132);
HEAP[_Arraytype+80]=_array_as_buffer;
HEAP[_Arraytype+88]=((_arraytype_doc)&4294967295);
HEAP[_Arraytype+100]=(FUNCTION_TABLE_OFFSET + 134);
HEAP[_Arraytype+108]=(FUNCTION_TABLE_OFFSET + 136);
HEAP[_Arraytype+116]=((_array_methods)&4294967295);
HEAP[_Arraytype+124]=_array_getsets;
HEAP[_Arraytype+152]=(FUNCTION_TABLE_OFFSET + 138);
HEAP[_Arraytype+156]=(FUNCTION_TABLE_OFFSET + 140);
HEAP[_Arraytype+160]=(FUNCTION_TABLE_OFFSET + 142);
HEAP[_PyArrayIter_Type+12]=((__str87)&4294967295);
HEAP[_PyArrayIter_Type+24]=(FUNCTION_TABLE_OFFSET + 144);
HEAP[_PyArrayIter_Type+72]=(FUNCTION_TABLE_OFFSET + 132);
HEAP[_PyArrayIter_Type+92]=(FUNCTION_TABLE_OFFSET + 146);
HEAP[_PyArrayIter_Type+108]=(FUNCTION_TABLE_OFFSET + 148);
HEAP[_PyArrayIter_Type+112]=(FUNCTION_TABLE_OFFSET + 150);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

