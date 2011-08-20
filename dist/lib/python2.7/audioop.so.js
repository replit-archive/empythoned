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



var $0___SIZE = 416; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 16; // %2
  
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
  
var _seg_aend;
var _seg_uend;
var __st_ulaw2linear16;
var __st_alaw2linear16;
var _indexTable;
var _stepsizeTable;
var _AudioopError;
var __str;
var __str1;
var __str2;
var __str3;
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
var __str17;
var __str18;
var __str19;
var __str20;
var __str21;
var __str22;
var _PyExc_MemoryError;
var __str23;
var __str24;
var __str25;
var __str26;
var __str27;
var __str28;
var __str29;
var __str30;
var _PyExc_OverflowError;
var __str31;
var __str32;
var __str33;
var __Py_NoneStruct;
var __str34;
var _PyTuple_Type;
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
var _audioop_methods;
var __str72;
var __str73;
var __str74;


























  function _audioop_getsample($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $i=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 325 "audioop.c"
        var $3=$args_addr; //@line 328 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str2, $cp, $len, $size, $i); //@line 328 "audioop.c"
        var $5=($4)==0; //@line 328 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 328 "audioop.c"
      case 1: // $bb
        $2=0; //@line 329 "audioop.c"
        __label__ = 17; break; //@line 329 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 330 "audioop.c"
        var $7=HEAP[$len]; //@line 330 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 331 "audioop.c"
        __label__ = 17; break; //@line 331 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$i]; //@line 332 "audioop.c"
        var $22=($21) < 0; //@line 332 "audioop.c"
        if ($22) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 332 "audioop.c"
      case 8: // $bb4
        var $23=HEAP[$len]; //@line 332 "audioop.c"
        var $24=HEAP[$size]; //@line 332 "audioop.c"
        var $25=((($23)/($24))|0); //@line 332 "audioop.c"
        var $26=HEAP[$i]; //@line 332 "audioop.c"
        var $27=($25) <= ($26); //@line 332 "audioop.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 332 "audioop.c"
      case 9: // $bb5
        var $28=HEAP[_AudioopError]; //@line 333 "audioop.c"
        _PyErr_SetString($28, __str3); //@line 333 "audioop.c"
        $2=0; //@line 334 "audioop.c"
        __label__ = 17; break; //@line 334 "audioop.c"
      case 10: // $bb6
        var $29=HEAP[$size]; //@line 336 "audioop.c"
        var $30=($29)==1; //@line 336 "audioop.c"
        if ($30) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 336 "audioop.c"
      case 11: // $bb7
        var $31=HEAP[$cp]; //@line 336 "audioop.c"
        var $32=HEAP[$i]; //@line 336 "audioop.c"
        var $33=$31+$32; //@line 336 "audioop.c"
        var $34=HEAP[$33]; //@line 336 "audioop.c"
        var $35=($34); //@line 336 "audioop.c"
        $val=$35; //@line 336 "audioop.c"
        __label__ = 16; break; //@line 336 "audioop.c"
      case 12: // $bb8
        var $36=HEAP[$size]; //@line 337 "audioop.c"
        var $37=($36)==2; //@line 337 "audioop.c"
        if ($37) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 337 "audioop.c"
      case 13: // $bb9
        var $38=HEAP[$cp]; //@line 337 "audioop.c"
        var $39=HEAP[$i]; //@line 337 "audioop.c"
        var $40=($39) * 2; //@line 337 "audioop.c"
        var $41=$38+$40; //@line 337 "audioop.c"
        var $42=$41; //@line 337 "audioop.c"
        var $43=HEAP[$42]; //@line 337 "audioop.c"
        var $44=($43); //@line 337 "audioop.c"
        $val=$44; //@line 337 "audioop.c"
        __label__ = 16; break; //@line 337 "audioop.c"
      case 14: // $bb10
        var $45=HEAP[$size]; //@line 338 "audioop.c"
        var $46=($45)==4; //@line 338 "audioop.c"
        if ($46) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 338 "audioop.c"
      case 15: // $bb11
        var $47=HEAP[$cp]; //@line 338 "audioop.c"
        var $48=HEAP[$i]; //@line 338 "audioop.c"
        var $49=($48) * 4; //@line 338 "audioop.c"
        var $50=$47+$49; //@line 338 "audioop.c"
        var $51=$50; //@line 338 "audioop.c"
        var $52=HEAP[$51]; //@line 338 "audioop.c"
        $val=$52; //@line 338 "audioop.c"
        __label__ = 16; break; //@line 338 "audioop.c"
      case 16: // $bb12
        var $53=$val; //@line 339 "audioop.c"
        var $54=_PyInt_FromLong($53); //@line 339 "audioop.c"
        $2=$54; //@line 339 "audioop.c"
        __label__ = 17; break; //@line 339 "audioop.c"
      case 17: // $bb13
        var $55=$2; //@line 329 "audioop.c"
        $retval=$55; //@line 329 "audioop.c"
        var $retval14=$retval; //@line 329 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 329 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_max($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $i;
        var $max;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 346 "audioop.c"
        $max=0; //@line 348 "audioop.c"
        var $3=$args_addr; //@line 350 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str4, $cp, $len, $size); //@line 350 "audioop.c"
        var $5=($4)==0; //@line 350 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 350 "audioop.c"
      case 1: // $bb
        $2=0; //@line 351 "audioop.c"
        __label__ = 21; break; //@line 351 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 352 "audioop.c"
        var $7=HEAP[$len]; //@line 352 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 353 "audioop.c"
        __label__ = 21; break; //@line 353 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        $i=0; //@line 354 "audioop.c"
        var $21=HEAP[$len]; //@line 354 "audioop.c"
        var $22=$i; //@line 354 "audioop.c"
        var $23=($22) < ($21); //@line 354 "audioop.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 20; break; } //@line 354 "audioop.c"
      case 8: // $bb4
        var $24=HEAP[$size]; //@line 355 "audioop.c"
        var $25=($24)==1; //@line 355 "audioop.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 355 "audioop.c"
      case 9: // $bb5
        var $26=HEAP[$cp]; //@line 355 "audioop.c"
        var $27=$i; //@line 355 "audioop.c"
        var $28=$26+$27; //@line 355 "audioop.c"
        var $29=HEAP[$28]; //@line 355 "audioop.c"
        var $30=($29); //@line 355 "audioop.c"
        $val=$30; //@line 355 "audioop.c"
        __lastLabel__ = 9; __label__ = 15; break; //@line 355 "audioop.c"
      case 10: // $bb6
        var $31=HEAP[$size]; //@line 356 "audioop.c"
        var $32=($31)==2; //@line 356 "audioop.c"
        if ($32) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 356 "audioop.c"
      case 11: // $bb7
        var $33=HEAP[$cp]; //@line 356 "audioop.c"
        var $34=$i; //@line 356 "audioop.c"
        var $35=$33+$34; //@line 356 "audioop.c"
        var $36=$35; //@line 356 "audioop.c"
        var $37=HEAP[$36]; //@line 356 "audioop.c"
        var $38=($37); //@line 356 "audioop.c"
        $val=$38; //@line 356 "audioop.c"
        __lastLabel__ = 11; __label__ = 15; break; //@line 356 "audioop.c"
      case 12: // $bb8
        var $39=HEAP[$size]; //@line 357 "audioop.c"
        var $40=($39)==4; //@line 357 "audioop.c"
        if ($40) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 357 "audioop.c"
      case 13: // $bb9
        var $41=HEAP[$cp]; //@line 357 "audioop.c"
        var $42=$i; //@line 357 "audioop.c"
        var $43=$41+$42; //@line 357 "audioop.c"
        var $44=$43; //@line 357 "audioop.c"
        var $45=HEAP[$44]; //@line 357 "audioop.c"
        $val=$45; //@line 357 "audioop.c"
        __lastLabel__ = 13; __label__ = 15; break; //@line 357 "audioop.c"
      case 14: // $bb10thread_pre_split
        var $_pr=$val;
        __lastLabel__ = 14; __label__ = 15; break;
      case 15: // $bb10
        var $46=__lastLabel__ == 14 ? $_pr : (__lastLabel__ == 13 ? $45 : (__lastLabel__ == 11 ? $38 : ($30)));
        var $47=($46) < 0; //@line 358 "audioop.c"
        if ($47) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 358 "audioop.c"
      case 16: // $bb11
        var $48=$val; //@line 358 "audioop.c"
        var $49=0 - ($48); //@line 358 "audioop.c"
        $val=$49; //@line 358 "audioop.c"
        __label__ = 17; break; //@line 358 "audioop.c"
      case 17: // $bb12
        var $50=$val; //@line 359 "audioop.c"
        var $51=$max; //@line 359 "audioop.c"
        var $52=($50) > ($51); //@line 359 "audioop.c"
        if ($52) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 359 "audioop.c"
      case 18: // $bb13
        var $53=$val; //@line 359 "audioop.c"
        $max=$53; //@line 359 "audioop.c"
        __label__ = 19; break; //@line 359 "audioop.c"
      case 19: // $bb14
        var $54=HEAP[$size]; //@line 354 "audioop.c"
        var $55=$i; //@line 354 "audioop.c"
        var $56=($55) + ($54); //@line 354 "audioop.c"
        $i=$56; //@line 354 "audioop.c"
        var $57=HEAP[$len]; //@line 354 "audioop.c"
        var $58=$i; //@line 354 "audioop.c"
        var $59=($58) < ($57); //@line 354 "audioop.c"
        if ($59) { __label__ = 8; break; } else { __label__ = 20; break; } //@line 354 "audioop.c"
      case 20: // $bb16
        var $60=$max; //@line 361 "audioop.c"
        var $61=_PyInt_FromLong($60); //@line 361 "audioop.c"
        $2=$61; //@line 361 "audioop.c"
        __label__ = 21; break; //@line 361 "audioop.c"
      case 21: // $bb17
        var $62=$2; //@line 351 "audioop.c"
        $retval=$62; //@line 351 "audioop.c"
        var $retval18=$retval; //@line 351 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 351 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_minmax($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $i;
        var $min;
        var $max;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 368 "audioop.c"
        $min=2147483647; //@line 370 "audioop.c"
        $max=-2147483647; //@line 370 "audioop.c"
        var $3=$args_addr; //@line 372 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str5, $cp, $len, $size); //@line 372 "audioop.c"
        var $5=($4)==0; //@line 372 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 372 "audioop.c"
      case 1: // $bb
        $2=0; //@line 373 "audioop.c"
        __label__ = 20; break; //@line 373 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 374 "audioop.c"
        var $7=HEAP[$len]; //@line 374 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 375 "audioop.c"
        __label__ = 20; break; //@line 375 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        $i=0; //@line 376 "audioop.c"
        var $21=HEAP[$len]; //@line 376 "audioop.c"
        var $22=$i; //@line 376 "audioop.c"
        var $23=($22) < ($21); //@line 376 "audioop.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 19; break; } //@line 376 "audioop.c"
      case 8: // $bb4
        var $24=HEAP[$size]; //@line 377 "audioop.c"
        var $25=($24)==1; //@line 377 "audioop.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 377 "audioop.c"
      case 9: // $bb5
        var $26=HEAP[$cp]; //@line 377 "audioop.c"
        var $27=$i; //@line 377 "audioop.c"
        var $28=$26+$27; //@line 377 "audioop.c"
        var $29=HEAP[$28]; //@line 377 "audioop.c"
        var $30=($29); //@line 377 "audioop.c"
        $val=$30; //@line 377 "audioop.c"
        __label__ = 14; break; //@line 377 "audioop.c"
      case 10: // $bb6
        var $31=HEAP[$size]; //@line 378 "audioop.c"
        var $32=($31)==2; //@line 378 "audioop.c"
        if ($32) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 378 "audioop.c"
      case 11: // $bb7
        var $33=HEAP[$cp]; //@line 378 "audioop.c"
        var $34=$i; //@line 378 "audioop.c"
        var $35=$33+$34; //@line 378 "audioop.c"
        var $36=$35; //@line 378 "audioop.c"
        var $37=HEAP[$36]; //@line 378 "audioop.c"
        var $38=($37); //@line 378 "audioop.c"
        $val=$38; //@line 378 "audioop.c"
        __label__ = 14; break; //@line 378 "audioop.c"
      case 12: // $bb8
        var $39=HEAP[$size]; //@line 379 "audioop.c"
        var $40=($39)==4; //@line 379 "audioop.c"
        if ($40) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 379 "audioop.c"
      case 13: // $bb9
        var $41=HEAP[$cp]; //@line 379 "audioop.c"
        var $42=$i; //@line 379 "audioop.c"
        var $43=$41+$42; //@line 379 "audioop.c"
        var $44=$43; //@line 379 "audioop.c"
        var $45=HEAP[$44]; //@line 379 "audioop.c"
        $val=$45; //@line 379 "audioop.c"
        __label__ = 14; break; //@line 379 "audioop.c"
      case 14: // $bb10
        var $46=$val; //@line 380 "audioop.c"
        var $47=$max; //@line 380 "audioop.c"
        var $48=($46) > ($47); //@line 380 "audioop.c"
        if ($48) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 380 "audioop.c"
      case 15: // $bb11
        var $49=$val; //@line 380 "audioop.c"
        $max=$49; //@line 380 "audioop.c"
        __label__ = 16; break; //@line 380 "audioop.c"
      case 16: // $bb12
        var $50=$val; //@line 381 "audioop.c"
        var $51=$min; //@line 381 "audioop.c"
        var $52=($50) < ($51); //@line 381 "audioop.c"
        if ($52) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 381 "audioop.c"
      case 17: // $bb13
        var $53=$val; //@line 381 "audioop.c"
        $min=$53; //@line 381 "audioop.c"
        __label__ = 18; break; //@line 381 "audioop.c"
      case 18: // $bb14
        var $54=HEAP[$size]; //@line 376 "audioop.c"
        var $55=$i; //@line 376 "audioop.c"
        var $56=($55) + ($54); //@line 376 "audioop.c"
        $i=$56; //@line 376 "audioop.c"
        var $57=HEAP[$len]; //@line 376 "audioop.c"
        var $58=$i; //@line 376 "audioop.c"
        var $59=($58) < ($57); //@line 376 "audioop.c"
        if ($59) { __label__ = 8; break; } else { __label__ = 19; break; } //@line 376 "audioop.c"
      case 19: // $bb16
        var $60=$min; //@line 383 "audioop.c"
        var $61=$max; //@line 383 "audioop.c"
        var $62=_Py_BuildValue(__str6, $60, $61); //@line 383 "audioop.c"
        $2=$62; //@line 383 "audioop.c"
        __label__ = 20; break; //@line 383 "audioop.c"
      case 20: // $bb17
        var $63=$2; //@line 373 "audioop.c"
        $retval=$63; //@line 373 "audioop.c"
        var $retval18=$retval; //@line 373 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 373 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_avg($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $i;
        var $avg;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 390 "audioop.c"
        $avg=0; //@line 392 "audioop.c"
        var $3=$args_addr; //@line 394 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str7, $cp, $len, $size); //@line 394 "audioop.c"
        var $5=($4)==0; //@line 394 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 394 "audioop.c"
      case 1: // $bb
        $2=0; //@line 395 "audioop.c"
        __label__ = 19; break; //@line 395 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 396 "audioop.c"
        var $7=HEAP[$len]; //@line 396 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 397 "audioop.c"
        __label__ = 19; break; //@line 397 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        $i=0; //@line 398 "audioop.c"
        var $21=HEAP[$len]; //@line 398 "audioop.c"
        var $22=$i; //@line 398 "audioop.c"
        var $23=($22) < ($21); //@line 398 "audioop.c"
        if ($23) { __lastLabel__ = 7; __label__ = 8; break; } else { __lastLabel__ = 7; __label__ = 15; break; } //@line 398 "audioop.c"
      case 8: // $bb4
        var $24=HEAP[$size]; //@line 399 "audioop.c"
        var $25=($24)==1; //@line 399 "audioop.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 399 "audioop.c"
      case 9: // $bb5
        var $26=HEAP[$cp]; //@line 399 "audioop.c"
        var $27=$i; //@line 399 "audioop.c"
        var $28=$26+$27; //@line 399 "audioop.c"
        var $29=HEAP[$28]; //@line 399 "audioop.c"
        var $30=($29); //@line 399 "audioop.c"
        $val=$30; //@line 399 "audioop.c"
        __label__ = 14; break; //@line 399 "audioop.c"
      case 10: // $bb6
        var $31=HEAP[$size]; //@line 400 "audioop.c"
        var $32=($31)==2; //@line 400 "audioop.c"
        if ($32) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 400 "audioop.c"
      case 11: // $bb7
        var $33=HEAP[$cp]; //@line 400 "audioop.c"
        var $34=$i; //@line 400 "audioop.c"
        var $35=$33+$34; //@line 400 "audioop.c"
        var $36=$35; //@line 400 "audioop.c"
        var $37=HEAP[$36]; //@line 400 "audioop.c"
        var $38=($37); //@line 400 "audioop.c"
        $val=$38; //@line 400 "audioop.c"
        __label__ = 14; break; //@line 400 "audioop.c"
      case 12: // $bb8
        var $39=HEAP[$size]; //@line 401 "audioop.c"
        var $40=($39)==4; //@line 401 "audioop.c"
        if ($40) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 401 "audioop.c"
      case 13: // $bb9
        var $41=HEAP[$cp]; //@line 401 "audioop.c"
        var $42=$i; //@line 401 "audioop.c"
        var $43=$41+$42; //@line 401 "audioop.c"
        var $44=$43; //@line 401 "audioop.c"
        var $45=HEAP[$44]; //@line 401 "audioop.c"
        $val=$45; //@line 401 "audioop.c"
        __label__ = 14; break; //@line 401 "audioop.c"
      case 14: // $bb10
        var $46=$val; //@line 402 "audioop.c"
        var $47=($46); //@line 402 "audioop.c"
        var $48=$avg; //@line 402 "audioop.c"
        var $49=($47) + ($48); //@line 402 "audioop.c"
        $avg=$49; //@line 402 "audioop.c"
        var $50=HEAP[$size]; //@line 398 "audioop.c"
        var $51=$i; //@line 398 "audioop.c"
        var $52=($51) + ($50); //@line 398 "audioop.c"
        $i=$52; //@line 398 "audioop.c"
        var $53=HEAP[$len]; //@line 398 "audioop.c"
        var $54=$i; //@line 398 "audioop.c"
        var $55=($54) < ($53); //@line 398 "audioop.c"
        if ($55) { __lastLabel__ = 14; __label__ = 8; break; } else { __lastLabel__ = 14; __label__ = 15; break; } //@line 398 "audioop.c"
      case 15: // $bb12
        var $56=__lastLabel__ == 14 ? $53 : ($21);
        var $57=($56)==0; //@line 404 "audioop.c"
        if ($57) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 404 "audioop.c"
      case 16: // $bb13
        $val=0; //@line 405 "audioop.c"
        __label__ = 18; break; //@line 405 "audioop.c"
      case 17: // $bb14
        var $58=HEAP[$len]; //@line 407 "audioop.c"
        var $59=HEAP[$size]; //@line 407 "audioop.c"
        var $60=((($58)/($59))|0); //@line 407 "audioop.c"
        var $61=($60); //@line 407 "audioop.c"
        var $62=$avg; //@line 407 "audioop.c"
        var $63=($62) / ($61); //@line 407 "audioop.c"
        var $64=((($63))|0); //@line 407 "audioop.c"
        $val=$64; //@line 407 "audioop.c"
        __label__ = 18; break; //@line 407 "audioop.c"
      case 18: // $bb15
        var $65=$val; //@line 408 "audioop.c"
        var $66=_PyInt_FromLong($65); //@line 408 "audioop.c"
        $2=$66; //@line 408 "audioop.c"
        __label__ = 19; break; //@line 408 "audioop.c"
      case 19: // $bb16
        var $67=$2; //@line 395 "audioop.c"
        $retval=$67; //@line 395 "audioop.c"
        var $retval17=$retval; //@line 395 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 395 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_rms($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $i;
        var $sum_squares;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 415 "audioop.c"
        $sum_squares=0; //@line 417 "audioop.c"
        var $3=$args_addr; //@line 419 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str8, $cp, $len, $size); //@line 419 "audioop.c"
        var $5=($4)==0; //@line 419 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 419 "audioop.c"
      case 1: // $bb
        $2=0; //@line 420 "audioop.c"
        __label__ = 19; break; //@line 420 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 421 "audioop.c"
        var $7=HEAP[$len]; //@line 421 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 422 "audioop.c"
        __label__ = 19; break; //@line 422 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        $i=0; //@line 423 "audioop.c"
        var $21=HEAP[$len]; //@line 423 "audioop.c"
        var $22=$i; //@line 423 "audioop.c"
        var $23=($22) < ($21); //@line 423 "audioop.c"
        if ($23) { __lastLabel__ = 7; __label__ = 8; break; } else { __lastLabel__ = 7; __label__ = 15; break; } //@line 423 "audioop.c"
      case 8: // $bb4
        var $24=HEAP[$size]; //@line 424 "audioop.c"
        var $25=($24)==1; //@line 424 "audioop.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 424 "audioop.c"
      case 9: // $bb5
        var $26=HEAP[$cp]; //@line 424 "audioop.c"
        var $27=$i; //@line 424 "audioop.c"
        var $28=$26+$27; //@line 424 "audioop.c"
        var $29=HEAP[$28]; //@line 424 "audioop.c"
        var $30=($29); //@line 424 "audioop.c"
        $val=$30; //@line 424 "audioop.c"
        __label__ = 14; break; //@line 424 "audioop.c"
      case 10: // $bb6
        var $31=HEAP[$size]; //@line 425 "audioop.c"
        var $32=($31)==2; //@line 425 "audioop.c"
        if ($32) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 425 "audioop.c"
      case 11: // $bb7
        var $33=HEAP[$cp]; //@line 425 "audioop.c"
        var $34=$i; //@line 425 "audioop.c"
        var $35=$33+$34; //@line 425 "audioop.c"
        var $36=$35; //@line 425 "audioop.c"
        var $37=HEAP[$36]; //@line 425 "audioop.c"
        var $38=($37); //@line 425 "audioop.c"
        $val=$38; //@line 425 "audioop.c"
        __label__ = 14; break; //@line 425 "audioop.c"
      case 12: // $bb8
        var $39=HEAP[$size]; //@line 426 "audioop.c"
        var $40=($39)==4; //@line 426 "audioop.c"
        if ($40) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 426 "audioop.c"
      case 13: // $bb9
        var $41=HEAP[$cp]; //@line 426 "audioop.c"
        var $42=$i; //@line 426 "audioop.c"
        var $43=$41+$42; //@line 426 "audioop.c"
        var $44=$43; //@line 426 "audioop.c"
        var $45=HEAP[$44]; //@line 426 "audioop.c"
        $val=$45; //@line 426 "audioop.c"
        __label__ = 14; break; //@line 426 "audioop.c"
      case 14: // $bb10
        var $46=$val; //@line 427 "audioop.c"
        var $47=($46); //@line 427 "audioop.c"
        var $48=$val; //@line 427 "audioop.c"
        var $49=($48); //@line 427 "audioop.c"
        var $50=($47) * ($49); //@line 427 "audioop.c"
        var $51=$sum_squares; //@line 427 "audioop.c"
        var $52=($50) + ($51); //@line 427 "audioop.c"
        $sum_squares=$52; //@line 427 "audioop.c"
        var $53=HEAP[$size]; //@line 423 "audioop.c"
        var $54=$i; //@line 423 "audioop.c"
        var $55=($54) + ($53); //@line 423 "audioop.c"
        $i=$55; //@line 423 "audioop.c"
        var $56=HEAP[$len]; //@line 423 "audioop.c"
        var $57=$i; //@line 423 "audioop.c"
        var $58=($57) < ($56); //@line 423 "audioop.c"
        if ($58) { __lastLabel__ = 14; __label__ = 8; break; } else { __lastLabel__ = 14; __label__ = 15; break; } //@line 423 "audioop.c"
      case 15: // $bb12
        var $59=__lastLabel__ == 14 ? $56 : ($21);
        var $60=($59)==0; //@line 429 "audioop.c"
        if ($60) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 429 "audioop.c"
      case 16: // $bb13
        $val=0; //@line 430 "audioop.c"
        __label__ = 18; break; //@line 430 "audioop.c"
      case 17: // $bb14
        var $61=HEAP[$len]; //@line 432 "audioop.c"
        var $62=HEAP[$size]; //@line 432 "audioop.c"
        var $63=((($61)/($62))|0); //@line 432 "audioop.c"
        var $64=($63); //@line 432 "audioop.c"
        var $65=$sum_squares; //@line 432 "audioop.c"
        var $66=($65) / ($64); //@line 432 "audioop.c"
        var $67=_sqrt($66); //@line 432 "audioop.c"
        var $68=((($67))|0); //@line 432 "audioop.c"
        $val=$68; //@line 432 "audioop.c"
        __label__ = 18; break; //@line 432 "audioop.c"
      case 18: // $bb15
        var $69=$val; //@line 433 "audioop.c"
        var $70=_PyInt_FromLong($69); //@line 433 "audioop.c"
        $2=$70; //@line 433 "audioop.c"
        __label__ = 19; break; //@line 433 "audioop.c"
      case 19: // $bb16
        var $71=$2; //@line 420 "audioop.c"
        $retval=$71; //@line 420 "audioop.c"
        var $retval17=$retval; //@line 420 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 420 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_findfit($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr_i28;
        var $b_addr_i29;
        var $len_addr_i30;
        var $retval_i31;
        var $0;
        var $i_i32;
        var $sum_i33;
        var $a_addr_i19;
        var $b_addr_i20;
        var $len_addr_i21;
        var $retval_i22;
        var $1;
        var $i_i23;
        var $sum_i24;
        var $a_addr_i10;
        var $b_addr_i11;
        var $len_addr_i12;
        var $retval_i13;
        var $2;
        var $i_i14;
        var $sum_i15;
        var $a_addr_i1;
        var $b_addr_i2;
        var $len_addr_i3;
        var $retval_i4;
        var $3;
        var $i_i5;
        var $sum_i6;
        var $a_addr_i;
        var $b_addr_i;
        var $len_addr_i;
        var $retval_i;
        var $4;
        var $i_i;
        var $sum_i;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $5;
        var $cp1=__stackBase__;
        var $cp2=__stackBase__+4;
        var $len1=__stackBase__+8;
        var $len2=__stackBase__+12;
        var $j;
        var $best_j;
        var $aj_m1;
        var $aj_lm1;
        var $sum_ri_2;
        var $sum_aij_2;
        var $sum_aij_ri;
        var $result;
        var $best_result;
        var $factor;
        $self_addr=$self;
        $args_addr=$args;
        var $cp21=$cp2; //@line 492 "audioop.c"
        var $cp13=$cp1; //@line 492 "audioop.c"
        var $6=$args_addr; //@line 492 "audioop.c"
        var $7=_PyArg_ParseTuple($6, __str9, $cp13, $len1, $cp21, $len2); //@line 492 "audioop.c"
        var $8=($7)==0; //@line 492 "audioop.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 492 "audioop.c"
      case 1: // $bb
        $5=0; //@line 494 "audioop.c"
        __label__ = 22; break; //@line 494 "audioop.c"
      case 2: // $bb5
        var $9=HEAP[$len1]; //@line 495 "audioop.c"
        var $10=($9) & 1; //@line 495 "audioop.c"
        var $11=((($10)) & 255); //@line 495 "audioop.c"
        var $toBool=($11)!=0; //@line 495 "audioop.c"
        if ($toBool) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 495 "audioop.c"
      case 3: // $bb6
        var $12=HEAP[$len2]; //@line 495 "audioop.c"
        var $13=($12) & 1; //@line 495 "audioop.c"
        var $14=((($13)) & 255); //@line 495 "audioop.c"
        var $toBool7=($14)!=0; //@line 495 "audioop.c"
        if ($toBool7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 495 "audioop.c"
      case 4: // $bb8
        var $15=HEAP[_AudioopError]; //@line 496 "audioop.c"
        _PyErr_SetString($15, __str10); //@line 496 "audioop.c"
        $5=0; //@line 497 "audioop.c"
        __label__ = 22; break; //@line 497 "audioop.c"
      case 5: // $bb9
        var $16=HEAP[$len1]; //@line 499 "audioop.c"
        var $17=($16) >> 1; //@line 499 "audioop.c"
        HEAP[$len1]=$17; //@line 499 "audioop.c"
        var $18=HEAP[$len2]; //@line 500 "audioop.c"
        var $19=($18) >> 1; //@line 500 "audioop.c"
        HEAP[$len2]=$19; //@line 500 "audioop.c"
        var $20=HEAP[$len1]; //@line 502 "audioop.c"
        var $21=HEAP[$len2]; //@line 502 "audioop.c"
        var $22=($20) < ($21); //@line 502 "audioop.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 502 "audioop.c"
      case 6: // $bb10
        var $23=HEAP[_AudioopError]; //@line 503 "audioop.c"
        _PyErr_SetString($23, __str11); //@line 503 "audioop.c"
        $5=0; //@line 504 "audioop.c"
        __label__ = 22; break; //@line 504 "audioop.c"
      case 7: // $bb11
        var $24=HEAP[$len2]; //@line 506 "audioop.c"
        var $25=HEAP[$cp2]; //@line 506 "audioop.c"
        var $26=HEAP[$cp2]; //@line 506 "audioop.c"
        $a_addr_i=$26;
        $b_addr_i=$25;
        $len_addr_i=$24;
        $sum_i=0; //@line 439 "audioop.c"
        $i_i=0; //@line 441 "audioop.c"
        var $27=$i_i; //@line 441 "audioop.c"
        var $28=$len_addr_i; //@line 441 "audioop.c"
        var $29=($27) < ($28); //@line 441 "audioop.c"
        if ($29) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 441 "audioop.c"
      case 8: // $bb_i
        var $30=$a_addr_i; //@line 442 "audioop.c"
        var $31=$i_i; //@line 442 "audioop.c"
        var $32=$30+2*$31; //@line 442 "audioop.c"
        var $33=HEAP[$32]; //@line 442 "audioop.c"
        var $34=($33); //@line 442 "audioop.c"
        var $35=$b_addr_i; //@line 442 "audioop.c"
        var $36=$i_i; //@line 442 "audioop.c"
        var $37=$35+2*$36; //@line 442 "audioop.c"
        var $38=HEAP[$37]; //@line 442 "audioop.c"
        var $39=($38); //@line 442 "audioop.c"
        var $40=($34) * ($39); //@line 442 "audioop.c"
        var $41=$sum_i; //@line 442 "audioop.c"
        var $42=($40) + ($41); //@line 442 "audioop.c"
        $sum_i=$42; //@line 442 "audioop.c"
        var $43=$i_i; //@line 441 "audioop.c"
        var $44=($43) + 1; //@line 441 "audioop.c"
        $i_i=$44; //@line 441 "audioop.c"
        var $45=$i_i; //@line 441 "audioop.c"
        var $46=$len_addr_i; //@line 441 "audioop.c"
        var $47=($45) < ($46); //@line 441 "audioop.c"
        if ($47) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 441 "audioop.c"
      case 9: // $_sum2_exit
        var $48=$sum_i; //@line 444 "audioop.c"
        $4=$48; //@line 444 "audioop.c"
        var $49=$4; //@line 444 "audioop.c"
        $retval_i=$49; //@line 444 "audioop.c"
        var $retval3_i=$retval_i; //@line 444 "audioop.c"
        $sum_ri_2=$retval3_i; //@line 506 "audioop.c"
        var $50=HEAP[$len2]; //@line 507 "audioop.c"
        var $51=HEAP[$cp1]; //@line 507 "audioop.c"
        var $52=HEAP[$cp1]; //@line 507 "audioop.c"
        $a_addr_i28=$52;
        $b_addr_i29=$51;
        $len_addr_i30=$50;
        $sum_i33=0; //@line 439 "audioop.c"
        $i_i32=0; //@line 441 "audioop.c"
        var $53=$i_i32; //@line 441 "audioop.c"
        var $54=$len_addr_i30; //@line 441 "audioop.c"
        var $55=($53) < ($54); //@line 441 "audioop.c"
        if ($55) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 441 "audioop.c"
      case 10: // $bb_i34
        var $56=$a_addr_i28; //@line 442 "audioop.c"
        var $57=$i_i32; //@line 442 "audioop.c"
        var $58=$56+2*$57; //@line 442 "audioop.c"
        var $59=HEAP[$58]; //@line 442 "audioop.c"
        var $60=($59); //@line 442 "audioop.c"
        var $61=$b_addr_i29; //@line 442 "audioop.c"
        var $62=$i_i32; //@line 442 "audioop.c"
        var $63=$61+2*$62; //@line 442 "audioop.c"
        var $64=HEAP[$63]; //@line 442 "audioop.c"
        var $65=($64); //@line 442 "audioop.c"
        var $66=($60) * ($65); //@line 442 "audioop.c"
        var $67=$sum_i33; //@line 442 "audioop.c"
        var $68=($66) + ($67); //@line 442 "audioop.c"
        $sum_i33=$68; //@line 442 "audioop.c"
        var $69=$i_i32; //@line 441 "audioop.c"
        var $70=($69) + 1; //@line 441 "audioop.c"
        $i_i32=$70; //@line 441 "audioop.c"
        var $71=$i_i32; //@line 441 "audioop.c"
        var $72=$len_addr_i30; //@line 441 "audioop.c"
        var $73=($71) < ($72); //@line 441 "audioop.c"
        if ($73) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 441 "audioop.c"
      case 11: // $_sum2_exit36
        var $74=$sum_i33; //@line 444 "audioop.c"
        $0=$74; //@line 444 "audioop.c"
        var $75=$0; //@line 444 "audioop.c"
        $retval_i31=$75; //@line 444 "audioop.c"
        var $retval3_i35=$retval_i31; //@line 444 "audioop.c"
        $sum_aij_2=$retval3_i35; //@line 507 "audioop.c"
        var $76=HEAP[$len2]; //@line 508 "audioop.c"
        var $77=HEAP[$cp2]; //@line 508 "audioop.c"
        var $78=HEAP[$cp1]; //@line 508 "audioop.c"
        $a_addr_i19=$78;
        $b_addr_i20=$77;
        $len_addr_i21=$76;
        $sum_i24=0; //@line 439 "audioop.c"
        $i_i23=0; //@line 441 "audioop.c"
        var $79=$i_i23; //@line 441 "audioop.c"
        var $80=$len_addr_i21; //@line 441 "audioop.c"
        var $81=($79) < ($80); //@line 441 "audioop.c"
        if ($81) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 441 "audioop.c"
      case 12: // $bb_i25
        var $82=$a_addr_i19; //@line 442 "audioop.c"
        var $83=$i_i23; //@line 442 "audioop.c"
        var $84=$82+2*$83; //@line 442 "audioop.c"
        var $85=HEAP[$84]; //@line 442 "audioop.c"
        var $86=($85); //@line 442 "audioop.c"
        var $87=$b_addr_i20; //@line 442 "audioop.c"
        var $88=$i_i23; //@line 442 "audioop.c"
        var $89=$87+2*$88; //@line 442 "audioop.c"
        var $90=HEAP[$89]; //@line 442 "audioop.c"
        var $91=($90); //@line 442 "audioop.c"
        var $92=($86) * ($91); //@line 442 "audioop.c"
        var $93=$sum_i24; //@line 442 "audioop.c"
        var $94=($92) + ($93); //@line 442 "audioop.c"
        $sum_i24=$94; //@line 442 "audioop.c"
        var $95=$i_i23; //@line 441 "audioop.c"
        var $96=($95) + 1; //@line 441 "audioop.c"
        $i_i23=$96; //@line 441 "audioop.c"
        var $97=$i_i23; //@line 441 "audioop.c"
        var $98=$len_addr_i21; //@line 441 "audioop.c"
        var $99=($97) < ($98); //@line 441 "audioop.c"
        if ($99) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 441 "audioop.c"
      case 13: // $_sum2_exit27
        var $100=$sum_i24; //@line 444 "audioop.c"
        $1=$100; //@line 444 "audioop.c"
        var $101=$1; //@line 444 "audioop.c"
        $retval_i22=$101; //@line 444 "audioop.c"
        var $retval3_i26=$retval_i22; //@line 444 "audioop.c"
        $sum_aij_ri=$retval3_i26; //@line 508 "audioop.c"
        var $102=$sum_ri_2; //@line 510 "audioop.c"
        var $103=$sum_aij_2; //@line 510 "audioop.c"
        var $104=($102) * ($103); //@line 510 "audioop.c"
        var $105=$sum_aij_ri; //@line 510 "audioop.c"
        var $106=$sum_aij_ri; //@line 510 "audioop.c"
        var $107=($105) * ($106); //@line 510 "audioop.c"
        var $108=($104) - ($107); //@line 510 "audioop.c"
        var $109=$sum_aij_2; //@line 510 "audioop.c"
        var $110=($108) / ($109); //@line 510 "audioop.c"
        $result=$110; //@line 510 "audioop.c"
        var $111=$result; //@line 512 "audioop.c"
        $best_result=$111; //@line 512 "audioop.c"
        $best_j=0; //@line 513 "audioop.c"
        $j=1; //@line 515 "audioop.c"
        var $112=HEAP[$len1]; //@line 515 "audioop.c"
        var $113=HEAP[$len2]; //@line 515 "audioop.c"
        var $114=($112) - ($113); //@line 515 "audioop.c"
        var $115=$j; //@line 515 "audioop.c"
        var $116=($114) >= ($115); //@line 515 "audioop.c"
        if ($116) { __label__ = 14; break; } else { __label__ = 19; break; } //@line 515 "audioop.c"
      case 14: // $bb12
        var $117=HEAP[$cp1]; //@line 516 "audioop.c"
        var $118=$j; //@line 516 "audioop.c"
        var $119=($118) - 1; //@line 516 "audioop.c"
        var $120=$117+2*$119; //@line 516 "audioop.c"
        var $121=HEAP[$120]; //@line 516 "audioop.c"
        var $122=($121); //@line 516 "audioop.c"
        $aj_m1=$122; //@line 516 "audioop.c"
        var $123=HEAP[$cp1]; //@line 517 "audioop.c"
        var $124=HEAP[$len2]; //@line 517 "audioop.c"
        var $125=$j; //@line 517 "audioop.c"
        var $126=($124) + -1; //@line 517 "audioop.c"
        var $127=($126) + ($125);
        var $128=$123+2*$127; //@line 517 "audioop.c"
        var $129=HEAP[$128]; //@line 517 "audioop.c"
        var $130=($129); //@line 517 "audioop.c"
        $aj_lm1=$130; //@line 517 "audioop.c"
        var $131=$aj_lm1; //@line 519 "audioop.c"
        var $132=$aj_lm1; //@line 519 "audioop.c"
        var $133=($131) * ($132); //@line 519 "audioop.c"
        var $134=$sum_aij_2; //@line 519 "audioop.c"
        var $135=($133) + ($134); //@line 519 "audioop.c"
        var $136=$aj_m1; //@line 519 "audioop.c"
        var $137=$aj_m1; //@line 519 "audioop.c"
        var $138=($136) * ($137); //@line 519 "audioop.c"
        var $139=($135) - ($138); //@line 519 "audioop.c"
        $sum_aij_2=$139; //@line 519 "audioop.c"
        var $140=HEAP[$len2]; //@line 520 "audioop.c"
        var $141=HEAP[$cp2]; //@line 520 "audioop.c"
        var $142=HEAP[$cp1]; //@line 520 "audioop.c"
        var $143=$j; //@line 520 "audioop.c"
        var $144=$142+2*$143; //@line 520 "audioop.c"
        $a_addr_i10=$144;
        $b_addr_i11=$141;
        $len_addr_i12=$140;
        $sum_i15=0; //@line 439 "audioop.c"
        $i_i14=0; //@line 441 "audioop.c"
        var $145=$i_i14; //@line 441 "audioop.c"
        var $146=$len_addr_i12; //@line 441 "audioop.c"
        var $147=($145) < ($146); //@line 441 "audioop.c"
        if ($147) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 441 "audioop.c"
      case 15: // $bb_i16
        var $148=$a_addr_i10; //@line 442 "audioop.c"
        var $149=$i_i14; //@line 442 "audioop.c"
        var $150=$148+2*$149; //@line 442 "audioop.c"
        var $151=HEAP[$150]; //@line 442 "audioop.c"
        var $152=($151); //@line 442 "audioop.c"
        var $153=$b_addr_i11; //@line 442 "audioop.c"
        var $154=$i_i14; //@line 442 "audioop.c"
        var $155=$153+2*$154; //@line 442 "audioop.c"
        var $156=HEAP[$155]; //@line 442 "audioop.c"
        var $157=($156); //@line 442 "audioop.c"
        var $158=($152) * ($157); //@line 442 "audioop.c"
        var $159=$sum_i15; //@line 442 "audioop.c"
        var $160=($158) + ($159); //@line 442 "audioop.c"
        $sum_i15=$160; //@line 442 "audioop.c"
        var $161=$i_i14; //@line 441 "audioop.c"
        var $162=($161) + 1; //@line 441 "audioop.c"
        $i_i14=$162; //@line 441 "audioop.c"
        var $163=$i_i14; //@line 441 "audioop.c"
        var $164=$len_addr_i12; //@line 441 "audioop.c"
        var $165=($163) < ($164); //@line 441 "audioop.c"
        if ($165) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 441 "audioop.c"
      case 16: // $_sum2_exit18
        var $166=$sum_i15; //@line 444 "audioop.c"
        $2=$166; //@line 444 "audioop.c"
        var $167=$2; //@line 444 "audioop.c"
        $retval_i13=$167; //@line 444 "audioop.c"
        var $retval3_i17=$retval_i13; //@line 444 "audioop.c"
        $sum_aij_ri=$retval3_i17; //@line 520 "audioop.c"
        var $168=$sum_ri_2; //@line 522 "audioop.c"
        var $169=$sum_aij_2; //@line 522 "audioop.c"
        var $170=($168) * ($169); //@line 522 "audioop.c"
        var $171=$sum_aij_ri; //@line 522 "audioop.c"
        var $172=$sum_aij_ri; //@line 522 "audioop.c"
        var $173=($171) * ($172); //@line 522 "audioop.c"
        var $174=($170) - ($173); //@line 522 "audioop.c"
        var $175=$sum_aij_2; //@line 522 "audioop.c"
        var $176=($174) / ($175); //@line 522 "audioop.c"
        $result=$176; //@line 522 "audioop.c"
        var $177=$result; //@line 525 "audioop.c"
        var $178=$best_result; //@line 525 "audioop.c"
        var $179=($177) < ($178); //@line 525 "audioop.c"
        if ($179) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 525 "audioop.c"
      case 17: // $bb13
        var $180=$result; //@line 526 "audioop.c"
        $best_result=$180; //@line 526 "audioop.c"
        var $181=$j; //@line 527 "audioop.c"
        $best_j=$181; //@line 527 "audioop.c"
        __label__ = 18; break; //@line 527 "audioop.c"
      case 18: // $bb14
        var $182=$j; //@line 515 "audioop.c"
        var $183=($182) + 1; //@line 515 "audioop.c"
        $j=$183; //@line 515 "audioop.c"
        var $184=HEAP[$len1]; //@line 515 "audioop.c"
        var $185=HEAP[$len2]; //@line 515 "audioop.c"
        var $186=($184) - ($185); //@line 515 "audioop.c"
        var $187=$j; //@line 515 "audioop.c"
        var $188=($186) >= ($187); //@line 515 "audioop.c"
        if ($188) { __label__ = 14; break; } else { __label__ = 19; break; } //@line 515 "audioop.c"
      case 19: // $bb16
        var $189=HEAP[$len2]; //@line 532 "audioop.c"
        var $190=HEAP[$cp2]; //@line 532 "audioop.c"
        var $191=HEAP[$cp1]; //@line 532 "audioop.c"
        var $192=$best_j; //@line 532 "audioop.c"
        var $193=$191+2*$192; //@line 532 "audioop.c"
        $a_addr_i1=$193;
        $b_addr_i2=$190;
        $len_addr_i3=$189;
        $sum_i6=0; //@line 439 "audioop.c"
        $i_i5=0; //@line 441 "audioop.c"
        var $194=$i_i5; //@line 441 "audioop.c"
        var $195=$len_addr_i3; //@line 441 "audioop.c"
        var $196=($194) < ($195); //@line 441 "audioop.c"
        if ($196) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 441 "audioop.c"
      case 20: // $bb_i7
        var $197=$a_addr_i1; //@line 442 "audioop.c"
        var $198=$i_i5; //@line 442 "audioop.c"
        var $199=$197+2*$198; //@line 442 "audioop.c"
        var $200=HEAP[$199]; //@line 442 "audioop.c"
        var $201=($200); //@line 442 "audioop.c"
        var $202=$b_addr_i2; //@line 442 "audioop.c"
        var $203=$i_i5; //@line 442 "audioop.c"
        var $204=$202+2*$203; //@line 442 "audioop.c"
        var $205=HEAP[$204]; //@line 442 "audioop.c"
        var $206=($205); //@line 442 "audioop.c"
        var $207=($201) * ($206); //@line 442 "audioop.c"
        var $208=$sum_i6; //@line 442 "audioop.c"
        var $209=($207) + ($208); //@line 442 "audioop.c"
        $sum_i6=$209; //@line 442 "audioop.c"
        var $210=$i_i5; //@line 441 "audioop.c"
        var $211=($210) + 1; //@line 441 "audioop.c"
        $i_i5=$211; //@line 441 "audioop.c"
        var $212=$i_i5; //@line 441 "audioop.c"
        var $213=$len_addr_i3; //@line 441 "audioop.c"
        var $214=($212) < ($213); //@line 441 "audioop.c"
        if ($214) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 441 "audioop.c"
      case 21: // $_sum2_exit9
        var $215=$sum_i6; //@line 444 "audioop.c"
        $3=$215; //@line 444 "audioop.c"
        var $216=$3; //@line 444 "audioop.c"
        $retval_i4=$216; //@line 444 "audioop.c"
        var $retval3_i8=$retval_i4; //@line 444 "audioop.c"
        var $217=$sum_ri_2; //@line 532 "audioop.c"
        var $218=($retval3_i8) / ($217); //@line 532 "audioop.c"
        $factor=$218; //@line 532 "audioop.c"
        var $219=$best_j; //@line 534 "audioop.c"
        var $220=$factor; //@line 534 "audioop.c"
        var $221=_Py_BuildValue(__str12, $219, $220); //@line 534 "audioop.c"
        $5=$221; //@line 534 "audioop.c"
        __label__ = 22; break; //@line 534 "audioop.c"
      case 22: // $bb17
        var $222=$5; //@line 494 "audioop.c"
        $retval=$222; //@line 494 "audioop.c"
        var $retval18=$retval; //@line 494 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 494 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_findfactor($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr_i1;
        var $b_addr_i2;
        var $len_addr_i3;
        var $retval_i4;
        var $0;
        var $i_i5;
        var $sum_i6;
        var $a_addr_i;
        var $b_addr_i;
        var $len_addr_i;
        var $retval_i;
        var $1;
        var $i_i;
        var $sum_i;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp1=__stackBase__;
        var $cp2=__stackBase__+4;
        var $len1=__stackBase__+8;
        var $len2=__stackBase__+12;
        var $sum_ri_2;
        var $sum_aij_ri;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        var $cp21=$cp2; //@line 548 "audioop.c"
        var $cp13=$cp1; //@line 548 "audioop.c"
        var $3=$args_addr; //@line 548 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str13, $cp13, $len1, $cp21, $len2); //@line 548 "audioop.c"
        var $5=($4)==0; //@line 548 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 548 "audioop.c"
      case 1: // $bb
        $2=0; //@line 550 "audioop.c"
        __label__ = 12; break; //@line 550 "audioop.c"
      case 2: // $bb5
        var $6=HEAP[$len1]; //@line 551 "audioop.c"
        var $7=($6) & 1; //@line 551 "audioop.c"
        var $8=((($7)) & 255); //@line 551 "audioop.c"
        var $toBool=($8)!=0; //@line 551 "audioop.c"
        if ($toBool) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 551 "audioop.c"
      case 3: // $bb6
        var $9=HEAP[$len2]; //@line 551 "audioop.c"
        var $10=($9) & 1; //@line 551 "audioop.c"
        var $11=((($10)) & 255); //@line 551 "audioop.c"
        var $toBool7=($11)!=0; //@line 551 "audioop.c"
        if ($toBool7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 551 "audioop.c"
      case 4: // $bb8
        var $12=HEAP[_AudioopError]; //@line 552 "audioop.c"
        _PyErr_SetString($12, __str10); //@line 552 "audioop.c"
        $2=0; //@line 553 "audioop.c"
        __label__ = 12; break; //@line 553 "audioop.c"
      case 5: // $bb9
        var $13=HEAP[$len1]; //@line 555 "audioop.c"
        var $14=HEAP[$len2]; //@line 555 "audioop.c"
        var $15=($13)!=($14); //@line 555 "audioop.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 555 "audioop.c"
      case 6: // $bb10
        var $16=HEAP[_AudioopError]; //@line 556 "audioop.c"
        _PyErr_SetString($16, __str14); //@line 556 "audioop.c"
        $2=0; //@line 557 "audioop.c"
        __label__ = 12; break; //@line 557 "audioop.c"
      case 7: // $bb11
        var $17=HEAP[$len2]; //@line 559 "audioop.c"
        var $18=($17) >> 1; //@line 559 "audioop.c"
        HEAP[$len2]=$18; //@line 559 "audioop.c"
        var $19=HEAP[$len2]; //@line 560 "audioop.c"
        var $20=HEAP[$cp2]; //@line 560 "audioop.c"
        var $21=HEAP[$cp2]; //@line 560 "audioop.c"
        $a_addr_i=$21;
        $b_addr_i=$20;
        $len_addr_i=$19;
        $sum_i=0; //@line 439 "audioop.c"
        $i_i=0; //@line 441 "audioop.c"
        var $22=$i_i; //@line 441 "audioop.c"
        var $23=$len_addr_i; //@line 441 "audioop.c"
        var $24=($22) < ($23); //@line 441 "audioop.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 441 "audioop.c"
      case 8: // $bb_i
        var $25=$a_addr_i; //@line 442 "audioop.c"
        var $26=$i_i; //@line 442 "audioop.c"
        var $27=$25+2*$26; //@line 442 "audioop.c"
        var $28=HEAP[$27]; //@line 442 "audioop.c"
        var $29=($28); //@line 442 "audioop.c"
        var $30=$b_addr_i; //@line 442 "audioop.c"
        var $31=$i_i; //@line 442 "audioop.c"
        var $32=$30+2*$31; //@line 442 "audioop.c"
        var $33=HEAP[$32]; //@line 442 "audioop.c"
        var $34=($33); //@line 442 "audioop.c"
        var $35=($29) * ($34); //@line 442 "audioop.c"
        var $36=$sum_i; //@line 442 "audioop.c"
        var $37=($35) + ($36); //@line 442 "audioop.c"
        $sum_i=$37; //@line 442 "audioop.c"
        var $38=$i_i; //@line 441 "audioop.c"
        var $39=($38) + 1; //@line 441 "audioop.c"
        $i_i=$39; //@line 441 "audioop.c"
        var $40=$i_i; //@line 441 "audioop.c"
        var $41=$len_addr_i; //@line 441 "audioop.c"
        var $42=($40) < ($41); //@line 441 "audioop.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 441 "audioop.c"
      case 9: // $_sum2_exit
        var $43=$sum_i; //@line 444 "audioop.c"
        $1=$43; //@line 444 "audioop.c"
        var $44=$1; //@line 444 "audioop.c"
        $retval_i=$44; //@line 444 "audioop.c"
        var $retval3_i=$retval_i; //@line 444 "audioop.c"
        $sum_ri_2=$retval3_i; //@line 560 "audioop.c"
        var $45=HEAP[$len2]; //@line 561 "audioop.c"
        var $46=HEAP[$cp2]; //@line 561 "audioop.c"
        var $47=HEAP[$cp1]; //@line 561 "audioop.c"
        $a_addr_i1=$47;
        $b_addr_i2=$46;
        $len_addr_i3=$45;
        $sum_i6=0; //@line 439 "audioop.c"
        $i_i5=0; //@line 441 "audioop.c"
        var $48=$i_i5; //@line 441 "audioop.c"
        var $49=$len_addr_i3; //@line 441 "audioop.c"
        var $50=($48) < ($49); //@line 441 "audioop.c"
        if ($50) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 441 "audioop.c"
      case 10: // $bb_i7
        var $51=$a_addr_i1; //@line 442 "audioop.c"
        var $52=$i_i5; //@line 442 "audioop.c"
        var $53=$51+2*$52; //@line 442 "audioop.c"
        var $54=HEAP[$53]; //@line 442 "audioop.c"
        var $55=($54); //@line 442 "audioop.c"
        var $56=$b_addr_i2; //@line 442 "audioop.c"
        var $57=$i_i5; //@line 442 "audioop.c"
        var $58=$56+2*$57; //@line 442 "audioop.c"
        var $59=HEAP[$58]; //@line 442 "audioop.c"
        var $60=($59); //@line 442 "audioop.c"
        var $61=($55) * ($60); //@line 442 "audioop.c"
        var $62=$sum_i6; //@line 442 "audioop.c"
        var $63=($61) + ($62); //@line 442 "audioop.c"
        $sum_i6=$63; //@line 442 "audioop.c"
        var $64=$i_i5; //@line 441 "audioop.c"
        var $65=($64) + 1; //@line 441 "audioop.c"
        $i_i5=$65; //@line 441 "audioop.c"
        var $66=$i_i5; //@line 441 "audioop.c"
        var $67=$len_addr_i3; //@line 441 "audioop.c"
        var $68=($66) < ($67); //@line 441 "audioop.c"
        if ($68) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 441 "audioop.c"
      case 11: // $_sum2_exit9
        var $69=$sum_i6; //@line 444 "audioop.c"
        $0=$69; //@line 444 "audioop.c"
        var $70=$0; //@line 444 "audioop.c"
        $retval_i4=$70; //@line 444 "audioop.c"
        var $retval3_i8=$retval_i4; //@line 444 "audioop.c"
        $sum_aij_ri=$retval3_i8; //@line 561 "audioop.c"
        var $71=$sum_aij_ri; //@line 563 "audioop.c"
        var $72=$sum_ri_2; //@line 563 "audioop.c"
        var $73=($71) / ($72); //@line 563 "audioop.c"
        $result=$73; //@line 563 "audioop.c"
        var $74=$result; //@line 565 "audioop.c"
        var $75=_PyFloat_FromDouble($74); //@line 565 "audioop.c"
        $2=$75; //@line 565 "audioop.c"
        __label__ = 12; break; //@line 565 "audioop.c"
      case 12: // $bb12
        var $76=$2; //@line 550 "audioop.c"
        $retval=$76; //@line 550 "audioop.c"
        var $retval13=$retval; //@line 550 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 550 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_findmax($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr_i;
        var $b_addr_i;
        var $len_addr_i;
        var $retval_i;
        var $0;
        var $i_i;
        var $sum_i;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $1;
        var $cp1=__stackBase__;
        var $len1=__stackBase__+4;
        var $len2=__stackBase__+8;
        var $j;
        var $best_j;
        var $aj_m1;
        var $aj_lm1;
        var $result;
        var $best_result;
        $self_addr=$self;
        $args_addr=$args;
        var $cp11=$cp1; //@line 581 "audioop.c"
        var $2=$args_addr; //@line 581 "audioop.c"
        var $3=_PyArg_ParseTuple($2, __str15, $cp11, $len1, $len2); //@line 581 "audioop.c"
        var $4=($3)==0; //@line 581 "audioop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 581 "audioop.c"
      case 1: // $bb
        $1=0; //@line 583 "audioop.c"
        __label__ = 14; break; //@line 583 "audioop.c"
      case 2: // $bb3
        var $5=HEAP[$len1]; //@line 584 "audioop.c"
        var $6=($5) & 1; //@line 584 "audioop.c"
        var $7=((($6)) & 255); //@line 584 "audioop.c"
        var $toBool=($7)!=0; //@line 584 "audioop.c"
        if ($toBool) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 584 "audioop.c"
      case 3: // $bb4
        var $8=HEAP[_AudioopError]; //@line 585 "audioop.c"
        _PyErr_SetString($8, __str10); //@line 585 "audioop.c"
        $1=0; //@line 586 "audioop.c"
        __label__ = 14; break; //@line 586 "audioop.c"
      case 4: // $bb5
        var $9=HEAP[$len1]; //@line 588 "audioop.c"
        var $10=($9) >> 1; //@line 588 "audioop.c"
        HEAP[$len1]=$10; //@line 588 "audioop.c"
        var $11=HEAP[$len2]; //@line 590 "audioop.c"
        var $12=($11) < 0; //@line 590 "audioop.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 590 "audioop.c"
      case 5: // $bb6
        var $13=HEAP[$len1]; //@line 590 "audioop.c"
        var $14=HEAP[$len2]; //@line 590 "audioop.c"
        var $15=($13) < ($14); //@line 590 "audioop.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 590 "audioop.c"
      case 6: // $bb7
        var $16=HEAP[_AudioopError]; //@line 591 "audioop.c"
        _PyErr_SetString($16, __str16); //@line 591 "audioop.c"
        $1=0; //@line 592 "audioop.c"
        __label__ = 14; break; //@line 592 "audioop.c"
      case 7: // $bb8
        var $17=HEAP[$len2]; //@line 595 "audioop.c"
        var $18=HEAP[$cp1]; //@line 595 "audioop.c"
        var $19=HEAP[$cp1]; //@line 595 "audioop.c"
        $a_addr_i=$19;
        $b_addr_i=$18;
        $len_addr_i=$17;
        $sum_i=0; //@line 439 "audioop.c"
        $i_i=0; //@line 441 "audioop.c"
        var $20=$i_i; //@line 441 "audioop.c"
        var $21=$len_addr_i; //@line 441 "audioop.c"
        var $22=($20) < ($21); //@line 441 "audioop.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 441 "audioop.c"
      case 8: // $bb_i
        var $23=$a_addr_i; //@line 442 "audioop.c"
        var $24=$i_i; //@line 442 "audioop.c"
        var $25=$23+2*$24; //@line 442 "audioop.c"
        var $26=HEAP[$25]; //@line 442 "audioop.c"
        var $27=($26); //@line 442 "audioop.c"
        var $28=$b_addr_i; //@line 442 "audioop.c"
        var $29=$i_i; //@line 442 "audioop.c"
        var $30=$28+2*$29; //@line 442 "audioop.c"
        var $31=HEAP[$30]; //@line 442 "audioop.c"
        var $32=($31); //@line 442 "audioop.c"
        var $33=($27) * ($32); //@line 442 "audioop.c"
        var $34=$sum_i; //@line 442 "audioop.c"
        var $35=($33) + ($34); //@line 442 "audioop.c"
        $sum_i=$35; //@line 442 "audioop.c"
        var $36=$i_i; //@line 441 "audioop.c"
        var $37=($36) + 1; //@line 441 "audioop.c"
        $i_i=$37; //@line 441 "audioop.c"
        var $38=$i_i; //@line 441 "audioop.c"
        var $39=$len_addr_i; //@line 441 "audioop.c"
        var $40=($38) < ($39); //@line 441 "audioop.c"
        if ($40) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 441 "audioop.c"
      case 9: // $_sum2_exit
        var $41=$sum_i; //@line 444 "audioop.c"
        $0=$41; //@line 444 "audioop.c"
        var $42=$0; //@line 444 "audioop.c"
        $retval_i=$42; //@line 444 "audioop.c"
        var $retval3_i=$retval_i; //@line 444 "audioop.c"
        $result=$retval3_i; //@line 595 "audioop.c"
        var $43=$result; //@line 597 "audioop.c"
        $best_result=$43; //@line 597 "audioop.c"
        $best_j=0; //@line 598 "audioop.c"
        $j=1; //@line 600 "audioop.c"
        var $44=HEAP[$len1]; //@line 600 "audioop.c"
        var $45=HEAP[$len2]; //@line 600 "audioop.c"
        var $46=($44) - ($45); //@line 600 "audioop.c"
        var $47=$j; //@line 600 "audioop.c"
        var $48=($46) >= ($47); //@line 600 "audioop.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 600 "audioop.c"
      case 10: // $bb9
        var $49=HEAP[$cp1]; //@line 601 "audioop.c"
        var $50=$j; //@line 601 "audioop.c"
        var $51=($50) - 1; //@line 601 "audioop.c"
        var $52=$49+2*$51; //@line 601 "audioop.c"
        var $53=HEAP[$52]; //@line 601 "audioop.c"
        var $54=($53); //@line 601 "audioop.c"
        $aj_m1=$54; //@line 601 "audioop.c"
        var $55=HEAP[$cp1]; //@line 602 "audioop.c"
        var $56=HEAP[$len2]; //@line 602 "audioop.c"
        var $57=$j; //@line 602 "audioop.c"
        var $58=($56) + -1; //@line 602 "audioop.c"
        var $59=($58) + ($57);
        var $60=$55+2*$59; //@line 602 "audioop.c"
        var $61=HEAP[$60]; //@line 602 "audioop.c"
        var $62=($61); //@line 602 "audioop.c"
        $aj_lm1=$62; //@line 602 "audioop.c"
        var $63=$aj_lm1; //@line 604 "audioop.c"
        var $64=$aj_lm1; //@line 604 "audioop.c"
        var $65=($63) * ($64); //@line 604 "audioop.c"
        var $66=$result; //@line 604 "audioop.c"
        var $67=($65) + ($66); //@line 604 "audioop.c"
        var $68=$aj_m1; //@line 604 "audioop.c"
        var $69=$aj_m1; //@line 604 "audioop.c"
        var $70=($68) * ($69); //@line 604 "audioop.c"
        var $71=($67) - ($70); //@line 604 "audioop.c"
        $result=$71; //@line 604 "audioop.c"
        var $72=$result; //@line 606 "audioop.c"
        var $73=$best_result; //@line 606 "audioop.c"
        var $74=($72) > ($73); //@line 606 "audioop.c"
        if ($74) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 606 "audioop.c"
      case 11: // $bb10
        var $75=$result; //@line 607 "audioop.c"
        $best_result=$75; //@line 607 "audioop.c"
        var $76=$j; //@line 608 "audioop.c"
        $best_j=$76; //@line 608 "audioop.c"
        __label__ = 12; break; //@line 608 "audioop.c"
      case 12: // $bb11
        var $77=$j; //@line 600 "audioop.c"
        var $78=($77) + 1; //@line 600 "audioop.c"
        $j=$78; //@line 600 "audioop.c"
        var $79=HEAP[$len1]; //@line 600 "audioop.c"
        var $80=HEAP[$len2]; //@line 600 "audioop.c"
        var $81=($79) - ($80); //@line 600 "audioop.c"
        var $82=$j; //@line 600 "audioop.c"
        var $83=($81) >= ($82); //@line 600 "audioop.c"
        if ($83) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 600 "audioop.c"
      case 13: // $bb13
        var $84=$best_j; //@line 613 "audioop.c"
        var $85=_PyInt_FromLong($84); //@line 613 "audioop.c"
        $1=$85; //@line 613 "audioop.c"
        __label__ = 14; break; //@line 613 "audioop.c"
      case 14: // $bb14
        var $86=$1; //@line 583 "audioop.c"
        $retval=$86; //@line 583 "audioop.c"
        var $retval15=$retval; //@line 583 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 583 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_avgpp($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $prevval;
        var $prevextremevalid;
        var $prevextreme;
        var $i;
        var $avg;
        var $diff;
        var $prevdiff;
        var $extremediff;
        var $nextreme;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 620 "audioop.c"
        $prevval=0; //@line 620 "audioop.c"
        $prevextremevalid=0; //@line 620 "audioop.c"
        $prevextreme=0; //@line 621 "audioop.c"
        $avg=0; //@line 623 "audioop.c"
        $nextreme=0; //@line 624 "audioop.c"
        var $3=$args_addr; //@line 626 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str17, $cp, $len, $size); //@line 626 "audioop.c"
        var $5=($4)==0; //@line 626 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 626 "audioop.c"
      case 1: // $bb
        $2=0; //@line 627 "audioop.c"
        __label__ = 41; break; //@line 627 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 628 "audioop.c"
        var $7=HEAP[$len]; //@line 628 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 629 "audioop.c"
        __label__ = 41; break; //@line 629 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$size]; //@line 633 "audioop.c"
        var $22=($21)==1; //@line 633 "audioop.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 633 "audioop.c"
      case 8: // $bb4
        var $23=HEAP[$cp]; //@line 633 "audioop.c"
        var $24=$23; //@line 633 "audioop.c"
        var $25=HEAP[$24]; //@line 633 "audioop.c"
        var $26=($25); //@line 633 "audioop.c"
        $prevval=$26; //@line 633 "audioop.c"
        __label__ = 13; break; //@line 633 "audioop.c"
      case 9: // $bb5
        var $27=HEAP[$size]; //@line 634 "audioop.c"
        var $28=($27)==2; //@line 634 "audioop.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 634 "audioop.c"
      case 10: // $bb6
        var $29=HEAP[$cp]; //@line 634 "audioop.c"
        var $30=$29; //@line 634 "audioop.c"
        var $31=$30; //@line 634 "audioop.c"
        var $32=HEAP[$31]; //@line 634 "audioop.c"
        var $33=($32); //@line 634 "audioop.c"
        $prevval=$33; //@line 634 "audioop.c"
        __label__ = 13; break; //@line 634 "audioop.c"
      case 11: // $bb7
        var $34=HEAP[$size]; //@line 635 "audioop.c"
        var $35=($34)==4; //@line 635 "audioop.c"
        if ($35) { __lastLabel__ = 11; __label__ = 12; break; } else { __lastLabel__ = 11; __label__ = 14; break; } //@line 635 "audioop.c"
      case 12: // $bb8
        var $36=HEAP[$cp]; //@line 635 "audioop.c"
        var $37=$36; //@line 635 "audioop.c"
        var $38=$37; //@line 635 "audioop.c"
        var $39=HEAP[$38]; //@line 635 "audioop.c"
        $prevval=$39; //@line 635 "audioop.c"
        __label__ = 13; break; //@line 635 "audioop.c"
      case 13: // $bb9thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 13; __label__ = 14; break;
      case 14: // $bb9
        var $40=__lastLabel__ == 13 ? $_pr : ($34);
        var $41=($40)==1; //@line 636 "audioop.c"
        if ($41) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 636 "audioop.c"
      case 15: // $bb10
        var $42=HEAP[$cp]; //@line 636 "audioop.c"
        var $43=HEAP[$size]; //@line 636 "audioop.c"
        var $44=$42+$43; //@line 636 "audioop.c"
        var $45=HEAP[$44]; //@line 636 "audioop.c"
        var $46=($45); //@line 636 "audioop.c"
        $val=$46; //@line 636 "audioop.c"
        __label__ = 20; break; //@line 636 "audioop.c"
      case 16: // $bb11
        var $47=HEAP[$size]; //@line 637 "audioop.c"
        var $48=($47)==2; //@line 637 "audioop.c"
        if ($48) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 637 "audioop.c"
      case 17: // $bb12
        var $49=HEAP[$cp]; //@line 637 "audioop.c"
        var $50=HEAP[$size]; //@line 637 "audioop.c"
        var $51=$49+$50; //@line 637 "audioop.c"
        var $52=$51; //@line 637 "audioop.c"
        var $53=HEAP[$52]; //@line 637 "audioop.c"
        var $54=($53); //@line 637 "audioop.c"
        $val=$54; //@line 637 "audioop.c"
        __label__ = 20; break; //@line 637 "audioop.c"
      case 18: // $bb13
        var $55=HEAP[$size]; //@line 638 "audioop.c"
        var $56=($55)==4; //@line 638 "audioop.c"
        if ($56) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 638 "audioop.c"
      case 19: // $bb14
        var $57=HEAP[$cp]; //@line 638 "audioop.c"
        var $58=HEAP[$size]; //@line 638 "audioop.c"
        var $59=$57+$58; //@line 638 "audioop.c"
        var $60=$59; //@line 638 "audioop.c"
        var $61=HEAP[$60]; //@line 638 "audioop.c"
        $val=$61; //@line 638 "audioop.c"
        __label__ = 20; break; //@line 638 "audioop.c"
      case 20: // $bb15
        var $62=$val; //@line 639 "audioop.c"
        var $63=$prevval; //@line 639 "audioop.c"
        var $64=($62) - ($63); //@line 639 "audioop.c"
        $prevdiff=$64; //@line 639 "audioop.c"
        var $65=HEAP[$size]; //@line 641 "audioop.c"
        $i=$65; //@line 641 "audioop.c"
        var $66=HEAP[$len]; //@line 641 "audioop.c"
        var $67=$i; //@line 641 "audioop.c"
        var $68=($67) < ($66); //@line 641 "audioop.c"
        if ($68) { __lastLabel__ = 20; __label__ = 22; break; } else { __lastLabel__ = 20; __label__ = 37; break; } //@line 641 "audioop.c"
      case 21: // $bb16thread_pre_split
        var $_pr7=HEAP[$size];
        __lastLabel__ = 21; __label__ = 22; break;
      case 22: // $bb16
        var $69=__lastLabel__ == 21 ? $_pr7 : ($65);
        var $70=($69)==1; //@line 642 "audioop.c"
        if ($70) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 642 "audioop.c"
      case 23: // $bb17
        var $71=HEAP[$cp]; //@line 642 "audioop.c"
        var $72=$i; //@line 642 "audioop.c"
        var $73=$71+$72; //@line 642 "audioop.c"
        var $74=HEAP[$73]; //@line 642 "audioop.c"
        var $75=($74); //@line 642 "audioop.c"
        $val=$75; //@line 642 "audioop.c"
        __label__ = 28; break; //@line 642 "audioop.c"
      case 24: // $bb18
        var $76=HEAP[$size]; //@line 643 "audioop.c"
        var $77=($76)==2; //@line 643 "audioop.c"
        if ($77) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 643 "audioop.c"
      case 25: // $bb19
        var $78=HEAP[$cp]; //@line 643 "audioop.c"
        var $79=$i; //@line 643 "audioop.c"
        var $80=$78+$79; //@line 643 "audioop.c"
        var $81=$80; //@line 643 "audioop.c"
        var $82=HEAP[$81]; //@line 643 "audioop.c"
        var $83=($82); //@line 643 "audioop.c"
        $val=$83; //@line 643 "audioop.c"
        __label__ = 28; break; //@line 643 "audioop.c"
      case 26: // $bb20
        var $84=HEAP[$size]; //@line 644 "audioop.c"
        var $85=($84)==4; //@line 644 "audioop.c"
        if ($85) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 644 "audioop.c"
      case 27: // $bb21
        var $86=HEAP[$cp]; //@line 644 "audioop.c"
        var $87=$i; //@line 644 "audioop.c"
        var $88=$86+$87; //@line 644 "audioop.c"
        var $89=$88; //@line 644 "audioop.c"
        var $90=HEAP[$89]; //@line 644 "audioop.c"
        $val=$90; //@line 644 "audioop.c"
        __label__ = 28; break; //@line 644 "audioop.c"
      case 28: // $bb22
        var $91=$val; //@line 645 "audioop.c"
        var $92=$prevval; //@line 645 "audioop.c"
        var $93=($91) - ($92); //@line 645 "audioop.c"
        $diff=$93; //@line 645 "audioop.c"
        var $94=$diff; //@line 646 "audioop.c"
        var $95=$prevdiff; //@line 646 "audioop.c"
        var $96=($95) * ($94); //@line 646 "audioop.c"
        var $97=($96) < 0; //@line 646 "audioop.c"
        if ($97) { __lastLabel__ = 28; __label__ = 29; break; } else { __lastLabel__ = 28; __label__ = 34; break; } //@line 646 "audioop.c"
      case 29: // $bb23
        var $98=$prevextremevalid; //@line 650 "audioop.c"
        var $99=($98)!=0; //@line 650 "audioop.c"
        if ($99) { __label__ = 30; break; } else { __label__ = 33; break; } //@line 650 "audioop.c"
      case 30: // $bb24
        var $100=$prevval; //@line 651 "audioop.c"
        var $101=$prevextreme; //@line 651 "audioop.c"
        var $102=($100) - ($101); //@line 651 "audioop.c"
        $extremediff=$102; //@line 651 "audioop.c"
        var $103=$extremediff; //@line 652 "audioop.c"
        var $104=($103) < 0; //@line 652 "audioop.c"
        if ($104) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 652 "audioop.c"
      case 31: // $bb25
        var $105=$extremediff; //@line 653 "audioop.c"
        var $106=0 - ($105); //@line 653 "audioop.c"
        $extremediff=$106; //@line 653 "audioop.c"
        __label__ = 32; break; //@line 653 "audioop.c"
      case 32: // $bb26
        var $107=$extremediff; //@line 654 "audioop.c"
        var $108=($107); //@line 654 "audioop.c"
        var $109=$avg; //@line 654 "audioop.c"
        var $110=($108) + ($109); //@line 654 "audioop.c"
        $avg=$110; //@line 654 "audioop.c"
        var $111=$nextreme; //@line 655 "audioop.c"
        var $112=($111) + 1; //@line 655 "audioop.c"
        $nextreme=$112; //@line 655 "audioop.c"
        __label__ = 33; break; //@line 655 "audioop.c"
      case 33: // $bb27
        $prevextremevalid=1; //@line 657 "audioop.c"
        var $113=$prevval; //@line 658 "audioop.c"
        $prevextreme=$113; //@line 658 "audioop.c"
        var $_pr6=$diff;
        __lastLabel__ = 33; __label__ = 34; break; //@line 658 "audioop.c"
      case 34: // $bb28
        var $114=__lastLabel__ == 33 ? $_pr6 : ($94);
        var $115=$val; //@line 660 "audioop.c"
        $prevval=$115; //@line 660 "audioop.c"
        var $116=($114)!=0; //@line 661 "audioop.c"
        if ($116) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 661 "audioop.c"
      case 35: // $bb29
        var $117=$diff; //@line 662 "audioop.c"
        $prevdiff=$117; //@line 662 "audioop.c"
        __label__ = 36; break; //@line 662 "audioop.c"
      case 36: // $bb30
        var $118=HEAP[$size]; //@line 641 "audioop.c"
        var $119=$i; //@line 641 "audioop.c"
        var $120=($119) + ($118); //@line 641 "audioop.c"
        $i=$120; //@line 641 "audioop.c"
        var $121=HEAP[$len]; //@line 641 "audioop.c"
        var $122=$i; //@line 641 "audioop.c"
        var $123=($122) < ($121); //@line 641 "audioop.c"
        if ($123) { __label__ = 21; break; } else { __label__ = 37; break; } //@line 641 "audioop.c"
      case 37: // $bb32
        var $124=$nextreme; //@line 664 "audioop.c"
        var $125=($124)==0; //@line 664 "audioop.c"
        if ($125) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 664 "audioop.c"
      case 38: // $bb33
        $val=0; //@line 665 "audioop.c"
        __label__ = 40; break; //@line 665 "audioop.c"
      case 39: // $bb34
        var $126=$nextreme; //@line 667 "audioop.c"
        var $127=($126); //@line 667 "audioop.c"
        var $128=$avg; //@line 667 "audioop.c"
        var $129=($128) / ($127); //@line 667 "audioop.c"
        var $130=((($129))|0); //@line 667 "audioop.c"
        $val=$130; //@line 667 "audioop.c"
        __label__ = 40; break; //@line 667 "audioop.c"
      case 40: // $bb35
        var $131=$val; //@line 668 "audioop.c"
        var $132=_PyInt_FromLong($131); //@line 668 "audioop.c"
        $2=$132; //@line 668 "audioop.c"
        __label__ = 41; break; //@line 668 "audioop.c"
      case 41: // $bb36
        var $133=$2; //@line 627 "audioop.c"
        $retval=$133; //@line 627 "audioop.c"
        var $retval37=$retval; //@line 627 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval37; //@line 627 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_maxpp($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $prevval;
        var $prevextremevalid;
        var $prevextreme;
        var $i;
        var $max;
        var $diff;
        var $prevdiff;
        var $extremediff;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 675 "audioop.c"
        $prevval=0; //@line 675 "audioop.c"
        $prevextremevalid=0; //@line 675 "audioop.c"
        $prevextreme=0; //@line 676 "audioop.c"
        $max=0; //@line 678 "audioop.c"
        var $3=$args_addr; //@line 681 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str18, $cp, $len, $size); //@line 681 "audioop.c"
        var $5=($4)==0; //@line 681 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 681 "audioop.c"
      case 1: // $bb
        $2=0; //@line 682 "audioop.c"
        __label__ = 39; break; //@line 682 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 683 "audioop.c"
        var $7=HEAP[$len]; //@line 683 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 684 "audioop.c"
        __label__ = 39; break; //@line 684 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$size]; //@line 688 "audioop.c"
        var $22=($21)==1; //@line 688 "audioop.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 688 "audioop.c"
      case 8: // $bb4
        var $23=HEAP[$cp]; //@line 688 "audioop.c"
        var $24=$23; //@line 688 "audioop.c"
        var $25=HEAP[$24]; //@line 688 "audioop.c"
        var $26=($25); //@line 688 "audioop.c"
        $prevval=$26; //@line 688 "audioop.c"
        __label__ = 13; break; //@line 688 "audioop.c"
      case 9: // $bb5
        var $27=HEAP[$size]; //@line 689 "audioop.c"
        var $28=($27)==2; //@line 689 "audioop.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 689 "audioop.c"
      case 10: // $bb6
        var $29=HEAP[$cp]; //@line 689 "audioop.c"
        var $30=$29; //@line 689 "audioop.c"
        var $31=$30; //@line 689 "audioop.c"
        var $32=HEAP[$31]; //@line 689 "audioop.c"
        var $33=($32); //@line 689 "audioop.c"
        $prevval=$33; //@line 689 "audioop.c"
        __label__ = 13; break; //@line 689 "audioop.c"
      case 11: // $bb7
        var $34=HEAP[$size]; //@line 690 "audioop.c"
        var $35=($34)==4; //@line 690 "audioop.c"
        if ($35) { __lastLabel__ = 11; __label__ = 12; break; } else { __lastLabel__ = 11; __label__ = 14; break; } //@line 690 "audioop.c"
      case 12: // $bb8
        var $36=HEAP[$cp]; //@line 690 "audioop.c"
        var $37=$36; //@line 690 "audioop.c"
        var $38=$37; //@line 690 "audioop.c"
        var $39=HEAP[$38]; //@line 690 "audioop.c"
        $prevval=$39; //@line 690 "audioop.c"
        __label__ = 13; break; //@line 690 "audioop.c"
      case 13: // $bb9thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 13; __label__ = 14; break;
      case 14: // $bb9
        var $40=__lastLabel__ == 13 ? $_pr : ($34);
        var $41=($40)==1; //@line 691 "audioop.c"
        if ($41) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 691 "audioop.c"
      case 15: // $bb10
        var $42=HEAP[$cp]; //@line 691 "audioop.c"
        var $43=HEAP[$size]; //@line 691 "audioop.c"
        var $44=$42+$43; //@line 691 "audioop.c"
        var $45=HEAP[$44]; //@line 691 "audioop.c"
        var $46=($45); //@line 691 "audioop.c"
        $val=$46; //@line 691 "audioop.c"
        __label__ = 20; break; //@line 691 "audioop.c"
      case 16: // $bb11
        var $47=HEAP[$size]; //@line 692 "audioop.c"
        var $48=($47)==2; //@line 692 "audioop.c"
        if ($48) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 692 "audioop.c"
      case 17: // $bb12
        var $49=HEAP[$cp]; //@line 692 "audioop.c"
        var $50=HEAP[$size]; //@line 692 "audioop.c"
        var $51=$49+$50; //@line 692 "audioop.c"
        var $52=$51; //@line 692 "audioop.c"
        var $53=HEAP[$52]; //@line 692 "audioop.c"
        var $54=($53); //@line 692 "audioop.c"
        $val=$54; //@line 692 "audioop.c"
        __label__ = 20; break; //@line 692 "audioop.c"
      case 18: // $bb13
        var $55=HEAP[$size]; //@line 693 "audioop.c"
        var $56=($55)==4; //@line 693 "audioop.c"
        if ($56) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 693 "audioop.c"
      case 19: // $bb14
        var $57=HEAP[$cp]; //@line 693 "audioop.c"
        var $58=HEAP[$size]; //@line 693 "audioop.c"
        var $59=$57+$58; //@line 693 "audioop.c"
        var $60=$59; //@line 693 "audioop.c"
        var $61=HEAP[$60]; //@line 693 "audioop.c"
        $val=$61; //@line 693 "audioop.c"
        __label__ = 20; break; //@line 693 "audioop.c"
      case 20: // $bb15
        var $62=$val; //@line 694 "audioop.c"
        var $63=$prevval; //@line 694 "audioop.c"
        var $64=($62) - ($63); //@line 694 "audioop.c"
        $prevdiff=$64; //@line 694 "audioop.c"
        var $65=HEAP[$size]; //@line 696 "audioop.c"
        $i=$65; //@line 696 "audioop.c"
        var $66=HEAP[$len]; //@line 696 "audioop.c"
        var $67=$i; //@line 696 "audioop.c"
        var $68=($67) < ($66); //@line 696 "audioop.c"
        if ($68) { __lastLabel__ = 20; __label__ = 22; break; } else { __lastLabel__ = 20; __label__ = 38; break; } //@line 696 "audioop.c"
      case 21: // $bb16thread_pre_split
        var $_pr7=HEAP[$size];
        __lastLabel__ = 21; __label__ = 22; break;
      case 22: // $bb16
        var $69=__lastLabel__ == 21 ? $_pr7 : ($65);
        var $70=($69)==1; //@line 697 "audioop.c"
        if ($70) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 697 "audioop.c"
      case 23: // $bb17
        var $71=HEAP[$cp]; //@line 697 "audioop.c"
        var $72=$i; //@line 697 "audioop.c"
        var $73=$71+$72; //@line 697 "audioop.c"
        var $74=HEAP[$73]; //@line 697 "audioop.c"
        var $75=($74); //@line 697 "audioop.c"
        $val=$75; //@line 697 "audioop.c"
        __label__ = 28; break; //@line 697 "audioop.c"
      case 24: // $bb18
        var $76=HEAP[$size]; //@line 698 "audioop.c"
        var $77=($76)==2; //@line 698 "audioop.c"
        if ($77) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 698 "audioop.c"
      case 25: // $bb19
        var $78=HEAP[$cp]; //@line 698 "audioop.c"
        var $79=$i; //@line 698 "audioop.c"
        var $80=$78+$79; //@line 698 "audioop.c"
        var $81=$80; //@line 698 "audioop.c"
        var $82=HEAP[$81]; //@line 698 "audioop.c"
        var $83=($82); //@line 698 "audioop.c"
        $val=$83; //@line 698 "audioop.c"
        __label__ = 28; break; //@line 698 "audioop.c"
      case 26: // $bb20
        var $84=HEAP[$size]; //@line 699 "audioop.c"
        var $85=($84)==4; //@line 699 "audioop.c"
        if ($85) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 699 "audioop.c"
      case 27: // $bb21
        var $86=HEAP[$cp]; //@line 699 "audioop.c"
        var $87=$i; //@line 699 "audioop.c"
        var $88=$86+$87; //@line 699 "audioop.c"
        var $89=$88; //@line 699 "audioop.c"
        var $90=HEAP[$89]; //@line 699 "audioop.c"
        $val=$90; //@line 699 "audioop.c"
        __label__ = 28; break; //@line 699 "audioop.c"
      case 28: // $bb22
        var $91=$val; //@line 700 "audioop.c"
        var $92=$prevval; //@line 700 "audioop.c"
        var $93=($91) - ($92); //@line 700 "audioop.c"
        $diff=$93; //@line 700 "audioop.c"
        var $94=$diff; //@line 701 "audioop.c"
        var $95=$prevdiff; //@line 701 "audioop.c"
        var $96=($95) * ($94); //@line 701 "audioop.c"
        var $97=($96) < 0; //@line 701 "audioop.c"
        if ($97) { __lastLabel__ = 28; __label__ = 29; break; } else { __lastLabel__ = 28; __label__ = 35; break; } //@line 701 "audioop.c"
      case 29: // $bb23
        var $98=$prevextremevalid; //@line 705 "audioop.c"
        var $99=($98)!=0; //@line 705 "audioop.c"
        if ($99) { __label__ = 30; break; } else { __label__ = 34; break; } //@line 705 "audioop.c"
      case 30: // $bb24
        var $100=$prevval; //@line 706 "audioop.c"
        var $101=$prevextreme; //@line 706 "audioop.c"
        var $102=($100) - ($101); //@line 706 "audioop.c"
        $extremediff=$102; //@line 706 "audioop.c"
        var $103=$extremediff; //@line 707 "audioop.c"
        var $104=($103) < 0; //@line 707 "audioop.c"
        if ($104) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 707 "audioop.c"
      case 31: // $bb25
        var $105=$extremediff; //@line 708 "audioop.c"
        var $106=0 - ($105); //@line 708 "audioop.c"
        $extremediff=$106; //@line 708 "audioop.c"
        __label__ = 32; break; //@line 708 "audioop.c"
      case 32: // $bb26
        var $107=$extremediff; //@line 709 "audioop.c"
        var $108=$max; //@line 709 "audioop.c"
        var $109=($107) > ($108); //@line 709 "audioop.c"
        if ($109) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 709 "audioop.c"
      case 33: // $bb27
        var $110=$extremediff; //@line 710 "audioop.c"
        $max=$110; //@line 710 "audioop.c"
        __label__ = 34; break; //@line 710 "audioop.c"
      case 34: // $bb28
        $prevextremevalid=1; //@line 712 "audioop.c"
        var $111=$prevval; //@line 713 "audioop.c"
        $prevextreme=$111; //@line 713 "audioop.c"
        var $_pr6=$diff;
        __lastLabel__ = 34; __label__ = 35; break; //@line 713 "audioop.c"
      case 35: // $bb29
        var $112=__lastLabel__ == 34 ? $_pr6 : ($94);
        var $113=$val; //@line 715 "audioop.c"
        $prevval=$113; //@line 715 "audioop.c"
        var $114=($112)!=0; //@line 716 "audioop.c"
        if ($114) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 716 "audioop.c"
      case 36: // $bb30
        var $115=$diff; //@line 717 "audioop.c"
        $prevdiff=$115; //@line 717 "audioop.c"
        __label__ = 37; break; //@line 717 "audioop.c"
      case 37: // $bb31
        var $116=HEAP[$size]; //@line 696 "audioop.c"
        var $117=$i; //@line 696 "audioop.c"
        var $118=($117) + ($116); //@line 696 "audioop.c"
        $i=$118; //@line 696 "audioop.c"
        var $119=HEAP[$len]; //@line 696 "audioop.c"
        var $120=$i; //@line 696 "audioop.c"
        var $121=($120) < ($119); //@line 696 "audioop.c"
        if ($121) { __label__ = 21; break; } else { __label__ = 38; break; } //@line 696 "audioop.c"
      case 38: // $bb33
        var $122=$max; //@line 719 "audioop.c"
        var $123=_PyInt_FromLong($122); //@line 719 "audioop.c"
        $2=$123; //@line 719 "audioop.c"
        __label__ = 39; break; //@line 719 "audioop.c"
      case 39: // $bb34
        var $124=$2; //@line 682 "audioop.c"
        $retval=$124; //@line 682 "audioop.c"
        var $retval35=$retval; //@line 682 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval35; //@line 682 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_cross($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $i;
        var $prevval;
        var $ncross;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 726 "audioop.c"
        var $3=$args_addr; //@line 730 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str19, $cp, $len, $size); //@line 730 "audioop.c"
        var $5=($4)==0; //@line 730 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 730 "audioop.c"
      case 1: // $bb
        $2=0; //@line 731 "audioop.c"
        __label__ = 18; break; //@line 731 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 732 "audioop.c"
        var $7=HEAP[$len]; //@line 732 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 733 "audioop.c"
        __label__ = 18; break; //@line 733 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        $ncross=-1; //@line 734 "audioop.c"
        $prevval=17; //@line 735 "audioop.c"
        $i=0; //@line 736 "audioop.c"
        var $21=HEAP[$len]; //@line 736 "audioop.c"
        var $22=$i; //@line 736 "audioop.c"
        var $23=($22) < ($21); //@line 736 "audioop.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 17; break; } //@line 736 "audioop.c"
      case 8: // $bb4
        var $24=HEAP[$size]; //@line 737 "audioop.c"
        var $25=($24)==1; //@line 737 "audioop.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 737 "audioop.c"
      case 9: // $bb5
        var $26=HEAP[$cp]; //@line 737 "audioop.c"
        var $27=$i; //@line 737 "audioop.c"
        var $28=$26+$27; //@line 737 "audioop.c"
        var $29=HEAP[$28]; //@line 737 "audioop.c"
        var $30=($29) >> 7; //@line 737 "audioop.c"
        var $31=($30); //@line 737 "audioop.c"
        $val=$31; //@line 737 "audioop.c"
        __label__ = 14; break; //@line 737 "audioop.c"
      case 10: // $bb6
        var $32=HEAP[$size]; //@line 738 "audioop.c"
        var $33=($32)==2; //@line 738 "audioop.c"
        if ($33) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 738 "audioop.c"
      case 11: // $bb7
        var $34=HEAP[$cp]; //@line 738 "audioop.c"
        var $35=$i; //@line 738 "audioop.c"
        var $36=$34+$35; //@line 738 "audioop.c"
        var $37=$36; //@line 738 "audioop.c"
        var $38=HEAP[$37]; //@line 738 "audioop.c"
        var $39=($38) >> 15; //@line 738 "audioop.c"
        var $40=($39); //@line 738 "audioop.c"
        $val=$40; //@line 738 "audioop.c"
        __label__ = 14; break; //@line 738 "audioop.c"
      case 12: // $bb8
        var $41=HEAP[$size]; //@line 739 "audioop.c"
        var $42=($41)==4; //@line 739 "audioop.c"
        if ($42) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 739 "audioop.c"
      case 13: // $bb9
        var $43=HEAP[$cp]; //@line 739 "audioop.c"
        var $44=$i; //@line 739 "audioop.c"
        var $45=$43+$44; //@line 739 "audioop.c"
        var $46=$45; //@line 739 "audioop.c"
        var $47=HEAP[$46]; //@line 739 "audioop.c"
        var $48=($47) >> 31; //@line 739 "audioop.c"
        $val=$48; //@line 739 "audioop.c"
        __label__ = 14; break; //@line 739 "audioop.c"
      case 14: // $bb10
        var $49=$val; //@line 740 "audioop.c"
        var $50=($49) & 1; //@line 740 "audioop.c"
        $val=$50; //@line 740 "audioop.c"
        var $51=$val; //@line 741 "audioop.c"
        var $52=$prevval; //@line 741 "audioop.c"
        var $53=($51)!=($52); //@line 741 "audioop.c"
        if ($53) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 741 "audioop.c"
      case 15: // $bb11
        var $54=$ncross; //@line 741 "audioop.c"
        var $55=($54) + 1; //@line 741 "audioop.c"
        $ncross=$55; //@line 741 "audioop.c"
        __label__ = 16; break; //@line 741 "audioop.c"
      case 16: // $bb12
        var $56=$val; //@line 742 "audioop.c"
        $prevval=$56; //@line 742 "audioop.c"
        var $57=HEAP[$size]; //@line 736 "audioop.c"
        var $58=$i; //@line 736 "audioop.c"
        var $59=($58) + ($57); //@line 736 "audioop.c"
        $i=$59; //@line 736 "audioop.c"
        var $60=HEAP[$len]; //@line 736 "audioop.c"
        var $61=$i; //@line 736 "audioop.c"
        var $62=($61) < ($60); //@line 736 "audioop.c"
        if ($62) { __label__ = 8; break; } else { __label__ = 17; break; } //@line 736 "audioop.c"
      case 17: // $bb14
        var $63=$ncross; //@line 744 "audioop.c"
        var $64=_PyInt_FromLong($63); //@line 744 "audioop.c"
        $2=$64; //@line 744 "audioop.c"
        __label__ = 18; break; //@line 744 "audioop.c"
      case 18: // $bb15
        var $65=$2; //@line 731 "audioop.c"
        $retval=$65; //@line 731 "audioop.c"
        var $retval16=$retval; //@line 731 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 731 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_mul($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $factor=__stackBase__+12;
        var $fval;
        var $maxval;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 751 "audioop.c"
        var $3=$args_addr; //@line 756 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str20, $cp, $len, $size, $factor); //@line 756 "audioop.c"
        var $5=($4)==0; //@line 756 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 756 "audioop.c"
      case 1: // $bb
        $2=0; //@line 757 "audioop.c"
        __label__ = 35; break; //@line 757 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 758 "audioop.c"
        var $7=HEAP[$len]; //@line 758 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 759 "audioop.c"
        __label__ = 35; break; //@line 759 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$size]; //@line 761 "audioop.c"
        var $22=($21)==1; //@line 761 "audioop.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 761 "audioop.c"
      case 8: // $bb4
        $maxval=127; //@line 761 "audioop.c"
        __label__ = 14; break; //@line 761 "audioop.c"
      case 9: // $bb5
        var $23=HEAP[$size]; //@line 762 "audioop.c"
        var $24=($23)==2; //@line 762 "audioop.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 762 "audioop.c"
      case 10: // $bb6
        $maxval=32767; //@line 762 "audioop.c"
        __label__ = 14; break; //@line 762 "audioop.c"
      case 11: // $bb7
        var $25=HEAP[$size]; //@line 763 "audioop.c"
        var $26=($25)==4; //@line 763 "audioop.c"
        if ($26) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 763 "audioop.c"
      case 12: // $bb8
        $maxval=2147483647; //@line 763 "audioop.c"
        __label__ = 14; break; //@line 763 "audioop.c"
      case 13: // $bb9
        var $27=HEAP[_AudioopError]; //@line 765 "audioop.c"
        _PyErr_SetString($27, __str); //@line 765 "audioop.c"
        $2=0; //@line 766 "audioop.c"
        __label__ = 35; break; //@line 766 "audioop.c"
      case 14: // $bb10
        var $28=HEAP[$len]; //@line 769 "audioop.c"
        var $29=_PyString_FromStringAndSize(0, $28); //@line 769 "audioop.c"
        $rv=$29; //@line 769 "audioop.c"
        var $30=($29)==0; //@line 770 "audioop.c"
        if ($30) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 770 "audioop.c"
      case 15: // $bb11
        $2=0; //@line 771 "audioop.c"
        __label__ = 35; break; //@line 771 "audioop.c"
      case 16: // $bb12
        var $31=$rv; //@line 772 "audioop.c"
        var $32=_PyString_AsString($31); //@line 772 "audioop.c"
        $ncp=$32; //@line 772 "audioop.c"
        $i=0; //@line 775 "audioop.c"
        var $33=HEAP[$len]; //@line 775 "audioop.c"
        var $34=$i; //@line 775 "audioop.c"
        var $35=($34) < ($33); //@line 775 "audioop.c"
        if ($35) { __label__ = 17; break; } else { __label__ = 34; break; } //@line 775 "audioop.c"
      case 17: // $bb13
        var $36=HEAP[$size]; //@line 776 "audioop.c"
        var $37=($36)==1; //@line 776 "audioop.c"
        if ($37) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 776 "audioop.c"
      case 18: // $bb14
        var $38=HEAP[$cp]; //@line 776 "audioop.c"
        var $39=$i; //@line 776 "audioop.c"
        var $40=$38+$39; //@line 776 "audioop.c"
        var $41=HEAP[$40]; //@line 776 "audioop.c"
        var $42=($41); //@line 776 "audioop.c"
        $val=$42; //@line 776 "audioop.c"
        __label__ = 23; break; //@line 776 "audioop.c"
      case 19: // $bb15
        var $43=HEAP[$size]; //@line 777 "audioop.c"
        var $44=($43)==2; //@line 777 "audioop.c"
        if ($44) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 777 "audioop.c"
      case 20: // $bb16
        var $45=HEAP[$cp]; //@line 777 "audioop.c"
        var $46=$i; //@line 777 "audioop.c"
        var $47=$45+$46; //@line 777 "audioop.c"
        var $48=$47; //@line 777 "audioop.c"
        var $49=HEAP[$48]; //@line 777 "audioop.c"
        var $50=($49); //@line 777 "audioop.c"
        $val=$50; //@line 777 "audioop.c"
        __label__ = 23; break; //@line 777 "audioop.c"
      case 21: // $bb17
        var $51=HEAP[$size]; //@line 778 "audioop.c"
        var $52=($51)==4; //@line 778 "audioop.c"
        if ($52) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 778 "audioop.c"
      case 22: // $bb18
        var $53=HEAP[$cp]; //@line 778 "audioop.c"
        var $54=$i; //@line 778 "audioop.c"
        var $55=$53+$54; //@line 778 "audioop.c"
        var $56=$55; //@line 778 "audioop.c"
        var $57=HEAP[$56]; //@line 778 "audioop.c"
        $val=$57; //@line 778 "audioop.c"
        __label__ = 23; break; //@line 778 "audioop.c"
      case 23: // $bb19
        var $58=$val; //@line 779 "audioop.c"
        var $59=($58); //@line 779 "audioop.c"
        var $60=HEAP[$factor]; //@line 779 "audioop.c"
        var $61=($59) * ($60); //@line 779 "audioop.c"
        $fval=$61; //@line 779 "audioop.c"
        var $62=$fval; //@line 780 "audioop.c"
        var $63=$maxval; //@line 780 "audioop.c"
        var $64=($62) > ($63); //@line 780 "audioop.c"
        var $65=$maxval; //@line 780 "audioop.c"
        if ($64) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 780 "audioop.c"
      case 24: // $bb20
        $fval=$65; //@line 780 "audioop.c"
        __label__ = 27; break; //@line 780 "audioop.c"
      case 25: // $bb21
        var $66=0 - ($65); //@line 781 "audioop.c"
        var $67=$fval; //@line 781 "audioop.c"
        var $68=($66) > ($67); //@line 781 "audioop.c"
        if ($68) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 781 "audioop.c"
      case 26: // $bb22
        var $69=$maxval; //@line 781 "audioop.c"
        var $70=0 - ($69); //@line 781 "audioop.c"
        $fval=$70; //@line 781 "audioop.c"
        __label__ = 27; break; //@line 781 "audioop.c"
      case 27: // $bb23
        var $71=$fval; //@line 782 "audioop.c"
        var $72=((($71))|0); //@line 782 "audioop.c"
        $val=$72; //@line 782 "audioop.c"
        var $73=HEAP[$size]; //@line 783 "audioop.c"
        var $74=($73)==1; //@line 783 "audioop.c"
        if ($74) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 783 "audioop.c"
      case 28: // $bb24
        var $75=$val; //@line 783 "audioop.c"
        var $76=((($75)) & 255); //@line 783 "audioop.c"
        var $77=$ncp; //@line 783 "audioop.c"
        var $78=$i; //@line 783 "audioop.c"
        var $79=$77+$78; //@line 783 "audioop.c"
        HEAP[$79]=$76; //@line 783 "audioop.c"
        __label__ = 33; break; //@line 783 "audioop.c"
      case 29: // $bb25
        var $80=HEAP[$size]; //@line 784 "audioop.c"
        var $81=($80)==2; //@line 784 "audioop.c"
        if ($81) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 784 "audioop.c"
      case 30: // $bb26
        var $82=$ncp; //@line 784 "audioop.c"
        var $83=$i; //@line 784 "audioop.c"
        var $84=$82+$83; //@line 784 "audioop.c"
        var $85=$84; //@line 784 "audioop.c"
        var $86=$val; //@line 784 "audioop.c"
        var $87=((($86)) & 65535); //@line 784 "audioop.c"
        HEAP[$85]=$87; //@line 784 "audioop.c"
        __label__ = 33; break; //@line 784 "audioop.c"
      case 31: // $bb27
        var $88=HEAP[$size]; //@line 785 "audioop.c"
        var $89=($88)==4; //@line 785 "audioop.c"
        if ($89) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 785 "audioop.c"
      case 32: // $bb28
        var $90=$ncp; //@line 785 "audioop.c"
        var $91=$i; //@line 785 "audioop.c"
        var $92=$90+$91; //@line 785 "audioop.c"
        var $93=$92; //@line 785 "audioop.c"
        var $94=$val; //@line 785 "audioop.c"
        HEAP[$93]=$94; //@line 785 "audioop.c"
        __label__ = 33; break; //@line 785 "audioop.c"
      case 33: // $bb29
        var $95=HEAP[$size]; //@line 775 "audioop.c"
        var $96=$i; //@line 775 "audioop.c"
        var $97=($96) + ($95); //@line 775 "audioop.c"
        $i=$97; //@line 775 "audioop.c"
        var $98=HEAP[$len]; //@line 775 "audioop.c"
        var $99=$i; //@line 775 "audioop.c"
        var $100=($99) < ($98); //@line 775 "audioop.c"
        if ($100) { __label__ = 17; break; } else { __label__ = 34; break; } //@line 775 "audioop.c"
      case 34: // $bb31
        var $101=$rv; //@line 787 "audioop.c"
        $2=$101; //@line 787 "audioop.c"
        __label__ = 35; break; //@line 787 "audioop.c"
      case 35: // $bb32
        var $102=$2; //@line 757 "audioop.c"
        $retval=$102; //@line 757 "audioop.c"
        var $retval33=$retval; //@line 757 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval33; //@line 757 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_tomono($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; _memset(__stackBase__, 0, 28);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val1;
        var $val2;
        var $fac1=__stackBase__+12;
        var $fac2=__stackBase__+20;
        var $fval;
        var $maxval;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $val1=0; //@line 794 "audioop.c"
        $val2=0; //@line 794 "audioop.c"
        var $3=$args_addr; //@line 799 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str21, $cp, $len, $size, $fac1, $fac2); //@line 799 "audioop.c"
        var $5=($4)==0; //@line 799 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 799 "audioop.c"
      case 1: // $bb
        $2=0; //@line 801 "audioop.c"
        __label__ = 44; break; //@line 801 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 802 "audioop.c"
        var $7=HEAP[$len]; //@line 802 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 803 "audioop.c"
        __label__ = 44; break; //@line 803 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$len]; //@line 804 "audioop.c"
        var $22=HEAP[$size]; //@line 804 "audioop.c"
        var $23=((($21)/($22))|0); //@line 804 "audioop.c"
        var $24=($23) & 1; //@line 804 "audioop.c"
        var $25=((($24)) & 255); //@line 804 "audioop.c"
        var $toBool=($25)!=0; //@line 804 "audioop.c"
        if ($toBool) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 804 "audioop.c"
      case 8: // $bb4
        var $26=HEAP[_AudioopError]; //@line 805 "audioop.c"
        _PyErr_SetString($26, __str1); //@line 805 "audioop.c"
        $2=0; //@line 806 "audioop.c"
        __label__ = 44; break; //@line 806 "audioop.c"
      case 9: // $bb5
        var $27=HEAP[$size]; //@line 809 "audioop.c"
        var $28=($27)==1; //@line 809 "audioop.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 809 "audioop.c"
      case 10: // $bb6
        $maxval=127; //@line 809 "audioop.c"
        __label__ = 16; break; //@line 809 "audioop.c"
      case 11: // $bb7
        var $29=HEAP[$size]; //@line 810 "audioop.c"
        var $30=($29)==2; //@line 810 "audioop.c"
        if ($30) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 810 "audioop.c"
      case 12: // $bb8
        $maxval=32767; //@line 810 "audioop.c"
        __label__ = 16; break; //@line 810 "audioop.c"
      case 13: // $bb9
        var $31=HEAP[$size]; //@line 811 "audioop.c"
        var $32=($31)==4; //@line 811 "audioop.c"
        if ($32) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 811 "audioop.c"
      case 14: // $bb10
        $maxval=2147483647; //@line 811 "audioop.c"
        __label__ = 16; break; //@line 811 "audioop.c"
      case 15: // $bb11
        var $33=HEAP[_AudioopError]; //@line 813 "audioop.c"
        _PyErr_SetString($33, __str); //@line 813 "audioop.c"
        $2=0; //@line 814 "audioop.c"
        __label__ = 44; break; //@line 814 "audioop.c"
      case 16: // $bb12
        var $34=HEAP[$len]; //@line 817 "audioop.c"
        var $35=((($34)/2)|0); //@line 817 "audioop.c"
        var $36=_PyString_FromStringAndSize(0, $35); //@line 817 "audioop.c"
        $rv=$36; //@line 817 "audioop.c"
        var $37=($36)==0; //@line 818 "audioop.c"
        if ($37) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 818 "audioop.c"
      case 17: // $bb13
        $2=0; //@line 819 "audioop.c"
        __label__ = 44; break; //@line 819 "audioop.c"
      case 18: // $bb14
        var $38=$rv; //@line 820 "audioop.c"
        var $39=_PyString_AsString($38); //@line 820 "audioop.c"
        $ncp=$39; //@line 820 "audioop.c"
        $i=0; //@line 823 "audioop.c"
        var $40=HEAP[$len]; //@line 823 "audioop.c"
        var $41=$i; //@line 823 "audioop.c"
        var $42=($41) < ($40); //@line 823 "audioop.c"
        if ($42) { __label__ = 19; break; } else { __label__ = 43; break; } //@line 823 "audioop.c"
      case 19: // $bb15
        var $43=HEAP[$size]; //@line 824 "audioop.c"
        var $44=($43)==1; //@line 824 "audioop.c"
        if ($44) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 824 "audioop.c"
      case 20: // $bb16
        var $45=HEAP[$cp]; //@line 824 "audioop.c"
        var $46=$i; //@line 824 "audioop.c"
        var $47=$45+$46; //@line 824 "audioop.c"
        var $48=HEAP[$47]; //@line 824 "audioop.c"
        var $49=($48); //@line 824 "audioop.c"
        $val1=$49; //@line 824 "audioop.c"
        __label__ = 25; break; //@line 824 "audioop.c"
      case 21: // $bb17
        var $50=HEAP[$size]; //@line 825 "audioop.c"
        var $51=($50)==2; //@line 825 "audioop.c"
        if ($51) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 825 "audioop.c"
      case 22: // $bb18
        var $52=HEAP[$cp]; //@line 825 "audioop.c"
        var $53=$i; //@line 825 "audioop.c"
        var $54=$52+$53; //@line 825 "audioop.c"
        var $55=$54; //@line 825 "audioop.c"
        var $56=HEAP[$55]; //@line 825 "audioop.c"
        var $57=($56); //@line 825 "audioop.c"
        $val1=$57; //@line 825 "audioop.c"
        __label__ = 25; break; //@line 825 "audioop.c"
      case 23: // $bb19
        var $58=HEAP[$size]; //@line 826 "audioop.c"
        var $59=($58)==4; //@line 826 "audioop.c"
        if ($59) { __lastLabel__ = 23; __label__ = 24; break; } else { __lastLabel__ = 23; __label__ = 26; break; } //@line 826 "audioop.c"
      case 24: // $bb20
        var $60=HEAP[$cp]; //@line 826 "audioop.c"
        var $61=$i; //@line 826 "audioop.c"
        var $62=$60+$61; //@line 826 "audioop.c"
        var $63=$62; //@line 826 "audioop.c"
        var $64=HEAP[$63]; //@line 826 "audioop.c"
        $val1=$64; //@line 826 "audioop.c"
        __label__ = 25; break; //@line 826 "audioop.c"
      case 25: // $bb21thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 25; __label__ = 26; break;
      case 26: // $bb21
        var $65=__lastLabel__ == 25 ? $_pr : ($58);
        var $66=($65)==1; //@line 827 "audioop.c"
        if ($66) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 827 "audioop.c"
      case 27: // $bb22
        var $67=HEAP[$cp]; //@line 827 "audioop.c"
        var $68=$i; //@line 827 "audioop.c"
        var $69=$67+$68; //@line 827 "audioop.c"
        var $70=$69+1; //@line 827 "audioop.c"
        var $71=HEAP[$70]; //@line 827 "audioop.c"
        var $72=($71); //@line 827 "audioop.c"
        $val2=$72; //@line 827 "audioop.c"
        __label__ = 32; break; //@line 827 "audioop.c"
      case 28: // $bb23
        var $73=HEAP[$size]; //@line 828 "audioop.c"
        var $74=($73)==2; //@line 828 "audioop.c"
        if ($74) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 828 "audioop.c"
      case 29: // $bb24
        var $75=HEAP[$cp]; //@line 828 "audioop.c"
        var $76=$i; //@line 828 "audioop.c"
        var $77=$75+$76; //@line 828 "audioop.c"
        var $78=$77+2; //@line 828 "audioop.c"
        var $79=$78; //@line 828 "audioop.c"
        var $80=HEAP[$79]; //@line 828 "audioop.c"
        var $81=($80); //@line 828 "audioop.c"
        $val2=$81; //@line 828 "audioop.c"
        __label__ = 32; break; //@line 828 "audioop.c"
      case 30: // $bb25
        var $82=HEAP[$size]; //@line 829 "audioop.c"
        var $83=($82)==4; //@line 829 "audioop.c"
        if ($83) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 829 "audioop.c"
      case 31: // $bb26
        var $84=HEAP[$cp]; //@line 829 "audioop.c"
        var $85=$i; //@line 829 "audioop.c"
        var $86=$84+$85; //@line 829 "audioop.c"
        var $87=$86+4; //@line 829 "audioop.c"
        var $88=$87; //@line 829 "audioop.c"
        var $89=HEAP[$88]; //@line 829 "audioop.c"
        $val2=$89; //@line 829 "audioop.c"
        __label__ = 32; break; //@line 829 "audioop.c"
      case 32: // $bb27
        var $90=$val1; //@line 830 "audioop.c"
        var $91=($90); //@line 830 "audioop.c"
        var $92=HEAP[$fac1]; //@line 830 "audioop.c"
        var $93=($91) * ($92); //@line 830 "audioop.c"
        var $94=$val2; //@line 830 "audioop.c"
        var $95=($94); //@line 830 "audioop.c"
        var $96=HEAP[$fac2]; //@line 830 "audioop.c"
        var $97=($95) * ($96); //@line 830 "audioop.c"
        var $98=($93) + ($97); //@line 830 "audioop.c"
        $fval=$98; //@line 830 "audioop.c"
        var $99=$fval; //@line 831 "audioop.c"
        var $100=$maxval; //@line 831 "audioop.c"
        var $101=($99) > ($100); //@line 831 "audioop.c"
        var $102=$maxval; //@line 831 "audioop.c"
        if ($101) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 831 "audioop.c"
      case 33: // $bb28
        $fval=$102; //@line 831 "audioop.c"
        __label__ = 36; break; //@line 831 "audioop.c"
      case 34: // $bb29
        var $103=0 - ($102); //@line 832 "audioop.c"
        var $104=$fval; //@line 832 "audioop.c"
        var $105=($103) > ($104); //@line 832 "audioop.c"
        if ($105) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 832 "audioop.c"
      case 35: // $bb30
        var $106=$maxval; //@line 832 "audioop.c"
        var $107=0 - ($106); //@line 832 "audioop.c"
        $fval=$107; //@line 832 "audioop.c"
        __label__ = 36; break; //@line 832 "audioop.c"
      case 36: // $bb31
        var $108=$fval; //@line 833 "audioop.c"
        var $109=((($108))|0); //@line 833 "audioop.c"
        $val1=$109; //@line 833 "audioop.c"
        var $110=HEAP[$size]; //@line 834 "audioop.c"
        var $111=($110)==1; //@line 834 "audioop.c"
        if ($111) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 834 "audioop.c"
      case 37: // $bb32
        var $112=$i; //@line 834 "audioop.c"
        var $113=((($112)/2)|0); //@line 834 "audioop.c"
        var $114=$val1; //@line 834 "audioop.c"
        var $115=((($114)) & 255); //@line 834 "audioop.c"
        var $116=$ncp; //@line 834 "audioop.c"
        var $117=$116+$113; //@line 834 "audioop.c"
        HEAP[$117]=$115; //@line 834 "audioop.c"
        __label__ = 42; break; //@line 834 "audioop.c"
      case 38: // $bb33
        var $118=HEAP[$size]; //@line 835 "audioop.c"
        var $119=($118)==2; //@line 835 "audioop.c"
        if ($119) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 835 "audioop.c"
      case 39: // $bb34
        var $120=$i; //@line 835 "audioop.c"
        var $121=((($120)/2)|0); //@line 835 "audioop.c"
        var $122=$ncp; //@line 835 "audioop.c"
        var $123=$122+$121; //@line 835 "audioop.c"
        var $124=$123; //@line 835 "audioop.c"
        var $125=$val1; //@line 835 "audioop.c"
        var $126=((($125)) & 65535); //@line 835 "audioop.c"
        HEAP[$124]=$126; //@line 835 "audioop.c"
        __label__ = 42; break; //@line 835 "audioop.c"
      case 40: // $bb35
        var $127=HEAP[$size]; //@line 836 "audioop.c"
        var $128=($127)==4; //@line 836 "audioop.c"
        if ($128) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 836 "audioop.c"
      case 41: // $bb36
        var $129=$i; //@line 836 "audioop.c"
        var $130=((($129)/2)|0); //@line 836 "audioop.c"
        var $131=$ncp; //@line 836 "audioop.c"
        var $132=$131+$130; //@line 836 "audioop.c"
        var $133=$132; //@line 836 "audioop.c"
        var $134=$val1; //@line 836 "audioop.c"
        HEAP[$133]=$134; //@line 836 "audioop.c"
        __label__ = 42; break; //@line 836 "audioop.c"
      case 42: // $bb37
        var $135=HEAP[$size]; //@line 823 "audioop.c"
        var $136=($135) * 2; //@line 823 "audioop.c"
        var $137=$i; //@line 823 "audioop.c"
        var $138=($136) + ($137); //@line 823 "audioop.c"
        $i=$138; //@line 823 "audioop.c"
        var $139=HEAP[$len]; //@line 823 "audioop.c"
        var $140=$i; //@line 823 "audioop.c"
        var $141=($140) < ($139); //@line 823 "audioop.c"
        if ($141) { __label__ = 19; break; } else { __label__ = 43; break; } //@line 823 "audioop.c"
      case 43: // $bb39
        var $142=$rv; //@line 838 "audioop.c"
        $2=$142; //@line 838 "audioop.c"
        __label__ = 44; break; //@line 838 "audioop.c"
      case 44: // $bb40
        var $143=$2; //@line 801 "audioop.c"
        $retval=$143; //@line 801 "audioop.c"
        var $retval41=$retval; //@line 801 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval41; //@line 801 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_tostereo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; _memset(__stackBase__, 0, 28);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val1;
        var $val2;
        var $val;
        var $fac1=__stackBase__+12;
        var $fac2=__stackBase__+20;
        var $fval;
        var $maxval;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 845 "audioop.c"
        var $3=$args_addr; //@line 850 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str22, $cp, $len, $size, $fac1, $fac2); //@line 850 "audioop.c"
        var $5=($4)==0; //@line 850 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 850 "audioop.c"
      case 1: // $bb
        $2=0; //@line 852 "audioop.c"
        __label__ = 48; break; //@line 852 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 853 "audioop.c"
        var $7=HEAP[$len]; //@line 853 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 854 "audioop.c"
        __label__ = 48; break; //@line 854 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$size]; //@line 856 "audioop.c"
        var $22=($21)==1; //@line 856 "audioop.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 856 "audioop.c"
      case 8: // $bb4
        $maxval=127; //@line 856 "audioop.c"
        __label__ = 14; break; //@line 856 "audioop.c"
      case 9: // $bb5
        var $23=HEAP[$size]; //@line 857 "audioop.c"
        var $24=($23)==2; //@line 857 "audioop.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 857 "audioop.c"
      case 10: // $bb6
        $maxval=32767; //@line 857 "audioop.c"
        __label__ = 14; break; //@line 857 "audioop.c"
      case 11: // $bb7
        var $25=HEAP[$size]; //@line 858 "audioop.c"
        var $26=($25)==4; //@line 858 "audioop.c"
        if ($26) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 858 "audioop.c"
      case 12: // $bb8
        $maxval=2147483647; //@line 858 "audioop.c"
        __label__ = 14; break; //@line 858 "audioop.c"
      case 13: // $bb9
        var $27=HEAP[_AudioopError]; //@line 860 "audioop.c"
        _PyErr_SetString($27, __str); //@line 860 "audioop.c"
        $2=0; //@line 861 "audioop.c"
        __label__ = 48; break; //@line 861 "audioop.c"
      case 14: // $bb10
        var $28=HEAP[$len]; //@line 864 "audioop.c"
        var $29=($28) > 1073741823; //@line 864 "audioop.c"
        if ($29) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 864 "audioop.c"
      case 15: // $bb11
        var $30=HEAP[_PyExc_MemoryError]; //@line 865 "audioop.c"
        _PyErr_SetString($30, __str23); //@line 865 "audioop.c"
        $2=0; //@line 867 "audioop.c"
        __label__ = 48; break; //@line 867 "audioop.c"
      case 16: // $bb12
        var $31=HEAP[$len]; //@line 870 "audioop.c"
        var $32=($31) * 2; //@line 870 "audioop.c"
        var $33=_PyString_FromStringAndSize(0, $32); //@line 870 "audioop.c"
        $rv=$33; //@line 870 "audioop.c"
        var $34=$rv; //@line 871 "audioop.c"
        var $35=($34)==0; //@line 871 "audioop.c"
        if ($35) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 871 "audioop.c"
      case 17: // $bb13
        $2=0; //@line 872 "audioop.c"
        __label__ = 48; break; //@line 872 "audioop.c"
      case 18: // $bb14
        var $36=$rv; //@line 873 "audioop.c"
        var $37=_PyString_AsString($36); //@line 873 "audioop.c"
        $ncp=$37; //@line 873 "audioop.c"
        $i=0; //@line 876 "audioop.c"
        var $38=HEAP[$len]; //@line 876 "audioop.c"
        var $39=$i; //@line 876 "audioop.c"
        var $40=($39) < ($38); //@line 876 "audioop.c"
        if ($40) { __label__ = 19; break; } else { __label__ = 47; break; } //@line 876 "audioop.c"
      case 19: // $bb15
        var $41=HEAP[$size]; //@line 877 "audioop.c"
        var $42=($41)==1; //@line 877 "audioop.c"
        if ($42) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 877 "audioop.c"
      case 20: // $bb16
        var $43=HEAP[$cp]; //@line 877 "audioop.c"
        var $44=$i; //@line 877 "audioop.c"
        var $45=$43+$44; //@line 877 "audioop.c"
        var $46=HEAP[$45]; //@line 877 "audioop.c"
        var $47=($46); //@line 877 "audioop.c"
        $val=$47; //@line 877 "audioop.c"
        __label__ = 25; break; //@line 877 "audioop.c"
      case 21: // $bb17
        var $48=HEAP[$size]; //@line 878 "audioop.c"
        var $49=($48)==2; //@line 878 "audioop.c"
        if ($49) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 878 "audioop.c"
      case 22: // $bb18
        var $50=HEAP[$cp]; //@line 878 "audioop.c"
        var $51=$i; //@line 878 "audioop.c"
        var $52=$50+$51; //@line 878 "audioop.c"
        var $53=$52; //@line 878 "audioop.c"
        var $54=HEAP[$53]; //@line 878 "audioop.c"
        var $55=($54); //@line 878 "audioop.c"
        $val=$55; //@line 878 "audioop.c"
        __label__ = 25; break; //@line 878 "audioop.c"
      case 23: // $bb19
        var $56=HEAP[$size]; //@line 879 "audioop.c"
        var $57=($56)==4; //@line 879 "audioop.c"
        if ($57) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 879 "audioop.c"
      case 24: // $bb20
        var $58=HEAP[$cp]; //@line 879 "audioop.c"
        var $59=$i; //@line 879 "audioop.c"
        var $60=$58+$59; //@line 879 "audioop.c"
        var $61=$60; //@line 879 "audioop.c"
        var $62=HEAP[$61]; //@line 879 "audioop.c"
        $val=$62; //@line 879 "audioop.c"
        __label__ = 25; break; //@line 879 "audioop.c"
      case 25: // $bb21
        var $63=$val; //@line 881 "audioop.c"
        var $64=($63); //@line 881 "audioop.c"
        var $65=HEAP[$fac1]; //@line 881 "audioop.c"
        var $66=($64) * ($65); //@line 881 "audioop.c"
        $fval=$66; //@line 881 "audioop.c"
        var $67=$fval; //@line 882 "audioop.c"
        var $68=$maxval; //@line 882 "audioop.c"
        var $69=($67) > ($68); //@line 882 "audioop.c"
        var $70=$maxval; //@line 882 "audioop.c"
        if ($69) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 882 "audioop.c"
      case 26: // $bb22
        $fval=$70; //@line 882 "audioop.c"
        __label__ = 29; break; //@line 882 "audioop.c"
      case 27: // $bb23
        var $71=0 - ($70); //@line 883 "audioop.c"
        var $72=$fval; //@line 883 "audioop.c"
        var $73=($71) > ($72); //@line 883 "audioop.c"
        if ($73) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 883 "audioop.c"
      case 28: // $bb24
        var $74=$maxval; //@line 883 "audioop.c"
        var $75=0 - ($74); //@line 883 "audioop.c"
        $fval=$75; //@line 883 "audioop.c"
        __label__ = 29; break; //@line 883 "audioop.c"
      case 29: // $bb25
        var $76=$fval; //@line 884 "audioop.c"
        var $77=((($76))|0); //@line 884 "audioop.c"
        $val1=$77; //@line 884 "audioop.c"
        var $78=$val; //@line 886 "audioop.c"
        var $79=($78); //@line 886 "audioop.c"
        var $80=HEAP[$fac2]; //@line 886 "audioop.c"
        var $81=($79) * ($80); //@line 886 "audioop.c"
        $fval=$81; //@line 886 "audioop.c"
        var $82=$fval; //@line 887 "audioop.c"
        var $83=$maxval; //@line 887 "audioop.c"
        var $84=($82) > ($83); //@line 887 "audioop.c"
        var $85=$maxval; //@line 887 "audioop.c"
        if ($84) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 887 "audioop.c"
      case 30: // $bb26
        $fval=$85; //@line 887 "audioop.c"
        __label__ = 33; break; //@line 887 "audioop.c"
      case 31: // $bb27
        var $86=0 - ($85); //@line 888 "audioop.c"
        var $87=$fval; //@line 888 "audioop.c"
        var $88=($86) > ($87); //@line 888 "audioop.c"
        if ($88) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 888 "audioop.c"
      case 32: // $bb28
        var $89=$maxval; //@line 888 "audioop.c"
        var $90=0 - ($89); //@line 888 "audioop.c"
        $fval=$90; //@line 888 "audioop.c"
        __label__ = 33; break; //@line 888 "audioop.c"
      case 33: // $bb29
        var $91=$fval; //@line 889 "audioop.c"
        var $92=((($91))|0); //@line 889 "audioop.c"
        $val2=$92; //@line 889 "audioop.c"
        var $93=HEAP[$size]; //@line 891 "audioop.c"
        var $94=($93)==1; //@line 891 "audioop.c"
        if ($94) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 891 "audioop.c"
      case 34: // $bb30
        var $95=$i; //@line 891 "audioop.c"
        var $96=($95) * 2; //@line 891 "audioop.c"
        var $97=$val1; //@line 891 "audioop.c"
        var $98=((($97)) & 255); //@line 891 "audioop.c"
        var $99=$ncp; //@line 891 "audioop.c"
        var $100=$99+$96; //@line 891 "audioop.c"
        HEAP[$100]=$98; //@line 891 "audioop.c"
        __label__ = 39; break; //@line 891 "audioop.c"
      case 35: // $bb31
        var $101=HEAP[$size]; //@line 892 "audioop.c"
        var $102=($101)==2; //@line 892 "audioop.c"
        if ($102) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 892 "audioop.c"
      case 36: // $bb32
        var $103=$i; //@line 892 "audioop.c"
        var $104=($103) * 2; //@line 892 "audioop.c"
        var $105=$ncp; //@line 892 "audioop.c"
        var $106=$105+$104; //@line 892 "audioop.c"
        var $107=$106; //@line 892 "audioop.c"
        var $108=$val1; //@line 892 "audioop.c"
        var $109=((($108)) & 65535); //@line 892 "audioop.c"
        HEAP[$107]=$109; //@line 892 "audioop.c"
        __label__ = 39; break; //@line 892 "audioop.c"
      case 37: // $bb33
        var $110=HEAP[$size]; //@line 893 "audioop.c"
        var $111=($110)==4; //@line 893 "audioop.c"
        if ($111) { __lastLabel__ = 37; __label__ = 38; break; } else { __lastLabel__ = 37; __label__ = 40; break; } //@line 893 "audioop.c"
      case 38: // $bb34
        var $112=$i; //@line 893 "audioop.c"
        var $113=($112) * 2; //@line 893 "audioop.c"
        var $114=$ncp; //@line 893 "audioop.c"
        var $115=$114+$113; //@line 893 "audioop.c"
        var $116=$115; //@line 893 "audioop.c"
        var $117=$val1; //@line 893 "audioop.c"
        HEAP[$116]=$117; //@line 893 "audioop.c"
        __label__ = 39; break; //@line 893 "audioop.c"
      case 39: // $bb35thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 39; __label__ = 40; break;
      case 40: // $bb35
        var $118=__lastLabel__ == 39 ? $_pr : ($110);
        var $119=($118)==1; //@line 895 "audioop.c"
        if ($119) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 895 "audioop.c"
      case 41: // $bb36
        var $120=$i; //@line 895 "audioop.c"
        var $121=($120) * 2; //@line 895 "audioop.c"
        var $122=$ncp; //@line 895 "audioop.c"
        var $123=$122+$121; //@line 895 "audioop.c"
        var $124=$val2; //@line 895 "audioop.c"
        var $125=((($124)) & 255); //@line 895 "audioop.c"
        var $126=$123+1; //@line 895 "audioop.c"
        HEAP[$126]=$125; //@line 895 "audioop.c"
        __label__ = 46; break; //@line 895 "audioop.c"
      case 42: // $bb37
        var $127=HEAP[$size]; //@line 896 "audioop.c"
        var $128=($127)==2; //@line 896 "audioop.c"
        if ($128) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 896 "audioop.c"
      case 43: // $bb38
        var $129=$i; //@line 896 "audioop.c"
        var $130=($129) * 2; //@line 896 "audioop.c"
        var $131=$ncp; //@line 896 "audioop.c"
        var $132=$131+$130; //@line 896 "audioop.c"
        var $133=$132+2; //@line 896 "audioop.c"
        var $134=$133; //@line 896 "audioop.c"
        var $135=$val2; //@line 896 "audioop.c"
        var $136=((($135)) & 65535); //@line 896 "audioop.c"
        HEAP[$134]=$136; //@line 896 "audioop.c"
        __label__ = 46; break; //@line 896 "audioop.c"
      case 44: // $bb39
        var $137=HEAP[$size]; //@line 897 "audioop.c"
        var $138=($137)==4; //@line 897 "audioop.c"
        if ($138) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 897 "audioop.c"
      case 45: // $bb40
        var $139=$i; //@line 897 "audioop.c"
        var $140=($139) * 2; //@line 897 "audioop.c"
        var $141=$ncp; //@line 897 "audioop.c"
        var $142=$141+$140; //@line 897 "audioop.c"
        var $143=$142+4; //@line 897 "audioop.c"
        var $144=$143; //@line 897 "audioop.c"
        var $145=$val2; //@line 897 "audioop.c"
        HEAP[$144]=$145; //@line 897 "audioop.c"
        __label__ = 46; break; //@line 897 "audioop.c"
      case 46: // $bb41
        var $146=HEAP[$size]; //@line 876 "audioop.c"
        var $147=$i; //@line 876 "audioop.c"
        var $148=($147) + ($146); //@line 876 "audioop.c"
        $i=$148; //@line 876 "audioop.c"
        var $149=HEAP[$len]; //@line 876 "audioop.c"
        var $150=$i; //@line 876 "audioop.c"
        var $151=($150) < ($149); //@line 876 "audioop.c"
        if ($151) { __label__ = 19; break; } else { __label__ = 47; break; } //@line 876 "audioop.c"
      case 47: // $bb43
        var $152=$rv; //@line 899 "audioop.c"
        $2=$152; //@line 899 "audioop.c"
        __label__ = 48; break; //@line 899 "audioop.c"
      case 48: // $bb44
        var $153=$2; //@line 852 "audioop.c"
        $retval=$153; //@line 852 "audioop.c"
        var $retval45=$retval; //@line 852 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 852 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_add($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_286;
        var $2;
        var $cp1=__stackBase__;
        var $cp2=__stackBase__+4;
        var $ncp;
        var $len1=__stackBase__+8;
        var $len2=__stackBase__+12;
        var $size=__stackBase__+16;
        var $val1;
        var $val2;
        var $maxval;
        var $newval;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $val1=0; //@line 906 "audioop.c"
        $val2=0; //@line 906 "audioop.c"
        var $3=$args_addr; //@line 910 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str24, $cp1, $len1, $cp2, $len2, $size); //@line 910 "audioop.c"
        var $5=($4)==0; //@line 910 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 910 "audioop.c"
      case 1: // $bb
        $2=0; //@line 912 "audioop.c"
        __label__ = 52; break; //@line 912 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 913 "audioop.c"
        var $7=HEAP[$len1]; //@line 913 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 914 "audioop.c"
        __label__ = 52; break; //@line 914 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$len1]; //@line 915 "audioop.c"
        var $22=HEAP[$len2]; //@line 915 "audioop.c"
        var $23=($21)!=($22); //@line 915 "audioop.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 915 "audioop.c"
      case 8: // $bb4
        var $24=HEAP[_AudioopError]; //@line 916 "audioop.c"
        _PyErr_SetString($24, __str25); //@line 916 "audioop.c"
        $2=0; //@line 917 "audioop.c"
        __label__ = 52; break; //@line 917 "audioop.c"
      case 9: // $bb5
        var $25=HEAP[$size]; //@line 920 "audioop.c"
        var $26=($25)==1; //@line 920 "audioop.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 920 "audioop.c"
      case 10: // $bb6
        $maxval=127; //@line 920 "audioop.c"
        __label__ = 16; break; //@line 920 "audioop.c"
      case 11: // $bb7
        var $27=HEAP[$size]; //@line 921 "audioop.c"
        var $28=($27)==2; //@line 921 "audioop.c"
        if ($28) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 921 "audioop.c"
      case 12: // $bb8
        $maxval=32767; //@line 921 "audioop.c"
        __label__ = 16; break; //@line 921 "audioop.c"
      case 13: // $bb9
        var $29=HEAP[$size]; //@line 922 "audioop.c"
        var $30=($29)==4; //@line 922 "audioop.c"
        if ($30) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 922 "audioop.c"
      case 14: // $bb10
        $maxval=2147483647; //@line 922 "audioop.c"
        __label__ = 16; break; //@line 922 "audioop.c"
      case 15: // $bb11
        var $31=HEAP[_AudioopError]; //@line 924 "audioop.c"
        _PyErr_SetString($31, __str); //@line 924 "audioop.c"
        $2=0; //@line 925 "audioop.c"
        __label__ = 52; break; //@line 925 "audioop.c"
      case 16: // $bb12
        var $32=HEAP[$len1]; //@line 928 "audioop.c"
        var $33=_PyString_FromStringAndSize(0, $32); //@line 928 "audioop.c"
        $rv=$33; //@line 928 "audioop.c"
        var $34=($33)==0; //@line 929 "audioop.c"
        if ($34) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 929 "audioop.c"
      case 17: // $bb13
        $2=0; //@line 930 "audioop.c"
        __label__ = 52; break; //@line 930 "audioop.c"
      case 18: // $bb14
        var $35=$rv; //@line 931 "audioop.c"
        var $36=_PyString_AsString($35); //@line 931 "audioop.c"
        $ncp=$36; //@line 931 "audioop.c"
        $i=0; //@line 933 "audioop.c"
        var $37=HEAP[$len1]; //@line 933 "audioop.c"
        var $38=$i; //@line 933 "audioop.c"
        var $39=($38) < ($37); //@line 933 "audioop.c"
        if ($39) { __label__ = 19; break; } else { __label__ = 51; break; } //@line 933 "audioop.c"
      case 19: // $bb15
        var $40=HEAP[$size]; //@line 934 "audioop.c"
        var $41=($40)==1; //@line 934 "audioop.c"
        if ($41) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 934 "audioop.c"
      case 20: // $bb16
        var $42=HEAP[$cp1]; //@line 934 "audioop.c"
        var $43=$i; //@line 934 "audioop.c"
        var $44=$42+$43; //@line 934 "audioop.c"
        var $45=HEAP[$44]; //@line 934 "audioop.c"
        var $46=($45); //@line 934 "audioop.c"
        $val1=$46; //@line 934 "audioop.c"
        __label__ = 25; break; //@line 934 "audioop.c"
      case 21: // $bb17
        var $47=HEAP[$size]; //@line 935 "audioop.c"
        var $48=($47)==2; //@line 935 "audioop.c"
        if ($48) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 935 "audioop.c"
      case 22: // $bb18
        var $49=HEAP[$cp1]; //@line 935 "audioop.c"
        var $50=$i; //@line 935 "audioop.c"
        var $51=$49+$50; //@line 935 "audioop.c"
        var $52=$51; //@line 935 "audioop.c"
        var $53=HEAP[$52]; //@line 935 "audioop.c"
        var $54=($53); //@line 935 "audioop.c"
        $val1=$54; //@line 935 "audioop.c"
        __label__ = 25; break; //@line 935 "audioop.c"
      case 23: // $bb19
        var $55=HEAP[$size]; //@line 936 "audioop.c"
        var $56=($55)==4; //@line 936 "audioop.c"
        if ($56) { __lastLabel__ = 23; __label__ = 24; break; } else { __lastLabel__ = 23; __label__ = 26; break; } //@line 936 "audioop.c"
      case 24: // $bb20
        var $57=HEAP[$cp1]; //@line 936 "audioop.c"
        var $58=$i; //@line 936 "audioop.c"
        var $59=$57+$58; //@line 936 "audioop.c"
        var $60=$59; //@line 936 "audioop.c"
        var $61=HEAP[$60]; //@line 936 "audioop.c"
        $val1=$61; //@line 936 "audioop.c"
        __label__ = 25; break; //@line 936 "audioop.c"
      case 25: // $bb21thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 25; __label__ = 26; break;
      case 26: // $bb21
        var $62=__lastLabel__ == 25 ? $_pr : ($55);
        var $63=($62)==1; //@line 938 "audioop.c"
        if ($63) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 938 "audioop.c"
      case 27: // $bb22
        var $64=HEAP[$cp2]; //@line 938 "audioop.c"
        var $65=$i; //@line 938 "audioop.c"
        var $66=$64+$65; //@line 938 "audioop.c"
        var $67=HEAP[$66]; //@line 938 "audioop.c"
        var $68=($67); //@line 938 "audioop.c"
        $val2=$68; //@line 938 "audioop.c"
        __label__ = 32; break; //@line 938 "audioop.c"
      case 28: // $bb23
        var $69=HEAP[$size]; //@line 939 "audioop.c"
        var $70=($69)==2; //@line 939 "audioop.c"
        if ($70) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 939 "audioop.c"
      case 29: // $bb24
        var $71=HEAP[$cp2]; //@line 939 "audioop.c"
        var $72=$i; //@line 939 "audioop.c"
        var $73=$71+$72; //@line 939 "audioop.c"
        var $74=$73; //@line 939 "audioop.c"
        var $75=HEAP[$74]; //@line 939 "audioop.c"
        var $76=($75); //@line 939 "audioop.c"
        $val2=$76; //@line 939 "audioop.c"
        __label__ = 32; break; //@line 939 "audioop.c"
      case 30: // $bb25
        var $77=HEAP[$size]; //@line 940 "audioop.c"
        var $78=($77)==4; //@line 940 "audioop.c"
        if ($78) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 940 "audioop.c"
      case 31: // $bb26
        var $79=HEAP[$cp2]; //@line 940 "audioop.c"
        var $80=$i; //@line 940 "audioop.c"
        var $81=$79+$80; //@line 940 "audioop.c"
        var $82=$81; //@line 940 "audioop.c"
        var $83=HEAP[$82]; //@line 940 "audioop.c"
        $val2=$83; //@line 940 "audioop.c"
        __label__ = 32; break; //@line 940 "audioop.c"
      case 32: // $bb27
        var $84=$val1; //@line 942 "audioop.c"
        var $85=$val2; //@line 942 "audioop.c"
        var $86=($85) + ($84); //@line 942 "audioop.c"
        $newval=$86; //@line 942 "audioop.c"
        var $87=$newval; //@line 944 "audioop.c"
        var $88=$maxval; //@line 944 "audioop.c"
        var $89=($87) > ($88); //@line 944 "audioop.c"
        var $90=$maxval; //@line 944 "audioop.c"
        if ($89) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 944 "audioop.c"
      case 33: // $bb28
        $newval=$90; //@line 944 "audioop.c"
        __label__ = 43; break; //@line 944 "audioop.c"
      case 34: // $bb29
        var $91=0 - ($90); //@line 945 "audioop.c"
        var $92=$newval; //@line 945 "audioop.c"
        var $93=($91) > ($92); //@line 945 "audioop.c"
        if ($93) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 945 "audioop.c"
      case 35: // $bb30
        var $94=$maxval; //@line 945 "audioop.c"
        var $95=0 - ($94); //@line 945 "audioop.c"
        $newval=$95; //@line 945 "audioop.c"
        __label__ = 43; break; //@line 945 "audioop.c"
      case 36: // $bb31
        var $96=HEAP[$size]; //@line 946 "audioop.c"
        var $97=($96)==4; //@line 946 "audioop.c"
        if ($97) { __lastLabel__ = 36; __label__ = 37; break; } else { __lastLabel__ = 36; __label__ = 44; break; } //@line 946 "audioop.c"
      case 37: // $bb32
        var $98=$newval; //@line 946 "audioop.c"
        var $99=$val1; //@line 946 "audioop.c"
        var $100=($99) ^ ($98); //@line 946 "audioop.c"
        var $101=($100) < 0; //@line 946 "audioop.c"
        if ($101) { __label__ = 38; break; } else { __label__ = 43; break; } //@line 946 "audioop.c"
      case 38: // $bb33
        var $102=$newval; //@line 946 "audioop.c"
        var $103=$val2; //@line 946 "audioop.c"
        var $104=($103) ^ ($102); //@line 946 "audioop.c"
        var $105=($104) < 0; //@line 946 "audioop.c"
        if ($105) { __label__ = 39; break; } else { __label__ = 43; break; } //@line 946 "audioop.c"
      case 39: // $bb34
        var $106=$val1; //@line 947 "audioop.c"
        var $107=($106) <= 0; //@line 947 "audioop.c"
        var $108=$maxval; //@line 947 "audioop.c"
        if ($107) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 947 "audioop.c"
      case 40: // $bb35
        var $109=0 - ($108); //@line 947 "audioop.c"
        $iftmp_286=$109; //@line 947 "audioop.c"
        __label__ = 42; break; //@line 947 "audioop.c"
      case 41: // $bb36
        $iftmp_286=$108; //@line 947 "audioop.c"
        __label__ = 42; break; //@line 947 "audioop.c"
      case 42: // $bb37
        var $110=$iftmp_286; //@line 947 "audioop.c"
        $newval=$110; //@line 947 "audioop.c"
        __label__ = 43; break; //@line 947 "audioop.c"
      case 43: // $bb38thread_pre_split
        var $_pr6=HEAP[$size];
        __lastLabel__ = 43; __label__ = 44; break;
      case 44: // $bb38
        var $111=__lastLabel__ == 43 ? $_pr6 : ($96);
        var $112=($111)==1; //@line 949 "audioop.c"
        if ($112) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 949 "audioop.c"
      case 45: // $bb39
        var $113=$newval; //@line 949 "audioop.c"
        var $114=((($113)) & 255); //@line 949 "audioop.c"
        var $115=$ncp; //@line 949 "audioop.c"
        var $116=$i; //@line 949 "audioop.c"
        var $117=$115+$116; //@line 949 "audioop.c"
        HEAP[$117]=$114; //@line 949 "audioop.c"
        __label__ = 50; break; //@line 949 "audioop.c"
      case 46: // $bb40
        var $118=HEAP[$size]; //@line 950 "audioop.c"
        var $119=($118)==2; //@line 950 "audioop.c"
        if ($119) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 950 "audioop.c"
      case 47: // $bb41
        var $120=$ncp; //@line 950 "audioop.c"
        var $121=$i; //@line 950 "audioop.c"
        var $122=$120+$121; //@line 950 "audioop.c"
        var $123=$122; //@line 950 "audioop.c"
        var $124=$newval; //@line 950 "audioop.c"
        var $125=((($124)) & 65535); //@line 950 "audioop.c"
        HEAP[$123]=$125; //@line 950 "audioop.c"
        __label__ = 50; break; //@line 950 "audioop.c"
      case 48: // $bb42
        var $126=HEAP[$size]; //@line 951 "audioop.c"
        var $127=($126)==4; //@line 951 "audioop.c"
        if ($127) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 951 "audioop.c"
      case 49: // $bb43
        var $128=$ncp; //@line 951 "audioop.c"
        var $129=$i; //@line 951 "audioop.c"
        var $130=$128+$129; //@line 951 "audioop.c"
        var $131=$130; //@line 951 "audioop.c"
        var $132=$newval; //@line 951 "audioop.c"
        HEAP[$131]=$132; //@line 951 "audioop.c"
        __label__ = 50; break; //@line 951 "audioop.c"
      case 50: // $bb44
        var $133=HEAP[$size]; //@line 933 "audioop.c"
        var $134=$i; //@line 933 "audioop.c"
        var $135=($134) + ($133); //@line 933 "audioop.c"
        $i=$135; //@line 933 "audioop.c"
        var $136=HEAP[$len1]; //@line 933 "audioop.c"
        var $137=$i; //@line 933 "audioop.c"
        var $138=($137) < ($136); //@line 933 "audioop.c"
        if ($138) { __label__ = 19; break; } else { __label__ = 51; break; } //@line 933 "audioop.c"
      case 51: // $bb46
        var $139=$rv; //@line 953 "audioop.c"
        $2=$139; //@line 953 "audioop.c"
        __label__ = 52; break; //@line 953 "audioop.c"
      case 52: // $bb47
        var $140=$2; //@line 912 "audioop.c"
        $retval=$140; //@line 912 "audioop.c"
        var $retval48=$retval; //@line 912 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval48; //@line 912 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_bias($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $rv;
        var $i;
        var $bias=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 960 "audioop.c"
        var $3=$args_addr; //@line 965 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str26, $cp, $len, $size, $bias); //@line 965 "audioop.c"
        var $5=($4)==0; //@line 965 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 965 "audioop.c"
      case 1: // $bb
        $2=0; //@line 967 "audioop.c"
        __label__ = 25; break; //@line 967 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 969 "audioop.c"
        var $7=HEAP[$len]; //@line 969 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 970 "audioop.c"
        __label__ = 25; break; //@line 970 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$len]; //@line 972 "audioop.c"
        var $22=_PyString_FromStringAndSize(0, $21); //@line 972 "audioop.c"
        $rv=$22; //@line 972 "audioop.c"
        var $23=$rv; //@line 973 "audioop.c"
        var $24=($23)==0; //@line 973 "audioop.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 973 "audioop.c"
      case 8: // $bb4
        $2=0; //@line 974 "audioop.c"
        __label__ = 25; break; //@line 974 "audioop.c"
      case 9: // $bb5
        var $25=$rv; //@line 975 "audioop.c"
        var $26=_PyString_AsString($25); //@line 975 "audioop.c"
        $ncp=$26; //@line 975 "audioop.c"
        $i=0; //@line 978 "audioop.c"
        var $27=HEAP[$len]; //@line 978 "audioop.c"
        var $28=$i; //@line 978 "audioop.c"
        var $29=($28) < ($27); //@line 978 "audioop.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 24; break; } //@line 978 "audioop.c"
      case 10: // $bb6
        var $30=HEAP[$size]; //@line 979 "audioop.c"
        var $31=($30)==1; //@line 979 "audioop.c"
        if ($31) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 979 "audioop.c"
      case 11: // $bb7
        var $32=HEAP[$cp]; //@line 979 "audioop.c"
        var $33=$i; //@line 979 "audioop.c"
        var $34=$32+$33; //@line 979 "audioop.c"
        var $35=HEAP[$34]; //@line 979 "audioop.c"
        var $36=($35); //@line 979 "audioop.c"
        $val=$36; //@line 979 "audioop.c"
        __label__ = 16; break; //@line 979 "audioop.c"
      case 12: // $bb8
        var $37=HEAP[$size]; //@line 980 "audioop.c"
        var $38=($37)==2; //@line 980 "audioop.c"
        if ($38) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 980 "audioop.c"
      case 13: // $bb9
        var $39=HEAP[$cp]; //@line 980 "audioop.c"
        var $40=$i; //@line 980 "audioop.c"
        var $41=$39+$40; //@line 980 "audioop.c"
        var $42=$41; //@line 980 "audioop.c"
        var $43=HEAP[$42]; //@line 980 "audioop.c"
        var $44=($43); //@line 980 "audioop.c"
        $val=$44; //@line 980 "audioop.c"
        __label__ = 16; break; //@line 980 "audioop.c"
      case 14: // $bb10
        var $45=HEAP[$size]; //@line 981 "audioop.c"
        var $46=($45)==4; //@line 981 "audioop.c"
        if ($46) { __lastLabel__ = 14; __label__ = 15; break; } else { __lastLabel__ = 14; __label__ = 17; break; } //@line 981 "audioop.c"
      case 15: // $bb11
        var $47=HEAP[$cp]; //@line 981 "audioop.c"
        var $48=$i; //@line 981 "audioop.c"
        var $49=$47+$48; //@line 981 "audioop.c"
        var $50=$49; //@line 981 "audioop.c"
        var $51=HEAP[$50]; //@line 981 "audioop.c"
        $val=$51; //@line 981 "audioop.c"
        __label__ = 16; break; //@line 981 "audioop.c"
      case 16: // $bb12thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 16; __label__ = 17; break;
      case 17: // $bb12
        var $52=__lastLabel__ == 16 ? $_pr : ($45);
        var $53=($52)==1; //@line 983 "audioop.c"
        if ($53) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 983 "audioop.c"
      case 18: // $bb13
        var $54=$val; //@line 983 "audioop.c"
        var $55=((($54)) & 255); //@line 983 "audioop.c"
        var $56=HEAP[$bias]; //@line 983 "audioop.c"
        var $57=((($56)) & 255); //@line 983 "audioop.c"
        var $58=($57) + ($55); //@line 983 "audioop.c"
        var $59=$ncp; //@line 983 "audioop.c"
        var $60=$i; //@line 983 "audioop.c"
        var $61=$59+$60; //@line 983 "audioop.c"
        HEAP[$61]=$58; //@line 983 "audioop.c"
        __label__ = 23; break; //@line 983 "audioop.c"
      case 19: // $bb14
        var $62=HEAP[$size]; //@line 984 "audioop.c"
        var $63=($62)==2; //@line 984 "audioop.c"
        if ($63) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 984 "audioop.c"
      case 20: // $bb15
        var $64=$ncp; //@line 984 "audioop.c"
        var $65=$i; //@line 984 "audioop.c"
        var $66=$64+$65; //@line 984 "audioop.c"
        var $67=$66; //@line 984 "audioop.c"
        var $68=$val; //@line 984 "audioop.c"
        var $69=((($68)) & 65535); //@line 984 "audioop.c"
        var $70=HEAP[$bias]; //@line 984 "audioop.c"
        var $71=((($70)) & 65535); //@line 984 "audioop.c"
        var $72=($71) + ($69); //@line 984 "audioop.c"
        HEAP[$67]=$72; //@line 984 "audioop.c"
        __label__ = 23; break; //@line 984 "audioop.c"
      case 21: // $bb16
        var $73=HEAP[$size]; //@line 985 "audioop.c"
        var $74=($73)==4; //@line 985 "audioop.c"
        if ($74) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 985 "audioop.c"
      case 22: // $bb17
        var $75=$ncp; //@line 985 "audioop.c"
        var $76=$i; //@line 985 "audioop.c"
        var $77=$75+$76; //@line 985 "audioop.c"
        var $78=$77; //@line 985 "audioop.c"
        var $79=HEAP[$bias]; //@line 985 "audioop.c"
        var $80=$val; //@line 985 "audioop.c"
        var $81=($80) + ($79); //@line 985 "audioop.c"
        HEAP[$78]=$81; //@line 985 "audioop.c"
        __label__ = 23; break; //@line 985 "audioop.c"
      case 23: // $bb18
        var $82=HEAP[$size]; //@line 978 "audioop.c"
        var $83=$i; //@line 978 "audioop.c"
        var $84=($83) + ($82); //@line 978 "audioop.c"
        $i=$84; //@line 978 "audioop.c"
        var $85=HEAP[$len]; //@line 978 "audioop.c"
        var $86=$i; //@line 978 "audioop.c"
        var $87=($86) < ($85); //@line 978 "audioop.c"
        if ($87) { __label__ = 10; break; } else { __label__ = 24; break; } //@line 978 "audioop.c"
      case 24: // $bb20
        var $88=$rv; //@line 987 "audioop.c"
        $2=$88; //@line 987 "audioop.c"
        __label__ = 25; break; //@line 987 "audioop.c"
      case 25: // $bb21
        var $89=$2; //@line 967 "audioop.c"
        $retval=$89; //@line 967 "audioop.c"
        var $retval22=$retval; //@line 967 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 967 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_reverse($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $rv;
        var $i;
        var $j;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 995 "audioop.c"
        var $3=$args_addr; //@line 999 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str27, $cp, $len, $size); //@line 999 "audioop.c"
        var $5=($4)==0; //@line 999 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 999 "audioop.c"
      case 1: // $bb
        $2=0; //@line 1001 "audioop.c"
        __label__ = 25; break; //@line 1001 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 1003 "audioop.c"
        var $7=HEAP[$len]; //@line 1003 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 1004 "audioop.c"
        __label__ = 25; break; //@line 1004 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$len]; //@line 1006 "audioop.c"
        var $22=_PyString_FromStringAndSize(0, $21); //@line 1006 "audioop.c"
        $rv=$22; //@line 1006 "audioop.c"
        var $23=$rv; //@line 1007 "audioop.c"
        var $24=($23)==0; //@line 1007 "audioop.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1007 "audioop.c"
      case 8: // $bb4
        $2=0; //@line 1008 "audioop.c"
        __label__ = 25; break; //@line 1008 "audioop.c"
      case 9: // $bb5
        var $25=$rv; //@line 1009 "audioop.c"
        var $26=_PyString_AsString($25); //@line 1009 "audioop.c"
        $ncp=$26; //@line 1009 "audioop.c"
        $i=0; //@line 1011 "audioop.c"
        var $27=HEAP[$len]; //@line 1011 "audioop.c"
        var $28=$i; //@line 1011 "audioop.c"
        var $29=($28) < ($27); //@line 1011 "audioop.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 24; break; } //@line 1011 "audioop.c"
      case 10: // $bb6
        var $30=HEAP[$size]; //@line 1012 "audioop.c"
        var $31=($30)==1; //@line 1012 "audioop.c"
        if ($31) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1012 "audioop.c"
      case 11: // $bb7
        var $32=HEAP[$cp]; //@line 1012 "audioop.c"
        var $33=$i; //@line 1012 "audioop.c"
        var $34=$32+$33; //@line 1012 "audioop.c"
        var $35=HEAP[$34]; //@line 1012 "audioop.c"
        var $36=($35); //@line 1012 "audioop.c"
        var $37=($36) << 8; //@line 1012 "audioop.c"
        $val=$37; //@line 1012 "audioop.c"
        __label__ = 16; break; //@line 1012 "audioop.c"
      case 12: // $bb8
        var $38=HEAP[$size]; //@line 1013 "audioop.c"
        var $39=($38)==2; //@line 1013 "audioop.c"
        if ($39) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1013 "audioop.c"
      case 13: // $bb9
        var $40=HEAP[$cp]; //@line 1013 "audioop.c"
        var $41=$i; //@line 1013 "audioop.c"
        var $42=$40+$41; //@line 1013 "audioop.c"
        var $43=$42; //@line 1013 "audioop.c"
        var $44=HEAP[$43]; //@line 1013 "audioop.c"
        var $45=($44); //@line 1013 "audioop.c"
        $val=$45; //@line 1013 "audioop.c"
        __label__ = 16; break; //@line 1013 "audioop.c"
      case 14: // $bb10
        var $46=HEAP[$size]; //@line 1014 "audioop.c"
        var $47=($46)==4; //@line 1014 "audioop.c"
        if ($47) { __lastLabel__ = 14; __label__ = 15; break; } else { __lastLabel__ = 14; __label__ = 17; break; } //@line 1014 "audioop.c"
      case 15: // $bb11
        var $48=HEAP[$cp]; //@line 1014 "audioop.c"
        var $49=$i; //@line 1014 "audioop.c"
        var $50=$48+$49; //@line 1014 "audioop.c"
        var $51=$50; //@line 1014 "audioop.c"
        var $52=HEAP[$51]; //@line 1014 "audioop.c"
        var $53=($52) >> 16; //@line 1014 "audioop.c"
        $val=$53; //@line 1014 "audioop.c"
        __label__ = 16; break; //@line 1014 "audioop.c"
      case 16: // $bb12thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 16; __label__ = 17; break;
      case 17: // $bb12
        var $54=__lastLabel__ == 16 ? $_pr : ($46);
        var $55=HEAP[$len]; //@line 1016 "audioop.c"
        var $56=$i; //@line 1016 "audioop.c"
        var $_neg=0 - ($56);
        var $_neg6=0 - ($54);
        var $57=($55) + ($_neg6);
        var $58=($57) + ($_neg);
        $j=$58; //@line 1016 "audioop.c"
        var $59=($54)==1; //@line 1018 "audioop.c"
        if ($59) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1018 "audioop.c"
      case 18: // $bb13
        var $60=$ncp; //@line 1018 "audioop.c"
        var $61=$j; //@line 1018 "audioop.c"
        var $62=$60+$61; //@line 1018 "audioop.c"
        var $63=$val; //@line 1018 "audioop.c"
        var $64=($63) >> 8; //@line 1018 "audioop.c"
        var $65=((($64)) & 255); //@line 1018 "audioop.c"
        HEAP[$62]=$65; //@line 1018 "audioop.c"
        __label__ = 23; break; //@line 1018 "audioop.c"
      case 19: // $bb14
        var $66=HEAP[$size]; //@line 1019 "audioop.c"
        var $67=($66)==2; //@line 1019 "audioop.c"
        if ($67) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1019 "audioop.c"
      case 20: // $bb15
        var $68=$ncp; //@line 1019 "audioop.c"
        var $69=$j; //@line 1019 "audioop.c"
        var $70=$68+$69; //@line 1019 "audioop.c"
        var $71=$70; //@line 1019 "audioop.c"
        var $72=$val; //@line 1019 "audioop.c"
        var $73=((($72)) & 65535); //@line 1019 "audioop.c"
        HEAP[$71]=$73; //@line 1019 "audioop.c"
        __label__ = 23; break; //@line 1019 "audioop.c"
      case 21: // $bb16
        var $74=HEAP[$size]; //@line 1020 "audioop.c"
        var $75=($74)==4; //@line 1020 "audioop.c"
        if ($75) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1020 "audioop.c"
      case 22: // $bb17
        var $76=$ncp; //@line 1020 "audioop.c"
        var $77=$j; //@line 1020 "audioop.c"
        var $78=$76+$77; //@line 1020 "audioop.c"
        var $79=$78; //@line 1020 "audioop.c"
        var $80=$val; //@line 1020 "audioop.c"
        var $81=($80) << 16; //@line 1020 "audioop.c"
        HEAP[$79]=$81; //@line 1020 "audioop.c"
        __label__ = 23; break; //@line 1020 "audioop.c"
      case 23: // $bb18
        var $82=HEAP[$size]; //@line 1011 "audioop.c"
        var $83=$i; //@line 1011 "audioop.c"
        var $84=($83) + ($82); //@line 1011 "audioop.c"
        $i=$84; //@line 1011 "audioop.c"
        var $85=HEAP[$len]; //@line 1011 "audioop.c"
        var $86=$i; //@line 1011 "audioop.c"
        var $87=($86) < ($85); //@line 1011 "audioop.c"
        if ($87) { __label__ = 10; break; } else { __label__ = 24; break; } //@line 1011 "audioop.c"
      case 24: // $bb20
        var $88=$rv; //@line 1022 "audioop.c"
        $2=$88; //@line 1022 "audioop.c"
        __label__ = 25; break; //@line 1022 "audioop.c"
      case 25: // $bb21
        var $89=$2; //@line 1001 "audioop.c"
        $retval=$89; //@line 1001 "audioop.c"
        var $retval22=$retval; //@line 1001 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 1001 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_lin2lin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i6;
        var $retval_i7;
        var $0;
        var $size_addr_i1;
        var $retval_i2;
        var $1;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $2;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $3;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $size2=__stackBase__+12;
        var $val;
        var $rv;
        var $i;
        var $j;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 1030 "audioop.c"
        var $4=$args_addr; //@line 1034 "audioop.c"
        var $5=_PyArg_ParseTuple($4, __str28, $cp, $len, $size, $size2); //@line 1034 "audioop.c"
        var $6=($5)==0; //@line 1034 "audioop.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1034 "audioop.c"
      case 1: // $bb
        $3=0; //@line 1036 "audioop.c"
        __label__ = 28; break; //@line 1036 "audioop.c"
      case 2: // $bb1
        var $7=HEAP[$size]; //@line 1038 "audioop.c"
        var $8=HEAP[$len]; //@line 1038 "audioop.c"
        $len_addr_i=$8;
        $size_addr_i=$7;
        var $9=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i6=$9;
        var $10=$size_addr_i6; //@line 301 "audioop.c"
        var $11=($10)==1; //@line 301 "audioop.c"
        var $12=$size_addr_i6; //@line 301 "audioop.c"
        var $13=($12)==2; //@line 301 "audioop.c"
        var $or_cond_i8=($11) | ($13);
        var $14=$size_addr_i6; //@line 301 "audioop.c"
        var $15=($14)==4; //@line 301 "audioop.c"
        var $or_cond3_i9=($or_cond_i8) | ($15);
        if ($or_cond3_i9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $16=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($16, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i7=0; //@line 303 "audioop.c"
        $2=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i7=1; //@line 303 "audioop.c"
        var $17=$len_addr_i; //@line 314 "audioop.c"
        var $18=$size_addr_i; //@line 314 "audioop.c"
        var $19=($17) % ($18); //@line 314 "audioop.c"
        var $20=($19)!=0; //@line 314 "audioop.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $21=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($21, __str1); //@line 315 "audioop.c"
        $2=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $3=0; //@line 1039 "audioop.c"
        __label__ = 28; break; //@line 1039 "audioop.c"
      case 7: // $bb3
        $2=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $22=HEAP[$size2]; //@line 1040 "audioop.c"
        $size_addr_i1=$22;
        var $23=$size_addr_i1; //@line 301 "audioop.c"
        var $24=($23)==1; //@line 301 "audioop.c"
        var $25=$size_addr_i1; //@line 301 "audioop.c"
        var $26=($25)==2; //@line 301 "audioop.c"
        var $or_cond_i=($24) | ($26);
        var $27=$size_addr_i1; //@line 301 "audioop.c"
        var $28=($27)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($28);
        if ($or_cond3_i) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 301 "audioop.c"
      case 8: // $bb4
        var $29=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($29, __str); //@line 302 "audioop.c"
        $1=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $3=0; //@line 1041 "audioop.c"
        __label__ = 28; break; //@line 1041 "audioop.c"
      case 9: // $bb5
        $1=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $30=HEAP[$len]; //@line 1043 "audioop.c"
        var $31=HEAP[$size]; //@line 1043 "audioop.c"
        var $32=((($30)/($31))|0); //@line 1043 "audioop.c"
        var $33=HEAP[$size2]; //@line 1043 "audioop.c"
        var $34=((2147483647/($33))|0); //@line 1043 "audioop.c"
        var $35=($32) > ($34); //@line 1043 "audioop.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1043 "audioop.c"
      case 10: // $bb6
        var $36=HEAP[_PyExc_MemoryError]; //@line 1044 "audioop.c"
        _PyErr_SetString($36, __str23); //@line 1044 "audioop.c"
        $3=0; //@line 1046 "audioop.c"
        __label__ = 28; break; //@line 1046 "audioop.c"
      case 11: // $bb7
        var $37=HEAP[$len]; //@line 1048 "audioop.c"
        var $38=HEAP[$size]; //@line 1048 "audioop.c"
        var $39=((($37)/($38))|0); //@line 1048 "audioop.c"
        var $40=HEAP[$size2]; //@line 1048 "audioop.c"
        var $41=($40) * ($39); //@line 1048 "audioop.c"
        var $42=_PyString_FromStringAndSize(0, $41); //@line 1048 "audioop.c"
        $rv=$42; //@line 1048 "audioop.c"
        var $43=$rv; //@line 1049 "audioop.c"
        var $44=($43)==0; //@line 1049 "audioop.c"
        if ($44) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1049 "audioop.c"
      case 12: // $bb8
        $3=0; //@line 1050 "audioop.c"
        __label__ = 28; break; //@line 1050 "audioop.c"
      case 13: // $bb9
        var $45=$rv; //@line 1051 "audioop.c"
        var $46=_PyString_AsString($45); //@line 1051 "audioop.c"
        $ncp=$46; //@line 1051 "audioop.c"
        $i=0; //@line 1053 "audioop.c"
        $j=0; //@line 1053 "audioop.c"
        var $47=HEAP[$len]; //@line 1053 "audioop.c"
        var $48=$i; //@line 1053 "audioop.c"
        var $49=($48) < ($47); //@line 1053 "audioop.c"
        if ($49) { __label__ = 14; break; } else { __label__ = 27; break; } //@line 1053 "audioop.c"
      case 14: // $bb10
        var $50=HEAP[$size]; //@line 1054 "audioop.c"
        var $51=($50)==1; //@line 1054 "audioop.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1054 "audioop.c"
      case 15: // $bb11
        var $52=HEAP[$cp]; //@line 1054 "audioop.c"
        var $53=$i; //@line 1054 "audioop.c"
        var $54=$52+$53; //@line 1054 "audioop.c"
        var $55=HEAP[$54]; //@line 1054 "audioop.c"
        var $56=($55); //@line 1054 "audioop.c"
        var $57=($56) << 8; //@line 1054 "audioop.c"
        $val=$57; //@line 1054 "audioop.c"
        __label__ = 20; break; //@line 1054 "audioop.c"
      case 16: // $bb12
        var $58=HEAP[$size]; //@line 1055 "audioop.c"
        var $59=($58)==2; //@line 1055 "audioop.c"
        if ($59) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1055 "audioop.c"
      case 17: // $bb13
        var $60=HEAP[$cp]; //@line 1055 "audioop.c"
        var $61=$i; //@line 1055 "audioop.c"
        var $62=$60+$61; //@line 1055 "audioop.c"
        var $63=$62; //@line 1055 "audioop.c"
        var $64=HEAP[$63]; //@line 1055 "audioop.c"
        var $65=($64); //@line 1055 "audioop.c"
        $val=$65; //@line 1055 "audioop.c"
        __label__ = 20; break; //@line 1055 "audioop.c"
      case 18: // $bb14
        var $66=HEAP[$size]; //@line 1056 "audioop.c"
        var $67=($66)==4; //@line 1056 "audioop.c"
        if ($67) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1056 "audioop.c"
      case 19: // $bb15
        var $68=HEAP[$cp]; //@line 1056 "audioop.c"
        var $69=$i; //@line 1056 "audioop.c"
        var $70=$68+$69; //@line 1056 "audioop.c"
        var $71=$70; //@line 1056 "audioop.c"
        var $72=HEAP[$71]; //@line 1056 "audioop.c"
        var $73=($72) >> 16; //@line 1056 "audioop.c"
        $val=$73; //@line 1056 "audioop.c"
        __label__ = 20; break; //@line 1056 "audioop.c"
      case 20: // $bb16
        var $74=HEAP[$size2]; //@line 1058 "audioop.c"
        var $75=($74)==1; //@line 1058 "audioop.c"
        if ($75) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1058 "audioop.c"
      case 21: // $bb17
        var $76=$ncp; //@line 1058 "audioop.c"
        var $77=$j; //@line 1058 "audioop.c"
        var $78=$76+$77; //@line 1058 "audioop.c"
        var $79=$val; //@line 1058 "audioop.c"
        var $80=($79) >> 8; //@line 1058 "audioop.c"
        var $81=((($80)) & 255); //@line 1058 "audioop.c"
        HEAP[$78]=$81; //@line 1058 "audioop.c"
        __label__ = 26; break; //@line 1058 "audioop.c"
      case 22: // $bb18
        var $82=HEAP[$size2]; //@line 1059 "audioop.c"
        var $83=($82)==2; //@line 1059 "audioop.c"
        if ($83) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1059 "audioop.c"
      case 23: // $bb19
        var $84=$ncp; //@line 1059 "audioop.c"
        var $85=$j; //@line 1059 "audioop.c"
        var $86=$84+$85; //@line 1059 "audioop.c"
        var $87=$86; //@line 1059 "audioop.c"
        var $88=$val; //@line 1059 "audioop.c"
        var $89=((($88)) & 65535); //@line 1059 "audioop.c"
        HEAP[$87]=$89; //@line 1059 "audioop.c"
        __label__ = 26; break; //@line 1059 "audioop.c"
      case 24: // $bb20
        var $90=HEAP[$size2]; //@line 1060 "audioop.c"
        var $91=($90)==4; //@line 1060 "audioop.c"
        if ($91) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1060 "audioop.c"
      case 25: // $bb21
        var $92=$ncp; //@line 1060 "audioop.c"
        var $93=$j; //@line 1060 "audioop.c"
        var $94=$92+$93; //@line 1060 "audioop.c"
        var $95=$94; //@line 1060 "audioop.c"
        var $96=$val; //@line 1060 "audioop.c"
        var $97=($96) << 16; //@line 1060 "audioop.c"
        HEAP[$95]=$97; //@line 1060 "audioop.c"
        __label__ = 26; break; //@line 1060 "audioop.c"
      case 26: // $bb22
        var $98=HEAP[$size]; //@line 1053 "audioop.c"
        var $99=$i; //@line 1053 "audioop.c"
        var $100=($99) + ($98); //@line 1053 "audioop.c"
        $i=$100; //@line 1053 "audioop.c"
        var $101=HEAP[$size2]; //@line 1053 "audioop.c"
        var $102=$j; //@line 1053 "audioop.c"
        var $103=($102) + ($101); //@line 1053 "audioop.c"
        $j=$103; //@line 1053 "audioop.c"
        var $104=HEAP[$len]; //@line 1053 "audioop.c"
        var $105=$i; //@line 1053 "audioop.c"
        var $106=($105) < ($104); //@line 1053 "audioop.c"
        if ($106) { __label__ = 14; break; } else { __label__ = 27; break; } //@line 1053 "audioop.c"
      case 27: // $bb24
        var $107=$rv; //@line 1062 "audioop.c"
        $3=$107; //@line 1062 "audioop.c"
        __label__ = 28; break; //@line 1062 "audioop.c"
      case 28: // $bb25
        var $108=$3; //@line 1036 "audioop.c"
        $retval=$108; //@line 1036 "audioop.c"
        var $retval26=$retval; //@line 1036 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 1036 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_ratecv($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; _memset(__stackBase__, 0, 48);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr_i;
        var $b_addr_i;
        var $retval_i1;
        var $0;
        var $tmp_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_386;
        var $2;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $nchannels=__stackBase__+12;
        var $inrate=__stackBase__+16;
        var $outrate=__stackBase__+20;
        var $weightA=__stackBase__+24;
        var $weightB=__stackBase__+28;
        var $chan;
        var $d=__stackBase__+32;
        var $prev_i;
        var $cur_i;
        var $cur_o;
        var $state=__stackBase__+36;
        var $samps=__stackBase__+40;
        var $str=__stackBase__+44;
        var $rv;
        var $bytes_per_frame;
        var $q;
        $self_addr=$self;
        $args_addr=$args;
        $rv=0; //@line 1082 "audioop.c"
        HEAP[$weightA]=1; //@line 1085 "audioop.c"
        HEAP[$weightB]=0; //@line 1086 "audioop.c"
        var $3=$args_addr; //@line 1087 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str29, $cp, $len, $size, $nchannels, $inrate, $outrate, $state, $weightA, $weightB); //@line 1087 "audioop.c"
        var $5=($4)==0; //@line 1087 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1087 "audioop.c"
      case 1: // $bb
        $2=0; //@line 1090 "audioop.c"
        __label__ = 80; break; //@line 1090 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 1091 "audioop.c"
        $size_addr_i=$6;
        var $7=$size_addr_i; //@line 301 "audioop.c"
        var $8=($7)==1; //@line 301 "audioop.c"
        var $9=$size_addr_i; //@line 301 "audioop.c"
        var $10=($9)==2; //@line 301 "audioop.c"
        var $or_cond_i=($8) | ($10);
        var $11=$size_addr_i; //@line 301 "audioop.c"
        var $12=($11)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($12);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb2
        var $13=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($13, __str); //@line 302 "audioop.c"
        $1=0; //@line 303 "audioop.c"
        $retval_i=0; //@line 303 "audioop.c"
        $2=0; //@line 1092 "audioop.c"
        __label__ = 80; break; //@line 1092 "audioop.c"
      case 4: // $bb3
        $1=1; //@line 306 "audioop.c"
        $retval_i=1; //@line 303 "audioop.c"
        var $14=HEAP[$nchannels]; //@line 1093 "audioop.c"
        var $15=($14) <= 0; //@line 1093 "audioop.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1093 "audioop.c"
      case 5: // $bb4
        var $16=HEAP[_AudioopError]; //@line 1094 "audioop.c"
        _PyErr_SetString($16, __str30); //@line 1094 "audioop.c"
        $2=0; //@line 1095 "audioop.c"
        __label__ = 80; break; //@line 1095 "audioop.c"
      case 6: // $bb5
        var $17=HEAP[$size]; //@line 1097 "audioop.c"
        var $18=HEAP[$nchannels]; //@line 1097 "audioop.c"
        var $19=($18) * ($17); //@line 1097 "audioop.c"
        $bytes_per_frame=$19; //@line 1097 "audioop.c"
        var $20=HEAP[$nchannels]; //@line 1098 "audioop.c"
        var $21=$bytes_per_frame; //@line 1098 "audioop.c"
        var $22=((($21)/($20))|0); //@line 1098 "audioop.c"
        var $23=HEAP[$size]; //@line 1098 "audioop.c"
        var $24=($22)!=($23); //@line 1098 "audioop.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1098 "audioop.c"
      case 7: // $bb6
        var $25=HEAP[_PyExc_OverflowError]; //@line 1102 "audioop.c"
        _PyErr_SetString($25, __str31); //@line 1102 "audioop.c"
        $2=0; //@line 1104 "audioop.c"
        __label__ = 80; break; //@line 1104 "audioop.c"
      case 8: // $bb7
        var $26=HEAP[$weightA]; //@line 1106 "audioop.c"
        var $27=($26) <= 0; //@line 1106 "audioop.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 1106 "audioop.c"
      case 9: // $bb8
        var $28=HEAP[$weightB]; //@line 1106 "audioop.c"
        var $29=($28) < 0; //@line 1106 "audioop.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1106 "audioop.c"
      case 10: // $bb9
        var $30=HEAP[_AudioopError]; //@line 1107 "audioop.c"
        _PyErr_SetString($30, __str32); //@line 1107 "audioop.c"
        $2=0; //@line 1109 "audioop.c"
        __label__ = 80; break; //@line 1109 "audioop.c"
      case 11: // $bb10
        var $31=HEAP[$len]; //@line 1111 "audioop.c"
        var $32=$bytes_per_frame; //@line 1111 "audioop.c"
        var $33=($31) % ($32); //@line 1111 "audioop.c"
        var $34=($33)!=0; //@line 1111 "audioop.c"
        if ($34) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1111 "audioop.c"
      case 12: // $bb11
        var $35=HEAP[_AudioopError]; //@line 1112 "audioop.c"
        _PyErr_SetString($35, __str1); //@line 1112 "audioop.c"
        $2=0; //@line 1113 "audioop.c"
        __label__ = 80; break; //@line 1113 "audioop.c"
      case 13: // $bb12
        var $36=HEAP[$inrate]; //@line 1115 "audioop.c"
        var $37=($36) <= 0; //@line 1115 "audioop.c"
        if ($37) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 1115 "audioop.c"
      case 14: // $bb13
        var $38=HEAP[$outrate]; //@line 1115 "audioop.c"
        var $39=($38) <= 0; //@line 1115 "audioop.c"
        if ($39) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1115 "audioop.c"
      case 15: // $bb14
        var $40=HEAP[_AudioopError]; //@line 1116 "audioop.c"
        _PyErr_SetString($40, __str33); //@line 1116 "audioop.c"
        $2=0; //@line 1117 "audioop.c"
        __label__ = 80; break; //@line 1117 "audioop.c"
      case 16: // $bb15
        var $41=HEAP[$outrate]; //@line 1120 "audioop.c"
        var $42=HEAP[$inrate]; //@line 1120 "audioop.c"
        $a_addr_i=$42;
        $b_addr_i=$41;
        var $43=($41) > 0; //@line 1068 "audioop.c"
        var $44=$a_addr_i; //@line 1069 "audioop.c"
        if ($43) { __lastLabel__ = 16; __label__ = 17; break; } else { __lastLabel__ = 16; __label__ = 18; break; } //@line 1068 "audioop.c"
      case 17: // $bb_i
        var $45=__lastLabel__ == 17 ? $50 : ($44);
        var $46=$b_addr_i; //@line 1069 "audioop.c"
        var $47=($45) % ($46); //@line 1069 "audioop.c"
        $tmp_i=$47; //@line 1069 "audioop.c"
        var $48=$b_addr_i; //@line 1070 "audioop.c"
        $a_addr_i=$48; //@line 1070 "audioop.c"
        $b_addr_i=$47; //@line 1071 "audioop.c"
        var $49=($47) > 0; //@line 1068 "audioop.c"
        var $50=$a_addr_i; //@line 1069 "audioop.c"
        if ($49) { __lastLabel__ = 17; __label__ = 17; break; } else { __lastLabel__ = 17; __label__ = 18; break; } //@line 1068 "audioop.c"
      case 18: // $gcd_exit
        var $_lcssa_i=__lastLabel__ == 16 ? $44 : ($50);
        $0=$_lcssa_i; //@line 1073 "audioop.c"
        var $51=$0; //@line 1073 "audioop.c"
        $retval_i1=$51; //@line 1073 "audioop.c"
        var $retval3_i=$retval_i1; //@line 1073 "audioop.c"
        HEAP[$d]=$retval3_i; //@line 1120 "audioop.c"
        var $52=HEAP[$inrate]; //@line 1121 "audioop.c"
        var $53=HEAP[$d]; //@line 1121 "audioop.c"
        var $54=((($52)/($53))|0); //@line 1121 "audioop.c"
        HEAP[$inrate]=$54; //@line 1121 "audioop.c"
        var $55=HEAP[$outrate]; //@line 1122 "audioop.c"
        var $56=HEAP[$d]; //@line 1122 "audioop.c"
        var $57=((($55)/($56))|0); //@line 1122 "audioop.c"
        HEAP[$outrate]=$57; //@line 1122 "audioop.c"
        var $58=HEAP[$nchannels]; //@line 1124 "audioop.c"
        var $59=($58) > 1073741823; //@line 1124 "audioop.c"
        if ($59) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1124 "audioop.c"
      case 19: // $bb16
        var $60=HEAP[_PyExc_MemoryError]; //@line 1125 "audioop.c"
        _PyErr_SetString($60, __str23); //@line 1125 "audioop.c"
        $2=0; //@line 1127 "audioop.c"
        __label__ = 80; break; //@line 1127 "audioop.c"
      case 20: // $bb17
        var $61=HEAP[$nchannels]; //@line 1129 "audioop.c"
        var $62=($61) * 4; //@line 1129 "audioop.c"
        var $63=_malloc($62); //@line 1129 "audioop.c"
        var $64=$63; //@line 1129 "audioop.c"
        $prev_i=$64; //@line 1129 "audioop.c"
        var $65=HEAP[$nchannels]; //@line 1130 "audioop.c"
        var $66=($65) * 4; //@line 1130 "audioop.c"
        var $67=_malloc($66); //@line 1130 "audioop.c"
        var $68=$67; //@line 1130 "audioop.c"
        $cur_i=$68; //@line 1130 "audioop.c"
        var $69=$prev_i; //@line 1131 "audioop.c"
        var $70=($69)==0; //@line 1131 "audioop.c"
        if ($70) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1131 "audioop.c"
      case 21: // $bb18
        var $71=$cur_i; //@line 1131 "audioop.c"
        var $72=($71)==0; //@line 1131 "audioop.c"
        if ($72) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1131 "audioop.c"
      case 22: // $bb19
        var $73=_PyErr_NoMemory(); //@line 1132 "audioop.c"
        __label__ = 75; break; //@line 1132 "audioop.c"
      case 23: // $bb20
        var $74=HEAP[$len]; //@line 1136 "audioop.c"
        var $75=$bytes_per_frame; //@line 1136 "audioop.c"
        var $76=((($74)/($75))|0); //@line 1136 "audioop.c"
        HEAP[$len]=$76; //@line 1136 "audioop.c"
        var $77=HEAP[$state]; //@line 1138 "audioop.c"
        var $78=($77)==(__Py_NoneStruct); //@line 1138 "audioop.c"
        if ($78) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 1138 "audioop.c"
      case 24: // $bb21
        var $79=HEAP[$outrate]; //@line 1139 "audioop.c"
        var $80=0 - ($79); //@line 1139 "audioop.c"
        HEAP[$d]=$80; //@line 1139 "audioop.c"
        $chan=0; //@line 1140 "audioop.c"
        var $81=HEAP[$nchannels]; //@line 1140 "audioop.c"
        var $82=$chan; //@line 1140 "audioop.c"
        var $83=($82) < ($81); //@line 1140 "audioop.c"
        if ($83) { __label__ = 25; break; } else { __label__ = 33; break; } //@line 1140 "audioop.c"
      case 25: // $bb22
        var $84=$cur_i; //@line 1141 "audioop.c"
        var $85=$chan; //@line 1141 "audioop.c"
        var $86=$84+4*$85; //@line 1141 "audioop.c"
        HEAP[$86]=0; //@line 1141 "audioop.c"
        var $87=$cur_i; //@line 1141 "audioop.c"
        var $88=$chan; //@line 1141 "audioop.c"
        var $89=$87+4*$88; //@line 1141 "audioop.c"
        var $90=HEAP[$89]; //@line 1141 "audioop.c"
        var $91=$prev_i; //@line 1141 "audioop.c"
        var $92=$chan; //@line 1141 "audioop.c"
        var $93=$91+4*$92; //@line 1141 "audioop.c"
        HEAP[$93]=$90; //@line 1141 "audioop.c"
        var $94=$chan; //@line 1140 "audioop.c"
        var $95=($94) + 1; //@line 1140 "audioop.c"
        $chan=$95; //@line 1140 "audioop.c"
        var $96=HEAP[$nchannels]; //@line 1140 "audioop.c"
        var $97=$chan; //@line 1140 "audioop.c"
        var $98=($97) < ($96); //@line 1140 "audioop.c"
        if ($98) { __label__ = 25; break; } else { __label__ = 33; break; } //@line 1140 "audioop.c"
      case 26: // $bb25
        var $99=HEAP[$state]; //@line 1144 "audioop.c"
        var $100=_PyArg_ParseTuple($99, __str34, $d, _PyTuple_Type, $samps); //@line 1144 "audioop.c"
        var $101=($100)==0; //@line 1144 "audioop.c"
        if ($101) { __label__ = 75; break; } else { __label__ = 27; break; } //@line 1144 "audioop.c"
      case 27: // $bb26
        var $102=HEAP[$samps]; //@line 1148 "audioop.c"
        var $103=_PyTuple_Size($102); //@line 1148 "audioop.c"
        var $104=HEAP[$nchannels]; //@line 1148 "audioop.c"
        var $105=($103)!=($104); //@line 1148 "audioop.c"
        if ($105) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1148 "audioop.c"
      case 28: // $bb27
        var $106=HEAP[_AudioopError]; //@line 1149 "audioop.c"
        _PyErr_SetString($106, __str35); //@line 1149 "audioop.c"
        __label__ = 75; break; //@line 1149 "audioop.c"
      case 29: // $bb28
        $chan=0; //@line 1153 "audioop.c"
        __label__ = 32; break; //@line 1153 "audioop.c"
      case 30: // $bb29
        var $107=$cur_i; //@line 1154 "audioop.c"
        var $108=$chan; //@line 1154 "audioop.c"
        var $109=$107+4*$108; //@line 1154 "audioop.c"
        var $110=$prev_i; //@line 1154 "audioop.c"
        var $111=$chan; //@line 1154 "audioop.c"
        var $112=$110+4*$111; //@line 1154 "audioop.c"
        var $113=HEAP[$samps]; //@line 1154 "audioop.c"
        var $114=$chan; //@line 1154 "audioop.c"
        var $115=_PyTuple_GetItem($113, $114); //@line 1154 "audioop.c"
        var $116=_PyArg_ParseTuple($115, __str36, $112, $109); //@line 1154 "audioop.c"
        var $117=($116)==0; //@line 1154 "audioop.c"
        if ($117) { __label__ = 75; break; } else { __label__ = 31; break; } //@line 1154 "audioop.c"
      case 31: // $bb30
        var $118=$chan; //@line 1153 "audioop.c"
        var $119=($118) + 1; //@line 1153 "audioop.c"
        $chan=$119; //@line 1153 "audioop.c"
        __label__ = 32; break; //@line 1153 "audioop.c"
      case 32: // $bb31
        var $120=HEAP[$nchannels]; //@line 1153 "audioop.c"
        var $121=$chan; //@line 1153 "audioop.c"
        var $122=($121) < ($120); //@line 1153 "audioop.c"
        if ($122) { __label__ = 30; break; } else { __label__ = 33; break; } //@line 1153 "audioop.c"
      case 33: // $bb32
        var $123=HEAP[$len]; //@line 1171 "audioop.c"
        var $124=($123) > 0; //@line 1171 "audioop.c"
        if ($124) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1171 "audioop.c"
      case 34: // $bb33
        var $125=HEAP[$len]; //@line 1171 "audioop.c"
        var $126=($125) - 1; //@line 1171 "audioop.c"
        var $127=HEAP[$inrate]; //@line 1171 "audioop.c"
        var $128=((($126)/($127))|0); //@line 1171 "audioop.c"
        var $129=($128) + 1; //@line 1171 "audioop.c"
        $iftmp_386=$129; //@line 1171 "audioop.c"
        __label__ = 36; break; //@line 1171 "audioop.c"
      case 35: // $bb34
        $iftmp_386=0; //@line 1171 "audioop.c"
        __label__ = 36; break; //@line 1171 "audioop.c"
      case 36: // $bb35
        var $130=$iftmp_386; //@line 1171 "audioop.c"
        $q=$130; //@line 1171 "audioop.c"
        var $131=$q; //@line 1172 "audioop.c"
        var $132=((2147483647/($131))|0); //@line 1172 "audioop.c"
        var $133=$bytes_per_frame; //@line 1172 "audioop.c"
        var $134=((($132)/($133))|0); //@line 1172 "audioop.c"
        var $135=HEAP[$outrate]; //@line 1172 "audioop.c"
        var $136=($134) < ($135); //@line 1172 "audioop.c"
        if ($136) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1172 "audioop.c"
      case 37: // $bb38_thread
        HEAP[$str]=0; //@line 1173 "audioop.c"
        __label__ = 39; break;
      case 38: // $bb38
        var $137=HEAP[$outrate]; //@line 1175 "audioop.c"
        var $138=$q; //@line 1175 "audioop.c"
        var $139=$bytes_per_frame; //@line 1175 "audioop.c"
        var $140=($138) * ($137); //@line 1175 "audioop.c"
        var $141=($140) * ($139); //@line 1175 "audioop.c"
        var $142=_PyString_FromStringAndSize(0, $141); //@line 1175 "audioop.c"
        HEAP[$str]=$142; //@line 1175 "audioop.c"
        var $143=($142)==0; //@line 1178 "audioop.c"
        if ($143) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 1178 "audioop.c"
      case 39: // $bb39
        var $144=HEAP[_PyExc_MemoryError]; //@line 1179 "audioop.c"
        _PyErr_SetString($144, __str23); //@line 1179 "audioop.c"
        __label__ = 75; break; //@line 1179 "audioop.c"
      case 40: // $bb40
        var $145=HEAP[$str]; //@line 1184 "audioop.c"
        var $146=_PyString_AsString($145); //@line 1184 "audioop.c"
        $ncp=$146; //@line 1184 "audioop.c"
        var $_pr=HEAP[$d];
        __lastLabel__ = 40; __label__ = 64; break; //@line 1184 "audioop.c"
      case 41: // $bb42
        var $147=HEAP[$len]; //@line 1188 "audioop.c"
        var $148=($147)==0; //@line 1188 "audioop.c"
        if ($148) { __label__ = 42; break; } else { __label__ = 55; break; } //@line 1188 "audioop.c"
      case 42: // $bb43
        var $149=HEAP[$nchannels]; //@line 1189 "audioop.c"
        var $150=_PyTuple_New($149); //@line 1189 "audioop.c"
        HEAP[$samps]=$150; //@line 1189 "audioop.c"
        var $151=HEAP[$samps]; //@line 1190 "audioop.c"
        var $152=($151)==0; //@line 1190 "audioop.c"
        if ($152) { __label__ = 75; break; } else { __label__ = 43; break; } //@line 1190 "audioop.c"
      case 43: // $bb44
        $chan=0; //@line 1192 "audioop.c"
        var $153=HEAP[$nchannels]; //@line 1192 "audioop.c"
        var $154=$chan; //@line 1192 "audioop.c"
        var $155=($154) < ($153); //@line 1192 "audioop.c"
        if ($155) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1192 "audioop.c"
      case 44: // $bb45
        var $156=$cur_i; //@line 1193 "audioop.c"
        var $157=$chan; //@line 1193 "audioop.c"
        var $158=$156+4*$157; //@line 1193 "audioop.c"
        var $159=HEAP[$158]; //@line 1193 "audioop.c"
        var $160=$prev_i; //@line 1193 "audioop.c"
        var $161=$chan; //@line 1193 "audioop.c"
        var $162=$160+4*$161; //@line 1193 "audioop.c"
        var $163=HEAP[$162]; //@line 1193 "audioop.c"
        var $164=_Py_BuildValue(__str6, $163, $159); //@line 1193 "audioop.c"
        var $165=HEAP[$samps]; //@line 1193 "audioop.c"
        var $166=$chan; //@line 1193 "audioop.c"
        var $167=_PyTuple_SetItem($165, $166, $164); //@line 1193 "audioop.c"
        var $168=$chan; //@line 1192 "audioop.c"
        var $169=($168) + 1; //@line 1192 "audioop.c"
        $chan=$169; //@line 1192 "audioop.c"
        var $170=HEAP[$nchannels]; //@line 1192 "audioop.c"
        var $171=$chan; //@line 1192 "audioop.c"
        var $172=($171) < ($170); //@line 1192 "audioop.c"
        if ($172) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1192 "audioop.c"
      case 45: // $bb47
        var $173=_PyErr_Occurred(); //@line 1197 "audioop.c"
        var $174=($173)!=0; //@line 1197 "audioop.c"
        if ($174) { __label__ = 75; break; } else { __label__ = 46; break; } //@line 1197 "audioop.c"
      case 46: // $bb48
        var $175=$ncp; //@line 1201 "audioop.c"
        var $176=($175); //@line 1201 "audioop.c"
        var $177=HEAP[$str]; //@line 1201 "audioop.c"
        var $178=_PyString_AsString($177); //@line 1201 "audioop.c"
        var $179=($178); //@line 1201 "audioop.c"
        var $180=($176) - ($179); //@line 1201 "audioop.c"
        HEAP[$len]=$180; //@line 1201 "audioop.c"
        var $181=HEAP[$len]; //@line 1202 "audioop.c"
        var $182=($181)==0; //@line 1202 "audioop.c"
        if ($182) { __label__ = 47; break; } else { __label__ = 50; break; } //@line 1202 "audioop.c"
      case 47: // $bb49
        var $183=_PyString_FromStringAndSize(__str37, 0); //@line 1204 "audioop.c"
        $rv=$183; //@line 1204 "audioop.c"
        var $184=HEAP[$str]; //@line 1205 "audioop.c"
        var $185=$184; //@line 1205 "audioop.c"
        var $186=HEAP[$185]; //@line 1205 "audioop.c"
        var $187=($186) - 1; //@line 1205 "audioop.c"
        var $188=$184; //@line 1205 "audioop.c"
        HEAP[$188]=$187; //@line 1205 "audioop.c"
        var $189=$184; //@line 1205 "audioop.c"
        var $190=HEAP[$189]; //@line 1205 "audioop.c"
        var $191=($190)==0; //@line 1205 "audioop.c"
        if ($191) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 1205 "audioop.c"
      case 48: // $bb50
        var $192=HEAP[$str]; //@line 1205 "audioop.c"
        var $193=$192+4; //@line 1205 "audioop.c"
        var $194=HEAP[$193]; //@line 1205 "audioop.c"
        var $195=$194+24; //@line 1205 "audioop.c"
        var $196=HEAP[$195]; //@line 1205 "audioop.c"
        var $197=HEAP[$str]; //@line 1205 "audioop.c"
        FUNCTION_TABLE[$196]($197); //@line 1205 "audioop.c"
        __label__ = 49; break; //@line 1205 "audioop.c"
      case 49: // $bb51
        var $198=$rv; //@line 1206 "audioop.c"
        HEAP[$str]=$198; //@line 1206 "audioop.c"
        __label__ = 51; break; //@line 1206 "audioop.c"
      case 50: // $bb52
        var $199=HEAP[$len]; //@line 1207 "audioop.c"
        var $200=__PyString_Resize($str, $199); //@line 1207 "audioop.c"
        var $201=($200) < 0; //@line 1207 "audioop.c"
        if ($201) { __label__ = 75; break; } else { __label__ = 51; break; } //@line 1207 "audioop.c"
      case 51: // $bb53
        var $202=HEAP[$samps]; //@line 1209 "audioop.c"
        var $203=HEAP[$d]; //@line 1209 "audioop.c"
        var $204=HEAP[$str]; //@line 1209 "audioop.c"
        var $205=_Py_BuildValue(__str38, $204, $203, $202); //@line 1209 "audioop.c"
        $rv=$205; //@line 1209 "audioop.c"
        var $206=HEAP[$samps]; //@line 1210 "audioop.c"
        var $207=$206; //@line 1210 "audioop.c"
        var $208=HEAP[$207]; //@line 1210 "audioop.c"
        var $209=($208) - 1; //@line 1210 "audioop.c"
        var $210=$206; //@line 1210 "audioop.c"
        HEAP[$210]=$209; //@line 1210 "audioop.c"
        var $211=$206; //@line 1210 "audioop.c"
        var $212=HEAP[$211]; //@line 1210 "audioop.c"
        var $213=($212)==0; //@line 1210 "audioop.c"
        if ($213) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 1210 "audioop.c"
      case 52: // $bb54
        var $214=HEAP[$samps]; //@line 1210 "audioop.c"
        var $215=$214+4; //@line 1210 "audioop.c"
        var $216=HEAP[$215]; //@line 1210 "audioop.c"
        var $217=$216+24; //@line 1210 "audioop.c"
        var $218=HEAP[$217]; //@line 1210 "audioop.c"
        var $219=HEAP[$samps]; //@line 1210 "audioop.c"
        FUNCTION_TABLE[$218]($219); //@line 1210 "audioop.c"
        __label__ = 53; break; //@line 1210 "audioop.c"
      case 53: // $bb55
        var $220=HEAP[$str]; //@line 1211 "audioop.c"
        var $221=$220; //@line 1211 "audioop.c"
        var $222=HEAP[$221]; //@line 1211 "audioop.c"
        var $223=($222) - 1; //@line 1211 "audioop.c"
        var $224=$220; //@line 1211 "audioop.c"
        HEAP[$224]=$223; //@line 1211 "audioop.c"
        var $225=$220; //@line 1211 "audioop.c"
        var $226=HEAP[$225]; //@line 1211 "audioop.c"
        var $227=($226)==0; //@line 1211 "audioop.c"
        if ($227) { __label__ = 54; break; } else { __label__ = 75; break; } //@line 1211 "audioop.c"
      case 54: // $bb56
        var $228=HEAP[$str]; //@line 1211 "audioop.c"
        var $229=$228+4; //@line 1211 "audioop.c"
        var $230=HEAP[$229]; //@line 1211 "audioop.c"
        var $231=$230+24; //@line 1211 "audioop.c"
        var $232=HEAP[$231]; //@line 1211 "audioop.c"
        var $233=HEAP[$str]; //@line 1211 "audioop.c"
        FUNCTION_TABLE[$232]($233); //@line 1211 "audioop.c"
        __label__ = 75; break; //@line 1211 "audioop.c"
      case 55: // $bb58
        $chan=0; //@line 1214 "audioop.c"
        var $234=HEAP[$nchannels]; //@line 1214 "audioop.c"
        var $235=$chan; //@line 1214 "audioop.c"
        var $236=($235) < ($234); //@line 1214 "audioop.c"
        if ($236) { __label__ = 56; break; } else { __label__ = 63; break; } //@line 1214 "audioop.c"
      case 56: // $bb59
        var $237=$cur_i; //@line 1215 "audioop.c"
        var $238=$chan; //@line 1215 "audioop.c"
        var $239=$237+4*$238; //@line 1215 "audioop.c"
        var $240=HEAP[$239]; //@line 1215 "audioop.c"
        var $241=$prev_i; //@line 1215 "audioop.c"
        var $242=$chan; //@line 1215 "audioop.c"
        var $243=$241+4*$242; //@line 1215 "audioop.c"
        HEAP[$243]=$240; //@line 1215 "audioop.c"
        var $244=HEAP[$size]; //@line 1216 "audioop.c"
        var $245=($244)==1; //@line 1216 "audioop.c"
        if ($245) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 1216 "audioop.c"
      case 57: // $bb60
        var $246=HEAP[$cp]; //@line 1217 "audioop.c"
        var $247=$246; //@line 1217 "audioop.c"
        var $248=HEAP[$247]; //@line 1217 "audioop.c"
        var $249=($248); //@line 1217 "audioop.c"
        var $250=($249) << 8; //@line 1217 "audioop.c"
        var $251=$cur_i; //@line 1217 "audioop.c"
        var $252=$chan; //@line 1217 "audioop.c"
        var $253=$251+4*$252; //@line 1217 "audioop.c"
        HEAP[$253]=$250; //@line 1217 "audioop.c"
        __label__ = 62; break; //@line 1217 "audioop.c"
      case 58: // $bb61
        var $254=HEAP[$size]; //@line 1218 "audioop.c"
        var $255=($254)==2; //@line 1218 "audioop.c"
        if ($255) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 1218 "audioop.c"
      case 59: // $bb62
        var $256=HEAP[$cp]; //@line 1219 "audioop.c"
        var $257=$256; //@line 1219 "audioop.c"
        var $258=$257; //@line 1219 "audioop.c"
        var $259=HEAP[$258]; //@line 1219 "audioop.c"
        var $260=($259); //@line 1219 "audioop.c"
        var $261=$cur_i; //@line 1219 "audioop.c"
        var $262=$chan; //@line 1219 "audioop.c"
        var $263=$261+4*$262; //@line 1219 "audioop.c"
        HEAP[$263]=$260; //@line 1219 "audioop.c"
        __label__ = 62; break; //@line 1219 "audioop.c"
      case 60: // $bb63
        var $264=HEAP[$size]; //@line 1220 "audioop.c"
        var $265=($264)==4; //@line 1220 "audioop.c"
        if ($265) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 1220 "audioop.c"
      case 61: // $bb64
        var $266=HEAP[$cp]; //@line 1221 "audioop.c"
        var $267=$266; //@line 1221 "audioop.c"
        var $268=$267; //@line 1221 "audioop.c"
        var $269=HEAP[$268]; //@line 1221 "audioop.c"
        var $270=($269) >> 16; //@line 1221 "audioop.c"
        var $271=$cur_i; //@line 1221 "audioop.c"
        var $272=$chan; //@line 1221 "audioop.c"
        var $273=$271+4*$272; //@line 1221 "audioop.c"
        HEAP[$273]=$270; //@line 1221 "audioop.c"
        __label__ = 62; break; //@line 1221 "audioop.c"
      case 62: // $bb65
        var $274=HEAP[$cp]; //@line 1222 "audioop.c"
        var $275=HEAP[$size]; //@line 1222 "audioop.c"
        var $276=$274+$275; //@line 1222 "audioop.c"
        HEAP[$cp]=$276; //@line 1222 "audioop.c"
        var $277=$cur_i; //@line 1224 "audioop.c"
        var $278=$chan; //@line 1224 "audioop.c"
        var $279=$277+4*$278; //@line 1224 "audioop.c"
        var $280=HEAP[$279]; //@line 1224 "audioop.c"
        var $281=HEAP[$weightA]; //@line 1224 "audioop.c"
        var $282=($281) * ($280); //@line 1224 "audioop.c"
        var $283=$prev_i; //@line 1224 "audioop.c"
        var $284=$chan; //@line 1224 "audioop.c"
        var $285=$283+4*$284; //@line 1224 "audioop.c"
        var $286=HEAP[$285]; //@line 1224 "audioop.c"
        var $287=HEAP[$weightB]; //@line 1224 "audioop.c"
        var $288=($287) * ($286); //@line 1224 "audioop.c"
        var $289=($288) + ($282); //@line 1224 "audioop.c"
        var $290=HEAP[$weightA]; //@line 1224 "audioop.c"
        var $291=HEAP[$weightB]; //@line 1224 "audioop.c"
        var $292=($291) + ($290); //@line 1224 "audioop.c"
        var $293=((($289)/($292))|0); //@line 1224 "audioop.c"
        var $294=$cur_i; //@line 1224 "audioop.c"
        var $295=$chan; //@line 1224 "audioop.c"
        var $296=$294+4*$295; //@line 1224 "audioop.c"
        HEAP[$296]=$293; //@line 1224 "audioop.c"
        var $297=$chan; //@line 1214 "audioop.c"
        var $298=($297) + 1; //@line 1214 "audioop.c"
        $chan=$298; //@line 1214 "audioop.c"
        var $299=HEAP[$nchannels]; //@line 1214 "audioop.c"
        var $300=$chan; //@line 1214 "audioop.c"
        var $301=($300) < ($299); //@line 1214 "audioop.c"
        if ($301) { __label__ = 56; break; } else { __label__ = 63; break; } //@line 1214 "audioop.c"
      case 63: // $bb67
        var $302=HEAP[$len]; //@line 1229 "audioop.c"
        var $303=($302) - 1; //@line 1229 "audioop.c"
        HEAP[$len]=$303; //@line 1229 "audioop.c"
        var $304=HEAP[$d]; //@line 1230 "audioop.c"
        var $305=HEAP[$outrate]; //@line 1230 "audioop.c"
        var $306=($305) + ($304); //@line 1230 "audioop.c"
        HEAP[$d]=$306; //@line 1230 "audioop.c"
        __lastLabel__ = 63; __label__ = 64; break; //@line 1230 "audioop.c"
      case 64: // $bb68
        var $307=__lastLabel__ == 40 ? $_pr : (__lastLabel__ == 63 ? $306 : (__lastLabel__ == 74 ? $_pr3 : ($360)));
        var $308=($307) < 0; //@line 1187 "audioop.c"
        if ($308) { __label__ = 41; break; } else { __label__ = 74; break; } //@line 1187 "audioop.c"
      case 65: // $bb70
        $chan=0; //@line 1233 "audioop.c"
        var $309=HEAP[$nchannels]; //@line 1233 "audioop.c"
        var $310=$chan; //@line 1233 "audioop.c"
        var $311=($310) < ($309); //@line 1233 "audioop.c"
        if ($311) { __label__ = 66; break; } else { __label__ = 73; break; } //@line 1233 "audioop.c"
      case 66: // $bb71
        var $312=$prev_i; //@line 1234 "audioop.c"
        var $313=$chan; //@line 1234 "audioop.c"
        var $314=$312+4*$313; //@line 1234 "audioop.c"
        var $315=HEAP[$314]; //@line 1234 "audioop.c"
        var $316=HEAP[$d]; //@line 1234 "audioop.c"
        var $317=($316) * ($315); //@line 1234 "audioop.c"
        var $318=$cur_i; //@line 1234 "audioop.c"
        var $319=$chan; //@line 1234 "audioop.c"
        var $320=$318+4*$319; //@line 1234 "audioop.c"
        var $321=HEAP[$320]; //@line 1234 "audioop.c"
        var $322=HEAP[$outrate]; //@line 1234 "audioop.c"
        var $323=HEAP[$d]; //@line 1234 "audioop.c"
        var $324=($322) - ($323); //@line 1234 "audioop.c"
        var $325=($324) * ($321); //@line 1234 "audioop.c"
        var $326=($325) + ($317); //@line 1234 "audioop.c"
        var $327=HEAP[$outrate]; //@line 1234 "audioop.c"
        var $328=((($326)/($327))|0); //@line 1234 "audioop.c"
        $cur_o=$328; //@line 1234 "audioop.c"
        var $329=HEAP[$size]; //@line 1237 "audioop.c"
        var $330=($329)==1; //@line 1237 "audioop.c"
        if ($330) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 1237 "audioop.c"
      case 67: // $bb72
        var $331=$ncp; //@line 1238 "audioop.c"
        var $332=$331; //@line 1238 "audioop.c"
        var $333=$cur_o; //@line 1238 "audioop.c"
        var $334=($333) >> 8; //@line 1238 "audioop.c"
        var $335=((($334)) & 255); //@line 1238 "audioop.c"
        HEAP[$332]=$335; //@line 1238 "audioop.c"
        __label__ = 72; break; //@line 1238 "audioop.c"
      case 68: // $bb73
        var $336=HEAP[$size]; //@line 1239 "audioop.c"
        var $337=($336)==2; //@line 1239 "audioop.c"
        if ($337) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 1239 "audioop.c"
      case 69: // $bb74
        var $338=$ncp; //@line 1240 "audioop.c"
        var $339=$338; //@line 1240 "audioop.c"
        var $340=$339; //@line 1240 "audioop.c"
        var $341=$cur_o; //@line 1240 "audioop.c"
        var $342=((($341)) & 65535); //@line 1240 "audioop.c"
        HEAP[$340]=$342; //@line 1240 "audioop.c"
        __label__ = 72; break; //@line 1240 "audioop.c"
      case 70: // $bb75
        var $343=HEAP[$size]; //@line 1241 "audioop.c"
        var $344=($343)==4; //@line 1241 "audioop.c"
        if ($344) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 1241 "audioop.c"
      case 71: // $bb76
        var $345=$ncp; //@line 1242 "audioop.c"
        var $346=$345; //@line 1242 "audioop.c"
        var $347=$346; //@line 1242 "audioop.c"
        var $348=$cur_o; //@line 1242 "audioop.c"
        var $349=($348) << 16; //@line 1242 "audioop.c"
        HEAP[$347]=$349; //@line 1242 "audioop.c"
        __label__ = 72; break; //@line 1242 "audioop.c"
      case 72: // $bb77
        var $350=HEAP[$size]; //@line 1243 "audioop.c"
        var $351=$ncp; //@line 1243 "audioop.c"
        var $352=$351+$350; //@line 1243 "audioop.c"
        $ncp=$352; //@line 1243 "audioop.c"
        var $353=$chan; //@line 1233 "audioop.c"
        var $354=($353) + 1; //@line 1233 "audioop.c"
        $chan=$354; //@line 1233 "audioop.c"
        var $355=HEAP[$nchannels]; //@line 1233 "audioop.c"
        var $356=$chan; //@line 1233 "audioop.c"
        var $357=($356) < ($355); //@line 1233 "audioop.c"
        if ($357) { __label__ = 66; break; } else { __label__ = 73; break; } //@line 1233 "audioop.c"
      case 73: // $bb79
        var $358=HEAP[$d]; //@line 1245 "audioop.c"
        var $359=HEAP[$inrate]; //@line 1245 "audioop.c"
        var $360=($358) - ($359); //@line 1245 "audioop.c"
        HEAP[$d]=$360; //@line 1245 "audioop.c"
        var $361=($360) >= 0; //@line 1232 "audioop.c"
        if ($361) { __lastLabel__ = 73; __label__ = 65; break; } else { __lastLabel__ = 73; __label__ = 64; break; } //@line 1232 "audioop.c"
      case 74: // $bb80thread_pre_split
        var $_pr3=HEAP[$d];
        var $362=($_pr3) >= 0; //@line 1232 "audioop.c"
        if ($362) { __lastLabel__ = 74; __label__ = 65; break; } else { __lastLabel__ = 74; __label__ = 64; break; } //@line 1232 "audioop.c"
      case 75: // $exit
        var $363=$prev_i; //@line 1249 "audioop.c"
        var $364=($363)!=0; //@line 1249 "audioop.c"
        if ($364) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 1249 "audioop.c"
      case 76: // $bb82
        var $365=$prev_i; //@line 1250 "audioop.c"
        var $366=$365; //@line 1250 "audioop.c"
        _free($366); //@line 1250 "audioop.c"
        __label__ = 77; break; //@line 1250 "audioop.c"
      case 77: // $bb83
        var $367=$cur_i; //@line 1251 "audioop.c"
        var $368=($367)!=0; //@line 1251 "audioop.c"
        if ($368) { __label__ = 78; break; } else { __label__ = 79; break; } //@line 1251 "audioop.c"
      case 78: // $bb84
        var $369=$cur_i; //@line 1252 "audioop.c"
        var $370=$369; //@line 1252 "audioop.c"
        _free($370); //@line 1252 "audioop.c"
        __label__ = 79; break; //@line 1252 "audioop.c"
      case 79: // $bb85
        var $371=$rv; //@line 1253 "audioop.c"
        $2=$371; //@line 1253 "audioop.c"
        __label__ = 80; break; //@line 1253 "audioop.c"
      case 80: // $bb86
        var $372=$2; //@line 1090 "audioop.c"
        $retval=$372; //@line 1090 "audioop.c"
        var $retval87=$retval; //@line 1090 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval87; //@line 1090 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_lin2ulaw($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i6;
        var $retval_i7;
        var $0;
        var $val_addr_i_i;
        var $table_addr_i_i;
        var $size_addr_i_i;
        var $retval_i_i;
        var $1;
        var $i_i_i;
        var $pcm_val_addr_i;
        var $retval_i1;
        var $2;
        var $mask_i;
        var $seg_i;
        var $uval_i;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $3;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $4;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 1261 "audioop.c"
        var $5=$args_addr; //@line 1265 "audioop.c"
        var $6=_PyArg_ParseTuple($5, __str39, $cp, $len, $size); //@line 1265 "audioop.c"
        var $7=($6)==0; //@line 1265 "audioop.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1265 "audioop.c"
      case 1: // $bb
        $4=0; //@line 1267 "audioop.c"
        __label__ = 32; break; //@line 1267 "audioop.c"
      case 2: // $bb1
        var $8=HEAP[$size]; //@line 1269 "audioop.c"
        var $9=HEAP[$len]; //@line 1269 "audioop.c"
        $len_addr_i=$9;
        $size_addr_i=$8;
        var $10=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i6=$10;
        var $11=$size_addr_i6; //@line 301 "audioop.c"
        var $12=($11)==1; //@line 301 "audioop.c"
        var $13=$size_addr_i6; //@line 301 "audioop.c"
        var $14=($13)==2; //@line 301 "audioop.c"
        var $or_cond_i=($12) | ($14);
        var $15=$size_addr_i6; //@line 301 "audioop.c"
        var $16=($15)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($16);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $17=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($17, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i7=0; //@line 303 "audioop.c"
        $3=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i7=1; //@line 303 "audioop.c"
        var $18=$len_addr_i; //@line 314 "audioop.c"
        var $19=$size_addr_i; //@line 314 "audioop.c"
        var $20=($18) % ($19); //@line 314 "audioop.c"
        var $21=($20)!=0; //@line 314 "audioop.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $22=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($22, __str1); //@line 315 "audioop.c"
        $3=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $4=0; //@line 1270 "audioop.c"
        __label__ = 32; break; //@line 1270 "audioop.c"
      case 7: // $bb3
        $3=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $23=HEAP[$len]; //@line 1272 "audioop.c"
        var $24=HEAP[$size]; //@line 1272 "audioop.c"
        var $25=((($23)/($24))|0); //@line 1272 "audioop.c"
        var $26=_PyString_FromStringAndSize(0, $25); //@line 1272 "audioop.c"
        $rv=$26; //@line 1272 "audioop.c"
        var $27=$rv; //@line 1273 "audioop.c"
        var $28=($27)==0; //@line 1273 "audioop.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1273 "audioop.c"
      case 8: // $bb4
        $4=0; //@line 1274 "audioop.c"
        __label__ = 32; break; //@line 1274 "audioop.c"
      case 9: // $bb5
        var $29=$rv; //@line 1275 "audioop.c"
        var $30=_PyString_AsString($29); //@line 1275 "audioop.c"
        $ncp=$30; //@line 1275 "audioop.c"
        $i=0; //@line 1277 "audioop.c"
        var $31=HEAP[$len]; //@line 1277 "audioop.c"
        var $32=$i; //@line 1277 "audioop.c"
        var $33=($32) < ($31); //@line 1277 "audioop.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 31; break; } //@line 1277 "audioop.c"
      case 10: // $bb6
        var $34=HEAP[$size]; //@line 1278 "audioop.c"
        var $35=($34)==1; //@line 1278 "audioop.c"
        if ($35) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1278 "audioop.c"
      case 11: // $bb7
        var $36=HEAP[$cp]; //@line 1278 "audioop.c"
        var $37=$i; //@line 1278 "audioop.c"
        var $38=$36+$37; //@line 1278 "audioop.c"
        var $39=HEAP[$38]; //@line 1278 "audioop.c"
        var $40=($39); //@line 1278 "audioop.c"
        var $41=($40) << 8; //@line 1278 "audioop.c"
        $val=$41; //@line 1278 "audioop.c"
        __label__ = 16; break; //@line 1278 "audioop.c"
      case 12: // $bb8
        var $42=HEAP[$size]; //@line 1279 "audioop.c"
        var $43=($42)==2; //@line 1279 "audioop.c"
        if ($43) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1279 "audioop.c"
      case 13: // $bb9
        var $44=HEAP[$cp]; //@line 1279 "audioop.c"
        var $45=$i; //@line 1279 "audioop.c"
        var $46=$44+$45; //@line 1279 "audioop.c"
        var $47=$46; //@line 1279 "audioop.c"
        var $48=HEAP[$47]; //@line 1279 "audioop.c"
        var $49=($48); //@line 1279 "audioop.c"
        $val=$49; //@line 1279 "audioop.c"
        __label__ = 16; break; //@line 1279 "audioop.c"
      case 14: // $bb10
        var $50=HEAP[$size]; //@line 1280 "audioop.c"
        var $51=($50)==4; //@line 1280 "audioop.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1280 "audioop.c"
      case 15: // $bb11
        var $52=HEAP[$cp]; //@line 1280 "audioop.c"
        var $53=$i; //@line 1280 "audioop.c"
        var $54=$52+$53; //@line 1280 "audioop.c"
        var $55=$54; //@line 1280 "audioop.c"
        var $56=HEAP[$55]; //@line 1280 "audioop.c"
        var $57=($56) >> 16; //@line 1280 "audioop.c"
        $val=$57; //@line 1280 "audioop.c"
        __label__ = 16; break; //@line 1280 "audioop.c"
      case 16: // $bb12
        var $58=$val; //@line 1282 "audioop.c"
        var $59=((($58)) & 65535); //@line 1282 "audioop.c"
        var $60=($59); //@line 1282 "audioop.c"
        var $61=((($60)) & 65535); //@line 1282 "audioop.c"
        $pcm_val_addr_i=$61;
        var $62=$pcm_val_addr_i; //@line 147 "audioop.c"
        var $63=($62) >> 2; //@line 147 "audioop.c"
        $pcm_val_addr_i=$63; //@line 147 "audioop.c"
        var $64=($63) < 0; //@line 151 "audioop.c"
        if ($64) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 151 "audioop.c"
      case 17: // $bb_i2
        var $65=$pcm_val_addr_i; //@line 152 "audioop.c"
        var $66=0 - ($65); //@line 152 "audioop.c"
        $pcm_val_addr_i=$66; //@line 152 "audioop.c"
        $mask_i=127; //@line 153 "audioop.c"
        __lastLabel__ = 17; __label__ = 19; break; //@line 153 "audioop.c"
      case 18: // $bb1_i3
        $mask_i=255; //@line 155 "audioop.c"
        var $_pr_i=$pcm_val_addr_i;
        __lastLabel__ = 18; __label__ = 19; break; //@line 155 "audioop.c"
      case 19: // $bb2_i4
        var $67=__lastLabel__ == 18 ? $_pr_i : ($66);
        var $68=($67) > 32635; //@line 157 "audioop.c"
        if ($68) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 157 "audioop.c"
      case 20: // $bb3_i5
        $pcm_val_addr_i=32635; //@line 157 "audioop.c"
        __label__ = 21; break; //@line 157 "audioop.c"
      case 21: // $bb4_i
        var $69=$pcm_val_addr_i; //@line 158 "audioop.c"
        var $70=($69) + 33; //@line 158 "audioop.c"
        $pcm_val_addr_i=$70; //@line 158 "audioop.c"
        var $71=$pcm_val_addr_i; //@line 161 "audioop.c"
        var $72=($71); //@line 161 "audioop.c"
        var $73=((($72)) & 65535); //@line 161 "audioop.c"
        $val_addr_i_i=$73;
        $table_addr_i_i=_seg_uend;
        $size_addr_i_i=8;
        $i_i_i=0; //@line 58 "audioop.c"
        __label__ = 25; break; //@line 58 "audioop.c"
      case 22: // $bb_i_i
        var $74=$table_addr_i_i; //@line 59 "audioop.c"
        var $75=HEAP[$74]; //@line 59 "audioop.c"
        var $76=$val_addr_i_i; //@line 59 "audioop.c"
        var $77=($75) >= ($76); //@line 59 "audioop.c"
        var $78=($77); //@line 59 "audioop.c"
        var $79=$table_addr_i_i; //@line 59 "audioop.c"
        var $80=$79+2; //@line 59 "audioop.c"
        $table_addr_i_i=$80; //@line 59 "audioop.c"
        var $toBool_i_i=($78)!=0; //@line 59 "audioop.c"
        var $81=$i_i_i; //@line 60 "audioop.c"
        if ($toBool_i_i) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 59 "audioop.c"
      case 23: // $bb1_i_i
        var $82=((($81)) & 65535); //@line 60 "audioop.c"
        var $83=($82); //@line 60 "audioop.c"
        $1=$83; //@line 60 "audioop.c"
        __label__ = 27; break; //@line 60 "audioop.c"
      case 24: // $bb2_i_i
        var $84=($81) + 1; //@line 58 "audioop.c"
        $i_i_i=$84; //@line 58 "audioop.c"
        __label__ = 25; break; //@line 58 "audioop.c"
      case 25: // $bb3_i_i
        var $85=$i_i_i; //@line 58 "audioop.c"
        var $86=$size_addr_i_i; //@line 58 "audioop.c"
        var $87=($85) < ($86); //@line 58 "audioop.c"
        if ($87) { __label__ = 22; break; } else { __label__ = 26; break; } //@line 58 "audioop.c"
      case 26: // $bb4_i_i
        var $88=$size_addr_i_i; //@line 62 "audioop.c"
        var $89=((($88)) & 65535); //@line 62 "audioop.c"
        var $90=($89); //@line 62 "audioop.c"
        $1=$90; //@line 62 "audioop.c"
        __label__ = 27; break; //@line 62 "audioop.c"
      case 27: // $search_exit_i
        var $91=$1; //@line 60 "audioop.c"
        $retval_i_i=$91; //@line 60 "audioop.c"
        var $retval6_i_i=$retval_i_i; //@line 60 "audioop.c"
        var $retval67_i_i=((($retval6_i_i)) & 65535); //@line 60 "audioop.c"
        $seg_i=$retval67_i_i; //@line 161 "audioop.c"
        var $92=($retval67_i_i) > 7; //@line 167 "audioop.c"
        if ($92) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 167 "audioop.c"
      case 28: // $bb5_i
        var $93=$mask_i; //@line 168 "audioop.c"
        var $94=((($93)) & 255); //@line 168 "audioop.c"
        var $95=($94) ^ 127; //@line 168 "audioop.c"
        var $96=($95); //@line 168 "audioop.c"
        $2=$96; //@line 168 "audioop.c"
        __label__ = 30; break; //@line 168 "audioop.c"
      case 29: // $bb6_i
        var $97=$seg_i; //@line 170 "audioop.c"
        var $98=((($97)) & 255); //@line 170 "audioop.c"
        var $99=($98) << 4; //@line 170 "audioop.c"
        var $100=$pcm_val_addr_i; //@line 170 "audioop.c"
        var $101=($100); //@line 170 "audioop.c"
        var $102=$seg_i; //@line 170 "audioop.c"
        var $103=($102); //@line 170 "audioop.c"
        var $104=($103) + 1; //@line 170 "audioop.c"
        var $105=($101) >> ($104); //@line 170 "audioop.c"
        var $106=((($105)) & 255); //@line 170 "audioop.c"
        var $107=($106) & 15; //@line 170 "audioop.c"
        var $108=($107) | ($99); //@line 170 "audioop.c"
        $uval_i=$108; //@line 170 "audioop.c"
        var $109=$mask_i; //@line 171 "audioop.c"
        var $110=((($109)) & 255); //@line 171 "audioop.c"
        var $111=$uval_i; //@line 171 "audioop.c"
        var $112=($110) ^ ($111); //@line 171 "audioop.c"
        var $113=($112); //@line 171 "audioop.c"
        $2=$113; //@line 171 "audioop.c"
        __label__ = 30; break; //@line 171 "audioop.c"
      case 30: // $st_14linear2ulaw_exit
        var $114=$2; //@line 168 "audioop.c"
        $retval_i1=$114; //@line 168 "audioop.c"
        var $retval8_i=$retval_i1; //@line 168 "audioop.c"
        var $retval89_i=((($retval8_i)) & 255); //@line 168 "audioop.c"
        var $115=$ncp; //@line 1282 "audioop.c"
        HEAP[$115]=$retval89_i; //@line 1282 "audioop.c"
        var $116=$ncp; //@line 1282 "audioop.c"
        var $117=$116+1; //@line 1282 "audioop.c"
        $ncp=$117; //@line 1282 "audioop.c"
        var $118=HEAP[$size]; //@line 1277 "audioop.c"
        var $119=$i; //@line 1277 "audioop.c"
        var $120=($119) + ($118); //@line 1277 "audioop.c"
        $i=$120; //@line 1277 "audioop.c"
        var $121=HEAP[$len]; //@line 1277 "audioop.c"
        var $122=$i; //@line 1277 "audioop.c"
        var $123=($122) < ($121); //@line 1277 "audioop.c"
        if ($123) { __label__ = 10; break; } else { __label__ = 31; break; } //@line 1277 "audioop.c"
      case 31: // $bb14
        var $124=$rv; //@line 1284 "audioop.c"
        $4=$124; //@line 1284 "audioop.c"
        __label__ = 32; break; //@line 1284 "audioop.c"
      case 32: // $bb15
        var $125=$4; //@line 1267 "audioop.c"
        $retval=$125; //@line 1267 "audioop.c"
        var $retval16=$retval; //@line 1267 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1267 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_ulaw2lin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $cval;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        var $3=$args_addr; //@line 1297 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str40, $cp, $len, $size); //@line 1297 "audioop.c"
        var $5=($4)==0; //@line 1297 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1297 "audioop.c"
      case 1: // $bb
        $2=0; //@line 1299 "audioop.c"
        __label__ = 20; break; //@line 1299 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 1301 "audioop.c"
        var $7=HEAP[$len]; //@line 1301 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 1302 "audioop.c"
        __label__ = 20; break; //@line 1302 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$size]; //@line 1304 "audioop.c"
        var $22=((2147483647/($21))|0); //@line 1304 "audioop.c"
        var $23=HEAP[$len]; //@line 1304 "audioop.c"
        var $24=($22) < ($23); //@line 1304 "audioop.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1304 "audioop.c"
      case 8: // $bb4
        var $25=HEAP[_PyExc_MemoryError]; //@line 1305 "audioop.c"
        _PyErr_SetString($25, __str23); //@line 1305 "audioop.c"
        $2=0; //@line 1307 "audioop.c"
        __label__ = 20; break; //@line 1307 "audioop.c"
      case 9: // $bb5
        var $26=HEAP[$len]; //@line 1309 "audioop.c"
        var $27=HEAP[$size]; //@line 1309 "audioop.c"
        var $28=($27) * ($26); //@line 1309 "audioop.c"
        var $29=_PyString_FromStringAndSize(0, $28); //@line 1309 "audioop.c"
        $rv=$29; //@line 1309 "audioop.c"
        var $30=$rv; //@line 1310 "audioop.c"
        var $31=($30)==0; //@line 1310 "audioop.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1310 "audioop.c"
      case 10: // $bb6
        $2=0; //@line 1311 "audioop.c"
        __label__ = 20; break; //@line 1311 "audioop.c"
      case 11: // $bb7
        var $32=$rv; //@line 1312 "audioop.c"
        var $33=_PyString_AsString($32); //@line 1312 "audioop.c"
        $ncp=$33; //@line 1312 "audioop.c"
        $i=0; //@line 1314 "audioop.c"
        var $34=HEAP[$len]; //@line 1314 "audioop.c"
        var $35=HEAP[$size]; //@line 1314 "audioop.c"
        var $36=($35) * ($34); //@line 1314 "audioop.c"
        var $37=$i; //@line 1314 "audioop.c"
        var $38=($36) > ($37); //@line 1314 "audioop.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 19; break; } //@line 1314 "audioop.c"
      case 12: // $bb8
        var $39=HEAP[$cp]; //@line 1315 "audioop.c"
        var $40=HEAP[$39]; //@line 1315 "audioop.c"
        $cval=$40; //@line 1315 "audioop.c"
        var $41=$39+1; //@line 1315 "audioop.c"
        HEAP[$cp]=$41; //@line 1315 "audioop.c"
        var $42=$cval; //@line 1316 "audioop.c"
        var $43=($42); //@line 1316 "audioop.c"
        var $44=__st_ulaw2linear16+$43*2; //@line 1316 "audioop.c"
        var $45=HEAP[$44]; //@line 1316 "audioop.c"
        var $46=($45); //@line 1316 "audioop.c"
        $val=$46; //@line 1316 "audioop.c"
        var $47=HEAP[$size]; //@line 1318 "audioop.c"
        var $48=($47)==1; //@line 1318 "audioop.c"
        if ($48) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1318 "audioop.c"
      case 13: // $bb9
        var $49=$val; //@line 1318 "audioop.c"
        var $50=($49) >> 8; //@line 1318 "audioop.c"
        var $51=((($50)) & 255); //@line 1318 "audioop.c"
        var $52=$ncp; //@line 1318 "audioop.c"
        var $53=$i; //@line 1318 "audioop.c"
        var $54=$52+$53; //@line 1318 "audioop.c"
        HEAP[$54]=$51; //@line 1318 "audioop.c"
        __label__ = 18; break; //@line 1318 "audioop.c"
      case 14: // $bb10
        var $55=HEAP[$size]; //@line 1319 "audioop.c"
        var $56=($55)==2; //@line 1319 "audioop.c"
        if ($56) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1319 "audioop.c"
      case 15: // $bb11
        var $57=$ncp; //@line 1319 "audioop.c"
        var $58=$i; //@line 1319 "audioop.c"
        var $59=$57+$58; //@line 1319 "audioop.c"
        var $60=$59; //@line 1319 "audioop.c"
        var $61=$val; //@line 1319 "audioop.c"
        var $62=((($61)) & 65535); //@line 1319 "audioop.c"
        HEAP[$60]=$62; //@line 1319 "audioop.c"
        __label__ = 18; break; //@line 1319 "audioop.c"
      case 16: // $bb12
        var $63=HEAP[$size]; //@line 1320 "audioop.c"
        var $64=($63)==4; //@line 1320 "audioop.c"
        if ($64) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1320 "audioop.c"
      case 17: // $bb13
        var $65=$ncp; //@line 1320 "audioop.c"
        var $66=$i; //@line 1320 "audioop.c"
        var $67=$65+$66; //@line 1320 "audioop.c"
        var $68=$67; //@line 1320 "audioop.c"
        var $69=$val; //@line 1320 "audioop.c"
        var $70=($69) << 16; //@line 1320 "audioop.c"
        HEAP[$68]=$70; //@line 1320 "audioop.c"
        __label__ = 18; break; //@line 1320 "audioop.c"
      case 18: // $bb14
        var $71=HEAP[$size]; //@line 1314 "audioop.c"
        var $72=$i; //@line 1314 "audioop.c"
        var $73=($72) + ($71); //@line 1314 "audioop.c"
        $i=$73; //@line 1314 "audioop.c"
        var $74=HEAP[$len]; //@line 1314 "audioop.c"
        var $75=HEAP[$size]; //@line 1314 "audioop.c"
        var $76=($75) * ($74); //@line 1314 "audioop.c"
        var $77=$i; //@line 1314 "audioop.c"
        var $78=($76) > ($77); //@line 1314 "audioop.c"
        if ($78) { __label__ = 12; break; } else { __label__ = 19; break; } //@line 1314 "audioop.c"
      case 19: // $bb16
        var $79=$rv; //@line 1322 "audioop.c"
        $2=$79; //@line 1322 "audioop.c"
        __label__ = 20; break; //@line 1322 "audioop.c"
      case 20: // $bb17
        var $80=$2; //@line 1299 "audioop.c"
        $retval=$80; //@line 1299 "audioop.c"
        var $retval18=$retval; //@line 1299 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1299 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_lin2alaw($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i6;
        var $retval_i7;
        var $0;
        var $val_addr_i_i;
        var $table_addr_i_i;
        var $size_addr_i_i;
        var $retval_i_i;
        var $1;
        var $i_i_i;
        var $pcm_val_addr_i;
        var $retval_i1;
        var $2;
        var $mask_i;
        var $seg_i;
        var $aval_i;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $3;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $4;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 1330 "audioop.c"
        var $5=$args_addr; //@line 1334 "audioop.c"
        var $6=_PyArg_ParseTuple($5, __str41, $cp, $len, $size); //@line 1334 "audioop.c"
        var $7=($6)==0; //@line 1334 "audioop.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1334 "audioop.c"
      case 1: // $bb
        $4=0; //@line 1336 "audioop.c"
        __label__ = 33; break; //@line 1336 "audioop.c"
      case 2: // $bb1
        var $8=HEAP[$size]; //@line 1338 "audioop.c"
        var $9=HEAP[$len]; //@line 1338 "audioop.c"
        $len_addr_i=$9;
        $size_addr_i=$8;
        var $10=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i6=$10;
        var $11=$size_addr_i6; //@line 301 "audioop.c"
        var $12=($11)==1; //@line 301 "audioop.c"
        var $13=$size_addr_i6; //@line 301 "audioop.c"
        var $14=($13)==2; //@line 301 "audioop.c"
        var $or_cond_i=($12) | ($14);
        var $15=$size_addr_i6; //@line 301 "audioop.c"
        var $16=($15)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($16);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $17=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($17, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i7=0; //@line 303 "audioop.c"
        $3=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i7=1; //@line 303 "audioop.c"
        var $18=$len_addr_i; //@line 314 "audioop.c"
        var $19=$size_addr_i; //@line 314 "audioop.c"
        var $20=($18) % ($19); //@line 314 "audioop.c"
        var $21=($20)!=0; //@line 314 "audioop.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $22=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($22, __str1); //@line 315 "audioop.c"
        $3=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $4=0; //@line 1339 "audioop.c"
        __label__ = 33; break; //@line 1339 "audioop.c"
      case 7: // $bb3
        $3=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $23=HEAP[$len]; //@line 1341 "audioop.c"
        var $24=HEAP[$size]; //@line 1341 "audioop.c"
        var $25=((($23)/($24))|0); //@line 1341 "audioop.c"
        var $26=_PyString_FromStringAndSize(0, $25); //@line 1341 "audioop.c"
        $rv=$26; //@line 1341 "audioop.c"
        var $27=$rv; //@line 1342 "audioop.c"
        var $28=($27)==0; //@line 1342 "audioop.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1342 "audioop.c"
      case 8: // $bb4
        $4=0; //@line 1343 "audioop.c"
        __label__ = 33; break; //@line 1343 "audioop.c"
      case 9: // $bb5
        var $29=$rv; //@line 1344 "audioop.c"
        var $30=_PyString_AsString($29); //@line 1344 "audioop.c"
        $ncp=$30; //@line 1344 "audioop.c"
        $i=0; //@line 1346 "audioop.c"
        var $31=HEAP[$len]; //@line 1346 "audioop.c"
        var $32=$i; //@line 1346 "audioop.c"
        var $33=($32) < ($31); //@line 1346 "audioop.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 32; break; } //@line 1346 "audioop.c"
      case 10: // $bb6
        var $34=HEAP[$size]; //@line 1347 "audioop.c"
        var $35=($34)==1; //@line 1347 "audioop.c"
        if ($35) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1347 "audioop.c"
      case 11: // $bb7
        var $36=HEAP[$cp]; //@line 1347 "audioop.c"
        var $37=$i; //@line 1347 "audioop.c"
        var $38=$36+$37; //@line 1347 "audioop.c"
        var $39=HEAP[$38]; //@line 1347 "audioop.c"
        var $40=($39); //@line 1347 "audioop.c"
        var $41=($40) << 8; //@line 1347 "audioop.c"
        $val=$41; //@line 1347 "audioop.c"
        __label__ = 16; break; //@line 1347 "audioop.c"
      case 12: // $bb8
        var $42=HEAP[$size]; //@line 1348 "audioop.c"
        var $43=($42)==2; //@line 1348 "audioop.c"
        if ($43) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1348 "audioop.c"
      case 13: // $bb9
        var $44=HEAP[$cp]; //@line 1348 "audioop.c"
        var $45=$i; //@line 1348 "audioop.c"
        var $46=$44+$45; //@line 1348 "audioop.c"
        var $47=$46; //@line 1348 "audioop.c"
        var $48=HEAP[$47]; //@line 1348 "audioop.c"
        var $49=($48); //@line 1348 "audioop.c"
        $val=$49; //@line 1348 "audioop.c"
        __label__ = 16; break; //@line 1348 "audioop.c"
      case 14: // $bb10
        var $50=HEAP[$size]; //@line 1349 "audioop.c"
        var $51=($50)==4; //@line 1349 "audioop.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1349 "audioop.c"
      case 15: // $bb11
        var $52=HEAP[$cp]; //@line 1349 "audioop.c"
        var $53=$i; //@line 1349 "audioop.c"
        var $54=$52+$53; //@line 1349 "audioop.c"
        var $55=$54; //@line 1349 "audioop.c"
        var $56=HEAP[$55]; //@line 1349 "audioop.c"
        var $57=($56) >> 16; //@line 1349 "audioop.c"
        $val=$57; //@line 1349 "audioop.c"
        __label__ = 16; break; //@line 1349 "audioop.c"
      case 16: // $bb12
        var $58=$val; //@line 1351 "audioop.c"
        var $59=((($58)) & 65535); //@line 1351 "audioop.c"
        var $60=($59); //@line 1351 "audioop.c"
        var $61=((($60)) & 65535); //@line 1351 "audioop.c"
        $pcm_val_addr_i=$61;
        var $62=$pcm_val_addr_i; //@line 244 "audioop.c"
        var $63=($62) >> 3; //@line 244 "audioop.c"
        $pcm_val_addr_i=$63; //@line 244 "audioop.c"
        var $64=($63) >= 0; //@line 247 "audioop.c"
        if ($64) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 247 "audioop.c"
      case 17: // $bb_i2
        $mask_i=213; //@line 248 "audioop.c"
        __label__ = 19; break; //@line 248 "audioop.c"
      case 18: // $bb1_i3
        $mask_i=85; //@line 250 "audioop.c"
        var $65=$pcm_val_addr_i; //@line 251 "audioop.c"
        var $not_i=($65) ^ -1; //@line 251 "audioop.c"
        $pcm_val_addr_i=$not_i; //@line 251 "audioop.c"
        __label__ = 19; break; //@line 251 "audioop.c"
      case 19: // $bb2_i4
        var $66=$pcm_val_addr_i; //@line 255 "audioop.c"
        var $67=($66); //@line 255 "audioop.c"
        var $68=((($67)) & 65535); //@line 255 "audioop.c"
        $val_addr_i_i=$68;
        $table_addr_i_i=_seg_aend;
        $size_addr_i_i=8;
        $i_i_i=0; //@line 58 "audioop.c"
        __label__ = 23; break; //@line 58 "audioop.c"
      case 20: // $bb_i_i
        var $69=$table_addr_i_i; //@line 59 "audioop.c"
        var $70=HEAP[$69]; //@line 59 "audioop.c"
        var $71=$val_addr_i_i; //@line 59 "audioop.c"
        var $72=($70) >= ($71); //@line 59 "audioop.c"
        var $73=($72); //@line 59 "audioop.c"
        var $74=$table_addr_i_i; //@line 59 "audioop.c"
        var $75=$74+2; //@line 59 "audioop.c"
        $table_addr_i_i=$75; //@line 59 "audioop.c"
        var $toBool_i_i=($73)!=0; //@line 59 "audioop.c"
        var $76=$i_i_i; //@line 60 "audioop.c"
        if ($toBool_i_i) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 59 "audioop.c"
      case 21: // $bb1_i_i
        var $77=((($76)) & 65535); //@line 60 "audioop.c"
        var $78=($77); //@line 60 "audioop.c"
        $1=$78; //@line 60 "audioop.c"
        __label__ = 25; break; //@line 60 "audioop.c"
      case 22: // $bb2_i_i
        var $79=($76) + 1; //@line 58 "audioop.c"
        $i_i_i=$79; //@line 58 "audioop.c"
        __label__ = 23; break; //@line 58 "audioop.c"
      case 23: // $bb3_i_i
        var $80=$i_i_i; //@line 58 "audioop.c"
        var $81=$size_addr_i_i; //@line 58 "audioop.c"
        var $82=($80) < ($81); //@line 58 "audioop.c"
        if ($82) { __label__ = 20; break; } else { __label__ = 24; break; } //@line 58 "audioop.c"
      case 24: // $bb4_i_i
        var $83=$size_addr_i_i; //@line 62 "audioop.c"
        var $84=((($83)) & 65535); //@line 62 "audioop.c"
        var $85=($84); //@line 62 "audioop.c"
        $1=$85; //@line 62 "audioop.c"
        __label__ = 25; break; //@line 62 "audioop.c"
      case 25: // $search_exit_i
        var $86=$1; //@line 60 "audioop.c"
        $retval_i_i=$86; //@line 60 "audioop.c"
        var $retval6_i_i=$retval_i_i; //@line 60 "audioop.c"
        var $retval67_i_i=((($retval6_i_i)) & 65535); //@line 60 "audioop.c"
        $seg_i=$retval67_i_i; //@line 255 "audioop.c"
        var $87=($retval67_i_i) > 7; //@line 259 "audioop.c"
        if ($87) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 259 "audioop.c"
      case 26: // $bb3_i5
        var $88=$mask_i; //@line 260 "audioop.c"
        var $89=((($88)) & 255); //@line 260 "audioop.c"
        var $90=($89) ^ 127; //@line 260 "audioop.c"
        var $91=($90); //@line 260 "audioop.c"
        $2=$91; //@line 260 "audioop.c"
        __label__ = 31; break; //@line 260 "audioop.c"
      case 27: // $bb4_i
        var $92=$seg_i; //@line 262 "audioop.c"
        var $93=((($92)) & 255); //@line 262 "audioop.c"
        var $94=($93) << 4; //@line 262 "audioop.c"
        $aval_i=$94; //@line 262 "audioop.c"
        var $95=$seg_i; //@line 263 "audioop.c"
        var $96=($95) <= 1; //@line 263 "audioop.c"
        var $97=$pcm_val_addr_i; //@line 264 "audioop.c"
        if ($96) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 263 "audioop.c"
      case 28: // $bb5_i
        var $98=($97) >> 1; //@line 264 "audioop.c"
        var $99=((($98)) & 255); //@line 264 "audioop.c"
        var $100=($99) & 15; //@line 264 "audioop.c"
        var $101=$aval_i; //@line 264 "audioop.c"
        var $102=($101) | ($100); //@line 264 "audioop.c"
        $aval_i=$102; //@line 264 "audioop.c"
        __label__ = 30; break; //@line 264 "audioop.c"
      case 29: // $bb6_i
        var $103=($97); //@line 266 "audioop.c"
        var $104=$seg_i; //@line 266 "audioop.c"
        var $105=($104); //@line 266 "audioop.c"
        var $106=($103) >> ($105); //@line 266 "audioop.c"
        var $107=((($106)) & 255); //@line 266 "audioop.c"
        var $108=($107) & 15; //@line 266 "audioop.c"
        var $109=$aval_i; //@line 266 "audioop.c"
        var $110=($108) | ($109); //@line 266 "audioop.c"
        $aval_i=$110; //@line 266 "audioop.c"
        __label__ = 30; break; //@line 266 "audioop.c"
      case 30: // $bb7_i
        var $111=$mask_i; //@line 267 "audioop.c"
        var $112=((($111)) & 255); //@line 267 "audioop.c"
        var $113=$aval_i; //@line 267 "audioop.c"
        var $114=($112) ^ ($113); //@line 267 "audioop.c"
        var $115=($114); //@line 267 "audioop.c"
        $2=$115; //@line 267 "audioop.c"
        __label__ = 31; break; //@line 267 "audioop.c"
      case 31: // $st_linear2alaw_exit
        var $116=$2; //@line 260 "audioop.c"
        $retval_i1=$116; //@line 260 "audioop.c"
        var $retval9_i=$retval_i1; //@line 260 "audioop.c"
        var $retval910_i=((($retval9_i)) & 255); //@line 260 "audioop.c"
        var $117=$ncp; //@line 1351 "audioop.c"
        HEAP[$117]=$retval910_i; //@line 1351 "audioop.c"
        var $118=$ncp; //@line 1351 "audioop.c"
        var $119=$118+1; //@line 1351 "audioop.c"
        $ncp=$119; //@line 1351 "audioop.c"
        var $120=HEAP[$size]; //@line 1346 "audioop.c"
        var $121=$i; //@line 1346 "audioop.c"
        var $122=($121) + ($120); //@line 1346 "audioop.c"
        $i=$122; //@line 1346 "audioop.c"
        var $123=HEAP[$len]; //@line 1346 "audioop.c"
        var $124=$i; //@line 1346 "audioop.c"
        var $125=($124) < ($123); //@line 1346 "audioop.c"
        if ($125) { __label__ = 10; break; } else { __label__ = 32; break; } //@line 1346 "audioop.c"
      case 32: // $bb14
        var $126=$rv; //@line 1353 "audioop.c"
        $4=$126; //@line 1353 "audioop.c"
        __label__ = 33; break; //@line 1353 "audioop.c"
      case 33: // $bb15
        var $127=$4; //@line 1336 "audioop.c"
        $retval=$127; //@line 1336 "audioop.c"
        var $retval16=$retval; //@line 1336 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1336 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_alaw2lin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $cval;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        var $3=$args_addr; //@line 1366 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str42, $cp, $len, $size); //@line 1366 "audioop.c"
        var $5=($4)==0; //@line 1366 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1366 "audioop.c"
      case 1: // $bb
        $2=0; //@line 1368 "audioop.c"
        __label__ = 20; break; //@line 1368 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 1370 "audioop.c"
        var $7=HEAP[$len]; //@line 1370 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 1371 "audioop.c"
        __label__ = 20; break; //@line 1371 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$size]; //@line 1373 "audioop.c"
        var $22=((2147483647/($21))|0); //@line 1373 "audioop.c"
        var $23=HEAP[$len]; //@line 1373 "audioop.c"
        var $24=($22) < ($23); //@line 1373 "audioop.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1373 "audioop.c"
      case 8: // $bb4
        var $25=HEAP[_PyExc_MemoryError]; //@line 1374 "audioop.c"
        _PyErr_SetString($25, __str23); //@line 1374 "audioop.c"
        $2=0; //@line 1376 "audioop.c"
        __label__ = 20; break; //@line 1376 "audioop.c"
      case 9: // $bb5
        var $26=HEAP[$len]; //@line 1378 "audioop.c"
        var $27=HEAP[$size]; //@line 1378 "audioop.c"
        var $28=($27) * ($26); //@line 1378 "audioop.c"
        var $29=_PyString_FromStringAndSize(0, $28); //@line 1378 "audioop.c"
        $rv=$29; //@line 1378 "audioop.c"
        var $30=$rv; //@line 1379 "audioop.c"
        var $31=($30)==0; //@line 1379 "audioop.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1379 "audioop.c"
      case 10: // $bb6
        $2=0; //@line 1380 "audioop.c"
        __label__ = 20; break; //@line 1380 "audioop.c"
      case 11: // $bb7
        var $32=$rv; //@line 1381 "audioop.c"
        var $33=_PyString_AsString($32); //@line 1381 "audioop.c"
        $ncp=$33; //@line 1381 "audioop.c"
        $i=0; //@line 1383 "audioop.c"
        var $34=HEAP[$len]; //@line 1383 "audioop.c"
        var $35=HEAP[$size]; //@line 1383 "audioop.c"
        var $36=($35) * ($34); //@line 1383 "audioop.c"
        var $37=$i; //@line 1383 "audioop.c"
        var $38=($36) > ($37); //@line 1383 "audioop.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 19; break; } //@line 1383 "audioop.c"
      case 12: // $bb8
        var $39=HEAP[$cp]; //@line 1384 "audioop.c"
        var $40=HEAP[$39]; //@line 1384 "audioop.c"
        $cval=$40; //@line 1384 "audioop.c"
        var $41=$39+1; //@line 1384 "audioop.c"
        HEAP[$cp]=$41; //@line 1384 "audioop.c"
        var $42=$cval; //@line 1385 "audioop.c"
        var $43=($42); //@line 1385 "audioop.c"
        var $44=__st_alaw2linear16+$43*2; //@line 1385 "audioop.c"
        var $45=HEAP[$44]; //@line 1385 "audioop.c"
        var $46=($45); //@line 1385 "audioop.c"
        $val=$46; //@line 1385 "audioop.c"
        var $47=HEAP[$size]; //@line 1387 "audioop.c"
        var $48=($47)==1; //@line 1387 "audioop.c"
        if ($48) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1387 "audioop.c"
      case 13: // $bb9
        var $49=$val; //@line 1387 "audioop.c"
        var $50=($49) >> 8; //@line 1387 "audioop.c"
        var $51=((($50)) & 255); //@line 1387 "audioop.c"
        var $52=$ncp; //@line 1387 "audioop.c"
        var $53=$i; //@line 1387 "audioop.c"
        var $54=$52+$53; //@line 1387 "audioop.c"
        HEAP[$54]=$51; //@line 1387 "audioop.c"
        __label__ = 18; break; //@line 1387 "audioop.c"
      case 14: // $bb10
        var $55=HEAP[$size]; //@line 1388 "audioop.c"
        var $56=($55)==2; //@line 1388 "audioop.c"
        if ($56) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1388 "audioop.c"
      case 15: // $bb11
        var $57=$ncp; //@line 1388 "audioop.c"
        var $58=$i; //@line 1388 "audioop.c"
        var $59=$57+$58; //@line 1388 "audioop.c"
        var $60=$59; //@line 1388 "audioop.c"
        var $61=$val; //@line 1388 "audioop.c"
        var $62=((($61)) & 65535); //@line 1388 "audioop.c"
        HEAP[$60]=$62; //@line 1388 "audioop.c"
        __label__ = 18; break; //@line 1388 "audioop.c"
      case 16: // $bb12
        var $63=HEAP[$size]; //@line 1389 "audioop.c"
        var $64=($63)==4; //@line 1389 "audioop.c"
        if ($64) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1389 "audioop.c"
      case 17: // $bb13
        var $65=$ncp; //@line 1389 "audioop.c"
        var $66=$i; //@line 1389 "audioop.c"
        var $67=$65+$66; //@line 1389 "audioop.c"
        var $68=$67; //@line 1389 "audioop.c"
        var $69=$val; //@line 1389 "audioop.c"
        var $70=($69) << 16; //@line 1389 "audioop.c"
        HEAP[$68]=$70; //@line 1389 "audioop.c"
        __label__ = 18; break; //@line 1389 "audioop.c"
      case 18: // $bb14
        var $71=HEAP[$size]; //@line 1383 "audioop.c"
        var $72=$i; //@line 1383 "audioop.c"
        var $73=($72) + ($71); //@line 1383 "audioop.c"
        $i=$73; //@line 1383 "audioop.c"
        var $74=HEAP[$len]; //@line 1383 "audioop.c"
        var $75=HEAP[$size]; //@line 1383 "audioop.c"
        var $76=($75) * ($74); //@line 1383 "audioop.c"
        var $77=$i; //@line 1383 "audioop.c"
        var $78=($76) > ($77); //@line 1383 "audioop.c"
        if ($78) { __label__ = 12; break; } else { __label__ = 19; break; } //@line 1383 "audioop.c"
      case 19: // $bb16
        var $79=$rv; //@line 1391 "audioop.c"
        $2=$79; //@line 1391 "audioop.c"
        __label__ = 20; break; //@line 1391 "audioop.c"
      case 20: // $bb17
        var $80=$2; //@line 1368 "audioop.c"
        $retval=$80; //@line 1368 "audioop.c"
        var $retval18=$retval; //@line 1368 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1368 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_lin2adpcm($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_511;
        var $2;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $step;
        var $valpred=__stackBase__+12;
        var $delta;
        var $index=__stackBase__+16;
        var $sign;
        var $vpdiff;
        var $diff;
        var $rv;
        var $state=__stackBase__+20;
        var $str;
        var $i;
        var $outputbuffer;
        var $bufferstep;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 1399 "audioop.c"
        $outputbuffer=0; //@line 1402 "audioop.c"
        var $3=$args_addr; //@line 1404 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str43, $cp, $len, $size, $state); //@line 1404 "audioop.c"
        var $5=($4)==0; //@line 1404 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1404 "audioop.c"
      case 1: // $bb
        $2=0; //@line 1406 "audioop.c"
        __label__ = 47; break; //@line 1406 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 1408 "audioop.c"
        var $7=HEAP[$len]; //@line 1408 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 1409 "audioop.c"
        __label__ = 47; break; //@line 1409 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$len]; //@line 1411 "audioop.c"
        var $22=HEAP[$size]; //@line 1411 "audioop.c"
        var $23=($22) * 2; //@line 1411 "audioop.c"
        var $24=((($21)/($23))|0); //@line 1411 "audioop.c"
        var $25=_PyString_FromStringAndSize(0, $24); //@line 1411 "audioop.c"
        $str=$25; //@line 1411 "audioop.c"
        var $26=$str; //@line 1412 "audioop.c"
        var $27=($26)==0; //@line 1412 "audioop.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1412 "audioop.c"
      case 8: // $bb4
        $2=0; //@line 1413 "audioop.c"
        __label__ = 47; break; //@line 1413 "audioop.c"
      case 9: // $bb5
        var $28=$str; //@line 1414 "audioop.c"
        var $29=_PyString_AsString($28); //@line 1414 "audioop.c"
        $ncp=$29; //@line 1414 "audioop.c"
        var $30=HEAP[$state]; //@line 1417 "audioop.c"
        var $31=($30)==(__Py_NoneStruct); //@line 1417 "audioop.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1417 "audioop.c"
      case 10: // $bb6
        HEAP[$valpred]=0; //@line 1419 "audioop.c"
        HEAP[$index]=0; //@line 1420 "audioop.c"
        __label__ = 13; break; //@line 1420 "audioop.c"
      case 11: // $bb7
        var $32=HEAP[$state]; //@line 1421 "audioop.c"
        var $33=_PyArg_ParseTuple($32, __str44, $valpred, $index); //@line 1421 "audioop.c"
        var $34=($33)==0; //@line 1421 "audioop.c"
        if ($34) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1421 "audioop.c"
      case 12: // $bb8
        $2=0; //@line 1422 "audioop.c"
        __label__ = 47; break; //@line 1422 "audioop.c"
      case 13: // $bb9
        var $35=HEAP[$index]; //@line 1424 "audioop.c"
        var $36=_stepsizeTable+$35*4; //@line 1424 "audioop.c"
        var $37=HEAP[$36]; //@line 1424 "audioop.c"
        $step=$37; //@line 1424 "audioop.c"
        $bufferstep=1; //@line 1425 "audioop.c"
        $i=0; //@line 1427 "audioop.c"
        var $38=HEAP[$len]; //@line 1427 "audioop.c"
        var $39=$i; //@line 1427 "audioop.c"
        var $40=($39) < ($38); //@line 1427 "audioop.c"
        if ($40) { __label__ = 14; break; } else { __label__ = 44; break; } //@line 1427 "audioop.c"
      case 14: // $bb10
        var $41=HEAP[$size]; //@line 1428 "audioop.c"
        var $42=($41)==1; //@line 1428 "audioop.c"
        if ($42) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1428 "audioop.c"
      case 15: // $bb11
        var $43=HEAP[$cp]; //@line 1428 "audioop.c"
        var $44=$i; //@line 1428 "audioop.c"
        var $45=$43+$44; //@line 1428 "audioop.c"
        var $46=HEAP[$45]; //@line 1428 "audioop.c"
        var $47=($46); //@line 1428 "audioop.c"
        var $48=($47) << 8; //@line 1428 "audioop.c"
        $val=$48; //@line 1428 "audioop.c"
        __label__ = 20; break; //@line 1428 "audioop.c"
      case 16: // $bb12
        var $49=HEAP[$size]; //@line 1429 "audioop.c"
        var $50=($49)==2; //@line 1429 "audioop.c"
        if ($50) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1429 "audioop.c"
      case 17: // $bb13
        var $51=HEAP[$cp]; //@line 1429 "audioop.c"
        var $52=$i; //@line 1429 "audioop.c"
        var $53=$51+$52; //@line 1429 "audioop.c"
        var $54=$53; //@line 1429 "audioop.c"
        var $55=HEAP[$54]; //@line 1429 "audioop.c"
        var $56=($55); //@line 1429 "audioop.c"
        $val=$56; //@line 1429 "audioop.c"
        __label__ = 20; break; //@line 1429 "audioop.c"
      case 18: // $bb14
        var $57=HEAP[$size]; //@line 1430 "audioop.c"
        var $58=($57)==4; //@line 1430 "audioop.c"
        if ($58) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1430 "audioop.c"
      case 19: // $bb15
        var $59=HEAP[$cp]; //@line 1430 "audioop.c"
        var $60=$i; //@line 1430 "audioop.c"
        var $61=$59+$60; //@line 1430 "audioop.c"
        var $62=$61; //@line 1430 "audioop.c"
        var $63=HEAP[$62]; //@line 1430 "audioop.c"
        var $64=($63) >> 16; //@line 1430 "audioop.c"
        $val=$64; //@line 1430 "audioop.c"
        __label__ = 20; break; //@line 1430 "audioop.c"
      case 20: // $bb16
        var $65=HEAP[$valpred]; //@line 1433 "audioop.c"
        var $66=$val; //@line 1433 "audioop.c"
        var $67=($66) - ($65); //@line 1433 "audioop.c"
        $diff=$67; //@line 1433 "audioop.c"
        var $68=($67) < 0; //@line 1434 "audioop.c"
        if ($68) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1434 "audioop.c"
      case 21: // $bb19
        $iftmp_511=0; //@line 1434 "audioop.c"
        $sign=0; //@line 1434 "audioop.c"
        __label__ = 23; break;
      case 22: // $bb20
        $iftmp_511=8; //@line 1434 "audioop.c"
        $sign=8; //@line 1434 "audioop.c"
        var $69=$diff; //@line 1435 "audioop.c"
        var $70=0 - ($69); //@line 1435 "audioop.c"
        $diff=$70; //@line 1435 "audioop.c"
        __label__ = 23; break; //@line 1435 "audioop.c"
      case 23: // $bb21
        $delta=0; //@line 1446 "audioop.c"
        var $71=$step; //@line 1447 "audioop.c"
        var $72=($71) >> 3; //@line 1447 "audioop.c"
        $vpdiff=$72; //@line 1447 "audioop.c"
        var $73=$diff; //@line 1449 "audioop.c"
        var $74=$step; //@line 1449 "audioop.c"
        var $75=($73) >= ($74); //@line 1449 "audioop.c"
        if ($75) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1449 "audioop.c"
      case 24: // $bb22
        $delta=4; //@line 1450 "audioop.c"
        var $76=$diff; //@line 1451 "audioop.c"
        var $77=$step; //@line 1451 "audioop.c"
        var $78=($76) - ($77); //@line 1451 "audioop.c"
        $diff=$78; //@line 1451 "audioop.c"
        var $79=$vpdiff; //@line 1452 "audioop.c"
        var $80=$step; //@line 1452 "audioop.c"
        var $81=($80) + ($79); //@line 1452 "audioop.c"
        $vpdiff=$81; //@line 1452 "audioop.c"
        __label__ = 25; break; //@line 1452 "audioop.c"
      case 25: // $bb23
        var $82=$step; //@line 1454 "audioop.c"
        var $83=($82) >> 1; //@line 1454 "audioop.c"
        $step=$83; //@line 1454 "audioop.c"
        var $84=$diff; //@line 1455 "audioop.c"
        var $85=$step; //@line 1455 "audioop.c"
        var $86=($84) >= ($85); //@line 1455 "audioop.c"
        if ($86) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1455 "audioop.c"
      case 26: // $bb24
        var $87=$delta; //@line 1456 "audioop.c"
        var $88=($87) | 2; //@line 1456 "audioop.c"
        $delta=$88; //@line 1456 "audioop.c"
        var $89=$diff; //@line 1457 "audioop.c"
        var $90=$step; //@line 1457 "audioop.c"
        var $91=($89) - ($90); //@line 1457 "audioop.c"
        $diff=$91; //@line 1457 "audioop.c"
        var $92=$vpdiff; //@line 1458 "audioop.c"
        var $93=$step; //@line 1458 "audioop.c"
        var $94=($93) + ($92); //@line 1458 "audioop.c"
        $vpdiff=$94; //@line 1458 "audioop.c"
        __label__ = 27; break; //@line 1458 "audioop.c"
      case 27: // $bb25
        var $95=$step; //@line 1460 "audioop.c"
        var $96=($95) >> 1; //@line 1460 "audioop.c"
        $step=$96; //@line 1460 "audioop.c"
        var $97=$diff; //@line 1461 "audioop.c"
        var $98=$step; //@line 1461 "audioop.c"
        var $99=($97) >= ($98); //@line 1461 "audioop.c"
        if ($99) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1461 "audioop.c"
      case 28: // $bb26
        var $100=$delta; //@line 1462 "audioop.c"
        var $101=($100) | 1; //@line 1462 "audioop.c"
        $delta=$101; //@line 1462 "audioop.c"
        var $102=$vpdiff; //@line 1463 "audioop.c"
        var $103=$step; //@line 1463 "audioop.c"
        var $104=($103) + ($102); //@line 1463 "audioop.c"
        $vpdiff=$104; //@line 1463 "audioop.c"
        __label__ = 29; break; //@line 1463 "audioop.c"
      case 29: // $bb27
        var $105=$sign; //@line 1467 "audioop.c"
        var $106=($105)!=0; //@line 1467 "audioop.c"
        var $107=HEAP[$valpred]; //@line 1468 "audioop.c"
        var $108=$vpdiff; //@line 1468 "audioop.c"
        if ($106) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1467 "audioop.c"
      case 30: // $bb28
        var $109=($107) - ($108); //@line 1468 "audioop.c"
        HEAP[$valpred]=$109; //@line 1468 "audioop.c"
        __lastLabel__ = 30; __label__ = 32; break; //@line 1468 "audioop.c"
      case 31: // $bb29
        var $110=($108) + ($107); //@line 1470 "audioop.c"
        HEAP[$valpred]=$110; //@line 1470 "audioop.c"
        __lastLabel__ = 31; __label__ = 32; break; //@line 1470 "audioop.c"
      case 32: // $bb30
        var $111=__lastLabel__ == 31 ? $110 : ($109);
        var $112=($111) > 32767; //@line 1473 "audioop.c"
        if ($112) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1473 "audioop.c"
      case 33: // $bb31
        HEAP[$valpred]=32767; //@line 1474 "audioop.c"
        __label__ = 36; break; //@line 1474 "audioop.c"
      case 34: // $bb32
        var $113=HEAP[$valpred]; //@line 1475 "audioop.c"
        var $114=($113) < -32768; //@line 1475 "audioop.c"
        if ($114) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1475 "audioop.c"
      case 35: // $bb33
        HEAP[$valpred]=-32768; //@line 1476 "audioop.c"
        __label__ = 36; break; //@line 1476 "audioop.c"
      case 36: // $bb34
        var $115=$delta; //@line 1479 "audioop.c"
        var $116=$sign; //@line 1479 "audioop.c"
        var $117=($116) | ($115); //@line 1479 "audioop.c"
        $delta=$117; //@line 1479 "audioop.c"
        var $118=$delta; //@line 1481 "audioop.c"
        var $119=_indexTable+$118*4; //@line 1481 "audioop.c"
        var $120=HEAP[$119]; //@line 1481 "audioop.c"
        var $121=HEAP[$index]; //@line 1481 "audioop.c"
        var $122=($121) + ($120); //@line 1481 "audioop.c"
        HEAP[$index]=$122; //@line 1481 "audioop.c"
        var $123=($122) < 0; //@line 1482 "audioop.c"
        if ($123) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1482 "audioop.c"
      case 37: // $bb36_thread
        HEAP[$index]=0; //@line 1482 "audioop.c"
        __label__ = 40; break;
      case 38: // $bb36
        var $124=($122) > 88; //@line 1483 "audioop.c"
        if ($124) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 1483 "audioop.c"
      case 39: // $bb37
        HEAP[$index]=88; //@line 1483 "audioop.c"
        __label__ = 40; break; //@line 1483 "audioop.c"
      case 40: // $bb38
        var $125=HEAP[$index]; //@line 1484 "audioop.c"
        var $126=_stepsizeTable+$125*4; //@line 1484 "audioop.c"
        var $127=HEAP[$126]; //@line 1484 "audioop.c"
        $step=$127; //@line 1484 "audioop.c"
        var $128=$bufferstep; //@line 1487 "audioop.c"
        var $129=($128)!=0; //@line 1487 "audioop.c"
        var $130=$delta; //@line 1488 "audioop.c"
        if ($129) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1487 "audioop.c"
      case 41: // $bb39
        var $131=($130) << 4; //@line 1488 "audioop.c"
        var $132=($131) & 240; //@line 1488 "audioop.c"
        $outputbuffer=$132; //@line 1488 "audioop.c"
        __label__ = 43; break; //@line 1488 "audioop.c"
      case 42: // $bb40
        var $133=((($130)) & 255); //@line 1490 "audioop.c"
        var $134=($133) & 15; //@line 1490 "audioop.c"
        var $135=$outputbuffer; //@line 1490 "audioop.c"
        var $136=((($135)) & 255); //@line 1490 "audioop.c"
        var $137=($136) | ($134); //@line 1490 "audioop.c"
        var $138=$ncp; //@line 1490 "audioop.c"
        HEAP[$138]=$137; //@line 1490 "audioop.c"
        var $139=$ncp; //@line 1490 "audioop.c"
        var $140=$139+1; //@line 1490 "audioop.c"
        $ncp=$140; //@line 1490 "audioop.c"
        __label__ = 43; break; //@line 1490 "audioop.c"
      case 43: // $bb41
        var $141=$bufferstep; //@line 1492 "audioop.c"
        var $142=($141)==0; //@line 1492 "audioop.c"
        var $143=($142); //@line 1492 "audioop.c"
        $bufferstep=$143; //@line 1492 "audioop.c"
        var $144=HEAP[$size]; //@line 1427 "audioop.c"
        var $145=$i; //@line 1427 "audioop.c"
        var $146=($145) + ($144); //@line 1427 "audioop.c"
        $i=$146; //@line 1427 "audioop.c"
        var $147=HEAP[$len]; //@line 1427 "audioop.c"
        var $148=$i; //@line 1427 "audioop.c"
        var $149=($148) < ($147); //@line 1427 "audioop.c"
        if ($149) { __label__ = 14; break; } else { __label__ = 44; break; } //@line 1427 "audioop.c"
      case 44: // $bb43
        var $150=HEAP[$index]; //@line 1494 "audioop.c"
        var $151=HEAP[$valpred]; //@line 1494 "audioop.c"
        var $152=$str; //@line 1494 "audioop.c"
        var $153=_Py_BuildValue(__str45, $152, $151, $150); //@line 1494 "audioop.c"
        $rv=$153; //@line 1494 "audioop.c"
        var $154=$str; //@line 1495 "audioop.c"
        var $155=$154; //@line 1495 "audioop.c"
        var $156=HEAP[$155]; //@line 1495 "audioop.c"
        var $157=($156) - 1; //@line 1495 "audioop.c"
        var $158=$str; //@line 1495 "audioop.c"
        var $159=$158; //@line 1495 "audioop.c"
        HEAP[$159]=$157; //@line 1495 "audioop.c"
        var $160=$str; //@line 1495 "audioop.c"
        var $161=$160; //@line 1495 "audioop.c"
        var $162=HEAP[$161]; //@line 1495 "audioop.c"
        var $163=($162)==0; //@line 1495 "audioop.c"
        if ($163) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 1495 "audioop.c"
      case 45: // $bb44
        var $164=$str; //@line 1495 "audioop.c"
        var $165=$164+4; //@line 1495 "audioop.c"
        var $166=HEAP[$165]; //@line 1495 "audioop.c"
        var $167=$166+24; //@line 1495 "audioop.c"
        var $168=HEAP[$167]; //@line 1495 "audioop.c"
        var $169=$str; //@line 1495 "audioop.c"
        FUNCTION_TABLE[$168]($169); //@line 1495 "audioop.c"
        __label__ = 46; break; //@line 1495 "audioop.c"
      case 46: // $bb45
        var $170=$rv; //@line 1496 "audioop.c"
        $2=$170; //@line 1496 "audioop.c"
        __label__ = 47; break; //@line 1496 "audioop.c"
      case 47: // $bb46
        var $171=$2; //@line 1406 "audioop.c"
        $retval=$171; //@line 1406 "audioop.c"
        var $retval47=$retval; //@line 1406 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval47; //@line 1406 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_adpcm2lin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr_i1;
        var $retval_i2;
        var $0;
        var $len_addr_i;
        var $size_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $valpred=__stackBase__+12;
        var $step;
        var $delta;
        var $index=__stackBase__+16;
        var $sign;
        var $vpdiff;
        var $rv;
        var $str;
        var $state=__stackBase__+20;
        var $i;
        var $inputbuffer;
        var $bufferstep;
        $self_addr=$self;
        $args_addr=$args;
        $inputbuffer=0; //@line 1506 "audioop.c"
        var $3=$args_addr; //@line 1508 "audioop.c"
        var $4=_PyArg_ParseTuple($3, __str46, $cp, $len, $size, $state); //@line 1508 "audioop.c"
        var $5=($4)==0; //@line 1508 "audioop.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1508 "audioop.c"
      case 1: // $bb
        $2=0; //@line 1510 "audioop.c"
        __label__ = 46; break; //@line 1510 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$size]; //@line 1512 "audioop.c"
        var $7=HEAP[$len]; //@line 1512 "audioop.c"
        $len_addr_i=$7;
        $size_addr_i=$6;
        var $8=$size_addr_i; //@line 312 "audioop.c"
        $size_addr_i1=$8;
        var $9=$size_addr_i1; //@line 301 "audioop.c"
        var $10=($9)==1; //@line 301 "audioop.c"
        var $11=$size_addr_i1; //@line 301 "audioop.c"
        var $12=($11)==2; //@line 301 "audioop.c"
        var $or_cond_i=($10) | ($12);
        var $13=$size_addr_i1; //@line 301 "audioop.c"
        var $14=($13)==4; //@line 301 "audioop.c"
        var $or_cond3_i=($or_cond_i) | ($14);
        if ($or_cond3_i) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb_i
        var $15=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($15, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        $retval_i2=0; //@line 303 "audioop.c"
        $1=0; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 4: // $bb1_i
        $0=1; //@line 306 "audioop.c"
        $retval_i2=1; //@line 303 "audioop.c"
        var $16=$len_addr_i; //@line 314 "audioop.c"
        var $17=$size_addr_i; //@line 314 "audioop.c"
        var $18=($16) % ($17); //@line 314 "audioop.c"
        var $19=($18)!=0; //@line 314 "audioop.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 314 "audioop.c"
      case 5: // $bb2_i
        var $20=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($20, __str1); //@line 315 "audioop.c"
        $1=0; //@line 316 "audioop.c"
        __label__ = 6; break; //@line 316 "audioop.c"
      case 6: // $bb2
        $retval_i=0; //@line 313 "audioop.c"
        $2=0; //@line 1513 "audioop.c"
        __label__ = 46; break; //@line 1513 "audioop.c"
      case 7: // $bb3
        $1=1; //@line 318 "audioop.c"
        $retval_i=1; //@line 313 "audioop.c"
        var $21=HEAP[$state]; //@line 1516 "audioop.c"
        var $22=($21)==(__Py_NoneStruct); //@line 1516 "audioop.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1516 "audioop.c"
      case 8: // $bb4
        HEAP[$valpred]=0; //@line 1518 "audioop.c"
        HEAP[$index]=0; //@line 1519 "audioop.c"
        __label__ = 11; break; //@line 1519 "audioop.c"
      case 9: // $bb5
        var $23=HEAP[$state]; //@line 1520 "audioop.c"
        var $24=_PyArg_ParseTuple($23, __str44, $valpred, $index); //@line 1520 "audioop.c"
        var $25=($24)==0; //@line 1520 "audioop.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1520 "audioop.c"
      case 10: // $bb6
        $2=0; //@line 1521 "audioop.c"
        __label__ = 46; break; //@line 1521 "audioop.c"
      case 11: // $bb7
        var $26=HEAP[$size]; //@line 1523 "audioop.c"
        var $27=((1073741823/($26))|0); //@line 1523 "audioop.c"
        var $28=HEAP[$len]; //@line 1523 "audioop.c"
        var $29=($27) < ($28); //@line 1523 "audioop.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1523 "audioop.c"
      case 12: // $bb8
        var $30=HEAP[_PyExc_MemoryError]; //@line 1524 "audioop.c"
        _PyErr_SetString($30, __str23); //@line 1524 "audioop.c"
        $2=0; //@line 1526 "audioop.c"
        __label__ = 46; break; //@line 1526 "audioop.c"
      case 13: // $bb9
        var $31=HEAP[$len]; //@line 1528 "audioop.c"
        var $32=HEAP[$size]; //@line 1528 "audioop.c"
        var $33=($31) * 2; //@line 1528 "audioop.c"
        var $34=($33) * ($32); //@line 1528 "audioop.c"
        var $35=_PyString_FromStringAndSize(0, $34); //@line 1528 "audioop.c"
        $str=$35; //@line 1528 "audioop.c"
        var $36=$str; //@line 1529 "audioop.c"
        var $37=($36)==0; //@line 1529 "audioop.c"
        if ($37) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1529 "audioop.c"
      case 14: // $bb10
        $2=0; //@line 1530 "audioop.c"
        __label__ = 46; break; //@line 1530 "audioop.c"
      case 15: // $bb11
        var $38=$str; //@line 1531 "audioop.c"
        var $39=_PyString_AsString($38); //@line 1531 "audioop.c"
        $ncp=$39; //@line 1531 "audioop.c"
        var $40=HEAP[$index]; //@line 1533 "audioop.c"
        var $41=_stepsizeTable+$40*4; //@line 1533 "audioop.c"
        var $42=HEAP[$41]; //@line 1533 "audioop.c"
        $step=$42; //@line 1533 "audioop.c"
        $bufferstep=0; //@line 1534 "audioop.c"
        $i=0; //@line 1536 "audioop.c"
        var $43=HEAP[$len]; //@line 1536 "audioop.c"
        var $44=HEAP[$size]; //@line 1536 "audioop.c"
        var $45=($43) * 2; //@line 1536 "audioop.c"
        var $46=($45) * ($44); //@line 1536 "audioop.c"
        var $47=$i; //@line 1536 "audioop.c"
        var $48=($46) > ($47); //@line 1536 "audioop.c"
        if ($48) { __label__ = 16; break; } else { __label__ = 43; break; } //@line 1536 "audioop.c"
      case 16: // $bb12
        var $49=$bufferstep; //@line 1538 "audioop.c"
        var $50=($49)!=0; //@line 1538 "audioop.c"
        if ($50) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1538 "audioop.c"
      case 17: // $bb13
        var $51=$inputbuffer; //@line 1539 "audioop.c"
        var $52=($51) & 15; //@line 1539 "audioop.c"
        $delta=$52; //@line 1539 "audioop.c"
        __label__ = 19; break; //@line 1539 "audioop.c"
      case 18: // $bb14
        var $53=HEAP[$cp]; //@line 1541 "audioop.c"
        var $54=HEAP[$53]; //@line 1541 "audioop.c"
        var $55=($54); //@line 1541 "audioop.c"
        $inputbuffer=$55; //@line 1541 "audioop.c"
        var $56=$53+1; //@line 1541 "audioop.c"
        HEAP[$cp]=$56; //@line 1541 "audioop.c"
        var $57=$inputbuffer; //@line 1542 "audioop.c"
        var $58=($57) >> 4; //@line 1542 "audioop.c"
        var $59=($58) & 15; //@line 1542 "audioop.c"
        $delta=$59; //@line 1542 "audioop.c"
        __label__ = 19; break; //@line 1542 "audioop.c"
      case 19: // $bb15
        var $60=$bufferstep; //@line 1545 "audioop.c"
        var $61=($60)==0; //@line 1545 "audioop.c"
        var $62=($61); //@line 1545 "audioop.c"
        $bufferstep=$62; //@line 1545 "audioop.c"
        var $63=$delta; //@line 1548 "audioop.c"
        var $64=_indexTable+$63*4; //@line 1548 "audioop.c"
        var $65=HEAP[$64]; //@line 1548 "audioop.c"
        var $66=HEAP[$index]; //@line 1548 "audioop.c"
        var $67=($66) + ($65); //@line 1548 "audioop.c"
        HEAP[$index]=$67; //@line 1548 "audioop.c"
        var $68=($67) < 0; //@line 1549 "audioop.c"
        if ($68) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1549 "audioop.c"
      case 20: // $bb17_thread
        HEAP[$index]=0; //@line 1549 "audioop.c"
        __label__ = 23; break;
      case 21: // $bb17
        var $69=($67) > 88; //@line 1550 "audioop.c"
        if ($69) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1550 "audioop.c"
      case 22: // $bb18
        HEAP[$index]=88; //@line 1550 "audioop.c"
        __label__ = 23; break; //@line 1550 "audioop.c"
      case 23: // $bb19
        var $70=$delta; //@line 1553 "audioop.c"
        var $71=($70) & 8; //@line 1553 "audioop.c"
        $sign=$71; //@line 1553 "audioop.c"
        var $72=$delta; //@line 1554 "audioop.c"
        var $73=($72) & 7; //@line 1554 "audioop.c"
        $delta=$73; //@line 1554 "audioop.c"
        var $74=$step; //@line 1561 "audioop.c"
        var $75=($74) >> 3; //@line 1561 "audioop.c"
        $vpdiff=$75; //@line 1561 "audioop.c"
        var $76=$delta; //@line 1562 "audioop.c"
        var $77=($76) & 4; //@line 1562 "audioop.c"
        var $78=($77)!=0; //@line 1562 "audioop.c"
        if ($78) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1562 "audioop.c"
      case 24: // $bb20
        var $79=$vpdiff; //@line 1562 "audioop.c"
        var $80=$step; //@line 1562 "audioop.c"
        var $81=($80) + ($79); //@line 1562 "audioop.c"
        $vpdiff=$81; //@line 1562 "audioop.c"
        __label__ = 25; break; //@line 1562 "audioop.c"
      case 25: // $bb21
        var $82=$delta; //@line 1563 "audioop.c"
        var $83=($82) & 2; //@line 1563 "audioop.c"
        var $84=($83)!=0; //@line 1563 "audioop.c"
        if ($84) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1563 "audioop.c"
      case 26: // $bb22
        var $85=$step; //@line 1563 "audioop.c"
        var $86=($85) >> 1; //@line 1563 "audioop.c"
        var $87=$vpdiff; //@line 1563 "audioop.c"
        var $88=($86) + ($87); //@line 1563 "audioop.c"
        $vpdiff=$88; //@line 1563 "audioop.c"
        __label__ = 27; break; //@line 1563 "audioop.c"
      case 27: // $bb23
        var $89=$delta; //@line 1564 "audioop.c"
        var $90=($89) & 1; //@line 1564 "audioop.c"
        var $91=((($90)) & 255); //@line 1564 "audioop.c"
        var $toBool=($91)!=0; //@line 1564 "audioop.c"
        if ($toBool) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1564 "audioop.c"
      case 28: // $bb24
        var $92=$step; //@line 1564 "audioop.c"
        var $93=($92) >> 2; //@line 1564 "audioop.c"
        var $94=$vpdiff; //@line 1564 "audioop.c"
        var $95=($93) + ($94); //@line 1564 "audioop.c"
        $vpdiff=$95; //@line 1564 "audioop.c"
        __label__ = 29; break; //@line 1564 "audioop.c"
      case 29: // $bb25
        var $96=$sign; //@line 1566 "audioop.c"
        var $97=($96)!=0; //@line 1566 "audioop.c"
        var $98=HEAP[$valpred]; //@line 1567 "audioop.c"
        var $99=$vpdiff; //@line 1567 "audioop.c"
        if ($97) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1566 "audioop.c"
      case 30: // $bb26
        var $100=($98) - ($99); //@line 1567 "audioop.c"
        HEAP[$valpred]=$100; //@line 1567 "audioop.c"
        __lastLabel__ = 30; __label__ = 32; break; //@line 1567 "audioop.c"
      case 31: // $bb27
        var $101=($99) + ($98); //@line 1569 "audioop.c"
        HEAP[$valpred]=$101; //@line 1569 "audioop.c"
        __lastLabel__ = 31; __label__ = 32; break; //@line 1569 "audioop.c"
      case 32: // $bb28
        var $102=__lastLabel__ == 31 ? $101 : ($100);
        var $103=($102) > 32767; //@line 1572 "audioop.c"
        if ($103) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1572 "audioop.c"
      case 33: // $bb29
        HEAP[$valpred]=32767; //@line 1573 "audioop.c"
        __label__ = 36; break; //@line 1573 "audioop.c"
      case 34: // $bb30
        var $104=HEAP[$valpred]; //@line 1574 "audioop.c"
        var $105=($104) < -32768; //@line 1574 "audioop.c"
        if ($105) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1574 "audioop.c"
      case 35: // $bb31
        HEAP[$valpred]=-32768; //@line 1575 "audioop.c"
        __label__ = 36; break; //@line 1575 "audioop.c"
      case 36: // $bb32
        var $106=HEAP[$index]; //@line 1578 "audioop.c"
        var $107=_stepsizeTable+$106*4; //@line 1578 "audioop.c"
        var $108=HEAP[$107]; //@line 1578 "audioop.c"
        $step=$108; //@line 1578 "audioop.c"
        var $109=HEAP[$size]; //@line 1581 "audioop.c"
        var $110=($109)==1; //@line 1581 "audioop.c"
        if ($110) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1581 "audioop.c"
      case 37: // $bb33
        var $111=HEAP[$valpred]; //@line 1581 "audioop.c"
        var $112=($111) >> 8; //@line 1581 "audioop.c"
        var $113=((($112)) & 255); //@line 1581 "audioop.c"
        var $114=$ncp; //@line 1581 "audioop.c"
        var $115=$i; //@line 1581 "audioop.c"
        var $116=$114+$115; //@line 1581 "audioop.c"
        HEAP[$116]=$113; //@line 1581 "audioop.c"
        __label__ = 42; break; //@line 1581 "audioop.c"
      case 38: // $bb34
        var $117=HEAP[$size]; //@line 1582 "audioop.c"
        var $118=($117)==2; //@line 1582 "audioop.c"
        if ($118) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 1582 "audioop.c"
      case 39: // $bb35
        var $119=$ncp; //@line 1582 "audioop.c"
        var $120=$i; //@line 1582 "audioop.c"
        var $121=$119+$120; //@line 1582 "audioop.c"
        var $122=$121; //@line 1582 "audioop.c"
        var $123=HEAP[$valpred]; //@line 1582 "audioop.c"
        var $124=((($123)) & 65535); //@line 1582 "audioop.c"
        HEAP[$122]=$124; //@line 1582 "audioop.c"
        __label__ = 42; break; //@line 1582 "audioop.c"
      case 40: // $bb36
        var $125=HEAP[$size]; //@line 1583 "audioop.c"
        var $126=($125)==4; //@line 1583 "audioop.c"
        if ($126) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1583 "audioop.c"
      case 41: // $bb37
        var $127=$ncp; //@line 1583 "audioop.c"
        var $128=$i; //@line 1583 "audioop.c"
        var $129=$127+$128; //@line 1583 "audioop.c"
        var $130=$129; //@line 1583 "audioop.c"
        var $131=HEAP[$valpred]; //@line 1583 "audioop.c"
        var $132=($131) << 16; //@line 1583 "audioop.c"
        HEAP[$130]=$132; //@line 1583 "audioop.c"
        __label__ = 42; break; //@line 1583 "audioop.c"
      case 42: // $bb38
        var $133=HEAP[$size]; //@line 1536 "audioop.c"
        var $134=$i; //@line 1536 "audioop.c"
        var $135=($134) + ($133); //@line 1536 "audioop.c"
        $i=$135; //@line 1536 "audioop.c"
        var $136=HEAP[$len]; //@line 1536 "audioop.c"
        var $137=HEAP[$size]; //@line 1536 "audioop.c"
        var $138=($136) * 2; //@line 1536 "audioop.c"
        var $139=($138) * ($137); //@line 1536 "audioop.c"
        var $140=$i; //@line 1536 "audioop.c"
        var $141=($139) > ($140); //@line 1536 "audioop.c"
        if ($141) { __label__ = 16; break; } else { __label__ = 43; break; } //@line 1536 "audioop.c"
      case 43: // $bb40
        var $142=HEAP[$index]; //@line 1586 "audioop.c"
        var $143=HEAP[$valpred]; //@line 1586 "audioop.c"
        var $144=$str; //@line 1586 "audioop.c"
        var $145=_Py_BuildValue(__str45, $144, $143, $142); //@line 1586 "audioop.c"
        $rv=$145; //@line 1586 "audioop.c"
        var $146=$str; //@line 1587 "audioop.c"
        var $147=$146; //@line 1587 "audioop.c"
        var $148=HEAP[$147]; //@line 1587 "audioop.c"
        var $149=($148) - 1; //@line 1587 "audioop.c"
        var $150=$str; //@line 1587 "audioop.c"
        var $151=$150; //@line 1587 "audioop.c"
        HEAP[$151]=$149; //@line 1587 "audioop.c"
        var $152=$str; //@line 1587 "audioop.c"
        var $153=$152; //@line 1587 "audioop.c"
        var $154=HEAP[$153]; //@line 1587 "audioop.c"
        var $155=($154)==0; //@line 1587 "audioop.c"
        if ($155) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1587 "audioop.c"
      case 44: // $bb41
        var $156=$str; //@line 1587 "audioop.c"
        var $157=$156+4; //@line 1587 "audioop.c"
        var $158=HEAP[$157]; //@line 1587 "audioop.c"
        var $159=$158+24; //@line 1587 "audioop.c"
        var $160=HEAP[$159]; //@line 1587 "audioop.c"
        var $161=$str; //@line 1587 "audioop.c"
        FUNCTION_TABLE[$160]($161); //@line 1587 "audioop.c"
        __label__ = 45; break; //@line 1587 "audioop.c"
      case 45: // $bb42
        var $162=$rv; //@line 1588 "audioop.c"
        $2=$162; //@line 1588 "audioop.c"
        __label__ = 46; break; //@line 1588 "audioop.c"
      case 46: // $bb43
        var $163=$2; //@line 1510 "audioop.c"
        $retval=$163; //@line 1510 "audioop.c"
        var $retval44=$retval; //@line 1510 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval44; //@line 1510 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initaudioop() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $d;
        var $0=_Py_InitModule4(__str72, _audioop_methods, 0, 0, 1013); //@line 1624 "audioop.c"
        $m=$0; //@line 1624 "audioop.c"
        var $1=$m; //@line 1625 "audioop.c"
        var $2=($1)==0; //@line 1625 "audioop.c"
        if ($2) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1625 "audioop.c"
      case 1: // $bb
        var $3=$m; //@line 1627 "audioop.c"
        var $4=_PyModule_GetDict($3); //@line 1627 "audioop.c"
        $d=$4; //@line 1627 "audioop.c"
        var $5=$d; //@line 1628 "audioop.c"
        var $6=($5)==0; //@line 1628 "audioop.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1628 "audioop.c"
      case 2: // $bb1
        var $7=_PyErr_NewException(__str73, 0, 0); //@line 1630 "audioop.c"
        HEAP[_AudioopError]=$7; //@line 1630 "audioop.c"
        var $8=HEAP[_AudioopError]; //@line 1631 "audioop.c"
        var $9=($8)!=0; //@line 1631 "audioop.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1631 "audioop.c"
      case 3: // $bb2
        var $10=HEAP[_AudioopError]; //@line 1632 "audioop.c"
        var $11=$d; //@line 1632 "audioop.c"
        var $12=_PyDict_SetItemString($11, __str74, $10); //@line 1632 "audioop.c"
        __label__ = 4; break; //@line 1632 "audioop.c"
      case 4: // $return
        ;
        return; //@line 1626 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initaudioop"] = _initaudioop;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_audioop_max,0,_audioop_minmax,0,_audioop_avg,0,_audioop_maxpp,0,_audioop_avgpp,0,_audioop_rms,0,_audioop_findfit,0,_audioop_findmax,0,_audioop_findfactor,0,_audioop_cross,0,_audioop_mul,0,_audioop_add,0,_audioop_bias,0,_audioop_ulaw2lin,0,_audioop_lin2ulaw,0,_audioop_alaw2lin,0,_audioop_lin2alaw,0,_audioop_lin2lin,0,_audioop_adpcm2lin,0,_audioop_lin2adpcm,0,_audioop_tomono,0,_audioop_tostereo,0,_audioop_getsample,0,_audioop_reverse,0,_audioop_ratecv,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_seg_aend=allocate([31, 0, 63, 0, 127, 0, 255, 0, 511, 0, 1023, 0, 2047, 0, 4095, 0], ["i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0], ALLOC_NORMAL);
_seg_uend=allocate([63, 0, 127, 0, 255, 0, 511, 0, 1023, 0, 2047, 0, 4095, 0, 8191, 0], ["i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0], ALLOC_NORMAL);
__st_ulaw2linear16=allocate([-32124, 0, -31100, 0, -30076, 0, -29052, 0, -28028, 0, -27004, 0, -25980, 0, -24956, 0, -23932, 0, -22908, 0, -21884, 0, -20860, 0, -19836, 0, -18812, 0, -17788, 0, -16764, 0, -15996, 0, -15484, 0, -14972, 0, -14460, 0, -13948, 0, -13436, 0, -12924, 0, -12412, 0, -11900, 0, -11388, 0, -10876, 0, -10364, 0, -9852, 0, -9340, 0, -8828, 0, -8316, 0, -7932, 0, -7676, 0, -7420, 0, -7164, 0, -6908, 0, -6652, 0, -6396, 0, -6140, 0, -5884, 0, -5628, 0, -5372, 0, -5116, 0, -4860, 0, -4604, 0, -4348, 0, -4092, 0, -3900, 0, -3772, 0, -3644, 0, -3516, 0, -3388, 0, -3260, 0, -3132, 0, -3004, 0, -2876, 0, -2748, 0, -2620, 0, -2492, 0, -2364, 0, -2236, 0, -2108, 0, -1980, 0, -1884, 0, -1820, 0, -1756, 0, -1692, 0, -1628, 0, -1564, 0, -1500, 0, -1436, 0, -1372, 0, -1308, 0, -1244, 0, -1180, 0, -1116, 0, -1052, 0, -988, 0, -924, 0, -876, 0, -844, 0, -812, 0, -780, 0, -748, 0, -716, 0, -684, 0, -652, 0, -620, 0, -588, 0, -556, 0, -524, 0, -492, 0, -460, 0, -428, 0, -396, 0, -372, 0, -356, 0, -340, 0, -324, 0, -308, 0, -292, 0, -276, 0, -260, 0, -244, 0, -228, 0, -212, 0, -196, 0, -180, 0, -164, 0, -148, 0, -132, 0, -120, 0, -112, 0, -104, 0, -96, 0, -88, 0, -80, 0, -72, 0, -64, 0, -56, 0, -48, 0, -40, 0, -32, 0, -24, 0, -16, 0, -8, 0, 0, 0, 32124, 0, 31100, 0, 30076, 0, 29052, 0, 28028, 0, 27004, 0, 25980, 0, 24956, 0, 23932, 0, 22908, 0, 21884, 0, 20860, 0, 19836, 0, 18812, 0, 17788, 0, 16764, 0, 15996, 0, 15484, 0, 14972, 0, 14460, 0, 13948, 0, 13436, 0, 12924, 0, 12412, 0, 11900, 0, 11388, 0, 10876, 0, 10364, 0, 9852, 0, 9340, 0, 8828, 0, 8316, 0, 7932, 0, 7676, 0, 7420, 0, 7164, 0, 6908, 0, 6652, 0, 6396, 0, 6140, 0, 5884, 0, 5628, 0, 5372, 0, 5116, 0, 4860, 0, 4604, 0, 4348, 0, 4092, 0, 3900, 0, 3772, 0, 3644, 0, 3516, 0, 3388, 0, 3260, 0, 3132, 0, 3004, 0, 2876, 0, 2748, 0, 2620, 0, 2492, 0, 2364, 0, 2236, 0, 2108, 0, 1980, 0, 1884, 0, 1820, 0, 1756, 0, 1692, 0, 1628, 0, 1564, 0, 1500, 0, 1436, 0, 1372, 0, 1308, 0, 1244, 0, 1180, 0, 1116, 0, 1052, 0, 988, 0, 924, 0, 876, 0, 844, 0, 812, 0, 780, 0, 748, 0, 716, 0, 684, 0, 652, 0, 620, 0, 588, 0, 556, 0, 524, 0, 492, 0, 460, 0, 428, 0, 396, 0, 372, 0, 356, 0, 340, 0, 324, 0, 308, 0, 292, 0, 276, 0, 260, 0, 244, 0, 228, 0, 212, 0, 196, 0, 180, 0, 164, 0, 148, 0, 132, 0, 120, 0, 112, 0, 104, 0, 96, 0, 88, 0, 80, 0, 72, 0, 64, 0, 56, 0, 48, 0, 40, 0, 32, 0, 24, 0, 16, 0, 8, 0, 0, 0], ["i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0], ALLOC_NORMAL);
__st_alaw2linear16=allocate([-5504, 0, -5248, 0, -6016, 0, -5760, 0, -4480, 0, -4224, 0, -4992, 0, -4736, 0, -7552, 0, -7296, 0, -8064, 0, -7808, 0, -6528, 0, -6272, 0, -7040, 0, -6784, 0, -2752, 0, -2624, 0, -3008, 0, -2880, 0, -2240, 0, -2112, 0, -2496, 0, -2368, 0, -3776, 0, -3648, 0, -4032, 0, -3904, 0, -3264, 0, -3136, 0, -3520, 0, -3392, 0, -22016, 0, -20992, 0, -24064, 0, -23040, 0, -17920, 0, -16896, 0, -19968, 0, -18944, 0, -30208, 0, -29184, 0, -32256, 0, -31232, 0, -26112, 0, -25088, 0, -28160, 0, -27136, 0, -11008, 0, -10496, 0, -12032, 0, -11520, 0, -8960, 0, -8448, 0, -9984, 0, -9472, 0, -15104, 0, -14592, 0, -16128, 0, -15616, 0, -13056, 0, -12544, 0, -14080, 0, -13568, 0, -344, 0, -328, 0, -376, 0, -360, 0, -280, 0, -264, 0, -312, 0, -296, 0, -472, 0, -456, 0, -504, 0, -488, 0, -408, 0, -392, 0, -440, 0, -424, 0, -88, 0, -72, 0, -120, 0, -104, 0, -24, 0, -8, 0, -56, 0, -40, 0, -216, 0, -200, 0, -248, 0, -232, 0, -152, 0, -136, 0, -184, 0, -168, 0, -1376, 0, -1312, 0, -1504, 0, -1440, 0, -1120, 0, -1056, 0, -1248, 0, -1184, 0, -1888, 0, -1824, 0, -2016, 0, -1952, 0, -1632, 0, -1568, 0, -1760, 0, -1696, 0, -688, 0, -656, 0, -752, 0, -720, 0, -560, 0, -528, 0, -624, 0, -592, 0, -944, 0, -912, 0, -1008, 0, -976, 0, -816, 0, -784, 0, -880, 0, -848, 0, 5504, 0, 5248, 0, 6016, 0, 5760, 0, 4480, 0, 4224, 0, 4992, 0, 4736, 0, 7552, 0, 7296, 0, 8064, 0, 7808, 0, 6528, 0, 6272, 0, 7040, 0, 6784, 0, 2752, 0, 2624, 0, 3008, 0, 2880, 0, 2240, 0, 2112, 0, 2496, 0, 2368, 0, 3776, 0, 3648, 0, 4032, 0, 3904, 0, 3264, 0, 3136, 0, 3520, 0, 3392, 0, 22016, 0, 20992, 0, 24064, 0, 23040, 0, 17920, 0, 16896, 0, 19968, 0, 18944, 0, 30208, 0, 29184, 0, 32256, 0, 31232, 0, 26112, 0, 25088, 0, 28160, 0, 27136, 0, 11008, 0, 10496, 0, 12032, 0, 11520, 0, 8960, 0, 8448, 0, 9984, 0, 9472, 0, 15104, 0, 14592, 0, 16128, 0, 15616, 0, 13056, 0, 12544, 0, 14080, 0, 13568, 0, 344, 0, 328, 0, 376, 0, 360, 0, 280, 0, 264, 0, 312, 0, 296, 0, 472, 0, 456, 0, 504, 0, 488, 0, 408, 0, 392, 0, 440, 0, 424, 0, 88, 0, 72, 0, 120, 0, 104, 0, 24, 0, 8, 0, 56, 0, 40, 0, 216, 0, 200, 0, 248, 0, 232, 0, 152, 0, 136, 0, 184, 0, 168, 0, 1376, 0, 1312, 0, 1504, 0, 1440, 0, 1120, 0, 1056, 0, 1248, 0, 1184, 0, 1888, 0, 1824, 0, 2016, 0, 1952, 0, 1632, 0, 1568, 0, 1760, 0, 1696, 0, 688, 0, 656, 0, 752, 0, 720, 0, 560, 0, 528, 0, 624, 0, 592, 0, 944, 0, 912, 0, 1008, 0, 976, 0, 816, 0, 784, 0, 880, 0, 848, 0], ["i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0], ALLOC_NORMAL);
_indexTable=allocate([-1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
_stepsizeTable=allocate([7, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 16, 0, 0, 0, 17, 0, 0, 0, 19, 0, 0, 0, 21, 0, 0, 0, 23, 0, 0, 0, 25, 0, 0, 0, 28, 0, 0, 0, 31, 0, 0, 0, 34, 0, 0, 0, 37, 0, 0, 0, 41, 0, 0, 0, 45, 0, 0, 0, 50, 0, 0, 0, 55, 0, 0, 0, 60, 0, 0, 0, 66, 0, 0, 0, 73, 0, 0, 0, 80, 0, 0, 0, 88, 0, 0, 0, 97, 0, 0, 0, 107, 0, 0, 0, 118, 0, 0, 0, 130, 0, 0, 0, 143, 0, 0, 0, 157, 0, 0, 0, 173, 0, 0, 0, 190, 0, 0, 0, 209, 0, 0, 0, 230, 0, 0, 0, 253, 0, 0, 0, 279, 0, 0, 0, 307, 0, 0, 0, 337, 0, 0, 0, 371, 0, 0, 0, 408, 0, 0, 0, 449, 0, 0, 0, 494, 0, 0, 0, 544, 0, 0, 0, 598, 0, 0, 0, 658, 0, 0, 0, 724, 0, 0, 0, 796, 0, 0, 0, 876, 0, 0, 0, 963, 0, 0, 0, 1060, 0, 0, 0, 1166, 0, 0, 0, 1282, 0, 0, 0, 1411, 0, 0, 0, 1552, 0, 0, 0, 1707, 0, 0, 0, 1878, 0, 0, 0, 2066, 0, 0, 0, 2272, 0, 0, 0, 2499, 0, 0, 0, 2749, 0, 0, 0, 3024, 0, 0, 0, 3327, 0, 0, 0, 3660, 0, 0, 0, 4026, 0, 0, 0, 4428, 0, 0, 0, 4871, 0, 0, 0, 5358, 0, 0, 0, 5894, 0, 0, 0, 6484, 0, 0, 0, 7132, 0, 0, 0, 7845, 0, 0, 0, 8630, 0, 0, 0, 9493, 0, 0, 0, 10442, 0, 0, 0, 11487, 0, 0, 0, 12635, 0, 0, 0, 13899, 0, 0, 0, 15289, 0, 0, 0, 16818, 0, 0, 0, 18500, 0, 0, 0, 20350, 0, 0, 0, 22385, 0, 0, 0, 24623, 0, 0, 0, 27086, 0, 0, 0, 29794, 0, 0, 0, 32767, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
_AudioopError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str=allocate([83,105,122,101,32,115,104,111,117,108,100,32,98,101,32,49,44,32,50,32,111,114,32,52,0] /* Size should be 1, 2  */, "i8", ALLOC_NORMAL);
__str1=allocate([110,111,116,32,97,32,119,104,111,108,101,32,110,117,109,98,101,114,32,111,102,32,102,114,97,109,101,115,0] /* not a whole number o */, "i8", ALLOC_NORMAL);
__str2=allocate([115,35,105,105,58,103,101,116,115,97,109,112,108,101,0] /* s#ii:getsample\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([73,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* Index out of range\0 */, "i8", ALLOC_NORMAL);
__str4=allocate([115,35,105,58,109,97,120,0] /* s#i:max\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([115,35,105,58,109,105,110,109,97,120,0] /* s#i:minmax\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([40,105,105,41,0] /* (ii)\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([115,35,105,58,97,118,103,0] /* s#i:avg\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([115,35,105,58,114,109,115,0] /* s#i:rms\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([115,35,115,35,58,102,105,110,100,102,105,116,0] /* s#s#:findfit\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([83,116,114,105,110,103,115,32,115,104,111,117,108,100,32,98,101,32,101,118,101,110,45,115,105,122,101,100,0] /* Strings should be ev */, "i8", ALLOC_NORMAL);
__str11=allocate([70,105,114,115,116,32,115,97,109,112,108,101,32,115,104,111,117,108,100,32,98,101,32,108,111,110,103,101,114,0] /* First sample should  */, "i8", ALLOC_NORMAL);
__str12=allocate([40,105,102,41,0] /* (if)\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([115,35,115,35,58,102,105,110,100,102,97,99,116,111,114,0] /* s#s#:findfactor\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([83,97,109,112,108,101,115,32,115,104,111,117,108,100,32,98,101,32,115,97,109,101,32,115,105,122,101,0] /* Samples should be sa */, "i8", ALLOC_NORMAL);
__str15=allocate([115,35,105,58,102,105,110,100,109,97,120,0] /* s#i:findmax\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([73,110,112,117,116,32,115,97,109,112,108,101,32,115,104,111,117,108,100,32,98,101,32,108,111,110,103,101,114,0] /* Input sample should  */, "i8", ALLOC_NORMAL);
__str17=allocate([115,35,105,58,97,118,103,112,112,0] /* s#i:avgpp\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([115,35,105,58,109,97,120,112,112,0] /* s#i:maxpp\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([115,35,105,58,99,114,111,115,115,0] /* s#i:cross\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([115,35,105,100,58,109,117,108,0] /* s#id:mul\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([115,35,105,100,100,58,116,111,109,111,110,111,0] /* s#idd:tomono\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([115,35,105,100,100,58,116,111,115,116,101,114,101,111,0] /* s#idd:tostereo\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([110,111,116,32,101,110,111,117,103,104,32,109,101,109,111,114,121,32,102,111,114,32,111,117,116,112,117,116,32,98,117,102,102,101,114,0] /* not enough memory fo */, "i8", ALLOC_NORMAL);
__str24=allocate([115,35,115,35,105,58,97,100,100,0] /* s#s#i:add\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([76,101,110,103,116,104,115,32,115,104,111,117,108,100,32,98,101,32,116,104,101,32,115,97,109,101,0] /* Lengths should be th */, "i8", ALLOC_NORMAL);
__str26=allocate([115,35,105,105,58,98,105,97,115,0] /* s#ii:bias\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([115,35,105,58,114,101,118,101,114,115,101,0] /* s#i:reverse\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([115,35,105,105,58,108,105,110,50,108,105,110,0] /* s#ii:lin2lin\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([115,35,105,105,105,105,79,124,105,105,58,114,97,116,101,99,118,0] /* s#iiiiO|ii:ratecv\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([35,32,111,102,32,99,104,97,110,110,101,108,115,32,115,104,111,117,108,100,32,98,101,32,62,61,32,49,0] /* # of channels should */, "i8", ALLOC_NORMAL);
__str31=allocate([119,105,100,116,104,32,42,32,110,99,104,97,110,110,101,108,115,32,116,111,111,32,98,105,103,32,102,111,114,32,97,32,67,32,105,110,116,0] /* width _ nchannels to */, "i8", ALLOC_NORMAL);
__str32=allocate([119,101,105,103,104,116,65,32,115,104,111,117,108,100,32,98,101,32,62,61,32,49,44,32,119,101,105,103,104,116,66,32,115,104,111,117,108,100,32,98,101,32,62,61,32,48,0] /* weightA should be >= */, "i8", ALLOC_NORMAL);
__str33=allocate([115,97,109,112,108,105,110,103,32,114,97,116,101,32,110,111,116,32,62,32,48,0] /* sampling rate not >  */, "i8", ALLOC_NORMAL);
__str34=allocate([105,79,33,59,97,117,100,105,111,111,112,46,114,97,116,101,99,118,58,32,105,108,108,101,103,97,108,32,115,116,97,116,101,32,97,114,103,117,109,101,110,116,0] /* iO!;audioop.ratecv:  */, "i8", ALLOC_NORMAL);
__str35=allocate([105,108,108,101,103,97,108,32,115,116,97,116,101,32,97,114,103,117,109,101,110,116,0] /* illegal state argume */, "i8", ALLOC_NORMAL);
__str36=allocate([105,105,58,114,97,116,101,99,118,0] /* ii:ratecv\00 */, "i8", ALLOC_NORMAL);
__str37=allocate(1, "i8", ALLOC_NORMAL);
__str38=allocate([40,79,40,105,79,41,41,0] /* (O(iO))\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([115,35,105,58,108,105,110,50,117,108,97,119,0] /* s#i:lin2ulaw\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([115,35,105,58,117,108,97,119,50,108,105,110,0] /* s#i:ulaw2lin\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([115,35,105,58,108,105,110,50,97,108,97,119,0] /* s#i:lin2alaw\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([115,35,105,58,97,108,97,119,50,108,105,110,0] /* s#i:alaw2lin\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([115,35,105,79,58,108,105,110,50,97,100,112,99,109,0] /* s#iO:lin2adpcm\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([105,105,0] /* ii\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([40,79,40,105,105,41,41,0] /* (O(ii))\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([115,35,105,79,58,97,100,112,99,109,50,108,105,110,0] /* s#iO:adpcm2lin\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([109,97,120,0] /* max\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([109,105,110,109,97,120,0] /* minmax\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([97,118,103,0] /* avg\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([109,97,120,112,112,0] /* maxpp\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([97,118,103,112,112,0] /* avgpp\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([114,109,115,0] /* rms\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([102,105,110,100,102,105,116,0] /* findfit\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([102,105,110,100,109,97,120,0] /* findmax\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([102,105,110,100,102,97,99,116,111,114,0] /* findfactor\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([99,114,111,115,115,0] /* cross\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([109,117,108,0] /* mul\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([97,100,100,0] /* add\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([98,105,97,115,0] /* bias\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([117,108,97,119,50,108,105,110,0] /* ulaw2lin\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([108,105,110,50,117,108,97,119,0] /* lin2ulaw\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([97,108,97,119,50,108,105,110,0] /* alaw2lin\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([108,105,110,50,97,108,97,119,0] /* lin2alaw\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([108,105,110,50,108,105,110,0] /* lin2lin\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([97,100,112,99,109,50,108,105,110,0] /* adpcm2lin\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([108,105,110,50,97,100,112,99,109,0] /* lin2adpcm\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([116,111,109,111,110,111,0] /* tomono\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([116,111,115,116,101,114,101,111,0] /* tostereo\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([103,101,116,115,97,109,112,108,101,0] /* getsample\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([114,101,118,101,114,115,101,0] /* reverse\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([114,97,116,101,99,118,0] /* ratecv\00 */, "i8", ALLOC_NORMAL);
_audioop_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str72=allocate([97,117,100,105,111,111,112,0] /* audioop\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([97,117,100,105,111,111,112,46,101,114,114,111,114,0] /* audioop.error\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
HEAP[_audioop_methods]=__str47;
HEAP[_audioop_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_audioop_methods+16]=__str48;
HEAP[_audioop_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_audioop_methods+32]=__str49;
HEAP[_audioop_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_audioop_methods+48]=__str50;
HEAP[_audioop_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_audioop_methods+64]=__str51;
HEAP[_audioop_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_audioop_methods+80]=__str52;
HEAP[_audioop_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_audioop_methods+96]=__str53;
HEAP[_audioop_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_audioop_methods+112]=__str54;
HEAP[_audioop_methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_audioop_methods+128]=__str55;
HEAP[_audioop_methods+132]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_audioop_methods+144]=__str56;
HEAP[_audioop_methods+148]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_audioop_methods+160]=__str57;
HEAP[_audioop_methods+164]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_audioop_methods+176]=__str58;
HEAP[_audioop_methods+180]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_audioop_methods+192]=__str59;
HEAP[_audioop_methods+196]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_audioop_methods+208]=__str60;
HEAP[_audioop_methods+212]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_audioop_methods+224]=__str61;
HEAP[_audioop_methods+228]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_audioop_methods+240]=__str62;
HEAP[_audioop_methods+244]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_audioop_methods+256]=__str63;
HEAP[_audioop_methods+260]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_audioop_methods+272]=__str64;
HEAP[_audioop_methods+276]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_audioop_methods+288]=__str65;
HEAP[_audioop_methods+292]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_audioop_methods+304]=__str66;
HEAP[_audioop_methods+308]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_audioop_methods+320]=__str67;
HEAP[_audioop_methods+324]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_audioop_methods+336]=__str68;
HEAP[_audioop_methods+340]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_audioop_methods+352]=__str69;
HEAP[_audioop_methods+356]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_audioop_methods+368]=__str70;
HEAP[_audioop_methods+372]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_audioop_methods+384]=__str71;
HEAP[_audioop_methods+388]=(FUNCTION_TABLE_OFFSET + 50);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

