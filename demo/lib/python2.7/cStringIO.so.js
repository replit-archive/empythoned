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
  
var $3___SIZE = 224; // %3
  
var $4___SIZE = 16; // %4
  
var $5___SIZE = 40; // %5
  
var $6___SIZE = 196; // %6
  
var $7___SIZE = 192; // %7
  
var $8___SIZE = 32; // %8
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_IOobject___SIZE = 20; // %struct.IOobject
  
var $struct_Iobject___SIZE = 24; // %struct.Iobject
  
var $struct_Oobject___SIZE = 28; // %struct.Oobject
  
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct_PycStringIO_CAPI___SIZE = 32; // %struct.PycStringIO_CAPI
  
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _cStringIO_module_documentation;
var _IO_flush__doc__;
var _PyExc_ValueError;
var __str;
var __Py_ZeroStruct;
var __Py_TrueStruct;
var __str1;
var __str2;
var _file_getsetlist;
var __Py_NoneStruct;
var _IO_getval__doc__;
var __str3;
var __str4;
var ___PRETTY_FUNCTION___8417;
var __str5;
var __str6;
var ___PRETTY_FUNCTION___8439;
var _IO_isatty__doc__;
var _IO_read__doc__;
var ___PRETTY_FUNCTION___8481;
var __str7;
var __str8;
var _IO_readline__doc__;
var __str9;
var ___PRETTY_FUNCTION___8545;
var __str10;
var ___PRETTY_FUNCTION___8600;
var _IO_readlines__doc__;
var __str11;
var _IO_reset__doc__;
var _IO_tell__doc__;
var ___PRETTY_FUNCTION___8704;
var _IO_truncate__doc__;
var __str12;
var _PyExc_IOError;
var _PyExc_StopIteration;
var _IO_seek__doc__;
var __str13;
var _O_write__doc__;
var __str14;
var ___PRETTY_FUNCTION___8812;
var _PyExc_MemoryError;
var __str15;
var __str16;
var __str17;
var _O_close__doc__;
var _O_writelines__doc__;
var __str18;
var __str19;
var __str20;
var __str21;
var __str22;
var __str23;
var __str24;
var __str25;
var __str26;
var __str27;
var __str28;
var __str29;
var __str30;
var _O_methods;
var __str31;
var __str32;
var _O_memberlist;
var _Otype__doc__;
var __str33;
var _Otype;
var _I_methods;
var _Itype__doc__;
var __str34;
var _Itype;
var _PyExc_TypeError;
var __str35;
var _IO_StringIO__doc__;
var __str36;
var _IO_methods;
var _CAPI;
var __str37;
var _PyType_Type;
var __str38;
var __str39;
var __str40;
var __str41;
var _PycStringIO;





































  function _IO__opencheck($self) {
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
        var $1=HEAP[$self_addr]; //@line 80 "cStringIO.c"
        var $2=(($1+8)&4294967295); //@line 80 "cStringIO.c"
        var $3=HEAP[$2]; //@line 80 "cStringIO.c"
        var $4=($3)==0; //@line 80 "cStringIO.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 80 "cStringIO.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 81 "cStringIO.c"
        _PyErr_SetString($5, ((__str)&4294967295)); //@line 81 "cStringIO.c"
        HEAP[$0]=0; //@line 83 "cStringIO.c"
        __label__ = 3; break; //@line 83 "cStringIO.c"
      case 2: // $bb1
        HEAP[$0]=1; //@line 85 "cStringIO.c"
        __label__ = 3; break; //@line 85 "cStringIO.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 83 "cStringIO.c"
        HEAP[$retval]=$6; //@line 83 "cStringIO.c"
        __label__ = 4; break; //@line 83 "cStringIO.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 83 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 83 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_get_closed($self, $closure) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $closure_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$closure_addr]=$closure;
        HEAP[$result]=__Py_ZeroStruct; //@line 91 "cStringIO.c"
        var $1=HEAP[$self_addr]; //@line 93 "cStringIO.c"
        var $2=(($1+8)&4294967295); //@line 93 "cStringIO.c"
        var $3=HEAP[$2]; //@line 93 "cStringIO.c"
        var $4=($3)==0; //@line 93 "cStringIO.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 93 "cStringIO.c"
      case 1: // $bb
        HEAP[$result]=__Py_TrueStruct; //@line 94 "cStringIO.c"
        __label__ = 2; break; //@line 94 "cStringIO.c"
      case 2: // $bb1
        var $5=HEAP[$result]; //@line 95 "cStringIO.c"
        var $6=(($5)&4294967295); //@line 95 "cStringIO.c"
        var $7=HEAP[$6]; //@line 95 "cStringIO.c"
        var $8=((($7) + 1)&4294967295); //@line 95 "cStringIO.c"
        var $9=HEAP[$result]; //@line 95 "cStringIO.c"
        var $10=(($9)&4294967295); //@line 95 "cStringIO.c"
        HEAP[$10]=$8; //@line 95 "cStringIO.c"
        var $11=HEAP[$result]; //@line 96 "cStringIO.c"
        HEAP[$0]=$11; //@line 96 "cStringIO.c"
        var $12=HEAP[$0]; //@line 96 "cStringIO.c"
        HEAP[$retval]=$12; //@line 96 "cStringIO.c"
        __label__ = 3; break; //@line 96 "cStringIO.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 96 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 96 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_flush($self, $unused) {
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
        var $1=HEAP[$self_addr]; //@line 107 "cStringIO.c"
        var $2=_IO__opencheck($1); //@line 107 "cStringIO.c"
        var $3=((($2))|0)==0; //@line 107 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 107 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 107 "cStringIO.c"
        __label__ = 3; break; //@line 107 "cStringIO.c"
      case 2: // $bb1
        var $4=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 109 "cStringIO.c"
        var $5=((($4) + 1)&4294967295); //@line 109 "cStringIO.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$5; //@line 109 "cStringIO.c"
        HEAP[$0]=__Py_NoneStruct; //@line 110 "cStringIO.c"
        __label__ = 3; break; //@line 110 "cStringIO.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 107 "cStringIO.c"
        HEAP[$retval]=$6; //@line 107 "cStringIO.c"
        __label__ = 4; break; //@line 107 "cStringIO.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 107 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 107 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_cgetval($self) {
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
        var $1=HEAP[$self_addr]; //@line 121 "cStringIO.c"
        var $2=$1; //@line 121 "cStringIO.c"
        var $3=_IO__opencheck($2); //@line 121 "cStringIO.c"
        var $4=((($3))|0)==0; //@line 121 "cStringIO.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 121 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 121 "cStringIO.c"
        __label__ = 5; break; //@line 121 "cStringIO.c"
      case 2: // $bb1
        var $5=HEAP[$self_addr]; //@line 122 "cStringIO.c"
        var $6=$5; //@line 122 "cStringIO.c"
        var $7=(($6+12)&4294967295); //@line 122 "cStringIO.c"
        var $8=HEAP[$7]; //@line 122 "cStringIO.c"
        var $9=((($8))|0) < 0; //@line 122 "cStringIO.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 122 "cStringIO.c"
      case 3: // $bb2
        ___assert_fail(((__str3)&4294967295), ((__str4)&4294967295), 122, ((___PRETTY_FUNCTION___8417)&4294967295)); //@line 122 "cStringIO.c"
        throw "Reached an unreachable! Original .ll line: 270"; //@line 122 "cStringIO.c"
      case 4: // $bb3
        var $10=HEAP[$self_addr]; //@line 123 "cStringIO.c"
        var $11=$10; //@line 123 "cStringIO.c"
        var $12=(($11+12)&4294967295); //@line 123 "cStringIO.c"
        var $13=HEAP[$12]; //@line 123 "cStringIO.c"
        var $14=HEAP[$self_addr]; //@line 123 "cStringIO.c"
        var $15=$14; //@line 123 "cStringIO.c"
        var $16=(($15+8)&4294967295); //@line 123 "cStringIO.c"
        var $17=HEAP[$16]; //@line 123 "cStringIO.c"
        var $18=_PyString_FromStringAndSize($17, $13); //@line 123 "cStringIO.c"
        HEAP[$0]=$18; //@line 123 "cStringIO.c"
        __label__ = 5; break; //@line 123 "cStringIO.c"
      case 5: // $bb4
        var $19=HEAP[$0]; //@line 121 "cStringIO.c"
        HEAP[$retval]=$19; //@line 121 "cStringIO.c"
        __label__ = 6; break; //@line 121 "cStringIO.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 121 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 121 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_getval($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $use_pos=__stackBase__+16;
        var $s=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$use_pos]=__Py_NoneStruct; //@line 129 "cStringIO.c"
        var $1=HEAP[$self_addr]; //@line 132 "cStringIO.c"
        var $2=_IO__opencheck($1); //@line 132 "cStringIO.c"
        var $3=((($2))|0)==0; //@line 132 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 132 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 132 "cStringIO.c"
        __label__ = 12; break; //@line 132 "cStringIO.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 133 "cStringIO.c"
        var $5=_PyArg_UnpackTuple($4, ((__str5)&4294967295), 0, 1, $use_pos); //@line 133 "cStringIO.c"
        var $6=((($5))|0)==0; //@line 133 "cStringIO.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 133 "cStringIO.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 133 "cStringIO.c"
        __label__ = 12; break; //@line 133 "cStringIO.c"
      case 4: // $bb3
        var $7=HEAP[$use_pos]; //@line 135 "cStringIO.c"
        var $8=_PyObject_IsTrue($7); //@line 135 "cStringIO.c"
        var $9=((($8))|0)!=0; //@line 135 "cStringIO.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 135 "cStringIO.c"
      case 5: // $bb4
        var $10=HEAP[$self_addr]; //@line 136 "cStringIO.c"
        var $11=(($10+12)&4294967295); //@line 136 "cStringIO.c"
        var $12=HEAP[$11]; //@line 136 "cStringIO.c"
        HEAP[$s]=$12; //@line 136 "cStringIO.c"
        var $13=HEAP[$self_addr]; //@line 137 "cStringIO.c"
        var $14=(($13+16)&4294967295); //@line 137 "cStringIO.c"
        var $15=HEAP[$14]; //@line 137 "cStringIO.c"
        var $16=HEAP[$s]; //@line 137 "cStringIO.c"
        var $17=((($15))|0) < ((($16))|0); //@line 137 "cStringIO.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 137 "cStringIO.c"
      case 6: // $bb5
        var $18=HEAP[$self_addr]; //@line 137 "cStringIO.c"
        var $19=(($18+16)&4294967295); //@line 137 "cStringIO.c"
        var $20=HEAP[$19]; //@line 137 "cStringIO.c"
        HEAP[$s]=$20; //@line 137 "cStringIO.c"
        __label__ = 7; break; //@line 137 "cStringIO.c"
      case 7: // $bb6
        __label__ = 9; break; //@line 137 "cStringIO.c"
      case 8: // $bb7
        var $21=HEAP[$self_addr]; //@line 140 "cStringIO.c"
        var $22=(($21+16)&4294967295); //@line 140 "cStringIO.c"
        var $23=HEAP[$22]; //@line 140 "cStringIO.c"
        HEAP[$s]=$23; //@line 140 "cStringIO.c"
        __label__ = 9; break; //@line 140 "cStringIO.c"
      case 9: // $bb8
        var $24=HEAP[$self_addr]; //@line 141 "cStringIO.c"
        var $25=(($24+12)&4294967295); //@line 141 "cStringIO.c"
        var $26=HEAP[$25]; //@line 141 "cStringIO.c"
        var $27=((($26))|0) < 0; //@line 141 "cStringIO.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 141 "cStringIO.c"
      case 10: // $bb9
        ___assert_fail(((__str6)&4294967295), ((__str4)&4294967295), 141, ((___PRETTY_FUNCTION___8439)&4294967295)); //@line 141 "cStringIO.c"
        throw "Reached an unreachable! Original .ll line: 381"; //@line 141 "cStringIO.c"
      case 11: // $bb10
        var $28=HEAP[$self_addr]; //@line 142 "cStringIO.c"
        var $29=(($28+8)&4294967295); //@line 142 "cStringIO.c"
        var $30=HEAP[$29]; //@line 142 "cStringIO.c"
        var $31=HEAP[$s]; //@line 142 "cStringIO.c"
        var $32=_PyString_FromStringAndSize($30, $31); //@line 142 "cStringIO.c"
        HEAP[$0]=$32; //@line 142 "cStringIO.c"
        __label__ = 12; break; //@line 142 "cStringIO.c"
      case 12: // $bb11
        var $33=HEAP[$0]; //@line 132 "cStringIO.c"
        HEAP[$retval]=$33; //@line 132 "cStringIO.c"
        __label__ = 13; break; //@line 132 "cStringIO.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 132 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 132 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_isatty($self, $unused) {
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
        var $1=HEAP[$self_addr]; //@line 149 "cStringIO.c"
        var $2=_IO__opencheck($1); //@line 149 "cStringIO.c"
        var $3=((($2))|0)==0; //@line 149 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 149 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 149 "cStringIO.c"
        __label__ = 3; break; //@line 149 "cStringIO.c"
      case 2: // $bb1
        var $4=((__Py_ZeroStruct)&4294967295); //@line 150 "cStringIO.c"
        var $5=HEAP[$4]; //@line 150 "cStringIO.c"
        var $6=((($5) + 1)&4294967295); //@line 150 "cStringIO.c"
        var $7=((__Py_ZeroStruct)&4294967295); //@line 150 "cStringIO.c"
        HEAP[$7]=$6; //@line 150 "cStringIO.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 151 "cStringIO.c"
        __label__ = 3; break; //@line 151 "cStringIO.c"
      case 3: // $bb2
        var $8=HEAP[$0]; //@line 149 "cStringIO.c"
        HEAP[$retval]=$8; //@line 149 "cStringIO.c"
        __label__ = 4; break; //@line 149 "cStringIO.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 149 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 149 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_cread($self, $output, $n) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $output_addr=__stackBase__+4;
        var $n_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $l=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$output_addr]=$output;
        HEAP[$n_addr]=$n;
        var $1=HEAP[$self_addr]; //@line 161 "cStringIO.c"
        var $2=$1; //@line 161 "cStringIO.c"
        var $3=_IO__opencheck($2); //@line 161 "cStringIO.c"
        var $4=((($3))|0)==0; //@line 161 "cStringIO.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 161 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 161 "cStringIO.c"
        __label__ = 11; break; //@line 161 "cStringIO.c"
      case 2: // $bb1
        var $5=HEAP[$self_addr]; //@line 162 "cStringIO.c"
        var $6=$5; //@line 162 "cStringIO.c"
        var $7=(($6+12)&4294967295); //@line 162 "cStringIO.c"
        var $8=HEAP[$7]; //@line 162 "cStringIO.c"
        var $9=((($8))|0) < 0; //@line 162 "cStringIO.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 162 "cStringIO.c"
      case 3: // $bb2
        ___assert_fail(((__str3)&4294967295), ((__str4)&4294967295), 162, ((___PRETTY_FUNCTION___8481)&4294967295)); //@line 162 "cStringIO.c"
        throw "Reached an unreachable! Original .ll line: 485"; //@line 162 "cStringIO.c"
      case 4: // $bb3
        var $10=HEAP[$self_addr]; //@line 163 "cStringIO.c"
        var $11=$10; //@line 163 "cStringIO.c"
        var $12=(($11+16)&4294967295); //@line 163 "cStringIO.c"
        var $13=HEAP[$12]; //@line 163 "cStringIO.c"
        var $14=((($13))|0) < 0; //@line 163 "cStringIO.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 163 "cStringIO.c"
      case 5: // $bb4
        ___assert_fail(((__str7)&4294967295), ((__str4)&4294967295), 163, ((___PRETTY_FUNCTION___8481)&4294967295)); //@line 163 "cStringIO.c"
        throw "Reached an unreachable! Original .ll line: 497"; //@line 163 "cStringIO.c"
      case 6: // $bb5
        var $15=HEAP[$self_addr]; //@line 164 "cStringIO.c"
        var $16=$15; //@line 164 "cStringIO.c"
        var $17=(($16+16)&4294967295); //@line 164 "cStringIO.c"
        var $18=HEAP[$17]; //@line 164 "cStringIO.c"
        var $19=HEAP[$self_addr]; //@line 164 "cStringIO.c"
        var $20=$19; //@line 164 "cStringIO.c"
        var $21=(($20+12)&4294967295); //@line 164 "cStringIO.c"
        var $22=HEAP[$21]; //@line 164 "cStringIO.c"
        var $23=((($18) - ($22))&4294967295); //@line 164 "cStringIO.c"
        HEAP[$l]=$23; //@line 164 "cStringIO.c"
        var $24=HEAP[$n_addr]; //@line 165 "cStringIO.c"
        var $25=((($24))|0) < 0; //@line 165 "cStringIO.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 165 "cStringIO.c"
      case 7: // $bb6
        var $26=HEAP[$n_addr]; //@line 165 "cStringIO.c"
        var $27=HEAP[$l]; //@line 165 "cStringIO.c"
        var $28=((($26))|0) > ((($27))|0); //@line 165 "cStringIO.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 165 "cStringIO.c"
      case 8: // $bb7
        var $29=HEAP[$l]; //@line 166 "cStringIO.c"
        HEAP[$n_addr]=$29; //@line 166 "cStringIO.c"
        var $30=HEAP[$n_addr]; //@line 167 "cStringIO.c"
        var $31=((($30))|0) < 0; //@line 167 "cStringIO.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 167 "cStringIO.c"
      case 9: // $bb8
        HEAP[$n_addr]=0; //@line 167 "cStringIO.c"
        __label__ = 10; break; //@line 167 "cStringIO.c"
      case 10: // $bb9
        var $32=HEAP[$self_addr]; //@line 170 "cStringIO.c"
        var $33=$32; //@line 170 "cStringIO.c"
        var $34=(($33+8)&4294967295); //@line 170 "cStringIO.c"
        var $35=HEAP[$34]; //@line 170 "cStringIO.c"
        var $36=HEAP[$self_addr]; //@line 170 "cStringIO.c"
        var $37=$36; //@line 170 "cStringIO.c"
        var $38=(($37+12)&4294967295); //@line 170 "cStringIO.c"
        var $39=HEAP[$38]; //@line 170 "cStringIO.c"
        var $40=(($35+$39)&4294967295); //@line 170 "cStringIO.c"
        var $41=HEAP[$output_addr]; //@line 170 "cStringIO.c"
        HEAP[$41]=$40; //@line 170 "cStringIO.c"
        var $42=HEAP[$self_addr]; //@line 171 "cStringIO.c"
        var $43=$42; //@line 171 "cStringIO.c"
        var $44=HEAP[$self_addr]; //@line 171 "cStringIO.c"
        var $45=$44; //@line 171 "cStringIO.c"
        var $46=(($45+12)&4294967295); //@line 171 "cStringIO.c"
        var $47=HEAP[$46]; //@line 171 "cStringIO.c"
        var $48=HEAP[$n_addr]; //@line 171 "cStringIO.c"
        var $49=((($47) + ($48))&4294967295); //@line 171 "cStringIO.c"
        var $50=(($43+12)&4294967295); //@line 171 "cStringIO.c"
        HEAP[$50]=$49; //@line 171 "cStringIO.c"
        var $51=HEAP[$n_addr]; //@line 172 "cStringIO.c"
        HEAP[$0]=$51; //@line 172 "cStringIO.c"
        __label__ = 11; break; //@line 172 "cStringIO.c"
      case 11: // $bb10
        var $52=HEAP[$0]; //@line 161 "cStringIO.c"
        HEAP[$retval]=$52; //@line 161 "cStringIO.c"
        __label__ = 12; break; //@line 161 "cStringIO.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 161 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 161 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_read($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $n=__stackBase__+16;
        var $output=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$n]=-1; //@line 177 "cStringIO.c"
        HEAP[$output]=0; //@line 178 "cStringIO.c"
        var $1=HEAP[$args_addr]; //@line 180 "cStringIO.c"
        var $2=_PyArg_ParseTuple($1, ((__str8)&4294967295), $n); //@line 180 "cStringIO.c"
        var $3=((($2))|0)==0; //@line 180 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 180 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 180 "cStringIO.c"
        __label__ = 5; break; //@line 180 "cStringIO.c"
      case 2: // $bb1
        var $4=HEAP[$n]; //@line 182 "cStringIO.c"
        var $5=HEAP[$self_addr]; //@line 182 "cStringIO.c"
        var $6=$5; //@line 182 "cStringIO.c"
        var $7=_IO_cread($6, $output, $4); //@line 182 "cStringIO.c"
        HEAP[$n]=$7; //@line 182 "cStringIO.c"
        var $8=HEAP[$n]; //@line 182 "cStringIO.c"
        var $9=((($8))|0) < 0; //@line 182 "cStringIO.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 182 "cStringIO.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 182 "cStringIO.c"
        __label__ = 5; break; //@line 182 "cStringIO.c"
      case 4: // $bb3
        var $10=HEAP[$n]; //@line 184 "cStringIO.c"
        var $11=HEAP[$output]; //@line 184 "cStringIO.c"
        var $12=_PyString_FromStringAndSize($11, $10); //@line 184 "cStringIO.c"
        HEAP[$0]=$12; //@line 184 "cStringIO.c"
        __label__ = 5; break; //@line 184 "cStringIO.c"
      case 5: // $bb4
        var $13=HEAP[$0]; //@line 180 "cStringIO.c"
        HEAP[$retval]=$13; //@line 180 "cStringIO.c"
        __label__ = 6; break; //@line 180 "cStringIO.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 180 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 180 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_creadline($self, $output) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $output_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $n=__stackBase__+16;
        var $s=__stackBase__+20;
        var $l=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$output_addr]=$output;
        var $1=HEAP[$self_addr]; //@line 194 "cStringIO.c"
        var $2=$1; //@line 194 "cStringIO.c"
        var $3=_IO__opencheck($2); //@line 194 "cStringIO.c"
        var $4=((($3))|0)==0; //@line 194 "cStringIO.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 194 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 194 "cStringIO.c"
        __label__ = 15; break; //@line 194 "cStringIO.c"
      case 2: // $bb1
        var $5=HEAP[$self_addr]; //@line 197 "cStringIO.c"
        var $6=$5; //@line 197 "cStringIO.c"
        var $7=(($6+8)&4294967295); //@line 197 "cStringIO.c"
        var $8=HEAP[$7]; //@line 197 "cStringIO.c"
        var $9=HEAP[$self_addr]; //@line 197 "cStringIO.c"
        var $10=$9; //@line 197 "cStringIO.c"
        var $11=(($10+12)&4294967295); //@line 197 "cStringIO.c"
        var $12=HEAP[$11]; //@line 197 "cStringIO.c"
        var $13=(($8+$12)&4294967295); //@line 197 "cStringIO.c"
        HEAP[$n]=$13; //@line 197 "cStringIO.c"
        var $14=HEAP[$self_addr]; //@line 197 "cStringIO.c"
        var $15=$14; //@line 197 "cStringIO.c"
        var $16=(($15+8)&4294967295); //@line 197 "cStringIO.c"
        var $17=HEAP[$16]; //@line 197 "cStringIO.c"
        var $18=HEAP[$self_addr]; //@line 197 "cStringIO.c"
        var $19=$18; //@line 197 "cStringIO.c"
        var $20=(($19+16)&4294967295); //@line 197 "cStringIO.c"
        var $21=HEAP[$20]; //@line 197 "cStringIO.c"
        var $22=(($17+$21)&4294967295); //@line 197 "cStringIO.c"
        HEAP[$s]=$22; //@line 197 "cStringIO.c"
        __label__ = 4; break; //@line 197 "cStringIO.c"
      case 3: // $bb2
        var $23=HEAP[$n]; //@line 198 "cStringIO.c"
        var $24=(($23+1)&4294967295); //@line 198 "cStringIO.c"
        HEAP[$n]=$24; //@line 198 "cStringIO.c"
        __label__ = 4; break; //@line 198 "cStringIO.c"
      case 4: // $bb3
        var $25=HEAP[$n]; //@line 198 "cStringIO.c"
        var $26=HEAP[$s]; //@line 198 "cStringIO.c"
        var $27=($25) >= ($26); //@line 198 "cStringIO.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 198 "cStringIO.c"
      case 5: // $bb4
        var $28=HEAP[$n]; //@line 198 "cStringIO.c"
        var $29=HEAP[$28]; //@line 198 "cStringIO.c"
        var $30=reSign(($29), 8, 0)!=10; //@line 198 "cStringIO.c"
        if ($30) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 198 "cStringIO.c"
      case 6: // $bb5
        var $31=HEAP[$n]; //@line 200 "cStringIO.c"
        var $32=HEAP[$s]; //@line 200 "cStringIO.c"
        var $33=($31) < ($32); //@line 200 "cStringIO.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 200 "cStringIO.c"
      case 7: // $bb6
        var $34=HEAP[$n]; //@line 200 "cStringIO.c"
        var $35=(($34+1)&4294967295); //@line 200 "cStringIO.c"
        HEAP[$n]=$35; //@line 200 "cStringIO.c"
        __label__ = 8; break; //@line 200 "cStringIO.c"
      case 8: // $bb7
        var $36=HEAP[$self_addr]; //@line 202 "cStringIO.c"
        var $37=$36; //@line 202 "cStringIO.c"
        var $38=(($37+8)&4294967295); //@line 202 "cStringIO.c"
        var $39=HEAP[$38]; //@line 202 "cStringIO.c"
        var $40=HEAP[$self_addr]; //@line 202 "cStringIO.c"
        var $41=$40; //@line 202 "cStringIO.c"
        var $42=(($41+12)&4294967295); //@line 202 "cStringIO.c"
        var $43=HEAP[$42]; //@line 202 "cStringIO.c"
        var $44=(($39+$43)&4294967295); //@line 202 "cStringIO.c"
        var $45=HEAP[$output_addr]; //@line 202 "cStringIO.c"
        HEAP[$45]=$44; //@line 202 "cStringIO.c"
        var $46=HEAP[$n]; //@line 203 "cStringIO.c"
        var $47=($46); //@line 203 "cStringIO.c"
        var $48=HEAP[$self_addr]; //@line 203 "cStringIO.c"
        var $49=$48; //@line 203 "cStringIO.c"
        var $50=(($49+8)&4294967295); //@line 203 "cStringIO.c"
        var $51=HEAP[$50]; //@line 203 "cStringIO.c"
        var $52=($51); //@line 203 "cStringIO.c"
        var $53=((($47) - ($52))&4294967295); //@line 203 "cStringIO.c"
        var $54=HEAP[$self_addr]; //@line 203 "cStringIO.c"
        var $55=$54; //@line 203 "cStringIO.c"
        var $56=(($55+12)&4294967295); //@line 203 "cStringIO.c"
        var $57=HEAP[$56]; //@line 203 "cStringIO.c"
        var $58=((($53) - ($57))&4294967295); //@line 203 "cStringIO.c"
        HEAP[$l]=$58; //@line 203 "cStringIO.c"
        var $59=HEAP[$self_addr]; //@line 205 "cStringIO.c"
        var $60=$59; //@line 205 "cStringIO.c"
        var $61=(($60+12)&4294967295); //@line 205 "cStringIO.c"
        var $62=HEAP[$61]; //@line 205 "cStringIO.c"
        var $63=HEAP[$l]; //@line 205 "cStringIO.c"
        var $64=((2147483647 - ($63))&4294967295); //@line 205 "cStringIO.c"
        var $65=((($62))|0) > ((($64))|0); //@line 205 "cStringIO.c"
        if ($65) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 205 "cStringIO.c"
      case 9: // $bb8
        ___assert_fail(((__str9)&4294967295), ((__str4)&4294967295), 205, ((___PRETTY_FUNCTION___8545)&4294967295)); //@line 205 "cStringIO.c"
        throw "Reached an unreachable! Original .ll line: 746"; //@line 205 "cStringIO.c"
      case 10: // $bb9
        var $66=HEAP[$self_addr]; //@line 206 "cStringIO.c"
        var $67=$66; //@line 206 "cStringIO.c"
        var $68=(($67+12)&4294967295); //@line 206 "cStringIO.c"
        var $69=HEAP[$68]; //@line 206 "cStringIO.c"
        var $70=((($69))|0) < 0; //@line 206 "cStringIO.c"
        if ($70) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 206 "cStringIO.c"
      case 11: // $bb10
        ___assert_fail(((__str3)&4294967295), ((__str4)&4294967295), 206, ((___PRETTY_FUNCTION___8545)&4294967295)); //@line 206 "cStringIO.c"
        throw "Reached an unreachable! Original .ll line: 758"; //@line 206 "cStringIO.c"
      case 12: // $bb11
        var $71=HEAP[$self_addr]; //@line 207 "cStringIO.c"
        var $72=$71; //@line 207 "cStringIO.c"
        var $73=(($72+16)&4294967295); //@line 207 "cStringIO.c"
        var $74=HEAP[$73]; //@line 207 "cStringIO.c"
        var $75=((($74))|0) < 0; //@line 207 "cStringIO.c"
        if ($75) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 207 "cStringIO.c"
      case 13: // $bb12
        ___assert_fail(((__str7)&4294967295), ((__str4)&4294967295), 207, ((___PRETTY_FUNCTION___8545)&4294967295)); //@line 207 "cStringIO.c"
        throw "Reached an unreachable! Original .ll line: 770"; //@line 207 "cStringIO.c"
      case 14: // $bb13
        var $76=HEAP[$self_addr]; //@line 209 "cStringIO.c"
        var $77=$76; //@line 209 "cStringIO.c"
        var $78=HEAP[$self_addr]; //@line 209 "cStringIO.c"
        var $79=$78; //@line 209 "cStringIO.c"
        var $80=(($79+12)&4294967295); //@line 209 "cStringIO.c"
        var $81=HEAP[$80]; //@line 209 "cStringIO.c"
        var $82=HEAP[$l]; //@line 209 "cStringIO.c"
        var $83=((($81) + ($82))&4294967295); //@line 209 "cStringIO.c"
        var $84=(($77+12)&4294967295); //@line 209 "cStringIO.c"
        HEAP[$84]=$83; //@line 209 "cStringIO.c"
        var $85=HEAP[$l]; //@line 210 "cStringIO.c"
        HEAP[$0]=$85; //@line 210 "cStringIO.c"
        __label__ = 15; break; //@line 210 "cStringIO.c"
      case 15: // $bb14
        var $86=HEAP[$0]; //@line 194 "cStringIO.c"
        HEAP[$retval]=$86; //@line 194 "cStringIO.c"
        __label__ = 16; break; //@line 194 "cStringIO.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 194 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 194 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_readline($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $n=__stackBase__+16;
        var $m=__stackBase__+20;
        var $output=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$m]=-1; //@line 215 "cStringIO.c"
        var $1=HEAP[$args_addr]; //@line 218 "cStringIO.c"
        var $2=($1)!=0; //@line 218 "cStringIO.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 218 "cStringIO.c"
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 219 "cStringIO.c"
        var $4=_PyArg_ParseTuple($3, ((__str10)&4294967295), $m); //@line 219 "cStringIO.c"
        var $5=((($4))|0)==0; //@line 219 "cStringIO.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 219 "cStringIO.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 219 "cStringIO.c"
        __label__ = 11; break; //@line 219 "cStringIO.c"
      case 3: // $bb2
        var $6=HEAP[$self_addr]; //@line 221 "cStringIO.c"
        var $7=$6; //@line 221 "cStringIO.c"
        var $8=_IO_creadline($7, $output); //@line 221 "cStringIO.c"
        HEAP[$n]=$8; //@line 221 "cStringIO.c"
        var $9=HEAP[$n]; //@line 221 "cStringIO.c"
        var $10=((($9))|0) < 0; //@line 221 "cStringIO.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 221 "cStringIO.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 221 "cStringIO.c"
        __label__ = 11; break; //@line 221 "cStringIO.c"
      case 5: // $bb4
        var $11=HEAP[$m]; //@line 222 "cStringIO.c"
        var $12=((($11))|0) >= 0; //@line 222 "cStringIO.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 222 "cStringIO.c"
      case 6: // $bb5
        var $13=HEAP[$m]; //@line 222 "cStringIO.c"
        var $14=HEAP[$n]; //@line 222 "cStringIO.c"
        var $15=((($13))|0) < ((($14))|0); //@line 222 "cStringIO.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 222 "cStringIO.c"
      case 7: // $bb6
        var $16=HEAP[$m]; //@line 223 "cStringIO.c"
        var $17=HEAP[$n]; //@line 223 "cStringIO.c"
        var $18=((($17) - ($16))&4294967295); //@line 223 "cStringIO.c"
        HEAP[$m]=$18; //@line 223 "cStringIO.c"
        var $19=HEAP[$m]; //@line 224 "cStringIO.c"
        var $20=HEAP[$n]; //@line 224 "cStringIO.c"
        var $21=((($20) - ($19))&4294967295); //@line 224 "cStringIO.c"
        HEAP[$n]=$21; //@line 224 "cStringIO.c"
        var $22=HEAP[$self_addr]; //@line 225 "cStringIO.c"
        var $23=(($22+12)&4294967295); //@line 225 "cStringIO.c"
        var $24=HEAP[$23]; //@line 225 "cStringIO.c"
        var $25=HEAP[$m]; //@line 225 "cStringIO.c"
        var $26=((($24) - ($25))&4294967295); //@line 225 "cStringIO.c"
        var $27=HEAP[$self_addr]; //@line 225 "cStringIO.c"
        var $28=(($27+12)&4294967295); //@line 225 "cStringIO.c"
        HEAP[$28]=$26; //@line 225 "cStringIO.c"
        __label__ = 8; break; //@line 225 "cStringIO.c"
      case 8: // $bb7
        var $29=HEAP[$self_addr]; //@line 227 "cStringIO.c"
        var $30=(($29+12)&4294967295); //@line 227 "cStringIO.c"
        var $31=HEAP[$30]; //@line 227 "cStringIO.c"
        var $32=((($31))|0) < 0; //@line 227 "cStringIO.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 227 "cStringIO.c"
      case 9: // $bb8
        ___assert_fail(((__str3)&4294967295), ((__str4)&4294967295), 227, ((___PRETTY_FUNCTION___8600)&4294967295)); //@line 227 "cStringIO.c"
        throw "Reached an unreachable! Original .ll line: 882"; //@line 227 "cStringIO.c"
      case 10: // $bb9
        var $33=HEAP[$output]; //@line 228 "cStringIO.c"
        var $34=HEAP[$n]; //@line 228 "cStringIO.c"
        var $35=_PyString_FromStringAndSize($33, $34); //@line 228 "cStringIO.c"
        HEAP[$0]=$35; //@line 228 "cStringIO.c"
        __label__ = 11; break; //@line 228 "cStringIO.c"
      case 11: // $bb10
        var $36=HEAP[$0]; //@line 219 "cStringIO.c"
        HEAP[$retval]=$36; //@line 219 "cStringIO.c"
        __label__ = 12; break; //@line 219 "cStringIO.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 219 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 219 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_readlines($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $n=__stackBase__+16;
        var $output=__stackBase__+20;
        var $result=__stackBase__+24;
        var $line=__stackBase__+28;
        var $hint=__stackBase__+32;
        var $length=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$hint]=0; //@line 238 "cStringIO.c"
        HEAP[$length]=0; //@line 238 "cStringIO.c"
        var $1=HEAP[$args_addr]; //@line 240 "cStringIO.c"
        var $2=_PyArg_ParseTuple($1, ((__str11)&4294967295), $hint); //@line 240 "cStringIO.c"
        var $3=((($2))|0)==0; //@line 240 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 240 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 240 "cStringIO.c"
        __label__ = 20; break; //@line 240 "cStringIO.c"
      case 2: // $bb1
        var $4=_PyList_New(0); //@line 242 "cStringIO.c"
        HEAP[$result]=$4; //@line 242 "cStringIO.c"
        var $5=HEAP[$result]; //@line 243 "cStringIO.c"
        var $6=($5)==0; //@line 243 "cStringIO.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 243 "cStringIO.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 244 "cStringIO.c"
        __label__ = 20; break; //@line 244 "cStringIO.c"
      case 4: // $bb3
        var $7=HEAP[$self_addr]; //@line 247 "cStringIO.c"
        var $8=$7; //@line 247 "cStringIO.c"
        var $9=_IO_creadline($8, $output); //@line 247 "cStringIO.c"
        HEAP[$n]=$9; //@line 247 "cStringIO.c"
        var $10=HEAP[$n]; //@line 247 "cStringIO.c"
        var $11=((($10))|0) < 0; //@line 247 "cStringIO.c"
        if ($11) { __label__ = 17; break; } else { __label__ = 5; break; } //@line 247 "cStringIO.c"
      case 5: // $bb4
        var $12=HEAP[$n]; //@line 249 "cStringIO.c"
        var $13=((($12))|0)==0; //@line 249 "cStringIO.c"
        if ($13) { __label__ = 16; break; } else { __label__ = 6; break; } //@line 249 "cStringIO.c"
      case 6: // $bb5
        var $14=HEAP[$output]; //@line 251 "cStringIO.c"
        var $15=HEAP[$n]; //@line 251 "cStringIO.c"
        var $16=_PyString_FromStringAndSize($14, $15); //@line 251 "cStringIO.c"
        HEAP[$line]=$16; //@line 251 "cStringIO.c"
        var $17=HEAP[$line]; //@line 252 "cStringIO.c"
        var $18=($17)==0; //@line 252 "cStringIO.c"
        if ($18) { __label__ = 17; break; } else { __label__ = 7; break; } //@line 252 "cStringIO.c"
      case 7: // $bb6
        var $19=HEAP[$result]; //@line 254 "cStringIO.c"
        var $20=HEAP[$line]; //@line 254 "cStringIO.c"
        var $21=_PyList_Append($19, $20); //@line 254 "cStringIO.c"
        var $22=((($21))|0)==-1; //@line 254 "cStringIO.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 254 "cStringIO.c"
      case 8: // $bb7
        var $23=HEAP[$line]; //@line 255 "cStringIO.c"
        var $24=(($23)&4294967295); //@line 255 "cStringIO.c"
        var $25=HEAP[$24]; //@line 255 "cStringIO.c"
        var $26=((($25) - 1)&4294967295); //@line 255 "cStringIO.c"
        var $27=HEAP[$line]; //@line 255 "cStringIO.c"
        var $28=(($27)&4294967295); //@line 255 "cStringIO.c"
        HEAP[$28]=$26; //@line 255 "cStringIO.c"
        var $29=HEAP[$line]; //@line 255 "cStringIO.c"
        var $30=(($29)&4294967295); //@line 255 "cStringIO.c"
        var $31=HEAP[$30]; //@line 255 "cStringIO.c"
        var $32=((($31))|0)==0; //@line 255 "cStringIO.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 255 "cStringIO.c"
      case 9: // $bb8
        var $33=HEAP[$line]; //@line 255 "cStringIO.c"
        var $34=(($33+4)&4294967295); //@line 255 "cStringIO.c"
        var $35=HEAP[$34]; //@line 255 "cStringIO.c"
        var $36=(($35+24)&4294967295); //@line 255 "cStringIO.c"
        var $37=HEAP[$36]; //@line 255 "cStringIO.c"
        var $38=HEAP[$line]; //@line 255 "cStringIO.c"
        FUNCTION_TABLE[$37]($38); //@line 255 "cStringIO.c"
        __label__ = 10; break; //@line 255 "cStringIO.c"
      case 10: // $bb9
        __label__ = 17; break; //@line 255 "cStringIO.c"
      case 11: // $bb10
        var $39=HEAP[$line]; //@line 258 "cStringIO.c"
        var $40=(($39)&4294967295); //@line 258 "cStringIO.c"
        var $41=HEAP[$40]; //@line 258 "cStringIO.c"
        var $42=((($41) - 1)&4294967295); //@line 258 "cStringIO.c"
        var $43=HEAP[$line]; //@line 258 "cStringIO.c"
        var $44=(($43)&4294967295); //@line 258 "cStringIO.c"
        HEAP[$44]=$42; //@line 258 "cStringIO.c"
        var $45=HEAP[$line]; //@line 258 "cStringIO.c"
        var $46=(($45)&4294967295); //@line 258 "cStringIO.c"
        var $47=HEAP[$46]; //@line 258 "cStringIO.c"
        var $48=((($47))|0)==0; //@line 258 "cStringIO.c"
        if ($48) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 258 "cStringIO.c"
      case 12: // $bb11
        var $49=HEAP[$line]; //@line 258 "cStringIO.c"
        var $50=(($49+4)&4294967295); //@line 258 "cStringIO.c"
        var $51=HEAP[$50]; //@line 258 "cStringIO.c"
        var $52=(($51+24)&4294967295); //@line 258 "cStringIO.c"
        var $53=HEAP[$52]; //@line 258 "cStringIO.c"
        var $54=HEAP[$line]; //@line 258 "cStringIO.c"
        FUNCTION_TABLE[$53]($54); //@line 258 "cStringIO.c"
        __label__ = 13; break; //@line 258 "cStringIO.c"
      case 13: // $bb12
        var $55=HEAP[$length]; //@line 259 "cStringIO.c"
        var $56=HEAP[$n]; //@line 259 "cStringIO.c"
        var $57=((($55) + ($56))&4294967295); //@line 259 "cStringIO.c"
        HEAP[$length]=$57; //@line 259 "cStringIO.c"
        var $58=HEAP[$hint]; //@line 260 "cStringIO.c"
        var $59=((($58))|0) > 0; //@line 260 "cStringIO.c"
        if ($59) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 260 "cStringIO.c"
      case 14: // $bb13
        var $60=HEAP[$hint]; //@line 260 "cStringIO.c"
        var $61=HEAP[$length]; //@line 260 "cStringIO.c"
        var $62=((($61))|0) >= ((($60))|0); //@line 260 "cStringIO.c"
        if ($62) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 260 "cStringIO.c"
      case 15: // $bb14
        __label__ = 4; break; //@line 260 "cStringIO.c"
      case 16: // $bb15
        var $63=HEAP[$result]; //@line 263 "cStringIO.c"
        HEAP[$0]=$63; //@line 263 "cStringIO.c"
        __label__ = 20; break; //@line 263 "cStringIO.c"
      case 17: // $err
        var $64=HEAP[$result]; //@line 265 "cStringIO.c"
        var $65=(($64)&4294967295); //@line 265 "cStringIO.c"
        var $66=HEAP[$65]; //@line 265 "cStringIO.c"
        var $67=((($66) - 1)&4294967295); //@line 265 "cStringIO.c"
        var $68=HEAP[$result]; //@line 265 "cStringIO.c"
        var $69=(($68)&4294967295); //@line 265 "cStringIO.c"
        HEAP[$69]=$67; //@line 265 "cStringIO.c"
        var $70=HEAP[$result]; //@line 265 "cStringIO.c"
        var $71=(($70)&4294967295); //@line 265 "cStringIO.c"
        var $72=HEAP[$71]; //@line 265 "cStringIO.c"
        var $73=((($72))|0)==0; //@line 265 "cStringIO.c"
        if ($73) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 265 "cStringIO.c"
      case 18: // $bb16
        var $74=HEAP[$result]; //@line 265 "cStringIO.c"
        var $75=(($74+4)&4294967295); //@line 265 "cStringIO.c"
        var $76=HEAP[$75]; //@line 265 "cStringIO.c"
        var $77=(($76+24)&4294967295); //@line 265 "cStringIO.c"
        var $78=HEAP[$77]; //@line 265 "cStringIO.c"
        var $79=HEAP[$result]; //@line 265 "cStringIO.c"
        FUNCTION_TABLE[$78]($79); //@line 265 "cStringIO.c"
        __label__ = 19; break; //@line 265 "cStringIO.c"
      case 19: // $bb17
        HEAP[$0]=0; //@line 266 "cStringIO.c"
        __label__ = 20; break; //@line 266 "cStringIO.c"
      case 20: // $bb18
        var $80=HEAP[$0]; //@line 240 "cStringIO.c"
        HEAP[$retval]=$80; //@line 240 "cStringIO.c"
        __label__ = 21; break; //@line 240 "cStringIO.c"
      case 21: // $return
        var $retval19=HEAP[$retval]; //@line 240 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 240 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_reset($self, $unused) {
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
        var $1=HEAP[$self_addr]; //@line 275 "cStringIO.c"
        var $2=_IO__opencheck($1); //@line 275 "cStringIO.c"
        var $3=((($2))|0)==0; //@line 275 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 275 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 275 "cStringIO.c"
        __label__ = 3; break; //@line 275 "cStringIO.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 277 "cStringIO.c"
        var $5=(($4+12)&4294967295); //@line 277 "cStringIO.c"
        HEAP[$5]=0; //@line 277 "cStringIO.c"
        var $6=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 279 "cStringIO.c"
        var $7=((($6) + 1)&4294967295); //@line 279 "cStringIO.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$7; //@line 279 "cStringIO.c"
        HEAP[$0]=__Py_NoneStruct; //@line 280 "cStringIO.c"
        __label__ = 3; break; //@line 280 "cStringIO.c"
      case 3: // $bb2
        var $8=HEAP[$0]; //@line 275 "cStringIO.c"
        HEAP[$retval]=$8; //@line 275 "cStringIO.c"
        __label__ = 4; break; //@line 275 "cStringIO.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 275 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 275 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_tell($self, $unused) {
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
        var $1=HEAP[$self_addr]; //@line 288 "cStringIO.c"
        var $2=_IO__opencheck($1); //@line 288 "cStringIO.c"
        var $3=((($2))|0)==0; //@line 288 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 288 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 288 "cStringIO.c"
        __label__ = 5; break; //@line 288 "cStringIO.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 290 "cStringIO.c"
        var $5=(($4+12)&4294967295); //@line 290 "cStringIO.c"
        var $6=HEAP[$5]; //@line 290 "cStringIO.c"
        var $7=((($6))|0) < 0; //@line 290 "cStringIO.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 290 "cStringIO.c"
      case 3: // $bb2
        ___assert_fail(((__str6)&4294967295), ((__str4)&4294967295), 290, ((___PRETTY_FUNCTION___8704)&4294967295)); //@line 290 "cStringIO.c"
        throw "Reached an unreachable! Original .ll line: 1166"; //@line 290 "cStringIO.c"
      case 4: // $bb3
        var $8=HEAP[$self_addr]; //@line 291 "cStringIO.c"
        var $9=(($8+12)&4294967295); //@line 291 "cStringIO.c"
        var $10=HEAP[$9]; //@line 291 "cStringIO.c"
        var $11=_PyInt_FromSsize_t($10); //@line 291 "cStringIO.c"
        HEAP[$0]=$11; //@line 291 "cStringIO.c"
        __label__ = 5; break; //@line 291 "cStringIO.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 288 "cStringIO.c"
        HEAP[$retval]=$12; //@line 288 "cStringIO.c"
        __label__ = 6; break; //@line 288 "cStringIO.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 288 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 288 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_truncate($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pos=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$pos]=-1; //@line 299 "cStringIO.c"
        var $1=HEAP[$self_addr]; //@line 301 "cStringIO.c"
        var $2=_IO__opencheck($1); //@line 301 "cStringIO.c"
        var $3=((($2))|0)==0; //@line 301 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 301 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 301 "cStringIO.c"
        __label__ = 11; break; //@line 301 "cStringIO.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 302 "cStringIO.c"
        var $5=_PyArg_ParseTuple($4, ((__str12)&4294967295), $pos); //@line 302 "cStringIO.c"
        var $6=((($5))|0)==0; //@line 302 "cStringIO.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 302 "cStringIO.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 302 "cStringIO.c"
        __label__ = 11; break; //@line 302 "cStringIO.c"
      case 4: // $bb3
        var $7=HEAP[$args_addr]; //@line 304 "cStringIO.c"
        var $8=_PyTuple_Size($7); //@line 304 "cStringIO.c"
        var $9=((($8))|0)==0; //@line 304 "cStringIO.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 304 "cStringIO.c"
      case 5: // $bb4
        var $10=HEAP[$self_addr]; //@line 306 "cStringIO.c"
        var $11=(($10+12)&4294967295); //@line 306 "cStringIO.c"
        var $12=HEAP[$11]; //@line 306 "cStringIO.c"
        HEAP[$pos]=$12; //@line 306 "cStringIO.c"
        __label__ = 6; break; //@line 306 "cStringIO.c"
      case 6: // $bb5
        var $13=HEAP[$pos]; //@line 309 "cStringIO.c"
        var $14=((($13))|0) < 0; //@line 309 "cStringIO.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 309 "cStringIO.c"
      case 7: // $bb6
        var $15=___errno_location(); //@line 310 "cStringIO.c"
        HEAP[$15]=22; //@line 310 "cStringIO.c"
        var $16=HEAP[_PyExc_IOError]; //@line 311 "cStringIO.c"
        var $17=_PyErr_SetFromErrno($16); //@line 311 "cStringIO.c"
        HEAP[$0]=0; //@line 312 "cStringIO.c"
        __label__ = 11; break; //@line 312 "cStringIO.c"
      case 8: // $bb7
        var $18=HEAP[$self_addr]; //@line 315 "cStringIO.c"
        var $19=(($18+16)&4294967295); //@line 315 "cStringIO.c"
        var $20=HEAP[$19]; //@line 315 "cStringIO.c"
        var $21=HEAP[$pos]; //@line 315 "cStringIO.c"
        var $22=((($20))|0) > ((($21))|0); //@line 315 "cStringIO.c"
        if ($22) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 315 "cStringIO.c"
      case 9: // $bb8
        var $23=HEAP[$pos]; //@line 315 "cStringIO.c"
        var $24=HEAP[$self_addr]; //@line 315 "cStringIO.c"
        var $25=(($24+16)&4294967295); //@line 315 "cStringIO.c"
        HEAP[$25]=$23; //@line 315 "cStringIO.c"
        __label__ = 10; break; //@line 315 "cStringIO.c"
      case 10: // $bb9
        var $26=HEAP[$self_addr]; //@line 316 "cStringIO.c"
        var $27=(($26+16)&4294967295); //@line 316 "cStringIO.c"
        var $28=HEAP[$27]; //@line 316 "cStringIO.c"
        var $29=HEAP[$self_addr]; //@line 316 "cStringIO.c"
        var $30=(($29+12)&4294967295); //@line 316 "cStringIO.c"
        HEAP[$30]=$28; //@line 316 "cStringIO.c"
        var $31=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 318 "cStringIO.c"
        var $32=((($31) + 1)&4294967295); //@line 318 "cStringIO.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$32; //@line 318 "cStringIO.c"
        HEAP[$0]=__Py_NoneStruct; //@line 319 "cStringIO.c"
        __label__ = 11; break; //@line 319 "cStringIO.c"
      case 11: // $bb10
        var $33=HEAP[$0]; //@line 301 "cStringIO.c"
        HEAP[$retval]=$33; //@line 301 "cStringIO.c"
        __label__ = 12; break; //@line 301 "cStringIO.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 301 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 301 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_iternext($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $next=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 326 "cStringIO.c"
        var $2=$1; //@line 326 "cStringIO.c"
        var $3=_IO_readline($2, 0); //@line 326 "cStringIO.c"
        HEAP[$next]=$3; //@line 326 "cStringIO.c"
        var $4=HEAP[$next]; //@line 327 "cStringIO.c"
        var $5=($4)==0; //@line 327 "cStringIO.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 327 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 328 "cStringIO.c"
        __label__ = 7; break; //@line 328 "cStringIO.c"
      case 2: // $bb1
        var $6=HEAP[$next]; //@line 329 "cStringIO.c"
        var $7=$6; //@line 329 "cStringIO.c"
        var $8=(($7+8)&4294967295); //@line 329 "cStringIO.c"
        var $9=HEAP[$8]; //@line 329 "cStringIO.c"
        var $10=((($9))|0)==0; //@line 329 "cStringIO.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 329 "cStringIO.c"
      case 3: // $bb2
        var $11=HEAP[$next]; //@line 330 "cStringIO.c"
        var $12=(($11)&4294967295); //@line 330 "cStringIO.c"
        var $13=HEAP[$12]; //@line 330 "cStringIO.c"
        var $14=((($13) - 1)&4294967295); //@line 330 "cStringIO.c"
        var $15=HEAP[$next]; //@line 330 "cStringIO.c"
        var $16=(($15)&4294967295); //@line 330 "cStringIO.c"
        HEAP[$16]=$14; //@line 330 "cStringIO.c"
        var $17=HEAP[$next]; //@line 330 "cStringIO.c"
        var $18=(($17)&4294967295); //@line 330 "cStringIO.c"
        var $19=HEAP[$18]; //@line 330 "cStringIO.c"
        var $20=((($19))|0)==0; //@line 330 "cStringIO.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 330 "cStringIO.c"
      case 4: // $bb3
        var $21=HEAP[$next]; //@line 330 "cStringIO.c"
        var $22=(($21+4)&4294967295); //@line 330 "cStringIO.c"
        var $23=HEAP[$22]; //@line 330 "cStringIO.c"
        var $24=(($23+24)&4294967295); //@line 330 "cStringIO.c"
        var $25=HEAP[$24]; //@line 330 "cStringIO.c"
        var $26=HEAP[$next]; //@line 330 "cStringIO.c"
        FUNCTION_TABLE[$25]($26); //@line 330 "cStringIO.c"
        __label__ = 5; break; //@line 330 "cStringIO.c"
      case 5: // $bb4
        var $27=HEAP[_PyExc_StopIteration]; //@line 331 "cStringIO.c"
        _PyErr_SetNone($27); //@line 331 "cStringIO.c"
        HEAP[$0]=0; //@line 332 "cStringIO.c"
        __label__ = 7; break; //@line 332 "cStringIO.c"
      case 6: // $bb5
        var $28=HEAP[$next]; //@line 334 "cStringIO.c"
        HEAP[$0]=$28; //@line 334 "cStringIO.c"
        __label__ = 7; break; //@line 334 "cStringIO.c"
      case 7: // $bb6
        var $29=HEAP[$0]; //@line 328 "cStringIO.c"
        HEAP[$retval]=$29; //@line 328 "cStringIO.c"
        __label__ = 8; break; //@line 328 "cStringIO.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 328 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 328 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_seek($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $position=__stackBase__+16;
        var $mode=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$mode]=0; //@line 349 "cStringIO.c"
        var $1=HEAP[$self_addr]; //@line 351 "cStringIO.c"
        var $2=$1; //@line 351 "cStringIO.c"
        var $3=_IO__opencheck($2); //@line 351 "cStringIO.c"
        var $4=((($3))|0)==0; //@line 351 "cStringIO.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 351 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 351 "cStringIO.c"
        __label__ = 11; break; //@line 351 "cStringIO.c"
      case 2: // $bb1
        var $5=HEAP[$args_addr]; //@line 352 "cStringIO.c"
        var $6=_PyArg_ParseTuple($5, ((__str13)&4294967295), $position, $mode); //@line 352 "cStringIO.c"
        var $7=((($6))|0)==0; //@line 352 "cStringIO.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 352 "cStringIO.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 353 "cStringIO.c"
        __label__ = 11; break; //@line 353 "cStringIO.c"
      case 4: // $bb3
        var $8=HEAP[$mode]; //@line 355 "cStringIO.c"
        var $9=((($8))|0)==2; //@line 355 "cStringIO.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 355 "cStringIO.c"
      case 5: // $bb4
        var $10=HEAP[$self_addr]; //@line 356 "cStringIO.c"
        var $11=(($10+16)&4294967295); //@line 356 "cStringIO.c"
        var $12=HEAP[$11]; //@line 356 "cStringIO.c"
        var $13=HEAP[$position]; //@line 356 "cStringIO.c"
        var $14=((($12) + ($13))&4294967295); //@line 356 "cStringIO.c"
        HEAP[$position]=$14; //@line 356 "cStringIO.c"
        __label__ = 8; break; //@line 356 "cStringIO.c"
      case 6: // $bb5
        var $15=HEAP[$mode]; //@line 358 "cStringIO.c"
        var $16=((($15))|0)==1; //@line 358 "cStringIO.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 358 "cStringIO.c"
      case 7: // $bb6
        var $17=HEAP[$self_addr]; //@line 359 "cStringIO.c"
        var $18=(($17+12)&4294967295); //@line 359 "cStringIO.c"
        var $19=HEAP[$18]; //@line 359 "cStringIO.c"
        var $20=HEAP[$position]; //@line 359 "cStringIO.c"
        var $21=((($19) + ($20))&4294967295); //@line 359 "cStringIO.c"
        HEAP[$position]=$21; //@line 359 "cStringIO.c"
        __label__ = 8; break; //@line 359 "cStringIO.c"
      case 8: // $bb7
        var $22=HEAP[$position]; //@line 362 "cStringIO.c"
        var $23=((($22))|0) < 0; //@line 362 "cStringIO.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 362 "cStringIO.c"
      case 9: // $bb8
        HEAP[$position]=0; //@line 362 "cStringIO.c"
        __label__ = 10; break; //@line 362 "cStringIO.c"
      case 10: // $bb9
        var $24=HEAP[$position]; //@line 364 "cStringIO.c"
        var $25=HEAP[$self_addr]; //@line 364 "cStringIO.c"
        var $26=(($25+12)&4294967295); //@line 364 "cStringIO.c"
        HEAP[$26]=$24; //@line 364 "cStringIO.c"
        var $27=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 366 "cStringIO.c"
        var $28=((($27) + 1)&4294967295); //@line 366 "cStringIO.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$28; //@line 366 "cStringIO.c"
        HEAP[$0]=__Py_NoneStruct; //@line 367 "cStringIO.c"
        __label__ = 11; break; //@line 367 "cStringIO.c"
      case 11: // $bb10
        var $29=HEAP[$0]; //@line 351 "cStringIO.c"
        HEAP[$retval]=$29; //@line 351 "cStringIO.c"
        __label__ = 12; break; //@line 351 "cStringIO.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 351 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 351 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _O_cwrite($self, $c, $l) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $c_addr=__stackBase__+4;
        var $l_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $newl=__stackBase__+20;
        var $oself=__stackBase__+24;
        var $newbuf=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$c_addr]=$c;
        HEAP[$l_addr]=$l;
        var $1=HEAP[$self_addr]; //@line 381 "cStringIO.c"
        var $2=$1; //@line 381 "cStringIO.c"
        var $3=_IO__opencheck($2); //@line 381 "cStringIO.c"
        var $4=((($3))|0)==0; //@line 381 "cStringIO.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 381 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 381 "cStringIO.c"
        __label__ = 17; break; //@line 381 "cStringIO.c"
      case 2: // $bb1
        var $5=HEAP[$self_addr]; //@line 382 "cStringIO.c"
        var $6=$5; //@line 382 "cStringIO.c"
        HEAP[$oself]=$6; //@line 382 "cStringIO.c"
        var $7=HEAP[$oself]; //@line 384 "cStringIO.c"
        var $8=(($7+12)&4294967295); //@line 384 "cStringIO.c"
        var $9=HEAP[$8]; //@line 384 "cStringIO.c"
        var $10=HEAP[$l_addr]; //@line 384 "cStringIO.c"
        var $11=((($9) + ($10))&4294967295); //@line 384 "cStringIO.c"
        HEAP[$newl]=$11; //@line 384 "cStringIO.c"
        var $12=HEAP[$oself]; //@line 385 "cStringIO.c"
        var $13=(($12+20)&4294967295); //@line 385 "cStringIO.c"
        var $14=HEAP[$13]; //@line 385 "cStringIO.c"
        var $15=HEAP[$newl]; //@line 385 "cStringIO.c"
        var $16=((($14))|0) <= ((($15))|0); //@line 385 "cStringIO.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 385 "cStringIO.c"
      case 3: // $bb2
        var $17=HEAP[$oself]; //@line 386 "cStringIO.c"
        var $18=(($17+20)&4294967295); //@line 386 "cStringIO.c"
        var $19=HEAP[$18]; //@line 386 "cStringIO.c"
        var $20=((($19) * 2)&4294967295); //@line 386 "cStringIO.c"
        var $21=HEAP[$oself]; //@line 386 "cStringIO.c"
        var $22=(($21+20)&4294967295); //@line 386 "cStringIO.c"
        HEAP[$22]=$20; //@line 386 "cStringIO.c"
        var $23=HEAP[$oself]; //@line 387 "cStringIO.c"
        var $24=(($23+20)&4294967295); //@line 387 "cStringIO.c"
        var $25=HEAP[$24]; //@line 387 "cStringIO.c"
        var $26=HEAP[$newl]; //@line 387 "cStringIO.c"
        var $27=((($25))|0) <= ((($26))|0); //@line 387 "cStringIO.c"
        if ($27) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 387 "cStringIO.c"
      case 4: // $bb3
        var $28=HEAP[$newl]; //@line 388 "cStringIO.c"
        var $29=((($28))|0)==2147483646; //@line 388 "cStringIO.c"
        if ($29) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 388 "cStringIO.c"
      case 5: // $bb4
        ___assert_fail(((__str14)&4294967295), ((__str4)&4294967295), 388, ((___PRETTY_FUNCTION___8812)&4294967295)); //@line 388 "cStringIO.c"
        throw "Reached an unreachable! Original .ll line: 1540"; //@line 388 "cStringIO.c"
      case 6: // $bb5
        var $30=HEAP[$newl]; //@line 389 "cStringIO.c"
        var $31=((($30) + 1)&4294967295); //@line 389 "cStringIO.c"
        var $32=HEAP[$oself]; //@line 389 "cStringIO.c"
        var $33=(($32+20)&4294967295); //@line 389 "cStringIO.c"
        HEAP[$33]=$31; //@line 389 "cStringIO.c"
        __label__ = 7; break; //@line 389 "cStringIO.c"
      case 7: // $bb6
        var $34=HEAP[$oself]; //@line 391 "cStringIO.c"
        var $35=(($34+20)&4294967295); //@line 391 "cStringIO.c"
        var $36=HEAP[$35]; //@line 391 "cStringIO.c"
        var $37=HEAP[$oself]; //@line 391 "cStringIO.c"
        var $38=(($37+8)&4294967295); //@line 391 "cStringIO.c"
        var $39=HEAP[$38]; //@line 391 "cStringIO.c"
        var $40=_realloc($39, $36); //@line 391 "cStringIO.c"
        HEAP[$newbuf]=$40; //@line 391 "cStringIO.c"
        var $41=HEAP[$newbuf]; //@line 392 "cStringIO.c"
        var $42=($41)==0; //@line 392 "cStringIO.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 392 "cStringIO.c"
      case 8: // $bb7
        var $43=HEAP[_PyExc_MemoryError]; //@line 393 "cStringIO.c"
        _PyErr_SetString($43, ((__str15)&4294967295)); //@line 393 "cStringIO.c"
        var $44=HEAP[$oself]; //@line 394 "cStringIO.c"
        var $45=(($44+8)&4294967295); //@line 394 "cStringIO.c"
        var $46=HEAP[$45]; //@line 394 "cStringIO.c"
        _free($46); //@line 394 "cStringIO.c"
        var $47=HEAP[$oself]; //@line 395 "cStringIO.c"
        var $48=(($47+8)&4294967295); //@line 395 "cStringIO.c"
        HEAP[$48]=0; //@line 395 "cStringIO.c"
        var $49=HEAP[$oself]; //@line 396 "cStringIO.c"
        var $50=(($49+12)&4294967295); //@line 396 "cStringIO.c"
        HEAP[$50]=0; //@line 396 "cStringIO.c"
        var $51=HEAP[$oself]; //@line 396 "cStringIO.c"
        var $52=(($51+12)&4294967295); //@line 396 "cStringIO.c"
        var $53=HEAP[$52]; //@line 396 "cStringIO.c"
        var $54=HEAP[$oself]; //@line 396 "cStringIO.c"
        var $55=(($54+20)&4294967295); //@line 396 "cStringIO.c"
        HEAP[$55]=$53; //@line 396 "cStringIO.c"
        HEAP[$0]=-1; //@line 397 "cStringIO.c"
        __label__ = 17; break; //@line 397 "cStringIO.c"
      case 9: // $bb8
        var $56=HEAP[$oself]; //@line 399 "cStringIO.c"
        var $57=(($56+8)&4294967295); //@line 399 "cStringIO.c"
        var $58=HEAP[$newbuf]; //@line 399 "cStringIO.c"
        HEAP[$57]=$58; //@line 399 "cStringIO.c"
        __label__ = 10; break; //@line 399 "cStringIO.c"
      case 10: // $bb9
        var $59=HEAP[$oself]; //@line 402 "cStringIO.c"
        var $60=(($59+16)&4294967295); //@line 402 "cStringIO.c"
        var $61=HEAP[$60]; //@line 402 "cStringIO.c"
        var $62=HEAP[$oself]; //@line 402 "cStringIO.c"
        var $63=(($62+12)&4294967295); //@line 402 "cStringIO.c"
        var $64=HEAP[$63]; //@line 402 "cStringIO.c"
        var $65=((($61))|0) < ((($64))|0); //@line 402 "cStringIO.c"
        if ($65) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 402 "cStringIO.c"
      case 11: // $bb10
        var $66=HEAP[$oself]; //@line 411 "cStringIO.c"
        var $67=(($66+12)&4294967295); //@line 411 "cStringIO.c"
        var $68=HEAP[$67]; //@line 411 "cStringIO.c"
        var $69=HEAP[$oself]; //@line 411 "cStringIO.c"
        var $70=(($69+16)&4294967295); //@line 411 "cStringIO.c"
        var $71=HEAP[$70]; //@line 411 "cStringIO.c"
        var $72=((($68) - ($71))&4294967295); //@line 411 "cStringIO.c"
        var $73=HEAP[$oself]; //@line 411 "cStringIO.c"
        var $74=(($73+8)&4294967295); //@line 411 "cStringIO.c"
        var $75=HEAP[$74]; //@line 411 "cStringIO.c"
        var $76=HEAP[$oself]; //@line 411 "cStringIO.c"
        var $77=(($76+16)&4294967295); //@line 411 "cStringIO.c"
        var $78=HEAP[$77]; //@line 411 "cStringIO.c"
        var $79=(($75+$78)&4294967295); //@line 411 "cStringIO.c"
        _llvm_memset_p0i8_i32($79, 0, $72, 1, 0); //@line 411 "cStringIO.c"
        __label__ = 12; break; //@line 411 "cStringIO.c"
      case 12: // $bb11
        var $80=HEAP[$l_addr]; //@line 415 "cStringIO.c"
        var $81=HEAP[$oself]; //@line 415 "cStringIO.c"
        var $82=(($81+8)&4294967295); //@line 415 "cStringIO.c"
        var $83=HEAP[$82]; //@line 415 "cStringIO.c"
        var $84=HEAP[$oself]; //@line 415 "cStringIO.c"
        var $85=(($84+12)&4294967295); //@line 415 "cStringIO.c"
        var $86=HEAP[$85]; //@line 415 "cStringIO.c"
        var $87=(($83+$86)&4294967295); //@line 415 "cStringIO.c"
        var $88=HEAP[$c_addr]; //@line 415 "cStringIO.c"
        _llvm_memcpy_p0i8_p0i8_i32($87, $88, $80, 1, 0); //@line 415 "cStringIO.c"
        var $89=HEAP[$oself]; //@line 417 "cStringIO.c"
        var $90=(($89+12)&4294967295); //@line 417 "cStringIO.c"
        var $91=HEAP[$90]; //@line 417 "cStringIO.c"
        var $92=HEAP[$l_addr]; //@line 417 "cStringIO.c"
        var $93=((($91) + ($92))&4294967295); //@line 417 "cStringIO.c"
        var $94=((($93))|0)==2147483647; //@line 417 "cStringIO.c"
        if ($94) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 417 "cStringIO.c"
      case 13: // $bb12
        ___assert_fail(((__str16)&4294967295), ((__str4)&4294967295), 417, ((___PRETTY_FUNCTION___8812)&4294967295)); //@line 417 "cStringIO.c"
        throw "Reached an unreachable! Original .ll line: 1641"; //@line 417 "cStringIO.c"
      case 14: // $bb13
        var $95=HEAP[$oself]; //@line 418 "cStringIO.c"
        var $96=(($95+12)&4294967295); //@line 418 "cStringIO.c"
        var $97=HEAP[$96]; //@line 418 "cStringIO.c"
        var $98=HEAP[$l_addr]; //@line 418 "cStringIO.c"
        var $99=((($97) + ($98))&4294967295); //@line 418 "cStringIO.c"
        var $100=HEAP[$oself]; //@line 418 "cStringIO.c"
        var $101=(($100+12)&4294967295); //@line 418 "cStringIO.c"
        HEAP[$101]=$99; //@line 418 "cStringIO.c"
        var $102=HEAP[$oself]; //@line 420 "cStringIO.c"
        var $103=(($102+16)&4294967295); //@line 420 "cStringIO.c"
        var $104=HEAP[$103]; //@line 420 "cStringIO.c"
        var $105=HEAP[$oself]; //@line 420 "cStringIO.c"
        var $106=(($105+12)&4294967295); //@line 420 "cStringIO.c"
        var $107=HEAP[$106]; //@line 420 "cStringIO.c"
        var $108=((($104))|0) < ((($107))|0); //@line 420 "cStringIO.c"
        if ($108) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 420 "cStringIO.c"
      case 15: // $bb14
        var $109=HEAP[$oself]; //@line 421 "cStringIO.c"
        var $110=(($109+12)&4294967295); //@line 421 "cStringIO.c"
        var $111=HEAP[$110]; //@line 421 "cStringIO.c"
        var $112=HEAP[$oself]; //@line 421 "cStringIO.c"
        var $113=(($112+16)&4294967295); //@line 421 "cStringIO.c"
        HEAP[$113]=$111; //@line 421 "cStringIO.c"
        __label__ = 16; break; //@line 421 "cStringIO.c"
      case 16: // $bb15
        var $114=HEAP[$l_addr]; //@line 424 "cStringIO.c"
        HEAP[$0]=$114; //@line 424 "cStringIO.c"
        __label__ = 17; break; //@line 424 "cStringIO.c"
      case 17: // $bb16
        var $115=HEAP[$0]; //@line 381 "cStringIO.c"
        HEAP[$retval]=$115; //@line 381 "cStringIO.c"
        __label__ = 18; break; //@line 381 "cStringIO.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 381 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 381 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _O_write($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $c=__stackBase__+16;
        var $l=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 432 "cStringIO.c"
        var $2=_PyArg_ParseTuple($1, ((__str17)&4294967295), $c, $l); //@line 432 "cStringIO.c"
        var $3=((($2))|0)==0; //@line 432 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 432 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 432 "cStringIO.c"
        __label__ = 5; break; //@line 432 "cStringIO.c"
      case 2: // $bb1
        var $4=HEAP[$l]; //@line 434 "cStringIO.c"
        var $5=HEAP[$c]; //@line 434 "cStringIO.c"
        var $6=HEAP[$self_addr]; //@line 434 "cStringIO.c"
        var $7=$6; //@line 434 "cStringIO.c"
        var $8=_O_cwrite($7, $5, $4); //@line 434 "cStringIO.c"
        var $9=((($8))|0) < 0; //@line 434 "cStringIO.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 434 "cStringIO.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 434 "cStringIO.c"
        __label__ = 5; break; //@line 434 "cStringIO.c"
      case 4: // $bb3
        var $10=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 436 "cStringIO.c"
        var $11=((($10) + 1)&4294967295); //@line 436 "cStringIO.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$11; //@line 436 "cStringIO.c"
        HEAP[$0]=__Py_NoneStruct; //@line 437 "cStringIO.c"
        __label__ = 5; break; //@line 437 "cStringIO.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 432 "cStringIO.c"
        HEAP[$retval]=$12; //@line 432 "cStringIO.c"
        __label__ = 6; break; //@line 432 "cStringIO.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 432 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 432 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _O_close($self, $unused) {
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
        var $1=HEAP[$self_addr]; //@line 444 "cStringIO.c"
        var $2=(($1+8)&4294967295); //@line 444 "cStringIO.c"
        var $3=HEAP[$2]; //@line 444 "cStringIO.c"
        var $4=($3)!=0; //@line 444 "cStringIO.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 444 "cStringIO.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 444 "cStringIO.c"
        var $6=(($5+8)&4294967295); //@line 444 "cStringIO.c"
        var $7=HEAP[$6]; //@line 444 "cStringIO.c"
        _free($7); //@line 444 "cStringIO.c"
        __label__ = 2; break; //@line 444 "cStringIO.c"
      case 2: // $bb1
        var $8=HEAP[$self_addr]; //@line 445 "cStringIO.c"
        var $9=(($8+8)&4294967295); //@line 445 "cStringIO.c"
        HEAP[$9]=0; //@line 445 "cStringIO.c"
        var $10=HEAP[$self_addr]; //@line 447 "cStringIO.c"
        var $11=(($10+20)&4294967295); //@line 447 "cStringIO.c"
        HEAP[$11]=0; //@line 447 "cStringIO.c"
        var $12=HEAP[$self_addr]; //@line 447 "cStringIO.c"
        var $13=(($12+20)&4294967295); //@line 447 "cStringIO.c"
        var $14=HEAP[$13]; //@line 447 "cStringIO.c"
        var $15=HEAP[$self_addr]; //@line 447 "cStringIO.c"
        var $16=(($15+16)&4294967295); //@line 447 "cStringIO.c"
        HEAP[$16]=$14; //@line 447 "cStringIO.c"
        var $17=HEAP[$self_addr]; //@line 447 "cStringIO.c"
        var $18=(($17+16)&4294967295); //@line 447 "cStringIO.c"
        var $19=HEAP[$18]; //@line 447 "cStringIO.c"
        var $20=HEAP[$self_addr]; //@line 447 "cStringIO.c"
        var $21=(($20+12)&4294967295); //@line 447 "cStringIO.c"
        HEAP[$21]=$19; //@line 447 "cStringIO.c"
        var $22=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 449 "cStringIO.c"
        var $23=((($22) + 1)&4294967295); //@line 449 "cStringIO.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$23; //@line 449 "cStringIO.c"
        HEAP[$0]=__Py_NoneStruct; //@line 450 "cStringIO.c"
        var $24=HEAP[$0]; //@line 450 "cStringIO.c"
        HEAP[$retval]=$24; //@line 450 "cStringIO.c"
        __label__ = 3; break; //@line 450 "cStringIO.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 450 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 450 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _O_writelines($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $it=__stackBase__+16;
        var $s=__stackBase__+20;
        var $n=__stackBase__+24;
        var $c=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 462 "cStringIO.c"
        var $2=_PyObject_GetIter($1); //@line 462 "cStringIO.c"
        HEAP[$it]=$2; //@line 462 "cStringIO.c"
        var $3=HEAP[$it]; //@line 463 "cStringIO.c"
        var $4=($3)==0; //@line 463 "cStringIO.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 463 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 464 "cStringIO.c"
        __label__ = 23; break; //@line 464 "cStringIO.c"
      case 2: // $bb1
        __label__ = 17; break; //@line 464 "cStringIO.c"
      case 3: // $bb2
        var $5=HEAP[$s]; //@line 468 "cStringIO.c"
        var $6=_PyString_AsStringAndSize($5, $c, $n); //@line 468 "cStringIO.c"
        var $7=((($6))|0)==-1; //@line 468 "cStringIO.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 468 "cStringIO.c"
      case 4: // $bb3
        var $8=HEAP[$it]; //@line 469 "cStringIO.c"
        var $9=(($8)&4294967295); //@line 469 "cStringIO.c"
        var $10=HEAP[$9]; //@line 469 "cStringIO.c"
        var $11=((($10) - 1)&4294967295); //@line 469 "cStringIO.c"
        var $12=HEAP[$it]; //@line 469 "cStringIO.c"
        var $13=(($12)&4294967295); //@line 469 "cStringIO.c"
        HEAP[$13]=$11; //@line 469 "cStringIO.c"
        var $14=HEAP[$it]; //@line 469 "cStringIO.c"
        var $15=(($14)&4294967295); //@line 469 "cStringIO.c"
        var $16=HEAP[$15]; //@line 469 "cStringIO.c"
        var $17=((($16))|0)==0; //@line 469 "cStringIO.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 469 "cStringIO.c"
      case 5: // $bb4
        var $18=HEAP[$it]; //@line 469 "cStringIO.c"
        var $19=(($18+4)&4294967295); //@line 469 "cStringIO.c"
        var $20=HEAP[$19]; //@line 469 "cStringIO.c"
        var $21=(($20+24)&4294967295); //@line 469 "cStringIO.c"
        var $22=HEAP[$21]; //@line 469 "cStringIO.c"
        var $23=HEAP[$it]; //@line 469 "cStringIO.c"
        FUNCTION_TABLE[$22]($23); //@line 469 "cStringIO.c"
        __label__ = 6; break; //@line 469 "cStringIO.c"
      case 6: // $bb5
        var $24=HEAP[$s]; //@line 470 "cStringIO.c"
        var $25=(($24)&4294967295); //@line 470 "cStringIO.c"
        var $26=HEAP[$25]; //@line 470 "cStringIO.c"
        var $27=((($26) - 1)&4294967295); //@line 470 "cStringIO.c"
        var $28=HEAP[$s]; //@line 470 "cStringIO.c"
        var $29=(($28)&4294967295); //@line 470 "cStringIO.c"
        HEAP[$29]=$27; //@line 470 "cStringIO.c"
        var $30=HEAP[$s]; //@line 470 "cStringIO.c"
        var $31=(($30)&4294967295); //@line 470 "cStringIO.c"
        var $32=HEAP[$31]; //@line 470 "cStringIO.c"
        var $33=((($32))|0)==0; //@line 470 "cStringIO.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 470 "cStringIO.c"
      case 7: // $bb6
        var $34=HEAP[$s]; //@line 470 "cStringIO.c"
        var $35=(($34+4)&4294967295); //@line 470 "cStringIO.c"
        var $36=HEAP[$35]; //@line 470 "cStringIO.c"
        var $37=(($36+24)&4294967295); //@line 470 "cStringIO.c"
        var $38=HEAP[$37]; //@line 470 "cStringIO.c"
        var $39=HEAP[$s]; //@line 470 "cStringIO.c"
        FUNCTION_TABLE[$38]($39); //@line 470 "cStringIO.c"
        __label__ = 8; break; //@line 470 "cStringIO.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 471 "cStringIO.c"
        __label__ = 23; break; //@line 471 "cStringIO.c"
      case 9: // $bb8
        var $40=HEAP[$n]; //@line 473 "cStringIO.c"
        var $41=HEAP[$c]; //@line 473 "cStringIO.c"
        var $42=HEAP[$self_addr]; //@line 473 "cStringIO.c"
        var $43=$42; //@line 473 "cStringIO.c"
        var $44=_O_cwrite($43, $41, $40); //@line 473 "cStringIO.c"
        var $45=((($44))|0)==-1; //@line 473 "cStringIO.c"
        if ($45) { __label__ = 10; break; } else { __label__ = 15; break; } //@line 473 "cStringIO.c"
      case 10: // $bb9
        var $46=HEAP[$it]; //@line 474 "cStringIO.c"
        var $47=(($46)&4294967295); //@line 474 "cStringIO.c"
        var $48=HEAP[$47]; //@line 474 "cStringIO.c"
        var $49=((($48) - 1)&4294967295); //@line 474 "cStringIO.c"
        var $50=HEAP[$it]; //@line 474 "cStringIO.c"
        var $51=(($50)&4294967295); //@line 474 "cStringIO.c"
        HEAP[$51]=$49; //@line 474 "cStringIO.c"
        var $52=HEAP[$it]; //@line 474 "cStringIO.c"
        var $53=(($52)&4294967295); //@line 474 "cStringIO.c"
        var $54=HEAP[$53]; //@line 474 "cStringIO.c"
        var $55=((($54))|0)==0; //@line 474 "cStringIO.c"
        if ($55) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 474 "cStringIO.c"
      case 11: // $bb10
        var $56=HEAP[$it]; //@line 474 "cStringIO.c"
        var $57=(($56+4)&4294967295); //@line 474 "cStringIO.c"
        var $58=HEAP[$57]; //@line 474 "cStringIO.c"
        var $59=(($58+24)&4294967295); //@line 474 "cStringIO.c"
        var $60=HEAP[$59]; //@line 474 "cStringIO.c"
        var $61=HEAP[$it]; //@line 474 "cStringIO.c"
        FUNCTION_TABLE[$60]($61); //@line 474 "cStringIO.c"
        __label__ = 12; break; //@line 474 "cStringIO.c"
      case 12: // $bb11
        var $62=HEAP[$s]; //@line 475 "cStringIO.c"
        var $63=(($62)&4294967295); //@line 475 "cStringIO.c"
        var $64=HEAP[$63]; //@line 475 "cStringIO.c"
        var $65=((($64) - 1)&4294967295); //@line 475 "cStringIO.c"
        var $66=HEAP[$s]; //@line 475 "cStringIO.c"
        var $67=(($66)&4294967295); //@line 475 "cStringIO.c"
        HEAP[$67]=$65; //@line 475 "cStringIO.c"
        var $68=HEAP[$s]; //@line 475 "cStringIO.c"
        var $69=(($68)&4294967295); //@line 475 "cStringIO.c"
        var $70=HEAP[$69]; //@line 475 "cStringIO.c"
        var $71=((($70))|0)==0; //@line 475 "cStringIO.c"
        if ($71) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 475 "cStringIO.c"
      case 13: // $bb12
        var $72=HEAP[$s]; //@line 475 "cStringIO.c"
        var $73=(($72+4)&4294967295); //@line 475 "cStringIO.c"
        var $74=HEAP[$73]; //@line 475 "cStringIO.c"
        var $75=(($74+24)&4294967295); //@line 475 "cStringIO.c"
        var $76=HEAP[$75]; //@line 475 "cStringIO.c"
        var $77=HEAP[$s]; //@line 475 "cStringIO.c"
        FUNCTION_TABLE[$76]($77); //@line 475 "cStringIO.c"
        __label__ = 14; break; //@line 475 "cStringIO.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 476 "cStringIO.c"
        __label__ = 23; break; //@line 476 "cStringIO.c"
      case 15: // $bb14
        var $78=HEAP[$s]; //@line 478 "cStringIO.c"
        var $79=(($78)&4294967295); //@line 478 "cStringIO.c"
        var $80=HEAP[$79]; //@line 478 "cStringIO.c"
        var $81=((($80) - 1)&4294967295); //@line 478 "cStringIO.c"
        var $82=HEAP[$s]; //@line 478 "cStringIO.c"
        var $83=(($82)&4294967295); //@line 478 "cStringIO.c"
        HEAP[$83]=$81; //@line 478 "cStringIO.c"
        var $84=HEAP[$s]; //@line 478 "cStringIO.c"
        var $85=(($84)&4294967295); //@line 478 "cStringIO.c"
        var $86=HEAP[$85]; //@line 478 "cStringIO.c"
        var $87=((($86))|0)==0; //@line 478 "cStringIO.c"
        if ($87) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 478 "cStringIO.c"
      case 16: // $bb15
        var $88=HEAP[$s]; //@line 478 "cStringIO.c"
        var $89=(($88+4)&4294967295); //@line 478 "cStringIO.c"
        var $90=HEAP[$89]; //@line 478 "cStringIO.c"
        var $91=(($90+24)&4294967295); //@line 478 "cStringIO.c"
        var $92=HEAP[$91]; //@line 478 "cStringIO.c"
        var $93=HEAP[$s]; //@line 478 "cStringIO.c"
        FUNCTION_TABLE[$92]($93); //@line 478 "cStringIO.c"
        __label__ = 17; break; //@line 478 "cStringIO.c"
      case 17: // $bb16
        var $94=HEAP[$it]; //@line 465 "cStringIO.c"
        var $95=_PyIter_Next($94); //@line 465 "cStringIO.c"
        HEAP[$s]=$95; //@line 465 "cStringIO.c"
        var $96=HEAP[$s]; //@line 465 "cStringIO.c"
        var $97=($96)!=0; //@line 465 "cStringIO.c"
        if ($97) { __label__ = 3; break; } else { __label__ = 18; break; } //@line 465 "cStringIO.c"
      case 18: // $bb17
        var $98=HEAP[$it]; //@line 481 "cStringIO.c"
        var $99=(($98)&4294967295); //@line 481 "cStringIO.c"
        var $100=HEAP[$99]; //@line 481 "cStringIO.c"
        var $101=((($100) - 1)&4294967295); //@line 481 "cStringIO.c"
        var $102=HEAP[$it]; //@line 481 "cStringIO.c"
        var $103=(($102)&4294967295); //@line 481 "cStringIO.c"
        HEAP[$103]=$101; //@line 481 "cStringIO.c"
        var $104=HEAP[$it]; //@line 481 "cStringIO.c"
        var $105=(($104)&4294967295); //@line 481 "cStringIO.c"
        var $106=HEAP[$105]; //@line 481 "cStringIO.c"
        var $107=((($106))|0)==0; //@line 481 "cStringIO.c"
        if ($107) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 481 "cStringIO.c"
      case 19: // $bb18
        var $108=HEAP[$it]; //@line 481 "cStringIO.c"
        var $109=(($108+4)&4294967295); //@line 481 "cStringIO.c"
        var $110=HEAP[$109]; //@line 481 "cStringIO.c"
        var $111=(($110+24)&4294967295); //@line 481 "cStringIO.c"
        var $112=HEAP[$111]; //@line 481 "cStringIO.c"
        var $113=HEAP[$it]; //@line 481 "cStringIO.c"
        FUNCTION_TABLE[$112]($113); //@line 481 "cStringIO.c"
        __label__ = 20; break; //@line 481 "cStringIO.c"
      case 20: // $bb19
        var $114=_PyErr_Occurred(); //@line 484 "cStringIO.c"
        var $115=($114)!=0; //@line 484 "cStringIO.c"
        if ($115) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 484 "cStringIO.c"
      case 21: // $bb20
        HEAP[$0]=0; //@line 485 "cStringIO.c"
        __label__ = 23; break; //@line 485 "cStringIO.c"
      case 22: // $bb21
        var $116=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 487 "cStringIO.c"
        var $117=((($116) + 1)&4294967295); //@line 487 "cStringIO.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$117; //@line 487 "cStringIO.c"
        HEAP[$0]=__Py_NoneStruct; //@line 487 "cStringIO.c"
        __label__ = 23; break; //@line 487 "cStringIO.c"
      case 23: // $bb22
        var $118=HEAP[$0]; //@line 464 "cStringIO.c"
        HEAP[$retval]=$118; //@line 464 "cStringIO.c"
        __label__ = 24; break; //@line 464 "cStringIO.c"
      case 24: // $return
        var $retval23=HEAP[$retval]; //@line 464 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 464 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _O_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 518 "cStringIO.c"
        var $1=(($0+8)&4294967295); //@line 518 "cStringIO.c"
        var $2=HEAP[$1]; //@line 518 "cStringIO.c"
        var $3=($2)!=0; //@line 518 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 518 "cStringIO.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 519 "cStringIO.c"
        var $5=(($4+8)&4294967295); //@line 519 "cStringIO.c"
        var $6=HEAP[$5]; //@line 519 "cStringIO.c"
        _free($6); //@line 519 "cStringIO.c"
        __label__ = 2; break; //@line 519 "cStringIO.c"
      case 2: // $bb1
        var $7=HEAP[$self_addr]; //@line 520 "cStringIO.c"
        var $8=$7; //@line 520 "cStringIO.c"
        _PyObject_Free($8); //@line 520 "cStringIO.c"
        __label__ = 3; break; //@line 521 "cStringIO.c"
      case 3: // $return
        STACKTOP = __stackBase__;
        return; //@line 521 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _newOobject($size) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $self=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$size_addr]=$size;
        var $1=__PyObject_New(_Otype); //@line 563 "cStringIO.c"
        var $2=$1; //@line 563 "cStringIO.c"
        HEAP[$self]=$2; //@line 563 "cStringIO.c"
        var $3=HEAP[$self]; //@line 564 "cStringIO.c"
        var $4=($3)==0; //@line 564 "cStringIO.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 564 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 565 "cStringIO.c"
        __label__ = 7; break; //@line 565 "cStringIO.c"
      case 2: // $bb1
        var $5=HEAP[$self]; //@line 566 "cStringIO.c"
        var $6=(($5+12)&4294967295); //@line 566 "cStringIO.c"
        HEAP[$6]=0; //@line 566 "cStringIO.c"
        var $7=HEAP[$self]; //@line 567 "cStringIO.c"
        var $8=(($7+16)&4294967295); //@line 567 "cStringIO.c"
        HEAP[$8]=0; //@line 567 "cStringIO.c"
        var $9=HEAP[$self]; //@line 568 "cStringIO.c"
        var $10=(($9+24)&4294967295); //@line 568 "cStringIO.c"
        HEAP[$10]=0; //@line 568 "cStringIO.c"
        var $11=HEAP[$size_addr]; //@line 570 "cStringIO.c"
        var $12=_malloc($11); //@line 570 "cStringIO.c"
        var $13=HEAP[$self]; //@line 570 "cStringIO.c"
        var $14=(($13+8)&4294967295); //@line 570 "cStringIO.c"
        HEAP[$14]=$12; //@line 570 "cStringIO.c"
        var $15=HEAP[$self]; //@line 571 "cStringIO.c"
        var $16=(($15+8)&4294967295); //@line 571 "cStringIO.c"
        var $17=HEAP[$16]; //@line 571 "cStringIO.c"
        var $18=($17)==0; //@line 571 "cStringIO.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 571 "cStringIO.c"
      case 3: // $bb2
        var $19=HEAP[_PyExc_MemoryError]; //@line 572 "cStringIO.c"
        _PyErr_SetString($19, ((__str15)&4294967295)); //@line 572 "cStringIO.c"
        var $20=HEAP[$self]; //@line 573 "cStringIO.c"
        var $21=(($20+20)&4294967295); //@line 573 "cStringIO.c"
        HEAP[$21]=0; //@line 573 "cStringIO.c"
        var $22=HEAP[$self]; //@line 574 "cStringIO.c"
        var $23=$22; //@line 574 "cStringIO.c"
        var $24=(($23)&4294967295); //@line 574 "cStringIO.c"
        var $25=HEAP[$24]; //@line 574 "cStringIO.c"
        var $26=((($25) - 1)&4294967295); //@line 574 "cStringIO.c"
        var $27=(($23)&4294967295); //@line 574 "cStringIO.c"
        HEAP[$27]=$26; //@line 574 "cStringIO.c"
        var $28=(($23)&4294967295); //@line 574 "cStringIO.c"
        var $29=HEAP[$28]; //@line 574 "cStringIO.c"
        var $30=((($29))|0)==0; //@line 574 "cStringIO.c"
        if ($30) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 574 "cStringIO.c"
      case 4: // $bb3
        var $31=HEAP[$self]; //@line 574 "cStringIO.c"
        var $32=$31; //@line 574 "cStringIO.c"
        var $33=(($32+4)&4294967295); //@line 574 "cStringIO.c"
        var $34=HEAP[$33]; //@line 574 "cStringIO.c"
        var $35=(($34+24)&4294967295); //@line 574 "cStringIO.c"
        var $36=HEAP[$35]; //@line 574 "cStringIO.c"
        var $37=HEAP[$self]; //@line 574 "cStringIO.c"
        var $38=$37; //@line 574 "cStringIO.c"
        FUNCTION_TABLE[$36]($38); //@line 574 "cStringIO.c"
        __label__ = 5; break; //@line 574 "cStringIO.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 575 "cStringIO.c"
        __label__ = 7; break; //@line 575 "cStringIO.c"
      case 6: // $bb5
        var $39=HEAP[$self]; //@line 578 "cStringIO.c"
        var $40=(($39+20)&4294967295); //@line 578 "cStringIO.c"
        var $41=HEAP[$size_addr]; //@line 578 "cStringIO.c"
        HEAP[$40]=$41; //@line 578 "cStringIO.c"
        var $42=HEAP[$self]; //@line 579 "cStringIO.c"
        var $43=$42; //@line 579 "cStringIO.c"
        HEAP[$0]=$43; //@line 579 "cStringIO.c"
        __label__ = 7; break; //@line 579 "cStringIO.c"
      case 7: // $bb6
        var $44=HEAP[$0]; //@line 565 "cStringIO.c"
        HEAP[$retval]=$44; //@line 565 "cStringIO.c"
        __label__ = 8; break; //@line 565 "cStringIO.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 565 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 565 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _I_close($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $unused_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_py_tmp=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$unused_addr]=$unused;
        var $1=HEAP[$self_addr]; //@line 587 "cStringIO.c"
        var $2=(($1+20)&4294967295); //@line 587 "cStringIO.c"
        var $3=HEAP[$2]; //@line 587 "cStringIO.c"
        var $4=($3)!=0; //@line 587 "cStringIO.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 587 "cStringIO.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 587 "cStringIO.c"
        var $6=(($5+20)&4294967295); //@line 587 "cStringIO.c"
        var $7=HEAP[$6]; //@line 587 "cStringIO.c"
        HEAP[$_py_tmp]=$7; //@line 587 "cStringIO.c"
        var $8=HEAP[$self_addr]; //@line 587 "cStringIO.c"
        var $9=(($8+20)&4294967295); //@line 587 "cStringIO.c"
        HEAP[$9]=0; //@line 587 "cStringIO.c"
        var $10=HEAP[$_py_tmp]; //@line 587 "cStringIO.c"
        var $11=(($10)&4294967295); //@line 587 "cStringIO.c"
        var $12=HEAP[$11]; //@line 587 "cStringIO.c"
        var $13=((($12) - 1)&4294967295); //@line 587 "cStringIO.c"
        var $14=HEAP[$_py_tmp]; //@line 587 "cStringIO.c"
        var $15=(($14)&4294967295); //@line 587 "cStringIO.c"
        HEAP[$15]=$13; //@line 587 "cStringIO.c"
        var $16=HEAP[$_py_tmp]; //@line 587 "cStringIO.c"
        var $17=(($16)&4294967295); //@line 587 "cStringIO.c"
        var $18=HEAP[$17]; //@line 587 "cStringIO.c"
        var $19=((($18))|0)==0; //@line 587 "cStringIO.c"
        if ($19) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 587 "cStringIO.c"
      case 2: // $bb1
        var $20=HEAP[$_py_tmp]; //@line 587 "cStringIO.c"
        var $21=(($20+4)&4294967295); //@line 587 "cStringIO.c"
        var $22=HEAP[$21]; //@line 587 "cStringIO.c"
        var $23=(($22+24)&4294967295); //@line 587 "cStringIO.c"
        var $24=HEAP[$23]; //@line 587 "cStringIO.c"
        var $25=HEAP[$_py_tmp]; //@line 587 "cStringIO.c"
        FUNCTION_TABLE[$24]($25); //@line 587 "cStringIO.c"
        __label__ = 3; break; //@line 587 "cStringIO.c"
      case 3: // $bb2
        var $26=HEAP[$self_addr]; //@line 588 "cStringIO.c"
        var $27=(($26+8)&4294967295); //@line 588 "cStringIO.c"
        HEAP[$27]=0; //@line 588 "cStringIO.c"
        var $28=HEAP[$self_addr]; //@line 590 "cStringIO.c"
        var $29=(($28+16)&4294967295); //@line 590 "cStringIO.c"
        HEAP[$29]=0; //@line 590 "cStringIO.c"
        var $30=HEAP[$self_addr]; //@line 590 "cStringIO.c"
        var $31=(($30+16)&4294967295); //@line 590 "cStringIO.c"
        var $32=HEAP[$31]; //@line 590 "cStringIO.c"
        var $33=HEAP[$self_addr]; //@line 590 "cStringIO.c"
        var $34=(($33+12)&4294967295); //@line 590 "cStringIO.c"
        HEAP[$34]=$32; //@line 590 "cStringIO.c"
        var $35=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 592 "cStringIO.c"
        var $36=((($35) + 1)&4294967295); //@line 592 "cStringIO.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$36; //@line 592 "cStringIO.c"
        HEAP[$0]=__Py_NoneStruct; //@line 593 "cStringIO.c"
        var $37=HEAP[$0]; //@line 593 "cStringIO.c"
        HEAP[$retval]=$37; //@line 593 "cStringIO.c"
        __label__ = 4; break; //@line 593 "cStringIO.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 593 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 593 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _I_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 616 "cStringIO.c"
        var $1=(($0+20)&4294967295); //@line 616 "cStringIO.c"
        var $2=HEAP[$1]; //@line 616 "cStringIO.c"
        var $3=($2)!=0; //@line 616 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 616 "cStringIO.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 616 "cStringIO.c"
        var $5=(($4+20)&4294967295); //@line 616 "cStringIO.c"
        var $6=HEAP[$5]; //@line 616 "cStringIO.c"
        var $7=(($6)&4294967295); //@line 616 "cStringIO.c"
        var $8=HEAP[$7]; //@line 616 "cStringIO.c"
        var $9=((($8) - 1)&4294967295); //@line 616 "cStringIO.c"
        var $10=(($6)&4294967295); //@line 616 "cStringIO.c"
        HEAP[$10]=$9; //@line 616 "cStringIO.c"
        var $11=(($6)&4294967295); //@line 616 "cStringIO.c"
        var $12=HEAP[$11]; //@line 616 "cStringIO.c"
        var $13=((($12))|0)==0; //@line 616 "cStringIO.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 616 "cStringIO.c"
      case 2: // $bb1
        var $14=HEAP[$self_addr]; //@line 616 "cStringIO.c"
        var $15=(($14+20)&4294967295); //@line 616 "cStringIO.c"
        var $16=HEAP[$15]; //@line 616 "cStringIO.c"
        var $17=(($16+4)&4294967295); //@line 616 "cStringIO.c"
        var $18=HEAP[$17]; //@line 616 "cStringIO.c"
        var $19=(($18+24)&4294967295); //@line 616 "cStringIO.c"
        var $20=HEAP[$19]; //@line 616 "cStringIO.c"
        var $21=HEAP[$self_addr]; //@line 616 "cStringIO.c"
        var $22=(($21+20)&4294967295); //@line 616 "cStringIO.c"
        var $23=HEAP[$22]; //@line 616 "cStringIO.c"
        FUNCTION_TABLE[$20]($23); //@line 616 "cStringIO.c"
        __label__ = 3; break; //@line 616 "cStringIO.c"
      case 3: // $bb2
        var $24=HEAP[$self_addr]; //@line 617 "cStringIO.c"
        var $25=$24; //@line 617 "cStringIO.c"
        _PyObject_Free($25); //@line 617 "cStringIO.c"
        __label__ = 4; break; //@line 618 "cStringIO.c"
      case 4: // $return
        STACKTOP = __stackBase__;
        return; //@line 618 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _newIobject($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $self=__stackBase__+12;
        var $buf=__stackBase__+16;
        var $size=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        var $1=HEAP[$s_addr]; //@line 664 "cStringIO.c"
        var $2=_PyObject_AsReadBuffer($1, $buf, $size); //@line 664 "cStringIO.c"
        var $3=((($2))|0)!=0; //@line 664 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 664 "cStringIO.c"
      case 1: // $bb
        var $4=HEAP[$s_addr]; //@line 665 "cStringIO.c"
        var $5=(($4+4)&4294967295); //@line 665 "cStringIO.c"
        var $6=HEAP[$5]; //@line 665 "cStringIO.c"
        var $7=(($6+12)&4294967295); //@line 665 "cStringIO.c"
        var $8=HEAP[$7]; //@line 665 "cStringIO.c"
        var $9=HEAP[_PyExc_TypeError]; //@line 665 "cStringIO.c"
        var $10=_PyErr_Format($9, ((__str35)&4294967295), $8); //@line 665 "cStringIO.c"
        HEAP[$0]=0; //@line 667 "cStringIO.c"
        __label__ = 5; break; //@line 667 "cStringIO.c"
      case 2: // $bb2
        var $11=__PyObject_New(_Itype); //@line 670 "cStringIO.c"
        var $12=$11; //@line 670 "cStringIO.c"
        HEAP[$self]=$12; //@line 670 "cStringIO.c"
        var $13=HEAP[$self]; //@line 671 "cStringIO.c"
        var $14=($13)==0; //@line 671 "cStringIO.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 671 "cStringIO.c"
      case 3: // $bb3
        HEAP[$0]=0; //@line 671 "cStringIO.c"
        __label__ = 5; break; //@line 671 "cStringIO.c"
      case 4: // $bb4
        var $15=HEAP[$s_addr]; //@line 672 "cStringIO.c"
        var $16=(($15)&4294967295); //@line 672 "cStringIO.c"
        var $17=HEAP[$16]; //@line 672 "cStringIO.c"
        var $18=((($17) + 1)&4294967295); //@line 672 "cStringIO.c"
        var $19=HEAP[$s_addr]; //@line 672 "cStringIO.c"
        var $20=(($19)&4294967295); //@line 672 "cStringIO.c"
        HEAP[$20]=$18; //@line 672 "cStringIO.c"
        var $21=HEAP[$buf]; //@line 673 "cStringIO.c"
        var $22=HEAP[$self]; //@line 673 "cStringIO.c"
        var $23=(($22+8)&4294967295); //@line 673 "cStringIO.c"
        HEAP[$23]=$21; //@line 673 "cStringIO.c"
        var $24=HEAP[$size]; //@line 674 "cStringIO.c"
        var $25=HEAP[$self]; //@line 674 "cStringIO.c"
        var $26=(($25+16)&4294967295); //@line 674 "cStringIO.c"
        HEAP[$26]=$24; //@line 674 "cStringIO.c"
        var $27=HEAP[$self]; //@line 675 "cStringIO.c"
        var $28=(($27+20)&4294967295); //@line 675 "cStringIO.c"
        var $29=HEAP[$s_addr]; //@line 675 "cStringIO.c"
        HEAP[$28]=$29; //@line 675 "cStringIO.c"
        var $30=HEAP[$self]; //@line 676 "cStringIO.c"
        var $31=(($30+12)&4294967295); //@line 676 "cStringIO.c"
        HEAP[$31]=0; //@line 676 "cStringIO.c"
        var $32=HEAP[$self]; //@line 678 "cStringIO.c"
        var $33=$32; //@line 678 "cStringIO.c"
        HEAP[$0]=$33; //@line 678 "cStringIO.c"
        __label__ = 5; break; //@line 678 "cStringIO.c"
      case 5: // $bb5
        var $34=HEAP[$0]; //@line 667 "cStringIO.c"
        HEAP[$retval]=$34; //@line 667 "cStringIO.c"
        __label__ = 6; break; //@line 667 "cStringIO.c"
      case 6: // $return
        var $retval6=HEAP[$retval]; //@line 667 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 667 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _IO_StringIO($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$s]=0; //@line 690 "cStringIO.c"
        var $1=HEAP[$args_addr]; //@line 692 "cStringIO.c"
        var $2=_PyArg_UnpackTuple($1, ((__str36)&4294967295), 0, 1, $s); //@line 692 "cStringIO.c"
        var $3=((($2))|0)==0; //@line 692 "cStringIO.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 692 "cStringIO.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 692 "cStringIO.c"
        __label__ = 5; break; //@line 692 "cStringIO.c"
      case 2: // $bb1
        var $4=HEAP[$s]; //@line 694 "cStringIO.c"
        var $5=($4)!=0; //@line 694 "cStringIO.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 694 "cStringIO.c"
      case 3: // $bb2
        var $6=HEAP[$s]; //@line 694 "cStringIO.c"
        var $7=_newIobject($6); //@line 694 "cStringIO.c"
        HEAP[$0]=$7; //@line 694 "cStringIO.c"
        __label__ = 5; break; //@line 694 "cStringIO.c"
      case 4: // $bb3
        var $8=_newOobject(128); //@line 695 "cStringIO.c"
        HEAP[$0]=$8; //@line 695 "cStringIO.c"
        __label__ = 5; break; //@line 695 "cStringIO.c"
      case 5: // $bb4
        var $9=HEAP[$0]; //@line 692 "cStringIO.c"
        HEAP[$retval]=$9; //@line 692 "cStringIO.c"
        __label__ = 6; break; //@line 692 "cStringIO.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 692 "cStringIO.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 692 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initcStringIO() {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $d=__stackBase__+4;
        var $v=__stackBase__+8;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str37)&4294967295), ((_IO_methods)&4294967295), ((_cStringIO_module_documentation)&4294967295), 0, 1013); //@line 729 "cStringIO.c"
        HEAP[$m]=$0; //@line 729 "cStringIO.c"
        var $1=HEAP[$m]; //@line 732 "cStringIO.c"
        var $2=($1)==0; //@line 732 "cStringIO.c"
        if ($2) { __label__ = 7; break; } else { __label__ = 1; break; } //@line 732 "cStringIO.c"
      case 1: // $bb
        var $3=HEAP[$m]; //@line 735 "cStringIO.c"
        var $4=_PyModule_GetDict($3); //@line 735 "cStringIO.c"
        HEAP[$d]=$4; //@line 735 "cStringIO.c"
        var $5=((_Itype+4)&4294967295); //@line 738 "cStringIO.c"
        HEAP[$5]=_PyType_Type; //@line 738 "cStringIO.c"
        var $6=((_Otype+4)&4294967295); //@line 739 "cStringIO.c"
        HEAP[$6]=_PyType_Type; //@line 739 "cStringIO.c"
        var $7=_PyType_Ready(_Otype); //@line 740 "cStringIO.c"
        var $8=((($7))|0) < 0; //@line 740 "cStringIO.c"
        if ($8) { __label__ = 7; break; } else { __label__ = 2; break; } //@line 740 "cStringIO.c"
      case 2: // $bb1
        var $9=_PyType_Ready(_Itype); //@line 741 "cStringIO.c"
        var $10=((($9))|0) < 0; //@line 741 "cStringIO.c"
        if ($10) { __label__ = 7; break; } else { __label__ = 3; break; } //@line 741 "cStringIO.c"
      case 3: // $bb2
        var $11=_PyCapsule_New(_CAPI, ((__str38)&4294967295), 0); //@line 742 "cStringIO.c"
        HEAP[$v]=$11; //@line 742 "cStringIO.c"
        var $12=HEAP[$d]; //@line 743 "cStringIO.c"
        var $13=HEAP[$v]; //@line 743 "cStringIO.c"
        var $14=_PyDict_SetItemString($12, ((__str39)&4294967295), $13); //@line 743 "cStringIO.c"
        var $15=HEAP[$v]; //@line 744 "cStringIO.c"
        var $16=($15)!=0; //@line 744 "cStringIO.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 744 "cStringIO.c"
      case 4: // $bb3
        var $17=HEAP[$v]; //@line 744 "cStringIO.c"
        var $18=(($17)&4294967295); //@line 744 "cStringIO.c"
        var $19=HEAP[$18]; //@line 744 "cStringIO.c"
        var $20=((($19) - 1)&4294967295); //@line 744 "cStringIO.c"
        var $21=HEAP[$v]; //@line 744 "cStringIO.c"
        var $22=(($21)&4294967295); //@line 744 "cStringIO.c"
        HEAP[$22]=$20; //@line 744 "cStringIO.c"
        var $23=HEAP[$v]; //@line 744 "cStringIO.c"
        var $24=(($23)&4294967295); //@line 744 "cStringIO.c"
        var $25=HEAP[$24]; //@line 744 "cStringIO.c"
        var $26=((($25))|0)==0; //@line 744 "cStringIO.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 744 "cStringIO.c"
      case 5: // $bb4
        var $27=HEAP[$v]; //@line 744 "cStringIO.c"
        var $28=(($27+4)&4294967295); //@line 744 "cStringIO.c"
        var $29=HEAP[$28]; //@line 744 "cStringIO.c"
        var $30=(($29+24)&4294967295); //@line 744 "cStringIO.c"
        var $31=HEAP[$30]; //@line 744 "cStringIO.c"
        var $32=HEAP[$v]; //@line 744 "cStringIO.c"
        FUNCTION_TABLE[$31]($32); //@line 744 "cStringIO.c"
        __label__ = 6; break; //@line 744 "cStringIO.c"
      case 6: // $bb5
        var $33=HEAP[$d]; //@line 747 "cStringIO.c"
        var $34=_PyDict_SetItemString($33, ((__str40)&4294967295), _Itype); //@line 747 "cStringIO.c"
        var $35=HEAP[$d]; //@line 748 "cStringIO.c"
        var $36=_PyDict_SetItemString($35, ((__str41)&4294967295), _Otype); //@line 748 "cStringIO.c"
        __label__ = 7; break; //@line 748 "cStringIO.c"
      case 7: // $bb6
        __label__ = 8; break; //@line 732 "cStringIO.c"
      case 8: // $return
        STACKTOP = __stackBase__;
        return; //@line 732 "cStringIO.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initcStringIO"] = _initcStringIO;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_IO_get_closed,0,_IO_flush,0,_IO_getval,0,_IO_isatty,0,_IO_read,0,_IO_readline,0,_IO_readlines,0,_IO_reset,0,_IO_seek,0,_IO_tell,0,_IO_truncate,0,_O_close,0,_O_write,0,_O_writelines,0,_O_dealloc,0,_PyObject_SelfIter,0,_IO_iternext,0,_I_close,0,_I_dealloc,0,_IO_StringIO,0,_IO_cread,0,_IO_creadline,0,_O_cwrite,0,_IO_cgetval,0,_newOobject,0,_newIobject,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_cStringIO_module_documentation=allocate([65,32,115,105,109,112,108,101,32,102,97,115,116,32,112,97,114,116,105,97,108,32,83,116,114,105,110,103,73,79,32,114,101,112,108,97,99,101,109,101,110,116,46,10,10,84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,97,32,115,105,109,112,108,101,32,117,115,101,102,117,108,32,114,101,112,108,97,99,101,109,101,110,116,32,102,111,114,10,116,104,101,32,83,116,114,105,110,103,73,79,32,109,111,100,117,108,101,32,116,104,97,116,32,105,115,32,119,114,105,116,116,101,110,32,105,110,32,67,46,32,32,73,116,32,100,111,101,115,32,110,111,116,32,112,114,111,118,105,100,101,32,116,104,101,10,102,117,108,108,32,103,101,110,101,114,97,108,105,116,121,32,111,102,32,83,116,114,105,110,103,73,79,44,32,98,117,116,32,105,116,32,112,114,111,118,105,100,101,115,32,101,110,111,117,103,104,32,102,111,114,32,109,111,115,116,10,97,112,112,108,105,99,97,116,105,111,110,115,32,97,110,100,32,105,115,32,101,115,112,101,99,105,97,108,108,121,32,117,115,101,102,117,108,32,105,110,32,99,111,110,106,117,110,99,116,105,111,110,32,119,105,116,104,32,116,104,101,10,112,105,99,107,108,101,32,109,111,100,117,108,101,46,10,10,85,115,97,103,101,58,10,10,32,32,102,114,111,109,32,99,83,116,114,105,110,103,73,79,32,105,109,112,111,114,116,32,83,116,114,105,110,103,73,79,10,10,32,32,97,110,95,111,117,116,112,117,116,95,115,116,114,101,97,109,61,83,116,114,105,110,103,73,79,40,41,10,32,32,97,110,95,111,117,116,112,117,116,95,115,116,114,101,97,109,46,119,114,105,116,101,40,115,111,109,101,95,115,116,117,102,102,41,10,32,32,46,46,46,10,32,32,118,97,108,117,101,61,97,110,95,111,117,116,112,117,116,95,115,116,114,101,97,109,46,103,101,116,118,97,108,117,101,40,41,10,10,32,32,97,110,95,105,110,112,117,116,95,115,116,114,101,97,109,61,83,116,114,105,110,103,73,79,40,97,95,115,116,114,105,110,103,41,10,32,32,115,112,97,109,61,97,110,95,105,110,112,117,116,95,115,116,114,101,97,109,46,114,101,97,100,108,105,110,101,40,41,10,32,32,115,112,97,109,61,97,110,95,105,110,112,117,116,95,115,116,114,101,97,109,46,114,101,97,100,40,53,41,10,32,32,97,110,95,105,110,112,117,116,95,115,116,114,101,97,109,46,115,101,101,107,40,48,41,32,32,32,32,32,32,32,32,32,32,32,35,32,79,75,44,32,115,116,97,114,116,32,111,118,101,114,10,32,32,115,112,97,109,61,97,110,95,105,110,112,117,116,95,115,116,114,101,97,109,46,114,101,97,100,40,41,32,32,32,32,32,32,32,35,32,97,110,100,32,114,101,97,100,32,105,116,32,97,108,108,10,32,32,10,73,102,32,115,111,109,101,111,110,101,32,101,108,115,101,32,119,97,110,116,115,32,116,111,32,112,114,111,118,105,100,101,32,97,32,109,111,114,101,32,99,111,109,112,108,101,116,101,32,105,109,112,108,101,109,101,110,116,97,116,105,111,110,44,10,103,111,32,102,111,114,32,105,116,46,32,58,45,41,32,32,10,10,99,83,116,114,105,110,103,73,79,46,99,44,118,32,49,46,50,57,32,49,57,57,57,47,48,54,47,49,53,32,49,52,58,49,48,58,50,55,32,106,105,109,32,69,120,112,10,0] /* A simple fast partia */, "i8", ALLOC_NORMAL);
