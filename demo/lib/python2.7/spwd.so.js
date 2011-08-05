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
  
var $2___SIZE = 48; // %2
  
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
  
var $struct_spwd___SIZE = 36; // %struct.spwd
  
var _spwd__doc__;
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
var _struct_spwd_type_fields;
var _struct_spwd__doc__;
var _struct_spwd_type_desc;
var __str18;
var __Py_NoneStruct;
var _StructSpwdType;
var _spwd_getspnam__doc__;
var __str19;
var _PyExc_KeyError;
var __str20;
var _spwd_getspall__doc__;
var __str21;
var __str22;
var _spwd_methods;
var __str23;
var _initialized;
var __str24;




















  function _sets($v, $i, $val) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $v_addr=__stackBase__;
        var $i_addr=__stackBase__+4;
        var $val_addr=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$v_addr]=$v;
        HEAP[$i_addr]=$i;
        HEAP[$val_addr]=$val;
        var $0=HEAP[$val_addr]; //@line 62 "spwdmodule.c"
        var $1=($0)!=0; //@line 62 "spwdmodule.c"
        if ($1) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 62 "spwdmodule.c"
      case 1: // $bb
        var $2=HEAP[$v_addr]; //@line 63 "spwdmodule.c"
        var $3=$2; //@line 63 "spwdmodule.c"
        var $4=HEAP[$i_addr]; //@line 63 "spwdmodule.c"
        var $5=HEAP[$val_addr]; //@line 63 "spwdmodule.c"
        var $6=_PyString_FromString($5); //@line 63 "spwdmodule.c"
        var $7=(($3+12)&4294967295); //@line 63 "spwdmodule.c"
        var $8=(($7+$4*4)&4294967295); //@line 63 "spwdmodule.c"
        HEAP[$8]=$6; //@line 63 "spwdmodule.c"
        __label__ = 3; break; //@line 63 "spwdmodule.c"
      case 2: // $bb1
        var $9=HEAP[$v_addr]; //@line 65 "spwdmodule.c"
        var $10=$9; //@line 65 "spwdmodule.c"
        var $11=HEAP[$i_addr]; //@line 65 "spwdmodule.c"
        var $12=(($10+12)&4294967295); //@line 65 "spwdmodule.c"
        var $13=(($12+$11*4)&4294967295); //@line 65 "spwdmodule.c"
        HEAP[$13]=__Py_NoneStruct; //@line 65 "spwdmodule.c"
        var $14=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 66 "spwdmodule.c"
        var $15=((($14) + 1)&4294967295); //@line 66 "spwdmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$15; //@line 66 "spwdmodule.c"
        __label__ = 3; break; //@line 66 "spwdmodule.c"
      case 3: // $bb2
        __label__ = 4; break; //@line 68 "spwdmodule.c"
      case 4: // $return
        STACKTOP = __stackBase__;
        return; //@line 68 "spwdmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mkspent($p) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $setIndex=__stackBase__+12;
        var $v=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$p_addr]=$p;
        HEAP[$setIndex]=0; //@line 72 "spwdmodule.c"
        var $1=_PyStructSequence_New(_StructSpwdType); //@line 73 "spwdmodule.c"
        HEAP[$v]=$1; //@line 73 "spwdmodule.c"
        var $2=HEAP[$v]; //@line 74 "spwdmodule.c"
        var $3=($2)==0; //@line 74 "spwdmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 74 "spwdmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 75 "spwdmodule.c"
        __label__ = 7; break; //@line 75 "spwdmodule.c"
      case 2: // $bb1
        var $4=HEAP[$p_addr]; //@line 80 "spwdmodule.c"
        var $5=(($4)&4294967295); //@line 80 "spwdmodule.c"
        var $6=HEAP[$5]; //@line 80 "spwdmodule.c"
        var $7=HEAP[$setIndex]; //@line 80 "spwdmodule.c"
        var $8=HEAP[$setIndex]; //@line 80 "spwdmodule.c"
        var $9=((($8) + 1)&4294967295); //@line 80 "spwdmodule.c"
        HEAP[$setIndex]=$9; //@line 80 "spwdmodule.c"
        var $10=HEAP[$v]; //@line 80 "spwdmodule.c"
        _sets($10, $7, $6); //@line 80 "spwdmodule.c"
        var $11=HEAP[$p_addr]; //@line 81 "spwdmodule.c"
        var $12=(($11+4)&4294967295); //@line 81 "spwdmodule.c"
        var $13=HEAP[$12]; //@line 81 "spwdmodule.c"
        var $14=HEAP[$setIndex]; //@line 81 "spwdmodule.c"
        var $15=HEAP[$setIndex]; //@line 81 "spwdmodule.c"
        var $16=((($15) + 1)&4294967295); //@line 81 "spwdmodule.c"
        HEAP[$setIndex]=$16; //@line 81 "spwdmodule.c"
        var $17=HEAP[$v]; //@line 81 "spwdmodule.c"
        _sets($17, $14, $13); //@line 81 "spwdmodule.c"
        var $18=HEAP[$v]; //@line 82 "spwdmodule.c"
        var $19=$18; //@line 82 "spwdmodule.c"
        var $20=HEAP[$setIndex]; //@line 82 "spwdmodule.c"
        var $21=HEAP[$p_addr]; //@line 82 "spwdmodule.c"
        var $22=(($21+8)&4294967295); //@line 82 "spwdmodule.c"
        var $23=HEAP[$22]; //@line 82 "spwdmodule.c"
        var $24=_PyInt_FromLong($23); //@line 82 "spwdmodule.c"
        var $25=(($19+12)&4294967295); //@line 82 "spwdmodule.c"
        var $26=(($25+$20*4)&4294967295); //@line 82 "spwdmodule.c"
        HEAP[$26]=$24; //@line 82 "spwdmodule.c"
        var $27=HEAP[$setIndex]; //@line 82 "spwdmodule.c"
        var $28=((($27) + 1)&4294967295); //@line 82 "spwdmodule.c"
        HEAP[$setIndex]=$28; //@line 82 "spwdmodule.c"
        var $29=HEAP[$v]; //@line 83 "spwdmodule.c"
        var $30=$29; //@line 83 "spwdmodule.c"
        var $31=HEAP[$setIndex]; //@line 83 "spwdmodule.c"
        var $32=HEAP[$p_addr]; //@line 83 "spwdmodule.c"
        var $33=(($32+12)&4294967295); //@line 83 "spwdmodule.c"
        var $34=HEAP[$33]; //@line 83 "spwdmodule.c"
        var $35=_PyInt_FromLong($34); //@line 83 "spwdmodule.c"
        var $36=(($30+12)&4294967295); //@line 83 "spwdmodule.c"
        var $37=(($36+$31*4)&4294967295); //@line 83 "spwdmodule.c"
        HEAP[$37]=$35; //@line 83 "spwdmodule.c"
        var $38=HEAP[$setIndex]; //@line 83 "spwdmodule.c"
        var $39=((($38) + 1)&4294967295); //@line 83 "spwdmodule.c"
        HEAP[$setIndex]=$39; //@line 83 "spwdmodule.c"
        var $40=HEAP[$v]; //@line 84 "spwdmodule.c"
        var $41=$40; //@line 84 "spwdmodule.c"
        var $42=HEAP[$setIndex]; //@line 84 "spwdmodule.c"
        var $43=HEAP[$p_addr]; //@line 84 "spwdmodule.c"
        var $44=(($43+16)&4294967295); //@line 84 "spwdmodule.c"
        var $45=HEAP[$44]; //@line 84 "spwdmodule.c"
        var $46=_PyInt_FromLong($45); //@line 84 "spwdmodule.c"
        var $47=(($41+12)&4294967295); //@line 84 "spwdmodule.c"
        var $48=(($47+$42*4)&4294967295); //@line 84 "spwdmodule.c"
        HEAP[$48]=$46; //@line 84 "spwdmodule.c"
        var $49=HEAP[$setIndex]; //@line 84 "spwdmodule.c"
        var $50=((($49) + 1)&4294967295); //@line 84 "spwdmodule.c"
        HEAP[$setIndex]=$50; //@line 84 "spwdmodule.c"
        var $51=HEAP[$v]; //@line 85 "spwdmodule.c"
        var $52=$51; //@line 85 "spwdmodule.c"
        var $53=HEAP[$setIndex]; //@line 85 "spwdmodule.c"
        var $54=HEAP[$p_addr]; //@line 85 "spwdmodule.c"
        var $55=(($54+20)&4294967295); //@line 85 "spwdmodule.c"
        var $56=HEAP[$55]; //@line 85 "spwdmodule.c"
        var $57=_PyInt_FromLong($56); //@line 85 "spwdmodule.c"
        var $58=(($52+12)&4294967295); //@line 85 "spwdmodule.c"
        var $59=(($58+$53*4)&4294967295); //@line 85 "spwdmodule.c"
        HEAP[$59]=$57; //@line 85 "spwdmodule.c"
        var $60=HEAP[$setIndex]; //@line 85 "spwdmodule.c"
        var $61=((($60) + 1)&4294967295); //@line 85 "spwdmodule.c"
        HEAP[$setIndex]=$61; //@line 85 "spwdmodule.c"
        var $62=HEAP[$v]; //@line 86 "spwdmodule.c"
        var $63=$62; //@line 86 "spwdmodule.c"
        var $64=HEAP[$setIndex]; //@line 86 "spwdmodule.c"
        var $65=HEAP[$p_addr]; //@line 86 "spwdmodule.c"
        var $66=(($65+24)&4294967295); //@line 86 "spwdmodule.c"
        var $67=HEAP[$66]; //@line 86 "spwdmodule.c"
        var $68=_PyInt_FromLong($67); //@line 86 "spwdmodule.c"
        var $69=(($63+12)&4294967295); //@line 86 "spwdmodule.c"
        var $70=(($69+$64*4)&4294967295); //@line 86 "spwdmodule.c"
        HEAP[$70]=$68; //@line 86 "spwdmodule.c"
        var $71=HEAP[$setIndex]; //@line 86 "spwdmodule.c"
        var $72=((($71) + 1)&4294967295); //@line 86 "spwdmodule.c"
        HEAP[$setIndex]=$72; //@line 86 "spwdmodule.c"
        var $73=HEAP[$v]; //@line 87 "spwdmodule.c"
        var $74=$73; //@line 87 "spwdmodule.c"
        var $75=HEAP[$setIndex]; //@line 87 "spwdmodule.c"
        var $76=HEAP[$p_addr]; //@line 87 "spwdmodule.c"
        var $77=(($76+28)&4294967295); //@line 87 "spwdmodule.c"
        var $78=HEAP[$77]; //@line 87 "spwdmodule.c"
        var $79=_PyInt_FromLong($78); //@line 87 "spwdmodule.c"
        var $80=(($74+12)&4294967295); //@line 87 "spwdmodule.c"
        var $81=(($80+$75*4)&4294967295); //@line 87 "spwdmodule.c"
        HEAP[$81]=$79; //@line 87 "spwdmodule.c"
        var $82=HEAP[$setIndex]; //@line 87 "spwdmodule.c"
        var $83=((($82) + 1)&4294967295); //@line 87 "spwdmodule.c"
        HEAP[$setIndex]=$83; //@line 87 "spwdmodule.c"
        var $84=HEAP[$v]; //@line 88 "spwdmodule.c"
        var $85=$84; //@line 88 "spwdmodule.c"
        var $86=HEAP[$setIndex]; //@line 88 "spwdmodule.c"
        var $87=HEAP[$p_addr]; //@line 88 "spwdmodule.c"
        var $88=(($87+32)&4294967295); //@line 88 "spwdmodule.c"
        var $89=HEAP[$88]; //@line 88 "spwdmodule.c"
        var $90=_PyInt_FromLong($89); //@line 88 "spwdmodule.c"
        var $91=(($85+12)&4294967295); //@line 88 "spwdmodule.c"
        var $92=(($91+$86*4)&4294967295); //@line 88 "spwdmodule.c"
        HEAP[$92]=$90; //@line 88 "spwdmodule.c"
        var $93=HEAP[$setIndex]; //@line 88 "spwdmodule.c"
        var $94=((($93) + 1)&4294967295); //@line 88 "spwdmodule.c"
        HEAP[$setIndex]=$94; //@line 88 "spwdmodule.c"
        var $95=_PyErr_Occurred(); //@line 93 "spwdmodule.c"
        var $96=($95)!=0; //@line 93 "spwdmodule.c"
        if ($96) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 93 "spwdmodule.c"
      case 3: // $bb2
        var $97=HEAP[$v]; //@line 94 "spwdmodule.c"
        var $98=(($97)&4294967295); //@line 94 "spwdmodule.c"
        var $99=HEAP[$98]; //@line 94 "spwdmodule.c"
        var $100=((($99) - 1)&4294967295); //@line 94 "spwdmodule.c"
        var $101=HEAP[$v]; //@line 94 "spwdmodule.c"
        var $102=(($101)&4294967295); //@line 94 "spwdmodule.c"
        HEAP[$102]=$100; //@line 94 "spwdmodule.c"
        var $103=HEAP[$v]; //@line 94 "spwdmodule.c"
        var $104=(($103)&4294967295); //@line 94 "spwdmodule.c"
        var $105=HEAP[$104]; //@line 94 "spwdmodule.c"
        var $106=((($105))|0)==0; //@line 94 "spwdmodule.c"
        if ($106) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 94 "spwdmodule.c"
      case 4: // $bb3
        var $107=HEAP[$v]; //@line 94 "spwdmodule.c"
        var $108=(($107+4)&4294967295); //@line 94 "spwdmodule.c"
        var $109=HEAP[$108]; //@line 94 "spwdmodule.c"
        var $110=(($109+24)&4294967295); //@line 94 "spwdmodule.c"
        var $111=HEAP[$110]; //@line 94 "spwdmodule.c"
        var $112=HEAP[$v]; //@line 94 "spwdmodule.c"
        FUNCTION_TABLE[$111]($112); //@line 94 "spwdmodule.c"
        __label__ = 5; break; //@line 94 "spwdmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 95 "spwdmodule.c"
        __label__ = 7; break; //@line 95 "spwdmodule.c"
      case 6: // $bb5
        var $113=HEAP[$v]; //@line 98 "spwdmodule.c"
        HEAP[$0]=$113; //@line 98 "spwdmodule.c"
        __label__ = 7; break; //@line 98 "spwdmodule.c"
      case 7: // $bb6
        var $114=HEAP[$0]; //@line 75 "spwdmodule.c"
        HEAP[$retval]=$114; //@line 75 "spwdmodule.c"
        __label__ = 8; break; //@line 75 "spwdmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 75 "spwdmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 75 "spwdmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _spwd_getspnam($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $name=__stackBase__+16;
        var $p=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 116 "spwdmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str19)&4294967295), $name); //@line 116 "spwdmodule.c"
        var $3=((($2))|0)==0; //@line 116 "spwdmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 116 "spwdmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 117 "spwdmodule.c"
        __label__ = 5; break; //@line 117 "spwdmodule.c"
      case 2: // $bb1
        var $4=HEAP[$name]; //@line 118 "spwdmodule.c"
        var $5=_getspnam($4); //@line 118 "spwdmodule.c"
        HEAP[$p]=$5; //@line 118 "spwdmodule.c"
        var $6=HEAP[$p]; //@line 118 "spwdmodule.c"
        var $7=($6)==0; //@line 118 "spwdmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 118 "spwdmodule.c"
      case 3: // $bb2
        var $8=HEAP[_PyExc_KeyError]; //@line 119 "spwdmodule.c"
        _PyErr_SetString($8, ((__str20)&4294967295)); //@line 119 "spwdmodule.c"
        HEAP[$0]=0; //@line 120 "spwdmodule.c"
        __label__ = 5; break; //@line 120 "spwdmodule.c"
      case 4: // $bb3
        var $9=HEAP[$p]; //@line 122 "spwdmodule.c"
        var $10=_mkspent($9); //@line 122 "spwdmodule.c"
        HEAP[$0]=$10; //@line 122 "spwdmodule.c"
        __label__ = 5; break; //@line 122 "spwdmodule.c"
      case 5: // $bb4
        var $11=HEAP[$0]; //@line 117 "spwdmodule.c"
        HEAP[$retval]=$11; //@line 117 "spwdmodule.c"
        __label__ = 6; break; //@line 117 "spwdmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 117 "spwdmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 117 "spwdmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _spwd_getspall($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $d=__stackBase__+16;
        var $p=__stackBase__+20;
        var $v=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=_PyList_New(0); //@line 140 "spwdmodule.c"
        HEAP[$d]=$1; //@line 140 "spwdmodule.c"
        var $2=HEAP[$d]; //@line 140 "spwdmodule.c"
        var $3=($2)==0; //@line 140 "spwdmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 140 "spwdmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 141 "spwdmodule.c"
        __label__ = 15; break; //@line 141 "spwdmodule.c"
      case 2: // $bb1
        _setspent(); //@line 142 "spwdmodule.c"
        __label__ = 13; break; //@line 142 "spwdmodule.c"
      case 3: // $bb2
        var $4=HEAP[$p]; //@line 144 "spwdmodule.c"
        var $5=_mkspent($4); //@line 144 "spwdmodule.c"
        HEAP[$v]=$5; //@line 144 "spwdmodule.c"
        var $6=HEAP[$v]; //@line 145 "spwdmodule.c"
        var $7=($6)==0; //@line 145 "spwdmodule.c"
        if ($7) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 145 "spwdmodule.c"
      case 4: // $bb3
        var $8=HEAP[$d]; //@line 145 "spwdmodule.c"
        var $9=HEAP[$v]; //@line 145 "spwdmodule.c"
        var $10=_PyList_Append($8, $9); //@line 145 "spwdmodule.c"
        var $11=((($10))|0)!=0; //@line 145 "spwdmodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 11; break; } //@line 145 "spwdmodule.c"
      case 5: // $bb4
        var $12=HEAP[$v]; //@line 146 "spwdmodule.c"
        var $13=($12)!=0; //@line 146 "spwdmodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 146 "spwdmodule.c"
      case 6: // $bb5
        var $14=HEAP[$v]; //@line 146 "spwdmodule.c"
        var $15=(($14)&4294967295); //@line 146 "spwdmodule.c"
        var $16=HEAP[$15]; //@line 146 "spwdmodule.c"
        var $17=((($16) - 1)&4294967295); //@line 146 "spwdmodule.c"
        var $18=HEAP[$v]; //@line 146 "spwdmodule.c"
        var $19=(($18)&4294967295); //@line 146 "spwdmodule.c"
        HEAP[$19]=$17; //@line 146 "spwdmodule.c"
        var $20=HEAP[$v]; //@line 146 "spwdmodule.c"
        var $21=(($20)&4294967295); //@line 146 "spwdmodule.c"
        var $22=HEAP[$21]; //@line 146 "spwdmodule.c"
        var $23=((($22))|0)==0; //@line 146 "spwdmodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 146 "spwdmodule.c"
      case 7: // $bb6
        var $24=HEAP[$v]; //@line 146 "spwdmodule.c"
        var $25=(($24+4)&4294967295); //@line 146 "spwdmodule.c"
        var $26=HEAP[$25]; //@line 146 "spwdmodule.c"
        var $27=(($26+24)&4294967295); //@line 146 "spwdmodule.c"
        var $28=HEAP[$27]; //@line 146 "spwdmodule.c"
        var $29=HEAP[$v]; //@line 146 "spwdmodule.c"
        FUNCTION_TABLE[$28]($29); //@line 146 "spwdmodule.c"
        __label__ = 8; break; //@line 146 "spwdmodule.c"
      case 8: // $bb7
        var $30=HEAP[$d]; //@line 147 "spwdmodule.c"
        var $31=(($30)&4294967295); //@line 147 "spwdmodule.c"
        var $32=HEAP[$31]; //@line 147 "spwdmodule.c"
        var $33=((($32) - 1)&4294967295); //@line 147 "spwdmodule.c"
        var $34=HEAP[$d]; //@line 147 "spwdmodule.c"
        var $35=(($34)&4294967295); //@line 147 "spwdmodule.c"
        HEAP[$35]=$33; //@line 147 "spwdmodule.c"
        var $36=HEAP[$d]; //@line 147 "spwdmodule.c"
        var $37=(($36)&4294967295); //@line 147 "spwdmodule.c"
        var $38=HEAP[$37]; //@line 147 "spwdmodule.c"
        var $39=((($38))|0)==0; //@line 147 "spwdmodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 147 "spwdmodule.c"
      case 9: // $bb8
        var $40=HEAP[$d]; //@line 147 "spwdmodule.c"
        var $41=(($40+4)&4294967295); //@line 147 "spwdmodule.c"
        var $42=HEAP[$41]; //@line 147 "spwdmodule.c"
        var $43=(($42+24)&4294967295); //@line 147 "spwdmodule.c"
        var $44=HEAP[$43]; //@line 147 "spwdmodule.c"
        var $45=HEAP[$d]; //@line 147 "spwdmodule.c"
        FUNCTION_TABLE[$44]($45); //@line 147 "spwdmodule.c"
        __label__ = 10; break; //@line 147 "spwdmodule.c"
      case 10: // $bb9
        _endspent(); //@line 148 "spwdmodule.c"
        HEAP[$0]=0; //@line 149 "spwdmodule.c"
        __label__ = 15; break; //@line 149 "spwdmodule.c"
      case 11: // $bb10
        var $46=HEAP[$v]; //@line 151 "spwdmodule.c"
        var $47=(($46)&4294967295); //@line 151 "spwdmodule.c"
        var $48=HEAP[$47]; //@line 151 "spwdmodule.c"
        var $49=((($48) - 1)&4294967295); //@line 151 "spwdmodule.c"
        var $50=HEAP[$v]; //@line 151 "spwdmodule.c"
        var $51=(($50)&4294967295); //@line 151 "spwdmodule.c"
        HEAP[$51]=$49; //@line 151 "spwdmodule.c"
        var $52=HEAP[$v]; //@line 151 "spwdmodule.c"
        var $53=(($52)&4294967295); //@line 151 "spwdmodule.c"
        var $54=HEAP[$53]; //@line 151 "spwdmodule.c"
        var $55=((($54))|0)==0; //@line 151 "spwdmodule.c"
        if ($55) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 151 "spwdmodule.c"
      case 12: // $bb11
        var $56=HEAP[$v]; //@line 151 "spwdmodule.c"
        var $57=(($56+4)&4294967295); //@line 151 "spwdmodule.c"
        var $58=HEAP[$57]; //@line 151 "spwdmodule.c"
        var $59=(($58+24)&4294967295); //@line 151 "spwdmodule.c"
        var $60=HEAP[$59]; //@line 151 "spwdmodule.c"
        var $61=HEAP[$v]; //@line 151 "spwdmodule.c"
        FUNCTION_TABLE[$60]($61); //@line 151 "spwdmodule.c"
        __label__ = 13; break; //@line 151 "spwdmodule.c"
      case 13: // $bb12
        var $62=_getspent(); //@line 143 "spwdmodule.c"
        HEAP[$p]=$62; //@line 143 "spwdmodule.c"
        var $63=HEAP[$p]; //@line 143 "spwdmodule.c"
        var $64=($63)!=0; //@line 143 "spwdmodule.c"
        if ($64) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 143 "spwdmodule.c"
      case 14: // $bb13
        _endspent(); //@line 153 "spwdmodule.c"
        var $65=HEAP[$d]; //@line 154 "spwdmodule.c"
        HEAP[$0]=$65; //@line 154 "spwdmodule.c"
        __label__ = 15; break; //@line 154 "spwdmodule.c"
      case 15: // $bb14
        var $66=HEAP[$0]; //@line 141 "spwdmodule.c"
        HEAP[$retval]=$66; //@line 141 "spwdmodule.c"
        __label__ = 16; break; //@line 141 "spwdmodule.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 141 "spwdmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 141 "spwdmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initspwd() {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str23)&4294967295), ((_spwd_methods)&4294967295), ((_spwd__doc__)&4294967295), 0, 1013); //@line 174 "spwdmodule.c"
        HEAP[$m]=$0; //@line 174 "spwdmodule.c"
        var $1=HEAP[$m]; //@line 175 "spwdmodule.c"
        var $2=($1)==0; //@line 175 "spwdmodule.c"
        if ($2) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 175 "spwdmodule.c"
      case 1: // $bb
        var $3=HEAP[_initialized]; //@line 177 "spwdmodule.c"
        var $4=((($3))|0)==0; //@line 177 "spwdmodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 177 "spwdmodule.c"
      case 2: // $bb1
        _PyStructSequence_InitType(_StructSpwdType, _struct_spwd_type_desc); //@line 178 "spwdmodule.c"
        __label__ = 3; break; //@line 178 "spwdmodule.c"
      case 3: // $bb2
        var $5=((_StructSpwdType)&4294967295); //@line 180 "spwdmodule.c"
        var $6=HEAP[$5]; //@line 180 "spwdmodule.c"
        var $7=((($6) + 1)&4294967295); //@line 180 "spwdmodule.c"
        var $8=((_StructSpwdType)&4294967295); //@line 180 "spwdmodule.c"
        HEAP[$8]=$7; //@line 180 "spwdmodule.c"
        var $9=HEAP[$m]; //@line 181 "spwdmodule.c"
        var $10=_PyModule_AddObject($9, ((__str24)&4294967295), _StructSpwdType); //@line 181 "spwdmodule.c"
        HEAP[_initialized]=1; //@line 182 "spwdmodule.c"
        __label__ = 4; break; //@line 182 "spwdmodule.c"
      case 4: // $bb3
        __label__ = 5; break; //@line 176 "spwdmodule.c"
      case 5: // $return
        STACKTOP = __stackBase__;
        return; //@line 176 "spwdmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initspwd"] = _initspwd;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_spwd_getspnam,0,_spwd_getspall,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_spwd__doc__=allocate([84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,85,110,105,120,32,115,104,97,100,111,119,32,112,97,115,115,119,111,114,100,32,100,97,116,97,98,97,115,101,46,10,73,116,32,105,115,32,97,118,97,105,108,97,98,108,101,32,111,110,32,118,97,114,105,111,117,115,32,85,110,105,120,32,118,101,114,115,105,111,110,115,46,10,10,83,104,97,100,111,119,32,112,97,115,115,119,111,114,100,32,100,97,116,97,98,97,115,101,32,101,110,116,114,105,101,115,32,97,114,101,32,114,101,112,111,114,116,101,100,32,97,115,32,57,45,116,117,112,108,101,115,32,111,102,32,116,121,112,101,32,115,116,114,117,99,116,95,115,112,119,100,44,10,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,105,116,101,109,115,32,102,114,111,109,32,116,104,101,32,112,97,115,115,119,111,114,100,32,100,97,116,97,98,97,115,101,32,40,115,101,101,32,96,60,115,104,97,100,111,119,46,104,62,39,41,58,10,115,112,95,110,97,109,112,44,32,115,112,95,112,119,100,112,44,32,115,112,95,108,115,116,99,104,103,44,32,115,112,95,109,105,110,44,32,115,112,95,109,97,120,44,32,115,112,95,119,97,114,110,44,32,115,112,95,105,110,97,99,116,44,32,115,112,95,101,120,112,105,114,101,44,32,115,112,95,102,108,97,103,46,10,84,104,101,32,115,112,95,110,97,109,112,32,97,110,100,32,115,112,95,112,119,100,112,32,97,114,101,32,115,116,114,105,110,103,115,44,32,116,104,101,32,114,101,115,116,32,97,114,101,32,105,110,116,101,103,101,114,115,46,10,65,110,32,101,120,99,101,112,116,105,111,110,32,105,115,32,114,97,105,115,101,100,32,105,102,32,116,104,101,32,101,110,116,114,121,32,97,115,107,101,100,32,102,111,114,32,99,97,110,110,111,116,32,98,101,32,102,111,117,110,100,46,10,89,111,117,32,104,97,118,101,32,116,111,32,98,101,32,114,111,111,116,32,116,111,32,98,101,32,97,98,108,101,32,116,111,32,117,115,101,32,116,104,105,115,32,109,111,100,117,108,101,46,0] /* This module provides */, "i8", ALLOC_NORMAL);
