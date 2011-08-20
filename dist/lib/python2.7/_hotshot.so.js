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
var __Py_NoneStruct;
var _logreader_fileno__doc__;
var _PyExc_ValueError;
var __str;
var _PyExc_EOFError;
var __str1;
var __str2;
var __str3;
var _PyExc_IndexError;
var __str4;
var _PyExc_IOError;
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
var _PyCode_Type;
var _PyDict_Type;
var _PyExc_TypeError;
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
var __Py_TrueStruct;
var __Py_ZeroStruct;
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
var _PyExc_RuntimeError;
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
var _PyType_Type;
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
  

  function _logreader_tp_iternext($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr_i;
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
        $self_addr_i=$102;
        var $103=$self_addr_i; //@line 379 "_hotshot.c"
        var $104=$103+12; //@line 379 "_hotshot.c"
        var $105=HEAP[$104]; //@line 379 "_hotshot.c"
        var $106=_fclose($105); //@line 379 "_hotshot.c"
        var $107=$self_addr_i; //@line 380 "_hotshot.c"
        var $108=$107+12; //@line 380 "_hotshot.c"
        HEAP[$108]=0; //@line 380 "_hotshot.c"
        var $109=HEAP[_PyExc_EOFError]; //@line 381 "_hotshot.c"
        _PyErr_SetString($109, __str1); //@line 381 "_hotshot.c"
        __label__ = 43; break; //@line 481 "_hotshot.c"
      case 34: // $bb36
        var $110=$err; //@line 483 "_hotshot.c"
        var $111=($110)==0; //@line 483 "_hotshot.c"
        if ($111) { __label__ = 35; break; } else { __label__ = 43; break; } //@line 483 "_hotshot.c"
      case 35: // $bb37
        var $112=_PyTuple_New(4); //@line 484 "_hotshot.c"
        $result=$112; //@line 484 "_hotshot.c"
        var $113=$result; //@line 485 "_hotshot.c"
        var $114=($113)==0; //@line 485 "_hotshot.c"
        if ($114) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 485 "_hotshot.c"
      case 36: // $bb38
        $0=0; //@line 486 "_hotshot.c"
        __label__ = 44; break; //@line 486 "_hotshot.c"
      case 37: // $bb39
        var $115=$result; //@line 487 "_hotshot.c"
        var $116=$115; //@line 487 "_hotshot.c"
        var $117=$what; //@line 487 "_hotshot.c"
        var $118=_PyInt_FromLong($117); //@line 487 "_hotshot.c"
        var $119=$116+12; //@line 487 "_hotshot.c"
        var $120=$119; //@line 487 "_hotshot.c"
        HEAP[$120]=$118; //@line 487 "_hotshot.c"
        var $121=$result; //@line 488 "_hotshot.c"
        var $122=$121; //@line 488 "_hotshot.c"
        var $123=HEAP[$fileno]; //@line 488 "_hotshot.c"
        var $124=_PyInt_FromLong($123); //@line 488 "_hotshot.c"
        var $125=$122+12; //@line 488 "_hotshot.c"
        var $126=$125+8; //@line 488 "_hotshot.c"
        HEAP[$126]=$124; //@line 488 "_hotshot.c"
        var $127=HEAP[$s1]; //@line 489 "_hotshot.c"
        var $128=($127)==0; //@line 489 "_hotshot.c"
        var $129=$result; //@line 490 "_hotshot.c"
        var $130=$129; //@line 490 "_hotshot.c"
        if ($128) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 489 "_hotshot.c"
      case 38: // $bb40
        var $131=HEAP[$tdelta]; //@line 490 "_hotshot.c"
        var $132=_PyInt_FromLong($131); //@line 490 "_hotshot.c"
        var $133=$130+12; //@line 490 "_hotshot.c"
        var $134=$133+4; //@line 490 "_hotshot.c"
        HEAP[$134]=$132; //@line 490 "_hotshot.c"
        __label__ = 40; break; //@line 490 "_hotshot.c"
      case 39: // $bb41
        var $135=HEAP[$s1]; //@line 492 "_hotshot.c"
        var $136=$130+12; //@line 492 "_hotshot.c"
        var $137=$136+4; //@line 492 "_hotshot.c"
        HEAP[$137]=$135; //@line 492 "_hotshot.c"
        __label__ = 40; break; //@line 492 "_hotshot.c"
      case 40: // $bb42
        var $138=$s2; //@line 493 "_hotshot.c"
        var $139=($138)==0; //@line 493 "_hotshot.c"
        var $140=$result; //@line 494 "_hotshot.c"
        var $141=$140; //@line 494 "_hotshot.c"
        if ($139) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 493 "_hotshot.c"
      case 41: // $bb43
        var $142=HEAP[$lineno]; //@line 494 "_hotshot.c"
        var $143=_PyInt_FromLong($142); //@line 494 "_hotshot.c"
        var $144=$141+12; //@line 494 "_hotshot.c"
        var $145=$144+12; //@line 494 "_hotshot.c"
        HEAP[$145]=$143; //@line 494 "_hotshot.c"
        __label__ = 43; break; //@line 494 "_hotshot.c"
      case 42: // $bb44
        var $146=$141+12; //@line 496 "_hotshot.c"
        var $147=$146+12; //@line 496 "_hotshot.c"
        var $148=$s2; //@line 496 "_hotshot.c"
        HEAP[$147]=$148; //@line 496 "_hotshot.c"
        __label__ = 43; break; //@line 496 "_hotshot.c"
      case 43: // $bb45
        var $149=$result; //@line 525 "_hotshot.c"
        $0=$149; //@line 525 "_hotshot.c"
        __label__ = 44; break; //@line 525 "_hotshot.c"
      case 44: // $bb46
        var $150=$0; //@line 403 "_hotshot.c"
        $retval=$150; //@line 403 "_hotshot.c"
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
        var $self_addr_i1;
        var $self_addr_i;
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
        if ($15) { __label__ = 9; break; } else { __label__ = 1; break; } //@line 558 "_hotshot.c"
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
        if ($36) { __label__ = 2; break; } else { __label__ = 10; break; } //@line 564 "_hotshot.c"
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
        $self_addr_i=$44;
        var $45=$self_addr_i; //@line 976 "_hotshot.c"
        var $46=$45+10276; //@line 976 "_hotshot.c"
        var $47=HEAP[$46]; //@line 976 "_hotshot.c"
        var $48=($47)!=0; //@line 976 "_hotshot.c"
        if ($48) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 976 "_hotshot.c"
      case 3: // $bb_i
        var $49=$self_addr_i; //@line 977 "_hotshot.c"
        var $50=$49+10276; //@line 977 "_hotshot.c"
        HEAP[$50]=0; //@line 977 "_hotshot.c"
        var $51=$self_addr_i; //@line 978 "_hotshot.c"
        var $52=$51+10264; //@line 978 "_hotshot.c"
        var $53=HEAP[$52]; //@line 978 "_hotshot.c"
        var $54=($53)!=0; //@line 978 "_hotshot.c"
        if ($54) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 978 "_hotshot.c"
      case 4: // $bb1_i
        _PyEval_SetTrace(0, 0); //@line 979 "_hotshot.c"
        __label__ = 6; break; //@line 979 "_hotshot.c"
      case 5: // $bb2_i
        _PyEval_SetProfile(0, 0); //@line 981 "_hotshot.c"
        __label__ = 6; break; //@line 981 "_hotshot.c"
      case 6: // $bb3_i
        var $55=$self_addr_i; //@line 983 "_hotshot.c"
        var $56=$55+16; //@line 983 "_hotshot.c"
        var $57=HEAP[$56]; //@line 983 "_hotshot.c"
        var $58=($57) > 0; //@line 983 "_hotshot.c"
        if ($58) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 983 "_hotshot.c"
      case 7: // $bb4_i
        var $59=$self_addr_i; //@line 985 "_hotshot.c"
        var $60=_flush_data($59); //@line 985 "_hotshot.c"
        __label__ = 8; break; //@line 985 "_hotshot.c"
      case 8: // $do_stop_exit
        $0=-1; //@line 568 "_hotshot.c"
        __label__ = 19; break; //@line 568 "_hotshot.c"
      case 9: // $bb3
        HEAP[$17]=0; //@line 559 "_hotshot.c"
        var $_pr=$written;
        var $61=($_pr)!=0; //@line 571 "_hotshot.c"
        if ($61) { __label__ = 10; break; } else { __label__ = 18; break; } //@line 571 "_hotshot.c"
      case 10: // $bb4
        var $62=$self_addr; //@line 572 "_hotshot.c"
        var $63=$62+10260; //@line 572 "_hotshot.c"
        var $64=HEAP[$63]; //@line 572 "_hotshot.c"
        var $65=_fflush($64); //@line 572 "_hotshot.c"
        var $66=($65)!=0; //@line 572 "_hotshot.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 18; break; } //@line 572 "_hotshot.c"
      case 11: // $bb5
        var $67=$self_addr; //@line 573 "_hotshot.c"
        var $68=$67+12; //@line 573 "_hotshot.c"
        var $69=HEAP[$68]; //@line 573 "_hotshot.c"
        var $70=_PyString_AsString($69); //@line 573 "_hotshot.c"
        $s6=$70; //@line 573 "_hotshot.c"
        var $71=HEAP[_PyExc_IOError]; //@line 574 "_hotshot.c"
        var $72=$s6; //@line 574 "_hotshot.c"
        var $73=_PyErr_SetFromErrnoWithFilename($71, $72); //@line 574 "_hotshot.c"
        var $74=$self_addr; //@line 575 "_hotshot.c"
        $self_addr_i1=$74;
        var $75=$self_addr_i1; //@line 976 "_hotshot.c"
        var $76=$75+10276; //@line 976 "_hotshot.c"
        var $77=HEAP[$76]; //@line 976 "_hotshot.c"
        var $78=($77)!=0; //@line 976 "_hotshot.c"
        if ($78) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 976 "_hotshot.c"
      case 12: // $bb_i2
        var $79=$self_addr_i1; //@line 977 "_hotshot.c"
        var $80=$79+10276; //@line 977 "_hotshot.c"
        HEAP[$80]=0; //@line 977 "_hotshot.c"
        var $81=$self_addr_i1; //@line 978 "_hotshot.c"
        var $82=$81+10264; //@line 978 "_hotshot.c"
        var $83=HEAP[$82]; //@line 978 "_hotshot.c"
        var $84=($83)!=0; //@line 978 "_hotshot.c"
        if ($84) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 978 "_hotshot.c"
      case 13: // $bb1_i3
        _PyEval_SetTrace(0, 0); //@line 979 "_hotshot.c"
        __label__ = 15; break; //@line 979 "_hotshot.c"
      case 14: // $bb2_i4
        _PyEval_SetProfile(0, 0); //@line 981 "_hotshot.c"
        __label__ = 15; break; //@line 981 "_hotshot.c"
      case 15: // $bb3_i5
        var $85=$self_addr_i1; //@line 983 "_hotshot.c"
        var $86=$85+16; //@line 983 "_hotshot.c"
        var $87=HEAP[$86]; //@line 983 "_hotshot.c"
        var $88=($87) > 0; //@line 983 "_hotshot.c"
        if ($88) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 983 "_hotshot.c"
      case 16: // $bb4_i6
        var $89=$self_addr_i1; //@line 985 "_hotshot.c"
        var $90=_flush_data($89); //@line 985 "_hotshot.c"
        __label__ = 17; break; //@line 985 "_hotshot.c"
      case 17: // $do_stop_exit7
        $0=-1; //@line 576 "_hotshot.c"
        __label__ = 19; break; //@line 576 "_hotshot.c"
      case 18: // $bb7
        $0=0; //@line 579 "_hotshot.c"
        __label__ = 19; break; //@line 579 "_hotshot.c"
      case 19: // $bb8
        var $91=$0; //@line 568 "_hotshot.c"
        $retval=$91; //@line 568 "_hotshot.c"
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
        var $self_addr_i;
        var $value_addr_i;
        var $retval_i;
        var $0;
        var $partial_i;
        var $self_addr;
        var $s_addr;
        var $len_addr;
        var $retval;
        var $1;
        $self_addr=$self;
        $s_addr=$s;
        $len_addr=$len;
        var $2=$self_addr; //@line 626 "_hotshot.c"
        var $3=$2+16; //@line 626 "_hotshot.c"
        var $4=HEAP[$3]; //@line 626 "_hotshot.c"
        var $5=$len_addr; //@line 626 "_hotshot.c"
        var $6=($4) + 5; //@line 626 "_hotshot.c"
        var $7=($6) + ($5); //@line 626 "_hotshot.c"
        var $8=($7) > 10239; //@line 626 "_hotshot.c"
        if ($8) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 4; break; } //@line 626 "_hotshot.c"
      case 1: // $bb
        var $9=$self_addr; //@line 627 "_hotshot.c"
        var $10=_flush_data($9); //@line 627 "_hotshot.c"
        var $11=($10) < 0; //@line 627 "_hotshot.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 627 "_hotshot.c"
      case 2: // $bb1
        $1=-1; //@line 628 "_hotshot.c"
        __label__ = 13; break; //@line 628 "_hotshot.c"
      case 3: // $bb2thread_pre_split
        var $_pr=$len_addr;
        __lastLabel__ = 3; __label__ = 4; break;
      case 4: // $bb2
        var $12=__lastLabel__ == 3 ? $_pr : ($5);
        var $13=($12)==2147483647; //@line 630 "_hotshot.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 630 "_hotshot.c"
      case 5: // $bb3
        ___assert_fail(__str5, __str6, 630, ___PRETTY_FUNCTION___8917); //@line 630 "_hotshot.c"
        throw "Reached an unreachable!" //@line 630 "_hotshot.c"
      case 6: // $bb4
        var $14=$self_addr; //@line 631 "_hotshot.c"
        var $15=$len_addr; //@line 631 "_hotshot.c"
        $self_addr_i=$14;
        $value_addr_i=$15;
        __label__ = 7; break; //@line 584 "_hotshot.c"
      case 7: // $bb_i
        var $16=$value_addr_i; //@line 588 "_hotshot.c"
        var $17=((($16)) & 255); //@line 588 "_hotshot.c"
        var $18=($17) & 127; //@line 588 "_hotshot.c"
        $partial_i=$18; //@line 588 "_hotshot.c"
        var $19=$value_addr_i; //@line 589 "_hotshot.c"
        var $20=($19) >> 7; //@line 589 "_hotshot.c"
        $value_addr_i=$20; //@line 589 "_hotshot.c"
        var $21=($20)!=0; //@line 590 "_hotshot.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 590 "_hotshot.c"
      case 8: // $bb1_i
        var $22=$partial_i; //@line 591 "_hotshot.c"
        var $23=($22) | -128; //@line 591 "_hotshot.c"
        $partial_i=$23; //@line 591 "_hotshot.c"
        __label__ = 9; break; //@line 591 "_hotshot.c"
      case 9: // $bb2_i
        var $24=$self_addr_i; //@line 592 "_hotshot.c"
        var $25=$24+16; //@line 592 "_hotshot.c"
        var $26=HEAP[$25]; //@line 592 "_hotshot.c"
        var $27=$self_addr_i; //@line 592 "_hotshot.c"
        var $28=$27+20; //@line 592 "_hotshot.c"
        var $29=$28+$26; //@line 592 "_hotshot.c"
        var $30=$partial_i; //@line 592 "_hotshot.c"
        HEAP[$29]=$30; //@line 592 "_hotshot.c"
        var $31=$self_addr_i; //@line 593 "_hotshot.c"
        var $32=$31+16; //@line 593 "_hotshot.c"
        var $33=HEAP[$32]; //@line 593 "_hotshot.c"
        var $34=($33) + 1; //@line 593 "_hotshot.c"
        var $35=$self_addr_i; //@line 593 "_hotshot.c"
        var $36=$35+16; //@line 593 "_hotshot.c"
        HEAP[$36]=$34; //@line 593 "_hotshot.c"
        var $37=$value_addr_i; //@line 594 "_hotshot.c"
        var $38=($37)!=0; //@line 594 "_hotshot.c"
        if ($38) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 594 "_hotshot.c"
      case 10: // $pack_packed_int_exit
        $0=0; //@line 595 "_hotshot.c"
        var $39=$0; //@line 595 "_hotshot.c"
        $retval_i=$39; //@line 595 "_hotshot.c"
        var $retval4_i=$retval_i; //@line 595 "_hotshot.c"
        var $40=($retval4_i) < 0; //@line 631 "_hotshot.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 631 "_hotshot.c"
      case 11: // $bb5
        $1=-1; //@line 632 "_hotshot.c"
        __label__ = 13; break; //@line 632 "_hotshot.c"
      case 12: // $bb6
        var $41=$len_addr; //@line 633 "_hotshot.c"
        var $42=$self_addr; //@line 633 "_hotshot.c"
        var $43=$42+20; //@line 633 "_hotshot.c"
        var $44=$43; //@line 633 "_hotshot.c"
        var $45=$self_addr; //@line 633 "_hotshot.c"
        var $46=$45+16; //@line 633 "_hotshot.c"
        var $47=HEAP[$46]; //@line 633 "_hotshot.c"
        var $48=$44+$47; //@line 633 "_hotshot.c"
        var $49=$s_addr; //@line 633 "_hotshot.c"
        _llvm_memcpy_p0i8_p0i8_i32($48, $49, $41, 1, 0); //@line 633 "_hotshot.c"
        var $50=$self_addr; //@line 634 "_hotshot.c"
        var $51=$50+16; //@line 634 "_hotshot.c"
        var $52=HEAP[$51]; //@line 634 "_hotshot.c"
        var $53=$len_addr; //@line 634 "_hotshot.c"
        var $54=($53) + ($52); //@line 634 "_hotshot.c"
        var $55=$self_addr; //@line 634 "_hotshot.c"
        var $56=$55+16; //@line 634 "_hotshot.c"
        HEAP[$56]=$54; //@line 634 "_hotshot.c"
        $1=0; //@line 635 "_hotshot.c"
        __label__ = 13; break; //@line 635 "_hotshot.c"
      case 13: // $bb7
        var $57=$1; //@line 628 "_hotshot.c"
        $retval=$57; //@line 628 "_hotshot.c"
        var $retval8=$retval; //@line 628 "_hotshot.c"
        ;
        return $retval8; //@line 628 "_hotshot.c"
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
  

  function _tracer_callback($self, $frame, $what, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr_i76;
        var $lineno_addr_i77;
        var $retval_i78;
        var $0;
        var $self_addr_i_i57;
        var $value_addr_i_i58;
        var $retval_i_i59;
        var $1;
        var $partial_i_i60;
        var $self_addr_i61;
        var $lineno_addr_i62;
        var $tdelta_addr_i63;
        var $retval_i64;
        var $2;
        var $self_addr_i44;
        var $retval_i45;
        var $3;
        var $tdelta_i46;
        var $tv_i47=__stackBase__;
        var $self_addr_i34;
        var $tdelta_addr_i35;
        var $retval_i36;
        var $4;
        var $self_addr_i21;
        var $retval_i22;
        var $5;
        var $tdelta_i23;
        var $tv_i24=__stackBase__+8;
        var $self_addr_i1_i;
        var $value_addr_i2_i;
        var $retval_i3_i;
        var $6;
        var $partial_i4_i;
        var $self_addr_i_i8;
        var $value_addr_i_i;
        var $retval_i_i9;
        var $7;
        var $partial_i_i;
        var $self_addr_i10;
        var $fileno_addr_i;
        var $tdelta_addr_i;
        var $lineno_addr_i;
        var $retval_i11;
        var $8;
        var $self_addr_i1;
        var $retval_i2;
        var $9;
        var $tdelta_i;
        var $tv_i=__stackBase__+16;
        var $self_addr_i1_i_i;
        var $value_addr_i2_i_i;
        var $retval_i3_i_i;
        var $10;
        var $partial_i4_i_i;
        var $self_addr_i_i1_i;
        var $value_addr_i_i2_i;
        var $retval_i_i3_i;
        var $11;
        var $partial_i_i4_i;
        var $self_addr_i5_i;
        var $fileno_addr_i6_i;
        var $lineno_addr_i_i;
        var $funcname_addr_i_i;
        var $retval_i7_i;
        var $12;
        var $len_i8_i;
        var $self_addr_i_i_i;
        var $value_addr_i_i_i;
        var $retval_i_i_i;
        var $13;
        var $partial_i_i_i;
        var $self_addr_i_i;
        var $fileno_addr_i_i;
        var $filename_addr_i_i;
        var $retval_i_i;
        var $14;
        var $len_i_i;
        var $self_addr_i;
        var $fcode_addr_i;
        var $retval_i;
        var $15;
        var $obj_i;
        var $dict_i;
        var $fileno_i;
        var $name_i;
        var $self_addr;
        var $frame_addr;
        var $what_addr;
        var $arg_addr;
        var $retval;
        var $iftmp_44;
        var $16;
        var $fileno;
        $self_addr=$self;
        $frame_addr=$frame;
        $what_addr=$what;
        $arg_addr=$arg;
        var $17=$what_addr; //@line 864 "_hotshot.c"
        if ($17 == 0) {
          __label__ = 1; break;
        }
        else if ($17 == 2) {
          __label__ = 94; break;
        }
        else if ($17 == 3) {
          __label__ = 81; break;
        }
        else {
        __label__ = 117; break;
        }
        
      case 1: // $bb
        var $18=$frame_addr; //@line 866 "_hotshot.c"
        var $19=$18+16; //@line 866 "_hotshot.c"
        var $20=HEAP[$19]; //@line 866 "_hotshot.c"
        var $21=$self_addr; //@line 866 "_hotshot.c"
        $self_addr_i=$21;
        $fcode_addr_i=$20;
        var $22=$fcode_addr_i; //@line 776 "_hotshot.c"
        var $23=$22+48; //@line 776 "_hotshot.c"
        var $24=HEAP[$23]; //@line 776 "_hotshot.c"
        var $25=$self_addr_i; //@line 776 "_hotshot.c"
        var $26=$25+8; //@line 776 "_hotshot.c"
        var $27=HEAP[$26]; //@line 776 "_hotshot.c"
        var $28=_PyDict_GetItem($27, $24); //@line 776 "_hotshot.c"
        $obj_i=$28; //@line 776 "_hotshot.c"
        var $29=$obj_i; //@line 777 "_hotshot.c"
        var $30=($29)==0; //@line 777 "_hotshot.c"
        if ($30) { __label__ = 2; break; } else { __label__ = 24; break; } //@line 777 "_hotshot.c"
      case 2: // $bb_i
        var $31=_PyDict_New(); //@line 779 "_hotshot.c"
        $dict_i=$31; //@line 779 "_hotshot.c"
        var $32=$dict_i; //@line 780 "_hotshot.c"
        var $33=($32)==0; //@line 780 "_hotshot.c"
        if ($33) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 780 "_hotshot.c"
      case 3: // $bb1_i
        $15=-1; //@line 781 "_hotshot.c"
        __label__ = 54; break; //@line 781 "_hotshot.c"
      case 4: // $bb2_i
        var $34=$self_addr_i; //@line 783 "_hotshot.c"
        var $35=$34+10280; //@line 783 "_hotshot.c"
        var $36=HEAP[$35]; //@line 783 "_hotshot.c"
        $fileno_i=$36; //@line 783 "_hotshot.c"
        var $37=$fileno_i; //@line 784 "_hotshot.c"
        var $38=$dict_i; //@line 784 "_hotshot.c"
        var $39=_Py_BuildValue(__str7, $37, $38); //@line 784 "_hotshot.c"
        $obj_i=$39; //@line 784 "_hotshot.c"
        var $40=$obj_i; //@line 785 "_hotshot.c"
        var $41=($40)==0; //@line 785 "_hotshot.c"
        if ($41) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 785 "_hotshot.c"
      case 5: // $bb3_i
        $15=-1; //@line 786 "_hotshot.c"
        __label__ = 54; break; //@line 786 "_hotshot.c"
      case 6: // $bb4_i
        var $42=$fcode_addr_i; //@line 788 "_hotshot.c"
        var $43=$42+48; //@line 788 "_hotshot.c"
        var $44=HEAP[$43]; //@line 788 "_hotshot.c"
        var $45=$self_addr_i; //@line 788 "_hotshot.c"
        var $46=$45+8; //@line 788 "_hotshot.c"
        var $47=HEAP[$46]; //@line 788 "_hotshot.c"
        var $48=$obj_i; //@line 788 "_hotshot.c"
        var $49=_PyDict_SetItem($47, $44, $48); //@line 788 "_hotshot.c"
        var $50=($49)!=0; //@line 788 "_hotshot.c"
        if ($50) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 788 "_hotshot.c"
      case 7: // $bb5_i
        var $51=$obj_i; //@line 789 "_hotshot.c"
        var $52=$51; //@line 789 "_hotshot.c"
        var $53=HEAP[$52]; //@line 789 "_hotshot.c"
        var $54=($53) - 1; //@line 789 "_hotshot.c"
        var $55=$obj_i; //@line 789 "_hotshot.c"
        var $56=$55; //@line 789 "_hotshot.c"
        HEAP[$56]=$54; //@line 789 "_hotshot.c"
        var $57=$obj_i; //@line 789 "_hotshot.c"
        var $58=$57; //@line 789 "_hotshot.c"
        var $59=HEAP[$58]; //@line 789 "_hotshot.c"
        var $60=($59)==0; //@line 789 "_hotshot.c"
        if ($60) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 789 "_hotshot.c"
      case 8: // $bb6_i
        var $61=$obj_i; //@line 789 "_hotshot.c"
        var $62=$61+4; //@line 789 "_hotshot.c"
        var $63=HEAP[$62]; //@line 789 "_hotshot.c"
        var $64=$63+24; //@line 789 "_hotshot.c"
        var $65=HEAP[$64]; //@line 789 "_hotshot.c"
        var $66=$obj_i; //@line 789 "_hotshot.c"
        FUNCTION_TABLE[$65]($66); //@line 789 "_hotshot.c"
        __label__ = 9; break; //@line 789 "_hotshot.c"
      case 9: // $bb7_i
        $15=-1; //@line 790 "_hotshot.c"
        __label__ = 54; break; //@line 790 "_hotshot.c"
      case 10: // $bb8_i
        var $67=$self_addr_i; //@line 792 "_hotshot.c"
        var $68=$67+10280; //@line 792 "_hotshot.c"
        var $69=HEAP[$68]; //@line 792 "_hotshot.c"
        var $70=($69) + 1; //@line 792 "_hotshot.c"
        var $71=$self_addr_i; //@line 792 "_hotshot.c"
        var $72=$71+10280; //@line 792 "_hotshot.c"
        HEAP[$72]=$70; //@line 792 "_hotshot.c"
        var $73=$obj_i; //@line 793 "_hotshot.c"
        var $74=$73; //@line 793 "_hotshot.c"
        var $75=HEAP[$74]; //@line 793 "_hotshot.c"
        var $76=($75) - 1; //@line 793 "_hotshot.c"
        var $77=$obj_i; //@line 793 "_hotshot.c"
        var $78=$77; //@line 793 "_hotshot.c"
        HEAP[$78]=$76; //@line 793 "_hotshot.c"
        var $79=$obj_i; //@line 793 "_hotshot.c"
        var $80=$79; //@line 793 "_hotshot.c"
        var $81=HEAP[$80]; //@line 793 "_hotshot.c"
        var $82=($81)==0; //@line 793 "_hotshot.c"
        if ($82) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 793 "_hotshot.c"
      case 11: // $bb9_i
        var $83=$obj_i; //@line 793 "_hotshot.c"
        var $84=$83+4; //@line 793 "_hotshot.c"
        var $85=HEAP[$84]; //@line 793 "_hotshot.c"
        var $86=$85+24; //@line 793 "_hotshot.c"
        var $87=HEAP[$86]; //@line 793 "_hotshot.c"
        var $88=$obj_i; //@line 793 "_hotshot.c"
        FUNCTION_TABLE[$87]($88); //@line 793 "_hotshot.c"
        __label__ = 12; break; //@line 793 "_hotshot.c"
      case 12: // $bb10_i
        var $89=$fcode_addr_i; //@line 794 "_hotshot.c"
        var $90=$89+48; //@line 794 "_hotshot.c"
        var $91=HEAP[$90]; //@line 794 "_hotshot.c"
        var $92=$91; //@line 794 "_hotshot.c"
        var $93=$92+20; //@line 794 "_hotshot.c"
        var $94=$93; //@line 794 "_hotshot.c"
        var $95=$self_addr_i; //@line 794 "_hotshot.c"
        var $96=$fileno_i; //@line 794 "_hotshot.c"
        $self_addr_i_i=$95;
        $fileno_addr_i_i=$96;
        $filename_addr_i_i=$94;
        var $97=$filename_addr_i_i; //@line 658 "_hotshot.c"
        var $98=_strlen($97); //@line 658 "_hotshot.c"
        $len_i_i=$98; //@line 658 "_hotshot.c"
        var $99=$self_addr_i_i; //@line 660 "_hotshot.c"
        var $100=$99+16; //@line 660 "_hotshot.c"
        var $101=HEAP[$100]; //@line 660 "_hotshot.c"
        var $102=$len_i_i; //@line 660 "_hotshot.c"
        var $103=($101) + 11; //@line 660 "_hotshot.c"
        var $104=($103) + ($102); //@line 660 "_hotshot.c"
        var $105=($104) > 10239; //@line 660 "_hotshot.c"
        if ($105) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 660 "_hotshot.c"
      case 13: // $bb_i_i
        var $106=$self_addr_i_i; //@line 661 "_hotshot.c"
        var $107=_flush_data($106); //@line 661 "_hotshot.c"
        var $108=($107) < 0; //@line 661 "_hotshot.c"
        if ($108) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 661 "_hotshot.c"
      case 14: // $bb1_i_i
        $14=-1; //@line 662 "_hotshot.c"
        __label__ = 21; break; //@line 662 "_hotshot.c"
      case 15: // $bb2_i_i
        var $109=$self_addr_i_i; //@line 664 "_hotshot.c"
        var $110=$109+16; //@line 664 "_hotshot.c"
        var $111=HEAP[$110]; //@line 664 "_hotshot.c"
        var $112=$self_addr_i_i; //@line 664 "_hotshot.c"
        var $113=$112+20; //@line 664 "_hotshot.c"
        var $114=$113+$111; //@line 664 "_hotshot.c"
        HEAP[$114]=35; //@line 664 "_hotshot.c"
        var $115=$self_addr_i_i; //@line 665 "_hotshot.c"
        var $116=$115+16; //@line 665 "_hotshot.c"
        var $117=HEAP[$116]; //@line 665 "_hotshot.c"
        var $118=($117) + 1; //@line 665 "_hotshot.c"
        var $119=$self_addr_i_i; //@line 665 "_hotshot.c"
        var $120=$119+16; //@line 665 "_hotshot.c"
        HEAP[$120]=$118; //@line 665 "_hotshot.c"
        var $121=$self_addr_i_i; //@line 666 "_hotshot.c"
        var $122=$fileno_addr_i_i; //@line 666 "_hotshot.c"
        $self_addr_i_i_i=$121;
        $value_addr_i_i_i=$122;
        __label__ = 16; break; //@line 584 "_hotshot.c"
      case 16: // $bb_i_i_i
        var $123=$value_addr_i_i_i; //@line 588 "_hotshot.c"
        var $124=((($123)) & 255); //@line 588 "_hotshot.c"
        var $125=($124) & 127; //@line 588 "_hotshot.c"
        $partial_i_i_i=$125; //@line 588 "_hotshot.c"
        var $126=$value_addr_i_i_i; //@line 589 "_hotshot.c"
        var $127=($126) >> 7; //@line 589 "_hotshot.c"
        $value_addr_i_i_i=$127; //@line 589 "_hotshot.c"
        var $128=($127)!=0; //@line 590 "_hotshot.c"
        if ($128) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 590 "_hotshot.c"
      case 17: // $bb1_i_i_i
        var $129=$partial_i_i_i; //@line 591 "_hotshot.c"
        var $130=($129) | -128; //@line 591 "_hotshot.c"
        $partial_i_i_i=$130; //@line 591 "_hotshot.c"
        __label__ = 18; break; //@line 591 "_hotshot.c"
      case 18: // $bb2_i_i_i
        var $131=$self_addr_i_i_i; //@line 592 "_hotshot.c"
        var $132=$131+16; //@line 592 "_hotshot.c"
        var $133=HEAP[$132]; //@line 592 "_hotshot.c"
        var $134=$self_addr_i_i_i; //@line 592 "_hotshot.c"
        var $135=$134+20; //@line 592 "_hotshot.c"
        var $136=$135+$133; //@line 592 "_hotshot.c"
        var $137=$partial_i_i_i; //@line 592 "_hotshot.c"
        HEAP[$136]=$137; //@line 592 "_hotshot.c"
        var $138=$self_addr_i_i_i; //@line 593 "_hotshot.c"
        var $139=$138+16; //@line 593 "_hotshot.c"
        var $140=HEAP[$139]; //@line 593 "_hotshot.c"
        var $141=($140) + 1; //@line 593 "_hotshot.c"
        var $142=$self_addr_i_i_i; //@line 593 "_hotshot.c"
        var $143=$142+16; //@line 593 "_hotshot.c"
        HEAP[$143]=$141; //@line 593 "_hotshot.c"
        var $144=$value_addr_i_i_i; //@line 594 "_hotshot.c"
        var $145=($144)!=0; //@line 594 "_hotshot.c"
        if ($145) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 594 "_hotshot.c"
      case 19: // $pack_packed_int_exit_i_i
        $13=0; //@line 595 "_hotshot.c"
        var $146=$13; //@line 595 "_hotshot.c"
        $retval_i_i_i=$146; //@line 595 "_hotshot.c"
        var $retval4_i_i_i=$retval_i_i_i; //@line 595 "_hotshot.c"
        var $147=($retval4_i_i_i) < 0; //@line 666 "_hotshot.c"
        if ($147) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 666 "_hotshot.c"
      case 20: // $bb3_i_i
        $14=-1; //@line 667 "_hotshot.c"
        __label__ = 21; break; //@line 667 "_hotshot.c"
      case 21: // $pack_define_file_exit_thread_i
        $retval_i_i=-1; //@line 662 "_hotshot.c"
        __label__ = 23; break;
      case 22: // $pack_define_file_exit_i
        var $148=$self_addr_i_i; //@line 668 "_hotshot.c"
        var $149=$filename_addr_i_i; //@line 668 "_hotshot.c"
        var $150=$len_i_i; //@line 668 "_hotshot.c"
        var $151=_pack_string($148, $149, $150); //@line 668 "_hotshot.c"
        $14=$151; //@line 668 "_hotshot.c"
        $retval_i_i=$151; //@line 662 "_hotshot.c"
        var $152=($151) < 0; //@line 794 "_hotshot.c"
        if ($152) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 794 "_hotshot.c"
      case 23: // $bb11_i
        $15=-1; //@line 796 "_hotshot.c"
        __label__ = 54; break; //@line 796 "_hotshot.c"
      case 24: // $bb13_i
        var $153=$obj_i; //@line 800 "_hotshot.c"
        var $154=$153; //@line 800 "_hotshot.c"
        var $155=$154+12; //@line 800 "_hotshot.c"
        var $156=$155; //@line 800 "_hotshot.c"
        var $157=HEAP[$156]; //@line 800 "_hotshot.c"
        var $158=$157; //@line 800 "_hotshot.c"
        var $159=$158+8; //@line 800 "_hotshot.c"
        var $160=HEAP[$159]; //@line 800 "_hotshot.c"
        $fileno_i=$160; //@line 800 "_hotshot.c"
        var $161=$obj_i; //@line 801 "_hotshot.c"
        var $162=$161; //@line 801 "_hotshot.c"
        var $163=$162+12; //@line 801 "_hotshot.c"
        var $164=$163+4; //@line 801 "_hotshot.c"
        var $165=HEAP[$164]; //@line 801 "_hotshot.c"
        $dict_i=$165; //@line 801 "_hotshot.c"
        __label__ = 25; break; //@line 801 "_hotshot.c"
      case 25: // $bb14_i
        var $166=$fcode_addr_i; //@line 804 "_hotshot.c"
        var $167=$166+56; //@line 804 "_hotshot.c"
        var $168=HEAP[$167]; //@line 804 "_hotshot.c"
        var $169=_PyInt_FromLong($168); //@line 804 "_hotshot.c"
        $obj_i=$169; //@line 804 "_hotshot.c"
        var $170=($169)==0; //@line 805 "_hotshot.c"
        if ($170) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 805 "_hotshot.c"
      case 26: // $bb15_i
        _PyErr_Clear(); //@line 807 "_hotshot.c"
        __label__ = 55; break; //@line 807 "_hotshot.c"
      case 27: // $bb16_i
        var $171=$dict_i; //@line 810 "_hotshot.c"
        var $172=$obj_i; //@line 810 "_hotshot.c"
        var $173=_PyDict_GetItem($171, $172); //@line 810 "_hotshot.c"
        $name_i=$173; //@line 810 "_hotshot.c"
        var $174=$name_i; //@line 811 "_hotshot.c"
        var $175=($174)==0; //@line 811 "_hotshot.c"
        if ($175) { __label__ = 28; break; } else { __label__ = 52; break; } //@line 811 "_hotshot.c"
      case 28: // $bb17_i
        var $176=$fcode_addr_i; //@line 812 "_hotshot.c"
        var $177=$176+52; //@line 812 "_hotshot.c"
        var $178=HEAP[$177]; //@line 812 "_hotshot.c"
        var $179=$178; //@line 812 "_hotshot.c"
        var $180=$179+20; //@line 812 "_hotshot.c"
        var $181=$180; //@line 812 "_hotshot.c"
        var $182=$fcode_addr_i; //@line 812 "_hotshot.c"
        var $183=$182+56; //@line 812 "_hotshot.c"
        var $184=HEAP[$183]; //@line 812 "_hotshot.c"
        var $185=$self_addr_i; //@line 812 "_hotshot.c"
        var $186=$fileno_i; //@line 812 "_hotshot.c"
        $self_addr_i5_i=$185;
        $fileno_addr_i6_i=$186;
        $lineno_addr_i_i=$184;
        $funcname_addr_i_i=$181;
        var $187=$funcname_addr_i_i; //@line 675 "_hotshot.c"
        var $188=_strlen($187); //@line 675 "_hotshot.c"
        $len_i8_i=$188; //@line 675 "_hotshot.c"
        var $189=$self_addr_i5_i; //@line 677 "_hotshot.c"
        var $190=$189+16; //@line 677 "_hotshot.c"
        var $191=HEAP[$190]; //@line 677 "_hotshot.c"
        var $192=$len_i8_i; //@line 677 "_hotshot.c"
        var $193=($191) + 16; //@line 677 "_hotshot.c"
        var $194=($193) + ($192); //@line 677 "_hotshot.c"
        var $195=($194) > 10239; //@line 677 "_hotshot.c"
        if ($195) { __label__ = 29; break; } else { __label__ = 31; break; } //@line 677 "_hotshot.c"
      case 29: // $bb_i9_i
        var $196=$self_addr_i5_i; //@line 678 "_hotshot.c"
        var $197=_flush_data($196); //@line 678 "_hotshot.c"
        var $198=($197) < 0; //@line 678 "_hotshot.c"
        if ($198) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 678 "_hotshot.c"
      case 30: // $bb1_i10_i
        $12=-1; //@line 679 "_hotshot.c"
        __label__ = 43; break; //@line 679 "_hotshot.c"
      case 31: // $bb2_i11_i
        var $199=$self_addr_i5_i; //@line 681 "_hotshot.c"
        var $200=$199+16; //@line 681 "_hotshot.c"
        var $201=HEAP[$200]; //@line 681 "_hotshot.c"
        var $202=$self_addr_i5_i; //@line 681 "_hotshot.c"
        var $203=$202+20; //@line 681 "_hotshot.c"
        var $204=$203+$201; //@line 681 "_hotshot.c"
        HEAP[$204]=67; //@line 681 "_hotshot.c"
        var $205=$self_addr_i5_i; //@line 682 "_hotshot.c"
        var $206=$205+16; //@line 682 "_hotshot.c"
        var $207=HEAP[$206]; //@line 682 "_hotshot.c"
        var $208=($207) + 1; //@line 682 "_hotshot.c"
        var $209=$self_addr_i5_i; //@line 682 "_hotshot.c"
        var $210=$209+16; //@line 682 "_hotshot.c"
        HEAP[$210]=$208; //@line 682 "_hotshot.c"
        var $211=$self_addr_i5_i; //@line 683 "_hotshot.c"
        var $212=$fileno_addr_i6_i; //@line 683 "_hotshot.c"
        $self_addr_i_i1_i=$211;
        $value_addr_i_i2_i=$212;
        __label__ = 32; break; //@line 584 "_hotshot.c"
      case 32: // $bb_i_i12_i
        var $213=$value_addr_i_i2_i; //@line 588 "_hotshot.c"
        var $214=((($213)) & 255); //@line 588 "_hotshot.c"
        var $215=($214) & 127; //@line 588 "_hotshot.c"
        $partial_i_i4_i=$215; //@line 588 "_hotshot.c"
        var $216=$value_addr_i_i2_i; //@line 589 "_hotshot.c"
        var $217=($216) >> 7; //@line 589 "_hotshot.c"
        $value_addr_i_i2_i=$217; //@line 589 "_hotshot.c"
        var $218=($217)!=0; //@line 590 "_hotshot.c"
        if ($218) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 590 "_hotshot.c"
      case 33: // $bb1_i_i13_i
        var $219=$partial_i_i4_i; //@line 591 "_hotshot.c"
        var $220=($219) | -128; //@line 591 "_hotshot.c"
        $partial_i_i4_i=$220; //@line 591 "_hotshot.c"
        __label__ = 34; break; //@line 591 "_hotshot.c"
      case 34: // $bb2_i_i14_i
        var $221=$self_addr_i_i1_i; //@line 592 "_hotshot.c"
        var $222=$221+16; //@line 592 "_hotshot.c"
        var $223=HEAP[$222]; //@line 592 "_hotshot.c"
        var $224=$self_addr_i_i1_i; //@line 592 "_hotshot.c"
        var $225=$224+20; //@line 592 "_hotshot.c"
        var $226=$225+$223; //@line 592 "_hotshot.c"
        var $227=$partial_i_i4_i; //@line 592 "_hotshot.c"
        HEAP[$226]=$227; //@line 592 "_hotshot.c"
        var $228=$self_addr_i_i1_i; //@line 593 "_hotshot.c"
        var $229=$228+16; //@line 593 "_hotshot.c"
        var $230=HEAP[$229]; //@line 593 "_hotshot.c"
        var $231=($230) + 1; //@line 593 "_hotshot.c"
        var $232=$self_addr_i_i1_i; //@line 593 "_hotshot.c"
        var $233=$232+16; //@line 593 "_hotshot.c"
        HEAP[$233]=$231; //@line 593 "_hotshot.c"
        var $234=$value_addr_i_i2_i; //@line 594 "_hotshot.c"
        var $235=($234)!=0; //@line 594 "_hotshot.c"
        if ($235) { __label__ = 32; break; } else { __label__ = 35; break; } //@line 594 "_hotshot.c"
      case 35: // $pack_packed_int_exit_i16_i
        $11=0; //@line 595 "_hotshot.c"
        var $236=$11; //@line 595 "_hotshot.c"
        $retval_i_i3_i=$236; //@line 595 "_hotshot.c"
        var $retval4_i_i15_i=$retval_i_i3_i; //@line 595 "_hotshot.c"
        var $237=($retval4_i_i15_i) < 0; //@line 683 "_hotshot.c"
        if ($237) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 683 "_hotshot.c"
      case 36: // $bb3_i17_i
        $12=-1; //@line 684 "_hotshot.c"
        __label__ = 43; break; //@line 684 "_hotshot.c"
      case 37: // $bb4_i18_i
        var $238=$self_addr_i5_i; //@line 685 "_hotshot.c"
        var $239=$lineno_addr_i_i; //@line 685 "_hotshot.c"
        $self_addr_i1_i_i=$238;
        $value_addr_i2_i_i=$239;
        __label__ = 38; break; //@line 584 "_hotshot.c"
      case 38: // $bb_i5_i_i
        var $240=$value_addr_i2_i_i; //@line 588 "_hotshot.c"
        var $241=((($240)) & 255); //@line 588 "_hotshot.c"
        var $242=($241) & 127; //@line 588 "_hotshot.c"
        $partial_i4_i_i=$242; //@line 588 "_hotshot.c"
        var $243=$value_addr_i2_i_i; //@line 589 "_hotshot.c"
        var $244=($243) >> 7; //@line 589 "_hotshot.c"
        $value_addr_i2_i_i=$244; //@line 589 "_hotshot.c"
        var $245=($244)!=0; //@line 590 "_hotshot.c"
        if ($245) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 590 "_hotshot.c"
      case 39: // $bb1_i6_i_i
        var $246=$partial_i4_i_i; //@line 591 "_hotshot.c"
        var $247=($246) | -128; //@line 591 "_hotshot.c"
        $partial_i4_i_i=$247; //@line 591 "_hotshot.c"
        __label__ = 40; break; //@line 591 "_hotshot.c"
      case 40: // $bb2_i7_i_i
        var $248=$self_addr_i1_i_i; //@line 592 "_hotshot.c"
        var $249=$248+16; //@line 592 "_hotshot.c"
        var $250=HEAP[$249]; //@line 592 "_hotshot.c"
        var $251=$self_addr_i1_i_i; //@line 592 "_hotshot.c"
        var $252=$251+20; //@line 592 "_hotshot.c"
        var $253=$252+$250; //@line 592 "_hotshot.c"
        var $254=$partial_i4_i_i; //@line 592 "_hotshot.c"
        HEAP[$253]=$254; //@line 592 "_hotshot.c"
        var $255=$self_addr_i1_i_i; //@line 593 "_hotshot.c"
        var $256=$255+16; //@line 593 "_hotshot.c"
        var $257=HEAP[$256]; //@line 593 "_hotshot.c"
        var $258=($257) + 1; //@line 593 "_hotshot.c"
        var $259=$self_addr_i1_i_i; //@line 593 "_hotshot.c"
        var $260=$259+16; //@line 593 "_hotshot.c"
        HEAP[$260]=$258; //@line 593 "_hotshot.c"
        var $261=$value_addr_i2_i_i; //@line 594 "_hotshot.c"
        var $262=($261)!=0; //@line 594 "_hotshot.c"
        if ($262) { __label__ = 38; break; } else { __label__ = 41; break; } //@line 594 "_hotshot.c"
      case 41: // $pack_packed_int_exit9_i_i
        $10=0; //@line 595 "_hotshot.c"
        var $263=$10; //@line 595 "_hotshot.c"
        $retval_i3_i_i=$263; //@line 595 "_hotshot.c"
        var $retval4_i8_i_i=$retval_i3_i_i; //@line 595 "_hotshot.c"
        var $264=($retval4_i8_i_i) < 0; //@line 685 "_hotshot.c"
        if ($264) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 685 "_hotshot.c"
      case 42: // $bb5_i_i
        $12=-1; //@line 686 "_hotshot.c"
        __label__ = 43; break; //@line 686 "_hotshot.c"
      case 43: // $pack_define_func_exit_thread_i
        $retval_i7_i=-1; //@line 679 "_hotshot.c"
        __label__ = 45; break;
      case 44: // $pack_define_func_exit_i
        var $265=$self_addr_i5_i; //@line 687 "_hotshot.c"
        var $266=$funcname_addr_i_i; //@line 687 "_hotshot.c"
        var $267=$len_i8_i; //@line 687 "_hotshot.c"
        var $268=_pack_string($265, $266, $267); //@line 687 "_hotshot.c"
        $12=$268; //@line 687 "_hotshot.c"
        $retval_i7_i=$268; //@line 679 "_hotshot.c"
        var $269=($268) < 0; //@line 812 "_hotshot.c"
        if ($269) { __label__ = 45; break; } else { __label__ = 48; break; } //@line 812 "_hotshot.c"
      case 45: // $bb18_i
        var $270=$obj_i; //@line 814 "_hotshot.c"
        var $271=$270; //@line 814 "_hotshot.c"
        var $272=HEAP[$271]; //@line 814 "_hotshot.c"
        var $273=($272) - 1; //@line 814 "_hotshot.c"
        var $274=$obj_i; //@line 814 "_hotshot.c"
        var $275=$274; //@line 814 "_hotshot.c"
        HEAP[$275]=$273; //@line 814 "_hotshot.c"
        var $276=$obj_i; //@line 814 "_hotshot.c"
        var $277=$276; //@line 814 "_hotshot.c"
        var $278=HEAP[$277]; //@line 814 "_hotshot.c"
        var $279=($278)==0; //@line 814 "_hotshot.c"
        if ($279) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 814 "_hotshot.c"
      case 46: // $bb19_i
        var $280=$obj_i; //@line 814 "_hotshot.c"
        var $281=$280+4; //@line 814 "_hotshot.c"
        var $282=HEAP[$281]; //@line 814 "_hotshot.c"
        var $283=$282+24; //@line 814 "_hotshot.c"
        var $284=HEAP[$283]; //@line 814 "_hotshot.c"
        var $285=$obj_i; //@line 814 "_hotshot.c"
        FUNCTION_TABLE[$284]($285); //@line 814 "_hotshot.c"
        __label__ = 47; break; //@line 814 "_hotshot.c"
      case 47: // $bb20_i
        $15=-1; //@line 815 "_hotshot.c"
        __label__ = 54; break; //@line 815 "_hotshot.c"
      case 48: // $bb21_i
        var $286=$fcode_addr_i; //@line 817 "_hotshot.c"
        var $287=$286+52; //@line 817 "_hotshot.c"
        var $288=HEAP[$287]; //@line 817 "_hotshot.c"
        var $289=$dict_i; //@line 817 "_hotshot.c"
        var $290=$obj_i; //@line 817 "_hotshot.c"
        var $291=_PyDict_SetItem($289, $290, $288); //@line 817 "_hotshot.c"
        var $292=($291)!=0; //@line 817 "_hotshot.c"
        if ($292) { __label__ = 49; break; } else { __label__ = 52; break; } //@line 817 "_hotshot.c"
      case 49: // $bb22_i
        var $293=$obj_i; //@line 818 "_hotshot.c"
        var $294=$293; //@line 818 "_hotshot.c"
        var $295=HEAP[$294]; //@line 818 "_hotshot.c"
        var $296=($295) - 1; //@line 818 "_hotshot.c"
        var $297=$obj_i; //@line 818 "_hotshot.c"
        var $298=$297; //@line 818 "_hotshot.c"
        HEAP[$298]=$296; //@line 818 "_hotshot.c"
        var $299=$obj_i; //@line 818 "_hotshot.c"
        var $300=$299; //@line 818 "_hotshot.c"
        var $301=HEAP[$300]; //@line 818 "_hotshot.c"
        var $302=($301)==0; //@line 818 "_hotshot.c"
        if ($302) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 818 "_hotshot.c"
      case 50: // $bb23_i
        var $303=$obj_i; //@line 818 "_hotshot.c"
        var $304=$303+4; //@line 818 "_hotshot.c"
        var $305=HEAP[$304]; //@line 818 "_hotshot.c"
        var $306=$305+24; //@line 818 "_hotshot.c"
        var $307=HEAP[$306]; //@line 818 "_hotshot.c"
        var $308=$obj_i; //@line 818 "_hotshot.c"
        FUNCTION_TABLE[$307]($308); //@line 818 "_hotshot.c"
        __label__ = 51; break; //@line 818 "_hotshot.c"
      case 51: // $bb24_i
        $15=-1; //@line 819 "_hotshot.c"
        __label__ = 54; break; //@line 819 "_hotshot.c"
      case 52: // $bb25_i
        var $309=$obj_i; //@line 822 "_hotshot.c"
        var $310=$309; //@line 822 "_hotshot.c"
        var $311=HEAP[$310]; //@line 822 "_hotshot.c"
        var $312=($311) - 1; //@line 822 "_hotshot.c"
        var $313=$obj_i; //@line 822 "_hotshot.c"
        var $314=$313; //@line 822 "_hotshot.c"
        HEAP[$314]=$312; //@line 822 "_hotshot.c"
        var $315=$obj_i; //@line 822 "_hotshot.c"
        var $316=$315; //@line 822 "_hotshot.c"
        var $317=HEAP[$316]; //@line 822 "_hotshot.c"
        var $318=($317)==0; //@line 822 "_hotshot.c"
        if ($318) { __label__ = 53; break; } else { __label__ = 55; break; } //@line 822 "_hotshot.c"
      case 53: // $bb26_i
        var $319=$obj_i; //@line 822 "_hotshot.c"
        var $320=$319+4; //@line 822 "_hotshot.c"
        var $321=HEAP[$320]; //@line 822 "_hotshot.c"
        var $322=$321+24; //@line 822 "_hotshot.c"
        var $323=HEAP[$322]; //@line 822 "_hotshot.c"
        var $324=$obj_i; //@line 822 "_hotshot.c"
        FUNCTION_TABLE[$323]($324); //@line 822 "_hotshot.c"
        __label__ = 55; break; //@line 822 "_hotshot.c"
      case 54: // $get_fileno_exit_thread
        $retval_i=-1; //@line 781 "_hotshot.c"
        $fileno=-1; //@line 866 "_hotshot.c"
        __label__ = 56; break;
      case 55: // $get_fileno_exit
        var $325=$fileno_i; //@line 824 "_hotshot.c"
        $15=$325; //@line 824 "_hotshot.c"
        $retval_i=$325; //@line 781 "_hotshot.c"
        $fileno=$325; //@line 866 "_hotshot.c"
        var $326=($325) < 0; //@line 867 "_hotshot.c"
        if ($326) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 867 "_hotshot.c"
      case 56: // $bb1
        $16=-1; //@line 868 "_hotshot.c"
        __label__ = 118; break; //@line 868 "_hotshot.c"
      case 57: // $bb2
        var $327=$frame_addr; //@line 869 "_hotshot.c"
        var $328=$327+16; //@line 869 "_hotshot.c"
        var $329=HEAP[$328]; //@line 869 "_hotshot.c"
        var $330=$329+56; //@line 869 "_hotshot.c"
        var $331=HEAP[$330]; //@line 869 "_hotshot.c"
        var $332=$self_addr; //@line 869 "_hotshot.c"
        var $333=$332+10272; //@line 869 "_hotshot.c"
        var $334=HEAP[$333]; //@line 869 "_hotshot.c"
        var $335=($334)!=0; //@line 869 "_hotshot.c"
        if ($335) { __label__ = 58; break; } else { __label__ = 65; break; } //@line 869 "_hotshot.c"
      case 58: // $bb3
        var $336=$self_addr; //@line 869 "_hotshot.c"
        $self_addr_i1=$336;
        var $337=_gettimeofday($tv_i, 0); //@line 841 "_hotshot.c"
        var $338=$tv_i+4; //@line 843 "_hotshot.c"
        var $339=HEAP[$338]; //@line 843 "_hotshot.c"
        var $340=$self_addr_i1; //@line 843 "_hotshot.c"
        var $341=$340+10284; //@line 843 "_hotshot.c"
        var $342=$341+4; //@line 843 "_hotshot.c"
        var $343=HEAP[$342]; //@line 843 "_hotshot.c"
        var $344=($339) - ($343); //@line 843 "_hotshot.c"
        $tdelta_i=$344; //@line 843 "_hotshot.c"
        var $345=$tv_i; //@line 844 "_hotshot.c"
        var $346=HEAP[$345]; //@line 844 "_hotshot.c"
        var $347=$self_addr_i1; //@line 844 "_hotshot.c"
        var $348=$347+10284; //@line 844 "_hotshot.c"
        var $349=$348; //@line 844 "_hotshot.c"
        var $350=HEAP[$349]; //@line 844 "_hotshot.c"
        var $351=($346)!=($350); //@line 844 "_hotshot.c"
        if ($351) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 844 "_hotshot.c"
      case 59: // $bb_i3
        var $352=$tv_i; //@line 845 "_hotshot.c"
        var $353=HEAP[$352]; //@line 845 "_hotshot.c"
        var $354=$self_addr_i1; //@line 845 "_hotshot.c"
        var $355=$354+10284; //@line 845 "_hotshot.c"
        var $356=$355; //@line 845 "_hotshot.c"
        var $357=HEAP[$356]; //@line 845 "_hotshot.c"
        var $358=($353) - ($357); //@line 845 "_hotshot.c"
        var $359=($358) * 1000000; //@line 845 "_hotshot.c"
        var $360=$tdelta_i; //@line 845 "_hotshot.c"
        var $361=($359) + ($360); //@line 845 "_hotshot.c"
        $tdelta_i=$361; //@line 845 "_hotshot.c"
        __lastLabel__ = 59; __label__ = 61; break; //@line 845 "_hotshot.c"
      case 60: // $bb1thread_pre_split_i
        var $_pr_i=$tdelta_i;
        __lastLabel__ = 60; __label__ = 61; break;
      case 61: // $bb1_i4
        var $362=__lastLabel__ == 60 ? $_pr_i : ($361);
        var $363=($362) < 0; //@line 848 "_hotshot.c"
        if ($363) { __label__ = 62; break; } else { __label__ = 63; break; } //@line 848 "_hotshot.c"
      case 62: // $bb2_i5
        $9=0; //@line 849 "_hotshot.c"
        __label__ = 64; break; //@line 849 "_hotshot.c"
      case 63: // $bb3_i6
        var $364=$self_addr_i1; //@line 851 "_hotshot.c"
        var $365=$364+10284; //@line 851 "_hotshot.c"
        var $366=$365; //@line 851 "_hotshot.c"
        var $367=$tv_i; //@line 851 "_hotshot.c"
        var $368=HEAP[$367]; //@line 851 "_hotshot.c"
        HEAP[$366]=$368; //@line 851 "_hotshot.c"
        var $369=$365+4; //@line 851 "_hotshot.c"
        var $370=$tv_i+4; //@line 851 "_hotshot.c"
        var $371=HEAP[$370]; //@line 851 "_hotshot.c"
        HEAP[$369]=$371; //@line 851 "_hotshot.c"
        var $372=$tdelta_i; //@line 852 "_hotshot.c"
        $9=$372; //@line 852 "_hotshot.c"
        __label__ = 64; break; //@line 852 "_hotshot.c"
      case 64: // $get_tdelta_exit
        var $373=$9; //@line 849 "_hotshot.c"
        $retval_i2=$373; //@line 849 "_hotshot.c"
        var $retval5_i=$retval_i2; //@line 849 "_hotshot.c"
        $iftmp_44=$retval5_i; //@line 869 "_hotshot.c"
        __label__ = 66; break; //@line 869 "_hotshot.c"
      case 65: // $bb4
        $iftmp_44=-1; //@line 869 "_hotshot.c"
        __label__ = 66; break; //@line 869 "_hotshot.c"
      case 66: // $bb5
        var $374=$self_addr; //@line 869 "_hotshot.c"
        var $375=$fileno; //@line 869 "_hotshot.c"
        var $376=$iftmp_44; //@line 869 "_hotshot.c"
        $self_addr_i10=$374;
        $fileno_addr_i=$375;
        $tdelta_addr_i=$376;
        $lineno_addr_i=$331;
        var $377=$self_addr_i10; //@line 719 "_hotshot.c"
        var $378=$377+16; //@line 719 "_hotshot.c"
        var $379=HEAP[$378]; //@line 719 "_hotshot.c"
        var $380=($379) + 16; //@line 719 "_hotshot.c"
        var $381=($380) > 10239; //@line 719 "_hotshot.c"
        if ($381) { __label__ = 67; break; } else { __label__ = 69; break; } //@line 719 "_hotshot.c"
      case 67: // $bb_i12
        var $382=$self_addr_i10; //@line 720 "_hotshot.c"
        var $383=_flush_data($382); //@line 720 "_hotshot.c"
        var $384=($383) < 0; //@line 720 "_hotshot.c"
        if ($384) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 720 "_hotshot.c"
      case 68: // $bb1_i13
        $8=-1; //@line 721 "_hotshot.c"
        __label__ = 80; break; //@line 721 "_hotshot.c"
      case 69: // $bb2_i14
        var $385=$self_addr_i10; //@line 723 "_hotshot.c"
        var $386=$fileno_addr_i; //@line 723 "_hotshot.c"
        var $387=_pack_modified_packed_int($385, $386, 0); //@line 723 "_hotshot.c"
        var $388=$self_addr_i10; //@line 724 "_hotshot.c"
        var $389=$lineno_addr_i; //@line 724 "_hotshot.c"
        $self_addr_i_i8=$388;
        $value_addr_i_i=$389;
        __label__ = 70; break; //@line 584 "_hotshot.c"
      case 70: // $bb_i_i15
        var $390=$value_addr_i_i; //@line 588 "_hotshot.c"
        var $391=((($390)) & 255); //@line 588 "_hotshot.c"
        var $392=($391) & 127; //@line 588 "_hotshot.c"
        $partial_i_i=$392; //@line 588 "_hotshot.c"
        var $393=$value_addr_i_i; //@line 589 "_hotshot.c"
        var $394=($393) >> 7; //@line 589 "_hotshot.c"
        $value_addr_i_i=$394; //@line 589 "_hotshot.c"
        var $395=($394)!=0; //@line 590 "_hotshot.c"
        if ($395) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 590 "_hotshot.c"
      case 71: // $bb1_i_i16
        var $396=$partial_i_i; //@line 591 "_hotshot.c"
        var $397=($396) | -128; //@line 591 "_hotshot.c"
        $partial_i_i=$397; //@line 591 "_hotshot.c"
        __label__ = 72; break; //@line 591 "_hotshot.c"
      case 72: // $bb2_i_i17
        var $398=$self_addr_i_i8; //@line 592 "_hotshot.c"
        var $399=$398+16; //@line 592 "_hotshot.c"
        var $400=HEAP[$399]; //@line 592 "_hotshot.c"
        var $401=$self_addr_i_i8; //@line 592 "_hotshot.c"
        var $402=$401+20; //@line 592 "_hotshot.c"
        var $403=$402+$400; //@line 592 "_hotshot.c"
        var $404=$partial_i_i; //@line 592 "_hotshot.c"
        HEAP[$403]=$404; //@line 592 "_hotshot.c"
        var $405=$self_addr_i_i8; //@line 593 "_hotshot.c"
        var $406=$405+16; //@line 593 "_hotshot.c"
        var $407=HEAP[$406]; //@line 593 "_hotshot.c"
        var $408=($407) + 1; //@line 593 "_hotshot.c"
        var $409=$self_addr_i_i8; //@line 593 "_hotshot.c"
        var $410=$409+16; //@line 593 "_hotshot.c"
        HEAP[$410]=$408; //@line 593 "_hotshot.c"
        var $411=$value_addr_i_i; //@line 594 "_hotshot.c"
        var $412=($411)!=0; //@line 594 "_hotshot.c"
        if ($412) { __label__ = 70; break; } else { __label__ = 73; break; } //@line 594 "_hotshot.c"
      case 73: // $pack_packed_int_exit_i
        $7=0; //@line 595 "_hotshot.c"
        var $413=$7; //@line 595 "_hotshot.c"
        $retval_i_i9=$413; //@line 595 "_hotshot.c"
        var $414=$self_addr_i10; //@line 725 "_hotshot.c"
        var $415=$414+10272; //@line 725 "_hotshot.c"
        var $416=HEAP[$415]; //@line 725 "_hotshot.c"
        var $417=($416)!=0; //@line 725 "_hotshot.c"
        if ($417) { __label__ = 74; break; } else { __label__ = 79; break; } //@line 725 "_hotshot.c"
      case 74: // $bb3_i18
        var $418=$self_addr_i10; //@line 726 "_hotshot.c"
        var $419=$tdelta_addr_i; //@line 726 "_hotshot.c"
        $self_addr_i1_i=$418;
        $value_addr_i2_i=$419;
        __label__ = 75; break; //@line 584 "_hotshot.c"
      case 75: // $bb_i5_i
        var $420=$value_addr_i2_i; //@line 588 "_hotshot.c"
        var $421=((($420)) & 255); //@line 588 "_hotshot.c"
        var $422=($421) & 127; //@line 588 "_hotshot.c"
        $partial_i4_i=$422; //@line 588 "_hotshot.c"
        var $423=$value_addr_i2_i; //@line 589 "_hotshot.c"
        var $424=($423) >> 7; //@line 589 "_hotshot.c"
        $value_addr_i2_i=$424; //@line 589 "_hotshot.c"
        var $425=($424)!=0; //@line 590 "_hotshot.c"
        if ($425) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 590 "_hotshot.c"
      case 76: // $bb1_i6_i
        var $426=$partial_i4_i; //@line 591 "_hotshot.c"
        var $427=($426) | -128; //@line 591 "_hotshot.c"
        $partial_i4_i=$427; //@line 591 "_hotshot.c"
        __label__ = 77; break; //@line 591 "_hotshot.c"
      case 77: // $bb2_i7_i
        var $428=$self_addr_i1_i; //@line 592 "_hotshot.c"
        var $429=$428+16; //@line 592 "_hotshot.c"
        var $430=HEAP[$429]; //@line 592 "_hotshot.c"
        var $431=$self_addr_i1_i; //@line 592 "_hotshot.c"
        var $432=$431+20; //@line 592 "_hotshot.c"
        var $433=$432+$430; //@line 592 "_hotshot.c"
        var $434=$partial_i4_i; //@line 592 "_hotshot.c"
        HEAP[$433]=$434; //@line 592 "_hotshot.c"
        var $435=$self_addr_i1_i; //@line 593 "_hotshot.c"
        var $436=$435+16; //@line 593 "_hotshot.c"
        var $437=HEAP[$436]; //@line 593 "_hotshot.c"
        var $438=($437) + 1; //@line 593 "_hotshot.c"
        var $439=$self_addr_i1_i; //@line 593 "_hotshot.c"
        var $440=$439+16; //@line 593 "_hotshot.c"
        HEAP[$440]=$438; //@line 593 "_hotshot.c"
        var $441=$value_addr_i2_i; //@line 594 "_hotshot.c"
        var $442=($441)!=0; //@line 594 "_hotshot.c"
        if ($442) { __label__ = 75; break; } else { __label__ = 78; break; } //@line 594 "_hotshot.c"
      case 78: // $pack_packed_int_exit9_i
        $6=0; //@line 595 "_hotshot.c"
        var $443=$6; //@line 595 "_hotshot.c"
        $retval_i3_i=$443; //@line 595 "_hotshot.c"
        var $retval4_i8_i=$retval_i3_i; //@line 595 "_hotshot.c"
        $8=$retval4_i8_i; //@line 726 "_hotshot.c"
        __label__ = 80; break; //@line 726 "_hotshot.c"
      case 79: // $bb4_i19
        $8=0; //@line 728 "_hotshot.c"
        __label__ = 80; break; //@line 728 "_hotshot.c"
      case 80: // $pack_enter_exit
        var $444=$8; //@line 721 "_hotshot.c"
        $retval_i11=$444; //@line 721 "_hotshot.c"
        var $retval6_i=$retval_i11; //@line 721 "_hotshot.c"
        $16=$retval6_i; //@line 869 "_hotshot.c"
        __label__ = 118; break; //@line 869 "_hotshot.c"
      case 81: // $bb6
        var $445=$self_addr; //@line 874 "_hotshot.c"
        $self_addr_i21=$445;
        var $446=_gettimeofday($tv_i24, 0); //@line 841 "_hotshot.c"
        var $447=$tv_i24+4; //@line 843 "_hotshot.c"
        var $448=HEAP[$447]; //@line 843 "_hotshot.c"
        var $449=$self_addr_i21; //@line 843 "_hotshot.c"
        var $450=$449+10284; //@line 843 "_hotshot.c"
        var $451=$450+4; //@line 843 "_hotshot.c"
        var $452=HEAP[$451]; //@line 843 "_hotshot.c"
        var $453=($448) - ($452); //@line 843 "_hotshot.c"
        $tdelta_i23=$453; //@line 843 "_hotshot.c"
        var $454=$tv_i24; //@line 844 "_hotshot.c"
        var $455=HEAP[$454]; //@line 844 "_hotshot.c"
        var $456=$self_addr_i21; //@line 844 "_hotshot.c"
        var $457=$456+10284; //@line 844 "_hotshot.c"
        var $458=$457; //@line 844 "_hotshot.c"
        var $459=HEAP[$458]; //@line 844 "_hotshot.c"
        var $460=($455)!=($459); //@line 844 "_hotshot.c"
        if ($460) { __label__ = 82; break; } else { __label__ = 83; break; } //@line 844 "_hotshot.c"
      case 82: // $bb_i25
        var $461=$tv_i24; //@line 845 "_hotshot.c"
        var $462=HEAP[$461]; //@line 845 "_hotshot.c"
        var $463=$self_addr_i21; //@line 845 "_hotshot.c"
        var $464=$463+10284; //@line 845 "_hotshot.c"
        var $465=$464; //@line 845 "_hotshot.c"
        var $466=HEAP[$465]; //@line 845 "_hotshot.c"
        var $467=($462) - ($466); //@line 845 "_hotshot.c"
        var $468=($467) * 1000000; //@line 845 "_hotshot.c"
        var $469=$tdelta_i23; //@line 845 "_hotshot.c"
        var $470=($468) + ($469); //@line 845 "_hotshot.c"
        $tdelta_i23=$470; //@line 845 "_hotshot.c"
        __lastLabel__ = 82; __label__ = 84; break; //@line 845 "_hotshot.c"
      case 83: // $bb1thread_pre_split_i27
        var $_pr_i26=$tdelta_i23;
        __lastLabel__ = 83; __label__ = 84; break;
      case 84: // $bb1_i28
        var $471=__lastLabel__ == 83 ? $_pr_i26 : ($470);
        var $472=($471) < 0; //@line 848 "_hotshot.c"
        if ($472) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 848 "_hotshot.c"
      case 85: // $bb2_i29
        $5=0; //@line 849 "_hotshot.c"
        __label__ = 87; break; //@line 849 "_hotshot.c"
      case 86: // $bb3_i30
        var $473=$self_addr_i21; //@line 851 "_hotshot.c"
        var $474=$473+10284; //@line 851 "_hotshot.c"
        var $475=$474; //@line 851 "_hotshot.c"
        var $476=$tv_i24; //@line 851 "_hotshot.c"
        var $477=HEAP[$476]; //@line 851 "_hotshot.c"
        HEAP[$475]=$477; //@line 851 "_hotshot.c"
        var $478=$474+4; //@line 851 "_hotshot.c"
        var $479=$tv_i24+4; //@line 851 "_hotshot.c"
        var $480=HEAP[$479]; //@line 851 "_hotshot.c"
        HEAP[$478]=$480; //@line 851 "_hotshot.c"
        var $481=$tdelta_i23; //@line 852 "_hotshot.c"
        $5=$481; //@line 852 "_hotshot.c"
        __label__ = 87; break; //@line 852 "_hotshot.c"
      case 87: // $get_tdelta_exit33
        var $482=$5; //@line 849 "_hotshot.c"
        $retval_i22=$482; //@line 849 "_hotshot.c"
        var $retval5_i31=$retval_i22; //@line 849 "_hotshot.c"
        var $483=$self_addr; //@line 874 "_hotshot.c"
        $self_addr_i34=$483;
        $tdelta_addr_i35=$retval5_i31;
        var $484=$self_addr_i34; //@line 734 "_hotshot.c"
        var $485=$484+16; //@line 734 "_hotshot.c"
        var $486=HEAP[$485]; //@line 734 "_hotshot.c"
        var $487=($486) + 6; //@line 734 "_hotshot.c"
        var $488=($487) > 10239; //@line 734 "_hotshot.c"
        if ($488) { __label__ = 88; break; } else { __label__ = 90; break; } //@line 734 "_hotshot.c"
      case 88: // $bb_i37
        var $489=$self_addr_i34; //@line 735 "_hotshot.c"
        var $490=_flush_data($489); //@line 735 "_hotshot.c"
        var $491=($490) < 0; //@line 735 "_hotshot.c"
        if ($491) { __label__ = 89; break; } else { __label__ = 90; break; } //@line 735 "_hotshot.c"
      case 89: // $bb1_i38
        $4=-1; //@line 736 "_hotshot.c"
        __label__ = 93; break; //@line 736 "_hotshot.c"
      case 90: // $bb2_i39
        var $492=$self_addr_i34; //@line 738 "_hotshot.c"
        var $493=$492+10272; //@line 738 "_hotshot.c"
        var $494=HEAP[$493]; //@line 738 "_hotshot.c"
        var $495=($494)!=0; //@line 738 "_hotshot.c"
        var $496=$self_addr_i34; //@line 739 "_hotshot.c"
        if ($495) { __label__ = 91; break; } else { __label__ = 92; break; } //@line 738 "_hotshot.c"
      case 91: // $bb3_i40
        var $497=$tdelta_addr_i35; //@line 739 "_hotshot.c"
        var $498=_pack_modified_packed_int($496, $497, 1); //@line 739 "_hotshot.c"
        $4=$498; //@line 739 "_hotshot.c"
        __label__ = 93; break; //@line 739 "_hotshot.c"
      case 92: // $bb4_i41
        var $499=$496+16; //@line 740 "_hotshot.c"
        var $500=HEAP[$499]; //@line 740 "_hotshot.c"
        var $501=$self_addr_i34; //@line 740 "_hotshot.c"
        var $502=$501+20; //@line 740 "_hotshot.c"
        var $503=$502+$500; //@line 740 "_hotshot.c"
        HEAP[$503]=1; //@line 740 "_hotshot.c"
        var $504=$self_addr_i34; //@line 741 "_hotshot.c"
        var $505=$504+16; //@line 741 "_hotshot.c"
        var $506=HEAP[$505]; //@line 741 "_hotshot.c"
        var $507=($506) + 1; //@line 741 "_hotshot.c"
        var $508=$self_addr_i34; //@line 741 "_hotshot.c"
        var $509=$508+16; //@line 741 "_hotshot.c"
        HEAP[$509]=$507; //@line 741 "_hotshot.c"
        $4=0; //@line 742 "_hotshot.c"
        __label__ = 93; break; //@line 742 "_hotshot.c"
      case 93: // $pack_exit_exit
        var $510=$4; //@line 736 "_hotshot.c"
        $retval_i36=$510; //@line 736 "_hotshot.c"
        var $retval6_i42=$retval_i36; //@line 736 "_hotshot.c"
        $16=$retval6_i42; //@line 874 "_hotshot.c"
        __label__ = 118; break; //@line 874 "_hotshot.c"
      case 94: // $bb7
        var $511=$self_addr; //@line 877 "_hotshot.c"
        var $512=$511+10268; //@line 877 "_hotshot.c"
        var $513=HEAP[$512]; //@line 877 "_hotshot.c"
        var $514=($513)!=0; //@line 877 "_hotshot.c"
        if ($514) { __label__ = 95; break; } else { __label__ = 112; break; } //@line 877 "_hotshot.c"
      case 95: // $bb8
        var $515=$self_addr; //@line 878 "_hotshot.c"
        $self_addr_i44=$515;
        var $516=_gettimeofday($tv_i47, 0); //@line 841 "_hotshot.c"
        var $517=$tv_i47+4; //@line 843 "_hotshot.c"
        var $518=HEAP[$517]; //@line 843 "_hotshot.c"
        var $519=$self_addr_i44; //@line 843 "_hotshot.c"
        var $520=$519+10284; //@line 843 "_hotshot.c"
        var $521=$520+4; //@line 843 "_hotshot.c"
        var $522=HEAP[$521]; //@line 843 "_hotshot.c"
        var $523=($518) - ($522); //@line 843 "_hotshot.c"
        $tdelta_i46=$523; //@line 843 "_hotshot.c"
        var $524=$tv_i47; //@line 844 "_hotshot.c"
        var $525=HEAP[$524]; //@line 844 "_hotshot.c"
        var $526=$self_addr_i44; //@line 844 "_hotshot.c"
        var $527=$526+10284; //@line 844 "_hotshot.c"
        var $528=$527; //@line 844 "_hotshot.c"
        var $529=HEAP[$528]; //@line 844 "_hotshot.c"
        var $530=($525)!=($529); //@line 844 "_hotshot.c"
        if ($530) { __label__ = 96; break; } else { __label__ = 97; break; } //@line 844 "_hotshot.c"
      case 96: // $bb_i48
        var $531=$tv_i47; //@line 845 "_hotshot.c"
        var $532=HEAP[$531]; //@line 845 "_hotshot.c"
        var $533=$self_addr_i44; //@line 845 "_hotshot.c"
        var $534=$533+10284; //@line 845 "_hotshot.c"
        var $535=$534; //@line 845 "_hotshot.c"
        var $536=HEAP[$535]; //@line 845 "_hotshot.c"
        var $537=($532) - ($536); //@line 845 "_hotshot.c"
        var $538=($537) * 1000000; //@line 845 "_hotshot.c"
        var $539=$tdelta_i46; //@line 845 "_hotshot.c"
        var $540=($538) + ($539); //@line 845 "_hotshot.c"
        $tdelta_i46=$540; //@line 845 "_hotshot.c"
        __lastLabel__ = 96; __label__ = 98; break; //@line 845 "_hotshot.c"
      case 97: // $bb1thread_pre_split_i50
        var $_pr_i49=$tdelta_i46;
        __lastLabel__ = 97; __label__ = 98; break;
      case 98: // $bb1_i51
        var $541=__lastLabel__ == 97 ? $_pr_i49 : ($540);
        var $542=($541) < 0; //@line 848 "_hotshot.c"
        if ($542) { __label__ = 99; break; } else { __label__ = 100; break; } //@line 848 "_hotshot.c"
      case 99: // $bb2_i52
        $3=0; //@line 849 "_hotshot.c"
        __label__ = 101; break; //@line 849 "_hotshot.c"
      case 100: // $bb3_i53
        var $543=$self_addr_i44; //@line 851 "_hotshot.c"
        var $544=$543+10284; //@line 851 "_hotshot.c"
        var $545=$544; //@line 851 "_hotshot.c"
        var $546=$tv_i47; //@line 851 "_hotshot.c"
        var $547=HEAP[$546]; //@line 851 "_hotshot.c"
        HEAP[$545]=$547; //@line 851 "_hotshot.c"
        var $548=$544+4; //@line 851 "_hotshot.c"
        var $549=$tv_i47+4; //@line 851 "_hotshot.c"
        var $550=HEAP[$549]; //@line 851 "_hotshot.c"
        HEAP[$548]=$550; //@line 851 "_hotshot.c"
        var $551=$tdelta_i46; //@line 852 "_hotshot.c"
        $3=$551; //@line 852 "_hotshot.c"
        __label__ = 101; break; //@line 852 "_hotshot.c"
      case 101: // $get_tdelta_exit56
        var $552=$3; //@line 849 "_hotshot.c"
        $retval_i45=$552; //@line 849 "_hotshot.c"
        var $retval5_i54=$retval_i45; //@line 849 "_hotshot.c"
        var $553=$frame_addr; //@line 878 "_hotshot.c"
        var $554=$553+64; //@line 878 "_hotshot.c"
        var $555=HEAP[$554]; //@line 878 "_hotshot.c"
        var $556=$self_addr; //@line 878 "_hotshot.c"
        $self_addr_i61=$556;
        $lineno_addr_i62=$555;
        $tdelta_addr_i63=$retval5_i54;
        var $557=$self_addr_i61; //@line 758 "_hotshot.c"
        var $558=$557+16; //@line 758 "_hotshot.c"
        var $559=HEAP[$558]; //@line 758 "_hotshot.c"
        var $560=($559) + 11; //@line 758 "_hotshot.c"
        var $561=($560) > 10239; //@line 758 "_hotshot.c"
        if ($561) { __label__ = 102; break; } else { __label__ = 104; break; } //@line 758 "_hotshot.c"
      case 102: // $bb_i65
        var $562=$self_addr_i61; //@line 759 "_hotshot.c"
        var $563=_flush_data($562); //@line 759 "_hotshot.c"
        var $564=($563) < 0; //@line 759 "_hotshot.c"
        if ($564) { __label__ = 103; break; } else { __label__ = 104; break; } //@line 759 "_hotshot.c"
      case 103: // $bb1_i66
        $2=0; //@line 760 "_hotshot.c"
        __label__ = 111; break; //@line 760 "_hotshot.c"
      case 104: // $bb2_i67
        var $565=$self_addr_i61; //@line 762 "_hotshot.c"
        var $566=$lineno_addr_i62; //@line 762 "_hotshot.c"
        var $567=_pack_modified_packed_int($565, $566, 2); //@line 762 "_hotshot.c"
        var $568=($567) < 0; //@line 762 "_hotshot.c"
        if ($568) { __label__ = 105; break; } else { __label__ = 106; break; } //@line 762 "_hotshot.c"
      case 105: // $bb3_i68
        $2=-1; //@line 763 "_hotshot.c"
        __label__ = 111; break; //@line 763 "_hotshot.c"
      case 106: // $bb4_i69
        var $569=$self_addr_i61; //@line 764 "_hotshot.c"
        var $570=$tdelta_addr_i63; //@line 764 "_hotshot.c"
        $self_addr_i_i57=$569;
        $value_addr_i_i58=$570;
        __label__ = 107; break; //@line 584 "_hotshot.c"
      case 107: // $bb_i_i70
        var $571=$value_addr_i_i58; //@line 588 "_hotshot.c"
        var $572=((($571)) & 255); //@line 588 "_hotshot.c"
        var $573=($572) & 127; //@line 588 "_hotshot.c"
        $partial_i_i60=$573; //@line 588 "_hotshot.c"
        var $574=$value_addr_i_i58; //@line 589 "_hotshot.c"
        var $575=($574) >> 7; //@line 589 "_hotshot.c"
        $value_addr_i_i58=$575; //@line 589 "_hotshot.c"
        var $576=($575)!=0; //@line 590 "_hotshot.c"
        if ($576) { __label__ = 108; break; } else { __label__ = 109; break; } //@line 590 "_hotshot.c"
      case 108: // $bb1_i_i71
        var $577=$partial_i_i60; //@line 591 "_hotshot.c"
        var $578=($577) | -128; //@line 591 "_hotshot.c"
        $partial_i_i60=$578; //@line 591 "_hotshot.c"
        __label__ = 109; break; //@line 591 "_hotshot.c"
      case 109: // $bb2_i_i72
        var $579=$self_addr_i_i57; //@line 592 "_hotshot.c"
        var $580=$579+16; //@line 592 "_hotshot.c"
        var $581=HEAP[$580]; //@line 592 "_hotshot.c"
        var $582=$self_addr_i_i57; //@line 592 "_hotshot.c"
        var $583=$582+20; //@line 592 "_hotshot.c"
        var $584=$583+$581; //@line 592 "_hotshot.c"
        var $585=$partial_i_i60; //@line 592 "_hotshot.c"
        HEAP[$584]=$585; //@line 592 "_hotshot.c"
        var $586=$self_addr_i_i57; //@line 593 "_hotshot.c"
        var $587=$586+16; //@line 593 "_hotshot.c"
        var $588=HEAP[$587]; //@line 593 "_hotshot.c"
        var $589=($588) + 1; //@line 593 "_hotshot.c"
        var $590=$self_addr_i_i57; //@line 593 "_hotshot.c"
        var $591=$590+16; //@line 593 "_hotshot.c"
        HEAP[$591]=$589; //@line 593 "_hotshot.c"
        var $592=$value_addr_i_i58; //@line 594 "_hotshot.c"
        var $593=($592)!=0; //@line 594 "_hotshot.c"
        if ($593) { __label__ = 107; break; } else { __label__ = 110; break; } //@line 594 "_hotshot.c"
      case 110: // $pack_packed_int_exit_i73
        $1=0; //@line 595 "_hotshot.c"
        var $594=$1; //@line 595 "_hotshot.c"
        $retval_i_i59=$594; //@line 595 "_hotshot.c"
        var $retval4_i_i=$retval_i_i59; //@line 595 "_hotshot.c"
        $2=$retval4_i_i; //@line 764 "_hotshot.c"
        __label__ = 111; break; //@line 764 "_hotshot.c"
      case 111: // $pack_lineno_tdelta_exit
        var $595=$2; //@line 760 "_hotshot.c"
        $retval_i64=$595; //@line 760 "_hotshot.c"
        var $retval6_i74=$retval_i64; //@line 760 "_hotshot.c"
        $16=$retval6_i74; //@line 878 "_hotshot.c"
        __label__ = 118; break; //@line 878 "_hotshot.c"
      case 112: // $bb9
        var $596=$frame_addr; //@line 881 "_hotshot.c"
        var $597=$596+64; //@line 881 "_hotshot.c"
        var $598=HEAP[$597]; //@line 881 "_hotshot.c"
        var $599=$self_addr; //@line 881 "_hotshot.c"
        $self_addr_i76=$599;
        $lineno_addr_i77=$598;
        var $600=$self_addr_i76; //@line 748 "_hotshot.c"
        var $601=$600+16; //@line 748 "_hotshot.c"
        var $602=HEAP[$601]; //@line 748 "_hotshot.c"
        var $603=($602) + 6; //@line 748 "_hotshot.c"
        var $604=($603) > 10239; //@line 748 "_hotshot.c"
        if ($604) { __label__ = 113; break; } else { __label__ = 115; break; } //@line 748 "_hotshot.c"
      case 113: // $bb_i79
        var $605=$self_addr_i76; //@line 749 "_hotshot.c"
        var $606=_flush_data($605); //@line 749 "_hotshot.c"
        var $607=($606) < 0; //@line 749 "_hotshot.c"
        if ($607) { __label__ = 114; break; } else { __label__ = 115; break; } //@line 749 "_hotshot.c"
      case 114: // $bb1_i80
        $0=-1; //@line 750 "_hotshot.c"
        __label__ = 116; break; //@line 750 "_hotshot.c"
      case 115: // $bb2_i81
        var $608=$self_addr_i76; //@line 752 "_hotshot.c"
        var $609=$lineno_addr_i77; //@line 752 "_hotshot.c"
        var $610=_pack_modified_packed_int($608, $609, 2); //@line 752 "_hotshot.c"
        $0=$610; //@line 752 "_hotshot.c"
        __label__ = 116; break; //@line 752 "_hotshot.c"
      case 116: // $pack_lineno_exit
        var $611=$0; //@line 750 "_hotshot.c"
        $retval_i78=$611; //@line 750 "_hotshot.c"
        var $retval4_i=$retval_i78; //@line 750 "_hotshot.c"
        $16=$retval4_i; //@line 881 "_hotshot.c"
        __label__ = 118; break; //@line 881 "_hotshot.c"
      case 117: // $bb10
        $16=0; //@line 887 "_hotshot.c"
        __label__ = 118; break; //@line 887 "_hotshot.c"
      case 118: // $bb11
        var $612=$16; //@line 868 "_hotshot.c"
        $retval=$612; //@line 868 "_hotshot.c"
        var $retval12=$retval; //@line 868 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 868 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_modified_packed_int($self, $value, $subfield) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr_i;
        var $value_addr_i;
        var $retval_i;
        var $0;
        var $partial_i;
        var $self_addr;
        var $value_addr;
        var $modsize_addr;
        var $subfield_addr;
        var $retval;
        var $1;
        var $bits;
        var $partial;
        var $b;
        $self_addr=$self;
        $value_addr=$value;
        $modsize_addr=2;
        $subfield_addr=$subfield;
        var $2=$modsize_addr; //@line 608 "_hotshot.c"
        var $3=7 - ($2); //@line 608 "_hotshot.c"
        $bits=$3; //@line 608 "_hotshot.c"
        var $4=$bits; //@line 609 "_hotshot.c"
        var $5=_maxvalues_8890+$4*4; //@line 609 "_hotshot.c"
        var $6=HEAP[$5]; //@line 609 "_hotshot.c"
        var $7=$value_addr; //@line 609 "_hotshot.c"
        var $8=($7) & ($6); //@line 609 "_hotshot.c"
        $partial=$8; //@line 609 "_hotshot.c"
        var $9=$partial; //@line 610 "_hotshot.c"
        var $10=$modsize_addr; //@line 610 "_hotshot.c"
        var $11=($9) << ($10); //@line 610 "_hotshot.c"
        var $12=((($11)) & 255); //@line 610 "_hotshot.c"
        var $13=$subfield_addr; //@line 610 "_hotshot.c"
        var $14=((($13)) & 255); //@line 610 "_hotshot.c"
        var $15=($12) | ($14); //@line 610 "_hotshot.c"
        $b=$15; //@line 610 "_hotshot.c"
        var $16=$partial; //@line 612 "_hotshot.c"
        var $17=$value_addr; //@line 612 "_hotshot.c"
        var $18=($16)!=($17); //@line 612 "_hotshot.c"
        if ($18) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 612 "_hotshot.c"
      case 1: // $bb
        var $19=$b; //@line 613 "_hotshot.c"
        var $20=($19) | -128; //@line 613 "_hotshot.c"
        $b=$20; //@line 613 "_hotshot.c"
        var $21=$self_addr; //@line 614 "_hotshot.c"
        var $22=$21+16; //@line 614 "_hotshot.c"
        var $23=HEAP[$22]; //@line 614 "_hotshot.c"
        var $24=$self_addr; //@line 614 "_hotshot.c"
        var $25=$24+20; //@line 614 "_hotshot.c"
        var $26=$25+$23; //@line 614 "_hotshot.c"
        var $27=$b; //@line 614 "_hotshot.c"
        HEAP[$26]=$27; //@line 614 "_hotshot.c"
        var $28=$self_addr; //@line 615 "_hotshot.c"
        var $29=$28+16; //@line 615 "_hotshot.c"
        var $30=HEAP[$29]; //@line 615 "_hotshot.c"
        var $31=($30) + 1; //@line 615 "_hotshot.c"
        var $32=$self_addr; //@line 615 "_hotshot.c"
        var $33=$32+16; //@line 615 "_hotshot.c"
        HEAP[$33]=$31; //@line 615 "_hotshot.c"
        var $34=$value_addr; //@line 616 "_hotshot.c"
        var $35=$bits; //@line 616 "_hotshot.c"
        var $36=($34) >> ($35); //@line 616 "_hotshot.c"
        var $37=$self_addr; //@line 616 "_hotshot.c"
        $self_addr_i=$37;
        $value_addr_i=$36;
        __label__ = 2; break; //@line 584 "_hotshot.c"
      case 2: // $bb_i
        var $38=$value_addr_i; //@line 588 "_hotshot.c"
        var $39=((($38)) & 255); //@line 588 "_hotshot.c"
        var $40=($39) & 127; //@line 588 "_hotshot.c"
        $partial_i=$40; //@line 588 "_hotshot.c"
        var $41=$value_addr_i; //@line 589 "_hotshot.c"
        var $42=($41) >> 7; //@line 589 "_hotshot.c"
        $value_addr_i=$42; //@line 589 "_hotshot.c"
        var $43=($42)!=0; //@line 590 "_hotshot.c"
        if ($43) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 590 "_hotshot.c"
      case 3: // $bb1_i
        var $44=$partial_i; //@line 591 "_hotshot.c"
        var $45=($44) | -128; //@line 591 "_hotshot.c"
        $partial_i=$45; //@line 591 "_hotshot.c"
        __label__ = 4; break; //@line 591 "_hotshot.c"
      case 4: // $bb2_i
        var $46=$self_addr_i; //@line 592 "_hotshot.c"
        var $47=$46+16; //@line 592 "_hotshot.c"
        var $48=HEAP[$47]; //@line 592 "_hotshot.c"
        var $49=$self_addr_i; //@line 592 "_hotshot.c"
        var $50=$49+20; //@line 592 "_hotshot.c"
        var $51=$50+$48; //@line 592 "_hotshot.c"
        var $52=$partial_i; //@line 592 "_hotshot.c"
        HEAP[$51]=$52; //@line 592 "_hotshot.c"
        var $53=$self_addr_i; //@line 593 "_hotshot.c"
        var $54=$53+16; //@line 593 "_hotshot.c"
        var $55=HEAP[$54]; //@line 593 "_hotshot.c"
        var $56=($55) + 1; //@line 593 "_hotshot.c"
        var $57=$self_addr_i; //@line 593 "_hotshot.c"
        var $58=$57+16; //@line 593 "_hotshot.c"
        HEAP[$58]=$56; //@line 593 "_hotshot.c"
        var $59=$value_addr_i; //@line 594 "_hotshot.c"
        var $60=($59)!=0; //@line 594 "_hotshot.c"
        if ($60) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 594 "_hotshot.c"
      case 5: // $pack_packed_int_exit
        $0=0; //@line 595 "_hotshot.c"
        var $61=$0; //@line 595 "_hotshot.c"
        $retval_i=$61; //@line 595 "_hotshot.c"
        var $retval4_i=$retval_i; //@line 595 "_hotshot.c"
        $1=$retval4_i; //@line 616 "_hotshot.c"
        __label__ = 7; break; //@line 616 "_hotshot.c"
      case 6: // $bb1
        var $62=$self_addr; //@line 618 "_hotshot.c"
        var $63=$62+16; //@line 618 "_hotshot.c"
        var $64=HEAP[$63]; //@line 618 "_hotshot.c"
        var $65=$self_addr; //@line 618 "_hotshot.c"
        var $66=$65+20; //@line 618 "_hotshot.c"
        var $67=$66+$64; //@line 618 "_hotshot.c"
        var $68=$b; //@line 618 "_hotshot.c"
        HEAP[$67]=$68; //@line 618 "_hotshot.c"
        var $69=$self_addr; //@line 619 "_hotshot.c"
        var $70=$69+16; //@line 619 "_hotshot.c"
        var $71=HEAP[$70]; //@line 619 "_hotshot.c"
        var $72=($71) + 1; //@line 619 "_hotshot.c"
        var $73=$self_addr; //@line 619 "_hotshot.c"
        var $74=$73+16; //@line 619 "_hotshot.c"
        HEAP[$74]=$72; //@line 619 "_hotshot.c"
        $1=0; //@line 620 "_hotshot.c"
        __label__ = 7; break; //@line 620 "_hotshot.c"
      case 7: // $bb2
        var $75=$1; //@line 616 "_hotshot.c"
        $retval=$75; //@line 616 "_hotshot.c"
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
        var $2=_PyArg_ParseTuple($1, __str10, $key, $value); //@line 1016 "_hotshot.c"
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
        var $self_addr_i;
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 1036 "_hotshot.c"
        $self_addr_i=$1;
        var $2=$self_addr_i; //@line 976 "_hotshot.c"
        var $3=$2+10276; //@line 976 "_hotshot.c"
        var $4=HEAP[$3]; //@line 976 "_hotshot.c"
        var $5=($4)!=0; //@line 976 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 976 "_hotshot.c"
      case 1: // $bb_i
        var $6=$self_addr_i; //@line 977 "_hotshot.c"
        var $7=$6+10276; //@line 977 "_hotshot.c"
        HEAP[$7]=0; //@line 977 "_hotshot.c"
        var $8=$self_addr_i; //@line 978 "_hotshot.c"
        var $9=$8+10264; //@line 978 "_hotshot.c"
        var $10=HEAP[$9]; //@line 978 "_hotshot.c"
        var $11=($10)!=0; //@line 978 "_hotshot.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 978 "_hotshot.c"
      case 2: // $bb1_i
        _PyEval_SetTrace(0, 0); //@line 979 "_hotshot.c"
        __label__ = 4; break; //@line 979 "_hotshot.c"
      case 3: // $bb2_i
        _PyEval_SetProfile(0, 0); //@line 981 "_hotshot.c"
        __label__ = 4; break; //@line 981 "_hotshot.c"
      case 4: // $bb3_i
        var $12=$self_addr_i; //@line 983 "_hotshot.c"
        var $13=$12+16; //@line 983 "_hotshot.c"
        var $14=HEAP[$13]; //@line 983 "_hotshot.c"
        var $15=($14) > 0; //@line 983 "_hotshot.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 983 "_hotshot.c"
      case 5: // $bb4_i
        var $16=$self_addr_i; //@line 985 "_hotshot.c"
        var $17=_flush_data($16); //@line 985 "_hotshot.c"
        __label__ = 6; break; //@line 985 "_hotshot.c"
      case 6: // $do_stop_exit
        var $18=$self_addr; //@line 1037 "_hotshot.c"
        var $19=$18+10260; //@line 1037 "_hotshot.c"
        var $20=HEAP[$19]; //@line 1037 "_hotshot.c"
        var $21=($20)!=0; //@line 1037 "_hotshot.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1037 "_hotshot.c"
      case 7: // $bb
        var $22=$self_addr; //@line 1038 "_hotshot.c"
        var $23=$22+10260; //@line 1038 "_hotshot.c"
        var $24=HEAP[$23]; //@line 1038 "_hotshot.c"
        var $25=_fclose($24); //@line 1038 "_hotshot.c"
        var $26=$self_addr; //@line 1039 "_hotshot.c"
        var $27=$26+10260; //@line 1039 "_hotshot.c"
        HEAP[$27]=0; //@line 1039 "_hotshot.c"
        __label__ = 8; break; //@line 1039 "_hotshot.c"
      case 8: // $bb1
        var $28=HEAP[__Py_NoneStruct]; //@line 1041 "_hotshot.c"
        var $29=($28) + 1; //@line 1041 "_hotshot.c"
        HEAP[__Py_NoneStruct]=$29; //@line 1041 "_hotshot.c"
        $0=__Py_NoneStruct; //@line 1042 "_hotshot.c"
        var $30=$0; //@line 1042 "_hotshot.c"
        $retval=$30; //@line 1042 "_hotshot.c"
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
        var $self_addr_i4;
        var $self_addr_i1;
        var $self_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $1;
        var $result;
        var $callargs=__stackBase__;
        var $callkw=__stackBase__+4;
        var $callable=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        $result=0; //@line 1065 "_hotshot.c"
        HEAP[$callargs]=0; //@line 1066 "_hotshot.c"
        HEAP[$callkw]=0; //@line 1067 "_hotshot.c"
        var $2=$args_addr; //@line 1070 "_hotshot.c"
        var $3=_PyArg_UnpackTuple($2, __str12, 1, 3, $callable, $callargs, $callkw); //@line 1070 "_hotshot.c"
        var $4=($3)!=0; //@line 1070 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 15; break; } //@line 1070 "_hotshot.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1072 "_hotshot.c"
        $self_addr_i=$5;
        var $6=$self_addr_i; //@line 992 "_hotshot.c"
        var $7=$6+10276; //@line 992 "_hotshot.c"
        var $8=HEAP[$7]; //@line 992 "_hotshot.c"
        var $9=($8)!=0; //@line 992 "_hotshot.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 992 "_hotshot.c"
      case 2: // $bb_i
        var $10=HEAP[_ProfilerError]; //@line 993 "_hotshot.c"
        _PyErr_SetString($10, __str8); //@line 993 "_hotshot.c"
        $0=0; //@line 994 "_hotshot.c"
        __label__ = 5; break; //@line 994 "_hotshot.c"
      case 3: // $bb1_i
        var $11=$self_addr_i; //@line 996 "_hotshot.c"
        var $12=$11+10260; //@line 996 "_hotshot.c"
        var $13=HEAP[$12]; //@line 996 "_hotshot.c"
        var $14=($13)==0; //@line 996 "_hotshot.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 996 "_hotshot.c"
      case 4: // $bb2_i
        var $15=HEAP[_ProfilerError]; //@line 997 "_hotshot.c"
        _PyErr_SetString($15, __str9); //@line 997 "_hotshot.c"
        $0=0; //@line 998 "_hotshot.c"
        __label__ = 5; break; //@line 998 "_hotshot.c"
      case 5: // $is_available_exit_thread
        $retval_i=0; //@line 994 "_hotshot.c"
        __label__ = 15; break;
      case 6: // $bb1
        $0=1; //@line 1000 "_hotshot.c"
        $retval_i=1; //@line 994 "_hotshot.c"
        var $16=$self_addr; //@line 1073 "_hotshot.c"
        $self_addr_i1=$16;
        var $17=$self_addr_i1; //@line 965 "_hotshot.c"
        var $18=$17+10276; //@line 965 "_hotshot.c"
        HEAP[$18]=1; //@line 965 "_hotshot.c"
        var $19=$self_addr_i1; //@line 966 "_hotshot.c"
        var $20=$19+10284; //@line 966 "_hotshot.c"
        var $21=_gettimeofday($20, 0); //@line 966 "_hotshot.c"
        var $22=$self_addr_i1; //@line 967 "_hotshot.c"
        var $23=$22+10264; //@line 967 "_hotshot.c"
        var $24=HEAP[$23]; //@line 967 "_hotshot.c"
        var $25=($24)!=0; //@line 967 "_hotshot.c"
        var $26=$self_addr_i1; //@line 968 "_hotshot.c"
        var $27=$26; //@line 968 "_hotshot.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 967 "_hotshot.c"
      case 7: // $bb_i2
        _PyEval_SetTrace((FUNCTION_TABLE_OFFSET + 2), $27); //@line 968 "_hotshot.c"
        __label__ = 9; break; //@line 968 "_hotshot.c"
      case 8: // $bb1_i3
        _PyEval_SetProfile((FUNCTION_TABLE_OFFSET + 2), $27); //@line 970 "_hotshot.c"
        __label__ = 9; break; //@line 970 "_hotshot.c"
      case 9: // $do_start_exit
        var $28=HEAP[$callkw]; //@line 1074 "_hotshot.c"
        var $29=HEAP[$callargs]; //@line 1074 "_hotshot.c"
        var $30=HEAP[$callable]; //@line 1074 "_hotshot.c"
        var $31=_PyEval_CallObjectWithKeywords($30, $29, $28); //@line 1074 "_hotshot.c"
        $result=$31; //@line 1074 "_hotshot.c"
        var $32=$self_addr; //@line 1075 "_hotshot.c"
        $self_addr_i4=$32;
        var $33=$self_addr_i4; //@line 976 "_hotshot.c"
        var $34=$33+10276; //@line 976 "_hotshot.c"
        var $35=HEAP[$34]; //@line 976 "_hotshot.c"
        var $36=($35)!=0; //@line 976 "_hotshot.c"
        if ($36) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 976 "_hotshot.c"
      case 10: // $bb_i5
        var $37=$self_addr_i4; //@line 977 "_hotshot.c"
        var $38=$37+10276; //@line 977 "_hotshot.c"
        HEAP[$38]=0; //@line 977 "_hotshot.c"
        var $39=$self_addr_i4; //@line 978 "_hotshot.c"
        var $40=$39+10264; //@line 978 "_hotshot.c"
        var $41=HEAP[$40]; //@line 978 "_hotshot.c"
        var $42=($41)!=0; //@line 978 "_hotshot.c"
        if ($42) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 978 "_hotshot.c"
      case 11: // $bb1_i6
        _PyEval_SetTrace(0, 0); //@line 979 "_hotshot.c"
        __label__ = 13; break; //@line 979 "_hotshot.c"
      case 12: // $bb2_i7
        _PyEval_SetProfile(0, 0); //@line 981 "_hotshot.c"
        __label__ = 13; break; //@line 981 "_hotshot.c"
      case 13: // $bb3_i8
        var $43=$self_addr_i4; //@line 983 "_hotshot.c"
        var $44=$43+16; //@line 983 "_hotshot.c"
        var $45=HEAP[$44]; //@line 983 "_hotshot.c"
        var $46=($45) > 0; //@line 983 "_hotshot.c"
        if ($46) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 983 "_hotshot.c"
      case 14: // $bb4_i
        var $47=$self_addr_i4; //@line 985 "_hotshot.c"
        var $48=_flush_data($47); //@line 985 "_hotshot.c"
        __label__ = 15; break; //@line 985 "_hotshot.c"
      case 15: // $bb2
        var $49=$result; //@line 1078 "_hotshot.c"
        $1=$49; //@line 1078 "_hotshot.c"
        var $50=$1; //@line 1078 "_hotshot.c"
        $retval=$50; //@line 1078 "_hotshot.c"
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
        var $self_addr_i5;
        var $self_addr_i2;
        var $self_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $1;
        var $result;
        var $code=__stackBase__;
        var $globals=__stackBase__+4;
        var $locals=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        $result=0; //@line 1089 "_hotshot.c"
        HEAP[$locals]=0; //@line 1092 "_hotshot.c"
        var $2=$args_addr; //@line 1094 "_hotshot.c"
        var $3=_PyArg_ParseTuple($2, __str13, _PyCode_Type, $code, _PyDict_Type, $globals, $locals); //@line 1094 "_hotshot.c"
        var $4=($3)!=0; //@line 1094 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 19; break; } //@line 1094 "_hotshot.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1098 "_hotshot.c"
        $self_addr_i=$5;
        var $6=$self_addr_i; //@line 992 "_hotshot.c"
        var $7=$6+10276; //@line 992 "_hotshot.c"
        var $8=HEAP[$7]; //@line 992 "_hotshot.c"
        var $9=($8)!=0; //@line 992 "_hotshot.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 992 "_hotshot.c"
      case 2: // $bb_i
        var $10=HEAP[_ProfilerError]; //@line 993 "_hotshot.c"
        _PyErr_SetString($10, __str8); //@line 993 "_hotshot.c"
        $0=0; //@line 994 "_hotshot.c"
        __label__ = 5; break; //@line 994 "_hotshot.c"
      case 3: // $bb1_i
        var $11=$self_addr_i; //@line 996 "_hotshot.c"
        var $12=$11+10260; //@line 996 "_hotshot.c"
        var $13=HEAP[$12]; //@line 996 "_hotshot.c"
        var $14=($13)==0; //@line 996 "_hotshot.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 996 "_hotshot.c"
      case 4: // $bb2_i
        var $15=HEAP[_ProfilerError]; //@line 997 "_hotshot.c"
        _PyErr_SetString($15, __str9); //@line 997 "_hotshot.c"
        $0=0; //@line 998 "_hotshot.c"
        __label__ = 5; break; //@line 998 "_hotshot.c"
      case 5: // $is_available_exit_thread
        $retval_i=0; //@line 994 "_hotshot.c"
        __label__ = 19; break;
      case 6: // $bb1
        $0=1; //@line 1000 "_hotshot.c"
        $retval_i=1; //@line 994 "_hotshot.c"
        var $16=HEAP[$locals]; //@line 1099 "_hotshot.c"
        var $17=($16)==0; //@line 1099 "_hotshot.c"
        var $18=HEAP[$locals]; //@line 1099 "_hotshot.c"
        var $19=($18)==(__Py_NoneStruct); //@line 1099 "_hotshot.c"
        var $or_cond=($17) | ($19);
        if ($or_cond) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1099 "_hotshot.c"
      case 7: // $bb3
        var $20=HEAP[$globals]; //@line 1100 "_hotshot.c"
        HEAP[$locals]=$20; //@line 1100 "_hotshot.c"
        __label__ = 10; break; //@line 1100 "_hotshot.c"
      case 8: // $bb4
        var $21=HEAP[$locals]; //@line 1101 "_hotshot.c"
        var $22=$21+4; //@line 1101 "_hotshot.c"
        var $23=HEAP[$22]; //@line 1101 "_hotshot.c"
        var $24=$23+84; //@line 1101 "_hotshot.c"
        var $25=HEAP[$24]; //@line 1101 "_hotshot.c"
        var $26=($25) & 536870912; //@line 1101 "_hotshot.c"
        var $27=($26)==0; //@line 1101 "_hotshot.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1101 "_hotshot.c"
      case 9: // $bb5
        var $28=HEAP[_PyExc_TypeError]; //@line 1102 "_hotshot.c"
        _PyErr_SetString($28, __str14); //@line 1102 "_hotshot.c"
        $1=0; //@line 1104 "_hotshot.c"
        __label__ = 20; break; //@line 1104 "_hotshot.c"
      case 10: // $bb6
        var $29=$self_addr; //@line 1106 "_hotshot.c"
        $self_addr_i2=$29;
        var $30=$self_addr_i2; //@line 965 "_hotshot.c"
        var $31=$30+10276; //@line 965 "_hotshot.c"
        HEAP[$31]=1; //@line 965 "_hotshot.c"
        var $32=$self_addr_i2; //@line 966 "_hotshot.c"
        var $33=$32+10284; //@line 966 "_hotshot.c"
        var $34=_gettimeofday($33, 0); //@line 966 "_hotshot.c"
        var $35=$self_addr_i2; //@line 967 "_hotshot.c"
        var $36=$35+10264; //@line 967 "_hotshot.c"
        var $37=HEAP[$36]; //@line 967 "_hotshot.c"
        var $38=($37)!=0; //@line 967 "_hotshot.c"
        var $39=$self_addr_i2; //@line 968 "_hotshot.c"
        var $40=$39; //@line 968 "_hotshot.c"
        if ($38) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 967 "_hotshot.c"
      case 11: // $bb_i3
        _PyEval_SetTrace((FUNCTION_TABLE_OFFSET + 2), $40); //@line 968 "_hotshot.c"
        __label__ = 13; break; //@line 968 "_hotshot.c"
      case 12: // $bb1_i4
        _PyEval_SetProfile((FUNCTION_TABLE_OFFSET + 2), $40); //@line 970 "_hotshot.c"
        __label__ = 13; break; //@line 970 "_hotshot.c"
      case 13: // $do_start_exit
        var $41=HEAP[$locals]; //@line 1107 "_hotshot.c"
        var $42=HEAP[$globals]; //@line 1107 "_hotshot.c"
        var $43=HEAP[$code]; //@line 1107 "_hotshot.c"
        var $44=_PyEval_EvalCode($43, $42, $41); //@line 1107 "_hotshot.c"
        $result=$44; //@line 1107 "_hotshot.c"
        var $45=$self_addr; //@line 1108 "_hotshot.c"
        $self_addr_i5=$45;
        var $46=$self_addr_i5; //@line 976 "_hotshot.c"
        var $47=$46+10276; //@line 976 "_hotshot.c"
        var $48=HEAP[$47]; //@line 976 "_hotshot.c"
        var $49=($48)!=0; //@line 976 "_hotshot.c"
        if ($49) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 976 "_hotshot.c"
      case 14: // $bb_i6
        var $50=$self_addr_i5; //@line 977 "_hotshot.c"
        var $51=$50+10276; //@line 977 "_hotshot.c"
        HEAP[$51]=0; //@line 977 "_hotshot.c"
        var $52=$self_addr_i5; //@line 978 "_hotshot.c"
        var $53=$52+10264; //@line 978 "_hotshot.c"
        var $54=HEAP[$53]; //@line 978 "_hotshot.c"
        var $55=($54)!=0; //@line 978 "_hotshot.c"
        if ($55) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 978 "_hotshot.c"
      case 15: // $bb1_i7
        _PyEval_SetTrace(0, 0); //@line 979 "_hotshot.c"
        __label__ = 17; break; //@line 979 "_hotshot.c"
      case 16: // $bb2_i8
        _PyEval_SetProfile(0, 0); //@line 981 "_hotshot.c"
        __label__ = 17; break; //@line 981 "_hotshot.c"
      case 17: // $bb3_i9
        var $56=$self_addr_i5; //@line 983 "_hotshot.c"
        var $57=$56+16; //@line 983 "_hotshot.c"
        var $58=HEAP[$57]; //@line 983 "_hotshot.c"
        var $59=($58) > 0; //@line 983 "_hotshot.c"
        if ($59) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 983 "_hotshot.c"
      case 18: // $bb4_i
        var $60=$self_addr_i5; //@line 985 "_hotshot.c"
        var $61=_flush_data($60); //@line 985 "_hotshot.c"
        __label__ = 19; break; //@line 985 "_hotshot.c"
      case 19: // $bb7
        var $62=$result; //@line 1117 "_hotshot.c"
        $1=$62; //@line 1117 "_hotshot.c"
        __label__ = 20; break; //@line 1117 "_hotshot.c"
      case 20: // $bb8
        var $63=$1; //@line 1104 "_hotshot.c"
        $retval=$63; //@line 1104 "_hotshot.c"
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
        var $self_addr_i1;
        var $self_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $1;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        $result=0; //@line 1127 "_hotshot.c"
        var $2=$self_addr; //@line 1129 "_hotshot.c"
        $self_addr_i=$2;
        var $3=$self_addr_i; //@line 992 "_hotshot.c"
        var $4=$3+10276; //@line 992 "_hotshot.c"
        var $5=HEAP[$4]; //@line 992 "_hotshot.c"
        var $6=($5)!=0; //@line 992 "_hotshot.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 992 "_hotshot.c"
      case 1: // $bb_i
        var $7=HEAP[_ProfilerError]; //@line 993 "_hotshot.c"
        _PyErr_SetString($7, __str8); //@line 993 "_hotshot.c"
        $0=0; //@line 994 "_hotshot.c"
        __label__ = 4; break; //@line 994 "_hotshot.c"
      case 2: // $bb1_i
        var $8=$self_addr_i; //@line 996 "_hotshot.c"
        var $9=$8+10260; //@line 996 "_hotshot.c"
        var $10=HEAP[$9]; //@line 996 "_hotshot.c"
        var $11=($10)==0; //@line 996 "_hotshot.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 996 "_hotshot.c"
      case 3: // $bb2_i
        var $12=HEAP[_ProfilerError]; //@line 997 "_hotshot.c"
        _PyErr_SetString($12, __str9); //@line 997 "_hotshot.c"
        $0=0; //@line 998 "_hotshot.c"
        __label__ = 4; break; //@line 998 "_hotshot.c"
      case 4: // $is_available_exit_thread
        $retval_i=0; //@line 994 "_hotshot.c"
        __label__ = 9; break;
      case 5: // $bb
        $0=1; //@line 1000 "_hotshot.c"
        $retval_i=1; //@line 994 "_hotshot.c"
        var $13=$self_addr; //@line 1130 "_hotshot.c"
        $self_addr_i1=$13;
        var $14=$self_addr_i1; //@line 965 "_hotshot.c"
        var $15=$14+10276; //@line 965 "_hotshot.c"
        HEAP[$15]=1; //@line 965 "_hotshot.c"
        var $16=$self_addr_i1; //@line 966 "_hotshot.c"
        var $17=$16+10284; //@line 966 "_hotshot.c"
        var $18=_gettimeofday($17, 0); //@line 966 "_hotshot.c"
        var $19=$self_addr_i1; //@line 967 "_hotshot.c"
        var $20=$19+10264; //@line 967 "_hotshot.c"
        var $21=HEAP[$20]; //@line 967 "_hotshot.c"
        var $22=($21)!=0; //@line 967 "_hotshot.c"
        var $23=$self_addr_i1; //@line 968 "_hotshot.c"
        var $24=$23; //@line 968 "_hotshot.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 967 "_hotshot.c"
      case 6: // $bb_i2
        _PyEval_SetTrace((FUNCTION_TABLE_OFFSET + 2), $24); //@line 968 "_hotshot.c"
        __label__ = 8; break; //@line 968 "_hotshot.c"
      case 7: // $bb1_i3
        _PyEval_SetProfile((FUNCTION_TABLE_OFFSET + 2), $24); //@line 970 "_hotshot.c"
        __label__ = 8; break; //@line 970 "_hotshot.c"
      case 8: // $do_start_exit
        $result=__Py_NoneStruct; //@line 1131 "_hotshot.c"
        var $25=$result; //@line 1132 "_hotshot.c"
        var $26=$25; //@line 1132 "_hotshot.c"
        var $27=HEAP[$26]; //@line 1132 "_hotshot.c"
        var $28=($27) + 1; //@line 1132 "_hotshot.c"
        var $29=$result; //@line 1132 "_hotshot.c"
        var $30=$29; //@line 1132 "_hotshot.c"
        HEAP[$30]=$28; //@line 1132 "_hotshot.c"
        __label__ = 9; break; //@line 1132 "_hotshot.c"
      case 9: // $bb1
        var $31=$result; //@line 1134 "_hotshot.c"
        $1=$31; //@line 1134 "_hotshot.c"
        var $32=$1; //@line 1134 "_hotshot.c"
        $retval=$32; //@line 1134 "_hotshot.c"
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
        var $self_addr_i;
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
        __label__ = 9; break; //@line 1147 "_hotshot.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 1149 "_hotshot.c"
        $self_addr_i=$6;
        var $7=$self_addr_i; //@line 976 "_hotshot.c"
        var $8=$7+10276; //@line 976 "_hotshot.c"
        var $9=HEAP[$8]; //@line 976 "_hotshot.c"
        var $10=($9)!=0; //@line 976 "_hotshot.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 976 "_hotshot.c"
      case 3: // $bb_i
        var $11=$self_addr_i; //@line 977 "_hotshot.c"
        var $12=$11+10276; //@line 977 "_hotshot.c"
        HEAP[$12]=0; //@line 977 "_hotshot.c"
        var $13=$self_addr_i; //@line 978 "_hotshot.c"
        var $14=$13+10264; //@line 978 "_hotshot.c"
        var $15=HEAP[$14]; //@line 978 "_hotshot.c"
        var $16=($15)!=0; //@line 978 "_hotshot.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 978 "_hotshot.c"
      case 4: // $bb1_i
        _PyEval_SetTrace(0, 0); //@line 979 "_hotshot.c"
        __label__ = 6; break; //@line 979 "_hotshot.c"
      case 5: // $bb2_i
        _PyEval_SetProfile(0, 0); //@line 981 "_hotshot.c"
        __label__ = 6; break; //@line 981 "_hotshot.c"
      case 6: // $bb3_i
        var $17=$self_addr_i; //@line 983 "_hotshot.c"
        var $18=$17+16; //@line 983 "_hotshot.c"
        var $19=HEAP[$18]; //@line 983 "_hotshot.c"
        var $20=($19) > 0; //@line 983 "_hotshot.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 983 "_hotshot.c"
      case 7: // $bb4_i
        var $21=$self_addr_i; //@line 985 "_hotshot.c"
        var $22=_flush_data($21); //@line 985 "_hotshot.c"
        __label__ = 8; break; //@line 985 "_hotshot.c"
      case 8: // $do_stop_exit
        $result=__Py_NoneStruct; //@line 1150 "_hotshot.c"
        var $23=$result; //@line 1151 "_hotshot.c"
        var $24=$23; //@line 1151 "_hotshot.c"
        var $25=HEAP[$24]; //@line 1151 "_hotshot.c"
        var $26=($25) + 1; //@line 1151 "_hotshot.c"
        var $27=$result; //@line 1151 "_hotshot.c"
        var $28=$27; //@line 1151 "_hotshot.c"
        HEAP[$28]=$26; //@line 1151 "_hotshot.c"
        __label__ = 9; break; //@line 1151 "_hotshot.c"
      case 9: // $bb2
        var $29=$result; //@line 1153 "_hotshot.c"
        $0=$29; //@line 1153 "_hotshot.c"
        var $30=$0; //@line 1153 "_hotshot.c"
        $retval=$30; //@line 1153 "_hotshot.c"
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
        var $self_addr_i;
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 1162 "_hotshot.c"
        $self_addr_i=$0;
        var $1=$self_addr_i; //@line 976 "_hotshot.c"
        var $2=$1+10276; //@line 976 "_hotshot.c"
        var $3=HEAP[$2]; //@line 976 "_hotshot.c"
        var $4=($3)!=0; //@line 976 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 976 "_hotshot.c"
      case 1: // $bb_i
        var $5=$self_addr_i; //@line 977 "_hotshot.c"
        var $6=$5+10276; //@line 977 "_hotshot.c"
        HEAP[$6]=0; //@line 977 "_hotshot.c"
        var $7=$self_addr_i; //@line 978 "_hotshot.c"
        var $8=$7+10264; //@line 978 "_hotshot.c"
        var $9=HEAP[$8]; //@line 978 "_hotshot.c"
        var $10=($9)!=0; //@line 978 "_hotshot.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 978 "_hotshot.c"
      case 2: // $bb1_i
        _PyEval_SetTrace(0, 0); //@line 979 "_hotshot.c"
        __label__ = 4; break; //@line 979 "_hotshot.c"
      case 3: // $bb2_i
        _PyEval_SetProfile(0, 0); //@line 981 "_hotshot.c"
        __label__ = 4; break; //@line 981 "_hotshot.c"
      case 4: // $bb3_i
        var $11=$self_addr_i; //@line 983 "_hotshot.c"
        var $12=$11+16; //@line 983 "_hotshot.c"
        var $13=HEAP[$12]; //@line 983 "_hotshot.c"
        var $14=($13) > 0; //@line 983 "_hotshot.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 983 "_hotshot.c"
      case 5: // $bb4_i
        var $15=$self_addr_i; //@line 985 "_hotshot.c"
        var $16=_flush_data($15); //@line 985 "_hotshot.c"
        __label__ = 6; break; //@line 985 "_hotshot.c"
      case 6: // $do_stop_exit
        var $17=$self_addr; //@line 1163 "_hotshot.c"
        var $18=$17+10260; //@line 1163 "_hotshot.c"
        var $19=HEAP[$18]; //@line 1163 "_hotshot.c"
        var $20=($19)!=0; //@line 1163 "_hotshot.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1163 "_hotshot.c"
      case 7: // $bb
        var $21=$self_addr; //@line 1164 "_hotshot.c"
        var $22=$21+10260; //@line 1164 "_hotshot.c"
        var $23=HEAP[$22]; //@line 1164 "_hotshot.c"
        var $24=_fclose($23); //@line 1164 "_hotshot.c"
        __label__ = 8; break; //@line 1164 "_hotshot.c"
      case 8: // $bb1
        var $25=$self_addr; //@line 1165 "_hotshot.c"
        var $26=$25+8; //@line 1165 "_hotshot.c"
        var $27=HEAP[$26]; //@line 1165 "_hotshot.c"
        var $28=($27)!=0; //@line 1165 "_hotshot.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 1165 "_hotshot.c"
      case 9: // $bb2
        var $29=$self_addr; //@line 1165 "_hotshot.c"
        var $30=$29+8; //@line 1165 "_hotshot.c"
        var $31=HEAP[$30]; //@line 1165 "_hotshot.c"
        var $32=$31; //@line 1165 "_hotshot.c"
        var $33=HEAP[$32]; //@line 1165 "_hotshot.c"
        var $34=($33) - 1; //@line 1165 "_hotshot.c"
        var $35=$31; //@line 1165 "_hotshot.c"
        HEAP[$35]=$34; //@line 1165 "_hotshot.c"
        var $36=$31; //@line 1165 "_hotshot.c"
        var $37=HEAP[$36]; //@line 1165 "_hotshot.c"
        var $38=($37)==0; //@line 1165 "_hotshot.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1165 "_hotshot.c"
      case 10: // $bb3
        var $39=$self_addr; //@line 1165 "_hotshot.c"
        var $40=$39+8; //@line 1165 "_hotshot.c"
        var $41=HEAP[$40]; //@line 1165 "_hotshot.c"
        var $42=$41+4; //@line 1165 "_hotshot.c"
        var $43=HEAP[$42]; //@line 1165 "_hotshot.c"
        var $44=$43+24; //@line 1165 "_hotshot.c"
        var $45=HEAP[$44]; //@line 1165 "_hotshot.c"
        var $46=$self_addr; //@line 1165 "_hotshot.c"
        var $47=$46+8; //@line 1165 "_hotshot.c"
        var $48=HEAP[$47]; //@line 1165 "_hotshot.c"
        FUNCTION_TABLE[$45]($48); //@line 1165 "_hotshot.c"
        __label__ = 11; break; //@line 1165 "_hotshot.c"
      case 11: // $bb4
        var $49=$self_addr; //@line 1166 "_hotshot.c"
        var $50=$49+12; //@line 1166 "_hotshot.c"
        var $51=HEAP[$50]; //@line 1166 "_hotshot.c"
        var $52=($51)!=0; //@line 1166 "_hotshot.c"
        if ($52) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1166 "_hotshot.c"
      case 12: // $bb5
        var $53=$self_addr; //@line 1166 "_hotshot.c"
        var $54=$53+12; //@line 1166 "_hotshot.c"
        var $55=HEAP[$54]; //@line 1166 "_hotshot.c"
        var $56=$55; //@line 1166 "_hotshot.c"
        var $57=HEAP[$56]; //@line 1166 "_hotshot.c"
        var $58=($57) - 1; //@line 1166 "_hotshot.c"
        var $59=$55; //@line 1166 "_hotshot.c"
        HEAP[$59]=$58; //@line 1166 "_hotshot.c"
        var $60=$55; //@line 1166 "_hotshot.c"
        var $61=HEAP[$60]; //@line 1166 "_hotshot.c"
        var $62=($61)==0; //@line 1166 "_hotshot.c"
        if ($62) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1166 "_hotshot.c"
      case 13: // $bb6
        var $63=$self_addr; //@line 1166 "_hotshot.c"
        var $64=$63+12; //@line 1166 "_hotshot.c"
        var $65=HEAP[$64]; //@line 1166 "_hotshot.c"
        var $66=$65+4; //@line 1166 "_hotshot.c"
        var $67=HEAP[$66]; //@line 1166 "_hotshot.c"
        var $68=$67+24; //@line 1166 "_hotshot.c"
        var $69=HEAP[$68]; //@line 1166 "_hotshot.c"
        var $70=$self_addr; //@line 1166 "_hotshot.c"
        var $71=$70+12; //@line 1166 "_hotshot.c"
        var $72=HEAP[$71]; //@line 1166 "_hotshot.c"
        FUNCTION_TABLE[$69]($72); //@line 1166 "_hotshot.c"
        __label__ = 14; break; //@line 1166 "_hotshot.c"
      case 14: // $bb7
        var $73=$self_addr; //@line 1167 "_hotshot.c"
        var $74=$73; //@line 1167 "_hotshot.c"
        _PyObject_Free($74); //@line 1167 "_hotshot.c"
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
        var $self_addr_i1;
        var $self_addr_i;
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
        var $2=_PyArg_ParseTuple($1, __str32, $filename); //@line 1351 "_hotshot.c"
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
        $self_addr_i=$37;
        var $38=$self_addr_i; //@line 379 "_hotshot.c"
        var $39=$38+12; //@line 379 "_hotshot.c"
        var $40=HEAP[$39]; //@line 379 "_hotshot.c"
        var $41=_fclose($40); //@line 379 "_hotshot.c"
        var $42=$self_addr_i; //@line 380 "_hotshot.c"
        var $43=$42+12; //@line 380 "_hotshot.c"
        HEAP[$43]=0; //@line 380 "_hotshot.c"
        var $44=HEAP[_PyExc_EOFError]; //@line 381 "_hotshot.c"
        _PyErr_SetString($44, __str1); //@line 381 "_hotshot.c"
        __label__ = 14; break; //@line 1368 "_hotshot.c"
      case 7: // $bb6
        var $45=$c; //@line 1371 "_hotshot.c"
        var $46=($45)!=19; //@line 1371 "_hotshot.c"
        var $47=$self; //@line 1372 "_hotshot.c"
        if ($46) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1371 "_hotshot.c"
      case 8: // $bb7
        var $48=$47+12; //@line 1372 "_hotshot.c"
        var $49=HEAP[$48]; //@line 1372 "_hotshot.c"
        var $50=$c; //@line 1372 "_hotshot.c"
        var $51=_ungetc($50, $49); //@line 1372 "_hotshot.c"
        __label__ = 13; break; //@line 1372 "_hotshot.c"
      case 9: // $bb8
        var $52=_unpack_add_info($47); //@line 1375 "_hotshot.c"
        $err=$52; //@line 1375 "_hotshot.c"
        var $53=$err; //@line 1376 "_hotshot.c"
        var $54=($53)!=0; //@line 1376 "_hotshot.c"
        if ($54) { __label__ = 10; break; } else { __label__ = 5; break; } //@line 1376 "_hotshot.c"
      case 10: // $bb9
        var $55=$err; //@line 1377 "_hotshot.c"
        var $56=($55)==-1; //@line 1377 "_hotshot.c"
        if ($56) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1377 "_hotshot.c"
      case 11: // $bb10
        var $57=$self; //@line 1378 "_hotshot.c"
        $self_addr_i1=$57;
        var $58=$self_addr_i1; //@line 379 "_hotshot.c"
        var $59=$58+12; //@line 379 "_hotshot.c"
        var $60=HEAP[$59]; //@line 379 "_hotshot.c"
        var $61=_fclose($60); //@line 379 "_hotshot.c"
        var $62=$self_addr_i1; //@line 380 "_hotshot.c"
        var $63=$62+12; //@line 380 "_hotshot.c"
        HEAP[$63]=0; //@line 380 "_hotshot.c"
        var $64=HEAP[_PyExc_EOFError]; //@line 381 "_hotshot.c"
        _PyErr_SetString($64, __str1); //@line 381 "_hotshot.c"
        __label__ = 14; break; //@line 1378 "_hotshot.c"
      case 12: // $bb11
        var $65=HEAP[_PyExc_RuntimeError]; //@line 1380 "_hotshot.c"
        _PyErr_SetString($65, __str34); //@line 1380 "_hotshot.c"
        __label__ = 14; break; //@line 1380 "_hotshot.c"
      case 13: // $bb14
        var $66=$self; //@line 1387 "_hotshot.c"
        var $67=$66; //@line 1387 "_hotshot.c"
        $0=$67; //@line 1387 "_hotshot.c"
        __label__ = 17; break; //@line 1387 "_hotshot.c"
      case 14: // $error
        var $68=$self; //@line 1389 "_hotshot.c"
        var $69=$68; //@line 1389 "_hotshot.c"
        var $70=$69; //@line 1389 "_hotshot.c"
        var $71=HEAP[$70]; //@line 1389 "_hotshot.c"
        var $72=($71) - 1; //@line 1389 "_hotshot.c"
        var $73=$69; //@line 1389 "_hotshot.c"
        HEAP[$73]=$72; //@line 1389 "_hotshot.c"
        var $74=$69; //@line 1389 "_hotshot.c"
        var $75=HEAP[$74]; //@line 1389 "_hotshot.c"
        var $76=($75)==0; //@line 1389 "_hotshot.c"
        if ($76) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1389 "_hotshot.c"
      case 15: // $bb15
        var $77=$self; //@line 1389 "_hotshot.c"
        var $78=$77; //@line 1389 "_hotshot.c"
        var $79=$78+4; //@line 1389 "_hotshot.c"
        var $80=HEAP[$79]; //@line 1389 "_hotshot.c"
        var $81=$80+24; //@line 1389 "_hotshot.c"
        var $82=HEAP[$81]; //@line 1389 "_hotshot.c"
        var $83=$self; //@line 1389 "_hotshot.c"
        var $84=$83; //@line 1389 "_hotshot.c"
        FUNCTION_TABLE[$82]($84); //@line 1389 "_hotshot.c"
        __label__ = 16; break; //@line 1389 "_hotshot.c"
      case 16: // $bb16
        $0=0; //@line 1390 "_hotshot.c"
        __label__ = 17; break; //@line 1390 "_hotshot.c"
      case 17: // $bb17
        var $85=$0; //@line 1387 "_hotshot.c"
        $retval=$85; //@line 1387 "_hotshot.c"
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
  

  function _hotshot_profiler($unused, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4108; _memset(__stackBase__, 0, 4108);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr_i1_i;
        var $0;
        var $self_addr_i_i;
        var $1;
        var $self_addr_i;
        var $retval_i;
        var $iftmp_79_i;
        var $iftmp_78_i;
        var $iftmp_77_i;
        var $2;
        var $buffer_i;
        var $cwdbuffer_i=__stackBase__;
        var $temp_i;
        var $i_i;
        var $len_i;
        var $item_i;
        var $unused_addr;
        var $args_addr;
        var $retval;
        var $iftmp_86;
        var $3;
        var $logfilename=__stackBase__+4096;
        var $self;
        var $lineevents=__stackBase__+4100;
        var $linetimings=__stackBase__+4104;
        $unused_addr=$unused;
        $args_addr=$args;
        $self=0; //@line 1495 "_hotshot.c"
        HEAP[$lineevents]=0; //@line 1496 "_hotshot.c"
        HEAP[$linetimings]=1; //@line 1497 "_hotshot.c"
        var $4=$args_addr; //@line 1499 "_hotshot.c"
        var $5=_PyArg_ParseTuple($4, __str53, $logfilename, $lineevents, $linetimings); //@line 1499 "_hotshot.c"
        var $6=($5)!=0; //@line 1499 "_hotshot.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 51; break; } //@line 1499 "_hotshot.c"
      case 1: // $bb
        var $7=__PyObject_New(_ProfilerType); //@line 1501 "_hotshot.c"
        var $8=$7; //@line 1501 "_hotshot.c"
        $self=$8; //@line 1501 "_hotshot.c"
        var $9=$self; //@line 1502 "_hotshot.c"
        var $10=($9)==0; //@line 1502 "_hotshot.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1502 "_hotshot.c"
      case 2: // $bb1
        $3=0; //@line 1503 "_hotshot.c"
        __label__ = 52; break; //@line 1503 "_hotshot.c"
      case 3: // $bb2
        var $11=$self; //@line 1504 "_hotshot.c"
        var $12=$11+10272; //@line 1504 "_hotshot.c"
        HEAP[$12]=1; //@line 1504 "_hotshot.c"
        var $13=HEAP[$lineevents]; //@line 1505 "_hotshot.c"
        var $14=($13)!=0; //@line 1505 "_hotshot.c"
        var $15=($14); //@line 1505 "_hotshot.c"
        var $16=$self; //@line 1505 "_hotshot.c"
        var $17=$16+10264; //@line 1505 "_hotshot.c"
        HEAP[$17]=$15; //@line 1505 "_hotshot.c"
        var $18=HEAP[$lineevents]; //@line 1506 "_hotshot.c"
        var $19=($18)==0; //@line 1506 "_hotshot.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 1506 "_hotshot.c"
      case 4: // $bb3
        var $20=HEAP[$linetimings]; //@line 1506 "_hotshot.c"
        var $21=($20)==0; //@line 1506 "_hotshot.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 1506 "_hotshot.c"
      case 5: // $bb4
        $iftmp_86=1; //@line 1506 "_hotshot.c"
        __label__ = 7; break; //@line 1506 "_hotshot.c"
      case 6: // $bb5
        $iftmp_86=0; //@line 1506 "_hotshot.c"
        __label__ = 7; break; //@line 1506 "_hotshot.c"
      case 7: // $bb6
        var $22=$self; //@line 1506 "_hotshot.c"
        var $23=$22+10268; //@line 1506 "_hotshot.c"
        var $24=$iftmp_86; //@line 1506 "_hotshot.c"
        HEAP[$23]=$24; //@line 1506 "_hotshot.c"
        var $25=$self; //@line 1507 "_hotshot.c"
        var $26=$25+16; //@line 1507 "_hotshot.c"
        HEAP[$26]=0; //@line 1507 "_hotshot.c"
        var $27=$self; //@line 1508 "_hotshot.c"
        var $28=$27+10276; //@line 1508 "_hotshot.c"
        HEAP[$28]=0; //@line 1508 "_hotshot.c"
        var $29=$self; //@line 1509 "_hotshot.c"
        var $30=$29+10280; //@line 1509 "_hotshot.c"
        HEAP[$30]=0; //@line 1509 "_hotshot.c"
        var $31=$self; //@line 1510 "_hotshot.c"
        var $32=$31+10260; //@line 1510 "_hotshot.c"
        HEAP[$32]=0; //@line 1510 "_hotshot.c"
        var $33=$args_addr; //@line 1511 "_hotshot.c"
        var $34=$33; //@line 1511 "_hotshot.c"
        var $35=$34+12; //@line 1511 "_hotshot.c"
        var $36=$35; //@line 1511 "_hotshot.c"
        var $37=HEAP[$36]; //@line 1511 "_hotshot.c"
        var $38=$self; //@line 1511 "_hotshot.c"
        var $39=$38+12; //@line 1511 "_hotshot.c"
        HEAP[$39]=$37; //@line 1511 "_hotshot.c"
        var $40=$self; //@line 1512 "_hotshot.c"
        var $41=$40+12; //@line 1512 "_hotshot.c"
        var $42=HEAP[$41]; //@line 1512 "_hotshot.c"
        var $43=$42; //@line 1512 "_hotshot.c"
        var $44=HEAP[$43]; //@line 1512 "_hotshot.c"
        var $45=($44) + 1; //@line 1512 "_hotshot.c"
        var $46=$42; //@line 1512 "_hotshot.c"
        HEAP[$46]=$45; //@line 1512 "_hotshot.c"
        var $47=_PyDict_New(); //@line 1513 "_hotshot.c"
        var $48=$self; //@line 1513 "_hotshot.c"
        var $49=$48+8; //@line 1513 "_hotshot.c"
        HEAP[$49]=$47; //@line 1513 "_hotshot.c"
        var $50=$self; //@line 1514 "_hotshot.c"
        var $51=$50+8; //@line 1514 "_hotshot.c"
        var $52=HEAP[$51]; //@line 1514 "_hotshot.c"
        var $53=($52)==0; //@line 1514 "_hotshot.c"
        if ($53) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1514 "_hotshot.c"
      case 8: // $bb7
        var $54=$self; //@line 1515 "_hotshot.c"
        var $55=$54; //@line 1515 "_hotshot.c"
        var $56=$55; //@line 1515 "_hotshot.c"
        var $57=HEAP[$56]; //@line 1515 "_hotshot.c"
        var $58=($57) - 1; //@line 1515 "_hotshot.c"
        var $59=$55; //@line 1515 "_hotshot.c"
        HEAP[$59]=$58; //@line 1515 "_hotshot.c"
        var $60=$55; //@line 1515 "_hotshot.c"
        var $61=HEAP[$60]; //@line 1515 "_hotshot.c"
        var $62=($61)==0; //@line 1515 "_hotshot.c"
        if ($62) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1515 "_hotshot.c"
      case 9: // $bb8
        var $63=$self; //@line 1515 "_hotshot.c"
        var $64=$63; //@line 1515 "_hotshot.c"
        var $65=$64+4; //@line 1515 "_hotshot.c"
        var $66=HEAP[$65]; //@line 1515 "_hotshot.c"
        var $67=$66+24; //@line 1515 "_hotshot.c"
        var $68=HEAP[$67]; //@line 1515 "_hotshot.c"
        var $69=$self; //@line 1515 "_hotshot.c"
        var $70=$69; //@line 1515 "_hotshot.c"
        FUNCTION_TABLE[$68]($70); //@line 1515 "_hotshot.c"
        __label__ = 10; break; //@line 1515 "_hotshot.c"
      case 10: // $bb9
        $3=0; //@line 1516 "_hotshot.c"
        __label__ = 52; break; //@line 1516 "_hotshot.c"
      case 11: // $bb10
        var $71=HEAP[$logfilename]; //@line 1518 "_hotshot.c"
        var $72=___01fopen64_($71, __str54); //@line 1518 "_hotshot.c"
        var $73=$self; //@line 1518 "_hotshot.c"
        var $74=$73+10260; //@line 1518 "_hotshot.c"
        HEAP[$74]=$72; //@line 1518 "_hotshot.c"
        var $75=$self; //@line 1519 "_hotshot.c"
        var $76=$75+10260; //@line 1519 "_hotshot.c"
        var $77=HEAP[$76]; //@line 1519 "_hotshot.c"
        var $78=($77)==0; //@line 1519 "_hotshot.c"
        if ($78) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 1519 "_hotshot.c"
      case 12: // $bb11
        var $79=$self; //@line 1520 "_hotshot.c"
        var $80=$79; //@line 1520 "_hotshot.c"
        var $81=$80; //@line 1520 "_hotshot.c"
        var $82=HEAP[$81]; //@line 1520 "_hotshot.c"
        var $83=($82) - 1; //@line 1520 "_hotshot.c"
        var $84=$80; //@line 1520 "_hotshot.c"
        HEAP[$84]=$83; //@line 1520 "_hotshot.c"
        var $85=$80; //@line 1520 "_hotshot.c"
        var $86=HEAP[$85]; //@line 1520 "_hotshot.c"
        var $87=($86)==0; //@line 1520 "_hotshot.c"
        if ($87) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1520 "_hotshot.c"
      case 13: // $bb12
        var $88=$self; //@line 1520 "_hotshot.c"
        var $89=$88; //@line 1520 "_hotshot.c"
        var $90=$89+4; //@line 1520 "_hotshot.c"
        var $91=HEAP[$90]; //@line 1520 "_hotshot.c"
        var $92=$91+24; //@line 1520 "_hotshot.c"
        var $93=HEAP[$92]; //@line 1520 "_hotshot.c"
        var $94=$self; //@line 1520 "_hotshot.c"
        var $95=$94; //@line 1520 "_hotshot.c"
        FUNCTION_TABLE[$93]($95); //@line 1520 "_hotshot.c"
        __label__ = 14; break; //@line 1520 "_hotshot.c"
      case 14: // $bb13
        var $96=HEAP[$logfilename]; //@line 1521 "_hotshot.c"
        var $97=HEAP[_PyExc_IOError]; //@line 1521 "_hotshot.c"
        var $98=_PyErr_SetFromErrnoWithFilename($97, $96); //@line 1521 "_hotshot.c"
        $3=0; //@line 1522 "_hotshot.c"
        __label__ = 52; break; //@line 1522 "_hotshot.c"
      case 15: // $bb14
        var $99=HEAP[_timeofday_diff]; //@line 1524 "_hotshot.c"
        var $100=($99)==0; //@line 1524 "_hotshot.c"
        if ($100) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1524 "_hotshot.c"
      case 16: // $bb15
        _calibrate(); //@line 1529 "_hotshot.c"
        _calibrate(); //@line 1530 "_hotshot.c"
        _calibrate(); //@line 1531 "_hotshot.c"
        __label__ = 17; break; //@line 1531 "_hotshot.c"
      case 17: // $bb16
        var $101=$self; //@line 1533 "_hotshot.c"
        $self_addr_i=$101;
        var $102=_get_version_string(); //@line 1430 "_hotshot.c"
        $buffer_i=$102; //@line 1430 "_hotshot.c"
        var $103=($102)==0; //@line 1431 "_hotshot.c"
        if ($103) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1431 "_hotshot.c"
      case 18: // $bb_i
        var $104=_PyErr_NoMemory(); //@line 1432 "_hotshot.c"
        $2=-1; //@line 1433 "_hotshot.c"
        __label__ = 48; break; //@line 1433 "_hotshot.c"
      case 19: // $bb1_i
        var $105=$self_addr_i; //@line 1435 "_hotshot.c"
        var $106=$buffer_i; //@line 1435 "_hotshot.c"
        var $107=_pack_add_info($105, __str36, $106); //@line 1435 "_hotshot.c"
        var $108=$self_addr_i; //@line 1436 "_hotshot.c"
        var $109=$108+10272; //@line 1436 "_hotshot.c"
        var $110=HEAP[$109]; //@line 1436 "_hotshot.c"
        var $111=($110)!=0; //@line 1436 "_hotshot.c"
        if ($111) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1436 "_hotshot.c"
      case 20: // $bb2_i
        $iftmp_77_i=__str37; //@line 1436 "_hotshot.c"
        __label__ = 22; break; //@line 1436 "_hotshot.c"
      case 21: // $bb3_i
        $iftmp_77_i=__str38; //@line 1436 "_hotshot.c"
        __label__ = 22; break; //@line 1436 "_hotshot.c"
      case 22: // $bb4_i
        var $112=$self_addr_i; //@line 1436 "_hotshot.c"
        var $113=$iftmp_77_i; //@line 1436 "_hotshot.c"
        var $114=_pack_add_info($112, __str39, $113); //@line 1436 "_hotshot.c"
        var $115=$self_addr_i; //@line 1438 "_hotshot.c"
        var $116=$115+10264; //@line 1438 "_hotshot.c"
        var $117=HEAP[$116]; //@line 1438 "_hotshot.c"
        var $118=($117)!=0; //@line 1438 "_hotshot.c"
        if ($118) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1438 "_hotshot.c"
      case 23: // $bb5_i
        $iftmp_78_i=__str37; //@line 1438 "_hotshot.c"
        __label__ = 25; break; //@line 1438 "_hotshot.c"
      case 24: // $bb6_i
        $iftmp_78_i=__str38; //@line 1438 "_hotshot.c"
        __label__ = 25; break; //@line 1438 "_hotshot.c"
      case 25: // $bb7_i
        var $119=$self_addr_i; //@line 1438 "_hotshot.c"
        var $120=$iftmp_78_i; //@line 1438 "_hotshot.c"
        var $121=_pack_add_info($119, __str40, $120); //@line 1438 "_hotshot.c"
        var $122=$self_addr_i; //@line 1440 "_hotshot.c"
        var $123=$122+10268; //@line 1440 "_hotshot.c"
        var $124=HEAP[$123]; //@line 1440 "_hotshot.c"
        var $125=($124)!=0; //@line 1440 "_hotshot.c"
        if ($125) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1440 "_hotshot.c"
      case 26: // $bb8_i
        $iftmp_79_i=__str37; //@line 1440 "_hotshot.c"
        __label__ = 28; break; //@line 1440 "_hotshot.c"
      case 27: // $bb9_i
        $iftmp_79_i=__str38; //@line 1440 "_hotshot.c"
        __label__ = 28; break; //@line 1440 "_hotshot.c"
      case 28: // $bb10_i
        var $126=$self_addr_i; //@line 1440 "_hotshot.c"
        var $127=$iftmp_79_i; //@line 1440 "_hotshot.c"
        var $128=_pack_add_info($126, __str41, $127); //@line 1440 "_hotshot.c"
        var $129=_Py_GetPlatform(); //@line 1442 "_hotshot.c"
        var $130=$self_addr_i; //@line 1442 "_hotshot.c"
        var $131=_pack_add_info($130, __str42, $129); //@line 1442 "_hotshot.c"
        var $132=_Py_GetProgramFullPath(); //@line 1443 "_hotshot.c"
        var $133=$self_addr_i; //@line 1443 "_hotshot.c"
        var $134=_pack_add_info($133, __str43, $132); //@line 1443 "_hotshot.c"
        var $135=$buffer_i; //@line 1444 "_hotshot.c"
        _free($135); //@line 1444 "_hotshot.c"
        var $136=_Py_GetVersion(); //@line 1445 "_hotshot.c"
        $buffer_i=$136; //@line 1445 "_hotshot.c"
        var $137=($136)==0; //@line 1446 "_hotshot.c"
        if ($137) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1446 "_hotshot.c"
      case 29: // $bb11_i
        _PyErr_Clear(); //@line 1447 "_hotshot.c"
        __label__ = 31; break; //@line 1447 "_hotshot.c"
      case 30: // $bb12_i
        var $138=$self_addr_i; //@line 1449 "_hotshot.c"
        var $139=$buffer_i; //@line 1449 "_hotshot.c"
        var $140=_pack_add_info($138, __str44, $139); //@line 1449 "_hotshot.c"
        __label__ = 31; break; //@line 1449 "_hotshot.c"
      case 31: // $bb13_i
        var $141=HEAP[_rusage_diff]; //@line 1455 "_hotshot.c"
        var $cwdbuffer14_i=$cwdbuffer_i; //@line 1455 "_hotshot.c"
        var $142=_PyOS_snprintf($cwdbuffer14_i, 4096, __str45, $141); //@line 1455 "_hotshot.c"
        var $143=$self_addr_i; //@line 1456 "_hotshot.c"
        var $cwdbuffer15_i=$cwdbuffer_i; //@line 1456 "_hotshot.c"
        var $144=_pack_add_info($143, __str46, $cwdbuffer15_i); //@line 1456 "_hotshot.c"
        var $145=HEAP[_timeofday_diff]; //@line 1457 "_hotshot.c"
        var $cwdbuffer16_i=$cwdbuffer_i; //@line 1457 "_hotshot.c"
        var $146=_PyOS_snprintf($cwdbuffer16_i, 4096, __str45, $145); //@line 1457 "_hotshot.c"
        var $147=$self_addr_i; //@line 1458 "_hotshot.c"
        var $cwdbuffer17_i=$cwdbuffer_i; //@line 1458 "_hotshot.c"
        var $148=_pack_add_info($147, __str47, $cwdbuffer17_i); //@line 1458 "_hotshot.c"
        var $cwdbuffer18_i=$cwdbuffer_i; //@line 1461 "_hotshot.c"
        var $149=_getcwd($cwdbuffer18_i, 4096); //@line 1461 "_hotshot.c"
        var $150=$self_addr_i; //@line 1461 "_hotshot.c"
        var $151=_pack_add_info($150, __str48, $149); //@line 1461 "_hotshot.c"
        var $152=_PySys_GetObject(__str49); //@line 1464 "_hotshot.c"
        $temp_i=$152; //@line 1464 "_hotshot.c"
        var $153=($152)==0; //@line 1465 "_hotshot.c"
        if ($153) { __label__ = 33; break; } else { __label__ = 32; break; } //@line 1465 "_hotshot.c"
      case 32: // $bb19_i
        var $154=$temp_i; //@line 1465 "_hotshot.c"
        var $155=$154+4; //@line 1465 "_hotshot.c"
        var $156=HEAP[$155]; //@line 1465 "_hotshot.c"
        var $157=$156+84; //@line 1465 "_hotshot.c"
        var $158=HEAP[$157]; //@line 1465 "_hotshot.c"
        var $159=($158) & 33554432; //@line 1465 "_hotshot.c"
        var $160=($159)==0; //@line 1465 "_hotshot.c"
        if ($160) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1465 "_hotshot.c"
      case 33: // $bb20_i
        var $161=HEAP[_PyExc_RuntimeError]; //@line 1466 "_hotshot.c"
        _PyErr_SetString($161, __str50); //@line 1466 "_hotshot.c"
        $2=-1; //@line 1467 "_hotshot.c"
        __label__ = 48; break; //@line 1467 "_hotshot.c"
      case 34: // $bb21_i
        var $162=$temp_i; //@line 1469 "_hotshot.c"
        var $163=$162; //@line 1469 "_hotshot.c"
        var $164=$163+8; //@line 1469 "_hotshot.c"
        var $165=HEAP[$164]; //@line 1469 "_hotshot.c"
        $len_i=$165; //@line 1469 "_hotshot.c"
        $i_i=0; //@line 1470 "_hotshot.c"
        var $166=$i_i; //@line 1470 "_hotshot.c"
        var $167=$len_i; //@line 1470 "_hotshot.c"
        var $168=($166) < ($167); //@line 1470 "_hotshot.c"
        if ($168) { __label__ = 35; break; } else { __label__ = 39; break; } //@line 1470 "_hotshot.c"
      case 35: // $bb22_i
        var $169=$temp_i; //@line 1471 "_hotshot.c"
        var $170=$169; //@line 1471 "_hotshot.c"
        var $171=$170+12; //@line 1471 "_hotshot.c"
        var $172=HEAP[$171]; //@line 1471 "_hotshot.c"
        var $173=$i_i; //@line 1471 "_hotshot.c"
        var $174=$172+4*$173; //@line 1471 "_hotshot.c"
        var $175=HEAP[$174]; //@line 1471 "_hotshot.c"
        $item_i=$175; //@line 1471 "_hotshot.c"
        var $176=$item_i; //@line 1472 "_hotshot.c"
        var $177=_PyString_AsString($176); //@line 1472 "_hotshot.c"
        $buffer_i=$177; //@line 1472 "_hotshot.c"
        var $178=($177)==0; //@line 1473 "_hotshot.c"
        var $179=$self_addr_i; //@line 1474 "_hotshot.c"
        if ($178) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1473 "_hotshot.c"
      case 36: // $bb23_i
        var $180=_pack_add_info($179, __str51, __str52); //@line 1474 "_hotshot.c"
        _PyErr_Clear(); //@line 1475 "_hotshot.c"
        __label__ = 38; break; //@line 1475 "_hotshot.c"
      case 37: // $bb24_i
        var $181=$buffer_i; //@line 1478 "_hotshot.c"
        var $182=_pack_add_info($179, __str51, $181); //@line 1478 "_hotshot.c"
        __label__ = 38; break; //@line 1478 "_hotshot.c"
      case 38: // $bb25_i
        var $183=$i_i; //@line 1470 "_hotshot.c"
        var $184=($183) + 1; //@line 1470 "_hotshot.c"
        $i_i=$184; //@line 1470 "_hotshot.c"
        var $185=$i_i; //@line 1470 "_hotshot.c"
        var $186=$len_i; //@line 1470 "_hotshot.c"
        var $187=($185) < ($186); //@line 1470 "_hotshot.c"
        if ($187) { __label__ = 35; break; } else { __label__ = 39; break; } //@line 1470 "_hotshot.c"
      case 39: // $bb27_i
        var $188=$self_addr_i; //@line 1481 "_hotshot.c"
        $self_addr_i_i=$188;
        var $189=$self_addr_i_i; //@line 706 "_hotshot.c"
        var $190=$189+16; //@line 706 "_hotshot.c"
        var $191=HEAP[$190]; //@line 706 "_hotshot.c"
        var $192=($191) + 2; //@line 706 "_hotshot.c"
        var $193=($192) > 10239; //@line 706 "_hotshot.c"
        if ($193) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 706 "_hotshot.c"
      case 40: // $bb_i_i
        var $194=$self_addr_i_i; //@line 707 "_hotshot.c"
        var $195=_flush_data($194); //@line 707 "_hotshot.c"
        var $196=($195) < 0; //@line 707 "_hotshot.c"
        if ($196) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 707 "_hotshot.c"
      case 41: // $bb1_i_i
        $1=-1; //@line 708 "_hotshot.c"
        __label__ = 43; break; //@line 708 "_hotshot.c"
      case 42: // $bb2_i_i
        var $197=$self_addr_i_i; //@line 710 "_hotshot.c"
        var $198=$197+16; //@line 710 "_hotshot.c"
        var $199=HEAP[$198]; //@line 710 "_hotshot.c"
        var $200=$self_addr_i_i; //@line 710 "_hotshot.c"
        var $201=$200+20; //@line 710 "_hotshot.c"
        var $202=$201+$199; //@line 710 "_hotshot.c"
        HEAP[$202]=83; //@line 710 "_hotshot.c"
        var $203=$self_addr_i_i; //@line 711 "_hotshot.c"
        var $204=$203+16; //@line 711 "_hotshot.c"
        var $205=HEAP[$204]; //@line 711 "_hotshot.c"
        var $206=($205) + 1; //@line 711 "_hotshot.c"
        var $207=$self_addr_i_i; //@line 711 "_hotshot.c"
        var $208=$207+10272; //@line 711 "_hotshot.c"
        var $209=HEAP[$208]; //@line 711 "_hotshot.c"
        var $210=($209)!=0; //@line 711 "_hotshot.c"
        var $211=($210); //@line 711 "_hotshot.c"
        var $212=$self_addr_i_i; //@line 711 "_hotshot.c"
        var $213=$212+20; //@line 711 "_hotshot.c"
        var $214=$213+$206; //@line 711 "_hotshot.c"
        HEAP[$214]=$211; //@line 711 "_hotshot.c"
        var $215=$self_addr_i_i; //@line 712 "_hotshot.c"
        var $216=$215+16; //@line 712 "_hotshot.c"
        var $217=HEAP[$216]; //@line 712 "_hotshot.c"
        var $218=($217) + 2; //@line 712 "_hotshot.c"
        var $219=$self_addr_i_i; //@line 712 "_hotshot.c"
        var $220=$219+16; //@line 712 "_hotshot.c"
        HEAP[$220]=$218; //@line 712 "_hotshot.c"
        $1=0; //@line 713 "_hotshot.c"
        __label__ = 43; break; //@line 713 "_hotshot.c"
      case 43: // $pack_frame_times_exit_i
        var $221=$self_addr_i; //@line 1482 "_hotshot.c"
        $self_addr_i1_i=$221;
        var $222=$self_addr_i1_i; //@line 693 "_hotshot.c"
        var $223=$222+16; //@line 693 "_hotshot.c"
        var $224=HEAP[$223]; //@line 693 "_hotshot.c"
        var $225=($224) + 2; //@line 693 "_hotshot.c"
        var $226=($225) > 10239; //@line 693 "_hotshot.c"
        if ($226) { __label__ = 44; break; } else { __label__ = 46; break; } //@line 693 "_hotshot.c"
      case 44: // $bb_i2_i
        var $227=$self_addr_i1_i; //@line 694 "_hotshot.c"
        var $228=_flush_data($227); //@line 694 "_hotshot.c"
        var $229=($228) < 0; //@line 694 "_hotshot.c"
        if ($229) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 694 "_hotshot.c"
      case 45: // $bb1_i3_i
        $0=-1; //@line 695 "_hotshot.c"
        __label__ = 47; break; //@line 695 "_hotshot.c"
      case 46: // $bb2_i4_i
        var $230=$self_addr_i1_i; //@line 697 "_hotshot.c"
        var $231=$230+16; //@line 697 "_hotshot.c"
        var $232=HEAP[$231]; //@line 697 "_hotshot.c"
        var $233=$self_addr_i1_i; //@line 697 "_hotshot.c"
        var $234=$233+20; //@line 697 "_hotshot.c"
        var $235=$234+$232; //@line 697 "_hotshot.c"
        HEAP[$235]=51; //@line 697 "_hotshot.c"
        var $236=$self_addr_i1_i; //@line 698 "_hotshot.c"
        var $237=$236+16; //@line 698 "_hotshot.c"
        var $238=HEAP[$237]; //@line 698 "_hotshot.c"
        var $239=($238) + 1; //@line 698 "_hotshot.c"
        var $240=$self_addr_i1_i; //@line 698 "_hotshot.c"
        var $241=$240+10268; //@line 698 "_hotshot.c"
        var $242=HEAP[$241]; //@line 698 "_hotshot.c"
        var $243=($242)!=0; //@line 698 "_hotshot.c"
        var $244=($243); //@line 698 "_hotshot.c"
        var $245=$self_addr_i1_i; //@line 698 "_hotshot.c"
        var $246=$245+20; //@line 698 "_hotshot.c"
        var $247=$246+$239; //@line 698 "_hotshot.c"
        HEAP[$247]=$244; //@line 698 "_hotshot.c"
        var $248=$self_addr_i1_i; //@line 699 "_hotshot.c"
        var $249=$248+16; //@line 699 "_hotshot.c"
        var $250=HEAP[$249]; //@line 699 "_hotshot.c"
        var $251=($250) + 2; //@line 699 "_hotshot.c"
        var $252=$self_addr_i1_i; //@line 699 "_hotshot.c"
        var $253=$252+16; //@line 699 "_hotshot.c"
        HEAP[$253]=$251; //@line 699 "_hotshot.c"
        $0=0; //@line 700 "_hotshot.c"
        __label__ = 47; break; //@line 700 "_hotshot.c"
      case 47: // $write_header_exit
        $2=0; //@line 1484 "_hotshot.c"
        $retval_i=0; //@line 1433 "_hotshot.c"
        __label__ = 51; break;
      case 48: // $bb17
        $retval_i=-1; //@line 1433 "_hotshot.c"
        var $254=$self; //@line 1535 "_hotshot.c"
        var $255=$254; //@line 1535 "_hotshot.c"
        var $256=$255; //@line 1535 "_hotshot.c"
        var $257=HEAP[$256]; //@line 1535 "_hotshot.c"
        var $258=($257) - 1; //@line 1535 "_hotshot.c"
        var $259=$255; //@line 1535 "_hotshot.c"
        HEAP[$259]=$258; //@line 1535 "_hotshot.c"
        var $260=$255; //@line 1535 "_hotshot.c"
        var $261=HEAP[$260]; //@line 1535 "_hotshot.c"
        var $262=($261)==0; //@line 1535 "_hotshot.c"
        if ($262) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 1535 "_hotshot.c"
      case 49: // $bb18
        var $263=$self; //@line 1535 "_hotshot.c"
        var $264=$263; //@line 1535 "_hotshot.c"
        var $265=$264+4; //@line 1535 "_hotshot.c"
        var $266=HEAP[$265]; //@line 1535 "_hotshot.c"
        var $267=$266+24; //@line 1535 "_hotshot.c"
        var $268=HEAP[$267]; //@line 1535 "_hotshot.c"
        var $269=$self; //@line 1535 "_hotshot.c"
        var $270=$269; //@line 1535 "_hotshot.c"
        FUNCTION_TABLE[$268]($270); //@line 1535 "_hotshot.c"
        __label__ = 50; break; //@line 1535 "_hotshot.c"
      case 50: // $bb19
        $self=0; //@line 1536 "_hotshot.c"
        __label__ = 51; break; //@line 1536 "_hotshot.c"
      case 51: // $bb20
        var $271=$self; //@line 1539 "_hotshot.c"
        var $272=$271; //@line 1539 "_hotshot.c"
        $3=$272; //@line 1539 "_hotshot.c"
        __label__ = 52; break; //@line 1539 "_hotshot.c"
      case 52: // $bb21
        var $273=$3; //@line 1503 "_hotshot.c"
        $retval=$273; //@line 1503 "_hotshot.c"
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
        var $2=_PyArg_ParseTuple($1, __str55, $logfilename); //@line 1553 "_hotshot.c"
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
        var $5=_Py_BuildValue(__str56, $4, $3); //@line 1593 "_hotshot.c"
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

