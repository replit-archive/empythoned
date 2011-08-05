// Warning: Cannot correct overflows of this many bits: 64 at line 124
// Warning: Cannot correct overflows of this many bits: 64 at line 128
// Warning: Cannot correct overflows of this many bits: 64 at line 1151
// Warning: Cannot correct overflows of this many bits: 64 at line 1157
// Warning: Cannot correct overflows of this many bits: 64 at line 1175
// Warning: Cannot correct overflows of this many bits: 64 at line 1205
// Warning: Cannot correct overflows of this many bits: 64 at line 1226
// Warning: Cannot correct overflows of this many bits: 64 at line 1288
// Warning: Cannot correct overflows of this many bits: 64 at line 1309
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



var $0___SIZE = 56; // %0
  
var $1___SIZE = 8; // %1
  
var $2___SIZE = 48; // %2
  
var $3___SIZE = 80; // %3
  
var $4___SIZE = 16; // %4
  
var $5___SIZE = 196; // %5
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_ProfilerContext___SIZE = 24; // %struct.ProfilerContext
  var $struct_ProfilerContext___FLATTENER = [0,8,16,20];
var $struct_ProfilerEntry___SIZE = 48; // %struct.ProfilerEntry
  var $struct_ProfilerEntry___FLATTENER = [0,12,16,24,32,36,40,44];
var $struct_ProfilerObject___SIZE = 36; // %struct.ProfilerObject
  
var $struct_ProfilerSubEntry___SIZE = 40; // %struct.ProfilerSubEntry
  var $struct_ProfilerSubEntry___FLATTENER = [0,12,20,28,32,36];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyCFunctionObject___SIZE = 20; // %struct.PyCFunctionObject
  
var $struct_PyCodeObject___SIZE = 72; // %struct.PyCodeObject
  
var $struct_PyFrameObject___SIZE = 316; // %struct.PyFrameObject
  var $struct_PyFrameObject___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,312];
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyInterpreterState___SIZE = 40; // %struct.PyInterpreterState
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyStructSequence_Desc___SIZE = 16; // %struct.PyStructSequence_Desc
  
var $struct_PyStructSequence_Field___SIZE = 8; // %struct.PyStructSequence_Field
  
var $struct_PyThreadState___SIZE = 84; // %struct.PyThreadState
  
var $struct_PyTryBlock___SIZE = 12; // %struct.PyTryBlock
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_rotating_node_t___SIZE = 12; // %struct.rotating_node_t
  
var $struct_statscollector_t___SIZE = 16; // %struct.statscollector_t
  
var $struct_timeval___SIZE = 8; // %struct.timeval
  
var $struct_timezone___SIZE = 8; // %struct.timezone
  
