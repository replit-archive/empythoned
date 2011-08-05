// Warning: Cannot correct overflows of this many bits: 64 at line 464
// Warning: Cannot correct overflows of this many bits: 64 at line 505
// Warning: Cannot correct overflows of this many bits: 64 at line 1149
// Warning: Cannot correct overflows of this many bits: 64 at line 1532
// Warning: Cannot correct overflows of this many bits: 64 at line 1849
// Warning: Cannot correct overflows of this many bits: 64 at line 2332
// Warning: Cannot correct overflows of this many bits: 64 at line 2963
// Warning: Cannot correct overflows of this many bits: 64 at line 2970
// Warning: Cannot correct overflows of this many bits: 64 at line 3007
// Warning: Cannot correct overflows of this many bits: 64 at line 3021
// Warning: Cannot correct overflows of this many bits: 64 at line 3038
// Warning: Cannot correct overflows of this many bits: 64 at line 3166
// Warning: Cannot correct overflows of this many bits: 64 at line 3200
// Warning: Cannot correct overflows of this many bits: 64 at line 3207
// Warning: Cannot correct overflows of this many bits: 64 at line 4407
// Warning: Cannot correct overflows of this many bits: 64 at line 4466
// Warning: Cannot correct overflows of this many bits: 64 at line 4468
// Warning: Cannot correct overflows of this many bits: 64 at line 4621
// Warning: Cannot correct overflows of this many bits: 64 at line 4680
// Warning: Cannot correct overflows of this many bits: 64 at line 4682
// Warning: Cannot correct overflows of this many bits: 64 at line 4983
// Warning: Cannot correct overflows of this many bits: 64 at line 5108
// Warning: Cannot correct overflows of this many bits: 64 at line 5110
// Warning: Cannot correct overflows of this many bits: 64 at line 5637
// Warning: Cannot correct overflows of this many bits: 64 at line 5963
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



var $0___SIZE = 192; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 100; // %2
  
var $3___SIZE = 20; // %3
  
var $4___SIZE = 20; // %4
  
var $5___SIZE = 40; // %5
  
var $6___SIZE = 196; // %6
  
var $7___SIZE = 48; // %7
  
var $8___SIZE = 40; // %8
  
var $9___SIZE = 20; // %9
  
var $10___SIZE = 32; // %10
  
var $struct_BZ2CompObject___SIZE = 60; // %struct.BZ2CompObject
  var $struct_BZ2CompObject___FLATTENER = [0,4,8,56];
var $struct_BZ2DecompObject___SIZE = 64; // %struct.BZ2DecompObject
  var $struct_BZ2DecompObject___FLATTENER = [0,4,8,56,60];
var $struct_BZ2FileObject___SIZE = 64; // %struct.BZ2FileObject
  var $struct_BZ2FileObject___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,56];
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyFileObject___SIZE = 84; // %struct.PyFileObject
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyListObject___SIZE = 20; // %struct.PyListObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
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
  
var $struct_bz_stream___SIZE = 48; // %struct.bz_stream
  
var ___author__;
var _PyExc_ValueError;
var __str;
var _PyExc_SystemError;
var __str1;
var __str2;
var _PyExc_IOError;
var __str3;
var __str4;
var _PyExc_EOFError;
var __str5;
var _PyExc_RuntimeError;
var __str6;
var _PyExc_OverflowError;
var __str7;
var __str8;
var __str9;
var ___PRETTY_FUNCTION___8675;
var __str10;
var __str11;
var _BZ2File_read__doc__;
var __str12;
var __str13;
var __str14;
var __str15;
var __str16;
var _BZ2File_readline__doc__;
var __str17;
var _BZ2File_readlines__doc__;
var __str18;
var _BZ2File_xreadlines__doc__;
var _BZ2File_write__doc__;
var __str19;
var __str20;
var __Py_NoneStruct;
var _BZ2File_writelines__doc__;
var _PyExc_TypeError;
var __str21;
var __str22;
var _BZ2File_seek__doc__;
var __str23;
var __str24;
var __str25;
var ___PRETTY_FUNCTION___9317;
var __str26;
var __str27;
var _BZ2File_tell__doc__;
var _BZ2File_close__doc__;
var __str28;
var _BZ2File_enter_doc;
var _BZ2File_exit_doc;
var __str29;
var __str30;
var __str31;
var __str32;
var __str33;
var __str34;
var __str35;
var __str36;
var __str37;
var _BZ2File_methods;
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
var _BZ2File_getset;
var __str52;
var __str53;
var _BZ2File_members;
var __str54;
var __str55;
var _kwlist_9585;
var __str56;
var __str57;
var __str58;
var __str59;
var __str60;
var __str61;
var __str62;
var _PyFile_Type;
var __str63;
var _BZ2File__doc__;
var __str64;
var _BZ2File_Type;
var _BZ2Comp_compress__doc__;
var __str65;
var __str66;
var _BZ2Comp_flush__doc__;
var __str67;
var __str68;
var __str69;
var _BZ2Comp_methods;
var __str70;
var _kwlist_9935;
var _BZ2Comp__doc__;
var __str71;
var _BZ2Comp_Type;
var __str72;
var _BZ2Decomp_members;
var _BZ2Decomp_decompress__doc__;
var __str73;
var __str74;
var __str75;
var _BZ2Decomp_methods;
var __str76;
var _BZ2Decomp__doc__;
var __str77;
var _BZ2Decomp_Type;
var _bz2_compress__doc__;
var __str78;
var _kwlist_10147;
var __str79;
var _bz2_decompress__doc__;
var __str80;
var _bz2_methods;
var _bz2__doc__;
var __str81;
var __str82;
var __str83;
var __str84;
var __str85;





























































  function _check_iterbuffered($f) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $f_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$f_addr]=$f;
        var $1=HEAP[$f_addr]; //@line 153 "bz2module.c"
        var $2=(($1+12)&4294967295); //@line 153 "bz2module.c"
        var $3=HEAP[$2]; //@line 153 "bz2module.c"
        var $4=($3)!=0; //@line 153 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 153 "bz2module.c"
      case 1: // $bb
        var $5=HEAP[$f_addr]; //@line 153 "bz2module.c"
        var $6=(($5+16)&4294967295); //@line 153 "bz2module.c"
        var $7=HEAP[$6]; //@line 153 "bz2module.c"
        var $8=($7); //@line 153 "bz2module.c"
        var $9=HEAP[$f_addr]; //@line 153 "bz2module.c"
        var $10=(($9+20)&4294967295); //@line 153 "bz2module.c"
        var $11=HEAP[$10]; //@line 153 "bz2module.c"
        var $12=($11); //@line 153 "bz2module.c"
        var $13=((($8) - ($12))&4294967295); //@line 153 "bz2module.c"
        var $14=((($13))|0) > 0; //@line 153 "bz2module.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 153 "bz2module.c"
      case 2: // $bb1
        var $15=HEAP[$f_addr]; //@line 153 "bz2module.c"
        var $16=(($15+12)&4294967295); //@line 153 "bz2module.c"
        var $17=HEAP[$16]; //@line 153 "bz2module.c"
        var $18=(($17)&4294967295); //@line 153 "bz2module.c"
        var $19=HEAP[$18]; //@line 153 "bz2module.c"
        var $20=reSign(($19), 8, 0)!=0; //@line 153 "bz2module.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 153 "bz2module.c"
      case 3: // $bb2
        var $21=HEAP[_PyExc_ValueError]; //@line 156 "bz2module.c"
        _PyErr_SetString($21, ((__str)&4294967295)); //@line 156 "bz2module.c"
        HEAP[$0]=-1; //@line 158 "bz2module.c"
        __label__ = 5; break; //@line 158 "bz2module.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 160 "bz2module.c"
        __label__ = 5; break; //@line 160 "bz2module.c"
      case 5: // $bb4
        var $22=HEAP[$0]; //@line 158 "bz2module.c"
        HEAP[$retval]=$22; //@line 158 "bz2module.c"
        __label__ = 6; break; //@line 158 "bz2module.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 158 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 158 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_CatchBZ2Error($bzerror) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $bzerror_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $ret=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$bzerror_addr]=$bzerror;
        HEAP[$ret]=0; //@line 166 "bz2module.c"
        var $1=HEAP[$bzerror_addr]; //@line 167 "bz2module.c"
        if ($1 == -9) {
          __label__ = 2; break;
        }
        else if ($1 == -7) {
          __label__ = 7; break;
        }
        else if ($1 == -6) {
          __label__ = 6; break;
        }
        else if ($1 == -5) {
          __label__ = 5; break;
        }
        else if ($1 == -4) {
          __label__ = 5; break;
        }
        else if ($1 == -3) {
          __label__ = 4; break;
        }
        else if ($1 == -2) {
          __label__ = 3; break;
        }
        else if ($1 == -1) {
          __label__ = 8; break;
        }
        else if ($1 == 0) {
          __label__ = 1; break;
        }
        else if ($1 == 4) {
          __label__ = 1; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 1: // $bb
        __label__ = 9; break; //@line 167 "bz2module.c"
      case 2: // $bb1
        var $2=HEAP[_PyExc_SystemError]; //@line 174 "bz2module.c"
        _PyErr_SetString($2, ((__str1)&4294967295)); //@line 174 "bz2module.c"
        HEAP[$ret]=1; //@line 177 "bz2module.c"
        __label__ = 9; break; //@line 177 "bz2module.c"
      case 3: // $bb2
        var $3=HEAP[_PyExc_ValueError]; //@line 182 "bz2module.c"
        _PyErr_SetString($3, ((__str2)&4294967295)); //@line 182 "bz2module.c"
        HEAP[$ret]=1; //@line 185 "bz2module.c"
        __label__ = 9; break; //@line 185 "bz2module.c"
      case 4: // $bb3
        var $4=_PyErr_NoMemory(); //@line 189 "bz2module.c"
        HEAP[$ret]=1; //@line 190 "bz2module.c"
        __label__ = 9; break; //@line 190 "bz2module.c"
      case 5: // $bb4
        var $5=HEAP[_PyExc_IOError]; //@line 195 "bz2module.c"
        _PyErr_SetString($5, ((__str3)&4294967295)); //@line 195 "bz2module.c"
        HEAP[$ret]=1; //@line 196 "bz2module.c"
        __label__ = 9; break; //@line 196 "bz2module.c"
      case 6: // $bb5
        var $6=HEAP[_PyExc_IOError]; //@line 200 "bz2module.c"
        _PyErr_SetString($6, ((__str4)&4294967295)); //@line 200 "bz2module.c"
        HEAP[$ret]=1; //@line 201 "bz2module.c"
        __label__ = 9; break; //@line 201 "bz2module.c"
      case 7: // $bb6
        var $7=HEAP[_PyExc_EOFError]; //@line 205 "bz2module.c"
        _PyErr_SetString($7, ((__str5)&4294967295)); //@line 205 "bz2module.c"
        HEAP[$ret]=1; //@line 208 "bz2module.c"
        __label__ = 9; break; //@line 208 "bz2module.c"
      case 8: // $bb7
        var $8=HEAP[_PyExc_RuntimeError]; //@line 212 "bz2module.c"
        _PyErr_SetString($8, ((__str6)&4294967295)); //@line 212 "bz2module.c"
        HEAP[$ret]=1; //@line 215 "bz2module.c"
        __label__ = 9; break; //@line 215 "bz2module.c"
      case 9: // $bb8
        var $9=HEAP[$ret]; //@line 218 "bz2module.c"
        HEAP[$0]=$9; //@line 218 "bz2module.c"
        var $10=HEAP[$0]; //@line 218 "bz2module.c"
        HEAP[$retval]=$10; //@line 218 "bz2module.c"
        __label__ = 10; break; //@line 218 "bz2module.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 218 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 218 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_NewBufferSize($currentsize) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $currentsize_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$currentsize_addr]=$currentsize;
        var $1=HEAP[$currentsize_addr]; //@line 237 "bz2module.c"
        var $2=((($1))>>>0) > 8192; //@line 237 "bz2module.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 237 "bz2module.c"
      case 1: // $bb
        var $3=HEAP[$currentsize_addr]; //@line 240 "bz2module.c"
        var $4=((($3))>>>0) <= 524288; //@line 240 "bz2module.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 240 "bz2module.c"
      case 2: // $bb1
        var $5=HEAP[$currentsize_addr]; //@line 241 "bz2module.c"
        var $6=HEAP[$currentsize_addr]; //@line 241 "bz2module.c"
        var $7=((($5) + ($6))&4294967295); //@line 241 "bz2module.c"
        HEAP[$0]=$7; //@line 241 "bz2module.c"
        __label__ = 5; break; //@line 241 "bz2module.c"
      case 3: // $bb2
        var $8=HEAP[$currentsize_addr]; //@line 243 "bz2module.c"
        var $9=((($8) + 524288)&4294967295); //@line 243 "bz2module.c"
        HEAP[$0]=$9; //@line 243 "bz2module.c"
        __label__ = 5; break; //@line 243 "bz2module.c"
      case 4: // $bb3
        var $10=HEAP[$currentsize_addr]; //@line 245 "bz2module.c"
        var $11=((($10) + 8192)&4294967295); //@line 245 "bz2module.c"
        HEAP[$0]=$11; //@line 245 "bz2module.c"
        __label__ = 5; break; //@line 245 "bz2module.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 241 "bz2module.c"
        HEAP[$retval]=$12; //@line 241 "bz2module.c"
        __label__ = 6; break; //@line 241 "bz2module.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 241 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 241 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_GetLine($f, $n) {
    var __stackBase__  = STACKTOP; STACKTOP += 65; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 65);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $f_addr=__stackBase__;
        var $n_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $iftmp_7=__stackBase__+16;
        var $c=__stackBase__+20;
        var $buf=__stackBase__+21;
        var $end=__stackBase__+25;
        var $total_v_size=__stackBase__+29;
        var $used_v_size=__stackBase__+33;
        var $increment=__stackBase__+37;
        var $v=__stackBase__+41;
        var $bzerror=__stackBase__+45;
        var $bytes_read=__stackBase__+49;
        var $newlinetypes=__stackBase__+53;
        var $skipnextlf=__stackBase__+57;
        var $univ_newline=__stackBase__+61;
        var $_alloca_point_=0;
        HEAP[$f_addr]=$f;
        HEAP[$n_addr]=$n;
        var $1=HEAP[$f_addr]; //@line 260 "bz2module.c"
        var $2=(($1+32)&4294967295); //@line 260 "bz2module.c"
        var $3=HEAP[$2]; //@line 260 "bz2module.c"
        HEAP[$newlinetypes]=$3; //@line 260 "bz2module.c"
        var $4=HEAP[$f_addr]; //@line 261 "bz2module.c"
        var $5=(($4+36)&4294967295); //@line 261 "bz2module.c"
        var $6=HEAP[$5]; //@line 261 "bz2module.c"
        HEAP[$skipnextlf]=$6; //@line 261 "bz2module.c"
        var $7=HEAP[$f_addr]; //@line 262 "bz2module.c"
        var $8=(($7+28)&4294967295); //@line 262 "bz2module.c"
        var $9=HEAP[$8]; //@line 262 "bz2module.c"
        HEAP[$univ_newline]=$9; //@line 262 "bz2module.c"
        var $10=HEAP[$n_addr]; //@line 264 "bz2module.c"
        var $11=((($10))|0) > 0; //@line 264 "bz2module.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 264 "bz2module.c"
      case 1: // $bb
        var $12=HEAP[$n_addr]; //@line 264 "bz2module.c"
        HEAP[$iftmp_7]=$12; //@line 264 "bz2module.c"
        __label__ = 3; break; //@line 264 "bz2module.c"
      case 2: // $bb1
        HEAP[$iftmp_7]=100; //@line 264 "bz2module.c"
        __label__ = 3; break; //@line 264 "bz2module.c"
      case 3: // $bb2
        var $13=HEAP[$iftmp_7]; //@line 264 "bz2module.c"
        HEAP[$total_v_size]=$13; //@line 264 "bz2module.c"
        var $14=HEAP[$total_v_size]; //@line 265 "bz2module.c"
        var $15=_PyString_FromStringAndSize(0, $14); //@line 265 "bz2module.c"
        HEAP[$v]=$15; //@line 265 "bz2module.c"
        var $16=HEAP[$v]; //@line 266 "bz2module.c"
        var $17=($16)==0; //@line 266 "bz2module.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 266 "bz2module.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 267 "bz2module.c"
        __label__ = 44; break; //@line 267 "bz2module.c"
      case 5: // $bb4
        var $18=HEAP[$v]; //@line 269 "bz2module.c"
        var $19=$18; //@line 269 "bz2module.c"
        var $20=(($19+20)&4294967295); //@line 269 "bz2module.c"
        var $21=(($20)&4294967295); //@line 269 "bz2module.c"
        HEAP[$buf]=$21; //@line 269 "bz2module.c"
        var $22=HEAP[$buf]; //@line 270 "bz2module.c"
        var $23=HEAP[$total_v_size]; //@line 270 "bz2module.c"
        var $24=(($22+$23)&4294967295); //@line 270 "bz2module.c"
        HEAP[$end]=$24; //@line 270 "bz2module.c"
        __label__ = 6; break; //@line 270 "bz2module.c"
      case 6: // $bb5
        __label__ = 21; break; //@line 270 "bz2module.c"
      case 7: // $bb6
        var $25=HEAP[$f_addr]; //@line 275 "bz2module.c"
        var $26=(($25+40)&4294967295); //@line 275 "bz2module.c"
        var $27=HEAP[$26]; //@line 275 "bz2module.c"
        var $28=_BZ2_bzRead($bzerror, $27, $c, 1); //@line 275 "bz2module.c"
        HEAP[$bytes_read]=$28; //@line 275 "bz2module.c"
        var $29=HEAP[$f_addr]; //@line 276 "bz2module.c"
        var $30=(($29+48)&4294967295); //@line 276 "bz2module.c"
        var $31=HEAP[$30]; //@line 276 "bz2module.c"
        var $32=($31) + 1; //@line 276 "bz2module.c"
        var $33=HEAP[$f_addr]; //@line 276 "bz2module.c"
        var $34=(($33+48)&4294967295); //@line 276 "bz2module.c"
        HEAP[$34]=$32; //@line 276 "bz2module.c"
        var $35=HEAP[$bytes_read]; //@line 277 "bz2module.c"
        var $36=((($35))|0)==0; //@line 277 "bz2module.c"
        if ($36) { __label__ = 22; break; } else { __label__ = 8; break; } //@line 277 "bz2module.c"
      case 8: // $bb7
        var $37=HEAP[$univ_newline]; //@line 278 "bz2module.c"
        var $38=((($37))|0)!=0; //@line 278 "bz2module.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 19; break; } //@line 278 "bz2module.c"
      case 9: // $bb8
        var $39=HEAP[$skipnextlf]; //@line 279 "bz2module.c"
        var $40=((($39))|0)!=0; //@line 279 "bz2module.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 15; break; } //@line 279 "bz2module.c"
      case 10: // $bb9
        HEAP[$skipnextlf]=0; //@line 280 "bz2module.c"
        var $41=HEAP[$c]; //@line 281 "bz2module.c"
        var $42=reSign(($41), 8, 0)==10; //@line 281 "bz2module.c"
        if ($42) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 281 "bz2module.c"
      case 11: // $bb10
        var $43=HEAP[$newlinetypes]; //@line 285 "bz2module.c"
        var $44=($43) | 4; //@line 285 "bz2module.c"
        HEAP[$newlinetypes]=$44; //@line 285 "bz2module.c"
        var $45=HEAP[$bzerror]; //@line 286 "bz2module.c"
        var $46=((($45))|0)!=0; //@line 286 "bz2module.c"
        if ($46) { __label__ = 22; break; } else { __label__ = 12; break; } //@line 286 "bz2module.c"
      case 12: // $bb11
        var $47=HEAP[$f_addr]; //@line 287 "bz2module.c"
        var $48=(($47+40)&4294967295); //@line 287 "bz2module.c"
        var $49=HEAP[$48]; //@line 287 "bz2module.c"
        var $50=_BZ2_bzRead($bzerror, $49, $c, 1); //@line 287 "bz2module.c"
        HEAP[$bytes_read]=$50; //@line 287 "bz2module.c"
        var $51=HEAP[$f_addr]; //@line 288 "bz2module.c"
        var $52=(($51+48)&4294967295); //@line 288 "bz2module.c"
        var $53=HEAP[$52]; //@line 288 "bz2module.c"
        var $54=($53) + 1; //@line 288 "bz2module.c"
        var $55=HEAP[$f_addr]; //@line 288 "bz2module.c"
        var $56=(($55+48)&4294967295); //@line 288 "bz2module.c"
        HEAP[$56]=$54; //@line 288 "bz2module.c"
        var $57=HEAP[$bytes_read]; //@line 289 "bz2module.c"
        var $58=((($57))|0)==0; //@line 289 "bz2module.c"
        if ($58) { __label__ = 22; break; } else { __label__ = 13; break; } //@line 289 "bz2module.c"
      case 13: // $bb12
        __label__ = 15; break; //@line 289 "bz2module.c"
      case 14: // $bb13
        var $59=HEAP[$newlinetypes]; //@line 291 "bz2module.c"
        var $60=($59) | 1; //@line 291 "bz2module.c"
        HEAP[$newlinetypes]=$60; //@line 291 "bz2module.c"
        __label__ = 15; break; //@line 291 "bz2module.c"
      case 15: // $bb14
        var $61=HEAP[$c]; //@line 294 "bz2module.c"
        var $62=reSign(($61), 8, 0)==13; //@line 294 "bz2module.c"
        if ($62) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 294 "bz2module.c"
      case 16: // $bb15
        HEAP[$skipnextlf]=1; //@line 295 "bz2module.c"
        HEAP[$c]=10; //@line 296 "bz2module.c"
        __label__ = 19; break; //@line 296 "bz2module.c"
      case 17: // $bb16
        var $63=HEAP[$c]; //@line 297 "bz2module.c"
        var $64=reSign(($63), 8, 0)==10; //@line 297 "bz2module.c"
        if ($64) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 297 "bz2module.c"
      case 18: // $bb17
        var $65=HEAP[$newlinetypes]; //@line 298 "bz2module.c"
        var $66=($65) | 2; //@line 298 "bz2module.c"
        HEAP[$newlinetypes]=$66; //@line 298 "bz2module.c"
        __label__ = 19; break; //@line 298 "bz2module.c"
      case 19: // $bb18
        var $67=HEAP[$c]; //@line 300 "bz2module.c"
        var $68=HEAP[$buf]; //@line 300 "bz2module.c"
        HEAP[$68]=$67; //@line 300 "bz2module.c"
        var $69=HEAP[$buf]; //@line 300 "bz2module.c"
        var $70=(($69+1)&4294967295); //@line 300 "bz2module.c"
        HEAP[$buf]=$70; //@line 300 "bz2module.c"
        var $71=HEAP[$bzerror]; //@line 301 "bz2module.c"
        var $72=((($71))|0)!=0; //@line 301 "bz2module.c"
        if ($72) { __label__ = 22; break; } else { __label__ = 20; break; } //@line 301 "bz2module.c"
      case 20: // $bb19
        var $73=HEAP[$c]; //@line 301 "bz2module.c"
        var $74=reSign(($73), 8, 0)==10; //@line 301 "bz2module.c"
        if ($74) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 301 "bz2module.c"
      case 21: // $bb20
        var $75=HEAP[$buf]; //@line 274 "bz2module.c"
        var $76=HEAP[$end]; //@line 274 "bz2module.c"
        var $77=($75)!=($76); //@line 274 "bz2module.c"
        if ($77) { __label__ = 7; break; } else { __label__ = 22; break; } //@line 274 "bz2module.c"
      case 22: // $bb21
        var $78=HEAP[$univ_newline]; //@line 303 "bz2module.c"
        var $79=((($78))|0)!=0; //@line 303 "bz2module.c"
        if ($79) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 303 "bz2module.c"
      case 23: // $bb22
        var $80=HEAP[$bzerror]; //@line 303 "bz2module.c"
        var $81=((($80))|0)==4; //@line 303 "bz2module.c"
        if ($81) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 303 "bz2module.c"
      case 24: // $bb23
        var $82=HEAP[$skipnextlf]; //@line 303 "bz2module.c"
        var $83=((($82))|0)!=0; //@line 303 "bz2module.c"
        if ($83) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 303 "bz2module.c"
      case 25: // $bb24
        var $84=HEAP[$newlinetypes]; //@line 304 "bz2module.c"
        var $85=($84) | 1; //@line 304 "bz2module.c"
        HEAP[$newlinetypes]=$85; //@line 304 "bz2module.c"
        __label__ = 26; break; //@line 304 "bz2module.c"
      case 26: // $bb25
        var $86=HEAP[$f_addr]; //@line 306 "bz2module.c"
        var $87=(($86+32)&4294967295); //@line 306 "bz2module.c"
        var $88=HEAP[$newlinetypes]; //@line 306 "bz2module.c"
        HEAP[$87]=$88; //@line 306 "bz2module.c"
        var $89=HEAP[$f_addr]; //@line 307 "bz2module.c"
        var $90=(($89+36)&4294967295); //@line 307 "bz2module.c"
        var $91=HEAP[$skipnextlf]; //@line 307 "bz2module.c"
        HEAP[$90]=$91; //@line 307 "bz2module.c"
        var $92=HEAP[$bzerror]; //@line 308 "bz2module.c"
        var $93=((($92))|0)==4; //@line 308 "bz2module.c"
        if ($93) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 308 "bz2module.c"
      case 27: // $bb26
        var $94=HEAP[$f_addr]; //@line 309 "bz2module.c"
        var $95=(($94+48)&4294967295); //@line 309 "bz2module.c"
        var $96=HEAP[$95]; //@line 309 "bz2module.c"
        var $97=HEAP[$f_addr]; //@line 309 "bz2module.c"
        var $98=(($97+56)&4294967295); //@line 309 "bz2module.c"
        HEAP[$98]=$96; //@line 309 "bz2module.c"
        var $99=HEAP[$f_addr]; //@line 310 "bz2module.c"
        var $100=(($99+44)&4294967295); //@line 310 "bz2module.c"
        HEAP[$100]=2; //@line 310 "bz2module.c"
        __label__ = 41; break; //@line 310 "bz2module.c"
      case 28: // $bb27
        var $101=HEAP[$bzerror]; //@line 312 "bz2module.c"
        var $102=((($101))|0)!=0; //@line 312 "bz2module.c"
        if ($102) { __label__ = 29; break; } else { __label__ = 32; break; } //@line 312 "bz2module.c"
      case 29: // $bb28
        var $103=HEAP[$bzerror]; //@line 313 "bz2module.c"
        var $104=_Util_CatchBZ2Error($103); //@line 313 "bz2module.c"
        var $105=HEAP[$v]; //@line 314 "bz2module.c"
        var $106=(($105)&4294967295); //@line 314 "bz2module.c"
        var $107=HEAP[$106]; //@line 314 "bz2module.c"
        var $108=((($107) - 1)&4294967295); //@line 314 "bz2module.c"
        var $109=(($105)&4294967295); //@line 314 "bz2module.c"
        HEAP[$109]=$108; //@line 314 "bz2module.c"
        var $110=(($105)&4294967295); //@line 314 "bz2module.c"
        var $111=HEAP[$110]; //@line 314 "bz2module.c"
        var $112=((($111))|0)==0; //@line 314 "bz2module.c"
        if ($112) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 314 "bz2module.c"
      case 30: // $bb29
        var $113=HEAP[$v]; //@line 314 "bz2module.c"
        var $114=(($113+4)&4294967295); //@line 314 "bz2module.c"
        var $115=HEAP[$114]; //@line 314 "bz2module.c"
        var $116=(($115+24)&4294967295); //@line 314 "bz2module.c"
        var $117=HEAP[$116]; //@line 314 "bz2module.c"
        var $118=HEAP[$v]; //@line 314 "bz2module.c"
        FUNCTION_TABLE[$117]($118); //@line 314 "bz2module.c"
        __label__ = 31; break; //@line 314 "bz2module.c"
      case 31: // $bb30
        HEAP[$0]=0; //@line 315 "bz2module.c"
        __label__ = 44; break; //@line 315 "bz2module.c"
      case 32: // $bb31
        var $119=HEAP[$c]; //@line 317 "bz2module.c"
        var $120=reSign(($119), 8, 0)==10; //@line 317 "bz2module.c"
        if ($120) { __label__ = 41; break; } else { __label__ = 33; break; } //@line 317 "bz2module.c"
      case 33: // $bb32
        var $121=HEAP[$n_addr]; //@line 320 "bz2module.c"
        var $122=((($121))|0) > 0; //@line 320 "bz2module.c"
        if ($122) { __label__ = 41; break; } else { __label__ = 34; break; } //@line 320 "bz2module.c"
      case 34: // $bb33
        var $123=HEAP[$total_v_size]; //@line 322 "bz2module.c"
        HEAP[$used_v_size]=$123; //@line 322 "bz2module.c"
        var $124=HEAP[$total_v_size]; //@line 323 "bz2module.c"
        var $125=((($124))>>>0) >>> 2; //@line 323 "bz2module.c"
        HEAP[$increment]=$125; //@line 323 "bz2module.c"
        var $126=HEAP[$total_v_size]; //@line 324 "bz2module.c"
        var $127=HEAP[$increment]; //@line 324 "bz2module.c"
        var $128=((($126) + ($127))&4294967295); //@line 324 "bz2module.c"
        HEAP[$total_v_size]=$128; //@line 324 "bz2module.c"
        var $129=HEAP[$total_v_size]; //@line 325 "bz2module.c"
        var $130=((($129))|0) < 0; //@line 325 "bz2module.c"
        if ($130) { __label__ = 35; break; } else { __label__ = 38; break; } //@line 325 "bz2module.c"
      case 35: // $bb34
        var $131=HEAP[_PyExc_OverflowError]; //@line 326 "bz2module.c"
        _PyErr_SetString($131, ((__str7)&4294967295)); //@line 326 "bz2module.c"
        var $132=HEAP[$v]; //@line 328 "bz2module.c"
        var $133=(($132)&4294967295); //@line 328 "bz2module.c"
        var $134=HEAP[$133]; //@line 328 "bz2module.c"
        var $135=((($134) - 1)&4294967295); //@line 328 "bz2module.c"
        var $136=(($132)&4294967295); //@line 328 "bz2module.c"
        HEAP[$136]=$135; //@line 328 "bz2module.c"
        var $137=(($132)&4294967295); //@line 328 "bz2module.c"
        var $138=HEAP[$137]; //@line 328 "bz2module.c"
        var $139=((($138))|0)==0; //@line 328 "bz2module.c"
        if ($139) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 328 "bz2module.c"
      case 36: // $bb35
        var $140=HEAP[$v]; //@line 328 "bz2module.c"
        var $141=(($140+4)&4294967295); //@line 328 "bz2module.c"
        var $142=HEAP[$141]; //@line 328 "bz2module.c"
        var $143=(($142+24)&4294967295); //@line 328 "bz2module.c"
        var $144=HEAP[$143]; //@line 328 "bz2module.c"
        var $145=HEAP[$v]; //@line 328 "bz2module.c"
        FUNCTION_TABLE[$144]($145); //@line 328 "bz2module.c"
        __label__ = 37; break; //@line 328 "bz2module.c"
      case 37: // $bb36
        HEAP[$0]=0; //@line 329 "bz2module.c"
        __label__ = 44; break; //@line 329 "bz2module.c"
      case 38: // $bb37
        var $146=HEAP[$total_v_size]; //@line 331 "bz2module.c"
        var $147=__PyString_Resize($v, $146); //@line 331 "bz2module.c"
        var $148=((($147))|0) < 0; //@line 331 "bz2module.c"
        if ($148) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 331 "bz2module.c"
      case 39: // $bb38
        HEAP[$0]=0; //@line 332 "bz2module.c"
        __label__ = 44; break; //@line 332 "bz2module.c"
      case 40: // $bb39
        var $149=HEAP[$v]; //@line 333 "bz2module.c"
        var $150=$149; //@line 333 "bz2module.c"
        var $151=(($150+20)&4294967295); //@line 333 "bz2module.c"
        var $152=(($151)&4294967295); //@line 333 "bz2module.c"
        var $153=HEAP[$used_v_size]; //@line 333 "bz2module.c"
        var $154=(($152+$153)&4294967295); //@line 333 "bz2module.c"
        HEAP[$buf]=$154; //@line 333 "bz2module.c"
        var $155=HEAP[$v]; //@line 334 "bz2module.c"
        var $156=$155; //@line 334 "bz2module.c"
        var $157=(($156+20)&4294967295); //@line 334 "bz2module.c"
        var $158=(($157)&4294967295); //@line 334 "bz2module.c"
        var $159=HEAP[$total_v_size]; //@line 334 "bz2module.c"
        var $160=(($158+$159)&4294967295); //@line 334 "bz2module.c"
        HEAP[$end]=$160; //@line 334 "bz2module.c"
        __label__ = 6; break; //@line 334 "bz2module.c"
      case 41: // $bb40
        var $161=HEAP[$buf]; //@line 337 "bz2module.c"
        var $162=($161); //@line 337 "bz2module.c"
        var $163=HEAP[$v]; //@line 337 "bz2module.c"
        var $164=$163; //@line 337 "bz2module.c"
        var $165=(($164+20)&4294967295); //@line 337 "bz2module.c"
        var $166=($165); //@line 337 "bz2module.c"
        var $167=((($162) - ($166))&4294967295); //@line 337 "bz2module.c"
        HEAP[$used_v_size]=$167; //@line 337 "bz2module.c"
        var $168=HEAP[$used_v_size]; //@line 338 "bz2module.c"
        var $169=HEAP[$total_v_size]; //@line 338 "bz2module.c"
        var $170=((($168))|0)!=((($169))|0); //@line 338 "bz2module.c"
        if ($170) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 338 "bz2module.c"
      case 42: // $bb41
        var $171=HEAP[$used_v_size]; //@line 339 "bz2module.c"
        var $172=__PyString_Resize($v, $171); //@line 339 "bz2module.c"
        __label__ = 43; break; //@line 339 "bz2module.c"
      case 43: // $bb42
        var $173=HEAP[$v]; //@line 340 "bz2module.c"
        HEAP[$0]=$173; //@line 340 "bz2module.c"
        __label__ = 44; break; //@line 340 "bz2module.c"
      case 44: // $bb43
        var $174=HEAP[$0]; //@line 267 "bz2module.c"
        HEAP[$retval]=$174; //@line 267 "bz2module.c"
        __label__ = 45; break; //@line 267 "bz2module.c"
      case 45: // $return
        var $retval44=HEAP[$retval]; //@line 267 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval44; //@line 267 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_UnivNewlineRead($bzerror, $stream, $buf, $n, $f) {
    var __stackBase__  = STACKTOP; STACKTOP += 53; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 53);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $bzerror_addr=__stackBase__;
        var $stream_addr=__stackBase__+4;
        var $buf_addr=__stackBase__+8;
        var $n_addr=__stackBase__+12;
        var $f_addr=__stackBase__+16;
        var $retval=__stackBase__+20;
        var $0=__stackBase__+24;
        var $dst=__stackBase__+28;
        var $newlinetypes=__stackBase__+32;
        var $skipnextlf=__stackBase__+36;
        var $nread=__stackBase__+40;
        var $shortread=__stackBase__+44;
        var $src=__stackBase__+48;
        var $c=__stackBase__+52;
        var $_alloca_point_=0;
        HEAP[$bzerror_addr]=$bzerror;
        HEAP[$stream_addr]=$stream;
        HEAP[$buf_addr]=$buf;
        HEAP[$n_addr]=$n;
        HEAP[$f_addr]=$f;
        var $1=HEAP[$buf_addr]; //@line 349 "bz2module.c"
        HEAP[$dst]=$1; //@line 349 "bz2module.c"
        var $2=HEAP[$buf_addr]; //@line 352 "bz2module.c"
        var $3=($2)==0; //@line 352 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 352 "bz2module.c"
      case 1: // $bb
        ___assert_fail(((__str8)&4294967295), ((__str9)&4294967295), 352, ((___PRETTY_FUNCTION___8675)&4294967295)); //@line 352 "bz2module.c"
        throw "Reached an unreachable! Original .ll line: 805"; //@line 352 "bz2module.c"
      case 2: // $bb1
        var $4=HEAP[$stream_addr]; //@line 353 "bz2module.c"
        var $5=($4)==0; //@line 353 "bz2module.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 353 "bz2module.c"
      case 3: // $bb2
        ___assert_fail(((__str10)&4294967295), ((__str9)&4294967295), 353, ((___PRETTY_FUNCTION___8675)&4294967295)); //@line 353 "bz2module.c"
        throw "Reached an unreachable! Original .ll line: 814"; //@line 353 "bz2module.c"
      case 4: // $bb3
        var $6=HEAP[$f_addr]; //@line 355 "bz2module.c"
        var $7=(($6+28)&4294967295); //@line 355 "bz2module.c"
        var $8=HEAP[$7]; //@line 355 "bz2module.c"
        var $9=((($8))|0)==0; //@line 355 "bz2module.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 355 "bz2module.c"
      case 5: // $bb4
        var $10=HEAP[$n_addr]; //@line 356 "bz2module.c"
        var $11=HEAP[$bzerror_addr]; //@line 356 "bz2module.c"
        var $12=HEAP[$stream_addr]; //@line 356 "bz2module.c"
        var $13=HEAP[$buf_addr]; //@line 356 "bz2module.c"
        var $14=_BZ2_bzRead($11, $12, $13, $10); //@line 356 "bz2module.c"
        HEAP[$0]=$14; //@line 356 "bz2module.c"
        __label__ = 28; break; //@line 356 "bz2module.c"
      case 6: // $bb5
        var $15=HEAP[$f_addr]; //@line 358 "bz2module.c"
        var $16=(($15+32)&4294967295); //@line 358 "bz2module.c"
        var $17=HEAP[$16]; //@line 358 "bz2module.c"
        HEAP[$newlinetypes]=$17; //@line 358 "bz2module.c"
        var $18=HEAP[$f_addr]; //@line 359 "bz2module.c"
        var $19=(($18+36)&4294967295); //@line 359 "bz2module.c"
        var $20=HEAP[$19]; //@line 359 "bz2module.c"
        HEAP[$skipnextlf]=$20; //@line 359 "bz2module.c"
        __label__ = 26; break; //@line 359 "bz2module.c"
      case 7: // $bb6
        var $21=HEAP[$dst]; //@line 367 "bz2module.c"
        HEAP[$src]=$21; //@line 367 "bz2module.c"
        var $22=HEAP[$n_addr]; //@line 369 "bz2module.c"
        var $23=HEAP[$bzerror_addr]; //@line 369 "bz2module.c"
        var $24=HEAP[$stream_addr]; //@line 369 "bz2module.c"
        var $25=HEAP[$dst]; //@line 369 "bz2module.c"
        var $26=_BZ2_bzRead($23, $24, $25, $22); //@line 369 "bz2module.c"
        HEAP[$nread]=$26; //@line 369 "bz2module.c"
        var $27=HEAP[$nread]; //@line 370 "bz2module.c"
        var $28=HEAP[$n_addr]; //@line 370 "bz2module.c"
        var $29=((($27))>>>0) > ((($28))>>>0); //@line 370 "bz2module.c"
        if ($29) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 370 "bz2module.c"
      case 8: // $bb7
        ___assert_fail(((__str11)&4294967295), ((__str9)&4294967295), 370, ((___PRETTY_FUNCTION___8675)&4294967295)); //@line 370 "bz2module.c"
        throw "Reached an unreachable! Original .ll line: 862"; //@line 370 "bz2module.c"
      case 9: // $bb8
        var $30=HEAP[$n_addr]; //@line 371 "bz2module.c"
        var $31=HEAP[$nread]; //@line 371 "bz2module.c"
        var $32=((($30) - ($31))&4294967295); //@line 371 "bz2module.c"
        HEAP[$n_addr]=$32; //@line 371 "bz2module.c"
        var $33=HEAP[$n_addr]; //@line 372 "bz2module.c"
        var $34=((($33))|0)!=0; //@line 372 "bz2module.c"
        var $35=unSign(($34), 1, 0); //@line 372 "bz2module.c"
        HEAP[$shortread]=$35; //@line 372 "bz2module.c"
        __label__ = 20; break; //@line 372 "bz2module.c"
      case 10: // $bb9
        var $36=HEAP[$src]; //@line 374 "bz2module.c"
        var $37=HEAP[$36]; //@line 374 "bz2module.c"
        HEAP[$c]=$37; //@line 374 "bz2module.c"
        var $38=HEAP[$src]; //@line 374 "bz2module.c"
        var $39=(($38+1)&4294967295); //@line 374 "bz2module.c"
        HEAP[$src]=$39; //@line 374 "bz2module.c"
        var $40=HEAP[$c]; //@line 375 "bz2module.c"
        var $41=reSign(($40), 8, 0)==13; //@line 375 "bz2module.c"
        if ($41) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 375 "bz2module.c"
      case 11: // $bb10
        var $42=HEAP[$dst]; //@line 377 "bz2module.c"
        HEAP[$42]=10; //@line 377 "bz2module.c"
        var $43=HEAP[$dst]; //@line 377 "bz2module.c"
        var $44=(($43+1)&4294967295); //@line 377 "bz2module.c"
        HEAP[$dst]=$44; //@line 377 "bz2module.c"
        HEAP[$skipnextlf]=1; //@line 378 "bz2module.c"
        __label__ = 20; break; //@line 378 "bz2module.c"
      case 12: // $bb11
        var $45=HEAP[$skipnextlf]; //@line 380 "bz2module.c"
        var $46=((($45))|0)==0; //@line 380 "bz2module.c"
        if ($46) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 380 "bz2module.c"
      case 13: // $bb12
        var $47=HEAP[$c]; //@line 380 "bz2module.c"
        var $48=reSign(($47), 8, 0)!=10; //@line 380 "bz2module.c"
        if ($48) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 380 "bz2module.c"
      case 14: // $bb13
        HEAP[$skipnextlf]=0; //@line 382 "bz2module.c"
        var $49=HEAP[$newlinetypes]; //@line 383 "bz2module.c"
        var $50=($49) | 4; //@line 383 "bz2module.c"
        HEAP[$newlinetypes]=$50; //@line 383 "bz2module.c"
        var $51=HEAP[$n_addr]; //@line 384 "bz2module.c"
        var $52=((($51) + 1)&4294967295); //@line 384 "bz2module.c"
        HEAP[$n_addr]=$52; //@line 384 "bz2module.c"
        __label__ = 20; break; //@line 384 "bz2module.c"
      case 15: // $bb14
        var $53=HEAP[$c]; //@line 391 "bz2module.c"
        var $54=reSign(($53), 8, 0)==10; //@line 391 "bz2module.c"
        if ($54) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 391 "bz2module.c"
      case 16: // $bb15
        var $55=HEAP[$newlinetypes]; //@line 392 "bz2module.c"
        var $56=($55) | 2; //@line 392 "bz2module.c"
        HEAP[$newlinetypes]=$56; //@line 392 "bz2module.c"
        __label__ = 19; break; //@line 392 "bz2module.c"
      case 17: // $bb16
        var $57=HEAP[$skipnextlf]; //@line 393 "bz2module.c"
        var $58=((($57))|0)!=0; //@line 393 "bz2module.c"
        if ($58) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 393 "bz2module.c"
      case 18: // $bb17
        var $59=HEAP[$newlinetypes]; //@line 394 "bz2module.c"
        var $60=($59) | 1; //@line 394 "bz2module.c"
        HEAP[$newlinetypes]=$60; //@line 394 "bz2module.c"
        __label__ = 19; break; //@line 394 "bz2module.c"
      case 19: // $bb18
        var $61=HEAP[$dst]; //@line 395 "bz2module.c"
        var $62=HEAP[$c]; //@line 395 "bz2module.c"
        HEAP[$61]=$62; //@line 395 "bz2module.c"
        var $63=HEAP[$dst]; //@line 395 "bz2module.c"
        var $64=(($63+1)&4294967295); //@line 395 "bz2module.c"
        HEAP[$dst]=$64; //@line 395 "bz2module.c"
        HEAP[$skipnextlf]=0; //@line 396 "bz2module.c"
        __label__ = 20; break; //@line 396 "bz2module.c"
      case 20: // $bb19
        var $65=HEAP[$nread]; //@line 373 "bz2module.c"
        var $66=((($65) - 1)&4294967295); //@line 373 "bz2module.c"
        HEAP[$nread]=$66; //@line 373 "bz2module.c"
        var $67=HEAP[$nread]; //@line 373 "bz2module.c"
        var $68=((($67))|0)!=-1; //@line 373 "bz2module.c"
        if ($68) { __label__ = 10; break; } else { __label__ = 21; break; } //@line 373 "bz2module.c"
      case 21: // $bb20
        var $69=HEAP[$shortread]; //@line 399 "bz2module.c"
        var $70=((($69))|0)!=0; //@line 399 "bz2module.c"
        if ($70) { __label__ = 22; break; } else { __label__ = 26; break; } //@line 399 "bz2module.c"
      case 22: // $bb21
        var $71=HEAP[$skipnextlf]; //@line 401 "bz2module.c"
        var $72=((($71))|0)!=0; //@line 401 "bz2module.c"
        if ($72) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 401 "bz2module.c"
      case 23: // $bb22
        var $73=HEAP[$bzerror_addr]; //@line 401 "bz2module.c"
        var $74=HEAP[$73]; //@line 401 "bz2module.c"
        var $75=((($74))|0)==4; //@line 401 "bz2module.c"
        if ($75) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 401 "bz2module.c"
      case 24: // $bb23
        var $76=HEAP[$newlinetypes]; //@line 402 "bz2module.c"
        var $77=($76) | 1; //@line 402 "bz2module.c"
        HEAP[$newlinetypes]=$77; //@line 402 "bz2module.c"
        __label__ = 25; break; //@line 402 "bz2module.c"
      case 25: // $bb24
        __label__ = 27; break; //@line 402 "bz2module.c"
      case 26: // $bb25
        var $78=HEAP[$n_addr]; //@line 364 "bz2module.c"
        var $79=((($78))|0)!=0; //@line 364 "bz2module.c"
        if ($79) { __label__ = 7; break; } else { __label__ = 27; break; } //@line 364 "bz2module.c"
      case 27: // $bb26
        var $80=HEAP[$f_addr]; //@line 406 "bz2module.c"
        var $81=(($80+32)&4294967295); //@line 406 "bz2module.c"
        var $82=HEAP[$newlinetypes]; //@line 406 "bz2module.c"
        HEAP[$81]=$82; //@line 406 "bz2module.c"
        var $83=HEAP[$f_addr]; //@line 407 "bz2module.c"
        var $84=(($83+36)&4294967295); //@line 407 "bz2module.c"
        var $85=HEAP[$skipnextlf]; //@line 407 "bz2module.c"
        HEAP[$84]=$85; //@line 407 "bz2module.c"
        var $86=HEAP[$dst]; //@line 408 "bz2module.c"
        var $87=($86); //@line 408 "bz2module.c"
        var $88=HEAP[$buf_addr]; //@line 408 "bz2module.c"
        var $89=($88); //@line 408 "bz2module.c"
        var $90=((($87) - ($89))&4294967295); //@line 408 "bz2module.c"
        HEAP[$0]=$90; //@line 408 "bz2module.c"
        __label__ = 28; break; //@line 408 "bz2module.c"
      case 28: // $bb27
        var $91=HEAP[$0]; //@line 356 "bz2module.c"
        HEAP[$retval]=$91; //@line 356 "bz2module.c"
        __label__ = 29; break; //@line 356 "bz2module.c"
      case 29: // $return
        var $retval28=HEAP[$retval]; //@line 356 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval28; //@line 356 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_DropReadAhead($f) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $f_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$f_addr]=$f;
        var $0=HEAP[$f_addr]; //@line 415 "bz2module.c"
        var $1=(($0+12)&4294967295); //@line 415 "bz2module.c"
        var $2=HEAP[$1]; //@line 415 "bz2module.c"
        var $3=($2)!=0; //@line 415 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 415 "bz2module.c"
      case 1: // $bb
        var $4=HEAP[$f_addr]; //@line 416 "bz2module.c"
        var $5=(($4+12)&4294967295); //@line 416 "bz2module.c"
        var $6=HEAP[$5]; //@line 416 "bz2module.c"
        _PyMem_Free($6); //@line 416 "bz2module.c"
        var $7=HEAP[$f_addr]; //@line 417 "bz2module.c"
        var $8=(($7+12)&4294967295); //@line 417 "bz2module.c"
        HEAP[$8]=0; //@line 417 "bz2module.c"
        __label__ = 2; break; //@line 417 "bz2module.c"
      case 2: // $bb1
        __label__ = 3; break; //@line 419 "bz2module.c"
      case 3: // $return
        STACKTOP = __stackBase__;
        return; //@line 419 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_ReadAhead($f, $bufsize) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $f_addr=__stackBase__;
        var $bufsize_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $chunksize=__stackBase__+16;
        var $bzerror=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$f_addr]=$f;
        HEAP[$bufsize_addr]=$bufsize;
        var $1=HEAP[$f_addr]; //@line 428 "bz2module.c"
        var $2=(($1+12)&4294967295); //@line 428 "bz2module.c"
        var $3=HEAP[$2]; //@line 428 "bz2module.c"
        var $4=($3)!=0; //@line 428 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 428 "bz2module.c"
      case 1: // $bb
        var $5=HEAP[$f_addr]; //@line 429 "bz2module.c"
        var $6=(($5+16)&4294967295); //@line 429 "bz2module.c"
        var $7=HEAP[$6]; //@line 429 "bz2module.c"
        var $8=($7); //@line 429 "bz2module.c"
        var $9=HEAP[$f_addr]; //@line 429 "bz2module.c"
        var $10=(($9+20)&4294967295); //@line 429 "bz2module.c"
        var $11=HEAP[$10]; //@line 429 "bz2module.c"
        var $12=($11); //@line 429 "bz2module.c"
        var $13=((($8) - ($12))&4294967295); //@line 429 "bz2module.c"
        var $14=((($13))|0) > 0; //@line 429 "bz2module.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 429 "bz2module.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 430 "bz2module.c"
        __label__ = 13; break; //@line 430 "bz2module.c"
      case 3: // $bb2
        var $15=HEAP[$f_addr]; //@line 432 "bz2module.c"
        _Util_DropReadAhead($15); //@line 432 "bz2module.c"
        __label__ = 4; break; //@line 432 "bz2module.c"
      case 4: // $bb3
        var $16=HEAP[$f_addr]; //@line 434 "bz2module.c"
        var $17=(($16+44)&4294967295); //@line 434 "bz2module.c"
        var $18=HEAP[$17]; //@line 434 "bz2module.c"
        var $19=((($18))|0)==2; //@line 434 "bz2module.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 434 "bz2module.c"
      case 5: // $bb4
        var $20=HEAP[$f_addr]; //@line 435 "bz2module.c"
        var $21=(($20+12)&4294967295); //@line 435 "bz2module.c"
        var $22=HEAP[$21]; //@line 435 "bz2module.c"
        var $23=HEAP[$f_addr]; //@line 435 "bz2module.c"
        var $24=(($23+20)&4294967295); //@line 435 "bz2module.c"
        HEAP[$24]=$22; //@line 435 "bz2module.c"
        var $25=HEAP[$f_addr]; //@line 436 "bz2module.c"
        var $26=(($25+12)&4294967295); //@line 436 "bz2module.c"
        var $27=HEAP[$26]; //@line 436 "bz2module.c"
        var $28=HEAP[$f_addr]; //@line 436 "bz2module.c"
        var $29=(($28+16)&4294967295); //@line 436 "bz2module.c"
        HEAP[$29]=$27; //@line 436 "bz2module.c"
        HEAP[$0]=0; //@line 437 "bz2module.c"
        __label__ = 13; break; //@line 437 "bz2module.c"
      case 6: // $bb5
        var $30=HEAP[$bufsize_addr]; //@line 439 "bz2module.c"
        var $31=_PyMem_Malloc($30); //@line 439 "bz2module.c"
        var $32=HEAP[$f_addr]; //@line 439 "bz2module.c"
        var $33=(($32+12)&4294967295); //@line 439 "bz2module.c"
        HEAP[$33]=$31; //@line 439 "bz2module.c"
        var $34=HEAP[$f_addr]; //@line 439 "bz2module.c"
        var $35=(($34+12)&4294967295); //@line 439 "bz2module.c"
        var $36=HEAP[$35]; //@line 439 "bz2module.c"
        var $37=($36)==0; //@line 439 "bz2module.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 439 "bz2module.c"
      case 7: // $bb6
        var $38=_PyErr_NoMemory(); //@line 440 "bz2module.c"
        HEAP[$0]=-1; //@line 441 "bz2module.c"
        __label__ = 13; break; //@line 441 "bz2module.c"
      case 8: // $bb7
        var $39=HEAP[$bufsize_addr]; //@line 444 "bz2module.c"
        var $40=HEAP[$f_addr]; //@line 444 "bz2module.c"
        var $41=(($40+12)&4294967295); //@line 444 "bz2module.c"
        var $42=HEAP[$41]; //@line 444 "bz2module.c"
        var $43=HEAP[$f_addr]; //@line 444 "bz2module.c"
        var $44=(($43+40)&4294967295); //@line 444 "bz2module.c"
        var $45=HEAP[$44]; //@line 444 "bz2module.c"
        var $46=HEAP[$f_addr]; //@line 444 "bz2module.c"
        var $47=_Util_UnivNewlineRead($bzerror, $45, $42, $39, $46); //@line 444 "bz2module.c"
        HEAP[$chunksize]=$47; //@line 444 "bz2module.c"
        var $48=HEAP[$f_addr]; //@line 447 "bz2module.c"
        var $49=(($48+48)&4294967295); //@line 447 "bz2module.c"
        var $50=HEAP[$49]; //@line 447 "bz2module.c"
        var $51=HEAP[$chunksize]; //@line 447 "bz2module.c"
        var $52=((($51))|0); //@line 447 "bz2module.c"
        var $53=($50) + ($52); //@line 447 "bz2module.c"
        var $54=HEAP[$f_addr]; //@line 447 "bz2module.c"
        var $55=(($54+48)&4294967295); //@line 447 "bz2module.c"
        HEAP[$55]=$53; //@line 447 "bz2module.c"
        var $56=HEAP[$bzerror]; //@line 448 "bz2module.c"
        var $57=((($56))|0)==4; //@line 448 "bz2module.c"
        if ($57) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 448 "bz2module.c"
      case 9: // $bb8
        var $58=HEAP[$f_addr]; //@line 449 "bz2module.c"
        var $59=(($58+48)&4294967295); //@line 449 "bz2module.c"
        var $60=HEAP[$59]; //@line 449 "bz2module.c"
        var $61=HEAP[$f_addr]; //@line 449 "bz2module.c"
        var $62=(($61+56)&4294967295); //@line 449 "bz2module.c"
        HEAP[$62]=$60; //@line 449 "bz2module.c"
        var $63=HEAP[$f_addr]; //@line 450 "bz2module.c"
        var $64=(($63+44)&4294967295); //@line 450 "bz2module.c"
        HEAP[$64]=2; //@line 450 "bz2module.c"
        __label__ = 12; break; //@line 450 "bz2module.c"
      case 10: // $bb9
        var $65=HEAP[$bzerror]; //@line 451 "bz2module.c"
        var $66=((($65))|0)!=0; //@line 451 "bz2module.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 451 "bz2module.c"
      case 11: // $bb10
        var $67=HEAP[$bzerror]; //@line 452 "bz2module.c"
        var $68=_Util_CatchBZ2Error($67); //@line 452 "bz2module.c"
        var $69=HEAP[$f_addr]; //@line 453 "bz2module.c"
        _Util_DropReadAhead($69); //@line 453 "bz2module.c"
        HEAP[$0]=-1; //@line 454 "bz2module.c"
        __label__ = 13; break; //@line 454 "bz2module.c"
      case 12: // $bb11
        var $70=HEAP[$f_addr]; //@line 456 "bz2module.c"
        var $71=(($70+12)&4294967295); //@line 456 "bz2module.c"
        var $72=HEAP[$71]; //@line 456 "bz2module.c"
        var $73=HEAP[$f_addr]; //@line 456 "bz2module.c"
        var $74=(($73+20)&4294967295); //@line 456 "bz2module.c"
        HEAP[$74]=$72; //@line 456 "bz2module.c"
        var $75=HEAP[$f_addr]; //@line 457 "bz2module.c"
        var $76=(($75+12)&4294967295); //@line 457 "bz2module.c"
        var $77=HEAP[$76]; //@line 457 "bz2module.c"
        var $78=HEAP[$chunksize]; //@line 457 "bz2module.c"
        var $79=(($77+$78)&4294967295); //@line 457 "bz2module.c"
        var $80=HEAP[$f_addr]; //@line 457 "bz2module.c"
        var $81=(($80+16)&4294967295); //@line 457 "bz2module.c"
        HEAP[$81]=$79; //@line 457 "bz2module.c"
        HEAP[$0]=0; //@line 458 "bz2module.c"
        __label__ = 13; break; //@line 458 "bz2module.c"
      case 13: // $bb12
        var $82=HEAP[$0]; //@line 430 "bz2module.c"
        HEAP[$retval]=$82; //@line 430 "bz2module.c"
        __label__ = 14; break; //@line 430 "bz2module.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 430 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 430 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_ReadAheadGetLineSkip($f, $skip, $bufsize) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $f_addr=__stackBase__;
        var $skip_addr=__stackBase__+4;
        var $bufsize_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $s=__stackBase__+20;
        var $bufptr=__stackBase__+24;
        var $buf=__stackBase__+28;
        var $len=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$f_addr]=$f;
        HEAP[$skip_addr]=$skip;
        HEAP[$bufsize_addr]=$bufsize;
        var $1=HEAP[$f_addr]; //@line 471 "bz2module.c"
        var $2=(($1+12)&4294967295); //@line 471 "bz2module.c"
        var $3=HEAP[$2]; //@line 471 "bz2module.c"
        var $4=($3)==0; //@line 471 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 471 "bz2module.c"
      case 1: // $bb
        var $5=HEAP[$f_addr]; //@line 472 "bz2module.c"
        var $6=HEAP[$bufsize_addr]; //@line 472 "bz2module.c"
        var $7=_Util_ReadAhead($5, $6); //@line 472 "bz2module.c"
        var $8=((($7))|0) < 0; //@line 472 "bz2module.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 472 "bz2module.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 473 "bz2module.c"
        __label__ = 15; break; //@line 473 "bz2module.c"
      case 3: // $bb2
        var $9=HEAP[$f_addr]; //@line 475 "bz2module.c"
        var $10=(($9+16)&4294967295); //@line 475 "bz2module.c"
        var $11=HEAP[$10]; //@line 475 "bz2module.c"
        var $12=($11); //@line 475 "bz2module.c"
        var $13=HEAP[$f_addr]; //@line 475 "bz2module.c"
        var $14=(($13+20)&4294967295); //@line 475 "bz2module.c"
        var $15=HEAP[$14]; //@line 475 "bz2module.c"
        var $16=($15); //@line 475 "bz2module.c"
        var $17=((($12) - ($16))&4294967295); //@line 475 "bz2module.c"
        HEAP[$len]=$17; //@line 475 "bz2module.c"
        var $18=HEAP[$len]; //@line 476 "bz2module.c"
        var $19=((($18))|0)==0; //@line 476 "bz2module.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 476 "bz2module.c"
      case 4: // $bb3
        var $20=HEAP[$skip_addr]; //@line 477 "bz2module.c"
        var $21=_PyString_FromStringAndSize(0, $20); //@line 477 "bz2module.c"
        var $22=$21; //@line 477 "bz2module.c"
        HEAP[$0]=$22; //@line 477 "bz2module.c"
        __label__ = 15; break; //@line 477 "bz2module.c"
      case 5: // $bb4
        var $23=HEAP[$len]; //@line 479 "bz2module.c"
        var $24=HEAP[$f_addr]; //@line 479 "bz2module.c"
        var $25=(($24+20)&4294967295); //@line 479 "bz2module.c"
        var $26=HEAP[$25]; //@line 479 "bz2module.c"
        var $27=_memchr($26, 10, $23); //@line 479 "bz2module.c"
        HEAP[$bufptr]=$27; //@line 479 "bz2module.c"
        var $28=HEAP[$bufptr]; //@line 480 "bz2module.c"
        var $29=($28)!=0; //@line 480 "bz2module.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 480 "bz2module.c"
      case 6: // $bb5
        var $30=HEAP[$bufptr]; //@line 481 "bz2module.c"
        var $31=(($30+1)&4294967295); //@line 481 "bz2module.c"
        HEAP[$bufptr]=$31; //@line 481 "bz2module.c"
        var $32=HEAP[$bufptr]; //@line 482 "bz2module.c"
        var $33=($32); //@line 482 "bz2module.c"
        var $34=HEAP[$f_addr]; //@line 482 "bz2module.c"
        var $35=(($34+20)&4294967295); //@line 482 "bz2module.c"
        var $36=HEAP[$35]; //@line 482 "bz2module.c"
        var $37=($36); //@line 482 "bz2module.c"
        var $38=((($33) - ($37))&4294967295); //@line 482 "bz2module.c"
        HEAP[$len]=$38; //@line 482 "bz2module.c"
        var $39=HEAP[$skip_addr]; //@line 483 "bz2module.c"
        var $40=HEAP[$len]; //@line 483 "bz2module.c"
        var $41=((($39) + ($40))&4294967295); //@line 483 "bz2module.c"
        var $42=_PyString_FromStringAndSize(0, $41); //@line 483 "bz2module.c"
        var $43=$42; //@line 483 "bz2module.c"
        HEAP[$s]=$43; //@line 483 "bz2module.c"
        var $44=HEAP[$s]; //@line 485 "bz2module.c"
        var $45=($44)==0; //@line 485 "bz2module.c"
        if ($45) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 485 "bz2module.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 486 "bz2module.c"
        __label__ = 15; break; //@line 486 "bz2module.c"
      case 8: // $bb7
        var $46=HEAP[$len]; //@line 487 "bz2module.c"
        var $47=HEAP[$f_addr]; //@line 487 "bz2module.c"
        var $48=(($47+20)&4294967295); //@line 487 "bz2module.c"
        var $49=HEAP[$48]; //@line 487 "bz2module.c"
        var $50=HEAP[$s]; //@line 487 "bz2module.c"
        var $51=(($50+20)&4294967295); //@line 487 "bz2module.c"
        var $52=(($51)&4294967295); //@line 487 "bz2module.c"
        var $53=HEAP[$skip_addr]; //@line 487 "bz2module.c"
        var $54=(($52+$53)&4294967295); //@line 487 "bz2module.c"
        _llvm_memcpy_p0i8_p0i8_i32($54, $49, $46, 1, 0); //@line 487 "bz2module.c"
        var $55=HEAP[$f_addr]; //@line 488 "bz2module.c"
        var $56=(($55+20)&4294967295); //@line 488 "bz2module.c"
        var $57=HEAP[$bufptr]; //@line 488 "bz2module.c"
        HEAP[$56]=$57; //@line 488 "bz2module.c"
        var $58=HEAP[$f_addr]; //@line 489 "bz2module.c"
        var $59=(($58+16)&4294967295); //@line 489 "bz2module.c"
        var $60=HEAP[$59]; //@line 489 "bz2module.c"
        var $61=HEAP[$bufptr]; //@line 489 "bz2module.c"
        var $62=($60)==($61); //@line 489 "bz2module.c"
        if ($62) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 489 "bz2module.c"
      case 9: // $bb8
        var $63=HEAP[$f_addr]; //@line 490 "bz2module.c"
        _Util_DropReadAhead($63); //@line 490 "bz2module.c"
        __label__ = 10; break; //@line 490 "bz2module.c"
      case 10: // $bb9
        __label__ = 14; break; //@line 490 "bz2module.c"
      case 11: // $bb10
        var $64=HEAP[$f_addr]; //@line 492 "bz2module.c"
        var $65=(($64+20)&4294967295); //@line 492 "bz2module.c"
        var $66=HEAP[$65]; //@line 492 "bz2module.c"
        HEAP[$bufptr]=$66; //@line 492 "bz2module.c"
        var $67=HEAP[$f_addr]; //@line 493 "bz2module.c"
        var $68=(($67+12)&4294967295); //@line 493 "bz2module.c"
        var $69=HEAP[$68]; //@line 493 "bz2module.c"
        HEAP[$buf]=$69; //@line 493 "bz2module.c"
        var $70=HEAP[$f_addr]; //@line 494 "bz2module.c"
        var $71=(($70+12)&4294967295); //@line 494 "bz2module.c"
        HEAP[$71]=0; //@line 494 "bz2module.c"
        var $72=HEAP[$bufsize_addr]; //@line 495 "bz2module.c"
        var $73=((($72))|0) >> 2; //@line 495 "bz2module.c"
        var $74=HEAP[$bufsize_addr]; //@line 495 "bz2module.c"
        var $75=((($73) + ($74))&4294967295); //@line 495 "bz2module.c"
        var $76=HEAP[$skip_addr]; //@line 495 "bz2module.c"
        var $77=HEAP[$len]; //@line 495 "bz2module.c"
        var $78=((($76) + ($77))&4294967295); //@line 495 "bz2module.c"
        var $79=HEAP[$f_addr]; //@line 495 "bz2module.c"
        var $80=_Util_ReadAheadGetLineSkip($79, $78, $75); //@line 495 "bz2module.c"
        HEAP[$s]=$80; //@line 495 "bz2module.c"
        var $81=HEAP[$s]; //@line 497 "bz2module.c"
        var $82=($81)==0; //@line 497 "bz2module.c"
        if ($82) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 497 "bz2module.c"
      case 12: // $bb11
        var $83=HEAP[$buf]; //@line 498 "bz2module.c"
        _PyMem_Free($83); //@line 498 "bz2module.c"
        HEAP[$0]=0; //@line 499 "bz2module.c"
        __label__ = 15; break; //@line 499 "bz2module.c"
      case 13: // $bb12
        var $84=HEAP[$len]; //@line 501 "bz2module.c"
        var $85=HEAP[$s]; //@line 501 "bz2module.c"
        var $86=(($85+20)&4294967295); //@line 501 "bz2module.c"
        var $87=(($86)&4294967295); //@line 501 "bz2module.c"
        var $88=HEAP[$skip_addr]; //@line 501 "bz2module.c"
        var $89=(($87+$88)&4294967295); //@line 501 "bz2module.c"
        var $90=HEAP[$bufptr]; //@line 501 "bz2module.c"
        _llvm_memcpy_p0i8_p0i8_i32($89, $90, $84, 1, 0); //@line 501 "bz2module.c"
        var $91=HEAP[$buf]; //@line 502 "bz2module.c"
        _PyMem_Free($91); //@line 502 "bz2module.c"
        __label__ = 14; break; //@line 502 "bz2module.c"
      case 14: // $bb13
        var $92=HEAP[$s]; //@line 504 "bz2module.c"
        HEAP[$0]=$92; //@line 504 "bz2module.c"
        __label__ = 15; break; //@line 504 "bz2module.c"
      case 15: // $bb14
        var $93=HEAP[$0]; //@line 473 "bz2module.c"
        HEAP[$retval]=$93; //@line 473 "bz2module.c"
        __label__ = 16; break; //@line 473 "bz2module.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 473 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 473 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_read($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $bytesrequested=__stackBase__+16;
        var $bytesread=__stackBase__+20;
        var $buffersize=__stackBase__+24;
        var $chunksize=__stackBase__+28;
        var $bzerror=__stackBase__+32;
        var $ret=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$bytesrequested]=-1; //@line 521 "bz2module.c"
        HEAP[$ret]=0; //@line 524 "bz2module.c"
        var $1=HEAP[$args_addr]; //@line 526 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, ((__str12)&4294967295), $bytesrequested); //@line 526 "bz2module.c"
        var $3=((($2))|0)==0; //@line 526 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 526 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 527 "bz2module.c"
        __label__ = 26; break; //@line 527 "bz2module.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 530 "bz2module.c"
        var $5=(($4+44)&4294967295); //@line 530 "bz2module.c"
        var $6=HEAP[$5]; //@line 530 "bz2module.c"
        if ($6 == 0) {
          __label__ = 5; break;
        }
        else if ($6 == 1) {
          __label__ = 3; break;
        }
        else if ($6 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 3: // $bb2
        var $7=HEAP[$self_addr]; //@line 547 "bz2module.c"
        var $8=_check_iterbuffered($7); //@line 547 "bz2module.c"
        var $9=((($8))|0)!=0; //@line 547 "bz2module.c"
        if ($9) { __label__ = 25; break; } else { __label__ = 7; break; } //@line 547 "bz2module.c"
      case 4: // $bb3
        var $10=_PyString_FromString(((__str13)&4294967295)); //@line 534 "bz2module.c"
        HEAP[$ret]=$10; //@line 534 "bz2module.c"
        __label__ = 25; break; //@line 534 "bz2module.c"
      case 5: // $bb4
        var $11=HEAP[_PyExc_ValueError]; //@line 537 "bz2module.c"
        _PyErr_SetString($11, ((__str14)&4294967295)); //@line 537 "bz2module.c"
        __label__ = 25; break; //@line 537 "bz2module.c"
      case 6: // $bb5
        var $12=HEAP[_PyExc_IOError]; //@line 541 "bz2module.c"
        _PyErr_SetString($12, ((__str15)&4294967295)); //@line 541 "bz2module.c"
        __label__ = 25; break; //@line 541 "bz2module.c"
      case 7: // $bb6
        var $13=HEAP[$bytesrequested]; //@line 550 "bz2module.c"
        var $14=((($13))|0) < 0; //@line 550 "bz2module.c"
        if ($14) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 550 "bz2module.c"
      case 8: // $bb7
        var $15=_Util_NewBufferSize(0); //@line 551 "bz2module.c"
        HEAP[$buffersize]=$15; //@line 551 "bz2module.c"
        __label__ = 10; break; //@line 551 "bz2module.c"
      case 9: // $bb8
        var $16=HEAP[$bytesrequested]; //@line 553 "bz2module.c"
        HEAP[$buffersize]=$16; //@line 553 "bz2module.c"
        __label__ = 10; break; //@line 553 "bz2module.c"
      case 10: // $bb9
        var $17=HEAP[$buffersize]; //@line 554 "bz2module.c"
        var $18=((($17))|0) < 0; //@line 554 "bz2module.c"
        if ($18) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 554 "bz2module.c"
      case 11: // $bb10
        var $19=HEAP[_PyExc_OverflowError]; //@line 555 "bz2module.c"
        _PyErr_SetString($19, ((__str16)&4294967295)); //@line 555 "bz2module.c"
        __label__ = 25; break; //@line 555 "bz2module.c"
      case 12: // $bb11
        var $20=HEAP[$buffersize]; //@line 560 "bz2module.c"
        var $21=_PyString_FromStringAndSize(0, $20); //@line 560 "bz2module.c"
        HEAP[$ret]=$21; //@line 560 "bz2module.c"
        var $22=HEAP[$ret]; //@line 561 "bz2module.c"
        var $23=($22)==0; //@line 561 "bz2module.c"
        if ($23) { __label__ = 25; break; } else { __label__ = 13; break; } //@line 561 "bz2module.c"
      case 13: // $bb12
        HEAP[$bytesread]=0; //@line 563 "bz2module.c"
        __label__ = 14; break; //@line 563 "bz2module.c"
      case 14: // $bb13
        var $24=HEAP[$buffersize]; //@line 567 "bz2module.c"
        var $25=HEAP[$bytesread]; //@line 567 "bz2module.c"
        var $26=((($24) - ($25))&4294967295); //@line 567 "bz2module.c"
        var $27=HEAP[$ret]; //@line 567 "bz2module.c"
        var $28=$27; //@line 567 "bz2module.c"
        var $29=(($28+20)&4294967295); //@line 567 "bz2module.c"
        var $30=(($29)&4294967295); //@line 567 "bz2module.c"
        var $31=HEAP[$bytesread]; //@line 567 "bz2module.c"
        var $32=(($30+$31)&4294967295); //@line 567 "bz2module.c"
        var $33=HEAP[$self_addr]; //@line 567 "bz2module.c"
        var $34=(($33+40)&4294967295); //@line 567 "bz2module.c"
        var $35=HEAP[$34]; //@line 567 "bz2module.c"
        var $36=HEAP[$self_addr]; //@line 567 "bz2module.c"
        var $37=_Util_UnivNewlineRead($bzerror, $35, $32, $26, $36); //@line 567 "bz2module.c"
        HEAP[$chunksize]=$37; //@line 567 "bz2module.c"
        var $38=HEAP[$self_addr]; //@line 571 "bz2module.c"
        var $39=(($38+48)&4294967295); //@line 571 "bz2module.c"
        var $40=HEAP[$39]; //@line 571 "bz2module.c"
        var $41=HEAP[$chunksize]; //@line 571 "bz2module.c"
        var $42=((($41))>>>0); //@line 571 "bz2module.c"
        var $43=($40) + ($42); //@line 571 "bz2module.c"
        var $44=HEAP[$self_addr]; //@line 571 "bz2module.c"
        var $45=(($44+48)&4294967295); //@line 571 "bz2module.c"
        HEAP[$45]=$43; //@line 571 "bz2module.c"
        var $46=HEAP[$bytesread]; //@line 573 "bz2module.c"
        var $47=HEAP[$chunksize]; //@line 573 "bz2module.c"
        var $48=((($46) + ($47))&4294967295); //@line 573 "bz2module.c"
        HEAP[$bytesread]=$48; //@line 573 "bz2module.c"
        var $49=HEAP[$bzerror]; //@line 574 "bz2module.c"
        var $50=((($49))|0)==4; //@line 574 "bz2module.c"
        if ($50) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 574 "bz2module.c"
      case 15: // $bb14
        var $51=HEAP[$self_addr]; //@line 575 "bz2module.c"
        var $52=(($51+48)&4294967295); //@line 575 "bz2module.c"
        var $53=HEAP[$52]; //@line 575 "bz2module.c"
        var $54=HEAP[$self_addr]; //@line 575 "bz2module.c"
        var $55=(($54+56)&4294967295); //@line 575 "bz2module.c"
        HEAP[$55]=$53; //@line 575 "bz2module.c"
        var $56=HEAP[$self_addr]; //@line 576 "bz2module.c"
        var $57=(($56+44)&4294967295); //@line 576 "bz2module.c"
        HEAP[$57]=2; //@line 576 "bz2module.c"
        __label__ = 23; break; //@line 576 "bz2module.c"
      case 16: // $bb15
        var $58=HEAP[$bzerror]; //@line 578 "bz2module.c"
        var $59=((($58))|0)!=0; //@line 578 "bz2module.c"
        if ($59) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 578 "bz2module.c"
      case 17: // $bb16
        var $60=HEAP[$bzerror]; //@line 579 "bz2module.c"
        var $61=_Util_CatchBZ2Error($60); //@line 579 "bz2module.c"
        var $62=HEAP[$ret]; //@line 580 "bz2module.c"
        var $63=(($62)&4294967295); //@line 580 "bz2module.c"
        var $64=HEAP[$63]; //@line 580 "bz2module.c"
        var $65=((($64) - 1)&4294967295); //@line 580 "bz2module.c"
        var $66=(($62)&4294967295); //@line 580 "bz2module.c"
        HEAP[$66]=$65; //@line 580 "bz2module.c"
        var $67=(($62)&4294967295); //@line 580 "bz2module.c"
        var $68=HEAP[$67]; //@line 580 "bz2module.c"
        var $69=((($68))|0)==0; //@line 580 "bz2module.c"
        if ($69) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 580 "bz2module.c"
      case 18: // $bb17
        var $70=HEAP[$ret]; //@line 580 "bz2module.c"
        var $71=(($70+4)&4294967295); //@line 580 "bz2module.c"
        var $72=HEAP[$71]; //@line 580 "bz2module.c"
        var $73=(($72+24)&4294967295); //@line 580 "bz2module.c"
        var $74=HEAP[$73]; //@line 580 "bz2module.c"
        var $75=HEAP[$ret]; //@line 580 "bz2module.c"
        FUNCTION_TABLE[$74]($75); //@line 580 "bz2module.c"
        __label__ = 19; break; //@line 580 "bz2module.c"
      case 19: // $bb18
        HEAP[$ret]=0; //@line 581 "bz2module.c"
        __label__ = 25; break; //@line 581 "bz2module.c"
      case 20: // $bb19
        var $76=HEAP[$bytesrequested]; //@line 584 "bz2module.c"
        var $77=((($76))|0) < 0; //@line 584 "bz2module.c"
        if ($77) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 584 "bz2module.c"
      case 21: // $bb20
        var $78=HEAP[$buffersize]; //@line 585 "bz2module.c"
        var $79=_Util_NewBufferSize($78); //@line 585 "bz2module.c"
        HEAP[$buffersize]=$79; //@line 585 "bz2module.c"
        var $80=HEAP[$buffersize]; //@line 586 "bz2module.c"
        var $81=__PyString_Resize($ret, $80); //@line 586 "bz2module.c"
        var $82=((($81))|0) < 0; //@line 586 "bz2module.c"
        if ($82) { __label__ = 25; break; } else { __label__ = 22; break; } //@line 586 "bz2module.c"
      case 22: // $bb21
        __label__ = 14; break; //@line 586 "bz2module.c"
      case 23: // $bb22
        var $83=HEAP[$bytesread]; //@line 592 "bz2module.c"
        var $84=HEAP[$buffersize]; //@line 592 "bz2module.c"
        var $85=((($83))|0)!=((($84))|0); //@line 592 "bz2module.c"
        if ($85) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 592 "bz2module.c"
      case 24: // $bb23
        var $86=HEAP[$bytesread]; //@line 593 "bz2module.c"
        var $87=__PyString_Resize($ret, $86); //@line 593 "bz2module.c"
        __label__ = 25; break; //@line 595 "bz2module.c"
      case 25: // $cleanup
        var $88=HEAP[$ret]; //@line 597 "bz2module.c"
        HEAP[$0]=$88; //@line 597 "bz2module.c"
        __label__ = 26; break; //@line 597 "bz2module.c"
      case 26: // $bb24
        var $89=HEAP[$0]; //@line 527 "bz2module.c"
        HEAP[$retval]=$89; //@line 527 "bz2module.c"
        __label__ = 27; break; //@line 527 "bz2module.c"
      case 27: // $return
        var $retval25=HEAP[$retval]; //@line 527 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 527 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_readline($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ret=__stackBase__+16;
        var $sizehint=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$ret]=0; //@line 612 "bz2module.c"
        HEAP[$sizehint]=-1; //@line 613 "bz2module.c"
        var $1=HEAP[$args_addr]; //@line 615 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, ((__str17)&4294967295), $sizehint); //@line 615 "bz2module.c"
        var $3=((($2))|0)==0; //@line 615 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 615 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 616 "bz2module.c"
        __label__ = 11; break; //@line 616 "bz2module.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 619 "bz2module.c"
        var $5=(($4+44)&4294967295); //@line 619 "bz2module.c"
        var $6=HEAP[$5]; //@line 619 "bz2module.c"
        if ($6 == 0) {
          __label__ = 5; break;
        }
        else if ($6 == 1) {
          __label__ = 3; break;
        }
        else if ($6 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 3: // $bb2
        var $7=HEAP[$self_addr]; //@line 636 "bz2module.c"
        var $8=_check_iterbuffered($7); //@line 636 "bz2module.c"
        var $9=((($8))|0)!=0; //@line 636 "bz2module.c"
        if ($9) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 636 "bz2module.c"
      case 4: // $bb3
        var $10=_PyString_FromString(((__str13)&4294967295)); //@line 623 "bz2module.c"
        HEAP[$ret]=$10; //@line 623 "bz2module.c"
        __label__ = 10; break; //@line 623 "bz2module.c"
      case 5: // $bb4
        var $11=HEAP[_PyExc_ValueError]; //@line 626 "bz2module.c"
        _PyErr_SetString($11, ((__str14)&4294967295)); //@line 626 "bz2module.c"
        __label__ = 10; break; //@line 626 "bz2module.c"
      case 6: // $bb5
        var $12=HEAP[_PyExc_IOError]; //@line 630 "bz2module.c"
        _PyErr_SetString($12, ((__str15)&4294967295)); //@line 630 "bz2module.c"
        __label__ = 10; break; //@line 630 "bz2module.c"
      case 7: // $bb6
        var $13=HEAP[$sizehint]; //@line 639 "bz2module.c"
        var $14=((($13))|0)==0; //@line 639 "bz2module.c"
        if ($14) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 639 "bz2module.c"
      case 8: // $bb7
        var $15=_PyString_FromString(((__str13)&4294967295)); //@line 640 "bz2module.c"
        HEAP[$ret]=$15; //@line 640 "bz2module.c"
        __label__ = 10; break; //@line 640 "bz2module.c"
      case 9: // $bb8
        var $16=HEAP[$sizehint]; //@line 642 "bz2module.c"
        var $17=((($16))|0) >= 0; //@line 642 "bz2module.c"
        var $max=($17) ? ($16) : 0; //@line 642 "bz2module.c"
        var $18=HEAP[$self_addr]; //@line 642 "bz2module.c"
        var $19=_Util_GetLine($18, $max); //@line 642 "bz2module.c"
        HEAP[$ret]=$19; //@line 642 "bz2module.c"
        __label__ = 10; break; //@line 644 "bz2module.c"
      case 10: // $cleanup
        var $20=HEAP[$ret]; //@line 646 "bz2module.c"
        HEAP[$0]=$20; //@line 646 "bz2module.c"
        __label__ = 11; break; //@line 646 "bz2module.c"
      case 11: // $bb10
        var $21=HEAP[$0]; //@line 616 "bz2module.c"
        HEAP[$retval]=$21; //@line 616 "bz2module.c"
        __label__ = 12; break; //@line 616 "bz2module.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 616 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 616 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_readlines($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8272; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8272);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $sizehint=__stackBase__+16;
        var $list=__stackBase__+20;
        var $line=__stackBase__+24;
        var $small_buffer=__stackBase__+28;
        var $buffer=__stackBase__+8220;
        var $buffersize=__stackBase__+8224;
        var $big_buffer=__stackBase__+8228;
        var $nfilled=__stackBase__+8232;
        var $nread=__stackBase__+8236;
        var $totalread=__stackBase__+8240;
        var $p=__stackBase__+8244;
        var $q=__stackBase__+8248;
        var $end=__stackBase__+8252;
        var $err=__stackBase__+8256;
        var $shortread=__stackBase__+8260;
        var $bzerror=__stackBase__+8264;
        var $rest=__stackBase__+8268;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$sizehint]=0; //@line 661 "bz2module.c"
        HEAP[$list]=0; //@line 662 "bz2module.c"
        var $small_buffer1=$small_buffer; //@line 665 "bz2module.c"
        HEAP[$buffer]=$small_buffer1; //@line 665 "bz2module.c"
        HEAP[$buffersize]=8192; //@line 666 "bz2module.c"
        HEAP[$big_buffer]=0; //@line 667 "bz2module.c"
        HEAP[$nfilled]=0; //@line 668 "bz2module.c"
        HEAP[$totalread]=0; //@line 670 "bz2module.c"
        HEAP[$shortread]=0; //@line 673 "bz2module.c"
        var $1=HEAP[$args_addr]; //@line 676 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, ((__str18)&4294967295), $sizehint); //@line 676 "bz2module.c"
        var $3=((($2))|0)==0; //@line 676 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 676 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 677 "bz2module.c"
        __label__ = 55; break; //@line 677 "bz2module.c"
      case 2: // $bb2
        var $4=HEAP[$self_addr]; //@line 680 "bz2module.c"
        var $5=(($4+44)&4294967295); //@line 680 "bz2module.c"
        var $6=HEAP[$5]; //@line 680 "bz2module.c"
        if ($6 == 0) {
          __label__ = 5; break;
        }
        else if ($6 == 1) {
          __label__ = 3; break;
        }
        else if ($6 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 3: // $bb3
        var $7=HEAP[$self_addr]; //@line 697 "bz2module.c"
        var $8=_check_iterbuffered($7); //@line 697 "bz2module.c"
        var $9=((($8))|0)!=0; //@line 697 "bz2module.c"
        if ($9) { __label__ = 51; break; } else { __label__ = 7; break; } //@line 697 "bz2module.c"
      case 4: // $bb4
        var $10=_PyList_New(0); //@line 684 "bz2module.c"
        HEAP[$list]=$10; //@line 684 "bz2module.c"
        __label__ = 51; break; //@line 684 "bz2module.c"
      case 5: // $bb5
        var $11=HEAP[_PyExc_ValueError]; //@line 687 "bz2module.c"
        _PyErr_SetString($11, ((__str14)&4294967295)); //@line 687 "bz2module.c"
        __label__ = 51; break; //@line 687 "bz2module.c"
      case 6: // $bb6
        var $12=HEAP[_PyExc_IOError]; //@line 691 "bz2module.c"
        _PyErr_SetString($12, ((__str15)&4294967295)); //@line 691 "bz2module.c"
        __label__ = 51; break; //@line 691 "bz2module.c"
      case 7: // $bb7
        var $13=_PyList_New(0); //@line 700 "bz2module.c"
        HEAP[$list]=$13; //@line 700 "bz2module.c"
        var $14=HEAP[$list]; //@line 700 "bz2module.c"
        var $15=($14)==0; //@line 700 "bz2module.c"
        if ($15) { __label__ = 51; break; } else { __label__ = 8; break; } //@line 700 "bz2module.c"
      case 8: // $bb8
        var $16=HEAP[$buffersize]; //@line 705 "bz2module.c"
        var $17=HEAP[$nfilled]; //@line 705 "bz2module.c"
        var $18=((($16) - ($17))&4294967295); //@line 705 "bz2module.c"
        var $19=HEAP[$buffer]; //@line 705 "bz2module.c"
        var $20=HEAP[$nfilled]; //@line 705 "bz2module.c"
        var $21=(($19+$20)&4294967295); //@line 705 "bz2module.c"
        var $22=HEAP[$self_addr]; //@line 705 "bz2module.c"
        var $23=(($22+40)&4294967295); //@line 705 "bz2module.c"
        var $24=HEAP[$23]; //@line 705 "bz2module.c"
        var $25=HEAP[$self_addr]; //@line 705 "bz2module.c"
        var $26=_Util_UnivNewlineRead($bzerror, $24, $21, $18, $25); //@line 705 "bz2module.c"
        HEAP[$nread]=$26; //@line 705 "bz2module.c"
        var $27=HEAP[$self_addr]; //@line 708 "bz2module.c"
        var $28=(($27+48)&4294967295); //@line 708 "bz2module.c"
        var $29=HEAP[$28]; //@line 708 "bz2module.c"
        var $30=HEAP[$nread]; //@line 708 "bz2module.c"
        var $31=((($30))>>>0); //@line 708 "bz2module.c"
        var $32=($29) + ($31); //@line 708 "bz2module.c"
        var $33=HEAP[$self_addr]; //@line 708 "bz2module.c"
        var $34=(($33+48)&4294967295); //@line 708 "bz2module.c"
        HEAP[$34]=$32; //@line 708 "bz2module.c"
        var $35=HEAP[$bzerror]; //@line 710 "bz2module.c"
        var $36=((($35))|0)==4; //@line 710 "bz2module.c"
        if ($36) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 710 "bz2module.c"
      case 9: // $bb9
        var $37=HEAP[$self_addr]; //@line 711 "bz2module.c"
        var $38=(($37+48)&4294967295); //@line 711 "bz2module.c"
        var $39=HEAP[$38]; //@line 711 "bz2module.c"
        var $40=HEAP[$self_addr]; //@line 711 "bz2module.c"
        var $41=(($40+56)&4294967295); //@line 711 "bz2module.c"
        HEAP[$41]=$39; //@line 711 "bz2module.c"
        var $42=HEAP[$self_addr]; //@line 712 "bz2module.c"
        var $43=(($42+44)&4294967295); //@line 712 "bz2module.c"
        HEAP[$43]=2; //@line 712 "bz2module.c"
        var $44=HEAP[$nread]; //@line 713 "bz2module.c"
        var $45=((($44))|0)==0; //@line 713 "bz2module.c"
        if ($45) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 713 "bz2module.c"
      case 10: // $bb10
        HEAP[$sizehint]=0; //@line 714 "bz2module.c"
        __label__ = 38; break; //@line 714 "bz2module.c"
      case 11: // $bb11
        HEAP[$shortread]=1; //@line 717 "bz2module.c"
        __label__ = 17; break; //@line 717 "bz2module.c"
      case 12: // $bb12
        var $46=HEAP[$bzerror]; //@line 718 "bz2module.c"
        var $47=((($46))|0)!=0; //@line 718 "bz2module.c"
        if ($47) { __label__ = 13; break; } else { __label__ = 17; break; } //@line 718 "bz2module.c"
      case 13: // $bb13
        var $48=HEAP[$bzerror]; //@line 719 "bz2module.c"
        var $49=_Util_CatchBZ2Error($48); //@line 719 "bz2module.c"
        __label__ = 14; break; //@line 720 "bz2module.c"
      case 14: // $error
        var $50=HEAP[$list]; //@line 721 "bz2module.c"
        var $51=(($50)&4294967295); //@line 721 "bz2module.c"
        var $52=HEAP[$51]; //@line 721 "bz2module.c"
        var $53=((($52) - 1)&4294967295); //@line 721 "bz2module.c"
        var $54=HEAP[$list]; //@line 721 "bz2module.c"
        var $55=(($54)&4294967295); //@line 721 "bz2module.c"
        HEAP[$55]=$53; //@line 721 "bz2module.c"
        var $56=HEAP[$list]; //@line 721 "bz2module.c"
        var $57=(($56)&4294967295); //@line 721 "bz2module.c"
        var $58=HEAP[$57]; //@line 721 "bz2module.c"
        var $59=((($58))|0)==0; //@line 721 "bz2module.c"
        if ($59) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 721 "bz2module.c"
      case 15: // $bb14
        var $60=HEAP[$list]; //@line 721 "bz2module.c"
        var $61=(($60+4)&4294967295); //@line 721 "bz2module.c"
        var $62=HEAP[$61]; //@line 721 "bz2module.c"
        var $63=(($62+24)&4294967295); //@line 721 "bz2module.c"
        var $64=HEAP[$63]; //@line 721 "bz2module.c"
        var $65=HEAP[$list]; //@line 721 "bz2module.c"
        FUNCTION_TABLE[$64]($65); //@line 721 "bz2module.c"
        __label__ = 16; break; //@line 721 "bz2module.c"
      case 16: // $bb15
        HEAP[$list]=0; //@line 722 "bz2module.c"
        __label__ = 51; break; //@line 722 "bz2module.c"
      case 17: // $bb16
        var $66=HEAP[$totalread]; //@line 725 "bz2module.c"
        var $67=HEAP[$nread]; //@line 725 "bz2module.c"
        var $68=((($66) + ($67))&4294967295); //@line 725 "bz2module.c"
        HEAP[$totalread]=$68; //@line 725 "bz2module.c"
        var $69=HEAP[$buffer]; //@line 726 "bz2module.c"
        var $70=HEAP[$nfilled]; //@line 726 "bz2module.c"
        var $71=(($69+$70)&4294967295); //@line 726 "bz2module.c"
        var $72=HEAP[$nread]; //@line 726 "bz2module.c"
        var $73=_memchr($71, 10, $72); //@line 726 "bz2module.c"
        HEAP[$p]=$73; //@line 726 "bz2module.c"
        var $74=HEAP[$shortread]; //@line 727 "bz2module.c"
        var $75=((($74))|0)==0; //@line 727 "bz2module.c"
        if ($75) { __label__ = 18; break; } else { __label__ = 26; break; } //@line 727 "bz2module.c"
      case 18: // $bb17
        var $76=HEAP[$p]; //@line 727 "bz2module.c"
        var $77=($76)==0; //@line 727 "bz2module.c"
        if ($77) { __label__ = 19; break; } else { __label__ = 26; break; } //@line 727 "bz2module.c"
      case 19: // $bb18
        var $78=HEAP[$nfilled]; //@line 729 "bz2module.c"
        var $79=HEAP[$nread]; //@line 729 "bz2module.c"
        var $80=((($78) + ($79))&4294967295); //@line 729 "bz2module.c"
        HEAP[$nfilled]=$80; //@line 729 "bz2module.c"
        var $81=HEAP[$buffersize]; //@line 730 "bz2module.c"
        var $82=((($81) * 2)&4294967295); //@line 730 "bz2module.c"
        HEAP[$buffersize]=$82; //@line 730 "bz2module.c"
        var $83=HEAP[$buffersize]; //@line 731 "bz2module.c"
        var $84=((($83))|0) < 0; //@line 731 "bz2module.c"
        if ($84) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 731 "bz2module.c"
      case 20: // $bb19
        var $85=HEAP[_PyExc_OverflowError]; //@line 732 "bz2module.c"
        _PyErr_SetString($85, ((__str7)&4294967295)); //@line 732 "bz2module.c"
        __label__ = 14; break; //@line 732 "bz2module.c"
      case 21: // $bb20
        var $86=HEAP[$big_buffer]; //@line 736 "bz2module.c"
        var $87=($86)==0; //@line 736 "bz2module.c"
        if ($87) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 736 "bz2module.c"
      case 22: // $bb21
        var $88=HEAP[$buffersize]; //@line 738 "bz2module.c"
        var $89=_PyString_FromStringAndSize(0, $88); //@line 738 "bz2module.c"
        HEAP[$big_buffer]=$89; //@line 738 "bz2module.c"
        var $90=HEAP[$big_buffer]; //@line 740 "bz2module.c"
        var $91=($90)==0; //@line 740 "bz2module.c"
        if ($91) { __label__ = 14; break; } else { __label__ = 23; break; } //@line 740 "bz2module.c"
      case 23: // $bb22
        var $92=HEAP[$big_buffer]; //@line 742 "bz2module.c"
        var $93=$92; //@line 742 "bz2module.c"
        var $94=(($93+20)&4294967295); //@line 742 "bz2module.c"
        var $95=(($94)&4294967295); //@line 742 "bz2module.c"
        HEAP[$buffer]=$95; //@line 742 "bz2module.c"
        var $96=HEAP[$buffer]; //@line 743 "bz2module.c"
        var $small_buffer23=$small_buffer; //@line 743 "bz2module.c"
        var $97=HEAP[$nfilled]; //@line 743 "bz2module.c"
        _llvm_memcpy_p0i8_p0i8_i32($96, $small_buffer23, $97, 1, 0); //@line 743 "bz2module.c"
        __label__ = 25; break; //@line 743 "bz2module.c"
      case 24: // $bb24
        var $98=HEAP[$buffersize]; //@line 747 "bz2module.c"
        var $99=__PyString_Resize($big_buffer, $98); //@line 747 "bz2module.c"
        var $100=HEAP[$big_buffer]; //@line 748 "bz2module.c"
        var $101=$100; //@line 748 "bz2module.c"
        var $102=(($101+20)&4294967295); //@line 748 "bz2module.c"
        var $103=(($102)&4294967295); //@line 748 "bz2module.c"
        HEAP[$buffer]=$103; //@line 748 "bz2module.c"
        __label__ = 25; break; //@line 748 "bz2module.c"
      case 25: // $bb25
        __label__ = 37; break; //@line 748 "bz2module.c"
      case 26: // $bb26
        var $104=HEAP[$buffer]; //@line 752 "bz2module.c"
        var $105=HEAP[$nfilled]; //@line 752 "bz2module.c"
        var $106=(($104+$105)&4294967295); //@line 752 "bz2module.c"
        var $107=HEAP[$nread]; //@line 752 "bz2module.c"
        var $108=(($106+$107)&4294967295); //@line 752 "bz2module.c"
        HEAP[$end]=$108; //@line 752 "bz2module.c"
        var $109=HEAP[$buffer]; //@line 753 "bz2module.c"
        HEAP[$q]=$109; //@line 753 "bz2module.c"
        __label__ = 32; break; //@line 753 "bz2module.c"
      case 27: // $bb27
        var $110=HEAP[$p]; //@line 756 "bz2module.c"
        var $111=(($110+1)&4294967295); //@line 756 "bz2module.c"
        HEAP[$p]=$111; //@line 756 "bz2module.c"
        var $112=HEAP[$p]; //@line 757 "bz2module.c"
        var $113=($112); //@line 757 "bz2module.c"
        var $114=HEAP[$q]; //@line 757 "bz2module.c"
        var $115=($114); //@line 757 "bz2module.c"
        var $116=((($113) - ($115))&4294967295); //@line 757 "bz2module.c"
        var $117=HEAP[$q]; //@line 757 "bz2module.c"
        var $118=_PyString_FromStringAndSize($117, $116); //@line 757 "bz2module.c"
        HEAP[$line]=$118; //@line 757 "bz2module.c"
        var $119=HEAP[$line]; //@line 758 "bz2module.c"
        var $120=($119)==0; //@line 758 "bz2module.c"
        if ($120) { __label__ = 14; break; } else { __label__ = 28; break; } //@line 758 "bz2module.c"
      case 28: // $bb28
        var $121=HEAP[$line]; //@line 760 "bz2module.c"
        var $122=HEAP[$list]; //@line 760 "bz2module.c"
        var $123=_PyList_Append($122, $121); //@line 760 "bz2module.c"
        HEAP[$err]=$123; //@line 760 "bz2module.c"
        var $124=HEAP[$line]; //@line 761 "bz2module.c"
        var $125=(($124)&4294967295); //@line 761 "bz2module.c"
        var $126=HEAP[$125]; //@line 761 "bz2module.c"
        var $127=((($126) - 1)&4294967295); //@line 761 "bz2module.c"
        var $128=(($124)&4294967295); //@line 761 "bz2module.c"
        HEAP[$128]=$127; //@line 761 "bz2module.c"
        var $129=(($124)&4294967295); //@line 761 "bz2module.c"
        var $130=HEAP[$129]; //@line 761 "bz2module.c"
        var $131=((($130))|0)==0; //@line 761 "bz2module.c"
        if ($131) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 761 "bz2module.c"
      case 29: // $bb29
        var $132=HEAP[$line]; //@line 761 "bz2module.c"
        var $133=(($132+4)&4294967295); //@line 761 "bz2module.c"
        var $134=HEAP[$133]; //@line 761 "bz2module.c"
        var $135=(($134+24)&4294967295); //@line 761 "bz2module.c"
        var $136=HEAP[$135]; //@line 761 "bz2module.c"
        var $137=HEAP[$line]; //@line 761 "bz2module.c"
        FUNCTION_TABLE[$136]($137); //@line 761 "bz2module.c"
        __label__ = 30; break; //@line 761 "bz2module.c"
      case 30: // $bb30
        var $138=HEAP[$err]; //@line 762 "bz2module.c"
        var $139=((($138))|0)!=0; //@line 762 "bz2module.c"
        if ($139) { __label__ = 14; break; } else { __label__ = 31; break; } //@line 762 "bz2module.c"
      case 31: // $bb31
        var $140=HEAP[$p]; //@line 764 "bz2module.c"
        HEAP[$q]=$140; //@line 764 "bz2module.c"
        var $141=HEAP[$end]; //@line 765 "bz2module.c"
        var $142=($141); //@line 765 "bz2module.c"
        var $143=HEAP[$q]; //@line 765 "bz2module.c"
        var $144=($143); //@line 765 "bz2module.c"
        var $145=((($142) - ($144))&4294967295); //@line 765 "bz2module.c"
        var $146=HEAP[$q]; //@line 765 "bz2module.c"
        var $147=_memchr($146, 10, $145); //@line 765 "bz2module.c"
        HEAP[$p]=$147; //@line 765 "bz2module.c"
        __label__ = 32; break; //@line 765 "bz2module.c"
      case 32: // $bb32
        var $148=HEAP[$p]; //@line 754 "bz2module.c"
        var $149=($148)!=0; //@line 754 "bz2module.c"
        if ($149) { __label__ = 27; break; } else { __label__ = 33; break; } //@line 754 "bz2module.c"
      case 33: // $bb33
        var $150=HEAP[$end]; //@line 768 "bz2module.c"
        var $151=($150); //@line 768 "bz2module.c"
        var $152=HEAP[$q]; //@line 768 "bz2module.c"
        var $153=($152); //@line 768 "bz2module.c"
        var $154=((($151) - ($153))&4294967295); //@line 768 "bz2module.c"
        HEAP[$nfilled]=$154; //@line 768 "bz2module.c"
        var $155=HEAP[$buffer]; //@line 769 "bz2module.c"
        var $156=HEAP[$q]; //@line 769 "bz2module.c"
        var $157=HEAP[$nfilled]; //@line 769 "bz2module.c"
        _llvm_memmove_p0i8_p0i8_i32($155, $156, $157, 1, 0); //@line 769 "bz2module.c"
        var $158=HEAP[$sizehint]; //@line 770 "bz2module.c"
        var $159=((($158))|0) > 0; //@line 770 "bz2module.c"
        if ($159) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 770 "bz2module.c"
      case 34: // $bb34
        var $160=HEAP[$sizehint]; //@line 771 "bz2module.c"
        var $161=HEAP[$totalread]; //@line 771 "bz2module.c"
        var $162=((($160))>>>0) <= ((($161))>>>0); //@line 771 "bz2module.c"
        if ($162) { __label__ = 38; break; } else { __label__ = 35; break; } //@line 771 "bz2module.c"
      case 35: // $bb35
        var $163=HEAP[$shortread]; //@line 773 "bz2module.c"
        var $164=((($163))|0)!=0; //@line 773 "bz2module.c"
        if ($164) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 773 "bz2module.c"
      case 36: // $bb36
        HEAP[$sizehint]=0; //@line 774 "bz2module.c"
        __label__ = 38; break; //@line 774 "bz2module.c"
      case 37: // $bb37
        __label__ = 8; break; //@line 774 "bz2module.c"
      case 38: // $bb38
        var $165=HEAP[$nfilled]; //@line 778 "bz2module.c"
        var $166=((($165))|0)!=0; //@line 778 "bz2module.c"
        if ($166) { __label__ = 39; break; } else { __label__ = 51; break; } //@line 778 "bz2module.c"
      case 39: // $bb39
        var $167=HEAP[$nfilled]; //@line 780 "bz2module.c"
        var $168=HEAP[$buffer]; //@line 780 "bz2module.c"
        var $169=_PyString_FromStringAndSize($168, $167); //@line 780 "bz2module.c"
        HEAP[$line]=$169; //@line 780 "bz2module.c"
        var $170=HEAP[$line]; //@line 781 "bz2module.c"
        var $171=($170)==0; //@line 781 "bz2module.c"
        if ($171) { __label__ = 14; break; } else { __label__ = 40; break; } //@line 781 "bz2module.c"
      case 40: // $bb40
        var $172=HEAP[$sizehint]; //@line 783 "bz2module.c"
        var $173=((($172))|0) > 0; //@line 783 "bz2module.c"
        if ($173) { __label__ = 41; break; } else { __label__ = 48; break; } //@line 783 "bz2module.c"
      case 41: // $bb41
        var $174=HEAP[$self_addr]; //@line 785 "bz2module.c"
        var $175=_Util_GetLine($174, 0); //@line 785 "bz2module.c"
        HEAP[$rest]=$175; //@line 785 "bz2module.c"
        var $176=HEAP[$rest]; //@line 786 "bz2module.c"
        var $177=($176)==0; //@line 786 "bz2module.c"
        if ($177) { __label__ = 42; break; } else { __label__ = 45; break; } //@line 786 "bz2module.c"
      case 42: // $bb42
        var $178=HEAP[$line]; //@line 787 "bz2module.c"
        var $179=(($178)&4294967295); //@line 787 "bz2module.c"
        var $180=HEAP[$179]; //@line 787 "bz2module.c"
        var $181=((($180) - 1)&4294967295); //@line 787 "bz2module.c"
        var $182=(($178)&4294967295); //@line 787 "bz2module.c"
        HEAP[$182]=$181; //@line 787 "bz2module.c"
        var $183=(($178)&4294967295); //@line 787 "bz2module.c"
        var $184=HEAP[$183]; //@line 787 "bz2module.c"
        var $185=((($184))|0)==0; //@line 787 "bz2module.c"
        if ($185) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 787 "bz2module.c"
      case 43: // $bb43
        var $186=HEAP[$line]; //@line 787 "bz2module.c"
        var $187=(($186+4)&4294967295); //@line 787 "bz2module.c"
        var $188=HEAP[$187]; //@line 787 "bz2module.c"
        var $189=(($188+24)&4294967295); //@line 787 "bz2module.c"
        var $190=HEAP[$189]; //@line 787 "bz2module.c"
        var $191=HEAP[$line]; //@line 787 "bz2module.c"
        FUNCTION_TABLE[$190]($191); //@line 787 "bz2module.c"
        __label__ = 44; break; //@line 787 "bz2module.c"
      case 44: // $bb44
        __label__ = 14; break; //@line 787 "bz2module.c"
      case 45: // $bb45
        var $192=HEAP[$rest]; //@line 790 "bz2module.c"
        _PyString_Concat($line, $192); //@line 790 "bz2module.c"
        var $193=HEAP[$rest]; //@line 791 "bz2module.c"
        var $194=(($193)&4294967295); //@line 791 "bz2module.c"
        var $195=HEAP[$194]; //@line 791 "bz2module.c"
        var $196=((($195) - 1)&4294967295); //@line 791 "bz2module.c"
        var $197=HEAP[$rest]; //@line 791 "bz2module.c"
        var $198=(($197)&4294967295); //@line 791 "bz2module.c"
        HEAP[$198]=$196; //@line 791 "bz2module.c"
        var $199=HEAP[$rest]; //@line 791 "bz2module.c"
        var $200=(($199)&4294967295); //@line 791 "bz2module.c"
        var $201=HEAP[$200]; //@line 791 "bz2module.c"
        var $202=((($201))|0)==0; //@line 791 "bz2module.c"
        if ($202) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 791 "bz2module.c"
      case 46: // $bb46
        var $203=HEAP[$rest]; //@line 791 "bz2module.c"
        var $204=(($203+4)&4294967295); //@line 791 "bz2module.c"
        var $205=HEAP[$204]; //@line 791 "bz2module.c"
        var $206=(($205+24)&4294967295); //@line 791 "bz2module.c"
        var $207=HEAP[$206]; //@line 791 "bz2module.c"
        var $208=HEAP[$rest]; //@line 791 "bz2module.c"
        FUNCTION_TABLE[$207]($208); //@line 791 "bz2module.c"
        __label__ = 47; break; //@line 791 "bz2module.c"
      case 47: // $bb47
        var $209=HEAP[$line]; //@line 792 "bz2module.c"
        var $210=($209)==0; //@line 792 "bz2module.c"
        if ($210) { __label__ = 14; break; } else { __label__ = 48; break; } //@line 792 "bz2module.c"
      case 48: // $bb48
        var $211=HEAP[$line]; //@line 795 "bz2module.c"
        var $212=HEAP[$list]; //@line 795 "bz2module.c"
        var $213=_PyList_Append($212, $211); //@line 795 "bz2module.c"
        HEAP[$err]=$213; //@line 795 "bz2module.c"
        var $214=HEAP[$line]; //@line 796 "bz2module.c"
        var $215=(($214)&4294967295); //@line 796 "bz2module.c"
        var $216=HEAP[$215]; //@line 796 "bz2module.c"
        var $217=((($216) - 1)&4294967295); //@line 796 "bz2module.c"
        var $218=(($214)&4294967295); //@line 796 "bz2module.c"
        HEAP[$218]=$217; //@line 796 "bz2module.c"
        var $219=(($214)&4294967295); //@line 796 "bz2module.c"
        var $220=HEAP[$219]; //@line 796 "bz2module.c"
        var $221=((($220))|0)==0; //@line 796 "bz2module.c"
        if ($221) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 796 "bz2module.c"
      case 49: // $bb49
        var $222=HEAP[$line]; //@line 796 "bz2module.c"
        var $223=(($222+4)&4294967295); //@line 796 "bz2module.c"
        var $224=HEAP[$223]; //@line 796 "bz2module.c"
        var $225=(($224+24)&4294967295); //@line 796 "bz2module.c"
        var $226=HEAP[$225]; //@line 796 "bz2module.c"
        var $227=HEAP[$line]; //@line 796 "bz2module.c"
        FUNCTION_TABLE[$226]($227); //@line 796 "bz2module.c"
        __label__ = 50; break; //@line 796 "bz2module.c"
      case 50: // $bb50
        var $228=HEAP[$err]; //@line 797 "bz2module.c"
        var $229=((($228))|0)!=0; //@line 797 "bz2module.c"
        if ($229) { __label__ = 14; break; } else { __label__ = 51; break; } //@line 797 "bz2module.c"
      case 51: // $cleanup
        var $230=HEAP[$big_buffer]; //@line 803 "bz2module.c"
        var $231=($230)!=0; //@line 803 "bz2module.c"
        if ($231) { __label__ = 52; break; } else { __label__ = 54; break; } //@line 803 "bz2module.c"
      case 52: // $bb51
        var $232=HEAP[$big_buffer]; //@line 804 "bz2module.c"
        var $233=(($232)&4294967295); //@line 804 "bz2module.c"
        var $234=HEAP[$233]; //@line 804 "bz2module.c"
        var $235=((($234) - 1)&4294967295); //@line 804 "bz2module.c"
        var $236=(($232)&4294967295); //@line 804 "bz2module.c"
        HEAP[$236]=$235; //@line 804 "bz2module.c"
        var $237=(($232)&4294967295); //@line 804 "bz2module.c"
        var $238=HEAP[$237]; //@line 804 "bz2module.c"
        var $239=((($238))|0)==0; //@line 804 "bz2module.c"
        if ($239) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 804 "bz2module.c"
      case 53: // $bb52
        var $240=HEAP[$big_buffer]; //@line 804 "bz2module.c"
        var $241=(($240+4)&4294967295); //@line 804 "bz2module.c"
        var $242=HEAP[$241]; //@line 804 "bz2module.c"
        var $243=(($242+24)&4294967295); //@line 804 "bz2module.c"
        var $244=HEAP[$243]; //@line 804 "bz2module.c"
        var $245=HEAP[$big_buffer]; //@line 804 "bz2module.c"
        FUNCTION_TABLE[$244]($245); //@line 804 "bz2module.c"
        __label__ = 54; break; //@line 804 "bz2module.c"
      case 54: // $bb53
        var $246=HEAP[$list]; //@line 806 "bz2module.c"
        HEAP[$0]=$246; //@line 806 "bz2module.c"
        __label__ = 55; break; //@line 806 "bz2module.c"
      case 55: // $bb54
        var $247=HEAP[$0]; //@line 677 "bz2module.c"
        HEAP[$retval]=$247; //@line 677 "bz2module.c"
        __label__ = 56; break; //@line 677 "bz2module.c"
      case 56: // $return
        var $retval55=HEAP[$retval]; //@line 677 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval55; //@line 677 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_write($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 84; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 84);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ret=__stackBase__+16;
        var $pbuf=__stackBase__+20;
        var $buf=__stackBase__+72;
        var $len=__stackBase__+76;
        var $bzerror=__stackBase__+80;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$ret]=0; //@line 827 "bz2module.c"
        var $1=HEAP[$args_addr]; //@line 833 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, ((__str19)&4294967295), $pbuf); //@line 833 "bz2module.c"
        var $3=((($2))|0)==0; //@line 833 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 833 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 834 "bz2module.c"
        __label__ = 9; break; //@line 834 "bz2module.c"
      case 2: // $bb1
        var $4=(($pbuf)&4294967295); //@line 835 "bz2module.c"
        var $5=HEAP[$4]; //@line 835 "bz2module.c"
        HEAP[$buf]=$5; //@line 835 "bz2module.c"
        var $6=(($pbuf+8)&4294967295); //@line 836 "bz2module.c"
        var $7=HEAP[$6]; //@line 836 "bz2module.c"
        HEAP[$len]=$7; //@line 836 "bz2module.c"
        var $8=HEAP[$self_addr]; //@line 839 "bz2module.c"
        var $9=(($8+44)&4294967295); //@line 839 "bz2module.c"
        var $10=HEAP[$9]; //@line 839 "bz2module.c"
        if ($10 == 0) {
          __label__ = 4; break;
        }
        else if ($10 == 3) {
          __label__ = 3; break;
        }
        else {
        __label__ = 5; break;
        }
        
      case 3: // $bb2
        var $11=HEAP[$self_addr]; //@line 854 "bz2module.c"
        var $12=(($11+24)&4294967295); //@line 854 "bz2module.c"
        HEAP[$12]=0; //@line 854 "bz2module.c"
        var $13=HEAP[$self_addr]; //@line 857 "bz2module.c"
        var $14=(($13+40)&4294967295); //@line 857 "bz2module.c"
        var $15=HEAP[$14]; //@line 857 "bz2module.c"
        var $16=HEAP[$buf]; //@line 857 "bz2module.c"
        var $17=HEAP[$len]; //@line 857 "bz2module.c"
        _BZ2_bzWrite($bzerror, $15, $16, $17); //@line 857 "bz2module.c"
        var $18=HEAP[$self_addr]; //@line 858 "bz2module.c"
        var $19=(($18+48)&4294967295); //@line 858 "bz2module.c"
        var $20=HEAP[$19]; //@line 858 "bz2module.c"
        var $21=HEAP[$len]; //@line 858 "bz2module.c"
        var $22=((($21))|0); //@line 858 "bz2module.c"
        var $23=($20) + ($22); //@line 858 "bz2module.c"
        var $24=HEAP[$self_addr]; //@line 858 "bz2module.c"
        var $25=(($24+48)&4294967295); //@line 858 "bz2module.c"
        HEAP[$25]=$23; //@line 858 "bz2module.c"
        var $26=HEAP[$bzerror]; //@line 861 "bz2module.c"
        var $27=((($26))|0)!=0; //@line 861 "bz2module.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 861 "bz2module.c"
      case 4: // $bb3
        var $28=HEAP[_PyExc_ValueError]; //@line 844 "bz2module.c"
        _PyErr_SetString($28, ((__str14)&4294967295)); //@line 844 "bz2module.c"
        __label__ = 8; break; //@line 844 "bz2module.c"
      case 5: // $bb4
        var $29=HEAP[_PyExc_IOError]; //@line 849 "bz2module.c"
        _PyErr_SetString($29, ((__str20)&4294967295)); //@line 849 "bz2module.c"
        __label__ = 8; break; //@line 849 "bz2module.c"
      case 6: // $bb5
        var $30=HEAP[$bzerror]; //@line 862 "bz2module.c"
        var $31=_Util_CatchBZ2Error($30); //@line 862 "bz2module.c"
        __label__ = 8; break; //@line 862 "bz2module.c"
      case 7: // $bb6
        var $32=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 866 "bz2module.c"
        var $33=((($32) + 1)&4294967295); //@line 866 "bz2module.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$33; //@line 866 "bz2module.c"
        HEAP[$ret]=__Py_NoneStruct; //@line 867 "bz2module.c"
        __label__ = 8; break; //@line 869 "bz2module.c"
      case 8: // $cleanup
        _PyBuffer_Release($pbuf); //@line 870 "bz2module.c"
        var $34=HEAP[$ret]; //@line 872 "bz2module.c"
        HEAP[$0]=$34; //@line 872 "bz2module.c"
        __label__ = 9; break; //@line 872 "bz2module.c"
      case 9: // $bb7
        var $35=HEAP[$0]; //@line 834 "bz2module.c"
        HEAP[$retval]=$35; //@line 834 "bz2module.c"
        __label__ = 10; break; //@line 834 "bz2module.c"
      case 10: // $return
        var $retval8=HEAP[$retval]; //@line 834 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 834 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_writelines($self, $seq) {
    var __stackBase__  = STACKTOP; STACKTOP += 68; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $seq_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $list=__stackBase__+16;
        var $iter=__stackBase__+20;
        var $ret=__stackBase__+24;
        var $line=__stackBase__+28;
        var $i=__stackBase__+32;
        var $j=__stackBase__+36;
        var $index=__stackBase__+40;
        var $len=__stackBase__+44;
        var $islist=__stackBase__+48;
        var $bzerror=__stackBase__+52;
        var $v=__stackBase__+56;
        var $buffer=__stackBase__+60;
        var $len23=__stackBase__+64;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$seq_addr]=$seq;
        HEAP[$list]=0; //@line 888 "bz2module.c"
        HEAP[$iter]=0; //@line 889 "bz2module.c"
        HEAP[$ret]=0; //@line 890 "bz2module.c"
        var $1=HEAP[$self_addr]; //@line 896 "bz2module.c"
        var $2=(($1+44)&4294967295); //@line 896 "bz2module.c"
        var $3=HEAP[$2]; //@line 896 "bz2module.c"
        if ($3 == 0) {
          __label__ = 2; break;
        }
        else if ($3 == 3) {
          __label__ = 1; break;
        }
        else {
        __label__ = 3; break;
        }
        
      case 1: // $bb
        var $4=HEAP[$seq_addr]; //@line 911 "bz2module.c"
        var $5=(($4+4)&4294967295); //@line 911 "bz2module.c"
        var $6=HEAP[$5]; //@line 911 "bz2module.c"
        var $7=(($6+84)&4294967295); //@line 911 "bz2module.c"
        var $8=HEAP[$7]; //@line 911 "bz2module.c"
        var $9=($8) & 33554432; //@line 911 "bz2module.c"
        var $10=((($9))|0)!=0; //@line 911 "bz2module.c"
        var $11=unSign(($10), 1, 0); //@line 911 "bz2module.c"
        HEAP[$islist]=$11; //@line 911 "bz2module.c"
        var $12=HEAP[$islist]; //@line 912 "bz2module.c"
        var $13=((($12))|0)==0; //@line 912 "bz2module.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 912 "bz2module.c"
      case 2: // $bb1
        var $14=HEAP[_PyExc_ValueError]; //@line 901 "bz2module.c"
        _PyErr_SetString($14, ((__str14)&4294967295)); //@line 901 "bz2module.c"
        __label__ = 39; break; //@line 901 "bz2module.c"
      case 3: // $bb2
        var $15=HEAP[_PyExc_IOError]; //@line 906 "bz2module.c"
        _PyErr_SetString($15, ((__str20)&4294967295)); //@line 906 "bz2module.c"
        __label__ = 39; break; //@line 906 "bz2module.c"
      case 4: // $bb3
        var $16=HEAP[$seq_addr]; //@line 913 "bz2module.c"
        var $17=_PyObject_GetIter($16); //@line 913 "bz2module.c"
        HEAP[$iter]=$17; //@line 913 "bz2module.c"
        var $18=HEAP[$iter]; //@line 914 "bz2module.c"
        var $19=($18)==0; //@line 914 "bz2module.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 914 "bz2module.c"
      case 5: // $bb4
        var $20=HEAP[_PyExc_TypeError]; //@line 915 "bz2module.c"
        _PyErr_SetString($20, ((__str21)&4294967295)); //@line 915 "bz2module.c"
        __label__ = 39; break; //@line 915 "bz2module.c"
      case 6: // $bb5
        var $21=_PyList_New(1000); //@line 919 "bz2module.c"
        HEAP[$list]=$21; //@line 919 "bz2module.c"
        var $22=HEAP[$list]; //@line 920 "bz2module.c"
        var $23=($22)==0; //@line 920 "bz2module.c"
        if ($23) { __label__ = 39; break; } else { __label__ = 7; break; } //@line 920 "bz2module.c"
      case 7: // $bb6
        HEAP[$index]=0; //@line 927 "bz2module.c"
        __label__ = 8; break; //@line 927 "bz2module.c"
      case 8: // $bb7
        var $24=HEAP[$islist]; //@line 928 "bz2module.c"
        var $25=((($24))|0)!=0; //@line 928 "bz2module.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 928 "bz2module.c"
      case 9: // $bb8
        var $26=HEAP[$list]; //@line 929 "bz2module.c"
        var $27=($26)!=0; //@line 929 "bz2module.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 929 "bz2module.c"
      case 10: // $bb9
        var $28=HEAP[$list]; //@line 929 "bz2module.c"
        var $29=(($28)&4294967295); //@line 929 "bz2module.c"
        var $30=HEAP[$29]; //@line 929 "bz2module.c"
        var $31=((($30) - 1)&4294967295); //@line 929 "bz2module.c"
        var $32=HEAP[$list]; //@line 929 "bz2module.c"
        var $33=(($32)&4294967295); //@line 929 "bz2module.c"
        HEAP[$33]=$31; //@line 929 "bz2module.c"
        var $34=HEAP[$list]; //@line 929 "bz2module.c"
        var $35=(($34)&4294967295); //@line 929 "bz2module.c"
        var $36=HEAP[$35]; //@line 929 "bz2module.c"
        var $37=((($36))|0)==0; //@line 929 "bz2module.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 929 "bz2module.c"
      case 11: // $bb10
        var $38=HEAP[$list]; //@line 929 "bz2module.c"
        var $39=(($38+4)&4294967295); //@line 929 "bz2module.c"
        var $40=HEAP[$39]; //@line 929 "bz2module.c"
        var $41=(($40+24)&4294967295); //@line 929 "bz2module.c"
        var $42=HEAP[$41]; //@line 929 "bz2module.c"
        var $43=HEAP[$list]; //@line 929 "bz2module.c"
        FUNCTION_TABLE[$42]($43); //@line 929 "bz2module.c"
        __label__ = 12; break; //@line 929 "bz2module.c"
      case 12: // $bb11
        var $44=HEAP[$index]; //@line 930 "bz2module.c"
        var $45=((($44) + 1000)&4294967295); //@line 930 "bz2module.c"
        var $46=HEAP[$seq_addr]; //@line 930 "bz2module.c"
        var $47=HEAP[$index]; //@line 930 "bz2module.c"
        var $48=_PyList_GetSlice($46, $47, $45); //@line 930 "bz2module.c"
        HEAP[$list]=$48; //@line 930 "bz2module.c"
        var $49=HEAP[$list]; //@line 931 "bz2module.c"
        var $50=($49)==0; //@line 931 "bz2module.c"
        if ($50) { __label__ = 39; break; } else { __label__ = 13; break; } //@line 931 "bz2module.c"
      case 13: // $bb12
        var $51=HEAP[$list]; //@line 933 "bz2module.c"
        var $52=$51; //@line 933 "bz2module.c"
        var $53=(($52+8)&4294967295); //@line 933 "bz2module.c"
        var $54=HEAP[$53]; //@line 933 "bz2module.c"
        HEAP[$j]=$54; //@line 933 "bz2module.c"
        __label__ = 20; break; //@line 933 "bz2module.c"
      case 14: // $bb13
        HEAP[$j]=0; //@line 936 "bz2module.c"
        __label__ = 19; break; //@line 936 "bz2module.c"
      case 15: // $bb14
        var $55=HEAP[$iter]; //@line 937 "bz2module.c"
        var $56=_PyIter_Next($55); //@line 937 "bz2module.c"
        HEAP[$line]=$56; //@line 937 "bz2module.c"
        var $57=HEAP[$line]; //@line 938 "bz2module.c"
        var $58=($57)==0; //@line 938 "bz2module.c"
        if ($58) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 938 "bz2module.c"
      case 16: // $bb15
        var $59=_PyErr_Occurred(); //@line 939 "bz2module.c"
        var $60=($59)!=0; //@line 939 "bz2module.c"
        if ($60) { __label__ = 39; break; } else { __label__ = 17; break; } //@line 939 "bz2module.c"
      case 17: // $bb16
        __label__ = 20; break; //@line 939 "bz2module.c"
      case 18: // $bb17
        var $61=HEAP[$list]; //@line 943 "bz2module.c"
        var $62=HEAP[$j]; //@line 943 "bz2module.c"
        var $63=HEAP[$line]; //@line 943 "bz2module.c"
        var $64=_PyList_SetItem($61, $62, $63); //@line 943 "bz2module.c"
        var $65=HEAP[$j]; //@line 936 "bz2module.c"
        var $66=((($65) + 1)&4294967295); //@line 936 "bz2module.c"
        HEAP[$j]=$66; //@line 936 "bz2module.c"
        __label__ = 19; break; //@line 936 "bz2module.c"
      case 19: // $bb18
        var $67=HEAP[$j]; //@line 936 "bz2module.c"
        var $68=((($67))|0) <= 999; //@line 936 "bz2module.c"
        if ($68) { __label__ = 15; break; } else { __label__ = 20; break; } //@line 936 "bz2module.c"
      case 20: // $bb19
        var $69=HEAP[$j]; //@line 946 "bz2module.c"
        var $70=((($69))|0)==0; //@line 946 "bz2module.c"
        if ($70) { __label__ = 38; break; } else { __label__ = 21; break; } //@line 946 "bz2module.c"
      case 21: // $bb20
        HEAP[$i]=0; //@line 954 "bz2module.c"
        __label__ = 30; break; //@line 954 "bz2module.c"
      case 22: // $bb21
        var $71=HEAP[$list]; //@line 955 "bz2module.c"
        var $72=$71; //@line 955 "bz2module.c"
        var $73=(($72+12)&4294967295); //@line 955 "bz2module.c"
        var $74=HEAP[$73]; //@line 955 "bz2module.c"
        var $75=HEAP[$i]; //@line 955 "bz2module.c"
        var $76=(($74+4*$75)&4294967295); //@line 955 "bz2module.c"
        var $77=HEAP[$76]; //@line 955 "bz2module.c"
        HEAP[$v]=$77; //@line 955 "bz2module.c"
        var $78=HEAP[$v]; //@line 956 "bz2module.c"
        var $79=(($78+4)&4294967295); //@line 956 "bz2module.c"
        var $80=HEAP[$79]; //@line 956 "bz2module.c"
        var $81=(($80+84)&4294967295); //@line 956 "bz2module.c"
        var $82=HEAP[$81]; //@line 956 "bz2module.c"
        var $83=($82) & 134217728; //@line 956 "bz2module.c"
        var $84=((($83))|0)==0; //@line 956 "bz2module.c"
        if ($84) { __label__ = 23; break; } else { __label__ = 29; break; } //@line 956 "bz2module.c"
      case 23: // $bb22
        var $85=HEAP[$v]; //@line 959 "bz2module.c"
        var $86=_PyObject_AsCharBuffer($85, $buffer, $len23); //@line 959 "bz2module.c"
        var $87=((($86))|0)!=0; //@line 959 "bz2module.c"
        if ($87) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 959 "bz2module.c"
      case 24: // $bb24
        var $88=HEAP[_PyExc_TypeError]; //@line 960 "bz2module.c"
        _PyErr_SetString($88, ((__str22)&4294967295)); //@line 960 "bz2module.c"
        __label__ = 39; break; //@line 960 "bz2module.c"
      case 25: // $bb25
        var $89=HEAP[$len23]; //@line 967 "bz2module.c"
        var $90=HEAP[$buffer]; //@line 967 "bz2module.c"
        var $91=_PyString_FromStringAndSize($90, $89); //@line 967 "bz2module.c"
        HEAP[$line]=$91; //@line 967 "bz2module.c"
        var $92=HEAP[$line]; //@line 969 "bz2module.c"
        var $93=($92)==0; //@line 969 "bz2module.c"
        if ($93) { __label__ = 39; break; } else { __label__ = 26; break; } //@line 969 "bz2module.c"
      case 26: // $bb26
        var $94=HEAP[$v]; //@line 971 "bz2module.c"
        var $95=(($94)&4294967295); //@line 971 "bz2module.c"
        var $96=HEAP[$95]; //@line 971 "bz2module.c"
        var $97=((($96) - 1)&4294967295); //@line 971 "bz2module.c"
        var $98=HEAP[$v]; //@line 971 "bz2module.c"
        var $99=(($98)&4294967295); //@line 971 "bz2module.c"
        HEAP[$99]=$97; //@line 971 "bz2module.c"
        var $100=HEAP[$v]; //@line 971 "bz2module.c"
        var $101=(($100)&4294967295); //@line 971 "bz2module.c"
        var $102=HEAP[$101]; //@line 971 "bz2module.c"
        var $103=((($102))|0)==0; //@line 971 "bz2module.c"
        if ($103) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 971 "bz2module.c"
      case 27: // $bb27
        var $104=HEAP[$v]; //@line 971 "bz2module.c"
        var $105=(($104+4)&4294967295); //@line 971 "bz2module.c"
        var $106=HEAP[$105]; //@line 971 "bz2module.c"
        var $107=(($106+24)&4294967295); //@line 971 "bz2module.c"
        var $108=HEAP[$107]; //@line 971 "bz2module.c"
        var $109=HEAP[$v]; //@line 971 "bz2module.c"
        FUNCTION_TABLE[$108]($109); //@line 971 "bz2module.c"
        __label__ = 28; break; //@line 971 "bz2module.c"
      case 28: // $bb28
        var $110=HEAP[$list]; //@line 972 "bz2module.c"
        var $111=$110; //@line 972 "bz2module.c"
        var $112=(($111+12)&4294967295); //@line 972 "bz2module.c"
        var $113=HEAP[$112]; //@line 972 "bz2module.c"
        var $114=HEAP[$i]; //@line 972 "bz2module.c"
        var $115=(($113+4*$114)&4294967295); //@line 972 "bz2module.c"
        var $116=HEAP[$line]; //@line 972 "bz2module.c"
        HEAP[$115]=$116; //@line 972 "bz2module.c"
        __label__ = 29; break; //@line 972 "bz2module.c"
      case 29: // $bb29
        var $117=HEAP[$i]; //@line 954 "bz2module.c"
        var $118=((($117) + 1)&4294967295); //@line 954 "bz2module.c"
        HEAP[$i]=$118; //@line 954 "bz2module.c"
        __label__ = 30; break; //@line 954 "bz2module.c"
      case 30: // $bb30
        var $119=HEAP[$i]; //@line 954 "bz2module.c"
        var $120=HEAP[$j]; //@line 954 "bz2module.c"
        var $121=((($119))|0) < ((($120))|0); //@line 954 "bz2module.c"
        if ($121) { __label__ = 22; break; } else { __label__ = 31; break; } //@line 954 "bz2module.c"
      case 31: // $bb31
        var $122=HEAP[$self_addr]; //@line 976 "bz2module.c"
        var $123=(($122+24)&4294967295); //@line 976 "bz2module.c"
        HEAP[$123]=0; //@line 976 "bz2module.c"
        HEAP[$i]=0; //@line 981 "bz2module.c"
        __label__ = 35; break; //@line 981 "bz2module.c"
      case 32: // $bb32
        var $124=HEAP[$list]; //@line 982 "bz2module.c"
        var $125=$124; //@line 982 "bz2module.c"
        var $126=(($125+12)&4294967295); //@line 982 "bz2module.c"
        var $127=HEAP[$126]; //@line 982 "bz2module.c"
        var $128=HEAP[$i]; //@line 982 "bz2module.c"
        var $129=(($127+4*$128)&4294967295); //@line 982 "bz2module.c"
        var $130=HEAP[$129]; //@line 982 "bz2module.c"
        HEAP[$line]=$130; //@line 982 "bz2module.c"
        var $131=HEAP[$line]; //@line 983 "bz2module.c"
        var $132=$131; //@line 983 "bz2module.c"
        var $133=(($132+8)&4294967295); //@line 983 "bz2module.c"
        var $134=HEAP[$133]; //@line 983 "bz2module.c"
        HEAP[$len]=$134; //@line 983 "bz2module.c"
        var $135=HEAP[$line]; //@line 984 "bz2module.c"
        var $136=$135; //@line 984 "bz2module.c"
        var $137=(($136+20)&4294967295); //@line 984 "bz2module.c"
        var $138=(($137)&4294967295); //@line 984 "bz2module.c"
        var $139=HEAP[$self_addr]; //@line 984 "bz2module.c"
        var $140=(($139+40)&4294967295); //@line 984 "bz2module.c"
        var $141=HEAP[$140]; //@line 984 "bz2module.c"
        var $142=HEAP[$len]; //@line 984 "bz2module.c"
        _BZ2_bzWrite($bzerror, $141, $138, $142); //@line 984 "bz2module.c"
        var $143=HEAP[$bzerror]; //@line 986 "bz2module.c"
        var $144=((($143))|0)!=0; //@line 986 "bz2module.c"
        if ($144) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 986 "bz2module.c"
      case 33: // $bb33
        var $145=HEAP[$bzerror]; //@line 988 "bz2module.c"
        var $146=_Util_CatchBZ2Error($145); //@line 988 "bz2module.c"
        __label__ = 39; break; //@line 988 "bz2module.c"
      case 34: // $bb34
        var $147=HEAP[$i]; //@line 981 "bz2module.c"
        var $148=((($147) + 1)&4294967295); //@line 981 "bz2module.c"
        HEAP[$i]=$148; //@line 981 "bz2module.c"
        __label__ = 35; break; //@line 981 "bz2module.c"
      case 35: // $bb35
        var $149=HEAP[$i]; //@line 981 "bz2module.c"
        var $150=HEAP[$j]; //@line 981 "bz2module.c"
        var $151=((($149))|0) < ((($150))|0); //@line 981 "bz2module.c"
        if ($151) { __label__ = 32; break; } else { __label__ = 36; break; } //@line 981 "bz2module.c"
      case 36: // $bb36
        var $152=HEAP[$j]; //@line 994 "bz2module.c"
        var $153=((($152))|0) <= 999; //@line 994 "bz2module.c"
        if ($153) { __label__ = 38; break; } else { __label__ = 37; break; } //@line 994 "bz2module.c"
      case 37: // $bb37
        var $154=HEAP[$index]; //@line 927 "bz2module.c"
        var $155=((($154) + 1000)&4294967295); //@line 927 "bz2module.c"
        HEAP[$index]=$155; //@line 927 "bz2module.c"
        __label__ = 8; break; //@line 927 "bz2module.c"
      case 38: // $bb38
        var $156=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 998 "bz2module.c"
        var $157=((($156) + 1)&4294967295); //@line 998 "bz2module.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$157; //@line 998 "bz2module.c"
        HEAP[$ret]=__Py_NoneStruct; //@line 999 "bz2module.c"
        __label__ = 39; break; //@line 1001 "bz2module.c"
      case 39: // $error
        var $158=HEAP[$list]; //@line 1003 "bz2module.c"
        var $159=($158)!=0; //@line 1003 "bz2module.c"
        if ($159) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 1003 "bz2module.c"
      case 40: // $bb39
        var $160=HEAP[$list]; //@line 1003 "bz2module.c"
        var $161=(($160)&4294967295); //@line 1003 "bz2module.c"
        var $162=HEAP[$161]; //@line 1003 "bz2module.c"
        var $163=((($162) - 1)&4294967295); //@line 1003 "bz2module.c"
        var $164=HEAP[$list]; //@line 1003 "bz2module.c"
        var $165=(($164)&4294967295); //@line 1003 "bz2module.c"
        HEAP[$165]=$163; //@line 1003 "bz2module.c"
        var $166=HEAP[$list]; //@line 1003 "bz2module.c"
        var $167=(($166)&4294967295); //@line 1003 "bz2module.c"
        var $168=HEAP[$167]; //@line 1003 "bz2module.c"
        var $169=((($168))|0)==0; //@line 1003 "bz2module.c"
        if ($169) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1003 "bz2module.c"
      case 41: // $bb40
        var $170=HEAP[$list]; //@line 1003 "bz2module.c"
        var $171=(($170+4)&4294967295); //@line 1003 "bz2module.c"
        var $172=HEAP[$171]; //@line 1003 "bz2module.c"
        var $173=(($172+24)&4294967295); //@line 1003 "bz2module.c"
        var $174=HEAP[$173]; //@line 1003 "bz2module.c"
        var $175=HEAP[$list]; //@line 1003 "bz2module.c"
        FUNCTION_TABLE[$174]($175); //@line 1003 "bz2module.c"
        __label__ = 42; break; //@line 1003 "bz2module.c"
      case 42: // $bb41
        var $176=HEAP[$iter]; //@line 1004 "bz2module.c"
        var $177=($176)!=0; //@line 1004 "bz2module.c"
        if ($177) { __label__ = 43; break; } else { __label__ = 45; break; } //@line 1004 "bz2module.c"
      case 43: // $bb42
        var $178=HEAP[$iter]; //@line 1004 "bz2module.c"
        var $179=(($178)&4294967295); //@line 1004 "bz2module.c"
        var $180=HEAP[$179]; //@line 1004 "bz2module.c"
        var $181=((($180) - 1)&4294967295); //@line 1004 "bz2module.c"
        var $182=HEAP[$iter]; //@line 1004 "bz2module.c"
        var $183=(($182)&4294967295); //@line 1004 "bz2module.c"
        HEAP[$183]=$181; //@line 1004 "bz2module.c"
        var $184=HEAP[$iter]; //@line 1004 "bz2module.c"
        var $185=(($184)&4294967295); //@line 1004 "bz2module.c"
        var $186=HEAP[$185]; //@line 1004 "bz2module.c"
        var $187=((($186))|0)==0; //@line 1004 "bz2module.c"
        if ($187) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1004 "bz2module.c"
      case 44: // $bb43
        var $188=HEAP[$iter]; //@line 1004 "bz2module.c"
        var $189=(($188+4)&4294967295); //@line 1004 "bz2module.c"
        var $190=HEAP[$189]; //@line 1004 "bz2module.c"
        var $191=(($190+24)&4294967295); //@line 1004 "bz2module.c"
        var $192=HEAP[$191]; //@line 1004 "bz2module.c"
        var $193=HEAP[$iter]; //@line 1004 "bz2module.c"
        FUNCTION_TABLE[$192]($193); //@line 1004 "bz2module.c"
        __label__ = 45; break; //@line 1004 "bz2module.c"
      case 45: // $bb44
        var $194=HEAP[$ret]; //@line 1005 "bz2module.c"
        HEAP[$0]=$194; //@line 1005 "bz2module.c"
        var $195=HEAP[$0]; //@line 1005 "bz2module.c"
        HEAP[$retval]=$195; //@line 1005 "bz2module.c"
        __label__ = 46; break; //@line 1005 "bz2module.c"
      case 46: // $return
        var $retval45=HEAP[$retval]; //@line 1005 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 1005 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_seek($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8264; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8264);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_139=__stackBase__+12;
        var $0=__stackBase__+20;
        var $where=__stackBase__+24;
        var $offobj=__stackBase__+28;
        var $offset=__stackBase__+32;
        var $small_buffer=__stackBase__+40;
        var $buffer=__stackBase__+8232;
        var $buffersize=__stackBase__+8236;
        var $bytesread=__stackBase__+8240;
        var $readsize=__stackBase__+8248;
        var $chunksize=__stackBase__+8252;
        var $bzerror=__stackBase__+8256;
        var $ret=__stackBase__+8260;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$where]=0; //@line 1025 "bz2module.c"
        var $small_buffer1=$small_buffer; //@line 1029 "bz2module.c"
        HEAP[$buffer]=$small_buffer1; //@line 1029 "bz2module.c"
        HEAP[$buffersize]=8192; //@line 1030 "bz2module.c"
        HEAP[$bytesread]=0; //@line 1031 "bz2module.c"
        HEAP[$ret]=0; //@line 1035 "bz2module.c"
        var $1=HEAP[$args_addr]; //@line 1037 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, ((__str23)&4294967295), $offobj, $where); //@line 1037 "bz2module.c"
        var $3=((($2))|0)==0; //@line 1037 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1037 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1038 "bz2module.c"
        __label__ = 49; break; //@line 1038 "bz2module.c"
      case 2: // $bb2
        var $4=HEAP[$offobj]; //@line 1042 "bz2module.c"
        var $5=(($4+4)&4294967295); //@line 1042 "bz2module.c"
        var $6=HEAP[$5]; //@line 1042 "bz2module.c"
        var $7=(($6+84)&4294967295); //@line 1042 "bz2module.c"
        var $8=HEAP[$7]; //@line 1042 "bz2module.c"
        var $9=($8) & 16777216; //@line 1042 "bz2module.c"
        var $10=((($9))|0)!=0; //@line 1042 "bz2module.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1042 "bz2module.c"
      case 3: // $bb3
        var $11=HEAP[$offobj]; //@line 1042 "bz2module.c"
        var $12=_PyLong_AsLongLong($11); //@line 1042 "bz2module.c"
        HEAP[$iftmp_139]=$12; //@line 1042 "bz2module.c"
        __label__ = 5; break; //@line 1042 "bz2module.c"
      case 4: // $bb4
        var $13=HEAP[$offobj]; //@line 1042 "bz2module.c"
        var $14=_PyInt_AsLong($13); //@line 1042 "bz2module.c"
        var $15=((($14))|0); //@line 1042 "bz2module.c"
        HEAP[$iftmp_139]=$15; //@line 1042 "bz2module.c"
        __label__ = 5; break; //@line 1042 "bz2module.c"
      case 5: // $bb5
        var $16=HEAP[$iftmp_139]; //@line 1042 "bz2module.c"
        HEAP[$offset]=$16; //@line 1042 "bz2module.c"
        var $17=_PyErr_Occurred(); //@line 1045 "bz2module.c"
        var $18=($17)!=0; //@line 1045 "bz2module.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1045 "bz2module.c"
      case 6: // $bb6
        HEAP[$0]=0; //@line 1046 "bz2module.c"
        __label__ = 49; break; //@line 1046 "bz2module.c"
      case 7: // $bb7
        var $19=HEAP[$self_addr]; //@line 1049 "bz2module.c"
        _Util_DropReadAhead($19); //@line 1049 "bz2module.c"
        var $20=HEAP[$self_addr]; //@line 1050 "bz2module.c"
        var $21=(($20+44)&4294967295); //@line 1050 "bz2module.c"
        var $22=HEAP[$21]; //@line 1050 "bz2module.c"
        if ($22 == 0) {
          __label__ = 9; break;
        }
        else if ($22 == 1) {
          __label__ = 8; break;
        }
        else if ($22 == 2) {
          __label__ = 8; break;
        }
        else {
        __label__ = 10; break;
        }
        
      case 8: // $bb8
        var $23=HEAP[$where]; //@line 1066 "bz2module.c"
        var $24=((($23))|0)==2; //@line 1066 "bz2module.c"
        if ($24) { __label__ = 11; break; } else { __label__ = 20; break; } //@line 1066 "bz2module.c"
      case 9: // $bb9
        var $25=HEAP[_PyExc_ValueError]; //@line 1056 "bz2module.c"
        _PyErr_SetString($25, ((__str14)&4294967295)); //@line 1056 "bz2module.c"
        __label__ = 48; break; //@line 1056 "bz2module.c"
      case 10: // $bb10
        var $26=HEAP[_PyExc_IOError]; //@line 1061 "bz2module.c"
        _PyErr_SetString($26, ((__str24)&4294967295)); //@line 1061 "bz2module.c"
        __label__ = 48; break; //@line 1061 "bz2module.c"
      case 11: // $bb11
        var $27=HEAP[$self_addr]; //@line 1067 "bz2module.c"
        var $28=(($27+56)&4294967295); //@line 1067 "bz2module.c"
        var $29=HEAP[$28]; //@line 1067 "bz2module.c"
        var $30=reSign(($29), 64, 0)==-1; //@line 1067 "bz2module.c"
        if ($30) { __label__ = 12; break; } else { __label__ = 19; break; } //@line 1067 "bz2module.c"
      case 12: // $bb12
        var $31=HEAP[$self_addr]; //@line 1068 "bz2module.c"
        var $32=(($31+44)&4294967295); //@line 1068 "bz2module.c"
        var $33=HEAP[$32]; //@line 1068 "bz2module.c"
        var $34=((($33))|0)==2; //@line 1068 "bz2module.c"
        if ($34) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1068 "bz2module.c"
      case 13: // $bb13
        ___assert_fail(((__str25)&4294967295), ((__str9)&4294967295), 1068, ((___PRETTY_FUNCTION___9317)&4294967295)); //@line 1068 "bz2module.c"
        throw "Reached an unreachable! Original .ll line: 2947"; //@line 1068 "bz2module.c"
      case 14: // $bb14
        var $35=HEAP[$self_addr]; //@line 1071 "bz2module.c"
        var $36=(($35+40)&4294967295); //@line 1071 "bz2module.c"
        var $37=HEAP[$36]; //@line 1071 "bz2module.c"
        var $38=HEAP[$buffer]; //@line 1071 "bz2module.c"
        var $39=HEAP[$buffersize]; //@line 1071 "bz2module.c"
        var $40=HEAP[$self_addr]; //@line 1071 "bz2module.c"
        var $41=_Util_UnivNewlineRead($bzerror, $37, $38, $39, $40); //@line 1071 "bz2module.c"
        HEAP[$chunksize]=$41; //@line 1071 "bz2module.c"
        var $42=HEAP[$self_addr]; //@line 1075 "bz2module.c"
        var $43=(($42+48)&4294967295); //@line 1075 "bz2module.c"
        var $44=HEAP[$43]; //@line 1075 "bz2module.c"
        var $45=HEAP[$chunksize]; //@line 1075 "bz2module.c"
        var $46=((($45))|0); //@line 1075 "bz2module.c"
        var $47=($44) + ($46); //@line 1075 "bz2module.c"
        var $48=HEAP[$self_addr]; //@line 1075 "bz2module.c"
        var $49=(($48+48)&4294967295); //@line 1075 "bz2module.c"
        HEAP[$49]=$47; //@line 1075 "bz2module.c"
        var $50=HEAP[$chunksize]; //@line 1078 "bz2module.c"
        var $51=((($50))|0); //@line 1078 "bz2module.c"
        var $52=HEAP[$bytesread]; //@line 1078 "bz2module.c"
        var $53=($51) + ($52); //@line 1078 "bz2module.c"
        HEAP[$bytesread]=$53; //@line 1078 "bz2module.c"
        var $54=HEAP[$bzerror]; //@line 1079 "bz2module.c"
        var $55=((($54))|0)==4; //@line 1079 "bz2module.c"
        if ($55) { __label__ = 18; break; } else { __label__ = 15; break; } //@line 1079 "bz2module.c"
      case 15: // $bb15
        var $56=HEAP[$bzerror]; //@line 1081 "bz2module.c"
        var $57=((($56))|0)!=0; //@line 1081 "bz2module.c"
        if ($57) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1081 "bz2module.c"
      case 16: // $bb16
        var $58=HEAP[$bzerror]; //@line 1082 "bz2module.c"
        var $59=_Util_CatchBZ2Error($58); //@line 1082 "bz2module.c"
        __label__ = 48; break; //@line 1082 "bz2module.c"
      case 17: // $bb17
        __label__ = 14; break; //@line 1082 "bz2module.c"
      case 18: // $bb18
        var $60=HEAP[$self_addr]; //@line 1086 "bz2module.c"
        var $61=(($60+44)&4294967295); //@line 1086 "bz2module.c"
        HEAP[$61]=2; //@line 1086 "bz2module.c"
        var $62=HEAP[$self_addr]; //@line 1087 "bz2module.c"
        var $63=(($62+48)&4294967295); //@line 1087 "bz2module.c"
        var $64=HEAP[$63]; //@line 1087 "bz2module.c"
        var $65=HEAP[$self_addr]; //@line 1087 "bz2module.c"
        var $66=(($65+56)&4294967295); //@line 1087 "bz2module.c"
        HEAP[$66]=$64; //@line 1087 "bz2module.c"
        HEAP[$bytesread]=0; //@line 1088 "bz2module.c"
        __label__ = 19; break; //@line 1088 "bz2module.c"
      case 19: // $bb19
        var $67=HEAP[$self_addr]; //@line 1090 "bz2module.c"
        var $68=(($67+56)&4294967295); //@line 1090 "bz2module.c"
        var $69=HEAP[$68]; //@line 1090 "bz2module.c"
        var $70=HEAP[$offset]; //@line 1090 "bz2module.c"
        var $71=($69) + ($70); //@line 1090 "bz2module.c"
        HEAP[$offset]=$71; //@line 1090 "bz2module.c"
        __label__ = 22; break; //@line 1090 "bz2module.c"
      case 20: // $bb20
        var $72=HEAP[$where]; //@line 1091 "bz2module.c"
        var $73=((($72))|0)==1; //@line 1091 "bz2module.c"
        if ($73) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1091 "bz2module.c"
      case 21: // $bb21
        var $74=HEAP[$self_addr]; //@line 1092 "bz2module.c"
        var $75=(($74+48)&4294967295); //@line 1092 "bz2module.c"
        var $76=HEAP[$75]; //@line 1092 "bz2module.c"
        var $77=HEAP[$offset]; //@line 1092 "bz2module.c"
        var $78=($76) + ($77); //@line 1092 "bz2module.c"
        HEAP[$offset]=$78; //@line 1092 "bz2module.c"
        __label__ = 22; break; //@line 1092 "bz2module.c"
      case 22: // $bb22
        var $79=HEAP[$self_addr]; //@line 1098 "bz2module.c"
        var $80=(($79+48)&4294967295); //@line 1098 "bz2module.c"
        var $81=HEAP[$80]; //@line 1098 "bz2module.c"
        var $82=HEAP[$offset]; //@line 1098 "bz2module.c"
        var $83=reSign(($81), 64, 0) <= reSign(($82), 64, 0); //@line 1098 "bz2module.c"
        if ($83) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1098 "bz2module.c"
      case 23: // $bb23
        var $84=HEAP[$self_addr]; //@line 1100 "bz2module.c"
        var $85=(($84+48)&4294967295); //@line 1100 "bz2module.c"
        var $86=HEAP[$85]; //@line 1100 "bz2module.c"
        var $87=HEAP[$offset]; //@line 1100 "bz2module.c"
        var $88=($87) - ($86); //@line 1100 "bz2module.c"
        HEAP[$offset]=$88; //@line 1100 "bz2module.c"
        __label__ = 36; break; //@line 1100 "bz2module.c"
      case 24: // $bb24
        var $89=HEAP[$self_addr]; //@line 1103 "bz2module.c"
        var $90=(($89+40)&4294967295); //@line 1103 "bz2module.c"
        var $91=HEAP[$90]; //@line 1103 "bz2module.c"
        _BZ2_bzReadClose($bzerror, $91); //@line 1103 "bz2module.c"
        var $92=HEAP[$self_addr]; //@line 1104 "bz2module.c"
        var $93=(($92+40)&4294967295); //@line 1104 "bz2module.c"
        var $94=HEAP[$93]; //@line 1104 "bz2module.c"
        var $95=($94)!=0; //@line 1104 "bz2module.c"
        if ($95) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1104 "bz2module.c"
      case 25: // $bb25
        var $96=HEAP[$self_addr]; //@line 1105 "bz2module.c"
        var $97=(($96+8)&4294967295); //@line 1105 "bz2module.c"
        var $98=HEAP[$97]; //@line 1105 "bz2module.c"
        var $99=$98; //@line 1105 "bz2module.c"
        _PyFile_DecUseCount($99); //@line 1105 "bz2module.c"
        var $100=HEAP[$self_addr]; //@line 1106 "bz2module.c"
        var $101=(($100+40)&4294967295); //@line 1106 "bz2module.c"
        HEAP[$101]=0; //@line 1106 "bz2module.c"
        __label__ = 26; break; //@line 1106 "bz2module.c"
      case 26: // $bb26
        var $102=HEAP[$bzerror]; //@line 1108 "bz2module.c"
        var $103=((($102))|0)!=0; //@line 1108 "bz2module.c"
        if ($103) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1108 "bz2module.c"
      case 27: // $bb27
        var $104=HEAP[$bzerror]; //@line 1109 "bz2module.c"
        var $105=_Util_CatchBZ2Error($104); //@line 1109 "bz2module.c"
        __label__ = 48; break; //@line 1109 "bz2module.c"
      case 28: // $bb28
        var $106=HEAP[$self_addr]; //@line 1112 "bz2module.c"
        var $107=(($106+8)&4294967295); //@line 1112 "bz2module.c"
        var $108=HEAP[$107]; //@line 1112 "bz2module.c"
        var $109=_PyObject_CallMethod($108, ((__str26)&4294967295), ((__str27)&4294967295), 0); //@line 1112 "bz2module.c"
        HEAP[$ret]=$109; //@line 1112 "bz2module.c"
        var $110=HEAP[$ret]; //@line 1113 "bz2module.c"
        var $111=($110)==0; //@line 1113 "bz2module.c"
        if ($111) { __label__ = 48; break; } else { __label__ = 29; break; } //@line 1113 "bz2module.c"
      case 29: // $bb29
        var $112=HEAP[$ret]; //@line 1115 "bz2module.c"
        var $113=(($112)&4294967295); //@line 1115 "bz2module.c"
        var $114=HEAP[$113]; //@line 1115 "bz2module.c"
        var $115=((($114) - 1)&4294967295); //@line 1115 "bz2module.c"
        var $116=HEAP[$ret]; //@line 1115 "bz2module.c"
        var $117=(($116)&4294967295); //@line 1115 "bz2module.c"
        HEAP[$117]=$115; //@line 1115 "bz2module.c"
        var $118=HEAP[$ret]; //@line 1115 "bz2module.c"
        var $119=(($118)&4294967295); //@line 1115 "bz2module.c"
        var $120=HEAP[$119]; //@line 1115 "bz2module.c"
        var $121=((($120))|0)==0; //@line 1115 "bz2module.c"
        if ($121) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1115 "bz2module.c"
      case 30: // $bb30
        var $122=HEAP[$ret]; //@line 1115 "bz2module.c"
        var $123=(($122+4)&4294967295); //@line 1115 "bz2module.c"
        var $124=HEAP[$123]; //@line 1115 "bz2module.c"
        var $125=(($124+24)&4294967295); //@line 1115 "bz2module.c"
        var $126=HEAP[$125]; //@line 1115 "bz2module.c"
        var $127=HEAP[$ret]; //@line 1115 "bz2module.c"
        FUNCTION_TABLE[$126]($127); //@line 1115 "bz2module.c"
        __label__ = 31; break; //@line 1115 "bz2module.c"
      case 31: // $bb31
        HEAP[$ret]=0; //@line 1116 "bz2module.c"
        var $128=HEAP[$self_addr]; //@line 1117 "bz2module.c"
        var $129=(($128+48)&4294967295); //@line 1117 "bz2module.c"
        HEAP[$129]=0; //@line 1117 "bz2module.c"
        var $130=HEAP[$self_addr]; //@line 1118 "bz2module.c"
        var $131=(($130+8)&4294967295); //@line 1118 "bz2module.c"
        var $132=HEAP[$131]; //@line 1118 "bz2module.c"
        var $133=_PyFile_AsFile($132); //@line 1118 "bz2module.c"
        var $134=_BZ2_bzReadOpen($bzerror, $133, 0, 0, 0, 0); //@line 1118 "bz2module.c"
        var $135=HEAP[$self_addr]; //@line 1118 "bz2module.c"
        var $136=(($135+40)&4294967295); //@line 1118 "bz2module.c"
        HEAP[$136]=$134; //@line 1118 "bz2module.c"
        var $137=HEAP[$self_addr]; //@line 1120 "bz2module.c"
        var $138=(($137+40)&4294967295); //@line 1120 "bz2module.c"
        var $139=HEAP[$138]; //@line 1120 "bz2module.c"
        var $140=($139)!=0; //@line 1120 "bz2module.c"
        if ($140) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1120 "bz2module.c"
      case 32: // $bb32
        var $141=HEAP[$self_addr]; //@line 1121 "bz2module.c"
        var $142=(($141+8)&4294967295); //@line 1121 "bz2module.c"
        var $143=HEAP[$142]; //@line 1121 "bz2module.c"
        var $144=$143; //@line 1121 "bz2module.c"
        _PyFile_IncUseCount($144); //@line 1121 "bz2module.c"
        __label__ = 33; break; //@line 1121 "bz2module.c"
      case 33: // $bb33
        var $145=HEAP[$bzerror]; //@line 1122 "bz2module.c"
        var $146=((($145))|0)!=0; //@line 1122 "bz2module.c"
        if ($146) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1122 "bz2module.c"
      case 34: // $bb34
        var $147=HEAP[$bzerror]; //@line 1123 "bz2module.c"
        var $148=_Util_CatchBZ2Error($147); //@line 1123 "bz2module.c"
        __label__ = 48; break; //@line 1123 "bz2module.c"
      case 35: // $bb35
        var $149=HEAP[$self_addr]; //@line 1126 "bz2module.c"
        var $150=(($149+44)&4294967295); //@line 1126 "bz2module.c"
        HEAP[$150]=1; //@line 1126 "bz2module.c"
        __label__ = 36; break; //@line 1126 "bz2module.c"
      case 36: // $bb36
        var $151=HEAP[$offset]; //@line 1129 "bz2module.c"
        var $152=reSign(($151), 64, 0) <= 0; //@line 1129 "bz2module.c"
        if ($152) { __label__ = 47; break; } else { __label__ = 37; break; } //@line 1129 "bz2module.c"
      case 37: // $bb37
        var $153=HEAP[$self_addr]; //@line 1129 "bz2module.c"
        var $154=(($153+44)&4294967295); //@line 1129 "bz2module.c"
        var $155=HEAP[$154]; //@line 1129 "bz2module.c"
        var $156=((($155))|0)==2; //@line 1129 "bz2module.c"
        if ($156) { __label__ = 47; break; } else { __label__ = 38; break; } //@line 1129 "bz2module.c"
      case 38: // $bb38
        var $157=HEAP[$offset]; //@line 1135 "bz2module.c"
        var $158=HEAP[$bytesread]; //@line 1135 "bz2module.c"
        var $159=($157) - ($158); //@line 1135 "bz2module.c"
        var $160=HEAP[$buffersize]; //@line 1135 "bz2module.c"
        var $161=((($160))>>>0); //@line 1135 "bz2module.c"
        var $162=reSign(($159), 64, 0) > reSign(($161), 64, 0); //@line 1135 "bz2module.c"
        if ($162) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 1135 "bz2module.c"
      case 39: // $bb39
        var $163=HEAP[$buffersize]; //@line 1136 "bz2module.c"
        HEAP[$readsize]=$163; //@line 1136 "bz2module.c"
        __label__ = 41; break; //@line 1136 "bz2module.c"
      case 40: // $bb40
        var $164=HEAP[$offset]; //@line 1141 "bz2module.c"
        var $165=((($164)) & 4294967295); //@line 1141 "bz2module.c"
        var $166=HEAP[$bytesread]; //@line 1141 "bz2module.c"
        var $167=((($166)) & 4294967295); //@line 1141 "bz2module.c"
        var $168=((($165) - ($167))&4294967295); //@line 1141 "bz2module.c"
        HEAP[$readsize]=$168; //@line 1141 "bz2module.c"
        __label__ = 41; break; //@line 1141 "bz2module.c"
      case 41: // $bb41
        var $169=HEAP[$self_addr]; //@line 1143 "bz2module.c"
        var $170=(($169+40)&4294967295); //@line 1143 "bz2module.c"
        var $171=HEAP[$170]; //@line 1143 "bz2module.c"
        var $172=HEAP[$buffer]; //@line 1143 "bz2module.c"
        var $173=HEAP[$readsize]; //@line 1143 "bz2module.c"
        var $174=HEAP[$self_addr]; //@line 1143 "bz2module.c"
        var $175=_Util_UnivNewlineRead($bzerror, $171, $172, $173, $174); //@line 1143 "bz2module.c"
        HEAP[$chunksize]=$175; //@line 1143 "bz2module.c"
        var $176=HEAP[$self_addr]; //@line 1145 "bz2module.c"
        var $177=(($176+48)&4294967295); //@line 1145 "bz2module.c"
        var $178=HEAP[$177]; //@line 1145 "bz2module.c"
        var $179=HEAP[$chunksize]; //@line 1145 "bz2module.c"
        var $180=((($179))|0); //@line 1145 "bz2module.c"
        var $181=($178) + ($180); //@line 1145 "bz2module.c"
        var $182=HEAP[$self_addr]; //@line 1145 "bz2module.c"
        var $183=(($182+48)&4294967295); //@line 1145 "bz2module.c"
        HEAP[$183]=$181; //@line 1145 "bz2module.c"
        var $184=HEAP[$chunksize]; //@line 1147 "bz2module.c"
        var $185=((($184))|0); //@line 1147 "bz2module.c"
        var $186=HEAP[$bytesread]; //@line 1147 "bz2module.c"
        var $187=($185) + ($186); //@line 1147 "bz2module.c"
        HEAP[$bytesread]=$187; //@line 1147 "bz2module.c"
        var $188=HEAP[$bzerror]; //@line 1148 "bz2module.c"
        var $189=((($188))|0)==4; //@line 1148 "bz2module.c"
        if ($189) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1148 "bz2module.c"
      case 42: // $bb42
        var $190=HEAP[$self_addr]; //@line 1149 "bz2module.c"
        var $191=(($190+48)&4294967295); //@line 1149 "bz2module.c"
        var $192=HEAP[$191]; //@line 1149 "bz2module.c"
        var $193=HEAP[$self_addr]; //@line 1149 "bz2module.c"
        var $194=(($193+56)&4294967295); //@line 1149 "bz2module.c"
        HEAP[$194]=$192; //@line 1149 "bz2module.c"
        var $195=HEAP[$self_addr]; //@line 1150 "bz2module.c"
        var $196=(($195+44)&4294967295); //@line 1150 "bz2module.c"
        HEAP[$196]=2; //@line 1150 "bz2module.c"
        __label__ = 47; break; //@line 1150 "bz2module.c"
      case 43: // $bb43
        var $197=HEAP[$bzerror]; //@line 1152 "bz2module.c"
        var $198=((($197))|0)!=0; //@line 1152 "bz2module.c"
        if ($198) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1152 "bz2module.c"
      case 44: // $bb44
        var $199=HEAP[$bzerror]; //@line 1153 "bz2module.c"
        var $200=_Util_CatchBZ2Error($199); //@line 1153 "bz2module.c"
        __label__ = 48; break; //@line 1153 "bz2module.c"
      case 45: // $bb45
        var $201=HEAP[$bytesread]; //@line 1156 "bz2module.c"
        var $202=HEAP[$offset]; //@line 1156 "bz2module.c"
        var $203=reSign(($201), 64, 0)==reSign(($202), 64, 0); //@line 1156 "bz2module.c"
        if ($203) { __label__ = 47; break; } else { __label__ = 46; break; } //@line 1156 "bz2module.c"
      case 46: // $bb46
        __label__ = 38; break; //@line 1156 "bz2module.c"
      case 47: // $exit
        var $204=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1161 "bz2module.c"
        var $205=((($204) + 1)&4294967295); //@line 1161 "bz2module.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$205; //@line 1161 "bz2module.c"
        HEAP[$ret]=__Py_NoneStruct; //@line 1162 "bz2module.c"
        __label__ = 48; break; //@line 1164 "bz2module.c"
      case 48: // $cleanup
        var $206=HEAP[$ret]; //@line 1166 "bz2module.c"
        HEAP[$0]=$206; //@line 1166 "bz2module.c"
        __label__ = 49; break; //@line 1166 "bz2module.c"
      case 49: // $bb47
        var $207=HEAP[$0]; //@line 1038 "bz2module.c"
        HEAP[$retval]=$207; //@line 1038 "bz2module.c"
        __label__ = 50; break; //@line 1038 "bz2module.c"
      case 50: // $return
        var $retval48=HEAP[$retval]; //@line 1038 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval48; //@line 1038 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_tell($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ret=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$ret]=0; //@line 1178 "bz2module.c"
        var $1=HEAP[$self_addr]; //@line 1180 "bz2module.c"
        var $2=(($1+44)&4294967295); //@line 1180 "bz2module.c"
        var $3=HEAP[$2]; //@line 1180 "bz2module.c"
        var $4=((($3))|0)==0; //@line 1180 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1180 "bz2module.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 1181 "bz2module.c"
        _PyErr_SetString($5, ((__str14)&4294967295)); //@line 1181 "bz2module.c"
        __label__ = 3; break; //@line 1181 "bz2module.c"
      case 2: // $bb1
        var $6=HEAP[$self_addr]; //@line 1189 "bz2module.c"
        var $7=(($6+48)&4294967295); //@line 1189 "bz2module.c"
        var $8=HEAP[$7]; //@line 1189 "bz2module.c"
        var $9=_PyLong_FromLongLong($8); //@line 1189 "bz2module.c"
        HEAP[$ret]=$9; //@line 1189 "bz2module.c"
        __label__ = 3; break; //@line 1192 "bz2module.c"
      case 3: // $cleanup
        var $10=HEAP[$ret]; //@line 1193 "bz2module.c"
        HEAP[$0]=$10; //@line 1193 "bz2module.c"
        var $11=HEAP[$0]; //@line 1193 "bz2module.c"
        HEAP[$retval]=$11; //@line 1193 "bz2module.c"
        __label__ = 4; break; //@line 1193 "bz2module.c"
      case 4: // $return
        var $retval2=HEAP[$retval]; //@line 1193 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 1193 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_close($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $ret=__stackBase__+12;
        var $bzerror=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$ret]=0; //@line 1207 "bz2module.c"
        HEAP[$bzerror]=0; //@line 1208 "bz2module.c"
        var $1=HEAP[$self_addr]; //@line 1211 "bz2module.c"
        var $2=(($1+44)&4294967295); //@line 1211 "bz2module.c"
        var $3=HEAP[$2]; //@line 1211 "bz2module.c"
        if ($3 == 1) {
          __label__ = 1; break;
        }
        else if ($3 == 2) {
          __label__ = 1; break;
        }
        else if ($3 == 3) {
          __label__ = 2; break;
        }
        else {
        __label__ = 3; break;
        }
        
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 1214 "bz2module.c"
        var $5=(($4+40)&4294967295); //@line 1214 "bz2module.c"
        var $6=HEAP[$5]; //@line 1214 "bz2module.c"
        _BZ2_bzReadClose($bzerror, $6); //@line 1214 "bz2module.c"
        __label__ = 3; break; //@line 1214 "bz2module.c"
      case 2: // $bb1
        var $7=HEAP[$self_addr]; //@line 1217 "bz2module.c"
        var $8=(($7+40)&4294967295); //@line 1217 "bz2module.c"
        var $9=HEAP[$8]; //@line 1217 "bz2module.c"
        _BZ2_bzWriteClose($bzerror, $9, 0, 0, 0); //@line 1217 "bz2module.c"
        __label__ = 3; break; //@line 1217 "bz2module.c"
      case 3: // $bb2
        var $10=HEAP[$self_addr]; //@line 1221 "bz2module.c"
        var $11=(($10+40)&4294967295); //@line 1221 "bz2module.c"
        var $12=HEAP[$11]; //@line 1221 "bz2module.c"
        var $13=($12)!=0; //@line 1221 "bz2module.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1221 "bz2module.c"
      case 4: // $bb3
        var $14=HEAP[$self_addr]; //@line 1222 "bz2module.c"
        var $15=(($14+8)&4294967295); //@line 1222 "bz2module.c"
        var $16=HEAP[$15]; //@line 1222 "bz2module.c"
        var $17=$16; //@line 1222 "bz2module.c"
        _PyFile_DecUseCount($17); //@line 1222 "bz2module.c"
        var $18=HEAP[$self_addr]; //@line 1223 "bz2module.c"
        var $19=(($18+40)&4294967295); //@line 1223 "bz2module.c"
        HEAP[$19]=0; //@line 1223 "bz2module.c"
        __label__ = 5; break; //@line 1223 "bz2module.c"
      case 5: // $bb4
        var $20=HEAP[$self_addr]; //@line 1225 "bz2module.c"
        var $21=(($20+44)&4294967295); //@line 1225 "bz2module.c"
        HEAP[$21]=0; //@line 1225 "bz2module.c"
        var $22=HEAP[$self_addr]; //@line 1226 "bz2module.c"
        var $23=(($22+8)&4294967295); //@line 1226 "bz2module.c"
        var $24=HEAP[$23]; //@line 1226 "bz2module.c"
        var $25=_PyObject_CallMethod($24, ((__str28)&4294967295), 0); //@line 1226 "bz2module.c"
        HEAP[$ret]=$25; //@line 1226 "bz2module.c"
        var $26=HEAP[$bzerror]; //@line 1227 "bz2module.c"
        var $27=((($26))|0)!=0; //@line 1227 "bz2module.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 1227 "bz2module.c"
      case 6: // $bb5
        var $28=HEAP[$bzerror]; //@line 1228 "bz2module.c"
        var $29=_Util_CatchBZ2Error($28); //@line 1228 "bz2module.c"
        var $30=HEAP[$ret]; //@line 1229 "bz2module.c"
        var $31=($30)!=0; //@line 1229 "bz2module.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1229 "bz2module.c"
      case 7: // $bb6
        var $32=HEAP[$ret]; //@line 1229 "bz2module.c"
        var $33=(($32)&4294967295); //@line 1229 "bz2module.c"
        var $34=HEAP[$33]; //@line 1229 "bz2module.c"
        var $35=((($34) - 1)&4294967295); //@line 1229 "bz2module.c"
        var $36=HEAP[$ret]; //@line 1229 "bz2module.c"
        var $37=(($36)&4294967295); //@line 1229 "bz2module.c"
        HEAP[$37]=$35; //@line 1229 "bz2module.c"
        var $38=HEAP[$ret]; //@line 1229 "bz2module.c"
        var $39=(($38)&4294967295); //@line 1229 "bz2module.c"
        var $40=HEAP[$39]; //@line 1229 "bz2module.c"
        var $41=((($40))|0)==0; //@line 1229 "bz2module.c"
        if ($41) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1229 "bz2module.c"
      case 8: // $bb7
        var $42=HEAP[$ret]; //@line 1229 "bz2module.c"
        var $43=(($42+4)&4294967295); //@line 1229 "bz2module.c"
        var $44=HEAP[$43]; //@line 1229 "bz2module.c"
        var $45=(($44+24)&4294967295); //@line 1229 "bz2module.c"
        var $46=HEAP[$45]; //@line 1229 "bz2module.c"
        var $47=HEAP[$ret]; //@line 1229 "bz2module.c"
        FUNCTION_TABLE[$46]($47); //@line 1229 "bz2module.c"
        __label__ = 9; break; //@line 1229 "bz2module.c"
      case 9: // $bb8
        HEAP[$ret]=0; //@line 1230 "bz2module.c"
        __label__ = 10; break; //@line 1230 "bz2module.c"
      case 10: // $bb9
        var $48=HEAP[$ret]; //@line 1234 "bz2module.c"
        HEAP[$0]=$48; //@line 1234 "bz2module.c"
        var $49=HEAP[$0]; //@line 1234 "bz2module.c"
        HEAP[$retval]=$49; //@line 1234 "bz2module.c"
        __label__ = 11; break; //@line 1234 "bz2module.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 1234 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1234 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_enter($self) {
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
        var $1=HEAP[$self_addr]; //@line 1243 "bz2module.c"
        var $2=(($1+44)&4294967295); //@line 1243 "bz2module.c"
        var $3=HEAP[$2]; //@line 1243 "bz2module.c"
        var $4=((($3))|0)==0; //@line 1243 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1243 "bz2module.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 1244 "bz2module.c"
        _PyErr_SetString($5, ((__str14)&4294967295)); //@line 1244 "bz2module.c"
        HEAP[$0]=0; //@line 1246 "bz2module.c"
        __label__ = 3; break; //@line 1246 "bz2module.c"
      case 2: // $bb1
        var $6=HEAP[$self_addr]; //@line 1248 "bz2module.c"
        var $7=$6; //@line 1248 "bz2module.c"
        var $8=(($7)&4294967295); //@line 1248 "bz2module.c"
        var $9=HEAP[$8]; //@line 1248 "bz2module.c"
        var $10=((($9) + 1)&4294967295); //@line 1248 "bz2module.c"
        var $11=(($7)&4294967295); //@line 1248 "bz2module.c"
        HEAP[$11]=$10; //@line 1248 "bz2module.c"
        var $12=HEAP[$self_addr]; //@line 1249 "bz2module.c"
        var $13=$12; //@line 1249 "bz2module.c"
        HEAP[$0]=$13; //@line 1249 "bz2module.c"
        __label__ = 3; break; //@line 1249 "bz2module.c"
      case 3: // $bb2
        var $14=HEAP[$0]; //@line 1246 "bz2module.c"
        HEAP[$retval]=$14; //@line 1246 "bz2module.c"
        __label__ = 4; break; //@line 1246 "bz2module.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1246 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1246 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_exit($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ret=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$self_addr]; //@line 1258 "bz2module.c"
        var $2=$1; //@line 1258 "bz2module.c"
        var $3=_PyObject_CallMethod($2, ((__str28)&4294967295), 0); //@line 1258 "bz2module.c"
        HEAP[$ret]=$3; //@line 1258 "bz2module.c"
        var $4=HEAP[$ret]; //@line 1259 "bz2module.c"
        var $5=($4)==0; //@line 1259 "bz2module.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1259 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1261 "bz2module.c"
        __label__ = 5; break; //@line 1261 "bz2module.c"
      case 2: // $bb1
        var $6=HEAP[$ret]; //@line 1262 "bz2module.c"
        var $7=(($6)&4294967295); //@line 1262 "bz2module.c"
        var $8=HEAP[$7]; //@line 1262 "bz2module.c"
        var $9=((($8) - 1)&4294967295); //@line 1262 "bz2module.c"
        var $10=HEAP[$ret]; //@line 1262 "bz2module.c"
        var $11=(($10)&4294967295); //@line 1262 "bz2module.c"
        HEAP[$11]=$9; //@line 1262 "bz2module.c"
        var $12=HEAP[$ret]; //@line 1262 "bz2module.c"
        var $13=(($12)&4294967295); //@line 1262 "bz2module.c"
        var $14=HEAP[$13]; //@line 1262 "bz2module.c"
        var $15=((($14))|0)==0; //@line 1262 "bz2module.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1262 "bz2module.c"
      case 3: // $bb2
        var $16=HEAP[$ret]; //@line 1262 "bz2module.c"
        var $17=(($16+4)&4294967295); //@line 1262 "bz2module.c"
        var $18=HEAP[$17]; //@line 1262 "bz2module.c"
        var $19=(($18+24)&4294967295); //@line 1262 "bz2module.c"
        var $20=HEAP[$19]; //@line 1262 "bz2module.c"
        var $21=HEAP[$ret]; //@line 1262 "bz2module.c"
        FUNCTION_TABLE[$20]($21); //@line 1262 "bz2module.c"
        __label__ = 4; break; //@line 1262 "bz2module.c"
      case 4: // $bb3
        var $22=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1263 "bz2module.c"
        var $23=((($22) + 1)&4294967295); //@line 1263 "bz2module.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$23; //@line 1263 "bz2module.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1263 "bz2module.c"
        __label__ = 5; break; //@line 1263 "bz2module.c"
      case 5: // $bb4
        var $24=HEAP[$0]; //@line 1261 "bz2module.c"
        HEAP[$retval]=$24; //@line 1261 "bz2module.c"
        __label__ = 6; break; //@line 1261 "bz2module.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1261 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1261 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_get_newlines($self, $closure) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $closure_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$closure_addr]=$closure;
        var $1=HEAP[$self_addr]; //@line 1292 "bz2module.c"
        var $2=(($1+32)&4294967295); //@line 1292 "bz2module.c"
        var $3=HEAP[$2]; //@line 1292 "bz2module.c"
        if ($3 == 0) {
          __label__ = 1; break;
        }
        else if ($3 == 1) {
          __label__ = 2; break;
        }
        else if ($3 == 2) {
          __label__ = 3; break;
        }
        else if ($3 == 3) {
          __label__ = 4; break;
        }
        else if ($3 == 4) {
          __label__ = 5; break;
        }
        else if ($3 == 5) {
          __label__ = 6; break;
        }
        else if ($3 == 6) {
          __label__ = 7; break;
        }
        else if ($3 == 7) {
          __label__ = 8; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 1: // $bb
        var $4=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1294 "bz2module.c"
        var $5=((($4) + 1)&4294967295); //@line 1294 "bz2module.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$5; //@line 1294 "bz2module.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1295 "bz2module.c"
        __label__ = 10; break; //@line 1295 "bz2module.c"
      case 2: // $bb1
        var $6=_PyString_FromString(((__str38)&4294967295)); //@line 1297 "bz2module.c"
        HEAP[$0]=$6; //@line 1297 "bz2module.c"
        __label__ = 10; break; //@line 1297 "bz2module.c"
      case 3: // $bb2
        var $7=_PyString_FromString(((__str39)&4294967295)); //@line 1299 "bz2module.c"
        HEAP[$0]=$7; //@line 1299 "bz2module.c"
        __label__ = 10; break; //@line 1299 "bz2module.c"
      case 4: // $bb3
        var $8=_Py_BuildValue(((__str40)&4294967295), ((__str38)&4294967295), ((__str39)&4294967295)); //@line 1301 "bz2module.c"
        HEAP[$0]=$8; //@line 1301 "bz2module.c"
        __label__ = 10; break; //@line 1301 "bz2module.c"
      case 5: // $bb4
        var $9=_PyString_FromString(((__str41)&4294967295)); //@line 1303 "bz2module.c"
        HEAP[$0]=$9; //@line 1303 "bz2module.c"
        __label__ = 10; break; //@line 1303 "bz2module.c"
      case 6: // $bb5
        var $10=_Py_BuildValue(((__str40)&4294967295), ((__str38)&4294967295), ((__str41)&4294967295)); //@line 1305 "bz2module.c"
        HEAP[$0]=$10; //@line 1305 "bz2module.c"
        __label__ = 10; break; //@line 1305 "bz2module.c"
      case 7: // $bb6
        var $11=_Py_BuildValue(((__str40)&4294967295), ((__str39)&4294967295), ((__str41)&4294967295)); //@line 1307 "bz2module.c"
        HEAP[$0]=$11; //@line 1307 "bz2module.c"
        __label__ = 10; break; //@line 1307 "bz2module.c"
      case 8: // $bb7
        var $12=_Py_BuildValue(((__str42)&4294967295), ((__str38)&4294967295), ((__str39)&4294967295), ((__str41)&4294967295)); //@line 1309 "bz2module.c"
        HEAP[$0]=$12; //@line 1309 "bz2module.c"
        __label__ = 10; break; //@line 1309 "bz2module.c"
      case 9: // $bb8
        var $13=HEAP[$self_addr]; //@line 1311 "bz2module.c"
        var $14=(($13+32)&4294967295); //@line 1311 "bz2module.c"
        var $15=HEAP[$14]; //@line 1311 "bz2module.c"
        var $16=HEAP[_PyExc_SystemError]; //@line 1311 "bz2module.c"
        var $17=_PyErr_Format($16, ((__str43)&4294967295), $15); //@line 1311 "bz2module.c"
        HEAP[$0]=0; //@line 1314 "bz2module.c"
        __label__ = 10; break; //@line 1314 "bz2module.c"
      case 10: // $bb9
        var $18=HEAP[$0]; //@line 1295 "bz2module.c"
        HEAP[$retval]=$18; //@line 1295 "bz2module.c"
        __label__ = 11; break; //@line 1295 "bz2module.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 1295 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1295 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_get_closed($self, $closure) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $closure_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$closure_addr]=$closure;
        var $1=HEAP[$self_addr]; //@line 1321 "bz2module.c"
        var $2=(($1+44)&4294967295); //@line 1321 "bz2module.c"
        var $3=HEAP[$2]; //@line 1321 "bz2module.c"
        var $4=((($3))|0)==0; //@line 1321 "bz2module.c"
        var $5=unSign(($4), 1, 0); //@line 1321 "bz2module.c"
        var $6=_PyInt_FromLong($5); //@line 1321 "bz2module.c"
        HEAP[$0]=$6; //@line 1321 "bz2module.c"
        var $7=HEAP[$0]; //@line 1321 "bz2module.c"
        HEAP[$retval]=$7; //@line 1321 "bz2module.c"
        __label__ = 1; break; //@line 1321 "bz2module.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1321 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1321 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_get_mode($self, $closure) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $closure_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$closure_addr]=$closure;
        var $1=HEAP[$self_addr]; //@line 1327 "bz2module.c"
        var $2=(($1+8)&4294967295); //@line 1327 "bz2module.c"
        var $3=HEAP[$2]; //@line 1327 "bz2module.c"
        var $4=_PyObject_GetAttrString($3, ((__str44)&4294967295)); //@line 1327 "bz2module.c"
        HEAP[$0]=$4; //@line 1327 "bz2module.c"
        var $5=HEAP[$0]; //@line 1327 "bz2module.c"
        HEAP[$retval]=$5; //@line 1327 "bz2module.c"
        __label__ = 1; break; //@line 1327 "bz2module.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1327 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1327 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_get_name($self, $closure) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $closure_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$closure_addr]=$closure;
        var $1=HEAP[$self_addr]; //@line 1333 "bz2module.c"
        var $2=(($1+8)&4294967295); //@line 1333 "bz2module.c"
        var $3=HEAP[$2]; //@line 1333 "bz2module.c"
        var $4=_PyObject_GetAttrString($3, ((__str45)&4294967295)); //@line 1333 "bz2module.c"
        HEAP[$0]=$4; //@line 1333 "bz2module.c"
        var $5=HEAP[$0]; //@line 1333 "bz2module.c"
        HEAP[$retval]=$5; //@line 1333 "bz2module.c"
        __label__ = 1; break; //@line 1333 "bz2module.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1333 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1333 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_init($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $iftmp_181=__stackBase__+16;
        var $iftmp_173=__stackBase__+20;
        var $0=__stackBase__+24;
        var $name=__stackBase__+28;
        var $mode=__stackBase__+32;
        var $buffering=__stackBase__+36;
        var $compresslevel=__stackBase__+40;
        var $bzerror=__stackBase__+44;
        var $mode_char=__stackBase__+48;
        var $error=__stackBase__+52;
        var $_py_tmp=__stackBase__+56;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$mode]=((__str54)&4294967295); //@line 1370 "bz2module.c"
        HEAP[$buffering]=-1; //@line 1371 "bz2module.c"
        HEAP[$compresslevel]=9; //@line 1372 "bz2module.c"
        HEAP[$mode_char]=0; //@line 1374 "bz2module.c"
        var $1=HEAP[$self_addr]; //@line 1376 "bz2module.c"
        var $2=(($1+56)&4294967295); //@line 1376 "bz2module.c"
        HEAP[$2]=-1; //@line 1376 "bz2module.c"
        var $3=HEAP[$args_addr]; //@line 1378 "bz2module.c"
        var $4=HEAP[$kwargs_addr]; //@line 1378 "bz2module.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, ((__str55)&4294967295), ((_kwlist_9585)&4294967295), $name, $mode, $buffering, $compresslevel); //@line 1378 "bz2module.c"
        var $6=((($5))|0)==0; //@line 1378 "bz2module.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1378 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 1381 "bz2module.c"
        __label__ = 36; break; //@line 1381 "bz2module.c"
      case 2: // $bb1
        var $7=HEAP[$compresslevel]; //@line 1383 "bz2module.c"
        var $8=((($7))|0) <= 0; //@line 1383 "bz2module.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1383 "bz2module.c"
      case 3: // $bb2
        var $9=HEAP[$compresslevel]; //@line 1383 "bz2module.c"
        var $10=((($9))|0) > 9; //@line 1383 "bz2module.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1383 "bz2module.c"
      case 4: // $bb3
        var $11=HEAP[_PyExc_ValueError]; //@line 1384 "bz2module.c"
        _PyErr_SetString($11, ((__str59)&4294967295)); //@line 1384 "bz2module.c"
        HEAP[$0]=-1; //@line 1386 "bz2module.c"
        __label__ = 36; break; //@line 1386 "bz2module.c"
      case 5: // $bb4
        HEAP[$error]=0; //@line 1390 "bz2module.c"
        var $12=HEAP[$mode]; //@line 1391 "bz2module.c"
        var $13=HEAP[$12]; //@line 1391 "bz2module.c"
        var $14=reSign(($13), 8, 0); //@line 1391 "bz2module.c"
        if ($14 == 85) {
          __label__ = 10; break;
        }
        else if ($14 == 98) {
          __label__ = 9; break;
        }
        else if ($14 == 114) {
          __label__ = 6; break;
        }
        else if ($14 == 119) {
          __label__ = 6; break;
        }
        else {
        __label__ = 11; break;
        }
        
      case 6: // $bb5
        var $15=HEAP[$mode_char]; //@line 1394 "bz2module.c"
        var $16=((($15))|0)!=0; //@line 1394 "bz2module.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1394 "bz2module.c"
      case 7: // $bb6
        HEAP[$error]=1; //@line 1395 "bz2module.c"
        __label__ = 8; break; //@line 1395 "bz2module.c"
      case 8: // $bb7
        var $17=HEAP[$mode]; //@line 1396 "bz2module.c"
        var $18=HEAP[$17]; //@line 1396 "bz2module.c"
        var $19=reSign(($18), 8, 0); //@line 1396 "bz2module.c"
        HEAP[$mode_char]=$19; //@line 1396 "bz2module.c"
        __label__ = 12; break; //@line 1396 "bz2module.c"
      case 9: // $bb8
        __label__ = 12; break; //@line 1396 "bz2module.c"
      case 10: // $bb9
        var $20=HEAP[$self_addr]; //@line 1406 "bz2module.c"
        var $21=(($20+28)&4294967295); //@line 1406 "bz2module.c"
        HEAP[$21]=1; //@line 1406 "bz2module.c"
        __label__ = 12; break; //@line 1406 "bz2module.c"
      case 11: // $bb10
        HEAP[$error]=1; //@line 1411 "bz2module.c"
        __label__ = 12; break; //@line 1411 "bz2module.c"
      case 12: // $bb11
        var $22=HEAP[$error]; //@line 1414 "bz2module.c"
        var $23=((($22))|0)!=0; //@line 1414 "bz2module.c"
        if ($23) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1414 "bz2module.c"
      case 13: // $bb12
        var $24=HEAP[$mode]; //@line 1415 "bz2module.c"
        var $25=HEAP[$24]; //@line 1415 "bz2module.c"
        var $26=reSign(($25), 8, 0); //@line 1415 "bz2module.c"
        var $27=HEAP[_PyExc_ValueError]; //@line 1415 "bz2module.c"
        var $28=_PyErr_Format($27, ((__str60)&4294967295), $26); //@line 1415 "bz2module.c"
        HEAP[$0]=-1; //@line 1417 "bz2module.c"
        __label__ = 36; break; //@line 1417 "bz2module.c"
      case 14: // $bb13
        var $29=HEAP[$mode]; //@line 1419 "bz2module.c"
        var $30=(($29+1)&4294967295); //@line 1419 "bz2module.c"
        HEAP[$mode]=$30; //@line 1419 "bz2module.c"
        var $31=HEAP[$mode]; //@line 1420 "bz2module.c"
        var $32=HEAP[$31]; //@line 1420 "bz2module.c"
        var $33=reSign(($32), 8, 0)==0; //@line 1420 "bz2module.c"
        if ($33) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 1420 "bz2module.c"
      case 15: // $bb14
        __label__ = 5; break; //@line 1420 "bz2module.c"
      case 16: // $bb15
        var $34=HEAP[$mode_char]; //@line 1424 "bz2module.c"
        var $35=((($34))|0)==0; //@line 1424 "bz2module.c"
        if ($35) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1424 "bz2module.c"
      case 17: // $bb16
        HEAP[$mode_char]=114; //@line 1425 "bz2module.c"
        __label__ = 18; break; //@line 1425 "bz2module.c"
      case 18: // $bb17
        var $36=HEAP[$mode_char]; //@line 1428 "bz2module.c"
        var $37=((($36))|0)==114; //@line 1428 "bz2module.c"
        if ($37) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1428 "bz2module.c"
      case 19: // $bb18
        HEAP[$iftmp_173]=((__str61)&4294967295); //@line 1428 "bz2module.c"
        __label__ = 21; break; //@line 1428 "bz2module.c"
      case 20: // $bb19
        HEAP[$iftmp_173]=((__str62)&4294967295); //@line 1428 "bz2module.c"
        __label__ = 21; break; //@line 1428 "bz2module.c"
      case 21: // $bb20
        var $38=HEAP[$iftmp_173]; //@line 1428 "bz2module.c"
        HEAP[$mode]=$38; //@line 1428 "bz2module.c"
        var $39=HEAP[$buffering]; //@line 1430 "bz2module.c"
        var $40=HEAP[$mode]; //@line 1430 "bz2module.c"
        var $41=HEAP[$name]; //@line 1430 "bz2module.c"
        var $42=_PyObject_CallFunction(_PyFile_Type, ((__str63)&4294967295), $41, $40, $39); //@line 1430 "bz2module.c"
        var $43=HEAP[$self_addr]; //@line 1430 "bz2module.c"
        var $44=(($43+8)&4294967295); //@line 1430 "bz2module.c"
        HEAP[$44]=$42; //@line 1430 "bz2module.c"
        var $45=HEAP[$self_addr]; //@line 1432 "bz2module.c"
        var $46=(($45+8)&4294967295); //@line 1432 "bz2module.c"
        var $47=HEAP[$46]; //@line 1432 "bz2module.c"
        var $48=($47)==0; //@line 1432 "bz2module.c"
        if ($48) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1432 "bz2module.c"
      case 22: // $bb21
        HEAP[$0]=-1; //@line 1433 "bz2module.c"
        __label__ = 36; break; //@line 1433 "bz2module.c"
      case 23: // $bb22
        var $49=HEAP[$mode_char]; //@line 1446 "bz2module.c"
        var $50=((($49))|0)==114; //@line 1446 "bz2module.c"
        if ($50) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1446 "bz2module.c"
      case 24: // $bb23
        var $51=HEAP[$self_addr]; //@line 1447 "bz2module.c"
        var $52=(($51+8)&4294967295); //@line 1447 "bz2module.c"
        var $53=HEAP[$52]; //@line 1447 "bz2module.c"
        var $54=_PyFile_AsFile($53); //@line 1447 "bz2module.c"
        var $55=_BZ2_bzReadOpen($bzerror, $54, 0, 0, 0, 0); //@line 1447 "bz2module.c"
        var $56=HEAP[$self_addr]; //@line 1447 "bz2module.c"
        var $57=(($56+40)&4294967295); //@line 1447 "bz2module.c"
        HEAP[$57]=$55; //@line 1447 "bz2module.c"
        __label__ = 26; break; //@line 1447 "bz2module.c"
      case 25: // $bb24
        var $58=HEAP[$compresslevel]; //@line 1451 "bz2module.c"
        var $59=HEAP[$self_addr]; //@line 1451 "bz2module.c"
        var $60=(($59+8)&4294967295); //@line 1451 "bz2module.c"
        var $61=HEAP[$60]; //@line 1451 "bz2module.c"
        var $62=_PyFile_AsFile($61); //@line 1451 "bz2module.c"
        var $63=_BZ2_bzWriteOpen($bzerror, $62, $58, 0, 0); //@line 1451 "bz2module.c"
        var $64=HEAP[$self_addr]; //@line 1451 "bz2module.c"
        var $65=(($64+40)&4294967295); //@line 1451 "bz2module.c"
        HEAP[$65]=$63; //@line 1451 "bz2module.c"
        __label__ = 26; break; //@line 1451 "bz2module.c"
      case 26: // $bb25
        var $66=HEAP[$bzerror]; //@line 1455 "bz2module.c"
        var $67=((($66))|0)!=0; //@line 1455 "bz2module.c"
        if ($67) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1455 "bz2module.c"
      case 27: // $bb26
        var $68=HEAP[$bzerror]; //@line 1456 "bz2module.c"
        var $69=_Util_CatchBZ2Error($68); //@line 1456 "bz2module.c"
        __label__ = 32; break; //@line 1456 "bz2module.c"
      case 28: // $bb27
        var $70=HEAP[$self_addr]; //@line 1459 "bz2module.c"
        var $71=(($70+8)&4294967295); //@line 1459 "bz2module.c"
        var $72=HEAP[$71]; //@line 1459 "bz2module.c"
        var $73=$72; //@line 1459 "bz2module.c"
        _PyFile_IncUseCount($73); //@line 1459 "bz2module.c"
        var $74=HEAP[$mode_char]; //@line 1461 "bz2module.c"
        var $75=((($74))|0)==114; //@line 1461 "bz2module.c"
        if ($75) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1461 "bz2module.c"
      case 29: // $bb28
        HEAP[$iftmp_181]=1; //@line 1461 "bz2module.c"
        __label__ = 31; break; //@line 1461 "bz2module.c"
      case 30: // $bb29
        HEAP[$iftmp_181]=3; //@line 1461 "bz2module.c"
        __label__ = 31; break; //@line 1461 "bz2module.c"
      case 31: // $bb30
        var $76=HEAP[$self_addr]; //@line 1461 "bz2module.c"
        var $77=(($76+44)&4294967295); //@line 1461 "bz2module.c"
        var $78=HEAP[$iftmp_181]; //@line 1461 "bz2module.c"
        HEAP[$77]=$78; //@line 1461 "bz2module.c"
        HEAP[$0]=0; //@line 1463 "bz2module.c"
        __label__ = 36; break; //@line 1463 "bz2module.c"
      case 32: // $error31
        var $79=HEAP[$self_addr]; //@line 1466 "bz2module.c"
        var $80=(($79+8)&4294967295); //@line 1466 "bz2module.c"
        var $81=HEAP[$80]; //@line 1466 "bz2module.c"
        var $82=($81)!=0; //@line 1466 "bz2module.c"
        if ($82) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 1466 "bz2module.c"
      case 33: // $bb32
        var $83=HEAP[$self_addr]; //@line 1466 "bz2module.c"
        var $84=(($83+8)&4294967295); //@line 1466 "bz2module.c"
        var $85=HEAP[$84]; //@line 1466 "bz2module.c"
        HEAP[$_py_tmp]=$85; //@line 1466 "bz2module.c"
        var $86=HEAP[$self_addr]; //@line 1466 "bz2module.c"
        var $87=(($86+8)&4294967295); //@line 1466 "bz2module.c"
        HEAP[$87]=0; //@line 1466 "bz2module.c"
        var $88=HEAP[$_py_tmp]; //@line 1466 "bz2module.c"
        var $89=(($88)&4294967295); //@line 1466 "bz2module.c"
        var $90=HEAP[$89]; //@line 1466 "bz2module.c"
        var $91=((($90) - 1)&4294967295); //@line 1466 "bz2module.c"
        var $92=HEAP[$_py_tmp]; //@line 1466 "bz2module.c"
        var $93=(($92)&4294967295); //@line 1466 "bz2module.c"
        HEAP[$93]=$91; //@line 1466 "bz2module.c"
        var $94=HEAP[$_py_tmp]; //@line 1466 "bz2module.c"
        var $95=(($94)&4294967295); //@line 1466 "bz2module.c"
        var $96=HEAP[$95]; //@line 1466 "bz2module.c"
        var $97=((($96))|0)==0; //@line 1466 "bz2module.c"
        if ($97) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1466 "bz2module.c"
      case 34: // $bb33
        var $98=HEAP[$_py_tmp]; //@line 1466 "bz2module.c"
        var $99=(($98+4)&4294967295); //@line 1466 "bz2module.c"
        var $100=HEAP[$99]; //@line 1466 "bz2module.c"
        var $101=(($100+24)&4294967295); //@line 1466 "bz2module.c"
        var $102=HEAP[$101]; //@line 1466 "bz2module.c"
        var $103=HEAP[$_py_tmp]; //@line 1466 "bz2module.c"
        FUNCTION_TABLE[$102]($103); //@line 1466 "bz2module.c"
        __label__ = 35; break; //@line 1466 "bz2module.c"
      case 35: // $bb34
        HEAP[$0]=-1; //@line 1473 "bz2module.c"
        __label__ = 36; break; //@line 1473 "bz2module.c"
      case 36: // $bb35
        var $104=HEAP[$0]; //@line 1381 "bz2module.c"
        HEAP[$retval]=$104; //@line 1381 "bz2module.c"
        __label__ = 37; break; //@line 1381 "bz2module.c"
      case 37: // $return
        var $retval36=HEAP[$retval]; //@line 1381 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval36; //@line 1381 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $bzerror=__stackBase__+4;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 1484 "bz2module.c"
        var $1=(($0+44)&4294967295); //@line 1484 "bz2module.c"
        var $2=HEAP[$1]; //@line 1484 "bz2module.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 1; break;
        }
        else if ($2 == 3) {
          __label__ = 2; break;
        }
        else {
        __label__ = 3; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$self_addr]; //@line 1487 "bz2module.c"
        var $4=(($3+40)&4294967295); //@line 1487 "bz2module.c"
        var $5=HEAP[$4]; //@line 1487 "bz2module.c"
        _BZ2_bzReadClose($bzerror, $5); //@line 1487 "bz2module.c"
        __label__ = 3; break; //@line 1487 "bz2module.c"
      case 2: // $bb1
        var $6=HEAP[$self_addr]; //@line 1490 "bz2module.c"
        var $7=(($6+40)&4294967295); //@line 1490 "bz2module.c"
        var $8=HEAP[$7]; //@line 1490 "bz2module.c"
        _BZ2_bzWriteClose($bzerror, $8, 0, 0, 0); //@line 1490 "bz2module.c"
        __label__ = 3; break; //@line 1490 "bz2module.c"
      case 3: // $bb2
        var $9=HEAP[$self_addr]; //@line 1494 "bz2module.c"
        var $10=(($9+40)&4294967295); //@line 1494 "bz2module.c"
        var $11=HEAP[$10]; //@line 1494 "bz2module.c"
        var $12=($11)!=0; //@line 1494 "bz2module.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1494 "bz2module.c"
      case 4: // $bb3
        var $13=HEAP[$self_addr]; //@line 1495 "bz2module.c"
        var $14=(($13+8)&4294967295); //@line 1495 "bz2module.c"
        var $15=HEAP[$14]; //@line 1495 "bz2module.c"
        var $16=$15; //@line 1495 "bz2module.c"
        _PyFile_DecUseCount($16); //@line 1495 "bz2module.c"
        var $17=HEAP[$self_addr]; //@line 1496 "bz2module.c"
        var $18=(($17+40)&4294967295); //@line 1496 "bz2module.c"
        HEAP[$18]=0; //@line 1496 "bz2module.c"
        __label__ = 5; break; //@line 1496 "bz2module.c"
      case 5: // $bb4
        var $19=HEAP[$self_addr]; //@line 1498 "bz2module.c"
        _Util_DropReadAhead($19); //@line 1498 "bz2module.c"
        var $20=HEAP[$self_addr]; //@line 1499 "bz2module.c"
        var $21=(($20+8)&4294967295); //@line 1499 "bz2module.c"
        var $22=HEAP[$21]; //@line 1499 "bz2module.c"
        var $23=($22)!=0; //@line 1499 "bz2module.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1499 "bz2module.c"
      case 6: // $bb5
        var $24=HEAP[$self_addr]; //@line 1499 "bz2module.c"
        var $25=(($24+8)&4294967295); //@line 1499 "bz2module.c"
        var $26=HEAP[$25]; //@line 1499 "bz2module.c"
        var $27=(($26)&4294967295); //@line 1499 "bz2module.c"
        var $28=HEAP[$27]; //@line 1499 "bz2module.c"
        var $29=((($28) - 1)&4294967295); //@line 1499 "bz2module.c"
        var $30=(($26)&4294967295); //@line 1499 "bz2module.c"
        HEAP[$30]=$29; //@line 1499 "bz2module.c"
        var $31=(($26)&4294967295); //@line 1499 "bz2module.c"
        var $32=HEAP[$31]; //@line 1499 "bz2module.c"
        var $33=((($32))|0)==0; //@line 1499 "bz2module.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1499 "bz2module.c"
      case 7: // $bb6
        var $34=HEAP[$self_addr]; //@line 1499 "bz2module.c"
        var $35=(($34+8)&4294967295); //@line 1499 "bz2module.c"
        var $36=HEAP[$35]; //@line 1499 "bz2module.c"
        var $37=(($36+4)&4294967295); //@line 1499 "bz2module.c"
        var $38=HEAP[$37]; //@line 1499 "bz2module.c"
        var $39=(($38+24)&4294967295); //@line 1499 "bz2module.c"
        var $40=HEAP[$39]; //@line 1499 "bz2module.c"
        var $41=HEAP[$self_addr]; //@line 1499 "bz2module.c"
        var $42=(($41+8)&4294967295); //@line 1499 "bz2module.c"
        var $43=HEAP[$42]; //@line 1499 "bz2module.c"
        FUNCTION_TABLE[$40]($43); //@line 1499 "bz2module.c"
        __label__ = 8; break; //@line 1499 "bz2module.c"
      case 8: // $bb7
        var $44=HEAP[$self_addr]; //@line 1500 "bz2module.c"
        var $45=$44; //@line 1500 "bz2module.c"
        var $46=(($45+4)&4294967295); //@line 1500 "bz2module.c"
        var $47=HEAP[$46]; //@line 1500 "bz2module.c"
        var $48=(($47+160)&4294967295); //@line 1500 "bz2module.c"
        var $49=HEAP[$48]; //@line 1500 "bz2module.c"
        var $50=HEAP[$self_addr]; //@line 1500 "bz2module.c"
        var $51=$50; //@line 1500 "bz2module.c"
        FUNCTION_TABLE[$49]($51); //@line 1500 "bz2module.c"
        __label__ = 9; break; //@line 1501 "bz2module.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 1501 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_getiter($self) {
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
        var $1=HEAP[$self_addr]; //@line 1507 "bz2module.c"
        var $2=(($1+44)&4294967295); //@line 1507 "bz2module.c"
        var $3=HEAP[$2]; //@line 1507 "bz2module.c"
        var $4=((($3))|0)==0; //@line 1507 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1507 "bz2module.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 1508 "bz2module.c"
        _PyErr_SetString($5, ((__str14)&4294967295)); //@line 1508 "bz2module.c"
        HEAP[$0]=0; //@line 1510 "bz2module.c"
        __label__ = 3; break; //@line 1510 "bz2module.c"
      case 2: // $bb1
        var $6=HEAP[$self_addr]; //@line 1512 "bz2module.c"
        var $7=$6; //@line 1512 "bz2module.c"
        var $8=(($7)&4294967295); //@line 1512 "bz2module.c"
        var $9=HEAP[$8]; //@line 1512 "bz2module.c"
        var $10=((($9) + 1)&4294967295); //@line 1512 "bz2module.c"
        var $11=(($7)&4294967295); //@line 1512 "bz2module.c"
        HEAP[$11]=$10; //@line 1512 "bz2module.c"
        var $12=HEAP[$self_addr]; //@line 1513 "bz2module.c"
        var $13=$12; //@line 1513 "bz2module.c"
        HEAP[$0]=$13; //@line 1513 "bz2module.c"
        __label__ = 3; break; //@line 1513 "bz2module.c"
      case 3: // $bb2
        var $14=HEAP[$0]; //@line 1510 "bz2module.c"
        HEAP[$retval]=$14; //@line 1510 "bz2module.c"
        __label__ = 4; break; //@line 1510 "bz2module.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1510 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1510 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_iternext($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $ret=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 1523 "bz2module.c"
        var $2=(($1+44)&4294967295); //@line 1523 "bz2module.c"
        var $3=HEAP[$2]; //@line 1523 "bz2module.c"
        var $4=((($3))|0)==0; //@line 1523 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1523 "bz2module.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 1525 "bz2module.c"
        _PyErr_SetString($5, ((__str14)&4294967295)); //@line 1525 "bz2module.c"
        HEAP[$0]=0; //@line 1527 "bz2module.c"
        __label__ = 9; break; //@line 1527 "bz2module.c"
      case 2: // $bb1
        var $6=HEAP[$self_addr]; //@line 1529 "bz2module.c"
        var $7=_Util_ReadAheadGetLineSkip($6, 0, 8192); //@line 1529 "bz2module.c"
        HEAP[$ret]=$7; //@line 1529 "bz2module.c"
        var $8=HEAP[$ret]; //@line 1531 "bz2module.c"
        var $9=($8)==0; //@line 1531 "bz2module.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1531 "bz2module.c"
      case 3: // $bb2
        var $10=HEAP[$ret]; //@line 1531 "bz2module.c"
        var $11=$10; //@line 1531 "bz2module.c"
        var $12=(($11+8)&4294967295); //@line 1531 "bz2module.c"
        var $13=HEAP[$12]; //@line 1531 "bz2module.c"
        var $14=((($13))|0)==0; //@line 1531 "bz2module.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 1531 "bz2module.c"
      case 4: // $bb3
        var $15=HEAP[$ret]; //@line 1532 "bz2module.c"
        var $16=($15)!=0; //@line 1532 "bz2module.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1532 "bz2module.c"
      case 5: // $bb4
        var $17=HEAP[$ret]; //@line 1532 "bz2module.c"
        var $18=$17; //@line 1532 "bz2module.c"
        var $19=(($18)&4294967295); //@line 1532 "bz2module.c"
        var $20=HEAP[$19]; //@line 1532 "bz2module.c"
        var $21=((($20) - 1)&4294967295); //@line 1532 "bz2module.c"
        var $22=(($18)&4294967295); //@line 1532 "bz2module.c"
        HEAP[$22]=$21; //@line 1532 "bz2module.c"
        var $23=(($18)&4294967295); //@line 1532 "bz2module.c"
        var $24=HEAP[$23]; //@line 1532 "bz2module.c"
        var $25=((($24))|0)==0; //@line 1532 "bz2module.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1532 "bz2module.c"
      case 6: // $bb5
        var $26=HEAP[$ret]; //@line 1532 "bz2module.c"
        var $27=$26; //@line 1532 "bz2module.c"
        var $28=(($27+4)&4294967295); //@line 1532 "bz2module.c"
        var $29=HEAP[$28]; //@line 1532 "bz2module.c"
        var $30=(($29+24)&4294967295); //@line 1532 "bz2module.c"
        var $31=HEAP[$30]; //@line 1532 "bz2module.c"
        var $32=HEAP[$ret]; //@line 1532 "bz2module.c"
        var $33=$32; //@line 1532 "bz2module.c"
        FUNCTION_TABLE[$31]($33); //@line 1532 "bz2module.c"
        __label__ = 7; break; //@line 1532 "bz2module.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 1533 "bz2module.c"
        __label__ = 9; break; //@line 1533 "bz2module.c"
      case 8: // $bb7
        var $34=HEAP[$ret]; //@line 1535 "bz2module.c"
        var $35=$34; //@line 1535 "bz2module.c"
        HEAP[$0]=$35; //@line 1535 "bz2module.c"
        __label__ = 9; break; //@line 1535 "bz2module.c"
      case 9: // $bb8
        var $36=HEAP[$0]; //@line 1527 "bz2module.c"
        HEAP[$retval]=$36; //@line 1527 "bz2module.c"
        __label__ = 10; break; //@line 1527 "bz2module.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1527 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1527 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Comp_compress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 100; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pdata=__stackBase__+16;
        var $data=__stackBase__+68;
        var $datasize=__stackBase__+72;
        var $bufsize=__stackBase__+76;
        var $totalout=__stackBase__+80;
        var $ret=__stackBase__+88;
        var $bzs=__stackBase__+92;
        var $bzerror=__stackBase__+96;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$bufsize]=8192; //@line 1624 "bz2module.c"
        HEAP[$ret]=0; //@line 1626 "bz2module.c"
        var $1=HEAP[$self_addr]; //@line 1627 "bz2module.c"
        var $2=(($1+8)&4294967295); //@line 1627 "bz2module.c"
        HEAP[$bzs]=$2; //@line 1627 "bz2module.c"
        var $3=HEAP[$args_addr]; //@line 1630 "bz2module.c"
        var $4=_PyArg_ParseTuple($3, ((__str65)&4294967295), $pdata); //@line 1630 "bz2module.c"
        var $5=((($4))|0)==0; //@line 1630 "bz2module.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1630 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1631 "bz2module.c"
        __label__ = 21; break; //@line 1631 "bz2module.c"
      case 2: // $bb1
        var $6=(($pdata)&4294967295); //@line 1632 "bz2module.c"
        var $7=HEAP[$6]; //@line 1632 "bz2module.c"
        HEAP[$data]=$7; //@line 1632 "bz2module.c"
        var $8=(($pdata+8)&4294967295); //@line 1633 "bz2module.c"
        var $9=HEAP[$8]; //@line 1633 "bz2module.c"
        HEAP[$datasize]=$9; //@line 1633 "bz2module.c"
        var $10=HEAP[$datasize]; //@line 1635 "bz2module.c"
        var $11=((($10))|0)==0; //@line 1635 "bz2module.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1635 "bz2module.c"
      case 3: // $bb2
        _PyBuffer_Release($pdata); //@line 1636 "bz2module.c"
        var $12=_PyString_FromString(((__str13)&4294967295)); //@line 1637 "bz2module.c"
        HEAP[$0]=$12; //@line 1637 "bz2module.c"
        __label__ = 21; break; //@line 1637 "bz2module.c"
      case 4: // $bb3
        var $13=HEAP[$self_addr]; //@line 1641 "bz2module.c"
        var $14=(($13+56)&4294967295); //@line 1641 "bz2module.c"
        var $15=HEAP[$14]; //@line 1641 "bz2module.c"
        var $16=((($15))|0)==0; //@line 1641 "bz2module.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1641 "bz2module.c"
      case 5: // $bb4
        var $17=HEAP[_PyExc_ValueError]; //@line 1642 "bz2module.c"
        _PyErr_SetString($17, ((__str66)&4294967295)); //@line 1642 "bz2module.c"
        __label__ = 17; break; //@line 1642 "bz2module.c"
      case 6: // $bb5
        var $18=HEAP[$bufsize]; //@line 1647 "bz2module.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 1647 "bz2module.c"
        HEAP[$ret]=$19; //@line 1647 "bz2module.c"
        var $20=HEAP[$ret]; //@line 1648 "bz2module.c"
        var $21=($20)==0; //@line 1648 "bz2module.c"
        if ($21) { __label__ = 17; break; } else { __label__ = 7; break; } //@line 1648 "bz2module.c"
      case 7: // $bb6
        var $22=HEAP[$bzs]; //@line 1651 "bz2module.c"
        var $23=(($22)&4294967295); //@line 1651 "bz2module.c"
        var $24=HEAP[$data]; //@line 1651 "bz2module.c"
        HEAP[$23]=$24; //@line 1651 "bz2module.c"
        var $25=HEAP[$datasize]; //@line 1652 "bz2module.c"
        var $26=HEAP[$bzs]; //@line 1652 "bz2module.c"
        var $27=(($26+4)&4294967295); //@line 1652 "bz2module.c"
        HEAP[$27]=$25; //@line 1652 "bz2module.c"
        var $28=HEAP[$ret]; //@line 1653 "bz2module.c"
        var $29=$28; //@line 1653 "bz2module.c"
        var $30=(($29+20)&4294967295); //@line 1653 "bz2module.c"
        var $31=(($30)&4294967295); //@line 1653 "bz2module.c"
        var $32=HEAP[$bzs]; //@line 1653 "bz2module.c"
        var $33=(($32+16)&4294967295); //@line 1653 "bz2module.c"
        HEAP[$33]=$31; //@line 1653 "bz2module.c"
        var $34=HEAP[$bufsize]; //@line 1654 "bz2module.c"
        var $35=HEAP[$bzs]; //@line 1654 "bz2module.c"
        var $36=(($35+20)&4294967295); //@line 1654 "bz2module.c"
        HEAP[$36]=$34; //@line 1654 "bz2module.c"
        var $37=HEAP[$bzs]; //@line 1656 "bz2module.c"
        var $38=(($37+28)&4294967295); //@line 1656 "bz2module.c"
        var $39=HEAP[$38]; //@line 1656 "bz2module.c"
        var $40=((($39))>>>0); //@line 1656 "bz2module.c"
        var $41=($40)*Math.pow(2,32); //@line 1656 "bz2module.c"
        var $42=HEAP[$bzs]; //@line 1656 "bz2module.c"
        var $43=(($42+24)&4294967295); //@line 1656 "bz2module.c"
        var $44=HEAP[$43]; //@line 1656 "bz2module.c"
        var $45=((($44))>>>0); //@line 1656 "bz2module.c"
        var $46=($41) + ($45); //@line 1656 "bz2module.c"
        HEAP[$totalout]=$46; //@line 1656 "bz2module.c"
        __label__ = 8; break; //@line 1656 "bz2module.c"
      case 8: // $bb7
        var $47=HEAP[$bzs]; //@line 1660 "bz2module.c"
        var $48=_BZ2_bzCompress($47, 0); //@line 1660 "bz2module.c"
        HEAP[$bzerror]=$48; //@line 1660 "bz2module.c"
        var $49=HEAP[$bzerror]; //@line 1662 "bz2module.c"
        var $50=((($49))|0)!=1; //@line 1662 "bz2module.c"
        if ($50) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1662 "bz2module.c"
      case 9: // $bb8
        var $51=HEAP[$bzerror]; //@line 1663 "bz2module.c"
        var $52=_Util_CatchBZ2Error($51); //@line 1663 "bz2module.c"
        __label__ = 17; break; //@line 1663 "bz2module.c"
      case 10: // $bb9
        var $53=HEAP[$bzs]; //@line 1666 "bz2module.c"
        var $54=(($53+4)&4294967295); //@line 1666 "bz2module.c"
        var $55=HEAP[$54]; //@line 1666 "bz2module.c"
        var $56=((($55))|0)==0; //@line 1666 "bz2module.c"
        if ($56) { __label__ = 16; break; } else { __label__ = 11; break; } //@line 1666 "bz2module.c"
      case 11: // $bb10
        var $57=HEAP[$bzs]; //@line 1668 "bz2module.c"
        var $58=(($57+20)&4294967295); //@line 1668 "bz2module.c"
        var $59=HEAP[$58]; //@line 1668 "bz2module.c"
        var $60=((($59))|0)==0; //@line 1668 "bz2module.c"
        if ($60) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 1668 "bz2module.c"
      case 12: // $bb11
        var $61=HEAP[$bufsize]; //@line 1669 "bz2module.c"
        var $62=_Util_NewBufferSize($61); //@line 1669 "bz2module.c"
        HEAP[$bufsize]=$62; //@line 1669 "bz2module.c"
        var $63=HEAP[$bufsize]; //@line 1670 "bz2module.c"
        var $64=__PyString_Resize($ret, $63); //@line 1670 "bz2module.c"
        var $65=((($64))|0) < 0; //@line 1670 "bz2module.c"
        if ($65) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1670 "bz2module.c"
      case 13: // $bb12
        var $66=HEAP[$bzs]; //@line 1671 "bz2module.c"
        var $67=_BZ2_bzCompressEnd($66); //@line 1671 "bz2module.c"
        __label__ = 17; break; //@line 1671 "bz2module.c"
      case 14: // $bb13
        var $68=HEAP[$ret]; //@line 1674 "bz2module.c"
        var $69=$68; //@line 1674 "bz2module.c"
        var $70=(($69+20)&4294967295); //@line 1674 "bz2module.c"
        var $71=(($70)&4294967295); //@line 1674 "bz2module.c"
        var $72=HEAP[$bzs]; //@line 1674 "bz2module.c"
        var $73=(($72+28)&4294967295); //@line 1674 "bz2module.c"
        var $74=HEAP[$73]; //@line 1674 "bz2module.c"
        var $75=((($74))>>>0); //@line 1674 "bz2module.c"
        var $76=($75)*Math.pow(2,32); //@line 1674 "bz2module.c"
        var $77=HEAP[$bzs]; //@line 1674 "bz2module.c"
        var $78=(($77+24)&4294967295); //@line 1674 "bz2module.c"
        var $79=HEAP[$78]; //@line 1674 "bz2module.c"
        var $80=((($79))>>>0); //@line 1674 "bz2module.c"
        var $81=($76) + ($80); //@line 1674 "bz2module.c"
        var $82=HEAP[$totalout]; //@line 1674 "bz2module.c"
        var $83=($81) - ($82); //@line 1674 "bz2module.c"
        var $84=((($83)) & 4294967295); //@line 1674 "bz2module.c"
        var $85=(($71+$84)&4294967295); //@line 1674 "bz2module.c"
        var $86=HEAP[$bzs]; //@line 1674 "bz2module.c"
        var $87=(($86+16)&4294967295); //@line 1674 "bz2module.c"
        HEAP[$87]=$85; //@line 1674 "bz2module.c"
        var $88=HEAP[$bzs]; //@line 1676 "bz2module.c"
        var $89=(($88+16)&4294967295); //@line 1676 "bz2module.c"
        var $90=HEAP[$89]; //@line 1676 "bz2module.c"
        var $91=($90); //@line 1676 "bz2module.c"
        var $92=HEAP[$ret]; //@line 1676 "bz2module.c"
        var $93=$92; //@line 1676 "bz2module.c"
        var $94=(($93+20)&4294967295); //@line 1676 "bz2module.c"
        var $95=($94); //@line 1676 "bz2module.c"
        var $96=((($91) - ($95))&4294967295); //@line 1676 "bz2module.c"
        var $97=HEAP[$bufsize]; //@line 1676 "bz2module.c"
        var $98=((($97) - ($96))&4294967295); //@line 1676 "bz2module.c"
        var $99=HEAP[$bzs]; //@line 1676 "bz2module.c"
        var $100=(($99+20)&4294967295); //@line 1676 "bz2module.c"
        HEAP[$100]=$98; //@line 1676 "bz2module.c"
        __label__ = 15; break; //@line 1676 "bz2module.c"
      case 15: // $bb14
        __label__ = 8; break; //@line 1676 "bz2module.c"
      case 16: // $bb15
        var $101=HEAP[$bzs]; //@line 1680 "bz2module.c"
        var $102=(($101+24)&4294967295); //@line 1680 "bz2module.c"
        var $103=HEAP[$102]; //@line 1680 "bz2module.c"
        var $104=HEAP[$totalout]; //@line 1680 "bz2module.c"
        var $105=((($104)) & 4294967295); //@line 1680 "bz2module.c"
        var $106=((($103) - ($105))&4294967295); //@line 1680 "bz2module.c"
        var $107=__PyString_Resize($ret, $106); //@line 1680 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 1683 "bz2module.c"
        var $108=HEAP[$ret]; //@line 1684 "bz2module.c"
        HEAP[$0]=$108; //@line 1684 "bz2module.c"
        __label__ = 21; break; //@line 1684 "bz2module.c"
      case 17: // $error
        _PyBuffer_Release($pdata); //@line 1688 "bz2module.c"
        var $109=HEAP[$ret]; //@line 1689 "bz2module.c"
        var $110=($109)!=0; //@line 1689 "bz2module.c"
        if ($110) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 1689 "bz2module.c"
      case 18: // $bb16
        var $111=HEAP[$ret]; //@line 1689 "bz2module.c"
        var $112=(($111)&4294967295); //@line 1689 "bz2module.c"
        var $113=HEAP[$112]; //@line 1689 "bz2module.c"
        var $114=((($113) - 1)&4294967295); //@line 1689 "bz2module.c"
        var $115=(($111)&4294967295); //@line 1689 "bz2module.c"
        HEAP[$115]=$114; //@line 1689 "bz2module.c"
        var $116=(($111)&4294967295); //@line 1689 "bz2module.c"
        var $117=HEAP[$116]; //@line 1689 "bz2module.c"
        var $118=((($117))|0)==0; //@line 1689 "bz2module.c"
        if ($118) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1689 "bz2module.c"
      case 19: // $bb17
        var $119=HEAP[$ret]; //@line 1689 "bz2module.c"
        var $120=(($119+4)&4294967295); //@line 1689 "bz2module.c"
        var $121=HEAP[$120]; //@line 1689 "bz2module.c"
        var $122=(($121+24)&4294967295); //@line 1689 "bz2module.c"
        var $123=HEAP[$122]; //@line 1689 "bz2module.c"
        var $124=HEAP[$ret]; //@line 1689 "bz2module.c"
        FUNCTION_TABLE[$123]($124); //@line 1689 "bz2module.c"
        __label__ = 20; break; //@line 1689 "bz2module.c"
      case 20: // $bb18
        HEAP[$0]=0; //@line 1690 "bz2module.c"
        __label__ = 21; break; //@line 1690 "bz2module.c"
      case 21: // $bb19
        var $125=HEAP[$0]; //@line 1631 "bz2module.c"
        HEAP[$retval]=$125; //@line 1631 "bz2module.c"
        __label__ = 22; break; //@line 1631 "bz2module.c"
      case 22: // $return
        var $retval20=HEAP[$retval]; //@line 1631 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 1631 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Comp_flush($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $bufsize=__stackBase__+12;
        var $ret=__stackBase__+16;
        var $bzs=__stackBase__+20;
        var $totalout=__stackBase__+24;
        var $bzerror=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$bufsize]=8192; //@line 1703 "bz2module.c"
        HEAP[$ret]=0; //@line 1704 "bz2module.c"
        var $1=HEAP[$self_addr]; //@line 1705 "bz2module.c"
        var $2=(($1+8)&4294967295); //@line 1705 "bz2module.c"
        HEAP[$bzs]=$2; //@line 1705 "bz2module.c"
        var $3=HEAP[$self_addr]; //@line 1710 "bz2module.c"
        var $4=(($3+56)&4294967295); //@line 1710 "bz2module.c"
        var $5=HEAP[$4]; //@line 1710 "bz2module.c"
        var $6=((($5))|0)==0; //@line 1710 "bz2module.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1710 "bz2module.c"
      case 1: // $bb
        var $7=HEAP[_PyExc_ValueError]; //@line 1711 "bz2module.c"
        _PyErr_SetString($7, ((__str67)&4294967295)); //@line 1711 "bz2module.c"
        __label__ = 14; break; //@line 1711 "bz2module.c"
      case 2: // $bb1
        var $8=HEAP[$self_addr]; //@line 1715 "bz2module.c"
        var $9=(($8+56)&4294967295); //@line 1715 "bz2module.c"
        HEAP[$9]=0; //@line 1715 "bz2module.c"
        var $10=HEAP[$bufsize]; //@line 1717 "bz2module.c"
        var $11=_PyString_FromStringAndSize(0, $10); //@line 1717 "bz2module.c"
        HEAP[$ret]=$11; //@line 1717 "bz2module.c"
        var $12=HEAP[$ret]; //@line 1718 "bz2module.c"
        var $13=($12)==0; //@line 1718 "bz2module.c"
        if ($13) { __label__ = 14; break; } else { __label__ = 3; break; } //@line 1718 "bz2module.c"
      case 3: // $bb2
        var $14=HEAP[$ret]; //@line 1721 "bz2module.c"
        var $15=$14; //@line 1721 "bz2module.c"
        var $16=(($15+20)&4294967295); //@line 1721 "bz2module.c"
        var $17=(($16)&4294967295); //@line 1721 "bz2module.c"
        var $18=HEAP[$bzs]; //@line 1721 "bz2module.c"
        var $19=(($18+16)&4294967295); //@line 1721 "bz2module.c"
        HEAP[$19]=$17; //@line 1721 "bz2module.c"
        var $20=HEAP[$bufsize]; //@line 1722 "bz2module.c"
        var $21=HEAP[$bzs]; //@line 1722 "bz2module.c"
        var $22=(($21+20)&4294967295); //@line 1722 "bz2module.c"
        HEAP[$22]=$20; //@line 1722 "bz2module.c"
        var $23=HEAP[$bzs]; //@line 1724 "bz2module.c"
        var $24=(($23+28)&4294967295); //@line 1724 "bz2module.c"
        var $25=HEAP[$24]; //@line 1724 "bz2module.c"
        var $26=((($25))>>>0); //@line 1724 "bz2module.c"
        var $27=($26)*Math.pow(2,32); //@line 1724 "bz2module.c"
        var $28=HEAP[$bzs]; //@line 1724 "bz2module.c"
        var $29=(($28+24)&4294967295); //@line 1724 "bz2module.c"
        var $30=HEAP[$29]; //@line 1724 "bz2module.c"
        var $31=((($30))>>>0); //@line 1724 "bz2module.c"
        var $32=($27) + ($31); //@line 1724 "bz2module.c"
        HEAP[$totalout]=$32; //@line 1724 "bz2module.c"
        __label__ = 4; break; //@line 1724 "bz2module.c"
      case 4: // $bb3
        var $33=HEAP[$bzs]; //@line 1728 "bz2module.c"
        var $34=_BZ2_bzCompress($33, 2); //@line 1728 "bz2module.c"
        HEAP[$bzerror]=$34; //@line 1728 "bz2module.c"
        var $35=HEAP[$bzerror]; //@line 1730 "bz2module.c"
        var $36=((($35))|0)==4; //@line 1730 "bz2module.c"
        if ($36) { __label__ = 11; break; } else { __label__ = 5; break; } //@line 1730 "bz2module.c"
      case 5: // $bb4
        var $37=HEAP[$bzerror]; //@line 1732 "bz2module.c"
        var $38=((($37))|0)!=3; //@line 1732 "bz2module.c"
        if ($38) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1732 "bz2module.c"
      case 6: // $bb5
        var $39=HEAP[$bzerror]; //@line 1733 "bz2module.c"
        var $40=_Util_CatchBZ2Error($39); //@line 1733 "bz2module.c"
        __label__ = 14; break; //@line 1733 "bz2module.c"
      case 7: // $bb6
        var $41=HEAP[$bzs]; //@line 1736 "bz2module.c"
        var $42=(($41+20)&4294967295); //@line 1736 "bz2module.c"
        var $43=HEAP[$42]; //@line 1736 "bz2module.c"
        var $44=((($43))|0)==0; //@line 1736 "bz2module.c"
        if ($44) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 1736 "bz2module.c"
      case 8: // $bb7
        var $45=HEAP[$bufsize]; //@line 1737 "bz2module.c"
        var $46=_Util_NewBufferSize($45); //@line 1737 "bz2module.c"
        HEAP[$bufsize]=$46; //@line 1737 "bz2module.c"
        var $47=HEAP[$bufsize]; //@line 1738 "bz2module.c"
        var $48=__PyString_Resize($ret, $47); //@line 1738 "bz2module.c"
        var $49=((($48))|0) < 0; //@line 1738 "bz2module.c"
        if ($49) { __label__ = 14; break; } else { __label__ = 9; break; } //@line 1738 "bz2module.c"
      case 9: // $bb8
        var $50=HEAP[$ret]; //@line 1740 "bz2module.c"
        var $51=$50; //@line 1740 "bz2module.c"
        var $52=(($51+20)&4294967295); //@line 1740 "bz2module.c"
        var $53=(($52)&4294967295); //@line 1740 "bz2module.c"
        var $54=HEAP[$bzs]; //@line 1740 "bz2module.c"
        var $55=(($54+16)&4294967295); //@line 1740 "bz2module.c"
        HEAP[$55]=$53; //@line 1740 "bz2module.c"
        var $56=HEAP[$ret]; //@line 1741 "bz2module.c"
        var $57=$56; //@line 1741 "bz2module.c"
        var $58=(($57+20)&4294967295); //@line 1741 "bz2module.c"
        var $59=(($58)&4294967295); //@line 1741 "bz2module.c"
        var $60=HEAP[$bzs]; //@line 1741 "bz2module.c"
        var $61=(($60+28)&4294967295); //@line 1741 "bz2module.c"
        var $62=HEAP[$61]; //@line 1741 "bz2module.c"
        var $63=((($62))>>>0); //@line 1741 "bz2module.c"
        var $64=($63)*Math.pow(2,32); //@line 1741 "bz2module.c"
        var $65=HEAP[$bzs]; //@line 1741 "bz2module.c"
        var $66=(($65+24)&4294967295); //@line 1741 "bz2module.c"
        var $67=HEAP[$66]; //@line 1741 "bz2module.c"
        var $68=((($67))>>>0); //@line 1741 "bz2module.c"
        var $69=($64) + ($68); //@line 1741 "bz2module.c"
        var $70=HEAP[$totalout]; //@line 1741 "bz2module.c"
        var $71=($69) - ($70); //@line 1741 "bz2module.c"
        var $72=((($71)) & 4294967295); //@line 1741 "bz2module.c"
        var $73=(($59+$72)&4294967295); //@line 1741 "bz2module.c"
        var $74=HEAP[$bzs]; //@line 1741 "bz2module.c"
        var $75=(($74+16)&4294967295); //@line 1741 "bz2module.c"
        HEAP[$75]=$73; //@line 1741 "bz2module.c"
        var $76=HEAP[$bzs]; //@line 1743 "bz2module.c"
        var $77=(($76+16)&4294967295); //@line 1743 "bz2module.c"
        var $78=HEAP[$77]; //@line 1743 "bz2module.c"
        var $79=($78); //@line 1743 "bz2module.c"
        var $80=HEAP[$ret]; //@line 1743 "bz2module.c"
        var $81=$80; //@line 1743 "bz2module.c"
        var $82=(($81+20)&4294967295); //@line 1743 "bz2module.c"
        var $83=($82); //@line 1743 "bz2module.c"
        var $84=((($79) - ($83))&4294967295); //@line 1743 "bz2module.c"
        var $85=HEAP[$bufsize]; //@line 1743 "bz2module.c"
        var $86=((($85) - ($84))&4294967295); //@line 1743 "bz2module.c"
        var $87=HEAP[$bzs]; //@line 1743 "bz2module.c"
        var $88=(($87+20)&4294967295); //@line 1743 "bz2module.c"
        HEAP[$88]=$86; //@line 1743 "bz2module.c"
        __label__ = 10; break; //@line 1743 "bz2module.c"
      case 10: // $bb9
        __label__ = 4; break; //@line 1743 "bz2module.c"
      case 11: // $bb10
        var $89=HEAP[$bzs]; //@line 1747 "bz2module.c"
        var $90=(($89+20)&4294967295); //@line 1747 "bz2module.c"
        var $91=HEAP[$90]; //@line 1747 "bz2module.c"
        var $92=((($91))|0)!=0; //@line 1747 "bz2module.c"
        if ($92) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1747 "bz2module.c"
      case 12: // $bb11
        var $93=HEAP[$bzs]; //@line 1748 "bz2module.c"
        var $94=(($93+24)&4294967295); //@line 1748 "bz2module.c"
        var $95=HEAP[$94]; //@line 1748 "bz2module.c"
        var $96=HEAP[$totalout]; //@line 1748 "bz2module.c"
        var $97=((($96)) & 4294967295); //@line 1748 "bz2module.c"
        var $98=((($95) - ($97))&4294967295); //@line 1748 "bz2module.c"
        var $99=__PyString_Resize($ret, $98); //@line 1748 "bz2module.c"
        __label__ = 13; break; //@line 1748 "bz2module.c"
      case 13: // $bb12
        var $100=HEAP[$ret]; //@line 1751 "bz2module.c"
        HEAP[$0]=$100; //@line 1751 "bz2module.c"
        __label__ = 18; break; //@line 1751 "bz2module.c"
      case 14: // $error
        var $101=HEAP[$ret]; //@line 1755 "bz2module.c"
        var $102=($101)!=0; //@line 1755 "bz2module.c"
        if ($102) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1755 "bz2module.c"
      case 15: // $bb13
        var $103=HEAP[$ret]; //@line 1755 "bz2module.c"
        var $104=(($103)&4294967295); //@line 1755 "bz2module.c"
        var $105=HEAP[$104]; //@line 1755 "bz2module.c"
        var $106=((($105) - 1)&4294967295); //@line 1755 "bz2module.c"
        var $107=(($103)&4294967295); //@line 1755 "bz2module.c"
        HEAP[$107]=$106; //@line 1755 "bz2module.c"
        var $108=(($103)&4294967295); //@line 1755 "bz2module.c"
        var $109=HEAP[$108]; //@line 1755 "bz2module.c"
        var $110=((($109))|0)==0; //@line 1755 "bz2module.c"
        if ($110) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1755 "bz2module.c"
      case 16: // $bb14
        var $111=HEAP[$ret]; //@line 1755 "bz2module.c"
        var $112=(($111+4)&4294967295); //@line 1755 "bz2module.c"
        var $113=HEAP[$112]; //@line 1755 "bz2module.c"
        var $114=(($113+24)&4294967295); //@line 1755 "bz2module.c"
        var $115=HEAP[$114]; //@line 1755 "bz2module.c"
        var $116=HEAP[$ret]; //@line 1755 "bz2module.c"
        FUNCTION_TABLE[$115]($116); //@line 1755 "bz2module.c"
        __label__ = 17; break; //@line 1755 "bz2module.c"
      case 17: // $bb15
        HEAP[$0]=0; //@line 1756 "bz2module.c"
        __label__ = 18; break; //@line 1756 "bz2module.c"
      case 18: // $bb16
        var $117=HEAP[$0]; //@line 1751 "bz2module.c"
        HEAP[$retval]=$117; //@line 1751 "bz2module.c"
        __label__ = 19; break; //@line 1751 "bz2module.c"
      case 19: // $return
        var $retval17=HEAP[$retval]; //@line 1751 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 1751 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Comp_init($self, $args, $kwargs) {
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
        var $compresslevel=__stackBase__+20;
        var $bzerror=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$compresslevel]=9; //@line 1774 "bz2module.c"
        var $1=HEAP[$args_addr]; //@line 1778 "bz2module.c"
        var $2=HEAP[$kwargs_addr]; //@line 1778 "bz2module.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str70)&4294967295), ((_kwlist_9935)&4294967295), $compresslevel); //@line 1778 "bz2module.c"
        var $4=((($3))|0)==0; //@line 1778 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1778 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 1780 "bz2module.c"
        __label__ = 9; break; //@line 1780 "bz2module.c"
      case 2: // $bb1
        var $5=HEAP[$compresslevel]; //@line 1782 "bz2module.c"
        var $6=((($5))|0) <= 0; //@line 1782 "bz2module.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1782 "bz2module.c"
      case 3: // $bb2
        var $7=HEAP[$compresslevel]; //@line 1782 "bz2module.c"
        var $8=((($7))|0) > 9; //@line 1782 "bz2module.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1782 "bz2module.c"
      case 4: // $bb3
        var $9=HEAP[_PyExc_ValueError]; //@line 1783 "bz2module.c"
        _PyErr_SetString($9, ((__str59)&4294967295)); //@line 1783 "bz2module.c"
        __label__ = 8; break; //@line 1783 "bz2module.c"
      case 5: // $bb4
        var $10=HEAP[$self_addr]; //@line 1796 "bz2module.c"
        var $11=(($10+8)&4294967295); //@line 1796 "bz2module.c"
        var $12=$11; //@line 1796 "bz2module.c"
        _llvm_memset_p0i8_i32($12, 0, 48, 1, 0); //@line 1796 "bz2module.c"
        var $13=HEAP[$compresslevel]; //@line 1797 "bz2module.c"
        var $14=HEAP[$self_addr]; //@line 1797 "bz2module.c"
        var $15=(($14+8)&4294967295); //@line 1797 "bz2module.c"
        var $16=_BZ2_bzCompressInit($15, $13, 0, 0); //@line 1797 "bz2module.c"
        HEAP[$bzerror]=$16; //@line 1797 "bz2module.c"
        var $17=HEAP[$bzerror]; //@line 1798 "bz2module.c"
        var $18=((($17))|0)!=0; //@line 1798 "bz2module.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1798 "bz2module.c"
      case 6: // $bb5
        var $19=HEAP[$bzerror]; //@line 1799 "bz2module.c"
        var $20=_Util_CatchBZ2Error($19); //@line 1799 "bz2module.c"
        __label__ = 8; break; //@line 1799 "bz2module.c"
      case 7: // $bb6
        var $21=HEAP[$self_addr]; //@line 1803 "bz2module.c"
        var $22=(($21+56)&4294967295); //@line 1803 "bz2module.c"
        HEAP[$22]=1; //@line 1803 "bz2module.c"
        HEAP[$0]=0; //@line 1805 "bz2module.c"
        __label__ = 9; break; //@line 1805 "bz2module.c"
      case 8: // $error
        HEAP[$0]=-1; //@line 1813 "bz2module.c"
        __label__ = 9; break; //@line 1813 "bz2module.c"
      case 9: // $bb7
        var $23=HEAP[$0]; //@line 1780 "bz2module.c"
        HEAP[$retval]=$23; //@line 1780 "bz2module.c"
        __label__ = 10; break; //@line 1780 "bz2module.c"
      case 10: // $return
        var $retval8=HEAP[$retval]; //@line 1780 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1780 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Comp_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 1823 "bz2module.c"
        var $1=(($0+8)&4294967295); //@line 1823 "bz2module.c"
        var $2=_BZ2_bzCompressEnd($1); //@line 1823 "bz2module.c"
        var $3=HEAP[$self_addr]; //@line 1824 "bz2module.c"
        var $4=$3; //@line 1824 "bz2module.c"
        var $5=(($4+4)&4294967295); //@line 1824 "bz2module.c"
        var $6=HEAP[$5]; //@line 1824 "bz2module.c"
        var $7=(($6+160)&4294967295); //@line 1824 "bz2module.c"
        var $8=HEAP[$7]; //@line 1824 "bz2module.c"
        var $9=HEAP[$self_addr]; //@line 1824 "bz2module.c"
        var $10=$9; //@line 1824 "bz2module.c"
        FUNCTION_TABLE[$8]($10); //@line 1824 "bz2module.c"
        __label__ = 1; break; //@line 1825 "bz2module.c"
      case 1: // $return
        STACKTOP = __stackBase__;
        return; //@line 1825 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Decomp_decompress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 100; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pdata=__stackBase__+16;
        var $data=__stackBase__+68;
        var $datasize=__stackBase__+72;
        var $bufsize=__stackBase__+76;
        var $totalout=__stackBase__+80;
        var $ret=__stackBase__+88;
        var $bzs=__stackBase__+92;
        var $bzerror=__stackBase__+96;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$bufsize]=8192; //@line 1915 "bz2module.c"
        HEAP[$ret]=0; //@line 1917 "bz2module.c"
        var $1=HEAP[$self_addr]; //@line 1918 "bz2module.c"
        var $2=(($1+8)&4294967295); //@line 1918 "bz2module.c"
        HEAP[$bzs]=$2; //@line 1918 "bz2module.c"
        var $3=HEAP[$args_addr]; //@line 1921 "bz2module.c"
        var $4=_PyArg_ParseTuple($3, ((__str73)&4294967295), $pdata); //@line 1921 "bz2module.c"
        var $5=((($4))|0)==0; //@line 1921 "bz2module.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1921 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1922 "bz2module.c"
        __label__ = 27; break; //@line 1922 "bz2module.c"
      case 2: // $bb1
        var $6=(($pdata)&4294967295); //@line 1923 "bz2module.c"
        var $7=HEAP[$6]; //@line 1923 "bz2module.c"
        HEAP[$data]=$7; //@line 1923 "bz2module.c"
        var $8=(($pdata+8)&4294967295); //@line 1924 "bz2module.c"
        var $9=HEAP[$8]; //@line 1924 "bz2module.c"
        HEAP[$datasize]=$9; //@line 1924 "bz2module.c"
        var $10=HEAP[$self_addr]; //@line 1927 "bz2module.c"
        var $11=(($10+56)&4294967295); //@line 1927 "bz2module.c"
        var $12=HEAP[$11]; //@line 1927 "bz2module.c"
        var $13=((($12))|0)==0; //@line 1927 "bz2module.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1927 "bz2module.c"
      case 3: // $bb2
        var $14=HEAP[_PyExc_EOFError]; //@line 1928 "bz2module.c"
        _PyErr_SetString($14, ((__str74)&4294967295)); //@line 1928 "bz2module.c"
        __label__ = 23; break; //@line 1928 "bz2module.c"
      case 4: // $bb3
        var $15=HEAP[$bufsize]; //@line 1933 "bz2module.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 1933 "bz2module.c"
        HEAP[$ret]=$16; //@line 1933 "bz2module.c"
        var $17=HEAP[$ret]; //@line 1934 "bz2module.c"
        var $18=($17)==0; //@line 1934 "bz2module.c"
        if ($18) { __label__ = 23; break; } else { __label__ = 5; break; } //@line 1934 "bz2module.c"
      case 5: // $bb4
        var $19=HEAP[$bzs]; //@line 1937 "bz2module.c"
        var $20=(($19)&4294967295); //@line 1937 "bz2module.c"
        var $21=HEAP[$data]; //@line 1937 "bz2module.c"
        HEAP[$20]=$21; //@line 1937 "bz2module.c"
        var $22=HEAP[$datasize]; //@line 1938 "bz2module.c"
        var $23=HEAP[$bzs]; //@line 1938 "bz2module.c"
        var $24=(($23+4)&4294967295); //@line 1938 "bz2module.c"
        HEAP[$24]=$22; //@line 1938 "bz2module.c"
        var $25=HEAP[$ret]; //@line 1939 "bz2module.c"
        var $26=$25; //@line 1939 "bz2module.c"
        var $27=(($26+20)&4294967295); //@line 1939 "bz2module.c"
        var $28=(($27)&4294967295); //@line 1939 "bz2module.c"
        var $29=HEAP[$bzs]; //@line 1939 "bz2module.c"
        var $30=(($29+16)&4294967295); //@line 1939 "bz2module.c"
        HEAP[$30]=$28; //@line 1939 "bz2module.c"
        var $31=HEAP[$bufsize]; //@line 1940 "bz2module.c"
        var $32=HEAP[$bzs]; //@line 1940 "bz2module.c"
        var $33=(($32+20)&4294967295); //@line 1940 "bz2module.c"
        HEAP[$33]=$31; //@line 1940 "bz2module.c"
        var $34=HEAP[$bzs]; //@line 1942 "bz2module.c"
        var $35=(($34+28)&4294967295); //@line 1942 "bz2module.c"
        var $36=HEAP[$35]; //@line 1942 "bz2module.c"
        var $37=((($36))>>>0); //@line 1942 "bz2module.c"
        var $38=($37)*Math.pow(2,32); //@line 1942 "bz2module.c"
        var $39=HEAP[$bzs]; //@line 1942 "bz2module.c"
        var $40=(($39+24)&4294967295); //@line 1942 "bz2module.c"
        var $41=HEAP[$40]; //@line 1942 "bz2module.c"
        var $42=((($41))>>>0); //@line 1942 "bz2module.c"
        var $43=($38) + ($42); //@line 1942 "bz2module.c"
        HEAP[$totalout]=$43; //@line 1942 "bz2module.c"
        __label__ = 6; break; //@line 1942 "bz2module.c"
      case 6: // $bb5
        var $44=HEAP[$bzs]; //@line 1946 "bz2module.c"
        var $45=_BZ2_bzDecompress($44); //@line 1946 "bz2module.c"
        HEAP[$bzerror]=$45; //@line 1946 "bz2module.c"
        var $46=HEAP[$bzerror]; //@line 1948 "bz2module.c"
        var $47=((($46))|0)==4; //@line 1948 "bz2module.c"
        if ($47) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 1948 "bz2module.c"
      case 7: // $bb6
        var $48=HEAP[$bzs]; //@line 1949 "bz2module.c"
        var $49=(($48+4)&4294967295); //@line 1949 "bz2module.c"
        var $50=HEAP[$49]; //@line 1949 "bz2module.c"
        var $51=((($50))|0)!=0; //@line 1949 "bz2module.c"
        if ($51) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1949 "bz2module.c"
      case 8: // $bb7
        var $52=HEAP[$self_addr]; //@line 1950 "bz2module.c"
        var $53=(($52+60)&4294967295); //@line 1950 "bz2module.c"
        var $54=HEAP[$53]; //@line 1950 "bz2module.c"
        var $55=(($54)&4294967295); //@line 1950 "bz2module.c"
        var $56=HEAP[$55]; //@line 1950 "bz2module.c"
        var $57=((($56) - 1)&4294967295); //@line 1950 "bz2module.c"
        var $58=(($54)&4294967295); //@line 1950 "bz2module.c"
        HEAP[$58]=$57; //@line 1950 "bz2module.c"
        var $59=(($54)&4294967295); //@line 1950 "bz2module.c"
        var $60=HEAP[$59]; //@line 1950 "bz2module.c"
        var $61=((($60))|0)==0; //@line 1950 "bz2module.c"
        if ($61) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1950 "bz2module.c"
      case 9: // $bb8
        var $62=HEAP[$self_addr]; //@line 1950 "bz2module.c"
        var $63=(($62+60)&4294967295); //@line 1950 "bz2module.c"
        var $64=HEAP[$63]; //@line 1950 "bz2module.c"
        var $65=(($64+4)&4294967295); //@line 1950 "bz2module.c"
        var $66=HEAP[$65]; //@line 1950 "bz2module.c"
        var $67=(($66+24)&4294967295); //@line 1950 "bz2module.c"
        var $68=HEAP[$67]; //@line 1950 "bz2module.c"
        var $69=HEAP[$self_addr]; //@line 1950 "bz2module.c"
        var $70=(($69+60)&4294967295); //@line 1950 "bz2module.c"
        var $71=HEAP[$70]; //@line 1950 "bz2module.c"
        FUNCTION_TABLE[$68]($71); //@line 1950 "bz2module.c"
        __label__ = 10; break; //@line 1950 "bz2module.c"
      case 10: // $bb9
        var $72=HEAP[$bzs]; //@line 1951 "bz2module.c"
        var $73=(($72+4)&4294967295); //@line 1951 "bz2module.c"
        var $74=HEAP[$73]; //@line 1951 "bz2module.c"
        var $75=HEAP[$bzs]; //@line 1951 "bz2module.c"
        var $76=(($75)&4294967295); //@line 1951 "bz2module.c"
        var $77=HEAP[$76]; //@line 1951 "bz2module.c"
        var $78=_PyString_FromStringAndSize($77, $74); //@line 1951 "bz2module.c"
        var $79=HEAP[$self_addr]; //@line 1951 "bz2module.c"
        var $80=(($79+60)&4294967295); //@line 1951 "bz2module.c"
        HEAP[$80]=$78; //@line 1951 "bz2module.c"
        __label__ = 11; break; //@line 1951 "bz2module.c"
      case 11: // $bb10
        var $81=HEAP[$self_addr]; //@line 1955 "bz2module.c"
        var $82=(($81+56)&4294967295); //@line 1955 "bz2module.c"
        HEAP[$82]=0; //@line 1955 "bz2module.c"
        __label__ = 20; break; //@line 1955 "bz2module.c"
      case 12: // $bb11
        var $83=HEAP[$bzerror]; //@line 1958 "bz2module.c"
        var $84=((($83))|0)!=0; //@line 1958 "bz2module.c"
        if ($84) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1958 "bz2module.c"
      case 13: // $bb12
        var $85=HEAP[$bzerror]; //@line 1959 "bz2module.c"
        var $86=_Util_CatchBZ2Error($85); //@line 1959 "bz2module.c"
        __label__ = 23; break; //@line 1959 "bz2module.c"
      case 14: // $bb13
        var $87=HEAP[$bzs]; //@line 1962 "bz2module.c"
        var $88=(($87+4)&4294967295); //@line 1962 "bz2module.c"
        var $89=HEAP[$88]; //@line 1962 "bz2module.c"
        var $90=((($89))|0)==0; //@line 1962 "bz2module.c"
        if ($90) { __label__ = 20; break; } else { __label__ = 15; break; } //@line 1962 "bz2module.c"
      case 15: // $bb14
        var $91=HEAP[$bzs]; //@line 1964 "bz2module.c"
        var $92=(($91+20)&4294967295); //@line 1964 "bz2module.c"
        var $93=HEAP[$92]; //@line 1964 "bz2module.c"
        var $94=((($93))|0)==0; //@line 1964 "bz2module.c"
        if ($94) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 1964 "bz2module.c"
      case 16: // $bb15
        var $95=HEAP[$bufsize]; //@line 1965 "bz2module.c"
        var $96=_Util_NewBufferSize($95); //@line 1965 "bz2module.c"
        HEAP[$bufsize]=$96; //@line 1965 "bz2module.c"
        var $97=HEAP[$bufsize]; //@line 1966 "bz2module.c"
        var $98=__PyString_Resize($ret, $97); //@line 1966 "bz2module.c"
        var $99=((($98))|0) < 0; //@line 1966 "bz2module.c"
        if ($99) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1966 "bz2module.c"
      case 17: // $bb16
        var $100=HEAP[$bzs]; //@line 1967 "bz2module.c"
        var $101=_BZ2_bzDecompressEnd($100); //@line 1967 "bz2module.c"
        __label__ = 23; break; //@line 1967 "bz2module.c"
      case 18: // $bb17
        var $102=HEAP[$ret]; //@line 1970 "bz2module.c"
        var $103=$102; //@line 1970 "bz2module.c"
        var $104=(($103+20)&4294967295); //@line 1970 "bz2module.c"
        var $105=(($104)&4294967295); //@line 1970 "bz2module.c"
        var $106=HEAP[$bzs]; //@line 1970 "bz2module.c"
        var $107=(($106+16)&4294967295); //@line 1970 "bz2module.c"
        HEAP[$107]=$105; //@line 1970 "bz2module.c"
        var $108=HEAP[$ret]; //@line 1971 "bz2module.c"
        var $109=$108; //@line 1971 "bz2module.c"
        var $110=(($109+20)&4294967295); //@line 1971 "bz2module.c"
        var $111=(($110)&4294967295); //@line 1971 "bz2module.c"
        var $112=HEAP[$bzs]; //@line 1971 "bz2module.c"
        var $113=(($112+28)&4294967295); //@line 1971 "bz2module.c"
        var $114=HEAP[$113]; //@line 1971 "bz2module.c"
        var $115=((($114))>>>0); //@line 1971 "bz2module.c"
        var $116=($115)*Math.pow(2,32); //@line 1971 "bz2module.c"
        var $117=HEAP[$bzs]; //@line 1971 "bz2module.c"
        var $118=(($117+24)&4294967295); //@line 1971 "bz2module.c"
        var $119=HEAP[$118]; //@line 1971 "bz2module.c"
        var $120=((($119))>>>0); //@line 1971 "bz2module.c"
        var $121=($116) + ($120); //@line 1971 "bz2module.c"
        var $122=HEAP[$totalout]; //@line 1971 "bz2module.c"
        var $123=($121) - ($122); //@line 1971 "bz2module.c"
        var $124=((($123)) & 4294967295); //@line 1971 "bz2module.c"
        var $125=(($111+$124)&4294967295); //@line 1971 "bz2module.c"
        var $126=HEAP[$bzs]; //@line 1971 "bz2module.c"
        var $127=(($126+16)&4294967295); //@line 1971 "bz2module.c"
        HEAP[$127]=$125; //@line 1971 "bz2module.c"
        var $128=HEAP[$bzs]; //@line 1973 "bz2module.c"
        var $129=(($128+16)&4294967295); //@line 1973 "bz2module.c"
        var $130=HEAP[$129]; //@line 1973 "bz2module.c"
        var $131=($130); //@line 1973 "bz2module.c"
        var $132=HEAP[$ret]; //@line 1973 "bz2module.c"
        var $133=$132; //@line 1973 "bz2module.c"
        var $134=(($133+20)&4294967295); //@line 1973 "bz2module.c"
        var $135=($134); //@line 1973 "bz2module.c"
        var $136=((($131) - ($135))&4294967295); //@line 1973 "bz2module.c"
        var $137=HEAP[$bufsize]; //@line 1973 "bz2module.c"
        var $138=((($137) - ($136))&4294967295); //@line 1973 "bz2module.c"
        var $139=HEAP[$bzs]; //@line 1973 "bz2module.c"
        var $140=(($139+20)&4294967295); //@line 1973 "bz2module.c"
        HEAP[$140]=$138; //@line 1973 "bz2module.c"
        __label__ = 19; break; //@line 1973 "bz2module.c"
      case 19: // $bb18
        __label__ = 6; break; //@line 1973 "bz2module.c"
      case 20: // $bb19
        var $141=HEAP[$bzs]; //@line 1977 "bz2module.c"
        var $142=(($141+20)&4294967295); //@line 1977 "bz2module.c"
        var $143=HEAP[$142]; //@line 1977 "bz2module.c"
        var $144=((($143))|0)!=0; //@line 1977 "bz2module.c"
        if ($144) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1977 "bz2module.c"
      case 21: // $bb20
        var $145=HEAP[$bzs]; //@line 1978 "bz2module.c"
        var $146=(($145+24)&4294967295); //@line 1978 "bz2module.c"
        var $147=HEAP[$146]; //@line 1978 "bz2module.c"
        var $148=HEAP[$totalout]; //@line 1978 "bz2module.c"
        var $149=((($148)) & 4294967295); //@line 1978 "bz2module.c"
        var $150=((($147) - ($149))&4294967295); //@line 1978 "bz2module.c"
        var $151=__PyString_Resize($ret, $150); //@line 1978 "bz2module.c"
        __label__ = 22; break; //@line 1978 "bz2module.c"
      case 22: // $bb21
        _PyBuffer_Release($pdata); //@line 1981 "bz2module.c"
        var $152=HEAP[$ret]; //@line 1982 "bz2module.c"
        HEAP[$0]=$152; //@line 1982 "bz2module.c"
        __label__ = 27; break; //@line 1982 "bz2module.c"
      case 23: // $error
        _PyBuffer_Release($pdata); //@line 1986 "bz2module.c"
        var $153=HEAP[$ret]; //@line 1987 "bz2module.c"
        var $154=($153)!=0; //@line 1987 "bz2module.c"
        if ($154) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 1987 "bz2module.c"
      case 24: // $bb22
        var $155=HEAP[$ret]; //@line 1987 "bz2module.c"
        var $156=(($155)&4294967295); //@line 1987 "bz2module.c"
        var $157=HEAP[$156]; //@line 1987 "bz2module.c"
        var $158=((($157) - 1)&4294967295); //@line 1987 "bz2module.c"
        var $159=(($155)&4294967295); //@line 1987 "bz2module.c"
        HEAP[$159]=$158; //@line 1987 "bz2module.c"
        var $160=(($155)&4294967295); //@line 1987 "bz2module.c"
        var $161=HEAP[$160]; //@line 1987 "bz2module.c"
        var $162=((($161))|0)==0; //@line 1987 "bz2module.c"
        if ($162) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1987 "bz2module.c"
      case 25: // $bb23
        var $163=HEAP[$ret]; //@line 1987 "bz2module.c"
        var $164=(($163+4)&4294967295); //@line 1987 "bz2module.c"
        var $165=HEAP[$164]; //@line 1987 "bz2module.c"
        var $166=(($165+24)&4294967295); //@line 1987 "bz2module.c"
        var $167=HEAP[$166]; //@line 1987 "bz2module.c"
        var $168=HEAP[$ret]; //@line 1987 "bz2module.c"
        FUNCTION_TABLE[$167]($168); //@line 1987 "bz2module.c"
        __label__ = 26; break; //@line 1987 "bz2module.c"
      case 26: // $bb24
        HEAP[$0]=0; //@line 1988 "bz2module.c"
        __label__ = 27; break; //@line 1988 "bz2module.c"
      case 27: // $bb25
        var $169=HEAP[$0]; //@line 1922 "bz2module.c"
        HEAP[$retval]=$169; //@line 1922 "bz2module.c"
        __label__ = 28; break; //@line 1922 "bz2module.c"
      case 28: // $return
        var $retval26=HEAP[$retval]; //@line 1922 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 1922 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Decomp_init($self, $args, $kwargs) {
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
        var $bzerror=__stackBase__+20;
        var $_py_tmp=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        var $1=HEAP[$args_addr]; //@line 2005 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, ((__str76)&4294967295)); //@line 2005 "bz2module.c"
        var $3=((($2))|0)==0; //@line 2005 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2005 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 2006 "bz2module.c"
        __label__ = 10; break; //@line 2006 "bz2module.c"
      case 2: // $bb1
        var $4=_PyString_FromString(((__str13)&4294967295)); //@line 2016 "bz2module.c"
        var $5=HEAP[$self_addr]; //@line 2016 "bz2module.c"
        var $6=(($5+60)&4294967295); //@line 2016 "bz2module.c"
        HEAP[$6]=$4; //@line 2016 "bz2module.c"
        var $7=HEAP[$self_addr]; //@line 2017 "bz2module.c"
        var $8=(($7+60)&4294967295); //@line 2017 "bz2module.c"
        var $9=HEAP[$8]; //@line 2017 "bz2module.c"
        var $10=($9)==0; //@line 2017 "bz2module.c"
        if ($10) { __label__ = 6; break; } else { __label__ = 3; break; } //@line 2017 "bz2module.c"
      case 3: // $bb2
        var $11=HEAP[$self_addr]; //@line 2020 "bz2module.c"
        var $12=(($11+8)&4294967295); //@line 2020 "bz2module.c"
        var $13=$12; //@line 2020 "bz2module.c"
        _llvm_memset_p0i8_i32($13, 0, 48, 1, 0); //@line 2020 "bz2module.c"
        var $14=HEAP[$self_addr]; //@line 2021 "bz2module.c"
        var $15=(($14+8)&4294967295); //@line 2021 "bz2module.c"
        var $16=_BZ2_bzDecompressInit($15, 0, 0); //@line 2021 "bz2module.c"
        HEAP[$bzerror]=$16; //@line 2021 "bz2module.c"
        var $17=HEAP[$bzerror]; //@line 2022 "bz2module.c"
        var $18=((($17))|0)!=0; //@line 2022 "bz2module.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2022 "bz2module.c"
      case 4: // $bb3
        var $19=HEAP[$bzerror]; //@line 2023 "bz2module.c"
        var $20=_Util_CatchBZ2Error($19); //@line 2023 "bz2module.c"
        __label__ = 6; break; //@line 2023 "bz2module.c"
      case 5: // $bb4
        var $21=HEAP[$self_addr]; //@line 2027 "bz2module.c"
        var $22=(($21+56)&4294967295); //@line 2027 "bz2module.c"
        HEAP[$22]=1; //@line 2027 "bz2module.c"
        HEAP[$0]=0; //@line 2029 "bz2module.c"
        __label__ = 10; break; //@line 2029 "bz2module.c"
      case 6: // $error
        var $23=HEAP[$self_addr]; //@line 2038 "bz2module.c"
        var $24=(($23+60)&4294967295); //@line 2038 "bz2module.c"
        var $25=HEAP[$24]; //@line 2038 "bz2module.c"
        var $26=($25)!=0; //@line 2038 "bz2module.c"
        if ($26) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2038 "bz2module.c"
      case 7: // $bb5
        var $27=HEAP[$self_addr]; //@line 2038 "bz2module.c"
        var $28=(($27+60)&4294967295); //@line 2038 "bz2module.c"
        var $29=HEAP[$28]; //@line 2038 "bz2module.c"
        HEAP[$_py_tmp]=$29; //@line 2038 "bz2module.c"
        var $30=HEAP[$self_addr]; //@line 2038 "bz2module.c"
        var $31=(($30+60)&4294967295); //@line 2038 "bz2module.c"
        HEAP[$31]=0; //@line 2038 "bz2module.c"
        var $32=HEAP[$_py_tmp]; //@line 2038 "bz2module.c"
        var $33=(($32)&4294967295); //@line 2038 "bz2module.c"
        var $34=HEAP[$33]; //@line 2038 "bz2module.c"
        var $35=((($34) - 1)&4294967295); //@line 2038 "bz2module.c"
        var $36=HEAP[$_py_tmp]; //@line 2038 "bz2module.c"
        var $37=(($36)&4294967295); //@line 2038 "bz2module.c"
        HEAP[$37]=$35; //@line 2038 "bz2module.c"
        var $38=HEAP[$_py_tmp]; //@line 2038 "bz2module.c"
        var $39=(($38)&4294967295); //@line 2038 "bz2module.c"
        var $40=HEAP[$39]; //@line 2038 "bz2module.c"
        var $41=((($40))|0)==0; //@line 2038 "bz2module.c"
        if ($41) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2038 "bz2module.c"
      case 8: // $bb6
        var $42=HEAP[$_py_tmp]; //@line 2038 "bz2module.c"
        var $43=(($42+4)&4294967295); //@line 2038 "bz2module.c"
        var $44=HEAP[$43]; //@line 2038 "bz2module.c"
        var $45=(($44+24)&4294967295); //@line 2038 "bz2module.c"
        var $46=HEAP[$45]; //@line 2038 "bz2module.c"
        var $47=HEAP[$_py_tmp]; //@line 2038 "bz2module.c"
        FUNCTION_TABLE[$46]($47); //@line 2038 "bz2module.c"
        __label__ = 9; break; //@line 2038 "bz2module.c"
      case 9: // $bb7
        HEAP[$0]=-1; //@line 2039 "bz2module.c"
        __label__ = 10; break; //@line 2039 "bz2module.c"
      case 10: // $bb8
        var $48=HEAP[$0]; //@line 2006 "bz2module.c"
        HEAP[$retval]=$48; //@line 2006 "bz2module.c"
        __label__ = 11; break; //@line 2006 "bz2module.c"
      case 11: // $return
        var $retval9=HEAP[$retval]; //@line 2006 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 2006 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Decomp_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 2049 "bz2module.c"
        var $1=(($0+60)&4294967295); //@line 2049 "bz2module.c"
        var $2=HEAP[$1]; //@line 2049 "bz2module.c"
        var $3=($2)!=0; //@line 2049 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2049 "bz2module.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 2049 "bz2module.c"
        var $5=(($4+60)&4294967295); //@line 2049 "bz2module.c"
        var $6=HEAP[$5]; //@line 2049 "bz2module.c"
        var $7=(($6)&4294967295); //@line 2049 "bz2module.c"
        var $8=HEAP[$7]; //@line 2049 "bz2module.c"
        var $9=((($8) - 1)&4294967295); //@line 2049 "bz2module.c"
        var $10=(($6)&4294967295); //@line 2049 "bz2module.c"
        HEAP[$10]=$9; //@line 2049 "bz2module.c"
        var $11=(($6)&4294967295); //@line 2049 "bz2module.c"
        var $12=HEAP[$11]; //@line 2049 "bz2module.c"
        var $13=((($12))|0)==0; //@line 2049 "bz2module.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2049 "bz2module.c"
      case 2: // $bb1
        var $14=HEAP[$self_addr]; //@line 2049 "bz2module.c"
        var $15=(($14+60)&4294967295); //@line 2049 "bz2module.c"
        var $16=HEAP[$15]; //@line 2049 "bz2module.c"
        var $17=(($16+4)&4294967295); //@line 2049 "bz2module.c"
        var $18=HEAP[$17]; //@line 2049 "bz2module.c"
        var $19=(($18+24)&4294967295); //@line 2049 "bz2module.c"
        var $20=HEAP[$19]; //@line 2049 "bz2module.c"
        var $21=HEAP[$self_addr]; //@line 2049 "bz2module.c"
        var $22=(($21+60)&4294967295); //@line 2049 "bz2module.c"
        var $23=HEAP[$22]; //@line 2049 "bz2module.c"
        FUNCTION_TABLE[$20]($23); //@line 2049 "bz2module.c"
        __label__ = 3; break; //@line 2049 "bz2module.c"
      case 3: // $bb2
        var $24=HEAP[$self_addr]; //@line 2050 "bz2module.c"
        var $25=(($24+8)&4294967295); //@line 2050 "bz2module.c"
        var $26=_BZ2_bzDecompressEnd($25); //@line 2050 "bz2module.c"
        var $27=HEAP[$self_addr]; //@line 2051 "bz2module.c"
        var $28=$27; //@line 2051 "bz2module.c"
        var $29=(($28+4)&4294967295); //@line 2051 "bz2module.c"
        var $30=HEAP[$29]; //@line 2051 "bz2module.c"
        var $31=(($30+160)&4294967295); //@line 2051 "bz2module.c"
        var $32=HEAP[$31]; //@line 2051 "bz2module.c"
        var $33=HEAP[$self_addr]; //@line 2051 "bz2module.c"
        var $34=$33; //@line 2051 "bz2module.c"
        FUNCTION_TABLE[$32]($34); //@line 2051 "bz2module.c"
        __label__ = 4; break; //@line 2052 "bz2module.c"
      case 4: // $return
        STACKTOP = __stackBase__;
        return; //@line 2052 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bz2_compress($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 148; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 148);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $compresslevel=__stackBase__+20;
        var $pdata=__stackBase__+24;
        var $data=__stackBase__+76;
        var $datasize=__stackBase__+80;
        var $bufsize=__stackBase__+84;
        var $ret=__stackBase__+88;
        var $_bzs=__stackBase__+92;
        var $bzs=__stackBase__+140;
        var $bzerror=__stackBase__+144;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$compresslevel]=9; //@line 2124 "bz2module.c"
        HEAP[$ret]=0; //@line 2129 "bz2module.c"
        HEAP[$bzs]=$_bzs; //@line 2131 "bz2module.c"
        var $1=HEAP[$args_addr]; //@line 2135 "bz2module.c"
        var $2=HEAP[$kwargs_addr]; //@line 2135 "bz2module.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str78)&4294967295), ((_kwlist_10147)&4294967295), $pdata, $compresslevel); //@line 2135 "bz2module.c"
        var $4=((($3))|0)==0; //@line 2135 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2135 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2138 "bz2module.c"
        __label__ = 26; break; //@line 2138 "bz2module.c"
      case 2: // $bb1
        var $5=(($pdata)&4294967295); //@line 2139 "bz2module.c"
        var $6=HEAP[$5]; //@line 2139 "bz2module.c"
        HEAP[$data]=$6; //@line 2139 "bz2module.c"
        var $7=(($pdata+8)&4294967295); //@line 2140 "bz2module.c"
        var $8=HEAP[$7]; //@line 2140 "bz2module.c"
        HEAP[$datasize]=$8; //@line 2140 "bz2module.c"
        var $9=HEAP[$compresslevel]; //@line 2142 "bz2module.c"
        var $10=((($9))|0) <= 0; //@line 2142 "bz2module.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2142 "bz2module.c"
      case 3: // $bb2
        var $11=HEAP[$compresslevel]; //@line 2142 "bz2module.c"
        var $12=((($11))|0) > 9; //@line 2142 "bz2module.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2142 "bz2module.c"
      case 4: // $bb3
        var $13=HEAP[_PyExc_ValueError]; //@line 2143 "bz2module.c"
        _PyErr_SetString($13, ((__str59)&4294967295)); //@line 2143 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2145 "bz2module.c"
        HEAP[$0]=0; //@line 2146 "bz2module.c"
        __label__ = 26; break; //@line 2146 "bz2module.c"
      case 5: // $bb4
        var $14=HEAP[$datasize]; //@line 2151 "bz2module.c"
        var $15=((((($14))|0)/100)|0); //@line 2151 "bz2module.c"
        var $16=((($15) + 1)&4294967295); //@line 2151 "bz2module.c"
        var $17=HEAP[$datasize]; //@line 2151 "bz2module.c"
        var $18=((($16) + ($17))&4294967295); //@line 2151 "bz2module.c"
        var $19=((($18) + 600)&4294967295); //@line 2151 "bz2module.c"
        HEAP[$bufsize]=$19; //@line 2151 "bz2module.c"
        var $20=HEAP[$bufsize]; //@line 2153 "bz2module.c"
        var $21=_PyString_FromStringAndSize(0, $20); //@line 2153 "bz2module.c"
        HEAP[$ret]=$21; //@line 2153 "bz2module.c"
        var $22=HEAP[$ret]; //@line 2154 "bz2module.c"
        var $23=($22)==0; //@line 2154 "bz2module.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2154 "bz2module.c"
      case 6: // $bb5
        _PyBuffer_Release($pdata); //@line 2155 "bz2module.c"
        HEAP[$0]=0; //@line 2156 "bz2module.c"
        __label__ = 26; break; //@line 2156 "bz2module.c"
      case 7: // $bb6
        var $24=HEAP[$bzs]; //@line 2159 "bz2module.c"
        var $25=$24; //@line 2159 "bz2module.c"
        _llvm_memset_p0i8_i32($25, 0, 48, 1, 0); //@line 2159 "bz2module.c"
        var $26=HEAP[$bzs]; //@line 2161 "bz2module.c"
        var $27=(($26)&4294967295); //@line 2161 "bz2module.c"
        var $28=HEAP[$data]; //@line 2161 "bz2module.c"
        HEAP[$27]=$28; //@line 2161 "bz2module.c"
        var $29=HEAP[$datasize]; //@line 2162 "bz2module.c"
        var $30=HEAP[$bzs]; //@line 2162 "bz2module.c"
        var $31=(($30+4)&4294967295); //@line 2162 "bz2module.c"
        HEAP[$31]=$29; //@line 2162 "bz2module.c"
        var $32=HEAP[$ret]; //@line 2163 "bz2module.c"
        var $33=$32; //@line 2163 "bz2module.c"
        var $34=(($33+20)&4294967295); //@line 2163 "bz2module.c"
        var $35=(($34)&4294967295); //@line 2163 "bz2module.c"
        var $36=HEAP[$bzs]; //@line 2163 "bz2module.c"
        var $37=(($36+16)&4294967295); //@line 2163 "bz2module.c"
        HEAP[$37]=$35; //@line 2163 "bz2module.c"
        var $38=HEAP[$bufsize]; //@line 2164 "bz2module.c"
        var $39=HEAP[$bzs]; //@line 2164 "bz2module.c"
        var $40=(($39+20)&4294967295); //@line 2164 "bz2module.c"
        HEAP[$40]=$38; //@line 2164 "bz2module.c"
        var $41=HEAP[$compresslevel]; //@line 2166 "bz2module.c"
        var $42=HEAP[$bzs]; //@line 2166 "bz2module.c"
        var $43=_BZ2_bzCompressInit($42, $41, 0, 0); //@line 2166 "bz2module.c"
        HEAP[$bzerror]=$43; //@line 2166 "bz2module.c"
        var $44=HEAP[$bzerror]; //@line 2167 "bz2module.c"
        var $45=((($44))|0)!=0; //@line 2167 "bz2module.c"
        if ($45) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 2167 "bz2module.c"
      case 8: // $bb7
        var $46=HEAP[$bzerror]; //@line 2168 "bz2module.c"
        var $47=_Util_CatchBZ2Error($46); //@line 2168 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2169 "bz2module.c"
        var $48=HEAP[$ret]; //@line 2170 "bz2module.c"
        var $49=(($48)&4294967295); //@line 2170 "bz2module.c"
        var $50=HEAP[$49]; //@line 2170 "bz2module.c"
        var $51=((($50) - 1)&4294967295); //@line 2170 "bz2module.c"
        var $52=(($48)&4294967295); //@line 2170 "bz2module.c"
        HEAP[$52]=$51; //@line 2170 "bz2module.c"
        var $53=(($48)&4294967295); //@line 2170 "bz2module.c"
        var $54=HEAP[$53]; //@line 2170 "bz2module.c"
        var $55=((($54))|0)==0; //@line 2170 "bz2module.c"
        if ($55) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2170 "bz2module.c"
      case 9: // $bb8
        var $56=HEAP[$ret]; //@line 2170 "bz2module.c"
        var $57=(($56+4)&4294967295); //@line 2170 "bz2module.c"
        var $58=HEAP[$57]; //@line 2170 "bz2module.c"
        var $59=(($58+24)&4294967295); //@line 2170 "bz2module.c"
        var $60=HEAP[$59]; //@line 2170 "bz2module.c"
        var $61=HEAP[$ret]; //@line 2170 "bz2module.c"
        FUNCTION_TABLE[$60]($61); //@line 2170 "bz2module.c"
        __label__ = 10; break; //@line 2170 "bz2module.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 2171 "bz2module.c"
        __label__ = 26; break; //@line 2171 "bz2module.c"
      case 11: // $bb10
        var $62=HEAP[$bzs]; //@line 2176 "bz2module.c"
        var $63=_BZ2_bzCompress($62, 2); //@line 2176 "bz2module.c"
        HEAP[$bzerror]=$63; //@line 2176 "bz2module.c"
        var $64=HEAP[$bzerror]; //@line 2178 "bz2module.c"
        var $65=((($64))|0)==4; //@line 2178 "bz2module.c"
        if ($65) { __label__ = 23; break; } else { __label__ = 12; break; } //@line 2178 "bz2module.c"
      case 12: // $bb11
        var $66=HEAP[$bzerror]; //@line 2180 "bz2module.c"
        var $67=((($66))|0)!=3; //@line 2180 "bz2module.c"
        if ($67) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 2180 "bz2module.c"
      case 13: // $bb12
        var $68=HEAP[$bzs]; //@line 2181 "bz2module.c"
        var $69=_BZ2_bzCompressEnd($68); //@line 2181 "bz2module.c"
        var $70=HEAP[$bzerror]; //@line 2182 "bz2module.c"
        var $71=_Util_CatchBZ2Error($70); //@line 2182 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2183 "bz2module.c"
        var $72=HEAP[$ret]; //@line 2184 "bz2module.c"
        var $73=(($72)&4294967295); //@line 2184 "bz2module.c"
        var $74=HEAP[$73]; //@line 2184 "bz2module.c"
        var $75=((($74) - 1)&4294967295); //@line 2184 "bz2module.c"
        var $76=(($72)&4294967295); //@line 2184 "bz2module.c"
        HEAP[$76]=$75; //@line 2184 "bz2module.c"
        var $77=(($72)&4294967295); //@line 2184 "bz2module.c"
        var $78=HEAP[$77]; //@line 2184 "bz2module.c"
        var $79=((($78))|0)==0; //@line 2184 "bz2module.c"
        if ($79) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2184 "bz2module.c"
      case 14: // $bb13
        var $80=HEAP[$ret]; //@line 2184 "bz2module.c"
        var $81=(($80+4)&4294967295); //@line 2184 "bz2module.c"
        var $82=HEAP[$81]; //@line 2184 "bz2module.c"
        var $83=(($82+24)&4294967295); //@line 2184 "bz2module.c"
        var $84=HEAP[$83]; //@line 2184 "bz2module.c"
        var $85=HEAP[$ret]; //@line 2184 "bz2module.c"
        FUNCTION_TABLE[$84]($85); //@line 2184 "bz2module.c"
        __label__ = 15; break; //@line 2184 "bz2module.c"
      case 15: // $bb14
        HEAP[$0]=0; //@line 2185 "bz2module.c"
        __label__ = 26; break; //@line 2185 "bz2module.c"
      case 16: // $bb15
        var $86=HEAP[$bzs]; //@line 2187 "bz2module.c"
        var $87=(($86+20)&4294967295); //@line 2187 "bz2module.c"
        var $88=HEAP[$87]; //@line 2187 "bz2module.c"
        var $89=((($88))|0)==0; //@line 2187 "bz2module.c"
        if ($89) { __label__ = 17; break; } else { __label__ = 22; break; } //@line 2187 "bz2module.c"
      case 17: // $bb16
        var $90=HEAP[$bufsize]; //@line 2188 "bz2module.c"
        var $91=_Util_NewBufferSize($90); //@line 2188 "bz2module.c"
        HEAP[$bufsize]=$91; //@line 2188 "bz2module.c"
        var $92=HEAP[$bufsize]; //@line 2189 "bz2module.c"
        var $93=__PyString_Resize($ret, $92); //@line 2189 "bz2module.c"
        var $94=((($93))|0) < 0; //@line 2189 "bz2module.c"
        if ($94) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 2189 "bz2module.c"
      case 18: // $bb17
        var $95=HEAP[$bzs]; //@line 2190 "bz2module.c"
        var $96=_BZ2_bzCompressEnd($95); //@line 2190 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2191 "bz2module.c"
        var $97=HEAP[$ret]; //@line 2192 "bz2module.c"
        var $98=(($97)&4294967295); //@line 2192 "bz2module.c"
        var $99=HEAP[$98]; //@line 2192 "bz2module.c"
        var $100=((($99) - 1)&4294967295); //@line 2192 "bz2module.c"
        var $101=(($97)&4294967295); //@line 2192 "bz2module.c"
        HEAP[$101]=$100; //@line 2192 "bz2module.c"
        var $102=(($97)&4294967295); //@line 2192 "bz2module.c"
        var $103=HEAP[$102]; //@line 2192 "bz2module.c"
        var $104=((($103))|0)==0; //@line 2192 "bz2module.c"
        if ($104) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 2192 "bz2module.c"
      case 19: // $bb18
        var $105=HEAP[$ret]; //@line 2192 "bz2module.c"
        var $106=(($105+4)&4294967295); //@line 2192 "bz2module.c"
        var $107=HEAP[$106]; //@line 2192 "bz2module.c"
        var $108=(($107+24)&4294967295); //@line 2192 "bz2module.c"
        var $109=HEAP[$108]; //@line 2192 "bz2module.c"
        var $110=HEAP[$ret]; //@line 2192 "bz2module.c"
        FUNCTION_TABLE[$109]($110); //@line 2192 "bz2module.c"
        __label__ = 20; break; //@line 2192 "bz2module.c"
      case 20: // $bb19
        HEAP[$0]=0; //@line 2193 "bz2module.c"
        __label__ = 26; break; //@line 2193 "bz2module.c"
      case 21: // $bb20
        var $111=HEAP[$ret]; //@line 2195 "bz2module.c"
        var $112=$111; //@line 2195 "bz2module.c"
        var $113=(($112+20)&4294967295); //@line 2195 "bz2module.c"
        var $114=(($113)&4294967295); //@line 2195 "bz2module.c"
        var $115=HEAP[$bzs]; //@line 2195 "bz2module.c"
        var $116=(($115+28)&4294967295); //@line 2195 "bz2module.c"
        var $117=HEAP[$116]; //@line 2195 "bz2module.c"
        var $118=((($117))>>>0); //@line 2195 "bz2module.c"
        var $119=($118)*Math.pow(2,32); //@line 2195 "bz2module.c"
        var $120=HEAP[$bzs]; //@line 2195 "bz2module.c"
        var $121=(($120+24)&4294967295); //@line 2195 "bz2module.c"
        var $122=HEAP[$121]; //@line 2195 "bz2module.c"
        var $123=((($122))>>>0); //@line 2195 "bz2module.c"
        var $124=($119) + ($123); //@line 2195 "bz2module.c"
        var $125=((($124)) & 4294967295); //@line 2195 "bz2module.c"
        var $126=(($114+$125)&4294967295); //@line 2195 "bz2module.c"
        var $127=HEAP[$bzs]; //@line 2195 "bz2module.c"
        var $128=(($127+16)&4294967295); //@line 2195 "bz2module.c"
        HEAP[$128]=$126; //@line 2195 "bz2module.c"
        var $129=HEAP[$bzs]; //@line 2196 "bz2module.c"
        var $130=(($129+16)&4294967295); //@line 2196 "bz2module.c"
        var $131=HEAP[$130]; //@line 2196 "bz2module.c"
        var $132=($131); //@line 2196 "bz2module.c"
        var $133=HEAP[$ret]; //@line 2196 "bz2module.c"
        var $134=$133; //@line 2196 "bz2module.c"
        var $135=(($134+20)&4294967295); //@line 2196 "bz2module.c"
        var $136=($135); //@line 2196 "bz2module.c"
        var $137=((($132) - ($136))&4294967295); //@line 2196 "bz2module.c"
        var $138=HEAP[$bufsize]; //@line 2196 "bz2module.c"
        var $139=((($138) - ($137))&4294967295); //@line 2196 "bz2module.c"
        var $140=HEAP[$bzs]; //@line 2196 "bz2module.c"
        var $141=(($140+20)&4294967295); //@line 2196 "bz2module.c"
        HEAP[$141]=$139; //@line 2196 "bz2module.c"
        __label__ = 22; break; //@line 2196 "bz2module.c"
      case 22: // $bb21
        __label__ = 11; break; //@line 2196 "bz2module.c"
      case 23: // $bb22
        var $142=HEAP[$bzs]; //@line 2200 "bz2module.c"
        var $143=(($142+20)&4294967295); //@line 2200 "bz2module.c"
        var $144=HEAP[$143]; //@line 2200 "bz2module.c"
        var $145=((($144))|0)!=0; //@line 2200 "bz2module.c"
        if ($145) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 2200 "bz2module.c"
      case 24: // $bb23
        var $146=HEAP[$bzs]; //@line 2201 "bz2module.c"
        var $147=(($146+24)&4294967295); //@line 2201 "bz2module.c"
        var $148=HEAP[$147]; //@line 2201 "bz2module.c"
        var $149=__PyString_Resize($ret, $148); //@line 2201 "bz2module.c"
        __label__ = 25; break; //@line 2201 "bz2module.c"
      case 25: // $bb24
        var $150=HEAP[$bzs]; //@line 2202 "bz2module.c"
        var $151=_BZ2_bzCompressEnd($150); //@line 2202 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2204 "bz2module.c"
        var $152=HEAP[$ret]; //@line 2205 "bz2module.c"
        HEAP[$0]=$152; //@line 2205 "bz2module.c"
        __label__ = 26; break; //@line 2205 "bz2module.c"
      case 26: // $bb25
        var $153=HEAP[$0]; //@line 2138 "bz2module.c"
        HEAP[$retval]=$153; //@line 2138 "bz2module.c"
        __label__ = 27; break; //@line 2138 "bz2module.c"
      case 27: // $return
        var $retval26=HEAP[$retval]; //@line 2138 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 2138 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bz2_decompress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 140; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 140);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pdata=__stackBase__+16;
        var $data=__stackBase__+68;
        var $datasize=__stackBase__+72;
        var $bufsize=__stackBase__+76;
        var $ret=__stackBase__+80;
        var $_bzs=__stackBase__+84;
        var $bzs=__stackBase__+132;
        var $bzerror=__stackBase__+136;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$bufsize]=8192; //@line 2221 "bz2module.c"
        HEAP[$bzs]=$_bzs; //@line 2224 "bz2module.c"
        var $1=HEAP[$args_addr]; //@line 2227 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, ((__str73)&4294967295), $pdata); //@line 2227 "bz2module.c"
        var $3=((($2))|0)==0; //@line 2227 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2227 "bz2module.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2228 "bz2module.c"
        __label__ = 29; break; //@line 2228 "bz2module.c"
      case 2: // $bb1
        var $4=(($pdata)&4294967295); //@line 2229 "bz2module.c"
        var $5=HEAP[$4]; //@line 2229 "bz2module.c"
        HEAP[$data]=$5; //@line 2229 "bz2module.c"
        var $6=(($pdata+8)&4294967295); //@line 2230 "bz2module.c"
        var $7=HEAP[$6]; //@line 2230 "bz2module.c"
        HEAP[$datasize]=$7; //@line 2230 "bz2module.c"
        var $8=HEAP[$datasize]; //@line 2232 "bz2module.c"
        var $9=((($8))|0)==0; //@line 2232 "bz2module.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2232 "bz2module.c"
      case 3: // $bb2
        _PyBuffer_Release($pdata); //@line 2233 "bz2module.c"
        var $10=_PyString_FromString(((__str13)&4294967295)); //@line 2234 "bz2module.c"
        HEAP[$0]=$10; //@line 2234 "bz2module.c"
        __label__ = 29; break; //@line 2234 "bz2module.c"
      case 4: // $bb3
        var $11=HEAP[$bufsize]; //@line 2237 "bz2module.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 2237 "bz2module.c"
        HEAP[$ret]=$12; //@line 2237 "bz2module.c"
        var $13=HEAP[$ret]; //@line 2238 "bz2module.c"
        var $14=($13)==0; //@line 2238 "bz2module.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2238 "bz2module.c"
      case 5: // $bb4
        _PyBuffer_Release($pdata); //@line 2239 "bz2module.c"
        HEAP[$0]=0; //@line 2240 "bz2module.c"
        __label__ = 29; break; //@line 2240 "bz2module.c"
      case 6: // $bb5
        var $15=HEAP[$bzs]; //@line 2243 "bz2module.c"
        var $16=$15; //@line 2243 "bz2module.c"
        _llvm_memset_p0i8_i32($16, 0, 48, 1, 0); //@line 2243 "bz2module.c"
        var $17=HEAP[$bzs]; //@line 2245 "bz2module.c"
        var $18=(($17)&4294967295); //@line 2245 "bz2module.c"
        var $19=HEAP[$data]; //@line 2245 "bz2module.c"
        HEAP[$18]=$19; //@line 2245 "bz2module.c"
        var $20=HEAP[$datasize]; //@line 2246 "bz2module.c"
        var $21=HEAP[$bzs]; //@line 2246 "bz2module.c"
        var $22=(($21+4)&4294967295); //@line 2246 "bz2module.c"
        HEAP[$22]=$20; //@line 2246 "bz2module.c"
        var $23=HEAP[$ret]; //@line 2247 "bz2module.c"
        var $24=$23; //@line 2247 "bz2module.c"
        var $25=(($24+20)&4294967295); //@line 2247 "bz2module.c"
        var $26=(($25)&4294967295); //@line 2247 "bz2module.c"
        var $27=HEAP[$bzs]; //@line 2247 "bz2module.c"
        var $28=(($27+16)&4294967295); //@line 2247 "bz2module.c"
        HEAP[$28]=$26; //@line 2247 "bz2module.c"
        var $29=HEAP[$bufsize]; //@line 2248 "bz2module.c"
        var $30=HEAP[$bzs]; //@line 2248 "bz2module.c"
        var $31=(($30+20)&4294967295); //@line 2248 "bz2module.c"
        HEAP[$31]=$29; //@line 2248 "bz2module.c"
        var $32=HEAP[$bzs]; //@line 2250 "bz2module.c"
        var $33=_BZ2_bzDecompressInit($32, 0, 0); //@line 2250 "bz2module.c"
        HEAP[$bzerror]=$33; //@line 2250 "bz2module.c"
        var $34=HEAP[$bzerror]; //@line 2251 "bz2module.c"
        var $35=((($34))|0)!=0; //@line 2251 "bz2module.c"
        if ($35) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 2251 "bz2module.c"
      case 7: // $bb6
        var $36=HEAP[$bzerror]; //@line 2252 "bz2module.c"
        var $37=_Util_CatchBZ2Error($36); //@line 2252 "bz2module.c"
        var $38=HEAP[$ret]; //@line 2253 "bz2module.c"
        var $39=(($38)&4294967295); //@line 2253 "bz2module.c"
        var $40=HEAP[$39]; //@line 2253 "bz2module.c"
        var $41=((($40) - 1)&4294967295); //@line 2253 "bz2module.c"
        var $42=(($38)&4294967295); //@line 2253 "bz2module.c"
        HEAP[$42]=$41; //@line 2253 "bz2module.c"
        var $43=(($38)&4294967295); //@line 2253 "bz2module.c"
        var $44=HEAP[$43]; //@line 2253 "bz2module.c"
        var $45=((($44))|0)==0; //@line 2253 "bz2module.c"
        if ($45) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2253 "bz2module.c"
      case 8: // $bb7
        var $46=HEAP[$ret]; //@line 2253 "bz2module.c"
        var $47=(($46+4)&4294967295); //@line 2253 "bz2module.c"
        var $48=HEAP[$47]; //@line 2253 "bz2module.c"
        var $49=(($48+24)&4294967295); //@line 2253 "bz2module.c"
        var $50=HEAP[$49]; //@line 2253 "bz2module.c"
        var $51=HEAP[$ret]; //@line 2253 "bz2module.c"
        FUNCTION_TABLE[$50]($51); //@line 2253 "bz2module.c"
        __label__ = 9; break; //@line 2253 "bz2module.c"
      case 9: // $bb8
        _PyBuffer_Release($pdata); //@line 2254 "bz2module.c"
        HEAP[$0]=0; //@line 2255 "bz2module.c"
        __label__ = 29; break; //@line 2255 "bz2module.c"
      case 10: // $bb9
        var $52=HEAP[$bzs]; //@line 2260 "bz2module.c"
        var $53=_BZ2_bzDecompress($52); //@line 2260 "bz2module.c"
        HEAP[$bzerror]=$53; //@line 2260 "bz2module.c"
        var $54=HEAP[$bzerror]; //@line 2262 "bz2module.c"
        var $55=((($54))|0)==4; //@line 2262 "bz2module.c"
        if ($55) { __label__ = 26; break; } else { __label__ = 11; break; } //@line 2262 "bz2module.c"
      case 11: // $bb10
        var $56=HEAP[$bzerror]; //@line 2264 "bz2module.c"
        var $57=((($56))|0)!=0; //@line 2264 "bz2module.c"
        if ($57) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 2264 "bz2module.c"
      case 12: // $bb11
        var $58=HEAP[$bzs]; //@line 2265 "bz2module.c"
        var $59=_BZ2_bzDecompressEnd($58); //@line 2265 "bz2module.c"
        var $60=HEAP[$bzerror]; //@line 2266 "bz2module.c"
        var $61=_Util_CatchBZ2Error($60); //@line 2266 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2267 "bz2module.c"
        var $62=HEAP[$ret]; //@line 2268 "bz2module.c"
        var $63=(($62)&4294967295); //@line 2268 "bz2module.c"
        var $64=HEAP[$63]; //@line 2268 "bz2module.c"
        var $65=((($64) - 1)&4294967295); //@line 2268 "bz2module.c"
        var $66=(($62)&4294967295); //@line 2268 "bz2module.c"
        HEAP[$66]=$65; //@line 2268 "bz2module.c"
        var $67=(($62)&4294967295); //@line 2268 "bz2module.c"
        var $68=HEAP[$67]; //@line 2268 "bz2module.c"
        var $69=((($68))|0)==0; //@line 2268 "bz2module.c"
        if ($69) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2268 "bz2module.c"
      case 13: // $bb12
        var $70=HEAP[$ret]; //@line 2268 "bz2module.c"
        var $71=(($70+4)&4294967295); //@line 2268 "bz2module.c"
        var $72=HEAP[$71]; //@line 2268 "bz2module.c"
        var $73=(($72+24)&4294967295); //@line 2268 "bz2module.c"
        var $74=HEAP[$73]; //@line 2268 "bz2module.c"
        var $75=HEAP[$ret]; //@line 2268 "bz2module.c"
        FUNCTION_TABLE[$74]($75); //@line 2268 "bz2module.c"
        __label__ = 14; break; //@line 2268 "bz2module.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 2269 "bz2module.c"
        __label__ = 29; break; //@line 2269 "bz2module.c"
      case 15: // $bb14
        var $76=HEAP[$bzs]; //@line 2271 "bz2module.c"
        var $77=(($76+4)&4294967295); //@line 2271 "bz2module.c"
        var $78=HEAP[$77]; //@line 2271 "bz2module.c"
        var $79=((($78))|0)==0; //@line 2271 "bz2module.c"
        if ($79) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 2271 "bz2module.c"
      case 16: // $bb15
        var $80=HEAP[$bzs]; //@line 2272 "bz2module.c"
        var $81=_BZ2_bzDecompressEnd($80); //@line 2272 "bz2module.c"
        var $82=HEAP[_PyExc_ValueError]; //@line 2273 "bz2module.c"
        _PyErr_SetString($82, ((__str80)&4294967295)); //@line 2273 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2275 "bz2module.c"
        var $83=HEAP[$ret]; //@line 2276 "bz2module.c"
        var $84=(($83)&4294967295); //@line 2276 "bz2module.c"
        var $85=HEAP[$84]; //@line 2276 "bz2module.c"
        var $86=((($85) - 1)&4294967295); //@line 2276 "bz2module.c"
        var $87=(($83)&4294967295); //@line 2276 "bz2module.c"
        HEAP[$87]=$86; //@line 2276 "bz2module.c"
        var $88=(($83)&4294967295); //@line 2276 "bz2module.c"
        var $89=HEAP[$88]; //@line 2276 "bz2module.c"
        var $90=((($89))|0)==0; //@line 2276 "bz2module.c"
        if ($90) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2276 "bz2module.c"
      case 17: // $bb16
        var $91=HEAP[$ret]; //@line 2276 "bz2module.c"
        var $92=(($91+4)&4294967295); //@line 2276 "bz2module.c"
        var $93=HEAP[$92]; //@line 2276 "bz2module.c"
        var $94=(($93+24)&4294967295); //@line 2276 "bz2module.c"
        var $95=HEAP[$94]; //@line 2276 "bz2module.c"
        var $96=HEAP[$ret]; //@line 2276 "bz2module.c"
        FUNCTION_TABLE[$95]($96); //@line 2276 "bz2module.c"
        __label__ = 18; break; //@line 2276 "bz2module.c"
      case 18: // $bb17
        HEAP[$0]=0; //@line 2277 "bz2module.c"
        __label__ = 29; break; //@line 2277 "bz2module.c"
      case 19: // $bb18
        var $97=HEAP[$bzs]; //@line 2279 "bz2module.c"
        var $98=(($97+20)&4294967295); //@line 2279 "bz2module.c"
        var $99=HEAP[$98]; //@line 2279 "bz2module.c"
        var $100=((($99))|0)==0; //@line 2279 "bz2module.c"
        if ($100) { __label__ = 20; break; } else { __label__ = 25; break; } //@line 2279 "bz2module.c"
      case 20: // $bb19
        var $101=HEAP[$bufsize]; //@line 2280 "bz2module.c"
        var $102=_Util_NewBufferSize($101); //@line 2280 "bz2module.c"
        HEAP[$bufsize]=$102; //@line 2280 "bz2module.c"
        var $103=HEAP[$bufsize]; //@line 2281 "bz2module.c"
        var $104=__PyString_Resize($ret, $103); //@line 2281 "bz2module.c"
        var $105=((($104))|0) < 0; //@line 2281 "bz2module.c"
        if ($105) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 2281 "bz2module.c"
      case 21: // $bb20
        var $106=HEAP[$bzs]; //@line 2282 "bz2module.c"
        var $107=_BZ2_bzDecompressEnd($106); //@line 2282 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2283 "bz2module.c"
        var $108=HEAP[$ret]; //@line 2284 "bz2module.c"
        var $109=(($108)&4294967295); //@line 2284 "bz2module.c"
        var $110=HEAP[$109]; //@line 2284 "bz2module.c"
        var $111=((($110) - 1)&4294967295); //@line 2284 "bz2module.c"
        var $112=(($108)&4294967295); //@line 2284 "bz2module.c"
        HEAP[$112]=$111; //@line 2284 "bz2module.c"
        var $113=(($108)&4294967295); //@line 2284 "bz2module.c"
        var $114=HEAP[$113]; //@line 2284 "bz2module.c"
        var $115=((($114))|0)==0; //@line 2284 "bz2module.c"
        if ($115) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 2284 "bz2module.c"
      case 22: // $bb21
        var $116=HEAP[$ret]; //@line 2284 "bz2module.c"
        var $117=(($116+4)&4294967295); //@line 2284 "bz2module.c"
        var $118=HEAP[$117]; //@line 2284 "bz2module.c"
        var $119=(($118+24)&4294967295); //@line 2284 "bz2module.c"
        var $120=HEAP[$119]; //@line 2284 "bz2module.c"
        var $121=HEAP[$ret]; //@line 2284 "bz2module.c"
        FUNCTION_TABLE[$120]($121); //@line 2284 "bz2module.c"
        __label__ = 23; break; //@line 2284 "bz2module.c"
      case 23: // $bb22
        HEAP[$0]=0; //@line 2285 "bz2module.c"
        __label__ = 29; break; //@line 2285 "bz2module.c"
      case 24: // $bb23
        var $122=HEAP[$ret]; //@line 2287 "bz2module.c"
        var $123=$122; //@line 2287 "bz2module.c"
        var $124=(($123+20)&4294967295); //@line 2287 "bz2module.c"
        var $125=(($124)&4294967295); //@line 2287 "bz2module.c"
        var $126=HEAP[$bzs]; //@line 2287 "bz2module.c"
        var $127=(($126+28)&4294967295); //@line 2287 "bz2module.c"
        var $128=HEAP[$127]; //@line 2287 "bz2module.c"
        var $129=((($128))>>>0); //@line 2287 "bz2module.c"
        var $130=($129)*Math.pow(2,32); //@line 2287 "bz2module.c"
        var $131=HEAP[$bzs]; //@line 2287 "bz2module.c"
        var $132=(($131+24)&4294967295); //@line 2287 "bz2module.c"
        var $133=HEAP[$132]; //@line 2287 "bz2module.c"
        var $134=((($133))>>>0); //@line 2287 "bz2module.c"
        var $135=($130) + ($134); //@line 2287 "bz2module.c"
        var $136=((($135)) & 4294967295); //@line 2287 "bz2module.c"
        var $137=(($125+$136)&4294967295); //@line 2287 "bz2module.c"
        var $138=HEAP[$bzs]; //@line 2287 "bz2module.c"
        var $139=(($138+16)&4294967295); //@line 2287 "bz2module.c"
        HEAP[$139]=$137; //@line 2287 "bz2module.c"
        var $140=HEAP[$bzs]; //@line 2288 "bz2module.c"
        var $141=(($140+16)&4294967295); //@line 2288 "bz2module.c"
        var $142=HEAP[$141]; //@line 2288 "bz2module.c"
        var $143=($142); //@line 2288 "bz2module.c"
        var $144=HEAP[$ret]; //@line 2288 "bz2module.c"
        var $145=$144; //@line 2288 "bz2module.c"
        var $146=(($145+20)&4294967295); //@line 2288 "bz2module.c"
        var $147=($146); //@line 2288 "bz2module.c"
        var $148=((($143) - ($147))&4294967295); //@line 2288 "bz2module.c"
        var $149=HEAP[$bufsize]; //@line 2288 "bz2module.c"
        var $150=((($149) - ($148))&4294967295); //@line 2288 "bz2module.c"
        var $151=HEAP[$bzs]; //@line 2288 "bz2module.c"
        var $152=(($151+20)&4294967295); //@line 2288 "bz2module.c"
        HEAP[$152]=$150; //@line 2288 "bz2module.c"
        __label__ = 25; break; //@line 2288 "bz2module.c"
      case 25: // $bb24
        __label__ = 10; break; //@line 2288 "bz2module.c"
      case 26: // $bb25
        var $153=HEAP[$bzs]; //@line 2292 "bz2module.c"
        var $154=(($153+20)&4294967295); //@line 2292 "bz2module.c"
        var $155=HEAP[$154]; //@line 2292 "bz2module.c"
        var $156=((($155))|0)!=0; //@line 2292 "bz2module.c"
        if ($156) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 2292 "bz2module.c"
      case 27: // $bb26
        var $157=HEAP[$bzs]; //@line 2293 "bz2module.c"
        var $158=(($157+24)&4294967295); //@line 2293 "bz2module.c"
        var $159=HEAP[$158]; //@line 2293 "bz2module.c"
        var $160=__PyString_Resize($ret, $159); //@line 2293 "bz2module.c"
        __label__ = 28; break; //@line 2293 "bz2module.c"
      case 28: // $bb27
        var $161=HEAP[$bzs]; //@line 2294 "bz2module.c"
        var $162=_BZ2_bzDecompressEnd($161); //@line 2294 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2295 "bz2module.c"
        var $163=HEAP[$ret]; //@line 2297 "bz2module.c"
        HEAP[$0]=$163; //@line 2297 "bz2module.c"
        __label__ = 29; break; //@line 2297 "bz2module.c"
      case 29: // $bb28
        var $164=HEAP[$0]; //@line 2228 "bz2module.c"
        HEAP[$retval]=$164; //@line 2228 "bz2module.c"
        __label__ = 30; break; //@line 2228 "bz2module.c"
      case 30: // $return
        var $retval29=HEAP[$retval]; //@line 2228 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 2228 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initbz2() {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $_alloca_point_=0;
        var $0=_PyType_Ready(_BZ2File_Type); //@line 2323 "bz2module.c"
        var $1=((($0))|0) < 0; //@line 2323 "bz2module.c"
        if ($1) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 2323 "bz2module.c"
      case 1: // $bb
        var $2=_PyType_Ready(_BZ2Comp_Type); //@line 2325 "bz2module.c"
        var $3=((($2))|0) < 0; //@line 2325 "bz2module.c"
        if ($3) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 2325 "bz2module.c"
      case 2: // $bb1
        var $4=_PyType_Ready(_BZ2Decomp_Type); //@line 2327 "bz2module.c"
        var $5=((($4))|0) < 0; //@line 2327 "bz2module.c"
        if ($5) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2327 "bz2module.c"
      case 3: // $bb2
        var $6=_Py_InitModule4(((__str81)&4294967295), ((_bz2_methods)&4294967295), ((_bz2__doc__)&4294967295), 0, 1013); //@line 2330 "bz2module.c"
        HEAP[$m]=$6; //@line 2330 "bz2module.c"
        var $7=HEAP[$m]; //@line 2331 "bz2module.c"
        var $8=($7)==0; //@line 2331 "bz2module.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2331 "bz2module.c"
      case 4: // $bb3
        var $9=_PyString_FromString(((___author__)&4294967295)); //@line 2334 "bz2module.c"
        var $10=HEAP[$m]; //@line 2334 "bz2module.c"
        var $11=_PyModule_AddObject($10, ((__str82)&4294967295), $9); //@line 2334 "bz2module.c"
        var $12=((_BZ2File_Type)&4294967295); //@line 2336 "bz2module.c"
        var $13=HEAP[$12]; //@line 2336 "bz2module.c"
        var $14=((($13) + 1)&4294967295); //@line 2336 "bz2module.c"
        var $15=((_BZ2File_Type)&4294967295); //@line 2336 "bz2module.c"
        HEAP[$15]=$14; //@line 2336 "bz2module.c"
        var $16=HEAP[$m]; //@line 2337 "bz2module.c"
        var $17=_PyModule_AddObject($16, ((__str83)&4294967295), _BZ2File_Type); //@line 2337 "bz2module.c"
        var $18=((_BZ2Comp_Type)&4294967295); //@line 2339 "bz2module.c"
        var $19=HEAP[$18]; //@line 2339 "bz2module.c"
        var $20=((($19) + 1)&4294967295); //@line 2339 "bz2module.c"
        var $21=((_BZ2Comp_Type)&4294967295); //@line 2339 "bz2module.c"
        HEAP[$21]=$20; //@line 2339 "bz2module.c"
        var $22=HEAP[$m]; //@line 2340 "bz2module.c"
        var $23=_PyModule_AddObject($22, ((__str84)&4294967295), _BZ2Comp_Type); //@line 2340 "bz2module.c"
        var $24=((_BZ2Decomp_Type)&4294967295); //@line 2342 "bz2module.c"
        var $25=HEAP[$24]; //@line 2342 "bz2module.c"
        var $26=((($25) + 1)&4294967295); //@line 2342 "bz2module.c"
        var $27=((_BZ2Decomp_Type)&4294967295); //@line 2342 "bz2module.c"
        HEAP[$27]=$26; //@line 2342 "bz2module.c"
        var $28=HEAP[$m]; //@line 2343 "bz2module.c"
        var $29=_PyModule_AddObject($28, ((__str85)&4294967295), _BZ2Decomp_Type); //@line 2343 "bz2module.c"
        __label__ = 5; break; //@line 2343 "bz2module.c"
      case 5: // $bb4
        __label__ = 6; break; //@line 2324 "bz2module.c"
      case 6: // $return
        STACKTOP = __stackBase__;
        return; //@line 2324 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initbz2"] = _initbz2;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_BZ2File_read,0,_BZ2File_readline,0,_BZ2File_readlines,0,_BZ2File_getiter,0,_BZ2File_write,0,_BZ2File_writelines,0,_BZ2File_seek,0,_BZ2File_tell,0,_BZ2File_close,0,_BZ2File_enter,0,_BZ2File_exit,0,_BZ2File_get_closed,0,_BZ2File_get_newlines,0,_BZ2File_get_mode,0,_BZ2File_get_name,0,_BZ2File_dealloc,0,_PyObject_GenericGetAttr,0,_PyObject_GenericSetAttr,0,_BZ2File_iternext,0,_BZ2File_init,0,_PyType_GenericAlloc,0,_PyType_GenericNew,0,_PyObject_Free,0,_BZ2Comp_compress,0,_BZ2Comp_flush,0,_BZ2Comp_dealloc,0,_BZ2Comp_init,0,_BZ2Decomp_decompress,0,_BZ2Decomp_dealloc,0,_BZ2Decomp_init,0,_bz2_compress,0,_bz2_decompress,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
___author__=allocate([84,104,101,32,98,122,50,32,112,121,116,104,111,110,32,109,111,100,117,108,101,32,119,97,115,32,119,114,105,116,116,101,110,32,98,121,58,10,10,32,32,32,32,71,117,115,116,97,118,111,32,78,105,101,109,101,121,101,114,32,60,110,105,101,109,101,121,101,114,64,99,111,110,101,99,116,105,118,97,46,99,111,109,62,10,0] /* The bz2 python modul */, "i8", ALLOC_NORMAL);
__str=allocate([77,105,120,105,110,103,32,105,116,101,114,97,116,105,111,110,32,97,110,100,32,114,101,97,100,32,109,101,116,104,111,100,115,32,119,111,117,108,100,32,108,111,115,101,32,100,97,116,97,0] /* Mixing iteration and */, "i8", ALLOC_NORMAL);
__str1=allocate([116,104,101,32,98,122,50,32,108,105,98,114,97,114,121,32,119,97,115,32,110,111,116,32,99,111,109,112,105,108,101,100,32,99,111,114,114,101,99,116,108,121,0] /* the bz2 library was  */, "i8", ALLOC_NORMAL);
__str2=allocate([116,104,101,32,98,122,50,32,108,105,98,114,97,114,121,32,104,97,115,32,114,101,99,101,105,118,101,100,32,119,114,111,110,103,32,112,97,114,97,109,101,116,101,114,115,0] /* the bz2 library has  */, "i8", ALLOC_NORMAL);
__str3=allocate([105,110,118,97,108,105,100,32,100,97,116,97,32,115,116,114,101,97,109,0] /* invalid data stream\ */, "i8", ALLOC_NORMAL);
__str4=allocate([117,110,107,110,111,119,110,32,73,79,32,101,114,114,111,114,0] /* unknown IO error\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([99,111,109,112,114,101,115,115,101,100,32,102,105,108,101,32,101,110,100,101,100,32,98,101,102,111,114,101,32,116,104,101,32,108,111,103,105,99,97,108,32,101,110,100,45,111,102,45,115,116,114,101,97,109,32,119,97,115,32,100,101,116,101,99,116,101,100,0] /* compressed file ende */, "i8", ALLOC_NORMAL);
__str6=allocate([119,114,111,110,103,32,115,101,113,117,101,110,99,101,32,111,102,32,98,122,50,32,108,105,98,114,97,114,121,32,99,111,109,109,97,110,100,115,32,117,115,101,100,0] /* wrong sequence of bz */, "i8", ALLOC_NORMAL);
__str7=allocate([108,105,110,101,32,105,115,32,108,111,110,103,101,114,32,116,104,97,110,32,97,32,80,121,116,104,111,110,32,115,116,114,105,110,103,32,99,97,110,32,104,111,108,100,0] /* line is longer than  */, "i8", ALLOC_NORMAL);
__str8=allocate([98,117,102,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* buf != ((void _)0)\0 */, "i8", ALLOC_NORMAL);
__str9=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,98,122,50,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/b */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8675=allocate([85,116,105,108,95,85,110,105,118,78,101,119,108,105,110,101,82,101,97,100,0] /* Util_UnivNewlineRead */, "i8", ALLOC_NORMAL);
__str10=allocate([115,116,114,101,97,109,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* stream != ((void _)0 */, "i8", ALLOC_NORMAL);
__str11=allocate([110,114,101,97,100,32,60,61,32,110,0] /* nread <= n\00 */, "i8", ALLOC_NORMAL);
_BZ2File_read__doc__=allocate([114,101,97,100,40,91,115,105,122,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,97,100,32,97,116,32,109,111,115,116,32,115,105,122,101,32,117,110,99,111,109,112,114,101,115,115,101,100,32,98,121,116,101,115,44,32,114,101,116,117,114,110,101,100,32,97,115,32,97,32,115,116,114,105,110,103,46,32,73,102,32,116,104,101,32,115,105,122,101,10,97,114,103,117,109,101,110,116,32,105,115,32,110,101,103,97,116,105,118,101,32,111,114,32,111,109,105,116,116,101,100,44,32,114,101,97,100,32,117,110,116,105,108,32,69,79,70,32,105,115,32,114,101,97,99,104,101,100,46,10,0] /* read([size]) -> stri */, "i8", ALLOC_NORMAL);
__str12=allocate([124,108,58,114,101,97,100,0] /* |l:read\00 */, "i8", ALLOC_NORMAL);
__str13=allocate(1, "i8", ALLOC_NORMAL);
__str14=allocate([73,47,79,32,111,112,101,114,97,116,105,111,110,32,111,110,32,99,108,111,115,101,100,32,102,105,108,101,0] /* I/O operation on clo */, "i8", ALLOC_NORMAL);
__str15=allocate([102,105,108,101,32,105,115,32,110,111,116,32,114,101,97,100,121,32,102,111,114,32,114,101,97,100,105,110,103,0] /* file is not ready fo */, "i8", ALLOC_NORMAL);
__str16=allocate([114,101,113,117,101,115,116,101,100,32,110,117,109,98,101,114,32,111,102,32,98,121,116,101,115,32,105,115,32,109,111,114,101,32,116,104,97,110,32,97,32,80,121,116,104,111,110,32,115,116,114,105,110,103,32,99,97,110,32,104,111,108,100,0] /* requested number of  */, "i8", ALLOC_NORMAL);
_BZ2File_readline__doc__=allocate([114,101,97,100,108,105,110,101,40,91,115,105,122,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,110,101,120,116,32,108,105,110,101,32,102,114,111,109,32,116,104,101,32,102,105,108,101,44,32,97,115,32,97,32,115,116,114,105,110,103,44,32,114,101,116,97,105,110,105,110,103,32,110,101,119,108,105,110,101,46,10,65,32,110,111,110,45,110,101,103,97,116,105,118,101,32,115,105,122,101,32,97,114,103,117,109,101,110,116,32,119,105,108,108,32,108,105,109,105,116,32,116,104,101,32,109,97,120,105,109,117,109,32,110,117,109,98,101,114,32,111,102,32,98,121,116,101,115,32,116,111,10,114,101,116,117,114,110,32,40,97,110,32,105,110,99,111,109,112,108,101,116,101,32,108,105,110,101,32,109,97,121,32,98,101,32,114,101,116,117,114,110,101,100,32,116,104,101,110,41,46,32,82,101,116,117,114,110,32,97,110,32,101,109,112,116,121,10,115,116,114,105,110,103,32,97,116,32,69,79,70,46,10,0] /* readline([size]) ->  */, "i8", ALLOC_NORMAL);
__str17=allocate([124,105,58,114,101,97,100,108,105,110,101,0] /* |i:readline\00 */, "i8", ALLOC_NORMAL);
_BZ2File_readlines__doc__=allocate([114,101,97,100,108,105,110,101,115,40,91,115,105,122,101,93,41,32,45,62,32,108,105,115,116,10,10,67,97,108,108,32,114,101,97,100,108,105,110,101,40,41,32,114,101,112,101,97,116,101,100,108,121,32,97,110,100,32,114,101,116,117,114,110,32,97,32,108,105,115,116,32,111,102,32,108,105,110,101,115,32,114,101,97,100,46,10,84,104,101,32,111,112,116,105,111,110,97,108,32,115,105,122,101,32,97,114,103,117,109,101,110,116,44,32,105,102,32,103,105,118,101,110,44,32,105,115,32,97,110,32,97,112,112,114,111,120,105,109,97,116,101,32,98,111,117,110,100,32,111,110,32,116,104,101,10,116,111,116,97,108,32,110,117,109,98,101,114,32,111,102,32,98,121,116,101,115,32,105,110,32,116,104,101,32,108,105,110,101,115,32,114,101,116,117,114,110,101,100,46,10,0] /* readlines([size]) -> */, "i8", ALLOC_NORMAL);
__str18=allocate([124,108,58,114,101,97,100,108,105,110,101,115,0] /* |l:readlines\00 */, "i8", ALLOC_NORMAL);
_BZ2File_xreadlines__doc__=allocate([120,114,101,97,100,108,105,110,101,115,40,41,32,45,62,32,115,101,108,102,10,10,70,111,114,32,98,97,99,107,119,97,114,100,32,99,111,109,112,97,116,105,98,105,108,105,116,121,46,32,66,90,50,70,105,108,101,32,111,98,106,101,99,116,115,32,110,111,119,32,105,110,99,108,117,100,101,32,116,104,101,32,112,101,114,102,111,114,109,97,110,99,101,10,111,112,116,105,109,105,122,97,116,105,111,110,115,32,112,114,101,118,105,111,117,115,108,121,32,105,109,112,108,101,109,101,110,116,101,100,32,105,110,32,116,104,101,32,120,114,101,97,100,108,105,110,101,115,32,109,111,100,117,108,101,46,10,0] /* xreadlines() -> self */, "i8", ALLOC_NORMAL);
_BZ2File_write__doc__=allocate([119,114,105,116,101,40,100,97,116,97,41,32,45,62,32,78,111,110,101,10,10,87,114,105,116,101,32,116,104,101,32,39,100,97,116,97,39,32,115,116,114,105,110,103,32,116,111,32,102,105,108,101,46,32,78,111,116,101,32,116,104,97,116,32,100,117,101,32,116,111,32,98,117,102,102,101,114,105,110,103,44,32,99,108,111,115,101,40,41,32,109,97,121,10,98,101,32,110,101,101,100,101,100,32,98,101,102,111,114,101,32,116,104,101,32,102,105,108,101,32,111,110,32,100,105,115,107,32,114,101,102,108,101,99,116,115,32,116,104,101,32,100,97,116,97,32,119,114,105,116,116,101,110,46,10,0] /* write(data) -> None\ */, "i8", ALLOC_NORMAL);
__str19=allocate([115,42,58,119,114,105,116,101,0] /* s_:write\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([102,105,108,101,32,105,115,32,110,111,116,32,114,101,97,100,121,32,102,111,114,32,119,114,105,116,105,110,103,0] /* file is not ready fo */, "i8", ALLOC_NORMAL);
_BZ2File_writelines__doc__=allocate([119,114,105,116,101,108,105,110,101,115,40,115,101,113,117,101,110,99,101,95,111,102,95,115,116,114,105,110,103,115,41,32,45,62,32,78,111,110,101,10,10,87,114,105,116,101,32,116,104,101,32,115,101,113,117,101,110,99,101,32,111,102,32,115,116,114,105,110,103,115,32,116,111,32,116,104,101,32,102,105,108,101,46,32,78,111,116,101,32,116,104,97,116,32,110,101,119,108,105,110,101,115,32,97,114,101,32,110,111,116,10,97,100,100,101,100,46,32,84,104,101,32,115,101,113,117,101,110,99,101,32,99,97,110,32,98,101,32,97,110,121,32,105,116,101,114,97,98,108,101,32,111,98,106,101,99,116,32,112,114,111,100,117,99,105,110,103,32,115,116,114,105,110,103,115,46,32,84,104,105,115,32,105,115,10,101,113,117,105,118,97,108,101,110,116,32,116,111,32,99,97,108,108,105,110,103,32,119,114,105,116,101,40,41,32,102,111,114,32,101,97,99,104,32,115,116,114,105,110,103,46,10,0] /* writelines(sequence_ */, "i8", ALLOC_NORMAL);
__str21=allocate([119,114,105,116,101,108,105,110,101,115,40,41,32,114,101,113,117,105,114,101,115,32,97,110,32,105,116,101,114,97,98,108,101,32,97,114,103,117,109,101,110,116,0] /* writelines() require */, "i8", ALLOC_NORMAL);
__str22=allocate([119,114,105,116,101,108,105,110,101,115,40,41,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,115,101,113,117,101,110,99,101,32,111,102,32,115,116,114,105,110,103,115,0] /* writelines() argumen */, "i8", ALLOC_NORMAL);
_BZ2File_seek__doc__=allocate([115,101,101,107,40,111,102,102,115,101,116,32,91,44,32,119,104,101,110,99,101,93,41,32,45,62,32,78,111,110,101,10,10,77,111,118,101,32,116,111,32,110,101,119,32,102,105,108,101,32,112,111,115,105,116,105,111,110,46,32,65,114,103,117,109,101,110,116,32,111,102,102,115,101,116,32,105,115,32,97,32,98,121,116,101,32,99,111,117,110,116,46,32,79,112,116,105,111,110,97,108,10,97,114,103,117,109,101,110,116,32,119,104,101,110,99,101,32,100,101,102,97,117,108,116,115,32,116,111,32,48,32,40,111,102,102,115,101,116,32,102,114,111,109,32,115,116,97,114,116,32,111,102,32,102,105,108,101,44,32,111,102,102,115,101,116,10,115,104,111,117,108,100,32,98,101,32,62,61,32,48,41,59,32,111,116,104,101,114,32,118,97,108,117,101,115,32,97,114,101,32,49,32,40,109,111,118,101,32,114,101,108,97,116,105,118,101,32,116,111,32,99,117,114,114,101,110,116,32,112,111,115,105,116,105,111,110,44,10,112,111,115,105,116,105,118,101,32,111,114,32,110,101,103,97,116,105,118,101,41,44,32,97,110,100,32,50,32,40,109,111,118,101,32,114,101,108,97,116,105,118,101,32,116,111,32,101,110,100,32,111,102,32,102,105,108,101,44,32,117,115,117,97,108,108,121,10,110,101,103,97,116,105,118,101,44,32,97,108,116,104,111,117,103,104,32,109,97,110,121,32,112,108,97,116,102,111,114,109,115,32,97,108,108,111,119,32,115,101,101,107,105,110,103,32,98,101,121,111,110,100,32,116,104,101,32,101,110,100,32,111,102,32,97,32,102,105,108,101,41,46,10,10,78,111,116,101,32,116,104,97,116,32,115,101,101,107,105,110,103,32,111,102,32,98,122,50,32,102,105,108,101,115,32,105,115,32,101,109,117,108,97,116,101,100,44,32,97,110,100,32,100,101,112,101,110,100,105,110,103,32,111,110,32,116,104,101,32,112,97,114,97,109,101,116,101,114,115,10,116,104,101,32,111,112,101,114,97,116,105,111,110,32,109,97,121,32,98,101,32,101,120,116,114,101,109,101,108,121,32,115,108,111,119,46,10,0] /* seek(offset [, whenc */, "i8", ALLOC_NORMAL);
__str23=allocate([79,124,105,58,115,101,101,107,0] /* O|i:seek\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([115,101,101,107,32,119,111,114,107,115,32,111,110,108,121,32,119,104,105,108,101,32,114,101,97,100,105,110,103,0] /* seek works only whil */, "i8", ALLOC_NORMAL);
__str25=allocate([115,101,108,102,45,62,109,111,100,101,32,33,61,32,50,0] /* self->mode != 2\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9317=allocate([66,90,50,70,105,108,101,95,115,101,101,107,0] /* BZ2File_seek\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([115,101,101,107,0] /* seek\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([40,105,41,0] /* (i)\00 */, "i8", ALLOC_NORMAL);
_BZ2File_tell__doc__=allocate([116,101,108,108,40,41,32,45,62,32,105,110,116,10,10,82,101,116,117,114,110,32,116,104,101,32,99,117,114,114,101,110,116,32,102,105,108,101,32,112,111,115,105,116,105,111,110,44,32,97,110,32,105,110,116,101,103,101,114,32,40,109,97,121,32,98,101,32,97,32,108,111,110,103,32,105,110,116,101,103,101,114,41,46,10,0] /* tell() -> int\0A\0AR */, "i8", ALLOC_NORMAL);
_BZ2File_close__doc__=allocate([99,108,111,115,101,40,41,32,45,62,32,78,111,110,101,32,111,114,32,40,112,101,114,104,97,112,115,41,32,97,110,32,105,110,116,101,103,101,114,10,10,67,108,111,115,101,32,116,104,101,32,102,105,108,101,46,32,83,101,116,115,32,100,97,116,97,32,97,116,116,114,105,98,117,116,101,32,46,99,108,111,115,101,100,32,116,111,32,116,114,117,101,46,32,65,32,99,108,111,115,101,100,32,102,105,108,101,10,99,97,110,110,111,116,32,98,101,32,117,115,101,100,32,102,111,114,32,102,117,114,116,104,101,114,32,73,47,79,32,111,112,101,114,97,116,105,111,110,115,46,32,99,108,111,115,101,40,41,32,109,97,121,32,98,101,32,99,97,108,108,101,100,32,109,111,114,101,10,116,104,97,110,32,111,110,99,101,32,119,105,116,104,111,117,116,32,101,114,114,111,114,46,10,0] /* close() -> None or ( */, "i8", ALLOC_NORMAL);
__str28=allocate([99,108,111,115,101,0] /* close\00 */, "i8", ALLOC_NORMAL);
_BZ2File_enter_doc=allocate([95,95,101,110,116,101,114,95,95,40,41,32,45,62,32,115,101,108,102,46,0] /* __enter__() -> self. */, "i8", ALLOC_NORMAL);
_BZ2File_exit_doc=allocate([95,95,101,120,105,116,95,95,40,42,101,120,99,105,110,102,111,41,32,45,62,32,78,111,110,101,46,32,32,67,108,111,115,101,115,32,116,104,101,32,102,105,108,101,46,0] /* __exit__(_excinfo) - */, "i8", ALLOC_NORMAL);
__str29=allocate([114,101,97,100,0] /* read\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([114,101,97,100,108,105,110,101,0] /* readline\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([114,101,97,100,108,105,110,101,115,0] /* readlines\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([120,114,101,97,100,108,105,110,101,115,0] /* xreadlines\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([119,114,105,116,101,0] /* write\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([119,114,105,116,101,108,105,110,101,115,0] /* writelines\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([116,101,108,108,0] /* tell\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([95,95,101,110,116,101,114,95,95,0] /* __enter__\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([95,95,101,120,105,116,95,95,0] /* __exit__\00 */, "i8", ALLOC_NORMAL);
_BZ2File_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str38=allocate([13,0] /* \0D\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([10,0] /* \0A\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([40,115,115,41,0] /* (ss)\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([13,10,0] /* \0D\0A\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([40,115,115,115,41,0] /* (sss)\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([85,110,107,110,111,119,110,32,110,101,119,108,105,110,101,115,32,118,97,108,117,101,32,48,120,37,120,10,0] /* Unknown newlines val */, "i8", ALLOC_NORMAL);
__str44=allocate([109,111,100,101,0] /* mode\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([110,97,109,101,0] /* name\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([99,108,111,115,101,100,0] /* closed\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([84,114,117,101,32,105,102,32,116,104,101,32,102,105,108,101,32,105,115,32,99,108,111,115,101,100,0] /* True if the file is  */, "i8", ALLOC_NORMAL);
__str48=allocate([110,101,119,108,105,110,101,115,0] /* newlines\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([101,110,100,45,111,102,45,108,105,110,101,32,99,111,110,118,101,110,116,105,111,110,32,117,115,101,100,32,105,110,32,116,104,105,115,32,102,105,108,101,0] /* end-of-line conventi */, "i8", ALLOC_NORMAL);
__str50=allocate([102,105,108,101,32,109,111,100,101,32,40,39,114,39,44,32,39,119,39,44,32,111,114,32,39,85,39,41,0] /* file mode ('r', 'w', */, "i8", ALLOC_NORMAL);
__str51=allocate([102,105,108,101,32,110,97,109,101,0] /* file name\00 */, "i8", ALLOC_NORMAL);
_BZ2File_getset=allocate(100, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str52=allocate([115,111,102,116,115,112,97,99,101,0] /* softspace\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([102,108,97,103,32,105,110,100,105,99,97,116,105,110,103,32,116,104,97,116,32,97,32,115,112,97,99,101,32,110,101,101,100,115,32,116,111,32,98,101,32,112,114,105,110,116,101,100,59,32,117,115,101,100,32,98,121,32,112,114,105,110,116,0] /* flag indicating that */, "i8", ALLOC_NORMAL);
_BZ2File_members=allocate([0, 0, 0, 0, 1, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str54=allocate([114,0] /* r\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([79,124,115,105,105,58,66,90,50,70,105,108,101,0] /* O|sii:BZ2File\00 */, "i8", ALLOC_NORMAL);
_kwlist_9585=allocate(20, "i8*", ALLOC_NORMAL);
__str56=allocate([102,105,108,101,110,97,109,101,0] /* filename\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([98,117,102,102,101,114,105,110,103,0] /* buffering\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([99,111,109,112,114,101,115,115,108,101,118,101,108,0] /* compresslevel\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([99,111,109,112,114,101,115,115,108,101,118,101,108,32,109,117,115,116,32,98,101,32,98,101,116,119,101,101,110,32,49,32,97,110,100,32,57,0] /* compresslevel must b */, "i8", ALLOC_NORMAL);
__str60=allocate([105,110,118,97,108,105,100,32,109,111,100,101,32,99,104,97,114,32,37,99,0] /* invalid mode char %c */, "i8", ALLOC_NORMAL);
__str61=allocate([114,98,0] /* rb\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([119,98,0] /* wb\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([40,79,115,105,41,0] /* (Osi)\00 */, "i8", ALLOC_NORMAL);
_BZ2File__doc__=allocate([66,90,50,70,105,108,101,40,110,97,109,101,32,91,44,32,109,111,100,101,61,39,114,39,44,32,98,117,102,102,101,114,105,110,103,61,48,44,32,99,111,109,112,114,101,115,115,108,101,118,101,108,61,57,93,41,32,45,62,32,102,105,108,101,32,111,98,106,101,99,116,10,10,79,112,101,110,32,97,32,98,122,50,32,102,105,108,101,46,32,84,104,101,32,109,111,100,101,32,99,97,110,32,98,101,32,39,114,39,32,111,114,32,39,119,39,44,32,102,111,114,32,114,101,97,100,105,110,103,32,40,100,101,102,97,117,108,116,41,32,111,114,10,119,114,105,116,105,110,103,46,32,87,104,101,110,32,111,112,101,110,101,100,32,102,111,114,32,119,114,105,116,105,110,103,44,32,116,104,101,32,102,105,108,101,32,119,105,108,108,32,98,101,32,99,114,101,97,116,101,100,32,105,102,32,105,116,32,100,111,101,115,110,39,116,10,101,120,105,115,116,44,32,97,110,100,32,116,114,117,110,99,97,116,101,100,32,111,116,104,101,114,119,105,115,101,46,32,73,102,32,116,104,101,32,98,117,102,102,101,114,105,110,103,32,97,114,103,117,109,101,110,116,32,105,115,32,103,105,118,101,110,44,32,48,32,109,101,97,110,115,10,117,110,98,117,102,102,101,114,101,100,44,32,97,110,100,32,108,97,114,103,101,114,32,110,117,109,98,101,114,115,32,115,112,101,99,105,102,121,32,116,104,101,32,98,117,102,102,101,114,32,115,105,122,101,46,32,73,102,32,99,111,109,112,114,101,115,115,108,101,118,101,108,10,105,115,32,103,105,118,101,110,44,32,109,117,115,116,32,98,101,32,97,32,110,117,109,98,101,114,32,98,101,116,119,101,101,110,32,49,32,97,110,100,32,57,46,10,10,65,100,100,32,97,32,39,85,39,32,116,111,32,109,111,100,101,32,116,111,32,111,112,101,110,32,116,104,101,32,102,105,108,101,32,102,111,114,32,105,110,112,117,116,32,119,105,116,104,32,117,110,105,118,101,114,115,97,108,32,110,101,119,108,105,110,101,10,115,117,112,112,111,114,116,46,32,65,110,121,32,108,105,110,101,32,101,110,100,105,110,103,32,105,110,32,116,104,101,32,105,110,112,117,116,32,102,105,108,101,32,119,105,108,108,32,98,101,32,115,101,101,110,32,97,115,32,97,32,39,92,110,39,32,105,110,10,80,121,116,104,111,110,46,32,65,108,115,111,44,32,97,32,102,105,108,101,32,115,111,32,111,112,101,110,101,100,32,103,97,105,110,115,32,116,104,101,32,97,116,116,114,105,98,117,116,101,32,39,110,101,119,108,105,110,101,115,39,59,32,116,104,101,32,118,97,108,117,101,10,102,111,114,32,116,104,105,115,32,97,116,116,114,105,98,117,116,101,32,105,115,32,111,110,101,32,111,102,32,78,111,110,101,32,40,110,111,32,110,101,119,108,105,110,101,32,114,101,97,100,32,121,101,116,41,44,32,39,92,114,39,44,32,39,92,110,39,44,10,39,92,114,92,110,39,32,111,114,32,97,32,116,117,112,108,101,32,99,111,110,116,97,105,110,105,110,103,32,97,108,108,32,116,104,101,32,110,101,119,108,105,110,101,32,116,121,112,101,115,32,115,101,101,110,46,32,85,110,105,118,101,114,115,97,108,10,110,101,119,108,105,110,101,115,32,97,114,101,32,97,118,97,105,108,97,98,108,101,32,111,110,108,121,32,119,104,101,110,32,114,101,97,100,105,110,103,46,10,0] /* BZ2File(name [, mode */, "i8", ALLOC_NORMAL);
__str64=allocate([98,122,50,46,66,90,50,70,105,108,101,0] /* bz2.BZ2File\00 */, "i8", ALLOC_NORMAL);
_BZ2File_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_BZ2Comp_compress__doc__=allocate([99,111,109,112,114,101,115,115,40,100,97,116,97,41,32,45,62,32,115,116,114,105,110,103,10,10,80,114,111,118,105,100,101,32,109,111,114,101,32,100,97,116,97,32,116,111,32,116,104,101,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,32,73,116,32,119,105,108,108,32,114,101,116,117,114,110,32,99,104,117,110,107,115,32,111,102,10,99,111,109,112,114,101,115,115,101,100,32,100,97,116,97,32,119,104,101,110,101,118,101,114,32,112,111,115,115,105,98,108,101,46,32,87,104,101,110,32,121,111,117,39,118,101,32,102,105,110,105,115,104,101,100,32,112,114,111,118,105,100,105,110,103,32,100,97,116,97,10,116,111,32,99,111,109,112,114,101,115,115,44,32,99,97,108,108,32,116,104,101,32,102,108,117,115,104,40,41,32,109,101,116,104,111,100,32,116,111,32,102,105,110,105,115,104,32,116,104,101,32,99,111,109,112,114,101,115,115,105,111,110,32,112,114,111,99,101,115,115,44,10,97,110,100,32,114,101,116,117,114,110,32,119,104,97,116,32,105,115,32,108,101,102,116,32,105,110,32,116,104,101,32,105,110,116,101,114,110,97,108,32,98,117,102,102,101,114,115,46,10,0] /* compress(data) -> st */, "i8", ALLOC_NORMAL);
__str65=allocate([115,42,58,99,111,109,112,114,101,115,115,0] /* s_:compress\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([116,104,105,115,32,111,98,106,101,99,116,32,119,97,115,32,97,108,114,101,97,100,121,32,102,108,117,115,104,101,100,0] /* this object was alre */, "i8", ALLOC_NORMAL);
_BZ2Comp_flush__doc__=allocate([102,108,117,115,104,40,41,32,45,62,32,115,116,114,105,110,103,10,10,70,105,110,105,115,104,32,116,104,101,32,99,111,109,112,114,101,115,115,105,111,110,32,112,114,111,99,101,115,115,32,97,110,100,32,114,101,116,117,114,110,32,119,104,97,116,32,105,115,32,108,101,102,116,32,105,110,32,105,110,116,101,114,110,97,108,32,98,117,102,102,101,114,115,46,10,89,111,117,32,109,117,115,116,32,110,111,116,32,117,115,101,32,116,104,101,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,32,97,102,116,101,114,32,99,97,108,108,105,110,103,32,116,104,105,115,32,109,101,116,104,111,100,46,10,0] /* flush() -> string\0A */, "i8", ALLOC_NORMAL);
__str67=allocate([111,98,106,101,99,116,32,119,97,115,32,97,108,114,101,97,100,121,32,102,108,117,115,104,101,100,0] /* object was already f */, "i8", ALLOC_NORMAL);
__str68=allocate([99,111,109,112,114,101,115,115,0] /* compress\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([102,108,117,115,104,0] /* flush\00 */, "i8", ALLOC_NORMAL);
_BZ2Comp_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str70=allocate([124,105,58,66,90,50,67,111,109,112,114,101,115,115,111,114,0] /* |i:BZ2Compressor\00 */, "i8", ALLOC_NORMAL);
_kwlist_9935=allocate(8, "i8*", ALLOC_NORMAL);
_BZ2Comp__doc__=allocate([66,90,50,67,111,109,112,114,101,115,115,111,114,40,91,99,111,109,112,114,101,115,115,108,101,118,101,108,61,57,93,41,32,45,62,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,10,10,67,114,101,97,116,101,32,97,32,110,101,119,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,32,84,104,105,115,32,111,98,106,101,99,116,32,109,97,121,32,98,101,32,117,115,101,100,32,116,111,32,99,111,109,112,114,101,115,115,10,100,97,116,97,32,115,101,113,117,101,110,116,105,97,108,108,121,46,32,73,102,32,121,111,117,32,119,97,110,116,32,116,111,32,99,111,109,112,114,101,115,115,32,100,97,116,97,32,105,110,32,111,110,101,32,115,104,111,116,44,32,117,115,101,32,116,104,101,10,99,111,109,112,114,101,115,115,40,41,32,102,117,110,99,116,105,111,110,32,105,110,115,116,101,97,100,46,32,84,104,101,32,99,111,109,112,114,101,115,115,108,101,118,101,108,32,112,97,114,97,109,101,116,101,114,44,32,105,102,32,103,105,118,101,110,44,10,109,117,115,116,32,98,101,32,97,32,110,117,109,98,101,114,32,98,101,116,119,101,101,110,32,49,32,97,110,100,32,57,46,10,0] /* BZ2Compressor([compr */, "i8", ALLOC_NORMAL);
__str71=allocate([98,122,50,46,66,90,50,67,111,109,112,114,101,115,115,111,114,0] /* bz2.BZ2Compressor\00 */, "i8", ALLOC_NORMAL);
_BZ2Comp_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str72=allocate([117,110,117,115,101,100,95,100,97,116,97,0] /* unused_data\00 */, "i8", ALLOC_NORMAL);
_BZ2Decomp_members=allocate([0, 0, 0, 0, 6, 0, 0, 0, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_BZ2Decomp_decompress__doc__=allocate([100,101,99,111,109,112,114,101,115,115,40,100,97,116,97,41,32,45,62,32,115,116,114,105,110,103,10,10,80,114,111,118,105,100,101,32,109,111,114,101,32,100,97,116,97,32,116,111,32,116,104,101,32,100,101,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,32,73,116,32,119,105,108,108,32,114,101,116,117,114,110,32,99,104,117,110,107,115,10,111,102,32,100,101,99,111,109,112,114,101,115,115,101,100,32,100,97,116,97,32,119,104,101,110,101,118,101,114,32,112,111,115,115,105,98,108,101,46,32,73,102,32,121,111,117,32,116,114,121,32,116,111,32,100,101,99,111,109,112,114,101,115,115,32,100,97,116,97,10,97,102,116,101,114,32,116,104,101,32,101,110,100,32,111,102,32,115,116,114,101,97,109,32,105,115,32,102,111,117,110,100,44,32,69,79,70,69,114,114,111,114,32,119,105,108,108,32,98,101,32,114,97,105,115,101,100,46,32,73,102,32,97,110,121,32,100,97,116,97,10,119,97,115,32,102,111,117,110,100,32,97,102,116,101,114,32,116,104,101,32,101,110,100,32,111,102,32,115,116,114,101,97,109,44,32,105,116,39,108,108,32,98,101,32,105,103,110,111,114,101,100,32,97,110,100,32,115,97,118,101,100,32,105,110,10,117,110,117,115,101,100,95,100,97,116,97,32,97,116,116,114,105,98,117,116,101,46,10,0] /* decompress(data) ->  */, "i8", ALLOC_NORMAL);
__str73=allocate([115,42,58,100,101,99,111,109,112,114,101,115,115,0] /* s_:decompress\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([101,110,100,32,111,102,32,115,116,114,101,97,109,32,119,97,115,32,97,108,114,101,97,100,121,32,102,111,117,110,100,0] /* end of stream was al */, "i8", ALLOC_NORMAL);
__str75=allocate([100,101,99,111,109,112,114,101,115,115,0] /* decompress\00 */, "i8", ALLOC_NORMAL);
_BZ2Decomp_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str76=allocate([58,66,90,50,68,101,99,111,109,112,114,101,115,115,111,114,0] /* :BZ2Decompressor\00 */, "i8", ALLOC_NORMAL);
_BZ2Decomp__doc__=allocate([66,90,50,68,101,99,111,109,112,114,101,115,115,111,114,40,41,32,45,62,32,100,101,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,10,10,67,114,101,97,116,101,32,97,32,110,101,119,32,100,101,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,32,84,104,105,115,32,111,98,106,101,99,116,32,109,97,121,32,98,101,32,117,115,101,100,32,116,111,32,100,101,99,111,109,112,114,101,115,115,10,100,97,116,97,32,115,101,113,117,101,110,116,105,97,108,108,121,46,32,73,102,32,121,111,117,32,119,97,110,116,32,116,111,32,100,101,99,111,109,112,114,101,115,115,32,100,97,116,97,32,105,110,32,111,110,101,32,115,104,111,116,44,32,117,115,101,32,116,104,101,10,100,101,99,111,109,112,114,101,115,115,40,41,32,102,117,110,99,116,105,111,110,32,105,110,115,116,101,97,100,46,10,0] /* BZ2Decompressor() -> */, "i8", ALLOC_NORMAL);
__str77=allocate([98,122,50,46,66,90,50,68,101,99,111,109,112,114,101,115,115,111,114,0] /* bz2.BZ2Decompressor\ */, "i8", ALLOC_NORMAL);
_BZ2Decomp_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_bz2_compress__doc__=allocate([99,111,109,112,114,101,115,115,40,100,97,116,97,32,91,44,32,99,111,109,112,114,101,115,115,108,101,118,101,108,61,57,93,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,109,112,114,101,115,115,32,100,97,116,97,32,105,110,32,111,110,101,32,115,104,111,116,46,32,73,102,32,121,111,117,32,119,97,110,116,32,116,111,32,99,111,109,112,114,101,115,115,32,100,97,116,97,32,115,101,113,117,101,110,116,105,97,108,108,121,44,10,117,115,101,32,97,110,32,105,110,115,116,97,110,99,101,32,111,102,32,66,90,50,67,111,109,112,114,101,115,115,111,114,32,105,110,115,116,101,97,100,46,32,84,104,101,32,99,111,109,112,114,101,115,115,108,101,118,101,108,32,112,97,114,97,109,101,116,101,114,44,32,105,102,10,103,105,118,101,110,44,32,109,117,115,116,32,98,101,32,97,32,110,117,109,98,101,114,32,98,101,116,119,101,101,110,32,49,32,97,110,100,32,57,46,10,0] /* compress(data [, com */, "i8", ALLOC_NORMAL);
__str78=allocate([115,42,124,105,0] /* s_|i\00 */, "i8", ALLOC_NORMAL);
_kwlist_10147=allocate(12, "i8*", ALLOC_NORMAL);
__str79=allocate([100,97,116,97,0] /* data\00 */, "i8", ALLOC_NORMAL);
_bz2_decompress__doc__=allocate([100,101,99,111,109,112,114,101,115,115,40,100,97,116,97,41,32,45,62,32,100,101,99,111,109,112,114,101,115,115,101,100,32,100,97,116,97,10,10,68,101,99,111,109,112,114,101,115,115,32,100,97,116,97,32,105,110,32,111,110,101,32,115,104,111,116,46,32,73,102,32,121,111,117,32,119,97,110,116,32,116,111,32,100,101,99,111,109,112,114,101,115,115,32,100,97,116,97,32,115,101,113,117,101,110,116,105,97,108,108,121,44,10,117,115,101,32,97,110,32,105,110,115,116,97,110,99,101,32,111,102,32,66,90,50,68,101,99,111,109,112,114,101,115,115,111,114,32,105,110,115,116,101,97,100,46,10,0] /* decompress(data) ->  */, "i8", ALLOC_NORMAL);
__str80=allocate([99,111,117,108,100,110,39,116,32,102,105,110,100,32,101,110,100,32,111,102,32,115,116,114,101,97,109,0] /* couldn't find end of */, "i8", ALLOC_NORMAL);
_bz2_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_bz2__doc__=allocate([84,104,101,32,112,121,116,104,111,110,32,98,122,50,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,97,32,99,111,109,112,114,101,104,101,110,115,105,118,101,32,105,110,116,101,114,102,97,99,101,32,102,111,114,10,116,104,101,32,98,122,50,32,99,111,109,112,114,101,115,115,105,111,110,32,108,105,98,114,97,114,121,46,32,73,116,32,105,109,112,108,101,109,101,110,116,115,32,97,32,99,111,109,112,108,101,116,101,32,102,105,108,101,10,105,110,116,101,114,102,97,99,101,44,32,111,110,101,32,115,104,111,116,32,40,100,101,41,99,111,109,112,114,101,115,115,105,111,110,32,102,117,110,99,116,105,111,110,115,44,32,97,110,100,32,116,121,112,101,115,32,102,111,114,10,115,101,113,117,101,110,116,105,97,108,32,40,100,101,41,99,111,109,112,114,101,115,115,105,111,110,46,10,0] /* The python bz2 modul */, "i8", ALLOC_NORMAL);
__str81=allocate([98,122,50,0] /* bz2\00 */, "i8", ALLOC_NORMAL);
__str82=allocate([95,95,97,117,116,104,111,114,95,95,0] /* __author__\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([66,90,50,70,105,108,101,0] /* BZ2File\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([66,90,50,67,111,109,112,114,101,115,115,111,114,0] /* BZ2Compressor\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([66,90,50,68,101,99,111,109,112,114,101,115,115,111,114,0] /* BZ2Decompressor\00 */, "i8", ALLOC_NORMAL);
HEAP[_BZ2File_methods]=((__str29)&4294967295);
HEAP[_BZ2File_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_BZ2File_methods+12]=((_BZ2File_read__doc__)&4294967295);
HEAP[_BZ2File_methods+16]=((__str30)&4294967295);
HEAP[_BZ2File_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_BZ2File_methods+28]=((_BZ2File_readline__doc__)&4294967295);
HEAP[_BZ2File_methods+32]=((__str31)&4294967295);
HEAP[_BZ2File_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_BZ2File_methods+44]=((_BZ2File_readlines__doc__)&4294967295);
HEAP[_BZ2File_methods+48]=((__str32)&4294967295);
HEAP[_BZ2File_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_BZ2File_methods+60]=((_BZ2File_xreadlines__doc__)&4294967295);
HEAP[_BZ2File_methods+64]=((__str33)&4294967295);
HEAP[_BZ2File_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_BZ2File_methods+76]=((_BZ2File_write__doc__)&4294967295);
HEAP[_BZ2File_methods+80]=((__str34)&4294967295);
HEAP[_BZ2File_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_BZ2File_methods+92]=((_BZ2File_writelines__doc__)&4294967295);
HEAP[_BZ2File_methods+96]=((__str26)&4294967295);
HEAP[_BZ2File_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_BZ2File_methods+108]=((_BZ2File_seek__doc__)&4294967295);
HEAP[_BZ2File_methods+112]=((__str35)&4294967295);
HEAP[_BZ2File_methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_BZ2File_methods+124]=((_BZ2File_tell__doc__)&4294967295);
HEAP[_BZ2File_methods+128]=((__str28)&4294967295);
HEAP[_BZ2File_methods+132]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_BZ2File_methods+140]=((_BZ2File_close__doc__)&4294967295);
HEAP[_BZ2File_methods+144]=((__str36)&4294967295);
HEAP[_BZ2File_methods+148]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_BZ2File_methods+156]=((_BZ2File_enter_doc)&4294967295);
HEAP[_BZ2File_methods+160]=((__str37)&4294967295);
HEAP[_BZ2File_methods+164]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_BZ2File_methods+172]=((_BZ2File_exit_doc)&4294967295);
HEAP[_BZ2File_getset]=((__str46)&4294967295);
HEAP[_BZ2File_getset+4]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_BZ2File_getset+12]=((__str47)&4294967295);
HEAP[_BZ2File_getset+20]=((__str48)&4294967295);
HEAP[_BZ2File_getset+24]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_BZ2File_getset+32]=((__str49)&4294967295);
HEAP[_BZ2File_getset+40]=((__str44)&4294967295);
HEAP[_BZ2File_getset+44]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_BZ2File_getset+52]=((__str50)&4294967295);
HEAP[_BZ2File_getset+60]=((__str45)&4294967295);
HEAP[_BZ2File_getset+64]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_BZ2File_getset+72]=((__str51)&4294967295);
HEAP[_BZ2File_members]=((__str52)&4294967295);
HEAP[_BZ2File_members+16]=((__str53)&4294967295);
HEAP[_kwlist_9585]=((__str56)&4294967295);
HEAP[_kwlist_9585+4]=((__str44)&4294967295);
HEAP[_kwlist_9585+8]=((__str57)&4294967295);
HEAP[_kwlist_9585+12]=((__str58)&4294967295);
HEAP[_BZ2File_Type+12]=((__str64)&4294967295);
HEAP[_BZ2File_Type+24]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_BZ2File_Type+72]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_BZ2File_Type+76]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_BZ2File_Type+88]=((_BZ2File__doc__)&4294967295);
HEAP[_BZ2File_Type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_BZ2File_Type+112]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_BZ2File_Type+116]=((_BZ2File_methods)&4294967295);
HEAP[_BZ2File_Type+120]=((_BZ2File_members)&4294967295);
HEAP[_BZ2File_Type+124]=_BZ2File_getset;
HEAP[_BZ2File_Type+148]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_BZ2File_Type+152]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_BZ2File_Type+156]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_BZ2File_Type+160]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_BZ2Comp_methods]=((__str68)&4294967295);
HEAP[_BZ2Comp_methods+4]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_BZ2Comp_methods+12]=((_BZ2Comp_compress__doc__)&4294967295);
HEAP[_BZ2Comp_methods+16]=((__str69)&4294967295);
HEAP[_BZ2Comp_methods+20]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_BZ2Comp_methods+28]=((_BZ2Comp_flush__doc__)&4294967295);
HEAP[_kwlist_9935]=((__str58)&4294967295);
HEAP[_BZ2Comp_Type+12]=((__str71)&4294967295);
HEAP[_BZ2Comp_Type+24]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_BZ2Comp_Type+72]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_BZ2Comp_Type+76]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_BZ2Comp_Type+88]=((_BZ2Comp__doc__)&4294967295);
HEAP[_BZ2Comp_Type+116]=((_BZ2Comp_methods)&4294967295);
HEAP[_BZ2Comp_Type+148]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_BZ2Comp_Type+152]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_BZ2Comp_Type+156]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_BZ2Comp_Type+160]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_BZ2Decomp_members]=((__str72)&4294967295);
HEAP[_BZ2Decomp_methods]=((__str75)&4294967295);
HEAP[_BZ2Decomp_methods+4]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_BZ2Decomp_methods+12]=((_BZ2Decomp_decompress__doc__)&4294967295);
HEAP[_BZ2Decomp_Type+12]=((__str77)&4294967295);
HEAP[_BZ2Decomp_Type+24]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_BZ2Decomp_Type+72]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_BZ2Decomp_Type+76]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_BZ2Decomp_Type+88]=((_BZ2Decomp__doc__)&4294967295);
HEAP[_BZ2Decomp_Type+116]=((_BZ2Decomp_methods)&4294967295);
HEAP[_BZ2Decomp_Type+120]=_BZ2Decomp_members;
HEAP[_BZ2Decomp_Type+148]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_BZ2Decomp_Type+152]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_BZ2Decomp_Type+156]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_BZ2Decomp_Type+160]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_kwlist_10147]=((__str79)&4294967295);
HEAP[_kwlist_10147+4]=((__str58)&4294967295);
HEAP[_bz2_methods]=((__str68)&4294967295);
HEAP[_bz2_methods+4]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_bz2_methods+12]=((_bz2_compress__doc__)&4294967295);
HEAP[_bz2_methods+16]=((__str75)&4294967295);
HEAP[_bz2_methods+20]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_bz2_methods+28]=((_bz2_decompress__doc__)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

