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



var $0___SIZE = 80; // %0
  
var $1___SIZE = 8; // %1
  
var $2___SIZE = 192; // %2
  
var $3___SIZE = 16; // %3
  
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
  
var $struct_PyStructSequence___SIZE = 16; // %struct.PyStructSequence
  
var $struct_PyStructSequence_Desc___SIZE = 16; // %struct.PyStructSequence_Desc
  
var $struct_PyStructSequence_Field___SIZE = 8; // %struct.PyStructSequence_Field
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_fd_set___SIZE = 128; // %struct.fd_set
  
var $struct_timeb___SIZE = 12; // %struct.timeb
  var $struct_timeb___FLATTENER = [0,4,6,8];
var $struct_timeval___SIZE = 8; // %struct.timeval
  
var $struct_timezone___SIZE = 8; // %struct.timezone
  
var $struct_tm___SIZE = 44; // %struct.tm
  
var _PyExc_ValueError;
var __str;
var _PyExc_IOError;
var _time_doc;
var _clock_doc;
var __str1;
var __Py_NoneStruct;
var _sleep_doc;
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
var _struct_time_type_fields;
var _struct_time_type_desc;
var __str20;
var __str21;
var _StructTimeType;
var __str22;
var _gmtime_doc;
var __str23;
var _localtime_doc;
var __str24;
var _moddict;
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
var _strftime_doc;
var __str36;
var __str37;
var __str38;
var _strptime_doc;
var __str39;
var __str40;
var _asctime_doc;
var __str41;
var __str42;
var _ctime_doc;
var _PyExc_OverflowError;
var __str43;
var _mktime_doc;
var __str44;
var _tzset_doc;
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
var _time_methods;
var _module_doc;
var _Py_IgnoreEnvironmentFlag;
var __str59;
var _initialized;
var __str60;


















































  function __PyTime_DoubleToTimet($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $diff=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 108 "timemodule.c"
        var $2=((($1))|0); //@line 108 "timemodule.c"
        HEAP[$result]=$2; //@line 108 "timemodule.c"
        var $3=HEAP[$result]; //@line 118 "timemodule.c"
        var $4=((($3))|0); //@line 118 "timemodule.c"
        var $5=HEAP[$x_addr]; //@line 118 "timemodule.c"
        var $6=($5) - ($4); //@line 118 "timemodule.c"
        HEAP[$diff]=$6; //@line 118 "timemodule.c"
        var $7=HEAP[$diff]; //@line 119 "timemodule.c"
        var $8=($7) <= -1; //@line 119 "timemodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 119 "timemodule.c"
      case 1: // $bb
        var $9=HEAP[$diff]; //@line 119 "timemodule.c"
        var $10=($9) >= 1; //@line 119 "timemodule.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 119 "timemodule.c"
      case 2: // $bb1
        var $11=HEAP[_PyExc_ValueError]; //@line 120 "timemodule.c"
        _PyErr_SetString($11, ((__str)&4294967295)); //@line 120 "timemodule.c"
        HEAP[$result]=-1; //@line 122 "timemodule.c"
        __label__ = 3; break; //@line 122 "timemodule.c"
      case 3: // $bb2
        var $12=HEAP[$result]; //@line 124 "timemodule.c"
        HEAP[$0]=$12; //@line 124 "timemodule.c"
        var $13=HEAP[$0]; //@line 124 "timemodule.c"
        HEAP[$retval]=$13; //@line 124 "timemodule.c"
        __label__ = 4; break; //@line 124 "timemodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 124 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 124 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_time($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $unused_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $secs=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$unused_addr]=$unused;
        var $1=_floattime(); //@line 131 "timemodule.c"
        HEAP[$secs]=$1; //@line 131 "timemodule.c"
        var $2=HEAP[$secs]; //@line 132 "timemodule.c"
        var $3=($2) == 0; //@line 132 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 132 "timemodule.c"
      case 1: // $bb
        var $4=HEAP[_PyExc_IOError]; //@line 133 "timemodule.c"
        var $5=_PyErr_SetFromErrno($4); //@line 133 "timemodule.c"
        HEAP[$0]=0; //@line 134 "timemodule.c"
        __label__ = 3; break; //@line 134 "timemodule.c"
      case 2: // $bb1
        var $6=HEAP[$secs]; //@line 136 "timemodule.c"
        var $7=_PyFloat_FromDouble($6); //@line 136 "timemodule.c"
        HEAP[$0]=$7; //@line 136 "timemodule.c"
        __label__ = 3; break; //@line 136 "timemodule.c"
      case 3: // $bb2
        var $8=HEAP[$0]; //@line 134 "timemodule.c"
        HEAP[$retval]=$8; //@line 134 "timemodule.c"
        __label__ = 4; break; //@line 134 "timemodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 134 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 134 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_clock($self, $unused) {
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
        var $1=_clock(); //@line 158 "timemodule.c"
        var $2=((($1))|0); //@line 158 "timemodule.c"
        var $3=($2) / 1000000; //@line 158 "timemodule.c"
        var $4=_PyFloat_FromDouble($3); //@line 158 "timemodule.c"
        HEAP[$0]=$4; //@line 158 "timemodule.c"
        var $5=HEAP[$0]; //@line 158 "timemodule.c"
        HEAP[$retval]=$5; //@line 158 "timemodule.c"
        __label__ = 1; break; //@line 158 "timemodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 158 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 158 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_sleep($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $secs=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 204 "timemodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str1)&4294967295), $secs); //@line 204 "timemodule.c"
        var $3=((($2))|0)==0; //@line 204 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 204 "timemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 205 "timemodule.c"
        __label__ = 5; break; //@line 205 "timemodule.c"
      case 2: // $bb1
        var $4=HEAP[$secs]; //@line 206 "timemodule.c"
        var $5=_floatsleep($4); //@line 206 "timemodule.c"
        var $6=((($5))|0)!=0; //@line 206 "timemodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 206 "timemodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 207 "timemodule.c"
        __label__ = 5; break; //@line 207 "timemodule.c"
      case 4: // $bb3
        var $7=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 208 "timemodule.c"
        var $8=((($7) + 1)&4294967295); //@line 208 "timemodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$8; //@line 208 "timemodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 209 "timemodule.c"
        __label__ = 5; break; //@line 209 "timemodule.c"
      case 5: // $bb4
        var $9=HEAP[$0]; //@line 205 "timemodule.c"
        HEAP[$retval]=$9; //@line 205 "timemodule.c"
        __label__ = 6; break; //@line 205 "timemodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 205 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 205 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _tmtotuple($p) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $v=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$p_addr]=$p;
        var $1=_PyStructSequence_New(_StructTimeType); //@line 250 "timemodule.c"
        HEAP[$v]=$1; //@line 250 "timemodule.c"
        var $2=HEAP[$v]; //@line 251 "timemodule.c"
        var $3=($2)==0; //@line 251 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 251 "timemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 252 "timemodule.c"
        __label__ = 8; break; //@line 252 "timemodule.c"
      case 2: // $bb1
        var $4=HEAP[$v]; //@line 256 "timemodule.c"
        var $5=$4; //@line 256 "timemodule.c"
        var $6=HEAP[$p_addr]; //@line 256 "timemodule.c"
        var $7=(($6+20)&4294967295); //@line 256 "timemodule.c"
        var $8=HEAP[$7]; //@line 256 "timemodule.c"
        var $9=((($8) + 1900)&4294967295); //@line 256 "timemodule.c"
        var $10=_PyInt_FromLong($9); //@line 256 "timemodule.c"
        var $11=(($5+12)&4294967295); //@line 256 "timemodule.c"
        var $12=(($11)&4294967295); //@line 256 "timemodule.c"
        HEAP[$12]=$10; //@line 256 "timemodule.c"
        var $13=HEAP[$v]; //@line 257 "timemodule.c"
        var $14=$13; //@line 257 "timemodule.c"
        var $15=HEAP[$p_addr]; //@line 257 "timemodule.c"
        var $16=(($15+16)&4294967295); //@line 257 "timemodule.c"
        var $17=HEAP[$16]; //@line 257 "timemodule.c"
        var $18=((($17) + 1)&4294967295); //@line 257 "timemodule.c"
        var $19=_PyInt_FromLong($18); //@line 257 "timemodule.c"
        var $20=(($14+12)&4294967295); //@line 257 "timemodule.c"
        var $21=(($20+4)&4294967295); //@line 257 "timemodule.c"
        HEAP[$21]=$19; //@line 257 "timemodule.c"
        var $22=HEAP[$v]; //@line 258 "timemodule.c"
        var $23=$22; //@line 258 "timemodule.c"
        var $24=HEAP[$p_addr]; //@line 258 "timemodule.c"
        var $25=(($24+12)&4294967295); //@line 258 "timemodule.c"
        var $26=HEAP[$25]; //@line 258 "timemodule.c"
        var $27=_PyInt_FromLong($26); //@line 258 "timemodule.c"
        var $28=(($23+12)&4294967295); //@line 258 "timemodule.c"
        var $29=(($28+8)&4294967295); //@line 258 "timemodule.c"
        HEAP[$29]=$27; //@line 258 "timemodule.c"
        var $30=HEAP[$v]; //@line 259 "timemodule.c"
        var $31=$30; //@line 259 "timemodule.c"
        var $32=HEAP[$p_addr]; //@line 259 "timemodule.c"
        var $33=(($32+8)&4294967295); //@line 259 "timemodule.c"
        var $34=HEAP[$33]; //@line 259 "timemodule.c"
        var $35=_PyInt_FromLong($34); //@line 259 "timemodule.c"
        var $36=(($31+12)&4294967295); //@line 259 "timemodule.c"
        var $37=(($36+12)&4294967295); //@line 259 "timemodule.c"
        HEAP[$37]=$35; //@line 259 "timemodule.c"
        var $38=HEAP[$v]; //@line 260 "timemodule.c"
        var $39=$38; //@line 260 "timemodule.c"
        var $40=HEAP[$p_addr]; //@line 260 "timemodule.c"
        var $41=(($40+4)&4294967295); //@line 260 "timemodule.c"
        var $42=HEAP[$41]; //@line 260 "timemodule.c"
        var $43=_PyInt_FromLong($42); //@line 260 "timemodule.c"
        var $44=(($39+12)&4294967295); //@line 260 "timemodule.c"
        var $45=(($44+16)&4294967295); //@line 260 "timemodule.c"
        HEAP[$45]=$43; //@line 260 "timemodule.c"
        var $46=HEAP[$v]; //@line 261 "timemodule.c"
        var $47=$46; //@line 261 "timemodule.c"
        var $48=HEAP[$p_addr]; //@line 261 "timemodule.c"
        var $49=(($48)&4294967295); //@line 261 "timemodule.c"
        var $50=HEAP[$49]; //@line 261 "timemodule.c"
        var $51=_PyInt_FromLong($50); //@line 261 "timemodule.c"
        var $52=(($47+12)&4294967295); //@line 261 "timemodule.c"
        var $53=(($52+20)&4294967295); //@line 261 "timemodule.c"
        HEAP[$53]=$51; //@line 261 "timemodule.c"
        var $54=HEAP[$v]; //@line 262 "timemodule.c"
        var $55=$54; //@line 262 "timemodule.c"
        var $56=HEAP[$p_addr]; //@line 262 "timemodule.c"
        var $57=(($56+24)&4294967295); //@line 262 "timemodule.c"
        var $58=HEAP[$57]; //@line 262 "timemodule.c"
        var $59=((($58) + 6)&4294967295); //@line 262 "timemodule.c"
        var $60=((($59))|0) % 7; //@line 262 "timemodule.c"
        var $61=_PyInt_FromLong($60); //@line 262 "timemodule.c"
        var $62=(($55+12)&4294967295); //@line 262 "timemodule.c"
        var $63=(($62+24)&4294967295); //@line 262 "timemodule.c"
        HEAP[$63]=$61; //@line 262 "timemodule.c"
        var $64=HEAP[$v]; //@line 263 "timemodule.c"
        var $65=$64; //@line 263 "timemodule.c"
        var $66=HEAP[$p_addr]; //@line 263 "timemodule.c"
        var $67=(($66+28)&4294967295); //@line 263 "timemodule.c"
        var $68=HEAP[$67]; //@line 263 "timemodule.c"
        var $69=((($68) + 1)&4294967295); //@line 263 "timemodule.c"
        var $70=_PyInt_FromLong($69); //@line 263 "timemodule.c"
        var $71=(($65+12)&4294967295); //@line 263 "timemodule.c"
        var $72=(($71+28)&4294967295); //@line 263 "timemodule.c"
        HEAP[$72]=$70; //@line 263 "timemodule.c"
        var $73=HEAP[$v]; //@line 264 "timemodule.c"
        var $74=$73; //@line 264 "timemodule.c"
        var $75=HEAP[$p_addr]; //@line 264 "timemodule.c"
        var $76=(($75+32)&4294967295); //@line 264 "timemodule.c"
        var $77=HEAP[$76]; //@line 264 "timemodule.c"
        var $78=_PyInt_FromLong($77); //@line 264 "timemodule.c"
        var $79=(($74+12)&4294967295); //@line 264 "timemodule.c"
        var $80=(($79+32)&4294967295); //@line 264 "timemodule.c"
        HEAP[$80]=$78; //@line 264 "timemodule.c"
        var $81=_PyErr_Occurred(); //@line 266 "timemodule.c"
        var $82=($81)!=0; //@line 266 "timemodule.c"
        if ($82) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 266 "timemodule.c"
      case 3: // $bb2
        var $83=HEAP[$v]; //@line 267 "timemodule.c"
        var $84=($83)!=0; //@line 267 "timemodule.c"
        if ($84) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 267 "timemodule.c"
      case 4: // $bb3
        var $85=HEAP[$v]; //@line 267 "timemodule.c"
        var $86=(($85)&4294967295); //@line 267 "timemodule.c"
        var $87=HEAP[$86]; //@line 267 "timemodule.c"
        var $88=((($87) - 1)&4294967295); //@line 267 "timemodule.c"
        var $89=HEAP[$v]; //@line 267 "timemodule.c"
        var $90=(($89)&4294967295); //@line 267 "timemodule.c"
        HEAP[$90]=$88; //@line 267 "timemodule.c"
        var $91=HEAP[$v]; //@line 267 "timemodule.c"
        var $92=(($91)&4294967295); //@line 267 "timemodule.c"
        var $93=HEAP[$92]; //@line 267 "timemodule.c"
        var $94=((($93))|0)==0; //@line 267 "timemodule.c"
        if ($94) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 267 "timemodule.c"
      case 5: // $bb4
        var $95=HEAP[$v]; //@line 267 "timemodule.c"
        var $96=(($95+4)&4294967295); //@line 267 "timemodule.c"
        var $97=HEAP[$96]; //@line 267 "timemodule.c"
        var $98=(($97+24)&4294967295); //@line 267 "timemodule.c"
        var $99=HEAP[$98]; //@line 267 "timemodule.c"
        var $100=HEAP[$v]; //@line 267 "timemodule.c"
        FUNCTION_TABLE[$99]($100); //@line 267 "timemodule.c"
        __label__ = 6; break; //@line 267 "timemodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 268 "timemodule.c"
        __label__ = 8; break; //@line 268 "timemodule.c"
      case 7: // $bb6
        var $101=HEAP[$v]; //@line 271 "timemodule.c"
        HEAP[$0]=$101; //@line 271 "timemodule.c"
        __label__ = 8; break; //@line 271 "timemodule.c"
      case 8: // $bb7
        var $102=HEAP[$0]; //@line 252 "timemodule.c"
        HEAP[$retval]=$102; //@line 252 "timemodule.c"
        __label__ = 9; break; //@line 252 "timemodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 252 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 252 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_convert($when, $function) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $when_addr=__stackBase__;
        var $function_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $p=__stackBase__+20;
        var $whent=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$when_addr]=$when;
        HEAP[$function_addr]=$function;
        var $1=HEAP[$when_addr]; //@line 278 "timemodule.c"
        var $2=__PyTime_DoubleToTimet($1); //@line 278 "timemodule.c"
        HEAP[$whent]=$2; //@line 278 "timemodule.c"
        var $3=HEAP[$whent]; //@line 280 "timemodule.c"
        var $4=((($3))|0)==-1; //@line 280 "timemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 280 "timemodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 280 "timemodule.c"
        var $6=($5)!=0; //@line 280 "timemodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 280 "timemodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 281 "timemodule.c"
        __label__ = 8; break; //@line 281 "timemodule.c"
      case 3: // $bb2
        var $7=___errno_location(); //@line 282 "timemodule.c"
        HEAP[$7]=0; //@line 282 "timemodule.c"
        var $8=HEAP[$function_addr]; //@line 283 "timemodule.c"
        var $9=FUNCTION_TABLE[$8]($whent); //@line 283 "timemodule.c"
        HEAP[$p]=$9; //@line 283 "timemodule.c"
        var $10=HEAP[$p]; //@line 284 "timemodule.c"
        var $11=($10)==0; //@line 284 "timemodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 284 "timemodule.c"
      case 4: // $bb3
        var $12=___errno_location(); //@line 286 "timemodule.c"
        var $13=HEAP[$12]; //@line 286 "timemodule.c"
        var $14=((($13))|0)==0; //@line 286 "timemodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 286 "timemodule.c"
      case 5: // $bb4
        var $15=___errno_location(); //@line 287 "timemodule.c"
        HEAP[$15]=22; //@line 287 "timemodule.c"
        __label__ = 6; break; //@line 287 "timemodule.c"
      case 6: // $bb5
        var $16=HEAP[_PyExc_ValueError]; //@line 289 "timemodule.c"
        var $17=_PyErr_SetFromErrno($16); //@line 289 "timemodule.c"
        HEAP[$0]=$17; //@line 289 "timemodule.c"
        __label__ = 8; break; //@line 289 "timemodule.c"
      case 7: // $bb6
        var $18=HEAP[$p]; //@line 291 "timemodule.c"
        var $19=_tmtotuple($18); //@line 291 "timemodule.c"
        HEAP[$0]=$19; //@line 291 "timemodule.c"
        __label__ = 8; break; //@line 291 "timemodule.c"
      case 8: // $bb7
        var $20=HEAP[$0]; //@line 281 "timemodule.c"
        HEAP[$retval]=$20; //@line 281 "timemodule.c"
        __label__ = 9; break; //@line 281 "timemodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 281 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 281 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parse_time_double_args($args, $format, $pwhen) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $args_addr=__stackBase__;
        var $format_addr=__stackBase__+4;
        var $pwhen_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $ot=__stackBase__+20;
        var $when=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$args_addr]=$args;
        HEAP[$format_addr]=$format;
        HEAP[$pwhen_addr]=$pwhen;
        HEAP[$ot]=0; //@line 301 "timemodule.c"
        var $1=HEAP[$args_addr]; //@line 303 "timemodule.c"
        var $2=HEAP[$format_addr]; //@line 303 "timemodule.c"
        var $3=_PyArg_ParseTuple($1, $2, $ot); //@line 303 "timemodule.c"
        var $4=((($3))|0)==0; //@line 303 "timemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 303 "timemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 304 "timemodule.c"
        __label__ = 9; break; //@line 304 "timemodule.c"
      case 2: // $bb1
        var $5=HEAP[$ot]; //@line 305 "timemodule.c"
        var $6=($5)==0; //@line 305 "timemodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 305 "timemodule.c"
      case 3: // $bb2
        var $7=HEAP[$ot]; //@line 305 "timemodule.c"
        var $8=($7)==(__Py_NoneStruct); //@line 305 "timemodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 305 "timemodule.c"
      case 4: // $bb3
        var $9=_floattime(); //@line 306 "timemodule.c"
        var $10=HEAP[$pwhen_addr]; //@line 306 "timemodule.c"
        HEAP[$10]=$9; //@line 306 "timemodule.c"
        __label__ = 8; break; //@line 306 "timemodule.c"
      case 5: // $bb4
        var $11=HEAP[$ot]; //@line 308 "timemodule.c"
        var $12=_PyFloat_AsDouble($11); //@line 308 "timemodule.c"
        HEAP[$when]=$12; //@line 308 "timemodule.c"
        var $13=_PyErr_Occurred(); //@line 309 "timemodule.c"
        var $14=($13)!=0; //@line 309 "timemodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 309 "timemodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 310 "timemodule.c"
        __label__ = 9; break; //@line 310 "timemodule.c"
      case 7: // $bb6
        var $15=HEAP[$pwhen_addr]; //@line 311 "timemodule.c"
        var $16=HEAP[$when]; //@line 311 "timemodule.c"
        HEAP[$15]=$16; //@line 311 "timemodule.c"
        __label__ = 8; break; //@line 311 "timemodule.c"
      case 8: // $bb7
        HEAP[$0]=1; //@line 313 "timemodule.c"
        __label__ = 9; break; //@line 313 "timemodule.c"
      case 9: // $bb8
        var $17=HEAP[$0]; //@line 304 "timemodule.c"
        HEAP[$retval]=$17; //@line 304 "timemodule.c"
        __label__ = 10; break; //@line 304 "timemodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 304 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 304 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_gmtime($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $when=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 320 "timemodule.c"
        var $2=_parse_time_double_args($1, ((__str22)&4294967295), $when); //@line 320 "timemodule.c"
        var $3=((($2))|0)==0; //@line 320 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 320 "timemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 321 "timemodule.c"
        __label__ = 3; break; //@line 321 "timemodule.c"
      case 2: // $bb1
        var $4=HEAP[$when]; //@line 322 "timemodule.c"
        var $5=_time_convert($4, (FUNCTION_TABLE_OFFSET + 2)); //@line 322 "timemodule.c"
        HEAP[$0]=$5; //@line 322 "timemodule.c"
        __label__ = 3; break; //@line 322 "timemodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 321 "timemodule.c"
        HEAP[$retval]=$6; //@line 321 "timemodule.c"
        __label__ = 4; break; //@line 321 "timemodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 321 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 321 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_localtime($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $when=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 336 "timemodule.c"
        var $2=_parse_time_double_args($1, ((__str23)&4294967295), $when); //@line 336 "timemodule.c"
        var $3=((($2))|0)==0; //@line 336 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 336 "timemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 337 "timemodule.c"
        __label__ = 3; break; //@line 337 "timemodule.c"
      case 2: // $bb1
        var $4=HEAP[$when]; //@line 338 "timemodule.c"
        var $5=_time_convert($4, (FUNCTION_TABLE_OFFSET + 4)); //@line 338 "timemodule.c"
        HEAP[$0]=$5; //@line 338 "timemodule.c"
        __label__ = 3; break; //@line 338 "timemodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 337 "timemodule.c"
        HEAP[$retval]=$6; //@line 337 "timemodule.c"
        __label__ = 4; break; //@line 337 "timemodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 337 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 337 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gettmarg($args, $p) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $args_addr=__stackBase__;
        var $p_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $y=__stackBase__+16;
        var $accept=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$args_addr]=$args;
        HEAP[$p_addr]=$p;
        var $1=HEAP[$p_addr]; //@line 352 "timemodule.c"
        var $2=$1; //@line 352 "timemodule.c"
        _llvm_memset_p0i8_i32($2, 0, 44, 1, 0); //@line 352 "timemodule.c"
        var $3=HEAP[$p_addr]; //@line 354 "timemodule.c"
        var $4=(($3+32)&4294967295); //@line 354 "timemodule.c"
        var $5=HEAP[$p_addr]; //@line 354 "timemodule.c"
        var $6=(($5+28)&4294967295); //@line 354 "timemodule.c"
        var $7=HEAP[$p_addr]; //@line 354 "timemodule.c"
        var $8=(($7+24)&4294967295); //@line 354 "timemodule.c"
        var $9=HEAP[$p_addr]; //@line 354 "timemodule.c"
        var $10=(($9)&4294967295); //@line 354 "timemodule.c"
        var $11=HEAP[$p_addr]; //@line 354 "timemodule.c"
        var $12=(($11+4)&4294967295); //@line 354 "timemodule.c"
        var $13=HEAP[$p_addr]; //@line 354 "timemodule.c"
        var $14=(($13+8)&4294967295); //@line 354 "timemodule.c"
        var $15=HEAP[$p_addr]; //@line 354 "timemodule.c"
        var $16=(($15+12)&4294967295); //@line 354 "timemodule.c"
        var $17=HEAP[$p_addr]; //@line 354 "timemodule.c"
        var $18=(($17+16)&4294967295); //@line 354 "timemodule.c"
        var $19=HEAP[$args_addr]; //@line 354 "timemodule.c"
        var $20=_PyArg_Parse($19, ((__str24)&4294967295), $y, $18, $16, $14, $12, $10, $8, $6, $4); //@line 354 "timemodule.c"
        var $21=((($20))|0)==0; //@line 354 "timemodule.c"
        if ($21) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 354 "timemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 364 "timemodule.c"
        __label__ = 15; break; //@line 364 "timemodule.c"
      case 2: // $bb1
        var $22=HEAP[$y]; //@line 365 "timemodule.c"
        var $23=((($22))|0) <= 1899; //@line 365 "timemodule.c"
        if ($23) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 365 "timemodule.c"
      case 3: // $bb2
        var $24=HEAP[_moddict]; //@line 367 "timemodule.c"
        var $25=_PyDict_GetItemString($24, ((__str25)&4294967295)); //@line 367 "timemodule.c"
        HEAP[$accept]=$25; //@line 367 "timemodule.c"
        var $26=HEAP[$accept]; //@line 368 "timemodule.c"
        var $27=($26)==0; //@line 368 "timemodule.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 368 "timemodule.c"
      case 4: // $bb3
        var $28=HEAP[$accept]; //@line 368 "timemodule.c"
        var $29=(($28+4)&4294967295); //@line 368 "timemodule.c"
        var $30=HEAP[$29]; //@line 368 "timemodule.c"
        var $31=(($30+84)&4294967295); //@line 368 "timemodule.c"
        var $32=HEAP[$31]; //@line 368 "timemodule.c"
        var $33=($32) & 8388608; //@line 368 "timemodule.c"
        var $34=((($33))|0)==0; //@line 368 "timemodule.c"
        if ($34) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 368 "timemodule.c"
      case 5: // $bb4
        var $35=HEAP[$accept]; //@line 368 "timemodule.c"
        var $36=_PyInt_AsLong($35); //@line 368 "timemodule.c"
        var $37=((($36))|0)==0; //@line 368 "timemodule.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 368 "timemodule.c"
      case 6: // $bb5
        var $38=HEAP[_PyExc_ValueError]; //@line 370 "timemodule.c"
        _PyErr_SetString($38, ((__str26)&4294967295)); //@line 370 "timemodule.c"
        HEAP[$0]=0; //@line 372 "timemodule.c"
        __label__ = 15; break; //@line 372 "timemodule.c"
      case 7: // $bb6
        var $39=HEAP[$y]; //@line 374 "timemodule.c"
        var $40=((($39))|0) <= 68; //@line 374 "timemodule.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 374 "timemodule.c"
      case 8: // $bb7
        var $41=HEAP[$y]; //@line 374 "timemodule.c"
        var $42=((($41))|0) > 99; //@line 374 "timemodule.c"
        if ($42) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 374 "timemodule.c"
      case 9: // $bb8
        var $43=HEAP[$y]; //@line 375 "timemodule.c"
        var $44=((($43) + 1900)&4294967295); //@line 375 "timemodule.c"
        HEAP[$y]=$44; //@line 375 "timemodule.c"
        __label__ = 14; break; //@line 375 "timemodule.c"
      case 10: // $bb9
        var $45=HEAP[$y]; //@line 376 "timemodule.c"
        var $46=((($45))|0) < 0; //@line 376 "timemodule.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 11; break; } //@line 376 "timemodule.c"
      case 11: // $bb10
        var $47=HEAP[$y]; //@line 376 "timemodule.c"
        var $48=((($47))|0) > 68; //@line 376 "timemodule.c"
        if ($48) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 376 "timemodule.c"
      case 12: // $bb11
        var $49=HEAP[$y]; //@line 377 "timemodule.c"
        var $50=((($49) + 2000)&4294967295); //@line 377 "timemodule.c"
        HEAP[$y]=$50; //@line 377 "timemodule.c"
        __label__ = 14; break; //@line 377 "timemodule.c"
      case 13: // $bb12
        var $51=HEAP[_PyExc_ValueError]; //@line 379 "timemodule.c"
        _PyErr_SetString($51, ((__str27)&4294967295)); //@line 379 "timemodule.c"
        HEAP[$0]=0; //@line 381 "timemodule.c"
        __label__ = 15; break; //@line 381 "timemodule.c"
      case 14: // $bb13
        var $52=HEAP[$y]; //@line 384 "timemodule.c"
        var $53=((($52) - 1900)&4294967295); //@line 384 "timemodule.c"
        var $54=HEAP[$p_addr]; //@line 384 "timemodule.c"
        var $55=(($54+20)&4294967295); //@line 384 "timemodule.c"
        HEAP[$55]=$53; //@line 384 "timemodule.c"
        var $56=HEAP[$p_addr]; //@line 385 "timemodule.c"
        var $57=(($56+16)&4294967295); //@line 385 "timemodule.c"
        var $58=HEAP[$57]; //@line 385 "timemodule.c"
        var $59=((($58) - 1)&4294967295); //@line 385 "timemodule.c"
        var $60=HEAP[$p_addr]; //@line 385 "timemodule.c"
        var $61=(($60+16)&4294967295); //@line 385 "timemodule.c"
        HEAP[$61]=$59; //@line 385 "timemodule.c"
        var $62=HEAP[$p_addr]; //@line 386 "timemodule.c"
        var $63=(($62+24)&4294967295); //@line 386 "timemodule.c"
        var $64=HEAP[$63]; //@line 386 "timemodule.c"
        var $65=((($64) + 1)&4294967295); //@line 386 "timemodule.c"
        var $66=((($65))|0) % 7; //@line 386 "timemodule.c"
        var $67=HEAP[$p_addr]; //@line 386 "timemodule.c"
        var $68=(($67+24)&4294967295); //@line 386 "timemodule.c"
        HEAP[$68]=$66; //@line 386 "timemodule.c"
        var $69=HEAP[$p_addr]; //@line 387 "timemodule.c"
        var $70=(($69+28)&4294967295); //@line 387 "timemodule.c"
        var $71=HEAP[$70]; //@line 387 "timemodule.c"
        var $72=((($71) - 1)&4294967295); //@line 387 "timemodule.c"
        var $73=HEAP[$p_addr]; //@line 387 "timemodule.c"
        var $74=(($73+28)&4294967295); //@line 387 "timemodule.c"
        HEAP[$74]=$72; //@line 387 "timemodule.c"
        HEAP[$0]=1; //@line 388 "timemodule.c"
        __label__ = 15; break; //@line 388 "timemodule.c"
      case 15: // $bb14
        var $75=HEAP[$0]; //@line 364 "timemodule.c"
        HEAP[$retval]=$75; //@line 364 "timemodule.c"
        __label__ = 16; break; //@line 364 "timemodule.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 364 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 364 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_strftime($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 92; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 92);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $tup=__stackBase__+16;
        var $buf=__stackBase__+20;
        var $fmt=__stackBase__+64;
        var $fmtlen=__stackBase__+68;
        var $buflen=__stackBase__+72;
        var $outbuf=__stackBase__+76;
        var $i=__stackBase__+80;
        var $tt=__stackBase__+84;
        var $ret=__stackBase__+88;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$tup]=0; //@line 395 "timemodule.c"
        HEAP[$outbuf]=0; //@line 399 "timemodule.c"
        var $buf1=$buf; //@line 402 "timemodule.c"
        _llvm_memset_p0i8_i32($buf1, 0, 44, 1, 0); //@line 402 "timemodule.c"
        var $1=HEAP[$args_addr]; //@line 404 "timemodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str28)&4294967295), $fmt, $tup); //@line 404 "timemodule.c"
        var $3=((($2))|0)==0; //@line 404 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 404 "timemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 405 "timemodule.c"
        __label__ = 43; break; //@line 405 "timemodule.c"
      case 2: // $bb2
        var $4=HEAP[$tup]; //@line 407 "timemodule.c"
        var $5=($4)==0; //@line 407 "timemodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 407 "timemodule.c"
      case 3: // $bb3
        var $6=_time(0); //@line 408 "timemodule.c"
        HEAP[$tt]=$6; //@line 408 "timemodule.c"
        var $7=_localtime($tt); //@line 409 "timemodule.c"
        var $buf4=$buf; //@line 409 "timemodule.c"
        var $8=$7; //@line 409 "timemodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($buf4, $8, 44, 4, 0); //@line 409 "timemodule.c"
        __label__ = 6; break; //@line 409 "timemodule.c"
      case 4: // $bb5
        var $9=HEAP[$tup]; //@line 410 "timemodule.c"
        var $10=_gettmarg($9, $buf); //@line 410 "timemodule.c"
        var $11=((($10))|0)==0; //@line 410 "timemodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 410 "timemodule.c"
      case 5: // $bb6
        HEAP[$0]=0; //@line 411 "timemodule.c"
        __label__ = 43; break; //@line 411 "timemodule.c"
      case 6: // $bb7
        var $12=(($buf+16)&4294967295); //@line 437 "timemodule.c"
        var $13=HEAP[$12]; //@line 437 "timemodule.c"
        var $14=((($13))|0)==-1; //@line 437 "timemodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 437 "timemodule.c"
      case 7: // $bb8
        var $15=(($buf+16)&4294967295); //@line 438 "timemodule.c"
        HEAP[$15]=0; //@line 438 "timemodule.c"
        __label__ = 11; break; //@line 438 "timemodule.c"
      case 8: // $bb9
        var $16=(($buf+16)&4294967295); //@line 439 "timemodule.c"
        var $17=HEAP[$16]; //@line 439 "timemodule.c"
        var $18=((($17))|0) < 0; //@line 439 "timemodule.c"
        if ($18) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 439 "timemodule.c"
      case 9: // $bb10
        var $19=(($buf+16)&4294967295); //@line 439 "timemodule.c"
        var $20=HEAP[$19]; //@line 439 "timemodule.c"
        var $21=((($20))|0) > 11; //@line 439 "timemodule.c"
        if ($21) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 439 "timemodule.c"
      case 10: // $bb11
        var $22=HEAP[_PyExc_ValueError]; //@line 440 "timemodule.c"
        _PyErr_SetString($22, ((__str29)&4294967295)); //@line 440 "timemodule.c"
        HEAP[$0]=0; //@line 441 "timemodule.c"
        __label__ = 43; break; //@line 441 "timemodule.c"
      case 11: // $bb12
        var $23=(($buf+12)&4294967295); //@line 443 "timemodule.c"
        var $24=HEAP[$23]; //@line 443 "timemodule.c"
        var $25=((($24))|0)==0; //@line 443 "timemodule.c"
        if ($25) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 443 "timemodule.c"
      case 12: // $bb13
        var $26=(($buf+12)&4294967295); //@line 444 "timemodule.c"
        HEAP[$26]=1; //@line 444 "timemodule.c"
        __label__ = 16; break; //@line 444 "timemodule.c"
      case 13: // $bb14
        var $27=(($buf+12)&4294967295); //@line 445 "timemodule.c"
        var $28=HEAP[$27]; //@line 445 "timemodule.c"
        var $29=((($28))|0) < 0; //@line 445 "timemodule.c"
        if ($29) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 445 "timemodule.c"
      case 14: // $bb15
        var $30=(($buf+12)&4294967295); //@line 445 "timemodule.c"
        var $31=HEAP[$30]; //@line 445 "timemodule.c"
        var $32=((($31))|0) > 31; //@line 445 "timemodule.c"
        if ($32) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 445 "timemodule.c"
      case 15: // $bb16
        var $33=HEAP[_PyExc_ValueError]; //@line 446 "timemodule.c"
        _PyErr_SetString($33, ((__str30)&4294967295)); //@line 446 "timemodule.c"
        HEAP[$0]=0; //@line 447 "timemodule.c"
        __label__ = 43; break; //@line 447 "timemodule.c"
      case 16: // $bb17
        var $34=(($buf+8)&4294967295); //@line 449 "timemodule.c"
        var $35=HEAP[$34]; //@line 449 "timemodule.c"
        var $36=((($35))|0) < 0; //@line 449 "timemodule.c"
        if ($36) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 449 "timemodule.c"
      case 17: // $bb18
        var $37=(($buf+8)&4294967295); //@line 449 "timemodule.c"
        var $38=HEAP[$37]; //@line 449 "timemodule.c"
        var $39=((($38))|0) > 23; //@line 449 "timemodule.c"
        if ($39) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 449 "timemodule.c"
      case 18: // $bb19
        var $40=HEAP[_PyExc_ValueError]; //@line 450 "timemodule.c"
        _PyErr_SetString($40, ((__str31)&4294967295)); //@line 450 "timemodule.c"
        HEAP[$0]=0; //@line 451 "timemodule.c"
        __label__ = 43; break; //@line 451 "timemodule.c"
      case 19: // $bb20
        var $41=(($buf+4)&4294967295); //@line 453 "timemodule.c"
        var $42=HEAP[$41]; //@line 453 "timemodule.c"
        var $43=((($42))|0) < 0; //@line 453 "timemodule.c"
        if ($43) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 453 "timemodule.c"
      case 20: // $bb21
        var $44=(($buf+4)&4294967295); //@line 453 "timemodule.c"
        var $45=HEAP[$44]; //@line 453 "timemodule.c"
        var $46=((($45))|0) > 59; //@line 453 "timemodule.c"
        if ($46) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 453 "timemodule.c"
      case 21: // $bb22
        var $47=HEAP[_PyExc_ValueError]; //@line 454 "timemodule.c"
        _PyErr_SetString($47, ((__str32)&4294967295)); //@line 454 "timemodule.c"
        HEAP[$0]=0; //@line 455 "timemodule.c"
        __label__ = 43; break; //@line 455 "timemodule.c"
      case 22: // $bb23
        var $48=(($buf)&4294967295); //@line 457 "timemodule.c"
        var $49=HEAP[$48]; //@line 457 "timemodule.c"
        var $50=((($49))|0) < 0; //@line 457 "timemodule.c"
        if ($50) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 457 "timemodule.c"
      case 23: // $bb24
        var $51=(($buf)&4294967295); //@line 457 "timemodule.c"
        var $52=HEAP[$51]; //@line 457 "timemodule.c"
        var $53=((($52))|0) > 61; //@line 457 "timemodule.c"
        if ($53) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 457 "timemodule.c"
      case 24: // $bb25
        var $54=HEAP[_PyExc_ValueError]; //@line 458 "timemodule.c"
        _PyErr_SetString($54, ((__str33)&4294967295)); //@line 458 "timemodule.c"
        HEAP[$0]=0; //@line 459 "timemodule.c"
        __label__ = 43; break; //@line 459 "timemodule.c"
      case 25: // $bb26
        var $55=(($buf+24)&4294967295); //@line 463 "timemodule.c"
        var $56=HEAP[$55]; //@line 463 "timemodule.c"
        var $57=((($56))|0) < 0; //@line 463 "timemodule.c"
        if ($57) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 463 "timemodule.c"
      case 26: // $bb27
        var $58=HEAP[_PyExc_ValueError]; //@line 464 "timemodule.c"
        _PyErr_SetString($58, ((__str34)&4294967295)); //@line 464 "timemodule.c"
        HEAP[$0]=0; //@line 465 "timemodule.c"
        __label__ = 43; break; //@line 465 "timemodule.c"
      case 27: // $bb28
        var $59=(($buf+28)&4294967295); //@line 467 "timemodule.c"
        var $60=HEAP[$59]; //@line 467 "timemodule.c"
        var $61=((($60))|0)==-1; //@line 467 "timemodule.c"
        if ($61) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 467 "timemodule.c"
      case 28: // $bb29
        var $62=(($buf+28)&4294967295); //@line 468 "timemodule.c"
        HEAP[$62]=0; //@line 468 "timemodule.c"
        __label__ = 32; break; //@line 468 "timemodule.c"
      case 29: // $bb30
        var $63=(($buf+28)&4294967295); //@line 469 "timemodule.c"
        var $64=HEAP[$63]; //@line 469 "timemodule.c"
        var $65=((($64))|0) < 0; //@line 469 "timemodule.c"
        if ($65) { __label__ = 31; break; } else { __label__ = 30; break; } //@line 469 "timemodule.c"
      case 30: // $bb31
        var $66=(($buf+28)&4294967295); //@line 469 "timemodule.c"
        var $67=HEAP[$66]; //@line 469 "timemodule.c"
        var $68=((($67))|0) > 365; //@line 469 "timemodule.c"
        if ($68) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 469 "timemodule.c"
      case 31: // $bb32
        var $69=HEAP[_PyExc_ValueError]; //@line 470 "timemodule.c"
        _PyErr_SetString($69, ((__str35)&4294967295)); //@line 470 "timemodule.c"
        HEAP[$0]=0; //@line 471 "timemodule.c"
        __label__ = 43; break; //@line 471 "timemodule.c"
      case 32: // $bb33
        var $70=(($buf+32)&4294967295); //@line 476 "timemodule.c"
        var $71=HEAP[$70]; //@line 476 "timemodule.c"
        var $72=((($71))|0) < -1; //@line 476 "timemodule.c"
        if ($72) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 476 "timemodule.c"
      case 33: // $bb34
        var $73=(($buf+32)&4294967295); //@line 477 "timemodule.c"
        HEAP[$73]=-1; //@line 477 "timemodule.c"
        __label__ = 36; break; //@line 477 "timemodule.c"
      case 34: // $bb35
        var $74=(($buf+32)&4294967295); //@line 478 "timemodule.c"
        var $75=HEAP[$74]; //@line 478 "timemodule.c"
        var $76=((($75))|0) > 1; //@line 478 "timemodule.c"
        if ($76) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 478 "timemodule.c"
      case 35: // $bb36
        var $77=(($buf+32)&4294967295); //@line 479 "timemodule.c"
        HEAP[$77]=1; //@line 479 "timemodule.c"
        __label__ = 36; break; //@line 479 "timemodule.c"
      case 36: // $bb37
        var $78=HEAP[$fmt]; //@line 498 "timemodule.c"
        var $79=_strlen($78); //@line 498 "timemodule.c"
        HEAP[$fmtlen]=$79; //@line 498 "timemodule.c"
        HEAP[$i]=1024; //@line 503 "timemodule.c"
        __label__ = 37; break; //@line 503 "timemodule.c"
      case 37: // $bb38
        var $80=HEAP[$i]; //@line 504 "timemodule.c"
        var $81=_malloc($80); //@line 504 "timemodule.c"
        HEAP[$outbuf]=$81; //@line 504 "timemodule.c"
        var $82=HEAP[$outbuf]; //@line 505 "timemodule.c"
        var $83=($82)==0; //@line 505 "timemodule.c"
        if ($83) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 505 "timemodule.c"
      case 38: // $bb39
        var $84=_PyErr_NoMemory(); //@line 506 "timemodule.c"
        HEAP[$0]=$84; //@line 506 "timemodule.c"
        __label__ = 43; break; //@line 506 "timemodule.c"
      case 39: // $bb40
        var $85=HEAP[$fmt]; //@line 508 "timemodule.c"
        var $86=HEAP[$outbuf]; //@line 508 "timemodule.c"
        var $87=HEAP[$i]; //@line 508 "timemodule.c"
        var $88=_strftime($86, $87, $85, $buf); //@line 508 "timemodule.c"
        HEAP[$buflen]=$88; //@line 508 "timemodule.c"
        var $89=HEAP[$buflen]; //@line 509 "timemodule.c"
        var $90=((($89))|0)!=0; //@line 509 "timemodule.c"
        if ($90) { __label__ = 41; break; } else { __label__ = 40; break; } //@line 509 "timemodule.c"
      case 40: // $bb41
        var $91=HEAP[$fmtlen]; //@line 509 "timemodule.c"
        var $92=((($91) * 256)&4294967295); //@line 509 "timemodule.c"
        var $93=HEAP[$i]; //@line 509 "timemodule.c"
        var $94=((($92))>>>0) <= ((($93))>>>0); //@line 509 "timemodule.c"
        if ($94) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 509 "timemodule.c"
      case 41: // $bb42
        var $95=HEAP[$buflen]; //@line 516 "timemodule.c"
        var $96=HEAP[$outbuf]; //@line 516 "timemodule.c"
        var $97=_PyString_FromStringAndSize($96, $95); //@line 516 "timemodule.c"
        HEAP[$ret]=$97; //@line 516 "timemodule.c"
        var $98=HEAP[$outbuf]; //@line 517 "timemodule.c"
        _free($98); //@line 517 "timemodule.c"
        var $99=HEAP[$ret]; //@line 518 "timemodule.c"
        HEAP[$0]=$99; //@line 518 "timemodule.c"
        __label__ = 43; break; //@line 518 "timemodule.c"
      case 42: // $bb43
        var $100=HEAP[$outbuf]; //@line 520 "timemodule.c"
        _free($100); //@line 520 "timemodule.c"
        var $101=HEAP[$i]; //@line 503 "timemodule.c"
        var $102=HEAP[$i]; //@line 503 "timemodule.c"
        var $103=((($101) + ($102))&4294967295); //@line 503 "timemodule.c"
        HEAP[$i]=$103; //@line 503 "timemodule.c"
        __label__ = 37; break; //@line 503 "timemodule.c"
      case 43: // $bb44
        var $104=HEAP[$0]; //@line 405 "timemodule.c"
        HEAP[$retval]=$104; //@line 405 "timemodule.c"
        __label__ = 44; break; //@line 405 "timemodule.c"
      case 44: // $return
        var $retval45=HEAP[$retval]; //@line 405 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 405 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_strptime($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $strptime_module=__stackBase__+16;
        var $strptime_result=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=_PyImport_ImportModuleNoBlock(((__str36)&4294967295)); //@line 543 "timemodule.c"
        HEAP[$strptime_module]=$1; //@line 543 "timemodule.c"
        var $2=HEAP[$strptime_module]; //@line 546 "timemodule.c"
        var $3=($2)==0; //@line 546 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 546 "timemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 547 "timemodule.c"
        __label__ = 5; break; //@line 547 "timemodule.c"
      case 2: // $bb1
        var $4=HEAP[$strptime_module]; //@line 548 "timemodule.c"
        var $5=HEAP[$args_addr]; //@line 548 "timemodule.c"
        var $6=_PyObject_CallMethod($4, ((__str37)&4294967295), ((__str38)&4294967295), $5); //@line 548 "timemodule.c"
        HEAP[$strptime_result]=$6; //@line 548 "timemodule.c"
        var $7=HEAP[$strptime_module]; //@line 550 "timemodule.c"
        var $8=(($7)&4294967295); //@line 550 "timemodule.c"
        var $9=HEAP[$8]; //@line 550 "timemodule.c"
        var $10=((($9) - 1)&4294967295); //@line 550 "timemodule.c"
        var $11=HEAP[$strptime_module]; //@line 550 "timemodule.c"
        var $12=(($11)&4294967295); //@line 550 "timemodule.c"
        HEAP[$12]=$10; //@line 550 "timemodule.c"
        var $13=HEAP[$strptime_module]; //@line 550 "timemodule.c"
        var $14=(($13)&4294967295); //@line 550 "timemodule.c"
        var $15=HEAP[$14]; //@line 550 "timemodule.c"
        var $16=((($15))|0)==0; //@line 550 "timemodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 550 "timemodule.c"
      case 3: // $bb2
        var $17=HEAP[$strptime_module]; //@line 550 "timemodule.c"
        var $18=(($17+4)&4294967295); //@line 550 "timemodule.c"
        var $19=HEAP[$18]; //@line 550 "timemodule.c"
        var $20=(($19+24)&4294967295); //@line 550 "timemodule.c"
        var $21=HEAP[$20]; //@line 550 "timemodule.c"
        var $22=HEAP[$strptime_module]; //@line 550 "timemodule.c"
        FUNCTION_TABLE[$21]($22); //@line 550 "timemodule.c"
        __label__ = 4; break; //@line 550 "timemodule.c"
      case 4: // $bb3
        var $23=HEAP[$strptime_result]; //@line 551 "timemodule.c"
        HEAP[$0]=$23; //@line 551 "timemodule.c"
        __label__ = 5; break; //@line 551 "timemodule.c"
      case 5: // $bb4
        var $24=HEAP[$0]; //@line 547 "timemodule.c"
        HEAP[$retval]=$24; //@line 547 "timemodule.c"
        __label__ = 6; break; //@line 547 "timemodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 547 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 547 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_asctime($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 72; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $tup=__stackBase__+16;
        var $buf=__stackBase__+20;
        var $p=__stackBase__+64;
        var $tt=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$tup]=0; //@line 564 "timemodule.c"
        var $1=HEAP[$args_addr]; //@line 567 "timemodule.c"
        var $2=_PyArg_UnpackTuple($1, ((__str39)&4294967295), 0, 1, $tup); //@line 567 "timemodule.c"
        var $3=((($2))|0)==0; //@line 567 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 567 "timemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 568 "timemodule.c"
        __label__ = 11; break; //@line 568 "timemodule.c"
      case 2: // $bb1
        var $4=HEAP[$tup]; //@line 569 "timemodule.c"
        var $5=($4)==0; //@line 569 "timemodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 569 "timemodule.c"
      case 3: // $bb2
        var $6=_time(0); //@line 570 "timemodule.c"
        HEAP[$tt]=$6; //@line 570 "timemodule.c"
        var $7=_localtime($tt); //@line 571 "timemodule.c"
        var $buf3=$buf; //@line 571 "timemodule.c"
        var $8=$7; //@line 571 "timemodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($buf3, $8, 44, 4, 0); //@line 571 "timemodule.c"
        __label__ = 6; break; //@line 571 "timemodule.c"
      case 4: // $bb4
        var $9=HEAP[$tup]; //@line 572 "timemodule.c"
        var $10=_gettmarg($9, $buf); //@line 572 "timemodule.c"
        var $11=((($10))|0)==0; //@line 572 "timemodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 572 "timemodule.c"
      case 5: // $bb5
        HEAP[$0]=0; //@line 573 "timemodule.c"
        __label__ = 11; break; //@line 573 "timemodule.c"
      case 6: // $bb6
        var $12=_asctime($buf); //@line 574 "timemodule.c"
        HEAP[$p]=$12; //@line 574 "timemodule.c"
        var $13=HEAP[$p]; //@line 575 "timemodule.c"
        var $14=($13)==0; //@line 575 "timemodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 575 "timemodule.c"
      case 7: // $bb7
        var $15=HEAP[_PyExc_ValueError]; //@line 576 "timemodule.c"
        _PyErr_SetString($15, ((__str40)&4294967295)); //@line 576 "timemodule.c"
        HEAP[$0]=0; //@line 577 "timemodule.c"
        __label__ = 11; break; //@line 577 "timemodule.c"
      case 8: // $bb8
        var $16=HEAP[$p]; //@line 579 "timemodule.c"
        var $17=(($16+24)&4294967295); //@line 579 "timemodule.c"
        var $18=HEAP[$17]; //@line 579 "timemodule.c"
        var $19=reSign(($18), 8, 0)==10; //@line 579 "timemodule.c"
        if ($19) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 579 "timemodule.c"
      case 9: // $bb9
        var $20=HEAP[$p]; //@line 580 "timemodule.c"
        var $21=(($20+24)&4294967295); //@line 580 "timemodule.c"
        HEAP[$21]=0; //@line 580 "timemodule.c"
        __label__ = 10; break; //@line 580 "timemodule.c"
      case 10: // $bb10
        var $22=HEAP[$p]; //@line 581 "timemodule.c"
        var $23=_PyString_FromString($22); //@line 581 "timemodule.c"
        HEAP[$0]=$23; //@line 581 "timemodule.c"
        __label__ = 11; break; //@line 581 "timemodule.c"
      case 11: // $bb11
        var $24=HEAP[$0]; //@line 568 "timemodule.c"
        HEAP[$retval]=$24; //@line 568 "timemodule.c"
        __label__ = 12; break; //@line 568 "timemodule.c"
      case 12: // $return
        var $retval12=HEAP[$retval]; //@line 568 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 568 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_ctime($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ot=__stackBase__+16;
        var $tt=__stackBase__+20;
        var $p=__stackBase__+24;
        var $dt=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$ot]=0; //@line 594 "timemodule.c"
        var $1=HEAP[$args_addr]; //@line 598 "timemodule.c"
        var $2=_PyArg_UnpackTuple($1, ((__str41)&4294967295), 0, 1, $ot); //@line 598 "timemodule.c"
        var $3=((($2))|0)==0; //@line 598 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 598 "timemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 599 "timemodule.c"
        __label__ = 15; break; //@line 599 "timemodule.c"
      case 2: // $bb1
        var $4=HEAP[$ot]; //@line 600 "timemodule.c"
        var $5=($4)==0; //@line 600 "timemodule.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 600 "timemodule.c"
      case 3: // $bb2
        var $6=HEAP[$ot]; //@line 600 "timemodule.c"
        var $7=($6)==(__Py_NoneStruct); //@line 600 "timemodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 600 "timemodule.c"
      case 4: // $bb3
        var $8=_time(0); //@line 601 "timemodule.c"
        HEAP[$tt]=$8; //@line 601 "timemodule.c"
        __label__ = 10; break; //@line 601 "timemodule.c"
      case 5: // $bb4
        var $9=HEAP[$ot]; //@line 603 "timemodule.c"
        var $10=_PyFloat_AsDouble($9); //@line 603 "timemodule.c"
        HEAP[$dt]=$10; //@line 603 "timemodule.c"
        var $11=_PyErr_Occurred(); //@line 604 "timemodule.c"
        var $12=($11)!=0; //@line 604 "timemodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 604 "timemodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 605 "timemodule.c"
        __label__ = 15; break; //@line 605 "timemodule.c"
      case 7: // $bb6
        var $13=HEAP[$dt]; //@line 606 "timemodule.c"
        var $14=__PyTime_DoubleToTimet($13); //@line 606 "timemodule.c"
        HEAP[$tt]=$14; //@line 606 "timemodule.c"
        var $15=HEAP[$tt]; //@line 607 "timemodule.c"
        var $16=((($15))|0)==-1; //@line 607 "timemodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 607 "timemodule.c"
      case 8: // $bb7
        var $17=_PyErr_Occurred(); //@line 607 "timemodule.c"
        var $18=($17)!=0; //@line 607 "timemodule.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 607 "timemodule.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 608 "timemodule.c"
        __label__ = 15; break; //@line 608 "timemodule.c"
      case 10: // $bb9
        var $19=_ctime($tt); //@line 610 "timemodule.c"
        HEAP[$p]=$19; //@line 610 "timemodule.c"
        var $20=HEAP[$p]; //@line 611 "timemodule.c"
        var $21=($20)==0; //@line 611 "timemodule.c"
        if ($21) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 611 "timemodule.c"
      case 11: // $bb10
        var $22=HEAP[_PyExc_ValueError]; //@line 612 "timemodule.c"
        _PyErr_SetString($22, ((__str42)&4294967295)); //@line 612 "timemodule.c"
        HEAP[$0]=0; //@line 613 "timemodule.c"
        __label__ = 15; break; //@line 613 "timemodule.c"
      case 12: // $bb11
        var $23=HEAP[$p]; //@line 615 "timemodule.c"
        var $24=(($23+24)&4294967295); //@line 615 "timemodule.c"
        var $25=HEAP[$24]; //@line 615 "timemodule.c"
        var $26=reSign(($25), 8, 0)==10; //@line 615 "timemodule.c"
        if ($26) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 615 "timemodule.c"
      case 13: // $bb12
        var $27=HEAP[$p]; //@line 616 "timemodule.c"
        var $28=(($27+24)&4294967295); //@line 616 "timemodule.c"
        HEAP[$28]=0; //@line 616 "timemodule.c"
        __label__ = 14; break; //@line 616 "timemodule.c"
      case 14: // $bb13
        var $29=HEAP[$p]; //@line 617 "timemodule.c"
        var $30=_PyString_FromString($29); //@line 617 "timemodule.c"
        HEAP[$0]=$30; //@line 617 "timemodule.c"
        __label__ = 15; break; //@line 617 "timemodule.c"
      case 15: // $bb14
        var $31=HEAP[$0]; //@line 599 "timemodule.c"
        HEAP[$retval]=$31; //@line 599 "timemodule.c"
        __label__ = 16; break; //@line 599 "timemodule.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 599 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 599 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_mktime($self, $tup) {
    var __stackBase__  = STACKTOP; STACKTOP += 64; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $tup_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $buf=__stackBase__+16;
        var $tt=__stackBase__+60;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$tup_addr]=$tup;
        var $1=HEAP[$tup_addr]; //@line 633 "timemodule.c"
        var $2=_gettmarg($1, $buf); //@line 633 "timemodule.c"
        var $3=((($2))|0)==0; //@line 633 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 633 "timemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 634 "timemodule.c"
        __label__ = 6; break; //@line 634 "timemodule.c"
      case 2: // $bb1
        var $4=(($buf+24)&4294967295); //@line 635 "timemodule.c"
        HEAP[$4]=-1; //@line 635 "timemodule.c"
        var $5=_mktime($buf); //@line 636 "timemodule.c"
        HEAP[$tt]=$5; //@line 636 "timemodule.c"
        var $6=HEAP[$tt]; //@line 639 "timemodule.c"
        var $7=((($6))|0)==-1; //@line 639 "timemodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 639 "timemodule.c"
      case 3: // $bb2
        var $8=(($buf+24)&4294967295); //@line 639 "timemodule.c"
        var $9=HEAP[$8]; //@line 639 "timemodule.c"
        var $10=((($9))|0)==-1; //@line 639 "timemodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 639 "timemodule.c"
      case 4: // $bb3
        var $11=HEAP[_PyExc_OverflowError]; //@line 640 "timemodule.c"
        _PyErr_SetString($11, ((__str43)&4294967295)); //@line 640 "timemodule.c"
        HEAP[$0]=0; //@line 642 "timemodule.c"
        __label__ = 6; break; //@line 642 "timemodule.c"
      case 5: // $bb4
        var $12=HEAP[$tt]; //@line 644 "timemodule.c"
        var $13=((($12))|0); //@line 644 "timemodule.c"
        var $14=_PyFloat_FromDouble($13); //@line 644 "timemodule.c"
        HEAP[$0]=$14; //@line 644 "timemodule.c"
        __label__ = 6; break; //@line 644 "timemodule.c"
      case 6: // $bb5
        var $15=HEAP[$0]; //@line 634 "timemodule.c"
        HEAP[$retval]=$15; //@line 634 "timemodule.c"
        __label__ = 7; break; //@line 634 "timemodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 634 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 634 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_tzset($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $unused_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $m=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$unused_addr]=$unused;
        var $1=_PyImport_ImportModuleNoBlock(((__str44)&4294967295)); //@line 661 "timemodule.c"
        HEAP[$m]=$1; //@line 661 "timemodule.c"
        var $2=HEAP[$m]; //@line 662 "timemodule.c"
        var $3=($2)==0; //@line 662 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 662 "timemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 663 "timemodule.c"
        __label__ = 5; break; //@line 663 "timemodule.c"
      case 2: // $bb1
        _tzset(); //@line 666 "timemodule.c"
        var $4=HEAP[$m]; //@line 669 "timemodule.c"
        _inittimezone($4); //@line 669 "timemodule.c"
        var $5=HEAP[$m]; //@line 670 "timemodule.c"
        var $6=(($5)&4294967295); //@line 670 "timemodule.c"
        var $7=HEAP[$6]; //@line 670 "timemodule.c"
        var $8=((($7) - 1)&4294967295); //@line 670 "timemodule.c"
        var $9=HEAP[$m]; //@line 670 "timemodule.c"
        var $10=(($9)&4294967295); //@line 670 "timemodule.c"
        HEAP[$10]=$8; //@line 670 "timemodule.c"
        var $11=HEAP[$m]; //@line 670 "timemodule.c"
        var $12=(($11)&4294967295); //@line 670 "timemodule.c"
        var $13=HEAP[$12]; //@line 670 "timemodule.c"
        var $14=((($13))|0)==0; //@line 670 "timemodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 670 "timemodule.c"
      case 3: // $bb2
        var $15=HEAP[$m]; //@line 670 "timemodule.c"
        var $16=(($15+4)&4294967295); //@line 670 "timemodule.c"
        var $17=HEAP[$16]; //@line 670 "timemodule.c"
        var $18=(($17+24)&4294967295); //@line 670 "timemodule.c"
        var $19=HEAP[$18]; //@line 670 "timemodule.c"
        var $20=HEAP[$m]; //@line 670 "timemodule.c"
        FUNCTION_TABLE[$19]($20); //@line 670 "timemodule.c"
        __label__ = 4; break; //@line 670 "timemodule.c"
      case 4: // $bb3
        var $21=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 672 "timemodule.c"
        var $22=((($21) + 1)&4294967295); //@line 672 "timemodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$22; //@line 672 "timemodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 673 "timemodule.c"
        __label__ = 5; break; //@line 673 "timemodule.c"
      case 5: // $bb4
        var $23=HEAP[$0]; //@line 663 "timemodule.c"
        HEAP[$retval]=$23; //@line 663 "timemodule.c"
        __label__ = 6; break; //@line 663 "timemodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 663 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 663 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _inittimezone($m) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m_addr=__stackBase__;
        var $iftmp_53=__stackBase__+4;
        var $iftmp_51=__stackBase__+8;
        var $t=__stackBase__+12;
        var $p=__stackBase__+16;
        var $janzone=__stackBase__+20;
        var $julyzone=__stackBase__+24;
        var $janname=__stackBase__+28;
        var $julyname=__stackBase__+38;
        var $_alloca_point_=0;
        HEAP[$m_addr]=$m;
        var $0=_time(0); //@line 735 "timemodule.c"
        var $1=((((($0))|0)/31557600)|0); //@line 735 "timemodule.c"
        var $2=((($1) * 31557600)&4294967295); //@line 735 "timemodule.c"
        HEAP[$t]=$2; //@line 735 "timemodule.c"
        var $3=_localtime($t); //@line 736 "timemodule.c"
        HEAP[$p]=$3; //@line 736 "timemodule.c"
        var $4=HEAP[$p]; //@line 737 "timemodule.c"
        var $5=(($4+36)&4294967295); //@line 737 "timemodule.c"
        var $6=HEAP[$5]; //@line 737 "timemodule.c"
        var $7=((0 - ($6))&4294967295); //@line 737 "timemodule.c"
        HEAP[$janzone]=$7; //@line 737 "timemodule.c"
        var $8=HEAP[$p]; //@line 738 "timemodule.c"
        var $9=(($8+40)&4294967295); //@line 738 "timemodule.c"
        var $10=HEAP[$9]; //@line 738 "timemodule.c"
        var $11=($10)!=0; //@line 738 "timemodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 738 "timemodule.c"
      case 1: // $bb
        var $12=HEAP[$p]; //@line 738 "timemodule.c"
        var $13=(($12+40)&4294967295); //@line 738 "timemodule.c"
        var $14=HEAP[$13]; //@line 738 "timemodule.c"
        HEAP[$iftmp_51]=$14; //@line 738 "timemodule.c"
        __label__ = 3; break; //@line 738 "timemodule.c"
      case 2: // $bb1
        HEAP[$iftmp_51]=((__str45)&4294967295); //@line 738 "timemodule.c"
        __label__ = 3; break; //@line 738 "timemodule.c"
      case 3: // $bb2
        var $janname3=$janname; //@line 738 "timemodule.c"
        var $15=HEAP[$iftmp_51]; //@line 738 "timemodule.c"
        var $16=_strncpy($janname3, $15, 9); //@line 738 "timemodule.c"
        var $17=(($janname+9)&4294967295); //@line 739 "timemodule.c"
        HEAP[$17]=0; //@line 739 "timemodule.c"
        var $18=HEAP[$t]; //@line 740 "timemodule.c"
        var $19=((($18) + 15778800)&4294967295); //@line 740 "timemodule.c"
        HEAP[$t]=$19; //@line 740 "timemodule.c"
        var $20=_localtime($t); //@line 741 "timemodule.c"
        HEAP[$p]=$20; //@line 741 "timemodule.c"
        var $21=HEAP[$p]; //@line 742 "timemodule.c"
        var $22=(($21+36)&4294967295); //@line 742 "timemodule.c"
        var $23=HEAP[$22]; //@line 742 "timemodule.c"
        var $24=((0 - ($23))&4294967295); //@line 742 "timemodule.c"
        HEAP[$julyzone]=$24; //@line 742 "timemodule.c"
        var $25=HEAP[$p]; //@line 743 "timemodule.c"
        var $26=(($25+40)&4294967295); //@line 743 "timemodule.c"
        var $27=HEAP[$26]; //@line 743 "timemodule.c"
        var $28=($27)!=0; //@line 743 "timemodule.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 743 "timemodule.c"
      case 4: // $bb4
        var $29=HEAP[$p]; //@line 743 "timemodule.c"
        var $30=(($29+40)&4294967295); //@line 743 "timemodule.c"
        var $31=HEAP[$30]; //@line 743 "timemodule.c"
        HEAP[$iftmp_53]=$31; //@line 743 "timemodule.c"
        __label__ = 6; break; //@line 743 "timemodule.c"
      case 5: // $bb5
        HEAP[$iftmp_53]=((__str45)&4294967295); //@line 743 "timemodule.c"
        __label__ = 6; break; //@line 743 "timemodule.c"
      case 6: // $bb6
        var $julyname7=$julyname; //@line 743 "timemodule.c"
        var $32=HEAP[$iftmp_53]; //@line 743 "timemodule.c"
        var $33=_strncpy($julyname7, $32, 9); //@line 743 "timemodule.c"
        var $34=(($julyname+9)&4294967295); //@line 744 "timemodule.c"
        HEAP[$34]=0; //@line 744 "timemodule.c"
        var $35=HEAP[$janzone]; //@line 746 "timemodule.c"
        var $36=HEAP[$julyzone]; //@line 746 "timemodule.c"
        var $37=((($35))|0) < ((($36))|0); //@line 746 "timemodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 746 "timemodule.c"
      case 7: // $bb8
        var $38=HEAP[$m_addr]; //@line 748 "timemodule.c"
        var $39=HEAP[$julyzone]; //@line 748 "timemodule.c"
        var $40=_PyModule_AddIntConstant($38, ((__str46)&4294967295), $39); //@line 748 "timemodule.c"
        var $41=HEAP[$m_addr]; //@line 749 "timemodule.c"
        var $42=HEAP[$janzone]; //@line 749 "timemodule.c"
        var $43=_PyModule_AddIntConstant($41, ((__str47)&4294967295), $42); //@line 749 "timemodule.c"
        var $44=HEAP[$janzone]; //@line 750 "timemodule.c"
        var $45=HEAP[$julyzone]; //@line 750 "timemodule.c"
        var $46=((($44))|0)!=((($45))|0); //@line 750 "timemodule.c"
        var $47=unSign(($46), 1, 0); //@line 750 "timemodule.c"
        var $48=HEAP[$m_addr]; //@line 750 "timemodule.c"
        var $49=_PyModule_AddIntConstant($48, ((__str48)&4294967295), $47); //@line 750 "timemodule.c"
        var $julyname9=$julyname; //@line 752 "timemodule.c"
        var $janname10=$janname; //@line 752 "timemodule.c"
        var $50=_Py_BuildValue(((__str49)&4294967295), $julyname9, $janname10); //@line 752 "timemodule.c"
        var $51=HEAP[$m_addr]; //@line 752 "timemodule.c"
        var $52=_PyModule_AddObject($51, ((__str50)&4294967295), $50); //@line 752 "timemodule.c"
        __label__ = 9; break; //@line 752 "timemodule.c"
      case 8: // $bb11
        var $53=HEAP[$m_addr]; //@line 756 "timemodule.c"
        var $54=HEAP[$janzone]; //@line 756 "timemodule.c"
        var $55=_PyModule_AddIntConstant($53, ((__str46)&4294967295), $54); //@line 756 "timemodule.c"
        var $56=HEAP[$m_addr]; //@line 757 "timemodule.c"
        var $57=HEAP[$julyzone]; //@line 757 "timemodule.c"
        var $58=_PyModule_AddIntConstant($56, ((__str47)&4294967295), $57); //@line 757 "timemodule.c"
        var $59=HEAP[$janzone]; //@line 758 "timemodule.c"
        var $60=HEAP[$julyzone]; //@line 758 "timemodule.c"
        var $61=((($59))|0)!=((($60))|0); //@line 758 "timemodule.c"
        var $62=unSign(($61), 1, 0); //@line 758 "timemodule.c"
        var $63=HEAP[$m_addr]; //@line 758 "timemodule.c"
        var $64=_PyModule_AddIntConstant($63, ((__str48)&4294967295), $62); //@line 758 "timemodule.c"
        var $janname12=$janname; //@line 760 "timemodule.c"
        var $julyname13=$julyname; //@line 760 "timemodule.c"
        var $65=_Py_BuildValue(((__str49)&4294967295), $janname12, $julyname13); //@line 760 "timemodule.c"
        var $66=HEAP[$m_addr]; //@line 760 "timemodule.c"
        var $67=_PyModule_AddObject($66, ((__str50)&4294967295), $65); //@line 760 "timemodule.c"
        __label__ = 9; break; //@line 760 "timemodule.c"
      case 9: // $bb14
        __label__ = 10; break; //@line 776 "timemodule.c"
      case 10: // $return
        STACKTOP = __stackBase__;
        return; //@line 776 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _inittime() {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $iftmp_56=__stackBase__;
        var $iftmp_54=__stackBase__+4;
        var $m=__stackBase__+8;
        var $p=__stackBase__+12;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str44)&4294967295), ((_time_methods)&4294967295), ((_module_doc)&4294967295), 0, 1013); //@line 854 "timemodule.c"
        HEAP[$m]=$0; //@line 854 "timemodule.c"
        var $1=HEAP[$m]; //@line 855 "timemodule.c"
        var $2=($1)==0; //@line 855 "timemodule.c"
        if ($2) { __label__ = 11; break; } else { __label__ = 1; break; } //@line 855 "timemodule.c"
      case 1: // $bb
        var $3=HEAP[_Py_IgnoreEnvironmentFlag]; //@line 859 "timemodule.c"
        var $4=((($3))|0)==0; //@line 859 "timemodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 859 "timemodule.c"
      case 2: // $bb1
        var $5=_getenv(((__str59)&4294967295)); //@line 859 "timemodule.c"
        HEAP[$iftmp_54]=$5; //@line 859 "timemodule.c"
        __label__ = 4; break; //@line 859 "timemodule.c"
      case 3: // $bb2
        HEAP[$iftmp_54]=0; //@line 859 "timemodule.c"
        __label__ = 4; break; //@line 859 "timemodule.c"
      case 4: // $bb3
        var $6=HEAP[$iftmp_54]; //@line 859 "timemodule.c"
        HEAP[$p]=$6; //@line 859 "timemodule.c"
        var $7=HEAP[$p]; //@line 860 "timemodule.c"
        var $8=($7)==0; //@line 860 "timemodule.c"
        if ($8) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 860 "timemodule.c"
      case 5: // $bb4
        var $9=HEAP[$p]; //@line 860 "timemodule.c"
        var $10=HEAP[$9]; //@line 860 "timemodule.c"
        var $11=reSign(($10), 8, 0)==0; //@line 860 "timemodule.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 860 "timemodule.c"
      case 6: // $bb5
        HEAP[$iftmp_56]=1; //@line 860 "timemodule.c"
        __label__ = 8; break; //@line 860 "timemodule.c"
      case 7: // $bb6
        HEAP[$iftmp_56]=0; //@line 860 "timemodule.c"
        __label__ = 8; break; //@line 860 "timemodule.c"
      case 8: // $bb7
        var $12=HEAP[$m]; //@line 860 "timemodule.c"
        var $13=HEAP[$iftmp_56]; //@line 860 "timemodule.c"
        var $14=_PyModule_AddIntConstant($12, ((__str25)&4294967295), $13); //@line 860 "timemodule.c"
        var $15=HEAP[$m]; //@line 862 "timemodule.c"
        var $16=_PyModule_GetDict($15); //@line 862 "timemodule.c"
        HEAP[_moddict]=$16; //@line 862 "timemodule.c"
        var $17=HEAP[_moddict]; //@line 863 "timemodule.c"
        var $18=(($17)&4294967295); //@line 863 "timemodule.c"
        var $19=HEAP[$18]; //@line 863 "timemodule.c"
        var $20=((($19) + 1)&4294967295); //@line 863 "timemodule.c"
        var $21=(($17)&4294967295); //@line 863 "timemodule.c"
        HEAP[$21]=$20; //@line 863 "timemodule.c"
        var $22=HEAP[$m]; //@line 866 "timemodule.c"
        _inittimezone($22); //@line 866 "timemodule.c"
        var $23=HEAP[_initialized]; //@line 877 "timemodule.c"
        var $24=((($23))|0)==0; //@line 877 "timemodule.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 877 "timemodule.c"
      case 9: // $bb8
        _PyStructSequence_InitType(_StructTimeType, _struct_time_type_desc); //@line 878 "timemodule.c"
        __label__ = 10; break; //@line 878 "timemodule.c"
      case 10: // $bb9
        var $25=((_StructTimeType)&4294967295); //@line 881 "timemodule.c"
        var $26=HEAP[$25]; //@line 881 "timemodule.c"
        var $27=((($26) + 1)&4294967295); //@line 881 "timemodule.c"
        var $28=((_StructTimeType)&4294967295); //@line 881 "timemodule.c"
        HEAP[$28]=$27; //@line 881 "timemodule.c"
        var $29=HEAP[$m]; //@line 882 "timemodule.c"
        var $30=_PyModule_AddObject($29, ((__str60)&4294967295), _StructTimeType); //@line 882 "timemodule.c"
        HEAP[_initialized]=1; //@line 883 "timemodule.c"
        __label__ = 11; break; //@line 883 "timemodule.c"
      case 11: // $bb10
        __label__ = 12; break; //@line 856 "timemodule.c"
      case 12: // $return
        STACKTOP = __stackBase__;
        return; //@line 856 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_inittime"] = _inittime;

  function _floattime() {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+8;
        var $t=__stackBase__+16;
        var $t2=__stackBase__+24;
        var $_alloca_point_=0;
        var $1=_gettimeofday($t, 0); //@line 907 "timemodule.c"
        var $2=((($1))|0)==0; //@line 907 "timemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 907 "timemodule.c"
      case 1: // $bb
        var $3=(($t)&4294967295); //@line 908 "timemodule.c"
        var $4=HEAP[$3]; //@line 908 "timemodule.c"
        var $5=((($4))|0); //@line 908 "timemodule.c"
        var $6=(($t+4)&4294967295); //@line 908 "timemodule.c"
        var $7=HEAP[$6]; //@line 908 "timemodule.c"
        var $8=((($7))|0); //@line 908 "timemodule.c"
        var $9=($8) * 0.000001; //@line 908 "timemodule.c"
        var $10=($5) + ($9); //@line 908 "timemodule.c"
        HEAP[$0]=$10; //@line 908 "timemodule.c"
        __label__ = 3; break; //@line 908 "timemodule.c"
      case 2: // $bb1
        var $11=_ftime($t2); //@line 916 "timemodule.c"
        var $12=(($t2)&4294967295); //@line 917 "timemodule.c"
        var $13=HEAP[$12]; //@line 917 "timemodule.c"
        var $14=((($13))|0); //@line 917 "timemodule.c"
        var $15=(($t2+4)&4294967295); //@line 917 "timemodule.c"
        var $16=HEAP[$15]; //@line 917 "timemodule.c"
        var $17=unSign(($16), 16, 0); //@line 917 "timemodule.c"
        var $18=($17) * 0.001; //@line 917 "timemodule.c"
        var $19=($14) + ($18); //@line 917 "timemodule.c"
        HEAP[$0]=$19; //@line 917 "timemodule.c"
        __label__ = 3; break; //@line 917 "timemodule.c"
      case 3: // $bb3
        var $20=HEAP[$0]; //@line 908 "timemodule.c"
        HEAP[$retval]=$20; //@line 908 "timemodule.c"
        __label__ = 4; break; //@line 908 "timemodule.c"
      case 4: // $return
        var $retval4=HEAP[$retval]; //@line 908 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 908 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _floatsleep($secs) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $secs_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $t=__stackBase__+16;
        var $frac=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$secs_addr]=$secs;
        var $1=HEAP[$secs_addr]; //@line 938 "timemodule.c"
        var $2=_fmod($1, 1); //@line 938 "timemodule.c"
        HEAP[$frac]=$2; //@line 938 "timemodule.c"
        var $3=HEAP[$secs_addr]; //@line 939 "timemodule.c"
        var $4=_floor($3); //@line 939 "timemodule.c"
        HEAP[$secs_addr]=$4; //@line 939 "timemodule.c"
        var $5=HEAP[$secs_addr]; //@line 940 "timemodule.c"
        var $6=((($5))|0); //@line 940 "timemodule.c"
        var $7=(($t)&4294967295); //@line 940 "timemodule.c"
        HEAP[$7]=$6; //@line 940 "timemodule.c"
        var $8=HEAP[$frac]; //@line 941 "timemodule.c"
        var $9=($8) * 1000000; //@line 941 "timemodule.c"
        var $10=((($9))|0); //@line 941 "timemodule.c"
        var $11=(($t+4)&4294967295); //@line 941 "timemodule.c"
        HEAP[$11]=$10; //@line 941 "timemodule.c"
        var $12=_select(0, 0, 0, 0, $t); //@line 943 "timemodule.c"
        var $13=((($12))|0)!=0; //@line 943 "timemodule.c"
        if ($13) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 943 "timemodule.c"
      case 1: // $bb
        var $14=___errno_location(); //@line 945 "timemodule.c"
        var $15=HEAP[$14]; //@line 945 "timemodule.c"
        var $16=((($15))|0)!=4; //@line 945 "timemodule.c"
        if ($16) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 945 "timemodule.c"
      case 2: // $bb1
        var $17=HEAP[_PyExc_IOError]; //@line 950 "timemodule.c"
        var $18=_PyErr_SetFromErrno($17); //@line 950 "timemodule.c"
        HEAP[$0]=-1; //@line 951 "timemodule.c"
        __label__ = 4; break; //@line 951 "timemodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1051 "timemodule.c"
        __label__ = 4; break; //@line 1051 "timemodule.c"
      case 4: // $bb3
        var $19=HEAP[$0]; //@line 951 "timemodule.c"
        HEAP[$retval]=$19; //@line 951 "timemodule.c"
        __label__ = 5; break; //@line 951 "timemodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 951 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 951 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_gmtime,0,_localtime,0,_time_time,0,_time_clock,0,_time_sleep,0,_time_gmtime,0,_time_localtime,0,_time_asctime,0,_time_ctime,0,_time_mktime,0,_time_strftime,0,_time_strptime,0,_time_tzset,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([116,105,109,101,115,116,97,109,112,32,111,117,116,32,111,102,32,114,97,110,103,101,32,102,111,114,32,112,108,97,116,102,111,114,109,32,116,105,109,101,95,116,0] /* timestamp out of ran */, "i8", ALLOC_NORMAL);
