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


























  function _search($val, $table, $size) {
    var __stackBase__  = STACKTOP; STACKTOP += 22; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $val_addr=__stackBase__;
        var $table_addr=__stackBase__+2;
        var $size_addr=__stackBase__+6;
        var $retval=__stackBase__+10;
        var $0=__stackBase__+14;
        var $i=__stackBase__+18;
        var $_alloca_point_=0;
        HEAP[$val_addr]=$val;
        HEAP[$table_addr]=$table;
        HEAP[$size_addr]=$size;
        HEAP[$i]=0; //@line 58 "audioop.c"
        __label__ = 4; break; //@line 58 "audioop.c"
      case 1: // $bb
        var $1=HEAP[$table_addr]; //@line 59 "audioop.c"
        var $2=HEAP[$1]; //@line 59 "audioop.c"
        var $3=HEAP[$val_addr]; //@line 59 "audioop.c"
        var $4=reSign(($2), 16, 0) >= reSign(($3), 16, 0); //@line 59 "audioop.c"
        var $5=unSign(($4), 1, 0); //@line 59 "audioop.c"
        var $6=HEAP[$table_addr]; //@line 59 "audioop.c"
        var $7=(($6+2)&4294967295); //@line 59 "audioop.c"
        HEAP[$table_addr]=$7; //@line 59 "audioop.c"
        var $toBool=reSign(($5), 8, 0)!=0; //@line 59 "audioop.c"
        if ($toBool) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 59 "audioop.c"
      case 2: // $bb1
        var $8=HEAP[$i]; //@line 60 "audioop.c"
        var $9=((($8)) & 65535); //@line 60 "audioop.c"
        var $10=reSign(($9), 16, 0); //@line 60 "audioop.c"
        HEAP[$0]=$10; //@line 60 "audioop.c"
        __label__ = 6; break; //@line 60 "audioop.c"
      case 3: // $bb2
        var $11=HEAP[$i]; //@line 58 "audioop.c"
        var $12=((($11) + 1)&4294967295); //@line 58 "audioop.c"
        HEAP[$i]=$12; //@line 58 "audioop.c"
        __label__ = 4; break; //@line 58 "audioop.c"
      case 4: // $bb3
        var $13=HEAP[$i]; //@line 58 "audioop.c"
        var $14=HEAP[$size_addr]; //@line 58 "audioop.c"
        var $15=((($13))|0) < ((($14))|0); //@line 58 "audioop.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 58 "audioop.c"
      case 5: // $bb4
        var $16=HEAP[$size_addr]; //@line 62 "audioop.c"
        var $17=((($16)) & 65535); //@line 62 "audioop.c"
        var $18=reSign(($17), 16, 0); //@line 62 "audioop.c"
        HEAP[$0]=$18; //@line 62 "audioop.c"
        __label__ = 6; break; //@line 62 "audioop.c"
      case 6: // $bb5
        var $19=HEAP[$0]; //@line 60 "audioop.c"
        HEAP[$retval]=$19; //@line 60 "audioop.c"
        __label__ = 7; break; //@line 60 "audioop.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 60 "audioop.c"
        var $retval67=((($retval6)) & 65535); //@line 60 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval67; //@line 60 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _st_14linear2ulaw($pcm_val) {
    var __stackBase__  = STACKTOP; STACKTOP += 15; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 15);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pcm_val_addr=__stackBase__;
        var $retval=__stackBase__+2;
        var $0=__stackBase__+6;
        var $mask=__stackBase__+10;
        var $seg=__stackBase__+12;
        var $uval=__stackBase__+14;
        var $_alloca_point_=0;
        HEAP[$pcm_val_addr]=$pcm_val;
        var $1=HEAP[$pcm_val_addr]; //@line 147 "audioop.c"
        var $2=reSign(($1), 16, 0) >> 2; //@line 147 "audioop.c"
        HEAP[$pcm_val_addr]=$2; //@line 147 "audioop.c"
        var $3=HEAP[$pcm_val_addr]; //@line 151 "audioop.c"
        var $4=reSign(($3), 16, 0) < 0; //@line 151 "audioop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 151 "audioop.c"
      case 1: // $bb
        var $5=HEAP[$pcm_val_addr]; //@line 152 "audioop.c"
        var $6=((0 - ($5))&65535); //@line 152 "audioop.c"
        HEAP[$pcm_val_addr]=$6; //@line 152 "audioop.c"
        HEAP[$mask]=127; //@line 153 "audioop.c"
        __label__ = 3; break; //@line 153 "audioop.c"
      case 2: // $bb1
        HEAP[$mask]=255; //@line 155 "audioop.c"
        __label__ = 3; break; //@line 155 "audioop.c"
      case 3: // $bb2
        var $7=HEAP[$pcm_val_addr]; //@line 157 "audioop.c"
        var $8=reSign(($7), 16, 0) > 32635; //@line 157 "audioop.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 157 "audioop.c"
      case 4: // $bb3
        HEAP[$pcm_val_addr]=32635; //@line 157 "audioop.c"
        __label__ = 5; break; //@line 157 "audioop.c"
      case 5: // $bb4
        var $9=HEAP[$pcm_val_addr]; //@line 158 "audioop.c"
        var $10=((($9) + 33)&65535); //@line 158 "audioop.c"
        HEAP[$pcm_val_addr]=$10; //@line 158 "audioop.c"
        var $11=HEAP[$pcm_val_addr]; //@line 161 "audioop.c"
        var $12=reSign(($11), 16, 0); //@line 161 "audioop.c"
        var $13=((($12)) & 65535); //@line 161 "audioop.c"
        var $14=_search($13, ((_seg_uend)&4294967295), 8); //@line 161 "audioop.c"
        HEAP[$seg]=$14; //@line 161 "audioop.c"
        var $15=HEAP[$seg]; //@line 167 "audioop.c"
        var $16=reSign(($15), 16, 0) > 7; //@line 167 "audioop.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 167 "audioop.c"
      case 6: // $bb5
        var $17=HEAP[$mask]; //@line 168 "audioop.c"
        var $18=((($17)) & 255); //@line 168 "audioop.c"
        var $19=($18) ^ 127; //@line 168 "audioop.c"
        var $20=unSign(($19), 8, 0); //@line 168 "audioop.c"
        HEAP[$0]=$20; //@line 168 "audioop.c"
        __label__ = 8; break; //@line 168 "audioop.c"
      case 7: // $bb6
        var $21=HEAP[$seg]; //@line 170 "audioop.c"
        var $22=((($21)) & 255); //@line 170 "audioop.c"
        var $23=($22) << 4; //@line 170 "audioop.c"
        var $24=HEAP[$pcm_val_addr]; //@line 170 "audioop.c"
        var $25=reSign(($24), 16, 0); //@line 170 "audioop.c"
        var $26=HEAP[$seg]; //@line 170 "audioop.c"
        var $27=reSign(($26), 16, 0); //@line 170 "audioop.c"
        var $28=((($27) + 1)&4294967295); //@line 170 "audioop.c"
        var $29=((($25))|0) >> ((($28))|0); //@line 170 "audioop.c"
        var $30=((($29)) & 255); //@line 170 "audioop.c"
        var $31=($30) & 15; //@line 170 "audioop.c"
        var $32=($23) | ($31); //@line 170 "audioop.c"
        HEAP[$uval]=$32; //@line 170 "audioop.c"
        var $33=HEAP[$mask]; //@line 171 "audioop.c"
        var $34=((($33)) & 255); //@line 171 "audioop.c"
        var $35=HEAP[$uval]; //@line 171 "audioop.c"
        var $36=($34) ^ ($35); //@line 171 "audioop.c"
        var $37=unSign(($36), 8, 0); //@line 171 "audioop.c"
        HEAP[$0]=$37; //@line 171 "audioop.c"
        __label__ = 8; break; //@line 171 "audioop.c"
      case 8: // $bb7
        var $38=HEAP[$0]; //@line 168 "audioop.c"
        HEAP[$retval]=$38; //@line 168 "audioop.c"
        __label__ = 9; break; //@line 168 "audioop.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 168 "audioop.c"
        var $retval89=((($retval8)) & 255); //@line 168 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval89; //@line 168 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _st_linear2alaw($pcm_val) {
    var __stackBase__  = STACKTOP; STACKTOP += 15; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 15);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pcm_val_addr=__stackBase__;
        var $retval=__stackBase__+2;
        var $0=__stackBase__+6;
        var $mask=__stackBase__+10;
        var $seg=__stackBase__+12;
        var $aval=__stackBase__+14;
        var $_alloca_point_=0;
        HEAP[$pcm_val_addr]=$pcm_val;
        var $1=HEAP[$pcm_val_addr]; //@line 244 "audioop.c"
        var $2=reSign(($1), 16, 0) >> 3; //@line 244 "audioop.c"
        HEAP[$pcm_val_addr]=$2; //@line 244 "audioop.c"
        var $3=HEAP[$pcm_val_addr]; //@line 247 "audioop.c"
        var $4=reSign(($3), 16, 0) >= 0; //@line 247 "audioop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 247 "audioop.c"
      case 1: // $bb
        HEAP[$mask]=213; //@line 248 "audioop.c"
        __label__ = 3; break; //@line 248 "audioop.c"
      case 2: // $bb1
        HEAP[$mask]=85; //@line 250 "audioop.c"
        var $5=HEAP[$pcm_val_addr]; //@line 251 "audioop.c"
        var $not=($5) ^ -1; //@line 251 "audioop.c"
        HEAP[$pcm_val_addr]=$not; //@line 251 "audioop.c"
        __label__ = 3; break; //@line 251 "audioop.c"
      case 3: // $bb2
        var $6=HEAP[$pcm_val_addr]; //@line 255 "audioop.c"
        var $7=reSign(($6), 16, 0); //@line 255 "audioop.c"
        var $8=((($7)) & 65535); //@line 255 "audioop.c"
        var $9=_search($8, ((_seg_aend)&4294967295), 8); //@line 255 "audioop.c"
        HEAP[$seg]=$9; //@line 255 "audioop.c"
        var $10=HEAP[$seg]; //@line 259 "audioop.c"
        var $11=reSign(($10), 16, 0) > 7; //@line 259 "audioop.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 259 "audioop.c"
      case 4: // $bb3
        var $12=HEAP[$mask]; //@line 260 "audioop.c"
        var $13=((($12)) & 255); //@line 260 "audioop.c"
        var $14=($13) ^ 127; //@line 260 "audioop.c"
        var $15=unSign(($14), 8, 0); //@line 260 "audioop.c"
        HEAP[$0]=$15; //@line 260 "audioop.c"
        __label__ = 9; break; //@line 260 "audioop.c"
      case 5: // $bb4
        var $16=HEAP[$seg]; //@line 262 "audioop.c"
        var $17=((($16)) & 255); //@line 262 "audioop.c"
        var $18=($17) << 4; //@line 262 "audioop.c"
        HEAP[$aval]=$18; //@line 262 "audioop.c"
        var $19=HEAP[$seg]; //@line 263 "audioop.c"
        var $20=reSign(($19), 16, 0) <= 1; //@line 263 "audioop.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 263 "audioop.c"
      case 6: // $bb5
        var $21=HEAP[$pcm_val_addr]; //@line 264 "audioop.c"
        var $22=reSign(($21), 16, 0) >> 1; //@line 264 "audioop.c"
        var $23=((($22)) & 255); //@line 264 "audioop.c"
        var $24=($23) & 15; //@line 264 "audioop.c"
        var $25=HEAP[$aval]; //@line 264 "audioop.c"
        var $26=($24) | ($25); //@line 264 "audioop.c"
        HEAP[$aval]=$26; //@line 264 "audioop.c"
        __label__ = 8; break; //@line 264 "audioop.c"
      case 7: // $bb6
        var $27=HEAP[$pcm_val_addr]; //@line 266 "audioop.c"
        var $28=reSign(($27), 16, 0); //@line 266 "audioop.c"
        var $29=HEAP[$seg]; //@line 266 "audioop.c"
        var $30=reSign(($29), 16, 0); //@line 266 "audioop.c"
        var $31=((($28))|0) >> ((($30))|0); //@line 266 "audioop.c"
        var $32=((($31)) & 255); //@line 266 "audioop.c"
        var $33=($32) & 15; //@line 266 "audioop.c"
        var $34=HEAP[$aval]; //@line 266 "audioop.c"
        var $35=($33) | ($34); //@line 266 "audioop.c"
        HEAP[$aval]=$35; //@line 266 "audioop.c"
        __label__ = 8; break; //@line 266 "audioop.c"
      case 8: // $bb7
        var $36=HEAP[$mask]; //@line 267 "audioop.c"
        var $37=((($36)) & 255); //@line 267 "audioop.c"
        var $38=HEAP[$aval]; //@line 267 "audioop.c"
        var $39=($37) ^ ($38); //@line 267 "audioop.c"
        var $40=unSign(($39), 8, 0); //@line 267 "audioop.c"
        HEAP[$0]=$40; //@line 267 "audioop.c"
        __label__ = 9; break; //@line 267 "audioop.c"
      case 9: // $bb8
        var $41=HEAP[$0]; //@line 260 "audioop.c"
        HEAP[$retval]=$41; //@line 260 "audioop.c"
        __label__ = 10; break; //@line 260 "audioop.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 260 "audioop.c"
        var $retval910=((($retval9)) & 255); //@line 260 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval910; //@line 260 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_check_size($size) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$size_addr]=$size;
        var $1=HEAP[$size_addr]; //@line 301 "audioop.c"
        var $2=((($1))|0)==1; //@line 301 "audioop.c"
        if ($2) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 301 "audioop.c"
      case 1: // $bb
        var $3=HEAP[$size_addr]; //@line 301 "audioop.c"
        var $4=((($3))|0)==2; //@line 301 "audioop.c"
        if ($4) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 301 "audioop.c"
      case 2: // $bb1
        var $5=HEAP[$size_addr]; //@line 301 "audioop.c"
        var $6=((($5))|0)==4; //@line 301 "audioop.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 301 "audioop.c"
      case 3: // $bb2
        var $7=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($7, ((__str)&4294967295)); //@line 302 "audioop.c"
        HEAP[$0]=0; //@line 303 "audioop.c"
        __label__ = 5; break; //@line 303 "audioop.c"
      case 4: // $bb3
        HEAP[$0]=1; //@line 306 "audioop.c"
        __label__ = 5; break; //@line 306 "audioop.c"
      case 5: // $bb4
        var $8=HEAP[$0]; //@line 303 "audioop.c"
        HEAP[$retval]=$8; //@line 303 "audioop.c"
        __label__ = 6; break; //@line 303 "audioop.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 303 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 303 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_check_parameters($len, $size) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $len_addr=__stackBase__;
        var $size_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$len_addr]=$len;
        HEAP[$size_addr]=$size;
        var $1=HEAP[$size_addr]; //@line 312 "audioop.c"
        var $2=_audioop_check_size($1); //@line 312 "audioop.c"
        var $3=((($2))|0)==0; //@line 312 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 312 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 313 "audioop.c"
        __label__ = 5; break; //@line 313 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$len_addr]; //@line 314 "audioop.c"
        var $5=HEAP[$size_addr]; //@line 314 "audioop.c"
        var $6=((($4))|0) % ((($5))|0); //@line 314 "audioop.c"
        var $7=((($6))|0)!=0; //@line 314 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 314 "audioop.c"
      case 3: // $bb2
        var $8=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($8, ((__str1)&4294967295)); //@line 315 "audioop.c"
        HEAP[$0]=0; //@line 316 "audioop.c"
        __label__ = 5; break; //@line 316 "audioop.c"
      case 4: // $bb3
        HEAP[$0]=1; //@line 318 "audioop.c"
        __label__ = 5; break; //@line 318 "audioop.c"
      case 5: // $bb4
        var $9=HEAP[$0]; //@line 313 "audioop.c"
        HEAP[$retval]=$9; //@line 313 "audioop.c"
        __label__ = 6; break; //@line 313 "audioop.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 313 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 313 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_getsample($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $len=__stackBase__+20;
        var $size=__stackBase__+24;
        var $val=__stackBase__+28;
        var $i=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 325 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 328 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str2)&4294967295), $cp, $len, $size, $i); //@line 328 "audioop.c"
        var $3=((($2))|0)==0; //@line 328 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 328 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 329 "audioop.c"
        __label__ = 14; break; //@line 329 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 330 "audioop.c"
        var $5=HEAP[$len]; //@line 330 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 330 "audioop.c"
        var $7=((($6))|0)==0; //@line 330 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 330 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 331 "audioop.c"
        __label__ = 14; break; //@line 331 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$i]; //@line 332 "audioop.c"
        var $9=((($8))|0) < 0; //@line 332 "audioop.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 332 "audioop.c"
      case 5: // $bb4
        var $10=HEAP[$len]; //@line 332 "audioop.c"
        var $11=HEAP[$size]; //@line 332 "audioop.c"
        var $12=((((($10))|0)/((($11))|0))|0); //@line 332 "audioop.c"
        var $13=HEAP[$i]; //@line 332 "audioop.c"
        var $14=((($12))|0) <= ((($13))|0); //@line 332 "audioop.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 332 "audioop.c"
      case 6: // $bb5
        var $15=HEAP[_AudioopError]; //@line 333 "audioop.c"
        _PyErr_SetString($15, ((__str3)&4294967295)); //@line 333 "audioop.c"
        HEAP[$0]=0; //@line 334 "audioop.c"
        __label__ = 14; break; //@line 334 "audioop.c"
      case 7: // $bb6
        var $16=HEAP[$size]; //@line 336 "audioop.c"
        var $17=((($16))|0)==1; //@line 336 "audioop.c"
        if ($17) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 336 "audioop.c"
      case 8: // $bb7
        var $18=HEAP[$cp]; //@line 336 "audioop.c"
        var $19=HEAP[$i]; //@line 336 "audioop.c"
        var $20=(($18+$19)&4294967295); //@line 336 "audioop.c"
        var $21=HEAP[$20]; //@line 336 "audioop.c"
        var $22=reSign(($21), 8, 0); //@line 336 "audioop.c"
        HEAP[$val]=$22; //@line 336 "audioop.c"
        __label__ = 13; break; //@line 336 "audioop.c"
      case 9: // $bb8
        var $23=HEAP[$size]; //@line 337 "audioop.c"
        var $24=((($23))|0)==2; //@line 337 "audioop.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 337 "audioop.c"
      case 10: // $bb9
        var $25=HEAP[$cp]; //@line 337 "audioop.c"
        var $26=HEAP[$i]; //@line 337 "audioop.c"
        var $27=((($26) * 2)&4294967295); //@line 337 "audioop.c"
        var $28=(($25+$27)&4294967295); //@line 337 "audioop.c"
        var $29=$28; //@line 337 "audioop.c"
        var $30=HEAP[$29]; //@line 337 "audioop.c"
        var $31=reSign(($30), 16, 0); //@line 337 "audioop.c"
        HEAP[$val]=$31; //@line 337 "audioop.c"
        __label__ = 13; break; //@line 337 "audioop.c"
      case 11: // $bb10
        var $32=HEAP[$size]; //@line 338 "audioop.c"
        var $33=((($32))|0)==4; //@line 338 "audioop.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 338 "audioop.c"
      case 12: // $bb11
        var $34=HEAP[$cp]; //@line 338 "audioop.c"
        var $35=HEAP[$i]; //@line 338 "audioop.c"
        var $36=((($35) * 4)&4294967295); //@line 338 "audioop.c"
        var $37=(($34+$36)&4294967295); //@line 338 "audioop.c"
        var $38=$37; //@line 338 "audioop.c"
        var $39=HEAP[$38]; //@line 338 "audioop.c"
        HEAP[$val]=$39; //@line 338 "audioop.c"
        __label__ = 13; break; //@line 338 "audioop.c"
      case 13: // $bb12
        var $40=HEAP[$val]; //@line 339 "audioop.c"
        var $41=_PyInt_FromLong($40); //@line 339 "audioop.c"
        HEAP[$0]=$41; //@line 339 "audioop.c"
        __label__ = 14; break; //@line 339 "audioop.c"
      case 14: // $bb13
        var $42=HEAP[$0]; //@line 329 "audioop.c"
        HEAP[$retval]=$42; //@line 329 "audioop.c"
        __label__ = 15; break; //@line 329 "audioop.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 329 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 329 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_max($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $len=__stackBase__+20;
        var $size=__stackBase__+24;
        var $val=__stackBase__+28;
        var $i=__stackBase__+32;
        var $max=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 346 "audioop.c"
        HEAP[$max]=0; //@line 348 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 350 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str4)&4294967295), $cp, $len, $size); //@line 350 "audioop.c"
        var $3=((($2))|0)==0; //@line 350 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 350 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 351 "audioop.c"
        __label__ = 18; break; //@line 351 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 352 "audioop.c"
        var $5=HEAP[$len]; //@line 352 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 352 "audioop.c"
        var $7=((($6))|0)==0; //@line 352 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 352 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 353 "audioop.c"
        __label__ = 18; break; //@line 353 "audioop.c"
      case 4: // $bb3
        HEAP[$i]=0; //@line 354 "audioop.c"
        __label__ = 16; break; //@line 354 "audioop.c"
      case 5: // $bb4
        var $8=HEAP[$size]; //@line 355 "audioop.c"
        var $9=((($8))|0)==1; //@line 355 "audioop.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 355 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$cp]; //@line 355 "audioop.c"
        var $11=HEAP[$i]; //@line 355 "audioop.c"
        var $12=(($10+$11)&4294967295); //@line 355 "audioop.c"
        var $13=HEAP[$12]; //@line 355 "audioop.c"
        var $14=reSign(($13), 8, 0); //@line 355 "audioop.c"
        HEAP[$val]=$14; //@line 355 "audioop.c"
        __label__ = 11; break; //@line 355 "audioop.c"
      case 7: // $bb6
        var $15=HEAP[$size]; //@line 356 "audioop.c"
        var $16=((($15))|0)==2; //@line 356 "audioop.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 356 "audioop.c"
      case 8: // $bb7
        var $17=HEAP[$cp]; //@line 356 "audioop.c"
        var $18=HEAP[$i]; //@line 356 "audioop.c"
        var $19=(($17+$18)&4294967295); //@line 356 "audioop.c"
        var $20=$19; //@line 356 "audioop.c"
        var $21=HEAP[$20]; //@line 356 "audioop.c"
        var $22=reSign(($21), 16, 0); //@line 356 "audioop.c"
        HEAP[$val]=$22; //@line 356 "audioop.c"
        __label__ = 11; break; //@line 356 "audioop.c"
      case 9: // $bb8
        var $23=HEAP[$size]; //@line 357 "audioop.c"
        var $24=((($23))|0)==4; //@line 357 "audioop.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 357 "audioop.c"
      case 10: // $bb9
        var $25=HEAP[$cp]; //@line 357 "audioop.c"
        var $26=HEAP[$i]; //@line 357 "audioop.c"
        var $27=(($25+$26)&4294967295); //@line 357 "audioop.c"
        var $28=$27; //@line 357 "audioop.c"
        var $29=HEAP[$28]; //@line 357 "audioop.c"
        HEAP[$val]=$29; //@line 357 "audioop.c"
        __label__ = 11; break; //@line 357 "audioop.c"
      case 11: // $bb10
        var $30=HEAP[$val]; //@line 358 "audioop.c"
        var $31=((($30))|0) < 0; //@line 358 "audioop.c"
        if ($31) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 358 "audioop.c"
      case 12: // $bb11
        var $32=HEAP[$val]; //@line 358 "audioop.c"
        var $33=((0 - ($32))&4294967295); //@line 358 "audioop.c"
        HEAP[$val]=$33; //@line 358 "audioop.c"
        __label__ = 13; break; //@line 358 "audioop.c"
      case 13: // $bb12
        var $34=HEAP[$val]; //@line 359 "audioop.c"
        var $35=HEAP[$max]; //@line 359 "audioop.c"
        var $36=((($34))|0) > ((($35))|0); //@line 359 "audioop.c"
        if ($36) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 359 "audioop.c"
      case 14: // $bb13
        var $37=HEAP[$val]; //@line 359 "audioop.c"
        HEAP[$max]=$37; //@line 359 "audioop.c"
        __label__ = 15; break; //@line 359 "audioop.c"
      case 15: // $bb14
        var $38=HEAP[$size]; //@line 354 "audioop.c"
        var $39=HEAP[$i]; //@line 354 "audioop.c"
        var $40=((($39) + ($38))&4294967295); //@line 354 "audioop.c"
        HEAP[$i]=$40; //@line 354 "audioop.c"
        __label__ = 16; break; //@line 354 "audioop.c"
      case 16: // $bb15
        var $41=HEAP[$len]; //@line 354 "audioop.c"
        var $42=HEAP[$i]; //@line 354 "audioop.c"
        var $43=((($42))|0) < ((($41))|0); //@line 354 "audioop.c"
        if ($43) { __label__ = 5; break; } else { __label__ = 17; break; } //@line 354 "audioop.c"
      case 17: // $bb16
        var $44=HEAP[$max]; //@line 361 "audioop.c"
        var $45=_PyInt_FromLong($44); //@line 361 "audioop.c"
        HEAP[$0]=$45; //@line 361 "audioop.c"
        __label__ = 18; break; //@line 361 "audioop.c"
      case 18: // $bb17
        var $46=HEAP[$0]; //@line 351 "audioop.c"
        HEAP[$retval]=$46; //@line 351 "audioop.c"
        __label__ = 19; break; //@line 351 "audioop.c"
      case 19: // $return
        var $retval18=HEAP[$retval]; //@line 351 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 351 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_minmax($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $len=__stackBase__+20;
        var $size=__stackBase__+24;
        var $val=__stackBase__+28;
        var $i=__stackBase__+32;
        var $min=__stackBase__+36;
        var $max=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 368 "audioop.c"
        HEAP[$min]=2147483647; //@line 370 "audioop.c"
        HEAP[$max]=-2147483647; //@line 370 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 372 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str5)&4294967295), $cp, $len, $size); //@line 372 "audioop.c"
        var $3=((($2))|0)==0; //@line 372 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 372 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 373 "audioop.c"
        __label__ = 18; break; //@line 373 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 374 "audioop.c"
        var $5=HEAP[$len]; //@line 374 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 374 "audioop.c"
        var $7=((($6))|0)==0; //@line 374 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 374 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 375 "audioop.c"
        __label__ = 18; break; //@line 375 "audioop.c"
      case 4: // $bb3
        HEAP[$i]=0; //@line 376 "audioop.c"
        __label__ = 16; break; //@line 376 "audioop.c"
      case 5: // $bb4
        var $8=HEAP[$size]; //@line 377 "audioop.c"
        var $9=((($8))|0)==1; //@line 377 "audioop.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 377 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$cp]; //@line 377 "audioop.c"
        var $11=HEAP[$i]; //@line 377 "audioop.c"
        var $12=(($10+$11)&4294967295); //@line 377 "audioop.c"
        var $13=HEAP[$12]; //@line 377 "audioop.c"
        var $14=reSign(($13), 8, 0); //@line 377 "audioop.c"
        HEAP[$val]=$14; //@line 377 "audioop.c"
        __label__ = 11; break; //@line 377 "audioop.c"
      case 7: // $bb6
        var $15=HEAP[$size]; //@line 378 "audioop.c"
        var $16=((($15))|0)==2; //@line 378 "audioop.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 378 "audioop.c"
      case 8: // $bb7
        var $17=HEAP[$cp]; //@line 378 "audioop.c"
        var $18=HEAP[$i]; //@line 378 "audioop.c"
        var $19=(($17+$18)&4294967295); //@line 378 "audioop.c"
        var $20=$19; //@line 378 "audioop.c"
        var $21=HEAP[$20]; //@line 378 "audioop.c"
        var $22=reSign(($21), 16, 0); //@line 378 "audioop.c"
        HEAP[$val]=$22; //@line 378 "audioop.c"
        __label__ = 11; break; //@line 378 "audioop.c"
      case 9: // $bb8
        var $23=HEAP[$size]; //@line 379 "audioop.c"
        var $24=((($23))|0)==4; //@line 379 "audioop.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 379 "audioop.c"
      case 10: // $bb9
        var $25=HEAP[$cp]; //@line 379 "audioop.c"
        var $26=HEAP[$i]; //@line 379 "audioop.c"
        var $27=(($25+$26)&4294967295); //@line 379 "audioop.c"
        var $28=$27; //@line 379 "audioop.c"
        var $29=HEAP[$28]; //@line 379 "audioop.c"
        HEAP[$val]=$29; //@line 379 "audioop.c"
        __label__ = 11; break; //@line 379 "audioop.c"
      case 11: // $bb10
        var $30=HEAP[$val]; //@line 380 "audioop.c"
        var $31=HEAP[$max]; //@line 380 "audioop.c"
        var $32=((($30))|0) > ((($31))|0); //@line 380 "audioop.c"
        if ($32) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 380 "audioop.c"
      case 12: // $bb11
        var $33=HEAP[$val]; //@line 380 "audioop.c"
        HEAP[$max]=$33; //@line 380 "audioop.c"
        __label__ = 13; break; //@line 380 "audioop.c"
      case 13: // $bb12
        var $34=HEAP[$val]; //@line 381 "audioop.c"
        var $35=HEAP[$min]; //@line 381 "audioop.c"
        var $36=((($34))|0) < ((($35))|0); //@line 381 "audioop.c"
        if ($36) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 381 "audioop.c"
      case 14: // $bb13
        var $37=HEAP[$val]; //@line 381 "audioop.c"
        HEAP[$min]=$37; //@line 381 "audioop.c"
        __label__ = 15; break; //@line 381 "audioop.c"
      case 15: // $bb14
        var $38=HEAP[$size]; //@line 376 "audioop.c"
        var $39=HEAP[$i]; //@line 376 "audioop.c"
        var $40=((($39) + ($38))&4294967295); //@line 376 "audioop.c"
        HEAP[$i]=$40; //@line 376 "audioop.c"
        __label__ = 16; break; //@line 376 "audioop.c"
      case 16: // $bb15
        var $41=HEAP[$len]; //@line 376 "audioop.c"
        var $42=HEAP[$i]; //@line 376 "audioop.c"
        var $43=((($42))|0) < ((($41))|0); //@line 376 "audioop.c"
        if ($43) { __label__ = 5; break; } else { __label__ = 17; break; } //@line 376 "audioop.c"
      case 17: // $bb16
        var $44=HEAP[$min]; //@line 383 "audioop.c"
        var $45=HEAP[$max]; //@line 383 "audioop.c"
        var $46=_Py_BuildValue(((__str6)&4294967295), $44, $45); //@line 383 "audioop.c"
        HEAP[$0]=$46; //@line 383 "audioop.c"
        __label__ = 18; break; //@line 383 "audioop.c"
      case 18: // $bb17
        var $47=HEAP[$0]; //@line 373 "audioop.c"
        HEAP[$retval]=$47; //@line 373 "audioop.c"
        __label__ = 19; break; //@line 373 "audioop.c"
      case 19: // $return
        var $retval18=HEAP[$retval]; //@line 373 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 373 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_avg($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $len=__stackBase__+20;
        var $size=__stackBase__+24;
        var $val=__stackBase__+28;
        var $i=__stackBase__+32;
        var $avg=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 390 "audioop.c"
        HEAP[$avg]=0; //@line 392 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 394 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str7)&4294967295), $cp, $len, $size); //@line 394 "audioop.c"
        var $3=((($2))|0)==0; //@line 394 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 394 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 395 "audioop.c"
        __label__ = 17; break; //@line 395 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 396 "audioop.c"
        var $5=HEAP[$len]; //@line 396 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 396 "audioop.c"
        var $7=((($6))|0)==0; //@line 396 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 396 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 397 "audioop.c"
        __label__ = 17; break; //@line 397 "audioop.c"
      case 4: // $bb3
        HEAP[$i]=0; //@line 398 "audioop.c"
        __label__ = 12; break; //@line 398 "audioop.c"
      case 5: // $bb4
        var $8=HEAP[$size]; //@line 399 "audioop.c"
        var $9=((($8))|0)==1; //@line 399 "audioop.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 399 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$cp]; //@line 399 "audioop.c"
        var $11=HEAP[$i]; //@line 399 "audioop.c"
        var $12=(($10+$11)&4294967295); //@line 399 "audioop.c"
        var $13=HEAP[$12]; //@line 399 "audioop.c"
        var $14=reSign(($13), 8, 0); //@line 399 "audioop.c"
        HEAP[$val]=$14; //@line 399 "audioop.c"
        __label__ = 11; break; //@line 399 "audioop.c"
      case 7: // $bb6
        var $15=HEAP[$size]; //@line 400 "audioop.c"
        var $16=((($15))|0)==2; //@line 400 "audioop.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 400 "audioop.c"
      case 8: // $bb7
        var $17=HEAP[$cp]; //@line 400 "audioop.c"
        var $18=HEAP[$i]; //@line 400 "audioop.c"
        var $19=(($17+$18)&4294967295); //@line 400 "audioop.c"
        var $20=$19; //@line 400 "audioop.c"
        var $21=HEAP[$20]; //@line 400 "audioop.c"
        var $22=reSign(($21), 16, 0); //@line 400 "audioop.c"
        HEAP[$val]=$22; //@line 400 "audioop.c"
        __label__ = 11; break; //@line 400 "audioop.c"
      case 9: // $bb8
        var $23=HEAP[$size]; //@line 401 "audioop.c"
        var $24=((($23))|0)==4; //@line 401 "audioop.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 401 "audioop.c"
      case 10: // $bb9
        var $25=HEAP[$cp]; //@line 401 "audioop.c"
        var $26=HEAP[$i]; //@line 401 "audioop.c"
        var $27=(($25+$26)&4294967295); //@line 401 "audioop.c"
        var $28=$27; //@line 401 "audioop.c"
        var $29=HEAP[$28]; //@line 401 "audioop.c"
        HEAP[$val]=$29; //@line 401 "audioop.c"
        __label__ = 11; break; //@line 401 "audioop.c"
      case 11: // $bb10
        var $30=HEAP[$val]; //@line 402 "audioop.c"
        var $31=((($30))|0); //@line 402 "audioop.c"
        var $32=HEAP[$avg]; //@line 402 "audioop.c"
        var $33=($31) + ($32); //@line 402 "audioop.c"
        HEAP[$avg]=$33; //@line 402 "audioop.c"
        var $34=HEAP[$size]; //@line 398 "audioop.c"
        var $35=HEAP[$i]; //@line 398 "audioop.c"
        var $36=((($35) + ($34))&4294967295); //@line 398 "audioop.c"
        HEAP[$i]=$36; //@line 398 "audioop.c"
        __label__ = 12; break; //@line 398 "audioop.c"
      case 12: // $bb11
        var $37=HEAP[$len]; //@line 398 "audioop.c"
        var $38=HEAP[$i]; //@line 398 "audioop.c"
        var $39=((($38))|0) < ((($37))|0); //@line 398 "audioop.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 13; break; } //@line 398 "audioop.c"
      case 13: // $bb12
        var $40=HEAP[$len]; //@line 404 "audioop.c"
        var $41=((($40))|0)==0; //@line 404 "audioop.c"
        if ($41) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 404 "audioop.c"
      case 14: // $bb13
        HEAP[$val]=0; //@line 405 "audioop.c"
        __label__ = 16; break; //@line 405 "audioop.c"
      case 15: // $bb14
        var $42=HEAP[$len]; //@line 407 "audioop.c"
        var $43=HEAP[$size]; //@line 407 "audioop.c"
        var $44=((((($42))|0)/((($43))|0))|0); //@line 407 "audioop.c"
        var $45=((($44))|0); //@line 407 "audioop.c"
        var $46=HEAP[$avg]; //@line 407 "audioop.c"
        var $47=($46) / ($45); //@line 407 "audioop.c"
        var $48=((($47))|0); //@line 407 "audioop.c"
        HEAP[$val]=$48; //@line 407 "audioop.c"
        __label__ = 16; break; //@line 407 "audioop.c"
      case 16: // $bb15
        var $49=HEAP[$val]; //@line 408 "audioop.c"
        var $50=_PyInt_FromLong($49); //@line 408 "audioop.c"
        HEAP[$0]=$50; //@line 408 "audioop.c"
        __label__ = 17; break; //@line 408 "audioop.c"
      case 17: // $bb16
        var $51=HEAP[$0]; //@line 395 "audioop.c"
        HEAP[$retval]=$51; //@line 395 "audioop.c"
        __label__ = 18; break; //@line 395 "audioop.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 395 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 395 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_rms($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $len=__stackBase__+20;
        var $size=__stackBase__+24;
        var $val=__stackBase__+28;
        var $i=__stackBase__+32;
        var $sum_squares=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 415 "audioop.c"
        HEAP[$sum_squares]=0; //@line 417 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 419 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str8)&4294967295), $cp, $len, $size); //@line 419 "audioop.c"
        var $3=((($2))|0)==0; //@line 419 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 419 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 420 "audioop.c"
        __label__ = 17; break; //@line 420 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 421 "audioop.c"
        var $5=HEAP[$len]; //@line 421 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 421 "audioop.c"
        var $7=((($6))|0)==0; //@line 421 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 421 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 422 "audioop.c"
        __label__ = 17; break; //@line 422 "audioop.c"
      case 4: // $bb3
        HEAP[$i]=0; //@line 423 "audioop.c"
        __label__ = 12; break; //@line 423 "audioop.c"
      case 5: // $bb4
        var $8=HEAP[$size]; //@line 424 "audioop.c"
        var $9=((($8))|0)==1; //@line 424 "audioop.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 424 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$cp]; //@line 424 "audioop.c"
        var $11=HEAP[$i]; //@line 424 "audioop.c"
        var $12=(($10+$11)&4294967295); //@line 424 "audioop.c"
        var $13=HEAP[$12]; //@line 424 "audioop.c"
        var $14=reSign(($13), 8, 0); //@line 424 "audioop.c"
        HEAP[$val]=$14; //@line 424 "audioop.c"
        __label__ = 11; break; //@line 424 "audioop.c"
      case 7: // $bb6
        var $15=HEAP[$size]; //@line 425 "audioop.c"
        var $16=((($15))|0)==2; //@line 425 "audioop.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 425 "audioop.c"
      case 8: // $bb7
        var $17=HEAP[$cp]; //@line 425 "audioop.c"
        var $18=HEAP[$i]; //@line 425 "audioop.c"
        var $19=(($17+$18)&4294967295); //@line 425 "audioop.c"
        var $20=$19; //@line 425 "audioop.c"
        var $21=HEAP[$20]; //@line 425 "audioop.c"
        var $22=reSign(($21), 16, 0); //@line 425 "audioop.c"
        HEAP[$val]=$22; //@line 425 "audioop.c"
        __label__ = 11; break; //@line 425 "audioop.c"
      case 9: // $bb8
        var $23=HEAP[$size]; //@line 426 "audioop.c"
        var $24=((($23))|0)==4; //@line 426 "audioop.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 426 "audioop.c"
      case 10: // $bb9
        var $25=HEAP[$cp]; //@line 426 "audioop.c"
        var $26=HEAP[$i]; //@line 426 "audioop.c"
        var $27=(($25+$26)&4294967295); //@line 426 "audioop.c"
        var $28=$27; //@line 426 "audioop.c"
        var $29=HEAP[$28]; //@line 426 "audioop.c"
        HEAP[$val]=$29; //@line 426 "audioop.c"
        __label__ = 11; break; //@line 426 "audioop.c"
      case 11: // $bb10
        var $30=HEAP[$val]; //@line 427 "audioop.c"
        var $31=((($30))|0); //@line 427 "audioop.c"
        var $32=HEAP[$val]; //@line 427 "audioop.c"
        var $33=((($32))|0); //@line 427 "audioop.c"
        var $34=($31) * ($33); //@line 427 "audioop.c"
        var $35=HEAP[$sum_squares]; //@line 427 "audioop.c"
        var $36=($34) + ($35); //@line 427 "audioop.c"
        HEAP[$sum_squares]=$36; //@line 427 "audioop.c"
        var $37=HEAP[$size]; //@line 423 "audioop.c"
        var $38=HEAP[$i]; //@line 423 "audioop.c"
        var $39=((($38) + ($37))&4294967295); //@line 423 "audioop.c"
        HEAP[$i]=$39; //@line 423 "audioop.c"
        __label__ = 12; break; //@line 423 "audioop.c"
      case 12: // $bb11
        var $40=HEAP[$len]; //@line 423 "audioop.c"
        var $41=HEAP[$i]; //@line 423 "audioop.c"
        var $42=((($41))|0) < ((($40))|0); //@line 423 "audioop.c"
        if ($42) { __label__ = 5; break; } else { __label__ = 13; break; } //@line 423 "audioop.c"
      case 13: // $bb12
        var $43=HEAP[$len]; //@line 429 "audioop.c"
        var $44=((($43))|0)==0; //@line 429 "audioop.c"
        if ($44) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 429 "audioop.c"
      case 14: // $bb13
        HEAP[$val]=0; //@line 430 "audioop.c"
        __label__ = 16; break; //@line 430 "audioop.c"
      case 15: // $bb14
        var $45=HEAP[$len]; //@line 432 "audioop.c"
        var $46=HEAP[$size]; //@line 432 "audioop.c"
        var $47=((((($45))|0)/((($46))|0))|0); //@line 432 "audioop.c"
        var $48=((($47))|0); //@line 432 "audioop.c"
        var $49=HEAP[$sum_squares]; //@line 432 "audioop.c"
        var $50=($49) / ($48); //@line 432 "audioop.c"
        var $51=_sqrt($50); //@line 432 "audioop.c"
        var $52=((($51))|0); //@line 432 "audioop.c"
        HEAP[$val]=$52; //@line 432 "audioop.c"
        __label__ = 16; break; //@line 432 "audioop.c"
      case 16: // $bb15
        var $53=HEAP[$val]; //@line 433 "audioop.c"
        var $54=_PyInt_FromLong($53); //@line 433 "audioop.c"
        HEAP[$0]=$54; //@line 433 "audioop.c"
        __label__ = 17; break; //@line 433 "audioop.c"
      case 17: // $bb16
        var $55=HEAP[$0]; //@line 420 "audioop.c"
        HEAP[$retval]=$55; //@line 420 "audioop.c"
        __label__ = 18; break; //@line 420 "audioop.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 420 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 420 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __sum2($a, $b, $len) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $b_addr=__stackBase__+4;
        var $len_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+20;
        var $i=__stackBase__+28;
        var $sum=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$b_addr]=$b;
        HEAP[$len_addr]=$len;
        HEAP[$sum]=0; //@line 439 "audioop.c"
        HEAP[$i]=0; //@line 441 "audioop.c"
        __label__ = 2; break; //@line 441 "audioop.c"
      case 1: // $bb
        var $1=HEAP[$a_addr]; //@line 442 "audioop.c"
        var $2=HEAP[$i]; //@line 442 "audioop.c"
        var $3=(($1+2*$2)&4294967295); //@line 442 "audioop.c"
        var $4=HEAP[$3]; //@line 442 "audioop.c"
        var $5=reSign(($4), 16, 0); //@line 442 "audioop.c"
        var $6=HEAP[$b_addr]; //@line 442 "audioop.c"
        var $7=HEAP[$i]; //@line 442 "audioop.c"
        var $8=(($6+2*$7)&4294967295); //@line 442 "audioop.c"
        var $9=HEAP[$8]; //@line 442 "audioop.c"
        var $10=reSign(($9), 16, 0); //@line 442 "audioop.c"
        var $11=($5) * ($10); //@line 442 "audioop.c"
        var $12=HEAP[$sum]; //@line 442 "audioop.c"
        var $13=($11) + ($12); //@line 442 "audioop.c"
        HEAP[$sum]=$13; //@line 442 "audioop.c"
        var $14=HEAP[$i]; //@line 441 "audioop.c"
        var $15=((($14) + 1)&4294967295); //@line 441 "audioop.c"
        HEAP[$i]=$15; //@line 441 "audioop.c"
        __label__ = 2; break; //@line 441 "audioop.c"
      case 2: // $bb1
        var $16=HEAP[$i]; //@line 441 "audioop.c"
        var $17=HEAP[$len_addr]; //@line 441 "audioop.c"
        var $18=((($16))|0) < ((($17))|0); //@line 441 "audioop.c"
        if ($18) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 441 "audioop.c"
      case 3: // $bb2
        var $19=HEAP[$sum]; //@line 444 "audioop.c"
        HEAP[$0]=$19; //@line 444 "audioop.c"
        var $20=HEAP[$0]; //@line 444 "audioop.c"
        HEAP[$retval]=$20; //@line 444 "audioop.c"
        __label__ = 4; break; //@line 444 "audioop.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 444 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 444 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_findfit($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 104; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 104);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp1=__stackBase__+16;
        var $cp2=__stackBase__+20;
        var $len1=__stackBase__+24;
        var $len2=__stackBase__+28;
        var $j=__stackBase__+32;
        var $best_j=__stackBase__+36;
        var $aj_m1=__stackBase__+40;
        var $aj_lm1=__stackBase__+48;
        var $sum_ri_2=__stackBase__+56;
        var $sum_aij_2=__stackBase__+64;
        var $sum_aij_ri=__stackBase__+72;
        var $result=__stackBase__+80;
        var $best_result=__stackBase__+88;
        var $factor=__stackBase__+96;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $cp21=$cp2; //@line 492 "audioop.c"
        var $cp13=$cp1; //@line 492 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 492 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str9)&4294967295), $cp13, $len1, $cp21, $len2); //@line 492 "audioop.c"
        var $3=((($2))|0)==0; //@line 492 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 492 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 494 "audioop.c"
        __label__ = 13; break; //@line 494 "audioop.c"
      case 2: // $bb5
        var $4=HEAP[$len1]; //@line 495 "audioop.c"
        var $5=($4) & 1; //@line 495 "audioop.c"
        var $6=((($5)) & 255); //@line 495 "audioop.c"
        var $toBool=reSign(($6), 8, 0)!=0; //@line 495 "audioop.c"
        if ($toBool) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 495 "audioop.c"
      case 3: // $bb6
        var $7=HEAP[$len2]; //@line 495 "audioop.c"
        var $8=($7) & 1; //@line 495 "audioop.c"
        var $9=((($8)) & 255); //@line 495 "audioop.c"
        var $toBool7=reSign(($9), 8, 0)!=0; //@line 495 "audioop.c"
        if ($toBool7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 495 "audioop.c"
      case 4: // $bb8
        var $10=HEAP[_AudioopError]; //@line 496 "audioop.c"
        _PyErr_SetString($10, ((__str10)&4294967295)); //@line 496 "audioop.c"
        HEAP[$0]=0; //@line 497 "audioop.c"
        __label__ = 13; break; //@line 497 "audioop.c"
      case 5: // $bb9
        var $11=HEAP[$len1]; //@line 499 "audioop.c"
        var $12=((($11))|0) >> 1; //@line 499 "audioop.c"
        HEAP[$len1]=$12; //@line 499 "audioop.c"
        var $13=HEAP[$len2]; //@line 500 "audioop.c"
        var $14=((($13))|0) >> 1; //@line 500 "audioop.c"
        HEAP[$len2]=$14; //@line 500 "audioop.c"
        var $15=HEAP[$len1]; //@line 502 "audioop.c"
        var $16=HEAP[$len2]; //@line 502 "audioop.c"
        var $17=((($15))|0) < ((($16))|0); //@line 502 "audioop.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 502 "audioop.c"
      case 6: // $bb10
        var $18=HEAP[_AudioopError]; //@line 503 "audioop.c"
        _PyErr_SetString($18, ((__str11)&4294967295)); //@line 503 "audioop.c"
        HEAP[$0]=0; //@line 504 "audioop.c"
        __label__ = 13; break; //@line 504 "audioop.c"
      case 7: // $bb11
        var $19=HEAP[$len2]; //@line 506 "audioop.c"
        var $20=HEAP[$cp2]; //@line 506 "audioop.c"
        var $21=HEAP[$cp2]; //@line 506 "audioop.c"
        var $22=__sum2($21, $20, $19); //@line 506 "audioop.c"
        HEAP[$sum_ri_2]=$22; //@line 506 "audioop.c"
        var $23=HEAP[$len2]; //@line 507 "audioop.c"
        var $24=HEAP[$cp1]; //@line 507 "audioop.c"
        var $25=HEAP[$cp1]; //@line 507 "audioop.c"
        var $26=__sum2($25, $24, $23); //@line 507 "audioop.c"
        HEAP[$sum_aij_2]=$26; //@line 507 "audioop.c"
        var $27=HEAP[$len2]; //@line 508 "audioop.c"
        var $28=HEAP[$cp2]; //@line 508 "audioop.c"
        var $29=HEAP[$cp1]; //@line 508 "audioop.c"
        var $30=__sum2($29, $28, $27); //@line 508 "audioop.c"
        HEAP[$sum_aij_ri]=$30; //@line 508 "audioop.c"
        var $31=HEAP[$sum_ri_2]; //@line 510 "audioop.c"
        var $32=HEAP[$sum_aij_2]; //@line 510 "audioop.c"
        var $33=($31) * ($32); //@line 510 "audioop.c"
        var $34=HEAP[$sum_aij_ri]; //@line 510 "audioop.c"
        var $35=HEAP[$sum_aij_ri]; //@line 510 "audioop.c"
        var $36=($34) * ($35); //@line 510 "audioop.c"
        var $37=($33) - ($36); //@line 510 "audioop.c"
        var $38=HEAP[$sum_aij_2]; //@line 510 "audioop.c"
        var $39=($37) / ($38); //@line 510 "audioop.c"
        HEAP[$result]=$39; //@line 510 "audioop.c"
        var $40=HEAP[$result]; //@line 512 "audioop.c"
        HEAP[$best_result]=$40; //@line 512 "audioop.c"
        HEAP[$best_j]=0; //@line 513 "audioop.c"
        HEAP[$j]=1; //@line 515 "audioop.c"
        __label__ = 11; break; //@line 515 "audioop.c"
      case 8: // $bb12
        var $41=HEAP[$cp1]; //@line 516 "audioop.c"
        var $42=HEAP[$j]; //@line 516 "audioop.c"
        var $43=((($42) - 1)&4294967295); //@line 516 "audioop.c"
        var $44=(($41+2*$43)&4294967295); //@line 516 "audioop.c"
        var $45=HEAP[$44]; //@line 516 "audioop.c"
        var $46=reSign(($45), 16, 0); //@line 516 "audioop.c"
        HEAP[$aj_m1]=$46; //@line 516 "audioop.c"
        var $47=HEAP[$cp1]; //@line 517 "audioop.c"
        var $48=HEAP[$len2]; //@line 517 "audioop.c"
        var $49=HEAP[$j]; //@line 517 "audioop.c"
        var $50=((($49) + ($48))&4294967295); //@line 517 "audioop.c"
        var $51=((($50) - 1)&4294967295); //@line 517 "audioop.c"
        var $52=(($47+2*$51)&4294967295); //@line 517 "audioop.c"
        var $53=HEAP[$52]; //@line 517 "audioop.c"
        var $54=reSign(($53), 16, 0); //@line 517 "audioop.c"
        HEAP[$aj_lm1]=$54; //@line 517 "audioop.c"
        var $55=HEAP[$aj_lm1]; //@line 519 "audioop.c"
        var $56=HEAP[$aj_lm1]; //@line 519 "audioop.c"
        var $57=($55) * ($56); //@line 519 "audioop.c"
        var $58=HEAP[$sum_aij_2]; //@line 519 "audioop.c"
        var $59=($57) + ($58); //@line 519 "audioop.c"
        var $60=HEAP[$aj_m1]; //@line 519 "audioop.c"
        var $61=HEAP[$aj_m1]; //@line 519 "audioop.c"
        var $62=($60) * ($61); //@line 519 "audioop.c"
        var $63=($59) - ($62); //@line 519 "audioop.c"
        HEAP[$sum_aij_2]=$63; //@line 519 "audioop.c"
        var $64=HEAP[$len2]; //@line 520 "audioop.c"
        var $65=HEAP[$cp2]; //@line 520 "audioop.c"
        var $66=HEAP[$cp1]; //@line 520 "audioop.c"
        var $67=HEAP[$j]; //@line 520 "audioop.c"
        var $68=(($66+2*$67)&4294967295); //@line 520 "audioop.c"
        var $69=__sum2($68, $65, $64); //@line 520 "audioop.c"
        HEAP[$sum_aij_ri]=$69; //@line 520 "audioop.c"
        var $70=HEAP[$sum_ri_2]; //@line 522 "audioop.c"
        var $71=HEAP[$sum_aij_2]; //@line 522 "audioop.c"
        var $72=($70) * ($71); //@line 522 "audioop.c"
        var $73=HEAP[$sum_aij_ri]; //@line 522 "audioop.c"
        var $74=HEAP[$sum_aij_ri]; //@line 522 "audioop.c"
        var $75=($73) * ($74); //@line 522 "audioop.c"
        var $76=($72) - ($75); //@line 522 "audioop.c"
        var $77=HEAP[$sum_aij_2]; //@line 522 "audioop.c"
        var $78=($76) / ($77); //@line 522 "audioop.c"
        HEAP[$result]=$78; //@line 522 "audioop.c"
        var $79=HEAP[$result]; //@line 525 "audioop.c"
        var $80=HEAP[$best_result]; //@line 525 "audioop.c"
        var $81=($79) < ($80); //@line 525 "audioop.c"
        if ($81) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 525 "audioop.c"
      case 9: // $bb13
        var $82=HEAP[$result]; //@line 526 "audioop.c"
        HEAP[$best_result]=$82; //@line 526 "audioop.c"
        var $83=HEAP[$j]; //@line 527 "audioop.c"
        HEAP[$best_j]=$83; //@line 527 "audioop.c"
        __label__ = 10; break; //@line 527 "audioop.c"
      case 10: // $bb14
        var $84=HEAP[$j]; //@line 515 "audioop.c"
        var $85=((($84) + 1)&4294967295); //@line 515 "audioop.c"
        HEAP[$j]=$85; //@line 515 "audioop.c"
        __label__ = 11; break; //@line 515 "audioop.c"
      case 11: // $bb15
        var $86=HEAP[$len1]; //@line 515 "audioop.c"
        var $87=HEAP[$len2]; //@line 515 "audioop.c"
        var $88=((($86) - ($87))&4294967295); //@line 515 "audioop.c"
        var $89=HEAP[$j]; //@line 515 "audioop.c"
        var $90=((($88))|0) >= ((($89))|0); //@line 515 "audioop.c"
        if ($90) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 515 "audioop.c"
      case 12: // $bb16
        var $91=HEAP[$len2]; //@line 532 "audioop.c"
        var $92=HEAP[$cp2]; //@line 532 "audioop.c"
        var $93=HEAP[$cp1]; //@line 532 "audioop.c"
        var $94=HEAP[$best_j]; //@line 532 "audioop.c"
        var $95=(($93+2*$94)&4294967295); //@line 532 "audioop.c"
        var $96=__sum2($95, $92, $91); //@line 532 "audioop.c"
        var $97=HEAP[$sum_ri_2]; //@line 532 "audioop.c"
        var $98=($96) / ($97); //@line 532 "audioop.c"
        HEAP[$factor]=$98; //@line 532 "audioop.c"
        var $99=HEAP[$best_j]; //@line 534 "audioop.c"
        var $100=HEAP[$factor]; //@line 534 "audioop.c"
        var $101=_Py_BuildValue(((__str12)&4294967295), $99, $100); //@line 534 "audioop.c"
        HEAP[$0]=$101; //@line 534 "audioop.c"
        __label__ = 13; break; //@line 534 "audioop.c"
      case 13: // $bb17
        var $102=HEAP[$0]; //@line 494 "audioop.c"
        HEAP[$retval]=$102; //@line 494 "audioop.c"
        __label__ = 14; break; //@line 494 "audioop.c"
      case 14: // $return
        var $retval18=HEAP[$retval]; //@line 494 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 494 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_findfactor($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp1=__stackBase__+16;
        var $cp2=__stackBase__+20;
        var $len1=__stackBase__+24;
        var $len2=__stackBase__+28;
        var $sum_ri_2=__stackBase__+32;
        var $sum_aij_ri=__stackBase__+40;
        var $result=__stackBase__+48;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $cp21=$cp2; //@line 548 "audioop.c"
        var $cp13=$cp1; //@line 548 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 548 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), $cp13, $len1, $cp21, $len2); //@line 548 "audioop.c"
        var $3=((($2))|0)==0; //@line 548 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 548 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 550 "audioop.c"
        __label__ = 8; break; //@line 550 "audioop.c"
      case 2: // $bb5
        var $4=HEAP[$len1]; //@line 551 "audioop.c"
        var $5=($4) & 1; //@line 551 "audioop.c"
        var $6=((($5)) & 255); //@line 551 "audioop.c"
        var $toBool=reSign(($6), 8, 0)!=0; //@line 551 "audioop.c"
        if ($toBool) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 551 "audioop.c"
      case 3: // $bb6
        var $7=HEAP[$len2]; //@line 551 "audioop.c"
        var $8=($7) & 1; //@line 551 "audioop.c"
        var $9=((($8)) & 255); //@line 551 "audioop.c"
        var $toBool7=reSign(($9), 8, 0)!=0; //@line 551 "audioop.c"
        if ($toBool7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 551 "audioop.c"
      case 4: // $bb8
        var $10=HEAP[_AudioopError]; //@line 552 "audioop.c"
        _PyErr_SetString($10, ((__str10)&4294967295)); //@line 552 "audioop.c"
        HEAP[$0]=0; //@line 553 "audioop.c"
        __label__ = 8; break; //@line 553 "audioop.c"
      case 5: // $bb9
        var $11=HEAP[$len1]; //@line 555 "audioop.c"
        var $12=HEAP[$len2]; //@line 555 "audioop.c"
        var $13=((($11))|0)!=((($12))|0); //@line 555 "audioop.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 555 "audioop.c"
      case 6: // $bb10
        var $14=HEAP[_AudioopError]; //@line 556 "audioop.c"
        _PyErr_SetString($14, ((__str14)&4294967295)); //@line 556 "audioop.c"
        HEAP[$0]=0; //@line 557 "audioop.c"
        __label__ = 8; break; //@line 557 "audioop.c"
      case 7: // $bb11
        var $15=HEAP[$len2]; //@line 559 "audioop.c"
        var $16=((($15))|0) >> 1; //@line 559 "audioop.c"
        HEAP[$len2]=$16; //@line 559 "audioop.c"
        var $17=HEAP[$len2]; //@line 560 "audioop.c"
        var $18=HEAP[$cp2]; //@line 560 "audioop.c"
        var $19=HEAP[$cp2]; //@line 560 "audioop.c"
        var $20=__sum2($19, $18, $17); //@line 560 "audioop.c"
        HEAP[$sum_ri_2]=$20; //@line 560 "audioop.c"
        var $21=HEAP[$len2]; //@line 561 "audioop.c"
        var $22=HEAP[$cp2]; //@line 561 "audioop.c"
        var $23=HEAP[$cp1]; //@line 561 "audioop.c"
        var $24=__sum2($23, $22, $21); //@line 561 "audioop.c"
        HEAP[$sum_aij_ri]=$24; //@line 561 "audioop.c"
        var $25=HEAP[$sum_aij_ri]; //@line 563 "audioop.c"
        var $26=HEAP[$sum_ri_2]; //@line 563 "audioop.c"
        var $27=($25) / ($26); //@line 563 "audioop.c"
        HEAP[$result]=$27; //@line 563 "audioop.c"
        var $28=HEAP[$result]; //@line 565 "audioop.c"
        var $29=_PyFloat_FromDouble($28); //@line 565 "audioop.c"
        HEAP[$0]=$29; //@line 565 "audioop.c"
        __label__ = 8; break; //@line 565 "audioop.c"
      case 8: // $bb12
        var $30=HEAP[$0]; //@line 550 "audioop.c"
        HEAP[$retval]=$30; //@line 550 "audioop.c"
        __label__ = 9; break; //@line 550 "audioop.c"
      case 9: // $return
        var $retval13=HEAP[$retval]; //@line 550 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 550 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_findmax($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 68; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp1=__stackBase__+16;
        var $len1=__stackBase__+20;
        var $len2=__stackBase__+24;
        var $j=__stackBase__+28;
        var $best_j=__stackBase__+32;
        var $aj_m1=__stackBase__+36;
        var $aj_lm1=__stackBase__+44;
        var $result=__stackBase__+52;
        var $best_result=__stackBase__+60;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $cp11=$cp1; //@line 581 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 581 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str15)&4294967295), $cp11, $len1, $len2); //@line 581 "audioop.c"
        var $3=((($2))|0)==0; //@line 581 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 581 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 583 "audioop.c"
        __label__ = 13; break; //@line 583 "audioop.c"
      case 2: // $bb3
        var $4=HEAP[$len1]; //@line 584 "audioop.c"
        var $5=($4) & 1; //@line 584 "audioop.c"
        var $6=((($5)) & 255); //@line 584 "audioop.c"
        var $toBool=reSign(($6), 8, 0)!=0; //@line 584 "audioop.c"
        if ($toBool) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 584 "audioop.c"
      case 3: // $bb4
        var $7=HEAP[_AudioopError]; //@line 585 "audioop.c"
        _PyErr_SetString($7, ((__str10)&4294967295)); //@line 585 "audioop.c"
        HEAP[$0]=0; //@line 586 "audioop.c"
        __label__ = 13; break; //@line 586 "audioop.c"
      case 4: // $bb5
        var $8=HEAP[$len1]; //@line 588 "audioop.c"
        var $9=((($8))|0) >> 1; //@line 588 "audioop.c"
        HEAP[$len1]=$9; //@line 588 "audioop.c"
        var $10=HEAP[$len2]; //@line 590 "audioop.c"
        var $11=((($10))|0) < 0; //@line 590 "audioop.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 590 "audioop.c"
      case 5: // $bb6
        var $12=HEAP[$len1]; //@line 590 "audioop.c"
        var $13=HEAP[$len2]; //@line 590 "audioop.c"
        var $14=((($12))|0) < ((($13))|0); //@line 590 "audioop.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 590 "audioop.c"
      case 6: // $bb7
        var $15=HEAP[_AudioopError]; //@line 591 "audioop.c"
        _PyErr_SetString($15, ((__str16)&4294967295)); //@line 591 "audioop.c"
        HEAP[$0]=0; //@line 592 "audioop.c"
        __label__ = 13; break; //@line 592 "audioop.c"
      case 7: // $bb8
        var $16=HEAP[$len2]; //@line 595 "audioop.c"
        var $17=HEAP[$cp1]; //@line 595 "audioop.c"
        var $18=HEAP[$cp1]; //@line 595 "audioop.c"
        var $19=__sum2($18, $17, $16); //@line 595 "audioop.c"
        HEAP[$result]=$19; //@line 595 "audioop.c"
        var $20=HEAP[$result]; //@line 597 "audioop.c"
        HEAP[$best_result]=$20; //@line 597 "audioop.c"
        HEAP[$best_j]=0; //@line 598 "audioop.c"
        HEAP[$j]=1; //@line 600 "audioop.c"
        __label__ = 11; break; //@line 600 "audioop.c"
      case 8: // $bb9
        var $21=HEAP[$cp1]; //@line 601 "audioop.c"
        var $22=HEAP[$j]; //@line 601 "audioop.c"
        var $23=((($22) - 1)&4294967295); //@line 601 "audioop.c"
        var $24=(($21+2*$23)&4294967295); //@line 601 "audioop.c"
        var $25=HEAP[$24]; //@line 601 "audioop.c"
        var $26=reSign(($25), 16, 0); //@line 601 "audioop.c"
        HEAP[$aj_m1]=$26; //@line 601 "audioop.c"
        var $27=HEAP[$cp1]; //@line 602 "audioop.c"
        var $28=HEAP[$len2]; //@line 602 "audioop.c"
        var $29=HEAP[$j]; //@line 602 "audioop.c"
        var $30=((($29) + ($28))&4294967295); //@line 602 "audioop.c"
        var $31=((($30) - 1)&4294967295); //@line 602 "audioop.c"
        var $32=(($27+2*$31)&4294967295); //@line 602 "audioop.c"
        var $33=HEAP[$32]; //@line 602 "audioop.c"
        var $34=reSign(($33), 16, 0); //@line 602 "audioop.c"
        HEAP[$aj_lm1]=$34; //@line 602 "audioop.c"
        var $35=HEAP[$aj_lm1]; //@line 604 "audioop.c"
        var $36=HEAP[$aj_lm1]; //@line 604 "audioop.c"
        var $37=($35) * ($36); //@line 604 "audioop.c"
        var $38=HEAP[$result]; //@line 604 "audioop.c"
        var $39=($37) + ($38); //@line 604 "audioop.c"
        var $40=HEAP[$aj_m1]; //@line 604 "audioop.c"
        var $41=HEAP[$aj_m1]; //@line 604 "audioop.c"
        var $42=($40) * ($41); //@line 604 "audioop.c"
        var $43=($39) - ($42); //@line 604 "audioop.c"
        HEAP[$result]=$43; //@line 604 "audioop.c"
        var $44=HEAP[$result]; //@line 606 "audioop.c"
        var $45=HEAP[$best_result]; //@line 606 "audioop.c"
        var $46=($44) > ($45); //@line 606 "audioop.c"
        if ($46) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 606 "audioop.c"
      case 9: // $bb10
        var $47=HEAP[$result]; //@line 607 "audioop.c"
        HEAP[$best_result]=$47; //@line 607 "audioop.c"
        var $48=HEAP[$j]; //@line 608 "audioop.c"
        HEAP[$best_j]=$48; //@line 608 "audioop.c"
        __label__ = 10; break; //@line 608 "audioop.c"
      case 10: // $bb11
        var $49=HEAP[$j]; //@line 600 "audioop.c"
        var $50=((($49) + 1)&4294967295); //@line 600 "audioop.c"
        HEAP[$j]=$50; //@line 600 "audioop.c"
        __label__ = 11; break; //@line 600 "audioop.c"
      case 11: // $bb12
        var $51=HEAP[$len1]; //@line 600 "audioop.c"
        var $52=HEAP[$len2]; //@line 600 "audioop.c"
        var $53=((($51) - ($52))&4294967295); //@line 600 "audioop.c"
        var $54=HEAP[$j]; //@line 600 "audioop.c"
        var $55=((($53))|0) >= ((($54))|0); //@line 600 "audioop.c"
        if ($55) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 600 "audioop.c"
      case 12: // $bb13
        var $56=HEAP[$best_j]; //@line 613 "audioop.c"
        var $57=_PyInt_FromLong($56); //@line 613 "audioop.c"
        HEAP[$0]=$57; //@line 613 "audioop.c"
        __label__ = 13; break; //@line 613 "audioop.c"
      case 13: // $bb14
        var $58=HEAP[$0]; //@line 583 "audioop.c"
        HEAP[$retval]=$58; //@line 583 "audioop.c"
        __label__ = 14; break; //@line 583 "audioop.c"
      case 14: // $return
        var $retval15=HEAP[$retval]; //@line 583 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 583 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_avgpp($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 72; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $len=__stackBase__+20;
        var $size=__stackBase__+24;
        var $val=__stackBase__+28;
        var $prevval=__stackBase__+32;
        var $prevextremevalid=__stackBase__+36;
        var $prevextreme=__stackBase__+40;
        var $i=__stackBase__+44;
        var $avg=__stackBase__+48;
        var $diff=__stackBase__+56;
        var $prevdiff=__stackBase__+60;
        var $extremediff=__stackBase__+64;
        var $nextreme=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 620 "audioop.c"
        HEAP[$prevval]=0; //@line 620 "audioop.c"
        HEAP[$prevextremevalid]=0; //@line 620 "audioop.c"
        HEAP[$prevextreme]=0; //@line 621 "audioop.c"
        HEAP[$avg]=0; //@line 623 "audioop.c"
        HEAP[$nextreme]=0; //@line 624 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 626 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str17)&4294967295), $cp, $len, $size); //@line 626 "audioop.c"
        var $3=((($2))|0)==0; //@line 626 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 626 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 627 "audioop.c"
        __label__ = 37; break; //@line 627 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 628 "audioop.c"
        var $5=HEAP[$len]; //@line 628 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 628 "audioop.c"
        var $7=((($6))|0)==0; //@line 628 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 628 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 629 "audioop.c"
        __label__ = 37; break; //@line 629 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 633 "audioop.c"
        var $9=((($8))|0)==1; //@line 633 "audioop.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 633 "audioop.c"
      case 5: // $bb4
        var $10=HEAP[$cp]; //@line 633 "audioop.c"
        var $11=(($10)&4294967295); //@line 633 "audioop.c"
        var $12=HEAP[$11]; //@line 633 "audioop.c"
        var $13=reSign(($12), 8, 0); //@line 633 "audioop.c"
        HEAP[$prevval]=$13; //@line 633 "audioop.c"
        __label__ = 10; break; //@line 633 "audioop.c"
      case 6: // $bb5
        var $14=HEAP[$size]; //@line 634 "audioop.c"
        var $15=((($14))|0)==2; //@line 634 "audioop.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 634 "audioop.c"
      case 7: // $bb6
        var $16=HEAP[$cp]; //@line 634 "audioop.c"
        var $17=(($16)&4294967295); //@line 634 "audioop.c"
        var $18=$17; //@line 634 "audioop.c"
        var $19=HEAP[$18]; //@line 634 "audioop.c"
        var $20=reSign(($19), 16, 0); //@line 634 "audioop.c"
        HEAP[$prevval]=$20; //@line 634 "audioop.c"
        __label__ = 10; break; //@line 634 "audioop.c"
      case 8: // $bb7
        var $21=HEAP[$size]; //@line 635 "audioop.c"
        var $22=((($21))|0)==4; //@line 635 "audioop.c"
        if ($22) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 635 "audioop.c"
      case 9: // $bb8
        var $23=HEAP[$cp]; //@line 635 "audioop.c"
        var $24=(($23)&4294967295); //@line 635 "audioop.c"
        var $25=$24; //@line 635 "audioop.c"
        var $26=HEAP[$25]; //@line 635 "audioop.c"
        HEAP[$prevval]=$26; //@line 635 "audioop.c"
        __label__ = 10; break; //@line 635 "audioop.c"
      case 10: // $bb9
        var $27=HEAP[$size]; //@line 636 "audioop.c"
        var $28=((($27))|0)==1; //@line 636 "audioop.c"
        if ($28) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 636 "audioop.c"
      case 11: // $bb10
        var $29=HEAP[$cp]; //@line 636 "audioop.c"
        var $30=HEAP[$size]; //@line 636 "audioop.c"
        var $31=(($29+$30)&4294967295); //@line 636 "audioop.c"
        var $32=HEAP[$31]; //@line 636 "audioop.c"
        var $33=reSign(($32), 8, 0); //@line 636 "audioop.c"
        HEAP[$val]=$33; //@line 636 "audioop.c"
        __label__ = 16; break; //@line 636 "audioop.c"
      case 12: // $bb11
        var $34=HEAP[$size]; //@line 637 "audioop.c"
        var $35=((($34))|0)==2; //@line 637 "audioop.c"
        if ($35) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 637 "audioop.c"
      case 13: // $bb12
        var $36=HEAP[$cp]; //@line 637 "audioop.c"
        var $37=HEAP[$size]; //@line 637 "audioop.c"
        var $38=(($36+$37)&4294967295); //@line 637 "audioop.c"
        var $39=$38; //@line 637 "audioop.c"
        var $40=HEAP[$39]; //@line 637 "audioop.c"
        var $41=reSign(($40), 16, 0); //@line 637 "audioop.c"
        HEAP[$val]=$41; //@line 637 "audioop.c"
        __label__ = 16; break; //@line 637 "audioop.c"
      case 14: // $bb13
        var $42=HEAP[$size]; //@line 638 "audioop.c"
        var $43=((($42))|0)==4; //@line 638 "audioop.c"
        if ($43) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 638 "audioop.c"
      case 15: // $bb14
        var $44=HEAP[$cp]; //@line 638 "audioop.c"
        var $45=HEAP[$size]; //@line 638 "audioop.c"
        var $46=(($44+$45)&4294967295); //@line 638 "audioop.c"
        var $47=$46; //@line 638 "audioop.c"
        var $48=HEAP[$47]; //@line 638 "audioop.c"
        HEAP[$val]=$48; //@line 638 "audioop.c"
        __label__ = 16; break; //@line 638 "audioop.c"
      case 16: // $bb15
        var $49=HEAP[$val]; //@line 639 "audioop.c"
        var $50=HEAP[$prevval]; //@line 639 "audioop.c"
        var $51=((($49) - ($50))&4294967295); //@line 639 "audioop.c"
        HEAP[$prevdiff]=$51; //@line 639 "audioop.c"
        var $52=HEAP[$size]; //@line 641 "audioop.c"
        HEAP[$i]=$52; //@line 641 "audioop.c"
        __label__ = 32; break; //@line 641 "audioop.c"
      case 17: // $bb16
        var $53=HEAP[$size]; //@line 642 "audioop.c"
        var $54=((($53))|0)==1; //@line 642 "audioop.c"
        if ($54) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 642 "audioop.c"
      case 18: // $bb17
        var $55=HEAP[$cp]; //@line 642 "audioop.c"
        var $56=HEAP[$i]; //@line 642 "audioop.c"
        var $57=(($55+$56)&4294967295); //@line 642 "audioop.c"
        var $58=HEAP[$57]; //@line 642 "audioop.c"
        var $59=reSign(($58), 8, 0); //@line 642 "audioop.c"
        HEAP[$val]=$59; //@line 642 "audioop.c"
        __label__ = 23; break; //@line 642 "audioop.c"
      case 19: // $bb18
        var $60=HEAP[$size]; //@line 643 "audioop.c"
        var $61=((($60))|0)==2; //@line 643 "audioop.c"
        if ($61) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 643 "audioop.c"
      case 20: // $bb19
        var $62=HEAP[$cp]; //@line 643 "audioop.c"
        var $63=HEAP[$i]; //@line 643 "audioop.c"
        var $64=(($62+$63)&4294967295); //@line 643 "audioop.c"
        var $65=$64; //@line 643 "audioop.c"
        var $66=HEAP[$65]; //@line 643 "audioop.c"
        var $67=reSign(($66), 16, 0); //@line 643 "audioop.c"
        HEAP[$val]=$67; //@line 643 "audioop.c"
        __label__ = 23; break; //@line 643 "audioop.c"
      case 21: // $bb20
        var $68=HEAP[$size]; //@line 644 "audioop.c"
        var $69=((($68))|0)==4; //@line 644 "audioop.c"
        if ($69) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 644 "audioop.c"
      case 22: // $bb21
        var $70=HEAP[$cp]; //@line 644 "audioop.c"
        var $71=HEAP[$i]; //@line 644 "audioop.c"
        var $72=(($70+$71)&4294967295); //@line 644 "audioop.c"
        var $73=$72; //@line 644 "audioop.c"
        var $74=HEAP[$73]; //@line 644 "audioop.c"
        HEAP[$val]=$74; //@line 644 "audioop.c"
        __label__ = 23; break; //@line 644 "audioop.c"
      case 23: // $bb22
        var $75=HEAP[$val]; //@line 645 "audioop.c"
        var $76=HEAP[$prevval]; //@line 645 "audioop.c"
        var $77=((($75) - ($76))&4294967295); //@line 645 "audioop.c"
        HEAP[$diff]=$77; //@line 645 "audioop.c"
        var $78=HEAP[$diff]; //@line 646 "audioop.c"
        var $79=HEAP[$prevdiff]; //@line 646 "audioop.c"
        var $80=((($78) * ($79))&4294967295); //@line 646 "audioop.c"
        var $81=((($80))|0) < 0; //@line 646 "audioop.c"
        if ($81) { __label__ = 24; break; } else { __label__ = 29; break; } //@line 646 "audioop.c"
      case 24: // $bb23
        var $82=HEAP[$prevextremevalid]; //@line 650 "audioop.c"
        var $83=((($82))|0)!=0; //@line 650 "audioop.c"
        if ($83) { __label__ = 25; break; } else { __label__ = 28; break; } //@line 650 "audioop.c"
      case 25: // $bb24
        var $84=HEAP[$prevval]; //@line 651 "audioop.c"
        var $85=HEAP[$prevextreme]; //@line 651 "audioop.c"
        var $86=((($84) - ($85))&4294967295); //@line 651 "audioop.c"
        HEAP[$extremediff]=$86; //@line 651 "audioop.c"
        var $87=HEAP[$extremediff]; //@line 652 "audioop.c"
        var $88=((($87))|0) < 0; //@line 652 "audioop.c"
        if ($88) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 652 "audioop.c"
      case 26: // $bb25
        var $89=HEAP[$extremediff]; //@line 653 "audioop.c"
        var $90=((0 - ($89))&4294967295); //@line 653 "audioop.c"
        HEAP[$extremediff]=$90; //@line 653 "audioop.c"
        __label__ = 27; break; //@line 653 "audioop.c"
      case 27: // $bb26
        var $91=HEAP[$extremediff]; //@line 654 "audioop.c"
        var $92=((($91))|0); //@line 654 "audioop.c"
        var $93=HEAP[$avg]; //@line 654 "audioop.c"
        var $94=($92) + ($93); //@line 654 "audioop.c"
        HEAP[$avg]=$94; //@line 654 "audioop.c"
        var $95=HEAP[$nextreme]; //@line 655 "audioop.c"
        var $96=((($95) + 1)&4294967295); //@line 655 "audioop.c"
        HEAP[$nextreme]=$96; //@line 655 "audioop.c"
        __label__ = 28; break; //@line 655 "audioop.c"
      case 28: // $bb27
        HEAP[$prevextremevalid]=1; //@line 657 "audioop.c"
        var $97=HEAP[$prevval]; //@line 658 "audioop.c"
        HEAP[$prevextreme]=$97; //@line 658 "audioop.c"
        __label__ = 29; break; //@line 658 "audioop.c"
      case 29: // $bb28
        var $98=HEAP[$val]; //@line 660 "audioop.c"
        HEAP[$prevval]=$98; //@line 660 "audioop.c"
        var $99=HEAP[$diff]; //@line 661 "audioop.c"
        var $100=((($99))|0)!=0; //@line 661 "audioop.c"
        if ($100) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 661 "audioop.c"
      case 30: // $bb29
        var $101=HEAP[$diff]; //@line 662 "audioop.c"
        HEAP[$prevdiff]=$101; //@line 662 "audioop.c"
        __label__ = 31; break; //@line 662 "audioop.c"
      case 31: // $bb30
        var $102=HEAP[$size]; //@line 641 "audioop.c"
        var $103=HEAP[$i]; //@line 641 "audioop.c"
        var $104=((($103) + ($102))&4294967295); //@line 641 "audioop.c"
        HEAP[$i]=$104; //@line 641 "audioop.c"
        __label__ = 32; break; //@line 641 "audioop.c"
      case 32: // $bb31
        var $105=HEAP[$len]; //@line 641 "audioop.c"
        var $106=HEAP[$i]; //@line 641 "audioop.c"
        var $107=((($106))|0) < ((($105))|0); //@line 641 "audioop.c"
        if ($107) { __label__ = 17; break; } else { __label__ = 33; break; } //@line 641 "audioop.c"
      case 33: // $bb32
        var $108=HEAP[$nextreme]; //@line 664 "audioop.c"
        var $109=((($108))|0)==0; //@line 664 "audioop.c"
        if ($109) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 664 "audioop.c"
      case 34: // $bb33
        HEAP[$val]=0; //@line 665 "audioop.c"
        __label__ = 36; break; //@line 665 "audioop.c"
      case 35: // $bb34
        var $110=HEAP[$nextreme]; //@line 667 "audioop.c"
        var $111=((($110))|0); //@line 667 "audioop.c"
        var $112=HEAP[$avg]; //@line 667 "audioop.c"
        var $113=($112) / ($111); //@line 667 "audioop.c"
        var $114=((($113))|0); //@line 667 "audioop.c"
        HEAP[$val]=$114; //@line 667 "audioop.c"
        __label__ = 36; break; //@line 667 "audioop.c"
      case 36: // $bb35
        var $115=HEAP[$val]; //@line 668 "audioop.c"
        var $116=_PyInt_FromLong($115); //@line 668 "audioop.c"
        HEAP[$0]=$116; //@line 668 "audioop.c"
        __label__ = 37; break; //@line 668 "audioop.c"
      case 37: // $bb36
        var $117=HEAP[$0]; //@line 627 "audioop.c"
        HEAP[$retval]=$117; //@line 627 "audioop.c"
        __label__ = 38; break; //@line 627 "audioop.c"
      case 38: // $return
        var $retval37=HEAP[$retval]; //@line 627 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval37; //@line 627 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_maxpp($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 64; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $len=__stackBase__+20;
        var $size=__stackBase__+24;
        var $val=__stackBase__+28;
        var $prevval=__stackBase__+32;
        var $prevextremevalid=__stackBase__+36;
        var $prevextreme=__stackBase__+40;
        var $i=__stackBase__+44;
        var $max=__stackBase__+48;
        var $diff=__stackBase__+52;
        var $prevdiff=__stackBase__+56;
        var $extremediff=__stackBase__+60;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 675 "audioop.c"
        HEAP[$prevval]=0; //@line 675 "audioop.c"
        HEAP[$prevextremevalid]=0; //@line 675 "audioop.c"
        HEAP[$prevextreme]=0; //@line 676 "audioop.c"
        HEAP[$max]=0; //@line 678 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 681 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str18)&4294967295), $cp, $len, $size); //@line 681 "audioop.c"
        var $3=((($2))|0)==0; //@line 681 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 681 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 682 "audioop.c"
        __label__ = 35; break; //@line 682 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 683 "audioop.c"
        var $5=HEAP[$len]; //@line 683 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 683 "audioop.c"
        var $7=((($6))|0)==0; //@line 683 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 683 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 684 "audioop.c"
        __label__ = 35; break; //@line 684 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 688 "audioop.c"
        var $9=((($8))|0)==1; //@line 688 "audioop.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 688 "audioop.c"
      case 5: // $bb4
        var $10=HEAP[$cp]; //@line 688 "audioop.c"
        var $11=(($10)&4294967295); //@line 688 "audioop.c"
        var $12=HEAP[$11]; //@line 688 "audioop.c"
        var $13=reSign(($12), 8, 0); //@line 688 "audioop.c"
        HEAP[$prevval]=$13; //@line 688 "audioop.c"
        __label__ = 10; break; //@line 688 "audioop.c"
      case 6: // $bb5
        var $14=HEAP[$size]; //@line 689 "audioop.c"
        var $15=((($14))|0)==2; //@line 689 "audioop.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 689 "audioop.c"
      case 7: // $bb6
        var $16=HEAP[$cp]; //@line 689 "audioop.c"
        var $17=(($16)&4294967295); //@line 689 "audioop.c"
        var $18=$17; //@line 689 "audioop.c"
        var $19=HEAP[$18]; //@line 689 "audioop.c"
        var $20=reSign(($19), 16, 0); //@line 689 "audioop.c"
        HEAP[$prevval]=$20; //@line 689 "audioop.c"
        __label__ = 10; break; //@line 689 "audioop.c"
      case 8: // $bb7
        var $21=HEAP[$size]; //@line 690 "audioop.c"
        var $22=((($21))|0)==4; //@line 690 "audioop.c"
        if ($22) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 690 "audioop.c"
      case 9: // $bb8
        var $23=HEAP[$cp]; //@line 690 "audioop.c"
        var $24=(($23)&4294967295); //@line 690 "audioop.c"
        var $25=$24; //@line 690 "audioop.c"
        var $26=HEAP[$25]; //@line 690 "audioop.c"
        HEAP[$prevval]=$26; //@line 690 "audioop.c"
        __label__ = 10; break; //@line 690 "audioop.c"
      case 10: // $bb9
        var $27=HEAP[$size]; //@line 691 "audioop.c"
        var $28=((($27))|0)==1; //@line 691 "audioop.c"
        if ($28) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 691 "audioop.c"
      case 11: // $bb10
        var $29=HEAP[$cp]; //@line 691 "audioop.c"
        var $30=HEAP[$size]; //@line 691 "audioop.c"
        var $31=(($29+$30)&4294967295); //@line 691 "audioop.c"
        var $32=HEAP[$31]; //@line 691 "audioop.c"
        var $33=reSign(($32), 8, 0); //@line 691 "audioop.c"
        HEAP[$val]=$33; //@line 691 "audioop.c"
        __label__ = 16; break; //@line 691 "audioop.c"
      case 12: // $bb11
        var $34=HEAP[$size]; //@line 692 "audioop.c"
        var $35=((($34))|0)==2; //@line 692 "audioop.c"
        if ($35) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 692 "audioop.c"
      case 13: // $bb12
        var $36=HEAP[$cp]; //@line 692 "audioop.c"
        var $37=HEAP[$size]; //@line 692 "audioop.c"
        var $38=(($36+$37)&4294967295); //@line 692 "audioop.c"
        var $39=$38; //@line 692 "audioop.c"
        var $40=HEAP[$39]; //@line 692 "audioop.c"
        var $41=reSign(($40), 16, 0); //@line 692 "audioop.c"
        HEAP[$val]=$41; //@line 692 "audioop.c"
        __label__ = 16; break; //@line 692 "audioop.c"
      case 14: // $bb13
        var $42=HEAP[$size]; //@line 693 "audioop.c"
        var $43=((($42))|0)==4; //@line 693 "audioop.c"
        if ($43) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 693 "audioop.c"
      case 15: // $bb14
        var $44=HEAP[$cp]; //@line 693 "audioop.c"
        var $45=HEAP[$size]; //@line 693 "audioop.c"
        var $46=(($44+$45)&4294967295); //@line 693 "audioop.c"
        var $47=$46; //@line 693 "audioop.c"
        var $48=HEAP[$47]; //@line 693 "audioop.c"
        HEAP[$val]=$48; //@line 693 "audioop.c"
        __label__ = 16; break; //@line 693 "audioop.c"
      case 16: // $bb15
        var $49=HEAP[$val]; //@line 694 "audioop.c"
        var $50=HEAP[$prevval]; //@line 694 "audioop.c"
        var $51=((($49) - ($50))&4294967295); //@line 694 "audioop.c"
        HEAP[$prevdiff]=$51; //@line 694 "audioop.c"
        var $52=HEAP[$size]; //@line 696 "audioop.c"
        HEAP[$i]=$52; //@line 696 "audioop.c"
        __label__ = 33; break; //@line 696 "audioop.c"
      case 17: // $bb16
        var $53=HEAP[$size]; //@line 697 "audioop.c"
        var $54=((($53))|0)==1; //@line 697 "audioop.c"
        if ($54) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 697 "audioop.c"
      case 18: // $bb17
        var $55=HEAP[$cp]; //@line 697 "audioop.c"
        var $56=HEAP[$i]; //@line 697 "audioop.c"
        var $57=(($55+$56)&4294967295); //@line 697 "audioop.c"
        var $58=HEAP[$57]; //@line 697 "audioop.c"
        var $59=reSign(($58), 8, 0); //@line 697 "audioop.c"
        HEAP[$val]=$59; //@line 697 "audioop.c"
        __label__ = 23; break; //@line 697 "audioop.c"
      case 19: // $bb18
        var $60=HEAP[$size]; //@line 698 "audioop.c"
        var $61=((($60))|0)==2; //@line 698 "audioop.c"
        if ($61) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 698 "audioop.c"
      case 20: // $bb19
        var $62=HEAP[$cp]; //@line 698 "audioop.c"
        var $63=HEAP[$i]; //@line 698 "audioop.c"
        var $64=(($62+$63)&4294967295); //@line 698 "audioop.c"
        var $65=$64; //@line 698 "audioop.c"
        var $66=HEAP[$65]; //@line 698 "audioop.c"
        var $67=reSign(($66), 16, 0); //@line 698 "audioop.c"
        HEAP[$val]=$67; //@line 698 "audioop.c"
        __label__ = 23; break; //@line 698 "audioop.c"
      case 21: // $bb20
        var $68=HEAP[$size]; //@line 699 "audioop.c"
        var $69=((($68))|0)==4; //@line 699 "audioop.c"
        if ($69) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 699 "audioop.c"
      case 22: // $bb21
        var $70=HEAP[$cp]; //@line 699 "audioop.c"
        var $71=HEAP[$i]; //@line 699 "audioop.c"
        var $72=(($70+$71)&4294967295); //@line 699 "audioop.c"
        var $73=$72; //@line 699 "audioop.c"
        var $74=HEAP[$73]; //@line 699 "audioop.c"
        HEAP[$val]=$74; //@line 699 "audioop.c"
        __label__ = 23; break; //@line 699 "audioop.c"
      case 23: // $bb22
        var $75=HEAP[$val]; //@line 700 "audioop.c"
        var $76=HEAP[$prevval]; //@line 700 "audioop.c"
        var $77=((($75) - ($76))&4294967295); //@line 700 "audioop.c"
        HEAP[$diff]=$77; //@line 700 "audioop.c"
        var $78=HEAP[$diff]; //@line 701 "audioop.c"
        var $79=HEAP[$prevdiff]; //@line 701 "audioop.c"
        var $80=((($78) * ($79))&4294967295); //@line 701 "audioop.c"
        var $81=((($80))|0) < 0; //@line 701 "audioop.c"
        if ($81) { __label__ = 24; break; } else { __label__ = 30; break; } //@line 701 "audioop.c"
      case 24: // $bb23
        var $82=HEAP[$prevextremevalid]; //@line 705 "audioop.c"
        var $83=((($82))|0)!=0; //@line 705 "audioop.c"
        if ($83) { __label__ = 25; break; } else { __label__ = 29; break; } //@line 705 "audioop.c"
      case 25: // $bb24
        var $84=HEAP[$prevval]; //@line 706 "audioop.c"
        var $85=HEAP[$prevextreme]; //@line 706 "audioop.c"
        var $86=((($84) - ($85))&4294967295); //@line 706 "audioop.c"
        HEAP[$extremediff]=$86; //@line 706 "audioop.c"
        var $87=HEAP[$extremediff]; //@line 707 "audioop.c"
        var $88=((($87))|0) < 0; //@line 707 "audioop.c"
        if ($88) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 707 "audioop.c"
      case 26: // $bb25
        var $89=HEAP[$extremediff]; //@line 708 "audioop.c"
        var $90=((0 - ($89))&4294967295); //@line 708 "audioop.c"
        HEAP[$extremediff]=$90; //@line 708 "audioop.c"
        __label__ = 27; break; //@line 708 "audioop.c"
      case 27: // $bb26
        var $91=HEAP[$extremediff]; //@line 709 "audioop.c"
        var $92=HEAP[$max]; //@line 709 "audioop.c"
        var $93=((($91))|0) > ((($92))|0); //@line 709 "audioop.c"
        if ($93) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 709 "audioop.c"
      case 28: // $bb27
        var $94=HEAP[$extremediff]; //@line 710 "audioop.c"
        HEAP[$max]=$94; //@line 710 "audioop.c"
        __label__ = 29; break; //@line 710 "audioop.c"
      case 29: // $bb28
        HEAP[$prevextremevalid]=1; //@line 712 "audioop.c"
        var $95=HEAP[$prevval]; //@line 713 "audioop.c"
        HEAP[$prevextreme]=$95; //@line 713 "audioop.c"
        __label__ = 30; break; //@line 713 "audioop.c"
      case 30: // $bb29
        var $96=HEAP[$val]; //@line 715 "audioop.c"
        HEAP[$prevval]=$96; //@line 715 "audioop.c"
        var $97=HEAP[$diff]; //@line 716 "audioop.c"
        var $98=((($97))|0)!=0; //@line 716 "audioop.c"
        if ($98) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 716 "audioop.c"
      case 31: // $bb30
        var $99=HEAP[$diff]; //@line 717 "audioop.c"
        HEAP[$prevdiff]=$99; //@line 717 "audioop.c"
        __label__ = 32; break; //@line 717 "audioop.c"
      case 32: // $bb31
        var $100=HEAP[$size]; //@line 696 "audioop.c"
        var $101=HEAP[$i]; //@line 696 "audioop.c"
        var $102=((($101) + ($100))&4294967295); //@line 696 "audioop.c"
        HEAP[$i]=$102; //@line 696 "audioop.c"
        __label__ = 33; break; //@line 696 "audioop.c"
      case 33: // $bb32
        var $103=HEAP[$len]; //@line 696 "audioop.c"
        var $104=HEAP[$i]; //@line 696 "audioop.c"
        var $105=((($104))|0) < ((($103))|0); //@line 696 "audioop.c"
        if ($105) { __label__ = 17; break; } else { __label__ = 34; break; } //@line 696 "audioop.c"
      case 34: // $bb33
        var $106=HEAP[$max]; //@line 719 "audioop.c"
        var $107=_PyInt_FromLong($106); //@line 719 "audioop.c"
        HEAP[$0]=$107; //@line 719 "audioop.c"
        __label__ = 35; break; //@line 719 "audioop.c"
      case 35: // $bb34
        var $108=HEAP[$0]; //@line 682 "audioop.c"
        HEAP[$retval]=$108; //@line 682 "audioop.c"
        __label__ = 36; break; //@line 682 "audioop.c"
      case 36: // $return
        var $retval35=HEAP[$retval]; //@line 682 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval35; //@line 682 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_cross($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $len=__stackBase__+20;
        var $size=__stackBase__+24;
        var $val=__stackBase__+28;
        var $i=__stackBase__+32;
        var $prevval=__stackBase__+36;
        var $ncross=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 726 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 730 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str19)&4294967295), $cp, $len, $size); //@line 730 "audioop.c"
        var $3=((($2))|0)==0; //@line 730 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 730 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 731 "audioop.c"
        __label__ = 16; break; //@line 731 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 732 "audioop.c"
        var $5=HEAP[$len]; //@line 732 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 732 "audioop.c"
        var $7=((($6))|0)==0; //@line 732 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 732 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 733 "audioop.c"
        __label__ = 16; break; //@line 733 "audioop.c"
      case 4: // $bb3
        HEAP[$ncross]=-1; //@line 734 "audioop.c"
        HEAP[$prevval]=17; //@line 735 "audioop.c"
        HEAP[$i]=0; //@line 736 "audioop.c"
        __label__ = 14; break; //@line 736 "audioop.c"
      case 5: // $bb4
        var $8=HEAP[$size]; //@line 737 "audioop.c"
        var $9=((($8))|0)==1; //@line 737 "audioop.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 737 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$cp]; //@line 737 "audioop.c"
        var $11=HEAP[$i]; //@line 737 "audioop.c"
        var $12=(($10+$11)&4294967295); //@line 737 "audioop.c"
        var $13=HEAP[$12]; //@line 737 "audioop.c"
        var $14=reSign(($13), 8, 0) >> 7; //@line 737 "audioop.c"
        var $15=reSign(($14), 8, 0); //@line 737 "audioop.c"
        HEAP[$val]=$15; //@line 737 "audioop.c"
        __label__ = 11; break; //@line 737 "audioop.c"
      case 7: // $bb6
        var $16=HEAP[$size]; //@line 738 "audioop.c"
        var $17=((($16))|0)==2; //@line 738 "audioop.c"
        if ($17) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 738 "audioop.c"
      case 8: // $bb7
        var $18=HEAP[$cp]; //@line 738 "audioop.c"
        var $19=HEAP[$i]; //@line 738 "audioop.c"
        var $20=(($18+$19)&4294967295); //@line 738 "audioop.c"
        var $21=$20; //@line 738 "audioop.c"
        var $22=HEAP[$21]; //@line 738 "audioop.c"
        var $23=reSign(($22), 16, 0) >> 15; //@line 738 "audioop.c"
        var $24=reSign(($23), 16, 0); //@line 738 "audioop.c"
        HEAP[$val]=$24; //@line 738 "audioop.c"
        __label__ = 11; break; //@line 738 "audioop.c"
      case 9: // $bb8
        var $25=HEAP[$size]; //@line 739 "audioop.c"
        var $26=((($25))|0)==4; //@line 739 "audioop.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 739 "audioop.c"
      case 10: // $bb9
        var $27=HEAP[$cp]; //@line 739 "audioop.c"
        var $28=HEAP[$i]; //@line 739 "audioop.c"
        var $29=(($27+$28)&4294967295); //@line 739 "audioop.c"
        var $30=$29; //@line 739 "audioop.c"
        var $31=HEAP[$30]; //@line 739 "audioop.c"
        var $32=((($31))|0) >> 31; //@line 739 "audioop.c"
        HEAP[$val]=$32; //@line 739 "audioop.c"
        __label__ = 11; break; //@line 739 "audioop.c"
      case 11: // $bb10
        var $33=HEAP[$val]; //@line 740 "audioop.c"
        var $34=($33) & 1; //@line 740 "audioop.c"
        HEAP[$val]=$34; //@line 740 "audioop.c"
        var $35=HEAP[$val]; //@line 741 "audioop.c"
        var $36=HEAP[$prevval]; //@line 741 "audioop.c"
        var $37=((($35))|0)!=((($36))|0); //@line 741 "audioop.c"
        if ($37) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 741 "audioop.c"
      case 12: // $bb11
        var $38=HEAP[$ncross]; //@line 741 "audioop.c"
        var $39=((($38) + 1)&4294967295); //@line 741 "audioop.c"
        HEAP[$ncross]=$39; //@line 741 "audioop.c"
        __label__ = 13; break; //@line 741 "audioop.c"
      case 13: // $bb12
        var $40=HEAP[$val]; //@line 742 "audioop.c"
        HEAP[$prevval]=$40; //@line 742 "audioop.c"
        var $41=HEAP[$size]; //@line 736 "audioop.c"
        var $42=HEAP[$i]; //@line 736 "audioop.c"
        var $43=((($42) + ($41))&4294967295); //@line 736 "audioop.c"
        HEAP[$i]=$43; //@line 736 "audioop.c"
        __label__ = 14; break; //@line 736 "audioop.c"
      case 14: // $bb13
        var $44=HEAP[$len]; //@line 736 "audioop.c"
        var $45=HEAP[$i]; //@line 736 "audioop.c"
        var $46=((($45))|0) < ((($44))|0); //@line 736 "audioop.c"
        if ($46) { __label__ = 5; break; } else { __label__ = 15; break; } //@line 736 "audioop.c"
      case 15: // $bb14
        var $47=HEAP[$ncross]; //@line 744 "audioop.c"
        var $48=_PyInt_FromLong($47); //@line 744 "audioop.c"
        HEAP[$0]=$48; //@line 744 "audioop.c"
        __label__ = 16; break; //@line 744 "audioop.c"
      case 16: // $bb15
        var $49=HEAP[$0]; //@line 731 "audioop.c"
        HEAP[$retval]=$49; //@line 731 "audioop.c"
        __label__ = 17; break; //@line 731 "audioop.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 731 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 731 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_mul($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 68; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $ncp=__stackBase__+20;
        var $len=__stackBase__+24;
        var $size=__stackBase__+28;
        var $val=__stackBase__+32;
        var $factor=__stackBase__+36;
        var $fval=__stackBase__+44;
        var $maxval=__stackBase__+52;
        var $rv=__stackBase__+60;
        var $i=__stackBase__+64;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 751 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 756 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str20)&4294967295), $cp, $len, $size, $factor); //@line 756 "audioop.c"
        var $3=((($2))|0)==0; //@line 756 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 756 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 757 "audioop.c"
        __label__ = 33; break; //@line 757 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 758 "audioop.c"
        var $5=HEAP[$len]; //@line 758 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 758 "audioop.c"
        var $7=((($6))|0)==0; //@line 758 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 758 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 759 "audioop.c"
        __label__ = 33; break; //@line 759 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 761 "audioop.c"
        var $9=((($8))|0)==1; //@line 761 "audioop.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 761 "audioop.c"
      case 5: // $bb4
        HEAP[$maxval]=127; //@line 761 "audioop.c"
        __label__ = 11; break; //@line 761 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$size]; //@line 762 "audioop.c"
        var $11=((($10))|0)==2; //@line 762 "audioop.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 762 "audioop.c"
      case 7: // $bb6
        HEAP[$maxval]=32767; //@line 762 "audioop.c"
        __label__ = 11; break; //@line 762 "audioop.c"
      case 8: // $bb7
        var $12=HEAP[$size]; //@line 763 "audioop.c"
        var $13=((($12))|0)==4; //@line 763 "audioop.c"
        if ($13) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 763 "audioop.c"
      case 9: // $bb8
        HEAP[$maxval]=2147483647; //@line 763 "audioop.c"
        __label__ = 11; break; //@line 763 "audioop.c"
      case 10: // $bb9
        var $14=HEAP[_AudioopError]; //@line 765 "audioop.c"
        _PyErr_SetString($14, ((__str)&4294967295)); //@line 765 "audioop.c"
        HEAP[$0]=0; //@line 766 "audioop.c"
        __label__ = 33; break; //@line 766 "audioop.c"
      case 11: // $bb10
        var $15=HEAP[$len]; //@line 769 "audioop.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 769 "audioop.c"
        HEAP[$rv]=$16; //@line 769 "audioop.c"
        var $17=HEAP[$rv]; //@line 770 "audioop.c"
        var $18=($17)==0; //@line 770 "audioop.c"
        if ($18) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 770 "audioop.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 771 "audioop.c"
        __label__ = 33; break; //@line 771 "audioop.c"
      case 13: // $bb12
        var $19=HEAP[$rv]; //@line 772 "audioop.c"
        var $20=_PyString_AsString($19); //@line 772 "audioop.c"
        HEAP[$ncp]=$20; //@line 772 "audioop.c"
        HEAP[$i]=0; //@line 775 "audioop.c"
        __label__ = 31; break; //@line 775 "audioop.c"
      case 14: // $bb13
        var $21=HEAP[$size]; //@line 776 "audioop.c"
        var $22=((($21))|0)==1; //@line 776 "audioop.c"
        if ($22) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 776 "audioop.c"
      case 15: // $bb14
        var $23=HEAP[$cp]; //@line 776 "audioop.c"
        var $24=HEAP[$i]; //@line 776 "audioop.c"
        var $25=(($23+$24)&4294967295); //@line 776 "audioop.c"
        var $26=HEAP[$25]; //@line 776 "audioop.c"
        var $27=reSign(($26), 8, 0); //@line 776 "audioop.c"
        HEAP[$val]=$27; //@line 776 "audioop.c"
        __label__ = 20; break; //@line 776 "audioop.c"
      case 16: // $bb15
        var $28=HEAP[$size]; //@line 777 "audioop.c"
        var $29=((($28))|0)==2; //@line 777 "audioop.c"
        if ($29) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 777 "audioop.c"
      case 17: // $bb16
        var $30=HEAP[$cp]; //@line 777 "audioop.c"
        var $31=HEAP[$i]; //@line 777 "audioop.c"
        var $32=(($30+$31)&4294967295); //@line 777 "audioop.c"
        var $33=$32; //@line 777 "audioop.c"
        var $34=HEAP[$33]; //@line 777 "audioop.c"
        var $35=reSign(($34), 16, 0); //@line 777 "audioop.c"
        HEAP[$val]=$35; //@line 777 "audioop.c"
        __label__ = 20; break; //@line 777 "audioop.c"
      case 18: // $bb17
        var $36=HEAP[$size]; //@line 778 "audioop.c"
        var $37=((($36))|0)==4; //@line 778 "audioop.c"
        if ($37) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 778 "audioop.c"
      case 19: // $bb18
        var $38=HEAP[$cp]; //@line 778 "audioop.c"
        var $39=HEAP[$i]; //@line 778 "audioop.c"
        var $40=(($38+$39)&4294967295); //@line 778 "audioop.c"
        var $41=$40; //@line 778 "audioop.c"
        var $42=HEAP[$41]; //@line 778 "audioop.c"
        HEAP[$val]=$42; //@line 778 "audioop.c"
        __label__ = 20; break; //@line 778 "audioop.c"
      case 20: // $bb19
        var $43=HEAP[$val]; //@line 779 "audioop.c"
        var $44=((($43))|0); //@line 779 "audioop.c"
        var $45=HEAP[$factor]; //@line 779 "audioop.c"
        var $46=($44) * ($45); //@line 779 "audioop.c"
        HEAP[$fval]=$46; //@line 779 "audioop.c"
        var $47=HEAP[$fval]; //@line 780 "audioop.c"
        var $48=HEAP[$maxval]; //@line 780 "audioop.c"
        var $49=($47) > ($48); //@line 780 "audioop.c"
        if ($49) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 780 "audioop.c"
      case 21: // $bb20
        var $50=HEAP[$maxval]; //@line 780 "audioop.c"
        HEAP[$fval]=$50; //@line 780 "audioop.c"
        __label__ = 24; break; //@line 780 "audioop.c"
      case 22: // $bb21
        var $51=HEAP[$maxval]; //@line 781 "audioop.c"
        var $52=0 - ($51); //@line 781 "audioop.c"
        var $53=HEAP[$fval]; //@line 781 "audioop.c"
        var $54=($52) > ($53); //@line 781 "audioop.c"
        if ($54) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 781 "audioop.c"
      case 23: // $bb22
        var $55=HEAP[$maxval]; //@line 781 "audioop.c"
        var $56=0 - ($55); //@line 781 "audioop.c"
        HEAP[$fval]=$56; //@line 781 "audioop.c"
        __label__ = 24; break; //@line 781 "audioop.c"
      case 24: // $bb23
        var $57=HEAP[$fval]; //@line 782 "audioop.c"
        var $58=((($57))|0); //@line 782 "audioop.c"
        HEAP[$val]=$58; //@line 782 "audioop.c"
        var $59=HEAP[$size]; //@line 783 "audioop.c"
        var $60=((($59))|0)==1; //@line 783 "audioop.c"
        if ($60) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 783 "audioop.c"
      case 25: // $bb24
        var $61=HEAP[$val]; //@line 783 "audioop.c"
        var $62=((($61)) & 255); //@line 783 "audioop.c"
        var $63=HEAP[$ncp]; //@line 783 "audioop.c"
        var $64=HEAP[$i]; //@line 783 "audioop.c"
        var $65=(($63+$64)&4294967295); //@line 783 "audioop.c"
        HEAP[$65]=$62; //@line 783 "audioop.c"
        __label__ = 30; break; //@line 783 "audioop.c"
      case 26: // $bb25
        var $66=HEAP[$size]; //@line 784 "audioop.c"
        var $67=((($66))|0)==2; //@line 784 "audioop.c"
        if ($67) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 784 "audioop.c"
      case 27: // $bb26
        var $68=HEAP[$ncp]; //@line 784 "audioop.c"
        var $69=HEAP[$i]; //@line 784 "audioop.c"
        var $70=(($68+$69)&4294967295); //@line 784 "audioop.c"
        var $71=$70; //@line 784 "audioop.c"
        var $72=HEAP[$val]; //@line 784 "audioop.c"
        var $73=((($72)) & 65535); //@line 784 "audioop.c"
        HEAP[$71]=$73; //@line 784 "audioop.c"
        __label__ = 30; break; //@line 784 "audioop.c"
      case 28: // $bb27
        var $74=HEAP[$size]; //@line 785 "audioop.c"
        var $75=((($74))|0)==4; //@line 785 "audioop.c"
        if ($75) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 785 "audioop.c"
      case 29: // $bb28
        var $76=HEAP[$ncp]; //@line 785 "audioop.c"
        var $77=HEAP[$i]; //@line 785 "audioop.c"
        var $78=(($76+$77)&4294967295); //@line 785 "audioop.c"
        var $79=$78; //@line 785 "audioop.c"
        var $80=HEAP[$val]; //@line 785 "audioop.c"
        HEAP[$79]=$80; //@line 785 "audioop.c"
        __label__ = 30; break; //@line 785 "audioop.c"
      case 30: // $bb29
        var $81=HEAP[$size]; //@line 775 "audioop.c"
        var $82=HEAP[$i]; //@line 775 "audioop.c"
        var $83=((($82) + ($81))&4294967295); //@line 775 "audioop.c"
        HEAP[$i]=$83; //@line 775 "audioop.c"
        __label__ = 31; break; //@line 775 "audioop.c"
      case 31: // $bb30
        var $84=HEAP[$len]; //@line 775 "audioop.c"
        var $85=HEAP[$i]; //@line 775 "audioop.c"
        var $86=((($85))|0) < ((($84))|0); //@line 775 "audioop.c"
        if ($86) { __label__ = 14; break; } else { __label__ = 32; break; } //@line 775 "audioop.c"
      case 32: // $bb31
        var $87=HEAP[$rv]; //@line 787 "audioop.c"
        HEAP[$0]=$87; //@line 787 "audioop.c"
        __label__ = 33; break; //@line 787 "audioop.c"
      case 33: // $bb32
        var $88=HEAP[$0]; //@line 757 "audioop.c"
        HEAP[$retval]=$88; //@line 757 "audioop.c"
        __label__ = 34; break; //@line 757 "audioop.c"
      case 34: // $return
        var $retval33=HEAP[$retval]; //@line 757 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval33; //@line 757 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_tomono($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 80; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $ncp=__stackBase__+20;
        var $len=__stackBase__+24;
        var $size=__stackBase__+28;
        var $val1=__stackBase__+32;
        var $val2=__stackBase__+36;
        var $fac1=__stackBase__+40;
        var $fac2=__stackBase__+48;
        var $fval=__stackBase__+56;
        var $maxval=__stackBase__+64;
        var $rv=__stackBase__+72;
        var $i=__stackBase__+76;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val1]=0; //@line 794 "audioop.c"
        HEAP[$val2]=0; //@line 794 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 799 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str21)&4294967295), $cp, $len, $size, $fac1, $fac2); //@line 799 "audioop.c"
        var $3=((($2))|0)==0; //@line 799 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 799 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 801 "audioop.c"
        __label__ = 41; break; //@line 801 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 802 "audioop.c"
        var $5=HEAP[$len]; //@line 802 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 802 "audioop.c"
        var $7=((($6))|0)==0; //@line 802 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 802 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 803 "audioop.c"
        __label__ = 41; break; //@line 803 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len]; //@line 804 "audioop.c"
        var $9=HEAP[$size]; //@line 804 "audioop.c"
        var $10=((((($8))|0)/((($9))|0))|0); //@line 804 "audioop.c"
        var $11=($10) & 1; //@line 804 "audioop.c"
        var $12=((($11)) & 255); //@line 804 "audioop.c"
        var $toBool=reSign(($12), 8, 0)!=0; //@line 804 "audioop.c"
        if ($toBool) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 804 "audioop.c"
      case 5: // $bb4
        var $13=HEAP[_AudioopError]; //@line 805 "audioop.c"
        _PyErr_SetString($13, ((__str1)&4294967295)); //@line 805 "audioop.c"
        HEAP[$0]=0; //@line 806 "audioop.c"
        __label__ = 41; break; //@line 806 "audioop.c"
      case 6: // $bb5
        var $14=HEAP[$size]; //@line 809 "audioop.c"
        var $15=((($14))|0)==1; //@line 809 "audioop.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 809 "audioop.c"
      case 7: // $bb6
        HEAP[$maxval]=127; //@line 809 "audioop.c"
        __label__ = 13; break; //@line 809 "audioop.c"
      case 8: // $bb7
        var $16=HEAP[$size]; //@line 810 "audioop.c"
        var $17=((($16))|0)==2; //@line 810 "audioop.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 810 "audioop.c"
      case 9: // $bb8
        HEAP[$maxval]=32767; //@line 810 "audioop.c"
        __label__ = 13; break; //@line 810 "audioop.c"
      case 10: // $bb9
        var $18=HEAP[$size]; //@line 811 "audioop.c"
        var $19=((($18))|0)==4; //@line 811 "audioop.c"
        if ($19) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 811 "audioop.c"
      case 11: // $bb10
        HEAP[$maxval]=2147483647; //@line 811 "audioop.c"
        __label__ = 13; break; //@line 811 "audioop.c"
      case 12: // $bb11
        var $20=HEAP[_AudioopError]; //@line 813 "audioop.c"
        _PyErr_SetString($20, ((__str)&4294967295)); //@line 813 "audioop.c"
        HEAP[$0]=0; //@line 814 "audioop.c"
        __label__ = 41; break; //@line 814 "audioop.c"
      case 13: // $bb12
        var $21=HEAP[$len]; //@line 817 "audioop.c"
        var $22=((((($21))|0)/2)|0); //@line 817 "audioop.c"
        var $23=_PyString_FromStringAndSize(0, $22); //@line 817 "audioop.c"
        HEAP[$rv]=$23; //@line 817 "audioop.c"
        var $24=HEAP[$rv]; //@line 818 "audioop.c"
        var $25=($24)==0; //@line 818 "audioop.c"
        if ($25) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 818 "audioop.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 819 "audioop.c"
        __label__ = 41; break; //@line 819 "audioop.c"
      case 15: // $bb14
        var $26=HEAP[$rv]; //@line 820 "audioop.c"
        var $27=_PyString_AsString($26); //@line 820 "audioop.c"
        HEAP[$ncp]=$27; //@line 820 "audioop.c"
        HEAP[$i]=0; //@line 823 "audioop.c"
        __label__ = 39; break; //@line 823 "audioop.c"
      case 16: // $bb15
        var $28=HEAP[$size]; //@line 824 "audioop.c"
        var $29=((($28))|0)==1; //@line 824 "audioop.c"
        if ($29) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 824 "audioop.c"
      case 17: // $bb16
        var $30=HEAP[$cp]; //@line 824 "audioop.c"
        var $31=HEAP[$i]; //@line 824 "audioop.c"
        var $32=(($30+$31)&4294967295); //@line 824 "audioop.c"
        var $33=HEAP[$32]; //@line 824 "audioop.c"
        var $34=reSign(($33), 8, 0); //@line 824 "audioop.c"
        HEAP[$val1]=$34; //@line 824 "audioop.c"
        __label__ = 22; break; //@line 824 "audioop.c"
      case 18: // $bb17
        var $35=HEAP[$size]; //@line 825 "audioop.c"
        var $36=((($35))|0)==2; //@line 825 "audioop.c"
        if ($36) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 825 "audioop.c"
      case 19: // $bb18
        var $37=HEAP[$cp]; //@line 825 "audioop.c"
        var $38=HEAP[$i]; //@line 825 "audioop.c"
        var $39=(($37+$38)&4294967295); //@line 825 "audioop.c"
        var $40=$39; //@line 825 "audioop.c"
        var $41=HEAP[$40]; //@line 825 "audioop.c"
        var $42=reSign(($41), 16, 0); //@line 825 "audioop.c"
        HEAP[$val1]=$42; //@line 825 "audioop.c"
        __label__ = 22; break; //@line 825 "audioop.c"
      case 20: // $bb19
        var $43=HEAP[$size]; //@line 826 "audioop.c"
        var $44=((($43))|0)==4; //@line 826 "audioop.c"
        if ($44) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 826 "audioop.c"
      case 21: // $bb20
        var $45=HEAP[$cp]; //@line 826 "audioop.c"
        var $46=HEAP[$i]; //@line 826 "audioop.c"
        var $47=(($45+$46)&4294967295); //@line 826 "audioop.c"
        var $48=$47; //@line 826 "audioop.c"
        var $49=HEAP[$48]; //@line 826 "audioop.c"
        HEAP[$val1]=$49; //@line 826 "audioop.c"
        __label__ = 22; break; //@line 826 "audioop.c"
      case 22: // $bb21
        var $50=HEAP[$size]; //@line 827 "audioop.c"
        var $51=((($50))|0)==1; //@line 827 "audioop.c"
        if ($51) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 827 "audioop.c"
      case 23: // $bb22
        var $52=HEAP[$cp]; //@line 827 "audioop.c"
        var $53=HEAP[$i]; //@line 827 "audioop.c"
        var $54=(($52+$53)&4294967295); //@line 827 "audioop.c"
        var $55=(($54+1)&4294967295); //@line 827 "audioop.c"
        var $56=HEAP[$55]; //@line 827 "audioop.c"
        var $57=reSign(($56), 8, 0); //@line 827 "audioop.c"
        HEAP[$val2]=$57; //@line 827 "audioop.c"
        __label__ = 28; break; //@line 827 "audioop.c"
      case 24: // $bb23
        var $58=HEAP[$size]; //@line 828 "audioop.c"
        var $59=((($58))|0)==2; //@line 828 "audioop.c"
        if ($59) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 828 "audioop.c"
      case 25: // $bb24
        var $60=HEAP[$cp]; //@line 828 "audioop.c"
        var $61=HEAP[$i]; //@line 828 "audioop.c"
        var $62=(($60+$61)&4294967295); //@line 828 "audioop.c"
        var $63=(($62+2)&4294967295); //@line 828 "audioop.c"
        var $64=$63; //@line 828 "audioop.c"
        var $65=HEAP[$64]; //@line 828 "audioop.c"
        var $66=reSign(($65), 16, 0); //@line 828 "audioop.c"
        HEAP[$val2]=$66; //@line 828 "audioop.c"
        __label__ = 28; break; //@line 828 "audioop.c"
      case 26: // $bb25
        var $67=HEAP[$size]; //@line 829 "audioop.c"
        var $68=((($67))|0)==4; //@line 829 "audioop.c"
        if ($68) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 829 "audioop.c"
      case 27: // $bb26
        var $69=HEAP[$cp]; //@line 829 "audioop.c"
        var $70=HEAP[$i]; //@line 829 "audioop.c"
        var $71=(($69+$70)&4294967295); //@line 829 "audioop.c"
        var $72=(($71+4)&4294967295); //@line 829 "audioop.c"
        var $73=$72; //@line 829 "audioop.c"
        var $74=HEAP[$73]; //@line 829 "audioop.c"
        HEAP[$val2]=$74; //@line 829 "audioop.c"
        __label__ = 28; break; //@line 829 "audioop.c"
      case 28: // $bb27
        var $75=HEAP[$val1]; //@line 830 "audioop.c"
        var $76=((($75))|0); //@line 830 "audioop.c"
        var $77=HEAP[$fac1]; //@line 830 "audioop.c"
        var $78=($76) * ($77); //@line 830 "audioop.c"
        var $79=HEAP[$val2]; //@line 830 "audioop.c"
        var $80=((($79))|0); //@line 830 "audioop.c"
        var $81=HEAP[$fac2]; //@line 830 "audioop.c"
        var $82=($80) * ($81); //@line 830 "audioop.c"
        var $83=($78) + ($82); //@line 830 "audioop.c"
        HEAP[$fval]=$83; //@line 830 "audioop.c"
        var $84=HEAP[$fval]; //@line 831 "audioop.c"
        var $85=HEAP[$maxval]; //@line 831 "audioop.c"
        var $86=($84) > ($85); //@line 831 "audioop.c"
        if ($86) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 831 "audioop.c"
      case 29: // $bb28
        var $87=HEAP[$maxval]; //@line 831 "audioop.c"
        HEAP[$fval]=$87; //@line 831 "audioop.c"
        __label__ = 32; break; //@line 831 "audioop.c"
      case 30: // $bb29
        var $88=HEAP[$maxval]; //@line 832 "audioop.c"
        var $89=0 - ($88); //@line 832 "audioop.c"
        var $90=HEAP[$fval]; //@line 832 "audioop.c"
        var $91=($89) > ($90); //@line 832 "audioop.c"
        if ($91) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 832 "audioop.c"
      case 31: // $bb30
        var $92=HEAP[$maxval]; //@line 832 "audioop.c"
        var $93=0 - ($92); //@line 832 "audioop.c"
        HEAP[$fval]=$93; //@line 832 "audioop.c"
        __label__ = 32; break; //@line 832 "audioop.c"
      case 32: // $bb31
        var $94=HEAP[$fval]; //@line 833 "audioop.c"
        var $95=((($94))|0); //@line 833 "audioop.c"
        HEAP[$val1]=$95; //@line 833 "audioop.c"
        var $96=HEAP[$size]; //@line 834 "audioop.c"
        var $97=((($96))|0)==1; //@line 834 "audioop.c"
        if ($97) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 834 "audioop.c"
      case 33: // $bb32
        var $98=HEAP[$i]; //@line 834 "audioop.c"
        var $99=((((($98))|0)/2)|0); //@line 834 "audioop.c"
        var $100=HEAP[$val1]; //@line 834 "audioop.c"
        var $101=((($100)) & 255); //@line 834 "audioop.c"
        var $102=HEAP[$ncp]; //@line 834 "audioop.c"
        var $103=(($102+$99)&4294967295); //@line 834 "audioop.c"
        HEAP[$103]=$101; //@line 834 "audioop.c"
        __label__ = 38; break; //@line 834 "audioop.c"
      case 34: // $bb33
        var $104=HEAP[$size]; //@line 835 "audioop.c"
        var $105=((($104))|0)==2; //@line 835 "audioop.c"
        if ($105) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 835 "audioop.c"
      case 35: // $bb34
        var $106=HEAP[$i]; //@line 835 "audioop.c"
        var $107=((((($106))|0)/2)|0); //@line 835 "audioop.c"
        var $108=HEAP[$ncp]; //@line 835 "audioop.c"
        var $109=(($108+$107)&4294967295); //@line 835 "audioop.c"
        var $110=$109; //@line 835 "audioop.c"
        var $111=HEAP[$val1]; //@line 835 "audioop.c"
        var $112=((($111)) & 65535); //@line 835 "audioop.c"
        HEAP[$110]=$112; //@line 835 "audioop.c"
        __label__ = 38; break; //@line 835 "audioop.c"
      case 36: // $bb35
        var $113=HEAP[$size]; //@line 836 "audioop.c"
        var $114=((($113))|0)==4; //@line 836 "audioop.c"
        if ($114) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 836 "audioop.c"
      case 37: // $bb36
        var $115=HEAP[$i]; //@line 836 "audioop.c"
        var $116=((((($115))|0)/2)|0); //@line 836 "audioop.c"
        var $117=HEAP[$ncp]; //@line 836 "audioop.c"
        var $118=(($117+$116)&4294967295); //@line 836 "audioop.c"
        var $119=$118; //@line 836 "audioop.c"
        var $120=HEAP[$val1]; //@line 836 "audioop.c"
        HEAP[$119]=$120; //@line 836 "audioop.c"
        __label__ = 38; break; //@line 836 "audioop.c"
      case 38: // $bb37
        var $121=HEAP[$size]; //@line 823 "audioop.c"
        var $122=((($121) * 2)&4294967295); //@line 823 "audioop.c"
        var $123=HEAP[$i]; //@line 823 "audioop.c"
        var $124=((($122) + ($123))&4294967295); //@line 823 "audioop.c"
        HEAP[$i]=$124; //@line 823 "audioop.c"
        __label__ = 39; break; //@line 823 "audioop.c"
      case 39: // $bb38
        var $125=HEAP[$len]; //@line 823 "audioop.c"
        var $126=HEAP[$i]; //@line 823 "audioop.c"
        var $127=((($126))|0) < ((($125))|0); //@line 823 "audioop.c"
        if ($127) { __label__ = 16; break; } else { __label__ = 40; break; } //@line 823 "audioop.c"
      case 40: // $bb39
        var $128=HEAP[$rv]; //@line 838 "audioop.c"
        HEAP[$0]=$128; //@line 838 "audioop.c"
        __label__ = 41; break; //@line 838 "audioop.c"
      case 41: // $bb40
        var $129=HEAP[$0]; //@line 801 "audioop.c"
        HEAP[$retval]=$129; //@line 801 "audioop.c"
        __label__ = 42; break; //@line 801 "audioop.c"
      case 42: // $return
        var $retval41=HEAP[$retval]; //@line 801 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval41; //@line 801 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_tostereo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 84; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 84);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $ncp=__stackBase__+20;
        var $len=__stackBase__+24;
        var $size=__stackBase__+28;
        var $val1=__stackBase__+32;
        var $val2=__stackBase__+36;
        var $val=__stackBase__+40;
        var $fac1=__stackBase__+44;
        var $fac2=__stackBase__+52;
        var $fval=__stackBase__+60;
        var $maxval=__stackBase__+68;
        var $rv=__stackBase__+76;
        var $i=__stackBase__+80;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 845 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 850 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str22)&4294967295), $cp, $len, $size, $fac1, $fac2); //@line 850 "audioop.c"
        var $3=((($2))|0)==0; //@line 850 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 850 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 852 "audioop.c"
        __label__ = 45; break; //@line 852 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 853 "audioop.c"
        var $5=HEAP[$len]; //@line 853 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 853 "audioop.c"
        var $7=((($6))|0)==0; //@line 853 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 853 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 854 "audioop.c"
        __label__ = 45; break; //@line 854 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 856 "audioop.c"
        var $9=((($8))|0)==1; //@line 856 "audioop.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 856 "audioop.c"
      case 5: // $bb4
        HEAP[$maxval]=127; //@line 856 "audioop.c"
        __label__ = 11; break; //@line 856 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$size]; //@line 857 "audioop.c"
        var $11=((($10))|0)==2; //@line 857 "audioop.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 857 "audioop.c"
      case 7: // $bb6
        HEAP[$maxval]=32767; //@line 857 "audioop.c"
        __label__ = 11; break; //@line 857 "audioop.c"
      case 8: // $bb7
        var $12=HEAP[$size]; //@line 858 "audioop.c"
        var $13=((($12))|0)==4; //@line 858 "audioop.c"
        if ($13) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 858 "audioop.c"
      case 9: // $bb8
        HEAP[$maxval]=2147483647; //@line 858 "audioop.c"
        __label__ = 11; break; //@line 858 "audioop.c"
      case 10: // $bb9
        var $14=HEAP[_AudioopError]; //@line 860 "audioop.c"
        _PyErr_SetString($14, ((__str)&4294967295)); //@line 860 "audioop.c"
        HEAP[$0]=0; //@line 861 "audioop.c"
        __label__ = 45; break; //@line 861 "audioop.c"
      case 11: // $bb10
        var $15=HEAP[$len]; //@line 864 "audioop.c"
        var $16=((($15))|0) > 1073741823; //@line 864 "audioop.c"
        if ($16) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 864 "audioop.c"
      case 12: // $bb11
        var $17=HEAP[_PyExc_MemoryError]; //@line 865 "audioop.c"
        _PyErr_SetString($17, ((__str23)&4294967295)); //@line 865 "audioop.c"
        HEAP[$0]=0; //@line 867 "audioop.c"
        __label__ = 45; break; //@line 867 "audioop.c"
      case 13: // $bb12
        var $18=HEAP[$len]; //@line 870 "audioop.c"
        var $19=((($18) * 2)&4294967295); //@line 870 "audioop.c"
        var $20=_PyString_FromStringAndSize(0, $19); //@line 870 "audioop.c"
        HEAP[$rv]=$20; //@line 870 "audioop.c"
        var $21=HEAP[$rv]; //@line 871 "audioop.c"
        var $22=($21)==0; //@line 871 "audioop.c"
        if ($22) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 871 "audioop.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 872 "audioop.c"
        __label__ = 45; break; //@line 872 "audioop.c"
      case 15: // $bb14
        var $23=HEAP[$rv]; //@line 873 "audioop.c"
        var $24=_PyString_AsString($23); //@line 873 "audioop.c"
        HEAP[$ncp]=$24; //@line 873 "audioop.c"
        HEAP[$i]=0; //@line 876 "audioop.c"
        __label__ = 43; break; //@line 876 "audioop.c"
      case 16: // $bb15
        var $25=HEAP[$size]; //@line 877 "audioop.c"
        var $26=((($25))|0)==1; //@line 877 "audioop.c"
        if ($26) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 877 "audioop.c"
      case 17: // $bb16
        var $27=HEAP[$cp]; //@line 877 "audioop.c"
        var $28=HEAP[$i]; //@line 877 "audioop.c"
        var $29=(($27+$28)&4294967295); //@line 877 "audioop.c"
        var $30=HEAP[$29]; //@line 877 "audioop.c"
        var $31=reSign(($30), 8, 0); //@line 877 "audioop.c"
        HEAP[$val]=$31; //@line 877 "audioop.c"
        __label__ = 22; break; //@line 877 "audioop.c"
      case 18: // $bb17
        var $32=HEAP[$size]; //@line 878 "audioop.c"
        var $33=((($32))|0)==2; //@line 878 "audioop.c"
        if ($33) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 878 "audioop.c"
      case 19: // $bb18
        var $34=HEAP[$cp]; //@line 878 "audioop.c"
        var $35=HEAP[$i]; //@line 878 "audioop.c"
        var $36=(($34+$35)&4294967295); //@line 878 "audioop.c"
        var $37=$36; //@line 878 "audioop.c"
        var $38=HEAP[$37]; //@line 878 "audioop.c"
        var $39=reSign(($38), 16, 0); //@line 878 "audioop.c"
        HEAP[$val]=$39; //@line 878 "audioop.c"
        __label__ = 22; break; //@line 878 "audioop.c"
      case 20: // $bb19
        var $40=HEAP[$size]; //@line 879 "audioop.c"
        var $41=((($40))|0)==4; //@line 879 "audioop.c"
        if ($41) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 879 "audioop.c"
      case 21: // $bb20
        var $42=HEAP[$cp]; //@line 879 "audioop.c"
        var $43=HEAP[$i]; //@line 879 "audioop.c"
        var $44=(($42+$43)&4294967295); //@line 879 "audioop.c"
        var $45=$44; //@line 879 "audioop.c"
        var $46=HEAP[$45]; //@line 879 "audioop.c"
        HEAP[$val]=$46; //@line 879 "audioop.c"
        __label__ = 22; break; //@line 879 "audioop.c"
      case 22: // $bb21
        var $47=HEAP[$val]; //@line 881 "audioop.c"
        var $48=((($47))|0); //@line 881 "audioop.c"
        var $49=HEAP[$fac1]; //@line 881 "audioop.c"
        var $50=($48) * ($49); //@line 881 "audioop.c"
        HEAP[$fval]=$50; //@line 881 "audioop.c"
        var $51=HEAP[$fval]; //@line 882 "audioop.c"
        var $52=HEAP[$maxval]; //@line 882 "audioop.c"
        var $53=($51) > ($52); //@line 882 "audioop.c"
        if ($53) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 882 "audioop.c"
      case 23: // $bb22
        var $54=HEAP[$maxval]; //@line 882 "audioop.c"
        HEAP[$fval]=$54; //@line 882 "audioop.c"
        __label__ = 26; break; //@line 882 "audioop.c"
      case 24: // $bb23
        var $55=HEAP[$maxval]; //@line 883 "audioop.c"
        var $56=0 - ($55); //@line 883 "audioop.c"
        var $57=HEAP[$fval]; //@line 883 "audioop.c"
        var $58=($56) > ($57); //@line 883 "audioop.c"
        if ($58) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 883 "audioop.c"
      case 25: // $bb24
        var $59=HEAP[$maxval]; //@line 883 "audioop.c"
        var $60=0 - ($59); //@line 883 "audioop.c"
        HEAP[$fval]=$60; //@line 883 "audioop.c"
        __label__ = 26; break; //@line 883 "audioop.c"
      case 26: // $bb25
        var $61=HEAP[$fval]; //@line 884 "audioop.c"
        var $62=((($61))|0); //@line 884 "audioop.c"
        HEAP[$val1]=$62; //@line 884 "audioop.c"
        var $63=HEAP[$val]; //@line 886 "audioop.c"
        var $64=((($63))|0); //@line 886 "audioop.c"
        var $65=HEAP[$fac2]; //@line 886 "audioop.c"
        var $66=($64) * ($65); //@line 886 "audioop.c"
        HEAP[$fval]=$66; //@line 886 "audioop.c"
        var $67=HEAP[$fval]; //@line 887 "audioop.c"
        var $68=HEAP[$maxval]; //@line 887 "audioop.c"
        var $69=($67) > ($68); //@line 887 "audioop.c"
        if ($69) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 887 "audioop.c"
      case 27: // $bb26
        var $70=HEAP[$maxval]; //@line 887 "audioop.c"
        HEAP[$fval]=$70; //@line 887 "audioop.c"
        __label__ = 30; break; //@line 887 "audioop.c"
      case 28: // $bb27
        var $71=HEAP[$maxval]; //@line 888 "audioop.c"
        var $72=0 - ($71); //@line 888 "audioop.c"
        var $73=HEAP[$fval]; //@line 888 "audioop.c"
        var $74=($72) > ($73); //@line 888 "audioop.c"
        if ($74) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 888 "audioop.c"
      case 29: // $bb28
        var $75=HEAP[$maxval]; //@line 888 "audioop.c"
        var $76=0 - ($75); //@line 888 "audioop.c"
        HEAP[$fval]=$76; //@line 888 "audioop.c"
        __label__ = 30; break; //@line 888 "audioop.c"
      case 30: // $bb29
        var $77=HEAP[$fval]; //@line 889 "audioop.c"
        var $78=((($77))|0); //@line 889 "audioop.c"
        HEAP[$val2]=$78; //@line 889 "audioop.c"
        var $79=HEAP[$size]; //@line 891 "audioop.c"
        var $80=((($79))|0)==1; //@line 891 "audioop.c"
        if ($80) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 891 "audioop.c"
      case 31: // $bb30
        var $81=HEAP[$i]; //@line 891 "audioop.c"
        var $82=((($81) * 2)&4294967295); //@line 891 "audioop.c"
        var $83=HEAP[$val1]; //@line 891 "audioop.c"
        var $84=((($83)) & 255); //@line 891 "audioop.c"
        var $85=HEAP[$ncp]; //@line 891 "audioop.c"
        var $86=(($85+$82)&4294967295); //@line 891 "audioop.c"
        HEAP[$86]=$84; //@line 891 "audioop.c"
        __label__ = 36; break; //@line 891 "audioop.c"
      case 32: // $bb31
        var $87=HEAP[$size]; //@line 892 "audioop.c"
        var $88=((($87))|0)==2; //@line 892 "audioop.c"
        if ($88) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 892 "audioop.c"
      case 33: // $bb32
        var $89=HEAP[$i]; //@line 892 "audioop.c"
        var $90=((($89) * 2)&4294967295); //@line 892 "audioop.c"
        var $91=HEAP[$ncp]; //@line 892 "audioop.c"
        var $92=(($91+$90)&4294967295); //@line 892 "audioop.c"
        var $93=$92; //@line 892 "audioop.c"
        var $94=HEAP[$val1]; //@line 892 "audioop.c"
        var $95=((($94)) & 65535); //@line 892 "audioop.c"
        HEAP[$93]=$95; //@line 892 "audioop.c"
        __label__ = 36; break; //@line 892 "audioop.c"
      case 34: // $bb33
        var $96=HEAP[$size]; //@line 893 "audioop.c"
        var $97=((($96))|0)==4; //@line 893 "audioop.c"
        if ($97) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 893 "audioop.c"
      case 35: // $bb34
        var $98=HEAP[$i]; //@line 893 "audioop.c"
        var $99=((($98) * 2)&4294967295); //@line 893 "audioop.c"
        var $100=HEAP[$ncp]; //@line 893 "audioop.c"
        var $101=(($100+$99)&4294967295); //@line 893 "audioop.c"
        var $102=$101; //@line 893 "audioop.c"
        var $103=HEAP[$val1]; //@line 893 "audioop.c"
        HEAP[$102]=$103; //@line 893 "audioop.c"
        __label__ = 36; break; //@line 893 "audioop.c"
      case 36: // $bb35
        var $104=HEAP[$size]; //@line 895 "audioop.c"
        var $105=((($104))|0)==1; //@line 895 "audioop.c"
        if ($105) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 895 "audioop.c"
      case 37: // $bb36
        var $106=HEAP[$i]; //@line 895 "audioop.c"
        var $107=((($106) * 2)&4294967295); //@line 895 "audioop.c"
        var $108=HEAP[$ncp]; //@line 895 "audioop.c"
        var $109=(($108+$107)&4294967295); //@line 895 "audioop.c"
        var $110=HEAP[$val2]; //@line 895 "audioop.c"
        var $111=((($110)) & 255); //@line 895 "audioop.c"
        var $112=(($109+1)&4294967295); //@line 895 "audioop.c"
        HEAP[$112]=$111; //@line 895 "audioop.c"
        __label__ = 42; break; //@line 895 "audioop.c"
      case 38: // $bb37
        var $113=HEAP[$size]; //@line 896 "audioop.c"
        var $114=((($113))|0)==2; //@line 896 "audioop.c"
        if ($114) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 896 "audioop.c"
      case 39: // $bb38
        var $115=HEAP[$i]; //@line 896 "audioop.c"
        var $116=((($115) * 2)&4294967295); //@line 896 "audioop.c"
        var $117=HEAP[$ncp]; //@line 896 "audioop.c"
        var $118=(($117+$116)&4294967295); //@line 896 "audioop.c"
        var $119=(($118+2)&4294967295); //@line 896 "audioop.c"
        var $120=$119; //@line 896 "audioop.c"
        var $121=HEAP[$val2]; //@line 896 "audioop.c"
        var $122=((($121)) & 65535); //@line 896 "audioop.c"
        HEAP[$120]=$122; //@line 896 "audioop.c"
        __label__ = 42; break; //@line 896 "audioop.c"
      case 40: // $bb39
        var $123=HEAP[$size]; //@line 897 "audioop.c"
        var $124=((($123))|0)==4; //@line 897 "audioop.c"
        if ($124) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 897 "audioop.c"
      case 41: // $bb40
        var $125=HEAP[$i]; //@line 897 "audioop.c"
        var $126=((($125) * 2)&4294967295); //@line 897 "audioop.c"
        var $127=HEAP[$ncp]; //@line 897 "audioop.c"
        var $128=(($127+$126)&4294967295); //@line 897 "audioop.c"
        var $129=(($128+4)&4294967295); //@line 897 "audioop.c"
        var $130=$129; //@line 897 "audioop.c"
        var $131=HEAP[$val2]; //@line 897 "audioop.c"
        HEAP[$130]=$131; //@line 897 "audioop.c"
        __label__ = 42; break; //@line 897 "audioop.c"
      case 42: // $bb41
        var $132=HEAP[$size]; //@line 876 "audioop.c"
        var $133=HEAP[$i]; //@line 876 "audioop.c"
        var $134=((($133) + ($132))&4294967295); //@line 876 "audioop.c"
        HEAP[$i]=$134; //@line 876 "audioop.c"
        __label__ = 43; break; //@line 876 "audioop.c"
      case 43: // $bb42
        var $135=HEAP[$len]; //@line 876 "audioop.c"
        var $136=HEAP[$i]; //@line 876 "audioop.c"
        var $137=((($136))|0) < ((($135))|0); //@line 876 "audioop.c"
        if ($137) { __label__ = 16; break; } else { __label__ = 44; break; } //@line 876 "audioop.c"
      case 44: // $bb43
        var $138=HEAP[$rv]; //@line 899 "audioop.c"
        HEAP[$0]=$138; //@line 899 "audioop.c"
        __label__ = 45; break; //@line 899 "audioop.c"
      case 45: // $bb44
        var $139=HEAP[$0]; //@line 852 "audioop.c"
        HEAP[$retval]=$139; //@line 852 "audioop.c"
        __label__ = 46; break; //@line 852 "audioop.c"
      case 46: // $return
        var $retval45=HEAP[$retval]; //@line 852 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 852 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_add($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 68; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_286=__stackBase__+12;
        var $0=__stackBase__+16;
        var $cp1=__stackBase__+20;
        var $cp2=__stackBase__+24;
        var $ncp=__stackBase__+28;
        var $len1=__stackBase__+32;
        var $len2=__stackBase__+36;
        var $size=__stackBase__+40;
        var $val1=__stackBase__+44;
        var $val2=__stackBase__+48;
        var $maxval=__stackBase__+52;
        var $newval=__stackBase__+56;
        var $rv=__stackBase__+60;
        var $i=__stackBase__+64;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val1]=0; //@line 906 "audioop.c"
        HEAP[$val2]=0; //@line 906 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 910 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str24)&4294967295), $cp1, $len1, $cp2, $len2, $size); //@line 910 "audioop.c"
        var $3=((($2))|0)==0; //@line 910 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 910 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 912 "audioop.c"
        __label__ = 48; break; //@line 912 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 913 "audioop.c"
        var $5=HEAP[$len1]; //@line 913 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 913 "audioop.c"
        var $7=((($6))|0)==0; //@line 913 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 913 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 914 "audioop.c"
        __label__ = 48; break; //@line 914 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len1]; //@line 915 "audioop.c"
        var $9=HEAP[$len2]; //@line 915 "audioop.c"
        var $10=((($8))|0)!=((($9))|0); //@line 915 "audioop.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 915 "audioop.c"
      case 5: // $bb4
        var $11=HEAP[_AudioopError]; //@line 916 "audioop.c"
        _PyErr_SetString($11, ((__str25)&4294967295)); //@line 916 "audioop.c"
        HEAP[$0]=0; //@line 917 "audioop.c"
        __label__ = 48; break; //@line 917 "audioop.c"
      case 6: // $bb5
        var $12=HEAP[$size]; //@line 920 "audioop.c"
        var $13=((($12))|0)==1; //@line 920 "audioop.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 920 "audioop.c"
      case 7: // $bb6
        HEAP[$maxval]=127; //@line 920 "audioop.c"
        __label__ = 13; break; //@line 920 "audioop.c"
      case 8: // $bb7
        var $14=HEAP[$size]; //@line 921 "audioop.c"
        var $15=((($14))|0)==2; //@line 921 "audioop.c"
        if ($15) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 921 "audioop.c"
      case 9: // $bb8
        HEAP[$maxval]=32767; //@line 921 "audioop.c"
        __label__ = 13; break; //@line 921 "audioop.c"
      case 10: // $bb9
        var $16=HEAP[$size]; //@line 922 "audioop.c"
        var $17=((($16))|0)==4; //@line 922 "audioop.c"
        if ($17) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 922 "audioop.c"
      case 11: // $bb10
        HEAP[$maxval]=2147483647; //@line 922 "audioop.c"
        __label__ = 13; break; //@line 922 "audioop.c"
      case 12: // $bb11
        var $18=HEAP[_AudioopError]; //@line 924 "audioop.c"
        _PyErr_SetString($18, ((__str)&4294967295)); //@line 924 "audioop.c"
        HEAP[$0]=0; //@line 925 "audioop.c"
        __label__ = 48; break; //@line 925 "audioop.c"
      case 13: // $bb12
        var $19=HEAP[$len1]; //@line 928 "audioop.c"
        var $20=_PyString_FromStringAndSize(0, $19); //@line 928 "audioop.c"
        HEAP[$rv]=$20; //@line 928 "audioop.c"
        var $21=HEAP[$rv]; //@line 929 "audioop.c"
        var $22=($21)==0; //@line 929 "audioop.c"
        if ($22) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 929 "audioop.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 930 "audioop.c"
        __label__ = 48; break; //@line 930 "audioop.c"
      case 15: // $bb14
        var $23=HEAP[$rv]; //@line 931 "audioop.c"
        var $24=_PyString_AsString($23); //@line 931 "audioop.c"
        HEAP[$ncp]=$24; //@line 931 "audioop.c"
        HEAP[$i]=0; //@line 933 "audioop.c"
        __label__ = 46; break; //@line 933 "audioop.c"
      case 16: // $bb15
        var $25=HEAP[$size]; //@line 934 "audioop.c"
        var $26=((($25))|0)==1; //@line 934 "audioop.c"
        if ($26) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 934 "audioop.c"
      case 17: // $bb16
        var $27=HEAP[$cp1]; //@line 934 "audioop.c"
        var $28=HEAP[$i]; //@line 934 "audioop.c"
        var $29=(($27+$28)&4294967295); //@line 934 "audioop.c"
        var $30=HEAP[$29]; //@line 934 "audioop.c"
        var $31=reSign(($30), 8, 0); //@line 934 "audioop.c"
        HEAP[$val1]=$31; //@line 934 "audioop.c"
        __label__ = 22; break; //@line 934 "audioop.c"
      case 18: // $bb17
        var $32=HEAP[$size]; //@line 935 "audioop.c"
        var $33=((($32))|0)==2; //@line 935 "audioop.c"
        if ($33) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 935 "audioop.c"
      case 19: // $bb18
        var $34=HEAP[$cp1]; //@line 935 "audioop.c"
        var $35=HEAP[$i]; //@line 935 "audioop.c"
        var $36=(($34+$35)&4294967295); //@line 935 "audioop.c"
        var $37=$36; //@line 935 "audioop.c"
        var $38=HEAP[$37]; //@line 935 "audioop.c"
        var $39=reSign(($38), 16, 0); //@line 935 "audioop.c"
        HEAP[$val1]=$39; //@line 935 "audioop.c"
        __label__ = 22; break; //@line 935 "audioop.c"
      case 20: // $bb19
        var $40=HEAP[$size]; //@line 936 "audioop.c"
        var $41=((($40))|0)==4; //@line 936 "audioop.c"
        if ($41) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 936 "audioop.c"
      case 21: // $bb20
        var $42=HEAP[$cp1]; //@line 936 "audioop.c"
        var $43=HEAP[$i]; //@line 936 "audioop.c"
        var $44=(($42+$43)&4294967295); //@line 936 "audioop.c"
        var $45=$44; //@line 936 "audioop.c"
        var $46=HEAP[$45]; //@line 936 "audioop.c"
        HEAP[$val1]=$46; //@line 936 "audioop.c"
        __label__ = 22; break; //@line 936 "audioop.c"
      case 22: // $bb21
        var $47=HEAP[$size]; //@line 938 "audioop.c"
        var $48=((($47))|0)==1; //@line 938 "audioop.c"
        if ($48) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 938 "audioop.c"
      case 23: // $bb22
        var $49=HEAP[$cp2]; //@line 938 "audioop.c"
        var $50=HEAP[$i]; //@line 938 "audioop.c"
        var $51=(($49+$50)&4294967295); //@line 938 "audioop.c"
        var $52=HEAP[$51]; //@line 938 "audioop.c"
        var $53=reSign(($52), 8, 0); //@line 938 "audioop.c"
        HEAP[$val2]=$53; //@line 938 "audioop.c"
        __label__ = 28; break; //@line 938 "audioop.c"
      case 24: // $bb23
        var $54=HEAP[$size]; //@line 939 "audioop.c"
        var $55=((($54))|0)==2; //@line 939 "audioop.c"
        if ($55) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 939 "audioop.c"
      case 25: // $bb24
        var $56=HEAP[$cp2]; //@line 939 "audioop.c"
        var $57=HEAP[$i]; //@line 939 "audioop.c"
        var $58=(($56+$57)&4294967295); //@line 939 "audioop.c"
        var $59=$58; //@line 939 "audioop.c"
        var $60=HEAP[$59]; //@line 939 "audioop.c"
        var $61=reSign(($60), 16, 0); //@line 939 "audioop.c"
        HEAP[$val2]=$61; //@line 939 "audioop.c"
        __label__ = 28; break; //@line 939 "audioop.c"
      case 26: // $bb25
        var $62=HEAP[$size]; //@line 940 "audioop.c"
        var $63=((($62))|0)==4; //@line 940 "audioop.c"
        if ($63) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 940 "audioop.c"
      case 27: // $bb26
        var $64=HEAP[$cp2]; //@line 940 "audioop.c"
        var $65=HEAP[$i]; //@line 940 "audioop.c"
        var $66=(($64+$65)&4294967295); //@line 940 "audioop.c"
        var $67=$66; //@line 940 "audioop.c"
        var $68=HEAP[$67]; //@line 940 "audioop.c"
        HEAP[$val2]=$68; //@line 940 "audioop.c"
        __label__ = 28; break; //@line 940 "audioop.c"
      case 28: // $bb27
        var $69=HEAP[$val1]; //@line 942 "audioop.c"
        var $70=HEAP[$val2]; //@line 942 "audioop.c"
        var $71=((($69) + ($70))&4294967295); //@line 942 "audioop.c"
        HEAP[$newval]=$71; //@line 942 "audioop.c"
        var $72=HEAP[$newval]; //@line 944 "audioop.c"
        var $73=HEAP[$maxval]; //@line 944 "audioop.c"
        var $74=((($72))|0) > ((($73))|0); //@line 944 "audioop.c"
        if ($74) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 944 "audioop.c"
      case 29: // $bb28
        var $75=HEAP[$maxval]; //@line 944 "audioop.c"
        HEAP[$newval]=$75; //@line 944 "audioop.c"
        __label__ = 39; break; //@line 944 "audioop.c"
      case 30: // $bb29
        var $76=HEAP[$maxval]; //@line 945 "audioop.c"
        var $77=((0 - ($76))&4294967295); //@line 945 "audioop.c"
        var $78=HEAP[$newval]; //@line 945 "audioop.c"
        var $79=((($77))|0) > ((($78))|0); //@line 945 "audioop.c"
        if ($79) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 945 "audioop.c"
      case 31: // $bb30
        var $80=HEAP[$maxval]; //@line 945 "audioop.c"
        var $81=((0 - ($80))&4294967295); //@line 945 "audioop.c"
        HEAP[$newval]=$81; //@line 945 "audioop.c"
        __label__ = 39; break; //@line 945 "audioop.c"
      case 32: // $bb31
        var $82=HEAP[$size]; //@line 946 "audioop.c"
        var $83=((($82))|0)==4; //@line 946 "audioop.c"
        if ($83) { __label__ = 33; break; } else { __label__ = 39; break; } //@line 946 "audioop.c"
      case 33: // $bb32
        var $84=HEAP[$newval]; //@line 946 "audioop.c"
        var $85=HEAP[$val1]; //@line 946 "audioop.c"
        var $86=($84) ^ ($85); //@line 946 "audioop.c"
        var $87=((($86))|0) < 0; //@line 946 "audioop.c"
        if ($87) { __label__ = 34; break; } else { __label__ = 39; break; } //@line 946 "audioop.c"
      case 34: // $bb33
        var $88=HEAP[$newval]; //@line 946 "audioop.c"
        var $89=HEAP[$val2]; //@line 946 "audioop.c"
        var $90=($88) ^ ($89); //@line 946 "audioop.c"
        var $91=((($90))|0) < 0; //@line 946 "audioop.c"
        if ($91) { __label__ = 35; break; } else { __label__ = 39; break; } //@line 946 "audioop.c"
      case 35: // $bb34
        var $92=HEAP[$val1]; //@line 947 "audioop.c"
        var $93=((($92))|0) <= 0; //@line 947 "audioop.c"
        if ($93) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 947 "audioop.c"
      case 36: // $bb35
        var $94=HEAP[$maxval]; //@line 947 "audioop.c"
        var $95=((0 - ($94))&4294967295); //@line 947 "audioop.c"
        HEAP[$iftmp_286]=$95; //@line 947 "audioop.c"
        __label__ = 38; break; //@line 947 "audioop.c"
      case 37: // $bb36
        var $96=HEAP[$maxval]; //@line 947 "audioop.c"
        HEAP[$iftmp_286]=$96; //@line 947 "audioop.c"
        __label__ = 38; break; //@line 947 "audioop.c"
      case 38: // $bb37
        var $97=HEAP[$iftmp_286]; //@line 947 "audioop.c"
        HEAP[$newval]=$97; //@line 947 "audioop.c"
        __label__ = 39; break; //@line 947 "audioop.c"
      case 39: // $bb38
        var $98=HEAP[$size]; //@line 949 "audioop.c"
        var $99=((($98))|0)==1; //@line 949 "audioop.c"
        if ($99) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 949 "audioop.c"
      case 40: // $bb39
        var $100=HEAP[$newval]; //@line 949 "audioop.c"
        var $101=((($100)) & 255); //@line 949 "audioop.c"
        var $102=HEAP[$ncp]; //@line 949 "audioop.c"
        var $103=HEAP[$i]; //@line 949 "audioop.c"
        var $104=(($102+$103)&4294967295); //@line 949 "audioop.c"
        HEAP[$104]=$101; //@line 949 "audioop.c"
        __label__ = 45; break; //@line 949 "audioop.c"
      case 41: // $bb40
        var $105=HEAP[$size]; //@line 950 "audioop.c"
        var $106=((($105))|0)==2; //@line 950 "audioop.c"
        if ($106) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 950 "audioop.c"
      case 42: // $bb41
        var $107=HEAP[$ncp]; //@line 950 "audioop.c"
        var $108=HEAP[$i]; //@line 950 "audioop.c"
        var $109=(($107+$108)&4294967295); //@line 950 "audioop.c"
        var $110=$109; //@line 950 "audioop.c"
        var $111=HEAP[$newval]; //@line 950 "audioop.c"
        var $112=((($111)) & 65535); //@line 950 "audioop.c"
        HEAP[$110]=$112; //@line 950 "audioop.c"
        __label__ = 45; break; //@line 950 "audioop.c"
      case 43: // $bb42
        var $113=HEAP[$size]; //@line 951 "audioop.c"
        var $114=((($113))|0)==4; //@line 951 "audioop.c"
        if ($114) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 951 "audioop.c"
      case 44: // $bb43
        var $115=HEAP[$ncp]; //@line 951 "audioop.c"
        var $116=HEAP[$i]; //@line 951 "audioop.c"
        var $117=(($115+$116)&4294967295); //@line 951 "audioop.c"
        var $118=$117; //@line 951 "audioop.c"
        var $119=HEAP[$newval]; //@line 951 "audioop.c"
        HEAP[$118]=$119; //@line 951 "audioop.c"
        __label__ = 45; break; //@line 951 "audioop.c"
      case 45: // $bb44
        var $120=HEAP[$size]; //@line 933 "audioop.c"
        var $121=HEAP[$i]; //@line 933 "audioop.c"
        var $122=((($121) + ($120))&4294967295); //@line 933 "audioop.c"
        HEAP[$i]=$122; //@line 933 "audioop.c"
        __label__ = 46; break; //@line 933 "audioop.c"
      case 46: // $bb45
        var $123=HEAP[$len1]; //@line 933 "audioop.c"
        var $124=HEAP[$i]; //@line 933 "audioop.c"
        var $125=((($124))|0) < ((($123))|0); //@line 933 "audioop.c"
        if ($125) { __label__ = 16; break; } else { __label__ = 47; break; } //@line 933 "audioop.c"
      case 47: // $bb46
        var $126=HEAP[$rv]; //@line 953 "audioop.c"
        HEAP[$0]=$126; //@line 953 "audioop.c"
        __label__ = 48; break; //@line 953 "audioop.c"
      case 48: // $bb47
        var $127=HEAP[$0]; //@line 912 "audioop.c"
        HEAP[$retval]=$127; //@line 912 "audioop.c"
        __label__ = 49; break; //@line 912 "audioop.c"
      case 49: // $return
        var $retval48=HEAP[$retval]; //@line 912 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval48; //@line 912 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_bias($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $ncp=__stackBase__+20;
        var $len=__stackBase__+24;
        var $size=__stackBase__+28;
        var $val=__stackBase__+32;
        var $rv=__stackBase__+36;
        var $i=__stackBase__+40;
        var $bias=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 960 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 965 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str26)&4294967295), $cp, $len, $size, $bias); //@line 965 "audioop.c"
        var $3=((($2))|0)==0; //@line 965 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 965 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 967 "audioop.c"
        __label__ = 22; break; //@line 967 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 969 "audioop.c"
        var $5=HEAP[$len]; //@line 969 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 969 "audioop.c"
        var $7=((($6))|0)==0; //@line 969 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 969 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 970 "audioop.c"
        __label__ = 22; break; //@line 970 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len]; //@line 972 "audioop.c"
        var $9=_PyString_FromStringAndSize(0, $8); //@line 972 "audioop.c"
        HEAP[$rv]=$9; //@line 972 "audioop.c"
        var $10=HEAP[$rv]; //@line 973 "audioop.c"
        var $11=($10)==0; //@line 973 "audioop.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 973 "audioop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 974 "audioop.c"
        __label__ = 22; break; //@line 974 "audioop.c"
      case 6: // $bb5
        var $12=HEAP[$rv]; //@line 975 "audioop.c"
        var $13=_PyString_AsString($12); //@line 975 "audioop.c"
        HEAP[$ncp]=$13; //@line 975 "audioop.c"
        HEAP[$i]=0; //@line 978 "audioop.c"
        __label__ = 20; break; //@line 978 "audioop.c"
      case 7: // $bb6
        var $14=HEAP[$size]; //@line 979 "audioop.c"
        var $15=((($14))|0)==1; //@line 979 "audioop.c"
        if ($15) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 979 "audioop.c"
      case 8: // $bb7
        var $16=HEAP[$cp]; //@line 979 "audioop.c"
        var $17=HEAP[$i]; //@line 979 "audioop.c"
        var $18=(($16+$17)&4294967295); //@line 979 "audioop.c"
        var $19=HEAP[$18]; //@line 979 "audioop.c"
        var $20=reSign(($19), 8, 0); //@line 979 "audioop.c"
        HEAP[$val]=$20; //@line 979 "audioop.c"
        __label__ = 13; break; //@line 979 "audioop.c"
      case 9: // $bb8
        var $21=HEAP[$size]; //@line 980 "audioop.c"
        var $22=((($21))|0)==2; //@line 980 "audioop.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 980 "audioop.c"
      case 10: // $bb9
        var $23=HEAP[$cp]; //@line 980 "audioop.c"
        var $24=HEAP[$i]; //@line 980 "audioop.c"
        var $25=(($23+$24)&4294967295); //@line 980 "audioop.c"
        var $26=$25; //@line 980 "audioop.c"
        var $27=HEAP[$26]; //@line 980 "audioop.c"
        var $28=reSign(($27), 16, 0); //@line 980 "audioop.c"
        HEAP[$val]=$28; //@line 980 "audioop.c"
        __label__ = 13; break; //@line 980 "audioop.c"
      case 11: // $bb10
        var $29=HEAP[$size]; //@line 981 "audioop.c"
        var $30=((($29))|0)==4; //@line 981 "audioop.c"
        if ($30) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 981 "audioop.c"
      case 12: // $bb11
        var $31=HEAP[$cp]; //@line 981 "audioop.c"
        var $32=HEAP[$i]; //@line 981 "audioop.c"
        var $33=(($31+$32)&4294967295); //@line 981 "audioop.c"
        var $34=$33; //@line 981 "audioop.c"
        var $35=HEAP[$34]; //@line 981 "audioop.c"
        HEAP[$val]=$35; //@line 981 "audioop.c"
        __label__ = 13; break; //@line 981 "audioop.c"
      case 13: // $bb12
        var $36=HEAP[$size]; //@line 983 "audioop.c"
        var $37=((($36))|0)==1; //@line 983 "audioop.c"
        if ($37) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 983 "audioop.c"
      case 14: // $bb13
        var $38=HEAP[$val]; //@line 983 "audioop.c"
        var $39=((($38)) & 255); //@line 983 "audioop.c"
        var $40=HEAP[$bias]; //@line 983 "audioop.c"
        var $41=((($40)) & 255); //@line 983 "audioop.c"
        var $42=((($39) + ($41))&255); //@line 983 "audioop.c"
        var $43=HEAP[$ncp]; //@line 983 "audioop.c"
        var $44=HEAP[$i]; //@line 983 "audioop.c"
        var $45=(($43+$44)&4294967295); //@line 983 "audioop.c"
        HEAP[$45]=$42; //@line 983 "audioop.c"
        __label__ = 19; break; //@line 983 "audioop.c"
      case 15: // $bb14
        var $46=HEAP[$size]; //@line 984 "audioop.c"
        var $47=((($46))|0)==2; //@line 984 "audioop.c"
        if ($47) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 984 "audioop.c"
      case 16: // $bb15
        var $48=HEAP[$ncp]; //@line 984 "audioop.c"
        var $49=HEAP[$i]; //@line 984 "audioop.c"
        var $50=(($48+$49)&4294967295); //@line 984 "audioop.c"
        var $51=$50; //@line 984 "audioop.c"
        var $52=HEAP[$val]; //@line 984 "audioop.c"
        var $53=((($52)) & 65535); //@line 984 "audioop.c"
        var $54=HEAP[$bias]; //@line 984 "audioop.c"
        var $55=((($54)) & 65535); //@line 984 "audioop.c"
        var $56=((($53) + ($55))&65535); //@line 984 "audioop.c"
        HEAP[$51]=$56; //@line 984 "audioop.c"
        __label__ = 19; break; //@line 984 "audioop.c"
      case 17: // $bb16
        var $57=HEAP[$size]; //@line 985 "audioop.c"
        var $58=((($57))|0)==4; //@line 985 "audioop.c"
        if ($58) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 985 "audioop.c"
      case 18: // $bb17
        var $59=HEAP[$ncp]; //@line 985 "audioop.c"
        var $60=HEAP[$i]; //@line 985 "audioop.c"
        var $61=(($59+$60)&4294967295); //@line 985 "audioop.c"
        var $62=$61; //@line 985 "audioop.c"
        var $63=HEAP[$bias]; //@line 985 "audioop.c"
        var $64=HEAP[$val]; //@line 985 "audioop.c"
        var $65=((($64) + ($63))&4294967295); //@line 985 "audioop.c"
        HEAP[$62]=$65; //@line 985 "audioop.c"
        __label__ = 19; break; //@line 985 "audioop.c"
      case 19: // $bb18
        var $66=HEAP[$size]; //@line 978 "audioop.c"
        var $67=HEAP[$i]; //@line 978 "audioop.c"
        var $68=((($67) + ($66))&4294967295); //@line 978 "audioop.c"
        HEAP[$i]=$68; //@line 978 "audioop.c"
        __label__ = 20; break; //@line 978 "audioop.c"
      case 20: // $bb19
        var $69=HEAP[$len]; //@line 978 "audioop.c"
        var $70=HEAP[$i]; //@line 978 "audioop.c"
        var $71=((($70))|0) < ((($69))|0); //@line 978 "audioop.c"
        if ($71) { __label__ = 7; break; } else { __label__ = 21; break; } //@line 978 "audioop.c"
      case 21: // $bb20
        var $72=HEAP[$rv]; //@line 987 "audioop.c"
        HEAP[$0]=$72; //@line 987 "audioop.c"
        __label__ = 22; break; //@line 987 "audioop.c"
      case 22: // $bb21
        var $73=HEAP[$0]; //@line 967 "audioop.c"
        HEAP[$retval]=$73; //@line 967 "audioop.c"
        __label__ = 23; break; //@line 967 "audioop.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 967 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 967 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_reverse($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $ncp=__stackBase__+20;
        var $len=__stackBase__+24;
        var $size=__stackBase__+28;
        var $val=__stackBase__+32;
        var $rv=__stackBase__+36;
        var $i=__stackBase__+40;
        var $j=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 995 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 999 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str27)&4294967295), $cp, $len, $size); //@line 999 "audioop.c"
        var $3=((($2))|0)==0; //@line 999 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 999 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1001 "audioop.c"
        __label__ = 22; break; //@line 1001 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1003 "audioop.c"
        var $5=HEAP[$len]; //@line 1003 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1003 "audioop.c"
        var $7=((($6))|0)==0; //@line 1003 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1003 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1004 "audioop.c"
        __label__ = 22; break; //@line 1004 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len]; //@line 1006 "audioop.c"
        var $9=_PyString_FromStringAndSize(0, $8); //@line 1006 "audioop.c"
        HEAP[$rv]=$9; //@line 1006 "audioop.c"
        var $10=HEAP[$rv]; //@line 1007 "audioop.c"
        var $11=($10)==0; //@line 1007 "audioop.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1007 "audioop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1008 "audioop.c"
        __label__ = 22; break; //@line 1008 "audioop.c"
      case 6: // $bb5
        var $12=HEAP[$rv]; //@line 1009 "audioop.c"
        var $13=_PyString_AsString($12); //@line 1009 "audioop.c"
        HEAP[$ncp]=$13; //@line 1009 "audioop.c"
        HEAP[$i]=0; //@line 1011 "audioop.c"
        __label__ = 20; break; //@line 1011 "audioop.c"
      case 7: // $bb6
        var $14=HEAP[$size]; //@line 1012 "audioop.c"
        var $15=((($14))|0)==1; //@line 1012 "audioop.c"
        if ($15) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1012 "audioop.c"
      case 8: // $bb7
        var $16=HEAP[$cp]; //@line 1012 "audioop.c"
        var $17=HEAP[$i]; //@line 1012 "audioop.c"
        var $18=(($16+$17)&4294967295); //@line 1012 "audioop.c"
        var $19=HEAP[$18]; //@line 1012 "audioop.c"
        var $20=reSign(($19), 8, 0); //@line 1012 "audioop.c"
        var $21=($20) << 8; //@line 1012 "audioop.c"
        HEAP[$val]=$21; //@line 1012 "audioop.c"
        __label__ = 13; break; //@line 1012 "audioop.c"
      case 9: // $bb8
        var $22=HEAP[$size]; //@line 1013 "audioop.c"
        var $23=((($22))|0)==2; //@line 1013 "audioop.c"
        if ($23) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1013 "audioop.c"
      case 10: // $bb9
        var $24=HEAP[$cp]; //@line 1013 "audioop.c"
        var $25=HEAP[$i]; //@line 1013 "audioop.c"
        var $26=(($24+$25)&4294967295); //@line 1013 "audioop.c"
        var $27=$26; //@line 1013 "audioop.c"
        var $28=HEAP[$27]; //@line 1013 "audioop.c"
        var $29=reSign(($28), 16, 0); //@line 1013 "audioop.c"
        HEAP[$val]=$29; //@line 1013 "audioop.c"
        __label__ = 13; break; //@line 1013 "audioop.c"
      case 11: // $bb10
        var $30=HEAP[$size]; //@line 1014 "audioop.c"
        var $31=((($30))|0)==4; //@line 1014 "audioop.c"
        if ($31) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1014 "audioop.c"
      case 12: // $bb11
        var $32=HEAP[$cp]; //@line 1014 "audioop.c"
        var $33=HEAP[$i]; //@line 1014 "audioop.c"
        var $34=(($32+$33)&4294967295); //@line 1014 "audioop.c"
        var $35=$34; //@line 1014 "audioop.c"
        var $36=HEAP[$35]; //@line 1014 "audioop.c"
        var $37=((($36))|0) >> 16; //@line 1014 "audioop.c"
        HEAP[$val]=$37; //@line 1014 "audioop.c"
        __label__ = 13; break; //@line 1014 "audioop.c"
      case 13: // $bb12
        var $38=HEAP[$len]; //@line 1016 "audioop.c"
        var $39=HEAP[$i]; //@line 1016 "audioop.c"
        var $40=((($38) - ($39))&4294967295); //@line 1016 "audioop.c"
        var $41=HEAP[$size]; //@line 1016 "audioop.c"
        var $42=((($40) - ($41))&4294967295); //@line 1016 "audioop.c"
        HEAP[$j]=$42; //@line 1016 "audioop.c"
        var $43=HEAP[$size]; //@line 1018 "audioop.c"
        var $44=((($43))|0)==1; //@line 1018 "audioop.c"
        if ($44) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1018 "audioop.c"
      case 14: // $bb13
        var $45=HEAP[$ncp]; //@line 1018 "audioop.c"
        var $46=HEAP[$j]; //@line 1018 "audioop.c"
        var $47=(($45+$46)&4294967295); //@line 1018 "audioop.c"
        var $48=HEAP[$val]; //@line 1018 "audioop.c"
        var $49=((($48))|0) >> 8; //@line 1018 "audioop.c"
        var $50=((($49)) & 255); //@line 1018 "audioop.c"
        HEAP[$47]=$50; //@line 1018 "audioop.c"
        __label__ = 19; break; //@line 1018 "audioop.c"
      case 15: // $bb14
        var $51=HEAP[$size]; //@line 1019 "audioop.c"
        var $52=((($51))|0)==2; //@line 1019 "audioop.c"
        if ($52) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1019 "audioop.c"
      case 16: // $bb15
        var $53=HEAP[$ncp]; //@line 1019 "audioop.c"
        var $54=HEAP[$j]; //@line 1019 "audioop.c"
        var $55=(($53+$54)&4294967295); //@line 1019 "audioop.c"
        var $56=$55; //@line 1019 "audioop.c"
        var $57=HEAP[$val]; //@line 1019 "audioop.c"
        var $58=((($57)) & 65535); //@line 1019 "audioop.c"
        HEAP[$56]=$58; //@line 1019 "audioop.c"
        __label__ = 19; break; //@line 1019 "audioop.c"
      case 17: // $bb16
        var $59=HEAP[$size]; //@line 1020 "audioop.c"
        var $60=((($59))|0)==4; //@line 1020 "audioop.c"
        if ($60) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1020 "audioop.c"
      case 18: // $bb17
        var $61=HEAP[$ncp]; //@line 1020 "audioop.c"
        var $62=HEAP[$j]; //@line 1020 "audioop.c"
        var $63=(($61+$62)&4294967295); //@line 1020 "audioop.c"
        var $64=$63; //@line 1020 "audioop.c"
        var $65=HEAP[$val]; //@line 1020 "audioop.c"
        var $66=($65) << 16; //@line 1020 "audioop.c"
        HEAP[$64]=$66; //@line 1020 "audioop.c"
        __label__ = 19; break; //@line 1020 "audioop.c"
      case 19: // $bb18
        var $67=HEAP[$size]; //@line 1011 "audioop.c"
        var $68=HEAP[$i]; //@line 1011 "audioop.c"
        var $69=((($68) + ($67))&4294967295); //@line 1011 "audioop.c"
        HEAP[$i]=$69; //@line 1011 "audioop.c"
        __label__ = 20; break; //@line 1011 "audioop.c"
      case 20: // $bb19
        var $70=HEAP[$len]; //@line 1011 "audioop.c"
        var $71=HEAP[$i]; //@line 1011 "audioop.c"
        var $72=((($71))|0) < ((($70))|0); //@line 1011 "audioop.c"
        if ($72) { __label__ = 7; break; } else { __label__ = 21; break; } //@line 1011 "audioop.c"
      case 21: // $bb20
        var $73=HEAP[$rv]; //@line 1022 "audioop.c"
        HEAP[$0]=$73; //@line 1022 "audioop.c"
        __label__ = 22; break; //@line 1022 "audioop.c"
      case 22: // $bb21
        var $74=HEAP[$0]; //@line 1001 "audioop.c"
        HEAP[$retval]=$74; //@line 1001 "audioop.c"
        __label__ = 23; break; //@line 1001 "audioop.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 1001 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 1001 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_lin2lin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $ncp=__stackBase__+20;
        var $len=__stackBase__+24;
        var $size=__stackBase__+28;
        var $size2=__stackBase__+32;
        var $val=__stackBase__+36;
        var $rv=__stackBase__+40;
        var $i=__stackBase__+44;
        var $j=__stackBase__+48;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 1030 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 1034 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str28)&4294967295), $cp, $len, $size, $size2); //@line 1034 "audioop.c"
        var $3=((($2))|0)==0; //@line 1034 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1034 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1036 "audioop.c"
        __label__ = 26; break; //@line 1036 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1038 "audioop.c"
        var $5=HEAP[$len]; //@line 1038 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1038 "audioop.c"
        var $7=((($6))|0)==0; //@line 1038 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1038 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1039 "audioop.c"
        __label__ = 26; break; //@line 1039 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size2]; //@line 1040 "audioop.c"
        var $9=_audioop_check_size($8); //@line 1040 "audioop.c"
        var $10=((($9))|0)==0; //@line 1040 "audioop.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1040 "audioop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1041 "audioop.c"
        __label__ = 26; break; //@line 1041 "audioop.c"
      case 6: // $bb5
        var $11=HEAP[$len]; //@line 1043 "audioop.c"
        var $12=HEAP[$size]; //@line 1043 "audioop.c"
        var $13=((((($11))|0)/((($12))|0))|0); //@line 1043 "audioop.c"
        var $14=HEAP[$size2]; //@line 1043 "audioop.c"
        var $15=((2147483647/((($14))|0))|0); //@line 1043 "audioop.c"
        var $16=((($13))|0) > ((($15))|0); //@line 1043 "audioop.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1043 "audioop.c"
      case 7: // $bb6
        var $17=HEAP[_PyExc_MemoryError]; //@line 1044 "audioop.c"
        _PyErr_SetString($17, ((__str23)&4294967295)); //@line 1044 "audioop.c"
        HEAP[$0]=0; //@line 1046 "audioop.c"
        __label__ = 26; break; //@line 1046 "audioop.c"
      case 8: // $bb7
        var $18=HEAP[$len]; //@line 1048 "audioop.c"
        var $19=HEAP[$size]; //@line 1048 "audioop.c"
        var $20=((((($18))|0)/((($19))|0))|0); //@line 1048 "audioop.c"
        var $21=HEAP[$size2]; //@line 1048 "audioop.c"
        var $22=((($20) * ($21))&4294967295); //@line 1048 "audioop.c"
        var $23=_PyString_FromStringAndSize(0, $22); //@line 1048 "audioop.c"
        HEAP[$rv]=$23; //@line 1048 "audioop.c"
        var $24=HEAP[$rv]; //@line 1049 "audioop.c"
        var $25=($24)==0; //@line 1049 "audioop.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1049 "audioop.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 1050 "audioop.c"
        __label__ = 26; break; //@line 1050 "audioop.c"
      case 10: // $bb9
        var $26=HEAP[$rv]; //@line 1051 "audioop.c"
        var $27=_PyString_AsString($26); //@line 1051 "audioop.c"
        HEAP[$ncp]=$27; //@line 1051 "audioop.c"
        HEAP[$i]=0; //@line 1053 "audioop.c"
        HEAP[$j]=0; //@line 1053 "audioop.c"
        __label__ = 24; break; //@line 1053 "audioop.c"
      case 11: // $bb10
        var $28=HEAP[$size]; //@line 1054 "audioop.c"
        var $29=((($28))|0)==1; //@line 1054 "audioop.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1054 "audioop.c"
      case 12: // $bb11
        var $30=HEAP[$cp]; //@line 1054 "audioop.c"
        var $31=HEAP[$i]; //@line 1054 "audioop.c"
        var $32=(($30+$31)&4294967295); //@line 1054 "audioop.c"
        var $33=HEAP[$32]; //@line 1054 "audioop.c"
        var $34=reSign(($33), 8, 0); //@line 1054 "audioop.c"
        var $35=($34) << 8; //@line 1054 "audioop.c"
        HEAP[$val]=$35; //@line 1054 "audioop.c"
        __label__ = 17; break; //@line 1054 "audioop.c"
      case 13: // $bb12
        var $36=HEAP[$size]; //@line 1055 "audioop.c"
        var $37=((($36))|0)==2; //@line 1055 "audioop.c"
        if ($37) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1055 "audioop.c"
      case 14: // $bb13
        var $38=HEAP[$cp]; //@line 1055 "audioop.c"
        var $39=HEAP[$i]; //@line 1055 "audioop.c"
        var $40=(($38+$39)&4294967295); //@line 1055 "audioop.c"
        var $41=$40; //@line 1055 "audioop.c"
        var $42=HEAP[$41]; //@line 1055 "audioop.c"
        var $43=reSign(($42), 16, 0); //@line 1055 "audioop.c"
        HEAP[$val]=$43; //@line 1055 "audioop.c"
        __label__ = 17; break; //@line 1055 "audioop.c"
      case 15: // $bb14
        var $44=HEAP[$size]; //@line 1056 "audioop.c"
        var $45=((($44))|0)==4; //@line 1056 "audioop.c"
        if ($45) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1056 "audioop.c"
      case 16: // $bb15
        var $46=HEAP[$cp]; //@line 1056 "audioop.c"
        var $47=HEAP[$i]; //@line 1056 "audioop.c"
        var $48=(($46+$47)&4294967295); //@line 1056 "audioop.c"
        var $49=$48; //@line 1056 "audioop.c"
        var $50=HEAP[$49]; //@line 1056 "audioop.c"
        var $51=((($50))|0) >> 16; //@line 1056 "audioop.c"
        HEAP[$val]=$51; //@line 1056 "audioop.c"
        __label__ = 17; break; //@line 1056 "audioop.c"
      case 17: // $bb16
        var $52=HEAP[$size2]; //@line 1058 "audioop.c"
        var $53=((($52))|0)==1; //@line 1058 "audioop.c"
        if ($53) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1058 "audioop.c"
      case 18: // $bb17
        var $54=HEAP[$ncp]; //@line 1058 "audioop.c"
        var $55=HEAP[$j]; //@line 1058 "audioop.c"
        var $56=(($54+$55)&4294967295); //@line 1058 "audioop.c"
        var $57=HEAP[$val]; //@line 1058 "audioop.c"
        var $58=((($57))|0) >> 8; //@line 1058 "audioop.c"
        var $59=((($58)) & 255); //@line 1058 "audioop.c"
        HEAP[$56]=$59; //@line 1058 "audioop.c"
        __label__ = 23; break; //@line 1058 "audioop.c"
      case 19: // $bb18
        var $60=HEAP[$size2]; //@line 1059 "audioop.c"
        var $61=((($60))|0)==2; //@line 1059 "audioop.c"
        if ($61) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1059 "audioop.c"
      case 20: // $bb19
        var $62=HEAP[$ncp]; //@line 1059 "audioop.c"
        var $63=HEAP[$j]; //@line 1059 "audioop.c"
        var $64=(($62+$63)&4294967295); //@line 1059 "audioop.c"
        var $65=$64; //@line 1059 "audioop.c"
        var $66=HEAP[$val]; //@line 1059 "audioop.c"
        var $67=((($66)) & 65535); //@line 1059 "audioop.c"
        HEAP[$65]=$67; //@line 1059 "audioop.c"
        __label__ = 23; break; //@line 1059 "audioop.c"
      case 21: // $bb20
        var $68=HEAP[$size2]; //@line 1060 "audioop.c"
        var $69=((($68))|0)==4; //@line 1060 "audioop.c"
        if ($69) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1060 "audioop.c"
      case 22: // $bb21
        var $70=HEAP[$ncp]; //@line 1060 "audioop.c"
        var $71=HEAP[$j]; //@line 1060 "audioop.c"
        var $72=(($70+$71)&4294967295); //@line 1060 "audioop.c"
        var $73=$72; //@line 1060 "audioop.c"
        var $74=HEAP[$val]; //@line 1060 "audioop.c"
        var $75=($74) << 16; //@line 1060 "audioop.c"
        HEAP[$73]=$75; //@line 1060 "audioop.c"
        __label__ = 23; break; //@line 1060 "audioop.c"
      case 23: // $bb22
        var $76=HEAP[$size]; //@line 1053 "audioop.c"
        var $77=HEAP[$i]; //@line 1053 "audioop.c"
        var $78=((($77) + ($76))&4294967295); //@line 1053 "audioop.c"
        HEAP[$i]=$78; //@line 1053 "audioop.c"
        var $79=HEAP[$size2]; //@line 1053 "audioop.c"
        var $80=HEAP[$j]; //@line 1053 "audioop.c"
        var $81=((($80) + ($79))&4294967295); //@line 1053 "audioop.c"
        HEAP[$j]=$81; //@line 1053 "audioop.c"
        __label__ = 24; break; //@line 1053 "audioop.c"
      case 24: // $bb23
        var $82=HEAP[$len]; //@line 1053 "audioop.c"
        var $83=HEAP[$i]; //@line 1053 "audioop.c"
        var $84=((($83))|0) < ((($82))|0); //@line 1053 "audioop.c"
        if ($84) { __label__ = 11; break; } else { __label__ = 25; break; } //@line 1053 "audioop.c"
      case 25: // $bb24
        var $85=HEAP[$rv]; //@line 1062 "audioop.c"
        HEAP[$0]=$85; //@line 1062 "audioop.c"
        __label__ = 26; break; //@line 1062 "audioop.c"
      case 26: // $bb25
        var $86=HEAP[$0]; //@line 1036 "audioop.c"
        HEAP[$retval]=$86; //@line 1036 "audioop.c"
        __label__ = 27; break; //@line 1036 "audioop.c"
      case 27: // $return
        var $retval26=HEAP[$retval]; //@line 1036 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 1036 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gcd($a, $b) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr=__stackBase__;
        var $b_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $tmp=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$a_addr]=$a;
        HEAP[$b_addr]=$b;
        __label__ = 2; break; //@line 1068 "audioop.c"
      case 1: // $bb
        var $1=HEAP[$a_addr]; //@line 1069 "audioop.c"
        var $2=HEAP[$b_addr]; //@line 1069 "audioop.c"
        var $3=((($1))|0) % ((($2))|0); //@line 1069 "audioop.c"
        HEAP[$tmp]=$3; //@line 1069 "audioop.c"
        var $4=HEAP[$b_addr]; //@line 1070 "audioop.c"
        HEAP[$a_addr]=$4; //@line 1070 "audioop.c"
        var $5=HEAP[$tmp]; //@line 1071 "audioop.c"
        HEAP[$b_addr]=$5; //@line 1071 "audioop.c"
        __label__ = 2; break; //@line 1071 "audioop.c"
      case 2: // $bb1
        var $6=HEAP[$b_addr]; //@line 1068 "audioop.c"
        var $7=((($6))|0) > 0; //@line 1068 "audioop.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1068 "audioop.c"
      case 3: // $bb2
        var $8=HEAP[$a_addr]; //@line 1073 "audioop.c"
        HEAP[$0]=$8; //@line 1073 "audioop.c"
        var $9=HEAP[$0]; //@line 1073 "audioop.c"
        HEAP[$retval]=$9; //@line 1073 "audioop.c"
        __label__ = 4; break; //@line 1073 "audioop.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1073 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1073 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_ratecv($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 100; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_386=__stackBase__+12;
        var $0=__stackBase__+16;
        var $cp=__stackBase__+20;
        var $ncp=__stackBase__+24;
        var $len=__stackBase__+28;
        var $size=__stackBase__+32;
        var $nchannels=__stackBase__+36;
        var $inrate=__stackBase__+40;
        var $outrate=__stackBase__+44;
        var $weightA=__stackBase__+48;
        var $weightB=__stackBase__+52;
        var $chan=__stackBase__+56;
        var $d=__stackBase__+60;
        var $prev_i=__stackBase__+64;
        var $cur_i=__stackBase__+68;
        var $cur_o=__stackBase__+72;
        var $state=__stackBase__+76;
        var $samps=__stackBase__+80;
        var $str=__stackBase__+84;
        var $rv=__stackBase__+88;
        var $bytes_per_frame=__stackBase__+92;
        var $q=__stackBase__+96;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$rv]=0; //@line 1082 "audioop.c"
        HEAP[$weightA]=1; //@line 1085 "audioop.c"
        HEAP[$weightB]=0; //@line 1086 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 1087 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str29)&4294967295), $cp, $len, $size, $nchannels, $inrate, $outrate, $state, $weightA, $weightB); //@line 1087 "audioop.c"
        var $3=((($2))|0)==0; //@line 1087 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1087 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1090 "audioop.c"
        __label__ = 88; break; //@line 1090 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1091 "audioop.c"
        var $5=_audioop_check_size($4); //@line 1091 "audioop.c"
        var $6=((($5))|0)==0; //@line 1091 "audioop.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1091 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1092 "audioop.c"
        __label__ = 88; break; //@line 1092 "audioop.c"
      case 4: // $bb3
        var $7=HEAP[$nchannels]; //@line 1093 "audioop.c"
        var $8=((($7))|0) <= 0; //@line 1093 "audioop.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1093 "audioop.c"
      case 5: // $bb4
        var $9=HEAP[_AudioopError]; //@line 1094 "audioop.c"
        _PyErr_SetString($9, ((__str30)&4294967295)); //@line 1094 "audioop.c"
        HEAP[$0]=0; //@line 1095 "audioop.c"
        __label__ = 88; break; //@line 1095 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$size]; //@line 1097 "audioop.c"
        var $11=HEAP[$nchannels]; //@line 1097 "audioop.c"
        var $12=((($10) * ($11))&4294967295); //@line 1097 "audioop.c"
        HEAP[$bytes_per_frame]=$12; //@line 1097 "audioop.c"
        var $13=HEAP[$nchannels]; //@line 1098 "audioop.c"
        var $14=HEAP[$bytes_per_frame]; //@line 1098 "audioop.c"
        var $15=((((($14))|0)/((($13))|0))|0); //@line 1098 "audioop.c"
        var $16=HEAP[$size]; //@line 1098 "audioop.c"
        var $17=((($15))|0)!=((($16))|0); //@line 1098 "audioop.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1098 "audioop.c"
      case 7: // $bb6
        var $18=HEAP[_PyExc_OverflowError]; //@line 1102 "audioop.c"
        _PyErr_SetString($18, ((__str31)&4294967295)); //@line 1102 "audioop.c"
        HEAP[$0]=0; //@line 1104 "audioop.c"
        __label__ = 88; break; //@line 1104 "audioop.c"
      case 8: // $bb7
        var $19=HEAP[$weightA]; //@line 1106 "audioop.c"
        var $20=((($19))|0) <= 0; //@line 1106 "audioop.c"
        if ($20) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 1106 "audioop.c"
      case 9: // $bb8
        var $21=HEAP[$weightB]; //@line 1106 "audioop.c"
        var $22=((($21))|0) < 0; //@line 1106 "audioop.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1106 "audioop.c"
      case 10: // $bb9
        var $23=HEAP[_AudioopError]; //@line 1107 "audioop.c"
        _PyErr_SetString($23, ((__str32)&4294967295)); //@line 1107 "audioop.c"
        HEAP[$0]=0; //@line 1109 "audioop.c"
        __label__ = 88; break; //@line 1109 "audioop.c"
      case 11: // $bb10
        var $24=HEAP[$len]; //@line 1111 "audioop.c"
        var $25=HEAP[$bytes_per_frame]; //@line 1111 "audioop.c"
        var $26=((($24))|0) % ((($25))|0); //@line 1111 "audioop.c"
        var $27=((($26))|0)!=0; //@line 1111 "audioop.c"
        if ($27) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1111 "audioop.c"
      case 12: // $bb11
        var $28=HEAP[_AudioopError]; //@line 1112 "audioop.c"
        _PyErr_SetString($28, ((__str1)&4294967295)); //@line 1112 "audioop.c"
        HEAP[$0]=0; //@line 1113 "audioop.c"
        __label__ = 88; break; //@line 1113 "audioop.c"
      case 13: // $bb12
        var $29=HEAP[$inrate]; //@line 1115 "audioop.c"
        var $30=((($29))|0) <= 0; //@line 1115 "audioop.c"
        if ($30) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 1115 "audioop.c"
      case 14: // $bb13
        var $31=HEAP[$outrate]; //@line 1115 "audioop.c"
        var $32=((($31))|0) <= 0; //@line 1115 "audioop.c"
        if ($32) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1115 "audioop.c"
      case 15: // $bb14
        var $33=HEAP[_AudioopError]; //@line 1116 "audioop.c"
        _PyErr_SetString($33, ((__str33)&4294967295)); //@line 1116 "audioop.c"
        HEAP[$0]=0; //@line 1117 "audioop.c"
        __label__ = 88; break; //@line 1117 "audioop.c"
      case 16: // $bb15
        var $34=HEAP[$outrate]; //@line 1120 "audioop.c"
        var $35=HEAP[$inrate]; //@line 1120 "audioop.c"
        var $36=_gcd($35, $34); //@line 1120 "audioop.c"
        HEAP[$d]=$36; //@line 1120 "audioop.c"
        var $37=HEAP[$inrate]; //@line 1121 "audioop.c"
        var $38=HEAP[$d]; //@line 1121 "audioop.c"
        var $39=((((($37))|0)/((($38))|0))|0); //@line 1121 "audioop.c"
        HEAP[$inrate]=$39; //@line 1121 "audioop.c"
        var $40=HEAP[$outrate]; //@line 1122 "audioop.c"
        var $41=HEAP[$d]; //@line 1122 "audioop.c"
        var $42=((((($40))|0)/((($41))|0))|0); //@line 1122 "audioop.c"
        HEAP[$outrate]=$42; //@line 1122 "audioop.c"
        var $43=HEAP[$nchannels]; //@line 1124 "audioop.c"
        var $44=((($43))>>>0) > 1073741823; //@line 1124 "audioop.c"
        if ($44) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1124 "audioop.c"
      case 17: // $bb16
        var $45=HEAP[_PyExc_MemoryError]; //@line 1125 "audioop.c"
        _PyErr_SetString($45, ((__str23)&4294967295)); //@line 1125 "audioop.c"
        HEAP[$0]=0; //@line 1127 "audioop.c"
        __label__ = 88; break; //@line 1127 "audioop.c"
      case 18: // $bb17
        var $46=HEAP[$nchannels]; //@line 1129 "audioop.c"
        var $47=((($46) * 4)&4294967295); //@line 1129 "audioop.c"
        var $48=_malloc($47); //@line 1129 "audioop.c"
        var $49=$48; //@line 1129 "audioop.c"
        HEAP[$prev_i]=$49; //@line 1129 "audioop.c"
        var $50=HEAP[$nchannels]; //@line 1130 "audioop.c"
        var $51=((($50) * 4)&4294967295); //@line 1130 "audioop.c"
        var $52=_malloc($51); //@line 1130 "audioop.c"
        var $53=$52; //@line 1130 "audioop.c"
        HEAP[$cur_i]=$53; //@line 1130 "audioop.c"
        var $54=HEAP[$prev_i]; //@line 1131 "audioop.c"
        var $55=($54)==0; //@line 1131 "audioop.c"
        if ($55) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 1131 "audioop.c"
      case 19: // $bb18
        var $56=HEAP[$cur_i]; //@line 1131 "audioop.c"
        var $57=($56)==0; //@line 1131 "audioop.c"
        if ($57) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1131 "audioop.c"
      case 20: // $bb19
        var $58=_PyErr_NoMemory(); //@line 1132 "audioop.c"
        __label__ = 83; break; //@line 1132 "audioop.c"
      case 21: // $bb20
        var $59=HEAP[$len]; //@line 1136 "audioop.c"
        var $60=HEAP[$bytes_per_frame]; //@line 1136 "audioop.c"
        var $61=((((($59))|0)/((($60))|0))|0); //@line 1136 "audioop.c"
        HEAP[$len]=$61; //@line 1136 "audioop.c"
        var $62=HEAP[$state]; //@line 1138 "audioop.c"
        var $63=($62)==(__Py_NoneStruct); //@line 1138 "audioop.c"
        if ($63) { __label__ = 22; break; } else { __label__ = 26; break; } //@line 1138 "audioop.c"
      case 22: // $bb21
        var $64=HEAP[$outrate]; //@line 1139 "audioop.c"
        var $65=((0 - ($64))&4294967295); //@line 1139 "audioop.c"
        HEAP[$d]=$65; //@line 1139 "audioop.c"
        HEAP[$chan]=0; //@line 1140 "audioop.c"
        __label__ = 24; break; //@line 1140 "audioop.c"
      case 23: // $bb22
        var $66=HEAP[$cur_i]; //@line 1141 "audioop.c"
        var $67=HEAP[$chan]; //@line 1141 "audioop.c"
        var $68=(($66+4*$67)&4294967295); //@line 1141 "audioop.c"
        HEAP[$68]=0; //@line 1141 "audioop.c"
        var $69=HEAP[$cur_i]; //@line 1141 "audioop.c"
        var $70=HEAP[$chan]; //@line 1141 "audioop.c"
        var $71=(($69+4*$70)&4294967295); //@line 1141 "audioop.c"
        var $72=HEAP[$71]; //@line 1141 "audioop.c"
        var $73=HEAP[$prev_i]; //@line 1141 "audioop.c"
        var $74=HEAP[$chan]; //@line 1141 "audioop.c"
        var $75=(($73+4*$74)&4294967295); //@line 1141 "audioop.c"
        HEAP[$75]=$72; //@line 1141 "audioop.c"
        var $76=HEAP[$chan]; //@line 1140 "audioop.c"
        var $77=((($76) + 1)&4294967295); //@line 1140 "audioop.c"
        HEAP[$chan]=$77; //@line 1140 "audioop.c"
        __label__ = 24; break; //@line 1140 "audioop.c"
      case 24: // $bb23
        var $78=HEAP[$nchannels]; //@line 1140 "audioop.c"
        var $79=HEAP[$chan]; //@line 1140 "audioop.c"
        var $80=((($79))|0) < ((($78))|0); //@line 1140 "audioop.c"
        if ($80) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 1140 "audioop.c"
      case 25: // $bb24
        __label__ = 33; break; //@line 1140 "audioop.c"
      case 26: // $bb25
        var $81=HEAP[$state]; //@line 1144 "audioop.c"
        var $82=_PyArg_ParseTuple($81, ((__str34)&4294967295), $d, _PyTuple_Type, $samps); //@line 1144 "audioop.c"
        var $83=((($82))|0)==0; //@line 1144 "audioop.c"
        if ($83) { __label__ = 83; break; } else { __label__ = 27; break; } //@line 1144 "audioop.c"
      case 27: // $bb26
        var $84=HEAP[$samps]; //@line 1148 "audioop.c"
        var $85=_PyTuple_Size($84); //@line 1148 "audioop.c"
        var $86=HEAP[$nchannels]; //@line 1148 "audioop.c"
        var $87=((($85))|0)!=((($86))|0); //@line 1148 "audioop.c"
        if ($87) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1148 "audioop.c"
      case 28: // $bb27
        var $88=HEAP[_AudioopError]; //@line 1149 "audioop.c"
        _PyErr_SetString($88, ((__str35)&4294967295)); //@line 1149 "audioop.c"
        __label__ = 83; break; //@line 1149 "audioop.c"
      case 29: // $bb28
        HEAP[$chan]=0; //@line 1153 "audioop.c"
        __label__ = 32; break; //@line 1153 "audioop.c"
      case 30: // $bb29
        var $89=HEAP[$cur_i]; //@line 1154 "audioop.c"
        var $90=HEAP[$chan]; //@line 1154 "audioop.c"
        var $91=(($89+4*$90)&4294967295); //@line 1154 "audioop.c"
        var $92=HEAP[$prev_i]; //@line 1154 "audioop.c"
        var $93=HEAP[$chan]; //@line 1154 "audioop.c"
        var $94=(($92+4*$93)&4294967295); //@line 1154 "audioop.c"
        var $95=HEAP[$samps]; //@line 1154 "audioop.c"
        var $96=HEAP[$chan]; //@line 1154 "audioop.c"
        var $97=_PyTuple_GetItem($95, $96); //@line 1154 "audioop.c"
        var $98=_PyArg_ParseTuple($97, ((__str36)&4294967295), $94, $91); //@line 1154 "audioop.c"
        var $99=((($98))|0)==0; //@line 1154 "audioop.c"
        if ($99) { __label__ = 83; break; } else { __label__ = 31; break; } //@line 1154 "audioop.c"
      case 31: // $bb30
        var $100=HEAP[$chan]; //@line 1153 "audioop.c"
        var $101=((($100) + 1)&4294967295); //@line 1153 "audioop.c"
        HEAP[$chan]=$101; //@line 1153 "audioop.c"
        __label__ = 32; break; //@line 1153 "audioop.c"
      case 32: // $bb31
        var $102=HEAP[$nchannels]; //@line 1153 "audioop.c"
        var $103=HEAP[$chan]; //@line 1153 "audioop.c"
        var $104=((($103))|0) < ((($102))|0); //@line 1153 "audioop.c"
        if ($104) { __label__ = 30; break; } else { __label__ = 33; break; } //@line 1153 "audioop.c"
      case 33: // $bb32
        var $105=HEAP[$len]; //@line 1171 "audioop.c"
        var $106=((($105))|0) > 0; //@line 1171 "audioop.c"
        if ($106) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1171 "audioop.c"
      case 34: // $bb33
        var $107=HEAP[$len]; //@line 1171 "audioop.c"
        var $108=((($107) - 1)&4294967295); //@line 1171 "audioop.c"
        var $109=HEAP[$inrate]; //@line 1171 "audioop.c"
        var $110=((((($108))|0)/((($109))|0))|0); //@line 1171 "audioop.c"
        var $111=((($110) + 1)&4294967295); //@line 1171 "audioop.c"
        HEAP[$iftmp_386]=$111; //@line 1171 "audioop.c"
        __label__ = 36; break; //@line 1171 "audioop.c"
      case 35: // $bb34
        HEAP[$iftmp_386]=0; //@line 1171 "audioop.c"
        __label__ = 36; break; //@line 1171 "audioop.c"
      case 36: // $bb35
        var $112=HEAP[$iftmp_386]; //@line 1171 "audioop.c"
        HEAP[$q]=$112; //@line 1171 "audioop.c"
        var $113=HEAP[$q]; //@line 1172 "audioop.c"
        var $114=((2147483647/((($113))|0))|0); //@line 1172 "audioop.c"
        var $115=HEAP[$bytes_per_frame]; //@line 1172 "audioop.c"
        var $116=((((($114))|0)/((($115))|0))|0); //@line 1172 "audioop.c"
        var $117=HEAP[$outrate]; //@line 1172 "audioop.c"
        var $118=((($116))|0) < ((($117))|0); //@line 1172 "audioop.c"
        if ($118) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1172 "audioop.c"
      case 37: // $bb36
        HEAP[$str]=0; //@line 1173 "audioop.c"
        __label__ = 39; break; //@line 1173 "audioop.c"
      case 38: // $bb37
        var $119=HEAP[$outrate]; //@line 1175 "audioop.c"
        var $120=HEAP[$q]; //@line 1175 "audioop.c"
        var $121=((($120) * ($119))&4294967295); //@line 1175 "audioop.c"
        var $122=HEAP[$bytes_per_frame]; //@line 1175 "audioop.c"
        var $123=((($121) * ($122))&4294967295); //@line 1175 "audioop.c"
        var $124=_PyString_FromStringAndSize(0, $123); //@line 1175 "audioop.c"
        HEAP[$str]=$124; //@line 1175 "audioop.c"
        __label__ = 39; break; //@line 1175 "audioop.c"
      case 39: // $bb38
        var $125=HEAP[$str]; //@line 1178 "audioop.c"
        var $126=($125)==0; //@line 1178 "audioop.c"
        if ($126) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 1178 "audioop.c"
      case 40: // $bb39
        var $127=HEAP[_PyExc_MemoryError]; //@line 1179 "audioop.c"
        _PyErr_SetString($127, ((__str23)&4294967295)); //@line 1179 "audioop.c"
        __label__ = 83; break; //@line 1179 "audioop.c"
      case 41: // $bb40
        var $128=HEAP[$str]; //@line 1184 "audioop.c"
        var $129=_PyString_AsString($128); //@line 1184 "audioop.c"
        HEAP[$ncp]=$129; //@line 1184 "audioop.c"
        __label__ = 42; break; //@line 1184 "audioop.c"
      case 42: // $bb41
        __label__ = 69; break; //@line 1184 "audioop.c"
      case 43: // $bb42
        var $130=HEAP[$len]; //@line 1188 "audioop.c"
        var $131=((($130))|0)==0; //@line 1188 "audioop.c"
        if ($131) { __label__ = 44; break; } else { __label__ = 59; break; } //@line 1188 "audioop.c"
      case 44: // $bb43
        var $132=HEAP[$nchannels]; //@line 1189 "audioop.c"
        var $133=_PyTuple_New($132); //@line 1189 "audioop.c"
        HEAP[$samps]=$133; //@line 1189 "audioop.c"
        var $134=HEAP[$samps]; //@line 1190 "audioop.c"
        var $135=($134)==0; //@line 1190 "audioop.c"
        if ($135) { __label__ = 83; break; } else { __label__ = 45; break; } //@line 1190 "audioop.c"
      case 45: // $bb44
        HEAP[$chan]=0; //@line 1192 "audioop.c"
        __label__ = 47; break; //@line 1192 "audioop.c"
      case 46: // $bb45
        var $136=HEAP[$cur_i]; //@line 1193 "audioop.c"
        var $137=HEAP[$chan]; //@line 1193 "audioop.c"
        var $138=(($136+4*$137)&4294967295); //@line 1193 "audioop.c"
        var $139=HEAP[$138]; //@line 1193 "audioop.c"
        var $140=HEAP[$prev_i]; //@line 1193 "audioop.c"
        var $141=HEAP[$chan]; //@line 1193 "audioop.c"
        var $142=(($140+4*$141)&4294967295); //@line 1193 "audioop.c"
        var $143=HEAP[$142]; //@line 1193 "audioop.c"
        var $144=_Py_BuildValue(((__str6)&4294967295), $143, $139); //@line 1193 "audioop.c"
        var $145=HEAP[$samps]; //@line 1193 "audioop.c"
        var $146=HEAP[$chan]; //@line 1193 "audioop.c"
        var $147=_PyTuple_SetItem($145, $146, $144); //@line 1193 "audioop.c"
        var $148=HEAP[$chan]; //@line 1192 "audioop.c"
        var $149=((($148) + 1)&4294967295); //@line 1192 "audioop.c"
        HEAP[$chan]=$149; //@line 1192 "audioop.c"
        __label__ = 47; break; //@line 1192 "audioop.c"
      case 47: // $bb46
        var $150=HEAP[$nchannels]; //@line 1192 "audioop.c"
        var $151=HEAP[$chan]; //@line 1192 "audioop.c"
        var $152=((($151))|0) < ((($150))|0); //@line 1192 "audioop.c"
        if ($152) { __label__ = 46; break; } else { __label__ = 48; break; } //@line 1192 "audioop.c"
      case 48: // $bb47
        var $153=_PyErr_Occurred(); //@line 1197 "audioop.c"
        var $154=($153)!=0; //@line 1197 "audioop.c"
        if ($154) { __label__ = 83; break; } else { __label__ = 49; break; } //@line 1197 "audioop.c"
      case 49: // $bb48
        var $155=HEAP[$ncp]; //@line 1201 "audioop.c"
        var $156=($155); //@line 1201 "audioop.c"
        var $157=HEAP[$str]; //@line 1201 "audioop.c"
        var $158=_PyString_AsString($157); //@line 1201 "audioop.c"
        var $159=($158); //@line 1201 "audioop.c"
        var $160=((($156) - ($159))&4294967295); //@line 1201 "audioop.c"
        HEAP[$len]=$160; //@line 1201 "audioop.c"
        var $161=HEAP[$len]; //@line 1202 "audioop.c"
        var $162=((($161))|0)==0; //@line 1202 "audioop.c"
        if ($162) { __label__ = 50; break; } else { __label__ = 53; break; } //@line 1202 "audioop.c"
      case 50: // $bb49
        var $163=_PyString_FromStringAndSize(((__str37)&4294967295), 0); //@line 1204 "audioop.c"
        HEAP[$rv]=$163; //@line 1204 "audioop.c"
        var $164=HEAP[$str]; //@line 1205 "audioop.c"
        var $165=(($164)&4294967295); //@line 1205 "audioop.c"
        var $166=HEAP[$165]; //@line 1205 "audioop.c"
        var $167=((($166) - 1)&4294967295); //@line 1205 "audioop.c"
        var $168=(($164)&4294967295); //@line 1205 "audioop.c"
        HEAP[$168]=$167; //@line 1205 "audioop.c"
        var $169=(($164)&4294967295); //@line 1205 "audioop.c"
        var $170=HEAP[$169]; //@line 1205 "audioop.c"
        var $171=((($170))|0)==0; //@line 1205 "audioop.c"
        if ($171) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 1205 "audioop.c"
      case 51: // $bb50
        var $172=HEAP[$str]; //@line 1205 "audioop.c"
        var $173=(($172+4)&4294967295); //@line 1205 "audioop.c"
        var $174=HEAP[$173]; //@line 1205 "audioop.c"
        var $175=(($174+24)&4294967295); //@line 1205 "audioop.c"
        var $176=HEAP[$175]; //@line 1205 "audioop.c"
        var $177=HEAP[$str]; //@line 1205 "audioop.c"
        FUNCTION_TABLE[$176]($177); //@line 1205 "audioop.c"
        __label__ = 52; break; //@line 1205 "audioop.c"
      case 52: // $bb51
        var $178=HEAP[$rv]; //@line 1206 "audioop.c"
        HEAP[$str]=$178; //@line 1206 "audioop.c"
        __label__ = 54; break; //@line 1206 "audioop.c"
      case 53: // $bb52
        var $179=HEAP[$len]; //@line 1207 "audioop.c"
        var $180=__PyString_Resize($str, $179); //@line 1207 "audioop.c"
        var $181=((($180))|0) < 0; //@line 1207 "audioop.c"
        if ($181) { __label__ = 83; break; } else { __label__ = 54; break; } //@line 1207 "audioop.c"
      case 54: // $bb53
        var $182=HEAP[$samps]; //@line 1209 "audioop.c"
        var $183=HEAP[$d]; //@line 1209 "audioop.c"
        var $184=HEAP[$str]; //@line 1209 "audioop.c"
        var $185=_Py_BuildValue(((__str38)&4294967295), $184, $183, $182); //@line 1209 "audioop.c"
        HEAP[$rv]=$185; //@line 1209 "audioop.c"
        var $186=HEAP[$samps]; //@line 1210 "audioop.c"
        var $187=(($186)&4294967295); //@line 1210 "audioop.c"
        var $188=HEAP[$187]; //@line 1210 "audioop.c"
        var $189=((($188) - 1)&4294967295); //@line 1210 "audioop.c"
        var $190=(($186)&4294967295); //@line 1210 "audioop.c"
        HEAP[$190]=$189; //@line 1210 "audioop.c"
        var $191=(($186)&4294967295); //@line 1210 "audioop.c"
        var $192=HEAP[$191]; //@line 1210 "audioop.c"
        var $193=((($192))|0)==0; //@line 1210 "audioop.c"
        if ($193) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1210 "audioop.c"
      case 55: // $bb54
        var $194=HEAP[$samps]; //@line 1210 "audioop.c"
        var $195=(($194+4)&4294967295); //@line 1210 "audioop.c"
        var $196=HEAP[$195]; //@line 1210 "audioop.c"
        var $197=(($196+24)&4294967295); //@line 1210 "audioop.c"
        var $198=HEAP[$197]; //@line 1210 "audioop.c"
        var $199=HEAP[$samps]; //@line 1210 "audioop.c"
        FUNCTION_TABLE[$198]($199); //@line 1210 "audioop.c"
        __label__ = 56; break; //@line 1210 "audioop.c"
      case 56: // $bb55
        var $200=HEAP[$str]; //@line 1211 "audioop.c"
        var $201=(($200)&4294967295); //@line 1211 "audioop.c"
        var $202=HEAP[$201]; //@line 1211 "audioop.c"
        var $203=((($202) - 1)&4294967295); //@line 1211 "audioop.c"
        var $204=(($200)&4294967295); //@line 1211 "audioop.c"
        HEAP[$204]=$203; //@line 1211 "audioop.c"
        var $205=(($200)&4294967295); //@line 1211 "audioop.c"
        var $206=HEAP[$205]; //@line 1211 "audioop.c"
        var $207=((($206))|0)==0; //@line 1211 "audioop.c"
        if ($207) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 1211 "audioop.c"
      case 57: // $bb56
        var $208=HEAP[$str]; //@line 1211 "audioop.c"
        var $209=(($208+4)&4294967295); //@line 1211 "audioop.c"
        var $210=HEAP[$209]; //@line 1211 "audioop.c"
        var $211=(($210+24)&4294967295); //@line 1211 "audioop.c"
        var $212=HEAP[$211]; //@line 1211 "audioop.c"
        var $213=HEAP[$str]; //@line 1211 "audioop.c"
        FUNCTION_TABLE[$212]($213); //@line 1211 "audioop.c"
        __label__ = 58; break; //@line 1211 "audioop.c"
      case 58: // $bb57
        __label__ = 83; break; //@line 1211 "audioop.c"
      case 59: // $bb58
        HEAP[$chan]=0; //@line 1214 "audioop.c"
        __label__ = 67; break; //@line 1214 "audioop.c"
      case 60: // $bb59
        var $214=HEAP[$cur_i]; //@line 1215 "audioop.c"
        var $215=HEAP[$chan]; //@line 1215 "audioop.c"
        var $216=(($214+4*$215)&4294967295); //@line 1215 "audioop.c"
        var $217=HEAP[$216]; //@line 1215 "audioop.c"
        var $218=HEAP[$prev_i]; //@line 1215 "audioop.c"
        var $219=HEAP[$chan]; //@line 1215 "audioop.c"
        var $220=(($218+4*$219)&4294967295); //@line 1215 "audioop.c"
        HEAP[$220]=$217; //@line 1215 "audioop.c"
        var $221=HEAP[$size]; //@line 1216 "audioop.c"
        var $222=((($221))|0)==1; //@line 1216 "audioop.c"
        if ($222) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 1216 "audioop.c"
      case 61: // $bb60
        var $223=HEAP[$cp]; //@line 1217 "audioop.c"
        var $224=(($223)&4294967295); //@line 1217 "audioop.c"
        var $225=HEAP[$224]; //@line 1217 "audioop.c"
        var $226=reSign(($225), 8, 0); //@line 1217 "audioop.c"
        var $227=($226) << 8; //@line 1217 "audioop.c"
        var $228=HEAP[$cur_i]; //@line 1217 "audioop.c"
        var $229=HEAP[$chan]; //@line 1217 "audioop.c"
        var $230=(($228+4*$229)&4294967295); //@line 1217 "audioop.c"
        HEAP[$230]=$227; //@line 1217 "audioop.c"
        __label__ = 66; break; //@line 1217 "audioop.c"
      case 62: // $bb61
        var $231=HEAP[$size]; //@line 1218 "audioop.c"
        var $232=((($231))|0)==2; //@line 1218 "audioop.c"
        if ($232) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 1218 "audioop.c"
      case 63: // $bb62
        var $233=HEAP[$cp]; //@line 1219 "audioop.c"
        var $234=(($233)&4294967295); //@line 1219 "audioop.c"
        var $235=$234; //@line 1219 "audioop.c"
        var $236=HEAP[$235]; //@line 1219 "audioop.c"
        var $237=reSign(($236), 16, 0); //@line 1219 "audioop.c"
        var $238=HEAP[$cur_i]; //@line 1219 "audioop.c"
        var $239=HEAP[$chan]; //@line 1219 "audioop.c"
        var $240=(($238+4*$239)&4294967295); //@line 1219 "audioop.c"
        HEAP[$240]=$237; //@line 1219 "audioop.c"
        __label__ = 66; break; //@line 1219 "audioop.c"
      case 64: // $bb63
        var $241=HEAP[$size]; //@line 1220 "audioop.c"
        var $242=((($241))|0)==4; //@line 1220 "audioop.c"
        if ($242) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 1220 "audioop.c"
      case 65: // $bb64
        var $243=HEAP[$cp]; //@line 1221 "audioop.c"
        var $244=(($243)&4294967295); //@line 1221 "audioop.c"
        var $245=$244; //@line 1221 "audioop.c"
        var $246=HEAP[$245]; //@line 1221 "audioop.c"
        var $247=((($246))|0) >> 16; //@line 1221 "audioop.c"
        var $248=HEAP[$cur_i]; //@line 1221 "audioop.c"
        var $249=HEAP[$chan]; //@line 1221 "audioop.c"
        var $250=(($248+4*$249)&4294967295); //@line 1221 "audioop.c"
        HEAP[$250]=$247; //@line 1221 "audioop.c"
        __label__ = 66; break; //@line 1221 "audioop.c"
      case 66: // $bb65
        var $251=HEAP[$cp]; //@line 1222 "audioop.c"
        var $252=HEAP[$size]; //@line 1222 "audioop.c"
        var $253=(($251+$252)&4294967295); //@line 1222 "audioop.c"
        HEAP[$cp]=$253; //@line 1222 "audioop.c"
        var $254=HEAP[$cur_i]; //@line 1224 "audioop.c"
        var $255=HEAP[$chan]; //@line 1224 "audioop.c"
        var $256=(($254+4*$255)&4294967295); //@line 1224 "audioop.c"
        var $257=HEAP[$256]; //@line 1224 "audioop.c"
        var $258=HEAP[$weightA]; //@line 1224 "audioop.c"
        var $259=((($257) * ($258))&4294967295); //@line 1224 "audioop.c"
        var $260=HEAP[$prev_i]; //@line 1224 "audioop.c"
        var $261=HEAP[$chan]; //@line 1224 "audioop.c"
        var $262=(($260+4*$261)&4294967295); //@line 1224 "audioop.c"
        var $263=HEAP[$262]; //@line 1224 "audioop.c"
        var $264=HEAP[$weightB]; //@line 1224 "audioop.c"
        var $265=((($263) * ($264))&4294967295); //@line 1224 "audioop.c"
        var $266=((($259) + ($265))&4294967295); //@line 1224 "audioop.c"
        var $267=HEAP[$weightA]; //@line 1224 "audioop.c"
        var $268=HEAP[$weightB]; //@line 1224 "audioop.c"
        var $269=((($267) + ($268))&4294967295); //@line 1224 "audioop.c"
        var $270=((((($266))|0)/((($269))|0))|0); //@line 1224 "audioop.c"
        var $271=HEAP[$cur_i]; //@line 1224 "audioop.c"
        var $272=HEAP[$chan]; //@line 1224 "audioop.c"
        var $273=(($271+4*$272)&4294967295); //@line 1224 "audioop.c"
        HEAP[$273]=$270; //@line 1224 "audioop.c"
        var $274=HEAP[$chan]; //@line 1214 "audioop.c"
        var $275=((($274) + 1)&4294967295); //@line 1214 "audioop.c"
        HEAP[$chan]=$275; //@line 1214 "audioop.c"
        __label__ = 67; break; //@line 1214 "audioop.c"
      case 67: // $bb66
        var $276=HEAP[$nchannels]; //@line 1214 "audioop.c"
        var $277=HEAP[$chan]; //@line 1214 "audioop.c"
        var $278=((($277))|0) < ((($276))|0); //@line 1214 "audioop.c"
        if ($278) { __label__ = 60; break; } else { __label__ = 68; break; } //@line 1214 "audioop.c"
      case 68: // $bb67
        var $279=HEAP[$len]; //@line 1229 "audioop.c"
        var $280=((($279) - 1)&4294967295); //@line 1229 "audioop.c"
        HEAP[$len]=$280; //@line 1229 "audioop.c"
        var $281=HEAP[$d]; //@line 1230 "audioop.c"
        var $282=HEAP[$outrate]; //@line 1230 "audioop.c"
        var $283=((($281) + ($282))&4294967295); //@line 1230 "audioop.c"
        HEAP[$d]=$283; //@line 1230 "audioop.c"
        __label__ = 69; break; //@line 1230 "audioop.c"
      case 69: // $bb68
        var $284=HEAP[$d]; //@line 1187 "audioop.c"
        var $285=((($284))|0) < 0; //@line 1187 "audioop.c"
        if ($285) { __label__ = 43; break; } else { __label__ = 70; break; } //@line 1187 "audioop.c"
      case 70: // $bb69
        __label__ = 81; break; //@line 1187 "audioop.c"
      case 71: // $bb70
        HEAP[$chan]=0; //@line 1233 "audioop.c"
        __label__ = 79; break; //@line 1233 "audioop.c"
      case 72: // $bb71
        var $286=HEAP[$prev_i]; //@line 1234 "audioop.c"
        var $287=HEAP[$chan]; //@line 1234 "audioop.c"
        var $288=(($286+4*$287)&4294967295); //@line 1234 "audioop.c"
        var $289=HEAP[$288]; //@line 1234 "audioop.c"
        var $290=HEAP[$d]; //@line 1234 "audioop.c"
        var $291=((($289) * ($290))&4294967295); //@line 1234 "audioop.c"
        var $292=HEAP[$cur_i]; //@line 1234 "audioop.c"
        var $293=HEAP[$chan]; //@line 1234 "audioop.c"
        var $294=(($292+4*$293)&4294967295); //@line 1234 "audioop.c"
        var $295=HEAP[$294]; //@line 1234 "audioop.c"
        var $296=HEAP[$outrate]; //@line 1234 "audioop.c"
        var $297=HEAP[$d]; //@line 1234 "audioop.c"
        var $298=((($296) - ($297))&4294967295); //@line 1234 "audioop.c"
        var $299=((($295) * ($298))&4294967295); //@line 1234 "audioop.c"
        var $300=((($291) + ($299))&4294967295); //@line 1234 "audioop.c"
        var $301=HEAP[$outrate]; //@line 1234 "audioop.c"
        var $302=((((($300))|0)/((($301))|0))|0); //@line 1234 "audioop.c"
        HEAP[$cur_o]=$302; //@line 1234 "audioop.c"
        var $303=HEAP[$size]; //@line 1237 "audioop.c"
        var $304=((($303))|0)==1; //@line 1237 "audioop.c"
        if ($304) { __label__ = 73; break; } else { __label__ = 74; break; } //@line 1237 "audioop.c"
      case 73: // $bb72
        var $305=HEAP[$ncp]; //@line 1238 "audioop.c"
        var $306=(($305)&4294967295); //@line 1238 "audioop.c"
        var $307=HEAP[$cur_o]; //@line 1238 "audioop.c"
        var $308=((($307))|0) >> 8; //@line 1238 "audioop.c"
        var $309=((($308)) & 255); //@line 1238 "audioop.c"
        HEAP[$306]=$309; //@line 1238 "audioop.c"
        __label__ = 78; break; //@line 1238 "audioop.c"
      case 74: // $bb73
        var $310=HEAP[$size]; //@line 1239 "audioop.c"
        var $311=((($310))|0)==2; //@line 1239 "audioop.c"
        if ($311) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 1239 "audioop.c"
      case 75: // $bb74
        var $312=HEAP[$ncp]; //@line 1240 "audioop.c"
        var $313=(($312)&4294967295); //@line 1240 "audioop.c"
        var $314=$313; //@line 1240 "audioop.c"
        var $315=HEAP[$cur_o]; //@line 1240 "audioop.c"
        var $316=((($315)) & 65535); //@line 1240 "audioop.c"
        HEAP[$314]=$316; //@line 1240 "audioop.c"
        __label__ = 78; break; //@line 1240 "audioop.c"
      case 76: // $bb75
        var $317=HEAP[$size]; //@line 1241 "audioop.c"
        var $318=((($317))|0)==4; //@line 1241 "audioop.c"
        if ($318) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 1241 "audioop.c"
      case 77: // $bb76
        var $319=HEAP[$ncp]; //@line 1242 "audioop.c"
        var $320=(($319)&4294967295); //@line 1242 "audioop.c"
        var $321=$320; //@line 1242 "audioop.c"
        var $322=HEAP[$cur_o]; //@line 1242 "audioop.c"
        var $323=($322) << 16; //@line 1242 "audioop.c"
        HEAP[$321]=$323; //@line 1242 "audioop.c"
        __label__ = 78; break; //@line 1242 "audioop.c"
      case 78: // $bb77
        var $324=HEAP[$size]; //@line 1243 "audioop.c"
        var $325=HEAP[$ncp]; //@line 1243 "audioop.c"
        var $326=(($325+$324)&4294967295); //@line 1243 "audioop.c"
        HEAP[$ncp]=$326; //@line 1243 "audioop.c"
        var $327=HEAP[$chan]; //@line 1233 "audioop.c"
        var $328=((($327) + 1)&4294967295); //@line 1233 "audioop.c"
        HEAP[$chan]=$328; //@line 1233 "audioop.c"
        __label__ = 79; break; //@line 1233 "audioop.c"
      case 79: // $bb78
        var $329=HEAP[$nchannels]; //@line 1233 "audioop.c"
        var $330=HEAP[$chan]; //@line 1233 "audioop.c"
        var $331=((($330))|0) < ((($329))|0); //@line 1233 "audioop.c"
        if ($331) { __label__ = 72; break; } else { __label__ = 80; break; } //@line 1233 "audioop.c"
      case 80: // $bb79
        var $332=HEAP[$d]; //@line 1245 "audioop.c"
        var $333=HEAP[$inrate]; //@line 1245 "audioop.c"
        var $334=((($332) - ($333))&4294967295); //@line 1245 "audioop.c"
        HEAP[$d]=$334; //@line 1245 "audioop.c"
        __label__ = 81; break; //@line 1245 "audioop.c"
      case 81: // $bb80
        var $335=HEAP[$d]; //@line 1232 "audioop.c"
        var $336=((($335))|0) >= 0; //@line 1232 "audioop.c"
        if ($336) { __label__ = 71; break; } else { __label__ = 82; break; } //@line 1232 "audioop.c"
      case 82: // $bb81
        __label__ = 42; break; //@line 1232 "audioop.c"
      case 83: // $exit
        var $337=HEAP[$prev_i]; //@line 1249 "audioop.c"
        var $338=($337)!=0; //@line 1249 "audioop.c"
        if ($338) { __label__ = 84; break; } else { __label__ = 85; break; } //@line 1249 "audioop.c"
      case 84: // $bb82
        var $339=HEAP[$prev_i]; //@line 1250 "audioop.c"
        var $340=$339; //@line 1250 "audioop.c"
        _free($340); //@line 1250 "audioop.c"
        __label__ = 85; break; //@line 1250 "audioop.c"
      case 85: // $bb83
        var $341=HEAP[$cur_i]; //@line 1251 "audioop.c"
        var $342=($341)!=0; //@line 1251 "audioop.c"
        if ($342) { __label__ = 86; break; } else { __label__ = 87; break; } //@line 1251 "audioop.c"
      case 86: // $bb84
        var $343=HEAP[$cur_i]; //@line 1252 "audioop.c"
        var $344=$343; //@line 1252 "audioop.c"
        _free($344); //@line 1252 "audioop.c"
        __label__ = 87; break; //@line 1252 "audioop.c"
      case 87: // $bb85
        var $345=HEAP[$rv]; //@line 1253 "audioop.c"
        HEAP[$0]=$345; //@line 1253 "audioop.c"
        __label__ = 88; break; //@line 1253 "audioop.c"
      case 88: // $bb86
        var $346=HEAP[$0]; //@line 1090 "audioop.c"
        HEAP[$retval]=$346; //@line 1090 "audioop.c"
        __label__ = 89; break; //@line 1090 "audioop.c"
      case 89: // $return
        var $retval87=HEAP[$retval]; //@line 1090 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval87; //@line 1090 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_lin2ulaw($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $ncp=__stackBase__+20;
        var $len=__stackBase__+24;
        var $size=__stackBase__+28;
        var $val=__stackBase__+32;
        var $rv=__stackBase__+36;
        var $i=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 1261 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 1265 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str39)&4294967295), $cp, $len, $size); //@line 1265 "audioop.c"
        var $3=((($2))|0)==0; //@line 1265 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1265 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1267 "audioop.c"
        __label__ = 16; break; //@line 1267 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1269 "audioop.c"
        var $5=HEAP[$len]; //@line 1269 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1269 "audioop.c"
        var $7=((($6))|0)==0; //@line 1269 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1269 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1270 "audioop.c"
        __label__ = 16; break; //@line 1270 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len]; //@line 1272 "audioop.c"
        var $9=HEAP[$size]; //@line 1272 "audioop.c"
        var $10=((((($8))|0)/((($9))|0))|0); //@line 1272 "audioop.c"
        var $11=_PyString_FromStringAndSize(0, $10); //@line 1272 "audioop.c"
        HEAP[$rv]=$11; //@line 1272 "audioop.c"
        var $12=HEAP[$rv]; //@line 1273 "audioop.c"
        var $13=($12)==0; //@line 1273 "audioop.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1273 "audioop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1274 "audioop.c"
        __label__ = 16; break; //@line 1274 "audioop.c"
      case 6: // $bb5
        var $14=HEAP[$rv]; //@line 1275 "audioop.c"
        var $15=_PyString_AsString($14); //@line 1275 "audioop.c"
        HEAP[$ncp]=$15; //@line 1275 "audioop.c"
        HEAP[$i]=0; //@line 1277 "audioop.c"
        __label__ = 14; break; //@line 1277 "audioop.c"
      case 7: // $bb6
        var $16=HEAP[$size]; //@line 1278 "audioop.c"
        var $17=((($16))|0)==1; //@line 1278 "audioop.c"
        if ($17) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1278 "audioop.c"
      case 8: // $bb7
        var $18=HEAP[$cp]; //@line 1278 "audioop.c"
        var $19=HEAP[$i]; //@line 1278 "audioop.c"
        var $20=(($18+$19)&4294967295); //@line 1278 "audioop.c"
        var $21=HEAP[$20]; //@line 1278 "audioop.c"
        var $22=reSign(($21), 8, 0); //@line 1278 "audioop.c"
        var $23=($22) << 8; //@line 1278 "audioop.c"
        HEAP[$val]=$23; //@line 1278 "audioop.c"
        __label__ = 13; break; //@line 1278 "audioop.c"
      case 9: // $bb8
        var $24=HEAP[$size]; //@line 1279 "audioop.c"
        var $25=((($24))|0)==2; //@line 1279 "audioop.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1279 "audioop.c"
      case 10: // $bb9
        var $26=HEAP[$cp]; //@line 1279 "audioop.c"
        var $27=HEAP[$i]; //@line 1279 "audioop.c"
        var $28=(($26+$27)&4294967295); //@line 1279 "audioop.c"
        var $29=$28; //@line 1279 "audioop.c"
        var $30=HEAP[$29]; //@line 1279 "audioop.c"
        var $31=reSign(($30), 16, 0); //@line 1279 "audioop.c"
        HEAP[$val]=$31; //@line 1279 "audioop.c"
        __label__ = 13; break; //@line 1279 "audioop.c"
      case 11: // $bb10
        var $32=HEAP[$size]; //@line 1280 "audioop.c"
        var $33=((($32))|0)==4; //@line 1280 "audioop.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1280 "audioop.c"
      case 12: // $bb11
        var $34=HEAP[$cp]; //@line 1280 "audioop.c"
        var $35=HEAP[$i]; //@line 1280 "audioop.c"
        var $36=(($34+$35)&4294967295); //@line 1280 "audioop.c"
        var $37=$36; //@line 1280 "audioop.c"
        var $38=HEAP[$37]; //@line 1280 "audioop.c"
        var $39=((($38))|0) >> 16; //@line 1280 "audioop.c"
        HEAP[$val]=$39; //@line 1280 "audioop.c"
        __label__ = 13; break; //@line 1280 "audioop.c"
      case 13: // $bb12
        var $40=HEAP[$val]; //@line 1282 "audioop.c"
        var $41=((($40)) & 65535); //@line 1282 "audioop.c"
        var $42=reSign(($41), 16, 0); //@line 1282 "audioop.c"
        var $43=((($42)) & 65535); //@line 1282 "audioop.c"
        var $44=_st_14linear2ulaw($43); //@line 1282 "audioop.c"
        var $45=HEAP[$ncp]; //@line 1282 "audioop.c"
        HEAP[$45]=$44; //@line 1282 "audioop.c"
        var $46=HEAP[$ncp]; //@line 1282 "audioop.c"
        var $47=(($46+1)&4294967295); //@line 1282 "audioop.c"
        HEAP[$ncp]=$47; //@line 1282 "audioop.c"
        var $48=HEAP[$size]; //@line 1277 "audioop.c"
        var $49=HEAP[$i]; //@line 1277 "audioop.c"
        var $50=((($49) + ($48))&4294967295); //@line 1277 "audioop.c"
        HEAP[$i]=$50; //@line 1277 "audioop.c"
        __label__ = 14; break; //@line 1277 "audioop.c"
      case 14: // $bb13
        var $51=HEAP[$len]; //@line 1277 "audioop.c"
        var $52=HEAP[$i]; //@line 1277 "audioop.c"
        var $53=((($52))|0) < ((($51))|0); //@line 1277 "audioop.c"
        if ($53) { __label__ = 7; break; } else { __label__ = 15; break; } //@line 1277 "audioop.c"
      case 15: // $bb14
        var $54=HEAP[$rv]; //@line 1284 "audioop.c"
        HEAP[$0]=$54; //@line 1284 "audioop.c"
        __label__ = 16; break; //@line 1284 "audioop.c"
      case 16: // $bb15
        var $55=HEAP[$0]; //@line 1267 "audioop.c"
        HEAP[$retval]=$55; //@line 1267 "audioop.c"
        __label__ = 17; break; //@line 1267 "audioop.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 1267 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1267 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_ulaw2lin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 45; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 45);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $cval=__stackBase__+20;
        var $ncp=__stackBase__+21;
        var $len=__stackBase__+25;
        var $size=__stackBase__+29;
        var $val=__stackBase__+33;
        var $rv=__stackBase__+37;
        var $i=__stackBase__+41;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1297 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str40)&4294967295), $cp, $len, $size); //@line 1297 "audioop.c"
        var $3=((($2))|0)==0; //@line 1297 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1297 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1299 "audioop.c"
        __label__ = 18; break; //@line 1299 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1301 "audioop.c"
        var $5=HEAP[$len]; //@line 1301 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1301 "audioop.c"
        var $7=((($6))|0)==0; //@line 1301 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1301 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1302 "audioop.c"
        __label__ = 18; break; //@line 1302 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 1304 "audioop.c"
        var $9=((2147483647/((($8))|0))|0); //@line 1304 "audioop.c"
        var $10=HEAP[$len]; //@line 1304 "audioop.c"
        var $11=((($9))|0) < ((($10))|0); //@line 1304 "audioop.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1304 "audioop.c"
      case 5: // $bb4
        var $12=HEAP[_PyExc_MemoryError]; //@line 1305 "audioop.c"
        _PyErr_SetString($12, ((__str23)&4294967295)); //@line 1305 "audioop.c"
        HEAP[$0]=0; //@line 1307 "audioop.c"
        __label__ = 18; break; //@line 1307 "audioop.c"
      case 6: // $bb5
        var $13=HEAP[$len]; //@line 1309 "audioop.c"
        var $14=HEAP[$size]; //@line 1309 "audioop.c"
        var $15=((($13) * ($14))&4294967295); //@line 1309 "audioop.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 1309 "audioop.c"
        HEAP[$rv]=$16; //@line 1309 "audioop.c"
        var $17=HEAP[$rv]; //@line 1310 "audioop.c"
        var $18=($17)==0; //@line 1310 "audioop.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1310 "audioop.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 1311 "audioop.c"
        __label__ = 18; break; //@line 1311 "audioop.c"
      case 8: // $bb7
        var $19=HEAP[$rv]; //@line 1312 "audioop.c"
        var $20=_PyString_AsString($19); //@line 1312 "audioop.c"
        HEAP[$ncp]=$20; //@line 1312 "audioop.c"
        HEAP[$i]=0; //@line 1314 "audioop.c"
        __label__ = 16; break; //@line 1314 "audioop.c"
      case 9: // $bb8
        var $21=HEAP[$cp]; //@line 1315 "audioop.c"
        var $22=HEAP[$21]; //@line 1315 "audioop.c"
        HEAP[$cval]=$22; //@line 1315 "audioop.c"
        var $23=(($21+1)&4294967295); //@line 1315 "audioop.c"
        HEAP[$cp]=$23; //@line 1315 "audioop.c"
        var $24=HEAP[$cval]; //@line 1316 "audioop.c"
        var $25=unSign(($24), 8, 0); //@line 1316 "audioop.c"
        var $26=((__st_ulaw2linear16+$25*2)&4294967295); //@line 1316 "audioop.c"
        var $27=HEAP[$26]; //@line 1316 "audioop.c"
        var $28=reSign(($27), 16, 0); //@line 1316 "audioop.c"
        HEAP[$val]=$28; //@line 1316 "audioop.c"
        var $29=HEAP[$size]; //@line 1318 "audioop.c"
        var $30=((($29))|0)==1; //@line 1318 "audioop.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1318 "audioop.c"
      case 10: // $bb9
        var $31=HEAP[$val]; //@line 1318 "audioop.c"
        var $32=((($31))|0) >> 8; //@line 1318 "audioop.c"
        var $33=((($32)) & 255); //@line 1318 "audioop.c"
        var $34=HEAP[$ncp]; //@line 1318 "audioop.c"
        var $35=HEAP[$i]; //@line 1318 "audioop.c"
        var $36=(($34+$35)&4294967295); //@line 1318 "audioop.c"
        HEAP[$36]=$33; //@line 1318 "audioop.c"
        __label__ = 15; break; //@line 1318 "audioop.c"
      case 11: // $bb10
        var $37=HEAP[$size]; //@line 1319 "audioop.c"
        var $38=((($37))|0)==2; //@line 1319 "audioop.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1319 "audioop.c"
      case 12: // $bb11
        var $39=HEAP[$ncp]; //@line 1319 "audioop.c"
        var $40=HEAP[$i]; //@line 1319 "audioop.c"
        var $41=(($39+$40)&4294967295); //@line 1319 "audioop.c"
        var $42=$41; //@line 1319 "audioop.c"
        var $43=HEAP[$val]; //@line 1319 "audioop.c"
        var $44=((($43)) & 65535); //@line 1319 "audioop.c"
        HEAP[$42]=$44; //@line 1319 "audioop.c"
        __label__ = 15; break; //@line 1319 "audioop.c"
      case 13: // $bb12
        var $45=HEAP[$size]; //@line 1320 "audioop.c"
        var $46=((($45))|0)==4; //@line 1320 "audioop.c"
        if ($46) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1320 "audioop.c"
      case 14: // $bb13
        var $47=HEAP[$ncp]; //@line 1320 "audioop.c"
        var $48=HEAP[$i]; //@line 1320 "audioop.c"
        var $49=(($47+$48)&4294967295); //@line 1320 "audioop.c"
        var $50=$49; //@line 1320 "audioop.c"
        var $51=HEAP[$val]; //@line 1320 "audioop.c"
        var $52=($51) << 16; //@line 1320 "audioop.c"
        HEAP[$50]=$52; //@line 1320 "audioop.c"
        __label__ = 15; break; //@line 1320 "audioop.c"
      case 15: // $bb14
        var $53=HEAP[$size]; //@line 1314 "audioop.c"
        var $54=HEAP[$i]; //@line 1314 "audioop.c"
        var $55=((($54) + ($53))&4294967295); //@line 1314 "audioop.c"
        HEAP[$i]=$55; //@line 1314 "audioop.c"
        __label__ = 16; break; //@line 1314 "audioop.c"
      case 16: // $bb15
        var $56=HEAP[$len]; //@line 1314 "audioop.c"
        var $57=HEAP[$size]; //@line 1314 "audioop.c"
        var $58=((($56) * ($57))&4294967295); //@line 1314 "audioop.c"
        var $59=HEAP[$i]; //@line 1314 "audioop.c"
        var $60=((($58))|0) > ((($59))|0); //@line 1314 "audioop.c"
        if ($60) { __label__ = 9; break; } else { __label__ = 17; break; } //@line 1314 "audioop.c"
      case 17: // $bb16
        var $61=HEAP[$rv]; //@line 1322 "audioop.c"
        HEAP[$0]=$61; //@line 1322 "audioop.c"
        __label__ = 18; break; //@line 1322 "audioop.c"
      case 18: // $bb17
        var $62=HEAP[$0]; //@line 1299 "audioop.c"
        HEAP[$retval]=$62; //@line 1299 "audioop.c"
        __label__ = 19; break; //@line 1299 "audioop.c"
      case 19: // $return
        var $retval18=HEAP[$retval]; //@line 1299 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1299 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_lin2alaw($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $ncp=__stackBase__+20;
        var $len=__stackBase__+24;
        var $size=__stackBase__+28;
        var $val=__stackBase__+32;
        var $rv=__stackBase__+36;
        var $i=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 1330 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 1334 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str41)&4294967295), $cp, $len, $size); //@line 1334 "audioop.c"
        var $3=((($2))|0)==0; //@line 1334 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1334 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1336 "audioop.c"
        __label__ = 16; break; //@line 1336 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1338 "audioop.c"
        var $5=HEAP[$len]; //@line 1338 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1338 "audioop.c"
        var $7=((($6))|0)==0; //@line 1338 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1338 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1339 "audioop.c"
        __label__ = 16; break; //@line 1339 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len]; //@line 1341 "audioop.c"
        var $9=HEAP[$size]; //@line 1341 "audioop.c"
        var $10=((((($8))|0)/((($9))|0))|0); //@line 1341 "audioop.c"
        var $11=_PyString_FromStringAndSize(0, $10); //@line 1341 "audioop.c"
        HEAP[$rv]=$11; //@line 1341 "audioop.c"
        var $12=HEAP[$rv]; //@line 1342 "audioop.c"
        var $13=($12)==0; //@line 1342 "audioop.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1342 "audioop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1343 "audioop.c"
        __label__ = 16; break; //@line 1343 "audioop.c"
      case 6: // $bb5
        var $14=HEAP[$rv]; //@line 1344 "audioop.c"
        var $15=_PyString_AsString($14); //@line 1344 "audioop.c"
        HEAP[$ncp]=$15; //@line 1344 "audioop.c"
        HEAP[$i]=0; //@line 1346 "audioop.c"
        __label__ = 14; break; //@line 1346 "audioop.c"
      case 7: // $bb6
        var $16=HEAP[$size]; //@line 1347 "audioop.c"
        var $17=((($16))|0)==1; //@line 1347 "audioop.c"
        if ($17) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1347 "audioop.c"
      case 8: // $bb7
        var $18=HEAP[$cp]; //@line 1347 "audioop.c"
        var $19=HEAP[$i]; //@line 1347 "audioop.c"
        var $20=(($18+$19)&4294967295); //@line 1347 "audioop.c"
        var $21=HEAP[$20]; //@line 1347 "audioop.c"
        var $22=reSign(($21), 8, 0); //@line 1347 "audioop.c"
        var $23=($22) << 8; //@line 1347 "audioop.c"
        HEAP[$val]=$23; //@line 1347 "audioop.c"
        __label__ = 13; break; //@line 1347 "audioop.c"
      case 9: // $bb8
        var $24=HEAP[$size]; //@line 1348 "audioop.c"
        var $25=((($24))|0)==2; //@line 1348 "audioop.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1348 "audioop.c"
      case 10: // $bb9
        var $26=HEAP[$cp]; //@line 1348 "audioop.c"
        var $27=HEAP[$i]; //@line 1348 "audioop.c"
        var $28=(($26+$27)&4294967295); //@line 1348 "audioop.c"
        var $29=$28; //@line 1348 "audioop.c"
        var $30=HEAP[$29]; //@line 1348 "audioop.c"
        var $31=reSign(($30), 16, 0); //@line 1348 "audioop.c"
        HEAP[$val]=$31; //@line 1348 "audioop.c"
        __label__ = 13; break; //@line 1348 "audioop.c"
      case 11: // $bb10
        var $32=HEAP[$size]; //@line 1349 "audioop.c"
        var $33=((($32))|0)==4; //@line 1349 "audioop.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1349 "audioop.c"
      case 12: // $bb11
        var $34=HEAP[$cp]; //@line 1349 "audioop.c"
        var $35=HEAP[$i]; //@line 1349 "audioop.c"
        var $36=(($34+$35)&4294967295); //@line 1349 "audioop.c"
        var $37=$36; //@line 1349 "audioop.c"
        var $38=HEAP[$37]; //@line 1349 "audioop.c"
        var $39=((($38))|0) >> 16; //@line 1349 "audioop.c"
        HEAP[$val]=$39; //@line 1349 "audioop.c"
        __label__ = 13; break; //@line 1349 "audioop.c"
      case 13: // $bb12
        var $40=HEAP[$val]; //@line 1351 "audioop.c"
        var $41=((($40)) & 65535); //@line 1351 "audioop.c"
        var $42=reSign(($41), 16, 0); //@line 1351 "audioop.c"
        var $43=((($42)) & 65535); //@line 1351 "audioop.c"
        var $44=_st_linear2alaw($43); //@line 1351 "audioop.c"
        var $45=HEAP[$ncp]; //@line 1351 "audioop.c"
        HEAP[$45]=$44; //@line 1351 "audioop.c"
        var $46=HEAP[$ncp]; //@line 1351 "audioop.c"
        var $47=(($46+1)&4294967295); //@line 1351 "audioop.c"
        HEAP[$ncp]=$47; //@line 1351 "audioop.c"
        var $48=HEAP[$size]; //@line 1346 "audioop.c"
        var $49=HEAP[$i]; //@line 1346 "audioop.c"
        var $50=((($49) + ($48))&4294967295); //@line 1346 "audioop.c"
        HEAP[$i]=$50; //@line 1346 "audioop.c"
        __label__ = 14; break; //@line 1346 "audioop.c"
      case 14: // $bb13
        var $51=HEAP[$len]; //@line 1346 "audioop.c"
        var $52=HEAP[$i]; //@line 1346 "audioop.c"
        var $53=((($52))|0) < ((($51))|0); //@line 1346 "audioop.c"
        if ($53) { __label__ = 7; break; } else { __label__ = 15; break; } //@line 1346 "audioop.c"
      case 15: // $bb14
        var $54=HEAP[$rv]; //@line 1353 "audioop.c"
        HEAP[$0]=$54; //@line 1353 "audioop.c"
        __label__ = 16; break; //@line 1353 "audioop.c"
      case 16: // $bb15
        var $55=HEAP[$0]; //@line 1336 "audioop.c"
        HEAP[$retval]=$55; //@line 1336 "audioop.c"
        __label__ = 17; break; //@line 1336 "audioop.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 1336 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1336 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_alaw2lin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 45; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 45);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $cval=__stackBase__+20;
        var $ncp=__stackBase__+21;
        var $len=__stackBase__+25;
        var $size=__stackBase__+29;
        var $val=__stackBase__+33;
        var $rv=__stackBase__+37;
        var $i=__stackBase__+41;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1366 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str42)&4294967295), $cp, $len, $size); //@line 1366 "audioop.c"
        var $3=((($2))|0)==0; //@line 1366 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1366 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1368 "audioop.c"
        __label__ = 18; break; //@line 1368 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1370 "audioop.c"
        var $5=HEAP[$len]; //@line 1370 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1370 "audioop.c"
        var $7=((($6))|0)==0; //@line 1370 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1370 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1371 "audioop.c"
        __label__ = 18; break; //@line 1371 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 1373 "audioop.c"
        var $9=((2147483647/((($8))|0))|0); //@line 1373 "audioop.c"
        var $10=HEAP[$len]; //@line 1373 "audioop.c"
        var $11=((($9))|0) < ((($10))|0); //@line 1373 "audioop.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1373 "audioop.c"
      case 5: // $bb4
        var $12=HEAP[_PyExc_MemoryError]; //@line 1374 "audioop.c"
        _PyErr_SetString($12, ((__str23)&4294967295)); //@line 1374 "audioop.c"
        HEAP[$0]=0; //@line 1376 "audioop.c"
        __label__ = 18; break; //@line 1376 "audioop.c"
      case 6: // $bb5
        var $13=HEAP[$len]; //@line 1378 "audioop.c"
        var $14=HEAP[$size]; //@line 1378 "audioop.c"
        var $15=((($13) * ($14))&4294967295); //@line 1378 "audioop.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 1378 "audioop.c"
        HEAP[$rv]=$16; //@line 1378 "audioop.c"
        var $17=HEAP[$rv]; //@line 1379 "audioop.c"
        var $18=($17)==0; //@line 1379 "audioop.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1379 "audioop.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 1380 "audioop.c"
        __label__ = 18; break; //@line 1380 "audioop.c"
      case 8: // $bb7
        var $19=HEAP[$rv]; //@line 1381 "audioop.c"
        var $20=_PyString_AsString($19); //@line 1381 "audioop.c"
        HEAP[$ncp]=$20; //@line 1381 "audioop.c"
        HEAP[$i]=0; //@line 1383 "audioop.c"
        __label__ = 16; break; //@line 1383 "audioop.c"
      case 9: // $bb8
        var $21=HEAP[$cp]; //@line 1384 "audioop.c"
        var $22=HEAP[$21]; //@line 1384 "audioop.c"
        HEAP[$cval]=$22; //@line 1384 "audioop.c"
        var $23=(($21+1)&4294967295); //@line 1384 "audioop.c"
        HEAP[$cp]=$23; //@line 1384 "audioop.c"
        var $24=HEAP[$cval]; //@line 1385 "audioop.c"
        var $25=unSign(($24), 8, 0); //@line 1385 "audioop.c"
        var $26=((__st_alaw2linear16+$25*2)&4294967295); //@line 1385 "audioop.c"
        var $27=HEAP[$26]; //@line 1385 "audioop.c"
        var $28=reSign(($27), 16, 0); //@line 1385 "audioop.c"
        HEAP[$val]=$28; //@line 1385 "audioop.c"
        var $29=HEAP[$size]; //@line 1387 "audioop.c"
        var $30=((($29))|0)==1; //@line 1387 "audioop.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1387 "audioop.c"
      case 10: // $bb9
        var $31=HEAP[$val]; //@line 1387 "audioop.c"
        var $32=((($31))|0) >> 8; //@line 1387 "audioop.c"
        var $33=((($32)) & 255); //@line 1387 "audioop.c"
        var $34=HEAP[$ncp]; //@line 1387 "audioop.c"
        var $35=HEAP[$i]; //@line 1387 "audioop.c"
        var $36=(($34+$35)&4294967295); //@line 1387 "audioop.c"
        HEAP[$36]=$33; //@line 1387 "audioop.c"
        __label__ = 15; break; //@line 1387 "audioop.c"
      case 11: // $bb10
        var $37=HEAP[$size]; //@line 1388 "audioop.c"
        var $38=((($37))|0)==2; //@line 1388 "audioop.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1388 "audioop.c"
      case 12: // $bb11
        var $39=HEAP[$ncp]; //@line 1388 "audioop.c"
        var $40=HEAP[$i]; //@line 1388 "audioop.c"
        var $41=(($39+$40)&4294967295); //@line 1388 "audioop.c"
        var $42=$41; //@line 1388 "audioop.c"
        var $43=HEAP[$val]; //@line 1388 "audioop.c"
        var $44=((($43)) & 65535); //@line 1388 "audioop.c"
        HEAP[$42]=$44; //@line 1388 "audioop.c"
        __label__ = 15; break; //@line 1388 "audioop.c"
      case 13: // $bb12
        var $45=HEAP[$size]; //@line 1389 "audioop.c"
        var $46=((($45))|0)==4; //@line 1389 "audioop.c"
        if ($46) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1389 "audioop.c"
      case 14: // $bb13
        var $47=HEAP[$ncp]; //@line 1389 "audioop.c"
        var $48=HEAP[$i]; //@line 1389 "audioop.c"
        var $49=(($47+$48)&4294967295); //@line 1389 "audioop.c"
        var $50=$49; //@line 1389 "audioop.c"
        var $51=HEAP[$val]; //@line 1389 "audioop.c"
        var $52=($51) << 16; //@line 1389 "audioop.c"
        HEAP[$50]=$52; //@line 1389 "audioop.c"
        __label__ = 15; break; //@line 1389 "audioop.c"
      case 15: // $bb14
        var $53=HEAP[$size]; //@line 1383 "audioop.c"
        var $54=HEAP[$i]; //@line 1383 "audioop.c"
        var $55=((($54) + ($53))&4294967295); //@line 1383 "audioop.c"
        HEAP[$i]=$55; //@line 1383 "audioop.c"
        __label__ = 16; break; //@line 1383 "audioop.c"
      case 16: // $bb15
        var $56=HEAP[$len]; //@line 1383 "audioop.c"
        var $57=HEAP[$size]; //@line 1383 "audioop.c"
        var $58=((($56) * ($57))&4294967295); //@line 1383 "audioop.c"
        var $59=HEAP[$i]; //@line 1383 "audioop.c"
        var $60=((($58))|0) > ((($59))|0); //@line 1383 "audioop.c"
        if ($60) { __label__ = 9; break; } else { __label__ = 17; break; } //@line 1383 "audioop.c"
      case 17: // $bb16
        var $61=HEAP[$rv]; //@line 1391 "audioop.c"
        HEAP[$0]=$61; //@line 1391 "audioop.c"
        __label__ = 18; break; //@line 1391 "audioop.c"
      case 18: // $bb17
        var $62=HEAP[$0]; //@line 1368 "audioop.c"
        HEAP[$retval]=$62; //@line 1368 "audioop.c"
        __label__ = 19; break; //@line 1368 "audioop.c"
      case 19: // $return
        var $retval18=HEAP[$retval]; //@line 1368 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1368 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_lin2adpcm($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 92; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 92);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_511=__stackBase__+12;
        var $0=__stackBase__+16;
        var $cp=__stackBase__+20;
        var $ncp=__stackBase__+24;
        var $len=__stackBase__+28;
        var $size=__stackBase__+32;
        var $val=__stackBase__+36;
        var $step=__stackBase__+40;
        var $valpred=__stackBase__+44;
        var $delta=__stackBase__+48;
        var $index=__stackBase__+52;
        var $sign=__stackBase__+56;
        var $vpdiff=__stackBase__+60;
        var $diff=__stackBase__+64;
        var $rv=__stackBase__+68;
        var $state=__stackBase__+72;
        var $str=__stackBase__+76;
        var $i=__stackBase__+80;
        var $outputbuffer=__stackBase__+84;
        var $bufferstep=__stackBase__+88;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$val]=0; //@line 1399 "audioop.c"
        HEAP[$outputbuffer]=0; //@line 1402 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 1404 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str43)&4294967295), $cp, $len, $size, $state); //@line 1404 "audioop.c"
        var $3=((($2))|0)==0; //@line 1404 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1404 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1406 "audioop.c"
        __label__ = 47; break; //@line 1406 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1408 "audioop.c"
        var $5=HEAP[$len]; //@line 1408 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1408 "audioop.c"
        var $7=((($6))|0)==0; //@line 1408 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1408 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1409 "audioop.c"
        __label__ = 47; break; //@line 1409 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len]; //@line 1411 "audioop.c"
        var $9=HEAP[$size]; //@line 1411 "audioop.c"
        var $10=((($9) * 2)&4294967295); //@line 1411 "audioop.c"
        var $11=((((($8))|0)/((($10))|0))|0); //@line 1411 "audioop.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 1411 "audioop.c"
        HEAP[$str]=$12; //@line 1411 "audioop.c"
        var $13=HEAP[$str]; //@line 1412 "audioop.c"
        var $14=($13)==0; //@line 1412 "audioop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1412 "audioop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1413 "audioop.c"
        __label__ = 47; break; //@line 1413 "audioop.c"
      case 6: // $bb5
        var $15=HEAP[$str]; //@line 1414 "audioop.c"
        var $16=_PyString_AsString($15); //@line 1414 "audioop.c"
        HEAP[$ncp]=$16; //@line 1414 "audioop.c"
        var $17=HEAP[$state]; //@line 1417 "audioop.c"
        var $18=($17)==(__Py_NoneStruct); //@line 1417 "audioop.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1417 "audioop.c"
      case 7: // $bb6
        HEAP[$valpred]=0; //@line 1419 "audioop.c"
        HEAP[$index]=0; //@line 1420 "audioop.c"
        __label__ = 10; break; //@line 1420 "audioop.c"
      case 8: // $bb7
        var $19=HEAP[$state]; //@line 1421 "audioop.c"
        var $20=_PyArg_ParseTuple($19, ((__str44)&4294967295), $valpred, $index); //@line 1421 "audioop.c"
        var $21=((($20))|0)==0; //@line 1421 "audioop.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1421 "audioop.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 1422 "audioop.c"
        __label__ = 47; break; //@line 1422 "audioop.c"
      case 10: // $bb9
        var $22=HEAP[$index]; //@line 1424 "audioop.c"
        var $23=((_stepsizeTable+$22*4)&4294967295); //@line 1424 "audioop.c"
        var $24=HEAP[$23]; //@line 1424 "audioop.c"
        HEAP[$step]=$24; //@line 1424 "audioop.c"
        HEAP[$bufferstep]=1; //@line 1425 "audioop.c"
        HEAP[$i]=0; //@line 1427 "audioop.c"
        __label__ = 43; break; //@line 1427 "audioop.c"
      case 11: // $bb10
        var $25=HEAP[$size]; //@line 1428 "audioop.c"
        var $26=((($25))|0)==1; //@line 1428 "audioop.c"
        if ($26) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1428 "audioop.c"
      case 12: // $bb11
        var $27=HEAP[$cp]; //@line 1428 "audioop.c"
        var $28=HEAP[$i]; //@line 1428 "audioop.c"
        var $29=(($27+$28)&4294967295); //@line 1428 "audioop.c"
        var $30=HEAP[$29]; //@line 1428 "audioop.c"
        var $31=reSign(($30), 8, 0); //@line 1428 "audioop.c"
        var $32=($31) << 8; //@line 1428 "audioop.c"
        HEAP[$val]=$32; //@line 1428 "audioop.c"
        __label__ = 17; break; //@line 1428 "audioop.c"
      case 13: // $bb12
        var $33=HEAP[$size]; //@line 1429 "audioop.c"
        var $34=((($33))|0)==2; //@line 1429 "audioop.c"
        if ($34) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1429 "audioop.c"
      case 14: // $bb13
        var $35=HEAP[$cp]; //@line 1429 "audioop.c"
        var $36=HEAP[$i]; //@line 1429 "audioop.c"
        var $37=(($35+$36)&4294967295); //@line 1429 "audioop.c"
        var $38=$37; //@line 1429 "audioop.c"
        var $39=HEAP[$38]; //@line 1429 "audioop.c"
        var $40=reSign(($39), 16, 0); //@line 1429 "audioop.c"
        HEAP[$val]=$40; //@line 1429 "audioop.c"
        __label__ = 17; break; //@line 1429 "audioop.c"
      case 15: // $bb14
        var $41=HEAP[$size]; //@line 1430 "audioop.c"
        var $42=((($41))|0)==4; //@line 1430 "audioop.c"
        if ($42) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1430 "audioop.c"
      case 16: // $bb15
        var $43=HEAP[$cp]; //@line 1430 "audioop.c"
        var $44=HEAP[$i]; //@line 1430 "audioop.c"
        var $45=(($43+$44)&4294967295); //@line 1430 "audioop.c"
        var $46=$45; //@line 1430 "audioop.c"
        var $47=HEAP[$46]; //@line 1430 "audioop.c"
        var $48=((($47))|0) >> 16; //@line 1430 "audioop.c"
        HEAP[$val]=$48; //@line 1430 "audioop.c"
        __label__ = 17; break; //@line 1430 "audioop.c"
      case 17: // $bb16
        var $49=HEAP[$valpred]; //@line 1433 "audioop.c"
        var $50=HEAP[$val]; //@line 1433 "audioop.c"
        var $51=((($50) - ($49))&4294967295); //@line 1433 "audioop.c"
        HEAP[$diff]=$51; //@line 1433 "audioop.c"
        var $52=HEAP[$diff]; //@line 1434 "audioop.c"
        var $53=((($52))|0) < 0; //@line 1434 "audioop.c"
        if ($53) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1434 "audioop.c"
      case 18: // $bb17
        HEAP[$iftmp_511]=8; //@line 1434 "audioop.c"
        __label__ = 20; break; //@line 1434 "audioop.c"
      case 19: // $bb18
        HEAP[$iftmp_511]=0; //@line 1434 "audioop.c"
        __label__ = 20; break; //@line 1434 "audioop.c"
      case 20: // $bb19
        var $54=HEAP[$iftmp_511]; //@line 1434 "audioop.c"
        HEAP[$sign]=$54; //@line 1434 "audioop.c"
        var $55=HEAP[$sign]; //@line 1435 "audioop.c"
        var $56=((($55))|0)!=0; //@line 1435 "audioop.c"
        if ($56) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1435 "audioop.c"
      case 21: // $bb20
        var $57=HEAP[$diff]; //@line 1435 "audioop.c"
        var $58=((0 - ($57))&4294967295); //@line 1435 "audioop.c"
        HEAP[$diff]=$58; //@line 1435 "audioop.c"
        __label__ = 22; break; //@line 1435 "audioop.c"
      case 22: // $bb21
        HEAP[$delta]=0; //@line 1446 "audioop.c"
        var $59=HEAP[$step]; //@line 1447 "audioop.c"
        var $60=((($59))|0) >> 3; //@line 1447 "audioop.c"
        HEAP[$vpdiff]=$60; //@line 1447 "audioop.c"
        var $61=HEAP[$diff]; //@line 1449 "audioop.c"
        var $62=HEAP[$step]; //@line 1449 "audioop.c"
        var $63=((($61))|0) >= ((($62))|0); //@line 1449 "audioop.c"
        if ($63) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1449 "audioop.c"
      case 23: // $bb22
        HEAP[$delta]=4; //@line 1450 "audioop.c"
        var $64=HEAP[$diff]; //@line 1451 "audioop.c"
        var $65=HEAP[$step]; //@line 1451 "audioop.c"
        var $66=((($64) - ($65))&4294967295); //@line 1451 "audioop.c"
        HEAP[$diff]=$66; //@line 1451 "audioop.c"
        var $67=HEAP[$vpdiff]; //@line 1452 "audioop.c"
        var $68=HEAP[$step]; //@line 1452 "audioop.c"
        var $69=((($67) + ($68))&4294967295); //@line 1452 "audioop.c"
        HEAP[$vpdiff]=$69; //@line 1452 "audioop.c"
        __label__ = 24; break; //@line 1452 "audioop.c"
      case 24: // $bb23
        var $70=HEAP[$step]; //@line 1454 "audioop.c"
        var $71=((($70))|0) >> 1; //@line 1454 "audioop.c"
        HEAP[$step]=$71; //@line 1454 "audioop.c"
        var $72=HEAP[$diff]; //@line 1455 "audioop.c"
        var $73=HEAP[$step]; //@line 1455 "audioop.c"
        var $74=((($72))|0) >= ((($73))|0); //@line 1455 "audioop.c"
        if ($74) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1455 "audioop.c"
      case 25: // $bb24
        var $75=HEAP[$delta]; //@line 1456 "audioop.c"
        var $76=($75) | 2; //@line 1456 "audioop.c"
        HEAP[$delta]=$76; //@line 1456 "audioop.c"
        var $77=HEAP[$diff]; //@line 1457 "audioop.c"
        var $78=HEAP[$step]; //@line 1457 "audioop.c"
        var $79=((($77) - ($78))&4294967295); //@line 1457 "audioop.c"
        HEAP[$diff]=$79; //@line 1457 "audioop.c"
        var $80=HEAP[$vpdiff]; //@line 1458 "audioop.c"
        var $81=HEAP[$step]; //@line 1458 "audioop.c"
        var $82=((($80) + ($81))&4294967295); //@line 1458 "audioop.c"
        HEAP[$vpdiff]=$82; //@line 1458 "audioop.c"
        __label__ = 26; break; //@line 1458 "audioop.c"
      case 26: // $bb25
        var $83=HEAP[$step]; //@line 1460 "audioop.c"
        var $84=((($83))|0) >> 1; //@line 1460 "audioop.c"
        HEAP[$step]=$84; //@line 1460 "audioop.c"
        var $85=HEAP[$diff]; //@line 1461 "audioop.c"
        var $86=HEAP[$step]; //@line 1461 "audioop.c"
        var $87=((($85))|0) >= ((($86))|0); //@line 1461 "audioop.c"
        if ($87) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1461 "audioop.c"
      case 27: // $bb26
        var $88=HEAP[$delta]; //@line 1462 "audioop.c"
        var $89=($88) | 1; //@line 1462 "audioop.c"
        HEAP[$delta]=$89; //@line 1462 "audioop.c"
        var $90=HEAP[$vpdiff]; //@line 1463 "audioop.c"
        var $91=HEAP[$step]; //@line 1463 "audioop.c"
        var $92=((($90) + ($91))&4294967295); //@line 1463 "audioop.c"
        HEAP[$vpdiff]=$92; //@line 1463 "audioop.c"
        __label__ = 28; break; //@line 1463 "audioop.c"
      case 28: // $bb27
        var $93=HEAP[$sign]; //@line 1467 "audioop.c"
        var $94=((($93))|0)!=0; //@line 1467 "audioop.c"
        if ($94) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1467 "audioop.c"
      case 29: // $bb28
        var $95=HEAP[$valpred]; //@line 1468 "audioop.c"
        var $96=HEAP[$vpdiff]; //@line 1468 "audioop.c"
        var $97=((($95) - ($96))&4294967295); //@line 1468 "audioop.c"
        HEAP[$valpred]=$97; //@line 1468 "audioop.c"
        __label__ = 31; break; //@line 1468 "audioop.c"
      case 30: // $bb29
        var $98=HEAP[$valpred]; //@line 1470 "audioop.c"
        var $99=HEAP[$vpdiff]; //@line 1470 "audioop.c"
        var $100=((($98) + ($99))&4294967295); //@line 1470 "audioop.c"
        HEAP[$valpred]=$100; //@line 1470 "audioop.c"
        __label__ = 31; break; //@line 1470 "audioop.c"
      case 31: // $bb30
        var $101=HEAP[$valpred]; //@line 1473 "audioop.c"
        var $102=((($101))|0) > 32767; //@line 1473 "audioop.c"
        if ($102) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1473 "audioop.c"
      case 32: // $bb31
        HEAP[$valpred]=32767; //@line 1474 "audioop.c"
        __label__ = 35; break; //@line 1474 "audioop.c"
      case 33: // $bb32
        var $103=HEAP[$valpred]; //@line 1475 "audioop.c"
        var $104=((($103))|0) < -32768; //@line 1475 "audioop.c"
        if ($104) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1475 "audioop.c"
      case 34: // $bb33
        HEAP[$valpred]=-32768; //@line 1476 "audioop.c"
        __label__ = 35; break; //@line 1476 "audioop.c"
      case 35: // $bb34
        var $105=HEAP[$delta]; //@line 1479 "audioop.c"
        var $106=HEAP[$sign]; //@line 1479 "audioop.c"
        var $107=($105) | ($106); //@line 1479 "audioop.c"
        HEAP[$delta]=$107; //@line 1479 "audioop.c"
        var $108=HEAP[$delta]; //@line 1481 "audioop.c"
        var $109=((_indexTable+$108*4)&4294967295); //@line 1481 "audioop.c"
        var $110=HEAP[$109]; //@line 1481 "audioop.c"
        var $111=HEAP[$index]; //@line 1481 "audioop.c"
        var $112=((($110) + ($111))&4294967295); //@line 1481 "audioop.c"
        HEAP[$index]=$112; //@line 1481 "audioop.c"
        var $113=HEAP[$index]; //@line 1482 "audioop.c"
        var $114=((($113))|0) < 0; //@line 1482 "audioop.c"
        if ($114) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1482 "audioop.c"
      case 36: // $bb35
        HEAP[$index]=0; //@line 1482 "audioop.c"
        __label__ = 37; break; //@line 1482 "audioop.c"
      case 37: // $bb36
        var $115=HEAP[$index]; //@line 1483 "audioop.c"
        var $116=((($115))|0) > 88; //@line 1483 "audioop.c"
        if ($116) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1483 "audioop.c"
      case 38: // $bb37
        HEAP[$index]=88; //@line 1483 "audioop.c"
        __label__ = 39; break; //@line 1483 "audioop.c"
      case 39: // $bb38
        var $117=HEAP[$index]; //@line 1484 "audioop.c"
        var $118=((_stepsizeTable+$117*4)&4294967295); //@line 1484 "audioop.c"
        var $119=HEAP[$118]; //@line 1484 "audioop.c"
        HEAP[$step]=$119; //@line 1484 "audioop.c"
        var $120=HEAP[$bufferstep]; //@line 1487 "audioop.c"
        var $121=((($120))|0)!=0; //@line 1487 "audioop.c"
        if ($121) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 1487 "audioop.c"
      case 40: // $bb39
        var $122=HEAP[$delta]; //@line 1488 "audioop.c"
        var $123=($122) << 4; //@line 1488 "audioop.c"
        var $124=($123) & 240; //@line 1488 "audioop.c"
        HEAP[$outputbuffer]=$124; //@line 1488 "audioop.c"
        __label__ = 42; break; //@line 1488 "audioop.c"
      case 41: // $bb40
        var $125=HEAP[$delta]; //@line 1490 "audioop.c"
        var $126=((($125)) & 255); //@line 1490 "audioop.c"
        var $127=($126) & 15; //@line 1490 "audioop.c"
        var $128=HEAP[$outputbuffer]; //@line 1490 "audioop.c"
        var $129=((($128)) & 255); //@line 1490 "audioop.c"
        var $130=($127) | ($129); //@line 1490 "audioop.c"
        var $131=HEAP[$ncp]; //@line 1490 "audioop.c"
        HEAP[$131]=$130; //@line 1490 "audioop.c"
        var $132=HEAP[$ncp]; //@line 1490 "audioop.c"
        var $133=(($132+1)&4294967295); //@line 1490 "audioop.c"
        HEAP[$ncp]=$133; //@line 1490 "audioop.c"
        __label__ = 42; break; //@line 1490 "audioop.c"
      case 42: // $bb41
        var $134=HEAP[$bufferstep]; //@line 1492 "audioop.c"
        var $135=((($134))|0)==0; //@line 1492 "audioop.c"
        var $136=unSign(($135), 1, 0); //@line 1492 "audioop.c"
        HEAP[$bufferstep]=$136; //@line 1492 "audioop.c"
        var $137=HEAP[$size]; //@line 1427 "audioop.c"
        var $138=HEAP[$i]; //@line 1427 "audioop.c"
        var $139=((($138) + ($137))&4294967295); //@line 1427 "audioop.c"
        HEAP[$i]=$139; //@line 1427 "audioop.c"
        __label__ = 43; break; //@line 1427 "audioop.c"
      case 43: // $bb42
        var $140=HEAP[$len]; //@line 1427 "audioop.c"
        var $141=HEAP[$i]; //@line 1427 "audioop.c"
        var $142=((($141))|0) < ((($140))|0); //@line 1427 "audioop.c"
        if ($142) { __label__ = 11; break; } else { __label__ = 44; break; } //@line 1427 "audioop.c"
      case 44: // $bb43
        var $143=HEAP[$index]; //@line 1494 "audioop.c"
        var $144=HEAP[$valpred]; //@line 1494 "audioop.c"
        var $145=HEAP[$str]; //@line 1494 "audioop.c"
        var $146=_Py_BuildValue(((__str45)&4294967295), $145, $144, $143); //@line 1494 "audioop.c"
        HEAP[$rv]=$146; //@line 1494 "audioop.c"
        var $147=HEAP[$str]; //@line 1495 "audioop.c"
        var $148=(($147)&4294967295); //@line 1495 "audioop.c"
        var $149=HEAP[$148]; //@line 1495 "audioop.c"
        var $150=((($149) - 1)&4294967295); //@line 1495 "audioop.c"
        var $151=HEAP[$str]; //@line 1495 "audioop.c"
        var $152=(($151)&4294967295); //@line 1495 "audioop.c"
        HEAP[$152]=$150; //@line 1495 "audioop.c"
        var $153=HEAP[$str]; //@line 1495 "audioop.c"
        var $154=(($153)&4294967295); //@line 1495 "audioop.c"
        var $155=HEAP[$154]; //@line 1495 "audioop.c"
        var $156=((($155))|0)==0; //@line 1495 "audioop.c"
        if ($156) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 1495 "audioop.c"
      case 45: // $bb44
        var $157=HEAP[$str]; //@line 1495 "audioop.c"
        var $158=(($157+4)&4294967295); //@line 1495 "audioop.c"
        var $159=HEAP[$158]; //@line 1495 "audioop.c"
        var $160=(($159+24)&4294967295); //@line 1495 "audioop.c"
        var $161=HEAP[$160]; //@line 1495 "audioop.c"
        var $162=HEAP[$str]; //@line 1495 "audioop.c"
        FUNCTION_TABLE[$161]($162); //@line 1495 "audioop.c"
        __label__ = 46; break; //@line 1495 "audioop.c"
      case 46: // $bb45
        var $163=HEAP[$rv]; //@line 1496 "audioop.c"
        HEAP[$0]=$163; //@line 1496 "audioop.c"
        __label__ = 47; break; //@line 1496 "audioop.c"
      case 47: // $bb46
        var $164=HEAP[$0]; //@line 1406 "audioop.c"
        HEAP[$retval]=$164; //@line 1406 "audioop.c"
        __label__ = 48; break; //@line 1406 "audioop.c"
      case 48: // $return
        var $retval47=HEAP[$retval]; //@line 1406 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval47; //@line 1406 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_adpcm2lin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 80; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $ncp=__stackBase__+20;
        var $len=__stackBase__+24;
        var $size=__stackBase__+28;
        var $valpred=__stackBase__+32;
        var $step=__stackBase__+36;
        var $delta=__stackBase__+40;
        var $index=__stackBase__+44;
        var $sign=__stackBase__+48;
        var $vpdiff=__stackBase__+52;
        var $rv=__stackBase__+56;
        var $str=__stackBase__+60;
        var $state=__stackBase__+64;
        var $i=__stackBase__+68;
        var $inputbuffer=__stackBase__+72;
        var $bufferstep=__stackBase__+76;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$inputbuffer]=0; //@line 1506 "audioop.c"
        var $1=HEAP[$args_addr]; //@line 1508 "audioop.c"
        var $2=_PyArg_ParseTuple($1, ((__str46)&4294967295), $cp, $len, $size, $state); //@line 1508 "audioop.c"
        var $3=((($2))|0)==0; //@line 1508 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1508 "audioop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1510 "audioop.c"
        __label__ = 44; break; //@line 1510 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1512 "audioop.c"
        var $5=HEAP[$len]; //@line 1512 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1512 "audioop.c"
        var $7=((($6))|0)==0; //@line 1512 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1512 "audioop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1513 "audioop.c"
        __label__ = 44; break; //@line 1513 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$state]; //@line 1516 "audioop.c"
        var $9=($8)==(__Py_NoneStruct); //@line 1516 "audioop.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1516 "audioop.c"
      case 5: // $bb4
        HEAP[$valpred]=0; //@line 1518 "audioop.c"
        HEAP[$index]=0; //@line 1519 "audioop.c"
        __label__ = 8; break; //@line 1519 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$state]; //@line 1520 "audioop.c"
        var $11=_PyArg_ParseTuple($10, ((__str44)&4294967295), $valpred, $index); //@line 1520 "audioop.c"
        var $12=((($11))|0)==0; //@line 1520 "audioop.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1520 "audioop.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 1521 "audioop.c"
        __label__ = 44; break; //@line 1521 "audioop.c"
      case 8: // $bb7
        var $13=HEAP[$size]; //@line 1523 "audioop.c"
        var $14=((1073741823/((($13))|0))|0); //@line 1523 "audioop.c"
        var $15=HEAP[$len]; //@line 1523 "audioop.c"
        var $16=((($14))|0) < ((($15))|0); //@line 1523 "audioop.c"
        if ($16) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1523 "audioop.c"
      case 9: // $bb8
        var $17=HEAP[_PyExc_MemoryError]; //@line 1524 "audioop.c"
        _PyErr_SetString($17, ((__str23)&4294967295)); //@line 1524 "audioop.c"
        HEAP[$0]=0; //@line 1526 "audioop.c"
        __label__ = 44; break; //@line 1526 "audioop.c"
      case 10: // $bb9
        var $18=HEAP[$len]; //@line 1528 "audioop.c"
        var $19=HEAP[$size]; //@line 1528 "audioop.c"
        var $20=((($18) * ($19))&4294967295); //@line 1528 "audioop.c"
        var $21=((($20) * 2)&4294967295); //@line 1528 "audioop.c"
        var $22=_PyString_FromStringAndSize(0, $21); //@line 1528 "audioop.c"
        HEAP[$str]=$22; //@line 1528 "audioop.c"
        var $23=HEAP[$str]; //@line 1529 "audioop.c"
        var $24=($23)==0; //@line 1529 "audioop.c"
        if ($24) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1529 "audioop.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 1530 "audioop.c"
        __label__ = 44; break; //@line 1530 "audioop.c"
      case 12: // $bb11
        var $25=HEAP[$str]; //@line 1531 "audioop.c"
        var $26=_PyString_AsString($25); //@line 1531 "audioop.c"
        HEAP[$ncp]=$26; //@line 1531 "audioop.c"
        var $27=HEAP[$index]; //@line 1533 "audioop.c"
        var $28=((_stepsizeTable+$27*4)&4294967295); //@line 1533 "audioop.c"
        var $29=HEAP[$28]; //@line 1533 "audioop.c"
        HEAP[$step]=$29; //@line 1533 "audioop.c"
        HEAP[$bufferstep]=0; //@line 1534 "audioop.c"
        HEAP[$i]=0; //@line 1536 "audioop.c"
        __label__ = 40; break; //@line 1536 "audioop.c"
      case 13: // $bb12
        var $30=HEAP[$bufferstep]; //@line 1538 "audioop.c"
        var $31=((($30))|0)!=0; //@line 1538 "audioop.c"
        if ($31) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1538 "audioop.c"
      case 14: // $bb13
        var $32=HEAP[$inputbuffer]; //@line 1539 "audioop.c"
        var $33=($32) & 15; //@line 1539 "audioop.c"
        HEAP[$delta]=$33; //@line 1539 "audioop.c"
        __label__ = 16; break; //@line 1539 "audioop.c"
      case 15: // $bb14
        var $34=HEAP[$cp]; //@line 1541 "audioop.c"
        var $35=HEAP[$34]; //@line 1541 "audioop.c"
        var $36=reSign(($35), 8, 0); //@line 1541 "audioop.c"
        HEAP[$inputbuffer]=$36; //@line 1541 "audioop.c"
        var $37=(($34+1)&4294967295); //@line 1541 "audioop.c"
        HEAP[$cp]=$37; //@line 1541 "audioop.c"
        var $38=HEAP[$inputbuffer]; //@line 1542 "audioop.c"
        var $39=((($38))|0) >> 4; //@line 1542 "audioop.c"
        var $40=($39) & 15; //@line 1542 "audioop.c"
        HEAP[$delta]=$40; //@line 1542 "audioop.c"
        __label__ = 16; break; //@line 1542 "audioop.c"
      case 16: // $bb15
        var $41=HEAP[$bufferstep]; //@line 1545 "audioop.c"
        var $42=((($41))|0)==0; //@line 1545 "audioop.c"
        var $43=unSign(($42), 1, 0); //@line 1545 "audioop.c"
        HEAP[$bufferstep]=$43; //@line 1545 "audioop.c"
        var $44=HEAP[$delta]; //@line 1548 "audioop.c"
        var $45=((_indexTable+$44*4)&4294967295); //@line 1548 "audioop.c"
        var $46=HEAP[$45]; //@line 1548 "audioop.c"
        var $47=HEAP[$index]; //@line 1548 "audioop.c"
        var $48=((($46) + ($47))&4294967295); //@line 1548 "audioop.c"
        HEAP[$index]=$48; //@line 1548 "audioop.c"
        var $49=HEAP[$index]; //@line 1549 "audioop.c"
        var $50=((($49))|0) < 0; //@line 1549 "audioop.c"
        if ($50) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1549 "audioop.c"
      case 17: // $bb16
        HEAP[$index]=0; //@line 1549 "audioop.c"
        __label__ = 18; break; //@line 1549 "audioop.c"
      case 18: // $bb17
        var $51=HEAP[$index]; //@line 1550 "audioop.c"
        var $52=((($51))|0) > 88; //@line 1550 "audioop.c"
        if ($52) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1550 "audioop.c"
      case 19: // $bb18
        HEAP[$index]=88; //@line 1550 "audioop.c"
        __label__ = 20; break; //@line 1550 "audioop.c"
      case 20: // $bb19
        var $53=HEAP[$delta]; //@line 1553 "audioop.c"
        var $54=($53) & 8; //@line 1553 "audioop.c"
        HEAP[$sign]=$54; //@line 1553 "audioop.c"
        var $55=HEAP[$delta]; //@line 1554 "audioop.c"
        var $56=($55) & 7; //@line 1554 "audioop.c"
        HEAP[$delta]=$56; //@line 1554 "audioop.c"
        var $57=HEAP[$step]; //@line 1561 "audioop.c"
        var $58=((($57))|0) >> 3; //@line 1561 "audioop.c"
        HEAP[$vpdiff]=$58; //@line 1561 "audioop.c"
        var $59=HEAP[$delta]; //@line 1562 "audioop.c"
        var $60=($59) & 4; //@line 1562 "audioop.c"
        var $61=((($60))|0)!=0; //@line 1562 "audioop.c"
        if ($61) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1562 "audioop.c"
      case 21: // $bb20
        var $62=HEAP[$vpdiff]; //@line 1562 "audioop.c"
        var $63=HEAP[$step]; //@line 1562 "audioop.c"
        var $64=((($62) + ($63))&4294967295); //@line 1562 "audioop.c"
        HEAP[$vpdiff]=$64; //@line 1562 "audioop.c"
        __label__ = 22; break; //@line 1562 "audioop.c"
      case 22: // $bb21
        var $65=HEAP[$delta]; //@line 1563 "audioop.c"
        var $66=($65) & 2; //@line 1563 "audioop.c"
        var $67=((($66))|0)!=0; //@line 1563 "audioop.c"
        if ($67) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1563 "audioop.c"
      case 23: // $bb22
        var $68=HEAP[$step]; //@line 1563 "audioop.c"
        var $69=((($68))|0) >> 1; //@line 1563 "audioop.c"
        var $70=HEAP[$vpdiff]; //@line 1563 "audioop.c"
        var $71=((($69) + ($70))&4294967295); //@line 1563 "audioop.c"
        HEAP[$vpdiff]=$71; //@line 1563 "audioop.c"
        __label__ = 24; break; //@line 1563 "audioop.c"
      case 24: // $bb23
        var $72=HEAP[$delta]; //@line 1564 "audioop.c"
        var $73=($72) & 1; //@line 1564 "audioop.c"
        var $74=((($73)) & 255); //@line 1564 "audioop.c"
        var $toBool=reSign(($74), 8, 0)!=0; //@line 1564 "audioop.c"
        if ($toBool) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1564 "audioop.c"
      case 25: // $bb24
        var $75=HEAP[$step]; //@line 1564 "audioop.c"
        var $76=((($75))|0) >> 2; //@line 1564 "audioop.c"
        var $77=HEAP[$vpdiff]; //@line 1564 "audioop.c"
        var $78=((($76) + ($77))&4294967295); //@line 1564 "audioop.c"
        HEAP[$vpdiff]=$78; //@line 1564 "audioop.c"
        __label__ = 26; break; //@line 1564 "audioop.c"
      case 26: // $bb25
        var $79=HEAP[$sign]; //@line 1566 "audioop.c"
        var $80=((($79))|0)!=0; //@line 1566 "audioop.c"
        if ($80) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1566 "audioop.c"
      case 27: // $bb26
        var $81=HEAP[$valpred]; //@line 1567 "audioop.c"
        var $82=HEAP[$vpdiff]; //@line 1567 "audioop.c"
        var $83=((($81) - ($82))&4294967295); //@line 1567 "audioop.c"
        HEAP[$valpred]=$83; //@line 1567 "audioop.c"
        __label__ = 29; break; //@line 1567 "audioop.c"
      case 28: // $bb27
        var $84=HEAP[$valpred]; //@line 1569 "audioop.c"
        var $85=HEAP[$vpdiff]; //@line 1569 "audioop.c"
        var $86=((($84) + ($85))&4294967295); //@line 1569 "audioop.c"
        HEAP[$valpred]=$86; //@line 1569 "audioop.c"
        __label__ = 29; break; //@line 1569 "audioop.c"
      case 29: // $bb28
        var $87=HEAP[$valpred]; //@line 1572 "audioop.c"
        var $88=((($87))|0) > 32767; //@line 1572 "audioop.c"
        if ($88) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1572 "audioop.c"
      case 30: // $bb29
        HEAP[$valpred]=32767; //@line 1573 "audioop.c"
        __label__ = 33; break; //@line 1573 "audioop.c"
      case 31: // $bb30
        var $89=HEAP[$valpred]; //@line 1574 "audioop.c"
        var $90=((($89))|0) < -32768; //@line 1574 "audioop.c"
        if ($90) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1574 "audioop.c"
      case 32: // $bb31
        HEAP[$valpred]=-32768; //@line 1575 "audioop.c"
        __label__ = 33; break; //@line 1575 "audioop.c"
      case 33: // $bb32
        var $91=HEAP[$index]; //@line 1578 "audioop.c"
        var $92=((_stepsizeTable+$91*4)&4294967295); //@line 1578 "audioop.c"
        var $93=HEAP[$92]; //@line 1578 "audioop.c"
        HEAP[$step]=$93; //@line 1578 "audioop.c"
        var $94=HEAP[$size]; //@line 1581 "audioop.c"
        var $95=((($94))|0)==1; //@line 1581 "audioop.c"
        if ($95) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1581 "audioop.c"
      case 34: // $bb33
        var $96=HEAP[$valpred]; //@line 1581 "audioop.c"
        var $97=((($96))|0) >> 8; //@line 1581 "audioop.c"
        var $98=((($97)) & 255); //@line 1581 "audioop.c"
        var $99=HEAP[$ncp]; //@line 1581 "audioop.c"
        var $100=HEAP[$i]; //@line 1581 "audioop.c"
        var $101=(($99+$100)&4294967295); //@line 1581 "audioop.c"
        HEAP[$101]=$98; //@line 1581 "audioop.c"
        __label__ = 39; break; //@line 1581 "audioop.c"
      case 35: // $bb34
        var $102=HEAP[$size]; //@line 1582 "audioop.c"
        var $103=((($102))|0)==2; //@line 1582 "audioop.c"
        if ($103) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1582 "audioop.c"
      case 36: // $bb35
        var $104=HEAP[$ncp]; //@line 1582 "audioop.c"
        var $105=HEAP[$i]; //@line 1582 "audioop.c"
        var $106=(($104+$105)&4294967295); //@line 1582 "audioop.c"
        var $107=$106; //@line 1582 "audioop.c"
        var $108=HEAP[$valpred]; //@line 1582 "audioop.c"
        var $109=((($108)) & 65535); //@line 1582 "audioop.c"
        HEAP[$107]=$109; //@line 1582 "audioop.c"
        __label__ = 39; break; //@line 1582 "audioop.c"
      case 37: // $bb36
        var $110=HEAP[$size]; //@line 1583 "audioop.c"
        var $111=((($110))|0)==4; //@line 1583 "audioop.c"
        if ($111) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1583 "audioop.c"
      case 38: // $bb37
        var $112=HEAP[$ncp]; //@line 1583 "audioop.c"
        var $113=HEAP[$i]; //@line 1583 "audioop.c"
        var $114=(($112+$113)&4294967295); //@line 1583 "audioop.c"
        var $115=$114; //@line 1583 "audioop.c"
        var $116=HEAP[$valpred]; //@line 1583 "audioop.c"
        var $117=($116) << 16; //@line 1583 "audioop.c"
        HEAP[$115]=$117; //@line 1583 "audioop.c"
        __label__ = 39; break; //@line 1583 "audioop.c"
      case 39: // $bb38
        var $118=HEAP[$size]; //@line 1536 "audioop.c"
        var $119=HEAP[$i]; //@line 1536 "audioop.c"
        var $120=((($119) + ($118))&4294967295); //@line 1536 "audioop.c"
        HEAP[$i]=$120; //@line 1536 "audioop.c"
        __label__ = 40; break; //@line 1536 "audioop.c"
      case 40: // $bb39
        var $121=HEAP[$len]; //@line 1536 "audioop.c"
        var $122=HEAP[$size]; //@line 1536 "audioop.c"
        var $123=((($121) * ($122))&4294967295); //@line 1536 "audioop.c"
        var $124=((($123) * 2)&4294967295); //@line 1536 "audioop.c"
        var $125=HEAP[$i]; //@line 1536 "audioop.c"
        var $126=((($124))|0) > ((($125))|0); //@line 1536 "audioop.c"
        if ($126) { __label__ = 13; break; } else { __label__ = 41; break; } //@line 1536 "audioop.c"
      case 41: // $bb40
        var $127=HEAP[$index]; //@line 1586 "audioop.c"
        var $128=HEAP[$valpred]; //@line 1586 "audioop.c"
        var $129=HEAP[$str]; //@line 1586 "audioop.c"
        var $130=_Py_BuildValue(((__str45)&4294967295), $129, $128, $127); //@line 1586 "audioop.c"
        HEAP[$rv]=$130; //@line 1586 "audioop.c"
        var $131=HEAP[$str]; //@line 1587 "audioop.c"
        var $132=(($131)&4294967295); //@line 1587 "audioop.c"
        var $133=HEAP[$132]; //@line 1587 "audioop.c"
        var $134=((($133) - 1)&4294967295); //@line 1587 "audioop.c"
        var $135=HEAP[$str]; //@line 1587 "audioop.c"
        var $136=(($135)&4294967295); //@line 1587 "audioop.c"
        HEAP[$136]=$134; //@line 1587 "audioop.c"
        var $137=HEAP[$str]; //@line 1587 "audioop.c"
        var $138=(($137)&4294967295); //@line 1587 "audioop.c"
        var $139=HEAP[$138]; //@line 1587 "audioop.c"
        var $140=((($139))|0)==0; //@line 1587 "audioop.c"
        if ($140) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1587 "audioop.c"
      case 42: // $bb41
        var $141=HEAP[$str]; //@line 1587 "audioop.c"
        var $142=(($141+4)&4294967295); //@line 1587 "audioop.c"
        var $143=HEAP[$142]; //@line 1587 "audioop.c"
        var $144=(($143+24)&4294967295); //@line 1587 "audioop.c"
        var $145=HEAP[$144]; //@line 1587 "audioop.c"
        var $146=HEAP[$str]; //@line 1587 "audioop.c"
        FUNCTION_TABLE[$145]($146); //@line 1587 "audioop.c"
        __label__ = 43; break; //@line 1587 "audioop.c"
      case 43: // $bb42
        var $147=HEAP[$rv]; //@line 1588 "audioop.c"
        HEAP[$0]=$147; //@line 1588 "audioop.c"
        __label__ = 44; break; //@line 1588 "audioop.c"
      case 44: // $bb43
        var $148=HEAP[$0]; //@line 1510 "audioop.c"
        HEAP[$retval]=$148; //@line 1510 "audioop.c"
        __label__ = 45; break; //@line 1510 "audioop.c"
      case 45: // $return
        var $retval44=HEAP[$retval]; //@line 1510 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval44; //@line 1510 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initaudioop() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $d=__stackBase__+4;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str72)&4294967295), _audioop_methods, 0, 0, 1013); //@line 1624 "audioop.c"
        HEAP[$m]=$0; //@line 1624 "audioop.c"
        var $1=HEAP[$m]; //@line 1625 "audioop.c"
        var $2=($1)==0; //@line 1625 "audioop.c"
        if ($2) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1625 "audioop.c"
      case 1: // $bb
        var $3=HEAP[$m]; //@line 1627 "audioop.c"
        var $4=_PyModule_GetDict($3); //@line 1627 "audioop.c"
        HEAP[$d]=$4; //@line 1627 "audioop.c"
        var $5=HEAP[$d]; //@line 1628 "audioop.c"
        var $6=($5)==0; //@line 1628 "audioop.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1628 "audioop.c"
      case 2: // $bb1
        var $7=_PyErr_NewException(((__str73)&4294967295), 0, 0); //@line 1630 "audioop.c"
        HEAP[_AudioopError]=$7; //@line 1630 "audioop.c"
        var $8=HEAP[_AudioopError]; //@line 1631 "audioop.c"
        var $9=($8)!=0; //@line 1631 "audioop.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1631 "audioop.c"
      case 3: // $bb2
        var $10=HEAP[_AudioopError]; //@line 1632 "audioop.c"
        var $11=HEAP[$d]; //@line 1632 "audioop.c"
        var $12=_PyDict_SetItemString($11, ((__str74)&4294967295), $10); //@line 1632 "audioop.c"
        __label__ = 4; break; //@line 1632 "audioop.c"
      case 4: // $bb3
        __label__ = 5; break; //@line 1626 "audioop.c"
      case 5: // $return
        STACKTOP = __stackBase__;
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
HEAP[_audioop_methods]=((__str47)&4294967295);
HEAP[_audioop_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_audioop_methods+16]=((__str48)&4294967295);
HEAP[_audioop_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_audioop_methods+32]=((__str49)&4294967295);
HEAP[_audioop_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_audioop_methods+48]=((__str50)&4294967295);
HEAP[_audioop_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_audioop_methods+64]=((__str51)&4294967295);
HEAP[_audioop_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_audioop_methods+80]=((__str52)&4294967295);
HEAP[_audioop_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_audioop_methods+96]=((__str53)&4294967295);
HEAP[_audioop_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_audioop_methods+112]=((__str54)&4294967295);
HEAP[_audioop_methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_audioop_methods+128]=((__str55)&4294967295);
HEAP[_audioop_methods+132]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_audioop_methods+144]=((__str56)&4294967295);
HEAP[_audioop_methods+148]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_audioop_methods+160]=((__str57)&4294967295);
HEAP[_audioop_methods+164]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_audioop_methods+176]=((__str58)&4294967295);
HEAP[_audioop_methods+180]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_audioop_methods+192]=((__str59)&4294967295);
HEAP[_audioop_methods+196]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_audioop_methods+208]=((__str60)&4294967295);
HEAP[_audioop_methods+212]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_audioop_methods+224]=((__str61)&4294967295);
HEAP[_audioop_methods+228]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_audioop_methods+240]=((__str62)&4294967295);
HEAP[_audioop_methods+244]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_audioop_methods+256]=((__str63)&4294967295);
HEAP[_audioop_methods+260]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_audioop_methods+272]=((__str64)&4294967295);
HEAP[_audioop_methods+276]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_audioop_methods+288]=((__str65)&4294967295);
HEAP[_audioop_methods+292]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_audioop_methods+304]=((__str66)&4294967295);
HEAP[_audioop_methods+308]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_audioop_methods+320]=((__str67)&4294967295);
HEAP[_audioop_methods+324]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_audioop_methods+336]=((__str68)&4294967295);
HEAP[_audioop_methods+340]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_audioop_methods+352]=((__str69)&4294967295);
HEAP[_audioop_methods+356]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_audioop_methods+368]=((__str70)&4294967295);
HEAP[_audioop_methods+372]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_audioop_methods+384]=((__str71)&4294967295);
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

