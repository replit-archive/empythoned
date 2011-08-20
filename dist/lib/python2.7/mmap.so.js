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



var $0___SIZE = 240; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 16; // %2
  
var $3___SIZE = 40; // %3
  
var $4___SIZE = 24; // %4
  
var $5___SIZE = 196; // %5
  
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
  
var $struct_PySliceObject___SIZE = 20; // %struct.PySliceObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_mmap_object___SIZE = 36; // %struct.mmap_object
  var $struct_mmap_object___FLATTENER = [0,4,8,12,16,20,28,32];
var $struct_stat___SIZE = 96; // %struct.stat
  var $struct_stat___FLATTENER = [0,8,12,16,20,24,28,32,40,44,52,56,64,72,80,88];
var $struct_timespec___SIZE = 8; // %struct.timespec
  
var __Py_NoneStruct;
var _PyExc_ValueError;
var __str;
var __str1;
var __str2;
var __str3;
var __str4;
var __str5;
var ___PRETTY_FUNCTION___8493;
var __str6;
var __str7;
var __str8;
var _PyExc_TypeError;
var __str9;
var __str10;
var __str11;
var __str12;
var __str13;
var __str14;
var _mmap_module_error;
var __str15;
var __str16;
var __str17;
var __str18;
var __str19;
var __str20;
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
var __str31;
var __str32;
var __str33;
var __str34;
var __str35;
var __str36;
var _mmap_object_methods;
var _PyExc_SystemError;
var __str37;
var __str38;
var _PyExc_IndexError;
var __str39;
var _PySlice_Type;
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
var _mmap_as_sequence;
var _mmap_as_mapping;
var _mmap_as_buffer;
var _mmap_doc;
var __str50;
var _mmap_object_type;
var _PyExc_OverflowError;
var __str51;
var __str52;
var __str53;
var _keywords_9448;
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
var _PyExc_EnvironmentError;
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














































  function _mmap_object_dealloc($m_obj) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m_obj_addr;
        $m_obj_addr=$m_obj;
        var $0=$m_obj_addr; //@line 131 "mmapmodule.c"
        var $1=$0+28; //@line 131 "mmapmodule.c"
        var $2=HEAP[$1]; //@line 131 "mmapmodule.c"
        var $3=($2) >= 0; //@line 131 "mmapmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 131 "mmapmodule.c"
      case 1: // $bb
        var $4=$m_obj_addr; //@line 132 "mmapmodule.c"
        var $5=$4+28; //@line 132 "mmapmodule.c"
        var $6=HEAP[$5]; //@line 132 "mmapmodule.c"
        var $7=_close($6); //@line 132 "mmapmodule.c"
        __label__ = 2; break; //@line 132 "mmapmodule.c"
      case 2: // $bb1
        var $8=$m_obj_addr; //@line 133 "mmapmodule.c"
        var $9=$8+8; //@line 133 "mmapmodule.c"
        var $10=HEAP[$9]; //@line 133 "mmapmodule.c"
        var $11=($10)!=0; //@line 133 "mmapmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 133 "mmapmodule.c"
      case 3: // $bb2
        var $12=$m_obj_addr; //@line 134 "mmapmodule.c"
        var $13=$12+32; //@line 134 "mmapmodule.c"
        var $14=HEAP[$13]; //@line 134 "mmapmodule.c"
        var $15=($14)!=1; //@line 134 "mmapmodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 134 "mmapmodule.c"
      case 4: // $bb3
        var $16=$m_obj_addr; //@line 134 "mmapmodule.c"
        var $17=$16+32; //@line 134 "mmapmodule.c"
        var $18=HEAP[$17]; //@line 134 "mmapmodule.c"
        var $19=($18)!=3; //@line 134 "mmapmodule.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 134 "mmapmodule.c"
      case 5: // $bb4
        var $20=$m_obj_addr; //@line 135 "mmapmodule.c"
        var $21=$20+12; //@line 135 "mmapmodule.c"
        var $22=HEAP[$21]; //@line 135 "mmapmodule.c"
        var $23=$m_obj_addr; //@line 135 "mmapmodule.c"
        var $24=$23+8; //@line 135 "mmapmodule.c"
        var $25=HEAP[$24]; //@line 135 "mmapmodule.c"
        var $26=_msync($25, $22, 4); //@line 135 "mmapmodule.c"
        __label__ = 6; break; //@line 135 "mmapmodule.c"
      case 6: // $bb5
        var $27=$m_obj_addr; //@line 136 "mmapmodule.c"
        var $28=$27+12; //@line 136 "mmapmodule.c"
        var $29=HEAP[$28]; //@line 136 "mmapmodule.c"
        var $30=$m_obj_addr; //@line 136 "mmapmodule.c"
        var $31=$30+8; //@line 136 "mmapmodule.c"
        var $32=HEAP[$31]; //@line 136 "mmapmodule.c"
        var $33=_munmap($32, $29); //@line 136 "mmapmodule.c"
        __label__ = 7; break; //@line 136 "mmapmodule.c"
      case 7: // $bb6
        var $34=$m_obj_addr; //@line 140 "mmapmodule.c"
        var $35=$34; //@line 140 "mmapmodule.c"
        var $36=$35+4; //@line 140 "mmapmodule.c"
        var $37=HEAP[$36]; //@line 140 "mmapmodule.c"
        var $38=$37+160; //@line 140 "mmapmodule.c"
        var $39=HEAP[$38]; //@line 140 "mmapmodule.c"
        var $40=$m_obj_addr; //@line 140 "mmapmodule.c"
        var $41=$40; //@line 140 "mmapmodule.c"
        FUNCTION_TABLE[$39]($41); //@line 140 "mmapmodule.c"
        ;
        return; //@line 141 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_close_method($self, $unused) {
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
        var $1=$self_addr; //@line 169 "mmapmodule.c"
        var $2=$1+28; //@line 169 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 169 "mmapmodule.c"
        var $4=($3) >= 0; //@line 169 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 169 "mmapmodule.c"
      case 1: // $bb
        var $5=$self_addr; //@line 170 "mmapmodule.c"
        var $6=$5+28; //@line 170 "mmapmodule.c"
        var $7=HEAP[$6]; //@line 170 "mmapmodule.c"
        var $8=_close($7); //@line 170 "mmapmodule.c"
        __label__ = 2; break; //@line 170 "mmapmodule.c"
      case 2: // $bb1
        var $9=$self_addr; //@line 171 "mmapmodule.c"
        var $10=$9+28; //@line 171 "mmapmodule.c"
        HEAP[$10]=-1; //@line 171 "mmapmodule.c"
        var $11=$self_addr; //@line 172 "mmapmodule.c"
        var $12=$11+8; //@line 172 "mmapmodule.c"
        var $13=HEAP[$12]; //@line 172 "mmapmodule.c"
        var $14=($13)!=0; //@line 172 "mmapmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 172 "mmapmodule.c"
      case 3: // $bb2
        var $15=$self_addr; //@line 173 "mmapmodule.c"
        var $16=$15+12; //@line 173 "mmapmodule.c"
        var $17=HEAP[$16]; //@line 173 "mmapmodule.c"
        var $18=$self_addr; //@line 173 "mmapmodule.c"
        var $19=$18+8; //@line 173 "mmapmodule.c"
        var $20=HEAP[$19]; //@line 173 "mmapmodule.c"
        var $21=_munmap($20, $17); //@line 173 "mmapmodule.c"
        var $22=$self_addr; //@line 174 "mmapmodule.c"
        var $23=$22+8; //@line 174 "mmapmodule.c"
        HEAP[$23]=0; //@line 174 "mmapmodule.c"
        __label__ = 4; break; //@line 174 "mmapmodule.c"
      case 4: // $bb3
        var $24=HEAP[__Py_NoneStruct]; //@line 178 "mmapmodule.c"
        var $25=($24) + 1; //@line 178 "mmapmodule.c"
        HEAP[__Py_NoneStruct]=$25; //@line 178 "mmapmodule.c"
        $0=__Py_NoneStruct; //@line 179 "mmapmodule.c"
        var $26=$0; //@line 179 "mmapmodule.c"
        $retval=$26; //@line 179 "mmapmodule.c"
        var $retval4=$retval; //@line 179 "mmapmodule.c"
        ;
        return $retval4; //@line 179 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_read_byte_method($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $value;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 206 "mmapmodule.c"
        var $2=$1+8; //@line 206 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 206 "mmapmodule.c"
        var $4=($3)==0; //@line 206 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 206 "mmapmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 206 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 206 "mmapmodule.c"
        $0=0; //@line 206 "mmapmodule.c"
        __label__ = 5; break; //@line 206 "mmapmodule.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 207 "mmapmodule.c"
        var $7=$6+16; //@line 207 "mmapmodule.c"
        var $8=HEAP[$7]; //@line 207 "mmapmodule.c"
        var $9=$self_addr; //@line 207 "mmapmodule.c"
        var $10=$9+12; //@line 207 "mmapmodule.c"
        var $11=HEAP[$10]; //@line 207 "mmapmodule.c"
        var $12=($8) < ($11); //@line 207 "mmapmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 207 "mmapmodule.c"
      case 3: // $bb2
        var $13=$self_addr; //@line 208 "mmapmodule.c"
        var $14=$13+8; //@line 208 "mmapmodule.c"
        var $15=HEAP[$14]; //@line 208 "mmapmodule.c"
        var $16=$self_addr; //@line 208 "mmapmodule.c"
        var $17=$16+16; //@line 208 "mmapmodule.c"
        var $18=HEAP[$17]; //@line 208 "mmapmodule.c"
        var $19=$15+$18; //@line 208 "mmapmodule.c"
        var $20=HEAP[$19]; //@line 208 "mmapmodule.c"
        $value=$20; //@line 208 "mmapmodule.c"
        var $21=$self_addr; //@line 209 "mmapmodule.c"
        var $22=$21+16; //@line 209 "mmapmodule.c"
        var $23=HEAP[$22]; //@line 209 "mmapmodule.c"
        var $24=($23) + 1; //@line 209 "mmapmodule.c"
        var $25=$self_addr; //@line 209 "mmapmodule.c"
        var $26=$25+16; //@line 209 "mmapmodule.c"
        HEAP[$26]=$24; //@line 209 "mmapmodule.c"
        var $27=$value; //@line 210 "mmapmodule.c"
        var $28=($27); //@line 210 "mmapmodule.c"
        var $29=__Py_BuildValue_SizeT(__str1, $28); //@line 210 "mmapmodule.c"
        $0=$29; //@line 210 "mmapmodule.c"
        __label__ = 5; break; //@line 210 "mmapmodule.c"
      case 4: // $bb3
        var $30=HEAP[_PyExc_ValueError]; //@line 212 "mmapmodule.c"
        _PyErr_SetString($30, __str2); //@line 212 "mmapmodule.c"
        $0=0; //@line 213 "mmapmodule.c"
        __label__ = 5; break; //@line 213 "mmapmodule.c"
      case 5: // $bb4
        var $31=$0; //@line 206 "mmapmodule.c"
        $retval=$31; //@line 206 "mmapmodule.c"
        var $retval5=$retval; //@line 206 "mmapmodule.c"
        ;
        return $retval5; //@line 206 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_read_line_method($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $start;
        var $eof;
        var $eol;
        var $result;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 221 "mmapmodule.c"
        var $2=$1+8; //@line 221 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 221 "mmapmodule.c"
        var $4=$self_addr; //@line 221 "mmapmodule.c"
        var $5=$4+16; //@line 221 "mmapmodule.c"
        var $6=HEAP[$5]; //@line 221 "mmapmodule.c"
        var $7=$3+$6; //@line 221 "mmapmodule.c"
        $start=$7; //@line 221 "mmapmodule.c"
        var $8=$self_addr; //@line 222 "mmapmodule.c"
        var $9=$8+8; //@line 222 "mmapmodule.c"
        var $10=HEAP[$9]; //@line 222 "mmapmodule.c"
        var $11=$self_addr; //@line 222 "mmapmodule.c"
        var $12=$11+12; //@line 222 "mmapmodule.c"
        var $13=HEAP[$12]; //@line 222 "mmapmodule.c"
        var $14=$10+$13; //@line 222 "mmapmodule.c"
        $eof=$14; //@line 222 "mmapmodule.c"
        var $15=$self_addr; //@line 226 "mmapmodule.c"
        var $16=$15+8; //@line 226 "mmapmodule.c"
        var $17=HEAP[$16]; //@line 226 "mmapmodule.c"
        var $18=($17)==0; //@line 226 "mmapmodule.c"
        if ($18) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 226 "mmapmodule.c"
      case 1: // $bb
        var $19=HEAP[_PyExc_ValueError]; //@line 226 "mmapmodule.c"
        _PyErr_SetString($19, __str); //@line 226 "mmapmodule.c"
        $0=0; //@line 226 "mmapmodule.c"
        __label__ = 6; break; //@line 226 "mmapmodule.c"
      case 2: // $bb1
        var $20=$self_addr; //@line 228 "mmapmodule.c"
        var $21=$20+12; //@line 228 "mmapmodule.c"
        var $22=HEAP[$21]; //@line 228 "mmapmodule.c"
        var $23=$self_addr; //@line 228 "mmapmodule.c"
        var $24=$23+16; //@line 228 "mmapmodule.c"
        var $25=HEAP[$24]; //@line 228 "mmapmodule.c"
        var $26=($22) - ($25); //@line 228 "mmapmodule.c"
        var $27=$start; //@line 228 "mmapmodule.c"
        var $28=_memchr($27, 10, $26); //@line 228 "mmapmodule.c"
        $eol=$28; //@line 228 "mmapmodule.c"
        var $29=$eol; //@line 229 "mmapmodule.c"
        var $30=($29)==0; //@line 229 "mmapmodule.c"
        if ($30) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 229 "mmapmodule.c"
      case 3: // $bb2
        var $31=$eof; //@line 230 "mmapmodule.c"
        $eol=$31; //@line 230 "mmapmodule.c"
        __label__ = 5; break; //@line 230 "mmapmodule.c"
      case 4: // $bb3
        var $32=$eol; //@line 232 "mmapmodule.c"
        var $33=$32+1; //@line 232 "mmapmodule.c"
        $eol=$33; //@line 232 "mmapmodule.c"
        __label__ = 5; break; //@line 232 "mmapmodule.c"
      case 5: // $bb4
        var $34=$eol; //@line 234 "mmapmodule.c"
        var $35=($34); //@line 234 "mmapmodule.c"
        var $36=$start; //@line 234 "mmapmodule.c"
        var $37=($36); //@line 234 "mmapmodule.c"
        var $38=($35) - ($37); //@line 234 "mmapmodule.c"
        var $39=$start; //@line 234 "mmapmodule.c"
        var $40=_PyString_FromStringAndSize($39, $38); //@line 234 "mmapmodule.c"
        $result=$40; //@line 234 "mmapmodule.c"
        var $41=$self_addr; //@line 235 "mmapmodule.c"
        var $42=$41+16; //@line 235 "mmapmodule.c"
        var $43=HEAP[$42]; //@line 235 "mmapmodule.c"
        var $44=$eol; //@line 235 "mmapmodule.c"
        var $45=($44); //@line 235 "mmapmodule.c"
        var $46=$start; //@line 235 "mmapmodule.c"
        var $47=($46); //@line 235 "mmapmodule.c"
        var $_neg=0 - ($47);
        var $48=($45) + ($43);
        var $49=($48) + ($_neg); //@line 235 "mmapmodule.c"
        var $50=$self_addr; //@line 235 "mmapmodule.c"
        var $51=$50+16; //@line 235 "mmapmodule.c"
        HEAP[$51]=$49; //@line 235 "mmapmodule.c"
        var $52=$result; //@line 236 "mmapmodule.c"
        $0=$52; //@line 236 "mmapmodule.c"
        __label__ = 6; break; //@line 236 "mmapmodule.c"
      case 6: // $bb5
        var $53=$0; //@line 226 "mmapmodule.c"
        $retval=$53; //@line 226 "mmapmodule.c"
        var $retval6=$retval; //@line 226 "mmapmodule.c"
        ;
        return $retval6; //@line 226 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_read_method($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $num_bytes=__stackBase__;
        var $n;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$self_addr; //@line 246 "mmapmodule.c"
        var $2=$1+8; //@line 246 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 246 "mmapmodule.c"
        var $4=($3)==0; //@line 246 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 246 "mmapmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 246 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 246 "mmapmodule.c"
        $0=0; //@line 246 "mmapmodule.c"
        __label__ = 12; break; //@line 246 "mmapmodule.c"
      case 2: // $bb1
        var $6=$args_addr; //@line 247 "mmapmodule.c"
        var $7=__PyArg_ParseTuple_SizeT($6, __str3, $num_bytes); //@line 247 "mmapmodule.c"
        var $8=($7)==0; //@line 247 "mmapmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 247 "mmapmodule.c"
      case 3: // $bb2
        $0=0; //@line 248 "mmapmodule.c"
        __label__ = 12; break; //@line 248 "mmapmodule.c"
      case 4: // $bb3
        var $9=$self_addr; //@line 251 "mmapmodule.c"
        var $10=$9+12; //@line 251 "mmapmodule.c"
        var $11=HEAP[$10]; //@line 251 "mmapmodule.c"
        var $12=$self_addr; //@line 251 "mmapmodule.c"
        var $13=$12+16; //@line 251 "mmapmodule.c"
        var $14=HEAP[$13]; //@line 251 "mmapmodule.c"
        var $15=($11) < ($14); //@line 251 "mmapmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 251 "mmapmodule.c"
      case 5: // $bb4
        ___assert_fail(__str4, __str5, 251, ___PRETTY_FUNCTION___8493); //@line 251 "mmapmodule.c"
        throw "Reached an unreachable!" //@line 251 "mmapmodule.c"
      case 6: // $bb5
        var $16=$self_addr; //@line 252 "mmapmodule.c"
        var $17=$16+12; //@line 252 "mmapmodule.c"
        var $18=HEAP[$17]; //@line 252 "mmapmodule.c"
        var $19=$self_addr; //@line 252 "mmapmodule.c"
        var $20=$19+16; //@line 252 "mmapmodule.c"
        var $21=HEAP[$20]; //@line 252 "mmapmodule.c"
        var $22=($18) - ($21); //@line 252 "mmapmodule.c"
        $n=$22; //@line 252 "mmapmodule.c"
        var $23=$n; //@line 259 "mmapmodule.c"
        var $24=($23) < 0; //@line 259 "mmapmodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 259 "mmapmodule.c"
      case 7: // $bb6
        $n=2147483647; //@line 260 "mmapmodule.c"
        __label__ = 8; break; //@line 260 "mmapmodule.c"
      case 8: // $bb7
        var $25=HEAP[$num_bytes]; //@line 261 "mmapmodule.c"
        var $26=($25) < 0; //@line 261 "mmapmodule.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 261 "mmapmodule.c"
      case 9: // $bb8
        var $27=HEAP[$num_bytes]; //@line 261 "mmapmodule.c"
        var $28=$n; //@line 261 "mmapmodule.c"
        var $29=($27) > ($28); //@line 261 "mmapmodule.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 261 "mmapmodule.c"
      case 10: // $bb9
        var $30=$n; //@line 262 "mmapmodule.c"
        HEAP[$num_bytes]=$30; //@line 262 "mmapmodule.c"
        __label__ = 11; break; //@line 262 "mmapmodule.c"
      case 11: // $bb10
        var $31=HEAP[$num_bytes]; //@line 264 "mmapmodule.c"
        var $32=$self_addr; //@line 264 "mmapmodule.c"
        var $33=$32+8; //@line 264 "mmapmodule.c"
        var $34=HEAP[$33]; //@line 264 "mmapmodule.c"
        var $35=$self_addr; //@line 264 "mmapmodule.c"
        var $36=$35+16; //@line 264 "mmapmodule.c"
        var $37=HEAP[$36]; //@line 264 "mmapmodule.c"
        var $38=$34+$37; //@line 264 "mmapmodule.c"
        var $39=__Py_BuildValue_SizeT(__str6, $38, $31); //@line 264 "mmapmodule.c"
        $result=$39; //@line 264 "mmapmodule.c"
        var $40=$self_addr; //@line 265 "mmapmodule.c"
        var $41=$40+16; //@line 265 "mmapmodule.c"
        var $42=HEAP[$41]; //@line 265 "mmapmodule.c"
        var $43=HEAP[$num_bytes]; //@line 265 "mmapmodule.c"
        var $44=($43) + ($42); //@line 265 "mmapmodule.c"
        var $45=$self_addr; //@line 265 "mmapmodule.c"
        var $46=$45+16; //@line 265 "mmapmodule.c"
        HEAP[$46]=$44; //@line 265 "mmapmodule.c"
        var $47=$result; //@line 266 "mmapmodule.c"
        $0=$47; //@line 266 "mmapmodule.c"
        __label__ = 12; break; //@line 266 "mmapmodule.c"
      case 12: // $bb11
        var $48=$0; //@line 246 "mmapmodule.c"
        $retval=$48; //@line 246 "mmapmodule.c"
        var $retval12=$retval; //@line 246 "mmapmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 246 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_gfind($self, $args, $reverse) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $reverse_addr;
        var $retval;
        var $iftmp_31;
        var $iftmp_16;
        var $iftmp_15;
        var $0;
        var $start=__stackBase__;
        var $end=__stackBase__+4;
        var $needle=__stackBase__+8;
        var $len=__stackBase__+12;
        var $p;
        var $start_p;
        var $end_p;
        var $sign;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $reverse_addr=$reverse;
        var $1=$self_addr; //@line 274 "mmapmodule.c"
        var $2=$1+16; //@line 274 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 274 "mmapmodule.c"
        HEAP[$start]=$3; //@line 274 "mmapmodule.c"
        var $4=$self_addr; //@line 275 "mmapmodule.c"
        var $5=$4+12; //@line 275 "mmapmodule.c"
        var $6=HEAP[$5]; //@line 275 "mmapmodule.c"
        HEAP[$end]=$6; //@line 275 "mmapmodule.c"
        var $7=$self_addr; //@line 279 "mmapmodule.c"
        var $8=$7+8; //@line 279 "mmapmodule.c"
        var $9=HEAP[$8]; //@line 279 "mmapmodule.c"
        var $10=($9)==0; //@line 279 "mmapmodule.c"
        if ($10) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 279 "mmapmodule.c"
      case 1: // $bb
        var $11=HEAP[_PyExc_ValueError]; //@line 279 "mmapmodule.c"
        _PyErr_SetString($11, __str); //@line 279 "mmapmodule.c"
        $0=0; //@line 279 "mmapmodule.c"
        __label__ = 34; break; //@line 279 "mmapmodule.c"
      case 2: // $bb1
        var $12=$reverse_addr; //@line 280 "mmapmodule.c"
        var $13=($12)!=0; //@line 280 "mmapmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 280 "mmapmodule.c"
      case 3: // $bb2
        $iftmp_15=__str7; //@line 280 "mmapmodule.c"
        __label__ = 5; break; //@line 280 "mmapmodule.c"
      case 4: // $bb3
        $iftmp_15=__str8; //@line 280 "mmapmodule.c"
        __label__ = 5; break; //@line 280 "mmapmodule.c"
      case 5: // $bb4
        var $14=$args_addr; //@line 280 "mmapmodule.c"
        var $15=$iftmp_15; //@line 280 "mmapmodule.c"
        var $16=__PyArg_ParseTuple_SizeT($14, $15, $needle, $len, $start, $end); //@line 280 "mmapmodule.c"
        var $17=($16)==0; //@line 280 "mmapmodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 280 "mmapmodule.c"
      case 6: // $bb5
        $0=0; //@line 282 "mmapmodule.c"
        __label__ = 34; break; //@line 282 "mmapmodule.c"
      case 7: // $bb6
        var $18=$reverse_addr; //@line 285 "mmapmodule.c"
        var $19=($18)!=0; //@line 285 "mmapmodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 285 "mmapmodule.c"
      case 8: // $bb7
        $iftmp_16=-1; //@line 285 "mmapmodule.c"
        __label__ = 10; break; //@line 285 "mmapmodule.c"
      case 9: // $bb8
        $iftmp_16=1; //@line 285 "mmapmodule.c"
        __label__ = 10; break; //@line 285 "mmapmodule.c"
      case 10: // $bb9
        var $20=$iftmp_16; //@line 285 "mmapmodule.c"
        $sign=$20; //@line 285 "mmapmodule.c"
        var $21=HEAP[$start]; //@line 287 "mmapmodule.c"
        var $22=($21) < 0; //@line 287 "mmapmodule.c"
        if ($22) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 287 "mmapmodule.c"
      case 11: // $bb11
        var $23=$self_addr; //@line 288 "mmapmodule.c"
        var $24=$23+12; //@line 288 "mmapmodule.c"
        var $25=HEAP[$24]; //@line 288 "mmapmodule.c"
        var $26=HEAP[$start]; //@line 288 "mmapmodule.c"
        var $27=($26) + ($25); //@line 288 "mmapmodule.c"
        HEAP[$start]=$27; //@line 288 "mmapmodule.c"
        var $28=($27) < 0; //@line 289 "mmapmodule.c"
        if ($28) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 289 "mmapmodule.c"
      case 12: // $bb12
        HEAP[$start]=0; //@line 290 "mmapmodule.c"
        __label__ = 15; break; //@line 290 "mmapmodule.c"
      case 13: // $bb13
        var $29=HEAP[$start]; //@line 291 "mmapmodule.c"
        var $30=$self_addr; //@line 291 "mmapmodule.c"
        var $31=$30+12; //@line 291 "mmapmodule.c"
        var $32=HEAP[$31]; //@line 291 "mmapmodule.c"
        var $33=($29) > ($32); //@line 291 "mmapmodule.c"
        if ($33) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 291 "mmapmodule.c"
      case 14: // $bb14
        var $34=$self_addr; //@line 292 "mmapmodule.c"
        var $35=$34+12; //@line 292 "mmapmodule.c"
        var $36=HEAP[$35]; //@line 292 "mmapmodule.c"
        HEAP[$start]=$36; //@line 292 "mmapmodule.c"
        __label__ = 15; break; //@line 292 "mmapmodule.c"
      case 15: // $bb15
        var $37=HEAP[$end]; //@line 294 "mmapmodule.c"
        var $38=($37) < 0; //@line 294 "mmapmodule.c"
        if ($38) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 294 "mmapmodule.c"
      case 16: // $bb17
        var $39=$self_addr; //@line 295 "mmapmodule.c"
        var $40=$39+12; //@line 295 "mmapmodule.c"
        var $41=HEAP[$40]; //@line 295 "mmapmodule.c"
        var $42=HEAP[$end]; //@line 295 "mmapmodule.c"
        var $43=($42) + ($41); //@line 295 "mmapmodule.c"
        HEAP[$end]=$43; //@line 295 "mmapmodule.c"
        var $44=($43) < 0; //@line 296 "mmapmodule.c"
        if ($44) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 296 "mmapmodule.c"
      case 17: // $bb18
        HEAP[$end]=0; //@line 297 "mmapmodule.c"
        __label__ = 20; break; //@line 297 "mmapmodule.c"
      case 18: // $bb19
        var $45=HEAP[$end]; //@line 298 "mmapmodule.c"
        var $46=$self_addr; //@line 298 "mmapmodule.c"
        var $47=$46+12; //@line 298 "mmapmodule.c"
        var $48=HEAP[$47]; //@line 298 "mmapmodule.c"
        var $49=($45) > ($48); //@line 298 "mmapmodule.c"
        if ($49) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 298 "mmapmodule.c"
      case 19: // $bb20
        var $50=$self_addr; //@line 299 "mmapmodule.c"
        var $51=$50+12; //@line 299 "mmapmodule.c"
        var $52=HEAP[$51]; //@line 299 "mmapmodule.c"
        HEAP[$end]=$52; //@line 299 "mmapmodule.c"
        __label__ = 20; break; //@line 299 "mmapmodule.c"
      case 20: // $bb21
        var $53=$self_addr; //@line 301 "mmapmodule.c"
        var $54=$53+8; //@line 301 "mmapmodule.c"
        var $55=HEAP[$54]; //@line 301 "mmapmodule.c"
        var $56=HEAP[$start]; //@line 301 "mmapmodule.c"
        var $57=$55+$56; //@line 301 "mmapmodule.c"
        $start_p=$57; //@line 301 "mmapmodule.c"
        var $58=$self_addr; //@line 302 "mmapmodule.c"
        var $59=$58+8; //@line 302 "mmapmodule.c"
        var $60=HEAP[$59]; //@line 302 "mmapmodule.c"
        var $61=HEAP[$end]; //@line 302 "mmapmodule.c"
        var $62=$60+$61; //@line 302 "mmapmodule.c"
        $end_p=$62; //@line 302 "mmapmodule.c"
        var $63=$reverse_addr; //@line 304 "mmapmodule.c"
        var $64=($63)!=0; //@line 304 "mmapmodule.c"
        if ($64) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 304 "mmapmodule.c"
      case 21: // $bb22
        var $65=HEAP[$len]; //@line 304 "mmapmodule.c"
        var $66=0 - ($65); //@line 304 "mmapmodule.c"
        var $67=$end_p; //@line 304 "mmapmodule.c"
        var $68=$67+$66; //@line 304 "mmapmodule.c"
        $iftmp_31=$68; //@line 304 "mmapmodule.c"
        __label__ = 23; break; //@line 304 "mmapmodule.c"
      case 22: // $bb23
        var $69=$start_p; //@line 304 "mmapmodule.c"
        $iftmp_31=$69; //@line 304 "mmapmodule.c"
        __label__ = 23; break; //@line 304 "mmapmodule.c"
      case 23: // $bb24
        var $70=$iftmp_31; //@line 304 "mmapmodule.c"
        $p=$70; //@line 304 "mmapmodule.c"
        __label__ = 31; break; //@line 304 "mmapmodule.c"
      case 24: // $bb25
        $i=0; //@line 307 "mmapmodule.c"
        __label__ = 26; break; //@line 307 "mmapmodule.c"
      case 25: // $bb26
        var $71=$i; //@line 307 "mmapmodule.c"
        var $72=($71) + 1; //@line 307 "mmapmodule.c"
        $i=$72; //@line 307 "mmapmodule.c"
        __label__ = 26; break; //@line 307 "mmapmodule.c"
      case 26: // $bb27
        var $73=HEAP[$len]; //@line 307 "mmapmodule.c"
        var $74=$i; //@line 307 "mmapmodule.c"
        var $75=($74) >= ($73); //@line 307 "mmapmodule.c"
        if ($75) { __label__ = 28; break; } else { __label__ = 27; break; } //@line 307 "mmapmodule.c"
      case 27: // $bb28
        var $76=HEAP[$needle]; //@line 307 "mmapmodule.c"
        var $77=$i; //@line 307 "mmapmodule.c"
        var $78=$76+$77; //@line 307 "mmapmodule.c"
        var $79=HEAP[$78]; //@line 307 "mmapmodule.c"
        var $80=$p; //@line 307 "mmapmodule.c"
        var $81=$i; //@line 307 "mmapmodule.c"
        var $82=$80+$81; //@line 307 "mmapmodule.c"
        var $83=HEAP[$82]; //@line 307 "mmapmodule.c"
        var $84=($79)==($83); //@line 307 "mmapmodule.c"
        if ($84) { __label__ = 25; break; } else { __label__ = 28; break; } //@line 307 "mmapmodule.c"
      case 28: // $bb29
        var $85=HEAP[$len]; //@line 309 "mmapmodule.c"
        var $86=$i; //@line 309 "mmapmodule.c"
        var $87=($86)==($85); //@line 309 "mmapmodule.c"
        var $88=$p; //@line 310 "mmapmodule.c"
        if ($87) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 309 "mmapmodule.c"
      case 29: // $bb30
        var $89=($88); //@line 310 "mmapmodule.c"
        var $90=$self_addr; //@line 310 "mmapmodule.c"
        var $91=$90+8; //@line 310 "mmapmodule.c"
        var $92=HEAP[$91]; //@line 310 "mmapmodule.c"
        var $93=($92); //@line 310 "mmapmodule.c"
        var $94=($89) - ($93); //@line 310 "mmapmodule.c"
        var $95=_PyInt_FromSsize_t($94); //@line 310 "mmapmodule.c"
        $0=$95; //@line 310 "mmapmodule.c"
        __label__ = 34; break; //@line 310 "mmapmodule.c"
      case 30: // $bb31
        var $96=$sign; //@line 305 "mmapmodule.c"
        var $97=$88+$96; //@line 305 "mmapmodule.c"
        $p=$97; //@line 305 "mmapmodule.c"
        __label__ = 31; break; //@line 305 "mmapmodule.c"
      case 31: // $bb32
        var $98=$p; //@line 305 "mmapmodule.c"
        var $99=$start_p; //@line 305 "mmapmodule.c"
        var $100=($98) < ($99); //@line 305 "mmapmodule.c"
        if ($100) { __label__ = 33; break; } else { __label__ = 32; break; } //@line 305 "mmapmodule.c"
      case 32: // $bb33
        var $101=HEAP[$len]; //@line 305 "mmapmodule.c"
        var $102=$p; //@line 305 "mmapmodule.c"
        var $103=$102+$101; //@line 305 "mmapmodule.c"
        var $104=$end_p; //@line 305 "mmapmodule.c"
        var $105=($103) <= ($104); //@line 305 "mmapmodule.c"
        if ($105) { __label__ = 24; break; } else { __label__ = 33; break; } //@line 305 "mmapmodule.c"
      case 33: // $bb34
        var $106=_PyInt_FromLong(-1); //@line 313 "mmapmodule.c"
        $0=$106; //@line 313 "mmapmodule.c"
        __label__ = 34; break; //@line 313 "mmapmodule.c"
      case 34: // $bb35
        var $107=$0; //@line 279 "mmapmodule.c"
        $retval=$107; //@line 279 "mmapmodule.c"
        var $retval36=$retval; //@line 279 "mmapmodule.c"
        STACKTOP = __stackBase__;
        return $retval36; //@line 279 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_find_method($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$self_addr; //@line 321 "mmapmodule.c"
    var $2=$args_addr; //@line 321 "mmapmodule.c"
    var $3=_mmap_gfind($1, $2, 0); //@line 321 "mmapmodule.c"
    $0=$3; //@line 321 "mmapmodule.c"
    var $4=$0; //@line 321 "mmapmodule.c"
    $retval=$4; //@line 321 "mmapmodule.c"
    var $retval1=$retval; //@line 321 "mmapmodule.c"
    ;
    return $retval1; //@line 321 "mmapmodule.c"
  }
  

  function _mmap_rfind_method($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$self_addr; //@line 328 "mmapmodule.c"
    var $2=$args_addr; //@line 328 "mmapmodule.c"
    var $3=_mmap_gfind($1, $2, 1); //@line 328 "mmapmodule.c"
    $0=$3; //@line 328 "mmapmodule.c"
    var $4=$0; //@line 328 "mmapmodule.c"
    $retval=$4; //@line 328 "mmapmodule.c"
    var $retval1=$retval; //@line 328 "mmapmodule.c"
    ;
    return $retval1; //@line 328 "mmapmodule.c"
  }
  

  function _mmap_write_method($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $1;
        var $length=__stackBase__;
        var $data=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $2=$self_addr; //@line 358 "mmapmodule.c"
        var $3=$2+8; //@line 358 "mmapmodule.c"
        var $4=HEAP[$3]; //@line 358 "mmapmodule.c"
        var $5=($4)==0; //@line 358 "mmapmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 358 "mmapmodule.c"
      case 1: // $bb
        var $6=HEAP[_PyExc_ValueError]; //@line 358 "mmapmodule.c"
        _PyErr_SetString($6, __str); //@line 358 "mmapmodule.c"
        $1=0; //@line 358 "mmapmodule.c"
        __label__ = 9; break; //@line 358 "mmapmodule.c"
      case 2: // $bb1
        var $7=$args_addr; //@line 359 "mmapmodule.c"
        var $8=__PyArg_ParseTuple_SizeT($7, __str11, $data, $length); //@line 359 "mmapmodule.c"
        var $9=($8)==0; //@line 359 "mmapmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 359 "mmapmodule.c"
      case 3: // $bb2
        $1=0; //@line 360 "mmapmodule.c"
        __label__ = 9; break; //@line 360 "mmapmodule.c"
      case 4: // $bb3
        var $10=$self_addr; //@line 362 "mmapmodule.c"
        $self_addr_i=$10;
        var $11=$self_addr_i; //@line 334 "mmapmodule.c"
        var $12=$11+32; //@line 334 "mmapmodule.c"
        var $13=HEAP[$12]; //@line 334 "mmapmodule.c"
        var $14=($13)!=1; //@line 334 "mmapmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 334 "mmapmodule.c"
      case 5: // $bb4
        var $15=HEAP[_PyExc_TypeError]; //@line 336 "mmapmodule.c"
        var $16=_PyErr_Format($15, __str9); //@line 336 "mmapmodule.c"
        $0=0; //@line 337 "mmapmodule.c"
        $retval_i=0; //@line 335 "mmapmodule.c"
        $1=0; //@line 363 "mmapmodule.c"
        __label__ = 9; break; //@line 363 "mmapmodule.c"
      case 6: // $bb5
        $0=1; //@line 335 "mmapmodule.c"
        $retval_i=1; //@line 335 "mmapmodule.c"
        var $17=$self_addr; //@line 365 "mmapmodule.c"
        var $18=$17+16; //@line 365 "mmapmodule.c"
        var $19=HEAP[$18]; //@line 365 "mmapmodule.c"
        var $20=HEAP[$length]; //@line 365 "mmapmodule.c"
        var $21=($20) + ($19); //@line 365 "mmapmodule.c"
        var $22=$self_addr; //@line 365 "mmapmodule.c"
        var $23=$22+12; //@line 365 "mmapmodule.c"
        var $24=HEAP[$23]; //@line 365 "mmapmodule.c"
        var $25=($21) > ($24); //@line 365 "mmapmodule.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 365 "mmapmodule.c"
      case 7: // $bb6
        var $26=HEAP[_PyExc_ValueError]; //@line 366 "mmapmodule.c"
        _PyErr_SetString($26, __str12); //@line 366 "mmapmodule.c"
        $1=0; //@line 367 "mmapmodule.c"
        __label__ = 9; break; //@line 367 "mmapmodule.c"
      case 8: // $bb7
        var $27=HEAP[$length]; //@line 369 "mmapmodule.c"
        var $28=HEAP[$data]; //@line 369 "mmapmodule.c"
        var $29=$self_addr; //@line 369 "mmapmodule.c"
        var $30=$29+8; //@line 369 "mmapmodule.c"
        var $31=HEAP[$30]; //@line 369 "mmapmodule.c"
        var $32=$self_addr; //@line 369 "mmapmodule.c"
        var $33=$32+16; //@line 369 "mmapmodule.c"
        var $34=HEAP[$33]; //@line 369 "mmapmodule.c"
        var $35=$31+$34; //@line 369 "mmapmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($35, $28, $27, 1, 0); //@line 369 "mmapmodule.c"
        var $36=$self_addr; //@line 370 "mmapmodule.c"
        var $37=$36+16; //@line 370 "mmapmodule.c"
        var $38=HEAP[$37]; //@line 370 "mmapmodule.c"
        var $39=HEAP[$length]; //@line 370 "mmapmodule.c"
        var $40=($39) + ($38); //@line 370 "mmapmodule.c"
        var $41=$self_addr; //@line 370 "mmapmodule.c"
        var $42=$41+16; //@line 370 "mmapmodule.c"
        HEAP[$42]=$40; //@line 370 "mmapmodule.c"
        var $43=HEAP[__Py_NoneStruct]; //@line 371 "mmapmodule.c"
        var $44=($43) + 1; //@line 371 "mmapmodule.c"
        HEAP[__Py_NoneStruct]=$44; //@line 371 "mmapmodule.c"
        $1=__Py_NoneStruct; //@line 372 "mmapmodule.c"
        __label__ = 9; break; //@line 372 "mmapmodule.c"
      case 9: // $bb8
        var $45=$1; //@line 358 "mmapmodule.c"
        $retval=$45; //@line 358 "mmapmodule.c"
        var $retval9=$retval; //@line 358 "mmapmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 358 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_write_byte_method($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 1; _memset(__stackBase__, 0, 1);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $1;
        var $value=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $2=$self_addr; //@line 381 "mmapmodule.c"
        var $3=$2+8; //@line 381 "mmapmodule.c"
        var $4=HEAP[$3]; //@line 381 "mmapmodule.c"
        var $5=($4)==0; //@line 381 "mmapmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 381 "mmapmodule.c"
      case 1: // $bb
        var $6=HEAP[_PyExc_ValueError]; //@line 381 "mmapmodule.c"
        _PyErr_SetString($6, __str); //@line 381 "mmapmodule.c"
        $1=0; //@line 381 "mmapmodule.c"
        __label__ = 9; break; //@line 381 "mmapmodule.c"
      case 2: // $bb1
        var $7=$args_addr; //@line 382 "mmapmodule.c"
        var $8=__PyArg_ParseTuple_SizeT($7, __str13, $value); //@line 382 "mmapmodule.c"
        var $9=($8)==0; //@line 382 "mmapmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 382 "mmapmodule.c"
      case 3: // $bb2
        $1=0; //@line 383 "mmapmodule.c"
        __label__ = 9; break; //@line 383 "mmapmodule.c"
      case 4: // $bb3
        var $10=$self_addr; //@line 385 "mmapmodule.c"
        $self_addr_i=$10;
        var $11=$self_addr_i; //@line 334 "mmapmodule.c"
        var $12=$11+32; //@line 334 "mmapmodule.c"
        var $13=HEAP[$12]; //@line 334 "mmapmodule.c"
        var $14=($13)!=1; //@line 334 "mmapmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 334 "mmapmodule.c"
      case 5: // $bb4
        var $15=HEAP[_PyExc_TypeError]; //@line 336 "mmapmodule.c"
        var $16=_PyErr_Format($15, __str9); //@line 336 "mmapmodule.c"
        $0=0; //@line 337 "mmapmodule.c"
        $retval_i=0; //@line 335 "mmapmodule.c"
        $1=0; //@line 386 "mmapmodule.c"
        __label__ = 9; break; //@line 386 "mmapmodule.c"
      case 6: // $bb5
        $0=1; //@line 335 "mmapmodule.c"
        $retval_i=1; //@line 335 "mmapmodule.c"
        var $17=$self_addr; //@line 388 "mmapmodule.c"
        var $18=$17+16; //@line 388 "mmapmodule.c"
        var $19=HEAP[$18]; //@line 388 "mmapmodule.c"
        var $20=$self_addr; //@line 388 "mmapmodule.c"
        var $21=$20+12; //@line 388 "mmapmodule.c"
        var $22=HEAP[$21]; //@line 388 "mmapmodule.c"
        var $23=($19) < ($22); //@line 388 "mmapmodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 388 "mmapmodule.c"
      case 7: // $bb6
        var $24=$self_addr; //@line 389 "mmapmodule.c"
        var $25=$24+8; //@line 389 "mmapmodule.c"
        var $26=HEAP[$25]; //@line 389 "mmapmodule.c"
        var $27=$self_addr; //@line 389 "mmapmodule.c"
        var $28=$27+16; //@line 389 "mmapmodule.c"
        var $29=HEAP[$28]; //@line 389 "mmapmodule.c"
        var $30=HEAP[$value]; //@line 389 "mmapmodule.c"
        var $31=$26+$29; //@line 389 "mmapmodule.c"
        HEAP[$31]=$30; //@line 389 "mmapmodule.c"
        var $32=$self_addr; //@line 390 "mmapmodule.c"
        var $33=$32+16; //@line 390 "mmapmodule.c"
        var $34=HEAP[$33]; //@line 390 "mmapmodule.c"
        var $35=($34) + 1; //@line 390 "mmapmodule.c"
        var $36=$self_addr; //@line 390 "mmapmodule.c"
        var $37=$36+16; //@line 390 "mmapmodule.c"
        HEAP[$37]=$35; //@line 390 "mmapmodule.c"
        var $38=HEAP[__Py_NoneStruct]; //@line 391 "mmapmodule.c"
        var $39=($38) + 1; //@line 391 "mmapmodule.c"
        HEAP[__Py_NoneStruct]=$39; //@line 391 "mmapmodule.c"
        $1=__Py_NoneStruct; //@line 392 "mmapmodule.c"
        __label__ = 9; break; //@line 392 "mmapmodule.c"
      case 8: // $bb7
        var $40=HEAP[_PyExc_ValueError]; //@line 395 "mmapmodule.c"
        _PyErr_SetString($40, __str14); //@line 395 "mmapmodule.c"
        $1=0; //@line 396 "mmapmodule.c"
        __label__ = 9; break; //@line 396 "mmapmodule.c"
      case 9: // $bb8
        var $41=$1; //@line 381 "mmapmodule.c"
        $retval=$41; //@line 381 "mmapmodule.c"
        var $retval9=$retval; //@line 381 "mmapmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 381 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_size_method($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 96; _memset(__stackBase__, 0, 96);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 404 "mmapmodule.c"
        var $2=$1+8; //@line 404 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 404 "mmapmodule.c"
        var $4=($3)==0; //@line 404 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 404 "mmapmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 404 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 404 "mmapmodule.c"
        $0=0; //@line 404 "mmapmodule.c"
        __label__ = 5; break; //@line 404 "mmapmodule.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 430 "mmapmodule.c"
        var $7=$6+28; //@line 430 "mmapmodule.c"
        var $8=HEAP[$7]; //@line 430 "mmapmodule.c"
        var $9=___01fstat64_($8, $buf); //@line 430 "mmapmodule.c"
        var $10=($9)==-1; //@line 430 "mmapmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 430 "mmapmodule.c"
      case 3: // $bb2
        var $11=HEAP[_mmap_module_error]; //@line 431 "mmapmodule.c"
        var $12=_PyErr_SetFromErrno($11); //@line 431 "mmapmodule.c"
        $0=0; //@line 432 "mmapmodule.c"
        __label__ = 5; break; //@line 432 "mmapmodule.c"
      case 4: // $bb3
        var $13=$buf+44; //@line 435 "mmapmodule.c"
        var $14=HEAP[$13]; //@line 435 "mmapmodule.c"
        var $15=_PyLong_FromLongLong($14); //@line 435 "mmapmodule.c"
        $0=$15; //@line 435 "mmapmodule.c"
        __label__ = 5; break; //@line 435 "mmapmodule.c"
      case 5: // $bb4
        var $16=$0; //@line 404 "mmapmodule.c"
        $retval=$16; //@line 404 "mmapmodule.c"
        var $retval5=$retval; //@line 404 "mmapmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 404 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_resize_method($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $1;
        var $new_size=__stackBase__;
        var $newmap;
        $self_addr=$self;
        $args_addr=$args;
        var $2=$self_addr; //@line 457 "mmapmodule.c"
        var $3=$2+8; //@line 457 "mmapmodule.c"
        var $4=HEAP[$3]; //@line 457 "mmapmodule.c"
        var $5=($4)==0; //@line 457 "mmapmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 457 "mmapmodule.c"
      case 1: // $bb
        var $6=HEAP[_PyExc_ValueError]; //@line 457 "mmapmodule.c"
        _PyErr_SetString($6, __str); //@line 457 "mmapmodule.c"
        $1=0; //@line 457 "mmapmodule.c"
        __label__ = 12; break; //@line 457 "mmapmodule.c"
      case 2: // $bb1
        var $7=$args_addr; //@line 458 "mmapmodule.c"
        var $8=__PyArg_ParseTuple_SizeT($7, __str15, $new_size); //@line 458 "mmapmodule.c"
        var $9=($8)==0; //@line 458 "mmapmodule.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 3; break; } //@line 458 "mmapmodule.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 458 "mmapmodule.c"
        $self_addr_i=$10;
        var $11=$self_addr_i; //@line 343 "mmapmodule.c"
        var $12=$11+32; //@line 343 "mmapmodule.c"
        var $13=HEAP[$12]; //@line 343 "mmapmodule.c"
        var $14=($13)==2; //@line 343 "mmapmodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 4; break; } //@line 343 "mmapmodule.c"
      case 4: // $bb_i
        var $15=$self_addr_i; //@line 343 "mmapmodule.c"
        var $16=$15+32; //@line 343 "mmapmodule.c"
        var $17=HEAP[$16]; //@line 343 "mmapmodule.c"
        var $18=($17)==0; //@line 343 "mmapmodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 343 "mmapmodule.c"
      case 5: // $is_resizeable_exit_thread
        var $19=HEAP[_PyExc_TypeError]; //@line 345 "mmapmodule.c"
        var $20=_PyErr_Format($19, __str10); //@line 345 "mmapmodule.c"
        $0=0; //@line 347 "mmapmodule.c"
        $retval_i=0; //@line 344 "mmapmodule.c"
        __label__ = 6; break;
      case 6: // $bb3
        $1=0; //@line 460 "mmapmodule.c"
        __label__ = 12; break; //@line 460 "mmapmodule.c"
      case 7: // $bb4
        $0=1; //@line 344 "mmapmodule.c"
        $retval_i=1; //@line 344 "mmapmodule.c"
        var $21=$self_addr; //@line 520 "mmapmodule.c"
        var $22=$21+20; //@line 520 "mmapmodule.c"
        var $23=HEAP[$22]; //@line 520 "mmapmodule.c"
        var $24=HEAP[$new_size]; //@line 520 "mmapmodule.c"
        var $25=($24); //@line 520 "mmapmodule.c"
        var $26=($25) + ($23); //@line 520 "mmapmodule.c"
        var $27=$self_addr; //@line 520 "mmapmodule.c"
        var $28=$27+28; //@line 520 "mmapmodule.c"
        var $29=HEAP[$28]; //@line 520 "mmapmodule.c"
        var $30=___01ftruncate64_($29, $26); //@line 520 "mmapmodule.c"
        var $31=($30)==-1; //@line 520 "mmapmodule.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 520 "mmapmodule.c"
      case 8: // $bb5
        var $32=HEAP[_mmap_module_error]; //@line 521 "mmapmodule.c"
        var $33=_PyErr_SetFromErrno($32); //@line 521 "mmapmodule.c"
        $1=0; //@line 522 "mmapmodule.c"
        __label__ = 12; break; //@line 522 "mmapmodule.c"
      case 9: // $bb6
        var $34=HEAP[$new_size]; //@line 526 "mmapmodule.c"
        var $35=$self_addr; //@line 526 "mmapmodule.c"
        var $36=$35+12; //@line 526 "mmapmodule.c"
        var $37=HEAP[$36]; //@line 526 "mmapmodule.c"
        var $38=$self_addr; //@line 526 "mmapmodule.c"
        var $39=$38+8; //@line 526 "mmapmodule.c"
        var $40=HEAP[$39]; //@line 526 "mmapmodule.c"
        var $41=_mremap($40, $37, $34, 1); //@line 526 "mmapmodule.c"
        $newmap=$41; //@line 526 "mmapmodule.c"
        var $42=$newmap; //@line 534 "mmapmodule.c"
        var $43=($42)==4294967295; //@line 534 "mmapmodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 534 "mmapmodule.c"
      case 10: // $bb7
        var $44=HEAP[_mmap_module_error]; //@line 536 "mmapmodule.c"
        var $45=_PyErr_SetFromErrno($44); //@line 536 "mmapmodule.c"
        $1=0; //@line 537 "mmapmodule.c"
        __label__ = 12; break; //@line 537 "mmapmodule.c"
      case 11: // $bb8
        var $46=$newmap; //@line 539 "mmapmodule.c"
        var $47=$self_addr; //@line 539 "mmapmodule.c"
        var $48=$47+8; //@line 539 "mmapmodule.c"
        HEAP[$48]=$46; //@line 539 "mmapmodule.c"
        var $49=HEAP[$new_size]; //@line 540 "mmapmodule.c"
        var $50=$self_addr; //@line 540 "mmapmodule.c"
        var $51=$50+12; //@line 540 "mmapmodule.c"
        HEAP[$51]=$49; //@line 540 "mmapmodule.c"
        var $52=HEAP[__Py_NoneStruct]; //@line 541 "mmapmodule.c"
        var $53=($52) + 1; //@line 541 "mmapmodule.c"
        HEAP[__Py_NoneStruct]=$53; //@line 541 "mmapmodule.c"
        $1=__Py_NoneStruct; //@line 542 "mmapmodule.c"
        __label__ = 12; break; //@line 542 "mmapmodule.c"
      case 12: // $bb9
        var $54=$1; //@line 457 "mmapmodule.c"
        $retval=$54; //@line 457 "mmapmodule.c"
        var $retval10=$retval; //@line 457 "mmapmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 457 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_tell_method($self, $unused) {
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
        var $1=$self_addr; //@line 551 "mmapmodule.c"
        var $2=$1+8; //@line 551 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 551 "mmapmodule.c"
        var $4=($3)==0; //@line 551 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 551 "mmapmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 551 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 551 "mmapmodule.c"
        $0=0; //@line 551 "mmapmodule.c"
        __label__ = 3; break; //@line 551 "mmapmodule.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 552 "mmapmodule.c"
        var $7=$6+16; //@line 552 "mmapmodule.c"
        var $8=HEAP[$7]; //@line 552 "mmapmodule.c"
        var $9=_PyInt_FromSize_t($8); //@line 552 "mmapmodule.c"
        $0=$9; //@line 552 "mmapmodule.c"
        __label__ = 3; break; //@line 552 "mmapmodule.c"
      case 3: // $bb2
        var $10=$0; //@line 551 "mmapmodule.c"
        $retval=$10; //@line 551 "mmapmodule.c"
        var $retval3=$retval; //@line 551 "mmapmodule.c"
        ;
        return $retval3; //@line 551 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_flush_method($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $offset=__stackBase__;
        var $size=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$offset]=0; //@line 558 "mmapmodule.c"
        var $1=$self_addr; //@line 559 "mmapmodule.c"
        var $2=$1+12; //@line 559 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 559 "mmapmodule.c"
        HEAP[$size]=$3; //@line 559 "mmapmodule.c"
        var $4=$self_addr; //@line 560 "mmapmodule.c"
        var $5=$4+8; //@line 560 "mmapmodule.c"
        var $6=HEAP[$5]; //@line 560 "mmapmodule.c"
        var $7=($6)==0; //@line 560 "mmapmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 560 "mmapmodule.c"
      case 1: // $bb
        var $8=HEAP[_PyExc_ValueError]; //@line 560 "mmapmodule.c"
        _PyErr_SetString($8, __str); //@line 560 "mmapmodule.c"
        $0=0; //@line 560 "mmapmodule.c"
        __label__ = 12; break; //@line 560 "mmapmodule.c"
      case 2: // $bb1
        var $9=$args_addr; //@line 561 "mmapmodule.c"
        var $10=__PyArg_ParseTuple_SizeT($9, __str16, $offset, $size); //@line 561 "mmapmodule.c"
        var $11=($10)==0; //@line 561 "mmapmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 561 "mmapmodule.c"
      case 3: // $bb2
        $0=0; //@line 562 "mmapmodule.c"
        __label__ = 12; break; //@line 562 "mmapmodule.c"
      case 4: // $bb3
        var $12=HEAP[$offset]; //@line 563 "mmapmodule.c"
        var $13=HEAP[$size]; //@line 563 "mmapmodule.c"
        var $14=($13) + ($12); //@line 563 "mmapmodule.c"
        var $15=$self_addr; //@line 563 "mmapmodule.c"
        var $16=$15+12; //@line 563 "mmapmodule.c"
        var $17=HEAP[$16]; //@line 563 "mmapmodule.c"
        var $18=($14) > ($17); //@line 563 "mmapmodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 563 "mmapmodule.c"
      case 5: // $bb4
        var $19=HEAP[_PyExc_ValueError]; //@line 564 "mmapmodule.c"
        _PyErr_SetString($19, __str17); //@line 564 "mmapmodule.c"
        $0=0; //@line 565 "mmapmodule.c"
        __label__ = 12; break; //@line 565 "mmapmodule.c"
      case 6: // $bb5
        var $20=$self_addr; //@line 568 "mmapmodule.c"
        var $21=$20+32; //@line 568 "mmapmodule.c"
        var $22=HEAP[$21]; //@line 568 "mmapmodule.c"
        var $23=($22)==1; //@line 568 "mmapmodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 568 "mmapmodule.c"
      case 7: // $bb6
        var $24=$self_addr; //@line 568 "mmapmodule.c"
        var $25=$24+32; //@line 568 "mmapmodule.c"
        var $26=HEAP[$25]; //@line 568 "mmapmodule.c"
        var $27=($26)==3; //@line 568 "mmapmodule.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 568 "mmapmodule.c"
      case 8: // $bb7
        var $28=_PyLong_FromLong(0); //@line 569 "mmapmodule.c"
        $0=$28; //@line 569 "mmapmodule.c"
        __label__ = 12; break; //@line 569 "mmapmodule.c"
      case 9: // $bb8
        var $29=HEAP[$size]; //@line 576 "mmapmodule.c"
        var $30=$self_addr; //@line 576 "mmapmodule.c"
        var $31=$30+8; //@line 576 "mmapmodule.c"
        var $32=HEAP[$31]; //@line 576 "mmapmodule.c"
        var $33=HEAP[$offset]; //@line 576 "mmapmodule.c"
        var $34=$32+$33; //@line 576 "mmapmodule.c"
        var $35=_msync($34, $29, 4); //@line 576 "mmapmodule.c"
        var $36=($35)==-1; //@line 576 "mmapmodule.c"
        if ($36) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 576 "mmapmodule.c"
      case 10: // $bb9
        var $37=HEAP[_mmap_module_error]; //@line 577 "mmapmodule.c"
        var $38=_PyErr_SetFromErrno($37); //@line 577 "mmapmodule.c"
        $0=0; //@line 578 "mmapmodule.c"
        __label__ = 12; break; //@line 578 "mmapmodule.c"
      case 11: // $bb10
        var $39=_PyInt_FromLong(0); //@line 580 "mmapmodule.c"
        $0=$39; //@line 580 "mmapmodule.c"
        __label__ = 12; break; //@line 580 "mmapmodule.c"
      case 12: // $bb11
        var $40=$0; //@line 560 "mmapmodule.c"
        $retval=$40; //@line 560 "mmapmodule.c"
        var $retval12=$retval; //@line 560 "mmapmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 560 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_seek_method($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $dist=__stackBase__;
        var $how=__stackBase__+4;
        var $where;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$how]=0; //@line 591 "mmapmodule.c"
        var $1=$self_addr; //@line 592 "mmapmodule.c"
        var $2=$1+8; //@line 592 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 592 "mmapmodule.c"
        var $4=($3)==0; //@line 592 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 592 "mmapmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 592 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 592 "mmapmodule.c"
        $0=0; //@line 592 "mmapmodule.c"
        __label__ = 15; break; //@line 592 "mmapmodule.c"
      case 2: // $bb1
        var $6=$args_addr; //@line 593 "mmapmodule.c"
        var $7=__PyArg_ParseTuple_SizeT($6, __str18, $dist, $how); //@line 593 "mmapmodule.c"
        var $8=($7)==0; //@line 593 "mmapmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 593 "mmapmodule.c"
      case 3: // $bb2
        $0=0; //@line 594 "mmapmodule.c"
        __label__ = 15; break; //@line 594 "mmapmodule.c"
      case 4: // $bb3
        var $9=HEAP[$how]; //@line 597 "mmapmodule.c"
        if ($9 == 0) {
          __label__ = 5; break;
        }
        else if ($9 == 1) {
          __label__ = 7; break;
        }
        else if ($9 == 2) {
          __label__ = 9; break;
        }
        else {
        __label__ = 11; break;
        }
        
      case 5: // $bb4
        var $10=HEAP[$dist]; //@line 599 "mmapmodule.c"
        var $11=($10) < 0; //@line 599 "mmapmodule.c"
        if ($11) { __label__ = 14; break; } else { __label__ = 6; break; } //@line 599 "mmapmodule.c"
      case 6: // $bb5
        var $12=HEAP[$dist]; //@line 601 "mmapmodule.c"
        $where=$12; //@line 601 "mmapmodule.c"
        __label__ = 12; break; //@line 601 "mmapmodule.c"
      case 7: // $bb6
        var $13=$self_addr; //@line 604 "mmapmodule.c"
        var $14=$13+16; //@line 604 "mmapmodule.c"
        var $15=HEAP[$14]; //@line 604 "mmapmodule.c"
        var $16=HEAP[$dist]; //@line 604 "mmapmodule.c"
        var $17=($16) + ($15); //@line 604 "mmapmodule.c"
        var $18=($17) < 0; //@line 604 "mmapmodule.c"
        if ($18) { __label__ = 14; break; } else { __label__ = 8; break; } //@line 604 "mmapmodule.c"
      case 8: // $bb7
        var $19=$self_addr; //@line 606 "mmapmodule.c"
        var $20=$19+16; //@line 606 "mmapmodule.c"
        var $21=HEAP[$20]; //@line 606 "mmapmodule.c"
        var $22=HEAP[$dist]; //@line 606 "mmapmodule.c"
        var $23=($22) + ($21); //@line 606 "mmapmodule.c"
        $where=$23; //@line 606 "mmapmodule.c"
        __label__ = 12; break; //@line 606 "mmapmodule.c"
      case 9: // $bb8
        var $24=$self_addr; //@line 609 "mmapmodule.c"
        var $25=$24+12; //@line 609 "mmapmodule.c"
        var $26=HEAP[$25]; //@line 609 "mmapmodule.c"
        var $27=HEAP[$dist]; //@line 609 "mmapmodule.c"
        var $28=($27) + ($26); //@line 609 "mmapmodule.c"
        var $29=($28) < 0; //@line 609 "mmapmodule.c"
        if ($29) { __label__ = 14; break; } else { __label__ = 10; break; } //@line 609 "mmapmodule.c"
      case 10: // $bb9
        var $30=$self_addr; //@line 611 "mmapmodule.c"
        var $31=$30+12; //@line 611 "mmapmodule.c"
        var $32=HEAP[$31]; //@line 611 "mmapmodule.c"
        var $33=HEAP[$dist]; //@line 611 "mmapmodule.c"
        var $34=($33) + ($32); //@line 611 "mmapmodule.c"
        $where=$34; //@line 611 "mmapmodule.c"
        __label__ = 12; break; //@line 611 "mmapmodule.c"
      case 11: // $bb10
        var $35=HEAP[_PyExc_ValueError]; //@line 614 "mmapmodule.c"
        _PyErr_SetString($35, __str19); //@line 614 "mmapmodule.c"
        $0=0; //@line 615 "mmapmodule.c"
        __label__ = 15; break; //@line 615 "mmapmodule.c"
      case 12: // $bb11
        var $36=$self_addr; //@line 617 "mmapmodule.c"
        var $37=$36+12; //@line 617 "mmapmodule.c"
        var $38=HEAP[$37]; //@line 617 "mmapmodule.c"
        var $39=$where; //@line 617 "mmapmodule.c"
        var $40=($38) < ($39); //@line 617 "mmapmodule.c"
        if ($40) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 617 "mmapmodule.c"
      case 13: // $bb12
        var $41=$self_addr; //@line 619 "mmapmodule.c"
        var $42=$41+16; //@line 619 "mmapmodule.c"
        var $43=$where; //@line 619 "mmapmodule.c"
        HEAP[$42]=$43; //@line 619 "mmapmodule.c"
        var $44=HEAP[__Py_NoneStruct]; //@line 620 "mmapmodule.c"
        var $45=($44) + 1; //@line 620 "mmapmodule.c"
        HEAP[__Py_NoneStruct]=$45; //@line 620 "mmapmodule.c"
        $0=__Py_NoneStruct; //@line 621 "mmapmodule.c"
        __label__ = 15; break; //@line 621 "mmapmodule.c"
      case 14: // $onoutofrange
        var $46=HEAP[_PyExc_ValueError]; //@line 625 "mmapmodule.c"
        _PyErr_SetString($46, __str20); //@line 625 "mmapmodule.c"
        $0=0; //@line 626 "mmapmodule.c"
        __label__ = 15; break; //@line 626 "mmapmodule.c"
      case 15: // $bb13
        var $47=$0; //@line 592 "mmapmodule.c"
        $retval=$47; //@line 592 "mmapmodule.c"
        var $retval14=$retval; //@line 592 "mmapmodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 592 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_move_method($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $1;
        var $dest=__stackBase__;
        var $src=__stackBase__+4;
        var $cnt=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        var $2=$self_addr; //@line 633 "mmapmodule.c"
        var $3=$2+8; //@line 633 "mmapmodule.c"
        var $4=HEAP[$3]; //@line 633 "mmapmodule.c"
        var $5=($4)==0; //@line 633 "mmapmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 633 "mmapmodule.c"
      case 1: // $bb
        var $6=HEAP[_PyExc_ValueError]; //@line 633 "mmapmodule.c"
        _PyErr_SetString($6, __str); //@line 633 "mmapmodule.c"
        $1=0; //@line 633 "mmapmodule.c"
        __label__ = 14; break; //@line 633 "mmapmodule.c"
      case 2: // $bb1
        var $7=$args_addr; //@line 634 "mmapmodule.c"
        var $8=__PyArg_ParseTuple_SizeT($7, __str21, $dest, $src, $cnt); //@line 634 "mmapmodule.c"
        var $9=($8)==0; //@line 634 "mmapmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 634 "mmapmodule.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 634 "mmapmodule.c"
        $self_addr_i=$10;
        var $11=$self_addr_i; //@line 334 "mmapmodule.c"
        var $12=$11+32; //@line 334 "mmapmodule.c"
        var $13=HEAP[$12]; //@line 334 "mmapmodule.c"
        var $14=($13)!=1; //@line 334 "mmapmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 334 "mmapmodule.c"
      case 4: // $is_writeable_exit_thread
        var $15=HEAP[_PyExc_TypeError]; //@line 336 "mmapmodule.c"
        var $16=_PyErr_Format($15, __str9); //@line 336 "mmapmodule.c"
        $0=0; //@line 337 "mmapmodule.c"
        $retval_i=0; //@line 335 "mmapmodule.c"
        __label__ = 5; break;
      case 5: // $bb3
        $1=0; //@line 636 "mmapmodule.c"
        __label__ = 14; break; //@line 636 "mmapmodule.c"
      case 6: // $bb4
        $0=1; //@line 335 "mmapmodule.c"
        $retval_i=1; //@line 335 "mmapmodule.c"
        var $17=HEAP[$cnt]; //@line 639 "mmapmodule.c"
        var $18=HEAP[$dest]; //@line 639 "mmapmodule.c"
        var $19=($18) + ($17); //@line 639 "mmapmodule.c"
        var $20=HEAP[$cnt]; //@line 639 "mmapmodule.c"
        var $21=($19) < ($20); //@line 639 "mmapmodule.c"
        if ($21) { __label__ = 12; break; } else { __label__ = 7; break; } //@line 639 "mmapmodule.c"
      case 7: // $bb5
        var $22=HEAP[$cnt]; //@line 639 "mmapmodule.c"
        var $23=HEAP[$src]; //@line 639 "mmapmodule.c"
        var $24=($23) + ($22); //@line 639 "mmapmodule.c"
        var $25=HEAP[$cnt]; //@line 639 "mmapmodule.c"
        var $26=($24) < ($25); //@line 639 "mmapmodule.c"
        if ($26) { __label__ = 12; break; } else { __label__ = 8; break; } //@line 639 "mmapmodule.c"
      case 8: // $bb6
        var $27=$self_addr; //@line 639 "mmapmodule.c"
        var $28=$27+12; //@line 639 "mmapmodule.c"
        var $29=HEAP[$28]; //@line 639 "mmapmodule.c"
        var $30=HEAP[$src]; //@line 639 "mmapmodule.c"
        var $31=($29) < ($30); //@line 639 "mmapmodule.c"
        if ($31) { __label__ = 12; break; } else { __label__ = 9; break; } //@line 639 "mmapmodule.c"
      case 9: // $bb7
        var $32=HEAP[$src]; //@line 639 "mmapmodule.c"
        var $33=HEAP[$cnt]; //@line 639 "mmapmodule.c"
        var $34=($33) + ($32); //@line 639 "mmapmodule.c"
        var $35=$self_addr; //@line 639 "mmapmodule.c"
        var $36=$35+12; //@line 639 "mmapmodule.c"
        var $37=HEAP[$36]; //@line 639 "mmapmodule.c"
        var $38=($34) > ($37); //@line 639 "mmapmodule.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 639 "mmapmodule.c"
      case 10: // $bb8
        var $39=$self_addr; //@line 639 "mmapmodule.c"
        var $40=$39+12; //@line 639 "mmapmodule.c"
        var $41=HEAP[$40]; //@line 639 "mmapmodule.c"
        var $42=HEAP[$dest]; //@line 639 "mmapmodule.c"
        var $43=($41) < ($42); //@line 639 "mmapmodule.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 639 "mmapmodule.c"
      case 11: // $bb9
        var $44=HEAP[$dest]; //@line 639 "mmapmodule.c"
        var $45=HEAP[$cnt]; //@line 639 "mmapmodule.c"
        var $46=($45) + ($44); //@line 639 "mmapmodule.c"
        var $47=$self_addr; //@line 639 "mmapmodule.c"
        var $48=$47+12; //@line 639 "mmapmodule.c"
        var $49=HEAP[$48]; //@line 639 "mmapmodule.c"
        var $50=($46) > ($49); //@line 639 "mmapmodule.c"
        if ($50) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 639 "mmapmodule.c"
      case 12: // $bb10
        var $51=HEAP[_PyExc_ValueError]; //@line 642 "mmapmodule.c"
        _PyErr_SetString($51, __str22); //@line 642 "mmapmodule.c"
        $1=0; //@line 644 "mmapmodule.c"
        __label__ = 14; break; //@line 644 "mmapmodule.c"
      case 13: // $bb11
        var $52=HEAP[$cnt]; //@line 646 "mmapmodule.c"
        var $53=$self_addr; //@line 646 "mmapmodule.c"
        var $54=$53+8; //@line 646 "mmapmodule.c"
        var $55=HEAP[$54]; //@line 646 "mmapmodule.c"
        var $56=HEAP[$src]; //@line 646 "mmapmodule.c"
        var $57=$55+$56; //@line 646 "mmapmodule.c"
        var $58=$self_addr; //@line 646 "mmapmodule.c"
        var $59=$58+8; //@line 646 "mmapmodule.c"
        var $60=HEAP[$59]; //@line 646 "mmapmodule.c"
        var $61=HEAP[$dest]; //@line 646 "mmapmodule.c"
        var $62=$60+$61; //@line 646 "mmapmodule.c"
        _llvm_memmove_p0i8_p0i8_i32($62, $57, $52, 1, 0); //@line 646 "mmapmodule.c"
        var $63=HEAP[__Py_NoneStruct]; //@line 647 "mmapmodule.c"
        var $64=($63) + 1; //@line 647 "mmapmodule.c"
        HEAP[__Py_NoneStruct]=$64; //@line 647 "mmapmodule.c"
        $1=__Py_NoneStruct; //@line 648 "mmapmodule.c"
        __label__ = 14; break; //@line 648 "mmapmodule.c"
      case 14: // $bb12
        var $65=$1; //@line 633 "mmapmodule.c"
        $retval=$65; //@line 633 "mmapmodule.c"
        var $retval13=$retval; //@line 633 "mmapmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 633 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_buffer_getreadbuf($self, $index, $ptr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $index_addr;
        var $ptr_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $index_addr=$index;
        $ptr_addr=$ptr;
        var $1=$self_addr; //@line 675 "mmapmodule.c"
        var $2=$1+8; //@line 675 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 675 "mmapmodule.c"
        var $4=($3)==0; //@line 675 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 675 "mmapmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 675 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 675 "mmapmodule.c"
        $0=-1; //@line 675 "mmapmodule.c"
        __label__ = 5; break; //@line 675 "mmapmodule.c"
      case 2: // $bb1
        var $6=$index_addr; //@line 676 "mmapmodule.c"
        var $7=($6)!=0; //@line 676 "mmapmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 676 "mmapmodule.c"
      case 3: // $bb2
        var $8=HEAP[_PyExc_SystemError]; //@line 677 "mmapmodule.c"
        _PyErr_SetString($8, __str37); //@line 677 "mmapmodule.c"
        $0=-1; //@line 679 "mmapmodule.c"
        __label__ = 5; break; //@line 679 "mmapmodule.c"
      case 4: // $bb3
        var $9=$self_addr; //@line 681 "mmapmodule.c"
        var $10=$9+8; //@line 681 "mmapmodule.c"
        var $11=HEAP[$10]; //@line 681 "mmapmodule.c"
        var $12=$ptr_addr; //@line 681 "mmapmodule.c"
        HEAP[$12]=$11; //@line 681 "mmapmodule.c"
        var $13=$self_addr; //@line 682 "mmapmodule.c"
        var $14=$13+12; //@line 682 "mmapmodule.c"
        var $15=HEAP[$14]; //@line 682 "mmapmodule.c"
        $0=$15; //@line 682 "mmapmodule.c"
        __label__ = 5; break; //@line 682 "mmapmodule.c"
      case 5: // $bb4
        var $16=$0; //@line 675 "mmapmodule.c"
        $retval=$16; //@line 675 "mmapmodule.c"
        var $retval5=$retval; //@line 675 "mmapmodule.c"
        ;
        return $retval5; //@line 675 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_buffer_getwritebuf($self, $index, $ptr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $index_addr;
        var $ptr_addr;
        var $retval;
        var $1;
        $self_addr=$self;
        $index_addr=$index;
        $ptr_addr=$ptr;
        var $2=$self_addr; //@line 688 "mmapmodule.c"
        var $3=$2+8; //@line 688 "mmapmodule.c"
        var $4=HEAP[$3]; //@line 688 "mmapmodule.c"
        var $5=($4)==0; //@line 688 "mmapmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 688 "mmapmodule.c"
      case 1: // $bb
        var $6=HEAP[_PyExc_ValueError]; //@line 688 "mmapmodule.c"
        _PyErr_SetString($6, __str); //@line 688 "mmapmodule.c"
        $1=-1; //@line 688 "mmapmodule.c"
        __label__ = 7; break; //@line 688 "mmapmodule.c"
      case 2: // $bb1
        var $7=$index_addr; //@line 689 "mmapmodule.c"
        var $8=($7)!=0; //@line 689 "mmapmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 689 "mmapmodule.c"
      case 3: // $bb2
        var $9=HEAP[_PyExc_SystemError]; //@line 690 "mmapmodule.c"
        _PyErr_SetString($9, __str37); //@line 690 "mmapmodule.c"
        $1=-1; //@line 692 "mmapmodule.c"
        __label__ = 7; break; //@line 692 "mmapmodule.c"
      case 4: // $bb3
        var $10=$self_addr; //@line 694 "mmapmodule.c"
        $self_addr_i=$10;
        var $11=$self_addr_i; //@line 334 "mmapmodule.c"
        var $12=$11+32; //@line 334 "mmapmodule.c"
        var $13=HEAP[$12]; //@line 334 "mmapmodule.c"
        var $14=($13)!=1; //@line 334 "mmapmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 334 "mmapmodule.c"
      case 5: // $bb4
        var $15=HEAP[_PyExc_TypeError]; //@line 336 "mmapmodule.c"
        var $16=_PyErr_Format($15, __str9); //@line 336 "mmapmodule.c"
        $0=0; //@line 337 "mmapmodule.c"
        $retval_i=0; //@line 335 "mmapmodule.c"
        $1=-1; //@line 695 "mmapmodule.c"
        __label__ = 7; break; //@line 695 "mmapmodule.c"
      case 6: // $bb5
        $0=1; //@line 335 "mmapmodule.c"
        $retval_i=1; //@line 335 "mmapmodule.c"
        var $17=$self_addr; //@line 696 "mmapmodule.c"
        var $18=$17+8; //@line 696 "mmapmodule.c"
        var $19=HEAP[$18]; //@line 696 "mmapmodule.c"
        var $20=$ptr_addr; //@line 696 "mmapmodule.c"
        HEAP[$20]=$19; //@line 696 "mmapmodule.c"
        var $21=$self_addr; //@line 697 "mmapmodule.c"
        var $22=$21+12; //@line 697 "mmapmodule.c"
        var $23=HEAP[$22]; //@line 697 "mmapmodule.c"
        $1=$23; //@line 697 "mmapmodule.c"
        __label__ = 7; break; //@line 697 "mmapmodule.c"
      case 7: // $bb6
        var $24=$1; //@line 688 "mmapmodule.c"
        $retval=$24; //@line 688 "mmapmodule.c"
        var $retval7=$retval; //@line 688 "mmapmodule.c"
        ;
        return $retval7; //@line 688 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_buffer_getsegcount($self, $lenp) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $lenp_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $lenp_addr=$lenp;
        var $1=$self_addr; //@line 703 "mmapmodule.c"
        var $2=$1+8; //@line 703 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 703 "mmapmodule.c"
        var $4=($3)==0; //@line 703 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 703 "mmapmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 703 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 703 "mmapmodule.c"
        $0=-1; //@line 703 "mmapmodule.c"
        __label__ = 5; break; //@line 703 "mmapmodule.c"
      case 2: // $bb1
        var $6=$lenp_addr; //@line 704 "mmapmodule.c"
        var $7=($6)!=0; //@line 704 "mmapmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 704 "mmapmodule.c"
      case 3: // $bb2
        var $8=$self_addr; //@line 705 "mmapmodule.c"
        var $9=$8+12; //@line 705 "mmapmodule.c"
        var $10=HEAP[$9]; //@line 705 "mmapmodule.c"
        var $11=$lenp_addr; //@line 705 "mmapmodule.c"
        HEAP[$11]=$10; //@line 705 "mmapmodule.c"
        __label__ = 4; break; //@line 705 "mmapmodule.c"
      case 4: // $bb3
        $0=1; //@line 706 "mmapmodule.c"
        __label__ = 5; break; //@line 706 "mmapmodule.c"
      case 5: // $bb4
        var $12=$0; //@line 703 "mmapmodule.c"
        $retval=$12; //@line 703 "mmapmodule.c"
        var $retval5=$retval; //@line 703 "mmapmodule.c"
        ;
        return $retval5; //@line 703 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_buffer_getcharbuffer($self, $index, $ptr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $index_addr;
        var $ptr_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $index_addr=$index;
        $ptr_addr=$ptr;
        var $1=$index_addr; //@line 712 "mmapmodule.c"
        var $2=($1)!=0; //@line 712 "mmapmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 712 "mmapmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_SystemError]; //@line 713 "mmapmodule.c"
        _PyErr_SetString($3, __str38); //@line 713 "mmapmodule.c"
        $0=-1; //@line 715 "mmapmodule.c"
        __label__ = 3; break; //@line 715 "mmapmodule.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 717 "mmapmodule.c"
        var $5=$4+8; //@line 717 "mmapmodule.c"
        var $6=HEAP[$5]; //@line 717 "mmapmodule.c"
        var $7=$ptr_addr; //@line 717 "mmapmodule.c"
        HEAP[$7]=$6; //@line 717 "mmapmodule.c"
        var $8=$self_addr; //@line 718 "mmapmodule.c"
        var $9=$8+12; //@line 718 "mmapmodule.c"
        var $10=HEAP[$9]; //@line 718 "mmapmodule.c"
        $0=$10; //@line 718 "mmapmodule.c"
        __label__ = 3; break; //@line 718 "mmapmodule.c"
      case 3: // $bb2
        var $11=$0; //@line 715 "mmapmodule.c"
        $retval=$11; //@line 715 "mmapmodule.c"
        var $retval3=$retval; //@line 715 "mmapmodule.c"
        ;
        return $retval3; //@line 715 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_length($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 724 "mmapmodule.c"
        var $2=$1+8; //@line 724 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 724 "mmapmodule.c"
        var $4=($3)==0; //@line 724 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 724 "mmapmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 724 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 724 "mmapmodule.c"
        $0=-1; //@line 724 "mmapmodule.c"
        __label__ = 3; break; //@line 724 "mmapmodule.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 725 "mmapmodule.c"
        var $7=$6+12; //@line 725 "mmapmodule.c"
        var $8=HEAP[$7]; //@line 725 "mmapmodule.c"
        $0=$8; //@line 725 "mmapmodule.c"
        __label__ = 3; break; //@line 725 "mmapmodule.c"
      case 3: // $bb2
        var $9=$0; //@line 724 "mmapmodule.c"
        $retval=$9; //@line 724 "mmapmodule.c"
        var $retval3=$retval; //@line 724 "mmapmodule.c"
        ;
        return $retval3; //@line 724 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_item($self, $i) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $i_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $i_addr=$i;
        var $1=$self_addr; //@line 731 "mmapmodule.c"
        var $2=$1+8; //@line 731 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 731 "mmapmodule.c"
        var $4=($3)==0; //@line 731 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 731 "mmapmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 731 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 731 "mmapmodule.c"
        $0=0; //@line 731 "mmapmodule.c"
        __label__ = 6; break; //@line 731 "mmapmodule.c"
      case 2: // $bb1
        var $6=$i_addr; //@line 732 "mmapmodule.c"
        var $7=($6) < 0; //@line 732 "mmapmodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 732 "mmapmodule.c"
      case 3: // $bb2
        var $8=$i_addr; //@line 732 "mmapmodule.c"
        var $9=$self_addr; //@line 732 "mmapmodule.c"
        var $10=$9+12; //@line 732 "mmapmodule.c"
        var $11=HEAP[$10]; //@line 732 "mmapmodule.c"
        var $12=($8) >= ($11); //@line 732 "mmapmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 732 "mmapmodule.c"
      case 4: // $bb3
        var $13=HEAP[_PyExc_IndexError]; //@line 733 "mmapmodule.c"
        _PyErr_SetString($13, __str39); //@line 733 "mmapmodule.c"
        $0=0; //@line 734 "mmapmodule.c"
        __label__ = 6; break; //@line 734 "mmapmodule.c"
      case 5: // $bb4
        var $14=$self_addr; //@line 736 "mmapmodule.c"
        var $15=$14+8; //@line 736 "mmapmodule.c"
        var $16=HEAP[$15]; //@line 736 "mmapmodule.c"
        var $17=$i_addr; //@line 736 "mmapmodule.c"
        var $18=$16+$17; //@line 736 "mmapmodule.c"
        var $19=_PyString_FromStringAndSize($18, 1); //@line 736 "mmapmodule.c"
        $0=$19; //@line 736 "mmapmodule.c"
        __label__ = 6; break; //@line 736 "mmapmodule.c"
      case 6: // $bb5
        var $20=$0; //@line 731 "mmapmodule.c"
        $retval=$20; //@line 731 "mmapmodule.c"
        var $retval6=$retval; //@line 731 "mmapmodule.c"
        ;
        return $retval6; //@line 731 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_slice($self, $ilow, $ihigh) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $ilow_addr;
        var $ihigh_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $ilow_addr=$ilow;
        $ihigh_addr=$ihigh;
        var $1=$self_addr; //@line 742 "mmapmodule.c"
        var $2=$1+8; //@line 742 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 742 "mmapmodule.c"
        var $4=($3)==0; //@line 742 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 742 "mmapmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 742 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 742 "mmapmodule.c"
        $0=0; //@line 742 "mmapmodule.c"
        __label__ = 13; break; //@line 742 "mmapmodule.c"
      case 2: // $bb1
        var $6=$ilow_addr; //@line 743 "mmapmodule.c"
        var $7=($6) < 0; //@line 743 "mmapmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 743 "mmapmodule.c"
      case 3: // $bb2
        $ilow_addr=0; //@line 744 "mmapmodule.c"
        __label__ = 6; break; //@line 744 "mmapmodule.c"
      case 4: // $bb3
        var $8=$ilow_addr; //@line 745 "mmapmodule.c"
        var $9=$self_addr; //@line 745 "mmapmodule.c"
        var $10=$9+12; //@line 745 "mmapmodule.c"
        var $11=HEAP[$10]; //@line 745 "mmapmodule.c"
        var $12=($8) > ($11); //@line 745 "mmapmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 745 "mmapmodule.c"
      case 5: // $bb4
        var $13=$self_addr; //@line 746 "mmapmodule.c"
        var $14=$13+12; //@line 746 "mmapmodule.c"
        var $15=HEAP[$14]; //@line 746 "mmapmodule.c"
        $ilow_addr=$15; //@line 746 "mmapmodule.c"
        __label__ = 6; break; //@line 746 "mmapmodule.c"
      case 6: // $bb5
        var $16=$ihigh_addr; //@line 747 "mmapmodule.c"
        var $17=($16) < 0; //@line 747 "mmapmodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 747 "mmapmodule.c"
      case 7: // $bb6
        $ihigh_addr=0; //@line 748 "mmapmodule.c"
        __label__ = 8; break; //@line 748 "mmapmodule.c"
      case 8: // $bb7
        var $18=$ihigh_addr; //@line 749 "mmapmodule.c"
        var $19=$ilow_addr; //@line 749 "mmapmodule.c"
        var $20=($18) < ($19); //@line 749 "mmapmodule.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 749 "mmapmodule.c"
      case 9: // $bb8
        var $21=$ilow_addr; //@line 750 "mmapmodule.c"
        $ihigh_addr=$21; //@line 750 "mmapmodule.c"
        __label__ = 12; break; //@line 750 "mmapmodule.c"
      case 10: // $bb9
        var $22=$ihigh_addr; //@line 751 "mmapmodule.c"
        var $23=$self_addr; //@line 751 "mmapmodule.c"
        var $24=$23+12; //@line 751 "mmapmodule.c"
        var $25=HEAP[$24]; //@line 751 "mmapmodule.c"
        var $26=($22) > ($25); //@line 751 "mmapmodule.c"
        if ($26) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 751 "mmapmodule.c"
      case 11: // $bb10
        var $27=$self_addr; //@line 752 "mmapmodule.c"
        var $28=$27+12; //@line 752 "mmapmodule.c"
        var $29=HEAP[$28]; //@line 752 "mmapmodule.c"
        $ihigh_addr=$29; //@line 752 "mmapmodule.c"
        __label__ = 12; break; //@line 752 "mmapmodule.c"
      case 12: // $bb11
        var $30=$ihigh_addr; //@line 754 "mmapmodule.c"
        var $31=$ilow_addr; //@line 754 "mmapmodule.c"
        var $32=($30) - ($31); //@line 754 "mmapmodule.c"
        var $33=$self_addr; //@line 754 "mmapmodule.c"
        var $34=$33+8; //@line 754 "mmapmodule.c"
        var $35=HEAP[$34]; //@line 754 "mmapmodule.c"
        var $36=$ilow_addr; //@line 754 "mmapmodule.c"
        var $37=$35+$36; //@line 754 "mmapmodule.c"
        var $38=_PyString_FromStringAndSize($37, $32); //@line 754 "mmapmodule.c"
        $0=$38; //@line 754 "mmapmodule.c"
        __label__ = 13; break; //@line 754 "mmapmodule.c"
      case 13: // $bb12
        var $39=$0; //@line 742 "mmapmodule.c"
        $retval=$39; //@line 742 "mmapmodule.c"
        var $retval13=$retval; //@line 742 "mmapmodule.c"
        ;
        return $retval13; //@line 742 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_subscript($self, $item) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $item_addr;
        var $retval;
        var $0;
        var $i;
        var $start=__stackBase__;
        var $stop=__stackBase__+4;
        var $step=__stackBase__+8;
        var $slicelen=__stackBase__+12;
        var $result_buf;
        var $cur;
        var $i21;
        var $result;
        $self_addr=$self;
        $item_addr=$item;
        var $1=$self_addr; //@line 760 "mmapmodule.c"
        var $2=$1+8; //@line 760 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 760 "mmapmodule.c"
        var $4=($3)==0; //@line 760 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 760 "mmapmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 760 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 760 "mmapmodule.c"
        $0=0; //@line 760 "mmapmodule.c"
        __label__ = 29; break; //@line 760 "mmapmodule.c"
      case 2: // $bb1
        var $6=$item_addr; //@line 761 "mmapmodule.c"
        var $7=$6+4; //@line 761 "mmapmodule.c"
        var $8=HEAP[$7]; //@line 761 "mmapmodule.c"
        var $9=$8+48; //@line 761 "mmapmodule.c"
        var $10=HEAP[$9]; //@line 761 "mmapmodule.c"
        var $11=($10)==0; //@line 761 "mmapmodule.c"
        if ($11) { __label__ = 16; break; } else { __label__ = 3; break; } //@line 761 "mmapmodule.c"
      case 3: // $bb2
        var $12=$item_addr; //@line 761 "mmapmodule.c"
        var $13=$12+4; //@line 761 "mmapmodule.c"
        var $14=HEAP[$13]; //@line 761 "mmapmodule.c"
        var $15=$14+84; //@line 761 "mmapmodule.c"
        var $16=HEAP[$15]; //@line 761 "mmapmodule.c"
        var $17=($16) & 131072; //@line 761 "mmapmodule.c"
        var $18=($17)==0; //@line 761 "mmapmodule.c"
        if ($18) { __label__ = 16; break; } else { __label__ = 4; break; } //@line 761 "mmapmodule.c"
      case 4: // $bb3
        var $19=$item_addr; //@line 761 "mmapmodule.c"
        var $20=$19+4; //@line 761 "mmapmodule.c"
        var $21=HEAP[$20]; //@line 761 "mmapmodule.c"
        var $22=$21+48; //@line 761 "mmapmodule.c"
        var $23=HEAP[$22]; //@line 761 "mmapmodule.c"
        var $24=$23+152; //@line 761 "mmapmodule.c"
        var $25=HEAP[$24]; //@line 761 "mmapmodule.c"
        var $26=($25)==0; //@line 761 "mmapmodule.c"
        if ($26) { __label__ = 16; break; } else { __label__ = 5; break; } //@line 761 "mmapmodule.c"
      case 5: // $bb4
        var $27=HEAP[_PyExc_IndexError]; //@line 762 "mmapmodule.c"
        var $28=$item_addr; //@line 762 "mmapmodule.c"
        var $29=_PyNumber_AsSsize_t($28, $27); //@line 762 "mmapmodule.c"
        $i=$29; //@line 762 "mmapmodule.c"
        var $30=$i; //@line 763 "mmapmodule.c"
        var $31=($30)==-1; //@line 763 "mmapmodule.c"
        if ($31) { __lastLabel__ = 5; __label__ = 6; break; } else { __lastLabel__ = 5; __label__ = 9; break; } //@line 763 "mmapmodule.c"
      case 6: // $bb5
        var $32=_PyErr_Occurred(); //@line 763 "mmapmodule.c"
        var $33=($32)!=0; //@line 763 "mmapmodule.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 763 "mmapmodule.c"
      case 7: // $bb6
        $0=0; //@line 764 "mmapmodule.c"
        __label__ = 29; break; //@line 764 "mmapmodule.c"
      case 8: // $bb7thread_pre_split
        var $_pr=$i;
        __lastLabel__ = 8; __label__ = 9; break;
      case 9: // $bb7
        var $34=__lastLabel__ == 8 ? $_pr : ($30);
        var $35=($34) < 0; //@line 765 "mmapmodule.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 765 "mmapmodule.c"
      case 10: // $bb8
        var $36=$self_addr; //@line 766 "mmapmodule.c"
        var $37=$36+12; //@line 766 "mmapmodule.c"
        var $38=HEAP[$37]; //@line 766 "mmapmodule.c"
        var $39=$i; //@line 766 "mmapmodule.c"
        var $40=($39) + ($38); //@line 766 "mmapmodule.c"
        $i=$40; //@line 766 "mmapmodule.c"
        __lastLabel__ = 10; __label__ = 12; break; //@line 766 "mmapmodule.c"
      case 11: // $bb9thread_pre_split
        var $_pr1=$i;
        __lastLabel__ = 11; __label__ = 12; break;
      case 12: // $bb9
        var $41=__lastLabel__ == 11 ? $_pr1 : ($40);
        var $42=($41) < 0; //@line 767 "mmapmodule.c"
        if ($42) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 767 "mmapmodule.c"
      case 13: // $bb10
        var $43=$i; //@line 767 "mmapmodule.c"
        var $44=$self_addr; //@line 767 "mmapmodule.c"
        var $45=$44+12; //@line 767 "mmapmodule.c"
        var $46=HEAP[$45]; //@line 767 "mmapmodule.c"
        var $47=($43) >= ($46); //@line 767 "mmapmodule.c"
        if ($47) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 767 "mmapmodule.c"
      case 14: // $bb11
        var $48=HEAP[_PyExc_IndexError]; //@line 768 "mmapmodule.c"
        _PyErr_SetString($48, __str39); //@line 768 "mmapmodule.c"
        $0=0; //@line 770 "mmapmodule.c"
        __label__ = 29; break; //@line 770 "mmapmodule.c"
      case 15: // $bb12
        var $49=$self_addr; //@line 772 "mmapmodule.c"
        var $50=$49+8; //@line 772 "mmapmodule.c"
        var $51=HEAP[$50]; //@line 772 "mmapmodule.c"
        var $52=$i; //@line 772 "mmapmodule.c"
        var $53=$51+$52; //@line 772 "mmapmodule.c"
        var $54=_PyString_FromStringAndSize($53, 1); //@line 772 "mmapmodule.c"
        $0=$54; //@line 772 "mmapmodule.c"
        __label__ = 29; break; //@line 772 "mmapmodule.c"
      case 16: // $bb13
        var $55=$item_addr; //@line 774 "mmapmodule.c"
        var $56=$55+4; //@line 774 "mmapmodule.c"
        var $57=HEAP[$56]; //@line 774 "mmapmodule.c"
        var $58=($57)==(_PySlice_Type); //@line 774 "mmapmodule.c"
        if ($58) { __label__ = 17; break; } else { __label__ = 28; break; } //@line 774 "mmapmodule.c"
      case 17: // $bb14
        var $59=$self_addr; //@line 777 "mmapmodule.c"
        var $60=$59+12; //@line 777 "mmapmodule.c"
        var $61=HEAP[$60]; //@line 777 "mmapmodule.c"
        var $62=$item_addr; //@line 777 "mmapmodule.c"
        var $63=$62; //@line 777 "mmapmodule.c"
        var $64=_PySlice_GetIndicesEx($63, $61, $start, $stop, $step, $slicelen); //@line 777 "mmapmodule.c"
        var $65=($64) < 0; //@line 777 "mmapmodule.c"
        if ($65) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 777 "mmapmodule.c"
      case 18: // $bb15
        $0=0; //@line 779 "mmapmodule.c"
        __label__ = 29; break; //@line 779 "mmapmodule.c"
      case 19: // $bb16
        var $66=HEAP[$slicelen]; //@line 782 "mmapmodule.c"
        var $67=($66) <= 0; //@line 782 "mmapmodule.c"
        if ($67) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 782 "mmapmodule.c"
      case 20: // $bb17
        var $68=_PyString_FromStringAndSize(__str40, 0); //@line 783 "mmapmodule.c"
        $0=$68; //@line 783 "mmapmodule.c"
        __label__ = 29; break; //@line 783 "mmapmodule.c"
      case 21: // $bb18
        var $69=HEAP[$step]; //@line 784 "mmapmodule.c"
        var $70=($69)==1; //@line 784 "mmapmodule.c"
        var $71=HEAP[$slicelen]; //@line 785 "mmapmodule.c"
        if ($70) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 784 "mmapmodule.c"
      case 22: // $bb19
        var $72=$self_addr; //@line 785 "mmapmodule.c"
        var $73=$72+8; //@line 785 "mmapmodule.c"
        var $74=HEAP[$73]; //@line 785 "mmapmodule.c"
        var $75=HEAP[$start]; //@line 785 "mmapmodule.c"
        var $76=$74+$75; //@line 785 "mmapmodule.c"
        var $77=_PyString_FromStringAndSize($76, $71); //@line 785 "mmapmodule.c"
        $0=$77; //@line 785 "mmapmodule.c"
        __label__ = 29; break; //@line 785 "mmapmodule.c"
      case 23: // $bb20
        var $78=_PyMem_Malloc($71); //@line 788 "mmapmodule.c"
        $result_buf=$78; //@line 788 "mmapmodule.c"
        var $79=$result_buf; //@line 792 "mmapmodule.c"
        var $80=($79)==0; //@line 792 "mmapmodule.c"
        if ($80) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 792 "mmapmodule.c"
      case 24: // $bb22
        var $81=_PyErr_NoMemory(); //@line 793 "mmapmodule.c"
        $0=$81; //@line 793 "mmapmodule.c"
        __label__ = 29; break; //@line 793 "mmapmodule.c"
      case 25: // $bb23
        var $82=HEAP[$start]; //@line 794 "mmapmodule.c"
        $cur=$82; //@line 794 "mmapmodule.c"
        $i21=0; //@line 794 "mmapmodule.c"
        var $83=HEAP[$slicelen]; //@line 794 "mmapmodule.c"
        var $84=$i21; //@line 794 "mmapmodule.c"
        var $85=($84) < ($83); //@line 794 "mmapmodule.c"
        if ($85) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 794 "mmapmodule.c"
      case 26: // $bb24
        var $86=$self_addr; //@line 796 "mmapmodule.c"
        var $87=$86+8; //@line 796 "mmapmodule.c"
        var $88=HEAP[$87]; //@line 796 "mmapmodule.c"
        var $89=$cur; //@line 796 "mmapmodule.c"
        var $90=$88+$89; //@line 796 "mmapmodule.c"
        var $91=HEAP[$90]; //@line 796 "mmapmodule.c"
        var $92=$result_buf; //@line 796 "mmapmodule.c"
        var $93=$i21; //@line 796 "mmapmodule.c"
        var $94=$92+$93; //@line 796 "mmapmodule.c"
        HEAP[$94]=$91; //@line 796 "mmapmodule.c"
        var $95=HEAP[$step]; //@line 795 "mmapmodule.c"
        var $96=$cur; //@line 795 "mmapmodule.c"
        var $97=($96) + ($95); //@line 795 "mmapmodule.c"
        $cur=$97; //@line 795 "mmapmodule.c"
        var $98=$i21; //@line 795 "mmapmodule.c"
        var $99=($98) + 1; //@line 795 "mmapmodule.c"
        $i21=$99; //@line 795 "mmapmodule.c"
        var $100=HEAP[$slicelen]; //@line 794 "mmapmodule.c"
        var $101=$i21; //@line 794 "mmapmodule.c"
        var $102=($101) < ($100); //@line 794 "mmapmodule.c"
        if ($102) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 794 "mmapmodule.c"
      case 27: // $bb26
        var $103=HEAP[$slicelen]; //@line 798 "mmapmodule.c"
        var $104=$result_buf; //@line 798 "mmapmodule.c"
        var $105=_PyString_FromStringAndSize($104, $103); //@line 798 "mmapmodule.c"
        $result=$105; //@line 798 "mmapmodule.c"
        var $106=$result_buf; //@line 800 "mmapmodule.c"
        _PyMem_Free($106); //@line 800 "mmapmodule.c"
        var $107=$result; //@line 801 "mmapmodule.c"
        $0=$107; //@line 801 "mmapmodule.c"
        __label__ = 29; break; //@line 801 "mmapmodule.c"
      case 28: // $bb27
        var $108=HEAP[_PyExc_TypeError]; //@line 805 "mmapmodule.c"
        _PyErr_SetString($108, __str41); //@line 805 "mmapmodule.c"
        $0=0; //@line 807 "mmapmodule.c"
        __label__ = 29; break; //@line 807 "mmapmodule.c"
      case 29: // $bb28
        var $109=$0; //@line 760 "mmapmodule.c"
        $retval=$109; //@line 760 "mmapmodule.c"
        var $retval29=$retval; //@line 760 "mmapmodule.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 760 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_concat($self, $bb) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $bb_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $bb_addr=$bb;
        var $1=$self_addr; //@line 814 "mmapmodule.c"
        var $2=$1+8; //@line 814 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 814 "mmapmodule.c"
        var $4=($3)==0; //@line 814 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 814 "mmapmodule.c"
      case 1: // $bb1
        var $5=HEAP[_PyExc_ValueError]; //@line 814 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 814 "mmapmodule.c"
        $0=0; //@line 814 "mmapmodule.c"
        __label__ = 3; break; //@line 814 "mmapmodule.c"
      case 2: // $bb2
        var $6=HEAP[_PyExc_SystemError]; //@line 815 "mmapmodule.c"
        _PyErr_SetString($6, __str42); //@line 815 "mmapmodule.c"
        $0=0; //@line 817 "mmapmodule.c"
        __label__ = 3; break; //@line 817 "mmapmodule.c"
      case 3: // $bb3
        var $7=$0; //@line 814 "mmapmodule.c"
        $retval=$7; //@line 814 "mmapmodule.c"
        var $retval4=$retval; //@line 814 "mmapmodule.c"
        ;
        return $retval4; //@line 814 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_repeat($self, $n) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $n_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $n_addr=$n;
        var $1=$self_addr; //@line 823 "mmapmodule.c"
        var $2=$1+8; //@line 823 "mmapmodule.c"
        var $3=HEAP[$2]; //@line 823 "mmapmodule.c"
        var $4=($3)==0; //@line 823 "mmapmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 823 "mmapmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 823 "mmapmodule.c"
        _PyErr_SetString($5, __str); //@line 823 "mmapmodule.c"
        $0=0; //@line 823 "mmapmodule.c"
        __label__ = 3; break; //@line 823 "mmapmodule.c"
      case 2: // $bb1
        var $6=HEAP[_PyExc_SystemError]; //@line 824 "mmapmodule.c"
        _PyErr_SetString($6, __str43); //@line 824 "mmapmodule.c"
        $0=0; //@line 826 "mmapmodule.c"
        __label__ = 3; break; //@line 826 "mmapmodule.c"
      case 3: // $bb2
        var $7=$0; //@line 823 "mmapmodule.c"
        $retval=$7; //@line 823 "mmapmodule.c"
        var $retval3=$retval; //@line 823 "mmapmodule.c"
        ;
        return $retval3; //@line 823 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_ass_slice($self, $ilow, $ihigh, $v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $ilow_addr;
        var $ihigh_addr;
        var $v_addr;
        var $retval;
        var $1;
        var $buf;
        $self_addr=$self;
        $ilow_addr=$ilow;
        $ihigh_addr=$ihigh;
        $v_addr=$v;
        var $2=$self_addr; //@line 834 "mmapmodule.c"
        var $3=$2+8; //@line 834 "mmapmodule.c"
        var $4=HEAP[$3]; //@line 834 "mmapmodule.c"
        var $5=($4)==0; //@line 834 "mmapmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 834 "mmapmodule.c"
      case 1: // $bb
        var $6=HEAP[_PyExc_ValueError]; //@line 834 "mmapmodule.c"
        _PyErr_SetString($6, __str); //@line 834 "mmapmodule.c"
        $1=-1; //@line 834 "mmapmodule.c"
        __label__ = 21; break; //@line 834 "mmapmodule.c"
      case 2: // $bb1
        var $7=$ilow_addr; //@line 835 "mmapmodule.c"
        var $8=($7) < 0; //@line 835 "mmapmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 835 "mmapmodule.c"
      case 3: // $bb2
        $ilow_addr=0; //@line 836 "mmapmodule.c"
        __label__ = 6; break; //@line 836 "mmapmodule.c"
      case 4: // $bb3
        var $9=$ilow_addr; //@line 837 "mmapmodule.c"
        var $10=$self_addr; //@line 837 "mmapmodule.c"
        var $11=$10+12; //@line 837 "mmapmodule.c"
        var $12=HEAP[$11]; //@line 837 "mmapmodule.c"
        var $13=($9) > ($12); //@line 837 "mmapmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 837 "mmapmodule.c"
      case 5: // $bb4
        var $14=$self_addr; //@line 838 "mmapmodule.c"
        var $15=$14+12; //@line 838 "mmapmodule.c"
        var $16=HEAP[$15]; //@line 838 "mmapmodule.c"
        $ilow_addr=$16; //@line 838 "mmapmodule.c"
        __label__ = 6; break; //@line 838 "mmapmodule.c"
      case 6: // $bb5
        var $17=$ihigh_addr; //@line 839 "mmapmodule.c"
        var $18=($17) < 0; //@line 839 "mmapmodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 839 "mmapmodule.c"
      case 7: // $bb6
        $ihigh_addr=0; //@line 840 "mmapmodule.c"
        __label__ = 8; break; //@line 840 "mmapmodule.c"
      case 8: // $bb7
        var $19=$ihigh_addr; //@line 841 "mmapmodule.c"
        var $20=$ilow_addr; //@line 841 "mmapmodule.c"
        var $21=($19) < ($20); //@line 841 "mmapmodule.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 841 "mmapmodule.c"
      case 9: // $bb8
        var $22=$ilow_addr; //@line 842 "mmapmodule.c"
        $ihigh_addr=$22; //@line 842 "mmapmodule.c"
        __label__ = 12; break; //@line 842 "mmapmodule.c"
      case 10: // $bb9
        var $23=$ihigh_addr; //@line 843 "mmapmodule.c"
        var $24=$self_addr; //@line 843 "mmapmodule.c"
        var $25=$24+12; //@line 843 "mmapmodule.c"
        var $26=HEAP[$25]; //@line 843 "mmapmodule.c"
        var $27=($23) > ($26); //@line 843 "mmapmodule.c"
        if ($27) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 843 "mmapmodule.c"
      case 11: // $bb10
        var $28=$self_addr; //@line 844 "mmapmodule.c"
        var $29=$28+12; //@line 844 "mmapmodule.c"
        var $30=HEAP[$29]; //@line 844 "mmapmodule.c"
        $ihigh_addr=$30; //@line 844 "mmapmodule.c"
        __label__ = 12; break; //@line 844 "mmapmodule.c"
      case 12: // $bb11
        var $31=$v_addr; //@line 846 "mmapmodule.c"
        var $32=($31)==0; //@line 846 "mmapmodule.c"
        if ($32) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 846 "mmapmodule.c"
      case 13: // $bb12
        var $33=HEAP[_PyExc_TypeError]; //@line 847 "mmapmodule.c"
        _PyErr_SetString($33, __str44); //@line 847 "mmapmodule.c"
        $1=-1; //@line 849 "mmapmodule.c"
        __label__ = 21; break; //@line 849 "mmapmodule.c"
      case 14: // $bb13
        var $34=$v_addr; //@line 851 "mmapmodule.c"
        var $35=$34+4; //@line 851 "mmapmodule.c"
        var $36=HEAP[$35]; //@line 851 "mmapmodule.c"
        var $37=$36+84; //@line 851 "mmapmodule.c"
        var $38=HEAP[$37]; //@line 851 "mmapmodule.c"
        var $39=($38) & 134217728; //@line 851 "mmapmodule.c"
        var $40=($39)==0; //@line 851 "mmapmodule.c"
        if ($40) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 851 "mmapmodule.c"
      case 15: // $bb14
        var $41=HEAP[_PyExc_IndexError]; //@line 852 "mmapmodule.c"
        _PyErr_SetString($41, __str45); //@line 852 "mmapmodule.c"
        $1=-1; //@line 854 "mmapmodule.c"
        __label__ = 21; break; //@line 854 "mmapmodule.c"
      case 16: // $bb15
        var $42=$v_addr; //@line 856 "mmapmodule.c"
        var $43=_PyString_Size($42); //@line 856 "mmapmodule.c"
        var $44=$ihigh_addr; //@line 856 "mmapmodule.c"
        var $45=$ilow_addr; //@line 856 "mmapmodule.c"
        var $46=($44) - ($45); //@line 856 "mmapmodule.c"
        var $47=($43)!=($46); //@line 856 "mmapmodule.c"
        if ($47) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 856 "mmapmodule.c"
      case 17: // $bb16
        var $48=HEAP[_PyExc_IndexError]; //@line 857 "mmapmodule.c"
        _PyErr_SetString($48, __str46); //@line 857 "mmapmodule.c"
        $1=-1; //@line 859 "mmapmodule.c"
        __label__ = 21; break; //@line 859 "mmapmodule.c"
      case 18: // $bb17
        var $49=$self_addr; //@line 861 "mmapmodule.c"
        $self_addr_i=$49;
        var $50=$self_addr_i; //@line 334 "mmapmodule.c"
        var $51=$50+32; //@line 334 "mmapmodule.c"
        var $52=HEAP[$51]; //@line 334 "mmapmodule.c"
        var $53=($52)!=1; //@line 334 "mmapmodule.c"
        if ($53) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 334 "mmapmodule.c"
      case 19: // $bb18
        var $54=HEAP[_PyExc_TypeError]; //@line 336 "mmapmodule.c"
        var $55=_PyErr_Format($54, __str9); //@line 336 "mmapmodule.c"
        $0=0; //@line 337 "mmapmodule.c"
        $retval_i=0; //@line 335 "mmapmodule.c"
        $1=-1; //@line 862 "mmapmodule.c"
        __label__ = 21; break; //@line 862 "mmapmodule.c"
      case 20: // $bb19
        $0=1; //@line 335 "mmapmodule.c"
        $retval_i=1; //@line 335 "mmapmodule.c"
        var $56=$v_addr; //@line 863 "mmapmodule.c"
        var $57=_PyString_AsString($56); //@line 863 "mmapmodule.c"
        $buf=$57; //@line 863 "mmapmodule.c"
        var $58=$ihigh_addr; //@line 864 "mmapmodule.c"
        var $59=$ilow_addr; //@line 864 "mmapmodule.c"
        var $60=($58) - ($59); //@line 864 "mmapmodule.c"
        var $61=$self_addr; //@line 864 "mmapmodule.c"
        var $62=$61+8; //@line 864 "mmapmodule.c"
        var $63=HEAP[$62]; //@line 864 "mmapmodule.c"
        var $64=$ilow_addr; //@line 864 "mmapmodule.c"
        var $65=$63+$64; //@line 864 "mmapmodule.c"
        var $66=$buf; //@line 864 "mmapmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($65, $66, $60, 1, 0); //@line 864 "mmapmodule.c"
        $1=0; //@line 865 "mmapmodule.c"
        __label__ = 21; break; //@line 865 "mmapmodule.c"
      case 21: // $bb20
        var $67=$1; //@line 834 "mmapmodule.c"
        $retval=$67; //@line 834 "mmapmodule.c"
        var $retval21=$retval; //@line 834 "mmapmodule.c"
        ;
        return $retval21; //@line 834 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_ass_item($self, $i, $v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $1;
        var $buf;
        $self_addr=$self;
        $i_addr=$i;
        $v_addr=$v;
        var $2=$self_addr; //@line 873 "mmapmodule.c"
        var $3=$2+8; //@line 873 "mmapmodule.c"
        var $4=HEAP[$3]; //@line 873 "mmapmodule.c"
        var $5=($4)==0; //@line 873 "mmapmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 873 "mmapmodule.c"
      case 1: // $bb
        var $6=HEAP[_PyExc_ValueError]; //@line 873 "mmapmodule.c"
        _PyErr_SetString($6, __str); //@line 873 "mmapmodule.c"
        $1=-1; //@line 873 "mmapmodule.c"
        __label__ = 13; break; //@line 873 "mmapmodule.c"
      case 2: // $bb1
        var $7=$i_addr; //@line 874 "mmapmodule.c"
        var $8=($7) < 0; //@line 874 "mmapmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 874 "mmapmodule.c"
      case 3: // $bb2
        var $9=$i_addr; //@line 874 "mmapmodule.c"
        var $10=$self_addr; //@line 874 "mmapmodule.c"
        var $11=$10+12; //@line 874 "mmapmodule.c"
        var $12=HEAP[$11]; //@line 874 "mmapmodule.c"
        var $13=($9) >= ($12); //@line 874 "mmapmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 874 "mmapmodule.c"
      case 4: // $bb3
        var $14=HEAP[_PyExc_IndexError]; //@line 875 "mmapmodule.c"
        _PyErr_SetString($14, __str39); //@line 875 "mmapmodule.c"
        $1=-1; //@line 876 "mmapmodule.c"
        __label__ = 13; break; //@line 876 "mmapmodule.c"
      case 5: // $bb4
        var $15=$v_addr; //@line 878 "mmapmodule.c"
        var $16=($15)==0; //@line 878 "mmapmodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 878 "mmapmodule.c"
      case 6: // $bb5
        var $17=HEAP[_PyExc_TypeError]; //@line 879 "mmapmodule.c"
        _PyErr_SetString($17, __str47); //@line 879 "mmapmodule.c"
        $1=-1; //@line 881 "mmapmodule.c"
        __label__ = 13; break; //@line 881 "mmapmodule.c"
      case 7: // $bb6
        var $18=$v_addr; //@line 883 "mmapmodule.c"
        var $19=$18+4; //@line 883 "mmapmodule.c"
        var $20=HEAP[$19]; //@line 883 "mmapmodule.c"
        var $21=$20+84; //@line 883 "mmapmodule.c"
        var $22=HEAP[$21]; //@line 883 "mmapmodule.c"
        var $23=($22) & 134217728; //@line 883 "mmapmodule.c"
        var $24=($23)==0; //@line 883 "mmapmodule.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 883 "mmapmodule.c"
      case 8: // $bb7
        var $25=$v_addr; //@line 883 "mmapmodule.c"
        var $26=_PyString_Size($25); //@line 883 "mmapmodule.c"
        var $27=($26)!=1; //@line 883 "mmapmodule.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 883 "mmapmodule.c"
      case 9: // $bb8
        var $28=HEAP[_PyExc_IndexError]; //@line 884 "mmapmodule.c"
        _PyErr_SetString($28, __str48); //@line 884 "mmapmodule.c"
        $1=-1; //@line 886 "mmapmodule.c"
        __label__ = 13; break; //@line 886 "mmapmodule.c"
      case 10: // $bb9
        var $29=$self_addr; //@line 888 "mmapmodule.c"
        $self_addr_i=$29;
        var $30=$self_addr_i; //@line 334 "mmapmodule.c"
        var $31=$30+32; //@line 334 "mmapmodule.c"
        var $32=HEAP[$31]; //@line 334 "mmapmodule.c"
        var $33=($32)!=1; //@line 334 "mmapmodule.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 334 "mmapmodule.c"
      case 11: // $bb10
        var $34=HEAP[_PyExc_TypeError]; //@line 336 "mmapmodule.c"
        var $35=_PyErr_Format($34, __str9); //@line 336 "mmapmodule.c"
        $0=0; //@line 337 "mmapmodule.c"
        $retval_i=0; //@line 335 "mmapmodule.c"
        $1=-1; //@line 889 "mmapmodule.c"
        __label__ = 13; break; //@line 889 "mmapmodule.c"
      case 12: // $bb11
        $0=1; //@line 335 "mmapmodule.c"
        $retval_i=1; //@line 335 "mmapmodule.c"
        var $36=$v_addr; //@line 890 "mmapmodule.c"
        var $37=_PyString_AsString($36); //@line 890 "mmapmodule.c"
        $buf=$37; //@line 890 "mmapmodule.c"
        var $38=$self_addr; //@line 891 "mmapmodule.c"
        var $39=$38+8; //@line 891 "mmapmodule.c"
        var $40=HEAP[$39]; //@line 891 "mmapmodule.c"
        var $41=$buf; //@line 891 "mmapmodule.c"
        var $42=$41; //@line 891 "mmapmodule.c"
        var $43=HEAP[$42]; //@line 891 "mmapmodule.c"
        var $44=$i_addr; //@line 891 "mmapmodule.c"
        var $45=$40+$44; //@line 891 "mmapmodule.c"
        HEAP[$45]=$43; //@line 891 "mmapmodule.c"
        $1=0; //@line 892 "mmapmodule.c"
        __label__ = 13; break; //@line 892 "mmapmodule.c"
      case 13: // $bb12
        var $46=$1; //@line 873 "mmapmodule.c"
        $retval=$46; //@line 873 "mmapmodule.c"
        var $retval13=$retval; //@line 873 "mmapmodule.c"
        ;
        return $retval13; //@line 873 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mmap_ass_subscript($self, $item, $value) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr_i1;
        var $retval_i2;
        var $0;
        var $self_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $item_addr;
        var $value_addr;
        var $retval;
        var $2;
        var $i;
        var $buf;
        var $start=__stackBase__;
        var $stop=__stackBase__+4;
        var $step=__stackBase__+8;
        var $slicelen=__stackBase__+12;
        var $buf35;
        var $cur;
        var $i39;
        var $buf40;
        $self_addr=$self;
        $item_addr=$item;
        $value_addr=$value;
        var $3=$self_addr; //@line 898 "mmapmodule.c"
        var $4=$3+8; //@line 898 "mmapmodule.c"
        var $5=HEAP[$4]; //@line 898 "mmapmodule.c"
        var $6=($5)==0; //@line 898 "mmapmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 898 "mmapmodule.c"
      case 1: // $bb
        var $7=HEAP[_PyExc_ValueError]; //@line 898 "mmapmodule.c"
        _PyErr_SetString($7, __str); //@line 898 "mmapmodule.c"
        $2=-1; //@line 898 "mmapmodule.c"
        __label__ = 46; break; //@line 898 "mmapmodule.c"
      case 2: // $bb1
        var $8=$item_addr; //@line 900 "mmapmodule.c"
        var $9=$8+4; //@line 900 "mmapmodule.c"
        var $10=HEAP[$9]; //@line 900 "mmapmodule.c"
        var $11=$10+48; //@line 900 "mmapmodule.c"
        var $12=HEAP[$11]; //@line 900 "mmapmodule.c"
        var $13=($12)==0; //@line 900 "mmapmodule.c"
        if ($13) { __label__ = 23; break; } else { __label__ = 3; break; } //@line 900 "mmapmodule.c"
      case 3: // $bb2
        var $14=$item_addr; //@line 900 "mmapmodule.c"
        var $15=$14+4; //@line 900 "mmapmodule.c"
        var $16=HEAP[$15]; //@line 900 "mmapmodule.c"
        var $17=$16+84; //@line 900 "mmapmodule.c"
        var $18=HEAP[$17]; //@line 900 "mmapmodule.c"
        var $19=($18) & 131072; //@line 900 "mmapmodule.c"
        var $20=($19)==0; //@line 900 "mmapmodule.c"
        if ($20) { __label__ = 23; break; } else { __label__ = 4; break; } //@line 900 "mmapmodule.c"
      case 4: // $bb3
        var $21=$item_addr; //@line 900 "mmapmodule.c"
        var $22=$21+4; //@line 900 "mmapmodule.c"
        var $23=HEAP[$22]; //@line 900 "mmapmodule.c"
        var $24=$23+48; //@line 900 "mmapmodule.c"
        var $25=HEAP[$24]; //@line 900 "mmapmodule.c"
        var $26=$25+152; //@line 900 "mmapmodule.c"
        var $27=HEAP[$26]; //@line 900 "mmapmodule.c"
        var $28=($27)==0; //@line 900 "mmapmodule.c"
        if ($28) { __label__ = 23; break; } else { __label__ = 5; break; } //@line 900 "mmapmodule.c"
      case 5: // $bb4
        var $29=HEAP[_PyExc_IndexError]; //@line 901 "mmapmodule.c"
        var $30=$item_addr; //@line 901 "mmapmodule.c"
        var $31=_PyNumber_AsSsize_t($30, $29); //@line 901 "mmapmodule.c"
        $i=$31; //@line 901 "mmapmodule.c"
        var $32=$i; //@line 904 "mmapmodule.c"
        var $33=($32)==-1; //@line 904 "mmapmodule.c"
        if ($33) { __lastLabel__ = 5; __label__ = 6; break; } else { __lastLabel__ = 5; __label__ = 9; break; } //@line 904 "mmapmodule.c"
      case 6: // $bb5
        var $34=_PyErr_Occurred(); //@line 904 "mmapmodule.c"
        var $35=($34)!=0; //@line 904 "mmapmodule.c"
        if ($35) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 904 "mmapmodule.c"
      case 7: // $bb6
        $2=-1; //@line 905 "mmapmodule.c"
        __label__ = 46; break; //@line 905 "mmapmodule.c"
      case 8: // $bb7thread_pre_split
        var $_pr=$i;
        __lastLabel__ = 8; __label__ = 9; break;
      case 9: // $bb7
        var $36=__lastLabel__ == 8 ? $_pr : ($32);
        var $37=($36) < 0; //@line 906 "mmapmodule.c"
        if ($37) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 906 "mmapmodule.c"
      case 10: // $bb8
        var $38=$self_addr; //@line 907 "mmapmodule.c"
        var $39=$38+12; //@line 907 "mmapmodule.c"
        var $40=HEAP[$39]; //@line 907 "mmapmodule.c"
        var $41=$i; //@line 907 "mmapmodule.c"
        var $42=($41) + ($40); //@line 907 "mmapmodule.c"
        $i=$42; //@line 907 "mmapmodule.c"
        __lastLabel__ = 10; __label__ = 12; break; //@line 907 "mmapmodule.c"
      case 11: // $bb9thread_pre_split
        var $_pr7=$i;
        __lastLabel__ = 11; __label__ = 12; break;
      case 12: // $bb9
        var $43=__lastLabel__ == 11 ? $_pr7 : ($42);
        var $44=($43) < 0; //@line 908 "mmapmodule.c"
        if ($44) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 908 "mmapmodule.c"
      case 13: // $bb10
        var $45=$i; //@line 908 "mmapmodule.c"
        var $46=$self_addr; //@line 908 "mmapmodule.c"
        var $47=$46+12; //@line 908 "mmapmodule.c"
        var $48=HEAP[$47]; //@line 908 "mmapmodule.c"
        var $49=($45) >= ($48); //@line 908 "mmapmodule.c"
        if ($49) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 908 "mmapmodule.c"
      case 14: // $bb11
        var $50=HEAP[_PyExc_IndexError]; //@line 909 "mmapmodule.c"
        _PyErr_SetString($50, __str39); //@line 909 "mmapmodule.c"
        $2=-1; //@line 911 "mmapmodule.c"
        __label__ = 46; break; //@line 911 "mmapmodule.c"
      case 15: // $bb12
        var $51=$value_addr; //@line 913 "mmapmodule.c"
        var $52=($51)==0; //@line 913 "mmapmodule.c"
        if ($52) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 913 "mmapmodule.c"
      case 16: // $bb13
        var $53=HEAP[_PyExc_TypeError]; //@line 914 "mmapmodule.c"
        _PyErr_SetString($53, __str47); //@line 914 "mmapmodule.c"
        $2=-1; //@line 916 "mmapmodule.c"
        __label__ = 46; break; //@line 916 "mmapmodule.c"
      case 17: // $bb14
        var $54=$value_addr; //@line 918 "mmapmodule.c"
        var $55=$54+4; //@line 918 "mmapmodule.c"
        var $56=HEAP[$55]; //@line 918 "mmapmodule.c"
        var $57=$56+84; //@line 918 "mmapmodule.c"
        var $58=HEAP[$57]; //@line 918 "mmapmodule.c"
        var $59=($58) & 134217728; //@line 918 "mmapmodule.c"
        var $60=($59)==0; //@line 918 "mmapmodule.c"
        if ($60) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 918 "mmapmodule.c"
      case 18: // $bb15
        var $61=$value_addr; //@line 918 "mmapmodule.c"
        var $62=_PyString_Size($61); //@line 918 "mmapmodule.c"
        var $63=($62)!=1; //@line 918 "mmapmodule.c"
        if ($63) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 918 "mmapmodule.c"
      case 19: // $bb16
        var $64=HEAP[_PyExc_IndexError]; //@line 919 "mmapmodule.c"
        _PyErr_SetString($64, __str48); //@line 919 "mmapmodule.c"
        $2=-1; //@line 921 "mmapmodule.c"
        __label__ = 46; break; //@line 921 "mmapmodule.c"
      case 20: // $bb17
        var $65=$self_addr; //@line 923 "mmapmodule.c"
        $self_addr_i=$65;
        var $66=$self_addr_i; //@line 334 "mmapmodule.c"
        var $67=$66+32; //@line 334 "mmapmodule.c"
        var $68=HEAP[$67]; //@line 334 "mmapmodule.c"
        var $69=($68)!=1; //@line 334 "mmapmodule.c"
        if ($69) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 334 "mmapmodule.c"
      case 21: // $bb18
        var $70=HEAP[_PyExc_TypeError]; //@line 336 "mmapmodule.c"
        var $71=_PyErr_Format($70, __str9); //@line 336 "mmapmodule.c"
        $1=0; //@line 337 "mmapmodule.c"
        $retval_i=0; //@line 335 "mmapmodule.c"
        $2=-1; //@line 924 "mmapmodule.c"
        __label__ = 46; break; //@line 924 "mmapmodule.c"
      case 22: // $bb19
        $1=1; //@line 335 "mmapmodule.c"
        $retval_i=1; //@line 335 "mmapmodule.c"
        var $72=$value_addr; //@line 925 "mmapmodule.c"
        var $73=_PyString_AsString($72); //@line 925 "mmapmodule.c"
        $buf=$73; //@line 925 "mmapmodule.c"
        var $74=$self_addr; //@line 926 "mmapmodule.c"
        var $75=$74+8; //@line 926 "mmapmodule.c"
        var $76=HEAP[$75]; //@line 926 "mmapmodule.c"
        var $77=$buf; //@line 926 "mmapmodule.c"
        var $78=$77; //@line 926 "mmapmodule.c"
        var $79=HEAP[$78]; //@line 926 "mmapmodule.c"
        var $80=$i; //@line 926 "mmapmodule.c"
        var $81=$76+$80; //@line 926 "mmapmodule.c"
        HEAP[$81]=$79; //@line 926 "mmapmodule.c"
        $2=0; //@line 927 "mmapmodule.c"
        __label__ = 46; break; //@line 927 "mmapmodule.c"
      case 23: // $bb20
        var $82=$item_addr; //@line 929 "mmapmodule.c"
        var $83=$82+4; //@line 929 "mmapmodule.c"
        var $84=HEAP[$83]; //@line 929 "mmapmodule.c"
        var $85=($84)==(_PySlice_Type); //@line 929 "mmapmodule.c"
        if ($85) { __label__ = 24; break; } else { __label__ = 45; break; } //@line 929 "mmapmodule.c"
      case 24: // $bb21
        var $86=$self_addr; //@line 932 "mmapmodule.c"
        var $87=$86+12; //@line 932 "mmapmodule.c"
        var $88=HEAP[$87]; //@line 932 "mmapmodule.c"
        var $89=$item_addr; //@line 932 "mmapmodule.c"
        var $90=$89; //@line 932 "mmapmodule.c"
        var $91=_PySlice_GetIndicesEx($90, $88, $start, $stop, $step, $slicelen); //@line 932 "mmapmodule.c"
        var $92=($91) < 0; //@line 932 "mmapmodule.c"
        if ($92) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 932 "mmapmodule.c"
      case 25: // $bb22
        $2=-1; //@line 935 "mmapmodule.c"
        __label__ = 46; break; //@line 935 "mmapmodule.c"
      case 26: // $bb23
        var $93=$value_addr; //@line 937 "mmapmodule.c"
        var $94=($93)==0; //@line 937 "mmapmodule.c"
        if ($94) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 937 "mmapmodule.c"
      case 27: // $bb24
        var $95=HEAP[_PyExc_TypeError]; //@line 938 "mmapmodule.c"
        _PyErr_SetString($95, __str44); //@line 938 "mmapmodule.c"
        $2=-1; //@line 940 "mmapmodule.c"
        __label__ = 46; break; //@line 940 "mmapmodule.c"
      case 28: // $bb25
        var $96=$value_addr; //@line 942 "mmapmodule.c"
        var $97=$96+4; //@line 942 "mmapmodule.c"
        var $98=HEAP[$97]; //@line 942 "mmapmodule.c"
        var $99=$98+84; //@line 942 "mmapmodule.c"
        var $100=HEAP[$99]; //@line 942 "mmapmodule.c"
        var $101=($100) & 134217728; //@line 942 "mmapmodule.c"
        var $102=($101)==0; //@line 942 "mmapmodule.c"
        if ($102) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 942 "mmapmodule.c"
      case 29: // $bb26
        var $103=HEAP[_PyExc_IndexError]; //@line 943 "mmapmodule.c"
        _PyErr_SetString($103, __str45); //@line 943 "mmapmodule.c"
        $2=-1; //@line 945 "mmapmodule.c"
        __label__ = 46; break; //@line 945 "mmapmodule.c"
      case 30: // $bb27
        var $104=$value_addr; //@line 947 "mmapmodule.c"
        var $105=_PyString_Size($104); //@line 947 "mmapmodule.c"
        var $106=HEAP[$slicelen]; //@line 947 "mmapmodule.c"
        var $107=($105)!=($106); //@line 947 "mmapmodule.c"
        if ($107) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 947 "mmapmodule.c"
      case 31: // $bb28
        var $108=HEAP[_PyExc_IndexError]; //@line 948 "mmapmodule.c"
        _PyErr_SetString($108, __str46); //@line 948 "mmapmodule.c"
        $2=-1; //@line 950 "mmapmodule.c"
        __label__ = 46; break; //@line 950 "mmapmodule.c"
      case 32: // $bb29
        var $109=$self_addr; //@line 952 "mmapmodule.c"
        $self_addr_i1=$109;
        var $110=$self_addr_i1; //@line 334 "mmapmodule.c"
        var $111=$110+32; //@line 334 "mmapmodule.c"
        var $112=HEAP[$111]; //@line 334 "mmapmodule.c"
        var $113=($112)!=1; //@line 334 "mmapmodule.c"
        if ($113) { __label__ = 34; break; } else { __label__ = 33; break; } //@line 334 "mmapmodule.c"
      case 33: // $bb30
        var $114=HEAP[_PyExc_TypeError]; //@line 336 "mmapmodule.c"
        var $115=_PyErr_Format($114, __str9); //@line 336 "mmapmodule.c"
        $0=0; //@line 337 "mmapmodule.c"
        $retval_i2=0; //@line 335 "mmapmodule.c"
        $2=-1; //@line 953 "mmapmodule.c"
        __label__ = 46; break; //@line 953 "mmapmodule.c"
      case 34: // $bb31
        $0=1; //@line 335 "mmapmodule.c"
        $retval_i2=1; //@line 335 "mmapmodule.c"
        var $116=HEAP[$slicelen]; //@line 955 "mmapmodule.c"
        var $117=($116)==0; //@line 955 "mmapmodule.c"
        if ($117) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 955 "mmapmodule.c"
      case 35: // $bb32
        $2=0; //@line 956 "mmapmodule.c"
        __label__ = 46; break; //@line 956 "mmapmodule.c"
      case 36: // $bb33
        var $118=HEAP[$step]; //@line 957 "mmapmodule.c"
        var $119=($118)==1; //@line 957 "mmapmodule.c"
        var $120=$value_addr; //@line 958 "mmapmodule.c"
        var $121=_PyString_AsString($120); //@line 958 "mmapmodule.c"
        if ($119) { __label__ = 37; break; } else { __label__ = 40; break; } //@line 957 "mmapmodule.c"
      case 37: // $bb34
        $buf35=$121; //@line 958 "mmapmodule.c"
        var $122=$buf35; //@line 960 "mmapmodule.c"
        var $123=($122)==0; //@line 960 "mmapmodule.c"
        if ($123) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 960 "mmapmodule.c"
      case 38: // $bb36
        $2=-1; //@line 961 "mmapmodule.c"
        __label__ = 46; break; //@line 961 "mmapmodule.c"
      case 39: // $bb37
        var $124=HEAP[$slicelen]; //@line 962 "mmapmodule.c"
        var $125=$self_addr; //@line 962 "mmapmodule.c"
        var $126=$125+8; //@line 962 "mmapmodule.c"
        var $127=HEAP[$126]; //@line 962 "mmapmodule.c"
        var $128=HEAP[$start]; //@line 962 "mmapmodule.c"
        var $129=$127+$128; //@line 962 "mmapmodule.c"
        var $130=$buf35; //@line 962 "mmapmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($129, $130, $124, 1, 0); //@line 962 "mmapmodule.c"
        $2=0; //@line 963 "mmapmodule.c"
        __label__ = 46; break; //@line 963 "mmapmodule.c"
      case 40: // $bb38
        $buf40=$121; //@line 967 "mmapmodule.c"
        var $131=$buf40; //@line 969 "mmapmodule.c"
        var $132=($131)==0; //@line 969 "mmapmodule.c"
        if ($132) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 969 "mmapmodule.c"
      case 41: // $bb41
        $2=-1; //@line 970 "mmapmodule.c"
        __label__ = 46; break; //@line 970 "mmapmodule.c"
      case 42: // $bb42
        var $133=HEAP[$start]; //@line 971 "mmapmodule.c"
        $cur=$133; //@line 971 "mmapmodule.c"
        $i39=0; //@line 971 "mmapmodule.c"
        var $134=HEAP[$slicelen]; //@line 971 "mmapmodule.c"
        var $135=$i39; //@line 971 "mmapmodule.c"
        var $136=($135) < ($134); //@line 971 "mmapmodule.c"
        if ($136) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 971 "mmapmodule.c"
      case 43: // $bb43
        var $137=$self_addr; //@line 973 "mmapmodule.c"
        var $138=$137+8; //@line 973 "mmapmodule.c"
        var $139=HEAP[$138]; //@line 973 "mmapmodule.c"
        var $140=$buf40; //@line 973 "mmapmodule.c"
        var $141=$i39; //@line 973 "mmapmodule.c"
        var $142=$140+$141; //@line 973 "mmapmodule.c"
        var $143=HEAP[$142]; //@line 973 "mmapmodule.c"
        var $144=$cur; //@line 973 "mmapmodule.c"
        var $145=$139+$144; //@line 973 "mmapmodule.c"
        HEAP[$145]=$143; //@line 973 "mmapmodule.c"
        var $146=HEAP[$step]; //@line 972 "mmapmodule.c"
        var $147=$cur; //@line 972 "mmapmodule.c"
        var $148=($147) + ($146); //@line 972 "mmapmodule.c"
        $cur=$148; //@line 972 "mmapmodule.c"
        var $149=$i39; //@line 972 "mmapmodule.c"
        var $150=($149) + 1; //@line 972 "mmapmodule.c"
        $i39=$150; //@line 972 "mmapmodule.c"
        var $151=HEAP[$slicelen]; //@line 971 "mmapmodule.c"
        var $152=$i39; //@line 971 "mmapmodule.c"
        var $153=($152) < ($151); //@line 971 "mmapmodule.c"
        if ($153) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 971 "mmapmodule.c"
      case 44: // $bb45
        $2=0; //@line 975 "mmapmodule.c"
        __label__ = 46; break; //@line 975 "mmapmodule.c"
      case 45: // $bb46
        var $154=HEAP[_PyExc_TypeError]; //@line 979 "mmapmodule.c"
        _PyErr_SetString($154, __str49); //@line 979 "mmapmodule.c"
        $2=-1; //@line 981 "mmapmodule.c"
        __label__ = 46; break; //@line 981 "mmapmodule.c"
      case 46: // $bb47
        var $155=$2; //@line 898 "mmapmodule.c"
        $retval=$155; //@line 898 "mmapmodule.c"
        var $retval48=$retval; //@line 898 "mmapmodule.c"
        STACKTOP = __stackBase__;
        return $retval48; //@line 898 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _new_mmap_object($type, $args, $kwdict) {
    var __stackBase__  = STACKTOP; STACKTOP += 124; _memset(__stackBase__, 0, 124);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $o_addr_i;
        var $param_addr_i;
        var $retval_i;
        var $0;
        var $i_i;
        var $type_addr;
        var $args_addr;
        var $kwdict_addr;
        var $retval;
        var $1;
        var $st=__stackBase__;
        var $m_obj;
        var $map_size_obj=__stackBase__+96;
        var $map_size;
        var $offset=__stackBase__+100;
        var $fd=__stackBase__+108;
        var $flags=__stackBase__+112;
        var $prot=__stackBase__+116;
        var $devzero;
        var $access=__stackBase__+120;
        var $calc_size;
        $type_addr=$type;
        $args_addr=$args;
        $kwdict_addr=$kwdict;
        HEAP[$map_size_obj]=0; //@line 1119 "mmapmodule.c"
        HEAP[$offset]=0; //@line 1121 "mmapmodule.c"
        HEAP[$flags]=1; //@line 1122 "mmapmodule.c"
        HEAP[$prot]=3; //@line 1122 "mmapmodule.c"
        $devzero=-1; //@line 1123 "mmapmodule.c"
        HEAP[$access]=0; //@line 1124 "mmapmodule.c"
        var $2=$args_addr; //@line 1129 "mmapmodule.c"
        var $3=$kwdict_addr; //@line 1129 "mmapmodule.c"
        var $4=__PyArg_ParseTupleAndKeywords_SizeT($2, $3, __str53, _keywords_9448, $fd, $map_size_obj, $flags, $prot, $access, $offset); //@line 1129 "mmapmodule.c"
        var $5=($4)==0; //@line 1129 "mmapmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1129 "mmapmodule.c"
      case 1: // $bb
        $1=0; //@line 1132 "mmapmodule.c"
        __label__ = 58; break; //@line 1132 "mmapmodule.c"
      case 2: // $bb1
        var $6=HEAP[$map_size_obj]; //@line 1133 "mmapmodule.c"
        $o_addr_i=$6;
        $param_addr_i=__str33;
        var $7=$o_addr_i; //@line 1086 "mmapmodule.c"
        var $8=($7)==0; //@line 1086 "mmapmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1086 "mmapmodule.c"
      case 3: // $_GetMapSize_exit_thread1
        $0=0; //@line 1087 "mmapmodule.c"
        $retval_i=0; //@line 1087 "mmapmodule.c"
        $map_size=0; //@line 1133 "mmapmodule.c"
        __label__ = 17; break;
      case 4: // $bb1_i
        var $9=$o_addr_i; //@line 1088 "mmapmodule.c"
        var $10=$9+4; //@line 1088 "mmapmodule.c"
        var $11=HEAP[$10]; //@line 1088 "mmapmodule.c"
        var $12=$11+48; //@line 1088 "mmapmodule.c"
        var $13=HEAP[$12]; //@line 1088 "mmapmodule.c"
        var $14=($13)!=0; //@line 1088 "mmapmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 13; break; } //@line 1088 "mmapmodule.c"
      case 5: // $bb2_i
        var $15=$o_addr_i; //@line 1088 "mmapmodule.c"
        var $16=$15+4; //@line 1088 "mmapmodule.c"
        var $17=HEAP[$16]; //@line 1088 "mmapmodule.c"
        var $18=$17+84; //@line 1088 "mmapmodule.c"
        var $19=HEAP[$18]; //@line 1088 "mmapmodule.c"
        var $20=($19) & 131072; //@line 1088 "mmapmodule.c"
        var $21=($20)!=0; //@line 1088 "mmapmodule.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 1088 "mmapmodule.c"
      case 6: // $bb3_i
        var $22=$o_addr_i; //@line 1088 "mmapmodule.c"
        var $23=$22+4; //@line 1088 "mmapmodule.c"
        var $24=HEAP[$23]; //@line 1088 "mmapmodule.c"
        var $25=$24+48; //@line 1088 "mmapmodule.c"
        var $26=HEAP[$25]; //@line 1088 "mmapmodule.c"
        var $27=$26+152; //@line 1088 "mmapmodule.c"
        var $28=HEAP[$27]; //@line 1088 "mmapmodule.c"
        var $29=($28)!=0; //@line 1088 "mmapmodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 1088 "mmapmodule.c"
      case 7: // $bb4_i
        var $30=HEAP[_PyExc_OverflowError]; //@line 1089 "mmapmodule.c"
        var $31=$o_addr_i; //@line 1089 "mmapmodule.c"
        var $32=_PyNumber_AsSsize_t($31, $30); //@line 1089 "mmapmodule.c"
        $i_i=$32; //@line 1089 "mmapmodule.c"
        var $33=$i_i; //@line 1090 "mmapmodule.c"
        var $34=($33)==-1; //@line 1090 "mmapmodule.c"
        if ($34) { __lastLabel__ = 7; __label__ = 8; break; } else { __lastLabel__ = 7; __label__ = 11; break; } //@line 1090 "mmapmodule.c"
      case 8: // $bb5_i
        var $35=_PyErr_Occurred(); //@line 1090 "mmapmodule.c"
        var $36=($35)!=0; //@line 1090 "mmapmodule.c"
        if ($36) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1090 "mmapmodule.c"
      case 9: // $bb6_i
        $0=-1; //@line 1091 "mmapmodule.c"
        __label__ = 14; break; //@line 1091 "mmapmodule.c"
      case 10: // $bb7thread_pre_split_i
        var $_pr_i=$i_i;
        __lastLabel__ = 10; __label__ = 11; break;
      case 11: // $bb7_i
        var $37=__lastLabel__ == 10 ? $_pr_i : ($33);
        var $38=($37) < 0; //@line 1092 "mmapmodule.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 1092 "mmapmodule.c"
      case 12: // $bb8_i
        var $39=HEAP[_PyExc_OverflowError]; //@line 1093 "mmapmodule.c"
        var $40=$param_addr_i; //@line 1093 "mmapmodule.c"
        var $41=_PyErr_Format($39, __str51, $40); //@line 1093 "mmapmodule.c"
        $0=-1; //@line 1096 "mmapmodule.c"
        __label__ = 14; break; //@line 1096 "mmapmodule.c"
      case 13: // $bb10_i
        var $42=HEAP[_PyExc_TypeError]; //@line 1101 "mmapmodule.c"
        _PyErr_SetString($42, __str52); //@line 1101 "mmapmodule.c"
        $0=-1; //@line 1102 "mmapmodule.c"
        __label__ = 14; break; //@line 1102 "mmapmodule.c"
      case 14: // $_GetMapSize_exit_thread
        $retval_i=-1; //@line 1087 "mmapmodule.c"
        $map_size=-1; //@line 1133 "mmapmodule.c"
        __label__ = 16; break;
      case 15: // $_GetMapSize_exit
        var $43=$i_i; //@line 1098 "mmapmodule.c"
        $0=$43; //@line 1098 "mmapmodule.c"
        $retval_i=$43; //@line 1087 "mmapmodule.c"
        $map_size=$43; //@line 1133 "mmapmodule.c"
        var $44=($43) < 0; //@line 1134 "mmapmodule.c"
        if ($44) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1134 "mmapmodule.c"
      case 16: // $bb2
        $1=0; //@line 1135 "mmapmodule.c"
        __label__ = 58; break; //@line 1135 "mmapmodule.c"
      case 17: // $bb3
        var $45=HEAP[$offset]; //@line 1136 "mmapmodule.c"
        var $46=($45) < 0; //@line 1136 "mmapmodule.c"
        if ($46) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1136 "mmapmodule.c"
      case 18: // $bb4
        var $47=HEAP[_PyExc_OverflowError]; //@line 1137 "mmapmodule.c"
        _PyErr_SetString($47, __str60); //@line 1137 "mmapmodule.c"
        $1=0; //@line 1139 "mmapmodule.c"
        __label__ = 58; break; //@line 1139 "mmapmodule.c"
      case 19: // $bb5
        var $48=HEAP[$access]; //@line 1142 "mmapmodule.c"
        var $49=($48)!=0; //@line 1142 "mmapmodule.c"
        if ($49) { __label__ = 20; break; } else { __label__ = 27; break; } //@line 1142 "mmapmodule.c"
      case 20: // $bb6
        var $50=HEAP[$flags]; //@line 1142 "mmapmodule.c"
        var $51=($50)!=1; //@line 1142 "mmapmodule.c"
        if ($51) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1142 "mmapmodule.c"
      case 21: // $bb7
        var $52=HEAP[$prot]; //@line 1142 "mmapmodule.c"
        var $53=($52)!=3; //@line 1142 "mmapmodule.c"
        if ($53) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1142 "mmapmodule.c"
      case 22: // $bb8
        var $54=HEAP[_PyExc_ValueError]; //@line 1144 "mmapmodule.c"
        var $55=_PyErr_Format($54, __str61); //@line 1144 "mmapmodule.c"
        $1=$55; //@line 1144 "mmapmodule.c"
        __label__ = 58; break; //@line 1144 "mmapmodule.c"
      case 23: // $bb9
        var $_pr=HEAP[$access];
        if ($_pr == 0) {
          __label__ = 27; break;
        }
        else if ($_pr == 1) {
          __label__ = 24; break;
        }
        else if ($_pr == 2) {
          __label__ = 25; break;
        }
        else if ($_pr == 3) {
          __label__ = 26; break;
        }
        else {
        __label__ = 32; break;
        }
        
      case 24: // $bb10
        HEAP[$flags]=1; //@line 1148 "mmapmodule.c"
        HEAP[$prot]=1; //@line 1149 "mmapmodule.c"
        __label__ = 33; break; //@line 1149 "mmapmodule.c"
      case 25: // $bb11
        HEAP[$flags]=1; //@line 1152 "mmapmodule.c"
        HEAP[$prot]=3; //@line 1153 "mmapmodule.c"
        __label__ = 33; break; //@line 1153 "mmapmodule.c"
      case 26: // $bb12
        HEAP[$flags]=2; //@line 1156 "mmapmodule.c"
        HEAP[$prot]=3; //@line 1157 "mmapmodule.c"
        __label__ = 33; break; //@line 1157 "mmapmodule.c"
      case 27: // $bb13
        var $56=HEAP[$prot]; //@line 1161 "mmapmodule.c"
        var $57=($56) & 1; //@line 1161 "mmapmodule.c"
        var $58=((($57)) & 255); //@line 1161 "mmapmodule.c"
        var $toBool=($58)!=0; //@line 1161 "mmapmodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1161 "mmapmodule.c"
        var $toBoolnot14=($toBoolnot); //@line 1161 "mmapmodule.c"
        var $toBool16=($toBoolnot14)!=0; //@line 1161 "mmapmodule.c"
        if ($toBool16) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 1161 "mmapmodule.c"
      case 28: // $bb17
        var $59=HEAP[$prot]; //@line 1161 "mmapmodule.c"
        var $60=($59) & 2; //@line 1161 "mmapmodule.c"
        var $61=($60)==0; //@line 1161 "mmapmodule.c"
        if ($61) { __label__ = 29; break; } else { __label__ = 33; break; } //@line 1161 "mmapmodule.c"
      case 29: // $bb19
        var $62=HEAP[$prot]; //@line 1164 "mmapmodule.c"
        var $63=($62) & 2; //@line 1164 "mmapmodule.c"
        var $64=($63)!=0; //@line 1164 "mmapmodule.c"
        if ($64) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1164 "mmapmodule.c"
      case 30: // $bb20
        HEAP[$access]=2; //@line 1165 "mmapmodule.c"
        __label__ = 33; break; //@line 1165 "mmapmodule.c"
      case 31: // $bb21
        HEAP[$access]=1; //@line 1168 "mmapmodule.c"
        __label__ = 33; break; //@line 1168 "mmapmodule.c"
      case 32: // $bb23
        var $65=HEAP[_PyExc_ValueError]; //@line 1172 "mmapmodule.c"
        var $66=_PyErr_Format($65, __str62); //@line 1172 "mmapmodule.c"
        $1=$66; //@line 1172 "mmapmodule.c"
        __label__ = 58; break; //@line 1172 "mmapmodule.c"
      case 33: // $bb24
        var $67=HEAP[$fd]; //@line 1189 "mmapmodule.c"
        var $68=($67)!=-1; //@line 1189 "mmapmodule.c"
        if ($68) { __label__ = 34; break; } else { __label__ = 43; break; } //@line 1189 "mmapmodule.c"
      case 34: // $bb25
        var $69=HEAP[$fd]; //@line 1189 "mmapmodule.c"
        var $70=___01fstat64_($69, $st); //@line 1189 "mmapmodule.c"
        var $71=($70)==0; //@line 1189 "mmapmodule.c"
        if ($71) { __label__ = 35; break; } else { __label__ = 43; break; } //@line 1189 "mmapmodule.c"
      case 35: // $bb26
        var $72=$st+16; //@line 1189 "mmapmodule.c"
        var $73=HEAP[$72]; //@line 1189 "mmapmodule.c"
        var $74=($73) & 61440; //@line 1189 "mmapmodule.c"
        var $75=($74)==32768; //@line 1189 "mmapmodule.c"
        if ($75) { __label__ = 36; break; } else { __label__ = 43; break; } //@line 1189 "mmapmodule.c"
      case 36: // $bb27
        var $76=$map_size; //@line 1190 "mmapmodule.c"
        var $77=($76)==0; //@line 1190 "mmapmodule.c"
        if ($77) { __label__ = 37; break; } else { __label__ = 41; break; } //@line 1190 "mmapmodule.c"
      case 37: // $bb28
        var $78=$st+44; //@line 1191 "mmapmodule.c"
        var $79=HEAP[$78]; //@line 1191 "mmapmodule.c"
        var $80=HEAP[$offset]; //@line 1191 "mmapmodule.c"
        var $81=($79) <= ($80); //@line 1191 "mmapmodule.c"
        if ($81) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1191 "mmapmodule.c"
      case 38: // $bb29
        var $82=HEAP[_PyExc_ValueError]; //@line 1192 "mmapmodule.c"
        _PyErr_SetString($82, __str63); //@line 1192 "mmapmodule.c"
        $1=0; //@line 1194 "mmapmodule.c"
        __label__ = 58; break; //@line 1194 "mmapmodule.c"
      case 39: // $bb30
        var $83=$st+44; //@line 1196 "mmapmodule.c"
        var $84=HEAP[$83]; //@line 1196 "mmapmodule.c"
        var $85=HEAP[$offset]; //@line 1196 "mmapmodule.c"
        var $86=($84) - ($85); //@line 1196 "mmapmodule.c"
        $calc_size=$86; //@line 1196 "mmapmodule.c"
        var $87=$calc_size; //@line 1197 "mmapmodule.c"
        var $88=((($87)) & 4294967295); //@line 1197 "mmapmodule.c"
        $map_size=$88; //@line 1197 "mmapmodule.c"
        var $89=$map_size; //@line 1198 "mmapmodule.c"
        var $90=($89); //@line 1198 "mmapmodule.c"
        var $91=$calc_size; //@line 1198 "mmapmodule.c"
        var $92=($90)!=($91); //@line 1198 "mmapmodule.c"
        if ($92) { __label__ = 40; break; } else { __label__ = 43; break; } //@line 1198 "mmapmodule.c"
      case 40: // $bb31
        var $93=HEAP[_PyExc_ValueError]; //@line 1199 "mmapmodule.c"
        _PyErr_SetString($93, __str64); //@line 1199 "mmapmodule.c"
        $1=0; //@line 1201 "mmapmodule.c"
        __label__ = 58; break; //@line 1201 "mmapmodule.c"
      case 41: // $bb33
        var $94=$map_size; //@line 1203 "mmapmodule.c"
        var $95=($94); //@line 1203 "mmapmodule.c"
        var $96=HEAP[$offset]; //@line 1203 "mmapmodule.c"
        var $97=($95) + ($96); //@line 1203 "mmapmodule.c"
        var $98=$st+44; //@line 1203 "mmapmodule.c"
        var $99=HEAP[$98]; //@line 1203 "mmapmodule.c"
        var $100=($97) > ($99); //@line 1203 "mmapmodule.c"
        if ($100) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1203 "mmapmodule.c"
      case 42: // $bb34
        var $101=HEAP[_PyExc_ValueError]; //@line 1204 "mmapmodule.c"
        _PyErr_SetString($101, __str65); //@line 1204 "mmapmodule.c"
        $1=0; //@line 1206 "mmapmodule.c"
        __label__ = 58; break; //@line 1206 "mmapmodule.c"
      case 43: // $bb35
        var $102=$type_addr; //@line 1210 "mmapmodule.c"
        var $103=$102+152; //@line 1210 "mmapmodule.c"
        var $104=HEAP[$103]; //@line 1210 "mmapmodule.c"
        var $105=$type_addr; //@line 1210 "mmapmodule.c"
        var $106=FUNCTION_TABLE[$104]($105, 0); //@line 1210 "mmapmodule.c"
        var $107=$106; //@line 1210 "mmapmodule.c"
        $m_obj=$107; //@line 1210 "mmapmodule.c"
        var $108=($107)==0; //@line 1211 "mmapmodule.c"
        if ($108) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1211 "mmapmodule.c"
      case 44: // $bb36
        $1=0; //@line 1211 "mmapmodule.c"
        __label__ = 58; break; //@line 1211 "mmapmodule.c"
      case 45: // $bb37
        var $109=$m_obj; //@line 1212 "mmapmodule.c"
        var $110=$109+8; //@line 1212 "mmapmodule.c"
        HEAP[$110]=0; //@line 1212 "mmapmodule.c"
        var $111=$map_size; //@line 1213 "mmapmodule.c"
        var $112=$m_obj; //@line 1213 "mmapmodule.c"
        var $113=$112+12; //@line 1213 "mmapmodule.c"
        HEAP[$113]=$111; //@line 1213 "mmapmodule.c"
        var $114=$m_obj; //@line 1214 "mmapmodule.c"
        var $115=$114+16; //@line 1214 "mmapmodule.c"
        HEAP[$115]=0; //@line 1214 "mmapmodule.c"
        var $116=HEAP[$offset]; //@line 1215 "mmapmodule.c"
        var $117=$m_obj; //@line 1215 "mmapmodule.c"
        var $118=$117+20; //@line 1215 "mmapmodule.c"
        HEAP[$118]=$116; //@line 1215 "mmapmodule.c"
        var $119=HEAP[$fd]; //@line 1216 "mmapmodule.c"
        var $120=($119)==-1; //@line 1216 "mmapmodule.c"
        if ($120) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 1216 "mmapmodule.c"
      case 46: // $bb38
        var $121=$m_obj; //@line 1217 "mmapmodule.c"
        var $122=$121+28; //@line 1217 "mmapmodule.c"
        HEAP[$122]=-1; //@line 1217 "mmapmodule.c"
        var $123=HEAP[$flags]; //@line 1224 "mmapmodule.c"
        var $124=($123) | 32; //@line 1224 "mmapmodule.c"
        HEAP[$flags]=$124; //@line 1224 "mmapmodule.c"
        __label__ = 51; break; //@line 1224 "mmapmodule.c"
      case 47: // $bb39
        var $125=HEAP[$fd]; //@line 1235 "mmapmodule.c"
        var $126=_dup($125); //@line 1235 "mmapmodule.c"
        var $127=$m_obj; //@line 1235 "mmapmodule.c"
        var $128=$127+28; //@line 1235 "mmapmodule.c"
        HEAP[$128]=$126; //@line 1235 "mmapmodule.c"
        var $129=$m_obj; //@line 1236 "mmapmodule.c"
        var $130=$129+28; //@line 1236 "mmapmodule.c"
        var $131=HEAP[$130]; //@line 1236 "mmapmodule.c"
        var $132=($131)==-1; //@line 1236 "mmapmodule.c"
        if ($132) { __label__ = 48; break; } else { __label__ = 51; break; } //@line 1236 "mmapmodule.c"
      case 48: // $bb40
        var $133=$m_obj; //@line 1237 "mmapmodule.c"
        var $134=$133; //@line 1237 "mmapmodule.c"
        var $135=$134; //@line 1237 "mmapmodule.c"
        var $136=HEAP[$135]; //@line 1237 "mmapmodule.c"
        var $137=($136) - 1; //@line 1237 "mmapmodule.c"
        var $138=$134; //@line 1237 "mmapmodule.c"
        HEAP[$138]=$137; //@line 1237 "mmapmodule.c"
        var $139=$134; //@line 1237 "mmapmodule.c"
        var $140=HEAP[$139]; //@line 1237 "mmapmodule.c"
        var $141=($140)==0; //@line 1237 "mmapmodule.c"
        if ($141) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 1237 "mmapmodule.c"
      case 49: // $bb41
        var $142=$m_obj; //@line 1237 "mmapmodule.c"
        var $143=$142; //@line 1237 "mmapmodule.c"
        var $144=$143+4; //@line 1237 "mmapmodule.c"
        var $145=HEAP[$144]; //@line 1237 "mmapmodule.c"
        var $146=$145+24; //@line 1237 "mmapmodule.c"
        var $147=HEAP[$146]; //@line 1237 "mmapmodule.c"
        var $148=$m_obj; //@line 1237 "mmapmodule.c"
        var $149=$148; //@line 1237 "mmapmodule.c"
        FUNCTION_TABLE[$147]($149); //@line 1237 "mmapmodule.c"
        __label__ = 50; break; //@line 1237 "mmapmodule.c"
      case 50: // $bb42
        var $150=HEAP[_mmap_module_error]; //@line 1238 "mmapmodule.c"
        var $151=_PyErr_SetFromErrno($150); //@line 1238 "mmapmodule.c"
        $1=0; //@line 1239 "mmapmodule.c"
        __label__ = 58; break; //@line 1239 "mmapmodule.c"
      case 51: // $bb43
        var $152=HEAP[$offset]; //@line 1243 "mmapmodule.c"
        var $153=HEAP[$fd]; //@line 1243 "mmapmodule.c"
        var $154=HEAP[$flags]; //@line 1243 "mmapmodule.c"
        var $155=HEAP[$prot]; //@line 1243 "mmapmodule.c"
        var $156=$map_size; //@line 1243 "mmapmodule.c"
        var $157=___01mmap64_(0, $156, $155, $154, $153, $152); //@line 1243 "mmapmodule.c"
        var $158=$m_obj; //@line 1243 "mmapmodule.c"
        var $159=$158+8; //@line 1243 "mmapmodule.c"
        HEAP[$159]=$157; //@line 1243 "mmapmodule.c"
        var $160=$devzero; //@line 1247 "mmapmodule.c"
        var $161=($160)!=-1; //@line 1247 "mmapmodule.c"
        if ($161) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 1247 "mmapmodule.c"
      case 52: // $bb44
        var $162=$devzero; //@line 1248 "mmapmodule.c"
        var $163=_close($162); //@line 1248 "mmapmodule.c"
        __label__ = 53; break; //@line 1248 "mmapmodule.c"
      case 53: // $bb45
        var $164=$m_obj; //@line 1251 "mmapmodule.c"
        var $165=$164+8; //@line 1251 "mmapmodule.c"
        var $166=HEAP[$165]; //@line 1251 "mmapmodule.c"
        var $167=($166)==4294967295; //@line 1251 "mmapmodule.c"
        if ($167) { __label__ = 54; break; } else { __label__ = 57; break; } //@line 1251 "mmapmodule.c"
      case 54: // $bb46
        var $168=$m_obj; //@line 1252 "mmapmodule.c"
        var $169=$168+8; //@line 1252 "mmapmodule.c"
        HEAP[$169]=0; //@line 1252 "mmapmodule.c"
        var $170=$m_obj; //@line 1253 "mmapmodule.c"
        var $171=$170; //@line 1253 "mmapmodule.c"
        var $172=$171; //@line 1253 "mmapmodule.c"
        var $173=HEAP[$172]; //@line 1253 "mmapmodule.c"
        var $174=($173) - 1; //@line 1253 "mmapmodule.c"
        var $175=$171; //@line 1253 "mmapmodule.c"
        HEAP[$175]=$174; //@line 1253 "mmapmodule.c"
        var $176=$171; //@line 1253 "mmapmodule.c"
        var $177=HEAP[$176]; //@line 1253 "mmapmodule.c"
        var $178=($177)==0; //@line 1253 "mmapmodule.c"
        if ($178) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1253 "mmapmodule.c"
      case 55: // $bb47
        var $179=$m_obj; //@line 1253 "mmapmodule.c"
        var $180=$179; //@line 1253 "mmapmodule.c"
        var $181=$180+4; //@line 1253 "mmapmodule.c"
        var $182=HEAP[$181]; //@line 1253 "mmapmodule.c"
        var $183=$182+24; //@line 1253 "mmapmodule.c"
        var $184=HEAP[$183]; //@line 1253 "mmapmodule.c"
        var $185=$m_obj; //@line 1253 "mmapmodule.c"
        var $186=$185; //@line 1253 "mmapmodule.c"
        FUNCTION_TABLE[$184]($186); //@line 1253 "mmapmodule.c"
        __label__ = 56; break; //@line 1253 "mmapmodule.c"
      case 56: // $bb48
        var $187=HEAP[_mmap_module_error]; //@line 1254 "mmapmodule.c"
        var $188=_PyErr_SetFromErrno($187); //@line 1254 "mmapmodule.c"
        $1=0; //@line 1255 "mmapmodule.c"
        __label__ = 58; break; //@line 1255 "mmapmodule.c"
      case 57: // $bb49
        var $189=HEAP[$access]; //@line 1257 "mmapmodule.c"
        var $190=$m_obj; //@line 1257 "mmapmodule.c"
        var $191=$190+32; //@line 1257 "mmapmodule.c"
        HEAP[$191]=$189; //@line 1257 "mmapmodule.c"
        var $192=$m_obj; //@line 1258 "mmapmodule.c"
        var $193=$192; //@line 1258 "mmapmodule.c"
        $1=$193; //@line 1258 "mmapmodule.c"
        __label__ = 58; break; //@line 1258 "mmapmodule.c"
      case 58: // $bb50
        var $194=$1; //@line 1132 "mmapmodule.c"
        $retval=$194; //@line 1132 "mmapmodule.c"
        var $retval51=$retval; //@line 1132 "mmapmodule.c"
        STACKTOP = __stackBase__;
        return $retval51; //@line 1132 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _setint($d, $name, $value) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $d_addr;
        var $name_addr;
        var $value_addr;
        var $o;
        $d_addr=$d;
        $name_addr=$name;
        $value_addr=$value;
        var $0=$value_addr; //@line 1459 "mmapmodule.c"
        var $1=_PyInt_FromLong($0); //@line 1459 "mmapmodule.c"
        $o=$1; //@line 1459 "mmapmodule.c"
        var $2=$o; //@line 1460 "mmapmodule.c"
        var $3=($2)!=0; //@line 1460 "mmapmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1460 "mmapmodule.c"
      case 1: // $bb
        var $4=$d_addr; //@line 1460 "mmapmodule.c"
        var $5=$name_addr; //@line 1460 "mmapmodule.c"
        var $6=$o; //@line 1460 "mmapmodule.c"
        var $7=_PyDict_SetItemString($4, $5, $6); //@line 1460 "mmapmodule.c"
        var $8=($7)==0; //@line 1460 "mmapmodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 1460 "mmapmodule.c"
      case 2: // $bb1
        var $9=$o; //@line 1461 "mmapmodule.c"
        var $10=$9; //@line 1461 "mmapmodule.c"
        var $11=HEAP[$10]; //@line 1461 "mmapmodule.c"
        var $12=($11) - 1; //@line 1461 "mmapmodule.c"
        var $13=$o; //@line 1461 "mmapmodule.c"
        var $14=$13; //@line 1461 "mmapmodule.c"
        HEAP[$14]=$12; //@line 1461 "mmapmodule.c"
        var $15=$o; //@line 1461 "mmapmodule.c"
        var $16=$15; //@line 1461 "mmapmodule.c"
        var $17=HEAP[$16]; //@line 1461 "mmapmodule.c"
        var $18=($17)==0; //@line 1461 "mmapmodule.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1461 "mmapmodule.c"
      case 3: // $bb2
        var $19=$o; //@line 1461 "mmapmodule.c"
        var $20=$19+4; //@line 1461 "mmapmodule.c"
        var $21=HEAP[$20]; //@line 1461 "mmapmodule.c"
        var $22=$21+24; //@line 1461 "mmapmodule.c"
        var $23=HEAP[$22]; //@line 1461 "mmapmodule.c"
        var $24=$o; //@line 1461 "mmapmodule.c"
        FUNCTION_TABLE[$23]($24); //@line 1461 "mmapmodule.c"
        __label__ = 4; break; //@line 1461 "mmapmodule.c"
      case 4: // $return
        ;
        return; //@line 1463 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initmmap() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval_i1;
        var $0;
        var $retval_i;
        var $1;
        var $dict;
        var $module;
        var $2=_PyType_Ready(_mmap_object_type); //@line 1470 "mmapmodule.c"
        var $3=($2) < 0; //@line 1470 "mmapmodule.c"
        if ($3) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1470 "mmapmodule.c"
      case 1: // $bb
        var $4=_Py_InitModule4(__str66, 0, 0, 0, 1013); //@line 1473 "mmapmodule.c"
        $module=$4; //@line 1473 "mmapmodule.c"
        var $5=$module; //@line 1474 "mmapmodule.c"
        var $6=($5)==0; //@line 1474 "mmapmodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 1474 "mmapmodule.c"
      case 2: // $bb1
        var $7=$module; //@line 1476 "mmapmodule.c"
        var $8=_PyModule_GetDict($7); //@line 1476 "mmapmodule.c"
        $dict=$8; //@line 1476 "mmapmodule.c"
        var $9=$dict; //@line 1477 "mmapmodule.c"
        var $10=($9)==0; //@line 1477 "mmapmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1477 "mmapmodule.c"
      case 3: // $bb2
        var $11=HEAP[_PyExc_EnvironmentError]; //@line 1479 "mmapmodule.c"
        var $12=_PyErr_NewException(__str67, $11, 0); //@line 1479 "mmapmodule.c"
        HEAP[_mmap_module_error]=$12; //@line 1479 "mmapmodule.c"
        var $13=HEAP[_mmap_module_error]; //@line 1481 "mmapmodule.c"
        var $14=($13)==0; //@line 1481 "mmapmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1481 "mmapmodule.c"
      case 4: // $bb3
        var $15=HEAP[_mmap_module_error]; //@line 1483 "mmapmodule.c"
        var $16=$dict; //@line 1483 "mmapmodule.c"
        var $17=_PyDict_SetItemString($16, __str68, $15); //@line 1483 "mmapmodule.c"
        var $18=$dict; //@line 1484 "mmapmodule.c"
        var $19=_PyDict_SetItemString($18, __str66, _mmap_object_type); //@line 1484 "mmapmodule.c"
        var $20=$dict; //@line 1486 "mmapmodule.c"
        _setint($20, __str69, 4); //@line 1486 "mmapmodule.c"
        var $21=$dict; //@line 1489 "mmapmodule.c"
        _setint($21, __str70, 1); //@line 1489 "mmapmodule.c"
        var $22=$dict; //@line 1492 "mmapmodule.c"
        _setint($22, __str71, 2); //@line 1492 "mmapmodule.c"
        var $23=$dict; //@line 1496 "mmapmodule.c"
        _setint($23, __str72, 1); //@line 1496 "mmapmodule.c"
        var $24=$dict; //@line 1499 "mmapmodule.c"
        _setint($24, __str73, 2); //@line 1499 "mmapmodule.c"
        var $25=$dict; //@line 1502 "mmapmodule.c"
        _setint($25, __str74, 2048); //@line 1502 "mmapmodule.c"
        var $26=$dict; //@line 1505 "mmapmodule.c"
        _setint($26, __str75, 4096); //@line 1505 "mmapmodule.c"
        var $27=$dict; //@line 1508 "mmapmodule.c"
        _setint($27, __str76, 32); //@line 1508 "mmapmodule.c"
        var $28=$dict; //@line 1509 "mmapmodule.c"
        _setint($28, __str77, 32); //@line 1509 "mmapmodule.c"
        var $29=_sysconf(30); //@line 60 "mmapmodule.c"
        $1=$29; //@line 60 "mmapmodule.c"
        var $30=$1; //@line 60 "mmapmodule.c"
        $retval_i=$30; //@line 60 "mmapmodule.c"
        var $retval1_i=$retval_i; //@line 60 "mmapmodule.c"
        var $31=$dict; //@line 1512 "mmapmodule.c"
        _setint($31, __str78, $retval1_i); //@line 1512 "mmapmodule.c"
        var $32=_sysconf(30); //@line 60 "mmapmodule.c"
        $0=$32; //@line 60 "mmapmodule.c"
        var $33=$0; //@line 60 "mmapmodule.c"
        $retval_i1=$33; //@line 60 "mmapmodule.c"
        var $retval1_i2=$retval_i1; //@line 60 "mmapmodule.c"
        var $34=$dict; //@line 1514 "mmapmodule.c"
        _setint($34, __str79, $retval1_i2); //@line 1514 "mmapmodule.c"
        var $35=$dict; //@line 1516 "mmapmodule.c"
        _setint($35, __str80, 1); //@line 1516 "mmapmodule.c"
        var $36=$dict; //@line 1517 "mmapmodule.c"
        _setint($36, __str81, 2); //@line 1517 "mmapmodule.c"
        var $37=$dict; //@line 1518 "mmapmodule.c"
        _setint($37, __str82, 3); //@line 1518 "mmapmodule.c"
        __label__ = 5; break; //@line 1518 "mmapmodule.c"
      case 5: // $return
        ;
        return; //@line 1471 "mmapmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initmmap"] = _initmmap;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_mmap_close_method,0,_mmap_find_method,0,_mmap_rfind_method,0,_mmap_flush_method,0,_mmap_move_method,0,_mmap_read_method,0,_mmap_read_byte_method,0,_mmap_read_line_method,0,_mmap_resize_method,0,_mmap_seek_method,0,_mmap_size_method,0,_mmap_tell_method,0,_mmap_write_method,0,_mmap_write_byte_method,0,_mmap_length,0,_mmap_concat,0,_mmap_repeat,0,_mmap_item,0,_mmap_slice,0,_mmap_ass_item,0,_mmap_ass_slice,0,_mmap_subscript,0,_mmap_ass_subscript,0,_mmap_buffer_getreadbuf,0,_mmap_buffer_getwritebuf,0,_mmap_buffer_getsegcount,0,_mmap_buffer_getcharbuffer,0,_mmap_object_dealloc,0,_PyObject_GenericGetAttr,0,_PyType_GenericAlloc,0,_new_mmap_object,0,_PyObject_Free,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([109,109,97,112,32,99,108,111,115,101,100,32,111,114,32,105,110,118,97,108,105,100,0] /* mmap closed or inval */, "i8", ALLOC_NORMAL);