__str=allocate([115,112,95,110,97,109,0] /* sp_nam\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([108,111,103,105,110,32,110,97,109,101,0] /* login name\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([115,112,95,112,119,100,0] /* sp_pwd\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([101,110,99,114,121,112,116,101,100,32,112,97,115,115,119,111,114,100,0] /* encrypted password\0 */, "i8", ALLOC_NORMAL);
__str4=allocate([115,112,95,108,115,116,99,104,103,0] /* sp_lstchg\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([100,97,116,101,32,111,102,32,108,97,115,116,32,99,104,97,110,103,101,0] /* date of last change\ */, "i8", ALLOC_NORMAL);
__str6=allocate([115,112,95,109,105,110,0] /* sp_min\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([109,105,110,32,35,100,97,121,115,32,98,101,116,119,101,101,110,32,99,104,97,110,103,101,115,0] /* min #days between ch */, "i8", ALLOC_NORMAL);
__str8=allocate([115,112,95,109,97,120,0] /* sp_max\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([109,97,120,32,35,100,97,121,115,32,98,101,116,119,101,101,110,32,99,104,97,110,103,101,115,0] /* max #days between ch */, "i8", ALLOC_NORMAL);
__str10=allocate([115,112,95,119,97,114,110,0] /* sp_warn\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([35,100,97,121,115,32,98,101,102,111,114,101,32,112,119,32,101,120,112,105,114,101,115,32,116,111,32,119,97,114,110,32,117,115,101,114,32,97,98,111,117,116,32,105,116,0] /* #days before pw expi */, "i8", ALLOC_NORMAL);
__str12=allocate([115,112,95,105,110,97,99,116,0] /* sp_inact\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([35,100,97,121,115,32,97,102,116,101,114,32,112,119,32,101,120,112,105,114,101,115,32,117,110,116,105,108,32,97,99,99,111,117,110,116,32,105,115,32,98,108,111,99,107,101,100,0] /* #days after pw expir */, "i8", ALLOC_NORMAL);
__str14=allocate([115,112,95,101,120,112,105,114,101,0] /* sp_expire\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([35,100,97,121,115,32,115,105,110,99,101,32,49,57,55,48,45,48,49,45,48,49,32,117,110,116,105,108,32,97,99,99,111,117,110,116,32,105,115,32,100,105,115,97,98,108,101,100,0] /* #days since 1970-01- */, "i8", ALLOC_NORMAL);
__str16=allocate([115,112,95,102,108,97,103,0] /* sp_flag\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([114,101,115,101,114,118,101,100,0] /* reserved\00 */, "i8", ALLOC_NORMAL);
_struct_spwd_type_fields=allocate(80, ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8"], ALLOC_NORMAL);
_struct_spwd__doc__=allocate([115,112,119,100,46,115,116,114,117,99,116,95,115,112,119,100,58,32,82,101,115,117,108,116,115,32,102,114,111,109,32,103,101,116,115,112,42,40,41,32,114,111,117,116,105,110,101,115,46,10,10,84,104,105,115,32,111,98,106,101,99,116,32,109,97,121,32,98,101,32,97,99,99,101,115,115,101,100,32,101,105,116,104,101,114,32,97,115,32,97,32,57,45,116,117,112,108,101,32,111,102,10,32,32,40,115,112,95,110,97,109,44,115,112,95,112,119,100,44,115,112,95,108,115,116,99,104,103,44,115,112,95,109,105,110,44,115,112,95,109,97,120,44,115,112,95,119,97,114,110,44,115,112,95,105,110,97,99,116,44,115,112,95,101,120,112,105,114,101,44,115,112,95,102,108,97,103,41,10,111,114,32,118,105,97,32,116,104,101,32,111,98,106,101,99,116,32,97,116,116,114,105,98,117,116,101,115,32,97,115,32,110,97,109,101,100,32,105,110,32,116,104,101,32,97,98,111,118,101,32,116,117,112,108,101,46,0] /* spwd.struct_spwd: Re */, "i8", ALLOC_NORMAL);
_struct_spwd_type_desc=allocate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0], ["i8*",0,0,0,"i8*",0,0,0,"%struct.PyStructSequence_Field*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str18=allocate([115,112,119,100,46,115,116,114,117,99,116,95,115,112,119,100,0] /* spwd.struct_spwd\00 */, "i8", ALLOC_NORMAL);
_StructSpwdType=allocate(196, ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
_spwd_getspnam__doc__=allocate([103,101,116,115,112,110,97,109,40,110,97,109,101,41,32,45,62,32,40,115,112,95,110,97,109,112,44,32,115,112,95,112,119,100,112,44,32,115,112,95,108,115,116,99,104,103,44,32,115,112,95,109,105,110,44,32,115,112,95,109,97,120,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,115,112,95,119,97,114,110,44,32,115,112,95,105,110,97,99,116,44,32,115,112,95,101,120,112,105,114,101,44,32,115,112,95,102,108,97,103,41,10,82,101,116,117,114,110,32,116,104,101,32,115,104,97,100,111,119,32,112,97,115,115,119,111,114,100,32,100,97,116,97,98,97,115,101,32,101,110,116,114,121,32,102,111,114,32,116,104,101,32,103,105,118,101,110,32,117,115,101,114,32,110,97,109,101,46,10,83,101,101,32,115,112,119,100,46,95,95,100,111,99,95,95,32,102,111,114,32,109,111,114,101,32,111,110,32,115,104,97,100,111,119,32,112,97,115,115,119,111,114,100,32,100,97,116,97,98,97,115,101,32,101,110,116,114,105,101,115,46,0] /* getspnam(name) -> (s */, "i8", ALLOC_NORMAL);
__str19=allocate([115,58,103,101,116,115,112,110,97,109,0] /* s:getspnam\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([103,101,116,115,112,110,97,109,40,41,58,32,110,97,109,101,32,110,111,116,32,102,111,117,110,100,0] /* getspnam(): name not */, "i8", ALLOC_NORMAL);
_spwd_getspall__doc__=allocate([103,101,116,115,112,97,108,108,40,41,32,45,62,32,108,105,115,116,95,111,102,95,101,110,116,114,105,101,115,10,82,101,116,117,114,110,32,97,32,108,105,115,116,32,111,102,32,97,108,108,32,97,118,97,105,108,97,98,108,101,32,115,104,97,100,111,119,32,112,97,115,115,119,111,114,100,32,100,97,116,97,98,97,115,101,32,101,110,116,114,105,101,115,44,32,105,110,32,97,114,98,105,116,114,97,114,121,32,111,114,100,101,114,46,10,83,101,101,32,115,112,119,100,46,95,95,100,111,99,95,95,32,102,111,114,32,109,111,114,101,32,111,110,32,115,104,97,100,111,119,32,112,97,115,115,119,111,114,100,32,100,97,116,97,98,97,115,101,32,101,110,116,114,105,101,115,46,0] /* getspall() -> list_o */, "i8", ALLOC_NORMAL);
__str21=allocate([103,101,116,115,112,110,97,109,0] /* getspnam\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([103,101,116,115,112,97,108,108,0] /* getspall\00 */, "i8", ALLOC_NORMAL);
_spwd_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str23=allocate([115,112,119,100,0] /* spwd\00 */, "i8", ALLOC_NORMAL);
_initialized=allocate(1, "i32", ALLOC_NORMAL);
__str24=allocate([115,116,114,117,99,116,95,115,112,119,100,0] /* struct_spwd\00 */, "i8", ALLOC_NORMAL);
HEAP[_struct_spwd_type_fields]=((__str)&4294967295);
HEAP[_struct_spwd_type_fields+4]=((__str1)&4294967295);
HEAP[_struct_spwd_type_fields+8]=((__str2)&4294967295);
HEAP[_struct_spwd_type_fields+12]=((__str3)&4294967295);
HEAP[_struct_spwd_type_fields+16]=((__str4)&4294967295);
HEAP[_struct_spwd_type_fields+20]=((__str5)&4294967295);
HEAP[_struct_spwd_type_fields+24]=((__str6)&4294967295);
HEAP[_struct_spwd_type_fields+28]=((__str7)&4294967295);
HEAP[_struct_spwd_type_fields+32]=((__str8)&4294967295);
HEAP[_struct_spwd_type_fields+36]=((__str9)&4294967295);
HEAP[_struct_spwd_type_fields+40]=((__str10)&4294967295);
HEAP[_struct_spwd_type_fields+44]=((__str11)&4294967295);
HEAP[_struct_spwd_type_fields+48]=((__str12)&4294967295);
HEAP[_struct_spwd_type_fields+52]=((__str13)&4294967295);
HEAP[_struct_spwd_type_fields+56]=((__str14)&4294967295);
HEAP[_struct_spwd_type_fields+60]=((__str15)&4294967295);
HEAP[_struct_spwd_type_fields+64]=((__str16)&4294967295);
HEAP[_struct_spwd_type_fields+68]=((__str17)&4294967295);
HEAP[_struct_spwd_type_desc]=((__str18)&4294967295);
HEAP[_struct_spwd_type_desc+4]=((_struct_spwd__doc__)&4294967295);
HEAP[_struct_spwd_type_desc+8]=((_struct_spwd_type_fields)&4294967295);
HEAP[_spwd_methods]=((__str21)&4294967295);
HEAP[_spwd_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_spwd_methods+12]=((_spwd_getspnam__doc__)&4294967295);
HEAP[_spwd_methods+16]=((__str22)&4294967295);
HEAP[_spwd_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_spwd_methods+28]=((_spwd_getspall__doc__)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

