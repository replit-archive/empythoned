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
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_hs_time___SIZE = 8; // %struct.hs_time
  
var $struct_rusage___SIZE = 72; // %struct.rusage
  var $struct_rusage___FLATTENER = [0,8,16,20,24,28,32,36,40,44,48,52,56,60,64,68];
var $struct_timezone___SIZE = 8; // %struct.timezone
  
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
var _rcsid_9655;
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
        var $1=HEAP[$self_addr]; //@line 119 "_hotshot.c"
        var $2=(($1+12)&4294967295); //@line 119 "_hotshot.c"
        var $3=HEAP[$2]; //@line 119 "_hotshot.c"
        var $4=($3)!=0; //@line 119 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 119 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 120 "_hotshot.c"
        var $6=(($5+12)&4294967295); //@line 120 "_hotshot.c"
        var $7=HEAP[$6]; //@line 120 "_hotshot.c"
        var $8=_fclose($7); //@line 120 "_hotshot.c"
        var $9=HEAP[$self_addr]; //@line 121 "_hotshot.c"
        var $10=(($9+12)&4294967295); //@line 121 "_hotshot.c"
        HEAP[$10]=0; //@line 121 "_hotshot.c"
        __label__ = 2; break; //@line 121 "_hotshot.c"
      case 2: // $bb1
        var $11=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 123 "_hotshot.c"
        var $12=((($11) + 1)&4294967295); //@line 123 "_hotshot.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$12; //@line 123 "_hotshot.c"
        HEAP[$0]=__Py_NoneStruct; //@line 125 "_hotshot.c"
        var $13=HEAP[$0]; //@line 125 "_hotshot.c"
        HEAP[$retval]=$13; //@line 125 "_hotshot.c"
        __label__ = 3; break; //@line 125 "_hotshot.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 125 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 125 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _logreader_fileno($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 136 "_hotshot.c"
        var $2=(($1+12)&4294967295); //@line 136 "_hotshot.c"
        var $3=HEAP[$2]; //@line 136 "_hotshot.c"
        var $4=($3)==0; //@line 136 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 136 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 137 "_hotshot.c"
        _PyErr_SetString($5, ((__str)&4294967295)); //@line 137 "_hotshot.c"
        HEAP[$0]=0; //@line 139 "_hotshot.c"
        __label__ = 3; break; //@line 139 "_hotshot.c"
      case 2: // $bb1
        var $6=HEAP[$self_addr]; //@line 141 "_hotshot.c"
        var $7=(($6+12)&4294967295); //@line 141 "_hotshot.c"
        var $8=HEAP[$7]; //@line 141 "_hotshot.c"
        var $9=_fileno($8); //@line 141 "_hotshot.c"
        var $10=_PyInt_FromLong($9); //@line 141 "_hotshot.c"
        HEAP[$0]=$10; //@line 141 "_hotshot.c"
        __label__ = 3; break; //@line 141 "_hotshot.c"
      case 3: // $bb2
        var $11=HEAP[$0]; //@line 139 "_hotshot.c"
        HEAP[$retval]=$11; //@line 139 "_hotshot.c"
        __label__ = 4; break; //@line 139 "_hotshot.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 139 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 139 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _unpack_packed_int($self, $pvalue, $discard) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $pvalue_addr=__stackBase__+4;
        var $discard_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $c=__stackBase__+20;
        var $accum=__stackBase__+24;
        var $bits=__stackBase__+28;
        var $cont=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$pvalue_addr]=$pvalue;
        HEAP[$discard_addr]=$discard;
        HEAP[$accum]=0; //@line 281 "_hotshot.c"
        HEAP[$bits]=0; //@line 282 "_hotshot.c"
        __label__ = 1; break; //@line 282 "_hotshot.c"
      case 1: // $bb
        var $1=HEAP[$self_addr]; //@line 287 "_hotshot.c"
        var $2=(($1+12)&4294967295); //@line 287 "_hotshot.c"
        var $3=HEAP[$2]; //@line 287 "_hotshot.c"
        var $4=_fgetc($3); //@line 287 "_hotshot.c"
        HEAP[$c]=$4; //@line 287 "_hotshot.c"
        var $5=HEAP[$c]; //@line 287 "_hotshot.c"
        var $6=((($5))|0)==-1; //@line 287 "_hotshot.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 287 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 288 "_hotshot.c"
        __label__ = 5; break; //@line 288 "_hotshot.c"
      case 3: // $bb2
        var $7=HEAP[$c]; //@line 289 "_hotshot.c"
        var $8=($7) & 127; //@line 289 "_hotshot.c"
        var $9=HEAP[$discard_addr]; //@line 289 "_hotshot.c"
        var $10=((($8))|0) >> ((($9))|0); //@line 289 "_hotshot.c"
        var $11=HEAP[$bits]; //@line 289 "_hotshot.c"
        var $12=($10) << ($11); //@line 289 "_hotshot.c"
        var $13=HEAP[$accum]; //@line 289 "_hotshot.c"
        var $14=($12) | ($13); //@line 289 "_hotshot.c"
        HEAP[$accum]=$14; //@line 289 "_hotshot.c"
        var $15=HEAP[$discard_addr]; //@line 290 "_hotshot.c"
        var $16=((7 - ($15))&4294967295); //@line 290 "_hotshot.c"
        var $17=HEAP[$bits]; //@line 290 "_hotshot.c"
        var $18=((($16) + ($17))&4294967295); //@line 290 "_hotshot.c"
        HEAP[$bits]=$18; //@line 290 "_hotshot.c"
        var $19=HEAP[$c]; //@line 291 "_hotshot.c"
        var $20=($19) & 128; //@line 291 "_hotshot.c"
        HEAP[$cont]=$20; //@line 291 "_hotshot.c"
        HEAP[$discard_addr]=0; //@line 292 "_hotshot.c"
        var $21=HEAP[$cont]; //@line 293 "_hotshot.c"
        var $22=((($21))|0)!=0; //@line 293 "_hotshot.c"
        if ($22) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 293 "_hotshot.c"
      case 4: // $bb3
        var $23=HEAP[$pvalue_addr]; //@line 295 "_hotshot.c"
        var $24=HEAP[$accum]; //@line 295 "_hotshot.c"
        HEAP[$23]=$24; //@line 295 "_hotshot.c"
        HEAP[$0]=0; //@line 297 "_hotshot.c"
        __label__ = 5; break; //@line 297 "_hotshot.c"
      case 5: // $bb4
        var $25=HEAP[$0]; //@line 288 "_hotshot.c"
        HEAP[$retval]=$25; //@line 288 "_hotshot.c"
        __label__ = 6; break; //@line 288 "_hotshot.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 288 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 288 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _unpack_string($self, $pvalue) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $pvalue_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $len=__stackBase__+20;
        var $err=__stackBase__+24;
        var $ch=__stackBase__+28;
        var $buf=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$pvalue_addr]=$pvalue;
        var $1=HEAP[$self_addr]; //@line 312 "_hotshot.c"
        var $2=_unpack_packed_int($1, $len, 0); //@line 312 "_hotshot.c"
        HEAP[$err]=$2; //@line 312 "_hotshot.c"
        var $3=HEAP[$err]; //@line 312 "_hotshot.c"
        var $4=((($3))|0)!=0; //@line 312 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 312 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[$err]; //@line 313 "_hotshot.c"
        HEAP[$0]=$5; //@line 313 "_hotshot.c"
        __label__ = 12; break; //@line 313 "_hotshot.c"
      case 2: // $bb1
        var $6=HEAP[$len]; //@line 315 "_hotshot.c"
        var $7=_malloc($6); //@line 315 "_hotshot.c"
        HEAP[$buf]=$7; //@line 315 "_hotshot.c"
        var $8=HEAP[$buf]; //@line 316 "_hotshot.c"
        var $9=($8)==0; //@line 316 "_hotshot.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 316 "_hotshot.c"
      case 3: // $bb2
        var $10=_PyErr_NoMemory(); //@line 317 "_hotshot.c"
        HEAP[$0]=-2; //@line 318 "_hotshot.c"
        __label__ = 12; break; //@line 318 "_hotshot.c"
      case 4: // $bb3
        HEAP[$i]=0; //@line 321 "_hotshot.c"
        __label__ = 8; break; //@line 321 "_hotshot.c"
      case 5: // $bb4
        var $11=HEAP[$self_addr]; //@line 322 "_hotshot.c"
        var $12=(($11+12)&4294967295); //@line 322 "_hotshot.c"
        var $13=HEAP[$12]; //@line 322 "_hotshot.c"
        var $14=_fgetc($13); //@line 322 "_hotshot.c"
        HEAP[$ch]=$14; //@line 322 "_hotshot.c"
        var $15=HEAP[$ch]; //@line 323 "_hotshot.c"
        var $16=((($15)) & 255); //@line 323 "_hotshot.c"
        var $17=HEAP[$buf]; //@line 323 "_hotshot.c"
        var $18=HEAP[$i]; //@line 323 "_hotshot.c"
        var $19=(($17+$18)&4294967295); //@line 323 "_hotshot.c"
        HEAP[$19]=$16; //@line 323 "_hotshot.c"
        var $20=HEAP[$ch]; //@line 324 "_hotshot.c"
        var $21=((($20))|0)==-1; //@line 324 "_hotshot.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 324 "_hotshot.c"
      case 6: // $bb5
        var $22=HEAP[$buf]; //@line 325 "_hotshot.c"
        _free($22); //@line 325 "_hotshot.c"
        HEAP[$0]=-1; //@line 326 "_hotshot.c"
        __label__ = 12; break; //@line 326 "_hotshot.c"
      case 7: // $bb6
        var $23=HEAP[$i]; //@line 321 "_hotshot.c"
        var $24=((($23) + 1)&4294967295); //@line 321 "_hotshot.c"
        HEAP[$i]=$24; //@line 321 "_hotshot.c"
        __label__ = 8; break; //@line 321 "_hotshot.c"
      case 8: // $bb7
        var $25=HEAP[$len]; //@line 321 "_hotshot.c"
        var $26=HEAP[$i]; //@line 321 "_hotshot.c"
        var $27=((($26))|0) < ((($25))|0); //@line 321 "_hotshot.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 321 "_hotshot.c"
      case 9: // $bb8
        var $28=HEAP[$len]; //@line 329 "_hotshot.c"
        var $29=HEAP[$buf]; //@line 329 "_hotshot.c"
        var $30=_PyString_FromStringAndSize($29, $28); //@line 329 "_hotshot.c"
        var $31=HEAP[$pvalue_addr]; //@line 329 "_hotshot.c"
        HEAP[$31]=$30; //@line 329 "_hotshot.c"
        var $32=HEAP[$buf]; //@line 330 "_hotshot.c"
        _free($32); //@line 330 "_hotshot.c"
        var $33=HEAP[$pvalue_addr]; //@line 331 "_hotshot.c"
        var $34=HEAP[$33]; //@line 331 "_hotshot.c"
        var $35=($34)==0; //@line 331 "_hotshot.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 331 "_hotshot.c"
      case 10: // $bb9
        HEAP[$0]=-2; //@line 332 "_hotshot.c"
        __label__ = 12; break; //@line 332 "_hotshot.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 334 "_hotshot.c"
        __label__ = 12; break; //@line 334 "_hotshot.c"
      case 12: // $bb11
        var $36=HEAP[$0]; //@line 313 "_hotshot.c"
        HEAP[$retval]=$36; //@line 313 "_hotshot.c"
        __label__ = 13; break; //@line 313 "_hotshot.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 313 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 313 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _unpack_add_info($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $key=__stackBase__+12;
        var $value=__stackBase__+16;
        var $err=__stackBase__+20;
        var $list=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$value]=0; //@line 342 "_hotshot.c"
        var $1=HEAP[$self_addr]; //@line 345 "_hotshot.c"
        var $2=_unpack_string($1, $key); //@line 345 "_hotshot.c"
        HEAP[$err]=$2; //@line 345 "_hotshot.c"
        var $3=HEAP[$err]; //@line 346 "_hotshot.c"
        var $4=((($3))|0)==0; //@line 346 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 16; break; } //@line 346 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 347 "_hotshot.c"
        var $6=_unpack_string($5, $value); //@line 347 "_hotshot.c"
        HEAP[$err]=$6; //@line 347 "_hotshot.c"
        var $7=HEAP[$err]; //@line 348 "_hotshot.c"
        var $8=((($7))|0)!=0; //@line 348 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 348 "_hotshot.c"
      case 2: // $bb1
        var $9=HEAP[$key]; //@line 349 "_hotshot.c"
        var $10=(($9)&4294967295); //@line 349 "_hotshot.c"
        var $11=HEAP[$10]; //@line 349 "_hotshot.c"
        var $12=((($11) - 1)&4294967295); //@line 349 "_hotshot.c"
        var $13=(($9)&4294967295); //@line 349 "_hotshot.c"
        HEAP[$13]=$12; //@line 349 "_hotshot.c"
        var $14=(($9)&4294967295); //@line 349 "_hotshot.c"
        var $15=HEAP[$14]; //@line 349 "_hotshot.c"
        var $16=((($15))|0)==0; //@line 349 "_hotshot.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 349 "_hotshot.c"
      case 3: // $bb2
        var $17=HEAP[$key]; //@line 349 "_hotshot.c"
        var $18=(($17+4)&4294967295); //@line 349 "_hotshot.c"
        var $19=HEAP[$18]; //@line 349 "_hotshot.c"
        var $20=(($19+24)&4294967295); //@line 349 "_hotshot.c"
        var $21=HEAP[$20]; //@line 349 "_hotshot.c"
        var $22=HEAP[$key]; //@line 349 "_hotshot.c"
        FUNCTION_TABLE[$21]($22); //@line 349 "_hotshot.c"
        __label__ = 4; break; //@line 349 "_hotshot.c"
      case 4: // $bb3
        __label__ = 16; break; //@line 349 "_hotshot.c"
      case 5: // $bb4
        var $23=HEAP[$key]; //@line 351 "_hotshot.c"
        var $24=HEAP[$self_addr]; //@line 351 "_hotshot.c"
        var $25=(($24+8)&4294967295); //@line 351 "_hotshot.c"
        var $26=HEAP[$25]; //@line 351 "_hotshot.c"
        var $27=_PyDict_GetItem($26, $23); //@line 351 "_hotshot.c"
        HEAP[$list]=$27; //@line 351 "_hotshot.c"
        var $28=HEAP[$list]; //@line 352 "_hotshot.c"
        var $29=($28)==0; //@line 352 "_hotshot.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 14; break; } //@line 352 "_hotshot.c"
      case 6: // $bb5
        var $30=_PyList_New(0); //@line 353 "_hotshot.c"
        HEAP[$list]=$30; //@line 353 "_hotshot.c"
        var $31=HEAP[$list]; //@line 354 "_hotshot.c"
        var $32=($31)==0; //@line 354 "_hotshot.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 354 "_hotshot.c"
      case 7: // $bb6
        HEAP[$err]=-2; //@line 355 "_hotshot.c"
        __label__ = 16; break; //@line 355 "_hotshot.c"
      case 8: // $bb7
        var $33=HEAP[$key]; //@line 358 "_hotshot.c"
        var $34=HEAP[$self_addr]; //@line 358 "_hotshot.c"
        var $35=(($34+8)&4294967295); //@line 358 "_hotshot.c"
        var $36=HEAP[$35]; //@line 358 "_hotshot.c"
        var $37=HEAP[$list]; //@line 358 "_hotshot.c"
        var $38=_PyDict_SetItem($36, $33, $37); //@line 358 "_hotshot.c"
        var $39=((($38))|0)!=0; //@line 358 "_hotshot.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 358 "_hotshot.c"
      case 9: // $bb8
        var $40=HEAP[$list]; //@line 359 "_hotshot.c"
        var $41=(($40)&4294967295); //@line 359 "_hotshot.c"
        var $42=HEAP[$41]; //@line 359 "_hotshot.c"
        var $43=((($42) - 1)&4294967295); //@line 359 "_hotshot.c"
        var $44=HEAP[$list]; //@line 359 "_hotshot.c"
        var $45=(($44)&4294967295); //@line 359 "_hotshot.c"
        HEAP[$45]=$43; //@line 359 "_hotshot.c"
        var $46=HEAP[$list]; //@line 359 "_hotshot.c"
        var $47=(($46)&4294967295); //@line 359 "_hotshot.c"
        var $48=HEAP[$47]; //@line 359 "_hotshot.c"
        var $49=((($48))|0)==0; //@line 359 "_hotshot.c"
        if ($49) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 359 "_hotshot.c"
      case 10: // $bb9
        var $50=HEAP[$list]; //@line 359 "_hotshot.c"
        var $51=(($50+4)&4294967295); //@line 359 "_hotshot.c"
        var $52=HEAP[$51]; //@line 359 "_hotshot.c"
        var $53=(($52+24)&4294967295); //@line 359 "_hotshot.c"
        var $54=HEAP[$53]; //@line 359 "_hotshot.c"
        var $55=HEAP[$list]; //@line 359 "_hotshot.c"
        FUNCTION_TABLE[$54]($55); //@line 359 "_hotshot.c"
        __label__ = 11; break; //@line 359 "_hotshot.c"
      case 11: // $bb10
        HEAP[$err]=-2; //@line 360 "_hotshot.c"
        __label__ = 16; break; //@line 360 "_hotshot.c"
      case 12: // $bb11
        var $56=HEAP[$list]; //@line 363 "_hotshot.c"
        var $57=(($56)&4294967295); //@line 363 "_hotshot.c"
        var $58=HEAP[$57]; //@line 363 "_hotshot.c"
        var $59=((($58) - 1)&4294967295); //@line 363 "_hotshot.c"
        var $60=HEAP[$list]; //@line 363 "_hotshot.c"
        var $61=(($60)&4294967295); //@line 363 "_hotshot.c"
        HEAP[$61]=$59; //@line 363 "_hotshot.c"
        var $62=HEAP[$list]; //@line 363 "_hotshot.c"
        var $63=(($62)&4294967295); //@line 363 "_hotshot.c"
        var $64=HEAP[$63]; //@line 363 "_hotshot.c"
        var $65=((($64))|0)==0; //@line 363 "_hotshot.c"
        if ($65) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 363 "_hotshot.c"
      case 13: // $bb12
        var $66=HEAP[$list]; //@line 363 "_hotshot.c"
        var $67=(($66+4)&4294967295); //@line 363 "_hotshot.c"
        var $68=HEAP[$67]; //@line 363 "_hotshot.c"
        var $69=(($68+24)&4294967295); //@line 363 "_hotshot.c"
        var $70=HEAP[$69]; //@line 363 "_hotshot.c"
        var $71=HEAP[$list]; //@line 363 "_hotshot.c"
        FUNCTION_TABLE[$70]($71); //@line 363 "_hotshot.c"
        __label__ = 14; break; //@line 363 "_hotshot.c"
      case 14: // $bb13
        var $72=HEAP[$value]; //@line 365 "_hotshot.c"
        var $73=HEAP[$list]; //@line 365 "_hotshot.c"
        var $74=_PyList_Append($73, $72); //@line 365 "_hotshot.c"
        var $75=((($74))|0)!=0; //@line 365 "_hotshot.c"
        if ($75) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 365 "_hotshot.c"
      case 15: // $bb14
        HEAP[$err]=-2; //@line 366 "_hotshot.c"
        __label__ = 16; break; //@line 369 "_hotshot.c"
      case 16: // $finally
        var $76=HEAP[$key]; //@line 370 "_hotshot.c"
        var $77=($76)!=0; //@line 370 "_hotshot.c"
        if ($77) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 370 "_hotshot.c"
      case 17: // $bb15
        var $78=HEAP[$key]; //@line 370 "_hotshot.c"
        var $79=(($78)&4294967295); //@line 370 "_hotshot.c"
        var $80=HEAP[$79]; //@line 370 "_hotshot.c"
        var $81=((($80) - 1)&4294967295); //@line 370 "_hotshot.c"
        var $82=(($78)&4294967295); //@line 370 "_hotshot.c"
        HEAP[$82]=$81; //@line 370 "_hotshot.c"
        var $83=(($78)&4294967295); //@line 370 "_hotshot.c"
        var $84=HEAP[$83]; //@line 370 "_hotshot.c"
        var $85=((($84))|0)==0; //@line 370 "_hotshot.c"
        if ($85) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 370 "_hotshot.c"
      case 18: // $bb16
        var $86=HEAP[$key]; //@line 370 "_hotshot.c"
        var $87=(($86+4)&4294967295); //@line 370 "_hotshot.c"
        var $88=HEAP[$87]; //@line 370 "_hotshot.c"
        var $89=(($88+24)&4294967295); //@line 370 "_hotshot.c"
        var $90=HEAP[$89]; //@line 370 "_hotshot.c"
        var $91=HEAP[$key]; //@line 370 "_hotshot.c"
        FUNCTION_TABLE[$90]($91); //@line 370 "_hotshot.c"
        __label__ = 19; break; //@line 370 "_hotshot.c"
      case 19: // $bb17
        var $92=HEAP[$value]; //@line 371 "_hotshot.c"
        var $93=($92)!=0; //@line 371 "_hotshot.c"
        if ($93) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 371 "_hotshot.c"
      case 20: // $bb18
        var $94=HEAP[$value]; //@line 371 "_hotshot.c"
        var $95=(($94)&4294967295); //@line 371 "_hotshot.c"
        var $96=HEAP[$95]; //@line 371 "_hotshot.c"
        var $97=((($96) - 1)&4294967295); //@line 371 "_hotshot.c"
        var $98=(($94)&4294967295); //@line 371 "_hotshot.c"
        HEAP[$98]=$97; //@line 371 "_hotshot.c"
        var $99=(($94)&4294967295); //@line 371 "_hotshot.c"
        var $100=HEAP[$99]; //@line 371 "_hotshot.c"
        var $101=((($100))|0)==0; //@line 371 "_hotshot.c"
        if ($101) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 371 "_hotshot.c"
      case 21: // $bb19
        var $102=HEAP[$value]; //@line 371 "_hotshot.c"
        var $103=(($102+4)&4294967295); //@line 371 "_hotshot.c"
        var $104=HEAP[$103]; //@line 371 "_hotshot.c"
        var $105=(($104+24)&4294967295); //@line 371 "_hotshot.c"
        var $106=HEAP[$105]; //@line 371 "_hotshot.c"
        var $107=HEAP[$value]; //@line 371 "_hotshot.c"
        FUNCTION_TABLE[$106]($107); //@line 371 "_hotshot.c"
        __label__ = 22; break; //@line 371 "_hotshot.c"
      case 22: // $bb20
        var $108=HEAP[$err]; //@line 372 "_hotshot.c"
        HEAP[$0]=$108; //@line 372 "_hotshot.c"
        var $109=HEAP[$0]; //@line 372 "_hotshot.c"
        HEAP[$retval]=$109; //@line 372 "_hotshot.c"
        __label__ = 23; break; //@line 372 "_hotshot.c"
      case 23: // $return
        var $retval21=HEAP[$retval]; //@line 372 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 372 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _eof_error($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 379 "_hotshot.c"
        var $1=(($0+12)&4294967295); //@line 379 "_hotshot.c"
        var $2=HEAP[$1]; //@line 379 "_hotshot.c"
        var $3=_fclose($2); //@line 379 "_hotshot.c"
        var $4=HEAP[$self_addr]; //@line 380 "_hotshot.c"
        var $5=(($4+12)&4294967295); //@line 380 "_hotshot.c"
        HEAP[$5]=0; //@line 380 "_hotshot.c"
        var $6=HEAP[_PyExc_EOFError]; //@line 381 "_hotshot.c"
        _PyErr_SetString($6, ((__str1)&4294967295)); //@line 381 "_hotshot.c"
        __label__ = 1; break; //@line 383 "_hotshot.c"
      case 1: // $return
        STACKTOP = __stackBase__;
        return; //@line 383 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _logreader_tp_iternext($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $c=__stackBase__+12;
        var $what=__stackBase__+16;
        var $err=__stackBase__+20;
        var $lineno=__stackBase__+24;
        var $fileno=__stackBase__+28;
        var $tdelta=__stackBase__+32;
        var $s1=__stackBase__+36;
        var $s2=__stackBase__+40;
        var $result=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$err]=0; //@line 390 "_hotshot.c"
        HEAP[$lineno]=-1; //@line 391 "_hotshot.c"
        HEAP[$fileno]=-1; //@line 392 "_hotshot.c"
        HEAP[$tdelta]=-1; //@line 393 "_hotshot.c"
        HEAP[$s1]=0; //@line 394 "_hotshot.c"
        HEAP[$s2]=0; //@line 394 "_hotshot.c"
        HEAP[$result]=0; //@line 395 "_hotshot.c"
        var $1=HEAP[$self_addr]; //@line 400 "_hotshot.c"
        var $2=(($1+12)&4294967295); //@line 400 "_hotshot.c"
        var $3=HEAP[$2]; //@line 400 "_hotshot.c"
        var $4=($3)==0; //@line 400 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 400 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[_ProfilerError]; //@line 401 "_hotshot.c"
        _PyErr_SetString($5, ((__str2)&4294967295)); //@line 401 "_hotshot.c"
        HEAP[$0]=0; //@line 403 "_hotshot.c"
        __label__ = 48; break; //@line 403 "_hotshot.c"
      case 2: // $restart
        var $6=HEAP[$self_addr]; //@line 408 "_hotshot.c"
        var $7=(($6+12)&4294967295); //@line 408 "_hotshot.c"
        var $8=HEAP[$7]; //@line 408 "_hotshot.c"
        var $9=_fgetc($8); //@line 408 "_hotshot.c"
        HEAP[$c]=$9; //@line 408 "_hotshot.c"
        var $10=HEAP[$c]; //@line 408 "_hotshot.c"
        var $11=((($10))|0)==-1; //@line 408 "_hotshot.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 408 "_hotshot.c"
      case 3: // $bb1
        var $12=HEAP[$self_addr]; //@line 409 "_hotshot.c"
        var $13=(($12+12)&4294967295); //@line 409 "_hotshot.c"
        var $14=HEAP[$13]; //@line 409 "_hotshot.c"
        var $15=_fclose($14); //@line 409 "_hotshot.c"
        var $16=HEAP[$self_addr]; //@line 410 "_hotshot.c"
        var $17=(($16+12)&4294967295); //@line 410 "_hotshot.c"
        HEAP[$17]=0; //@line 410 "_hotshot.c"
        HEAP[$0]=0; //@line 411 "_hotshot.c"
        __label__ = 48; break; //@line 411 "_hotshot.c"
      case 4: // $bb2
        var $18=HEAP[$c]; //@line 413 "_hotshot.c"
        var $19=($18) & 3; //@line 413 "_hotshot.c"
        HEAP[$what]=$19; //@line 413 "_hotshot.c"
        var $20=HEAP[$what]; //@line 414 "_hotshot.c"
        var $21=((($20))|0)==3; //@line 414 "_hotshot.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 414 "_hotshot.c"
      case 5: // $bb3
        var $22=HEAP[$c]; //@line 415 "_hotshot.c"
        HEAP[$what]=$22; //@line 415 "_hotshot.c"
        __label__ = 7; break; //@line 415 "_hotshot.c"
      case 6: // $bb4
        var $23=HEAP[$self_addr]; //@line 417 "_hotshot.c"
        var $24=(($23+12)&4294967295); //@line 417 "_hotshot.c"
        var $25=HEAP[$24]; //@line 417 "_hotshot.c"
        var $26=HEAP[$c]; //@line 417 "_hotshot.c"
        var $27=_ungetc($26, $25); //@line 417 "_hotshot.c"
        __label__ = 7; break; //@line 417 "_hotshot.c"
      case 7: // $bb5
        var $28=HEAP[$what]; //@line 419 "_hotshot.c"
        if ($28 == 0) {
          __label__ = 8; break;
        }
        else if ($28 == 1) {
          __label__ = 13; break;
        }
        else if ($28 == 2) {
          __label__ = 14; break;
        }
        else if ($28 == 19) {
          __label__ = 18; break;
        }
        else if ($28 == 35) {
          __label__ = 19; break;
        }
        else if ($28 == 51) {
          __label__ = 27; break;
        }
        else if ($28 == 67) {
          __label__ = 23; break;
        }
        else if ($28 == 83) {
          __label__ = 30; break;
        }
        else {
        __label__ = 33; break;
        }
        
      case 8: // $bb6
        var $29=HEAP[$self_addr]; //@line 421 "_hotshot.c"
        var $30=_unpack_packed_int($29, $fileno, 2); //@line 421 "_hotshot.c"
        HEAP[$err]=$30; //@line 421 "_hotshot.c"
        var $31=HEAP[$err]; //@line 422 "_hotshot.c"
        var $32=((($31))|0)==0; //@line 422 "_hotshot.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 422 "_hotshot.c"
      case 9: // $bb7
        var $33=HEAP[$self_addr]; //@line 423 "_hotshot.c"
        var $34=_unpack_packed_int($33, $lineno, 0); //@line 423 "_hotshot.c"
        HEAP[$err]=$34; //@line 423 "_hotshot.c"
        var $35=HEAP[$self_addr]; //@line 424 "_hotshot.c"
        var $36=(($35+20)&4294967295); //@line 424 "_hotshot.c"
        var $37=HEAP[$36]; //@line 424 "_hotshot.c"
        var $38=((($37))|0)!=0; //@line 424 "_hotshot.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 424 "_hotshot.c"
      case 10: // $bb8
        var $39=HEAP[$err]; //@line 424 "_hotshot.c"
        var $40=((($39))|0)==0; //@line 424 "_hotshot.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 424 "_hotshot.c"
      case 11: // $bb9
        var $41=HEAP[$self_addr]; //@line 425 "_hotshot.c"
        var $42=_unpack_packed_int($41, $tdelta, 0); //@line 425 "_hotshot.c"
        HEAP[$err]=$42; //@line 425 "_hotshot.c"
        __label__ = 12; break; //@line 425 "_hotshot.c"
      case 12: // $bb10
        __label__ = 34; break; //@line 425 "_hotshot.c"
      case 13: // $bb11
        var $43=HEAP[$self_addr]; //@line 429 "_hotshot.c"
        var $44=_unpack_packed_int($43, $tdelta, 2); //@line 429 "_hotshot.c"
        HEAP[$err]=$44; //@line 429 "_hotshot.c"
        __label__ = 34; break; //@line 429 "_hotshot.c"
      case 14: // $bb12
        var $45=HEAP[$self_addr]; //@line 432 "_hotshot.c"
        var $46=_unpack_packed_int($45, $lineno, 2); //@line 432 "_hotshot.c"
        HEAP[$err]=$46; //@line 432 "_hotshot.c"
        var $47=HEAP[$self_addr]; //@line 433 "_hotshot.c"
        var $48=(($47+16)&4294967295); //@line 433 "_hotshot.c"
        var $49=HEAP[$48]; //@line 433 "_hotshot.c"
        var $50=((($49))|0)!=0; //@line 433 "_hotshot.c"
        if ($50) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 433 "_hotshot.c"
      case 15: // $bb13
        var $51=HEAP[$err]; //@line 433 "_hotshot.c"
        var $52=((($51))|0)==0; //@line 433 "_hotshot.c"
        if ($52) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 433 "_hotshot.c"
      case 16: // $bb14
        var $53=HEAP[$self_addr]; //@line 434 "_hotshot.c"
        var $54=_unpack_packed_int($53, $tdelta, 0); //@line 434 "_hotshot.c"
        HEAP[$err]=$54; //@line 434 "_hotshot.c"
        __label__ = 17; break; //@line 434 "_hotshot.c"
      case 17: // $bb15
        __label__ = 34; break; //@line 434 "_hotshot.c"
      case 18: // $bb16
        var $55=HEAP[$self_addr]; //@line 437 "_hotshot.c"
        var $56=_unpack_add_info($55); //@line 437 "_hotshot.c"
        HEAP[$err]=$56; //@line 437 "_hotshot.c"
        __label__ = 34; break; //@line 437 "_hotshot.c"
      case 19: // $bb17
        var $57=HEAP[$self_addr]; //@line 440 "_hotshot.c"
        var $58=_unpack_packed_int($57, $fileno, 0); //@line 440 "_hotshot.c"
        HEAP[$err]=$58; //@line 440 "_hotshot.c"
        var $59=HEAP[$err]; //@line 441 "_hotshot.c"
        var $60=((($59))|0)==0; //@line 441 "_hotshot.c"
        if ($60) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 441 "_hotshot.c"
      case 20: // $bb18
        var $61=HEAP[$self_addr]; //@line 442 "_hotshot.c"
        var $62=_unpack_string($61, $s1); //@line 442 "_hotshot.c"
        HEAP[$err]=$62; //@line 442 "_hotshot.c"
        var $63=HEAP[$err]; //@line 443 "_hotshot.c"
        var $64=((($63))|0)==0; //@line 443 "_hotshot.c"
        if ($64) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 443 "_hotshot.c"
      case 21: // $bb19
        var $65=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 444 "_hotshot.c"
        var $66=((($65) + 1)&4294967295); //@line 444 "_hotshot.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$66; //@line 444 "_hotshot.c"
        HEAP[$s2]=__Py_NoneStruct; //@line 445 "_hotshot.c"
        __label__ = 22; break; //@line 445 "_hotshot.c"
      case 22: // $bb20
        __label__ = 34; break; //@line 445 "_hotshot.c"
      case 23: // $bb21
        var $67=HEAP[$self_addr]; //@line 450 "_hotshot.c"
        var $68=_unpack_packed_int($67, $fileno, 0); //@line 450 "_hotshot.c"
        HEAP[$err]=$68; //@line 450 "_hotshot.c"
        var $69=HEAP[$err]; //@line 451 "_hotshot.c"
        var $70=((($69))|0)==0; //@line 451 "_hotshot.c"
        if ($70) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 451 "_hotshot.c"
      case 24: // $bb22
        var $71=HEAP[$self_addr]; //@line 452 "_hotshot.c"
        var $72=_unpack_packed_int($71, $lineno, 0); //@line 452 "_hotshot.c"
        HEAP[$err]=$72; //@line 452 "_hotshot.c"
        var $73=HEAP[$err]; //@line 453 "_hotshot.c"
        var $74=((($73))|0)==0; //@line 453 "_hotshot.c"
        if ($74) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 453 "_hotshot.c"
      case 25: // $bb23
        var $75=HEAP[$self_addr]; //@line 454 "_hotshot.c"
        var $76=_unpack_string($75, $s1); //@line 454 "_hotshot.c"
        HEAP[$err]=$76; //@line 454 "_hotshot.c"
        __label__ = 26; break; //@line 454 "_hotshot.c"
      case 26: // $bb24
        __label__ = 34; break; //@line 454 "_hotshot.c"
      case 27: // $bb25
        var $77=HEAP[$self_addr]; //@line 458 "_hotshot.c"
        var $78=(($77+12)&4294967295); //@line 458 "_hotshot.c"
        var $79=HEAP[$78]; //@line 458 "_hotshot.c"
        var $80=_fgetc($79); //@line 458 "_hotshot.c"
        HEAP[$c]=$80; //@line 458 "_hotshot.c"
        var $81=HEAP[$c]; //@line 458 "_hotshot.c"
        var $82=((($81))|0)==-1; //@line 458 "_hotshot.c"
        if ($82) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 458 "_hotshot.c"
      case 28: // $bb26
        HEAP[$err]=-1; //@line 459 "_hotshot.c"
        __label__ = 34; break; //@line 459 "_hotshot.c"
      case 29: // $bb27
        var $83=HEAP[$c]; //@line 461 "_hotshot.c"
        var $84=((($83))|0)!=0; //@line 461 "_hotshot.c"
        var $85=unSign(($84), 1, 0); //@line 461 "_hotshot.c"
        var $86=HEAP[$self_addr]; //@line 461 "_hotshot.c"
        var $87=(($86+16)&4294967295); //@line 461 "_hotshot.c"
        HEAP[$87]=$85; //@line 461 "_hotshot.c"
        __label__ = 2; break; //@line 461 "_hotshot.c"
      case 30: // $bb28
        var $88=HEAP[$self_addr]; //@line 466 "_hotshot.c"
        var $89=(($88+12)&4294967295); //@line 466 "_hotshot.c"
        var $90=HEAP[$89]; //@line 466 "_hotshot.c"
        var $91=_fgetc($90); //@line 466 "_hotshot.c"
        HEAP[$c]=$91; //@line 466 "_hotshot.c"
        var $92=HEAP[$c]; //@line 466 "_hotshot.c"
        var $93=((($92))|0)==-1; //@line 466 "_hotshot.c"
        if ($93) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 466 "_hotshot.c"
      case 31: // $bb29
        HEAP[$err]=-1; //@line 467 "_hotshot.c"
        __label__ = 34; break; //@line 467 "_hotshot.c"
      case 32: // $bb30
        var $94=HEAP[$c]; //@line 469 "_hotshot.c"
        var $95=((($94))|0)!=0; //@line 469 "_hotshot.c"
        var $96=unSign(($95), 1, 0); //@line 469 "_hotshot.c"
        var $97=HEAP[$self_addr]; //@line 469 "_hotshot.c"
        var $98=(($97+20)&4294967295); //@line 469 "_hotshot.c"
        HEAP[$98]=$96; //@line 469 "_hotshot.c"
        __label__ = 2; break; //@line 469 "_hotshot.c"
      case 33: // $bb31
        HEAP[$err]=-3; //@line 474 "_hotshot.c"
        __label__ = 34; break; //@line 474 "_hotshot.c"
      case 34: // $bb32
        var $99=HEAP[$err]; //@line 476 "_hotshot.c"
        var $100=((($99))|0)==-3; //@line 476 "_hotshot.c"
        if ($100) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 476 "_hotshot.c"
      case 35: // $bb33
        var $101=HEAP[_PyExc_ValueError]; //@line 477 "_hotshot.c"
        _PyErr_SetString($101, ((__str3)&4294967295)); //@line 477 "_hotshot.c"
        __label__ = 47; break; //@line 477 "_hotshot.c"
      case 36: // $bb34
        var $102=HEAP[$err]; //@line 480 "_hotshot.c"
        var $103=((($102))|0)==-1; //@line 480 "_hotshot.c"
        if ($103) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 480 "_hotshot.c"
      case 37: // $bb35
        var $104=HEAP[$self_addr]; //@line 481 "_hotshot.c"
        _eof_error($104); //@line 481 "_hotshot.c"
        __label__ = 47; break; //@line 481 "_hotshot.c"
      case 38: // $bb36
        var $105=HEAP[$err]; //@line 483 "_hotshot.c"
        var $106=((($105))|0)==0; //@line 483 "_hotshot.c"
        if ($106) { __label__ = 39; break; } else { __label__ = 47; break; } //@line 483 "_hotshot.c"
      case 39: // $bb37
        var $107=_PyTuple_New(4); //@line 484 "_hotshot.c"
        HEAP[$result]=$107; //@line 484 "_hotshot.c"
        var $108=HEAP[$result]; //@line 485 "_hotshot.c"
        var $109=($108)==0; //@line 485 "_hotshot.c"
        if ($109) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 485 "_hotshot.c"
      case 40: // $bb38
        HEAP[$0]=0; //@line 486 "_hotshot.c"
        __label__ = 48; break; //@line 486 "_hotshot.c"
      case 41: // $bb39
        var $110=HEAP[$result]; //@line 487 "_hotshot.c"
        var $111=$110; //@line 487 "_hotshot.c"
        var $112=HEAP[$what]; //@line 487 "_hotshot.c"
        var $113=_PyInt_FromLong($112); //@line 487 "_hotshot.c"
        var $114=(($111+12)&4294967295); //@line 487 "_hotshot.c"
        var $115=(($114)&4294967295); //@line 487 "_hotshot.c"
        HEAP[$115]=$113; //@line 487 "_hotshot.c"
        var $116=HEAP[$result]; //@line 488 "_hotshot.c"
        var $117=$116; //@line 488 "_hotshot.c"
        var $118=HEAP[$fileno]; //@line 488 "_hotshot.c"
        var $119=_PyInt_FromLong($118); //@line 488 "_hotshot.c"
        var $120=(($117+12)&4294967295); //@line 488 "_hotshot.c"
        var $121=(($120+8)&4294967295); //@line 488 "_hotshot.c"
        HEAP[$121]=$119; //@line 488 "_hotshot.c"
        var $122=HEAP[$s1]; //@line 489 "_hotshot.c"
        var $123=($122)==0; //@line 489 "_hotshot.c"
        if ($123) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 489 "_hotshot.c"
      case 42: // $bb40
        var $124=HEAP[$result]; //@line 490 "_hotshot.c"
        var $125=$124; //@line 490 "_hotshot.c"
        var $126=HEAP[$tdelta]; //@line 490 "_hotshot.c"
        var $127=_PyInt_FromLong($126); //@line 490 "_hotshot.c"
        var $128=(($125+12)&4294967295); //@line 490 "_hotshot.c"
        var $129=(($128+4)&4294967295); //@line 490 "_hotshot.c"
        HEAP[$129]=$127; //@line 490 "_hotshot.c"
        __label__ = 44; break; //@line 490 "_hotshot.c"
      case 43: // $bb41
        var $130=HEAP[$result]; //@line 492 "_hotshot.c"
        var $131=$130; //@line 492 "_hotshot.c"
        var $132=HEAP[$s1]; //@line 492 "_hotshot.c"
        var $133=(($131+12)&4294967295); //@line 492 "_hotshot.c"
        var $134=(($133+4)&4294967295); //@line 492 "_hotshot.c"
        HEAP[$134]=$132; //@line 492 "_hotshot.c"
        __label__ = 44; break; //@line 492 "_hotshot.c"
      case 44: // $bb42
        var $135=HEAP[$s2]; //@line 493 "_hotshot.c"
        var $136=($135)==0; //@line 493 "_hotshot.c"
        if ($136) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 493 "_hotshot.c"
      case 45: // $bb43
        var $137=HEAP[$result]; //@line 494 "_hotshot.c"
        var $138=$137; //@line 494 "_hotshot.c"
        var $139=HEAP[$lineno]; //@line 494 "_hotshot.c"
        var $140=_PyInt_FromLong($139); //@line 494 "_hotshot.c"
        var $141=(($138+12)&4294967295); //@line 494 "_hotshot.c"
        var $142=(($141+12)&4294967295); //@line 494 "_hotshot.c"
        HEAP[$142]=$140; //@line 494 "_hotshot.c"
        __label__ = 47; break; //@line 494 "_hotshot.c"
      case 46: // $bb44
        var $143=HEAP[$result]; //@line 496 "_hotshot.c"
        var $144=$143; //@line 496 "_hotshot.c"
        var $145=(($144+12)&4294967295); //@line 496 "_hotshot.c"
        var $146=(($145+12)&4294967295); //@line 496 "_hotshot.c"
        var $147=HEAP[$s2]; //@line 496 "_hotshot.c"
        HEAP[$146]=$147; //@line 496 "_hotshot.c"
        __label__ = 47; break; //@line 496 "_hotshot.c"
      case 47: // $bb45
        var $148=HEAP[$result]; //@line 525 "_hotshot.c"
        HEAP[$0]=$148; //@line 525 "_hotshot.c"
        __label__ = 48; break; //@line 525 "_hotshot.c"
      case 48: // $bb46
        var $149=HEAP[$0]; //@line 403 "_hotshot.c"
        HEAP[$retval]=$149; //@line 403 "_hotshot.c"
        __label__ = 49; break; //@line 403 "_hotshot.c"
      case 49: // $return
        var $retval47=HEAP[$retval]; //@line 403 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval47; //@line 403 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _logreader_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 531 "_hotshot.c"
        var $1=(($0+12)&4294967295); //@line 531 "_hotshot.c"
        var $2=HEAP[$1]; //@line 531 "_hotshot.c"
        var $3=($2)!=0; //@line 531 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 531 "_hotshot.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 532 "_hotshot.c"
        var $5=(($4+12)&4294967295); //@line 532 "_hotshot.c"
        var $6=HEAP[$5]; //@line 532 "_hotshot.c"
        var $7=_fclose($6); //@line 532 "_hotshot.c"
        var $8=HEAP[$self_addr]; //@line 533 "_hotshot.c"
        var $9=(($8+12)&4294967295); //@line 533 "_hotshot.c"
        HEAP[$9]=0; //@line 533 "_hotshot.c"
        __label__ = 2; break; //@line 533 "_hotshot.c"
      case 2: // $bb1
        var $10=HEAP[$self_addr]; //@line 535 "_hotshot.c"
        var $11=(($10+8)&4294967295); //@line 535 "_hotshot.c"
        var $12=HEAP[$11]; //@line 535 "_hotshot.c"
        var $13=($12)!=0; //@line 535 "_hotshot.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 535 "_hotshot.c"
      case 3: // $bb2
        var $14=HEAP[$self_addr]; //@line 535 "_hotshot.c"
        var $15=(($14+8)&4294967295); //@line 535 "_hotshot.c"
        var $16=HEAP[$15]; //@line 535 "_hotshot.c"
        var $17=(($16)&4294967295); //@line 535 "_hotshot.c"
        var $18=HEAP[$17]; //@line 535 "_hotshot.c"
        var $19=((($18) - 1)&4294967295); //@line 535 "_hotshot.c"
        var $20=(($16)&4294967295); //@line 535 "_hotshot.c"
        HEAP[$20]=$19; //@line 535 "_hotshot.c"
        var $21=(($16)&4294967295); //@line 535 "_hotshot.c"
        var $22=HEAP[$21]; //@line 535 "_hotshot.c"
        var $23=((($22))|0)==0; //@line 535 "_hotshot.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 535 "_hotshot.c"
      case 4: // $bb3
        var $24=HEAP[$self_addr]; //@line 535 "_hotshot.c"
        var $25=(($24+8)&4294967295); //@line 535 "_hotshot.c"
        var $26=HEAP[$25]; //@line 535 "_hotshot.c"
        var $27=(($26+4)&4294967295); //@line 535 "_hotshot.c"
        var $28=HEAP[$27]; //@line 535 "_hotshot.c"
        var $29=(($28+24)&4294967295); //@line 535 "_hotshot.c"
        var $30=HEAP[$29]; //@line 535 "_hotshot.c"
        var $31=HEAP[$self_addr]; //@line 535 "_hotshot.c"
        var $32=(($31+8)&4294967295); //@line 535 "_hotshot.c"
        var $33=HEAP[$32]; //@line 535 "_hotshot.c"
        FUNCTION_TABLE[$30]($33); //@line 535 "_hotshot.c"
        __label__ = 5; break; //@line 535 "_hotshot.c"
      case 5: // $bb4
        var $34=HEAP[$self_addr]; //@line 536 "_hotshot.c"
        var $35=$34; //@line 536 "_hotshot.c"
        _PyObject_Free($35); //@line 536 "_hotshot.c"
        __label__ = 6; break; //@line 537 "_hotshot.c"
      case 6: // $return
        STACKTOP = __stackBase__;
        return; //@line 537 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _logreader_sq_item($self, $index) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $index_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$index_addr]=$index;
        var $1=HEAP[$self_addr]; //@line 542 "_hotshot.c"
        var $2=_logreader_tp_iternext($1); //@line 542 "_hotshot.c"
        HEAP[$result]=$2; //@line 542 "_hotshot.c"
        var $3=HEAP[$result]; //@line 543 "_hotshot.c"
        var $4=($3)==0; //@line 543 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 543 "_hotshot.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 543 "_hotshot.c"
        var $6=($5)==0; //@line 543 "_hotshot.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 543 "_hotshot.c"
      case 2: // $bb1
        var $7=HEAP[_PyExc_IndexError]; //@line 544 "_hotshot.c"
        _PyErr_SetString($7, ((__str4)&4294967295)); //@line 544 "_hotshot.c"
        HEAP[$0]=0; //@line 545 "_hotshot.c"
        __label__ = 4; break; //@line 545 "_hotshot.c"
      case 3: // $bb2
        var $8=HEAP[$result]; //@line 547 "_hotshot.c"
        HEAP[$0]=$8; //@line 547 "_hotshot.c"
        __label__ = 4; break; //@line 547 "_hotshot.c"
      case 4: // $bb3
        var $9=HEAP[$0]; //@line 545 "_hotshot.c"
        HEAP[$retval]=$9; //@line 545 "_hotshot.c"
        __label__ = 5; break; //@line 545 "_hotshot.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 545 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 545 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _flush_data($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $written=__stackBase__+12;
        var $s=__stackBase__+16;
        var $s6=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 557 "_hotshot.c"
        var $2=(($1+10260)&4294967295); //@line 557 "_hotshot.c"
        var $3=HEAP[$2]; //@line 557 "_hotshot.c"
        var $4=HEAP[$self_addr]; //@line 557 "_hotshot.c"
        var $5=(($4+16)&4294967295); //@line 557 "_hotshot.c"
        var $6=HEAP[$5]; //@line 557 "_hotshot.c"
        var $7=HEAP[$self_addr]; //@line 557 "_hotshot.c"
        var $8=(($7+20)&4294967295); //@line 557 "_hotshot.c"
        var $9=(($8)&4294967295); //@line 557 "_hotshot.c"
        var $10=_fwrite($9, 1, $6, $3); //@line 557 "_hotshot.c"
        HEAP[$written]=$10; //@line 557 "_hotshot.c"
        var $11=HEAP[$self_addr]; //@line 558 "_hotshot.c"
        var $12=(($11+16)&4294967295); //@line 558 "_hotshot.c"
        var $13=HEAP[$12]; //@line 558 "_hotshot.c"
        var $14=HEAP[$written]; //@line 558 "_hotshot.c"
        var $15=((($13))|0)==((($14))|0); //@line 558 "_hotshot.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 558 "_hotshot.c"
      case 1: // $bb
        var $16=HEAP[$self_addr]; //@line 559 "_hotshot.c"
        var $17=(($16+16)&4294967295); //@line 559 "_hotshot.c"
        HEAP[$17]=0; //@line 559 "_hotshot.c"
        __label__ = 4; break; //@line 559 "_hotshot.c"
      case 2: // $bb1
        var $18=HEAP[$self_addr]; //@line 561 "_hotshot.c"
        var $19=(($18+16)&4294967295); //@line 561 "_hotshot.c"
        var $20=HEAP[$19]; //@line 561 "_hotshot.c"
        var $21=HEAP[$written]; //@line 561 "_hotshot.c"
        var $22=((($20) - ($21))&4294967295); //@line 561 "_hotshot.c"
        var $23=HEAP[$written]; //@line 561 "_hotshot.c"
        var $24=HEAP[$self_addr]; //@line 561 "_hotshot.c"
        var $25=(($24+20)&4294967295); //@line 561 "_hotshot.c"
        var $26=(($25+$23)&4294967295); //@line 561 "_hotshot.c"
        var $27=HEAP[$self_addr]; //@line 561 "_hotshot.c"
        var $28=(($27+20)&4294967295); //@line 561 "_hotshot.c"
        var $29=(($28)&4294967295); //@line 561 "_hotshot.c"
        _llvm_memmove_p0i8_p0i8_i32($29, $26, $22, 1, 0); //@line 561 "_hotshot.c"
        var $30=HEAP[$self_addr]; //@line 563 "_hotshot.c"
        var $31=(($30+16)&4294967295); //@line 563 "_hotshot.c"
        var $32=HEAP[$31]; //@line 563 "_hotshot.c"
        var $33=HEAP[$written]; //@line 563 "_hotshot.c"
        var $34=((($32) - ($33))&4294967295); //@line 563 "_hotshot.c"
        var $35=HEAP[$self_addr]; //@line 563 "_hotshot.c"
        var $36=(($35+16)&4294967295); //@line 563 "_hotshot.c"
        HEAP[$36]=$34; //@line 563 "_hotshot.c"
        var $37=HEAP[$written]; //@line 564 "_hotshot.c"
        var $38=((($37))|0)==0; //@line 564 "_hotshot.c"
        if ($38) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 564 "_hotshot.c"
      case 3: // $bb2
        var $39=HEAP[$self_addr]; //@line 565 "_hotshot.c"
        var $40=(($39+12)&4294967295); //@line 565 "_hotshot.c"
        var $41=HEAP[$40]; //@line 565 "_hotshot.c"
        var $42=_PyString_AsString($41); //@line 565 "_hotshot.c"
        HEAP[$s]=$42; //@line 565 "_hotshot.c"
        var $43=HEAP[_PyExc_IOError]; //@line 566 "_hotshot.c"
        var $44=HEAP[$s]; //@line 566 "_hotshot.c"
        var $45=_PyErr_SetFromErrnoWithFilename($43, $44); //@line 566 "_hotshot.c"
        var $46=HEAP[$self_addr]; //@line 567 "_hotshot.c"
        _do_stop($46); //@line 567 "_hotshot.c"
        HEAP[$0]=-1; //@line 568 "_hotshot.c"
        __label__ = 8; break; //@line 568 "_hotshot.c"
      case 4: // $bb3
        var $47=HEAP[$written]; //@line 571 "_hotshot.c"
        var $48=((($47))|0)!=0; //@line 571 "_hotshot.c"
        if ($48) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 571 "_hotshot.c"
      case 5: // $bb4
        var $49=HEAP[$self_addr]; //@line 572 "_hotshot.c"
        var $50=(($49+10260)&4294967295); //@line 572 "_hotshot.c"
        var $51=HEAP[$50]; //@line 572 "_hotshot.c"
        var $52=_fflush($51); //@line 572 "_hotshot.c"
        var $53=((($52))|0)!=0; //@line 572 "_hotshot.c"
        if ($53) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 572 "_hotshot.c"
      case 6: // $bb5
        var $54=HEAP[$self_addr]; //@line 573 "_hotshot.c"
        var $55=(($54+12)&4294967295); //@line 573 "_hotshot.c"
        var $56=HEAP[$55]; //@line 573 "_hotshot.c"
        var $57=_PyString_AsString($56); //@line 573 "_hotshot.c"
        HEAP[$s6]=$57; //@line 573 "_hotshot.c"
        var $58=HEAP[_PyExc_IOError]; //@line 574 "_hotshot.c"
        var $59=HEAP[$s6]; //@line 574 "_hotshot.c"
        var $60=_PyErr_SetFromErrnoWithFilename($58, $59); //@line 574 "_hotshot.c"
        var $61=HEAP[$self_addr]; //@line 575 "_hotshot.c"
        _do_stop($61); //@line 575 "_hotshot.c"
        HEAP[$0]=-1; //@line 576 "_hotshot.c"
        __label__ = 8; break; //@line 576 "_hotshot.c"
      case 7: // $bb7
        HEAP[$0]=0; //@line 579 "_hotshot.c"
        __label__ = 8; break; //@line 579 "_hotshot.c"
      case 8: // $bb8
        var $62=HEAP[$0]; //@line 568 "_hotshot.c"
        HEAP[$retval]=$62; //@line 568 "_hotshot.c"
        __label__ = 9; break; //@line 568 "_hotshot.c"
      case 9: // $return
        var $retval9=HEAP[$retval]; //@line 568 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 568 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_string($self, $s, $len) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $s_addr=__stackBase__+4;
        var $len_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$s_addr]=$s;
        HEAP[$len_addr]=$len;
        var $1=HEAP[$self_addr]; //@line 626 "_hotshot.c"
        var $2=(($1+16)&4294967295); //@line 626 "_hotshot.c"
        var $3=HEAP[$2]; //@line 626 "_hotshot.c"
        var $4=HEAP[$len_addr]; //@line 626 "_hotshot.c"
        var $5=((($3) + ($4))&4294967295); //@line 626 "_hotshot.c"
        var $6=((($5) + 5)&4294967295); //@line 626 "_hotshot.c"
        var $7=((($6))>>>0) > 10239; //@line 626 "_hotshot.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 626 "_hotshot.c"
      case 1: // $bb
        var $8=HEAP[$self_addr]; //@line 627 "_hotshot.c"
        var $9=_flush_data($8); //@line 627 "_hotshot.c"
        var $10=((($9))|0) < 0; //@line 627 "_hotshot.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 627 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 628 "_hotshot.c"
        __label__ = 8; break; //@line 628 "_hotshot.c"
      case 3: // $bb2
        var $11=HEAP[$len_addr]; //@line 630 "_hotshot.c"
        var $12=((($11))|0)==2147483647; //@line 630 "_hotshot.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 630 "_hotshot.c"
      case 4: // $bb3
        ___assert_fail(((__str5)&4294967295), ((__str6)&4294967295), 630, ((___PRETTY_FUNCTION___8917)&4294967295)); //@line 630 "_hotshot.c"
        throw "Reached an unreachable! Original .ll line: 1409"; //@line 630 "_hotshot.c"
      case 5: // $bb4
        var $13=HEAP[$self_addr]; //@line 631 "_hotshot.c"
        var $14=HEAP[$len_addr]; //@line 631 "_hotshot.c"
        var $15=_pack_packed_int($13, $14); //@line 631 "_hotshot.c"
        var $16=((($15))|0) < 0; //@line 631 "_hotshot.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 631 "_hotshot.c"
      case 6: // $bb5
        HEAP[$0]=-1; //@line 632 "_hotshot.c"
        __label__ = 8; break; //@line 632 "_hotshot.c"
      case 7: // $bb6
        var $17=HEAP[$len_addr]; //@line 633 "_hotshot.c"
        var $18=HEAP[$self_addr]; //@line 633 "_hotshot.c"
        var $19=(($18+20)&4294967295); //@line 633 "_hotshot.c"
        var $20=(($19)&4294967295); //@line 633 "_hotshot.c"
        var $21=HEAP[$self_addr]; //@line 633 "_hotshot.c"
        var $22=(($21+16)&4294967295); //@line 633 "_hotshot.c"
        var $23=HEAP[$22]; //@line 633 "_hotshot.c"
        var $24=(($20+$23)&4294967295); //@line 633 "_hotshot.c"
        var $25=HEAP[$s_addr]; //@line 633 "_hotshot.c"
        _llvm_memcpy_p0i8_p0i8_i32($24, $25, $17, 1, 0); //@line 633 "_hotshot.c"
        var $26=HEAP[$self_addr]; //@line 634 "_hotshot.c"
        var $27=(($26+16)&4294967295); //@line 634 "_hotshot.c"
        var $28=HEAP[$27]; //@line 634 "_hotshot.c"
        var $29=HEAP[$len_addr]; //@line 634 "_hotshot.c"
        var $30=((($28) + ($29))&4294967295); //@line 634 "_hotshot.c"
        var $31=HEAP[$self_addr]; //@line 634 "_hotshot.c"
        var $32=(($31+16)&4294967295); //@line 634 "_hotshot.c"
        HEAP[$32]=$30; //@line 634 "_hotshot.c"
        HEAP[$0]=0; //@line 635 "_hotshot.c"
        __label__ = 8; break; //@line 635 "_hotshot.c"
      case 8: // $bb7
        var $33=HEAP[$0]; //@line 628 "_hotshot.c"
        HEAP[$retval]=$33; //@line 628 "_hotshot.c"
        __label__ = 9; break; //@line 628 "_hotshot.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 628 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 628 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_packed_int($self, $value) {
    var __stackBase__  = STACKTOP; STACKTOP += 17; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $value_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $partial=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$value_addr]=$value;
        __label__ = 1; break; //@line 584 "_hotshot.c"
      case 1: // $bb
        var $1=HEAP[$value_addr]; //@line 588 "_hotshot.c"
        var $2=((($1)) & 255); //@line 588 "_hotshot.c"
        var $3=($2) & 127; //@line 588 "_hotshot.c"
        HEAP[$partial]=$3; //@line 588 "_hotshot.c"
        var $4=HEAP[$value_addr]; //@line 589 "_hotshot.c"
        var $5=((($4))|0) >> 7; //@line 589 "_hotshot.c"
        HEAP[$value_addr]=$5; //@line 589 "_hotshot.c"
        var $6=HEAP[$value_addr]; //@line 590 "_hotshot.c"
        var $7=((($6))|0)!=0; //@line 590 "_hotshot.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 590 "_hotshot.c"
      case 2: // $bb1
        var $8=HEAP[$partial]; //@line 591 "_hotshot.c"
        var $9=($8) | -128; //@line 591 "_hotshot.c"
        HEAP[$partial]=$9; //@line 591 "_hotshot.c"
        __label__ = 3; break; //@line 591 "_hotshot.c"
      case 3: // $bb2
        var $10=HEAP[$self_addr]; //@line 592 "_hotshot.c"
        var $11=(($10+16)&4294967295); //@line 592 "_hotshot.c"
        var $12=HEAP[$11]; //@line 592 "_hotshot.c"
        var $13=HEAP[$self_addr]; //@line 592 "_hotshot.c"
        var $14=(($13+20)&4294967295); //@line 592 "_hotshot.c"
        var $15=(($14+$12)&4294967295); //@line 592 "_hotshot.c"
        var $16=HEAP[$partial]; //@line 592 "_hotshot.c"
        HEAP[$15]=$16; //@line 592 "_hotshot.c"
        var $17=HEAP[$self_addr]; //@line 593 "_hotshot.c"
        var $18=(($17+16)&4294967295); //@line 593 "_hotshot.c"
        var $19=HEAP[$18]; //@line 593 "_hotshot.c"
        var $20=((($19) + 1)&4294967295); //@line 593 "_hotshot.c"
        var $21=HEAP[$self_addr]; //@line 593 "_hotshot.c"
        var $22=(($21+16)&4294967295); //@line 593 "_hotshot.c"
        HEAP[$22]=$20; //@line 593 "_hotshot.c"
        var $23=HEAP[$value_addr]; //@line 594 "_hotshot.c"
        var $24=((($23))|0)!=0; //@line 594 "_hotshot.c"
        if ($24) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 594 "_hotshot.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 595 "_hotshot.c"
        var $25=HEAP[$0]; //@line 595 "_hotshot.c"
        HEAP[$retval]=$25; //@line 595 "_hotshot.c"
        __label__ = 5; break; //@line 595 "_hotshot.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 595 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 595 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_add_info($self, $s1, $s2) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $s1_addr=__stackBase__+4;
        var $s2_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $len1=__stackBase__+20;
        var $len2=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$s1_addr]=$s1;
        HEAP[$s2_addr]=$s2;
        var $1=HEAP[$s1_addr]; //@line 641 "_hotshot.c"
        var $2=_strlen($1); //@line 641 "_hotshot.c"
        HEAP[$len1]=$2; //@line 641 "_hotshot.c"
        var $3=HEAP[$s2_addr]; //@line 642 "_hotshot.c"
        var $4=_strlen($3); //@line 642 "_hotshot.c"
        HEAP[$len2]=$4; //@line 642 "_hotshot.c"
        var $5=HEAP[$len1]; //@line 644 "_hotshot.c"
        var $6=HEAP[$len2]; //@line 644 "_hotshot.c"
        var $7=((($5) + ($6))&4294967295); //@line 644 "_hotshot.c"
        var $8=HEAP[$self_addr]; //@line 644 "_hotshot.c"
        var $9=(($8+16)&4294967295); //@line 644 "_hotshot.c"
        var $10=HEAP[$9]; //@line 644 "_hotshot.c"
        var $11=((($7) + ($10))&4294967295); //@line 644 "_hotshot.c"
        var $12=((($11) + 11)&4294967295); //@line 644 "_hotshot.c"
        var $13=((($12))>>>0) > 10239; //@line 644 "_hotshot.c"
        if ($13) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 644 "_hotshot.c"
      case 1: // $bb
        var $14=HEAP[$self_addr]; //@line 645 "_hotshot.c"
        var $15=_flush_data($14); //@line 645 "_hotshot.c"
        var $16=((($15))|0) < 0; //@line 645 "_hotshot.c"
        if ($16) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 645 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 646 "_hotshot.c"
        __label__ = 6; break; //@line 646 "_hotshot.c"
      case 3: // $bb2
        var $17=HEAP[$self_addr]; //@line 648 "_hotshot.c"
        var $18=(($17+16)&4294967295); //@line 648 "_hotshot.c"
        var $19=HEAP[$18]; //@line 648 "_hotshot.c"
        var $20=HEAP[$self_addr]; //@line 648 "_hotshot.c"
        var $21=(($20+20)&4294967295); //@line 648 "_hotshot.c"
        var $22=(($21+$19)&4294967295); //@line 648 "_hotshot.c"
        HEAP[$22]=19; //@line 648 "_hotshot.c"
        var $23=HEAP[$self_addr]; //@line 649 "_hotshot.c"
        var $24=(($23+16)&4294967295); //@line 649 "_hotshot.c"
        var $25=HEAP[$24]; //@line 649 "_hotshot.c"
        var $26=((($25) + 1)&4294967295); //@line 649 "_hotshot.c"
        var $27=HEAP[$self_addr]; //@line 649 "_hotshot.c"
        var $28=(($27+16)&4294967295); //@line 649 "_hotshot.c"
        HEAP[$28]=$26; //@line 649 "_hotshot.c"
        var $29=HEAP[$self_addr]; //@line 650 "_hotshot.c"
        var $30=HEAP[$s1_addr]; //@line 650 "_hotshot.c"
        var $31=HEAP[$len1]; //@line 650 "_hotshot.c"
        var $32=_pack_string($29, $30, $31); //@line 650 "_hotshot.c"
        var $33=((($32))|0) < 0; //@line 650 "_hotshot.c"
        if ($33) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 650 "_hotshot.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 651 "_hotshot.c"
        __label__ = 6; break; //@line 651 "_hotshot.c"
      case 5: // $bb4
        var $34=HEAP[$self_addr]; //@line 652 "_hotshot.c"
        var $35=HEAP[$s2_addr]; //@line 652 "_hotshot.c"
        var $36=HEAP[$len2]; //@line 652 "_hotshot.c"
        var $37=_pack_string($34, $35, $36); //@line 652 "_hotshot.c"
        HEAP[$0]=$37; //@line 652 "_hotshot.c"
        __label__ = 6; break; //@line 652 "_hotshot.c"
      case 6: // $bb5
        var $38=HEAP[$0]; //@line 646 "_hotshot.c"
        HEAP[$retval]=$38; //@line 646 "_hotshot.c"
        __label__ = 7; break; //@line 646 "_hotshot.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 646 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 646 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_define_file($self, $fileno, $filename) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $fileno_addr=__stackBase__+4;
        var $filename_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $len=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$fileno_addr]=$fileno;
        HEAP[$filename_addr]=$filename;
        var $1=HEAP[$filename_addr]; //@line 658 "_hotshot.c"
        var $2=_strlen($1); //@line 658 "_hotshot.c"
        HEAP[$len]=$2; //@line 658 "_hotshot.c"
        var $3=HEAP[$self_addr]; //@line 660 "_hotshot.c"
        var $4=(($3+16)&4294967295); //@line 660 "_hotshot.c"
        var $5=HEAP[$4]; //@line 660 "_hotshot.c"
        var $6=HEAP[$len]; //@line 660 "_hotshot.c"
        var $7=((($5) + ($6))&4294967295); //@line 660 "_hotshot.c"
        var $8=((($7) + 11)&4294967295); //@line 660 "_hotshot.c"
        var $9=((($8))>>>0) > 10239; //@line 660 "_hotshot.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 660 "_hotshot.c"
      case 1: // $bb
        var $10=HEAP[$self_addr]; //@line 661 "_hotshot.c"
        var $11=_flush_data($10); //@line 661 "_hotshot.c"
        var $12=((($11))|0) < 0; //@line 661 "_hotshot.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 661 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 662 "_hotshot.c"
        __label__ = 6; break; //@line 662 "_hotshot.c"
      case 3: // $bb2
        var $13=HEAP[$self_addr]; //@line 664 "_hotshot.c"
        var $14=(($13+16)&4294967295); //@line 664 "_hotshot.c"
        var $15=HEAP[$14]; //@line 664 "_hotshot.c"
        var $16=HEAP[$self_addr]; //@line 664 "_hotshot.c"
        var $17=(($16+20)&4294967295); //@line 664 "_hotshot.c"
        var $18=(($17+$15)&4294967295); //@line 664 "_hotshot.c"
        HEAP[$18]=35; //@line 664 "_hotshot.c"
        var $19=HEAP[$self_addr]; //@line 665 "_hotshot.c"
        var $20=(($19+16)&4294967295); //@line 665 "_hotshot.c"
        var $21=HEAP[$20]; //@line 665 "_hotshot.c"
        var $22=((($21) + 1)&4294967295); //@line 665 "_hotshot.c"
        var $23=HEAP[$self_addr]; //@line 665 "_hotshot.c"
        var $24=(($23+16)&4294967295); //@line 665 "_hotshot.c"
        HEAP[$24]=$22; //@line 665 "_hotshot.c"
        var $25=HEAP[$self_addr]; //@line 666 "_hotshot.c"
        var $26=HEAP[$fileno_addr]; //@line 666 "_hotshot.c"
        var $27=_pack_packed_int($25, $26); //@line 666 "_hotshot.c"
        var $28=((($27))|0) < 0; //@line 666 "_hotshot.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 666 "_hotshot.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 667 "_hotshot.c"
        __label__ = 6; break; //@line 667 "_hotshot.c"
      case 5: // $bb4
        var $29=HEAP[$self_addr]; //@line 668 "_hotshot.c"
        var $30=HEAP[$filename_addr]; //@line 668 "_hotshot.c"
        var $31=HEAP[$len]; //@line 668 "_hotshot.c"
        var $32=_pack_string($29, $30, $31); //@line 668 "_hotshot.c"
        HEAP[$0]=$32; //@line 668 "_hotshot.c"
        __label__ = 6; break; //@line 668 "_hotshot.c"
      case 6: // $bb5
        var $33=HEAP[$0]; //@line 662 "_hotshot.c"
        HEAP[$retval]=$33; //@line 662 "_hotshot.c"
        __label__ = 7; break; //@line 662 "_hotshot.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 662 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 662 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_define_func($self, $fileno, $lineno, $funcname) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $fileno_addr=__stackBase__+4;
        var $lineno_addr=__stackBase__+8;
        var $funcname_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $len=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$fileno_addr]=$fileno;
        HEAP[$lineno_addr]=$lineno;
        HEAP[$funcname_addr]=$funcname;
        var $1=HEAP[$funcname_addr]; //@line 675 "_hotshot.c"
        var $2=_strlen($1); //@line 675 "_hotshot.c"
        HEAP[$len]=$2; //@line 675 "_hotshot.c"
        var $3=HEAP[$self_addr]; //@line 677 "_hotshot.c"
        var $4=(($3+16)&4294967295); //@line 677 "_hotshot.c"
        var $5=HEAP[$4]; //@line 677 "_hotshot.c"
        var $6=HEAP[$len]; //@line 677 "_hotshot.c"
        var $7=((($5) + ($6))&4294967295); //@line 677 "_hotshot.c"
        var $8=((($7) + 16)&4294967295); //@line 677 "_hotshot.c"
        var $9=((($8))>>>0) > 10239; //@line 677 "_hotshot.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 677 "_hotshot.c"
      case 1: // $bb
        var $10=HEAP[$self_addr]; //@line 678 "_hotshot.c"
        var $11=_flush_data($10); //@line 678 "_hotshot.c"
        var $12=((($11))|0) < 0; //@line 678 "_hotshot.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 678 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 679 "_hotshot.c"
        __label__ = 8; break; //@line 679 "_hotshot.c"
      case 3: // $bb2
        var $13=HEAP[$self_addr]; //@line 681 "_hotshot.c"
        var $14=(($13+16)&4294967295); //@line 681 "_hotshot.c"
        var $15=HEAP[$14]; //@line 681 "_hotshot.c"
        var $16=HEAP[$self_addr]; //@line 681 "_hotshot.c"
        var $17=(($16+20)&4294967295); //@line 681 "_hotshot.c"
        var $18=(($17+$15)&4294967295); //@line 681 "_hotshot.c"
        HEAP[$18]=67; //@line 681 "_hotshot.c"
        var $19=HEAP[$self_addr]; //@line 682 "_hotshot.c"
        var $20=(($19+16)&4294967295); //@line 682 "_hotshot.c"
        var $21=HEAP[$20]; //@line 682 "_hotshot.c"
        var $22=((($21) + 1)&4294967295); //@line 682 "_hotshot.c"
        var $23=HEAP[$self_addr]; //@line 682 "_hotshot.c"
        var $24=(($23+16)&4294967295); //@line 682 "_hotshot.c"
        HEAP[$24]=$22; //@line 682 "_hotshot.c"
        var $25=HEAP[$self_addr]; //@line 683 "_hotshot.c"
        var $26=HEAP[$fileno_addr]; //@line 683 "_hotshot.c"
        var $27=_pack_packed_int($25, $26); //@line 683 "_hotshot.c"
        var $28=((($27))|0) < 0; //@line 683 "_hotshot.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 683 "_hotshot.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 684 "_hotshot.c"
        __label__ = 8; break; //@line 684 "_hotshot.c"
      case 5: // $bb4
        var $29=HEAP[$self_addr]; //@line 685 "_hotshot.c"
        var $30=HEAP[$lineno_addr]; //@line 685 "_hotshot.c"
        var $31=_pack_packed_int($29, $30); //@line 685 "_hotshot.c"
        var $32=((($31))|0) < 0; //@line 685 "_hotshot.c"
        if ($32) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 685 "_hotshot.c"
      case 6: // $bb5
        HEAP[$0]=-1; //@line 686 "_hotshot.c"
        __label__ = 8; break; //@line 686 "_hotshot.c"
      case 7: // $bb6
        var $33=HEAP[$self_addr]; //@line 687 "_hotshot.c"
        var $34=HEAP[$funcname_addr]; //@line 687 "_hotshot.c"
        var $35=HEAP[$len]; //@line 687 "_hotshot.c"
        var $36=_pack_string($33, $34, $35); //@line 687 "_hotshot.c"
        HEAP[$0]=$36; //@line 687 "_hotshot.c"
        __label__ = 8; break; //@line 687 "_hotshot.c"
      case 8: // $bb7
        var $37=HEAP[$0]; //@line 679 "_hotshot.c"
        HEAP[$retval]=$37; //@line 679 "_hotshot.c"
        __label__ = 9; break; //@line 679 "_hotshot.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 679 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 679 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_line_times($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 693 "_hotshot.c"
        var $2=(($1+16)&4294967295); //@line 693 "_hotshot.c"
        var $3=HEAP[$2]; //@line 693 "_hotshot.c"
        var $4=((($3) + 2)&4294967295); //@line 693 "_hotshot.c"
        var $5=((($4))|0) > 10239; //@line 693 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 693 "_hotshot.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 694 "_hotshot.c"
        var $7=_flush_data($6); //@line 694 "_hotshot.c"
        var $8=((($7))|0) < 0; //@line 694 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 694 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 695 "_hotshot.c"
        __label__ = 4; break; //@line 695 "_hotshot.c"
      case 3: // $bb2
        var $9=HEAP[$self_addr]; //@line 697 "_hotshot.c"
        var $10=(($9+16)&4294967295); //@line 697 "_hotshot.c"
        var $11=HEAP[$10]; //@line 697 "_hotshot.c"
        var $12=HEAP[$self_addr]; //@line 697 "_hotshot.c"
        var $13=(($12+20)&4294967295); //@line 697 "_hotshot.c"
        var $14=(($13+$11)&4294967295); //@line 697 "_hotshot.c"
        HEAP[$14]=51; //@line 697 "_hotshot.c"
        var $15=HEAP[$self_addr]; //@line 698 "_hotshot.c"
        var $16=(($15+16)&4294967295); //@line 698 "_hotshot.c"
        var $17=HEAP[$16]; //@line 698 "_hotshot.c"
        var $18=((($17) + 1)&4294967295); //@line 698 "_hotshot.c"
        var $19=HEAP[$self_addr]; //@line 698 "_hotshot.c"
        var $20=(($19+10268)&4294967295); //@line 698 "_hotshot.c"
        var $21=HEAP[$20]; //@line 698 "_hotshot.c"
        var $22=((($21))|0)!=0; //@line 698 "_hotshot.c"
        var $23=unSign(($22), 1, 0); //@line 698 "_hotshot.c"
        var $24=HEAP[$self_addr]; //@line 698 "_hotshot.c"
        var $25=(($24+20)&4294967295); //@line 698 "_hotshot.c"
        var $26=(($25+$18)&4294967295); //@line 698 "_hotshot.c"
        HEAP[$26]=$23; //@line 698 "_hotshot.c"
        var $27=HEAP[$self_addr]; //@line 699 "_hotshot.c"
        var $28=(($27+16)&4294967295); //@line 699 "_hotshot.c"
        var $29=HEAP[$28]; //@line 699 "_hotshot.c"
        var $30=((($29) + 2)&4294967295); //@line 699 "_hotshot.c"
        var $31=HEAP[$self_addr]; //@line 699 "_hotshot.c"
        var $32=(($31+16)&4294967295); //@line 699 "_hotshot.c"
        HEAP[$32]=$30; //@line 699 "_hotshot.c"
        HEAP[$0]=0; //@line 700 "_hotshot.c"
        __label__ = 4; break; //@line 700 "_hotshot.c"
      case 4: // $bb3
        var $33=HEAP[$0]; //@line 695 "_hotshot.c"
        HEAP[$retval]=$33; //@line 695 "_hotshot.c"
        __label__ = 5; break; //@line 695 "_hotshot.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 695 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 695 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_frame_times($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 706 "_hotshot.c"
        var $2=(($1+16)&4294967295); //@line 706 "_hotshot.c"
        var $3=HEAP[$2]; //@line 706 "_hotshot.c"
        var $4=((($3) + 2)&4294967295); //@line 706 "_hotshot.c"
        var $5=((($4))|0) > 10239; //@line 706 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 706 "_hotshot.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 707 "_hotshot.c"
        var $7=_flush_data($6); //@line 707 "_hotshot.c"
        var $8=((($7))|0) < 0; //@line 707 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 707 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 708 "_hotshot.c"
        __label__ = 4; break; //@line 708 "_hotshot.c"
      case 3: // $bb2
        var $9=HEAP[$self_addr]; //@line 710 "_hotshot.c"
        var $10=(($9+16)&4294967295); //@line 710 "_hotshot.c"
        var $11=HEAP[$10]; //@line 710 "_hotshot.c"
        var $12=HEAP[$self_addr]; //@line 710 "_hotshot.c"
        var $13=(($12+20)&4294967295); //@line 710 "_hotshot.c"
        var $14=(($13+$11)&4294967295); //@line 710 "_hotshot.c"
        HEAP[$14]=83; //@line 710 "_hotshot.c"
        var $15=HEAP[$self_addr]; //@line 711 "_hotshot.c"
        var $16=(($15+16)&4294967295); //@line 711 "_hotshot.c"
        var $17=HEAP[$16]; //@line 711 "_hotshot.c"
        var $18=((($17) + 1)&4294967295); //@line 711 "_hotshot.c"
        var $19=HEAP[$self_addr]; //@line 711 "_hotshot.c"
        var $20=(($19+10272)&4294967295); //@line 711 "_hotshot.c"
        var $21=HEAP[$20]; //@line 711 "_hotshot.c"
        var $22=((($21))|0)!=0; //@line 711 "_hotshot.c"
        var $23=unSign(($22), 1, 0); //@line 711 "_hotshot.c"
        var $24=HEAP[$self_addr]; //@line 711 "_hotshot.c"
        var $25=(($24+20)&4294967295); //@line 711 "_hotshot.c"
        var $26=(($25+$18)&4294967295); //@line 711 "_hotshot.c"
        HEAP[$26]=$23; //@line 711 "_hotshot.c"
        var $27=HEAP[$self_addr]; //@line 712 "_hotshot.c"
        var $28=(($27+16)&4294967295); //@line 712 "_hotshot.c"
        var $29=HEAP[$28]; //@line 712 "_hotshot.c"
        var $30=((($29) + 2)&4294967295); //@line 712 "_hotshot.c"
        var $31=HEAP[$self_addr]; //@line 712 "_hotshot.c"
        var $32=(($31+16)&4294967295); //@line 712 "_hotshot.c"
        HEAP[$32]=$30; //@line 712 "_hotshot.c"
        HEAP[$0]=0; //@line 713 "_hotshot.c"
        __label__ = 4; break; //@line 713 "_hotshot.c"
      case 4: // $bb3
        var $33=HEAP[$0]; //@line 708 "_hotshot.c"
        HEAP[$retval]=$33; //@line 708 "_hotshot.c"
        __label__ = 5; break; //@line 708 "_hotshot.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 708 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 708 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _tracer_callback($self, $frame, $what, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $frame_addr=__stackBase__+4;
        var $what_addr=__stackBase__+8;
        var $arg_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $iftmp_44=__stackBase__+20;
        var $0=__stackBase__+24;
        var $fileno=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$frame_addr]=$frame;
        HEAP[$what_addr]=$what;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$what_addr]; //@line 864 "_hotshot.c"
        if ($1 == 0) {
          __label__ = 1; break;
        }
        else if ($1 == 2) {
          __label__ = 8; break;
        }
        else if ($1 == 3) {
          __label__ = 7; break;
        }
        else {
        __label__ = 11; break;
        }
        
      case 1: // $bb
        var $2=HEAP[$frame_addr]; //@line 866 "_hotshot.c"
        var $3=(($2+16)&4294967295); //@line 866 "_hotshot.c"
        var $4=HEAP[$3]; //@line 866 "_hotshot.c"
        var $5=HEAP[$self_addr]; //@line 866 "_hotshot.c"
        var $6=_get_fileno($5, $4); //@line 866 "_hotshot.c"
        HEAP[$fileno]=$6; //@line 866 "_hotshot.c"
        var $7=HEAP[$fileno]; //@line 867 "_hotshot.c"
        var $8=((($7))|0) < 0; //@line 867 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 867 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 868 "_hotshot.c"
        __label__ = 12; break; //@line 868 "_hotshot.c"
      case 3: // $bb2
        var $9=HEAP[$frame_addr]; //@line 869 "_hotshot.c"
        var $10=(($9+16)&4294967295); //@line 869 "_hotshot.c"
        var $11=HEAP[$10]; //@line 869 "_hotshot.c"
        var $12=(($11+56)&4294967295); //@line 869 "_hotshot.c"
        var $13=HEAP[$12]; //@line 869 "_hotshot.c"
        var $14=HEAP[$self_addr]; //@line 869 "_hotshot.c"
        var $15=(($14+10272)&4294967295); //@line 869 "_hotshot.c"
        var $16=HEAP[$15]; //@line 869 "_hotshot.c"
        var $17=((($16))|0)!=0; //@line 869 "_hotshot.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 869 "_hotshot.c"
      case 4: // $bb3
        var $18=HEAP[$self_addr]; //@line 869 "_hotshot.c"
        var $19=_get_tdelta($18); //@line 869 "_hotshot.c"
        HEAP[$iftmp_44]=$19; //@line 869 "_hotshot.c"
        __label__ = 6; break; //@line 869 "_hotshot.c"
      case 5: // $bb4
        HEAP[$iftmp_44]=-1; //@line 869 "_hotshot.c"
        __label__ = 6; break; //@line 869 "_hotshot.c"
      case 6: // $bb5
        var $20=HEAP[$self_addr]; //@line 869 "_hotshot.c"
        var $21=HEAP[$fileno]; //@line 869 "_hotshot.c"
        var $22=HEAP[$iftmp_44]; //@line 869 "_hotshot.c"
        var $23=_pack_enter($20, $21, $22, $13); //@line 869 "_hotshot.c"
        HEAP[$0]=$23; //@line 869 "_hotshot.c"
        __label__ = 12; break; //@line 869 "_hotshot.c"
      case 7: // $bb6
        var $24=HEAP[$self_addr]; //@line 874 "_hotshot.c"
        var $25=_get_tdelta($24); //@line 874 "_hotshot.c"
        var $26=HEAP[$self_addr]; //@line 874 "_hotshot.c"
        var $27=_pack_exit($26, $25); //@line 874 "_hotshot.c"
        HEAP[$0]=$27; //@line 874 "_hotshot.c"
        __label__ = 12; break; //@line 874 "_hotshot.c"
      case 8: // $bb7
        var $28=HEAP[$self_addr]; //@line 877 "_hotshot.c"
        var $29=(($28+10268)&4294967295); //@line 877 "_hotshot.c"
        var $30=HEAP[$29]; //@line 877 "_hotshot.c"
        var $31=((($30))|0)!=0; //@line 877 "_hotshot.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 877 "_hotshot.c"
      case 9: // $bb8
        var $32=HEAP[$self_addr]; //@line 878 "_hotshot.c"
        var $33=_get_tdelta($32); //@line 878 "_hotshot.c"
        var $34=HEAP[$frame_addr]; //@line 878 "_hotshot.c"
        var $35=(($34+64)&4294967295); //@line 878 "_hotshot.c"
        var $36=HEAP[$35]; //@line 878 "_hotshot.c"
        var $37=HEAP[$self_addr]; //@line 878 "_hotshot.c"
        var $38=_pack_lineno_tdelta($37, $36, $33); //@line 878 "_hotshot.c"
        HEAP[$0]=$38; //@line 878 "_hotshot.c"
        __label__ = 12; break; //@line 878 "_hotshot.c"
      case 10: // $bb9
        var $39=HEAP[$frame_addr]; //@line 881 "_hotshot.c"
        var $40=(($39+64)&4294967295); //@line 881 "_hotshot.c"
        var $41=HEAP[$40]; //@line 881 "_hotshot.c"
        var $42=HEAP[$self_addr]; //@line 881 "_hotshot.c"
        var $43=_pack_lineno($42, $41); //@line 881 "_hotshot.c"
        HEAP[$0]=$43; //@line 881 "_hotshot.c"
        __label__ = 12; break; //@line 881 "_hotshot.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 887 "_hotshot.c"
        __label__ = 12; break; //@line 887 "_hotshot.c"
      case 12: // $bb11
        var $44=HEAP[$0]; //@line 868 "_hotshot.c"
        HEAP[$retval]=$44; //@line 868 "_hotshot.c"
        __label__ = 13; break; //@line 868 "_hotshot.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 868 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 868 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_fileno($self, $fcode) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $fcode_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $obj=__stackBase__+16;
        var $dict=__stackBase__+20;
        var $fileno=__stackBase__+24;
        var $name=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$fcode_addr]=$fcode;
        var $1=HEAP[$fcode_addr]; //@line 776 "_hotshot.c"
        var $2=(($1+48)&4294967295); //@line 776 "_hotshot.c"
        var $3=HEAP[$2]; //@line 776 "_hotshot.c"
        var $4=HEAP[$self_addr]; //@line 776 "_hotshot.c"
        var $5=(($4+8)&4294967295); //@line 776 "_hotshot.c"
        var $6=HEAP[$5]; //@line 776 "_hotshot.c"
        var $7=_PyDict_GetItem($6, $3); //@line 776 "_hotshot.c"
        HEAP[$obj]=$7; //@line 776 "_hotshot.c"
        var $8=HEAP[$obj]; //@line 777 "_hotshot.c"
        var $9=($8)==0; //@line 777 "_hotshot.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 14; break; } //@line 777 "_hotshot.c"
      case 1: // $bb
        var $10=_PyDict_New(); //@line 779 "_hotshot.c"
        HEAP[$dict]=$10; //@line 779 "_hotshot.c"
        var $11=HEAP[$dict]; //@line 780 "_hotshot.c"
        var $12=($11)==0; //@line 780 "_hotshot.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 780 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 781 "_hotshot.c"
        __label__ = 29; break; //@line 781 "_hotshot.c"
      case 3: // $bb2
        var $13=HEAP[$self_addr]; //@line 783 "_hotshot.c"
        var $14=(($13+10280)&4294967295); //@line 783 "_hotshot.c"
        var $15=HEAP[$14]; //@line 783 "_hotshot.c"
        HEAP[$fileno]=$15; //@line 783 "_hotshot.c"
        var $16=HEAP[$fileno]; //@line 784 "_hotshot.c"
        var $17=HEAP[$dict]; //@line 784 "_hotshot.c"
        var $18=_Py_BuildValue(((__str7)&4294967295), $16, $17); //@line 784 "_hotshot.c"
        HEAP[$obj]=$18; //@line 784 "_hotshot.c"
        var $19=HEAP[$obj]; //@line 785 "_hotshot.c"
        var $20=($19)==0; //@line 785 "_hotshot.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 785 "_hotshot.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 786 "_hotshot.c"
        __label__ = 29; break; //@line 786 "_hotshot.c"
      case 5: // $bb4
        var $21=HEAP[$fcode_addr]; //@line 788 "_hotshot.c"
        var $22=(($21+48)&4294967295); //@line 788 "_hotshot.c"
        var $23=HEAP[$22]; //@line 788 "_hotshot.c"
        var $24=HEAP[$self_addr]; //@line 788 "_hotshot.c"
        var $25=(($24+8)&4294967295); //@line 788 "_hotshot.c"
        var $26=HEAP[$25]; //@line 788 "_hotshot.c"
        var $27=HEAP[$obj]; //@line 788 "_hotshot.c"
        var $28=_PyDict_SetItem($26, $23, $27); //@line 788 "_hotshot.c"
        var $29=((($28))|0)!=0; //@line 788 "_hotshot.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 788 "_hotshot.c"
      case 6: // $bb5
        var $30=HEAP[$obj]; //@line 789 "_hotshot.c"
        var $31=(($30)&4294967295); //@line 789 "_hotshot.c"
        var $32=HEAP[$31]; //@line 789 "_hotshot.c"
        var $33=((($32) - 1)&4294967295); //@line 789 "_hotshot.c"
        var $34=HEAP[$obj]; //@line 789 "_hotshot.c"
        var $35=(($34)&4294967295); //@line 789 "_hotshot.c"
        HEAP[$35]=$33; //@line 789 "_hotshot.c"
        var $36=HEAP[$obj]; //@line 789 "_hotshot.c"
        var $37=(($36)&4294967295); //@line 789 "_hotshot.c"
        var $38=HEAP[$37]; //@line 789 "_hotshot.c"
        var $39=((($38))|0)==0; //@line 789 "_hotshot.c"
        if ($39) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 789 "_hotshot.c"
      case 7: // $bb6
        var $40=HEAP[$obj]; //@line 789 "_hotshot.c"
        var $41=(($40+4)&4294967295); //@line 789 "_hotshot.c"
        var $42=HEAP[$41]; //@line 789 "_hotshot.c"
        var $43=(($42+24)&4294967295); //@line 789 "_hotshot.c"
        var $44=HEAP[$43]; //@line 789 "_hotshot.c"
        var $45=HEAP[$obj]; //@line 789 "_hotshot.c"
        FUNCTION_TABLE[$44]($45); //@line 789 "_hotshot.c"
        __label__ = 8; break; //@line 789 "_hotshot.c"
      case 8: // $bb7
        HEAP[$0]=-1; //@line 790 "_hotshot.c"
        __label__ = 29; break; //@line 790 "_hotshot.c"
      case 9: // $bb8
        var $46=HEAP[$self_addr]; //@line 792 "_hotshot.c"
        var $47=(($46+10280)&4294967295); //@line 792 "_hotshot.c"
        var $48=HEAP[$47]; //@line 792 "_hotshot.c"
        var $49=((($48) + 1)&4294967295); //@line 792 "_hotshot.c"
        var $50=HEAP[$self_addr]; //@line 792 "_hotshot.c"
        var $51=(($50+10280)&4294967295); //@line 792 "_hotshot.c"
        HEAP[$51]=$49; //@line 792 "_hotshot.c"
        var $52=HEAP[$obj]; //@line 793 "_hotshot.c"
        var $53=(($52)&4294967295); //@line 793 "_hotshot.c"
        var $54=HEAP[$53]; //@line 793 "_hotshot.c"
        var $55=((($54) - 1)&4294967295); //@line 793 "_hotshot.c"
        var $56=HEAP[$obj]; //@line 793 "_hotshot.c"
        var $57=(($56)&4294967295); //@line 793 "_hotshot.c"
        HEAP[$57]=$55; //@line 793 "_hotshot.c"
        var $58=HEAP[$obj]; //@line 793 "_hotshot.c"
        var $59=(($58)&4294967295); //@line 793 "_hotshot.c"
        var $60=HEAP[$59]; //@line 793 "_hotshot.c"
        var $61=((($60))|0)==0; //@line 793 "_hotshot.c"
        if ($61) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 793 "_hotshot.c"
      case 10: // $bb9
        var $62=HEAP[$obj]; //@line 793 "_hotshot.c"
        var $63=(($62+4)&4294967295); //@line 793 "_hotshot.c"
        var $64=HEAP[$63]; //@line 793 "_hotshot.c"
        var $65=(($64+24)&4294967295); //@line 793 "_hotshot.c"
        var $66=HEAP[$65]; //@line 793 "_hotshot.c"
        var $67=HEAP[$obj]; //@line 793 "_hotshot.c"
        FUNCTION_TABLE[$66]($67); //@line 793 "_hotshot.c"
        __label__ = 11; break; //@line 793 "_hotshot.c"
      case 11: // $bb10
        var $68=HEAP[$fcode_addr]; //@line 794 "_hotshot.c"
        var $69=(($68+48)&4294967295); //@line 794 "_hotshot.c"
        var $70=HEAP[$69]; //@line 794 "_hotshot.c"
        var $71=$70; //@line 794 "_hotshot.c"
        var $72=(($71+20)&4294967295); //@line 794 "_hotshot.c"
        var $73=(($72)&4294967295); //@line 794 "_hotshot.c"
        var $74=HEAP[$self_addr]; //@line 794 "_hotshot.c"
        var $75=HEAP[$fileno]; //@line 794 "_hotshot.c"
        var $76=_pack_define_file($74, $75, $73); //@line 794 "_hotshot.c"
        var $77=((($76))|0) < 0; //@line 794 "_hotshot.c"
        if ($77) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 794 "_hotshot.c"
      case 12: // $bb11
        HEAP[$0]=-1; //@line 796 "_hotshot.c"
        __label__ = 29; break; //@line 796 "_hotshot.c"
      case 13: // $bb12
        __label__ = 15; break; //@line 796 "_hotshot.c"
      case 14: // $bb13
        var $78=HEAP[$obj]; //@line 800 "_hotshot.c"
        var $79=$78; //@line 800 "_hotshot.c"
        var $80=(($79+12)&4294967295); //@line 800 "_hotshot.c"
        var $81=(($80)&4294967295); //@line 800 "_hotshot.c"
        var $82=HEAP[$81]; //@line 800 "_hotshot.c"
        var $83=$82; //@line 800 "_hotshot.c"
        var $84=(($83+8)&4294967295); //@line 800 "_hotshot.c"
        var $85=HEAP[$84]; //@line 800 "_hotshot.c"
        HEAP[$fileno]=$85; //@line 800 "_hotshot.c"
        var $86=HEAP[$obj]; //@line 801 "_hotshot.c"
        var $87=$86; //@line 801 "_hotshot.c"
        var $88=(($87+12)&4294967295); //@line 801 "_hotshot.c"
        var $89=(($88+4)&4294967295); //@line 801 "_hotshot.c"
        var $90=HEAP[$89]; //@line 801 "_hotshot.c"
        HEAP[$dict]=$90; //@line 801 "_hotshot.c"
        __label__ = 15; break; //@line 801 "_hotshot.c"
      case 15: // $bb14
        var $91=HEAP[$fcode_addr]; //@line 804 "_hotshot.c"
        var $92=(($91+56)&4294967295); //@line 804 "_hotshot.c"
        var $93=HEAP[$92]; //@line 804 "_hotshot.c"
        var $94=_PyInt_FromLong($93); //@line 804 "_hotshot.c"
        HEAP[$obj]=$94; //@line 804 "_hotshot.c"
        var $95=HEAP[$obj]; //@line 805 "_hotshot.c"
        var $96=($95)==0; //@line 805 "_hotshot.c"
        if ($96) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 805 "_hotshot.c"
      case 16: // $bb15
        _PyErr_Clear(); //@line 807 "_hotshot.c"
        __label__ = 28; break; //@line 807 "_hotshot.c"
      case 17: // $bb16
        var $97=HEAP[$dict]; //@line 810 "_hotshot.c"
        var $98=HEAP[$obj]; //@line 810 "_hotshot.c"
        var $99=_PyDict_GetItem($97, $98); //@line 810 "_hotshot.c"
        HEAP[$name]=$99; //@line 810 "_hotshot.c"
        var $100=HEAP[$name]; //@line 811 "_hotshot.c"
        var $101=($100)==0; //@line 811 "_hotshot.c"
        if ($101) { __label__ = 18; break; } else { __label__ = 26; break; } //@line 811 "_hotshot.c"
      case 18: // $bb17
        var $102=HEAP[$fcode_addr]; //@line 812 "_hotshot.c"
        var $103=(($102+52)&4294967295); //@line 812 "_hotshot.c"
        var $104=HEAP[$103]; //@line 812 "_hotshot.c"
        var $105=$104; //@line 812 "_hotshot.c"
        var $106=(($105+20)&4294967295); //@line 812 "_hotshot.c"
        var $107=(($106)&4294967295); //@line 812 "_hotshot.c"
        var $108=HEAP[$fcode_addr]; //@line 812 "_hotshot.c"
        var $109=(($108+56)&4294967295); //@line 812 "_hotshot.c"
        var $110=HEAP[$109]; //@line 812 "_hotshot.c"
        var $111=HEAP[$self_addr]; //@line 812 "_hotshot.c"
        var $112=HEAP[$fileno]; //@line 812 "_hotshot.c"
        var $113=_pack_define_func($111, $112, $110, $107); //@line 812 "_hotshot.c"
        var $114=((($113))|0) < 0; //@line 812 "_hotshot.c"
        if ($114) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 812 "_hotshot.c"
      case 19: // $bb18
        var $115=HEAP[$obj]; //@line 814 "_hotshot.c"
        var $116=(($115)&4294967295); //@line 814 "_hotshot.c"
        var $117=HEAP[$116]; //@line 814 "_hotshot.c"
        var $118=((($117) - 1)&4294967295); //@line 814 "_hotshot.c"
        var $119=HEAP[$obj]; //@line 814 "_hotshot.c"
        var $120=(($119)&4294967295); //@line 814 "_hotshot.c"
        HEAP[$120]=$118; //@line 814 "_hotshot.c"
        var $121=HEAP[$obj]; //@line 814 "_hotshot.c"
        var $122=(($121)&4294967295); //@line 814 "_hotshot.c"
        var $123=HEAP[$122]; //@line 814 "_hotshot.c"
        var $124=((($123))|0)==0; //@line 814 "_hotshot.c"
        if ($124) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 814 "_hotshot.c"
      case 20: // $bb19
        var $125=HEAP[$obj]; //@line 814 "_hotshot.c"
        var $126=(($125+4)&4294967295); //@line 814 "_hotshot.c"
        var $127=HEAP[$126]; //@line 814 "_hotshot.c"
        var $128=(($127+24)&4294967295); //@line 814 "_hotshot.c"
        var $129=HEAP[$128]; //@line 814 "_hotshot.c"
        var $130=HEAP[$obj]; //@line 814 "_hotshot.c"
        FUNCTION_TABLE[$129]($130); //@line 814 "_hotshot.c"
        __label__ = 21; break; //@line 814 "_hotshot.c"
      case 21: // $bb20
        HEAP[$0]=-1; //@line 815 "_hotshot.c"
        __label__ = 29; break; //@line 815 "_hotshot.c"
      case 22: // $bb21
        var $131=HEAP[$fcode_addr]; //@line 817 "_hotshot.c"
        var $132=(($131+52)&4294967295); //@line 817 "_hotshot.c"
        var $133=HEAP[$132]; //@line 817 "_hotshot.c"
        var $134=HEAP[$dict]; //@line 817 "_hotshot.c"
        var $135=HEAP[$obj]; //@line 817 "_hotshot.c"
        var $136=_PyDict_SetItem($134, $135, $133); //@line 817 "_hotshot.c"
        var $137=((($136))|0)!=0; //@line 817 "_hotshot.c"
        if ($137) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 817 "_hotshot.c"
      case 23: // $bb22
        var $138=HEAP[$obj]; //@line 818 "_hotshot.c"
        var $139=(($138)&4294967295); //@line 818 "_hotshot.c"
        var $140=HEAP[$139]; //@line 818 "_hotshot.c"
        var $141=((($140) - 1)&4294967295); //@line 818 "_hotshot.c"
        var $142=HEAP[$obj]; //@line 818 "_hotshot.c"
        var $143=(($142)&4294967295); //@line 818 "_hotshot.c"
        HEAP[$143]=$141; //@line 818 "_hotshot.c"
        var $144=HEAP[$obj]; //@line 818 "_hotshot.c"
        var $145=(($144)&4294967295); //@line 818 "_hotshot.c"
        var $146=HEAP[$145]; //@line 818 "_hotshot.c"
        var $147=((($146))|0)==0; //@line 818 "_hotshot.c"
        if ($147) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 818 "_hotshot.c"
      case 24: // $bb23
        var $148=HEAP[$obj]; //@line 818 "_hotshot.c"
        var $149=(($148+4)&4294967295); //@line 818 "_hotshot.c"
        var $150=HEAP[$149]; //@line 818 "_hotshot.c"
        var $151=(($150+24)&4294967295); //@line 818 "_hotshot.c"
        var $152=HEAP[$151]; //@line 818 "_hotshot.c"
        var $153=HEAP[$obj]; //@line 818 "_hotshot.c"
        FUNCTION_TABLE[$152]($153); //@line 818 "_hotshot.c"
        __label__ = 25; break; //@line 818 "_hotshot.c"
      case 25: // $bb24
        HEAP[$0]=-1; //@line 819 "_hotshot.c"
        __label__ = 29; break; //@line 819 "_hotshot.c"
      case 26: // $bb25
        var $154=HEAP[$obj]; //@line 822 "_hotshot.c"
        var $155=(($154)&4294967295); //@line 822 "_hotshot.c"
        var $156=HEAP[$155]; //@line 822 "_hotshot.c"
        var $157=((($156) - 1)&4294967295); //@line 822 "_hotshot.c"
        var $158=HEAP[$obj]; //@line 822 "_hotshot.c"
        var $159=(($158)&4294967295); //@line 822 "_hotshot.c"
        HEAP[$159]=$157; //@line 822 "_hotshot.c"
        var $160=HEAP[$obj]; //@line 822 "_hotshot.c"
        var $161=(($160)&4294967295); //@line 822 "_hotshot.c"
        var $162=HEAP[$161]; //@line 822 "_hotshot.c"
        var $163=((($162))|0)==0; //@line 822 "_hotshot.c"
        if ($163) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 822 "_hotshot.c"
      case 27: // $bb26
        var $164=HEAP[$obj]; //@line 822 "_hotshot.c"
        var $165=(($164+4)&4294967295); //@line 822 "_hotshot.c"
        var $166=HEAP[$165]; //@line 822 "_hotshot.c"
        var $167=(($166+24)&4294967295); //@line 822 "_hotshot.c"
        var $168=HEAP[$167]; //@line 822 "_hotshot.c"
        var $169=HEAP[$obj]; //@line 822 "_hotshot.c"
        FUNCTION_TABLE[$168]($169); //@line 822 "_hotshot.c"
        __label__ = 28; break; //@line 822 "_hotshot.c"
      case 28: // $bb27
        var $170=HEAP[$fileno]; //@line 824 "_hotshot.c"
        HEAP[$0]=$170; //@line 824 "_hotshot.c"
        __label__ = 29; break; //@line 824 "_hotshot.c"
      case 29: // $bb28
        var $171=HEAP[$0]; //@line 781 "_hotshot.c"
        HEAP[$retval]=$171; //@line 781 "_hotshot.c"
        __label__ = 30; break; //@line 781 "_hotshot.c"
      case 30: // $return
        var $retval29=HEAP[$retval]; //@line 781 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 781 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_tdelta($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $tdelta=__stackBase__+12;
        var $tv=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=_gettimeofday($tv, 0); //@line 841 "_hotshot.c"
        var $2=(($tv+4)&4294967295); //@line 843 "_hotshot.c"
        var $3=HEAP[$2]; //@line 843 "_hotshot.c"
        var $4=HEAP[$self_addr]; //@line 843 "_hotshot.c"
        var $5=(($4+10284)&4294967295); //@line 843 "_hotshot.c"
        var $6=(($5+4)&4294967295); //@line 843 "_hotshot.c"
        var $7=HEAP[$6]; //@line 843 "_hotshot.c"
        var $8=((($3) - ($7))&4294967295); //@line 843 "_hotshot.c"
        HEAP[$tdelta]=$8; //@line 843 "_hotshot.c"
        var $9=(($tv)&4294967295); //@line 844 "_hotshot.c"
        var $10=HEAP[$9]; //@line 844 "_hotshot.c"
        var $11=HEAP[$self_addr]; //@line 844 "_hotshot.c"
        var $12=(($11+10284)&4294967295); //@line 844 "_hotshot.c"
        var $13=(($12)&4294967295); //@line 844 "_hotshot.c"
        var $14=HEAP[$13]; //@line 844 "_hotshot.c"
        var $15=((($10))|0)!=((($14))|0); //@line 844 "_hotshot.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 844 "_hotshot.c"
      case 1: // $bb
        var $16=(($tv)&4294967295); //@line 845 "_hotshot.c"
        var $17=HEAP[$16]; //@line 845 "_hotshot.c"
        var $18=HEAP[$self_addr]; //@line 845 "_hotshot.c"
        var $19=(($18+10284)&4294967295); //@line 845 "_hotshot.c"
        var $20=(($19)&4294967295); //@line 845 "_hotshot.c"
        var $21=HEAP[$20]; //@line 845 "_hotshot.c"
        var $22=((($17) - ($21))&4294967295); //@line 845 "_hotshot.c"
        var $23=((($22) * 1000000)&4294967295); //@line 845 "_hotshot.c"
        var $24=HEAP[$tdelta]; //@line 845 "_hotshot.c"
        var $25=((($23) + ($24))&4294967295); //@line 845 "_hotshot.c"
        HEAP[$tdelta]=$25; //@line 845 "_hotshot.c"
        __label__ = 2; break; //@line 845 "_hotshot.c"
      case 2: // $bb1
        var $26=HEAP[$tdelta]; //@line 848 "_hotshot.c"
        var $27=((($26))|0) < 0; //@line 848 "_hotshot.c"
        if ($27) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 848 "_hotshot.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 849 "_hotshot.c"
        __label__ = 5; break; //@line 849 "_hotshot.c"
      case 4: // $bb3
        var $28=HEAP[$self_addr]; //@line 851 "_hotshot.c"
        var $29=(($28+10284)&4294967295); //@line 851 "_hotshot.c"
        var $30=(($29)&4294967295); //@line 851 "_hotshot.c"
        var $31=(($tv)&4294967295); //@line 851 "_hotshot.c"
        var $32=HEAP[$31]; //@line 851 "_hotshot.c"
        HEAP[$30]=$32; //@line 851 "_hotshot.c"
        var $33=(($29+4)&4294967295); //@line 851 "_hotshot.c"
        var $34=(($tv+4)&4294967295); //@line 851 "_hotshot.c"
        var $35=HEAP[$34]; //@line 851 "_hotshot.c"
        HEAP[$33]=$35; //@line 851 "_hotshot.c"
        var $36=HEAP[$tdelta]; //@line 852 "_hotshot.c"
        HEAP[$0]=$36; //@line 852 "_hotshot.c"
        __label__ = 5; break; //@line 852 "_hotshot.c"
      case 5: // $bb4
        var $37=HEAP[$0]; //@line 849 "_hotshot.c"
        HEAP[$retval]=$37; //@line 849 "_hotshot.c"
        __label__ = 6; break; //@line 849 "_hotshot.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 849 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 849 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_enter($self, $fileno, $tdelta, $lineno) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $fileno_addr=__stackBase__+4;
        var $tdelta_addr=__stackBase__+8;
        var $lineno_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$fileno_addr]=$fileno;
        HEAP[$tdelta_addr]=$tdelta;
        HEAP[$lineno_addr]=$lineno;
        var $1=HEAP[$self_addr]; //@line 719 "_hotshot.c"
        var $2=(($1+16)&4294967295); //@line 719 "_hotshot.c"
        var $3=HEAP[$2]; //@line 719 "_hotshot.c"
        var $4=((($3) + 16)&4294967295); //@line 719 "_hotshot.c"
        var $5=((($4))>>>0) > 10239; //@line 719 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 719 "_hotshot.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 720 "_hotshot.c"
        var $7=_flush_data($6); //@line 720 "_hotshot.c"
        var $8=((($7))|0) < 0; //@line 720 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 720 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 721 "_hotshot.c"
        __label__ = 6; break; //@line 721 "_hotshot.c"
      case 3: // $bb2
        var $9=HEAP[$self_addr]; //@line 723 "_hotshot.c"
        var $10=HEAP[$fileno_addr]; //@line 723 "_hotshot.c"
        var $11=_pack_modified_packed_int($9, $10, 2, 0); //@line 723 "_hotshot.c"
        var $12=HEAP[$self_addr]; //@line 724 "_hotshot.c"
        var $13=HEAP[$lineno_addr]; //@line 724 "_hotshot.c"
        var $14=_pack_packed_int($12, $13); //@line 724 "_hotshot.c"
        var $15=HEAP[$self_addr]; //@line 725 "_hotshot.c"
        var $16=(($15+10272)&4294967295); //@line 725 "_hotshot.c"
        var $17=HEAP[$16]; //@line 725 "_hotshot.c"
        var $18=((($17))|0)!=0; //@line 725 "_hotshot.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 725 "_hotshot.c"
      case 4: // $bb3
        var $19=HEAP[$self_addr]; //@line 726 "_hotshot.c"
        var $20=HEAP[$tdelta_addr]; //@line 726 "_hotshot.c"
        var $21=_pack_packed_int($19, $20); //@line 726 "_hotshot.c"
        HEAP[$0]=$21; //@line 726 "_hotshot.c"
        __label__ = 6; break; //@line 726 "_hotshot.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 728 "_hotshot.c"
        __label__ = 6; break; //@line 728 "_hotshot.c"
      case 6: // $bb5
        var $22=HEAP[$0]; //@line 721 "_hotshot.c"
        HEAP[$retval]=$22; //@line 721 "_hotshot.c"
        __label__ = 7; break; //@line 721 "_hotshot.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 721 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 721 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_exit($self, $tdelta) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $tdelta_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$tdelta_addr]=$tdelta;
        var $1=HEAP[$self_addr]; //@line 734 "_hotshot.c"
        var $2=(($1+16)&4294967295); //@line 734 "_hotshot.c"
        var $3=HEAP[$2]; //@line 734 "_hotshot.c"
        var $4=((($3) + 6)&4294967295); //@line 734 "_hotshot.c"
        var $5=((($4))>>>0) > 10239; //@line 734 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 734 "_hotshot.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 735 "_hotshot.c"
        var $7=_flush_data($6); //@line 735 "_hotshot.c"
        var $8=((($7))|0) < 0; //@line 735 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 735 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 736 "_hotshot.c"
        __label__ = 6; break; //@line 736 "_hotshot.c"
      case 3: // $bb2
        var $9=HEAP[$self_addr]; //@line 738 "_hotshot.c"
        var $10=(($9+10272)&4294967295); //@line 738 "_hotshot.c"
        var $11=HEAP[$10]; //@line 738 "_hotshot.c"
        var $12=((($11))|0)!=0; //@line 738 "_hotshot.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 738 "_hotshot.c"
      case 4: // $bb3
        var $13=HEAP[$self_addr]; //@line 739 "_hotshot.c"
        var $14=HEAP[$tdelta_addr]; //@line 739 "_hotshot.c"
        var $15=_pack_modified_packed_int($13, $14, 2, 1); //@line 739 "_hotshot.c"
        HEAP[$0]=$15; //@line 739 "_hotshot.c"
        __label__ = 6; break; //@line 739 "_hotshot.c"
      case 5: // $bb4
        var $16=HEAP[$self_addr]; //@line 740 "_hotshot.c"
        var $17=(($16+16)&4294967295); //@line 740 "_hotshot.c"
        var $18=HEAP[$17]; //@line 740 "_hotshot.c"
        var $19=HEAP[$self_addr]; //@line 740 "_hotshot.c"
        var $20=(($19+20)&4294967295); //@line 740 "_hotshot.c"
        var $21=(($20+$18)&4294967295); //@line 740 "_hotshot.c"
        HEAP[$21]=1; //@line 740 "_hotshot.c"
        var $22=HEAP[$self_addr]; //@line 741 "_hotshot.c"
        var $23=(($22+16)&4294967295); //@line 741 "_hotshot.c"
        var $24=HEAP[$23]; //@line 741 "_hotshot.c"
        var $25=((($24) + 1)&4294967295); //@line 741 "_hotshot.c"
        var $26=HEAP[$self_addr]; //@line 741 "_hotshot.c"
        var $27=(($26+16)&4294967295); //@line 741 "_hotshot.c"
        HEAP[$27]=$25; //@line 741 "_hotshot.c"
        HEAP[$0]=0; //@line 742 "_hotshot.c"
        __label__ = 6; break; //@line 742 "_hotshot.c"
      case 6: // $bb5
        var $28=HEAP[$0]; //@line 736 "_hotshot.c"
        HEAP[$retval]=$28; //@line 736 "_hotshot.c"
        __label__ = 7; break; //@line 736 "_hotshot.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 736 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 736 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_lineno_tdelta($self, $lineno, $tdelta) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $lineno_addr=__stackBase__+4;
        var $tdelta_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$lineno_addr]=$lineno;
        HEAP[$tdelta_addr]=$tdelta;
        var $1=HEAP[$self_addr]; //@line 758 "_hotshot.c"
        var $2=(($1+16)&4294967295); //@line 758 "_hotshot.c"
        var $3=HEAP[$2]; //@line 758 "_hotshot.c"
        var $4=((($3) + 11)&4294967295); //@line 758 "_hotshot.c"
        var $5=((($4))>>>0) > 10239; //@line 758 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 758 "_hotshot.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 759 "_hotshot.c"
        var $7=_flush_data($6); //@line 759 "_hotshot.c"
        var $8=((($7))|0) < 0; //@line 759 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 759 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 760 "_hotshot.c"
        __label__ = 6; break; //@line 760 "_hotshot.c"
      case 3: // $bb2
        var $9=HEAP[$self_addr]; //@line 762 "_hotshot.c"
        var $10=HEAP[$lineno_addr]; //@line 762 "_hotshot.c"
        var $11=_pack_modified_packed_int($9, $10, 2, 2); //@line 762 "_hotshot.c"
        var $12=((($11))|0) < 0; //@line 762 "_hotshot.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 762 "_hotshot.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 763 "_hotshot.c"
        __label__ = 6; break; //@line 763 "_hotshot.c"
      case 5: // $bb4
        var $13=HEAP[$self_addr]; //@line 764 "_hotshot.c"
        var $14=HEAP[$tdelta_addr]; //@line 764 "_hotshot.c"
        var $15=_pack_packed_int($13, $14); //@line 764 "_hotshot.c"
        HEAP[$0]=$15; //@line 764 "_hotshot.c"
        __label__ = 6; break; //@line 764 "_hotshot.c"
      case 6: // $bb5
        var $16=HEAP[$0]; //@line 760 "_hotshot.c"
        HEAP[$retval]=$16; //@line 760 "_hotshot.c"
        __label__ = 7; break; //@line 760 "_hotshot.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 760 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 760 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_lineno($self, $lineno) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $lineno_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$lineno_addr]=$lineno;
        var $1=HEAP[$self_addr]; //@line 748 "_hotshot.c"
        var $2=(($1+16)&4294967295); //@line 748 "_hotshot.c"
        var $3=HEAP[$2]; //@line 748 "_hotshot.c"
        var $4=((($3) + 6)&4294967295); //@line 748 "_hotshot.c"
        var $5=((($4))>>>0) > 10239; //@line 748 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 748 "_hotshot.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 749 "_hotshot.c"
        var $7=_flush_data($6); //@line 749 "_hotshot.c"
        var $8=((($7))|0) < 0; //@line 749 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 749 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 750 "_hotshot.c"
        __label__ = 4; break; //@line 750 "_hotshot.c"
      case 3: // $bb2
        var $9=HEAP[$self_addr]; //@line 752 "_hotshot.c"
        var $10=HEAP[$lineno_addr]; //@line 752 "_hotshot.c"
        var $11=_pack_modified_packed_int($9, $10, 2, 2); //@line 752 "_hotshot.c"
        HEAP[$0]=$11; //@line 752 "_hotshot.c"
        __label__ = 4; break; //@line 752 "_hotshot.c"
      case 4: // $bb3
        var $12=HEAP[$0]; //@line 750 "_hotshot.c"
        HEAP[$retval]=$12; //@line 750 "_hotshot.c"
        __label__ = 5; break; //@line 750 "_hotshot.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 750 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 750 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _pack_modified_packed_int($self, $value, $modsize, $subfield) {
    var __stackBase__  = STACKTOP; STACKTOP += 33; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 33);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $value_addr=__stackBase__+4;
        var $modsize_addr=__stackBase__+8;
        var $subfield_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $bits=__stackBase__+24;
        var $partial=__stackBase__+28;
        var $b=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$value_addr]=$value;
        HEAP[$modsize_addr]=$modsize;
        HEAP[$subfield_addr]=$subfield;
        var $1=HEAP[$modsize_addr]; //@line 608 "_hotshot.c"
        var $2=((7 - ($1))&4294967295); //@line 608 "_hotshot.c"
        HEAP[$bits]=$2; //@line 608 "_hotshot.c"
        var $3=HEAP[$bits]; //@line 609 "_hotshot.c"
        var $4=((_maxvalues_8890+$3*4)&4294967295); //@line 609 "_hotshot.c"
        var $5=HEAP[$4]; //@line 609 "_hotshot.c"
        var $6=HEAP[$value_addr]; //@line 609 "_hotshot.c"
        var $7=($5) & ($6); //@line 609 "_hotshot.c"
        HEAP[$partial]=$7; //@line 609 "_hotshot.c"
        var $8=HEAP[$partial]; //@line 610 "_hotshot.c"
        var $9=HEAP[$modsize_addr]; //@line 610 "_hotshot.c"
        var $10=($8) << ($9); //@line 610 "_hotshot.c"
        var $11=((($10)) & 255); //@line 610 "_hotshot.c"
        var $12=HEAP[$subfield_addr]; //@line 610 "_hotshot.c"
        var $13=((($12)) & 255); //@line 610 "_hotshot.c"
        var $14=($11) | ($13); //@line 610 "_hotshot.c"
        HEAP[$b]=$14; //@line 610 "_hotshot.c"
        var $15=HEAP[$partial]; //@line 612 "_hotshot.c"
        var $16=HEAP[$value_addr]; //@line 612 "_hotshot.c"
        var $17=((($15))|0)!=((($16))|0); //@line 612 "_hotshot.c"
        if ($17) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 612 "_hotshot.c"
      case 1: // $bb
        var $18=HEAP[$b]; //@line 613 "_hotshot.c"
        var $19=($18) | -128; //@line 613 "_hotshot.c"
        HEAP[$b]=$19; //@line 613 "_hotshot.c"
        var $20=HEAP[$self_addr]; //@line 614 "_hotshot.c"
        var $21=(($20+16)&4294967295); //@line 614 "_hotshot.c"
        var $22=HEAP[$21]; //@line 614 "_hotshot.c"
        var $23=HEAP[$self_addr]; //@line 614 "_hotshot.c"
        var $24=(($23+20)&4294967295); //@line 614 "_hotshot.c"
        var $25=(($24+$22)&4294967295); //@line 614 "_hotshot.c"
        var $26=HEAP[$b]; //@line 614 "_hotshot.c"
        HEAP[$25]=$26; //@line 614 "_hotshot.c"
        var $27=HEAP[$self_addr]; //@line 615 "_hotshot.c"
        var $28=(($27+16)&4294967295); //@line 615 "_hotshot.c"
        var $29=HEAP[$28]; //@line 615 "_hotshot.c"
        var $30=((($29) + 1)&4294967295); //@line 615 "_hotshot.c"
        var $31=HEAP[$self_addr]; //@line 615 "_hotshot.c"
        var $32=(($31+16)&4294967295); //@line 615 "_hotshot.c"
        HEAP[$32]=$30; //@line 615 "_hotshot.c"
        var $33=HEAP[$value_addr]; //@line 616 "_hotshot.c"
        var $34=HEAP[$bits]; //@line 616 "_hotshot.c"
        var $35=((($33))|0) >> ((($34))|0); //@line 616 "_hotshot.c"
        var $36=HEAP[$self_addr]; //@line 616 "_hotshot.c"
        var $37=_pack_packed_int($36, $35); //@line 616 "_hotshot.c"
        HEAP[$0]=$37; //@line 616 "_hotshot.c"
        __label__ = 3; break; //@line 616 "_hotshot.c"
      case 2: // $bb1
        var $38=HEAP[$self_addr]; //@line 618 "_hotshot.c"
        var $39=(($38+16)&4294967295); //@line 618 "_hotshot.c"
        var $40=HEAP[$39]; //@line 618 "_hotshot.c"
        var $41=HEAP[$self_addr]; //@line 618 "_hotshot.c"
        var $42=(($41+20)&4294967295); //@line 618 "_hotshot.c"
        var $43=(($42+$40)&4294967295); //@line 618 "_hotshot.c"
        var $44=HEAP[$b]; //@line 618 "_hotshot.c"
        HEAP[$43]=$44; //@line 618 "_hotshot.c"
        var $45=HEAP[$self_addr]; //@line 619 "_hotshot.c"
        var $46=(($45+16)&4294967295); //@line 619 "_hotshot.c"
        var $47=HEAP[$46]; //@line 619 "_hotshot.c"
        var $48=((($47) + 1)&4294967295); //@line 619 "_hotshot.c"
        var $49=HEAP[$self_addr]; //@line 619 "_hotshot.c"
        var $50=(($49+16)&4294967295); //@line 619 "_hotshot.c"
        HEAP[$50]=$48; //@line 619 "_hotshot.c"
        HEAP[$0]=0; //@line 620 "_hotshot.c"
        __label__ = 3; break; //@line 620 "_hotshot.c"
      case 3: // $bb2
        var $51=HEAP[$0]; //@line 616 "_hotshot.c"
        HEAP[$retval]=$51; //@line 616 "_hotshot.c"
        __label__ = 4; break; //@line 616 "_hotshot.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 616 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 616 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _calibrate() {
    var __stackBase__  = STACKTOP; STACKTOP += 160; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 160);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tv1=__stackBase__;
        var $tv2=__stackBase__+8;
        var $ru1=__stackBase__+16;
        var $ru2=__stackBase__+88;
        var $_alloca_point_=0;
        var $0=_gettimeofday($tv1, 0); //@line 910 "_hotshot.c"
        __label__ = 1; break; //@line 910 "_hotshot.c"
      case 1: // $bb
        var $1=_gettimeofday($tv2, 0); //@line 912 "_hotshot.c"
        var $2=(($tv1)&4294967295); //@line 920 "_hotshot.c"
        var $3=HEAP[$2]; //@line 920 "_hotshot.c"
        var $4=(($tv2)&4294967295); //@line 920 "_hotshot.c"
        var $5=HEAP[$4]; //@line 920 "_hotshot.c"
        var $6=((($3))|0)!=((($5))|0); //@line 920 "_hotshot.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 920 "_hotshot.c"
      case 2: // $bb1
        var $7=(($tv1+4)&4294967295); //@line 920 "_hotshot.c"
        var $8=HEAP[$7]; //@line 920 "_hotshot.c"
        var $9=(($tv2+4)&4294967295); //@line 920 "_hotshot.c"
        var $10=HEAP[$9]; //@line 920 "_hotshot.c"
        var $11=((($8))|0)!=((($10))|0); //@line 920 "_hotshot.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 920 "_hotshot.c"
      case 3: // $bb2
        var $12=(($tv1)&4294967295); //@line 921 "_hotshot.c"
        var $13=HEAP[$12]; //@line 921 "_hotshot.c"
        var $14=(($tv2)&4294967295); //@line 921 "_hotshot.c"
        var $15=HEAP[$14]; //@line 921 "_hotshot.c"
        var $16=((($13))|0)==((($15))|0); //@line 921 "_hotshot.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 921 "_hotshot.c"
      case 4: // $bb3
        var $17=(($tv2+4)&4294967295); //@line 922 "_hotshot.c"
        var $18=HEAP[$17]; //@line 922 "_hotshot.c"
        var $19=(($tv1+4)&4294967295); //@line 922 "_hotshot.c"
        var $20=HEAP[$19]; //@line 922 "_hotshot.c"
        var $21=((($18) - ($20))&4294967295); //@line 922 "_hotshot.c"
        HEAP[_timeofday_diff]=$21; //@line 922 "_hotshot.c"
        __label__ = 6; break; //@line 922 "_hotshot.c"
      case 5: // $bb4
        var $22=(($tv1+4)&4294967295); //@line 924 "_hotshot.c"
        var $23=HEAP[$22]; //@line 924 "_hotshot.c"
        var $24=((1000000 - ($23))&4294967295); //@line 924 "_hotshot.c"
        var $25=(($tv2+4)&4294967295); //@line 924 "_hotshot.c"
        var $26=HEAP[$25]; //@line 924 "_hotshot.c"
        var $27=((($24) + ($26))&4294967295); //@line 924 "_hotshot.c"
        HEAP[_timeofday_diff]=$27; //@line 924 "_hotshot.c"
        __label__ = 6; break; //@line 924 "_hotshot.c"
      case 6: // $bb5
        var $28=_getrusage(0, $ru1); //@line 936 "_hotshot.c"
        __label__ = 8; break; //@line 936 "_hotshot.c"
      case 7: // $bb6
        __label__ = 1; break; //@line 936 "_hotshot.c"
      case 8: // $bb7
        var $29=_getrusage(0, $ru2); //@line 938 "_hotshot.c"
        var $30=(($ru1)&4294967295); //@line 939 "_hotshot.c"
        var $31=(($30)&4294967295); //@line 939 "_hotshot.c"
        var $32=HEAP[$31]; //@line 939 "_hotshot.c"
        var $33=(($ru2)&4294967295); //@line 939 "_hotshot.c"
        var $34=(($33)&4294967295); //@line 939 "_hotshot.c"
        var $35=HEAP[$34]; //@line 939 "_hotshot.c"
        var $36=((($32))|0)!=((($35))|0); //@line 939 "_hotshot.c"
        if ($36) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 939 "_hotshot.c"
      case 9: // $bb8
        var $37=(($ru1)&4294967295); //@line 940 "_hotshot.c"
        var $38=(($37+4)&4294967295); //@line 940 "_hotshot.c"
        var $39=HEAP[$38]; //@line 940 "_hotshot.c"
        var $40=((1000000 - ($39))&4294967295); //@line 940 "_hotshot.c"
        var $41=(($ru2)&4294967295); //@line 940 "_hotshot.c"
        var $42=(($41+4)&4294967295); //@line 940 "_hotshot.c"
        var $43=HEAP[$42]; //@line 940 "_hotshot.c"
        var $44=((($40) + ($43))&4294967295); //@line 940 "_hotshot.c"
        HEAP[_rusage_diff]=$44; //@line 940 "_hotshot.c"
        __label__ = 17; break; //@line 940 "_hotshot.c"
      case 10: // $bb9
        var $45=(($ru1)&4294967295); //@line 944 "_hotshot.c"
        var $46=(($45+4)&4294967295); //@line 944 "_hotshot.c"
        var $47=HEAP[$46]; //@line 944 "_hotshot.c"
        var $48=(($ru2)&4294967295); //@line 944 "_hotshot.c"
        var $49=(($48+4)&4294967295); //@line 944 "_hotshot.c"
        var $50=HEAP[$49]; //@line 944 "_hotshot.c"
        var $51=((($47))|0)!=((($50))|0); //@line 944 "_hotshot.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 944 "_hotshot.c"
      case 11: // $bb10
        var $52=(($ru2)&4294967295); //@line 945 "_hotshot.c"
        var $53=(($52+4)&4294967295); //@line 945 "_hotshot.c"
        var $54=HEAP[$53]; //@line 945 "_hotshot.c"
        var $55=(($ru1)&4294967295); //@line 945 "_hotshot.c"
        var $56=(($55+4)&4294967295); //@line 945 "_hotshot.c"
        var $57=HEAP[$56]; //@line 945 "_hotshot.c"
        var $58=((($54) - ($57))&4294967295); //@line 945 "_hotshot.c"
        HEAP[_rusage_diff]=$58; //@line 945 "_hotshot.c"
        __label__ = 17; break; //@line 945 "_hotshot.c"
      case 12: // $bb11
        var $59=(($ru1+8)&4294967295); //@line 948 "_hotshot.c"
        var $60=(($59)&4294967295); //@line 948 "_hotshot.c"
        var $61=HEAP[$60]; //@line 948 "_hotshot.c"
        var $62=(($ru2+8)&4294967295); //@line 948 "_hotshot.c"
        var $63=(($62)&4294967295); //@line 948 "_hotshot.c"
        var $64=HEAP[$63]; //@line 948 "_hotshot.c"
        var $65=((($61))|0)!=((($64))|0); //@line 948 "_hotshot.c"
        if ($65) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 948 "_hotshot.c"
      case 13: // $bb12
        var $66=(($ru1+8)&4294967295); //@line 949 "_hotshot.c"
        var $67=(($66+4)&4294967295); //@line 949 "_hotshot.c"
        var $68=HEAP[$67]; //@line 949 "_hotshot.c"
        var $69=((1000000 - ($68))&4294967295); //@line 949 "_hotshot.c"
        var $70=(($ru2+8)&4294967295); //@line 949 "_hotshot.c"
        var $71=(($70+4)&4294967295); //@line 949 "_hotshot.c"
        var $72=HEAP[$71]; //@line 949 "_hotshot.c"
        var $73=((($69) + ($72))&4294967295); //@line 949 "_hotshot.c"
        HEAP[_rusage_diff]=$73; //@line 949 "_hotshot.c"
        __label__ = 17; break; //@line 949 "_hotshot.c"
      case 14: // $bb13
        var $74=(($ru1+8)&4294967295); //@line 953 "_hotshot.c"
        var $75=(($74+4)&4294967295); //@line 953 "_hotshot.c"
        var $76=HEAP[$75]; //@line 953 "_hotshot.c"
        var $77=(($ru2+8)&4294967295); //@line 953 "_hotshot.c"
        var $78=(($77+4)&4294967295); //@line 953 "_hotshot.c"
        var $79=HEAP[$78]; //@line 953 "_hotshot.c"
        var $80=((($76))|0)!=((($79))|0); //@line 953 "_hotshot.c"
        if ($80) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 953 "_hotshot.c"
      case 15: // $bb14
        var $81=(($ru2+8)&4294967295); //@line 954 "_hotshot.c"
        var $82=(($81+4)&4294967295); //@line 954 "_hotshot.c"
        var $83=HEAP[$82]; //@line 954 "_hotshot.c"
        var $84=(($ru1+8)&4294967295); //@line 954 "_hotshot.c"
        var $85=(($84+4)&4294967295); //@line 954 "_hotshot.c"
        var $86=HEAP[$85]; //@line 954 "_hotshot.c"
        var $87=((($83) - ($86))&4294967295); //@line 954 "_hotshot.c"
        HEAP[_rusage_diff]=$87; //@line 954 "_hotshot.c"
        __label__ = 17; break; //@line 954 "_hotshot.c"
      case 16: // $bb15
        __label__ = 8; break; //@line 954 "_hotshot.c"
      case 17: // $bb16
        __label__ = 18; break; //@line 960 "_hotshot.c"
      case 18: // $return
        STACKTOP = __stackBase__;
        return; //@line 960 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _do_start($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 965 "_hotshot.c"
        var $1=(($0+10276)&4294967295); //@line 965 "_hotshot.c"
        HEAP[$1]=1; //@line 965 "_hotshot.c"
        var $2=HEAP[$self_addr]; //@line 966 "_hotshot.c"
        var $3=(($2+10284)&4294967295); //@line 966 "_hotshot.c"
        var $4=_gettimeofday($3, 0); //@line 966 "_hotshot.c"
        var $5=HEAP[$self_addr]; //@line 967 "_hotshot.c"
        var $6=(($5+10264)&4294967295); //@line 967 "_hotshot.c"
        var $7=HEAP[$6]; //@line 967 "_hotshot.c"
        var $8=((($7))|0)!=0; //@line 967 "_hotshot.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 967 "_hotshot.c"
      case 1: // $bb
        var $9=HEAP[$self_addr]; //@line 968 "_hotshot.c"
        var $10=$9; //@line 968 "_hotshot.c"
        _PyEval_SetTrace((FUNCTION_TABLE_OFFSET + 2), $10); //@line 968 "_hotshot.c"
        __label__ = 3; break; //@line 968 "_hotshot.c"
      case 2: // $bb1
        var $11=HEAP[$self_addr]; //@line 970 "_hotshot.c"
        var $12=$11; //@line 970 "_hotshot.c"
        _PyEval_SetProfile((FUNCTION_TABLE_OFFSET + 2), $12); //@line 970 "_hotshot.c"
        __label__ = 3; break; //@line 970 "_hotshot.c"
      case 3: // $bb2
        __label__ = 4; break; //@line 971 "_hotshot.c"
      case 4: // $return
        STACKTOP = __stackBase__;
        return; //@line 971 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _do_stop($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 976 "_hotshot.c"
        var $1=(($0+10276)&4294967295); //@line 976 "_hotshot.c"
        var $2=HEAP[$1]; //@line 976 "_hotshot.c"
        var $3=((($2))|0)!=0; //@line 976 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 976 "_hotshot.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 977 "_hotshot.c"
        var $5=(($4+10276)&4294967295); //@line 977 "_hotshot.c"
        HEAP[$5]=0; //@line 977 "_hotshot.c"
        var $6=HEAP[$self_addr]; //@line 978 "_hotshot.c"
        var $7=(($6+10264)&4294967295); //@line 978 "_hotshot.c"
        var $8=HEAP[$7]; //@line 978 "_hotshot.c"
        var $9=((($8))|0)!=0; //@line 978 "_hotshot.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 978 "_hotshot.c"
      case 2: // $bb1
        _PyEval_SetTrace(0, 0); //@line 979 "_hotshot.c"
        __label__ = 4; break; //@line 979 "_hotshot.c"
      case 3: // $bb2
        _PyEval_SetProfile(0, 0); //@line 981 "_hotshot.c"
        __label__ = 4; break; //@line 981 "_hotshot.c"
      case 4: // $bb3
        var $10=HEAP[$self_addr]; //@line 983 "_hotshot.c"
        var $11=(($10+16)&4294967295); //@line 983 "_hotshot.c"
        var $12=HEAP[$11]; //@line 983 "_hotshot.c"
        var $13=((($12))|0) > 0; //@line 983 "_hotshot.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 983 "_hotshot.c"
      case 5: // $bb4
        var $14=HEAP[$self_addr]; //@line 985 "_hotshot.c"
        var $15=_flush_data($14); //@line 985 "_hotshot.c"
        __label__ = 6; break; //@line 985 "_hotshot.c"
      case 6: // $bb5
        __label__ = 7; break; //@line 987 "_hotshot.c"
      case 7: // $return
        STACKTOP = __stackBase__;
        return; //@line 987 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _is_available($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 992 "_hotshot.c"
        var $2=(($1+10276)&4294967295); //@line 992 "_hotshot.c"
        var $3=HEAP[$2]; //@line 992 "_hotshot.c"
        var $4=((($3))|0)!=0; //@line 992 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 992 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[_ProfilerError]; //@line 993 "_hotshot.c"
        _PyErr_SetString($5, ((__str8)&4294967295)); //@line 993 "_hotshot.c"
        HEAP[$0]=0; //@line 994 "_hotshot.c"
        __label__ = 5; break; //@line 994 "_hotshot.c"
      case 2: // $bb1
        var $6=HEAP[$self_addr]; //@line 996 "_hotshot.c"
        var $7=(($6+10260)&4294967295); //@line 996 "_hotshot.c"
        var $8=HEAP[$7]; //@line 996 "_hotshot.c"
        var $9=($8)==0; //@line 996 "_hotshot.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 996 "_hotshot.c"
      case 3: // $bb2
        var $10=HEAP[_ProfilerError]; //@line 997 "_hotshot.c"
        _PyErr_SetString($10, ((__str9)&4294967295)); //@line 997 "_hotshot.c"
        HEAP[$0]=0; //@line 998 "_hotshot.c"
        __label__ = 5; break; //@line 998 "_hotshot.c"
      case 4: // $bb3
        HEAP[$0]=1; //@line 1000 "_hotshot.c"
        __label__ = 5; break; //@line 1000 "_hotshot.c"
      case 5: // $bb4
        var $11=HEAP[$0]; //@line 994 "_hotshot.c"
        HEAP[$retval]=$11; //@line 994 "_hotshot.c"
        __label__ = 6; break; //@line 994 "_hotshot.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 994 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 994 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_addinfo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $key=__stackBase__+20;
        var $value=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$result]=0; //@line 1013 "_hotshot.c"
        var $1=HEAP[$args_addr]; //@line 1016 "_hotshot.c"
        var $2=_PyArg_ParseTuple($1, ((__str10)&4294967295), $key, $value); //@line 1016 "_hotshot.c"
        var $3=((($2))|0)!=0; //@line 1016 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 1016 "_hotshot.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 1017 "_hotshot.c"
        var $5=(($4+10260)&4294967295); //@line 1017 "_hotshot.c"
        var $6=HEAP[$5]; //@line 1017 "_hotshot.c"
        var $7=($6)==0; //@line 1017 "_hotshot.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1017 "_hotshot.c"
      case 2: // $bb1
        var $8=HEAP[_ProfilerError]; //@line 1018 "_hotshot.c"
        _PyErr_SetString($8, ((__str9)&4294967295)); //@line 1018 "_hotshot.c"
        __label__ = 5; break; //@line 1018 "_hotshot.c"
      case 3: // $bb2
        var $9=HEAP[$value]; //@line 1020 "_hotshot.c"
        var $10=HEAP[$key]; //@line 1020 "_hotshot.c"
        var $11=HEAP[$self_addr]; //@line 1020 "_hotshot.c"
        var $12=_pack_add_info($11, $10, $9); //@line 1020 "_hotshot.c"
        var $13=((($12))|0)==0; //@line 1020 "_hotshot.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1020 "_hotshot.c"
      case 4: // $bb3
        HEAP[$result]=__Py_NoneStruct; //@line 1021 "_hotshot.c"
        var $14=HEAP[$result]; //@line 1022 "_hotshot.c"
        var $15=(($14)&4294967295); //@line 1022 "_hotshot.c"
        var $16=HEAP[$15]; //@line 1022 "_hotshot.c"
        var $17=((($16) + 1)&4294967295); //@line 1022 "_hotshot.c"
        var $18=HEAP[$result]; //@line 1022 "_hotshot.c"
        var $19=(($18)&4294967295); //@line 1022 "_hotshot.c"
        HEAP[$19]=$17; //@line 1022 "_hotshot.c"
        __label__ = 5; break; //@line 1022 "_hotshot.c"
      case 5: // $bb4
        var $20=HEAP[$result]; //@line 1026 "_hotshot.c"
        HEAP[$0]=$20; //@line 1026 "_hotshot.c"
        var $21=HEAP[$0]; //@line 1026 "_hotshot.c"
        HEAP[$retval]=$21; //@line 1026 "_hotshot.c"
        __label__ = 6; break; //@line 1026 "_hotshot.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1026 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1026 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_close($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 1036 "_hotshot.c"
        _do_stop($1); //@line 1036 "_hotshot.c"
        var $2=HEAP[$self_addr]; //@line 1037 "_hotshot.c"
        var $3=(($2+10260)&4294967295); //@line 1037 "_hotshot.c"
        var $4=HEAP[$3]; //@line 1037 "_hotshot.c"
        var $5=($4)!=0; //@line 1037 "_hotshot.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1037 "_hotshot.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 1038 "_hotshot.c"
        var $7=(($6+10260)&4294967295); //@line 1038 "_hotshot.c"
        var $8=HEAP[$7]; //@line 1038 "_hotshot.c"
        var $9=_fclose($8); //@line 1038 "_hotshot.c"
        var $10=HEAP[$self_addr]; //@line 1039 "_hotshot.c"
        var $11=(($10+10260)&4294967295); //@line 1039 "_hotshot.c"
        HEAP[$11]=0; //@line 1039 "_hotshot.c"
        __label__ = 2; break; //@line 1039 "_hotshot.c"
      case 2: // $bb1
        var $12=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1041 "_hotshot.c"
        var $13=((($12) + 1)&4294967295); //@line 1041 "_hotshot.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$13; //@line 1041 "_hotshot.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1042 "_hotshot.c"
        var $14=HEAP[$0]; //@line 1042 "_hotshot.c"
        HEAP[$retval]=$14; //@line 1042 "_hotshot.c"
        __label__ = 3; break; //@line 1042 "_hotshot.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 1042 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 1042 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_fileno($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 1050 "_hotshot.c"
        var $2=(($1+10260)&4294967295); //@line 1050 "_hotshot.c"
        var $3=HEAP[$2]; //@line 1050 "_hotshot.c"
        var $4=($3)==0; //@line 1050 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1050 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 1051 "_hotshot.c"
        _PyErr_SetString($5, ((__str11)&4294967295)); //@line 1051 "_hotshot.c"
        HEAP[$0]=0; //@line 1053 "_hotshot.c"
        __label__ = 3; break; //@line 1053 "_hotshot.c"
      case 2: // $bb1
        var $6=HEAP[$self_addr]; //@line 1055 "_hotshot.c"
        var $7=(($6+10260)&4294967295); //@line 1055 "_hotshot.c"
        var $8=HEAP[$7]; //@line 1055 "_hotshot.c"
        var $9=_fileno($8); //@line 1055 "_hotshot.c"
        var $10=_PyInt_FromLong($9); //@line 1055 "_hotshot.c"
        HEAP[$0]=$10; //@line 1055 "_hotshot.c"
        __label__ = 3; break; //@line 1055 "_hotshot.c"
      case 3: // $bb2
        var $11=HEAP[$0]; //@line 1053 "_hotshot.c"
        HEAP[$retval]=$11; //@line 1053 "_hotshot.c"
        __label__ = 4; break; //@line 1053 "_hotshot.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1053 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1053 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_runcall($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $callargs=__stackBase__+20;
        var $callkw=__stackBase__+24;
        var $callable=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$result]=0; //@line 1065 "_hotshot.c"
        HEAP[$callargs]=0; //@line 1066 "_hotshot.c"
        HEAP[$callkw]=0; //@line 1067 "_hotshot.c"
        var $1=HEAP[$args_addr]; //@line 1070 "_hotshot.c"
        var $2=_PyArg_UnpackTuple($1, ((__str12)&4294967295), 1, 3, $callable, $callargs, $callkw); //@line 1070 "_hotshot.c"
        var $3=((($2))|0)!=0; //@line 1070 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1070 "_hotshot.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 1072 "_hotshot.c"
        var $5=_is_available($4); //@line 1072 "_hotshot.c"
        var $6=((($5))|0)!=0; //@line 1072 "_hotshot.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1072 "_hotshot.c"
      case 2: // $bb1
        var $7=HEAP[$self_addr]; //@line 1073 "_hotshot.c"
        _do_start($7); //@line 1073 "_hotshot.c"
        var $8=HEAP[$callkw]; //@line 1074 "_hotshot.c"
        var $9=HEAP[$callargs]; //@line 1074 "_hotshot.c"
        var $10=HEAP[$callable]; //@line 1074 "_hotshot.c"
        var $11=_PyEval_CallObjectWithKeywords($10, $9, $8); //@line 1074 "_hotshot.c"
        HEAP[$result]=$11; //@line 1074 "_hotshot.c"
        var $12=HEAP[$self_addr]; //@line 1075 "_hotshot.c"
        _do_stop($12); //@line 1075 "_hotshot.c"
        __label__ = 3; break; //@line 1075 "_hotshot.c"
      case 3: // $bb2
        var $13=HEAP[$result]; //@line 1078 "_hotshot.c"
        HEAP[$0]=$13; //@line 1078 "_hotshot.c"
        var $14=HEAP[$0]; //@line 1078 "_hotshot.c"
        HEAP[$retval]=$14; //@line 1078 "_hotshot.c"
        __label__ = 4; break; //@line 1078 "_hotshot.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1078 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1078 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_runcode($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $code=__stackBase__+20;
        var $globals=__stackBase__+24;
        var $locals=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$result]=0; //@line 1089 "_hotshot.c"
        HEAP[$locals]=0; //@line 1092 "_hotshot.c"
        var $1=HEAP[$args_addr]; //@line 1094 "_hotshot.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), _PyCode_Type, $code, _PyDict_Type, $globals, $locals); //@line 1094 "_hotshot.c"
        var $3=((($2))|0)!=0; //@line 1094 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 8; break; } //@line 1094 "_hotshot.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 1098 "_hotshot.c"
        var $5=_is_available($4); //@line 1098 "_hotshot.c"
        var $6=((($5))|0)!=0; //@line 1098 "_hotshot.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 1098 "_hotshot.c"
      case 2: // $bb1
        var $7=HEAP[$locals]; //@line 1099 "_hotshot.c"
        var $8=($7)==0; //@line 1099 "_hotshot.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1099 "_hotshot.c"
      case 3: // $bb2
        var $9=HEAP[$locals]; //@line 1099 "_hotshot.c"
        var $10=($9)==(__Py_NoneStruct); //@line 1099 "_hotshot.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1099 "_hotshot.c"
      case 4: // $bb3
        var $11=HEAP[$globals]; //@line 1100 "_hotshot.c"
        HEAP[$locals]=$11; //@line 1100 "_hotshot.c"
        __label__ = 7; break; //@line 1100 "_hotshot.c"
      case 5: // $bb4
        var $12=HEAP[$locals]; //@line 1101 "_hotshot.c"
        var $13=(($12+4)&4294967295); //@line 1101 "_hotshot.c"
        var $14=HEAP[$13]; //@line 1101 "_hotshot.c"
        var $15=(($14+84)&4294967295); //@line 1101 "_hotshot.c"
        var $16=HEAP[$15]; //@line 1101 "_hotshot.c"
        var $17=($16) & 536870912; //@line 1101 "_hotshot.c"
        var $18=((($17))|0)==0; //@line 1101 "_hotshot.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1101 "_hotshot.c"
      case 6: // $bb5
        var $19=HEAP[_PyExc_TypeError]; //@line 1102 "_hotshot.c"
        _PyErr_SetString($19, ((__str14)&4294967295)); //@line 1102 "_hotshot.c"
        HEAP[$0]=0; //@line 1104 "_hotshot.c"
        __label__ = 9; break; //@line 1104 "_hotshot.c"
      case 7: // $bb6
        var $20=HEAP[$self_addr]; //@line 1106 "_hotshot.c"
        _do_start($20); //@line 1106 "_hotshot.c"
        var $21=HEAP[$locals]; //@line 1107 "_hotshot.c"
        var $22=HEAP[$globals]; //@line 1107 "_hotshot.c"
        var $23=HEAP[$code]; //@line 1107 "_hotshot.c"
        var $24=_PyEval_EvalCode($23, $22, $21); //@line 1107 "_hotshot.c"
        HEAP[$result]=$24; //@line 1107 "_hotshot.c"
        var $25=HEAP[$self_addr]; //@line 1108 "_hotshot.c"
        _do_stop($25); //@line 1108 "_hotshot.c"
        __label__ = 8; break; //@line 1108 "_hotshot.c"
      case 8: // $bb7
        var $26=HEAP[$result]; //@line 1117 "_hotshot.c"
        HEAP[$0]=$26; //@line 1117 "_hotshot.c"
        __label__ = 9; break; //@line 1117 "_hotshot.c"
      case 9: // $bb8
        var $27=HEAP[$0]; //@line 1104 "_hotshot.c"
        HEAP[$retval]=$27; //@line 1104 "_hotshot.c"
        __label__ = 10; break; //@line 1104 "_hotshot.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1104 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1104 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_start($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$result]=0; //@line 1127 "_hotshot.c"
        var $1=HEAP[$self_addr]; //@line 1129 "_hotshot.c"
        var $2=_is_available($1); //@line 1129 "_hotshot.c"
        var $3=((($2))|0)!=0; //@line 1129 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1129 "_hotshot.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 1130 "_hotshot.c"
        _do_start($4); //@line 1130 "_hotshot.c"
        HEAP[$result]=__Py_NoneStruct; //@line 1131 "_hotshot.c"
        var $5=HEAP[$result]; //@line 1132 "_hotshot.c"
        var $6=(($5)&4294967295); //@line 1132 "_hotshot.c"
        var $7=HEAP[$6]; //@line 1132 "_hotshot.c"
        var $8=((($7) + 1)&4294967295); //@line 1132 "_hotshot.c"
        var $9=HEAP[$result]; //@line 1132 "_hotshot.c"
        var $10=(($9)&4294967295); //@line 1132 "_hotshot.c"
        HEAP[$10]=$8; //@line 1132 "_hotshot.c"
        __label__ = 2; break; //@line 1132 "_hotshot.c"
      case 2: // $bb1
        var $11=HEAP[$result]; //@line 1134 "_hotshot.c"
        HEAP[$0]=$11; //@line 1134 "_hotshot.c"
        var $12=HEAP[$0]; //@line 1134 "_hotshot.c"
        HEAP[$retval]=$12; //@line 1134 "_hotshot.c"
        __label__ = 3; break; //@line 1134 "_hotshot.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 1134 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 1134 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_stop($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$result]=0; //@line 1144 "_hotshot.c"
        var $1=HEAP[$self_addr]; //@line 1146 "_hotshot.c"
        var $2=(($1+10276)&4294967295); //@line 1146 "_hotshot.c"
        var $3=HEAP[$2]; //@line 1146 "_hotshot.c"
        var $4=((($3))|0)==0; //@line 1146 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1146 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[_ProfilerError]; //@line 1147 "_hotshot.c"
        _PyErr_SetString($5, ((__str15)&4294967295)); //@line 1147 "_hotshot.c"
        __label__ = 3; break; //@line 1147 "_hotshot.c"
      case 2: // $bb1
        var $6=HEAP[$self_addr]; //@line 1149 "_hotshot.c"
        _do_stop($6); //@line 1149 "_hotshot.c"
        HEAP[$result]=__Py_NoneStruct; //@line 1150 "_hotshot.c"
        var $7=HEAP[$result]; //@line 1151 "_hotshot.c"
        var $8=(($7)&4294967295); //@line 1151 "_hotshot.c"
        var $9=HEAP[$8]; //@line 1151 "_hotshot.c"
        var $10=((($9) + 1)&4294967295); //@line 1151 "_hotshot.c"
        var $11=HEAP[$result]; //@line 1151 "_hotshot.c"
        var $12=(($11)&4294967295); //@line 1151 "_hotshot.c"
        HEAP[$12]=$10; //@line 1151 "_hotshot.c"
        __label__ = 3; break; //@line 1151 "_hotshot.c"
      case 3: // $bb2
        var $13=HEAP[$result]; //@line 1153 "_hotshot.c"
        HEAP[$0]=$13; //@line 1153 "_hotshot.c"
        var $14=HEAP[$0]; //@line 1153 "_hotshot.c"
        HEAP[$retval]=$14; //@line 1153 "_hotshot.c"
        __label__ = 4; break; //@line 1153 "_hotshot.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1153 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1153 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 1162 "_hotshot.c"
        _do_stop($0); //@line 1162 "_hotshot.c"
        var $1=HEAP[$self_addr]; //@line 1163 "_hotshot.c"
        var $2=(($1+10260)&4294967295); //@line 1163 "_hotshot.c"
        var $3=HEAP[$2]; //@line 1163 "_hotshot.c"
        var $4=($3)!=0; //@line 1163 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1163 "_hotshot.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1164 "_hotshot.c"
        var $6=(($5+10260)&4294967295); //@line 1164 "_hotshot.c"
        var $7=HEAP[$6]; //@line 1164 "_hotshot.c"
        var $8=_fclose($7); //@line 1164 "_hotshot.c"
        __label__ = 2; break; //@line 1164 "_hotshot.c"
      case 2: // $bb1
        var $9=HEAP[$self_addr]; //@line 1165 "_hotshot.c"
        var $10=(($9+8)&4294967295); //@line 1165 "_hotshot.c"
        var $11=HEAP[$10]; //@line 1165 "_hotshot.c"
        var $12=($11)!=0; //@line 1165 "_hotshot.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1165 "_hotshot.c"
      case 3: // $bb2
        var $13=HEAP[$self_addr]; //@line 1165 "_hotshot.c"
        var $14=(($13+8)&4294967295); //@line 1165 "_hotshot.c"
        var $15=HEAP[$14]; //@line 1165 "_hotshot.c"
        var $16=(($15)&4294967295); //@line 1165 "_hotshot.c"
        var $17=HEAP[$16]; //@line 1165 "_hotshot.c"
        var $18=((($17) - 1)&4294967295); //@line 1165 "_hotshot.c"
        var $19=(($15)&4294967295); //@line 1165 "_hotshot.c"
        HEAP[$19]=$18; //@line 1165 "_hotshot.c"
        var $20=(($15)&4294967295); //@line 1165 "_hotshot.c"
        var $21=HEAP[$20]; //@line 1165 "_hotshot.c"
        var $22=((($21))|0)==0; //@line 1165 "_hotshot.c"
        if ($22) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1165 "_hotshot.c"
      case 4: // $bb3
        var $23=HEAP[$self_addr]; //@line 1165 "_hotshot.c"
        var $24=(($23+8)&4294967295); //@line 1165 "_hotshot.c"
        var $25=HEAP[$24]; //@line 1165 "_hotshot.c"
        var $26=(($25+4)&4294967295); //@line 1165 "_hotshot.c"
        var $27=HEAP[$26]; //@line 1165 "_hotshot.c"
        var $28=(($27+24)&4294967295); //@line 1165 "_hotshot.c"
        var $29=HEAP[$28]; //@line 1165 "_hotshot.c"
        var $30=HEAP[$self_addr]; //@line 1165 "_hotshot.c"
        var $31=(($30+8)&4294967295); //@line 1165 "_hotshot.c"
        var $32=HEAP[$31]; //@line 1165 "_hotshot.c"
        FUNCTION_TABLE[$29]($32); //@line 1165 "_hotshot.c"
        __label__ = 5; break; //@line 1165 "_hotshot.c"
      case 5: // $bb4
        var $33=HEAP[$self_addr]; //@line 1166 "_hotshot.c"
        var $34=(($33+12)&4294967295); //@line 1166 "_hotshot.c"
        var $35=HEAP[$34]; //@line 1166 "_hotshot.c"
        var $36=($35)!=0; //@line 1166 "_hotshot.c"
        if ($36) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1166 "_hotshot.c"
      case 6: // $bb5
        var $37=HEAP[$self_addr]; //@line 1166 "_hotshot.c"
        var $38=(($37+12)&4294967295); //@line 1166 "_hotshot.c"
        var $39=HEAP[$38]; //@line 1166 "_hotshot.c"
        var $40=(($39)&4294967295); //@line 1166 "_hotshot.c"
        var $41=HEAP[$40]; //@line 1166 "_hotshot.c"
        var $42=((($41) - 1)&4294967295); //@line 1166 "_hotshot.c"
        var $43=(($39)&4294967295); //@line 1166 "_hotshot.c"
        HEAP[$43]=$42; //@line 1166 "_hotshot.c"
        var $44=(($39)&4294967295); //@line 1166 "_hotshot.c"
        var $45=HEAP[$44]; //@line 1166 "_hotshot.c"
        var $46=((($45))|0)==0; //@line 1166 "_hotshot.c"
        if ($46) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1166 "_hotshot.c"
      case 7: // $bb6
        var $47=HEAP[$self_addr]; //@line 1166 "_hotshot.c"
        var $48=(($47+12)&4294967295); //@line 1166 "_hotshot.c"
        var $49=HEAP[$48]; //@line 1166 "_hotshot.c"
        var $50=(($49+4)&4294967295); //@line 1166 "_hotshot.c"
        var $51=HEAP[$50]; //@line 1166 "_hotshot.c"
        var $52=(($51+24)&4294967295); //@line 1166 "_hotshot.c"
        var $53=HEAP[$52]; //@line 1166 "_hotshot.c"
        var $54=HEAP[$self_addr]; //@line 1166 "_hotshot.c"
        var $55=(($54+12)&4294967295); //@line 1166 "_hotshot.c"
        var $56=HEAP[$55]; //@line 1166 "_hotshot.c"
        FUNCTION_TABLE[$53]($56); //@line 1166 "_hotshot.c"
        __label__ = 8; break; //@line 1166 "_hotshot.c"
      case 8: // $bb7
        var $57=HEAP[$self_addr]; //@line 1167 "_hotshot.c"
        var $58=$57; //@line 1167 "_hotshot.c"
        _PyObject_Free($58); //@line 1167 "_hotshot.c"
        __label__ = 9; break; //@line 1168 "_hotshot.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 1168 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _profiler_get_closed($self, $closure) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $closure_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $iftmp_67=__stackBase__+16;
        var $result=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$closure_addr]=$closure;
        var $1=HEAP[$self_addr]; //@line 1191 "_hotshot.c"
        var $2=(($1+10260)&4294967295); //@line 1191 "_hotshot.c"
        var $3=HEAP[$2]; //@line 1191 "_hotshot.c"
        var $4=($3)==0; //@line 1191 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1191 "_hotshot.c"
      case 1: // $bb
        HEAP[$iftmp_67]=__Py_TrueStruct; //@line 1191 "_hotshot.c"
        __label__ = 3; break; //@line 1191 "_hotshot.c"
      case 2: // $bb1
        HEAP[$iftmp_67]=__Py_ZeroStruct; //@line 1191 "_hotshot.c"
        __label__ = 3; break; //@line 1191 "_hotshot.c"
      case 3: // $bb2
        var $5=HEAP[$iftmp_67]; //@line 1191 "_hotshot.c"
        HEAP[$result]=$5; //@line 1191 "_hotshot.c"
        var $6=HEAP[$result]; //@line 1192 "_hotshot.c"
        var $7=(($6)&4294967295); //@line 1192 "_hotshot.c"
        var $8=HEAP[$7]; //@line 1192 "_hotshot.c"
        var $9=((($8) + 1)&4294967295); //@line 1192 "_hotshot.c"
        var $10=HEAP[$result]; //@line 1192 "_hotshot.c"
        var $11=(($10)&4294967295); //@line 1192 "_hotshot.c"
        HEAP[$11]=$9; //@line 1192 "_hotshot.c"
        var $12=HEAP[$result]; //@line 1193 "_hotshot.c"
        HEAP[$0]=$12; //@line 1193 "_hotshot.c"
        var $13=HEAP[$0]; //@line 1193 "_hotshot.c"
        HEAP[$retval]=$13; //@line 1193 "_hotshot.c"
        __label__ = 4; break; //@line 1193 "_hotshot.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1193 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1193 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _logreader_get_closed($self, $closure) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $closure_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $iftmp_68=__stackBase__+16;
        var $result=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$closure_addr]=$closure;
        var $1=HEAP[$self_addr]; //@line 1295 "_hotshot.c"
        var $2=(($1+12)&4294967295); //@line 1295 "_hotshot.c"
        var $3=HEAP[$2]; //@line 1295 "_hotshot.c"
        var $4=($3)==0; //@line 1295 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1295 "_hotshot.c"
      case 1: // $bb
        HEAP[$iftmp_68]=__Py_TrueStruct; //@line 1295 "_hotshot.c"
        __label__ = 3; break; //@line 1295 "_hotshot.c"
      case 2: // $bb1
        HEAP[$iftmp_68]=__Py_ZeroStruct; //@line 1295 "_hotshot.c"
        __label__ = 3; break; //@line 1295 "_hotshot.c"
      case 3: // $bb2
        var $5=HEAP[$iftmp_68]; //@line 1295 "_hotshot.c"
        HEAP[$result]=$5; //@line 1295 "_hotshot.c"
        var $6=HEAP[$result]; //@line 1296 "_hotshot.c"
        var $7=(($6)&4294967295); //@line 1296 "_hotshot.c"
        var $8=HEAP[$7]; //@line 1296 "_hotshot.c"
        var $9=((($8) + 1)&4294967295); //@line 1296 "_hotshot.c"
        var $10=HEAP[$result]; //@line 1296 "_hotshot.c"
        var $11=(($10)&4294967295); //@line 1296 "_hotshot.c"
        HEAP[$11]=$9; //@line 1296 "_hotshot.c"
        var $12=HEAP[$result]; //@line 1297 "_hotshot.c"
        HEAP[$0]=$12; //@line 1297 "_hotshot.c"
        var $13=HEAP[$0]; //@line 1297 "_hotshot.c"
        HEAP[$retval]=$13; //@line 1297 "_hotshot.c"
        __label__ = 4; break; //@line 1297 "_hotshot.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1297 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1297 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _hotshot_logreader($unused, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $unused_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $self=__stackBase__+16;
        var $filename=__stackBase__+20;
        var $c=__stackBase__+24;
        var $err=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$unused_addr]=$unused;
        HEAP[$args_addr]=$args;
        HEAP[$self]=0; //@line 1346 "_hotshot.c"
        HEAP[$err]=0; //@line 1349 "_hotshot.c"
        var $1=HEAP[$args_addr]; //@line 1351 "_hotshot.c"
        var $2=_PyArg_ParseTuple($1, ((__str32)&4294967295), $filename); //@line 1351 "_hotshot.c"
        var $3=((($2))|0)!=0; //@line 1351 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 15; break; } //@line 1351 "_hotshot.c"
      case 1: // $bb
        var $4=__PyObject_New(_LogReaderType); //@line 1352 "_hotshot.c"
        var $5=$4; //@line 1352 "_hotshot.c"
        HEAP[$self]=$5; //@line 1352 "_hotshot.c"
        var $6=HEAP[$self]; //@line 1353 "_hotshot.c"
        var $7=($6)!=0; //@line 1353 "_hotshot.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 15; break; } //@line 1353 "_hotshot.c"
      case 2: // $bb1
        var $8=HEAP[$self]; //@line 1354 "_hotshot.c"
        var $9=(($8+20)&4294967295); //@line 1354 "_hotshot.c"
        HEAP[$9]=1; //@line 1354 "_hotshot.c"
        var $10=HEAP[$self]; //@line 1355 "_hotshot.c"
        var $11=(($10+16)&4294967295); //@line 1355 "_hotshot.c"
        HEAP[$11]=0; //@line 1355 "_hotshot.c"
        var $12=HEAP[$self]; //@line 1356 "_hotshot.c"
        var $13=(($12+8)&4294967295); //@line 1356 "_hotshot.c"
        HEAP[$13]=0; //@line 1356 "_hotshot.c"
        var $14=HEAP[$filename]; //@line 1357 "_hotshot.c"
        var $15=___01fopen64_($14, ((__str33)&4294967295)); //@line 1357 "_hotshot.c"
        var $16=HEAP[$self]; //@line 1357 "_hotshot.c"
        var $17=(($16+12)&4294967295); //@line 1357 "_hotshot.c"
        HEAP[$17]=$15; //@line 1357 "_hotshot.c"
        var $18=HEAP[$self]; //@line 1358 "_hotshot.c"
        var $19=(($18+12)&4294967295); //@line 1358 "_hotshot.c"
        var $20=HEAP[$19]; //@line 1358 "_hotshot.c"
        var $21=($20)==0; //@line 1358 "_hotshot.c"
        if ($21) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1358 "_hotshot.c"
      case 3: // $bb2
        var $22=HEAP[$filename]; //@line 1359 "_hotshot.c"
        var $23=HEAP[_PyExc_IOError]; //@line 1359 "_hotshot.c"
        var $24=_PyErr_SetFromErrnoWithFilename($23, $22); //@line 1359 "_hotshot.c"
        __label__ = 16; break; //@line 1359 "_hotshot.c"
      case 4: // $bb3
        var $25=_PyDict_New(); //@line 1362 "_hotshot.c"
        var $26=HEAP[$self]; //@line 1362 "_hotshot.c"
        var $27=(($26+8)&4294967295); //@line 1362 "_hotshot.c"
        HEAP[$27]=$25; //@line 1362 "_hotshot.c"
        var $28=HEAP[$self]; //@line 1363 "_hotshot.c"
        var $29=(($28+8)&4294967295); //@line 1363 "_hotshot.c"
        var $30=HEAP[$29]; //@line 1363 "_hotshot.c"
        var $31=($30)==0; //@line 1363 "_hotshot.c"
        if ($31) { __label__ = 16; break; } else { __label__ = 5; break; } //@line 1363 "_hotshot.c"
      case 5: // $bb4
        var $32=HEAP[$self]; //@line 1367 "_hotshot.c"
        var $33=(($32+12)&4294967295); //@line 1367 "_hotshot.c"
        var $34=HEAP[$33]; //@line 1367 "_hotshot.c"
        var $35=_fgetc($34); //@line 1367 "_hotshot.c"
        HEAP[$c]=$35; //@line 1367 "_hotshot.c"
        var $36=HEAP[$c]; //@line 1367 "_hotshot.c"
        var $37=((($36))|0)==-1; //@line 1367 "_hotshot.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1367 "_hotshot.c"
      case 6: // $bb5
        var $38=HEAP[$self]; //@line 1368 "_hotshot.c"
        _eof_error($38); //@line 1368 "_hotshot.c"
        __label__ = 16; break; //@line 1368 "_hotshot.c"
      case 7: // $bb6
        var $39=HEAP[$c]; //@line 1371 "_hotshot.c"
        var $40=((($39))|0)!=19; //@line 1371 "_hotshot.c"
        if ($40) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1371 "_hotshot.c"
      case 8: // $bb7
        var $41=HEAP[$self]; //@line 1372 "_hotshot.c"
        var $42=(($41+12)&4294967295); //@line 1372 "_hotshot.c"
        var $43=HEAP[$42]; //@line 1372 "_hotshot.c"
        var $44=HEAP[$c]; //@line 1372 "_hotshot.c"
        var $45=_ungetc($44, $43); //@line 1372 "_hotshot.c"
        __label__ = 15; break; //@line 1372 "_hotshot.c"
      case 9: // $bb8
        var $46=HEAP[$self]; //@line 1375 "_hotshot.c"
        var $47=_unpack_add_info($46); //@line 1375 "_hotshot.c"
        HEAP[$err]=$47; //@line 1375 "_hotshot.c"
        var $48=HEAP[$err]; //@line 1376 "_hotshot.c"
        var $49=((($48))|0)!=0; //@line 1376 "_hotshot.c"
        if ($49) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 1376 "_hotshot.c"
      case 10: // $bb9
        var $50=HEAP[$err]; //@line 1377 "_hotshot.c"
        var $51=((($50))|0)==-1; //@line 1377 "_hotshot.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1377 "_hotshot.c"
      case 11: // $bb10
        var $52=HEAP[$self]; //@line 1378 "_hotshot.c"
        _eof_error($52); //@line 1378 "_hotshot.c"
        __label__ = 13; break; //@line 1378 "_hotshot.c"
      case 12: // $bb11
        var $53=HEAP[_PyExc_RuntimeError]; //@line 1380 "_hotshot.c"
        _PyErr_SetString($53, ((__str34)&4294967295)); //@line 1380 "_hotshot.c"
        __label__ = 13; break; //@line 1380 "_hotshot.c"
      case 13: // $bb12
        __label__ = 16; break; //@line 1380 "_hotshot.c"
      case 14: // $bb13
        __label__ = 5; break; //@line 1380 "_hotshot.c"
      case 15: // $bb14
        var $54=HEAP[$self]; //@line 1387 "_hotshot.c"
        var $55=$54; //@line 1387 "_hotshot.c"
        HEAP[$0]=$55; //@line 1387 "_hotshot.c"
        __label__ = 19; break; //@line 1387 "_hotshot.c"
      case 16: // $error
        var $56=HEAP[$self]; //@line 1389 "_hotshot.c"
        var $57=$56; //@line 1389 "_hotshot.c"
        var $58=(($57)&4294967295); //@line 1389 "_hotshot.c"
        var $59=HEAP[$58]; //@line 1389 "_hotshot.c"
        var $60=((($59) - 1)&4294967295); //@line 1389 "_hotshot.c"
        var $61=(($57)&4294967295); //@line 1389 "_hotshot.c"
        HEAP[$61]=$60; //@line 1389 "_hotshot.c"
        var $62=(($57)&4294967295); //@line 1389 "_hotshot.c"
        var $63=HEAP[$62]; //@line 1389 "_hotshot.c"
        var $64=((($63))|0)==0; //@line 1389 "_hotshot.c"
        if ($64) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1389 "_hotshot.c"
      case 17: // $bb15
        var $65=HEAP[$self]; //@line 1389 "_hotshot.c"
        var $66=$65; //@line 1389 "_hotshot.c"
        var $67=(($66+4)&4294967295); //@line 1389 "_hotshot.c"
        var $68=HEAP[$67]; //@line 1389 "_hotshot.c"
        var $69=(($68+24)&4294967295); //@line 1389 "_hotshot.c"
        var $70=HEAP[$69]; //@line 1389 "_hotshot.c"
        var $71=HEAP[$self]; //@line 1389 "_hotshot.c"
        var $72=$71; //@line 1389 "_hotshot.c"
        FUNCTION_TABLE[$70]($72); //@line 1389 "_hotshot.c"
        __label__ = 18; break; //@line 1389 "_hotshot.c"
      case 18: // $bb16
        HEAP[$0]=0; //@line 1390 "_hotshot.c"
        __label__ = 19; break; //@line 1390 "_hotshot.c"
      case 19: // $bb17
        var $73=HEAP[$0]; //@line 1387 "_hotshot.c"
        HEAP[$retval]=$73; //@line 1387 "_hotshot.c"
        __label__ = 20; break; //@line 1387 "_hotshot.c"
      case 20: // $return
        var $retval18=HEAP[$retval]; //@line 1387 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1387 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_version_string() {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $rev=__stackBase__+8;
        var $buffer=__stackBase__+12;
        var $i=__stackBase__+16;
        var $_alloca_point_=0;
        var $1=HEAP[_rcsid_9655]; //@line 1403 "_hotshot.c"
        HEAP[$rev]=$1; //@line 1403 "_hotshot.c"
        HEAP[$i]=0; //@line 1405 "_hotshot.c"
        __label__ = 2; break; //@line 1405 "_hotshot.c"
      case 1: // $bb
        var $2=HEAP[$rev]; //@line 1408 "_hotshot.c"
        var $3=(($2+1)&4294967295); //@line 1408 "_hotshot.c"
        HEAP[$rev]=$3; //@line 1408 "_hotshot.c"
        __label__ = 2; break; //@line 1408 "_hotshot.c"
      case 2: // $bb1
        var $4=HEAP[$rev]; //@line 1407 "_hotshot.c"
        var $5=HEAP[$4]; //@line 1407 "_hotshot.c"
        var $6=reSign(($5), 8, 0)==0; //@line 1407 "_hotshot.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1407 "_hotshot.c"
      case 3: // $bb2
        var $7=___ctype_b_loc(); //@line 1407 "_hotshot.c"
        var $8=HEAP[$7]; //@line 1407 "_hotshot.c"
        var $9=HEAP[$rev]; //@line 1407 "_hotshot.c"
        var $10=HEAP[$9]; //@line 1407 "_hotshot.c"
        var $11=unSign(($10), 8, 0); //@line 1407 "_hotshot.c"
        var $12=(($8+2*$11)&4294967295); //@line 1407 "_hotshot.c"
        var $13=HEAP[$12]; //@line 1407 "_hotshot.c"
        var $14=unSign(($13), 16, 0); //@line 1407 "_hotshot.c"
        var $15=($14) & 2048; //@line 1407 "_hotshot.c"
        var $16=((($15))|0)==0; //@line 1407 "_hotshot.c"
        if ($16) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1407 "_hotshot.c"
      case 4: // $bb3
        __label__ = 6; break; //@line 1407 "_hotshot.c"
      case 5: // $bb4
        var $17=HEAP[$i]; //@line 1410 "_hotshot.c"
        var $18=((($17) + 1)&4294967295); //@line 1410 "_hotshot.c"
        HEAP[$i]=$18; //@line 1410 "_hotshot.c"
        __label__ = 6; break; //@line 1410 "_hotshot.c"
      case 6: // $bb5
        var $19=HEAP[$rev]; //@line 1409 "_hotshot.c"
        var $20=HEAP[$i]; //@line 1409 "_hotshot.c"
        var $21=(($19+$20)&4294967295); //@line 1409 "_hotshot.c"
        var $22=HEAP[$21]; //@line 1409 "_hotshot.c"
        var $23=reSign(($22), 8, 0)==32; //@line 1409 "_hotshot.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1409 "_hotshot.c"
      case 7: // $bb6
        var $24=HEAP[$rev]; //@line 1409 "_hotshot.c"
        var $25=HEAP[$i]; //@line 1409 "_hotshot.c"
        var $26=(($24+$25)&4294967295); //@line 1409 "_hotshot.c"
        var $27=HEAP[$26]; //@line 1409 "_hotshot.c"
        var $28=reSign(($27), 8, 0)!=0; //@line 1409 "_hotshot.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1409 "_hotshot.c"
      case 8: // $bb7
        var $29=HEAP[$i]; //@line 1411 "_hotshot.c"
        var $30=((($29) + 1)&4294967295); //@line 1411 "_hotshot.c"
        var $31=_malloc($30); //@line 1411 "_hotshot.c"
        HEAP[$buffer]=$31; //@line 1411 "_hotshot.c"
        var $32=HEAP[$buffer]; //@line 1412 "_hotshot.c"
        var $33=($32)!=0; //@line 1412 "_hotshot.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1412 "_hotshot.c"
      case 9: // $bb8
        var $34=HEAP[$i]; //@line 1413 "_hotshot.c"
        var $35=HEAP[$buffer]; //@line 1413 "_hotshot.c"
        var $36=HEAP[$rev]; //@line 1413 "_hotshot.c"
        _llvm_memmove_p0i8_p0i8_i32($35, $36, $34, 1, 0); //@line 1413 "_hotshot.c"
        var $37=HEAP[$buffer]; //@line 1414 "_hotshot.c"
        var $38=HEAP[$i]; //@line 1414 "_hotshot.c"
        var $39=(($37+$38)&4294967295); //@line 1414 "_hotshot.c"
        HEAP[$39]=0; //@line 1414 "_hotshot.c"
        __label__ = 10; break; //@line 1414 "_hotshot.c"
      case 10: // $bb9
        var $40=HEAP[$buffer]; //@line 1416 "_hotshot.c"
        HEAP[$0]=$40; //@line 1416 "_hotshot.c"
        var $41=HEAP[$0]; //@line 1416 "_hotshot.c"
        HEAP[$retval]=$41; //@line 1416 "_hotshot.c"
        __label__ = 11; break; //@line 1416 "_hotshot.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 1416 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1416 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _write_header($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4140; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4140);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_79=__stackBase__+8;
        var $iftmp_78=__stackBase__+12;
        var $iftmp_77=__stackBase__+16;
        var $0=__stackBase__+20;
        var $buffer=__stackBase__+24;
        var $cwdbuffer=__stackBase__+28;
        var $temp=__stackBase__+4124;
        var $i=__stackBase__+4128;
        var $len=__stackBase__+4132;
        var $item=__stackBase__+4136;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=_get_version_string(); //@line 1430 "_hotshot.c"
        HEAP[$buffer]=$1; //@line 1430 "_hotshot.c"
        var $2=HEAP[$buffer]; //@line 1431 "_hotshot.c"
        var $3=($2)==0; //@line 1431 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1431 "_hotshot.c"
      case 1: // $bb
        var $4=_PyErr_NoMemory(); //@line 1432 "_hotshot.c"
        HEAP[$0]=-1; //@line 1433 "_hotshot.c"
        __label__ = 24; break; //@line 1433 "_hotshot.c"
      case 2: // $bb1
        var $5=HEAP[$self_addr]; //@line 1435 "_hotshot.c"
        var $6=HEAP[$buffer]; //@line 1435 "_hotshot.c"
        var $7=_pack_add_info($5, ((__str36)&4294967295), $6); //@line 1435 "_hotshot.c"
        var $8=HEAP[$self_addr]; //@line 1436 "_hotshot.c"
        var $9=(($8+10272)&4294967295); //@line 1436 "_hotshot.c"
        var $10=HEAP[$9]; //@line 1436 "_hotshot.c"
        var $11=((($10))|0)!=0; //@line 1436 "_hotshot.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1436 "_hotshot.c"
      case 3: // $bb2
        HEAP[$iftmp_77]=((__str37)&4294967295); //@line 1436 "_hotshot.c"
        __label__ = 5; break; //@line 1436 "_hotshot.c"
      case 4: // $bb3
        HEAP[$iftmp_77]=((__str38)&4294967295); //@line 1436 "_hotshot.c"
        __label__ = 5; break; //@line 1436 "_hotshot.c"
      case 5: // $bb4
        var $12=HEAP[$self_addr]; //@line 1436 "_hotshot.c"
        var $13=HEAP[$iftmp_77]; //@line 1436 "_hotshot.c"
        var $14=_pack_add_info($12, ((__str39)&4294967295), $13); //@line 1436 "_hotshot.c"
        var $15=HEAP[$self_addr]; //@line 1438 "_hotshot.c"
        var $16=(($15+10264)&4294967295); //@line 1438 "_hotshot.c"
        var $17=HEAP[$16]; //@line 1438 "_hotshot.c"
        var $18=((($17))|0)!=0; //@line 1438 "_hotshot.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1438 "_hotshot.c"
      case 6: // $bb5
        HEAP[$iftmp_78]=((__str37)&4294967295); //@line 1438 "_hotshot.c"
        __label__ = 8; break; //@line 1438 "_hotshot.c"
      case 7: // $bb6
        HEAP[$iftmp_78]=((__str38)&4294967295); //@line 1438 "_hotshot.c"
        __label__ = 8; break; //@line 1438 "_hotshot.c"
      case 8: // $bb7
        var $19=HEAP[$self_addr]; //@line 1438 "_hotshot.c"
        var $20=HEAP[$iftmp_78]; //@line 1438 "_hotshot.c"
        var $21=_pack_add_info($19, ((__str40)&4294967295), $20); //@line 1438 "_hotshot.c"
        var $22=HEAP[$self_addr]; //@line 1440 "_hotshot.c"
        var $23=(($22+10268)&4294967295); //@line 1440 "_hotshot.c"
        var $24=HEAP[$23]; //@line 1440 "_hotshot.c"
        var $25=((($24))|0)!=0; //@line 1440 "_hotshot.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1440 "_hotshot.c"
      case 9: // $bb8
        HEAP[$iftmp_79]=((__str37)&4294967295); //@line 1440 "_hotshot.c"
        __label__ = 11; break; //@line 1440 "_hotshot.c"
      case 10: // $bb9
        HEAP[$iftmp_79]=((__str38)&4294967295); //@line 1440 "_hotshot.c"
        __label__ = 11; break; //@line 1440 "_hotshot.c"
      case 11: // $bb10
        var $26=HEAP[$self_addr]; //@line 1440 "_hotshot.c"
        var $27=HEAP[$iftmp_79]; //@line 1440 "_hotshot.c"
        var $28=_pack_add_info($26, ((__str41)&4294967295), $27); //@line 1440 "_hotshot.c"
        var $29=_Py_GetPlatform(); //@line 1442 "_hotshot.c"
        var $30=HEAP[$self_addr]; //@line 1442 "_hotshot.c"
        var $31=_pack_add_info($30, ((__str42)&4294967295), $29); //@line 1442 "_hotshot.c"
        var $32=_Py_GetProgramFullPath(); //@line 1443 "_hotshot.c"
        var $33=HEAP[$self_addr]; //@line 1443 "_hotshot.c"
        var $34=_pack_add_info($33, ((__str43)&4294967295), $32); //@line 1443 "_hotshot.c"
        var $35=HEAP[$buffer]; //@line 1444 "_hotshot.c"
        _free($35); //@line 1444 "_hotshot.c"
        var $36=_Py_GetVersion(); //@line 1445 "_hotshot.c"
        HEAP[$buffer]=$36; //@line 1445 "_hotshot.c"
        var $37=HEAP[$buffer]; //@line 1446 "_hotshot.c"
        var $38=($37)==0; //@line 1446 "_hotshot.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1446 "_hotshot.c"
      case 12: // $bb11
        _PyErr_Clear(); //@line 1447 "_hotshot.c"
        __label__ = 14; break; //@line 1447 "_hotshot.c"
      case 13: // $bb12
        var $39=HEAP[$self_addr]; //@line 1449 "_hotshot.c"
        var $40=HEAP[$buffer]; //@line 1449 "_hotshot.c"
        var $41=_pack_add_info($39, ((__str44)&4294967295), $40); //@line 1449 "_hotshot.c"
        __label__ = 14; break; //@line 1449 "_hotshot.c"
      case 14: // $bb13
        var $42=HEAP[_rusage_diff]; //@line 1455 "_hotshot.c"
        var $cwdbuffer14=$cwdbuffer; //@line 1455 "_hotshot.c"
        var $43=_PyOS_snprintf($cwdbuffer14, 4096, ((__str45)&4294967295), $42); //@line 1455 "_hotshot.c"
        var $44=HEAP[$self_addr]; //@line 1456 "_hotshot.c"
        var $cwdbuffer15=$cwdbuffer; //@line 1456 "_hotshot.c"
        var $45=_pack_add_info($44, ((__str46)&4294967295), $cwdbuffer15); //@line 1456 "_hotshot.c"
        var $46=HEAP[_timeofday_diff]; //@line 1457 "_hotshot.c"
        var $cwdbuffer16=$cwdbuffer; //@line 1457 "_hotshot.c"
        var $47=_PyOS_snprintf($cwdbuffer16, 4096, ((__str45)&4294967295), $46); //@line 1457 "_hotshot.c"
        var $48=HEAP[$self_addr]; //@line 1458 "_hotshot.c"
        var $cwdbuffer17=$cwdbuffer; //@line 1458 "_hotshot.c"
        var $49=_pack_add_info($48, ((__str47)&4294967295), $cwdbuffer17); //@line 1458 "_hotshot.c"
        var $cwdbuffer18=$cwdbuffer; //@line 1461 "_hotshot.c"
        var $50=_getcwd($cwdbuffer18, 4096); //@line 1461 "_hotshot.c"
        var $51=HEAP[$self_addr]; //@line 1461 "_hotshot.c"
        var $52=_pack_add_info($51, ((__str48)&4294967295), $50); //@line 1461 "_hotshot.c"
        var $53=_PySys_GetObject(((__str49)&4294967295)); //@line 1464 "_hotshot.c"
        HEAP[$temp]=$53; //@line 1464 "_hotshot.c"
        var $54=HEAP[$temp]; //@line 1465 "_hotshot.c"
        var $55=($54)==0; //@line 1465 "_hotshot.c"
        if ($55) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 1465 "_hotshot.c"
      case 15: // $bb19
        var $56=HEAP[$temp]; //@line 1465 "_hotshot.c"
        var $57=(($56+4)&4294967295); //@line 1465 "_hotshot.c"
        var $58=HEAP[$57]; //@line 1465 "_hotshot.c"
        var $59=(($58+84)&4294967295); //@line 1465 "_hotshot.c"
        var $60=HEAP[$59]; //@line 1465 "_hotshot.c"
        var $61=($60) & 33554432; //@line 1465 "_hotshot.c"
        var $62=((($61))|0)==0; //@line 1465 "_hotshot.c"
        if ($62) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1465 "_hotshot.c"
      case 16: // $bb20
        var $63=HEAP[_PyExc_RuntimeError]; //@line 1466 "_hotshot.c"
        _PyErr_SetString($63, ((__str50)&4294967295)); //@line 1466 "_hotshot.c"
        HEAP[$0]=-1; //@line 1467 "_hotshot.c"
        __label__ = 24; break; //@line 1467 "_hotshot.c"
      case 17: // $bb21
        var $64=HEAP[$temp]; //@line 1469 "_hotshot.c"
        var $65=$64; //@line 1469 "_hotshot.c"
        var $66=(($65+8)&4294967295); //@line 1469 "_hotshot.c"
        var $67=HEAP[$66]; //@line 1469 "_hotshot.c"
        HEAP[$len]=$67; //@line 1469 "_hotshot.c"
        HEAP[$i]=0; //@line 1470 "_hotshot.c"
        __label__ = 22; break; //@line 1470 "_hotshot.c"
      case 18: // $bb22
        var $68=HEAP[$temp]; //@line 1471 "_hotshot.c"
        var $69=$68; //@line 1471 "_hotshot.c"
        var $70=(($69+12)&4294967295); //@line 1471 "_hotshot.c"
        var $71=HEAP[$70]; //@line 1471 "_hotshot.c"
        var $72=HEAP[$i]; //@line 1471 "_hotshot.c"
        var $73=(($71+4*$72)&4294967295); //@line 1471 "_hotshot.c"
        var $74=HEAP[$73]; //@line 1471 "_hotshot.c"
        HEAP[$item]=$74; //@line 1471 "_hotshot.c"
        var $75=HEAP[$item]; //@line 1472 "_hotshot.c"
        var $76=_PyString_AsString($75); //@line 1472 "_hotshot.c"
        HEAP[$buffer]=$76; //@line 1472 "_hotshot.c"
        var $77=HEAP[$buffer]; //@line 1473 "_hotshot.c"
        var $78=($77)==0; //@line 1473 "_hotshot.c"
        if ($78) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1473 "_hotshot.c"
      case 19: // $bb23
        var $79=HEAP[$self_addr]; //@line 1474 "_hotshot.c"
        var $80=_pack_add_info($79, ((__str51)&4294967295), ((__str52)&4294967295)); //@line 1474 "_hotshot.c"
        _PyErr_Clear(); //@line 1475 "_hotshot.c"
        __label__ = 21; break; //@line 1475 "_hotshot.c"
      case 20: // $bb24
        var $81=HEAP[$self_addr]; //@line 1478 "_hotshot.c"
        var $82=HEAP[$buffer]; //@line 1478 "_hotshot.c"
        var $83=_pack_add_info($81, ((__str51)&4294967295), $82); //@line 1478 "_hotshot.c"
        __label__ = 21; break; //@line 1478 "_hotshot.c"
      case 21: // $bb25
        var $84=HEAP[$i]; //@line 1470 "_hotshot.c"
        var $85=((($84) + 1)&4294967295); //@line 1470 "_hotshot.c"
        HEAP[$i]=$85; //@line 1470 "_hotshot.c"
        __label__ = 22; break; //@line 1470 "_hotshot.c"
      case 22: // $bb26
        var $86=HEAP[$i]; //@line 1470 "_hotshot.c"
        var $87=HEAP[$len]; //@line 1470 "_hotshot.c"
        var $88=((($86))|0) < ((($87))|0); //@line 1470 "_hotshot.c"
        if ($88) { __label__ = 18; break; } else { __label__ = 23; break; } //@line 1470 "_hotshot.c"
      case 23: // $bb27
        var $89=HEAP[$self_addr]; //@line 1481 "_hotshot.c"
        var $90=_pack_frame_times($89); //@line 1481 "_hotshot.c"
        var $91=HEAP[$self_addr]; //@line 1482 "_hotshot.c"
        var $92=_pack_line_times($91); //@line 1482 "_hotshot.c"
        HEAP[$0]=0; //@line 1484 "_hotshot.c"
        __label__ = 24; break; //@line 1484 "_hotshot.c"
      case 24: // $bb28
        var $93=HEAP[$0]; //@line 1433 "_hotshot.c"
        HEAP[$retval]=$93; //@line 1433 "_hotshot.c"
        __label__ = 25; break; //@line 1433 "_hotshot.c"
      case 25: // $return
        var $retval29=HEAP[$retval]; //@line 1433 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 1433 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _hotshot_profiler($unused, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $unused_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_86=__stackBase__+12;
        var $0=__stackBase__+16;
        var $logfilename=__stackBase__+20;
        var $self=__stackBase__+24;
        var $lineevents=__stackBase__+28;
        var $linetimings=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$unused_addr]=$unused;
        HEAP[$args_addr]=$args;
        HEAP[$self]=0; //@line 1495 "_hotshot.c"
        HEAP[$lineevents]=0; //@line 1496 "_hotshot.c"
        HEAP[$linetimings]=1; //@line 1497 "_hotshot.c"
        var $1=HEAP[$args_addr]; //@line 1499 "_hotshot.c"
        var $2=_PyArg_ParseTuple($1, ((__str53)&4294967295), $logfilename, $lineevents, $linetimings); //@line 1499 "_hotshot.c"
        var $3=((($2))|0)!=0; //@line 1499 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 21; break; } //@line 1499 "_hotshot.c"
      case 1: // $bb
        var $4=__PyObject_New(_ProfilerType); //@line 1501 "_hotshot.c"
        var $5=$4; //@line 1501 "_hotshot.c"
        HEAP[$self]=$5; //@line 1501 "_hotshot.c"
        var $6=HEAP[$self]; //@line 1502 "_hotshot.c"
        var $7=($6)==0; //@line 1502 "_hotshot.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1502 "_hotshot.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1503 "_hotshot.c"
        __label__ = 22; break; //@line 1503 "_hotshot.c"
      case 3: // $bb2
        var $8=HEAP[$self]; //@line 1504 "_hotshot.c"
        var $9=(($8+10272)&4294967295); //@line 1504 "_hotshot.c"
        HEAP[$9]=1; //@line 1504 "_hotshot.c"
        var $10=HEAP[$lineevents]; //@line 1505 "_hotshot.c"
        var $11=((($10))|0)!=0; //@line 1505 "_hotshot.c"
        var $12=unSign(($11), 1, 0); //@line 1505 "_hotshot.c"
        var $13=HEAP[$self]; //@line 1505 "_hotshot.c"
        var $14=(($13+10264)&4294967295); //@line 1505 "_hotshot.c"
        HEAP[$14]=$12; //@line 1505 "_hotshot.c"
        var $15=HEAP[$lineevents]; //@line 1506 "_hotshot.c"
        var $16=((($15))|0)==0; //@line 1506 "_hotshot.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 1506 "_hotshot.c"
      case 4: // $bb3
        var $17=HEAP[$linetimings]; //@line 1506 "_hotshot.c"
        var $18=((($17))|0)==0; //@line 1506 "_hotshot.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 1506 "_hotshot.c"
      case 5: // $bb4
        HEAP[$iftmp_86]=1; //@line 1506 "_hotshot.c"
        __label__ = 7; break; //@line 1506 "_hotshot.c"
      case 6: // $bb5
        HEAP[$iftmp_86]=0; //@line 1506 "_hotshot.c"
        __label__ = 7; break; //@line 1506 "_hotshot.c"
      case 7: // $bb6
        var $19=HEAP[$self]; //@line 1506 "_hotshot.c"
        var $20=(($19+10268)&4294967295); //@line 1506 "_hotshot.c"
        var $21=HEAP[$iftmp_86]; //@line 1506 "_hotshot.c"
        HEAP[$20]=$21; //@line 1506 "_hotshot.c"
        var $22=HEAP[$self]; //@line 1507 "_hotshot.c"
        var $23=(($22+16)&4294967295); //@line 1507 "_hotshot.c"
        HEAP[$23]=0; //@line 1507 "_hotshot.c"
        var $24=HEAP[$self]; //@line 1508 "_hotshot.c"
        var $25=(($24+10276)&4294967295); //@line 1508 "_hotshot.c"
        HEAP[$25]=0; //@line 1508 "_hotshot.c"
        var $26=HEAP[$self]; //@line 1509 "_hotshot.c"
        var $27=(($26+10280)&4294967295); //@line 1509 "_hotshot.c"
        HEAP[$27]=0; //@line 1509 "_hotshot.c"
        var $28=HEAP[$self]; //@line 1510 "_hotshot.c"
        var $29=(($28+10260)&4294967295); //@line 1510 "_hotshot.c"
        HEAP[$29]=0; //@line 1510 "_hotshot.c"
        var $30=HEAP[$args_addr]; //@line 1511 "_hotshot.c"
        var $31=$30; //@line 1511 "_hotshot.c"
        var $32=(($31+12)&4294967295); //@line 1511 "_hotshot.c"
        var $33=(($32)&4294967295); //@line 1511 "_hotshot.c"
        var $34=HEAP[$33]; //@line 1511 "_hotshot.c"
        var $35=HEAP[$self]; //@line 1511 "_hotshot.c"
        var $36=(($35+12)&4294967295); //@line 1511 "_hotshot.c"
        HEAP[$36]=$34; //@line 1511 "_hotshot.c"
        var $37=HEAP[$self]; //@line 1512 "_hotshot.c"
        var $38=(($37+12)&4294967295); //@line 1512 "_hotshot.c"
        var $39=HEAP[$38]; //@line 1512 "_hotshot.c"
        var $40=(($39)&4294967295); //@line 1512 "_hotshot.c"
        var $41=HEAP[$40]; //@line 1512 "_hotshot.c"
        var $42=((($41) + 1)&4294967295); //@line 1512 "_hotshot.c"
        var $43=(($39)&4294967295); //@line 1512 "_hotshot.c"
        HEAP[$43]=$42; //@line 1512 "_hotshot.c"
        var $44=_PyDict_New(); //@line 1513 "_hotshot.c"
        var $45=HEAP[$self]; //@line 1513 "_hotshot.c"
        var $46=(($45+8)&4294967295); //@line 1513 "_hotshot.c"
        HEAP[$46]=$44; //@line 1513 "_hotshot.c"
        var $47=HEAP[$self]; //@line 1514 "_hotshot.c"
        var $48=(($47+8)&4294967295); //@line 1514 "_hotshot.c"
        var $49=HEAP[$48]; //@line 1514 "_hotshot.c"
        var $50=($49)==0; //@line 1514 "_hotshot.c"
        if ($50) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1514 "_hotshot.c"
      case 8: // $bb7
        var $51=HEAP[$self]; //@line 1515 "_hotshot.c"
        var $52=$51; //@line 1515 "_hotshot.c"
        var $53=(($52)&4294967295); //@line 1515 "_hotshot.c"
        var $54=HEAP[$53]; //@line 1515 "_hotshot.c"
        var $55=((($54) - 1)&4294967295); //@line 1515 "_hotshot.c"
        var $56=(($52)&4294967295); //@line 1515 "_hotshot.c"
        HEAP[$56]=$55; //@line 1515 "_hotshot.c"
        var $57=(($52)&4294967295); //@line 1515 "_hotshot.c"
        var $58=HEAP[$57]; //@line 1515 "_hotshot.c"
        var $59=((($58))|0)==0; //@line 1515 "_hotshot.c"
        if ($59) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1515 "_hotshot.c"
      case 9: // $bb8
        var $60=HEAP[$self]; //@line 1515 "_hotshot.c"
        var $61=$60; //@line 1515 "_hotshot.c"
        var $62=(($61+4)&4294967295); //@line 1515 "_hotshot.c"
        var $63=HEAP[$62]; //@line 1515 "_hotshot.c"
        var $64=(($63+24)&4294967295); //@line 1515 "_hotshot.c"
        var $65=HEAP[$64]; //@line 1515 "_hotshot.c"
        var $66=HEAP[$self]; //@line 1515 "_hotshot.c"
        var $67=$66; //@line 1515 "_hotshot.c"
        FUNCTION_TABLE[$65]($67); //@line 1515 "_hotshot.c"
        __label__ = 10; break; //@line 1515 "_hotshot.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 1516 "_hotshot.c"
        __label__ = 22; break; //@line 1516 "_hotshot.c"
      case 11: // $bb10
        var $68=HEAP[$logfilename]; //@line 1518 "_hotshot.c"
        var $69=___01fopen64_($68, ((__str54)&4294967295)); //@line 1518 "_hotshot.c"
        var $70=HEAP[$self]; //@line 1518 "_hotshot.c"
        var $71=(($70+10260)&4294967295); //@line 1518 "_hotshot.c"
        HEAP[$71]=$69; //@line 1518 "_hotshot.c"
        var $72=HEAP[$self]; //@line 1519 "_hotshot.c"
        var $73=(($72+10260)&4294967295); //@line 1519 "_hotshot.c"
        var $74=HEAP[$73]; //@line 1519 "_hotshot.c"
        var $75=($74)==0; //@line 1519 "_hotshot.c"
        if ($75) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 1519 "_hotshot.c"
      case 12: // $bb11
        var $76=HEAP[$self]; //@line 1520 "_hotshot.c"
        var $77=$76; //@line 1520 "_hotshot.c"
        var $78=(($77)&4294967295); //@line 1520 "_hotshot.c"
        var $79=HEAP[$78]; //@line 1520 "_hotshot.c"
        var $80=((($79) - 1)&4294967295); //@line 1520 "_hotshot.c"
        var $81=(($77)&4294967295); //@line 1520 "_hotshot.c"
        HEAP[$81]=$80; //@line 1520 "_hotshot.c"
        var $82=(($77)&4294967295); //@line 1520 "_hotshot.c"
        var $83=HEAP[$82]; //@line 1520 "_hotshot.c"
        var $84=((($83))|0)==0; //@line 1520 "_hotshot.c"
        if ($84) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1520 "_hotshot.c"
      case 13: // $bb12
        var $85=HEAP[$self]; //@line 1520 "_hotshot.c"
        var $86=$85; //@line 1520 "_hotshot.c"
        var $87=(($86+4)&4294967295); //@line 1520 "_hotshot.c"
        var $88=HEAP[$87]; //@line 1520 "_hotshot.c"
        var $89=(($88+24)&4294967295); //@line 1520 "_hotshot.c"
        var $90=HEAP[$89]; //@line 1520 "_hotshot.c"
        var $91=HEAP[$self]; //@line 1520 "_hotshot.c"
        var $92=$91; //@line 1520 "_hotshot.c"
        FUNCTION_TABLE[$90]($92); //@line 1520 "_hotshot.c"
        __label__ = 14; break; //@line 1520 "_hotshot.c"
      case 14: // $bb13
        var $93=HEAP[$logfilename]; //@line 1521 "_hotshot.c"
        var $94=HEAP[_PyExc_IOError]; //@line 1521 "_hotshot.c"
        var $95=_PyErr_SetFromErrnoWithFilename($94, $93); //@line 1521 "_hotshot.c"
        HEAP[$0]=0; //@line 1522 "_hotshot.c"
        __label__ = 22; break; //@line 1522 "_hotshot.c"
      case 15: // $bb14
        var $96=HEAP[_timeofday_diff]; //@line 1524 "_hotshot.c"
        var $97=((($96))|0)==0; //@line 1524 "_hotshot.c"
        if ($97) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1524 "_hotshot.c"
      case 16: // $bb15
        _calibrate(); //@line 1529 "_hotshot.c"
        _calibrate(); //@line 1530 "_hotshot.c"
        _calibrate(); //@line 1531 "_hotshot.c"
        __label__ = 17; break; //@line 1531 "_hotshot.c"
      case 17: // $bb16
        var $98=HEAP[$self]; //@line 1533 "_hotshot.c"
        var $99=_write_header($98); //@line 1533 "_hotshot.c"
        var $100=((($99))|0)!=0; //@line 1533 "_hotshot.c"
        if ($100) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 1533 "_hotshot.c"
      case 18: // $bb17
        var $101=HEAP[$self]; //@line 1535 "_hotshot.c"
        var $102=$101; //@line 1535 "_hotshot.c"
        var $103=(($102)&4294967295); //@line 1535 "_hotshot.c"
        var $104=HEAP[$103]; //@line 1535 "_hotshot.c"
        var $105=((($104) - 1)&4294967295); //@line 1535 "_hotshot.c"
        var $106=(($102)&4294967295); //@line 1535 "_hotshot.c"
        HEAP[$106]=$105; //@line 1535 "_hotshot.c"
        var $107=(($102)&4294967295); //@line 1535 "_hotshot.c"
        var $108=HEAP[$107]; //@line 1535 "_hotshot.c"
        var $109=((($108))|0)==0; //@line 1535 "_hotshot.c"
        if ($109) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1535 "_hotshot.c"
      case 19: // $bb18
        var $110=HEAP[$self]; //@line 1535 "_hotshot.c"
        var $111=$110; //@line 1535 "_hotshot.c"
        var $112=(($111+4)&4294967295); //@line 1535 "_hotshot.c"
        var $113=HEAP[$112]; //@line 1535 "_hotshot.c"
        var $114=(($113+24)&4294967295); //@line 1535 "_hotshot.c"
        var $115=HEAP[$114]; //@line 1535 "_hotshot.c"
        var $116=HEAP[$self]; //@line 1535 "_hotshot.c"
        var $117=$116; //@line 1535 "_hotshot.c"
        FUNCTION_TABLE[$115]($117); //@line 1535 "_hotshot.c"
        __label__ = 20; break; //@line 1535 "_hotshot.c"
      case 20: // $bb19
        HEAP[$self]=0; //@line 1536 "_hotshot.c"
        __label__ = 21; break; //@line 1536 "_hotshot.c"
      case 21: // $bb20
        var $118=HEAP[$self]; //@line 1539 "_hotshot.c"
        var $119=$118; //@line 1539 "_hotshot.c"
        HEAP[$0]=$119; //@line 1539 "_hotshot.c"
        __label__ = 22; break; //@line 1539 "_hotshot.c"
      case 22: // $bb21
        var $120=HEAP[$0]; //@line 1503 "_hotshot.c"
        HEAP[$retval]=$120; //@line 1503 "_hotshot.c"
        __label__ = 23; break; //@line 1503 "_hotshot.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 1503 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 1503 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _hotshot_coverage($unused, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $unused_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $logfilename=__stackBase__+16;
        var $result=__stackBase__+20;
        var $self=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$unused_addr]=$unused;
        HEAP[$args_addr]=$args;
        HEAP[$result]=0; //@line 1551 "_hotshot.c"
        var $1=HEAP[$args_addr]; //@line 1553 "_hotshot.c"
        var $2=_PyArg_ParseTuple($1, ((__str55)&4294967295), $logfilename); //@line 1553 "_hotshot.c"
        var $3=((($2))|0)!=0; //@line 1553 "_hotshot.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1553 "_hotshot.c"
      case 1: // $bb
        var $4=HEAP[$unused_addr]; //@line 1554 "_hotshot.c"
        var $5=HEAP[$args_addr]; //@line 1554 "_hotshot.c"
        var $6=_hotshot_profiler($4, $5); //@line 1554 "_hotshot.c"
        HEAP[$result]=$6; //@line 1554 "_hotshot.c"
        var $7=HEAP[$result]; //@line 1555 "_hotshot.c"
        var $8=($7)!=0; //@line 1555 "_hotshot.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1555 "_hotshot.c"
      case 2: // $bb1
        var $9=HEAP[$result]; //@line 1556 "_hotshot.c"
        var $10=$9; //@line 1556 "_hotshot.c"
        HEAP[$self]=$10; //@line 1556 "_hotshot.c"
        var $11=HEAP[$self]; //@line 1557 "_hotshot.c"
        var $12=(($11+10272)&4294967295); //@line 1557 "_hotshot.c"
        HEAP[$12]=0; //@line 1557 "_hotshot.c"
        var $13=HEAP[$self]; //@line 1558 "_hotshot.c"
        var $14=(($13+10268)&4294967295); //@line 1558 "_hotshot.c"
        HEAP[$14]=0; //@line 1558 "_hotshot.c"
        var $15=HEAP[$self]; //@line 1559 "_hotshot.c"
        var $16=(($15+10264)&4294967295); //@line 1559 "_hotshot.c"
        HEAP[$16]=1; //@line 1559 "_hotshot.c"
        __label__ = 3; break; //@line 1559 "_hotshot.c"
      case 3: // $bb2
        var $17=HEAP[$result]; //@line 1562 "_hotshot.c"
        HEAP[$0]=$17; //@line 1562 "_hotshot.c"
        var $18=HEAP[$0]; //@line 1562 "_hotshot.c"
        HEAP[$retval]=$18; //@line 1562 "_hotshot.c"
        __label__ = 4; break; //@line 1562 "_hotshot.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1562 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1562 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _hotshot_resolution($self, $unused) {
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
        var $1=HEAP[_timeofday_diff]; //@line 1585 "_hotshot.c"
        var $2=((($1))|0)==0; //@line 1585 "_hotshot.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1585 "_hotshot.c"
      case 1: // $bb
        _calibrate(); //@line 1586 "_hotshot.c"
        _calibrate(); //@line 1587 "_hotshot.c"
        _calibrate(); //@line 1588 "_hotshot.c"
        __label__ = 2; break; //@line 1588 "_hotshot.c"
      case 2: // $bb1
        var $3=HEAP[_rusage_diff]; //@line 1593 "_hotshot.c"
        var $4=HEAP[_timeofday_diff]; //@line 1593 "_hotshot.c"
        var $5=_Py_BuildValue(((__str56)&4294967295), $4, $3); //@line 1593 "_hotshot.c"
        HEAP[$0]=$5; //@line 1593 "_hotshot.c"
        var $6=HEAP[$0]; //@line 1593 "_hotshot.c"
        HEAP[$retval]=$6; //@line 1593 "_hotshot.c"
        __label__ = 3; break; //@line 1593 "_hotshot.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 1593 "_hotshot.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 1593 "_hotshot.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_hotshot() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module=__stackBase__;
        var $s=__stackBase__+4;
        var $_alloca_point_=0;
        var $0=((_LogReaderType+4)&4294967295); //@line 1612 "_hotshot.c"
        HEAP[$0]=_PyType_Type; //@line 1612 "_hotshot.c"
        var $1=((_ProfilerType+4)&4294967295); //@line 1613 "_hotshot.c"
        HEAP[$1]=_PyType_Type; //@line 1613 "_hotshot.c"
        var $2=_Py_InitModule4(((__str61)&4294967295), ((_functions)&4294967295), 0, 0, 1013); //@line 1614 "_hotshot.c"
        HEAP[$module]=$2; //@line 1614 "_hotshot.c"
        var $3=HEAP[$module]; //@line 1615 "_hotshot.c"
        var $4=($3)!=0; //@line 1615 "_hotshot.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 1615 "_hotshot.c"
      case 1: // $bb
        var $5=_get_version_string(); //@line 1616 "_hotshot.c"
        HEAP[$s]=$5; //@line 1616 "_hotshot.c"
        var $6=HEAP[$module]; //@line 1618 "_hotshot.c"
        var $7=HEAP[$s]; //@line 1618 "_hotshot.c"
        var $8=_PyModule_AddStringConstant($6, ((__str62)&4294967295), $7); //@line 1618 "_hotshot.c"
        var $9=HEAP[$s]; //@line 1619 "_hotshot.c"
        _free($9); //@line 1619 "_hotshot.c"
        var $10=((_LogReaderType)&4294967295); //@line 1620 "_hotshot.c"
        var $11=HEAP[$10]; //@line 1620 "_hotshot.c"
        var $12=((($11) + 1)&4294967295); //@line 1620 "_hotshot.c"
        var $13=((_LogReaderType)&4294967295); //@line 1620 "_hotshot.c"
        HEAP[$13]=$12; //@line 1620 "_hotshot.c"
        var $14=HEAP[$module]; //@line 1621 "_hotshot.c"
        var $15=_PyModule_AddObject($14, ((__str63)&4294967295), _LogReaderType); //@line 1621 "_hotshot.c"
        var $16=((_ProfilerType)&4294967295); //@line 1623 "_hotshot.c"
        var $17=HEAP[$16]; //@line 1623 "_hotshot.c"
        var $18=((($17) + 1)&4294967295); //@line 1623 "_hotshot.c"
        var $19=((_ProfilerType)&4294967295); //@line 1623 "_hotshot.c"
        HEAP[$19]=$18; //@line 1623 "_hotshot.c"
        var $20=HEAP[$module]; //@line 1624 "_hotshot.c"
        var $21=_PyModule_AddObject($20, ((__str64)&4294967295), _ProfilerType); //@line 1624 "_hotshot.c"
        var $22=HEAP[_ProfilerError]; //@line 1627 "_hotshot.c"
        var $23=($22)==0; //@line 1627 "_hotshot.c"
        if ($23) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1627 "_hotshot.c"
      case 2: // $bb1
        var $24=_PyErr_NewException(((__str65)&4294967295), 0, 0); //@line 1628 "_hotshot.c"
        HEAP[_ProfilerError]=$24; //@line 1628 "_hotshot.c"
        __label__ = 3; break; //@line 1628 "_hotshot.c"
      case 3: // $bb2
        var $25=HEAP[_ProfilerError]; //@line 1630 "_hotshot.c"
        var $26=($25)!=0; //@line 1630 "_hotshot.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1630 "_hotshot.c"
      case 4: // $bb3
        var $27=HEAP[_ProfilerError]; //@line 1631 "_hotshot.c"
        var $28=(($27)&4294967295); //@line 1631 "_hotshot.c"
        var $29=HEAP[$28]; //@line 1631 "_hotshot.c"
        var $30=((($29) + 1)&4294967295); //@line 1631 "_hotshot.c"
        var $31=(($27)&4294967295); //@line 1631 "_hotshot.c"
        HEAP[$31]=$30; //@line 1631 "_hotshot.c"
        var $32=HEAP[_ProfilerError]; //@line 1632 "_hotshot.c"
        var $33=HEAP[$module]; //@line 1632 "_hotshot.c"
        var $34=_PyModule_AddObject($33, ((__str66)&4294967295), $32); //@line 1632 "_hotshot.c"
        __label__ = 5; break; //@line 1632 "_hotshot.c"
      case 5: // $bb4
        var $35=HEAP[$module]; //@line 1634 "_hotshot.c"
        var $36=_PyModule_AddIntConstant($35, ((__str67)&4294967295), 0); //@line 1634 "_hotshot.c"
        var $37=HEAP[$module]; //@line 1635 "_hotshot.c"
        var $38=_PyModule_AddIntConstant($37, ((__str68)&4294967295), 1); //@line 1635 "_hotshot.c"
        var $39=HEAP[$module]; //@line 1636 "_hotshot.c"
        var $40=_PyModule_AddIntConstant($39, ((__str69)&4294967295), 2); //@line 1636 "_hotshot.c"
        var $41=HEAP[$module]; //@line 1637 "_hotshot.c"
        var $42=_PyModule_AddIntConstant($41, ((__str70)&4294967295), 3); //@line 1637 "_hotshot.c"
        var $43=HEAP[$module]; //@line 1638 "_hotshot.c"
        var $44=_PyModule_AddIntConstant($43, ((__str71)&4294967295), 19); //@line 1638 "_hotshot.c"
        var $45=HEAP[$module]; //@line 1639 "_hotshot.c"
        var $46=_PyModule_AddIntConstant($45, ((__str72)&4294967295), 35); //@line 1639 "_hotshot.c"
        var $47=HEAP[$module]; //@line 1640 "_hotshot.c"
        var $48=_PyModule_AddIntConstant($47, ((__str73)&4294967295), 67); //@line 1640 "_hotshot.c"
        var $49=HEAP[$module]; //@line 1641 "_hotshot.c"
        var $50=_PyModule_AddIntConstant($49, ((__str74)&4294967295), 51); //@line 1641 "_hotshot.c"
        __label__ = 6; break; //@line 1641 "_hotshot.c"
      case 6: // $bb5
        __label__ = 7; break; //@line 1643 "_hotshot.c"
      case 7: // $return
        STACKTOP = __stackBase__;
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
_rcsid_9655=allocate(1, "i8*", ALLOC_NORMAL);
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
HEAP[_profiler_methods]=((__str16)&4294967295);
HEAP[_profiler_methods+4]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_profiler_methods+12]=((_addinfo__doc__)&4294967295);
HEAP[_profiler_methods+16]=((__str17)&4294967295);
HEAP[_profiler_methods+20]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_profiler_methods+28]=((_close__doc__)&4294967295);
HEAP[_profiler_methods+32]=((__str18)&4294967295);
HEAP[_profiler_methods+36]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_profiler_methods+44]=((_logreader_fileno__doc__)&4294967295);
HEAP[_profiler_methods+48]=((__str12)&4294967295);
HEAP[_profiler_methods+52]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_profiler_methods+60]=((_runcall__doc__)&4294967295);
HEAP[_profiler_methods+64]=((__str19)&4294967295);
HEAP[_profiler_methods+68]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_profiler_methods+76]=((_runcode__doc__)&4294967295);
HEAP[_profiler_methods+80]=((__str20)&4294967295);
HEAP[_profiler_methods+84]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_profiler_methods+92]=((_start__doc__)&4294967295);
HEAP[_profiler_methods+96]=((__str21)&4294967295);
HEAP[_profiler_methods+100]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_profiler_methods+108]=((_stop__doc__)&4294967295);
HEAP[_profiler_members]=((__str22)&4294967295);
HEAP[_profiler_members+20]=((__str23)&4294967295);
HEAP[_profiler_members+40]=((__str24)&4294967295);
HEAP[_profiler_getsets]=((__str25)&4294967295);
HEAP[_profiler_getsets+4]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_profiler_getsets+12]=((__str26)&4294967295);
HEAP[_ProfilerType+12]=((__str27)&4294967295);
HEAP[_ProfilerType+24]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_ProfilerType+72]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_ProfilerType+88]=((_profiler_object__doc__)&4294967295);
HEAP[_ProfilerType+116]=((_profiler_methods)&4294967295);
HEAP[_ProfilerType+120]=_profiler_members;
HEAP[_ProfilerType+124]=_profiler_getsets;
HEAP[_logreader_methods]=((__str17)&4294967295);
HEAP[_logreader_methods+4]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_logreader_methods+12]=((_logreader_close__doc__)&4294967295);
HEAP[_logreader_methods+16]=((__str18)&4294967295);
HEAP[_logreader_methods+20]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_logreader_methods+28]=((_logreader_fileno__doc__)&4294967295);
HEAP[_logreader_members]=((__str28)&4294967295);
HEAP[_logreader_members+16]=((__str29)&4294967295);
HEAP[_logreader_as_sequence+12]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_logreader_getsets]=((__str25)&4294967295);
HEAP[_logreader_getsets+4]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_logreader_getsets+12]=((__str30)&4294967295);
HEAP[_LogReaderType+12]=((__str31)&4294967295);
HEAP[_LogReaderType+24]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_LogReaderType+52]=_logreader_as_sequence;
HEAP[_LogReaderType+72]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_LogReaderType+88]=((_logreader__doc__)&4294967295);
HEAP[_LogReaderType+108]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_LogReaderType+112]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_LogReaderType+116]=((_logreader_methods)&4294967295);
HEAP[_LogReaderType+120]=((_logreader_members)&4294967295);
HEAP[_LogReaderType+124]=_logreader_getsets;
HEAP[_rcsid_9655]=((__str35)&4294967295);
HEAP[_functions]=((__str57)&4294967295);
HEAP[_functions+4]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_functions+12]=((_coverage__doc__)&4294967295);
HEAP[_functions+16]=((__str58)&4294967295);
HEAP[_functions+20]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_functions+28]=((_profiler__doc__)&4294967295);
HEAP[_functions+32]=((__str59)&4294967295);
HEAP[_functions+36]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_functions+44]=((_logreader__doc__)&4294967295);
HEAP[_functions+48]=((__str60)&4294967295);
HEAP[_functions+52]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_functions+60]=((_resolution__doc__)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