var _empty_tuple;
var _PyCFunction_Type;
var _PyModule_Type;
var __str;
var __str1;
var __str2;
var __str3;
var _PyExc_MemoryError;
var __str4;
var __str5;
var __str6;
var __str7;
var __str8;
var __str9;
var __str10;
var __str11;
var __str12;
var __str13;
var __str14;
var __str15;
var __str16;
var _profiler_entry_fields;
var __str17;
var __str18;
var __str19;
var __str20;
var __str21;
var _profiler_subentry_fields;
var _profiler_entry_desc;
var __str22;
var _profiler_subentry_desc;
var __str23;
var _StatsSubEntryType;
var __str24;
var __Py_NoneStruct;
var _StatsEntryType;
var __str25;
var _getstats_doc;
var _enable_doc;
var __str26;
var _kwlist_9138;
var __str27;
var __str28;
var _disable_doc;
var _clear_doc;
var __str29;
var _kwlist_9228;
var __str30;
var __str31;
var __str32;
var __str33;
var __str34;
var __str35;
var _profiler_methods;
var _profiler_doc;
var __str36;
var _PyProfiler_Type;
var _moduleMethods;
var __str37;
var __str38;
var __str39;
var _initialized;
var __str40;
var __str41;
var _random_value;
var _random_stream;







































  function _hpTimer() {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+8;
        var $tv=__stackBase__+16;
        var $ret=__stackBase__+24;
        var $_alloca_point_=0;
        var $1=_gettimeofday($tv, 0); //@line 56 "_lsprof.c"
        var $2=(($tv)&4294967295); //@line 58 "_lsprof.c"
        var $3=HEAP[$2]; //@line 58 "_lsprof.c"
        var $4=((($3))|0); //@line 58 "_lsprof.c"
        HEAP[$ret]=$4; //@line 58 "_lsprof.c"
        var $5=HEAP[$ret]; //@line 59 "_lsprof.c"
        var $6=($5) * 1000000; //@line 59 "_lsprof.c"
        var $7=(($tv+4)&4294967295); //@line 59 "_lsprof.c"
        var $8=HEAP[$7]; //@line 59 "_lsprof.c"
        var $9=((($8))|0); //@line 59 "_lsprof.c"
        var $10=($6) + ($9); //@line 59 "_lsprof.c"
        HEAP[$ret]=$10; //@line 59 "_lsprof.c"
        var $11=HEAP[$ret]; //@line 60 "_lsprof.c"
        HEAP[$0]=$11; //@line 60 "_lsprof.c"
        var $12=HEAP[$0]; //@line 60 "_lsprof.c"
        HEAP[$retval]=$12; //@line 60 "_lsprof.c"
        __label__ = 1; break; //@line 60 "_lsprof.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 60 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 60 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _hpTimerUnit() {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$0]=0.000001; //@line 66 "_lsprof.c"
        var $1=HEAP[$0]; //@line 66 "_lsprof.c"
        HEAP[$retval]=$1; //@line 66 "_lsprof.c"
        __label__ = 1; break; //@line 66 "_lsprof.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 66 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 66 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _CallExternalTimer($pObj) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+12;
        var $result=__stackBase__+20;
        var $o=__stackBase__+28;
        var $val=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        var $1=HEAP[_empty_tuple]; //@line 133 "_lsprof.c"
        var $2=HEAP[$pObj_addr]; //@line 133 "_lsprof.c"
        var $3=(($2+24)&4294967295); //@line 133 "_lsprof.c"
        var $4=HEAP[$3]; //@line 133 "_lsprof.c"
        var $5=_PyObject_Call($4, $1, 0); //@line 133 "_lsprof.c"
        HEAP[$o]=$5; //@line 133 "_lsprof.c"
        var $6=HEAP[$o]; //@line 134 "_lsprof.c"
        var $7=($6)==0; //@line 134 "_lsprof.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 134 "_lsprof.c"
      case 1: // $bb
        var $8=HEAP[$pObj_addr]; //@line 135 "_lsprof.c"
        var $9=(($8+24)&4294967295); //@line 135 "_lsprof.c"
        var $10=HEAP[$9]; //@line 135 "_lsprof.c"
        _PyErr_WriteUnraisable($10); //@line 135 "_lsprof.c"
        HEAP[$0]=0; //@line 136 "_lsprof.c"
        __label__ = 10; break; //@line 136 "_lsprof.c"
      case 2: // $bb1
        var $11=HEAP[$pObj_addr]; //@line 138 "_lsprof.c"
        var $12=(($11+28)&4294967295); //@line 138 "_lsprof.c"
        var $13=HEAP[$12]; //@line 138 "_lsprof.c"
        var $14=($13) > 0; //@line 138 "_lsprof.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 138 "_lsprof.c"
      case 3: // $bb2
        var $15=HEAP[$o]; //@line 141 "_lsprof.c"
        var $16=_PyLong_AsLongLong($15); //@line 141 "_lsprof.c"
        HEAP[$result]=$16; //@line 141 "_lsprof.c"
        __label__ = 5; break; //@line 141 "_lsprof.c"
      case 4: // $bb3
        var $17=HEAP[$o]; //@line 147 "_lsprof.c"
        var $18=_PyFloat_AsDouble($17); //@line 147 "_lsprof.c"
        HEAP[$val]=$18; //@line 147 "_lsprof.c"
        var $19=HEAP[$val]; //@line 149 "_lsprof.c"
        var $20=($19) * 4294967296; //@line 149 "_lsprof.c"
        var $21=cRound(($20)); //@line 149 "_lsprof.c"
        HEAP[$result]=$21; //@line 149 "_lsprof.c"
        __label__ = 5; break; //@line 149 "_lsprof.c"
      case 5: // $bb4
        var $22=HEAP[$o]; //@line 151 "_lsprof.c"
        var $23=(($22)&4294967295); //@line 151 "_lsprof.c"
        var $24=HEAP[$23]; //@line 151 "_lsprof.c"
        var $25=((($24) - 1)&4294967295); //@line 151 "_lsprof.c"
        var $26=HEAP[$o]; //@line 151 "_lsprof.c"
        var $27=(($26)&4294967295); //@line 151 "_lsprof.c"
        HEAP[$27]=$25; //@line 151 "_lsprof.c"
        var $28=HEAP[$o]; //@line 151 "_lsprof.c"
        var $29=(($28)&4294967295); //@line 151 "_lsprof.c"
        var $30=HEAP[$29]; //@line 151 "_lsprof.c"
        var $31=((($30))|0)==0; //@line 151 "_lsprof.c"
        if ($31) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 151 "_lsprof.c"
      case 6: // $bb5
        var $32=HEAP[$o]; //@line 151 "_lsprof.c"
        var $33=(($32+4)&4294967295); //@line 151 "_lsprof.c"
        var $34=HEAP[$33]; //@line 151 "_lsprof.c"
        var $35=(($34+24)&4294967295); //@line 151 "_lsprof.c"
        var $36=HEAP[$35]; //@line 151 "_lsprof.c"
        var $37=HEAP[$o]; //@line 151 "_lsprof.c"
        FUNCTION_TABLE[$36]($37); //@line 151 "_lsprof.c"
        __label__ = 7; break; //@line 151 "_lsprof.c"
      case 7: // $bb6
        var $38=_PyErr_Occurred(); //@line 152 "_lsprof.c"
        var $39=($38)!=0; //@line 152 "_lsprof.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 152 "_lsprof.c"
      case 8: // $bb7
        var $40=HEAP[$pObj_addr]; //@line 153 "_lsprof.c"
        var $41=(($40+24)&4294967295); //@line 153 "_lsprof.c"
        var $42=HEAP[$41]; //@line 153 "_lsprof.c"
        _PyErr_WriteUnraisable($42); //@line 153 "_lsprof.c"
        HEAP[$0]=0; //@line 154 "_lsprof.c"
        __label__ = 10; break; //@line 154 "_lsprof.c"
      case 9: // $bb8
        var $43=HEAP[$result]; //@line 156 "_lsprof.c"
        HEAP[$0]=$43; //@line 156 "_lsprof.c"
        __label__ = 10; break; //@line 156 "_lsprof.c"
      case 10: // $bb9
        var $44=HEAP[$0]; //@line 136 "_lsprof.c"
        HEAP[$retval]=$44; //@line 136 "_lsprof.c"
        __label__ = 11; break; //@line 136 "_lsprof.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 136 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 136 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _normalizeUserObj($obj) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $obj_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $fn=__stackBase__+12;
        var $mod=__stackBase__+16;
        var $modname=__stackBase__+20;
        var $self=__stackBase__+24;
        var $name=__stackBase__+28;
        var $mo=__stackBase__+32;
        var $res=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$obj_addr]=$obj;
        var $1=HEAP[$obj_addr]; //@line 169 "_lsprof.c"
        var $2=(($1+4)&4294967295); //@line 169 "_lsprof.c"
        var $3=HEAP[$2]; //@line 169 "_lsprof.c"
        var $4=($3)!=(_PyCFunction_Type); //@line 169 "_lsprof.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 169 "_lsprof.c"
      case 1: // $bb
        var $5=HEAP[$obj_addr]; //@line 170 "_lsprof.c"
        var $6=(($5)&4294967295); //@line 170 "_lsprof.c"
        var $7=HEAP[$6]; //@line 170 "_lsprof.c"
        var $8=((($7) + 1)&4294967295); //@line 170 "_lsprof.c"
        var $9=HEAP[$obj_addr]; //@line 170 "_lsprof.c"
        var $10=(($9)&4294967295); //@line 170 "_lsprof.c"
        HEAP[$10]=$8; //@line 170 "_lsprof.c"
        var $11=HEAP[$obj_addr]; //@line 171 "_lsprof.c"
        HEAP[$0]=$11; //@line 171 "_lsprof.c"
        __label__ = 27; break; //@line 171 "_lsprof.c"
      case 2: // $bb1
        var $12=HEAP[$obj_addr]; //@line 176 "_lsprof.c"
        var $13=$12; //@line 176 "_lsprof.c"
        HEAP[$fn]=$13; //@line 176 "_lsprof.c"
        var $14=HEAP[$fn]; //@line 178 "_lsprof.c"
        var $15=(($14+12)&4294967295); //@line 178 "_lsprof.c"
        var $16=HEAP[$15]; //@line 178 "_lsprof.c"
        var $17=($16)==0; //@line 178 "_lsprof.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 16; break; } //@line 178 "_lsprof.c"
      case 3: // $bb2
        var $18=HEAP[$fn]; //@line 180 "_lsprof.c"
        var $19=(($18+16)&4294967295); //@line 180 "_lsprof.c"
        var $20=HEAP[$19]; //@line 180 "_lsprof.c"
        HEAP[$mod]=$20; //@line 180 "_lsprof.c"
        var $21=HEAP[$mod]; //@line 182 "_lsprof.c"
        var $22=($21)==0; //@line 182 "_lsprof.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 182 "_lsprof.c"
      case 4: // $bb3
        var $23=HEAP[$mod]; //@line 182 "_lsprof.c"
        var $24=(($23+4)&4294967295); //@line 182 "_lsprof.c"
        var $25=HEAP[$24]; //@line 182 "_lsprof.c"
        var $26=(($25+84)&4294967295); //@line 182 "_lsprof.c"
        var $27=HEAP[$26]; //@line 182 "_lsprof.c"
        var $28=($27) & 134217728; //@line 182 "_lsprof.c"
        var $29=((($28))|0)==0; //@line 182 "_lsprof.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 182 "_lsprof.c"
      case 5: // $bb4
        var $30=HEAP[$mod]; //@line 183 "_lsprof.c"
        var $31=$30; //@line 183 "_lsprof.c"
        var $32=(($31+20)&4294967295); //@line 183 "_lsprof.c"
        var $33=(($32)&4294967295); //@line 183 "_lsprof.c"
        HEAP[$modname]=$33; //@line 183 "_lsprof.c"
        __label__ = 13; break; //@line 183 "_lsprof.c"
      case 6: // $bb5
        var $34=HEAP[$mod]; //@line 185 "_lsprof.c"
        var $35=($34)==0; //@line 185 "_lsprof.c"
        if ($35) { __label__ = 12; break; } else { __label__ = 7; break; } //@line 185 "_lsprof.c"
      case 7: // $bb6
        var $36=HEAP[$mod]; //@line 185 "_lsprof.c"
        var $37=(($36+4)&4294967295); //@line 185 "_lsprof.c"
        var $38=HEAP[$37]; //@line 185 "_lsprof.c"
        var $39=($38)==(_PyModule_Type); //@line 185 "_lsprof.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 185 "_lsprof.c"
      case 8: // $bb7
        var $40=HEAP[$mod]; //@line 185 "_lsprof.c"
        var $41=(($40+4)&4294967295); //@line 185 "_lsprof.c"
        var $42=HEAP[$41]; //@line 185 "_lsprof.c"
        var $43=_PyType_IsSubtype($42, _PyModule_Type); //@line 185 "_lsprof.c"
        var $44=((($43))|0)!=0; //@line 185 "_lsprof.c"
        if ($44) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 185 "_lsprof.c"
      case 9: // $bb8
        var $45=HEAP[$mod]; //@line 186 "_lsprof.c"
        var $46=_PyModule_GetName($45); //@line 186 "_lsprof.c"
        HEAP[$modname]=$46; //@line 186 "_lsprof.c"
        var $47=HEAP[$modname]; //@line 187 "_lsprof.c"
        var $48=($47)==0; //@line 187 "_lsprof.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 187 "_lsprof.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 188 "_lsprof.c"
        HEAP[$modname]=((__str)&4294967295); //@line 189 "_lsprof.c"
        __label__ = 11; break; //@line 189 "_lsprof.c"
      case 11: // $bb10
        __label__ = 13; break; //@line 189 "_lsprof.c"
      case 12: // $bb11
        HEAP[$modname]=((__str)&4294967295); //@line 193 "_lsprof.c"
        __label__ = 13; break; //@line 193 "_lsprof.c"
      case 13: // $bb12
        var $49=HEAP[$modname]; //@line 195 "_lsprof.c"
        var $50=_strcmp($49, ((__str)&4294967295)); //@line 195 "_lsprof.c"
        var $51=((($50))|0)!=0; //@line 195 "_lsprof.c"
        if ($51) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 195 "_lsprof.c"
      case 14: // $bb13
        var $52=HEAP[$fn]; //@line 196 "_lsprof.c"
        var $53=(($52+8)&4294967295); //@line 196 "_lsprof.c"
        var $54=HEAP[$53]; //@line 196 "_lsprof.c"
        var $55=(($54)&4294967295); //@line 196 "_lsprof.c"
        var $56=HEAP[$55]; //@line 196 "_lsprof.c"
        var $57=HEAP[$modname]; //@line 196 "_lsprof.c"
        var $58=_PyString_FromFormat(((__str1)&4294967295), $57, $56); //@line 196 "_lsprof.c"
        HEAP[$0]=$58; //@line 196 "_lsprof.c"
        __label__ = 27; break; //@line 196 "_lsprof.c"
      case 15: // $bb14
        var $59=HEAP[$fn]; //@line 200 "_lsprof.c"
        var $60=(($59+8)&4294967295); //@line 200 "_lsprof.c"
        var $61=HEAP[$60]; //@line 200 "_lsprof.c"
        var $62=(($61)&4294967295); //@line 200 "_lsprof.c"
        var $63=HEAP[$62]; //@line 200 "_lsprof.c"
        var $64=_PyString_FromFormat(((__str2)&4294967295), $63); //@line 200 "_lsprof.c"
        HEAP[$0]=$64; //@line 200 "_lsprof.c"
        __label__ = 27; break; //@line 200 "_lsprof.c"
      case 16: // $bb15
        var $65=HEAP[$fn]; //@line 207 "_lsprof.c"
        var $66=(($65+12)&4294967295); //@line 207 "_lsprof.c"
        var $67=HEAP[$66]; //@line 207 "_lsprof.c"
        HEAP[$self]=$67; //@line 207 "_lsprof.c"
        var $68=HEAP[$fn]; //@line 208 "_lsprof.c"
        var $69=(($68+8)&4294967295); //@line 208 "_lsprof.c"
        var $70=HEAP[$69]; //@line 208 "_lsprof.c"
        var $71=(($70)&4294967295); //@line 208 "_lsprof.c"
        var $72=HEAP[$71]; //@line 208 "_lsprof.c"
        var $73=_PyString_FromString($72); //@line 208 "_lsprof.c"
        HEAP[$name]=$73; //@line 208 "_lsprof.c"
        var $74=HEAP[$name]; //@line 209 "_lsprof.c"
        var $75=($74)!=0; //@line 209 "_lsprof.c"
        if ($75) { __label__ = 17; break; } else { __label__ = 26; break; } //@line 209 "_lsprof.c"
      case 17: // $bb16
        var $76=HEAP[$self]; //@line 210 "_lsprof.c"
        var $77=(($76+4)&4294967295); //@line 210 "_lsprof.c"
        var $78=HEAP[$77]; //@line 210 "_lsprof.c"
        var $79=HEAP[$name]; //@line 210 "_lsprof.c"
        var $80=__PyType_Lookup($78, $79); //@line 210 "_lsprof.c"
        HEAP[$mo]=$80; //@line 210 "_lsprof.c"
        var $81=HEAP[$mo]; //@line 211 "_lsprof.c"
        var $82=($81)!=0; //@line 211 "_lsprof.c"
        if ($82) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 211 "_lsprof.c"
      case 18: // $bb17
        var $83=HEAP[$mo]; //@line 211 "_lsprof.c"
        var $84=(($83)&4294967295); //@line 211 "_lsprof.c"
        var $85=HEAP[$84]; //@line 211 "_lsprof.c"
        var $86=((($85) + 1)&4294967295); //@line 211 "_lsprof.c"
        var $87=HEAP[$mo]; //@line 211 "_lsprof.c"
        var $88=(($87)&4294967295); //@line 211 "_lsprof.c"
        HEAP[$88]=$86; //@line 211 "_lsprof.c"
        __label__ = 19; break; //@line 211 "_lsprof.c"
      case 19: // $bb18
        var $89=HEAP[$name]; //@line 212 "_lsprof.c"
        var $90=(($89)&4294967295); //@line 212 "_lsprof.c"
        var $91=HEAP[$90]; //@line 212 "_lsprof.c"
        var $92=((($91) - 1)&4294967295); //@line 212 "_lsprof.c"
        var $93=HEAP[$name]; //@line 212 "_lsprof.c"
        var $94=(($93)&4294967295); //@line 212 "_lsprof.c"
        HEAP[$94]=$92; //@line 212 "_lsprof.c"
        var $95=HEAP[$name]; //@line 212 "_lsprof.c"
        var $96=(($95)&4294967295); //@line 212 "_lsprof.c"
        var $97=HEAP[$96]; //@line 212 "_lsprof.c"
        var $98=((($97))|0)==0; //@line 212 "_lsprof.c"
        if ($98) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 212 "_lsprof.c"
      case 20: // $bb19
        var $99=HEAP[$name]; //@line 212 "_lsprof.c"
        var $100=(($99+4)&4294967295); //@line 212 "_lsprof.c"
        var $101=HEAP[$100]; //@line 212 "_lsprof.c"
        var $102=(($101+24)&4294967295); //@line 212 "_lsprof.c"
        var $103=HEAP[$102]; //@line 212 "_lsprof.c"
        var $104=HEAP[$name]; //@line 212 "_lsprof.c"
        FUNCTION_TABLE[$103]($104); //@line 212 "_lsprof.c"
        __label__ = 21; break; //@line 212 "_lsprof.c"
      case 21: // $bb20
        var $105=HEAP[$mo]; //@line 213 "_lsprof.c"
        var $106=($105)!=0; //@line 213 "_lsprof.c"
        if ($106) { __label__ = 22; break; } else { __label__ = 26; break; } //@line 213 "_lsprof.c"
      case 22: // $bb21
        var $107=HEAP[$mo]; //@line 214 "_lsprof.c"
        var $108=_PyObject_Repr($107); //@line 214 "_lsprof.c"
        HEAP[$res]=$108; //@line 214 "_lsprof.c"
        var $109=HEAP[$mo]; //@line 215 "_lsprof.c"
        var $110=(($109)&4294967295); //@line 215 "_lsprof.c"
        var $111=HEAP[$110]; //@line 215 "_lsprof.c"
        var $112=((($111) - 1)&4294967295); //@line 215 "_lsprof.c"
        var $113=HEAP[$mo]; //@line 215 "_lsprof.c"
        var $114=(($113)&4294967295); //@line 215 "_lsprof.c"
        HEAP[$114]=$112; //@line 215 "_lsprof.c"
        var $115=HEAP[$mo]; //@line 215 "_lsprof.c"
        var $116=(($115)&4294967295); //@line 215 "_lsprof.c"
        var $117=HEAP[$116]; //@line 215 "_lsprof.c"
        var $118=((($117))|0)==0; //@line 215 "_lsprof.c"
        if ($118) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 215 "_lsprof.c"
      case 23: // $bb22
        var $119=HEAP[$mo]; //@line 215 "_lsprof.c"
        var $120=(($119+4)&4294967295); //@line 215 "_lsprof.c"
        var $121=HEAP[$120]; //@line 215 "_lsprof.c"
        var $122=(($121+24)&4294967295); //@line 215 "_lsprof.c"
        var $123=HEAP[$122]; //@line 215 "_lsprof.c"
        var $124=HEAP[$mo]; //@line 215 "_lsprof.c"
        FUNCTION_TABLE[$123]($124); //@line 215 "_lsprof.c"
        __label__ = 24; break; //@line 215 "_lsprof.c"
      case 24: // $bb23
        var $125=HEAP[$res]; //@line 216 "_lsprof.c"
        var $126=($125)!=0; //@line 216 "_lsprof.c"
        if ($126) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 216 "_lsprof.c"
      case 25: // $bb24
        var $127=HEAP[$res]; //@line 217 "_lsprof.c"
        HEAP[$0]=$127; //@line 217 "_lsprof.c"
        __label__ = 27; break; //@line 217 "_lsprof.c"
      case 26: // $bb25
        _PyErr_Clear(); //@line 220 "_lsprof.c"
        var $128=HEAP[$fn]; //@line 221 "_lsprof.c"
        var $129=(($128+8)&4294967295); //@line 221 "_lsprof.c"
        var $130=HEAP[$129]; //@line 221 "_lsprof.c"
        var $131=(($130)&4294967295); //@line 221 "_lsprof.c"
        var $132=HEAP[$131]; //@line 221 "_lsprof.c"
        var $133=_PyString_FromFormat(((__str3)&4294967295), $132); //@line 221 "_lsprof.c"
        HEAP[$0]=$133; //@line 221 "_lsprof.c"
        __label__ = 27; break; //@line 221 "_lsprof.c"
      case 27: // $bb26
        var $134=HEAP[$0]; //@line 171 "_lsprof.c"
        HEAP[$retval]=$134; //@line 171 "_lsprof.c"
        __label__ = 28; break; //@line 171 "_lsprof.c"
      case 28: // $return
        var $retval27=HEAP[$retval]; //@line 171 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 171 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _newProfilerEntry($pObj, $key, $userObj) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $key_addr=__stackBase__+4;
        var $userObj_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $self=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        HEAP[$key_addr]=$key;
        HEAP[$userObj_addr]=$userObj;
        var $1=_malloc(48); //@line 230 "_lsprof.c"
        var $2=$1; //@line 230 "_lsprof.c"
        HEAP[$self]=$2; //@line 230 "_lsprof.c"
        var $3=HEAP[$self]; //@line 231 "_lsprof.c"
        var $4=($3)==0; //@line 231 "_lsprof.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 231 "_lsprof.c"
      case 1: // $bb
        var $5=HEAP[$pObj_addr]; //@line 232 "_lsprof.c"
        var $6=(($5+20)&4294967295); //@line 232 "_lsprof.c"
        var $7=HEAP[$6]; //@line 232 "_lsprof.c"
        var $8=($7) | 256; //@line 232 "_lsprof.c"
        var $9=HEAP[$pObj_addr]; //@line 232 "_lsprof.c"
        var $10=(($9+20)&4294967295); //@line 232 "_lsprof.c"
        HEAP[$10]=$8; //@line 232 "_lsprof.c"
        HEAP[$0]=0; //@line 233 "_lsprof.c"
        __label__ = 5; break; //@line 233 "_lsprof.c"
      case 2: // $bb1
        var $11=HEAP[$userObj_addr]; //@line 235 "_lsprof.c"
        var $12=_normalizeUserObj($11); //@line 235 "_lsprof.c"
        HEAP[$userObj_addr]=$12; //@line 235 "_lsprof.c"
        var $13=HEAP[$userObj_addr]; //@line 236 "_lsprof.c"
        var $14=($13)==0; //@line 236 "_lsprof.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 236 "_lsprof.c"
      case 3: // $bb2
        _PyErr_Clear(); //@line 237 "_lsprof.c"
        var $15=HEAP[$self]; //@line 238 "_lsprof.c"
        var $16=$15; //@line 238 "_lsprof.c"
        _free($16); //@line 238 "_lsprof.c"
        var $17=HEAP[$pObj_addr]; //@line 239 "_lsprof.c"
        var $18=(($17+20)&4294967295); //@line 239 "_lsprof.c"
        var $19=HEAP[$18]; //@line 239 "_lsprof.c"
        var $20=($19) | 256; //@line 239 "_lsprof.c"
        var $21=HEAP[$pObj_addr]; //@line 239 "_lsprof.c"
        var $22=(($21+20)&4294967295); //@line 239 "_lsprof.c"
        HEAP[$22]=$20; //@line 239 "_lsprof.c"
        HEAP[$0]=0; //@line 240 "_lsprof.c"
        __label__ = 5; break; //@line 240 "_lsprof.c"
      case 4: // $bb3
        var $23=HEAP[$self]; //@line 242 "_lsprof.c"
        var $24=(($23)&4294967295); //@line 242 "_lsprof.c"
        var $25=(($24)&4294967295); //@line 242 "_lsprof.c"
        var $26=HEAP[$key_addr]; //@line 242 "_lsprof.c"
        HEAP[$25]=$26; //@line 242 "_lsprof.c"
        var $27=HEAP[$self]; //@line 243 "_lsprof.c"
        var $28=(($27+12)&4294967295); //@line 243 "_lsprof.c"
        var $29=HEAP[$userObj_addr]; //@line 243 "_lsprof.c"
        HEAP[$28]=$29; //@line 243 "_lsprof.c"
        var $30=HEAP[$self]; //@line 244 "_lsprof.c"
        var $31=(($30+16)&4294967295); //@line 244 "_lsprof.c"
        HEAP[$31]=0; //@line 244 "_lsprof.c"
        var $32=HEAP[$self]; //@line 245 "_lsprof.c"
        var $33=(($32+24)&4294967295); //@line 245 "_lsprof.c"
        HEAP[$33]=0; //@line 245 "_lsprof.c"
        var $34=HEAP[$self]; //@line 246 "_lsprof.c"
        var $35=(($34+32)&4294967295); //@line 246 "_lsprof.c"
        HEAP[$35]=0; //@line 246 "_lsprof.c"
        var $36=HEAP[$self]; //@line 247 "_lsprof.c"
        var $37=(($36+36)&4294967295); //@line 247 "_lsprof.c"
        HEAP[$37]=0; //@line 247 "_lsprof.c"
        var $38=HEAP[$self]; //@line 248 "_lsprof.c"
        var $39=(($38+40)&4294967295); //@line 248 "_lsprof.c"
        HEAP[$39]=0; //@line 248 "_lsprof.c"
        var $40=HEAP[$self]; //@line 249 "_lsprof.c"
        var $41=(($40+44)&4294967295); //@line 249 "_lsprof.c"
        HEAP[$41]=0; //@line 249 "_lsprof.c"
        var $42=HEAP[$self]; //@line 250 "_lsprof.c"
        var $43=(($42)&4294967295); //@line 250 "_lsprof.c"
        var $44=HEAP[$pObj_addr]; //@line 250 "_lsprof.c"
        var $45=(($44+8)&4294967295); //@line 250 "_lsprof.c"
        _RotatingTree_Add($45, $43); //@line 250 "_lsprof.c"
        var $46=HEAP[$self]; //@line 251 "_lsprof.c"
        HEAP[$0]=$46; //@line 251 "_lsprof.c"
        __label__ = 5; break; //@line 251 "_lsprof.c"
      case 5: // $bb4
        var $47=HEAP[$0]; //@line 233 "_lsprof.c"
        HEAP[$retval]=$47; //@line 233 "_lsprof.c"
        __label__ = 6; break; //@line 233 "_lsprof.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 233 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 233 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getEntry($pObj, $key) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $key_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        HEAP[$key_addr]=$key;
        var $1=HEAP[$pObj_addr]; //@line 257 "_lsprof.c"
        var $2=(($1+8)&4294967295); //@line 257 "_lsprof.c"
        var $3=HEAP[$key_addr]; //@line 257 "_lsprof.c"
        var $4=_RotatingTree_Get($2, $3); //@line 257 "_lsprof.c"
        var $5=$4; //@line 257 "_lsprof.c"
        HEAP[$0]=$5; //@line 257 "_lsprof.c"
        var $6=HEAP[$0]; //@line 257 "_lsprof.c"
        HEAP[$retval]=$6; //@line 257 "_lsprof.c"
        __label__ = 1; break; //@line 257 "_lsprof.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 257 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 257 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getSubEntry($pObj, $caller, $entry1) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $caller_addr=__stackBase__+4;
        var $entry_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        HEAP[$caller_addr]=$caller;
        HEAP[$entry_addr]=$entry1;
        var $1=HEAP[$caller_addr]; //@line 263 "_lsprof.c"
        var $2=(($1+44)&4294967295); //@line 263 "_lsprof.c"
        var $3=HEAP[$entry_addr]; //@line 263 "_lsprof.c"
        var $4=$3; //@line 263 "_lsprof.c"
        var $5=_RotatingTree_Get($2, $4); //@line 263 "_lsprof.c"
        var $6=$5; //@line 263 "_lsprof.c"
        HEAP[$0]=$6; //@line 263 "_lsprof.c"
        var $7=HEAP[$0]; //@line 263 "_lsprof.c"
        HEAP[$retval]=$7; //@line 263 "_lsprof.c"
        __label__ = 1; break; //@line 263 "_lsprof.c"
      case 1: // $return
        var $retval2=HEAP[$retval]; //@line 263 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 263 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _newSubEntry($pObj, $caller, $entry1) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $caller_addr=__stackBase__+4;
        var $entry_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $self=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        HEAP[$caller_addr]=$caller;
        HEAP[$entry_addr]=$entry1;
        var $1=_malloc(40); //@line 271 "_lsprof.c"
        var $2=$1; //@line 271 "_lsprof.c"
        HEAP[$self]=$2; //@line 271 "_lsprof.c"
        var $3=HEAP[$self]; //@line 272 "_lsprof.c"
        var $4=($3)==0; //@line 272 "_lsprof.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 272 "_lsprof.c"
      case 1: // $bb
        var $5=HEAP[$pObj_addr]; //@line 273 "_lsprof.c"
        var $6=(($5+20)&4294967295); //@line 273 "_lsprof.c"
        var $7=HEAP[$6]; //@line 273 "_lsprof.c"
        var $8=($7) | 256; //@line 273 "_lsprof.c"
        var $9=HEAP[$pObj_addr]; //@line 273 "_lsprof.c"
        var $10=(($9+20)&4294967295); //@line 273 "_lsprof.c"
        HEAP[$10]=$8; //@line 273 "_lsprof.c"
        HEAP[$0]=0; //@line 274 "_lsprof.c"
        __label__ = 3; break; //@line 274 "_lsprof.c"
      case 2: // $bb2
        var $11=HEAP[$self]; //@line 276 "_lsprof.c"
        var $12=(($11)&4294967295); //@line 276 "_lsprof.c"
        var $13=(($12)&4294967295); //@line 276 "_lsprof.c"
        var $14=HEAP[$entry_addr]; //@line 276 "_lsprof.c"
        var $15=$14; //@line 276 "_lsprof.c"
        HEAP[$13]=$15; //@line 276 "_lsprof.c"
        var $16=HEAP[$self]; //@line 277 "_lsprof.c"
        var $17=(($16+12)&4294967295); //@line 277 "_lsprof.c"
        HEAP[$17]=0; //@line 277 "_lsprof.c"
        var $18=HEAP[$self]; //@line 278 "_lsprof.c"
        var $19=(($18+20)&4294967295); //@line 278 "_lsprof.c"
        HEAP[$19]=0; //@line 278 "_lsprof.c"
        var $20=HEAP[$self]; //@line 279 "_lsprof.c"
        var $21=(($20+28)&4294967295); //@line 279 "_lsprof.c"
        HEAP[$21]=0; //@line 279 "_lsprof.c"
        var $22=HEAP[$self]; //@line 280 "_lsprof.c"
        var $23=(($22+32)&4294967295); //@line 280 "_lsprof.c"
        HEAP[$23]=0; //@line 280 "_lsprof.c"
        var $24=HEAP[$self]; //@line 281 "_lsprof.c"
        var $25=(($24+36)&4294967295); //@line 281 "_lsprof.c"
        HEAP[$25]=0; //@line 281 "_lsprof.c"
        var $26=HEAP[$self]; //@line 282 "_lsprof.c"
        var $27=(($26)&4294967295); //@line 282 "_lsprof.c"
        var $28=HEAP[$caller_addr]; //@line 282 "_lsprof.c"
        var $29=(($28+44)&4294967295); //@line 282 "_lsprof.c"
        _RotatingTree_Add($29, $27); //@line 282 "_lsprof.c"
        var $30=HEAP[$self]; //@line 283 "_lsprof.c"
        HEAP[$0]=$30; //@line 283 "_lsprof.c"
        __label__ = 3; break; //@line 283 "_lsprof.c"
      case 3: // $bb3
        var $31=HEAP[$0]; //@line 274 "_lsprof.c"
        HEAP[$retval]=$31; //@line 274 "_lsprof.c"
        __label__ = 4; break; //@line 274 "_lsprof.c"
      case 4: // $return
        var $retval4=HEAP[$retval]; //@line 274 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 274 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _freeSubEntry($header, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $header_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $subentry=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$header_addr]=$header;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$header_addr]; //@line 288 "_lsprof.c"
        var $2=$1; //@line 288 "_lsprof.c"
        HEAP[$subentry]=$2; //@line 288 "_lsprof.c"
        var $3=HEAP[$subentry]; //@line 289 "_lsprof.c"
        var $4=$3; //@line 289 "_lsprof.c"
        _free($4); //@line 289 "_lsprof.c"
        HEAP[$0]=0; //@line 290 "_lsprof.c"
        var $5=HEAP[$0]; //@line 290 "_lsprof.c"
        HEAP[$retval]=$5; //@line 290 "_lsprof.c"
        __label__ = 1; break; //@line 290 "_lsprof.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 290 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 290 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _freeEntry($header, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $header_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $entry1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$header_addr]=$header;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$header_addr]; //@line 295 "_lsprof.c"
        var $2=$1; //@line 295 "_lsprof.c"
        HEAP[$entry1]=$2; //@line 295 "_lsprof.c"
        var $3=HEAP[$entry1]; //@line 296 "_lsprof.c"
        var $4=(($3+44)&4294967295); //@line 296 "_lsprof.c"
        var $5=HEAP[$4]; //@line 296 "_lsprof.c"
        var $6=_RotatingTree_Enum($5, (FUNCTION_TABLE_OFFSET + 2), 0); //@line 296 "_lsprof.c"
        var $7=HEAP[$entry1]; //@line 297 "_lsprof.c"
        var $8=(($7+12)&4294967295); //@line 297 "_lsprof.c"
        var $9=HEAP[$8]; //@line 297 "_lsprof.c"
        var $10=(($9)&4294967295); //@line 297 "_lsprof.c"
        var $11=HEAP[$10]; //@line 297 "_lsprof.c"
        var $12=((($11) - 1)&4294967295); //@line 297 "_lsprof.c"
        var $13=(($9)&4294967295); //@line 297 "_lsprof.c"
        HEAP[$13]=$12; //@line 297 "_lsprof.c"
        var $14=(($9)&4294967295); //@line 297 "_lsprof.c"
        var $15=HEAP[$14]; //@line 297 "_lsprof.c"
        var $16=((($15))|0)==0; //@line 297 "_lsprof.c"
        if ($16) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 297 "_lsprof.c"
      case 1: // $bb
        var $17=HEAP[$entry1]; //@line 297 "_lsprof.c"
        var $18=(($17+12)&4294967295); //@line 297 "_lsprof.c"
        var $19=HEAP[$18]; //@line 297 "_lsprof.c"
        var $20=(($19+4)&4294967295); //@line 297 "_lsprof.c"
        var $21=HEAP[$20]; //@line 297 "_lsprof.c"
        var $22=(($21+24)&4294967295); //@line 297 "_lsprof.c"
        var $23=HEAP[$22]; //@line 297 "_lsprof.c"
        var $24=HEAP[$entry1]; //@line 297 "_lsprof.c"
        var $25=(($24+12)&4294967295); //@line 297 "_lsprof.c"
        var $26=HEAP[$25]; //@line 297 "_lsprof.c"
        FUNCTION_TABLE[$23]($26); //@line 297 "_lsprof.c"
        __label__ = 2; break; //@line 297 "_lsprof.c"
      case 2: // $bb2
        var $27=HEAP[$entry1]; //@line 298 "_lsprof.c"
        var $28=$27; //@line 298 "_lsprof.c"
        _free($28); //@line 298 "_lsprof.c"
        HEAP[$0]=0; //@line 299 "_lsprof.c"
        var $29=HEAP[$0]; //@line 299 "_lsprof.c"
        HEAP[$retval]=$29; //@line 299 "_lsprof.c"
        __label__ = 3; break; //@line 299 "_lsprof.c"
      case 3: // $return
        var $retval3=HEAP[$retval]; //@line 299 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 299 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _clearEntries($pObj) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $c=__stackBase__+4;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        var $0=HEAP[$pObj_addr]; //@line 304 "_lsprof.c"
        var $1=(($0+8)&4294967295); //@line 304 "_lsprof.c"
        var $2=HEAP[$1]; //@line 304 "_lsprof.c"
        var $3=_RotatingTree_Enum($2, (FUNCTION_TABLE_OFFSET + 4), 0); //@line 304 "_lsprof.c"
        var $4=HEAP[$pObj_addr]; //@line 305 "_lsprof.c"
        var $5=(($4+8)&4294967295); //@line 305 "_lsprof.c"
        HEAP[$5]=0; //@line 305 "_lsprof.c"
        var $6=HEAP[$pObj_addr]; //@line 307 "_lsprof.c"
        var $7=(($6+12)&4294967295); //@line 307 "_lsprof.c"
        var $8=HEAP[$7]; //@line 307 "_lsprof.c"
        var $9=($8)!=0; //@line 307 "_lsprof.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 307 "_lsprof.c"
      case 1: // $bb
        var $10=HEAP[$pObj_addr]; //@line 308 "_lsprof.c"
        var $11=(($10+12)&4294967295); //@line 308 "_lsprof.c"
        var $12=HEAP[$11]; //@line 308 "_lsprof.c"
        var $13=$12; //@line 308 "_lsprof.c"
        _free($13); //@line 308 "_lsprof.c"
        var $14=HEAP[$pObj_addr]; //@line 309 "_lsprof.c"
        var $15=(($14+12)&4294967295); //@line 309 "_lsprof.c"
        HEAP[$15]=0; //@line 309 "_lsprof.c"
        __label__ = 2; break; //@line 309 "_lsprof.c"
      case 2: // $bb1
        __label__ = 4; break; //@line 309 "_lsprof.c"
      case 3: // $bb2
        var $16=HEAP[$pObj_addr]; //@line 312 "_lsprof.c"
        var $17=(($16+16)&4294967295); //@line 312 "_lsprof.c"
        var $18=HEAP[$17]; //@line 312 "_lsprof.c"
        HEAP[$c]=$18; //@line 312 "_lsprof.c"
        var $19=HEAP[$c]; //@line 313 "_lsprof.c"
        var $20=(($19+16)&4294967295); //@line 313 "_lsprof.c"
        var $21=HEAP[$20]; //@line 313 "_lsprof.c"
        var $22=HEAP[$pObj_addr]; //@line 313 "_lsprof.c"
        var $23=(($22+16)&4294967295); //@line 313 "_lsprof.c"
        HEAP[$23]=$21; //@line 313 "_lsprof.c"
        var $24=HEAP[$c]; //@line 314 "_lsprof.c"
        var $25=$24; //@line 314 "_lsprof.c"
        _free($25); //@line 314 "_lsprof.c"
        __label__ = 4; break; //@line 314 "_lsprof.c"
      case 4: // $bb3
        var $26=HEAP[$pObj_addr]; //@line 311 "_lsprof.c"
        var $27=(($26+16)&4294967295); //@line 311 "_lsprof.c"
        var $28=HEAP[$27]; //@line 311 "_lsprof.c"
        var $29=($28)!=0; //@line 311 "_lsprof.c"
        if ($29) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 311 "_lsprof.c"
      case 5: // $bb4
        var $30=HEAP[$pObj_addr]; //@line 316 "_lsprof.c"
        var $31=(($30+16)&4294967295); //@line 316 "_lsprof.c"
        HEAP[$31]=0; //@line 316 "_lsprof.c"
        __label__ = 6; break; //@line 317 "_lsprof.c"
      case 6: // $return
        STACKTOP = __stackBase__;
        return; //@line 317 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initContext($pObj, $self, $entry1) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $self_addr=__stackBase__+4;
        var $entry_addr=__stackBase__+8;
        var $iftmp_2=__stackBase__+12;
        var $caller=__stackBase__+20;
        var $subentry=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        HEAP[$self_addr]=$self;
        HEAP[$entry_addr]=$entry1;
        var $0=HEAP[$self_addr]; //@line 322 "_lsprof.c"
        var $1=(($0+20)&4294967295); //@line 322 "_lsprof.c"
        var $2=HEAP[$entry_addr]; //@line 322 "_lsprof.c"
        HEAP[$1]=$2; //@line 322 "_lsprof.c"
        var $3=HEAP[$self_addr]; //@line 323 "_lsprof.c"
        var $4=(($3+8)&4294967295); //@line 323 "_lsprof.c"
        HEAP[$4]=0; //@line 323 "_lsprof.c"
        var $5=HEAP[$pObj_addr]; //@line 324 "_lsprof.c"
        var $6=(($5+12)&4294967295); //@line 324 "_lsprof.c"
        var $7=HEAP[$6]; //@line 324 "_lsprof.c"
        var $8=HEAP[$self_addr]; //@line 324 "_lsprof.c"
        var $9=(($8+16)&4294967295); //@line 324 "_lsprof.c"
        HEAP[$9]=$7; //@line 324 "_lsprof.c"
        var $10=HEAP[$pObj_addr]; //@line 325 "_lsprof.c"
        var $11=(($10+12)&4294967295); //@line 325 "_lsprof.c"
        var $12=HEAP[$self_addr]; //@line 325 "_lsprof.c"
        HEAP[$11]=$12; //@line 325 "_lsprof.c"
        var $13=HEAP[$entry_addr]; //@line 326 "_lsprof.c"
        var $14=(($13+40)&4294967295); //@line 326 "_lsprof.c"
        var $15=HEAP[$14]; //@line 326 "_lsprof.c"
        var $16=((($15) + 1)&4294967295); //@line 326 "_lsprof.c"
        var $17=HEAP[$entry_addr]; //@line 326 "_lsprof.c"
        var $18=(($17+40)&4294967295); //@line 326 "_lsprof.c"
        HEAP[$18]=$16; //@line 326 "_lsprof.c"
        var $19=HEAP[$pObj_addr]; //@line 327 "_lsprof.c"
        var $20=(($19+20)&4294967295); //@line 327 "_lsprof.c"
        var $21=HEAP[$20]; //@line 327 "_lsprof.c"
        var $22=($21) & 2; //@line 327 "_lsprof.c"
        var $23=((($22))|0)!=0; //@line 327 "_lsprof.c"
        if ($23) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 327 "_lsprof.c"
      case 1: // $bb
        var $24=HEAP[$self_addr]; //@line 327 "_lsprof.c"
        var $25=(($24+16)&4294967295); //@line 327 "_lsprof.c"
        var $26=HEAP[$25]; //@line 327 "_lsprof.c"
        var $27=($26)!=0; //@line 327 "_lsprof.c"
        if ($27) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 327 "_lsprof.c"
      case 2: // $bb2
        var $28=HEAP[$self_addr]; //@line 329 "_lsprof.c"
        var $29=(($28+16)&4294967295); //@line 329 "_lsprof.c"
        var $30=HEAP[$29]; //@line 329 "_lsprof.c"
        var $31=(($30+20)&4294967295); //@line 329 "_lsprof.c"
        var $32=HEAP[$31]; //@line 329 "_lsprof.c"
        HEAP[$caller]=$32; //@line 329 "_lsprof.c"
        var $33=HEAP[$pObj_addr]; //@line 330 "_lsprof.c"
        var $34=HEAP[$caller]; //@line 330 "_lsprof.c"
        var $35=HEAP[$entry_addr]; //@line 330 "_lsprof.c"
        var $36=_getSubEntry($33, $34, $35); //@line 330 "_lsprof.c"
        HEAP[$subentry]=$36; //@line 330 "_lsprof.c"
        var $37=HEAP[$subentry]; //@line 331 "_lsprof.c"
        var $38=($37)==0; //@line 331 "_lsprof.c"
        if ($38) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 331 "_lsprof.c"
      case 3: // $bb3
        var $39=HEAP[$pObj_addr]; //@line 332 "_lsprof.c"
        var $40=HEAP[$caller]; //@line 332 "_lsprof.c"
        var $41=HEAP[$entry_addr]; //@line 332 "_lsprof.c"
        var $42=_newSubEntry($39, $40, $41); //@line 332 "_lsprof.c"
        HEAP[$subentry]=$42; //@line 332 "_lsprof.c"
        __label__ = 4; break; //@line 332 "_lsprof.c"
      case 4: // $bb4
        var $43=HEAP[$subentry]; //@line 333 "_lsprof.c"
        var $44=($43)!=0; //@line 333 "_lsprof.c"
        if ($44) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 333 "_lsprof.c"
      case 5: // $bb5
        var $45=HEAP[$subentry]; //@line 334 "_lsprof.c"
        var $46=(($45+36)&4294967295); //@line 334 "_lsprof.c"
        var $47=HEAP[$46]; //@line 334 "_lsprof.c"
        var $48=((($47) + 1)&4294967295); //@line 334 "_lsprof.c"
        var $49=HEAP[$subentry]; //@line 334 "_lsprof.c"
        var $50=(($49+36)&4294967295); //@line 334 "_lsprof.c"
        HEAP[$50]=$48; //@line 334 "_lsprof.c"
        __label__ = 6; break; //@line 334 "_lsprof.c"
      case 6: // $bb6
        var $51=HEAP[$pObj_addr]; //@line 336 "_lsprof.c"
        var $52=(($51+24)&4294967295); //@line 336 "_lsprof.c"
        var $53=HEAP[$52]; //@line 336 "_lsprof.c"
        var $54=($53)!=0; //@line 336 "_lsprof.c"
        if ($54) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 336 "_lsprof.c"
      case 7: // $bb7
        var $55=HEAP[$pObj_addr]; //@line 336 "_lsprof.c"
        var $56=_CallExternalTimer($55); //@line 336 "_lsprof.c"
        HEAP[$iftmp_2]=$56; //@line 336 "_lsprof.c"
        __label__ = 9; break; //@line 336 "_lsprof.c"
      case 8: // $bb8
        var $57=_hpTimer(); //@line 336 "_lsprof.c"
        HEAP[$iftmp_2]=$57; //@line 336 "_lsprof.c"
        __label__ = 9; break; //@line 336 "_lsprof.c"
      case 9: // $bb9
        var $58=HEAP[$self_addr]; //@line 336 "_lsprof.c"
        var $59=(($58)&4294967295); //@line 336 "_lsprof.c"
        var $60=HEAP[$iftmp_2]; //@line 336 "_lsprof.c"
        HEAP[$59]=$60; //@line 336 "_lsprof.c"
        __label__ = 10; break; //@line 337 "_lsprof.c"
      case 10: // $return
        STACKTOP = __stackBase__;
        return; //@line 337 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Stop($pObj, $self, $entry1) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $self_addr=__stackBase__+4;
        var $entry_addr=__stackBase__+8;
        var $iftmp_3=__stackBase__+12;
        var $tt=__stackBase__+20;
        var $it=__stackBase__+28;
        var $caller=__stackBase__+36;
        var $subentry=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        HEAP[$self_addr]=$self;
        HEAP[$entry_addr]=$entry1;
        var $0=HEAP[$pObj_addr]; //@line 342 "_lsprof.c"
        var $1=(($0+24)&4294967295); //@line 342 "_lsprof.c"
        var $2=HEAP[$1]; //@line 342 "_lsprof.c"
        var $3=($2)!=0; //@line 342 "_lsprof.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 342 "_lsprof.c"
      case 1: // $bb
        var $4=HEAP[$pObj_addr]; //@line 342 "_lsprof.c"
        var $5=_CallExternalTimer($4); //@line 342 "_lsprof.c"
        HEAP[$iftmp_3]=$5; //@line 342 "_lsprof.c"
        __label__ = 3; break; //@line 342 "_lsprof.c"
      case 2: // $bb2
        var $6=_hpTimer(); //@line 342 "_lsprof.c"
        HEAP[$iftmp_3]=$6; //@line 342 "_lsprof.c"
        __label__ = 3; break; //@line 342 "_lsprof.c"
      case 3: // $bb3
        var $7=HEAP[$self_addr]; //@line 342 "_lsprof.c"
        var $8=(($7)&4294967295); //@line 342 "_lsprof.c"
        var $9=HEAP[$8]; //@line 342 "_lsprof.c"
        var $10=HEAP[$iftmp_3]; //@line 342 "_lsprof.c"
        var $11=($10) - ($9); //@line 342 "_lsprof.c"
        HEAP[$tt]=$11; //@line 342 "_lsprof.c"
        var $12=HEAP[$self_addr]; //@line 343 "_lsprof.c"
        var $13=(($12+8)&4294967295); //@line 343 "_lsprof.c"
        var $14=HEAP[$13]; //@line 343 "_lsprof.c"
        var $15=HEAP[$tt]; //@line 343 "_lsprof.c"
        var $16=($15) - ($14); //@line 343 "_lsprof.c"
        HEAP[$it]=$16; //@line 343 "_lsprof.c"
        var $17=HEAP[$self_addr]; //@line 344 "_lsprof.c"
        var $18=(($17+16)&4294967295); //@line 344 "_lsprof.c"
        var $19=HEAP[$18]; //@line 344 "_lsprof.c"
        var $20=($19)!=0; //@line 344 "_lsprof.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 344 "_lsprof.c"
      case 4: // $bb4
        var $21=HEAP[$self_addr]; //@line 345 "_lsprof.c"
        var $22=(($21+16)&4294967295); //@line 345 "_lsprof.c"
        var $23=HEAP[$22]; //@line 345 "_lsprof.c"
        var $24=HEAP[$self_addr]; //@line 345 "_lsprof.c"
        var $25=(($24+16)&4294967295); //@line 345 "_lsprof.c"
        var $26=HEAP[$25]; //@line 345 "_lsprof.c"
        var $27=(($26+8)&4294967295); //@line 345 "_lsprof.c"
        var $28=HEAP[$27]; //@line 345 "_lsprof.c"
        var $29=HEAP[$tt]; //@line 345 "_lsprof.c"
        var $30=($28) + ($29); //@line 345 "_lsprof.c"
        var $31=(($23+8)&4294967295); //@line 345 "_lsprof.c"
        HEAP[$31]=$30; //@line 345 "_lsprof.c"
        __label__ = 5; break; //@line 345 "_lsprof.c"
      case 5: // $bb5
        var $32=HEAP[$self_addr]; //@line 346 "_lsprof.c"
        var $33=(($32+16)&4294967295); //@line 346 "_lsprof.c"
        var $34=HEAP[$33]; //@line 346 "_lsprof.c"
        var $35=HEAP[$pObj_addr]; //@line 346 "_lsprof.c"
        var $36=(($35+12)&4294967295); //@line 346 "_lsprof.c"
        HEAP[$36]=$34; //@line 346 "_lsprof.c"
        var $37=HEAP[$entry_addr]; //@line 347 "_lsprof.c"
        var $38=(($37+40)&4294967295); //@line 347 "_lsprof.c"
        var $39=HEAP[$38]; //@line 347 "_lsprof.c"
        var $40=((($39) - 1)&4294967295); //@line 347 "_lsprof.c"
        var $41=HEAP[$entry_addr]; //@line 347 "_lsprof.c"
        var $42=(($41+40)&4294967295); //@line 347 "_lsprof.c"
        HEAP[$42]=$40; //@line 347 "_lsprof.c"
        var $43=HEAP[$entry_addr]; //@line 347 "_lsprof.c"
        var $44=(($43+40)&4294967295); //@line 347 "_lsprof.c"
        var $45=HEAP[$44]; //@line 347 "_lsprof.c"
        var $46=((($45))|0)==0; //@line 347 "_lsprof.c"
        if ($46) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 347 "_lsprof.c"
      case 6: // $bb6
        var $47=HEAP[$entry_addr]; //@line 348 "_lsprof.c"
        var $48=(($47+16)&4294967295); //@line 348 "_lsprof.c"
        var $49=HEAP[$48]; //@line 348 "_lsprof.c"
        var $50=HEAP[$tt]; //@line 348 "_lsprof.c"
        var $51=($49) + ($50); //@line 348 "_lsprof.c"
        var $52=HEAP[$entry_addr]; //@line 348 "_lsprof.c"
        var $53=(($52+16)&4294967295); //@line 348 "_lsprof.c"
        HEAP[$53]=$51; //@line 348 "_lsprof.c"
        __label__ = 8; break; //@line 348 "_lsprof.c"
      case 7: // $bb7
        var $54=HEAP[$entry_addr]; //@line 350 "_lsprof.c"
        var $55=(($54+36)&4294967295); //@line 350 "_lsprof.c"
        var $56=HEAP[$55]; //@line 350 "_lsprof.c"
        var $57=((($56) + 1)&4294967295); //@line 350 "_lsprof.c"
        var $58=HEAP[$entry_addr]; //@line 350 "_lsprof.c"
        var $59=(($58+36)&4294967295); //@line 350 "_lsprof.c"
        HEAP[$59]=$57; //@line 350 "_lsprof.c"
        __label__ = 8; break; //@line 350 "_lsprof.c"
      case 8: // $bb8
        var $60=HEAP[$entry_addr]; //@line 351 "_lsprof.c"
        var $61=(($60+24)&4294967295); //@line 351 "_lsprof.c"
        var $62=HEAP[$61]; //@line 351 "_lsprof.c"
        var $63=HEAP[$it]; //@line 351 "_lsprof.c"
        var $64=($62) + ($63); //@line 351 "_lsprof.c"
        var $65=HEAP[$entry_addr]; //@line 351 "_lsprof.c"
        var $66=(($65+24)&4294967295); //@line 351 "_lsprof.c"
        HEAP[$66]=$64; //@line 351 "_lsprof.c"
        var $67=HEAP[$entry_addr]; //@line 352 "_lsprof.c"
        var $68=(($67+32)&4294967295); //@line 352 "_lsprof.c"
        var $69=HEAP[$68]; //@line 352 "_lsprof.c"
        var $70=((($69) + 1)&4294967295); //@line 352 "_lsprof.c"
        var $71=HEAP[$entry_addr]; //@line 352 "_lsprof.c"
        var $72=(($71+32)&4294967295); //@line 352 "_lsprof.c"
        HEAP[$72]=$70; //@line 352 "_lsprof.c"
        var $73=HEAP[$pObj_addr]; //@line 353 "_lsprof.c"
        var $74=(($73+20)&4294967295); //@line 353 "_lsprof.c"
        var $75=HEAP[$74]; //@line 353 "_lsprof.c"
        var $76=($75) & 2; //@line 353 "_lsprof.c"
        var $77=((($76))|0)!=0; //@line 353 "_lsprof.c"
        if ($77) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 353 "_lsprof.c"
      case 9: // $bb9
        var $78=HEAP[$self_addr]; //@line 353 "_lsprof.c"
        var $79=(($78+16)&4294967295); //@line 353 "_lsprof.c"
        var $80=HEAP[$79]; //@line 353 "_lsprof.c"
        var $81=($80)!=0; //@line 353 "_lsprof.c"
        if ($81) { __label__ = 10; break; } else { __label__ = 15; break; } //@line 353 "_lsprof.c"
      case 10: // $bb10
        var $82=HEAP[$self_addr]; //@line 355 "_lsprof.c"
        var $83=(($82+16)&4294967295); //@line 355 "_lsprof.c"
        var $84=HEAP[$83]; //@line 355 "_lsprof.c"
        var $85=(($84+20)&4294967295); //@line 355 "_lsprof.c"
        var $86=HEAP[$85]; //@line 355 "_lsprof.c"
        HEAP[$caller]=$86; //@line 355 "_lsprof.c"
        var $87=HEAP[$pObj_addr]; //@line 356 "_lsprof.c"
        var $88=HEAP[$caller]; //@line 356 "_lsprof.c"
        var $89=HEAP[$entry_addr]; //@line 356 "_lsprof.c"
        var $90=_getSubEntry($87, $88, $89); //@line 356 "_lsprof.c"
        HEAP[$subentry]=$90; //@line 356 "_lsprof.c"
        var $91=HEAP[$subentry]; //@line 357 "_lsprof.c"
        var $92=($91)!=0; //@line 357 "_lsprof.c"
        if ($92) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 357 "_lsprof.c"
      case 11: // $bb11
        var $93=HEAP[$subentry]; //@line 358 "_lsprof.c"
        var $94=(($93+36)&4294967295); //@line 358 "_lsprof.c"
        var $95=HEAP[$94]; //@line 358 "_lsprof.c"
        var $96=((($95) - 1)&4294967295); //@line 358 "_lsprof.c"
        var $97=HEAP[$subentry]; //@line 358 "_lsprof.c"
        var $98=(($97+36)&4294967295); //@line 358 "_lsprof.c"
        HEAP[$98]=$96; //@line 358 "_lsprof.c"
        var $99=HEAP[$subentry]; //@line 358 "_lsprof.c"
        var $100=(($99+36)&4294967295); //@line 358 "_lsprof.c"
        var $101=HEAP[$100]; //@line 358 "_lsprof.c"
        var $102=((($101))|0)==0; //@line 358 "_lsprof.c"
        if ($102) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 358 "_lsprof.c"
      case 12: // $bb12
        var $103=HEAP[$subentry]; //@line 359 "_lsprof.c"
        var $104=(($103+12)&4294967295); //@line 359 "_lsprof.c"
        var $105=HEAP[$104]; //@line 359 "_lsprof.c"
        var $106=HEAP[$tt]; //@line 359 "_lsprof.c"
        var $107=($105) + ($106); //@line 359 "_lsprof.c"
        var $108=HEAP[$subentry]; //@line 359 "_lsprof.c"
        var $109=(($108+12)&4294967295); //@line 359 "_lsprof.c"
        HEAP[$109]=$107; //@line 359 "_lsprof.c"
        __label__ = 14; break; //@line 359 "_lsprof.c"
      case 13: // $bb13
        var $110=HEAP[$subentry]; //@line 361 "_lsprof.c"
        var $111=(($110+32)&4294967295); //@line 361 "_lsprof.c"
        var $112=HEAP[$111]; //@line 361 "_lsprof.c"
        var $113=((($112) + 1)&4294967295); //@line 361 "_lsprof.c"
        var $114=HEAP[$subentry]; //@line 361 "_lsprof.c"
        var $115=(($114+32)&4294967295); //@line 361 "_lsprof.c"
        HEAP[$115]=$113; //@line 361 "_lsprof.c"
        __label__ = 14; break; //@line 361 "_lsprof.c"
      case 14: // $bb14
        var $116=HEAP[$subentry]; //@line 362 "_lsprof.c"
        var $117=(($116+20)&4294967295); //@line 362 "_lsprof.c"
        var $118=HEAP[$117]; //@line 362 "_lsprof.c"
        var $119=HEAP[$it]; //@line 362 "_lsprof.c"
        var $120=($118) + ($119); //@line 362 "_lsprof.c"
        var $121=HEAP[$subentry]; //@line 362 "_lsprof.c"
        var $122=(($121+20)&4294967295); //@line 362 "_lsprof.c"
        HEAP[$122]=$120; //@line 362 "_lsprof.c"
        var $123=HEAP[$subentry]; //@line 363 "_lsprof.c"
        var $124=(($123+28)&4294967295); //@line 363 "_lsprof.c"
        var $125=HEAP[$124]; //@line 363 "_lsprof.c"
        var $126=((($125) + 1)&4294967295); //@line 363 "_lsprof.c"
        var $127=HEAP[$subentry]; //@line 363 "_lsprof.c"
        var $128=(($127+28)&4294967295); //@line 363 "_lsprof.c"
        HEAP[$128]=$126; //@line 363 "_lsprof.c"
        __label__ = 15; break; //@line 363 "_lsprof.c"
      case 15: // $bb15
        __label__ = 16; break; //@line 366 "_lsprof.c"
      case 16: // $return
        STACKTOP = __stackBase__;
        return; //@line 366 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ptrace_enter_call($self, $key, $userObj) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $key_addr=__stackBase__+4;
        var $userObj_addr=__stackBase__+8;
        var $pObj=__stackBase__+12;
        var $profEntry=__stackBase__+16;
        var $pContext=__stackBase__+20;
        var $last_type=__stackBase__+24;
        var $last_value=__stackBase__+28;
        var $last_tb=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$key_addr]=$key;
        HEAP[$userObj_addr]=$userObj;
        var $0=HEAP[$self_addr]; //@line 373 "_lsprof.c"
        var $1=$0; //@line 373 "_lsprof.c"
        HEAP[$pObj]=$1; //@line 373 "_lsprof.c"
        _PyErr_Fetch($last_type, $last_value, $last_tb); //@line 384 "_lsprof.c"
        var $2=HEAP[$pObj]; //@line 386 "_lsprof.c"
        var $3=HEAP[$key_addr]; //@line 386 "_lsprof.c"
        var $4=_getEntry($2, $3); //@line 386 "_lsprof.c"
        HEAP[$profEntry]=$4; //@line 386 "_lsprof.c"
        var $5=HEAP[$profEntry]; //@line 387 "_lsprof.c"
        var $6=($5)==0; //@line 387 "_lsprof.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 387 "_lsprof.c"
      case 1: // $bb
        var $7=HEAP[$pObj]; //@line 388 "_lsprof.c"
        var $8=HEAP[$key_addr]; //@line 388 "_lsprof.c"
        var $9=HEAP[$userObj_addr]; //@line 388 "_lsprof.c"
        var $10=_newProfilerEntry($7, $8, $9); //@line 388 "_lsprof.c"
        HEAP[$profEntry]=$10; //@line 388 "_lsprof.c"
        var $11=HEAP[$profEntry]; //@line 389 "_lsprof.c"
        var $12=($11)==0; //@line 389 "_lsprof.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 2; break; } //@line 389 "_lsprof.c"
      case 2: // $bb1
        var $13=HEAP[$pObj]; //@line 393 "_lsprof.c"
        var $14=(($13+16)&4294967295); //@line 393 "_lsprof.c"
        var $15=HEAP[$14]; //@line 393 "_lsprof.c"
        HEAP[$pContext]=$15; //@line 393 "_lsprof.c"
        var $16=HEAP[$pContext]; //@line 394 "_lsprof.c"
        var $17=($16)!=0; //@line 394 "_lsprof.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 394 "_lsprof.c"
      case 3: // $bb2
        var $18=HEAP[$pContext]; //@line 395 "_lsprof.c"
        var $19=(($18+16)&4294967295); //@line 395 "_lsprof.c"
        var $20=HEAP[$19]; //@line 395 "_lsprof.c"
        var $21=HEAP[$pObj]; //@line 395 "_lsprof.c"
        var $22=(($21+16)&4294967295); //@line 395 "_lsprof.c"
        HEAP[$22]=$20; //@line 395 "_lsprof.c"
        __label__ = 6; break; //@line 395 "_lsprof.c"
      case 4: // $bb3
        var $23=_malloc(24); //@line 399 "_lsprof.c"
        var $24=$23; //@line 399 "_lsprof.c"
        HEAP[$pContext]=$24; //@line 399 "_lsprof.c"
        var $25=HEAP[$pContext]; //@line 401 "_lsprof.c"
        var $26=($25)==0; //@line 401 "_lsprof.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 401 "_lsprof.c"
      case 5: // $bb4
        var $27=HEAP[$pObj]; //@line 402 "_lsprof.c"
        var $28=(($27+20)&4294967295); //@line 402 "_lsprof.c"
        var $29=HEAP[$28]; //@line 402 "_lsprof.c"
        var $30=($29) | 256; //@line 402 "_lsprof.c"
        var $31=HEAP[$pObj]; //@line 402 "_lsprof.c"
        var $32=(($31+20)&4294967295); //@line 402 "_lsprof.c"
        HEAP[$32]=$30; //@line 402 "_lsprof.c"
        __label__ = 7; break; //@line 402 "_lsprof.c"
      case 6: // $bb5
        var $33=HEAP[$pObj]; //@line 406 "_lsprof.c"
        var $34=HEAP[$pContext]; //@line 406 "_lsprof.c"
        var $35=HEAP[$profEntry]; //@line 406 "_lsprof.c"
        _initContext($33, $34, $35); //@line 406 "_lsprof.c"
        __label__ = 7; break; //@line 408 "_lsprof.c"
      case 7: // $restorePyerr
        var $36=HEAP[$last_tb]; //@line 409 "_lsprof.c"
        var $37=HEAP[$last_value]; //@line 409 "_lsprof.c"
        var $38=HEAP[$last_type]; //@line 409 "_lsprof.c"
        _PyErr_Restore($38, $37, $36); //@line 409 "_lsprof.c"
        __label__ = 8; break; //@line 410 "_lsprof.c"
      case 8: // $return
        STACKTOP = __stackBase__;
        return; //@line 410 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ptrace_leave_call($self, $key) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $key_addr=__stackBase__+4;
        var $pObj=__stackBase__+8;
        var $profEntry=__stackBase__+12;
        var $pContext=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$key_addr]=$key;
        var $0=HEAP[$self_addr]; //@line 416 "_lsprof.c"
        var $1=$0; //@line 416 "_lsprof.c"
        HEAP[$pObj]=$1; //@line 416 "_lsprof.c"
        var $2=HEAP[$pObj]; //@line 420 "_lsprof.c"
        var $3=(($2+12)&4294967295); //@line 420 "_lsprof.c"
        var $4=HEAP[$3]; //@line 420 "_lsprof.c"
        HEAP[$pContext]=$4; //@line 420 "_lsprof.c"
        var $5=HEAP[$pContext]; //@line 421 "_lsprof.c"
        var $6=($5)==0; //@line 421 "_lsprof.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 421 "_lsprof.c"
      case 1: // $bb
        var $7=HEAP[$pObj]; //@line 423 "_lsprof.c"
        var $8=HEAP[$key_addr]; //@line 423 "_lsprof.c"
        var $9=_getEntry($7, $8); //@line 423 "_lsprof.c"
        HEAP[$profEntry]=$9; //@line 423 "_lsprof.c"
        var $10=HEAP[$profEntry]; //@line 424 "_lsprof.c"
        var $11=($10)!=0; //@line 424 "_lsprof.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 424 "_lsprof.c"
      case 2: // $bb1
        var $12=HEAP[$pObj]; //@line 425 "_lsprof.c"
        var $13=HEAP[$pContext]; //@line 425 "_lsprof.c"
        var $14=HEAP[$profEntry]; //@line 425 "_lsprof.c"
        _Stop($12, $13, $14); //@line 425 "_lsprof.c"
        __label__ = 4; break; //@line 425 "_lsprof.c"
      case 3: // $bb2
        var $15=HEAP[$pContext]; //@line 428 "_lsprof.c"
        var $16=(($15+16)&4294967295); //@line 428 "_lsprof.c"
        var $17=HEAP[$16]; //@line 428 "_lsprof.c"
        var $18=HEAP[$pObj]; //@line 428 "_lsprof.c"
        var $19=(($18+12)&4294967295); //@line 428 "_lsprof.c"
        HEAP[$19]=$17; //@line 428 "_lsprof.c"
        __label__ = 4; break; //@line 428 "_lsprof.c"
      case 4: // $bb3
        var $20=HEAP[$pObj]; //@line 431 "_lsprof.c"
        var $21=(($20+16)&4294967295); //@line 431 "_lsprof.c"
        var $22=HEAP[$21]; //@line 431 "_lsprof.c"
        var $23=HEAP[$pContext]; //@line 431 "_lsprof.c"
        var $24=(($23+16)&4294967295); //@line 431 "_lsprof.c"
        HEAP[$24]=$22; //@line 431 "_lsprof.c"
        var $25=HEAP[$pObj]; //@line 432 "_lsprof.c"
        var $26=(($25+16)&4294967295); //@line 432 "_lsprof.c"
        var $27=HEAP[$pContext]; //@line 432 "_lsprof.c"
        HEAP[$26]=$27; //@line 432 "_lsprof.c"
        __label__ = 5; break; //@line 432 "_lsprof.c"
      case 5: // $bb4
        __label__ = 6; break; //@line 422 "_lsprof.c"
      case 6: // $return
        STACKTOP = __stackBase__;
        return; //@line 422 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_callback($self, $frame, $what, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $frame_addr=__stackBase__+4;
        var $what_addr=__stackBase__+8;
        var $arg_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$frame_addr]=$frame;
        HEAP[$what_addr]=$what;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$what_addr]; //@line 439 "_lsprof.c"
        if ($1 == 0) {
          __label__ = 1; break;
        }
        else if ($1 == 3) {
          __label__ = 2; break;
        }
        else if ($1 == 4) {
          __label__ = 3; break;
        }
        else if ($1 == 5) {
          __label__ = 7; break;
        }
        else if ($1 == 6) {
          __label__ = 7; break;
        }
        else {
        __label__ = 10; break;
        }
        
      case 1: // $bb
        var $2=HEAP[$frame_addr]; //@line 443 "_lsprof.c"
        var $3=(($2+16)&4294967295); //@line 443 "_lsprof.c"
        var $4=HEAP[$3]; //@line 443 "_lsprof.c"
        var $5=$4; //@line 443 "_lsprof.c"
        var $6=HEAP[$frame_addr]; //@line 443 "_lsprof.c"
        var $7=(($6+16)&4294967295); //@line 443 "_lsprof.c"
        var $8=HEAP[$7]; //@line 443 "_lsprof.c"
        var $9=HEAP[$self_addr]; //@line 443 "_lsprof.c"
        var $10=$8; //@line 443 "_lsprof.c"
        _ptrace_enter_call($9, $10, $5); //@line 443 "_lsprof.c"
        __label__ = 10; break; //@line 443 "_lsprof.c"
      case 2: // $bb1
        var $11=HEAP[$frame_addr]; //@line 450 "_lsprof.c"
        var $12=(($11+16)&4294967295); //@line 450 "_lsprof.c"
        var $13=HEAP[$12]; //@line 450 "_lsprof.c"
        var $14=HEAP[$self_addr]; //@line 450 "_lsprof.c"
        var $15=$13; //@line 450 "_lsprof.c"
        _ptrace_leave_call($14, $15); //@line 450 "_lsprof.c"
        __label__ = 10; break; //@line 450 "_lsprof.c"
      case 3: // $bb2
        var $16=HEAP[$self_addr]; //@line 462 "_lsprof.c"
        var $17=$16; //@line 462 "_lsprof.c"
        var $18=(($17+20)&4294967295); //@line 462 "_lsprof.c"
        var $19=HEAP[$18]; //@line 462 "_lsprof.c"
        var $20=($19) & 4; //@line 462 "_lsprof.c"
        var $21=((($20))|0)!=0; //@line 462 "_lsprof.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 462 "_lsprof.c"
      case 4: // $bb3
        var $22=HEAP[$arg_addr]; //@line 462 "_lsprof.c"
        var $23=(($22+4)&4294967295); //@line 462 "_lsprof.c"
        var $24=HEAP[$23]; //@line 462 "_lsprof.c"
        var $25=($24)==(_PyCFunction_Type); //@line 462 "_lsprof.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 462 "_lsprof.c"
      case 5: // $bb4
        var $26=HEAP[$arg_addr]; //@line 464 "_lsprof.c"
        var $27=$26; //@line 464 "_lsprof.c"
        var $28=(($27+8)&4294967295); //@line 464 "_lsprof.c"
        var $29=HEAP[$28]; //@line 464 "_lsprof.c"
        var $30=HEAP[$self_addr]; //@line 464 "_lsprof.c"
        var $31=$29; //@line 464 "_lsprof.c"
        var $32=HEAP[$arg_addr]; //@line 464 "_lsprof.c"
        _ptrace_enter_call($30, $31, $32); //@line 464 "_lsprof.c"
        __label__ = 6; break; //@line 464 "_lsprof.c"
      case 6: // $bb5
        __label__ = 10; break; //@line 464 "_lsprof.c"
      case 7: // $bb6
        var $33=HEAP[$self_addr]; //@line 474 "_lsprof.c"
        var $34=$33; //@line 474 "_lsprof.c"
        var $35=(($34+20)&4294967295); //@line 474 "_lsprof.c"
        var $36=HEAP[$35]; //@line 474 "_lsprof.c"
        var $37=($36) & 4; //@line 474 "_lsprof.c"
        var $38=((($37))|0)!=0; //@line 474 "_lsprof.c"
        if ($38) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 474 "_lsprof.c"
      case 8: // $bb7
        var $39=HEAP[$arg_addr]; //@line 474 "_lsprof.c"
        var $40=(($39+4)&4294967295); //@line 474 "_lsprof.c"
        var $41=HEAP[$40]; //@line 474 "_lsprof.c"
        var $42=($41)==(_PyCFunction_Type); //@line 474 "_lsprof.c"
        if ($42) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 474 "_lsprof.c"
      case 9: // $bb8
        var $43=HEAP[$arg_addr]; //@line 476 "_lsprof.c"
        var $44=$43; //@line 476 "_lsprof.c"
        var $45=(($44+8)&4294967295); //@line 476 "_lsprof.c"
        var $46=HEAP[$45]; //@line 476 "_lsprof.c"
        var $47=HEAP[$self_addr]; //@line 476 "_lsprof.c"
        var $48=$46; //@line 476 "_lsprof.c"
        _ptrace_leave_call($47, $48); //@line 476 "_lsprof.c"
        __label__ = 10; break; //@line 476 "_lsprof.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 485 "_lsprof.c"
        var $49=HEAP[$0]; //@line 485 "_lsprof.c"
        HEAP[$retval]=$49; //@line 485 "_lsprof.c"
        __label__ = 11; break; //@line 485 "_lsprof.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 485 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 485 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pending_exception($pObj) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        var $1=HEAP[$pObj_addr]; //@line 491 "_lsprof.c"
        var $2=(($1+20)&4294967295); //@line 491 "_lsprof.c"
        var $3=HEAP[$2]; //@line 491 "_lsprof.c"
        var $4=($3) & 256; //@line 491 "_lsprof.c"
        var $5=((($4))|0)!=0; //@line 491 "_lsprof.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 491 "_lsprof.c"
      case 1: // $bb
        var $6=HEAP[$pObj_addr]; //@line 492 "_lsprof.c"
        var $7=(($6+20)&4294967295); //@line 492 "_lsprof.c"
        var $8=HEAP[$7]; //@line 492 "_lsprof.c"
        var $9=((($8) - 256)&4294967295); //@line 492 "_lsprof.c"
        var $10=HEAP[$pObj_addr]; //@line 492 "_lsprof.c"
        var $11=(($10+20)&4294967295); //@line 492 "_lsprof.c"
        HEAP[$11]=$9; //@line 492 "_lsprof.c"
        var $12=HEAP[_PyExc_MemoryError]; //@line 493 "_lsprof.c"
        _PyErr_SetString($12, ((__str4)&4294967295)); //@line 493 "_lsprof.c"
        HEAP[$0]=-1; //@line 495 "_lsprof.c"
        __label__ = 3; break; //@line 495 "_lsprof.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 497 "_lsprof.c"
        __label__ = 3; break; //@line 497 "_lsprof.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 495 "_lsprof.c"
        HEAP[$retval]=$13; //@line 495 "_lsprof.c"
        __label__ = 4; break; //@line 495 "_lsprof.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 495 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 495 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _statsForSubEntry($node, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $node_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $sentry=__stackBase__+16;
        var $collect=__stackBase__+20;
        var $entry1=__stackBase__+24;
        var $err=__stackBase__+28;
        var $sinfo=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$node_addr]=$node;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$node_addr]; //@line 548 "_lsprof.c"
        var $2=$1; //@line 548 "_lsprof.c"
        HEAP[$sentry]=$2; //@line 548 "_lsprof.c"
        var $3=HEAP[$arg_addr]; //@line 549 "_lsprof.c"
        var $4=$3; //@line 549 "_lsprof.c"
        HEAP[$collect]=$4; //@line 549 "_lsprof.c"
        var $5=HEAP[$sentry]; //@line 550 "_lsprof.c"
        var $6=(($5)&4294967295); //@line 550 "_lsprof.c"
        var $7=(($6)&4294967295); //@line 550 "_lsprof.c"
        var $8=HEAP[$7]; //@line 550 "_lsprof.c"
        var $9=$8; //@line 550 "_lsprof.c"
        HEAP[$entry1]=$9; //@line 550 "_lsprof.c"
        var $10=HEAP[$collect]; //@line 553 "_lsprof.c"
        var $11=(($10+8)&4294967295); //@line 553 "_lsprof.c"
        var $12=HEAP[$11]; //@line 553 "_lsprof.c"
        var $13=HEAP[$sentry]; //@line 553 "_lsprof.c"
        var $14=(($13+20)&4294967295); //@line 553 "_lsprof.c"
        var $15=HEAP[$14]; //@line 553 "_lsprof.c"
        var $16=reSign(($15), 64, 0); //@line 553 "_lsprof.c"
        var $17=($12) * ($16); //@line 553 "_lsprof.c"
        var $18=HEAP[$collect]; //@line 553 "_lsprof.c"
        var $19=(($18+8)&4294967295); //@line 553 "_lsprof.c"
        var $20=HEAP[$19]; //@line 553 "_lsprof.c"
        var $21=HEAP[$sentry]; //@line 553 "_lsprof.c"
        var $22=(($21+12)&4294967295); //@line 553 "_lsprof.c"
        var $23=HEAP[$22]; //@line 553 "_lsprof.c"
        var $24=reSign(($23), 64, 0); //@line 553 "_lsprof.c"
        var $25=($20) * ($24); //@line 553 "_lsprof.c"
        var $26=HEAP[$sentry]; //@line 553 "_lsprof.c"
        var $27=(($26+32)&4294967295); //@line 553 "_lsprof.c"
        var $28=HEAP[$27]; //@line 553 "_lsprof.c"
        var $29=HEAP[$sentry]; //@line 553 "_lsprof.c"
        var $30=(($29+28)&4294967295); //@line 553 "_lsprof.c"
        var $31=HEAP[$30]; //@line 553 "_lsprof.c"
        var $32=HEAP[$entry1]; //@line 553 "_lsprof.c"
        var $33=(($32+12)&4294967295); //@line 553 "_lsprof.c"
        var $34=HEAP[$33]; //@line 553 "_lsprof.c"
        var $35=_PyObject_CallFunction(_StatsSubEntryType, ((__str24)&4294967295), $34, $31, $28, $25, $17); //@line 553 "_lsprof.c"
        HEAP[$sinfo]=$35; //@line 553 "_lsprof.c"
        var $36=HEAP[$sinfo]; //@line 560 "_lsprof.c"
        var $37=($36)==0; //@line 560 "_lsprof.c"
        if ($37) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 560 "_lsprof.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 561 "_lsprof.c"
        __label__ = 5; break; //@line 561 "_lsprof.c"
      case 2: // $bb2
        var $38=HEAP[$collect]; //@line 562 "_lsprof.c"
        var $39=(($38+4)&4294967295); //@line 562 "_lsprof.c"
        var $40=HEAP[$39]; //@line 562 "_lsprof.c"
        var $41=HEAP[$sinfo]; //@line 562 "_lsprof.c"
        var $42=_PyList_Append($40, $41); //@line 562 "_lsprof.c"
        HEAP[$err]=$42; //@line 562 "_lsprof.c"
        var $43=HEAP[$sinfo]; //@line 563 "_lsprof.c"
        var $44=(($43)&4294967295); //@line 563 "_lsprof.c"
        var $45=HEAP[$44]; //@line 563 "_lsprof.c"
        var $46=((($45) - 1)&4294967295); //@line 563 "_lsprof.c"
        var $47=HEAP[$sinfo]; //@line 563 "_lsprof.c"
        var $48=(($47)&4294967295); //@line 563 "_lsprof.c"
        HEAP[$48]=$46; //@line 563 "_lsprof.c"
        var $49=HEAP[$sinfo]; //@line 563 "_lsprof.c"
        var $50=(($49)&4294967295); //@line 563 "_lsprof.c"
        var $51=HEAP[$50]; //@line 563 "_lsprof.c"
        var $52=((($51))|0)==0; //@line 563 "_lsprof.c"
        if ($52) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 563 "_lsprof.c"
      case 3: // $bb3
        var $53=HEAP[$sinfo]; //@line 563 "_lsprof.c"
        var $54=(($53+4)&4294967295); //@line 563 "_lsprof.c"
        var $55=HEAP[$54]; //@line 563 "_lsprof.c"
        var $56=(($55+24)&4294967295); //@line 563 "_lsprof.c"
        var $57=HEAP[$56]; //@line 563 "_lsprof.c"
        var $58=HEAP[$sinfo]; //@line 563 "_lsprof.c"
        FUNCTION_TABLE[$57]($58); //@line 563 "_lsprof.c"
        __label__ = 4; break; //@line 563 "_lsprof.c"
      case 4: // $bb4
        var $59=HEAP[$err]; //@line 564 "_lsprof.c"
        HEAP[$0]=$59; //@line 564 "_lsprof.c"
        __label__ = 5; break; //@line 564 "_lsprof.c"
      case 5: // $bb5
        var $60=HEAP[$0]; //@line 561 "_lsprof.c"
        HEAP[$retval]=$60; //@line 561 "_lsprof.c"
        __label__ = 6; break; //@line 561 "_lsprof.c"
      case 6: // $return
        var $retval6=HEAP[$retval]; //@line 561 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 561 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _statsForEntry($node, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $node_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $entry1=__stackBase__+16;
        var $collect=__stackBase__+20;
        var $info=__stackBase__+24;
        var $err=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$node_addr]=$node;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$node_addr]; //@line 569 "_lsprof.c"
        var $2=$1; //@line 569 "_lsprof.c"
        HEAP[$entry1]=$2; //@line 569 "_lsprof.c"
        var $3=HEAP[$arg_addr]; //@line 570 "_lsprof.c"
        var $4=$3; //@line 570 "_lsprof.c"
        HEAP[$collect]=$4; //@line 570 "_lsprof.c"
        var $5=HEAP[$entry1]; //@line 573 "_lsprof.c"
        var $6=(($5+32)&4294967295); //@line 573 "_lsprof.c"
        var $7=HEAP[$6]; //@line 573 "_lsprof.c"
        var $8=((($7))|0)==0; //@line 573 "_lsprof.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 573 "_lsprof.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 574 "_lsprof.c"
        __label__ = 18; break; //@line 574 "_lsprof.c"
      case 2: // $bb2
        var $9=HEAP[$entry1]; //@line 576 "_lsprof.c"
        var $10=(($9+44)&4294967295); //@line 576 "_lsprof.c"
        var $11=HEAP[$10]; //@line 576 "_lsprof.c"
        var $12=($11)!=0; //@line 576 "_lsprof.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 576 "_lsprof.c"
      case 3: // $bb3
        var $13=_PyList_New(0); //@line 577 "_lsprof.c"
        var $14=HEAP[$collect]; //@line 577 "_lsprof.c"
        var $15=(($14+4)&4294967295); //@line 577 "_lsprof.c"
        HEAP[$15]=$13; //@line 577 "_lsprof.c"
        var $16=HEAP[$collect]; //@line 578 "_lsprof.c"
        var $17=(($16+4)&4294967295); //@line 578 "_lsprof.c"
        var $18=HEAP[$17]; //@line 578 "_lsprof.c"
        var $19=($18)==0; //@line 578 "_lsprof.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 578 "_lsprof.c"
      case 4: // $bb4
        HEAP[$0]=-1; //@line 579 "_lsprof.c"
        __label__ = 18; break; //@line 579 "_lsprof.c"
      case 5: // $bb5
        var $20=HEAP[$entry1]; //@line 580 "_lsprof.c"
        var $21=(($20+44)&4294967295); //@line 580 "_lsprof.c"
        var $22=HEAP[$21]; //@line 580 "_lsprof.c"
        var $23=HEAP[$collect]; //@line 580 "_lsprof.c"
        var $24=$23; //@line 580 "_lsprof.c"
        var $25=_RotatingTree_Enum($22, (FUNCTION_TABLE_OFFSET + 6), $24); //@line 580 "_lsprof.c"
        var $26=((($25))|0)!=0; //@line 580 "_lsprof.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 580 "_lsprof.c"
      case 6: // $bb6
        var $27=HEAP[$collect]; //@line 582 "_lsprof.c"
        var $28=(($27+4)&4294967295); //@line 582 "_lsprof.c"
        var $29=HEAP[$28]; //@line 582 "_lsprof.c"
        var $30=(($29)&4294967295); //@line 582 "_lsprof.c"
        var $31=HEAP[$30]; //@line 582 "_lsprof.c"
        var $32=((($31) - 1)&4294967295); //@line 582 "_lsprof.c"
        var $33=(($29)&4294967295); //@line 582 "_lsprof.c"
        HEAP[$33]=$32; //@line 582 "_lsprof.c"
        var $34=(($29)&4294967295); //@line 582 "_lsprof.c"
        var $35=HEAP[$34]; //@line 582 "_lsprof.c"
        var $36=((($35))|0)==0; //@line 582 "_lsprof.c"
        if ($36) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 582 "_lsprof.c"
      case 7: // $bb7
        var $37=HEAP[$collect]; //@line 582 "_lsprof.c"
        var $38=(($37+4)&4294967295); //@line 582 "_lsprof.c"
        var $39=HEAP[$38]; //@line 582 "_lsprof.c"
        var $40=(($39+4)&4294967295); //@line 582 "_lsprof.c"
        var $41=HEAP[$40]; //@line 582 "_lsprof.c"
        var $42=(($41+24)&4294967295); //@line 582 "_lsprof.c"
        var $43=HEAP[$42]; //@line 582 "_lsprof.c"
        var $44=HEAP[$collect]; //@line 582 "_lsprof.c"
        var $45=(($44+4)&4294967295); //@line 582 "_lsprof.c"
        var $46=HEAP[$45]; //@line 582 "_lsprof.c"
        FUNCTION_TABLE[$43]($46); //@line 582 "_lsprof.c"
        __label__ = 8; break; //@line 582 "_lsprof.c"
      case 8: // $bb8
        HEAP[$0]=-1; //@line 583 "_lsprof.c"
        __label__ = 18; break; //@line 583 "_lsprof.c"
      case 9: // $bb9
        __label__ = 11; break; //@line 583 "_lsprof.c"
      case 10: // $bb10
        var $47=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 587 "_lsprof.c"
        var $48=((($47) + 1)&4294967295); //@line 587 "_lsprof.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$48; //@line 587 "_lsprof.c"
        var $49=HEAP[$collect]; //@line 588 "_lsprof.c"
        var $50=(($49+4)&4294967295); //@line 588 "_lsprof.c"
        HEAP[$50]=__Py_NoneStruct; //@line 588 "_lsprof.c"
        __label__ = 11; break; //@line 588 "_lsprof.c"
      case 11: // $bb11
        var $51=HEAP[$collect]; //@line 591 "_lsprof.c"
        var $52=(($51+4)&4294967295); //@line 591 "_lsprof.c"
        var $53=HEAP[$52]; //@line 591 "_lsprof.c"
        var $54=HEAP[$collect]; //@line 591 "_lsprof.c"
        var $55=(($54+8)&4294967295); //@line 591 "_lsprof.c"
        var $56=HEAP[$55]; //@line 591 "_lsprof.c"
        var $57=HEAP[$entry1]; //@line 591 "_lsprof.c"
        var $58=(($57+24)&4294967295); //@line 591 "_lsprof.c"
        var $59=HEAP[$58]; //@line 591 "_lsprof.c"
        var $60=reSign(($59), 64, 0); //@line 591 "_lsprof.c"
        var $61=($56) * ($60); //@line 591 "_lsprof.c"
        var $62=HEAP[$collect]; //@line 591 "_lsprof.c"
        var $63=(($62+8)&4294967295); //@line 591 "_lsprof.c"
        var $64=HEAP[$63]; //@line 591 "_lsprof.c"
        var $65=HEAP[$entry1]; //@line 591 "_lsprof.c"
        var $66=(($65+16)&4294967295); //@line 591 "_lsprof.c"
        var $67=HEAP[$66]; //@line 591 "_lsprof.c"
        var $68=reSign(($67), 64, 0); //@line 591 "_lsprof.c"
        var $69=($64) * ($68); //@line 591 "_lsprof.c"
        var $70=HEAP[$entry1]; //@line 591 "_lsprof.c"
        var $71=(($70+36)&4294967295); //@line 591 "_lsprof.c"
        var $72=HEAP[$71]; //@line 591 "_lsprof.c"
        var $73=HEAP[$entry1]; //@line 591 "_lsprof.c"
        var $74=(($73+32)&4294967295); //@line 591 "_lsprof.c"
        var $75=HEAP[$74]; //@line 591 "_lsprof.c"
        var $76=HEAP[$entry1]; //@line 591 "_lsprof.c"
        var $77=(($76+12)&4294967295); //@line 591 "_lsprof.c"
        var $78=HEAP[$77]; //@line 591 "_lsprof.c"
        var $79=_PyObject_CallFunction(_StatsEntryType, ((__str25)&4294967295), $78, $75, $72, $69, $61, $53); //@line 591 "_lsprof.c"
        HEAP[$info]=$79; //@line 591 "_lsprof.c"
        var $80=HEAP[$collect]; //@line 599 "_lsprof.c"
        var $81=(($80+4)&4294967295); //@line 599 "_lsprof.c"
        var $82=HEAP[$81]; //@line 599 "_lsprof.c"
        var $83=(($82)&4294967295); //@line 599 "_lsprof.c"
        var $84=HEAP[$83]; //@line 599 "_lsprof.c"
        var $85=((($84) - 1)&4294967295); //@line 599 "_lsprof.c"
        var $86=(($82)&4294967295); //@line 599 "_lsprof.c"
        HEAP[$86]=$85; //@line 599 "_lsprof.c"
        var $87=(($82)&4294967295); //@line 599 "_lsprof.c"
        var $88=HEAP[$87]; //@line 599 "_lsprof.c"
        var $89=((($88))|0)==0; //@line 599 "_lsprof.c"
        if ($89) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 599 "_lsprof.c"
      case 12: // $bb12
        var $90=HEAP[$collect]; //@line 599 "_lsprof.c"
        var $91=(($90+4)&4294967295); //@line 599 "_lsprof.c"
        var $92=HEAP[$91]; //@line 599 "_lsprof.c"
        var $93=(($92+4)&4294967295); //@line 599 "_lsprof.c"
        var $94=HEAP[$93]; //@line 599 "_lsprof.c"
        var $95=(($94+24)&4294967295); //@line 599 "_lsprof.c"
        var $96=HEAP[$95]; //@line 599 "_lsprof.c"
        var $97=HEAP[$collect]; //@line 599 "_lsprof.c"
        var $98=(($97+4)&4294967295); //@line 599 "_lsprof.c"
        var $99=HEAP[$98]; //@line 599 "_lsprof.c"
        FUNCTION_TABLE[$96]($99); //@line 599 "_lsprof.c"
        __label__ = 13; break; //@line 599 "_lsprof.c"
      case 13: // $bb13
        var $100=HEAP[$info]; //@line 600 "_lsprof.c"
        var $101=($100)==0; //@line 600 "_lsprof.c"
        if ($101) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 600 "_lsprof.c"
      case 14: // $bb14
        HEAP[$0]=-1; //@line 601 "_lsprof.c"
        __label__ = 18; break; //@line 601 "_lsprof.c"
      case 15: // $bb15
        var $102=HEAP[$collect]; //@line 602 "_lsprof.c"
        var $103=(($102)&4294967295); //@line 602 "_lsprof.c"
        var $104=HEAP[$103]; //@line 602 "_lsprof.c"
        var $105=HEAP[$info]; //@line 602 "_lsprof.c"
        var $106=_PyList_Append($104, $105); //@line 602 "_lsprof.c"
        HEAP[$err]=$106; //@line 602 "_lsprof.c"
        var $107=HEAP[$info]; //@line 603 "_lsprof.c"
        var $108=(($107)&4294967295); //@line 603 "_lsprof.c"
        var $109=HEAP[$108]; //@line 603 "_lsprof.c"
        var $110=((($109) - 1)&4294967295); //@line 603 "_lsprof.c"
        var $111=HEAP[$info]; //@line 603 "_lsprof.c"
        var $112=(($111)&4294967295); //@line 603 "_lsprof.c"
        HEAP[$112]=$110; //@line 603 "_lsprof.c"
        var $113=HEAP[$info]; //@line 603 "_lsprof.c"
        var $114=(($113)&4294967295); //@line 603 "_lsprof.c"
        var $115=HEAP[$114]; //@line 603 "_lsprof.c"
        var $116=((($115))|0)==0; //@line 603 "_lsprof.c"
        if ($116) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 603 "_lsprof.c"
      case 16: // $bb16
        var $117=HEAP[$info]; //@line 603 "_lsprof.c"
        var $118=(($117+4)&4294967295); //@line 603 "_lsprof.c"
        var $119=HEAP[$118]; //@line 603 "_lsprof.c"
        var $120=(($119+24)&4294967295); //@line 603 "_lsprof.c"
        var $121=HEAP[$120]; //@line 603 "_lsprof.c"
        var $122=HEAP[$info]; //@line 603 "_lsprof.c"
        FUNCTION_TABLE[$121]($122); //@line 603 "_lsprof.c"
        __label__ = 17; break; //@line 603 "_lsprof.c"
      case 17: // $bb17
        var $123=HEAP[$err]; //@line 604 "_lsprof.c"
        HEAP[$0]=$123; //@line 604 "_lsprof.c"
        __label__ = 18; break; //@line 604 "_lsprof.c"
      case 18: // $bb18
        var $124=HEAP[$0]; //@line 574 "_lsprof.c"
        HEAP[$retval]=$124; //@line 574 "_lsprof.c"
        __label__ = 19; break; //@line 574 "_lsprof.c"
      case 19: // $return
        var $retval19=HEAP[$retval]; //@line 574 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 574 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_getstats($pObj, $noarg) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $noarg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $collect=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        HEAP[$noarg_addr]=$noarg;
        var $1=HEAP[$pObj_addr]; //@line 635 "_lsprof.c"
        var $2=_pending_exception($1); //@line 635 "_lsprof.c"
        var $3=((($2))|0)!=0; //@line 635 "_lsprof.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 635 "_lsprof.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 636 "_lsprof.c"
        __label__ = 14; break; //@line 636 "_lsprof.c"
      case 2: // $bb1
        var $4=HEAP[$pObj_addr]; //@line 637 "_lsprof.c"
        var $5=(($4+24)&4294967295); //@line 637 "_lsprof.c"
        var $6=HEAP[$5]; //@line 637 "_lsprof.c"
        var $7=($6)==0; //@line 637 "_lsprof.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 637 "_lsprof.c"
      case 3: // $bb2
        var $8=_hpTimerUnit(); //@line 638 "_lsprof.c"
        var $9=(($collect+8)&4294967295); //@line 638 "_lsprof.c"
        HEAP[$9]=$8; //@line 638 "_lsprof.c"
        __label__ = 7; break; //@line 638 "_lsprof.c"
      case 4: // $bb3
        var $10=HEAP[$pObj_addr]; //@line 639 "_lsprof.c"
        var $11=(($10+28)&4294967295); //@line 639 "_lsprof.c"
        var $12=HEAP[$11]; //@line 639 "_lsprof.c"
        var $13=($12) > 0; //@line 639 "_lsprof.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 639 "_lsprof.c"
      case 5: // $bb4
        var $14=HEAP[$pObj_addr]; //@line 640 "_lsprof.c"
        var $15=(($14+28)&4294967295); //@line 640 "_lsprof.c"
        var $16=HEAP[$15]; //@line 640 "_lsprof.c"
        var $17=(($collect+8)&4294967295); //@line 640 "_lsprof.c"
        HEAP[$17]=$16; //@line 640 "_lsprof.c"
        __label__ = 7; break; //@line 640 "_lsprof.c"
      case 6: // $bb5
        var $18=(($collect+8)&4294967295); //@line 642 "_lsprof.c"
        HEAP[$18]=2.3283064365386963e-10; //@line 642 "_lsprof.c"
        __label__ = 7; break; //@line 642 "_lsprof.c"
      case 7: // $bb6
        var $19=_PyList_New(0); //@line 643 "_lsprof.c"
        var $20=(($collect)&4294967295); //@line 643 "_lsprof.c"
        HEAP[$20]=$19; //@line 643 "_lsprof.c"
        var $21=(($collect)&4294967295); //@line 644 "_lsprof.c"
        var $22=HEAP[$21]; //@line 644 "_lsprof.c"
        var $23=($22)==0; //@line 644 "_lsprof.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 644 "_lsprof.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 645 "_lsprof.c"
        __label__ = 14; break; //@line 645 "_lsprof.c"
      case 9: // $bb8
        var $24=HEAP[$pObj_addr]; //@line 646 "_lsprof.c"
        var $25=(($24+8)&4294967295); //@line 646 "_lsprof.c"
        var $26=HEAP[$25]; //@line 646 "_lsprof.c"
        var $collect9=$collect; //@line 646 "_lsprof.c"
        var $27=_RotatingTree_Enum($26, (FUNCTION_TABLE_OFFSET + 8), $collect9); //@line 646 "_lsprof.c"
        var $28=((($27))|0)!=0; //@line 646 "_lsprof.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 646 "_lsprof.c"
      case 10: // $bb10
        var $29=(($collect)&4294967295); //@line 648 "_lsprof.c"
        var $30=HEAP[$29]; //@line 648 "_lsprof.c"
        var $31=(($30)&4294967295); //@line 648 "_lsprof.c"
        var $32=HEAP[$31]; //@line 648 "_lsprof.c"
        var $33=((($32) - 1)&4294967295); //@line 648 "_lsprof.c"
        var $34=(($30)&4294967295); //@line 648 "_lsprof.c"
        HEAP[$34]=$33; //@line 648 "_lsprof.c"
        var $35=(($30)&4294967295); //@line 648 "_lsprof.c"
        var $36=HEAP[$35]; //@line 648 "_lsprof.c"
        var $37=((($36))|0)==0; //@line 648 "_lsprof.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 648 "_lsprof.c"
      case 11: // $bb11
        var $38=(($collect)&4294967295); //@line 648 "_lsprof.c"
        var $39=HEAP[$38]; //@line 648 "_lsprof.c"
        var $40=(($39+4)&4294967295); //@line 648 "_lsprof.c"
        var $41=HEAP[$40]; //@line 648 "_lsprof.c"
        var $42=(($41+24)&4294967295); //@line 648 "_lsprof.c"
        var $43=HEAP[$42]; //@line 648 "_lsprof.c"
        var $44=(($collect)&4294967295); //@line 648 "_lsprof.c"
        var $45=HEAP[$44]; //@line 648 "_lsprof.c"
        FUNCTION_TABLE[$43]($45); //@line 648 "_lsprof.c"
        __label__ = 12; break; //@line 648 "_lsprof.c"
      case 12: // $bb12
        HEAP[$0]=0; //@line 649 "_lsprof.c"
        __label__ = 14; break; //@line 649 "_lsprof.c"
      case 13: // $bb13
        var $46=(($collect)&4294967295); //@line 651 "_lsprof.c"
        var $47=HEAP[$46]; //@line 651 "_lsprof.c"
        HEAP[$0]=$47; //@line 651 "_lsprof.c"
        __label__ = 14; break; //@line 651 "_lsprof.c"
      case 14: // $bb14
        var $48=HEAP[$0]; //@line 636 "_lsprof.c"
        HEAP[$retval]=$48; //@line 636 "_lsprof.c"
        __label__ = 15; break; //@line 636 "_lsprof.c"
      case 15: // $return
        var $retval15=HEAP[$retval]; //@line 636 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 636 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _setSubcalls($pObj, $nvalue) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $nvalue_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        HEAP[$nvalue_addr]=$nvalue;
        var $1=HEAP[$nvalue_addr]; //@line 657 "_lsprof.c"
        var $2=((($1))|0)==0; //@line 657 "_lsprof.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 657 "_lsprof.c"
      case 1: // $bb
        var $3=HEAP[$pObj_addr]; //@line 658 "_lsprof.c"
        var $4=(($3+20)&4294967295); //@line 658 "_lsprof.c"
        var $5=HEAP[$4]; //@line 658 "_lsprof.c"
        var $6=($5) & -3; //@line 658 "_lsprof.c"
        var $7=HEAP[$pObj_addr]; //@line 658 "_lsprof.c"
        var $8=(($7+20)&4294967295); //@line 658 "_lsprof.c"
        HEAP[$8]=$6; //@line 658 "_lsprof.c"
        __label__ = 4; break; //@line 658 "_lsprof.c"
      case 2: // $bb1
        var $9=HEAP[$nvalue_addr]; //@line 659 "_lsprof.c"
        var $10=((($9))|0) > 0; //@line 659 "_lsprof.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 659 "_lsprof.c"
      case 3: // $bb2
        var $11=HEAP[$pObj_addr]; //@line 660 "_lsprof.c"
        var $12=(($11+20)&4294967295); //@line 660 "_lsprof.c"
        var $13=HEAP[$12]; //@line 660 "_lsprof.c"
        var $14=($13) | 2; //@line 660 "_lsprof.c"
        var $15=HEAP[$pObj_addr]; //@line 660 "_lsprof.c"
        var $16=(($15+20)&4294967295); //@line 660 "_lsprof.c"
        HEAP[$16]=$14; //@line 660 "_lsprof.c"
        __label__ = 4; break; //@line 660 "_lsprof.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 661 "_lsprof.c"
        var $17=HEAP[$0]; //@line 661 "_lsprof.c"
        HEAP[$retval]=$17; //@line 661 "_lsprof.c"
        __label__ = 5; break; //@line 661 "_lsprof.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 661 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 661 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _setBuiltins($pObj, $nvalue) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $nvalue_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        HEAP[$nvalue_addr]=$nvalue;
        var $1=HEAP[$nvalue_addr]; //@line 667 "_lsprof.c"
        var $2=((($1))|0)==0; //@line 667 "_lsprof.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 667 "_lsprof.c"
      case 1: // $bb
        var $3=HEAP[$pObj_addr]; //@line 668 "_lsprof.c"
        var $4=(($3+20)&4294967295); //@line 668 "_lsprof.c"
        var $5=HEAP[$4]; //@line 668 "_lsprof.c"
        var $6=($5) & -5; //@line 668 "_lsprof.c"
        var $7=HEAP[$pObj_addr]; //@line 668 "_lsprof.c"
        var $8=(($7+20)&4294967295); //@line 668 "_lsprof.c"
        HEAP[$8]=$6; //@line 668 "_lsprof.c"
        __label__ = 4; break; //@line 668 "_lsprof.c"
      case 2: // $bb1
        var $9=HEAP[$nvalue_addr]; //@line 669 "_lsprof.c"
        var $10=((($9))|0) > 0; //@line 669 "_lsprof.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 669 "_lsprof.c"
      case 3: // $bb2
        var $11=HEAP[$pObj_addr]; //@line 675 "_lsprof.c"
        var $12=(($11+20)&4294967295); //@line 675 "_lsprof.c"
        var $13=HEAP[$12]; //@line 675 "_lsprof.c"
        var $14=($13) | 4; //@line 675 "_lsprof.c"
        var $15=HEAP[$pObj_addr]; //@line 675 "_lsprof.c"
        var $16=(($15+20)&4294967295); //@line 675 "_lsprof.c"
        HEAP[$16]=$14; //@line 675 "_lsprof.c"
        __label__ = 4; break; //@line 675 "_lsprof.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 678 "_lsprof.c"
        var $17=HEAP[$0]; //@line 678 "_lsprof.c"
        HEAP[$retval]=$17; //@line 678 "_lsprof.c"
        __label__ = 5; break; //@line 678 "_lsprof.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 678 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 678 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_enable($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $subcalls=__stackBase__+20;
        var $builtins=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$subcalls]=-1; //@line 694 "_lsprof.c"
        HEAP[$builtins]=-1; //@line 695 "_lsprof.c"
        var $1=HEAP[$args_addr]; //@line 697 "_lsprof.c"
        var $2=HEAP[$kwds_addr]; //@line 697 "_lsprof.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str26)&4294967295), ((_kwlist_9138)&4294967295), $subcalls, $builtins); //@line 697 "_lsprof.c"
        var $4=((($3))|0)==0; //@line 697 "_lsprof.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 697 "_lsprof.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 699 "_lsprof.c"
        __label__ = 6; break; //@line 699 "_lsprof.c"
      case 2: // $bb1
        var $5=HEAP[$subcalls]; //@line 700 "_lsprof.c"
        var $6=HEAP[$self_addr]; //@line 700 "_lsprof.c"
        var $7=_setSubcalls($6, $5); //@line 700 "_lsprof.c"
        var $8=((($7))|0) < 0; //@line 700 "_lsprof.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 700 "_lsprof.c"
      case 3: // $bb2
        var $9=HEAP[$builtins]; //@line 700 "_lsprof.c"
        var $10=HEAP[$self_addr]; //@line 700 "_lsprof.c"
        var $11=_setBuiltins($10, $9); //@line 700 "_lsprof.c"
        var $12=((($11))|0) < 0; //@line 700 "_lsprof.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 700 "_lsprof.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 701 "_lsprof.c"
        __label__ = 6; break; //@line 701 "_lsprof.c"
      case 5: // $bb4
        var $13=HEAP[$self_addr]; //@line 702 "_lsprof.c"
        var $14=$13; //@line 702 "_lsprof.c"
        _PyEval_SetProfile((FUNCTION_TABLE_OFFSET + 10), $14); //@line 702 "_lsprof.c"
        var $15=HEAP[$self_addr]; //@line 703 "_lsprof.c"
        var $16=(($15+20)&4294967295); //@line 703 "_lsprof.c"
        var $17=HEAP[$16]; //@line 703 "_lsprof.c"
        var $18=($17) | 1; //@line 703 "_lsprof.c"
        var $19=HEAP[$self_addr]; //@line 703 "_lsprof.c"
        var $20=(($19+20)&4294967295); //@line 703 "_lsprof.c"
        HEAP[$20]=$18; //@line 703 "_lsprof.c"
        var $21=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 704 "_lsprof.c"
        var $22=((($21) + 1)&4294967295); //@line 704 "_lsprof.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$22; //@line 704 "_lsprof.c"
        HEAP[$0]=__Py_NoneStruct; //@line 705 "_lsprof.c"
        __label__ = 6; break; //@line 705 "_lsprof.c"
      case 6: // $bb5
        var $23=HEAP[$0]; //@line 699 "_lsprof.c"
        HEAP[$retval]=$23; //@line 699 "_lsprof.c"
        __label__ = 7; break; //@line 699 "_lsprof.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 699 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 699 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _flush_unmatched($pObj) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $pContext=__stackBase__+4;
        var $profEntry=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        __label__ = 6; break; //@line 711 "_lsprof.c"
      case 1: // $bb
        var $0=HEAP[$pObj_addr]; //@line 712 "_lsprof.c"
        var $1=(($0+12)&4294967295); //@line 712 "_lsprof.c"
        var $2=HEAP[$1]; //@line 712 "_lsprof.c"
        HEAP[$pContext]=$2; //@line 712 "_lsprof.c"
        var $3=HEAP[$pContext]; //@line 713 "_lsprof.c"
        var $4=(($3+20)&4294967295); //@line 713 "_lsprof.c"
        var $5=HEAP[$4]; //@line 713 "_lsprof.c"
        HEAP[$profEntry]=$5; //@line 713 "_lsprof.c"
        var $6=HEAP[$profEntry]; //@line 714 "_lsprof.c"
        var $7=($6)!=0; //@line 714 "_lsprof.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 714 "_lsprof.c"
      case 2: // $bb1
        var $8=HEAP[$pObj_addr]; //@line 715 "_lsprof.c"
        var $9=HEAP[$pContext]; //@line 715 "_lsprof.c"
        var $10=HEAP[$profEntry]; //@line 715 "_lsprof.c"
        _Stop($8, $9, $10); //@line 715 "_lsprof.c"
        __label__ = 4; break; //@line 715 "_lsprof.c"
      case 3: // $bb2
        var $11=HEAP[$pContext]; //@line 717 "_lsprof.c"
        var $12=(($11+16)&4294967295); //@line 717 "_lsprof.c"
        var $13=HEAP[$12]; //@line 717 "_lsprof.c"
        var $14=HEAP[$pObj_addr]; //@line 717 "_lsprof.c"
        var $15=(($14+12)&4294967295); //@line 717 "_lsprof.c"
        HEAP[$15]=$13; //@line 717 "_lsprof.c"
        __label__ = 4; break; //@line 717 "_lsprof.c"
      case 4: // $bb3
        var $16=HEAP[$pContext]; //@line 718 "_lsprof.c"
        var $17=($16)!=0; //@line 718 "_lsprof.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 718 "_lsprof.c"
      case 5: // $bb4
        var $18=HEAP[$pContext]; //@line 719 "_lsprof.c"
        var $19=$18; //@line 719 "_lsprof.c"
        _free($19); //@line 719 "_lsprof.c"
        __label__ = 6; break; //@line 719 "_lsprof.c"
      case 6: // $bb5
        var $20=HEAP[$pObj_addr]; //@line 711 "_lsprof.c"
        var $21=(($20+12)&4294967295); //@line 711 "_lsprof.c"
        var $22=HEAP[$21]; //@line 711 "_lsprof.c"
        var $23=($22)!=0; //@line 711 "_lsprof.c"
        if ($23) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 711 "_lsprof.c"
      case 7: // $bb6
        __label__ = 8; break; //@line 722 "_lsprof.c"
      case 8: // $return
        STACKTOP = __stackBase__;
        return; //@line 722 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_disable($self, $noarg) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $noarg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$noarg_addr]=$noarg;
        var $1=HEAP[$self_addr]; //@line 733 "_lsprof.c"
        var $2=(($1+20)&4294967295); //@line 733 "_lsprof.c"
        var $3=HEAP[$2]; //@line 733 "_lsprof.c"
        var $4=($3) & -2; //@line 733 "_lsprof.c"
        var $5=HEAP[$self_addr]; //@line 733 "_lsprof.c"
        var $6=(($5+20)&4294967295); //@line 733 "_lsprof.c"
        HEAP[$6]=$4; //@line 733 "_lsprof.c"
        _PyEval_SetProfile(0, 0); //@line 734 "_lsprof.c"
        var $7=HEAP[$self_addr]; //@line 735 "_lsprof.c"
        _flush_unmatched($7); //@line 735 "_lsprof.c"
        var $8=HEAP[$self_addr]; //@line 736 "_lsprof.c"
        var $9=_pending_exception($8); //@line 736 "_lsprof.c"
        var $10=((($9))|0)!=0; //@line 736 "_lsprof.c"
        if ($10) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 736 "_lsprof.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 737 "_lsprof.c"
        __label__ = 3; break; //@line 737 "_lsprof.c"
      case 2: // $bb1
        var $11=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 738 "_lsprof.c"
        var $12=((($11) + 1)&4294967295); //@line 738 "_lsprof.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$12; //@line 738 "_lsprof.c"
        HEAP[$0]=__Py_NoneStruct; //@line 739 "_lsprof.c"
        __label__ = 3; break; //@line 739 "_lsprof.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 737 "_lsprof.c"
        HEAP[$retval]=$13; //@line 737 "_lsprof.c"
        __label__ = 4; break; //@line 737 "_lsprof.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 737 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 737 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_clear($pObj, $noarg) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $noarg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        HEAP[$noarg_addr]=$noarg;
        var $1=HEAP[$pObj_addr]; //@line 751 "_lsprof.c"
        _clearEntries($1); //@line 751 "_lsprof.c"
        var $2=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 752 "_lsprof.c"
        var $3=((($2) + 1)&4294967295); //@line 752 "_lsprof.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$3; //@line 752 "_lsprof.c"
        HEAP[$0]=__Py_NoneStruct; //@line 753 "_lsprof.c"
        var $4=HEAP[$0]; //@line 753 "_lsprof.c"
        HEAP[$retval]=$4; //@line 753 "_lsprof.c"
        __label__ = 1; break; //@line 753 "_lsprof.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 753 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 753 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_dealloc($op) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $op_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$op_addr]=$op;
        var $0=HEAP[$op_addr]; //@line 759 "_lsprof.c"
        var $1=(($0+20)&4294967295); //@line 759 "_lsprof.c"
        var $2=HEAP[$1]; //@line 759 "_lsprof.c"
        var $3=($2) & 1; //@line 759 "_lsprof.c"
        var $4=((($3)) & 255); //@line 759 "_lsprof.c"
        var $toBool=reSign(($4), 8, 0)!=0; //@line 759 "_lsprof.c"
        if ($toBool) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 759 "_lsprof.c"
      case 1: // $bb
        _PyEval_SetProfile(0, 0); //@line 760 "_lsprof.c"
        __label__ = 2; break; //@line 760 "_lsprof.c"
      case 2: // $bb1
        var $5=HEAP[$op_addr]; //@line 761 "_lsprof.c"
        _flush_unmatched($5); //@line 761 "_lsprof.c"
        var $6=HEAP[$op_addr]; //@line 762 "_lsprof.c"
        _clearEntries($6); //@line 762 "_lsprof.c"
        var $7=HEAP[$op_addr]; //@line 763 "_lsprof.c"
        var $8=(($7+24)&4294967295); //@line 763 "_lsprof.c"
        var $9=HEAP[$8]; //@line 763 "_lsprof.c"
        var $10=($9)!=0; //@line 763 "_lsprof.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 763 "_lsprof.c"
      case 3: // $bb2
        var $11=HEAP[$op_addr]; //@line 763 "_lsprof.c"
        var $12=(($11+24)&4294967295); //@line 763 "_lsprof.c"
        var $13=HEAP[$12]; //@line 763 "_lsprof.c"
        var $14=(($13)&4294967295); //@line 763 "_lsprof.c"
        var $15=HEAP[$14]; //@line 763 "_lsprof.c"
        var $16=((($15) - 1)&4294967295); //@line 763 "_lsprof.c"
        var $17=(($13)&4294967295); //@line 763 "_lsprof.c"
        HEAP[$17]=$16; //@line 763 "_lsprof.c"
        var $18=(($13)&4294967295); //@line 763 "_lsprof.c"
        var $19=HEAP[$18]; //@line 763 "_lsprof.c"
        var $20=((($19))|0)==0; //@line 763 "_lsprof.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 763 "_lsprof.c"
      case 4: // $bb3
        var $21=HEAP[$op_addr]; //@line 763 "_lsprof.c"
        var $22=(($21+24)&4294967295); //@line 763 "_lsprof.c"
        var $23=HEAP[$22]; //@line 763 "_lsprof.c"
        var $24=(($23+4)&4294967295); //@line 763 "_lsprof.c"
        var $25=HEAP[$24]; //@line 763 "_lsprof.c"
        var $26=(($25+24)&4294967295); //@line 763 "_lsprof.c"
        var $27=HEAP[$26]; //@line 763 "_lsprof.c"
        var $28=HEAP[$op_addr]; //@line 763 "_lsprof.c"
        var $29=(($28+24)&4294967295); //@line 763 "_lsprof.c"
        var $30=HEAP[$29]; //@line 763 "_lsprof.c"
        FUNCTION_TABLE[$27]($30); //@line 763 "_lsprof.c"
        __label__ = 5; break; //@line 763 "_lsprof.c"
      case 5: // $bb4
        var $31=HEAP[$op_addr]; //@line 764 "_lsprof.c"
        var $32=$31; //@line 764 "_lsprof.c"
        var $33=(($32+4)&4294967295); //@line 764 "_lsprof.c"
        var $34=HEAP[$33]; //@line 764 "_lsprof.c"
        var $35=(($34+160)&4294967295); //@line 764 "_lsprof.c"
        var $36=HEAP[$35]; //@line 764 "_lsprof.c"
        var $37=HEAP[$op_addr]; //@line 764 "_lsprof.c"
        var $38=$37; //@line 764 "_lsprof.c"
        FUNCTION_TABLE[$36]($38); //@line 764 "_lsprof.c"
        __label__ = 6; break; //@line 765 "_lsprof.c"
      case 6: // $return
        STACKTOP = __stackBase__;
        return; //@line 765 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_init($pObj, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $o=__stackBase__+20;
        var $timer=__stackBase__+24;
        var $timeunit=__stackBase__+28;
        var $subcalls=__stackBase__+36;
        var $builtins=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$pObj_addr]=$pObj;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$timer]=0; //@line 771 "_lsprof.c"
        HEAP[$timeunit]=0; //@line 772 "_lsprof.c"
        HEAP[$subcalls]=1; //@line 773 "_lsprof.c"
        HEAP[$builtins]=1; //@line 775 "_lsprof.c"
        var $1=HEAP[$args_addr]; //@line 782 "_lsprof.c"
        var $2=HEAP[$kw_addr]; //@line 782 "_lsprof.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str29)&4294967295), ((_kwlist_9228)&4294967295), $timer, $timeunit, $subcalls, $builtins); //@line 782 "_lsprof.c"
        var $4=((($3))|0)==0; //@line 782 "_lsprof.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 782 "_lsprof.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 785 "_lsprof.c"
        __label__ = 11; break; //@line 785 "_lsprof.c"
      case 2: // $bb1
        var $5=HEAP[$subcalls]; //@line 787 "_lsprof.c"
        var $6=HEAP[$pObj_addr]; //@line 787 "_lsprof.c"
        var $7=_setSubcalls($6, $5); //@line 787 "_lsprof.c"
        var $8=((($7))|0) < 0; //@line 787 "_lsprof.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 787 "_lsprof.c"
      case 3: // $bb2
        var $9=HEAP[$builtins]; //@line 787 "_lsprof.c"
        var $10=HEAP[$pObj_addr]; //@line 787 "_lsprof.c"
        var $11=_setBuiltins($10, $9); //@line 787 "_lsprof.c"
        var $12=((($11))|0) < 0; //@line 787 "_lsprof.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 787 "_lsprof.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 788 "_lsprof.c"
        __label__ = 11; break; //@line 788 "_lsprof.c"
      case 5: // $bb4
        var $13=HEAP[$pObj_addr]; //@line 789 "_lsprof.c"
        var $14=(($13+24)&4294967295); //@line 789 "_lsprof.c"
        var $15=HEAP[$14]; //@line 789 "_lsprof.c"
        HEAP[$o]=$15; //@line 789 "_lsprof.c"
        var $16=HEAP[$timer]; //@line 790 "_lsprof.c"
        var $17=HEAP[$pObj_addr]; //@line 790 "_lsprof.c"
        var $18=(($17+24)&4294967295); //@line 790 "_lsprof.c"
        HEAP[$18]=$16; //@line 790 "_lsprof.c"
        var $19=HEAP[$timer]; //@line 791 "_lsprof.c"
        var $20=($19)!=0; //@line 791 "_lsprof.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 791 "_lsprof.c"
      case 6: // $bb5
        var $21=HEAP[$timer]; //@line 791 "_lsprof.c"
        var $22=(($21)&4294967295); //@line 791 "_lsprof.c"
        var $23=HEAP[$22]; //@line 791 "_lsprof.c"
        var $24=((($23) + 1)&4294967295); //@line 791 "_lsprof.c"
        var $25=(($21)&4294967295); //@line 791 "_lsprof.c"
        HEAP[$25]=$24; //@line 791 "_lsprof.c"
        __label__ = 7; break; //@line 791 "_lsprof.c"
      case 7: // $bb6
        var $26=HEAP[$o]; //@line 792 "_lsprof.c"
        var $27=($26)!=0; //@line 792 "_lsprof.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 792 "_lsprof.c"
      case 8: // $bb7
        var $28=HEAP[$o]; //@line 792 "_lsprof.c"
        var $29=(($28)&4294967295); //@line 792 "_lsprof.c"
        var $30=HEAP[$29]; //@line 792 "_lsprof.c"
        var $31=((($30) - 1)&4294967295); //@line 792 "_lsprof.c"
        var $32=HEAP[$o]; //@line 792 "_lsprof.c"
        var $33=(($32)&4294967295); //@line 792 "_lsprof.c"
        HEAP[$33]=$31; //@line 792 "_lsprof.c"
        var $34=HEAP[$o]; //@line 792 "_lsprof.c"
        var $35=(($34)&4294967295); //@line 792 "_lsprof.c"
        var $36=HEAP[$35]; //@line 792 "_lsprof.c"
        var $37=((($36))|0)==0; //@line 792 "_lsprof.c"
        if ($37) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 792 "_lsprof.c"
      case 9: // $bb8
        var $38=HEAP[$o]; //@line 792 "_lsprof.c"
        var $39=(($38+4)&4294967295); //@line 792 "_lsprof.c"
        var $40=HEAP[$39]; //@line 792 "_lsprof.c"
        var $41=(($40+24)&4294967295); //@line 792 "_lsprof.c"
        var $42=HEAP[$41]; //@line 792 "_lsprof.c"
        var $43=HEAP[$o]; //@line 792 "_lsprof.c"
        FUNCTION_TABLE[$42]($43); //@line 792 "_lsprof.c"
        __label__ = 10; break; //@line 792 "_lsprof.c"
      case 10: // $bb9
        var $44=HEAP[$timeunit]; //@line 793 "_lsprof.c"
        var $45=HEAP[$pObj_addr]; //@line 793 "_lsprof.c"
        var $46=(($45+28)&4294967295); //@line 793 "_lsprof.c"
        HEAP[$46]=$44; //@line 793 "_lsprof.c"
        HEAP[$0]=0; //@line 794 "_lsprof.c"
        __label__ = 11; break; //@line 794 "_lsprof.c"
      case 11: // $bb10
        var $47=HEAP[$0]; //@line 785 "_lsprof.c"
        HEAP[$retval]=$47; //@line 785 "_lsprof.c"
        __label__ = 12; break; //@line 785 "_lsprof.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 785 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 785 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_lsprof() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module=__stackBase__;
        var $d=__stackBase__+4;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str37)&4294967295), _moduleMethods, ((__str38)&4294967295), 0, 1013); //@line 870 "_lsprof.c"
        HEAP[$module]=$0; //@line 870 "_lsprof.c"
        var $1=HEAP[$module]; //@line 871 "_lsprof.c"
        var $2=($1)==0; //@line 871 "_lsprof.c"
        if ($2) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 871 "_lsprof.c"
      case 1: // $bb
        var $3=HEAP[$module]; //@line 873 "_lsprof.c"
        var $4=_PyModule_GetDict($3); //@line 873 "_lsprof.c"
        HEAP[$d]=$4; //@line 873 "_lsprof.c"
        var $5=_PyType_Ready(_PyProfiler_Type); //@line 874 "_lsprof.c"
        var $6=((($5))|0) < 0; //@line 874 "_lsprof.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 874 "_lsprof.c"
      case 2: // $bb1
        var $7=HEAP[$d]; //@line 876 "_lsprof.c"
        var $8=_PyDict_SetItemString($7, ((__str39)&4294967295), _PyProfiler_Type); //@line 876 "_lsprof.c"
        var $9=HEAP[_initialized]; //@line 878 "_lsprof.c"
        var $10=((($9))|0)==0; //@line 878 "_lsprof.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 878 "_lsprof.c"
      case 3: // $bb2
        _PyStructSequence_InitType(_StatsEntryType, _profiler_entry_desc); //@line 879 "_lsprof.c"
        _PyStructSequence_InitType(_StatsSubEntryType, _profiler_subentry_desc); //@line 881 "_lsprof.c"
        __label__ = 4; break; //@line 881 "_lsprof.c"
      case 4: // $bb3
        var $11=((_StatsEntryType)&4294967295); //@line 884 "_lsprof.c"
        var $12=HEAP[$11]; //@line 884 "_lsprof.c"
        var $13=((($12) + 1)&4294967295); //@line 884 "_lsprof.c"
        var $14=((_StatsEntryType)&4294967295); //@line 884 "_lsprof.c"
        HEAP[$14]=$13; //@line 884 "_lsprof.c"
        var $15=((_StatsSubEntryType)&4294967295); //@line 885 "_lsprof.c"
        var $16=HEAP[$15]; //@line 885 "_lsprof.c"
        var $17=((($16) + 1)&4294967295); //@line 885 "_lsprof.c"
        var $18=((_StatsSubEntryType)&4294967295); //@line 885 "_lsprof.c"
        HEAP[$18]=$17; //@line 885 "_lsprof.c"
        var $19=HEAP[$module]; //@line 886 "_lsprof.c"
        var $20=_PyModule_AddObject($19, ((__str40)&4294967295), _StatsEntryType); //@line 886 "_lsprof.c"
        var $21=HEAP[$module]; //@line 888 "_lsprof.c"
        var $22=_PyModule_AddObject($21, ((__str41)&4294967295), _StatsSubEntryType); //@line 888 "_lsprof.c"
        var $23=_PyTuple_New(0); //@line 890 "_lsprof.c"
        HEAP[_empty_tuple]=$23; //@line 890 "_lsprof.c"
        HEAP[_initialized]=1; //@line 891 "_lsprof.c"
        __label__ = 5; break; //@line 891 "_lsprof.c"
      case 5: // $bb4
        __label__ = 6; break; //@line 872 "_lsprof.c"
      case 6: // $return
        STACKTOP = __stackBase__;
        return; //@line 872 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_lsprof"] = _init_lsprof;

  function _randombits($bits) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $bits_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $result=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$bits_addr]=$bits;
        var $1=HEAP[$bits_addr]; //@line 18 "rotatingtree.c"
        var $2=1 << ($1); //@line 18 "rotatingtree.c"
        var $3=HEAP[_random_stream]; //@line 18 "rotatingtree.c"
        var $4=((($2))>>>0) > ((($3))>>>0); //@line 18 "rotatingtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 18 "rotatingtree.c"
      case 1: // $bb
        var $5=HEAP[_random_value]; //@line 19 "rotatingtree.c"
        var $6=((($5) * 1082527)&4294967295); //@line 19 "rotatingtree.c"
        HEAP[_random_value]=$6; //@line 19 "rotatingtree.c"
        var $7=HEAP[_random_value]; //@line 20 "rotatingtree.c"
        HEAP[_random_stream]=$7; //@line 20 "rotatingtree.c"
        __label__ = 2; break; //@line 20 "rotatingtree.c"
      case 2: // $bb1
        var $8=HEAP[$bits_addr]; //@line 22 "rotatingtree.c"
        var $9=1 << ($8); //@line 22 "rotatingtree.c"
        var $10=((($9) - 1)&4294967295); //@line 22 "rotatingtree.c"
        var $11=HEAP[_random_stream]; //@line 22 "rotatingtree.c"
        var $12=($10) & ($11); //@line 22 "rotatingtree.c"
        HEAP[$result]=$12; //@line 22 "rotatingtree.c"
        var $13=HEAP[_random_stream]; //@line 23 "rotatingtree.c"
        var $14=HEAP[$bits_addr]; //@line 23 "rotatingtree.c"
        var $15=((($13))>>>0) >>> ((($14))>>>0); //@line 23 "rotatingtree.c"
        HEAP[_random_stream]=$15; //@line 23 "rotatingtree.c"
        var $16=HEAP[$result]; //@line 24 "rotatingtree.c"
        HEAP[$0]=$16; //@line 24 "rotatingtree.c"
        var $17=HEAP[$0]; //@line 24 "rotatingtree.c"
        HEAP[$retval]=$17; //@line 24 "rotatingtree.c"
        __label__ = 3; break; //@line 24 "rotatingtree.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 24 "rotatingtree.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 24 "rotatingtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _RotatingTree_Add($root, $node) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $root_addr=__stackBase__;
        var $node_addr=__stackBase__+4;
        var $_alloca_point_=0;
        HEAP[$root_addr]=$root;
        HEAP[$node_addr]=$node;
        __label__ = 4; break; //@line 33 "rotatingtree.c"
      case 1: // $bb
        var $0=HEAP[$node_addr]; //@line 34 "rotatingtree.c"
        var $1=(($0)&4294967295); //@line 34 "rotatingtree.c"
        var $2=HEAP[$1]; //@line 34 "rotatingtree.c"
        var $3=HEAP[$root_addr]; //@line 34 "rotatingtree.c"
        var $4=HEAP[$3]; //@line 34 "rotatingtree.c"
        var $5=(($4)&4294967295); //@line 34 "rotatingtree.c"
        var $6=HEAP[$5]; //@line 34 "rotatingtree.c"
        var $7=($2) < ($6); //@line 34 "rotatingtree.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 34 "rotatingtree.c"
      case 2: // $bb1
        var $8=HEAP[$root_addr]; //@line 35 "rotatingtree.c"
        var $9=HEAP[$8]; //@line 35 "rotatingtree.c"
        var $10=(($9+4)&4294967295); //@line 35 "rotatingtree.c"
        HEAP[$root_addr]=$10; //@line 35 "rotatingtree.c"
        __label__ = 4; break; //@line 35 "rotatingtree.c"
      case 3: // $bb2
        var $11=HEAP[$root_addr]; //@line 37 "rotatingtree.c"
        var $12=HEAP[$11]; //@line 37 "rotatingtree.c"
        var $13=(($12+8)&4294967295); //@line 37 "rotatingtree.c"
        HEAP[$root_addr]=$13; //@line 37 "rotatingtree.c"
        __label__ = 4; break; //@line 37 "rotatingtree.c"
      case 4: // $bb3
        var $14=HEAP[$root_addr]; //@line 33 "rotatingtree.c"
        var $15=HEAP[$14]; //@line 33 "rotatingtree.c"
        var $16=($15)!=0; //@line 33 "rotatingtree.c"
        if ($16) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 33 "rotatingtree.c"
      case 5: // $bb4
        var $17=HEAP[$node_addr]; //@line 39 "rotatingtree.c"
        var $18=(($17+4)&4294967295); //@line 39 "rotatingtree.c"
        HEAP[$18]=0; //@line 39 "rotatingtree.c"
        var $19=HEAP[$node_addr]; //@line 40 "rotatingtree.c"
        var $20=(($19+8)&4294967295); //@line 40 "rotatingtree.c"
        HEAP[$20]=0; //@line 40 "rotatingtree.c"
        var $21=HEAP[$root_addr]; //@line 41 "rotatingtree.c"
        var $22=HEAP[$node_addr]; //@line 41 "rotatingtree.c"
        HEAP[$21]=$22; //@line 41 "rotatingtree.c"
        __label__ = 6; break; //@line 42 "rotatingtree.c"
      case 6: // $return
        STACKTOP = __stackBase__;
        return; //@line 42 "rotatingtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _RotatingTree_Get($root, $key) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $root_addr=__stackBase__;
        var $key_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $node=__stackBase__+16;
        var $pnode=__stackBase__+20;
        var $node9=__stackBase__+24;
        var $next=__stackBase__+28;
        var $rotate=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$root_addr]=$root;
        HEAP[$key_addr]=$key;
        var $1=_randombits(3); //@line 50 "rotatingtree.c"
        var $2=((($1))|0)!=4; //@line 50 "rotatingtree.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 50 "rotatingtree.c"
      case 1: // $bb
        var $3=HEAP[$root_addr]; //@line 52 "rotatingtree.c"
        var $4=HEAP[$3]; //@line 52 "rotatingtree.c"
        HEAP[$node]=$4; //@line 52 "rotatingtree.c"
        __label__ = 7; break; //@line 52 "rotatingtree.c"
      case 2: // $bb1
        var $5=HEAP[$node]; //@line 54 "rotatingtree.c"
        var $6=(($5)&4294967295); //@line 54 "rotatingtree.c"
        var $7=HEAP[$6]; //@line 54 "rotatingtree.c"
        var $8=HEAP[$key_addr]; //@line 54 "rotatingtree.c"
        var $9=($7)==($8); //@line 54 "rotatingtree.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 54 "rotatingtree.c"
      case 3: // $bb2
        var $10=HEAP[$node]; //@line 55 "rotatingtree.c"
        HEAP[$0]=$10; //@line 55 "rotatingtree.c"
        __label__ = 26; break; //@line 55 "rotatingtree.c"
      case 4: // $bb3
        var $11=HEAP[$node]; //@line 56 "rotatingtree.c"
        var $12=(($11)&4294967295); //@line 56 "rotatingtree.c"
        var $13=HEAP[$12]; //@line 56 "rotatingtree.c"
        var $14=HEAP[$key_addr]; //@line 56 "rotatingtree.c"
        var $15=($13) > ($14); //@line 56 "rotatingtree.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 56 "rotatingtree.c"
      case 5: // $bb4
        var $16=HEAP[$node]; //@line 57 "rotatingtree.c"
        var $17=(($16+4)&4294967295); //@line 57 "rotatingtree.c"
        var $18=HEAP[$17]; //@line 57 "rotatingtree.c"
        HEAP[$node]=$18; //@line 57 "rotatingtree.c"
        __label__ = 7; break; //@line 57 "rotatingtree.c"
      case 6: // $bb5
        var $19=HEAP[$node]; //@line 59 "rotatingtree.c"
        var $20=(($19+8)&4294967295); //@line 59 "rotatingtree.c"
        var $21=HEAP[$20]; //@line 59 "rotatingtree.c"
        HEAP[$node]=$21; //@line 59 "rotatingtree.c"
        __label__ = 7; break; //@line 59 "rotatingtree.c"
      case 7: // $bb6
        var $22=HEAP[$node]; //@line 53 "rotatingtree.c"
        var $23=($22)!=0; //@line 53 "rotatingtree.c"
        if ($23) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 53 "rotatingtree.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 61 "rotatingtree.c"
        __label__ = 26; break; //@line 61 "rotatingtree.c"
      case 9: // $bb8
        var $24=HEAP[$root_addr]; //@line 64 "rotatingtree.c"
        HEAP[$pnode]=$24; //@line 64 "rotatingtree.c"
        var $25=HEAP[$pnode]; //@line 65 "rotatingtree.c"
        var $26=HEAP[$25]; //@line 65 "rotatingtree.c"
        HEAP[$node9]=$26; //@line 65 "rotatingtree.c"
        var $27=HEAP[$node9]; //@line 68 "rotatingtree.c"
        var $28=($27)==0; //@line 68 "rotatingtree.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 68 "rotatingtree.c"
      case 10: // $bb10
        HEAP[$0]=0; //@line 69 "rotatingtree.c"
        __label__ = 26; break; //@line 69 "rotatingtree.c"
      case 11: // $bb11
        var $29=HEAP[$node9]; //@line 71 "rotatingtree.c"
        var $30=(($29)&4294967295); //@line 71 "rotatingtree.c"
        var $31=HEAP[$30]; //@line 71 "rotatingtree.c"
        var $32=HEAP[$key_addr]; //@line 71 "rotatingtree.c"
        var $33=($31)==($32); //@line 71 "rotatingtree.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 71 "rotatingtree.c"
      case 12: // $bb12
        var $34=HEAP[$node9]; //@line 72 "rotatingtree.c"
        HEAP[$0]=$34; //@line 72 "rotatingtree.c"
        __label__ = 26; break; //@line 72 "rotatingtree.c"
      case 13: // $bb13
        var $35=_randombits(1); //@line 73 "rotatingtree.c"
        var $36=((($35))|0)==0; //@line 73 "rotatingtree.c"
        var $37=unSign(($36), 1, 0); //@line 73 "rotatingtree.c"
        HEAP[$rotate]=$37; //@line 73 "rotatingtree.c"
        var $38=HEAP[$node9]; //@line 74 "rotatingtree.c"
        var $39=(($38)&4294967295); //@line 74 "rotatingtree.c"
        var $40=HEAP[$39]; //@line 74 "rotatingtree.c"
        var $41=HEAP[$key_addr]; //@line 74 "rotatingtree.c"
        var $42=($40) > ($41); //@line 74 "rotatingtree.c"
        if ($42) { __label__ = 14; break; } else { __label__ = 20; break; } //@line 74 "rotatingtree.c"
      case 14: // $bb14
        var $43=HEAP[$node9]; //@line 75 "rotatingtree.c"
        var $44=(($43+4)&4294967295); //@line 75 "rotatingtree.c"
        var $45=HEAP[$44]; //@line 75 "rotatingtree.c"
        HEAP[$next]=$45; //@line 75 "rotatingtree.c"
        var $46=HEAP[$next]; //@line 76 "rotatingtree.c"
        var $47=($46)==0; //@line 76 "rotatingtree.c"
        if ($47) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 76 "rotatingtree.c"
      case 15: // $bb15
        HEAP[$0]=0; //@line 77 "rotatingtree.c"
        __label__ = 26; break; //@line 77 "rotatingtree.c"
      case 16: // $bb16
        var $48=HEAP[$rotate]; //@line 78 "rotatingtree.c"
        var $49=((($48))|0)!=0; //@line 78 "rotatingtree.c"
        if ($49) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 78 "rotatingtree.c"
      case 17: // $bb17
        var $50=HEAP[$next]; //@line 79 "rotatingtree.c"
        var $51=(($50+8)&4294967295); //@line 79 "rotatingtree.c"
        var $52=HEAP[$51]; //@line 79 "rotatingtree.c"
        var $53=HEAP[$node9]; //@line 79 "rotatingtree.c"
        var $54=(($53+4)&4294967295); //@line 79 "rotatingtree.c"
        HEAP[$54]=$52; //@line 79 "rotatingtree.c"
        var $55=HEAP[$next]; //@line 80 "rotatingtree.c"
        var $56=(($55+8)&4294967295); //@line 80 "rotatingtree.c"
        var $57=HEAP[$node9]; //@line 80 "rotatingtree.c"
        HEAP[$56]=$57; //@line 80 "rotatingtree.c"
        var $58=HEAP[$pnode]; //@line 81 "rotatingtree.c"
        var $59=HEAP[$next]; //@line 81 "rotatingtree.c"
        HEAP[$58]=$59; //@line 81 "rotatingtree.c"
        __label__ = 19; break; //@line 81 "rotatingtree.c"
      case 18: // $bb18
        var $60=HEAP[$node9]; //@line 84 "rotatingtree.c"
        var $61=(($60+4)&4294967295); //@line 84 "rotatingtree.c"
        HEAP[$pnode]=$61; //@line 84 "rotatingtree.c"
        __label__ = 19; break; //@line 84 "rotatingtree.c"
      case 19: // $bb19
        __label__ = 25; break; //@line 84 "rotatingtree.c"
      case 20: // $bb20
        var $62=HEAP[$node9]; //@line 87 "rotatingtree.c"
        var $63=(($62+8)&4294967295); //@line 87 "rotatingtree.c"
        var $64=HEAP[$63]; //@line 87 "rotatingtree.c"
        HEAP[$next]=$64; //@line 87 "rotatingtree.c"
        var $65=HEAP[$next]; //@line 88 "rotatingtree.c"
        var $66=($65)==0; //@line 88 "rotatingtree.c"
        if ($66) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 88 "rotatingtree.c"
      case 21: // $bb21
        HEAP[$0]=0; //@line 89 "rotatingtree.c"
        __label__ = 26; break; //@line 89 "rotatingtree.c"
      case 22: // $bb22
        var $67=HEAP[$rotate]; //@line 90 "rotatingtree.c"
        var $68=((($67))|0)!=0; //@line 90 "rotatingtree.c"
        if ($68) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 90 "rotatingtree.c"
      case 23: // $bb23
        var $69=HEAP[$next]; //@line 91 "rotatingtree.c"
        var $70=(($69+4)&4294967295); //@line 91 "rotatingtree.c"
        var $71=HEAP[$70]; //@line 91 "rotatingtree.c"
        var $72=HEAP[$node9]; //@line 91 "rotatingtree.c"
        var $73=(($72+8)&4294967295); //@line 91 "rotatingtree.c"
        HEAP[$73]=$71; //@line 91 "rotatingtree.c"
        var $74=HEAP[$next]; //@line 92 "rotatingtree.c"
        var $75=(($74+4)&4294967295); //@line 92 "rotatingtree.c"
        var $76=HEAP[$node9]; //@line 92 "rotatingtree.c"
        HEAP[$75]=$76; //@line 92 "rotatingtree.c"
        var $77=HEAP[$pnode]; //@line 93 "rotatingtree.c"
        var $78=HEAP[$next]; //@line 93 "rotatingtree.c"
        HEAP[$77]=$78; //@line 93 "rotatingtree.c"
        __label__ = 25; break; //@line 93 "rotatingtree.c"
      case 24: // $bb24
        var $79=HEAP[$node9]; //@line 96 "rotatingtree.c"
        var $80=(($79+8)&4294967295); //@line 96 "rotatingtree.c"
        HEAP[$pnode]=$80; //@line 96 "rotatingtree.c"
        __label__ = 25; break; //@line 96 "rotatingtree.c"
      case 25: // $bb25
        var $81=HEAP[$next]; //@line 98 "rotatingtree.c"
        HEAP[$node9]=$81; //@line 98 "rotatingtree.c"
        __label__ = 11; break; //@line 98 "rotatingtree.c"
      case 26: // $bb26
        var $82=HEAP[$0]; //@line 55 "rotatingtree.c"
        HEAP[$retval]=$82; //@line 55 "rotatingtree.c"
        __label__ = 27; break; //@line 55 "rotatingtree.c"
      case 27: // $return
        var $retval27=HEAP[$retval]; //@line 55 "rotatingtree.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 55 "rotatingtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _RotatingTree_Enum($root, $enumfn, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $root_addr=__stackBase__;
        var $enumfn_addr=__stackBase__+4;
        var $arg_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $result=__stackBase__+20;
        var $node=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$root_addr]=$root;
        HEAP[$enumfn_addr]=$enumfn;
        HEAP[$arg_addr]=$arg;
        __label__ = 6; break; //@line 112 "rotatingtree.c"
      case 1: // $bb
        var $1=HEAP[$root_addr]; //@line 113 "rotatingtree.c"
        var $2=(($1+4)&4294967295); //@line 113 "rotatingtree.c"
        var $3=HEAP[$2]; //@line 113 "rotatingtree.c"
        var $4=HEAP[$enumfn_addr]; //@line 113 "rotatingtree.c"
        var $5=HEAP[$arg_addr]; //@line 113 "rotatingtree.c"
        var $6=_RotatingTree_Enum($3, $4, $5); //@line 113 "rotatingtree.c"
        HEAP[$result]=$6; //@line 113 "rotatingtree.c"
        var $7=HEAP[$result]; //@line 114 "rotatingtree.c"
        var $8=((($7))|0)!=0; //@line 114 "rotatingtree.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 114 "rotatingtree.c"
      case 2: // $bb1
        var $9=HEAP[$result]; //@line 114 "rotatingtree.c"
        HEAP[$0]=$9; //@line 114 "rotatingtree.c"
        __label__ = 8; break; //@line 114 "rotatingtree.c"
      case 3: // $bb2
        var $10=HEAP[$root_addr]; //@line 115 "rotatingtree.c"
        var $11=(($10+8)&4294967295); //@line 115 "rotatingtree.c"
        var $12=HEAP[$11]; //@line 115 "rotatingtree.c"
        HEAP[$node]=$12; //@line 115 "rotatingtree.c"
        var $13=HEAP[$enumfn_addr]; //@line 116 "rotatingtree.c"
        var $14=HEAP[$root_addr]; //@line 116 "rotatingtree.c"
        var $15=HEAP[$arg_addr]; //@line 116 "rotatingtree.c"
        var $16=FUNCTION_TABLE[$13]($14, $15); //@line 116 "rotatingtree.c"
        HEAP[$result]=$16; //@line 116 "rotatingtree.c"
        var $17=HEAP[$result]; //@line 117 "rotatingtree.c"
        var $18=((($17))|0)!=0; //@line 117 "rotatingtree.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 117 "rotatingtree.c"
      case 4: // $bb3
        var $19=HEAP[$result]; //@line 117 "rotatingtree.c"
        HEAP[$0]=$19; //@line 117 "rotatingtree.c"
        __label__ = 8; break; //@line 117 "rotatingtree.c"
      case 5: // $bb4
        var $20=HEAP[$node]; //@line 118 "rotatingtree.c"
        HEAP[$root_addr]=$20; //@line 118 "rotatingtree.c"
        __label__ = 6; break; //@line 118 "rotatingtree.c"
      case 6: // $bb5
        var $21=HEAP[$root_addr]; //@line 112 "rotatingtree.c"
        var $22=($21)!=0; //@line 112 "rotatingtree.c"
        if ($22) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 112 "rotatingtree.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 120 "rotatingtree.c"
        __label__ = 8; break; //@line 120 "rotatingtree.c"
      case 8: // $bb7
        var $23=HEAP[$0]; //@line 114 "rotatingtree.c"
        HEAP[$retval]=$23; //@line 114 "rotatingtree.c"
        __label__ = 9; break; //@line 114 "rotatingtree.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 114 "rotatingtree.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 114 "rotatingtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_freeSubEntry,0,_freeEntry,0,_statsForSubEntry,0,_statsForEntry,0,_profiler_callback,0,_profiler_getstats,0,_profiler_enable,0,_profiler_disable,0,_profiler_clear,0,_profiler_dealloc,0,_profiler_init,0,_PyType_GenericAlloc,0,_PyType_GenericNew,0,_PyObject_Free,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_empty_tuple=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str=allocate([95,95,98,117,105,108,116,105,110,95,95,0] /* __builtin__\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([60,37,115,46,37,115,62,0] /* <%s.%s>\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([60,37,115,62,0] /* <%s>\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([60,98,117,105,108,116,45,105,110,32,109,101,116,104,111,100,32,37,115,62,0] /* <built-in method %s> */, "i8", ALLOC_NORMAL);
