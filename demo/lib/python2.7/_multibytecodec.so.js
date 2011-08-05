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



var $0___SIZE = 40; // %0
  
var $1___SIZE = 20; // %1
  
var $2___SIZE = 20; // %2
  
var $3___SIZE = 48; // %3
  
var $4___SIZE = 16; // %4
  
var $5___SIZE = 196; // %5
  
var $6___SIZE = 196; // %6
  
var $7___SIZE = 80; // %7
  
var $8___SIZE = 40; // %8
  
var $9___SIZE = 64; // %9
  
var $10___SIZE = 32; // %10
  
var $11___SIZE = 16; // %11
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_MultibyteCodec___SIZE = 36; // %struct.MultibyteCodec
  
var $struct_MultibyteCodecObject___SIZE = 12; // %struct.MultibyteCodecObject
  
var $struct_MultibyteDecodeBuffer___SIZE = 28; // %struct.MultibyteDecodeBuffer
  
var $struct_MultibyteEncodeBuffer___SIZE = 28; // %struct.MultibyteEncodeBuffer
  
var $struct_MultibyteIncrementalDecoderObject___SIZE = 36; // %struct.MultibyteIncrementalDecoderObject
  var $struct_MultibyteIncrementalDecoderObject___FLATTENER = [0,4,8,12,20,24,32];
var $struct_MultibyteIncrementalEncoderObject___SIZE = 32; // %struct.MultibyteIncrementalEncoderObject
  var $struct_MultibyteIncrementalEncoderObject___FLATTENER = [0,4,8,12,20,24,28];
var $struct_MultibyteStatefulCodecContext___SIZE = 24; // %struct.MultibyteStatefulCodecContext
  var $struct_MultibyteStatefulCodecContext___FLATTENER = [0,4,8,12,20];
var $struct_MultibyteStatefulDecoderContext___SIZE = 36; // %struct.MultibyteStatefulDecoderContext
  var $struct_MultibyteStatefulDecoderContext___FLATTENER = [0,4,8,12,20,24,32];
var $struct_MultibyteStatefulEncoderContext___SIZE = 32; // %struct.MultibyteStatefulEncoderContext
  var $struct_MultibyteStatefulEncoderContext___FLATTENER = [0,4,8,12,20,24,28];
var $struct_MultibyteStreamReaderObject___SIZE = 40; // %struct.MultibyteStreamReaderObject
  var $struct_MultibyteStreamReaderObject___FLATTENER = [0,4,8,12,20,24,32,36];
var $struct_MultibyteStreamWriterObject___SIZE = 36; // %struct.MultibyteStreamWriterObject
  var $struct_MultibyteStreamWriterObject___FLATTENER = [0,4,8,12,20,24,28,32];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $union_MultibyteCodec_State___SIZE = 8; // %union.MultibyteCodec_State
  
var _MultibyteCodec_Encode__doc__;
var _MultibyteCodec_Decode__doc__;
var _codeckwarglist;
var __str;
var __str1;
var _incnewkwarglist;
var _incrementalkwarglist;
var __str2;
var _streamkwarglist;
var __str3;
var __str4;
var __str5;
var __str6;
var __str7;
var __str8;
var ___PRETTY_FUNCTION___8537;
var _PyExc_TypeError;
var __str9;
var __str10;
var _codecctx_getsets;
var __str11;
var __str12;
var _PyExc_RuntimeError;
var __str13;
var __str14;
var __str15;
var _PyExc_IndexError;
var __str16;
var __str17;
var __str18;
var __str19;
var __str20;
var __str21;
var __str22;
var __str23;
var _multibytecodec_methods;
var __str24;
var _MultibyteCodec_Type;
var _PyExc_UnicodeError;
var __str25;
var __str26;
var __Py_NoneStruct;
var __str27;
var _mbiencoder_methods;
var __str28;
var __str29;
var __str30;
var __str31;
var _MultibyteIncrementalEncoder_Type;
var __str32;
var _mbidecoder_methods;
var __str33;
var __str34;
var _MultibyteIncrementalDecoder_Type;
var __str35;
var __str36;
var __str37;
var __str38;
var __str39;
var __str40;
var _mbstreamreader_methods;
var _mbstreamreader_members;
var __str41;
var __str42;
var _MultibyteStreamReader_Type;
var __str43;
var __str44;
var __str45;
var __str46;
var __str47;
var _mbstreamwriter_methods;
var _mbstreamwriter_members;
var __str48;
var _MultibyteStreamWriter_Type;
var __str49;
var _PyExc_ValueError;
var __str50;
var __str51;
var ___methods;
var _C_140_10927;
var __str52;
var __str53;























































  function _make_tuple($object, $len) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $object_addr=__stackBase__;
        var $len_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $v=__stackBase__+16;
        var $w=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$object_addr]=$object;
        HEAP[$len_addr]=$len;
        var $1=HEAP[$object_addr]; //@line 58 "multibytecodec.c"
        var $2=($1)==0; //@line 58 "multibytecodec.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 58 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 59 "multibytecodec.c"
        __label__ = 11; break; //@line 59 "multibytecodec.c"
      case 2: // $bb1
        var $3=_PyTuple_New(2); //@line 61 "multibytecodec.c"
        HEAP[$v]=$3; //@line 61 "multibytecodec.c"
        var $4=HEAP[$v]; //@line 62 "multibytecodec.c"
        var $5=($4)==0; //@line 62 "multibytecodec.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 62 "multibytecodec.c"
      case 3: // $bb2
        var $6=HEAP[$object_addr]; //@line 63 "multibytecodec.c"
        var $7=(($6)&4294967295); //@line 63 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 63 "multibytecodec.c"
        var $9=((($8) - 1)&4294967295); //@line 63 "multibytecodec.c"
        var $10=HEAP[$object_addr]; //@line 63 "multibytecodec.c"
        var $11=(($10)&4294967295); //@line 63 "multibytecodec.c"
        HEAP[$11]=$9; //@line 63 "multibytecodec.c"
        var $12=HEAP[$object_addr]; //@line 63 "multibytecodec.c"
        var $13=(($12)&4294967295); //@line 63 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 63 "multibytecodec.c"
        var $15=((($14))|0)==0; //@line 63 "multibytecodec.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 63 "multibytecodec.c"
      case 4: // $bb3
        var $16=HEAP[$object_addr]; //@line 63 "multibytecodec.c"
        var $17=(($16+4)&4294967295); //@line 63 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 63 "multibytecodec.c"
        var $19=(($18+24)&4294967295); //@line 63 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 63 "multibytecodec.c"
        var $21=HEAP[$object_addr]; //@line 63 "multibytecodec.c"
        FUNCTION_TABLE[$20]($21); //@line 63 "multibytecodec.c"
        __label__ = 5; break; //@line 63 "multibytecodec.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 64 "multibytecodec.c"
        __label__ = 11; break; //@line 64 "multibytecodec.c"
      case 6: // $bb5
        var $22=HEAP[$v]; //@line 66 "multibytecodec.c"
        var $23=$22; //@line 66 "multibytecodec.c"
        var $24=(($23+12)&4294967295); //@line 66 "multibytecodec.c"
        var $25=(($24)&4294967295); //@line 66 "multibytecodec.c"
        var $26=HEAP[$object_addr]; //@line 66 "multibytecodec.c"
        HEAP[$25]=$26; //@line 66 "multibytecodec.c"
        var $27=HEAP[$len_addr]; //@line 68 "multibytecodec.c"
        var $28=_PyInt_FromSsize_t($27); //@line 68 "multibytecodec.c"
        HEAP[$w]=$28; //@line 68 "multibytecodec.c"
        var $29=HEAP[$w]; //@line 69 "multibytecodec.c"
        var $30=($29)==0; //@line 69 "multibytecodec.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 69 "multibytecodec.c"
      case 7: // $bb6
        var $31=HEAP[$v]; //@line 70 "multibytecodec.c"
        var $32=(($31)&4294967295); //@line 70 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 70 "multibytecodec.c"
        var $34=((($33) - 1)&4294967295); //@line 70 "multibytecodec.c"
        var $35=HEAP[$v]; //@line 70 "multibytecodec.c"
        var $36=(($35)&4294967295); //@line 70 "multibytecodec.c"
        HEAP[$36]=$34; //@line 70 "multibytecodec.c"
        var $37=HEAP[$v]; //@line 70 "multibytecodec.c"
        var $38=(($37)&4294967295); //@line 70 "multibytecodec.c"
        var $39=HEAP[$38]; //@line 70 "multibytecodec.c"
        var $40=((($39))|0)==0; //@line 70 "multibytecodec.c"
        if ($40) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 70 "multibytecodec.c"
      case 8: // $bb7
        var $41=HEAP[$v]; //@line 70 "multibytecodec.c"
        var $42=(($41+4)&4294967295); //@line 70 "multibytecodec.c"
        var $43=HEAP[$42]; //@line 70 "multibytecodec.c"
        var $44=(($43+24)&4294967295); //@line 70 "multibytecodec.c"
        var $45=HEAP[$44]; //@line 70 "multibytecodec.c"
        var $46=HEAP[$v]; //@line 70 "multibytecodec.c"
        FUNCTION_TABLE[$45]($46); //@line 70 "multibytecodec.c"
        __label__ = 9; break; //@line 70 "multibytecodec.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 71 "multibytecodec.c"
        __label__ = 11; break; //@line 71 "multibytecodec.c"
      case 10: // $bb9
        var $47=HEAP[$v]; //@line 73 "multibytecodec.c"
        var $48=$47; //@line 73 "multibytecodec.c"
        var $49=(($48+12)&4294967295); //@line 73 "multibytecodec.c"
        var $50=(($49+4)&4294967295); //@line 73 "multibytecodec.c"
        var $51=HEAP[$w]; //@line 73 "multibytecodec.c"
        HEAP[$50]=$51; //@line 73 "multibytecodec.c"
        var $52=HEAP[$v]; //@line 75 "multibytecodec.c"
        HEAP[$0]=$52; //@line 75 "multibytecodec.c"
        __label__ = 11; break; //@line 75 "multibytecodec.c"
      case 11: // $bb10
        var $53=HEAP[$0]; //@line 59 "multibytecodec.c"
        HEAP[$retval]=$53; //@line 59 "multibytecodec.c"
        __label__ = 12; break; //@line 59 "multibytecodec.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 59 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 59 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _internal_error_callback($errors) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $errors_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$errors_addr]=$errors;
        var $1=HEAP[$errors_addr]; //@line 81 "multibytecodec.c"
        var $2=($1)==0; //@line 81 "multibytecodec.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 81 "multibytecodec.c"
      case 1: // $bb
        var $3=HEAP[$errors_addr]; //@line 81 "multibytecodec.c"
        var $4=_strcmp($3, ((__str4)&4294967295)); //@line 81 "multibytecodec.c"
        var $5=((($4))|0)==0; //@line 81 "multibytecodec.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 81 "multibytecodec.c"
      case 2: // $bb1
        HEAP[$0]=1; //@line 82 "multibytecodec.c"
        __label__ = 8; break; //@line 82 "multibytecodec.c"
      case 3: // $bb2
        var $6=HEAP[$errors_addr]; //@line 83 "multibytecodec.c"
        var $7=_strcmp($6, ((__str5)&4294967295)); //@line 83 "multibytecodec.c"
        var $8=((($7))|0)==0; //@line 83 "multibytecodec.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 83 "multibytecodec.c"
      case 4: // $bb3
        HEAP[$0]=2; //@line 84 "multibytecodec.c"
        __label__ = 8; break; //@line 84 "multibytecodec.c"
      case 5: // $bb4
        var $9=HEAP[$errors_addr]; //@line 85 "multibytecodec.c"
        var $10=_strcmp($9, ((__str6)&4294967295)); //@line 85 "multibytecodec.c"
        var $11=((($10))|0)==0; //@line 85 "multibytecodec.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 85 "multibytecodec.c"
      case 6: // $bb5
        HEAP[$0]=3; //@line 86 "multibytecodec.c"
        __label__ = 8; break; //@line 86 "multibytecodec.c"
      case 7: // $bb6
        var $12=HEAP[$errors_addr]; //@line 88 "multibytecodec.c"
        var $13=_PyString_FromString($12); //@line 88 "multibytecodec.c"
        HEAP[$0]=$13; //@line 88 "multibytecodec.c"
        __label__ = 8; break; //@line 88 "multibytecodec.c"
      case 8: // $bb7
        var $14=HEAP[$0]; //@line 82 "multibytecodec.c"
        HEAP[$retval]=$14; //@line 82 "multibytecodec.c"
        __label__ = 9; break; //@line 82 "multibytecodec.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 82 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 82 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _call_error_callback($errors, $exc) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $errors_addr=__stackBase__;
        var $exc_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $args=__stackBase__+16;
        var $cb=__stackBase__+20;
        var $r=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$errors_addr]=$errors;
        HEAP[$exc_addr]=$exc;
        var $1=HEAP[$errors_addr]; //@line 96 "multibytecodec.c"
        var $2=(($1+4)&4294967295); //@line 96 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 96 "multibytecodec.c"
        var $4=(($3+84)&4294967295); //@line 96 "multibytecodec.c"
        var $5=HEAP[$4]; //@line 96 "multibytecodec.c"
        var $6=($5) & 134217728; //@line 96 "multibytecodec.c"
        var $7=((($6))|0)==0; //@line 96 "multibytecodec.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 96 "multibytecodec.c"
      case 1: // $bb
        ___assert_fail(((__str7)&4294967295), ((__str8)&4294967295), 96, ((___PRETTY_FUNCTION___8537)&4294967295)); //@line 96 "multibytecodec.c"
        throw "Reached an unreachable! Original .ll line: 354"; //@line 96 "multibytecodec.c"
      case 2: // $bb1
        var $8=HEAP[$errors_addr]; //@line 97 "multibytecodec.c"
        var $9=$8; //@line 97 "multibytecodec.c"
        var $10=(($9+20)&4294967295); //@line 97 "multibytecodec.c"
        var $11=(($10)&4294967295); //@line 97 "multibytecodec.c"
        var $12=_PyCodec_LookupError($11); //@line 97 "multibytecodec.c"
        HEAP[$cb]=$12; //@line 97 "multibytecodec.c"
        var $13=HEAP[$cb]; //@line 98 "multibytecodec.c"
        var $14=($13)==0; //@line 98 "multibytecodec.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 98 "multibytecodec.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 99 "multibytecodec.c"
        __label__ = 13; break; //@line 99 "multibytecodec.c"
      case 4: // $bb3
        var $15=_PyTuple_New(1); //@line 101 "multibytecodec.c"
        HEAP[$args]=$15; //@line 101 "multibytecodec.c"
        var $16=HEAP[$args]; //@line 102 "multibytecodec.c"
        var $17=($16)==0; //@line 102 "multibytecodec.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 102 "multibytecodec.c"
      case 5: // $bb4
        var $18=HEAP[$cb]; //@line 103 "multibytecodec.c"
        var $19=(($18)&4294967295); //@line 103 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 103 "multibytecodec.c"
        var $21=((($20) - 1)&4294967295); //@line 103 "multibytecodec.c"
        var $22=HEAP[$cb]; //@line 103 "multibytecodec.c"
        var $23=(($22)&4294967295); //@line 103 "multibytecodec.c"
        HEAP[$23]=$21; //@line 103 "multibytecodec.c"
        var $24=HEAP[$cb]; //@line 103 "multibytecodec.c"
        var $25=(($24)&4294967295); //@line 103 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 103 "multibytecodec.c"
        var $27=((($26))|0)==0; //@line 103 "multibytecodec.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 103 "multibytecodec.c"
      case 6: // $bb5
        var $28=HEAP[$cb]; //@line 103 "multibytecodec.c"
        var $29=(($28+4)&4294967295); //@line 103 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 103 "multibytecodec.c"
        var $31=(($30+24)&4294967295); //@line 103 "multibytecodec.c"
        var $32=HEAP[$31]; //@line 103 "multibytecodec.c"
        var $33=HEAP[$cb]; //@line 103 "multibytecodec.c"
        FUNCTION_TABLE[$32]($33); //@line 103 "multibytecodec.c"
        __label__ = 7; break; //@line 103 "multibytecodec.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 104 "multibytecodec.c"
        __label__ = 13; break; //@line 104 "multibytecodec.c"
      case 8: // $bb7
        var $34=HEAP[$args]; //@line 107 "multibytecodec.c"
        var $35=$34; //@line 107 "multibytecodec.c"
        var $36=(($35+12)&4294967295); //@line 107 "multibytecodec.c"
        var $37=(($36)&4294967295); //@line 107 "multibytecodec.c"
        var $38=HEAP[$exc_addr]; //@line 107 "multibytecodec.c"
        HEAP[$37]=$38; //@line 107 "multibytecodec.c"
        var $39=HEAP[$exc_addr]; //@line 108 "multibytecodec.c"
        var $40=(($39)&4294967295); //@line 108 "multibytecodec.c"
        var $41=HEAP[$40]; //@line 108 "multibytecodec.c"
        var $42=((($41) + 1)&4294967295); //@line 108 "multibytecodec.c"
        var $43=HEAP[$exc_addr]; //@line 108 "multibytecodec.c"
        var $44=(($43)&4294967295); //@line 108 "multibytecodec.c"
        HEAP[$44]=$42; //@line 108 "multibytecodec.c"
        var $45=HEAP[$cb]; //@line 110 "multibytecodec.c"
        var $46=HEAP[$args]; //@line 110 "multibytecodec.c"
        var $47=_PyObject_CallObject($45, $46); //@line 110 "multibytecodec.c"
        HEAP[$r]=$47; //@line 110 "multibytecodec.c"
        var $48=HEAP[$args]; //@line 111 "multibytecodec.c"
        var $49=(($48)&4294967295); //@line 111 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 111 "multibytecodec.c"
        var $51=((($50) - 1)&4294967295); //@line 111 "multibytecodec.c"
        var $52=HEAP[$args]; //@line 111 "multibytecodec.c"
        var $53=(($52)&4294967295); //@line 111 "multibytecodec.c"
        HEAP[$53]=$51; //@line 111 "multibytecodec.c"
        var $54=HEAP[$args]; //@line 111 "multibytecodec.c"
        var $55=(($54)&4294967295); //@line 111 "multibytecodec.c"
        var $56=HEAP[$55]; //@line 111 "multibytecodec.c"
        var $57=((($56))|0)==0; //@line 111 "multibytecodec.c"
        if ($57) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 111 "multibytecodec.c"
      case 9: // $bb8
        var $58=HEAP[$args]; //@line 111 "multibytecodec.c"
        var $59=(($58+4)&4294967295); //@line 111 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 111 "multibytecodec.c"
        var $61=(($60+24)&4294967295); //@line 111 "multibytecodec.c"
        var $62=HEAP[$61]; //@line 111 "multibytecodec.c"
        var $63=HEAP[$args]; //@line 111 "multibytecodec.c"
        FUNCTION_TABLE[$62]($63); //@line 111 "multibytecodec.c"
        __label__ = 10; break; //@line 111 "multibytecodec.c"
      case 10: // $bb9
        var $64=HEAP[$cb]; //@line 112 "multibytecodec.c"
        var $65=(($64)&4294967295); //@line 112 "multibytecodec.c"
        var $66=HEAP[$65]; //@line 112 "multibytecodec.c"
        var $67=((($66) - 1)&4294967295); //@line 112 "multibytecodec.c"
        var $68=HEAP[$cb]; //@line 112 "multibytecodec.c"
        var $69=(($68)&4294967295); //@line 112 "multibytecodec.c"
        HEAP[$69]=$67; //@line 112 "multibytecodec.c"
        var $70=HEAP[$cb]; //@line 112 "multibytecodec.c"
        var $71=(($70)&4294967295); //@line 112 "multibytecodec.c"
        var $72=HEAP[$71]; //@line 112 "multibytecodec.c"
        var $73=((($72))|0)==0; //@line 112 "multibytecodec.c"
        if ($73) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 112 "multibytecodec.c"
      case 11: // $bb10
        var $74=HEAP[$cb]; //@line 112 "multibytecodec.c"
        var $75=(($74+4)&4294967295); //@line 112 "multibytecodec.c"
        var $76=HEAP[$75]; //@line 112 "multibytecodec.c"
        var $77=(($76+24)&4294967295); //@line 112 "multibytecodec.c"
        var $78=HEAP[$77]; //@line 112 "multibytecodec.c"
        var $79=HEAP[$cb]; //@line 112 "multibytecodec.c"
        FUNCTION_TABLE[$78]($79); //@line 112 "multibytecodec.c"
        __label__ = 12; break; //@line 112 "multibytecodec.c"
      case 12: // $bb11
        var $80=HEAP[$r]; //@line 113 "multibytecodec.c"
        HEAP[$0]=$80; //@line 113 "multibytecodec.c"
        __label__ = 13; break; //@line 113 "multibytecodec.c"
      case 13: // $bb12
        var $81=HEAP[$0]; //@line 99 "multibytecodec.c"
        HEAP[$retval]=$81; //@line 99 "multibytecodec.c"
        __label__ = 14; break; //@line 99 "multibytecodec.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 99 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 99 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _codecctx_errors_get($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $errors=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 121 "multibytecodec.c"
        var $2=(($1+20)&4294967295); //@line 121 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 121 "multibytecodec.c"
        var $4=($3)==1; //@line 121 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 121 "multibytecodec.c"
      case 1: // $bb
        HEAP[$errors]=((__str4)&4294967295); //@line 122 "multibytecodec.c"
        __label__ = 7; break; //@line 122 "multibytecodec.c"
      case 2: // $bb1
        var $5=HEAP[$self_addr]; //@line 123 "multibytecodec.c"
        var $6=(($5+20)&4294967295); //@line 123 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 123 "multibytecodec.c"
        var $8=($7)==2; //@line 123 "multibytecodec.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 123 "multibytecodec.c"
      case 3: // $bb2
        HEAP[$errors]=((__str5)&4294967295); //@line 124 "multibytecodec.c"
        __label__ = 7; break; //@line 124 "multibytecodec.c"
      case 4: // $bb3
        var $9=HEAP[$self_addr]; //@line 125 "multibytecodec.c"
        var $10=(($9+20)&4294967295); //@line 125 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 125 "multibytecodec.c"
        var $12=($11)==3; //@line 125 "multibytecodec.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 125 "multibytecodec.c"
      case 5: // $bb4
        HEAP[$errors]=((__str6)&4294967295); //@line 126 "multibytecodec.c"
        __label__ = 7; break; //@line 126 "multibytecodec.c"
      case 6: // $bb5
        var $13=HEAP[$self_addr]; //@line 128 "multibytecodec.c"
        var $14=(($13+20)&4294967295); //@line 128 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 128 "multibytecodec.c"
        var $16=(($15)&4294967295); //@line 128 "multibytecodec.c"
        var $17=HEAP[$16]; //@line 128 "multibytecodec.c"
        var $18=((($17) + 1)&4294967295); //@line 128 "multibytecodec.c"
        var $19=(($15)&4294967295); //@line 128 "multibytecodec.c"
        HEAP[$19]=$18; //@line 128 "multibytecodec.c"
        var $20=HEAP[$self_addr]; //@line 129 "multibytecodec.c"
        var $21=(($20+20)&4294967295); //@line 129 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 129 "multibytecodec.c"
        HEAP[$0]=$22; //@line 129 "multibytecodec.c"
        __label__ = 8; break; //@line 129 "multibytecodec.c"
      case 7: // $bb6
        var $23=HEAP[$errors]; //@line 132 "multibytecodec.c"
        var $24=_PyString_FromString($23); //@line 132 "multibytecodec.c"
        HEAP[$0]=$24; //@line 132 "multibytecodec.c"
        __label__ = 8; break; //@line 132 "multibytecodec.c"
      case 8: // $bb7
        var $25=HEAP[$0]; //@line 129 "multibytecodec.c"
        HEAP[$retval]=$25; //@line 129 "multibytecodec.c"
        __label__ = 9; break; //@line 129 "multibytecodec.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 129 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 129 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _codecctx_errors_set($self, $value, $closure) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $value_addr=__stackBase__+4;
        var $closure_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $cb=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$value_addr]=$value;
        HEAP[$closure_addr]=$closure;
        var $1=HEAP[$value_addr]; //@line 141 "multibytecodec.c"
        var $2=(($1+4)&4294967295); //@line 141 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 141 "multibytecodec.c"
        var $4=(($3+84)&4294967295); //@line 141 "multibytecodec.c"
        var $5=HEAP[$4]; //@line 141 "multibytecodec.c"
        var $6=($5) & 134217728; //@line 141 "multibytecodec.c"
        var $7=((($6))|0)==0; //@line 141 "multibytecodec.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 141 "multibytecodec.c"
      case 1: // $bb
        var $8=HEAP[_PyExc_TypeError]; //@line 142 "multibytecodec.c"
        _PyErr_SetString($8, ((__str9)&4294967295)); //@line 142 "multibytecodec.c"
        HEAP[$0]=-1; //@line 143 "multibytecodec.c"
        __label__ = 10; break; //@line 143 "multibytecodec.c"
      case 2: // $bb1
        var $9=HEAP[$value_addr]; //@line 146 "multibytecodec.c"
        var $10=$9; //@line 146 "multibytecodec.c"
        var $11=(($10+20)&4294967295); //@line 146 "multibytecodec.c"
        var $12=(($11)&4294967295); //@line 146 "multibytecodec.c"
        var $13=_internal_error_callback($12); //@line 146 "multibytecodec.c"
        HEAP[$cb]=$13; //@line 146 "multibytecodec.c"
        var $14=HEAP[$cb]; //@line 147 "multibytecodec.c"
        var $15=($14)==0; //@line 147 "multibytecodec.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 147 "multibytecodec.c"
      case 3: // $bb2
        HEAP[$0]=-1; //@line 148 "multibytecodec.c"
        __label__ = 10; break; //@line 148 "multibytecodec.c"
      case 4: // $bb3
        var $16=HEAP[$self_addr]; //@line 150 "multibytecodec.c"
        var $17=(($16+20)&4294967295); //@line 150 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 150 "multibytecodec.c"
        var $19=($18)!=0; //@line 150 "multibytecodec.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 150 "multibytecodec.c"
      case 5: // $bb4
        var $20=HEAP[$self_addr]; //@line 150 "multibytecodec.c"
        var $21=(($20+20)&4294967295); //@line 150 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 150 "multibytecodec.c"
        var $23=($22)==0; //@line 150 "multibytecodec.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 150 "multibytecodec.c"
      case 6: // $bb5
        var $24=HEAP[$self_addr]; //@line 150 "multibytecodec.c"
        var $25=(($24+20)&4294967295); //@line 150 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 150 "multibytecodec.c"
        var $27=($26) > 3; //@line 150 "multibytecodec.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 150 "multibytecodec.c"
      case 7: // $bb6
        var $28=HEAP[$self_addr]; //@line 150 "multibytecodec.c"
        var $29=(($28+20)&4294967295); //@line 150 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 150 "multibytecodec.c"
        var $31=(($30)&4294967295); //@line 150 "multibytecodec.c"
        var $32=HEAP[$31]; //@line 150 "multibytecodec.c"
        var $33=((($32) - 1)&4294967295); //@line 150 "multibytecodec.c"
        var $34=(($30)&4294967295); //@line 150 "multibytecodec.c"
        HEAP[$34]=$33; //@line 150 "multibytecodec.c"
        var $35=(($30)&4294967295); //@line 150 "multibytecodec.c"
        var $36=HEAP[$35]; //@line 150 "multibytecodec.c"
        var $37=((($36))|0)==0; //@line 150 "multibytecodec.c"
        if ($37) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 150 "multibytecodec.c"
      case 8: // $bb7
        var $38=HEAP[$self_addr]; //@line 150 "multibytecodec.c"
        var $39=(($38+20)&4294967295); //@line 150 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 150 "multibytecodec.c"
        var $41=(($40+4)&4294967295); //@line 150 "multibytecodec.c"
        var $42=HEAP[$41]; //@line 150 "multibytecodec.c"
        var $43=(($42+24)&4294967295); //@line 150 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 150 "multibytecodec.c"
        var $45=HEAP[$self_addr]; //@line 150 "multibytecodec.c"
        var $46=(($45+20)&4294967295); //@line 150 "multibytecodec.c"
        var $47=HEAP[$46]; //@line 150 "multibytecodec.c"
        FUNCTION_TABLE[$44]($47); //@line 150 "multibytecodec.c"
        __label__ = 9; break; //@line 150 "multibytecodec.c"
      case 9: // $bb8
        var $48=HEAP[$self_addr]; //@line 151 "multibytecodec.c"
        var $49=(($48+20)&4294967295); //@line 151 "multibytecodec.c"
        var $50=HEAP[$cb]; //@line 151 "multibytecodec.c"
        HEAP[$49]=$50; //@line 151 "multibytecodec.c"
        HEAP[$0]=0; //@line 152 "multibytecodec.c"
        __label__ = 10; break; //@line 152 "multibytecodec.c"
      case 10: // $bb9
        var $51=HEAP[$0]; //@line 143 "multibytecodec.c"
        HEAP[$retval]=$51; //@line 143 "multibytecodec.c"
        __label__ = 11; break; //@line 143 "multibytecodec.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 143 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 143 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expand_encodebuffer($buf, $esize) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $buf_addr=__stackBase__;
        var $esize_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $iftmp_7=__stackBase__+16;
        var $orgpos=__stackBase__+20;
        var $orgsize=__stackBase__+24;
        var $incsize=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$buf_addr]=$buf;
        HEAP[$esize_addr]=$esize;
        var $1=HEAP[$buf_addr]; //@line 168 "multibytecodec.c"
        var $2=(($1+12)&4294967295); //@line 168 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 168 "multibytecodec.c"
        var $4=($3); //@line 168 "multibytecodec.c"
        var $5=HEAP[$buf_addr]; //@line 168 "multibytecodec.c"
        var $6=(($5+24)&4294967295); //@line 168 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 168 "multibytecodec.c"
        var $8=$7; //@line 168 "multibytecodec.c"
        var $9=(($8+20)&4294967295); //@line 168 "multibytecodec.c"
        var $10=($9); //@line 168 "multibytecodec.c"
        var $11=((($4) - ($10))&4294967295); //@line 168 "multibytecodec.c"
        HEAP[$orgpos]=$11; //@line 168 "multibytecodec.c"
        var $12=HEAP[$buf_addr]; //@line 170 "multibytecodec.c"
        var $13=(($12+24)&4294967295); //@line 170 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 170 "multibytecodec.c"
        var $15=$14; //@line 170 "multibytecodec.c"
        var $16=(($15+8)&4294967295); //@line 170 "multibytecodec.c"
        var $17=HEAP[$16]; //@line 170 "multibytecodec.c"
        HEAP[$orgsize]=$17; //@line 170 "multibytecodec.c"
        var $18=HEAP[$orgsize]; //@line 171 "multibytecodec.c"
        var $19=((($18))|0) >> 1; //@line 171 "multibytecodec.c"
        var $20=HEAP[$esize_addr]; //@line 171 "multibytecodec.c"
        var $21=((($19))|0) > ((($20))|0); //@line 171 "multibytecodec.c"
        if ($21) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 171 "multibytecodec.c"
      case 1: // $bb
        var $22=HEAP[$orgsize]; //@line 171 "multibytecodec.c"
        var $23=((($22))|0) >> 1; //@line 171 "multibytecodec.c"
        var $24=($23) | 1; //@line 171 "multibytecodec.c"
        HEAP[$iftmp_7]=$24; //@line 171 "multibytecodec.c"
        __label__ = 3; break; //@line 171 "multibytecodec.c"
      case 2: // $bb1
        var $25=HEAP[$esize_addr]; //@line 171 "multibytecodec.c"
        HEAP[$iftmp_7]=$25; //@line 171 "multibytecodec.c"
        __label__ = 3; break; //@line 171 "multibytecodec.c"
      case 3: // $bb2
        var $26=HEAP[$iftmp_7]; //@line 171 "multibytecodec.c"
        HEAP[$incsize]=$26; //@line 171 "multibytecodec.c"
        var $27=HEAP[$incsize]; //@line 173 "multibytecodec.c"
        var $28=((2147483647 - ($27))&4294967295); //@line 173 "multibytecodec.c"
        var $29=HEAP[$orgsize]; //@line 173 "multibytecodec.c"
        var $30=((($28))|0) < ((($29))|0); //@line 173 "multibytecodec.c"
        if ($30) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 173 "multibytecodec.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 174 "multibytecodec.c"
        __label__ = 8; break; //@line 174 "multibytecodec.c"
      case 5: // $bb4
        var $31=HEAP[$orgsize]; //@line 176 "multibytecodec.c"
        var $32=HEAP[$incsize]; //@line 176 "multibytecodec.c"
        var $33=((($31) + ($32))&4294967295); //@line 176 "multibytecodec.c"
        var $34=HEAP[$buf_addr]; //@line 176 "multibytecodec.c"
        var $35=(($34+24)&4294967295); //@line 176 "multibytecodec.c"
        var $36=__PyString_Resize($35, $33); //@line 176 "multibytecodec.c"
        var $37=((($36))|0)==-1; //@line 176 "multibytecodec.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 176 "multibytecodec.c"
      case 6: // $bb5
        HEAP[$0]=-1; //@line 177 "multibytecodec.c"
        __label__ = 8; break; //@line 177 "multibytecodec.c"
      case 7: // $bb6
        var $38=HEAP[$buf_addr]; //@line 179 "multibytecodec.c"
        var $39=(($38+24)&4294967295); //@line 179 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 179 "multibytecodec.c"
        var $41=$40; //@line 179 "multibytecodec.c"
        var $42=(($41+20)&4294967295); //@line 179 "multibytecodec.c"
        var $43=$42; //@line 179 "multibytecodec.c"
        var $44=HEAP[$orgpos]; //@line 179 "multibytecodec.c"
        var $45=(($43+$44)&4294967295); //@line 179 "multibytecodec.c"
        var $46=HEAP[$buf_addr]; //@line 179 "multibytecodec.c"
        var $47=(($46+12)&4294967295); //@line 179 "multibytecodec.c"
        HEAP[$47]=$45; //@line 179 "multibytecodec.c"
        var $48=HEAP[$buf_addr]; //@line 180 "multibytecodec.c"
        var $49=(($48+24)&4294967295); //@line 180 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 180 "multibytecodec.c"
        var $51=$50; //@line 180 "multibytecodec.c"
        var $52=(($51+20)&4294967295); //@line 180 "multibytecodec.c"
        var $53=$52; //@line 180 "multibytecodec.c"
        var $54=HEAP[$buf_addr]; //@line 180 "multibytecodec.c"
        var $55=(($54+24)&4294967295); //@line 180 "multibytecodec.c"
        var $56=HEAP[$55]; //@line 180 "multibytecodec.c"
        var $57=$56; //@line 180 "multibytecodec.c"
        var $58=(($57+8)&4294967295); //@line 180 "multibytecodec.c"
        var $59=HEAP[$58]; //@line 180 "multibytecodec.c"
        var $60=(($53+$59)&4294967295); //@line 180 "multibytecodec.c"
        var $61=HEAP[$buf_addr]; //@line 180 "multibytecodec.c"
        var $62=(($61+16)&4294967295); //@line 180 "multibytecodec.c"
        HEAP[$62]=$60; //@line 180 "multibytecodec.c"
        HEAP[$0]=0; //@line 183 "multibytecodec.c"
        __label__ = 8; break; //@line 183 "multibytecodec.c"
      case 8: // $bb7
        var $63=HEAP[$0]; //@line 174 "multibytecodec.c"
        HEAP[$retval]=$63; //@line 174 "multibytecodec.c"
        __label__ = 9; break; //@line 174 "multibytecodec.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 174 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 174 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expand_decodebuffer($buf, $esize) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $buf_addr=__stackBase__;
        var $esize_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $iftmp_8=__stackBase__+16;
        var $orgpos=__stackBase__+20;
        var $orgsize=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$buf_addr]=$buf;
        HEAP[$esize_addr]=$esize;
        var $1=HEAP[$buf_addr]; //@line 196 "multibytecodec.c"
        var $2=(($1+12)&4294967295); //@line 196 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 196 "multibytecodec.c"
        var $4=($3); //@line 196 "multibytecodec.c"
        var $5=HEAP[$buf_addr]; //@line 196 "multibytecodec.c"
        var $6=(($5+24)&4294967295); //@line 196 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 196 "multibytecodec.c"
        var $8=$7; //@line 196 "multibytecodec.c"
        var $9=(($8+12)&4294967295); //@line 196 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 196 "multibytecodec.c"
        var $11=($10); //@line 196 "multibytecodec.c"
        var $12=((($4) - ($11))&4294967295); //@line 196 "multibytecodec.c"
        var $13=((((($12))|0)/2)|0); //@line 196 "multibytecodec.c"
        HEAP[$orgpos]=$13; //@line 196 "multibytecodec.c"
        var $14=HEAP[$buf_addr]; //@line 197 "multibytecodec.c"
        var $15=(($14+24)&4294967295); //@line 197 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 197 "multibytecodec.c"
        var $17=$16; //@line 197 "multibytecodec.c"
        var $18=(($17+8)&4294967295); //@line 197 "multibytecodec.c"
        var $19=HEAP[$18]; //@line 197 "multibytecodec.c"
        HEAP[$orgsize]=$19; //@line 197 "multibytecodec.c"
        var $20=HEAP[$orgsize]; //@line 198 "multibytecodec.c"
        var $21=((($20))|0) >> 1; //@line 198 "multibytecodec.c"
        var $22=HEAP[$esize_addr]; //@line 198 "multibytecodec.c"
        var $23=((($21))|0) > ((($22))|0); //@line 198 "multibytecodec.c"
        if ($23) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 198 "multibytecodec.c"
      case 1: // $bb
        var $24=HEAP[$orgsize]; //@line 198 "multibytecodec.c"
        var $25=((($24))|0) >> 1; //@line 198 "multibytecodec.c"
        var $26=($25) | 1; //@line 198 "multibytecodec.c"
        HEAP[$iftmp_8]=$26; //@line 198 "multibytecodec.c"
        __label__ = 3; break; //@line 198 "multibytecodec.c"
      case 2: // $bb1
        var $27=HEAP[$esize_addr]; //@line 198 "multibytecodec.c"
        HEAP[$iftmp_8]=$27; //@line 198 "multibytecodec.c"
        __label__ = 3; break; //@line 198 "multibytecodec.c"
      case 3: // $bb2
        var $28=HEAP[$iftmp_8]; //@line 198 "multibytecodec.c"
        var $29=HEAP[$orgsize]; //@line 198 "multibytecodec.c"
        var $30=((($28) + ($29))&4294967295); //@line 198 "multibytecodec.c"
        var $31=HEAP[$buf_addr]; //@line 198 "multibytecodec.c"
        var $32=(($31+24)&4294967295); //@line 198 "multibytecodec.c"
        var $33=_PyUnicodeUCS2_Resize($32, $30); //@line 198 "multibytecodec.c"
        var $34=((($33))|0)==-1; //@line 198 "multibytecodec.c"
        if ($34) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 198 "multibytecodec.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 200 "multibytecodec.c"
        __label__ = 6; break; //@line 200 "multibytecodec.c"
      case 5: // $bb4
        var $35=HEAP[$buf_addr]; //@line 202 "multibytecodec.c"
        var $36=(($35+24)&4294967295); //@line 202 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 202 "multibytecodec.c"
        var $38=$37; //@line 202 "multibytecodec.c"
        var $39=(($38+12)&4294967295); //@line 202 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 202 "multibytecodec.c"
        var $41=HEAP[$orgpos]; //@line 202 "multibytecodec.c"
        var $42=(($40+2*$41)&4294967295); //@line 202 "multibytecodec.c"
        var $43=HEAP[$buf_addr]; //@line 202 "multibytecodec.c"
        var $44=(($43+12)&4294967295); //@line 202 "multibytecodec.c"
        HEAP[$44]=$42; //@line 202 "multibytecodec.c"
        var $45=HEAP[$buf_addr]; //@line 203 "multibytecodec.c"
        var $46=(($45+24)&4294967295); //@line 203 "multibytecodec.c"
        var $47=HEAP[$46]; //@line 203 "multibytecodec.c"
        var $48=$47; //@line 203 "multibytecodec.c"
        var $49=(($48+12)&4294967295); //@line 203 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 203 "multibytecodec.c"
        var $51=HEAP[$buf_addr]; //@line 203 "multibytecodec.c"
        var $52=(($51+24)&4294967295); //@line 203 "multibytecodec.c"
        var $53=HEAP[$52]; //@line 203 "multibytecodec.c"
        var $54=$53; //@line 203 "multibytecodec.c"
        var $55=(($54+8)&4294967295); //@line 203 "multibytecodec.c"
        var $56=HEAP[$55]; //@line 203 "multibytecodec.c"
        var $57=(($50+2*$56)&4294967295); //@line 203 "multibytecodec.c"
        var $58=HEAP[$buf_addr]; //@line 203 "multibytecodec.c"
        var $59=(($58+16)&4294967295); //@line 203 "multibytecodec.c"
        HEAP[$59]=$57; //@line 203 "multibytecodec.c"
        HEAP[$0]=0; //@line 206 "multibytecodec.c"
        __label__ = 6; break; //@line 206 "multibytecodec.c"
      case 6: // $bb5
        var $60=HEAP[$0]; //@line 200 "multibytecodec.c"
        HEAP[$retval]=$60; //@line 200 "multibytecodec.c"
        __label__ = 7; break; //@line 200 "multibytecodec.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 200 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 200 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _multibytecodec_encerror($codec, $state, $buf, $errors, $e) {
    var __stackBase__  = STACKTOP; STACKTOP += 82; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 82);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $codec_addr=__stackBase__;
        var $state_addr=__stackBase__+4;
        var $buf_addr=__stackBase__+8;
        var $errors_addr=__stackBase__+12;
        var $e_addr=__stackBase__+16;
        var $retval=__stackBase__+20;
        var $0=__stackBase__+24;
        var $retobj=__stackBase__+28;
        var $retstr=__stackBase__+32;
        var $tobj=__stackBase__+36;
        var $retstrsize=__stackBase__+40;
        var $newpos=__stackBase__+44;
        var $esize=__stackBase__+48;
        var $start=__stackBase__+52;
        var $end=__stackBase__+56;
        var $reason=__stackBase__+60;
        var $replchar=__stackBase__+64;
        var $inbuf=__stackBase__+66;
        var $r=__stackBase__+70;
        var $outleft=__stackBase__+74;
        var $uraw=__stackBase__+78;
        var $_alloca_point_=0;
        HEAP[$codec_addr]=$codec;
        HEAP[$state_addr]=$state;
        HEAP[$buf_addr]=$buf;
        HEAP[$errors_addr]=$errors;
        HEAP[$e_addr]=$e;
        HEAP[$retobj]=0; //@line 225 "multibytecodec.c"
        HEAP[$retstr]=0; //@line 225 "multibytecodec.c"
        var $1=HEAP[$e_addr]; //@line 230 "multibytecodec.c"
        var $2=((($1))|0) > 0; //@line 230 "multibytecodec.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 230 "multibytecodec.c"
      case 1: // $bb
        HEAP[$reason]=((__str11)&4294967295); //@line 231 "multibytecodec.c"
        var $3=HEAP[$e_addr]; //@line 232 "multibytecodec.c"
        HEAP[$esize]=$3; //@line 232 "multibytecodec.c"
        __label__ = 8; break; //@line 232 "multibytecodec.c"
      case 2: // $bb1
        var $4=HEAP[$e_addr]; //@line 235 "multibytecodec.c"
        if ($4 == -3) {
          __label__ = 6; break;
        }
        else if ($4 == -2) {
          __label__ = 5; break;
        }
        else if ($4 == -1) {
          __label__ = 3; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 3: // $bb2
        var $5=HEAP[$buf_addr]; //@line 237 "multibytecodec.c"
        var $6=_expand_encodebuffer($5, -1); //@line 237 "multibytecodec.c"
        var $7=((($6))|0)==-1; //@line 237 "multibytecodec.c"
        if ($7) { __label__ = 50; break; } else { __label__ = 4; break; } //@line 237 "multibytecodec.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 238 "multibytecodec.c"
        __label__ = 57; break; //@line 238 "multibytecodec.c"
      case 5: // $bb4
        HEAP[$reason]=((__str12)&4294967295); //@line 240 "multibytecodec.c"
        var $8=HEAP[$buf_addr]; //@line 241 "multibytecodec.c"
        var $9=(($8+8)&4294967295); //@line 241 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 241 "multibytecodec.c"
        var $11=($10); //@line 241 "multibytecodec.c"
        var $12=HEAP[$buf_addr]; //@line 241 "multibytecodec.c"
        var $13=(($12)&4294967295); //@line 241 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 241 "multibytecodec.c"
        var $15=($14); //@line 241 "multibytecodec.c"
        var $16=((($11) - ($15))&4294967295); //@line 241 "multibytecodec.c"
        var $17=((((($16))|0)/2)|0); //@line 241 "multibytecodec.c"
        HEAP[$esize]=$17; //@line 241 "multibytecodec.c"
        __label__ = 8; break; //@line 241 "multibytecodec.c"
      case 6: // $bb5
        var $18=HEAP[_PyExc_RuntimeError]; //@line 244 "multibytecodec.c"
        _PyErr_SetString($18, ((__str13)&4294967295)); //@line 244 "multibytecodec.c"
        HEAP[$0]=-1; //@line 246 "multibytecodec.c"
        __label__ = 57; break; //@line 246 "multibytecodec.c"
      case 7: // $bb6
        var $19=HEAP[_PyExc_RuntimeError]; //@line 248 "multibytecodec.c"
        _PyErr_SetString($19, ((__str14)&4294967295)); //@line 248 "multibytecodec.c"
        HEAP[$0]=-1; //@line 250 "multibytecodec.c"
        __label__ = 57; break; //@line 250 "multibytecodec.c"
      case 8: // $bb7
        var $20=HEAP[$errors_addr]; //@line 254 "multibytecodec.c"
        var $21=($20)==3; //@line 254 "multibytecodec.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 17; break; } //@line 254 "multibytecodec.c"
      case 9: // $bb8
        HEAP[$replchar]=63; //@line 255 "multibytecodec.c"
        HEAP[$inbuf]=$replchar; //@line 255 "multibytecodec.c"
        __label__ = 10; break; //@line 255 "multibytecodec.c"
      case 10: // $bb9
        var $22=HEAP[$buf_addr]; //@line 261 "multibytecodec.c"
        var $23=(($22+16)&4294967295); //@line 261 "multibytecodec.c"
        var $24=HEAP[$23]; //@line 261 "multibytecodec.c"
        var $25=($24); //@line 261 "multibytecodec.c"
        var $26=HEAP[$buf_addr]; //@line 261 "multibytecodec.c"
        var $27=(($26+12)&4294967295); //@line 261 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 261 "multibytecodec.c"
        var $29=($28); //@line 261 "multibytecodec.c"
        var $30=((($25) - ($29))&4294967295); //@line 261 "multibytecodec.c"
        HEAP[$outleft]=$30; //@line 261 "multibytecodec.c"
        var $31=HEAP[$codec_addr]; //@line 262 "multibytecodec.c"
        var $32=(($31+12)&4294967295); //@line 262 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 262 "multibytecodec.c"
        var $34=HEAP[$buf_addr]; //@line 262 "multibytecodec.c"
        var $35=(($34+12)&4294967295); //@line 262 "multibytecodec.c"
        var $36=HEAP[$codec_addr]; //@line 262 "multibytecodec.c"
        var $37=(($36+4)&4294967295); //@line 262 "multibytecodec.c"
        var $38=HEAP[$37]; //@line 262 "multibytecodec.c"
        var $39=HEAP[$state_addr]; //@line 262 "multibytecodec.c"
        var $40=HEAP[$outleft]; //@line 262 "multibytecodec.c"
        var $41=FUNCTION_TABLE[$33]($39, $38, $inbuf, 1, $35, $40, 0); //@line 262 "multibytecodec.c"
        HEAP[$r]=$41; //@line 262 "multibytecodec.c"
        var $42=HEAP[$r]; //@line 264 "multibytecodec.c"
        var $43=((($42))|0)==-1; //@line 264 "multibytecodec.c"
        if ($43) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 264 "multibytecodec.c"
      case 11: // $bb10
        var $44=HEAP[$buf_addr]; //@line 265 "multibytecodec.c"
        var $45=_expand_encodebuffer($44, -1); //@line 265 "multibytecodec.c"
        var $46=((($45))|0)==-1; //@line 265 "multibytecodec.c"
        if ($46) { __label__ = 50; break; } else { __label__ = 12; break; } //@line 265 "multibytecodec.c"
      case 12: // $bb11
        __label__ = 10; break; //@line 265 "multibytecodec.c"
      case 13: // $bb12
        var $47=HEAP[$r]; //@line 272 "multibytecodec.c"
        var $48=((($47))|0)!=0; //@line 272 "multibytecodec.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 272 "multibytecodec.c"
      case 14: // $bb13
        var $49=HEAP[$buf_addr]; //@line 273 "multibytecodec.c"
        var $50=(($49+12)&4294967295); //@line 273 "multibytecodec.c"
        var $51=HEAP[$50]; //@line 273 "multibytecodec.c"
        var $52=(($51+1)&4294967295); //@line 273 "multibytecodec.c"
        var $53=HEAP[$buf_addr]; //@line 273 "multibytecodec.c"
        var $54=(($53+16)&4294967295); //@line 273 "multibytecodec.c"
        var $55=HEAP[$54]; //@line 273 "multibytecodec.c"
        var $56=($52) > ($55); //@line 273 "multibytecodec.c"
        if ($56) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 273 "multibytecodec.c"
      case 15: // $bb14
        var $57=HEAP[$buf_addr]; //@line 273 "multibytecodec.c"
        var $58=_expand_encodebuffer($57, 1); //@line 273 "multibytecodec.c"
        var $59=((($58))|0)==-1; //@line 273 "multibytecodec.c"
        if ($59) { __label__ = 50; break; } else { __label__ = 16; break; } //@line 273 "multibytecodec.c"
      case 16: // $bb15
        var $60=HEAP[$buf_addr]; //@line 274 "multibytecodec.c"
        var $61=(($60+12)&4294967295); //@line 274 "multibytecodec.c"
        var $62=HEAP[$61]; //@line 274 "multibytecodec.c"
        HEAP[$62]=63; //@line 274 "multibytecodec.c"
        var $63=(($62+1)&4294967295); //@line 274 "multibytecodec.c"
        var $64=HEAP[$buf_addr]; //@line 274 "multibytecodec.c"
        var $65=(($64+12)&4294967295); //@line 274 "multibytecodec.c"
        HEAP[$65]=$63; //@line 274 "multibytecodec.c"
        __label__ = 17; break; //@line 274 "multibytecodec.c"
      case 17: // $bb16
        var $66=HEAP[$errors_addr]; //@line 277 "multibytecodec.c"
        var $67=($66)==2; //@line 277 "multibytecodec.c"
        if ($67) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 277 "multibytecodec.c"
      case 18: // $bb17
        var $68=HEAP[$errors_addr]; //@line 277 "multibytecodec.c"
        var $69=($68)==3; //@line 277 "multibytecodec.c"
        if ($69) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 277 "multibytecodec.c"
      case 19: // $bb18
        var $70=HEAP[$buf_addr]; //@line 278 "multibytecodec.c"
        var $71=(($70)&4294967295); //@line 278 "multibytecodec.c"
        var $72=HEAP[$71]; //@line 278 "multibytecodec.c"
        var $73=HEAP[$esize]; //@line 278 "multibytecodec.c"
        var $74=(($72+2*$73)&4294967295); //@line 278 "multibytecodec.c"
        var $75=HEAP[$buf_addr]; //@line 278 "multibytecodec.c"
        var $76=(($75)&4294967295); //@line 278 "multibytecodec.c"
        HEAP[$76]=$74; //@line 278 "multibytecodec.c"
        HEAP[$0]=0; //@line 279 "multibytecodec.c"
        __label__ = 57; break; //@line 279 "multibytecodec.c"
      case 20: // $bb19
        var $77=HEAP[$buf_addr]; //@line 282 "multibytecodec.c"
        var $78=(($77)&4294967295); //@line 282 "multibytecodec.c"
        var $79=HEAP[$78]; //@line 282 "multibytecodec.c"
        var $80=($79); //@line 282 "multibytecodec.c"
        var $81=HEAP[$buf_addr]; //@line 282 "multibytecodec.c"
        var $82=(($81+4)&4294967295); //@line 282 "multibytecodec.c"
        var $83=HEAP[$82]; //@line 282 "multibytecodec.c"
        var $84=($83); //@line 282 "multibytecodec.c"
        var $85=((($80) - ($84))&4294967295); //@line 282 "multibytecodec.c"
        var $86=((((($85))|0)/2)|0); //@line 282 "multibytecodec.c"
        HEAP[$start]=$86; //@line 282 "multibytecodec.c"
        var $87=HEAP[$start]; //@line 283 "multibytecodec.c"
        var $88=HEAP[$esize]; //@line 283 "multibytecodec.c"
        var $89=((($87) + ($88))&4294967295); //@line 283 "multibytecodec.c"
        HEAP[$end]=$89; //@line 283 "multibytecodec.c"
        var $90=HEAP[$buf_addr]; //@line 286 "multibytecodec.c"
        var $91=(($90+20)&4294967295); //@line 286 "multibytecodec.c"
        var $92=HEAP[$91]; //@line 286 "multibytecodec.c"
        var $93=($92)==0; //@line 286 "multibytecodec.c"
        if ($93) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 286 "multibytecodec.c"
      case 21: // $bb20
        var $94=HEAP[$buf_addr]; //@line 287 "multibytecodec.c"
        var $95=(($94+8)&4294967295); //@line 287 "multibytecodec.c"
        var $96=HEAP[$95]; //@line 287 "multibytecodec.c"
        var $97=($96); //@line 287 "multibytecodec.c"
        var $98=HEAP[$buf_addr]; //@line 287 "multibytecodec.c"
        var $99=(($98+4)&4294967295); //@line 287 "multibytecodec.c"
        var $100=HEAP[$99]; //@line 287 "multibytecodec.c"
        var $101=($100); //@line 287 "multibytecodec.c"
        var $102=((($97) - ($101))&4294967295); //@line 287 "multibytecodec.c"
        var $103=((((($102))|0)/2)|0); //@line 287 "multibytecodec.c"
        var $104=HEAP[$buf_addr]; //@line 287 "multibytecodec.c"
        var $105=(($104+4)&4294967295); //@line 287 "multibytecodec.c"
        var $106=HEAP[$105]; //@line 287 "multibytecodec.c"
        var $107=HEAP[$codec_addr]; //@line 287 "multibytecodec.c"
        var $108=(($107)&4294967295); //@line 287 "multibytecodec.c"
        var $109=HEAP[$108]; //@line 287 "multibytecodec.c"
        var $110=HEAP[$start]; //@line 287 "multibytecodec.c"
        var $111=HEAP[$end]; //@line 287 "multibytecodec.c"
        var $112=HEAP[$reason]; //@line 287 "multibytecodec.c"
        var $113=_PyUnicodeEncodeError_Create($109, $106, $103, $110, $111, $112); //@line 287 "multibytecodec.c"
        var $114=HEAP[$buf_addr]; //@line 287 "multibytecodec.c"
        var $115=(($114+20)&4294967295); //@line 287 "multibytecodec.c"
        HEAP[$115]=$113; //@line 287 "multibytecodec.c"
        var $116=HEAP[$buf_addr]; //@line 291 "multibytecodec.c"
        var $117=(($116+20)&4294967295); //@line 291 "multibytecodec.c"
        var $118=HEAP[$117]; //@line 291 "multibytecodec.c"
        var $119=($118)==0; //@line 291 "multibytecodec.c"
        if ($119) { __label__ = 50; break; } else { __label__ = 22; break; } //@line 291 "multibytecodec.c"
      case 22: // $bb21
        __label__ = 26; break; //@line 291 "multibytecodec.c"
      case 23: // $bb22
        var $120=HEAP[$buf_addr]; //@line 295 "multibytecodec.c"
        var $121=(($120+20)&4294967295); //@line 295 "multibytecodec.c"
        var $122=HEAP[$121]; //@line 295 "multibytecodec.c"
        var $123=HEAP[$start]; //@line 295 "multibytecodec.c"
        var $124=_PyUnicodeEncodeError_SetStart($122, $123); //@line 295 "multibytecodec.c"
        var $125=((($124))|0)!=0; //@line 295 "multibytecodec.c"
        if ($125) { __label__ = 50; break; } else { __label__ = 24; break; } //@line 295 "multibytecodec.c"
      case 24: // $bb23
        var $126=HEAP[$buf_addr]; //@line 295 "multibytecodec.c"
        var $127=(($126+20)&4294967295); //@line 295 "multibytecodec.c"
        var $128=HEAP[$127]; //@line 295 "multibytecodec.c"
        var $129=HEAP[$end]; //@line 295 "multibytecodec.c"
        var $130=_PyUnicodeEncodeError_SetEnd($128, $129); //@line 295 "multibytecodec.c"
        var $131=((($130))|0)!=0; //@line 295 "multibytecodec.c"
        if ($131) { __label__ = 50; break; } else { __label__ = 25; break; } //@line 295 "multibytecodec.c"
      case 25: // $bb24
        var $132=HEAP[$buf_addr]; //@line 295 "multibytecodec.c"
        var $133=(($132+20)&4294967295); //@line 295 "multibytecodec.c"
        var $134=HEAP[$133]; //@line 295 "multibytecodec.c"
        var $135=HEAP[$reason]; //@line 295 "multibytecodec.c"
        var $136=_PyUnicodeEncodeError_SetReason($134, $135); //@line 295 "multibytecodec.c"
        var $137=((($136))|0)!=0; //@line 295 "multibytecodec.c"
        if ($137) { __label__ = 50; break; } else { __label__ = 26; break; } //@line 295 "multibytecodec.c"
      case 26: // $bb25
        var $138=HEAP[$errors_addr]; //@line 300 "multibytecodec.c"
        var $139=($138)==1; //@line 300 "multibytecodec.c"
        if ($139) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 300 "multibytecodec.c"
      case 27: // $bb26
        var $140=HEAP[$buf_addr]; //@line 301 "multibytecodec.c"
        var $141=(($140+20)&4294967295); //@line 301 "multibytecodec.c"
        var $142=HEAP[$141]; //@line 301 "multibytecodec.c"
        var $143=_PyCodec_StrictErrors($142); //@line 301 "multibytecodec.c"
        __label__ = 50; break; //@line 301 "multibytecodec.c"
      case 28: // $bb27
        var $144=HEAP[$buf_addr]; //@line 305 "multibytecodec.c"
        var $145=(($144+20)&4294967295); //@line 305 "multibytecodec.c"
        var $146=HEAP[$145]; //@line 305 "multibytecodec.c"
        var $147=HEAP[$errors_addr]; //@line 305 "multibytecodec.c"
        var $148=_call_error_callback($147, $146); //@line 305 "multibytecodec.c"
        HEAP[$retobj]=$148; //@line 305 "multibytecodec.c"
        var $149=HEAP[$retobj]; //@line 306 "multibytecodec.c"
        var $150=($149)==0; //@line 306 "multibytecodec.c"
        if ($150) { __label__ = 50; break; } else { __label__ = 29; break; } //@line 306 "multibytecodec.c"
      case 29: // $bb28
        var $151=HEAP[$retobj]; //@line 309 "multibytecodec.c"
        var $152=(($151+4)&4294967295); //@line 309 "multibytecodec.c"
        var $153=HEAP[$152]; //@line 309 "multibytecodec.c"
        var $154=(($153+84)&4294967295); //@line 309 "multibytecodec.c"
        var $155=HEAP[$154]; //@line 309 "multibytecodec.c"
        var $156=($155) & 67108864; //@line 309 "multibytecodec.c"
        var $157=((($156))|0)==0; //@line 309 "multibytecodec.c"
        if ($157) { __label__ = 34; break; } else { __label__ = 30; break; } //@line 309 "multibytecodec.c"
      case 30: // $bb29
        var $158=HEAP[$retobj]; //@line 309 "multibytecodec.c"
        var $159=$158; //@line 309 "multibytecodec.c"
        var $160=(($159+8)&4294967295); //@line 309 "multibytecodec.c"
        var $161=HEAP[$160]; //@line 309 "multibytecodec.c"
        var $162=((($161))|0)!=2; //@line 309 "multibytecodec.c"
        if ($162) { __label__ = 34; break; } else { __label__ = 31; break; } //@line 309 "multibytecodec.c"
      case 31: // $bb30
        var $163=HEAP[$retobj]; //@line 309 "multibytecodec.c"
        var $164=$163; //@line 309 "multibytecodec.c"
        var $165=(($164+12)&4294967295); //@line 309 "multibytecodec.c"
        var $166=(($165)&4294967295); //@line 309 "multibytecodec.c"
        var $167=HEAP[$166]; //@line 309 "multibytecodec.c"
        HEAP[$tobj]=$167; //@line 309 "multibytecodec.c"
        var $168=HEAP[$tobj]; //@line 309 "multibytecodec.c"
        var $169=(($168+4)&4294967295); //@line 309 "multibytecodec.c"
        var $170=HEAP[$169]; //@line 309 "multibytecodec.c"
        var $171=(($170+84)&4294967295); //@line 309 "multibytecodec.c"
        var $172=HEAP[$171]; //@line 309 "multibytecodec.c"
        var $173=($172) & 268435456; //@line 309 "multibytecodec.c"
        var $174=((($173))|0)==0; //@line 309 "multibytecodec.c"
        if ($174) { __label__ = 34; break; } else { __label__ = 32; break; } //@line 309 "multibytecodec.c"
      case 32: // $bb31
        var $175=HEAP[$retobj]; //@line 309 "multibytecodec.c"
        var $176=$175; //@line 309 "multibytecodec.c"
        var $177=(($176+12)&4294967295); //@line 309 "multibytecodec.c"
        var $178=(($177+4)&4294967295); //@line 309 "multibytecodec.c"
        var $179=HEAP[$178]; //@line 309 "multibytecodec.c"
        var $180=(($179+4)&4294967295); //@line 309 "multibytecodec.c"
        var $181=HEAP[$180]; //@line 309 "multibytecodec.c"
        var $182=(($181+84)&4294967295); //@line 309 "multibytecodec.c"
        var $183=HEAP[$182]; //@line 309 "multibytecodec.c"
        var $184=($183) & 8388608; //@line 309 "multibytecodec.c"
        var $185=((($184))|0)!=0; //@line 309 "multibytecodec.c"
        if ($185) { __label__ = 35; break; } else { __label__ = 33; break; } //@line 309 "multibytecodec.c"
      case 33: // $bb32
        var $186=HEAP[$retobj]; //@line 309 "multibytecodec.c"
        var $187=$186; //@line 309 "multibytecodec.c"
        var $188=(($187+12)&4294967295); //@line 309 "multibytecodec.c"
        var $189=(($188+4)&4294967295); //@line 309 "multibytecodec.c"
        var $190=HEAP[$189]; //@line 309 "multibytecodec.c"
        var $191=(($190+4)&4294967295); //@line 309 "multibytecodec.c"
        var $192=HEAP[$191]; //@line 309 "multibytecodec.c"
        var $193=(($192+84)&4294967295); //@line 309 "multibytecodec.c"
        var $194=HEAP[$193]; //@line 309 "multibytecodec.c"
        var $195=($194) & 16777216; //@line 309 "multibytecodec.c"
        var $196=((($195))|0)==0; //@line 309 "multibytecodec.c"
        if ($196) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 309 "multibytecodec.c"
      case 34: // $bb33
        var $197=HEAP[_PyExc_TypeError]; //@line 313 "multibytecodec.c"
        _PyErr_SetString($197, ((__str15)&4294967295)); //@line 313 "multibytecodec.c"
        __label__ = 50; break; //@line 313 "multibytecodec.c"
      case 35: // $bb34
        var $198=HEAP[$tobj]; //@line 320 "multibytecodec.c"
        var $199=$198; //@line 320 "multibytecodec.c"
        var $200=(($199+12)&4294967295); //@line 320 "multibytecodec.c"
        var $201=HEAP[$200]; //@line 320 "multibytecodec.c"
        HEAP[$uraw]=$201; //@line 320 "multibytecodec.c"
        var $202=HEAP[$tobj]; //@line 322 "multibytecodec.c"
        var $203=$202; //@line 322 "multibytecodec.c"
        var $204=(($203+8)&4294967295); //@line 322 "multibytecodec.c"
        var $205=HEAP[$204]; //@line 322 "multibytecodec.c"
        var $206=HEAP[$codec_addr]; //@line 322 "multibytecodec.c"
        var $207=HEAP[$state_addr]; //@line 322 "multibytecodec.c"
        var $208=_multibytecodec_encode($206, $207, $uraw, $205, 1, 1); //@line 322 "multibytecodec.c"
        HEAP[$retstr]=$208; //@line 322 "multibytecodec.c"
        var $209=HEAP[$retstr]; //@line 325 "multibytecodec.c"
        var $210=($209)==0; //@line 325 "multibytecodec.c"
        if ($210) { __label__ = 50; break; } else { __label__ = 36; break; } //@line 325 "multibytecodec.c"
      case 36: // $bb35
        var $211=HEAP[$retstr]; //@line 329 "multibytecodec.c"
        var $212=$211; //@line 329 "multibytecodec.c"
        var $213=(($212+8)&4294967295); //@line 329 "multibytecodec.c"
        var $214=HEAP[$213]; //@line 329 "multibytecodec.c"
        HEAP[$retstrsize]=$214; //@line 329 "multibytecodec.c"
        var $215=HEAP[$retstrsize]; //@line 330 "multibytecodec.c"
        var $216=((($215))|0) <= 0; //@line 330 "multibytecodec.c"
        if ($216) { __label__ = 38; break; } else { __label__ = 37; break; } //@line 330 "multibytecodec.c"
      case 37: // $bb36
        var $217=HEAP[$buf_addr]; //@line 330 "multibytecodec.c"
        var $218=(($217+12)&4294967295); //@line 330 "multibytecodec.c"
        var $219=HEAP[$218]; //@line 330 "multibytecodec.c"
        var $220=HEAP[$retstrsize]; //@line 330 "multibytecodec.c"
        var $221=(($219+$220)&4294967295); //@line 330 "multibytecodec.c"
        var $222=HEAP[$buf_addr]; //@line 330 "multibytecodec.c"
        var $223=(($222+16)&4294967295); //@line 330 "multibytecodec.c"
        var $224=HEAP[$223]; //@line 330 "multibytecodec.c"
        var $225=($221) > ($224); //@line 330 "multibytecodec.c"
        if ($225) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 330 "multibytecodec.c"
      case 38: // $bb37
        var $226=HEAP[$buf_addr]; //@line 330 "multibytecodec.c"
        var $227=HEAP[$retstrsize]; //@line 330 "multibytecodec.c"
        var $228=_expand_encodebuffer($226, $227); //@line 330 "multibytecodec.c"
        var $229=((($228))|0)==-1; //@line 330 "multibytecodec.c"
        if ($229) { __label__ = 50; break; } else { __label__ = 39; break; } //@line 330 "multibytecodec.c"
      case 39: // $bb38
        var $230=HEAP[$retstrsize]; //@line 332 "multibytecodec.c"
        var $231=HEAP[$retstr]; //@line 332 "multibytecodec.c"
        var $232=$231; //@line 332 "multibytecodec.c"
        var $233=(($232+20)&4294967295); //@line 332 "multibytecodec.c"
        var $234=(($233)&4294967295); //@line 332 "multibytecodec.c"
        var $235=HEAP[$buf_addr]; //@line 332 "multibytecodec.c"
        var $236=(($235+12)&4294967295); //@line 332 "multibytecodec.c"
        var $237=HEAP[$236]; //@line 332 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($237, $234, $230, 1, 0); //@line 332 "multibytecodec.c"
        var $238=HEAP[$buf_addr]; //@line 333 "multibytecodec.c"
        var $239=(($238+12)&4294967295); //@line 333 "multibytecodec.c"
        var $240=HEAP[$239]; //@line 333 "multibytecodec.c"
        var $241=HEAP[$retstrsize]; //@line 333 "multibytecodec.c"
        var $242=(($240+$241)&4294967295); //@line 333 "multibytecodec.c"
        var $243=HEAP[$buf_addr]; //@line 333 "multibytecodec.c"
        var $244=(($243+12)&4294967295); //@line 333 "multibytecodec.c"
        HEAP[$244]=$242; //@line 333 "multibytecodec.c"
        var $245=HEAP[$retobj]; //@line 335 "multibytecodec.c"
        var $246=$245; //@line 335 "multibytecodec.c"
        var $247=(($246+12)&4294967295); //@line 335 "multibytecodec.c"
        var $248=(($247+4)&4294967295); //@line 335 "multibytecodec.c"
        var $249=HEAP[$248]; //@line 335 "multibytecodec.c"
        var $250=_PyInt_AsSsize_t($249); //@line 335 "multibytecodec.c"
        HEAP[$newpos]=$250; //@line 335 "multibytecodec.c"
        var $251=HEAP[$newpos]; //@line 336 "multibytecodec.c"
        var $252=((($251))|0) < 0; //@line 336 "multibytecodec.c"
        if ($252) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 336 "multibytecodec.c"
      case 40: // $bb39
        var $253=_PyErr_Occurred(); //@line 336 "multibytecodec.c"
        var $254=($253)==0; //@line 336 "multibytecodec.c"
        if ($254) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 336 "multibytecodec.c"
      case 41: // $bb40
        var $255=HEAP[$buf_addr]; //@line 337 "multibytecodec.c"
        var $256=(($255+8)&4294967295); //@line 337 "multibytecodec.c"
        var $257=HEAP[$256]; //@line 337 "multibytecodec.c"
        var $258=($257); //@line 337 "multibytecodec.c"
        var $259=HEAP[$buf_addr]; //@line 337 "multibytecodec.c"
        var $260=(($259+4)&4294967295); //@line 337 "multibytecodec.c"
        var $261=HEAP[$260]; //@line 337 "multibytecodec.c"
        var $262=($261); //@line 337 "multibytecodec.c"
        var $263=((($258) - ($262))&4294967295); //@line 337 "multibytecodec.c"
        var $264=((((($263))|0)/2)|0); //@line 337 "multibytecodec.c"
        var $265=HEAP[$newpos]; //@line 337 "multibytecodec.c"
        var $266=((($264) + ($265))&4294967295); //@line 337 "multibytecodec.c"
        HEAP[$newpos]=$266; //@line 337 "multibytecodec.c"
        __label__ = 42; break; //@line 337 "multibytecodec.c"
      case 42: // $bb41
        var $267=HEAP[$newpos]; //@line 338 "multibytecodec.c"
        var $268=((($267))|0) < 0; //@line 338 "multibytecodec.c"
        if ($268) { __label__ = 44; break; } else { __label__ = 43; break; } //@line 338 "multibytecodec.c"
      case 43: // $bb42
        var $269=HEAP[$buf_addr]; //@line 338 "multibytecodec.c"
        var $270=(($269+4)&4294967295); //@line 338 "multibytecodec.c"
        var $271=HEAP[$270]; //@line 338 "multibytecodec.c"
        var $272=HEAP[$newpos]; //@line 338 "multibytecodec.c"
        var $273=(($271+2*$272)&4294967295); //@line 338 "multibytecodec.c"
        var $274=HEAP[$buf_addr]; //@line 338 "multibytecodec.c"
        var $275=(($274+8)&4294967295); //@line 338 "multibytecodec.c"
        var $276=HEAP[$275]; //@line 338 "multibytecodec.c"
        var $277=($273) > ($276); //@line 338 "multibytecodec.c"
        if ($277) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 338 "multibytecodec.c"
      case 44: // $bb43
        _PyErr_Clear(); //@line 339 "multibytecodec.c"
        var $278=HEAP[_PyExc_IndexError]; //@line 340 "multibytecodec.c"
        var $279=HEAP[$newpos]; //@line 340 "multibytecodec.c"
        var $280=_PyErr_Format($278, ((__str16)&4294967295), $279); //@line 340 "multibytecodec.c"
        __label__ = 50; break; //@line 340 "multibytecodec.c"
      case 45: // $bb44
        var $281=HEAP[$buf_addr]; //@line 345 "multibytecodec.c"
        var $282=(($281+4)&4294967295); //@line 345 "multibytecodec.c"
        var $283=HEAP[$282]; //@line 345 "multibytecodec.c"
        var $284=HEAP[$newpos]; //@line 345 "multibytecodec.c"
        var $285=(($283+2*$284)&4294967295); //@line 345 "multibytecodec.c"
        var $286=HEAP[$buf_addr]; //@line 345 "multibytecodec.c"
        var $287=(($286)&4294967295); //@line 345 "multibytecodec.c"
        HEAP[$287]=$285; //@line 345 "multibytecodec.c"
        var $288=HEAP[$retobj]; //@line 347 "multibytecodec.c"
        var $289=(($288)&4294967295); //@line 347 "multibytecodec.c"
        var $290=HEAP[$289]; //@line 347 "multibytecodec.c"
        var $291=((($290) - 1)&4294967295); //@line 347 "multibytecodec.c"
        var $292=HEAP[$retobj]; //@line 347 "multibytecodec.c"
        var $293=(($292)&4294967295); //@line 347 "multibytecodec.c"
        HEAP[$293]=$291; //@line 347 "multibytecodec.c"
        var $294=HEAP[$retobj]; //@line 347 "multibytecodec.c"
        var $295=(($294)&4294967295); //@line 347 "multibytecodec.c"
        var $296=HEAP[$295]; //@line 347 "multibytecodec.c"
        var $297=((($296))|0)==0; //@line 347 "multibytecodec.c"
        if ($297) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 347 "multibytecodec.c"
      case 46: // $bb45
        var $298=HEAP[$retobj]; //@line 347 "multibytecodec.c"
        var $299=(($298+4)&4294967295); //@line 347 "multibytecodec.c"
        var $300=HEAP[$299]; //@line 347 "multibytecodec.c"
        var $301=(($300+24)&4294967295); //@line 347 "multibytecodec.c"
        var $302=HEAP[$301]; //@line 347 "multibytecodec.c"
        var $303=HEAP[$retobj]; //@line 347 "multibytecodec.c"
        FUNCTION_TABLE[$302]($303); //@line 347 "multibytecodec.c"
        __label__ = 47; break; //@line 347 "multibytecodec.c"
      case 47: // $bb46
        var $304=HEAP[$retstr]; //@line 348 "multibytecodec.c"
        var $305=(($304)&4294967295); //@line 348 "multibytecodec.c"
        var $306=HEAP[$305]; //@line 348 "multibytecodec.c"
        var $307=((($306) - 1)&4294967295); //@line 348 "multibytecodec.c"
        var $308=HEAP[$retstr]; //@line 348 "multibytecodec.c"
        var $309=(($308)&4294967295); //@line 348 "multibytecodec.c"
        HEAP[$309]=$307; //@line 348 "multibytecodec.c"
        var $310=HEAP[$retstr]; //@line 348 "multibytecodec.c"
        var $311=(($310)&4294967295); //@line 348 "multibytecodec.c"
        var $312=HEAP[$311]; //@line 348 "multibytecodec.c"
        var $313=((($312))|0)==0; //@line 348 "multibytecodec.c"
        if ($313) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 348 "multibytecodec.c"
      case 48: // $bb47
        var $314=HEAP[$retstr]; //@line 348 "multibytecodec.c"
        var $315=(($314+4)&4294967295); //@line 348 "multibytecodec.c"
        var $316=HEAP[$315]; //@line 348 "multibytecodec.c"
        var $317=(($316+24)&4294967295); //@line 348 "multibytecodec.c"
        var $318=HEAP[$317]; //@line 348 "multibytecodec.c"
        var $319=HEAP[$retstr]; //@line 348 "multibytecodec.c"
        FUNCTION_TABLE[$318]($319); //@line 348 "multibytecodec.c"
        __label__ = 49; break; //@line 348 "multibytecodec.c"
      case 49: // $bb48
        HEAP[$0]=0; //@line 349 "multibytecodec.c"
        __label__ = 57; break; //@line 349 "multibytecodec.c"
      case 50: // $errorexit
        var $320=HEAP[$retobj]; //@line 352 "multibytecodec.c"
        var $321=($320)!=0; //@line 352 "multibytecodec.c"
        if ($321) { __label__ = 51; break; } else { __label__ = 53; break; } //@line 352 "multibytecodec.c"
      case 51: // $bb49
        var $322=HEAP[$retobj]; //@line 352 "multibytecodec.c"
        var $323=(($322)&4294967295); //@line 352 "multibytecodec.c"
        var $324=HEAP[$323]; //@line 352 "multibytecodec.c"
        var $325=((($324) - 1)&4294967295); //@line 352 "multibytecodec.c"
        var $326=HEAP[$retobj]; //@line 352 "multibytecodec.c"
        var $327=(($326)&4294967295); //@line 352 "multibytecodec.c"
        HEAP[$327]=$325; //@line 352 "multibytecodec.c"
        var $328=HEAP[$retobj]; //@line 352 "multibytecodec.c"
        var $329=(($328)&4294967295); //@line 352 "multibytecodec.c"
        var $330=HEAP[$329]; //@line 352 "multibytecodec.c"
        var $331=((($330))|0)==0; //@line 352 "multibytecodec.c"
        if ($331) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 352 "multibytecodec.c"
      case 52: // $bb50
        var $332=HEAP[$retobj]; //@line 352 "multibytecodec.c"
        var $333=(($332+4)&4294967295); //@line 352 "multibytecodec.c"
        var $334=HEAP[$333]; //@line 352 "multibytecodec.c"
        var $335=(($334+24)&4294967295); //@line 352 "multibytecodec.c"
        var $336=HEAP[$335]; //@line 352 "multibytecodec.c"
        var $337=HEAP[$retobj]; //@line 352 "multibytecodec.c"
        FUNCTION_TABLE[$336]($337); //@line 352 "multibytecodec.c"
        __label__ = 53; break; //@line 352 "multibytecodec.c"
      case 53: // $bb51
        var $338=HEAP[$retstr]; //@line 353 "multibytecodec.c"
        var $339=($338)!=0; //@line 353 "multibytecodec.c"
        if ($339) { __label__ = 54; break; } else { __label__ = 56; break; } //@line 353 "multibytecodec.c"
      case 54: // $bb52
        var $340=HEAP[$retstr]; //@line 353 "multibytecodec.c"
        var $341=(($340)&4294967295); //@line 353 "multibytecodec.c"
        var $342=HEAP[$341]; //@line 353 "multibytecodec.c"
        var $343=((($342) - 1)&4294967295); //@line 353 "multibytecodec.c"
        var $344=HEAP[$retstr]; //@line 353 "multibytecodec.c"
        var $345=(($344)&4294967295); //@line 353 "multibytecodec.c"
        HEAP[$345]=$343; //@line 353 "multibytecodec.c"
        var $346=HEAP[$retstr]; //@line 353 "multibytecodec.c"
        var $347=(($346)&4294967295); //@line 353 "multibytecodec.c"
        var $348=HEAP[$347]; //@line 353 "multibytecodec.c"
        var $349=((($348))|0)==0; //@line 353 "multibytecodec.c"
        if ($349) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 353 "multibytecodec.c"
      case 55: // $bb53
        var $350=HEAP[$retstr]; //@line 353 "multibytecodec.c"
        var $351=(($350+4)&4294967295); //@line 353 "multibytecodec.c"
        var $352=HEAP[$351]; //@line 353 "multibytecodec.c"
        var $353=(($352+24)&4294967295); //@line 353 "multibytecodec.c"
        var $354=HEAP[$353]; //@line 353 "multibytecodec.c"
        var $355=HEAP[$retstr]; //@line 353 "multibytecodec.c"
        FUNCTION_TABLE[$354]($355); //@line 353 "multibytecodec.c"
        __label__ = 56; break; //@line 353 "multibytecodec.c"
      case 56: // $bb54
        HEAP[$0]=-1; //@line 354 "multibytecodec.c"
        __label__ = 57; break; //@line 354 "multibytecodec.c"
      case 57: // $bb55
        var $356=HEAP[$0]; //@line 238 "multibytecodec.c"
        HEAP[$retval]=$356; //@line 238 "multibytecodec.c"
        __label__ = 58; break; //@line 238 "multibytecodec.c"
      case 58: // $return
        var $retval56=HEAP[$retval]; //@line 238 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval56; //@line 238 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _multibytecodec_decerror($codec, $state, $buf, $errors, $e) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $codec_addr=__stackBase__;
        var $state_addr=__stackBase__+4;
        var $buf_addr=__stackBase__+8;
        var $errors_addr=__stackBase__+12;
        var $e_addr=__stackBase__+16;
        var $retval=__stackBase__+20;
        var $0=__stackBase__+24;
        var $retobj=__stackBase__+28;
        var $retuni=__stackBase__+32;
        var $retunisize=__stackBase__+36;
        var $newpos=__stackBase__+40;
        var $reason=__stackBase__+44;
        var $esize=__stackBase__+48;
        var $start=__stackBase__+52;
        var $end=__stackBase__+56;
        var $_alloca_point_=0;
        HEAP[$codec_addr]=$codec;
        HEAP[$state_addr]=$state;
        HEAP[$buf_addr]=$buf;
        HEAP[$errors_addr]=$errors;
        HEAP[$e_addr]=$e;
        HEAP[$retobj]=0; //@line 363 "multibytecodec.c"
        HEAP[$retuni]=0; //@line 363 "multibytecodec.c"
        var $1=HEAP[$e_addr]; //@line 368 "multibytecodec.c"
        var $2=((($1))|0) > 0; //@line 368 "multibytecodec.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 368 "multibytecodec.c"
      case 1: // $bb
        HEAP[$reason]=((__str11)&4294967295); //@line 369 "multibytecodec.c"
        var $3=HEAP[$e_addr]; //@line 370 "multibytecodec.c"
        HEAP[$esize]=$3; //@line 370 "multibytecodec.c"
        __label__ = 8; break; //@line 370 "multibytecodec.c"
      case 2: // $bb1
        var $4=HEAP[$e_addr]; //@line 373 "multibytecodec.c"
        if ($4 == -3) {
          __label__ = 6; break;
        }
        else if ($4 == -2) {
          __label__ = 5; break;
        }
        else if ($4 == -1) {
          __label__ = 3; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 3: // $bb2
        var $5=HEAP[$buf_addr]; //@line 375 "multibytecodec.c"
        var $6=_expand_decodebuffer($5, -1); //@line 375 "multibytecodec.c"
        var $7=((($6))|0)==-1; //@line 375 "multibytecodec.c"
        if ($7) { __label__ = 44; break; } else { __label__ = 4; break; } //@line 375 "multibytecodec.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 376 "multibytecodec.c"
        __label__ = 48; break; //@line 376 "multibytecodec.c"
      case 5: // $bb4
        HEAP[$reason]=((__str12)&4294967295); //@line 378 "multibytecodec.c"
        var $8=HEAP[$buf_addr]; //@line 379 "multibytecodec.c"
        var $9=(($8+8)&4294967295); //@line 379 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 379 "multibytecodec.c"
        var $11=($10); //@line 379 "multibytecodec.c"
        var $12=HEAP[$buf_addr]; //@line 379 "multibytecodec.c"
        var $13=(($12)&4294967295); //@line 379 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 379 "multibytecodec.c"
        var $15=($14); //@line 379 "multibytecodec.c"
        var $16=((($11) - ($15))&4294967295); //@line 379 "multibytecodec.c"
        HEAP[$esize]=$16; //@line 379 "multibytecodec.c"
        __label__ = 8; break; //@line 379 "multibytecodec.c"
      case 6: // $bb5
        var $17=HEAP[_PyExc_RuntimeError]; //@line 382 "multibytecodec.c"
        _PyErr_SetString($17, ((__str13)&4294967295)); //@line 382 "multibytecodec.c"
        HEAP[$0]=-1; //@line 384 "multibytecodec.c"
        __label__ = 48; break; //@line 384 "multibytecodec.c"
      case 7: // $bb6
        var $18=HEAP[_PyExc_RuntimeError]; //@line 386 "multibytecodec.c"
        _PyErr_SetString($18, ((__str14)&4294967295)); //@line 386 "multibytecodec.c"
        HEAP[$0]=-1; //@line 388 "multibytecodec.c"
        __label__ = 48; break; //@line 388 "multibytecodec.c"
      case 8: // $bb7
        var $19=HEAP[$errors_addr]; //@line 392 "multibytecodec.c"
        var $20=($19)==3; //@line 392 "multibytecodec.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 392 "multibytecodec.c"
      case 9: // $bb8
        var $21=HEAP[$buf_addr]; //@line 393 "multibytecodec.c"
        var $22=(($21+12)&4294967295); //@line 393 "multibytecodec.c"
        var $23=HEAP[$22]; //@line 393 "multibytecodec.c"
        var $24=(($23+2)&4294967295); //@line 393 "multibytecodec.c"
        var $25=HEAP[$buf_addr]; //@line 393 "multibytecodec.c"
        var $26=(($25+16)&4294967295); //@line 393 "multibytecodec.c"
        var $27=HEAP[$26]; //@line 393 "multibytecodec.c"
        var $28=($24) > ($27); //@line 393 "multibytecodec.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 393 "multibytecodec.c"
      case 10: // $bb9
        var $29=HEAP[$buf_addr]; //@line 393 "multibytecodec.c"
        var $30=_expand_decodebuffer($29, 1); //@line 393 "multibytecodec.c"
        var $31=((($30))|0)==-1; //@line 393 "multibytecodec.c"
        if ($31) { __label__ = 44; break; } else { __label__ = 11; break; } //@line 393 "multibytecodec.c"
      case 11: // $bb10
        var $32=HEAP[$buf_addr]; //@line 394 "multibytecodec.c"
        var $33=(($32+12)&4294967295); //@line 394 "multibytecodec.c"
        var $34=HEAP[$33]; //@line 394 "multibytecodec.c"
        HEAP[$34]=-3; //@line 394 "multibytecodec.c"
        var $35=(($34+2)&4294967295); //@line 394 "multibytecodec.c"
        var $36=HEAP[$buf_addr]; //@line 394 "multibytecodec.c"
        var $37=(($36+12)&4294967295); //@line 394 "multibytecodec.c"
        HEAP[$37]=$35; //@line 394 "multibytecodec.c"
        __label__ = 12; break; //@line 394 "multibytecodec.c"
      case 12: // $bb11
        var $38=HEAP[$errors_addr]; //@line 396 "multibytecodec.c"
        var $39=($38)==2; //@line 396 "multibytecodec.c"
        if ($39) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 396 "multibytecodec.c"
      case 13: // $bb12
        var $40=HEAP[$errors_addr]; //@line 396 "multibytecodec.c"
        var $41=($40)==3; //@line 396 "multibytecodec.c"
        if ($41) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 396 "multibytecodec.c"
      case 14: // $bb13
        var $42=HEAP[$buf_addr]; //@line 397 "multibytecodec.c"
        var $43=(($42)&4294967295); //@line 397 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 397 "multibytecodec.c"
        var $45=HEAP[$esize]; //@line 397 "multibytecodec.c"
        var $46=(($44+$45)&4294967295); //@line 397 "multibytecodec.c"
        var $47=HEAP[$buf_addr]; //@line 397 "multibytecodec.c"
        var $48=(($47)&4294967295); //@line 397 "multibytecodec.c"
        HEAP[$48]=$46; //@line 397 "multibytecodec.c"
        HEAP[$0]=0; //@line 398 "multibytecodec.c"
        __label__ = 48; break; //@line 398 "multibytecodec.c"
      case 15: // $bb14
        var $49=HEAP[$buf_addr]; //@line 401 "multibytecodec.c"
        var $50=(($49)&4294967295); //@line 401 "multibytecodec.c"
        var $51=HEAP[$50]; //@line 401 "multibytecodec.c"
        var $52=($51); //@line 401 "multibytecodec.c"
        var $53=HEAP[$buf_addr]; //@line 401 "multibytecodec.c"
        var $54=(($53+4)&4294967295); //@line 401 "multibytecodec.c"
        var $55=HEAP[$54]; //@line 401 "multibytecodec.c"
        var $56=($55); //@line 401 "multibytecodec.c"
        var $57=((($52) - ($56))&4294967295); //@line 401 "multibytecodec.c"
        HEAP[$start]=$57; //@line 401 "multibytecodec.c"
        var $58=HEAP[$start]; //@line 402 "multibytecodec.c"
        var $59=HEAP[$esize]; //@line 402 "multibytecodec.c"
        var $60=((($58) + ($59))&4294967295); //@line 402 "multibytecodec.c"
        HEAP[$end]=$60; //@line 402 "multibytecodec.c"
        var $61=HEAP[$buf_addr]; //@line 405 "multibytecodec.c"
        var $62=(($61+20)&4294967295); //@line 405 "multibytecodec.c"
        var $63=HEAP[$62]; //@line 405 "multibytecodec.c"
        var $64=($63)==0; //@line 405 "multibytecodec.c"
        if ($64) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 405 "multibytecodec.c"
      case 16: // $bb15
        var $65=HEAP[$buf_addr]; //@line 406 "multibytecodec.c"
        var $66=(($65+8)&4294967295); //@line 406 "multibytecodec.c"
        var $67=HEAP[$66]; //@line 406 "multibytecodec.c"
        var $68=($67); //@line 406 "multibytecodec.c"
        var $69=HEAP[$buf_addr]; //@line 406 "multibytecodec.c"
        var $70=(($69+4)&4294967295); //@line 406 "multibytecodec.c"
        var $71=HEAP[$70]; //@line 406 "multibytecodec.c"
        var $72=($71); //@line 406 "multibytecodec.c"
        var $73=((($68) - ($72))&4294967295); //@line 406 "multibytecodec.c"
        var $74=HEAP[$buf_addr]; //@line 406 "multibytecodec.c"
        var $75=(($74+4)&4294967295); //@line 406 "multibytecodec.c"
        var $76=HEAP[$75]; //@line 406 "multibytecodec.c"
        var $77=HEAP[$codec_addr]; //@line 406 "multibytecodec.c"
        var $78=(($77)&4294967295); //@line 406 "multibytecodec.c"
        var $79=HEAP[$78]; //@line 406 "multibytecodec.c"
        var $80=HEAP[$start]; //@line 406 "multibytecodec.c"
        var $81=HEAP[$end]; //@line 406 "multibytecodec.c"
        var $82=HEAP[$reason]; //@line 406 "multibytecodec.c"
        var $83=_PyUnicodeDecodeError_Create($79, $76, $73, $80, $81, $82); //@line 406 "multibytecodec.c"
        var $84=HEAP[$buf_addr]; //@line 406 "multibytecodec.c"
        var $85=(($84+20)&4294967295); //@line 406 "multibytecodec.c"
        HEAP[$85]=$83; //@line 406 "multibytecodec.c"
        var $86=HEAP[$buf_addr]; //@line 410 "multibytecodec.c"
        var $87=(($86+20)&4294967295); //@line 410 "multibytecodec.c"
        var $88=HEAP[$87]; //@line 410 "multibytecodec.c"
        var $89=($88)==0; //@line 410 "multibytecodec.c"
        if ($89) { __label__ = 44; break; } else { __label__ = 17; break; } //@line 410 "multibytecodec.c"
      case 17: // $bb16
        __label__ = 21; break; //@line 410 "multibytecodec.c"
      case 18: // $bb17
        var $90=HEAP[$buf_addr]; //@line 414 "multibytecodec.c"
        var $91=(($90+20)&4294967295); //@line 414 "multibytecodec.c"
        var $92=HEAP[$91]; //@line 414 "multibytecodec.c"
        var $93=HEAP[$start]; //@line 414 "multibytecodec.c"
        var $94=_PyUnicodeDecodeError_SetStart($92, $93); //@line 414 "multibytecodec.c"
        var $95=((($94))|0)!=0; //@line 414 "multibytecodec.c"
        if ($95) { __label__ = 44; break; } else { __label__ = 19; break; } //@line 414 "multibytecodec.c"
      case 19: // $bb18
        var $96=HEAP[$buf_addr]; //@line 414 "multibytecodec.c"
        var $97=(($96+20)&4294967295); //@line 414 "multibytecodec.c"
        var $98=HEAP[$97]; //@line 414 "multibytecodec.c"
        var $99=HEAP[$end]; //@line 414 "multibytecodec.c"
        var $100=_PyUnicodeDecodeError_SetEnd($98, $99); //@line 414 "multibytecodec.c"
        var $101=((($100))|0)!=0; //@line 414 "multibytecodec.c"
        if ($101) { __label__ = 44; break; } else { __label__ = 20; break; } //@line 414 "multibytecodec.c"
      case 20: // $bb19
        var $102=HEAP[$buf_addr]; //@line 414 "multibytecodec.c"
        var $103=(($102+20)&4294967295); //@line 414 "multibytecodec.c"
        var $104=HEAP[$103]; //@line 414 "multibytecodec.c"
        var $105=HEAP[$reason]; //@line 414 "multibytecodec.c"
        var $106=_PyUnicodeDecodeError_SetReason($104, $105); //@line 414 "multibytecodec.c"
        var $107=((($106))|0)!=0; //@line 414 "multibytecodec.c"
        if ($107) { __label__ = 44; break; } else { __label__ = 21; break; } //@line 414 "multibytecodec.c"
      case 21: // $bb20
        var $108=HEAP[$errors_addr]; //@line 419 "multibytecodec.c"
        var $109=($108)==1; //@line 419 "multibytecodec.c"
        if ($109) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 419 "multibytecodec.c"
      case 22: // $bb21
        var $110=HEAP[$buf_addr]; //@line 420 "multibytecodec.c"
        var $111=(($110+20)&4294967295); //@line 420 "multibytecodec.c"
        var $112=HEAP[$111]; //@line 420 "multibytecodec.c"
        var $113=_PyCodec_StrictErrors($112); //@line 420 "multibytecodec.c"
        __label__ = 44; break; //@line 420 "multibytecodec.c"
      case 23: // $bb22
        var $114=HEAP[$buf_addr]; //@line 424 "multibytecodec.c"
        var $115=(($114+20)&4294967295); //@line 424 "multibytecodec.c"
        var $116=HEAP[$115]; //@line 424 "multibytecodec.c"
        var $117=HEAP[$errors_addr]; //@line 424 "multibytecodec.c"
        var $118=_call_error_callback($117, $116); //@line 424 "multibytecodec.c"
        HEAP[$retobj]=$118; //@line 424 "multibytecodec.c"
        var $119=HEAP[$retobj]; //@line 425 "multibytecodec.c"
        var $120=($119)==0; //@line 425 "multibytecodec.c"
        if ($120) { __label__ = 44; break; } else { __label__ = 24; break; } //@line 425 "multibytecodec.c"
      case 24: // $bb23
        var $121=HEAP[$retobj]; //@line 428 "multibytecodec.c"
        var $122=(($121+4)&4294967295); //@line 428 "multibytecodec.c"
        var $123=HEAP[$122]; //@line 428 "multibytecodec.c"
        var $124=(($123+84)&4294967295); //@line 428 "multibytecodec.c"
        var $125=HEAP[$124]; //@line 428 "multibytecodec.c"
        var $126=($125) & 67108864; //@line 428 "multibytecodec.c"
        var $127=((($126))|0)==0; //@line 428 "multibytecodec.c"
        if ($127) { __label__ = 29; break; } else { __label__ = 25; break; } //@line 428 "multibytecodec.c"
      case 25: // $bb24
        var $128=HEAP[$retobj]; //@line 428 "multibytecodec.c"
        var $129=$128; //@line 428 "multibytecodec.c"
        var $130=(($129+8)&4294967295); //@line 428 "multibytecodec.c"
        var $131=HEAP[$130]; //@line 428 "multibytecodec.c"
        var $132=((($131))|0)!=2; //@line 428 "multibytecodec.c"
        if ($132) { __label__ = 29; break; } else { __label__ = 26; break; } //@line 428 "multibytecodec.c"
      case 26: // $bb25
        var $133=HEAP[$retobj]; //@line 428 "multibytecodec.c"
        var $134=$133; //@line 428 "multibytecodec.c"
        var $135=(($134+12)&4294967295); //@line 428 "multibytecodec.c"
        var $136=(($135)&4294967295); //@line 428 "multibytecodec.c"
        var $137=HEAP[$136]; //@line 428 "multibytecodec.c"
        HEAP[$retuni]=$137; //@line 428 "multibytecodec.c"
        var $138=HEAP[$retuni]; //@line 428 "multibytecodec.c"
        var $139=(($138+4)&4294967295); //@line 428 "multibytecodec.c"
        var $140=HEAP[$139]; //@line 428 "multibytecodec.c"
        var $141=(($140+84)&4294967295); //@line 428 "multibytecodec.c"
        var $142=HEAP[$141]; //@line 428 "multibytecodec.c"
        var $143=($142) & 268435456; //@line 428 "multibytecodec.c"
        var $144=((($143))|0)==0; //@line 428 "multibytecodec.c"
        if ($144) { __label__ = 29; break; } else { __label__ = 27; break; } //@line 428 "multibytecodec.c"
      case 27: // $bb26
        var $145=HEAP[$retobj]; //@line 428 "multibytecodec.c"
        var $146=$145; //@line 428 "multibytecodec.c"
        var $147=(($146+12)&4294967295); //@line 428 "multibytecodec.c"
        var $148=(($147+4)&4294967295); //@line 428 "multibytecodec.c"
        var $149=HEAP[$148]; //@line 428 "multibytecodec.c"
        var $150=(($149+4)&4294967295); //@line 428 "multibytecodec.c"
        var $151=HEAP[$150]; //@line 428 "multibytecodec.c"
        var $152=(($151+84)&4294967295); //@line 428 "multibytecodec.c"
        var $153=HEAP[$152]; //@line 428 "multibytecodec.c"
        var $154=($153) & 8388608; //@line 428 "multibytecodec.c"
        var $155=((($154))|0)!=0; //@line 428 "multibytecodec.c"
        if ($155) { __label__ = 30; break; } else { __label__ = 28; break; } //@line 428 "multibytecodec.c"
      case 28: // $bb27
        var $156=HEAP[$retobj]; //@line 428 "multibytecodec.c"
        var $157=$156; //@line 428 "multibytecodec.c"
        var $158=(($157+12)&4294967295); //@line 428 "multibytecodec.c"
        var $159=(($158+4)&4294967295); //@line 428 "multibytecodec.c"
        var $160=HEAP[$159]; //@line 428 "multibytecodec.c"
        var $161=(($160+4)&4294967295); //@line 428 "multibytecodec.c"
        var $162=HEAP[$161]; //@line 428 "multibytecodec.c"
        var $163=(($162+84)&4294967295); //@line 428 "multibytecodec.c"
        var $164=HEAP[$163]; //@line 428 "multibytecodec.c"
        var $165=($164) & 16777216; //@line 428 "multibytecodec.c"
        var $166=((($165))|0)==0; //@line 428 "multibytecodec.c"
        if ($166) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 428 "multibytecodec.c"
      case 29: // $bb28
        var $167=HEAP[_PyExc_TypeError]; //@line 432 "multibytecodec.c"
        _PyErr_SetString($167, ((__str17)&4294967295)); //@line 432 "multibytecodec.c"
        __label__ = 44; break; //@line 432 "multibytecodec.c"
      case 30: // $bb29
        var $168=HEAP[$retuni]; //@line 438 "multibytecodec.c"
        var $169=$168; //@line 438 "multibytecodec.c"
        var $170=(($169+8)&4294967295); //@line 438 "multibytecodec.c"
        var $171=HEAP[$170]; //@line 438 "multibytecodec.c"
        HEAP[$retunisize]=$171; //@line 438 "multibytecodec.c"
        var $172=HEAP[$retunisize]; //@line 439 "multibytecodec.c"
        var $173=((($172))|0) > 0; //@line 439 "multibytecodec.c"
        if ($173) { __label__ = 31; break; } else { __label__ = 35; break; } //@line 439 "multibytecodec.c"
      case 31: // $bb30
        var $174=HEAP[$retunisize]; //@line 440 "multibytecodec.c"
        var $175=((($174))|0) <= 0; //@line 440 "multibytecodec.c"
        if ($175) { __label__ = 33; break; } else { __label__ = 32; break; } //@line 440 "multibytecodec.c"
      case 32: // $bb31
        var $176=HEAP[$buf_addr]; //@line 440 "multibytecodec.c"
        var $177=(($176+12)&4294967295); //@line 440 "multibytecodec.c"
        var $178=HEAP[$177]; //@line 440 "multibytecodec.c"
        var $179=HEAP[$retunisize]; //@line 440 "multibytecodec.c"
        var $180=(($178+2*$179)&4294967295); //@line 440 "multibytecodec.c"
        var $181=HEAP[$buf_addr]; //@line 440 "multibytecodec.c"
        var $182=(($181+16)&4294967295); //@line 440 "multibytecodec.c"
        var $183=HEAP[$182]; //@line 440 "multibytecodec.c"
        var $184=($180) > ($183); //@line 440 "multibytecodec.c"
        if ($184) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 440 "multibytecodec.c"
      case 33: // $bb32
        var $185=HEAP[$buf_addr]; //@line 440 "multibytecodec.c"
        var $186=HEAP[$retunisize]; //@line 440 "multibytecodec.c"
        var $187=_expand_decodebuffer($185, $186); //@line 440 "multibytecodec.c"
        var $188=((($187))|0)==-1; //@line 440 "multibytecodec.c"
        if ($188) { __label__ = 44; break; } else { __label__ = 34; break; } //@line 440 "multibytecodec.c"
      case 34: // $bb33
        var $189=HEAP[$retunisize]; //@line 441 "multibytecodec.c"
        var $190=((($189) * 2)&4294967295); //@line 441 "multibytecodec.c"
        var $191=HEAP[$retuni]; //@line 441 "multibytecodec.c"
        var $192=$191; //@line 441 "multibytecodec.c"
        var $193=(($192+12)&4294967295); //@line 441 "multibytecodec.c"
        var $194=HEAP[$193]; //@line 441 "multibytecodec.c"
        var $195=HEAP[$buf_addr]; //@line 441 "multibytecodec.c"
        var $196=(($195+12)&4294967295); //@line 441 "multibytecodec.c"
        var $197=HEAP[$196]; //@line 441 "multibytecodec.c"
        var $198=$197; //@line 441 "multibytecodec.c"
        var $199=$194; //@line 441 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($198, $199, $190, 1, 0); //@line 441 "multibytecodec.c"
        var $200=HEAP[$buf_addr]; //@line 443 "multibytecodec.c"
        var $201=(($200+12)&4294967295); //@line 443 "multibytecodec.c"
        var $202=HEAP[$201]; //@line 443 "multibytecodec.c"
        var $203=HEAP[$retunisize]; //@line 443 "multibytecodec.c"
        var $204=(($202+2*$203)&4294967295); //@line 443 "multibytecodec.c"
        var $205=HEAP[$buf_addr]; //@line 443 "multibytecodec.c"
        var $206=(($205+12)&4294967295); //@line 443 "multibytecodec.c"
        HEAP[$206]=$204; //@line 443 "multibytecodec.c"
        __label__ = 35; break; //@line 443 "multibytecodec.c"
      case 35: // $bb34
        var $207=HEAP[$retobj]; //@line 446 "multibytecodec.c"
        var $208=$207; //@line 446 "multibytecodec.c"
        var $209=(($208+12)&4294967295); //@line 446 "multibytecodec.c"
        var $210=(($209+4)&4294967295); //@line 446 "multibytecodec.c"
        var $211=HEAP[$210]; //@line 446 "multibytecodec.c"
        var $212=_PyInt_AsSsize_t($211); //@line 446 "multibytecodec.c"
        HEAP[$newpos]=$212; //@line 446 "multibytecodec.c"
        var $213=HEAP[$newpos]; //@line 447 "multibytecodec.c"
        var $214=((($213))|0) < 0; //@line 447 "multibytecodec.c"
        if ($214) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 447 "multibytecodec.c"
      case 36: // $bb35
        var $215=_PyErr_Occurred(); //@line 447 "multibytecodec.c"
        var $216=($215)==0; //@line 447 "multibytecodec.c"
        if ($216) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 447 "multibytecodec.c"
      case 37: // $bb36
        var $217=HEAP[$buf_addr]; //@line 448 "multibytecodec.c"
        var $218=(($217+8)&4294967295); //@line 448 "multibytecodec.c"
        var $219=HEAP[$218]; //@line 448 "multibytecodec.c"
        var $220=($219); //@line 448 "multibytecodec.c"
        var $221=HEAP[$buf_addr]; //@line 448 "multibytecodec.c"
        var $222=(($221+4)&4294967295); //@line 448 "multibytecodec.c"
        var $223=HEAP[$222]; //@line 448 "multibytecodec.c"
        var $224=($223); //@line 448 "multibytecodec.c"
        var $225=((($220) - ($224))&4294967295); //@line 448 "multibytecodec.c"
        var $226=HEAP[$newpos]; //@line 448 "multibytecodec.c"
        var $227=((($225) + ($226))&4294967295); //@line 448 "multibytecodec.c"
        HEAP[$newpos]=$227; //@line 448 "multibytecodec.c"
        __label__ = 38; break; //@line 448 "multibytecodec.c"
      case 38: // $bb37
        var $228=HEAP[$newpos]; //@line 449 "multibytecodec.c"
        var $229=((($228))|0) < 0; //@line 449 "multibytecodec.c"
        if ($229) { __label__ = 40; break; } else { __label__ = 39; break; } //@line 449 "multibytecodec.c"
      case 39: // $bb38
        var $230=HEAP[$buf_addr]; //@line 449 "multibytecodec.c"
        var $231=(($230+4)&4294967295); //@line 449 "multibytecodec.c"
        var $232=HEAP[$231]; //@line 449 "multibytecodec.c"
        var $233=HEAP[$newpos]; //@line 449 "multibytecodec.c"
        var $234=(($232+$233)&4294967295); //@line 449 "multibytecodec.c"
        var $235=HEAP[$buf_addr]; //@line 449 "multibytecodec.c"
        var $236=(($235+8)&4294967295); //@line 449 "multibytecodec.c"
        var $237=HEAP[$236]; //@line 449 "multibytecodec.c"
        var $238=($234) > ($237); //@line 449 "multibytecodec.c"
        if ($238) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 449 "multibytecodec.c"
      case 40: // $bb39
        _PyErr_Clear(); //@line 450 "multibytecodec.c"
        var $239=HEAP[_PyExc_IndexError]; //@line 451 "multibytecodec.c"
        var $240=HEAP[$newpos]; //@line 451 "multibytecodec.c"
        var $241=_PyErr_Format($239, ((__str16)&4294967295), $240); //@line 451 "multibytecodec.c"
        __label__ = 44; break; //@line 451 "multibytecodec.c"
      case 41: // $bb40
        var $242=HEAP[$buf_addr]; //@line 456 "multibytecodec.c"
        var $243=(($242+4)&4294967295); //@line 456 "multibytecodec.c"
        var $244=HEAP[$243]; //@line 456 "multibytecodec.c"
        var $245=HEAP[$newpos]; //@line 456 "multibytecodec.c"
        var $246=(($244+$245)&4294967295); //@line 456 "multibytecodec.c"
        var $247=HEAP[$buf_addr]; //@line 456 "multibytecodec.c"
        var $248=(($247)&4294967295); //@line 456 "multibytecodec.c"
        HEAP[$248]=$246; //@line 456 "multibytecodec.c"
        var $249=HEAP[$retobj]; //@line 457 "multibytecodec.c"
        var $250=(($249)&4294967295); //@line 457 "multibytecodec.c"
        var $251=HEAP[$250]; //@line 457 "multibytecodec.c"
        var $252=((($251) - 1)&4294967295); //@line 457 "multibytecodec.c"
        var $253=HEAP[$retobj]; //@line 457 "multibytecodec.c"
        var $254=(($253)&4294967295); //@line 457 "multibytecodec.c"
        HEAP[$254]=$252; //@line 457 "multibytecodec.c"
        var $255=HEAP[$retobj]; //@line 457 "multibytecodec.c"
        var $256=(($255)&4294967295); //@line 457 "multibytecodec.c"
        var $257=HEAP[$256]; //@line 457 "multibytecodec.c"
        var $258=((($257))|0)==0; //@line 457 "multibytecodec.c"
        if ($258) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 457 "multibytecodec.c"
      case 42: // $bb41
        var $259=HEAP[$retobj]; //@line 457 "multibytecodec.c"
        var $260=(($259+4)&4294967295); //@line 457 "multibytecodec.c"
        var $261=HEAP[$260]; //@line 457 "multibytecodec.c"
        var $262=(($261+24)&4294967295); //@line 457 "multibytecodec.c"
        var $263=HEAP[$262]; //@line 457 "multibytecodec.c"
        var $264=HEAP[$retobj]; //@line 457 "multibytecodec.c"
        FUNCTION_TABLE[$263]($264); //@line 457 "multibytecodec.c"
        __label__ = 43; break; //@line 457 "multibytecodec.c"
      case 43: // $bb42
        HEAP[$0]=0; //@line 458 "multibytecodec.c"
        __label__ = 48; break; //@line 458 "multibytecodec.c"
      case 44: // $errorexit
        var $265=HEAP[$retobj]; //@line 461 "multibytecodec.c"
        var $266=($265)!=0; //@line 461 "multibytecodec.c"
        if ($266) { __label__ = 45; break; } else { __label__ = 47; break; } //@line 461 "multibytecodec.c"
      case 45: // $bb43
        var $267=HEAP[$retobj]; //@line 461 "multibytecodec.c"
        var $268=(($267)&4294967295); //@line 461 "multibytecodec.c"
        var $269=HEAP[$268]; //@line 461 "multibytecodec.c"
        var $270=((($269) - 1)&4294967295); //@line 461 "multibytecodec.c"
        var $271=HEAP[$retobj]; //@line 461 "multibytecodec.c"
        var $272=(($271)&4294967295); //@line 461 "multibytecodec.c"
        HEAP[$272]=$270; //@line 461 "multibytecodec.c"
        var $273=HEAP[$retobj]; //@line 461 "multibytecodec.c"
        var $274=(($273)&4294967295); //@line 461 "multibytecodec.c"
        var $275=HEAP[$274]; //@line 461 "multibytecodec.c"
        var $276=((($275))|0)==0; //@line 461 "multibytecodec.c"
        if ($276) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 461 "multibytecodec.c"
      case 46: // $bb44
        var $277=HEAP[$retobj]; //@line 461 "multibytecodec.c"
        var $278=(($277+4)&4294967295); //@line 461 "multibytecodec.c"
        var $279=HEAP[$278]; //@line 461 "multibytecodec.c"
        var $280=(($279+24)&4294967295); //@line 461 "multibytecodec.c"
        var $281=HEAP[$280]; //@line 461 "multibytecodec.c"
        var $282=HEAP[$retobj]; //@line 461 "multibytecodec.c"
        FUNCTION_TABLE[$281]($282); //@line 461 "multibytecodec.c"
        __label__ = 47; break; //@line 461 "multibytecodec.c"
      case 47: // $bb45
        HEAP[$0]=-1; //@line 462 "multibytecodec.c"
        __label__ = 48; break; //@line 462 "multibytecodec.c"
      case 48: // $bb46
        var $283=HEAP[$0]; //@line 376 "multibytecodec.c"
        HEAP[$retval]=$283; //@line 376 "multibytecodec.c"
        __label__ = 49; break; //@line 376 "multibytecodec.c"
      case 49: // $return
        var $retval47=HEAP[$retval]; //@line 376 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval47; //@line 376 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _multibytecodec_encode($codec, $state, $data, $datalen, $errors, $flags) {
    var __stackBase__  = STACKTOP; STACKTOP += 80; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $codec_addr=__stackBase__;
        var $state_addr=__stackBase__+4;
        var $data_addr=__stackBase__+8;
        var $datalen_addr=__stackBase__+12;
        var $errors_addr=__stackBase__+16;
        var $flags_addr=__stackBase__+20;
        var $retval=__stackBase__+24;
        var $0=__stackBase__+28;
        var $buf=__stackBase__+32;
        var $finalsize=__stackBase__+60;
        var $r=__stackBase__+64;
        var $inleft=__stackBase__+68;
        var $outleft=__stackBase__+72;
        var $outleft15=__stackBase__+76;
        var $_alloca_point_=0;
        HEAP[$codec_addr]=$codec;
        HEAP[$state_addr]=$state;
        HEAP[$data_addr]=$data;
        HEAP[$datalen_addr]=$datalen;
        HEAP[$errors_addr]=$errors;
        HEAP[$flags_addr]=$flags;
        HEAP[$r]=0; //@line 472 "multibytecodec.c"
        var $1=HEAP[$datalen_addr]; //@line 474 "multibytecodec.c"
        var $2=((($1))|0)==0; //@line 474 "multibytecodec.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 474 "multibytecodec.c"
      case 1: // $bb
        var $3=HEAP[$flags_addr]; //@line 474 "multibytecodec.c"
        var $4=($3) & 2; //@line 474 "multibytecodec.c"
        var $5=((($4))|0)==0; //@line 474 "multibytecodec.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 474 "multibytecodec.c"
      case 2: // $bb1
        var $6=_PyString_FromString(((__str18)&4294967295)); //@line 475 "multibytecodec.c"
        HEAP[$0]=$6; //@line 475 "multibytecodec.c"
        __label__ = 31; break; //@line 475 "multibytecodec.c"
      case 3: // $bb2
        var $7=(($buf+20)&4294967295); //@line 477 "multibytecodec.c"
        HEAP[$7]=0; //@line 477 "multibytecodec.c"
        var $8=HEAP[$data_addr]; //@line 478 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 478 "multibytecodec.c"
        var $10=(($buf+4)&4294967295); //@line 478 "multibytecodec.c"
        HEAP[$10]=$9; //@line 478 "multibytecodec.c"
        var $11=(($buf+4)&4294967295); //@line 478 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 478 "multibytecodec.c"
        var $13=(($buf)&4294967295); //@line 478 "multibytecodec.c"
        HEAP[$13]=$12; //@line 478 "multibytecodec.c"
        var $14=(($buf+4)&4294967295); //@line 479 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 479 "multibytecodec.c"
        var $16=HEAP[$datalen_addr]; //@line 479 "multibytecodec.c"
        var $17=(($15+2*$16)&4294967295); //@line 479 "multibytecodec.c"
        var $18=(($buf+8)&4294967295); //@line 479 "multibytecodec.c"
        HEAP[$18]=$17; //@line 479 "multibytecodec.c"
        var $19=HEAP[$datalen_addr]; //@line 481 "multibytecodec.c"
        var $20=((($19))|0) > 1073741815; //@line 481 "multibytecodec.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 481 "multibytecodec.c"
      case 4: // $bb3
        var $21=_PyErr_NoMemory(); //@line 482 "multibytecodec.c"
        __label__ = 24; break; //@line 482 "multibytecodec.c"
      case 5: // $bb4
        var $22=HEAP[$datalen_addr]; //@line 486 "multibytecodec.c"
        var $23=((($22) * 2)&4294967295); //@line 486 "multibytecodec.c"
        var $24=((($23) + 16)&4294967295); //@line 486 "multibytecodec.c"
        var $25=_PyString_FromStringAndSize(0, $24); //@line 486 "multibytecodec.c"
        var $26=(($buf+24)&4294967295); //@line 486 "multibytecodec.c"
        HEAP[$26]=$25; //@line 486 "multibytecodec.c"
        var $27=(($buf+24)&4294967295); //@line 487 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 487 "multibytecodec.c"
        var $29=($28)==0; //@line 487 "multibytecodec.c"
        if ($29) { __label__ = 24; break; } else { __label__ = 6; break; } //@line 487 "multibytecodec.c"
      case 6: // $bb5
        var $30=(($buf+24)&4294967295); //@line 489 "multibytecodec.c"
        var $31=HEAP[$30]; //@line 489 "multibytecodec.c"
        var $32=$31; //@line 489 "multibytecodec.c"
        var $33=(($32+20)&4294967295); //@line 489 "multibytecodec.c"
        var $34=$33; //@line 489 "multibytecodec.c"
        var $35=(($buf+12)&4294967295); //@line 489 "multibytecodec.c"
        HEAP[$35]=$34; //@line 489 "multibytecodec.c"
        var $36=(($buf+12)&4294967295); //@line 490 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 490 "multibytecodec.c"
        var $38=(($buf+24)&4294967295); //@line 490 "multibytecodec.c"
        var $39=HEAP[$38]; //@line 490 "multibytecodec.c"
        var $40=$39; //@line 490 "multibytecodec.c"
        var $41=(($40+8)&4294967295); //@line 490 "multibytecodec.c"
        var $42=HEAP[$41]; //@line 490 "multibytecodec.c"
        var $43=(($37+$42)&4294967295); //@line 490 "multibytecodec.c"
        var $44=(($buf+16)&4294967295); //@line 490 "multibytecodec.c"
        HEAP[$44]=$43; //@line 490 "multibytecodec.c"
        __label__ = 12; break; //@line 490 "multibytecodec.c"
      case 7: // $bb6
        var $45=(($buf+8)&4294967295); //@line 497 "multibytecodec.c"
        var $46=HEAP[$45]; //@line 497 "multibytecodec.c"
        var $47=($46); //@line 497 "multibytecodec.c"
        var $48=(($buf)&4294967295); //@line 497 "multibytecodec.c"
        var $49=HEAP[$48]; //@line 497 "multibytecodec.c"
        var $50=($49); //@line 497 "multibytecodec.c"
        var $51=((($47) - ($50))&4294967295); //@line 497 "multibytecodec.c"
        var $52=((((($51))|0)/2)|0); //@line 497 "multibytecodec.c"
        HEAP[$inleft]=$52; //@line 497 "multibytecodec.c"
        var $53=(($buf+16)&4294967295); //@line 498 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 498 "multibytecodec.c"
        var $55=($54); //@line 498 "multibytecodec.c"
        var $56=(($buf+12)&4294967295); //@line 498 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 498 "multibytecodec.c"
        var $58=($57); //@line 498 "multibytecodec.c"
        var $59=((($55) - ($58))&4294967295); //@line 498 "multibytecodec.c"
        HEAP[$outleft]=$59; //@line 498 "multibytecodec.c"
        var $60=HEAP[$codec_addr]; //@line 499 "multibytecodec.c"
        var $61=(($60+12)&4294967295); //@line 499 "multibytecodec.c"
        var $62=HEAP[$61]; //@line 499 "multibytecodec.c"
        var $63=HEAP[$codec_addr]; //@line 499 "multibytecodec.c"
        var $64=(($63+4)&4294967295); //@line 499 "multibytecodec.c"
        var $65=HEAP[$64]; //@line 499 "multibytecodec.c"
        var $66=HEAP[$state_addr]; //@line 499 "multibytecodec.c"
        var $67=(($buf)&4294967295); //@line 499 "multibytecodec.c"
        var $68=HEAP[$inleft]; //@line 499 "multibytecodec.c"
        var $69=(($buf+12)&4294967295); //@line 499 "multibytecodec.c"
        var $70=HEAP[$outleft]; //@line 499 "multibytecodec.c"
        var $71=HEAP[$flags_addr]; //@line 499 "multibytecodec.c"
        var $72=FUNCTION_TABLE[$62]($66, $65, $67, $68, $69, $70, $71); //@line 499 "multibytecodec.c"
        HEAP[$r]=$72; //@line 499 "multibytecodec.c"
        var $73=HEAP[$r]; //@line 501 "multibytecodec.c"
        var $74=((($73))|0)==0; //@line 501 "multibytecodec.c"
        if ($74) { __label__ = 13; break; } else { __label__ = 8; break; } //@line 501 "multibytecodec.c"
      case 8: // $bb7
        var $75=HEAP[$r]; //@line 501 "multibytecodec.c"
        var $76=((($75))|0)!=-2; //@line 501 "multibytecodec.c"
        if ($76) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 501 "multibytecodec.c"
      case 9: // $bb8
        var $77=HEAP[$flags_addr]; //@line 501 "multibytecodec.c"
        var $78=($77) & 1; //@line 501 "multibytecodec.c"
        var $79=((($78))|0)==0; //@line 501 "multibytecodec.c"
        if ($79) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 501 "multibytecodec.c"
      case 10: // $bb9
        var $80=HEAP[$codec_addr]; //@line 503 "multibytecodec.c"
        var $81=HEAP[$state_addr]; //@line 503 "multibytecodec.c"
        var $82=HEAP[$errors_addr]; //@line 503 "multibytecodec.c"
        var $83=HEAP[$r]; //@line 503 "multibytecodec.c"
        var $84=_multibytecodec_encerror($80, $81, $buf, $82, $83); //@line 503 "multibytecodec.c"
        var $85=((($84))|0)!=0; //@line 503 "multibytecodec.c"
        if ($85) { __label__ = 24; break; } else { __label__ = 11; break; } //@line 503 "multibytecodec.c"
      case 11: // $bb10
        var $86=HEAP[$r]; //@line 505 "multibytecodec.c"
        var $87=((($86))|0)==-2; //@line 505 "multibytecodec.c"
        if ($87) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 505 "multibytecodec.c"
      case 12: // $bb11
        var $88=(($buf)&4294967295); //@line 492 "multibytecodec.c"
        var $89=HEAP[$88]; //@line 492 "multibytecodec.c"
        var $90=(($buf+8)&4294967295); //@line 492 "multibytecodec.c"
        var $91=HEAP[$90]; //@line 492 "multibytecodec.c"
        var $92=($89) < ($91); //@line 492 "multibytecodec.c"
        if ($92) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 492 "multibytecodec.c"
      case 13: // $bb12
        var $93=HEAP[$codec_addr]; //@line 509 "multibytecodec.c"
        var $94=(($93+20)&4294967295); //@line 509 "multibytecodec.c"
        var $95=HEAP[$94]; //@line 509 "multibytecodec.c"
        var $96=($95)!=0; //@line 509 "multibytecodec.c"
        if ($96) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 509 "multibytecodec.c"
      case 14: // $bb13
        var $97=HEAP[$flags_addr]; //@line 509 "multibytecodec.c"
        var $98=($97) & 2; //@line 509 "multibytecodec.c"
        var $99=((($98))|0)!=0; //@line 509 "multibytecodec.c"
        if ($99) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 509 "multibytecodec.c"
      case 15: // $bb14
        var $100=(($buf+16)&4294967295); //@line 513 "multibytecodec.c"
        var $101=HEAP[$100]; //@line 513 "multibytecodec.c"
        var $102=($101); //@line 513 "multibytecodec.c"
        var $103=(($buf+12)&4294967295); //@line 513 "multibytecodec.c"
        var $104=HEAP[$103]; //@line 513 "multibytecodec.c"
        var $105=($104); //@line 513 "multibytecodec.c"
        var $106=((($102) - ($105))&4294967295); //@line 513 "multibytecodec.c"
        HEAP[$outleft15]=$106; //@line 513 "multibytecodec.c"
        var $107=HEAP[$codec_addr]; //@line 514 "multibytecodec.c"
        var $108=(($107+20)&4294967295); //@line 514 "multibytecodec.c"
        var $109=HEAP[$108]; //@line 514 "multibytecodec.c"
        var $110=HEAP[$codec_addr]; //@line 514 "multibytecodec.c"
        var $111=(($110+4)&4294967295); //@line 514 "multibytecodec.c"
        var $112=HEAP[$111]; //@line 514 "multibytecodec.c"
        var $113=HEAP[$state_addr]; //@line 514 "multibytecodec.c"
        var $114=(($buf+12)&4294967295); //@line 514 "multibytecodec.c"
        var $115=HEAP[$outleft15]; //@line 514 "multibytecodec.c"
        var $116=FUNCTION_TABLE[$109]($113, $112, $114, $115); //@line 514 "multibytecodec.c"
        HEAP[$r]=$116; //@line 514 "multibytecodec.c"
        var $117=HEAP[$r]; //@line 516 "multibytecodec.c"
        var $118=((($117))|0)==0; //@line 516 "multibytecodec.c"
        if ($118) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 516 "multibytecodec.c"
      case 16: // $bb16
        var $119=HEAP[$codec_addr]; //@line 518 "multibytecodec.c"
        var $120=HEAP[$state_addr]; //@line 518 "multibytecodec.c"
        var $121=HEAP[$errors_addr]; //@line 518 "multibytecodec.c"
        var $122=HEAP[$r]; //@line 518 "multibytecodec.c"
        var $123=_multibytecodec_encerror($119, $120, $buf, $121, $122); //@line 518 "multibytecodec.c"
        var $124=((($123))|0)!=0; //@line 518 "multibytecodec.c"
        if ($124) { __label__ = 24; break; } else { __label__ = 17; break; } //@line 518 "multibytecodec.c"
      case 17: // $bb17
        __label__ = 15; break; //@line 518 "multibytecodec.c"
      case 18: // $bb18
        var $125=(($buf+12)&4294967295); //@line 523 "multibytecodec.c"
        var $126=HEAP[$125]; //@line 523 "multibytecodec.c"
        var $127=($126); //@line 523 "multibytecodec.c"
        var $128=(($buf+24)&4294967295); //@line 523 "multibytecodec.c"
        var $129=HEAP[$128]; //@line 523 "multibytecodec.c"
        var $130=$129; //@line 523 "multibytecodec.c"
        var $131=(($130+20)&4294967295); //@line 523 "multibytecodec.c"
        var $132=($131); //@line 523 "multibytecodec.c"
        var $133=((($127) - ($132))&4294967295); //@line 523 "multibytecodec.c"
        HEAP[$finalsize]=$133; //@line 523 "multibytecodec.c"
        var $134=(($buf+24)&4294967295); //@line 526 "multibytecodec.c"
        var $135=HEAP[$134]; //@line 526 "multibytecodec.c"
        var $136=$135; //@line 526 "multibytecodec.c"
        var $137=(($136+8)&4294967295); //@line 526 "multibytecodec.c"
        var $138=HEAP[$137]; //@line 526 "multibytecodec.c"
        var $139=HEAP[$finalsize]; //@line 526 "multibytecodec.c"
        var $140=((($138))|0)!=((($139))|0); //@line 526 "multibytecodec.c"
        if ($140) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 526 "multibytecodec.c"
      case 19: // $bb19
        var $141=(($buf+24)&4294967295); //@line 527 "multibytecodec.c"
        var $142=HEAP[$finalsize]; //@line 527 "multibytecodec.c"
        var $143=__PyString_Resize($141, $142); //@line 527 "multibytecodec.c"
        var $144=((($143))|0)==-1; //@line 527 "multibytecodec.c"
        if ($144) { __label__ = 24; break; } else { __label__ = 20; break; } //@line 527 "multibytecodec.c"
      case 20: // $bb20
        var $145=(($buf)&4294967295); //@line 530 "multibytecodec.c"
        var $146=HEAP[$145]; //@line 530 "multibytecodec.c"
        var $147=HEAP[$data_addr]; //@line 530 "multibytecodec.c"
        HEAP[$147]=$146; //@line 530 "multibytecodec.c"
        var $148=(($buf+20)&4294967295); //@line 531 "multibytecodec.c"
        var $149=HEAP[$148]; //@line 531 "multibytecodec.c"
        var $150=($149)!=0; //@line 531 "multibytecodec.c"
        if ($150) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 531 "multibytecodec.c"
      case 21: // $bb21
        var $151=(($buf+20)&4294967295); //@line 531 "multibytecodec.c"
        var $152=HEAP[$151]; //@line 531 "multibytecodec.c"
        var $153=(($152)&4294967295); //@line 531 "multibytecodec.c"
        var $154=HEAP[$153]; //@line 531 "multibytecodec.c"
        var $155=((($154) - 1)&4294967295); //@line 531 "multibytecodec.c"
        var $156=(($152)&4294967295); //@line 531 "multibytecodec.c"
        HEAP[$156]=$155; //@line 531 "multibytecodec.c"
        var $157=(($152)&4294967295); //@line 531 "multibytecodec.c"
        var $158=HEAP[$157]; //@line 531 "multibytecodec.c"
        var $159=((($158))|0)==0; //@line 531 "multibytecodec.c"
        if ($159) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 531 "multibytecodec.c"
      case 22: // $bb22
        var $160=(($buf+20)&4294967295); //@line 531 "multibytecodec.c"
        var $161=HEAP[$160]; //@line 531 "multibytecodec.c"
        var $162=(($161+4)&4294967295); //@line 531 "multibytecodec.c"
        var $163=HEAP[$162]; //@line 531 "multibytecodec.c"
        var $164=(($163+24)&4294967295); //@line 531 "multibytecodec.c"
        var $165=HEAP[$164]; //@line 531 "multibytecodec.c"
        var $166=(($buf+20)&4294967295); //@line 531 "multibytecodec.c"
        var $167=HEAP[$166]; //@line 531 "multibytecodec.c"
        FUNCTION_TABLE[$165]($167); //@line 531 "multibytecodec.c"
        __label__ = 23; break; //@line 531 "multibytecodec.c"
      case 23: // $bb23
        var $168=(($buf+24)&4294967295); //@line 532 "multibytecodec.c"
        var $169=HEAP[$168]; //@line 532 "multibytecodec.c"
        HEAP[$0]=$169; //@line 532 "multibytecodec.c"
        __label__ = 31; break; //@line 532 "multibytecodec.c"
      case 24: // $errorexit
        var $170=(($buf+20)&4294967295); //@line 535 "multibytecodec.c"
        var $171=HEAP[$170]; //@line 535 "multibytecodec.c"
        var $172=($171)!=0; //@line 535 "multibytecodec.c"
        if ($172) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 535 "multibytecodec.c"
      case 25: // $bb24
        var $173=(($buf+20)&4294967295); //@line 535 "multibytecodec.c"
        var $174=HEAP[$173]; //@line 535 "multibytecodec.c"
        var $175=(($174)&4294967295); //@line 535 "multibytecodec.c"
        var $176=HEAP[$175]; //@line 535 "multibytecodec.c"
        var $177=((($176) - 1)&4294967295); //@line 535 "multibytecodec.c"
        var $178=(($174)&4294967295); //@line 535 "multibytecodec.c"
        HEAP[$178]=$177; //@line 535 "multibytecodec.c"
        var $179=(($174)&4294967295); //@line 535 "multibytecodec.c"
        var $180=HEAP[$179]; //@line 535 "multibytecodec.c"
        var $181=((($180))|0)==0; //@line 535 "multibytecodec.c"
        if ($181) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 535 "multibytecodec.c"
      case 26: // $bb25
        var $182=(($buf+20)&4294967295); //@line 535 "multibytecodec.c"
        var $183=HEAP[$182]; //@line 535 "multibytecodec.c"
        var $184=(($183+4)&4294967295); //@line 535 "multibytecodec.c"
        var $185=HEAP[$184]; //@line 535 "multibytecodec.c"
        var $186=(($185+24)&4294967295); //@line 535 "multibytecodec.c"
        var $187=HEAP[$186]; //@line 535 "multibytecodec.c"
        var $188=(($buf+20)&4294967295); //@line 535 "multibytecodec.c"
        var $189=HEAP[$188]; //@line 535 "multibytecodec.c"
        FUNCTION_TABLE[$187]($189); //@line 535 "multibytecodec.c"
        __label__ = 27; break; //@line 535 "multibytecodec.c"
      case 27: // $bb26
        var $190=(($buf+24)&4294967295); //@line 536 "multibytecodec.c"
        var $191=HEAP[$190]; //@line 536 "multibytecodec.c"
        var $192=($191)!=0; //@line 536 "multibytecodec.c"
        if ($192) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 536 "multibytecodec.c"
      case 28: // $bb27
        var $193=(($buf+24)&4294967295); //@line 536 "multibytecodec.c"
        var $194=HEAP[$193]; //@line 536 "multibytecodec.c"
        var $195=(($194)&4294967295); //@line 536 "multibytecodec.c"
        var $196=HEAP[$195]; //@line 536 "multibytecodec.c"
        var $197=((($196) - 1)&4294967295); //@line 536 "multibytecodec.c"
        var $198=(($194)&4294967295); //@line 536 "multibytecodec.c"
        HEAP[$198]=$197; //@line 536 "multibytecodec.c"
        var $199=(($194)&4294967295); //@line 536 "multibytecodec.c"
        var $200=HEAP[$199]; //@line 536 "multibytecodec.c"
        var $201=((($200))|0)==0; //@line 536 "multibytecodec.c"
        if ($201) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 536 "multibytecodec.c"
      case 29: // $bb28
        var $202=(($buf+24)&4294967295); //@line 536 "multibytecodec.c"
        var $203=HEAP[$202]; //@line 536 "multibytecodec.c"
        var $204=(($203+4)&4294967295); //@line 536 "multibytecodec.c"
        var $205=HEAP[$204]; //@line 536 "multibytecodec.c"
        var $206=(($205+24)&4294967295); //@line 536 "multibytecodec.c"
        var $207=HEAP[$206]; //@line 536 "multibytecodec.c"
        var $208=(($buf+24)&4294967295); //@line 536 "multibytecodec.c"
        var $209=HEAP[$208]; //@line 536 "multibytecodec.c"
        FUNCTION_TABLE[$207]($209); //@line 536 "multibytecodec.c"
        __label__ = 30; break; //@line 536 "multibytecodec.c"
      case 30: // $bb29
        HEAP[$0]=0; //@line 537 "multibytecodec.c"
        __label__ = 31; break; //@line 537 "multibytecodec.c"
      case 31: // $bb30
        var $210=HEAP[$0]; //@line 475 "multibytecodec.c"
        HEAP[$retval]=$210; //@line 475 "multibytecodec.c"
        __label__ = 32; break; //@line 475 "multibytecodec.c"
      case 32: // $return
        var $retval31=HEAP[$retval]; //@line 475 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval31; //@line 475 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _MultibyteCodec_Encode($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $state=__stackBase__+20;
        var $data=__stackBase__+28;
        var $errorcb=__stackBase__+32;
        var $r=__stackBase__+36;
        var $arg=__stackBase__+40;
        var $ucvt=__stackBase__+44;
        var $errors=__stackBase__+48;
        var $datalen=__stackBase__+52;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$errors]=0; //@line 547 "multibytecodec.c"
        var $1=HEAP[$args_addr]; //@line 550 "multibytecodec.c"
        var $2=HEAP[$kwargs_addr]; //@line 550 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, ((__str19)&4294967295), ((_codeckwarglist)&4294967295), $arg, $errors); //@line 550 "multibytecodec.c"
        var $4=((($3))|0)==0; //@line 550 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 550 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 552 "multibytecodec.c"
        __label__ = 36; break; //@line 552 "multibytecodec.c"
      case 2: // $bb1
        var $5=HEAP[$arg]; //@line 554 "multibytecodec.c"
        var $6=(($5+4)&4294967295); //@line 554 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 554 "multibytecodec.c"
        var $8=(($7+84)&4294967295); //@line 554 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 554 "multibytecodec.c"
        var $10=($9) & 268435456; //@line 554 "multibytecodec.c"
        var $11=((($10))|0)!=0; //@line 554 "multibytecodec.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 554 "multibytecodec.c"
      case 3: // $bb2
        HEAP[$ucvt]=0; //@line 555 "multibytecodec.c"
        __label__ = 10; break; //@line 555 "multibytecodec.c"
      case 4: // $bb3
        var $12=HEAP[$arg]; //@line 557 "multibytecodec.c"
        var $13=_PyObject_Unicode($12); //@line 557 "multibytecodec.c"
        HEAP[$ucvt]=$13; //@line 557 "multibytecodec.c"
        var $14=HEAP[$ucvt]; //@line 557 "multibytecodec.c"
        HEAP[$arg]=$14; //@line 557 "multibytecodec.c"
        var $15=HEAP[$arg]; //@line 558 "multibytecodec.c"
        var $16=($15)==0; //@line 558 "multibytecodec.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 558 "multibytecodec.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 559 "multibytecodec.c"
        __label__ = 36; break; //@line 559 "multibytecodec.c"
      case 6: // $bb5
        var $17=HEAP[$arg]; //@line 560 "multibytecodec.c"
        var $18=(($17+4)&4294967295); //@line 560 "multibytecodec.c"
        var $19=HEAP[$18]; //@line 560 "multibytecodec.c"
        var $20=(($19+84)&4294967295); //@line 560 "multibytecodec.c"
        var $21=HEAP[$20]; //@line 560 "multibytecodec.c"
        var $22=($21) & 268435456; //@line 560 "multibytecodec.c"
        var $23=((($22))|0)==0; //@line 560 "multibytecodec.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 560 "multibytecodec.c"
      case 7: // $bb6
        var $24=HEAP[_PyExc_TypeError]; //@line 561 "multibytecodec.c"
        _PyErr_SetString($24, ((__str20)&4294967295)); //@line 561 "multibytecodec.c"
        var $25=HEAP[$ucvt]; //@line 563 "multibytecodec.c"
        var $26=(($25)&4294967295); //@line 563 "multibytecodec.c"
        var $27=HEAP[$26]; //@line 563 "multibytecodec.c"
        var $28=((($27) - 1)&4294967295); //@line 563 "multibytecodec.c"
        var $29=HEAP[$ucvt]; //@line 563 "multibytecodec.c"
        var $30=(($29)&4294967295); //@line 563 "multibytecodec.c"
        HEAP[$30]=$28; //@line 563 "multibytecodec.c"
        var $31=HEAP[$ucvt]; //@line 563 "multibytecodec.c"
        var $32=(($31)&4294967295); //@line 563 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 563 "multibytecodec.c"
        var $34=((($33))|0)==0; //@line 563 "multibytecodec.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 563 "multibytecodec.c"
      case 8: // $bb7
        var $35=HEAP[$ucvt]; //@line 563 "multibytecodec.c"
        var $36=(($35+4)&4294967295); //@line 563 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 563 "multibytecodec.c"
        var $38=(($37+24)&4294967295); //@line 563 "multibytecodec.c"
        var $39=HEAP[$38]; //@line 563 "multibytecodec.c"
        var $40=HEAP[$ucvt]; //@line 563 "multibytecodec.c"
        FUNCTION_TABLE[$39]($40); //@line 563 "multibytecodec.c"
        __label__ = 9; break; //@line 563 "multibytecodec.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 564 "multibytecodec.c"
        __label__ = 36; break; //@line 564 "multibytecodec.c"
      case 10: // $bb9
        var $41=HEAP[$arg]; //@line 568 "multibytecodec.c"
        var $42=$41; //@line 568 "multibytecodec.c"
        var $43=(($42+12)&4294967295); //@line 568 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 568 "multibytecodec.c"
        HEAP[$data]=$44; //@line 568 "multibytecodec.c"
        var $45=HEAP[$arg]; //@line 569 "multibytecodec.c"
        var $46=$45; //@line 569 "multibytecodec.c"
        var $47=(($46+8)&4294967295); //@line 569 "multibytecodec.c"
        var $48=HEAP[$47]; //@line 569 "multibytecodec.c"
        HEAP[$datalen]=$48; //@line 569 "multibytecodec.c"
        var $49=HEAP[$errors]; //@line 571 "multibytecodec.c"
        var $50=_internal_error_callback($49); //@line 571 "multibytecodec.c"
        HEAP[$errorcb]=$50; //@line 571 "multibytecodec.c"
        var $51=HEAP[$errorcb]; //@line 572 "multibytecodec.c"
        var $52=($51)==0; //@line 572 "multibytecodec.c"
        if ($52) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 572 "multibytecodec.c"
      case 11: // $bb10
        var $53=HEAP[$ucvt]; //@line 573 "multibytecodec.c"
        var $54=($53)!=0; //@line 573 "multibytecodec.c"
        if ($54) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 573 "multibytecodec.c"
      case 12: // $bb11
        var $55=HEAP[$ucvt]; //@line 573 "multibytecodec.c"
        var $56=(($55)&4294967295); //@line 573 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 573 "multibytecodec.c"
        var $58=((($57) - 1)&4294967295); //@line 573 "multibytecodec.c"
        var $59=HEAP[$ucvt]; //@line 573 "multibytecodec.c"
        var $60=(($59)&4294967295); //@line 573 "multibytecodec.c"
        HEAP[$60]=$58; //@line 573 "multibytecodec.c"
        var $61=HEAP[$ucvt]; //@line 573 "multibytecodec.c"
        var $62=(($61)&4294967295); //@line 573 "multibytecodec.c"
        var $63=HEAP[$62]; //@line 573 "multibytecodec.c"
        var $64=((($63))|0)==0; //@line 573 "multibytecodec.c"
        if ($64) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 573 "multibytecodec.c"
      case 13: // $bb12
        var $65=HEAP[$ucvt]; //@line 573 "multibytecodec.c"
        var $66=(($65+4)&4294967295); //@line 573 "multibytecodec.c"
        var $67=HEAP[$66]; //@line 573 "multibytecodec.c"
        var $68=(($67+24)&4294967295); //@line 573 "multibytecodec.c"
        var $69=HEAP[$68]; //@line 573 "multibytecodec.c"
        var $70=HEAP[$ucvt]; //@line 573 "multibytecodec.c"
        FUNCTION_TABLE[$69]($70); //@line 573 "multibytecodec.c"
        __label__ = 14; break; //@line 573 "multibytecodec.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 574 "multibytecodec.c"
        __label__ = 36; break; //@line 574 "multibytecodec.c"
      case 15: // $bb14
        var $71=HEAP[$self_addr]; //@line 577 "multibytecodec.c"
        var $72=(($71+8)&4294967295); //@line 577 "multibytecodec.c"
        var $73=HEAP[$72]; //@line 577 "multibytecodec.c"
        var $74=(($73+16)&4294967295); //@line 577 "multibytecodec.c"
        var $75=HEAP[$74]; //@line 577 "multibytecodec.c"
        var $76=($75)!=0; //@line 577 "multibytecodec.c"
        if ($76) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 577 "multibytecodec.c"
      case 16: // $bb15
        var $77=HEAP[$self_addr]; //@line 577 "multibytecodec.c"
        var $78=(($77+8)&4294967295); //@line 577 "multibytecodec.c"
        var $79=HEAP[$78]; //@line 577 "multibytecodec.c"
        var $80=(($79+16)&4294967295); //@line 577 "multibytecodec.c"
        var $81=HEAP[$80]; //@line 577 "multibytecodec.c"
        var $82=HEAP[$self_addr]; //@line 577 "multibytecodec.c"
        var $83=(($82+8)&4294967295); //@line 577 "multibytecodec.c"
        var $84=HEAP[$83]; //@line 577 "multibytecodec.c"
        var $85=(($84+4)&4294967295); //@line 577 "multibytecodec.c"
        var $86=HEAP[$85]; //@line 577 "multibytecodec.c"
        var $87=FUNCTION_TABLE[$81]($state, $86); //@line 577 "multibytecodec.c"
        var $88=((($87))|0)!=0; //@line 577 "multibytecodec.c"
        if ($88) { __label__ = 27; break; } else { __label__ = 17; break; } //@line 577 "multibytecodec.c"
      case 17: // $bb16
        var $89=HEAP[$self_addr]; //@line 580 "multibytecodec.c"
        var $90=(($89+8)&4294967295); //@line 580 "multibytecodec.c"
        var $91=HEAP[$90]; //@line 580 "multibytecodec.c"
        var $92=HEAP[$datalen]; //@line 580 "multibytecodec.c"
        var $93=HEAP[$errorcb]; //@line 580 "multibytecodec.c"
        var $94=_multibytecodec_encode($91, $state, $data, $92, $93, 3); //@line 580 "multibytecodec.c"
        HEAP[$r]=$94; //@line 580 "multibytecodec.c"
        var $95=HEAP[$r]; //@line 583 "multibytecodec.c"
        var $96=($95)==0; //@line 583 "multibytecodec.c"
        if ($96) { __label__ = 27; break; } else { __label__ = 18; break; } //@line 583 "multibytecodec.c"
      case 18: // $bb18
        var $97=HEAP[$errorcb]; //@line 586 "multibytecodec.c"
        var $98=($97)!=0; //@line 586 "multibytecodec.c"
        if ($98) { __label__ = 19; break; } else { __label__ = 23; break; } //@line 586 "multibytecodec.c"
      case 19: // $bb19
        var $99=HEAP[$errorcb]; //@line 586 "multibytecodec.c"
        var $100=($99)==0; //@line 586 "multibytecodec.c"
        if ($100) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 586 "multibytecodec.c"
      case 20: // $bb20
        var $101=HEAP[$errorcb]; //@line 586 "multibytecodec.c"
        var $102=($101) > 3; //@line 586 "multibytecodec.c"
        if ($102) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 586 "multibytecodec.c"
      case 21: // $bb21
        var $103=HEAP[$errorcb]; //@line 586 "multibytecodec.c"
        var $104=(($103)&4294967295); //@line 586 "multibytecodec.c"
        var $105=HEAP[$104]; //@line 586 "multibytecodec.c"
        var $106=((($105) - 1)&4294967295); //@line 586 "multibytecodec.c"
        var $107=HEAP[$errorcb]; //@line 586 "multibytecodec.c"
        var $108=(($107)&4294967295); //@line 586 "multibytecodec.c"
        HEAP[$108]=$106; //@line 586 "multibytecodec.c"
        var $109=HEAP[$errorcb]; //@line 586 "multibytecodec.c"
        var $110=(($109)&4294967295); //@line 586 "multibytecodec.c"
        var $111=HEAP[$110]; //@line 586 "multibytecodec.c"
        var $112=((($111))|0)==0; //@line 586 "multibytecodec.c"
        if ($112) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 586 "multibytecodec.c"
      case 22: // $bb22
        var $113=HEAP[$errorcb]; //@line 586 "multibytecodec.c"
        var $114=(($113+4)&4294967295); //@line 586 "multibytecodec.c"
        var $115=HEAP[$114]; //@line 586 "multibytecodec.c"
        var $116=(($115+24)&4294967295); //@line 586 "multibytecodec.c"
        var $117=HEAP[$116]; //@line 586 "multibytecodec.c"
        var $118=HEAP[$errorcb]; //@line 586 "multibytecodec.c"
        FUNCTION_TABLE[$117]($118); //@line 586 "multibytecodec.c"
        __label__ = 23; break; //@line 586 "multibytecodec.c"
      case 23: // $bb23
        var $119=HEAP[$ucvt]; //@line 587 "multibytecodec.c"
        var $120=($119)!=0; //@line 587 "multibytecodec.c"
        if ($120) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 587 "multibytecodec.c"
      case 24: // $bb24
        var $121=HEAP[$ucvt]; //@line 587 "multibytecodec.c"
        var $122=(($121)&4294967295); //@line 587 "multibytecodec.c"
        var $123=HEAP[$122]; //@line 587 "multibytecodec.c"
        var $124=((($123) - 1)&4294967295); //@line 587 "multibytecodec.c"
        var $125=HEAP[$ucvt]; //@line 587 "multibytecodec.c"
        var $126=(($125)&4294967295); //@line 587 "multibytecodec.c"
        HEAP[$126]=$124; //@line 587 "multibytecodec.c"
        var $127=HEAP[$ucvt]; //@line 587 "multibytecodec.c"
        var $128=(($127)&4294967295); //@line 587 "multibytecodec.c"
        var $129=HEAP[$128]; //@line 587 "multibytecodec.c"
        var $130=((($129))|0)==0; //@line 587 "multibytecodec.c"
        if ($130) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 587 "multibytecodec.c"
      case 25: // $bb25
        var $131=HEAP[$ucvt]; //@line 587 "multibytecodec.c"
        var $132=(($131+4)&4294967295); //@line 587 "multibytecodec.c"
        var $133=HEAP[$132]; //@line 587 "multibytecodec.c"
        var $134=(($133+24)&4294967295); //@line 587 "multibytecodec.c"
        var $135=HEAP[$134]; //@line 587 "multibytecodec.c"
        var $136=HEAP[$ucvt]; //@line 587 "multibytecodec.c"
        FUNCTION_TABLE[$135]($136); //@line 587 "multibytecodec.c"
        __label__ = 26; break; //@line 587 "multibytecodec.c"
      case 26: // $bb26
        var $137=HEAP[$r]; //@line 588 "multibytecodec.c"
        var $138=HEAP[$datalen]; //@line 588 "multibytecodec.c"
        var $139=_make_tuple($137, $138); //@line 588 "multibytecodec.c"
        HEAP[$0]=$139; //@line 588 "multibytecodec.c"
        __label__ = 36; break; //@line 588 "multibytecodec.c"
      case 27: // $errorexit
        var $140=HEAP[$errorcb]; //@line 591 "multibytecodec.c"
        var $141=($140)!=0; //@line 591 "multibytecodec.c"
        if ($141) { __label__ = 28; break; } else { __label__ = 32; break; } //@line 591 "multibytecodec.c"
      case 28: // $bb27
        var $142=HEAP[$errorcb]; //@line 591 "multibytecodec.c"
        var $143=($142)==0; //@line 591 "multibytecodec.c"
        if ($143) { __label__ = 30; break; } else { __label__ = 29; break; } //@line 591 "multibytecodec.c"
      case 29: // $bb28
        var $144=HEAP[$errorcb]; //@line 591 "multibytecodec.c"
        var $145=($144) > 3; //@line 591 "multibytecodec.c"
        if ($145) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 591 "multibytecodec.c"
      case 30: // $bb29
        var $146=HEAP[$errorcb]; //@line 591 "multibytecodec.c"
        var $147=(($146)&4294967295); //@line 591 "multibytecodec.c"
        var $148=HEAP[$147]; //@line 591 "multibytecodec.c"
        var $149=((($148) - 1)&4294967295); //@line 591 "multibytecodec.c"
        var $150=HEAP[$errorcb]; //@line 591 "multibytecodec.c"
        var $151=(($150)&4294967295); //@line 591 "multibytecodec.c"
        HEAP[$151]=$149; //@line 591 "multibytecodec.c"
        var $152=HEAP[$errorcb]; //@line 591 "multibytecodec.c"
        var $153=(($152)&4294967295); //@line 591 "multibytecodec.c"
        var $154=HEAP[$153]; //@line 591 "multibytecodec.c"
        var $155=((($154))|0)==0; //@line 591 "multibytecodec.c"
        if ($155) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 591 "multibytecodec.c"
      case 31: // $bb30
        var $156=HEAP[$errorcb]; //@line 591 "multibytecodec.c"
        var $157=(($156+4)&4294967295); //@line 591 "multibytecodec.c"
        var $158=HEAP[$157]; //@line 591 "multibytecodec.c"
        var $159=(($158+24)&4294967295); //@line 591 "multibytecodec.c"
        var $160=HEAP[$159]; //@line 591 "multibytecodec.c"
        var $161=HEAP[$errorcb]; //@line 591 "multibytecodec.c"
        FUNCTION_TABLE[$160]($161); //@line 591 "multibytecodec.c"
        __label__ = 32; break; //@line 591 "multibytecodec.c"
      case 32: // $bb31
        var $162=HEAP[$ucvt]; //@line 592 "multibytecodec.c"
        var $163=($162)!=0; //@line 592 "multibytecodec.c"
        if ($163) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 592 "multibytecodec.c"
      case 33: // $bb32
        var $164=HEAP[$ucvt]; //@line 592 "multibytecodec.c"
        var $165=(($164)&4294967295); //@line 592 "multibytecodec.c"
        var $166=HEAP[$165]; //@line 592 "multibytecodec.c"
        var $167=((($166) - 1)&4294967295); //@line 592 "multibytecodec.c"
        var $168=HEAP[$ucvt]; //@line 592 "multibytecodec.c"
        var $169=(($168)&4294967295); //@line 592 "multibytecodec.c"
        HEAP[$169]=$167; //@line 592 "multibytecodec.c"
        var $170=HEAP[$ucvt]; //@line 592 "multibytecodec.c"
        var $171=(($170)&4294967295); //@line 592 "multibytecodec.c"
        var $172=HEAP[$171]; //@line 592 "multibytecodec.c"
        var $173=((($172))|0)==0; //@line 592 "multibytecodec.c"
        if ($173) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 592 "multibytecodec.c"
      case 34: // $bb33
        var $174=HEAP[$ucvt]; //@line 592 "multibytecodec.c"
        var $175=(($174+4)&4294967295); //@line 592 "multibytecodec.c"
        var $176=HEAP[$175]; //@line 592 "multibytecodec.c"
        var $177=(($176+24)&4294967295); //@line 592 "multibytecodec.c"
        var $178=HEAP[$177]; //@line 592 "multibytecodec.c"
        var $179=HEAP[$ucvt]; //@line 592 "multibytecodec.c"
        FUNCTION_TABLE[$178]($179); //@line 592 "multibytecodec.c"
        __label__ = 35; break; //@line 592 "multibytecodec.c"
      case 35: // $bb34
        HEAP[$0]=0; //@line 593 "multibytecodec.c"
        __label__ = 36; break; //@line 593 "multibytecodec.c"
      case 36: // $bb35
        var $180=HEAP[$0]; //@line 552 "multibytecodec.c"
        HEAP[$retval]=$180; //@line 552 "multibytecodec.c"
        __label__ = 37; break; //@line 552 "multibytecodec.c"
      case 37: // $return
        var $retval36=HEAP[$retval]; //@line 552 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval36; //@line 552 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _MultibyteCodec_Decode($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 140; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 140);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $state=__stackBase__+20;
        var $buf=__stackBase__+28;
        var $errorcb=__stackBase__+56;
        var $pdata=__stackBase__+60;
        var $data=__stackBase__+112;
        var $errors=__stackBase__+116;
        var $datalen=__stackBase__+120;
        var $finalsize=__stackBase__+124;
        var $inleft=__stackBase__+128;
        var $outleft=__stackBase__+132;
        var $r=__stackBase__+136;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$errors]=0; //@line 604 "multibytecodec.c"
        var $1=HEAP[$args_addr]; //@line 607 "multibytecodec.c"
        var $2=HEAP[$kwargs_addr]; //@line 607 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, ((__str21)&4294967295), ((_codeckwarglist)&4294967295), $pdata, $errors); //@line 607 "multibytecodec.c"
        var $4=((($3))|0)==0; //@line 607 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 607 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 609 "multibytecodec.c"
        __label__ = 41; break; //@line 609 "multibytecodec.c"
      case 2: // $bb1
        var $5=(($pdata)&4294967295); //@line 610 "multibytecodec.c"
        var $6=HEAP[$5]; //@line 610 "multibytecodec.c"
        HEAP[$data]=$6; //@line 610 "multibytecodec.c"
        var $7=(($pdata+8)&4294967295); //@line 611 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 611 "multibytecodec.c"
        HEAP[$datalen]=$8; //@line 611 "multibytecodec.c"
        var $9=HEAP[$errors]; //@line 613 "multibytecodec.c"
        var $10=_internal_error_callback($9); //@line 613 "multibytecodec.c"
        HEAP[$errorcb]=$10; //@line 613 "multibytecodec.c"
        var $11=HEAP[$errorcb]; //@line 614 "multibytecodec.c"
        var $12=($11)==0; //@line 614 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 614 "multibytecodec.c"
      case 3: // $bb2
        _PyBuffer_Release($pdata); //@line 615 "multibytecodec.c"
        HEAP[$0]=0; //@line 616 "multibytecodec.c"
        __label__ = 41; break; //@line 616 "multibytecodec.c"
      case 4: // $bb3
        var $13=HEAP[$datalen]; //@line 619 "multibytecodec.c"
        var $14=((($13))|0)==0; //@line 619 "multibytecodec.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 11; break; } //@line 619 "multibytecodec.c"
      case 5: // $bb4
        _PyBuffer_Release($pdata); //@line 620 "multibytecodec.c"
        var $15=HEAP[$errorcb]; //@line 621 "multibytecodec.c"
        var $16=($15)!=0; //@line 621 "multibytecodec.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 621 "multibytecodec.c"
      case 6: // $bb5
        var $17=HEAP[$errorcb]; //@line 621 "multibytecodec.c"
        var $18=($17)==0; //@line 621 "multibytecodec.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 621 "multibytecodec.c"
      case 7: // $bb6
        var $19=HEAP[$errorcb]; //@line 621 "multibytecodec.c"
        var $20=($19) > 3; //@line 621 "multibytecodec.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 621 "multibytecodec.c"
      case 8: // $bb7
        var $21=HEAP[$errorcb]; //@line 621 "multibytecodec.c"
        var $22=(($21)&4294967295); //@line 621 "multibytecodec.c"
        var $23=HEAP[$22]; //@line 621 "multibytecodec.c"
        var $24=((($23) - 1)&4294967295); //@line 621 "multibytecodec.c"
        var $25=HEAP[$errorcb]; //@line 621 "multibytecodec.c"
        var $26=(($25)&4294967295); //@line 621 "multibytecodec.c"
        HEAP[$26]=$24; //@line 621 "multibytecodec.c"
        var $27=HEAP[$errorcb]; //@line 621 "multibytecodec.c"
        var $28=(($27)&4294967295); //@line 621 "multibytecodec.c"
        var $29=HEAP[$28]; //@line 621 "multibytecodec.c"
        var $30=((($29))|0)==0; //@line 621 "multibytecodec.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 621 "multibytecodec.c"
      case 9: // $bb8
        var $31=HEAP[$errorcb]; //@line 621 "multibytecodec.c"
        var $32=(($31+4)&4294967295); //@line 621 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 621 "multibytecodec.c"
        var $34=(($33+24)&4294967295); //@line 621 "multibytecodec.c"
        var $35=HEAP[$34]; //@line 621 "multibytecodec.c"
        var $36=HEAP[$errorcb]; //@line 621 "multibytecodec.c"
        FUNCTION_TABLE[$35]($36); //@line 621 "multibytecodec.c"
        __label__ = 10; break; //@line 621 "multibytecodec.c"
      case 10: // $bb9
        var $37=_PyUnicodeUCS2_FromUnicode(0, 0); //@line 622 "multibytecodec.c"
        var $38=_make_tuple($37, 0); //@line 622 "multibytecodec.c"
        HEAP[$0]=$38; //@line 622 "multibytecodec.c"
        __label__ = 41; break; //@line 622 "multibytecodec.c"
      case 11: // $bb10
        var $39=(($buf+20)&4294967295); //@line 625 "multibytecodec.c"
        HEAP[$39]=0; //@line 625 "multibytecodec.c"
        var $40=HEAP[$data]; //@line 626 "multibytecodec.c"
        var $41=(($buf+4)&4294967295); //@line 626 "multibytecodec.c"
        HEAP[$41]=$40; //@line 626 "multibytecodec.c"
        var $42=(($buf+4)&4294967295); //@line 626 "multibytecodec.c"
        var $43=HEAP[$42]; //@line 626 "multibytecodec.c"
        var $44=(($buf)&4294967295); //@line 626 "multibytecodec.c"
        HEAP[$44]=$43; //@line 626 "multibytecodec.c"
        var $45=(($buf+4)&4294967295); //@line 627 "multibytecodec.c"
        var $46=HEAP[$45]; //@line 627 "multibytecodec.c"
        var $47=HEAP[$datalen]; //@line 627 "multibytecodec.c"
        var $48=(($46+$47)&4294967295); //@line 627 "multibytecodec.c"
        var $49=(($buf+8)&4294967295); //@line 627 "multibytecodec.c"
        HEAP[$49]=$48; //@line 627 "multibytecodec.c"
        var $50=HEAP[$datalen]; //@line 628 "multibytecodec.c"
        var $51=_PyUnicodeUCS2_FromUnicode(0, $50); //@line 628 "multibytecodec.c"
        var $52=(($buf+24)&4294967295); //@line 628 "multibytecodec.c"
        HEAP[$52]=$51; //@line 628 "multibytecodec.c"
        var $53=(($buf+24)&4294967295); //@line 629 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 629 "multibytecodec.c"
        var $55=($54)==0; //@line 629 "multibytecodec.c"
        if ($55) { __label__ = 29; break; } else { __label__ = 12; break; } //@line 629 "multibytecodec.c"
      case 12: // $bb11
        var $56=(($buf+24)&4294967295); //@line 631 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 631 "multibytecodec.c"
        var $58=$57; //@line 631 "multibytecodec.c"
        var $59=(($58+12)&4294967295); //@line 631 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 631 "multibytecodec.c"
        var $61=(($buf+12)&4294967295); //@line 631 "multibytecodec.c"
        HEAP[$61]=$60; //@line 631 "multibytecodec.c"
        var $62=(($buf+12)&4294967295); //@line 632 "multibytecodec.c"
        var $63=HEAP[$62]; //@line 632 "multibytecodec.c"
        var $64=(($buf+24)&4294967295); //@line 632 "multibytecodec.c"
        var $65=HEAP[$64]; //@line 632 "multibytecodec.c"
        var $66=$65; //@line 632 "multibytecodec.c"
        var $67=(($66+8)&4294967295); //@line 632 "multibytecodec.c"
        var $68=HEAP[$67]; //@line 632 "multibytecodec.c"
        var $69=(($63+2*$68)&4294967295); //@line 632 "multibytecodec.c"
        var $70=(($buf+16)&4294967295); //@line 632 "multibytecodec.c"
        HEAP[$70]=$69; //@line 632 "multibytecodec.c"
        var $71=HEAP[$self_addr]; //@line 634 "multibytecodec.c"
        var $72=(($71+8)&4294967295); //@line 634 "multibytecodec.c"
        var $73=HEAP[$72]; //@line 634 "multibytecodec.c"
        var $74=(($73+28)&4294967295); //@line 634 "multibytecodec.c"
        var $75=HEAP[$74]; //@line 634 "multibytecodec.c"
        var $76=($75)!=0; //@line 634 "multibytecodec.c"
        if ($76) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 634 "multibytecodec.c"
      case 13: // $bb12
        var $77=HEAP[$self_addr]; //@line 634 "multibytecodec.c"
        var $78=(($77+8)&4294967295); //@line 634 "multibytecodec.c"
        var $79=HEAP[$78]; //@line 634 "multibytecodec.c"
        var $80=(($79+28)&4294967295); //@line 634 "multibytecodec.c"
        var $81=HEAP[$80]; //@line 634 "multibytecodec.c"
        var $82=HEAP[$self_addr]; //@line 634 "multibytecodec.c"
        var $83=(($82+8)&4294967295); //@line 634 "multibytecodec.c"
        var $84=HEAP[$83]; //@line 634 "multibytecodec.c"
        var $85=(($84+4)&4294967295); //@line 634 "multibytecodec.c"
        var $86=HEAP[$85]; //@line 634 "multibytecodec.c"
        var $87=FUNCTION_TABLE[$81]($state, $86); //@line 634 "multibytecodec.c"
        var $88=((($87))|0)!=0; //@line 634 "multibytecodec.c"
        if ($88) { __label__ = 29; break; } else { __label__ = 14; break; } //@line 634 "multibytecodec.c"
      case 14: // $bb13
        __label__ = 17; break; //@line 634 "multibytecodec.c"
      case 15: // $bb14
        var $89=(($buf+8)&4294967295); //@line 641 "multibytecodec.c"
        var $90=HEAP[$89]; //@line 641 "multibytecodec.c"
        var $91=($90); //@line 641 "multibytecodec.c"
        var $92=(($buf)&4294967295); //@line 641 "multibytecodec.c"
        var $93=HEAP[$92]; //@line 641 "multibytecodec.c"
        var $94=($93); //@line 641 "multibytecodec.c"
        var $95=((($91) - ($94))&4294967295); //@line 641 "multibytecodec.c"
        HEAP[$inleft]=$95; //@line 641 "multibytecodec.c"
        var $96=(($buf+16)&4294967295); //@line 642 "multibytecodec.c"
        var $97=HEAP[$96]; //@line 642 "multibytecodec.c"
        var $98=($97); //@line 642 "multibytecodec.c"
        var $99=(($buf+12)&4294967295); //@line 642 "multibytecodec.c"
        var $100=HEAP[$99]; //@line 642 "multibytecodec.c"
        var $101=($100); //@line 642 "multibytecodec.c"
        var $102=((($98) - ($101))&4294967295); //@line 642 "multibytecodec.c"
        var $103=((((($102))|0)/2)|0); //@line 642 "multibytecodec.c"
        HEAP[$outleft]=$103; //@line 642 "multibytecodec.c"
        var $104=HEAP[$self_addr]; //@line 644 "multibytecodec.c"
        var $105=(($104+8)&4294967295); //@line 644 "multibytecodec.c"
        var $106=HEAP[$105]; //@line 644 "multibytecodec.c"
        var $107=(($106+24)&4294967295); //@line 644 "multibytecodec.c"
        var $108=HEAP[$107]; //@line 644 "multibytecodec.c"
        var $109=HEAP[$self_addr]; //@line 644 "multibytecodec.c"
        var $110=(($109+8)&4294967295); //@line 644 "multibytecodec.c"
        var $111=HEAP[$110]; //@line 644 "multibytecodec.c"
        var $112=(($111+4)&4294967295); //@line 644 "multibytecodec.c"
        var $113=HEAP[$112]; //@line 644 "multibytecodec.c"
        var $114=(($buf)&4294967295); //@line 644 "multibytecodec.c"
        var $115=HEAP[$inleft]; //@line 644 "multibytecodec.c"
        var $116=(($buf+12)&4294967295); //@line 644 "multibytecodec.c"
        var $117=HEAP[$outleft]; //@line 644 "multibytecodec.c"
        var $118=FUNCTION_TABLE[$108]($state, $113, $114, $115, $116, $117); //@line 644 "multibytecodec.c"
        HEAP[$r]=$118; //@line 644 "multibytecodec.c"
        var $119=HEAP[$r]; //@line 646 "multibytecodec.c"
        var $120=((($119))|0)==0; //@line 646 "multibytecodec.c"
        if ($120) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 646 "multibytecodec.c"
      case 16: // $bb15
        var $121=HEAP[$self_addr]; //@line 648 "multibytecodec.c"
        var $122=(($121+8)&4294967295); //@line 648 "multibytecodec.c"
        var $123=HEAP[$122]; //@line 648 "multibytecodec.c"
        var $124=HEAP[$errorcb]; //@line 648 "multibytecodec.c"
        var $125=HEAP[$r]; //@line 648 "multibytecodec.c"
        var $126=_multibytecodec_decerror($123, $state, $buf, $124, $125); //@line 648 "multibytecodec.c"
        var $127=((($126))|0)!=0; //@line 648 "multibytecodec.c"
        if ($127) { __label__ = 29; break; } else { __label__ = 17; break; } //@line 648 "multibytecodec.c"
      case 17: // $bb16
        var $128=(($buf)&4294967295); //@line 638 "multibytecodec.c"
        var $129=HEAP[$128]; //@line 638 "multibytecodec.c"
        var $130=(($buf+8)&4294967295); //@line 638 "multibytecodec.c"
        var $131=HEAP[$130]; //@line 638 "multibytecodec.c"
        var $132=($129) < ($131); //@line 638 "multibytecodec.c"
        if ($132) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 638 "multibytecodec.c"
      case 18: // $bb17
        var $133=(($buf+12)&4294967295); //@line 653 "multibytecodec.c"
        var $134=HEAP[$133]; //@line 653 "multibytecodec.c"
        var $135=($134); //@line 653 "multibytecodec.c"
        var $136=(($buf+24)&4294967295); //@line 653 "multibytecodec.c"
        var $137=HEAP[$136]; //@line 653 "multibytecodec.c"
        var $138=$137; //@line 653 "multibytecodec.c"
        var $139=(($138+12)&4294967295); //@line 653 "multibytecodec.c"
        var $140=HEAP[$139]; //@line 653 "multibytecodec.c"
        var $141=($140); //@line 653 "multibytecodec.c"
        var $142=((($135) - ($141))&4294967295); //@line 653 "multibytecodec.c"
        var $143=((((($142))|0)/2)|0); //@line 653 "multibytecodec.c"
        HEAP[$finalsize]=$143; //@line 653 "multibytecodec.c"
        var $144=(($buf+24)&4294967295); //@line 656 "multibytecodec.c"
        var $145=HEAP[$144]; //@line 656 "multibytecodec.c"
        var $146=$145; //@line 656 "multibytecodec.c"
        var $147=(($146+8)&4294967295); //@line 656 "multibytecodec.c"
        var $148=HEAP[$147]; //@line 656 "multibytecodec.c"
        var $149=HEAP[$finalsize]; //@line 656 "multibytecodec.c"
        var $150=((($148))|0)!=((($149))|0); //@line 656 "multibytecodec.c"
        if ($150) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 656 "multibytecodec.c"
      case 19: // $bb18
        var $151=(($buf+24)&4294967295); //@line 657 "multibytecodec.c"
        var $152=HEAP[$finalsize]; //@line 657 "multibytecodec.c"
        var $153=_PyUnicodeUCS2_Resize($151, $152); //@line 657 "multibytecodec.c"
        var $154=((($153))|0)==-1; //@line 657 "multibytecodec.c"
        if ($154) { __label__ = 29; break; } else { __label__ = 20; break; } //@line 657 "multibytecodec.c"
      case 20: // $bb19
        _PyBuffer_Release($pdata); //@line 660 "multibytecodec.c"
        var $155=(($buf+20)&4294967295); //@line 661 "multibytecodec.c"
        var $156=HEAP[$155]; //@line 661 "multibytecodec.c"
        var $157=($156)!=0; //@line 661 "multibytecodec.c"
        if ($157) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 661 "multibytecodec.c"
      case 21: // $bb20
        var $158=(($buf+20)&4294967295); //@line 661 "multibytecodec.c"
        var $159=HEAP[$158]; //@line 661 "multibytecodec.c"
        var $160=(($159)&4294967295); //@line 661 "multibytecodec.c"
        var $161=HEAP[$160]; //@line 661 "multibytecodec.c"
        var $162=((($161) - 1)&4294967295); //@line 661 "multibytecodec.c"
        var $163=(($159)&4294967295); //@line 661 "multibytecodec.c"
        HEAP[$163]=$162; //@line 661 "multibytecodec.c"
        var $164=(($159)&4294967295); //@line 661 "multibytecodec.c"
        var $165=HEAP[$164]; //@line 661 "multibytecodec.c"
        var $166=((($165))|0)==0; //@line 661 "multibytecodec.c"
        if ($166) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 661 "multibytecodec.c"
      case 22: // $bb21
        var $167=(($buf+20)&4294967295); //@line 661 "multibytecodec.c"
        var $168=HEAP[$167]; //@line 661 "multibytecodec.c"
        var $169=(($168+4)&4294967295); //@line 661 "multibytecodec.c"
        var $170=HEAP[$169]; //@line 661 "multibytecodec.c"
        var $171=(($170+24)&4294967295); //@line 661 "multibytecodec.c"
        var $172=HEAP[$171]; //@line 661 "multibytecodec.c"
        var $173=(($buf+20)&4294967295); //@line 661 "multibytecodec.c"
        var $174=HEAP[$173]; //@line 661 "multibytecodec.c"
        FUNCTION_TABLE[$172]($174); //@line 661 "multibytecodec.c"
        __label__ = 23; break; //@line 661 "multibytecodec.c"
      case 23: // $bb22
        var $175=HEAP[$errorcb]; //@line 662 "multibytecodec.c"
        var $176=($175)!=0; //@line 662 "multibytecodec.c"
        if ($176) { __label__ = 24; break; } else { __label__ = 28; break; } //@line 662 "multibytecodec.c"
      case 24: // $bb23
        var $177=HEAP[$errorcb]; //@line 662 "multibytecodec.c"
        var $178=($177)==0; //@line 662 "multibytecodec.c"
        if ($178) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 662 "multibytecodec.c"
      case 25: // $bb24
        var $179=HEAP[$errorcb]; //@line 662 "multibytecodec.c"
        var $180=($179) > 3; //@line 662 "multibytecodec.c"
        if ($180) { __label__ = 26; break; } else { __label__ = 28; break; } //@line 662 "multibytecodec.c"
      case 26: // $bb25
        var $181=HEAP[$errorcb]; //@line 662 "multibytecodec.c"
        var $182=(($181)&4294967295); //@line 662 "multibytecodec.c"
        var $183=HEAP[$182]; //@line 662 "multibytecodec.c"
        var $184=((($183) - 1)&4294967295); //@line 662 "multibytecodec.c"
        var $185=HEAP[$errorcb]; //@line 662 "multibytecodec.c"
        var $186=(($185)&4294967295); //@line 662 "multibytecodec.c"
        HEAP[$186]=$184; //@line 662 "multibytecodec.c"
        var $187=HEAP[$errorcb]; //@line 662 "multibytecodec.c"
        var $188=(($187)&4294967295); //@line 662 "multibytecodec.c"
        var $189=HEAP[$188]; //@line 662 "multibytecodec.c"
        var $190=((($189))|0)==0; //@line 662 "multibytecodec.c"
        if ($190) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 662 "multibytecodec.c"
      case 27: // $bb26
        var $191=HEAP[$errorcb]; //@line 662 "multibytecodec.c"
        var $192=(($191+4)&4294967295); //@line 662 "multibytecodec.c"
        var $193=HEAP[$192]; //@line 662 "multibytecodec.c"
        var $194=(($193+24)&4294967295); //@line 662 "multibytecodec.c"
        var $195=HEAP[$194]; //@line 662 "multibytecodec.c"
        var $196=HEAP[$errorcb]; //@line 662 "multibytecodec.c"
        FUNCTION_TABLE[$195]($196); //@line 662 "multibytecodec.c"
        __label__ = 28; break; //@line 662 "multibytecodec.c"
      case 28: // $bb27
        var $197=(($buf+24)&4294967295); //@line 663 "multibytecodec.c"
        var $198=HEAP[$197]; //@line 663 "multibytecodec.c"
        var $199=HEAP[$datalen]; //@line 663 "multibytecodec.c"
        var $200=_make_tuple($198, $199); //@line 663 "multibytecodec.c"
        HEAP[$0]=$200; //@line 663 "multibytecodec.c"
        __label__ = 41; break; //@line 663 "multibytecodec.c"
      case 29: // $errorexit
        _PyBuffer_Release($pdata); //@line 666 "multibytecodec.c"
        var $201=HEAP[$errorcb]; //@line 667 "multibytecodec.c"
        var $202=($201)!=0; //@line 667 "multibytecodec.c"
        if ($202) { __label__ = 30; break; } else { __label__ = 34; break; } //@line 667 "multibytecodec.c"
      case 30: // $bb28
        var $203=HEAP[$errorcb]; //@line 667 "multibytecodec.c"
        var $204=($203)==0; //@line 667 "multibytecodec.c"
        if ($204) { __label__ = 32; break; } else { __label__ = 31; break; } //@line 667 "multibytecodec.c"
      case 31: // $bb29
        var $205=HEAP[$errorcb]; //@line 667 "multibytecodec.c"
        var $206=($205) > 3; //@line 667 "multibytecodec.c"
        if ($206) { __label__ = 32; break; } else { __label__ = 34; break; } //@line 667 "multibytecodec.c"
      case 32: // $bb30
        var $207=HEAP[$errorcb]; //@line 667 "multibytecodec.c"
        var $208=(($207)&4294967295); //@line 667 "multibytecodec.c"
        var $209=HEAP[$208]; //@line 667 "multibytecodec.c"
        var $210=((($209) - 1)&4294967295); //@line 667 "multibytecodec.c"
        var $211=HEAP[$errorcb]; //@line 667 "multibytecodec.c"
        var $212=(($211)&4294967295); //@line 667 "multibytecodec.c"
        HEAP[$212]=$210; //@line 667 "multibytecodec.c"
        var $213=HEAP[$errorcb]; //@line 667 "multibytecodec.c"
        var $214=(($213)&4294967295); //@line 667 "multibytecodec.c"
        var $215=HEAP[$214]; //@line 667 "multibytecodec.c"
        var $216=((($215))|0)==0; //@line 667 "multibytecodec.c"
        if ($216) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 667 "multibytecodec.c"
      case 33: // $bb31
        var $217=HEAP[$errorcb]; //@line 667 "multibytecodec.c"
        var $218=(($217+4)&4294967295); //@line 667 "multibytecodec.c"
        var $219=HEAP[$218]; //@line 667 "multibytecodec.c"
        var $220=(($219+24)&4294967295); //@line 667 "multibytecodec.c"
        var $221=HEAP[$220]; //@line 667 "multibytecodec.c"
        var $222=HEAP[$errorcb]; //@line 667 "multibytecodec.c"
        FUNCTION_TABLE[$221]($222); //@line 667 "multibytecodec.c"
        __label__ = 34; break; //@line 667 "multibytecodec.c"
      case 34: // $bb32
        var $223=(($buf+20)&4294967295); //@line 668 "multibytecodec.c"
        var $224=HEAP[$223]; //@line 668 "multibytecodec.c"
        var $225=($224)!=0; //@line 668 "multibytecodec.c"
        if ($225) { __label__ = 35; break; } else { __label__ = 37; break; } //@line 668 "multibytecodec.c"
      case 35: // $bb33
        var $226=(($buf+20)&4294967295); //@line 668 "multibytecodec.c"
        var $227=HEAP[$226]; //@line 668 "multibytecodec.c"
        var $228=(($227)&4294967295); //@line 668 "multibytecodec.c"
        var $229=HEAP[$228]; //@line 668 "multibytecodec.c"
        var $230=((($229) - 1)&4294967295); //@line 668 "multibytecodec.c"
        var $231=(($227)&4294967295); //@line 668 "multibytecodec.c"
        HEAP[$231]=$230; //@line 668 "multibytecodec.c"
        var $232=(($227)&4294967295); //@line 668 "multibytecodec.c"
        var $233=HEAP[$232]; //@line 668 "multibytecodec.c"
        var $234=((($233))|0)==0; //@line 668 "multibytecodec.c"
        if ($234) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 668 "multibytecodec.c"
      case 36: // $bb34
        var $235=(($buf+20)&4294967295); //@line 668 "multibytecodec.c"
        var $236=HEAP[$235]; //@line 668 "multibytecodec.c"
        var $237=(($236+4)&4294967295); //@line 668 "multibytecodec.c"
        var $238=HEAP[$237]; //@line 668 "multibytecodec.c"
        var $239=(($238+24)&4294967295); //@line 668 "multibytecodec.c"
        var $240=HEAP[$239]; //@line 668 "multibytecodec.c"
        var $241=(($buf+20)&4294967295); //@line 668 "multibytecodec.c"
        var $242=HEAP[$241]; //@line 668 "multibytecodec.c"
        FUNCTION_TABLE[$240]($242); //@line 668 "multibytecodec.c"
        __label__ = 37; break; //@line 668 "multibytecodec.c"
      case 37: // $bb35
        var $243=(($buf+24)&4294967295); //@line 669 "multibytecodec.c"
        var $244=HEAP[$243]; //@line 669 "multibytecodec.c"
        var $245=($244)!=0; //@line 669 "multibytecodec.c"
        if ($245) { __label__ = 38; break; } else { __label__ = 40; break; } //@line 669 "multibytecodec.c"
      case 38: // $bb36
        var $246=(($buf+24)&4294967295); //@line 669 "multibytecodec.c"
        var $247=HEAP[$246]; //@line 669 "multibytecodec.c"
        var $248=(($247)&4294967295); //@line 669 "multibytecodec.c"
        var $249=HEAP[$248]; //@line 669 "multibytecodec.c"
        var $250=((($249) - 1)&4294967295); //@line 669 "multibytecodec.c"
        var $251=(($247)&4294967295); //@line 669 "multibytecodec.c"
        HEAP[$251]=$250; //@line 669 "multibytecodec.c"
        var $252=(($247)&4294967295); //@line 669 "multibytecodec.c"
        var $253=HEAP[$252]; //@line 669 "multibytecodec.c"
        var $254=((($253))|0)==0; //@line 669 "multibytecodec.c"
        if ($254) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 669 "multibytecodec.c"
      case 39: // $bb37
        var $255=(($buf+24)&4294967295); //@line 669 "multibytecodec.c"
        var $256=HEAP[$255]; //@line 669 "multibytecodec.c"
        var $257=(($256+4)&4294967295); //@line 669 "multibytecodec.c"
        var $258=HEAP[$257]; //@line 669 "multibytecodec.c"
        var $259=(($258+24)&4294967295); //@line 669 "multibytecodec.c"
        var $260=HEAP[$259]; //@line 669 "multibytecodec.c"
        var $261=(($buf+24)&4294967295); //@line 669 "multibytecodec.c"
        var $262=HEAP[$261]; //@line 669 "multibytecodec.c"
        FUNCTION_TABLE[$260]($262); //@line 669 "multibytecodec.c"
        __label__ = 40; break; //@line 669 "multibytecodec.c"
      case 40: // $bb38
        HEAP[$0]=0; //@line 671 "multibytecodec.c"
        __label__ = 41; break; //@line 671 "multibytecodec.c"
      case 41: // $bb39
        var $263=HEAP[$0]; //@line 609 "multibytecodec.c"
        HEAP[$retval]=$263; //@line 609 "multibytecodec.c"
        __label__ = 42; break; //@line 609 "multibytecodec.c"
      case 42: // $return
        var $retval40=HEAP[$retval]; //@line 609 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval40; //@line 609 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _multibytecodec_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 687 "multibytecodec.c"
        var $1=$0; //@line 687 "multibytecodec.c"
        _PyObject_Free($1); //@line 687 "multibytecodec.c"
        __label__ = 1; break; //@line 688 "multibytecodec.c"
      case 1: // $return
        STACKTOP = __stackBase__;
        return; //@line 688 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_encode_stateful($ctx, $unistr, $final) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ctx_addr=__stackBase__;
        var $unistr_addr=__stackBase__+4;
        var $final_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $iftmp_53=__stackBase__+16;
        var $iftmp_49=__stackBase__+20;
        var $0=__stackBase__+24;
        var $ucvt=__stackBase__+28;
        var $r=__stackBase__+32;
        var $inbuf=__stackBase__+36;
        var $inbuf_end=__stackBase__+40;
        var $inbuf_tmp=__stackBase__+44;
        var $datalen=__stackBase__+48;
        var $origpending=__stackBase__+52;
        var $_alloca_point_=0;
        HEAP[$ctx_addr]=$ctx;
        HEAP[$unistr_addr]=$unistr;
        HEAP[$final_addr]=$final;
        HEAP[$r]=0; //@line 734 "multibytecodec.c"
        HEAP[$inbuf_tmp]=0; //@line 735 "multibytecodec.c"
        var $1=HEAP[$unistr_addr]; //@line 738 "multibytecodec.c"
        var $2=(($1+4)&4294967295); //@line 738 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 738 "multibytecodec.c"
        var $4=(($3+84)&4294967295); //@line 738 "multibytecodec.c"
        var $5=HEAP[$4]; //@line 738 "multibytecodec.c"
        var $6=($5) & 268435456; //@line 738 "multibytecodec.c"
        var $7=((($6))|0)!=0; //@line 738 "multibytecodec.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 738 "multibytecodec.c"
      case 1: // $bb
        HEAP[$ucvt]=0; //@line 739 "multibytecodec.c"
        __label__ = 8; break; //@line 739 "multibytecodec.c"
      case 2: // $bb1
        var $8=HEAP[$unistr_addr]; //@line 741 "multibytecodec.c"
        var $9=_PyObject_Unicode($8); //@line 741 "multibytecodec.c"
        HEAP[$ucvt]=$9; //@line 741 "multibytecodec.c"
        var $10=HEAP[$ucvt]; //@line 741 "multibytecodec.c"
        HEAP[$unistr_addr]=$10; //@line 741 "multibytecodec.c"
        var $11=HEAP[$unistr_addr]; //@line 742 "multibytecodec.c"
        var $12=($11)==0; //@line 742 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 742 "multibytecodec.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 743 "multibytecodec.c"
        __label__ = 43; break; //@line 743 "multibytecodec.c"
      case 4: // $bb3
        var $13=HEAP[$unistr_addr]; //@line 744 "multibytecodec.c"
        var $14=(($13+4)&4294967295); //@line 744 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 744 "multibytecodec.c"
        var $16=(($15+84)&4294967295); //@line 744 "multibytecodec.c"
        var $17=HEAP[$16]; //@line 744 "multibytecodec.c"
        var $18=($17) & 268435456; //@line 744 "multibytecodec.c"
        var $19=((($18))|0)==0; //@line 744 "multibytecodec.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 744 "multibytecodec.c"
      case 5: // $bb4
        var $20=HEAP[_PyExc_TypeError]; //@line 745 "multibytecodec.c"
        _PyErr_SetString($20, ((__str20)&4294967295)); //@line 745 "multibytecodec.c"
        var $21=HEAP[$ucvt]; //@line 747 "multibytecodec.c"
        var $22=(($21)&4294967295); //@line 747 "multibytecodec.c"
        var $23=HEAP[$22]; //@line 747 "multibytecodec.c"
        var $24=((($23) - 1)&4294967295); //@line 747 "multibytecodec.c"
        var $25=HEAP[$ucvt]; //@line 747 "multibytecodec.c"
        var $26=(($25)&4294967295); //@line 747 "multibytecodec.c"
        HEAP[$26]=$24; //@line 747 "multibytecodec.c"
        var $27=HEAP[$ucvt]; //@line 747 "multibytecodec.c"
        var $28=(($27)&4294967295); //@line 747 "multibytecodec.c"
        var $29=HEAP[$28]; //@line 747 "multibytecodec.c"
        var $30=((($29))|0)==0; //@line 747 "multibytecodec.c"
        if ($30) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 747 "multibytecodec.c"
      case 6: // $bb5
        var $31=HEAP[$ucvt]; //@line 747 "multibytecodec.c"
        var $32=(($31+4)&4294967295); //@line 747 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 747 "multibytecodec.c"
        var $34=(($33+24)&4294967295); //@line 747 "multibytecodec.c"
        var $35=HEAP[$34]; //@line 747 "multibytecodec.c"
        var $36=HEAP[$ucvt]; //@line 747 "multibytecodec.c"
        FUNCTION_TABLE[$35]($36); //@line 747 "multibytecodec.c"
        __label__ = 7; break; //@line 747 "multibytecodec.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 748 "multibytecodec.c"
        __label__ = 43; break; //@line 748 "multibytecodec.c"
      case 8: // $bb7
        var $37=HEAP[$unistr_addr]; //@line 752 "multibytecodec.c"
        var $38=$37; //@line 752 "multibytecodec.c"
        var $39=(($38+8)&4294967295); //@line 752 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 752 "multibytecodec.c"
        HEAP[$datalen]=$40; //@line 752 "multibytecodec.c"
        var $41=HEAP[$ctx_addr]; //@line 753 "multibytecodec.c"
        var $42=(($41+28)&4294967295); //@line 753 "multibytecodec.c"
        var $43=HEAP[$42]; //@line 753 "multibytecodec.c"
        HEAP[$origpending]=$43; //@line 753 "multibytecodec.c"
        var $44=HEAP[$origpending]; //@line 755 "multibytecodec.c"
        var $45=((($44))|0) > 0; //@line 755 "multibytecodec.c"
        if ($45) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 755 "multibytecodec.c"
      case 9: // $bb8
        var $46=HEAP[$ctx_addr]; //@line 756 "multibytecodec.c"
        var $47=(($46+28)&4294967295); //@line 756 "multibytecodec.c"
        var $48=HEAP[$47]; //@line 756 "multibytecodec.c"
        var $49=((2147483647 - ($48))&4294967295); //@line 756 "multibytecodec.c"
        var $50=HEAP[$datalen]; //@line 756 "multibytecodec.c"
        var $51=((($49))|0) < ((($50))|0); //@line 756 "multibytecodec.c"
        if ($51) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 756 "multibytecodec.c"
      case 10: // $bb9
        var $52=_PyErr_NoMemory(); //@line 757 "multibytecodec.c"
        __label__ = 34; break; //@line 757 "multibytecodec.c"
      case 11: // $bb10
        var $53=HEAP[$ctx_addr]; //@line 761 "multibytecodec.c"
        var $54=(($53+28)&4294967295); //@line 761 "multibytecodec.c"
        var $55=HEAP[$54]; //@line 761 "multibytecodec.c"
        var $56=HEAP[$datalen]; //@line 761 "multibytecodec.c"
        var $57=((($55) + ($56))&4294967295); //@line 761 "multibytecodec.c"
        var $58=((($57))>>>0) <= 1073741823; //@line 761 "multibytecodec.c"
        if ($58) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 761 "multibytecodec.c"
      case 12: // $bb11
        var $59=HEAP[$ctx_addr]; //@line 761 "multibytecodec.c"
        var $60=(($59+28)&4294967295); //@line 761 "multibytecodec.c"
        var $61=HEAP[$60]; //@line 761 "multibytecodec.c"
        var $62=HEAP[$datalen]; //@line 761 "multibytecodec.c"
        var $63=((($61) + ($62))&4294967295); //@line 761 "multibytecodec.c"
        var $64=((($63) * 2)&4294967295); //@line 761 "multibytecodec.c"
        var $65=_PyMem_Malloc($64); //@line 761 "multibytecodec.c"
        var $66=$65; //@line 761 "multibytecodec.c"
        HEAP[$iftmp_49]=$66; //@line 761 "multibytecodec.c"
        __label__ = 14; break; //@line 761 "multibytecodec.c"
      case 13: // $bb12
        HEAP[$iftmp_49]=0; //@line 761 "multibytecodec.c"
        __label__ = 14; break; //@line 761 "multibytecodec.c"
      case 14: // $bb13
        var $67=HEAP[$iftmp_49]; //@line 761 "multibytecodec.c"
        HEAP[$inbuf_tmp]=$67; //@line 761 "multibytecodec.c"
        var $68=HEAP[$inbuf_tmp]; //@line 762 "multibytecodec.c"
        var $69=($68)==0; //@line 762 "multibytecodec.c"
        if ($69) { __label__ = 34; break; } else { __label__ = 15; break; } //@line 762 "multibytecodec.c"
      case 15: // $bb14
        var $70=HEAP[$ctx_addr]; //@line 764 "multibytecodec.c"
        var $71=(($70+28)&4294967295); //@line 764 "multibytecodec.c"
        var $72=HEAP[$71]; //@line 764 "multibytecodec.c"
        var $73=((($72) * 2)&4294967295); //@line 764 "multibytecodec.c"
        var $74=HEAP[$ctx_addr]; //@line 764 "multibytecodec.c"
        var $75=(($74+24)&4294967295); //@line 764 "multibytecodec.c"
        var $76=(($75)&4294967295); //@line 764 "multibytecodec.c"
        var $77=HEAP[$inbuf_tmp]; //@line 764 "multibytecodec.c"
        var $78=$77; //@line 764 "multibytecodec.c"
        var $79=$76; //@line 764 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($78, $79, $73, 1, 0); //@line 764 "multibytecodec.c"
        var $80=HEAP[$datalen]; //@line 766 "multibytecodec.c"
        var $81=((($80) * 2)&4294967295); //@line 766 "multibytecodec.c"
        var $82=HEAP[$unistr_addr]; //@line 766 "multibytecodec.c"
        var $83=$82; //@line 766 "multibytecodec.c"
        var $84=(($83+12)&4294967295); //@line 766 "multibytecodec.c"
        var $85=HEAP[$84]; //@line 766 "multibytecodec.c"
        var $86=HEAP[$ctx_addr]; //@line 766 "multibytecodec.c"
        var $87=(($86+28)&4294967295); //@line 766 "multibytecodec.c"
        var $88=HEAP[$87]; //@line 766 "multibytecodec.c"
        var $89=HEAP[$inbuf_tmp]; //@line 766 "multibytecodec.c"
        var $90=(($89+2*$88)&4294967295); //@line 766 "multibytecodec.c"
        var $91=$90; //@line 766 "multibytecodec.c"
        var $92=$85; //@line 766 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($91, $92, $81, 1, 0); //@line 766 "multibytecodec.c"
        var $93=HEAP[$ctx_addr]; //@line 769 "multibytecodec.c"
        var $94=(($93+28)&4294967295); //@line 769 "multibytecodec.c"
        var $95=HEAP[$94]; //@line 769 "multibytecodec.c"
        var $96=HEAP[$datalen]; //@line 769 "multibytecodec.c"
        var $97=((($95) + ($96))&4294967295); //@line 769 "multibytecodec.c"
        HEAP[$datalen]=$97; //@line 769 "multibytecodec.c"
        var $98=HEAP[$ctx_addr]; //@line 770 "multibytecodec.c"
        var $99=(($98+28)&4294967295); //@line 770 "multibytecodec.c"
        HEAP[$99]=0; //@line 770 "multibytecodec.c"
        var $100=HEAP[$inbuf_tmp]; //@line 771 "multibytecodec.c"
        HEAP[$inbuf]=$100; //@line 771 "multibytecodec.c"
        __label__ = 17; break; //@line 771 "multibytecodec.c"
      case 16: // $bb15
        var $101=HEAP[$unistr_addr]; //@line 774 "multibytecodec.c"
        var $102=$101; //@line 774 "multibytecodec.c"
        var $103=(($102+12)&4294967295); //@line 774 "multibytecodec.c"
        var $104=HEAP[$103]; //@line 774 "multibytecodec.c"
        HEAP[$inbuf]=$104; //@line 774 "multibytecodec.c"
        __label__ = 17; break; //@line 774 "multibytecodec.c"
      case 17: // $bb16
        var $105=HEAP[$inbuf]; //@line 776 "multibytecodec.c"
        var $106=HEAP[$datalen]; //@line 776 "multibytecodec.c"
        var $107=(($105+2*$106)&4294967295); //@line 776 "multibytecodec.c"
        HEAP[$inbuf_end]=$107; //@line 776 "multibytecodec.c"
        var $108=HEAP[$final_addr]; //@line 778 "multibytecodec.c"
        var $109=((($108))|0)!=0; //@line 778 "multibytecodec.c"
        if ($109) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 778 "multibytecodec.c"
      case 18: // $bb17
        HEAP[$iftmp_53]=3; //@line 778 "multibytecodec.c"
        __label__ = 20; break; //@line 778 "multibytecodec.c"
      case 19: // $bb18
        HEAP[$iftmp_53]=0; //@line 778 "multibytecodec.c"
        __label__ = 20; break; //@line 778 "multibytecodec.c"
      case 20: // $bb19
        var $110=HEAP[$ctx_addr]; //@line 778 "multibytecodec.c"
        var $111=(($110+20)&4294967295); //@line 778 "multibytecodec.c"
        var $112=HEAP[$111]; //@line 778 "multibytecodec.c"
        var $113=HEAP[$ctx_addr]; //@line 778 "multibytecodec.c"
        var $114=(($113+12)&4294967295); //@line 778 "multibytecodec.c"
        var $115=HEAP[$ctx_addr]; //@line 778 "multibytecodec.c"
        var $116=(($115+8)&4294967295); //@line 778 "multibytecodec.c"
        var $117=HEAP[$116]; //@line 778 "multibytecodec.c"
        var $118=HEAP[$datalen]; //@line 778 "multibytecodec.c"
        var $119=HEAP[$iftmp_53]; //@line 778 "multibytecodec.c"
        var $120=_multibytecodec_encode($117, $114, $inbuf, $118, $112, $119); //@line 778 "multibytecodec.c"
        HEAP[$r]=$120; //@line 778 "multibytecodec.c"
        var $121=HEAP[$r]; //@line 781 "multibytecodec.c"
        var $122=($121)==0; //@line 781 "multibytecodec.c"
        if ($122) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 781 "multibytecodec.c"
      case 21: // $bb21
        var $123=HEAP[$origpending]; //@line 783 "multibytecodec.c"
        var $124=((($123))|0) > 0; //@line 783 "multibytecodec.c"
        if ($124) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 783 "multibytecodec.c"
      case 22: // $bb22
        var $125=HEAP[$origpending]; //@line 784 "multibytecodec.c"
        var $126=((($125) * 2)&4294967295); //@line 784 "multibytecodec.c"
        var $127=HEAP[$ctx_addr]; //@line 784 "multibytecodec.c"
        var $128=(($127+24)&4294967295); //@line 784 "multibytecodec.c"
        var $129=(($128)&4294967295); //@line 784 "multibytecodec.c"
        var $130=HEAP[$inbuf_tmp]; //@line 784 "multibytecodec.c"
        var $131=$129; //@line 784 "multibytecodec.c"
        var $132=$130; //@line 784 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($131, $132, $126, 1, 0); //@line 784 "multibytecodec.c"
        __label__ = 23; break; //@line 784 "multibytecodec.c"
      case 23: // $bb23
        var $133=HEAP[$ctx_addr]; //@line 786 "multibytecodec.c"
        var $134=(($133+28)&4294967295); //@line 786 "multibytecodec.c"
        var $135=HEAP[$origpending]; //@line 786 "multibytecodec.c"
        HEAP[$134]=$135; //@line 786 "multibytecodec.c"
        __label__ = 34; break; //@line 786 "multibytecodec.c"
      case 24: // $bb24
        var $136=HEAP[$inbuf]; //@line 790 "multibytecodec.c"
        var $137=HEAP[$inbuf_end]; //@line 790 "multibytecodec.c"
        var $138=($136) < ($137); //@line 790 "multibytecodec.c"
        if ($138) { __label__ = 25; break; } else { __label__ = 28; break; } //@line 790 "multibytecodec.c"
      case 25: // $bb25
        var $139=HEAP[$inbuf_end]; //@line 791 "multibytecodec.c"
        var $140=($139); //@line 791 "multibytecodec.c"
        var $141=HEAP[$inbuf]; //@line 791 "multibytecodec.c"
        var $142=($141); //@line 791 "multibytecodec.c"
        var $143=((($140) - ($142))&4294967295); //@line 791 "multibytecodec.c"
        var $144=((((($143))|0)/2)|0); //@line 791 "multibytecodec.c"
        var $145=HEAP[$ctx_addr]; //@line 791 "multibytecodec.c"
        var $146=(($145+28)&4294967295); //@line 791 "multibytecodec.c"
        HEAP[$146]=$144; //@line 791 "multibytecodec.c"
        var $147=HEAP[$ctx_addr]; //@line 792 "multibytecodec.c"
        var $148=(($147+28)&4294967295); //@line 792 "multibytecodec.c"
        var $149=HEAP[$148]; //@line 792 "multibytecodec.c"
        var $150=((($149))|0) > 2; //@line 792 "multibytecodec.c"
        if ($150) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 792 "multibytecodec.c"
      case 26: // $bb26
        var $151=HEAP[$ctx_addr]; //@line 794 "multibytecodec.c"
        var $152=(($151+28)&4294967295); //@line 794 "multibytecodec.c"
        HEAP[$152]=0; //@line 794 "multibytecodec.c"
        var $153=HEAP[_PyExc_UnicodeError]; //@line 795 "multibytecodec.c"
        _PyErr_SetString($153, ((__str25)&4294967295)); //@line 795 "multibytecodec.c"
        __label__ = 34; break; //@line 795 "multibytecodec.c"
      case 27: // $bb27
        var $154=HEAP[$ctx_addr]; //@line 799 "multibytecodec.c"
        var $155=(($154+28)&4294967295); //@line 799 "multibytecodec.c"
        var $156=HEAP[$155]; //@line 799 "multibytecodec.c"
        var $157=((($156) * 2)&4294967295); //@line 799 "multibytecodec.c"
        var $158=HEAP[$inbuf]; //@line 799 "multibytecodec.c"
        var $159=HEAP[$ctx_addr]; //@line 799 "multibytecodec.c"
        var $160=(($159+24)&4294967295); //@line 799 "multibytecodec.c"
        var $161=(($160)&4294967295); //@line 799 "multibytecodec.c"
        var $162=$161; //@line 799 "multibytecodec.c"
        var $163=$158; //@line 799 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($162, $163, $157, 1, 0); //@line 799 "multibytecodec.c"
        __label__ = 28; break; //@line 799 "multibytecodec.c"
      case 28: // $bb28
        var $164=HEAP[$inbuf_tmp]; //@line 803 "multibytecodec.c"
        var $165=($164)!=0; //@line 803 "multibytecodec.c"
        if ($165) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 803 "multibytecodec.c"
      case 29: // $bb29
        var $166=HEAP[$inbuf_tmp]; //@line 804 "multibytecodec.c"
        var $167=$166; //@line 804 "multibytecodec.c"
        _PyMem_Free($167); //@line 804 "multibytecodec.c"
        __label__ = 30; break; //@line 804 "multibytecodec.c"
      case 30: // $bb30
        var $168=HEAP[$ucvt]; //@line 805 "multibytecodec.c"
        var $169=($168)!=0; //@line 805 "multibytecodec.c"
        if ($169) { __label__ = 31; break; } else { __label__ = 33; break; } //@line 805 "multibytecodec.c"
      case 31: // $bb31
        var $170=HEAP[$ucvt]; //@line 805 "multibytecodec.c"
        var $171=(($170)&4294967295); //@line 805 "multibytecodec.c"
        var $172=HEAP[$171]; //@line 805 "multibytecodec.c"
        var $173=((($172) - 1)&4294967295); //@line 805 "multibytecodec.c"
        var $174=HEAP[$ucvt]; //@line 805 "multibytecodec.c"
        var $175=(($174)&4294967295); //@line 805 "multibytecodec.c"
        HEAP[$175]=$173; //@line 805 "multibytecodec.c"
        var $176=HEAP[$ucvt]; //@line 805 "multibytecodec.c"
        var $177=(($176)&4294967295); //@line 805 "multibytecodec.c"
        var $178=HEAP[$177]; //@line 805 "multibytecodec.c"
        var $179=((($178))|0)==0; //@line 805 "multibytecodec.c"
        if ($179) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 805 "multibytecodec.c"
      case 32: // $bb32
        var $180=HEAP[$ucvt]; //@line 805 "multibytecodec.c"
        var $181=(($180+4)&4294967295); //@line 805 "multibytecodec.c"
        var $182=HEAP[$181]; //@line 805 "multibytecodec.c"
        var $183=(($182+24)&4294967295); //@line 805 "multibytecodec.c"
        var $184=HEAP[$183]; //@line 805 "multibytecodec.c"
        var $185=HEAP[$ucvt]; //@line 805 "multibytecodec.c"
        FUNCTION_TABLE[$184]($185); //@line 805 "multibytecodec.c"
        __label__ = 33; break; //@line 805 "multibytecodec.c"
      case 33: // $bb33
        var $186=HEAP[$r]; //@line 806 "multibytecodec.c"
        HEAP[$0]=$186; //@line 806 "multibytecodec.c"
        __label__ = 43; break; //@line 806 "multibytecodec.c"
      case 34: // $errorexit
        var $187=HEAP[$inbuf_tmp]; //@line 809 "multibytecodec.c"
        var $188=($187)!=0; //@line 809 "multibytecodec.c"
        if ($188) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 809 "multibytecodec.c"
      case 35: // $bb34
        var $189=HEAP[$inbuf_tmp]; //@line 810 "multibytecodec.c"
        var $190=$189; //@line 810 "multibytecodec.c"
        _PyMem_Free($190); //@line 810 "multibytecodec.c"
        __label__ = 36; break; //@line 810 "multibytecodec.c"
      case 36: // $bb35
        var $191=HEAP[$r]; //@line 811 "multibytecodec.c"
        var $192=($191)!=0; //@line 811 "multibytecodec.c"
        if ($192) { __label__ = 37; break; } else { __label__ = 39; break; } //@line 811 "multibytecodec.c"
      case 37: // $bb36
        var $193=HEAP[$r]; //@line 811 "multibytecodec.c"
        var $194=(($193)&4294967295); //@line 811 "multibytecodec.c"
        var $195=HEAP[$194]; //@line 811 "multibytecodec.c"
        var $196=((($195) - 1)&4294967295); //@line 811 "multibytecodec.c"
        var $197=HEAP[$r]; //@line 811 "multibytecodec.c"
        var $198=(($197)&4294967295); //@line 811 "multibytecodec.c"
        HEAP[$198]=$196; //@line 811 "multibytecodec.c"
        var $199=HEAP[$r]; //@line 811 "multibytecodec.c"
        var $200=(($199)&4294967295); //@line 811 "multibytecodec.c"
        var $201=HEAP[$200]; //@line 811 "multibytecodec.c"
        var $202=((($201))|0)==0; //@line 811 "multibytecodec.c"
        if ($202) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 811 "multibytecodec.c"
      case 38: // $bb37
        var $203=HEAP[$r]; //@line 811 "multibytecodec.c"
        var $204=(($203+4)&4294967295); //@line 811 "multibytecodec.c"
        var $205=HEAP[$204]; //@line 811 "multibytecodec.c"
        var $206=(($205+24)&4294967295); //@line 811 "multibytecodec.c"
        var $207=HEAP[$206]; //@line 811 "multibytecodec.c"
        var $208=HEAP[$r]; //@line 811 "multibytecodec.c"
        FUNCTION_TABLE[$207]($208); //@line 811 "multibytecodec.c"
        __label__ = 39; break; //@line 811 "multibytecodec.c"
      case 39: // $bb38
        var $209=HEAP[$ucvt]; //@line 812 "multibytecodec.c"
        var $210=($209)!=0; //@line 812 "multibytecodec.c"
        if ($210) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 812 "multibytecodec.c"
      case 40: // $bb39
        var $211=HEAP[$ucvt]; //@line 812 "multibytecodec.c"
        var $212=(($211)&4294967295); //@line 812 "multibytecodec.c"
        var $213=HEAP[$212]; //@line 812 "multibytecodec.c"
        var $214=((($213) - 1)&4294967295); //@line 812 "multibytecodec.c"
        var $215=HEAP[$ucvt]; //@line 812 "multibytecodec.c"
        var $216=(($215)&4294967295); //@line 812 "multibytecodec.c"
        HEAP[$216]=$214; //@line 812 "multibytecodec.c"
        var $217=HEAP[$ucvt]; //@line 812 "multibytecodec.c"
        var $218=(($217)&4294967295); //@line 812 "multibytecodec.c"
        var $219=HEAP[$218]; //@line 812 "multibytecodec.c"
        var $220=((($219))|0)==0; //@line 812 "multibytecodec.c"
        if ($220) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 812 "multibytecodec.c"
      case 41: // $bb40
        var $221=HEAP[$ucvt]; //@line 812 "multibytecodec.c"
        var $222=(($221+4)&4294967295); //@line 812 "multibytecodec.c"
        var $223=HEAP[$222]; //@line 812 "multibytecodec.c"
        var $224=(($223+24)&4294967295); //@line 812 "multibytecodec.c"
        var $225=HEAP[$224]; //@line 812 "multibytecodec.c"
        var $226=HEAP[$ucvt]; //@line 812 "multibytecodec.c"
        FUNCTION_TABLE[$225]($226); //@line 812 "multibytecodec.c"
        __label__ = 42; break; //@line 812 "multibytecodec.c"
      case 42: // $bb41
        HEAP[$0]=0; //@line 813 "multibytecodec.c"
        __label__ = 43; break; //@line 813 "multibytecodec.c"
      case 43: // $bb42
        var $227=HEAP[$0]; //@line 743 "multibytecodec.c"
        HEAP[$retval]=$227; //@line 743 "multibytecodec.c"
        __label__ = 44; break; //@line 743 "multibytecodec.c"
      case 44: // $return
        var $retval43=HEAP[$retval]; //@line 743 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval43; //@line 743 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _decoder_append_pending($ctx, $buf) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ctx_addr=__stackBase__;
        var $buf_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $npendings=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$ctx_addr]=$ctx;
        HEAP[$buf_addr]=$buf;
        var $1=HEAP[$buf_addr]; //@line 822 "multibytecodec.c"
        var $2=(($1+8)&4294967295); //@line 822 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 822 "multibytecodec.c"
        var $4=($3); //@line 822 "multibytecodec.c"
        var $5=HEAP[$buf_addr]; //@line 822 "multibytecodec.c"
        var $6=(($5)&4294967295); //@line 822 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 822 "multibytecodec.c"
        var $8=($7); //@line 822 "multibytecodec.c"
        var $9=((($4) - ($8))&4294967295); //@line 822 "multibytecodec.c"
        HEAP[$npendings]=$9; //@line 822 "multibytecodec.c"
        var $10=HEAP[$ctx_addr]; //@line 823 "multibytecodec.c"
        var $11=(($10+32)&4294967295); //@line 823 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 823 "multibytecodec.c"
        var $13=HEAP[$npendings]; //@line 823 "multibytecodec.c"
        var $14=((($12) + ($13))&4294967295); //@line 823 "multibytecodec.c"
        var $15=((($14))|0) > 8; //@line 823 "multibytecodec.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 823 "multibytecodec.c"
      case 1: // $bb
        var $16=HEAP[$ctx_addr]; //@line 823 "multibytecodec.c"
        var $17=(($16+32)&4294967295); //@line 823 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 823 "multibytecodec.c"
        var $19=((2147483647 - ($18))&4294967295); //@line 823 "multibytecodec.c"
        var $20=HEAP[$npendings]; //@line 823 "multibytecodec.c"
        var $21=((($19))|0) < ((($20))|0); //@line 823 "multibytecodec.c"
        if ($21) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 823 "multibytecodec.c"
      case 2: // $bb1
        var $22=HEAP[_PyExc_UnicodeError]; //@line 825 "multibytecodec.c"
        _PyErr_SetString($22, ((__str25)&4294967295)); //@line 825 "multibytecodec.c"
        HEAP[$0]=-1; //@line 826 "multibytecodec.c"
        __label__ = 4; break; //@line 826 "multibytecodec.c"
      case 3: // $bb2
        var $23=HEAP[$npendings]; //@line 828 "multibytecodec.c"
        var $24=HEAP[$buf_addr]; //@line 828 "multibytecodec.c"
        var $25=(($24)&4294967295); //@line 828 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 828 "multibytecodec.c"
        var $27=HEAP[$ctx_addr]; //@line 828 "multibytecodec.c"
        var $28=(($27+24)&4294967295); //@line 828 "multibytecodec.c"
        var $29=(($28)&4294967295); //@line 828 "multibytecodec.c"
        var $30=HEAP[$ctx_addr]; //@line 828 "multibytecodec.c"
        var $31=(($30+32)&4294967295); //@line 828 "multibytecodec.c"
        var $32=HEAP[$31]; //@line 828 "multibytecodec.c"
        var $33=(($29+$32)&4294967295); //@line 828 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($33, $26, $23, 1, 0); //@line 828 "multibytecodec.c"
        var $34=HEAP[$ctx_addr]; //@line 829 "multibytecodec.c"
        var $35=(($34+32)&4294967295); //@line 829 "multibytecodec.c"
        var $36=HEAP[$35]; //@line 829 "multibytecodec.c"
        var $37=HEAP[$npendings]; //@line 829 "multibytecodec.c"
        var $38=((($36) + ($37))&4294967295); //@line 829 "multibytecodec.c"
        var $39=HEAP[$ctx_addr]; //@line 829 "multibytecodec.c"
        var $40=(($39+32)&4294967295); //@line 829 "multibytecodec.c"
        HEAP[$40]=$38; //@line 829 "multibytecodec.c"
        HEAP[$0]=0; //@line 830 "multibytecodec.c"
        __label__ = 4; break; //@line 830 "multibytecodec.c"
      case 4: // $bb3
        var $41=HEAP[$0]; //@line 826 "multibytecodec.c"
        HEAP[$retval]=$41; //@line 826 "multibytecodec.c"
        __label__ = 5; break; //@line 826 "multibytecodec.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 826 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 826 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _decoder_prepare_buffer($buf, $data, $size) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $buf_addr=__stackBase__;
        var $data_addr=__stackBase__+4;
        var $size_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$buf_addr]=$buf;
        HEAP[$data_addr]=$data;
        HEAP[$size_addr]=$size;
        var $1=HEAP[$data_addr]; //@line 837 "multibytecodec.c"
        var $2=HEAP[$buf_addr]; //@line 837 "multibytecodec.c"
        var $3=(($2+4)&4294967295); //@line 837 "multibytecodec.c"
        HEAP[$3]=$1; //@line 837 "multibytecodec.c"
        var $4=HEAP[$buf_addr]; //@line 837 "multibytecodec.c"
        var $5=(($4+4)&4294967295); //@line 837 "multibytecodec.c"
        var $6=HEAP[$5]; //@line 837 "multibytecodec.c"
        var $7=HEAP[$buf_addr]; //@line 837 "multibytecodec.c"
        var $8=(($7)&4294967295); //@line 837 "multibytecodec.c"
        HEAP[$8]=$6; //@line 837 "multibytecodec.c"
        var $9=HEAP[$buf_addr]; //@line 838 "multibytecodec.c"
        var $10=(($9+4)&4294967295); //@line 838 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 838 "multibytecodec.c"
        var $12=HEAP[$size_addr]; //@line 838 "multibytecodec.c"
        var $13=(($11+$12)&4294967295); //@line 838 "multibytecodec.c"
        var $14=HEAP[$buf_addr]; //@line 838 "multibytecodec.c"
        var $15=(($14+8)&4294967295); //@line 838 "multibytecodec.c"
        HEAP[$15]=$13; //@line 838 "multibytecodec.c"
        var $16=HEAP[$buf_addr]; //@line 839 "multibytecodec.c"
        var $17=(($16+24)&4294967295); //@line 839 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 839 "multibytecodec.c"
        var $19=($18)==0; //@line 839 "multibytecodec.c"
        if ($19) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 839 "multibytecodec.c"
      case 1: // $bb
        var $20=HEAP[$size_addr]; //@line 840 "multibytecodec.c"
        var $21=_PyUnicodeUCS2_FromUnicode(0, $20); //@line 840 "multibytecodec.c"
        var $22=HEAP[$buf_addr]; //@line 840 "multibytecodec.c"
        var $23=(($22+24)&4294967295); //@line 840 "multibytecodec.c"
        HEAP[$23]=$21; //@line 840 "multibytecodec.c"
        var $24=HEAP[$buf_addr]; //@line 841 "multibytecodec.c"
        var $25=(($24+24)&4294967295); //@line 841 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 841 "multibytecodec.c"
        var $27=($26)==0; //@line 841 "multibytecodec.c"
        if ($27) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 841 "multibytecodec.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 842 "multibytecodec.c"
        __label__ = 5; break; //@line 842 "multibytecodec.c"
      case 3: // $bb2
        var $28=HEAP[$buf_addr]; //@line 843 "multibytecodec.c"
        var $29=(($28+24)&4294967295); //@line 843 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 843 "multibytecodec.c"
        var $31=$30; //@line 843 "multibytecodec.c"
        var $32=(($31+12)&4294967295); //@line 843 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 843 "multibytecodec.c"
        var $34=HEAP[$buf_addr]; //@line 843 "multibytecodec.c"
        var $35=(($34+12)&4294967295); //@line 843 "multibytecodec.c"
        HEAP[$35]=$33; //@line 843 "multibytecodec.c"
        var $36=HEAP[$buf_addr]; //@line 844 "multibytecodec.c"
        var $37=(($36+12)&4294967295); //@line 844 "multibytecodec.c"
        var $38=HEAP[$37]; //@line 844 "multibytecodec.c"
        var $39=HEAP[$buf_addr]; //@line 844 "multibytecodec.c"
        var $40=(($39+24)&4294967295); //@line 844 "multibytecodec.c"
        var $41=HEAP[$40]; //@line 844 "multibytecodec.c"
        var $42=$41; //@line 844 "multibytecodec.c"
        var $43=(($42+8)&4294967295); //@line 844 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 844 "multibytecodec.c"
        var $45=(($38+2*$44)&4294967295); //@line 844 "multibytecodec.c"
        var $46=HEAP[$buf_addr]; //@line 844 "multibytecodec.c"
        var $47=(($46+16)&4294967295); //@line 844 "multibytecodec.c"
        HEAP[$47]=$45; //@line 844 "multibytecodec.c"
        __label__ = 4; break; //@line 844 "multibytecodec.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 848 "multibytecodec.c"
        __label__ = 5; break; //@line 848 "multibytecodec.c"
      case 5: // $bb4
        var $48=HEAP[$0]; //@line 842 "multibytecodec.c"
        HEAP[$retval]=$48; //@line 842 "multibytecodec.c"
        __label__ = 6; break; //@line 842 "multibytecodec.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 842 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 842 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _decoder_feed_buffer($ctx, $buf) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ctx_addr=__stackBase__;
        var $buf_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $inleft=__stackBase__+16;
        var $outleft=__stackBase__+20;
        var $r=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$ctx_addr]=$ctx;
        HEAP[$buf_addr]=$buf;
        __label__ = 5; break; //@line 855 "multibytecodec.c"
      case 1: // $bb
        var $1=HEAP[$buf_addr]; //@line 859 "multibytecodec.c"
        var $2=(($1+8)&4294967295); //@line 859 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 859 "multibytecodec.c"
        var $4=($3); //@line 859 "multibytecodec.c"
        var $5=HEAP[$buf_addr]; //@line 859 "multibytecodec.c"
        var $6=(($5)&4294967295); //@line 859 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 859 "multibytecodec.c"
        var $8=($7); //@line 859 "multibytecodec.c"
        var $9=((($4) - ($8))&4294967295); //@line 859 "multibytecodec.c"
        HEAP[$inleft]=$9; //@line 859 "multibytecodec.c"
        var $10=HEAP[$buf_addr]; //@line 860 "multibytecodec.c"
        var $11=(($10+16)&4294967295); //@line 860 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 860 "multibytecodec.c"
        var $13=($12); //@line 860 "multibytecodec.c"
        var $14=HEAP[$buf_addr]; //@line 860 "multibytecodec.c"
        var $15=(($14+12)&4294967295); //@line 860 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 860 "multibytecodec.c"
        var $17=($16); //@line 860 "multibytecodec.c"
        var $18=((($13) - ($17))&4294967295); //@line 860 "multibytecodec.c"
        var $19=((((($18))|0)/2)|0); //@line 860 "multibytecodec.c"
        HEAP[$outleft]=$19; //@line 860 "multibytecodec.c"
        var $20=HEAP[$ctx_addr]; //@line 862 "multibytecodec.c"
        var $21=(($20+8)&4294967295); //@line 862 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 862 "multibytecodec.c"
        var $23=(($22+24)&4294967295); //@line 862 "multibytecodec.c"
        var $24=HEAP[$23]; //@line 862 "multibytecodec.c"
        var $25=HEAP[$buf_addr]; //@line 862 "multibytecodec.c"
        var $26=(($25+12)&4294967295); //@line 862 "multibytecodec.c"
        var $27=HEAP[$buf_addr]; //@line 862 "multibytecodec.c"
        var $28=(($27)&4294967295); //@line 862 "multibytecodec.c"
        var $29=HEAP[$ctx_addr]; //@line 862 "multibytecodec.c"
        var $30=(($29+8)&4294967295); //@line 862 "multibytecodec.c"
        var $31=HEAP[$30]; //@line 862 "multibytecodec.c"
        var $32=(($31+4)&4294967295); //@line 862 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 862 "multibytecodec.c"
        var $34=HEAP[$ctx_addr]; //@line 862 "multibytecodec.c"
        var $35=(($34+12)&4294967295); //@line 862 "multibytecodec.c"
        var $36=HEAP[$inleft]; //@line 862 "multibytecodec.c"
        var $37=HEAP[$outleft]; //@line 862 "multibytecodec.c"
        var $38=FUNCTION_TABLE[$24]($35, $33, $28, $36, $26, $37); //@line 862 "multibytecodec.c"
        HEAP[$r]=$38; //@line 862 "multibytecodec.c"
        var $39=HEAP[$r]; //@line 864 "multibytecodec.c"
        var $40=((($39))|0)==0; //@line 864 "multibytecodec.c"
        if ($40) { __label__ = 6; break; } else { __label__ = 2; break; } //@line 864 "multibytecodec.c"
      case 2: // $bb1
        var $41=HEAP[$r]; //@line 864 "multibytecodec.c"
        var $42=((($41))|0)==-2; //@line 864 "multibytecodec.c"
        if ($42) { __label__ = 6; break; } else { __label__ = 3; break; } //@line 864 "multibytecodec.c"
      case 3: // $bb2
        var $43=HEAP[$ctx_addr]; //@line 866 "multibytecodec.c"
        var $44=(($43+20)&4294967295); //@line 866 "multibytecodec.c"
        var $45=HEAP[$44]; //@line 866 "multibytecodec.c"
        var $46=HEAP[$ctx_addr]; //@line 866 "multibytecodec.c"
        var $47=(($46+12)&4294967295); //@line 866 "multibytecodec.c"
        var $48=HEAP[$ctx_addr]; //@line 866 "multibytecodec.c"
        var $49=(($48+8)&4294967295); //@line 866 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 866 "multibytecodec.c"
        var $51=HEAP[$buf_addr]; //@line 866 "multibytecodec.c"
        var $52=HEAP[$r]; //@line 866 "multibytecodec.c"
        var $53=_multibytecodec_decerror($50, $47, $51, $45, $52); //@line 866 "multibytecodec.c"
        var $54=((($53))|0)!=0; //@line 866 "multibytecodec.c"
        if ($54) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 866 "multibytecodec.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 868 "multibytecodec.c"
        __label__ = 7; break; //@line 868 "multibytecodec.c"
      case 5: // $bb4
        var $55=HEAP[$buf_addr]; //@line 855 "multibytecodec.c"
        var $56=(($55)&4294967295); //@line 855 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 855 "multibytecodec.c"
        var $58=HEAP[$buf_addr]; //@line 855 "multibytecodec.c"
        var $59=(($58+8)&4294967295); //@line 855 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 855 "multibytecodec.c"
        var $61=($57) < ($60); //@line 855 "multibytecodec.c"
        if ($61) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 855 "multibytecodec.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 870 "multibytecodec.c"
        __label__ = 7; break; //@line 870 "multibytecodec.c"
      case 7: // $bb6
        var $62=HEAP[$0]; //@line 868 "multibytecodec.c"
        HEAP[$retval]=$62; //@line 868 "multibytecodec.c"
        __label__ = 8; break; //@line 868 "multibytecodec.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 868 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 868 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbiencoder_encode($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $data=__stackBase__+20;
        var $final=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$final]=0; //@line 883 "multibytecodec.c"
        var $1=HEAP[$args_addr]; //@line 885 "multibytecodec.c"
        var $2=HEAP[$kwargs_addr]; //@line 885 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, ((__str26)&4294967295), ((_incrementalkwarglist)&4294967295), $data, $final); //@line 885 "multibytecodec.c"
        var $4=((($3))|0)==0; //@line 885 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 885 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 887 "multibytecodec.c"
        __label__ = 3; break; //@line 887 "multibytecodec.c"
      case 2: // $bb1
        var $5=HEAP[$final]; //@line 889 "multibytecodec.c"
        var $6=HEAP[$data]; //@line 889 "multibytecodec.c"
        var $7=HEAP[$self_addr]; //@line 889 "multibytecodec.c"
        var $8=_encoder_encode_stateful($7, $6, $5); //@line 889 "multibytecodec.c"
        HEAP[$0]=$8; //@line 889 "multibytecodec.c"
        __label__ = 3; break; //@line 889 "multibytecodec.c"
      case 3: // $bb2
        var $9=HEAP[$0]; //@line 887 "multibytecodec.c"
        HEAP[$retval]=$9; //@line 887 "multibytecodec.c"
        __label__ = 4; break; //@line 887 "multibytecodec.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 887 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 887 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbiencoder_reset($self) {
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
        var $1=HEAP[$self_addr]; //@line 895 "multibytecodec.c"
        var $2=(($1+8)&4294967295); //@line 895 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 895 "multibytecodec.c"
        var $4=(($3+32)&4294967295); //@line 895 "multibytecodec.c"
        var $5=HEAP[$4]; //@line 895 "multibytecodec.c"
        var $6=($5)!=0; //@line 895 "multibytecodec.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 895 "multibytecodec.c"
      case 1: // $bb
        var $7=HEAP[$self_addr]; //@line 895 "multibytecodec.c"
        var $8=(($7+8)&4294967295); //@line 895 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 895 "multibytecodec.c"
        var $10=(($9+32)&4294967295); //@line 895 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 895 "multibytecodec.c"
        var $12=HEAP[$self_addr]; //@line 895 "multibytecodec.c"
        var $13=(($12+8)&4294967295); //@line 895 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 895 "multibytecodec.c"
        var $15=(($14+4)&4294967295); //@line 895 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 895 "multibytecodec.c"
        var $17=HEAP[$self_addr]; //@line 895 "multibytecodec.c"
        var $18=(($17+12)&4294967295); //@line 895 "multibytecodec.c"
        var $19=FUNCTION_TABLE[$11]($18, $16); //@line 895 "multibytecodec.c"
        var $20=((($19))|0)!=0; //@line 895 "multibytecodec.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 895 "multibytecodec.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 897 "multibytecodec.c"
        __label__ = 4; break; //@line 897 "multibytecodec.c"
      case 3: // $bb2
        var $21=HEAP[$self_addr]; //@line 898 "multibytecodec.c"
        var $22=(($21+28)&4294967295); //@line 898 "multibytecodec.c"
        HEAP[$22]=0; //@line 898 "multibytecodec.c"
        var $23=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 900 "multibytecodec.c"
        var $24=((($23) + 1)&4294967295); //@line 900 "multibytecodec.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$24; //@line 900 "multibytecodec.c"
        HEAP[$0]=__Py_NoneStruct; //@line 900 "multibytecodec.c"
        __label__ = 4; break; //@line 900 "multibytecodec.c"
      case 4: // $bb3
        var $25=HEAP[$0]; //@line 897 "multibytecodec.c"
        HEAP[$retval]=$25; //@line 897 "multibytecodec.c"
        __label__ = 5; break; //@line 897 "multibytecodec.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 897 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 897 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbiencoder_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $self=__stackBase__+20;
        var $codec=__stackBase__+24;
        var $errors=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$codec]=0; //@line 915 "multibytecodec.c"
        HEAP[$errors]=0; //@line 916 "multibytecodec.c"
        var $1=HEAP[$args_addr]; //@line 918 "multibytecodec.c"
        var $2=HEAP[$kwds_addr]; //@line 918 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, ((__str28)&4294967295), ((_incnewkwarglist)&4294967295), $errors); //@line 918 "multibytecodec.c"
        var $4=((($3))|0)==0; //@line 918 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 918 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 920 "multibytecodec.c"
        __label__ = 20; break; //@line 920 "multibytecodec.c"
      case 2: // $bb1
        var $5=HEAP[$type_addr]; //@line 922 "multibytecodec.c"
        var $6=(($5+152)&4294967295); //@line 922 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 922 "multibytecodec.c"
        var $8=HEAP[$type_addr]; //@line 922 "multibytecodec.c"
        var $9=FUNCTION_TABLE[$7]($8, 0); //@line 922 "multibytecodec.c"
        var $10=$9; //@line 922 "multibytecodec.c"
        HEAP[$self]=$10; //@line 922 "multibytecodec.c"
        var $11=HEAP[$self]; //@line 923 "multibytecodec.c"
        var $12=($11)==0; //@line 923 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 923 "multibytecodec.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 924 "multibytecodec.c"
        __label__ = 20; break; //@line 924 "multibytecodec.c"
      case 4: // $bb3
        var $13=HEAP[$type_addr]; //@line 926 "multibytecodec.c"
        var $14=$13; //@line 926 "multibytecodec.c"
        var $15=_PyObject_GetAttrString($14, ((__str29)&4294967295)); //@line 926 "multibytecodec.c"
        HEAP[$codec]=$15; //@line 926 "multibytecodec.c"
        var $16=HEAP[$codec]; //@line 927 "multibytecodec.c"
        var $17=($16)==0; //@line 927 "multibytecodec.c"
        if ($17) { __label__ = 13; break; } else { __label__ = 5; break; } //@line 927 "multibytecodec.c"
      case 5: // $bb4
        var $18=HEAP[$codec]; //@line 929 "multibytecodec.c"
        var $19=(($18+4)&4294967295); //@line 929 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 929 "multibytecodec.c"
        var $21=($20)!=(_MultibyteCodec_Type); //@line 929 "multibytecodec.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 929 "multibytecodec.c"
      case 6: // $bb5
        var $22=HEAP[_PyExc_TypeError]; //@line 930 "multibytecodec.c"
        _PyErr_SetString($22, ((__str30)&4294967295)); //@line 930 "multibytecodec.c"
        __label__ = 13; break; //@line 930 "multibytecodec.c"
      case 7: // $bb6
        var $23=HEAP[$codec]; //@line 934 "multibytecodec.c"
        var $24=$23; //@line 934 "multibytecodec.c"
        var $25=(($24+8)&4294967295); //@line 934 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 934 "multibytecodec.c"
        var $27=HEAP[$self]; //@line 934 "multibytecodec.c"
        var $28=(($27+8)&4294967295); //@line 934 "multibytecodec.c"
        HEAP[$28]=$26; //@line 934 "multibytecodec.c"
        var $29=HEAP[$self]; //@line 935 "multibytecodec.c"
        var $30=(($29+28)&4294967295); //@line 935 "multibytecodec.c"
        HEAP[$30]=0; //@line 935 "multibytecodec.c"
        var $31=HEAP[$errors]; //@line 936 "multibytecodec.c"
        var $32=_internal_error_callback($31); //@line 936 "multibytecodec.c"
        var $33=HEAP[$self]; //@line 936 "multibytecodec.c"
        var $34=(($33+20)&4294967295); //@line 936 "multibytecodec.c"
        HEAP[$34]=$32; //@line 936 "multibytecodec.c"
        var $35=HEAP[$self]; //@line 937 "multibytecodec.c"
        var $36=(($35+20)&4294967295); //@line 937 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 937 "multibytecodec.c"
        var $38=($37)==0; //@line 937 "multibytecodec.c"
        if ($38) { __label__ = 13; break; } else { __label__ = 8; break; } //@line 937 "multibytecodec.c"
      case 8: // $bb7
        var $39=HEAP[$self]; //@line 939 "multibytecodec.c"
        var $40=(($39+8)&4294967295); //@line 939 "multibytecodec.c"
        var $41=HEAP[$40]; //@line 939 "multibytecodec.c"
        var $42=(($41+16)&4294967295); //@line 939 "multibytecodec.c"
        var $43=HEAP[$42]; //@line 939 "multibytecodec.c"
        var $44=($43)!=0; //@line 939 "multibytecodec.c"
        if ($44) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 939 "multibytecodec.c"
      case 9: // $bb8
        var $45=HEAP[$self]; //@line 939 "multibytecodec.c"
        var $46=(($45+8)&4294967295); //@line 939 "multibytecodec.c"
        var $47=HEAP[$46]; //@line 939 "multibytecodec.c"
        var $48=(($47+16)&4294967295); //@line 939 "multibytecodec.c"
        var $49=HEAP[$48]; //@line 939 "multibytecodec.c"
        var $50=HEAP[$self]; //@line 939 "multibytecodec.c"
        var $51=(($50+8)&4294967295); //@line 939 "multibytecodec.c"
        var $52=HEAP[$51]; //@line 939 "multibytecodec.c"
        var $53=(($52+4)&4294967295); //@line 939 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 939 "multibytecodec.c"
        var $55=HEAP[$self]; //@line 939 "multibytecodec.c"
        var $56=(($55+12)&4294967295); //@line 939 "multibytecodec.c"
        var $57=FUNCTION_TABLE[$49]($56, $54); //@line 939 "multibytecodec.c"
        var $58=((($57))|0)!=0; //@line 939 "multibytecodec.c"
        if ($58) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 939 "multibytecodec.c"
      case 10: // $bb9
        var $59=HEAP[$codec]; //@line 943 "multibytecodec.c"
        var $60=(($59)&4294967295); //@line 943 "multibytecodec.c"
        var $61=HEAP[$60]; //@line 943 "multibytecodec.c"
        var $62=((($61) - 1)&4294967295); //@line 943 "multibytecodec.c"
        var $63=HEAP[$codec]; //@line 943 "multibytecodec.c"
        var $64=(($63)&4294967295); //@line 943 "multibytecodec.c"
        HEAP[$64]=$62; //@line 943 "multibytecodec.c"
        var $65=HEAP[$codec]; //@line 943 "multibytecodec.c"
        var $66=(($65)&4294967295); //@line 943 "multibytecodec.c"
        var $67=HEAP[$66]; //@line 943 "multibytecodec.c"
        var $68=((($67))|0)==0; //@line 943 "multibytecodec.c"
        if ($68) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 943 "multibytecodec.c"
      case 11: // $bb10
        var $69=HEAP[$codec]; //@line 943 "multibytecodec.c"
        var $70=(($69+4)&4294967295); //@line 943 "multibytecodec.c"
        var $71=HEAP[$70]; //@line 943 "multibytecodec.c"
        var $72=(($71+24)&4294967295); //@line 943 "multibytecodec.c"
        var $73=HEAP[$72]; //@line 943 "multibytecodec.c"
        var $74=HEAP[$codec]; //@line 943 "multibytecodec.c"
        FUNCTION_TABLE[$73]($74); //@line 943 "multibytecodec.c"
        __label__ = 12; break; //@line 943 "multibytecodec.c"
      case 12: // $bb11
        var $75=HEAP[$self]; //@line 944 "multibytecodec.c"
        var $76=$75; //@line 944 "multibytecodec.c"
        HEAP[$0]=$76; //@line 944 "multibytecodec.c"
        __label__ = 20; break; //@line 944 "multibytecodec.c"
      case 13: // $errorexit
        var $77=HEAP[$self]; //@line 947 "multibytecodec.c"
        var $78=($77)!=0; //@line 947 "multibytecodec.c"
        if ($78) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 947 "multibytecodec.c"
      case 14: // $bb12
        var $79=HEAP[$self]; //@line 947 "multibytecodec.c"
        var $80=$79; //@line 947 "multibytecodec.c"
        var $81=(($80)&4294967295); //@line 947 "multibytecodec.c"
        var $82=HEAP[$81]; //@line 947 "multibytecodec.c"
        var $83=((($82) - 1)&4294967295); //@line 947 "multibytecodec.c"
        var $84=(($80)&4294967295); //@line 947 "multibytecodec.c"
        HEAP[$84]=$83; //@line 947 "multibytecodec.c"
        var $85=(($80)&4294967295); //@line 947 "multibytecodec.c"
        var $86=HEAP[$85]; //@line 947 "multibytecodec.c"
        var $87=((($86))|0)==0; //@line 947 "multibytecodec.c"
        if ($87) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 947 "multibytecodec.c"
      case 15: // $bb13
        var $88=HEAP[$self]; //@line 947 "multibytecodec.c"
        var $89=$88; //@line 947 "multibytecodec.c"
        var $90=(($89+4)&4294967295); //@line 947 "multibytecodec.c"
        var $91=HEAP[$90]; //@line 947 "multibytecodec.c"
        var $92=(($91+24)&4294967295); //@line 947 "multibytecodec.c"
        var $93=HEAP[$92]; //@line 947 "multibytecodec.c"
        var $94=HEAP[$self]; //@line 947 "multibytecodec.c"
        var $95=$94; //@line 947 "multibytecodec.c"
        FUNCTION_TABLE[$93]($95); //@line 947 "multibytecodec.c"
        __label__ = 16; break; //@line 947 "multibytecodec.c"
      case 16: // $bb14
        var $96=HEAP[$codec]; //@line 948 "multibytecodec.c"
        var $97=($96)!=0; //@line 948 "multibytecodec.c"
        if ($97) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 948 "multibytecodec.c"
      case 17: // $bb15
        var $98=HEAP[$codec]; //@line 948 "multibytecodec.c"
        var $99=(($98)&4294967295); //@line 948 "multibytecodec.c"
        var $100=HEAP[$99]; //@line 948 "multibytecodec.c"
        var $101=((($100) - 1)&4294967295); //@line 948 "multibytecodec.c"
        var $102=HEAP[$codec]; //@line 948 "multibytecodec.c"
        var $103=(($102)&4294967295); //@line 948 "multibytecodec.c"
        HEAP[$103]=$101; //@line 948 "multibytecodec.c"
        var $104=HEAP[$codec]; //@line 948 "multibytecodec.c"
        var $105=(($104)&4294967295); //@line 948 "multibytecodec.c"
        var $106=HEAP[$105]; //@line 948 "multibytecodec.c"
        var $107=((($106))|0)==0; //@line 948 "multibytecodec.c"
        if ($107) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 948 "multibytecodec.c"
      case 18: // $bb16
        var $108=HEAP[$codec]; //@line 948 "multibytecodec.c"
        var $109=(($108+4)&4294967295); //@line 948 "multibytecodec.c"
        var $110=HEAP[$109]; //@line 948 "multibytecodec.c"
        var $111=(($110+24)&4294967295); //@line 948 "multibytecodec.c"
        var $112=HEAP[$111]; //@line 948 "multibytecodec.c"
        var $113=HEAP[$codec]; //@line 948 "multibytecodec.c"
        FUNCTION_TABLE[$112]($113); //@line 948 "multibytecodec.c"
        __label__ = 19; break; //@line 948 "multibytecodec.c"
      case 19: // $bb17
        HEAP[$0]=0; //@line 949 "multibytecodec.c"
        __label__ = 20; break; //@line 949 "multibytecodec.c"
      case 20: // $bb18
        var $114=HEAP[$0]; //@line 920 "multibytecodec.c"
        HEAP[$retval]=$114; //@line 920 "multibytecodec.c"
        __label__ = 21; break; //@line 920 "multibytecodec.c"
      case 21: // $return
        var $retval19=HEAP[$retval]; //@line 920 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 920 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbiencoder_init($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$0]=0; //@line 955 "multibytecodec.c"
        var $1=HEAP[$0]; //@line 955 "multibytecodec.c"
        HEAP[$retval]=$1; //@line 955 "multibytecodec.c"
        __label__ = 1; break; //@line 955 "multibytecodec.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 955 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 955 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbiencoder_traverse($self, $visit, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $visit_addr=__stackBase__+4;
        var $arg_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $vret=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$visit_addr]=$visit;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$self_addr]; //@line 962 "multibytecodec.c"
        var $2=(($1+20)&4294967295); //@line 962 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 962 "multibytecodec.c"
        var $4=($3)==0; //@line 962 "multibytecodec.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 962 "multibytecodec.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 962 "multibytecodec.c"
        var $6=(($5+20)&4294967295); //@line 962 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 962 "multibytecodec.c"
        var $8=($7) > 3; //@line 962 "multibytecodec.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 962 "multibytecodec.c"
      case 2: // $bb1
        var $9=HEAP[$self_addr]; //@line 963 "multibytecodec.c"
        var $10=(($9+20)&4294967295); //@line 963 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 963 "multibytecodec.c"
        var $12=($11)!=0; //@line 963 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 963 "multibytecodec.c"
      case 3: // $bb2
        var $13=HEAP[$self_addr]; //@line 963 "multibytecodec.c"
        var $14=(($13+20)&4294967295); //@line 963 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 963 "multibytecodec.c"
        var $16=HEAP[$visit_addr]; //@line 963 "multibytecodec.c"
        var $17=HEAP[$arg_addr]; //@line 963 "multibytecodec.c"
        var $18=FUNCTION_TABLE[$16]($15, $17); //@line 963 "multibytecodec.c"
        HEAP[$vret]=$18; //@line 963 "multibytecodec.c"
        var $19=HEAP[$vret]; //@line 963 "multibytecodec.c"
        var $20=((($19))|0)!=0; //@line 963 "multibytecodec.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 963 "multibytecodec.c"
      case 4: // $bb3
        var $21=HEAP[$vret]; //@line 963 "multibytecodec.c"
        HEAP[$0]=$21; //@line 963 "multibytecodec.c"
        __label__ = 6; break; //@line 963 "multibytecodec.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 964 "multibytecodec.c"
        __label__ = 6; break; //@line 964 "multibytecodec.c"
      case 6: // $bb5
        var $22=HEAP[$0]; //@line 963 "multibytecodec.c"
        HEAP[$retval]=$22; //@line 963 "multibytecodec.c"
        __label__ = 7; break; //@line 963 "multibytecodec.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 963 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 963 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbiencoder_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 970 "multibytecodec.c"
        var $1=$0; //@line 970 "multibytecodec.c"
        _PyObject_GC_UnTrack($1); //@line 970 "multibytecodec.c"
        var $2=HEAP[$self_addr]; //@line 971 "multibytecodec.c"
        var $3=(($2+20)&4294967295); //@line 971 "multibytecodec.c"
        var $4=HEAP[$3]; //@line 971 "multibytecodec.c"
        var $5=($4)!=0; //@line 971 "multibytecodec.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 971 "multibytecodec.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 971 "multibytecodec.c"
        var $7=(($6+20)&4294967295); //@line 971 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 971 "multibytecodec.c"
        var $9=($8)==0; //@line 971 "multibytecodec.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 971 "multibytecodec.c"
      case 2: // $bb1
        var $10=HEAP[$self_addr]; //@line 971 "multibytecodec.c"
        var $11=(($10+20)&4294967295); //@line 971 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 971 "multibytecodec.c"
        var $13=($12) > 3; //@line 971 "multibytecodec.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 971 "multibytecodec.c"
      case 3: // $bb2
        var $14=HEAP[$self_addr]; //@line 971 "multibytecodec.c"
        var $15=(($14+20)&4294967295); //@line 971 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 971 "multibytecodec.c"
        var $17=(($16)&4294967295); //@line 971 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 971 "multibytecodec.c"
        var $19=((($18) - 1)&4294967295); //@line 971 "multibytecodec.c"
        var $20=(($16)&4294967295); //@line 971 "multibytecodec.c"
        HEAP[$20]=$19; //@line 971 "multibytecodec.c"
        var $21=(($16)&4294967295); //@line 971 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 971 "multibytecodec.c"
        var $23=((($22))|0)==0; //@line 971 "multibytecodec.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 971 "multibytecodec.c"
      case 4: // $bb3
        var $24=HEAP[$self_addr]; //@line 971 "multibytecodec.c"
        var $25=(($24+20)&4294967295); //@line 971 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 971 "multibytecodec.c"
        var $27=(($26+4)&4294967295); //@line 971 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 971 "multibytecodec.c"
        var $29=(($28+24)&4294967295); //@line 971 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 971 "multibytecodec.c"
        var $31=HEAP[$self_addr]; //@line 971 "multibytecodec.c"
        var $32=(($31+20)&4294967295); //@line 971 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 971 "multibytecodec.c"
        FUNCTION_TABLE[$30]($33); //@line 971 "multibytecodec.c"
        __label__ = 5; break; //@line 971 "multibytecodec.c"
      case 5: // $bb4
        var $34=HEAP[$self_addr]; //@line 972 "multibytecodec.c"
        var $35=$34; //@line 972 "multibytecodec.c"
        var $36=(($35+4)&4294967295); //@line 972 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 972 "multibytecodec.c"
        var $38=(($37+160)&4294967295); //@line 972 "multibytecodec.c"
        var $39=HEAP[$38]; //@line 972 "multibytecodec.c"
        var $40=HEAP[$self_addr]; //@line 972 "multibytecodec.c"
        var $41=$40; //@line 972 "multibytecodec.c"
        FUNCTION_TABLE[$39]($41); //@line 972 "multibytecodec.c"
        __label__ = 6; break; //@line 973 "multibytecodec.c"
      case 6: // $return
        STACKTOP = __stackBase__;
        return; //@line 973 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbidecoder_decode($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 128; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 128);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $buf=__stackBase__+20;
        var $data=__stackBase__+48;
        var $wdata=__stackBase__+52;
        var $pdata=__stackBase__+56;
        var $wsize=__stackBase__+108;
        var $finalsize=__stackBase__+112;
        var $size=__stackBase__+116;
        var $origpending=__stackBase__+120;
        var $final=__stackBase__+124;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$wdata]=0; //@line 1028 "multibytecodec.c"
        HEAP[$finalsize]=0; //@line 1030 "multibytecodec.c"
        HEAP[$final]=0; //@line 1031 "multibytecodec.c"
        var $1=HEAP[$args_addr]; //@line 1033 "multibytecodec.c"
        var $2=HEAP[$kwargs_addr]; //@line 1033 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, ((__str32)&4294967295), ((_incrementalkwarglist)&4294967295), $pdata, $final); //@line 1033 "multibytecodec.c"
        var $4=((($3))|0)==0; //@line 1033 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1033 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1035 "multibytecodec.c"
        __label__ = 34; break; //@line 1035 "multibytecodec.c"
      case 2: // $bb1
        var $5=(($pdata)&4294967295); //@line 1036 "multibytecodec.c"
        var $6=HEAP[$5]; //@line 1036 "multibytecodec.c"
        HEAP[$data]=$6; //@line 1036 "multibytecodec.c"
        var $7=(($pdata+8)&4294967295); //@line 1037 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 1037 "multibytecodec.c"
        HEAP[$size]=$8; //@line 1037 "multibytecodec.c"
        var $9=(($buf+20)&4294967295); //@line 1039 "multibytecodec.c"
        HEAP[$9]=0; //@line 1039 "multibytecodec.c"
        var $10=(($buf+20)&4294967295); //@line 1039 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 1039 "multibytecodec.c"
        var $12=(($buf+24)&4294967295); //@line 1039 "multibytecodec.c"
        HEAP[$12]=$11; //@line 1039 "multibytecodec.c"
        var $13=HEAP[$self_addr]; //@line 1040 "multibytecodec.c"
        var $14=(($13+32)&4294967295); //@line 1040 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 1040 "multibytecodec.c"
        HEAP[$origpending]=$15; //@line 1040 "multibytecodec.c"
        var $16=HEAP[$self_addr]; //@line 1042 "multibytecodec.c"
        var $17=(($16+32)&4294967295); //@line 1042 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 1042 "multibytecodec.c"
        var $19=((($18))|0)==0; //@line 1042 "multibytecodec.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1042 "multibytecodec.c"
      case 3: // $bb2
        var $20=HEAP[$size]; //@line 1043 "multibytecodec.c"
        HEAP[$wsize]=$20; //@line 1043 "multibytecodec.c"
        var $21=HEAP[$data]; //@line 1044 "multibytecodec.c"
        HEAP[$wdata]=$21; //@line 1044 "multibytecodec.c"
        __label__ = 8; break; //@line 1044 "multibytecodec.c"
      case 4: // $bb3
        var $22=HEAP[$self_addr]; //@line 1047 "multibytecodec.c"
        var $23=(($22+32)&4294967295); //@line 1047 "multibytecodec.c"
        var $24=HEAP[$23]; //@line 1047 "multibytecodec.c"
        var $25=((2147483647 - ($24))&4294967295); //@line 1047 "multibytecodec.c"
        var $26=HEAP[$size]; //@line 1047 "multibytecodec.c"
        var $27=((($25))|0) < ((($26))|0); //@line 1047 "multibytecodec.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1047 "multibytecodec.c"
      case 5: // $bb4
        var $28=_PyErr_NoMemory(); //@line 1048 "multibytecodec.c"
        __label__ = 24; break; //@line 1048 "multibytecodec.c"
      case 6: // $bb5
        var $29=HEAP[$self_addr]; //@line 1051 "multibytecodec.c"
        var $30=(($29+32)&4294967295); //@line 1051 "multibytecodec.c"
        var $31=HEAP[$30]; //@line 1051 "multibytecodec.c"
        var $32=HEAP[$size]; //@line 1051 "multibytecodec.c"
        var $33=((($31) + ($32))&4294967295); //@line 1051 "multibytecodec.c"
        HEAP[$wsize]=$33; //@line 1051 "multibytecodec.c"
        var $34=HEAP[$wsize]; //@line 1052 "multibytecodec.c"
        var $35=_PyMem_Malloc($34); //@line 1052 "multibytecodec.c"
        HEAP[$wdata]=$35; //@line 1052 "multibytecodec.c"
        var $36=HEAP[$wdata]; //@line 1053 "multibytecodec.c"
        var $37=($36)==0; //@line 1053 "multibytecodec.c"
        if ($37) { __label__ = 24; break; } else { __label__ = 7; break; } //@line 1053 "multibytecodec.c"
      case 7: // $bb6
        var $38=HEAP[$self_addr]; //@line 1055 "multibytecodec.c"
        var $39=(($38+32)&4294967295); //@line 1055 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 1055 "multibytecodec.c"
        var $41=HEAP[$self_addr]; //@line 1055 "multibytecodec.c"
        var $42=(($41+24)&4294967295); //@line 1055 "multibytecodec.c"
        var $43=(($42)&4294967295); //@line 1055 "multibytecodec.c"
        var $44=HEAP[$wdata]; //@line 1055 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($44, $43, $40, 1, 0); //@line 1055 "multibytecodec.c"
        var $45=HEAP[$size]; //@line 1056 "multibytecodec.c"
        var $46=HEAP[$self_addr]; //@line 1056 "multibytecodec.c"
        var $47=(($46+32)&4294967295); //@line 1056 "multibytecodec.c"
        var $48=HEAP[$47]; //@line 1056 "multibytecodec.c"
        var $49=HEAP[$wdata]; //@line 1056 "multibytecodec.c"
        var $50=(($49+$48)&4294967295); //@line 1056 "multibytecodec.c"
        var $51=HEAP[$data]; //@line 1056 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($50, $51, $45, 1, 0); //@line 1056 "multibytecodec.c"
        var $52=HEAP[$self_addr]; //@line 1057 "multibytecodec.c"
        var $53=(($52+32)&4294967295); //@line 1057 "multibytecodec.c"
        HEAP[$53]=0; //@line 1057 "multibytecodec.c"
        __label__ = 8; break; //@line 1057 "multibytecodec.c"
      case 8: // $bb7
        var $54=HEAP[$wdata]; //@line 1060 "multibytecodec.c"
        var $55=HEAP[$wsize]; //@line 1060 "multibytecodec.c"
        var $56=_decoder_prepare_buffer($buf, $54, $55); //@line 1060 "multibytecodec.c"
        var $57=((($56))|0)!=0; //@line 1060 "multibytecodec.c"
        if ($57) { __label__ = 24; break; } else { __label__ = 9; break; } //@line 1060 "multibytecodec.c"
      case 9: // $bb8
        var $58=HEAP[$self_addr]; //@line 1063 "multibytecodec.c"
        var $59=_decoder_feed_buffer($58, $buf); //@line 1063 "multibytecodec.c"
        var $60=((($59))|0)!=0; //@line 1063 "multibytecodec.c"
        if ($60) { __label__ = 24; break; } else { __label__ = 10; break; } //@line 1063 "multibytecodec.c"
      case 10: // $bb9
        var $61=HEAP[$final]; //@line 1066 "multibytecodec.c"
        var $62=((($61))|0)!=0; //@line 1066 "multibytecodec.c"
        if ($62) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1066 "multibytecodec.c"
      case 11: // $bb10
        var $63=(($buf)&4294967295); //@line 1066 "multibytecodec.c"
        var $64=HEAP[$63]; //@line 1066 "multibytecodec.c"
        var $65=(($buf+8)&4294967295); //@line 1066 "multibytecodec.c"
        var $66=HEAP[$65]; //@line 1066 "multibytecodec.c"
        var $67=($64) < ($66); //@line 1066 "multibytecodec.c"
        if ($67) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1066 "multibytecodec.c"
      case 12: // $bb11
        var $68=HEAP[$self_addr]; //@line 1067 "multibytecodec.c"
        var $69=(($68+20)&4294967295); //@line 1067 "multibytecodec.c"
        var $70=HEAP[$69]; //@line 1067 "multibytecodec.c"
        var $71=HEAP[$self_addr]; //@line 1067 "multibytecodec.c"
        var $72=(($71+12)&4294967295); //@line 1067 "multibytecodec.c"
        var $73=HEAP[$self_addr]; //@line 1067 "multibytecodec.c"
        var $74=(($73+8)&4294967295); //@line 1067 "multibytecodec.c"
        var $75=HEAP[$74]; //@line 1067 "multibytecodec.c"
        var $76=_multibytecodec_decerror($75, $72, $buf, $70, -2); //@line 1067 "multibytecodec.c"
        var $77=((($76))|0)!=0; //@line 1067 "multibytecodec.c"
        if ($77) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1067 "multibytecodec.c"
      case 13: // $bb12
        var $78=HEAP[$origpending]; //@line 1070 "multibytecodec.c"
        var $79=HEAP[$self_addr]; //@line 1070 "multibytecodec.c"
        var $80=(($79+24)&4294967295); //@line 1070 "multibytecodec.c"
        var $81=(($80)&4294967295); //@line 1070 "multibytecodec.c"
        var $82=HEAP[$wdata]; //@line 1070 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($81, $82, $78, 1, 0); //@line 1070 "multibytecodec.c"
        var $83=HEAP[$self_addr]; //@line 1071 "multibytecodec.c"
        var $84=(($83+32)&4294967295); //@line 1071 "multibytecodec.c"
        var $85=HEAP[$origpending]; //@line 1071 "multibytecodec.c"
        HEAP[$84]=$85; //@line 1071 "multibytecodec.c"
        __label__ = 24; break; //@line 1071 "multibytecodec.c"
      case 14: // $bb13
        var $86=(($buf)&4294967295); //@line 1076 "multibytecodec.c"
        var $87=HEAP[$86]; //@line 1076 "multibytecodec.c"
        var $88=(($buf+8)&4294967295); //@line 1076 "multibytecodec.c"
        var $89=HEAP[$88]; //@line 1076 "multibytecodec.c"
        var $90=($87) < ($89); //@line 1076 "multibytecodec.c"
        if ($90) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1076 "multibytecodec.c"
      case 15: // $bb14
        var $91=HEAP[$self_addr]; //@line 1077 "multibytecodec.c"
        var $92=_decoder_append_pending($91, $buf); //@line 1077 "multibytecodec.c"
        var $93=((($92))|0)!=0; //@line 1077 "multibytecodec.c"
        if ($93) { __label__ = 24; break; } else { __label__ = 16; break; } //@line 1077 "multibytecodec.c"
      case 16: // $bb15
        var $94=(($buf+12)&4294967295); //@line 1081 "multibytecodec.c"
        var $95=HEAP[$94]; //@line 1081 "multibytecodec.c"
        var $96=($95); //@line 1081 "multibytecodec.c"
        var $97=(($buf+24)&4294967295); //@line 1081 "multibytecodec.c"
        var $98=HEAP[$97]; //@line 1081 "multibytecodec.c"
        var $99=$98; //@line 1081 "multibytecodec.c"
        var $100=(($99+12)&4294967295); //@line 1081 "multibytecodec.c"
        var $101=HEAP[$100]; //@line 1081 "multibytecodec.c"
        var $102=($101); //@line 1081 "multibytecodec.c"
        var $103=((($96) - ($102))&4294967295); //@line 1081 "multibytecodec.c"
        var $104=((((($103))|0)/2)|0); //@line 1081 "multibytecodec.c"
        HEAP[$finalsize]=$104; //@line 1081 "multibytecodec.c"
        var $105=(($buf+24)&4294967295); //@line 1082 "multibytecodec.c"
        var $106=HEAP[$105]; //@line 1082 "multibytecodec.c"
        var $107=$106; //@line 1082 "multibytecodec.c"
        var $108=(($107+8)&4294967295); //@line 1082 "multibytecodec.c"
        var $109=HEAP[$108]; //@line 1082 "multibytecodec.c"
        var $110=HEAP[$finalsize]; //@line 1082 "multibytecodec.c"
        var $111=((($109))|0)!=((($110))|0); //@line 1082 "multibytecodec.c"
        if ($111) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1082 "multibytecodec.c"
      case 17: // $bb16
        var $112=(($buf+24)&4294967295); //@line 1083 "multibytecodec.c"
        var $113=HEAP[$finalsize]; //@line 1083 "multibytecodec.c"
        var $114=_PyUnicodeUCS2_Resize($112, $113); //@line 1083 "multibytecodec.c"
        var $115=((($114))|0)==-1; //@line 1083 "multibytecodec.c"
        if ($115) { __label__ = 24; break; } else { __label__ = 18; break; } //@line 1083 "multibytecodec.c"
      case 18: // $bb17
        _PyBuffer_Release($pdata); //@line 1086 "multibytecodec.c"
        var $116=HEAP[$wdata]; //@line 1087 "multibytecodec.c"
        var $117=HEAP[$data]; //@line 1087 "multibytecodec.c"
        var $118=($116)!=($117); //@line 1087 "multibytecodec.c"
        if ($118) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1087 "multibytecodec.c"
      case 19: // $bb18
        var $119=HEAP[$wdata]; //@line 1088 "multibytecodec.c"
        _PyMem_Free($119); //@line 1088 "multibytecodec.c"
        __label__ = 20; break; //@line 1088 "multibytecodec.c"
      case 20: // $bb19
        var $120=(($buf+20)&4294967295); //@line 1089 "multibytecodec.c"
        var $121=HEAP[$120]; //@line 1089 "multibytecodec.c"
        var $122=($121)!=0; //@line 1089 "multibytecodec.c"
        if ($122) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 1089 "multibytecodec.c"
      case 21: // $bb20
        var $123=(($buf+20)&4294967295); //@line 1089 "multibytecodec.c"
        var $124=HEAP[$123]; //@line 1089 "multibytecodec.c"
        var $125=(($124)&4294967295); //@line 1089 "multibytecodec.c"
        var $126=HEAP[$125]; //@line 1089 "multibytecodec.c"
        var $127=((($126) - 1)&4294967295); //@line 1089 "multibytecodec.c"
        var $128=(($124)&4294967295); //@line 1089 "multibytecodec.c"
        HEAP[$128]=$127; //@line 1089 "multibytecodec.c"
        var $129=(($124)&4294967295); //@line 1089 "multibytecodec.c"
        var $130=HEAP[$129]; //@line 1089 "multibytecodec.c"
        var $131=((($130))|0)==0; //@line 1089 "multibytecodec.c"
        if ($131) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1089 "multibytecodec.c"
      case 22: // $bb21
        var $132=(($buf+20)&4294967295); //@line 1089 "multibytecodec.c"
        var $133=HEAP[$132]; //@line 1089 "multibytecodec.c"
        var $134=(($133+4)&4294967295); //@line 1089 "multibytecodec.c"
        var $135=HEAP[$134]; //@line 1089 "multibytecodec.c"
        var $136=(($135+24)&4294967295); //@line 1089 "multibytecodec.c"
        var $137=HEAP[$136]; //@line 1089 "multibytecodec.c"
        var $138=(($buf+20)&4294967295); //@line 1089 "multibytecodec.c"
        var $139=HEAP[$138]; //@line 1089 "multibytecodec.c"
        FUNCTION_TABLE[$137]($139); //@line 1089 "multibytecodec.c"
        __label__ = 23; break; //@line 1089 "multibytecodec.c"
      case 23: // $bb22
        var $140=(($buf+24)&4294967295); //@line 1090 "multibytecodec.c"
        var $141=HEAP[$140]; //@line 1090 "multibytecodec.c"
        HEAP[$0]=$141; //@line 1090 "multibytecodec.c"
        __label__ = 34; break; //@line 1090 "multibytecodec.c"
      case 24: // $errorexit
        _PyBuffer_Release($pdata); //@line 1093 "multibytecodec.c"
        var $142=HEAP[$wdata]; //@line 1094 "multibytecodec.c"
        var $143=($142)!=0; //@line 1094 "multibytecodec.c"
        if ($143) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 1094 "multibytecodec.c"
      case 25: // $bb23
        var $144=HEAP[$wdata]; //@line 1094 "multibytecodec.c"
        var $145=HEAP[$data]; //@line 1094 "multibytecodec.c"
        var $146=($144)!=($145); //@line 1094 "multibytecodec.c"
        if ($146) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1094 "multibytecodec.c"
      case 26: // $bb24
        var $147=HEAP[$wdata]; //@line 1095 "multibytecodec.c"
        _PyMem_Free($147); //@line 1095 "multibytecodec.c"
        __label__ = 27; break; //@line 1095 "multibytecodec.c"
      case 27: // $bb25
        var $148=(($buf+20)&4294967295); //@line 1096 "multibytecodec.c"
        var $149=HEAP[$148]; //@line 1096 "multibytecodec.c"
        var $150=($149)!=0; //@line 1096 "multibytecodec.c"
        if ($150) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 1096 "multibytecodec.c"
      case 28: // $bb26
        var $151=(($buf+20)&4294967295); //@line 1096 "multibytecodec.c"
        var $152=HEAP[$151]; //@line 1096 "multibytecodec.c"
        var $153=(($152)&4294967295); //@line 1096 "multibytecodec.c"
        var $154=HEAP[$153]; //@line 1096 "multibytecodec.c"
        var $155=((($154) - 1)&4294967295); //@line 1096 "multibytecodec.c"
        var $156=(($152)&4294967295); //@line 1096 "multibytecodec.c"
        HEAP[$156]=$155; //@line 1096 "multibytecodec.c"
        var $157=(($152)&4294967295); //@line 1096 "multibytecodec.c"
        var $158=HEAP[$157]; //@line 1096 "multibytecodec.c"
        var $159=((($158))|0)==0; //@line 1096 "multibytecodec.c"
        if ($159) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1096 "multibytecodec.c"
      case 29: // $bb27
        var $160=(($buf+20)&4294967295); //@line 1096 "multibytecodec.c"
        var $161=HEAP[$160]; //@line 1096 "multibytecodec.c"
        var $162=(($161+4)&4294967295); //@line 1096 "multibytecodec.c"
        var $163=HEAP[$162]; //@line 1096 "multibytecodec.c"
        var $164=(($163+24)&4294967295); //@line 1096 "multibytecodec.c"
        var $165=HEAP[$164]; //@line 1096 "multibytecodec.c"
        var $166=(($buf+20)&4294967295); //@line 1096 "multibytecodec.c"
        var $167=HEAP[$166]; //@line 1096 "multibytecodec.c"
        FUNCTION_TABLE[$165]($167); //@line 1096 "multibytecodec.c"
        __label__ = 30; break; //@line 1096 "multibytecodec.c"
      case 30: // $bb28
        var $168=(($buf+24)&4294967295); //@line 1097 "multibytecodec.c"
        var $169=HEAP[$168]; //@line 1097 "multibytecodec.c"
        var $170=($169)!=0; //@line 1097 "multibytecodec.c"
        if ($170) { __label__ = 31; break; } else { __label__ = 33; break; } //@line 1097 "multibytecodec.c"
      case 31: // $bb29
        var $171=(($buf+24)&4294967295); //@line 1097 "multibytecodec.c"
        var $172=HEAP[$171]; //@line 1097 "multibytecodec.c"
        var $173=(($172)&4294967295); //@line 1097 "multibytecodec.c"
        var $174=HEAP[$173]; //@line 1097 "multibytecodec.c"
        var $175=((($174) - 1)&4294967295); //@line 1097 "multibytecodec.c"
        var $176=(($172)&4294967295); //@line 1097 "multibytecodec.c"
        HEAP[$176]=$175; //@line 1097 "multibytecodec.c"
        var $177=(($172)&4294967295); //@line 1097 "multibytecodec.c"
        var $178=HEAP[$177]; //@line 1097 "multibytecodec.c"
        var $179=((($178))|0)==0; //@line 1097 "multibytecodec.c"
        if ($179) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1097 "multibytecodec.c"
      case 32: // $bb30
        var $180=(($buf+24)&4294967295); //@line 1097 "multibytecodec.c"
        var $181=HEAP[$180]; //@line 1097 "multibytecodec.c"
        var $182=(($181+4)&4294967295); //@line 1097 "multibytecodec.c"
        var $183=HEAP[$182]; //@line 1097 "multibytecodec.c"
        var $184=(($183+24)&4294967295); //@line 1097 "multibytecodec.c"
        var $185=HEAP[$184]; //@line 1097 "multibytecodec.c"
        var $186=(($buf+24)&4294967295); //@line 1097 "multibytecodec.c"
        var $187=HEAP[$186]; //@line 1097 "multibytecodec.c"
        FUNCTION_TABLE[$185]($187); //@line 1097 "multibytecodec.c"
        __label__ = 33; break; //@line 1097 "multibytecodec.c"
      case 33: // $bb31
        HEAP[$0]=0; //@line 1098 "multibytecodec.c"
        __label__ = 34; break; //@line 1098 "multibytecodec.c"
      case 34: // $bb32
        var $188=HEAP[$0]; //@line 1035 "multibytecodec.c"
        HEAP[$retval]=$188; //@line 1035 "multibytecodec.c"
        __label__ = 35; break; //@line 1035 "multibytecodec.c"
      case 35: // $return
        var $retval33=HEAP[$retval]; //@line 1035 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval33; //@line 1035 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbidecoder_reset($self) {
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
        var $1=HEAP[$self_addr]; //@line 1104 "multibytecodec.c"
        var $2=(($1+8)&4294967295); //@line 1104 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 1104 "multibytecodec.c"
        var $4=(($3+32)&4294967295); //@line 1104 "multibytecodec.c"
        var $5=HEAP[$4]; //@line 1104 "multibytecodec.c"
        var $6=($5)!=0; //@line 1104 "multibytecodec.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1104 "multibytecodec.c"
      case 1: // $bb
        var $7=HEAP[$self_addr]; //@line 1104 "multibytecodec.c"
        var $8=(($7+8)&4294967295); //@line 1104 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 1104 "multibytecodec.c"
        var $10=(($9+32)&4294967295); //@line 1104 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 1104 "multibytecodec.c"
        var $12=HEAP[$self_addr]; //@line 1104 "multibytecodec.c"
        var $13=(($12+8)&4294967295); //@line 1104 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 1104 "multibytecodec.c"
        var $15=(($14+4)&4294967295); //@line 1104 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 1104 "multibytecodec.c"
        var $17=HEAP[$self_addr]; //@line 1104 "multibytecodec.c"
        var $18=(($17+12)&4294967295); //@line 1104 "multibytecodec.c"
        var $19=FUNCTION_TABLE[$11]($18, $16); //@line 1104 "multibytecodec.c"
        var $20=((($19))|0)!=0; //@line 1104 "multibytecodec.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1104 "multibytecodec.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1106 "multibytecodec.c"
        __label__ = 4; break; //@line 1106 "multibytecodec.c"
      case 3: // $bb2
        var $21=HEAP[$self_addr]; //@line 1107 "multibytecodec.c"
        var $22=(($21+32)&4294967295); //@line 1107 "multibytecodec.c"
        HEAP[$22]=0; //@line 1107 "multibytecodec.c"
        var $23=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1109 "multibytecodec.c"
        var $24=((($23) + 1)&4294967295); //@line 1109 "multibytecodec.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$24; //@line 1109 "multibytecodec.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1109 "multibytecodec.c"
        __label__ = 4; break; //@line 1109 "multibytecodec.c"
      case 4: // $bb3
        var $25=HEAP[$0]; //@line 1106 "multibytecodec.c"
        HEAP[$retval]=$25; //@line 1106 "multibytecodec.c"
        __label__ = 5; break; //@line 1106 "multibytecodec.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 1106 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 1106 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbidecoder_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $self=__stackBase__+20;
        var $codec=__stackBase__+24;
        var $errors=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$codec]=0; //@line 1124 "multibytecodec.c"
        HEAP[$errors]=0; //@line 1125 "multibytecodec.c"
        var $1=HEAP[$args_addr]; //@line 1127 "multibytecodec.c"
        var $2=HEAP[$kwds_addr]; //@line 1127 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, ((__str33)&4294967295), ((_incnewkwarglist)&4294967295), $errors); //@line 1127 "multibytecodec.c"
        var $4=((($3))|0)==0; //@line 1127 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1127 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1129 "multibytecodec.c"
        __label__ = 20; break; //@line 1129 "multibytecodec.c"
      case 2: // $bb1
        var $5=HEAP[$type_addr]; //@line 1131 "multibytecodec.c"
        var $6=(($5+152)&4294967295); //@line 1131 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 1131 "multibytecodec.c"
        var $8=HEAP[$type_addr]; //@line 1131 "multibytecodec.c"
        var $9=FUNCTION_TABLE[$7]($8, 0); //@line 1131 "multibytecodec.c"
        var $10=$9; //@line 1131 "multibytecodec.c"
        HEAP[$self]=$10; //@line 1131 "multibytecodec.c"
        var $11=HEAP[$self]; //@line 1132 "multibytecodec.c"
        var $12=($11)==0; //@line 1132 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1132 "multibytecodec.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1133 "multibytecodec.c"
        __label__ = 20; break; //@line 1133 "multibytecodec.c"
      case 4: // $bb3
        var $13=HEAP[$type_addr]; //@line 1135 "multibytecodec.c"
        var $14=$13; //@line 1135 "multibytecodec.c"
        var $15=_PyObject_GetAttrString($14, ((__str29)&4294967295)); //@line 1135 "multibytecodec.c"
        HEAP[$codec]=$15; //@line 1135 "multibytecodec.c"
        var $16=HEAP[$codec]; //@line 1136 "multibytecodec.c"
        var $17=($16)==0; //@line 1136 "multibytecodec.c"
        if ($17) { __label__ = 13; break; } else { __label__ = 5; break; } //@line 1136 "multibytecodec.c"
      case 5: // $bb4
        var $18=HEAP[$codec]; //@line 1138 "multibytecodec.c"
        var $19=(($18+4)&4294967295); //@line 1138 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 1138 "multibytecodec.c"
        var $21=($20)!=(_MultibyteCodec_Type); //@line 1138 "multibytecodec.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1138 "multibytecodec.c"
      case 6: // $bb5
        var $22=HEAP[_PyExc_TypeError]; //@line 1139 "multibytecodec.c"
        _PyErr_SetString($22, ((__str30)&4294967295)); //@line 1139 "multibytecodec.c"
        __label__ = 13; break; //@line 1139 "multibytecodec.c"
      case 7: // $bb6
        var $23=HEAP[$codec]; //@line 1143 "multibytecodec.c"
        var $24=$23; //@line 1143 "multibytecodec.c"
        var $25=(($24+8)&4294967295); //@line 1143 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1143 "multibytecodec.c"
        var $27=HEAP[$self]; //@line 1143 "multibytecodec.c"
        var $28=(($27+8)&4294967295); //@line 1143 "multibytecodec.c"
        HEAP[$28]=$26; //@line 1143 "multibytecodec.c"
        var $29=HEAP[$self]; //@line 1144 "multibytecodec.c"
        var $30=(($29+32)&4294967295); //@line 1144 "multibytecodec.c"
        HEAP[$30]=0; //@line 1144 "multibytecodec.c"
        var $31=HEAP[$errors]; //@line 1145 "multibytecodec.c"
        var $32=_internal_error_callback($31); //@line 1145 "multibytecodec.c"
        var $33=HEAP[$self]; //@line 1145 "multibytecodec.c"
        var $34=(($33+20)&4294967295); //@line 1145 "multibytecodec.c"
        HEAP[$34]=$32; //@line 1145 "multibytecodec.c"
        var $35=HEAP[$self]; //@line 1146 "multibytecodec.c"
        var $36=(($35+20)&4294967295); //@line 1146 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 1146 "multibytecodec.c"
        var $38=($37)==0; //@line 1146 "multibytecodec.c"
        if ($38) { __label__ = 13; break; } else { __label__ = 8; break; } //@line 1146 "multibytecodec.c"
      case 8: // $bb7
        var $39=HEAP[$self]; //@line 1148 "multibytecodec.c"
        var $40=(($39+8)&4294967295); //@line 1148 "multibytecodec.c"
        var $41=HEAP[$40]; //@line 1148 "multibytecodec.c"
        var $42=(($41+28)&4294967295); //@line 1148 "multibytecodec.c"
        var $43=HEAP[$42]; //@line 1148 "multibytecodec.c"
        var $44=($43)!=0; //@line 1148 "multibytecodec.c"
        if ($44) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1148 "multibytecodec.c"
      case 9: // $bb8
        var $45=HEAP[$self]; //@line 1148 "multibytecodec.c"
        var $46=(($45+8)&4294967295); //@line 1148 "multibytecodec.c"
        var $47=HEAP[$46]; //@line 1148 "multibytecodec.c"
        var $48=(($47+28)&4294967295); //@line 1148 "multibytecodec.c"
        var $49=HEAP[$48]; //@line 1148 "multibytecodec.c"
        var $50=HEAP[$self]; //@line 1148 "multibytecodec.c"
        var $51=(($50+8)&4294967295); //@line 1148 "multibytecodec.c"
        var $52=HEAP[$51]; //@line 1148 "multibytecodec.c"
        var $53=(($52+4)&4294967295); //@line 1148 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 1148 "multibytecodec.c"
        var $55=HEAP[$self]; //@line 1148 "multibytecodec.c"
        var $56=(($55+12)&4294967295); //@line 1148 "multibytecodec.c"
        var $57=FUNCTION_TABLE[$49]($56, $54); //@line 1148 "multibytecodec.c"
        var $58=((($57))|0)!=0; //@line 1148 "multibytecodec.c"
        if ($58) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 1148 "multibytecodec.c"
      case 10: // $bb9
        var $59=HEAP[$codec]; //@line 1152 "multibytecodec.c"
        var $60=(($59)&4294967295); //@line 1152 "multibytecodec.c"
        var $61=HEAP[$60]; //@line 1152 "multibytecodec.c"
        var $62=((($61) - 1)&4294967295); //@line 1152 "multibytecodec.c"
        var $63=HEAP[$codec]; //@line 1152 "multibytecodec.c"
        var $64=(($63)&4294967295); //@line 1152 "multibytecodec.c"
        HEAP[$64]=$62; //@line 1152 "multibytecodec.c"
        var $65=HEAP[$codec]; //@line 1152 "multibytecodec.c"
        var $66=(($65)&4294967295); //@line 1152 "multibytecodec.c"
        var $67=HEAP[$66]; //@line 1152 "multibytecodec.c"
        var $68=((($67))|0)==0; //@line 1152 "multibytecodec.c"
        if ($68) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1152 "multibytecodec.c"
      case 11: // $bb10
        var $69=HEAP[$codec]; //@line 1152 "multibytecodec.c"
        var $70=(($69+4)&4294967295); //@line 1152 "multibytecodec.c"
        var $71=HEAP[$70]; //@line 1152 "multibytecodec.c"
        var $72=(($71+24)&4294967295); //@line 1152 "multibytecodec.c"
        var $73=HEAP[$72]; //@line 1152 "multibytecodec.c"
        var $74=HEAP[$codec]; //@line 1152 "multibytecodec.c"
        FUNCTION_TABLE[$73]($74); //@line 1152 "multibytecodec.c"
        __label__ = 12; break; //@line 1152 "multibytecodec.c"
      case 12: // $bb11
        var $75=HEAP[$self]; //@line 1153 "multibytecodec.c"
        var $76=$75; //@line 1153 "multibytecodec.c"
        HEAP[$0]=$76; //@line 1153 "multibytecodec.c"
        __label__ = 20; break; //@line 1153 "multibytecodec.c"
      case 13: // $errorexit
        var $77=HEAP[$self]; //@line 1156 "multibytecodec.c"
        var $78=($77)!=0; //@line 1156 "multibytecodec.c"
        if ($78) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 1156 "multibytecodec.c"
      case 14: // $bb12
        var $79=HEAP[$self]; //@line 1156 "multibytecodec.c"
        var $80=$79; //@line 1156 "multibytecodec.c"
        var $81=(($80)&4294967295); //@line 1156 "multibytecodec.c"
        var $82=HEAP[$81]; //@line 1156 "multibytecodec.c"
        var $83=((($82) - 1)&4294967295); //@line 1156 "multibytecodec.c"
        var $84=(($80)&4294967295); //@line 1156 "multibytecodec.c"
        HEAP[$84]=$83; //@line 1156 "multibytecodec.c"
        var $85=(($80)&4294967295); //@line 1156 "multibytecodec.c"
        var $86=HEAP[$85]; //@line 1156 "multibytecodec.c"
        var $87=((($86))|0)==0; //@line 1156 "multibytecodec.c"
        if ($87) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1156 "multibytecodec.c"
      case 15: // $bb13
        var $88=HEAP[$self]; //@line 1156 "multibytecodec.c"
        var $89=$88; //@line 1156 "multibytecodec.c"
        var $90=(($89+4)&4294967295); //@line 1156 "multibytecodec.c"
        var $91=HEAP[$90]; //@line 1156 "multibytecodec.c"
        var $92=(($91+24)&4294967295); //@line 1156 "multibytecodec.c"
        var $93=HEAP[$92]; //@line 1156 "multibytecodec.c"
        var $94=HEAP[$self]; //@line 1156 "multibytecodec.c"
        var $95=$94; //@line 1156 "multibytecodec.c"
        FUNCTION_TABLE[$93]($95); //@line 1156 "multibytecodec.c"
        __label__ = 16; break; //@line 1156 "multibytecodec.c"
      case 16: // $bb14
        var $96=HEAP[$codec]; //@line 1157 "multibytecodec.c"
        var $97=($96)!=0; //@line 1157 "multibytecodec.c"
        if ($97) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 1157 "multibytecodec.c"
      case 17: // $bb15
        var $98=HEAP[$codec]; //@line 1157 "multibytecodec.c"
        var $99=(($98)&4294967295); //@line 1157 "multibytecodec.c"
        var $100=HEAP[$99]; //@line 1157 "multibytecodec.c"
        var $101=((($100) - 1)&4294967295); //@line 1157 "multibytecodec.c"
        var $102=HEAP[$codec]; //@line 1157 "multibytecodec.c"
        var $103=(($102)&4294967295); //@line 1157 "multibytecodec.c"
        HEAP[$103]=$101; //@line 1157 "multibytecodec.c"
        var $104=HEAP[$codec]; //@line 1157 "multibytecodec.c"
        var $105=(($104)&4294967295); //@line 1157 "multibytecodec.c"
        var $106=HEAP[$105]; //@line 1157 "multibytecodec.c"
        var $107=((($106))|0)==0; //@line 1157 "multibytecodec.c"
        if ($107) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1157 "multibytecodec.c"
      case 18: // $bb16
        var $108=HEAP[$codec]; //@line 1157 "multibytecodec.c"
        var $109=(($108+4)&4294967295); //@line 1157 "multibytecodec.c"
        var $110=HEAP[$109]; //@line 1157 "multibytecodec.c"
        var $111=(($110+24)&4294967295); //@line 1157 "multibytecodec.c"
        var $112=HEAP[$111]; //@line 1157 "multibytecodec.c"
        var $113=HEAP[$codec]; //@line 1157 "multibytecodec.c"
        FUNCTION_TABLE[$112]($113); //@line 1157 "multibytecodec.c"
        __label__ = 19; break; //@line 1157 "multibytecodec.c"
      case 19: // $bb17
        HEAP[$0]=0; //@line 1158 "multibytecodec.c"
        __label__ = 20; break; //@line 1158 "multibytecodec.c"
      case 20: // $bb18
        var $114=HEAP[$0]; //@line 1129 "multibytecodec.c"
        HEAP[$retval]=$114; //@line 1129 "multibytecodec.c"
        __label__ = 21; break; //@line 1129 "multibytecodec.c"
      case 21: // $return
        var $retval19=HEAP[$retval]; //@line 1129 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1129 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbidecoder_init($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$0]=0; //@line 1164 "multibytecodec.c"
        var $1=HEAP[$0]; //@line 1164 "multibytecodec.c"
        HEAP[$retval]=$1; //@line 1164 "multibytecodec.c"
        __label__ = 1; break; //@line 1164 "multibytecodec.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1164 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1164 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbidecoder_traverse($self, $visit, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $visit_addr=__stackBase__+4;
        var $arg_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $vret=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$visit_addr]=$visit;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$self_addr]; //@line 1171 "multibytecodec.c"
        var $2=(($1+20)&4294967295); //@line 1171 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 1171 "multibytecodec.c"
        var $4=($3)==0; //@line 1171 "multibytecodec.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1171 "multibytecodec.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1171 "multibytecodec.c"
        var $6=(($5+20)&4294967295); //@line 1171 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 1171 "multibytecodec.c"
        var $8=($7) > 3; //@line 1171 "multibytecodec.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1171 "multibytecodec.c"
      case 2: // $bb1
        var $9=HEAP[$self_addr]; //@line 1172 "multibytecodec.c"
        var $10=(($9+20)&4294967295); //@line 1172 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 1172 "multibytecodec.c"
        var $12=($11)!=0; //@line 1172 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1172 "multibytecodec.c"
      case 3: // $bb2
        var $13=HEAP[$self_addr]; //@line 1172 "multibytecodec.c"
        var $14=(($13+20)&4294967295); //@line 1172 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 1172 "multibytecodec.c"
        var $16=HEAP[$visit_addr]; //@line 1172 "multibytecodec.c"
        var $17=HEAP[$arg_addr]; //@line 1172 "multibytecodec.c"
        var $18=FUNCTION_TABLE[$16]($15, $17); //@line 1172 "multibytecodec.c"
        HEAP[$vret]=$18; //@line 1172 "multibytecodec.c"
        var $19=HEAP[$vret]; //@line 1172 "multibytecodec.c"
        var $20=((($19))|0)!=0; //@line 1172 "multibytecodec.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1172 "multibytecodec.c"
      case 4: // $bb3
        var $21=HEAP[$vret]; //@line 1172 "multibytecodec.c"
        HEAP[$0]=$21; //@line 1172 "multibytecodec.c"
        __label__ = 6; break; //@line 1172 "multibytecodec.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1173 "multibytecodec.c"
        __label__ = 6; break; //@line 1173 "multibytecodec.c"
      case 6: // $bb5
        var $22=HEAP[$0]; //@line 1172 "multibytecodec.c"
        HEAP[$retval]=$22; //@line 1172 "multibytecodec.c"
        __label__ = 7; break; //@line 1172 "multibytecodec.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 1172 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 1172 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbidecoder_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 1179 "multibytecodec.c"
        var $1=$0; //@line 1179 "multibytecodec.c"
        _PyObject_GC_UnTrack($1); //@line 1179 "multibytecodec.c"
        var $2=HEAP[$self_addr]; //@line 1180 "multibytecodec.c"
        var $3=(($2+20)&4294967295); //@line 1180 "multibytecodec.c"
        var $4=HEAP[$3]; //@line 1180 "multibytecodec.c"
        var $5=($4)!=0; //@line 1180 "multibytecodec.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 1180 "multibytecodec.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 1180 "multibytecodec.c"
        var $7=(($6+20)&4294967295); //@line 1180 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 1180 "multibytecodec.c"
        var $9=($8)==0; //@line 1180 "multibytecodec.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1180 "multibytecodec.c"
      case 2: // $bb1
        var $10=HEAP[$self_addr]; //@line 1180 "multibytecodec.c"
        var $11=(($10+20)&4294967295); //@line 1180 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1180 "multibytecodec.c"
        var $13=($12) > 3; //@line 1180 "multibytecodec.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1180 "multibytecodec.c"
      case 3: // $bb2
        var $14=HEAP[$self_addr]; //@line 1180 "multibytecodec.c"
        var $15=(($14+20)&4294967295); //@line 1180 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 1180 "multibytecodec.c"
        var $17=(($16)&4294967295); //@line 1180 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 1180 "multibytecodec.c"
        var $19=((($18) - 1)&4294967295); //@line 1180 "multibytecodec.c"
        var $20=(($16)&4294967295); //@line 1180 "multibytecodec.c"
        HEAP[$20]=$19; //@line 1180 "multibytecodec.c"
        var $21=(($16)&4294967295); //@line 1180 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 1180 "multibytecodec.c"
        var $23=((($22))|0)==0; //@line 1180 "multibytecodec.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1180 "multibytecodec.c"
      case 4: // $bb3
        var $24=HEAP[$self_addr]; //@line 1180 "multibytecodec.c"
        var $25=(($24+20)&4294967295); //@line 1180 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1180 "multibytecodec.c"
        var $27=(($26+4)&4294967295); //@line 1180 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 1180 "multibytecodec.c"
        var $29=(($28+24)&4294967295); //@line 1180 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 1180 "multibytecodec.c"
        var $31=HEAP[$self_addr]; //@line 1180 "multibytecodec.c"
        var $32=(($31+20)&4294967295); //@line 1180 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 1180 "multibytecodec.c"
        FUNCTION_TABLE[$30]($33); //@line 1180 "multibytecodec.c"
        __label__ = 5; break; //@line 1180 "multibytecodec.c"
      case 5: // $bb4
        var $34=HEAP[$self_addr]; //@line 1181 "multibytecodec.c"
        var $35=$34; //@line 1181 "multibytecodec.c"
        var $36=(($35+4)&4294967295); //@line 1181 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 1181 "multibytecodec.c"
        var $38=(($37+160)&4294967295); //@line 1181 "multibytecodec.c"
        var $39=HEAP[$38]; //@line 1181 "multibytecodec.c"
        var $40=HEAP[$self_addr]; //@line 1181 "multibytecodec.c"
        var $41=$40; //@line 1181 "multibytecodec.c"
        FUNCTION_TABLE[$39]($41); //@line 1181 "multibytecodec.c"
        __label__ = 6; break; //@line 1182 "multibytecodec.c"
      case 6: // $return
        STACKTOP = __stackBase__;
        return; //@line 1182 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_iread($self, $method, $sizehint) {
    var __stackBase__  = STACKTOP; STACKTOP += 72; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $method_addr=__stackBase__+4;
        var $sizehint_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $buf=__stackBase__+20;
        var $cres=__stackBase__+48;
        var $rsize=__stackBase__+52;
        var $finalsize=__stackBase__+56;
        var $endoffile=__stackBase__+60;
        var $ctr=__stackBase__+64;
        var $ctrdata=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$method_addr]=$method;
        HEAP[$sizehint_addr]=$sizehint;
        HEAP[$finalsize]=0; //@line 1238 "multibytecodec.c"
        var $1=HEAP[$sizehint_addr]; //@line 1240 "multibytecodec.c"
        var $2=((($1))|0)==0; //@line 1240 "multibytecodec.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1240 "multibytecodec.c"
      case 1: // $bb
        var $3=_PyUnicodeUCS2_FromUnicode(0, 0); //@line 1241 "multibytecodec.c"
        HEAP[$0]=$3; //@line 1241 "multibytecodec.c"
        __label__ = 50; break; //@line 1241 "multibytecodec.c"
      case 2: // $bb1
        var $4=(($buf+20)&4294967295); //@line 1243 "multibytecodec.c"
        HEAP[$4]=0; //@line 1243 "multibytecodec.c"
        var $5=(($buf+20)&4294967295); //@line 1243 "multibytecodec.c"
        var $6=HEAP[$5]; //@line 1243 "multibytecodec.c"
        var $7=(($buf+24)&4294967295); //@line 1243 "multibytecodec.c"
        HEAP[$7]=$6; //@line 1243 "multibytecodec.c"
        HEAP[$cres]=0; //@line 1244 "multibytecodec.c"
        __label__ = 3; break; //@line 1244 "multibytecodec.c"
      case 3: // $bb2
        var $8=HEAP[$sizehint_addr]; //@line 1249 "multibytecodec.c"
        var $9=((($8))|0) < 0; //@line 1249 "multibytecodec.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1249 "multibytecodec.c"
      case 4: // $bb3
        var $10=HEAP[$method_addr]; //@line 1250 "multibytecodec.c"
        var $11=HEAP[$self_addr]; //@line 1250 "multibytecodec.c"
        var $12=(($11+36)&4294967295); //@line 1250 "multibytecodec.c"
        var $13=HEAP[$12]; //@line 1250 "multibytecodec.c"
        var $14=__PyObject_CallMethod_SizeT($13, $10, 0); //@line 1250 "multibytecodec.c"
        HEAP[$cres]=$14; //@line 1250 "multibytecodec.c"
        __label__ = 6; break; //@line 1250 "multibytecodec.c"
      case 5: // $bb4
        var $15=HEAP[$method_addr]; //@line 1253 "multibytecodec.c"
        var $16=HEAP[$self_addr]; //@line 1253 "multibytecodec.c"
        var $17=(($16+36)&4294967295); //@line 1253 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 1253 "multibytecodec.c"
        var $19=HEAP[$sizehint_addr]; //@line 1253 "multibytecodec.c"
        var $20=__PyObject_CallMethod_SizeT($18, $15, ((__str35)&4294967295), $19); //@line 1253 "multibytecodec.c"
        HEAP[$cres]=$20; //@line 1253 "multibytecodec.c"
        __label__ = 6; break; //@line 1253 "multibytecodec.c"
      case 6: // $bb5
        var $21=HEAP[$cres]; //@line 1255 "multibytecodec.c"
        var $22=($21)==0; //@line 1255 "multibytecodec.c"
        if ($22) { __label__ = 40; break; } else { __label__ = 7; break; } //@line 1255 "multibytecodec.c"
      case 7: // $bb6
        var $23=HEAP[$cres]; //@line 1258 "multibytecodec.c"
        var $24=(($23+4)&4294967295); //@line 1258 "multibytecodec.c"
        var $25=HEAP[$24]; //@line 1258 "multibytecodec.c"
        var $26=(($25+84)&4294967295); //@line 1258 "multibytecodec.c"
        var $27=HEAP[$26]; //@line 1258 "multibytecodec.c"
        var $28=($27) & 134217728; //@line 1258 "multibytecodec.c"
        var $29=((($28))|0)==0; //@line 1258 "multibytecodec.c"
        if ($29) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1258 "multibytecodec.c"
      case 8: // $bb7
        var $30=HEAP[_PyExc_TypeError]; //@line 1259 "multibytecodec.c"
        _PyErr_SetString($30, ((__str36)&4294967295)); //@line 1259 "multibytecodec.c"
        __label__ = 40; break; //@line 1259 "multibytecodec.c"
      case 9: // $bb8
        var $31=HEAP[$cres]; //@line 1265 "multibytecodec.c"
        var $32=$31; //@line 1265 "multibytecodec.c"
        var $33=(($32+8)&4294967295); //@line 1265 "multibytecodec.c"
        var $34=HEAP[$33]; //@line 1265 "multibytecodec.c"
        var $35=((($34))|0)==0; //@line 1265 "multibytecodec.c"
        var $36=unSign(($35), 1, 0); //@line 1265 "multibytecodec.c"
        HEAP[$endoffile]=$36; //@line 1265 "multibytecodec.c"
        var $37=HEAP[$self_addr]; //@line 1267 "multibytecodec.c"
        var $38=(($37+32)&4294967295); //@line 1267 "multibytecodec.c"
        var $39=HEAP[$38]; //@line 1267 "multibytecodec.c"
        var $40=((($39))|0) > 0; //@line 1267 "multibytecodec.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 16; break; } //@line 1267 "multibytecodec.c"
      case 10: // $bb9
        var $41=HEAP[$cres]; //@line 1271 "multibytecodec.c"
        var $42=$41; //@line 1271 "multibytecodec.c"
        var $43=(($42+8)&4294967295); //@line 1271 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 1271 "multibytecodec.c"
        var $45=HEAP[$self_addr]; //@line 1271 "multibytecodec.c"
        var $46=(($45+32)&4294967295); //@line 1271 "multibytecodec.c"
        var $47=HEAP[$46]; //@line 1271 "multibytecodec.c"
        var $48=((2147483647 - ($47))&4294967295); //@line 1271 "multibytecodec.c"
        var $49=((($44))|0) > ((($48))|0); //@line 1271 "multibytecodec.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1271 "multibytecodec.c"
      case 11: // $bb10
        var $50=_PyErr_NoMemory(); //@line 1272 "multibytecodec.c"
        __label__ = 40; break; //@line 1272 "multibytecodec.c"
      case 12: // $bb11
        var $51=HEAP[$cres]; //@line 1275 "multibytecodec.c"
        var $52=$51; //@line 1275 "multibytecodec.c"
        var $53=(($52+8)&4294967295); //@line 1275 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 1275 "multibytecodec.c"
        var $55=HEAP[$self_addr]; //@line 1275 "multibytecodec.c"
        var $56=(($55+32)&4294967295); //@line 1275 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 1275 "multibytecodec.c"
        var $58=((($54) + ($57))&4294967295); //@line 1275 "multibytecodec.c"
        HEAP[$rsize]=$58; //@line 1275 "multibytecodec.c"
        var $59=HEAP[$rsize]; //@line 1276 "multibytecodec.c"
        var $60=_PyString_FromStringAndSize(0, $59); //@line 1276 "multibytecodec.c"
        HEAP[$ctr]=$60; //@line 1276 "multibytecodec.c"
        var $61=HEAP[$ctr]; //@line 1277 "multibytecodec.c"
        var $62=($61)==0; //@line 1277 "multibytecodec.c"
        if ($62) { __label__ = 40; break; } else { __label__ = 13; break; } //@line 1277 "multibytecodec.c"
      case 13: // $bb12
        var $63=HEAP[$ctr]; //@line 1279 "multibytecodec.c"
        var $64=$63; //@line 1279 "multibytecodec.c"
        var $65=(($64+20)&4294967295); //@line 1279 "multibytecodec.c"
        var $66=(($65)&4294967295); //@line 1279 "multibytecodec.c"
        HEAP[$ctrdata]=$66; //@line 1279 "multibytecodec.c"
        var $67=HEAP[$self_addr]; //@line 1280 "multibytecodec.c"
        var $68=(($67+32)&4294967295); //@line 1280 "multibytecodec.c"
        var $69=HEAP[$68]; //@line 1280 "multibytecodec.c"
        var $70=HEAP[$self_addr]; //@line 1280 "multibytecodec.c"
        var $71=(($70+24)&4294967295); //@line 1280 "multibytecodec.c"
        var $72=(($71)&4294967295); //@line 1280 "multibytecodec.c"
        var $73=HEAP[$ctrdata]; //@line 1280 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($73, $72, $69, 1, 0); //@line 1280 "multibytecodec.c"
        var $74=HEAP[$cres]; //@line 1281 "multibytecodec.c"
        var $75=$74; //@line 1281 "multibytecodec.c"
        var $76=(($75+8)&4294967295); //@line 1281 "multibytecodec.c"
        var $77=HEAP[$76]; //@line 1281 "multibytecodec.c"
        var $78=HEAP[$cres]; //@line 1281 "multibytecodec.c"
        var $79=$78; //@line 1281 "multibytecodec.c"
        var $80=(($79+20)&4294967295); //@line 1281 "multibytecodec.c"
        var $81=(($80)&4294967295); //@line 1281 "multibytecodec.c"
        var $82=HEAP[$self_addr]; //@line 1281 "multibytecodec.c"
        var $83=(($82+32)&4294967295); //@line 1281 "multibytecodec.c"
        var $84=HEAP[$83]; //@line 1281 "multibytecodec.c"
        var $85=HEAP[$ctrdata]; //@line 1281 "multibytecodec.c"
        var $86=(($85+$84)&4294967295); //@line 1281 "multibytecodec.c"
        _llvm_memcpy_p0i8_p0i8_i32($86, $81, $77, 1, 0); //@line 1281 "multibytecodec.c"
        var $87=HEAP[$cres]; //@line 1284 "multibytecodec.c"
        var $88=(($87)&4294967295); //@line 1284 "multibytecodec.c"
        var $89=HEAP[$88]; //@line 1284 "multibytecodec.c"
        var $90=((($89) - 1)&4294967295); //@line 1284 "multibytecodec.c"
        var $91=HEAP[$cres]; //@line 1284 "multibytecodec.c"
        var $92=(($91)&4294967295); //@line 1284 "multibytecodec.c"
        HEAP[$92]=$90; //@line 1284 "multibytecodec.c"
        var $93=HEAP[$cres]; //@line 1284 "multibytecodec.c"
        var $94=(($93)&4294967295); //@line 1284 "multibytecodec.c"
        var $95=HEAP[$94]; //@line 1284 "multibytecodec.c"
        var $96=((($95))|0)==0; //@line 1284 "multibytecodec.c"
        if ($96) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1284 "multibytecodec.c"
      case 14: // $bb13
        var $97=HEAP[$cres]; //@line 1284 "multibytecodec.c"
        var $98=(($97+4)&4294967295); //@line 1284 "multibytecodec.c"
        var $99=HEAP[$98]; //@line 1284 "multibytecodec.c"
        var $100=(($99+24)&4294967295); //@line 1284 "multibytecodec.c"
        var $101=HEAP[$100]; //@line 1284 "multibytecodec.c"
        var $102=HEAP[$cres]; //@line 1284 "multibytecodec.c"
        FUNCTION_TABLE[$101]($102); //@line 1284 "multibytecodec.c"
        __label__ = 15; break; //@line 1284 "multibytecodec.c"
      case 15: // $bb14
        var $103=HEAP[$ctr]; //@line 1285 "multibytecodec.c"
        HEAP[$cres]=$103; //@line 1285 "multibytecodec.c"
        var $104=HEAP[$self_addr]; //@line 1286 "multibytecodec.c"
        var $105=(($104+32)&4294967295); //@line 1286 "multibytecodec.c"
        HEAP[$105]=0; //@line 1286 "multibytecodec.c"
        __label__ = 16; break; //@line 1286 "multibytecodec.c"
      case 16: // $bb15
        var $106=HEAP[$cres]; //@line 1289 "multibytecodec.c"
        var $107=$106; //@line 1289 "multibytecodec.c"
        var $108=(($107+8)&4294967295); //@line 1289 "multibytecodec.c"
        var $109=HEAP[$108]; //@line 1289 "multibytecodec.c"
        HEAP[$rsize]=$109; //@line 1289 "multibytecodec.c"
        var $110=HEAP[$cres]; //@line 1290 "multibytecodec.c"
        var $111=$110; //@line 1290 "multibytecodec.c"
        var $112=(($111+20)&4294967295); //@line 1290 "multibytecodec.c"
        var $113=(($112)&4294967295); //@line 1290 "multibytecodec.c"
        var $114=HEAP[$rsize]; //@line 1290 "multibytecodec.c"
        var $115=_decoder_prepare_buffer($buf, $113, $114); //@line 1290 "multibytecodec.c"
        var $116=((($115))|0)!=0; //@line 1290 "multibytecodec.c"
        if ($116) { __label__ = 40; break; } else { __label__ = 17; break; } //@line 1290 "multibytecodec.c"
      case 17: // $bb16
        var $117=HEAP[$rsize]; //@line 1294 "multibytecodec.c"
        var $118=((($117))|0) > 0; //@line 1294 "multibytecodec.c"
        if ($118) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1294 "multibytecodec.c"
      case 18: // $bb17
        var $119=HEAP[$self_addr]; //@line 1294 "multibytecodec.c"
        var $120=$119; //@line 1294 "multibytecodec.c"
        var $121=_decoder_feed_buffer($120, $buf); //@line 1294 "multibytecodec.c"
        var $122=((($121))|0)!=0; //@line 1294 "multibytecodec.c"
        if ($122) { __label__ = 40; break; } else { __label__ = 19; break; } //@line 1294 "multibytecodec.c"
      case 19: // $bb18
        var $123=HEAP[$endoffile]; //@line 1298 "multibytecodec.c"
        var $124=((($123))|0)!=0; //@line 1298 "multibytecodec.c"
        if ($124) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 1298 "multibytecodec.c"
      case 20: // $bb19
        var $125=HEAP[$sizehint_addr]; //@line 1298 "multibytecodec.c"
        var $126=((($125))|0) < 0; //@line 1298 "multibytecodec.c"
        if ($126) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 1298 "multibytecodec.c"
      case 21: // $bb20
        var $127=(($buf)&4294967295); //@line 1299 "multibytecodec.c"
        var $128=HEAP[$127]; //@line 1299 "multibytecodec.c"
        var $129=(($buf+8)&4294967295); //@line 1299 "multibytecodec.c"
        var $130=HEAP[$129]; //@line 1299 "multibytecodec.c"
        var $131=($128) < ($130); //@line 1299 "multibytecodec.c"
        if ($131) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1299 "multibytecodec.c"
      case 22: // $bb21
        var $132=HEAP[$self_addr]; //@line 1299 "multibytecodec.c"
        var $133=(($132+20)&4294967295); //@line 1299 "multibytecodec.c"
        var $134=HEAP[$133]; //@line 1299 "multibytecodec.c"
        var $135=HEAP[$self_addr]; //@line 1299 "multibytecodec.c"
        var $136=(($135+12)&4294967295); //@line 1299 "multibytecodec.c"
        var $137=HEAP[$self_addr]; //@line 1299 "multibytecodec.c"
        var $138=(($137+8)&4294967295); //@line 1299 "multibytecodec.c"
        var $139=HEAP[$138]; //@line 1299 "multibytecodec.c"
        var $140=_multibytecodec_decerror($139, $136, $buf, $134, -2); //@line 1299 "multibytecodec.c"
        var $141=((($140))|0)!=0; //@line 1299 "multibytecodec.c"
        if ($141) { __label__ = 40; break; } else { __label__ = 23; break; } //@line 1299 "multibytecodec.c"
      case 23: // $bb22
        var $142=(($buf)&4294967295); //@line 1305 "multibytecodec.c"
        var $143=HEAP[$142]; //@line 1305 "multibytecodec.c"
        var $144=(($buf+8)&4294967295); //@line 1305 "multibytecodec.c"
        var $145=HEAP[$144]; //@line 1305 "multibytecodec.c"
        var $146=($143) < ($145); //@line 1305 "multibytecodec.c"
        if ($146) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1305 "multibytecodec.c"
      case 24: // $bb23
        var $147=HEAP[$self_addr]; //@line 1306 "multibytecodec.c"
        var $148=$147; //@line 1306 "multibytecodec.c"
        var $149=_decoder_append_pending($148, $buf); //@line 1306 "multibytecodec.c"
        var $150=((($149))|0)!=0; //@line 1306 "multibytecodec.c"
        if ($150) { __label__ = 40; break; } else { __label__ = 25; break; } //@line 1306 "multibytecodec.c"
      case 25: // $bb24
        var $151=(($buf+12)&4294967295); //@line 1311 "multibytecodec.c"
        var $152=HEAP[$151]; //@line 1311 "multibytecodec.c"
        var $153=($152); //@line 1311 "multibytecodec.c"
        var $154=(($buf+24)&4294967295); //@line 1311 "multibytecodec.c"
        var $155=HEAP[$154]; //@line 1311 "multibytecodec.c"
        var $156=$155; //@line 1311 "multibytecodec.c"
        var $157=(($156+12)&4294967295); //@line 1311 "multibytecodec.c"
        var $158=HEAP[$157]; //@line 1311 "multibytecodec.c"
        var $159=($158); //@line 1311 "multibytecodec.c"
        var $160=((($153) - ($159))&4294967295); //@line 1311 "multibytecodec.c"
        var $161=((((($160))|0)/2)|0); //@line 1311 "multibytecodec.c"
        HEAP[$finalsize]=$161; //@line 1311 "multibytecodec.c"
        var $162=HEAP[$cres]; //@line 1313 "multibytecodec.c"
        var $163=(($162)&4294967295); //@line 1313 "multibytecodec.c"
        var $164=HEAP[$163]; //@line 1313 "multibytecodec.c"
        var $165=((($164) - 1)&4294967295); //@line 1313 "multibytecodec.c"
        var $166=HEAP[$cres]; //@line 1313 "multibytecodec.c"
        var $167=(($166)&4294967295); //@line 1313 "multibytecodec.c"
        HEAP[$167]=$165; //@line 1313 "multibytecodec.c"
        var $168=HEAP[$cres]; //@line 1313 "multibytecodec.c"
        var $169=(($168)&4294967295); //@line 1313 "multibytecodec.c"
        var $170=HEAP[$169]; //@line 1313 "multibytecodec.c"
        var $171=((($170))|0)==0; //@line 1313 "multibytecodec.c"
        if ($171) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1313 "multibytecodec.c"
      case 26: // $bb25
        var $172=HEAP[$cres]; //@line 1313 "multibytecodec.c"
        var $173=(($172+4)&4294967295); //@line 1313 "multibytecodec.c"
        var $174=HEAP[$173]; //@line 1313 "multibytecodec.c"
        var $175=(($174+24)&4294967295); //@line 1313 "multibytecodec.c"
        var $176=HEAP[$175]; //@line 1313 "multibytecodec.c"
        var $177=HEAP[$cres]; //@line 1313 "multibytecodec.c"
        FUNCTION_TABLE[$176]($177); //@line 1313 "multibytecodec.c"
        __label__ = 27; break; //@line 1313 "multibytecodec.c"
      case 27: // $bb26
        HEAP[$cres]=0; //@line 1314 "multibytecodec.c"
        var $178=HEAP[$sizehint_addr]; //@line 1316 "multibytecodec.c"
        var $179=((($178))|0) < 0; //@line 1316 "multibytecodec.c"
        if ($179) { __label__ = 31; break; } else { __label__ = 28; break; } //@line 1316 "multibytecodec.c"
      case 28: // $bb27
        var $180=HEAP[$finalsize]; //@line 1316 "multibytecodec.c"
        var $181=((($180))|0)!=0; //@line 1316 "multibytecodec.c"
        if ($181) { __label__ = 31; break; } else { __label__ = 29; break; } //@line 1316 "multibytecodec.c"
      case 29: // $bb28
        var $182=HEAP[$rsize]; //@line 1316 "multibytecodec.c"
        var $183=((($182))|0)==0; //@line 1316 "multibytecodec.c"
        if ($183) { __label__ = 31; break; } else { __label__ = 30; break; } //@line 1316 "multibytecodec.c"
      case 30: // $bb29
        HEAP[$sizehint_addr]=1; //@line 1319 "multibytecodec.c"
        __label__ = 3; break; //@line 1319 "multibytecodec.c"
      case 31: // $bb30
        var $184=(($buf+24)&4294967295); //@line 1322 "multibytecodec.c"
        var $185=HEAP[$184]; //@line 1322 "multibytecodec.c"
        var $186=$185; //@line 1322 "multibytecodec.c"
        var $187=(($186+8)&4294967295); //@line 1322 "multibytecodec.c"
        var $188=HEAP[$187]; //@line 1322 "multibytecodec.c"
        var $189=HEAP[$finalsize]; //@line 1322 "multibytecodec.c"
        var $190=((($188))|0)!=((($189))|0); //@line 1322 "multibytecodec.c"
        if ($190) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1322 "multibytecodec.c"
      case 32: // $bb31
        var $191=(($buf+24)&4294967295); //@line 1323 "multibytecodec.c"
        var $192=HEAP[$finalsize]; //@line 1323 "multibytecodec.c"
        var $193=_PyUnicodeUCS2_Resize($191, $192); //@line 1323 "multibytecodec.c"
        var $194=((($193))|0)==-1; //@line 1323 "multibytecodec.c"
        if ($194) { __label__ = 40; break; } else { __label__ = 33; break; } //@line 1323 "multibytecodec.c"
      case 33: // $bb32
        var $195=HEAP[$cres]; //@line 1326 "multibytecodec.c"
        var $196=($195)!=0; //@line 1326 "multibytecodec.c"
        if ($196) { __label__ = 34; break; } else { __label__ = 36; break; } //@line 1326 "multibytecodec.c"
      case 34: // $bb33
        var $197=HEAP[$cres]; //@line 1326 "multibytecodec.c"
        var $198=(($197)&4294967295); //@line 1326 "multibytecodec.c"
        var $199=HEAP[$198]; //@line 1326 "multibytecodec.c"
        var $200=((($199) - 1)&4294967295); //@line 1326 "multibytecodec.c"
        var $201=HEAP[$cres]; //@line 1326 "multibytecodec.c"
        var $202=(($201)&4294967295); //@line 1326 "multibytecodec.c"
        HEAP[$202]=$200; //@line 1326 "multibytecodec.c"
        var $203=HEAP[$cres]; //@line 1326 "multibytecodec.c"
        var $204=(($203)&4294967295); //@line 1326 "multibytecodec.c"
        var $205=HEAP[$204]; //@line 1326 "multibytecodec.c"
        var $206=((($205))|0)==0; //@line 1326 "multibytecodec.c"
        if ($206) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1326 "multibytecodec.c"
      case 35: // $bb34
        var $207=HEAP[$cres]; //@line 1326 "multibytecodec.c"
        var $208=(($207+4)&4294967295); //@line 1326 "multibytecodec.c"
        var $209=HEAP[$208]; //@line 1326 "multibytecodec.c"
        var $210=(($209+24)&4294967295); //@line 1326 "multibytecodec.c"
        var $211=HEAP[$210]; //@line 1326 "multibytecodec.c"
        var $212=HEAP[$cres]; //@line 1326 "multibytecodec.c"
        FUNCTION_TABLE[$211]($212); //@line 1326 "multibytecodec.c"
        __label__ = 36; break; //@line 1326 "multibytecodec.c"
      case 36: // $bb35
        var $213=(($buf+20)&4294967295); //@line 1327 "multibytecodec.c"
        var $214=HEAP[$213]; //@line 1327 "multibytecodec.c"
        var $215=($214)!=0; //@line 1327 "multibytecodec.c"
        if ($215) { __label__ = 37; break; } else { __label__ = 39; break; } //@line 1327 "multibytecodec.c"
      case 37: // $bb36
        var $216=(($buf+20)&4294967295); //@line 1327 "multibytecodec.c"
        var $217=HEAP[$216]; //@line 1327 "multibytecodec.c"
        var $218=(($217)&4294967295); //@line 1327 "multibytecodec.c"
        var $219=HEAP[$218]; //@line 1327 "multibytecodec.c"
        var $220=((($219) - 1)&4294967295); //@line 1327 "multibytecodec.c"
        var $221=(($217)&4294967295); //@line 1327 "multibytecodec.c"
        HEAP[$221]=$220; //@line 1327 "multibytecodec.c"
        var $222=(($217)&4294967295); //@line 1327 "multibytecodec.c"
        var $223=HEAP[$222]; //@line 1327 "multibytecodec.c"
        var $224=((($223))|0)==0; //@line 1327 "multibytecodec.c"
        if ($224) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1327 "multibytecodec.c"
      case 38: // $bb37
        var $225=(($buf+20)&4294967295); //@line 1327 "multibytecodec.c"
        var $226=HEAP[$225]; //@line 1327 "multibytecodec.c"
        var $227=(($226+4)&4294967295); //@line 1327 "multibytecodec.c"
        var $228=HEAP[$227]; //@line 1327 "multibytecodec.c"
        var $229=(($228+24)&4294967295); //@line 1327 "multibytecodec.c"
        var $230=HEAP[$229]; //@line 1327 "multibytecodec.c"
        var $231=(($buf+20)&4294967295); //@line 1327 "multibytecodec.c"
        var $232=HEAP[$231]; //@line 1327 "multibytecodec.c"
        FUNCTION_TABLE[$230]($232); //@line 1327 "multibytecodec.c"
        __label__ = 39; break; //@line 1327 "multibytecodec.c"
      case 39: // $bb38
        var $233=(($buf+24)&4294967295); //@line 1328 "multibytecodec.c"
        var $234=HEAP[$233]; //@line 1328 "multibytecodec.c"
        HEAP[$0]=$234; //@line 1328 "multibytecodec.c"
        __label__ = 50; break; //@line 1328 "multibytecodec.c"
      case 40: // $errorexit
        var $235=HEAP[$cres]; //@line 1331 "multibytecodec.c"
        var $236=($235)!=0; //@line 1331 "multibytecodec.c"
        if ($236) { __label__ = 41; break; } else { __label__ = 43; break; } //@line 1331 "multibytecodec.c"
      case 41: // $bb39
        var $237=HEAP[$cres]; //@line 1331 "multibytecodec.c"
        var $238=(($237)&4294967295); //@line 1331 "multibytecodec.c"
        var $239=HEAP[$238]; //@line 1331 "multibytecodec.c"
        var $240=((($239) - 1)&4294967295); //@line 1331 "multibytecodec.c"
        var $241=HEAP[$cres]; //@line 1331 "multibytecodec.c"
        var $242=(($241)&4294967295); //@line 1331 "multibytecodec.c"
        HEAP[$242]=$240; //@line 1331 "multibytecodec.c"
        var $243=HEAP[$cres]; //@line 1331 "multibytecodec.c"
        var $244=(($243)&4294967295); //@line 1331 "multibytecodec.c"
        var $245=HEAP[$244]; //@line 1331 "multibytecodec.c"
        var $246=((($245))|0)==0; //@line 1331 "multibytecodec.c"
        if ($246) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1331 "multibytecodec.c"
      case 42: // $bb40
        var $247=HEAP[$cres]; //@line 1331 "multibytecodec.c"
        var $248=(($247+4)&4294967295); //@line 1331 "multibytecodec.c"
        var $249=HEAP[$248]; //@line 1331 "multibytecodec.c"
        var $250=(($249+24)&4294967295); //@line 1331 "multibytecodec.c"
        var $251=HEAP[$250]; //@line 1331 "multibytecodec.c"
        var $252=HEAP[$cres]; //@line 1331 "multibytecodec.c"
        FUNCTION_TABLE[$251]($252); //@line 1331 "multibytecodec.c"
        __label__ = 43; break; //@line 1331 "multibytecodec.c"
      case 43: // $bb41
        var $253=(($buf+20)&4294967295); //@line 1332 "multibytecodec.c"
        var $254=HEAP[$253]; //@line 1332 "multibytecodec.c"
        var $255=($254)!=0; //@line 1332 "multibytecodec.c"
        if ($255) { __label__ = 44; break; } else { __label__ = 46; break; } //@line 1332 "multibytecodec.c"
      case 44: // $bb42
        var $256=(($buf+20)&4294967295); //@line 1332 "multibytecodec.c"
        var $257=HEAP[$256]; //@line 1332 "multibytecodec.c"
        var $258=(($257)&4294967295); //@line 1332 "multibytecodec.c"
        var $259=HEAP[$258]; //@line 1332 "multibytecodec.c"
        var $260=((($259) - 1)&4294967295); //@line 1332 "multibytecodec.c"
        var $261=(($257)&4294967295); //@line 1332 "multibytecodec.c"
        HEAP[$261]=$260; //@line 1332 "multibytecodec.c"
        var $262=(($257)&4294967295); //@line 1332 "multibytecodec.c"
        var $263=HEAP[$262]; //@line 1332 "multibytecodec.c"
        var $264=((($263))|0)==0; //@line 1332 "multibytecodec.c"
        if ($264) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 1332 "multibytecodec.c"
      case 45: // $bb43
        var $265=(($buf+20)&4294967295); //@line 1332 "multibytecodec.c"
        var $266=HEAP[$265]; //@line 1332 "multibytecodec.c"
        var $267=(($266+4)&4294967295); //@line 1332 "multibytecodec.c"
        var $268=HEAP[$267]; //@line 1332 "multibytecodec.c"
        var $269=(($268+24)&4294967295); //@line 1332 "multibytecodec.c"
        var $270=HEAP[$269]; //@line 1332 "multibytecodec.c"
        var $271=(($buf+20)&4294967295); //@line 1332 "multibytecodec.c"
        var $272=HEAP[$271]; //@line 1332 "multibytecodec.c"
        FUNCTION_TABLE[$270]($272); //@line 1332 "multibytecodec.c"
        __label__ = 46; break; //@line 1332 "multibytecodec.c"
      case 46: // $bb44
        var $273=(($buf+24)&4294967295); //@line 1333 "multibytecodec.c"
        var $274=HEAP[$273]; //@line 1333 "multibytecodec.c"
        var $275=($274)!=0; //@line 1333 "multibytecodec.c"
        if ($275) { __label__ = 47; break; } else { __label__ = 49; break; } //@line 1333 "multibytecodec.c"
      case 47: // $bb45
        var $276=(($buf+24)&4294967295); //@line 1333 "multibytecodec.c"
        var $277=HEAP[$276]; //@line 1333 "multibytecodec.c"
        var $278=(($277)&4294967295); //@line 1333 "multibytecodec.c"
        var $279=HEAP[$278]; //@line 1333 "multibytecodec.c"
        var $280=((($279) - 1)&4294967295); //@line 1333 "multibytecodec.c"
        var $281=(($277)&4294967295); //@line 1333 "multibytecodec.c"
        HEAP[$281]=$280; //@line 1333 "multibytecodec.c"
        var $282=(($277)&4294967295); //@line 1333 "multibytecodec.c"
        var $283=HEAP[$282]; //@line 1333 "multibytecodec.c"
        var $284=((($283))|0)==0; //@line 1333 "multibytecodec.c"
        if ($284) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 1333 "multibytecodec.c"
      case 48: // $bb46
        var $285=(($buf+24)&4294967295); //@line 1333 "multibytecodec.c"
        var $286=HEAP[$285]; //@line 1333 "multibytecodec.c"
        var $287=(($286+4)&4294967295); //@line 1333 "multibytecodec.c"
        var $288=HEAP[$287]; //@line 1333 "multibytecodec.c"
        var $289=(($288+24)&4294967295); //@line 1333 "multibytecodec.c"
        var $290=HEAP[$289]; //@line 1333 "multibytecodec.c"
        var $291=(($buf+24)&4294967295); //@line 1333 "multibytecodec.c"
        var $292=HEAP[$291]; //@line 1333 "multibytecodec.c"
        FUNCTION_TABLE[$290]($292); //@line 1333 "multibytecodec.c"
        __label__ = 49; break; //@line 1333 "multibytecodec.c"
      case 49: // $bb47
        HEAP[$0]=0; //@line 1334 "multibytecodec.c"
        __label__ = 50; break; //@line 1334 "multibytecodec.c"
      case 50: // $bb48
        var $293=HEAP[$0]; //@line 1241 "multibytecodec.c"
        HEAP[$retval]=$293; //@line 1241 "multibytecodec.c"
        __label__ = 51; break; //@line 1241 "multibytecodec.c"
      case 51: // $return
        var $retval49=HEAP[$retval]; //@line 1241 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval49; //@line 1241 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_read($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $sizeobj=__stackBase__+16;
        var $size=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$sizeobj]=0; //@line 1340 "multibytecodec.c"
        var $1=HEAP[$args_addr]; //@line 1343 "multibytecodec.c"
        var $2=_PyArg_UnpackTuple($1, ((__str37)&4294967295), 0, 1, $sizeobj); //@line 1343 "multibytecodec.c"
        var $3=((($2))|0)==0; //@line 1343 "multibytecodec.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1343 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1344 "multibytecodec.c"
        __label__ = 9; break; //@line 1344 "multibytecodec.c"
      case 2: // $bb1
        var $4=HEAP[$sizeobj]; //@line 1346 "multibytecodec.c"
        var $5=($4)==(__Py_NoneStruct); //@line 1346 "multibytecodec.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1346 "multibytecodec.c"
      case 3: // $bb2
        var $6=HEAP[$sizeobj]; //@line 1346 "multibytecodec.c"
        var $7=($6)==0; //@line 1346 "multibytecodec.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1346 "multibytecodec.c"
      case 4: // $bb3
        HEAP[$size]=-1; //@line 1347 "multibytecodec.c"
        __label__ = 8; break; //@line 1347 "multibytecodec.c"
      case 5: // $bb4
        var $8=HEAP[$sizeobj]; //@line 1348 "multibytecodec.c"
        var $9=(($8+4)&4294967295); //@line 1348 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 1348 "multibytecodec.c"
        var $11=(($10+84)&4294967295); //@line 1348 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1348 "multibytecodec.c"
        var $13=($12) & 8388608; //@line 1348 "multibytecodec.c"
        var $14=((($13))|0)!=0; //@line 1348 "multibytecodec.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1348 "multibytecodec.c"
      case 6: // $bb5
        var $15=HEAP[$sizeobj]; //@line 1349 "multibytecodec.c"
        var $16=_PyInt_AsSsize_t($15); //@line 1349 "multibytecodec.c"
        HEAP[$size]=$16; //@line 1349 "multibytecodec.c"
        __label__ = 8; break; //@line 1349 "multibytecodec.c"
      case 7: // $bb6
        var $17=HEAP[_PyExc_TypeError]; //@line 1351 "multibytecodec.c"
        _PyErr_SetString($17, ((__str38)&4294967295)); //@line 1351 "multibytecodec.c"
        HEAP[$0]=0; //@line 1352 "multibytecodec.c"
        __label__ = 9; break; //@line 1352 "multibytecodec.c"
      case 8: // $bb7
        var $18=HEAP[$self_addr]; //@line 1355 "multibytecodec.c"
        var $19=HEAP[$size]; //@line 1355 "multibytecodec.c"
        var $20=_mbstreamreader_iread($18, ((__str37)&4294967295), $19); //@line 1355 "multibytecodec.c"
        HEAP[$0]=$20; //@line 1355 "multibytecodec.c"
        __label__ = 9; break; //@line 1355 "multibytecodec.c"
      case 9: // $bb8
        var $21=HEAP[$0]; //@line 1344 "multibytecodec.c"
        HEAP[$retval]=$21; //@line 1344 "multibytecodec.c"
        __label__ = 10; break; //@line 1344 "multibytecodec.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1344 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1344 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_readline($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $sizeobj=__stackBase__+16;
        var $size=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$sizeobj]=0; //@line 1361 "multibytecodec.c"
        var $1=HEAP[$args_addr]; //@line 1364 "multibytecodec.c"
        var $2=_PyArg_UnpackTuple($1, ((__str39)&4294967295), 0, 1, $sizeobj); //@line 1364 "multibytecodec.c"
        var $3=((($2))|0)==0; //@line 1364 "multibytecodec.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1364 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1365 "multibytecodec.c"
        __label__ = 9; break; //@line 1365 "multibytecodec.c"
      case 2: // $bb1
        var $4=HEAP[$sizeobj]; //@line 1367 "multibytecodec.c"
        var $5=($4)==(__Py_NoneStruct); //@line 1367 "multibytecodec.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1367 "multibytecodec.c"
      case 3: // $bb2
        var $6=HEAP[$sizeobj]; //@line 1367 "multibytecodec.c"
        var $7=($6)==0; //@line 1367 "multibytecodec.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1367 "multibytecodec.c"
      case 4: // $bb3
        HEAP[$size]=-1; //@line 1368 "multibytecodec.c"
        __label__ = 8; break; //@line 1368 "multibytecodec.c"
      case 5: // $bb4
        var $8=HEAP[$sizeobj]; //@line 1369 "multibytecodec.c"
        var $9=(($8+4)&4294967295); //@line 1369 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 1369 "multibytecodec.c"
        var $11=(($10+84)&4294967295); //@line 1369 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1369 "multibytecodec.c"
        var $13=($12) & 8388608; //@line 1369 "multibytecodec.c"
        var $14=((($13))|0)!=0; //@line 1369 "multibytecodec.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1369 "multibytecodec.c"
      case 6: // $bb5
        var $15=HEAP[$sizeobj]; //@line 1370 "multibytecodec.c"
        var $16=_PyInt_AsSsize_t($15); //@line 1370 "multibytecodec.c"
        HEAP[$size]=$16; //@line 1370 "multibytecodec.c"
        __label__ = 8; break; //@line 1370 "multibytecodec.c"
      case 7: // $bb6
        var $17=HEAP[_PyExc_TypeError]; //@line 1372 "multibytecodec.c"
        _PyErr_SetString($17, ((__str38)&4294967295)); //@line 1372 "multibytecodec.c"
        HEAP[$0]=0; //@line 1373 "multibytecodec.c"
        __label__ = 9; break; //@line 1373 "multibytecodec.c"
      case 8: // $bb7
        var $18=HEAP[$self_addr]; //@line 1376 "multibytecodec.c"
        var $19=HEAP[$size]; //@line 1376 "multibytecodec.c"
        var $20=_mbstreamreader_iread($18, ((__str39)&4294967295), $19); //@line 1376 "multibytecodec.c"
        HEAP[$0]=$20; //@line 1376 "multibytecodec.c"
        __label__ = 9; break; //@line 1376 "multibytecodec.c"
      case 9: // $bb8
        var $21=HEAP[$0]; //@line 1365 "multibytecodec.c"
        HEAP[$retval]=$21; //@line 1365 "multibytecodec.c"
        __label__ = 10; break; //@line 1365 "multibytecodec.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1365 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1365 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_readlines($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $sizehintobj=__stackBase__+16;
        var $r=__stackBase__+20;
        var $sr=__stackBase__+24;
        var $sizehint=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$sizehintobj]=0; //@line 1382 "multibytecodec.c"
        var $1=HEAP[$args_addr]; //@line 1385 "multibytecodec.c"
        var $2=_PyArg_UnpackTuple($1, ((__str40)&4294967295), 0, 1, $sizehintobj); //@line 1385 "multibytecodec.c"
        var $3=((($2))|0)==0; //@line 1385 "multibytecodec.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1385 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1386 "multibytecodec.c"
        __label__ = 13; break; //@line 1386 "multibytecodec.c"
      case 2: // $bb1
        var $4=HEAP[$sizehintobj]; //@line 1388 "multibytecodec.c"
        var $5=($4)==(__Py_NoneStruct); //@line 1388 "multibytecodec.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1388 "multibytecodec.c"
      case 3: // $bb2
        var $6=HEAP[$sizehintobj]; //@line 1388 "multibytecodec.c"
        var $7=($6)==0; //@line 1388 "multibytecodec.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1388 "multibytecodec.c"
      case 4: // $bb3
        HEAP[$sizehint]=-1; //@line 1389 "multibytecodec.c"
        __label__ = 8; break; //@line 1389 "multibytecodec.c"
      case 5: // $bb4
        var $8=HEAP[$sizehintobj]; //@line 1390 "multibytecodec.c"
        var $9=(($8+4)&4294967295); //@line 1390 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 1390 "multibytecodec.c"
        var $11=(($10+84)&4294967295); //@line 1390 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1390 "multibytecodec.c"
        var $13=($12) & 8388608; //@line 1390 "multibytecodec.c"
        var $14=((($13))|0)!=0; //@line 1390 "multibytecodec.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1390 "multibytecodec.c"
      case 6: // $bb5
        var $15=HEAP[$sizehintobj]; //@line 1391 "multibytecodec.c"
        var $16=_PyInt_AsSsize_t($15); //@line 1391 "multibytecodec.c"
        HEAP[$sizehint]=$16; //@line 1391 "multibytecodec.c"
        __label__ = 8; break; //@line 1391 "multibytecodec.c"
      case 7: // $bb6
        var $17=HEAP[_PyExc_TypeError]; //@line 1393 "multibytecodec.c"
        _PyErr_SetString($17, ((__str38)&4294967295)); //@line 1393 "multibytecodec.c"
        HEAP[$0]=0; //@line 1394 "multibytecodec.c"
        __label__ = 13; break; //@line 1394 "multibytecodec.c"
      case 8: // $bb7
        var $18=HEAP[$self_addr]; //@line 1397 "multibytecodec.c"
        var $19=HEAP[$sizehint]; //@line 1397 "multibytecodec.c"
        var $20=_mbstreamreader_iread($18, ((__str37)&4294967295), $19); //@line 1397 "multibytecodec.c"
        HEAP[$r]=$20; //@line 1397 "multibytecodec.c"
        var $21=HEAP[$r]; //@line 1398 "multibytecodec.c"
        var $22=($21)==0; //@line 1398 "multibytecodec.c"
        if ($22) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1398 "multibytecodec.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 1399 "multibytecodec.c"
        __label__ = 13; break; //@line 1399 "multibytecodec.c"
      case 10: // $bb9
        var $23=HEAP[$r]; //@line 1401 "multibytecodec.c"
        var $24=_PyUnicodeUCS2_Splitlines($23, 1); //@line 1401 "multibytecodec.c"
        HEAP[$sr]=$24; //@line 1401 "multibytecodec.c"
        var $25=HEAP[$r]; //@line 1402 "multibytecodec.c"
        var $26=(($25)&4294967295); //@line 1402 "multibytecodec.c"
        var $27=HEAP[$26]; //@line 1402 "multibytecodec.c"
        var $28=((($27) - 1)&4294967295); //@line 1402 "multibytecodec.c"
        var $29=HEAP[$r]; //@line 1402 "multibytecodec.c"
        var $30=(($29)&4294967295); //@line 1402 "multibytecodec.c"
        HEAP[$30]=$28; //@line 1402 "multibytecodec.c"
        var $31=HEAP[$r]; //@line 1402 "multibytecodec.c"
        var $32=(($31)&4294967295); //@line 1402 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 1402 "multibytecodec.c"
        var $34=((($33))|0)==0; //@line 1402 "multibytecodec.c"
        if ($34) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1402 "multibytecodec.c"
      case 11: // $bb10
        var $35=HEAP[$r]; //@line 1402 "multibytecodec.c"
        var $36=(($35+4)&4294967295); //@line 1402 "multibytecodec.c"
        var $37=HEAP[$36]; //@line 1402 "multibytecodec.c"
        var $38=(($37+24)&4294967295); //@line 1402 "multibytecodec.c"
        var $39=HEAP[$38]; //@line 1402 "multibytecodec.c"
        var $40=HEAP[$r]; //@line 1402 "multibytecodec.c"
        FUNCTION_TABLE[$39]($40); //@line 1402 "multibytecodec.c"
        __label__ = 12; break; //@line 1402 "multibytecodec.c"
      case 12: // $bb11
        var $41=HEAP[$sr]; //@line 1403 "multibytecodec.c"
        HEAP[$0]=$41; //@line 1403 "multibytecodec.c"
        __label__ = 13; break; //@line 1403 "multibytecodec.c"
      case 13: // $bb12
        var $42=HEAP[$0]; //@line 1386 "multibytecodec.c"
        HEAP[$retval]=$42; //@line 1386 "multibytecodec.c"
        __label__ = 14; break; //@line 1386 "multibytecodec.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 1386 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 1386 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_reset($self) {
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
        var $1=HEAP[$self_addr]; //@line 1409 "multibytecodec.c"
        var $2=(($1+8)&4294967295); //@line 1409 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 1409 "multibytecodec.c"
        var $4=(($3+32)&4294967295); //@line 1409 "multibytecodec.c"
        var $5=HEAP[$4]; //@line 1409 "multibytecodec.c"
        var $6=($5)!=0; //@line 1409 "multibytecodec.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1409 "multibytecodec.c"
      case 1: // $bb
        var $7=HEAP[$self_addr]; //@line 1409 "multibytecodec.c"
        var $8=(($7+8)&4294967295); //@line 1409 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 1409 "multibytecodec.c"
        var $10=(($9+32)&4294967295); //@line 1409 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 1409 "multibytecodec.c"
        var $12=HEAP[$self_addr]; //@line 1409 "multibytecodec.c"
        var $13=(($12+8)&4294967295); //@line 1409 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 1409 "multibytecodec.c"
        var $15=(($14+4)&4294967295); //@line 1409 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 1409 "multibytecodec.c"
        var $17=HEAP[$self_addr]; //@line 1409 "multibytecodec.c"
        var $18=(($17+12)&4294967295); //@line 1409 "multibytecodec.c"
        var $19=FUNCTION_TABLE[$11]($18, $16); //@line 1409 "multibytecodec.c"
        var $20=((($19))|0)!=0; //@line 1409 "multibytecodec.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1409 "multibytecodec.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1411 "multibytecodec.c"
        __label__ = 4; break; //@line 1411 "multibytecodec.c"
      case 3: // $bb2
        var $21=HEAP[$self_addr]; //@line 1412 "multibytecodec.c"
        var $22=(($21+32)&4294967295); //@line 1412 "multibytecodec.c"
        HEAP[$22]=0; //@line 1412 "multibytecodec.c"
        var $23=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1414 "multibytecodec.c"
        var $24=((($23) + 1)&4294967295); //@line 1414 "multibytecodec.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$24; //@line 1414 "multibytecodec.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1414 "multibytecodec.c"
        __label__ = 4; break; //@line 1414 "multibytecodec.c"
      case 4: // $bb3
        var $25=HEAP[$0]; //@line 1411 "multibytecodec.c"
        HEAP[$retval]=$25; //@line 1411 "multibytecodec.c"
        __label__ = 5; break; //@line 1411 "multibytecodec.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 1411 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 1411 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $self=__stackBase__+20;
        var $stream=__stackBase__+24;
        var $codec=__stackBase__+28;
        var $errors=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$codec]=0; //@line 1440 "multibytecodec.c"
        HEAP[$errors]=0; //@line 1441 "multibytecodec.c"
        var $1=HEAP[$args_addr]; //@line 1443 "multibytecodec.c"
        var $2=HEAP[$kwds_addr]; //@line 1443 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, ((__str41)&4294967295), ((_streamkwarglist)&4294967295), $stream, $errors); //@line 1443 "multibytecodec.c"
        var $4=((($3))|0)==0; //@line 1443 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1443 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1445 "multibytecodec.c"
        __label__ = 20; break; //@line 1445 "multibytecodec.c"
      case 2: // $bb1
        var $5=HEAP[$type_addr]; //@line 1447 "multibytecodec.c"
        var $6=(($5+152)&4294967295); //@line 1447 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 1447 "multibytecodec.c"
        var $8=HEAP[$type_addr]; //@line 1447 "multibytecodec.c"
        var $9=FUNCTION_TABLE[$7]($8, 0); //@line 1447 "multibytecodec.c"
        var $10=$9; //@line 1447 "multibytecodec.c"
        HEAP[$self]=$10; //@line 1447 "multibytecodec.c"
        var $11=HEAP[$self]; //@line 1448 "multibytecodec.c"
        var $12=($11)==0; //@line 1448 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1448 "multibytecodec.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1449 "multibytecodec.c"
        __label__ = 20; break; //@line 1449 "multibytecodec.c"
      case 4: // $bb3
        var $13=HEAP[$type_addr]; //@line 1451 "multibytecodec.c"
        var $14=$13; //@line 1451 "multibytecodec.c"
        var $15=_PyObject_GetAttrString($14, ((__str29)&4294967295)); //@line 1451 "multibytecodec.c"
        HEAP[$codec]=$15; //@line 1451 "multibytecodec.c"
        var $16=HEAP[$codec]; //@line 1452 "multibytecodec.c"
        var $17=($16)==0; //@line 1452 "multibytecodec.c"
        if ($17) { __label__ = 13; break; } else { __label__ = 5; break; } //@line 1452 "multibytecodec.c"
      case 5: // $bb4
        var $18=HEAP[$codec]; //@line 1454 "multibytecodec.c"
        var $19=(($18+4)&4294967295); //@line 1454 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 1454 "multibytecodec.c"
        var $21=($20)!=(_MultibyteCodec_Type); //@line 1454 "multibytecodec.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1454 "multibytecodec.c"
      case 6: // $bb5
        var $22=HEAP[_PyExc_TypeError]; //@line 1455 "multibytecodec.c"
        _PyErr_SetString($22, ((__str30)&4294967295)); //@line 1455 "multibytecodec.c"
        __label__ = 13; break; //@line 1455 "multibytecodec.c"
      case 7: // $bb6
        var $23=HEAP[$codec]; //@line 1459 "multibytecodec.c"
        var $24=$23; //@line 1459 "multibytecodec.c"
        var $25=(($24+8)&4294967295); //@line 1459 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1459 "multibytecodec.c"
        var $27=HEAP[$self]; //@line 1459 "multibytecodec.c"
        var $28=(($27+8)&4294967295); //@line 1459 "multibytecodec.c"
        HEAP[$28]=$26; //@line 1459 "multibytecodec.c"
        var $29=HEAP[$stream]; //@line 1460 "multibytecodec.c"
        var $30=HEAP[$self]; //@line 1460 "multibytecodec.c"
        var $31=(($30+36)&4294967295); //@line 1460 "multibytecodec.c"
        HEAP[$31]=$29; //@line 1460 "multibytecodec.c"
        var $32=HEAP[$stream]; //@line 1461 "multibytecodec.c"
        var $33=(($32)&4294967295); //@line 1461 "multibytecodec.c"
        var $34=HEAP[$33]; //@line 1461 "multibytecodec.c"
        var $35=((($34) + 1)&4294967295); //@line 1461 "multibytecodec.c"
        var $36=(($32)&4294967295); //@line 1461 "multibytecodec.c"
        HEAP[$36]=$35; //@line 1461 "multibytecodec.c"
        var $37=HEAP[$self]; //@line 1462 "multibytecodec.c"
        var $38=(($37+32)&4294967295); //@line 1462 "multibytecodec.c"
        HEAP[$38]=0; //@line 1462 "multibytecodec.c"
        var $39=HEAP[$errors]; //@line 1463 "multibytecodec.c"
        var $40=_internal_error_callback($39); //@line 1463 "multibytecodec.c"
        var $41=HEAP[$self]; //@line 1463 "multibytecodec.c"
        var $42=(($41+20)&4294967295); //@line 1463 "multibytecodec.c"
        HEAP[$42]=$40; //@line 1463 "multibytecodec.c"
        var $43=HEAP[$self]; //@line 1464 "multibytecodec.c"
        var $44=(($43+20)&4294967295); //@line 1464 "multibytecodec.c"
        var $45=HEAP[$44]; //@line 1464 "multibytecodec.c"
        var $46=($45)==0; //@line 1464 "multibytecodec.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 8; break; } //@line 1464 "multibytecodec.c"
      case 8: // $bb7
        var $47=HEAP[$self]; //@line 1466 "multibytecodec.c"
        var $48=(($47+8)&4294967295); //@line 1466 "multibytecodec.c"
        var $49=HEAP[$48]; //@line 1466 "multibytecodec.c"
        var $50=(($49+28)&4294967295); //@line 1466 "multibytecodec.c"
        var $51=HEAP[$50]; //@line 1466 "multibytecodec.c"
        var $52=($51)!=0; //@line 1466 "multibytecodec.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1466 "multibytecodec.c"
      case 9: // $bb8
        var $53=HEAP[$self]; //@line 1466 "multibytecodec.c"
        var $54=(($53+8)&4294967295); //@line 1466 "multibytecodec.c"
        var $55=HEAP[$54]; //@line 1466 "multibytecodec.c"
        var $56=(($55+28)&4294967295); //@line 1466 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 1466 "multibytecodec.c"
        var $58=HEAP[$self]; //@line 1466 "multibytecodec.c"
        var $59=(($58+8)&4294967295); //@line 1466 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 1466 "multibytecodec.c"
        var $61=(($60+4)&4294967295); //@line 1466 "multibytecodec.c"
        var $62=HEAP[$61]; //@line 1466 "multibytecodec.c"
        var $63=HEAP[$self]; //@line 1466 "multibytecodec.c"
        var $64=(($63+12)&4294967295); //@line 1466 "multibytecodec.c"
        var $65=FUNCTION_TABLE[$57]($64, $62); //@line 1466 "multibytecodec.c"
        var $66=((($65))|0)!=0; //@line 1466 "multibytecodec.c"
        if ($66) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 1466 "multibytecodec.c"
      case 10: // $bb9
        var $67=HEAP[$codec]; //@line 1470 "multibytecodec.c"
        var $68=(($67)&4294967295); //@line 1470 "multibytecodec.c"
        var $69=HEAP[$68]; //@line 1470 "multibytecodec.c"
        var $70=((($69) - 1)&4294967295); //@line 1470 "multibytecodec.c"
        var $71=HEAP[$codec]; //@line 1470 "multibytecodec.c"
        var $72=(($71)&4294967295); //@line 1470 "multibytecodec.c"
        HEAP[$72]=$70; //@line 1470 "multibytecodec.c"
        var $73=HEAP[$codec]; //@line 1470 "multibytecodec.c"
        var $74=(($73)&4294967295); //@line 1470 "multibytecodec.c"
        var $75=HEAP[$74]; //@line 1470 "multibytecodec.c"
        var $76=((($75))|0)==0; //@line 1470 "multibytecodec.c"
        if ($76) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1470 "multibytecodec.c"
      case 11: // $bb10
        var $77=HEAP[$codec]; //@line 1470 "multibytecodec.c"
        var $78=(($77+4)&4294967295); //@line 1470 "multibytecodec.c"
        var $79=HEAP[$78]; //@line 1470 "multibytecodec.c"
        var $80=(($79+24)&4294967295); //@line 1470 "multibytecodec.c"
        var $81=HEAP[$80]; //@line 1470 "multibytecodec.c"
        var $82=HEAP[$codec]; //@line 1470 "multibytecodec.c"
        FUNCTION_TABLE[$81]($82); //@line 1470 "multibytecodec.c"
        __label__ = 12; break; //@line 1470 "multibytecodec.c"
      case 12: // $bb11
        var $83=HEAP[$self]; //@line 1471 "multibytecodec.c"
        var $84=$83; //@line 1471 "multibytecodec.c"
        HEAP[$0]=$84; //@line 1471 "multibytecodec.c"
        __label__ = 20; break; //@line 1471 "multibytecodec.c"
      case 13: // $errorexit
        var $85=HEAP[$self]; //@line 1474 "multibytecodec.c"
        var $86=($85)!=0; //@line 1474 "multibytecodec.c"
        if ($86) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 1474 "multibytecodec.c"
      case 14: // $bb12
        var $87=HEAP[$self]; //@line 1474 "multibytecodec.c"
        var $88=$87; //@line 1474 "multibytecodec.c"
        var $89=(($88)&4294967295); //@line 1474 "multibytecodec.c"
        var $90=HEAP[$89]; //@line 1474 "multibytecodec.c"
        var $91=((($90) - 1)&4294967295); //@line 1474 "multibytecodec.c"
        var $92=(($88)&4294967295); //@line 1474 "multibytecodec.c"
        HEAP[$92]=$91; //@line 1474 "multibytecodec.c"
        var $93=(($88)&4294967295); //@line 1474 "multibytecodec.c"
        var $94=HEAP[$93]; //@line 1474 "multibytecodec.c"
        var $95=((($94))|0)==0; //@line 1474 "multibytecodec.c"
        if ($95) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1474 "multibytecodec.c"
      case 15: // $bb13
        var $96=HEAP[$self]; //@line 1474 "multibytecodec.c"
        var $97=$96; //@line 1474 "multibytecodec.c"
        var $98=(($97+4)&4294967295); //@line 1474 "multibytecodec.c"
        var $99=HEAP[$98]; //@line 1474 "multibytecodec.c"
        var $100=(($99+24)&4294967295); //@line 1474 "multibytecodec.c"
        var $101=HEAP[$100]; //@line 1474 "multibytecodec.c"
        var $102=HEAP[$self]; //@line 1474 "multibytecodec.c"
        var $103=$102; //@line 1474 "multibytecodec.c"
        FUNCTION_TABLE[$101]($103); //@line 1474 "multibytecodec.c"
        __label__ = 16; break; //@line 1474 "multibytecodec.c"
      case 16: // $bb14
        var $104=HEAP[$codec]; //@line 1475 "multibytecodec.c"
        var $105=($104)!=0; //@line 1475 "multibytecodec.c"
        if ($105) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 1475 "multibytecodec.c"
      case 17: // $bb15
        var $106=HEAP[$codec]; //@line 1475 "multibytecodec.c"
        var $107=(($106)&4294967295); //@line 1475 "multibytecodec.c"
        var $108=HEAP[$107]; //@line 1475 "multibytecodec.c"
        var $109=((($108) - 1)&4294967295); //@line 1475 "multibytecodec.c"
        var $110=HEAP[$codec]; //@line 1475 "multibytecodec.c"
        var $111=(($110)&4294967295); //@line 1475 "multibytecodec.c"
        HEAP[$111]=$109; //@line 1475 "multibytecodec.c"
        var $112=HEAP[$codec]; //@line 1475 "multibytecodec.c"
        var $113=(($112)&4294967295); //@line 1475 "multibytecodec.c"
        var $114=HEAP[$113]; //@line 1475 "multibytecodec.c"
        var $115=((($114))|0)==0; //@line 1475 "multibytecodec.c"
        if ($115) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1475 "multibytecodec.c"
      case 18: // $bb16
        var $116=HEAP[$codec]; //@line 1475 "multibytecodec.c"
        var $117=(($116+4)&4294967295); //@line 1475 "multibytecodec.c"
        var $118=HEAP[$117]; //@line 1475 "multibytecodec.c"
        var $119=(($118+24)&4294967295); //@line 1475 "multibytecodec.c"
        var $120=HEAP[$119]; //@line 1475 "multibytecodec.c"
        var $121=HEAP[$codec]; //@line 1475 "multibytecodec.c"
        FUNCTION_TABLE[$120]($121); //@line 1475 "multibytecodec.c"
        __label__ = 19; break; //@line 1475 "multibytecodec.c"
      case 19: // $bb17
        HEAP[$0]=0; //@line 1476 "multibytecodec.c"
        __label__ = 20; break; //@line 1476 "multibytecodec.c"
      case 20: // $bb18
        var $122=HEAP[$0]; //@line 1445 "multibytecodec.c"
        HEAP[$retval]=$122; //@line 1445 "multibytecodec.c"
        __label__ = 21; break; //@line 1445 "multibytecodec.c"
      case 21: // $return
        var $retval19=HEAP[$retval]; //@line 1445 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1445 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_init($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$0]=0; //@line 1482 "multibytecodec.c"
        var $1=HEAP[$0]; //@line 1482 "multibytecodec.c"
        HEAP[$retval]=$1; //@line 1482 "multibytecodec.c"
        __label__ = 1; break; //@line 1482 "multibytecodec.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1482 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1482 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_traverse($self, $visit, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $visit_addr=__stackBase__+4;
        var $arg_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $vret=__stackBase__+20;
        var $vret6=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$visit_addr]=$visit;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$self_addr]; //@line 1489 "multibytecodec.c"
        var $2=(($1+20)&4294967295); //@line 1489 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 1489 "multibytecodec.c"
        var $4=($3)==0; //@line 1489 "multibytecodec.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1489 "multibytecodec.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1489 "multibytecodec.c"
        var $6=(($5+20)&4294967295); //@line 1489 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 1489 "multibytecodec.c"
        var $8=($7) > 3; //@line 1489 "multibytecodec.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1489 "multibytecodec.c"
      case 2: // $bb1
        var $9=HEAP[$self_addr]; //@line 1490 "multibytecodec.c"
        var $10=(($9+20)&4294967295); //@line 1490 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 1490 "multibytecodec.c"
        var $12=($11)!=0; //@line 1490 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1490 "multibytecodec.c"
      case 3: // $bb2
        var $13=HEAP[$self_addr]; //@line 1490 "multibytecodec.c"
        var $14=(($13+20)&4294967295); //@line 1490 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 1490 "multibytecodec.c"
        var $16=HEAP[$visit_addr]; //@line 1490 "multibytecodec.c"
        var $17=HEAP[$arg_addr]; //@line 1490 "multibytecodec.c"
        var $18=FUNCTION_TABLE[$16]($15, $17); //@line 1490 "multibytecodec.c"
        HEAP[$vret]=$18; //@line 1490 "multibytecodec.c"
        var $19=HEAP[$vret]; //@line 1490 "multibytecodec.c"
        var $20=((($19))|0)!=0; //@line 1490 "multibytecodec.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1490 "multibytecodec.c"
      case 4: // $bb3
        var $21=HEAP[$vret]; //@line 1490 "multibytecodec.c"
        HEAP[$0]=$21; //@line 1490 "multibytecodec.c"
        __label__ = 9; break; //@line 1490 "multibytecodec.c"
      case 5: // $bb4
        var $22=HEAP[$self_addr]; //@line 1491 "multibytecodec.c"
        var $23=(($22+36)&4294967295); //@line 1491 "multibytecodec.c"
        var $24=HEAP[$23]; //@line 1491 "multibytecodec.c"
        var $25=($24)!=0; //@line 1491 "multibytecodec.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1491 "multibytecodec.c"
      case 6: // $bb5
        var $26=HEAP[$self_addr]; //@line 1491 "multibytecodec.c"
        var $27=(($26+36)&4294967295); //@line 1491 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 1491 "multibytecodec.c"
        var $29=HEAP[$visit_addr]; //@line 1491 "multibytecodec.c"
        var $30=HEAP[$arg_addr]; //@line 1491 "multibytecodec.c"
        var $31=FUNCTION_TABLE[$29]($28, $30); //@line 1491 "multibytecodec.c"
        HEAP[$vret6]=$31; //@line 1491 "multibytecodec.c"
        var $32=HEAP[$vret6]; //@line 1491 "multibytecodec.c"
        var $33=((($32))|0)!=0; //@line 1491 "multibytecodec.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1491 "multibytecodec.c"
      case 7: // $bb7
        var $34=HEAP[$vret6]; //@line 1491 "multibytecodec.c"
        HEAP[$0]=$34; //@line 1491 "multibytecodec.c"
        __label__ = 9; break; //@line 1491 "multibytecodec.c"
      case 8: // $bb8
        HEAP[$0]=0; //@line 1492 "multibytecodec.c"
        __label__ = 9; break; //@line 1492 "multibytecodec.c"
      case 9: // $bb9
        var $35=HEAP[$0]; //@line 1490 "multibytecodec.c"
        HEAP[$retval]=$35; //@line 1490 "multibytecodec.c"
        __label__ = 10; break; //@line 1490 "multibytecodec.c"
      case 10: // $return
        var $retval10=HEAP[$retval]; //@line 1490 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1490 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamreader_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 1498 "multibytecodec.c"
        var $1=$0; //@line 1498 "multibytecodec.c"
        _PyObject_GC_UnTrack($1); //@line 1498 "multibytecodec.c"
        var $2=HEAP[$self_addr]; //@line 1499 "multibytecodec.c"
        var $3=(($2+20)&4294967295); //@line 1499 "multibytecodec.c"
        var $4=HEAP[$3]; //@line 1499 "multibytecodec.c"
        var $5=($4)!=0; //@line 1499 "multibytecodec.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 1499 "multibytecodec.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 1499 "multibytecodec.c"
        var $7=(($6+20)&4294967295); //@line 1499 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 1499 "multibytecodec.c"
        var $9=($8)==0; //@line 1499 "multibytecodec.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1499 "multibytecodec.c"
      case 2: // $bb1
        var $10=HEAP[$self_addr]; //@line 1499 "multibytecodec.c"
        var $11=(($10+20)&4294967295); //@line 1499 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1499 "multibytecodec.c"
        var $13=($12) > 3; //@line 1499 "multibytecodec.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1499 "multibytecodec.c"
      case 3: // $bb2
        var $14=HEAP[$self_addr]; //@line 1499 "multibytecodec.c"
        var $15=(($14+20)&4294967295); //@line 1499 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 1499 "multibytecodec.c"
        var $17=(($16)&4294967295); //@line 1499 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 1499 "multibytecodec.c"
        var $19=((($18) - 1)&4294967295); //@line 1499 "multibytecodec.c"
        var $20=(($16)&4294967295); //@line 1499 "multibytecodec.c"
        HEAP[$20]=$19; //@line 1499 "multibytecodec.c"
        var $21=(($16)&4294967295); //@line 1499 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 1499 "multibytecodec.c"
        var $23=((($22))|0)==0; //@line 1499 "multibytecodec.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1499 "multibytecodec.c"
      case 4: // $bb3
        var $24=HEAP[$self_addr]; //@line 1499 "multibytecodec.c"
        var $25=(($24+20)&4294967295); //@line 1499 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1499 "multibytecodec.c"
        var $27=(($26+4)&4294967295); //@line 1499 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 1499 "multibytecodec.c"
        var $29=(($28+24)&4294967295); //@line 1499 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 1499 "multibytecodec.c"
        var $31=HEAP[$self_addr]; //@line 1499 "multibytecodec.c"
        var $32=(($31+20)&4294967295); //@line 1499 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 1499 "multibytecodec.c"
        FUNCTION_TABLE[$30]($33); //@line 1499 "multibytecodec.c"
        __label__ = 5; break; //@line 1499 "multibytecodec.c"
      case 5: // $bb4
        var $34=HEAP[$self_addr]; //@line 1500 "multibytecodec.c"
        var $35=(($34+36)&4294967295); //@line 1500 "multibytecodec.c"
        var $36=HEAP[$35]; //@line 1500 "multibytecodec.c"
        var $37=($36)!=0; //@line 1500 "multibytecodec.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1500 "multibytecodec.c"
      case 6: // $bb5
        var $38=HEAP[$self_addr]; //@line 1500 "multibytecodec.c"
        var $39=(($38+36)&4294967295); //@line 1500 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 1500 "multibytecodec.c"
        var $41=(($40)&4294967295); //@line 1500 "multibytecodec.c"
        var $42=HEAP[$41]; //@line 1500 "multibytecodec.c"
        var $43=((($42) - 1)&4294967295); //@line 1500 "multibytecodec.c"
        var $44=(($40)&4294967295); //@line 1500 "multibytecodec.c"
        HEAP[$44]=$43; //@line 1500 "multibytecodec.c"
        var $45=(($40)&4294967295); //@line 1500 "multibytecodec.c"
        var $46=HEAP[$45]; //@line 1500 "multibytecodec.c"
        var $47=((($46))|0)==0; //@line 1500 "multibytecodec.c"
        if ($47) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1500 "multibytecodec.c"
      case 7: // $bb6
        var $48=HEAP[$self_addr]; //@line 1500 "multibytecodec.c"
        var $49=(($48+36)&4294967295); //@line 1500 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 1500 "multibytecodec.c"
        var $51=(($50+4)&4294967295); //@line 1500 "multibytecodec.c"
        var $52=HEAP[$51]; //@line 1500 "multibytecodec.c"
        var $53=(($52+24)&4294967295); //@line 1500 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 1500 "multibytecodec.c"
        var $55=HEAP[$self_addr]; //@line 1500 "multibytecodec.c"
        var $56=(($55+36)&4294967295); //@line 1500 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 1500 "multibytecodec.c"
        FUNCTION_TABLE[$54]($57); //@line 1500 "multibytecodec.c"
        __label__ = 8; break; //@line 1500 "multibytecodec.c"
      case 8: // $bb7
        var $58=HEAP[$self_addr]; //@line 1501 "multibytecodec.c"
        var $59=$58; //@line 1501 "multibytecodec.c"
        var $60=(($59+4)&4294967295); //@line 1501 "multibytecodec.c"
        var $61=HEAP[$60]; //@line 1501 "multibytecodec.c"
        var $62=(($61+160)&4294967295); //@line 1501 "multibytecodec.c"
        var $63=HEAP[$62]; //@line 1501 "multibytecodec.c"
        var $64=HEAP[$self_addr]; //@line 1501 "multibytecodec.c"
        var $65=$64; //@line 1501 "multibytecodec.c"
        FUNCTION_TABLE[$63]($65); //@line 1501 "multibytecodec.c"
        __label__ = 9; break; //@line 1502 "multibytecodec.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 1502 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_iwrite($self, $unistr) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $unistr_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $str=__stackBase__+16;
        var $wr=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$unistr_addr]=$unistr;
        var $1=HEAP[$self_addr]; //@line 1558 "multibytecodec.c"
        var $2=$1; //@line 1558 "multibytecodec.c"
        var $3=HEAP[$unistr_addr]; //@line 1558 "multibytecodec.c"
        var $4=_encoder_encode_stateful($2, $3, 0); //@line 1558 "multibytecodec.c"
        HEAP[$str]=$4; //@line 1558 "multibytecodec.c"
        var $5=HEAP[$str]; //@line 1559 "multibytecodec.c"
        var $6=($5)==0; //@line 1559 "multibytecodec.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1559 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 1560 "multibytecodec.c"
        __label__ = 9; break; //@line 1560 "multibytecodec.c"
      case 2: // $bb1
        var $7=HEAP[$self_addr]; //@line 1562 "multibytecodec.c"
        var $8=(($7+32)&4294967295); //@line 1562 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 1562 "multibytecodec.c"
        var $10=HEAP[$str]; //@line 1562 "multibytecodec.c"
        var $11=__PyObject_CallMethod_SizeT($9, ((__str43)&4294967295), ((__str44)&4294967295), $10); //@line 1562 "multibytecodec.c"
        HEAP[$wr]=$11; //@line 1562 "multibytecodec.c"
        var $12=HEAP[$str]; //@line 1563 "multibytecodec.c"
        var $13=(($12)&4294967295); //@line 1563 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 1563 "multibytecodec.c"
        var $15=((($14) - 1)&4294967295); //@line 1563 "multibytecodec.c"
        var $16=HEAP[$str]; //@line 1563 "multibytecodec.c"
        var $17=(($16)&4294967295); //@line 1563 "multibytecodec.c"
        HEAP[$17]=$15; //@line 1563 "multibytecodec.c"
        var $18=HEAP[$str]; //@line 1563 "multibytecodec.c"
        var $19=(($18)&4294967295); //@line 1563 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 1563 "multibytecodec.c"
        var $21=((($20))|0)==0; //@line 1563 "multibytecodec.c"
        if ($21) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1563 "multibytecodec.c"
      case 3: // $bb2
        var $22=HEAP[$str]; //@line 1563 "multibytecodec.c"
        var $23=(($22+4)&4294967295); //@line 1563 "multibytecodec.c"
        var $24=HEAP[$23]; //@line 1563 "multibytecodec.c"
        var $25=(($24+24)&4294967295); //@line 1563 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1563 "multibytecodec.c"
        var $27=HEAP[$str]; //@line 1563 "multibytecodec.c"
        FUNCTION_TABLE[$26]($27); //@line 1563 "multibytecodec.c"
        __label__ = 4; break; //@line 1563 "multibytecodec.c"
      case 4: // $bb3
        var $28=HEAP[$wr]; //@line 1564 "multibytecodec.c"
        var $29=($28)==0; //@line 1564 "multibytecodec.c"
        if ($29) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1564 "multibytecodec.c"
      case 5: // $bb4
        HEAP[$0]=-1; //@line 1565 "multibytecodec.c"
        __label__ = 9; break; //@line 1565 "multibytecodec.c"
      case 6: // $bb5
        var $30=HEAP[$wr]; //@line 1567 "multibytecodec.c"
        var $31=(($30)&4294967295); //@line 1567 "multibytecodec.c"
        var $32=HEAP[$31]; //@line 1567 "multibytecodec.c"
        var $33=((($32) - 1)&4294967295); //@line 1567 "multibytecodec.c"
        var $34=HEAP[$wr]; //@line 1567 "multibytecodec.c"
        var $35=(($34)&4294967295); //@line 1567 "multibytecodec.c"
        HEAP[$35]=$33; //@line 1567 "multibytecodec.c"
        var $36=HEAP[$wr]; //@line 1567 "multibytecodec.c"
        var $37=(($36)&4294967295); //@line 1567 "multibytecodec.c"
        var $38=HEAP[$37]; //@line 1567 "multibytecodec.c"
        var $39=((($38))|0)==0; //@line 1567 "multibytecodec.c"
        if ($39) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1567 "multibytecodec.c"
      case 7: // $bb6
        var $40=HEAP[$wr]; //@line 1567 "multibytecodec.c"
        var $41=(($40+4)&4294967295); //@line 1567 "multibytecodec.c"
        var $42=HEAP[$41]; //@line 1567 "multibytecodec.c"
        var $43=(($42+24)&4294967295); //@line 1567 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 1567 "multibytecodec.c"
        var $45=HEAP[$wr]; //@line 1567 "multibytecodec.c"
        FUNCTION_TABLE[$44]($45); //@line 1567 "multibytecodec.c"
        __label__ = 8; break; //@line 1567 "multibytecodec.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 1568 "multibytecodec.c"
        __label__ = 9; break; //@line 1568 "multibytecodec.c"
      case 9: // $bb8
        var $46=HEAP[$0]; //@line 1560 "multibytecodec.c"
        HEAP[$retval]=$46; //@line 1560 "multibytecodec.c"
        __label__ = 10; break; //@line 1560 "multibytecodec.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1560 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1560 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_write($self, $strobj) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $strobj_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$strobj_addr]=$strobj;
        var $1=HEAP[$self_addr]; //@line 1574 "multibytecodec.c"
        var $2=HEAP[$strobj_addr]; //@line 1574 "multibytecodec.c"
        var $3=_mbstreamwriter_iwrite($1, $2); //@line 1574 "multibytecodec.c"
        var $4=((($3))|0)!=0; //@line 1574 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1574 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1575 "multibytecodec.c"
        __label__ = 3; break; //@line 1575 "multibytecodec.c"
      case 2: // $bb1
        var $5=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1577 "multibytecodec.c"
        var $6=((($5) + 1)&4294967295); //@line 1577 "multibytecodec.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$6; //@line 1577 "multibytecodec.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1577 "multibytecodec.c"
        __label__ = 3; break; //@line 1577 "multibytecodec.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 1575 "multibytecodec.c"
        HEAP[$retval]=$7; //@line 1575 "multibytecodec.c"
        __label__ = 4; break; //@line 1575 "multibytecodec.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1575 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1575 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_writelines($self, $lines) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $lines_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $strobj=__stackBase__+16;
        var $i=__stackBase__+20;
        var $r=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$lines_addr]=$lines;
        var $1=HEAP[$lines_addr]; //@line 1586 "multibytecodec.c"
        var $2=_PySequence_Check($1); //@line 1586 "multibytecodec.c"
        var $3=((($2))|0)==0; //@line 1586 "multibytecodec.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1586 "multibytecodec.c"
      case 1: // $bb
        var $4=HEAP[_PyExc_TypeError]; //@line 1587 "multibytecodec.c"
        _PyErr_SetString($4, ((__str45)&4294967295)); //@line 1587 "multibytecodec.c"
        HEAP[$0]=0; //@line 1589 "multibytecodec.c"
        __label__ = 12; break; //@line 1589 "multibytecodec.c"
      case 2: // $bb1
        HEAP[$i]=0; //@line 1592 "multibytecodec.c"
        __label__ = 10; break; //@line 1592 "multibytecodec.c"
      case 3: // $bb2
        var $5=HEAP[$lines_addr]; //@line 1594 "multibytecodec.c"
        var $6=HEAP[$i]; //@line 1594 "multibytecodec.c"
        var $7=_PySequence_GetItem($5, $6); //@line 1594 "multibytecodec.c"
        HEAP[$strobj]=$7; //@line 1594 "multibytecodec.c"
        var $8=HEAP[$strobj]; //@line 1595 "multibytecodec.c"
        var $9=($8)==0; //@line 1595 "multibytecodec.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1595 "multibytecodec.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 1596 "multibytecodec.c"
        __label__ = 12; break; //@line 1596 "multibytecodec.c"
      case 5: // $bb4
        var $10=HEAP[$self_addr]; //@line 1598 "multibytecodec.c"
        var $11=HEAP[$strobj]; //@line 1598 "multibytecodec.c"
        var $12=_mbstreamwriter_iwrite($10, $11); //@line 1598 "multibytecodec.c"
        HEAP[$r]=$12; //@line 1598 "multibytecodec.c"
        var $13=HEAP[$strobj]; //@line 1599 "multibytecodec.c"
        var $14=(($13)&4294967295); //@line 1599 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 1599 "multibytecodec.c"
        var $16=((($15) - 1)&4294967295); //@line 1599 "multibytecodec.c"
        var $17=HEAP[$strobj]; //@line 1599 "multibytecodec.c"
        var $18=(($17)&4294967295); //@line 1599 "multibytecodec.c"
        HEAP[$18]=$16; //@line 1599 "multibytecodec.c"
        var $19=HEAP[$strobj]; //@line 1599 "multibytecodec.c"
        var $20=(($19)&4294967295); //@line 1599 "multibytecodec.c"
        var $21=HEAP[$20]; //@line 1599 "multibytecodec.c"
        var $22=((($21))|0)==0; //@line 1599 "multibytecodec.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1599 "multibytecodec.c"
      case 6: // $bb5
        var $23=HEAP[$strobj]; //@line 1599 "multibytecodec.c"
        var $24=(($23+4)&4294967295); //@line 1599 "multibytecodec.c"
        var $25=HEAP[$24]; //@line 1599 "multibytecodec.c"
        var $26=(($25+24)&4294967295); //@line 1599 "multibytecodec.c"
        var $27=HEAP[$26]; //@line 1599 "multibytecodec.c"
        var $28=HEAP[$strobj]; //@line 1599 "multibytecodec.c"
        FUNCTION_TABLE[$27]($28); //@line 1599 "multibytecodec.c"
        __label__ = 7; break; //@line 1599 "multibytecodec.c"
      case 7: // $bb6
        var $29=HEAP[$r]; //@line 1600 "multibytecodec.c"
        var $30=((($29))|0)==-1; //@line 1600 "multibytecodec.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1600 "multibytecodec.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 1601 "multibytecodec.c"
        __label__ = 12; break; //@line 1601 "multibytecodec.c"
      case 9: // $bb8
        var $31=HEAP[$i]; //@line 1592 "multibytecodec.c"
        var $32=((($31) + 1)&4294967295); //@line 1592 "multibytecodec.c"
        HEAP[$i]=$32; //@line 1592 "multibytecodec.c"
        __label__ = 10; break; //@line 1592 "multibytecodec.c"
      case 10: // $bb9
        var $33=HEAP[$lines_addr]; //@line 1592 "multibytecodec.c"
        var $34=_PySequence_Size($33); //@line 1592 "multibytecodec.c"
        var $35=HEAP[$i]; //@line 1592 "multibytecodec.c"
        var $36=((($34))|0) > ((($35))|0); //@line 1592 "multibytecodec.c"
        if ($36) { __label__ = 3; break; } else { __label__ = 11; break; } //@line 1592 "multibytecodec.c"
      case 11: // $bb10
        var $37=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1604 "multibytecodec.c"
        var $38=((($37) + 1)&4294967295); //@line 1604 "multibytecodec.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$38; //@line 1604 "multibytecodec.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1604 "multibytecodec.c"
        __label__ = 12; break; //@line 1604 "multibytecodec.c"
      case 12: // $bb11
        var $39=HEAP[$0]; //@line 1589 "multibytecodec.c"
        HEAP[$retval]=$39; //@line 1589 "multibytecodec.c"
        __label__ = 13; break; //@line 1589 "multibytecodec.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 1589 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 1589 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_reset($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $pending=__stackBase__+12;
        var $pwrt=__stackBase__+16;
        var $wr=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 1613 "multibytecodec.c"
        var $2=(($1+24)&4294967295); //@line 1613 "multibytecodec.c"
        var $3=(($2)&4294967295); //@line 1613 "multibytecodec.c"
        HEAP[$pending]=$3; //@line 1613 "multibytecodec.c"
        var $4=HEAP[$self_addr]; //@line 1614 "multibytecodec.c"
        var $5=(($4+20)&4294967295); //@line 1614 "multibytecodec.c"
        var $6=HEAP[$5]; //@line 1614 "multibytecodec.c"
        var $7=HEAP[$self_addr]; //@line 1614 "multibytecodec.c"
        var $8=(($7+28)&4294967295); //@line 1614 "multibytecodec.c"
        var $9=HEAP[$8]; //@line 1614 "multibytecodec.c"
        var $10=HEAP[$self_addr]; //@line 1614 "multibytecodec.c"
        var $11=(($10+12)&4294967295); //@line 1614 "multibytecodec.c"
        var $12=HEAP[$self_addr]; //@line 1614 "multibytecodec.c"
        var $13=(($12+8)&4294967295); //@line 1614 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 1614 "multibytecodec.c"
        var $15=_multibytecodec_encode($14, $11, $pending, $9, $6, 3); //@line 1614 "multibytecodec.c"
        HEAP[$pwrt]=$15; //@line 1614 "multibytecodec.c"
        var $16=HEAP[$self_addr]; //@line 1621 "multibytecodec.c"
        var $17=(($16+28)&4294967295); //@line 1621 "multibytecodec.c"
        HEAP[$17]=0; //@line 1621 "multibytecodec.c"
        var $18=HEAP[$pwrt]; //@line 1622 "multibytecodec.c"
        var $19=($18)==0; //@line 1622 "multibytecodec.c"
        if ($19) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1622 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1623 "multibytecodec.c"
        __label__ = 10; break; //@line 1623 "multibytecodec.c"
      case 2: // $bb1
        var $20=HEAP[$pwrt]; //@line 1625 "multibytecodec.c"
        var $21=_PyString_Size($20); //@line 1625 "multibytecodec.c"
        var $22=((($21))|0) > 0; //@line 1625 "multibytecodec.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 1625 "multibytecodec.c"
      case 3: // $bb2
        var $23=HEAP[$self_addr]; //@line 1627 "multibytecodec.c"
        var $24=(($23+32)&4294967295); //@line 1627 "multibytecodec.c"
        var $25=HEAP[$24]; //@line 1627 "multibytecodec.c"
        var $26=HEAP[$pwrt]; //@line 1627 "multibytecodec.c"
        var $27=__PyObject_CallMethod_SizeT($25, ((__str43)&4294967295), ((__str44)&4294967295), $26); //@line 1627 "multibytecodec.c"
        HEAP[$wr]=$27; //@line 1627 "multibytecodec.c"
        var $28=HEAP[$wr]; //@line 1628 "multibytecodec.c"
        var $29=($28)==0; //@line 1628 "multibytecodec.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 1628 "multibytecodec.c"
      case 4: // $bb3
        var $30=HEAP[$pwrt]; //@line 1629 "multibytecodec.c"
        var $31=(($30)&4294967295); //@line 1629 "multibytecodec.c"
        var $32=HEAP[$31]; //@line 1629 "multibytecodec.c"
        var $33=((($32) - 1)&4294967295); //@line 1629 "multibytecodec.c"
        var $34=HEAP[$pwrt]; //@line 1629 "multibytecodec.c"
        var $35=(($34)&4294967295); //@line 1629 "multibytecodec.c"
        HEAP[$35]=$33; //@line 1629 "multibytecodec.c"
        var $36=HEAP[$pwrt]; //@line 1629 "multibytecodec.c"
        var $37=(($36)&4294967295); //@line 1629 "multibytecodec.c"
        var $38=HEAP[$37]; //@line 1629 "multibytecodec.c"
        var $39=((($38))|0)==0; //@line 1629 "multibytecodec.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1629 "multibytecodec.c"
      case 5: // $bb4
        var $40=HEAP[$pwrt]; //@line 1629 "multibytecodec.c"
        var $41=(($40+4)&4294967295); //@line 1629 "multibytecodec.c"
        var $42=HEAP[$41]; //@line 1629 "multibytecodec.c"
        var $43=(($42+24)&4294967295); //@line 1629 "multibytecodec.c"
        var $44=HEAP[$43]; //@line 1629 "multibytecodec.c"
        var $45=HEAP[$pwrt]; //@line 1629 "multibytecodec.c"
        FUNCTION_TABLE[$44]($45); //@line 1629 "multibytecodec.c"
        __label__ = 6; break; //@line 1629 "multibytecodec.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 1630 "multibytecodec.c"
        __label__ = 10; break; //@line 1630 "multibytecodec.c"
      case 7: // $bb6
        var $46=HEAP[$pwrt]; //@line 1633 "multibytecodec.c"
        var $47=(($46)&4294967295); //@line 1633 "multibytecodec.c"
        var $48=HEAP[$47]; //@line 1633 "multibytecodec.c"
        var $49=((($48) - 1)&4294967295); //@line 1633 "multibytecodec.c"
        var $50=HEAP[$pwrt]; //@line 1633 "multibytecodec.c"
        var $51=(($50)&4294967295); //@line 1633 "multibytecodec.c"
        HEAP[$51]=$49; //@line 1633 "multibytecodec.c"
        var $52=HEAP[$pwrt]; //@line 1633 "multibytecodec.c"
        var $53=(($52)&4294967295); //@line 1633 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 1633 "multibytecodec.c"
        var $55=((($54))|0)==0; //@line 1633 "multibytecodec.c"
        if ($55) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1633 "multibytecodec.c"
      case 8: // $bb7
        var $56=HEAP[$pwrt]; //@line 1633 "multibytecodec.c"
        var $57=(($56+4)&4294967295); //@line 1633 "multibytecodec.c"
        var $58=HEAP[$57]; //@line 1633 "multibytecodec.c"
        var $59=(($58+24)&4294967295); //@line 1633 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 1633 "multibytecodec.c"
        var $61=HEAP[$pwrt]; //@line 1633 "multibytecodec.c"
        FUNCTION_TABLE[$60]($61); //@line 1633 "multibytecodec.c"
        __label__ = 9; break; //@line 1633 "multibytecodec.c"
      case 9: // $bb8
        var $62=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1635 "multibytecodec.c"
        var $63=((($62) + 1)&4294967295); //@line 1635 "multibytecodec.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$63; //@line 1635 "multibytecodec.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1635 "multibytecodec.c"
        __label__ = 10; break; //@line 1635 "multibytecodec.c"
      case 10: // $bb9
        var $64=HEAP[$0]; //@line 1623 "multibytecodec.c"
        HEAP[$retval]=$64; //@line 1623 "multibytecodec.c"
        __label__ = 11; break; //@line 1623 "multibytecodec.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 1623 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1623 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $self=__stackBase__+20;
        var $stream=__stackBase__+24;
        var $codec=__stackBase__+28;
        var $errors=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$codec]=0; //@line 1642 "multibytecodec.c"
        HEAP[$errors]=0; //@line 1643 "multibytecodec.c"
        var $1=HEAP[$args_addr]; //@line 1645 "multibytecodec.c"
        var $2=HEAP[$kwds_addr]; //@line 1645 "multibytecodec.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, ((__str46)&4294967295), ((_streamkwarglist)&4294967295), $stream, $errors); //@line 1645 "multibytecodec.c"
        var $4=((($3))|0)==0; //@line 1645 "multibytecodec.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1645 "multibytecodec.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1647 "multibytecodec.c"
        __label__ = 20; break; //@line 1647 "multibytecodec.c"
      case 2: // $bb1
        var $5=HEAP[$type_addr]; //@line 1649 "multibytecodec.c"
        var $6=(($5+152)&4294967295); //@line 1649 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 1649 "multibytecodec.c"
        var $8=HEAP[$type_addr]; //@line 1649 "multibytecodec.c"
        var $9=FUNCTION_TABLE[$7]($8, 0); //@line 1649 "multibytecodec.c"
        var $10=$9; //@line 1649 "multibytecodec.c"
        HEAP[$self]=$10; //@line 1649 "multibytecodec.c"
        var $11=HEAP[$self]; //@line 1650 "multibytecodec.c"
        var $12=($11)==0; //@line 1650 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1650 "multibytecodec.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1651 "multibytecodec.c"
        __label__ = 20; break; //@line 1651 "multibytecodec.c"
      case 4: // $bb3
        var $13=HEAP[$type_addr]; //@line 1653 "multibytecodec.c"
        var $14=$13; //@line 1653 "multibytecodec.c"
        var $15=_PyObject_GetAttrString($14, ((__str29)&4294967295)); //@line 1653 "multibytecodec.c"
        HEAP[$codec]=$15; //@line 1653 "multibytecodec.c"
        var $16=HEAP[$codec]; //@line 1654 "multibytecodec.c"
        var $17=($16)==0; //@line 1654 "multibytecodec.c"
        if ($17) { __label__ = 13; break; } else { __label__ = 5; break; } //@line 1654 "multibytecodec.c"
      case 5: // $bb4
        var $18=HEAP[$codec]; //@line 1656 "multibytecodec.c"
        var $19=(($18+4)&4294967295); //@line 1656 "multibytecodec.c"
        var $20=HEAP[$19]; //@line 1656 "multibytecodec.c"
        var $21=($20)!=(_MultibyteCodec_Type); //@line 1656 "multibytecodec.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1656 "multibytecodec.c"
      case 6: // $bb5
        var $22=HEAP[_PyExc_TypeError]; //@line 1657 "multibytecodec.c"
        _PyErr_SetString($22, ((__str30)&4294967295)); //@line 1657 "multibytecodec.c"
        __label__ = 13; break; //@line 1657 "multibytecodec.c"
      case 7: // $bb6
        var $23=HEAP[$codec]; //@line 1661 "multibytecodec.c"
        var $24=$23; //@line 1661 "multibytecodec.c"
        var $25=(($24+8)&4294967295); //@line 1661 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1661 "multibytecodec.c"
        var $27=HEAP[$self]; //@line 1661 "multibytecodec.c"
        var $28=(($27+8)&4294967295); //@line 1661 "multibytecodec.c"
        HEAP[$28]=$26; //@line 1661 "multibytecodec.c"
        var $29=HEAP[$stream]; //@line 1662 "multibytecodec.c"
        var $30=HEAP[$self]; //@line 1662 "multibytecodec.c"
        var $31=(($30+32)&4294967295); //@line 1662 "multibytecodec.c"
        HEAP[$31]=$29; //@line 1662 "multibytecodec.c"
        var $32=HEAP[$stream]; //@line 1663 "multibytecodec.c"
        var $33=(($32)&4294967295); //@line 1663 "multibytecodec.c"
        var $34=HEAP[$33]; //@line 1663 "multibytecodec.c"
        var $35=((($34) + 1)&4294967295); //@line 1663 "multibytecodec.c"
        var $36=(($32)&4294967295); //@line 1663 "multibytecodec.c"
        HEAP[$36]=$35; //@line 1663 "multibytecodec.c"
        var $37=HEAP[$self]; //@line 1664 "multibytecodec.c"
        var $38=(($37+28)&4294967295); //@line 1664 "multibytecodec.c"
        HEAP[$38]=0; //@line 1664 "multibytecodec.c"
        var $39=HEAP[$errors]; //@line 1665 "multibytecodec.c"
        var $40=_internal_error_callback($39); //@line 1665 "multibytecodec.c"
        var $41=HEAP[$self]; //@line 1665 "multibytecodec.c"
        var $42=(($41+20)&4294967295); //@line 1665 "multibytecodec.c"
        HEAP[$42]=$40; //@line 1665 "multibytecodec.c"
        var $43=HEAP[$self]; //@line 1666 "multibytecodec.c"
        var $44=(($43+20)&4294967295); //@line 1666 "multibytecodec.c"
        var $45=HEAP[$44]; //@line 1666 "multibytecodec.c"
        var $46=($45)==0; //@line 1666 "multibytecodec.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 8; break; } //@line 1666 "multibytecodec.c"
      case 8: // $bb7
        var $47=HEAP[$self]; //@line 1668 "multibytecodec.c"
        var $48=(($47+8)&4294967295); //@line 1668 "multibytecodec.c"
        var $49=HEAP[$48]; //@line 1668 "multibytecodec.c"
        var $50=(($49+16)&4294967295); //@line 1668 "multibytecodec.c"
        var $51=HEAP[$50]; //@line 1668 "multibytecodec.c"
        var $52=($51)!=0; //@line 1668 "multibytecodec.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1668 "multibytecodec.c"
      case 9: // $bb8
        var $53=HEAP[$self]; //@line 1668 "multibytecodec.c"
        var $54=(($53+8)&4294967295); //@line 1668 "multibytecodec.c"
        var $55=HEAP[$54]; //@line 1668 "multibytecodec.c"
        var $56=(($55+16)&4294967295); //@line 1668 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 1668 "multibytecodec.c"
        var $58=HEAP[$self]; //@line 1668 "multibytecodec.c"
        var $59=(($58+8)&4294967295); //@line 1668 "multibytecodec.c"
        var $60=HEAP[$59]; //@line 1668 "multibytecodec.c"
        var $61=(($60+4)&4294967295); //@line 1668 "multibytecodec.c"
        var $62=HEAP[$61]; //@line 1668 "multibytecodec.c"
        var $63=HEAP[$self]; //@line 1668 "multibytecodec.c"
        var $64=(($63+12)&4294967295); //@line 1668 "multibytecodec.c"
        var $65=FUNCTION_TABLE[$57]($64, $62); //@line 1668 "multibytecodec.c"
        var $66=((($65))|0)!=0; //@line 1668 "multibytecodec.c"
        if ($66) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 1668 "multibytecodec.c"
      case 10: // $bb9
        var $67=HEAP[$codec]; //@line 1672 "multibytecodec.c"
        var $68=(($67)&4294967295); //@line 1672 "multibytecodec.c"
        var $69=HEAP[$68]; //@line 1672 "multibytecodec.c"
        var $70=((($69) - 1)&4294967295); //@line 1672 "multibytecodec.c"
        var $71=HEAP[$codec]; //@line 1672 "multibytecodec.c"
        var $72=(($71)&4294967295); //@line 1672 "multibytecodec.c"
        HEAP[$72]=$70; //@line 1672 "multibytecodec.c"
        var $73=HEAP[$codec]; //@line 1672 "multibytecodec.c"
        var $74=(($73)&4294967295); //@line 1672 "multibytecodec.c"
        var $75=HEAP[$74]; //@line 1672 "multibytecodec.c"
        var $76=((($75))|0)==0; //@line 1672 "multibytecodec.c"
        if ($76) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1672 "multibytecodec.c"
      case 11: // $bb10
        var $77=HEAP[$codec]; //@line 1672 "multibytecodec.c"
        var $78=(($77+4)&4294967295); //@line 1672 "multibytecodec.c"
        var $79=HEAP[$78]; //@line 1672 "multibytecodec.c"
        var $80=(($79+24)&4294967295); //@line 1672 "multibytecodec.c"
        var $81=HEAP[$80]; //@line 1672 "multibytecodec.c"
        var $82=HEAP[$codec]; //@line 1672 "multibytecodec.c"
        FUNCTION_TABLE[$81]($82); //@line 1672 "multibytecodec.c"
        __label__ = 12; break; //@line 1672 "multibytecodec.c"
      case 12: // $bb11
        var $83=HEAP[$self]; //@line 1673 "multibytecodec.c"
        var $84=$83; //@line 1673 "multibytecodec.c"
        HEAP[$0]=$84; //@line 1673 "multibytecodec.c"
        __label__ = 20; break; //@line 1673 "multibytecodec.c"
      case 13: // $errorexit
        var $85=HEAP[$self]; //@line 1676 "multibytecodec.c"
        var $86=($85)!=0; //@line 1676 "multibytecodec.c"
        if ($86) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 1676 "multibytecodec.c"
      case 14: // $bb12
        var $87=HEAP[$self]; //@line 1676 "multibytecodec.c"
        var $88=$87; //@line 1676 "multibytecodec.c"
        var $89=(($88)&4294967295); //@line 1676 "multibytecodec.c"
        var $90=HEAP[$89]; //@line 1676 "multibytecodec.c"
        var $91=((($90) - 1)&4294967295); //@line 1676 "multibytecodec.c"
        var $92=(($88)&4294967295); //@line 1676 "multibytecodec.c"
        HEAP[$92]=$91; //@line 1676 "multibytecodec.c"
        var $93=(($88)&4294967295); //@line 1676 "multibytecodec.c"
        var $94=HEAP[$93]; //@line 1676 "multibytecodec.c"
        var $95=((($94))|0)==0; //@line 1676 "multibytecodec.c"
        if ($95) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1676 "multibytecodec.c"
      case 15: // $bb13
        var $96=HEAP[$self]; //@line 1676 "multibytecodec.c"
        var $97=$96; //@line 1676 "multibytecodec.c"
        var $98=(($97+4)&4294967295); //@line 1676 "multibytecodec.c"
        var $99=HEAP[$98]; //@line 1676 "multibytecodec.c"
        var $100=(($99+24)&4294967295); //@line 1676 "multibytecodec.c"
        var $101=HEAP[$100]; //@line 1676 "multibytecodec.c"
        var $102=HEAP[$self]; //@line 1676 "multibytecodec.c"
        var $103=$102; //@line 1676 "multibytecodec.c"
        FUNCTION_TABLE[$101]($103); //@line 1676 "multibytecodec.c"
        __label__ = 16; break; //@line 1676 "multibytecodec.c"
      case 16: // $bb14
        var $104=HEAP[$codec]; //@line 1677 "multibytecodec.c"
        var $105=($104)!=0; //@line 1677 "multibytecodec.c"
        if ($105) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 1677 "multibytecodec.c"
      case 17: // $bb15
        var $106=HEAP[$codec]; //@line 1677 "multibytecodec.c"
        var $107=(($106)&4294967295); //@line 1677 "multibytecodec.c"
        var $108=HEAP[$107]; //@line 1677 "multibytecodec.c"
        var $109=((($108) - 1)&4294967295); //@line 1677 "multibytecodec.c"
        var $110=HEAP[$codec]; //@line 1677 "multibytecodec.c"
        var $111=(($110)&4294967295); //@line 1677 "multibytecodec.c"
        HEAP[$111]=$109; //@line 1677 "multibytecodec.c"
        var $112=HEAP[$codec]; //@line 1677 "multibytecodec.c"
        var $113=(($112)&4294967295); //@line 1677 "multibytecodec.c"
        var $114=HEAP[$113]; //@line 1677 "multibytecodec.c"
        var $115=((($114))|0)==0; //@line 1677 "multibytecodec.c"
        if ($115) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1677 "multibytecodec.c"
      case 18: // $bb16
        var $116=HEAP[$codec]; //@line 1677 "multibytecodec.c"
        var $117=(($116+4)&4294967295); //@line 1677 "multibytecodec.c"
        var $118=HEAP[$117]; //@line 1677 "multibytecodec.c"
        var $119=(($118+24)&4294967295); //@line 1677 "multibytecodec.c"
        var $120=HEAP[$119]; //@line 1677 "multibytecodec.c"
        var $121=HEAP[$codec]; //@line 1677 "multibytecodec.c"
        FUNCTION_TABLE[$120]($121); //@line 1677 "multibytecodec.c"
        __label__ = 19; break; //@line 1677 "multibytecodec.c"
      case 19: // $bb17
        HEAP[$0]=0; //@line 1678 "multibytecodec.c"
        __label__ = 20; break; //@line 1678 "multibytecodec.c"
      case 20: // $bb18
        var $122=HEAP[$0]; //@line 1647 "multibytecodec.c"
        HEAP[$retval]=$122; //@line 1647 "multibytecodec.c"
        __label__ = 21; break; //@line 1647 "multibytecodec.c"
      case 21: // $return
        var $retval19=HEAP[$retval]; //@line 1647 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1647 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_init($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$0]=0; //@line 1684 "multibytecodec.c"
        var $1=HEAP[$0]; //@line 1684 "multibytecodec.c"
        HEAP[$retval]=$1; //@line 1684 "multibytecodec.c"
        __label__ = 1; break; //@line 1684 "multibytecodec.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1684 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1684 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_traverse($self, $visit, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $visit_addr=__stackBase__+4;
        var $arg_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $vret=__stackBase__+20;
        var $vret6=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$visit_addr]=$visit;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$self_addr]; //@line 1691 "multibytecodec.c"
        var $2=(($1+20)&4294967295); //@line 1691 "multibytecodec.c"
        var $3=HEAP[$2]; //@line 1691 "multibytecodec.c"
        var $4=($3)==0; //@line 1691 "multibytecodec.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1691 "multibytecodec.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1691 "multibytecodec.c"
        var $6=(($5+20)&4294967295); //@line 1691 "multibytecodec.c"
        var $7=HEAP[$6]; //@line 1691 "multibytecodec.c"
        var $8=($7) > 3; //@line 1691 "multibytecodec.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1691 "multibytecodec.c"
      case 2: // $bb1
        var $9=HEAP[$self_addr]; //@line 1692 "multibytecodec.c"
        var $10=(($9+20)&4294967295); //@line 1692 "multibytecodec.c"
        var $11=HEAP[$10]; //@line 1692 "multibytecodec.c"
        var $12=($11)!=0; //@line 1692 "multibytecodec.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1692 "multibytecodec.c"
      case 3: // $bb2
        var $13=HEAP[$self_addr]; //@line 1692 "multibytecodec.c"
        var $14=(($13+20)&4294967295); //@line 1692 "multibytecodec.c"
        var $15=HEAP[$14]; //@line 1692 "multibytecodec.c"
        var $16=HEAP[$visit_addr]; //@line 1692 "multibytecodec.c"
        var $17=HEAP[$arg_addr]; //@line 1692 "multibytecodec.c"
        var $18=FUNCTION_TABLE[$16]($15, $17); //@line 1692 "multibytecodec.c"
        HEAP[$vret]=$18; //@line 1692 "multibytecodec.c"
        var $19=HEAP[$vret]; //@line 1692 "multibytecodec.c"
        var $20=((($19))|0)!=0; //@line 1692 "multibytecodec.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1692 "multibytecodec.c"
      case 4: // $bb3
        var $21=HEAP[$vret]; //@line 1692 "multibytecodec.c"
        HEAP[$0]=$21; //@line 1692 "multibytecodec.c"
        __label__ = 9; break; //@line 1692 "multibytecodec.c"
      case 5: // $bb4
        var $22=HEAP[$self_addr]; //@line 1693 "multibytecodec.c"
        var $23=(($22+32)&4294967295); //@line 1693 "multibytecodec.c"
        var $24=HEAP[$23]; //@line 1693 "multibytecodec.c"
        var $25=($24)!=0; //@line 1693 "multibytecodec.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1693 "multibytecodec.c"
      case 6: // $bb5
        var $26=HEAP[$self_addr]; //@line 1693 "multibytecodec.c"
        var $27=(($26+32)&4294967295); //@line 1693 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 1693 "multibytecodec.c"
        var $29=HEAP[$visit_addr]; //@line 1693 "multibytecodec.c"
        var $30=HEAP[$arg_addr]; //@line 1693 "multibytecodec.c"
        var $31=FUNCTION_TABLE[$29]($28, $30); //@line 1693 "multibytecodec.c"
        HEAP[$vret6]=$31; //@line 1693 "multibytecodec.c"
        var $32=HEAP[$vret6]; //@line 1693 "multibytecodec.c"
        var $33=((($32))|0)!=0; //@line 1693 "multibytecodec.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1693 "multibytecodec.c"
      case 7: // $bb7
        var $34=HEAP[$vret6]; //@line 1693 "multibytecodec.c"
        HEAP[$0]=$34; //@line 1693 "multibytecodec.c"
        __label__ = 9; break; //@line 1693 "multibytecodec.c"
      case 8: // $bb8
        HEAP[$0]=0; //@line 1694 "multibytecodec.c"
        __label__ = 9; break; //@line 1694 "multibytecodec.c"
      case 9: // $bb9
        var $35=HEAP[$0]; //@line 1692 "multibytecodec.c"
        HEAP[$retval]=$35; //@line 1692 "multibytecodec.c"
        __label__ = 10; break; //@line 1692 "multibytecodec.c"
      case 10: // $return
        var $retval10=HEAP[$retval]; //@line 1692 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1692 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mbstreamwriter_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 1700 "multibytecodec.c"
        var $1=$0; //@line 1700 "multibytecodec.c"
        _PyObject_GC_UnTrack($1); //@line 1700 "multibytecodec.c"
        var $2=HEAP[$self_addr]; //@line 1701 "multibytecodec.c"
        var $3=(($2+20)&4294967295); //@line 1701 "multibytecodec.c"
        var $4=HEAP[$3]; //@line 1701 "multibytecodec.c"
        var $5=($4)!=0; //@line 1701 "multibytecodec.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 1701 "multibytecodec.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 1701 "multibytecodec.c"
        var $7=(($6+20)&4294967295); //@line 1701 "multibytecodec.c"
        var $8=HEAP[$7]; //@line 1701 "multibytecodec.c"
        var $9=($8)==0; //@line 1701 "multibytecodec.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1701 "multibytecodec.c"
      case 2: // $bb1
        var $10=HEAP[$self_addr]; //@line 1701 "multibytecodec.c"
        var $11=(($10+20)&4294967295); //@line 1701 "multibytecodec.c"
        var $12=HEAP[$11]; //@line 1701 "multibytecodec.c"
        var $13=($12) > 3; //@line 1701 "multibytecodec.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1701 "multibytecodec.c"
      case 3: // $bb2
        var $14=HEAP[$self_addr]; //@line 1701 "multibytecodec.c"
        var $15=(($14+20)&4294967295); //@line 1701 "multibytecodec.c"
        var $16=HEAP[$15]; //@line 1701 "multibytecodec.c"
        var $17=(($16)&4294967295); //@line 1701 "multibytecodec.c"
        var $18=HEAP[$17]; //@line 1701 "multibytecodec.c"
        var $19=((($18) - 1)&4294967295); //@line 1701 "multibytecodec.c"
        var $20=(($16)&4294967295); //@line 1701 "multibytecodec.c"
        HEAP[$20]=$19; //@line 1701 "multibytecodec.c"
        var $21=(($16)&4294967295); //@line 1701 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 1701 "multibytecodec.c"
        var $23=((($22))|0)==0; //@line 1701 "multibytecodec.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1701 "multibytecodec.c"
      case 4: // $bb3
        var $24=HEAP[$self_addr]; //@line 1701 "multibytecodec.c"
        var $25=(($24+20)&4294967295); //@line 1701 "multibytecodec.c"
        var $26=HEAP[$25]; //@line 1701 "multibytecodec.c"
        var $27=(($26+4)&4294967295); //@line 1701 "multibytecodec.c"
        var $28=HEAP[$27]; //@line 1701 "multibytecodec.c"
        var $29=(($28+24)&4294967295); //@line 1701 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 1701 "multibytecodec.c"
        var $31=HEAP[$self_addr]; //@line 1701 "multibytecodec.c"
        var $32=(($31+20)&4294967295); //@line 1701 "multibytecodec.c"
        var $33=HEAP[$32]; //@line 1701 "multibytecodec.c"
        FUNCTION_TABLE[$30]($33); //@line 1701 "multibytecodec.c"
        __label__ = 5; break; //@line 1701 "multibytecodec.c"
      case 5: // $bb4
        var $34=HEAP[$self_addr]; //@line 1702 "multibytecodec.c"
        var $35=(($34+32)&4294967295); //@line 1702 "multibytecodec.c"
        var $36=HEAP[$35]; //@line 1702 "multibytecodec.c"
        var $37=($36)!=0; //@line 1702 "multibytecodec.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1702 "multibytecodec.c"
      case 6: // $bb5
        var $38=HEAP[$self_addr]; //@line 1702 "multibytecodec.c"
        var $39=(($38+32)&4294967295); //@line 1702 "multibytecodec.c"
        var $40=HEAP[$39]; //@line 1702 "multibytecodec.c"
        var $41=(($40)&4294967295); //@line 1702 "multibytecodec.c"
        var $42=HEAP[$41]; //@line 1702 "multibytecodec.c"
        var $43=((($42) - 1)&4294967295); //@line 1702 "multibytecodec.c"
        var $44=(($40)&4294967295); //@line 1702 "multibytecodec.c"
        HEAP[$44]=$43; //@line 1702 "multibytecodec.c"
        var $45=(($40)&4294967295); //@line 1702 "multibytecodec.c"
        var $46=HEAP[$45]; //@line 1702 "multibytecodec.c"
        var $47=((($46))|0)==0; //@line 1702 "multibytecodec.c"
        if ($47) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1702 "multibytecodec.c"
      case 7: // $bb6
        var $48=HEAP[$self_addr]; //@line 1702 "multibytecodec.c"
        var $49=(($48+32)&4294967295); //@line 1702 "multibytecodec.c"
        var $50=HEAP[$49]; //@line 1702 "multibytecodec.c"
        var $51=(($50+4)&4294967295); //@line 1702 "multibytecodec.c"
        var $52=HEAP[$51]; //@line 1702 "multibytecodec.c"
        var $53=(($52+24)&4294967295); //@line 1702 "multibytecodec.c"
        var $54=HEAP[$53]; //@line 1702 "multibytecodec.c"
        var $55=HEAP[$self_addr]; //@line 1702 "multibytecodec.c"
        var $56=(($55+32)&4294967295); //@line 1702 "multibytecodec.c"
        var $57=HEAP[$56]; //@line 1702 "multibytecodec.c"
        FUNCTION_TABLE[$54]($57); //@line 1702 "multibytecodec.c"
        __label__ = 8; break; //@line 1702 "multibytecodec.c"
      case 8: // $bb7
        var $58=HEAP[$self_addr]; //@line 1703 "multibytecodec.c"
        var $59=$58; //@line 1703 "multibytecodec.c"
        var $60=(($59+4)&4294967295); //@line 1703 "multibytecodec.c"
        var $61=HEAP[$60]; //@line 1703 "multibytecodec.c"
        var $62=(($61+160)&4294967295); //@line 1703 "multibytecodec.c"
        var $63=HEAP[$62]; //@line 1703 "multibytecodec.c"
        var $64=HEAP[$self_addr]; //@line 1703 "multibytecodec.c"
        var $65=$64; //@line 1703 "multibytecodec.c"
        FUNCTION_TABLE[$63]($65); //@line 1703 "multibytecodec.c"
        __label__ = 9; break; //@line 1704 "multibytecodec.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 1704 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function ___create_codec($ignore, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ignore_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $self=__stackBase__+16;
        var $codec=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$ignore_addr]=$ignore;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 1777 "multibytecodec.c"
        var $2=_PyCapsule_IsValid($1, ((__str49)&4294967295)); //@line 1777 "multibytecodec.c"
        var $3=((($2))|0)==0; //@line 1777 "multibytecodec.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1777 "multibytecodec.c"
      case 1: // $bb
        var $4=HEAP[_PyExc_ValueError]; //@line 1778 "multibytecodec.c"
        _PyErr_SetString($4, ((__str50)&4294967295)); //@line 1778 "multibytecodec.c"
        HEAP[$0]=0; //@line 1779 "multibytecodec.c"
        __label__ = 8; break; //@line 1779 "multibytecodec.c"
      case 2: // $bb1
        var $5=HEAP[$arg_addr]; //@line 1782 "multibytecodec.c"
        var $6=_PyCapsule_GetPointer($5, ((__str49)&4294967295)); //@line 1782 "multibytecodec.c"
        var $7=$6; //@line 1782 "multibytecodec.c"
        HEAP[$codec]=$7; //@line 1782 "multibytecodec.c"
        var $8=HEAP[$codec]; //@line 1783 "multibytecodec.c"
        var $9=(($8+8)&4294967295); //@line 1783 "multibytecodec.c"
        var $10=HEAP[$9]; //@line 1783 "multibytecodec.c"
        var $11=($10)!=0; //@line 1783 "multibytecodec.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1783 "multibytecodec.c"
      case 3: // $bb2
        var $12=HEAP[$codec]; //@line 1783 "multibytecodec.c"
        var $13=(($12+8)&4294967295); //@line 1783 "multibytecodec.c"
        var $14=HEAP[$13]; //@line 1783 "multibytecodec.c"
        var $15=HEAP[$codec]; //@line 1783 "multibytecodec.c"
        var $16=(($15+4)&4294967295); //@line 1783 "multibytecodec.c"
        var $17=HEAP[$16]; //@line 1783 "multibytecodec.c"
        var $18=FUNCTION_TABLE[$14]($17); //@line 1783 "multibytecodec.c"
        var $19=((($18))|0)!=0; //@line 1783 "multibytecodec.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1783 "multibytecodec.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 1784 "multibytecodec.c"
        __label__ = 8; break; //@line 1784 "multibytecodec.c"
      case 5: // $bb4
        var $20=__PyObject_New(_MultibyteCodec_Type); //@line 1786 "multibytecodec.c"
        var $21=$20; //@line 1786 "multibytecodec.c"
        HEAP[$self]=$21; //@line 1786 "multibytecodec.c"
        var $22=HEAP[$self]; //@line 1787 "multibytecodec.c"
        var $23=($22)==0; //@line 1787 "multibytecodec.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1787 "multibytecodec.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 1788 "multibytecodec.c"
        __label__ = 8; break; //@line 1788 "multibytecodec.c"
      case 7: // $bb6
        var $24=HEAP[$self]; //@line 1789 "multibytecodec.c"
        var $25=(($24+8)&4294967295); //@line 1789 "multibytecodec.c"
        var $26=HEAP[$codec]; //@line 1789 "multibytecodec.c"
        HEAP[$25]=$26; //@line 1789 "multibytecodec.c"
        var $27=HEAP[$self]; //@line 1791 "multibytecodec.c"
        var $28=$27; //@line 1791 "multibytecodec.c"
        HEAP[$0]=$28; //@line 1791 "multibytecodec.c"
        __label__ = 8; break; //@line 1791 "multibytecodec.c"
      case 8: // $bb7
        var $29=HEAP[$0]; //@line 1779 "multibytecodec.c"
        HEAP[$retval]=$29; //@line 1779 "multibytecodec.c"
        __label__ = 9; break; //@line 1779 "multibytecodec.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 1779 "multibytecodec.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1779 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_multibytecodec() {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $i=__stackBase__;
        var $m=__stackBase__+4;
        var $typelist=__stackBase__+8;
        var $_alloca_point_=0;
        var $0=(($typelist)&4294967295); //@line 1810 "multibytecodec.c"
        var $1=HEAP[((_C_140_10927)&4294967295)]; //@line 1810 "multibytecodec.c"
        HEAP[$0]=$1; //@line 1810 "multibytecodec.c"
        var $2=(($typelist+4)&4294967295); //@line 1810 "multibytecodec.c"
        var $3=HEAP[((_C_140_10927+4)&4294967295)]; //@line 1810 "multibytecodec.c"
        HEAP[$2]=$3; //@line 1810 "multibytecodec.c"
        var $4=(($typelist+8)&4294967295); //@line 1810 "multibytecodec.c"
        var $5=HEAP[((_C_140_10927+8)&4294967295)]; //@line 1810 "multibytecodec.c"
        HEAP[$4]=$5; //@line 1810 "multibytecodec.c"
        var $6=(($typelist+12)&4294967295); //@line 1810 "multibytecodec.c"
        var $7=HEAP[((_C_140_10927+12)&4294967295)]; //@line 1810 "multibytecodec.c"
        HEAP[$6]=$7; //@line 1810 "multibytecodec.c"
        var $8=(($typelist+16)&4294967295); //@line 1810 "multibytecodec.c"
        var $9=HEAP[((_C_140_10927+16)&4294967295)]; //@line 1810 "multibytecodec.c"
        HEAP[$8]=$9; //@line 1810 "multibytecodec.c"
        var $10=_PyType_Ready(_MultibyteCodec_Type); //@line 1812 "multibytecodec.c"
        var $11=((($10))|0) < 0; //@line 1812 "multibytecodec.c"
        if ($11) { __label__ = 8; break; } else { __label__ = 1; break; } //@line 1812 "multibytecodec.c"
      case 1: // $bb
        var $12=_Py_InitModule4(((__str52)&4294967295), ___methods, 0, 0, 1013); //@line 1815 "multibytecodec.c"
        HEAP[$m]=$12; //@line 1815 "multibytecodec.c"
        var $13=HEAP[$m]; //@line 1816 "multibytecodec.c"
        var $14=($13)==0; //@line 1816 "multibytecodec.c"
        if ($14) { __label__ = 8; break; } else { __label__ = 2; break; } //@line 1816 "multibytecodec.c"
      case 2: // $bb1
        HEAP[$i]=0; //@line 1819 "multibytecodec.c"
        __label__ = 5; break; //@line 1819 "multibytecodec.c"
      case 3: // $bb2
        var $15=HEAP[$i]; //@line 1820 "multibytecodec.c"
        var $16=(($typelist+$15*4)&4294967295); //@line 1820 "multibytecodec.c"
        var $17=HEAP[$16]; //@line 1820 "multibytecodec.c"
        var $18=_PyType_Ready($17); //@line 1820 "multibytecodec.c"
        var $19=((($18))|0) < 0; //@line 1820 "multibytecodec.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 1820 "multibytecodec.c"
      case 4: // $bb3
        var $20=HEAP[$i]; //@line 1822 "multibytecodec.c"
        var $21=(($typelist+$20*4)&4294967295); //@line 1822 "multibytecodec.c"
        var $22=HEAP[$21]; //@line 1822 "multibytecodec.c"
        var $23=$22; //@line 1822 "multibytecodec.c"
        var $24=(($23)&4294967295); //@line 1822 "multibytecodec.c"
        var $25=HEAP[$24]; //@line 1822 "multibytecodec.c"
        var $26=((($25) + 1)&4294967295); //@line 1822 "multibytecodec.c"
        var $27=(($23)&4294967295); //@line 1822 "multibytecodec.c"
        HEAP[$27]=$26; //@line 1822 "multibytecodec.c"
        var $28=HEAP[$i]; //@line 1823 "multibytecodec.c"
        var $29=(($typelist+$28*4)&4294967295); //@line 1823 "multibytecodec.c"
        var $30=HEAP[$29]; //@line 1823 "multibytecodec.c"
        var $31=$30; //@line 1823 "multibytecodec.c"
        var $32=HEAP[$i]; //@line 1823 "multibytecodec.c"
        var $33=(($typelist+$32*4)&4294967295); //@line 1823 "multibytecodec.c"
        var $34=HEAP[$33]; //@line 1823 "multibytecodec.c"
        var $35=(($34+12)&4294967295); //@line 1823 "multibytecodec.c"
        var $36=HEAP[$35]; //@line 1823 "multibytecodec.c"
        var $37=HEAP[$m]; //@line 1823 "multibytecodec.c"
        var $38=_PyModule_AddObject($37, $36, $31); //@line 1823 "multibytecodec.c"
        var $39=HEAP[$i]; //@line 1819 "multibytecodec.c"
        var $40=((($39) + 1)&4294967295); //@line 1819 "multibytecodec.c"
        HEAP[$i]=$40; //@line 1819 "multibytecodec.c"
        __label__ = 5; break; //@line 1819 "multibytecodec.c"
      case 5: // $bb4
        var $41=HEAP[$i]; //@line 1819 "multibytecodec.c"
        var $42=(($typelist+$41*4)&4294967295); //@line 1819 "multibytecodec.c"
        var $43=HEAP[$42]; //@line 1819 "multibytecodec.c"
        var $44=($43)!=0; //@line 1819 "multibytecodec.c"
        if ($44) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1819 "multibytecodec.c"
      case 6: // $bb5
        var $45=_PyErr_Occurred(); //@line 1827 "multibytecodec.c"
        var $46=($45)!=0; //@line 1827 "multibytecodec.c"
        if ($46) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1827 "multibytecodec.c"
      case 7: // $bb6
        _Py_FatalError(((__str53)&4294967295)); //@line 1828 "multibytecodec.c"
        __label__ = 8; break; //@line 1828 "multibytecodec.c"
      case 8: // $bb7
        __label__ = 9; break; //@line 1813 "multibytecodec.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 1813 "multibytecodec.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_multibytecodec"] = _init_multibytecodec;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_codecctx_errors_get,0,_codecctx_errors_set,0,_MultibyteCodec_Encode,0,_MultibyteCodec_Decode,0,_multibytecodec_dealloc,0,_PyObject_GenericGetAttr,0,_mbiencoder_encode,0,_mbiencoder_reset,0,_mbiencoder_dealloc,0,_mbiencoder_traverse,0,_mbiencoder_init,0,_mbiencoder_new,0,_mbidecoder_decode,0,_mbidecoder_reset,0,_mbidecoder_dealloc,0,_mbidecoder_traverse,0,_mbidecoder_init,0,_mbidecoder_new,0,_mbstreamreader_read,0,_mbstreamreader_readline,0,_mbstreamreader_readlines,0,_mbstreamreader_reset,0,_mbstreamreader_dealloc,0,_mbstreamreader_traverse,0,_mbstreamreader_init,0,_mbstreamreader_new,0,_mbstreamwriter_write,0,_mbstreamwriter_writelines,0,_mbstreamwriter_reset,0,_mbstreamwriter_dealloc,0,_mbstreamwriter_traverse,0,_mbstreamwriter_init,0,_mbstreamwriter_new,0,___create_codec,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_MultibyteCodec_Encode__doc__=allocate([73,46,101,110,99,111,100,101,40,117,110,105,99,111,100,101,91,44,32,101,114,114,111,114,115,93,41,32,45,62,32,40,115,116,114,105,110,103,44,32,108,101,110,103,116,104,32,99,111,110,115,117,109,101,100,41,10,10,82,101,116,117,114,110,32,97,110,32,101,110,99,111,100,101,100,32,115,116,114,105,110,103,32,118,101,114,115,105,111,110,32,111,102,32,96,117,110,105,99,111,100,101,39,46,32,101,114,114,111,114,115,32,109,97,121,32,98,101,32,103,105,118,101,110,32,116,111,10,115,101,116,32,97,32,100,105,102,102,101,114,101,110,116,32,101,114,114,111,114,32,104,97,110,100,108,105,110,103,32,115,99,104,101,109,101,46,32,68,101,102,97,117,108,116,32,105,115,32,39,115,116,114,105,99,116,39,32,109,101,97,110,105,110,103,32,116,104,97,116,10,101,110,99,111,100,105,110,103,32,101,114,114,111,114,115,32,114,97,105,115,101,32,97,32,85,110,105,99,111,100,101,69,110,99,111,100,101,69,114,114,111,114,46,32,79,116,104,101,114,32,112,111,115,115,105,98,108,101,32,118,97,108,117,101,115,32,97,114,101,10,39,105,103,110,111,114,101,39,44,32,39,114,101,112,108,97,99,101,39,32,97,110,100,32,39,120,109,108,99,104,97,114,114,101,102,114,101,112,108,97,99,101,39,32,97,115,32,119,101,108,108,32,97,115,32,97,110,121,32,111,116,104,101,114,32,110,97,109,101,10,114,101,103,105,115,116,101,114,101,100,32,119,105,116,104,32,99,111,100,101,99,115,46,114,101,103,105,115,116,101,114,95,101,114,114,111,114,32,116,104,97,116,32,99,97,110,32,104,97,110,100,108,101,32,85,110,105,99,111,100,101,69,110,99,111,100,101,69,114,114,111,114,115,46,0] /* I.encode(unicode[, e */, "i8", ALLOC_NORMAL);
_MultibyteCodec_Decode__doc__=allocate([73,46,100,101,99,111,100,101,40,115,116,114,105,110,103,91,44,32,101,114,114,111,114,115,93,41,32,45,62,32,40,117,110,105,99,111,100,101,111,98,106,101,99,116,44,32,108,101,110,103,116,104,32,99,111,110,115,117,109,101,100,41,10,10,68,101,99,111,100,101,115,32,96,115,116,114,105,110,103,39,32,117,115,105,110,103,32,73,44,32,97,110,32,77,117,108,116,105,98,121,116,101,67,111,100,101,99,32,105,110,115,116,97,110,99,101,46,32,101,114,114,111,114,115,32,109,97,121,32,98,101,32,103,105,118,101,110,10,116,111,32,115,101,116,32,97,32,100,105,102,102,101,114,101,110,116,32,101,114,114,111,114,32,104,97,110,100,108,105,110,103,32,115,99,104,101,109,101,46,32,68,101,102,97,117,108,116,32,105,115,32,39,115,116,114,105,99,116,39,32,109,101,97,110,105,110,103,10,116,104,97,116,32,101,110,99,111,100,105,110,103,32,101,114,114,111,114,115,32,114,97,105,115,101,32,97,32,85,110,105,99,111,100,101,68,101,99,111,100,101,69,114,114,111,114,46,32,79,116,104,101,114,32,112,111,115,115,105,98,108,101,32,118,97,108,117,101,115,10,97,114,101,32,39,105,103,110,111,114,101,39,32,97,110,100,32,39,114,101,112,108,97,99,101,39,32,97,115,32,119,101,108,108,32,97,115,32,97,110,121,32,111,116,104,101,114,32,110,97,109,101,32,114,101,103,105,115,116,101,114,101,100,32,119,105,116,104,10,99,111,100,101,99,115,46,114,101,103,105,115,116,101,114,95,101,114,114,111,114,32,116,104,97,116,32,105,115,32,97,98,108,101,32,116,111,32,104,97,110,100,108,101,32,85,110,105,99,111,100,101,68,101,99,111,100,101,69,114,114,111,114,115,46,0] /* I.decode(string[, er */, "i8", ALLOC_NORMAL);
_codeckwarglist=allocate(12, "i8*", ALLOC_NORMAL);
__str=allocate([105,110,112,117,116,0] /* input\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([101,114,114,111,114,115,0] /* errors\00 */, "i8", ALLOC_NORMAL);
_incnewkwarglist=allocate(8, "i8*", ALLOC_NORMAL);
_incrementalkwarglist=allocate(12, "i8*", ALLOC_NORMAL);
__str2=allocate([102,105,110,97,108,0] /* final\00 */, "i8", ALLOC_NORMAL);
_streamkwarglist=allocate(12, "i8*", ALLOC_NORMAL);
__str3=allocate([115,116,114,101,97,109,0] /* stream\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([115,116,114,105,99,116,0] /* strict\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([105,103,110,111,114,101,0] /* ignore\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([114,101,112,108,97,99,101,0] /* replace\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,101,114,114,111,114,115,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,55,41,41,41,32,33,61,32,48,41,0] /* ((((((PyObject_)(err */, "i8", ALLOC_NORMAL);
__str8=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,99,106,107,99,111,100,101,99,115,47,109,117,108,116,105,98,121,116,101,99,111,100,101,99,46,99,0] /* ../cpython/Modules/c */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8537=allocate([99,97,108,108,95,101,114,114,111,114,95,99,97,108,108,98,97,99,107,0] /* call_error_callback\ */, "i8", ALLOC_NORMAL);
__str9=allocate([101,114,114,111,114,115,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0] /* errors must be a str */, "i8", ALLOC_NORMAL);
__str10=allocate([104,111,119,32,116,111,32,116,114,101,97,116,32,101,114,114,111,114,115,0] /* how to treat errors\ */, "i8", ALLOC_NORMAL);
_codecctx_getsets=allocate(40, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str11=allocate([105,108,108,101,103,97,108,32,109,117,108,116,105,98,121,116,101,32,115,101,113,117,101,110,99,101,0] /* illegal multibyte se */, "i8", ALLOC_NORMAL);
__str12=allocate([105,110,99,111,109,112,108,101,116,101,32,109,117,108,116,105,98,121,116,101,32,115,101,113,117,101,110,99,101,0] /* incomplete multibyte */, "i8", ALLOC_NORMAL);
__str13=allocate([105,110,116,101,114,110,97,108,32,99,111,100,101,99,32,101,114,114,111,114,0] /* internal codec error */, "i8", ALLOC_NORMAL);
__str14=allocate([117,110,107,110,111,119,110,32,114,117,110,116,105,109,101,32,101,114,114,111,114,0] /* unknown runtime erro */, "i8", ALLOC_NORMAL);
__str15=allocate([101,110,99,111,100,105,110,103,32,101,114,114,111,114,32,104,97,110,100,108,101,114,32,109,117,115,116,32,114,101,116,117,114,110,32,40,117,110,105,99,111,100,101,44,32,105,110,116,41,32,116,117,112,108,101,0] /* encoding error handl */, "i8", ALLOC_NORMAL);
__str16=allocate([112,111,115,105,116,105,111,110,32,37,122,100,32,102,114,111,109,32,101,114,114,111,114,32,104,97,110,100,108,101,114,32,111,117,116,32,111,102,32,98,111,117,110,100,115,0] /* position %zd from er */, "i8", ALLOC_NORMAL);
__str17=allocate([100,101,99,111,100,105,110,103,32,101,114,114,111,114,32,104,97,110,100,108,101,114,32,109,117,115,116,32,114,101,116,117,114,110,32,40,117,110,105,99,111,100,101,44,32,105,110,116,41,32,116,117,112,108,101,0] /* decoding error handl */, "i8", ALLOC_NORMAL);
__str18=allocate(1, "i8", ALLOC_NORMAL);
__str19=allocate([79,124,122,58,101,110,99,111,100,101,0] /* O|z:encode\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([99,111,117,108,100,110,39,116,32,99,111,110,118,101,114,116,32,116,104,101,32,111,98,106,101,99,116,32,116,111,32,117,110,105,99,111,100,101,46,0] /* couldn't convert the */, "i8", ALLOC_NORMAL);
__str21=allocate([115,42,124,122,58,100,101,99,111,100,101,0] /* s_|z:decode\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([101,110,99,111,100,101,0] /* encode\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([100,101,99,111,100,101,0] /* decode\00 */, "i8", ALLOC_NORMAL);
_multibytecodec_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str24=allocate([77,117,108,116,105,98,121,116,101,67,111,100,101,99,0] /* MultibyteCodec\00 */, "i8", ALLOC_NORMAL);
_MultibyteCodec_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str25=allocate([112,101,110,100,105,110,103,32,98,117,102,102,101,114,32,111,118,101,114,102,108,111,119,0] /* pending buffer overf */, "i8", ALLOC_NORMAL);
__str26=allocate([79,124,105,58,101,110,99,111,100,101,0] /* O|i:encode\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([114,101,115,101,116,0] /* reset\00 */, "i8", ALLOC_NORMAL);
_mbiencoder_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str28=allocate([124,115,58,73,110,99,114,101,109,101,110,116,97,108,69,110,99,111,100,101,114,0] /* |s:IncrementalEncode */, "i8", ALLOC_NORMAL);
__str29=allocate([99,111,100,101,99,0] /* codec\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([99,111,100,101,99,32,105,115,32,117,110,101,120,112,101,99,116,101,100,32,116,121,112,101,0] /* codec is unexpected  */, "i8", ALLOC_NORMAL);
__str31=allocate([77,117,108,116,105,98,121,116,101,73,110,99,114,101,109,101,110,116,97,108,69,110,99,111,100,101,114,0] /* MultibyteIncremental */, "i8", ALLOC_NORMAL);
_MultibyteIncrementalEncoder_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str32=allocate([115,42,124,105,58,100,101,99,111,100,101,0] /* s_|i:decode\00 */, "i8", ALLOC_NORMAL);
_mbidecoder_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str33=allocate([124,115,58,73,110,99,114,101,109,101,110,116,97,108,68,101,99,111,100,101,114,0] /* |s:IncrementalDecode */, "i8", ALLOC_NORMAL);
__str34=allocate([77,117,108,116,105,98,121,116,101,73,110,99,114,101,109,101,110,116,97,108,68,101,99,111,100,101,114,0] /* MultibyteIncremental */, "i8", ALLOC_NORMAL);
_MultibyteIncrementalDecoder_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str35=allocate([105,0] /* i\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([115,116,114,101,97,109,32,102,117,110,99,116,105,111,110,32,114,101,116,117,114,110,101,100,32,97,32,110,111,110,45,115,116,114,105,110,103,32,111,98,106,101,99,116,0] /* stream function retu */, "i8", ALLOC_NORMAL);
__str37=allocate([114,101,97,100,0] /* read\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([97,114,103,32,49,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,101,114,0] /* arg 1 must be an int */, "i8", ALLOC_NORMAL);
__str39=allocate([114,101,97,100,108,105,110,101,0] /* readline\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([114,101,97,100,108,105,110,101,115,0] /* readlines\00 */, "i8", ALLOC_NORMAL);
_mbstreamreader_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_mbstreamreader_members=allocate([0, 0, 0, 0, 6, 0, 0, 0, 36, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str41=allocate([79,124,115,58,83,116,114,101,97,109,82,101,97,100,101,114,0] /* O|s:StreamReader\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([77,117,108,116,105,98,121,116,101,83,116,114,101,97,109,82,101,97,100,101,114,0] /* MultibyteStreamReade */, "i8", ALLOC_NORMAL);
_MultibyteStreamReader_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str43=allocate([119,114,105,116,101,0] /* write\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([79,0] /* O\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([97,114,103,32,109,117,115,116,32,98,101,32,97,32,115,101,113,117,101,110,99,101,32,111,98,106,101,99,116,0] /* arg must be a sequen */, "i8", ALLOC_NORMAL);
__str46=allocate([79,124,115,58,83,116,114,101,97,109,87,114,105,116,101,114,0] /* O|s:StreamWriter\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([119,114,105,116,101,108,105,110,101,115,0] /* writelines\00 */, "i8", ALLOC_NORMAL);
_mbstreamwriter_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_mbstreamwriter_members=allocate([0, 0, 0, 0, 6, 0, 0, 0, 32, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str48=allocate([77,117,108,116,105,98,121,116,101,83,116,114,101,97,109,87,114,105,116,101,114,0] /* MultibyteStreamWrite */, "i8", ALLOC_NORMAL);
_MultibyteStreamWriter_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str49=allocate([109,117,108,116,105,98,121,116,101,99,111,100,101,99,46,95,95,109,97,112,95,42,0] /* multibytecodec.__map */, "i8", ALLOC_NORMAL);
__str50=allocate([97,114,103,117,109,101,110,116,32,116,121,112,101,32,105,110,118,97,108,105,100,0] /* argument type invali */, "i8", ALLOC_NORMAL);
__str51=allocate([95,95,99,114,101,97,116,101,95,99,111,100,101,99,0] /* __create_codec\00 */, "i8", ALLOC_NORMAL);
___methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_C_140_10927=allocate(20, "%struct._typeobject*", ALLOC_NORMAL);
__str52=allocate([95,109,117,108,116,105,98,121,116,101,99,111,100,101,99,0] /* _multibytecodec\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([99,97,110,39,116,32,105,110,105,116,105,97,108,105,122,101,32,116,104,101,32,95,109,117,108,116,105,98,121,116,101,99,111,100,101,99,32,109,111,100,117,108,101,0] /* can't initialize the */, "i8", ALLOC_NORMAL);
HEAP[_codeckwarglist]=((__str)&4294967295);
HEAP[_codeckwarglist+4]=((__str1)&4294967295);
HEAP[_incnewkwarglist]=((__str1)&4294967295);
HEAP[_incrementalkwarglist]=((__str)&4294967295);
HEAP[_incrementalkwarglist+4]=((__str2)&4294967295);
HEAP[_streamkwarglist]=((__str3)&4294967295);
HEAP[_streamkwarglist+4]=((__str1)&4294967295);
HEAP[_codecctx_getsets]=((__str1)&4294967295);
HEAP[_codecctx_getsets+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_codecctx_getsets+8]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_codecctx_getsets+12]=((__str10)&4294967295);
HEAP[_multibytecodec_methods]=((__str22)&4294967295);
HEAP[_multibytecodec_methods+4]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_multibytecodec_methods+12]=((_MultibyteCodec_Encode__doc__)&4294967295);
HEAP[_multibytecodec_methods+16]=((__str23)&4294967295);
HEAP[_multibytecodec_methods+20]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_multibytecodec_methods+28]=((_MultibyteCodec_Decode__doc__)&4294967295);
HEAP[_MultibyteCodec_Type+12]=((__str24)&4294967295);
HEAP[_MultibyteCodec_Type+24]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_MultibyteCodec_Type+72]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_MultibyteCodec_Type+116]=((_multibytecodec_methods)&4294967295);
HEAP[_mbiencoder_methods]=((__str22)&4294967295);
HEAP[_mbiencoder_methods+4]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_mbiencoder_methods+16]=((__str27)&4294967295);
HEAP[_mbiencoder_methods+20]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_MultibyteIncrementalEncoder_Type+12]=((__str31)&4294967295);
HEAP[_MultibyteIncrementalEncoder_Type+24]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_MultibyteIncrementalEncoder_Type+72]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_MultibyteIncrementalEncoder_Type+92]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_MultibyteIncrementalEncoder_Type+116]=((_mbiencoder_methods)&4294967295);
HEAP[_MultibyteIncrementalEncoder_Type+124]=_codecctx_getsets;
HEAP[_MultibyteIncrementalEncoder_Type+148]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_MultibyteIncrementalEncoder_Type+156]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_mbidecoder_methods]=((__str23)&4294967295);
HEAP[_mbidecoder_methods+4]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_mbidecoder_methods+16]=((__str27)&4294967295);
HEAP[_mbidecoder_methods+20]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_MultibyteIncrementalDecoder_Type+12]=((__str34)&4294967295);
HEAP[_MultibyteIncrementalDecoder_Type+24]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_MultibyteIncrementalDecoder_Type+72]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_MultibyteIncrementalDecoder_Type+92]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_MultibyteIncrementalDecoder_Type+116]=((_mbidecoder_methods)&4294967295);
HEAP[_MultibyteIncrementalDecoder_Type+124]=_codecctx_getsets;
HEAP[_MultibyteIncrementalDecoder_Type+148]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_MultibyteIncrementalDecoder_Type+156]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_mbstreamreader_methods]=((__str37)&4294967295);
HEAP[_mbstreamreader_methods+4]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_mbstreamreader_methods+16]=((__str39)&4294967295);
HEAP[_mbstreamreader_methods+20]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_mbstreamreader_methods+32]=((__str40)&4294967295);
HEAP[_mbstreamreader_methods+36]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_mbstreamreader_methods+48]=((__str27)&4294967295);
HEAP[_mbstreamreader_methods+52]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_mbstreamreader_members]=((__str3)&4294967295);
HEAP[_MultibyteStreamReader_Type+12]=((__str42)&4294967295);
HEAP[_MultibyteStreamReader_Type+24]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_MultibyteStreamReader_Type+72]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_MultibyteStreamReader_Type+92]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_MultibyteStreamReader_Type+116]=((_mbstreamreader_methods)&4294967295);
HEAP[_MultibyteStreamReader_Type+120]=((_mbstreamreader_members)&4294967295);
HEAP[_MultibyteStreamReader_Type+124]=_codecctx_getsets;
HEAP[_MultibyteStreamReader_Type+148]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_MultibyteStreamReader_Type+156]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_mbstreamwriter_methods]=((__str43)&4294967295);
HEAP[_mbstreamwriter_methods+4]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_mbstreamwriter_methods+16]=((__str47)&4294967295);
HEAP[_mbstreamwriter_methods+20]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_mbstreamwriter_methods+32]=((__str27)&4294967295);
HEAP[_mbstreamwriter_methods+36]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_mbstreamwriter_members]=((__str3)&4294967295);
HEAP[_MultibyteStreamWriter_Type+12]=((__str48)&4294967295);
HEAP[_MultibyteStreamWriter_Type+24]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_MultibyteStreamWriter_Type+72]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_MultibyteStreamWriter_Type+92]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_MultibyteStreamWriter_Type+116]=((_mbstreamwriter_methods)&4294967295);
HEAP[_MultibyteStreamWriter_Type+120]=((_mbstreamwriter_members)&4294967295);
HEAP[_MultibyteStreamWriter_Type+124]=_codecctx_getsets;
HEAP[_MultibyteStreamWriter_Type+148]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_MultibyteStreamWriter_Type+156]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[___methods]=((__str51)&4294967295);
HEAP[___methods+4]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_C_140_10927]=_MultibyteIncrementalEncoder_Type;
HEAP[_C_140_10927+4]=_MultibyteIncrementalDecoder_Type;
HEAP[_C_140_10927+8]=_MultibyteStreamReader_Type;
HEAP[_C_140_10927+12]=_MultibyteStreamWriter_Type;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