_IO_flush__doc__=allocate([102,108,117,115,104,40,41,58,32,100,111,101,115,32,110,111,116,104,105,110,103,46,0] /* flush(): does nothin */, "i8", ALLOC_NORMAL);
__str=allocate([73,47,79,32,111,112,101,114,97,116,105,111,110,32,111,110,32,99,108,111,115,101,100,32,102,105,108,101,0] /* I/O operation on clo */, "i8", ALLOC_NORMAL);
__str1=allocate([99,108,111,115,101,100,0] /* closed\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([84,114,117,101,32,105,102,32,116,104,101,32,102,105,108,101,32,105,115,32,99,108,111,115,101,100,0] /* True if the file is  */, "i8", ALLOC_NORMAL);
_file_getsetlist=allocate(40, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_IO_getval__doc__=allocate([103,101,116,118,97,108,117,101,40,91,117,115,101,95,112,111,115,93,41,32,45,45,32,71,101,116,32,116,104,101,32,115,116,114,105,110,103,32,118,97,108,117,101,46,10,73,102,32,117,115,101,95,112,111,115,32,105,115,32,115,112,101,99,105,102,105,101,100,32,97,110,100,32,105,115,32,97,32,116,114,117,101,32,118,97,108,117,101,44,32,116,104,101,110,32,116,104,101,32,115,116,114,105,110,103,32,114,101,116,117,114,110,101,100,10,119,105,108,108,32,105,110,99,108,117,100,101,32,111,110,108,121,32,116,104,101,32,116,101,120,116,32,117,112,32,116,111,32,116,104,101,32,99,117,114,114,101,110,116,32,102,105,108,101,32,112,111,115,105,116,105,111,110,46,10,0] /* getvalue([use_pos])  */, "i8", ALLOC_NORMAL);
__str3=allocate([40,40,73,79,111,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,112,111,115,32,62,61,32,48,0] /* ((IOobject_)(self))- */, "i8", ALLOC_NORMAL);
__str4=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,99,83,116,114,105,110,103,73,79,46,99,0] /* ../cpython/Modules/c */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8417=allocate([73,79,95,99,103,101,116,118,97,108,0] /* IO_cgetval\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([103,101,116,118,97,108,0] /* getval\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([115,101,108,102,45,62,112,111,115,32,62,61,32,48,0] /* self->pos >= 0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8439=allocate([73,79,95,103,101,116,118,97,108,0] /* IO_getval\00 */, "i8", ALLOC_NORMAL);
_IO_isatty__doc__=allocate([105,115,97,116,116,121,40,41,58,32,97,108,119,97,121,115,32,114,101,116,117,114,110,115,32,48,0] /* isatty(): always ret */, "i8", ALLOC_NORMAL);
_IO_read__doc__=allocate([114,101,97,100,40,91,115,93,41,32,45,45,32,82,101,97,100,32,115,32,99,104,97,114,97,99,116,101,114,115,44,32,111,114,32,116,104,101,32,114,101,115,116,32,111,102,32,116,104,101,32,115,116,114,105,110,103,0] /* read([s]) -- Read s  */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8481=allocate([73,79,95,99,114,101,97,100,0] /* IO_cread\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([40,40,73,79,111,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,115,116,114,105,110,103,95,115,105,122,101,32,62,61,32,48,0] /* ((IOobject_)(self))- */, "i8", ALLOC_NORMAL);
__str8=allocate([124,110,58,114,101,97,100,0] /* |n:read\00 */, "i8", ALLOC_NORMAL);
_IO_readline__doc__=allocate([114,101,97,100,108,105,110,101,40,41,32,45,45,32,82,101,97,100,32,111,110,101,32,108,105,110,101,0] /* readline() -- Read o */, "i8", ALLOC_NORMAL);
__str9=allocate([40,40,73,79,111,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,112,111,115,32,60,61,32,40,40,80,121,95,115,115,105,122,101,95,116,41,40,40,40,115,105,122,101,95,116,41,45,49,41,62,62,49,41,41,32,45,32,108,0] /* ((IOobject_)(self))- */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8545=allocate([73,79,95,99,114,101,97,100,108,105,110,101,0] /* IO_creadline\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([124,105,58,114,101,97,100,108,105,110,101,0] /* |i:readline\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8600=allocate([73,79,95,114,101,97,100,108,105,110,101,0] /* IO_readline\00 */, "i8", ALLOC_NORMAL);
_IO_readlines__doc__=allocate([114,101,97,100,108,105,110,101,115,40,41,32,45,45,32,82,101,97,100,32,97,108,108,32,108,105,110,101,115,0] /* readlines() -- Read  */, "i8", ALLOC_NORMAL);
__str11=allocate([124,105,58,114,101,97,100,108,105,110,101,115,0] /* |i:readlines\00 */, "i8", ALLOC_NORMAL);
_IO_reset__doc__=allocate([114,101,115,101,116,40,41,32,45,45,32,82,101,115,101,116,32,116,104,101,32,102,105,108,101,32,112,111,115,105,116,105,111,110,32,116,111,32,116,104,101,32,98,101,103,105,110,110,105,110,103,0] /* reset() -- Reset the */, "i8", ALLOC_NORMAL);
_IO_tell__doc__=allocate([116,101,108,108,40,41,32,45,45,32,103,101,116,32,116,104,101,32,99,117,114,114,101,110,116,32,112,111,115,105,116,105,111,110,46,0] /* tell() -- get the cu */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8704=allocate([73,79,95,116,101,108,108,0] /* IO_tell\00 */, "i8", ALLOC_NORMAL);
_IO_truncate__doc__=allocate([116,114,117,110,99,97,116,101,40,41,58,32,116,114,117,110,99,97,116,101,32,116,104,101,32,102,105,108,101,32,97,116,32,116,104,101,32,99,117,114,114,101,110,116,32,112,111,115,105,116,105,111,110,46,0] /* truncate(): truncate */, "i8", ALLOC_NORMAL);
__str12=allocate([124,110,58,116,114,117,110,99,97,116,101,0] /* |n:truncate\00 */, "i8", ALLOC_NORMAL);
_IO_seek__doc__=allocate([115,101,101,107,40,112,111,115,105,116,105,111,110,41,32,32,32,32,32,32,32,45,45,32,115,101,116,32,116,104,101,32,99,117,114,114,101,110,116,32,112,111,115,105,116,105,111,110,10,115,101,101,107,40,112,111,115,105,116,105,111,110,44,32,109,111,100,101,41,32,45,45,32,109,111,100,101,32,48,58,32,97,98,115,111,108,117,116,101,59,32,49,58,32,114,101,108,97,116,105,118,101,59,32,50,58,32,114,101,108,97,116,105,118,101,32,116,111,32,69,79,70,0] /* seek(position)       */, "i8", ALLOC_NORMAL);
__str13=allocate([110,124,105,58,115,101,101,107,0] /* n|i:seek\00 */, "i8", ALLOC_NORMAL);
_O_write__doc__=allocate([119,114,105,116,101,40,115,41,32,45,45,32,87,114,105,116,101,32,97,32,115,116,114,105,110,103,32,116,111,32,116,104,101,32,102,105,108,101,10,10,78,111,116,101,32,40,104,97,99,107,58,41,32,119,114,105,116,105,110,103,32,78,111,110,101,32,114,101,115,101,116,115,32,116,104,101,32,98,117,102,102,101,114,0] /* write(s) -- Write a  */, "i8", ALLOC_NORMAL);
__str14=allocate([110,101,119,108,32,43,32,49,32,60,32,50,49,52,55,52,56,51,54,52,55,0] /* newl + 1 < 214748364 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8812=allocate([79,95,99,119,114,105,116,101,0] /* O_cwrite\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([111,117,116,32,111,102,32,109,101,109,111,114,121,0] /* out of memory\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([111,115,101,108,102,45,62,112,111,115,32,43,32,108,32,60,32,50,49,52,55,52,56,51,54,52,55,0] /* oself->pos + l < 214 */, "i8", ALLOC_NORMAL);
__str17=allocate([116,35,58,119,114,105,116,101,0] /* t#:write\00 */, "i8", ALLOC_NORMAL);
_O_close__doc__=allocate([99,108,111,115,101,40,41,58,32,101,120,112,108,105,99,105,116,108,121,32,114,101,108,101,97,115,101,32,114,101,115,111,117,114,99,101,115,32,104,101,108,100,46,0] /* close(): explicitly  */, "i8", ALLOC_NORMAL);
_O_writelines__doc__=allocate([119,114,105,116,101,108,105,110,101,115,40,115,101,113,117,101,110,99,101,95,111,102,95,115,116,114,105,110,103,115,41,32,45,62,32,78,111,110,101,46,32,32,87,114,105,116,101,32,116,104,101,32,115,116,114,105,110,103,115,32,116,111,32,116,104,101,32,102,105,108,101,46,10,10,78,111,116,101,32,116,104,97,116,32,110,101,119,108,105,110,101,115,32,97,114,101,32,110,111,116,32,97,100,100,101,100,46,32,32,84,104,101,32,115,101,113,117,101,110,99,101,32,99,97,110,32,98,101,32,97,110,121,32,105,116,101,114,97,98,108,101,32,111,98,106,101,99,116,10,112,114,111,100,117,99,105,110,103,32,115,116,114,105,110,103,115,46,32,84,104,105,115,32,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,99,97,108,108,105,110,103,32,119,114,105,116,101,40,41,32,102,111,114,32,101,97,99,104,32,115,116,114,105,110,103,46,0] /* writelines(sequence_ */, "i8", ALLOC_NORMAL);
__str18=allocate([102,108,117,115,104,0] /* flush\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([103,101,116,118,97,108,117,101,0] /* getvalue\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([105,115,97,116,116,121,0] /* isatty\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([114,101,97,100,0] /* read\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([114,101,97,100,108,105,110,101,0] /* readline\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([114,101,97,100,108,105,110,101,115,0] /* readlines\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([114,101,115,101,116,0] /* reset\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([115,101,101,107,0] /* seek\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([116,101,108,108,0] /* tell\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([116,114,117,110,99,97,116,101,0] /* truncate\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([99,108,111,115,101,0] /* close\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([119,114,105,116,101,0] /* write\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([119,114,105,116,101,108,105,110,101,115,0] /* writelines\00 */, "i8", ALLOC_NORMAL);
_O_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str31=allocate([115,111,102,116,115,112,97,99,101,0] /* softspace\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([102,108,97,103,32,105,110,100,105,99,97,116,105,110,103,32,116,104,97,116,32,97,32,115,112,97,99,101,32,110,101,101,100,115,32,116,111,32,98,101,32,112,114,105,110,116,101,100,59,32,117,115,101,100,32,98,121,32,112,114,105,110,116,0] /* flag indicating that */, "i8", ALLOC_NORMAL);
_O_memberlist=allocate([0, 0, 0, 0, 1, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_Otype__doc__=allocate([83,105,109,112,108,101,32,116,121,112,101,32,102,111,114,32,111,117,116,112,117,116,32,116,111,32,115,116,114,105,110,103,115,46,0] /* Simple type for outp */, "i8", ALLOC_NORMAL);
__str33=allocate([99,83,116,114,105,110,103,73,79,46,83,116,114,105,110,103,79,0] /* cStringIO.StringO\00 */, "i8", ALLOC_NORMAL);
_Otype=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_I_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_Itype__doc__=allocate([83,105,109,112,108,101,32,116,121,112,101,32,102,111,114,32,116,114,101,97,116,105,110,103,32,115,116,114,105,110,103,115,32,97,115,32,105,110,112,117,116,32,102,105,108,101,32,115,116,114,101,97,109,115,0] /* Simple type for trea */, "i8", ALLOC_NORMAL);
__str34=allocate([99,83,116,114,105,110,103,73,79,46,83,116,114,105,110,103,73,0] /* cStringIO.StringI\00 */, "i8", ALLOC_NORMAL);
_Itype=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str35=allocate([101,120,112,101,99,116,101,100,32,114,101,97,100,32,98,117,102,102,101,114,44,32,37,46,50,48,48,115,32,102,111,117,110,100,0] /* expected read buffer */, "i8", ALLOC_NORMAL);
_IO_StringIO__doc__=allocate([83,116,114,105,110,103,73,79,40,91,115,93,41,32,45,45,32,82,101,116,117,114,110,32,97,32,83,116,114,105,110,103,73,79,45,108,105,107,101,32,115,116,114,101,97,109,32,102,111,114,32,114,101,97,100,105,110,103,32,111,114,32,119,114,105,116,105,110,103,0] /* StringIO([s]) -- Ret */, "i8", ALLOC_NORMAL);
__str36=allocate([83,116,114,105,110,103,73,79,0] /* StringIO\00 */, "i8", ALLOC_NORMAL);
_IO_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_CAPI=allocate(32, ["i32 (%struct.PyObject*, i8**, i32)*",0,0,0,"i32 (%struct.PyObject*, i8**)*",0,0,0,"i32 (%struct.PyObject*, i8*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct._typeobject*",0,0,0,"%struct._typeobject*",0,0,0], ALLOC_NORMAL);
__str37=allocate([99,83,116,114,105,110,103,73,79,0] /* cStringIO\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([99,83,116,114,105,110,103,73,79,46,99,83,116,114,105,110,103,73,79,95,67,65,80,73,0] /* cStringIO.cStringIO_ */, "i8", ALLOC_NORMAL);
__str39=allocate([99,83,116,114,105,110,103,73,79,95,67,65,80,73,0] /* cStringIO_CAPI\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([73,110,112,117,116,84,121,112,101,0] /* InputType\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([79,117,116,112,117,116,84,121,112,101,0] /* OutputType\00 */, "i8", ALLOC_NORMAL);
_PycStringIO=allocate(1, "%struct.PycStringIO_CAPI*", ALLOC_NORMAL);
HEAP[_file_getsetlist]=((__str1)&4294967295);
HEAP[_file_getsetlist+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_file_getsetlist+12]=((__str2)&4294967295);
HEAP[_O_methods]=((__str18)&4294967295);
HEAP[_O_methods+4]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_O_methods+12]=((_IO_flush__doc__)&4294967295);
HEAP[_O_methods+16]=((__str19)&4294967295);
HEAP[_O_methods+20]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_O_methods+28]=((_IO_getval__doc__)&4294967295);
HEAP[_O_methods+32]=((__str20)&4294967295);
HEAP[_O_methods+36]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_O_methods+44]=((_IO_isatty__doc__)&4294967295);
HEAP[_O_methods+48]=((__str21)&4294967295);
HEAP[_O_methods+52]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_O_methods+60]=((_IO_read__doc__)&4294967295);
HEAP[_O_methods+64]=((__str22)&4294967295);
HEAP[_O_methods+68]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_O_methods+76]=((_IO_readline__doc__)&4294967295);
HEAP[_O_methods+80]=((__str23)&4294967295);
HEAP[_O_methods+84]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_O_methods+92]=((_IO_readlines__doc__)&4294967295);
HEAP[_O_methods+96]=((__str24)&4294967295);
HEAP[_O_methods+100]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_O_methods+108]=((_IO_reset__doc__)&4294967295);
HEAP[_O_methods+112]=((__str25)&4294967295);
HEAP[_O_methods+116]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_O_methods+124]=((_IO_seek__doc__)&4294967295);
HEAP[_O_methods+128]=((__str26)&4294967295);
HEAP[_O_methods+132]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_O_methods+140]=((_IO_tell__doc__)&4294967295);
HEAP[_O_methods+144]=((__str27)&4294967295);
HEAP[_O_methods+148]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_O_methods+156]=((_IO_truncate__doc__)&4294967295);
HEAP[_O_methods+160]=((__str28)&4294967295);
HEAP[_O_methods+164]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_O_methods+172]=((_O_close__doc__)&4294967295);
HEAP[_O_methods+176]=((__str29)&4294967295);
HEAP[_O_methods+180]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_O_methods+188]=((_O_write__doc__)&4294967295);
HEAP[_O_methods+192]=((__str30)&4294967295);
HEAP[_O_methods+196]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_O_methods+204]=((_O_writelines__doc__)&4294967295);
HEAP[_O_memberlist]=((__str31)&4294967295);
HEAP[_O_memberlist+16]=((__str32)&4294967295);
HEAP[_Otype+12]=((__str33)&4294967295);
HEAP[_Otype+24]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_Otype+88]=((_Otype__doc__)&4294967295);
HEAP[_Otype+108]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_Otype+112]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_Otype+116]=((_O_methods)&4294967295);
HEAP[_Otype+120]=((_O_memberlist)&4294967295);
HEAP[_Otype+124]=_file_getsetlist;
HEAP[_I_methods]=((__str18)&4294967295);
HEAP[_I_methods+4]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_I_methods+12]=((_IO_flush__doc__)&4294967295);
HEAP[_I_methods+16]=((__str19)&4294967295);
HEAP[_I_methods+20]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_I_methods+28]=((_IO_getval__doc__)&4294967295);
HEAP[_I_methods+32]=((__str20)&4294967295);
HEAP[_I_methods+36]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_I_methods+44]=((_IO_isatty__doc__)&4294967295);
HEAP[_I_methods+48]=((__str21)&4294967295);
HEAP[_I_methods+52]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_I_methods+60]=((_IO_read__doc__)&4294967295);
HEAP[_I_methods+64]=((__str22)&4294967295);
HEAP[_I_methods+68]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_I_methods+76]=((_IO_readline__doc__)&4294967295);
HEAP[_I_methods+80]=((__str23)&4294967295);
HEAP[_I_methods+84]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_I_methods+92]=((_IO_readlines__doc__)&4294967295);
HEAP[_I_methods+96]=((__str24)&4294967295);
HEAP[_I_methods+100]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_I_methods+108]=((_IO_reset__doc__)&4294967295);
HEAP[_I_methods+112]=((__str25)&4294967295);
HEAP[_I_methods+116]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_I_methods+124]=((_IO_seek__doc__)&4294967295);
HEAP[_I_methods+128]=((__str26)&4294967295);
HEAP[_I_methods+132]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_I_methods+140]=((_IO_tell__doc__)&4294967295);
HEAP[_I_methods+144]=((__str27)&4294967295);
HEAP[_I_methods+148]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_I_methods+156]=((_IO_truncate__doc__)&4294967295);
HEAP[_I_methods+160]=((__str28)&4294967295);
HEAP[_I_methods+164]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_I_methods+172]=((_O_close__doc__)&4294967295);
HEAP[_Itype+12]=((__str34)&4294967295);
HEAP[_Itype+24]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_Itype+88]=((_Itype__doc__)&4294967295);
HEAP[_Itype+108]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_Itype+112]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_Itype+116]=((_I_methods)&4294967295);
HEAP[_Itype+124]=_file_getsetlist;
HEAP[_IO_methods]=((__str36)&4294967295);
HEAP[_IO_methods+4]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_IO_methods+12]=((_IO_StringIO__doc__)&4294967295);
HEAP[_CAPI]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_CAPI+4]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_CAPI+8]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_CAPI+12]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_CAPI+16]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_CAPI+20]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_CAPI+24]=_Itype;
HEAP[_CAPI+28]=_Otype;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