_time_doc=allocate([116,105,109,101,40,41,32,45,62,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,10,10,82,101,116,117,114,110,32,116,104,101,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,46,10,70,114,97,99,116,105,111,110,115,32,111,102,32,97,32,115,101,99,111,110,100,32,109,97,121,32,98,101,32,112,114,101,115,101,110,116,32,105,102,32,116,104,101,32,115,121,115,116,101,109,32,99,108,111,99,107,32,112,114,111,118,105,100,101,115,32,116,104,101,109,46,0] /* time() -> floating p */, "i8", ALLOC_NORMAL);
_clock_doc=allocate([99,108,111,99,107,40,41,32,45,62,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,10,10,82,101,116,117,114,110,32,116,104,101,32,67,80,85,32,116,105,109,101,32,111,114,32,114,101,97,108,32,116,105,109,101,32,115,105,110,99,101,32,116,104,101,32,115,116,97,114,116,32,111,102,32,116,104,101,32,112,114,111,99,101,115,115,32,111,114,32,115,105,110,99,101,10,116,104,101,32,102,105,114,115,116,32,99,97,108,108,32,116,111,32,99,108,111,99,107,40,41,46,32,32,84,104,105,115,32,104,97,115,32,97,115,32,109,117,99,104,32,112,114,101,99,105,115,105,111,110,32,97,115,32,116,104,101,32,115,121,115,116,101,109,10,114,101,99,111,114,100,115,46,0] /* clock() -> floating  */, "i8", ALLOC_NORMAL);
__str1=allocate([100,58,115,108,101,101,112,0] /* d:sleep\00 */, "i8", ALLOC_NORMAL);
_sleep_doc=allocate([115,108,101,101,112,40,115,101,99,111,110,100,115,41,10,10,68,101,108,97,121,32,101,120,101,99,117,116,105,111,110,32,102,111,114,32,97,32,103,105,118,101,110,32,110,117,109,98,101,114,32,111,102,32,115,101,99,111,110,100,115,46,32,32,84,104,101,32,97,114,103,117,109,101,110,116,32,109,97,121,32,98,101,10,97,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,32,102,111,114,32,115,117,98,115,101,99,111,110,100,32,112,114,101,99,105,115,105,111,110,46,0] /* sleep(seconds)\0A\0A */, "i8", ALLOC_NORMAL);
__str2=allocate([116,109,95,121,101,97,114,0] /* tm_year\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([121,101,97,114,44,32,102,111,114,32,101,120,97,109,112,108,101,44,32,49,57,57,51,0] /* year, for example, 1 */, "i8", ALLOC_NORMAL);
__str4=allocate([116,109,95,109,111,110,0] /* tm_mon\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([109,111,110,116,104,32,111,102,32,121,101,97,114,44,32,114,97,110,103,101,32,91,49,44,32,49,50,93,0] /* month of year, range */, "i8", ALLOC_NORMAL);
__str6=allocate([116,109,95,109,100,97,121,0] /* tm_mday\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([100,97,121,32,111,102,32,109,111,110,116,104,44,32,114,97,110,103,101,32,91,49,44,32,51,49,93,0] /* day of month, range  */, "i8", ALLOC_NORMAL);
__str8=allocate([116,109,95,104,111,117,114,0] /* tm_hour\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([104,111,117,114,115,44,32,114,97,110,103,101,32,91,48,44,32,50,51,93,0] /* hours, range [0, 23] */, "i8", ALLOC_NORMAL);
__str10=allocate([116,109,95,109,105,110,0] /* tm_min\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([109,105,110,117,116,101,115,44,32,114,97,110,103,101,32,91,48,44,32,53,57,93,0] /* minutes, range [0, 5 */, "i8", ALLOC_NORMAL);
__str12=allocate([116,109,95,115,101,99,0] /* tm_sec\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([115,101,99,111,110,100,115,44,32,114,97,110,103,101,32,91,48,44,32,54,49,93,41,0] /* seconds, range [0, 6 */, "i8", ALLOC_NORMAL);
__str14=allocate([116,109,95,119,100,97,121,0] /* tm_wday\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([100,97,121,32,111,102,32,119,101,101,107,44,32,114,97,110,103,101,32,91,48,44,32,54,93,44,32,77,111,110,100,97,121,32,105,115,32,48,0] /* day of week, range [ */, "i8", ALLOC_NORMAL);
__str16=allocate([116,109,95,121,100,97,121,0] /* tm_yday\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([100,97,121,32,111,102,32,121,101,97,114,44,32,114,97,110,103,101,32,91,49,44,32,51,54,54,93,0] /* day of year, range [ */, "i8", ALLOC_NORMAL);
__str18=allocate([116,109,95,105,115,100,115,116,0] /* tm_isdst\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([49,32,105,102,32,115,117,109,109,101,114,32,116,105,109,101,32,105,115,32,105,110,32,101,102,102,101,99,116,44,32,48,32,105,102,32,110,111,116,44,32,97,110,100,32,45,49,32,105,102,32,117,110,107,110,111,119,110,0] /* 1 if summer time is  */, "i8", ALLOC_NORMAL);
_struct_time_type_fields=allocate(80, ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8"], ALLOC_NORMAL);
_struct_time_type_desc=allocate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0], ["i8*",0,0,0,"i8*",0,0,0,"%struct.PyStructSequence_Field*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str20=allocate([116,105,109,101,46,115,116,114,117,99,116,95,116,105,109,101,0] /* time.struct_time\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([84,104,101,32,116,105,109,101,32,118,97,108,117,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,103,109,116,105,109,101,40,41,44,32,108,111,99,97,108,116,105,109,101,40,41,44,32,97,110,100,32,115,116,114,112,116,105,109,101,40,41,44,32,97,110,100,10,32,97,99,99,101,112,116,101,100,32,98,121,32,97,115,99,116,105,109,101,40,41,44,32,109,107,116,105,109,101,40,41,32,97,110,100,32,115,116,114,102,116,105,109,101,40,41,46,32,32,77,97,121,32,98,101,32,99,111,110,115,105,100,101,114,101,100,32,97,115,32,97,10,32,115,101,113,117,101,110,99,101,32,111,102,32,57,32,105,110,116,101,103,101,114,115,46,10,10,32,78,111,116,101,32,116,104,97,116,32,115,101,118,101,114,97,108,32,102,105,101,108,100,115,39,32,118,97,108,117,101,115,32,97,114,101,32,110,111,116,32,116,104,101,32,115,97,109,101,32,97,115,32,116,104,111,115,101,32,100,101,102,105,110,101,100,32,98,121,10,32,116,104,101,32,67,32,108,97,110,103,117,97,103,101,32,115,116,97,110,100,97,114,100,32,102,111,114,32,115,116,114,117,99,116,32,116,109,46,32,32,70,111,114,32,101,120,97,109,112,108,101,44,32,116,104,101,32,118,97,108,117,101,32,111,102,32,116,104,101,10,32,102,105,101,108,100,32,116,109,95,121,101,97,114,32,105,115,32,116,104,101,32,97,99,116,117,97,108,32,121,101,97,114,44,32,110,111,116,32,121,101,97,114,32,45,32,49,57,48,48,46,32,32,83,101,101,32,105,110,100,105,118,105,100,117,97,108,10,32,102,105,101,108,100,115,39,32,100,101,115,99,114,105,112,116,105,111,110,115,32,102,111,114,32,100,101,116,97,105,108,115,46,0] /* The time value as re */, "i8", ALLOC_NORMAL);
_StructTimeType=allocate(196, ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str22=allocate([124,79,58,103,109,116,105,109,101,0] /* |O:gmtime\00 */, "i8", ALLOC_NORMAL);
_gmtime_doc=allocate([103,109,116,105,109,101,40,91,115,101,99,111,110,100,115,93,41,32,45,62,32,40,116,109,95,121,101,97,114,44,32,116,109,95,109,111,110,44,32,116,109,95,109,100,97,121,44,32,116,109,95,104,111,117,114,44,32,116,109,95,109,105,110,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,109,95,115,101,99,44,32,116,109,95,119,100,97,121,44,32,116,109,95,121,100,97,121,44,32,116,109,95,105,115,100,115,116,41,10,10,67,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,116,111,32,97,32,116,105,109,101,32,116,117,112,108,101,32,101,120,112,114,101,115,115,105,110,103,32,85,84,67,32,40,97,46,107,46,97,46,10,71,77,84,41,46,32,32,87,104,101,110,32,39,115,101,99,111,110,100,115,39,32,105,115,32,110,111,116,32,112,97,115,115,101,100,32,105,110,44,32,99,111,110,118,101,114,116,32,116,104,101,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,115,116,101,97,100,46,0] /* gmtime([seconds]) -> */, "i8", ALLOC_NORMAL);
__str23=allocate([124,79,58,108,111,99,97,108,116,105,109,101,0] /* |O:localtime\00 */, "i8", ALLOC_NORMAL);
_localtime_doc=allocate([108,111,99,97,108,116,105,109,101,40,91,115,101,99,111,110,100,115,93,41,32,45,62,32,40,116,109,95,121,101,97,114,44,116,109,95,109,111,110,44,116,109,95,109,100,97,121,44,116,109,95,104,111,117,114,44,116,109,95,109,105,110,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,109,95,115,101,99,44,116,109,95,119,100,97,121,44,116,109,95,121,100,97,121,44,116,109,95,105,115,100,115,116,41,10,10,67,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,116,111,32,97,32,116,105,109,101,32,116,117,112,108,101,32,101,120,112,114,101,115,115,105,110,103,32,108,111,99,97,108,32,116,105,109,101,46,10,87,104,101,110,32,39,115,101,99,111,110,100,115,39,32,105,115,32,110,111,116,32,112,97,115,115,101,100,32,105,110,44,32,99,111,110,118,101,114,116,32,116,104,101,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,115,116,101,97,100,46,0] /* localtime([seconds]) */, "i8", ALLOC_NORMAL);
__str24=allocate([40,105,105,105,105,105,105,105,105,105,41,0] /* (iiiiiiiii)\00 */, "i8", ALLOC_NORMAL);
_moddict=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str25=allocate([97,99,99,101,112,116,50,100,121,101,97,114,0] /* accept2dyear\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([121,101,97,114,32,62,61,32,49,57,48,48,32,114,101,113,117,105,114,101,100,0] /* year >= 1900 require */, "i8", ALLOC_NORMAL);
__str27=allocate([121,101,97,114,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* year out of range\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([115,124,79,58,115,116,114,102,116,105,109,101,0] /* s|O:strftime\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([109,111,110,116,104,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* month out of range\0 */, "i8", ALLOC_NORMAL);
__str30=allocate([100,97,121,32,111,102,32,109,111,110,116,104,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* day of month out of  */, "i8", ALLOC_NORMAL);
__str31=allocate([104,111,117,114,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* hour out of range\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([109,105,110,117,116,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* minute out of range\ */, "i8", ALLOC_NORMAL);
__str33=allocate([115,101,99,111,110,100,115,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* seconds out of range */, "i8", ALLOC_NORMAL);
__str34=allocate([100,97,121,32,111,102,32,119,101,101,107,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* day of week out of r */, "i8", ALLOC_NORMAL);
__str35=allocate([100,97,121,32,111,102,32,121,101,97,114,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* day of year out of r */, "i8", ALLOC_NORMAL);
_strftime_doc=allocate([115,116,114,102,116,105,109,101,40,102,111,114,109,97,116,91,44,32,116,117,112,108,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,97,32,115,116,114,105,110,103,32,97,99,99,111,114,100,105,110,103,32,116,111,32,97,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,46,10,83,101,101,32,116,104,101,32,108,105,98,114,97,114,121,32,114,101,102,101,114,101,110,99,101,32,109,97,110,117,97,108,32,102,111,114,32,102,111,114,109,97,116,116,105,110,103,32,99,111,100,101,115,46,32,87,104,101,110,32,116,104,101,32,116,105,109,101,32,116,117,112,108,101,10,105,115,32,110,111,116,32,112,114,101,115,101,110,116,44,32,99,117,114,114,101,110,116,32,116,105,109,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,108,111,99,97,108,116,105,109,101,40,41,32,105,115,32,117,115,101,100,46,0] /* strftime(format[, tu */, "i8", ALLOC_NORMAL);
__str36=allocate([95,115,116,114,112,116,105,109,101,0] /* _strptime\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([95,115,116,114,112,116,105,109,101,95,116,105,109,101,0] /* _strptime_time\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([79,0] /* O\00 */, "i8", ALLOC_NORMAL);
_strptime_doc=allocate([115,116,114,112,116,105,109,101,40,115,116,114,105,110,103,44,32,102,111,114,109,97,116,41,32,45,62,32,115,116,114,117,99,116,95,116,105,109,101,10,10,80,97,114,115,101,32,97,32,115,116,114,105,110,103,32,116,111,32,97,32,116,105,109,101,32,116,117,112,108,101,32,97,99,99,111,114,100,105,110,103,32,116,111,32,97,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,46,10,83,101,101,32,116,104,101,32,108,105,98,114,97,114,121,32,114,101,102,101,114,101,110,99,101,32,109,97,110,117,97,108,32,102,111,114,32,102,111,114,109,97,116,116,105,110,103,32,99,111,100,101,115,32,40,115,97,109,101,32,97,115,32,115,116,114,102,116,105,109,101,40,41,41,46,0] /* strptime(string, for */, "i8", ALLOC_NORMAL);
__str39=allocate([97,115,99,116,105,109,101,0] /* asctime\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([105,110,118,97,108,105,100,32,116,105,109,101,0] /* invalid time\00 */, "i8", ALLOC_NORMAL);
_asctime_doc=allocate([97,115,99,116,105,109,101,40,91,116,117,112,108,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,97,32,115,116,114,105,110,103,44,32,101,46,103,46,32,39,83,97,116,32,74,117,110,32,48,54,32,49,54,58,50,54,58,49,49,32,49,57,57,56,39,46,10,87,104,101,110,32,116,104,101,32,116,105,109,101,32,116,117,112,108,101,32,105,115,32,110,111,116,32,112,114,101,115,101,110,116,44,32,99,117,114,114,101,110,116,32,116,105,109,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,108,111,99,97,108,116,105,109,101,40,41,10,105,115,32,117,115,101,100,46,0] /* asctime([tuple]) ->  */, "i8", ALLOC_NORMAL);
__str41=allocate([99,116,105,109,101,0] /* ctime\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([117,110,99,111,110,118,101,114,116,105,98,108,101,32,116,105,109,101,0] /* unconvertible time\0 */, "i8", ALLOC_NORMAL);
_ctime_doc=allocate([99,116,105,109,101,40,115,101,99,111,110,100,115,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,116,111,32,97,32,115,116,114,105,110,103,32,105,110,32,108,111,99,97,108,32,116,105,109,101,46,10,84,104,105,115,32,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,97,115,99,116,105,109,101,40,108,111,99,97,108,116,105,109,101,40,115,101,99,111,110,100,115,41,41,46,32,87,104,101,110,32,116,104,101,32,116,105,109,101,32,116,117,112,108,101,32,105,115,10,110,111,116,32,112,114,101,115,101,110,116,44,32,99,117,114,114,101,110,116,32,116,105,109,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,108,111,99,97,108,116,105,109,101,40,41,32,105,115,32,117,115,101,100,46,0] /* ctime(seconds) -> st */, "i8", ALLOC_NORMAL);
__str43=allocate([109,107,116,105,109,101,32,97,114,103,117,109,101,110,116,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* mktime argument out  */, "i8", ALLOC_NORMAL);
_mktime_doc=allocate([109,107,116,105,109,101,40,116,117,112,108,101,41,32,45,62,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,116,117,112,108,101,32,105,110,32,108,111,99,97,108,32,116,105,109,101,32,116,111,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,46,0] /* mktime(tuple) -> flo */, "i8", ALLOC_NORMAL);
__str44=allocate([116,105,109,101,0] /* time\00 */, "i8", ALLOC_NORMAL);
_tzset_doc=allocate([116,122,115,101,116,40,41,10,10,73,110,105,116,105,97,108,105,122,101,44,32,111,114,32,114,101,105,110,105,116,105,97,108,105,122,101,44,32,116,104,101,32,108,111,99,97,108,32,116,105,109,101,122,111,110,101,32,116,111,32,116,104,101,32,118,97,108,117,101,32,115,116,111,114,101,100,32,105,110,10,111,115,46,101,110,118,105,114,111,110,91,39,84,90,39,93,46,32,84,104,101,32,84,90,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,115,104,111,117,108,100,32,98,101,32,115,112,101,99,105,102,105,101,100,32,105,110,10,115,116,97,110,100,97,114,100,32,85,110,105,120,32,116,105,109,101,122,111,110,101,32,102,111,114,109,97,116,32,97,115,32,100,111,99,117,109,101,110,116,101,100,32,105,110,32,116,104,101,32,116,122,115,101,116,32,109,97,110,32,112,97,103,101,10,40,101,103,46,32,39,85,83,47,69,97,115,116,101,114,110,39,44,32,39,69,117,114,111,112,101,47,65,109,115,116,101,114,100,97,109,39,41,46,32,85,110,107,110,111,119,110,32,116,105,109,101,122,111,110,101,115,32,119,105,108,108,32,115,105,108,101,110,116,108,121,10,102,97,108,108,32,98,97,99,107,32,116,111,32,85,84,67,46,32,73,102,32,116,104,101,32,84,90,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,105,115,32,110,111,116,32,115,101,116,44,32,116,104,101,32,108,111,99,97,108,10,116,105,109,101,122,111,110,101,32,105,115,32,115,101,116,32,116,111,32,116,104,101,32,115,121,115,116,101,109,115,32,98,101,115,116,32,103,117,101,115,115,32,111,102,32,119,97,108,108,99,108,111,99,107,32,116,105,109,101,46,10,67,104,97,110,103,105,110,103,32,116,104,101,32,84,90,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,119,105,116,104,111,117,116,32,99,97,108,108,105,110,103,32,116,122,115,101,116,32,42,109,97,121,42,32,99,104,97,110,103,101,10,116,104,101,32,108,111,99,97,108,32,116,105,109,101,122,111,110,101,32,117,115,101,100,32,98,121,32,109,101,116,104,111,100,115,32,115,117,99,104,32,97,115,32,108,111,99,97,108,116,105,109,101,44,32,98,117,116,32,116,104,105,115,32,98,101,104,97,118,105,111,117,114,10,115,104,111,117,108,100,32,110,111,116,32,98,101,32,114,101,108,105,101,100,32,111,110,46,0] /* tzset()\0A\0AInitial */, "i8", ALLOC_NORMAL);
__str45=allocate([32,32,32,0] /*    \00 */, "i8", ALLOC_NORMAL);
__str46=allocate([116,105,109,101,122,111,110,101,0] /* timezone\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([97,108,116,122,111,110,101,0] /* altzone\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([100,97,121,108,105,103,104,116,0] /* daylight\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([40,122,122,41,0] /* (zz)\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([116,122,110,97,109,101,0] /* tzname\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([99,108,111,99,107,0] /* clock\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([115,108,101,101,112,0] /* sleep\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([103,109,116,105,109,101,0] /* gmtime\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([108,111,99,97,108,116,105,109,101,0] /* localtime\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([109,107,116,105,109,101,0] /* mktime\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([115,116,114,102,116,105,109,101,0] /* strftime\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([115,116,114,112,116,105,109,101,0] /* strptime\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([116,122,115,101,116,0] /* tzset\00 */, "i8", ALLOC_NORMAL);
_time_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,118,97,114,105,111,117,115,32,102,117,110,99,116,105,111,110,115,32,116,111,32,109,97,110,105,112,117,108,97,116,101,32,116,105,109,101,32,118,97,108,117,101,115,46,10,10,84,104,101,114,101,32,97,114,101,32,116,119,111,32,115,116,97,110,100,97,114,100,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,32,111,102,32,116,105,109,101,46,32,32,79,110,101,32,105,115,32,116,104,101,32,110,117,109,98,101,114,10,111,102,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,44,32,105,110,32,85,84,67,32,40,97,46,107,46,97,46,32,71,77,84,41,46,32,32,73,116,32,109,97,121,32,98,101,32,97,110,32,105,110,116,101,103,101,114,10,111,114,32,97,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,32,40,116,111,32,114,101,112,114,101,115,101,110,116,32,102,114,97,99,116,105,111,110,115,32,111,102,32,115,101,99,111,110,100,115,41,46,10,84,104,101,32,69,112,111,99,104,32,105,115,32,115,121,115,116,101,109,45,100,101,102,105,110,101,100,59,32,111,110,32,85,110,105,120,44,32,105,116,32,105,115,32,103,101,110,101,114,97,108,108,121,32,74,97,110,117,97,114,121,32,49,115,116,44,32,49,57,55,48,46,10,84,104,101,32,97,99,116,117,97,108,32,118,97,108,117,101,32,99,97,110,32,98,101,32,114,101,116,114,105,101,118,101,100,32,98,121,32,99,97,108,108,105,110,103,32,103,109,116,105,109,101,40,48,41,46,10,10,84,104,101,32,111,116,104,101,114,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,105,115,32,97,32,116,117,112,108,101,32,111,102,32,57,32,105,110,116,101,103,101,114,115,32,103,105,118,105,110,103,32,108,111,99,97,108,32,116,105,109,101,46,10,84,104,101,32,116,117,112,108,101,32,105,116,101,109,115,32,97,114,101,58,10,32,32,121,101,97,114,32,40,102,111,117,114,32,100,105,103,105,116,115,44,32,101,46,103,46,32,49,57,57,56,41,10,32,32,109,111,110,116,104,32,40,49,45,49,50,41,10,32,32,100,97,121,32,40,49,45,51,49,41,10,32,32,104,111,117,114,115,32,40,48,45,50,51,41,10,32,32,109,105,110,117,116,101,115,32,40,48,45,53,57,41,10,32,32,115,101,99,111,110,100,115,32,40,48,45,53,57,41,10,32,32,119,101,101,107,100,97,121,32,40,48,45,54,44,32,77,111,110,100,97,121,32,105,115,32,48,41,10,32,32,74,117,108,105,97,110,32,100,97,121,32,40,100,97,121,32,105,110,32,116,104,101,32,121,101,97,114,44,32,49,45,51,54,54,41,10,32,32,68,83,84,32,40,68,97,121,108,105,103,104,116,32,83,97,118,105,110,103,115,32,84,105,109,101,41,32,102,108,97,103,32,40,45,49,44,32,48,32,111,114,32,49,41,10,73,102,32,116,104,101,32,68,83,84,32,102,108,97,103,32,105,115,32,48,44,32,116,104,101,32,116,105,109,101,32,105,115,32,103,105,118,101,110,32,105,110,32,116,104,101,32,114,101,103,117,108,97,114,32,116,105,109,101,32,122,111,110,101,59,10,105,102,32,105,116,32,105,115,32,49,44,32,116,104,101,32,116,105,109,101,32,105,115,32,103,105,118,101,110,32,105,110,32,116,104,101,32,68,83,84,32,116,105,109,101,32,122,111,110,101,59,10,105,102,32,105,116,32,105,115,32,45,49,44,32,109,107,116,105,109,101,40,41,32,115,104,111,117,108,100,32,103,117,101,115,115,32,98,97,115,101,100,32,111,110,32,116,104,101,32,100,97,116,101,32,97,110,100,32,116,105,109,101,46,10,10,86,97,114,105,97,98,108,101,115,58,10,10,116,105,109,101,122,111,110,101,32,45,45,32,100,105,102,102,101,114,101,110,99,101,32,105,110,32,115,101,99,111,110,100,115,32,98,101,116,119,101,101,110,32,85,84,67,32,97,110,100,32,108,111,99,97,108,32,115,116,97,110,100,97,114,100,32,116,105,109,101,10,97,108,116,122,111,110,101,32,45,45,32,100,105,102,102,101,114,101,110,99,101,32,105,110,32,32,115,101,99,111,110,100,115,32,98,101,116,119,101,101,110,32,85,84,67,32,97,110,100,32,108,111,99,97,108,32,68,83,84,32,116,105,109,101,10,100,97,121,108,105,103,104,116,32,45,45,32,119,104,101,116,104,101,114,32,108,111,99,97,108,32,116,105,109,101,32,115,104,111,117,108,100,32,114,101,102,108,101,99,116,32,68,83,84,10,116,122,110,97,109,101,32,45,45,32,116,117,112,108,101,32,111,102,32,40,115,116,97,110,100,97,114,100,32,116,105,109,101,32,122,111,110,101,32,110,97,109,101,44,32,68,83,84,32,116,105,109,101,32,122,111,110,101,32,110,97,109,101,41,10,10,70,117,110,99,116,105,111,110,115,58,10,10,116,105,109,101,40,41,32,45,45,32,114,101,116,117,114,110,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,97,115,32,97,32,102,108,111,97,116,10,99,108,111,99,107,40,41,32,45,45,32,114,101,116,117,114,110,32,67,80,85,32,116,105,109,101,32,115,105,110,99,101,32,112,114,111,99,101,115,115,32,115,116,97,114,116,32,97,115,32,97,32,102,108,111,97,116,10,115,108,101,101,112,40,41,32,45,45,32,100,101,108,97,121,32,102,111,114,32,97,32,110,117,109,98,101,114,32,111,102,32,115,101,99,111,110,100,115,32,103,105,118,101,110,32,97,115,32,97,32,102,108,111,97,116,10,103,109,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,69,112,111,99,104,32,116,111,32,85,84,67,32,116,117,112,108,101,10,108,111,99,97,108,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,69,112,111,99,104,32,116,111,32,108,111,99,97,108,32,116,105,109,101,32,116,117,112,108,101,10,97,115,99,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,115,116,114,105,110,103,10,99,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,116,111,32,115,116,114,105,110,103,10,109,107,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,108,111,99,97,108,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,69,112,111,99,104,10,115,116,114,102,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,115,116,114,105,110,103,32,97,99,99,111,114,100,105,110,103,32,116,111,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,10,115,116,114,112,116,105,109,101,40,41,32,45,45,32,112,97,114,115,101,32,115,116,114,105,110,103,32,116,111,32,116,105,109,101,32,116,117,112,108,101,32,97,99,99,111,114,100,105,110,103,32,116,111,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,10,116,122,115,101,116,40,41,32,45,45,32,99,104,97,110,103,101,32,116,104,101,32,108,111,99,97,108,32,116,105,109,101,122,111,110,101,0] /* This module provides */, "i8", ALLOC_NORMAL);
__str59=allocate([80,89,84,72,79,78,89,50,75,0] /* PYTHONY2K\00 */, "i8", ALLOC_NORMAL);
_initialized=allocate(1, "i32", ALLOC_NORMAL);
__str60=allocate([115,116,114,117,99,116,95,116,105,109,101,0] /* struct_time\00 */, "i8", ALLOC_NORMAL);
HEAP[_struct_time_type_fields]=((__str2)&4294967295);
HEAP[_struct_time_type_fields+4]=((__str3)&4294967295);
HEAP[_struct_time_type_fields+8]=((__str4)&4294967295);
HEAP[_struct_time_type_fields+12]=((__str5)&4294967295);
HEAP[_struct_time_type_fields+16]=((__str6)&4294967295);
HEAP[_struct_time_type_fields+20]=((__str7)&4294967295);
HEAP[_struct_time_type_fields+24]=((__str8)&4294967295);
HEAP[_struct_time_type_fields+28]=((__str9)&4294967295);
HEAP[_struct_time_type_fields+32]=((__str10)&4294967295);
HEAP[_struct_time_type_fields+36]=((__str11)&4294967295);
HEAP[_struct_time_type_fields+40]=((__str12)&4294967295);
HEAP[_struct_time_type_fields+44]=((__str13)&4294967295);
HEAP[_struct_time_type_fields+48]=((__str14)&4294967295);
HEAP[_struct_time_type_fields+52]=((__str15)&4294967295);
HEAP[_struct_time_type_fields+56]=((__str16)&4294967295);
HEAP[_struct_time_type_fields+60]=((__str17)&4294967295);
HEAP[_struct_time_type_fields+64]=((__str18)&4294967295);
HEAP[_struct_time_type_fields+68]=((__str19)&4294967295);
HEAP[_struct_time_type_desc]=((__str20)&4294967295);
HEAP[_struct_time_type_desc+4]=((__str21)&4294967295);
HEAP[_struct_time_type_desc+8]=((_struct_time_type_fields)&4294967295);
HEAP[_time_methods]=((__str44)&4294967295);
HEAP[_time_methods+4]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_time_methods+12]=((_time_doc)&4294967295);
HEAP[_time_methods+16]=((__str51)&4294967295);
HEAP[_time_methods+20]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_time_methods+28]=((_clock_doc)&4294967295);
HEAP[_time_methods+32]=((__str52)&4294967295);
HEAP[_time_methods+36]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_time_methods+44]=((_sleep_doc)&4294967295);
HEAP[_time_methods+48]=((__str53)&4294967295);
HEAP[_time_methods+52]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_time_methods+60]=((_gmtime_doc)&4294967295);
HEAP[_time_methods+64]=((__str54)&4294967295);
HEAP[_time_methods+68]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_time_methods+76]=((_localtime_doc)&4294967295);
HEAP[_time_methods+80]=((__str39)&4294967295);
HEAP[_time_methods+84]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_time_methods+92]=((_asctime_doc)&4294967295);
HEAP[_time_methods+96]=((__str41)&4294967295);
HEAP[_time_methods+100]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_time_methods+108]=((_ctime_doc)&4294967295);
HEAP[_time_methods+112]=((__str55)&4294967295);
HEAP[_time_methods+116]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_time_methods+124]=((_mktime_doc)&4294967295);
HEAP[_time_methods+128]=((__str56)&4294967295);
HEAP[_time_methods+132]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_time_methods+140]=((_strftime_doc)&4294967295);
HEAP[_time_methods+144]=((__str57)&4294967295);
HEAP[_time_methods+148]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_time_methods+156]=((_strptime_doc)&4294967295);
HEAP[_time_methods+160]=((__str58)&4294967295);
HEAP[_time_methods+164]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_time_methods+172]=((_tzset_doc)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

