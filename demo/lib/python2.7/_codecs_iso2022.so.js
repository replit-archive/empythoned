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



var $0___SIZE = 32; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 32; // %2
  
var $3___SIZE = 16; // %3
  
var $4___SIZE = 64; // %4
  
var $5___SIZE = 80; // %5
  
var $6___SIZE = 144; // %6
  
var $7___SIZE = 96; // %7
  
var $8___SIZE = 288; // %8
  
var $9___SIZE = 36; // %9
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_MultibyteCodec___SIZE = 36; // %struct.MultibyteCodec
  
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
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_dbcs_index___SIZE = 8; // %struct.dbcs_index
  var $struct_dbcs_index___FLATTENER = [0,4,5];
var $struct_dbcs_map___SIZE = 12; // %struct.dbcs_map
  
var $struct_iso2022_config___SIZE = 8; // %struct.iso2022_config
  
var $struct_iso2022_designation___SIZE = 16; // %struct.iso2022_designation
  var $struct_iso2022_designation___FLATTENER = [0,1,2,4,8,12];
var $struct_pair_encodemap___SIZE = 8; // %struct.pair_encodemap
  
var $struct_unim_index___SIZE = 8; // %struct.unim_index
  var $struct_unim_index___FLATTENER = [0,4,5];
var $struct_widedbcs_index___SIZE = 8; // %struct.widedbcs_index
  var $struct_widedbcs_index___FLATTENER = [0,4,5];
var $union_MultibyteCodec_State___SIZE = 8; // %union.MultibyteCodec_State
  
var _cofunc_8453;
var __str;
var __str1;
var _PyExc_TypeError;
var __str2;
var _codec_list;
var _PyExc_LookupError;
var __str3;
var __str4;
var __str5;
var __str6;
var ___methods;
var _mapping_list;
var __str7;
var _PyExc_ValueError;
var __str8;
var __str9;
var __str10;
var ___PRETTY_FUNCTION___8716;
var __str11;
var ___PRETTY_FUNCTION___9242;
var _cp949_encmap;
var _ksx1001_decmap;
var _jisxcommon_encmap;
var _jisx0208_decmap;
var _jisx0212_decmap;
var _jisx0213_bmp_encmap;
var _jisx0213_1_bmp_decmap;
var _jisx0213_2_bmp_decmap;
var _jisx0213_emp_encmap;
var _jisx0213_1_emp_decmap;
var _jisx0213_2_emp_decmap;
var _gbcommon_encmap;
var _gb2312_decmap;
var _initialized_9477;
var __str12;
var __str13;
var __str14;
var __str15;
var ___PRETTY_FUNCTION___9539;
var _initialized_9598;
var __str16;
var __str17;
var __str18;
var ___PRETTY_FUNCTION___9665;
var _initialized_9727;
var __str19;
var ___PRETTY_FUNCTION___9789;
var _initialized_9849;
var __str20;
var __str21;
var __str22;
var __str23;
var __str24;
var __str25;
var _jisx0213_pair_decmap;
var _jisx0213_pair_encmap;
var __str26;
var _initialized_10822;
var __str27;
var __str28;
var __str29;
var ___PRETTY_FUNCTION___10884;
var _iso2022_kr_designations;
var _iso2022_kr_config;
var _iso2022_jp_designations;
var _iso2022_jp_config;
var _iso2022_jp_1_designations;
var _iso2022_jp_1_config;
var _iso2022_jp_2_designations;
var _iso2022_jp_2_config;
var _iso2022_jp_2004_designations;
var _iso2022_jp_2004_config;
var _iso2022_jp_3_designations;
var _iso2022_jp_3_config;
var _iso2022_jp_ext_designations;
var _iso2022_jp_ext_config;
var __mapping_list;
var __str30;
var __str31;
var __str32;
var __str33;
var __str34;
var __str35;
var __str36;
var __codec_list;
var __str37;



















  function _getmultibytecodec() {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $mod=__stackBase__+8;
        var $_alloca_point_=0;
        var $1=HEAP[_cofunc_8453]; //@line 247 "cjkcodecs.h"
        var $2=($1)==0; //@line 247 "cjkcodecs.h"
        if ($2) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 247 "cjkcodecs.h"
      case 1: // $bb
        var $3=_PyImport_ImportModuleNoBlock(((__str)&4294967295)); //@line 248 "cjkcodecs.h"
        HEAP[$mod]=$3; //@line 248 "cjkcodecs.h"
        var $4=HEAP[$mod]; //@line 249 "cjkcodecs.h"
        var $5=($4)==0; //@line 249 "cjkcodecs.h"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 249 "cjkcodecs.h"
      case 2: // $bb1
        HEAP[$0]=0; //@line 250 "cjkcodecs.h"
        __label__ = 6; break; //@line 250 "cjkcodecs.h"
      case 3: // $bb2
        var $6=HEAP[$mod]; //@line 251 "cjkcodecs.h"
        var $7=_PyObject_GetAttrString($6, ((__str1)&4294967295)); //@line 251 "cjkcodecs.h"
        HEAP[_cofunc_8453]=$7; //@line 251 "cjkcodecs.h"
        var $8=HEAP[$mod]; //@line 252 "cjkcodecs.h"
        var $9=(($8)&4294967295); //@line 252 "cjkcodecs.h"
        var $10=HEAP[$9]; //@line 252 "cjkcodecs.h"
        var $11=((($10) - 1)&4294967295); //@line 252 "cjkcodecs.h"
        var $12=HEAP[$mod]; //@line 252 "cjkcodecs.h"
        var $13=(($12)&4294967295); //@line 252 "cjkcodecs.h"
        HEAP[$13]=$11; //@line 252 "cjkcodecs.h"
        var $14=HEAP[$mod]; //@line 252 "cjkcodecs.h"
        var $15=(($14)&4294967295); //@line 252 "cjkcodecs.h"
        var $16=HEAP[$15]; //@line 252 "cjkcodecs.h"
        var $17=((($16))|0)==0; //@line 252 "cjkcodecs.h"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 252 "cjkcodecs.h"
      case 4: // $bb3
        var $18=HEAP[$mod]; //@line 252 "cjkcodecs.h"
        var $19=(($18+4)&4294967295); //@line 252 "cjkcodecs.h"
        var $20=HEAP[$19]; //@line 252 "cjkcodecs.h"
        var $21=(($20+24)&4294967295); //@line 252 "cjkcodecs.h"
        var $22=HEAP[$21]; //@line 252 "cjkcodecs.h"
        var $23=HEAP[$mod]; //@line 252 "cjkcodecs.h"
        FUNCTION_TABLE[$22]($23); //@line 252 "cjkcodecs.h"
        __label__ = 5; break; //@line 252 "cjkcodecs.h"
      case 5: // $bb4
        var $24=HEAP[_cofunc_8453]; //@line 254 "cjkcodecs.h"
        HEAP[$0]=$24; //@line 254 "cjkcodecs.h"
        __label__ = 6; break; //@line 254 "cjkcodecs.h"
      case 6: // $bb5
        var $25=HEAP[$0]; //@line 250 "cjkcodecs.h"
        HEAP[$retval]=$25; //@line 250 "cjkcodecs.h"
        __label__ = 7; break; //@line 250 "cjkcodecs.h"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 250 "cjkcodecs.h"
        STACKTOP = __stackBase__;
        return $retval6; //@line 250 "cjkcodecs.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getcodec($self, $encoding) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $encoding_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $codecobj=__stackBase__+16;
        var $r=__stackBase__+20;
        var $cofunc=__stackBase__+24;
        var $codec=__stackBase__+28;
        var $enc=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$encoding_addr]=$encoding;
        var $1=HEAP[$encoding_addr]; //@line 264 "cjkcodecs.h"
        var $2=(($1+4)&4294967295); //@line 264 "cjkcodecs.h"
        var $3=HEAP[$2]; //@line 264 "cjkcodecs.h"
        var $4=(($3+84)&4294967295); //@line 264 "cjkcodecs.h"
        var $5=HEAP[$4]; //@line 264 "cjkcodecs.h"
        var $6=($5) & 134217728; //@line 264 "cjkcodecs.h"
        var $7=((($6))|0)==0; //@line 264 "cjkcodecs.h"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 264 "cjkcodecs.h"
      case 1: // $bb
        var $8=HEAP[_PyExc_TypeError]; //@line 265 "cjkcodecs.h"
        _PyErr_SetString($8, ((__str2)&4294967295)); //@line 265 "cjkcodecs.h"
        HEAP[$0]=0; //@line 267 "cjkcodecs.h"
        __label__ = 15; break; //@line 267 "cjkcodecs.h"
      case 2: // $bb1
        var $9=_getmultibytecodec(); //@line 270 "cjkcodecs.h"
        HEAP[$cofunc]=$9; //@line 270 "cjkcodecs.h"
        var $10=HEAP[$cofunc]; //@line 271 "cjkcodecs.h"
        var $11=($10)==0; //@line 271 "cjkcodecs.h"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 271 "cjkcodecs.h"
      case 3: // $bb2
        HEAP[$0]=0; //@line 272 "cjkcodecs.h"
        __label__ = 15; break; //@line 272 "cjkcodecs.h"
      case 4: // $bb3
        var $12=HEAP[$encoding_addr]; //@line 274 "cjkcodecs.h"
        var $13=$12; //@line 274 "cjkcodecs.h"
        var $14=(($13+20)&4294967295); //@line 274 "cjkcodecs.h"
        var $15=(($14)&4294967295); //@line 274 "cjkcodecs.h"
        HEAP[$enc]=$15; //@line 274 "cjkcodecs.h"
        var $16=HEAP[_codec_list]; //@line 275 "cjkcodecs.h"
        HEAP[$codec]=$16; //@line 275 "cjkcodecs.h"
        __label__ = 7; break; //@line 275 "cjkcodecs.h"
      case 5: // $bb4
        var $17=HEAP[$codec]; //@line 276 "cjkcodecs.h"
        var $18=(($17)&4294967295); //@line 276 "cjkcodecs.h"
        var $19=HEAP[$18]; //@line 276 "cjkcodecs.h"
        var $20=HEAP[$enc]; //@line 276 "cjkcodecs.h"
        var $21=_strcmp($19, $20); //@line 276 "cjkcodecs.h"
        var $22=((($21))|0)==0; //@line 276 "cjkcodecs.h"
        if ($22) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 276 "cjkcodecs.h"
      case 6: // $bb5
        var $23=HEAP[$codec]; //@line 275 "cjkcodecs.h"
        var $24=(($23+36)&4294967295); //@line 275 "cjkcodecs.h"
        HEAP[$codec]=$24; //@line 275 "cjkcodecs.h"
        __label__ = 7; break; //@line 275 "cjkcodecs.h"
      case 7: // $bb6
        var $25=HEAP[$codec]; //@line 275 "cjkcodecs.h"
        var $26=(($25)&4294967295); //@line 275 "cjkcodecs.h"
        var $27=HEAP[$26]; //@line 275 "cjkcodecs.h"
        var $28=(($27)&4294967295); //@line 275 "cjkcodecs.h"
        var $29=HEAP[$28]; //@line 275 "cjkcodecs.h"
        var $30=reSign(($29), 8, 0)!=0; //@line 275 "cjkcodecs.h"
        if ($30) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 275 "cjkcodecs.h"
      case 8: // $bb7
        var $31=HEAP[$codec]; //@line 279 "cjkcodecs.h"
        var $32=(($31)&4294967295); //@line 279 "cjkcodecs.h"
        var $33=HEAP[$32]; //@line 279 "cjkcodecs.h"
        var $34=(($33)&4294967295); //@line 279 "cjkcodecs.h"
        var $35=HEAP[$34]; //@line 279 "cjkcodecs.h"
        var $36=reSign(($35), 8, 0)==0; //@line 279 "cjkcodecs.h"
        if ($36) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 279 "cjkcodecs.h"
      case 9: // $bb8
        var $37=HEAP[_PyExc_LookupError]; //@line 280 "cjkcodecs.h"
        _PyErr_SetString($37, ((__str3)&4294967295)); //@line 280 "cjkcodecs.h"
        HEAP[$0]=0; //@line 282 "cjkcodecs.h"
        __label__ = 15; break; //@line 282 "cjkcodecs.h"
      case 10: // $bb9
        var $38=HEAP[$codec]; //@line 285 "cjkcodecs.h"
        var $39=$38; //@line 285 "cjkcodecs.h"
        var $40=_PyCapsule_New($39, ((__str4)&4294967295), 0); //@line 285 "cjkcodecs.h"
        HEAP[$codecobj]=$40; //@line 285 "cjkcodecs.h"
        var $41=HEAP[$codecobj]; //@line 286 "cjkcodecs.h"
        var $42=($41)==0; //@line 286 "cjkcodecs.h"
        if ($42) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 286 "cjkcodecs.h"
      case 11: // $bb10
        HEAP[$0]=0; //@line 287 "cjkcodecs.h"
        __label__ = 15; break; //@line 287 "cjkcodecs.h"
      case 12: // $bb11
        var $43=HEAP[$cofunc]; //@line 289 "cjkcodecs.h"
        var $44=HEAP[$codecobj]; //@line 289 "cjkcodecs.h"
        var $45=_PyObject_CallFunctionObjArgs($43, $44, 0); //@line 289 "cjkcodecs.h"
        HEAP[$r]=$45; //@line 289 "cjkcodecs.h"
        var $46=HEAP[$codecobj]; //@line 290 "cjkcodecs.h"
        var $47=(($46)&4294967295); //@line 290 "cjkcodecs.h"
        var $48=HEAP[$47]; //@line 290 "cjkcodecs.h"
        var $49=((($48) - 1)&4294967295); //@line 290 "cjkcodecs.h"
        var $50=HEAP[$codecobj]; //@line 290 "cjkcodecs.h"
        var $51=(($50)&4294967295); //@line 290 "cjkcodecs.h"
        HEAP[$51]=$49; //@line 290 "cjkcodecs.h"
        var $52=HEAP[$codecobj]; //@line 290 "cjkcodecs.h"
        var $53=(($52)&4294967295); //@line 290 "cjkcodecs.h"
        var $54=HEAP[$53]; //@line 290 "cjkcodecs.h"
        var $55=((($54))|0)==0; //@line 290 "cjkcodecs.h"
        if ($55) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 290 "cjkcodecs.h"
      case 13: // $bb12
        var $56=HEAP[$codecobj]; //@line 290 "cjkcodecs.h"
        var $57=(($56+4)&4294967295); //@line 290 "cjkcodecs.h"
        var $58=HEAP[$57]; //@line 290 "cjkcodecs.h"
        var $59=(($58+24)&4294967295); //@line 290 "cjkcodecs.h"
        var $60=HEAP[$59]; //@line 290 "cjkcodecs.h"
        var $61=HEAP[$codecobj]; //@line 290 "cjkcodecs.h"
        FUNCTION_TABLE[$60]($61); //@line 290 "cjkcodecs.h"
        __label__ = 14; break; //@line 290 "cjkcodecs.h"
      case 14: // $bb13
        var $62=HEAP[$r]; //@line 292 "cjkcodecs.h"
        HEAP[$0]=$62; //@line 292 "cjkcodecs.h"
        __label__ = 15; break; //@line 292 "cjkcodecs.h"
      case 15: // $bb14
        var $63=HEAP[$0]; //@line 267 "cjkcodecs.h"
        HEAP[$retval]=$63; //@line 267 "cjkcodecs.h"
        __label__ = 16; break; //@line 267 "cjkcodecs.h"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 267 "cjkcodecs.h"
        STACKTOP = __stackBase__;
        return $retval15; //@line 267 "cjkcodecs.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _register_maps($module) {
    var __stackBase__  = STACKTOP; STACKTOP += 276; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 276);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $h=__stackBase__+12;
        var $mhname=__stackBase__+16;
        var $r=__stackBase__+272;
        var $_alloca_point_=0;
        HEAP[$module_addr]=$module;
        var $1=HEAP[_mapping_list]; //@line 305 "cjkcodecs.h"
        HEAP[$h]=$1; //@line 305 "cjkcodecs.h"
        __label__ = 4; break; //@line 305 "cjkcodecs.h"
      case 1: // $bb
        var $mhname1=$mhname; //@line 306 "cjkcodecs.h"
        _llvm_memcpy_p0i8_p0i8_i32($mhname1, ((__str7)&4294967295), 256, 1, 0); //@line 306 "cjkcodecs.h"
        var $2=HEAP[$h]; //@line 308 "cjkcodecs.h"
        var $3=(($2)&4294967295); //@line 308 "cjkcodecs.h"
        var $4=HEAP[$3]; //@line 308 "cjkcodecs.h"
        var $mhname2=$mhname; //@line 308 "cjkcodecs.h"
        var $5=(($mhname2+7)&4294967295); //@line 308 "cjkcodecs.h"
        var $6=(($5+-1)&4294967295); //@line 308 "cjkcodecs.h"
        var $7=_strcpy($6, $4); //@line 308 "cjkcodecs.h"
        var $8=HEAP[$h]; //@line 309 "cjkcodecs.h"
        var $9=$8; //@line 309 "cjkcodecs.h"
        var $10=_PyCapsule_New($9, ((__str4)&4294967295), 0); //@line 309 "cjkcodecs.h"
        var $11=HEAP[$module_addr]; //@line 309 "cjkcodecs.h"
        var $mhname3=$mhname; //@line 309 "cjkcodecs.h"
        var $12=_PyModule_AddObject($11, $mhname3, $10); //@line 309 "cjkcodecs.h"
        HEAP[$r]=$12; //@line 309 "cjkcodecs.h"
        var $13=HEAP[$r]; //@line 311 "cjkcodecs.h"
        var $14=((($13))|0)==-1; //@line 311 "cjkcodecs.h"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 311 "cjkcodecs.h"
      case 2: // $bb4
        HEAP[$0]=-1; //@line 312 "cjkcodecs.h"
        __label__ = 6; break; //@line 312 "cjkcodecs.h"
      case 3: // $bb5
        var $15=HEAP[$h]; //@line 305 "cjkcodecs.h"
        var $16=(($15+12)&4294967295); //@line 305 "cjkcodecs.h"
        HEAP[$h]=$16; //@line 305 "cjkcodecs.h"
        __label__ = 4; break; //@line 305 "cjkcodecs.h"
      case 4: // $bb6
        var $17=HEAP[$h]; //@line 305 "cjkcodecs.h"
        var $18=(($17)&4294967295); //@line 305 "cjkcodecs.h"
        var $19=HEAP[$18]; //@line 305 "cjkcodecs.h"
        var $20=(($19)&4294967295); //@line 305 "cjkcodecs.h"
        var $21=HEAP[$20]; //@line 305 "cjkcodecs.h"
        var $22=reSign(($21), 8, 0)!=0; //@line 305 "cjkcodecs.h"
        if ($22) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 305 "cjkcodecs.h"
      case 5: // $bb7
        HEAP[$0]=0; //@line 314 "cjkcodecs.h"
        __label__ = 6; break; //@line 314 "cjkcodecs.h"
      case 6: // $bb8
        var $23=HEAP[$0]; //@line 312 "cjkcodecs.h"
        HEAP[$retval]=$23; //@line 312 "cjkcodecs.h"
        __label__ = 7; break; //@line 312 "cjkcodecs.h"
      case 7: // $return
        var $retval9=HEAP[$retval]; //@line 312 "cjkcodecs.h"
        STACKTOP = __stackBase__;
        return $retval9; //@line 312 "cjkcodecs.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _find_pairencmap($body, $modifier, $haystack, $haystacksize) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $body_addr=__stackBase__;
        var $modifier_addr=__stackBase__+2;
        var $haystack_addr=__stackBase__+4;
        var $haystacksize_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $pos=__stackBase__+20;
        var $min=__stackBase__+24;
        var $max=__stackBase__+28;
        var $value=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$body_addr]=$body;
        HEAP[$modifier_addr]=$modifier;
        HEAP[$haystack_addr]=$haystack;
        HEAP[$haystacksize_addr]=$haystacksize;
        var $1=HEAP[$body_addr]; //@line 323 "cjkcodecs.h"
        var $2=unSign(($1), 16, 0); //@line 323 "cjkcodecs.h"
        var $3=($2) << 16; //@line 323 "cjkcodecs.h"
        var $4=HEAP[$modifier_addr]; //@line 323 "cjkcodecs.h"
        var $5=unSign(($4), 16, 0); //@line 323 "cjkcodecs.h"
        var $6=($3) | ($5); //@line 323 "cjkcodecs.h"
        HEAP[$value]=$6; //@line 323 "cjkcodecs.h"
        HEAP[$min]=0; //@line 325 "cjkcodecs.h"
        var $7=HEAP[$haystacksize_addr]; //@line 326 "cjkcodecs.h"
        HEAP[$max]=$7; //@line 326 "cjkcodecs.h"
        var $8=HEAP[$haystacksize_addr]; //@line 328 "cjkcodecs.h"
        var $9=((($8))|0) >> 1; //@line 328 "cjkcodecs.h"
        HEAP[$pos]=$9; //@line 328 "cjkcodecs.h"
        __label__ = 8; break; //@line 328 "cjkcodecs.h"
      case 1: // $bb
        var $10=HEAP[$haystack_addr]; //@line 329 "cjkcodecs.h"
        var $11=HEAP[$pos]; //@line 329 "cjkcodecs.h"
        var $12=(($10+8*$11)&4294967295); //@line 329 "cjkcodecs.h"
        var $13=(($12)&4294967295); //@line 329 "cjkcodecs.h"
        var $14=HEAP[$13]; //@line 329 "cjkcodecs.h"
        var $15=HEAP[$value]; //@line 329 "cjkcodecs.h"
        var $16=((($14))>>>0) > ((($15))>>>0); //@line 329 "cjkcodecs.h"
        if ($16) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 329 "cjkcodecs.h"
      case 2: // $bb1
        var $17=HEAP[$max]; //@line 330 "cjkcodecs.h"
        var $18=HEAP[$pos]; //@line 330 "cjkcodecs.h"
        var $19=((($17))|0)==((($18))|0); //@line 330 "cjkcodecs.h"
        if ($19) { __label__ = 9; break; } else { __label__ = 3; break; } //@line 330 "cjkcodecs.h"
      case 3: // $bb2
        var $20=HEAP[$pos]; //@line 331 "cjkcodecs.h"
        HEAP[$max]=$20; //@line 331 "cjkcodecs.h"
        __label__ = 7; break; //@line 331 "cjkcodecs.h"
      case 4: // $bb3
        var $21=HEAP[$haystack_addr]; //@line 333 "cjkcodecs.h"
        var $22=HEAP[$pos]; //@line 333 "cjkcodecs.h"
        var $23=(($21+8*$22)&4294967295); //@line 333 "cjkcodecs.h"
        var $24=(($23)&4294967295); //@line 333 "cjkcodecs.h"
        var $25=HEAP[$24]; //@line 333 "cjkcodecs.h"
        var $26=HEAP[$value]; //@line 333 "cjkcodecs.h"
        var $27=((($25))>>>0) < ((($26))>>>0); //@line 333 "cjkcodecs.h"
        if ($27) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 333 "cjkcodecs.h"
      case 5: // $bb4
        var $28=HEAP[$min]; //@line 334 "cjkcodecs.h"
        var $29=HEAP[$pos]; //@line 334 "cjkcodecs.h"
        var $30=((($28))|0)==((($29))|0); //@line 334 "cjkcodecs.h"
        if ($30) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 334 "cjkcodecs.h"
      case 6: // $bb5
        var $31=HEAP[$pos]; //@line 335 "cjkcodecs.h"
        HEAP[$min]=$31; //@line 335 "cjkcodecs.h"
        __label__ = 7; break; //@line 335 "cjkcodecs.h"
      case 7: // $bb6
        var $32=HEAP[$min]; //@line 328 "cjkcodecs.h"
        var $33=HEAP[$max]; //@line 328 "cjkcodecs.h"
        var $34=((($32) + ($33))&4294967295); //@line 328 "cjkcodecs.h"
        var $35=((($34))|0) >> 1; //@line 328 "cjkcodecs.h"
        HEAP[$pos]=$35; //@line 328 "cjkcodecs.h"
        __label__ = 8; break; //@line 328 "cjkcodecs.h"
      case 8: // $bb7
        var $36=HEAP[$min]; //@line 328 "cjkcodecs.h"
        var $37=HEAP[$max]; //@line 328 "cjkcodecs.h"
        var $38=((($36))|0)!=((($37))|0); //@line 328 "cjkcodecs.h"
        if ($38) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 328 "cjkcodecs.h"
      case 9: // $bb8
        var $39=HEAP[$haystack_addr]; //@line 340 "cjkcodecs.h"
        var $40=HEAP[$pos]; //@line 340 "cjkcodecs.h"
        var $41=(($39+8*$40)&4294967295); //@line 340 "cjkcodecs.h"
        var $42=(($41)&4294967295); //@line 340 "cjkcodecs.h"
        var $43=HEAP[$42]; //@line 340 "cjkcodecs.h"
        var $44=HEAP[$value]; //@line 340 "cjkcodecs.h"
        var $45=((($43))|0)==((($44))|0); //@line 340 "cjkcodecs.h"
        if ($45) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 340 "cjkcodecs.h"
      case 10: // $bb9
        var $46=HEAP[$haystack_addr]; //@line 341 "cjkcodecs.h"
        var $47=HEAP[$pos]; //@line 341 "cjkcodecs.h"
        var $48=(($46+8*$47)&4294967295); //@line 341 "cjkcodecs.h"
        var $49=(($48+4)&4294967295); //@line 341 "cjkcodecs.h"
        var $50=HEAP[$49]; //@line 341 "cjkcodecs.h"
        var $51=unSign(($50), 16, 0); //@line 341 "cjkcodecs.h"
        HEAP[$0]=$51; //@line 341 "cjkcodecs.h"
        __label__ = 12; break; //@line 341 "cjkcodecs.h"
      case 11: // $bb10
        HEAP[$0]=65533; //@line 343 "cjkcodecs.h"
        __label__ = 12; break; //@line 343 "cjkcodecs.h"
      case 12: // $bb11
        var $52=HEAP[$0]; //@line 341 "cjkcodecs.h"
        HEAP[$retval]=$52; //@line 341 "cjkcodecs.h"
        __label__ = 13; break; //@line 341 "cjkcodecs.h"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 341 "cjkcodecs.h"
        var $retval1213=((($retval12)) & 65535); //@line 341 "cjkcodecs.h"
        STACKTOP = __stackBase__;
        return $retval1213; //@line 341 "cjkcodecs.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _importmap($modname, $symbol, $encmap, $decmap) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $modname_addr=__stackBase__;
        var $symbol_addr=__stackBase__+4;
        var $encmap_addr=__stackBase__+8;
        var $decmap_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $o=__stackBase__+24;
        var $mod=__stackBase__+28;
        var $map=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$modname_addr]=$modname;
        HEAP[$symbol_addr]=$symbol;
        HEAP[$encmap_addr]=$encmap;
        HEAP[$decmap_addr]=$decmap;
        var $1=HEAP[$modname_addr]; //@line 358 "cjkcodecs.h"
        var $2=_PyImport_ImportModule($1); //@line 358 "cjkcodecs.h"
        HEAP[$mod]=$2; //@line 358 "cjkcodecs.h"
        var $3=HEAP[$mod]; //@line 359 "cjkcodecs.h"
        var $4=($3)==0; //@line 359 "cjkcodecs.h"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 359 "cjkcodecs.h"
      case 1: // $bb
        HEAP[$0]=-1; //@line 360 "cjkcodecs.h"
        __label__ = 17; break; //@line 360 "cjkcodecs.h"
      case 2: // $bb1
        var $5=HEAP[$mod]; //@line 362 "cjkcodecs.h"
        var $6=HEAP[$symbol_addr]; //@line 362 "cjkcodecs.h"
        var $7=_PyObject_GetAttrString($5, $6); //@line 362 "cjkcodecs.h"
        HEAP[$o]=$7; //@line 362 "cjkcodecs.h"
        var $8=HEAP[$o]; //@line 363 "cjkcodecs.h"
        var $9=($8)==0; //@line 363 "cjkcodecs.h"
        if ($9) { __label__ = 14; break; } else { __label__ = 3; break; } //@line 363 "cjkcodecs.h"
      case 3: // $bb2
        var $10=HEAP[$o]; //@line 365 "cjkcodecs.h"
        var $11=_PyCapsule_IsValid($10, ((__str4)&4294967295)); //@line 365 "cjkcodecs.h"
        var $12=((($11))|0)==0; //@line 365 "cjkcodecs.h"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 365 "cjkcodecs.h"
      case 4: // $bb3
        var $13=HEAP[_PyExc_ValueError]; //@line 366 "cjkcodecs.h"
        _PyErr_SetString($13, ((__str8)&4294967295)); //@line 366 "cjkcodecs.h"
        __label__ = 14; break; //@line 366 "cjkcodecs.h"
      case 5: // $bb4
        var $14=HEAP[$o]; //@line 372 "cjkcodecs.h"
        var $15=_PyCapsule_GetPointer($14, ((__str4)&4294967295)); //@line 372 "cjkcodecs.h"
        var $16=$15; //@line 372 "cjkcodecs.h"
        HEAP[$map]=$16; //@line 372 "cjkcodecs.h"
        var $17=HEAP[$encmap_addr]; //@line 373 "cjkcodecs.h"
        var $18=($17)!=0; //@line 373 "cjkcodecs.h"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 373 "cjkcodecs.h"
      case 6: // $bb5
        var $19=HEAP[$map]; //@line 374 "cjkcodecs.h"
        var $20=(($19+4)&4294967295); //@line 374 "cjkcodecs.h"
        var $21=HEAP[$20]; //@line 374 "cjkcodecs.h"
        var $22=HEAP[$encmap_addr]; //@line 374 "cjkcodecs.h"
        var $23=$21; //@line 374 "cjkcodecs.h"
        HEAP[$22]=$23; //@line 374 "cjkcodecs.h"
        __label__ = 7; break; //@line 374 "cjkcodecs.h"
      case 7: // $bb6
        var $24=HEAP[$decmap_addr]; //@line 375 "cjkcodecs.h"
        var $25=($24)!=0; //@line 375 "cjkcodecs.h"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 375 "cjkcodecs.h"
      case 8: // $bb7
        var $26=HEAP[$map]; //@line 376 "cjkcodecs.h"
        var $27=(($26+8)&4294967295); //@line 376 "cjkcodecs.h"
        var $28=HEAP[$27]; //@line 376 "cjkcodecs.h"
        var $29=HEAP[$decmap_addr]; //@line 376 "cjkcodecs.h"
        var $30=$28; //@line 376 "cjkcodecs.h"
        HEAP[$29]=$30; //@line 376 "cjkcodecs.h"
        __label__ = 9; break; //@line 376 "cjkcodecs.h"
      case 9: // $bb8
        var $31=HEAP[$o]; //@line 377 "cjkcodecs.h"
        var $32=(($31)&4294967295); //@line 377 "cjkcodecs.h"
        var $33=HEAP[$32]; //@line 377 "cjkcodecs.h"
        var $34=((($33) - 1)&4294967295); //@line 377 "cjkcodecs.h"
        var $35=HEAP[$o]; //@line 377 "cjkcodecs.h"
        var $36=(($35)&4294967295); //@line 377 "cjkcodecs.h"
        HEAP[$36]=$34; //@line 377 "cjkcodecs.h"
        var $37=HEAP[$o]; //@line 377 "cjkcodecs.h"
        var $38=(($37)&4294967295); //@line 377 "cjkcodecs.h"
        var $39=HEAP[$38]; //@line 377 "cjkcodecs.h"
        var $40=((($39))|0)==0; //@line 377 "cjkcodecs.h"
        if ($40) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 377 "cjkcodecs.h"
      case 10: // $bb9
        var $41=HEAP[$o]; //@line 377 "cjkcodecs.h"
        var $42=(($41+4)&4294967295); //@line 377 "cjkcodecs.h"
        var $43=HEAP[$42]; //@line 377 "cjkcodecs.h"
        var $44=(($43+24)&4294967295); //@line 377 "cjkcodecs.h"
        var $45=HEAP[$44]; //@line 377 "cjkcodecs.h"
        var $46=HEAP[$o]; //@line 377 "cjkcodecs.h"
        FUNCTION_TABLE[$45]($46); //@line 377 "cjkcodecs.h"
        __label__ = 11; break; //@line 377 "cjkcodecs.h"
      case 11: // $bb10
        var $47=HEAP[$mod]; //@line 380 "cjkcodecs.h"
        var $48=(($47)&4294967295); //@line 380 "cjkcodecs.h"
        var $49=HEAP[$48]; //@line 380 "cjkcodecs.h"
        var $50=((($49) - 1)&4294967295); //@line 380 "cjkcodecs.h"
        var $51=HEAP[$mod]; //@line 380 "cjkcodecs.h"
        var $52=(($51)&4294967295); //@line 380 "cjkcodecs.h"
        HEAP[$52]=$50; //@line 380 "cjkcodecs.h"
        var $53=HEAP[$mod]; //@line 380 "cjkcodecs.h"
        var $54=(($53)&4294967295); //@line 380 "cjkcodecs.h"
        var $55=HEAP[$54]; //@line 380 "cjkcodecs.h"
        var $56=((($55))|0)==0; //@line 380 "cjkcodecs.h"
        if ($56) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 380 "cjkcodecs.h"
      case 12: // $bb11
        var $57=HEAP[$mod]; //@line 380 "cjkcodecs.h"
        var $58=(($57+4)&4294967295); //@line 380 "cjkcodecs.h"
        var $59=HEAP[$58]; //@line 380 "cjkcodecs.h"
        var $60=(($59+24)&4294967295); //@line 380 "cjkcodecs.h"
        var $61=HEAP[$60]; //@line 380 "cjkcodecs.h"
        var $62=HEAP[$mod]; //@line 380 "cjkcodecs.h"
        FUNCTION_TABLE[$61]($62); //@line 380 "cjkcodecs.h"
        __label__ = 13; break; //@line 380 "cjkcodecs.h"
      case 13: // $bb12
        HEAP[$0]=0; //@line 381 "cjkcodecs.h"
        __label__ = 17; break; //@line 381 "cjkcodecs.h"
      case 14: // $errorexit
        var $63=HEAP[$mod]; //@line 384 "cjkcodecs.h"
        var $64=(($63)&4294967295); //@line 384 "cjkcodecs.h"
        var $65=HEAP[$64]; //@line 384 "cjkcodecs.h"
        var $66=((($65) - 1)&4294967295); //@line 384 "cjkcodecs.h"
        var $67=HEAP[$mod]; //@line 384 "cjkcodecs.h"
        var $68=(($67)&4294967295); //@line 384 "cjkcodecs.h"
        HEAP[$68]=$66; //@line 384 "cjkcodecs.h"
        var $69=HEAP[$mod]; //@line 384 "cjkcodecs.h"
        var $70=(($69)&4294967295); //@line 384 "cjkcodecs.h"
        var $71=HEAP[$70]; //@line 384 "cjkcodecs.h"
        var $72=((($71))|0)==0; //@line 384 "cjkcodecs.h"
        if ($72) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 384 "cjkcodecs.h"
      case 15: // $bb13
        var $73=HEAP[$mod]; //@line 384 "cjkcodecs.h"
        var $74=(($73+4)&4294967295); //@line 384 "cjkcodecs.h"
        var $75=HEAP[$74]; //@line 384 "cjkcodecs.h"
        var $76=(($75+24)&4294967295); //@line 384 "cjkcodecs.h"
        var $77=HEAP[$76]; //@line 384 "cjkcodecs.h"
        var $78=HEAP[$mod]; //@line 384 "cjkcodecs.h"
        FUNCTION_TABLE[$77]($78); //@line 384 "cjkcodecs.h"
        __label__ = 16; break; //@line 384 "cjkcodecs.h"
      case 16: // $bb14
        HEAP[$0]=-1; //@line 385 "cjkcodecs.h"
        __label__ = 17; break; //@line 385 "cjkcodecs.h"
      case 17: // $bb15
        var $79=HEAP[$0]; //@line 360 "cjkcodecs.h"
        HEAP[$retval]=$79; //@line 360 "cjkcodecs.h"
        __label__ = 18; break; //@line 360 "cjkcodecs.h"
      case 18: // $return
        var $retval16=HEAP[$retval]; //@line 360 "cjkcodecs.h"
        STACKTOP = __stackBase__;
        return $retval16; //@line 360 "cjkcodecs.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022_codec_init($config) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $config_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $desig=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$config_addr]=$config;
        var $1=HEAP[$config_addr]; //@line 126 "_codecs_iso2022.c"
        var $2=$1; //@line 126 "_codecs_iso2022.c"
        var $3=(($2+4)&4294967295); //@line 126 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 126 "_codecs_iso2022.c"
        HEAP[$desig]=$4; //@line 126 "_codecs_iso2022.c"
        var $5=HEAP[$config_addr]; //@line 127 "_codecs_iso2022.c"
        var $6=$5; //@line 127 "_codecs_iso2022.c"
        var $7=(($6+4)&4294967295); //@line 127 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 127 "_codecs_iso2022.c"
        HEAP[$desig]=$8; //@line 127 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 127 "_codecs_iso2022.c"
      case 1: // $bb
        var $9=HEAP[$desig]; //@line 128 "_codecs_iso2022.c"
        var $10=(($9+4)&4294967295); //@line 128 "_codecs_iso2022.c"
        var $11=HEAP[$10]; //@line 128 "_codecs_iso2022.c"
        var $12=($11)!=0; //@line 128 "_codecs_iso2022.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 128 "_codecs_iso2022.c"
      case 2: // $bb1
        var $13=HEAP[$desig]; //@line 128 "_codecs_iso2022.c"
        var $14=(($13+4)&4294967295); //@line 128 "_codecs_iso2022.c"
        var $15=HEAP[$14]; //@line 128 "_codecs_iso2022.c"
        var $16=FUNCTION_TABLE[$15](); //@line 128 "_codecs_iso2022.c"
        var $17=((($16))|0)!=0; //@line 128 "_codecs_iso2022.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 128 "_codecs_iso2022.c"
      case 3: // $bb2
        HEAP[$0]=-1; //@line 129 "_codecs_iso2022.c"
        __label__ = 7; break; //@line 129 "_codecs_iso2022.c"
      case 4: // $bb3
        var $18=HEAP[$desig]; //@line 127 "_codecs_iso2022.c"
        var $19=(($18+16)&4294967295); //@line 127 "_codecs_iso2022.c"
        HEAP[$desig]=$19; //@line 127 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 127 "_codecs_iso2022.c"
      case 5: // $bb4
        var $20=HEAP[$desig]; //@line 127 "_codecs_iso2022.c"
        var $21=(($20)&4294967295); //@line 127 "_codecs_iso2022.c"
        var $22=HEAP[$21]; //@line 127 "_codecs_iso2022.c"
        var $23=reSign(($22), 8, 0)!=0; //@line 127 "_codecs_iso2022.c"
        if ($23) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 127 "_codecs_iso2022.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 130 "_codecs_iso2022.c"
        __label__ = 7; break; //@line 130 "_codecs_iso2022.c"
      case 7: // $bb6
        var $24=HEAP[$0]; //@line 129 "_codecs_iso2022.c"
        HEAP[$retval]=$24; //@line 129 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 129 "_codecs_iso2022.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 129 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 129 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022_encode_init($state, $config) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $state_addr=__stackBase__;
        var $config_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$state_addr]=$state;
        HEAP[$config_addr]=$config;
        var $1=HEAP[$state_addr]; //@line 135 "_codecs_iso2022.c"
        var $2=(($1)&4294967295); //@line 135 "_codecs_iso2022.c"
        var $3=$2; //@line 135 "_codecs_iso2022.c"
        var $4=(($3+4)&4294967295); //@line 135 "_codecs_iso2022.c"
        HEAP[$4]=0; //@line 135 "_codecs_iso2022.c"
        var $5=HEAP[$state_addr]; //@line 136 "_codecs_iso2022.c"
        var $6=(($5)&4294967295); //@line 136 "_codecs_iso2022.c"
        var $7=$6; //@line 136 "_codecs_iso2022.c"
        var $8=(($7)&4294967295); //@line 136 "_codecs_iso2022.c"
        HEAP[$8]=66; //@line 136 "_codecs_iso2022.c"
        var $9=HEAP[$state_addr]; //@line 137 "_codecs_iso2022.c"
        var $10=(($9)&4294967295); //@line 137 "_codecs_iso2022.c"
        var $11=$10; //@line 137 "_codecs_iso2022.c"
        var $12=(($11+1)&4294967295); //@line 137 "_codecs_iso2022.c"
        HEAP[$12]=66; //@line 137 "_codecs_iso2022.c"
        HEAP[$0]=0; //@line 138 "_codecs_iso2022.c"
        var $13=HEAP[$0]; //@line 138 "_codecs_iso2022.c"
        HEAP[$retval]=$13; //@line 138 "_codecs_iso2022.c"
        __label__ = 1; break; //@line 138 "_codecs_iso2022.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 138 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 138 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022_encode_reset($state, $config, $outbuf, $outleft) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $state_addr=__stackBase__;
        var $config_addr=__stackBase__+4;
        var $outbuf_addr=__stackBase__+8;
        var $outleft_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$state_addr]=$state;
        HEAP[$config_addr]=$config;
        HEAP[$outbuf_addr]=$outbuf;
        HEAP[$outleft_addr]=$outleft;
        var $1=HEAP[$state_addr]; //@line 143 "_codecs_iso2022.c"
        var $2=(($1)&4294967295); //@line 143 "_codecs_iso2022.c"
        var $3=$2; //@line 143 "_codecs_iso2022.c"
        var $4=(($3+4)&4294967295); //@line 143 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 143 "_codecs_iso2022.c"
        var $6=unSign(($5), 8, 0); //@line 143 "_codecs_iso2022.c"
        var $7=($6) & 1; //@line 143 "_codecs_iso2022.c"
        var $8=((($7)) & 255); //@line 143 "_codecs_iso2022.c"
        var $toBool=reSign(($8), 8, 0)!=0; //@line 143 "_codecs_iso2022.c"
        if ($toBool) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 143 "_codecs_iso2022.c"
      case 1: // $bb
        var $9=HEAP[$outleft_addr]; //@line 144 "_codecs_iso2022.c"
        var $10=((($9))|0) <= 0; //@line 144 "_codecs_iso2022.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 144 "_codecs_iso2022.c"
      case 2: // $bb1
        HEAP[$0]=-1; //@line 144 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 144 "_codecs_iso2022.c"
      case 3: // $bb2
        var $11=HEAP[$outbuf_addr]; //@line 144 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 144 "_codecs_iso2022.c"
        var $13=(($12)&4294967295); //@line 144 "_codecs_iso2022.c"
        HEAP[$13]=15; //@line 144 "_codecs_iso2022.c"
        var $14=HEAP[$outbuf_addr]; //@line 145 "_codecs_iso2022.c"
        var $15=HEAP[$14]; //@line 145 "_codecs_iso2022.c"
        var $16=(($15+1)&4294967295); //@line 145 "_codecs_iso2022.c"
        var $17=HEAP[$outbuf_addr]; //@line 145 "_codecs_iso2022.c"
        HEAP[$17]=$16; //@line 145 "_codecs_iso2022.c"
        var $18=HEAP[$outleft_addr]; //@line 145 "_codecs_iso2022.c"
        var $19=((($18) - 1)&4294967295); //@line 145 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$19; //@line 145 "_codecs_iso2022.c"
        var $20=HEAP[$state_addr]; //@line 146 "_codecs_iso2022.c"
        var $21=(($20)&4294967295); //@line 146 "_codecs_iso2022.c"
        var $22=$21; //@line 146 "_codecs_iso2022.c"
        var $23=(($22+4)&4294967295); //@line 146 "_codecs_iso2022.c"
        var $24=HEAP[$23]; //@line 146 "_codecs_iso2022.c"
        var $25=($24) & -2; //@line 146 "_codecs_iso2022.c"
        var $26=HEAP[$state_addr]; //@line 146 "_codecs_iso2022.c"
        var $27=(($26)&4294967295); //@line 146 "_codecs_iso2022.c"
        var $28=$27; //@line 146 "_codecs_iso2022.c"
        var $29=(($28+4)&4294967295); //@line 146 "_codecs_iso2022.c"
        HEAP[$29]=$25; //@line 146 "_codecs_iso2022.c"
        __label__ = 4; break; //@line 146 "_codecs_iso2022.c"
      case 4: // $bb3
        var $30=HEAP[$state_addr]; //@line 148 "_codecs_iso2022.c"
        var $31=(($30)&4294967295); //@line 148 "_codecs_iso2022.c"
        var $32=$31; //@line 148 "_codecs_iso2022.c"
        var $33=(($32)&4294967295); //@line 148 "_codecs_iso2022.c"
        var $34=HEAP[$33]; //@line 148 "_codecs_iso2022.c"
        var $35=reSign(($34), 8, 0)!=66; //@line 148 "_codecs_iso2022.c"
        if ($35) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 148 "_codecs_iso2022.c"
      case 5: // $bb4
        var $36=HEAP[$outleft_addr]; //@line 149 "_codecs_iso2022.c"
        var $37=((($36))|0) <= 2; //@line 149 "_codecs_iso2022.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 149 "_codecs_iso2022.c"
      case 6: // $bb5
        HEAP[$0]=-1; //@line 149 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 149 "_codecs_iso2022.c"
      case 7: // $bb6
        var $38=HEAP[$outbuf_addr]; //@line 149 "_codecs_iso2022.c"
        var $39=HEAP[$38]; //@line 149 "_codecs_iso2022.c"
        var $40=(($39)&4294967295); //@line 149 "_codecs_iso2022.c"
        HEAP[$40]=27; //@line 149 "_codecs_iso2022.c"
        var $41=HEAP[$outbuf_addr]; //@line 149 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 149 "_codecs_iso2022.c"
        var $43=(($42+1)&4294967295); //@line 149 "_codecs_iso2022.c"
        HEAP[$43]=40; //@line 149 "_codecs_iso2022.c"
        var $44=HEAP[$outbuf_addr]; //@line 149 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 149 "_codecs_iso2022.c"
        var $46=(($45+2)&4294967295); //@line 149 "_codecs_iso2022.c"
        HEAP[$46]=66; //@line 149 "_codecs_iso2022.c"
        var $47=HEAP[$outbuf_addr]; //@line 150 "_codecs_iso2022.c"
        var $48=HEAP[$47]; //@line 150 "_codecs_iso2022.c"
        var $49=(($48+3)&4294967295); //@line 150 "_codecs_iso2022.c"
        var $50=HEAP[$outbuf_addr]; //@line 150 "_codecs_iso2022.c"
        HEAP[$50]=$49; //@line 150 "_codecs_iso2022.c"
        var $51=HEAP[$outleft_addr]; //@line 150 "_codecs_iso2022.c"
        var $52=((($51) - 3)&4294967295); //@line 150 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$52; //@line 150 "_codecs_iso2022.c"
        var $53=HEAP[$state_addr]; //@line 151 "_codecs_iso2022.c"
        var $54=(($53)&4294967295); //@line 151 "_codecs_iso2022.c"
        var $55=$54; //@line 151 "_codecs_iso2022.c"
        var $56=(($55)&4294967295); //@line 151 "_codecs_iso2022.c"
        HEAP[$56]=66; //@line 151 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 151 "_codecs_iso2022.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 153 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 153 "_codecs_iso2022.c"
      case 9: // $bb8
        var $57=HEAP[$0]; //@line 144 "_codecs_iso2022.c"
        HEAP[$retval]=$57; //@line 144 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 144 "_codecs_iso2022.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 144 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 144 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022_encode($state, $config, $inbuf, $inleft, $outbuf, $outleft, $flags) {
    var __stackBase__  = STACKTOP; STACKTOP += 66; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 66);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $state_addr=__stackBase__;
        var $config_addr=__stackBase__+4;
        var $inbuf_addr=__stackBase__+8;
        var $inleft_addr=__stackBase__+12;
        var $outbuf_addr=__stackBase__+16;
        var $outleft_addr=__stackBase__+20;
        var $flags_addr=__stackBase__+24;
        var $retval=__stackBase__+28;
        var $iftmp_13=__stackBase__+32;
        var $0=__stackBase__+36;
        var $dsg=__stackBase__+40;
        var $encoded=__stackBase__+44;
        var $c=__stackBase__+46;
        var $insize=__stackBase__+50;
        var $length=__stackBase__+54;
        var $u4in=__stackBase__+58;
        var $_alloca_point_=0;
        HEAP[$state_addr]=$state;
        HEAP[$config_addr]=$config;
        HEAP[$inbuf_addr]=$inbuf;
        HEAP[$inleft_addr]=$inleft;
        HEAP[$outbuf_addr]=$outbuf;
        HEAP[$outleft_addr]=$outleft;
        HEAP[$flags_addr]=$flags;
        __label__ = 82; break; //@line 158 "_codecs_iso2022.c"
      case 1: // $bb
        var $1=HEAP[$inbuf_addr]; //@line 161 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 161 "_codecs_iso2022.c"
        var $3=HEAP[$2]; //@line 161 "_codecs_iso2022.c"
        var $4=unSign(($3), 16, 0); //@line 161 "_codecs_iso2022.c"
        HEAP[$c]=$4; //@line 161 "_codecs_iso2022.c"
        var $5=HEAP[$c]; //@line 164 "_codecs_iso2022.c"
        var $6=((($5))>>>0) <= 127; //@line 164 "_codecs_iso2022.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 13; break; } //@line 164 "_codecs_iso2022.c"
      case 2: // $bb1
        var $7=HEAP[$state_addr]; //@line 165 "_codecs_iso2022.c"
        var $8=(($7)&4294967295); //@line 165 "_codecs_iso2022.c"
        var $9=$8; //@line 165 "_codecs_iso2022.c"
        var $10=(($9)&4294967295); //@line 165 "_codecs_iso2022.c"
        var $11=HEAP[$10]; //@line 165 "_codecs_iso2022.c"
        var $12=reSign(($11), 8, 0)!=66; //@line 165 "_codecs_iso2022.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 165 "_codecs_iso2022.c"
      case 3: // $bb2
        var $13=HEAP[$outleft_addr]; //@line 166 "_codecs_iso2022.c"
        var $14=((($13))|0) <= 2; //@line 166 "_codecs_iso2022.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 166 "_codecs_iso2022.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 166 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 166 "_codecs_iso2022.c"
      case 5: // $bb4
        var $15=HEAP[$outbuf_addr]; //@line 166 "_codecs_iso2022.c"
        var $16=HEAP[$15]; //@line 166 "_codecs_iso2022.c"
        var $17=(($16)&4294967295); //@line 166 "_codecs_iso2022.c"
        HEAP[$17]=27; //@line 166 "_codecs_iso2022.c"
        var $18=HEAP[$outbuf_addr]; //@line 166 "_codecs_iso2022.c"
        var $19=HEAP[$18]; //@line 166 "_codecs_iso2022.c"
        var $20=(($19+1)&4294967295); //@line 166 "_codecs_iso2022.c"
        HEAP[$20]=40; //@line 166 "_codecs_iso2022.c"
        var $21=HEAP[$outbuf_addr]; //@line 166 "_codecs_iso2022.c"
        var $22=HEAP[$21]; //@line 166 "_codecs_iso2022.c"
        var $23=(($22+2)&4294967295); //@line 166 "_codecs_iso2022.c"
        HEAP[$23]=66; //@line 166 "_codecs_iso2022.c"
        var $24=HEAP[$state_addr]; //@line 167 "_codecs_iso2022.c"
        var $25=(($24)&4294967295); //@line 167 "_codecs_iso2022.c"
        var $26=$25; //@line 167 "_codecs_iso2022.c"
        var $27=(($26)&4294967295); //@line 167 "_codecs_iso2022.c"
        HEAP[$27]=66; //@line 167 "_codecs_iso2022.c"
        var $28=HEAP[$outbuf_addr]; //@line 168 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 168 "_codecs_iso2022.c"
        var $30=(($29+3)&4294967295); //@line 168 "_codecs_iso2022.c"
        var $31=HEAP[$outbuf_addr]; //@line 168 "_codecs_iso2022.c"
        HEAP[$31]=$30; //@line 168 "_codecs_iso2022.c"
        var $32=HEAP[$outleft_addr]; //@line 168 "_codecs_iso2022.c"
        var $33=((($32) - 3)&4294967295); //@line 168 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$33; //@line 168 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 168 "_codecs_iso2022.c"
      case 6: // $bb5
        var $34=HEAP[$state_addr]; //@line 170 "_codecs_iso2022.c"
        var $35=(($34)&4294967295); //@line 170 "_codecs_iso2022.c"
        var $36=$35; //@line 170 "_codecs_iso2022.c"
        var $37=(($36+4)&4294967295); //@line 170 "_codecs_iso2022.c"
        var $38=HEAP[$37]; //@line 170 "_codecs_iso2022.c"
        var $39=unSign(($38), 8, 0); //@line 170 "_codecs_iso2022.c"
        var $40=($39) & 1; //@line 170 "_codecs_iso2022.c"
        var $41=((($40)) & 255); //@line 170 "_codecs_iso2022.c"
        var $toBool=reSign(($41), 8, 0)!=0; //@line 170 "_codecs_iso2022.c"
        if ($toBool) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 170 "_codecs_iso2022.c"
      case 7: // $bb6
        var $42=HEAP[$outleft_addr]; //@line 171 "_codecs_iso2022.c"
        var $43=((($42))|0) <= 0; //@line 171 "_codecs_iso2022.c"
        if ($43) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 171 "_codecs_iso2022.c"
      case 8: // $bb7
        HEAP[$0]=-1; //@line 171 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 171 "_codecs_iso2022.c"
      case 9: // $bb8
        var $44=HEAP[$outbuf_addr]; //@line 171 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 171 "_codecs_iso2022.c"
        var $46=(($45)&4294967295); //@line 171 "_codecs_iso2022.c"
        HEAP[$46]=15; //@line 171 "_codecs_iso2022.c"
        var $47=HEAP[$state_addr]; //@line 172 "_codecs_iso2022.c"
        var $48=(($47)&4294967295); //@line 172 "_codecs_iso2022.c"
        var $49=$48; //@line 172 "_codecs_iso2022.c"
        var $50=(($49+4)&4294967295); //@line 172 "_codecs_iso2022.c"
        var $51=HEAP[$50]; //@line 172 "_codecs_iso2022.c"
        var $52=($51) & -2; //@line 172 "_codecs_iso2022.c"
        var $53=HEAP[$state_addr]; //@line 172 "_codecs_iso2022.c"
        var $54=(($53)&4294967295); //@line 172 "_codecs_iso2022.c"
        var $55=$54; //@line 172 "_codecs_iso2022.c"
        var $56=(($55+4)&4294967295); //@line 172 "_codecs_iso2022.c"
        HEAP[$56]=$52; //@line 172 "_codecs_iso2022.c"
        var $57=HEAP[$outbuf_addr]; //@line 173 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 173 "_codecs_iso2022.c"
        var $59=(($58+1)&4294967295); //@line 173 "_codecs_iso2022.c"
        var $60=HEAP[$outbuf_addr]; //@line 173 "_codecs_iso2022.c"
        HEAP[$60]=$59; //@line 173 "_codecs_iso2022.c"
        var $61=HEAP[$outleft_addr]; //@line 173 "_codecs_iso2022.c"
        var $62=((($61) - 1)&4294967295); //@line 173 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$62; //@line 173 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 173 "_codecs_iso2022.c"
      case 10: // $bb9
        var $63=HEAP[$outleft_addr]; //@line 175 "_codecs_iso2022.c"
        var $64=((($63))|0) <= 0; //@line 175 "_codecs_iso2022.c"
        if ($64) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 175 "_codecs_iso2022.c"
      case 11: // $bb10
        HEAP[$0]=-1; //@line 175 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 175 "_codecs_iso2022.c"
      case 12: // $bb11
        var $65=HEAP[$outbuf_addr]; //@line 175 "_codecs_iso2022.c"
        var $66=HEAP[$65]; //@line 175 "_codecs_iso2022.c"
        var $67=HEAP[$c]; //@line 175 "_codecs_iso2022.c"
        var $68=((($67)) & 255); //@line 175 "_codecs_iso2022.c"
        var $69=(($66)&4294967295); //@line 175 "_codecs_iso2022.c"
        HEAP[$69]=$68; //@line 175 "_codecs_iso2022.c"
        var $70=HEAP[$inbuf_addr]; //@line 176 "_codecs_iso2022.c"
        var $71=HEAP[$70]; //@line 176 "_codecs_iso2022.c"
        var $72=(($71+2)&4294967295); //@line 176 "_codecs_iso2022.c"
        var $73=HEAP[$inbuf_addr]; //@line 176 "_codecs_iso2022.c"
        HEAP[$73]=$72; //@line 176 "_codecs_iso2022.c"
        var $74=HEAP[$inleft_addr]; //@line 176 "_codecs_iso2022.c"
        var $75=((($74) - 1)&4294967295); //@line 176 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$75; //@line 176 "_codecs_iso2022.c"
        var $76=HEAP[$outbuf_addr]; //@line 176 "_codecs_iso2022.c"
        var $77=HEAP[$76]; //@line 176 "_codecs_iso2022.c"
        var $78=(($77+1)&4294967295); //@line 176 "_codecs_iso2022.c"
        var $79=HEAP[$outbuf_addr]; //@line 176 "_codecs_iso2022.c"
        HEAP[$79]=$78; //@line 176 "_codecs_iso2022.c"
        var $80=HEAP[$outleft_addr]; //@line 176 "_codecs_iso2022.c"
        var $81=((($80) - 1)&4294967295); //@line 176 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$81; //@line 176 "_codecs_iso2022.c"
        __label__ = 82; break; //@line 176 "_codecs_iso2022.c"
      case 13: // $bb12
        var $82=HEAP[$c]; //@line 180 "_codecs_iso2022.c"
        var $83=((($82))>>>0) >>> 10; //@line 180 "_codecs_iso2022.c"
        var $84=((($83))|0)==54; //@line 180 "_codecs_iso2022.c"
        if ($84) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 180 "_codecs_iso2022.c"
      case 14: // $bb13
        var $85=HEAP[$inleft_addr]; //@line 180 "_codecs_iso2022.c"
        var $86=((($85))|0) <= 1; //@line 180 "_codecs_iso2022.c"
        if ($86) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 180 "_codecs_iso2022.c"
      case 15: // $bb14
        HEAP[$0]=-2; //@line 180 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 180 "_codecs_iso2022.c"
      case 16: // $bb15
        var $87=HEAP[$inbuf_addr]; //@line 180 "_codecs_iso2022.c"
        var $88=HEAP[$87]; //@line 180 "_codecs_iso2022.c"
        var $89=(($88+2)&4294967295); //@line 180 "_codecs_iso2022.c"
        var $90=HEAP[$89]; //@line 180 "_codecs_iso2022.c"
        var $91=unSign(($90), 16, 0) >>> 10; //@line 180 "_codecs_iso2022.c"
        var $92=reSign(($91), 16, 0)==55; //@line 180 "_codecs_iso2022.c"
        if ($92) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 180 "_codecs_iso2022.c"
      case 17: // $bb16
        var $93=HEAP[$c]; //@line 180 "_codecs_iso2022.c"
        var $94=((($93) - 55296)&4294967295); //@line 180 "_codecs_iso2022.c"
        var $95=($94) << 10; //@line 180 "_codecs_iso2022.c"
        var $96=HEAP[$inbuf_addr]; //@line 180 "_codecs_iso2022.c"
        var $97=HEAP[$96]; //@line 180 "_codecs_iso2022.c"
        var $98=(($97+2)&4294967295); //@line 180 "_codecs_iso2022.c"
        var $99=HEAP[$98]; //@line 180 "_codecs_iso2022.c"
        var $100=unSign(($99), 16, 0); //@line 180 "_codecs_iso2022.c"
        var $101=((($95) + ($100))&4294967295); //@line 180 "_codecs_iso2022.c"
        var $102=((($101) + 9216)&4294967295); //@line 180 "_codecs_iso2022.c"
        HEAP[$c]=$102; //@line 180 "_codecs_iso2022.c"
        __label__ = 18; break; //@line 180 "_codecs_iso2022.c"
      case 18: // $bb17
        var $103=HEAP[$c]; //@line 181 "_codecs_iso2022.c"
        var $104=((($103))>>>0) > 65535; //@line 181 "_codecs_iso2022.c"
        if ($104) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 181 "_codecs_iso2022.c"
      case 19: // $bb18
        HEAP[$iftmp_13]=2; //@line 181 "_codecs_iso2022.c"
        __label__ = 21; break; //@line 181 "_codecs_iso2022.c"
      case 20: // $bb19
        HEAP[$iftmp_13]=1; //@line 181 "_codecs_iso2022.c"
        __label__ = 21; break; //@line 181 "_codecs_iso2022.c"
      case 21: // $bb20
        var $105=HEAP[$iftmp_13]; //@line 181 "_codecs_iso2022.c"
        HEAP[$insize]=$105; //@line 181 "_codecs_iso2022.c"
        HEAP[$encoded]=-1; //@line 183 "_codecs_iso2022.c"
        var $106=HEAP[$config_addr]; //@line 184 "_codecs_iso2022.c"
        var $107=$106; //@line 184 "_codecs_iso2022.c"
        var $108=(($107+4)&4294967295); //@line 184 "_codecs_iso2022.c"
        var $109=HEAP[$108]; //@line 184 "_codecs_iso2022.c"
        HEAP[$dsg]=$109; //@line 184 "_codecs_iso2022.c"
        __label__ = 36; break; //@line 184 "_codecs_iso2022.c"
      case 22: // $bb21
        HEAP[$length]=1; //@line 185 "_codecs_iso2022.c"
        var $110=HEAP[$dsg]; //@line 186 "_codecs_iso2022.c"
        var $111=(($110+12)&4294967295); //@line 186 "_codecs_iso2022.c"
        var $112=HEAP[$111]; //@line 186 "_codecs_iso2022.c"
        var $113=FUNCTION_TABLE[$112]($c, $length); //@line 186 "_codecs_iso2022.c"
        HEAP[$encoded]=$113; //@line 186 "_codecs_iso2022.c"
        var $114=HEAP[$encoded]; //@line 187 "_codecs_iso2022.c"
        var $115=reSign(($114), 16, 0)==-2; //@line 187 "_codecs_iso2022.c"
        if ($115) { __label__ = 23; break; } else { __label__ = 34; break; } //@line 187 "_codecs_iso2022.c"
      case 23: // $bb22
        var $116=HEAP[$inleft_addr]; //@line 190 "_codecs_iso2022.c"
        var $117=((($116))|0) <= 1; //@line 190 "_codecs_iso2022.c"
        if ($117) { __label__ = 24; break; } else { __label__ = 27; break; } //@line 190 "_codecs_iso2022.c"
      case 24: // $bb23
        var $118=HEAP[$flags_addr]; //@line 191 "_codecs_iso2022.c"
        var $119=($118) & 1; //@line 191 "_codecs_iso2022.c"
        var $120=((($119))|0)==0; //@line 191 "_codecs_iso2022.c"
        if ($120) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 191 "_codecs_iso2022.c"
      case 25: // $bb24
        HEAP[$0]=-2; //@line 192 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 192 "_codecs_iso2022.c"
      case 26: // $bb25
        HEAP[$length]=-1; //@line 193 "_codecs_iso2022.c"
        __label__ = 28; break; //@line 193 "_codecs_iso2022.c"
      case 27: // $bb26
        HEAP[$length]=2; //@line 196 "_codecs_iso2022.c"
        __label__ = 28; break; //@line 196 "_codecs_iso2022.c"
      case 28: // $bb27
        var $121=HEAP[$length]; //@line 198 "_codecs_iso2022.c"
        var $122=((($121))|0)==2; //@line 198 "_codecs_iso2022.c"
        if ($122) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 198 "_codecs_iso2022.c"
      case 29: // $bb28
        var $123=HEAP[$inbuf_addr]; //@line 200 "_codecs_iso2022.c"
        var $124=HEAP[$123]; //@line 200 "_codecs_iso2022.c"
        var $125=(($124)&4294967295); //@line 200 "_codecs_iso2022.c"
        var $126=HEAP[$125]; //@line 200 "_codecs_iso2022.c"
        var $127=unSign(($126), 16, 0); //@line 200 "_codecs_iso2022.c"
        var $128=(($u4in)&4294967295); //@line 200 "_codecs_iso2022.c"
        HEAP[$128]=$127; //@line 200 "_codecs_iso2022.c"
        var $129=HEAP[$inbuf_addr]; //@line 201 "_codecs_iso2022.c"
        var $130=HEAP[$129]; //@line 201 "_codecs_iso2022.c"
        var $131=(($130+2)&4294967295); //@line 201 "_codecs_iso2022.c"
        var $132=HEAP[$131]; //@line 201 "_codecs_iso2022.c"
        var $133=unSign(($132), 16, 0); //@line 201 "_codecs_iso2022.c"
        var $134=(($u4in+4)&4294967295); //@line 201 "_codecs_iso2022.c"
        HEAP[$134]=$133; //@line 201 "_codecs_iso2022.c"
        var $135=HEAP[$dsg]; //@line 202 "_codecs_iso2022.c"
        var $136=(($135+12)&4294967295); //@line 202 "_codecs_iso2022.c"
        var $137=HEAP[$136]; //@line 202 "_codecs_iso2022.c"
        var $u4in29=$u4in; //@line 202 "_codecs_iso2022.c"
        var $138=FUNCTION_TABLE[$137]($u4in29, $length); //@line 202 "_codecs_iso2022.c"
        HEAP[$encoded]=$138; //@line 202 "_codecs_iso2022.c"
        __label__ = 31; break; //@line 202 "_codecs_iso2022.c"
      case 30: // $bb30
        var $139=HEAP[$dsg]; //@line 204 "_codecs_iso2022.c"
        var $140=(($139+12)&4294967295); //@line 204 "_codecs_iso2022.c"
        var $141=HEAP[$140]; //@line 204 "_codecs_iso2022.c"
        var $142=FUNCTION_TABLE[$141]($c, $length); //@line 204 "_codecs_iso2022.c"
        HEAP[$encoded]=$142; //@line 204 "_codecs_iso2022.c"
        __label__ = 31; break; //@line 204 "_codecs_iso2022.c"
      case 31: // $bb31
        var $143=HEAP[$encoded]; //@line 208 "_codecs_iso2022.c"
        var $144=reSign(($143), 16, 0)!=-1; //@line 208 "_codecs_iso2022.c"
        if ($144) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 208 "_codecs_iso2022.c"
      case 32: // $bb32
        var $145=HEAP[$length]; //@line 209 "_codecs_iso2022.c"
        HEAP[$insize]=$145; //@line 209 "_codecs_iso2022.c"
        __label__ = 37; break; //@line 209 "_codecs_iso2022.c"
      case 33: // $bb33
        __label__ = 35; break; //@line 209 "_codecs_iso2022.c"
      case 34: // $bb34
        var $146=HEAP[$encoded]; //@line 213 "_codecs_iso2022.c"
        var $147=reSign(($146), 16, 0)!=-1; //@line 213 "_codecs_iso2022.c"
        if ($147) { __label__ = 37; break; } else { __label__ = 35; break; } //@line 213 "_codecs_iso2022.c"
      case 35: // $bb35
        var $148=HEAP[$dsg]; //@line 184 "_codecs_iso2022.c"
        var $149=(($148+16)&4294967295); //@line 184 "_codecs_iso2022.c"
        HEAP[$dsg]=$149; //@line 184 "_codecs_iso2022.c"
        __label__ = 36; break; //@line 184 "_codecs_iso2022.c"
      case 36: // $bb36
        var $150=HEAP[$dsg]; //@line 184 "_codecs_iso2022.c"
        var $151=(($150)&4294967295); //@line 184 "_codecs_iso2022.c"
        var $152=HEAP[$151]; //@line 184 "_codecs_iso2022.c"
        var $153=reSign(($152), 8, 0)!=0; //@line 184 "_codecs_iso2022.c"
        if ($153) { __label__ = 22; break; } else { __label__ = 37; break; } //@line 184 "_codecs_iso2022.c"
      case 37: // $bb37
        var $154=HEAP[$dsg]; //@line 217 "_codecs_iso2022.c"
        var $155=(($154)&4294967295); //@line 217 "_codecs_iso2022.c"
        var $156=HEAP[$155]; //@line 217 "_codecs_iso2022.c"
        var $157=reSign(($156), 8, 0)==0; //@line 217 "_codecs_iso2022.c"
        if ($157) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 217 "_codecs_iso2022.c"
      case 38: // $bb38
        HEAP[$0]=1; //@line 218 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 218 "_codecs_iso2022.c"
      case 39: // $bb39
        var $158=HEAP[$dsg]; //@line 219 "_codecs_iso2022.c"
        var $159=(($158+2)&4294967295); //@line 219 "_codecs_iso2022.c"
        var $160=HEAP[$159]; //@line 219 "_codecs_iso2022.c"
        var $161=reSign(($160), 8, 0)!=1; //@line 219 "_codecs_iso2022.c"
        if ($161) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 219 "_codecs_iso2022.c"
      case 40: // $bb40
        var $162=HEAP[$dsg]; //@line 219 "_codecs_iso2022.c"
        var $163=(($162+2)&4294967295); //@line 219 "_codecs_iso2022.c"
        var $164=HEAP[$163]; //@line 219 "_codecs_iso2022.c"
        var $165=reSign(($164), 8, 0)!=2; //@line 219 "_codecs_iso2022.c"
        if ($165) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 219 "_codecs_iso2022.c"
      case 41: // $bb41
        ___assert_fail(((__str9)&4294967295), ((__str10)&4294967295), 219, ((___PRETTY_FUNCTION___8716)&4294967295)); //@line 219 "_codecs_iso2022.c"
        throw "Reached an unreachable! Original .ll line: 1364"; //@line 219 "_codecs_iso2022.c"
      case 42: // $bb42
        var $166=HEAP[$dsg]; //@line 221 "_codecs_iso2022.c"
        var $167=(($166+1)&4294967295); //@line 221 "_codecs_iso2022.c"
        var $168=HEAP[$167]; //@line 221 "_codecs_iso2022.c"
        var $169=unSign(($168), 8, 0); //@line 221 "_codecs_iso2022.c"
        if ($169 == 0) {
          __label__ = 43; break;
        }
        else if ($169 == 1) {
          __label__ = 60; break;
        }
        else {
        __label__ = 73; break;
        }
        
      case 43: // $bb43
        var $170=HEAP[$state_addr]; //@line 223 "_codecs_iso2022.c"
        var $171=(($170)&4294967295); //@line 223 "_codecs_iso2022.c"
        var $172=$171; //@line 223 "_codecs_iso2022.c"
        var $173=(($172+4)&4294967295); //@line 223 "_codecs_iso2022.c"
        var $174=HEAP[$173]; //@line 223 "_codecs_iso2022.c"
        var $175=unSign(($174), 8, 0); //@line 223 "_codecs_iso2022.c"
        var $176=($175) & 1; //@line 223 "_codecs_iso2022.c"
        var $177=((($176)) & 255); //@line 223 "_codecs_iso2022.c"
        var $toBool44=reSign(($177), 8, 0)!=0; //@line 223 "_codecs_iso2022.c"
        if ($toBool44) { __label__ = 44; break; } else { __label__ = 47; break; } //@line 223 "_codecs_iso2022.c"
      case 44: // $bb45
        var $178=HEAP[$outleft_addr]; //@line 224 "_codecs_iso2022.c"
        var $179=((($178))|0) <= 0; //@line 224 "_codecs_iso2022.c"
        if ($179) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 224 "_codecs_iso2022.c"
      case 45: // $bb46
        HEAP[$0]=-1; //@line 224 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 224 "_codecs_iso2022.c"
      case 46: // $bb47
        var $180=HEAP[$outbuf_addr]; //@line 224 "_codecs_iso2022.c"
        var $181=HEAP[$180]; //@line 224 "_codecs_iso2022.c"
        var $182=(($181)&4294967295); //@line 224 "_codecs_iso2022.c"
        HEAP[$182]=15; //@line 224 "_codecs_iso2022.c"
        var $183=HEAP[$state_addr]; //@line 225 "_codecs_iso2022.c"
        var $184=(($183)&4294967295); //@line 225 "_codecs_iso2022.c"
        var $185=$184; //@line 225 "_codecs_iso2022.c"
        var $186=(($185+4)&4294967295); //@line 225 "_codecs_iso2022.c"
        var $187=HEAP[$186]; //@line 225 "_codecs_iso2022.c"
        var $188=($187) & -2; //@line 225 "_codecs_iso2022.c"
        var $189=HEAP[$state_addr]; //@line 225 "_codecs_iso2022.c"
        var $190=(($189)&4294967295); //@line 225 "_codecs_iso2022.c"
        var $191=$190; //@line 225 "_codecs_iso2022.c"
        var $192=(($191+4)&4294967295); //@line 225 "_codecs_iso2022.c"
        HEAP[$192]=$188; //@line 225 "_codecs_iso2022.c"
        var $193=HEAP[$outbuf_addr]; //@line 226 "_codecs_iso2022.c"
        var $194=HEAP[$193]; //@line 226 "_codecs_iso2022.c"
        var $195=(($194+1)&4294967295); //@line 226 "_codecs_iso2022.c"
        var $196=HEAP[$outbuf_addr]; //@line 226 "_codecs_iso2022.c"
        HEAP[$196]=$195; //@line 226 "_codecs_iso2022.c"
        var $197=HEAP[$outleft_addr]; //@line 226 "_codecs_iso2022.c"
        var $198=((($197) - 1)&4294967295); //@line 226 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$198; //@line 226 "_codecs_iso2022.c"
        __label__ = 47; break; //@line 226 "_codecs_iso2022.c"
      case 47: // $bb48
        var $199=HEAP[$state_addr]; //@line 228 "_codecs_iso2022.c"
        var $200=(($199)&4294967295); //@line 228 "_codecs_iso2022.c"
        var $201=$200; //@line 228 "_codecs_iso2022.c"
        var $202=(($201)&4294967295); //@line 228 "_codecs_iso2022.c"
        var $203=HEAP[$202]; //@line 228 "_codecs_iso2022.c"
        var $204=HEAP[$dsg]; //@line 228 "_codecs_iso2022.c"
        var $205=(($204)&4294967295); //@line 228 "_codecs_iso2022.c"
        var $206=HEAP[$205]; //@line 228 "_codecs_iso2022.c"
        var $207=reSign(($203), 8, 0)!=reSign(($206), 8, 0); //@line 228 "_codecs_iso2022.c"
        if ($207) { __label__ = 48; break; } else { __label__ = 59; break; } //@line 228 "_codecs_iso2022.c"
      case 48: // $bb49
        var $208=HEAP[$dsg]; //@line 229 "_codecs_iso2022.c"
        var $209=(($208+2)&4294967295); //@line 229 "_codecs_iso2022.c"
        var $210=HEAP[$209]; //@line 229 "_codecs_iso2022.c"
        var $211=reSign(($210), 8, 0)==1; //@line 229 "_codecs_iso2022.c"
        if ($211) { __label__ = 49; break; } else { __label__ = 52; break; } //@line 229 "_codecs_iso2022.c"
      case 49: // $bb50
        var $212=HEAP[$outleft_addr]; //@line 230 "_codecs_iso2022.c"
        var $213=((($212))|0) <= 2; //@line 230 "_codecs_iso2022.c"
        if ($213) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 230 "_codecs_iso2022.c"
      case 50: // $bb51
        HEAP[$0]=-1; //@line 230 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 230 "_codecs_iso2022.c"
      case 51: // $bb52
        var $214=HEAP[$outbuf_addr]; //@line 230 "_codecs_iso2022.c"
        var $215=HEAP[$214]; //@line 230 "_codecs_iso2022.c"
        var $216=(($215)&4294967295); //@line 230 "_codecs_iso2022.c"
        HEAP[$216]=27; //@line 230 "_codecs_iso2022.c"
        var $217=HEAP[$outbuf_addr]; //@line 230 "_codecs_iso2022.c"
        var $218=HEAP[$217]; //@line 230 "_codecs_iso2022.c"
        var $219=(($218+1)&4294967295); //@line 230 "_codecs_iso2022.c"
        HEAP[$219]=40; //@line 230 "_codecs_iso2022.c"
        var $220=HEAP[$outbuf_addr]; //@line 230 "_codecs_iso2022.c"
        var $221=HEAP[$220]; //@line 230 "_codecs_iso2022.c"
        var $222=HEAP[$dsg]; //@line 230 "_codecs_iso2022.c"
        var $223=(($222)&4294967295); //@line 230 "_codecs_iso2022.c"
        var $224=HEAP[$223]; //@line 230 "_codecs_iso2022.c"
        var $225=($224) & 127; //@line 230 "_codecs_iso2022.c"
        var $226=(($221+2)&4294967295); //@line 230 "_codecs_iso2022.c"
        HEAP[$226]=$225; //@line 230 "_codecs_iso2022.c"
        var $227=HEAP[$dsg]; //@line 231 "_codecs_iso2022.c"
        var $228=(($227)&4294967295); //@line 231 "_codecs_iso2022.c"
        var $229=HEAP[$228]; //@line 231 "_codecs_iso2022.c"
        var $230=HEAP[$state_addr]; //@line 231 "_codecs_iso2022.c"
        var $231=(($230)&4294967295); //@line 231 "_codecs_iso2022.c"
        var $232=$231; //@line 231 "_codecs_iso2022.c"
        var $233=(($232)&4294967295); //@line 231 "_codecs_iso2022.c"
        HEAP[$233]=$229; //@line 231 "_codecs_iso2022.c"
        var $234=HEAP[$outbuf_addr]; //@line 232 "_codecs_iso2022.c"
        var $235=HEAP[$234]; //@line 232 "_codecs_iso2022.c"
        var $236=(($235+3)&4294967295); //@line 232 "_codecs_iso2022.c"
        var $237=HEAP[$outbuf_addr]; //@line 232 "_codecs_iso2022.c"
        HEAP[$237]=$236; //@line 232 "_codecs_iso2022.c"
        var $238=HEAP[$outleft_addr]; //@line 232 "_codecs_iso2022.c"
        var $239=((($238) - 3)&4294967295); //@line 232 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$239; //@line 232 "_codecs_iso2022.c"
        __label__ = 59; break; //@line 232 "_codecs_iso2022.c"
      case 52: // $bb53
        var $240=HEAP[$dsg]; //@line 234 "_codecs_iso2022.c"
        var $241=(($240)&4294967295); //@line 234 "_codecs_iso2022.c"
        var $242=HEAP[$241]; //@line 234 "_codecs_iso2022.c"
        var $243=reSign(($242), 8, 0)==-62; //@line 234 "_codecs_iso2022.c"
        if ($243) { __label__ = 53; break; } else { __label__ = 56; break; } //@line 234 "_codecs_iso2022.c"
      case 53: // $bb54
        var $244=HEAP[$outleft_addr]; //@line 235 "_codecs_iso2022.c"
        var $245=((($244))|0) <= 2; //@line 235 "_codecs_iso2022.c"
        if ($245) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 235 "_codecs_iso2022.c"
      case 54: // $bb55
        HEAP[$0]=-1; //@line 235 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 235 "_codecs_iso2022.c"
      case 55: // $bb56
        var $246=HEAP[$outbuf_addr]; //@line 235 "_codecs_iso2022.c"
        var $247=HEAP[$246]; //@line 235 "_codecs_iso2022.c"
        var $248=(($247)&4294967295); //@line 235 "_codecs_iso2022.c"
        HEAP[$248]=27; //@line 235 "_codecs_iso2022.c"
        var $249=HEAP[$outbuf_addr]; //@line 235 "_codecs_iso2022.c"
        var $250=HEAP[$249]; //@line 235 "_codecs_iso2022.c"
        var $251=(($250+1)&4294967295); //@line 235 "_codecs_iso2022.c"
        HEAP[$251]=36; //@line 235 "_codecs_iso2022.c"
        var $252=HEAP[$outbuf_addr]; //@line 235 "_codecs_iso2022.c"
        var $253=HEAP[$252]; //@line 235 "_codecs_iso2022.c"
        var $254=HEAP[$dsg]; //@line 235 "_codecs_iso2022.c"
        var $255=(($254)&4294967295); //@line 235 "_codecs_iso2022.c"
        var $256=HEAP[$255]; //@line 235 "_codecs_iso2022.c"
        var $257=($256) & 127; //@line 235 "_codecs_iso2022.c"
        var $258=(($253+2)&4294967295); //@line 235 "_codecs_iso2022.c"
        HEAP[$258]=$257; //@line 235 "_codecs_iso2022.c"
        var $259=HEAP[$dsg]; //@line 236 "_codecs_iso2022.c"
        var $260=(($259)&4294967295); //@line 236 "_codecs_iso2022.c"
        var $261=HEAP[$260]; //@line 236 "_codecs_iso2022.c"
        var $262=HEAP[$state_addr]; //@line 236 "_codecs_iso2022.c"
        var $263=(($262)&4294967295); //@line 236 "_codecs_iso2022.c"
        var $264=$263; //@line 236 "_codecs_iso2022.c"
        var $265=(($264)&4294967295); //@line 236 "_codecs_iso2022.c"
        HEAP[$265]=$261; //@line 236 "_codecs_iso2022.c"
        var $266=HEAP[$outbuf_addr]; //@line 237 "_codecs_iso2022.c"
        var $267=HEAP[$266]; //@line 237 "_codecs_iso2022.c"
        var $268=(($267+3)&4294967295); //@line 237 "_codecs_iso2022.c"
        var $269=HEAP[$outbuf_addr]; //@line 237 "_codecs_iso2022.c"
        HEAP[$269]=$268; //@line 237 "_codecs_iso2022.c"
        var $270=HEAP[$outleft_addr]; //@line 237 "_codecs_iso2022.c"
        var $271=((($270) - 3)&4294967295); //@line 237 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$271; //@line 237 "_codecs_iso2022.c"
        __label__ = 59; break; //@line 237 "_codecs_iso2022.c"
      case 56: // $bb57
        var $272=HEAP[$outleft_addr]; //@line 240 "_codecs_iso2022.c"
        var $273=((($272))|0) <= 3; //@line 240 "_codecs_iso2022.c"
        if ($273) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 240 "_codecs_iso2022.c"
      case 57: // $bb58
        HEAP[$0]=-1; //@line 240 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 240 "_codecs_iso2022.c"
      case 58: // $bb59
        var $274=HEAP[$outbuf_addr]; //@line 240 "_codecs_iso2022.c"
        var $275=HEAP[$274]; //@line 240 "_codecs_iso2022.c"
        var $276=(($275)&4294967295); //@line 240 "_codecs_iso2022.c"
        HEAP[$276]=27; //@line 240 "_codecs_iso2022.c"
        var $277=HEAP[$outbuf_addr]; //@line 240 "_codecs_iso2022.c"
        var $278=HEAP[$277]; //@line 240 "_codecs_iso2022.c"
        var $279=(($278+1)&4294967295); //@line 240 "_codecs_iso2022.c"
        HEAP[$279]=36; //@line 240 "_codecs_iso2022.c"
        var $280=HEAP[$outbuf_addr]; //@line 240 "_codecs_iso2022.c"
        var $281=HEAP[$280]; //@line 240 "_codecs_iso2022.c"
        var $282=(($281+2)&4294967295); //@line 240 "_codecs_iso2022.c"
        HEAP[$282]=40; //@line 240 "_codecs_iso2022.c"
        var $283=HEAP[$outbuf_addr]; //@line 240 "_codecs_iso2022.c"
        var $284=HEAP[$283]; //@line 240 "_codecs_iso2022.c"
        var $285=HEAP[$dsg]; //@line 240 "_codecs_iso2022.c"
        var $286=(($285)&4294967295); //@line 240 "_codecs_iso2022.c"
        var $287=HEAP[$286]; //@line 240 "_codecs_iso2022.c"
        var $288=($287) & 127; //@line 240 "_codecs_iso2022.c"
        var $289=(($284+3)&4294967295); //@line 240 "_codecs_iso2022.c"
        HEAP[$289]=$288; //@line 240 "_codecs_iso2022.c"
        var $290=HEAP[$dsg]; //@line 242 "_codecs_iso2022.c"
        var $291=(($290)&4294967295); //@line 242 "_codecs_iso2022.c"
        var $292=HEAP[$291]; //@line 242 "_codecs_iso2022.c"
        var $293=HEAP[$state_addr]; //@line 242 "_codecs_iso2022.c"
        var $294=(($293)&4294967295); //@line 242 "_codecs_iso2022.c"
        var $295=$294; //@line 242 "_codecs_iso2022.c"
        var $296=(($295)&4294967295); //@line 242 "_codecs_iso2022.c"
        HEAP[$296]=$292; //@line 242 "_codecs_iso2022.c"
        var $297=HEAP[$outbuf_addr]; //@line 243 "_codecs_iso2022.c"
        var $298=HEAP[$297]; //@line 243 "_codecs_iso2022.c"
        var $299=(($298+4)&4294967295); //@line 243 "_codecs_iso2022.c"
        var $300=HEAP[$outbuf_addr]; //@line 243 "_codecs_iso2022.c"
        HEAP[$300]=$299; //@line 243 "_codecs_iso2022.c"
        var $301=HEAP[$outleft_addr]; //@line 243 "_codecs_iso2022.c"
        var $302=((($301) - 4)&4294967295); //@line 243 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$302; //@line 243 "_codecs_iso2022.c"
        __label__ = 59; break; //@line 243 "_codecs_iso2022.c"
      case 59: // $bb60
        __label__ = 74; break; //@line 243 "_codecs_iso2022.c"
      case 60: // $bb61
        var $303=HEAP[$state_addr]; //@line 248 "_codecs_iso2022.c"
        var $304=(($303)&4294967295); //@line 248 "_codecs_iso2022.c"
        var $305=$304; //@line 248 "_codecs_iso2022.c"
        var $306=(($305+1)&4294967295); //@line 248 "_codecs_iso2022.c"
        var $307=HEAP[$306]; //@line 248 "_codecs_iso2022.c"
        var $308=HEAP[$dsg]; //@line 248 "_codecs_iso2022.c"
        var $309=(($308)&4294967295); //@line 248 "_codecs_iso2022.c"
        var $310=HEAP[$309]; //@line 248 "_codecs_iso2022.c"
        var $311=reSign(($307), 8, 0)!=reSign(($310), 8, 0); //@line 248 "_codecs_iso2022.c"
        if ($311) { __label__ = 61; break; } else { __label__ = 68; break; } //@line 248 "_codecs_iso2022.c"
      case 61: // $bb62
        var $312=HEAP[$dsg]; //@line 249 "_codecs_iso2022.c"
        var $313=(($312+2)&4294967295); //@line 249 "_codecs_iso2022.c"
        var $314=HEAP[$313]; //@line 249 "_codecs_iso2022.c"
        var $315=reSign(($314), 8, 0)==1; //@line 249 "_codecs_iso2022.c"
        if ($315) { __label__ = 62; break; } else { __label__ = 65; break; } //@line 249 "_codecs_iso2022.c"
      case 62: // $bb63
        var $316=HEAP[$outleft_addr]; //@line 250 "_codecs_iso2022.c"
        var $317=((($316))|0) <= 2; //@line 250 "_codecs_iso2022.c"
        if ($317) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 250 "_codecs_iso2022.c"
      case 63: // $bb64
        HEAP[$0]=-1; //@line 250 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 250 "_codecs_iso2022.c"
      case 64: // $bb65
        var $318=HEAP[$outbuf_addr]; //@line 250 "_codecs_iso2022.c"
        var $319=HEAP[$318]; //@line 250 "_codecs_iso2022.c"
        var $320=(($319)&4294967295); //@line 250 "_codecs_iso2022.c"
        HEAP[$320]=27; //@line 250 "_codecs_iso2022.c"
        var $321=HEAP[$outbuf_addr]; //@line 250 "_codecs_iso2022.c"
        var $322=HEAP[$321]; //@line 250 "_codecs_iso2022.c"
        var $323=(($322+1)&4294967295); //@line 250 "_codecs_iso2022.c"
        HEAP[$323]=41; //@line 250 "_codecs_iso2022.c"
        var $324=HEAP[$outbuf_addr]; //@line 250 "_codecs_iso2022.c"
        var $325=HEAP[$324]; //@line 250 "_codecs_iso2022.c"
        var $326=HEAP[$dsg]; //@line 250 "_codecs_iso2022.c"
        var $327=(($326)&4294967295); //@line 250 "_codecs_iso2022.c"
        var $328=HEAP[$327]; //@line 250 "_codecs_iso2022.c"
        var $329=($328) & 127; //@line 250 "_codecs_iso2022.c"
        var $330=(($325+2)&4294967295); //@line 250 "_codecs_iso2022.c"
        HEAP[$330]=$329; //@line 250 "_codecs_iso2022.c"
        var $331=HEAP[$dsg]; //@line 251 "_codecs_iso2022.c"
        var $332=(($331)&4294967295); //@line 251 "_codecs_iso2022.c"
        var $333=HEAP[$332]; //@line 251 "_codecs_iso2022.c"
        var $334=HEAP[$state_addr]; //@line 251 "_codecs_iso2022.c"
        var $335=(($334)&4294967295); //@line 251 "_codecs_iso2022.c"
        var $336=$335; //@line 251 "_codecs_iso2022.c"
        var $337=(($336+1)&4294967295); //@line 251 "_codecs_iso2022.c"
        HEAP[$337]=$333; //@line 251 "_codecs_iso2022.c"
        var $338=HEAP[$outbuf_addr]; //@line 252 "_codecs_iso2022.c"
        var $339=HEAP[$338]; //@line 252 "_codecs_iso2022.c"
        var $340=(($339+3)&4294967295); //@line 252 "_codecs_iso2022.c"
        var $341=HEAP[$outbuf_addr]; //@line 252 "_codecs_iso2022.c"
        HEAP[$341]=$340; //@line 252 "_codecs_iso2022.c"
        var $342=HEAP[$outleft_addr]; //@line 252 "_codecs_iso2022.c"
        var $343=((($342) - 3)&4294967295); //@line 252 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$343; //@line 252 "_codecs_iso2022.c"
        __label__ = 68; break; //@line 252 "_codecs_iso2022.c"
      case 65: // $bb66
        var $344=HEAP[$outleft_addr]; //@line 255 "_codecs_iso2022.c"
        var $345=((($344))|0) <= 3; //@line 255 "_codecs_iso2022.c"
        if ($345) { __label__ = 66; break; } else { __label__ = 67; break; } //@line 255 "_codecs_iso2022.c"
      case 66: // $bb67
        HEAP[$0]=-1; //@line 255 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 255 "_codecs_iso2022.c"
      case 67: // $bb68
        var $346=HEAP[$outbuf_addr]; //@line 255 "_codecs_iso2022.c"
        var $347=HEAP[$346]; //@line 255 "_codecs_iso2022.c"
        var $348=(($347)&4294967295); //@line 255 "_codecs_iso2022.c"
        HEAP[$348]=27; //@line 255 "_codecs_iso2022.c"
        var $349=HEAP[$outbuf_addr]; //@line 255 "_codecs_iso2022.c"
        var $350=HEAP[$349]; //@line 255 "_codecs_iso2022.c"
        var $351=(($350+1)&4294967295); //@line 255 "_codecs_iso2022.c"
        HEAP[$351]=36; //@line 255 "_codecs_iso2022.c"
        var $352=HEAP[$outbuf_addr]; //@line 255 "_codecs_iso2022.c"
        var $353=HEAP[$352]; //@line 255 "_codecs_iso2022.c"
        var $354=(($353+2)&4294967295); //@line 255 "_codecs_iso2022.c"
        HEAP[$354]=41; //@line 255 "_codecs_iso2022.c"
        var $355=HEAP[$outbuf_addr]; //@line 255 "_codecs_iso2022.c"
        var $356=HEAP[$355]; //@line 255 "_codecs_iso2022.c"
        var $357=HEAP[$dsg]; //@line 255 "_codecs_iso2022.c"
        var $358=(($357)&4294967295); //@line 255 "_codecs_iso2022.c"
        var $359=HEAP[$358]; //@line 255 "_codecs_iso2022.c"
        var $360=($359) & 127; //@line 255 "_codecs_iso2022.c"
        var $361=(($356+3)&4294967295); //@line 255 "_codecs_iso2022.c"
        HEAP[$361]=$360; //@line 255 "_codecs_iso2022.c"
        var $362=HEAP[$dsg]; //@line 257 "_codecs_iso2022.c"
        var $363=(($362)&4294967295); //@line 257 "_codecs_iso2022.c"
        var $364=HEAP[$363]; //@line 257 "_codecs_iso2022.c"
        var $365=HEAP[$state_addr]; //@line 257 "_codecs_iso2022.c"
        var $366=(($365)&4294967295); //@line 257 "_codecs_iso2022.c"
        var $367=$366; //@line 257 "_codecs_iso2022.c"
        var $368=(($367+1)&4294967295); //@line 257 "_codecs_iso2022.c"
        HEAP[$368]=$364; //@line 257 "_codecs_iso2022.c"
        var $369=HEAP[$outbuf_addr]; //@line 258 "_codecs_iso2022.c"
        var $370=HEAP[$369]; //@line 258 "_codecs_iso2022.c"
        var $371=(($370+4)&4294967295); //@line 258 "_codecs_iso2022.c"
        var $372=HEAP[$outbuf_addr]; //@line 258 "_codecs_iso2022.c"
        HEAP[$372]=$371; //@line 258 "_codecs_iso2022.c"
        var $373=HEAP[$outleft_addr]; //@line 258 "_codecs_iso2022.c"
        var $374=((($373) - 4)&4294967295); //@line 258 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$374; //@line 258 "_codecs_iso2022.c"
        __label__ = 68; break; //@line 258 "_codecs_iso2022.c"
      case 68: // $bb69
        var $375=HEAP[$state_addr]; //@line 261 "_codecs_iso2022.c"
        var $376=(($375)&4294967295); //@line 261 "_codecs_iso2022.c"
        var $377=$376; //@line 261 "_codecs_iso2022.c"
        var $378=(($377+4)&4294967295); //@line 261 "_codecs_iso2022.c"
        var $379=HEAP[$378]; //@line 261 "_codecs_iso2022.c"
        var $380=unSign(($379), 8, 0); //@line 261 "_codecs_iso2022.c"
        var $381=($380) & 1; //@line 261 "_codecs_iso2022.c"
        var $382=((($381))|0)==0; //@line 261 "_codecs_iso2022.c"
        if ($382) { __label__ = 69; break; } else { __label__ = 72; break; } //@line 261 "_codecs_iso2022.c"
      case 69: // $bb70
        var $383=HEAP[$outleft_addr]; //@line 262 "_codecs_iso2022.c"
        var $384=((($383))|0) <= 0; //@line 262 "_codecs_iso2022.c"
        if ($384) { __label__ = 70; break; } else { __label__ = 71; break; } //@line 262 "_codecs_iso2022.c"
      case 70: // $bb71
        HEAP[$0]=-1; //@line 262 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 262 "_codecs_iso2022.c"
      case 71: // $bb72
        var $385=HEAP[$outbuf_addr]; //@line 262 "_codecs_iso2022.c"
        var $386=HEAP[$385]; //@line 262 "_codecs_iso2022.c"
        var $387=(($386)&4294967295); //@line 262 "_codecs_iso2022.c"
        HEAP[$387]=14; //@line 262 "_codecs_iso2022.c"
        var $388=HEAP[$state_addr]; //@line 263 "_codecs_iso2022.c"
        var $389=(($388)&4294967295); //@line 263 "_codecs_iso2022.c"
        var $390=$389; //@line 263 "_codecs_iso2022.c"
        var $391=(($390+4)&4294967295); //@line 263 "_codecs_iso2022.c"
        var $392=HEAP[$391]; //@line 263 "_codecs_iso2022.c"
        var $393=($392) | 1; //@line 263 "_codecs_iso2022.c"
        var $394=HEAP[$state_addr]; //@line 263 "_codecs_iso2022.c"
        var $395=(($394)&4294967295); //@line 263 "_codecs_iso2022.c"
        var $396=$395; //@line 263 "_codecs_iso2022.c"
        var $397=(($396+4)&4294967295); //@line 263 "_codecs_iso2022.c"
        HEAP[$397]=$393; //@line 263 "_codecs_iso2022.c"
        var $398=HEAP[$outbuf_addr]; //@line 264 "_codecs_iso2022.c"
        var $399=HEAP[$398]; //@line 264 "_codecs_iso2022.c"
        var $400=(($399+1)&4294967295); //@line 264 "_codecs_iso2022.c"
        var $401=HEAP[$outbuf_addr]; //@line 264 "_codecs_iso2022.c"
        HEAP[$401]=$400; //@line 264 "_codecs_iso2022.c"
        var $402=HEAP[$outleft_addr]; //@line 264 "_codecs_iso2022.c"
        var $403=((($402) - 1)&4294967295); //@line 264 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$403; //@line 264 "_codecs_iso2022.c"
        __label__ = 72; break; //@line 264 "_codecs_iso2022.c"
      case 72: // $bb73
        __label__ = 74; break; //@line 264 "_codecs_iso2022.c"
      case 73: // $bb74
        HEAP[$0]=-3; //@line 269 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 269 "_codecs_iso2022.c"
      case 74: // $bb75
        var $404=HEAP[$dsg]; //@line 272 "_codecs_iso2022.c"
        var $405=(($404+2)&4294967295); //@line 272 "_codecs_iso2022.c"
        var $406=HEAP[$405]; //@line 272 "_codecs_iso2022.c"
        var $407=reSign(($406), 8, 0)==1; //@line 272 "_codecs_iso2022.c"
        if ($407) { __label__ = 75; break; } else { __label__ = 78; break; } //@line 272 "_codecs_iso2022.c"
      case 75: // $bb76
        var $408=HEAP[$outleft_addr]; //@line 273 "_codecs_iso2022.c"
        var $409=((($408))|0) <= 0; //@line 273 "_codecs_iso2022.c"
        if ($409) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 273 "_codecs_iso2022.c"
      case 76: // $bb77
        HEAP[$0]=-1; //@line 273 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 273 "_codecs_iso2022.c"
      case 77: // $bb78
        var $410=HEAP[$outbuf_addr]; //@line 273 "_codecs_iso2022.c"
        var $411=HEAP[$410]; //@line 273 "_codecs_iso2022.c"
        var $412=HEAP[$encoded]; //@line 273 "_codecs_iso2022.c"
        var $413=((($412)) & 255); //@line 273 "_codecs_iso2022.c"
        var $414=(($411)&4294967295); //@line 273 "_codecs_iso2022.c"
        HEAP[$414]=$413; //@line 273 "_codecs_iso2022.c"
        var $415=HEAP[$outbuf_addr]; //@line 274 "_codecs_iso2022.c"
        var $416=HEAP[$415]; //@line 274 "_codecs_iso2022.c"
        var $417=(($416+1)&4294967295); //@line 274 "_codecs_iso2022.c"
        var $418=HEAP[$outbuf_addr]; //@line 274 "_codecs_iso2022.c"
        HEAP[$418]=$417; //@line 274 "_codecs_iso2022.c"
        var $419=HEAP[$outleft_addr]; //@line 274 "_codecs_iso2022.c"
        var $420=((($419) - 1)&4294967295); //@line 274 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$420; //@line 274 "_codecs_iso2022.c"
        __label__ = 81; break; //@line 274 "_codecs_iso2022.c"
      case 78: // $bb79
        var $421=HEAP[$outleft_addr]; //@line 277 "_codecs_iso2022.c"
        var $422=((($421))|0) <= 1; //@line 277 "_codecs_iso2022.c"
        if ($422) { __label__ = 79; break; } else { __label__ = 80; break; } //@line 277 "_codecs_iso2022.c"
      case 79: // $bb80
        HEAP[$0]=-1; //@line 277 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 277 "_codecs_iso2022.c"
      case 80: // $bb81
        var $423=HEAP[$outbuf_addr]; //@line 277 "_codecs_iso2022.c"
        var $424=HEAP[$423]; //@line 277 "_codecs_iso2022.c"
        var $425=HEAP[$encoded]; //@line 277 "_codecs_iso2022.c"
        var $426=unSign(($425), 16, 0) >>> 8; //@line 277 "_codecs_iso2022.c"
        var $427=((($426)) & 255); //@line 277 "_codecs_iso2022.c"
        var $428=(($424)&4294967295); //@line 277 "_codecs_iso2022.c"
        HEAP[$428]=$427; //@line 277 "_codecs_iso2022.c"
        var $429=HEAP[$outbuf_addr]; //@line 277 "_codecs_iso2022.c"
        var $430=HEAP[$429]; //@line 277 "_codecs_iso2022.c"
        var $431=HEAP[$encoded]; //@line 277 "_codecs_iso2022.c"
        var $432=((($431)) & 255); //@line 277 "_codecs_iso2022.c"
        var $433=(($430+1)&4294967295); //@line 277 "_codecs_iso2022.c"
        HEAP[$433]=$432; //@line 277 "_codecs_iso2022.c"
        var $434=HEAP[$outbuf_addr]; //@line 278 "_codecs_iso2022.c"
        var $435=HEAP[$434]; //@line 278 "_codecs_iso2022.c"
        var $436=(($435+2)&4294967295); //@line 278 "_codecs_iso2022.c"
        var $437=HEAP[$outbuf_addr]; //@line 278 "_codecs_iso2022.c"
        HEAP[$437]=$436; //@line 278 "_codecs_iso2022.c"
        var $438=HEAP[$outleft_addr]; //@line 278 "_codecs_iso2022.c"
        var $439=((($438) - 2)&4294967295); //@line 278 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$439; //@line 278 "_codecs_iso2022.c"
        __label__ = 81; break; //@line 278 "_codecs_iso2022.c"
      case 81: // $bb82
        var $440=HEAP[$inbuf_addr]; //@line 280 "_codecs_iso2022.c"
        var $441=HEAP[$440]; //@line 280 "_codecs_iso2022.c"
        var $442=HEAP[$insize]; //@line 280 "_codecs_iso2022.c"
        var $443=(($441+2*$442)&4294967295); //@line 280 "_codecs_iso2022.c"
        var $444=HEAP[$inbuf_addr]; //@line 280 "_codecs_iso2022.c"
        HEAP[$444]=$443; //@line 280 "_codecs_iso2022.c"
        var $445=HEAP[$inleft_addr]; //@line 280 "_codecs_iso2022.c"
        var $446=HEAP[$insize]; //@line 280 "_codecs_iso2022.c"
        var $447=((($445) - ($446))&4294967295); //@line 280 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$447; //@line 280 "_codecs_iso2022.c"
        __label__ = 82; break; //@line 280 "_codecs_iso2022.c"
      case 82: // $bb83
        var $448=HEAP[$inleft_addr]; //@line 158 "_codecs_iso2022.c"
        var $449=((($448))|0) > 0; //@line 158 "_codecs_iso2022.c"
        if ($449) { __label__ = 1; break; } else { __label__ = 83; break; } //@line 158 "_codecs_iso2022.c"
      case 83: // $bb84
        HEAP[$0]=0; //@line 283 "_codecs_iso2022.c"
        __label__ = 84; break; //@line 283 "_codecs_iso2022.c"
      case 84: // $bb85
        var $450=HEAP[$0]; //@line 166 "_codecs_iso2022.c"
        HEAP[$retval]=$450; //@line 166 "_codecs_iso2022.c"
        __label__ = 85; break; //@line 166 "_codecs_iso2022.c"
      case 85: // $return
        var $retval86=HEAP[$retval]; //@line 166 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval86; //@line 166 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022_decode_init($state, $config) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $state_addr=__stackBase__;
        var $config_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$state_addr]=$state;
        HEAP[$config_addr]=$config;
        var $1=HEAP[$state_addr]; //@line 288 "_codecs_iso2022.c"
        var $2=(($1)&4294967295); //@line 288 "_codecs_iso2022.c"
        var $3=$2; //@line 288 "_codecs_iso2022.c"
        var $4=(($3+4)&4294967295); //@line 288 "_codecs_iso2022.c"
        HEAP[$4]=0; //@line 288 "_codecs_iso2022.c"
        var $5=HEAP[$state_addr]; //@line 289 "_codecs_iso2022.c"
        var $6=(($5)&4294967295); //@line 289 "_codecs_iso2022.c"
        var $7=$6; //@line 289 "_codecs_iso2022.c"
        var $8=(($7)&4294967295); //@line 289 "_codecs_iso2022.c"
        HEAP[$8]=66; //@line 289 "_codecs_iso2022.c"
        var $9=HEAP[$state_addr]; //@line 290 "_codecs_iso2022.c"
        var $10=(($9)&4294967295); //@line 290 "_codecs_iso2022.c"
        var $11=$10; //@line 290 "_codecs_iso2022.c"
        var $12=(($11+1)&4294967295); //@line 290 "_codecs_iso2022.c"
        HEAP[$12]=66; //@line 290 "_codecs_iso2022.c"
        var $13=HEAP[$state_addr]; //@line 291 "_codecs_iso2022.c"
        var $14=(($13)&4294967295); //@line 291 "_codecs_iso2022.c"
        var $15=$14; //@line 291 "_codecs_iso2022.c"
        var $16=(($15+2)&4294967295); //@line 291 "_codecs_iso2022.c"
        HEAP[$16]=66; //@line 291 "_codecs_iso2022.c"
        HEAP[$0]=0; //@line 292 "_codecs_iso2022.c"
        var $17=HEAP[$0]; //@line 292 "_codecs_iso2022.c"
        HEAP[$retval]=$17; //@line 292 "_codecs_iso2022.c"
        __label__ = 1; break; //@line 292 "_codecs_iso2022.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 292 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 292 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022_decode_reset($state, $config) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $state_addr=__stackBase__;
        var $config_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$state_addr]=$state;
        HEAP[$config_addr]=$config;
        var $1=HEAP[$state_addr]; //@line 297 "_codecs_iso2022.c"
        var $2=(($1)&4294967295); //@line 297 "_codecs_iso2022.c"
        var $3=$2; //@line 297 "_codecs_iso2022.c"
        var $4=(($3)&4294967295); //@line 297 "_codecs_iso2022.c"
        HEAP[$4]=66; //@line 297 "_codecs_iso2022.c"
        var $5=HEAP[$state_addr]; //@line 298 "_codecs_iso2022.c"
        var $6=(($5)&4294967295); //@line 298 "_codecs_iso2022.c"
        var $7=$6; //@line 298 "_codecs_iso2022.c"
        var $8=(($7+4)&4294967295); //@line 298 "_codecs_iso2022.c"
        var $9=HEAP[$8]; //@line 298 "_codecs_iso2022.c"
        var $10=($9) & -2; //@line 298 "_codecs_iso2022.c"
        var $11=HEAP[$state_addr]; //@line 298 "_codecs_iso2022.c"
        var $12=(($11)&4294967295); //@line 298 "_codecs_iso2022.c"
        var $13=$12; //@line 298 "_codecs_iso2022.c"
        var $14=(($13+4)&4294967295); //@line 298 "_codecs_iso2022.c"
        HEAP[$14]=$10; //@line 298 "_codecs_iso2022.c"
        HEAP[$0]=0; //@line 299 "_codecs_iso2022.c"
        var $15=HEAP[$0]; //@line 299 "_codecs_iso2022.c"
        HEAP[$retval]=$15; //@line 299 "_codecs_iso2022.c"
        __label__ = 1; break; //@line 299 "_codecs_iso2022.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 299 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 299 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022processesc($config, $state, $inbuf, $inleft) {
    var __stackBase__  = STACKTOP; STACKTOP += 38; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 38);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $config_addr=__stackBase__;
        var $state_addr=__stackBase__+4;
        var $inbuf_addr=__stackBase__+8;
        var $inleft_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $charset=__stackBase__+24;
        var $designation=__stackBase__+25;
        var $i=__stackBase__+26;
        var $esclen=__stackBase__+30;
        var $dsg=__stackBase__+34;
        var $_alloca_point_=0;
        HEAP[$config_addr]=$config;
        HEAP[$state_addr]=$state;
        HEAP[$inbuf_addr]=$inbuf;
        HEAP[$inleft_addr]=$inleft;
        HEAP[$i]=1; //@line 309 "_codecs_iso2022.c"
        __label__ = 13; break; //@line 309 "_codecs_iso2022.c"
      case 1: // $bb
        var $1=HEAP[$inleft_addr]; //@line 310 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 310 "_codecs_iso2022.c"
        var $3=HEAP[$i]; //@line 310 "_codecs_iso2022.c"
        var $4=((($2))|0) <= ((($3))|0); //@line 310 "_codecs_iso2022.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 310 "_codecs_iso2022.c"
      case 2: // $bb1
        HEAP[$0]=-2; //@line 311 "_codecs_iso2022.c"
        __label__ = 51; break; //@line 311 "_codecs_iso2022.c"
      case 3: // $bb2
        var $5=HEAP[$inbuf_addr]; //@line 312 "_codecs_iso2022.c"
        var $6=HEAP[$5]; //@line 312 "_codecs_iso2022.c"
        var $7=HEAP[$i]; //@line 312 "_codecs_iso2022.c"
        var $8=(($6+$7)&4294967295); //@line 312 "_codecs_iso2022.c"
        var $9=HEAP[$8]; //@line 312 "_codecs_iso2022.c"
        var $10=unSign(($9), 8, 0) <= 64; //@line 312 "_codecs_iso2022.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 312 "_codecs_iso2022.c"
      case 4: // $bb3
        var $11=HEAP[$inbuf_addr]; //@line 312 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 312 "_codecs_iso2022.c"
        var $13=HEAP[$i]; //@line 312 "_codecs_iso2022.c"
        var $14=(($12+$13)&4294967295); //@line 312 "_codecs_iso2022.c"
        var $15=HEAP[$14]; //@line 312 "_codecs_iso2022.c"
        var $16=unSign(($15), 8, 0) <= 90; //@line 312 "_codecs_iso2022.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 312 "_codecs_iso2022.c"
      case 5: // $bb4
        var $17=HEAP[$inbuf_addr]; //@line 312 "_codecs_iso2022.c"
        var $18=HEAP[$17]; //@line 312 "_codecs_iso2022.c"
        var $19=HEAP[$i]; //@line 312 "_codecs_iso2022.c"
        var $20=(($18+$19)&4294967295); //@line 312 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 312 "_codecs_iso2022.c"
        var $22=reSign(($21), 8, 0)==64; //@line 312 "_codecs_iso2022.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 312 "_codecs_iso2022.c"
      case 6: // $bb5
        var $23=HEAP[$i]; //@line 313 "_codecs_iso2022.c"
        var $24=((($23) + 1)&4294967295); //@line 313 "_codecs_iso2022.c"
        HEAP[$esclen]=$24; //@line 313 "_codecs_iso2022.c"
        __label__ = 14; break; //@line 313 "_codecs_iso2022.c"
      case 7: // $bb6
        var $25=HEAP[$config_addr]; //@line 316 "_codecs_iso2022.c"
        var $26=$25; //@line 316 "_codecs_iso2022.c"
        var $27=(($26)&4294967295); //@line 316 "_codecs_iso2022.c"
        var $28=HEAP[$27]; //@line 316 "_codecs_iso2022.c"
        var $29=($28) & 4; //@line 316 "_codecs_iso2022.c"
        var $30=((($29))|0)!=0; //@line 316 "_codecs_iso2022.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 316 "_codecs_iso2022.c"
      case 8: // $bb7
        var $31=HEAP[$i]; //@line 316 "_codecs_iso2022.c"
        var $32=((($31) + 1)&4294967295); //@line 316 "_codecs_iso2022.c"
        var $33=HEAP[$inleft_addr]; //@line 316 "_codecs_iso2022.c"
        var $34=HEAP[$33]; //@line 316 "_codecs_iso2022.c"
        var $35=((($32))|0) < ((($34))|0); //@line 316 "_codecs_iso2022.c"
        if ($35) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 316 "_codecs_iso2022.c"
      case 9: // $bb8
        var $36=HEAP[$inbuf_addr]; //@line 316 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 316 "_codecs_iso2022.c"
        var $38=HEAP[$i]; //@line 316 "_codecs_iso2022.c"
        var $39=(($37+$38)&4294967295); //@line 316 "_codecs_iso2022.c"
        var $40=HEAP[$39]; //@line 316 "_codecs_iso2022.c"
        var $41=reSign(($40), 8, 0)==38; //@line 316 "_codecs_iso2022.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 316 "_codecs_iso2022.c"
      case 10: // $bb9
        var $42=HEAP[$inbuf_addr]; //@line 316 "_codecs_iso2022.c"
        var $43=HEAP[$42]; //@line 316 "_codecs_iso2022.c"
        var $44=HEAP[$i]; //@line 316 "_codecs_iso2022.c"
        var $45=((($44) + 1)&4294967295); //@line 316 "_codecs_iso2022.c"
        var $46=(($43+$45)&4294967295); //@line 316 "_codecs_iso2022.c"
        var $47=HEAP[$46]; //@line 316 "_codecs_iso2022.c"
        var $48=reSign(($47), 8, 0)==64; //@line 316 "_codecs_iso2022.c"
        if ($48) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 316 "_codecs_iso2022.c"
      case 11: // $bb10
        var $49=HEAP[$i]; //@line 318 "_codecs_iso2022.c"
        var $50=((($49) + 2)&4294967295); //@line 318 "_codecs_iso2022.c"
        HEAP[$i]=$50; //@line 318 "_codecs_iso2022.c"
        __label__ = 12; break; //@line 318 "_codecs_iso2022.c"
      case 12: // $bb11
        var $51=HEAP[$i]; //@line 309 "_codecs_iso2022.c"
        var $52=((($51) + 1)&4294967295); //@line 309 "_codecs_iso2022.c"
        HEAP[$i]=$52; //@line 309 "_codecs_iso2022.c"
        __label__ = 13; break; //@line 309 "_codecs_iso2022.c"
      case 13: // $bb12
        var $53=HEAP[$i]; //@line 309 "_codecs_iso2022.c"
        var $54=((($53))|0) <= 15; //@line 309 "_codecs_iso2022.c"
        if ($54) { __label__ = 1; break; } else { __label__ = 14; break; } //@line 309 "_codecs_iso2022.c"
      case 14: // $bb13
        var $55=HEAP[$i]; //@line 321 "_codecs_iso2022.c"
        var $56=((($55))|0) > 15; //@line 321 "_codecs_iso2022.c"
        if ($56) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 321 "_codecs_iso2022.c"
      case 15: // $bb14
        HEAP[$0]=1; //@line 322 "_codecs_iso2022.c"
        __label__ = 51; break; //@line 322 "_codecs_iso2022.c"
      case 16: // $bb15
        var $57=HEAP[$esclen]; //@line 324 "_codecs_iso2022.c"
        if ($57 == 3) {
          __label__ = 17; break;
        }
        else if ($57 == 4) {
          __label__ = 28; break;
        }
        else if ($57 == 6) {
          __label__ = 36; break;
        }
        else {
        __label__ = 42; break;
        }
        
      case 17: // $bb16
        var $58=HEAP[$inbuf_addr]; //@line 326 "_codecs_iso2022.c"
        var $59=HEAP[$58]; //@line 326 "_codecs_iso2022.c"
        var $60=(($59+1)&4294967295); //@line 326 "_codecs_iso2022.c"
        var $61=HEAP[$60]; //@line 326 "_codecs_iso2022.c"
        var $62=reSign(($61), 8, 0)==36; //@line 326 "_codecs_iso2022.c"
        if ($62) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 326 "_codecs_iso2022.c"
      case 18: // $bb17
        var $63=HEAP[$inbuf_addr]; //@line 327 "_codecs_iso2022.c"
        var $64=HEAP[$63]; //@line 327 "_codecs_iso2022.c"
        var $65=(($64+2)&4294967295); //@line 327 "_codecs_iso2022.c"
        var $66=HEAP[$65]; //@line 327 "_codecs_iso2022.c"
        var $67=($66) | -128; //@line 327 "_codecs_iso2022.c"
        HEAP[$charset]=$67; //@line 327 "_codecs_iso2022.c"
        HEAP[$designation]=0; //@line 328 "_codecs_iso2022.c"
        __label__ = 27; break; //@line 328 "_codecs_iso2022.c"
      case 19: // $bb18
        var $68=HEAP[$inbuf_addr]; //@line 331 "_codecs_iso2022.c"
        var $69=HEAP[$68]; //@line 331 "_codecs_iso2022.c"
        var $70=(($69+2)&4294967295); //@line 331 "_codecs_iso2022.c"
        var $71=HEAP[$70]; //@line 331 "_codecs_iso2022.c"
        HEAP[$charset]=$71; //@line 331 "_codecs_iso2022.c"
        var $72=HEAP[$inbuf_addr]; //@line 332 "_codecs_iso2022.c"
        var $73=HEAP[$72]; //@line 332 "_codecs_iso2022.c"
        var $74=(($73+1)&4294967295); //@line 332 "_codecs_iso2022.c"
        var $75=HEAP[$74]; //@line 332 "_codecs_iso2022.c"
        var $76=reSign(($75), 8, 0)==40; //@line 332 "_codecs_iso2022.c"
        if ($76) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 332 "_codecs_iso2022.c"
      case 20: // $bb19
        HEAP[$designation]=0; //@line 332 "_codecs_iso2022.c"
        __label__ = 27; break; //@line 332 "_codecs_iso2022.c"
      case 21: // $bb20
        var $77=HEAP[$inbuf_addr]; //@line 333 "_codecs_iso2022.c"
        var $78=HEAP[$77]; //@line 333 "_codecs_iso2022.c"
        var $79=(($78+1)&4294967295); //@line 333 "_codecs_iso2022.c"
        var $80=HEAP[$79]; //@line 333 "_codecs_iso2022.c"
        var $81=reSign(($80), 8, 0)==41; //@line 333 "_codecs_iso2022.c"
        if ($81) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 333 "_codecs_iso2022.c"
      case 22: // $bb21
        HEAP[$designation]=1; //@line 333 "_codecs_iso2022.c"
        __label__ = 27; break; //@line 333 "_codecs_iso2022.c"
      case 23: // $bb22
        var $82=HEAP[$config_addr]; //@line 334 "_codecs_iso2022.c"
        var $83=$82; //@line 334 "_codecs_iso2022.c"
        var $84=(($83)&4294967295); //@line 334 "_codecs_iso2022.c"
        var $85=HEAP[$84]; //@line 334 "_codecs_iso2022.c"
        var $86=($85) & 2; //@line 334 "_codecs_iso2022.c"
        var $87=((($86))|0)==0; //@line 334 "_codecs_iso2022.c"
        if ($87) { __label__ = 26; break; } else { __label__ = 24; break; } //@line 334 "_codecs_iso2022.c"
      case 24: // $bb23
        var $88=HEAP[$inbuf_addr]; //@line 334 "_codecs_iso2022.c"
        var $89=HEAP[$88]; //@line 334 "_codecs_iso2022.c"
        var $90=(($89+1)&4294967295); //@line 334 "_codecs_iso2022.c"
        var $91=HEAP[$90]; //@line 334 "_codecs_iso2022.c"
        var $92=reSign(($91), 8, 0)!=46; //@line 334 "_codecs_iso2022.c"
        if ($92) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 334 "_codecs_iso2022.c"
      case 25: // $bb24
        HEAP[$designation]=2; //@line 335 "_codecs_iso2022.c"
        __label__ = 27; break; //@line 335 "_codecs_iso2022.c"
      case 26: // $bb25
        HEAP[$0]=3; //@line 336 "_codecs_iso2022.c"
        __label__ = 51; break; //@line 336 "_codecs_iso2022.c"
      case 27: // $bb26
        __label__ = 43; break; //@line 336 "_codecs_iso2022.c"
      case 28: // $bb27
        var $93=HEAP[$inbuf_addr]; //@line 340 "_codecs_iso2022.c"
        var $94=HEAP[$93]; //@line 340 "_codecs_iso2022.c"
        var $95=(($94+1)&4294967295); //@line 340 "_codecs_iso2022.c"
        var $96=HEAP[$95]; //@line 340 "_codecs_iso2022.c"
        var $97=reSign(($96), 8, 0)!=36; //@line 340 "_codecs_iso2022.c"
        if ($97) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 340 "_codecs_iso2022.c"
      case 29: // $bb28
        HEAP[$0]=4; //@line 341 "_codecs_iso2022.c"
        __label__ = 51; break; //@line 341 "_codecs_iso2022.c"
      case 30: // $bb29
        var $98=HEAP[$inbuf_addr]; //@line 343 "_codecs_iso2022.c"
        var $99=HEAP[$98]; //@line 343 "_codecs_iso2022.c"
        var $100=(($99+3)&4294967295); //@line 343 "_codecs_iso2022.c"
        var $101=HEAP[$100]; //@line 343 "_codecs_iso2022.c"
        var $102=($101) | -128; //@line 343 "_codecs_iso2022.c"
        HEAP[$charset]=$102; //@line 343 "_codecs_iso2022.c"
        var $103=HEAP[$inbuf_addr]; //@line 344 "_codecs_iso2022.c"
        var $104=HEAP[$103]; //@line 344 "_codecs_iso2022.c"
        var $105=(($104+2)&4294967295); //@line 344 "_codecs_iso2022.c"
        var $106=HEAP[$105]; //@line 344 "_codecs_iso2022.c"
        var $107=reSign(($106), 8, 0)==40; //@line 344 "_codecs_iso2022.c"
        if ($107) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 344 "_codecs_iso2022.c"
      case 31: // $bb30
        HEAP[$designation]=0; //@line 344 "_codecs_iso2022.c"
        __label__ = 35; break; //@line 344 "_codecs_iso2022.c"
      case 32: // $bb31
        var $108=HEAP[$inbuf_addr]; //@line 345 "_codecs_iso2022.c"
        var $109=HEAP[$108]; //@line 345 "_codecs_iso2022.c"
        var $110=(($109+2)&4294967295); //@line 345 "_codecs_iso2022.c"
        var $111=HEAP[$110]; //@line 345 "_codecs_iso2022.c"
        var $112=reSign(($111), 8, 0)==41; //@line 345 "_codecs_iso2022.c"
        if ($112) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 345 "_codecs_iso2022.c"
      case 33: // $bb32
        HEAP[$designation]=1; //@line 345 "_codecs_iso2022.c"
        __label__ = 35; break; //@line 345 "_codecs_iso2022.c"
      case 34: // $bb33
        HEAP[$0]=4; //@line 346 "_codecs_iso2022.c"
        __label__ = 51; break; //@line 346 "_codecs_iso2022.c"
      case 35: // $bb34
        __label__ = 43; break; //@line 346 "_codecs_iso2022.c"
      case 36: // $bb35
        var $113=HEAP[$config_addr]; //@line 349 "_codecs_iso2022.c"
        var $114=$113; //@line 349 "_codecs_iso2022.c"
        var $115=(($114)&4294967295); //@line 349 "_codecs_iso2022.c"
        var $116=HEAP[$115]; //@line 349 "_codecs_iso2022.c"
        var $117=($116) & 4; //@line 349 "_codecs_iso2022.c"
        var $118=((($117))|0)==0; //@line 349 "_codecs_iso2022.c"
        if ($118) { __label__ = 41; break; } else { __label__ = 37; break; } //@line 349 "_codecs_iso2022.c"
      case 37: // $bb36
        var $119=HEAP[$inbuf_addr]; //@line 349 "_codecs_iso2022.c"
        var $120=HEAP[$119]; //@line 349 "_codecs_iso2022.c"
        var $121=(($120+3)&4294967295); //@line 349 "_codecs_iso2022.c"
        var $122=HEAP[$121]; //@line 349 "_codecs_iso2022.c"
        var $123=reSign(($122), 8, 0)!=27; //@line 349 "_codecs_iso2022.c"
        if ($123) { __label__ = 41; break; } else { __label__ = 38; break; } //@line 349 "_codecs_iso2022.c"
      case 38: // $bb37
        var $124=HEAP[$inbuf_addr]; //@line 349 "_codecs_iso2022.c"
        var $125=HEAP[$124]; //@line 349 "_codecs_iso2022.c"
        var $126=(($125+4)&4294967295); //@line 349 "_codecs_iso2022.c"
        var $127=HEAP[$126]; //@line 349 "_codecs_iso2022.c"
        var $128=reSign(($127), 8, 0)!=36; //@line 349 "_codecs_iso2022.c"
        if ($128) { __label__ = 41; break; } else { __label__ = 39; break; } //@line 349 "_codecs_iso2022.c"
      case 39: // $bb38
        var $129=HEAP[$inbuf_addr]; //@line 349 "_codecs_iso2022.c"
        var $130=HEAP[$129]; //@line 349 "_codecs_iso2022.c"
        var $131=(($130+5)&4294967295); //@line 349 "_codecs_iso2022.c"
        var $132=HEAP[$131]; //@line 349 "_codecs_iso2022.c"
        var $133=reSign(($132), 8, 0)!=66; //@line 349 "_codecs_iso2022.c"
        if ($133) { __label__ = 41; break; } else { __label__ = 40; break; } //@line 349 "_codecs_iso2022.c"
      case 40: // $bb39
        HEAP[$charset]=-62; //@line 352 "_codecs_iso2022.c"
        HEAP[$designation]=0; //@line 353 "_codecs_iso2022.c"
        __label__ = 43; break; //@line 353 "_codecs_iso2022.c"
      case 41: // $bb40
        HEAP[$0]=6; //@line 356 "_codecs_iso2022.c"
        __label__ = 51; break; //@line 356 "_codecs_iso2022.c"
      case 42: // $bb41
        var $134=HEAP[$esclen]; //@line 359 "_codecs_iso2022.c"
        HEAP[$0]=$134; //@line 359 "_codecs_iso2022.c"
        __label__ = 51; break; //@line 359 "_codecs_iso2022.c"
      case 43: // $bb42
        var $135=HEAP[$charset]; //@line 363 "_codecs_iso2022.c"
        var $136=reSign(($135), 8, 0)!=66; //@line 363 "_codecs_iso2022.c"
        if ($136) { __label__ = 44; break; } else { __label__ = 50; break; } //@line 363 "_codecs_iso2022.c"
      case 44: // $bb43
        var $137=HEAP[$config_addr]; //@line 366 "_codecs_iso2022.c"
        var $138=$137; //@line 366 "_codecs_iso2022.c"
        var $139=(($138+4)&4294967295); //@line 366 "_codecs_iso2022.c"
        var $140=HEAP[$139]; //@line 366 "_codecs_iso2022.c"
        HEAP[$dsg]=$140; //@line 366 "_codecs_iso2022.c"
        __label__ = 47; break; //@line 366 "_codecs_iso2022.c"
      case 45: // $bb44
        var $141=HEAP[$dsg]; //@line 367 "_codecs_iso2022.c"
        var $142=(($141)&4294967295); //@line 367 "_codecs_iso2022.c"
        var $143=HEAP[$142]; //@line 367 "_codecs_iso2022.c"
        var $144=HEAP[$charset]; //@line 367 "_codecs_iso2022.c"
        var $145=reSign(($143), 8, 0)==reSign(($144), 8, 0); //@line 367 "_codecs_iso2022.c"
        if ($145) { __label__ = 48; break; } else { __label__ = 46; break; } //@line 367 "_codecs_iso2022.c"
      case 46: // $bb45
        var $146=HEAP[$dsg]; //@line 366 "_codecs_iso2022.c"
        var $147=(($146+16)&4294967295); //@line 366 "_codecs_iso2022.c"
        HEAP[$dsg]=$147; //@line 366 "_codecs_iso2022.c"
        __label__ = 47; break; //@line 366 "_codecs_iso2022.c"
      case 47: // $bb46
        var $148=HEAP[$dsg]; //@line 366 "_codecs_iso2022.c"
        var $149=(($148)&4294967295); //@line 366 "_codecs_iso2022.c"
        var $150=HEAP[$149]; //@line 366 "_codecs_iso2022.c"
        var $151=reSign(($150), 8, 0)!=0; //@line 366 "_codecs_iso2022.c"
        if ($151) { __label__ = 45; break; } else { __label__ = 48; break; } //@line 366 "_codecs_iso2022.c"
      case 48: // $bb47
        var $152=HEAP[$dsg]; //@line 369 "_codecs_iso2022.c"
        var $153=(($152)&4294967295); //@line 369 "_codecs_iso2022.c"
        var $154=HEAP[$153]; //@line 369 "_codecs_iso2022.c"
        var $155=reSign(($154), 8, 0)==0; //@line 369 "_codecs_iso2022.c"
        if ($155) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 369 "_codecs_iso2022.c"
      case 49: // $bb48
        var $156=HEAP[$esclen]; //@line 370 "_codecs_iso2022.c"
        HEAP[$0]=$156; //@line 370 "_codecs_iso2022.c"
        __label__ = 51; break; //@line 370 "_codecs_iso2022.c"
      case 50: // $bb49
        var $157=HEAP[$designation]; //@line 373 "_codecs_iso2022.c"
        var $158=unSign(($157), 8, 0); //@line 373 "_codecs_iso2022.c"
        var $159=HEAP[$state_addr]; //@line 373 "_codecs_iso2022.c"
        var $160=(($159)&4294967295); //@line 373 "_codecs_iso2022.c"
        var $161=$160; //@line 373 "_codecs_iso2022.c"
        var $162=(($161+$158)&4294967295); //@line 373 "_codecs_iso2022.c"
        var $163=HEAP[$charset]; //@line 373 "_codecs_iso2022.c"
        HEAP[$162]=$163; //@line 373 "_codecs_iso2022.c"
        var $164=HEAP[$inleft_addr]; //@line 374 "_codecs_iso2022.c"
        var $165=HEAP[$164]; //@line 374 "_codecs_iso2022.c"
        var $166=HEAP[$esclen]; //@line 374 "_codecs_iso2022.c"
        var $167=((($165) - ($166))&4294967295); //@line 374 "_codecs_iso2022.c"
        var $168=HEAP[$inleft_addr]; //@line 374 "_codecs_iso2022.c"
        HEAP[$168]=$167; //@line 374 "_codecs_iso2022.c"
        var $169=HEAP[$inbuf_addr]; //@line 375 "_codecs_iso2022.c"
        var $170=HEAP[$169]; //@line 375 "_codecs_iso2022.c"
        var $171=HEAP[$esclen]; //@line 375 "_codecs_iso2022.c"
        var $172=(($170+$171)&4294967295); //@line 375 "_codecs_iso2022.c"
        var $173=HEAP[$inbuf_addr]; //@line 375 "_codecs_iso2022.c"
        HEAP[$173]=$172; //@line 375 "_codecs_iso2022.c"
        HEAP[$0]=0; //@line 376 "_codecs_iso2022.c"
        __label__ = 51; break; //@line 376 "_codecs_iso2022.c"
      case 51: // $bb50
        var $174=HEAP[$0]; //@line 311 "_codecs_iso2022.c"
        HEAP[$retval]=$174; //@line 311 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 311 "_codecs_iso2022.c"
      case 52: // $return
        var $retval51=HEAP[$retval]; //@line 311 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval51; //@line 311 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022processg2($config, $state, $inbuf, $inleft, $outbuf, $outleft) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $config_addr=__stackBase__;
        var $state_addr=__stackBase__+4;
        var $inbuf_addr=__stackBase__+8;
        var $inleft_addr=__stackBase__+12;
        var $outbuf_addr=__stackBase__+16;
        var $outleft_addr=__stackBase__+20;
        var $retval=__stackBase__+24;
        var $0=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$config_addr]=$config;
        HEAP[$state_addr]=$state;
        HEAP[$inbuf_addr]=$inbuf;
        HEAP[$inleft_addr]=$inleft;
        HEAP[$outbuf_addr]=$outbuf;
        HEAP[$outleft_addr]=$outleft;
        var $1=HEAP[$state_addr]; //@line 397 "_codecs_iso2022.c"
        var $2=(($1)&4294967295); //@line 397 "_codecs_iso2022.c"
        var $3=$2; //@line 397 "_codecs_iso2022.c"
        var $4=(($3+2)&4294967295); //@line 397 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 397 "_codecs_iso2022.c"
        var $6=reSign(($5), 8, 0)==65; //@line 397 "_codecs_iso2022.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 397 "_codecs_iso2022.c"
      case 1: // $bb
        var $7=HEAP[$inbuf_addr]; //@line 398 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 398 "_codecs_iso2022.c"
        var $9=(($8+2)&4294967295); //@line 398 "_codecs_iso2022.c"
        var $10=HEAP[$9]; //@line 398 "_codecs_iso2022.c"
        var $11=reSign(($10), 8, 0) >= 0; //@line 398 "_codecs_iso2022.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 398 "_codecs_iso2022.c"
      case 2: // $bb1
        var $12=HEAP[$outbuf_addr]; //@line 399 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 399 "_codecs_iso2022.c"
        var $14=HEAP[$inbuf_addr]; //@line 399 "_codecs_iso2022.c"
        var $15=HEAP[$14]; //@line 399 "_codecs_iso2022.c"
        var $16=(($15+2)&4294967295); //@line 399 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 399 "_codecs_iso2022.c"
        var $18=unSign(($17), 8, 0); //@line 399 "_codecs_iso2022.c"
        var $19=((($18) + 128)&65535); //@line 399 "_codecs_iso2022.c"
        var $20=(($13)&4294967295); //@line 399 "_codecs_iso2022.c"
        HEAP[$20]=$19; //@line 399 "_codecs_iso2022.c"
        __label__ = 28; break; //@line 399 "_codecs_iso2022.c"
      case 3: // $bb2
        HEAP[$0]=3; //@line 401 "_codecs_iso2022.c"
        __label__ = 29; break; //@line 401 "_codecs_iso2022.c"
      case 4: // $bb3
        var $21=HEAP[$state_addr]; //@line 403 "_codecs_iso2022.c"
        var $22=(($21)&4294967295); //@line 403 "_codecs_iso2022.c"
        var $23=$22; //@line 403 "_codecs_iso2022.c"
        var $24=(($23+2)&4294967295); //@line 403 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 403 "_codecs_iso2022.c"
        var $26=reSign(($25), 8, 0)==70; //@line 403 "_codecs_iso2022.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 23; break; } //@line 403 "_codecs_iso2022.c"
      case 5: // $bb4
        var $27=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $28=HEAP[$27]; //@line 404 "_codecs_iso2022.c"
        var $29=(($28+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $30=HEAP[$29]; //@line 404 "_codecs_iso2022.c"
        var $31=($30) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $32=unSign(($31), 8, 0) <= 159; //@line 404 "_codecs_iso2022.c"
        if ($32) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 404 "_codecs_iso2022.c"
      case 6: // $bb5
        var $33=HEAP[$outbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $34=HEAP[$33]; //@line 404 "_codecs_iso2022.c"
        var $35=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $36=HEAP[$35]; //@line 404 "_codecs_iso2022.c"
        var $37=(($36+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $38=HEAP[$37]; //@line 404 "_codecs_iso2022.c"
        var $39=($38) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $40=unSign(($39), 8, 0); //@line 404 "_codecs_iso2022.c"
        HEAP[$34]=$40; //@line 404 "_codecs_iso2022.c"
        __label__ = 22; break; //@line 404 "_codecs_iso2022.c"
      case 7: // $bb6
        var $41=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 404 "_codecs_iso2022.c"
        var $43=(($42+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $44=HEAP[$43]; //@line 404 "_codecs_iso2022.c"
        var $45=($44) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $46=unSign(($45), 8, 0) > 191; //@line 404 "_codecs_iso2022.c"
        if ($46) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 404 "_codecs_iso2022.c"
      case 8: // $bb7
        var $47=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $48=HEAP[$47]; //@line 404 "_codecs_iso2022.c"
        var $49=(($48+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 404 "_codecs_iso2022.c"
        var $51=($50) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $52=unSign(($51), 8, 0); //@line 404 "_codecs_iso2022.c"
        var $53=((($52) - 160)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $54=680475593 >> ((($53))|0); //@line 404 "_codecs_iso2022.c"
        var $55=($54) & 1; //@line 404 "_codecs_iso2022.c"
        var $56=((($55)) & 255); //@line 404 "_codecs_iso2022.c"
        var $toBool=reSign(($56), 8, 0)!=0; //@line 404 "_codecs_iso2022.c"
        var $toBoolnot=($toBool) ^ 1; //@line 404 "_codecs_iso2022.c"
        var $toBoolnot8=unSign(($toBoolnot), 1, 0); //@line 404 "_codecs_iso2022.c"
        var $toBool10=reSign(($toBoolnot8), 8, 0)!=0; //@line 404 "_codecs_iso2022.c"
        if ($toBool10) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 404 "_codecs_iso2022.c"
      case 9: // $bb11
        var $57=HEAP[$outbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 404 "_codecs_iso2022.c"
        var $59=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 404 "_codecs_iso2022.c"
        var $61=(($60+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $62=HEAP[$61]; //@line 404 "_codecs_iso2022.c"
        var $63=($62) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $64=unSign(($63), 8, 0); //@line 404 "_codecs_iso2022.c"
        HEAP[$58]=$64; //@line 404 "_codecs_iso2022.c"
        __label__ = 22; break; //@line 404 "_codecs_iso2022.c"
      case 10: // $bb12
        var $65=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $66=HEAP[$65]; //@line 404 "_codecs_iso2022.c"
        var $67=(($66+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $68=HEAP[$67]; //@line 404 "_codecs_iso2022.c"
        var $69=($68) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $70=unSign(($69), 8, 0) <= 179; //@line 404 "_codecs_iso2022.c"
        if ($70) { __label__ = 15; break; } else { __label__ = 11; break; } //@line 404 "_codecs_iso2022.c"
      case 11: // $bb13
        var $71=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $72=HEAP[$71]; //@line 404 "_codecs_iso2022.c"
        var $73=(($72+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $74=HEAP[$73]; //@line 404 "_codecs_iso2022.c"
        var $75=reSign(($74), 8, 0)==127; //@line 404 "_codecs_iso2022.c"
        if ($75) { __label__ = 15; break; } else { __label__ = 12; break; } //@line 404 "_codecs_iso2022.c"
      case 12: // $bb14
        var $76=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $77=HEAP[$76]; //@line 404 "_codecs_iso2022.c"
        var $78=(($77+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $79=HEAP[$78]; //@line 404 "_codecs_iso2022.c"
        var $80=($79) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $81=unSign(($80), 8, 0) > 211; //@line 404 "_codecs_iso2022.c"
        if ($81) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 404 "_codecs_iso2022.c"
      case 13: // $bb15
        var $82=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $83=HEAP[$82]; //@line 404 "_codecs_iso2022.c"
        var $84=(($83+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $85=HEAP[$84]; //@line 404 "_codecs_iso2022.c"
        var $86=($85) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $87=unSign(($86), 8, 0); //@line 404 "_codecs_iso2022.c"
        var $88=((($87) - 180)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $89=1 << ($88); //@line 404 "_codecs_iso2022.c"
        var $90=($89) & -1073742473; //@line 404 "_codecs_iso2022.c"
        var $91=((($90))|0)!=0; //@line 404 "_codecs_iso2022.c"
        if ($91) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 404 "_codecs_iso2022.c"
      case 14: // $bb16
        var $92=HEAP[$outbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $93=HEAP[$92]; //@line 404 "_codecs_iso2022.c"
        var $94=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $95=HEAP[$94]; //@line 404 "_codecs_iso2022.c"
        var $96=(($95+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $97=HEAP[$96]; //@line 404 "_codecs_iso2022.c"
        var $98=($97) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $99=unSign(($98), 8, 0); //@line 404 "_codecs_iso2022.c"
        var $100=((($99) + 720)&65535); //@line 404 "_codecs_iso2022.c"
        HEAP[$93]=$100; //@line 404 "_codecs_iso2022.c"
        __label__ = 22; break; //@line 404 "_codecs_iso2022.c"
      case 15: // $bb17
        var $101=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $102=HEAP[$101]; //@line 404 "_codecs_iso2022.c"
        var $103=(($102+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $104=HEAP[$103]; //@line 404 "_codecs_iso2022.c"
        var $105=reSign(($104), 8, 0)==33; //@line 404 "_codecs_iso2022.c"
        if ($105) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 404 "_codecs_iso2022.c"
      case 16: // $bb18
        var $106=HEAP[$outbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $107=HEAP[$106]; //@line 404 "_codecs_iso2022.c"
        HEAP[$107]=8216; //@line 404 "_codecs_iso2022.c"
        __label__ = 22; break; //@line 404 "_codecs_iso2022.c"
      case 17: // $bb19
        var $108=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $109=HEAP[$108]; //@line 404 "_codecs_iso2022.c"
        var $110=(($109+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $111=HEAP[$110]; //@line 404 "_codecs_iso2022.c"
        var $112=reSign(($111), 8, 0)==34; //@line 404 "_codecs_iso2022.c"
        if ($112) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 404 "_codecs_iso2022.c"
      case 18: // $bb20
        var $113=HEAP[$outbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $114=HEAP[$113]; //@line 404 "_codecs_iso2022.c"
        HEAP[$114]=8217; //@line 404 "_codecs_iso2022.c"
        __label__ = 22; break; //@line 404 "_codecs_iso2022.c"
      case 19: // $bb21
        var $115=HEAP[$inbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $116=HEAP[$115]; //@line 404 "_codecs_iso2022.c"
        var $117=(($116+2)&4294967295); //@line 404 "_codecs_iso2022.c"
        var $118=HEAP[$117]; //@line 404 "_codecs_iso2022.c"
        var $119=reSign(($118), 8, 0)==47; //@line 404 "_codecs_iso2022.c"
        if ($119) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 404 "_codecs_iso2022.c"
      case 20: // $bb22
        var $120=HEAP[$outbuf_addr]; //@line 404 "_codecs_iso2022.c"
        var $121=HEAP[$120]; //@line 404 "_codecs_iso2022.c"
        HEAP[$121]=8213; //@line 404 "_codecs_iso2022.c"
        __label__ = 22; break; //@line 404 "_codecs_iso2022.c"
      case 21: // $bb23
        HEAP[$0]=3; //@line 405 "_codecs_iso2022.c"
        __label__ = 29; break; //@line 405 "_codecs_iso2022.c"
      case 22: // $bb24
        __label__ = 28; break; //@line 405 "_codecs_iso2022.c"
      case 23: // $bb25
        var $122=HEAP[$state_addr]; //@line 407 "_codecs_iso2022.c"
        var $123=(($122)&4294967295); //@line 407 "_codecs_iso2022.c"
        var $124=$123; //@line 407 "_codecs_iso2022.c"
        var $125=(($124+2)&4294967295); //@line 407 "_codecs_iso2022.c"
        var $126=HEAP[$125]; //@line 407 "_codecs_iso2022.c"
        var $127=reSign(($126), 8, 0)==66; //@line 407 "_codecs_iso2022.c"
        if ($127) { __label__ = 24; break; } else { __label__ = 27; break; } //@line 407 "_codecs_iso2022.c"
      case 24: // $bb26
        var $128=HEAP[$inbuf_addr]; //@line 408 "_codecs_iso2022.c"
        var $129=HEAP[$128]; //@line 408 "_codecs_iso2022.c"
        var $130=(($129+2)&4294967295); //@line 408 "_codecs_iso2022.c"
        var $131=HEAP[$130]; //@line 408 "_codecs_iso2022.c"
        var $132=reSign(($131), 8, 0) < 0; //@line 408 "_codecs_iso2022.c"
        if ($132) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 408 "_codecs_iso2022.c"
      case 25: // $bb27
        HEAP[$0]=3; //@line 408 "_codecs_iso2022.c"
        __label__ = 29; break; //@line 408 "_codecs_iso2022.c"
      case 26: // $bb28
        var $133=HEAP[$outbuf_addr]; //@line 409 "_codecs_iso2022.c"
        var $134=HEAP[$133]; //@line 409 "_codecs_iso2022.c"
        var $135=HEAP[$inbuf_addr]; //@line 409 "_codecs_iso2022.c"
        var $136=HEAP[$135]; //@line 409 "_codecs_iso2022.c"
        var $137=(($136+2)&4294967295); //@line 409 "_codecs_iso2022.c"
        var $138=HEAP[$137]; //@line 409 "_codecs_iso2022.c"
        var $139=unSign(($138), 8, 0); //@line 409 "_codecs_iso2022.c"
        HEAP[$134]=$139; //@line 409 "_codecs_iso2022.c"
        __label__ = 28; break; //@line 409 "_codecs_iso2022.c"
      case 27: // $bb29
        HEAP[$0]=-3; //@line 412 "_codecs_iso2022.c"
        __label__ = 29; break; //@line 412 "_codecs_iso2022.c"
      case 28: // $bb30
        var $140=HEAP[$inbuf_addr]; //@line 414 "_codecs_iso2022.c"
        var $141=HEAP[$140]; //@line 414 "_codecs_iso2022.c"
        var $142=(($141+3)&4294967295); //@line 414 "_codecs_iso2022.c"
        var $143=HEAP[$inbuf_addr]; //@line 414 "_codecs_iso2022.c"
        HEAP[$143]=$142; //@line 414 "_codecs_iso2022.c"
        var $144=HEAP[$inleft_addr]; //@line 415 "_codecs_iso2022.c"
        var $145=HEAP[$144]; //@line 415 "_codecs_iso2022.c"
        var $146=((($145) - 3)&4294967295); //@line 415 "_codecs_iso2022.c"
        var $147=HEAP[$inleft_addr]; //@line 415 "_codecs_iso2022.c"
        HEAP[$147]=$146; //@line 415 "_codecs_iso2022.c"
        var $148=HEAP[$outbuf_addr]; //@line 416 "_codecs_iso2022.c"
        var $149=HEAP[$148]; //@line 416 "_codecs_iso2022.c"
        var $150=(($149+2)&4294967295); //@line 416 "_codecs_iso2022.c"
        var $151=HEAP[$outbuf_addr]; //@line 416 "_codecs_iso2022.c"
        HEAP[$151]=$150; //@line 416 "_codecs_iso2022.c"
        var $152=HEAP[$outleft_addr]; //@line 417 "_codecs_iso2022.c"
        var $153=HEAP[$152]; //@line 417 "_codecs_iso2022.c"
        var $154=((($153) - 1)&4294967295); //@line 417 "_codecs_iso2022.c"
        var $155=HEAP[$outleft_addr]; //@line 417 "_codecs_iso2022.c"
        HEAP[$155]=$154; //@line 417 "_codecs_iso2022.c"
        HEAP[$0]=0; //@line 418 "_codecs_iso2022.c"
        __label__ = 29; break; //@line 418 "_codecs_iso2022.c"
      case 29: // $bb31
        var $156=HEAP[$0]; //@line 401 "_codecs_iso2022.c"
        HEAP[$retval]=$156; //@line 401 "_codecs_iso2022.c"
        __label__ = 30; break; //@line 401 "_codecs_iso2022.c"
      case 30: // $return
        var $retval32=HEAP[$retval]; //@line 401 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval32; //@line 401 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022_decode($state, $config, $inbuf, $inleft, $outbuf, $outleft) {
    var __stackBase__  = STACKTOP; STACKTOP += 50; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 50);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $state_addr=__stackBase__;
        var $config_addr=__stackBase__+4;
        var $inbuf_addr=__stackBase__+8;
        var $inleft_addr=__stackBase__+12;
        var $outbuf_addr=__stackBase__+16;
        var $outleft_addr=__stackBase__+20;
        var $retval=__stackBase__+24;
        var $0=__stackBase__+28;
        var $dsgcache=__stackBase__+32;
        var $c=__stackBase__+36;
        var $err=__stackBase__+37;
        var $dsg=__stackBase__+41;
        var $charset=__stackBase__+45;
        var $decoded=__stackBase__+46;
        var $_alloca_point_=0;
        HEAP[$state_addr]=$state;
        HEAP[$config_addr]=$config;
        HEAP[$inbuf_addr]=$inbuf;
        HEAP[$inleft_addr]=$inleft;
        HEAP[$outbuf_addr]=$outbuf;
        HEAP[$outleft_addr]=$outleft;
        HEAP[$dsgcache]=0; //@line 423 "_codecs_iso2022.c"
        __label__ = 73; break; //@line 423 "_codecs_iso2022.c"
      case 1: // $bb
        var $1=HEAP[$inbuf_addr]; //@line 426 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 426 "_codecs_iso2022.c"
        var $3=(($2)&4294967295); //@line 426 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 426 "_codecs_iso2022.c"
        HEAP[$c]=$4; //@line 426 "_codecs_iso2022.c"
        var $5=HEAP[$state_addr]; //@line 429 "_codecs_iso2022.c"
        var $6=(($5)&4294967295); //@line 429 "_codecs_iso2022.c"
        var $7=$6; //@line 429 "_codecs_iso2022.c"
        var $8=(($7+4)&4294967295); //@line 429 "_codecs_iso2022.c"
        var $9=HEAP[$8]; //@line 429 "_codecs_iso2022.c"
        var $10=unSign(($9), 8, 0); //@line 429 "_codecs_iso2022.c"
        var $11=($10) & 2; //@line 429 "_codecs_iso2022.c"
        var $12=((($11))|0)!=0; //@line 429 "_codecs_iso2022.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 9; break; } //@line 429 "_codecs_iso2022.c"
      case 2: // $bb1
        var $13=HEAP[$outleft_addr]; //@line 432 "_codecs_iso2022.c"
        var $14=((($13))|0) <= 0; //@line 432 "_codecs_iso2022.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 432 "_codecs_iso2022.c"
      case 3: // $bb2
        HEAP[$0]=-1; //@line 432 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 432 "_codecs_iso2022.c"
      case 4: // $bb3
        var $15=HEAP[$outbuf_addr]; //@line 432 "_codecs_iso2022.c"
        var $16=HEAP[$15]; //@line 432 "_codecs_iso2022.c"
        var $17=HEAP[$c]; //@line 432 "_codecs_iso2022.c"
        var $18=unSign(($17), 8, 0); //@line 432 "_codecs_iso2022.c"
        var $19=(($16)&4294967295); //@line 432 "_codecs_iso2022.c"
        HEAP[$19]=$18; //@line 432 "_codecs_iso2022.c"
        var $20=HEAP[$inbuf_addr]; //@line 433 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 433 "_codecs_iso2022.c"
        var $22=(($21+1)&4294967295); //@line 433 "_codecs_iso2022.c"
        var $23=HEAP[$inbuf_addr]; //@line 433 "_codecs_iso2022.c"
        HEAP[$23]=$22; //@line 433 "_codecs_iso2022.c"
        var $24=HEAP[$inleft_addr]; //@line 433 "_codecs_iso2022.c"
        var $25=((($24) - 1)&4294967295); //@line 433 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$25; //@line 433 "_codecs_iso2022.c"
        var $26=HEAP[$outbuf_addr]; //@line 433 "_codecs_iso2022.c"
        var $27=HEAP[$26]; //@line 433 "_codecs_iso2022.c"
        var $28=(($27+2)&4294967295); //@line 433 "_codecs_iso2022.c"
        var $29=HEAP[$outbuf_addr]; //@line 433 "_codecs_iso2022.c"
        HEAP[$29]=$28; //@line 433 "_codecs_iso2022.c"
        var $30=HEAP[$outleft_addr]; //@line 433 "_codecs_iso2022.c"
        var $31=((($30) - 1)&4294967295); //@line 433 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$31; //@line 433 "_codecs_iso2022.c"
        var $32=HEAP[$c]; //@line 434 "_codecs_iso2022.c"
        var $33=unSign(($32), 8, 0) <= 64; //@line 434 "_codecs_iso2022.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 434 "_codecs_iso2022.c"
      case 5: // $bb4
        var $34=HEAP[$c]; //@line 434 "_codecs_iso2022.c"
        var $35=unSign(($34), 8, 0) <= 90; //@line 434 "_codecs_iso2022.c"
        if ($35) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 434 "_codecs_iso2022.c"
      case 6: // $bb5
        var $36=HEAP[$c]; //@line 434 "_codecs_iso2022.c"
        var $37=reSign(($36), 8, 0)==64; //@line 434 "_codecs_iso2022.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 434 "_codecs_iso2022.c"
      case 7: // $bb6
        var $38=HEAP[$state_addr]; //@line 435 "_codecs_iso2022.c"
        var $39=(($38)&4294967295); //@line 435 "_codecs_iso2022.c"
        var $40=$39; //@line 435 "_codecs_iso2022.c"
        var $41=(($40+4)&4294967295); //@line 435 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 435 "_codecs_iso2022.c"
        var $43=($42) & -3; //@line 435 "_codecs_iso2022.c"
        var $44=HEAP[$state_addr]; //@line 435 "_codecs_iso2022.c"
        var $45=(($44)&4294967295); //@line 435 "_codecs_iso2022.c"
        var $46=$45; //@line 435 "_codecs_iso2022.c"
        var $47=(($46+4)&4294967295); //@line 435 "_codecs_iso2022.c"
        HEAP[$47]=$43; //@line 435 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 435 "_codecs_iso2022.c"
      case 8: // $bb7
        __label__ = 73; break; //@line 435 "_codecs_iso2022.c"
      case 9: // $bb8
        var $48=HEAP[$c]; //@line 440 "_codecs_iso2022.c"
        var $49=unSign(($48), 8, 0); //@line 440 "_codecs_iso2022.c"
        if ($49 == 10) {
          __label__ = 35; break;
        }
        else if ($49 == 14) {
          __label__ = 33; break;
        }
        else if ($49 == 15) {
          __label__ = 31; break;
        }
        else if ($49 == 27) {
          __label__ = 10; break;
        }
        else {
        __label__ = 38; break;
        }
        
      case 10: // $bb9
        var $50=HEAP[$inleft_addr]; //@line 442 "_codecs_iso2022.c"
        var $51=((($50))|0) <= 1; //@line 442 "_codecs_iso2022.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 442 "_codecs_iso2022.c"
      case 11: // $bb10
        HEAP[$0]=-2; //@line 442 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 442 "_codecs_iso2022.c"
      case 12: // $bb11
        var $52=HEAP[$inbuf_addr]; //@line 443 "_codecs_iso2022.c"
        var $53=HEAP[$52]; //@line 443 "_codecs_iso2022.c"
        var $54=(($53+1)&4294967295); //@line 443 "_codecs_iso2022.c"
        var $55=HEAP[$54]; //@line 443 "_codecs_iso2022.c"
        var $56=reSign(($55), 8, 0)==40; //@line 443 "_codecs_iso2022.c"
        if ($56) { __label__ = 17; break; } else { __label__ = 13; break; } //@line 443 "_codecs_iso2022.c"
      case 13: // $bb12
        var $57=HEAP[$inbuf_addr]; //@line 443 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 443 "_codecs_iso2022.c"
        var $59=(($58+1)&4294967295); //@line 443 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 443 "_codecs_iso2022.c"
        var $61=reSign(($60), 8, 0)==41; //@line 443 "_codecs_iso2022.c"
        if ($61) { __label__ = 17; break; } else { __label__ = 14; break; } //@line 443 "_codecs_iso2022.c"
      case 14: // $bb13
        var $62=HEAP[$inbuf_addr]; //@line 443 "_codecs_iso2022.c"
        var $63=HEAP[$62]; //@line 443 "_codecs_iso2022.c"
        var $64=(($63+1)&4294967295); //@line 443 "_codecs_iso2022.c"
        var $65=HEAP[$64]; //@line 443 "_codecs_iso2022.c"
        var $66=reSign(($65), 8, 0)==36; //@line 443 "_codecs_iso2022.c"
        if ($66) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 443 "_codecs_iso2022.c"
      case 15: // $bb14
        var $67=HEAP[$inbuf_addr]; //@line 443 "_codecs_iso2022.c"
        var $68=HEAP[$67]; //@line 443 "_codecs_iso2022.c"
        var $69=(($68+1)&4294967295); //@line 443 "_codecs_iso2022.c"
        var $70=HEAP[$69]; //@line 443 "_codecs_iso2022.c"
        var $71=reSign(($70), 8, 0)==46; //@line 443 "_codecs_iso2022.c"
        if ($71) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 443 "_codecs_iso2022.c"
      case 16: // $bb15
        var $72=HEAP[$inbuf_addr]; //@line 443 "_codecs_iso2022.c"
        var $73=HEAP[$72]; //@line 443 "_codecs_iso2022.c"
        var $74=(($73+1)&4294967295); //@line 443 "_codecs_iso2022.c"
        var $75=HEAP[$74]; //@line 443 "_codecs_iso2022.c"
        var $76=reSign(($75), 8, 0)==38; //@line 443 "_codecs_iso2022.c"
        if ($76) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 443 "_codecs_iso2022.c"
      case 17: // $bb16
        var $77=HEAP[$config_addr]; //@line 444 "_codecs_iso2022.c"
        var $78=HEAP[$state_addr]; //@line 444 "_codecs_iso2022.c"
        var $79=HEAP[$inbuf_addr]; //@line 444 "_codecs_iso2022.c"
        var $80=_iso2022processesc($77, $78, $79, $inleft_addr); //@line 444 "_codecs_iso2022.c"
        HEAP[$err]=$80; //@line 444 "_codecs_iso2022.c"
        var $81=HEAP[$err]; //@line 446 "_codecs_iso2022.c"
        var $82=((($81))|0)!=0; //@line 446 "_codecs_iso2022.c"
        if ($82) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 446 "_codecs_iso2022.c"
      case 18: // $bb17
        var $83=HEAP[$err]; //@line 447 "_codecs_iso2022.c"
        HEAP[$0]=$83; //@line 447 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 447 "_codecs_iso2022.c"
      case 19: // $bb18
        __label__ = 30; break; //@line 447 "_codecs_iso2022.c"
      case 20: // $bb19
        var $84=HEAP[$config_addr]; //@line 449 "_codecs_iso2022.c"
        var $85=$84; //@line 449 "_codecs_iso2022.c"
        var $86=(($85)&4294967295); //@line 449 "_codecs_iso2022.c"
        var $87=HEAP[$86]; //@line 449 "_codecs_iso2022.c"
        var $88=($87) & 2; //@line 449 "_codecs_iso2022.c"
        var $89=((($88))|0)==0; //@line 449 "_codecs_iso2022.c"
        if ($89) { __label__ = 27; break; } else { __label__ = 21; break; } //@line 449 "_codecs_iso2022.c"
      case 21: // $bb20
        var $90=HEAP[$inbuf_addr]; //@line 449 "_codecs_iso2022.c"
        var $91=HEAP[$90]; //@line 449 "_codecs_iso2022.c"
        var $92=(($91+1)&4294967295); //@line 449 "_codecs_iso2022.c"
        var $93=HEAP[$92]; //@line 449 "_codecs_iso2022.c"
        var $94=reSign(($93), 8, 0)!=78; //@line 449 "_codecs_iso2022.c"
        if ($94) { __label__ = 27; break; } else { __label__ = 22; break; } //@line 449 "_codecs_iso2022.c"
      case 22: // $bb21
        var $95=HEAP[$inleft_addr]; //@line 450 "_codecs_iso2022.c"
        var $96=((($95))|0) <= 2; //@line 450 "_codecs_iso2022.c"
        if ($96) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 450 "_codecs_iso2022.c"
      case 23: // $bb22
        HEAP[$0]=-2; //@line 450 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 450 "_codecs_iso2022.c"
      case 24: // $bb23
        var $97=HEAP[$config_addr]; //@line 451 "_codecs_iso2022.c"
        var $98=HEAP[$state_addr]; //@line 451 "_codecs_iso2022.c"
        var $99=HEAP[$inbuf_addr]; //@line 451 "_codecs_iso2022.c"
        var $100=HEAP[$outbuf_addr]; //@line 451 "_codecs_iso2022.c"
        var $101=_iso2022processg2($97, $98, $99, $inleft_addr, $100, $outleft_addr); //@line 451 "_codecs_iso2022.c"
        HEAP[$err]=$101; //@line 451 "_codecs_iso2022.c"
        var $102=HEAP[$err]; //@line 453 "_codecs_iso2022.c"
        var $103=((($102))|0)!=0; //@line 453 "_codecs_iso2022.c"
        if ($103) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 453 "_codecs_iso2022.c"
      case 25: // $bb24
        var $104=HEAP[$err]; //@line 454 "_codecs_iso2022.c"
        HEAP[$0]=$104; //@line 454 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 454 "_codecs_iso2022.c"
      case 26: // $bb25
        __label__ = 30; break; //@line 454 "_codecs_iso2022.c"
      case 27: // $bb26
        var $105=HEAP[$outleft_addr]; //@line 457 "_codecs_iso2022.c"
        var $106=((($105))|0) <= 0; //@line 457 "_codecs_iso2022.c"
        if ($106) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 457 "_codecs_iso2022.c"
      case 28: // $bb27
        HEAP[$0]=-1; //@line 457 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 457 "_codecs_iso2022.c"
      case 29: // $bb28
        var $107=HEAP[$outbuf_addr]; //@line 457 "_codecs_iso2022.c"
        var $108=HEAP[$107]; //@line 457 "_codecs_iso2022.c"
        var $109=(($108)&4294967295); //@line 457 "_codecs_iso2022.c"
        HEAP[$109]=27; //@line 457 "_codecs_iso2022.c"
        var $110=HEAP[$state_addr]; //@line 458 "_codecs_iso2022.c"
        var $111=(($110)&4294967295); //@line 458 "_codecs_iso2022.c"
        var $112=$111; //@line 458 "_codecs_iso2022.c"
        var $113=(($112+4)&4294967295); //@line 458 "_codecs_iso2022.c"
        var $114=HEAP[$113]; //@line 458 "_codecs_iso2022.c"
        var $115=($114) | 2; //@line 458 "_codecs_iso2022.c"
        var $116=HEAP[$state_addr]; //@line 458 "_codecs_iso2022.c"
        var $117=(($116)&4294967295); //@line 458 "_codecs_iso2022.c"
        var $118=$117; //@line 458 "_codecs_iso2022.c"
        var $119=(($118+4)&4294967295); //@line 458 "_codecs_iso2022.c"
        HEAP[$119]=$115; //@line 458 "_codecs_iso2022.c"
        var $120=HEAP[$inbuf_addr]; //@line 459 "_codecs_iso2022.c"
        var $121=HEAP[$120]; //@line 459 "_codecs_iso2022.c"
        var $122=(($121+1)&4294967295); //@line 459 "_codecs_iso2022.c"
        var $123=HEAP[$inbuf_addr]; //@line 459 "_codecs_iso2022.c"
        HEAP[$123]=$122; //@line 459 "_codecs_iso2022.c"
        var $124=HEAP[$inleft_addr]; //@line 459 "_codecs_iso2022.c"
        var $125=((($124) - 1)&4294967295); //@line 459 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$125; //@line 459 "_codecs_iso2022.c"
        var $126=HEAP[$outbuf_addr]; //@line 459 "_codecs_iso2022.c"
        var $127=HEAP[$126]; //@line 459 "_codecs_iso2022.c"
        var $128=(($127+2)&4294967295); //@line 459 "_codecs_iso2022.c"
        var $129=HEAP[$outbuf_addr]; //@line 459 "_codecs_iso2022.c"
        HEAP[$129]=$128; //@line 459 "_codecs_iso2022.c"
        var $130=HEAP[$outleft_addr]; //@line 459 "_codecs_iso2022.c"
        var $131=((($130) - 1)&4294967295); //@line 459 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$131; //@line 459 "_codecs_iso2022.c"
        __label__ = 30; break; //@line 459 "_codecs_iso2022.c"
      case 30: // $bb29
        __label__ = 73; break; //@line 459 "_codecs_iso2022.c"
      case 31: // $bb30
        var $132=HEAP[$config_addr]; //@line 463 "_codecs_iso2022.c"
        var $133=$132; //@line 463 "_codecs_iso2022.c"
        var $134=(($133)&4294967295); //@line 463 "_codecs_iso2022.c"
        var $135=HEAP[$134]; //@line 463 "_codecs_iso2022.c"
        var $136=($135) & 1; //@line 463 "_codecs_iso2022.c"
        var $137=((($136)) & 255); //@line 463 "_codecs_iso2022.c"
        var $toBool=reSign(($137), 8, 0)!=0; //@line 463 "_codecs_iso2022.c"
        if ($toBool) { __label__ = 45; break; } else { __label__ = 32; break; } //@line 463 "_codecs_iso2022.c"
      case 32: // $bb31
        var $138=HEAP[$state_addr]; //@line 465 "_codecs_iso2022.c"
        var $139=(($138)&4294967295); //@line 465 "_codecs_iso2022.c"
        var $140=$139; //@line 465 "_codecs_iso2022.c"
        var $141=(($140+4)&4294967295); //@line 465 "_codecs_iso2022.c"
        var $142=HEAP[$141]; //@line 465 "_codecs_iso2022.c"
        var $143=($142) & -2; //@line 465 "_codecs_iso2022.c"
        var $144=HEAP[$state_addr]; //@line 465 "_codecs_iso2022.c"
        var $145=(($144)&4294967295); //@line 465 "_codecs_iso2022.c"
        var $146=$145; //@line 465 "_codecs_iso2022.c"
        var $147=(($146+4)&4294967295); //@line 465 "_codecs_iso2022.c"
        HEAP[$147]=$143; //@line 465 "_codecs_iso2022.c"
        var $148=HEAP[$inbuf_addr]; //@line 466 "_codecs_iso2022.c"
        var $149=HEAP[$148]; //@line 466 "_codecs_iso2022.c"
        var $150=(($149+1)&4294967295); //@line 466 "_codecs_iso2022.c"
        var $151=HEAP[$inbuf_addr]; //@line 466 "_codecs_iso2022.c"
        HEAP[$151]=$150; //@line 466 "_codecs_iso2022.c"
        var $152=HEAP[$inleft_addr]; //@line 466 "_codecs_iso2022.c"
        var $153=((($152) - 1)&4294967295); //@line 466 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$153; //@line 466 "_codecs_iso2022.c"
        __label__ = 73; break; //@line 466 "_codecs_iso2022.c"
      case 33: // $bb32
        var $154=HEAP[$config_addr]; //@line 469 "_codecs_iso2022.c"
        var $155=$154; //@line 469 "_codecs_iso2022.c"
        var $156=(($155)&4294967295); //@line 469 "_codecs_iso2022.c"
        var $157=HEAP[$156]; //@line 469 "_codecs_iso2022.c"
        var $158=($157) & 1; //@line 469 "_codecs_iso2022.c"
        var $159=((($158)) & 255); //@line 469 "_codecs_iso2022.c"
        var $toBool33=reSign(($159), 8, 0)!=0; //@line 469 "_codecs_iso2022.c"
        if ($toBool33) { __label__ = 45; break; } else { __label__ = 34; break; } //@line 469 "_codecs_iso2022.c"
      case 34: // $bb34
        var $160=HEAP[$state_addr]; //@line 471 "_codecs_iso2022.c"
        var $161=(($160)&4294967295); //@line 471 "_codecs_iso2022.c"
        var $162=$161; //@line 471 "_codecs_iso2022.c"
        var $163=(($162+4)&4294967295); //@line 471 "_codecs_iso2022.c"
        var $164=HEAP[$163]; //@line 471 "_codecs_iso2022.c"
        var $165=($164) | 1; //@line 471 "_codecs_iso2022.c"
        var $166=HEAP[$state_addr]; //@line 471 "_codecs_iso2022.c"
        var $167=(($166)&4294967295); //@line 471 "_codecs_iso2022.c"
        var $168=$167; //@line 471 "_codecs_iso2022.c"
        var $169=(($168+4)&4294967295); //@line 471 "_codecs_iso2022.c"
        HEAP[$169]=$165; //@line 471 "_codecs_iso2022.c"
        var $170=HEAP[$inbuf_addr]; //@line 472 "_codecs_iso2022.c"
        var $171=HEAP[$170]; //@line 472 "_codecs_iso2022.c"
        var $172=(($171+1)&4294967295); //@line 472 "_codecs_iso2022.c"
        var $173=HEAP[$inbuf_addr]; //@line 472 "_codecs_iso2022.c"
        HEAP[$173]=$172; //@line 472 "_codecs_iso2022.c"
        var $174=HEAP[$inleft_addr]; //@line 472 "_codecs_iso2022.c"
        var $175=((($174) - 1)&4294967295); //@line 472 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$175; //@line 472 "_codecs_iso2022.c"
        __label__ = 73; break; //@line 472 "_codecs_iso2022.c"
      case 35: // $bb35
        var $176=HEAP[$state_addr]; //@line 475 "_codecs_iso2022.c"
        var $177=(($176)&4294967295); //@line 475 "_codecs_iso2022.c"
        var $178=$177; //@line 475 "_codecs_iso2022.c"
        var $179=(($178+4)&4294967295); //@line 475 "_codecs_iso2022.c"
        var $180=HEAP[$179]; //@line 475 "_codecs_iso2022.c"
        var $181=($180) & -2; //@line 475 "_codecs_iso2022.c"
        var $182=HEAP[$state_addr]; //@line 475 "_codecs_iso2022.c"
        var $183=(($182)&4294967295); //@line 475 "_codecs_iso2022.c"
        var $184=$183; //@line 475 "_codecs_iso2022.c"
        var $185=(($184+4)&4294967295); //@line 475 "_codecs_iso2022.c"
        HEAP[$185]=$181; //@line 475 "_codecs_iso2022.c"
        var $186=HEAP[$outleft_addr]; //@line 476 "_codecs_iso2022.c"
        var $187=((($186))|0) <= 0; //@line 476 "_codecs_iso2022.c"
        if ($187) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 476 "_codecs_iso2022.c"
      case 36: // $bb36
        HEAP[$0]=-1; //@line 476 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 476 "_codecs_iso2022.c"
      case 37: // $bb37
        var $188=HEAP[$outbuf_addr]; //@line 476 "_codecs_iso2022.c"
        var $189=HEAP[$188]; //@line 476 "_codecs_iso2022.c"
        var $190=(($189)&4294967295); //@line 476 "_codecs_iso2022.c"
        HEAP[$190]=10; //@line 476 "_codecs_iso2022.c"
        var $191=HEAP[$inbuf_addr]; //@line 477 "_codecs_iso2022.c"
        var $192=HEAP[$191]; //@line 477 "_codecs_iso2022.c"
        var $193=(($192+1)&4294967295); //@line 477 "_codecs_iso2022.c"
        var $194=HEAP[$inbuf_addr]; //@line 477 "_codecs_iso2022.c"
        HEAP[$194]=$193; //@line 477 "_codecs_iso2022.c"
        var $195=HEAP[$inleft_addr]; //@line 477 "_codecs_iso2022.c"
        var $196=((($195) - 1)&4294967295); //@line 477 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$196; //@line 477 "_codecs_iso2022.c"
        var $197=HEAP[$outbuf_addr]; //@line 477 "_codecs_iso2022.c"
        var $198=HEAP[$197]; //@line 477 "_codecs_iso2022.c"
        var $199=(($198+2)&4294967295); //@line 477 "_codecs_iso2022.c"
        var $200=HEAP[$outbuf_addr]; //@line 477 "_codecs_iso2022.c"
        HEAP[$200]=$199; //@line 477 "_codecs_iso2022.c"
        var $201=HEAP[$outleft_addr]; //@line 477 "_codecs_iso2022.c"
        var $202=((($201) - 1)&4294967295); //@line 477 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$202; //@line 477 "_codecs_iso2022.c"
        __label__ = 73; break; //@line 477 "_codecs_iso2022.c"
      case 38: // $bb38
        var $203=HEAP[$c]; //@line 480 "_codecs_iso2022.c"
        var $204=unSign(($203), 8, 0) <= 31; //@line 480 "_codecs_iso2022.c"
        if ($204) { __label__ = 45; break; } else { __label__ = 39; break; } //@line 480 "_codecs_iso2022.c"
      case 39: // $bb39
        var $205=HEAP[$c]; //@line 482 "_codecs_iso2022.c"
        var $206=reSign(($205), 8, 0) < 0; //@line 482 "_codecs_iso2022.c"
        if ($206) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 482 "_codecs_iso2022.c"
      case 40: // $bb40
        HEAP[$0]=1; //@line 483 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 483 "_codecs_iso2022.c"
      case 41: // $bb41
        var $207=HEAP[$state_addr]; //@line 489 "_codecs_iso2022.c"
        var $208=(($207)&4294967295); //@line 489 "_codecs_iso2022.c"
        var $209=$208; //@line 489 "_codecs_iso2022.c"
        var $210=(($209+4)&4294967295); //@line 489 "_codecs_iso2022.c"
        var $211=HEAP[$210]; //@line 489 "_codecs_iso2022.c"
        var $212=unSign(($211), 8, 0); //@line 489 "_codecs_iso2022.c"
        var $213=($212) & 1; //@line 489 "_codecs_iso2022.c"
        var $214=((($213)) & 255); //@line 489 "_codecs_iso2022.c"
        var $toBool42=reSign(($214), 8, 0)!=0; //@line 489 "_codecs_iso2022.c"
        if ($toBool42) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 489 "_codecs_iso2022.c"
      case 42: // $bb43
        var $215=HEAP[$state_addr]; //@line 490 "_codecs_iso2022.c"
        var $216=(($215)&4294967295); //@line 490 "_codecs_iso2022.c"
        var $217=$216; //@line 490 "_codecs_iso2022.c"
        var $218=(($217+1)&4294967295); //@line 490 "_codecs_iso2022.c"
        var $219=HEAP[$218]; //@line 490 "_codecs_iso2022.c"
        HEAP[$charset]=$219; //@line 490 "_codecs_iso2022.c"
        __label__ = 44; break; //@line 490 "_codecs_iso2022.c"
      case 43: // $bb44
        var $220=HEAP[$state_addr]; //@line 492 "_codecs_iso2022.c"
        var $221=(($220)&4294967295); //@line 492 "_codecs_iso2022.c"
        var $222=$221; //@line 492 "_codecs_iso2022.c"
        var $223=(($222)&4294967295); //@line 492 "_codecs_iso2022.c"
        var $224=HEAP[$223]; //@line 492 "_codecs_iso2022.c"
        HEAP[$charset]=$224; //@line 492 "_codecs_iso2022.c"
        __label__ = 44; break; //@line 492 "_codecs_iso2022.c"
      case 44: // $bb45
        var $225=HEAP[$charset]; //@line 494 "_codecs_iso2022.c"
        var $226=reSign(($225), 8, 0)==66; //@line 494 "_codecs_iso2022.c"
        if ($226) { __label__ = 45; break; } else { __label__ = 48; break; } //@line 494 "_codecs_iso2022.c"
      case 45: // $bypass
        var $227=HEAP[$outleft_addr]; //@line 495 "_codecs_iso2022.c"
        var $228=((($227))|0) <= 0; //@line 495 "_codecs_iso2022.c"
        if ($228) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 495 "_codecs_iso2022.c"
      case 46: // $bb46
        HEAP[$0]=-1; //@line 495 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 495 "_codecs_iso2022.c"
      case 47: // $bb47
        var $229=HEAP[$outbuf_addr]; //@line 495 "_codecs_iso2022.c"
        var $230=HEAP[$229]; //@line 495 "_codecs_iso2022.c"
        var $231=HEAP[$c]; //@line 495 "_codecs_iso2022.c"
        var $232=unSign(($231), 8, 0); //@line 495 "_codecs_iso2022.c"
        var $233=(($230)&4294967295); //@line 495 "_codecs_iso2022.c"
        HEAP[$233]=$232; //@line 495 "_codecs_iso2022.c"
        var $234=HEAP[$inbuf_addr]; //@line 496 "_codecs_iso2022.c"
        var $235=HEAP[$234]; //@line 496 "_codecs_iso2022.c"
        var $236=(($235+1)&4294967295); //@line 496 "_codecs_iso2022.c"
        var $237=HEAP[$inbuf_addr]; //@line 496 "_codecs_iso2022.c"
        HEAP[$237]=$236; //@line 496 "_codecs_iso2022.c"
        var $238=HEAP[$inleft_addr]; //@line 496 "_codecs_iso2022.c"
        var $239=((($238) - 1)&4294967295); //@line 496 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$239; //@line 496 "_codecs_iso2022.c"
        var $240=HEAP[$outbuf_addr]; //@line 496 "_codecs_iso2022.c"
        var $241=HEAP[$240]; //@line 496 "_codecs_iso2022.c"
        var $242=(($241+2)&4294967295); //@line 496 "_codecs_iso2022.c"
        var $243=HEAP[$outbuf_addr]; //@line 496 "_codecs_iso2022.c"
        HEAP[$243]=$242; //@line 496 "_codecs_iso2022.c"
        var $244=HEAP[$outleft_addr]; //@line 496 "_codecs_iso2022.c"
        var $245=((($244) - 1)&4294967295); //@line 496 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$245; //@line 496 "_codecs_iso2022.c"
        __label__ = 73; break; //@line 496 "_codecs_iso2022.c"
      case 48: // $bb48
        var $246=HEAP[$dsgcache]; //@line 500 "_codecs_iso2022.c"
        var $247=$246; //@line 500 "_codecs_iso2022.c"
        var $248=($247)==0; //@line 500 "_codecs_iso2022.c"
        if ($248) { __label__ = 51; break; } else { __label__ = 49; break; } //@line 500 "_codecs_iso2022.c"
      case 49: // $bb49
        var $249=HEAP[$dsgcache]; //@line 500 "_codecs_iso2022.c"
        var $250=(($249)&4294967295); //@line 500 "_codecs_iso2022.c"
        var $251=HEAP[$250]; //@line 500 "_codecs_iso2022.c"
        var $252=HEAP[$charset]; //@line 500 "_codecs_iso2022.c"
        var $253=reSign(($251), 8, 0)!=reSign(($252), 8, 0); //@line 500 "_codecs_iso2022.c"
        if ($253) { __label__ = 51; break; } else { __label__ = 50; break; } //@line 500 "_codecs_iso2022.c"
      case 50: // $bb50
        var $254=HEAP[$dsgcache]; //@line 502 "_codecs_iso2022.c"
        HEAP[$dsg]=$254; //@line 502 "_codecs_iso2022.c"
        __label__ = 57; break; //@line 502 "_codecs_iso2022.c"
      case 51: // $bb51
        var $255=HEAP[$config_addr]; //@line 504 "_codecs_iso2022.c"
        var $256=$255; //@line 504 "_codecs_iso2022.c"
        var $257=(($256+4)&4294967295); //@line 504 "_codecs_iso2022.c"
        var $258=HEAP[$257]; //@line 504 "_codecs_iso2022.c"
        HEAP[$dsg]=$258; //@line 504 "_codecs_iso2022.c"
        __label__ = 53; break; //@line 504 "_codecs_iso2022.c"
      case 52: // $bb52
        var $259=HEAP[$dsg]; //@line 509 "_codecs_iso2022.c"
        var $260=(($259+16)&4294967295); //@line 509 "_codecs_iso2022.c"
        HEAP[$dsg]=$260; //@line 509 "_codecs_iso2022.c"
        __label__ = 53; break; //@line 509 "_codecs_iso2022.c"
      case 53: // $bb53
        var $261=HEAP[$dsg]; //@line 505 "_codecs_iso2022.c"
        var $262=(($261)&4294967295); //@line 505 "_codecs_iso2022.c"
        var $263=HEAP[$262]; //@line 505 "_codecs_iso2022.c"
        var $264=HEAP[$charset]; //@line 505 "_codecs_iso2022.c"
        var $265=reSign(($263), 8, 0)!=reSign(($264), 8, 0); //@line 505 "_codecs_iso2022.c"
        if ($265) { __label__ = 52; break; } else { __label__ = 54; break; } //@line 505 "_codecs_iso2022.c"
      case 54: // $bb54
        var $266=HEAP[$dsg]; //@line 511 "_codecs_iso2022.c"
        var $267=(($266)&4294967295); //@line 511 "_codecs_iso2022.c"
        var $268=HEAP[$267]; //@line 511 "_codecs_iso2022.c"
        var $269=reSign(($268), 8, 0)==0; //@line 511 "_codecs_iso2022.c"
        if ($269) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 511 "_codecs_iso2022.c"
      case 55: // $bb55
        ___assert_fail(((__str11)&4294967295), ((__str10)&4294967295), 511, ((___PRETTY_FUNCTION___9242)&4294967295)); //@line 511 "_codecs_iso2022.c"
        throw "Reached an unreachable! Original .ll line: 3151"; //@line 511 "_codecs_iso2022.c"
      case 56: // $bb56
        var $270=HEAP[$dsg]; //@line 512 "_codecs_iso2022.c"
        HEAP[$dsgcache]=$270; //@line 512 "_codecs_iso2022.c"
        __label__ = 57; break; //@line 512 "_codecs_iso2022.c"
      case 57: // $bb57
        var $271=HEAP[$dsg]; //@line 515 "_codecs_iso2022.c"
        var $272=(($271+2)&4294967295); //@line 515 "_codecs_iso2022.c"
        var $273=HEAP[$272]; //@line 515 "_codecs_iso2022.c"
        var $274=unSign(($273), 8, 0); //@line 515 "_codecs_iso2022.c"
        var $275=HEAP[$inleft_addr]; //@line 515 "_codecs_iso2022.c"
        var $276=((($274))|0) > ((($275))|0); //@line 515 "_codecs_iso2022.c"
        if ($276) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 515 "_codecs_iso2022.c"
      case 58: // $bb58
        HEAP[$0]=-2; //@line 515 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 515 "_codecs_iso2022.c"
      case 59: // $bb59
        var $277=HEAP[$dsg]; //@line 516 "_codecs_iso2022.c"
        var $278=(($277+8)&4294967295); //@line 516 "_codecs_iso2022.c"
        var $279=HEAP[$278]; //@line 516 "_codecs_iso2022.c"
        var $280=HEAP[$inbuf_addr]; //@line 516 "_codecs_iso2022.c"
        var $281=HEAP[$280]; //@line 516 "_codecs_iso2022.c"
        var $282=FUNCTION_TABLE[$279]($281); //@line 516 "_codecs_iso2022.c"
        HEAP[$decoded]=$282; //@line 516 "_codecs_iso2022.c"
        var $283=HEAP[$decoded]; //@line 517 "_codecs_iso2022.c"
        var $284=((($283))|0)==65535; //@line 517 "_codecs_iso2022.c"
        if ($284) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 517 "_codecs_iso2022.c"
      case 60: // $bb60
        var $285=HEAP[$dsg]; //@line 518 "_codecs_iso2022.c"
        var $286=(($285+2)&4294967295); //@line 518 "_codecs_iso2022.c"
        var $287=HEAP[$286]; //@line 518 "_codecs_iso2022.c"
        var $288=unSign(($287), 8, 0); //@line 518 "_codecs_iso2022.c"
        HEAP[$0]=$288; //@line 518 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 518 "_codecs_iso2022.c"
      case 61: // $bb61
        var $289=HEAP[$decoded]; //@line 520 "_codecs_iso2022.c"
        var $290=((($289))>>>0) <= 65535; //@line 520 "_codecs_iso2022.c"
        if ($290) { __label__ = 62; break; } else { __label__ = 65; break; } //@line 520 "_codecs_iso2022.c"
      case 62: // $bb62
        var $291=HEAP[$outleft_addr]; //@line 521 "_codecs_iso2022.c"
        var $292=((($291))|0) <= 0; //@line 521 "_codecs_iso2022.c"
        if ($292) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 521 "_codecs_iso2022.c"
      case 63: // $bb63
        HEAP[$0]=-1; //@line 521 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 521 "_codecs_iso2022.c"
      case 64: // $bb64
        var $293=HEAP[$outbuf_addr]; //@line 521 "_codecs_iso2022.c"
        var $294=HEAP[$293]; //@line 521 "_codecs_iso2022.c"
        var $295=HEAP[$decoded]; //@line 521 "_codecs_iso2022.c"
        var $296=((($295)) & 65535); //@line 521 "_codecs_iso2022.c"
        var $297=(($294)&4294967295); //@line 521 "_codecs_iso2022.c"
        HEAP[$297]=$296; //@line 521 "_codecs_iso2022.c"
        var $298=HEAP[$outbuf_addr]; //@line 522 "_codecs_iso2022.c"
        var $299=HEAP[$298]; //@line 522 "_codecs_iso2022.c"
        var $300=(($299+2)&4294967295); //@line 522 "_codecs_iso2022.c"
        var $301=HEAP[$outbuf_addr]; //@line 522 "_codecs_iso2022.c"
        HEAP[$301]=$300; //@line 522 "_codecs_iso2022.c"
        var $302=HEAP[$outleft_addr]; //@line 522 "_codecs_iso2022.c"
        var $303=((($302) - 1)&4294967295); //@line 522 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$303; //@line 522 "_codecs_iso2022.c"
        __label__ = 72; break; //@line 522 "_codecs_iso2022.c"
      case 65: // $bb65
        var $304=HEAP[$decoded]; //@line 524 "_codecs_iso2022.c"
        var $305=((($304))>>>0) <= 196607; //@line 524 "_codecs_iso2022.c"
        if ($305) { __label__ = 66; break; } else { __label__ = 69; break; } //@line 524 "_codecs_iso2022.c"
      case 66: // $bb66
        var $306=HEAP[$outleft_addr]; //@line 525 "_codecs_iso2022.c"
        var $307=((($306))|0) <= 1; //@line 525 "_codecs_iso2022.c"
        if ($307) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 525 "_codecs_iso2022.c"
      case 67: // $bb67
        HEAP[$0]=-1; //@line 525 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 525 "_codecs_iso2022.c"
      case 68: // $bb68
        var $308=HEAP[$outbuf_addr]; //@line 525 "_codecs_iso2022.c"
        var $309=HEAP[$308]; //@line 525 "_codecs_iso2022.c"
        var $310=HEAP[$decoded]; //@line 525 "_codecs_iso2022.c"
        var $311=((($310) - 65536)&4294967295); //@line 525 "_codecs_iso2022.c"
        var $312=((($311))>>>0) >>> 10; //@line 525 "_codecs_iso2022.c"
        var $313=((($312)) & 65535); //@line 525 "_codecs_iso2022.c"
        var $314=((($313) + -10240)&65535); //@line 525 "_codecs_iso2022.c"
        var $315=(($309)&4294967295); //@line 525 "_codecs_iso2022.c"
        HEAP[$315]=$314; //@line 525 "_codecs_iso2022.c"
        var $316=HEAP[$outbuf_addr]; //@line 525 "_codecs_iso2022.c"
        var $317=HEAP[$316]; //@line 525 "_codecs_iso2022.c"
        var $318=HEAP[$decoded]; //@line 525 "_codecs_iso2022.c"
        var $319=((($318)) & 65535); //@line 525 "_codecs_iso2022.c"
        var $320=($319) & 1023; //@line 525 "_codecs_iso2022.c"
        var $321=((($320) + -9216)&65535); //@line 525 "_codecs_iso2022.c"
        var $322=(($317+2)&4294967295); //@line 525 "_codecs_iso2022.c"
        HEAP[$322]=$321; //@line 525 "_codecs_iso2022.c"
        var $323=HEAP[$outbuf_addr]; //@line 525 "_codecs_iso2022.c"
        var $324=HEAP[$323]; //@line 525 "_codecs_iso2022.c"
        var $325=(($324+4)&4294967295); //@line 525 "_codecs_iso2022.c"
        var $326=HEAP[$outbuf_addr]; //@line 525 "_codecs_iso2022.c"
        HEAP[$326]=$325; //@line 525 "_codecs_iso2022.c"
        var $327=HEAP[$outleft_addr]; //@line 525 "_codecs_iso2022.c"
        var $328=((($327) - 2)&4294967295); //@line 525 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$328; //@line 525 "_codecs_iso2022.c"
        __label__ = 72; break; //@line 525 "_codecs_iso2022.c"
      case 69: // $bb69
        var $329=HEAP[$outleft_addr]; //@line 528 "_codecs_iso2022.c"
        var $330=((($329))|0) <= 1; //@line 528 "_codecs_iso2022.c"
        if ($330) { __label__ = 70; break; } else { __label__ = 71; break; } //@line 528 "_codecs_iso2022.c"
      case 70: // $bb70
        HEAP[$0]=-1; //@line 528 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 528 "_codecs_iso2022.c"
      case 71: // $bb71
        var $331=HEAP[$outbuf_addr]; //@line 528 "_codecs_iso2022.c"
        var $332=HEAP[$331]; //@line 528 "_codecs_iso2022.c"
        var $333=HEAP[$decoded]; //@line 528 "_codecs_iso2022.c"
        var $334=((($333))>>>0) >>> 16; //@line 528 "_codecs_iso2022.c"
        var $335=((($334)) & 65535); //@line 528 "_codecs_iso2022.c"
        var $336=(($332)&4294967295); //@line 528 "_codecs_iso2022.c"
        HEAP[$336]=$335; //@line 528 "_codecs_iso2022.c"
        var $337=HEAP[$outbuf_addr]; //@line 528 "_codecs_iso2022.c"
        var $338=HEAP[$337]; //@line 528 "_codecs_iso2022.c"
        var $339=HEAP[$decoded]; //@line 528 "_codecs_iso2022.c"
        var $340=((($339)) & 65535); //@line 528 "_codecs_iso2022.c"
        var $341=(($338+2)&4294967295); //@line 528 "_codecs_iso2022.c"
        HEAP[$341]=$340; //@line 528 "_codecs_iso2022.c"
        var $342=HEAP[$outbuf_addr]; //@line 529 "_codecs_iso2022.c"
        var $343=HEAP[$342]; //@line 529 "_codecs_iso2022.c"
        var $344=(($343+4)&4294967295); //@line 529 "_codecs_iso2022.c"
        var $345=HEAP[$outbuf_addr]; //@line 529 "_codecs_iso2022.c"
        HEAP[$345]=$344; //@line 529 "_codecs_iso2022.c"
        var $346=HEAP[$outleft_addr]; //@line 529 "_codecs_iso2022.c"
        var $347=((($346) - 2)&4294967295); //@line 529 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$347; //@line 529 "_codecs_iso2022.c"
        __label__ = 72; break; //@line 529 "_codecs_iso2022.c"
      case 72: // $bb72
        var $348=HEAP[$inbuf_addr]; //@line 531 "_codecs_iso2022.c"
        var $349=HEAP[$348]; //@line 531 "_codecs_iso2022.c"
        var $350=HEAP[$dsg]; //@line 531 "_codecs_iso2022.c"
        var $351=(($350+2)&4294967295); //@line 531 "_codecs_iso2022.c"
        var $352=HEAP[$351]; //@line 531 "_codecs_iso2022.c"
        var $353=unSign(($352), 8, 0); //@line 531 "_codecs_iso2022.c"
        var $354=(($349+$353)&4294967295); //@line 531 "_codecs_iso2022.c"
        var $355=HEAP[$inbuf_addr]; //@line 531 "_codecs_iso2022.c"
        HEAP[$355]=$354; //@line 531 "_codecs_iso2022.c"
        var $356=HEAP[$inleft_addr]; //@line 531 "_codecs_iso2022.c"
        var $357=HEAP[$dsg]; //@line 531 "_codecs_iso2022.c"
        var $358=(($357+2)&4294967295); //@line 531 "_codecs_iso2022.c"
        var $359=HEAP[$358]; //@line 531 "_codecs_iso2022.c"
        var $360=unSign(($359), 8, 0); //@line 531 "_codecs_iso2022.c"
        var $361=((($356) - ($360))&4294967295); //@line 531 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$361; //@line 531 "_codecs_iso2022.c"
        __label__ = 73; break; //@line 531 "_codecs_iso2022.c"
      case 73: // $bb73
        var $362=HEAP[$inleft_addr]; //@line 425 "_codecs_iso2022.c"
        var $363=((($362))|0) > 0; //@line 425 "_codecs_iso2022.c"
        if ($363) { __label__ = 1; break; } else { __label__ = 74; break; } //@line 425 "_codecs_iso2022.c"
      case 74: // $bb74
        HEAP[$0]=0; //@line 536 "_codecs_iso2022.c"
        __label__ = 75; break; //@line 536 "_codecs_iso2022.c"
      case 75: // $bb75
        var $364=HEAP[$0]; //@line 432 "_codecs_iso2022.c"
        HEAP[$retval]=$364; //@line 432 "_codecs_iso2022.c"
        __label__ = 76; break; //@line 432 "_codecs_iso2022.c"
      case 76: // $return
        var $retval76=HEAP[$retval]; //@line 432 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval76; //@line 432 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ksx1001_init() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $_alloca_point_=0;
        var $1=HEAP[_initialized_9477]; //@line 572 "_codecs_iso2022.c"
        var $2=((($1))|0)==0; //@line 572 "_codecs_iso2022.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 572 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=_importmap(((__str12)&4294967295), ((__str13)&4294967295), _cp949_encmap, 0); //@line 572 "_codecs_iso2022.c"
        var $4=((($3))|0)!=0; //@line 572 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 572 "_codecs_iso2022.c"
      case 2: // $bb1
        var $5=_importmap(((__str12)&4294967295), ((__str14)&4294967295), 0, _ksx1001_decmap); //@line 572 "_codecs_iso2022.c"
        var $6=((($5))|0)!=0; //@line 572 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 572 "_codecs_iso2022.c"
      case 3: // $bb2
        HEAP[$0]=-1; //@line 575 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 575 "_codecs_iso2022.c"
      case 4: // $bb3
        HEAP[_initialized_9477]=1; //@line 576 "_codecs_iso2022.c"
        HEAP[$0]=0; //@line 577 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 577 "_codecs_iso2022.c"
      case 5: // $bb4
        var $7=HEAP[$0]; //@line 575 "_codecs_iso2022.c"
        HEAP[$retval]=$7; //@line 575 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 575 "_codecs_iso2022.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 575 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 575 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ksx1001_decoder($data) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $u=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        var $1=HEAP[_ksx1001_decmap]; //@line 584 "_codecs_iso2022.c"
        var $2=HEAP[$data_addr]; //@line 584 "_codecs_iso2022.c"
        var $3=(($2)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 584 "_codecs_iso2022.c"
        var $5=unSign(($4), 8, 0); //@line 584 "_codecs_iso2022.c"
        var $6=(($1+8*$5)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $7=(($6)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 584 "_codecs_iso2022.c"
        var $9=$8; //@line 584 "_codecs_iso2022.c"
        var $10=($9)==0; //@line 584 "_codecs_iso2022.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 584 "_codecs_iso2022.c"
      case 1: // $bb
        var $11=HEAP[$data_addr]; //@line 584 "_codecs_iso2022.c"
        var $12=(($11+1)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 584 "_codecs_iso2022.c"
        var $14=HEAP[_ksx1001_decmap]; //@line 584 "_codecs_iso2022.c"
        var $15=HEAP[$data_addr]; //@line 584 "_codecs_iso2022.c"
        var $16=(($15)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 584 "_codecs_iso2022.c"
        var $18=unSign(($17), 8, 0); //@line 584 "_codecs_iso2022.c"
        var $19=(($14+8*$18)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $20=(($19+4)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 584 "_codecs_iso2022.c"
        var $22=unSign(($13), 8, 0) < unSign(($21), 8, 0); //@line 584 "_codecs_iso2022.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 584 "_codecs_iso2022.c"
      case 2: // $bb1
        var $23=HEAP[$data_addr]; //@line 584 "_codecs_iso2022.c"
        var $24=(($23+1)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 584 "_codecs_iso2022.c"
        var $26=HEAP[_ksx1001_decmap]; //@line 584 "_codecs_iso2022.c"
        var $27=HEAP[$data_addr]; //@line 584 "_codecs_iso2022.c"
        var $28=(($27)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 584 "_codecs_iso2022.c"
        var $30=unSign(($29), 8, 0); //@line 584 "_codecs_iso2022.c"
        var $31=(($26+8*$30)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $32=(($31+5)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 584 "_codecs_iso2022.c"
        var $34=unSign(($25), 8, 0) > unSign(($33), 8, 0); //@line 584 "_codecs_iso2022.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 584 "_codecs_iso2022.c"
      case 3: // $bb2
        var $35=HEAP[_ksx1001_decmap]; //@line 584 "_codecs_iso2022.c"
        var $36=HEAP[$data_addr]; //@line 584 "_codecs_iso2022.c"
        var $37=(($36)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $38=HEAP[$37]; //@line 584 "_codecs_iso2022.c"
        var $39=unSign(($38), 8, 0); //@line 584 "_codecs_iso2022.c"
        var $40=(($35+8*$39)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $41=(($40)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 584 "_codecs_iso2022.c"
        var $43=HEAP[$data_addr]; //@line 584 "_codecs_iso2022.c"
        var $44=(($43+1)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 584 "_codecs_iso2022.c"
        var $46=unSign(($45), 8, 0); //@line 584 "_codecs_iso2022.c"
        var $47=HEAP[_ksx1001_decmap]; //@line 584 "_codecs_iso2022.c"
        var $48=HEAP[$data_addr]; //@line 584 "_codecs_iso2022.c"
        var $49=(($48)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 584 "_codecs_iso2022.c"
        var $51=unSign(($50), 8, 0); //@line 584 "_codecs_iso2022.c"
        var $52=(($47+8*$51)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $53=(($52+4)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $54=HEAP[$53]; //@line 584 "_codecs_iso2022.c"
        var $55=unSign(($54), 8, 0); //@line 584 "_codecs_iso2022.c"
        var $56=((($46) - ($55))&4294967295); //@line 584 "_codecs_iso2022.c"
        var $57=(($42+2*$56)&4294967295); //@line 584 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 584 "_codecs_iso2022.c"
        var $59=unSign(($58), 16, 0); //@line 584 "_codecs_iso2022.c"
        HEAP[$u]=$59; //@line 584 "_codecs_iso2022.c"
        var $60=HEAP[$u]; //@line 584 "_codecs_iso2022.c"
        var $61=((($60))|0)==65534; //@line 584 "_codecs_iso2022.c"
        if ($61) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 584 "_codecs_iso2022.c"
      case 4: // $bb3
        var $62=HEAP[$u]; //@line 585 "_codecs_iso2022.c"
        HEAP[$0]=$62; //@line 585 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 585 "_codecs_iso2022.c"
      case 5: // $bb4
        HEAP[$0]=65535; //@line 587 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 587 "_codecs_iso2022.c"
      case 6: // $bb5
        var $63=HEAP[$0]; //@line 585 "_codecs_iso2022.c"
        HEAP[$retval]=$63; //@line 585 "_codecs_iso2022.c"
        __label__ = 7; break; //@line 585 "_codecs_iso2022.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 585 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 585 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ksx1001_encoder($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $coded=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        var $1=HEAP[$length_addr]; //@line 594 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 594 "_codecs_iso2022.c"
        var $3=((($2))|0)!=1; //@line 594 "_codecs_iso2022.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 594 "_codecs_iso2022.c"
      case 1: // $bb
        ___assert_fail(((__str15)&4294967295), ((__str10)&4294967295), 594, ((___PRETTY_FUNCTION___9539)&4294967295)); //@line 594 "_codecs_iso2022.c"
        throw "Reached an unreachable! Original .ll line: 3498"; //@line 594 "_codecs_iso2022.c"
      case 2: // $bb1
        var $4=HEAP[$data_addr]; //@line 595 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 595 "_codecs_iso2022.c"
        var $6=((($5))>>>0) <= 65535; //@line 595 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 595 "_codecs_iso2022.c"
      case 3: // $bb2
        var $7=HEAP[_cp949_encmap]; //@line 596 "_codecs_iso2022.c"
        var $8=HEAP[$data_addr]; //@line 596 "_codecs_iso2022.c"
        var $9=HEAP[$8]; //@line 596 "_codecs_iso2022.c"
        var $10=((($9))>>>0) >>> 8; //@line 596 "_codecs_iso2022.c"
        var $11=(($7+8*$10)&4294967295); //@line 596 "_codecs_iso2022.c"
        var $12=(($11)&4294967295); //@line 596 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 596 "_codecs_iso2022.c"
        var $14=$13; //@line 596 "_codecs_iso2022.c"
        var $15=($14)!=0; //@line 596 "_codecs_iso2022.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 596 "_codecs_iso2022.c"
      case 4: // $bb3
        var $16=HEAP[$data_addr]; //@line 596 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 596 "_codecs_iso2022.c"
        var $18=($17) & 255; //@line 596 "_codecs_iso2022.c"
        var $19=HEAP[_cp949_encmap]; //@line 596 "_codecs_iso2022.c"
        var $20=HEAP[$data_addr]; //@line 596 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 596 "_codecs_iso2022.c"
        var $22=((($21))>>>0) >>> 8; //@line 596 "_codecs_iso2022.c"
        var $23=(($19+8*$22)&4294967295); //@line 596 "_codecs_iso2022.c"
        var $24=(($23+4)&4294967295); //@line 596 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 596 "_codecs_iso2022.c"
        var $26=unSign(($25), 8, 0); //@line 596 "_codecs_iso2022.c"
        var $27=((($18))>>>0) >= ((($26))>>>0); //@line 596 "_codecs_iso2022.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 596 "_codecs_iso2022.c"
      case 5: // $bb4
        var $28=HEAP[$data_addr]; //@line 596 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 596 "_codecs_iso2022.c"
        var $30=($29) & 255; //@line 596 "_codecs_iso2022.c"
        var $31=HEAP[_cp949_encmap]; //@line 596 "_codecs_iso2022.c"
        var $32=HEAP[$data_addr]; //@line 596 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 596 "_codecs_iso2022.c"
        var $34=((($33))>>>0) >>> 8; //@line 596 "_codecs_iso2022.c"
        var $35=(($31+8*$34)&4294967295); //@line 596 "_codecs_iso2022.c"
        var $36=(($35+5)&4294967295); //@line 596 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 596 "_codecs_iso2022.c"
        var $38=unSign(($37), 8, 0); //@line 596 "_codecs_iso2022.c"
        var $39=((($30))>>>0) <= ((($38))>>>0); //@line 596 "_codecs_iso2022.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 596 "_codecs_iso2022.c"
      case 6: // $bb5
        var $40=HEAP[_cp949_encmap]; //@line 596 "_codecs_iso2022.c"
        var $41=HEAP[$data_addr]; //@line 596 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 596 "_codecs_iso2022.c"
        var $43=((($42))>>>0) >>> 8; //@line 596 "_codecs_iso2022.c"
        var $44=(($40+8*$43)&4294967295); //@line 596 "_codecs_iso2022.c"
        var $45=(($44)&4294967295); //@line 596 "_codecs_iso2022.c"
        var $46=HEAP[$45]; //@line 596 "_codecs_iso2022.c"
        var $47=HEAP[$data_addr]; //@line 596 "_codecs_iso2022.c"
        var $48=HEAP[$47]; //@line 596 "_codecs_iso2022.c"
        var $49=($48) & 255; //@line 596 "_codecs_iso2022.c"
        var $50=HEAP[_cp949_encmap]; //@line 596 "_codecs_iso2022.c"
        var $51=HEAP[$data_addr]; //@line 596 "_codecs_iso2022.c"
        var $52=HEAP[$51]; //@line 596 "_codecs_iso2022.c"
        var $53=((($52))>>>0) >>> 8; //@line 596 "_codecs_iso2022.c"
        var $54=(($50+8*$53)&4294967295); //@line 596 "_codecs_iso2022.c"
        var $55=(($54+4)&4294967295); //@line 596 "_codecs_iso2022.c"
        var $56=HEAP[$55]; //@line 596 "_codecs_iso2022.c"
        var $57=unSign(($56), 8, 0); //@line 596 "_codecs_iso2022.c"
        var $58=((($49) - ($57))&4294967295); //@line 596 "_codecs_iso2022.c"
        var $59=(($46+2*$58)&4294967295); //@line 596 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 596 "_codecs_iso2022.c"
        HEAP[$coded]=$60; //@line 596 "_codecs_iso2022.c"
        var $61=HEAP[$coded]; //@line 596 "_codecs_iso2022.c"
        var $62=reSign(($61), 16, 0)!=-1; //@line 596 "_codecs_iso2022.c"
        if ($62) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 596 "_codecs_iso2022.c"
      case 7: // $bb6
        var $63=HEAP[$coded]; //@line 597 "_codecs_iso2022.c"
        var $64=reSign(($63), 16, 0) >= 0; //@line 597 "_codecs_iso2022.c"
        if ($64) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 597 "_codecs_iso2022.c"
      case 8: // $bb7
        var $65=HEAP[$coded]; //@line 598 "_codecs_iso2022.c"
        var $66=unSign(($65), 16, 0); //@line 598 "_codecs_iso2022.c"
        HEAP[$0]=$66; //@line 598 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 598 "_codecs_iso2022.c"
      case 9: // $bb8
        HEAP[$0]=65535; //@line 600 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 600 "_codecs_iso2022.c"
      case 10: // $bb9
        var $67=HEAP[$0]; //@line 598 "_codecs_iso2022.c"
        HEAP[$retval]=$67; //@line 598 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 598 "_codecs_iso2022.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 598 "_codecs_iso2022.c"
        var $retval1011=((($retval10)) & 65535); //@line 598 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval1011; //@line 598 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0208_init() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $_alloca_point_=0;
        var $1=HEAP[_initialized_9598]; //@line 608 "_codecs_iso2022.c"
        var $2=((($1))|0)==0; //@line 608 "_codecs_iso2022.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 608 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=_importmap(((__str16)&4294967295), ((__str17)&4294967295), _jisxcommon_encmap, 0); //@line 608 "_codecs_iso2022.c"
        var $4=((($3))|0)!=0; //@line 608 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 608 "_codecs_iso2022.c"
      case 2: // $bb1
        var $5=_importmap(((__str16)&4294967295), ((__str18)&4294967295), 0, _jisx0208_decmap); //@line 608 "_codecs_iso2022.c"
        var $6=((($5))|0)!=0; //@line 608 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 608 "_codecs_iso2022.c"
      case 3: // $bb2
        HEAP[$0]=-1; //@line 611 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 611 "_codecs_iso2022.c"
      case 4: // $bb3
        HEAP[_initialized_9598]=1; //@line 612 "_codecs_iso2022.c"
        HEAP[$0]=0; //@line 613 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 613 "_codecs_iso2022.c"
      case 5: // $bb4
        var $7=HEAP[$0]; //@line 611 "_codecs_iso2022.c"
        HEAP[$retval]=$7; //@line 611 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 611 "_codecs_iso2022.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 611 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 611 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0208_decoder($data) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $u=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        var $1=HEAP[$data_addr]; //@line 620 "_codecs_iso2022.c"
        var $2=(($1)&4294967295); //@line 620 "_codecs_iso2022.c"
        var $3=HEAP[$2]; //@line 620 "_codecs_iso2022.c"
        var $4=reSign(($3), 8, 0)!=33; //@line 620 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 620 "_codecs_iso2022.c"
      case 1: // $bb
        var $5=HEAP[$data_addr]; //@line 620 "_codecs_iso2022.c"
        var $6=(($5+1)&4294967295); //@line 620 "_codecs_iso2022.c"
        var $7=HEAP[$6]; //@line 620 "_codecs_iso2022.c"
        var $8=reSign(($7), 8, 0)!=64; //@line 620 "_codecs_iso2022.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 620 "_codecs_iso2022.c"
      case 2: // $bb1
        HEAP[$0]=65340; //@line 621 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 621 "_codecs_iso2022.c"
      case 3: // $bb2
        var $9=HEAP[_jisx0208_decmap]; //@line 622 "_codecs_iso2022.c"
        var $10=HEAP[$data_addr]; //@line 622 "_codecs_iso2022.c"
        var $11=(($10)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 622 "_codecs_iso2022.c"
        var $13=unSign(($12), 8, 0); //@line 622 "_codecs_iso2022.c"
        var $14=(($9+8*$13)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $15=(($14)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $16=HEAP[$15]; //@line 622 "_codecs_iso2022.c"
        var $17=$16; //@line 622 "_codecs_iso2022.c"
        var $18=($17)==0; //@line 622 "_codecs_iso2022.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 622 "_codecs_iso2022.c"
      case 4: // $bb3
        var $19=HEAP[$data_addr]; //@line 622 "_codecs_iso2022.c"
        var $20=(($19+1)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 622 "_codecs_iso2022.c"
        var $22=HEAP[_jisx0208_decmap]; //@line 622 "_codecs_iso2022.c"
        var $23=HEAP[$data_addr]; //@line 622 "_codecs_iso2022.c"
        var $24=(($23)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 622 "_codecs_iso2022.c"
        var $26=unSign(($25), 8, 0); //@line 622 "_codecs_iso2022.c"
        var $27=(($22+8*$26)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $28=(($27+4)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 622 "_codecs_iso2022.c"
        var $30=unSign(($21), 8, 0) < unSign(($29), 8, 0); //@line 622 "_codecs_iso2022.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 622 "_codecs_iso2022.c"
      case 5: // $bb4
        var $31=HEAP[$data_addr]; //@line 622 "_codecs_iso2022.c"
        var $32=(($31+1)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 622 "_codecs_iso2022.c"
        var $34=HEAP[_jisx0208_decmap]; //@line 622 "_codecs_iso2022.c"
        var $35=HEAP[$data_addr]; //@line 622 "_codecs_iso2022.c"
        var $36=(($35)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 622 "_codecs_iso2022.c"
        var $38=unSign(($37), 8, 0); //@line 622 "_codecs_iso2022.c"
        var $39=(($34+8*$38)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $40=(($39+5)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $41=HEAP[$40]; //@line 622 "_codecs_iso2022.c"
        var $42=unSign(($33), 8, 0) > unSign(($41), 8, 0); //@line 622 "_codecs_iso2022.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 622 "_codecs_iso2022.c"
      case 6: // $bb5
        var $43=HEAP[_jisx0208_decmap]; //@line 622 "_codecs_iso2022.c"
        var $44=HEAP[$data_addr]; //@line 622 "_codecs_iso2022.c"
        var $45=(($44)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $46=HEAP[$45]; //@line 622 "_codecs_iso2022.c"
        var $47=unSign(($46), 8, 0); //@line 622 "_codecs_iso2022.c"
        var $48=(($43+8*$47)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $49=(($48)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 622 "_codecs_iso2022.c"
        var $51=HEAP[$data_addr]; //@line 622 "_codecs_iso2022.c"
        var $52=(($51+1)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $53=HEAP[$52]; //@line 622 "_codecs_iso2022.c"
        var $54=unSign(($53), 8, 0); //@line 622 "_codecs_iso2022.c"
        var $55=HEAP[_jisx0208_decmap]; //@line 622 "_codecs_iso2022.c"
        var $56=HEAP[$data_addr]; //@line 622 "_codecs_iso2022.c"
        var $57=(($56)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 622 "_codecs_iso2022.c"
        var $59=unSign(($58), 8, 0); //@line 622 "_codecs_iso2022.c"
        var $60=(($55+8*$59)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $61=(($60+4)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $62=HEAP[$61]; //@line 622 "_codecs_iso2022.c"
        var $63=unSign(($62), 8, 0); //@line 622 "_codecs_iso2022.c"
        var $64=((($54) - ($63))&4294967295); //@line 622 "_codecs_iso2022.c"
        var $65=(($50+2*$64)&4294967295); //@line 622 "_codecs_iso2022.c"
        var $66=HEAP[$65]; //@line 622 "_codecs_iso2022.c"
        var $67=unSign(($66), 16, 0); //@line 622 "_codecs_iso2022.c"
        HEAP[$u]=$67; //@line 622 "_codecs_iso2022.c"
        var $68=HEAP[$u]; //@line 622 "_codecs_iso2022.c"
        var $69=((($68))|0)==65534; //@line 622 "_codecs_iso2022.c"
        if ($69) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 622 "_codecs_iso2022.c"
      case 7: // $bb6
        var $70=HEAP[$u]; //@line 623 "_codecs_iso2022.c"
        HEAP[$0]=$70; //@line 623 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 623 "_codecs_iso2022.c"
      case 8: // $bb7
        HEAP[$0]=65535; //@line 625 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 625 "_codecs_iso2022.c"
      case 9: // $bb8
        var $71=HEAP[$0]; //@line 621 "_codecs_iso2022.c"
        HEAP[$retval]=$71; //@line 621 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 621 "_codecs_iso2022.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 621 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 621 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0208_encoder($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $coded=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        var $1=HEAP[$length_addr]; //@line 632 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 632 "_codecs_iso2022.c"
        var $3=((($2))|0)!=1; //@line 632 "_codecs_iso2022.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 632 "_codecs_iso2022.c"
      case 1: // $bb
        ___assert_fail(((__str15)&4294967295), ((__str10)&4294967295), 632, ((___PRETTY_FUNCTION___9665)&4294967295)); //@line 632 "_codecs_iso2022.c"
        throw "Reached an unreachable! Original .ll line: 3782"; //@line 632 "_codecs_iso2022.c"
      case 2: // $bb1
        var $4=HEAP[$data_addr]; //@line 633 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 633 "_codecs_iso2022.c"
        var $6=((($5))>>>0) <= 65535; //@line 633 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 11; break; } //@line 633 "_codecs_iso2022.c"
      case 3: // $bb2
        var $7=HEAP[$data_addr]; //@line 634 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 634 "_codecs_iso2022.c"
        var $9=((($8))|0)==65340; //@line 634 "_codecs_iso2022.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 634 "_codecs_iso2022.c"
      case 4: // $bb3
        HEAP[$0]=8512; //@line 635 "_codecs_iso2022.c"
        __label__ = 12; break; //@line 635 "_codecs_iso2022.c"
      case 5: // $bb4
        var $10=HEAP[_jisxcommon_encmap]; //@line 636 "_codecs_iso2022.c"
        var $11=HEAP[$data_addr]; //@line 636 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 636 "_codecs_iso2022.c"
        var $13=((($12))>>>0) >>> 8; //@line 636 "_codecs_iso2022.c"
        var $14=(($10+8*$13)&4294967295); //@line 636 "_codecs_iso2022.c"
        var $15=(($14)&4294967295); //@line 636 "_codecs_iso2022.c"
        var $16=HEAP[$15]; //@line 636 "_codecs_iso2022.c"
        var $17=$16; //@line 636 "_codecs_iso2022.c"
        var $18=($17)!=0; //@line 636 "_codecs_iso2022.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 636 "_codecs_iso2022.c"
      case 6: // $bb5
        var $19=HEAP[$data_addr]; //@line 636 "_codecs_iso2022.c"
        var $20=HEAP[$19]; //@line 636 "_codecs_iso2022.c"
        var $21=($20) & 255; //@line 636 "_codecs_iso2022.c"
        var $22=HEAP[_jisxcommon_encmap]; //@line 636 "_codecs_iso2022.c"
        var $23=HEAP[$data_addr]; //@line 636 "_codecs_iso2022.c"
        var $24=HEAP[$23]; //@line 636 "_codecs_iso2022.c"
        var $25=((($24))>>>0) >>> 8; //@line 636 "_codecs_iso2022.c"
        var $26=(($22+8*$25)&4294967295); //@line 636 "_codecs_iso2022.c"
        var $27=(($26+4)&4294967295); //@line 636 "_codecs_iso2022.c"
        var $28=HEAP[$27]; //@line 636 "_codecs_iso2022.c"
        var $29=unSign(($28), 8, 0); //@line 636 "_codecs_iso2022.c"
        var $30=((($21))>>>0) >= ((($29))>>>0); //@line 636 "_codecs_iso2022.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 636 "_codecs_iso2022.c"
      case 7: // $bb6
        var $31=HEAP[$data_addr]; //@line 636 "_codecs_iso2022.c"
        var $32=HEAP[$31]; //@line 636 "_codecs_iso2022.c"
        var $33=($32) & 255; //@line 636 "_codecs_iso2022.c"
        var $34=HEAP[_jisxcommon_encmap]; //@line 636 "_codecs_iso2022.c"
        var $35=HEAP[$data_addr]; //@line 636 "_codecs_iso2022.c"
        var $36=HEAP[$35]; //@line 636 "_codecs_iso2022.c"
        var $37=((($36))>>>0) >>> 8; //@line 636 "_codecs_iso2022.c"
        var $38=(($34+8*$37)&4294967295); //@line 636 "_codecs_iso2022.c"
        var $39=(($38+5)&4294967295); //@line 636 "_codecs_iso2022.c"
        var $40=HEAP[$39]; //@line 636 "_codecs_iso2022.c"
        var $41=unSign(($40), 8, 0); //@line 636 "_codecs_iso2022.c"
        var $42=((($33))>>>0) <= ((($41))>>>0); //@line 636 "_codecs_iso2022.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 636 "_codecs_iso2022.c"
      case 8: // $bb7
        var $43=HEAP[_jisxcommon_encmap]; //@line 636 "_codecs_iso2022.c"
        var $44=HEAP[$data_addr]; //@line 636 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 636 "_codecs_iso2022.c"
        var $46=((($45))>>>0) >>> 8; //@line 636 "_codecs_iso2022.c"
        var $47=(($43+8*$46)&4294967295); //@line 636 "_codecs_iso2022.c"
        var $48=(($47)&4294967295); //@line 636 "_codecs_iso2022.c"
        var $49=HEAP[$48]; //@line 636 "_codecs_iso2022.c"
        var $50=HEAP[$data_addr]; //@line 636 "_codecs_iso2022.c"
        var $51=HEAP[$50]; //@line 636 "_codecs_iso2022.c"
        var $52=($51) & 255; //@line 636 "_codecs_iso2022.c"
        var $53=HEAP[_jisxcommon_encmap]; //@line 636 "_codecs_iso2022.c"
        var $54=HEAP[$data_addr]; //@line 636 "_codecs_iso2022.c"
        var $55=HEAP[$54]; //@line 636 "_codecs_iso2022.c"
        var $56=((($55))>>>0) >>> 8; //@line 636 "_codecs_iso2022.c"
        var $57=(($53+8*$56)&4294967295); //@line 636 "_codecs_iso2022.c"
        var $58=(($57+4)&4294967295); //@line 636 "_codecs_iso2022.c"
        var $59=HEAP[$58]; //@line 636 "_codecs_iso2022.c"
        var $60=unSign(($59), 8, 0); //@line 636 "_codecs_iso2022.c"
        var $61=((($52) - ($60))&4294967295); //@line 636 "_codecs_iso2022.c"
        var $62=(($49+2*$61)&4294967295); //@line 636 "_codecs_iso2022.c"
        var $63=HEAP[$62]; //@line 636 "_codecs_iso2022.c"
        HEAP[$coded]=$63; //@line 636 "_codecs_iso2022.c"
        var $64=HEAP[$coded]; //@line 636 "_codecs_iso2022.c"
        var $65=reSign(($64), 16, 0)!=-1; //@line 636 "_codecs_iso2022.c"
        if ($65) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 636 "_codecs_iso2022.c"
      case 9: // $bb8
        var $66=HEAP[$coded]; //@line 637 "_codecs_iso2022.c"
        var $67=reSign(($66), 16, 0) >= 0; //@line 637 "_codecs_iso2022.c"
        if ($67) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 637 "_codecs_iso2022.c"
      case 10: // $bb9
        var $68=HEAP[$coded]; //@line 638 "_codecs_iso2022.c"
        var $69=unSign(($68), 16, 0); //@line 638 "_codecs_iso2022.c"
        HEAP[$0]=$69; //@line 638 "_codecs_iso2022.c"
        __label__ = 12; break; //@line 638 "_codecs_iso2022.c"
      case 11: // $bb10
        HEAP[$0]=65535; //@line 641 "_codecs_iso2022.c"
        __label__ = 12; break; //@line 641 "_codecs_iso2022.c"
      case 12: // $bb11
        var $70=HEAP[$0]; //@line 635 "_codecs_iso2022.c"
        HEAP[$retval]=$70; //@line 635 "_codecs_iso2022.c"
        __label__ = 13; break; //@line 635 "_codecs_iso2022.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 635 "_codecs_iso2022.c"
        var $retval1213=((($retval12)) & 65535); //@line 635 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval1213; //@line 635 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0212_init() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $_alloca_point_=0;
        var $1=HEAP[_initialized_9727]; //@line 649 "_codecs_iso2022.c"
        var $2=((($1))|0)==0; //@line 649 "_codecs_iso2022.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 649 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=_importmap(((__str16)&4294967295), ((__str17)&4294967295), _jisxcommon_encmap, 0); //@line 649 "_codecs_iso2022.c"
        var $4=((($3))|0)!=0; //@line 649 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 649 "_codecs_iso2022.c"
      case 2: // $bb1
        var $5=_importmap(((__str16)&4294967295), ((__str19)&4294967295), 0, _jisx0212_decmap); //@line 649 "_codecs_iso2022.c"
        var $6=((($5))|0)!=0; //@line 649 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 649 "_codecs_iso2022.c"
      case 3: // $bb2
        HEAP[$0]=-1; //@line 652 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 652 "_codecs_iso2022.c"
      case 4: // $bb3
        HEAP[_initialized_9727]=1; //@line 653 "_codecs_iso2022.c"
        HEAP[$0]=0; //@line 654 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 654 "_codecs_iso2022.c"
      case 5: // $bb4
        var $7=HEAP[$0]; //@line 652 "_codecs_iso2022.c"
        HEAP[$retval]=$7; //@line 652 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 652 "_codecs_iso2022.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 652 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 652 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0212_decoder($data) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $u=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        var $1=HEAP[_jisx0212_decmap]; //@line 661 "_codecs_iso2022.c"
        var $2=HEAP[$data_addr]; //@line 661 "_codecs_iso2022.c"
        var $3=(($2)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 661 "_codecs_iso2022.c"
        var $5=unSign(($4), 8, 0); //@line 661 "_codecs_iso2022.c"
        var $6=(($1+8*$5)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $7=(($6)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 661 "_codecs_iso2022.c"
        var $9=$8; //@line 661 "_codecs_iso2022.c"
        var $10=($9)==0; //@line 661 "_codecs_iso2022.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 661 "_codecs_iso2022.c"
      case 1: // $bb
        var $11=HEAP[$data_addr]; //@line 661 "_codecs_iso2022.c"
        var $12=(($11+1)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 661 "_codecs_iso2022.c"
        var $14=HEAP[_jisx0212_decmap]; //@line 661 "_codecs_iso2022.c"
        var $15=HEAP[$data_addr]; //@line 661 "_codecs_iso2022.c"
        var $16=(($15)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 661 "_codecs_iso2022.c"
        var $18=unSign(($17), 8, 0); //@line 661 "_codecs_iso2022.c"
        var $19=(($14+8*$18)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $20=(($19+4)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 661 "_codecs_iso2022.c"
        var $22=unSign(($13), 8, 0) < unSign(($21), 8, 0); //@line 661 "_codecs_iso2022.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 661 "_codecs_iso2022.c"
      case 2: // $bb1
        var $23=HEAP[$data_addr]; //@line 661 "_codecs_iso2022.c"
        var $24=(($23+1)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 661 "_codecs_iso2022.c"
        var $26=HEAP[_jisx0212_decmap]; //@line 661 "_codecs_iso2022.c"
        var $27=HEAP[$data_addr]; //@line 661 "_codecs_iso2022.c"
        var $28=(($27)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 661 "_codecs_iso2022.c"
        var $30=unSign(($29), 8, 0); //@line 661 "_codecs_iso2022.c"
        var $31=(($26+8*$30)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $32=(($31+5)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 661 "_codecs_iso2022.c"
        var $34=unSign(($25), 8, 0) > unSign(($33), 8, 0); //@line 661 "_codecs_iso2022.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 661 "_codecs_iso2022.c"
      case 3: // $bb2
        var $35=HEAP[_jisx0212_decmap]; //@line 661 "_codecs_iso2022.c"
        var $36=HEAP[$data_addr]; //@line 661 "_codecs_iso2022.c"
        var $37=(($36)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $38=HEAP[$37]; //@line 661 "_codecs_iso2022.c"
        var $39=unSign(($38), 8, 0); //@line 661 "_codecs_iso2022.c"
        var $40=(($35+8*$39)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $41=(($40)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 661 "_codecs_iso2022.c"
        var $43=HEAP[$data_addr]; //@line 661 "_codecs_iso2022.c"
        var $44=(($43+1)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 661 "_codecs_iso2022.c"
        var $46=unSign(($45), 8, 0); //@line 661 "_codecs_iso2022.c"
        var $47=HEAP[_jisx0212_decmap]; //@line 661 "_codecs_iso2022.c"
        var $48=HEAP[$data_addr]; //@line 661 "_codecs_iso2022.c"
        var $49=(($48)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 661 "_codecs_iso2022.c"
        var $51=unSign(($50), 8, 0); //@line 661 "_codecs_iso2022.c"
        var $52=(($47+8*$51)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $53=(($52+4)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $54=HEAP[$53]; //@line 661 "_codecs_iso2022.c"
        var $55=unSign(($54), 8, 0); //@line 661 "_codecs_iso2022.c"
        var $56=((($46) - ($55))&4294967295); //@line 661 "_codecs_iso2022.c"
        var $57=(($42+2*$56)&4294967295); //@line 661 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 661 "_codecs_iso2022.c"
        var $59=unSign(($58), 16, 0); //@line 661 "_codecs_iso2022.c"
        HEAP[$u]=$59; //@line 661 "_codecs_iso2022.c"
        var $60=HEAP[$u]; //@line 661 "_codecs_iso2022.c"
        var $61=((($60))|0)==65534; //@line 661 "_codecs_iso2022.c"
        if ($61) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 661 "_codecs_iso2022.c"
      case 4: // $bb3
        var $62=HEAP[$u]; //@line 662 "_codecs_iso2022.c"
        HEAP[$0]=$62; //@line 662 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 662 "_codecs_iso2022.c"
      case 5: // $bb4
        HEAP[$0]=65535; //@line 664 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 664 "_codecs_iso2022.c"
      case 6: // $bb5
        var $63=HEAP[$0]; //@line 662 "_codecs_iso2022.c"
        HEAP[$retval]=$63; //@line 662 "_codecs_iso2022.c"
        __label__ = 7; break; //@line 662 "_codecs_iso2022.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 662 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 662 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0212_encoder($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $coded=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        var $1=HEAP[$length_addr]; //@line 671 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 671 "_codecs_iso2022.c"
        var $3=((($2))|0)!=1; //@line 671 "_codecs_iso2022.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 671 "_codecs_iso2022.c"
      case 1: // $bb
        ___assert_fail(((__str15)&4294967295), ((__str10)&4294967295), 671, ((___PRETTY_FUNCTION___9789)&4294967295)); //@line 671 "_codecs_iso2022.c"
        throw "Reached an unreachable! Original .ll line: 4058"; //@line 671 "_codecs_iso2022.c"
      case 2: // $bb1
        var $4=HEAP[$data_addr]; //@line 672 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 672 "_codecs_iso2022.c"
        var $6=((($5))>>>0) <= 65535; //@line 672 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 672 "_codecs_iso2022.c"
      case 3: // $bb2
        var $7=HEAP[_jisxcommon_encmap]; //@line 673 "_codecs_iso2022.c"
        var $8=HEAP[$data_addr]; //@line 673 "_codecs_iso2022.c"
        var $9=HEAP[$8]; //@line 673 "_codecs_iso2022.c"
        var $10=((($9))>>>0) >>> 8; //@line 673 "_codecs_iso2022.c"
        var $11=(($7+8*$10)&4294967295); //@line 673 "_codecs_iso2022.c"
        var $12=(($11)&4294967295); //@line 673 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 673 "_codecs_iso2022.c"
        var $14=$13; //@line 673 "_codecs_iso2022.c"
        var $15=($14)!=0; //@line 673 "_codecs_iso2022.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 673 "_codecs_iso2022.c"
      case 4: // $bb3
        var $16=HEAP[$data_addr]; //@line 673 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 673 "_codecs_iso2022.c"
        var $18=($17) & 255; //@line 673 "_codecs_iso2022.c"
        var $19=HEAP[_jisxcommon_encmap]; //@line 673 "_codecs_iso2022.c"
        var $20=HEAP[$data_addr]; //@line 673 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 673 "_codecs_iso2022.c"
        var $22=((($21))>>>0) >>> 8; //@line 673 "_codecs_iso2022.c"
        var $23=(($19+8*$22)&4294967295); //@line 673 "_codecs_iso2022.c"
        var $24=(($23+4)&4294967295); //@line 673 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 673 "_codecs_iso2022.c"
        var $26=unSign(($25), 8, 0); //@line 673 "_codecs_iso2022.c"
        var $27=((($18))>>>0) >= ((($26))>>>0); //@line 673 "_codecs_iso2022.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 673 "_codecs_iso2022.c"
      case 5: // $bb4
        var $28=HEAP[$data_addr]; //@line 673 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 673 "_codecs_iso2022.c"
        var $30=($29) & 255; //@line 673 "_codecs_iso2022.c"
        var $31=HEAP[_jisxcommon_encmap]; //@line 673 "_codecs_iso2022.c"
        var $32=HEAP[$data_addr]; //@line 673 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 673 "_codecs_iso2022.c"
        var $34=((($33))>>>0) >>> 8; //@line 673 "_codecs_iso2022.c"
        var $35=(($31+8*$34)&4294967295); //@line 673 "_codecs_iso2022.c"
        var $36=(($35+5)&4294967295); //@line 673 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 673 "_codecs_iso2022.c"
        var $38=unSign(($37), 8, 0); //@line 673 "_codecs_iso2022.c"
        var $39=((($30))>>>0) <= ((($38))>>>0); //@line 673 "_codecs_iso2022.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 673 "_codecs_iso2022.c"
      case 6: // $bb5
        var $40=HEAP[_jisxcommon_encmap]; //@line 673 "_codecs_iso2022.c"
        var $41=HEAP[$data_addr]; //@line 673 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 673 "_codecs_iso2022.c"
        var $43=((($42))>>>0) >>> 8; //@line 673 "_codecs_iso2022.c"
        var $44=(($40+8*$43)&4294967295); //@line 673 "_codecs_iso2022.c"
        var $45=(($44)&4294967295); //@line 673 "_codecs_iso2022.c"
        var $46=HEAP[$45]; //@line 673 "_codecs_iso2022.c"
        var $47=HEAP[$data_addr]; //@line 673 "_codecs_iso2022.c"
        var $48=HEAP[$47]; //@line 673 "_codecs_iso2022.c"
        var $49=($48) & 255; //@line 673 "_codecs_iso2022.c"
        var $50=HEAP[_jisxcommon_encmap]; //@line 673 "_codecs_iso2022.c"
        var $51=HEAP[$data_addr]; //@line 673 "_codecs_iso2022.c"
        var $52=HEAP[$51]; //@line 673 "_codecs_iso2022.c"
        var $53=((($52))>>>0) >>> 8; //@line 673 "_codecs_iso2022.c"
        var $54=(($50+8*$53)&4294967295); //@line 673 "_codecs_iso2022.c"
        var $55=(($54+4)&4294967295); //@line 673 "_codecs_iso2022.c"
        var $56=HEAP[$55]; //@line 673 "_codecs_iso2022.c"
        var $57=unSign(($56), 8, 0); //@line 673 "_codecs_iso2022.c"
        var $58=((($49) - ($57))&4294967295); //@line 673 "_codecs_iso2022.c"
        var $59=(($46+2*$58)&4294967295); //@line 673 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 673 "_codecs_iso2022.c"
        HEAP[$coded]=$60; //@line 673 "_codecs_iso2022.c"
        var $61=HEAP[$coded]; //@line 673 "_codecs_iso2022.c"
        var $62=reSign(($61), 16, 0)!=-1; //@line 673 "_codecs_iso2022.c"
        if ($62) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 673 "_codecs_iso2022.c"
      case 7: // $bb6
        var $63=HEAP[$coded]; //@line 674 "_codecs_iso2022.c"
        var $64=reSign(($63), 16, 0) < 0; //@line 674 "_codecs_iso2022.c"
        if ($64) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 674 "_codecs_iso2022.c"
      case 8: // $bb7
        var $65=HEAP[$coded]; //@line 675 "_codecs_iso2022.c"
        var $66=unSign(($65), 16, 0); //@line 675 "_codecs_iso2022.c"
        var $67=($66) & 32767; //@line 675 "_codecs_iso2022.c"
        HEAP[$0]=$67; //@line 675 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 675 "_codecs_iso2022.c"
      case 9: // $bb8
        HEAP[$0]=65535; //@line 678 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 678 "_codecs_iso2022.c"
      case 10: // $bb9
        var $68=HEAP[$0]; //@line 675 "_codecs_iso2022.c"
        HEAP[$retval]=$68; //@line 675 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 675 "_codecs_iso2022.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 675 "_codecs_iso2022.c"
        var $retval1011=((($retval10)) & 65535); //@line 675 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval1011; //@line 675 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_init() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $_alloca_point_=0;
        var $1=HEAP[_initialized_9849]; //@line 686 "_codecs_iso2022.c"
        var $2=((($1))|0)==0; //@line 686 "_codecs_iso2022.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 10; break; } //@line 686 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=_jisx0208_init(); //@line 686 "_codecs_iso2022.c"
        var $4=((($3))|0)!=0; //@line 686 "_codecs_iso2022.c"
        if ($4) { __label__ = 9; break; } else { __label__ = 2; break; } //@line 686 "_codecs_iso2022.c"
      case 2: // $bb1
        var $5=_importmap(((__str16)&4294967295), ((__str20)&4294967295), _jisx0213_bmp_encmap, 0); //@line 686 "_codecs_iso2022.c"
        var $6=((($5))|0)!=0; //@line 686 "_codecs_iso2022.c"
        if ($6) { __label__ = 9; break; } else { __label__ = 3; break; } //@line 686 "_codecs_iso2022.c"
      case 3: // $bb2
        var $7=_importmap(((__str16)&4294967295), ((__str21)&4294967295), 0, _jisx0213_1_bmp_decmap); //@line 686 "_codecs_iso2022.c"
        var $8=((($7))|0)!=0; //@line 686 "_codecs_iso2022.c"
        if ($8) { __label__ = 9; break; } else { __label__ = 4; break; } //@line 686 "_codecs_iso2022.c"
      case 4: // $bb3
        var $9=_importmap(((__str16)&4294967295), ((__str22)&4294967295), 0, _jisx0213_2_bmp_decmap); //@line 686 "_codecs_iso2022.c"
        var $10=((($9))|0)!=0; //@line 686 "_codecs_iso2022.c"
        if ($10) { __label__ = 9; break; } else { __label__ = 5; break; } //@line 686 "_codecs_iso2022.c"
      case 5: // $bb4
        var $11=_importmap(((__str16)&4294967295), ((__str23)&4294967295), _jisx0213_emp_encmap, 0); //@line 686 "_codecs_iso2022.c"
        var $12=((($11))|0)!=0; //@line 686 "_codecs_iso2022.c"
        if ($12) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 686 "_codecs_iso2022.c"
      case 6: // $bb5
        var $13=_importmap(((__str16)&4294967295), ((__str24)&4294967295), 0, _jisx0213_1_emp_decmap); //@line 686 "_codecs_iso2022.c"
        var $14=((($13))|0)!=0; //@line 686 "_codecs_iso2022.c"
        if ($14) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 686 "_codecs_iso2022.c"
      case 7: // $bb6
        var $15=_importmap(((__str16)&4294967295), ((__str25)&4294967295), 0, _jisx0213_2_emp_decmap); //@line 686 "_codecs_iso2022.c"
        var $16=((($15))|0)!=0; //@line 686 "_codecs_iso2022.c"
        if ($16) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 686 "_codecs_iso2022.c"
      case 8: // $bb7
        var $17=_importmap(((__str16)&4294967295), ((__str26)&4294967295), _jisx0213_pair_encmap, _jisx0213_pair_decmap); //@line 686 "_codecs_iso2022.c"
        var $18=((($17))|0)!=0; //@line 686 "_codecs_iso2022.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 686 "_codecs_iso2022.c"
      case 9: // $bb8
        HEAP[$0]=-1; //@line 702 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 702 "_codecs_iso2022.c"
      case 10: // $bb9
        HEAP[_initialized_9849]=1; //@line 703 "_codecs_iso2022.c"
        HEAP[$0]=0; //@line 704 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 704 "_codecs_iso2022.c"
      case 11: // $bb10
        var $19=HEAP[$0]; //@line 702 "_codecs_iso2022.c"
        HEAP[$retval]=$19; //@line 702 "_codecs_iso2022.c"
        __label__ = 12; break; //@line 702 "_codecs_iso2022.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 702 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 702 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2000_1_decoder($data) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $u=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        var $1=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $2=(($1)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $3=HEAP[$2]; //@line 712 "_codecs_iso2022.c"
        var $4=reSign(($3), 8, 0)!=46; //@line 712 "_codecs_iso2022.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 712 "_codecs_iso2022.c"
      case 1: // $bb
        var $5=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $6=(($5+1)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $7=HEAP[$6]; //@line 712 "_codecs_iso2022.c"
        var $8=reSign(($7), 8, 0)==33; //@line 712 "_codecs_iso2022.c"
        if ($8) { __label__ = 20; break; } else { __label__ = 2; break; } //@line 712 "_codecs_iso2022.c"
      case 2: // $bb1
        var $9=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $10=(($9)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $11=HEAP[$10]; //@line 712 "_codecs_iso2022.c"
        var $12=reSign(($11), 8, 0)!=47; //@line 712 "_codecs_iso2022.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 712 "_codecs_iso2022.c"
      case 3: // $bb2
        var $13=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $14=(($13+1)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $15=HEAP[$14]; //@line 712 "_codecs_iso2022.c"
        var $16=reSign(($15), 8, 0)==126; //@line 712 "_codecs_iso2022.c"
        if ($16) { __label__ = 20; break; } else { __label__ = 4; break; } //@line 712 "_codecs_iso2022.c"
      case 4: // $bb3
        var $17=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $18=(($17)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $19=HEAP[$18]; //@line 712 "_codecs_iso2022.c"
        var $20=reSign(($19), 8, 0)!=79; //@line 712 "_codecs_iso2022.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 712 "_codecs_iso2022.c"
      case 5: // $bb4
        var $21=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $22=(($21+1)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $23=HEAP[$22]; //@line 712 "_codecs_iso2022.c"
        var $24=reSign(($23), 8, 0)==84; //@line 712 "_codecs_iso2022.c"
        if ($24) { __label__ = 20; break; } else { __label__ = 6; break; } //@line 712 "_codecs_iso2022.c"
      case 6: // $bb5
        var $25=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $26=(($25)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $27=HEAP[$26]; //@line 712 "_codecs_iso2022.c"
        var $28=reSign(($27), 8, 0)!=79; //@line 712 "_codecs_iso2022.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 712 "_codecs_iso2022.c"
      case 7: // $bb6
        var $29=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $30=(($29+1)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $31=HEAP[$30]; //@line 712 "_codecs_iso2022.c"
        var $32=reSign(($31), 8, 0)==126; //@line 712 "_codecs_iso2022.c"
        if ($32) { __label__ = 20; break; } else { __label__ = 8; break; } //@line 712 "_codecs_iso2022.c"
      case 8: // $bb7
        var $33=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $34=(($33)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $35=HEAP[$34]; //@line 712 "_codecs_iso2022.c"
        var $36=reSign(($35), 8, 0)!=116; //@line 712 "_codecs_iso2022.c"
        if ($36) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 712 "_codecs_iso2022.c"
      case 9: // $bb8
        var $37=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $38=(($37+1)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $39=HEAP[$38]; //@line 712 "_codecs_iso2022.c"
        var $40=reSign(($39), 8, 0)==39; //@line 712 "_codecs_iso2022.c"
        if ($40) { __label__ = 20; break; } else { __label__ = 10; break; } //@line 712 "_codecs_iso2022.c"
      case 10: // $bb9
        var $41=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $42=(($41)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $43=HEAP[$42]; //@line 712 "_codecs_iso2022.c"
        var $44=reSign(($43), 8, 0)!=126; //@line 712 "_codecs_iso2022.c"
        if ($44) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 712 "_codecs_iso2022.c"
      case 11: // $bb10
        var $45=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $46=(($45+1)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $47=HEAP[$46]; //@line 712 "_codecs_iso2022.c"
        var $48=reSign(($47), 8, 0)==122; //@line 712 "_codecs_iso2022.c"
        if ($48) { __label__ = 20; break; } else { __label__ = 12; break; } //@line 712 "_codecs_iso2022.c"
      case 12: // $bb11
        var $49=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $50=(($49)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $51=HEAP[$50]; //@line 712 "_codecs_iso2022.c"
        var $52=reSign(($51), 8, 0)!=126; //@line 712 "_codecs_iso2022.c"
        if ($52) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 712 "_codecs_iso2022.c"
      case 13: // $bb12
        var $53=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $54=(($53+1)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $55=HEAP[$54]; //@line 712 "_codecs_iso2022.c"
        var $56=reSign(($55), 8, 0)==123; //@line 712 "_codecs_iso2022.c"
        if ($56) { __label__ = 20; break; } else { __label__ = 14; break; } //@line 712 "_codecs_iso2022.c"
      case 14: // $bb13
        var $57=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $58=(($57)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $59=HEAP[$58]; //@line 712 "_codecs_iso2022.c"
        var $60=reSign(($59), 8, 0)!=126; //@line 712 "_codecs_iso2022.c"
        if ($60) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 712 "_codecs_iso2022.c"
      case 15: // $bb14
        var $61=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $62=(($61+1)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $63=HEAP[$62]; //@line 712 "_codecs_iso2022.c"
        var $64=reSign(($63), 8, 0)==124; //@line 712 "_codecs_iso2022.c"
        if ($64) { __label__ = 20; break; } else { __label__ = 16; break; } //@line 712 "_codecs_iso2022.c"
      case 16: // $bb15
        var $65=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $66=(($65)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $67=HEAP[$66]; //@line 712 "_codecs_iso2022.c"
        var $68=reSign(($67), 8, 0)!=126; //@line 712 "_codecs_iso2022.c"
        if ($68) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 712 "_codecs_iso2022.c"
      case 17: // $bb16
        var $69=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $70=(($69+1)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $71=HEAP[$70]; //@line 712 "_codecs_iso2022.c"
        var $72=reSign(($71), 8, 0)==125; //@line 712 "_codecs_iso2022.c"
        if ($72) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 712 "_codecs_iso2022.c"
      case 18: // $bb17
        var $73=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $74=(($73)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $75=HEAP[$74]; //@line 712 "_codecs_iso2022.c"
        var $76=reSign(($75), 8, 0)!=126; //@line 712 "_codecs_iso2022.c"
        if ($76) { __label__ = 21; break; } else { __label__ = 19; break; } //@line 712 "_codecs_iso2022.c"
      case 19: // $bb18
        var $77=HEAP[$data_addr]; //@line 712 "_codecs_iso2022.c"
        var $78=(($77+1)&4294967295); //@line 712 "_codecs_iso2022.c"
        var $79=HEAP[$78]; //@line 712 "_codecs_iso2022.c"
        var $80=reSign(($79), 8, 0)==126; //@line 712 "_codecs_iso2022.c"
        if ($80) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 712 "_codecs_iso2022.c"
      case 20: // $bb19
        HEAP[$0]=65535; //@line 712 "_codecs_iso2022.c"
        __label__ = 46; break; //@line 712 "_codecs_iso2022.c"
      case 21: // $bb20
        var $81=HEAP[$data_addr]; //@line 713 "_codecs_iso2022.c"
        var $82=(($81)&4294967295); //@line 713 "_codecs_iso2022.c"
        var $83=HEAP[$82]; //@line 713 "_codecs_iso2022.c"
        var $84=reSign(($83), 8, 0)!=33; //@line 713 "_codecs_iso2022.c"
        if ($84) { __label__ = 24; break; } else { __label__ = 22; break; } //@line 713 "_codecs_iso2022.c"
      case 22: // $bb21
        var $85=HEAP[$data_addr]; //@line 713 "_codecs_iso2022.c"
        var $86=(($85+1)&4294967295); //@line 713 "_codecs_iso2022.c"
        var $87=HEAP[$86]; //@line 713 "_codecs_iso2022.c"
        var $88=reSign(($87), 8, 0)!=64; //@line 713 "_codecs_iso2022.c"
        if ($88) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 713 "_codecs_iso2022.c"
      case 23: // $bb22
        HEAP[$0]=65340; //@line 714 "_codecs_iso2022.c"
        __label__ = 46; break; //@line 714 "_codecs_iso2022.c"
      case 24: // $bb23
        var $89=HEAP[_jisx0208_decmap]; //@line 715 "_codecs_iso2022.c"
        var $90=HEAP[$data_addr]; //@line 715 "_codecs_iso2022.c"
        var $91=(($90)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $92=HEAP[$91]; //@line 715 "_codecs_iso2022.c"
        var $93=unSign(($92), 8, 0); //@line 715 "_codecs_iso2022.c"
        var $94=(($89+8*$93)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $95=(($94)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $96=HEAP[$95]; //@line 715 "_codecs_iso2022.c"
        var $97=$96; //@line 715 "_codecs_iso2022.c"
        var $98=($97)==0; //@line 715 "_codecs_iso2022.c"
        if ($98) { __label__ = 29; break; } else { __label__ = 25; break; } //@line 715 "_codecs_iso2022.c"
      case 25: // $bb24
        var $99=HEAP[$data_addr]; //@line 715 "_codecs_iso2022.c"
        var $100=(($99+1)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $101=HEAP[$100]; //@line 715 "_codecs_iso2022.c"
        var $102=HEAP[_jisx0208_decmap]; //@line 715 "_codecs_iso2022.c"
        var $103=HEAP[$data_addr]; //@line 715 "_codecs_iso2022.c"
        var $104=(($103)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $105=HEAP[$104]; //@line 715 "_codecs_iso2022.c"
        var $106=unSign(($105), 8, 0); //@line 715 "_codecs_iso2022.c"
        var $107=(($102+8*$106)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $108=(($107+4)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $109=HEAP[$108]; //@line 715 "_codecs_iso2022.c"
        var $110=unSign(($101), 8, 0) < unSign(($109), 8, 0); //@line 715 "_codecs_iso2022.c"
        if ($110) { __label__ = 29; break; } else { __label__ = 26; break; } //@line 715 "_codecs_iso2022.c"
      case 26: // $bb25
        var $111=HEAP[$data_addr]; //@line 715 "_codecs_iso2022.c"
        var $112=(($111+1)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $113=HEAP[$112]; //@line 715 "_codecs_iso2022.c"
        var $114=HEAP[_jisx0208_decmap]; //@line 715 "_codecs_iso2022.c"
        var $115=HEAP[$data_addr]; //@line 715 "_codecs_iso2022.c"
        var $116=(($115)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $117=HEAP[$116]; //@line 715 "_codecs_iso2022.c"
        var $118=unSign(($117), 8, 0); //@line 715 "_codecs_iso2022.c"
        var $119=(($114+8*$118)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $120=(($119+5)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $121=HEAP[$120]; //@line 715 "_codecs_iso2022.c"
        var $122=unSign(($113), 8, 0) > unSign(($121), 8, 0); //@line 715 "_codecs_iso2022.c"
        if ($122) { __label__ = 29; break; } else { __label__ = 27; break; } //@line 715 "_codecs_iso2022.c"
      case 27: // $bb26
        var $123=HEAP[_jisx0208_decmap]; //@line 715 "_codecs_iso2022.c"
        var $124=HEAP[$data_addr]; //@line 715 "_codecs_iso2022.c"
        var $125=(($124)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $126=HEAP[$125]; //@line 715 "_codecs_iso2022.c"
        var $127=unSign(($126), 8, 0); //@line 715 "_codecs_iso2022.c"
        var $128=(($123+8*$127)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $129=(($128)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $130=HEAP[$129]; //@line 715 "_codecs_iso2022.c"
        var $131=HEAP[$data_addr]; //@line 715 "_codecs_iso2022.c"
        var $132=(($131+1)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $133=HEAP[$132]; //@line 715 "_codecs_iso2022.c"
        var $134=unSign(($133), 8, 0); //@line 715 "_codecs_iso2022.c"
        var $135=HEAP[_jisx0208_decmap]; //@line 715 "_codecs_iso2022.c"
        var $136=HEAP[$data_addr]; //@line 715 "_codecs_iso2022.c"
        var $137=(($136)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $138=HEAP[$137]; //@line 715 "_codecs_iso2022.c"
        var $139=unSign(($138), 8, 0); //@line 715 "_codecs_iso2022.c"
        var $140=(($135+8*$139)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $141=(($140+4)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $142=HEAP[$141]; //@line 715 "_codecs_iso2022.c"
        var $143=unSign(($142), 8, 0); //@line 715 "_codecs_iso2022.c"
        var $144=((($134) - ($143))&4294967295); //@line 715 "_codecs_iso2022.c"
        var $145=(($130+2*$144)&4294967295); //@line 715 "_codecs_iso2022.c"
        var $146=HEAP[$145]; //@line 715 "_codecs_iso2022.c"
        var $147=unSign(($146), 16, 0); //@line 715 "_codecs_iso2022.c"
        HEAP[$u]=$147; //@line 715 "_codecs_iso2022.c"
        var $148=HEAP[$u]; //@line 715 "_codecs_iso2022.c"
        var $149=((($148))|0)==65534; //@line 715 "_codecs_iso2022.c"
        if ($149) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 715 "_codecs_iso2022.c"
      case 28: // $bb27
        __label__ = 45; break; //@line 715 "_codecs_iso2022.c"
      case 29: // $bb28
        var $150=HEAP[_jisx0213_1_bmp_decmap]; //@line 716 "_codecs_iso2022.c"
        var $151=HEAP[$data_addr]; //@line 716 "_codecs_iso2022.c"
        var $152=(($151)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $153=HEAP[$152]; //@line 716 "_codecs_iso2022.c"
        var $154=unSign(($153), 8, 0); //@line 716 "_codecs_iso2022.c"
        var $155=(($150+8*$154)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $156=(($155)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $157=HEAP[$156]; //@line 716 "_codecs_iso2022.c"
        var $158=$157; //@line 716 "_codecs_iso2022.c"
        var $159=($158)==0; //@line 716 "_codecs_iso2022.c"
        if ($159) { __label__ = 34; break; } else { __label__ = 30; break; } //@line 716 "_codecs_iso2022.c"
      case 30: // $bb29
        var $160=HEAP[$data_addr]; //@line 716 "_codecs_iso2022.c"
        var $161=(($160+1)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $162=HEAP[$161]; //@line 716 "_codecs_iso2022.c"
        var $163=HEAP[_jisx0213_1_bmp_decmap]; //@line 716 "_codecs_iso2022.c"
        var $164=HEAP[$data_addr]; //@line 716 "_codecs_iso2022.c"
        var $165=(($164)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $166=HEAP[$165]; //@line 716 "_codecs_iso2022.c"
        var $167=unSign(($166), 8, 0); //@line 716 "_codecs_iso2022.c"
        var $168=(($163+8*$167)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $169=(($168+4)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $170=HEAP[$169]; //@line 716 "_codecs_iso2022.c"
        var $171=unSign(($162), 8, 0) < unSign(($170), 8, 0); //@line 716 "_codecs_iso2022.c"
        if ($171) { __label__ = 34; break; } else { __label__ = 31; break; } //@line 716 "_codecs_iso2022.c"
      case 31: // $bb30
        var $172=HEAP[$data_addr]; //@line 716 "_codecs_iso2022.c"
        var $173=(($172+1)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $174=HEAP[$173]; //@line 716 "_codecs_iso2022.c"
        var $175=HEAP[_jisx0213_1_bmp_decmap]; //@line 716 "_codecs_iso2022.c"
        var $176=HEAP[$data_addr]; //@line 716 "_codecs_iso2022.c"
        var $177=(($176)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $178=HEAP[$177]; //@line 716 "_codecs_iso2022.c"
        var $179=unSign(($178), 8, 0); //@line 716 "_codecs_iso2022.c"
        var $180=(($175+8*$179)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $181=(($180+5)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $182=HEAP[$181]; //@line 716 "_codecs_iso2022.c"
        var $183=unSign(($174), 8, 0) > unSign(($182), 8, 0); //@line 716 "_codecs_iso2022.c"
        if ($183) { __label__ = 34; break; } else { __label__ = 32; break; } //@line 716 "_codecs_iso2022.c"
      case 32: // $bb31
        var $184=HEAP[_jisx0213_1_bmp_decmap]; //@line 716 "_codecs_iso2022.c"
        var $185=HEAP[$data_addr]; //@line 716 "_codecs_iso2022.c"
        var $186=(($185)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $187=HEAP[$186]; //@line 716 "_codecs_iso2022.c"
        var $188=unSign(($187), 8, 0); //@line 716 "_codecs_iso2022.c"
        var $189=(($184+8*$188)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $190=(($189)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $191=HEAP[$190]; //@line 716 "_codecs_iso2022.c"
        var $192=HEAP[$data_addr]; //@line 716 "_codecs_iso2022.c"
        var $193=(($192+1)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $194=HEAP[$193]; //@line 716 "_codecs_iso2022.c"
        var $195=unSign(($194), 8, 0); //@line 716 "_codecs_iso2022.c"
        var $196=HEAP[_jisx0213_1_bmp_decmap]; //@line 716 "_codecs_iso2022.c"
        var $197=HEAP[$data_addr]; //@line 716 "_codecs_iso2022.c"
        var $198=(($197)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $199=HEAP[$198]; //@line 716 "_codecs_iso2022.c"
        var $200=unSign(($199), 8, 0); //@line 716 "_codecs_iso2022.c"
        var $201=(($196+8*$200)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $202=(($201+4)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $203=HEAP[$202]; //@line 716 "_codecs_iso2022.c"
        var $204=unSign(($203), 8, 0); //@line 716 "_codecs_iso2022.c"
        var $205=((($195) - ($204))&4294967295); //@line 716 "_codecs_iso2022.c"
        var $206=(($191+2*$205)&4294967295); //@line 716 "_codecs_iso2022.c"
        var $207=HEAP[$206]; //@line 716 "_codecs_iso2022.c"
        var $208=unSign(($207), 16, 0); //@line 716 "_codecs_iso2022.c"
        HEAP[$u]=$208; //@line 716 "_codecs_iso2022.c"
        var $209=HEAP[$u]; //@line 716 "_codecs_iso2022.c"
        var $210=((($209))|0)==65534; //@line 716 "_codecs_iso2022.c"
        if ($210) { __label__ = 34; break; } else { __label__ = 33; break; } //@line 716 "_codecs_iso2022.c"
      case 33: // $bb32
        __label__ = 45; break; //@line 716 "_codecs_iso2022.c"
      case 34: // $bb33
        var $211=HEAP[_jisx0213_1_emp_decmap]; //@line 717 "_codecs_iso2022.c"
        var $212=HEAP[$data_addr]; //@line 717 "_codecs_iso2022.c"
        var $213=(($212)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $214=HEAP[$213]; //@line 717 "_codecs_iso2022.c"
        var $215=unSign(($214), 8, 0); //@line 717 "_codecs_iso2022.c"
        var $216=(($211+8*$215)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $217=(($216)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $218=HEAP[$217]; //@line 717 "_codecs_iso2022.c"
        var $219=$218; //@line 717 "_codecs_iso2022.c"
        var $220=($219)==0; //@line 717 "_codecs_iso2022.c"
        if ($220) { __label__ = 39; break; } else { __label__ = 35; break; } //@line 717 "_codecs_iso2022.c"
      case 35: // $bb34
        var $221=HEAP[$data_addr]; //@line 717 "_codecs_iso2022.c"
        var $222=(($221+1)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $223=HEAP[$222]; //@line 717 "_codecs_iso2022.c"
        var $224=HEAP[_jisx0213_1_emp_decmap]; //@line 717 "_codecs_iso2022.c"
        var $225=HEAP[$data_addr]; //@line 717 "_codecs_iso2022.c"
        var $226=(($225)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $227=HEAP[$226]; //@line 717 "_codecs_iso2022.c"
        var $228=unSign(($227), 8, 0); //@line 717 "_codecs_iso2022.c"
        var $229=(($224+8*$228)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $230=(($229+4)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $231=HEAP[$230]; //@line 717 "_codecs_iso2022.c"
        var $232=unSign(($223), 8, 0) < unSign(($231), 8, 0); //@line 717 "_codecs_iso2022.c"
        if ($232) { __label__ = 39; break; } else { __label__ = 36; break; } //@line 717 "_codecs_iso2022.c"
      case 36: // $bb35
        var $233=HEAP[$data_addr]; //@line 717 "_codecs_iso2022.c"
        var $234=(($233+1)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $235=HEAP[$234]; //@line 717 "_codecs_iso2022.c"
        var $236=HEAP[_jisx0213_1_emp_decmap]; //@line 717 "_codecs_iso2022.c"
        var $237=HEAP[$data_addr]; //@line 717 "_codecs_iso2022.c"
        var $238=(($237)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $239=HEAP[$238]; //@line 717 "_codecs_iso2022.c"
        var $240=unSign(($239), 8, 0); //@line 717 "_codecs_iso2022.c"
        var $241=(($236+8*$240)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $242=(($241+5)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $243=HEAP[$242]; //@line 717 "_codecs_iso2022.c"
        var $244=unSign(($235), 8, 0) > unSign(($243), 8, 0); //@line 717 "_codecs_iso2022.c"
        if ($244) { __label__ = 39; break; } else { __label__ = 37; break; } //@line 717 "_codecs_iso2022.c"
      case 37: // $bb36
        var $245=HEAP[_jisx0213_1_emp_decmap]; //@line 717 "_codecs_iso2022.c"
        var $246=HEAP[$data_addr]; //@line 717 "_codecs_iso2022.c"
        var $247=(($246)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $248=HEAP[$247]; //@line 717 "_codecs_iso2022.c"
        var $249=unSign(($248), 8, 0); //@line 717 "_codecs_iso2022.c"
        var $250=(($245+8*$249)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $251=(($250)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $252=HEAP[$251]; //@line 717 "_codecs_iso2022.c"
        var $253=HEAP[$data_addr]; //@line 717 "_codecs_iso2022.c"
        var $254=(($253+1)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $255=HEAP[$254]; //@line 717 "_codecs_iso2022.c"
        var $256=unSign(($255), 8, 0); //@line 717 "_codecs_iso2022.c"
        var $257=HEAP[_jisx0213_1_emp_decmap]; //@line 717 "_codecs_iso2022.c"
        var $258=HEAP[$data_addr]; //@line 717 "_codecs_iso2022.c"
        var $259=(($258)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $260=HEAP[$259]; //@line 717 "_codecs_iso2022.c"
        var $261=unSign(($260), 8, 0); //@line 717 "_codecs_iso2022.c"
        var $262=(($257+8*$261)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $263=(($262+4)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $264=HEAP[$263]; //@line 717 "_codecs_iso2022.c"
        var $265=unSign(($264), 8, 0); //@line 717 "_codecs_iso2022.c"
        var $266=((($256) - ($265))&4294967295); //@line 717 "_codecs_iso2022.c"
        var $267=(($252+2*$266)&4294967295); //@line 717 "_codecs_iso2022.c"
        var $268=HEAP[$267]; //@line 717 "_codecs_iso2022.c"
        var $269=unSign(($268), 16, 0); //@line 717 "_codecs_iso2022.c"
        HEAP[$u]=$269; //@line 717 "_codecs_iso2022.c"
        var $270=HEAP[$u]; //@line 717 "_codecs_iso2022.c"
        var $271=((($270))|0)==65534; //@line 717 "_codecs_iso2022.c"
        if ($271) { __label__ = 39; break; } else { __label__ = 38; break; } //@line 717 "_codecs_iso2022.c"
      case 38: // $bb37
        var $272=HEAP[$u]; //@line 718 "_codecs_iso2022.c"
        var $273=($272) | 131072; //@line 718 "_codecs_iso2022.c"
        HEAP[$u]=$273; //@line 718 "_codecs_iso2022.c"
        __label__ = 45; break; //@line 718 "_codecs_iso2022.c"
      case 39: // $bb38
        var $274=HEAP[_jisx0213_pair_decmap]; //@line 719 "_codecs_iso2022.c"
        var $275=HEAP[$data_addr]; //@line 719 "_codecs_iso2022.c"
        var $276=(($275)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $277=HEAP[$276]; //@line 719 "_codecs_iso2022.c"
        var $278=unSign(($277), 8, 0); //@line 719 "_codecs_iso2022.c"
        var $279=(($274+8*$278)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $280=(($279)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $281=HEAP[$280]; //@line 719 "_codecs_iso2022.c"
        var $282=$281; //@line 719 "_codecs_iso2022.c"
        var $283=($282)==0; //@line 719 "_codecs_iso2022.c"
        if ($283) { __label__ = 44; break; } else { __label__ = 40; break; } //@line 719 "_codecs_iso2022.c"
      case 40: // $bb39
        var $284=HEAP[$data_addr]; //@line 719 "_codecs_iso2022.c"
        var $285=(($284+1)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $286=HEAP[$285]; //@line 719 "_codecs_iso2022.c"
        var $287=HEAP[_jisx0213_pair_decmap]; //@line 719 "_codecs_iso2022.c"
        var $288=HEAP[$data_addr]; //@line 719 "_codecs_iso2022.c"
        var $289=(($288)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $290=HEAP[$289]; //@line 719 "_codecs_iso2022.c"
        var $291=unSign(($290), 8, 0); //@line 719 "_codecs_iso2022.c"
        var $292=(($287+8*$291)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $293=(($292+4)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $294=HEAP[$293]; //@line 719 "_codecs_iso2022.c"
        var $295=unSign(($286), 8, 0) < unSign(($294), 8, 0); //@line 719 "_codecs_iso2022.c"
        if ($295) { __label__ = 44; break; } else { __label__ = 41; break; } //@line 719 "_codecs_iso2022.c"
      case 41: // $bb40
        var $296=HEAP[$data_addr]; //@line 719 "_codecs_iso2022.c"
        var $297=(($296+1)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $298=HEAP[$297]; //@line 719 "_codecs_iso2022.c"
        var $299=HEAP[_jisx0213_pair_decmap]; //@line 719 "_codecs_iso2022.c"
        var $300=HEAP[$data_addr]; //@line 719 "_codecs_iso2022.c"
        var $301=(($300)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $302=HEAP[$301]; //@line 719 "_codecs_iso2022.c"
        var $303=unSign(($302), 8, 0); //@line 719 "_codecs_iso2022.c"
        var $304=(($299+8*$303)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $305=(($304+5)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $306=HEAP[$305]; //@line 719 "_codecs_iso2022.c"
        var $307=unSign(($298), 8, 0) > unSign(($306), 8, 0); //@line 719 "_codecs_iso2022.c"
        if ($307) { __label__ = 44; break; } else { __label__ = 42; break; } //@line 719 "_codecs_iso2022.c"
      case 42: // $bb41
        var $308=HEAP[_jisx0213_pair_decmap]; //@line 719 "_codecs_iso2022.c"
        var $309=HEAP[$data_addr]; //@line 719 "_codecs_iso2022.c"
        var $310=(($309)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $311=HEAP[$310]; //@line 719 "_codecs_iso2022.c"
        var $312=unSign(($311), 8, 0); //@line 719 "_codecs_iso2022.c"
        var $313=(($308+8*$312)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $314=(($313)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $315=HEAP[$314]; //@line 719 "_codecs_iso2022.c"
        var $316=HEAP[$data_addr]; //@line 719 "_codecs_iso2022.c"
        var $317=(($316+1)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $318=HEAP[$317]; //@line 719 "_codecs_iso2022.c"
        var $319=unSign(($318), 8, 0); //@line 719 "_codecs_iso2022.c"
        var $320=HEAP[_jisx0213_pair_decmap]; //@line 719 "_codecs_iso2022.c"
        var $321=HEAP[$data_addr]; //@line 719 "_codecs_iso2022.c"
        var $322=(($321)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $323=HEAP[$322]; //@line 719 "_codecs_iso2022.c"
        var $324=unSign(($323), 8, 0); //@line 719 "_codecs_iso2022.c"
        var $325=(($320+8*$324)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $326=(($325+4)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $327=HEAP[$326]; //@line 719 "_codecs_iso2022.c"
        var $328=unSign(($327), 8, 0); //@line 719 "_codecs_iso2022.c"
        var $329=((($319) - ($328))&4294967295); //@line 719 "_codecs_iso2022.c"
        var $330=(($315+4*$329)&4294967295); //@line 719 "_codecs_iso2022.c"
        var $331=HEAP[$330]; //@line 719 "_codecs_iso2022.c"
        HEAP[$u]=$331; //@line 719 "_codecs_iso2022.c"
        var $332=HEAP[$u]; //@line 719 "_codecs_iso2022.c"
        var $333=((($332))|0)==65534; //@line 719 "_codecs_iso2022.c"
        if ($333) { __label__ = 44; break; } else { __label__ = 43; break; } //@line 719 "_codecs_iso2022.c"
      case 43: // $bb42
        __label__ = 45; break; //@line 719 "_codecs_iso2022.c"
      case 44: // $bb43
        HEAP[$0]=65535; //@line 721 "_codecs_iso2022.c"
        __label__ = 46; break; //@line 721 "_codecs_iso2022.c"
      case 45: // $bb44
        var $334=HEAP[$u]; //@line 722 "_codecs_iso2022.c"
        HEAP[$0]=$334; //@line 722 "_codecs_iso2022.c"
        __label__ = 46; break; //@line 722 "_codecs_iso2022.c"
      case 46: // $bb45
        var $335=HEAP[$0]; //@line 712 "_codecs_iso2022.c"
        HEAP[$retval]=$335; //@line 712 "_codecs_iso2022.c"
        __label__ = 47; break; //@line 712 "_codecs_iso2022.c"
      case 47: // $return
        var $retval46=HEAP[$retval]; //@line 712 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval46; //@line 712 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2000_2_decoder($data) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $u=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        var $1=HEAP[$data_addr]; //@line 729 "_codecs_iso2022.c"
        var $2=(($1)&4294967295); //@line 729 "_codecs_iso2022.c"
        var $3=HEAP[$2]; //@line 729 "_codecs_iso2022.c"
        var $4=reSign(($3), 8, 0)==125; //@line 729 "_codecs_iso2022.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 729 "_codecs_iso2022.c"
      case 1: // $bb
        var $5=HEAP[$data_addr]; //@line 729 "_codecs_iso2022.c"
        var $6=(($5+1)&4294967295); //@line 729 "_codecs_iso2022.c"
        var $7=HEAP[$6]; //@line 729 "_codecs_iso2022.c"
        var $8=reSign(($7), 8, 0)==59; //@line 729 "_codecs_iso2022.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 729 "_codecs_iso2022.c"
      case 2: // $bb1
        HEAP[$u]=39709; //@line 729 "_codecs_iso2022.c"
        __label__ = 3; break; //@line 729 "_codecs_iso2022.c"
      case 3: // $bb2
        var $9=HEAP[_jisx0213_2_bmp_decmap]; //@line 730 "_codecs_iso2022.c"
        var $10=HEAP[$data_addr]; //@line 730 "_codecs_iso2022.c"
        var $11=(($10)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 730 "_codecs_iso2022.c"
        var $13=unSign(($12), 8, 0); //@line 730 "_codecs_iso2022.c"
        var $14=(($9+8*$13)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $15=(($14)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $16=HEAP[$15]; //@line 730 "_codecs_iso2022.c"
        var $17=$16; //@line 730 "_codecs_iso2022.c"
        var $18=($17)==0; //@line 730 "_codecs_iso2022.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 730 "_codecs_iso2022.c"
      case 4: // $bb3
        var $19=HEAP[$data_addr]; //@line 730 "_codecs_iso2022.c"
        var $20=(($19+1)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 730 "_codecs_iso2022.c"
        var $22=HEAP[_jisx0213_2_bmp_decmap]; //@line 730 "_codecs_iso2022.c"
        var $23=HEAP[$data_addr]; //@line 730 "_codecs_iso2022.c"
        var $24=(($23)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 730 "_codecs_iso2022.c"
        var $26=unSign(($25), 8, 0); //@line 730 "_codecs_iso2022.c"
        var $27=(($22+8*$26)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $28=(($27+4)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 730 "_codecs_iso2022.c"
        var $30=unSign(($21), 8, 0) < unSign(($29), 8, 0); //@line 730 "_codecs_iso2022.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 730 "_codecs_iso2022.c"
      case 5: // $bb4
        var $31=HEAP[$data_addr]; //@line 730 "_codecs_iso2022.c"
        var $32=(($31+1)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 730 "_codecs_iso2022.c"
        var $34=HEAP[_jisx0213_2_bmp_decmap]; //@line 730 "_codecs_iso2022.c"
        var $35=HEAP[$data_addr]; //@line 730 "_codecs_iso2022.c"
        var $36=(($35)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 730 "_codecs_iso2022.c"
        var $38=unSign(($37), 8, 0); //@line 730 "_codecs_iso2022.c"
        var $39=(($34+8*$38)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $40=(($39+5)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $41=HEAP[$40]; //@line 730 "_codecs_iso2022.c"
        var $42=unSign(($33), 8, 0) > unSign(($41), 8, 0); //@line 730 "_codecs_iso2022.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 730 "_codecs_iso2022.c"
      case 6: // $bb5
        var $43=HEAP[_jisx0213_2_bmp_decmap]; //@line 730 "_codecs_iso2022.c"
        var $44=HEAP[$data_addr]; //@line 730 "_codecs_iso2022.c"
        var $45=(($44)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $46=HEAP[$45]; //@line 730 "_codecs_iso2022.c"
        var $47=unSign(($46), 8, 0); //@line 730 "_codecs_iso2022.c"
        var $48=(($43+8*$47)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $49=(($48)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 730 "_codecs_iso2022.c"
        var $51=HEAP[$data_addr]; //@line 730 "_codecs_iso2022.c"
        var $52=(($51+1)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $53=HEAP[$52]; //@line 730 "_codecs_iso2022.c"
        var $54=unSign(($53), 8, 0); //@line 730 "_codecs_iso2022.c"
        var $55=HEAP[_jisx0213_2_bmp_decmap]; //@line 730 "_codecs_iso2022.c"
        var $56=HEAP[$data_addr]; //@line 730 "_codecs_iso2022.c"
        var $57=(($56)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 730 "_codecs_iso2022.c"
        var $59=unSign(($58), 8, 0); //@line 730 "_codecs_iso2022.c"
        var $60=(($55+8*$59)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $61=(($60+4)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $62=HEAP[$61]; //@line 730 "_codecs_iso2022.c"
        var $63=unSign(($62), 8, 0); //@line 730 "_codecs_iso2022.c"
        var $64=((($54) - ($63))&4294967295); //@line 730 "_codecs_iso2022.c"
        var $65=(($50+2*$64)&4294967295); //@line 730 "_codecs_iso2022.c"
        var $66=HEAP[$65]; //@line 730 "_codecs_iso2022.c"
        var $67=unSign(($66), 16, 0); //@line 730 "_codecs_iso2022.c"
        HEAP[$u]=$67; //@line 730 "_codecs_iso2022.c"
        var $68=HEAP[$u]; //@line 730 "_codecs_iso2022.c"
        var $69=((($68))|0)==65534; //@line 730 "_codecs_iso2022.c"
        if ($69) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 730 "_codecs_iso2022.c"
      case 7: // $bb6
        __label__ = 14; break; //@line 730 "_codecs_iso2022.c"
      case 8: // $bb7
        var $70=HEAP[_jisx0213_2_emp_decmap]; //@line 731 "_codecs_iso2022.c"
        var $71=HEAP[$data_addr]; //@line 731 "_codecs_iso2022.c"
        var $72=(($71)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $73=HEAP[$72]; //@line 731 "_codecs_iso2022.c"
        var $74=unSign(($73), 8, 0); //@line 731 "_codecs_iso2022.c"
        var $75=(($70+8*$74)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $76=(($75)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $77=HEAP[$76]; //@line 731 "_codecs_iso2022.c"
        var $78=$77; //@line 731 "_codecs_iso2022.c"
        var $79=($78)==0; //@line 731 "_codecs_iso2022.c"
        if ($79) { __label__ = 13; break; } else { __label__ = 9; break; } //@line 731 "_codecs_iso2022.c"
      case 9: // $bb8
        var $80=HEAP[$data_addr]; //@line 731 "_codecs_iso2022.c"
        var $81=(($80+1)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $82=HEAP[$81]; //@line 731 "_codecs_iso2022.c"
        var $83=HEAP[_jisx0213_2_emp_decmap]; //@line 731 "_codecs_iso2022.c"
        var $84=HEAP[$data_addr]; //@line 731 "_codecs_iso2022.c"
        var $85=(($84)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $86=HEAP[$85]; //@line 731 "_codecs_iso2022.c"
        var $87=unSign(($86), 8, 0); //@line 731 "_codecs_iso2022.c"
        var $88=(($83+8*$87)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $89=(($88+4)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $90=HEAP[$89]; //@line 731 "_codecs_iso2022.c"
        var $91=unSign(($82), 8, 0) < unSign(($90), 8, 0); //@line 731 "_codecs_iso2022.c"
        if ($91) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 731 "_codecs_iso2022.c"
      case 10: // $bb9
        var $92=HEAP[$data_addr]; //@line 731 "_codecs_iso2022.c"
        var $93=(($92+1)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $94=HEAP[$93]; //@line 731 "_codecs_iso2022.c"
        var $95=HEAP[_jisx0213_2_emp_decmap]; //@line 731 "_codecs_iso2022.c"
        var $96=HEAP[$data_addr]; //@line 731 "_codecs_iso2022.c"
        var $97=(($96)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $98=HEAP[$97]; //@line 731 "_codecs_iso2022.c"
        var $99=unSign(($98), 8, 0); //@line 731 "_codecs_iso2022.c"
        var $100=(($95+8*$99)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $101=(($100+5)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $102=HEAP[$101]; //@line 731 "_codecs_iso2022.c"
        var $103=unSign(($94), 8, 0) > unSign(($102), 8, 0); //@line 731 "_codecs_iso2022.c"
        if ($103) { __label__ = 13; break; } else { __label__ = 11; break; } //@line 731 "_codecs_iso2022.c"
      case 11: // $bb10
        var $104=HEAP[_jisx0213_2_emp_decmap]; //@line 731 "_codecs_iso2022.c"
        var $105=HEAP[$data_addr]; //@line 731 "_codecs_iso2022.c"
        var $106=(($105)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $107=HEAP[$106]; //@line 731 "_codecs_iso2022.c"
        var $108=unSign(($107), 8, 0); //@line 731 "_codecs_iso2022.c"
        var $109=(($104+8*$108)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $110=(($109)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $111=HEAP[$110]; //@line 731 "_codecs_iso2022.c"
        var $112=HEAP[$data_addr]; //@line 731 "_codecs_iso2022.c"
        var $113=(($112+1)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $114=HEAP[$113]; //@line 731 "_codecs_iso2022.c"
        var $115=unSign(($114), 8, 0); //@line 731 "_codecs_iso2022.c"
        var $116=HEAP[_jisx0213_2_emp_decmap]; //@line 731 "_codecs_iso2022.c"
        var $117=HEAP[$data_addr]; //@line 731 "_codecs_iso2022.c"
        var $118=(($117)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $119=HEAP[$118]; //@line 731 "_codecs_iso2022.c"
        var $120=unSign(($119), 8, 0); //@line 731 "_codecs_iso2022.c"
        var $121=(($116+8*$120)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $122=(($121+4)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $123=HEAP[$122]; //@line 731 "_codecs_iso2022.c"
        var $124=unSign(($123), 8, 0); //@line 731 "_codecs_iso2022.c"
        var $125=((($115) - ($124))&4294967295); //@line 731 "_codecs_iso2022.c"
        var $126=(($111+2*$125)&4294967295); //@line 731 "_codecs_iso2022.c"
        var $127=HEAP[$126]; //@line 731 "_codecs_iso2022.c"
        var $128=unSign(($127), 16, 0); //@line 731 "_codecs_iso2022.c"
        HEAP[$u]=$128; //@line 731 "_codecs_iso2022.c"
        var $129=HEAP[$u]; //@line 731 "_codecs_iso2022.c"
        var $130=((($129))|0)==65534; //@line 731 "_codecs_iso2022.c"
        if ($130) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 731 "_codecs_iso2022.c"
      case 12: // $bb11
        var $131=HEAP[$u]; //@line 732 "_codecs_iso2022.c"
        var $132=($131) | 131072; //@line 732 "_codecs_iso2022.c"
        HEAP[$u]=$132; //@line 732 "_codecs_iso2022.c"
        __label__ = 14; break; //@line 732 "_codecs_iso2022.c"
      case 13: // $bb12
        HEAP[$0]=65535; //@line 734 "_codecs_iso2022.c"
        __label__ = 15; break; //@line 734 "_codecs_iso2022.c"
      case 14: // $bb13
        var $133=HEAP[$u]; //@line 735 "_codecs_iso2022.c"
        HEAP[$0]=$133; //@line 735 "_codecs_iso2022.c"
        __label__ = 15; break; //@line 735 "_codecs_iso2022.c"
      case 15: // $bb14
        var $134=HEAP[$0]; //@line 734 "_codecs_iso2022.c"
        HEAP[$retval]=$134; //@line 734 "_codecs_iso2022.c"
        __label__ = 16; break; //@line 734 "_codecs_iso2022.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 734 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 734 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2004_1_decoder($data) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $u=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        var $1=HEAP[$data_addr]; //@line 743 "_codecs_iso2022.c"
        var $2=(($1)&4294967295); //@line 743 "_codecs_iso2022.c"
        var $3=HEAP[$2]; //@line 743 "_codecs_iso2022.c"
        var $4=reSign(($3), 8, 0)!=33; //@line 743 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 743 "_codecs_iso2022.c"
      case 1: // $bb
        var $5=HEAP[$data_addr]; //@line 743 "_codecs_iso2022.c"
        var $6=(($5+1)&4294967295); //@line 743 "_codecs_iso2022.c"
        var $7=HEAP[$6]; //@line 743 "_codecs_iso2022.c"
        var $8=reSign(($7), 8, 0)!=64; //@line 743 "_codecs_iso2022.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 743 "_codecs_iso2022.c"
      case 2: // $bb1
        HEAP[$0]=65340; //@line 744 "_codecs_iso2022.c"
        __label__ = 25; break; //@line 744 "_codecs_iso2022.c"
      case 3: // $bb2
        var $9=HEAP[_jisx0208_decmap]; //@line 745 "_codecs_iso2022.c"
        var $10=HEAP[$data_addr]; //@line 745 "_codecs_iso2022.c"
        var $11=(($10)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 745 "_codecs_iso2022.c"
        var $13=unSign(($12), 8, 0); //@line 745 "_codecs_iso2022.c"
        var $14=(($9+8*$13)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $15=(($14)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $16=HEAP[$15]; //@line 745 "_codecs_iso2022.c"
        var $17=$16; //@line 745 "_codecs_iso2022.c"
        var $18=($17)==0; //@line 745 "_codecs_iso2022.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 745 "_codecs_iso2022.c"
      case 4: // $bb3
        var $19=HEAP[$data_addr]; //@line 745 "_codecs_iso2022.c"
        var $20=(($19+1)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 745 "_codecs_iso2022.c"
        var $22=HEAP[_jisx0208_decmap]; //@line 745 "_codecs_iso2022.c"
        var $23=HEAP[$data_addr]; //@line 745 "_codecs_iso2022.c"
        var $24=(($23)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 745 "_codecs_iso2022.c"
        var $26=unSign(($25), 8, 0); //@line 745 "_codecs_iso2022.c"
        var $27=(($22+8*$26)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $28=(($27+4)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 745 "_codecs_iso2022.c"
        var $30=unSign(($21), 8, 0) < unSign(($29), 8, 0); //@line 745 "_codecs_iso2022.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 745 "_codecs_iso2022.c"
      case 5: // $bb4
        var $31=HEAP[$data_addr]; //@line 745 "_codecs_iso2022.c"
        var $32=(($31+1)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 745 "_codecs_iso2022.c"
        var $34=HEAP[_jisx0208_decmap]; //@line 745 "_codecs_iso2022.c"
        var $35=HEAP[$data_addr]; //@line 745 "_codecs_iso2022.c"
        var $36=(($35)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 745 "_codecs_iso2022.c"
        var $38=unSign(($37), 8, 0); //@line 745 "_codecs_iso2022.c"
        var $39=(($34+8*$38)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $40=(($39+5)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $41=HEAP[$40]; //@line 745 "_codecs_iso2022.c"
        var $42=unSign(($33), 8, 0) > unSign(($41), 8, 0); //@line 745 "_codecs_iso2022.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 745 "_codecs_iso2022.c"
      case 6: // $bb5
        var $43=HEAP[_jisx0208_decmap]; //@line 745 "_codecs_iso2022.c"
        var $44=HEAP[$data_addr]; //@line 745 "_codecs_iso2022.c"
        var $45=(($44)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $46=HEAP[$45]; //@line 745 "_codecs_iso2022.c"
        var $47=unSign(($46), 8, 0); //@line 745 "_codecs_iso2022.c"
        var $48=(($43+8*$47)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $49=(($48)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 745 "_codecs_iso2022.c"
        var $51=HEAP[$data_addr]; //@line 745 "_codecs_iso2022.c"
        var $52=(($51+1)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $53=HEAP[$52]; //@line 745 "_codecs_iso2022.c"
        var $54=unSign(($53), 8, 0); //@line 745 "_codecs_iso2022.c"
        var $55=HEAP[_jisx0208_decmap]; //@line 745 "_codecs_iso2022.c"
        var $56=HEAP[$data_addr]; //@line 745 "_codecs_iso2022.c"
        var $57=(($56)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 745 "_codecs_iso2022.c"
        var $59=unSign(($58), 8, 0); //@line 745 "_codecs_iso2022.c"
        var $60=(($55+8*$59)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $61=(($60+4)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $62=HEAP[$61]; //@line 745 "_codecs_iso2022.c"
        var $63=unSign(($62), 8, 0); //@line 745 "_codecs_iso2022.c"
        var $64=((($54) - ($63))&4294967295); //@line 745 "_codecs_iso2022.c"
        var $65=(($50+2*$64)&4294967295); //@line 745 "_codecs_iso2022.c"
        var $66=HEAP[$65]; //@line 745 "_codecs_iso2022.c"
        var $67=unSign(($66), 16, 0); //@line 745 "_codecs_iso2022.c"
        HEAP[$u]=$67; //@line 745 "_codecs_iso2022.c"
        var $68=HEAP[$u]; //@line 745 "_codecs_iso2022.c"
        var $69=((($68))|0)==65534; //@line 745 "_codecs_iso2022.c"
        if ($69) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 745 "_codecs_iso2022.c"
      case 7: // $bb6
        __label__ = 24; break; //@line 745 "_codecs_iso2022.c"
      case 8: // $bb7
        var $70=HEAP[_jisx0213_1_bmp_decmap]; //@line 746 "_codecs_iso2022.c"
        var $71=HEAP[$data_addr]; //@line 746 "_codecs_iso2022.c"
        var $72=(($71)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $73=HEAP[$72]; //@line 746 "_codecs_iso2022.c"
        var $74=unSign(($73), 8, 0); //@line 746 "_codecs_iso2022.c"
        var $75=(($70+8*$74)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $76=(($75)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $77=HEAP[$76]; //@line 746 "_codecs_iso2022.c"
        var $78=$77; //@line 746 "_codecs_iso2022.c"
        var $79=($78)==0; //@line 746 "_codecs_iso2022.c"
        if ($79) { __label__ = 13; break; } else { __label__ = 9; break; } //@line 746 "_codecs_iso2022.c"
      case 9: // $bb8
        var $80=HEAP[$data_addr]; //@line 746 "_codecs_iso2022.c"
        var $81=(($80+1)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $82=HEAP[$81]; //@line 746 "_codecs_iso2022.c"
        var $83=HEAP[_jisx0213_1_bmp_decmap]; //@line 746 "_codecs_iso2022.c"
        var $84=HEAP[$data_addr]; //@line 746 "_codecs_iso2022.c"
        var $85=(($84)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $86=HEAP[$85]; //@line 746 "_codecs_iso2022.c"
        var $87=unSign(($86), 8, 0); //@line 746 "_codecs_iso2022.c"
        var $88=(($83+8*$87)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $89=(($88+4)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $90=HEAP[$89]; //@line 746 "_codecs_iso2022.c"
        var $91=unSign(($82), 8, 0) < unSign(($90), 8, 0); //@line 746 "_codecs_iso2022.c"
        if ($91) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 746 "_codecs_iso2022.c"
      case 10: // $bb9
        var $92=HEAP[$data_addr]; //@line 746 "_codecs_iso2022.c"
        var $93=(($92+1)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $94=HEAP[$93]; //@line 746 "_codecs_iso2022.c"
        var $95=HEAP[_jisx0213_1_bmp_decmap]; //@line 746 "_codecs_iso2022.c"
        var $96=HEAP[$data_addr]; //@line 746 "_codecs_iso2022.c"
        var $97=(($96)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $98=HEAP[$97]; //@line 746 "_codecs_iso2022.c"
        var $99=unSign(($98), 8, 0); //@line 746 "_codecs_iso2022.c"
        var $100=(($95+8*$99)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $101=(($100+5)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $102=HEAP[$101]; //@line 746 "_codecs_iso2022.c"
        var $103=unSign(($94), 8, 0) > unSign(($102), 8, 0); //@line 746 "_codecs_iso2022.c"
        if ($103) { __label__ = 13; break; } else { __label__ = 11; break; } //@line 746 "_codecs_iso2022.c"
      case 11: // $bb10
        var $104=HEAP[_jisx0213_1_bmp_decmap]; //@line 746 "_codecs_iso2022.c"
        var $105=HEAP[$data_addr]; //@line 746 "_codecs_iso2022.c"
        var $106=(($105)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $107=HEAP[$106]; //@line 746 "_codecs_iso2022.c"
        var $108=unSign(($107), 8, 0); //@line 746 "_codecs_iso2022.c"
        var $109=(($104+8*$108)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $110=(($109)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $111=HEAP[$110]; //@line 746 "_codecs_iso2022.c"
        var $112=HEAP[$data_addr]; //@line 746 "_codecs_iso2022.c"
        var $113=(($112+1)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $114=HEAP[$113]; //@line 746 "_codecs_iso2022.c"
        var $115=unSign(($114), 8, 0); //@line 746 "_codecs_iso2022.c"
        var $116=HEAP[_jisx0213_1_bmp_decmap]; //@line 746 "_codecs_iso2022.c"
        var $117=HEAP[$data_addr]; //@line 746 "_codecs_iso2022.c"
        var $118=(($117)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $119=HEAP[$118]; //@line 746 "_codecs_iso2022.c"
        var $120=unSign(($119), 8, 0); //@line 746 "_codecs_iso2022.c"
        var $121=(($116+8*$120)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $122=(($121+4)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $123=HEAP[$122]; //@line 746 "_codecs_iso2022.c"
        var $124=unSign(($123), 8, 0); //@line 746 "_codecs_iso2022.c"
        var $125=((($115) - ($124))&4294967295); //@line 746 "_codecs_iso2022.c"
        var $126=(($111+2*$125)&4294967295); //@line 746 "_codecs_iso2022.c"
        var $127=HEAP[$126]; //@line 746 "_codecs_iso2022.c"
        var $128=unSign(($127), 16, 0); //@line 746 "_codecs_iso2022.c"
        HEAP[$u]=$128; //@line 746 "_codecs_iso2022.c"
        var $129=HEAP[$u]; //@line 746 "_codecs_iso2022.c"
        var $130=((($129))|0)==65534; //@line 746 "_codecs_iso2022.c"
        if ($130) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 746 "_codecs_iso2022.c"
      case 12: // $bb11
        __label__ = 24; break; //@line 746 "_codecs_iso2022.c"
      case 13: // $bb12
        var $131=HEAP[_jisx0213_1_emp_decmap]; //@line 747 "_codecs_iso2022.c"
        var $132=HEAP[$data_addr]; //@line 747 "_codecs_iso2022.c"
        var $133=(($132)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $134=HEAP[$133]; //@line 747 "_codecs_iso2022.c"
        var $135=unSign(($134), 8, 0); //@line 747 "_codecs_iso2022.c"
        var $136=(($131+8*$135)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $137=(($136)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $138=HEAP[$137]; //@line 747 "_codecs_iso2022.c"
        var $139=$138; //@line 747 "_codecs_iso2022.c"
        var $140=($139)==0; //@line 747 "_codecs_iso2022.c"
        if ($140) { __label__ = 18; break; } else { __label__ = 14; break; } //@line 747 "_codecs_iso2022.c"
      case 14: // $bb13
        var $141=HEAP[$data_addr]; //@line 747 "_codecs_iso2022.c"
        var $142=(($141+1)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $143=HEAP[$142]; //@line 747 "_codecs_iso2022.c"
        var $144=HEAP[_jisx0213_1_emp_decmap]; //@line 747 "_codecs_iso2022.c"
        var $145=HEAP[$data_addr]; //@line 747 "_codecs_iso2022.c"
        var $146=(($145)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $147=HEAP[$146]; //@line 747 "_codecs_iso2022.c"
        var $148=unSign(($147), 8, 0); //@line 747 "_codecs_iso2022.c"
        var $149=(($144+8*$148)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $150=(($149+4)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $151=HEAP[$150]; //@line 747 "_codecs_iso2022.c"
        var $152=unSign(($143), 8, 0) < unSign(($151), 8, 0); //@line 747 "_codecs_iso2022.c"
        if ($152) { __label__ = 18; break; } else { __label__ = 15; break; } //@line 747 "_codecs_iso2022.c"
      case 15: // $bb14
        var $153=HEAP[$data_addr]; //@line 747 "_codecs_iso2022.c"
        var $154=(($153+1)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $155=HEAP[$154]; //@line 747 "_codecs_iso2022.c"
        var $156=HEAP[_jisx0213_1_emp_decmap]; //@line 747 "_codecs_iso2022.c"
        var $157=HEAP[$data_addr]; //@line 747 "_codecs_iso2022.c"
        var $158=(($157)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $159=HEAP[$158]; //@line 747 "_codecs_iso2022.c"
        var $160=unSign(($159), 8, 0); //@line 747 "_codecs_iso2022.c"
        var $161=(($156+8*$160)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $162=(($161+5)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $163=HEAP[$162]; //@line 747 "_codecs_iso2022.c"
        var $164=unSign(($155), 8, 0) > unSign(($163), 8, 0); //@line 747 "_codecs_iso2022.c"
        if ($164) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 747 "_codecs_iso2022.c"
      case 16: // $bb15
        var $165=HEAP[_jisx0213_1_emp_decmap]; //@line 747 "_codecs_iso2022.c"
        var $166=HEAP[$data_addr]; //@line 747 "_codecs_iso2022.c"
        var $167=(($166)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $168=HEAP[$167]; //@line 747 "_codecs_iso2022.c"
        var $169=unSign(($168), 8, 0); //@line 747 "_codecs_iso2022.c"
        var $170=(($165+8*$169)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $171=(($170)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $172=HEAP[$171]; //@line 747 "_codecs_iso2022.c"
        var $173=HEAP[$data_addr]; //@line 747 "_codecs_iso2022.c"
        var $174=(($173+1)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $175=HEAP[$174]; //@line 747 "_codecs_iso2022.c"
        var $176=unSign(($175), 8, 0); //@line 747 "_codecs_iso2022.c"
        var $177=HEAP[_jisx0213_1_emp_decmap]; //@line 747 "_codecs_iso2022.c"
        var $178=HEAP[$data_addr]; //@line 747 "_codecs_iso2022.c"
        var $179=(($178)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $180=HEAP[$179]; //@line 747 "_codecs_iso2022.c"
        var $181=unSign(($180), 8, 0); //@line 747 "_codecs_iso2022.c"
        var $182=(($177+8*$181)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $183=(($182+4)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $184=HEAP[$183]; //@line 747 "_codecs_iso2022.c"
        var $185=unSign(($184), 8, 0); //@line 747 "_codecs_iso2022.c"
        var $186=((($176) - ($185))&4294967295); //@line 747 "_codecs_iso2022.c"
        var $187=(($172+2*$186)&4294967295); //@line 747 "_codecs_iso2022.c"
        var $188=HEAP[$187]; //@line 747 "_codecs_iso2022.c"
        var $189=unSign(($188), 16, 0); //@line 747 "_codecs_iso2022.c"
        HEAP[$u]=$189; //@line 747 "_codecs_iso2022.c"
        var $190=HEAP[$u]; //@line 747 "_codecs_iso2022.c"
        var $191=((($190))|0)==65534; //@line 747 "_codecs_iso2022.c"
        if ($191) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 747 "_codecs_iso2022.c"
      case 17: // $bb16
        var $192=HEAP[$u]; //@line 748 "_codecs_iso2022.c"
        var $193=($192) | 131072; //@line 748 "_codecs_iso2022.c"
        HEAP[$u]=$193; //@line 748 "_codecs_iso2022.c"
        __label__ = 24; break; //@line 748 "_codecs_iso2022.c"
      case 18: // $bb17
        var $194=HEAP[_jisx0213_pair_decmap]; //@line 749 "_codecs_iso2022.c"
        var $195=HEAP[$data_addr]; //@line 749 "_codecs_iso2022.c"
        var $196=(($195)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $197=HEAP[$196]; //@line 749 "_codecs_iso2022.c"
        var $198=unSign(($197), 8, 0); //@line 749 "_codecs_iso2022.c"
        var $199=(($194+8*$198)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $200=(($199)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $201=HEAP[$200]; //@line 749 "_codecs_iso2022.c"
        var $202=$201; //@line 749 "_codecs_iso2022.c"
        var $203=($202)==0; //@line 749 "_codecs_iso2022.c"
        if ($203) { __label__ = 23; break; } else { __label__ = 19; break; } //@line 749 "_codecs_iso2022.c"
      case 19: // $bb18
        var $204=HEAP[$data_addr]; //@line 749 "_codecs_iso2022.c"
        var $205=(($204+1)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $206=HEAP[$205]; //@line 749 "_codecs_iso2022.c"
        var $207=HEAP[_jisx0213_pair_decmap]; //@line 749 "_codecs_iso2022.c"
        var $208=HEAP[$data_addr]; //@line 749 "_codecs_iso2022.c"
        var $209=(($208)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $210=HEAP[$209]; //@line 749 "_codecs_iso2022.c"
        var $211=unSign(($210), 8, 0); //@line 749 "_codecs_iso2022.c"
        var $212=(($207+8*$211)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $213=(($212+4)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $214=HEAP[$213]; //@line 749 "_codecs_iso2022.c"
        var $215=unSign(($206), 8, 0) < unSign(($214), 8, 0); //@line 749 "_codecs_iso2022.c"
        if ($215) { __label__ = 23; break; } else { __label__ = 20; break; } //@line 749 "_codecs_iso2022.c"
      case 20: // $bb19
        var $216=HEAP[$data_addr]; //@line 749 "_codecs_iso2022.c"
        var $217=(($216+1)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $218=HEAP[$217]; //@line 749 "_codecs_iso2022.c"
        var $219=HEAP[_jisx0213_pair_decmap]; //@line 749 "_codecs_iso2022.c"
        var $220=HEAP[$data_addr]; //@line 749 "_codecs_iso2022.c"
        var $221=(($220)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $222=HEAP[$221]; //@line 749 "_codecs_iso2022.c"
        var $223=unSign(($222), 8, 0); //@line 749 "_codecs_iso2022.c"
        var $224=(($219+8*$223)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $225=(($224+5)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $226=HEAP[$225]; //@line 749 "_codecs_iso2022.c"
        var $227=unSign(($218), 8, 0) > unSign(($226), 8, 0); //@line 749 "_codecs_iso2022.c"
        if ($227) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 749 "_codecs_iso2022.c"
      case 21: // $bb20
        var $228=HEAP[_jisx0213_pair_decmap]; //@line 749 "_codecs_iso2022.c"
        var $229=HEAP[$data_addr]; //@line 749 "_codecs_iso2022.c"
        var $230=(($229)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $231=HEAP[$230]; //@line 749 "_codecs_iso2022.c"
        var $232=unSign(($231), 8, 0); //@line 749 "_codecs_iso2022.c"
        var $233=(($228+8*$232)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $234=(($233)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $235=HEAP[$234]; //@line 749 "_codecs_iso2022.c"
        var $236=HEAP[$data_addr]; //@line 749 "_codecs_iso2022.c"
        var $237=(($236+1)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $238=HEAP[$237]; //@line 749 "_codecs_iso2022.c"
        var $239=unSign(($238), 8, 0); //@line 749 "_codecs_iso2022.c"
        var $240=HEAP[_jisx0213_pair_decmap]; //@line 749 "_codecs_iso2022.c"
        var $241=HEAP[$data_addr]; //@line 749 "_codecs_iso2022.c"
        var $242=(($241)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $243=HEAP[$242]; //@line 749 "_codecs_iso2022.c"
        var $244=unSign(($243), 8, 0); //@line 749 "_codecs_iso2022.c"
        var $245=(($240+8*$244)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $246=(($245+4)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $247=HEAP[$246]; //@line 749 "_codecs_iso2022.c"
        var $248=unSign(($247), 8, 0); //@line 749 "_codecs_iso2022.c"
        var $249=((($239) - ($248))&4294967295); //@line 749 "_codecs_iso2022.c"
        var $250=(($235+4*$249)&4294967295); //@line 749 "_codecs_iso2022.c"
        var $251=HEAP[$250]; //@line 749 "_codecs_iso2022.c"
        HEAP[$u]=$251; //@line 749 "_codecs_iso2022.c"
        var $252=HEAP[$u]; //@line 749 "_codecs_iso2022.c"
        var $253=((($252))|0)==65534; //@line 749 "_codecs_iso2022.c"
        if ($253) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 749 "_codecs_iso2022.c"
      case 22: // $bb21
        __label__ = 24; break; //@line 749 "_codecs_iso2022.c"
      case 23: // $bb22
        HEAP[$0]=65535; //@line 751 "_codecs_iso2022.c"
        __label__ = 25; break; //@line 751 "_codecs_iso2022.c"
      case 24: // $bb23
        var $254=HEAP[$u]; //@line 752 "_codecs_iso2022.c"
        HEAP[$0]=$254; //@line 752 "_codecs_iso2022.c"
        __label__ = 25; break; //@line 752 "_codecs_iso2022.c"
      case 25: // $bb24
        var $255=HEAP[$0]; //@line 744 "_codecs_iso2022.c"
        HEAP[$retval]=$255; //@line 744 "_codecs_iso2022.c"
        __label__ = 26; break; //@line 744 "_codecs_iso2022.c"
      case 26: // $return
        var $retval25=HEAP[$retval]; //@line 744 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 744 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2004_2_decoder($data) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $u=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        var $1=HEAP[_jisx0213_2_bmp_decmap]; //@line 759 "_codecs_iso2022.c"
        var $2=HEAP[$data_addr]; //@line 759 "_codecs_iso2022.c"
        var $3=(($2)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 759 "_codecs_iso2022.c"
        var $5=unSign(($4), 8, 0); //@line 759 "_codecs_iso2022.c"
        var $6=(($1+8*$5)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $7=(($6)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 759 "_codecs_iso2022.c"
        var $9=$8; //@line 759 "_codecs_iso2022.c"
        var $10=($9)==0; //@line 759 "_codecs_iso2022.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 759 "_codecs_iso2022.c"
      case 1: // $bb
        var $11=HEAP[$data_addr]; //@line 759 "_codecs_iso2022.c"
        var $12=(($11+1)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 759 "_codecs_iso2022.c"
        var $14=HEAP[_jisx0213_2_bmp_decmap]; //@line 759 "_codecs_iso2022.c"
        var $15=HEAP[$data_addr]; //@line 759 "_codecs_iso2022.c"
        var $16=(($15)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 759 "_codecs_iso2022.c"
        var $18=unSign(($17), 8, 0); //@line 759 "_codecs_iso2022.c"
        var $19=(($14+8*$18)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $20=(($19+4)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 759 "_codecs_iso2022.c"
        var $22=unSign(($13), 8, 0) < unSign(($21), 8, 0); //@line 759 "_codecs_iso2022.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 759 "_codecs_iso2022.c"
      case 2: // $bb1
        var $23=HEAP[$data_addr]; //@line 759 "_codecs_iso2022.c"
        var $24=(($23+1)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 759 "_codecs_iso2022.c"
        var $26=HEAP[_jisx0213_2_bmp_decmap]; //@line 759 "_codecs_iso2022.c"
        var $27=HEAP[$data_addr]; //@line 759 "_codecs_iso2022.c"
        var $28=(($27)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 759 "_codecs_iso2022.c"
        var $30=unSign(($29), 8, 0); //@line 759 "_codecs_iso2022.c"
        var $31=(($26+8*$30)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $32=(($31+5)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 759 "_codecs_iso2022.c"
        var $34=unSign(($25), 8, 0) > unSign(($33), 8, 0); //@line 759 "_codecs_iso2022.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 759 "_codecs_iso2022.c"
      case 3: // $bb2
        var $35=HEAP[_jisx0213_2_bmp_decmap]; //@line 759 "_codecs_iso2022.c"
        var $36=HEAP[$data_addr]; //@line 759 "_codecs_iso2022.c"
        var $37=(($36)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $38=HEAP[$37]; //@line 759 "_codecs_iso2022.c"
        var $39=unSign(($38), 8, 0); //@line 759 "_codecs_iso2022.c"
        var $40=(($35+8*$39)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $41=(($40)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 759 "_codecs_iso2022.c"
        var $43=HEAP[$data_addr]; //@line 759 "_codecs_iso2022.c"
        var $44=(($43+1)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 759 "_codecs_iso2022.c"
        var $46=unSign(($45), 8, 0); //@line 759 "_codecs_iso2022.c"
        var $47=HEAP[_jisx0213_2_bmp_decmap]; //@line 759 "_codecs_iso2022.c"
        var $48=HEAP[$data_addr]; //@line 759 "_codecs_iso2022.c"
        var $49=(($48)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 759 "_codecs_iso2022.c"
        var $51=unSign(($50), 8, 0); //@line 759 "_codecs_iso2022.c"
        var $52=(($47+8*$51)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $53=(($52+4)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $54=HEAP[$53]; //@line 759 "_codecs_iso2022.c"
        var $55=unSign(($54), 8, 0); //@line 759 "_codecs_iso2022.c"
        var $56=((($46) - ($55))&4294967295); //@line 759 "_codecs_iso2022.c"
        var $57=(($42+2*$56)&4294967295); //@line 759 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 759 "_codecs_iso2022.c"
        var $59=unSign(($58), 16, 0); //@line 759 "_codecs_iso2022.c"
        HEAP[$u]=$59; //@line 759 "_codecs_iso2022.c"
        var $60=HEAP[$u]; //@line 759 "_codecs_iso2022.c"
        var $61=((($60))|0)==65534; //@line 759 "_codecs_iso2022.c"
        if ($61) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 759 "_codecs_iso2022.c"
      case 4: // $bb3
        __label__ = 11; break; //@line 759 "_codecs_iso2022.c"
      case 5: // $bb4
        var $62=HEAP[_jisx0213_2_emp_decmap]; //@line 760 "_codecs_iso2022.c"
        var $63=HEAP[$data_addr]; //@line 760 "_codecs_iso2022.c"
        var $64=(($63)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $65=HEAP[$64]; //@line 760 "_codecs_iso2022.c"
        var $66=unSign(($65), 8, 0); //@line 760 "_codecs_iso2022.c"
        var $67=(($62+8*$66)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $68=(($67)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $69=HEAP[$68]; //@line 760 "_codecs_iso2022.c"
        var $70=$69; //@line 760 "_codecs_iso2022.c"
        var $71=($70)==0; //@line 760 "_codecs_iso2022.c"
        if ($71) { __label__ = 10; break; } else { __label__ = 6; break; } //@line 760 "_codecs_iso2022.c"
      case 6: // $bb5
        var $72=HEAP[$data_addr]; //@line 760 "_codecs_iso2022.c"
        var $73=(($72+1)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $74=HEAP[$73]; //@line 760 "_codecs_iso2022.c"
        var $75=HEAP[_jisx0213_2_emp_decmap]; //@line 760 "_codecs_iso2022.c"
        var $76=HEAP[$data_addr]; //@line 760 "_codecs_iso2022.c"
        var $77=(($76)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $78=HEAP[$77]; //@line 760 "_codecs_iso2022.c"
        var $79=unSign(($78), 8, 0); //@line 760 "_codecs_iso2022.c"
        var $80=(($75+8*$79)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $81=(($80+4)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $82=HEAP[$81]; //@line 760 "_codecs_iso2022.c"
        var $83=unSign(($74), 8, 0) < unSign(($82), 8, 0); //@line 760 "_codecs_iso2022.c"
        if ($83) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 760 "_codecs_iso2022.c"
      case 7: // $bb6
        var $84=HEAP[$data_addr]; //@line 760 "_codecs_iso2022.c"
        var $85=(($84+1)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $86=HEAP[$85]; //@line 760 "_codecs_iso2022.c"
        var $87=HEAP[_jisx0213_2_emp_decmap]; //@line 760 "_codecs_iso2022.c"
        var $88=HEAP[$data_addr]; //@line 760 "_codecs_iso2022.c"
        var $89=(($88)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $90=HEAP[$89]; //@line 760 "_codecs_iso2022.c"
        var $91=unSign(($90), 8, 0); //@line 760 "_codecs_iso2022.c"
        var $92=(($87+8*$91)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $93=(($92+5)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $94=HEAP[$93]; //@line 760 "_codecs_iso2022.c"
        var $95=unSign(($86), 8, 0) > unSign(($94), 8, 0); //@line 760 "_codecs_iso2022.c"
        if ($95) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 760 "_codecs_iso2022.c"
      case 8: // $bb7
        var $96=HEAP[_jisx0213_2_emp_decmap]; //@line 760 "_codecs_iso2022.c"
        var $97=HEAP[$data_addr]; //@line 760 "_codecs_iso2022.c"
        var $98=(($97)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $99=HEAP[$98]; //@line 760 "_codecs_iso2022.c"
        var $100=unSign(($99), 8, 0); //@line 760 "_codecs_iso2022.c"
        var $101=(($96+8*$100)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $102=(($101)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $103=HEAP[$102]; //@line 760 "_codecs_iso2022.c"
        var $104=HEAP[$data_addr]; //@line 760 "_codecs_iso2022.c"
        var $105=(($104+1)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $106=HEAP[$105]; //@line 760 "_codecs_iso2022.c"
        var $107=unSign(($106), 8, 0); //@line 760 "_codecs_iso2022.c"
        var $108=HEAP[_jisx0213_2_emp_decmap]; //@line 760 "_codecs_iso2022.c"
        var $109=HEAP[$data_addr]; //@line 760 "_codecs_iso2022.c"
        var $110=(($109)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $111=HEAP[$110]; //@line 760 "_codecs_iso2022.c"
        var $112=unSign(($111), 8, 0); //@line 760 "_codecs_iso2022.c"
        var $113=(($108+8*$112)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $114=(($113+4)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $115=HEAP[$114]; //@line 760 "_codecs_iso2022.c"
        var $116=unSign(($115), 8, 0); //@line 760 "_codecs_iso2022.c"
        var $117=((($107) - ($116))&4294967295); //@line 760 "_codecs_iso2022.c"
        var $118=(($103+2*$117)&4294967295); //@line 760 "_codecs_iso2022.c"
        var $119=HEAP[$118]; //@line 760 "_codecs_iso2022.c"
        var $120=unSign(($119), 16, 0); //@line 760 "_codecs_iso2022.c"
        HEAP[$u]=$120; //@line 760 "_codecs_iso2022.c"
        var $121=HEAP[$u]; //@line 760 "_codecs_iso2022.c"
        var $122=((($121))|0)==65534; //@line 760 "_codecs_iso2022.c"
        if ($122) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 760 "_codecs_iso2022.c"
      case 9: // $bb8
        var $123=HEAP[$u]; //@line 761 "_codecs_iso2022.c"
        var $124=($123) | 131072; //@line 761 "_codecs_iso2022.c"
        HEAP[$u]=$124; //@line 761 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 761 "_codecs_iso2022.c"
      case 10: // $bb9
        HEAP[$0]=65535; //@line 763 "_codecs_iso2022.c"
        __label__ = 12; break; //@line 763 "_codecs_iso2022.c"
      case 11: // $bb10
        var $125=HEAP[$u]; //@line 764 "_codecs_iso2022.c"
        HEAP[$0]=$125; //@line 764 "_codecs_iso2022.c"
        __label__ = 12; break; //@line 764 "_codecs_iso2022.c"
      case 12: // $bb11
        var $126=HEAP[$0]; //@line 763 "_codecs_iso2022.c"
        HEAP[$retval]=$126; //@line 763 "_codecs_iso2022.c"
        __label__ = 13; break; //@line 763 "_codecs_iso2022.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 763 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 763 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_encoder($data, $length, $config) {
    var __stackBase__  = STACKTOP; STACKTOP += 22; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $config_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $coded=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        HEAP[$config_addr]=$config;
        var $1=HEAP[$length_addr]; //@line 772 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 772 "_codecs_iso2022.c"
        if ($2 == -1) {
          __label__ = 48; break;
        }
        else if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 43; break;
        }
        else {
        __label__ = 51; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$data_addr]; //@line 774 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 774 "_codecs_iso2022.c"
        var $5=((($4))>>>0) > 65535; //@line 774 "_codecs_iso2022.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 12; break; } //@line 774 "_codecs_iso2022.c"
      case 2: // $bb1
        var $6=HEAP[$data_addr]; //@line 775 "_codecs_iso2022.c"
        var $7=HEAP[$6]; //@line 775 "_codecs_iso2022.c"
        var $8=((($7))>>>0) >>> 16; //@line 775 "_codecs_iso2022.c"
        var $9=((($8))|0)==2; //@line 775 "_codecs_iso2022.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 11; break; } //@line 775 "_codecs_iso2022.c"
      case 3: // $bb2
        var $10=HEAP[$config_addr]; //@line 776 "_codecs_iso2022.c"
        var $11=($10)!=2000; //@line 776 "_codecs_iso2022.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 776 "_codecs_iso2022.c"
      case 4: // $bb3
        var $12=HEAP[$data_addr]; //@line 776 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 776 "_codecs_iso2022.c"
        var $14=((($13))|0)!=134047; //@line 776 "_codecs_iso2022.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 776 "_codecs_iso2022.c"
      case 5: // $bb4
        HEAP[$0]=65535; //@line 776 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 776 "_codecs_iso2022.c"
      case 6: // $bb5
        var $15=HEAP[_jisx0213_emp_encmap]; //@line 777 "_codecs_iso2022.c"
        var $16=HEAP[$data_addr]; //@line 777 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 777 "_codecs_iso2022.c"
        var $18=($17) & 65535; //@line 777 "_codecs_iso2022.c"
        var $19=((($18))>>>0) >>> 8; //@line 777 "_codecs_iso2022.c"
        var $20=(($15+8*$19)&4294967295); //@line 777 "_codecs_iso2022.c"
        var $21=(($20)&4294967295); //@line 777 "_codecs_iso2022.c"
        var $22=HEAP[$21]; //@line 777 "_codecs_iso2022.c"
        var $23=$22; //@line 777 "_codecs_iso2022.c"
        var $24=($23)!=0; //@line 777 "_codecs_iso2022.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 777 "_codecs_iso2022.c"
      case 7: // $bb6
        var $25=HEAP[$data_addr]; //@line 777 "_codecs_iso2022.c"
        var $26=HEAP[$25]; //@line 777 "_codecs_iso2022.c"
        var $27=($26) & 255; //@line 777 "_codecs_iso2022.c"
        var $28=HEAP[_jisx0213_emp_encmap]; //@line 777 "_codecs_iso2022.c"
        var $29=HEAP[$data_addr]; //@line 777 "_codecs_iso2022.c"
        var $30=HEAP[$29]; //@line 777 "_codecs_iso2022.c"
        var $31=($30) & 65535; //@line 777 "_codecs_iso2022.c"
        var $32=((($31))>>>0) >>> 8; //@line 777 "_codecs_iso2022.c"
        var $33=(($28+8*$32)&4294967295); //@line 777 "_codecs_iso2022.c"
        var $34=(($33+4)&4294967295); //@line 777 "_codecs_iso2022.c"
        var $35=HEAP[$34]; //@line 777 "_codecs_iso2022.c"
        var $36=unSign(($35), 8, 0); //@line 777 "_codecs_iso2022.c"
        var $37=((($27))>>>0) >= ((($36))>>>0); //@line 777 "_codecs_iso2022.c"
        if ($37) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 777 "_codecs_iso2022.c"
      case 8: // $bb7
        var $38=HEAP[$data_addr]; //@line 777 "_codecs_iso2022.c"
        var $39=HEAP[$38]; //@line 777 "_codecs_iso2022.c"
        var $40=($39) & 255; //@line 777 "_codecs_iso2022.c"
        var $41=HEAP[_jisx0213_emp_encmap]; //@line 777 "_codecs_iso2022.c"
        var $42=HEAP[$data_addr]; //@line 777 "_codecs_iso2022.c"
        var $43=HEAP[$42]; //@line 777 "_codecs_iso2022.c"
        var $44=($43) & 65535; //@line 777 "_codecs_iso2022.c"
        var $45=((($44))>>>0) >>> 8; //@line 777 "_codecs_iso2022.c"
        var $46=(($41+8*$45)&4294967295); //@line 777 "_codecs_iso2022.c"
        var $47=(($46+5)&4294967295); //@line 777 "_codecs_iso2022.c"
        var $48=HEAP[$47]; //@line 777 "_codecs_iso2022.c"
        var $49=unSign(($48), 8, 0); //@line 777 "_codecs_iso2022.c"
        var $50=((($40))>>>0) <= ((($49))>>>0); //@line 777 "_codecs_iso2022.c"
        if ($50) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 777 "_codecs_iso2022.c"
      case 9: // $bb8
        var $51=HEAP[_jisx0213_emp_encmap]; //@line 777 "_codecs_iso2022.c"
        var $52=HEAP[$data_addr]; //@line 777 "_codecs_iso2022.c"
        var $53=HEAP[$52]; //@line 777 "_codecs_iso2022.c"
        var $54=($53) & 65535; //@line 777 "_codecs_iso2022.c"
        var $55=((($54))>>>0) >>> 8; //@line 777 "_codecs_iso2022.c"
        var $56=(($51+8*$55)&4294967295); //@line 777 "_codecs_iso2022.c"
        var $57=(($56)&4294967295); //@line 777 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 777 "_codecs_iso2022.c"
        var $59=HEAP[$data_addr]; //@line 777 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 777 "_codecs_iso2022.c"
        var $61=($60) & 255; //@line 777 "_codecs_iso2022.c"
        var $62=HEAP[_jisx0213_emp_encmap]; //@line 777 "_codecs_iso2022.c"
        var $63=HEAP[$data_addr]; //@line 777 "_codecs_iso2022.c"
        var $64=HEAP[$63]; //@line 777 "_codecs_iso2022.c"
        var $65=($64) & 65535; //@line 777 "_codecs_iso2022.c"
        var $66=((($65))>>>0) >>> 8; //@line 777 "_codecs_iso2022.c"
        var $67=(($62+8*$66)&4294967295); //@line 777 "_codecs_iso2022.c"
        var $68=(($67+4)&4294967295); //@line 777 "_codecs_iso2022.c"
        var $69=HEAP[$68]; //@line 777 "_codecs_iso2022.c"
        var $70=unSign(($69), 8, 0); //@line 777 "_codecs_iso2022.c"
        var $71=((($61) - ($70))&4294967295); //@line 777 "_codecs_iso2022.c"
        var $72=(($58+2*$71)&4294967295); //@line 777 "_codecs_iso2022.c"
        var $73=HEAP[$72]; //@line 777 "_codecs_iso2022.c"
        HEAP[$coded]=$73; //@line 777 "_codecs_iso2022.c"
        var $74=HEAP[$coded]; //@line 777 "_codecs_iso2022.c"
        var $75=reSign(($74), 16, 0)!=-1; //@line 777 "_codecs_iso2022.c"
        if ($75) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 777 "_codecs_iso2022.c"
      case 10: // $bb9
        var $76=HEAP[$coded]; //@line 779 "_codecs_iso2022.c"
        var $77=unSign(($76), 16, 0); //@line 779 "_codecs_iso2022.c"
        HEAP[$0]=$77; //@line 779 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 779 "_codecs_iso2022.c"
      case 11: // $bb10
        HEAP[$0]=65535; //@line 781 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 781 "_codecs_iso2022.c"
      case 12: // $bb11
        var $78=HEAP[$config_addr]; //@line 784 "_codecs_iso2022.c"
        var $79=($78)!=2000; //@line 784 "_codecs_iso2022.c"
        if ($79) { __label__ = 24; break; } else { __label__ = 13; break; } //@line 784 "_codecs_iso2022.c"
      case 13: // $bb12
        var $80=HEAP[$data_addr]; //@line 784 "_codecs_iso2022.c"
        var $81=HEAP[$80]; //@line 784 "_codecs_iso2022.c"
        var $82=((($81))|0)==39708; //@line 784 "_codecs_iso2022.c"
        if ($82) { __label__ = 23; break; } else { __label__ = 14; break; } //@line 784 "_codecs_iso2022.c"
      case 14: // $bb13
        var $83=HEAP[$data_addr]; //@line 784 "_codecs_iso2022.c"
        var $84=HEAP[$83]; //@line 784 "_codecs_iso2022.c"
        var $85=((($84))|0)==20465; //@line 784 "_codecs_iso2022.c"
        if ($85) { __label__ = 23; break; } else { __label__ = 15; break; } //@line 784 "_codecs_iso2022.c"
      case 15: // $bb14
        var $86=HEAP[$data_addr]; //@line 784 "_codecs_iso2022.c"
        var $87=HEAP[$86]; //@line 784 "_codecs_iso2022.c"
        var $88=((($87))|0)==21085; //@line 784 "_codecs_iso2022.c"
        if ($88) { __label__ = 23; break; } else { __label__ = 16; break; } //@line 784 "_codecs_iso2022.c"
      case 16: // $bb15
        var $89=HEAP[$data_addr]; //@line 784 "_codecs_iso2022.c"
        var $90=HEAP[$89]; //@line 784 "_codecs_iso2022.c"
        var $91=((($90))|0)==21534; //@line 784 "_codecs_iso2022.c"
        if ($91) { __label__ = 23; break; } else { __label__ = 17; break; } //@line 784 "_codecs_iso2022.c"
      case 17: // $bb16
        var $92=HEAP[$data_addr]; //@line 784 "_codecs_iso2022.c"
        var $93=HEAP[$92]; //@line 784 "_codecs_iso2022.c"
        var $94=((($93))|0)==22099; //@line 784 "_codecs_iso2022.c"
        if ($94) { __label__ = 23; break; } else { __label__ = 18; break; } //@line 784 "_codecs_iso2022.c"
      case 18: // $bb17
        var $95=HEAP[$data_addr]; //@line 784 "_codecs_iso2022.c"
        var $96=HEAP[$95]; //@line 784 "_codecs_iso2022.c"
        var $97=((($96))|0)==23032; //@line 784 "_codecs_iso2022.c"
        if ($97) { __label__ = 23; break; } else { __label__ = 19; break; } //@line 784 "_codecs_iso2022.c"
      case 19: // $bb18
        var $98=HEAP[$data_addr]; //@line 784 "_codecs_iso2022.c"
        var $99=HEAP[$98]; //@line 784 "_codecs_iso2022.c"
        var $100=((($99))|0)==23643; //@line 784 "_codecs_iso2022.c"
        if ($100) { __label__ = 23; break; } else { __label__ = 20; break; } //@line 784 "_codecs_iso2022.c"
      case 20: // $bb19
        var $101=HEAP[$data_addr]; //@line 784 "_codecs_iso2022.c"
        var $102=HEAP[$101]; //@line 784 "_codecs_iso2022.c"
        var $103=((($102))|0)==24183; //@line 784 "_codecs_iso2022.c"
        if ($103) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 784 "_codecs_iso2022.c"
      case 21: // $bb20
        var $104=HEAP[$data_addr]; //@line 784 "_codecs_iso2022.c"
        var $105=HEAP[$104]; //@line 784 "_codecs_iso2022.c"
        var $106=((($105))|0)==30246; //@line 784 "_codecs_iso2022.c"
        if ($106) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 784 "_codecs_iso2022.c"
      case 22: // $bb21
        var $107=HEAP[$data_addr]; //@line 784 "_codecs_iso2022.c"
        var $108=HEAP[$107]; //@line 784 "_codecs_iso2022.c"
        var $109=((($108))|0)==32363; //@line 784 "_codecs_iso2022.c"
        if ($109) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 784 "_codecs_iso2022.c"
      case 23: // $bb22
        HEAP[$0]=65535; //@line 784 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 784 "_codecs_iso2022.c"
      case 24: // $bb23
        var $110=HEAP[$config_addr]; //@line 784 "_codecs_iso2022.c"
        var $111=($110)!=2000; //@line 784 "_codecs_iso2022.c"
        if ($111) { __label__ = 27; break; } else { __label__ = 25; break; } //@line 784 "_codecs_iso2022.c"
      case 25: // $bb24
        var $112=HEAP[$data_addr]; //@line 784 "_codecs_iso2022.c"
        var $113=HEAP[$112]; //@line 784 "_codecs_iso2022.c"
        var $114=((($113))|0)!=39709; //@line 784 "_codecs_iso2022.c"
        if ($114) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 784 "_codecs_iso2022.c"
      case 26: // $bb25
        HEAP[$coded]=-709; //@line 784 "_codecs_iso2022.c"
        __label__ = 42; break; //@line 784 "_codecs_iso2022.c"
      case 27: // $bb26
        var $115=HEAP[_jisx0213_bmp_encmap]; //@line 785 "_codecs_iso2022.c"
        var $116=HEAP[$data_addr]; //@line 785 "_codecs_iso2022.c"
        var $117=HEAP[$116]; //@line 785 "_codecs_iso2022.c"
        var $118=((($117))>>>0) >>> 8; //@line 785 "_codecs_iso2022.c"
        var $119=(($115+8*$118)&4294967295); //@line 785 "_codecs_iso2022.c"
        var $120=(($119)&4294967295); //@line 785 "_codecs_iso2022.c"
        var $121=HEAP[$120]; //@line 785 "_codecs_iso2022.c"
        var $122=$121; //@line 785 "_codecs_iso2022.c"
        var $123=($122)==0; //@line 785 "_codecs_iso2022.c"
        if ($123) { __label__ = 34; break; } else { __label__ = 28; break; } //@line 785 "_codecs_iso2022.c"
      case 28: // $bb27
        var $124=HEAP[$data_addr]; //@line 785 "_codecs_iso2022.c"
        var $125=HEAP[$124]; //@line 785 "_codecs_iso2022.c"
        var $126=($125) & 255; //@line 785 "_codecs_iso2022.c"
        var $127=HEAP[_jisx0213_bmp_encmap]; //@line 785 "_codecs_iso2022.c"
        var $128=HEAP[$data_addr]; //@line 785 "_codecs_iso2022.c"
        var $129=HEAP[$128]; //@line 785 "_codecs_iso2022.c"
        var $130=((($129))>>>0) >>> 8; //@line 785 "_codecs_iso2022.c"
        var $131=(($127+8*$130)&4294967295); //@line 785 "_codecs_iso2022.c"
        var $132=(($131+4)&4294967295); //@line 785 "_codecs_iso2022.c"
        var $133=HEAP[$132]; //@line 785 "_codecs_iso2022.c"
        var $134=unSign(($133), 8, 0); //@line 785 "_codecs_iso2022.c"
        var $135=((($126))>>>0) < ((($134))>>>0); //@line 785 "_codecs_iso2022.c"
        if ($135) { __label__ = 34; break; } else { __label__ = 29; break; } //@line 785 "_codecs_iso2022.c"
      case 29: // $bb28
        var $136=HEAP[$data_addr]; //@line 785 "_codecs_iso2022.c"
        var $137=HEAP[$136]; //@line 785 "_codecs_iso2022.c"
        var $138=($137) & 255; //@line 785 "_codecs_iso2022.c"
        var $139=HEAP[_jisx0213_bmp_encmap]; //@line 785 "_codecs_iso2022.c"
        var $140=HEAP[$data_addr]; //@line 785 "_codecs_iso2022.c"
        var $141=HEAP[$140]; //@line 785 "_codecs_iso2022.c"
        var $142=((($141))>>>0) >>> 8; //@line 785 "_codecs_iso2022.c"
        var $143=(($139+8*$142)&4294967295); //@line 785 "_codecs_iso2022.c"
        var $144=(($143+5)&4294967295); //@line 785 "_codecs_iso2022.c"
        var $145=HEAP[$144]; //@line 785 "_codecs_iso2022.c"
        var $146=unSign(($145), 8, 0); //@line 785 "_codecs_iso2022.c"
        var $147=((($138))>>>0) > ((($146))>>>0); //@line 785 "_codecs_iso2022.c"
        if ($147) { __label__ = 34; break; } else { __label__ = 30; break; } //@line 785 "_codecs_iso2022.c"
      case 30: // $bb29
        var $148=HEAP[_jisx0213_bmp_encmap]; //@line 785 "_codecs_iso2022.c"
        var $149=HEAP[$data_addr]; //@line 785 "_codecs_iso2022.c"
        var $150=HEAP[$149]; //@line 785 "_codecs_iso2022.c"
        var $151=((($150))>>>0) >>> 8; //@line 785 "_codecs_iso2022.c"
        var $152=(($148+8*$151)&4294967295); //@line 785 "_codecs_iso2022.c"
        var $153=(($152)&4294967295); //@line 785 "_codecs_iso2022.c"
        var $154=HEAP[$153]; //@line 785 "_codecs_iso2022.c"
        var $155=HEAP[$data_addr]; //@line 785 "_codecs_iso2022.c"
        var $156=HEAP[$155]; //@line 785 "_codecs_iso2022.c"
        var $157=($156) & 255; //@line 785 "_codecs_iso2022.c"
        var $158=HEAP[_jisx0213_bmp_encmap]; //@line 785 "_codecs_iso2022.c"
        var $159=HEAP[$data_addr]; //@line 785 "_codecs_iso2022.c"
        var $160=HEAP[$159]; //@line 785 "_codecs_iso2022.c"
        var $161=((($160))>>>0) >>> 8; //@line 785 "_codecs_iso2022.c"
        var $162=(($158+8*$161)&4294967295); //@line 785 "_codecs_iso2022.c"
        var $163=(($162+4)&4294967295); //@line 785 "_codecs_iso2022.c"
        var $164=HEAP[$163]; //@line 785 "_codecs_iso2022.c"
        var $165=unSign(($164), 8, 0); //@line 785 "_codecs_iso2022.c"
        var $166=((($157) - ($165))&4294967295); //@line 785 "_codecs_iso2022.c"
        var $167=(($154+2*$166)&4294967295); //@line 785 "_codecs_iso2022.c"
        var $168=HEAP[$167]; //@line 785 "_codecs_iso2022.c"
        HEAP[$coded]=$168; //@line 785 "_codecs_iso2022.c"
        var $169=HEAP[$coded]; //@line 785 "_codecs_iso2022.c"
        var $170=reSign(($169), 16, 0)==-1; //@line 785 "_codecs_iso2022.c"
        if ($170) { __label__ = 34; break; } else { __label__ = 31; break; } //@line 785 "_codecs_iso2022.c"
      case 31: // $bb30
        var $171=HEAP[$coded]; //@line 786 "_codecs_iso2022.c"
        var $172=reSign(($171), 16, 0)==-2; //@line 786 "_codecs_iso2022.c"
        if ($172) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 786 "_codecs_iso2022.c"
      case 32: // $bb31
        HEAP[$0]=65534; //@line 787 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 787 "_codecs_iso2022.c"
      case 33: // $bb32
        __label__ = 42; break; //@line 787 "_codecs_iso2022.c"
      case 34: // $bb33
        var $173=HEAP[_jisxcommon_encmap]; //@line 789 "_codecs_iso2022.c"
        var $174=HEAP[$data_addr]; //@line 789 "_codecs_iso2022.c"
        var $175=HEAP[$174]; //@line 789 "_codecs_iso2022.c"
        var $176=((($175))>>>0) >>> 8; //@line 789 "_codecs_iso2022.c"
        var $177=(($173+8*$176)&4294967295); //@line 789 "_codecs_iso2022.c"
        var $178=(($177)&4294967295); //@line 789 "_codecs_iso2022.c"
        var $179=HEAP[$178]; //@line 789 "_codecs_iso2022.c"
        var $180=$179; //@line 789 "_codecs_iso2022.c"
        var $181=($180)==0; //@line 789 "_codecs_iso2022.c"
        if ($181) { __label__ = 41; break; } else { __label__ = 35; break; } //@line 789 "_codecs_iso2022.c"
      case 35: // $bb34
        var $182=HEAP[$data_addr]; //@line 789 "_codecs_iso2022.c"
        var $183=HEAP[$182]; //@line 789 "_codecs_iso2022.c"
        var $184=($183) & 255; //@line 789 "_codecs_iso2022.c"
        var $185=HEAP[_jisxcommon_encmap]; //@line 789 "_codecs_iso2022.c"
        var $186=HEAP[$data_addr]; //@line 789 "_codecs_iso2022.c"
        var $187=HEAP[$186]; //@line 789 "_codecs_iso2022.c"
        var $188=((($187))>>>0) >>> 8; //@line 789 "_codecs_iso2022.c"
        var $189=(($185+8*$188)&4294967295); //@line 789 "_codecs_iso2022.c"
        var $190=(($189+4)&4294967295); //@line 789 "_codecs_iso2022.c"
        var $191=HEAP[$190]; //@line 789 "_codecs_iso2022.c"
        var $192=unSign(($191), 8, 0); //@line 789 "_codecs_iso2022.c"
        var $193=((($184))>>>0) < ((($192))>>>0); //@line 789 "_codecs_iso2022.c"
        if ($193) { __label__ = 41; break; } else { __label__ = 36; break; } //@line 789 "_codecs_iso2022.c"
      case 36: // $bb35
        var $194=HEAP[$data_addr]; //@line 789 "_codecs_iso2022.c"
        var $195=HEAP[$194]; //@line 789 "_codecs_iso2022.c"
        var $196=($195) & 255; //@line 789 "_codecs_iso2022.c"
        var $197=HEAP[_jisxcommon_encmap]; //@line 789 "_codecs_iso2022.c"
        var $198=HEAP[$data_addr]; //@line 789 "_codecs_iso2022.c"
        var $199=HEAP[$198]; //@line 789 "_codecs_iso2022.c"
        var $200=((($199))>>>0) >>> 8; //@line 789 "_codecs_iso2022.c"
        var $201=(($197+8*$200)&4294967295); //@line 789 "_codecs_iso2022.c"
        var $202=(($201+5)&4294967295); //@line 789 "_codecs_iso2022.c"
        var $203=HEAP[$202]; //@line 789 "_codecs_iso2022.c"
        var $204=unSign(($203), 8, 0); //@line 789 "_codecs_iso2022.c"
        var $205=((($196))>>>0) > ((($204))>>>0); //@line 789 "_codecs_iso2022.c"
        if ($205) { __label__ = 41; break; } else { __label__ = 37; break; } //@line 789 "_codecs_iso2022.c"
      case 37: // $bb36
        var $206=HEAP[_jisxcommon_encmap]; //@line 789 "_codecs_iso2022.c"
        var $207=HEAP[$data_addr]; //@line 789 "_codecs_iso2022.c"
        var $208=HEAP[$207]; //@line 789 "_codecs_iso2022.c"
        var $209=((($208))>>>0) >>> 8; //@line 789 "_codecs_iso2022.c"
        var $210=(($206+8*$209)&4294967295); //@line 789 "_codecs_iso2022.c"
        var $211=(($210)&4294967295); //@line 789 "_codecs_iso2022.c"
        var $212=HEAP[$211]; //@line 789 "_codecs_iso2022.c"
        var $213=HEAP[$data_addr]; //@line 789 "_codecs_iso2022.c"
        var $214=HEAP[$213]; //@line 789 "_codecs_iso2022.c"
        var $215=($214) & 255; //@line 789 "_codecs_iso2022.c"
        var $216=HEAP[_jisxcommon_encmap]; //@line 789 "_codecs_iso2022.c"
        var $217=HEAP[$data_addr]; //@line 789 "_codecs_iso2022.c"
        var $218=HEAP[$217]; //@line 789 "_codecs_iso2022.c"
        var $219=((($218))>>>0) >>> 8; //@line 789 "_codecs_iso2022.c"
        var $220=(($216+8*$219)&4294967295); //@line 789 "_codecs_iso2022.c"
        var $221=(($220+4)&4294967295); //@line 789 "_codecs_iso2022.c"
        var $222=HEAP[$221]; //@line 789 "_codecs_iso2022.c"
        var $223=unSign(($222), 8, 0); //@line 789 "_codecs_iso2022.c"
        var $224=((($215) - ($223))&4294967295); //@line 789 "_codecs_iso2022.c"
        var $225=(($212+2*$224)&4294967295); //@line 789 "_codecs_iso2022.c"
        var $226=HEAP[$225]; //@line 789 "_codecs_iso2022.c"
        HEAP[$coded]=$226; //@line 789 "_codecs_iso2022.c"
        var $227=HEAP[$coded]; //@line 789 "_codecs_iso2022.c"
        var $228=reSign(($227), 16, 0)==-1; //@line 789 "_codecs_iso2022.c"
        if ($228) { __label__ = 41; break; } else { __label__ = 38; break; } //@line 789 "_codecs_iso2022.c"
      case 38: // $bb37
        var $229=HEAP[$coded]; //@line 790 "_codecs_iso2022.c"
        var $230=reSign(($229), 16, 0) < 0; //@line 790 "_codecs_iso2022.c"
        if ($230) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 790 "_codecs_iso2022.c"
      case 39: // $bb38
        HEAP[$0]=65535; //@line 791 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 791 "_codecs_iso2022.c"
      case 40: // $bb39
        __label__ = 42; break; //@line 791 "_codecs_iso2022.c"
      case 41: // $bb40
        HEAP[$0]=65535; //@line 794 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 794 "_codecs_iso2022.c"
      case 42: // $bb41
        var $231=HEAP[$coded]; //@line 795 "_codecs_iso2022.c"
        var $232=unSign(($231), 16, 0); //@line 795 "_codecs_iso2022.c"
        HEAP[$0]=$232; //@line 795 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 795 "_codecs_iso2022.c"
      case 43: // $bb42
        var $233=HEAP[_jisx0213_pair_encmap]; //@line 797 "_codecs_iso2022.c"
        var $234=HEAP[$data_addr]; //@line 797 "_codecs_iso2022.c"
        var $235=(($234+4)&4294967295); //@line 797 "_codecs_iso2022.c"
        var $236=HEAP[$235]; //@line 797 "_codecs_iso2022.c"
        var $237=((($236)) & 65535); //@line 797 "_codecs_iso2022.c"
        var $238=unSign(($237), 16, 0); //@line 797 "_codecs_iso2022.c"
        var $239=HEAP[$data_addr]; //@line 797 "_codecs_iso2022.c"
        var $240=(($239)&4294967295); //@line 797 "_codecs_iso2022.c"
        var $241=HEAP[$240]; //@line 797 "_codecs_iso2022.c"
        var $242=((($241)) & 65535); //@line 797 "_codecs_iso2022.c"
        var $243=unSign(($242), 16, 0); //@line 797 "_codecs_iso2022.c"
        var $244=((($243)) & 65535); //@line 797 "_codecs_iso2022.c"
        var $245=((($238)) & 65535); //@line 797 "_codecs_iso2022.c"
        var $246=_find_pairencmap($244, $245, $233, 46); //@line 797 "_codecs_iso2022.c"
        HEAP[$coded]=$246; //@line 797 "_codecs_iso2022.c"
        var $247=HEAP[$coded]; //@line 799 "_codecs_iso2022.c"
        var $248=reSign(($247), 16, 0)==-3; //@line 799 "_codecs_iso2022.c"
        if ($248) { __label__ = 44; break; } else { __label__ = 47; break; } //@line 799 "_codecs_iso2022.c"
      case 44: // $bb43
        var $249=HEAP[$length_addr]; //@line 800 "_codecs_iso2022.c"
        HEAP[$249]=1; //@line 800 "_codecs_iso2022.c"
        var $250=HEAP[_jisx0213_pair_encmap]; //@line 801 "_codecs_iso2022.c"
        var $251=HEAP[$data_addr]; //@line 801 "_codecs_iso2022.c"
        var $252=(($251)&4294967295); //@line 801 "_codecs_iso2022.c"
        var $253=HEAP[$252]; //@line 801 "_codecs_iso2022.c"
        var $254=((($253)) & 65535); //@line 801 "_codecs_iso2022.c"
        var $255=unSign(($254), 16, 0); //@line 801 "_codecs_iso2022.c"
        var $256=((($255)) & 65535); //@line 801 "_codecs_iso2022.c"
        var $257=_find_pairencmap($256, 0, $250, 46); //@line 801 "_codecs_iso2022.c"
        HEAP[$coded]=$257; //@line 801 "_codecs_iso2022.c"
        var $258=HEAP[$coded]; //@line 803 "_codecs_iso2022.c"
        var $259=reSign(($258), 16, 0)==-3; //@line 803 "_codecs_iso2022.c"
        if ($259) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 803 "_codecs_iso2022.c"
      case 45: // $bb44
        HEAP[$0]=65535; //@line 804 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 804 "_codecs_iso2022.c"
      case 46: // $bb45
        __label__ = 48; break; //@line 804 "_codecs_iso2022.c"
      case 47: // $bb46
        var $260=HEAP[$coded]; //@line 807 "_codecs_iso2022.c"
        var $261=unSign(($260), 16, 0); //@line 807 "_codecs_iso2022.c"
        HEAP[$0]=$261; //@line 807 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 807 "_codecs_iso2022.c"
      case 48: // $bb47
        var $262=HEAP[$length_addr]; //@line 809 "_codecs_iso2022.c"
        HEAP[$262]=1; //@line 809 "_codecs_iso2022.c"
        var $263=HEAP[_jisx0213_pair_encmap]; //@line 810 "_codecs_iso2022.c"
        var $264=HEAP[$data_addr]; //@line 810 "_codecs_iso2022.c"
        var $265=(($264)&4294967295); //@line 810 "_codecs_iso2022.c"
        var $266=HEAP[$265]; //@line 810 "_codecs_iso2022.c"
        var $267=((($266)) & 65535); //@line 810 "_codecs_iso2022.c"
        var $268=unSign(($267), 16, 0); //@line 810 "_codecs_iso2022.c"
        var $269=((($268)) & 65535); //@line 810 "_codecs_iso2022.c"
        var $270=_find_pairencmap($269, 0, $263, 46); //@line 810 "_codecs_iso2022.c"
        HEAP[$coded]=$270; //@line 810 "_codecs_iso2022.c"
        var $271=HEAP[$coded]; //@line 812 "_codecs_iso2022.c"
        var $272=reSign(($271), 16, 0)==-3; //@line 812 "_codecs_iso2022.c"
        if ($272) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 812 "_codecs_iso2022.c"
      case 49: // $bb48
        HEAP[$0]=65535; //@line 813 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 813 "_codecs_iso2022.c"
      case 50: // $bb49
        var $273=HEAP[$coded]; //@line 815 "_codecs_iso2022.c"
        var $274=unSign(($273), 16, 0); //@line 815 "_codecs_iso2022.c"
        HEAP[$0]=$274; //@line 815 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 815 "_codecs_iso2022.c"
      case 51: // $bb50
        HEAP[$0]=65535; //@line 817 "_codecs_iso2022.c"
        __label__ = 52; break; //@line 817 "_codecs_iso2022.c"
      case 52: // $bb51
        var $275=HEAP[$0]; //@line 776 "_codecs_iso2022.c"
        HEAP[$retval]=$275; //@line 776 "_codecs_iso2022.c"
        __label__ = 53; break; //@line 776 "_codecs_iso2022.c"
      case 53: // $return
        var $retval52=HEAP[$retval]; //@line 776 "_codecs_iso2022.c"
        var $retval5253=((($retval52)) & 65535); //@line 776 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval5253; //@line 776 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2000_1_encoder($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $coded=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        var $1=HEAP[$data_addr]; //@line 824 "_codecs_iso2022.c"
        var $2=HEAP[$length_addr]; //@line 824 "_codecs_iso2022.c"
        var $3=_jisx0213_encoder($1, $2, 2000); //@line 824 "_codecs_iso2022.c"
        HEAP[$coded]=$3; //@line 824 "_codecs_iso2022.c"
        var $4=HEAP[$coded]; //@line 825 "_codecs_iso2022.c"
        var $5=reSign(($4), 16, 0)==-1; //@line 825 "_codecs_iso2022.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 825 "_codecs_iso2022.c"
      case 1: // $bb
        var $6=HEAP[$coded]; //@line 825 "_codecs_iso2022.c"
        var $7=reSign(($6), 16, 0)==-2; //@line 825 "_codecs_iso2022.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 825 "_codecs_iso2022.c"
      case 2: // $bb1
        var $8=HEAP[$coded]; //@line 826 "_codecs_iso2022.c"
        var $9=unSign(($8), 16, 0); //@line 826 "_codecs_iso2022.c"
        HEAP[$0]=$9; //@line 826 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 826 "_codecs_iso2022.c"
      case 3: // $bb2
        var $10=HEAP[$coded]; //@line 827 "_codecs_iso2022.c"
        var $11=reSign(($10), 16, 0) < 0; //@line 827 "_codecs_iso2022.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 827 "_codecs_iso2022.c"
      case 4: // $bb3
        HEAP[$0]=65535; //@line 828 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 828 "_codecs_iso2022.c"
      case 5: // $bb4
        var $12=HEAP[$coded]; //@line 830 "_codecs_iso2022.c"
        var $13=unSign(($12), 16, 0); //@line 830 "_codecs_iso2022.c"
        HEAP[$0]=$13; //@line 830 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 830 "_codecs_iso2022.c"
      case 6: // $bb5
        var $14=HEAP[$0]; //@line 826 "_codecs_iso2022.c"
        HEAP[$retval]=$14; //@line 826 "_codecs_iso2022.c"
        __label__ = 7; break; //@line 826 "_codecs_iso2022.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 826 "_codecs_iso2022.c"
        var $retval67=((($retval6)) & 65535); //@line 826 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval67; //@line 826 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2000_1_encoder_paironly($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 22; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $coded=__stackBase__+16;
        var $ilength=__stackBase__+18;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        var $1=HEAP[$length_addr]; //@line 837 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 837 "_codecs_iso2022.c"
        HEAP[$ilength]=$2; //@line 837 "_codecs_iso2022.c"
        var $3=HEAP[$data_addr]; //@line 839 "_codecs_iso2022.c"
        var $4=HEAP[$length_addr]; //@line 839 "_codecs_iso2022.c"
        var $5=_jisx0213_encoder($3, $4, 2000); //@line 839 "_codecs_iso2022.c"
        HEAP[$coded]=$5; //@line 839 "_codecs_iso2022.c"
        var $6=HEAP[$ilength]; //@line 840 "_codecs_iso2022.c"
        if ($6 == 1) {
          __label__ = 1; break;
        }
        else if ($6 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $7=HEAP[$coded]; //@line 842 "_codecs_iso2022.c"
        var $8=reSign(($7), 16, 0)==-2; //@line 842 "_codecs_iso2022.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 842 "_codecs_iso2022.c"
      case 2: // $bb1
        HEAP[$0]=65534; //@line 843 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 843 "_codecs_iso2022.c"
      case 3: // $bb2
        HEAP[$0]=65535; //@line 845 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 845 "_codecs_iso2022.c"
      case 4: // $bb3
        var $9=HEAP[$length_addr]; //@line 847 "_codecs_iso2022.c"
        var $10=HEAP[$9]; //@line 847 "_codecs_iso2022.c"
        var $11=((($10))|0)!=2; //@line 847 "_codecs_iso2022.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 847 "_codecs_iso2022.c"
      case 5: // $bb4
        HEAP[$0]=65535; //@line 848 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 848 "_codecs_iso2022.c"
      case 6: // $bb5
        var $12=HEAP[$coded]; //@line 850 "_codecs_iso2022.c"
        var $13=unSign(($12), 16, 0); //@line 850 "_codecs_iso2022.c"
        HEAP[$0]=$13; //@line 850 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 850 "_codecs_iso2022.c"
      case 7: // $bb6
        HEAP[$0]=65535; //@line 852 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 852 "_codecs_iso2022.c"
      case 8: // $bb7
        var $14=HEAP[$0]; //@line 843 "_codecs_iso2022.c"
        HEAP[$retval]=$14; //@line 843 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 843 "_codecs_iso2022.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 843 "_codecs_iso2022.c"
        var $retval89=((($retval8)) & 65535); //@line 843 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval89; //@line 843 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2000_2_encoder($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $coded=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        var $1=HEAP[$data_addr]; //@line 859 "_codecs_iso2022.c"
        var $2=HEAP[$length_addr]; //@line 859 "_codecs_iso2022.c"
        var $3=_jisx0213_encoder($1, $2, 2000); //@line 859 "_codecs_iso2022.c"
        HEAP[$coded]=$3; //@line 859 "_codecs_iso2022.c"
        var $4=HEAP[$coded]; //@line 860 "_codecs_iso2022.c"
        var $5=reSign(($4), 16, 0)==-1; //@line 860 "_codecs_iso2022.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 860 "_codecs_iso2022.c"
      case 1: // $bb
        var $6=HEAP[$coded]; //@line 860 "_codecs_iso2022.c"
        var $7=reSign(($6), 16, 0)==-2; //@line 860 "_codecs_iso2022.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 860 "_codecs_iso2022.c"
      case 2: // $bb1
        var $8=HEAP[$coded]; //@line 861 "_codecs_iso2022.c"
        var $9=unSign(($8), 16, 0); //@line 861 "_codecs_iso2022.c"
        HEAP[$0]=$9; //@line 861 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 861 "_codecs_iso2022.c"
      case 3: // $bb2
        var $10=HEAP[$coded]; //@line 862 "_codecs_iso2022.c"
        var $11=reSign(($10), 16, 0) < 0; //@line 862 "_codecs_iso2022.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 862 "_codecs_iso2022.c"
      case 4: // $bb3
        var $12=HEAP[$coded]; //@line 863 "_codecs_iso2022.c"
        var $13=unSign(($12), 16, 0); //@line 863 "_codecs_iso2022.c"
        var $14=($13) & 32767; //@line 863 "_codecs_iso2022.c"
        HEAP[$0]=$14; //@line 863 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 863 "_codecs_iso2022.c"
      case 5: // $bb4
        HEAP[$0]=65535; //@line 865 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 865 "_codecs_iso2022.c"
      case 6: // $bb5
        var $15=HEAP[$0]; //@line 861 "_codecs_iso2022.c"
        HEAP[$retval]=$15; //@line 861 "_codecs_iso2022.c"
        __label__ = 7; break; //@line 861 "_codecs_iso2022.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 861 "_codecs_iso2022.c"
        var $retval67=((($retval6)) & 65535); //@line 861 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval67; //@line 861 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2004_1_encoder($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $coded=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        var $1=HEAP[$data_addr]; //@line 871 "_codecs_iso2022.c"
        var $2=HEAP[$length_addr]; //@line 871 "_codecs_iso2022.c"
        var $3=_jisx0213_encoder($1, $2, 0); //@line 871 "_codecs_iso2022.c"
        HEAP[$coded]=$3; //@line 871 "_codecs_iso2022.c"
        var $4=HEAP[$coded]; //@line 872 "_codecs_iso2022.c"
        var $5=reSign(($4), 16, 0)==-1; //@line 872 "_codecs_iso2022.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 872 "_codecs_iso2022.c"
      case 1: // $bb
        var $6=HEAP[$coded]; //@line 872 "_codecs_iso2022.c"
        var $7=reSign(($6), 16, 0)==-2; //@line 872 "_codecs_iso2022.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 872 "_codecs_iso2022.c"
      case 2: // $bb1
        var $8=HEAP[$coded]; //@line 873 "_codecs_iso2022.c"
        var $9=unSign(($8), 16, 0); //@line 873 "_codecs_iso2022.c"
        HEAP[$0]=$9; //@line 873 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 873 "_codecs_iso2022.c"
      case 3: // $bb2
        var $10=HEAP[$coded]; //@line 874 "_codecs_iso2022.c"
        var $11=reSign(($10), 16, 0) < 0; //@line 874 "_codecs_iso2022.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 874 "_codecs_iso2022.c"
      case 4: // $bb3
        HEAP[$0]=65535; //@line 875 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 875 "_codecs_iso2022.c"
      case 5: // $bb4
        var $12=HEAP[$coded]; //@line 877 "_codecs_iso2022.c"
        var $13=unSign(($12), 16, 0); //@line 877 "_codecs_iso2022.c"
        HEAP[$0]=$13; //@line 877 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 877 "_codecs_iso2022.c"
      case 6: // $bb5
        var $14=HEAP[$0]; //@line 873 "_codecs_iso2022.c"
        HEAP[$retval]=$14; //@line 873 "_codecs_iso2022.c"
        __label__ = 7; break; //@line 873 "_codecs_iso2022.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 873 "_codecs_iso2022.c"
        var $retval67=((($retval6)) & 65535); //@line 873 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval67; //@line 873 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2004_1_encoder_paironly($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 22; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $coded=__stackBase__+16;
        var $ilength=__stackBase__+18;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        var $1=HEAP[$length_addr]; //@line 884 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 884 "_codecs_iso2022.c"
        HEAP[$ilength]=$2; //@line 884 "_codecs_iso2022.c"
        var $3=HEAP[$data_addr]; //@line 886 "_codecs_iso2022.c"
        var $4=HEAP[$length_addr]; //@line 886 "_codecs_iso2022.c"
        var $5=_jisx0213_encoder($3, $4, 0); //@line 886 "_codecs_iso2022.c"
        HEAP[$coded]=$5; //@line 886 "_codecs_iso2022.c"
        var $6=HEAP[$ilength]; //@line 887 "_codecs_iso2022.c"
        if ($6 == 1) {
          __label__ = 1; break;
        }
        else if ($6 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $7=HEAP[$coded]; //@line 889 "_codecs_iso2022.c"
        var $8=reSign(($7), 16, 0)==-2; //@line 889 "_codecs_iso2022.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 889 "_codecs_iso2022.c"
      case 2: // $bb1
        HEAP[$0]=65534; //@line 890 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 890 "_codecs_iso2022.c"
      case 3: // $bb2
        HEAP[$0]=65535; //@line 892 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 892 "_codecs_iso2022.c"
      case 4: // $bb3
        var $9=HEAP[$length_addr]; //@line 894 "_codecs_iso2022.c"
        var $10=HEAP[$9]; //@line 894 "_codecs_iso2022.c"
        var $11=((($10))|0)!=2; //@line 894 "_codecs_iso2022.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 894 "_codecs_iso2022.c"
      case 5: // $bb4
        HEAP[$0]=65535; //@line 895 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 895 "_codecs_iso2022.c"
      case 6: // $bb5
        var $12=HEAP[$coded]; //@line 897 "_codecs_iso2022.c"
        var $13=unSign(($12), 16, 0); //@line 897 "_codecs_iso2022.c"
        HEAP[$0]=$13; //@line 897 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 897 "_codecs_iso2022.c"
      case 7: // $bb6
        HEAP[$0]=65535; //@line 899 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 899 "_codecs_iso2022.c"
      case 8: // $bb7
        var $14=HEAP[$0]; //@line 890 "_codecs_iso2022.c"
        HEAP[$retval]=$14; //@line 890 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 890 "_codecs_iso2022.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 890 "_codecs_iso2022.c"
        var $retval89=((($retval8)) & 65535); //@line 890 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval89; //@line 890 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2004_2_encoder($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $coded=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        var $1=HEAP[$data_addr]; //@line 906 "_codecs_iso2022.c"
        var $2=HEAP[$length_addr]; //@line 906 "_codecs_iso2022.c"
        var $3=_jisx0213_encoder($1, $2, 0); //@line 906 "_codecs_iso2022.c"
        HEAP[$coded]=$3; //@line 906 "_codecs_iso2022.c"
        var $4=HEAP[$coded]; //@line 907 "_codecs_iso2022.c"
        var $5=reSign(($4), 16, 0)==-1; //@line 907 "_codecs_iso2022.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 907 "_codecs_iso2022.c"
      case 1: // $bb
        var $6=HEAP[$coded]; //@line 907 "_codecs_iso2022.c"
        var $7=reSign(($6), 16, 0)==-2; //@line 907 "_codecs_iso2022.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 907 "_codecs_iso2022.c"
      case 2: // $bb1
        var $8=HEAP[$coded]; //@line 908 "_codecs_iso2022.c"
        var $9=unSign(($8), 16, 0); //@line 908 "_codecs_iso2022.c"
        HEAP[$0]=$9; //@line 908 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 908 "_codecs_iso2022.c"
      case 3: // $bb2
        var $10=HEAP[$coded]; //@line 909 "_codecs_iso2022.c"
        var $11=reSign(($10), 16, 0) < 0; //@line 909 "_codecs_iso2022.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 909 "_codecs_iso2022.c"
      case 4: // $bb3
        var $12=HEAP[$coded]; //@line 910 "_codecs_iso2022.c"
        var $13=unSign(($12), 16, 0); //@line 910 "_codecs_iso2022.c"
        var $14=($13) & 32767; //@line 910 "_codecs_iso2022.c"
        HEAP[$0]=$14; //@line 910 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 910 "_codecs_iso2022.c"
      case 5: // $bb4
        HEAP[$0]=65535; //@line 912 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 912 "_codecs_iso2022.c"
      case 6: // $bb5
        var $15=HEAP[$0]; //@line 908 "_codecs_iso2022.c"
        HEAP[$retval]=$15; //@line 908 "_codecs_iso2022.c"
        __label__ = 7; break; //@line 908 "_codecs_iso2022.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 908 "_codecs_iso2022.c"
        var $retval67=((($retval6)) & 65535); //@line 908 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval67; //@line 908 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0201_r_decoder($data) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $u=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        var $1=HEAP[$data_addr]; //@line 919 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 919 "_codecs_iso2022.c"
        var $3=unSign(($2), 8, 0) <= 91; //@line 919 "_codecs_iso2022.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 919 "_codecs_iso2022.c"
      case 1: // $bb
        var $4=HEAP[$data_addr]; //@line 919 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 919 "_codecs_iso2022.c"
        var $6=unSign(($5), 8, 0); //@line 919 "_codecs_iso2022.c"
        HEAP[$u]=$6; //@line 919 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 919 "_codecs_iso2022.c"
      case 2: // $bb1
        var $7=HEAP[$data_addr]; //@line 919 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 919 "_codecs_iso2022.c"
        var $9=reSign(($8), 8, 0)==92; //@line 919 "_codecs_iso2022.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 919 "_codecs_iso2022.c"
      case 3: // $bb2
        HEAP[$u]=165; //@line 919 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 919 "_codecs_iso2022.c"
      case 4: // $bb3
        var $10=HEAP[$data_addr]; //@line 919 "_codecs_iso2022.c"
        var $11=HEAP[$10]; //@line 919 "_codecs_iso2022.c"
        var $12=unSign(($11), 8, 0) <= 125; //@line 919 "_codecs_iso2022.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 919 "_codecs_iso2022.c"
      case 5: // $bb4
        var $13=HEAP[$data_addr]; //@line 919 "_codecs_iso2022.c"
        var $14=HEAP[$13]; //@line 919 "_codecs_iso2022.c"
        var $15=unSign(($14), 8, 0); //@line 919 "_codecs_iso2022.c"
        HEAP[$u]=$15; //@line 919 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 919 "_codecs_iso2022.c"
      case 6: // $bb5
        var $16=HEAP[$data_addr]; //@line 919 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 919 "_codecs_iso2022.c"
        var $18=reSign(($17), 8, 0)==126; //@line 919 "_codecs_iso2022.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 919 "_codecs_iso2022.c"
      case 7: // $bb6
        HEAP[$u]=8254; //@line 919 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 919 "_codecs_iso2022.c"
      case 8: // $bb7
        var $19=HEAP[$data_addr]; //@line 919 "_codecs_iso2022.c"
        var $20=HEAP[$19]; //@line 919 "_codecs_iso2022.c"
        var $21=reSign(($20), 8, 0)==127; //@line 919 "_codecs_iso2022.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 919 "_codecs_iso2022.c"
      case 9: // $bb8
        HEAP[$u]=127; //@line 919 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 919 "_codecs_iso2022.c"
      case 10: // $bb9
        HEAP[$0]=65535; //@line 920 "_codecs_iso2022.c"
        __label__ = 12; break; //@line 920 "_codecs_iso2022.c"
      case 11: // $bb10
        var $22=HEAP[$u]; //@line 921 "_codecs_iso2022.c"
        HEAP[$0]=$22; //@line 921 "_codecs_iso2022.c"
        __label__ = 12; break; //@line 921 "_codecs_iso2022.c"
      case 12: // $bb11
        var $23=HEAP[$0]; //@line 920 "_codecs_iso2022.c"
        HEAP[$retval]=$23; //@line 920 "_codecs_iso2022.c"
        __label__ = 13; break; //@line 920 "_codecs_iso2022.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 920 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 920 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0201_r_encoder($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $coded=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        var $1=HEAP[$data_addr]; //@line 928 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 928 "_codecs_iso2022.c"
        var $3=((($2))>>>0) > 127; //@line 928 "_codecs_iso2022.c"
        if ($3) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 928 "_codecs_iso2022.c"
      case 1: // $bb
        var $4=HEAP[$data_addr]; //@line 928 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 928 "_codecs_iso2022.c"
        var $6=((($5))|0)==92; //@line 928 "_codecs_iso2022.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 928 "_codecs_iso2022.c"
      case 2: // $bb1
        var $7=HEAP[$data_addr]; //@line 928 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 928 "_codecs_iso2022.c"
        var $9=((($8))|0)==126; //@line 928 "_codecs_iso2022.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 928 "_codecs_iso2022.c"
      case 3: // $bb2
        var $10=HEAP[$data_addr]; //@line 928 "_codecs_iso2022.c"
        var $11=HEAP[$10]; //@line 928 "_codecs_iso2022.c"
        var $12=((($11)) & 65535); //@line 928 "_codecs_iso2022.c"
        HEAP[$coded]=$12; //@line 928 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 928 "_codecs_iso2022.c"
      case 4: // $bb3
        var $13=HEAP[$data_addr]; //@line 928 "_codecs_iso2022.c"
        var $14=HEAP[$13]; //@line 928 "_codecs_iso2022.c"
        var $15=((($14))|0)==165; //@line 928 "_codecs_iso2022.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 928 "_codecs_iso2022.c"
      case 5: // $bb4
        HEAP[$coded]=92; //@line 928 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 928 "_codecs_iso2022.c"
      case 6: // $bb5
        var $16=HEAP[$data_addr]; //@line 928 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 928 "_codecs_iso2022.c"
        var $18=((($17))|0)==8254; //@line 928 "_codecs_iso2022.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 928 "_codecs_iso2022.c"
      case 7: // $bb6
        HEAP[$coded]=126; //@line 928 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 928 "_codecs_iso2022.c"
      case 8: // $bb7
        HEAP[$0]=65535; //@line 929 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 929 "_codecs_iso2022.c"
      case 9: // $bb8
        var $19=HEAP[$coded]; //@line 930 "_codecs_iso2022.c"
        var $20=unSign(($19), 16, 0); //@line 930 "_codecs_iso2022.c"
        HEAP[$0]=$20; //@line 930 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 930 "_codecs_iso2022.c"
      case 10: // $bb9
        var $21=HEAP[$0]; //@line 929 "_codecs_iso2022.c"
        HEAP[$retval]=$21; //@line 929 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 929 "_codecs_iso2022.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 929 "_codecs_iso2022.c"
        var $retval1011=((($retval10)) & 65535); //@line 929 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval1011; //@line 929 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0201_k_decoder($data) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $u=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        var $1=HEAP[$data_addr]; //@line 937 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 937 "_codecs_iso2022.c"
        var $3=($2) ^ -128; //@line 937 "_codecs_iso2022.c"
        var $4=unSign(($3), 8, 0) <= 160; //@line 937 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 937 "_codecs_iso2022.c"
      case 1: // $bb
        var $5=HEAP[$data_addr]; //@line 937 "_codecs_iso2022.c"
        var $6=HEAP[$5]; //@line 937 "_codecs_iso2022.c"
        var $7=($6) ^ -128; //@line 937 "_codecs_iso2022.c"
        var $8=unSign(($7), 8, 0) > 223; //@line 937 "_codecs_iso2022.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 937 "_codecs_iso2022.c"
      case 2: // $bb1
        var $9=HEAP[$data_addr]; //@line 937 "_codecs_iso2022.c"
        var $10=HEAP[$9]; //@line 937 "_codecs_iso2022.c"
        var $11=($10) ^ -128; //@line 937 "_codecs_iso2022.c"
        var $12=unSign(($11), 8, 0); //@line 937 "_codecs_iso2022.c"
        var $13=((($12) + 65216)&4294967295); //@line 937 "_codecs_iso2022.c"
        HEAP[$u]=$13; //@line 937 "_codecs_iso2022.c"
        var $14=HEAP[$u]; //@line 939 "_codecs_iso2022.c"
        HEAP[$0]=$14; //@line 939 "_codecs_iso2022.c"
        __label__ = 4; break; //@line 939 "_codecs_iso2022.c"
      case 3: // $bb2
        HEAP[$0]=65535; //@line 938 "_codecs_iso2022.c"
        __label__ = 4; break; //@line 938 "_codecs_iso2022.c"
      case 4: // $bb3
        var $15=HEAP[$0]; //@line 938 "_codecs_iso2022.c"
        HEAP[$retval]=$15; //@line 938 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 938 "_codecs_iso2022.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 938 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 938 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0201_k_encoder($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $coded=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        var $1=HEAP[$data_addr]; //@line 946 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 946 "_codecs_iso2022.c"
        var $3=((($2))>>>0) <= 65376; //@line 946 "_codecs_iso2022.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 946 "_codecs_iso2022.c"
      case 1: // $bb
        var $4=HEAP[$data_addr]; //@line 946 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 946 "_codecs_iso2022.c"
        var $6=((($5))>>>0) > 65439; //@line 946 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 946 "_codecs_iso2022.c"
      case 2: // $bb1
        var $7=HEAP[$data_addr]; //@line 946 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 946 "_codecs_iso2022.c"
        var $9=((($8)) & 65535); //@line 946 "_codecs_iso2022.c"
        var $10=((($9) - -320)&65535); //@line 946 "_codecs_iso2022.c"
        HEAP[$coded]=$10; //@line 946 "_codecs_iso2022.c"
        var $11=HEAP[$coded]; //@line 948 "_codecs_iso2022.c"
        var $12=((($11) - 128)&65535); //@line 948 "_codecs_iso2022.c"
        var $13=unSign(($12), 16, 0); //@line 948 "_codecs_iso2022.c"
        HEAP[$0]=$13; //@line 948 "_codecs_iso2022.c"
        __label__ = 4; break; //@line 948 "_codecs_iso2022.c"
      case 3: // $bb2
        HEAP[$0]=65535; //@line 947 "_codecs_iso2022.c"
        __label__ = 4; break; //@line 947 "_codecs_iso2022.c"
      case 4: // $bb3
        var $14=HEAP[$0]; //@line 947 "_codecs_iso2022.c"
        HEAP[$retval]=$14; //@line 947 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 947 "_codecs_iso2022.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 947 "_codecs_iso2022.c"
        var $retval45=((($retval4)) & 65535); //@line 947 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 947 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gb2312_init() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $_alloca_point_=0;
        var $1=HEAP[_initialized_10822]; //@line 956 "_codecs_iso2022.c"
        var $2=((($1))|0)==0; //@line 956 "_codecs_iso2022.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 956 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=_importmap(((__str27)&4294967295), ((__str28)&4294967295), _gbcommon_encmap, 0); //@line 956 "_codecs_iso2022.c"
        var $4=((($3))|0)!=0; //@line 956 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 956 "_codecs_iso2022.c"
      case 2: // $bb1
        var $5=_importmap(((__str27)&4294967295), ((__str29)&4294967295), 0, _gb2312_decmap); //@line 956 "_codecs_iso2022.c"
        var $6=((($5))|0)!=0; //@line 956 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 956 "_codecs_iso2022.c"
      case 3: // $bb2
        HEAP[$0]=-1; //@line 959 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 959 "_codecs_iso2022.c"
      case 4: // $bb3
        HEAP[_initialized_10822]=1; //@line 960 "_codecs_iso2022.c"
        HEAP[$0]=0; //@line 961 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 961 "_codecs_iso2022.c"
      case 5: // $bb4
        var $7=HEAP[$0]; //@line 959 "_codecs_iso2022.c"
        HEAP[$retval]=$7; //@line 959 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 959 "_codecs_iso2022.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 959 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 959 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gb2312_decoder($data) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $u=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        var $1=HEAP[_gb2312_decmap]; //@line 968 "_codecs_iso2022.c"
        var $2=HEAP[$data_addr]; //@line 968 "_codecs_iso2022.c"
        var $3=(($2)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 968 "_codecs_iso2022.c"
        var $5=unSign(($4), 8, 0); //@line 968 "_codecs_iso2022.c"
        var $6=(($1+8*$5)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $7=(($6)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 968 "_codecs_iso2022.c"
        var $9=$8; //@line 968 "_codecs_iso2022.c"
        var $10=($9)==0; //@line 968 "_codecs_iso2022.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 968 "_codecs_iso2022.c"
      case 1: // $bb
        var $11=HEAP[$data_addr]; //@line 968 "_codecs_iso2022.c"
        var $12=(($11+1)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 968 "_codecs_iso2022.c"
        var $14=HEAP[_gb2312_decmap]; //@line 968 "_codecs_iso2022.c"
        var $15=HEAP[$data_addr]; //@line 968 "_codecs_iso2022.c"
        var $16=(($15)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 968 "_codecs_iso2022.c"
        var $18=unSign(($17), 8, 0); //@line 968 "_codecs_iso2022.c"
        var $19=(($14+8*$18)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $20=(($19+4)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 968 "_codecs_iso2022.c"
        var $22=unSign(($13), 8, 0) < unSign(($21), 8, 0); //@line 968 "_codecs_iso2022.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 968 "_codecs_iso2022.c"
      case 2: // $bb1
        var $23=HEAP[$data_addr]; //@line 968 "_codecs_iso2022.c"
        var $24=(($23+1)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 968 "_codecs_iso2022.c"
        var $26=HEAP[_gb2312_decmap]; //@line 968 "_codecs_iso2022.c"
        var $27=HEAP[$data_addr]; //@line 968 "_codecs_iso2022.c"
        var $28=(($27)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 968 "_codecs_iso2022.c"
        var $30=unSign(($29), 8, 0); //@line 968 "_codecs_iso2022.c"
        var $31=(($26+8*$30)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $32=(($31+5)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 968 "_codecs_iso2022.c"
        var $34=unSign(($25), 8, 0) > unSign(($33), 8, 0); //@line 968 "_codecs_iso2022.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 968 "_codecs_iso2022.c"
      case 3: // $bb2
        var $35=HEAP[_gb2312_decmap]; //@line 968 "_codecs_iso2022.c"
        var $36=HEAP[$data_addr]; //@line 968 "_codecs_iso2022.c"
        var $37=(($36)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $38=HEAP[$37]; //@line 968 "_codecs_iso2022.c"
        var $39=unSign(($38), 8, 0); //@line 968 "_codecs_iso2022.c"
        var $40=(($35+8*$39)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $41=(($40)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 968 "_codecs_iso2022.c"
        var $43=HEAP[$data_addr]; //@line 968 "_codecs_iso2022.c"
        var $44=(($43+1)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 968 "_codecs_iso2022.c"
        var $46=unSign(($45), 8, 0); //@line 968 "_codecs_iso2022.c"
        var $47=HEAP[_gb2312_decmap]; //@line 968 "_codecs_iso2022.c"
        var $48=HEAP[$data_addr]; //@line 968 "_codecs_iso2022.c"
        var $49=(($48)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 968 "_codecs_iso2022.c"
        var $51=unSign(($50), 8, 0); //@line 968 "_codecs_iso2022.c"
        var $52=(($47+8*$51)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $53=(($52+4)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $54=HEAP[$53]; //@line 968 "_codecs_iso2022.c"
        var $55=unSign(($54), 8, 0); //@line 968 "_codecs_iso2022.c"
        var $56=((($46) - ($55))&4294967295); //@line 968 "_codecs_iso2022.c"
        var $57=(($42+2*$56)&4294967295); //@line 968 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 968 "_codecs_iso2022.c"
        var $59=unSign(($58), 16, 0); //@line 968 "_codecs_iso2022.c"
        HEAP[$u]=$59; //@line 968 "_codecs_iso2022.c"
        var $60=HEAP[$u]; //@line 968 "_codecs_iso2022.c"
        var $61=((($60))|0)==65534; //@line 968 "_codecs_iso2022.c"
        if ($61) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 968 "_codecs_iso2022.c"
      case 4: // $bb3
        var $62=HEAP[$u]; //@line 969 "_codecs_iso2022.c"
        HEAP[$0]=$62; //@line 969 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 969 "_codecs_iso2022.c"
      case 5: // $bb4
        HEAP[$0]=65535; //@line 971 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 971 "_codecs_iso2022.c"
      case 6: // $bb5
        var $63=HEAP[$0]; //@line 969 "_codecs_iso2022.c"
        HEAP[$retval]=$63; //@line 969 "_codecs_iso2022.c"
        __label__ = 7; break; //@line 969 "_codecs_iso2022.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 969 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 969 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gb2312_encoder($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $coded=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        var $1=HEAP[$length_addr]; //@line 978 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 978 "_codecs_iso2022.c"
        var $3=((($2))|0)!=1; //@line 978 "_codecs_iso2022.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 978 "_codecs_iso2022.c"
      case 1: // $bb
        ___assert_fail(((__str15)&4294967295), ((__str10)&4294967295), 978, ((___PRETTY_FUNCTION___10884)&4294967295)); //@line 978 "_codecs_iso2022.c"
        throw "Reached an unreachable! Original .ll line: 6774"; //@line 978 "_codecs_iso2022.c"
      case 2: // $bb1
        var $4=HEAP[$data_addr]; //@line 979 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 979 "_codecs_iso2022.c"
        var $6=((($5))>>>0) <= 65535; //@line 979 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 979 "_codecs_iso2022.c"
      case 3: // $bb2
        var $7=HEAP[_gbcommon_encmap]; //@line 980 "_codecs_iso2022.c"
        var $8=HEAP[$data_addr]; //@line 980 "_codecs_iso2022.c"
        var $9=HEAP[$8]; //@line 980 "_codecs_iso2022.c"
        var $10=((($9))>>>0) >>> 8; //@line 980 "_codecs_iso2022.c"
        var $11=(($7+8*$10)&4294967295); //@line 980 "_codecs_iso2022.c"
        var $12=(($11)&4294967295); //@line 980 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 980 "_codecs_iso2022.c"
        var $14=$13; //@line 980 "_codecs_iso2022.c"
        var $15=($14)!=0; //@line 980 "_codecs_iso2022.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 980 "_codecs_iso2022.c"
      case 4: // $bb3
        var $16=HEAP[$data_addr]; //@line 980 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 980 "_codecs_iso2022.c"
        var $18=($17) & 255; //@line 980 "_codecs_iso2022.c"
        var $19=HEAP[_gbcommon_encmap]; //@line 980 "_codecs_iso2022.c"
        var $20=HEAP[$data_addr]; //@line 980 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 980 "_codecs_iso2022.c"
        var $22=((($21))>>>0) >>> 8; //@line 980 "_codecs_iso2022.c"
        var $23=(($19+8*$22)&4294967295); //@line 980 "_codecs_iso2022.c"
        var $24=(($23+4)&4294967295); //@line 980 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 980 "_codecs_iso2022.c"
        var $26=unSign(($25), 8, 0); //@line 980 "_codecs_iso2022.c"
        var $27=((($18))>>>0) >= ((($26))>>>0); //@line 980 "_codecs_iso2022.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 980 "_codecs_iso2022.c"
      case 5: // $bb4
        var $28=HEAP[$data_addr]; //@line 980 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 980 "_codecs_iso2022.c"
        var $30=($29) & 255; //@line 980 "_codecs_iso2022.c"
        var $31=HEAP[_gbcommon_encmap]; //@line 980 "_codecs_iso2022.c"
        var $32=HEAP[$data_addr]; //@line 980 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 980 "_codecs_iso2022.c"
        var $34=((($33))>>>0) >>> 8; //@line 980 "_codecs_iso2022.c"
        var $35=(($31+8*$34)&4294967295); //@line 980 "_codecs_iso2022.c"
        var $36=(($35+5)&4294967295); //@line 980 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 980 "_codecs_iso2022.c"
        var $38=unSign(($37), 8, 0); //@line 980 "_codecs_iso2022.c"
        var $39=((($30))>>>0) <= ((($38))>>>0); //@line 980 "_codecs_iso2022.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 980 "_codecs_iso2022.c"
      case 6: // $bb5
        var $40=HEAP[_gbcommon_encmap]; //@line 980 "_codecs_iso2022.c"
        var $41=HEAP[$data_addr]; //@line 980 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 980 "_codecs_iso2022.c"
        var $43=((($42))>>>0) >>> 8; //@line 980 "_codecs_iso2022.c"
        var $44=(($40+8*$43)&4294967295); //@line 980 "_codecs_iso2022.c"
        var $45=(($44)&4294967295); //@line 980 "_codecs_iso2022.c"
        var $46=HEAP[$45]; //@line 980 "_codecs_iso2022.c"
        var $47=HEAP[$data_addr]; //@line 980 "_codecs_iso2022.c"
        var $48=HEAP[$47]; //@line 980 "_codecs_iso2022.c"
        var $49=($48) & 255; //@line 980 "_codecs_iso2022.c"
        var $50=HEAP[_gbcommon_encmap]; //@line 980 "_codecs_iso2022.c"
        var $51=HEAP[$data_addr]; //@line 980 "_codecs_iso2022.c"
        var $52=HEAP[$51]; //@line 980 "_codecs_iso2022.c"
        var $53=((($52))>>>0) >>> 8; //@line 980 "_codecs_iso2022.c"
        var $54=(($50+8*$53)&4294967295); //@line 980 "_codecs_iso2022.c"
        var $55=(($54+4)&4294967295); //@line 980 "_codecs_iso2022.c"
        var $56=HEAP[$55]; //@line 980 "_codecs_iso2022.c"
        var $57=unSign(($56), 8, 0); //@line 980 "_codecs_iso2022.c"
        var $58=((($49) - ($57))&4294967295); //@line 980 "_codecs_iso2022.c"
        var $59=(($46+2*$58)&4294967295); //@line 980 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 980 "_codecs_iso2022.c"
        HEAP[$coded]=$60; //@line 980 "_codecs_iso2022.c"
        var $61=HEAP[$coded]; //@line 980 "_codecs_iso2022.c"
        var $62=reSign(($61), 16, 0)!=-1; //@line 980 "_codecs_iso2022.c"
        if ($62) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 980 "_codecs_iso2022.c"
      case 7: // $bb6
        var $63=HEAP[$coded]; //@line 981 "_codecs_iso2022.c"
        var $64=reSign(($63), 16, 0) >= 0; //@line 981 "_codecs_iso2022.c"
        if ($64) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 981 "_codecs_iso2022.c"
      case 8: // $bb7
        var $65=HEAP[$coded]; //@line 982 "_codecs_iso2022.c"
        var $66=unSign(($65), 16, 0); //@line 982 "_codecs_iso2022.c"
        HEAP[$0]=$66; //@line 982 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 982 "_codecs_iso2022.c"
      case 9: // $bb8
        HEAP[$0]=65535; //@line 985 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 985 "_codecs_iso2022.c"
      case 10: // $bb9
        var $67=HEAP[$0]; //@line 982 "_codecs_iso2022.c"
        HEAP[$retval]=$67; //@line 982 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 982 "_codecs_iso2022.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 982 "_codecs_iso2022.c"
        var $retval1011=((($retval10)) & 65535); //@line 982 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval1011; //@line 982 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dummy_decoder($data) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$0]=65535; //@line 992 "_codecs_iso2022.c"
        var $1=HEAP[$0]; //@line 992 "_codecs_iso2022.c"
        HEAP[$retval]=$1; //@line 992 "_codecs_iso2022.c"
        __label__ = 1; break; //@line 992 "_codecs_iso2022.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 992 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 992 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dummy_encoder($data, $length) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr=__stackBase__;
        var $length_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$data_addr]=$data;
        HEAP[$length_addr]=$length;
        HEAP[$0]=65535; //@line 998 "_codecs_iso2022.c"
        var $1=HEAP[$0]; //@line 998 "_codecs_iso2022.c"
        HEAP[$retval]=$1; //@line 998 "_codecs_iso2022.c"
        __label__ = 1; break; //@line 998 "_codecs_iso2022.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 998 "_codecs_iso2022.c"
        var $retval12=((($retval1)) & 65535); //@line 998 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 998 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_codecs_iso2022() {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str37)&4294967295), ((___methods)&4294967295), 0, 0, 1013); //@line 1131 "_codecs_iso2022.c"
        HEAP[$m]=$0; //@line 1131 "_codecs_iso2022.c"
        var $1=HEAP[$m]; //@line 1131 "_codecs_iso2022.c"
        var $2=($1)!=0; //@line 1131 "_codecs_iso2022.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1131 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=HEAP[$m]; //@line 1131 "_codecs_iso2022.c"
        var $4=_register_maps($3); //@line 1131 "_codecs_iso2022.c"
        __label__ = 2; break; //@line 1131 "_codecs_iso2022.c"
      case 2: // $bb1
        __label__ = 3; break; //@line 1131 "_codecs_iso2022.c"
      case 3: // $return
        STACKTOP = __stackBase__;
        return; //@line 1131 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_codecs_iso2022"] = _init_codecs_iso2022;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_getcodec,0,_ksx1001_init,0,_ksx1001_decoder,0,_ksx1001_encoder,0,_jisx0208_init,0,_jisx0208_decoder,0,_jisx0208_encoder,0,_jisx0201_r_decoder,0,_jisx0201_r_encoder,0,_jisx0212_init,0,_jisx0212_decoder,0,_jisx0212_encoder,0,_gb2312_init,0,_gb2312_decoder,0,_gb2312_encoder,0,_dummy_decoder,0,_dummy_encoder,0,_jisx0213_init,0,_jisx0213_2004_1_decoder,0,_jisx0213_2004_1_encoder_paironly,0,_jisx0213_2004_1_encoder,0,_jisx0213_2004_2_decoder,0,_jisx0213_2004_2_encoder,0,_jisx0213_2000_1_decoder,0,_jisx0213_2000_1_encoder_paironly,0,_jisx0213_2000_1_encoder,0,_jisx0213_2000_2_decoder,0,_jisx0213_2000_2_encoder,0,_jisx0201_k_decoder,0,_jisx0201_k_encoder,0,_iso2022_codec_init,0,_iso2022_encode,0,_iso2022_encode_init,0,_iso2022_encode_reset,0,_iso2022_decode,0,_iso2022_decode_init,0,_iso2022_decode_reset,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_cofunc_8453=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str=allocate([95,109,117,108,116,105,98,121,116,101,99,111,100,101,99,0] /* _multibytecodec\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([95,95,99,114,101,97,116,101,95,99,111,100,101,99,0] /* __create_codec\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([101,110,99,111,100,105,110,103,32,110,97,109,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,46,0] /* encoding name must b */, "i8", ALLOC_NORMAL);
_codec_list=allocate(1, "%struct.MultibyteCodec*", ALLOC_NORMAL);
__str3=allocate([110,111,32,115,117,99,104,32,99,111,100,101,99,32,105,115,32,115,117,112,112,111,114,116,101,100,46,0] /* no such codec is sup */, "i8", ALLOC_NORMAL);
__str4=allocate([109,117,108,116,105,98,121,116,101,99,111,100,101,99,46,95,95,109,97,112,95,42,0] /* multibytecodec.__map */, "i8", ALLOC_NORMAL);
__str5=allocate([103,101,116,99,111,100,101,99,0] /* getcodec\00 */, "i8", ALLOC_NORMAL);
__str6=allocate(1, "i8", ALLOC_NORMAL);
___methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_mapping_list=allocate(1, "%struct.dbcs_map*", ALLOC_NORMAL);
__str7=allocate([95,95,109,97,112,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] /* __map_\00\00\00\00\0 */, "i8", ALLOC_NORMAL);
__str8=allocate([109,97,112,32,100,97,116,97,32,109,117,115,116,32,98,101,32,97,32,67,97,112,115,117,108,101,46,0] /* map data must be a C */, "i8", ALLOC_NORMAL);
__str9=allocate([100,115,103,45,62,119,105,100,116,104,32,61,61,32,49,32,124,124,32,100,115,103,45,62,119,105,100,116,104,32,61,61,32,50,0] /* dsg->width == 1 || d */, "i8", ALLOC_NORMAL);
__str10=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,99,106,107,99,111,100,101,99,115,47,95,99,111,100,101,99,115,95,105,115,111,50,48,50,50,46,99,0] /* ../cpython/Modules/c */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8716=allocate([105,115,111,50,48,50,50,95,101,110,99,111,100,101,0] /* iso2022_encode\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([100,115,103,45,62,109,97,114,107,32,33,61,32,39,92,48,39,0] /* dsg->mark != '\5C0'\ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9242=allocate([105,115,111,50,48,50,50,95,100,101,99,111,100,101,0] /* iso2022_decode\00 */, "i8", ALLOC_NORMAL);
_cp949_encmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_ksx1001_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisxcommon_encmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0208_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0212_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0213_bmp_encmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0213_1_bmp_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0213_2_bmp_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0213_emp_encmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0213_1_emp_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0213_2_emp_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_gbcommon_encmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_gb2312_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_initialized_9477=allocate(1, "i32", ALLOC_NORMAL);
__str12=allocate([95,99,111,100,101,99,115,95,107,114,0] /* _codecs_kr\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([95,95,109,97,112,95,99,112,57,52,57,0] /* __map_cp949\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([95,95,109,97,112,95,107,115,120,49,48,48,49,0] /* __map_ksx1001\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([42,108,101,110,103,116,104,32,61,61,32,49,0] /* _length == 1\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9539=allocate([107,115,120,49,48,48,49,95,101,110,99,111,100,101,114,0] /* ksx1001_encoder\00 */, "i8", ALLOC_NORMAL);
_initialized_9598=allocate(1, "i32", ALLOC_NORMAL);
__str16=allocate([95,99,111,100,101,99,115,95,106,112,0] /* _codecs_jp\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([95,95,109,97,112,95,106,105,115,120,99,111,109,109,111,110,0] /* __map_jisxcommon\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([95,95,109,97,112,95,106,105,115,120,48,50,48,56,0] /* __map_jisx0208\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9665=allocate([106,105,115,120,48,50,48,56,95,101,110,99,111,100,101,114,0] /* jisx0208_encoder\00 */, "i8", ALLOC_NORMAL);
_initialized_9727=allocate(1, "i32", ALLOC_NORMAL);
__str19=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,50,0] /* __map_jisx0212\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9789=allocate([106,105,115,120,48,50,49,50,95,101,110,99,111,100,101,114,0] /* jisx0212_encoder\00 */, "i8", ALLOC_NORMAL);
_initialized_9849=allocate(1, "i32", ALLOC_NORMAL);
__str20=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,98,109,112,0] /* __map_jisx0213_bmp\0 */, "i8", ALLOC_NORMAL);
__str21=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,49,95,98,109,112,0] /* __map_jisx0213_1_bmp */, "i8", ALLOC_NORMAL);
__str22=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,50,95,98,109,112,0] /* __map_jisx0213_2_bmp */, "i8", ALLOC_NORMAL);
__str23=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,101,109,112,0] /* __map_jisx0213_emp\0 */, "i8", ALLOC_NORMAL);
__str24=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,49,95,101,109,112,0] /* __map_jisx0213_1_emp */, "i8", ALLOC_NORMAL);
__str25=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,50,95,101,109,112,0] /* __map_jisx0213_2_emp */, "i8", ALLOC_NORMAL);
_jisx0213_pair_decmap=allocate(1, "%struct.widedbcs_index*", ALLOC_NORMAL);
_jisx0213_pair_encmap=allocate(1, "%struct.pair_encodemap*", ALLOC_NORMAL);
__str26=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,112,97,105,114,0] /* __map_jisx0213_pair\ */, "i8", ALLOC_NORMAL);
_initialized_10822=allocate(1, "i32", ALLOC_NORMAL);
__str27=allocate([95,99,111,100,101,99,115,95,99,110,0] /* _codecs_cn\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([95,95,109,97,112,95,103,98,99,111,109,109,111,110,0] /* __map_gbcommon\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([95,95,109,97,112,95,103,98,50,51,49,50,0] /* __map_gb2312\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10884=allocate([103,98,50,51,49,50,95,101,110,99,111,100,101,114,0] /* gb2312_encoder\00 */, "i8", ALLOC_NORMAL);
_iso2022_kr_designations=allocate([-61, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_kr_config=allocate(8, ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
_iso2022_jp_designations=allocate([-62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_jp_config=allocate([5, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
_iso2022_jp_1_designations=allocate([-62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_jp_1_config=allocate([5, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
_iso2022_jp_2_designations=allocate([-62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -61, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -63, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_jp_2_config=allocate([7, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
_iso2022_jp_2004_designations=allocate([-47, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -47, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -48, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_jp_2004_config=allocate([5, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
_iso2022_jp_3_designations=allocate([-49, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -49, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -48, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_jp_3_config=allocate([5, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
_iso2022_jp_ext_designations=allocate([-62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_jp_ext_config=allocate([5, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
__mapping_list=allocate(12, ["i8*",0,0,0,"%struct.dbcs_index*",0,0,0,"%struct.dbcs_index*",0,0,0], ALLOC_NORMAL);
__str30=allocate([105,115,111,50,48,50,50,95,107,114,0] /* iso2022_kr\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([105,115,111,50,48,50,50,95,106,112,0] /* iso2022_jp\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([105,115,111,50,48,50,50,95,106,112,95,49,0] /* iso2022_jp_1\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([105,115,111,50,48,50,50,95,106,112,95,50,0] /* iso2022_jp_2\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([105,115,111,50,48,50,50,95,106,112,95,50,48,48,52,0] /* iso2022_jp_2004\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([105,115,111,50,48,50,50,95,106,112,95,51,0] /* iso2022_jp_3\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([105,115,111,50,48,50,50,95,106,112,95,101,120,116,0] /* iso2022_jp_ext\00 */, "i8", ALLOC_NORMAL);
__codec_list=allocate(288, ["i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str37=allocate([95,99,111,100,101,99,115,95,105,115,111,50,48,50,50,0] /* _codecs_iso2022\00 */, "i8", ALLOC_NORMAL);
HEAP[_codec_list]=((__codec_list)&4294967295);
HEAP[___methods]=((__str5)&4294967295);
HEAP[___methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[___methods+12]=((__str6)&4294967295);
HEAP[_mapping_list]=((__mapping_list)&4294967295);
HEAP[_iso2022_kr_designations+4]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_iso2022_kr_designations+8]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_iso2022_kr_designations+12]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_iso2022_kr_config+4]=((_iso2022_kr_designations)&4294967295);
HEAP[_iso2022_jp_designations+4]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_designations+8]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_designations+12]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_designations+24]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_iso2022_jp_designations+28]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_iso2022_jp_designations+36]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_designations+40]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_designations+44]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_config+4]=((_iso2022_jp_designations)&4294967295);
HEAP[_iso2022_jp_1_designations+4]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_1_designations+8]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_1_designations+12]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_1_designations+20]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_iso2022_jp_1_designations+24]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_iso2022_jp_1_designations+28]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_iso2022_jp_1_designations+40]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_iso2022_jp_1_designations+44]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_iso2022_jp_1_designations+52]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_1_designations+56]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_1_designations+60]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_1_config+4]=((_iso2022_jp_1_designations)&4294967295);
HEAP[_iso2022_jp_2_designations+4]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_2_designations+8]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_2_designations+12]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_2_designations+20]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_iso2022_jp_2_designations+24]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_iso2022_jp_2_designations+28]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_iso2022_jp_2_designations+36]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_iso2022_jp_2_designations+40]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_iso2022_jp_2_designations+44]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_iso2022_jp_2_designations+52]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_iso2022_jp_2_designations+56]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_iso2022_jp_2_designations+60]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_iso2022_jp_2_designations+72]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_iso2022_jp_2_designations+76]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_iso2022_jp_2_designations+84]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_2_designations+88]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_2_designations+92]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_2_designations+104]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_iso2022_jp_2_designations+108]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_iso2022_jp_2_designations+120]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_iso2022_jp_2_designations+124]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_iso2022_jp_2_config+4]=((_iso2022_jp_2_designations)&4294967295);
HEAP[_iso2022_jp_2004_designations+4]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_iso2022_jp_2004_designations+8]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_iso2022_jp_2004_designations+12]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_iso2022_jp_2004_designations+20]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_2004_designations+24]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_2004_designations+28]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_2004_designations+36]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_iso2022_jp_2004_designations+40]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_iso2022_jp_2004_designations+44]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_iso2022_jp_2004_designations+52]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_iso2022_jp_2004_designations+56]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_iso2022_jp_2004_designations+60]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_iso2022_jp_2004_config+4]=((_iso2022_jp_2004_designations)&4294967295);
HEAP[_iso2022_jp_3_designations+4]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_iso2022_jp_3_designations+8]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_iso2022_jp_3_designations+12]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_iso2022_jp_3_designations+20]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_3_designations+24]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_3_designations+28]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_3_designations+36]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_iso2022_jp_3_designations+40]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_iso2022_jp_3_designations+44]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_iso2022_jp_3_designations+52]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_iso2022_jp_3_designations+56]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_iso2022_jp_3_designations+60]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_iso2022_jp_3_config+4]=((_iso2022_jp_3_designations)&4294967295);
HEAP[_iso2022_jp_ext_designations+4]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_ext_designations+8]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_ext_designations+12]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_ext_designations+20]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_iso2022_jp_ext_designations+24]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_iso2022_jp_ext_designations+28]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_iso2022_jp_ext_designations+40]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_iso2022_jp_ext_designations+44]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_iso2022_jp_ext_designations+56]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_iso2022_jp_ext_designations+60]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_iso2022_jp_ext_designations+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_ext_designations+72]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_ext_designations+76]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_ext_config+4]=((_iso2022_jp_ext_designations)&4294967295);
HEAP[__mapping_list]=((__str6)&4294967295);
HEAP[__codec_list]=((__str30)&4294967295);
HEAP[__codec_list+4]=_iso2022_kr_config;
HEAP[__codec_list+8]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+12]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+16]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+20]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+24]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+28]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+32]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+36]=((__str31)&4294967295);
HEAP[__codec_list+40]=_iso2022_jp_config;
HEAP[__codec_list+44]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+48]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+52]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+56]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+60]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+64]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+68]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+72]=((__str32)&4294967295);
HEAP[__codec_list+76]=_iso2022_jp_1_config;
HEAP[__codec_list+80]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+84]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+88]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+92]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+96]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+100]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+104]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+108]=((__str33)&4294967295);
HEAP[__codec_list+112]=_iso2022_jp_2_config;
HEAP[__codec_list+116]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+120]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+124]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+128]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+132]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+136]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+140]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+144]=((__str34)&4294967295);
HEAP[__codec_list+148]=_iso2022_jp_2004_config;
HEAP[__codec_list+152]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+156]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+160]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+164]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+168]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+172]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+176]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+180]=((__str35)&4294967295);
HEAP[__codec_list+184]=_iso2022_jp_3_config;
HEAP[__codec_list+188]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+192]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+196]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+200]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+204]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+208]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+212]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+216]=((__str36)&4294967295);
HEAP[__codec_list+220]=_iso2022_jp_ext_config;
HEAP[__codec_list+224]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+228]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+232]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+236]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+240]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+244]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+248]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+252]=((__str6)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