__str1=allocate([99,0] /* c\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([114,101,97,100,32,98,121,116,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* read byte out of ran */, "i8", ALLOC_NORMAL);
__str3=allocate([110,58,114,101,97,100,0] /* n:read\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([115,101,108,102,45,62,115,105,122,101,32,62,61,32,115,101,108,102,45,62,112,111,115,0] /* self->size >= self-> */, "i8", ALLOC_NORMAL);
__str5=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,109,109,97,112,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/m */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8493=allocate([109,109,97,112,95,114,101,97,100,95,109,101,116,104,111,100,0] /* mmap_read_method\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([115,35,0] /* s#\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([115,35,124,110,110,58,114,102,105,110,100,0] /* s#|nn:rfind\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([115,35,124,110,110,58,102,105,110,100,0] /* s#|nn:find\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([109,109,97,112,32,99,97,110,39,116,32,109,111,100,105,102,121,32,97,32,114,101,97,100,111,110,108,121,32,109,101,109,111,114,121,32,109,97,112,46,0] /* mmap can't modify a  */, "i8", ALLOC_NORMAL);
__str10=allocate([109,109,97,112,32,99,97,110,39,116,32,114,101,115,105,122,101,32,97,32,114,101,97,100,111,110,108,121,32,111,114,32,99,111,112,121,45,111,110,45,119,114,105,116,101,32,109,101,109,111,114,121,32,109,97,112,46,0] /* mmap can't resize a  */, "i8", ALLOC_NORMAL);
__str11=allocate([115,35,58,119,114,105,116,101,0] /* s#:write\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([100,97,116,97,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* data out of range\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([99,58,119,114,105,116,101,95,98,121,116,101,0] /* c:write_byte\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([119,114,105,116,101,32,98,121,116,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* write byte out of ra */, "i8", ALLOC_NORMAL);
_mmap_module_error=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str15=allocate([110,58,114,101,115,105,122,101,0] /* n:resize\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([124,110,110,58,102,108,117,115,104,0] /* |nn:flush\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([102,108,117,115,104,32,118,97,108,117,101,115,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* flush values out of  */, "i8", ALLOC_NORMAL);
__str18=allocate([110,124,105,58,115,101,101,107,0] /* n|i:seek\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([117,110,107,110,111,119,110,32,115,101,101,107,32,116,121,112,101,0] /* unknown seek type\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([115,101,101,107,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* seek out of range\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([107,107,107,58,109,111,118,101,0] /* kkk:move\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([115,111,117,114,99,101,44,32,100,101,115,116,105,110,97,116,105,111,110,44,32,111,114,32,99,111,117,110,116,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* source, destination, */, "i8", ALLOC_NORMAL);
__str23=allocate([99,108,111,115,101,0] /* close\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([102,105,110,100,0] /* find\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([114,102,105,110,100,0] /* rfind\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([102,108,117,115,104,0] /* flush\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([109,111,118,101,0] /* move\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([114,101,97,100,0] /* read\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([114,101,97,100,95,98,121,116,101,0] /* read_byte\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([114,101,97,100,108,105,110,101,0] /* readline\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([114,101,115,105,122,101,0] /* resize\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([115,101,101,107,0] /* seek\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([115,105,122,101,0] /* size\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([116,101,108,108,0] /* tell\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([119,114,105,116,101,0] /* write\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([119,114,105,116,101,95,98,121,116,101,0] /* write_byte\00 */, "i8", ALLOC_NORMAL);
_mmap_object_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str37=allocate([65,99,99,101,115,115,105,110,103,32,110,111,110,45,101,120,105,115,116,101,110,116,32,109,109,97,112,32,115,101,103,109,101,110,116,0] /* Accessing non-existe */, "i8", ALLOC_NORMAL);
__str38=allocate([97,99,99,101,115,115,105,110,103,32,110,111,110,45,101,120,105,115,116,101,110,116,32,98,117,102,102,101,114,32,115,101,103,109,101,110,116,0] /* accessing non-existe */, "i8", ALLOC_NORMAL);
__str39=allocate([109,109,97,112,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* mmap index out of ra */, "i8", ALLOC_NORMAL);
__str40=allocate(1, "i8", ALLOC_NORMAL);
__str41=allocate([109,109,97,112,32,105,110,100,105,99,101,115,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,115,0] /* mmap indices must be */, "i8", ALLOC_NORMAL);
__str42=allocate([109,109,97,112,115,32,100,111,110,39,116,32,115,117,112,112,111,114,116,32,99,111,110,99,97,116,101,110,97,116,105,111,110,0] /* mmaps don't support  */, "i8", ALLOC_NORMAL);
__str43=allocate([109,109,97,112,115,32,100,111,110,39,116,32,115,117,112,112,111,114,116,32,114,101,112,101,97,116,32,111,112,101,114,97,116,105,111,110,0] /* mmaps don't support  */, "i8", ALLOC_NORMAL);
__str44=allocate([109,109,97,112,32,111,98,106,101,99,116,32,100,111,101,115,110,39,116,32,115,117,112,112,111,114,116,32,115,108,105,99,101,32,100,101,108,101,116,105,111,110,0] /* mmap object doesn't  */, "i8", ALLOC_NORMAL);
__str45=allocate([109,109,97,112,32,115,108,105,99,101,32,97,115,115,105,103,110,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0] /* mmap slice assignmen */, "i8", ALLOC_NORMAL);
__str46=allocate([109,109,97,112,32,115,108,105,99,101,32,97,115,115,105,103,110,109,101,110,116,32,105,115,32,119,114,111,110,103,32,115,105,122,101,0] /* mmap slice assignmen */, "i8", ALLOC_NORMAL);
__str47=allocate([109,109,97,112,32,111,98,106,101,99,116,32,100,111,101,115,110,39,116,32,115,117,112,112,111,114,116,32,105,116,101,109,32,100,101,108,101,116,105,111,110,0] /* mmap object doesn't  */, "i8", ALLOC_NORMAL);
__str48=allocate([109,109,97,112,32,97,115,115,105,103,110,109,101,110,116,32,109,117,115,116,32,98,101,32,115,105,110,103,108,101,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,0] /* mmap assignment must */, "i8", ALLOC_NORMAL);
__str49=allocate([109,109,97,112,32,105,110,100,105,99,101,115,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0] /* mmap indices must be */, "i8", ALLOC_NORMAL);
_mmap_as_sequence=allocate(40, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32, i32)*",0,0,0,"i32 (%struct.PyObject*, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_mmap_as_mapping=allocate(12, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0], ALLOC_NORMAL);
_mmap_as_buffer=allocate(24, ["i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i32 (%struct.PyObject*, i32*)*",0,0,0,"i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_mmap_doc=allocate([87,105,110,100,111,119,115,58,32,109,109,97,112,40,102,105,108,101,110,111,44,32,108,101,110,103,116,104,91,44,32,116,97,103,110,97,109,101,91,44,32,97,99,99,101,115,115,91,44,32,111,102,102,115,101,116,93,93,93,41,10,10,77,97,112,115,32,108,101,110,103,116,104,32,98,121,116,101,115,32,102,114,111,109,32,116,104,101,32,102,105,108,101,32,115,112,101,99,105,102,105,101,100,32,98,121,32,116,104,101,32,102,105,108,101,32,104,97,110,100,108,101,32,102,105,108,101,110,111,44,10,97,110,100,32,114,101,116,117,114,110,115,32,97,32,109,109,97,112,32,111,98,106,101,99,116,46,32,32,73,102,32,108,101,110,103,116,104,32,105,115,32,108,97,114,103,101,114,32,116,104,97,110,32,116,104,101,32,99,117,114,114,101,110,116,32,115,105,122,101,10,111,102,32,116,104,101,32,102,105,108,101,44,32,116,104,101,32,102,105,108,101,32,105,115,32,101,120,116,101,110,100,101,100,32,116,111,32,99,111,110,116,97,105,110,32,108,101,110,103,116,104,32,98,121,116,101,115,46,32,32,73,102,32,108,101,110,103,116,104,10,105,115,32,48,44,32,116,104,101,32,109,97,120,105,109,117,109,32,108,101,110,103,116,104,32,111,102,32,116,104,101,32,109,97,112,32,105,115,32,116,104,101,32,99,117,114,114,101,110,116,32,115,105,122,101,32,111,102,32,116,104,101,32,102,105,108,101,44,10,101,120,99,101,112,116,32,116,104,97,116,32,105,102,32,116,104,101,32,102,105,108,101,32,105,115,32,101,109,112,116,121,32,87,105,110,100,111,119,115,32,114,97,105,115,101,115,32,97,110,32,101,120,99,101,112,116,105,111,110,32,40,121,111,117,32,99,97,110,110,111,116,10,99,114,101,97,116,101,32,97,110,32,101,109,112,116,121,32,109,97,112,112,105,110,103,32,111,110,32,87,105,110,100,111,119,115,41,46,10,10,85,110,105,120,58,32,109,109,97,112,40,102,105,108,101,110,111,44,32,108,101,110,103,116,104,91,44,32,102,108,97,103,115,91,44,32,112,114,111,116,91,44,32,97,99,99,101,115,115,91,44,32,111,102,102,115,101,116,93,93,93,93,41,10,10,77,97,112,115,32,108,101,110,103,116,104,32,98,121,116,101,115,32,102,114,111,109,32,116,104,101,32,102,105,108,101,32,115,112,101,99,105,102,105,101,100,32,98,121,32,116,104,101,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,105,108,101,110,111,44,10,97,110,100,32,114,101,116,117,114,110,115,32,97,32,109,109,97,112,32,111,98,106,101,99,116,46,32,32,73,102,32,108,101,110,103,116,104,32,105,115,32,48,44,32,116,104,101,32,109,97,120,105,109,117,109,32,108,101,110,103,116,104,32,111,102,32,116,104,101,32,109,97,112,10,119,105,108,108,32,98,101,32,116,104,101,32,99,117,114,114,101,110,116,32,115,105,122,101,32,111,102,32,116,104,101,32,102,105,108,101,32,119,104,101,110,32,109,109,97,112,32,105,115,32,99,97,108,108,101,100,46,10,102,108,97,103,115,32,115,112,101,99,105,102,105,101,115,32,116,104,101,32,110,97,116,117,114,101,32,111,102,32,116,104,101,32,109,97,112,112,105,110,103,46,32,77,65,80,95,80,82,73,86,65,84,69,32,99,114,101,97,116,101,115,32,97,10,112,114,105,118,97,116,101,32,99,111,112,121,45,111,110,45,119,114,105,116,101,32,109,97,112,112,105,110,103,44,32,115,111,32,99,104,97,110,103,101,115,32,116,111,32,116,104,101,32,99,111,110,116,101,110,116,115,32,111,102,32,116,104,101,32,109,109,97,112,10,111,98,106,101,99,116,32,119,105,108,108,32,98,101,32,112,114,105,118,97,116,101,32,116,111,32,116,104,105,115,32,112,114,111,99,101,115,115,44,32,97,110,100,32,77,65,80,95,83,72,65,82,69,68,32,99,114,101,97,116,101,115,32,97,32,109,97,112,112,105,110,103,10,116,104,97,116,39,115,32,115,104,97,114,101,100,32,119,105,116,104,32,97,108,108,32,111,116,104,101,114,32,112,114,111,99,101,115,115,101,115,32,109,97,112,112,105,110,103,32,116,104,101,32,115,97,109,101,32,97,114,101,97,115,32,111,102,32,116,104,101,32,102,105,108,101,46,10,84,104,101,32,100,101,102,97,117,108,116,32,118,97,108,117,101,32,105,115,32,77,65,80,95,83,72,65,82,69,68,46,10,10,84,111,32,109,97,112,32,97,110,111,110,121,109,111,117,115,32,109,101,109,111,114,121,44,32,112,97,115,115,32,45,49,32,97,115,32,116,104,101,32,102,105,108,101,110,111,32,40,98,111,116,104,32,118,101,114,115,105,111,110,115,41,46,0] /* Windows: mmap(fileno */, "i8", ALLOC_NORMAL);
__str50=allocate([109,109,97,112,46,109,109,97,112,0] /* mmap.mmap\00 */, "i8", ALLOC_NORMAL);
_mmap_object_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str51=allocate([109,101,109,111,114,121,32,109,97,112,112,101,100,32,37,115,32,109,117,115,116,32,98,101,32,112,111,115,105,116,105,118,101,0] /* memory mapped %s mus */, "i8", ALLOC_NORMAL);
__str52=allocate([109,97,112,32,115,105,122,101,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,0] /* map size must be an  */, "i8", ALLOC_NORMAL);
__str53=allocate([105,79,124,105,105,105,76,0] /* iO|iiiL\00 */, "i8", ALLOC_NORMAL);
_keywords_9448=allocate(28, "i8*", ALLOC_NORMAL);
__str54=allocate([102,105,108,101,110,111,0] /* fileno\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([108,101,110,103,116,104,0] /* length\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([102,108,97,103,115,0] /* flags\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([112,114,111,116,0] /* prot\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([97,99,99,101,115,115,0] /* access\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([111,102,102,115,101,116,0] /* offset\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([109,101,109,111,114,121,32,109,97,112,112,101,100,32,111,102,102,115,101,116,32,109,117,115,116,32,98,101,32,112,111,115,105,116,105,118,101,0] /* memory mapped offset */, "i8", ALLOC_NORMAL);
__str61=allocate([109,109,97,112,32,99,97,110,39,116,32,115,112,101,99,105,102,121,32,98,111,116,104,32,97,99,99,101,115,115,32,97,110,100,32,102,108,97,103,115,44,32,112,114,111,116,46,0] /* mmap can't specify b */, "i8", ALLOC_NORMAL);
__str62=allocate([109,109,97,112,32,105,110,118,97,108,105,100,32,97,99,99,101,115,115,32,112,97,114,97,109,101,116,101,114,46,0] /* mmap invalid access  */, "i8", ALLOC_NORMAL);
__str63=allocate([109,109,97,112,32,111,102,102,115,101,116,32,105,115,32,103,114,101,97,116,101,114,32,116,104,97,110,32,102,105,108,101,32,115,105,122,101,0] /* mmap offset is great */, "i8", ALLOC_NORMAL);
__str64=allocate([109,109,97,112,32,108,101,110,103,116,104,32,105,115,32,116,111,111,32,108,97,114,103,101,0] /* mmap length is too l */, "i8", ALLOC_NORMAL);
__str65=allocate([109,109,97,112,32,108,101,110,103,116,104,32,105,115,32,103,114,101,97,116,101,114,32,116,104,97,110,32,102,105,108,101,32,115,105,122,101,0] /* mmap length is great */, "i8", ALLOC_NORMAL);
__str66=allocate([109,109,97,112,0] /* mmap\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([109,109,97,112,46,101,114,114,111,114,0] /* mmap.error\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([80,82,79,84,95,69,88,69,67,0] /* PROT_EXEC\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([80,82,79,84,95,82,69,65,68,0] /* PROT_READ\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([80,82,79,84,95,87,82,73,84,69,0] /* PROT_WRITE\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([77,65,80,95,83,72,65,82,69,68,0] /* MAP_SHARED\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([77,65,80,95,80,82,73,86,65,84,69,0] /* MAP_PRIVATE\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([77,65,80,95,68,69,78,89,87,82,73,84,69,0] /* MAP_DENYWRITE\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([77,65,80,95,69,88,69,67,85,84,65,66,76,69,0] /* MAP_EXECUTABLE\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([77,65,80,95,65,78,79,78,0] /* MAP_ANON\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([77,65,80,95,65,78,79,78,89,77,79,85,83,0] /* MAP_ANONYMOUS\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([80,65,71,69,83,73,90,69,0] /* PAGESIZE\00 */, "i8", ALLOC_NORMAL);
__str79=allocate([65,76,76,79,67,65,84,73,79,78,71,82,65,78,85,76,65,82,73,84,89,0] /* ALLOCATIONGRANULARIT */, "i8", ALLOC_NORMAL);
__str80=allocate([65,67,67,69,83,83,95,82,69,65,68,0] /* ACCESS_READ\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([65,67,67,69,83,83,95,87,82,73,84,69,0] /* ACCESS_WRITE\00 */, "i8", ALLOC_NORMAL);
__str82=allocate([65,67,67,69,83,83,95,67,79,80,89,0] /* ACCESS_COPY\00 */, "i8", ALLOC_NORMAL);
HEAP[_mmap_object_methods]=__str23;
HEAP[_mmap_object_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_mmap_object_methods+16]=__str24;
HEAP[_mmap_object_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_mmap_object_methods+32]=__str25;
HEAP[_mmap_object_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_mmap_object_methods+48]=__str26;
HEAP[_mmap_object_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_mmap_object_methods+64]=__str27;
HEAP[_mmap_object_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_mmap_object_methods+80]=__str28;
HEAP[_mmap_object_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_mmap_object_methods+96]=__str29;
HEAP[_mmap_object_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_mmap_object_methods+112]=__str30;
HEAP[_mmap_object_methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_mmap_object_methods+128]=__str31;
HEAP[_mmap_object_methods+132]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_mmap_object_methods+144]=__str32;
HEAP[_mmap_object_methods+148]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_mmap_object_methods+160]=__str33;
HEAP[_mmap_object_methods+164]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_mmap_object_methods+176]=__str34;
HEAP[_mmap_object_methods+180]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_mmap_object_methods+192]=__str35;
HEAP[_mmap_object_methods+196]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_mmap_object_methods+208]=__str36;
HEAP[_mmap_object_methods+212]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_mmap_as_sequence]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_mmap_as_sequence+4]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_mmap_as_sequence+8]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_mmap_as_sequence+12]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_mmap_as_sequence+16]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_mmap_as_sequence+20]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_mmap_as_sequence+24]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_mmap_as_mapping]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_mmap_as_mapping+4]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_mmap_as_mapping+8]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_mmap_as_buffer]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_mmap_as_buffer+4]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_mmap_as_buffer+8]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_mmap_as_buffer+12]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_mmap_object_type+12]=__str50;
HEAP[_mmap_object_type+24]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_mmap_object_type+52]=_mmap_as_sequence;
HEAP[_mmap_object_type+56]=_mmap_as_mapping;
HEAP[_mmap_object_type+72]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_mmap_object_type+80]=_mmap_as_buffer;
HEAP[_mmap_object_type+88]=_mmap_doc;
HEAP[_mmap_object_type+116]=_mmap_object_methods;
HEAP[_mmap_object_type+152]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_mmap_object_type+156]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_mmap_object_type+160]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_keywords_9448]=__str54;
HEAP[_keywords_9448+4]=__str55;
HEAP[_keywords_9448+8]=__str56;
HEAP[_keywords_9448+12]=__str57;
HEAP[_keywords_9448+16]=__str58;
HEAP[_keywords_9448+20]=__str59;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