__str4=allocate([109,101,109,111,114,121,32,119,97,115,32,101,120,104,97,117,115,116,101,100,32,119,104,105,108,101,32,112,114,111,102,105,108,105,110,103,0] /* memory was exhausted */, "i8", ALLOC_NORMAL);
__str5=allocate([99,111,100,101,0] /* code\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([99,111,100,101,32,111,98,106,101,99,116,32,111,114,32,98,117,105,108,116,45,105,110,32,102,117,110,99,116,105,111,110,32,110,97,109,101,0] /* code object or built */, "i8", ALLOC_NORMAL);
__str7=allocate([99,97,108,108,99,111,117,110,116,0] /* callcount\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,119,97,115,32,99,97,108,108,101,100,0] /* how many times this  */, "i8", ALLOC_NORMAL);
__str9=allocate([114,101,99,99,97,108,108,99,111,117,110,116,0] /* reccallcount\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,99,97,108,108,101,100,32,114,101,99,117,114,115,105,118,101,108,121,0] /* how many times calle */, "i8", ALLOC_NORMAL);
__str11=allocate([116,111,116,97,108,116,105,109,101,0] /* totaltime\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([116,111,116,97,108,32,116,105,109,101,32,105,110,32,116,104,105,115,32,101,110,116,114,121,0] /* total time in this e */, "i8", ALLOC_NORMAL);
__str13=allocate([105,110,108,105,110,101,116,105,109,101,0] /* inlinetime\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([105,110,108,105,110,101,32,116,105,109,101,32,105,110,32,116,104,105,115,32,101,110,116,114,121,32,40,110,111,116,32,105,110,32,115,117,98,99,97,108,108,115,41,0] /* inline time in this  */, "i8", ALLOC_NORMAL);
__str15=allocate([99,97,108,108,115,0] /* calls\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([100,101,116,97,105,108,115,32,111,102,32,116,104,101,32,99,97,108,108,115,0] /* details of the calls */, "i8", ALLOC_NORMAL);
_profiler_entry_fields=allocate(56, ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8"], ALLOC_NORMAL);
__str17=allocate([99,97,108,108,101,100,32,99,111,100,101,32,111,98,106,101,99,116,32,111,114,32,98,117,105,108,116,45,105,110,32,102,117,110,99,116,105,111,110,32,110,97,109,101,0] /* called code object o */, "i8", ALLOC_NORMAL);
__str18=allocate([104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,105,115,32,99,97,108,108,101,100,0] /* how many times this  */, "i8", ALLOC_NORMAL);
__str19=allocate([104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,105,115,32,99,97,108,108,101,100,32,114,101,99,117,114,115,105,118,101,108,121,0] /* how many times this  */, "i8", ALLOC_NORMAL);
__str20=allocate([116,111,116,97,108,32,116,105,109,101,32,115,112,101,110,116,32,105,110,32,116,104,105,115,32,99,97,108,108,0] /* total time spent in  */, "i8", ALLOC_NORMAL);
__str21=allocate([105,110,108,105,110,101,32,116,105,109,101,32,40,110,111,116,32,105,110,32,102,117,114,116,104,101,114,32,115,117,98,99,97,108,108,115,41,0] /* inline time (not in  */, "i8", ALLOC_NORMAL);
_profiler_subentry_fields=allocate(48, ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8"], ALLOC_NORMAL);
_profiler_entry_desc=allocate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0], ["i8*",0,0,0,"i8*",0,0,0,"%struct.PyStructSequence_Field*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str22=allocate([95,108,115,112,114,111,102,46,112,114,111,102,105,108,101,114,95,101,110,116,114,121,0] /* _lsprof.profiler_ent */, "i8", ALLOC_NORMAL);
_profiler_subentry_desc=allocate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0], ["i8*",0,0,0,"i8*",0,0,0,"%struct.PyStructSequence_Field*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str23=allocate([95,108,115,112,114,111,102,46,112,114,111,102,105,108,101,114,95,115,117,98,101,110,116,114,121,0] /* _lsprof.profiler_sub */, "i8", ALLOC_NORMAL);
_StatsSubEntryType=allocate(196, ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str24=allocate([40,40,79,108,108,100,100,41,41,0] /* ((Olldd))\00 */, "i8", ALLOC_NORMAL);
_StatsEntryType=allocate(196, ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str25=allocate([40,40,79,108,108,100,100,79,41,41,0] /* ((OllddO))\00 */, "i8", ALLOC_NORMAL);
_getstats_doc=allocate([103,101,116,115,116,97,116,115,40,41,32,45,62,32,108,105,115,116,32,111,102,32,112,114,111,102,105,108,101,114,95,101,110,116,114,121,32,111,98,106,101,99,116,115,10,10,82,101,116,117,114,110,32,97,108,108,32,105,110,102,111,114,109,97,116,105,111,110,32,99,111,108,108,101,99,116,101,100,32,98,121,32,116,104,101,32,112,114,111,102,105,108,101,114,46,10,69,97,99,104,32,112,114,111,102,105,108,101,114,95,101,110,116,114,121,32,105,115,32,97,32,116,117,112,108,101,45,108,105,107,101,32,111,98,106,101,99,116,32,119,105,116,104,32,116,104,101,10,102,111,108,108,111,119,105,110,103,32,97,116,116,114,105,98,117,116,101,115,58,10,10,32,32,32,32,99,111,100,101,32,32,32,32,32,32,32,32,32,32,99,111,100,101,32,111,98,106,101,99,116,10,32,32,32,32,99,97,108,108,99,111,117,110,116,32,32,32,32,32,104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,119,97,115,32,99,97,108,108,101,100,10,32,32,32,32,114,101,99,99,97,108,108,99,111,117,110,116,32,32,104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,99,97,108,108,101,100,32,114,101,99,117,114,115,105,118,101,108,121,10,32,32,32,32,116,111,116,97,108,116,105,109,101,32,32,32,32,32,116,111,116,97,108,32,116,105,109,101,32,105,110,32,116,104,105,115,32,101,110,116,114,121,10,32,32,32,32,105,110,108,105,110,101,116,105,109,101,32,32,32,32,105,110,108,105,110,101,32,116,105,109,101,32,105,110,32,116,104,105,115,32,101,110,116,114,121,32,40,110,111,116,32,105,110,32,115,117,98,99,97,108,108,115,41,10,32,32,32,32,99,97,108,108,115,32,32,32,32,32,32,32,32,32,100,101,116,97,105,108,115,32,111,102,32,116,104,101,32,99,97,108,108,115,10,10,84,104,101,32,99,97,108,108,115,32,97,116,116,114,105,98,117,116,101,32,105,115,32,101,105,116,104,101,114,32,78,111,110,101,32,111,114,32,97,32,108,105,115,116,32,111,102,10,112,114,111,102,105,108,101,114,95,115,117,98,101,110,116,114,121,32,111,98,106,101,99,116,115,58,10,10,32,32,32,32,99,111,100,101,32,32,32,32,32,32,32,32,32,32,99,97,108,108,101,100,32,99,111,100,101,32,111,98,106,101,99,116,10,32,32,32,32,99,97,108,108,99,111,117,110,116,32,32,32,32,32,104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,105,115,32,99,97,108,108,101,100,10,32,32,32,32,114,101,99,99,97,108,108,99,111,117,110,116,32,32,104,111,119,32,109,97,110,121,32,116,105,109,101,115,32,116,104,105,115,32,105,115,32,99,97,108,108,101,100,32,114,101,99,117,114,115,105,118,101,108,121,10,32,32,32,32,116,111,116,97,108,116,105,109,101,32,32,32,32,32,116,111,116,97,108,32,116,105,109,101,32,115,112,101,110,116,32,105,110,32,116,104,105,115,32,99,97,108,108,10,32,32,32,32,105,110,108,105,110,101,116,105,109,101,32,32,32,32,105,110,108,105,110,101,32,116,105,109,101,32,40,110,111,116,32,105,110,32,102,117,114,116,104,101,114,32,115,117,98,99,97,108,108,115,41,10,0] /* getstats() -> list o */, "i8", ALLOC_NORMAL);
_enable_doc=allocate([101,110,97,98,108,101,40,115,117,98,99,97,108,108,115,61,84,114,117,101,44,32,98,117,105,108,116,105,110,115,61,84,114,117,101,41,10,10,83,116,97,114,116,32,99,111,108,108,101,99,116,105,110,103,32,112,114,111,102,105,108,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,46,10,73,102,32,39,115,117,98,99,97,108,108,115,39,32,105,115,32,84,114,117,101,44,32,97,108,115,111,32,114,101,99,111,114,100,115,32,102,111,114,32,101,97,99,104,32,102,117,110,99,116,105,111,110,10,115,116,97,116,105,115,116,105,99,115,32,115,101,112,97,114,97,116,101,100,32,97,99,99,111,114,100,105,110,103,32,116,111,32,105,116,115,32,99,117,114,114,101,110,116,32,99,97,108,108,101,114,46,10,73,102,32,39,98,117,105,108,116,105,110,115,39,32,105,115,32,84,114,117,101,44,32,114,101,99,111,114,100,115,32,116,104,101,32,116,105,109,101,32,115,112,101,110,116,32,105,110,10,98,117,105,108,116,45,105,110,32,102,117,110,99,116,105,111,110,115,32,115,101,112,97,114,97,116,101,108,121,32,102,114,111,109,32,116,104,101,105,114,32,99,97,108,108,101,114,46,10,0] /* enable(subcalls=True */, "i8", ALLOC_NORMAL);
__str26=allocate([124,105,105,58,101,110,97,98,108,101,0] /* |ii:enable\00 */, "i8", ALLOC_NORMAL);
_kwlist_9138=allocate(12, "i8*", ALLOC_NORMAL);
__str27=allocate([115,117,98,99,97,108,108,115,0] /* subcalls\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([98,117,105,108,116,105,110,115,0] /* builtins\00 */, "i8", ALLOC_NORMAL);
_disable_doc=allocate([100,105,115,97,98,108,101,40,41,10,10,83,116,111,112,32,99,111,108,108,101,99,116,105,110,103,32,112,114,111,102,105,108,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,46,10,0] /* disable()\0A\0AStop  */, "i8", ALLOC_NORMAL);
_clear_doc=allocate([99,108,101,97,114,40,41,10,10,67,108,101,97,114,32,97,108,108,32,112,114,111,102,105,108,105,110,103,32,105,110,102,111,114,109,97,116,105,111,110,32,99,111,108,108,101,99,116,101,100,32,115,111,32,102,97,114,46,10,0] /* clear()\0A\0AClear a */, "i8", ALLOC_NORMAL);
__str29=allocate([124,79,100,105,105,58,80,114,111,102,105,108,101,114,0] /* |Odii:Profiler\00 */, "i8", ALLOC_NORMAL);
_kwlist_9228=allocate(20, "i8*", ALLOC_NORMAL);
__str30=allocate([116,105,109,101,114,0] /* timer\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([116,105,109,101,117,110,105,116,0] /* timeunit\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([103,101,116,115,116,97,116,115,0] /* getstats\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([101,110,97,98,108,101,0] /* enable\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([100,105,115,97,98,108,101,0] /* disable\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([99,108,101,97,114,0] /* clear\00 */, "i8", ALLOC_NORMAL);
_profiler_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_profiler_doc=allocate([80,114,111,102,105,108,101,114,40,99,117,115,116,111,109,95,116,105,109,101,114,61,78,111,110,101,44,32,116,105,109,101,95,117,110,105,116,61,78,111,110,101,44,32,115,117,98,99,97,108,108,115,61,84,114,117,101,44,32,98,117,105,108,116,105,110,115,61,84,114,117,101,41,10,10,32,32,32,32,66,117,105,108,100,115,32,97,32,112,114,111,102,105,108,101,114,32,111,98,106,101,99,116,32,117,115,105,110,103,32,116,104,101,32,115,112,101,99,105,102,105,101,100,32,116,105,109,101,114,32,102,117,110,99,116,105,111,110,46,10,32,32,32,32,84,104,101,32,100,101,102,97,117,108,116,32,116,105,109,101,114,32,105,115,32,97,32,102,97,115,116,32,98,117,105,108,116,45,105,110,32,111,110,101,32,98,97,115,101,100,32,111,110,32,114,101,97,108,32,116,105,109,101,46,10,32,32,32,32,70,111,114,32,99,117,115,116,111,109,32,116,105,109,101,114,32,102,117,110,99,116,105,111,110,115,32,114,101,116,117,114,110,105,110,103,32,105,110,116,101,103,101,114,115,44,32,116,105,109,101,95,117,110,105,116,32,99,97,110,10,32,32,32,32,98,101,32,97,32,102,108,111,97,116,32,115,112,101,99,105,102,121,105,110,103,32,97,32,115,99,97,108,101,32,40,105,46,101,46,32,104,111,119,32,108,111,110,103,32,101,97,99,104,32,105,110,116,101,103,101,114,32,117,110,105,116,10,32,32,32,32,105,115,44,32,105,110,32,115,101,99,111,110,100,115,41,46,10,0] /* Profiler(custom_time */, "i8", ALLOC_NORMAL);
__str36=allocate([95,108,115,112,114,111,102,46,80,114,111,102,105,108,101,114,0] /* _lsprof.Profiler\00 */, "i8", ALLOC_NORMAL);
_PyProfiler_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_moduleMethods=allocate(16, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str37=allocate([95,108,115,112,114,111,102,0] /* _lsprof\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([70,97,115,116,32,112,114,111,102,105,108,101,114,0] /* Fast profiler\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([80,114,111,102,105,108,101,114,0] /* Profiler\00 */, "i8", ALLOC_NORMAL);
_initialized=allocate(1, "i32", ALLOC_NORMAL);
__str40=allocate([112,114,111,102,105,108,101,114,95,101,110,116,114,121,0] /* profiler_entry\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([112,114,111,102,105,108,101,114,95,115,117,98,101,110,116,114,121,0] /* profiler_subentry\00 */, "i8", ALLOC_NORMAL);
_random_value=allocate([1], "i32", ALLOC_NORMAL);
_random_stream=allocate(1, "i32", ALLOC_NORMAL);
HEAP[_profiler_entry_fields]=((__str5)&4294967295);
HEAP[_profiler_entry_fields+4]=((__str6)&4294967295);
HEAP[_profiler_entry_fields+8]=((__str7)&4294967295);
HEAP[_profiler_entry_fields+12]=((__str8)&4294967295);
HEAP[_profiler_entry_fields+16]=((__str9)&4294967295);
HEAP[_profiler_entry_fields+20]=((__str10)&4294967295);
HEAP[_profiler_entry_fields+24]=((__str11)&4294967295);
HEAP[_profiler_entry_fields+28]=((__str12)&4294967295);
HEAP[_profiler_entry_fields+32]=((__str13)&4294967295);
HEAP[_profiler_entry_fields+36]=((__str14)&4294967295);
HEAP[_profiler_entry_fields+40]=((__str15)&4294967295);
HEAP[_profiler_entry_fields+44]=((__str16)&4294967295);
HEAP[_profiler_subentry_fields]=((__str5)&4294967295);
HEAP[_profiler_subentry_fields+4]=((__str17)&4294967295);
HEAP[_profiler_subentry_fields+8]=((__str7)&4294967295);
HEAP[_profiler_subentry_fields+12]=((__str18)&4294967295);
HEAP[_profiler_subentry_fields+16]=((__str9)&4294967295);
HEAP[_profiler_subentry_fields+20]=((__str19)&4294967295);
HEAP[_profiler_subentry_fields+24]=((__str11)&4294967295);
HEAP[_profiler_subentry_fields+28]=((__str20)&4294967295);
HEAP[_profiler_subentry_fields+32]=((__str13)&4294967295);
HEAP[_profiler_subentry_fields+36]=((__str21)&4294967295);
HEAP[_profiler_entry_desc]=((__str22)&4294967295);
HEAP[_profiler_entry_desc+8]=((_profiler_entry_fields)&4294967295);
HEAP[_profiler_subentry_desc]=((__str23)&4294967295);
HEAP[_profiler_subentry_desc+8]=((_profiler_subentry_fields)&4294967295);
HEAP[_kwlist_9138]=((__str27)&4294967295);
HEAP[_kwlist_9138+4]=((__str28)&4294967295);
HEAP[_kwlist_9228]=((__str30)&4294967295);
HEAP[_kwlist_9228+4]=((__str31)&4294967295);
HEAP[_kwlist_9228+8]=((__str27)&4294967295);
HEAP[_kwlist_9228+12]=((__str28)&4294967295);
HEAP[_profiler_methods]=((__str32)&4294967295);
HEAP[_profiler_methods+4]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_profiler_methods+12]=((_getstats_doc)&4294967295);
HEAP[_profiler_methods+16]=((__str33)&4294967295);
HEAP[_profiler_methods+20]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_profiler_methods+28]=((_enable_doc)&4294967295);
HEAP[_profiler_methods+32]=((__str34)&4294967295);
HEAP[_profiler_methods+36]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_profiler_methods+44]=((_disable_doc)&4294967295);
HEAP[_profiler_methods+48]=((__str35)&4294967295);
HEAP[_profiler_methods+52]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_profiler_methods+60]=((_clear_doc)&4294967295);
HEAP[_PyProfiler_Type+12]=((__str36)&4294967295);
HEAP[_PyProfiler_Type+24]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_PyProfiler_Type+88]=((_profiler_doc)&4294967295);
HEAP[_PyProfiler_Type+116]=((_profiler_methods)&4294967295);
HEAP[_PyProfiler_Type+148]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_PyProfiler_Type+152]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_PyProfiler_Type+156]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_PyProfiler_Type+160]=(FUNCTION_TABLE_OFFSET + 28);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

