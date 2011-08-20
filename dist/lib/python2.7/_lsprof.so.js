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
var _initialized_b;
var __str40;
var __str41;
var _random_value;
var _random_stream;







































  function _CallExternalTimer($pObj) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr;
        var $retval;
        var $0;
        var $result;
        var $o;
        var $val;
        $pObj_addr=$pObj;
        var $1=HEAP[_empty_tuple]; //@line 133 "_lsprof.c"
        var $2=$pObj_addr; //@line 133 "_lsprof.c"
        var $3=$2+24; //@line 133 "_lsprof.c"
        var $4=HEAP[$3]; //@line 133 "_lsprof.c"
        var $5=_PyObject_Call($4, $1, 0); //@line 133 "_lsprof.c"
        $o=$5; //@line 133 "_lsprof.c"
        var $6=$o; //@line 134 "_lsprof.c"
        var $7=($6)==0; //@line 134 "_lsprof.c"
        var $8=$pObj_addr; //@line 135 "_lsprof.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 134 "_lsprof.c"
      case 1: // $bb
        var $9=$8+24; //@line 135 "_lsprof.c"
        var $10=HEAP[$9]; //@line 135 "_lsprof.c"
        _PyErr_WriteUnraisable($10); //@line 135 "_lsprof.c"
        $0=0; //@line 136 "_lsprof.c"
        __label__ = 10; break; //@line 136 "_lsprof.c"
      case 2: // $bb1
        var $11=$8+28; //@line 138 "_lsprof.c"
        var $12=HEAP[$11]; //@line 138 "_lsprof.c"
        var $13=($12) > 0; //@line 138 "_lsprof.c"
        var $14=$o; //@line 141 "_lsprof.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 138 "_lsprof.c"
      case 3: // $bb2
        var $15=_PyLong_AsLongLong($14); //@line 141 "_lsprof.c"
        $result=$15; //@line 141 "_lsprof.c"
        __label__ = 5; break; //@line 141 "_lsprof.c"
      case 4: // $bb3
        var $16=_PyFloat_AsDouble($14); //@line 147 "_lsprof.c"
        $val=$16; //@line 147 "_lsprof.c"
        var $17=$val; //@line 149 "_lsprof.c"
        var $18=($17) * 4294967296; //@line 149 "_lsprof.c"
        var $19=cRound(($18)); //@line 149 "_lsprof.c"
        $result=$19; //@line 149 "_lsprof.c"
        __label__ = 5; break; //@line 149 "_lsprof.c"
      case 5: // $bb4
        var $20=$o; //@line 151 "_lsprof.c"
        var $21=$20; //@line 151 "_lsprof.c"
        var $22=HEAP[$21]; //@line 151 "_lsprof.c"
        var $23=($22) - 1; //@line 151 "_lsprof.c"
        var $24=$o; //@line 151 "_lsprof.c"
        var $25=$24; //@line 151 "_lsprof.c"
        HEAP[$25]=$23; //@line 151 "_lsprof.c"
        var $26=$o; //@line 151 "_lsprof.c"
        var $27=$26; //@line 151 "_lsprof.c"
        var $28=HEAP[$27]; //@line 151 "_lsprof.c"
        var $29=($28)==0; //@line 151 "_lsprof.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 151 "_lsprof.c"
      case 6: // $bb5
        var $30=$o; //@line 151 "_lsprof.c"
        var $31=$30+4; //@line 151 "_lsprof.c"
        var $32=HEAP[$31]; //@line 151 "_lsprof.c"
        var $33=$32+24; //@line 151 "_lsprof.c"
        var $34=HEAP[$33]; //@line 151 "_lsprof.c"
        var $35=$o; //@line 151 "_lsprof.c"
        FUNCTION_TABLE[$34]($35); //@line 151 "_lsprof.c"
        __label__ = 7; break; //@line 151 "_lsprof.c"
      case 7: // $bb6
        var $36=_PyErr_Occurred(); //@line 152 "_lsprof.c"
        var $37=($36)!=0; //@line 152 "_lsprof.c"
        if ($37) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 152 "_lsprof.c"
      case 8: // $bb7
        var $38=$pObj_addr; //@line 153 "_lsprof.c"
        var $39=$38+24; //@line 153 "_lsprof.c"
        var $40=HEAP[$39]; //@line 153 "_lsprof.c"
        _PyErr_WriteUnraisable($40); //@line 153 "_lsprof.c"
        $0=0; //@line 154 "_lsprof.c"
        __label__ = 10; break; //@line 154 "_lsprof.c"
      case 9: // $bb8
        var $41=$result; //@line 156 "_lsprof.c"
        $0=$41; //@line 156 "_lsprof.c"
        __label__ = 10; break; //@line 156 "_lsprof.c"
      case 10: // $bb9
        var $42=$0; //@line 136 "_lsprof.c"
        $retval=$42; //@line 136 "_lsprof.c"
        var $retval10=$retval; //@line 136 "_lsprof.c"
        ;
        return $retval10; //@line 136 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _freeSubEntry($header, $arg) {
    ;
    var __label__;
  
    var $header_addr;
    var $arg_addr;
    var $retval;
    var $0;
    var $subentry;
    $header_addr=$header;
    $arg_addr=$arg;
    var $1=$header_addr; //@line 288 "_lsprof.c"
    var $2=$1; //@line 288 "_lsprof.c"
    $subentry=$2; //@line 288 "_lsprof.c"
    var $3=$subentry; //@line 289 "_lsprof.c"
    var $4=$3; //@line 289 "_lsprof.c"
    _free($4); //@line 289 "_lsprof.c"
    $0=0; //@line 290 "_lsprof.c"
    var $5=$0; //@line 290 "_lsprof.c"
    $retval=$5; //@line 290 "_lsprof.c"
    var $retval1=$retval; //@line 290 "_lsprof.c"
    ;
    return $retval1; //@line 290 "_lsprof.c"
  }
  

  function _freeEntry($header, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $header_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $entry1;
        $header_addr=$header;
        $arg_addr=$arg;
        var $1=$header_addr; //@line 295 "_lsprof.c"
        var $2=$1; //@line 295 "_lsprof.c"
        $entry1=$2; //@line 295 "_lsprof.c"
        var $3=$entry1; //@line 296 "_lsprof.c"
        var $4=$3+44; //@line 296 "_lsprof.c"
        var $5=HEAP[$4]; //@line 296 "_lsprof.c"
        var $6=_RotatingTree_Enum($5, (FUNCTION_TABLE_OFFSET + 2), 0); //@line 296 "_lsprof.c"
        var $7=$entry1; //@line 297 "_lsprof.c"
        var $8=$7+12; //@line 297 "_lsprof.c"
        var $9=HEAP[$8]; //@line 297 "_lsprof.c"
        var $10=$9; //@line 297 "_lsprof.c"
        var $11=HEAP[$10]; //@line 297 "_lsprof.c"
        var $12=($11) - 1; //@line 297 "_lsprof.c"
        var $13=$9; //@line 297 "_lsprof.c"
        HEAP[$13]=$12; //@line 297 "_lsprof.c"
        var $14=$9; //@line 297 "_lsprof.c"
        var $15=HEAP[$14]; //@line 297 "_lsprof.c"
        var $16=($15)==0; //@line 297 "_lsprof.c"
        if ($16) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 297 "_lsprof.c"
      case 1: // $bb
        var $17=$entry1; //@line 297 "_lsprof.c"
        var $18=$17+12; //@line 297 "_lsprof.c"
        var $19=HEAP[$18]; //@line 297 "_lsprof.c"
        var $20=$19+4; //@line 297 "_lsprof.c"
        var $21=HEAP[$20]; //@line 297 "_lsprof.c"
        var $22=$21+24; //@line 297 "_lsprof.c"
        var $23=HEAP[$22]; //@line 297 "_lsprof.c"
        var $24=$entry1; //@line 297 "_lsprof.c"
        var $25=$24+12; //@line 297 "_lsprof.c"
        var $26=HEAP[$25]; //@line 297 "_lsprof.c"
        FUNCTION_TABLE[$23]($26); //@line 297 "_lsprof.c"
        __label__ = 2; break; //@line 297 "_lsprof.c"
      case 2: // $bb2
        var $27=$entry1; //@line 298 "_lsprof.c"
        var $28=$27; //@line 298 "_lsprof.c"
        _free($28); //@line 298 "_lsprof.c"
        $0=0; //@line 299 "_lsprof.c"
        var $29=$0; //@line 299 "_lsprof.c"
        $retval=$29; //@line 299 "_lsprof.c"
        var $retval3=$retval; //@line 299 "_lsprof.c"
        ;
        return $retval3; //@line 299 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _clearEntries($pObj) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr;
        var $c;
        $pObj_addr=$pObj;
        var $0=$pObj_addr; //@line 304 "_lsprof.c"
        var $1=$0+8; //@line 304 "_lsprof.c"
        var $2=HEAP[$1]; //@line 304 "_lsprof.c"
        var $3=_RotatingTree_Enum($2, (FUNCTION_TABLE_OFFSET + 4), 0); //@line 304 "_lsprof.c"
        var $4=$pObj_addr; //@line 305 "_lsprof.c"
        var $5=$4+8; //@line 305 "_lsprof.c"
        HEAP[$5]=0; //@line 305 "_lsprof.c"
        var $6=$pObj_addr; //@line 307 "_lsprof.c"
        var $7=$6+12; //@line 307 "_lsprof.c"
        var $8=HEAP[$7]; //@line 307 "_lsprof.c"
        var $9=($8)!=0; //@line 307 "_lsprof.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 307 "_lsprof.c"
      case 1: // $bb
        var $10=$pObj_addr; //@line 308 "_lsprof.c"
        var $11=$10+12; //@line 308 "_lsprof.c"
        var $12=HEAP[$11]; //@line 308 "_lsprof.c"
        var $13=$12; //@line 308 "_lsprof.c"
        _free($13); //@line 308 "_lsprof.c"
        var $14=$pObj_addr; //@line 309 "_lsprof.c"
        var $15=$14+12; //@line 309 "_lsprof.c"
        HEAP[$15]=0; //@line 309 "_lsprof.c"
        __label__ = 2; break; //@line 309 "_lsprof.c"
      case 2: // $bb3_preheader
        var $16=$pObj_addr; //@line 311 "_lsprof.c"
        var $17=$16+16; //@line 311 "_lsprof.c"
        var $18=HEAP[$17]; //@line 311 "_lsprof.c"
        var $19=($18)!=0; //@line 311 "_lsprof.c"
        var $20=$pObj_addr; //@line 312 "_lsprof.c"
        var $21=$20+16; //@line 312 "_lsprof.c"
        if ($19) { __lastLabel__ = 2; __label__ = 3; break; } else { __lastLabel__ = 2; __label__ = 4; break; } //@line 311 "_lsprof.c"
      case 3: // $bb2
        var $22=__lastLabel__ == 3 ? $36 : ($21);
        var $23=HEAP[$22]; //@line 312 "_lsprof.c"
        $c=$23; //@line 312 "_lsprof.c"
        var $24=$c; //@line 313 "_lsprof.c"
        var $25=$24+16; //@line 313 "_lsprof.c"
        var $26=HEAP[$25]; //@line 313 "_lsprof.c"
        var $27=$pObj_addr; //@line 313 "_lsprof.c"
        var $28=$27+16; //@line 313 "_lsprof.c"
        HEAP[$28]=$26; //@line 313 "_lsprof.c"
        var $29=$c; //@line 314 "_lsprof.c"
        var $30=$29; //@line 314 "_lsprof.c"
        _free($30); //@line 314 "_lsprof.c"
        var $31=$pObj_addr; //@line 311 "_lsprof.c"
        var $32=$31+16; //@line 311 "_lsprof.c"
        var $33=HEAP[$32]; //@line 311 "_lsprof.c"
        var $34=($33)!=0; //@line 311 "_lsprof.c"
        var $35=$pObj_addr; //@line 312 "_lsprof.c"
        var $36=$35+16; //@line 312 "_lsprof.c"
        if ($34) { __lastLabel__ = 3; __label__ = 3; break; } else { __lastLabel__ = 3; __label__ = 4; break; } //@line 311 "_lsprof.c"
      case 4: // $bb4
        var $_lcssa=__lastLabel__ == 2 ? $21 : ($36);
        HEAP[$_lcssa]=0; //@line 316 "_lsprof.c"
        ;
        return; //@line 317 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Stop($pObj, $self, $entry1) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr_i;
        var $caller_addr_i;
        var $entry_addr_i;
        var $retval_i1;
        var $0;
        var $retval_i;
        var $1;
        var $tv_i=__stackBase__;
        var $ret_i;
        var $pObj_addr;
        var $self_addr;
        var $entry_addr;
        var $iftmp_3;
        var $tt;
        var $it;
        var $caller;
        var $subentry;
        $pObj_addr=$pObj;
        $self_addr=$self;
        $entry_addr=$entry1;
        var $2=$pObj_addr; //@line 342 "_lsprof.c"
        var $3=$2+24; //@line 342 "_lsprof.c"
        var $4=HEAP[$3]; //@line 342 "_lsprof.c"
        var $5=($4)!=0; //@line 342 "_lsprof.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 342 "_lsprof.c"
      case 1: // $bb
        var $6=$pObj_addr; //@line 342 "_lsprof.c"
        var $7=_CallExternalTimer($6); //@line 342 "_lsprof.c"
        $iftmp_3=$7; //@line 342 "_lsprof.c"
        __label__ = 3; break; //@line 342 "_lsprof.c"
      case 2: // $bb2
        var $8=_gettimeofday($tv_i, 0); //@line 56 "_lsprof.c"
        var $9=$tv_i; //@line 58 "_lsprof.c"
        var $10=HEAP[$9]; //@line 58 "_lsprof.c"
        var $11=($10); //@line 58 "_lsprof.c"
        $ret_i=$11; //@line 58 "_lsprof.c"
        var $12=$ret_i; //@line 59 "_lsprof.c"
        var $13=($12) * 1000000; //@line 59 "_lsprof.c"
        var $14=$tv_i+4; //@line 59 "_lsprof.c"
        var $15=HEAP[$14]; //@line 59 "_lsprof.c"
        var $16=($15); //@line 59 "_lsprof.c"
        var $17=($16) + ($13); //@line 59 "_lsprof.c"
        $ret_i=$17; //@line 59 "_lsprof.c"
        var $18=$ret_i; //@line 60 "_lsprof.c"
        $1=$18; //@line 60 "_lsprof.c"
        var $19=$1; //@line 60 "_lsprof.c"
        $retval_i=$19; //@line 60 "_lsprof.c"
        var $retval1_i=$retval_i; //@line 60 "_lsprof.c"
        $iftmp_3=$retval1_i; //@line 342 "_lsprof.c"
        __label__ = 3; break; //@line 342 "_lsprof.c"
      case 3: // $bb3
        var $20=$self_addr; //@line 342 "_lsprof.c"
        var $21=$20; //@line 342 "_lsprof.c"
        var $22=HEAP[$21]; //@line 342 "_lsprof.c"
        var $23=$iftmp_3; //@line 342 "_lsprof.c"
        var $24=($23) - ($22); //@line 342 "_lsprof.c"
        $tt=$24; //@line 342 "_lsprof.c"
        var $25=$self_addr; //@line 343 "_lsprof.c"
        var $26=$25+8; //@line 343 "_lsprof.c"
        var $27=HEAP[$26]; //@line 343 "_lsprof.c"
        var $28=$tt; //@line 343 "_lsprof.c"
        var $29=($28) - ($27); //@line 343 "_lsprof.c"
        $it=$29; //@line 343 "_lsprof.c"
        var $30=$self_addr; //@line 344 "_lsprof.c"
        var $31=$30+16; //@line 344 "_lsprof.c"
        var $32=HEAP[$31]; //@line 344 "_lsprof.c"
        var $33=($32)!=0; //@line 344 "_lsprof.c"
        if ($33) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 344 "_lsprof.c"
      case 4: // $bb4
        var $34=$self_addr; //@line 345 "_lsprof.c"
        var $35=$34+16; //@line 345 "_lsprof.c"
        var $36=HEAP[$35]; //@line 345 "_lsprof.c"
        var $37=$self_addr; //@line 345 "_lsprof.c"
        var $38=$37+16; //@line 345 "_lsprof.c"
        var $39=HEAP[$38]; //@line 345 "_lsprof.c"
        var $40=$39+8; //@line 345 "_lsprof.c"
        var $41=HEAP[$40]; //@line 345 "_lsprof.c"
        var $42=$tt; //@line 345 "_lsprof.c"
        var $43=($42) + ($41); //@line 345 "_lsprof.c"
        var $44=$36+8; //@line 345 "_lsprof.c"
        HEAP[$44]=$43; //@line 345 "_lsprof.c"
        __label__ = 5; break; //@line 345 "_lsprof.c"
      case 5: // $bb5
        var $45=$self_addr; //@line 346 "_lsprof.c"
        var $46=$45+16; //@line 346 "_lsprof.c"
        var $47=HEAP[$46]; //@line 346 "_lsprof.c"
        var $48=$pObj_addr; //@line 346 "_lsprof.c"
        var $49=$48+12; //@line 346 "_lsprof.c"
        HEAP[$49]=$47; //@line 346 "_lsprof.c"
        var $50=$entry_addr; //@line 347 "_lsprof.c"
        var $51=$50+40; //@line 347 "_lsprof.c"
        var $52=HEAP[$51]; //@line 347 "_lsprof.c"
        var $53=($52) - 1; //@line 347 "_lsprof.c"
        var $54=$entry_addr; //@line 347 "_lsprof.c"
        var $55=$54+40; //@line 347 "_lsprof.c"
        HEAP[$55]=$53; //@line 347 "_lsprof.c"
        var $56=$entry_addr; //@line 347 "_lsprof.c"
        var $57=$56+40; //@line 347 "_lsprof.c"
        var $58=HEAP[$57]; //@line 347 "_lsprof.c"
        var $59=($58)==0; //@line 347 "_lsprof.c"
        var $60=$entry_addr; //@line 348 "_lsprof.c"
        if ($59) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 347 "_lsprof.c"
      case 6: // $bb6
        var $61=$60+16; //@line 348 "_lsprof.c"
        var $62=HEAP[$61]; //@line 348 "_lsprof.c"
        var $63=$tt; //@line 348 "_lsprof.c"
        var $64=($63) + ($62); //@line 348 "_lsprof.c"
        var $65=$entry_addr; //@line 348 "_lsprof.c"
        var $66=$65+16; //@line 348 "_lsprof.c"
        HEAP[$66]=$64; //@line 348 "_lsprof.c"
        __label__ = 8; break; //@line 348 "_lsprof.c"
      case 7: // $bb7
        var $67=$60+36; //@line 350 "_lsprof.c"
        var $68=HEAP[$67]; //@line 350 "_lsprof.c"
        var $69=($68) + 1; //@line 350 "_lsprof.c"
        var $70=$entry_addr; //@line 350 "_lsprof.c"
        var $71=$70+36; //@line 350 "_lsprof.c"
        HEAP[$71]=$69; //@line 350 "_lsprof.c"
        __label__ = 8; break; //@line 350 "_lsprof.c"
      case 8: // $bb8
        var $72=$entry_addr; //@line 351 "_lsprof.c"
        var $73=$72+24; //@line 351 "_lsprof.c"
        var $74=HEAP[$73]; //@line 351 "_lsprof.c"
        var $75=$it; //@line 351 "_lsprof.c"
        var $76=($75) + ($74); //@line 351 "_lsprof.c"
        var $77=$entry_addr; //@line 351 "_lsprof.c"
        var $78=$77+24; //@line 351 "_lsprof.c"
        HEAP[$78]=$76; //@line 351 "_lsprof.c"
        var $79=$entry_addr; //@line 352 "_lsprof.c"
        var $80=$79+32; //@line 352 "_lsprof.c"
        var $81=HEAP[$80]; //@line 352 "_lsprof.c"
        var $82=($81) + 1; //@line 352 "_lsprof.c"
        var $83=$entry_addr; //@line 352 "_lsprof.c"
        var $84=$83+32; //@line 352 "_lsprof.c"
        HEAP[$84]=$82; //@line 352 "_lsprof.c"
        var $85=$pObj_addr; //@line 353 "_lsprof.c"
        var $86=$85+20; //@line 353 "_lsprof.c"
        var $87=HEAP[$86]; //@line 353 "_lsprof.c"
        var $88=($87) & 2; //@line 353 "_lsprof.c"
        var $89=($88)!=0; //@line 353 "_lsprof.c"
        if ($89) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 353 "_lsprof.c"
      case 9: // $bb9
        var $90=$self_addr; //@line 353 "_lsprof.c"
        var $91=$90+16; //@line 353 "_lsprof.c"
        var $92=HEAP[$91]; //@line 353 "_lsprof.c"
        var $93=($92)!=0; //@line 353 "_lsprof.c"
        if ($93) { __label__ = 10; break; } else { __label__ = 15; break; } //@line 353 "_lsprof.c"
      case 10: // $bb10
        var $94=$self_addr; //@line 355 "_lsprof.c"
        var $95=$94+16; //@line 355 "_lsprof.c"
        var $96=HEAP[$95]; //@line 355 "_lsprof.c"
        var $97=$96+20; //@line 355 "_lsprof.c"
        var $98=HEAP[$97]; //@line 355 "_lsprof.c"
        $caller=$98; //@line 355 "_lsprof.c"
        var $99=$pObj_addr; //@line 356 "_lsprof.c"
        var $100=$caller; //@line 356 "_lsprof.c"
        var $101=$entry_addr; //@line 356 "_lsprof.c"
        $pObj_addr_i=$99;
        $caller_addr_i=$100;
        $entry_addr_i=$101;
        var $102=$caller_addr_i; //@line 263 "_lsprof.c"
        var $103=$102+44; //@line 263 "_lsprof.c"
        var $104=$entry_addr_i; //@line 263 "_lsprof.c"
        var $105=$104; //@line 263 "_lsprof.c"
        var $106=_RotatingTree_Get($103, $105); //@line 263 "_lsprof.c"
        var $107=$106; //@line 263 "_lsprof.c"
        $0=$107; //@line 263 "_lsprof.c"
        var $108=$0; //@line 263 "_lsprof.c"
        $retval_i1=$108; //@line 263 "_lsprof.c"
        var $retval2_i=$retval_i1; //@line 263 "_lsprof.c"
        $subentry=$retval2_i; //@line 356 "_lsprof.c"
        var $109=$subentry; //@line 357 "_lsprof.c"
        var $110=($109)!=0; //@line 357 "_lsprof.c"
        if ($110) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 357 "_lsprof.c"
      case 11: // $bb11
        var $111=$subentry; //@line 358 "_lsprof.c"
        var $112=$111+36; //@line 358 "_lsprof.c"
        var $113=HEAP[$112]; //@line 358 "_lsprof.c"
        var $114=($113) - 1; //@line 358 "_lsprof.c"
        var $115=$subentry; //@line 358 "_lsprof.c"
        var $116=$115+36; //@line 358 "_lsprof.c"
        HEAP[$116]=$114; //@line 358 "_lsprof.c"
        var $117=$subentry; //@line 358 "_lsprof.c"
        var $118=$117+36; //@line 358 "_lsprof.c"
        var $119=HEAP[$118]; //@line 358 "_lsprof.c"
        var $120=($119)==0; //@line 358 "_lsprof.c"
        var $121=$subentry; //@line 359 "_lsprof.c"
        if ($120) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 358 "_lsprof.c"
      case 12: // $bb12
        var $122=$121+12; //@line 359 "_lsprof.c"
        var $123=HEAP[$122]; //@line 359 "_lsprof.c"
        var $124=$tt; //@line 359 "_lsprof.c"
        var $125=($124) + ($123); //@line 359 "_lsprof.c"
        var $126=$subentry; //@line 359 "_lsprof.c"
        var $127=$126+12; //@line 359 "_lsprof.c"
        HEAP[$127]=$125; //@line 359 "_lsprof.c"
        __label__ = 14; break; //@line 359 "_lsprof.c"
      case 13: // $bb13
        var $128=$121+32; //@line 361 "_lsprof.c"
        var $129=HEAP[$128]; //@line 361 "_lsprof.c"
        var $130=($129) + 1; //@line 361 "_lsprof.c"
        var $131=$subentry; //@line 361 "_lsprof.c"
        var $132=$131+32; //@line 361 "_lsprof.c"
        HEAP[$132]=$130; //@line 361 "_lsprof.c"
        __label__ = 14; break; //@line 361 "_lsprof.c"
      case 14: // $bb14
        var $133=$subentry; //@line 362 "_lsprof.c"
        var $134=$133+20; //@line 362 "_lsprof.c"
        var $135=HEAP[$134]; //@line 362 "_lsprof.c"
        var $136=$it; //@line 362 "_lsprof.c"
        var $137=($136) + ($135); //@line 362 "_lsprof.c"
        var $138=$subentry; //@line 362 "_lsprof.c"
        var $139=$138+20; //@line 362 "_lsprof.c"
        HEAP[$139]=$137; //@line 362 "_lsprof.c"
        var $140=$subentry; //@line 363 "_lsprof.c"
        var $141=$140+28; //@line 363 "_lsprof.c"
        var $142=HEAP[$141]; //@line 363 "_lsprof.c"
        var $143=($142) + 1; //@line 363 "_lsprof.c"
        var $144=$subentry; //@line 363 "_lsprof.c"
        var $145=$144+28; //@line 363 "_lsprof.c"
        HEAP[$145]=$143; //@line 363 "_lsprof.c"
        __label__ = 15; break; //@line 363 "_lsprof.c"
      case 15: // $return
        STACKTOP = __stackBase__;
        return; //@line 366 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ptrace_enter_call($self, $key, $userObj) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval_i5_i;
        var $0;
        var $tv_i_i=__stackBase__;
        var $ret_i_i;
        var $root_addr_i_i_i;
        var $node_addr_i_i_i;
        var $pObj_addr_i1_i;
        var $caller_addr_i2_i;
        var $entry_addr_i3_i;
        var $retval_i4_i;
        var $1;
        var $self_i_i4;
        var $pObj_addr_i_i;
        var $caller_addr_i_i;
        var $entry_addr_i_i;
        var $retval_i_i5;
        var $2;
        var $pObj_addr_i6;
        var $self_addr_i;
        var $entry_addr_i;
        var $iftmp_2_i;
        var $caller_i;
        var $subentry_i;
        var $root_addr_i_i;
        var $node_addr_i_i;
        var $obj_addr_i_i;
        var $retval_i_i;
        var $3;
        var $fn_i_i;
        var $mod_i_i;
        var $modname_i_i;
        var $self_i_i;
        var $name_i_i;
        var $mo_i_i;
        var $res_i_i;
        var $pObj_addr_i1;
        var $key_addr_i2;
        var $userObj_addr_i;
        var $retval_i3;
        var $4;
        var $self_i;
        var $pObj_addr_i;
        var $key_addr_i;
        var $retval_i;
        var $5;
        var $self_addr;
        var $key_addr;
        var $userObj_addr;
        var $pObj;
        var $profEntry;
        var $pContext;
        var $last_type=__stackBase__+8;
        var $last_value=__stackBase__+12;
        var $last_tb=__stackBase__+16;
        $self_addr=$self;
        $key_addr=$key;
        $userObj_addr=$userObj;
        var $6=$self_addr; //@line 373 "_lsprof.c"
        var $7=$6; //@line 373 "_lsprof.c"
        $pObj=$7; //@line 373 "_lsprof.c"
        _PyErr_Fetch($last_type, $last_value, $last_tb); //@line 384 "_lsprof.c"
        var $8=$pObj; //@line 386 "_lsprof.c"
        var $9=$key_addr; //@line 386 "_lsprof.c"
        $pObj_addr_i=$8;
        $key_addr_i=$9;
        var $10=$pObj_addr_i; //@line 257 "_lsprof.c"
        var $11=$10+8; //@line 257 "_lsprof.c"
        var $12=$key_addr_i; //@line 257 "_lsprof.c"
        var $13=_RotatingTree_Get($11, $12); //@line 257 "_lsprof.c"
        var $14=$13; //@line 257 "_lsprof.c"
        $5=$14; //@line 257 "_lsprof.c"
        var $15=$5; //@line 257 "_lsprof.c"
        $retval_i=$15; //@line 257 "_lsprof.c"
        var $retval1_i=$retval_i; //@line 257 "_lsprof.c"
        $profEntry=$retval1_i; //@line 386 "_lsprof.c"
        var $16=$profEntry; //@line 387 "_lsprof.c"
        var $17=($16)==0; //@line 387 "_lsprof.c"
        if ($17) { __label__ = 1; break; } else { __label__ = 38; break; } //@line 387 "_lsprof.c"
      case 1: // $bb
        var $18=$pObj; //@line 388 "_lsprof.c"
        var $19=$key_addr; //@line 388 "_lsprof.c"
        var $20=$userObj_addr; //@line 388 "_lsprof.c"
        $pObj_addr_i1=$18;
        $key_addr_i2=$19;
        $userObj_addr_i=$20;
        var $21=_malloc(48); //@line 230 "_lsprof.c"
        var $22=$21; //@line 230 "_lsprof.c"
        $self_i=$22; //@line 230 "_lsprof.c"
        var $23=$self_i; //@line 231 "_lsprof.c"
        var $24=($23)==0; //@line 231 "_lsprof.c"
        if ($24) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 231 "_lsprof.c"
      case 2: // $bb_i
        var $25=$pObj_addr_i1; //@line 232 "_lsprof.c"
        var $26=$25+20; //@line 232 "_lsprof.c"
        var $27=HEAP[$26]; //@line 232 "_lsprof.c"
        var $28=($27) | 256; //@line 232 "_lsprof.c"
        var $29=$pObj_addr_i1; //@line 232 "_lsprof.c"
        var $30=$29+20; //@line 232 "_lsprof.c"
        HEAP[$30]=$28; //@line 232 "_lsprof.c"
        $4=0; //@line 233 "_lsprof.c"
        __label__ = 36; break; //@line 233 "_lsprof.c"
      case 3: // $bb1_i
        var $31=$userObj_addr_i; //@line 235 "_lsprof.c"
        $obj_addr_i_i=$31;
        var $32=$obj_addr_i_i; //@line 169 "_lsprof.c"
        var $33=$32+4; //@line 169 "_lsprof.c"
        var $34=HEAP[$33]; //@line 169 "_lsprof.c"
        var $35=($34)!=(_PyCFunction_Type); //@line 169 "_lsprof.c"
        var $36=$obj_addr_i_i; //@line 170 "_lsprof.c"
        if ($35) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 169 "_lsprof.c"
      case 4: // $bb_i_i
        var $37=$36; //@line 170 "_lsprof.c"
        var $38=HEAP[$37]; //@line 170 "_lsprof.c"
        var $39=($38) + 1; //@line 170 "_lsprof.c"
        var $40=$obj_addr_i_i; //@line 170 "_lsprof.c"
        var $41=$40; //@line 170 "_lsprof.c"
        HEAP[$41]=$39; //@line 170 "_lsprof.c"
        var $42=$obj_addr_i_i; //@line 171 "_lsprof.c"
        $3=$42; //@line 171 "_lsprof.c"
        __lastLabel__ = 4; __label__ = 29; break; //@line 171 "_lsprof.c"
      case 5: // $bb1_i_i
        var $43=$36; //@line 176 "_lsprof.c"
        $fn_i_i=$43; //@line 176 "_lsprof.c"
        var $44=$fn_i_i; //@line 178 "_lsprof.c"
        var $45=$44+12; //@line 178 "_lsprof.c"
        var $46=HEAP[$45]; //@line 178 "_lsprof.c"
        var $47=($46)==0; //@line 178 "_lsprof.c"
        var $48=$fn_i_i; //@line 180 "_lsprof.c"
        if ($47) { __label__ = 6; break; } else { __label__ = 18; break; } //@line 178 "_lsprof.c"
      case 6: // $bb2_i_i
        var $49=$48+16; //@line 180 "_lsprof.c"
        var $50=HEAP[$49]; //@line 180 "_lsprof.c"
        $mod_i_i=$50; //@line 180 "_lsprof.c"
        var $51=$mod_i_i; //@line 182 "_lsprof.c"
        var $52=($51)==0; //@line 182 "_lsprof.c"
        if ($52) { __label__ = 14; break; } else { __label__ = 7; break; } //@line 182 "_lsprof.c"
      case 7: // $bb3_i_i
        var $53=$mod_i_i; //@line 182 "_lsprof.c"
        var $54=$53+4; //@line 182 "_lsprof.c"
        var $55=HEAP[$54]; //@line 182 "_lsprof.c"
        var $56=$55+84; //@line 182 "_lsprof.c"
        var $57=HEAP[$56]; //@line 182 "_lsprof.c"
        var $58=($57) & 134217728; //@line 182 "_lsprof.c"
        var $59=($58)==0; //@line 182 "_lsprof.c"
        var $_pr_i_i=$mod_i_i;
        if ($59) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 182 "_lsprof.c"
      case 8: // $bb4_i_i
        var $60=$_pr_i_i; //@line 183 "_lsprof.c"
        var $61=$60+20; //@line 183 "_lsprof.c"
        var $62=$61; //@line 183 "_lsprof.c"
        $modname_i_i=$62; //@line 183 "_lsprof.c"
        __label__ = 15; break; //@line 183 "_lsprof.c"
      case 9: // $bb5_i_i
        var $63=($_pr_i_i)==0; //@line 185 "_lsprof.c"
        if ($63) { __label__ = 14; break; } else { __label__ = 10; break; } //@line 185 "_lsprof.c"
      case 10: // $bb6_i_i
        var $64=$mod_i_i; //@line 185 "_lsprof.c"
        var $65=$64+4; //@line 185 "_lsprof.c"
        var $66=HEAP[$65]; //@line 185 "_lsprof.c"
        var $67=($66)==(_PyModule_Type); //@line 185 "_lsprof.c"
        if ($67) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 185 "_lsprof.c"
      case 11: // $bb7_i_i
        var $68=$mod_i_i; //@line 185 "_lsprof.c"
        var $69=$68+4; //@line 185 "_lsprof.c"
        var $70=HEAP[$69]; //@line 185 "_lsprof.c"
        var $71=_PyType_IsSubtype($70, _PyModule_Type); //@line 185 "_lsprof.c"
        var $72=($71)!=0; //@line 185 "_lsprof.c"
        if ($72) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 185 "_lsprof.c"
      case 12: // $bb8_i_i
        var $73=$mod_i_i; //@line 186 "_lsprof.c"
        var $74=_PyModule_GetName($73); //@line 186 "_lsprof.c"
        $modname_i_i=$74; //@line 186 "_lsprof.c"
        var $75=($74)==0; //@line 187 "_lsprof.c"
        if ($75) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 187 "_lsprof.c"
      case 13: // $bb9_i_i
        _PyErr_Clear(); //@line 188 "_lsprof.c"
        $modname_i_i=__str; //@line 189 "_lsprof.c"
        __label__ = 15; break; //@line 189 "_lsprof.c"
      case 14: // $bb11_i_i
        $modname_i_i=__str; //@line 193 "_lsprof.c"
        __label__ = 15; break; //@line 193 "_lsprof.c"
      case 15: // $bb12_i_i
        var $76=$modname_i_i; //@line 195 "_lsprof.c"
        var $77=_strcmp($76, __str); //@line 195 "_lsprof.c"
        var $78=($77)!=0; //@line 195 "_lsprof.c"
        var $79=$fn_i_i; //@line 196 "_lsprof.c"
        var $80=$79+8; //@line 196 "_lsprof.c"
        var $81=HEAP[$80]; //@line 196 "_lsprof.c"
        var $82=$81; //@line 196 "_lsprof.c"
        var $83=HEAP[$82]; //@line 196 "_lsprof.c"
        if ($78) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 195 "_lsprof.c"
      case 16: // $bb13_i_i
        var $84=$modname_i_i; //@line 196 "_lsprof.c"
        var $85=_PyString_FromFormat(__str1, $84, $83); //@line 196 "_lsprof.c"
        $3=$85; //@line 196 "_lsprof.c"
        __lastLabel__ = 16; __label__ = 29; break; //@line 196 "_lsprof.c"
      case 17: // $bb14_i_i
        var $86=_PyString_FromFormat(__str2, $83); //@line 200 "_lsprof.c"
        $3=$86; //@line 200 "_lsprof.c"
        __lastLabel__ = 17; __label__ = 29; break; //@line 200 "_lsprof.c"
      case 18: // $bb15_i_i
        var $87=$48+12; //@line 207 "_lsprof.c"
        var $88=HEAP[$87]; //@line 207 "_lsprof.c"
        $self_i_i=$88; //@line 207 "_lsprof.c"
        var $89=$fn_i_i; //@line 208 "_lsprof.c"
        var $90=$89+8; //@line 208 "_lsprof.c"
        var $91=HEAP[$90]; //@line 208 "_lsprof.c"
        var $92=$91; //@line 208 "_lsprof.c"
        var $93=HEAP[$92]; //@line 208 "_lsprof.c"
        var $94=_PyString_FromString($93); //@line 208 "_lsprof.c"
        $name_i_i=$94; //@line 208 "_lsprof.c"
        var $95=$name_i_i; //@line 209 "_lsprof.c"
        var $96=($95)!=0; //@line 209 "_lsprof.c"
        if ($96) { __label__ = 19; break; } else { __label__ = 28; break; } //@line 209 "_lsprof.c"
      case 19: // $bb16_i_i
        var $97=$self_i_i; //@line 210 "_lsprof.c"
        var $98=$97+4; //@line 210 "_lsprof.c"
        var $99=HEAP[$98]; //@line 210 "_lsprof.c"
        var $100=$name_i_i; //@line 210 "_lsprof.c"
        var $101=__PyType_Lookup($99, $100); //@line 210 "_lsprof.c"
        $mo_i_i=$101; //@line 210 "_lsprof.c"
        var $102=$mo_i_i; //@line 211 "_lsprof.c"
        var $103=($102)!=0; //@line 211 "_lsprof.c"
        if ($103) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 211 "_lsprof.c"
      case 20: // $bb17_i_i
        var $104=$mo_i_i; //@line 211 "_lsprof.c"
        var $105=$104; //@line 211 "_lsprof.c"
        var $106=HEAP[$105]; //@line 211 "_lsprof.c"
        var $107=($106) + 1; //@line 211 "_lsprof.c"
        var $108=$mo_i_i; //@line 211 "_lsprof.c"
        var $109=$108; //@line 211 "_lsprof.c"
        HEAP[$109]=$107; //@line 211 "_lsprof.c"
        __label__ = 21; break; //@line 211 "_lsprof.c"
      case 21: // $bb18_i_i
        var $110=$name_i_i; //@line 212 "_lsprof.c"
        var $111=$110; //@line 212 "_lsprof.c"
        var $112=HEAP[$111]; //@line 212 "_lsprof.c"
        var $113=($112) - 1; //@line 212 "_lsprof.c"
        var $114=$name_i_i; //@line 212 "_lsprof.c"
        var $115=$114; //@line 212 "_lsprof.c"
        HEAP[$115]=$113; //@line 212 "_lsprof.c"
        var $116=$name_i_i; //@line 212 "_lsprof.c"
        var $117=$116; //@line 212 "_lsprof.c"
        var $118=HEAP[$117]; //@line 212 "_lsprof.c"
        var $119=($118)==0; //@line 212 "_lsprof.c"
        if ($119) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 212 "_lsprof.c"
      case 22: // $bb19_i_i
        var $120=$name_i_i; //@line 212 "_lsprof.c"
        var $121=$120+4; //@line 212 "_lsprof.c"
        var $122=HEAP[$121]; //@line 212 "_lsprof.c"
        var $123=$122+24; //@line 212 "_lsprof.c"
        var $124=HEAP[$123]; //@line 212 "_lsprof.c"
        var $125=$name_i_i; //@line 212 "_lsprof.c"
        FUNCTION_TABLE[$124]($125); //@line 212 "_lsprof.c"
        __label__ = 23; break; //@line 212 "_lsprof.c"
      case 23: // $bb20_i_i
        var $126=$mo_i_i; //@line 213 "_lsprof.c"
        var $127=($126)!=0; //@line 213 "_lsprof.c"
        if ($127) { __label__ = 24; break; } else { __label__ = 28; break; } //@line 213 "_lsprof.c"
      case 24: // $bb21_i_i
        var $128=$mo_i_i; //@line 214 "_lsprof.c"
        var $129=_PyObject_Repr($128); //@line 214 "_lsprof.c"
        $res_i_i=$129; //@line 214 "_lsprof.c"
        var $130=$mo_i_i; //@line 215 "_lsprof.c"
        var $131=$130; //@line 215 "_lsprof.c"
        var $132=HEAP[$131]; //@line 215 "_lsprof.c"
        var $133=($132) - 1; //@line 215 "_lsprof.c"
        var $134=$mo_i_i; //@line 215 "_lsprof.c"
        var $135=$134; //@line 215 "_lsprof.c"
        HEAP[$135]=$133; //@line 215 "_lsprof.c"
        var $136=$mo_i_i; //@line 215 "_lsprof.c"
        var $137=$136; //@line 215 "_lsprof.c"
        var $138=HEAP[$137]; //@line 215 "_lsprof.c"
        var $139=($138)==0; //@line 215 "_lsprof.c"
        if ($139) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 215 "_lsprof.c"
      case 25: // $bb22_i_i
        var $140=$mo_i_i; //@line 215 "_lsprof.c"
        var $141=$140+4; //@line 215 "_lsprof.c"
        var $142=HEAP[$141]; //@line 215 "_lsprof.c"
        var $143=$142+24; //@line 215 "_lsprof.c"
        var $144=HEAP[$143]; //@line 215 "_lsprof.c"
        var $145=$mo_i_i; //@line 215 "_lsprof.c"
        FUNCTION_TABLE[$144]($145); //@line 215 "_lsprof.c"
        __label__ = 26; break; //@line 215 "_lsprof.c"
      case 26: // $bb23_i_i
        var $146=$res_i_i; //@line 216 "_lsprof.c"
        var $147=($146)!=0; //@line 216 "_lsprof.c"
        if ($147) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 216 "_lsprof.c"
      case 27: // $bb24_i_i
        var $148=$res_i_i; //@line 217 "_lsprof.c"
        $3=$148; //@line 217 "_lsprof.c"
        __lastLabel__ = 27; __label__ = 29; break; //@line 217 "_lsprof.c"
      case 28: // $bb25_i_i
        _PyErr_Clear(); //@line 220 "_lsprof.c"
        var $149=$fn_i_i; //@line 221 "_lsprof.c"
        var $150=$149+8; //@line 221 "_lsprof.c"
        var $151=HEAP[$150]; //@line 221 "_lsprof.c"
        var $152=$151; //@line 221 "_lsprof.c"
        var $153=HEAP[$152]; //@line 221 "_lsprof.c"
        var $154=_PyString_FromFormat(__str3, $153); //@line 221 "_lsprof.c"
        $3=$154; //@line 221 "_lsprof.c"
        __lastLabel__ = 28; __label__ = 29; break; //@line 221 "_lsprof.c"
      case 29: // $normalizeUserObj_exit_i
        var $155=__lastLabel__ == 4 ? $42 : (__lastLabel__ == 16 ? $85 : (__lastLabel__ == 17 ? $86 : (__lastLabel__ == 27 ? $148 : ($154))));
        $retval_i_i=$155; //@line 171 "_lsprof.c"
        $userObj_addr_i=$155; //@line 235 "_lsprof.c"
        var $156=($155)==0; //@line 236 "_lsprof.c"
        if ($156) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 236 "_lsprof.c"
      case 30: // $bb2_i
        _PyErr_Clear(); //@line 237 "_lsprof.c"
        var $157=$self_i; //@line 238 "_lsprof.c"
        var $158=$157; //@line 238 "_lsprof.c"
        _free($158); //@line 238 "_lsprof.c"
        var $159=$pObj_addr_i1; //@line 239 "_lsprof.c"
        var $160=$159+20; //@line 239 "_lsprof.c"
        var $161=HEAP[$160]; //@line 239 "_lsprof.c"
        var $162=($161) | 256; //@line 239 "_lsprof.c"
        var $163=$pObj_addr_i1; //@line 239 "_lsprof.c"
        var $164=$163+20; //@line 239 "_lsprof.c"
        HEAP[$164]=$162; //@line 239 "_lsprof.c"
        $4=0; //@line 240 "_lsprof.c"
        __label__ = 36; break; //@line 240 "_lsprof.c"
      case 31: // $bb3_i
        var $165=$self_i; //@line 242 "_lsprof.c"
        var $166=$165; //@line 242 "_lsprof.c"
        var $167=$166; //@line 242 "_lsprof.c"
        var $168=$key_addr_i2; //@line 242 "_lsprof.c"
        HEAP[$167]=$168; //@line 242 "_lsprof.c"
        var $169=$self_i; //@line 243 "_lsprof.c"
        var $170=$169+12; //@line 243 "_lsprof.c"
        var $171=$userObj_addr_i; //@line 243 "_lsprof.c"
        HEAP[$170]=$171; //@line 243 "_lsprof.c"
        var $172=$self_i; //@line 244 "_lsprof.c"
        var $173=$172+16; //@line 244 "_lsprof.c"
        HEAP[$173]=0; //@line 244 "_lsprof.c"
        var $174=$self_i; //@line 245 "_lsprof.c"
        var $175=$174+24; //@line 245 "_lsprof.c"
        HEAP[$175]=0; //@line 245 "_lsprof.c"
        var $176=$self_i; //@line 246 "_lsprof.c"
        var $177=$176+32; //@line 246 "_lsprof.c"
        HEAP[$177]=0; //@line 246 "_lsprof.c"
        var $178=$self_i; //@line 247 "_lsprof.c"
        var $179=$178+36; //@line 247 "_lsprof.c"
        HEAP[$179]=0; //@line 247 "_lsprof.c"
        var $180=$self_i; //@line 248 "_lsprof.c"
        var $181=$180+40; //@line 248 "_lsprof.c"
        HEAP[$181]=0; //@line 248 "_lsprof.c"
        var $182=$self_i; //@line 249 "_lsprof.c"
        var $183=$182+44; //@line 249 "_lsprof.c"
        HEAP[$183]=0; //@line 249 "_lsprof.c"
        var $184=$self_i; //@line 250 "_lsprof.c"
        var $185=$184; //@line 250 "_lsprof.c"
        var $186=$pObj_addr_i1; //@line 250 "_lsprof.c"
        var $187=$186+8; //@line 250 "_lsprof.c"
        $root_addr_i_i=$187;
        $node_addr_i_i=$185;
        var $188=$root_addr_i_i; //@line 33 "rotatingtree.c"
        var $189=HEAP[$188]; //@line 33 "rotatingtree.c"
        var $190=($189)!=0; //@line 33 "rotatingtree.c"
        var $191=$node_addr_i_i; //@line 34 "rotatingtree.c"
        if ($190) { __lastLabel__ = 31; __label__ = 32; break; } else { __lastLabel__ = 31; __label__ = 37; break; } //@line 33 "rotatingtree.c"
      case 32: // $bb_i1_i
        var $192=__lastLabel__ == 34 ? $206 : ($191);
        var $193=$192; //@line 34 "rotatingtree.c"
        var $194=HEAP[$193]; //@line 34 "rotatingtree.c"
        var $195=$root_addr_i_i; //@line 34 "rotatingtree.c"
        var $196=HEAP[$195]; //@line 34 "rotatingtree.c"
        var $197=$196; //@line 34 "rotatingtree.c"
        var $198=HEAP[$197]; //@line 34 "rotatingtree.c"
        var $199=($194) < ($198); //@line 34 "rotatingtree.c"
        var $200=$root_addr_i_i; //@line 35 "rotatingtree.c"
        var $201=HEAP[$200]; //@line 35 "rotatingtree.c"
        if ($199) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 34 "rotatingtree.c"
      case 33: // $bb1_i2_i
        var $202=$201+4; //@line 35 "rotatingtree.c"
        $root_addr_i_i=$202; //@line 35 "rotatingtree.c"
        __label__ = 34; break; //@line 35 "rotatingtree.c"
      case 34: // $bb3_backedge_i_i
        var $203=$root_addr_i_i; //@line 33 "rotatingtree.c"
        var $204=HEAP[$203]; //@line 33 "rotatingtree.c"
        var $205=($204)!=0; //@line 33 "rotatingtree.c"
        var $206=$node_addr_i_i; //@line 34 "rotatingtree.c"
        if ($205) { __lastLabel__ = 34; __label__ = 32; break; } else { __lastLabel__ = 34; __label__ = 37; break; } //@line 33 "rotatingtree.c"
      case 35: // $bb2_i3_i
        var $207=$201+8; //@line 37 "rotatingtree.c"
        $root_addr_i_i=$207; //@line 37 "rotatingtree.c"
        __label__ = 34; break; //@line 37 "rotatingtree.c"
      case 36: // $newProfilerEntry_exit_thread
        $retval_i3=0; //@line 233 "_lsprof.c"
        $profEntry=0; //@line 388 "_lsprof.c"
        __label__ = 58; break;
      case 37: // $newProfilerEntry_exit
        var $_lcssa_i_i=__lastLabel__ == 31 ? $191 : ($206);
        var $208=$_lcssa_i_i+4; //@line 39 "rotatingtree.c"
        HEAP[$208]=0; //@line 39 "rotatingtree.c"
        var $209=$node_addr_i_i; //@line 40 "rotatingtree.c"
        var $210=$209+8; //@line 40 "rotatingtree.c"
        HEAP[$210]=0; //@line 40 "rotatingtree.c"
        var $211=$root_addr_i_i; //@line 41 "rotatingtree.c"
        var $212=$node_addr_i_i; //@line 41 "rotatingtree.c"
        HEAP[$211]=$212; //@line 41 "rotatingtree.c"
        var $213=$self_i; //@line 251 "_lsprof.c"
        $4=$213; //@line 251 "_lsprof.c"
        $retval_i3=$213; //@line 233 "_lsprof.c"
        $profEntry=$213; //@line 388 "_lsprof.c"
        var $214=($213)==0; //@line 389 "_lsprof.c"
        if ($214) { __label__ = 58; break; } else { __label__ = 38; break; } //@line 389 "_lsprof.c"
      case 38: // $bb1
        var $215=$pObj; //@line 393 "_lsprof.c"
        var $216=$215+16; //@line 393 "_lsprof.c"
        var $217=HEAP[$216]; //@line 393 "_lsprof.c"
        $pContext=$217; //@line 393 "_lsprof.c"
        var $218=($217)!=0; //@line 394 "_lsprof.c"
        if ($218) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 394 "_lsprof.c"
      case 39: // $bb2
        var $219=$pContext; //@line 395 "_lsprof.c"
        var $220=$219+16; //@line 395 "_lsprof.c"
        var $221=HEAP[$220]; //@line 395 "_lsprof.c"
        var $222=$pObj; //@line 395 "_lsprof.c"
        var $223=$222+16; //@line 395 "_lsprof.c"
        HEAP[$223]=$221; //@line 395 "_lsprof.c"
        __label__ = 42; break; //@line 395 "_lsprof.c"
      case 40: // $bb3
        var $224=_malloc(24); //@line 399 "_lsprof.c"
        var $225=$224; //@line 399 "_lsprof.c"
        $pContext=$225; //@line 399 "_lsprof.c"
        var $226=$pContext; //@line 401 "_lsprof.c"
        var $227=($226)==0; //@line 401 "_lsprof.c"
        if ($227) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 401 "_lsprof.c"
      case 41: // $bb4
        var $228=$pObj; //@line 402 "_lsprof.c"
        var $229=$228+20; //@line 402 "_lsprof.c"
        var $230=HEAP[$229]; //@line 402 "_lsprof.c"
        var $231=($230) | 256; //@line 402 "_lsprof.c"
        var $232=$pObj; //@line 402 "_lsprof.c"
        var $233=$232+20; //@line 402 "_lsprof.c"
        HEAP[$233]=$231; //@line 402 "_lsprof.c"
        __label__ = 58; break; //@line 402 "_lsprof.c"
      case 42: // $bb5
        var $234=$pObj; //@line 406 "_lsprof.c"
        var $235=$pContext; //@line 406 "_lsprof.c"
        var $236=$profEntry; //@line 406 "_lsprof.c"
        $pObj_addr_i6=$234;
        $self_addr_i=$235;
        $entry_addr_i=$236;
        var $237=$self_addr_i; //@line 322 "_lsprof.c"
        var $238=$237+20; //@line 322 "_lsprof.c"
        var $239=$entry_addr_i; //@line 322 "_lsprof.c"
        HEAP[$238]=$239; //@line 322 "_lsprof.c"
        var $240=$self_addr_i; //@line 323 "_lsprof.c"
        var $241=$240+8; //@line 323 "_lsprof.c"
        HEAP[$241]=0; //@line 323 "_lsprof.c"
        var $242=$pObj_addr_i6; //@line 324 "_lsprof.c"
        var $243=$242+12; //@line 324 "_lsprof.c"
        var $244=HEAP[$243]; //@line 324 "_lsprof.c"
        var $245=$self_addr_i; //@line 324 "_lsprof.c"
        var $246=$245+16; //@line 324 "_lsprof.c"
        HEAP[$246]=$244; //@line 324 "_lsprof.c"
        var $247=$pObj_addr_i6; //@line 325 "_lsprof.c"
        var $248=$247+12; //@line 325 "_lsprof.c"
        var $249=$self_addr_i; //@line 325 "_lsprof.c"
        HEAP[$248]=$249; //@line 325 "_lsprof.c"
        var $250=$entry_addr_i; //@line 326 "_lsprof.c"
        var $251=$250+40; //@line 326 "_lsprof.c"
        var $252=HEAP[$251]; //@line 326 "_lsprof.c"
        var $253=($252) + 1; //@line 326 "_lsprof.c"
        var $254=$entry_addr_i; //@line 326 "_lsprof.c"
        var $255=$254+40; //@line 326 "_lsprof.c"
        HEAP[$255]=$253; //@line 326 "_lsprof.c"
        var $256=$pObj_addr_i6; //@line 327 "_lsprof.c"
        var $257=$256+20; //@line 327 "_lsprof.c"
        var $258=HEAP[$257]; //@line 327 "_lsprof.c"
        var $259=($258) & 2; //@line 327 "_lsprof.c"
        var $260=($259)!=0; //@line 327 "_lsprof.c"
        if ($260) { __label__ = 43; break; } else { __label__ = 54; break; } //@line 327 "_lsprof.c"
      case 43: // $bb_i7
        var $261=$self_addr_i; //@line 327 "_lsprof.c"
        var $262=$261+16; //@line 327 "_lsprof.c"
        var $263=HEAP[$262]; //@line 327 "_lsprof.c"
        var $264=($263)!=0; //@line 327 "_lsprof.c"
        if ($264) { __label__ = 44; break; } else { __label__ = 54; break; } //@line 327 "_lsprof.c"
      case 44: // $bb2_i8
        var $265=$self_addr_i; //@line 329 "_lsprof.c"
        var $266=$265+16; //@line 329 "_lsprof.c"
        var $267=HEAP[$266]; //@line 329 "_lsprof.c"
        var $268=$267+20; //@line 329 "_lsprof.c"
        var $269=HEAP[$268]; //@line 329 "_lsprof.c"
        $caller_i=$269; //@line 329 "_lsprof.c"
        var $270=$pObj_addr_i6; //@line 330 "_lsprof.c"
        var $271=$caller_i; //@line 330 "_lsprof.c"
        var $272=$entry_addr_i; //@line 330 "_lsprof.c"
        $pObj_addr_i_i=$270;
        $caller_addr_i_i=$271;
        $entry_addr_i_i=$272;
        var $273=$caller_addr_i_i; //@line 263 "_lsprof.c"
        var $274=$273+44; //@line 263 "_lsprof.c"
        var $275=$entry_addr_i_i; //@line 263 "_lsprof.c"
        var $276=$275; //@line 263 "_lsprof.c"
        var $277=_RotatingTree_Get($274, $276); //@line 263 "_lsprof.c"
        var $278=$277; //@line 263 "_lsprof.c"
        $2=$278; //@line 263 "_lsprof.c"
        var $279=$2; //@line 263 "_lsprof.c"
        $retval_i_i5=$279; //@line 263 "_lsprof.c"
        var $retval2_i_i=$retval_i_i5; //@line 263 "_lsprof.c"
        $subentry_i=$retval2_i_i; //@line 330 "_lsprof.c"
        var $280=$subentry_i; //@line 331 "_lsprof.c"
        var $281=($280)==0; //@line 331 "_lsprof.c"
        if ($281) { __label__ = 45; break; } else { __label__ = 53; break; } //@line 331 "_lsprof.c"
      case 45: // $bb3_i9
        var $282=$pObj_addr_i6; //@line 332 "_lsprof.c"
        var $283=$caller_i; //@line 332 "_lsprof.c"
        var $284=$entry_addr_i; //@line 332 "_lsprof.c"
        $pObj_addr_i1_i=$282;
        $caller_addr_i2_i=$283;
        $entry_addr_i3_i=$284;
        var $285=_malloc(40); //@line 271 "_lsprof.c"
        var $286=$285; //@line 271 "_lsprof.c"
        $self_i_i4=$286; //@line 271 "_lsprof.c"
        var $287=$self_i_i4; //@line 272 "_lsprof.c"
        var $288=($287)==0; //@line 272 "_lsprof.c"
        if ($288) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 272 "_lsprof.c"
      case 46: // $bb4_thread6_i
        var $289=$pObj_addr_i1_i; //@line 273 "_lsprof.c"
        var $290=$289+20; //@line 273 "_lsprof.c"
        var $291=HEAP[$290]; //@line 273 "_lsprof.c"
        var $292=($291) | 256; //@line 273 "_lsprof.c"
        var $293=$pObj_addr_i1_i; //@line 273 "_lsprof.c"
        var $294=$293+20; //@line 273 "_lsprof.c"
        HEAP[$294]=$292; //@line 273 "_lsprof.c"
        $1=0; //@line 274 "_lsprof.c"
        $retval_i4_i=0; //@line 274 "_lsprof.c"
        $subentry_i=0; //@line 332 "_lsprof.c"
        __label__ = 54; break;
      case 47: // $bb2_i_i10
        var $295=$self_i_i4; //@line 276 "_lsprof.c"
        var $296=$295; //@line 276 "_lsprof.c"
        var $297=$296; //@line 276 "_lsprof.c"
        var $298=$entry_addr_i3_i; //@line 276 "_lsprof.c"
        var $299=$298; //@line 276 "_lsprof.c"
        HEAP[$297]=$299; //@line 276 "_lsprof.c"
        var $300=$self_i_i4; //@line 277 "_lsprof.c"
        var $301=$300+12; //@line 277 "_lsprof.c"
        HEAP[$301]=0; //@line 277 "_lsprof.c"
        var $302=$self_i_i4; //@line 278 "_lsprof.c"
        var $303=$302+20; //@line 278 "_lsprof.c"
        HEAP[$303]=0; //@line 278 "_lsprof.c"
        var $304=$self_i_i4; //@line 279 "_lsprof.c"
        var $305=$304+28; //@line 279 "_lsprof.c"
        HEAP[$305]=0; //@line 279 "_lsprof.c"
        var $306=$self_i_i4; //@line 280 "_lsprof.c"
        var $307=$306+32; //@line 280 "_lsprof.c"
        HEAP[$307]=0; //@line 280 "_lsprof.c"
        var $308=$self_i_i4; //@line 281 "_lsprof.c"
        var $309=$308+36; //@line 281 "_lsprof.c"
        HEAP[$309]=0; //@line 281 "_lsprof.c"
        var $310=$self_i_i4; //@line 282 "_lsprof.c"
        var $311=$310; //@line 282 "_lsprof.c"
        var $312=$caller_addr_i2_i; //@line 282 "_lsprof.c"
        var $313=$312+44; //@line 282 "_lsprof.c"
        $root_addr_i_i_i=$313;
        $node_addr_i_i_i=$311;
        var $314=$root_addr_i_i_i; //@line 33 "rotatingtree.c"
        var $315=HEAP[$314]; //@line 33 "rotatingtree.c"
        var $316=($315)!=0; //@line 33 "rotatingtree.c"
        var $317=$node_addr_i_i_i; //@line 34 "rotatingtree.c"
        if ($316) { __lastLabel__ = 47; __label__ = 48; break; } else { __lastLabel__ = 47; __label__ = 52; break; } //@line 33 "rotatingtree.c"
      case 48: // $bb_i_i_i
        var $318=__lastLabel__ == 50 ? $332 : ($317);
        var $319=$318; //@line 34 "rotatingtree.c"
        var $320=HEAP[$319]; //@line 34 "rotatingtree.c"
        var $321=$root_addr_i_i_i; //@line 34 "rotatingtree.c"
        var $322=HEAP[$321]; //@line 34 "rotatingtree.c"
        var $323=$322; //@line 34 "rotatingtree.c"
        var $324=HEAP[$323]; //@line 34 "rotatingtree.c"
        var $325=($320) < ($324); //@line 34 "rotatingtree.c"
        var $326=$root_addr_i_i_i; //@line 35 "rotatingtree.c"
        var $327=HEAP[$326]; //@line 35 "rotatingtree.c"
        if ($325) { __label__ = 49; break; } else { __label__ = 51; break; } //@line 34 "rotatingtree.c"
      case 49: // $bb1_i_i_i
        var $328=$327+4; //@line 35 "rotatingtree.c"
        $root_addr_i_i_i=$328; //@line 35 "rotatingtree.c"
        __label__ = 50; break; //@line 35 "rotatingtree.c"
      case 50: // $bb3_backedge_i_i_i
        var $329=$root_addr_i_i_i; //@line 33 "rotatingtree.c"
        var $330=HEAP[$329]; //@line 33 "rotatingtree.c"
        var $331=($330)!=0; //@line 33 "rotatingtree.c"
        var $332=$node_addr_i_i_i; //@line 34 "rotatingtree.c"
        if ($331) { __lastLabel__ = 50; __label__ = 48; break; } else { __lastLabel__ = 50; __label__ = 52; break; } //@line 33 "rotatingtree.c"
      case 51: // $bb2_i_i_i
        var $333=$327+8; //@line 37 "rotatingtree.c"
        $root_addr_i_i_i=$333; //@line 37 "rotatingtree.c"
        __label__ = 50; break; //@line 37 "rotatingtree.c"
      case 52: // $bb4_i
        var $_lcssa_i_i_i=__lastLabel__ == 47 ? $317 : ($332);
        var $334=$_lcssa_i_i_i+4; //@line 39 "rotatingtree.c"
        HEAP[$334]=0; //@line 39 "rotatingtree.c"
        var $335=$node_addr_i_i_i; //@line 40 "rotatingtree.c"
        var $336=$335+8; //@line 40 "rotatingtree.c"
        HEAP[$336]=0; //@line 40 "rotatingtree.c"
        var $337=$root_addr_i_i_i; //@line 41 "rotatingtree.c"
        var $338=$node_addr_i_i_i; //@line 41 "rotatingtree.c"
        HEAP[$337]=$338; //@line 41 "rotatingtree.c"
        var $339=$self_i_i4; //@line 283 "_lsprof.c"
        $1=$339; //@line 283 "_lsprof.c"
        $retval_i4_i=$339; //@line 274 "_lsprof.c"
        $subentry_i=$339; //@line 332 "_lsprof.c"
        var $340=($339)!=0; //@line 333 "_lsprof.c"
        if ($340) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 333 "_lsprof.c"
      case 53: // $bb5_i
        var $341=$subentry_i; //@line 334 "_lsprof.c"
        var $342=$341+36; //@line 334 "_lsprof.c"
        var $343=HEAP[$342]; //@line 334 "_lsprof.c"
        var $344=($343) + 1; //@line 334 "_lsprof.c"
        var $345=$subentry_i; //@line 334 "_lsprof.c"
        var $346=$345+36; //@line 334 "_lsprof.c"
        HEAP[$346]=$344; //@line 334 "_lsprof.c"
        __label__ = 54; break; //@line 334 "_lsprof.c"
      case 54: // $bb6_i
        var $347=$pObj_addr_i6; //@line 336 "_lsprof.c"
        var $348=$347+24; //@line 336 "_lsprof.c"
        var $349=HEAP[$348]; //@line 336 "_lsprof.c"
        var $350=($349)!=0; //@line 336 "_lsprof.c"
        if ($350) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 336 "_lsprof.c"
      case 55: // $bb7_i
        var $351=$pObj_addr_i6; //@line 336 "_lsprof.c"
        var $352=_CallExternalTimer($351); //@line 336 "_lsprof.c"
        $iftmp_2_i=$352; //@line 336 "_lsprof.c"
        __label__ = 57; break; //@line 336 "_lsprof.c"
      case 56: // $bb8_i
        var $353=_gettimeofday($tv_i_i, 0); //@line 56 "_lsprof.c"
        var $354=$tv_i_i; //@line 58 "_lsprof.c"
        var $355=HEAP[$354]; //@line 58 "_lsprof.c"
        var $356=($355); //@line 58 "_lsprof.c"
        $ret_i_i=$356; //@line 58 "_lsprof.c"
        var $357=$ret_i_i; //@line 59 "_lsprof.c"
        var $358=($357) * 1000000; //@line 59 "_lsprof.c"
        var $359=$tv_i_i+4; //@line 59 "_lsprof.c"
        var $360=HEAP[$359]; //@line 59 "_lsprof.c"
        var $361=($360); //@line 59 "_lsprof.c"
        var $362=($361) + ($358); //@line 59 "_lsprof.c"
        $ret_i_i=$362; //@line 59 "_lsprof.c"
        var $363=$ret_i_i; //@line 60 "_lsprof.c"
        $0=$363; //@line 60 "_lsprof.c"
        var $364=$0; //@line 60 "_lsprof.c"
        $retval_i5_i=$364; //@line 60 "_lsprof.c"
        var $retval1_i_i=$retval_i5_i; //@line 60 "_lsprof.c"
        $iftmp_2_i=$retval1_i_i; //@line 336 "_lsprof.c"
        __label__ = 57; break; //@line 336 "_lsprof.c"
      case 57: // $initContext_exit
        var $365=$self_addr_i; //@line 336 "_lsprof.c"
        var $366=$365; //@line 336 "_lsprof.c"
        var $367=$iftmp_2_i; //@line 336 "_lsprof.c"
        HEAP[$366]=$367; //@line 336 "_lsprof.c"
        __label__ = 58; break; //@line 408 "_lsprof.c"
      case 58: // $restorePyerr
        var $368=HEAP[$last_tb]; //@line 409 "_lsprof.c"
        var $369=HEAP[$last_value]; //@line 409 "_lsprof.c"
        var $370=HEAP[$last_type]; //@line 409 "_lsprof.c"
        _PyErr_Restore($370, $369, $368); //@line 409 "_lsprof.c"
        STACKTOP = __stackBase__;
        return; //@line 410 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ptrace_leave_call($self, $key) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr_i;
        var $key_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $key_addr;
        var $pObj;
        var $profEntry;
        var $pContext;
        $self_addr=$self;
        $key_addr=$key;
        var $1=$self_addr; //@line 416 "_lsprof.c"
        var $2=$1; //@line 416 "_lsprof.c"
        $pObj=$2; //@line 416 "_lsprof.c"
        var $3=$pObj; //@line 420 "_lsprof.c"
        var $4=$3+12; //@line 420 "_lsprof.c"
        var $5=HEAP[$4]; //@line 420 "_lsprof.c"
        $pContext=$5; //@line 420 "_lsprof.c"
        var $6=$pContext; //@line 421 "_lsprof.c"
        var $7=($6)==0; //@line 421 "_lsprof.c"
        if ($7) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 421 "_lsprof.c"
      case 1: // $bb
        var $8=$pObj; //@line 423 "_lsprof.c"
        var $9=$key_addr; //@line 423 "_lsprof.c"
        $pObj_addr_i=$8;
        $key_addr_i=$9;
        var $10=$pObj_addr_i; //@line 257 "_lsprof.c"
        var $11=$10+8; //@line 257 "_lsprof.c"
        var $12=$key_addr_i; //@line 257 "_lsprof.c"
        var $13=_RotatingTree_Get($11, $12); //@line 257 "_lsprof.c"
        var $14=$13; //@line 257 "_lsprof.c"
        $0=$14; //@line 257 "_lsprof.c"
        var $15=$0; //@line 257 "_lsprof.c"
        $retval_i=$15; //@line 257 "_lsprof.c"
        var $retval1_i=$retval_i; //@line 257 "_lsprof.c"
        $profEntry=$retval1_i; //@line 423 "_lsprof.c"
        var $16=$profEntry; //@line 424 "_lsprof.c"
        var $17=($16)!=0; //@line 424 "_lsprof.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 424 "_lsprof.c"
      case 2: // $bb1
        var $18=$pObj; //@line 425 "_lsprof.c"
        var $19=$pContext; //@line 425 "_lsprof.c"
        var $20=$profEntry; //@line 425 "_lsprof.c"
        _Stop($18, $19, $20); //@line 425 "_lsprof.c"
        __label__ = 4; break; //@line 425 "_lsprof.c"
      case 3: // $bb2
        var $21=$pContext; //@line 428 "_lsprof.c"
        var $22=$21+16; //@line 428 "_lsprof.c"
        var $23=HEAP[$22]; //@line 428 "_lsprof.c"
        var $24=$pObj; //@line 428 "_lsprof.c"
        var $25=$24+12; //@line 428 "_lsprof.c"
        HEAP[$25]=$23; //@line 428 "_lsprof.c"
        __label__ = 4; break; //@line 428 "_lsprof.c"
      case 4: // $bb3
        var $26=$pObj; //@line 431 "_lsprof.c"
        var $27=$26+16; //@line 431 "_lsprof.c"
        var $28=HEAP[$27]; //@line 431 "_lsprof.c"
        var $29=$pContext; //@line 431 "_lsprof.c"
        var $30=$29+16; //@line 431 "_lsprof.c"
        HEAP[$30]=$28; //@line 431 "_lsprof.c"
        var $31=$pObj; //@line 432 "_lsprof.c"
        var $32=$31+16; //@line 432 "_lsprof.c"
        var $33=$pContext; //@line 432 "_lsprof.c"
        HEAP[$32]=$33; //@line 432 "_lsprof.c"
        __label__ = 5; break; //@line 432 "_lsprof.c"
      case 5: // $return
        ;
        return; //@line 422 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_callback($self, $frame, $what, $arg) {
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
        var $0;
        $self_addr=$self;
        $frame_addr=$frame;
        $what_addr=$what;
        $arg_addr=$arg;
        var $1=$what_addr; //@line 439 "_lsprof.c"
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
          __label__ = 6; break;
        }
        else if ($1 == 6) {
          __label__ = 6; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 1: // $bb
        var $2=$frame_addr; //@line 443 "_lsprof.c"
        var $3=$2+16; //@line 443 "_lsprof.c"
        var $4=HEAP[$3]; //@line 443 "_lsprof.c"
        var $5=$4; //@line 443 "_lsprof.c"
        var $6=$frame_addr; //@line 443 "_lsprof.c"
        var $7=$6+16; //@line 443 "_lsprof.c"
        var $8=HEAP[$7]; //@line 443 "_lsprof.c"
        var $9=$self_addr; //@line 443 "_lsprof.c"
        var $10=$8; //@line 443 "_lsprof.c"
        _ptrace_enter_call($9, $10, $5); //@line 443 "_lsprof.c"
        __label__ = 9; break; //@line 443 "_lsprof.c"
      case 2: // $bb1
        var $11=$frame_addr; //@line 450 "_lsprof.c"
        var $12=$11+16; //@line 450 "_lsprof.c"
        var $13=HEAP[$12]; //@line 450 "_lsprof.c"
        var $14=$self_addr; //@line 450 "_lsprof.c"
        var $15=$13; //@line 450 "_lsprof.c"
        _ptrace_leave_call($14, $15); //@line 450 "_lsprof.c"
        __label__ = 9; break; //@line 450 "_lsprof.c"
      case 3: // $bb2
        var $16=$self_addr; //@line 462 "_lsprof.c"
        var $17=$16; //@line 462 "_lsprof.c"
        var $18=$17+20; //@line 462 "_lsprof.c"
        var $19=HEAP[$18]; //@line 462 "_lsprof.c"
        var $20=($19) & 4; //@line 462 "_lsprof.c"
        var $21=($20)!=0; //@line 462 "_lsprof.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 462 "_lsprof.c"
      case 4: // $bb3
        var $22=$arg_addr; //@line 462 "_lsprof.c"
        var $23=$22+4; //@line 462 "_lsprof.c"
        var $24=HEAP[$23]; //@line 462 "_lsprof.c"
        var $25=($24)==(_PyCFunction_Type); //@line 462 "_lsprof.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 462 "_lsprof.c"
      case 5: // $bb4
        var $26=$arg_addr; //@line 464 "_lsprof.c"
        var $27=$26; //@line 464 "_lsprof.c"
        var $28=$27+8; //@line 464 "_lsprof.c"
        var $29=HEAP[$28]; //@line 464 "_lsprof.c"
        var $30=$self_addr; //@line 464 "_lsprof.c"
        var $31=$29; //@line 464 "_lsprof.c"
        var $32=$arg_addr; //@line 464 "_lsprof.c"
        _ptrace_enter_call($30, $31, $32); //@line 464 "_lsprof.c"
        __label__ = 9; break; //@line 464 "_lsprof.c"
      case 6: // $bb6
        var $33=$self_addr; //@line 474 "_lsprof.c"
        var $34=$33; //@line 474 "_lsprof.c"
        var $35=$34+20; //@line 474 "_lsprof.c"
        var $36=HEAP[$35]; //@line 474 "_lsprof.c"
        var $37=($36) & 4; //@line 474 "_lsprof.c"
        var $38=($37)!=0; //@line 474 "_lsprof.c"
        if ($38) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 474 "_lsprof.c"
      case 7: // $bb7
        var $39=$arg_addr; //@line 474 "_lsprof.c"
        var $40=$39+4; //@line 474 "_lsprof.c"
        var $41=HEAP[$40]; //@line 474 "_lsprof.c"
        var $42=($41)==(_PyCFunction_Type); //@line 474 "_lsprof.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 474 "_lsprof.c"
      case 8: // $bb8
        var $43=$arg_addr; //@line 476 "_lsprof.c"
        var $44=$43; //@line 476 "_lsprof.c"
        var $45=$44+8; //@line 476 "_lsprof.c"
        var $46=HEAP[$45]; //@line 476 "_lsprof.c"
        var $47=$self_addr; //@line 476 "_lsprof.c"
        var $48=$46; //@line 476 "_lsprof.c"
        _ptrace_leave_call($47, $48); //@line 476 "_lsprof.c"
        __label__ = 9; break; //@line 476 "_lsprof.c"
      case 9: // $bb9
        $0=0; //@line 485 "_lsprof.c"
        var $49=$0; //@line 485 "_lsprof.c"
        $retval=$49; //@line 485 "_lsprof.c"
        var $retval10=$retval; //@line 485 "_lsprof.c"
        ;
        return $retval10; //@line 485 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _statsForSubEntry($node, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $node_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $sentry;
        var $collect;
        var $entry1;
        var $err;
        var $sinfo;
        $node_addr=$node;
        $arg_addr=$arg;
        var $1=$node_addr; //@line 548 "_lsprof.c"
        var $2=$1; //@line 548 "_lsprof.c"
        $sentry=$2; //@line 548 "_lsprof.c"
        var $3=$arg_addr; //@line 549 "_lsprof.c"
        var $4=$3; //@line 549 "_lsprof.c"
        $collect=$4; //@line 549 "_lsprof.c"
        var $5=$sentry; //@line 550 "_lsprof.c"
        var $6=$5; //@line 550 "_lsprof.c"
        var $7=$6; //@line 550 "_lsprof.c"
        var $8=HEAP[$7]; //@line 550 "_lsprof.c"
        var $9=$8; //@line 550 "_lsprof.c"
        $entry1=$9; //@line 550 "_lsprof.c"
        var $10=$collect; //@line 553 "_lsprof.c"
        var $11=$10+8; //@line 553 "_lsprof.c"
        var $12=HEAP[$11]; //@line 553 "_lsprof.c"
        var $13=$sentry; //@line 553 "_lsprof.c"
        var $14=$13+20; //@line 553 "_lsprof.c"
        var $15=HEAP[$14]; //@line 553 "_lsprof.c"
        var $16=($15); //@line 553 "_lsprof.c"
        var $17=($12) * ($16); //@line 553 "_lsprof.c"
        var $18=$collect; //@line 553 "_lsprof.c"
        var $19=$18+8; //@line 553 "_lsprof.c"
        var $20=HEAP[$19]; //@line 553 "_lsprof.c"
        var $21=$sentry; //@line 553 "_lsprof.c"
        var $22=$21+12; //@line 553 "_lsprof.c"
        var $23=HEAP[$22]; //@line 553 "_lsprof.c"
        var $24=($23); //@line 553 "_lsprof.c"
        var $25=($20) * ($24); //@line 553 "_lsprof.c"
        var $26=$sentry; //@line 553 "_lsprof.c"
        var $27=$26+32; //@line 553 "_lsprof.c"
        var $28=HEAP[$27]; //@line 553 "_lsprof.c"
        var $29=$sentry; //@line 553 "_lsprof.c"
        var $30=$29+28; //@line 553 "_lsprof.c"
        var $31=HEAP[$30]; //@line 553 "_lsprof.c"
        var $32=$entry1; //@line 553 "_lsprof.c"
        var $33=$32+12; //@line 553 "_lsprof.c"
        var $34=HEAP[$33]; //@line 553 "_lsprof.c"
        var $35=_PyObject_CallFunction(_StatsSubEntryType, __str24, $34, $31, $28, $25, $17); //@line 553 "_lsprof.c"
        $sinfo=$35; //@line 553 "_lsprof.c"
        var $36=$sinfo; //@line 560 "_lsprof.c"
        var $37=($36)==0; //@line 560 "_lsprof.c"
        if ($37) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 560 "_lsprof.c"
      case 1: // $bb
        $0=-1; //@line 561 "_lsprof.c"
        __label__ = 5; break; //@line 561 "_lsprof.c"
      case 2: // $bb2
        var $38=$collect; //@line 562 "_lsprof.c"
        var $39=$38+4; //@line 562 "_lsprof.c"
        var $40=HEAP[$39]; //@line 562 "_lsprof.c"
        var $41=$sinfo; //@line 562 "_lsprof.c"
        var $42=_PyList_Append($40, $41); //@line 562 "_lsprof.c"
        $err=$42; //@line 562 "_lsprof.c"
        var $43=$sinfo; //@line 563 "_lsprof.c"
        var $44=$43; //@line 563 "_lsprof.c"
        var $45=HEAP[$44]; //@line 563 "_lsprof.c"
        var $46=($45) - 1; //@line 563 "_lsprof.c"
        var $47=$sinfo; //@line 563 "_lsprof.c"
        var $48=$47; //@line 563 "_lsprof.c"
        HEAP[$48]=$46; //@line 563 "_lsprof.c"
        var $49=$sinfo; //@line 563 "_lsprof.c"
        var $50=$49; //@line 563 "_lsprof.c"
        var $51=HEAP[$50]; //@line 563 "_lsprof.c"
        var $52=($51)==0; //@line 563 "_lsprof.c"
        if ($52) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 563 "_lsprof.c"
      case 3: // $bb3
        var $53=$sinfo; //@line 563 "_lsprof.c"
        var $54=$53+4; //@line 563 "_lsprof.c"
        var $55=HEAP[$54]; //@line 563 "_lsprof.c"
        var $56=$55+24; //@line 563 "_lsprof.c"
        var $57=HEAP[$56]; //@line 563 "_lsprof.c"
        var $58=$sinfo; //@line 563 "_lsprof.c"
        FUNCTION_TABLE[$57]($58); //@line 563 "_lsprof.c"
        __label__ = 4; break; //@line 563 "_lsprof.c"
      case 4: // $bb4
        var $59=$err; //@line 564 "_lsprof.c"
        $0=$59; //@line 564 "_lsprof.c"
        __label__ = 5; break; //@line 564 "_lsprof.c"
      case 5: // $bb5
        var $60=$0; //@line 561 "_lsprof.c"
        $retval=$60; //@line 561 "_lsprof.c"
        var $retval6=$retval; //@line 561 "_lsprof.c"
        ;
        return $retval6; //@line 561 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _statsForEntry($node, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $node_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $entry1;
        var $collect;
        var $info;
        var $err;
        $node_addr=$node;
        $arg_addr=$arg;
        var $1=$node_addr; //@line 569 "_lsprof.c"
        var $2=$1; //@line 569 "_lsprof.c"
        $entry1=$2; //@line 569 "_lsprof.c"
        var $3=$arg_addr; //@line 570 "_lsprof.c"
        var $4=$3; //@line 570 "_lsprof.c"
        $collect=$4; //@line 570 "_lsprof.c"
        var $5=$entry1; //@line 573 "_lsprof.c"
        var $6=$5+32; //@line 573 "_lsprof.c"
        var $7=HEAP[$6]; //@line 573 "_lsprof.c"
        var $8=($7)==0; //@line 573 "_lsprof.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 573 "_lsprof.c"
      case 1: // $bb
        $0=0; //@line 574 "_lsprof.c"
        __label__ = 17; break; //@line 574 "_lsprof.c"
      case 2: // $bb2
        var $9=$entry1; //@line 576 "_lsprof.c"
        var $10=$9+44; //@line 576 "_lsprof.c"
        var $11=HEAP[$10]; //@line 576 "_lsprof.c"
        var $12=($11)!=0; //@line 576 "_lsprof.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 576 "_lsprof.c"
      case 3: // $bb3
        var $13=_PyList_New(0); //@line 577 "_lsprof.c"
        var $14=$collect; //@line 577 "_lsprof.c"
        var $15=$14+4; //@line 577 "_lsprof.c"
        HEAP[$15]=$13; //@line 577 "_lsprof.c"
        var $16=$collect; //@line 578 "_lsprof.c"
        var $17=$16+4; //@line 578 "_lsprof.c"
        var $18=HEAP[$17]; //@line 578 "_lsprof.c"
        var $19=($18)==0; //@line 578 "_lsprof.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 578 "_lsprof.c"
      case 4: // $bb4
        $0=-1; //@line 579 "_lsprof.c"
        __label__ = 17; break; //@line 579 "_lsprof.c"
      case 5: // $bb5
        var $20=$entry1; //@line 580 "_lsprof.c"
        var $21=$20+44; //@line 580 "_lsprof.c"
        var $22=HEAP[$21]; //@line 580 "_lsprof.c"
        var $23=$collect; //@line 580 "_lsprof.c"
        var $24=$23; //@line 580 "_lsprof.c"
        var $25=_RotatingTree_Enum($22, (FUNCTION_TABLE_OFFSET + 6), $24); //@line 580 "_lsprof.c"
        var $26=($25)!=0; //@line 580 "_lsprof.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 580 "_lsprof.c"
      case 6: // $bb6
        var $27=$collect; //@line 582 "_lsprof.c"
        var $28=$27+4; //@line 582 "_lsprof.c"
        var $29=HEAP[$28]; //@line 582 "_lsprof.c"
        var $30=$29; //@line 582 "_lsprof.c"
        var $31=HEAP[$30]; //@line 582 "_lsprof.c"
        var $32=($31) - 1; //@line 582 "_lsprof.c"
        var $33=$29; //@line 582 "_lsprof.c"
        HEAP[$33]=$32; //@line 582 "_lsprof.c"
        var $34=$29; //@line 582 "_lsprof.c"
        var $35=HEAP[$34]; //@line 582 "_lsprof.c"
        var $36=($35)==0; //@line 582 "_lsprof.c"
        if ($36) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 582 "_lsprof.c"
      case 7: // $bb7
        var $37=$collect; //@line 582 "_lsprof.c"
        var $38=$37+4; //@line 582 "_lsprof.c"
        var $39=HEAP[$38]; //@line 582 "_lsprof.c"
        var $40=$39+4; //@line 582 "_lsprof.c"
        var $41=HEAP[$40]; //@line 582 "_lsprof.c"
        var $42=$41+24; //@line 582 "_lsprof.c"
        var $43=HEAP[$42]; //@line 582 "_lsprof.c"
        var $44=$collect; //@line 582 "_lsprof.c"
        var $45=$44+4; //@line 582 "_lsprof.c"
        var $46=HEAP[$45]; //@line 582 "_lsprof.c"
        FUNCTION_TABLE[$43]($46); //@line 582 "_lsprof.c"
        __label__ = 8; break; //@line 582 "_lsprof.c"
      case 8: // $bb8
        $0=-1; //@line 583 "_lsprof.c"
        __label__ = 17; break; //@line 583 "_lsprof.c"
      case 9: // $bb10
        var $47=HEAP[__Py_NoneStruct]; //@line 587 "_lsprof.c"
        var $48=($47) + 1; //@line 587 "_lsprof.c"
        HEAP[__Py_NoneStruct]=$48; //@line 587 "_lsprof.c"
        var $49=$collect; //@line 588 "_lsprof.c"
        var $50=$49+4; //@line 588 "_lsprof.c"
        HEAP[$50]=__Py_NoneStruct; //@line 588 "_lsprof.c"
        __label__ = 10; break; //@line 588 "_lsprof.c"
      case 10: // $bb11
        var $51=$collect; //@line 591 "_lsprof.c"
        var $52=$51+4; //@line 591 "_lsprof.c"
        var $53=HEAP[$52]; //@line 591 "_lsprof.c"
        var $54=$collect; //@line 591 "_lsprof.c"
        var $55=$54+8; //@line 591 "_lsprof.c"
        var $56=HEAP[$55]; //@line 591 "_lsprof.c"
        var $57=$entry1; //@line 591 "_lsprof.c"
        var $58=$57+24; //@line 591 "_lsprof.c"
        var $59=HEAP[$58]; //@line 591 "_lsprof.c"
        var $60=($59); //@line 591 "_lsprof.c"
        var $61=($56) * ($60); //@line 591 "_lsprof.c"
        var $62=$collect; //@line 591 "_lsprof.c"
        var $63=$62+8; //@line 591 "_lsprof.c"
        var $64=HEAP[$63]; //@line 591 "_lsprof.c"
        var $65=$entry1; //@line 591 "_lsprof.c"
        var $66=$65+16; //@line 591 "_lsprof.c"
        var $67=HEAP[$66]; //@line 591 "_lsprof.c"
        var $68=($67); //@line 591 "_lsprof.c"
        var $69=($64) * ($68); //@line 591 "_lsprof.c"
        var $70=$entry1; //@line 591 "_lsprof.c"
        var $71=$70+36; //@line 591 "_lsprof.c"
        var $72=HEAP[$71]; //@line 591 "_lsprof.c"
        var $73=$entry1; //@line 591 "_lsprof.c"
        var $74=$73+32; //@line 591 "_lsprof.c"
        var $75=HEAP[$74]; //@line 591 "_lsprof.c"
        var $76=$entry1; //@line 591 "_lsprof.c"
        var $77=$76+12; //@line 591 "_lsprof.c"
        var $78=HEAP[$77]; //@line 591 "_lsprof.c"
        var $79=_PyObject_CallFunction(_StatsEntryType, __str25, $78, $75, $72, $69, $61, $53); //@line 591 "_lsprof.c"
        $info=$79; //@line 591 "_lsprof.c"
        var $80=$collect; //@line 599 "_lsprof.c"
        var $81=$80+4; //@line 599 "_lsprof.c"
        var $82=HEAP[$81]; //@line 599 "_lsprof.c"
        var $83=$82; //@line 599 "_lsprof.c"
        var $84=HEAP[$83]; //@line 599 "_lsprof.c"
        var $85=($84) - 1; //@line 599 "_lsprof.c"
        var $86=$82; //@line 599 "_lsprof.c"
        HEAP[$86]=$85; //@line 599 "_lsprof.c"
        var $87=$82; //@line 599 "_lsprof.c"
        var $88=HEAP[$87]; //@line 599 "_lsprof.c"
        var $89=($88)==0; //@line 599 "_lsprof.c"
        if ($89) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 599 "_lsprof.c"
      case 11: // $bb12
        var $90=$collect; //@line 599 "_lsprof.c"
        var $91=$90+4; //@line 599 "_lsprof.c"
        var $92=HEAP[$91]; //@line 599 "_lsprof.c"
        var $93=$92+4; //@line 599 "_lsprof.c"
        var $94=HEAP[$93]; //@line 599 "_lsprof.c"
        var $95=$94+24; //@line 599 "_lsprof.c"
        var $96=HEAP[$95]; //@line 599 "_lsprof.c"
        var $97=$collect; //@line 599 "_lsprof.c"
        var $98=$97+4; //@line 599 "_lsprof.c"
        var $99=HEAP[$98]; //@line 599 "_lsprof.c"
        FUNCTION_TABLE[$96]($99); //@line 599 "_lsprof.c"
        __label__ = 12; break; //@line 599 "_lsprof.c"
      case 12: // $bb13
        var $100=$info; //@line 600 "_lsprof.c"
        var $101=($100)==0; //@line 600 "_lsprof.c"
        if ($101) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 600 "_lsprof.c"
      case 13: // $bb14
        $0=-1; //@line 601 "_lsprof.c"
        __label__ = 17; break; //@line 601 "_lsprof.c"
      case 14: // $bb15
        var $102=$collect; //@line 602 "_lsprof.c"
        var $103=$102; //@line 602 "_lsprof.c"
        var $104=HEAP[$103]; //@line 602 "_lsprof.c"
        var $105=$info; //@line 602 "_lsprof.c"
        var $106=_PyList_Append($104, $105); //@line 602 "_lsprof.c"
        $err=$106; //@line 602 "_lsprof.c"
        var $107=$info; //@line 603 "_lsprof.c"
        var $108=$107; //@line 603 "_lsprof.c"
        var $109=HEAP[$108]; //@line 603 "_lsprof.c"
        var $110=($109) - 1; //@line 603 "_lsprof.c"
        var $111=$info; //@line 603 "_lsprof.c"
        var $112=$111; //@line 603 "_lsprof.c"
        HEAP[$112]=$110; //@line 603 "_lsprof.c"
        var $113=$info; //@line 603 "_lsprof.c"
        var $114=$113; //@line 603 "_lsprof.c"
        var $115=HEAP[$114]; //@line 603 "_lsprof.c"
        var $116=($115)==0; //@line 603 "_lsprof.c"
        if ($116) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 603 "_lsprof.c"
      case 15: // $bb16
        var $117=$info; //@line 603 "_lsprof.c"
        var $118=$117+4; //@line 603 "_lsprof.c"
        var $119=HEAP[$118]; //@line 603 "_lsprof.c"
        var $120=$119+24; //@line 603 "_lsprof.c"
        var $121=HEAP[$120]; //@line 603 "_lsprof.c"
        var $122=$info; //@line 603 "_lsprof.c"
        FUNCTION_TABLE[$121]($122); //@line 603 "_lsprof.c"
        __label__ = 16; break; //@line 603 "_lsprof.c"
      case 16: // $bb17
        var $123=$err; //@line 604 "_lsprof.c"
        $0=$123; //@line 604 "_lsprof.c"
        __label__ = 17; break; //@line 604 "_lsprof.c"
      case 17: // $bb18
        var $124=$0; //@line 574 "_lsprof.c"
        $retval=$124; //@line 574 "_lsprof.c"
        var $retval19=$retval; //@line 574 "_lsprof.c"
        ;
        return $retval19; //@line 574 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_getstats($pObj, $noarg) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval_i1;
        var $0;
        var $pObj_addr_i;
        var $retval_i;
        var $1;
        var $pObj_addr;
        var $noarg_addr;
        var $retval;
        var $2;
        var $collect=__stackBase__;
        $pObj_addr=$pObj;
        $noarg_addr=$noarg;
        var $3=$pObj_addr; //@line 635 "_lsprof.c"
        $pObj_addr_i=$3;
        var $4=$pObj_addr_i; //@line 491 "_lsprof.c"
        var $5=$4+20; //@line 491 "_lsprof.c"
        var $6=HEAP[$5]; //@line 491 "_lsprof.c"
        var $7=($6) & 256; //@line 491 "_lsprof.c"
        var $8=($7)!=0; //@line 491 "_lsprof.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 491 "_lsprof.c"
      case 1: // $bb
        var $9=$pObj_addr_i; //@line 492 "_lsprof.c"
        var $10=$9+20; //@line 492 "_lsprof.c"
        var $11=HEAP[$10]; //@line 492 "_lsprof.c"
        var $12=($11) - 256; //@line 492 "_lsprof.c"
        var $13=$pObj_addr_i; //@line 492 "_lsprof.c"
        var $14=$13+20; //@line 492 "_lsprof.c"
        HEAP[$14]=$12; //@line 492 "_lsprof.c"
        var $15=HEAP[_PyExc_MemoryError]; //@line 493 "_lsprof.c"
        _PyErr_SetString($15, __str4); //@line 493 "_lsprof.c"
        $1=-1; //@line 495 "_lsprof.c"
        $retval_i=-1; //@line 495 "_lsprof.c"
        $2=0; //@line 636 "_lsprof.c"
        __label__ = 14; break; //@line 636 "_lsprof.c"
      case 2: // $bb1
        $1=0; //@line 497 "_lsprof.c"
        $retval_i=0; //@line 495 "_lsprof.c"
        var $16=$pObj_addr; //@line 637 "_lsprof.c"
        var $17=$16+24; //@line 637 "_lsprof.c"
        var $18=HEAP[$17]; //@line 637 "_lsprof.c"
        var $19=($18)==0; //@line 637 "_lsprof.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 637 "_lsprof.c"
      case 3: // $bb2
        $0=0.000001; //@line 66 "_lsprof.c"
        var $20=$0; //@line 66 "_lsprof.c"
        $retval_i1=$20; //@line 66 "_lsprof.c"
        var $retval1_i=$retval_i1; //@line 66 "_lsprof.c"
        var $21=$collect+8; //@line 638 "_lsprof.c"
        HEAP[$21]=$retval1_i; //@line 638 "_lsprof.c"
        __label__ = 7; break; //@line 638 "_lsprof.c"
      case 4: // $bb3
        var $22=$pObj_addr; //@line 639 "_lsprof.c"
        var $23=$22+28; //@line 639 "_lsprof.c"
        var $24=HEAP[$23]; //@line 639 "_lsprof.c"
        var $25=($24) > 0; //@line 639 "_lsprof.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 639 "_lsprof.c"
      case 5: // $bb4
        var $26=$pObj_addr; //@line 640 "_lsprof.c"
        var $27=$26+28; //@line 640 "_lsprof.c"
        var $28=HEAP[$27]; //@line 640 "_lsprof.c"
        var $29=$collect+8; //@line 640 "_lsprof.c"
        HEAP[$29]=$28; //@line 640 "_lsprof.c"
        __label__ = 7; break; //@line 640 "_lsprof.c"
      case 6: // $bb5
        var $30=$collect+8; //@line 642 "_lsprof.c"
        HEAP[$30]=2.3283064365386963e-10; //@line 642 "_lsprof.c"
        __label__ = 7; break; //@line 642 "_lsprof.c"
      case 7: // $bb6
        var $31=_PyList_New(0); //@line 643 "_lsprof.c"
        var $32=$collect; //@line 643 "_lsprof.c"
        HEAP[$32]=$31; //@line 643 "_lsprof.c"
        var $33=$collect; //@line 644 "_lsprof.c"
        var $34=HEAP[$33]; //@line 644 "_lsprof.c"
        var $35=($34)==0; //@line 644 "_lsprof.c"
        if ($35) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 644 "_lsprof.c"
      case 8: // $bb7
        $2=0; //@line 645 "_lsprof.c"
        __label__ = 14; break; //@line 645 "_lsprof.c"
      case 9: // $bb8
        var $36=$pObj_addr; //@line 646 "_lsprof.c"
        var $37=$36+8; //@line 646 "_lsprof.c"
        var $38=HEAP[$37]; //@line 646 "_lsprof.c"
        var $collect9=$collect; //@line 646 "_lsprof.c"
        var $39=_RotatingTree_Enum($38, (FUNCTION_TABLE_OFFSET + 8), $collect9); //@line 646 "_lsprof.c"
        var $40=($39)!=0; //@line 646 "_lsprof.c"
        var $41=$collect; //@line 648 "_lsprof.c"
        var $42=HEAP[$41]; //@line 648 "_lsprof.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 646 "_lsprof.c"
      case 10: // $bb10
        var $43=$42; //@line 648 "_lsprof.c"
        var $44=HEAP[$43]; //@line 648 "_lsprof.c"
        var $45=($44) - 1; //@line 648 "_lsprof.c"
        var $46=$42; //@line 648 "_lsprof.c"
        HEAP[$46]=$45; //@line 648 "_lsprof.c"
        var $47=$42; //@line 648 "_lsprof.c"
        var $48=HEAP[$47]; //@line 648 "_lsprof.c"
        var $49=($48)==0; //@line 648 "_lsprof.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 648 "_lsprof.c"
      case 11: // $bb11
        var $50=$collect; //@line 648 "_lsprof.c"
        var $51=HEAP[$50]; //@line 648 "_lsprof.c"
        var $52=$51+4; //@line 648 "_lsprof.c"
        var $53=HEAP[$52]; //@line 648 "_lsprof.c"
        var $54=$53+24; //@line 648 "_lsprof.c"
        var $55=HEAP[$54]; //@line 648 "_lsprof.c"
        var $56=$collect; //@line 648 "_lsprof.c"
        var $57=HEAP[$56]; //@line 648 "_lsprof.c"
        FUNCTION_TABLE[$55]($57); //@line 648 "_lsprof.c"
        __label__ = 12; break; //@line 648 "_lsprof.c"
      case 12: // $bb12
        $2=0; //@line 649 "_lsprof.c"
        __label__ = 14; break; //@line 649 "_lsprof.c"
      case 13: // $bb13
        $2=$42; //@line 651 "_lsprof.c"
        __label__ = 14; break; //@line 651 "_lsprof.c"
      case 14: // $bb14
        var $58=$2; //@line 636 "_lsprof.c"
        $retval=$58; //@line 636 "_lsprof.c"
        var $retval15=$retval; //@line 636 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 636 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_enable($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr_i1;
        var $nvalue_addr_i2;
        var $retval_i3;
        var $0;
        var $pObj_addr_i;
        var $nvalue_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $2;
        var $subcalls=__stackBase__;
        var $builtins=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$subcalls]=-1; //@line 694 "_lsprof.c"
        HEAP[$builtins]=-1; //@line 695 "_lsprof.c"
        var $3=$args_addr; //@line 697 "_lsprof.c"
        var $4=$kwds_addr; //@line 697 "_lsprof.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str26, _kwlist_9138, $subcalls, $builtins); //@line 697 "_lsprof.c"
        var $6=($5)==0; //@line 697 "_lsprof.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 697 "_lsprof.c"
      case 1: // $bb
        $2=0; //@line 699 "_lsprof.c"
        __label__ = 11; break; //@line 699 "_lsprof.c"
      case 2: // $bb1
        var $7=HEAP[$subcalls]; //@line 700 "_lsprof.c"
        var $8=$self_addr; //@line 700 "_lsprof.c"
        $pObj_addr_i=$8;
        $nvalue_addr_i=$7;
        var $9=$nvalue_addr_i; //@line 657 "_lsprof.c"
        var $10=($9)==0; //@line 657 "_lsprof.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 657 "_lsprof.c"
      case 3: // $bb_i
        var $11=$pObj_addr_i; //@line 658 "_lsprof.c"
        var $12=$11+20; //@line 658 "_lsprof.c"
        var $13=HEAP[$12]; //@line 658 "_lsprof.c"
        var $14=($13) & -3; //@line 658 "_lsprof.c"
        var $15=$pObj_addr_i; //@line 658 "_lsprof.c"
        var $16=$15+20; //@line 658 "_lsprof.c"
        HEAP[$16]=$14; //@line 658 "_lsprof.c"
        __label__ = 6; break; //@line 658 "_lsprof.c"
      case 4: // $bb1_i
        var $17=$nvalue_addr_i; //@line 659 "_lsprof.c"
        var $18=($17) > 0; //@line 659 "_lsprof.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 659 "_lsprof.c"
      case 5: // $bb2_i
        var $19=$pObj_addr_i; //@line 660 "_lsprof.c"
        var $20=$19+20; //@line 660 "_lsprof.c"
        var $21=HEAP[$20]; //@line 660 "_lsprof.c"
        var $22=($21) | 2; //@line 660 "_lsprof.c"
        var $23=$pObj_addr_i; //@line 660 "_lsprof.c"
        var $24=$23+20; //@line 660 "_lsprof.c"
        HEAP[$24]=$22; //@line 660 "_lsprof.c"
        __label__ = 6; break; //@line 660 "_lsprof.c"
      case 6: // $bb2
        $1=0; //@line 661 "_lsprof.c"
        $retval_i=0; //@line 661 "_lsprof.c"
        var $25=HEAP[$builtins]; //@line 700 "_lsprof.c"
        var $26=$self_addr; //@line 700 "_lsprof.c"
        $pObj_addr_i1=$26;
        $nvalue_addr_i2=$25;
        var $27=($25)==0; //@line 667 "_lsprof.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 667 "_lsprof.c"
      case 7: // $bb_i4
        var $28=$pObj_addr_i1; //@line 668 "_lsprof.c"
        var $29=$28+20; //@line 668 "_lsprof.c"
        var $30=HEAP[$29]; //@line 668 "_lsprof.c"
        var $31=($30) & -5; //@line 668 "_lsprof.c"
        var $32=$pObj_addr_i1; //@line 668 "_lsprof.c"
        var $33=$32+20; //@line 668 "_lsprof.c"
        HEAP[$33]=$31; //@line 668 "_lsprof.c"
        __label__ = 10; break; //@line 668 "_lsprof.c"
      case 8: // $bb1_i5
        var $34=$nvalue_addr_i2; //@line 669 "_lsprof.c"
        var $35=($34) > 0; //@line 669 "_lsprof.c"
        if ($35) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 669 "_lsprof.c"
      case 9: // $bb2_i6
        var $36=$pObj_addr_i1; //@line 675 "_lsprof.c"
        var $37=$36+20; //@line 675 "_lsprof.c"
        var $38=HEAP[$37]; //@line 675 "_lsprof.c"
        var $39=($38) | 4; //@line 675 "_lsprof.c"
        var $40=$pObj_addr_i1; //@line 675 "_lsprof.c"
        var $41=$40+20; //@line 675 "_lsprof.c"
        HEAP[$41]=$39; //@line 675 "_lsprof.c"
        __label__ = 10; break; //@line 675 "_lsprof.c"
      case 10: // $bb4
        $0=0; //@line 678 "_lsprof.c"
        $retval_i3=0; //@line 678 "_lsprof.c"
        var $42=$self_addr; //@line 702 "_lsprof.c"
        var $43=$42; //@line 702 "_lsprof.c"
        _PyEval_SetProfile((FUNCTION_TABLE_OFFSET + 10), $43); //@line 702 "_lsprof.c"
        var $44=$self_addr; //@line 703 "_lsprof.c"
        var $45=$44+20; //@line 703 "_lsprof.c"
        var $46=HEAP[$45]; //@line 703 "_lsprof.c"
        var $47=($46) | 1; //@line 703 "_lsprof.c"
        var $48=$self_addr; //@line 703 "_lsprof.c"
        var $49=$48+20; //@line 703 "_lsprof.c"
        HEAP[$49]=$47; //@line 703 "_lsprof.c"
        var $50=HEAP[__Py_NoneStruct]; //@line 704 "_lsprof.c"
        var $51=($50) + 1; //@line 704 "_lsprof.c"
        HEAP[__Py_NoneStruct]=$51; //@line 704 "_lsprof.c"
        $2=__Py_NoneStruct; //@line 705 "_lsprof.c"
        __label__ = 11; break; //@line 705 "_lsprof.c"
      case 11: // $bb5
        var $52=$2; //@line 699 "_lsprof.c"
        $retval=$52; //@line 699 "_lsprof.c"
        var $retval6=$retval; //@line 699 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 699 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _flush_unmatched($pObj) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr;
        var $pContext;
        var $profEntry;
        $pObj_addr=$pObj;
        var $0=$pObj_addr; //@line 711 "_lsprof.c"
        var $1=$0+12; //@line 711 "_lsprof.c"
        var $2=HEAP[$1]; //@line 711 "_lsprof.c"
        var $3=($2)!=0; //@line 711 "_lsprof.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 711 "_lsprof.c"
      case 1: // $bb
        var $4=$pObj_addr; //@line 712 "_lsprof.c"
        var $5=$4+12; //@line 712 "_lsprof.c"
        var $6=HEAP[$5]; //@line 712 "_lsprof.c"
        $pContext=$6; //@line 712 "_lsprof.c"
        var $7=$pContext; //@line 713 "_lsprof.c"
        var $8=$7+20; //@line 713 "_lsprof.c"
        var $9=HEAP[$8]; //@line 713 "_lsprof.c"
        $profEntry=$9; //@line 713 "_lsprof.c"
        var $10=($9)!=0; //@line 714 "_lsprof.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 714 "_lsprof.c"
      case 2: // $bb1
        var $11=$pObj_addr; //@line 715 "_lsprof.c"
        var $12=$pContext; //@line 715 "_lsprof.c"
        var $13=$profEntry; //@line 715 "_lsprof.c"
        _Stop($11, $12, $13); //@line 715 "_lsprof.c"
        __label__ = 4; break; //@line 715 "_lsprof.c"
      case 3: // $bb2
        var $14=$pContext; //@line 717 "_lsprof.c"
        var $15=$14+16; //@line 717 "_lsprof.c"
        var $16=HEAP[$15]; //@line 717 "_lsprof.c"
        var $17=$pObj_addr; //@line 717 "_lsprof.c"
        var $18=$17+12; //@line 717 "_lsprof.c"
        HEAP[$18]=$16; //@line 717 "_lsprof.c"
        __label__ = 4; break; //@line 717 "_lsprof.c"
      case 4: // $bb3
        var $19=$pContext; //@line 718 "_lsprof.c"
        var $20=($19)!=0; //@line 718 "_lsprof.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 718 "_lsprof.c"
      case 5: // $bb5_backedge
        var $21=$pObj_addr; //@line 711 "_lsprof.c"
        var $22=$21+12; //@line 711 "_lsprof.c"
        var $23=HEAP[$22]; //@line 711 "_lsprof.c"
        var $24=($23)!=0; //@line 711 "_lsprof.c"
        if ($24) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 711 "_lsprof.c"
      case 6: // $bb4
        var $25=$pContext; //@line 719 "_lsprof.c"
        var $26=$25; //@line 719 "_lsprof.c"
        _free($26); //@line 719 "_lsprof.c"
        __label__ = 5; break; //@line 719 "_lsprof.c"
      case 7: // $return
        ;
        return; //@line 722 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_disable($self, $noarg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $noarg_addr;
        var $retval;
        var $1;
        $self_addr=$self;
        $noarg_addr=$noarg;
        var $2=$self_addr; //@line 733 "_lsprof.c"
        var $3=$2+20; //@line 733 "_lsprof.c"
        var $4=HEAP[$3]; //@line 733 "_lsprof.c"
        var $5=($4) & -2; //@line 733 "_lsprof.c"
        var $6=$self_addr; //@line 733 "_lsprof.c"
        var $7=$6+20; //@line 733 "_lsprof.c"
        HEAP[$7]=$5; //@line 733 "_lsprof.c"
        _PyEval_SetProfile(0, 0); //@line 734 "_lsprof.c"
        var $8=$self_addr; //@line 735 "_lsprof.c"
        _flush_unmatched($8); //@line 735 "_lsprof.c"
        var $9=$self_addr; //@line 736 "_lsprof.c"
        $pObj_addr_i=$9;
        var $10=$pObj_addr_i; //@line 491 "_lsprof.c"
        var $11=$10+20; //@line 491 "_lsprof.c"
        var $12=HEAP[$11]; //@line 491 "_lsprof.c"
        var $13=($12) & 256; //@line 491 "_lsprof.c"
        var $14=($13)!=0; //@line 491 "_lsprof.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 491 "_lsprof.c"
      case 1: // $bb
        var $15=$pObj_addr_i; //@line 492 "_lsprof.c"
        var $16=$15+20; //@line 492 "_lsprof.c"
        var $17=HEAP[$16]; //@line 492 "_lsprof.c"
        var $18=($17) - 256; //@line 492 "_lsprof.c"
        var $19=$pObj_addr_i; //@line 492 "_lsprof.c"
        var $20=$19+20; //@line 492 "_lsprof.c"
        HEAP[$20]=$18; //@line 492 "_lsprof.c"
        var $21=HEAP[_PyExc_MemoryError]; //@line 493 "_lsprof.c"
        _PyErr_SetString($21, __str4); //@line 493 "_lsprof.c"
        $0=-1; //@line 495 "_lsprof.c"
        $retval_i=-1; //@line 495 "_lsprof.c"
        $1=0; //@line 737 "_lsprof.c"
        __label__ = 3; break; //@line 737 "_lsprof.c"
      case 2: // $bb1
        $0=0; //@line 497 "_lsprof.c"
        $retval_i=0; //@line 495 "_lsprof.c"
        var $22=HEAP[__Py_NoneStruct]; //@line 738 "_lsprof.c"
        var $23=($22) + 1; //@line 738 "_lsprof.c"
        HEAP[__Py_NoneStruct]=$23; //@line 738 "_lsprof.c"
        $1=__Py_NoneStruct; //@line 739 "_lsprof.c"
        __label__ = 3; break; //@line 739 "_lsprof.c"
      case 3: // $bb2
        var $24=$1; //@line 737 "_lsprof.c"
        $retval=$24; //@line 737 "_lsprof.c"
        var $retval3=$retval; //@line 737 "_lsprof.c"
        ;
        return $retval3; //@line 737 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_clear($pObj, $noarg) {
    ;
    var __label__;
  
    var $pObj_addr;
    var $noarg_addr;
    var $retval;
    var $0;
    $pObj_addr=$pObj;
    $noarg_addr=$noarg;
    var $1=$pObj_addr; //@line 751 "_lsprof.c"
    _clearEntries($1); //@line 751 "_lsprof.c"
    var $2=HEAP[__Py_NoneStruct]; //@line 752 "_lsprof.c"
    var $3=($2) + 1; //@line 752 "_lsprof.c"
    HEAP[__Py_NoneStruct]=$3; //@line 752 "_lsprof.c"
    $0=__Py_NoneStruct; //@line 753 "_lsprof.c"
    var $4=$0; //@line 753 "_lsprof.c"
    $retval=$4; //@line 753 "_lsprof.c"
    var $retval1=$retval; //@line 753 "_lsprof.c"
    ;
    return $retval1; //@line 753 "_lsprof.c"
  }
  

  function _profiler_dealloc($op) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $op_addr;
        $op_addr=$op;
        var $0=$op_addr; //@line 759 "_lsprof.c"
        var $1=$0+20; //@line 759 "_lsprof.c"
        var $2=HEAP[$1]; //@line 759 "_lsprof.c"
        var $3=($2) & 1; //@line 759 "_lsprof.c"
        var $4=((($3)) & 255); //@line 759 "_lsprof.c"
        var $toBool=($4)!=0; //@line 759 "_lsprof.c"
        if ($toBool) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 759 "_lsprof.c"
      case 1: // $bb
        _PyEval_SetProfile(0, 0); //@line 760 "_lsprof.c"
        __label__ = 2; break; //@line 760 "_lsprof.c"
      case 2: // $bb1
        var $5=$op_addr; //@line 761 "_lsprof.c"
        _flush_unmatched($5); //@line 761 "_lsprof.c"
        var $6=$op_addr; //@line 762 "_lsprof.c"
        _clearEntries($6); //@line 762 "_lsprof.c"
        var $7=$op_addr; //@line 763 "_lsprof.c"
        var $8=$7+24; //@line 763 "_lsprof.c"
        var $9=HEAP[$8]; //@line 763 "_lsprof.c"
        var $10=($9)!=0; //@line 763 "_lsprof.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 763 "_lsprof.c"
      case 3: // $bb2
        var $11=$op_addr; //@line 763 "_lsprof.c"
        var $12=$11+24; //@line 763 "_lsprof.c"
        var $13=HEAP[$12]; //@line 763 "_lsprof.c"
        var $14=$13; //@line 763 "_lsprof.c"
        var $15=HEAP[$14]; //@line 763 "_lsprof.c"
        var $16=($15) - 1; //@line 763 "_lsprof.c"
        var $17=$13; //@line 763 "_lsprof.c"
        HEAP[$17]=$16; //@line 763 "_lsprof.c"
        var $18=$13; //@line 763 "_lsprof.c"
        var $19=HEAP[$18]; //@line 763 "_lsprof.c"
        var $20=($19)==0; //@line 763 "_lsprof.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 763 "_lsprof.c"
      case 4: // $bb3
        var $21=$op_addr; //@line 763 "_lsprof.c"
        var $22=$21+24; //@line 763 "_lsprof.c"
        var $23=HEAP[$22]; //@line 763 "_lsprof.c"
        var $24=$23+4; //@line 763 "_lsprof.c"
        var $25=HEAP[$24]; //@line 763 "_lsprof.c"
        var $26=$25+24; //@line 763 "_lsprof.c"
        var $27=HEAP[$26]; //@line 763 "_lsprof.c"
        var $28=$op_addr; //@line 763 "_lsprof.c"
        var $29=$28+24; //@line 763 "_lsprof.c"
        var $30=HEAP[$29]; //@line 763 "_lsprof.c"
        FUNCTION_TABLE[$27]($30); //@line 763 "_lsprof.c"
        __label__ = 5; break; //@line 763 "_lsprof.c"
      case 5: // $bb4
        var $31=$op_addr; //@line 764 "_lsprof.c"
        var $32=$31; //@line 764 "_lsprof.c"
        var $33=$32+4; //@line 764 "_lsprof.c"
        var $34=HEAP[$33]; //@line 764 "_lsprof.c"
        var $35=$34+160; //@line 764 "_lsprof.c"
        var $36=HEAP[$35]; //@line 764 "_lsprof.c"
        var $37=$op_addr; //@line 764 "_lsprof.c"
        var $38=$37; //@line 764 "_lsprof.c"
        FUNCTION_TABLE[$36]($38); //@line 764 "_lsprof.c"
        ;
        return; //@line 765 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_init($pObj, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pObj_addr_i1;
        var $nvalue_addr_i2;
        var $retval_i3;
        var $0;
        var $pObj_addr_i;
        var $nvalue_addr_i;
        var $retval_i;
        var $1;
        var $pObj_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $2;
        var $o;
        var $timer=__stackBase__;
        var $timeunit=__stackBase__+4;
        var $subcalls=__stackBase__+12;
        var $builtins=__stackBase__+16;
        $pObj_addr=$pObj;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$timer]=0; //@line 771 "_lsprof.c"
        HEAP[$timeunit]=0; //@line 772 "_lsprof.c"
        HEAP[$subcalls]=1; //@line 773 "_lsprof.c"
        HEAP[$builtins]=1; //@line 775 "_lsprof.c"
        var $3=$args_addr; //@line 782 "_lsprof.c"
        var $4=$kw_addr; //@line 782 "_lsprof.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str29, _kwlist_9228, $timer, $timeunit, $subcalls, $builtins); //@line 782 "_lsprof.c"
        var $6=($5)==0; //@line 782 "_lsprof.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 782 "_lsprof.c"
      case 1: // $bb
        $2=-1; //@line 785 "_lsprof.c"
        __label__ = 16; break; //@line 785 "_lsprof.c"
      case 2: // $bb1
        var $7=HEAP[$subcalls]; //@line 787 "_lsprof.c"
        var $8=$pObj_addr; //@line 787 "_lsprof.c"
        $pObj_addr_i=$8;
        $nvalue_addr_i=$7;
        var $9=$nvalue_addr_i; //@line 657 "_lsprof.c"
        var $10=($9)==0; //@line 657 "_lsprof.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 657 "_lsprof.c"
      case 3: // $bb_i
        var $11=$pObj_addr_i; //@line 658 "_lsprof.c"
        var $12=$11+20; //@line 658 "_lsprof.c"
        var $13=HEAP[$12]; //@line 658 "_lsprof.c"
        var $14=($13) & -3; //@line 658 "_lsprof.c"
        var $15=$pObj_addr_i; //@line 658 "_lsprof.c"
        var $16=$15+20; //@line 658 "_lsprof.c"
        HEAP[$16]=$14; //@line 658 "_lsprof.c"
        __label__ = 6; break; //@line 658 "_lsprof.c"
      case 4: // $bb1_i
        var $17=$nvalue_addr_i; //@line 659 "_lsprof.c"
        var $18=($17) > 0; //@line 659 "_lsprof.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 659 "_lsprof.c"
      case 5: // $bb2_i
        var $19=$pObj_addr_i; //@line 660 "_lsprof.c"
        var $20=$19+20; //@line 660 "_lsprof.c"
        var $21=HEAP[$20]; //@line 660 "_lsprof.c"
        var $22=($21) | 2; //@line 660 "_lsprof.c"
        var $23=$pObj_addr_i; //@line 660 "_lsprof.c"
        var $24=$23+20; //@line 660 "_lsprof.c"
        HEAP[$24]=$22; //@line 660 "_lsprof.c"
        __label__ = 6; break; //@line 660 "_lsprof.c"
      case 6: // $bb2
        $1=0; //@line 661 "_lsprof.c"
        $retval_i=0; //@line 661 "_lsprof.c"
        var $25=HEAP[$builtins]; //@line 787 "_lsprof.c"
        var $26=$pObj_addr; //@line 787 "_lsprof.c"
        $pObj_addr_i1=$26;
        $nvalue_addr_i2=$25;
        var $27=($25)==0; //@line 667 "_lsprof.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 667 "_lsprof.c"
      case 7: // $bb_i4
        var $28=$pObj_addr_i1; //@line 668 "_lsprof.c"
        var $29=$28+20; //@line 668 "_lsprof.c"
        var $30=HEAP[$29]; //@line 668 "_lsprof.c"
        var $31=($30) & -5; //@line 668 "_lsprof.c"
        var $32=$pObj_addr_i1; //@line 668 "_lsprof.c"
        var $33=$32+20; //@line 668 "_lsprof.c"
        HEAP[$33]=$31; //@line 668 "_lsprof.c"
        __label__ = 10; break; //@line 668 "_lsprof.c"
      case 8: // $bb1_i5
        var $34=$nvalue_addr_i2; //@line 669 "_lsprof.c"
        var $35=($34) > 0; //@line 669 "_lsprof.c"
        if ($35) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 669 "_lsprof.c"
      case 9: // $bb2_i6
        var $36=$pObj_addr_i1; //@line 675 "_lsprof.c"
        var $37=$36+20; //@line 675 "_lsprof.c"
        var $38=HEAP[$37]; //@line 675 "_lsprof.c"
        var $39=($38) | 4; //@line 675 "_lsprof.c"
        var $40=$pObj_addr_i1; //@line 675 "_lsprof.c"
        var $41=$40+20; //@line 675 "_lsprof.c"
        HEAP[$41]=$39; //@line 675 "_lsprof.c"
        __label__ = 10; break; //@line 675 "_lsprof.c"
      case 10: // $bb4
        $0=0; //@line 678 "_lsprof.c"
        $retval_i3=0; //@line 678 "_lsprof.c"
        var $42=$pObj_addr; //@line 789 "_lsprof.c"
        var $43=$42+24; //@line 789 "_lsprof.c"
        var $44=HEAP[$43]; //@line 789 "_lsprof.c"
        $o=$44; //@line 789 "_lsprof.c"
        var $45=HEAP[$timer]; //@line 790 "_lsprof.c"
        var $46=$pObj_addr; //@line 790 "_lsprof.c"
        var $47=$46+24; //@line 790 "_lsprof.c"
        HEAP[$47]=$45; //@line 790 "_lsprof.c"
        var $48=HEAP[$timer]; //@line 791 "_lsprof.c"
        var $49=($48)!=0; //@line 791 "_lsprof.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 791 "_lsprof.c"
      case 11: // $bb5
        var $50=HEAP[$timer]; //@line 791 "_lsprof.c"
        var $51=$50; //@line 791 "_lsprof.c"
        var $52=HEAP[$51]; //@line 791 "_lsprof.c"
        var $53=($52) + 1; //@line 791 "_lsprof.c"
        var $54=$50; //@line 791 "_lsprof.c"
        HEAP[$54]=$53; //@line 791 "_lsprof.c"
        __label__ = 12; break; //@line 791 "_lsprof.c"
      case 12: // $bb6
        var $55=$o; //@line 792 "_lsprof.c"
        var $56=($55)!=0; //@line 792 "_lsprof.c"
        if ($56) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 792 "_lsprof.c"
      case 13: // $bb7
        var $57=$o; //@line 792 "_lsprof.c"
        var $58=$57; //@line 792 "_lsprof.c"
        var $59=HEAP[$58]; //@line 792 "_lsprof.c"
        var $60=($59) - 1; //@line 792 "_lsprof.c"
        var $61=$o; //@line 792 "_lsprof.c"
        var $62=$61; //@line 792 "_lsprof.c"
        HEAP[$62]=$60; //@line 792 "_lsprof.c"
        var $63=$o; //@line 792 "_lsprof.c"
        var $64=$63; //@line 792 "_lsprof.c"
        var $65=HEAP[$64]; //@line 792 "_lsprof.c"
        var $66=($65)==0; //@line 792 "_lsprof.c"
        if ($66) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 792 "_lsprof.c"
      case 14: // $bb8
        var $67=$o; //@line 792 "_lsprof.c"
        var $68=$67+4; //@line 792 "_lsprof.c"
        var $69=HEAP[$68]; //@line 792 "_lsprof.c"
        var $70=$69+24; //@line 792 "_lsprof.c"
        var $71=HEAP[$70]; //@line 792 "_lsprof.c"
        var $72=$o; //@line 792 "_lsprof.c"
        FUNCTION_TABLE[$71]($72); //@line 792 "_lsprof.c"
        __label__ = 15; break; //@line 792 "_lsprof.c"
      case 15: // $bb9
        var $73=HEAP[$timeunit]; //@line 793 "_lsprof.c"
        var $74=$pObj_addr; //@line 793 "_lsprof.c"
        var $75=$74+28; //@line 793 "_lsprof.c"
        HEAP[$75]=$73; //@line 793 "_lsprof.c"
        $2=0; //@line 794 "_lsprof.c"
        __label__ = 16; break; //@line 794 "_lsprof.c"
      case 16: // $bb10
        var $76=$2; //@line 785 "_lsprof.c"
        $retval=$76; //@line 785 "_lsprof.c"
        var $retval11=$retval; //@line 785 "_lsprof.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 785 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_lsprof() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module;
        var $d;
        var $0=_Py_InitModule4(__str37, _moduleMethods, __str38, 0, 1013); //@line 870 "_lsprof.c"
        $module=$0; //@line 870 "_lsprof.c"
        var $1=$module; //@line 871 "_lsprof.c"
        var $2=($1)==0; //@line 871 "_lsprof.c"
        if ($2) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 871 "_lsprof.c"
      case 1: // $bb
        var $3=$module; //@line 873 "_lsprof.c"
        var $4=_PyModule_GetDict($3); //@line 873 "_lsprof.c"
        $d=$4; //@line 873 "_lsprof.c"
        var $5=_PyType_Ready(_PyProfiler_Type); //@line 874 "_lsprof.c"
        var $6=($5) < 0; //@line 874 "_lsprof.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 874 "_lsprof.c"
      case 2: // $bb1
        var $7=$d; //@line 876 "_lsprof.c"
        var $8=_PyDict_SetItemString($7, __str39, _PyProfiler_Type); //@line 876 "_lsprof.c"
        var $_b=HEAP[_initialized_b];
        var $9=($_b);
        var $10=($9)==0; //@line 878 "_lsprof.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 878 "_lsprof.c"
      case 3: // $bb2
        _PyStructSequence_InitType(_StatsEntryType, _profiler_entry_desc); //@line 879 "_lsprof.c"
        _PyStructSequence_InitType(_StatsSubEntryType, _profiler_subentry_desc); //@line 881 "_lsprof.c"
        __label__ = 4; break; //@line 881 "_lsprof.c"
      case 4: // $bb3
        var $11=HEAP[_StatsEntryType]; //@line 884 "_lsprof.c"
        var $12=($11) + 1; //@line 884 "_lsprof.c"
        HEAP[_StatsEntryType]=$12; //@line 884 "_lsprof.c"
        var $13=HEAP[_StatsSubEntryType]; //@line 885 "_lsprof.c"
        var $14=($13) + 1; //@line 885 "_lsprof.c"
        HEAP[_StatsSubEntryType]=$14; //@line 885 "_lsprof.c"
        var $15=$module; //@line 886 "_lsprof.c"
        var $16=_PyModule_AddObject($15, __str40, _StatsEntryType); //@line 886 "_lsprof.c"
        var $17=$module; //@line 888 "_lsprof.c"
        var $18=_PyModule_AddObject($17, __str41, _StatsSubEntryType); //@line 888 "_lsprof.c"
        var $19=_PyTuple_New(0); //@line 890 "_lsprof.c"
        HEAP[_empty_tuple]=$19; //@line 890 "_lsprof.c"
        HEAP[_initialized_b]=1;
        __label__ = 5; break; //@line 891 "_lsprof.c"
      case 5: // $return
        ;
        return; //@line 872 "_lsprof.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_lsprof"] = _init_lsprof;

  function _RotatingTree_Add($root, $node) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $root_addr;
        var $node_addr;
        $root_addr=$root;
        $node_addr=$node;
        var $0=$root_addr; //@line 33 "rotatingtree.c"
        var $1=HEAP[$0]; //@line 33 "rotatingtree.c"
        var $2=($1)!=0; //@line 33 "rotatingtree.c"
        var $3=$node_addr; //@line 34 "rotatingtree.c"
        if ($2) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 5; break; } //@line 33 "rotatingtree.c"
      case 1: // $bb
        var $4=__lastLabel__ == 3 ? $18 : ($3);
        var $5=$4; //@line 34 "rotatingtree.c"
        var $6=HEAP[$5]; //@line 34 "rotatingtree.c"
        var $7=$root_addr; //@line 34 "rotatingtree.c"
        var $8=HEAP[$7]; //@line 34 "rotatingtree.c"
        var $9=$8; //@line 34 "rotatingtree.c"
        var $10=HEAP[$9]; //@line 34 "rotatingtree.c"
        var $11=($6) < ($10); //@line 34 "rotatingtree.c"
        var $12=$root_addr; //@line 35 "rotatingtree.c"
        var $13=HEAP[$12]; //@line 35 "rotatingtree.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 34 "rotatingtree.c"
      case 2: // $bb1
        var $14=$13+4; //@line 35 "rotatingtree.c"
        $root_addr=$14; //@line 35 "rotatingtree.c"
        __label__ = 3; break; //@line 35 "rotatingtree.c"
      case 3: // $bb3_backedge
        var $15=$root_addr; //@line 33 "rotatingtree.c"
        var $16=HEAP[$15]; //@line 33 "rotatingtree.c"
        var $17=($16)!=0; //@line 33 "rotatingtree.c"
        var $18=$node_addr; //@line 34 "rotatingtree.c"
        if ($17) { __lastLabel__ = 3; __label__ = 1; break; } else { __lastLabel__ = 3; __label__ = 5; break; } //@line 33 "rotatingtree.c"
      case 4: // $bb2
        var $19=$13+8; //@line 37 "rotatingtree.c"
        $root_addr=$19; //@line 37 "rotatingtree.c"
        __label__ = 3; break; //@line 37 "rotatingtree.c"
      case 5: // $bb4
        var $_lcssa=__lastLabel__ == -1 ? $3 : ($18);
        var $20=$_lcssa+4; //@line 39 "rotatingtree.c"
        HEAP[$20]=0; //@line 39 "rotatingtree.c"
        var $21=$node_addr; //@line 40 "rotatingtree.c"
        var $22=$21+8; //@line 40 "rotatingtree.c"
        HEAP[$22]=0; //@line 40 "rotatingtree.c"
        var $23=$root_addr; //@line 41 "rotatingtree.c"
        var $24=$node_addr; //@line 41 "rotatingtree.c"
        HEAP[$23]=$24; //@line 41 "rotatingtree.c"
        ;
        return; //@line 42 "rotatingtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _RotatingTree_Get($root, $key) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $bits_addr_i1;
        var $retval_i2;
        var $0;
        var $result_i3;
        var $bits_addr_i;
        var $retval_i;
        var $1;
        var $result_i;
        var $root_addr;
        var $key_addr;
        var $retval;
        var $2;
        var $node;
        var $pnode;
        var $node9;
        var $next;
        var $rotate;
        $root_addr=$root;
        $key_addr=$key;
        $bits_addr_i=3;
        var $3=$bits_addr_i; //@line 18 "rotatingtree.c"
        var $4=1 << ($3); //@line 18 "rotatingtree.c"
        var $5=HEAP[_random_stream]; //@line 18 "rotatingtree.c"
        var $6=($4) > ($5); //@line 18 "rotatingtree.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 18 "rotatingtree.c"
      case 1: // $bb_i
        var $7=HEAP[_random_value]; //@line 19 "rotatingtree.c"
        var $8=($7) * 1082527; //@line 19 "rotatingtree.c"
        HEAP[_random_value]=$8; //@line 19 "rotatingtree.c"
        var $9=HEAP[_random_value]; //@line 20 "rotatingtree.c"
        HEAP[_random_stream]=$9; //@line 20 "rotatingtree.c"
        __label__ = 2; break; //@line 20 "rotatingtree.c"
      case 2: // $randombits_exit
        var $10=$bits_addr_i; //@line 22 "rotatingtree.c"
        var $11=1 << ($10); //@line 22 "rotatingtree.c"
        var $12=($11) - 1; //@line 22 "rotatingtree.c"
        var $13=HEAP[_random_stream]; //@line 22 "rotatingtree.c"
        var $14=($12) & ($13); //@line 22 "rotatingtree.c"
        $result_i=$14; //@line 22 "rotatingtree.c"
        var $15=HEAP[_random_stream]; //@line 23 "rotatingtree.c"
        var $16=$bits_addr_i; //@line 23 "rotatingtree.c"
        var $17=($15) >>> ($16); //@line 23 "rotatingtree.c"
        HEAP[_random_stream]=$17; //@line 23 "rotatingtree.c"
        $1=$14; //@line 24 "rotatingtree.c"
        $retval_i=$14; //@line 24 "rotatingtree.c"
        var $18=($14)!=4; //@line 50 "rotatingtree.c"
        var $19=$root_addr; //@line 52 "rotatingtree.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 11; break; } //@line 50 "rotatingtree.c"
      case 3: // $bb
        var $20=HEAP[$19]; //@line 52 "rotatingtree.c"
        $node=$20; //@line 52 "rotatingtree.c"
        __lastLabel__ = 3; __label__ = 9; break; //@line 52 "rotatingtree.c"
      case 4: // $bb1
        var $21=$node; //@line 54 "rotatingtree.c"
        var $22=$21; //@line 54 "rotatingtree.c"
        var $23=HEAP[$22]; //@line 54 "rotatingtree.c"
        var $24=$key_addr; //@line 54 "rotatingtree.c"
        var $25=($23)==($24); //@line 54 "rotatingtree.c"
        var $26=$node; //@line 55 "rotatingtree.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 54 "rotatingtree.c"
      case 5: // $bb2
        $2=$26; //@line 55 "rotatingtree.c"
        __label__ = 29; break; //@line 55 "rotatingtree.c"
      case 6: // $bb3
        var $27=$26; //@line 56 "rotatingtree.c"
        var $28=HEAP[$27]; //@line 56 "rotatingtree.c"
        var $29=$key_addr; //@line 56 "rotatingtree.c"
        var $30=($28) > ($29); //@line 56 "rotatingtree.c"
        var $31=$node; //@line 57 "rotatingtree.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 56 "rotatingtree.c"
      case 7: // $bb4
        var $32=$31+4; //@line 57 "rotatingtree.c"
        var $33=HEAP[$32]; //@line 57 "rotatingtree.c"
        $node=$33; //@line 57 "rotatingtree.c"
        __lastLabel__ = 7; __label__ = 9; break; //@line 57 "rotatingtree.c"
      case 8: // $bb5
        var $34=$31+8; //@line 59 "rotatingtree.c"
        var $35=HEAP[$34]; //@line 59 "rotatingtree.c"
        $node=$35; //@line 59 "rotatingtree.c"
        __lastLabel__ = 8; __label__ = 9; break; //@line 59 "rotatingtree.c"
      case 9: // $bb6
        var $36=__lastLabel__ == 3 ? $20 : (__lastLabel__ == 8 ? $35 : ($33));
        var $37=($36)!=0; //@line 53 "rotatingtree.c"
        if ($37) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 53 "rotatingtree.c"
      case 10: // $bb7
        $2=0; //@line 61 "rotatingtree.c"
        __label__ = 29; break; //@line 61 "rotatingtree.c"
      case 11: // $bb8
        $pnode=$19; //@line 64 "rotatingtree.c"
        var $38=$pnode; //@line 65 "rotatingtree.c"
        var $39=HEAP[$38]; //@line 65 "rotatingtree.c"
        $node9=$39; //@line 65 "rotatingtree.c"
        var $40=$node9; //@line 68 "rotatingtree.c"
        var $41=($40)==0; //@line 68 "rotatingtree.c"
        if ($41) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 68 "rotatingtree.c"
      case 12: // $bb10
        $2=0; //@line 69 "rotatingtree.c"
        __label__ = 29; break; //@line 69 "rotatingtree.c"
      case 13: // $bb11
        var $42=$node9; //@line 71 "rotatingtree.c"
        var $43=$42; //@line 71 "rotatingtree.c"
        var $44=HEAP[$43]; //@line 71 "rotatingtree.c"
        var $45=$key_addr; //@line 71 "rotatingtree.c"
        var $46=($44)==($45); //@line 71 "rotatingtree.c"
        if ($46) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 71 "rotatingtree.c"
      case 14: // $bb12
        var $47=$node9; //@line 72 "rotatingtree.c"
        $2=$47; //@line 72 "rotatingtree.c"
        __label__ = 29; break; //@line 72 "rotatingtree.c"
      case 15: // $bb13
        $bits_addr_i1=1;
        var $48=$bits_addr_i1; //@line 18 "rotatingtree.c"
        var $49=1 << ($48); //@line 18 "rotatingtree.c"
        var $50=HEAP[_random_stream]; //@line 18 "rotatingtree.c"
        var $51=($49) > ($50); //@line 18 "rotatingtree.c"
        if ($51) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 18 "rotatingtree.c"
      case 16: // $bb_i4
        var $52=HEAP[_random_value]; //@line 19 "rotatingtree.c"
        var $53=($52) * 1082527; //@line 19 "rotatingtree.c"
        HEAP[_random_value]=$53; //@line 19 "rotatingtree.c"
        var $54=HEAP[_random_value]; //@line 20 "rotatingtree.c"
        HEAP[_random_stream]=$54; //@line 20 "rotatingtree.c"
        __label__ = 17; break; //@line 20 "rotatingtree.c"
      case 17: // $randombits_exit6
        var $55=$bits_addr_i1; //@line 22 "rotatingtree.c"
        var $56=1 << ($55); //@line 22 "rotatingtree.c"
        var $57=($56) - 1; //@line 22 "rotatingtree.c"
        var $58=HEAP[_random_stream]; //@line 22 "rotatingtree.c"
        var $59=($57) & ($58); //@line 22 "rotatingtree.c"
        $result_i3=$59; //@line 22 "rotatingtree.c"
        var $60=HEAP[_random_stream]; //@line 23 "rotatingtree.c"
        var $61=$bits_addr_i1; //@line 23 "rotatingtree.c"
        var $62=($60) >>> ($61); //@line 23 "rotatingtree.c"
        HEAP[_random_stream]=$62; //@line 23 "rotatingtree.c"
        var $63=$result_i3; //@line 24 "rotatingtree.c"
        $0=$63; //@line 24 "rotatingtree.c"
        var $64=$0; //@line 24 "rotatingtree.c"
        $retval_i2=$64; //@line 24 "rotatingtree.c"
        var $retval2_i5=$retval_i2; //@line 24 "rotatingtree.c"
        var $65=($retval2_i5)==0; //@line 73 "rotatingtree.c"
        var $66=($65); //@line 73 "rotatingtree.c"
        $rotate=$66; //@line 73 "rotatingtree.c"
        var $67=$node9; //@line 74 "rotatingtree.c"
        var $68=$67; //@line 74 "rotatingtree.c"
        var $69=HEAP[$68]; //@line 74 "rotatingtree.c"
        var $70=$key_addr; //@line 74 "rotatingtree.c"
        var $71=($69) > ($70); //@line 74 "rotatingtree.c"
        var $72=$node9; //@line 75 "rotatingtree.c"
        if ($71) { __label__ = 18; break; } else { __label__ = 23; break; } //@line 74 "rotatingtree.c"
      case 18: // $bb14
        var $73=$72+4; //@line 75 "rotatingtree.c"
        var $74=HEAP[$73]; //@line 75 "rotatingtree.c"
        $next=$74; //@line 75 "rotatingtree.c"
        var $75=$next; //@line 76 "rotatingtree.c"
        var $76=($75)==0; //@line 76 "rotatingtree.c"
        if ($76) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 76 "rotatingtree.c"
      case 19: // $bb15
        $2=0; //@line 77 "rotatingtree.c"
        __label__ = 29; break; //@line 77 "rotatingtree.c"
      case 20: // $bb16
        var $77=$rotate; //@line 78 "rotatingtree.c"
        var $78=($77)!=0; //@line 78 "rotatingtree.c"
        if ($78) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 78 "rotatingtree.c"
      case 21: // $bb17
        var $79=$next; //@line 79 "rotatingtree.c"
        var $80=$79+8; //@line 79 "rotatingtree.c"
        var $81=HEAP[$80]; //@line 79 "rotatingtree.c"
        var $82=$node9; //@line 79 "rotatingtree.c"
        var $83=$82+4; //@line 79 "rotatingtree.c"
        HEAP[$83]=$81; //@line 79 "rotatingtree.c"
        var $84=$next; //@line 80 "rotatingtree.c"
        var $85=$84+8; //@line 80 "rotatingtree.c"
        var $86=$node9; //@line 80 "rotatingtree.c"
        HEAP[$85]=$86; //@line 80 "rotatingtree.c"
        var $87=$pnode; //@line 81 "rotatingtree.c"
        var $88=$next; //@line 81 "rotatingtree.c"
        HEAP[$87]=$88; //@line 81 "rotatingtree.c"
        __label__ = 28; break; //@line 81 "rotatingtree.c"
      case 22: // $bb18
        var $89=$node9; //@line 84 "rotatingtree.c"
        var $90=$89+4; //@line 84 "rotatingtree.c"
        $pnode=$90; //@line 84 "rotatingtree.c"
        __label__ = 28; break; //@line 84 "rotatingtree.c"
      case 23: // $bb20
        var $91=$72+8; //@line 87 "rotatingtree.c"
        var $92=HEAP[$91]; //@line 87 "rotatingtree.c"
        $next=$92; //@line 87 "rotatingtree.c"
        var $93=$next; //@line 88 "rotatingtree.c"
        var $94=($93)==0; //@line 88 "rotatingtree.c"
        if ($94) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 88 "rotatingtree.c"
      case 24: // $bb21
        $2=0; //@line 89 "rotatingtree.c"
        __label__ = 29; break; //@line 89 "rotatingtree.c"
      case 25: // $bb22
        var $95=$rotate; //@line 90 "rotatingtree.c"
        var $96=($95)!=0; //@line 90 "rotatingtree.c"
        if ($96) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 90 "rotatingtree.c"
      case 26: // $bb23
        var $97=$next; //@line 91 "rotatingtree.c"
        var $98=$97+4; //@line 91 "rotatingtree.c"
        var $99=HEAP[$98]; //@line 91 "rotatingtree.c"
        var $100=$node9; //@line 91 "rotatingtree.c"
        var $101=$100+8; //@line 91 "rotatingtree.c"
        HEAP[$101]=$99; //@line 91 "rotatingtree.c"
        var $102=$next; //@line 92 "rotatingtree.c"
        var $103=$102+4; //@line 92 "rotatingtree.c"
        var $104=$node9; //@line 92 "rotatingtree.c"
        HEAP[$103]=$104; //@line 92 "rotatingtree.c"
        var $105=$pnode; //@line 93 "rotatingtree.c"
        var $106=$next; //@line 93 "rotatingtree.c"
        HEAP[$105]=$106; //@line 93 "rotatingtree.c"
        __label__ = 28; break; //@line 93 "rotatingtree.c"
      case 27: // $bb24
        var $107=$node9; //@line 96 "rotatingtree.c"
        var $108=$107+8; //@line 96 "rotatingtree.c"
        $pnode=$108; //@line 96 "rotatingtree.c"
        __label__ = 28; break; //@line 96 "rotatingtree.c"
      case 28: // $bb25
        var $109=$next; //@line 98 "rotatingtree.c"
        $node9=$109; //@line 98 "rotatingtree.c"
        __label__ = 13; break; //@line 98 "rotatingtree.c"
      case 29: // $bb26
        var $110=$2; //@line 55 "rotatingtree.c"
        $retval=$110; //@line 55 "rotatingtree.c"
        var $retval27=$retval; //@line 55 "rotatingtree.c"
        ;
        return $retval27; //@line 55 "rotatingtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _RotatingTree_Enum($root, $enumfn, $arg) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $root_addr;
        var $enumfn_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $result;
        var $node;
        $root_addr=$root;
        $enumfn_addr=$enumfn;
        $arg_addr=$arg;
        __lastLabel__ = -1; __label__ = 6; break; //@line 112 "rotatingtree.c"
      case 1: // $bb
        var $1=$root_addr; //@line 113 "rotatingtree.c"
        var $2=$1+4; //@line 113 "rotatingtree.c"
        var $3=HEAP[$2]; //@line 113 "rotatingtree.c"
        var $4=$enumfn_addr; //@line 113 "rotatingtree.c"
        var $5=$arg_addr; //@line 113 "rotatingtree.c"
        var $6=_RotatingTree_Enum($3, $4, $5); //@line 113 "rotatingtree.c"
        $result=$6; //@line 113 "rotatingtree.c"
        var $7=$result; //@line 114 "rotatingtree.c"
        var $8=($7)!=0; //@line 114 "rotatingtree.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 114 "rotatingtree.c"
      case 2: // $bb1
        var $9=$result; //@line 114 "rotatingtree.c"
        $0=$9; //@line 114 "rotatingtree.c"
        __label__ = 8; break; //@line 114 "rotatingtree.c"
      case 3: // $bb2
        var $10=$root_addr; //@line 115 "rotatingtree.c"
        var $11=$10+8; //@line 115 "rotatingtree.c"
        var $12=HEAP[$11]; //@line 115 "rotatingtree.c"
        $node=$12; //@line 115 "rotatingtree.c"
        var $13=$enumfn_addr; //@line 116 "rotatingtree.c"
        var $14=$root_addr; //@line 116 "rotatingtree.c"
        var $15=$arg_addr; //@line 116 "rotatingtree.c"
        var $16=FUNCTION_TABLE[$13]($14, $15); //@line 116 "rotatingtree.c"
        $result=$16; //@line 116 "rotatingtree.c"
        var $17=$result; //@line 117 "rotatingtree.c"
        var $18=($17)!=0; //@line 117 "rotatingtree.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 117 "rotatingtree.c"
      case 4: // $bb3
        var $19=$result; //@line 117 "rotatingtree.c"
        $0=$19; //@line 117 "rotatingtree.c"
        __label__ = 8; break; //@line 117 "rotatingtree.c"
      case 5: // $bb4
        var $20=$node; //@line 118 "rotatingtree.c"
        $root_addr=$20; //@line 118 "rotatingtree.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 118 "rotatingtree.c"
      case 6: // $bb5
        var $21=__lastLabel__ == 5 ? $20 : ($root);
        var $22=($21)!=0; //@line 112 "rotatingtree.c"
        if ($22) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 112 "rotatingtree.c"
      case 7: // $bb6
        $0=0; //@line 120 "rotatingtree.c"
        __label__ = 8; break; //@line 120 "rotatingtree.c"
      case 8: // $bb7
        var $23=$0; //@line 114 "rotatingtree.c"
        $retval=$23; //@line 114 "rotatingtree.c"
        var $retval8=$retval; //@line 114 "rotatingtree.c"
        ;
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
_initialized_b=allocate(1, "i1", ALLOC_NORMAL);
__str40=allocate([112,114,111,102,105,108,101,114,95,101,110,116,114,121,0] /* profiler_entry\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([112,114,111,102,105,108,101,114,95,115,117,98,101,110,116,114,121,0] /* profiler_subentry\00 */, "i8", ALLOC_NORMAL);
_random_value=allocate([1], "i32", ALLOC_NORMAL);
_random_stream=allocate(1, "i32", ALLOC_NORMAL);
HEAP[_profiler_entry_fields]=__str5;
HEAP[_profiler_entry_fields+4]=__str6;
HEAP[_profiler_entry_fields+8]=__str7;
HEAP[_profiler_entry_fields+12]=__str8;
HEAP[_profiler_entry_fields+16]=__str9;
HEAP[_profiler_entry_fields+20]=__str10;
HEAP[_profiler_entry_fields+24]=__str11;
HEAP[_profiler_entry_fields+28]=__str12;
HEAP[_profiler_entry_fields+32]=__str13;
HEAP[_profiler_entry_fields+36]=__str14;
HEAP[_profiler_entry_fields+40]=__str15;
HEAP[_profiler_entry_fields+44]=__str16;
HEAP[_profiler_subentry_fields]=__str5;
HEAP[_profiler_subentry_fields+4]=__str17;
HEAP[_profiler_subentry_fields+8]=__str7;
HEAP[_profiler_subentry_fields+12]=__str18;
HEAP[_profiler_subentry_fields+16]=__str9;
HEAP[_profiler_subentry_fields+20]=__str19;
HEAP[_profiler_subentry_fields+24]=__str11;
HEAP[_profiler_subentry_fields+28]=__str20;
HEAP[_profiler_subentry_fields+32]=__str13;
HEAP[_profiler_subentry_fields+36]=__str21;
HEAP[_profiler_entry_desc]=__str22;
HEAP[_profiler_entry_desc+8]=_profiler_entry_fields;
HEAP[_profiler_subentry_desc]=__str23;
HEAP[_profiler_subentry_desc+8]=_profiler_subentry_fields;
HEAP[_kwlist_9138]=__str27;
HEAP[_kwlist_9138+4]=__str28;
HEAP[_kwlist_9228]=__str30;
HEAP[_kwlist_9228+4]=__str31;
HEAP[_kwlist_9228+8]=__str27;
HEAP[_kwlist_9228+12]=__str28;
HEAP[_profiler_methods]=__str32;
HEAP[_profiler_methods+4]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_profiler_methods+12]=_getstats_doc;
HEAP[_profiler_methods+16]=__str33;
HEAP[_profiler_methods+20]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_profiler_methods+28]=_enable_doc;
HEAP[_profiler_methods+32]=__str34;
HEAP[_profiler_methods+36]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_profiler_methods+44]=_disable_doc;
HEAP[_profiler_methods+48]=__str35;
HEAP[_profiler_methods+52]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_profiler_methods+60]=_clear_doc;
HEAP[_PyProfiler_Type+12]=__str36;
HEAP[_PyProfiler_Type+24]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_PyProfiler_Type+88]=_profiler_doc;
HEAP[_PyProfiler_Type+116]=_profiler_methods;
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

