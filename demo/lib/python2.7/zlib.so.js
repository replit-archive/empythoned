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



var $0___SIZE = 64; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 112; // %2
  
var $3___SIZE = 196; // %3
  
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
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_compobject___SIZE = 76; // %struct.compobject
  var $struct_compobject___FLATTENER = [0,4,8,64,68,72];
var $struct_internal_state___SIZE = 4; // %struct.internal_state
  
var $struct_z_stream___SIZE = 56; // %struct.z_stream
  
var __str;
var __str1;
var __str2;
var _ZlibError;
var __str3;
var __str4;
var _compressobj__doc__;
var _decompressobj__doc__;
var __str5;
var _compress__doc__;
var __str6;
var _PyExc_MemoryError;
var __str7;
var __str8;
var __str9;
var __str10;
var __str11;
var __str12;
var _decompress__doc__;
var __str13;
var __str14;
var __str15;
var __str16;
var __str17;
var __str18;
var __str19;
var _PyExc_ValueError;
var __str20;
var __str21;
var __str22;
var __str23;
var __str24;
var _comp_compress__doc__;
var __str25;
var __str26;
var _decomp_decompress__doc__;
var __str27;
var __str28;
var __str29;
var _comp_flush__doc__;
var __str30;
var __str31;
var __str32;
var _comp_copy__doc__;
var __str33;
var __str34;
var _decomp_copy__doc__;
var __str35;
var _decomp_flush__doc__;
var __str36;
var __str37;
var __str38;
var __str39;
var __str40;
var _comp_methods;
var __str41;
var _Decomp_methods;
var __str42;
var __str43;
var _adler32__doc__;
var __str44;
var _crc32__doc__;
var __str45;
var __str46;
var __str47;
var __str48;
var __str49;
var _zlib_methods;
var __str50;
var _Comptype;
var __str51;
var _Decomptype;
var _zlib_module_documentation;
var _PyType_Type;
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


































  function _zlib_error($zst, $err, $msg) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $err_addr=__stackBase__;
        var $msg_addr=__stackBase__+4;
        var $zmsg=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$err_addr]=$err;
        HEAP[$msg_addr]=$msg;
        var $0=(($zst+24)&4294967295); //@line 75 "zlibmodule.c"
        var $1=HEAP[$0]; //@line 75 "zlibmodule.c"
        HEAP[$zmsg]=$1; //@line 75 "zlibmodule.c"
        var $2=HEAP[$zmsg]; //@line 76 "zlibmodule.c"
        var $3=($2)==0; //@line 76 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 76 "zlibmodule.c"
      case 1: // $bb
        var $4=HEAP[$err_addr]; //@line 77 "zlibmodule.c"
        if ($4 == -5) {
          __label__ = 2; break;
        }
        else if ($4 == -3) {
          __label__ = 4; break;
        }
        else if ($4 == -2) {
          __label__ = 3; break;
        }
        else {
        __label__ = 5; break;
        }
        
      case 2: // $bb1
        HEAP[$zmsg]=((__str)&4294967295); //@line 79 "zlibmodule.c"
        __label__ = 5; break; //@line 79 "zlibmodule.c"
      case 3: // $bb2
        HEAP[$zmsg]=((__str1)&4294967295); //@line 82 "zlibmodule.c"
        __label__ = 5; break; //@line 82 "zlibmodule.c"
      case 4: // $bb3
        HEAP[$zmsg]=((__str2)&4294967295); //@line 85 "zlibmodule.c"
        __label__ = 5; break; //@line 85 "zlibmodule.c"
      case 5: // $bb4
        var $5=HEAP[$zmsg]; //@line 89 "zlibmodule.c"
        var $6=($5)==0; //@line 89 "zlibmodule.c"
        if ($6) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 89 "zlibmodule.c"
      case 6: // $bb5
        var $7=HEAP[_ZlibError]; //@line 90 "zlibmodule.c"
        var $8=HEAP[$err_addr]; //@line 90 "zlibmodule.c"
        var $9=HEAP[$msg_addr]; //@line 90 "zlibmodule.c"
        var $10=_PyErr_Format($7, ((__str3)&4294967295), $8, $9); //@line 90 "zlibmodule.c"
        __label__ = 8; break; //@line 90 "zlibmodule.c"
      case 7: // $bb6
        var $11=HEAP[_ZlibError]; //@line 92 "zlibmodule.c"
        var $12=HEAP[$err_addr]; //@line 92 "zlibmodule.c"
        var $13=HEAP[$msg_addr]; //@line 92 "zlibmodule.c"
        var $14=HEAP[$zmsg]; //@line 92 "zlibmodule.c"
        var $15=_PyErr_Format($11, ((__str4)&4294967295), $12, $13, $14); //@line 92 "zlibmodule.c"
        __label__ = 8; break; //@line 92 "zlibmodule.c"
      case 8: // $bb7
        __label__ = 9; break; //@line 93 "zlibmodule.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 93 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _newcompobject($type) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $self=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        var $1=HEAP[$type_addr]; //@line 109 "zlibmodule.c"
        var $2=__PyObject_New($1); //@line 109 "zlibmodule.c"
        var $3=$2; //@line 109 "zlibmodule.c"
        HEAP[$self]=$3; //@line 109 "zlibmodule.c"
        var $4=HEAP[$self]; //@line 110 "zlibmodule.c"
        var $5=($4)==0; //@line 110 "zlibmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 110 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 111 "zlibmodule.c"
        __label__ = 11; break; //@line 111 "zlibmodule.c"
      case 2: // $bb1
        var $6=HEAP[$self]; //@line 112 "zlibmodule.c"
        var $7=(($6+72)&4294967295); //@line 112 "zlibmodule.c"
        HEAP[$7]=0; //@line 112 "zlibmodule.c"
        var $8=_PyString_FromString(((__str5)&4294967295)); //@line 113 "zlibmodule.c"
        var $9=HEAP[$self]; //@line 113 "zlibmodule.c"
        var $10=(($9+64)&4294967295); //@line 113 "zlibmodule.c"
        HEAP[$10]=$8; //@line 113 "zlibmodule.c"
        var $11=HEAP[$self]; //@line 114 "zlibmodule.c"
        var $12=(($11+64)&4294967295); //@line 114 "zlibmodule.c"
        var $13=HEAP[$12]; //@line 114 "zlibmodule.c"
        var $14=($13)==0; //@line 114 "zlibmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 114 "zlibmodule.c"
      case 3: // $bb2
        var $15=HEAP[$self]; //@line 115 "zlibmodule.c"
        var $16=$15; //@line 115 "zlibmodule.c"
        var $17=(($16)&4294967295); //@line 115 "zlibmodule.c"
        var $18=HEAP[$17]; //@line 115 "zlibmodule.c"
        var $19=((($18) - 1)&4294967295); //@line 115 "zlibmodule.c"
        var $20=(($16)&4294967295); //@line 115 "zlibmodule.c"
        HEAP[$20]=$19; //@line 115 "zlibmodule.c"
        var $21=(($16)&4294967295); //@line 115 "zlibmodule.c"
        var $22=HEAP[$21]; //@line 115 "zlibmodule.c"
        var $23=((($22))|0)==0; //@line 115 "zlibmodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 115 "zlibmodule.c"
      case 4: // $bb3
        var $24=HEAP[$self]; //@line 115 "zlibmodule.c"
        var $25=$24; //@line 115 "zlibmodule.c"
        var $26=(($25+4)&4294967295); //@line 115 "zlibmodule.c"
        var $27=HEAP[$26]; //@line 115 "zlibmodule.c"
        var $28=(($27+24)&4294967295); //@line 115 "zlibmodule.c"
        var $29=HEAP[$28]; //@line 115 "zlibmodule.c"
        var $30=HEAP[$self]; //@line 115 "zlibmodule.c"
        var $31=$30; //@line 115 "zlibmodule.c"
        FUNCTION_TABLE[$29]($31); //@line 115 "zlibmodule.c"
        __label__ = 5; break; //@line 115 "zlibmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 116 "zlibmodule.c"
        __label__ = 11; break; //@line 116 "zlibmodule.c"
      case 6: // $bb5
        var $32=_PyString_FromString(((__str5)&4294967295)); //@line 118 "zlibmodule.c"
        var $33=HEAP[$self]; //@line 118 "zlibmodule.c"
        var $34=(($33+68)&4294967295); //@line 118 "zlibmodule.c"
        HEAP[$34]=$32; //@line 118 "zlibmodule.c"
        var $35=HEAP[$self]; //@line 119 "zlibmodule.c"
        var $36=(($35+68)&4294967295); //@line 119 "zlibmodule.c"
        var $37=HEAP[$36]; //@line 119 "zlibmodule.c"
        var $38=($37)==0; //@line 119 "zlibmodule.c"
        if ($38) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 119 "zlibmodule.c"
      case 7: // $bb6
        var $39=HEAP[$self]; //@line 120 "zlibmodule.c"
        var $40=$39; //@line 120 "zlibmodule.c"
        var $41=(($40)&4294967295); //@line 120 "zlibmodule.c"
        var $42=HEAP[$41]; //@line 120 "zlibmodule.c"
        var $43=((($42) - 1)&4294967295); //@line 120 "zlibmodule.c"
        var $44=(($40)&4294967295); //@line 120 "zlibmodule.c"
        HEAP[$44]=$43; //@line 120 "zlibmodule.c"
        var $45=(($40)&4294967295); //@line 120 "zlibmodule.c"
        var $46=HEAP[$45]; //@line 120 "zlibmodule.c"
        var $47=((($46))|0)==0; //@line 120 "zlibmodule.c"
        if ($47) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 120 "zlibmodule.c"
      case 8: // $bb7
        var $48=HEAP[$self]; //@line 120 "zlibmodule.c"
        var $49=$48; //@line 120 "zlibmodule.c"
        var $50=(($49+4)&4294967295); //@line 120 "zlibmodule.c"
        var $51=HEAP[$50]; //@line 120 "zlibmodule.c"
        var $52=(($51+24)&4294967295); //@line 120 "zlibmodule.c"
        var $53=HEAP[$52]; //@line 120 "zlibmodule.c"
        var $54=HEAP[$self]; //@line 120 "zlibmodule.c"
        var $55=$54; //@line 120 "zlibmodule.c"
        FUNCTION_TABLE[$53]($55); //@line 120 "zlibmodule.c"
        __label__ = 9; break; //@line 120 "zlibmodule.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 121 "zlibmodule.c"
        __label__ = 11; break; //@line 121 "zlibmodule.c"
      case 10: // $bb9
        var $56=HEAP[$self]; //@line 123 "zlibmodule.c"
        HEAP[$0]=$56; //@line 123 "zlibmodule.c"
        __label__ = 11; break; //@line 123 "zlibmodule.c"
      case 11: // $bb10
        var $57=HEAP[$0]; //@line 111 "zlibmodule.c"
        HEAP[$retval]=$57; //@line 111 "zlibmodule.c"
        __label__ = 12; break; //@line 111 "zlibmodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 111 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 111 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_compress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 96; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 96);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ReturnVal=__stackBase__+16;
        var $input=__stackBase__+20;
        var $output=__stackBase__+24;
        var $length=__stackBase__+28;
        var $level=__stackBase__+32;
        var $err=__stackBase__+36;
        var $zst=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$ReturnVal]=0; //@line 134 "zlibmodule.c"
        HEAP[$level]=-1; //@line 136 "zlibmodule.c"
        var $1=HEAP[$args_addr]; //@line 140 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str6)&4294967295), $input, $length, $level); //@line 140 "zlibmodule.c"
        var $3=((($2))|0)==0; //@line 140 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 140 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 141 "zlibmodule.c"
        __label__ = 14; break; //@line 141 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$length]; //@line 143 "zlibmodule.c"
        var $5=((((($4))|0)/1000)|0); //@line 143 "zlibmodule.c"
        var $6=HEAP[$length]; //@line 143 "zlibmodule.c"
        var $7=((($5) + ($6))&4294967295); //@line 143 "zlibmodule.c"
        var $8=((($7) + 13)&4294967295); //@line 143 "zlibmodule.c"
        var $9=(($zst+16)&4294967295); //@line 143 "zlibmodule.c"
        HEAP[$9]=$8; //@line 143 "zlibmodule.c"
        var $10=(($zst+16)&4294967295); //@line 145 "zlibmodule.c"
        var $11=HEAP[$10]; //@line 145 "zlibmodule.c"
        var $12=_malloc($11); //@line 145 "zlibmodule.c"
        HEAP[$output]=$12; //@line 145 "zlibmodule.c"
        var $13=HEAP[$output]; //@line 146 "zlibmodule.c"
        var $14=($13)==0; //@line 146 "zlibmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 146 "zlibmodule.c"
      case 3: // $bb2
        var $15=HEAP[_PyExc_MemoryError]; //@line 147 "zlibmodule.c"
        _PyErr_SetString($15, ((__str7)&4294967295)); //@line 147 "zlibmodule.c"
        HEAP[$0]=0; //@line 149 "zlibmodule.c"
        __label__ = 14; break; //@line 149 "zlibmodule.c"
      case 4: // $bb3
        var $16=(($zst+32)&4294967295); //@line 155 "zlibmodule.c"
        HEAP[$16]=0; //@line 155 "zlibmodule.c"
        var $17=(($zst+36)&4294967295); //@line 156 "zlibmodule.c"
        HEAP[$17]=0; //@line 156 "zlibmodule.c"
        var $18=(($zst+12)&4294967295); //@line 157 "zlibmodule.c"
        var $19=HEAP[$output]; //@line 157 "zlibmodule.c"
        HEAP[$18]=$19; //@line 157 "zlibmodule.c"
        var $20=HEAP[$input]; //@line 158 "zlibmodule.c"
        var $21=(($zst)&4294967295); //@line 158 "zlibmodule.c"
        HEAP[$21]=$20; //@line 158 "zlibmodule.c"
        var $22=HEAP[$length]; //@line 159 "zlibmodule.c"
        var $23=(($zst+4)&4294967295); //@line 159 "zlibmodule.c"
        HEAP[$23]=$22; //@line 159 "zlibmodule.c"
        var $24=HEAP[$level]; //@line 160 "zlibmodule.c"
        var $25=_deflateInit_($zst, $24, ((__str8)&4294967295), 56); //@line 160 "zlibmodule.c"
        HEAP[$err]=$25; //@line 160 "zlibmodule.c"
        var $26=HEAP[$err]; //@line 162 "zlibmodule.c"
        if ($26 == -4) {
          __label__ = 6; break;
        }
        else if ($26 == -2) {
          __label__ = 7; break;
        }
        else if ($26 == 0) {
          __label__ = 5; break;
        }
        else {
        __label__ = 8; break;
        }
        
      case 5: // $bb4
        var $27=_deflate($zst, 4); //@line 180 "zlibmodule.c"
        HEAP[$err]=$27; //@line 180 "zlibmodule.c"
        var $28=HEAP[$err]; //@line 183 "zlibmodule.c"
        var $29=((($28))|0)!=1; //@line 183 "zlibmodule.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 183 "zlibmodule.c"
      case 6: // $bb5
        var $30=HEAP[_PyExc_MemoryError]; //@line 166 "zlibmodule.c"
        _PyErr_SetString($30, ((__str9)&4294967295)); //@line 166 "zlibmodule.c"
        __label__ = 13; break; //@line 166 "zlibmodule.c"
      case 7: // $bb6
        var $31=HEAP[_ZlibError]; //@line 170 "zlibmodule.c"
        _PyErr_SetString($31, ((__str10)&4294967295)); //@line 170 "zlibmodule.c"
        __label__ = 13; break; //@line 170 "zlibmodule.c"
      case 8: // $bb7
        var $32=_deflateEnd($zst); //@line 174 "zlibmodule.c"
        var $33=HEAP[$err]; //@line 175 "zlibmodule.c"
        _zlib_error($zst, $33, ((__str11)&4294967295)); //@line 175 "zlibmodule.c"
        __label__ = 13; break; //@line 175 "zlibmodule.c"
      case 9: // $bb8
        var $34=HEAP[$err]; //@line 184 "zlibmodule.c"
        _zlib_error($zst, $34, ((__str11)&4294967295)); //@line 184 "zlibmodule.c"
        var $35=_deflateEnd($zst); //@line 185 "zlibmodule.c"
        __label__ = 13; break; //@line 185 "zlibmodule.c"
      case 10: // $bb9
        var $36=_deflateEnd($zst); //@line 189 "zlibmodule.c"
        HEAP[$err]=$36; //@line 189 "zlibmodule.c"
        var $37=HEAP[$err]; //@line 190 "zlibmodule.c"
        var $38=((($37))|0)==0; //@line 190 "zlibmodule.c"
        if ($38) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 190 "zlibmodule.c"
      case 11: // $bb10
        var $39=(($zst+20)&4294967295); //@line 191 "zlibmodule.c"
        var $40=HEAP[$39]; //@line 191 "zlibmodule.c"
        var $41=HEAP[$output]; //@line 191 "zlibmodule.c"
        var $42=_PyString_FromStringAndSize($41, $40); //@line 191 "zlibmodule.c"
        HEAP[$ReturnVal]=$42; //@line 191 "zlibmodule.c"
        __label__ = 13; break; //@line 191 "zlibmodule.c"
      case 12: // $bb11
        var $43=HEAP[$err]; //@line 194 "zlibmodule.c"
        _zlib_error($zst, $43, ((__str12)&4294967295)); //@line 194 "zlibmodule.c"
        __label__ = 13; break; //@line 196 "zlibmodule.c"
      case 13: // $error
        var $44=HEAP[$output]; //@line 197 "zlibmodule.c"
        _free($44); //@line 197 "zlibmodule.c"
        var $45=HEAP[$ReturnVal]; //@line 199 "zlibmodule.c"
        HEAP[$0]=$45; //@line 199 "zlibmodule.c"
        __label__ = 14; break; //@line 199 "zlibmodule.c"
      case 14: // $bb12
        var $46=HEAP[$0]; //@line 141 "zlibmodule.c"
        HEAP[$retval]=$46; //@line 141 "zlibmodule.c"
        __label__ = 15; break; //@line 141 "zlibmodule.c"
      case 15: // $return
        var $retval13=HEAP[$retval]; //@line 141 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 141 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_decompress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 96; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 96);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result_str=__stackBase__+16;
        var $input=__stackBase__+20;
        var $length=__stackBase__+24;
        var $err=__stackBase__+28;
        var $wsize=__stackBase__+32;
        var $r_strlen=__stackBase__+36;
        var $zst=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$wsize]=15; //@line 214 "zlibmodule.c"
        HEAP[$r_strlen]=16384; //@line 215 "zlibmodule.c"
        var $1=HEAP[$args_addr]; //@line 218 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), $input, $length, $wsize, $r_strlen); //@line 218 "zlibmodule.c"
        var $3=((($2))|0)==0; //@line 218 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 218 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 220 "zlibmodule.c"
        __label__ = 26; break; //@line 220 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$r_strlen]; //@line 222 "zlibmodule.c"
        var $5=((($4))|0) <= 0; //@line 222 "zlibmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 222 "zlibmodule.c"
      case 3: // $bb2
        HEAP[$r_strlen]=1; //@line 223 "zlibmodule.c"
        __label__ = 4; break; //@line 223 "zlibmodule.c"
      case 4: // $bb3
        var $6=HEAP[$length]; //@line 225 "zlibmodule.c"
        var $7=(($zst+4)&4294967295); //@line 225 "zlibmodule.c"
        HEAP[$7]=$6; //@line 225 "zlibmodule.c"
        var $8=HEAP[$r_strlen]; //@line 226 "zlibmodule.c"
        var $9=(($zst+16)&4294967295); //@line 226 "zlibmodule.c"
        HEAP[$9]=$8; //@line 226 "zlibmodule.c"
        var $10=HEAP[$r_strlen]; //@line 228 "zlibmodule.c"
        var $11=_PyString_FromStringAndSize(0, $10); //@line 228 "zlibmodule.c"
        HEAP[$result_str]=$11; //@line 228 "zlibmodule.c"
        var $12=HEAP[$result_str]; //@line 228 "zlibmodule.c"
        var $13=($12)==0; //@line 228 "zlibmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 228 "zlibmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 229 "zlibmodule.c"
        __label__ = 26; break; //@line 229 "zlibmodule.c"
      case 6: // $bb5
        var $14=(($zst+32)&4294967295); //@line 231 "zlibmodule.c"
        HEAP[$14]=0; //@line 231 "zlibmodule.c"
        var $15=(($zst+36)&4294967295); //@line 232 "zlibmodule.c"
        HEAP[$15]=0; //@line 232 "zlibmodule.c"
        var $16=HEAP[$result_str]; //@line 233 "zlibmodule.c"
        var $17=$16; //@line 233 "zlibmodule.c"
        var $18=(($17+20)&4294967295); //@line 233 "zlibmodule.c"
        var $19=$18; //@line 233 "zlibmodule.c"
        var $20=(($zst+12)&4294967295); //@line 233 "zlibmodule.c"
        HEAP[$20]=$19; //@line 233 "zlibmodule.c"
        var $21=HEAP[$input]; //@line 234 "zlibmodule.c"
        var $22=(($zst)&4294967295); //@line 234 "zlibmodule.c"
        HEAP[$22]=$21; //@line 234 "zlibmodule.c"
        var $23=HEAP[$wsize]; //@line 235 "zlibmodule.c"
        var $24=_inflateInit2_($zst, $23, ((__str8)&4294967295), 56); //@line 235 "zlibmodule.c"
        HEAP[$err]=$24; //@line 235 "zlibmodule.c"
        var $25=HEAP[$err]; //@line 237 "zlibmodule.c"
        if ($25 == -4) {
          __label__ = 8; break;
        }
        else if ($25 == 0) {
          __label__ = 7; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 7: // $bb6
        __label__ = 10; break; //@line 237 "zlibmodule.c"
      case 8: // $bb7
        var $26=HEAP[_PyExc_MemoryError]; //@line 241 "zlibmodule.c"
        _PyErr_SetString($26, ((__str14)&4294967295)); //@line 241 "zlibmodule.c"
        __label__ = 22; break; //@line 241 "zlibmodule.c"
      case 9: // $bb8
        var $27=_inflateEnd($zst); //@line 245 "zlibmodule.c"
        var $28=HEAP[$err]; //@line 246 "zlibmodule.c"
        _zlib_error($zst, $28, ((__str15)&4294967295)); //@line 246 "zlibmodule.c"
        __label__ = 22; break; //@line 246 "zlibmodule.c"
      case 10: // $bb9
        var $29=_inflate($zst, 4); //@line 252 "zlibmodule.c"
        HEAP[$err]=$29; //@line 252 "zlibmodule.c"
        var $30=HEAP[$err]; //@line 255 "zlibmodule.c"
        if ($30 == -5) {
          __label__ = 12; break;
        }
        else if ($30 == 0) {
          __label__ = 14; break;
        }
        else if ($30 == 1) {
          __label__ = 11; break;
        }
        else {
        __label__ = 17; break;
        }
        
      case 11: // $bb10
        __label__ = 18; break; //@line 255 "zlibmodule.c"
      case 12: // $bb11
        var $31=(($zst+16)&4294967295); //@line 264 "zlibmodule.c"
        var $32=HEAP[$31]; //@line 264 "zlibmodule.c"
        var $33=((($32))|0)!=0; //@line 264 "zlibmodule.c"
        if ($33) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 264 "zlibmodule.c"
      case 13: // $bb12
        var $34=HEAP[$err]; //@line 265 "zlibmodule.c"
        _zlib_error($zst, $34, ((__str16)&4294967295)); //@line 265 "zlibmodule.c"
        var $35=_inflateEnd($zst); //@line 266 "zlibmodule.c"
        __label__ = 22; break; //@line 266 "zlibmodule.c"
      case 14: // $bb13
        var $36=HEAP[$r_strlen]; //@line 272 "zlibmodule.c"
        var $37=($36) << 1; //@line 272 "zlibmodule.c"
        var $38=__PyString_Resize($result_str, $37); //@line 272 "zlibmodule.c"
        var $39=((($38))|0) < 0; //@line 272 "zlibmodule.c"
        if ($39) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 272 "zlibmodule.c"
      case 15: // $bb14
        var $40=_inflateEnd($zst); //@line 273 "zlibmodule.c"
        __label__ = 22; break; //@line 273 "zlibmodule.c"
      case 16: // $bb15
        var $41=HEAP[$result_str]; //@line 276 "zlibmodule.c"
        var $42=$41; //@line 276 "zlibmodule.c"
        var $43=(($42+20)&4294967295); //@line 276 "zlibmodule.c"
        var $44=$43; //@line 276 "zlibmodule.c"
        var $45=HEAP[$r_strlen]; //@line 276 "zlibmodule.c"
        var $46=(($44+$45)&4294967295); //@line 276 "zlibmodule.c"
        var $47=(($zst+12)&4294967295); //@line 276 "zlibmodule.c"
        HEAP[$47]=$46; //@line 276 "zlibmodule.c"
        var $48=HEAP[$r_strlen]; //@line 278 "zlibmodule.c"
        var $49=(($zst+16)&4294967295); //@line 278 "zlibmodule.c"
        HEAP[$49]=$48; //@line 278 "zlibmodule.c"
        var $50=HEAP[$r_strlen]; //@line 279 "zlibmodule.c"
        var $51=($50) << 1; //@line 279 "zlibmodule.c"
        HEAP[$r_strlen]=$51; //@line 279 "zlibmodule.c"
        __label__ = 18; break; //@line 279 "zlibmodule.c"
      case 17: // $bb16
        var $52=_inflateEnd($zst); //@line 282 "zlibmodule.c"
        var $53=HEAP[$err]; //@line 283 "zlibmodule.c"
        _zlib_error($zst, $53, ((__str16)&4294967295)); //@line 283 "zlibmodule.c"
        __label__ = 22; break; //@line 283 "zlibmodule.c"
      case 18: // $bb17
        var $54=HEAP[$err]; //@line 286 "zlibmodule.c"
        var $55=((($54))|0)!=1; //@line 286 "zlibmodule.c"
        if ($55) { __label__ = 10; break; } else { __label__ = 19; break; } //@line 286 "zlibmodule.c"
      case 19: // $bb18
        var $56=_inflateEnd($zst); //@line 288 "zlibmodule.c"
        HEAP[$err]=$56; //@line 288 "zlibmodule.c"
        var $57=HEAP[$err]; //@line 289 "zlibmodule.c"
        var $58=((($57))|0)!=0; //@line 289 "zlibmodule.c"
        if ($58) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 289 "zlibmodule.c"
      case 20: // $bb19
        var $59=HEAP[$err]; //@line 290 "zlibmodule.c"
        _zlib_error($zst, $59, ((__str17)&4294967295)); //@line 290 "zlibmodule.c"
        __label__ = 22; break; //@line 290 "zlibmodule.c"
      case 21: // $bb20
        var $60=(($zst+20)&4294967295); //@line 294 "zlibmodule.c"
        var $61=HEAP[$60]; //@line 294 "zlibmodule.c"
        var $62=__PyString_Resize($result_str, $61); //@line 294 "zlibmodule.c"
        var $63=HEAP[$result_str]; //@line 295 "zlibmodule.c"
        HEAP[$0]=$63; //@line 295 "zlibmodule.c"
        __label__ = 26; break; //@line 295 "zlibmodule.c"
      case 22: // $error
        var $64=HEAP[$result_str]; //@line 298 "zlibmodule.c"
        var $65=($64)!=0; //@line 298 "zlibmodule.c"
        if ($65) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 298 "zlibmodule.c"
      case 23: // $bb21
        var $66=HEAP[$result_str]; //@line 298 "zlibmodule.c"
        var $67=(($66)&4294967295); //@line 298 "zlibmodule.c"
        var $68=HEAP[$67]; //@line 298 "zlibmodule.c"
        var $69=((($68) - 1)&4294967295); //@line 298 "zlibmodule.c"
        var $70=(($66)&4294967295); //@line 298 "zlibmodule.c"
        HEAP[$70]=$69; //@line 298 "zlibmodule.c"
        var $71=(($66)&4294967295); //@line 298 "zlibmodule.c"
        var $72=HEAP[$71]; //@line 298 "zlibmodule.c"
        var $73=((($72))|0)==0; //@line 298 "zlibmodule.c"
        if ($73) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 298 "zlibmodule.c"
      case 24: // $bb22
        var $74=HEAP[$result_str]; //@line 298 "zlibmodule.c"
        var $75=(($74+4)&4294967295); //@line 298 "zlibmodule.c"
        var $76=HEAP[$75]; //@line 298 "zlibmodule.c"
        var $77=(($76+24)&4294967295); //@line 298 "zlibmodule.c"
        var $78=HEAP[$77]; //@line 298 "zlibmodule.c"
        var $79=HEAP[$result_str]; //@line 298 "zlibmodule.c"
        FUNCTION_TABLE[$78]($79); //@line 298 "zlibmodule.c"
        __label__ = 25; break; //@line 298 "zlibmodule.c"
      case 25: // $bb23
        HEAP[$0]=0; //@line 299 "zlibmodule.c"
        __label__ = 26; break; //@line 299 "zlibmodule.c"
      case 26: // $bb24
        var $80=HEAP[$0]; //@line 220 "zlibmodule.c"
        HEAP[$retval]=$80; //@line 220 "zlibmodule.c"
        __label__ = 27; break; //@line 220 "zlibmodule.c"
      case 27: // $return
        var $retval25=HEAP[$retval]; //@line 220 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 220 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_compressobj($selfptr, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $selfptr_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $self=__stackBase__+16;
        var $level=__stackBase__+20;
        var $method=__stackBase__+24;
        var $wbits=__stackBase__+28;
        var $memLevel=__stackBase__+32;
        var $strategy=__stackBase__+36;
        var $err=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$selfptr_addr]=$selfptr;
        HEAP[$args_addr]=$args;
        HEAP[$level]=-1; //@line 306 "zlibmodule.c"
        HEAP[$method]=8; //@line 306 "zlibmodule.c"
        HEAP[$wbits]=15; //@line 307 "zlibmodule.c"
        HEAP[$memLevel]=8; //@line 307 "zlibmodule.c"
        HEAP[$strategy]=0; //@line 307 "zlibmodule.c"
        var $1=HEAP[$args_addr]; //@line 309 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str18)&4294967295), $level, $method, $wbits, $memLevel, $strategy); //@line 309 "zlibmodule.c"
        var $3=((($2))|0)==0; //@line 309 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 309 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 311 "zlibmodule.c"
        __label__ = 15; break; //@line 311 "zlibmodule.c"
      case 2: // $bb1
        var $4=_newcompobject(_Comptype); //@line 313 "zlibmodule.c"
        HEAP[$self]=$4; //@line 313 "zlibmodule.c"
        var $5=HEAP[$self]; //@line 314 "zlibmodule.c"
        var $6=($5)==0; //@line 314 "zlibmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 314 "zlibmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 315 "zlibmodule.c"
        __label__ = 15; break; //@line 315 "zlibmodule.c"
      case 4: // $bb3
        var $7=HEAP[$self]; //@line 316 "zlibmodule.c"
        var $8=(($7+8)&4294967295); //@line 316 "zlibmodule.c"
        var $9=(($8+32)&4294967295); //@line 316 "zlibmodule.c"
        HEAP[$9]=0; //@line 316 "zlibmodule.c"
        var $10=HEAP[$self]; //@line 317 "zlibmodule.c"
        var $11=(($10+8)&4294967295); //@line 317 "zlibmodule.c"
        var $12=(($11+36)&4294967295); //@line 317 "zlibmodule.c"
        HEAP[$12]=0; //@line 317 "zlibmodule.c"
        var $13=HEAP[$self]; //@line 318 "zlibmodule.c"
        var $14=(($13+8)&4294967295); //@line 318 "zlibmodule.c"
        var $15=(($14)&4294967295); //@line 318 "zlibmodule.c"
        HEAP[$15]=0; //@line 318 "zlibmodule.c"
        var $16=HEAP[$self]; //@line 319 "zlibmodule.c"
        var $17=(($16+8)&4294967295); //@line 319 "zlibmodule.c"
        var $18=(($17+4)&4294967295); //@line 319 "zlibmodule.c"
        HEAP[$18]=0; //@line 319 "zlibmodule.c"
        var $19=HEAP[$strategy]; //@line 320 "zlibmodule.c"
        var $20=HEAP[$memLevel]; //@line 320 "zlibmodule.c"
        var $21=HEAP[$wbits]; //@line 320 "zlibmodule.c"
        var $22=HEAP[$method]; //@line 320 "zlibmodule.c"
        var $23=HEAP[$level]; //@line 320 "zlibmodule.c"
        var $24=HEAP[$self]; //@line 320 "zlibmodule.c"
        var $25=(($24+8)&4294967295); //@line 320 "zlibmodule.c"
        var $26=_deflateInit2_($25, $23, $22, $21, $20, $19, ((__str8)&4294967295), 56); //@line 320 "zlibmodule.c"
        HEAP[$err]=$26; //@line 320 "zlibmodule.c"
        var $27=HEAP[$err]; //@line 321 "zlibmodule.c"
        if ($27 == -4) {
          __label__ = 6; break;
        }
        else if ($27 == -2) {
          __label__ = 9; break;
        }
        else if ($27 == 0) {
          __label__ = 5; break;
        }
        else {
        __label__ = 12; break;
        }
        
      case 5: // $bb4
        var $28=HEAP[$self]; //@line 323 "zlibmodule.c"
        var $29=(($28+72)&4294967295); //@line 323 "zlibmodule.c"
        HEAP[$29]=1; //@line 323 "zlibmodule.c"
        var $30=HEAP[$self]; //@line 324 "zlibmodule.c"
        var $31=$30; //@line 324 "zlibmodule.c"
        HEAP[$0]=$31; //@line 324 "zlibmodule.c"
        __label__ = 15; break; //@line 324 "zlibmodule.c"
      case 6: // $bb5
        var $32=HEAP[$self]; //@line 326 "zlibmodule.c"
        var $33=$32; //@line 326 "zlibmodule.c"
        var $34=(($33)&4294967295); //@line 326 "zlibmodule.c"
        var $35=HEAP[$34]; //@line 326 "zlibmodule.c"
        var $36=((($35) - 1)&4294967295); //@line 326 "zlibmodule.c"
        var $37=(($33)&4294967295); //@line 326 "zlibmodule.c"
        HEAP[$37]=$36; //@line 326 "zlibmodule.c"
        var $38=(($33)&4294967295); //@line 326 "zlibmodule.c"
        var $39=HEAP[$38]; //@line 326 "zlibmodule.c"
        var $40=((($39))|0)==0; //@line 326 "zlibmodule.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 326 "zlibmodule.c"
      case 7: // $bb6
        var $41=HEAP[$self]; //@line 326 "zlibmodule.c"
        var $42=$41; //@line 326 "zlibmodule.c"
        var $43=(($42+4)&4294967295); //@line 326 "zlibmodule.c"
        var $44=HEAP[$43]; //@line 326 "zlibmodule.c"
        var $45=(($44+24)&4294967295); //@line 326 "zlibmodule.c"
        var $46=HEAP[$45]; //@line 326 "zlibmodule.c"
        var $47=HEAP[$self]; //@line 326 "zlibmodule.c"
        var $48=$47; //@line 326 "zlibmodule.c"
        FUNCTION_TABLE[$46]($48); //@line 326 "zlibmodule.c"
        __label__ = 8; break; //@line 326 "zlibmodule.c"
      case 8: // $bb7
        var $49=HEAP[_PyExc_MemoryError]; //@line 327 "zlibmodule.c"
        _PyErr_SetString($49, ((__str19)&4294967295)); //@line 327 "zlibmodule.c"
        HEAP[$0]=0; //@line 329 "zlibmodule.c"
        __label__ = 15; break; //@line 329 "zlibmodule.c"
      case 9: // $bb8
        var $50=HEAP[$self]; //@line 331 "zlibmodule.c"
        var $51=$50; //@line 331 "zlibmodule.c"
        var $52=(($51)&4294967295); //@line 331 "zlibmodule.c"
        var $53=HEAP[$52]; //@line 331 "zlibmodule.c"
        var $54=((($53) - 1)&4294967295); //@line 331 "zlibmodule.c"
        var $55=(($51)&4294967295); //@line 331 "zlibmodule.c"
        HEAP[$55]=$54; //@line 331 "zlibmodule.c"
        var $56=(($51)&4294967295); //@line 331 "zlibmodule.c"
        var $57=HEAP[$56]; //@line 331 "zlibmodule.c"
        var $58=((($57))|0)==0; //@line 331 "zlibmodule.c"
        if ($58) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 331 "zlibmodule.c"
      case 10: // $bb9
        var $59=HEAP[$self]; //@line 331 "zlibmodule.c"
        var $60=$59; //@line 331 "zlibmodule.c"
        var $61=(($60+4)&4294967295); //@line 331 "zlibmodule.c"
        var $62=HEAP[$61]; //@line 331 "zlibmodule.c"
        var $63=(($62+24)&4294967295); //@line 331 "zlibmodule.c"
        var $64=HEAP[$63]; //@line 331 "zlibmodule.c"
        var $65=HEAP[$self]; //@line 331 "zlibmodule.c"
        var $66=$65; //@line 331 "zlibmodule.c"
        FUNCTION_TABLE[$64]($66); //@line 331 "zlibmodule.c"
        __label__ = 11; break; //@line 331 "zlibmodule.c"
      case 11: // $bb10
        var $67=HEAP[_PyExc_ValueError]; //@line 332 "zlibmodule.c"
        _PyErr_SetString($67, ((__str20)&4294967295)); //@line 332 "zlibmodule.c"
        HEAP[$0]=0; //@line 333 "zlibmodule.c"
        __label__ = 15; break; //@line 333 "zlibmodule.c"
      case 12: // $bb11
        var $68=HEAP[$self]; //@line 335 "zlibmodule.c"
        var $69=(($68+8)&4294967295); //@line 335 "zlibmodule.c"
        var $70=HEAP[$err]; //@line 335 "zlibmodule.c"
        _zlib_error($69, $70, ((__str21)&4294967295)); //@line 335 "zlibmodule.c"
        var $71=HEAP[$self]; //@line 336 "zlibmodule.c"
        var $72=$71; //@line 336 "zlibmodule.c"
        var $73=(($72)&4294967295); //@line 336 "zlibmodule.c"
        var $74=HEAP[$73]; //@line 336 "zlibmodule.c"
        var $75=((($74) - 1)&4294967295); //@line 336 "zlibmodule.c"
        var $76=(($72)&4294967295); //@line 336 "zlibmodule.c"
        HEAP[$76]=$75; //@line 336 "zlibmodule.c"
        var $77=(($72)&4294967295); //@line 336 "zlibmodule.c"
        var $78=HEAP[$77]; //@line 336 "zlibmodule.c"
        var $79=((($78))|0)==0; //@line 336 "zlibmodule.c"
        if ($79) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 336 "zlibmodule.c"
      case 13: // $bb12
        var $80=HEAP[$self]; //@line 336 "zlibmodule.c"
        var $81=$80; //@line 336 "zlibmodule.c"
        var $82=(($81+4)&4294967295); //@line 336 "zlibmodule.c"
        var $83=HEAP[$82]; //@line 336 "zlibmodule.c"
        var $84=(($83+24)&4294967295); //@line 336 "zlibmodule.c"
        var $85=HEAP[$84]; //@line 336 "zlibmodule.c"
        var $86=HEAP[$self]; //@line 336 "zlibmodule.c"
        var $87=$86; //@line 336 "zlibmodule.c"
        FUNCTION_TABLE[$85]($87); //@line 336 "zlibmodule.c"
        __label__ = 14; break; //@line 336 "zlibmodule.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 337 "zlibmodule.c"
        __label__ = 15; break; //@line 337 "zlibmodule.c"
      case 15: // $bb14
        var $88=HEAP[$0]; //@line 311 "zlibmodule.c"
        HEAP[$retval]=$88; //@line 311 "zlibmodule.c"
        __label__ = 16; break; //@line 311 "zlibmodule.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 311 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 311 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_decompressobj($selfptr, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $selfptr_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $wbits=__stackBase__+16;
        var $err=__stackBase__+20;
        var $self=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$selfptr_addr]=$selfptr;
        HEAP[$args_addr]=$args;
        HEAP[$wbits]=15; //@line 344 "zlibmodule.c"
        var $1=HEAP[$args_addr]; //@line 346 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str22)&4294967295), $wbits); //@line 346 "zlibmodule.c"
        var $3=((($2))|0)==0; //@line 346 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 346 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 347 "zlibmodule.c"
        __label__ = 15; break; //@line 347 "zlibmodule.c"
      case 2: // $bb1
        var $4=_newcompobject(_Decomptype); //@line 349 "zlibmodule.c"
        HEAP[$self]=$4; //@line 349 "zlibmodule.c"
        var $5=HEAP[$self]; //@line 350 "zlibmodule.c"
        var $6=($5)==0; //@line 350 "zlibmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 350 "zlibmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 351 "zlibmodule.c"
        __label__ = 15; break; //@line 351 "zlibmodule.c"
      case 4: // $bb3
        var $7=HEAP[$self]; //@line 352 "zlibmodule.c"
        var $8=(($7+8)&4294967295); //@line 352 "zlibmodule.c"
        var $9=(($8+32)&4294967295); //@line 352 "zlibmodule.c"
        HEAP[$9]=0; //@line 352 "zlibmodule.c"
        var $10=HEAP[$self]; //@line 353 "zlibmodule.c"
        var $11=(($10+8)&4294967295); //@line 353 "zlibmodule.c"
        var $12=(($11+36)&4294967295); //@line 353 "zlibmodule.c"
        HEAP[$12]=0; //@line 353 "zlibmodule.c"
        var $13=HEAP[$self]; //@line 354 "zlibmodule.c"
        var $14=(($13+8)&4294967295); //@line 354 "zlibmodule.c"
        var $15=(($14)&4294967295); //@line 354 "zlibmodule.c"
        HEAP[$15]=0; //@line 354 "zlibmodule.c"
        var $16=HEAP[$self]; //@line 355 "zlibmodule.c"
        var $17=(($16+8)&4294967295); //@line 355 "zlibmodule.c"
        var $18=(($17+4)&4294967295); //@line 355 "zlibmodule.c"
        HEAP[$18]=0; //@line 355 "zlibmodule.c"
        var $19=HEAP[$wbits]; //@line 356 "zlibmodule.c"
        var $20=HEAP[$self]; //@line 356 "zlibmodule.c"
        var $21=(($20+8)&4294967295); //@line 356 "zlibmodule.c"
        var $22=_inflateInit2_($21, $19, ((__str8)&4294967295), 56); //@line 356 "zlibmodule.c"
        HEAP[$err]=$22; //@line 356 "zlibmodule.c"
        var $23=HEAP[$err]; //@line 357 "zlibmodule.c"
        if ($23 == -4) {
          __label__ = 9; break;
        }
        else if ($23 == -2) {
          __label__ = 6; break;
        }
        else if ($23 == 0) {
          __label__ = 5; break;
        }
        else {
        __label__ = 12; break;
        }
        
      case 5: // $bb4
        var $24=HEAP[$self]; //@line 359 "zlibmodule.c"
        var $25=(($24+72)&4294967295); //@line 359 "zlibmodule.c"
        HEAP[$25]=1; //@line 359 "zlibmodule.c"
        var $26=HEAP[$self]; //@line 360 "zlibmodule.c"
        var $27=$26; //@line 360 "zlibmodule.c"
        HEAP[$0]=$27; //@line 360 "zlibmodule.c"
        __label__ = 15; break; //@line 360 "zlibmodule.c"
      case 6: // $bb5
        var $28=HEAP[$self]; //@line 362 "zlibmodule.c"
        var $29=$28; //@line 362 "zlibmodule.c"
        var $30=(($29)&4294967295); //@line 362 "zlibmodule.c"
        var $31=HEAP[$30]; //@line 362 "zlibmodule.c"
        var $32=((($31) - 1)&4294967295); //@line 362 "zlibmodule.c"
        var $33=(($29)&4294967295); //@line 362 "zlibmodule.c"
        HEAP[$33]=$32; //@line 362 "zlibmodule.c"
        var $34=(($29)&4294967295); //@line 362 "zlibmodule.c"
        var $35=HEAP[$34]; //@line 362 "zlibmodule.c"
        var $36=((($35))|0)==0; //@line 362 "zlibmodule.c"
        if ($36) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 362 "zlibmodule.c"
      case 7: // $bb6
        var $37=HEAP[$self]; //@line 362 "zlibmodule.c"
        var $38=$37; //@line 362 "zlibmodule.c"
        var $39=(($38+4)&4294967295); //@line 362 "zlibmodule.c"
        var $40=HEAP[$39]; //@line 362 "zlibmodule.c"
        var $41=(($40+24)&4294967295); //@line 362 "zlibmodule.c"
        var $42=HEAP[$41]; //@line 362 "zlibmodule.c"
        var $43=HEAP[$self]; //@line 362 "zlibmodule.c"
        var $44=$43; //@line 362 "zlibmodule.c"
        FUNCTION_TABLE[$42]($44); //@line 362 "zlibmodule.c"
        __label__ = 8; break; //@line 362 "zlibmodule.c"
      case 8: // $bb7
        var $45=HEAP[_PyExc_ValueError]; //@line 363 "zlibmodule.c"
        _PyErr_SetString($45, ((__str20)&4294967295)); //@line 363 "zlibmodule.c"
        HEAP[$0]=0; //@line 364 "zlibmodule.c"
        __label__ = 15; break; //@line 364 "zlibmodule.c"
      case 9: // $bb8
        var $46=HEAP[$self]; //@line 366 "zlibmodule.c"
        var $47=$46; //@line 366 "zlibmodule.c"
        var $48=(($47)&4294967295); //@line 366 "zlibmodule.c"
        var $49=HEAP[$48]; //@line 366 "zlibmodule.c"
        var $50=((($49) - 1)&4294967295); //@line 366 "zlibmodule.c"
        var $51=(($47)&4294967295); //@line 366 "zlibmodule.c"
        HEAP[$51]=$50; //@line 366 "zlibmodule.c"
        var $52=(($47)&4294967295); //@line 366 "zlibmodule.c"
        var $53=HEAP[$52]; //@line 366 "zlibmodule.c"
        var $54=((($53))|0)==0; //@line 366 "zlibmodule.c"
        if ($54) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 366 "zlibmodule.c"
      case 10: // $bb9
        var $55=HEAP[$self]; //@line 366 "zlibmodule.c"
        var $56=$55; //@line 366 "zlibmodule.c"
        var $57=(($56+4)&4294967295); //@line 366 "zlibmodule.c"
        var $58=HEAP[$57]; //@line 366 "zlibmodule.c"
        var $59=(($58+24)&4294967295); //@line 366 "zlibmodule.c"
        var $60=HEAP[$59]; //@line 366 "zlibmodule.c"
        var $61=HEAP[$self]; //@line 366 "zlibmodule.c"
        var $62=$61; //@line 366 "zlibmodule.c"
        FUNCTION_TABLE[$60]($62); //@line 366 "zlibmodule.c"
        __label__ = 11; break; //@line 366 "zlibmodule.c"
      case 11: // $bb10
        var $63=HEAP[_PyExc_MemoryError]; //@line 367 "zlibmodule.c"
        _PyErr_SetString($63, ((__str23)&4294967295)); //@line 367 "zlibmodule.c"
        HEAP[$0]=0; //@line 369 "zlibmodule.c"
        __label__ = 15; break; //@line 369 "zlibmodule.c"
      case 12: // $bb11
        var $64=HEAP[$self]; //@line 371 "zlibmodule.c"
        var $65=(($64+8)&4294967295); //@line 371 "zlibmodule.c"
        var $66=HEAP[$err]; //@line 371 "zlibmodule.c"
        _zlib_error($65, $66, ((__str24)&4294967295)); //@line 371 "zlibmodule.c"
        var $67=HEAP[$self]; //@line 372 "zlibmodule.c"
        var $68=$67; //@line 372 "zlibmodule.c"
        var $69=(($68)&4294967295); //@line 372 "zlibmodule.c"
        var $70=HEAP[$69]; //@line 372 "zlibmodule.c"
        var $71=((($70) - 1)&4294967295); //@line 372 "zlibmodule.c"
        var $72=(($68)&4294967295); //@line 372 "zlibmodule.c"
        HEAP[$72]=$71; //@line 372 "zlibmodule.c"
        var $73=(($68)&4294967295); //@line 372 "zlibmodule.c"
        var $74=HEAP[$73]; //@line 372 "zlibmodule.c"
        var $75=((($74))|0)==0; //@line 372 "zlibmodule.c"
        if ($75) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 372 "zlibmodule.c"
      case 13: // $bb12
        var $76=HEAP[$self]; //@line 372 "zlibmodule.c"
        var $77=$76; //@line 372 "zlibmodule.c"
        var $78=(($77+4)&4294967295); //@line 372 "zlibmodule.c"
        var $79=HEAP[$78]; //@line 372 "zlibmodule.c"
        var $80=(($79+24)&4294967295); //@line 372 "zlibmodule.c"
        var $81=HEAP[$80]; //@line 372 "zlibmodule.c"
        var $82=HEAP[$self]; //@line 372 "zlibmodule.c"
        var $83=$82; //@line 372 "zlibmodule.c"
        FUNCTION_TABLE[$81]($83); //@line 372 "zlibmodule.c"
        __label__ = 14; break; //@line 372 "zlibmodule.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 373 "zlibmodule.c"
        __label__ = 15; break; //@line 373 "zlibmodule.c"
      case 15: // $bb14
        var $84=HEAP[$0]; //@line 347 "zlibmodule.c"
        HEAP[$retval]=$84; //@line 347 "zlibmodule.c"
        __label__ = 16; break; //@line 347 "zlibmodule.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 347 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 347 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Comp_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 380 "zlibmodule.c"
        var $1=(($0+72)&4294967295); //@line 380 "zlibmodule.c"
        var $2=HEAP[$1]; //@line 380 "zlibmodule.c"
        var $3=((($2))|0)!=0; //@line 380 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 380 "zlibmodule.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 381 "zlibmodule.c"
        var $5=(($4+8)&4294967295); //@line 381 "zlibmodule.c"
        var $6=_deflateEnd($5); //@line 381 "zlibmodule.c"
        __label__ = 2; break; //@line 381 "zlibmodule.c"
      case 2: // $bb1
        var $7=HEAP[$self_addr]; //@line 382 "zlibmodule.c"
        var $8=(($7+64)&4294967295); //@line 382 "zlibmodule.c"
        var $9=HEAP[$8]; //@line 382 "zlibmodule.c"
        var $10=($9)!=0; //@line 382 "zlibmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 382 "zlibmodule.c"
      case 3: // $bb2
        var $11=HEAP[$self_addr]; //@line 382 "zlibmodule.c"
        var $12=(($11+64)&4294967295); //@line 382 "zlibmodule.c"
        var $13=HEAP[$12]; //@line 382 "zlibmodule.c"
        var $14=(($13)&4294967295); //@line 382 "zlibmodule.c"
        var $15=HEAP[$14]; //@line 382 "zlibmodule.c"
        var $16=((($15) - 1)&4294967295); //@line 382 "zlibmodule.c"
        var $17=(($13)&4294967295); //@line 382 "zlibmodule.c"
        HEAP[$17]=$16; //@line 382 "zlibmodule.c"
        var $18=(($13)&4294967295); //@line 382 "zlibmodule.c"
        var $19=HEAP[$18]; //@line 382 "zlibmodule.c"
        var $20=((($19))|0)==0; //@line 382 "zlibmodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 382 "zlibmodule.c"
      case 4: // $bb3
        var $21=HEAP[$self_addr]; //@line 382 "zlibmodule.c"
        var $22=(($21+64)&4294967295); //@line 382 "zlibmodule.c"
        var $23=HEAP[$22]; //@line 382 "zlibmodule.c"
        var $24=(($23+4)&4294967295); //@line 382 "zlibmodule.c"
        var $25=HEAP[$24]; //@line 382 "zlibmodule.c"
        var $26=(($25+24)&4294967295); //@line 382 "zlibmodule.c"
        var $27=HEAP[$26]; //@line 382 "zlibmodule.c"
        var $28=HEAP[$self_addr]; //@line 382 "zlibmodule.c"
        var $29=(($28+64)&4294967295); //@line 382 "zlibmodule.c"
        var $30=HEAP[$29]; //@line 382 "zlibmodule.c"
        FUNCTION_TABLE[$27]($30); //@line 382 "zlibmodule.c"
        __label__ = 5; break; //@line 382 "zlibmodule.c"
      case 5: // $bb4
        var $31=HEAP[$self_addr]; //@line 383 "zlibmodule.c"
        var $32=(($31+68)&4294967295); //@line 383 "zlibmodule.c"
        var $33=HEAP[$32]; //@line 383 "zlibmodule.c"
        var $34=($33)!=0; //@line 383 "zlibmodule.c"
        if ($34) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 383 "zlibmodule.c"
      case 6: // $bb5
        var $35=HEAP[$self_addr]; //@line 383 "zlibmodule.c"
        var $36=(($35+68)&4294967295); //@line 383 "zlibmodule.c"
        var $37=HEAP[$36]; //@line 383 "zlibmodule.c"
        var $38=(($37)&4294967295); //@line 383 "zlibmodule.c"
        var $39=HEAP[$38]; //@line 383 "zlibmodule.c"
        var $40=((($39) - 1)&4294967295); //@line 383 "zlibmodule.c"
        var $41=(($37)&4294967295); //@line 383 "zlibmodule.c"
        HEAP[$41]=$40; //@line 383 "zlibmodule.c"
        var $42=(($37)&4294967295); //@line 383 "zlibmodule.c"
        var $43=HEAP[$42]; //@line 383 "zlibmodule.c"
        var $44=((($43))|0)==0; //@line 383 "zlibmodule.c"
        if ($44) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 383 "zlibmodule.c"
      case 7: // $bb6
        var $45=HEAP[$self_addr]; //@line 383 "zlibmodule.c"
        var $46=(($45+68)&4294967295); //@line 383 "zlibmodule.c"
        var $47=HEAP[$46]; //@line 383 "zlibmodule.c"
        var $48=(($47+4)&4294967295); //@line 383 "zlibmodule.c"
        var $49=HEAP[$48]; //@line 383 "zlibmodule.c"
        var $50=(($49+24)&4294967295); //@line 383 "zlibmodule.c"
        var $51=HEAP[$50]; //@line 383 "zlibmodule.c"
        var $52=HEAP[$self_addr]; //@line 383 "zlibmodule.c"
        var $53=(($52+68)&4294967295); //@line 383 "zlibmodule.c"
        var $54=HEAP[$53]; //@line 383 "zlibmodule.c"
        FUNCTION_TABLE[$51]($54); //@line 383 "zlibmodule.c"
        __label__ = 8; break; //@line 383 "zlibmodule.c"
      case 8: // $bb7
        var $55=HEAP[$self_addr]; //@line 384 "zlibmodule.c"
        var $56=$55; //@line 384 "zlibmodule.c"
        _PyObject_Free($56); //@line 384 "zlibmodule.c"
        __label__ = 9; break; //@line 385 "zlibmodule.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 385 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Decomp_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 390 "zlibmodule.c"
        var $1=(($0+72)&4294967295); //@line 390 "zlibmodule.c"
        var $2=HEAP[$1]; //@line 390 "zlibmodule.c"
        var $3=((($2))|0)!=0; //@line 390 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 390 "zlibmodule.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 391 "zlibmodule.c"
        var $5=(($4+8)&4294967295); //@line 391 "zlibmodule.c"
        var $6=_inflateEnd($5); //@line 391 "zlibmodule.c"
        __label__ = 2; break; //@line 391 "zlibmodule.c"
      case 2: // $bb1
        var $7=HEAP[$self_addr]; //@line 392 "zlibmodule.c"
        var $8=(($7+64)&4294967295); //@line 392 "zlibmodule.c"
        var $9=HEAP[$8]; //@line 392 "zlibmodule.c"
        var $10=($9)!=0; //@line 392 "zlibmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 392 "zlibmodule.c"
      case 3: // $bb2
        var $11=HEAP[$self_addr]; //@line 392 "zlibmodule.c"
        var $12=(($11+64)&4294967295); //@line 392 "zlibmodule.c"
        var $13=HEAP[$12]; //@line 392 "zlibmodule.c"
        var $14=(($13)&4294967295); //@line 392 "zlibmodule.c"
        var $15=HEAP[$14]; //@line 392 "zlibmodule.c"
        var $16=((($15) - 1)&4294967295); //@line 392 "zlibmodule.c"
        var $17=(($13)&4294967295); //@line 392 "zlibmodule.c"
        HEAP[$17]=$16; //@line 392 "zlibmodule.c"
        var $18=(($13)&4294967295); //@line 392 "zlibmodule.c"
        var $19=HEAP[$18]; //@line 392 "zlibmodule.c"
        var $20=((($19))|0)==0; //@line 392 "zlibmodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 392 "zlibmodule.c"
      case 4: // $bb3
        var $21=HEAP[$self_addr]; //@line 392 "zlibmodule.c"
        var $22=(($21+64)&4294967295); //@line 392 "zlibmodule.c"
        var $23=HEAP[$22]; //@line 392 "zlibmodule.c"
        var $24=(($23+4)&4294967295); //@line 392 "zlibmodule.c"
        var $25=HEAP[$24]; //@line 392 "zlibmodule.c"
        var $26=(($25+24)&4294967295); //@line 392 "zlibmodule.c"
        var $27=HEAP[$26]; //@line 392 "zlibmodule.c"
        var $28=HEAP[$self_addr]; //@line 392 "zlibmodule.c"
        var $29=(($28+64)&4294967295); //@line 392 "zlibmodule.c"
        var $30=HEAP[$29]; //@line 392 "zlibmodule.c"
        FUNCTION_TABLE[$27]($30); //@line 392 "zlibmodule.c"
        __label__ = 5; break; //@line 392 "zlibmodule.c"
      case 5: // $bb4
        var $31=HEAP[$self_addr]; //@line 393 "zlibmodule.c"
        var $32=(($31+68)&4294967295); //@line 393 "zlibmodule.c"
        var $33=HEAP[$32]; //@line 393 "zlibmodule.c"
        var $34=($33)!=0; //@line 393 "zlibmodule.c"
        if ($34) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 393 "zlibmodule.c"
      case 6: // $bb5
        var $35=HEAP[$self_addr]; //@line 393 "zlibmodule.c"
        var $36=(($35+68)&4294967295); //@line 393 "zlibmodule.c"
        var $37=HEAP[$36]; //@line 393 "zlibmodule.c"
        var $38=(($37)&4294967295); //@line 393 "zlibmodule.c"
        var $39=HEAP[$38]; //@line 393 "zlibmodule.c"
        var $40=((($39) - 1)&4294967295); //@line 393 "zlibmodule.c"
        var $41=(($37)&4294967295); //@line 393 "zlibmodule.c"
        HEAP[$41]=$40; //@line 393 "zlibmodule.c"
        var $42=(($37)&4294967295); //@line 393 "zlibmodule.c"
        var $43=HEAP[$42]; //@line 393 "zlibmodule.c"
        var $44=((($43))|0)==0; //@line 393 "zlibmodule.c"
        if ($44) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 393 "zlibmodule.c"
      case 7: // $bb6
        var $45=HEAP[$self_addr]; //@line 393 "zlibmodule.c"
        var $46=(($45+68)&4294967295); //@line 393 "zlibmodule.c"
        var $47=HEAP[$46]; //@line 393 "zlibmodule.c"
        var $48=(($47+4)&4294967295); //@line 393 "zlibmodule.c"
        var $49=HEAP[$48]; //@line 393 "zlibmodule.c"
        var $50=(($49+24)&4294967295); //@line 393 "zlibmodule.c"
        var $51=HEAP[$50]; //@line 393 "zlibmodule.c"
        var $52=HEAP[$self_addr]; //@line 393 "zlibmodule.c"
        var $53=(($52+68)&4294967295); //@line 393 "zlibmodule.c"
        var $54=HEAP[$53]; //@line 393 "zlibmodule.c"
        FUNCTION_TABLE[$51]($54); //@line 393 "zlibmodule.c"
        __label__ = 8; break; //@line 393 "zlibmodule.c"
      case 8: // $bb7
        var $55=HEAP[$self_addr]; //@line 394 "zlibmodule.c"
        var $56=$55; //@line 394 "zlibmodule.c"
        _PyObject_Free($56); //@line 394 "zlibmodule.c"
        __label__ = 9; break; //@line 395 "zlibmodule.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 395 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_objcompress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $err=__stackBase__+16;
        var $inplen=__stackBase__+20;
        var $length=__stackBase__+24;
        var $RetVal=__stackBase__+28;
        var $input=__stackBase__+32;
        var $start_total_out=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$length]=16384; //@line 409 "zlibmodule.c"
        var $1=HEAP[$args_addr]; //@line 414 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str25)&4294967295), $input, $inplen); //@line 414 "zlibmodule.c"
        var $3=((($2))|0)==0; //@line 414 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 414 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 415 "zlibmodule.c"
        __label__ = 16; break; //@line 415 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$length]; //@line 417 "zlibmodule.c"
        var $5=_PyString_FromStringAndSize(0, $4); //@line 417 "zlibmodule.c"
        HEAP[$RetVal]=$5; //@line 417 "zlibmodule.c"
        var $6=HEAP[$RetVal]; //@line 417 "zlibmodule.c"
        var $7=($6)==0; //@line 417 "zlibmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 417 "zlibmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 418 "zlibmodule.c"
        __label__ = 16; break; //@line 418 "zlibmodule.c"
      case 4: // $bb3
        var $8=HEAP[$self_addr]; //@line 422 "zlibmodule.c"
        var $9=(($8+8)&4294967295); //@line 422 "zlibmodule.c"
        var $10=(($9+20)&4294967295); //@line 422 "zlibmodule.c"
        var $11=HEAP[$10]; //@line 422 "zlibmodule.c"
        HEAP[$start_total_out]=$11; //@line 422 "zlibmodule.c"
        var $12=HEAP[$inplen]; //@line 423 "zlibmodule.c"
        var $13=HEAP[$self_addr]; //@line 423 "zlibmodule.c"
        var $14=(($13+8)&4294967295); //@line 423 "zlibmodule.c"
        var $15=(($14+4)&4294967295); //@line 423 "zlibmodule.c"
        HEAP[$15]=$12; //@line 423 "zlibmodule.c"
        var $16=HEAP[$input]; //@line 424 "zlibmodule.c"
        var $17=HEAP[$self_addr]; //@line 424 "zlibmodule.c"
        var $18=(($17+8)&4294967295); //@line 424 "zlibmodule.c"
        var $19=(($18)&4294967295); //@line 424 "zlibmodule.c"
        HEAP[$19]=$16; //@line 424 "zlibmodule.c"
        var $20=HEAP[$length]; //@line 425 "zlibmodule.c"
        var $21=HEAP[$self_addr]; //@line 425 "zlibmodule.c"
        var $22=(($21+8)&4294967295); //@line 425 "zlibmodule.c"
        var $23=(($22+16)&4294967295); //@line 425 "zlibmodule.c"
        HEAP[$23]=$20; //@line 425 "zlibmodule.c"
        var $24=HEAP[$RetVal]; //@line 426 "zlibmodule.c"
        var $25=$24; //@line 426 "zlibmodule.c"
        var $26=(($25+20)&4294967295); //@line 426 "zlibmodule.c"
        var $27=$26; //@line 426 "zlibmodule.c"
        var $28=HEAP[$self_addr]; //@line 426 "zlibmodule.c"
        var $29=(($28+8)&4294967295); //@line 426 "zlibmodule.c"
        var $30=(($29+12)&4294967295); //@line 426 "zlibmodule.c"
        HEAP[$30]=$27; //@line 426 "zlibmodule.c"
        var $31=HEAP[$self_addr]; //@line 429 "zlibmodule.c"
        var $32=(($31+8)&4294967295); //@line 429 "zlibmodule.c"
        var $33=_deflate($32, 0); //@line 429 "zlibmodule.c"
        HEAP[$err]=$33; //@line 429 "zlibmodule.c"
        __label__ = 7; break; //@line 429 "zlibmodule.c"
      case 5: // $bb4
        var $34=HEAP[$length]; //@line 435 "zlibmodule.c"
        var $35=($34) << 1; //@line 435 "zlibmodule.c"
        var $36=__PyString_Resize($RetVal, $35); //@line 435 "zlibmodule.c"
        var $37=((($36))|0) < 0; //@line 435 "zlibmodule.c"
        if ($37) { __label__ = 15; break; } else { __label__ = 6; break; } //@line 435 "zlibmodule.c"
      case 6: // $bb5
        var $38=HEAP[$RetVal]; //@line 437 "zlibmodule.c"
        var $39=$38; //@line 437 "zlibmodule.c"
        var $40=(($39+20)&4294967295); //@line 437 "zlibmodule.c"
        var $41=$40; //@line 437 "zlibmodule.c"
        var $42=HEAP[$length]; //@line 437 "zlibmodule.c"
        var $43=(($41+$42)&4294967295); //@line 437 "zlibmodule.c"
        var $44=HEAP[$self_addr]; //@line 437 "zlibmodule.c"
        var $45=(($44+8)&4294967295); //@line 437 "zlibmodule.c"
        var $46=(($45+12)&4294967295); //@line 437 "zlibmodule.c"
        HEAP[$46]=$43; //@line 437 "zlibmodule.c"
        var $47=HEAP[$length]; //@line 439 "zlibmodule.c"
        var $48=HEAP[$self_addr]; //@line 439 "zlibmodule.c"
        var $49=(($48+8)&4294967295); //@line 439 "zlibmodule.c"
        var $50=(($49+16)&4294967295); //@line 439 "zlibmodule.c"
        HEAP[$50]=$47; //@line 439 "zlibmodule.c"
        var $51=HEAP[$length]; //@line 440 "zlibmodule.c"
        var $52=($51) << 1; //@line 440 "zlibmodule.c"
        HEAP[$length]=$52; //@line 440 "zlibmodule.c"
        var $53=HEAP[$self_addr]; //@line 443 "zlibmodule.c"
        var $54=(($53+8)&4294967295); //@line 443 "zlibmodule.c"
        var $55=_deflate($54, 0); //@line 443 "zlibmodule.c"
        HEAP[$err]=$55; //@line 443 "zlibmodule.c"
        __label__ = 7; break; //@line 443 "zlibmodule.c"
      case 7: // $bb6
        var $56=HEAP[$err]; //@line 434 "zlibmodule.c"
        var $57=((($56))|0)!=0; //@line 434 "zlibmodule.c"
        if ($57) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 434 "zlibmodule.c"
      case 8: // $bb7
        var $58=HEAP[$self_addr]; //@line 434 "zlibmodule.c"
        var $59=(($58+8)&4294967295); //@line 434 "zlibmodule.c"
        var $60=(($59+16)&4294967295); //@line 434 "zlibmodule.c"
        var $61=HEAP[$60]; //@line 434 "zlibmodule.c"
        var $62=((($61))|0)==0; //@line 434 "zlibmodule.c"
        if ($62) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 434 "zlibmodule.c"
      case 9: // $bb8
        var $63=HEAP[$err]; //@line 451 "zlibmodule.c"
        var $64=((($63))|0)!=0; //@line 451 "zlibmodule.c"
        if ($64) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 451 "zlibmodule.c"
      case 10: // $bb9
        var $65=HEAP[$err]; //@line 451 "zlibmodule.c"
        var $66=((($65))|0)!=-5; //@line 451 "zlibmodule.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 451 "zlibmodule.c"
      case 11: // $bb10
        var $67=HEAP[$self_addr]; //@line 452 "zlibmodule.c"
        var $68=(($67+8)&4294967295); //@line 452 "zlibmodule.c"
        var $69=HEAP[$err]; //@line 452 "zlibmodule.c"
        _zlib_error($68, $69, ((__str26)&4294967295)); //@line 452 "zlibmodule.c"
        var $70=HEAP[$RetVal]; //@line 453 "zlibmodule.c"
        var $71=(($70)&4294967295); //@line 453 "zlibmodule.c"
        var $72=HEAP[$71]; //@line 453 "zlibmodule.c"
        var $73=((($72) - 1)&4294967295); //@line 453 "zlibmodule.c"
        var $74=(($70)&4294967295); //@line 453 "zlibmodule.c"
        HEAP[$74]=$73; //@line 453 "zlibmodule.c"
        var $75=(($70)&4294967295); //@line 453 "zlibmodule.c"
        var $76=HEAP[$75]; //@line 453 "zlibmodule.c"
        var $77=((($76))|0)==0; //@line 453 "zlibmodule.c"
        if ($77) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 453 "zlibmodule.c"
      case 12: // $bb11
        var $78=HEAP[$RetVal]; //@line 453 "zlibmodule.c"
        var $79=(($78+4)&4294967295); //@line 453 "zlibmodule.c"
        var $80=HEAP[$79]; //@line 453 "zlibmodule.c"
        var $81=(($80+24)&4294967295); //@line 453 "zlibmodule.c"
        var $82=HEAP[$81]; //@line 453 "zlibmodule.c"
        var $83=HEAP[$RetVal]; //@line 453 "zlibmodule.c"
        FUNCTION_TABLE[$82]($83); //@line 453 "zlibmodule.c"
        __label__ = 13; break; //@line 453 "zlibmodule.c"
      case 13: // $bb12
        HEAP[$RetVal]=0; //@line 454 "zlibmodule.c"
        __label__ = 15; break; //@line 454 "zlibmodule.c"
      case 14: // $bb13
        var $84=HEAP[$self_addr]; //@line 457 "zlibmodule.c"
        var $85=(($84+8)&4294967295); //@line 457 "zlibmodule.c"
        var $86=(($85+20)&4294967295); //@line 457 "zlibmodule.c"
        var $87=HEAP[$86]; //@line 457 "zlibmodule.c"
        var $88=HEAP[$start_total_out]; //@line 457 "zlibmodule.c"
        var $89=((($87) - ($88))&4294967295); //@line 457 "zlibmodule.c"
        var $90=__PyString_Resize($RetVal, $89); //@line 457 "zlibmodule.c"
        __label__ = 15; break; //@line 459 "zlibmodule.c"
      case 15: // $error
        var $91=HEAP[$RetVal]; //@line 461 "zlibmodule.c"
        HEAP[$0]=$91; //@line 461 "zlibmodule.c"
        __label__ = 16; break; //@line 461 "zlibmodule.c"
      case 16: // $bb14
        var $92=HEAP[$0]; //@line 415 "zlibmodule.c"
        HEAP[$retval]=$92; //@line 415 "zlibmodule.c"
        __label__ = 17; break; //@line 415 "zlibmodule.c"
      case 17: // $return
        var $retval15=HEAP[$retval]; //@line 415 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 415 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_objdecompress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $err=__stackBase__+16;
        var $inplen=__stackBase__+20;
        var $max_length=__stackBase__+24;
        var $old_length=__stackBase__+28;
        var $length=__stackBase__+32;
        var $RetVal=__stackBase__+36;
        var $input=__stackBase__+40;
        var $start_total_out=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$max_length]=0; //@line 478 "zlibmodule.c"
        HEAP[$length]=16384; //@line 479 "zlibmodule.c"
        var $1=HEAP[$args_addr]; //@line 484 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str27)&4294967295), $input, $inplen, $max_length); //@line 484 "zlibmodule.c"
        var $3=((($2))|0)==0; //@line 484 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 484 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 486 "zlibmodule.c"
        __label__ = 47; break; //@line 486 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$max_length]; //@line 487 "zlibmodule.c"
        var $5=((($4))|0) < 0; //@line 487 "zlibmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 487 "zlibmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_ValueError]; //@line 488 "zlibmodule.c"
        _PyErr_SetString($6, ((__str28)&4294967295)); //@line 488 "zlibmodule.c"
        HEAP[$0]=0; //@line 490 "zlibmodule.c"
        __label__ = 47; break; //@line 490 "zlibmodule.c"
      case 4: // $bb3
        var $7=HEAP[$max_length]; //@line 494 "zlibmodule.c"
        var $8=((($7))|0)!=0; //@line 494 "zlibmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 494 "zlibmodule.c"
      case 5: // $bb4
        var $9=HEAP[$max_length]; //@line 494 "zlibmodule.c"
        var $10=HEAP[$length]; //@line 494 "zlibmodule.c"
        var $11=((($10))|0) > ((($9))|0); //@line 494 "zlibmodule.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 494 "zlibmodule.c"
      case 6: // $bb5
        var $12=HEAP[$max_length]; //@line 495 "zlibmodule.c"
        HEAP[$length]=$12; //@line 495 "zlibmodule.c"
        __label__ = 7; break; //@line 495 "zlibmodule.c"
      case 7: // $bb6
        var $13=HEAP[$length]; //@line 496 "zlibmodule.c"
        var $14=_PyString_FromStringAndSize(0, $13); //@line 496 "zlibmodule.c"
        HEAP[$RetVal]=$14; //@line 496 "zlibmodule.c"
        var $15=HEAP[$RetVal]; //@line 496 "zlibmodule.c"
        var $16=($15)==0; //@line 496 "zlibmodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 496 "zlibmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 497 "zlibmodule.c"
        __label__ = 47; break; //@line 497 "zlibmodule.c"
      case 9: // $bb8
        var $17=HEAP[$self_addr]; //@line 501 "zlibmodule.c"
        var $18=(($17+8)&4294967295); //@line 501 "zlibmodule.c"
        var $19=(($18+20)&4294967295); //@line 501 "zlibmodule.c"
        var $20=HEAP[$19]; //@line 501 "zlibmodule.c"
        HEAP[$start_total_out]=$20; //@line 501 "zlibmodule.c"
        var $21=HEAP[$inplen]; //@line 502 "zlibmodule.c"
        var $22=HEAP[$self_addr]; //@line 502 "zlibmodule.c"
        var $23=(($22+8)&4294967295); //@line 502 "zlibmodule.c"
        var $24=(($23+4)&4294967295); //@line 502 "zlibmodule.c"
        HEAP[$24]=$21; //@line 502 "zlibmodule.c"
        var $25=HEAP[$input]; //@line 503 "zlibmodule.c"
        var $26=HEAP[$self_addr]; //@line 503 "zlibmodule.c"
        var $27=(($26+8)&4294967295); //@line 503 "zlibmodule.c"
        var $28=(($27)&4294967295); //@line 503 "zlibmodule.c"
        HEAP[$28]=$25; //@line 503 "zlibmodule.c"
        var $29=HEAP[$length]; //@line 504 "zlibmodule.c"
        var $30=HEAP[$self_addr]; //@line 504 "zlibmodule.c"
        var $31=(($30+8)&4294967295); //@line 504 "zlibmodule.c"
        var $32=(($31+16)&4294967295); //@line 504 "zlibmodule.c"
        HEAP[$32]=$29; //@line 504 "zlibmodule.c"
        var $33=HEAP[$RetVal]; //@line 505 "zlibmodule.c"
        var $34=$33; //@line 505 "zlibmodule.c"
        var $35=(($34+20)&4294967295); //@line 505 "zlibmodule.c"
        var $36=$35; //@line 505 "zlibmodule.c"
        var $37=HEAP[$self_addr]; //@line 505 "zlibmodule.c"
        var $38=(($37+8)&4294967295); //@line 505 "zlibmodule.c"
        var $39=(($38+12)&4294967295); //@line 505 "zlibmodule.c"
        HEAP[$39]=$36; //@line 505 "zlibmodule.c"
        var $40=HEAP[$self_addr]; //@line 508 "zlibmodule.c"
        var $41=(($40+8)&4294967295); //@line 508 "zlibmodule.c"
        var $42=_inflate($41, 2); //@line 508 "zlibmodule.c"
        HEAP[$err]=$42; //@line 508 "zlibmodule.c"
        __label__ = 17; break; //@line 508 "zlibmodule.c"
      case 10: // $bb9
        var $43=HEAP[$max_length]; //@line 518 "zlibmodule.c"
        var $44=((($43))|0)!=0; //@line 518 "zlibmodule.c"
        if ($44) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 518 "zlibmodule.c"
      case 11: // $bb10
        var $45=HEAP[$max_length]; //@line 518 "zlibmodule.c"
        var $46=HEAP[$length]; //@line 518 "zlibmodule.c"
        var $47=((($46))|0) >= ((($45))|0); //@line 518 "zlibmodule.c"
        if ($47) { __label__ = 19; break; } else { __label__ = 12; break; } //@line 518 "zlibmodule.c"
      case 12: // $bb11
        var $48=HEAP[$length]; //@line 522 "zlibmodule.c"
        HEAP[$old_length]=$48; //@line 522 "zlibmodule.c"
        var $49=HEAP[$length]; //@line 523 "zlibmodule.c"
        var $50=($49) << 1; //@line 523 "zlibmodule.c"
        HEAP[$length]=$50; //@line 523 "zlibmodule.c"
        var $51=HEAP[$max_length]; //@line 524 "zlibmodule.c"
        var $52=((($51))|0)!=0; //@line 524 "zlibmodule.c"
        if ($52) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 524 "zlibmodule.c"
      case 13: // $bb12
        var $53=HEAP[$max_length]; //@line 524 "zlibmodule.c"
        var $54=HEAP[$length]; //@line 524 "zlibmodule.c"
        var $55=((($54))|0) > ((($53))|0); //@line 524 "zlibmodule.c"
        if ($55) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 524 "zlibmodule.c"
      case 14: // $bb13
        var $56=HEAP[$max_length]; //@line 525 "zlibmodule.c"
        HEAP[$length]=$56; //@line 525 "zlibmodule.c"
        __label__ = 15; break; //@line 525 "zlibmodule.c"
      case 15: // $bb14
        var $57=HEAP[$length]; //@line 527 "zlibmodule.c"
        var $58=__PyString_Resize($RetVal, $57); //@line 527 "zlibmodule.c"
        var $59=((($58))|0) < 0; //@line 527 "zlibmodule.c"
        if ($59) { __label__ = 46; break; } else { __label__ = 16; break; } //@line 527 "zlibmodule.c"
      case 16: // $bb15
        var $60=HEAP[$RetVal]; //@line 529 "zlibmodule.c"
        var $61=$60; //@line 529 "zlibmodule.c"
        var $62=(($61+20)&4294967295); //@line 529 "zlibmodule.c"
        var $63=$62; //@line 529 "zlibmodule.c"
        var $64=HEAP[$old_length]; //@line 529 "zlibmodule.c"
        var $65=(($63+$64)&4294967295); //@line 529 "zlibmodule.c"
        var $66=HEAP[$self_addr]; //@line 529 "zlibmodule.c"
        var $67=(($66+8)&4294967295); //@line 529 "zlibmodule.c"
        var $68=(($67+12)&4294967295); //@line 529 "zlibmodule.c"
        HEAP[$68]=$65; //@line 529 "zlibmodule.c"
        var $69=HEAP[$length]; //@line 531 "zlibmodule.c"
        var $70=HEAP[$old_length]; //@line 531 "zlibmodule.c"
        var $71=((($69) - ($70))&4294967295); //@line 531 "zlibmodule.c"
        var $72=HEAP[$self_addr]; //@line 531 "zlibmodule.c"
        var $73=(($72+8)&4294967295); //@line 531 "zlibmodule.c"
        var $74=(($73+16)&4294967295); //@line 531 "zlibmodule.c"
        HEAP[$74]=$71; //@line 531 "zlibmodule.c"
        var $75=HEAP[$self_addr]; //@line 534 "zlibmodule.c"
        var $76=(($75+8)&4294967295); //@line 534 "zlibmodule.c"
        var $77=_inflate($76, 2); //@line 534 "zlibmodule.c"
        HEAP[$err]=$77; //@line 534 "zlibmodule.c"
        __label__ = 17; break; //@line 534 "zlibmodule.c"
      case 17: // $bb16
        var $78=HEAP[$err]; //@line 514 "zlibmodule.c"
        var $79=((($78))|0)!=0; //@line 514 "zlibmodule.c"
        if ($79) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 514 "zlibmodule.c"
      case 18: // $bb17
        var $80=HEAP[$self_addr]; //@line 514 "zlibmodule.c"
        var $81=(($80+8)&4294967295); //@line 514 "zlibmodule.c"
        var $82=(($81+16)&4294967295); //@line 514 "zlibmodule.c"
        var $83=HEAP[$82]; //@line 514 "zlibmodule.c"
        var $84=((($83))|0)==0; //@line 514 "zlibmodule.c"
        if ($84) { __label__ = 10; break; } else { __label__ = 19; break; } //@line 514 "zlibmodule.c"
      case 19: // $bb18
        var $85=HEAP[$max_length]; //@line 538 "zlibmodule.c"
        var $86=((($85))|0)!=0; //@line 538 "zlibmodule.c"
        if ($86) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 538 "zlibmodule.c"
      case 20: // $bb19
        var $87=HEAP[$self_addr]; //@line 541 "zlibmodule.c"
        var $88=(($87+68)&4294967295); //@line 541 "zlibmodule.c"
        var $89=HEAP[$88]; //@line 541 "zlibmodule.c"
        var $90=(($89)&4294967295); //@line 541 "zlibmodule.c"
        var $91=HEAP[$90]; //@line 541 "zlibmodule.c"
        var $92=((($91) - 1)&4294967295); //@line 541 "zlibmodule.c"
        var $93=(($89)&4294967295); //@line 541 "zlibmodule.c"
        HEAP[$93]=$92; //@line 541 "zlibmodule.c"
        var $94=(($89)&4294967295); //@line 541 "zlibmodule.c"
        var $95=HEAP[$94]; //@line 541 "zlibmodule.c"
        var $96=((($95))|0)==0; //@line 541 "zlibmodule.c"
        if ($96) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 541 "zlibmodule.c"
      case 21: // $bb20
        var $97=HEAP[$self_addr]; //@line 541 "zlibmodule.c"
        var $98=(($97+68)&4294967295); //@line 541 "zlibmodule.c"
        var $99=HEAP[$98]; //@line 541 "zlibmodule.c"
        var $100=(($99+4)&4294967295); //@line 541 "zlibmodule.c"
        var $101=HEAP[$100]; //@line 541 "zlibmodule.c"
        var $102=(($101+24)&4294967295); //@line 541 "zlibmodule.c"
        var $103=HEAP[$102]; //@line 541 "zlibmodule.c"
        var $104=HEAP[$self_addr]; //@line 541 "zlibmodule.c"
        var $105=(($104+68)&4294967295); //@line 541 "zlibmodule.c"
        var $106=HEAP[$105]; //@line 541 "zlibmodule.c"
        FUNCTION_TABLE[$103]($106); //@line 541 "zlibmodule.c"
        __label__ = 22; break; //@line 541 "zlibmodule.c"
      case 22: // $bb21
        var $107=HEAP[$self_addr]; //@line 542 "zlibmodule.c"
        var $108=(($107+8)&4294967295); //@line 542 "zlibmodule.c"
        var $109=(($108+4)&4294967295); //@line 542 "zlibmodule.c"
        var $110=HEAP[$109]; //@line 542 "zlibmodule.c"
        var $111=HEAP[$self_addr]; //@line 542 "zlibmodule.c"
        var $112=(($111+8)&4294967295); //@line 542 "zlibmodule.c"
        var $113=(($112)&4294967295); //@line 542 "zlibmodule.c"
        var $114=HEAP[$113]; //@line 542 "zlibmodule.c"
        var $115=_PyString_FromStringAndSize($114, $110); //@line 542 "zlibmodule.c"
        var $116=HEAP[$self_addr]; //@line 542 "zlibmodule.c"
        var $117=(($116+68)&4294967295); //@line 542 "zlibmodule.c"
        HEAP[$117]=$115; //@line 542 "zlibmodule.c"
        __label__ = 27; break; //@line 542 "zlibmodule.c"
      case 23: // $bb22
        var $118=HEAP[$self_addr]; //@line 545 "zlibmodule.c"
        var $119=(($118+68)&4294967295); //@line 545 "zlibmodule.c"
        var $120=HEAP[$119]; //@line 545 "zlibmodule.c"
        var $121=$120; //@line 545 "zlibmodule.c"
        var $122=(($121+8)&4294967295); //@line 545 "zlibmodule.c"
        var $123=HEAP[$122]; //@line 545 "zlibmodule.c"
        var $124=((($123))|0) > 0; //@line 545 "zlibmodule.c"
        if ($124) { __label__ = 24; break; } else { __label__ = 27; break; } //@line 545 "zlibmodule.c"
      case 24: // $bb23
        var $125=HEAP[$self_addr]; //@line 547 "zlibmodule.c"
        var $126=(($125+68)&4294967295); //@line 547 "zlibmodule.c"
        var $127=HEAP[$126]; //@line 547 "zlibmodule.c"
        var $128=(($127)&4294967295); //@line 547 "zlibmodule.c"
        var $129=HEAP[$128]; //@line 547 "zlibmodule.c"
        var $130=((($129) - 1)&4294967295); //@line 547 "zlibmodule.c"
        var $131=(($127)&4294967295); //@line 547 "zlibmodule.c"
        HEAP[$131]=$130; //@line 547 "zlibmodule.c"
        var $132=(($127)&4294967295); //@line 547 "zlibmodule.c"
        var $133=HEAP[$132]; //@line 547 "zlibmodule.c"
        var $134=((($133))|0)==0; //@line 547 "zlibmodule.c"
        if ($134) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 547 "zlibmodule.c"
      case 25: // $bb24
        var $135=HEAP[$self_addr]; //@line 547 "zlibmodule.c"
        var $136=(($135+68)&4294967295); //@line 547 "zlibmodule.c"
        var $137=HEAP[$136]; //@line 547 "zlibmodule.c"
        var $138=(($137+4)&4294967295); //@line 547 "zlibmodule.c"
        var $139=HEAP[$138]; //@line 547 "zlibmodule.c"
        var $140=(($139+24)&4294967295); //@line 547 "zlibmodule.c"
        var $141=HEAP[$140]; //@line 547 "zlibmodule.c"
        var $142=HEAP[$self_addr]; //@line 547 "zlibmodule.c"
        var $143=(($142+68)&4294967295); //@line 547 "zlibmodule.c"
        var $144=HEAP[$143]; //@line 547 "zlibmodule.c"
        FUNCTION_TABLE[$141]($144); //@line 547 "zlibmodule.c"
        __label__ = 26; break; //@line 547 "zlibmodule.c"
      case 26: // $bb25
        var $145=_PyString_FromStringAndSize(((__str5)&4294967295), 0); //@line 548 "zlibmodule.c"
        var $146=HEAP[$self_addr]; //@line 548 "zlibmodule.c"
        var $147=(($146+68)&4294967295); //@line 548 "zlibmodule.c"
        HEAP[$147]=$145; //@line 548 "zlibmodule.c"
        __label__ = 27; break; //@line 548 "zlibmodule.c"
      case 27: // $bb26
        var $148=HEAP[$self_addr]; //@line 550 "zlibmodule.c"
        var $149=(($148+68)&4294967295); //@line 550 "zlibmodule.c"
        var $150=HEAP[$149]; //@line 550 "zlibmodule.c"
        var $151=($150)==0; //@line 550 "zlibmodule.c"
        if ($151) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 550 "zlibmodule.c"
      case 28: // $bb27
        var $152=HEAP[$RetVal]; //@line 551 "zlibmodule.c"
        var $153=(($152)&4294967295); //@line 551 "zlibmodule.c"
        var $154=HEAP[$153]; //@line 551 "zlibmodule.c"
        var $155=((($154) - 1)&4294967295); //@line 551 "zlibmodule.c"
        var $156=(($152)&4294967295); //@line 551 "zlibmodule.c"
        HEAP[$156]=$155; //@line 551 "zlibmodule.c"
        var $157=(($152)&4294967295); //@line 551 "zlibmodule.c"
        var $158=HEAP[$157]; //@line 551 "zlibmodule.c"
        var $159=((($158))|0)==0; //@line 551 "zlibmodule.c"
        if ($159) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 551 "zlibmodule.c"
      case 29: // $bb28
        var $160=HEAP[$RetVal]; //@line 551 "zlibmodule.c"
        var $161=(($160+4)&4294967295); //@line 551 "zlibmodule.c"
        var $162=HEAP[$161]; //@line 551 "zlibmodule.c"
        var $163=(($162+24)&4294967295); //@line 551 "zlibmodule.c"
        var $164=HEAP[$163]; //@line 551 "zlibmodule.c"
        var $165=HEAP[$RetVal]; //@line 551 "zlibmodule.c"
        FUNCTION_TABLE[$164]($165); //@line 551 "zlibmodule.c"
        __label__ = 30; break; //@line 551 "zlibmodule.c"
      case 30: // $bb29
        HEAP[$RetVal]=0; //@line 552 "zlibmodule.c"
        __label__ = 46; break; //@line 552 "zlibmodule.c"
      case 31: // $bb30
        var $166=HEAP[$err]; //@line 562 "zlibmodule.c"
        var $167=((($166))|0)==1; //@line 562 "zlibmodule.c"
        if ($167) { __label__ = 32; break; } else { __label__ = 40; break; } //@line 562 "zlibmodule.c"
      case 32: // $bb31
        var $168=HEAP[$self_addr]; //@line 563 "zlibmodule.c"
        var $169=(($168+64)&4294967295); //@line 563 "zlibmodule.c"
        var $170=HEAP[$169]; //@line 563 "zlibmodule.c"
        var $171=($170)!=0; //@line 563 "zlibmodule.c"
        if ($171) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 563 "zlibmodule.c"
      case 33: // $bb32
        var $172=HEAP[$self_addr]; //@line 563 "zlibmodule.c"
        var $173=(($172+64)&4294967295); //@line 563 "zlibmodule.c"
        var $174=HEAP[$173]; //@line 563 "zlibmodule.c"
        var $175=(($174)&4294967295); //@line 563 "zlibmodule.c"
        var $176=HEAP[$175]; //@line 563 "zlibmodule.c"
        var $177=((($176) - 1)&4294967295); //@line 563 "zlibmodule.c"
        var $178=(($174)&4294967295); //@line 563 "zlibmodule.c"
        HEAP[$178]=$177; //@line 563 "zlibmodule.c"
        var $179=(($174)&4294967295); //@line 563 "zlibmodule.c"
        var $180=HEAP[$179]; //@line 563 "zlibmodule.c"
        var $181=((($180))|0)==0; //@line 563 "zlibmodule.c"
        if ($181) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 563 "zlibmodule.c"
      case 34: // $bb33
        var $182=HEAP[$self_addr]; //@line 563 "zlibmodule.c"
        var $183=(($182+64)&4294967295); //@line 563 "zlibmodule.c"
        var $184=HEAP[$183]; //@line 563 "zlibmodule.c"
        var $185=(($184+4)&4294967295); //@line 563 "zlibmodule.c"
        var $186=HEAP[$185]; //@line 563 "zlibmodule.c"
        var $187=(($186+24)&4294967295); //@line 563 "zlibmodule.c"
        var $188=HEAP[$187]; //@line 563 "zlibmodule.c"
        var $189=HEAP[$self_addr]; //@line 563 "zlibmodule.c"
        var $190=(($189+64)&4294967295); //@line 563 "zlibmodule.c"
        var $191=HEAP[$190]; //@line 563 "zlibmodule.c"
        FUNCTION_TABLE[$188]($191); //@line 563 "zlibmodule.c"
        __label__ = 35; break; //@line 563 "zlibmodule.c"
      case 35: // $bb34
        var $192=HEAP[$self_addr]; //@line 564 "zlibmodule.c"
        var $193=(($192+8)&4294967295); //@line 564 "zlibmodule.c"
        var $194=(($193+4)&4294967295); //@line 564 "zlibmodule.c"
        var $195=HEAP[$194]; //@line 564 "zlibmodule.c"
        var $196=HEAP[$self_addr]; //@line 564 "zlibmodule.c"
        var $197=(($196+8)&4294967295); //@line 564 "zlibmodule.c"
        var $198=(($197)&4294967295); //@line 564 "zlibmodule.c"
        var $199=HEAP[$198]; //@line 564 "zlibmodule.c"
        var $200=_PyString_FromStringAndSize($199, $195); //@line 564 "zlibmodule.c"
        var $201=HEAP[$self_addr]; //@line 564 "zlibmodule.c"
        var $202=(($201+64)&4294967295); //@line 564 "zlibmodule.c"
        HEAP[$202]=$200; //@line 564 "zlibmodule.c"
        var $203=HEAP[$self_addr]; //@line 566 "zlibmodule.c"
        var $204=(($203+64)&4294967295); //@line 566 "zlibmodule.c"
        var $205=HEAP[$204]; //@line 566 "zlibmodule.c"
        var $206=($205)==0; //@line 566 "zlibmodule.c"
        if ($206) { __label__ = 36; break; } else { __label__ = 39; break; } //@line 566 "zlibmodule.c"
      case 36: // $bb35
        var $207=HEAP[$RetVal]; //@line 567 "zlibmodule.c"
        var $208=(($207)&4294967295); //@line 567 "zlibmodule.c"
        var $209=HEAP[$208]; //@line 567 "zlibmodule.c"
        var $210=((($209) - 1)&4294967295); //@line 567 "zlibmodule.c"
        var $211=(($207)&4294967295); //@line 567 "zlibmodule.c"
        HEAP[$211]=$210; //@line 567 "zlibmodule.c"
        var $212=(($207)&4294967295); //@line 567 "zlibmodule.c"
        var $213=HEAP[$212]; //@line 567 "zlibmodule.c"
        var $214=((($213))|0)==0; //@line 567 "zlibmodule.c"
        if ($214) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 567 "zlibmodule.c"
      case 37: // $bb36
        var $215=HEAP[$RetVal]; //@line 567 "zlibmodule.c"
        var $216=(($215+4)&4294967295); //@line 567 "zlibmodule.c"
        var $217=HEAP[$216]; //@line 567 "zlibmodule.c"
        var $218=(($217+24)&4294967295); //@line 567 "zlibmodule.c"
        var $219=HEAP[$218]; //@line 567 "zlibmodule.c"
        var $220=HEAP[$RetVal]; //@line 567 "zlibmodule.c"
        FUNCTION_TABLE[$219]($220); //@line 567 "zlibmodule.c"
        __label__ = 38; break; //@line 567 "zlibmodule.c"
      case 38: // $bb37
        __label__ = 46; break; //@line 567 "zlibmodule.c"
      case 39: // $bb38
        __label__ = 45; break; //@line 567 "zlibmodule.c"
      case 40: // $bb39
        var $221=HEAP[$err]; //@line 574 "zlibmodule.c"
        var $222=((($221))|0)!=0; //@line 574 "zlibmodule.c"
        if ($222) { __label__ = 41; break; } else { __label__ = 45; break; } //@line 574 "zlibmodule.c"
      case 41: // $bb40
        var $223=HEAP[$err]; //@line 574 "zlibmodule.c"
        var $224=((($223))|0)!=-5; //@line 574 "zlibmodule.c"
        if ($224) { __label__ = 42; break; } else { __label__ = 45; break; } //@line 574 "zlibmodule.c"
      case 42: // $bb41
        var $225=HEAP[$self_addr]; //@line 575 "zlibmodule.c"
        var $226=(($225+8)&4294967295); //@line 575 "zlibmodule.c"
        var $227=HEAP[$err]; //@line 575 "zlibmodule.c"
        _zlib_error($226, $227, ((__str29)&4294967295)); //@line 575 "zlibmodule.c"
        var $228=HEAP[$RetVal]; //@line 576 "zlibmodule.c"
        var $229=(($228)&4294967295); //@line 576 "zlibmodule.c"
        var $230=HEAP[$229]; //@line 576 "zlibmodule.c"
        var $231=((($230) - 1)&4294967295); //@line 576 "zlibmodule.c"
        var $232=(($228)&4294967295); //@line 576 "zlibmodule.c"
        HEAP[$232]=$231; //@line 576 "zlibmodule.c"
        var $233=(($228)&4294967295); //@line 576 "zlibmodule.c"
        var $234=HEAP[$233]; //@line 576 "zlibmodule.c"
        var $235=((($234))|0)==0; //@line 576 "zlibmodule.c"
        if ($235) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 576 "zlibmodule.c"
      case 43: // $bb42
        var $236=HEAP[$RetVal]; //@line 576 "zlibmodule.c"
        var $237=(($236+4)&4294967295); //@line 576 "zlibmodule.c"
        var $238=HEAP[$237]; //@line 576 "zlibmodule.c"
        var $239=(($238+24)&4294967295); //@line 576 "zlibmodule.c"
        var $240=HEAP[$239]; //@line 576 "zlibmodule.c"
        var $241=HEAP[$RetVal]; //@line 576 "zlibmodule.c"
        FUNCTION_TABLE[$240]($241); //@line 576 "zlibmodule.c"
        __label__ = 44; break; //@line 576 "zlibmodule.c"
      case 44: // $bb43
        HEAP[$RetVal]=0; //@line 577 "zlibmodule.c"
        __label__ = 46; break; //@line 577 "zlibmodule.c"
      case 45: // $bb44
        var $242=HEAP[$self_addr]; //@line 581 "zlibmodule.c"
        var $243=(($242+8)&4294967295); //@line 581 "zlibmodule.c"
        var $244=(($243+20)&4294967295); //@line 581 "zlibmodule.c"
        var $245=HEAP[$244]; //@line 581 "zlibmodule.c"
        var $246=HEAP[$start_total_out]; //@line 581 "zlibmodule.c"
        var $247=((($245) - ($246))&4294967295); //@line 581 "zlibmodule.c"
        var $248=__PyString_Resize($RetVal, $247); //@line 581 "zlibmodule.c"
        __label__ = 46; break; //@line 583 "zlibmodule.c"
      case 46: // $error
        var $249=HEAP[$RetVal]; //@line 586 "zlibmodule.c"
        HEAP[$0]=$249; //@line 586 "zlibmodule.c"
        __label__ = 47; break; //@line 586 "zlibmodule.c"
      case 47: // $bb45
        var $250=HEAP[$0]; //@line 486 "zlibmodule.c"
        HEAP[$retval]=$250; //@line 486 "zlibmodule.c"
        __label__ = 48; break; //@line 486 "zlibmodule.c"
      case 48: // $return
        var $retval46=HEAP[$retval]; //@line 486 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval46; //@line 486 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_flush($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $err=__stackBase__+16;
        var $length=__stackBase__+20;
        var $RetVal=__stackBase__+24;
        var $flushmode=__stackBase__+28;
        var $start_total_out=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$length]=16384; //@line 600 "zlibmodule.c"
        HEAP[$flushmode]=4; //@line 602 "zlibmodule.c"
        var $1=HEAP[$args_addr]; //@line 605 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str30)&4294967295), $flushmode); //@line 605 "zlibmodule.c"
        var $3=((($2))|0)==0; //@line 605 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 605 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 606 "zlibmodule.c"
        __label__ = 25; break; //@line 606 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$flushmode]; //@line 610 "zlibmodule.c"
        var $5=((($4))|0)==0; //@line 610 "zlibmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 610 "zlibmodule.c"
      case 3: // $bb2
        var $6=_PyString_FromStringAndSize(0, 0); //@line 611 "zlibmodule.c"
        HEAP[$0]=$6; //@line 611 "zlibmodule.c"
        __label__ = 25; break; //@line 611 "zlibmodule.c"
      case 4: // $bb3
        var $7=HEAP[$length]; //@line 614 "zlibmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 614 "zlibmodule.c"
        HEAP[$RetVal]=$8; //@line 614 "zlibmodule.c"
        var $9=HEAP[$RetVal]; //@line 614 "zlibmodule.c"
        var $10=($9)==0; //@line 614 "zlibmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 614 "zlibmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 615 "zlibmodule.c"
        __label__ = 25; break; //@line 615 "zlibmodule.c"
      case 6: // $bb5
        var $11=HEAP[$self_addr]; //@line 619 "zlibmodule.c"
        var $12=(($11+8)&4294967295); //@line 619 "zlibmodule.c"
        var $13=(($12+20)&4294967295); //@line 619 "zlibmodule.c"
        var $14=HEAP[$13]; //@line 619 "zlibmodule.c"
        HEAP[$start_total_out]=$14; //@line 619 "zlibmodule.c"
        var $15=HEAP[$self_addr]; //@line 620 "zlibmodule.c"
        var $16=(($15+8)&4294967295); //@line 620 "zlibmodule.c"
        var $17=(($16+4)&4294967295); //@line 620 "zlibmodule.c"
        HEAP[$17]=0; //@line 620 "zlibmodule.c"
        var $18=HEAP[$length]; //@line 621 "zlibmodule.c"
        var $19=HEAP[$self_addr]; //@line 621 "zlibmodule.c"
        var $20=(($19+8)&4294967295); //@line 621 "zlibmodule.c"
        var $21=(($20+16)&4294967295); //@line 621 "zlibmodule.c"
        HEAP[$21]=$18; //@line 621 "zlibmodule.c"
        var $22=HEAP[$RetVal]; //@line 622 "zlibmodule.c"
        var $23=$22; //@line 622 "zlibmodule.c"
        var $24=(($23+20)&4294967295); //@line 622 "zlibmodule.c"
        var $25=$24; //@line 622 "zlibmodule.c"
        var $26=HEAP[$self_addr]; //@line 622 "zlibmodule.c"
        var $27=(($26+8)&4294967295); //@line 622 "zlibmodule.c"
        var $28=(($27+12)&4294967295); //@line 622 "zlibmodule.c"
        HEAP[$28]=$25; //@line 622 "zlibmodule.c"
        var $29=HEAP[$flushmode]; //@line 625 "zlibmodule.c"
        var $30=HEAP[$self_addr]; //@line 625 "zlibmodule.c"
        var $31=(($30+8)&4294967295); //@line 625 "zlibmodule.c"
        var $32=_deflate($31, $29); //@line 625 "zlibmodule.c"
        HEAP[$err]=$32; //@line 625 "zlibmodule.c"
        __label__ = 9; break; //@line 625 "zlibmodule.c"
      case 7: // $bb6
        var $33=HEAP[$length]; //@line 631 "zlibmodule.c"
        var $34=($33) << 1; //@line 631 "zlibmodule.c"
        var $35=__PyString_Resize($RetVal, $34); //@line 631 "zlibmodule.c"
        var $36=((($35))|0) < 0; //@line 631 "zlibmodule.c"
        if ($36) { __label__ = 24; break; } else { __label__ = 8; break; } //@line 631 "zlibmodule.c"
      case 8: // $bb7
        var $37=HEAP[$RetVal]; //@line 633 "zlibmodule.c"
        var $38=$37; //@line 633 "zlibmodule.c"
        var $39=(($38+20)&4294967295); //@line 633 "zlibmodule.c"
        var $40=$39; //@line 633 "zlibmodule.c"
        var $41=HEAP[$length]; //@line 633 "zlibmodule.c"
        var $42=(($40+$41)&4294967295); //@line 633 "zlibmodule.c"
        var $43=HEAP[$self_addr]; //@line 633 "zlibmodule.c"
        var $44=(($43+8)&4294967295); //@line 633 "zlibmodule.c"
        var $45=(($44+12)&4294967295); //@line 633 "zlibmodule.c"
        HEAP[$45]=$42; //@line 633 "zlibmodule.c"
        var $46=HEAP[$length]; //@line 635 "zlibmodule.c"
        var $47=HEAP[$self_addr]; //@line 635 "zlibmodule.c"
        var $48=(($47+8)&4294967295); //@line 635 "zlibmodule.c"
        var $49=(($48+16)&4294967295); //@line 635 "zlibmodule.c"
        HEAP[$49]=$46; //@line 635 "zlibmodule.c"
        var $50=HEAP[$length]; //@line 636 "zlibmodule.c"
        var $51=($50) << 1; //@line 636 "zlibmodule.c"
        HEAP[$length]=$51; //@line 636 "zlibmodule.c"
        var $52=HEAP[$flushmode]; //@line 639 "zlibmodule.c"
        var $53=HEAP[$self_addr]; //@line 639 "zlibmodule.c"
        var $54=(($53+8)&4294967295); //@line 639 "zlibmodule.c"
        var $55=_deflate($54, $52); //@line 639 "zlibmodule.c"
        HEAP[$err]=$55; //@line 639 "zlibmodule.c"
        __label__ = 9; break; //@line 639 "zlibmodule.c"
      case 9: // $bb8
        var $56=HEAP[$err]; //@line 630 "zlibmodule.c"
        var $57=((($56))|0)!=0; //@line 630 "zlibmodule.c"
        if ($57) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 630 "zlibmodule.c"
      case 10: // $bb9
        var $58=HEAP[$self_addr]; //@line 630 "zlibmodule.c"
        var $59=(($58+8)&4294967295); //@line 630 "zlibmodule.c"
        var $60=(($59+16)&4294967295); //@line 630 "zlibmodule.c"
        var $61=HEAP[$60]; //@line 630 "zlibmodule.c"
        var $62=((($61))|0)==0; //@line 630 "zlibmodule.c"
        if ($62) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 630 "zlibmodule.c"
      case 11: // $bb10
        var $63=HEAP[$err]; //@line 646 "zlibmodule.c"
        var $64=((($63))|0)!=1; //@line 646 "zlibmodule.c"
        if ($64) { __label__ = 18; break; } else { __label__ = 12; break; } //@line 646 "zlibmodule.c"
      case 12: // $bb11
        var $65=HEAP[$flushmode]; //@line 646 "zlibmodule.c"
        var $66=((($65))|0)!=4; //@line 646 "zlibmodule.c"
        if ($66) { __label__ = 18; break; } else { __label__ = 13; break; } //@line 646 "zlibmodule.c"
      case 13: // $bb12
        var $67=HEAP[$self_addr]; //@line 647 "zlibmodule.c"
        var $68=(($67+8)&4294967295); //@line 647 "zlibmodule.c"
        var $69=_deflateEnd($68); //@line 647 "zlibmodule.c"
        HEAP[$err]=$69; //@line 647 "zlibmodule.c"
        var $70=HEAP[$err]; //@line 648 "zlibmodule.c"
        var $71=((($70))|0)!=0; //@line 648 "zlibmodule.c"
        if ($71) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 648 "zlibmodule.c"
      case 14: // $bb13
        var $72=HEAP[$self_addr]; //@line 649 "zlibmodule.c"
        var $73=(($72+8)&4294967295); //@line 649 "zlibmodule.c"
        var $74=HEAP[$err]; //@line 649 "zlibmodule.c"
        _zlib_error($73, $74, ((__str31)&4294967295)); //@line 649 "zlibmodule.c"
        var $75=HEAP[$RetVal]; //@line 650 "zlibmodule.c"
        var $76=(($75)&4294967295); //@line 650 "zlibmodule.c"
        var $77=HEAP[$76]; //@line 650 "zlibmodule.c"
        var $78=((($77) - 1)&4294967295); //@line 650 "zlibmodule.c"
        var $79=(($75)&4294967295); //@line 650 "zlibmodule.c"
        HEAP[$79]=$78; //@line 650 "zlibmodule.c"
        var $80=(($75)&4294967295); //@line 650 "zlibmodule.c"
        var $81=HEAP[$80]; //@line 650 "zlibmodule.c"
        var $82=((($81))|0)==0; //@line 650 "zlibmodule.c"
        if ($82) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 650 "zlibmodule.c"
      case 15: // $bb14
        var $83=HEAP[$RetVal]; //@line 650 "zlibmodule.c"
        var $84=(($83+4)&4294967295); //@line 650 "zlibmodule.c"
        var $85=HEAP[$84]; //@line 650 "zlibmodule.c"
        var $86=(($85+24)&4294967295); //@line 650 "zlibmodule.c"
        var $87=HEAP[$86]; //@line 650 "zlibmodule.c"
        var $88=HEAP[$RetVal]; //@line 650 "zlibmodule.c"
        FUNCTION_TABLE[$87]($88); //@line 650 "zlibmodule.c"
        __label__ = 16; break; //@line 650 "zlibmodule.c"
      case 16: // $bb15
        HEAP[$RetVal]=0; //@line 651 "zlibmodule.c"
        __label__ = 24; break; //@line 651 "zlibmodule.c"
      case 17: // $bb16
        var $89=HEAP[$self_addr]; //@line 655 "zlibmodule.c"
        var $90=(($89+72)&4294967295); //@line 655 "zlibmodule.c"
        HEAP[$90]=0; //@line 655 "zlibmodule.c"
        __label__ = 23; break; //@line 655 "zlibmodule.c"
      case 18: // $bb17
        var $91=HEAP[$err]; //@line 661 "zlibmodule.c"
        var $92=((($91))|0)!=0; //@line 661 "zlibmodule.c"
        if ($92) { __label__ = 19; break; } else { __label__ = 23; break; } //@line 661 "zlibmodule.c"
      case 19: // $bb18
        var $93=HEAP[$err]; //@line 661 "zlibmodule.c"
        var $94=((($93))|0)!=-5; //@line 661 "zlibmodule.c"
        if ($94) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 661 "zlibmodule.c"
      case 20: // $bb19
        var $95=HEAP[$self_addr]; //@line 662 "zlibmodule.c"
        var $96=(($95+8)&4294967295); //@line 662 "zlibmodule.c"
        var $97=HEAP[$err]; //@line 662 "zlibmodule.c"
        _zlib_error($96, $97, ((__str32)&4294967295)); //@line 662 "zlibmodule.c"
        var $98=HEAP[$RetVal]; //@line 663 "zlibmodule.c"
        var $99=(($98)&4294967295); //@line 663 "zlibmodule.c"
        var $100=HEAP[$99]; //@line 663 "zlibmodule.c"
        var $101=((($100) - 1)&4294967295); //@line 663 "zlibmodule.c"
        var $102=(($98)&4294967295); //@line 663 "zlibmodule.c"
        HEAP[$102]=$101; //@line 663 "zlibmodule.c"
        var $103=(($98)&4294967295); //@line 663 "zlibmodule.c"
        var $104=HEAP[$103]; //@line 663 "zlibmodule.c"
        var $105=((($104))|0)==0; //@line 663 "zlibmodule.c"
        if ($105) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 663 "zlibmodule.c"
      case 21: // $bb20
        var $106=HEAP[$RetVal]; //@line 663 "zlibmodule.c"
        var $107=(($106+4)&4294967295); //@line 663 "zlibmodule.c"
        var $108=HEAP[$107]; //@line 663 "zlibmodule.c"
        var $109=(($108+24)&4294967295); //@line 663 "zlibmodule.c"
        var $110=HEAP[$109]; //@line 663 "zlibmodule.c"
        var $111=HEAP[$RetVal]; //@line 663 "zlibmodule.c"
        FUNCTION_TABLE[$110]($111); //@line 663 "zlibmodule.c"
        __label__ = 22; break; //@line 663 "zlibmodule.c"
      case 22: // $bb21
        HEAP[$RetVal]=0; //@line 664 "zlibmodule.c"
        __label__ = 24; break; //@line 664 "zlibmodule.c"
      case 23: // $bb22
        var $112=HEAP[$self_addr]; //@line 668 "zlibmodule.c"
        var $113=(($112+8)&4294967295); //@line 668 "zlibmodule.c"
        var $114=(($113+20)&4294967295); //@line 668 "zlibmodule.c"
        var $115=HEAP[$114]; //@line 668 "zlibmodule.c"
        var $116=HEAP[$start_total_out]; //@line 668 "zlibmodule.c"
        var $117=((($115) - ($116))&4294967295); //@line 668 "zlibmodule.c"
        var $118=__PyString_Resize($RetVal, $117); //@line 668 "zlibmodule.c"
        __label__ = 24; break; //@line 670 "zlibmodule.c"
      case 24: // $error
        var $119=HEAP[$RetVal]; //@line 673 "zlibmodule.c"
        HEAP[$0]=$119; //@line 673 "zlibmodule.c"
        __label__ = 25; break; //@line 673 "zlibmodule.c"
      case 25: // $bb23
        var $120=HEAP[$0]; //@line 606 "zlibmodule.c"
        HEAP[$retval]=$120; //@line 606 "zlibmodule.c"
        __label__ = 26; break; //@line 606 "zlibmodule.c"
      case 26: // $return
        var $retval24=HEAP[$retval]; //@line 606 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval24; //@line 606 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_copy($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $retval1=__stackBase__+12;
        var $err=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$retval1]=0; //@line 683 "zlibmodule.c"
        var $1=_newcompobject(_Comptype); //@line 686 "zlibmodule.c"
        HEAP[$retval1]=$1; //@line 686 "zlibmodule.c"
        var $2=HEAP[$retval1]; //@line 687 "zlibmodule.c"
        var $3=($2)==0; //@line 687 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 687 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 687 "zlibmodule.c"
        __label__ = 17; break; //@line 687 "zlibmodule.c"
      case 2: // $bb2
        var $4=HEAP[$self_addr]; //@line 693 "zlibmodule.c"
        var $5=(($4+8)&4294967295); //@line 693 "zlibmodule.c"
        var $6=HEAP[$retval1]; //@line 693 "zlibmodule.c"
        var $7=(($6+8)&4294967295); //@line 693 "zlibmodule.c"
        var $8=_deflateCopy($7, $5); //@line 693 "zlibmodule.c"
        HEAP[$err]=$8; //@line 693 "zlibmodule.c"
        var $9=HEAP[$err]; //@line 694 "zlibmodule.c"
        if ($9 == -4) {
          __label__ = 5; break;
        }
        else if ($9 == -2) {
          __label__ = 4; break;
        }
        else if ($9 == 0) {
          __label__ = 3; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 3: // $bb3
        var $10=HEAP[$self_addr]; //@line 709 "zlibmodule.c"
        var $11=(($10+64)&4294967295); //@line 709 "zlibmodule.c"
        var $12=HEAP[$11]; //@line 709 "zlibmodule.c"
        var $13=(($12)&4294967295); //@line 709 "zlibmodule.c"
        var $14=HEAP[$13]; //@line 709 "zlibmodule.c"
        var $15=((($14) + 1)&4294967295); //@line 709 "zlibmodule.c"
        var $16=(($12)&4294967295); //@line 709 "zlibmodule.c"
        HEAP[$16]=$15; //@line 709 "zlibmodule.c"
        var $17=HEAP[$self_addr]; //@line 710 "zlibmodule.c"
        var $18=(($17+68)&4294967295); //@line 710 "zlibmodule.c"
        var $19=HEAP[$18]; //@line 710 "zlibmodule.c"
        var $20=(($19)&4294967295); //@line 710 "zlibmodule.c"
        var $21=HEAP[$20]; //@line 710 "zlibmodule.c"
        var $22=((($21) + 1)&4294967295); //@line 710 "zlibmodule.c"
        var $23=(($19)&4294967295); //@line 710 "zlibmodule.c"
        HEAP[$23]=$22; //@line 710 "zlibmodule.c"
        var $24=HEAP[$retval1]; //@line 711 "zlibmodule.c"
        var $25=(($24+64)&4294967295); //@line 711 "zlibmodule.c"
        var $26=HEAP[$25]; //@line 711 "zlibmodule.c"
        var $27=($26)!=0; //@line 711 "zlibmodule.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 711 "zlibmodule.c"
      case 4: // $bb4
        var $28=HEAP[_PyExc_ValueError]; //@line 698 "zlibmodule.c"
        _PyErr_SetString($28, ((__str33)&4294967295)); //@line 698 "zlibmodule.c"
        __label__ = 13; break; //@line 698 "zlibmodule.c"
      case 5: // $bb5
        var $29=HEAP[_PyExc_MemoryError]; //@line 701 "zlibmodule.c"
        _PyErr_SetString($29, ((__str19)&4294967295)); //@line 701 "zlibmodule.c"
        __label__ = 13; break; //@line 701 "zlibmodule.c"
      case 6: // $bb6
        var $30=HEAP[$self_addr]; //@line 705 "zlibmodule.c"
        var $31=(($30+8)&4294967295); //@line 705 "zlibmodule.c"
        var $32=HEAP[$err]; //@line 705 "zlibmodule.c"
        _zlib_error($31, $32, ((__str34)&4294967295)); //@line 705 "zlibmodule.c"
        __label__ = 13; break; //@line 705 "zlibmodule.c"
      case 7: // $bb7
        var $33=HEAP[$retval1]; //@line 711 "zlibmodule.c"
        var $34=(($33+64)&4294967295); //@line 711 "zlibmodule.c"
        var $35=HEAP[$34]; //@line 711 "zlibmodule.c"
        var $36=(($35)&4294967295); //@line 711 "zlibmodule.c"
        var $37=HEAP[$36]; //@line 711 "zlibmodule.c"
        var $38=((($37) - 1)&4294967295); //@line 711 "zlibmodule.c"
        var $39=(($35)&4294967295); //@line 711 "zlibmodule.c"
        HEAP[$39]=$38; //@line 711 "zlibmodule.c"
        var $40=(($35)&4294967295); //@line 711 "zlibmodule.c"
        var $41=HEAP[$40]; //@line 711 "zlibmodule.c"
        var $42=((($41))|0)==0; //@line 711 "zlibmodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 711 "zlibmodule.c"
      case 8: // $bb8
        var $43=HEAP[$retval1]; //@line 711 "zlibmodule.c"
        var $44=(($43+64)&4294967295); //@line 711 "zlibmodule.c"
        var $45=HEAP[$44]; //@line 711 "zlibmodule.c"
        var $46=(($45+4)&4294967295); //@line 711 "zlibmodule.c"
        var $47=HEAP[$46]; //@line 711 "zlibmodule.c"
        var $48=(($47+24)&4294967295); //@line 711 "zlibmodule.c"
        var $49=HEAP[$48]; //@line 711 "zlibmodule.c"
        var $50=HEAP[$retval1]; //@line 711 "zlibmodule.c"
        var $51=(($50+64)&4294967295); //@line 711 "zlibmodule.c"
        var $52=HEAP[$51]; //@line 711 "zlibmodule.c"
        FUNCTION_TABLE[$49]($52); //@line 711 "zlibmodule.c"
        __label__ = 9; break; //@line 711 "zlibmodule.c"
      case 9: // $bb9
        var $53=HEAP[$retval1]; //@line 712 "zlibmodule.c"
        var $54=(($53+68)&4294967295); //@line 712 "zlibmodule.c"
        var $55=HEAP[$54]; //@line 712 "zlibmodule.c"
        var $56=($55)!=0; //@line 712 "zlibmodule.c"
        if ($56) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 712 "zlibmodule.c"
      case 10: // $bb10
        var $57=HEAP[$retval1]; //@line 712 "zlibmodule.c"
        var $58=(($57+68)&4294967295); //@line 712 "zlibmodule.c"
        var $59=HEAP[$58]; //@line 712 "zlibmodule.c"
        var $60=(($59)&4294967295); //@line 712 "zlibmodule.c"
        var $61=HEAP[$60]; //@line 712 "zlibmodule.c"
        var $62=((($61) - 1)&4294967295); //@line 712 "zlibmodule.c"
        var $63=(($59)&4294967295); //@line 712 "zlibmodule.c"
        HEAP[$63]=$62; //@line 712 "zlibmodule.c"
        var $64=(($59)&4294967295); //@line 712 "zlibmodule.c"
        var $65=HEAP[$64]; //@line 712 "zlibmodule.c"
        var $66=((($65))|0)==0; //@line 712 "zlibmodule.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 712 "zlibmodule.c"
      case 11: // $bb11
        var $67=HEAP[$retval1]; //@line 712 "zlibmodule.c"
        var $68=(($67+68)&4294967295); //@line 712 "zlibmodule.c"
        var $69=HEAP[$68]; //@line 712 "zlibmodule.c"
        var $70=(($69+4)&4294967295); //@line 712 "zlibmodule.c"
        var $71=HEAP[$70]; //@line 712 "zlibmodule.c"
        var $72=(($71+24)&4294967295); //@line 712 "zlibmodule.c"
        var $73=HEAP[$72]; //@line 712 "zlibmodule.c"
        var $74=HEAP[$retval1]; //@line 712 "zlibmodule.c"
        var $75=(($74+68)&4294967295); //@line 712 "zlibmodule.c"
        var $76=HEAP[$75]; //@line 712 "zlibmodule.c"
        FUNCTION_TABLE[$73]($76); //@line 712 "zlibmodule.c"
        __label__ = 12; break; //@line 712 "zlibmodule.c"
      case 12: // $bb12
        var $77=HEAP[$self_addr]; //@line 713 "zlibmodule.c"
        var $78=(($77+64)&4294967295); //@line 713 "zlibmodule.c"
        var $79=HEAP[$78]; //@line 713 "zlibmodule.c"
        var $80=HEAP[$retval1]; //@line 713 "zlibmodule.c"
        var $81=(($80+64)&4294967295); //@line 713 "zlibmodule.c"
        HEAP[$81]=$79; //@line 713 "zlibmodule.c"
        var $82=HEAP[$self_addr]; //@line 714 "zlibmodule.c"
        var $83=(($82+68)&4294967295); //@line 714 "zlibmodule.c"
        var $84=HEAP[$83]; //@line 714 "zlibmodule.c"
        var $85=HEAP[$retval1]; //@line 714 "zlibmodule.c"
        var $86=(($85+68)&4294967295); //@line 714 "zlibmodule.c"
        HEAP[$86]=$84; //@line 714 "zlibmodule.c"
        var $87=HEAP[$retval1]; //@line 717 "zlibmodule.c"
        var $88=(($87+72)&4294967295); //@line 717 "zlibmodule.c"
        HEAP[$88]=1; //@line 717 "zlibmodule.c"
        var $89=HEAP[$retval1]; //@line 720 "zlibmodule.c"
        var $90=$89; //@line 720 "zlibmodule.c"
        HEAP[$0]=$90; //@line 720 "zlibmodule.c"
        __label__ = 17; break; //@line 720 "zlibmodule.c"
      case 13: // $error
        var $91=HEAP[$retval1]; //@line 724 "zlibmodule.c"
        var $92=($91)!=0; //@line 724 "zlibmodule.c"
        if ($92) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 724 "zlibmodule.c"
      case 14: // $bb13
        var $93=HEAP[$retval1]; //@line 724 "zlibmodule.c"
        var $94=$93; //@line 724 "zlibmodule.c"
        var $95=(($94)&4294967295); //@line 724 "zlibmodule.c"
        var $96=HEAP[$95]; //@line 724 "zlibmodule.c"
        var $97=((($96) - 1)&4294967295); //@line 724 "zlibmodule.c"
        var $98=(($94)&4294967295); //@line 724 "zlibmodule.c"
        HEAP[$98]=$97; //@line 724 "zlibmodule.c"
        var $99=(($94)&4294967295); //@line 724 "zlibmodule.c"
        var $100=HEAP[$99]; //@line 724 "zlibmodule.c"
        var $101=((($100))|0)==0; //@line 724 "zlibmodule.c"
        if ($101) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 724 "zlibmodule.c"
      case 15: // $bb14
        var $102=HEAP[$retval1]; //@line 724 "zlibmodule.c"
        var $103=$102; //@line 724 "zlibmodule.c"
        var $104=(($103+4)&4294967295); //@line 724 "zlibmodule.c"
        var $105=HEAP[$104]; //@line 724 "zlibmodule.c"
        var $106=(($105+24)&4294967295); //@line 724 "zlibmodule.c"
        var $107=HEAP[$106]; //@line 724 "zlibmodule.c"
        var $108=HEAP[$retval1]; //@line 724 "zlibmodule.c"
        var $109=$108; //@line 724 "zlibmodule.c"
        FUNCTION_TABLE[$107]($109); //@line 724 "zlibmodule.c"
        __label__ = 16; break; //@line 724 "zlibmodule.c"
      case 16: // $bb15
        HEAP[$0]=0; //@line 725 "zlibmodule.c"
        __label__ = 17; break; //@line 725 "zlibmodule.c"
      case 17: // $bb16
        var $110=HEAP[$0]; //@line 687 "zlibmodule.c"
        HEAP[$retval]=$110; //@line 687 "zlibmodule.c"
        __label__ = 18; break; //@line 687 "zlibmodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 687 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 687 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_uncopy($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $retval1=__stackBase__+12;
        var $err=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$retval1]=0; //@line 734 "zlibmodule.c"
        var $1=_newcompobject(_Decomptype); //@line 737 "zlibmodule.c"
        HEAP[$retval1]=$1; //@line 737 "zlibmodule.c"
        var $2=HEAP[$retval1]; //@line 738 "zlibmodule.c"
        var $3=($2)==0; //@line 738 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 738 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 738 "zlibmodule.c"
        __label__ = 17; break; //@line 738 "zlibmodule.c"
      case 2: // $bb2
        var $4=HEAP[$self_addr]; //@line 744 "zlibmodule.c"
        var $5=(($4+8)&4294967295); //@line 744 "zlibmodule.c"
        var $6=HEAP[$retval1]; //@line 744 "zlibmodule.c"
        var $7=(($6+8)&4294967295); //@line 744 "zlibmodule.c"
        var $8=_inflateCopy($7, $5); //@line 744 "zlibmodule.c"
        HEAP[$err]=$8; //@line 744 "zlibmodule.c"
        var $9=HEAP[$err]; //@line 745 "zlibmodule.c"
        if ($9 == -4) {
          __label__ = 5; break;
        }
        else if ($9 == -2) {
          __label__ = 4; break;
        }
        else if ($9 == 0) {
          __label__ = 3; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 3: // $bb3
        var $10=HEAP[$self_addr]; //@line 760 "zlibmodule.c"
        var $11=(($10+64)&4294967295); //@line 760 "zlibmodule.c"
        var $12=HEAP[$11]; //@line 760 "zlibmodule.c"
        var $13=(($12)&4294967295); //@line 760 "zlibmodule.c"
        var $14=HEAP[$13]; //@line 760 "zlibmodule.c"
        var $15=((($14) + 1)&4294967295); //@line 760 "zlibmodule.c"
        var $16=(($12)&4294967295); //@line 760 "zlibmodule.c"
        HEAP[$16]=$15; //@line 760 "zlibmodule.c"
        var $17=HEAP[$self_addr]; //@line 761 "zlibmodule.c"
        var $18=(($17+68)&4294967295); //@line 761 "zlibmodule.c"
        var $19=HEAP[$18]; //@line 761 "zlibmodule.c"
        var $20=(($19)&4294967295); //@line 761 "zlibmodule.c"
        var $21=HEAP[$20]; //@line 761 "zlibmodule.c"
        var $22=((($21) + 1)&4294967295); //@line 761 "zlibmodule.c"
        var $23=(($19)&4294967295); //@line 761 "zlibmodule.c"
        HEAP[$23]=$22; //@line 761 "zlibmodule.c"
        var $24=HEAP[$retval1]; //@line 762 "zlibmodule.c"
        var $25=(($24+64)&4294967295); //@line 762 "zlibmodule.c"
        var $26=HEAP[$25]; //@line 762 "zlibmodule.c"
        var $27=($26)!=0; //@line 762 "zlibmodule.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 762 "zlibmodule.c"
      case 4: // $bb4
        var $28=HEAP[_PyExc_ValueError]; //@line 749 "zlibmodule.c"
        _PyErr_SetString($28, ((__str33)&4294967295)); //@line 749 "zlibmodule.c"
        __label__ = 13; break; //@line 749 "zlibmodule.c"
      case 5: // $bb5
        var $29=HEAP[_PyExc_MemoryError]; //@line 752 "zlibmodule.c"
        _PyErr_SetString($29, ((__str23)&4294967295)); //@line 752 "zlibmodule.c"
        __label__ = 13; break; //@line 752 "zlibmodule.c"
      case 6: // $bb6
        var $30=HEAP[$self_addr]; //@line 756 "zlibmodule.c"
        var $31=(($30+8)&4294967295); //@line 756 "zlibmodule.c"
        var $32=HEAP[$err]; //@line 756 "zlibmodule.c"
        _zlib_error($31, $32, ((__str35)&4294967295)); //@line 756 "zlibmodule.c"
        __label__ = 13; break; //@line 756 "zlibmodule.c"
      case 7: // $bb7
        var $33=HEAP[$retval1]; //@line 762 "zlibmodule.c"
        var $34=(($33+64)&4294967295); //@line 762 "zlibmodule.c"
        var $35=HEAP[$34]; //@line 762 "zlibmodule.c"
        var $36=(($35)&4294967295); //@line 762 "zlibmodule.c"
        var $37=HEAP[$36]; //@line 762 "zlibmodule.c"
        var $38=((($37) - 1)&4294967295); //@line 762 "zlibmodule.c"
        var $39=(($35)&4294967295); //@line 762 "zlibmodule.c"
        HEAP[$39]=$38; //@line 762 "zlibmodule.c"
        var $40=(($35)&4294967295); //@line 762 "zlibmodule.c"
        var $41=HEAP[$40]; //@line 762 "zlibmodule.c"
        var $42=((($41))|0)==0; //@line 762 "zlibmodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 762 "zlibmodule.c"
      case 8: // $bb8
        var $43=HEAP[$retval1]; //@line 762 "zlibmodule.c"
        var $44=(($43+64)&4294967295); //@line 762 "zlibmodule.c"
        var $45=HEAP[$44]; //@line 762 "zlibmodule.c"
        var $46=(($45+4)&4294967295); //@line 762 "zlibmodule.c"
        var $47=HEAP[$46]; //@line 762 "zlibmodule.c"
        var $48=(($47+24)&4294967295); //@line 762 "zlibmodule.c"
        var $49=HEAP[$48]; //@line 762 "zlibmodule.c"
        var $50=HEAP[$retval1]; //@line 762 "zlibmodule.c"
        var $51=(($50+64)&4294967295); //@line 762 "zlibmodule.c"
        var $52=HEAP[$51]; //@line 762 "zlibmodule.c"
        FUNCTION_TABLE[$49]($52); //@line 762 "zlibmodule.c"
        __label__ = 9; break; //@line 762 "zlibmodule.c"
      case 9: // $bb9
        var $53=HEAP[$retval1]; //@line 763 "zlibmodule.c"
        var $54=(($53+68)&4294967295); //@line 763 "zlibmodule.c"
        var $55=HEAP[$54]; //@line 763 "zlibmodule.c"
        var $56=($55)!=0; //@line 763 "zlibmodule.c"
        if ($56) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 763 "zlibmodule.c"
      case 10: // $bb10
        var $57=HEAP[$retval1]; //@line 763 "zlibmodule.c"
        var $58=(($57+68)&4294967295); //@line 763 "zlibmodule.c"
        var $59=HEAP[$58]; //@line 763 "zlibmodule.c"
        var $60=(($59)&4294967295); //@line 763 "zlibmodule.c"
        var $61=HEAP[$60]; //@line 763 "zlibmodule.c"
        var $62=((($61) - 1)&4294967295); //@line 763 "zlibmodule.c"
        var $63=(($59)&4294967295); //@line 763 "zlibmodule.c"
        HEAP[$63]=$62; //@line 763 "zlibmodule.c"
        var $64=(($59)&4294967295); //@line 763 "zlibmodule.c"
        var $65=HEAP[$64]; //@line 763 "zlibmodule.c"
        var $66=((($65))|0)==0; //@line 763 "zlibmodule.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 763 "zlibmodule.c"
      case 11: // $bb11
        var $67=HEAP[$retval1]; //@line 763 "zlibmodule.c"
        var $68=(($67+68)&4294967295); //@line 763 "zlibmodule.c"
        var $69=HEAP[$68]; //@line 763 "zlibmodule.c"
        var $70=(($69+4)&4294967295); //@line 763 "zlibmodule.c"
        var $71=HEAP[$70]; //@line 763 "zlibmodule.c"
        var $72=(($71+24)&4294967295); //@line 763 "zlibmodule.c"
        var $73=HEAP[$72]; //@line 763 "zlibmodule.c"
        var $74=HEAP[$retval1]; //@line 763 "zlibmodule.c"
        var $75=(($74+68)&4294967295); //@line 763 "zlibmodule.c"
        var $76=HEAP[$75]; //@line 763 "zlibmodule.c"
        FUNCTION_TABLE[$73]($76); //@line 763 "zlibmodule.c"
        __label__ = 12; break; //@line 763 "zlibmodule.c"
      case 12: // $bb12
        var $77=HEAP[$self_addr]; //@line 764 "zlibmodule.c"
        var $78=(($77+64)&4294967295); //@line 764 "zlibmodule.c"
        var $79=HEAP[$78]; //@line 764 "zlibmodule.c"
        var $80=HEAP[$retval1]; //@line 764 "zlibmodule.c"
        var $81=(($80+64)&4294967295); //@line 764 "zlibmodule.c"
        HEAP[$81]=$79; //@line 764 "zlibmodule.c"
        var $82=HEAP[$self_addr]; //@line 765 "zlibmodule.c"
        var $83=(($82+68)&4294967295); //@line 765 "zlibmodule.c"
        var $84=HEAP[$83]; //@line 765 "zlibmodule.c"
        var $85=HEAP[$retval1]; //@line 765 "zlibmodule.c"
        var $86=(($85+68)&4294967295); //@line 765 "zlibmodule.c"
        HEAP[$86]=$84; //@line 765 "zlibmodule.c"
        var $87=HEAP[$retval1]; //@line 768 "zlibmodule.c"
        var $88=(($87+72)&4294967295); //@line 768 "zlibmodule.c"
        HEAP[$88]=1; //@line 768 "zlibmodule.c"
        var $89=HEAP[$retval1]; //@line 771 "zlibmodule.c"
        var $90=$89; //@line 771 "zlibmodule.c"
        HEAP[$0]=$90; //@line 771 "zlibmodule.c"
        __label__ = 17; break; //@line 771 "zlibmodule.c"
      case 13: // $error
        var $91=HEAP[$retval1]; //@line 775 "zlibmodule.c"
        var $92=($91)!=0; //@line 775 "zlibmodule.c"
        if ($92) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 775 "zlibmodule.c"
      case 14: // $bb13
        var $93=HEAP[$retval1]; //@line 775 "zlibmodule.c"
        var $94=$93; //@line 775 "zlibmodule.c"
        var $95=(($94)&4294967295); //@line 775 "zlibmodule.c"
        var $96=HEAP[$95]; //@line 775 "zlibmodule.c"
        var $97=((($96) - 1)&4294967295); //@line 775 "zlibmodule.c"
        var $98=(($94)&4294967295); //@line 775 "zlibmodule.c"
        HEAP[$98]=$97; //@line 775 "zlibmodule.c"
        var $99=(($94)&4294967295); //@line 775 "zlibmodule.c"
        var $100=HEAP[$99]; //@line 775 "zlibmodule.c"
        var $101=((($100))|0)==0; //@line 775 "zlibmodule.c"
        if ($101) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 775 "zlibmodule.c"
      case 15: // $bb14
        var $102=HEAP[$retval1]; //@line 775 "zlibmodule.c"
        var $103=$102; //@line 775 "zlibmodule.c"
        var $104=(($103+4)&4294967295); //@line 775 "zlibmodule.c"
        var $105=HEAP[$104]; //@line 775 "zlibmodule.c"
        var $106=(($105+24)&4294967295); //@line 775 "zlibmodule.c"
        var $107=HEAP[$106]; //@line 775 "zlibmodule.c"
        var $108=HEAP[$retval1]; //@line 775 "zlibmodule.c"
        var $109=$108; //@line 775 "zlibmodule.c"
        FUNCTION_TABLE[$107]($109); //@line 775 "zlibmodule.c"
        __label__ = 16; break; //@line 775 "zlibmodule.c"
      case 16: // $bb15
        HEAP[$0]=0; //@line 776 "zlibmodule.c"
        __label__ = 17; break; //@line 776 "zlibmodule.c"
      case 17: // $bb16
        var $110=HEAP[$0]; //@line 738 "zlibmodule.c"
        HEAP[$retval]=$110; //@line 738 "zlibmodule.c"
        __label__ = 18; break; //@line 738 "zlibmodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 738 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 738 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_unflush($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $err=__stackBase__+16;
        var $length=__stackBase__+20;
        var $retval1=__stackBase__+24;
        var $start_total_out=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$length]=16384; //@line 790 "zlibmodule.c"
        HEAP[$retval1]=0; //@line 791 "zlibmodule.c"
        var $1=HEAP[$args_addr]; //@line 794 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str30)&4294967295), $length); //@line 794 "zlibmodule.c"
        var $3=((($2))|0)==0; //@line 794 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 794 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 795 "zlibmodule.c"
        __label__ = 19; break; //@line 795 "zlibmodule.c"
      case 2: // $bb2
        var $4=HEAP[$length]; //@line 796 "zlibmodule.c"
        var $5=((($4))|0) <= 0; //@line 796 "zlibmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 796 "zlibmodule.c"
      case 3: // $bb3
        var $6=HEAP[_PyExc_ValueError]; //@line 797 "zlibmodule.c"
        _PyErr_SetString($6, ((__str36)&4294967295)); //@line 797 "zlibmodule.c"
        HEAP[$0]=0; //@line 798 "zlibmodule.c"
        __label__ = 19; break; //@line 798 "zlibmodule.c"
      case 4: // $bb4
        var $7=HEAP[$length]; //@line 800 "zlibmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 800 "zlibmodule.c"
        HEAP[$retval1]=$8; //@line 800 "zlibmodule.c"
        var $9=HEAP[$retval1]; //@line 800 "zlibmodule.c"
        var $10=($9)==0; //@line 800 "zlibmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 800 "zlibmodule.c"
      case 5: // $bb5
        HEAP[$0]=0; //@line 801 "zlibmodule.c"
        __label__ = 19; break; //@line 801 "zlibmodule.c"
      case 6: // $bb6
        var $11=HEAP[$self_addr]; //@line 806 "zlibmodule.c"
        var $12=(($11+8)&4294967295); //@line 806 "zlibmodule.c"
        var $13=(($12+20)&4294967295); //@line 806 "zlibmodule.c"
        var $14=HEAP[$13]; //@line 806 "zlibmodule.c"
        HEAP[$start_total_out]=$14; //@line 806 "zlibmodule.c"
        var $15=HEAP[$length]; //@line 807 "zlibmodule.c"
        var $16=HEAP[$self_addr]; //@line 807 "zlibmodule.c"
        var $17=(($16+8)&4294967295); //@line 807 "zlibmodule.c"
        var $18=(($17+16)&4294967295); //@line 807 "zlibmodule.c"
        HEAP[$18]=$15; //@line 807 "zlibmodule.c"
        var $19=HEAP[$retval1]; //@line 808 "zlibmodule.c"
        var $20=$19; //@line 808 "zlibmodule.c"
        var $21=(($20+20)&4294967295); //@line 808 "zlibmodule.c"
        var $22=$21; //@line 808 "zlibmodule.c"
        var $23=HEAP[$self_addr]; //@line 808 "zlibmodule.c"
        var $24=(($23+8)&4294967295); //@line 808 "zlibmodule.c"
        var $25=(($24+12)&4294967295); //@line 808 "zlibmodule.c"
        HEAP[$25]=$22; //@line 808 "zlibmodule.c"
        var $26=HEAP[$self_addr]; //@line 811 "zlibmodule.c"
        var $27=(($26+8)&4294967295); //@line 811 "zlibmodule.c"
        var $28=_inflate($27, 4); //@line 811 "zlibmodule.c"
        HEAP[$err]=$28; //@line 811 "zlibmodule.c"
        __label__ = 9; break; //@line 811 "zlibmodule.c"
      case 7: // $bb7
        var $29=HEAP[$length]; //@line 817 "zlibmodule.c"
        var $30=($29) << 1; //@line 817 "zlibmodule.c"
        var $31=__PyString_Resize($retval1, $30); //@line 817 "zlibmodule.c"
        var $32=((($31))|0) < 0; //@line 817 "zlibmodule.c"
        if ($32) { __label__ = 18; break; } else { __label__ = 8; break; } //@line 817 "zlibmodule.c"
      case 8: // $bb8
        var $33=HEAP[$retval1]; //@line 819 "zlibmodule.c"
        var $34=$33; //@line 819 "zlibmodule.c"
        var $35=(($34+20)&4294967295); //@line 819 "zlibmodule.c"
        var $36=$35; //@line 819 "zlibmodule.c"
        var $37=HEAP[$length]; //@line 819 "zlibmodule.c"
        var $38=(($36+$37)&4294967295); //@line 819 "zlibmodule.c"
        var $39=HEAP[$self_addr]; //@line 819 "zlibmodule.c"
        var $40=(($39+8)&4294967295); //@line 819 "zlibmodule.c"
        var $41=(($40+12)&4294967295); //@line 819 "zlibmodule.c"
        HEAP[$41]=$38; //@line 819 "zlibmodule.c"
        var $42=HEAP[$length]; //@line 820 "zlibmodule.c"
        var $43=HEAP[$self_addr]; //@line 820 "zlibmodule.c"
        var $44=(($43+8)&4294967295); //@line 820 "zlibmodule.c"
        var $45=(($44+16)&4294967295); //@line 820 "zlibmodule.c"
        HEAP[$45]=$42; //@line 820 "zlibmodule.c"
        var $46=HEAP[$length]; //@line 821 "zlibmodule.c"
        var $47=($46) << 1; //@line 821 "zlibmodule.c"
        HEAP[$length]=$47; //@line 821 "zlibmodule.c"
        var $48=HEAP[$self_addr]; //@line 824 "zlibmodule.c"
        var $49=(($48+8)&4294967295); //@line 824 "zlibmodule.c"
        var $50=_inflate($49, 4); //@line 824 "zlibmodule.c"
        HEAP[$err]=$50; //@line 824 "zlibmodule.c"
        __label__ = 9; break; //@line 824 "zlibmodule.c"
      case 9: // $bb9
        var $51=HEAP[$err]; //@line 816 "zlibmodule.c"
        var $52=((($51))|0)==0; //@line 816 "zlibmodule.c"
        if ($52) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 816 "zlibmodule.c"
      case 10: // $bb10
        var $53=HEAP[$err]; //@line 816 "zlibmodule.c"
        var $54=((($53))|0)==-5; //@line 816 "zlibmodule.c"
        if ($54) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 816 "zlibmodule.c"
      case 11: // $bb11
        var $55=HEAP[$self_addr]; //@line 816 "zlibmodule.c"
        var $56=(($55+8)&4294967295); //@line 816 "zlibmodule.c"
        var $57=(($56+16)&4294967295); //@line 816 "zlibmodule.c"
        var $58=HEAP[$57]; //@line 816 "zlibmodule.c"
        var $59=((($58))|0)==0; //@line 816 "zlibmodule.c"
        if ($59) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 816 "zlibmodule.c"
      case 12: // $bb12
        var $60=HEAP[$err]; //@line 831 "zlibmodule.c"
        var $61=((($60))|0)==1; //@line 831 "zlibmodule.c"
        if ($61) { __label__ = 13; break; } else { __label__ = 17; break; } //@line 831 "zlibmodule.c"
      case 13: // $bb13
        var $62=HEAP[$self_addr]; //@line 832 "zlibmodule.c"
        var $63=(($62+8)&4294967295); //@line 832 "zlibmodule.c"
        var $64=_inflateEnd($63); //@line 832 "zlibmodule.c"
        HEAP[$err]=$64; //@line 832 "zlibmodule.c"
        var $65=HEAP[$self_addr]; //@line 833 "zlibmodule.c"
        var $66=(($65+72)&4294967295); //@line 833 "zlibmodule.c"
        HEAP[$66]=0; //@line 833 "zlibmodule.c"
        var $67=HEAP[$err]; //@line 834 "zlibmodule.c"
        var $68=((($67))|0)!=0; //@line 834 "zlibmodule.c"
        if ($68) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 834 "zlibmodule.c"
      case 14: // $bb14
        var $69=HEAP[$self_addr]; //@line 835 "zlibmodule.c"
        var $70=(($69+8)&4294967295); //@line 835 "zlibmodule.c"
        var $71=HEAP[$err]; //@line 835 "zlibmodule.c"
        _zlib_error($70, $71, ((__str37)&4294967295)); //@line 835 "zlibmodule.c"
        var $72=HEAP[$retval1]; //@line 836 "zlibmodule.c"
        var $73=(($72)&4294967295); //@line 836 "zlibmodule.c"
        var $74=HEAP[$73]; //@line 836 "zlibmodule.c"
        var $75=((($74) - 1)&4294967295); //@line 836 "zlibmodule.c"
        var $76=(($72)&4294967295); //@line 836 "zlibmodule.c"
        HEAP[$76]=$75; //@line 836 "zlibmodule.c"
        var $77=(($72)&4294967295); //@line 836 "zlibmodule.c"
        var $78=HEAP[$77]; //@line 836 "zlibmodule.c"
        var $79=((($78))|0)==0; //@line 836 "zlibmodule.c"
        if ($79) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 836 "zlibmodule.c"
      case 15: // $bb15
        var $80=HEAP[$retval1]; //@line 836 "zlibmodule.c"
        var $81=(($80+4)&4294967295); //@line 836 "zlibmodule.c"
        var $82=HEAP[$81]; //@line 836 "zlibmodule.c"
        var $83=(($82+24)&4294967295); //@line 836 "zlibmodule.c"
        var $84=HEAP[$83]; //@line 836 "zlibmodule.c"
        var $85=HEAP[$retval1]; //@line 836 "zlibmodule.c"
        FUNCTION_TABLE[$84]($85); //@line 836 "zlibmodule.c"
        __label__ = 16; break; //@line 836 "zlibmodule.c"
      case 16: // $bb16
        HEAP[$retval1]=0; //@line 837 "zlibmodule.c"
        __label__ = 18; break; //@line 837 "zlibmodule.c"
      case 17: // $bb17
        var $86=HEAP[$self_addr]; //@line 841 "zlibmodule.c"
        var $87=(($86+8)&4294967295); //@line 841 "zlibmodule.c"
        var $88=(($87+20)&4294967295); //@line 841 "zlibmodule.c"
        var $89=HEAP[$88]; //@line 841 "zlibmodule.c"
        var $90=HEAP[$start_total_out]; //@line 841 "zlibmodule.c"
        var $91=((($89) - ($90))&4294967295); //@line 841 "zlibmodule.c"
        var $92=__PyString_Resize($retval1, $91); //@line 841 "zlibmodule.c"
        __label__ = 18; break; //@line 843 "zlibmodule.c"
      case 18: // $error
        var $93=HEAP[$retval1]; //@line 847 "zlibmodule.c"
        HEAP[$0]=$93; //@line 847 "zlibmodule.c"
        __label__ = 19; break; //@line 847 "zlibmodule.c"
      case 19: // $bb18
        var $94=HEAP[$0]; //@line 795 "zlibmodule.c"
        HEAP[$retval]=$94; //@line 795 "zlibmodule.c"
        __label__ = 20; break; //@line 795 "zlibmodule.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 795 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 795 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Comp_getattr($self, $name) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $name_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$name_addr]=$name;
        var $1=HEAP[$self_addr]; //@line 882 "zlibmodule.c"
        var $2=$1; //@line 882 "zlibmodule.c"
        var $3=HEAP[$name_addr]; //@line 882 "zlibmodule.c"
        var $4=_Py_FindMethod(((_comp_methods)&4294967295), $2, $3); //@line 882 "zlibmodule.c"
        HEAP[$0]=$4; //@line 882 "zlibmodule.c"
        var $5=HEAP[$0]; //@line 882 "zlibmodule.c"
        HEAP[$retval]=$5; //@line 882 "zlibmodule.c"
        __label__ = 1; break; //@line 882 "zlibmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 882 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 882 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Decomp_getattr($self, $name) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $name_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $retval1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$name_addr]=$name;
        var $1=HEAP[$name_addr]; //@line 892 "zlibmodule.c"
        var $2=_strcmp($1, ((__str42)&4294967295)); //@line 892 "zlibmodule.c"
        var $3=((($2))|0)==0; //@line 892 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 892 "zlibmodule.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 893 "zlibmodule.c"
        var $5=(($4+64)&4294967295); //@line 893 "zlibmodule.c"
        var $6=HEAP[$5]; //@line 893 "zlibmodule.c"
        var $7=(($6)&4294967295); //@line 893 "zlibmodule.c"
        var $8=HEAP[$7]; //@line 893 "zlibmodule.c"
        var $9=((($8) + 1)&4294967295); //@line 893 "zlibmodule.c"
        var $10=(($6)&4294967295); //@line 893 "zlibmodule.c"
        HEAP[$10]=$9; //@line 893 "zlibmodule.c"
        var $11=HEAP[$self_addr]; //@line 894 "zlibmodule.c"
        var $12=(($11+64)&4294967295); //@line 894 "zlibmodule.c"
        var $13=HEAP[$12]; //@line 894 "zlibmodule.c"
        HEAP[$retval1]=$13; //@line 894 "zlibmodule.c"
        __label__ = 5; break; //@line 894 "zlibmodule.c"
      case 2: // $bb2
        var $14=HEAP[$name_addr]; //@line 895 "zlibmodule.c"
        var $15=_strcmp($14, ((__str43)&4294967295)); //@line 895 "zlibmodule.c"
        var $16=((($15))|0)==0; //@line 895 "zlibmodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 895 "zlibmodule.c"
      case 3: // $bb3
        var $17=HEAP[$self_addr]; //@line 896 "zlibmodule.c"
        var $18=(($17+68)&4294967295); //@line 896 "zlibmodule.c"
        var $19=HEAP[$18]; //@line 896 "zlibmodule.c"
        var $20=(($19)&4294967295); //@line 896 "zlibmodule.c"
        var $21=HEAP[$20]; //@line 896 "zlibmodule.c"
        var $22=((($21) + 1)&4294967295); //@line 896 "zlibmodule.c"
        var $23=(($19)&4294967295); //@line 896 "zlibmodule.c"
        HEAP[$23]=$22; //@line 896 "zlibmodule.c"
        var $24=HEAP[$self_addr]; //@line 897 "zlibmodule.c"
        var $25=(($24+68)&4294967295); //@line 897 "zlibmodule.c"
        var $26=HEAP[$25]; //@line 897 "zlibmodule.c"
        HEAP[$retval1]=$26; //@line 897 "zlibmodule.c"
        __label__ = 5; break; //@line 897 "zlibmodule.c"
      case 4: // $bb4
        var $27=HEAP[$self_addr]; //@line 899 "zlibmodule.c"
        var $28=$27; //@line 899 "zlibmodule.c"
        var $29=HEAP[$name_addr]; //@line 899 "zlibmodule.c"
        var $30=_Py_FindMethod(((_Decomp_methods)&4294967295), $28, $29); //@line 899 "zlibmodule.c"
        HEAP[$retval1]=$30; //@line 899 "zlibmodule.c"
        __label__ = 5; break; //@line 899 "zlibmodule.c"
      case 5: // $bb5
        var $31=HEAP[$retval1]; //@line 903 "zlibmodule.c"
        HEAP[$0]=$31; //@line 903 "zlibmodule.c"
        var $32=HEAP[$0]; //@line 903 "zlibmodule.c"
        HEAP[$retval]=$32; //@line 903 "zlibmodule.c"
        __label__ = 6; break; //@line 903 "zlibmodule.c"
      case 6: // $return
        var $retval6=HEAP[$retval]; //@line 903 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 903 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_adler32($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $adler32val=__stackBase__+16;
        var $buf=__stackBase__+20;
        var $len=__stackBase__+24;
        var $signed_val=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$adler32val]=1; //@line 915 "zlibmodule.c"
        var $1=HEAP[$args_addr]; //@line 919 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str44)&4294967295), $buf, $len, $adler32val); //@line 919 "zlibmodule.c"
        var $3=((($2))|0)==0; //@line 919 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 919 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 920 "zlibmodule.c"
        __label__ = 3; break; //@line 920 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$len]; //@line 925 "zlibmodule.c"
        var $5=HEAP[$buf]; //@line 925 "zlibmodule.c"
        var $6=HEAP[$adler32val]; //@line 925 "zlibmodule.c"
        var $7=_adler32($6, $5, $4); //@line 925 "zlibmodule.c"
        HEAP[$signed_val]=$7; //@line 925 "zlibmodule.c"
        var $8=HEAP[$signed_val]; //@line 926 "zlibmodule.c"
        var $9=_PyInt_FromLong($8); //@line 926 "zlibmodule.c"
        HEAP[$0]=$9; //@line 926 "zlibmodule.c"
        __label__ = 3; break; //@line 926 "zlibmodule.c"
      case 3: // $bb2
        var $10=HEAP[$0]; //@line 920 "zlibmodule.c"
        HEAP[$retval]=$10; //@line 920 "zlibmodule.c"
        __label__ = 4; break; //@line 920 "zlibmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 920 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 920 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_crc32($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $crc32val=__stackBase__+16;
        var $buf=__stackBase__+20;
        var $len=__stackBase__+24;
        var $signed_val=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$crc32val]=0; //@line 938 "zlibmodule.c"
        var $1=HEAP[$args_addr]; //@line 942 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str45)&4294967295), $buf, $len, $crc32val); //@line 942 "zlibmodule.c"
        var $3=((($2))|0)==0; //@line 942 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 942 "zlibmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 943 "zlibmodule.c"
        __label__ = 3; break; //@line 943 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$len]; //@line 948 "zlibmodule.c"
        var $5=HEAP[$buf]; //@line 948 "zlibmodule.c"
        var $6=HEAP[$crc32val]; //@line 948 "zlibmodule.c"
        var $7=_crc32($6, $5, $4); //@line 948 "zlibmodule.c"
        HEAP[$signed_val]=$7; //@line 948 "zlibmodule.c"
        var $8=HEAP[$signed_val]; //@line 949 "zlibmodule.c"
        var $9=_PyInt_FromLong($8); //@line 949 "zlibmodule.c"
        HEAP[$0]=$9; //@line 949 "zlibmodule.c"
        __label__ = 3; break; //@line 949 "zlibmodule.c"
      case 3: // $bb2
        var $10=HEAP[$0]; //@line 943 "zlibmodule.c"
        HEAP[$retval]=$10; //@line 943 "zlibmodule.c"
        __label__ = 4; break; //@line 943 "zlibmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 943 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 943 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initzlib() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $ver=__stackBase__+4;
        var $_alloca_point_=0;
        var $0=((_Comptype+4)&4294967295); //@line 1021 "zlibmodule.c"
        HEAP[$0]=_PyType_Type; //@line 1021 "zlibmodule.c"
        var $1=((_Decomptype+4)&4294967295); //@line 1022 "zlibmodule.c"
        HEAP[$1]=_PyType_Type; //@line 1022 "zlibmodule.c"
        var $2=_Py_InitModule4(((__str52)&4294967295), ((_zlib_methods)&4294967295), ((_zlib_module_documentation)&4294967295), 0, 1013); //@line 1023 "zlibmodule.c"
        HEAP[$m]=$2; //@line 1023 "zlibmodule.c"
        var $3=HEAP[$m]; //@line 1026 "zlibmodule.c"
        var $4=($3)==0; //@line 1026 "zlibmodule.c"
        if ($4) { __label__ = 6; break; } else { __label__ = 1; break; } //@line 1026 "zlibmodule.c"
      case 1: // $bb
        var $5=_PyErr_NewException(((__str53)&4294967295), 0, 0); //@line 1029 "zlibmodule.c"
        HEAP[_ZlibError]=$5; //@line 1029 "zlibmodule.c"
        var $6=HEAP[_ZlibError]; //@line 1030 "zlibmodule.c"
        var $7=($6)!=0; //@line 1030 "zlibmodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1030 "zlibmodule.c"
      case 2: // $bb1
        var $8=HEAP[_ZlibError]; //@line 1031 "zlibmodule.c"
        var $9=(($8)&4294967295); //@line 1031 "zlibmodule.c"
        var $10=HEAP[$9]; //@line 1031 "zlibmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 1031 "zlibmodule.c"
        var $12=(($8)&4294967295); //@line 1031 "zlibmodule.c"
        HEAP[$12]=$11; //@line 1031 "zlibmodule.c"
        var $13=HEAP[_ZlibError]; //@line 1032 "zlibmodule.c"
        var $14=HEAP[$m]; //@line 1032 "zlibmodule.c"
        var $15=_PyModule_AddObject($14, ((__str54)&4294967295), $13); //@line 1032 "zlibmodule.c"
        __label__ = 3; break; //@line 1032 "zlibmodule.c"
      case 3: // $bb2
        var $16=HEAP[$m]; //@line 1034 "zlibmodule.c"
        var $17=_PyModule_AddIntConstant($16, ((__str55)&4294967295), 15); //@line 1034 "zlibmodule.c"
        var $18=HEAP[$m]; //@line 1035 "zlibmodule.c"
        var $19=_PyModule_AddIntConstant($18, ((__str56)&4294967295), 8); //@line 1035 "zlibmodule.c"
        var $20=HEAP[$m]; //@line 1036 "zlibmodule.c"
        var $21=_PyModule_AddIntConstant($20, ((__str57)&4294967295), 8); //@line 1036 "zlibmodule.c"
        var $22=HEAP[$m]; //@line 1037 "zlibmodule.c"
        var $23=_PyModule_AddIntConstant($22, ((__str58)&4294967295), 1); //@line 1037 "zlibmodule.c"
        var $24=HEAP[$m]; //@line 1038 "zlibmodule.c"
        var $25=_PyModule_AddIntConstant($24, ((__str59)&4294967295), 9); //@line 1038 "zlibmodule.c"
        var $26=HEAP[$m]; //@line 1039 "zlibmodule.c"
        var $27=_PyModule_AddIntConstant($26, ((__str60)&4294967295), -1); //@line 1039 "zlibmodule.c"
        var $28=HEAP[$m]; //@line 1040 "zlibmodule.c"
        var $29=_PyModule_AddIntConstant($28, ((__str61)&4294967295), 1); //@line 1040 "zlibmodule.c"
        var $30=HEAP[$m]; //@line 1041 "zlibmodule.c"
        var $31=_PyModule_AddIntConstant($30, ((__str62)&4294967295), 2); //@line 1041 "zlibmodule.c"
        var $32=HEAP[$m]; //@line 1042 "zlibmodule.c"
        var $33=_PyModule_AddIntConstant($32, ((__str63)&4294967295), 0); //@line 1042 "zlibmodule.c"
        var $34=HEAP[$m]; //@line 1044 "zlibmodule.c"
        var $35=_PyModule_AddIntConstant($34, ((__str64)&4294967295), 4); //@line 1044 "zlibmodule.c"
        var $36=HEAP[$m]; //@line 1045 "zlibmodule.c"
        var $37=_PyModule_AddIntConstant($36, ((__str65)&4294967295), 0); //@line 1045 "zlibmodule.c"
        var $38=HEAP[$m]; //@line 1046 "zlibmodule.c"
        var $39=_PyModule_AddIntConstant($38, ((__str66)&4294967295), 2); //@line 1046 "zlibmodule.c"
        var $40=HEAP[$m]; //@line 1047 "zlibmodule.c"
        var $41=_PyModule_AddIntConstant($40, ((__str67)&4294967295), 3); //@line 1047 "zlibmodule.c"
        var $42=_PyString_FromString(((__str8)&4294967295)); //@line 1049 "zlibmodule.c"
        HEAP[$ver]=$42; //@line 1049 "zlibmodule.c"
        var $43=HEAP[$ver]; //@line 1050 "zlibmodule.c"
        var $44=($43)!=0; //@line 1050 "zlibmodule.c"
        if ($44) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1050 "zlibmodule.c"
      case 4: // $bb3
        var $45=HEAP[$m]; //@line 1051 "zlibmodule.c"
        var $46=HEAP[$ver]; //@line 1051 "zlibmodule.c"
        var $47=_PyModule_AddObject($45, ((__str68)&4294967295), $46); //@line 1051 "zlibmodule.c"
        __label__ = 5; break; //@line 1051 "zlibmodule.c"
      case 5: // $bb4
        var $48=HEAP[$m]; //@line 1053 "zlibmodule.c"
        var $49=_PyModule_AddStringConstant($48, ((__str69)&4294967295), ((__str70)&4294967295)); //@line 1053 "zlibmodule.c"
        __label__ = 6; break; //@line 1053 "zlibmodule.c"
      case 6: // $bb5
        __label__ = 7; break; //@line 1027 "zlibmodule.c"
      case 7: // $return
        STACKTOP = __stackBase__;
        return; //@line 1027 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initzlib"] = _initzlib;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_PyZlib_objcompress,0,_PyZlib_flush,0,_PyZlib_copy,0,_PyZlib_objdecompress,0,_PyZlib_unflush,0,_PyZlib_uncopy,0,_PyZlib_adler32,0,_PyZlib_compress,0,_PyZlib_compressobj,0,_PyZlib_crc32,0,_PyZlib_decompress,0,_PyZlib_decompressobj,0,_Comp_dealloc,0,_Comp_getattr,0,_Decomp_dealloc,0,_Decomp_getattr,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([105,110,99,111,109,112,108,101,116,101,32,111,114,32,116,114,117,110,99,97,116,101,100,32,115,116,114,101,97,109,0] /* incomplete or trunca */, "i8", ALLOC_NORMAL);
__str1=allocate([105,110,99,111,110,115,105,115,116,101,110,116,32,115,116,114,101,97,109,32,115,116,97,116,101,0] /* inconsistent stream  */, "i8", ALLOC_NORMAL);
__str2=allocate([105,110,118,97,108,105,100,32,105,110,112,117,116,32,100,97,116,97,0] /* invalid input data\0 */, "i8", ALLOC_NORMAL);
_ZlibError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str3=allocate([69,114,114,111,114,32,37,100,32,37,115,0] /* Error %d %s\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([69,114,114,111,114,32,37,100,32,37,115,58,32,37,46,50,48,48,115,0] /* Error %d %s: %.200s\ */, "i8", ALLOC_NORMAL);
_compressobj__doc__=allocate([99,111,109,112,114,101,115,115,111,98,106,40,91,108,101,118,101,108,93,41,32,45,45,32,82,101,116,117,114,110,32,97,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,32,108,101,118,101,108,32,105,115,32,116,104,101,32,99,111,109,112,114,101,115,115,105,111,110,32,108,101,118,101,108,44,32,105,110,32,49,45,57,46,0] /* compressobj([level]) */, "i8", ALLOC_NORMAL);
_decompressobj__doc__=allocate([100,101,99,111,109,112,114,101,115,115,111,98,106,40,91,119,98,105,116,115,93,41,32,45,45,32,82,101,116,117,114,110,32,97,32,100,101,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,32,119,98,105,116,115,32,105,115,32,116,104,101,32,119,105,110,100,111,119,32,98,117,102,102,101,114,32,115,105,122,101,46,0] /* decompressobj([wbits */, "i8", ALLOC_NORMAL);
__str5=allocate(1, "i8", ALLOC_NORMAL);
_compress__doc__=allocate([99,111,109,112,114,101,115,115,40,115,116,114,105,110,103,91,44,32,108,101,118,101,108,93,41,32,45,45,32,82,101,116,117,114,110,101,100,32,99,111,109,112,114,101,115,115,101,100,32,115,116,114,105,110,103,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,32,108,101,118,101,108,32,105,115,32,116,104,101,32,99,111,109,112,114,101,115,115,105,111,110,32,108,101,118,101,108,44,32,105,110,32,49,45,57,46,0] /* compress(string[, le */, "i8", ALLOC_NORMAL);
__str6=allocate([115,35,124,105,58,99,111,109,112,114,101,115,115,0] /* s#|i:compress\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([67,97,110,39,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,116,111,32,99,111,109,112,114,101,115,115,32,100,97,116,97,0] /* Can't allocate memor */, "i8", ALLOC_NORMAL);
__str8=allocate([49,46,50,46,53,0] /* 1.2.5\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([79,117,116,32,111,102,32,109,101,109,111,114,121,32,119,104,105,108,101,32,99,111,109,112,114,101,115,115,105,110,103,32,100,97,116,97,0] /* Out of memory while  */, "i8", ALLOC_NORMAL);
__str10=allocate([66,97,100,32,99,111,109,112,114,101,115,115,105,111,110,32,108,101,118,101,108,0] /* Bad compression leve */, "i8", ALLOC_NORMAL);
__str11=allocate([119,104,105,108,101,32,99,111,109,112,114,101,115,115,105,110,103,32,100,97,116,97,0] /* while compressing da */, "i8", ALLOC_NORMAL);
__str12=allocate([119,104,105,108,101,32,102,105,110,105,115,104,105,110,103,32,99,111,109,112,114,101,115,115,105,111,110,0] /* while finishing comp */, "i8", ALLOC_NORMAL);
_decompress__doc__=allocate([100,101,99,111,109,112,114,101,115,115,40,115,116,114,105,110,103,91,44,32,119,98,105,116,115,91,44,32,98,117,102,115,105,122,101,93,93,41,32,45,45,32,82,101,116,117,114,110,32,100,101,99,111,109,112,114,101,115,115,101,100,32,115,116,114,105,110,103,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,32,119,98,105,116,115,32,105,115,32,116,104,101,32,119,105,110,100,111,119,32,98,117,102,102,101,114,32,115,105,122,101,46,32,32,79,112,116,105,111,110,97,108,32,97,114,103,32,98,117,102,115,105,122,101,32,105,115,10,116,104,101,32,105,110,105,116,105,97,108,32,111,117,116,112,117,116,32,98,117,102,102,101,114,32,115,105,122,101,46,0] /* decompress(string[,  */, "i8", ALLOC_NORMAL);
__str13=allocate([115,35,124,105,110,58,100,101,99,111,109,112,114,101,115,115,0] /* s#|in:decompress\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([79,117,116,32,111,102,32,109,101,109,111,114,121,32,119,104,105,108,101,32,100,101,99,111,109,112,114,101,115,115,105,110,103,32,100,97,116,97,0] /* Out of memory while  */, "i8", ALLOC_NORMAL);
__str15=allocate([119,104,105,108,101,32,112,114,101,112,97,114,105,110,103,32,116,111,32,100,101,99,111,109,112,114,101,115,115,32,100,97,116,97,0] /* while preparing to d */, "i8", ALLOC_NORMAL);
__str16=allocate([119,104,105,108,101,32,100,101,99,111,109,112,114,101,115,115,105,110,103,32,100,97,116,97,0] /* while decompressing  */, "i8", ALLOC_NORMAL);
__str17=allocate([119,104,105,108,101,32,102,105,110,105,115,104,105,110,103,32,100,97,116,97,32,100,101,99,111,109,112,114,101,115,115,105,111,110,0] /* while finishing data */, "i8", ALLOC_NORMAL);
__str18=allocate([124,105,105,105,105,105,58,99,111,109,112,114,101,115,115,111,98,106,0] /* |iiiii:compressobj\0 */, "i8", ALLOC_NORMAL);
__str19=allocate([67,97,110,39,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,0] /* Can't allocate memor */, "i8", ALLOC_NORMAL);
__str20=allocate([73,110,118,97,108,105,100,32,105,110,105,116,105,97,108,105,122,97,116,105,111,110,32,111,112,116,105,111,110,0] /* Invalid initializati */, "i8", ALLOC_NORMAL);
__str21=allocate([119,104,105,108,101,32,99,114,101,97,116,105,110,103,32,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,0] /* while creating compr */, "i8", ALLOC_NORMAL);
__str22=allocate([124,105,58,100,101,99,111,109,112,114,101,115,115,111,98,106,0] /* |i:decompressobj\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([67,97,110,39,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,100,101,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,0] /* Can't allocate memor */, "i8", ALLOC_NORMAL);
__str24=allocate([119,104,105,108,101,32,99,114,101,97,116,105,110,103,32,100,101,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,0] /* while creating decom */, "i8", ALLOC_NORMAL);
_comp_compress__doc__=allocate([99,111,109,112,114,101,115,115,40,100,97,116,97,41,32,45,45,32,82,101,116,117,114,110,32,97,32,115,116,114,105,110,103,32,99,111,110,116,97,105,110,105,110,103,32,100,97,116,97,32,99,111,109,112,114,101,115,115,101,100,46,10,10,65,102,116,101,114,32,99,97,108,108,105,110,103,32,116,104,105,115,32,102,117,110,99,116,105,111,110,44,32,115,111,109,101,32,111,102,32,116,104,101,32,105,110,112,117,116,32,100,97,116,97,32,109,97,121,32,115,116,105,108,108,10,98,101,32,115,116,111,114,101,100,32,105,110,32,105,110,116,101,114,110,97,108,32,98,117,102,102,101,114,115,32,102,111,114,32,108,97,116,101,114,32,112,114,111,99,101,115,115,105,110,103,46,10,67,97,108,108,32,116,104,101,32,102,108,117,115,104,40,41,32,109,101,116,104,111,100,32,116,111,32,99,108,101,97,114,32,116,104,101,115,101,32,98,117,102,102,101,114,115,46,0] /* compress(data) -- Re */, "i8", ALLOC_NORMAL);
__str25=allocate([115,35,58,99,111,109,112,114,101,115,115,0] /* s#:compress\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([119,104,105,108,101,32,99,111,109,112,114,101,115,115,105,110,103,0] /* while compressing\00 */, "i8", ALLOC_NORMAL);
_decomp_decompress__doc__=allocate([100,101,99,111,109,112,114,101,115,115,40,100,97,116,97,44,32,109,97,120,95,108,101,110,103,116,104,41,32,45,45,32,82,101,116,117,114,110,32,97,32,115,116,114,105,110,103,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,100,101,99,111,109,112,114,101,115,115,101,100,10,118,101,114,115,105,111,110,32,111,102,32,116,104,101,32,100,97,116,97,46,10,10,65,102,116,101,114,32,99,97,108,108,105,110,103,32,116,104,105,115,32,102,117,110,99,116,105,111,110,44,32,115,111,109,101,32,111,102,32,116,104,101,32,105,110,112,117,116,32,100,97,116,97,32,109,97,121,32,115,116,105,108,108,32,98,101,32,115,116,111,114,101,100,32,105,110,10,105,110,116,101,114,110,97,108,32,98,117,102,102,101,114,115,32,102,111,114,32,108,97,116,101,114,32,112,114,111,99,101,115,115,105,110,103,46,10,67,97,108,108,32,116,104,101,32,102,108,117,115,104,40,41,32,109,101,116,104,111,100,32,116,111,32,99,108,101,97,114,32,116,104,101,115,101,32,98,117,102,102,101,114,115,46,10,73,102,32,116,104,101,32,109,97,120,95,108,101,110,103,116,104,32,112,97,114,97,109,101,116,101,114,32,105,115,32,115,112,101,99,105,102,105,101,100,32,116,104,101,110,32,116,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,119,105,108,108,32,98,101,10,110,111,32,108,111,110,103,101,114,32,116,104,97,110,32,109,97,120,95,108,101,110,103,116,104,46,32,32,85,110,99,111,110,115,117,109,101,100,32,105,110,112,117,116,32,100,97,116,97,32,119,105,108,108,32,98,101,32,115,116,111,114,101,100,32,105,110,10,116,104,101,32,117,110,99,111,110,115,117,109,101,100,95,116,97,105,108,32,97,116,116,114,105,98,117,116,101,46,0] /* decompress(data, max */, "i8", ALLOC_NORMAL);
__str27=allocate([115,35,124,105,58,100,101,99,111,109,112,114,101,115,115,0] /* s#|i:decompress\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([109,97,120,95,108,101,110,103,116,104,32,109,117,115,116,32,98,101,32,103,114,101,97,116,101,114,32,116,104,97,110,32,122,101,114,111,0] /* max_length must be g */, "i8", ALLOC_NORMAL);
__str29=allocate([119,104,105,108,101,32,100,101,99,111,109,112,114,101,115,115,105,110,103,0] /* while decompressing\ */, "i8", ALLOC_NORMAL);
_comp_flush__doc__=allocate([102,108,117,115,104,40,32,91,109,111,100,101,93,32,41,32,45,45,32,82,101,116,117,114,110,32,97,32,115,116,114,105,110,103,32,99,111,110,116,97,105,110,105,110,103,32,97,110,121,32,114,101,109,97,105,110,105,110,103,32,99,111,109,112,114,101,115,115,101,100,32,100,97,116,97,46,10,10,109,111,100,101,32,99,97,110,32,98,101,32,111,110,101,32,111,102,32,116,104,101,32,99,111,110,115,116,97,110,116,115,32,90,95,83,89,78,67,95,70,76,85,83,72,44,32,90,95,70,85,76,76,95,70,76,85,83,72,44,32,90,95,70,73,78,73,83,72,59,32,116,104,101,10,100,101,102,97,117,108,116,32,118,97,108,117,101,32,117,115,101,100,32,119,104,101,110,32,109,111,100,101,32,105,115,32,110,111,116,32,115,112,101,99,105,102,105,101,100,32,105,115,32,90,95,70,73,78,73,83,72,46,10,73,102,32,109,111,100,101,32,61,61,32,90,95,70,73,78,73,83,72,44,32,116,104,101,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,32,99,97,110,32,110,111,32,108,111,110,103,101,114,32,98,101,32,117,115,101,100,32,97,102,116,101,114,10,99,97,108,108,105,110,103,32,116,104,101,32,102,108,117,115,104,40,41,32,109,101,116,104,111,100,46,32,32,79,116,104,101,114,119,105,115,101,44,32,109,111,114,101,32,100,97,116,97,32,99,97,110,32,115,116,105,108,108,32,98,101,32,99,111,109,112,114,101,115,115,101,100,46,0] /* flush( [mode] ) -- R */, "i8", ALLOC_NORMAL);
__str30=allocate([124,105,58,102,108,117,115,104,0] /* |i:flush\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([102,114,111,109,32,100,101,102,108,97,116,101,69,110,100,40,41,0] /* from deflateEnd()\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([119,104,105,108,101,32,102,108,117,115,104,105,110,103,0] /* while flushing\00 */, "i8", ALLOC_NORMAL);
_comp_copy__doc__=allocate([99,111,112,121,40,41,32,45,45,32,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,46,0] /* copy() -- Return a c */, "i8", ALLOC_NORMAL);
__str33=allocate([73,110,99,111,110,115,105,115,116,101,110,116,32,115,116,114,101,97,109,32,115,116,97,116,101,0] /* Inconsistent stream  */, "i8", ALLOC_NORMAL);
__str34=allocate([119,104,105,108,101,32,99,111,112,121,105,110,103,32,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,0] /* while copying compre */, "i8", ALLOC_NORMAL);
_decomp_copy__doc__=allocate([99,111,112,121,40,41,32,45,45,32,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,100,101,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,46,0] /* copy() -- Return a c */, "i8", ALLOC_NORMAL);
__str35=allocate([119,104,105,108,101,32,99,111,112,121,105,110,103,32,100,101,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,0] /* while copying decomp */, "i8", ALLOC_NORMAL);
_decomp_flush__doc__=allocate([102,108,117,115,104,40,32,91,108,101,110,103,116,104,93,32,41,32,45,45,32,82,101,116,117,114,110,32,97,32,115,116,114,105,110,103,32,99,111,110,116,97,105,110,105,110,103,32,97,110,121,32,114,101,109,97,105,110,105,110,103,10,100,101,99,111,109,112,114,101,115,115,101,100,32,100,97,116,97,46,32,108,101,110,103,116,104,44,32,105,102,32,103,105,118,101,110,44,32,105,115,32,116,104,101,32,105,110,105,116,105,97,108,32,115,105,122,101,32,111,102,32,116,104,101,10,111,117,116,112,117,116,32,98,117,102,102,101,114,46,10,10,84,104,101,32,100,101,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,32,99,97,110,32,110,111,32,108,111,110,103,101,114,32,98,101,32,117,115,101,100,32,97,102,116,101,114,32,116,104,105,115,32,99,97,108,108,46,0] /* flush( [length] ) -- */, "i8", ALLOC_NORMAL);
__str36=allocate([108,101,110,103,116,104,32,109,117,115,116,32,98,101,32,103,114,101,97,116,101,114,32,116,104,97,110,32,122,101,114,111,0] /* length must be great */, "i8", ALLOC_NORMAL);
__str37=allocate([102,114,111,109,32,105,110,102,108,97,116,101,69,110,100,40,41,0] /* from inflateEnd()\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([99,111,109,112,114,101,115,115,0] /* compress\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([102,108,117,115,104,0] /* flush\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([99,111,112,121,0] /* copy\00 */, "i8", ALLOC_NORMAL);
_comp_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str41=allocate([100,101,99,111,109,112,114,101,115,115,0] /* decompress\00 */, "i8", ALLOC_NORMAL);
_Decomp_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str42=allocate([117,110,117,115,101,100,95,100,97,116,97,0] /* unused_data\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([117,110,99,111,110,115,117,109,101,100,95,116,97,105,108,0] /* unconsumed_tail\00 */, "i8", ALLOC_NORMAL);
_adler32__doc__=allocate([97,100,108,101,114,51,50,40,115,116,114,105,110,103,91,44,32,115,116,97,114,116,93,41,32,45,45,32,67,111,109,112,117,116,101,32,97,110,32,65,100,108,101,114,45,51,50,32,99,104,101,99,107,115,117,109,32,111,102,32,115,116,114,105,110,103,46,10,10,65,110,32,111,112,116,105,111,110,97,108,32,115,116,97,114,116,105,110,103,32,118,97,108,117,101,32,99,97,110,32,98,101,32,115,112,101,99,105,102,105,101,100,46,32,32,84,104,101,32,114,101,116,117,114,110,101,100,32,99,104,101,99,107,115,117,109,32,105,115,10,97,32,115,105,103,110,101,100,32,105,110,116,101,103,101,114,46,0] /* adler32(string[, sta */, "i8", ALLOC_NORMAL);
__str44=allocate([115,35,124,73,58,97,100,108,101,114,51,50,0] /* s#|I:adler32\00 */, "i8", ALLOC_NORMAL);
_crc32__doc__=allocate([99,114,99,51,50,40,115,116,114,105,110,103,91,44,32,115,116,97,114,116,93,41,32,45,45,32,67,111,109,112,117,116,101,32,97,32,67,82,67,45,51,50,32,99,104,101,99,107,115,117,109,32,111,102,32,115,116,114,105,110,103,46,10,10,65,110,32,111,112,116,105,111,110,97,108,32,115,116,97,114,116,105,110,103,32,118,97,108,117,101,32,99,97,110,32,98,101,32,115,112,101,99,105,102,105,101,100,46,32,32,84,104,101,32,114,101,116,117,114,110,101,100,32,99,104,101,99,107,115,117,109,32,105,115,10,97,32,115,105,103,110,101,100,32,105,110,116,101,103,101,114,46,0] /* crc32(string[, start */, "i8", ALLOC_NORMAL);
__str45=allocate([115,35,124,73,58,99,114,99,51,50,0] /* s#|I:crc32\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([97,100,108,101,114,51,50,0] /* adler32\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([99,111,109,112,114,101,115,115,111,98,106,0] /* compressobj\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([99,114,99,51,50,0] /* crc32\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([100,101,99,111,109,112,114,101,115,115,111,98,106,0] /* decompressobj\00 */, "i8", ALLOC_NORMAL);
_zlib_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str50=allocate([122,108,105,98,46,67,111,109,112,114,101,115,115,0] /* zlib.Compress\00 */, "i8", ALLOC_NORMAL);
_Comptype=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str51=allocate([122,108,105,98,46,68,101,99,111,109,112,114,101,115,115,0] /* zlib.Decompress\00 */, "i8", ALLOC_NORMAL);
_Decomptype=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_zlib_module_documentation=allocate([84,104,101,32,102,117,110,99,116,105,111,110,115,32,105,110,32,116,104,105,115,32,109,111,100,117,108,101,32,97,108,108,111,119,32,99,111,109,112,114,101,115,115,105,111,110,32,97,110,100,32,100,101,99,111,109,112,114,101,115,115,105,111,110,32,117,115,105,110,103,32,116,104,101,10,122,108,105,98,32,108,105,98,114,97,114,121,44,32,119,104,105,99,104,32,105,115,32,98,97,115,101,100,32,111,110,32,71,78,85,32,122,105,112,46,10,10,97,100,108,101,114,51,50,40,115,116,114,105,110,103,91,44,32,115,116,97,114,116,93,41,32,45,45,32,67,111,109,112,117,116,101,32,97,110,32,65,100,108,101,114,45,51,50,32,99,104,101,99,107,115,117,109,46,10,99,111,109,112,114,101,115,115,40,115,116,114,105,110,103,91,44,32,108,101,118,101,108,93,41,32,45,45,32,67,111,109,112,114,101,115,115,32,115,116,114,105,110,103,44,32,119,105,116,104,32,99,111,109,112,114,101,115,115,105,111,110,32,108,101,118,101,108,32,105,110,32,49,45,57,46,10,99,111,109,112,114,101,115,115,111,98,106,40,91,108,101,118,101,108,93,41,32,45,45,32,82,101,116,117,114,110,32,97,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,10,99,114,99,51,50,40,115,116,114,105,110,103,91,44,32,115,116,97,114,116,93,41,32,45,45,32,67,111,109,112,117,116,101,32,97,32,67,82,67,45,51,50,32,99,104,101,99,107,115,117,109,46,10,100,101,99,111,109,112,114,101,115,115,40,115,116,114,105,110,103,44,91,119,98,105,116,115,93,44,91,98,117,102,115,105,122,101,93,41,32,45,45,32,68,101,99,111,109,112,114,101,115,115,101,115,32,97,32,99,111,109,112,114,101,115,115,101,100,32,115,116,114,105,110,103,46,10,100,101,99,111,109,112,114,101,115,115,111,98,106,40,91,119,98,105,116,115,93,41,32,45,45,32,82,101,116,117,114,110,32,97,32,100,101,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,10,10,39,119,98,105,116,115,39,32,105,115,32,119,105,110,100,111,119,32,98,117,102,102,101,114,32,115,105,122,101,46,10,67,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,115,32,115,117,112,112,111,114,116,32,99,111,109,112,114,101,115,115,40,41,32,97,110,100,32,102,108,117,115,104,40,41,32,109,101,116,104,111,100,115,59,32,100,101,99,111,109,112,114,101,115,115,111,114,10,111,98,106,101,99,116,115,32,115,117,112,112,111,114,116,32,100,101,99,111,109,112,114,101,115,115,40,41,32,97,110,100,32,102,108,117,115,104,40,41,46,0] /* The functions in thi */, "i8", ALLOC_NORMAL);
__str52=allocate([122,108,105,98,0] /* zlib\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([122,108,105,98,46,101,114,114,111,114,0] /* zlib.error\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([77,65,88,95,87,66,73,84,83,0] /* MAX_WBITS\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([68,69,70,76,65,84,69,68,0] /* DEFLATED\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([68,69,70,95,77,69,77,95,76,69,86,69,76,0] /* DEF_MEM_LEVEL\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([90,95,66,69,83,84,95,83,80,69,69,68,0] /* Z_BEST_SPEED\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([90,95,66,69,83,84,95,67,79,77,80,82,69,83,83,73,79,78,0] /* Z_BEST_COMPRESSION\0 */, "i8", ALLOC_NORMAL);
__str60=allocate([90,95,68,69,70,65,85,76,84,95,67,79,77,80,82,69,83,83,73,79,78,0] /* Z_DEFAULT_COMPRESSIO */, "i8", ALLOC_NORMAL);
__str61=allocate([90,95,70,73,76,84,69,82,69,68,0] /* Z_FILTERED\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([90,95,72,85,70,70,77,65,78,95,79,78,76,89,0] /* Z_HUFFMAN_ONLY\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([90,95,68,69,70,65,85,76,84,95,83,84,82,65,84,69,71,89,0] /* Z_DEFAULT_STRATEGY\0 */, "i8", ALLOC_NORMAL);
__str64=allocate([90,95,70,73,78,73,83,72,0] /* Z_FINISH\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([90,95,78,79,95,70,76,85,83,72,0] /* Z_NO_FLUSH\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([90,95,83,89,78,67,95,70,76,85,83,72,0] /* Z_SYNC_FLUSH\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([90,95,70,85,76,76,95,70,76,85,83,72,0] /* Z_FULL_FLUSH\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([90,76,73,66,95,86,69,82,83,73,79,78,0] /* ZLIB_VERSION\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([95,95,118,101,114,115,105,111,110,95,95,0] /* __version__\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([49,46,48,0] /* 1.0\00 */, "i8", ALLOC_NORMAL);
HEAP[_comp_methods]=((__str38)&4294967295);
HEAP[_comp_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_comp_methods+12]=((_comp_compress__doc__)&4294967295);
HEAP[_comp_methods+16]=((__str39)&4294967295);
HEAP[_comp_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_comp_methods+28]=((_comp_flush__doc__)&4294967295);
HEAP[_comp_methods+32]=((__str40)&4294967295);
HEAP[_comp_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_comp_methods+44]=((_comp_copy__doc__)&4294967295);
HEAP[_Decomp_methods]=((__str41)&4294967295);
HEAP[_Decomp_methods+4]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_Decomp_methods+12]=((_decomp_decompress__doc__)&4294967295);
HEAP[_Decomp_methods+16]=((__str39)&4294967295);
HEAP[_Decomp_methods+20]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_Decomp_methods+28]=((_decomp_flush__doc__)&4294967295);
HEAP[_Decomp_methods+32]=((__str40)&4294967295);
HEAP[_Decomp_methods+36]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_Decomp_methods+44]=((_decomp_copy__doc__)&4294967295);
HEAP[_zlib_methods]=((__str46)&4294967295);
HEAP[_zlib_methods+4]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_zlib_methods+12]=((_adler32__doc__)&4294967295);
HEAP[_zlib_methods+16]=((__str38)&4294967295);
HEAP[_zlib_methods+20]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_zlib_methods+28]=((_compress__doc__)&4294967295);
HEAP[_zlib_methods+32]=((__str47)&4294967295);
HEAP[_zlib_methods+36]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_zlib_methods+44]=((_compressobj__doc__)&4294967295);
HEAP[_zlib_methods+48]=((__str48)&4294967295);
HEAP[_zlib_methods+52]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_zlib_methods+60]=((_crc32__doc__)&4294967295);
HEAP[_zlib_methods+64]=((__str41)&4294967295);
HEAP[_zlib_methods+68]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_zlib_methods+76]=((_decompress__doc__)&4294967295);
HEAP[_zlib_methods+80]=((__str49)&4294967295);
HEAP[_zlib_methods+84]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_zlib_methods+92]=((_decompressobj__doc__)&4294967295);
HEAP[_Comptype+12]=((__str50)&4294967295);
HEAP[_Comptype+24]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_Comptype+32]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_Decomptype+12]=((__str51)&4294967295);
HEAP[_Decomptype+24]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_Decomptype+32]=(FUNCTION_TABLE_OFFSET + 32);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

