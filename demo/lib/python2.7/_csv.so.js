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
  
var $1___SIZE = 8; // %1
  
var $2___SIZE = 100; // %2
  
var $3___SIZE = 20; // %3
  
var $4___SIZE = 20; // %4
  
var $5___SIZE = 100; // %5
  
var $6___SIZE = 20; // %6
  
var $7___SIZE = 196; // %7
  
var $8___SIZE = 16; // %8
  
var $9___SIZE = 60; // %9
  
var $10___SIZE = 196; // %10
  
var $11___SIZE = 48; // %11
  
var $12___SIZE = 40; // %12
  
var $13___SIZE = 128; // %13
  
var $struct_DialectObj___SIZE = 32; // %struct.DialectObj
  var $struct_DialectObj___FLATTENER = [0,4,8,12,13,14,16,20,24,28];
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct_ReaderObj___SIZE = 44; // %struct.ReaderObj
  
var $struct_StyleDesc___SIZE = 8; // %struct.StyleDesc
  
var $struct_WriterObj___SIZE = 32; // %struct.WriterObj
  
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _field_limit;
var __str;
var __str1;
var __str2;
var __str3;
var _quote_styles;
var _dialects;
var _error_obj;
var __str4;
var __Py_NoneStruct;
var _PyExc_TypeError;
var __str5;
var __str6;
var _PyBaseString_Type;
var __str7;
var __str8;
var __str9;
var __str10;
var __str11;
var __str12;
var _Dialect_memberlist;
var __str13;
var __str14;
var __str15;
var __str16;
var _Dialect_getsetlist;
var _dialect_kws;
var __str17;
var __str18;
var __str19;
var __str20;
var __str21;
var __str22;
var _Dialect_Type_doc;
var __str23;
var _Dialect_Type;
var __str24;
var __str25;
var __str26;
var __str27;
var __str28;
var __str29;
var __str30;
var _Reader_Type_doc;
var _Reader_methods;
var __str31;
var _Reader_memberlist;
var __str32;
var _Reader_Type;
var __str33;
var __str34;
var __str35;
var __str36;
var _csv_writerow_doc;
var __str37;
var __str38;
var _csv_writerows_doc;
var __str39;
var __str40;
var __str41;
var _Writer_methods;
var _Writer_memberlist;
var _Writer_Type_doc;
var __str42;
var _Writer_Type;
var __str43;
var __str44;
var __str45;
var __str46;
var __str47;
var _csv_module_doc;
var _csv_reader_doc;
var _csv_writer_doc;
var _csv_list_dialects_doc;
var _csv_get_dialect_doc;
var _csv_register_dialect_doc;
var _csv_unregister_dialect_doc;
var _csv_field_size_limit_doc;
var __str48;
var __str49;
var __str50;
var __str51;
var __str52;
var __str53;
var _csv_methods;
var __str54;
var __str55;
var __str56;
var __str57;
var __str58;
var __str59;
var __str60;
























































  function _get_dialect_from_registry($name_obj) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_obj_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $dialect_obj=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$name_obj_addr]=$name_obj;
        var $1=HEAP[_dialects]; //@line 154 "_csv.c"
        var $2=HEAP[$name_obj_addr]; //@line 154 "_csv.c"
        var $3=_PyDict_GetItem($1, $2); //@line 154 "_csv.c"
        HEAP[$dialect_obj]=$3; //@line 154 "_csv.c"
        var $4=HEAP[$dialect_obj]; //@line 155 "_csv.c"
        var $5=($4)==0; //@line 155 "_csv.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 155 "_csv.c"
      case 1: // $bb
        var $6=_PyErr_Occurred(); //@line 156 "_csv.c"
        var $7=($6)==0; //@line 156 "_csv.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 156 "_csv.c"
      case 2: // $bb1
        var $8=HEAP[_error_obj]; //@line 157 "_csv.c"
        var $9=_PyErr_Format($8, ((__str4)&4294967295)); //@line 157 "_csv.c"
        __label__ = 3; break; //@line 157 "_csv.c"
      case 3: // $bb2
        __label__ = 5; break; //@line 157 "_csv.c"
      case 4: // $bb3
        var $10=HEAP[$dialect_obj]; //@line 160 "_csv.c"
        var $11=(($10)&4294967295); //@line 160 "_csv.c"
        var $12=HEAP[$11]; //@line 160 "_csv.c"
        var $13=((($12) + 1)&4294967295); //@line 160 "_csv.c"
        var $14=HEAP[$dialect_obj]; //@line 160 "_csv.c"
        var $15=(($14)&4294967295); //@line 160 "_csv.c"
        HEAP[$15]=$13; //@line 160 "_csv.c"
        __label__ = 5; break; //@line 160 "_csv.c"
      case 5: // $bb4
        var $16=HEAP[$dialect_obj]; //@line 161 "_csv.c"
        HEAP[$0]=$16; //@line 161 "_csv.c"
        var $17=HEAP[$0]; //@line 161 "_csv.c"
        HEAP[$retval]=$17; //@line 161 "_csv.c"
        __label__ = 6; break; //@line 161 "_csv.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 161 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 161 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_string($str) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $str_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$str_addr]=$str;
        var $1=HEAP[$str_addr]; //@line 167 "_csv.c"
        var $2=($1)!=0; //@line 167 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 167 "_csv.c"
      case 1: // $bb
        var $3=HEAP[$str_addr]; //@line 167 "_csv.c"
        var $4=(($3)&4294967295); //@line 167 "_csv.c"
        var $5=HEAP[$4]; //@line 167 "_csv.c"
        var $6=((($5) + 1)&4294967295); //@line 167 "_csv.c"
        var $7=HEAP[$str_addr]; //@line 167 "_csv.c"
        var $8=(($7)&4294967295); //@line 167 "_csv.c"
        HEAP[$8]=$6; //@line 167 "_csv.c"
        __label__ = 2; break; //@line 167 "_csv.c"
      case 2: // $bb1
        var $9=HEAP[$str_addr]; //@line 168 "_csv.c"
        HEAP[$0]=$9; //@line 168 "_csv.c"
        var $10=HEAP[$0]; //@line 168 "_csv.c"
        HEAP[$retval]=$10; //@line 168 "_csv.c"
        __label__ = 3; break; //@line 168 "_csv.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 168 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 168 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_nullchar_as_None($c) {
    var __stackBase__  = STACKTOP; STACKTOP += 9; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 9);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $c_addr=__stackBase__;
        var $retval=__stackBase__+1;
        var $0=__stackBase__+5;
        var $_alloca_point_=0;
        HEAP[$c_addr]=$c;
        var $1=HEAP[$c_addr]; //@line 174 "_csv.c"
        var $2=reSign(($1), 8, 0)==0; //@line 174 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 174 "_csv.c"
      case 1: // $bb
        var $3=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 175 "_csv.c"
        var $4=((($3) + 1)&4294967295); //@line 175 "_csv.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$4; //@line 175 "_csv.c"
        HEAP[$0]=__Py_NoneStruct; //@line 176 "_csv.c"
        __label__ = 3; break; //@line 176 "_csv.c"
      case 2: // $bb1
        var $5=_PyString_FromStringAndSize($c_addr, 1); //@line 179 "_csv.c"
        HEAP[$0]=$5; //@line 179 "_csv.c"
        __label__ = 3; break; //@line 179 "_csv.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 176 "_csv.c"
        HEAP[$retval]=$6; //@line 176 "_csv.c"
        __label__ = 4; break; //@line 176 "_csv.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 176 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 176 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Dialect_get_lineterminator($self) {
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
        var $1=HEAP[$self_addr]; //@line 185 "_csv.c"
        var $2=(($1+20)&4294967295); //@line 185 "_csv.c"
        var $3=HEAP[$2]; //@line 185 "_csv.c"
        var $4=_get_string($3); //@line 185 "_csv.c"
        HEAP[$0]=$4; //@line 185 "_csv.c"
        var $5=HEAP[$0]; //@line 185 "_csv.c"
        HEAP[$retval]=$5; //@line 185 "_csv.c"
        __label__ = 1; break; //@line 185 "_csv.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 185 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 185 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Dialect_get_escapechar($self) {
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
        var $1=HEAP[$self_addr]; //@line 191 "_csv.c"
        var $2=(($1+14)&4294967295); //@line 191 "_csv.c"
        var $3=HEAP[$2]; //@line 191 "_csv.c"
        var $4=reSign(($3), 8, 0); //@line 191 "_csv.c"
        var $5=((($4)) & 255); //@line 191 "_csv.c"
        var $6=_get_nullchar_as_None($5); //@line 191 "_csv.c"
        HEAP[$0]=$6; //@line 191 "_csv.c"
        var $7=HEAP[$0]; //@line 191 "_csv.c"
        HEAP[$retval]=$7; //@line 191 "_csv.c"
        __label__ = 1; break; //@line 191 "_csv.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 191 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 191 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Dialect_get_quotechar($self) {
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
        var $1=HEAP[$self_addr]; //@line 197 "_csv.c"
        var $2=(($1+13)&4294967295); //@line 197 "_csv.c"
        var $3=HEAP[$2]; //@line 197 "_csv.c"
        var $4=reSign(($3), 8, 0); //@line 197 "_csv.c"
        var $5=((($4)) & 255); //@line 197 "_csv.c"
        var $6=_get_nullchar_as_None($5); //@line 197 "_csv.c"
        HEAP[$0]=$6; //@line 197 "_csv.c"
        var $7=HEAP[$0]; //@line 197 "_csv.c"
        HEAP[$retval]=$7; //@line 197 "_csv.c"
        __label__ = 1; break; //@line 197 "_csv.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 197 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 197 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Dialect_get_quoting($self) {
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
        var $1=HEAP[$self_addr]; //@line 203 "_csv.c"
        var $2=(($1+24)&4294967295); //@line 203 "_csv.c"
        var $3=HEAP[$2]; //@line 203 "_csv.c"
        var $4=_PyInt_FromLong($3); //@line 203 "_csv.c"
        HEAP[$0]=$4; //@line 203 "_csv.c"
        var $5=HEAP[$0]; //@line 203 "_csv.c"
        HEAP[$retval]=$5; //@line 203 "_csv.c"
        __label__ = 1; break; //@line 203 "_csv.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 203 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 203 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __set_bool($name, $target, $src, $dflt) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_addr=__stackBase__;
        var $target_addr=__stackBase__+4;
        var $src_addr=__stackBase__+8;
        var $dflt_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$name_addr]=$name;
        HEAP[$target_addr]=$target;
        HEAP[$src_addr]=$src;
        HEAP[$dflt_addr]=$dflt;
        var $1=HEAP[$src_addr]; //@line 209 "_csv.c"
        var $2=($1)==0; //@line 209 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 209 "_csv.c"
      case 1: // $bb
        var $3=HEAP[$target_addr]; //@line 210 "_csv.c"
        var $4=HEAP[$dflt_addr]; //@line 210 "_csv.c"
        HEAP[$3]=$4; //@line 210 "_csv.c"
        __label__ = 3; break; //@line 210 "_csv.c"
      case 2: // $bb1
        var $5=HEAP[$src_addr]; //@line 212 "_csv.c"
        var $6=_PyObject_IsTrue($5); //@line 212 "_csv.c"
        var $7=HEAP[$target_addr]; //@line 212 "_csv.c"
        HEAP[$7]=$6; //@line 212 "_csv.c"
        __label__ = 3; break; //@line 212 "_csv.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 213 "_csv.c"
        var $8=HEAP[$0]; //@line 213 "_csv.c"
        HEAP[$retval]=$8; //@line 213 "_csv.c"
        __label__ = 4; break; //@line 213 "_csv.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 213 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 213 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __set_int($name, $target, $src, $dflt) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_addr=__stackBase__;
        var $target_addr=__stackBase__+4;
        var $src_addr=__stackBase__+8;
        var $dflt_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$name_addr]=$name;
        HEAP[$target_addr]=$target;
        HEAP[$src_addr]=$src;
        HEAP[$dflt_addr]=$dflt;
        var $1=HEAP[$src_addr]; //@line 219 "_csv.c"
        var $2=($1)==0; //@line 219 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 219 "_csv.c"
      case 1: // $bb
        var $3=HEAP[$target_addr]; //@line 220 "_csv.c"
        var $4=HEAP[$dflt_addr]; //@line 220 "_csv.c"
        HEAP[$3]=$4; //@line 220 "_csv.c"
        __label__ = 5; break; //@line 220 "_csv.c"
      case 2: // $bb1
        var $5=HEAP[$src_addr]; //@line 222 "_csv.c"
        var $6=(($5+4)&4294967295); //@line 222 "_csv.c"
        var $7=HEAP[$6]; //@line 222 "_csv.c"
        var $8=(($7+84)&4294967295); //@line 222 "_csv.c"
        var $9=HEAP[$8]; //@line 222 "_csv.c"
        var $10=($9) & 8388608; //@line 222 "_csv.c"
        var $11=((($10))|0)==0; //@line 222 "_csv.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 222 "_csv.c"
      case 3: // $bb2
        var $12=HEAP[_PyExc_TypeError]; //@line 223 "_csv.c"
        var $13=HEAP[$name_addr]; //@line 223 "_csv.c"
        var $14=_PyErr_Format($12, ((__str5)&4294967295), $13); //@line 223 "_csv.c"
        HEAP[$0]=-1; //@line 225 "_csv.c"
        __label__ = 6; break; //@line 225 "_csv.c"
      case 4: // $bb3
        var $15=HEAP[$src_addr]; //@line 227 "_csv.c"
        var $16=_PyInt_AsLong($15); //@line 227 "_csv.c"
        var $17=HEAP[$target_addr]; //@line 227 "_csv.c"
        HEAP[$17]=$16; //@line 227 "_csv.c"
        __label__ = 5; break; //@line 227 "_csv.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 229 "_csv.c"
        __label__ = 6; break; //@line 229 "_csv.c"
      case 6: // $bb5
        var $18=HEAP[$0]; //@line 225 "_csv.c"
        HEAP[$retval]=$18; //@line 225 "_csv.c"
        __label__ = 7; break; //@line 225 "_csv.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 225 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 225 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __set_char($name, $target, $src, $dflt) {
    var __stackBase__  = STACKTOP; STACKTOP += 25; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 25);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_addr=__stackBase__;
        var $target_addr=__stackBase__+4;
        var $src_addr=__stackBase__+8;
        var $dflt_addr=__stackBase__+12;
        var $retval=__stackBase__+13;
        var $0=__stackBase__+17;
        var $s=__stackBase__+21;
        var $_alloca_point_=0;
        HEAP[$name_addr]=$name;
        HEAP[$target_addr]=$target;
        HEAP[$src_addr]=$src;
        HEAP[$dflt_addr]=$dflt;
        var $1=HEAP[$src_addr]; //@line 235 "_csv.c"
        var $2=($1)==0; //@line 235 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 235 "_csv.c"
      case 1: // $bb
        var $3=HEAP[$target_addr]; //@line 236 "_csv.c"
        var $4=HEAP[$dflt_addr]; //@line 236 "_csv.c"
        HEAP[$3]=$4; //@line 236 "_csv.c"
        __label__ = 11; break; //@line 236 "_csv.c"
      case 2: // $bb1
        var $5=HEAP[$src_addr]; //@line 238 "_csv.c"
        var $6=($5)==(__Py_NoneStruct); //@line 238 "_csv.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 238 "_csv.c"
      case 3: // $bb2
        var $7=HEAP[$src_addr]; //@line 238 "_csv.c"
        var $8=_PyString_Size($7); //@line 238 "_csv.c"
        var $9=((($8))|0)==0; //@line 238 "_csv.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 238 "_csv.c"
      case 4: // $bb3
        var $10=HEAP[$target_addr]; //@line 239 "_csv.c"
        HEAP[$10]=0; //@line 239 "_csv.c"
        __label__ = 11; break; //@line 239 "_csv.c"
      case 5: // $bb4
        var $11=HEAP[$src_addr]; //@line 240 "_csv.c"
        var $12=(($11+4)&4294967295); //@line 240 "_csv.c"
        var $13=HEAP[$12]; //@line 240 "_csv.c"
        var $14=(($13+84)&4294967295); //@line 240 "_csv.c"
        var $15=HEAP[$14]; //@line 240 "_csv.c"
        var $16=($15) & 134217728; //@line 240 "_csv.c"
        var $17=((($16))|0)==0; //@line 240 "_csv.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 240 "_csv.c"
      case 6: // $bb5
        var $18=HEAP[$src_addr]; //@line 240 "_csv.c"
        var $19=_PyString_Size($18); //@line 240 "_csv.c"
        var $20=((($19))|0)!=1; //@line 240 "_csv.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 240 "_csv.c"
      case 7: // $bb6
        var $21=HEAP[_PyExc_TypeError]; //@line 241 "_csv.c"
        var $22=HEAP[$name_addr]; //@line 241 "_csv.c"
        var $23=_PyErr_Format($21, ((__str6)&4294967295), $22); //@line 241 "_csv.c"
        HEAP[$0]=-1; //@line 244 "_csv.c"
        __label__ = 12; break; //@line 244 "_csv.c"
      case 8: // $bb7
        var $24=HEAP[$src_addr]; //@line 247 "_csv.c"
        var $25=_PyString_AsString($24); //@line 247 "_csv.c"
        HEAP[$s]=$25; //@line 247 "_csv.c"
        var $26=HEAP[$s]; //@line 248 "_csv.c"
        var $27=($26)==0; //@line 248 "_csv.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 248 "_csv.c"
      case 9: // $bb8
        HEAP[$0]=-1; //@line 249 "_csv.c"
        __label__ = 12; break; //@line 249 "_csv.c"
      case 10: // $bb9
        var $28=HEAP[$s]; //@line 250 "_csv.c"
        var $29=(($28)&4294967295); //@line 250 "_csv.c"
        var $30=HEAP[$29]; //@line 250 "_csv.c"
        var $31=HEAP[$target_addr]; //@line 250 "_csv.c"
        HEAP[$31]=$30; //@line 250 "_csv.c"
        __label__ = 11; break; //@line 250 "_csv.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 253 "_csv.c"
        __label__ = 12; break; //@line 253 "_csv.c"
      case 12: // $bb11
        var $32=HEAP[$0]; //@line 244 "_csv.c"
        HEAP[$retval]=$32; //@line 244 "_csv.c"
        __label__ = 13; break; //@line 244 "_csv.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 244 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 244 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __set_str($name, $target, $src, $dflt) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_addr=__stackBase__;
        var $target_addr=__stackBase__+4;
        var $src_addr=__stackBase__+8;
        var $dflt_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$name_addr]=$name;
        HEAP[$target_addr]=$target;
        HEAP[$src_addr]=$src;
        HEAP[$dflt_addr]=$dflt;
        var $1=HEAP[$src_addr]; //@line 259 "_csv.c"
        var $2=($1)==0; //@line 259 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 259 "_csv.c"
      case 1: // $bb
        var $3=HEAP[$dflt_addr]; //@line 260 "_csv.c"
        var $4=_PyString_FromString($3); //@line 260 "_csv.c"
        var $5=HEAP[$target_addr]; //@line 260 "_csv.c"
        HEAP[$5]=$4; //@line 260 "_csv.c"
        __label__ = 11; break; //@line 260 "_csv.c"
      case 2: // $bb1
        var $6=HEAP[$src_addr]; //@line 262 "_csv.c"
        var $7=($6)==(__Py_NoneStruct); //@line 262 "_csv.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 262 "_csv.c"
      case 3: // $bb2
        var $8=HEAP[$target_addr]; //@line 263 "_csv.c"
        HEAP[$8]=0; //@line 263 "_csv.c"
        __label__ = 11; break; //@line 263 "_csv.c"
      case 4: // $bb3
        var $9=HEAP[$src_addr]; //@line 264 "_csv.c"
        var $10=(($9+4)&4294967295); //@line 264 "_csv.c"
        var $11=HEAP[$10]; //@line 264 "_csv.c"
        var $12=($11)==(_PyBaseString_Type); //@line 264 "_csv.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 264 "_csv.c"
      case 5: // $bb4
        var $13=HEAP[$src_addr]; //@line 264 "_csv.c"
        var $14=(($13+4)&4294967295); //@line 264 "_csv.c"
        var $15=HEAP[$14]; //@line 264 "_csv.c"
        var $16=_PyType_IsSubtype($15, _PyBaseString_Type); //@line 264 "_csv.c"
        var $17=((($16))|0)!=0; //@line 264 "_csv.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 264 "_csv.c"
      case 6: // $bb5
        var $18=HEAP[_PyExc_TypeError]; //@line 265 "_csv.c"
        var $19=HEAP[$name_addr]; //@line 265 "_csv.c"
        var $20=_PyErr_Format($18, ((__str7)&4294967295), $19); //@line 265 "_csv.c"
        HEAP[$0]=-1; //@line 267 "_csv.c"
        __label__ = 12; break; //@line 267 "_csv.c"
      case 7: // $bb6
        var $21=HEAP[$target_addr]; //@line 270 "_csv.c"
        var $22=HEAP[$21]; //@line 270 "_csv.c"
        var $23=($22)!=0; //@line 270 "_csv.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 270 "_csv.c"
      case 8: // $bb7
        var $24=HEAP[$target_addr]; //@line 270 "_csv.c"
        var $25=HEAP[$24]; //@line 270 "_csv.c"
        var $26=(($25)&4294967295); //@line 270 "_csv.c"
        var $27=HEAP[$26]; //@line 270 "_csv.c"
        var $28=((($27) - 1)&4294967295); //@line 270 "_csv.c"
        var $29=(($25)&4294967295); //@line 270 "_csv.c"
        HEAP[$29]=$28; //@line 270 "_csv.c"
        var $30=(($25)&4294967295); //@line 270 "_csv.c"
        var $31=HEAP[$30]; //@line 270 "_csv.c"
        var $32=((($31))|0)==0; //@line 270 "_csv.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 270 "_csv.c"
      case 9: // $bb8
        var $33=HEAP[$target_addr]; //@line 270 "_csv.c"
        var $34=HEAP[$33]; //@line 270 "_csv.c"
        var $35=(($34+4)&4294967295); //@line 270 "_csv.c"
        var $36=HEAP[$35]; //@line 270 "_csv.c"
        var $37=(($36+24)&4294967295); //@line 270 "_csv.c"
        var $38=HEAP[$37]; //@line 270 "_csv.c"
        var $39=HEAP[$target_addr]; //@line 270 "_csv.c"
        var $40=HEAP[$39]; //@line 270 "_csv.c"
        FUNCTION_TABLE[$38]($40); //@line 270 "_csv.c"
        __label__ = 10; break; //@line 270 "_csv.c"
      case 10: // $bb9
        var $41=HEAP[$src_addr]; //@line 271 "_csv.c"
        var $42=(($41)&4294967295); //@line 271 "_csv.c"
        var $43=HEAP[$42]; //@line 271 "_csv.c"
        var $44=((($43) + 1)&4294967295); //@line 271 "_csv.c"
        var $45=HEAP[$src_addr]; //@line 271 "_csv.c"
        var $46=(($45)&4294967295); //@line 271 "_csv.c"
        HEAP[$46]=$44; //@line 271 "_csv.c"
        var $47=HEAP[$target_addr]; //@line 272 "_csv.c"
        var $48=HEAP[$src_addr]; //@line 272 "_csv.c"
        HEAP[$47]=$48; //@line 272 "_csv.c"
        __label__ = 11; break; //@line 272 "_csv.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 275 "_csv.c"
        __label__ = 12; break; //@line 275 "_csv.c"
      case 12: // $bb11
        var $49=HEAP[$0]; //@line 267 "_csv.c"
        HEAP[$retval]=$49; //@line 267 "_csv.c"
        __label__ = 13; break; //@line 267 "_csv.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 267 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 267 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dialect_check_quoting($quoting) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $quoting_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $qs=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$quoting_addr]=$quoting;
        HEAP[$qs]=((_quote_styles)&4294967295); //@line 281 "_csv.c"
        HEAP[$qs]=((_quote_styles)&4294967295); //@line 283 "_csv.c"
        __label__ = 4; break; //@line 283 "_csv.c"
      case 1: // $bb
        var $1=HEAP[$qs]; //@line 284 "_csv.c"
        var $2=(($1)&4294967295); //@line 284 "_csv.c"
        var $3=HEAP[$2]; //@line 284 "_csv.c"
        var $4=HEAP[$quoting_addr]; //@line 284 "_csv.c"
        var $5=((($3))|0)==((($4))|0); //@line 284 "_csv.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 284 "_csv.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 285 "_csv.c"
        __label__ = 6; break; //@line 285 "_csv.c"
      case 3: // $bb2
        var $6=HEAP[$qs]; //@line 283 "_csv.c"
        var $7=(($6+8)&4294967295); //@line 283 "_csv.c"
        HEAP[$qs]=$7; //@line 283 "_csv.c"
        __label__ = 4; break; //@line 283 "_csv.c"
      case 4: // $bb3
        var $8=HEAP[$qs]; //@line 283 "_csv.c"
        var $9=(($8+4)&4294967295); //@line 283 "_csv.c"
        var $10=HEAP[$9]; //@line 283 "_csv.c"
        var $11=($10)!=0; //@line 283 "_csv.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 283 "_csv.c"
      case 5: // $bb4
        var $12=HEAP[_PyExc_TypeError]; //@line 287 "_csv.c"
        var $13=_PyErr_Format($12, ((__str8)&4294967295)); //@line 287 "_csv.c"
        HEAP[$0]=-1; //@line 288 "_csv.c"
        __label__ = 6; break; //@line 288 "_csv.c"
      case 6: // $bb5
        var $14=HEAP[$0]; //@line 285 "_csv.c"
        HEAP[$retval]=$14; //@line 285 "_csv.c"
        __label__ = 7; break; //@line 285 "_csv.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 285 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 285 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Dialect_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 312 "_csv.c"
        var $1=(($0+20)&4294967295); //@line 312 "_csv.c"
        var $2=HEAP[$1]; //@line 312 "_csv.c"
        var $3=($2)!=0; //@line 312 "_csv.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 312 "_csv.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 312 "_csv.c"
        var $5=(($4+20)&4294967295); //@line 312 "_csv.c"
        var $6=HEAP[$5]; //@line 312 "_csv.c"
        var $7=(($6)&4294967295); //@line 312 "_csv.c"
        var $8=HEAP[$7]; //@line 312 "_csv.c"
        var $9=((($8) - 1)&4294967295); //@line 312 "_csv.c"
        var $10=(($6)&4294967295); //@line 312 "_csv.c"
        HEAP[$10]=$9; //@line 312 "_csv.c"
        var $11=(($6)&4294967295); //@line 312 "_csv.c"
        var $12=HEAP[$11]; //@line 312 "_csv.c"
        var $13=((($12))|0)==0; //@line 312 "_csv.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 312 "_csv.c"
      case 2: // $bb1
        var $14=HEAP[$self_addr]; //@line 312 "_csv.c"
        var $15=(($14+20)&4294967295); //@line 312 "_csv.c"
        var $16=HEAP[$15]; //@line 312 "_csv.c"
        var $17=(($16+4)&4294967295); //@line 312 "_csv.c"
        var $18=HEAP[$17]; //@line 312 "_csv.c"
        var $19=(($18+24)&4294967295); //@line 312 "_csv.c"
        var $20=HEAP[$19]; //@line 312 "_csv.c"
        var $21=HEAP[$self_addr]; //@line 312 "_csv.c"
        var $22=(($21+20)&4294967295); //@line 312 "_csv.c"
        var $23=HEAP[$22]; //@line 312 "_csv.c"
        FUNCTION_TABLE[$20]($23); //@line 312 "_csv.c"
        __label__ = 3; break; //@line 312 "_csv.c"
      case 3: // $bb2
        var $24=HEAP[$self_addr]; //@line 313 "_csv.c"
        var $25=$24; //@line 313 "_csv.c"
        var $26=(($25+4)&4294967295); //@line 313 "_csv.c"
        var $27=HEAP[$26]; //@line 313 "_csv.c"
        var $28=(($27+160)&4294967295); //@line 313 "_csv.c"
        var $29=HEAP[$28]; //@line 313 "_csv.c"
        var $30=HEAP[$self_addr]; //@line 313 "_csv.c"
        var $31=$30; //@line 313 "_csv.c"
        FUNCTION_TABLE[$29]($31); //@line 313 "_csv.c"
        __label__ = 4; break; //@line 314 "_csv.c"
      case 4: // $return
        STACKTOP = __stackBase__;
        return; //@line 314 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dialect_new($type, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 64; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $self=__stackBase__+20;
        var $ret=__stackBase__+24;
        var $dialect=__stackBase__+28;
        var $delimiter=__stackBase__+32;
        var $doublequote=__stackBase__+36;
        var $escapechar=__stackBase__+40;
        var $lineterminator=__stackBase__+44;
        var $quotechar=__stackBase__+48;
        var $quoting=__stackBase__+52;
        var $skipinitialspace=__stackBase__+56;
        var $strict=__stackBase__+60;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$ret]=0; //@line 333 "_csv.c"
        HEAP[$dialect]=0; //@line 334 "_csv.c"
        HEAP[$delimiter]=0; //@line 335 "_csv.c"
        HEAP[$doublequote]=0; //@line 336 "_csv.c"
        HEAP[$escapechar]=0; //@line 337 "_csv.c"
        HEAP[$lineterminator]=0; //@line 338 "_csv.c"
        HEAP[$quotechar]=0; //@line 339 "_csv.c"
        HEAP[$quoting]=0; //@line 340 "_csv.c"
        HEAP[$skipinitialspace]=0; //@line 341 "_csv.c"
        HEAP[$strict]=0; //@line 342 "_csv.c"
        var $1=HEAP[$args_addr]; //@line 344 "_csv.c"
        var $2=HEAP[$kwargs_addr]; //@line 344 "_csv.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str18)&4294967295), ((_dialect_kws)&4294967295), $dialect, $delimiter, $doublequote, $escapechar, $lineterminator, $quotechar, $quoting, $skipinitialspace, $strict); //@line 344 "_csv.c"
        var $4=((($3))|0)==0; //@line 344 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 344 "_csv.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 355 "_csv.c"
        __label__ = 110; break; //@line 355 "_csv.c"
      case 2: // $bb1
        var $5=HEAP[$dialect]; //@line 357 "_csv.c"
        var $6=($5)!=0; //@line 357 "_csv.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 20; break; } //@line 357 "_csv.c"
      case 3: // $bb2
        var $7=HEAP[$dialect]; //@line 358 "_csv.c"
        var $8=(($7+4)&4294967295); //@line 358 "_csv.c"
        var $9=HEAP[$8]; //@line 358 "_csv.c"
        var $10=($9)==(_PyBaseString_Type); //@line 358 "_csv.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 358 "_csv.c"
      case 4: // $bb3
        var $11=HEAP[$dialect]; //@line 358 "_csv.c"
        var $12=(($11+4)&4294967295); //@line 358 "_csv.c"
        var $13=HEAP[$12]; //@line 358 "_csv.c"
        var $14=_PyType_IsSubtype($13, _PyBaseString_Type); //@line 358 "_csv.c"
        var $15=((($14))|0)!=0; //@line 358 "_csv.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 358 "_csv.c"
      case 5: // $bb4
        var $16=HEAP[$dialect]; //@line 359 "_csv.c"
        var $17=_get_dialect_from_registry($16); //@line 359 "_csv.c"
        HEAP[$dialect]=$17; //@line 359 "_csv.c"
        var $18=HEAP[$dialect]; //@line 360 "_csv.c"
        var $19=($18)==0; //@line 360 "_csv.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 360 "_csv.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 361 "_csv.c"
        __label__ = 110; break; //@line 361 "_csv.c"
      case 7: // $bb6
        __label__ = 9; break; //@line 361 "_csv.c"
      case 8: // $bb7
        var $20=HEAP[$dialect]; //@line 364 "_csv.c"
        var $21=(($20)&4294967295); //@line 364 "_csv.c"
        var $22=HEAP[$21]; //@line 364 "_csv.c"
        var $23=((($22) + 1)&4294967295); //@line 364 "_csv.c"
        var $24=(($20)&4294967295); //@line 364 "_csv.c"
        HEAP[$24]=$23; //@line 364 "_csv.c"
        __label__ = 9; break; //@line 364 "_csv.c"
      case 9: // $bb8
        var $25=HEAP[$dialect]; //@line 366 "_csv.c"
        var $26=(($25+4)&4294967295); //@line 366 "_csv.c"
        var $27=HEAP[$26]; //@line 366 "_csv.c"
        var $28=($27)==(_Dialect_Type); //@line 366 "_csv.c"
        if ($28) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 366 "_csv.c"
      case 10: // $bb9
        var $29=HEAP[$dialect]; //@line 366 "_csv.c"
        var $30=(($29+4)&4294967295); //@line 366 "_csv.c"
        var $31=HEAP[$30]; //@line 366 "_csv.c"
        var $32=_PyType_IsSubtype($31, _Dialect_Type); //@line 366 "_csv.c"
        var $33=((($32))|0)!=0; //@line 366 "_csv.c"
        if ($33) { __label__ = 11; break; } else { __label__ = 20; break; } //@line 366 "_csv.c"
      case 11: // $bb10
        var $34=HEAP[$delimiter]; //@line 366 "_csv.c"
        var $35=($34)==0; //@line 366 "_csv.c"
        if ($35) { __label__ = 12; break; } else { __label__ = 20; break; } //@line 366 "_csv.c"
      case 12: // $bb11
        var $36=HEAP[$doublequote]; //@line 366 "_csv.c"
        var $37=($36)==0; //@line 366 "_csv.c"
        if ($37) { __label__ = 13; break; } else { __label__ = 20; break; } //@line 366 "_csv.c"
      case 13: // $bb12
        var $38=HEAP[$escapechar]; //@line 366 "_csv.c"
        var $39=($38)==0; //@line 366 "_csv.c"
        if ($39) { __label__ = 14; break; } else { __label__ = 20; break; } //@line 366 "_csv.c"
      case 14: // $bb13
        var $40=HEAP[$lineterminator]; //@line 366 "_csv.c"
        var $41=($40)==0; //@line 366 "_csv.c"
        if ($41) { __label__ = 15; break; } else { __label__ = 20; break; } //@line 366 "_csv.c"
      case 15: // $bb14
        var $42=HEAP[$quotechar]; //@line 366 "_csv.c"
        var $43=($42)==0; //@line 366 "_csv.c"
        if ($43) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 366 "_csv.c"
      case 16: // $bb15
        var $44=HEAP[$quoting]; //@line 366 "_csv.c"
        var $45=($44)==0; //@line 366 "_csv.c"
        if ($45) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 366 "_csv.c"
      case 17: // $bb16
        var $46=HEAP[$skipinitialspace]; //@line 366 "_csv.c"
        var $47=($46)==0; //@line 366 "_csv.c"
        if ($47) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 366 "_csv.c"
      case 18: // $bb17
        var $48=HEAP[$strict]; //@line 366 "_csv.c"
        var $49=($48)==0; //@line 366 "_csv.c"
        if ($49) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 366 "_csv.c"
      case 19: // $bb18
        var $50=HEAP[$dialect]; //@line 375 "_csv.c"
        HEAP[$0]=$50; //@line 375 "_csv.c"
        __label__ = 110; break; //@line 375 "_csv.c"
      case 20: // $bb19
        var $51=HEAP[$type_addr]; //@line 378 "_csv.c"
        var $52=(($51+152)&4294967295); //@line 378 "_csv.c"
        var $53=HEAP[$52]; //@line 378 "_csv.c"
        var $54=HEAP[$type_addr]; //@line 378 "_csv.c"
        var $55=FUNCTION_TABLE[$53]($54, 0); //@line 378 "_csv.c"
        var $56=$55; //@line 378 "_csv.c"
        HEAP[$self]=$56; //@line 378 "_csv.c"
        var $57=HEAP[$self]; //@line 379 "_csv.c"
        var $58=($57)==0; //@line 379 "_csv.c"
        if ($58) { __label__ = 21; break; } else { __label__ = 25; break; } //@line 379 "_csv.c"
      case 21: // $bb20
        var $59=HEAP[$dialect]; //@line 380 "_csv.c"
        var $60=($59)!=0; //@line 380 "_csv.c"
        if ($60) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 380 "_csv.c"
      case 22: // $bb21
        var $61=HEAP[$dialect]; //@line 380 "_csv.c"
        var $62=(($61)&4294967295); //@line 380 "_csv.c"
        var $63=HEAP[$62]; //@line 380 "_csv.c"
        var $64=((($63) - 1)&4294967295); //@line 380 "_csv.c"
        var $65=(($61)&4294967295); //@line 380 "_csv.c"
        HEAP[$65]=$64; //@line 380 "_csv.c"
        var $66=(($61)&4294967295); //@line 380 "_csv.c"
        var $67=HEAP[$66]; //@line 380 "_csv.c"
        var $68=((($67))|0)==0; //@line 380 "_csv.c"
        if ($68) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 380 "_csv.c"
      case 23: // $bb22
        var $69=HEAP[$dialect]; //@line 380 "_csv.c"
        var $70=(($69+4)&4294967295); //@line 380 "_csv.c"
        var $71=HEAP[$70]; //@line 380 "_csv.c"
        var $72=(($71+24)&4294967295); //@line 380 "_csv.c"
        var $73=HEAP[$72]; //@line 380 "_csv.c"
        var $74=HEAP[$dialect]; //@line 380 "_csv.c"
        FUNCTION_TABLE[$73]($74); //@line 380 "_csv.c"
        __label__ = 24; break; //@line 380 "_csv.c"
      case 24: // $bb23
        HEAP[$0]=0; //@line 381 "_csv.c"
        __label__ = 110; break; //@line 381 "_csv.c"
      case 25: // $bb24
        var $75=HEAP[$self]; //@line 383 "_csv.c"
        var $76=(($75+20)&4294967295); //@line 383 "_csv.c"
        HEAP[$76]=0; //@line 383 "_csv.c"
        var $77=HEAP[$delimiter]; //@line 385 "_csv.c"
        var $78=($77)!=0; //@line 385 "_csv.c"
        if ($78) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 385 "_csv.c"
      case 26: // $bb25
        var $79=HEAP[$delimiter]; //@line 385 "_csv.c"
        var $80=(($79)&4294967295); //@line 385 "_csv.c"
        var $81=HEAP[$80]; //@line 385 "_csv.c"
        var $82=((($81) + 1)&4294967295); //@line 385 "_csv.c"
        var $83=(($79)&4294967295); //@line 385 "_csv.c"
        HEAP[$83]=$82; //@line 385 "_csv.c"
        __label__ = 27; break; //@line 385 "_csv.c"
      case 27: // $bb26
        var $84=HEAP[$doublequote]; //@line 386 "_csv.c"
        var $85=($84)!=0; //@line 386 "_csv.c"
        if ($85) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 386 "_csv.c"
      case 28: // $bb27
        var $86=HEAP[$doublequote]; //@line 386 "_csv.c"
        var $87=(($86)&4294967295); //@line 386 "_csv.c"
        var $88=HEAP[$87]; //@line 386 "_csv.c"
        var $89=((($88) + 1)&4294967295); //@line 386 "_csv.c"
        var $90=(($86)&4294967295); //@line 386 "_csv.c"
        HEAP[$90]=$89; //@line 386 "_csv.c"
        __label__ = 29; break; //@line 386 "_csv.c"
      case 29: // $bb28
        var $91=HEAP[$escapechar]; //@line 387 "_csv.c"
        var $92=($91)!=0; //@line 387 "_csv.c"
        if ($92) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 387 "_csv.c"
      case 30: // $bb29
        var $93=HEAP[$escapechar]; //@line 387 "_csv.c"
        var $94=(($93)&4294967295); //@line 387 "_csv.c"
        var $95=HEAP[$94]; //@line 387 "_csv.c"
        var $96=((($95) + 1)&4294967295); //@line 387 "_csv.c"
        var $97=(($93)&4294967295); //@line 387 "_csv.c"
        HEAP[$97]=$96; //@line 387 "_csv.c"
        __label__ = 31; break; //@line 387 "_csv.c"
      case 31: // $bb30
        var $98=HEAP[$lineterminator]; //@line 388 "_csv.c"
        var $99=($98)!=0; //@line 388 "_csv.c"
        if ($99) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 388 "_csv.c"
      case 32: // $bb31
        var $100=HEAP[$lineterminator]; //@line 388 "_csv.c"
        var $101=(($100)&4294967295); //@line 388 "_csv.c"
        var $102=HEAP[$101]; //@line 388 "_csv.c"
        var $103=((($102) + 1)&4294967295); //@line 388 "_csv.c"
        var $104=(($100)&4294967295); //@line 388 "_csv.c"
        HEAP[$104]=$103; //@line 388 "_csv.c"
        __label__ = 33; break; //@line 388 "_csv.c"
      case 33: // $bb32
        var $105=HEAP[$quotechar]; //@line 389 "_csv.c"
        var $106=($105)!=0; //@line 389 "_csv.c"
        if ($106) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 389 "_csv.c"
      case 34: // $bb33
        var $107=HEAP[$quotechar]; //@line 389 "_csv.c"
        var $108=(($107)&4294967295); //@line 389 "_csv.c"
        var $109=HEAP[$108]; //@line 389 "_csv.c"
        var $110=((($109) + 1)&4294967295); //@line 389 "_csv.c"
        var $111=(($107)&4294967295); //@line 389 "_csv.c"
        HEAP[$111]=$110; //@line 389 "_csv.c"
        __label__ = 35; break; //@line 389 "_csv.c"
      case 35: // $bb34
        var $112=HEAP[$quoting]; //@line 390 "_csv.c"
        var $113=($112)!=0; //@line 390 "_csv.c"
        if ($113) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 390 "_csv.c"
      case 36: // $bb35
        var $114=HEAP[$quoting]; //@line 390 "_csv.c"
        var $115=(($114)&4294967295); //@line 390 "_csv.c"
        var $116=HEAP[$115]; //@line 390 "_csv.c"
        var $117=((($116) + 1)&4294967295); //@line 390 "_csv.c"
        var $118=(($114)&4294967295); //@line 390 "_csv.c"
        HEAP[$118]=$117; //@line 390 "_csv.c"
        __label__ = 37; break; //@line 390 "_csv.c"
      case 37: // $bb36
        var $119=HEAP[$skipinitialspace]; //@line 391 "_csv.c"
        var $120=($119)!=0; //@line 391 "_csv.c"
        if ($120) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 391 "_csv.c"
      case 38: // $bb37
        var $121=HEAP[$skipinitialspace]; //@line 391 "_csv.c"
        var $122=(($121)&4294967295); //@line 391 "_csv.c"
        var $123=HEAP[$122]; //@line 391 "_csv.c"
        var $124=((($123) + 1)&4294967295); //@line 391 "_csv.c"
        var $125=(($121)&4294967295); //@line 391 "_csv.c"
        HEAP[$125]=$124; //@line 391 "_csv.c"
        __label__ = 39; break; //@line 391 "_csv.c"
      case 39: // $bb38
        var $126=HEAP[$strict]; //@line 392 "_csv.c"
        var $127=($126)!=0; //@line 392 "_csv.c"
        if ($127) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 392 "_csv.c"
      case 40: // $bb39
        var $128=HEAP[$strict]; //@line 392 "_csv.c"
        var $129=(($128)&4294967295); //@line 392 "_csv.c"
        var $130=HEAP[$129]; //@line 392 "_csv.c"
        var $131=((($130) + 1)&4294967295); //@line 392 "_csv.c"
        var $132=(($128)&4294967295); //@line 392 "_csv.c"
        HEAP[$132]=$131; //@line 392 "_csv.c"
        __label__ = 41; break; //@line 392 "_csv.c"
      case 41: // $bb40
        var $133=HEAP[$dialect]; //@line 393 "_csv.c"
        var $134=($133)!=0; //@line 393 "_csv.c"
        if ($134) { __label__ = 42; break; } else { __label__ = 59; break; } //@line 393 "_csv.c"
      case 42: // $bb41
        var $135=HEAP[$delimiter]; //@line 397 "_csv.c"
        var $136=($135)==0; //@line 397 "_csv.c"
        if ($136) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 397 "_csv.c"
      case 43: // $bb42
        var $137=HEAP[$dialect]; //@line 397 "_csv.c"
        var $138=_PyObject_GetAttrString($137, ((__str9)&4294967295)); //@line 397 "_csv.c"
        HEAP[$delimiter]=$138; //@line 397 "_csv.c"
        __label__ = 44; break; //@line 397 "_csv.c"
      case 44: // $bb43
        var $139=HEAP[$doublequote]; //@line 398 "_csv.c"
        var $140=($139)==0; //@line 398 "_csv.c"
        if ($140) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 398 "_csv.c"
      case 45: // $bb44
        var $141=HEAP[$dialect]; //@line 398 "_csv.c"
        var $142=_PyObject_GetAttrString($141, ((__str11)&4294967295)); //@line 398 "_csv.c"
        HEAP[$doublequote]=$142; //@line 398 "_csv.c"
        __label__ = 46; break; //@line 398 "_csv.c"
      case 46: // $bb45
        var $143=HEAP[$escapechar]; //@line 399 "_csv.c"
        var $144=($143)==0; //@line 399 "_csv.c"
        if ($144) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 399 "_csv.c"
      case 47: // $bb46
        var $145=HEAP[$dialect]; //@line 399 "_csv.c"
        var $146=_PyObject_GetAttrString($145, ((__str13)&4294967295)); //@line 399 "_csv.c"
        HEAP[$escapechar]=$146; //@line 399 "_csv.c"
        __label__ = 48; break; //@line 399 "_csv.c"
      case 48: // $bb47
        var $147=HEAP[$lineterminator]; //@line 400 "_csv.c"
        var $148=($147)==0; //@line 400 "_csv.c"
        if ($148) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 400 "_csv.c"
      case 49: // $bb48
        var $149=HEAP[$dialect]; //@line 400 "_csv.c"
        var $150=_PyObject_GetAttrString($149, ((__str14)&4294967295)); //@line 400 "_csv.c"
        HEAP[$lineterminator]=$150; //@line 400 "_csv.c"
        __label__ = 50; break; //@line 400 "_csv.c"
      case 50: // $bb49
        var $151=HEAP[$quotechar]; //@line 401 "_csv.c"
        var $152=($151)==0; //@line 401 "_csv.c"
        if ($152) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 401 "_csv.c"
      case 51: // $bb50
        var $153=HEAP[$dialect]; //@line 401 "_csv.c"
        var $154=_PyObject_GetAttrString($153, ((__str15)&4294967295)); //@line 401 "_csv.c"
        HEAP[$quotechar]=$154; //@line 401 "_csv.c"
        __label__ = 52; break; //@line 401 "_csv.c"
      case 52: // $bb51
        var $155=HEAP[$quoting]; //@line 402 "_csv.c"
        var $156=($155)==0; //@line 402 "_csv.c"
        if ($156) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 402 "_csv.c"
      case 53: // $bb52
        var $157=HEAP[$dialect]; //@line 402 "_csv.c"
        var $158=_PyObject_GetAttrString($157, ((__str16)&4294967295)); //@line 402 "_csv.c"
        HEAP[$quoting]=$158; //@line 402 "_csv.c"
        __label__ = 54; break; //@line 402 "_csv.c"
      case 54: // $bb53
        var $159=HEAP[$skipinitialspace]; //@line 403 "_csv.c"
        var $160=($159)==0; //@line 403 "_csv.c"
        if ($160) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 403 "_csv.c"
      case 55: // $bb54
        var $161=HEAP[$dialect]; //@line 403 "_csv.c"
        var $162=_PyObject_GetAttrString($161, ((__str10)&4294967295)); //@line 403 "_csv.c"
        HEAP[$skipinitialspace]=$162; //@line 403 "_csv.c"
        __label__ = 56; break; //@line 403 "_csv.c"
      case 56: // $bb55
        var $163=HEAP[$strict]; //@line 404 "_csv.c"
        var $164=($163)==0; //@line 404 "_csv.c"
        if ($164) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 404 "_csv.c"
      case 57: // $bb56
        var $165=HEAP[$dialect]; //@line 404 "_csv.c"
        var $166=_PyObject_GetAttrString($165, ((__str12)&4294967295)); //@line 404 "_csv.c"
        HEAP[$strict]=$166; //@line 404 "_csv.c"
        __label__ = 58; break; //@line 404 "_csv.c"
      case 58: // $bb57
        _PyErr_Clear(); //@line 405 "_csv.c"
        __label__ = 59; break; //@line 405 "_csv.c"
      case 59: // $bb58
        var $167=HEAP[$delimiter]; //@line 412 "_csv.c"
        var $168=HEAP[$self]; //@line 412 "_csv.c"
        var $169=(($168+12)&4294967295); //@line 412 "_csv.c"
        var $170=__set_char(((__str9)&4294967295), $169, $167, 44); //@line 412 "_csv.c"
        var $171=((($170))|0)!=0; //@line 412 "_csv.c"
        if ($171) { __label__ = 79; break; } else { __label__ = 60; break; } //@line 412 "_csv.c"
      case 60: // $bb59
        var $172=HEAP[$doublequote]; //@line 413 "_csv.c"
        var $173=HEAP[$self]; //@line 413 "_csv.c"
        var $174=(($173+8)&4294967295); //@line 413 "_csv.c"
        var $175=__set_bool(((__str11)&4294967295), $174, $172, 1); //@line 413 "_csv.c"
        var $176=((($175))|0)!=0; //@line 413 "_csv.c"
        if ($176) { __label__ = 79; break; } else { __label__ = 61; break; } //@line 413 "_csv.c"
      case 61: // $bb60
        var $177=HEAP[$escapechar]; //@line 414 "_csv.c"
        var $178=HEAP[$self]; //@line 414 "_csv.c"
        var $179=(($178+14)&4294967295); //@line 414 "_csv.c"
        var $180=__set_char(((__str13)&4294967295), $179, $177, 0); //@line 414 "_csv.c"
        var $181=((($180))|0)!=0; //@line 414 "_csv.c"
        if ($181) { __label__ = 79; break; } else { __label__ = 62; break; } //@line 414 "_csv.c"
      case 62: // $bb61
        var $182=HEAP[$lineterminator]; //@line 415 "_csv.c"
        var $183=HEAP[$self]; //@line 415 "_csv.c"
        var $184=(($183+20)&4294967295); //@line 415 "_csv.c"
        var $185=__set_str(((__str14)&4294967295), $184, $182, ((__str19)&4294967295)); //@line 415 "_csv.c"
        var $186=((($185))|0)!=0; //@line 415 "_csv.c"
        if ($186) { __label__ = 79; break; } else { __label__ = 63; break; } //@line 415 "_csv.c"
      case 63: // $bb62
        var $187=HEAP[$quotechar]; //@line 416 "_csv.c"
        var $188=HEAP[$self]; //@line 416 "_csv.c"
        var $189=(($188+13)&4294967295); //@line 416 "_csv.c"
        var $190=__set_char(((__str15)&4294967295), $189, $187, 34); //@line 416 "_csv.c"
        var $191=((($190))|0)!=0; //@line 416 "_csv.c"
        if ($191) { __label__ = 79; break; } else { __label__ = 64; break; } //@line 416 "_csv.c"
      case 64: // $bb63
        var $192=HEAP[$quoting]; //@line 417 "_csv.c"
        var $193=HEAP[$self]; //@line 417 "_csv.c"
        var $194=(($193+24)&4294967295); //@line 417 "_csv.c"
        var $195=__set_int(((__str16)&4294967295), $194, $192, 0); //@line 417 "_csv.c"
        var $196=((($195))|0)!=0; //@line 417 "_csv.c"
        if ($196) { __label__ = 79; break; } else { __label__ = 65; break; } //@line 417 "_csv.c"
      case 65: // $bb64
        var $197=HEAP[$skipinitialspace]; //@line 418 "_csv.c"
        var $198=HEAP[$self]; //@line 418 "_csv.c"
        var $199=(($198+16)&4294967295); //@line 418 "_csv.c"
        var $200=__set_bool(((__str10)&4294967295), $199, $197, 0); //@line 418 "_csv.c"
        var $201=((($200))|0)!=0; //@line 418 "_csv.c"
        if ($201) { __label__ = 79; break; } else { __label__ = 66; break; } //@line 418 "_csv.c"
      case 66: // $bb65
        var $202=HEAP[$strict]; //@line 419 "_csv.c"
        var $203=HEAP[$self]; //@line 419 "_csv.c"
        var $204=(($203+28)&4294967295); //@line 419 "_csv.c"
        var $205=__set_bool(((__str12)&4294967295), $204, $202, 0); //@line 419 "_csv.c"
        var $206=((($205))|0)!=0; //@line 419 "_csv.c"
        if ($206) { __label__ = 79; break; } else { __label__ = 67; break; } //@line 419 "_csv.c"
      case 67: // $bb66
        var $207=HEAP[$self]; //@line 422 "_csv.c"
        var $208=(($207+24)&4294967295); //@line 422 "_csv.c"
        var $209=HEAP[$208]; //@line 422 "_csv.c"
        var $210=_dialect_check_quoting($209); //@line 422 "_csv.c"
        var $211=((($210))|0)!=0; //@line 422 "_csv.c"
        if ($211) { __label__ = 79; break; } else { __label__ = 68; break; } //@line 422 "_csv.c"
      case 68: // $bb67
        var $212=HEAP[$self]; //@line 424 "_csv.c"
        var $213=(($212+12)&4294967295); //@line 424 "_csv.c"
        var $214=HEAP[$213]; //@line 424 "_csv.c"
        var $215=reSign(($214), 8, 0)==0; //@line 424 "_csv.c"
        if ($215) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 424 "_csv.c"
      case 69: // $bb68
        var $216=HEAP[_PyExc_TypeError]; //@line 425 "_csv.c"
        _PyErr_SetString($216, ((__str20)&4294967295)); //@line 425 "_csv.c"
        __label__ = 79; break; //@line 425 "_csv.c"
      case 70: // $bb69
        var $217=HEAP[$quotechar]; //@line 428 "_csv.c"
        var $218=($217)==(__Py_NoneStruct); //@line 428 "_csv.c"
        if ($218) { __label__ = 71; break; } else { __label__ = 73; break; } //@line 428 "_csv.c"
      case 71: // $bb70
        var $219=HEAP[$quoting]; //@line 428 "_csv.c"
        var $220=($219)==0; //@line 428 "_csv.c"
        if ($220) { __label__ = 72; break; } else { __label__ = 73; break; } //@line 428 "_csv.c"
      case 72: // $bb71
        var $221=HEAP[$self]; //@line 429 "_csv.c"
        var $222=(($221+24)&4294967295); //@line 429 "_csv.c"
        HEAP[$222]=3; //@line 429 "_csv.c"
        __label__ = 73; break; //@line 429 "_csv.c"
      case 73: // $bb72
        var $223=HEAP[$self]; //@line 430 "_csv.c"
        var $224=(($223+24)&4294967295); //@line 430 "_csv.c"
        var $225=HEAP[$224]; //@line 430 "_csv.c"
        var $226=((($225))|0)!=3; //@line 430 "_csv.c"
        if ($226) { __label__ = 74; break; } else { __label__ = 76; break; } //@line 430 "_csv.c"
      case 74: // $bb73
        var $227=HEAP[$self]; //@line 430 "_csv.c"
        var $228=(($227+13)&4294967295); //@line 430 "_csv.c"
        var $229=HEAP[$228]; //@line 430 "_csv.c"
        var $230=reSign(($229), 8, 0)==0; //@line 430 "_csv.c"
        if ($230) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 430 "_csv.c"
      case 75: // $bb74
        var $231=HEAP[_PyExc_TypeError]; //@line 431 "_csv.c"
        _PyErr_SetString($231, ((__str21)&4294967295)); //@line 431 "_csv.c"
        __label__ = 79; break; //@line 431 "_csv.c"
      case 76: // $bb75
        var $232=HEAP[$self]; //@line 435 "_csv.c"
        var $233=(($232+20)&4294967295); //@line 435 "_csv.c"
        var $234=HEAP[$233]; //@line 435 "_csv.c"
        var $235=($234)==0; //@line 435 "_csv.c"
        if ($235) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 435 "_csv.c"
      case 77: // $bb76
        var $236=HEAP[_PyExc_TypeError]; //@line 436 "_csv.c"
        _PyErr_SetString($236, ((__str22)&4294967295)); //@line 436 "_csv.c"
        __label__ = 79; break; //@line 436 "_csv.c"
      case 78: // $bb77
        var $237=HEAP[$self]; //@line 440 "_csv.c"
        var $238=$237; //@line 440 "_csv.c"
        HEAP[$ret]=$238; //@line 440 "_csv.c"
        var $239=HEAP[$self]; //@line 441 "_csv.c"
        var $240=$239; //@line 441 "_csv.c"
        var $241=(($240)&4294967295); //@line 441 "_csv.c"
        var $242=HEAP[$241]; //@line 441 "_csv.c"
        var $243=((($242) + 1)&4294967295); //@line 441 "_csv.c"
        var $244=(($240)&4294967295); //@line 441 "_csv.c"
        HEAP[$244]=$243; //@line 441 "_csv.c"
        __label__ = 79; break; //@line 442 "_csv.c"
      case 79: // $err
        var $245=HEAP[$self]; //@line 443 "_csv.c"
        var $246=($245)!=0; //@line 443 "_csv.c"
        if ($246) { __label__ = 80; break; } else { __label__ = 82; break; } //@line 443 "_csv.c"
      case 80: // $bb78
        var $247=HEAP[$self]; //@line 443 "_csv.c"
        var $248=$247; //@line 443 "_csv.c"
        var $249=(($248)&4294967295); //@line 443 "_csv.c"
        var $250=HEAP[$249]; //@line 443 "_csv.c"
        var $251=((($250) - 1)&4294967295); //@line 443 "_csv.c"
        var $252=(($248)&4294967295); //@line 443 "_csv.c"
        HEAP[$252]=$251; //@line 443 "_csv.c"
        var $253=(($248)&4294967295); //@line 443 "_csv.c"
        var $254=HEAP[$253]; //@line 443 "_csv.c"
        var $255=((($254))|0)==0; //@line 443 "_csv.c"
        if ($255) { __label__ = 81; break; } else { __label__ = 82; break; } //@line 443 "_csv.c"
      case 81: // $bb79
        var $256=HEAP[$self]; //@line 443 "_csv.c"
        var $257=$256; //@line 443 "_csv.c"
        var $258=(($257+4)&4294967295); //@line 443 "_csv.c"
        var $259=HEAP[$258]; //@line 443 "_csv.c"
        var $260=(($259+24)&4294967295); //@line 443 "_csv.c"
        var $261=HEAP[$260]; //@line 443 "_csv.c"
        var $262=HEAP[$self]; //@line 443 "_csv.c"
        var $263=$262; //@line 443 "_csv.c"
        FUNCTION_TABLE[$261]($263); //@line 443 "_csv.c"
        __label__ = 82; break; //@line 443 "_csv.c"
      case 82: // $bb80
        var $264=HEAP[$dialect]; //@line 444 "_csv.c"
        var $265=($264)!=0; //@line 444 "_csv.c"
        if ($265) { __label__ = 83; break; } else { __label__ = 85; break; } //@line 444 "_csv.c"
      case 83: // $bb81
        var $266=HEAP[$dialect]; //@line 444 "_csv.c"
        var $267=(($266)&4294967295); //@line 444 "_csv.c"
        var $268=HEAP[$267]; //@line 444 "_csv.c"
        var $269=((($268) - 1)&4294967295); //@line 444 "_csv.c"
        var $270=(($266)&4294967295); //@line 444 "_csv.c"
        HEAP[$270]=$269; //@line 444 "_csv.c"
        var $271=(($266)&4294967295); //@line 444 "_csv.c"
        var $272=HEAP[$271]; //@line 444 "_csv.c"
        var $273=((($272))|0)==0; //@line 444 "_csv.c"
        if ($273) { __label__ = 84; break; } else { __label__ = 85; break; } //@line 444 "_csv.c"
      case 84: // $bb82
        var $274=HEAP[$dialect]; //@line 444 "_csv.c"
        var $275=(($274+4)&4294967295); //@line 444 "_csv.c"
        var $276=HEAP[$275]; //@line 444 "_csv.c"
        var $277=(($276+24)&4294967295); //@line 444 "_csv.c"
        var $278=HEAP[$277]; //@line 444 "_csv.c"
        var $279=HEAP[$dialect]; //@line 444 "_csv.c"
        FUNCTION_TABLE[$278]($279); //@line 444 "_csv.c"
        __label__ = 85; break; //@line 444 "_csv.c"
      case 85: // $bb83
        var $280=HEAP[$delimiter]; //@line 445 "_csv.c"
        var $281=($280)!=0; //@line 445 "_csv.c"
        if ($281) { __label__ = 86; break; } else { __label__ = 88; break; } //@line 445 "_csv.c"
      case 86: // $bb84
        var $282=HEAP[$delimiter]; //@line 445 "_csv.c"
        var $283=(($282)&4294967295); //@line 445 "_csv.c"
        var $284=HEAP[$283]; //@line 445 "_csv.c"
        var $285=((($284) - 1)&4294967295); //@line 445 "_csv.c"
        var $286=(($282)&4294967295); //@line 445 "_csv.c"
        HEAP[$286]=$285; //@line 445 "_csv.c"
        var $287=(($282)&4294967295); //@line 445 "_csv.c"
        var $288=HEAP[$287]; //@line 445 "_csv.c"
        var $289=((($288))|0)==0; //@line 445 "_csv.c"
        if ($289) { __label__ = 87; break; } else { __label__ = 88; break; } //@line 445 "_csv.c"
      case 87: // $bb85
        var $290=HEAP[$delimiter]; //@line 445 "_csv.c"
        var $291=(($290+4)&4294967295); //@line 445 "_csv.c"
        var $292=HEAP[$291]; //@line 445 "_csv.c"
        var $293=(($292+24)&4294967295); //@line 445 "_csv.c"
        var $294=HEAP[$293]; //@line 445 "_csv.c"
        var $295=HEAP[$delimiter]; //@line 445 "_csv.c"
        FUNCTION_TABLE[$294]($295); //@line 445 "_csv.c"
        __label__ = 88; break; //@line 445 "_csv.c"
      case 88: // $bb86
        var $296=HEAP[$doublequote]; //@line 446 "_csv.c"
        var $297=($296)!=0; //@line 446 "_csv.c"
        if ($297) { __label__ = 89; break; } else { __label__ = 91; break; } //@line 446 "_csv.c"
      case 89: // $bb87
        var $298=HEAP[$doublequote]; //@line 446 "_csv.c"
        var $299=(($298)&4294967295); //@line 446 "_csv.c"
        var $300=HEAP[$299]; //@line 446 "_csv.c"
        var $301=((($300) - 1)&4294967295); //@line 446 "_csv.c"
        var $302=(($298)&4294967295); //@line 446 "_csv.c"
        HEAP[$302]=$301; //@line 446 "_csv.c"
        var $303=(($298)&4294967295); //@line 446 "_csv.c"
        var $304=HEAP[$303]; //@line 446 "_csv.c"
        var $305=((($304))|0)==0; //@line 446 "_csv.c"
        if ($305) { __label__ = 90; break; } else { __label__ = 91; break; } //@line 446 "_csv.c"
      case 90: // $bb88
        var $306=HEAP[$doublequote]; //@line 446 "_csv.c"
        var $307=(($306+4)&4294967295); //@line 446 "_csv.c"
        var $308=HEAP[$307]; //@line 446 "_csv.c"
        var $309=(($308+24)&4294967295); //@line 446 "_csv.c"
        var $310=HEAP[$309]; //@line 446 "_csv.c"
        var $311=HEAP[$doublequote]; //@line 446 "_csv.c"
        FUNCTION_TABLE[$310]($311); //@line 446 "_csv.c"
        __label__ = 91; break; //@line 446 "_csv.c"
      case 91: // $bb89
        var $312=HEAP[$escapechar]; //@line 447 "_csv.c"
        var $313=($312)!=0; //@line 447 "_csv.c"
        if ($313) { __label__ = 92; break; } else { __label__ = 94; break; } //@line 447 "_csv.c"
      case 92: // $bb90
        var $314=HEAP[$escapechar]; //@line 447 "_csv.c"
        var $315=(($314)&4294967295); //@line 447 "_csv.c"
        var $316=HEAP[$315]; //@line 447 "_csv.c"
        var $317=((($316) - 1)&4294967295); //@line 447 "_csv.c"
        var $318=(($314)&4294967295); //@line 447 "_csv.c"
        HEAP[$318]=$317; //@line 447 "_csv.c"
        var $319=(($314)&4294967295); //@line 447 "_csv.c"
        var $320=HEAP[$319]; //@line 447 "_csv.c"
        var $321=((($320))|0)==0; //@line 447 "_csv.c"
        if ($321) { __label__ = 93; break; } else { __label__ = 94; break; } //@line 447 "_csv.c"
      case 93: // $bb91
        var $322=HEAP[$escapechar]; //@line 447 "_csv.c"
        var $323=(($322+4)&4294967295); //@line 447 "_csv.c"
        var $324=HEAP[$323]; //@line 447 "_csv.c"
        var $325=(($324+24)&4294967295); //@line 447 "_csv.c"
        var $326=HEAP[$325]; //@line 447 "_csv.c"
        var $327=HEAP[$escapechar]; //@line 447 "_csv.c"
        FUNCTION_TABLE[$326]($327); //@line 447 "_csv.c"
        __label__ = 94; break; //@line 447 "_csv.c"
      case 94: // $bb92
        var $328=HEAP[$lineterminator]; //@line 448 "_csv.c"
        var $329=($328)!=0; //@line 448 "_csv.c"
        if ($329) { __label__ = 95; break; } else { __label__ = 97; break; } //@line 448 "_csv.c"
      case 95: // $bb93
        var $330=HEAP[$lineterminator]; //@line 448 "_csv.c"
        var $331=(($330)&4294967295); //@line 448 "_csv.c"
        var $332=HEAP[$331]; //@line 448 "_csv.c"
        var $333=((($332) - 1)&4294967295); //@line 448 "_csv.c"
        var $334=(($330)&4294967295); //@line 448 "_csv.c"
        HEAP[$334]=$333; //@line 448 "_csv.c"
        var $335=(($330)&4294967295); //@line 448 "_csv.c"
        var $336=HEAP[$335]; //@line 448 "_csv.c"
        var $337=((($336))|0)==0; //@line 448 "_csv.c"
        if ($337) { __label__ = 96; break; } else { __label__ = 97; break; } //@line 448 "_csv.c"
      case 96: // $bb94
        var $338=HEAP[$lineterminator]; //@line 448 "_csv.c"
        var $339=(($338+4)&4294967295); //@line 448 "_csv.c"
        var $340=HEAP[$339]; //@line 448 "_csv.c"
        var $341=(($340+24)&4294967295); //@line 448 "_csv.c"
        var $342=HEAP[$341]; //@line 448 "_csv.c"
        var $343=HEAP[$lineterminator]; //@line 448 "_csv.c"
        FUNCTION_TABLE[$342]($343); //@line 448 "_csv.c"
        __label__ = 97; break; //@line 448 "_csv.c"
      case 97: // $bb95
        var $344=HEAP[$quotechar]; //@line 449 "_csv.c"
        var $345=($344)!=0; //@line 449 "_csv.c"
        if ($345) { __label__ = 98; break; } else { __label__ = 100; break; } //@line 449 "_csv.c"
      case 98: // $bb96
        var $346=HEAP[$quotechar]; //@line 449 "_csv.c"
        var $347=(($346)&4294967295); //@line 449 "_csv.c"
        var $348=HEAP[$347]; //@line 449 "_csv.c"
        var $349=((($348) - 1)&4294967295); //@line 449 "_csv.c"
        var $350=(($346)&4294967295); //@line 449 "_csv.c"
        HEAP[$350]=$349; //@line 449 "_csv.c"
        var $351=(($346)&4294967295); //@line 449 "_csv.c"
        var $352=HEAP[$351]; //@line 449 "_csv.c"
        var $353=((($352))|0)==0; //@line 449 "_csv.c"
        if ($353) { __label__ = 99; break; } else { __label__ = 100; break; } //@line 449 "_csv.c"
      case 99: // $bb97
        var $354=HEAP[$quotechar]; //@line 449 "_csv.c"
        var $355=(($354+4)&4294967295); //@line 449 "_csv.c"
        var $356=HEAP[$355]; //@line 449 "_csv.c"
        var $357=(($356+24)&4294967295); //@line 449 "_csv.c"
        var $358=HEAP[$357]; //@line 449 "_csv.c"
        var $359=HEAP[$quotechar]; //@line 449 "_csv.c"
        FUNCTION_TABLE[$358]($359); //@line 449 "_csv.c"
        __label__ = 100; break; //@line 449 "_csv.c"
      case 100: // $bb98
        var $360=HEAP[$quoting]; //@line 450 "_csv.c"
        var $361=($360)!=0; //@line 450 "_csv.c"
        if ($361) { __label__ = 101; break; } else { __label__ = 103; break; } //@line 450 "_csv.c"
      case 101: // $bb99
        var $362=HEAP[$quoting]; //@line 450 "_csv.c"
        var $363=(($362)&4294967295); //@line 450 "_csv.c"
        var $364=HEAP[$363]; //@line 450 "_csv.c"
        var $365=((($364) - 1)&4294967295); //@line 450 "_csv.c"
        var $366=(($362)&4294967295); //@line 450 "_csv.c"
        HEAP[$366]=$365; //@line 450 "_csv.c"
        var $367=(($362)&4294967295); //@line 450 "_csv.c"
        var $368=HEAP[$367]; //@line 450 "_csv.c"
        var $369=((($368))|0)==0; //@line 450 "_csv.c"
        if ($369) { __label__ = 102; break; } else { __label__ = 103; break; } //@line 450 "_csv.c"
      case 102: // $bb100
        var $370=HEAP[$quoting]; //@line 450 "_csv.c"
        var $371=(($370+4)&4294967295); //@line 450 "_csv.c"
        var $372=HEAP[$371]; //@line 450 "_csv.c"
        var $373=(($372+24)&4294967295); //@line 450 "_csv.c"
        var $374=HEAP[$373]; //@line 450 "_csv.c"
        var $375=HEAP[$quoting]; //@line 450 "_csv.c"
        FUNCTION_TABLE[$374]($375); //@line 450 "_csv.c"
        __label__ = 103; break; //@line 450 "_csv.c"
      case 103: // $bb101
        var $376=HEAP[$skipinitialspace]; //@line 451 "_csv.c"
        var $377=($376)!=0; //@line 451 "_csv.c"
        if ($377) { __label__ = 104; break; } else { __label__ = 106; break; } //@line 451 "_csv.c"
      case 104: // $bb102
        var $378=HEAP[$skipinitialspace]; //@line 451 "_csv.c"
        var $379=(($378)&4294967295); //@line 451 "_csv.c"
        var $380=HEAP[$379]; //@line 451 "_csv.c"
        var $381=((($380) - 1)&4294967295); //@line 451 "_csv.c"
        var $382=(($378)&4294967295); //@line 451 "_csv.c"
        HEAP[$382]=$381; //@line 451 "_csv.c"
        var $383=(($378)&4294967295); //@line 451 "_csv.c"
        var $384=HEAP[$383]; //@line 451 "_csv.c"
        var $385=((($384))|0)==0; //@line 451 "_csv.c"
        if ($385) { __label__ = 105; break; } else { __label__ = 106; break; } //@line 451 "_csv.c"
      case 105: // $bb103
        var $386=HEAP[$skipinitialspace]; //@line 451 "_csv.c"
        var $387=(($386+4)&4294967295); //@line 451 "_csv.c"
        var $388=HEAP[$387]; //@line 451 "_csv.c"
        var $389=(($388+24)&4294967295); //@line 451 "_csv.c"
        var $390=HEAP[$389]; //@line 451 "_csv.c"
        var $391=HEAP[$skipinitialspace]; //@line 451 "_csv.c"
        FUNCTION_TABLE[$390]($391); //@line 451 "_csv.c"
        __label__ = 106; break; //@line 451 "_csv.c"
      case 106: // $bb104
        var $392=HEAP[$strict]; //@line 452 "_csv.c"
        var $393=($392)!=0; //@line 452 "_csv.c"
        if ($393) { __label__ = 107; break; } else { __label__ = 109; break; } //@line 452 "_csv.c"
      case 107: // $bb105
        var $394=HEAP[$strict]; //@line 452 "_csv.c"
        var $395=(($394)&4294967295); //@line 452 "_csv.c"
        var $396=HEAP[$395]; //@line 452 "_csv.c"
        var $397=((($396) - 1)&4294967295); //@line 452 "_csv.c"
        var $398=(($394)&4294967295); //@line 452 "_csv.c"
        HEAP[$398]=$397; //@line 452 "_csv.c"
        var $399=(($394)&4294967295); //@line 452 "_csv.c"
        var $400=HEAP[$399]; //@line 452 "_csv.c"
        var $401=((($400))|0)==0; //@line 452 "_csv.c"
        if ($401) { __label__ = 108; break; } else { __label__ = 109; break; } //@line 452 "_csv.c"
      case 108: // $bb106
        var $402=HEAP[$strict]; //@line 452 "_csv.c"
        var $403=(($402+4)&4294967295); //@line 452 "_csv.c"
        var $404=HEAP[$403]; //@line 452 "_csv.c"
        var $405=(($404+24)&4294967295); //@line 452 "_csv.c"
        var $406=HEAP[$405]; //@line 452 "_csv.c"
        var $407=HEAP[$strict]; //@line 452 "_csv.c"
        FUNCTION_TABLE[$406]($407); //@line 452 "_csv.c"
        __label__ = 109; break; //@line 452 "_csv.c"
      case 109: // $bb107
        var $408=HEAP[$ret]; //@line 453 "_csv.c"
        HEAP[$0]=$408; //@line 453 "_csv.c"
        __label__ = 110; break; //@line 453 "_csv.c"
      case 110: // $bb108
        var $409=HEAP[$0]; //@line 355 "_csv.c"
        HEAP[$retval]=$409; //@line 355 "_csv.c"
        __label__ = 111; break; //@line 355 "_csv.c"
      case 111: // $return
        var $retval109=HEAP[$retval]; //@line 355 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval109; //@line 355 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __call_dialect($dialect_inst, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dialect_inst_addr=__stackBase__;
        var $kwargs_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $iftmp_115=__stackBase__+16;
        var $ctor_args=__stackBase__+20;
        var $dialect=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$dialect_inst_addr]=$dialect_inst;
        HEAP[$kwargs_addr]=$kwargs;
        var $1=HEAP[$dialect_inst_addr]; //@line 515 "_csv.c"
        var $2=($1)!=0; //@line 515 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 515 "_csv.c"
      case 1: // $bb
        HEAP[$iftmp_115]=((__str24)&4294967295); //@line 515 "_csv.c"
        __label__ = 3; break; //@line 515 "_csv.c"
      case 2: // $bb1
        HEAP[$iftmp_115]=((__str25)&4294967295); //@line 515 "_csv.c"
        __label__ = 3; break; //@line 515 "_csv.c"
      case 3: // $bb2
        var $3=HEAP[$iftmp_115]; //@line 515 "_csv.c"
        var $4=HEAP[$dialect_inst_addr]; //@line 515 "_csv.c"
        var $5=_Py_BuildValue($3, $4); //@line 515 "_csv.c"
        HEAP[$ctor_args]=$5; //@line 515 "_csv.c"
        var $6=HEAP[$ctor_args]; //@line 516 "_csv.c"
        var $7=($6)==0; //@line 516 "_csv.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 516 "_csv.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 517 "_csv.c"
        __label__ = 8; break; //@line 517 "_csv.c"
      case 5: // $bb4
        var $8=HEAP[$ctor_args]; //@line 518 "_csv.c"
        var $9=HEAP[$kwargs_addr]; //@line 518 "_csv.c"
        var $10=_PyObject_Call(_Dialect_Type, $8, $9); //@line 518 "_csv.c"
        HEAP[$dialect]=$10; //@line 518 "_csv.c"
        var $11=HEAP[$ctor_args]; //@line 519 "_csv.c"
        var $12=(($11)&4294967295); //@line 519 "_csv.c"
        var $13=HEAP[$12]; //@line 519 "_csv.c"
        var $14=((($13) - 1)&4294967295); //@line 519 "_csv.c"
        var $15=HEAP[$ctor_args]; //@line 519 "_csv.c"
        var $16=(($15)&4294967295); //@line 519 "_csv.c"
        HEAP[$16]=$14; //@line 519 "_csv.c"
        var $17=HEAP[$ctor_args]; //@line 519 "_csv.c"
        var $18=(($17)&4294967295); //@line 519 "_csv.c"
        var $19=HEAP[$18]; //@line 519 "_csv.c"
        var $20=((($19))|0)==0; //@line 519 "_csv.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 519 "_csv.c"
      case 6: // $bb5
        var $21=HEAP[$ctor_args]; //@line 519 "_csv.c"
        var $22=(($21+4)&4294967295); //@line 519 "_csv.c"
        var $23=HEAP[$22]; //@line 519 "_csv.c"
        var $24=(($23+24)&4294967295); //@line 519 "_csv.c"
        var $25=HEAP[$24]; //@line 519 "_csv.c"
        var $26=HEAP[$ctor_args]; //@line 519 "_csv.c"
        FUNCTION_TABLE[$25]($26); //@line 519 "_csv.c"
        __label__ = 7; break; //@line 519 "_csv.c"
      case 7: // $bb6
        var $27=HEAP[$dialect]; //@line 520 "_csv.c"
        HEAP[$0]=$27; //@line 520 "_csv.c"
        __label__ = 8; break; //@line 520 "_csv.c"
      case 8: // $bb7
        var $28=HEAP[$0]; //@line 517 "_csv.c"
        HEAP[$retval]=$28; //@line 517 "_csv.c"
        __label__ = 9; break; //@line 517 "_csv.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 517 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 517 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parse_save_field($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $field=__stackBase__+12;
        var $tmp=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 531 "_csv.c"
        var $2=(($1+32)&4294967295); //@line 531 "_csv.c"
        var $3=HEAP[$2]; //@line 531 "_csv.c"
        var $4=HEAP[$self_addr]; //@line 531 "_csv.c"
        var $5=(($4+24)&4294967295); //@line 531 "_csv.c"
        var $6=HEAP[$5]; //@line 531 "_csv.c"
        var $7=_PyString_FromStringAndSize($6, $3); //@line 531 "_csv.c"
        HEAP[$field]=$7; //@line 531 "_csv.c"
        var $8=HEAP[$field]; //@line 532 "_csv.c"
        var $9=($8)==0; //@line 532 "_csv.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 532 "_csv.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 533 "_csv.c"
        __label__ = 13; break; //@line 533 "_csv.c"
      case 2: // $bb1
        var $10=HEAP[$self_addr]; //@line 534 "_csv.c"
        var $11=(($10+32)&4294967295); //@line 534 "_csv.c"
        HEAP[$11]=0; //@line 534 "_csv.c"
        var $12=HEAP[$self_addr]; //@line 535 "_csv.c"
        var $13=(($12+36)&4294967295); //@line 535 "_csv.c"
        var $14=HEAP[$13]; //@line 535 "_csv.c"
        var $15=((($14))|0)!=0; //@line 535 "_csv.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 535 "_csv.c"
      case 3: // $bb2
        var $16=HEAP[$self_addr]; //@line 538 "_csv.c"
        var $17=(($16+36)&4294967295); //@line 538 "_csv.c"
        HEAP[$17]=0; //@line 538 "_csv.c"
        var $18=HEAP[$field]; //@line 539 "_csv.c"
        var $19=_PyNumber_Float($18); //@line 539 "_csv.c"
        HEAP[$tmp]=$19; //@line 539 "_csv.c"
        var $20=HEAP[$tmp]; //@line 540 "_csv.c"
        var $21=($20)==0; //@line 540 "_csv.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 540 "_csv.c"
      case 4: // $bb3
        var $22=HEAP[$field]; //@line 541 "_csv.c"
        var $23=(($22)&4294967295); //@line 541 "_csv.c"
        var $24=HEAP[$23]; //@line 541 "_csv.c"
        var $25=((($24) - 1)&4294967295); //@line 541 "_csv.c"
        var $26=HEAP[$field]; //@line 541 "_csv.c"
        var $27=(($26)&4294967295); //@line 541 "_csv.c"
        HEAP[$27]=$25; //@line 541 "_csv.c"
        var $28=HEAP[$field]; //@line 541 "_csv.c"
        var $29=(($28)&4294967295); //@line 541 "_csv.c"
        var $30=HEAP[$29]; //@line 541 "_csv.c"
        var $31=((($30))|0)==0; //@line 541 "_csv.c"
        if ($31) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 541 "_csv.c"
      case 5: // $bb4
        var $32=HEAP[$field]; //@line 541 "_csv.c"
        var $33=(($32+4)&4294967295); //@line 541 "_csv.c"
        var $34=HEAP[$33]; //@line 541 "_csv.c"
        var $35=(($34+24)&4294967295); //@line 541 "_csv.c"
        var $36=HEAP[$35]; //@line 541 "_csv.c"
        var $37=HEAP[$field]; //@line 541 "_csv.c"
        FUNCTION_TABLE[$36]($37); //@line 541 "_csv.c"
        __label__ = 6; break; //@line 541 "_csv.c"
      case 6: // $bb5
        HEAP[$0]=-1; //@line 542 "_csv.c"
        __label__ = 13; break; //@line 542 "_csv.c"
      case 7: // $bb6
        var $38=HEAP[$field]; //@line 544 "_csv.c"
        var $39=(($38)&4294967295); //@line 544 "_csv.c"
        var $40=HEAP[$39]; //@line 544 "_csv.c"
        var $41=((($40) - 1)&4294967295); //@line 544 "_csv.c"
        var $42=HEAP[$field]; //@line 544 "_csv.c"
        var $43=(($42)&4294967295); //@line 544 "_csv.c"
        HEAP[$43]=$41; //@line 544 "_csv.c"
        var $44=HEAP[$field]; //@line 544 "_csv.c"
        var $45=(($44)&4294967295); //@line 544 "_csv.c"
        var $46=HEAP[$45]; //@line 544 "_csv.c"
        var $47=((($46))|0)==0; //@line 544 "_csv.c"
        if ($47) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 544 "_csv.c"
      case 8: // $bb7
        var $48=HEAP[$field]; //@line 544 "_csv.c"
        var $49=(($48+4)&4294967295); //@line 544 "_csv.c"
        var $50=HEAP[$49]; //@line 544 "_csv.c"
        var $51=(($50+24)&4294967295); //@line 544 "_csv.c"
        var $52=HEAP[$51]; //@line 544 "_csv.c"
        var $53=HEAP[$field]; //@line 544 "_csv.c"
        FUNCTION_TABLE[$52]($53); //@line 544 "_csv.c"
        __label__ = 9; break; //@line 544 "_csv.c"
      case 9: // $bb8
        var $54=HEAP[$tmp]; //@line 545 "_csv.c"
        HEAP[$field]=$54; //@line 545 "_csv.c"
        __label__ = 10; break; //@line 545 "_csv.c"
      case 10: // $bb9
        var $55=HEAP[$self_addr]; //@line 547 "_csv.c"
        var $56=(($55+16)&4294967295); //@line 547 "_csv.c"
        var $57=HEAP[$56]; //@line 547 "_csv.c"
        var $58=HEAP[$field]; //@line 547 "_csv.c"
        var $59=_PyList_Append($57, $58); //@line 547 "_csv.c"
        var $60=HEAP[$field]; //@line 548 "_csv.c"
        var $61=(($60)&4294967295); //@line 548 "_csv.c"
        var $62=HEAP[$61]; //@line 548 "_csv.c"
        var $63=((($62) - 1)&4294967295); //@line 548 "_csv.c"
        var $64=HEAP[$field]; //@line 548 "_csv.c"
        var $65=(($64)&4294967295); //@line 548 "_csv.c"
        HEAP[$65]=$63; //@line 548 "_csv.c"
        var $66=HEAP[$field]; //@line 548 "_csv.c"
        var $67=(($66)&4294967295); //@line 548 "_csv.c"
        var $68=HEAP[$67]; //@line 548 "_csv.c"
        var $69=((($68))|0)==0; //@line 548 "_csv.c"
        if ($69) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 548 "_csv.c"
      case 11: // $bb10
        var $70=HEAP[$field]; //@line 548 "_csv.c"
        var $71=(($70+4)&4294967295); //@line 548 "_csv.c"
        var $72=HEAP[$71]; //@line 548 "_csv.c"
        var $73=(($72+24)&4294967295); //@line 548 "_csv.c"
        var $74=HEAP[$73]; //@line 548 "_csv.c"
        var $75=HEAP[$field]; //@line 548 "_csv.c"
        FUNCTION_TABLE[$74]($75); //@line 548 "_csv.c"
        __label__ = 12; break; //@line 548 "_csv.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 549 "_csv.c"
        __label__ = 13; break; //@line 549 "_csv.c"
      case 13: // $bb12
        var $76=HEAP[$0]; //@line 533 "_csv.c"
        HEAP[$retval]=$76; //@line 533 "_csv.c"
        __label__ = 14; break; //@line 533 "_csv.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 533 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 533 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parse_grow_buff($self) {
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
        var $1=HEAP[$self_addr]; //@line 555 "_csv.c"
        var $2=(($1+28)&4294967295); //@line 555 "_csv.c"
        var $3=HEAP[$2]; //@line 555 "_csv.c"
        var $4=((($3))|0)==0; //@line 555 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 555 "_csv.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 556 "_csv.c"
        var $6=(($5+28)&4294967295); //@line 556 "_csv.c"
        HEAP[$6]=4096; //@line 556 "_csv.c"
        var $7=HEAP[$self_addr]; //@line 557 "_csv.c"
        var $8=(($7+24)&4294967295); //@line 557 "_csv.c"
        var $9=HEAP[$8]; //@line 557 "_csv.c"
        var $10=($9)!=0; //@line 557 "_csv.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 557 "_csv.c"
      case 2: // $bb1
        var $11=HEAP[$self_addr]; //@line 558 "_csv.c"
        var $12=(($11+24)&4294967295); //@line 558 "_csv.c"
        var $13=HEAP[$12]; //@line 558 "_csv.c"
        _PyMem_Free($13); //@line 558 "_csv.c"
        __label__ = 3; break; //@line 558 "_csv.c"
      case 3: // $bb2
        var $14=HEAP[$self_addr]; //@line 559 "_csv.c"
        var $15=(($14+28)&4294967295); //@line 559 "_csv.c"
        var $16=HEAP[$15]; //@line 559 "_csv.c"
        var $17=_PyMem_Malloc($16); //@line 559 "_csv.c"
        var $18=HEAP[$self_addr]; //@line 559 "_csv.c"
        var $19=(($18+24)&4294967295); //@line 559 "_csv.c"
        HEAP[$19]=$17; //@line 559 "_csv.c"
        __label__ = 7; break; //@line 559 "_csv.c"
      case 4: // $bb3
        var $20=HEAP[$self_addr]; //@line 562 "_csv.c"
        var $21=(($20+28)&4294967295); //@line 562 "_csv.c"
        var $22=HEAP[$21]; //@line 562 "_csv.c"
        var $23=((($22))|0) > 1073741823; //@line 562 "_csv.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 562 "_csv.c"
      case 5: // $bb4
        var $24=_PyErr_NoMemory(); //@line 563 "_csv.c"
        HEAP[$0]=0; //@line 564 "_csv.c"
        __label__ = 10; break; //@line 564 "_csv.c"
      case 6: // $bb5
        var $25=HEAP[$self_addr]; //@line 566 "_csv.c"
        var $26=(($25+28)&4294967295); //@line 566 "_csv.c"
        var $27=HEAP[$26]; //@line 566 "_csv.c"
        var $28=((($27) * 2)&4294967295); //@line 566 "_csv.c"
        var $29=HEAP[$self_addr]; //@line 566 "_csv.c"
        var $30=(($29+28)&4294967295); //@line 566 "_csv.c"
        HEAP[$30]=$28; //@line 566 "_csv.c"
        var $31=HEAP[$self_addr]; //@line 567 "_csv.c"
        var $32=(($31+28)&4294967295); //@line 567 "_csv.c"
        var $33=HEAP[$32]; //@line 567 "_csv.c"
        var $34=HEAP[$self_addr]; //@line 567 "_csv.c"
        var $35=(($34+24)&4294967295); //@line 567 "_csv.c"
        var $36=HEAP[$35]; //@line 567 "_csv.c"
        var $37=_PyMem_Realloc($36, $33); //@line 567 "_csv.c"
        var $38=HEAP[$self_addr]; //@line 567 "_csv.c"
        var $39=(($38+24)&4294967295); //@line 567 "_csv.c"
        HEAP[$39]=$37; //@line 567 "_csv.c"
        __label__ = 7; break; //@line 567 "_csv.c"
      case 7: // $bb6
        var $40=HEAP[$self_addr]; //@line 569 "_csv.c"
        var $41=(($40+24)&4294967295); //@line 569 "_csv.c"
        var $42=HEAP[$41]; //@line 569 "_csv.c"
        var $43=($42)==0; //@line 569 "_csv.c"
        if ($43) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 569 "_csv.c"
      case 8: // $bb7
        var $44=_PyErr_NoMemory(); //@line 570 "_csv.c"
        HEAP[$0]=0; //@line 571 "_csv.c"
        __label__ = 10; break; //@line 571 "_csv.c"
      case 9: // $bb8
        HEAP[$0]=1; //@line 573 "_csv.c"
        __label__ = 10; break; //@line 573 "_csv.c"
      case 10: // $bb9
        var $45=HEAP[$0]; //@line 564 "_csv.c"
        HEAP[$retval]=$45; //@line 564 "_csv.c"
        __label__ = 11; break; //@line 564 "_csv.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 564 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 564 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parse_add_char($self, $c) {
    var __stackBase__  = STACKTOP; STACKTOP += 13; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 13);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $c_addr=__stackBase__+4;
        var $retval=__stackBase__+5;
        var $0=__stackBase__+9;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$c_addr]=$c;
        var $1=HEAP[$self_addr]; //@line 579 "_csv.c"
        var $2=(($1+32)&4294967295); //@line 579 "_csv.c"
        var $3=HEAP[$2]; //@line 579 "_csv.c"
        var $4=HEAP[_field_limit]; //@line 579 "_csv.c"
        var $5=((($3))|0) >= ((($4))|0); //@line 579 "_csv.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 579 "_csv.c"
      case 1: // $bb
        var $6=HEAP[_field_limit]; //@line 580 "_csv.c"
        var $7=HEAP[_error_obj]; //@line 580 "_csv.c"
        var $8=_PyErr_Format($7, ((__str26)&4294967295), $6); //@line 580 "_csv.c"
        HEAP[$0]=-1; //@line 582 "_csv.c"
        __label__ = 6; break; //@line 582 "_csv.c"
      case 2: // $bb1
        var $9=HEAP[$self_addr]; //@line 584 "_csv.c"
        var $10=(($9+32)&4294967295); //@line 584 "_csv.c"
        var $11=HEAP[$10]; //@line 584 "_csv.c"
        var $12=HEAP[$self_addr]; //@line 584 "_csv.c"
        var $13=(($12+28)&4294967295); //@line 584 "_csv.c"
        var $14=HEAP[$13]; //@line 584 "_csv.c"
        var $15=((($11))|0)==((($14))|0); //@line 584 "_csv.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 584 "_csv.c"
      case 3: // $bb2
        var $16=HEAP[$self_addr]; //@line 584 "_csv.c"
        var $17=_parse_grow_buff($16); //@line 584 "_csv.c"
        var $18=((($17))|0)==0; //@line 584 "_csv.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 584 "_csv.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 585 "_csv.c"
        __label__ = 6; break; //@line 585 "_csv.c"
      case 5: // $bb4
        var $19=HEAP[$self_addr]; //@line 586 "_csv.c"
        var $20=(($19+24)&4294967295); //@line 586 "_csv.c"
        var $21=HEAP[$20]; //@line 586 "_csv.c"
        var $22=HEAP[$self_addr]; //@line 586 "_csv.c"
        var $23=(($22+32)&4294967295); //@line 586 "_csv.c"
        var $24=HEAP[$23]; //@line 586 "_csv.c"
        var $25=(($21+$24)&4294967295); //@line 586 "_csv.c"
        var $26=HEAP[$c_addr]; //@line 586 "_csv.c"
        HEAP[$25]=$26; //@line 586 "_csv.c"
        var $27=((($24) + 1)&4294967295); //@line 586 "_csv.c"
        var $28=HEAP[$self_addr]; //@line 586 "_csv.c"
        var $29=(($28+32)&4294967295); //@line 586 "_csv.c"
        HEAP[$29]=$27; //@line 586 "_csv.c"
        HEAP[$0]=0; //@line 587 "_csv.c"
        __label__ = 6; break; //@line 587 "_csv.c"
      case 6: // $bb5
        var $30=HEAP[$0]; //@line 582 "_csv.c"
        HEAP[$retval]=$30; //@line 582 "_csv.c"
        __label__ = 7; break; //@line 582 "_csv.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 582 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 582 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parse_process_char($self, $c) {
    var __stackBase__  = STACKTOP; STACKTOP += 29; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 29);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $c_addr=__stackBase__+4;
        var $retval=__stackBase__+5;
        var $iftmp_122=__stackBase__+9;
        var $iftmp_121=__stackBase__+13;
        var $iftmp_120=__stackBase__+17;
        var $0=__stackBase__+21;
        var $dialect=__stackBase__+25;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$c_addr]=$c;
        var $1=HEAP[$self_addr]; //@line 593 "_csv.c"
        var $2=(($1+12)&4294967295); //@line 593 "_csv.c"
        var $3=HEAP[$2]; //@line 593 "_csv.c"
        HEAP[$dialect]=$3; //@line 593 "_csv.c"
        var $4=HEAP[$self_addr]; //@line 595 "_csv.c"
        var $5=(($4+20)&4294967295); //@line 595 "_csv.c"
        var $6=HEAP[$5]; //@line 595 "_csv.c"
        if ($6 == 0) {
          __label__ = 1; break;
        }
        else if ($6 == 1) {
          __label__ = 6; break;
        }
        else if ($6 == 2) {
          __label__ = 33; break;
        }
        else if ($6 == 3) {
          __label__ = 38; break;
        }
        else if ($6 == 4) {
          __label__ = 56; break;
        }
        else if ($6 == 5) {
          __label__ = 68; break;
        }
        else if ($6 == 6) {
          __label__ = 73; break;
        }
        else if ($6 == 7) {
          __label__ = 97; break;
        }
        else {
        __label__ = 102; break;
        }
        
      case 1: // $bb
        var $7=HEAP[$c_addr]; //@line 598 "_csv.c"
        var $8=reSign(($7), 8, 0)==0; //@line 598 "_csv.c"
        if ($8) { __label__ = 102; break; } else { __label__ = 2; break; } //@line 598 "_csv.c"
      case 2: // $bb1
        var $9=HEAP[$c_addr]; //@line 601 "_csv.c"
        var $10=reSign(($9), 8, 0)==10; //@line 601 "_csv.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 601 "_csv.c"
      case 3: // $bb2
        var $11=HEAP[$c_addr]; //@line 601 "_csv.c"
        var $12=reSign(($11), 8, 0)==13; //@line 601 "_csv.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 601 "_csv.c"
      case 4: // $bb3
        var $13=HEAP[$self_addr]; //@line 602 "_csv.c"
        var $14=(($13+20)&4294967295); //@line 602 "_csv.c"
        HEAP[$14]=7; //@line 602 "_csv.c"
        __label__ = 102; break; //@line 602 "_csv.c"
      case 5: // $bb4
        var $15=HEAP[$self_addr]; //@line 606 "_csv.c"
        var $16=(($15+20)&4294967295); //@line 606 "_csv.c"
        HEAP[$16]=1; //@line 606 "_csv.c"
        __label__ = 6; break; //@line 606 "_csv.c"
      case 6: // $bb5
        var $17=HEAP[$c_addr]; //@line 610 "_csv.c"
        var $18=reSign(($17), 8, 0)==10; //@line 610 "_csv.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 610 "_csv.c"
      case 7: // $bb6
        var $19=HEAP[$c_addr]; //@line 610 "_csv.c"
        var $20=reSign(($19), 8, 0)==13; //@line 610 "_csv.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 610 "_csv.c"
      case 8: // $bb7
        var $21=HEAP[$c_addr]; //@line 610 "_csv.c"
        var $22=reSign(($21), 8, 0)==0; //@line 610 "_csv.c"
        if ($22) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 610 "_csv.c"
      case 9: // $bb8
        var $23=HEAP[$self_addr]; //@line 612 "_csv.c"
        var $24=_parse_save_field($23); //@line 612 "_csv.c"
        var $25=((($24))|0) < 0; //@line 612 "_csv.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 612 "_csv.c"
      case 10: // $bb9
        HEAP[$0]=-1; //@line 613 "_csv.c"
        __label__ = 103; break; //@line 613 "_csv.c"
      case 11: // $bb10
        var $26=HEAP[$c_addr]; //@line 614 "_csv.c"
        var $27=reSign(($26), 8, 0)==0; //@line 614 "_csv.c"
        if ($27) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 614 "_csv.c"
      case 12: // $bb11
        HEAP[$iftmp_120]=0; //@line 614 "_csv.c"
        __label__ = 14; break; //@line 614 "_csv.c"
      case 13: // $bb12
        HEAP[$iftmp_120]=7; //@line 614 "_csv.c"
        __label__ = 14; break; //@line 614 "_csv.c"
      case 14: // $bb13
        var $28=HEAP[$self_addr]; //@line 614 "_csv.c"
        var $29=(($28+20)&4294967295); //@line 614 "_csv.c"
        var $30=HEAP[$iftmp_120]; //@line 614 "_csv.c"
        HEAP[$29]=$30; //@line 614 "_csv.c"
        __label__ = 32; break; //@line 614 "_csv.c"
      case 15: // $bb14
        var $31=HEAP[$dialect]; //@line 616 "_csv.c"
        var $32=(($31+13)&4294967295); //@line 616 "_csv.c"
        var $33=HEAP[$32]; //@line 616 "_csv.c"
        var $34=HEAP[$c_addr]; //@line 616 "_csv.c"
        var $35=reSign(($33), 8, 0)!=reSign(($34), 8, 0); //@line 616 "_csv.c"
        if ($35) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 616 "_csv.c"
      case 16: // $bb15
        var $36=HEAP[$dialect]; //@line 616 "_csv.c"
        var $37=(($36+24)&4294967295); //@line 616 "_csv.c"
        var $38=HEAP[$37]; //@line 616 "_csv.c"
        var $39=((($38))|0)==3; //@line 616 "_csv.c"
        if ($39) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 616 "_csv.c"
      case 17: // $bb16
        var $40=HEAP[$self_addr]; //@line 619 "_csv.c"
        var $41=(($40+20)&4294967295); //@line 619 "_csv.c"
        HEAP[$41]=4; //@line 619 "_csv.c"
        __label__ = 32; break; //@line 619 "_csv.c"
      case 18: // $bb17
        var $42=HEAP[$dialect]; //@line 621 "_csv.c"
        var $43=(($42+14)&4294967295); //@line 621 "_csv.c"
        var $44=HEAP[$43]; //@line 621 "_csv.c"
        var $45=HEAP[$c_addr]; //@line 621 "_csv.c"
        var $46=reSign(($44), 8, 0)==reSign(($45), 8, 0); //@line 621 "_csv.c"
        if ($46) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 621 "_csv.c"
      case 19: // $bb18
        var $47=HEAP[$self_addr]; //@line 623 "_csv.c"
        var $48=(($47+20)&4294967295); //@line 623 "_csv.c"
        HEAP[$48]=2; //@line 623 "_csv.c"
        __label__ = 32; break; //@line 623 "_csv.c"
      case 20: // $bb19
        var $49=HEAP[$c_addr]; //@line 625 "_csv.c"
        var $50=reSign(($49), 8, 0)!=32; //@line 625 "_csv.c"
        if ($50) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 625 "_csv.c"
      case 21: // $bb20
        var $51=HEAP[$dialect]; //@line 625 "_csv.c"
        var $52=(($51+16)&4294967295); //@line 625 "_csv.c"
        var $53=HEAP[$52]; //@line 625 "_csv.c"
        var $54=((($53))|0)==0; //@line 625 "_csv.c"
        if ($54) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 625 "_csv.c"
      case 22: // $bb21
        __label__ = 32; break; //@line 625 "_csv.c"
      case 23: // $bb22
        var $55=HEAP[$dialect]; //@line 628 "_csv.c"
        var $56=(($55+12)&4294967295); //@line 628 "_csv.c"
        var $57=HEAP[$56]; //@line 628 "_csv.c"
        var $58=HEAP[$c_addr]; //@line 628 "_csv.c"
        var $59=reSign(($57), 8, 0)==reSign(($58), 8, 0); //@line 628 "_csv.c"
        if ($59) { __label__ = 24; break; } else { __label__ = 27; break; } //@line 628 "_csv.c"
      case 24: // $bb23
        var $60=HEAP[$self_addr]; //@line 630 "_csv.c"
        var $61=_parse_save_field($60); //@line 630 "_csv.c"
        var $62=((($61))|0) < 0; //@line 630 "_csv.c"
        if ($62) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 630 "_csv.c"
      case 25: // $bb24
        HEAP[$0]=-1; //@line 631 "_csv.c"
        __label__ = 103; break; //@line 631 "_csv.c"
      case 26: // $bb25
        __label__ = 32; break; //@line 631 "_csv.c"
      case 27: // $bb26
        var $63=HEAP[$dialect]; //@line 635 "_csv.c"
        var $64=(($63+24)&4294967295); //@line 635 "_csv.c"
        var $65=HEAP[$64]; //@line 635 "_csv.c"
        var $66=((($65))|0)==2; //@line 635 "_csv.c"
        if ($66) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 635 "_csv.c"
      case 28: // $bb27
        var $67=HEAP[$self_addr]; //@line 636 "_csv.c"
        var $68=(($67+36)&4294967295); //@line 636 "_csv.c"
        HEAP[$68]=1; //@line 636 "_csv.c"
        __label__ = 29; break; //@line 636 "_csv.c"
      case 29: // $bb28
        var $69=HEAP[$c_addr]; //@line 637 "_csv.c"
        var $70=reSign(($69), 8, 0); //@line 637 "_csv.c"
        var $71=HEAP[$self_addr]; //@line 637 "_csv.c"
        var $72=((($70)) & 255); //@line 637 "_csv.c"
        var $73=_parse_add_char($71, $72); //@line 637 "_csv.c"
        var $74=((($73))|0) < 0; //@line 637 "_csv.c"
        if ($74) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 637 "_csv.c"
      case 30: // $bb29
        HEAP[$0]=-1; //@line 638 "_csv.c"
        __label__ = 103; break; //@line 638 "_csv.c"
      case 31: // $bb30
        var $75=HEAP[$self_addr]; //@line 639 "_csv.c"
        var $76=(($75+20)&4294967295); //@line 639 "_csv.c"
        HEAP[$76]=3; //@line 639 "_csv.c"
        __label__ = 32; break; //@line 639 "_csv.c"
      case 32: // $bb31
        __label__ = 102; break; //@line 639 "_csv.c"
      case 33: // $bb32
        var $77=HEAP[$c_addr]; //@line 644 "_csv.c"
        var $78=reSign(($77), 8, 0)==0; //@line 644 "_csv.c"
        if ($78) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 644 "_csv.c"
      case 34: // $bb33
        HEAP[$c_addr]=10; //@line 645 "_csv.c"
        __label__ = 35; break; //@line 645 "_csv.c"
      case 35: // $bb34
        var $79=HEAP[$c_addr]; //@line 646 "_csv.c"
        var $80=reSign(($79), 8, 0); //@line 646 "_csv.c"
        var $81=HEAP[$self_addr]; //@line 646 "_csv.c"
        var $82=((($80)) & 255); //@line 646 "_csv.c"
        var $83=_parse_add_char($81, $82); //@line 646 "_csv.c"
        var $84=((($83))|0) < 0; //@line 646 "_csv.c"
        if ($84) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 646 "_csv.c"
      case 36: // $bb35
        HEAP[$0]=-1; //@line 647 "_csv.c"
        __label__ = 103; break; //@line 647 "_csv.c"
      case 37: // $bb36
        var $85=HEAP[$self_addr]; //@line 648 "_csv.c"
        var $86=(($85+20)&4294967295); //@line 648 "_csv.c"
        HEAP[$86]=3; //@line 648 "_csv.c"
        __label__ = 102; break; //@line 648 "_csv.c"
      case 38: // $bb37
        var $87=HEAP[$c_addr]; //@line 653 "_csv.c"
        var $88=reSign(($87), 8, 0)==10; //@line 653 "_csv.c"
        if ($88) { __label__ = 41; break; } else { __label__ = 39; break; } //@line 653 "_csv.c"
      case 39: // $bb38
        var $89=HEAP[$c_addr]; //@line 653 "_csv.c"
        var $90=reSign(($89), 8, 0)==13; //@line 653 "_csv.c"
        if ($90) { __label__ = 41; break; } else { __label__ = 40; break; } //@line 653 "_csv.c"
      case 40: // $bb39
        var $91=HEAP[$c_addr]; //@line 653 "_csv.c"
        var $92=reSign(($91), 8, 0)==0; //@line 653 "_csv.c"
        if ($92) { __label__ = 41; break; } else { __label__ = 47; break; } //@line 653 "_csv.c"
      case 41: // $bb40
        var $93=HEAP[$self_addr]; //@line 655 "_csv.c"
        var $94=_parse_save_field($93); //@line 655 "_csv.c"
        var $95=((($94))|0) < 0; //@line 655 "_csv.c"
        if ($95) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 655 "_csv.c"
      case 42: // $bb41
        HEAP[$0]=-1; //@line 656 "_csv.c"
        __label__ = 103; break; //@line 656 "_csv.c"
      case 43: // $bb42
        var $96=HEAP[$c_addr]; //@line 657 "_csv.c"
        var $97=reSign(($96), 8, 0)==0; //@line 657 "_csv.c"
        if ($97) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 657 "_csv.c"
      case 44: // $bb43
        HEAP[$iftmp_121]=0; //@line 657 "_csv.c"
        __label__ = 46; break; //@line 657 "_csv.c"
      case 45: // $bb44
        HEAP[$iftmp_121]=7; //@line 657 "_csv.c"
        __label__ = 46; break; //@line 657 "_csv.c"
      case 46: // $bb45
        var $98=HEAP[$self_addr]; //@line 657 "_csv.c"
        var $99=(($98+20)&4294967295); //@line 657 "_csv.c"
        var $100=HEAP[$iftmp_121]; //@line 657 "_csv.c"
        HEAP[$99]=$100; //@line 657 "_csv.c"
        __label__ = 55; break; //@line 657 "_csv.c"
      case 47: // $bb46
        var $101=HEAP[$dialect]; //@line 659 "_csv.c"
        var $102=(($101+14)&4294967295); //@line 659 "_csv.c"
        var $103=HEAP[$102]; //@line 659 "_csv.c"
        var $104=HEAP[$c_addr]; //@line 659 "_csv.c"
        var $105=reSign(($103), 8, 0)==reSign(($104), 8, 0); //@line 659 "_csv.c"
        if ($105) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 659 "_csv.c"
      case 48: // $bb47
        var $106=HEAP[$self_addr]; //@line 661 "_csv.c"
        var $107=(($106+20)&4294967295); //@line 661 "_csv.c"
        HEAP[$107]=2; //@line 661 "_csv.c"
        __label__ = 55; break; //@line 661 "_csv.c"
      case 49: // $bb48
        var $108=HEAP[$dialect]; //@line 663 "_csv.c"
        var $109=(($108+12)&4294967295); //@line 663 "_csv.c"
        var $110=HEAP[$109]; //@line 663 "_csv.c"
        var $111=HEAP[$c_addr]; //@line 663 "_csv.c"
        var $112=reSign(($110), 8, 0)==reSign(($111), 8, 0); //@line 663 "_csv.c"
        if ($112) { __label__ = 50; break; } else { __label__ = 53; break; } //@line 663 "_csv.c"
      case 50: // $bb49
        var $113=HEAP[$self_addr]; //@line 665 "_csv.c"
        var $114=_parse_save_field($113); //@line 665 "_csv.c"
        var $115=((($114))|0) < 0; //@line 665 "_csv.c"
        if ($115) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 665 "_csv.c"
      case 51: // $bb50
        HEAP[$0]=-1; //@line 666 "_csv.c"
        __label__ = 103; break; //@line 666 "_csv.c"
      case 52: // $bb51
        var $116=HEAP[$self_addr]; //@line 667 "_csv.c"
        var $117=(($116+20)&4294967295); //@line 667 "_csv.c"
        HEAP[$117]=1; //@line 667 "_csv.c"
        __label__ = 55; break; //@line 667 "_csv.c"
      case 53: // $bb52
        var $118=HEAP[$c_addr]; //@line 671 "_csv.c"
        var $119=reSign(($118), 8, 0); //@line 671 "_csv.c"
        var $120=HEAP[$self_addr]; //@line 671 "_csv.c"
        var $121=((($119)) & 255); //@line 671 "_csv.c"
        var $122=_parse_add_char($120, $121); //@line 671 "_csv.c"
        var $123=((($122))|0) < 0; //@line 671 "_csv.c"
        if ($123) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 671 "_csv.c"
      case 54: // $bb53
        HEAP[$0]=-1; //@line 672 "_csv.c"
        __label__ = 103; break; //@line 672 "_csv.c"
      case 55: // $bb54
        __label__ = 102; break; //@line 672 "_csv.c"
      case 56: // $bb55
        var $124=HEAP[$c_addr]; //@line 678 "_csv.c"
        var $125=reSign(($124), 8, 0)!=0; //@line 678 "_csv.c"
        if ($125) { __label__ = 57; break; } else { __label__ = 67; break; } //@line 678 "_csv.c"
      case 57: // $bb56
        var $126=HEAP[$dialect]; //@line 680 "_csv.c"
        var $127=(($126+14)&4294967295); //@line 680 "_csv.c"
        var $128=HEAP[$127]; //@line 680 "_csv.c"
        var $129=HEAP[$c_addr]; //@line 680 "_csv.c"
        var $130=reSign(($128), 8, 0)==reSign(($129), 8, 0); //@line 680 "_csv.c"
        if ($130) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 680 "_csv.c"
      case 58: // $bb57
        var $131=HEAP[$self_addr]; //@line 682 "_csv.c"
        var $132=(($131+20)&4294967295); //@line 682 "_csv.c"
        HEAP[$132]=5; //@line 682 "_csv.c"
        __label__ = 67; break; //@line 682 "_csv.c"
      case 59: // $bb58
        var $133=HEAP[$dialect]; //@line 684 "_csv.c"
        var $134=(($133+13)&4294967295); //@line 684 "_csv.c"
        var $135=HEAP[$134]; //@line 684 "_csv.c"
        var $136=HEAP[$c_addr]; //@line 684 "_csv.c"
        var $137=reSign(($135), 8, 0)!=reSign(($136), 8, 0); //@line 684 "_csv.c"
        if ($137) { __label__ = 65; break; } else { __label__ = 60; break; } //@line 684 "_csv.c"
      case 60: // $bb59
        var $138=HEAP[$dialect]; //@line 684 "_csv.c"
        var $139=(($138+24)&4294967295); //@line 684 "_csv.c"
        var $140=HEAP[$139]; //@line 684 "_csv.c"
        var $141=((($140))|0)==3; //@line 684 "_csv.c"
        if ($141) { __label__ = 65; break; } else { __label__ = 61; break; } //@line 684 "_csv.c"
      case 61: // $bb60
        var $142=HEAP[$dialect]; //@line 686 "_csv.c"
        var $143=(($142+8)&4294967295); //@line 686 "_csv.c"
        var $144=HEAP[$143]; //@line 686 "_csv.c"
        var $145=((($144))|0)!=0; //@line 686 "_csv.c"
        if ($145) { __label__ = 62; break; } else { __label__ = 63; break; } //@line 686 "_csv.c"
      case 62: // $bb61
        var $146=HEAP[$self_addr]; //@line 688 "_csv.c"
        var $147=(($146+20)&4294967295); //@line 688 "_csv.c"
        HEAP[$147]=6; //@line 688 "_csv.c"
        __label__ = 64; break; //@line 688 "_csv.c"
      case 63: // $bb62
        var $148=HEAP[$self_addr]; //@line 692 "_csv.c"
        var $149=(($148+20)&4294967295); //@line 692 "_csv.c"
        HEAP[$149]=3; //@line 692 "_csv.c"
        __label__ = 64; break; //@line 692 "_csv.c"
      case 64: // $bb63
        __label__ = 67; break; //@line 692 "_csv.c"
      case 65: // $bb64
        var $150=HEAP[$c_addr]; //@line 697 "_csv.c"
        var $151=reSign(($150), 8, 0); //@line 697 "_csv.c"
        var $152=HEAP[$self_addr]; //@line 697 "_csv.c"
        var $153=((($151)) & 255); //@line 697 "_csv.c"
        var $154=_parse_add_char($152, $153); //@line 697 "_csv.c"
        var $155=((($154))|0) < 0; //@line 697 "_csv.c"
        if ($155) { __label__ = 66; break; } else { __label__ = 67; break; } //@line 697 "_csv.c"
      case 66: // $bb65
        HEAP[$0]=-1; //@line 698 "_csv.c"
        __label__ = 103; break; //@line 698 "_csv.c"
      case 67: // $bb66
        __label__ = 102; break; //@line 698 "_csv.c"
      case 68: // $bb67
        var $156=HEAP[$c_addr]; //@line 703 "_csv.c"
        var $157=reSign(($156), 8, 0)==0; //@line 703 "_csv.c"
        if ($157) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 703 "_csv.c"
      case 69: // $bb68
        HEAP[$c_addr]=10; //@line 704 "_csv.c"
        __label__ = 70; break; //@line 704 "_csv.c"
      case 70: // $bb69
        var $158=HEAP[$c_addr]; //@line 705 "_csv.c"
        var $159=reSign(($158), 8, 0); //@line 705 "_csv.c"
        var $160=HEAP[$self_addr]; //@line 705 "_csv.c"
        var $161=((($159)) & 255); //@line 705 "_csv.c"
        var $162=_parse_add_char($160, $161); //@line 705 "_csv.c"
        var $163=((($162))|0) < 0; //@line 705 "_csv.c"
        if ($163) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 705 "_csv.c"
      case 71: // $bb70
        HEAP[$0]=-1; //@line 706 "_csv.c"
        __label__ = 103; break; //@line 706 "_csv.c"
      case 72: // $bb71
        var $164=HEAP[$self_addr]; //@line 707 "_csv.c"
        var $165=(($164+20)&4294967295); //@line 707 "_csv.c"
        HEAP[$165]=4; //@line 707 "_csv.c"
        __label__ = 102; break; //@line 707 "_csv.c"
      case 73: // $bb72
        var $166=HEAP[$dialect]; //@line 712 "_csv.c"
        var $167=(($166+24)&4294967295); //@line 712 "_csv.c"
        var $168=HEAP[$167]; //@line 712 "_csv.c"
        var $169=((($168))|0)==3; //@line 712 "_csv.c"
        if ($169) { __label__ = 78; break; } else { __label__ = 74; break; } //@line 712 "_csv.c"
      case 74: // $bb73
        var $170=HEAP[$dialect]; //@line 712 "_csv.c"
        var $171=(($170+13)&4294967295); //@line 712 "_csv.c"
        var $172=HEAP[$171]; //@line 712 "_csv.c"
        var $173=HEAP[$c_addr]; //@line 712 "_csv.c"
        var $174=reSign(($172), 8, 0)!=reSign(($173), 8, 0); //@line 712 "_csv.c"
        if ($174) { __label__ = 78; break; } else { __label__ = 75; break; } //@line 712 "_csv.c"
      case 75: // $bb74
        var $175=HEAP[$c_addr]; //@line 715 "_csv.c"
        var $176=reSign(($175), 8, 0); //@line 715 "_csv.c"
        var $177=HEAP[$self_addr]; //@line 715 "_csv.c"
        var $178=((($176)) & 255); //@line 715 "_csv.c"
        var $179=_parse_add_char($177, $178); //@line 715 "_csv.c"
        var $180=((($179))|0) < 0; //@line 715 "_csv.c"
        if ($180) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 715 "_csv.c"
      case 76: // $bb75
        HEAP[$0]=-1; //@line 716 "_csv.c"
        __label__ = 103; break; //@line 716 "_csv.c"
      case 77: // $bb76
        var $181=HEAP[$self_addr]; //@line 717 "_csv.c"
        var $182=(($181+20)&4294967295); //@line 717 "_csv.c"
        HEAP[$182]=4; //@line 717 "_csv.c"
        __label__ = 96; break; //@line 717 "_csv.c"
      case 78: // $bb77
        var $183=HEAP[$dialect]; //@line 719 "_csv.c"
        var $184=(($183+12)&4294967295); //@line 719 "_csv.c"
        var $185=HEAP[$184]; //@line 719 "_csv.c"
        var $186=HEAP[$c_addr]; //@line 719 "_csv.c"
        var $187=reSign(($185), 8, 0)==reSign(($186), 8, 0); //@line 719 "_csv.c"
        if ($187) { __label__ = 79; break; } else { __label__ = 82; break; } //@line 719 "_csv.c"
      case 79: // $bb78
        var $188=HEAP[$self_addr]; //@line 721 "_csv.c"
        var $189=_parse_save_field($188); //@line 721 "_csv.c"
        var $190=((($189))|0) < 0; //@line 721 "_csv.c"
        if ($190) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 721 "_csv.c"
      case 80: // $bb79
        HEAP[$0]=-1; //@line 722 "_csv.c"
        __label__ = 103; break; //@line 722 "_csv.c"
      case 81: // $bb80
        var $191=HEAP[$self_addr]; //@line 723 "_csv.c"
        var $192=(($191+20)&4294967295); //@line 723 "_csv.c"
        HEAP[$192]=1; //@line 723 "_csv.c"
        __label__ = 96; break; //@line 723 "_csv.c"
      case 82: // $bb81
        var $193=HEAP[$c_addr]; //@line 725 "_csv.c"
        var $194=reSign(($193), 8, 0)==10; //@line 725 "_csv.c"
        if ($194) { __label__ = 85; break; } else { __label__ = 83; break; } //@line 725 "_csv.c"
      case 83: // $bb82
        var $195=HEAP[$c_addr]; //@line 725 "_csv.c"
        var $196=reSign(($195), 8, 0)==13; //@line 725 "_csv.c"
        if ($196) { __label__ = 85; break; } else { __label__ = 84; break; } //@line 725 "_csv.c"
      case 84: // $bb83
        var $197=HEAP[$c_addr]; //@line 725 "_csv.c"
        var $198=reSign(($197), 8, 0)==0; //@line 725 "_csv.c"
        if ($198) { __label__ = 85; break; } else { __label__ = 91; break; } //@line 725 "_csv.c"
      case 85: // $bb84
        var $199=HEAP[$self_addr]; //@line 727 "_csv.c"
        var $200=_parse_save_field($199); //@line 727 "_csv.c"
        var $201=((($200))|0) < 0; //@line 727 "_csv.c"
        if ($201) { __label__ = 86; break; } else { __label__ = 87; break; } //@line 727 "_csv.c"
      case 86: // $bb85
        HEAP[$0]=-1; //@line 728 "_csv.c"
        __label__ = 103; break; //@line 728 "_csv.c"
      case 87: // $bb86
        var $202=HEAP[$c_addr]; //@line 729 "_csv.c"
        var $203=reSign(($202), 8, 0)==0; //@line 729 "_csv.c"
        if ($203) { __label__ = 88; break; } else { __label__ = 89; break; } //@line 729 "_csv.c"
      case 88: // $bb87
        HEAP[$iftmp_122]=0; //@line 729 "_csv.c"
        __label__ = 90; break; //@line 729 "_csv.c"
      case 89: // $bb88
        HEAP[$iftmp_122]=7; //@line 729 "_csv.c"
        __label__ = 90; break; //@line 729 "_csv.c"
      case 90: // $bb89
        var $204=HEAP[$self_addr]; //@line 729 "_csv.c"
        var $205=(($204+20)&4294967295); //@line 729 "_csv.c"
        var $206=HEAP[$iftmp_122]; //@line 729 "_csv.c"
        HEAP[$205]=$206; //@line 729 "_csv.c"
        __label__ = 96; break; //@line 729 "_csv.c"
      case 91: // $bb90
        var $207=HEAP[$dialect]; //@line 731 "_csv.c"
        var $208=(($207+28)&4294967295); //@line 731 "_csv.c"
        var $209=HEAP[$208]; //@line 731 "_csv.c"
        var $210=((($209))|0)==0; //@line 731 "_csv.c"
        if ($210) { __label__ = 92; break; } else { __label__ = 95; break; } //@line 731 "_csv.c"
      case 92: // $bb91
        var $211=HEAP[$c_addr]; //@line 732 "_csv.c"
        var $212=reSign(($211), 8, 0); //@line 732 "_csv.c"
        var $213=HEAP[$self_addr]; //@line 732 "_csv.c"
        var $214=((($212)) & 255); //@line 732 "_csv.c"
        var $215=_parse_add_char($213, $214); //@line 732 "_csv.c"
        var $216=((($215))|0) < 0; //@line 732 "_csv.c"
        if ($216) { __label__ = 93; break; } else { __label__ = 94; break; } //@line 732 "_csv.c"
      case 93: // $bb92
        HEAP[$0]=-1; //@line 733 "_csv.c"
        __label__ = 103; break; //@line 733 "_csv.c"
      case 94: // $bb93
        var $217=HEAP[$self_addr]; //@line 734 "_csv.c"
        var $218=(($217+20)&4294967295); //@line 734 "_csv.c"
        HEAP[$218]=3; //@line 734 "_csv.c"
        __label__ = 96; break; //@line 734 "_csv.c"
      case 95: // $bb94
        var $219=HEAP[$dialect]; //@line 738 "_csv.c"
        var $220=(($219+13)&4294967295); //@line 738 "_csv.c"
        var $221=HEAP[$220]; //@line 738 "_csv.c"
        var $222=reSign(($221), 8, 0); //@line 738 "_csv.c"
        var $223=HEAP[$dialect]; //@line 738 "_csv.c"
        var $224=(($223+12)&4294967295); //@line 738 "_csv.c"
        var $225=HEAP[$224]; //@line 738 "_csv.c"
        var $226=reSign(($225), 8, 0); //@line 738 "_csv.c"
        var $227=HEAP[_error_obj]; //@line 738 "_csv.c"
        var $228=_PyErr_Format($227, ((__str27)&4294967295), $226, $222); //@line 738 "_csv.c"
        HEAP[$0]=-1; //@line 741 "_csv.c"
        __label__ = 103; break; //@line 741 "_csv.c"
      case 96: // $bb95
        __label__ = 102; break; //@line 741 "_csv.c"
      case 97: // $bb96
        var $229=HEAP[$c_addr]; //@line 746 "_csv.c"
        var $230=reSign(($229), 8, 0)!=10; //@line 746 "_csv.c"
        if ($230) { __label__ = 98; break; } else { __label__ = 102; break; } //@line 746 "_csv.c"
      case 98: // $bb97
        var $231=HEAP[$c_addr]; //@line 746 "_csv.c"
        var $232=reSign(($231), 8, 0)!=13; //@line 746 "_csv.c"
        if ($232) { __label__ = 99; break; } else { __label__ = 102; break; } //@line 746 "_csv.c"
      case 99: // $bb98
        var $233=HEAP[$c_addr]; //@line 748 "_csv.c"
        var $234=reSign(($233), 8, 0)==0; //@line 748 "_csv.c"
        if ($234) { __label__ = 100; break; } else { __label__ = 101; break; } //@line 748 "_csv.c"
      case 100: // $bb99
        var $235=HEAP[$self_addr]; //@line 749 "_csv.c"
        var $236=(($235+20)&4294967295); //@line 749 "_csv.c"
        HEAP[$236]=0; //@line 749 "_csv.c"
        __label__ = 102; break; //@line 749 "_csv.c"
      case 101: // $bb100
        var $237=HEAP[_error_obj]; //@line 751 "_csv.c"
        var $238=_PyErr_Format($237, ((__str28)&4294967295)); //@line 751 "_csv.c"
        HEAP[$0]=-1; //@line 752 "_csv.c"
        __label__ = 103; break; //@line 752 "_csv.c"
      case 102: // $bb101
        HEAP[$0]=0; //@line 757 "_csv.c"
        __label__ = 103; break; //@line 757 "_csv.c"
      case 103: // $bb102
        var $239=HEAP[$0]; //@line 613 "_csv.c"
        HEAP[$retval]=$239; //@line 613 "_csv.c"
        __label__ = 104; break; //@line 613 "_csv.c"
      case 104: // $return
        var $retval103=HEAP[$retval]; //@line 613 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval103; //@line 613 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parse_reset($self) {
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
        var $1=HEAP[$self_addr]; //@line 763 "_csv.c"
        var $2=(($1+16)&4294967295); //@line 763 "_csv.c"
        var $3=HEAP[$2]; //@line 763 "_csv.c"
        var $4=($3)!=0; //@line 763 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 763 "_csv.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 763 "_csv.c"
        var $6=(($5+16)&4294967295); //@line 763 "_csv.c"
        var $7=HEAP[$6]; //@line 763 "_csv.c"
        var $8=(($7)&4294967295); //@line 763 "_csv.c"
        var $9=HEAP[$8]; //@line 763 "_csv.c"
        var $10=((($9) - 1)&4294967295); //@line 763 "_csv.c"
        var $11=(($7)&4294967295); //@line 763 "_csv.c"
        HEAP[$11]=$10; //@line 763 "_csv.c"
        var $12=(($7)&4294967295); //@line 763 "_csv.c"
        var $13=HEAP[$12]; //@line 763 "_csv.c"
        var $14=((($13))|0)==0; //@line 763 "_csv.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 763 "_csv.c"
      case 2: // $bb1
        var $15=HEAP[$self_addr]; //@line 763 "_csv.c"
        var $16=(($15+16)&4294967295); //@line 763 "_csv.c"
        var $17=HEAP[$16]; //@line 763 "_csv.c"
        var $18=(($17+4)&4294967295); //@line 763 "_csv.c"
        var $19=HEAP[$18]; //@line 763 "_csv.c"
        var $20=(($19+24)&4294967295); //@line 763 "_csv.c"
        var $21=HEAP[$20]; //@line 763 "_csv.c"
        var $22=HEAP[$self_addr]; //@line 763 "_csv.c"
        var $23=(($22+16)&4294967295); //@line 763 "_csv.c"
        var $24=HEAP[$23]; //@line 763 "_csv.c"
        FUNCTION_TABLE[$21]($24); //@line 763 "_csv.c"
        __label__ = 3; break; //@line 763 "_csv.c"
      case 3: // $bb2
        var $25=_PyList_New(0); //@line 764 "_csv.c"
        var $26=HEAP[$self_addr]; //@line 764 "_csv.c"
        var $27=(($26+16)&4294967295); //@line 764 "_csv.c"
        HEAP[$27]=$25; //@line 764 "_csv.c"
        var $28=HEAP[$self_addr]; //@line 765 "_csv.c"
        var $29=(($28+16)&4294967295); //@line 765 "_csv.c"
        var $30=HEAP[$29]; //@line 765 "_csv.c"
        var $31=($30)==0; //@line 765 "_csv.c"
        if ($31) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 765 "_csv.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 766 "_csv.c"
        __label__ = 6; break; //@line 766 "_csv.c"
      case 5: // $bb4
        var $32=HEAP[$self_addr]; //@line 767 "_csv.c"
        var $33=(($32+32)&4294967295); //@line 767 "_csv.c"
        HEAP[$33]=0; //@line 767 "_csv.c"
        var $34=HEAP[$self_addr]; //@line 768 "_csv.c"
        var $35=(($34+20)&4294967295); //@line 768 "_csv.c"
        HEAP[$35]=0; //@line 768 "_csv.c"
        var $36=HEAP[$self_addr]; //@line 769 "_csv.c"
        var $37=(($36+36)&4294967295); //@line 769 "_csv.c"
        HEAP[$37]=0; //@line 769 "_csv.c"
        HEAP[$0]=0; //@line 770 "_csv.c"
        __label__ = 6; break; //@line 770 "_csv.c"
      case 6: // $bb5
        var $38=HEAP[$0]; //@line 766 "_csv.c"
        HEAP[$retval]=$38; //@line 766 "_csv.c"
        __label__ = 7; break; //@line 766 "_csv.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 766 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 766 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Reader_iternext($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 29; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 29);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $lineobj=__stackBase__+12;
        var $fields=__stackBase__+16;
        var $line=__stackBase__+20;
        var $c=__stackBase__+24;
        var $linelen=__stackBase__+25;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$fields]=0; //@line 777 "_csv.c"
        var $1=HEAP[$self_addr]; //@line 781 "_csv.c"
        var $2=_parse_reset($1); //@line 781 "_csv.c"
        var $3=((($2))|0) < 0; //@line 781 "_csv.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 781 "_csv.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 782 "_csv.c"
        __label__ = 28; break; //@line 782 "_csv.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 784 "_csv.c"
        var $5=(($4+8)&4294967295); //@line 784 "_csv.c"
        var $6=HEAP[$5]; //@line 784 "_csv.c"
        var $7=_PyIter_Next($6); //@line 784 "_csv.c"
        HEAP[$lineobj]=$7; //@line 784 "_csv.c"
        var $8=HEAP[$lineobj]; //@line 785 "_csv.c"
        var $9=($8)==0; //@line 785 "_csv.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 785 "_csv.c"
      case 3: // $bb2
        var $10=_PyErr_Occurred(); //@line 787 "_csv.c"
        var $11=($10)==0; //@line 787 "_csv.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 787 "_csv.c"
      case 4: // $bb3
        var $12=HEAP[$self_addr]; //@line 787 "_csv.c"
        var $13=(($12+32)&4294967295); //@line 787 "_csv.c"
        var $14=HEAP[$13]; //@line 787 "_csv.c"
        var $15=((($14))|0)!=0; //@line 787 "_csv.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 787 "_csv.c"
      case 5: // $bb4
        var $16=HEAP[_error_obj]; //@line 788 "_csv.c"
        var $17=_PyErr_Format($16, ((__str29)&4294967295)); //@line 788 "_csv.c"
        __label__ = 6; break; //@line 788 "_csv.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 790 "_csv.c"
        __label__ = 28; break; //@line 790 "_csv.c"
      case 7: // $bb6
        var $18=HEAP[$self_addr]; //@line 792 "_csv.c"
        var $19=(($18+40)&4294967295); //@line 792 "_csv.c"
        var $20=HEAP[$19]; //@line 792 "_csv.c"
        var $21=((($20) + 1)&4294967295); //@line 792 "_csv.c"
        var $22=HEAP[$self_addr]; //@line 792 "_csv.c"
        var $23=(($22+40)&4294967295); //@line 792 "_csv.c"
        HEAP[$23]=$21; //@line 792 "_csv.c"
        var $24=HEAP[$lineobj]; //@line 794 "_csv.c"
        var $25=_PyString_AsString($24); //@line 794 "_csv.c"
        HEAP[$line]=$25; //@line 794 "_csv.c"
        var $26=HEAP[$lineobj]; //@line 795 "_csv.c"
        var $27=_PyString_Size($26); //@line 795 "_csv.c"
        HEAP[$linelen]=$27; //@line 795 "_csv.c"
        var $28=HEAP[$line]; //@line 797 "_csv.c"
        var $29=($28)==0; //@line 797 "_csv.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 797 "_csv.c"
      case 8: // $bb7
        var $30=HEAP[$linelen]; //@line 797 "_csv.c"
        var $31=((($30))|0) < 0; //@line 797 "_csv.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 797 "_csv.c"
      case 9: // $bb8
        var $32=HEAP[$lineobj]; //@line 798 "_csv.c"
        var $33=(($32)&4294967295); //@line 798 "_csv.c"
        var $34=HEAP[$33]; //@line 798 "_csv.c"
        var $35=((($34) - 1)&4294967295); //@line 798 "_csv.c"
        var $36=HEAP[$lineobj]; //@line 798 "_csv.c"
        var $37=(($36)&4294967295); //@line 798 "_csv.c"
        HEAP[$37]=$35; //@line 798 "_csv.c"
        var $38=HEAP[$lineobj]; //@line 798 "_csv.c"
        var $39=(($38)&4294967295); //@line 798 "_csv.c"
        var $40=HEAP[$39]; //@line 798 "_csv.c"
        var $41=((($40))|0)==0; //@line 798 "_csv.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 798 "_csv.c"
      case 10: // $bb9
        var $42=HEAP[$lineobj]; //@line 798 "_csv.c"
        var $43=(($42+4)&4294967295); //@line 798 "_csv.c"
        var $44=HEAP[$43]; //@line 798 "_csv.c"
        var $45=(($44+24)&4294967295); //@line 798 "_csv.c"
        var $46=HEAP[$45]; //@line 798 "_csv.c"
        var $47=HEAP[$lineobj]; //@line 798 "_csv.c"
        FUNCTION_TABLE[$46]($47); //@line 798 "_csv.c"
        __label__ = 11; break; //@line 798 "_csv.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 799 "_csv.c"
        __label__ = 28; break; //@line 799 "_csv.c"
      case 12: // $bb11
        __label__ = 21; break; //@line 799 "_csv.c"
      case 13: // $bb12
        var $48=HEAP[$line]; //@line 802 "_csv.c"
        var $49=HEAP[$48]; //@line 802 "_csv.c"
        HEAP[$c]=$49; //@line 802 "_csv.c"
        var $50=HEAP[$line]; //@line 802 "_csv.c"
        var $51=(($50+1)&4294967295); //@line 802 "_csv.c"
        HEAP[$line]=$51; //@line 802 "_csv.c"
        var $52=HEAP[$c]; //@line 803 "_csv.c"
        var $53=reSign(($52), 8, 0)==0; //@line 803 "_csv.c"
        if ($53) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 803 "_csv.c"
      case 14: // $bb13
        var $54=HEAP[$lineobj]; //@line 804 "_csv.c"
        var $55=(($54)&4294967295); //@line 804 "_csv.c"
        var $56=HEAP[$55]; //@line 804 "_csv.c"
        var $57=((($56) - 1)&4294967295); //@line 804 "_csv.c"
        var $58=HEAP[$lineobj]; //@line 804 "_csv.c"
        var $59=(($58)&4294967295); //@line 804 "_csv.c"
        HEAP[$59]=$57; //@line 804 "_csv.c"
        var $60=HEAP[$lineobj]; //@line 804 "_csv.c"
        var $61=(($60)&4294967295); //@line 804 "_csv.c"
        var $62=HEAP[$61]; //@line 804 "_csv.c"
        var $63=((($62))|0)==0; //@line 804 "_csv.c"
        if ($63) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 804 "_csv.c"
      case 15: // $bb14
        var $64=HEAP[$lineobj]; //@line 804 "_csv.c"
        var $65=(($64+4)&4294967295); //@line 804 "_csv.c"
        var $66=HEAP[$65]; //@line 804 "_csv.c"
        var $67=(($66+24)&4294967295); //@line 804 "_csv.c"
        var $68=HEAP[$67]; //@line 804 "_csv.c"
        var $69=HEAP[$lineobj]; //@line 804 "_csv.c"
        FUNCTION_TABLE[$68]($69); //@line 804 "_csv.c"
        __label__ = 16; break; //@line 804 "_csv.c"
      case 16: // $bb15
        var $70=HEAP[_error_obj]; //@line 805 "_csv.c"
        var $71=_PyErr_Format($70, ((__str30)&4294967295)); //@line 805 "_csv.c"
        __label__ = 27; break; //@line 805 "_csv.c"
      case 17: // $bb16
        var $72=HEAP[$c]; //@line 809 "_csv.c"
        var $73=reSign(($72), 8, 0); //@line 809 "_csv.c"
        var $74=HEAP[$self_addr]; //@line 809 "_csv.c"
        var $75=((($73)) & 255); //@line 809 "_csv.c"
        var $76=_parse_process_char($74, $75); //@line 809 "_csv.c"
        var $77=((($76))|0) < 0; //@line 809 "_csv.c"
        if ($77) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 809 "_csv.c"
      case 18: // $bb17
        var $78=HEAP[$lineobj]; //@line 810 "_csv.c"
        var $79=(($78)&4294967295); //@line 810 "_csv.c"
        var $80=HEAP[$79]; //@line 810 "_csv.c"
        var $81=((($80) - 1)&4294967295); //@line 810 "_csv.c"
        var $82=HEAP[$lineobj]; //@line 810 "_csv.c"
        var $83=(($82)&4294967295); //@line 810 "_csv.c"
        HEAP[$83]=$81; //@line 810 "_csv.c"
        var $84=HEAP[$lineobj]; //@line 810 "_csv.c"
        var $85=(($84)&4294967295); //@line 810 "_csv.c"
        var $86=HEAP[$85]; //@line 810 "_csv.c"
        var $87=((($86))|0)==0; //@line 810 "_csv.c"
        if ($87) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 810 "_csv.c"
      case 19: // $bb18
        var $88=HEAP[$lineobj]; //@line 810 "_csv.c"
        var $89=(($88+4)&4294967295); //@line 810 "_csv.c"
        var $90=HEAP[$89]; //@line 810 "_csv.c"
        var $91=(($90+24)&4294967295); //@line 810 "_csv.c"
        var $92=HEAP[$91]; //@line 810 "_csv.c"
        var $93=HEAP[$lineobj]; //@line 810 "_csv.c"
        FUNCTION_TABLE[$92]($93); //@line 810 "_csv.c"
        __label__ = 20; break; //@line 810 "_csv.c"
      case 20: // $bb19
        __label__ = 27; break; //@line 810 "_csv.c"
      case 21: // $bb20
        var $94=HEAP[$linelen]; //@line 801 "_csv.c"
        var $95=((($94) - 1)&4294967295); //@line 801 "_csv.c"
        HEAP[$linelen]=$95; //@line 801 "_csv.c"
        var $96=HEAP[$linelen]; //@line 801 "_csv.c"
        var $97=((($96))|0)!=-1; //@line 801 "_csv.c"
        if ($97) { __label__ = 13; break; } else { __label__ = 22; break; } //@line 801 "_csv.c"
      case 22: // $bb21
        var $98=HEAP[$lineobj]; //@line 814 "_csv.c"
        var $99=(($98)&4294967295); //@line 814 "_csv.c"
        var $100=HEAP[$99]; //@line 814 "_csv.c"
        var $101=((($100) - 1)&4294967295); //@line 814 "_csv.c"
        var $102=HEAP[$lineobj]; //@line 814 "_csv.c"
        var $103=(($102)&4294967295); //@line 814 "_csv.c"
        HEAP[$103]=$101; //@line 814 "_csv.c"
        var $104=HEAP[$lineobj]; //@line 814 "_csv.c"
        var $105=(($104)&4294967295); //@line 814 "_csv.c"
        var $106=HEAP[$105]; //@line 814 "_csv.c"
        var $107=((($106))|0)==0; //@line 814 "_csv.c"
        if ($107) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 814 "_csv.c"
      case 23: // $bb22
        var $108=HEAP[$lineobj]; //@line 814 "_csv.c"
        var $109=(($108+4)&4294967295); //@line 814 "_csv.c"
        var $110=HEAP[$109]; //@line 814 "_csv.c"
        var $111=(($110+24)&4294967295); //@line 814 "_csv.c"
        var $112=HEAP[$111]; //@line 814 "_csv.c"
        var $113=HEAP[$lineobj]; //@line 814 "_csv.c"
        FUNCTION_TABLE[$112]($113); //@line 814 "_csv.c"
        __label__ = 24; break; //@line 814 "_csv.c"
      case 24: // $bb23
        var $114=HEAP[$self_addr]; //@line 815 "_csv.c"
        var $115=_parse_process_char($114, 0); //@line 815 "_csv.c"
        var $116=((($115))|0) < 0; //@line 815 "_csv.c"
        if ($116) { __label__ = 27; break; } else { __label__ = 25; break; } //@line 815 "_csv.c"
      case 25: // $bb24
        var $117=HEAP[$self_addr]; //@line 817 "_csv.c"
        var $118=(($117+20)&4294967295); //@line 817 "_csv.c"
        var $119=HEAP[$118]; //@line 817 "_csv.c"
        var $120=((($119))|0)!=0; //@line 817 "_csv.c"
        if ($120) { __label__ = 2; break; } else { __label__ = 26; break; } //@line 817 "_csv.c"
      case 26: // $bb25
        var $121=HEAP[$self_addr]; //@line 819 "_csv.c"
        var $122=(($121+16)&4294967295); //@line 819 "_csv.c"
        var $123=HEAP[$122]; //@line 819 "_csv.c"
        HEAP[$fields]=$123; //@line 819 "_csv.c"
        var $124=HEAP[$self_addr]; //@line 820 "_csv.c"
        var $125=(($124+16)&4294967295); //@line 820 "_csv.c"
        HEAP[$125]=0; //@line 820 "_csv.c"
        __label__ = 27; break; //@line 821 "_csv.c"
      case 27: // $err
        var $126=HEAP[$fields]; //@line 822 "_csv.c"
        HEAP[$0]=$126; //@line 822 "_csv.c"
        __label__ = 28; break; //@line 822 "_csv.c"
      case 28: // $bb26
        var $127=HEAP[$0]; //@line 782 "_csv.c"
        HEAP[$retval]=$127; //@line 782 "_csv.c"
        __label__ = 29; break; //@line 782 "_csv.c"
      case 29: // $return
        var $retval27=HEAP[$retval]; //@line 782 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 782 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Reader_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 828 "_csv.c"
        var $1=$0; //@line 828 "_csv.c"
        _PyObject_GC_UnTrack($1); //@line 828 "_csv.c"
        var $2=HEAP[$self_addr]; //@line 829 "_csv.c"
        var $3=(($2+12)&4294967295); //@line 829 "_csv.c"
        var $4=HEAP[$3]; //@line 829 "_csv.c"
        var $5=($4)!=0; //@line 829 "_csv.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 829 "_csv.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 829 "_csv.c"
        var $7=(($6+12)&4294967295); //@line 829 "_csv.c"
        var $8=HEAP[$7]; //@line 829 "_csv.c"
        var $9=$8; //@line 829 "_csv.c"
        var $10=(($9)&4294967295); //@line 829 "_csv.c"
        var $11=HEAP[$10]; //@line 829 "_csv.c"
        var $12=((($11) - 1)&4294967295); //@line 829 "_csv.c"
        var $13=(($9)&4294967295); //@line 829 "_csv.c"
        HEAP[$13]=$12; //@line 829 "_csv.c"
        var $14=(($9)&4294967295); //@line 829 "_csv.c"
        var $15=HEAP[$14]; //@line 829 "_csv.c"
        var $16=((($15))|0)==0; //@line 829 "_csv.c"
        if ($16) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 829 "_csv.c"
      case 2: // $bb1
        var $17=HEAP[$self_addr]; //@line 829 "_csv.c"
        var $18=(($17+12)&4294967295); //@line 829 "_csv.c"
        var $19=HEAP[$18]; //@line 829 "_csv.c"
        var $20=$19; //@line 829 "_csv.c"
        var $21=(($20+4)&4294967295); //@line 829 "_csv.c"
        var $22=HEAP[$21]; //@line 829 "_csv.c"
        var $23=(($22+24)&4294967295); //@line 829 "_csv.c"
        var $24=HEAP[$23]; //@line 829 "_csv.c"
        var $25=HEAP[$self_addr]; //@line 829 "_csv.c"
        var $26=(($25+12)&4294967295); //@line 829 "_csv.c"
        var $27=HEAP[$26]; //@line 829 "_csv.c"
        var $28=$27; //@line 829 "_csv.c"
        FUNCTION_TABLE[$24]($28); //@line 829 "_csv.c"
        __label__ = 3; break; //@line 829 "_csv.c"
      case 3: // $bb2
        var $29=HEAP[$self_addr]; //@line 830 "_csv.c"
        var $30=(($29+8)&4294967295); //@line 830 "_csv.c"
        var $31=HEAP[$30]; //@line 830 "_csv.c"
        var $32=($31)!=0; //@line 830 "_csv.c"
        if ($32) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 830 "_csv.c"
      case 4: // $bb3
        var $33=HEAP[$self_addr]; //@line 830 "_csv.c"
        var $34=(($33+8)&4294967295); //@line 830 "_csv.c"
        var $35=HEAP[$34]; //@line 830 "_csv.c"
        var $36=(($35)&4294967295); //@line 830 "_csv.c"
        var $37=HEAP[$36]; //@line 830 "_csv.c"
        var $38=((($37) - 1)&4294967295); //@line 830 "_csv.c"
        var $39=(($35)&4294967295); //@line 830 "_csv.c"
        HEAP[$39]=$38; //@line 830 "_csv.c"
        var $40=(($35)&4294967295); //@line 830 "_csv.c"
        var $41=HEAP[$40]; //@line 830 "_csv.c"
        var $42=((($41))|0)==0; //@line 830 "_csv.c"
        if ($42) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 830 "_csv.c"
      case 5: // $bb4
        var $43=HEAP[$self_addr]; //@line 830 "_csv.c"
        var $44=(($43+8)&4294967295); //@line 830 "_csv.c"
        var $45=HEAP[$44]; //@line 830 "_csv.c"
        var $46=(($45+4)&4294967295); //@line 830 "_csv.c"
        var $47=HEAP[$46]; //@line 830 "_csv.c"
        var $48=(($47+24)&4294967295); //@line 830 "_csv.c"
        var $49=HEAP[$48]; //@line 830 "_csv.c"
        var $50=HEAP[$self_addr]; //@line 830 "_csv.c"
        var $51=(($50+8)&4294967295); //@line 830 "_csv.c"
        var $52=HEAP[$51]; //@line 830 "_csv.c"
        FUNCTION_TABLE[$49]($52); //@line 830 "_csv.c"
        __label__ = 6; break; //@line 830 "_csv.c"
      case 6: // $bb5
        var $53=HEAP[$self_addr]; //@line 831 "_csv.c"
        var $54=(($53+16)&4294967295); //@line 831 "_csv.c"
        var $55=HEAP[$54]; //@line 831 "_csv.c"
        var $56=($55)!=0; //@line 831 "_csv.c"
        if ($56) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 831 "_csv.c"
      case 7: // $bb6
        var $57=HEAP[$self_addr]; //@line 831 "_csv.c"
        var $58=(($57+16)&4294967295); //@line 831 "_csv.c"
        var $59=HEAP[$58]; //@line 831 "_csv.c"
        var $60=(($59)&4294967295); //@line 831 "_csv.c"
        var $61=HEAP[$60]; //@line 831 "_csv.c"
        var $62=((($61) - 1)&4294967295); //@line 831 "_csv.c"
        var $63=(($59)&4294967295); //@line 831 "_csv.c"
        HEAP[$63]=$62; //@line 831 "_csv.c"
        var $64=(($59)&4294967295); //@line 831 "_csv.c"
        var $65=HEAP[$64]; //@line 831 "_csv.c"
        var $66=((($65))|0)==0; //@line 831 "_csv.c"
        if ($66) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 831 "_csv.c"
      case 8: // $bb7
        var $67=HEAP[$self_addr]; //@line 831 "_csv.c"
        var $68=(($67+16)&4294967295); //@line 831 "_csv.c"
        var $69=HEAP[$68]; //@line 831 "_csv.c"
        var $70=(($69+4)&4294967295); //@line 831 "_csv.c"
        var $71=HEAP[$70]; //@line 831 "_csv.c"
        var $72=(($71+24)&4294967295); //@line 831 "_csv.c"
        var $73=HEAP[$72]; //@line 831 "_csv.c"
        var $74=HEAP[$self_addr]; //@line 831 "_csv.c"
        var $75=(($74+16)&4294967295); //@line 831 "_csv.c"
        var $76=HEAP[$75]; //@line 831 "_csv.c"
        FUNCTION_TABLE[$73]($76); //@line 831 "_csv.c"
        __label__ = 9; break; //@line 831 "_csv.c"
      case 9: // $bb8
        var $77=HEAP[$self_addr]; //@line 832 "_csv.c"
        var $78=(($77+24)&4294967295); //@line 832 "_csv.c"
        var $79=HEAP[$78]; //@line 832 "_csv.c"
        var $80=($79)!=0; //@line 832 "_csv.c"
        if ($80) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 832 "_csv.c"
      case 10: // $bb9
        var $81=HEAP[$self_addr]; //@line 833 "_csv.c"
        var $82=(($81+24)&4294967295); //@line 833 "_csv.c"
        var $83=HEAP[$82]; //@line 833 "_csv.c"
        _PyMem_Free($83); //@line 833 "_csv.c"
        __label__ = 11; break; //@line 833 "_csv.c"
      case 11: // $bb10
        var $84=HEAP[$self_addr]; //@line 834 "_csv.c"
        var $85=$84; //@line 834 "_csv.c"
        _PyObject_GC_Del($85); //@line 834 "_csv.c"
        __label__ = 12; break; //@line 835 "_csv.c"
      case 12: // $return
        STACKTOP = __stackBase__;
        return; //@line 835 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Reader_traverse($self, $visit, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
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
        var $vret4=__stackBase__+24;
        var $vret8=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$visit_addr]=$visit;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$self_addr]; //@line 840 "_csv.c"
        var $2=(($1+12)&4294967295); //@line 840 "_csv.c"
        var $3=HEAP[$2]; //@line 840 "_csv.c"
        var $4=($3)!=0; //@line 840 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 840 "_csv.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 840 "_csv.c"
        var $6=(($5+12)&4294967295); //@line 840 "_csv.c"
        var $7=HEAP[$6]; //@line 840 "_csv.c"
        var $8=$7; //@line 840 "_csv.c"
        var $9=HEAP[$visit_addr]; //@line 840 "_csv.c"
        var $10=HEAP[$arg_addr]; //@line 840 "_csv.c"
        var $11=FUNCTION_TABLE[$9]($8, $10); //@line 840 "_csv.c"
        HEAP[$vret]=$11; //@line 840 "_csv.c"
        var $12=HEAP[$vret]; //@line 840 "_csv.c"
        var $13=((($12))|0)!=0; //@line 840 "_csv.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 840 "_csv.c"
      case 2: // $bb1
        var $14=HEAP[$vret]; //@line 840 "_csv.c"
        HEAP[$0]=$14; //@line 840 "_csv.c"
        __label__ = 10; break; //@line 840 "_csv.c"
      case 3: // $bb2
        var $15=HEAP[$self_addr]; //@line 841 "_csv.c"
        var $16=(($15+8)&4294967295); //@line 841 "_csv.c"
        var $17=HEAP[$16]; //@line 841 "_csv.c"
        var $18=($17)!=0; //@line 841 "_csv.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 841 "_csv.c"
      case 4: // $bb3
        var $19=HEAP[$self_addr]; //@line 841 "_csv.c"
        var $20=(($19+8)&4294967295); //@line 841 "_csv.c"
        var $21=HEAP[$20]; //@line 841 "_csv.c"
        var $22=HEAP[$visit_addr]; //@line 841 "_csv.c"
        var $23=HEAP[$arg_addr]; //@line 841 "_csv.c"
        var $24=FUNCTION_TABLE[$22]($21, $23); //@line 841 "_csv.c"
        HEAP[$vret4]=$24; //@line 841 "_csv.c"
        var $25=HEAP[$vret4]; //@line 841 "_csv.c"
        var $26=((($25))|0)!=0; //@line 841 "_csv.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 841 "_csv.c"
      case 5: // $bb5
        var $27=HEAP[$vret4]; //@line 841 "_csv.c"
        HEAP[$0]=$27; //@line 841 "_csv.c"
        __label__ = 10; break; //@line 841 "_csv.c"
      case 6: // $bb6
        var $28=HEAP[$self_addr]; //@line 842 "_csv.c"
        var $29=(($28+16)&4294967295); //@line 842 "_csv.c"
        var $30=HEAP[$29]; //@line 842 "_csv.c"
        var $31=($30)!=0; //@line 842 "_csv.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 842 "_csv.c"
      case 7: // $bb7
        var $32=HEAP[$self_addr]; //@line 842 "_csv.c"
        var $33=(($32+16)&4294967295); //@line 842 "_csv.c"
        var $34=HEAP[$33]; //@line 842 "_csv.c"
        var $35=HEAP[$visit_addr]; //@line 842 "_csv.c"
        var $36=HEAP[$arg_addr]; //@line 842 "_csv.c"
        var $37=FUNCTION_TABLE[$35]($34, $36); //@line 842 "_csv.c"
        HEAP[$vret8]=$37; //@line 842 "_csv.c"
        var $38=HEAP[$vret8]; //@line 842 "_csv.c"
        var $39=((($38))|0)!=0; //@line 842 "_csv.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 842 "_csv.c"
      case 8: // $bb9
        var $40=HEAP[$vret8]; //@line 842 "_csv.c"
        HEAP[$0]=$40; //@line 842 "_csv.c"
        __label__ = 10; break; //@line 842 "_csv.c"
      case 9: // $bb10
        HEAP[$0]=0; //@line 843 "_csv.c"
        __label__ = 10; break; //@line 843 "_csv.c"
      case 10: // $bb11
        var $41=HEAP[$0]; //@line 840 "_csv.c"
        HEAP[$retval]=$41; //@line 840 "_csv.c"
        __label__ = 11; break; //@line 840 "_csv.c"
      case 11: // $return
        var $retval12=HEAP[$retval]; //@line 840 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 840 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Reader_clear($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_py_tmp=__stackBase__+12;
        var $_py_tmp4=__stackBase__+16;
        var $_py_tmp8=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 849 "_csv.c"
        var $2=(($1+12)&4294967295); //@line 849 "_csv.c"
        var $3=HEAP[$2]; //@line 849 "_csv.c"
        var $4=($3)!=0; //@line 849 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 849 "_csv.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 849 "_csv.c"
        var $6=(($5+12)&4294967295); //@line 849 "_csv.c"
        var $7=HEAP[$6]; //@line 849 "_csv.c"
        var $8=$7; //@line 849 "_csv.c"
        HEAP[$_py_tmp]=$8; //@line 849 "_csv.c"
        var $9=HEAP[$self_addr]; //@line 849 "_csv.c"
        var $10=(($9+12)&4294967295); //@line 849 "_csv.c"
        HEAP[$10]=0; //@line 849 "_csv.c"
        var $11=HEAP[$_py_tmp]; //@line 849 "_csv.c"
        var $12=(($11)&4294967295); //@line 849 "_csv.c"
        var $13=HEAP[$12]; //@line 849 "_csv.c"
        var $14=((($13) - 1)&4294967295); //@line 849 "_csv.c"
        var $15=HEAP[$_py_tmp]; //@line 849 "_csv.c"
        var $16=(($15)&4294967295); //@line 849 "_csv.c"
        HEAP[$16]=$14; //@line 849 "_csv.c"
        var $17=HEAP[$_py_tmp]; //@line 849 "_csv.c"
        var $18=(($17)&4294967295); //@line 849 "_csv.c"
        var $19=HEAP[$18]; //@line 849 "_csv.c"
        var $20=((($19))|0)==0; //@line 849 "_csv.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 849 "_csv.c"
      case 2: // $bb1
        var $21=HEAP[$_py_tmp]; //@line 849 "_csv.c"
        var $22=(($21+4)&4294967295); //@line 849 "_csv.c"
        var $23=HEAP[$22]; //@line 849 "_csv.c"
        var $24=(($23+24)&4294967295); //@line 849 "_csv.c"
        var $25=HEAP[$24]; //@line 849 "_csv.c"
        var $26=HEAP[$_py_tmp]; //@line 849 "_csv.c"
        FUNCTION_TABLE[$25]($26); //@line 849 "_csv.c"
        __label__ = 3; break; //@line 849 "_csv.c"
      case 3: // $bb2
        var $27=HEAP[$self_addr]; //@line 850 "_csv.c"
        var $28=(($27+8)&4294967295); //@line 850 "_csv.c"
        var $29=HEAP[$28]; //@line 850 "_csv.c"
        var $30=($29)!=0; //@line 850 "_csv.c"
        if ($30) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 850 "_csv.c"
      case 4: // $bb3
        var $31=HEAP[$self_addr]; //@line 850 "_csv.c"
        var $32=(($31+8)&4294967295); //@line 850 "_csv.c"
        var $33=HEAP[$32]; //@line 850 "_csv.c"
        HEAP[$_py_tmp4]=$33; //@line 850 "_csv.c"
        var $34=HEAP[$self_addr]; //@line 850 "_csv.c"
        var $35=(($34+8)&4294967295); //@line 850 "_csv.c"
        HEAP[$35]=0; //@line 850 "_csv.c"
        var $36=HEAP[$_py_tmp4]; //@line 850 "_csv.c"
        var $37=(($36)&4294967295); //@line 850 "_csv.c"
        var $38=HEAP[$37]; //@line 850 "_csv.c"
        var $39=((($38) - 1)&4294967295); //@line 850 "_csv.c"
        var $40=HEAP[$_py_tmp4]; //@line 850 "_csv.c"
        var $41=(($40)&4294967295); //@line 850 "_csv.c"
        HEAP[$41]=$39; //@line 850 "_csv.c"
        var $42=HEAP[$_py_tmp4]; //@line 850 "_csv.c"
        var $43=(($42)&4294967295); //@line 850 "_csv.c"
        var $44=HEAP[$43]; //@line 850 "_csv.c"
        var $45=((($44))|0)==0; //@line 850 "_csv.c"
        if ($45) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 850 "_csv.c"
      case 5: // $bb5
        var $46=HEAP[$_py_tmp4]; //@line 850 "_csv.c"
        var $47=(($46+4)&4294967295); //@line 850 "_csv.c"
        var $48=HEAP[$47]; //@line 850 "_csv.c"
        var $49=(($48+24)&4294967295); //@line 850 "_csv.c"
        var $50=HEAP[$49]; //@line 850 "_csv.c"
        var $51=HEAP[$_py_tmp4]; //@line 850 "_csv.c"
        FUNCTION_TABLE[$50]($51); //@line 850 "_csv.c"
        __label__ = 6; break; //@line 850 "_csv.c"
      case 6: // $bb6
        var $52=HEAP[$self_addr]; //@line 851 "_csv.c"
        var $53=(($52+16)&4294967295); //@line 851 "_csv.c"
        var $54=HEAP[$53]; //@line 851 "_csv.c"
        var $55=($54)!=0; //@line 851 "_csv.c"
        if ($55) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 851 "_csv.c"
      case 7: // $bb7
        var $56=HEAP[$self_addr]; //@line 851 "_csv.c"
        var $57=(($56+16)&4294967295); //@line 851 "_csv.c"
        var $58=HEAP[$57]; //@line 851 "_csv.c"
        HEAP[$_py_tmp8]=$58; //@line 851 "_csv.c"
        var $59=HEAP[$self_addr]; //@line 851 "_csv.c"
        var $60=(($59+16)&4294967295); //@line 851 "_csv.c"
        HEAP[$60]=0; //@line 851 "_csv.c"
        var $61=HEAP[$_py_tmp8]; //@line 851 "_csv.c"
        var $62=(($61)&4294967295); //@line 851 "_csv.c"
        var $63=HEAP[$62]; //@line 851 "_csv.c"
        var $64=((($63) - 1)&4294967295); //@line 851 "_csv.c"
        var $65=HEAP[$_py_tmp8]; //@line 851 "_csv.c"
        var $66=(($65)&4294967295); //@line 851 "_csv.c"
        HEAP[$66]=$64; //@line 851 "_csv.c"
        var $67=HEAP[$_py_tmp8]; //@line 851 "_csv.c"
        var $68=(($67)&4294967295); //@line 851 "_csv.c"
        var $69=HEAP[$68]; //@line 851 "_csv.c"
        var $70=((($69))|0)==0; //@line 851 "_csv.c"
        if ($70) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 851 "_csv.c"
      case 8: // $bb9
        var $71=HEAP[$_py_tmp8]; //@line 851 "_csv.c"
        var $72=(($71+4)&4294967295); //@line 851 "_csv.c"
        var $73=HEAP[$72]; //@line 851 "_csv.c"
        var $74=(($73+24)&4294967295); //@line 851 "_csv.c"
        var $75=HEAP[$74]; //@line 851 "_csv.c"
        var $76=HEAP[$_py_tmp8]; //@line 851 "_csv.c"
        FUNCTION_TABLE[$75]($76); //@line 851 "_csv.c"
        __label__ = 9; break; //@line 851 "_csv.c"
      case 9: // $bb10
        HEAP[$0]=0; //@line 852 "_csv.c"
        var $77=HEAP[$0]; //@line 852 "_csv.c"
        HEAP[$retval]=$77; //@line 852 "_csv.c"
        __label__ = 10; break; //@line 852 "_csv.c"
      case 10: // $return
        var $retval11=HEAP[$retval]; //@line 852 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 852 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_reader($module, $args, $keyword_args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $keyword_args_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $iterator=__stackBase__+20;
        var $dialect=__stackBase__+24;
        var $self=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$module_addr]=$module;
        HEAP[$args_addr]=$args;
        HEAP[$keyword_args_addr]=$keyword_args;
        HEAP[$dialect]=0; //@line 913 "_csv.c"
        var $1=__PyObject_GC_New(_Reader_Type); //@line 914 "_csv.c"
        var $2=$1; //@line 914 "_csv.c"
        HEAP[$self]=$2; //@line 914 "_csv.c"
        var $3=HEAP[$self]; //@line 916 "_csv.c"
        var $4=($3)==0; //@line 916 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 916 "_csv.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 917 "_csv.c"
        __label__ = 19; break; //@line 917 "_csv.c"
      case 2: // $bb1
        var $5=HEAP[$self]; //@line 919 "_csv.c"
        var $6=(($5+12)&4294967295); //@line 919 "_csv.c"
        HEAP[$6]=0; //@line 919 "_csv.c"
        var $7=HEAP[$self]; //@line 920 "_csv.c"
        var $8=(($7+16)&4294967295); //@line 920 "_csv.c"
        HEAP[$8]=0; //@line 920 "_csv.c"
        var $9=HEAP[$self]; //@line 921 "_csv.c"
        var $10=(($9+8)&4294967295); //@line 921 "_csv.c"
        HEAP[$10]=0; //@line 921 "_csv.c"
        var $11=HEAP[$self]; //@line 922 "_csv.c"
        var $12=(($11+24)&4294967295); //@line 922 "_csv.c"
        HEAP[$12]=0; //@line 922 "_csv.c"
        var $13=HEAP[$self]; //@line 923 "_csv.c"
        var $14=(($13+28)&4294967295); //@line 923 "_csv.c"
        HEAP[$14]=0; //@line 923 "_csv.c"
        var $15=HEAP[$self]; //@line 924 "_csv.c"
        var $16=(($15+40)&4294967295); //@line 924 "_csv.c"
        HEAP[$16]=0; //@line 924 "_csv.c"
        var $17=HEAP[$self]; //@line 926 "_csv.c"
        var $18=_parse_reset($17); //@line 926 "_csv.c"
        var $19=((($18))|0) < 0; //@line 926 "_csv.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 926 "_csv.c"
      case 3: // $bb2
        var $20=HEAP[$self]; //@line 927 "_csv.c"
        var $21=$20; //@line 927 "_csv.c"
        var $22=(($21)&4294967295); //@line 927 "_csv.c"
        var $23=HEAP[$22]; //@line 927 "_csv.c"
        var $24=((($23) - 1)&4294967295); //@line 927 "_csv.c"
        var $25=(($21)&4294967295); //@line 927 "_csv.c"
        HEAP[$25]=$24; //@line 927 "_csv.c"
        var $26=(($21)&4294967295); //@line 927 "_csv.c"
        var $27=HEAP[$26]; //@line 927 "_csv.c"
        var $28=((($27))|0)==0; //@line 927 "_csv.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 927 "_csv.c"
      case 4: // $bb3
        var $29=HEAP[$self]; //@line 927 "_csv.c"
        var $30=$29; //@line 927 "_csv.c"
        var $31=(($30+4)&4294967295); //@line 927 "_csv.c"
        var $32=HEAP[$31]; //@line 927 "_csv.c"
        var $33=(($32+24)&4294967295); //@line 927 "_csv.c"
        var $34=HEAP[$33]; //@line 927 "_csv.c"
        var $35=HEAP[$self]; //@line 927 "_csv.c"
        var $36=$35; //@line 927 "_csv.c"
        FUNCTION_TABLE[$34]($36); //@line 927 "_csv.c"
        __label__ = 5; break; //@line 927 "_csv.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 928 "_csv.c"
        __label__ = 19; break; //@line 928 "_csv.c"
      case 6: // $bb5
        var $37=HEAP[$args_addr]; //@line 931 "_csv.c"
        var $38=_PyArg_UnpackTuple($37, ((__str33)&4294967295), 1, 2, $iterator, $dialect); //@line 931 "_csv.c"
        var $39=((($38))|0)==0; //@line 931 "_csv.c"
        if ($39) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 931 "_csv.c"
      case 7: // $bb6
        var $40=HEAP[$self]; //@line 932 "_csv.c"
        var $41=$40; //@line 932 "_csv.c"
        var $42=(($41)&4294967295); //@line 932 "_csv.c"
        var $43=HEAP[$42]; //@line 932 "_csv.c"
        var $44=((($43) - 1)&4294967295); //@line 932 "_csv.c"
        var $45=(($41)&4294967295); //@line 932 "_csv.c"
        HEAP[$45]=$44; //@line 932 "_csv.c"
        var $46=(($41)&4294967295); //@line 932 "_csv.c"
        var $47=HEAP[$46]; //@line 932 "_csv.c"
        var $48=((($47))|0)==0; //@line 932 "_csv.c"
        if ($48) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 932 "_csv.c"
      case 8: // $bb7
        var $49=HEAP[$self]; //@line 932 "_csv.c"
        var $50=$49; //@line 932 "_csv.c"
        var $51=(($50+4)&4294967295); //@line 932 "_csv.c"
        var $52=HEAP[$51]; //@line 932 "_csv.c"
        var $53=(($52+24)&4294967295); //@line 932 "_csv.c"
        var $54=HEAP[$53]; //@line 932 "_csv.c"
        var $55=HEAP[$self]; //@line 932 "_csv.c"
        var $56=$55; //@line 932 "_csv.c"
        FUNCTION_TABLE[$54]($56); //@line 932 "_csv.c"
        __label__ = 9; break; //@line 932 "_csv.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 933 "_csv.c"
        __label__ = 19; break; //@line 933 "_csv.c"
      case 10: // $bb9
        var $57=HEAP[$iterator]; //@line 935 "_csv.c"
        var $58=_PyObject_GetIter($57); //@line 935 "_csv.c"
        var $59=HEAP[$self]; //@line 935 "_csv.c"
        var $60=(($59+8)&4294967295); //@line 935 "_csv.c"
        HEAP[$60]=$58; //@line 935 "_csv.c"
        var $61=HEAP[$self]; //@line 936 "_csv.c"
        var $62=(($61+8)&4294967295); //@line 936 "_csv.c"
        var $63=HEAP[$62]; //@line 936 "_csv.c"
        var $64=($63)==0; //@line 936 "_csv.c"
        if ($64) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 936 "_csv.c"
      case 11: // $bb10
        var $65=HEAP[_PyExc_TypeError]; //@line 937 "_csv.c"
        _PyErr_SetString($65, ((__str34)&4294967295)); //@line 937 "_csv.c"
        var $66=HEAP[$self]; //@line 939 "_csv.c"
        var $67=$66; //@line 939 "_csv.c"
        var $68=(($67)&4294967295); //@line 939 "_csv.c"
        var $69=HEAP[$68]; //@line 939 "_csv.c"
        var $70=((($69) - 1)&4294967295); //@line 939 "_csv.c"
        var $71=(($67)&4294967295); //@line 939 "_csv.c"
        HEAP[$71]=$70; //@line 939 "_csv.c"
        var $72=(($67)&4294967295); //@line 939 "_csv.c"
        var $73=HEAP[$72]; //@line 939 "_csv.c"
        var $74=((($73))|0)==0; //@line 939 "_csv.c"
        if ($74) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 939 "_csv.c"
      case 12: // $bb11
        var $75=HEAP[$self]; //@line 939 "_csv.c"
        var $76=$75; //@line 939 "_csv.c"
        var $77=(($76+4)&4294967295); //@line 939 "_csv.c"
        var $78=HEAP[$77]; //@line 939 "_csv.c"
        var $79=(($78+24)&4294967295); //@line 939 "_csv.c"
        var $80=HEAP[$79]; //@line 939 "_csv.c"
        var $81=HEAP[$self]; //@line 939 "_csv.c"
        var $82=$81; //@line 939 "_csv.c"
        FUNCTION_TABLE[$80]($82); //@line 939 "_csv.c"
        __label__ = 13; break; //@line 939 "_csv.c"
      case 13: // $bb12
        HEAP[$0]=0; //@line 940 "_csv.c"
        __label__ = 19; break; //@line 940 "_csv.c"
      case 14: // $bb13
        var $83=HEAP[$dialect]; //@line 942 "_csv.c"
        var $84=HEAP[$keyword_args_addr]; //@line 942 "_csv.c"
        var $85=__call_dialect($83, $84); //@line 942 "_csv.c"
        var $86=$85; //@line 942 "_csv.c"
        var $87=HEAP[$self]; //@line 942 "_csv.c"
        var $88=(($87+12)&4294967295); //@line 942 "_csv.c"
        HEAP[$88]=$86; //@line 942 "_csv.c"
        var $89=HEAP[$self]; //@line 943 "_csv.c"
        var $90=(($89+12)&4294967295); //@line 943 "_csv.c"
        var $91=HEAP[$90]; //@line 943 "_csv.c"
        var $92=($91)==0; //@line 943 "_csv.c"
        if ($92) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 943 "_csv.c"
      case 15: // $bb14
        var $93=HEAP[$self]; //@line 944 "_csv.c"
        var $94=$93; //@line 944 "_csv.c"
        var $95=(($94)&4294967295); //@line 944 "_csv.c"
        var $96=HEAP[$95]; //@line 944 "_csv.c"
        var $97=((($96) - 1)&4294967295); //@line 944 "_csv.c"
        var $98=(($94)&4294967295); //@line 944 "_csv.c"
        HEAP[$98]=$97; //@line 944 "_csv.c"
        var $99=(($94)&4294967295); //@line 944 "_csv.c"
        var $100=HEAP[$99]; //@line 944 "_csv.c"
        var $101=((($100))|0)==0; //@line 944 "_csv.c"
        if ($101) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 944 "_csv.c"
      case 16: // $bb15
        var $102=HEAP[$self]; //@line 944 "_csv.c"
        var $103=$102; //@line 944 "_csv.c"
        var $104=(($103+4)&4294967295); //@line 944 "_csv.c"
        var $105=HEAP[$104]; //@line 944 "_csv.c"
        var $106=(($105+24)&4294967295); //@line 944 "_csv.c"
        var $107=HEAP[$106]; //@line 944 "_csv.c"
        var $108=HEAP[$self]; //@line 944 "_csv.c"
        var $109=$108; //@line 944 "_csv.c"
        FUNCTION_TABLE[$107]($109); //@line 944 "_csv.c"
        __label__ = 17; break; //@line 944 "_csv.c"
      case 17: // $bb16
        HEAP[$0]=0; //@line 945 "_csv.c"
        __label__ = 19; break; //@line 945 "_csv.c"
      case 18: // $bb17
        var $110=HEAP[$self]; //@line 948 "_csv.c"
        var $111=$110; //@line 948 "_csv.c"
        _PyObject_GC_Track($111); //@line 948 "_csv.c"
        var $112=HEAP[$self]; //@line 949 "_csv.c"
        var $113=$112; //@line 949 "_csv.c"
        HEAP[$0]=$113; //@line 949 "_csv.c"
        __label__ = 19; break; //@line 949 "_csv.c"
      case 19: // $bb18
        var $114=HEAP[$0]; //@line 917 "_csv.c"
        HEAP[$retval]=$114; //@line 917 "_csv.c"
        __label__ = 20; break; //@line 917 "_csv.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 917 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 917 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _join_reset($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 959 "_csv.c"
        var $1=(($0+24)&4294967295); //@line 959 "_csv.c"
        HEAP[$1]=0; //@line 959 "_csv.c"
        var $2=HEAP[$self_addr]; //@line 960 "_csv.c"
        var $3=(($2+28)&4294967295); //@line 960 "_csv.c"
        HEAP[$3]=0; //@line 960 "_csv.c"
        __label__ = 1; break; //@line 961 "_csv.c"
      case 1: // $return
        STACKTOP = __stackBase__;
        return; //@line 961 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _join_append_data($self, $field, $quote_empty, $quoted, $copy_phase) {
    var __stackBase__  = STACKTOP; STACKTOP += 49; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 49);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $field_addr=__stackBase__+4;
        var $quote_empty_addr=__stackBase__+8;
        var $quoted_addr=__stackBase__+12;
        var $copy_phase_addr=__stackBase__+16;
        var $retval=__stackBase__+20;
        var $0=__stackBase__+24;
        var $dialect=__stackBase__+28;
        var $i=__stackBase__+32;
        var $rec_len=__stackBase__+36;
        var $lineterm=__stackBase__+40;
        var $c=__stackBase__+44;
        var $want_escape=__stackBase__+45;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$field_addr]=$field;
        HEAP[$quote_empty_addr]=$quote_empty;
        HEAP[$quoted_addr]=$quoted;
        HEAP[$copy_phase_addr]=$copy_phase;
        var $1=HEAP[$self_addr]; //@line 972 "_csv.c"
        var $2=(($1+12)&4294967295); //@line 972 "_csv.c"
        var $3=HEAP[$2]; //@line 972 "_csv.c"
        HEAP[$dialect]=$3; //@line 972 "_csv.c"
        var $4=HEAP[$dialect]; //@line 983 "_csv.c"
        var $5=(($4+20)&4294967295); //@line 983 "_csv.c"
        var $6=HEAP[$5]; //@line 983 "_csv.c"
        var $7=_PyString_AsString($6); //@line 983 "_csv.c"
        HEAP[$lineterm]=$7; //@line 983 "_csv.c"
        var $8=HEAP[$lineterm]; //@line 984 "_csv.c"
        var $9=($8)==0; //@line 984 "_csv.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 984 "_csv.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 985 "_csv.c"
        __label__ = 48; break; //@line 985 "_csv.c"
      case 2: // $bb1
        var $10=HEAP[$self_addr]; //@line 987 "_csv.c"
        var $11=(($10+24)&4294967295); //@line 987 "_csv.c"
        var $12=HEAP[$11]; //@line 987 "_csv.c"
        HEAP[$rec_len]=$12; //@line 987 "_csv.c"
        var $13=HEAP[$self_addr]; //@line 990 "_csv.c"
        var $14=(($13+28)&4294967295); //@line 990 "_csv.c"
        var $15=HEAP[$14]; //@line 990 "_csv.c"
        var $16=((($15))|0) > 0; //@line 990 "_csv.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 990 "_csv.c"
      case 3: // $bb2
        var $17=HEAP[$copy_phase_addr]; //@line 991 "_csv.c"
        var $18=((($17))|0)!=0; //@line 991 "_csv.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 991 "_csv.c"
      case 4: // $bb3
        var $19=HEAP[$self_addr]; //@line 991 "_csv.c"
        var $20=(($19+16)&4294967295); //@line 991 "_csv.c"
        var $21=HEAP[$20]; //@line 991 "_csv.c"
        var $22=HEAP[$dialect]; //@line 991 "_csv.c"
        var $23=(($22+12)&4294967295); //@line 991 "_csv.c"
        var $24=HEAP[$23]; //@line 991 "_csv.c"
        var $25=HEAP[$rec_len]; //@line 991 "_csv.c"
        var $26=(($21+$25)&4294967295); //@line 991 "_csv.c"
        HEAP[$26]=$24; //@line 991 "_csv.c"
        __label__ = 5; break; //@line 991 "_csv.c"
      case 5: // $bb4
        var $27=HEAP[$rec_len]; //@line 991 "_csv.c"
        var $28=((($27) + 1)&4294967295); //@line 991 "_csv.c"
        HEAP[$rec_len]=$28; //@line 991 "_csv.c"
        __label__ = 6; break; //@line 991 "_csv.c"
      case 6: // $bb5
        var $29=HEAP[$copy_phase_addr]; //@line 994 "_csv.c"
        var $30=((($29))|0)!=0; //@line 994 "_csv.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 994 "_csv.c"
      case 7: // $bb6
        var $31=HEAP[$quoted_addr]; //@line 994 "_csv.c"
        var $32=HEAP[$31]; //@line 994 "_csv.c"
        var $33=((($32))|0)!=0; //@line 994 "_csv.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 994 "_csv.c"
      case 8: // $bb7
        var $34=HEAP[$copy_phase_addr]; //@line 995 "_csv.c"
        var $35=((($34))|0)!=0; //@line 995 "_csv.c"
        if ($35) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 995 "_csv.c"
      case 9: // $bb8
        var $36=HEAP[$self_addr]; //@line 995 "_csv.c"
        var $37=(($36+16)&4294967295); //@line 995 "_csv.c"
        var $38=HEAP[$37]; //@line 995 "_csv.c"
        var $39=HEAP[$dialect]; //@line 995 "_csv.c"
        var $40=(($39+13)&4294967295); //@line 995 "_csv.c"
        var $41=HEAP[$40]; //@line 995 "_csv.c"
        var $42=HEAP[$rec_len]; //@line 995 "_csv.c"
        var $43=(($38+$42)&4294967295); //@line 995 "_csv.c"
        HEAP[$43]=$41; //@line 995 "_csv.c"
        __label__ = 10; break; //@line 995 "_csv.c"
      case 10: // $bb9
        var $44=HEAP[$rec_len]; //@line 995 "_csv.c"
        var $45=((($44) + 1)&4294967295); //@line 995 "_csv.c"
        HEAP[$rec_len]=$45; //@line 995 "_csv.c"
        __label__ = 11; break; //@line 995 "_csv.c"
      case 11: // $bb10
        HEAP[$i]=0; //@line 998 "_csv.c"
        __label__ = 12; break; //@line 998 "_csv.c"
      case 12: // $bb11
        var $46=HEAP[$field_addr]; //@line 999 "_csv.c"
        var $47=HEAP[$i]; //@line 999 "_csv.c"
        var $48=(($46+$47)&4294967295); //@line 999 "_csv.c"
        var $49=HEAP[$48]; //@line 999 "_csv.c"
        HEAP[$c]=$49; //@line 999 "_csv.c"
        HEAP[$want_escape]=0; //@line 1000 "_csv.c"
        var $50=HEAP[$c]; //@line 1002 "_csv.c"
        var $51=reSign(($50), 8, 0)==0; //@line 1002 "_csv.c"
        if ($51) { __label__ = 36; break; } else { __label__ = 13; break; } //@line 1002 "_csv.c"
      case 13: // $bb12
        var $52=HEAP[$dialect]; //@line 1005 "_csv.c"
        var $53=(($52+12)&4294967295); //@line 1005 "_csv.c"
        var $54=HEAP[$53]; //@line 1005 "_csv.c"
        var $55=HEAP[$c]; //@line 1005 "_csv.c"
        var $56=reSign(($54), 8, 0)==reSign(($55), 8, 0); //@line 1005 "_csv.c"
        if ($56) { __label__ = 17; break; } else { __label__ = 14; break; } //@line 1005 "_csv.c"
      case 14: // $bb13
        var $57=HEAP[$dialect]; //@line 1005 "_csv.c"
        var $58=(($57+14)&4294967295); //@line 1005 "_csv.c"
        var $59=HEAP[$58]; //@line 1005 "_csv.c"
        var $60=HEAP[$c]; //@line 1005 "_csv.c"
        var $61=reSign(($59), 8, 0)==reSign(($60), 8, 0); //@line 1005 "_csv.c"
        if ($61) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 1005 "_csv.c"
      case 15: // $bb14
        var $62=HEAP[$dialect]; //@line 1005 "_csv.c"
        var $63=(($62+13)&4294967295); //@line 1005 "_csv.c"
        var $64=HEAP[$63]; //@line 1005 "_csv.c"
        var $65=HEAP[$c]; //@line 1005 "_csv.c"
        var $66=reSign(($64), 8, 0)==reSign(($65), 8, 0); //@line 1005 "_csv.c"
        if ($66) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 1005 "_csv.c"
      case 16: // $bb15
        var $67=HEAP[$c]; //@line 1005 "_csv.c"
        var $68=reSign(($67), 8, 0); //@line 1005 "_csv.c"
        var $69=HEAP[$lineterm]; //@line 1005 "_csv.c"
        var $70=_strchr($69, $68); //@line 1005 "_csv.c"
        var $71=($70)!=0; //@line 1005 "_csv.c"
        if ($71) { __label__ = 17; break; } else { __label__ = 33; break; } //@line 1005 "_csv.c"
      case 17: // $bb16
        var $72=HEAP[$dialect]; //@line 1009 "_csv.c"
        var $73=(($72+24)&4294967295); //@line 1009 "_csv.c"
        var $74=HEAP[$73]; //@line 1009 "_csv.c"
        var $75=((($74))|0)==3; //@line 1009 "_csv.c"
        if ($75) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1009 "_csv.c"
      case 18: // $bb17
        HEAP[$want_escape]=1; //@line 1010 "_csv.c"
        __label__ = 27; break; //@line 1010 "_csv.c"
      case 19: // $bb18
        var $76=HEAP[$dialect]; //@line 1012 "_csv.c"
        var $77=(($76+13)&4294967295); //@line 1012 "_csv.c"
        var $78=HEAP[$77]; //@line 1012 "_csv.c"
        var $79=HEAP[$c]; //@line 1012 "_csv.c"
        var $80=reSign(($78), 8, 0)==reSign(($79), 8, 0); //@line 1012 "_csv.c"
        if ($80) { __label__ = 20; break; } else { __label__ = 25; break; } //@line 1012 "_csv.c"
      case 20: // $bb19
        var $81=HEAP[$dialect]; //@line 1013 "_csv.c"
        var $82=(($81+8)&4294967295); //@line 1013 "_csv.c"
        var $83=HEAP[$82]; //@line 1013 "_csv.c"
        var $84=((($83))|0)!=0; //@line 1013 "_csv.c"
        if ($84) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 1013 "_csv.c"
      case 21: // $bb20
        var $85=HEAP[$copy_phase_addr]; //@line 1014 "_csv.c"
        var $86=((($85))|0)!=0; //@line 1014 "_csv.c"
        if ($86) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1014 "_csv.c"
      case 22: // $bb21
        var $87=HEAP[$self_addr]; //@line 1014 "_csv.c"
        var $88=(($87+16)&4294967295); //@line 1014 "_csv.c"
        var $89=HEAP[$88]; //@line 1014 "_csv.c"
        var $90=HEAP[$dialect]; //@line 1014 "_csv.c"
        var $91=(($90+13)&4294967295); //@line 1014 "_csv.c"
        var $92=HEAP[$91]; //@line 1014 "_csv.c"
        var $93=HEAP[$rec_len]; //@line 1014 "_csv.c"
        var $94=(($89+$93)&4294967295); //@line 1014 "_csv.c"
        HEAP[$94]=$92; //@line 1014 "_csv.c"
        __label__ = 23; break; //@line 1014 "_csv.c"
      case 23: // $bb22
        var $95=HEAP[$rec_len]; //@line 1014 "_csv.c"
        var $96=((($95) + 1)&4294967295); //@line 1014 "_csv.c"
        HEAP[$rec_len]=$96; //@line 1014 "_csv.c"
        __label__ = 25; break; //@line 1014 "_csv.c"
      case 24: // $bb23
        HEAP[$want_escape]=1; //@line 1016 "_csv.c"
        __label__ = 25; break; //@line 1016 "_csv.c"
      case 25: // $bb24
        var $97=HEAP[$want_escape]; //@line 1018 "_csv.c"
        var $98=((($97))|0)==0; //@line 1018 "_csv.c"
        if ($98) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1018 "_csv.c"
      case 26: // $bb25
        var $99=HEAP[$quoted_addr]; //@line 1019 "_csv.c"
        HEAP[$99]=1; //@line 1019 "_csv.c"
        __label__ = 27; break; //@line 1019 "_csv.c"
      case 27: // $bb26
        var $100=HEAP[$want_escape]; //@line 1021 "_csv.c"
        var $101=((($100))|0)!=0; //@line 1021 "_csv.c"
        if ($101) { __label__ = 28; break; } else { __label__ = 33; break; } //@line 1021 "_csv.c"
      case 28: // $bb27
        var $102=HEAP[$dialect]; //@line 1022 "_csv.c"
        var $103=(($102+14)&4294967295); //@line 1022 "_csv.c"
        var $104=HEAP[$103]; //@line 1022 "_csv.c"
        var $105=reSign(($104), 8, 0)==0; //@line 1022 "_csv.c"
        if ($105) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1022 "_csv.c"
      case 29: // $bb28
        var $106=HEAP[_error_obj]; //@line 1023 "_csv.c"
        var $107=_PyErr_Format($106, ((__str35)&4294967295)); //@line 1023 "_csv.c"
        HEAP[$0]=-1; //@line 1025 "_csv.c"
        __label__ = 48; break; //@line 1025 "_csv.c"
      case 30: // $bb29
        var $108=HEAP[$copy_phase_addr]; //@line 1027 "_csv.c"
        var $109=((($108))|0)!=0; //@line 1027 "_csv.c"
        if ($109) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1027 "_csv.c"
      case 31: // $bb30
        var $110=HEAP[$self_addr]; //@line 1027 "_csv.c"
        var $111=(($110+16)&4294967295); //@line 1027 "_csv.c"
        var $112=HEAP[$111]; //@line 1027 "_csv.c"
        var $113=HEAP[$dialect]; //@line 1027 "_csv.c"
        var $114=(($113+14)&4294967295); //@line 1027 "_csv.c"
        var $115=HEAP[$114]; //@line 1027 "_csv.c"
        var $116=HEAP[$rec_len]; //@line 1027 "_csv.c"
        var $117=(($112+$116)&4294967295); //@line 1027 "_csv.c"
        HEAP[$117]=$115; //@line 1027 "_csv.c"
        __label__ = 32; break; //@line 1027 "_csv.c"
      case 32: // $bb31
        var $118=HEAP[$rec_len]; //@line 1027 "_csv.c"
        var $119=((($118) + 1)&4294967295); //@line 1027 "_csv.c"
        HEAP[$rec_len]=$119; //@line 1027 "_csv.c"
        __label__ = 33; break; //@line 1027 "_csv.c"
      case 33: // $bb32
        var $120=HEAP[$copy_phase_addr]; //@line 1032 "_csv.c"
        var $121=((($120))|0)!=0; //@line 1032 "_csv.c"
        if ($121) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1032 "_csv.c"
      case 34: // $bb33
        var $122=HEAP[$self_addr]; //@line 1032 "_csv.c"
        var $123=(($122+16)&4294967295); //@line 1032 "_csv.c"
        var $124=HEAP[$123]; //@line 1032 "_csv.c"
        var $125=HEAP[$rec_len]; //@line 1032 "_csv.c"
        var $126=(($124+$125)&4294967295); //@line 1032 "_csv.c"
        var $127=HEAP[$c]; //@line 1032 "_csv.c"
        HEAP[$126]=$127; //@line 1032 "_csv.c"
        __label__ = 35; break; //@line 1032 "_csv.c"
      case 35: // $bb34
        var $128=HEAP[$rec_len]; //@line 1032 "_csv.c"
        var $129=((($128) + 1)&4294967295); //@line 1032 "_csv.c"
        HEAP[$rec_len]=$129; //@line 1032 "_csv.c"
        var $130=HEAP[$i]; //@line 998 "_csv.c"
        var $131=((($130) + 1)&4294967295); //@line 998 "_csv.c"
        HEAP[$i]=$131; //@line 998 "_csv.c"
        __label__ = 12; break; //@line 998 "_csv.c"
      case 36: // $bb35
        var $132=HEAP[$i]; //@line 1037 "_csv.c"
        var $133=((($132))|0)==0; //@line 1037 "_csv.c"
        if ($133) { __label__ = 37; break; } else { __label__ = 41; break; } //@line 1037 "_csv.c"
      case 37: // $bb36
        var $134=HEAP[$quote_empty_addr]; //@line 1037 "_csv.c"
        var $135=((($134))|0)!=0; //@line 1037 "_csv.c"
        if ($135) { __label__ = 38; break; } else { __label__ = 41; break; } //@line 1037 "_csv.c"
      case 38: // $bb37
        var $136=HEAP[$dialect]; //@line 1038 "_csv.c"
        var $137=(($136+24)&4294967295); //@line 1038 "_csv.c"
        var $138=HEAP[$137]; //@line 1038 "_csv.c"
        var $139=((($138))|0)==3; //@line 1038 "_csv.c"
        if ($139) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 1038 "_csv.c"
      case 39: // $bb38
        var $140=HEAP[_error_obj]; //@line 1039 "_csv.c"
        var $141=_PyErr_Format($140, ((__str36)&4294967295)); //@line 1039 "_csv.c"
        HEAP[$0]=-1; //@line 1041 "_csv.c"
        __label__ = 48; break; //@line 1041 "_csv.c"
      case 40: // $bb39
        var $142=HEAP[$quoted_addr]; //@line 1044 "_csv.c"
        HEAP[$142]=1; //@line 1044 "_csv.c"
        __label__ = 41; break; //@line 1044 "_csv.c"
      case 41: // $bb40
        var $143=HEAP[$quoted_addr]; //@line 1047 "_csv.c"
        var $144=HEAP[$143]; //@line 1047 "_csv.c"
        var $145=((($144))|0)!=0; //@line 1047 "_csv.c"
        if ($145) { __label__ = 42; break; } else { __label__ = 47; break; } //@line 1047 "_csv.c"
      case 42: // $bb41
        var $146=HEAP[$copy_phase_addr]; //@line 1048 "_csv.c"
        var $147=((($146))|0)!=0; //@line 1048 "_csv.c"
        if ($147) { __label__ = 43; break; } else { __label__ = 46; break; } //@line 1048 "_csv.c"
      case 43: // $bb42
        var $148=HEAP[$copy_phase_addr]; //@line 1049 "_csv.c"
        var $149=((($148))|0)!=0; //@line 1049 "_csv.c"
        if ($149) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1049 "_csv.c"
      case 44: // $bb43
        var $150=HEAP[$self_addr]; //@line 1049 "_csv.c"
        var $151=(($150+16)&4294967295); //@line 1049 "_csv.c"
        var $152=HEAP[$151]; //@line 1049 "_csv.c"
        var $153=HEAP[$dialect]; //@line 1049 "_csv.c"
        var $154=(($153+13)&4294967295); //@line 1049 "_csv.c"
        var $155=HEAP[$154]; //@line 1049 "_csv.c"
        var $156=HEAP[$rec_len]; //@line 1049 "_csv.c"
        var $157=(($152+$156)&4294967295); //@line 1049 "_csv.c"
        HEAP[$157]=$155; //@line 1049 "_csv.c"
        __label__ = 45; break; //@line 1049 "_csv.c"
      case 45: // $bb44
        var $158=HEAP[$rec_len]; //@line 1049 "_csv.c"
        var $159=((($158) + 1)&4294967295); //@line 1049 "_csv.c"
        HEAP[$rec_len]=$159; //@line 1049 "_csv.c"
        __label__ = 47; break; //@line 1049 "_csv.c"
      case 46: // $bb45
        var $160=HEAP[$rec_len]; //@line 1051 "_csv.c"
        var $161=((($160) + 2)&4294967295); //@line 1051 "_csv.c"
        HEAP[$rec_len]=$161; //@line 1051 "_csv.c"
        __label__ = 47; break; //@line 1051 "_csv.c"
      case 47: // $bb46
        var $162=HEAP[$rec_len]; //@line 1053 "_csv.c"
        HEAP[$0]=$162; //@line 1053 "_csv.c"
        __label__ = 48; break; //@line 1053 "_csv.c"
      case 48: // $bb47
        var $163=HEAP[$0]; //@line 985 "_csv.c"
        HEAP[$retval]=$163; //@line 985 "_csv.c"
        __label__ = 49; break; //@line 985 "_csv.c"
      case 49: // $return
        var $retval48=HEAP[$retval]; //@line 985 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval48; //@line 985 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _join_check_rec_size($self, $rec_len) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $rec_len_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $old_rec=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$rec_len_addr]=$rec_len;
        var $1=HEAP[$rec_len_addr]; //@line 1061 "_csv.c"
        var $2=((($1))|0) < 0; //@line 1061 "_csv.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1061 "_csv.c"
      case 1: // $bb
        var $3=HEAP[$rec_len_addr]; //@line 1061 "_csv.c"
        var $4=((($3))|0) > 2147450879; //@line 1061 "_csv.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1061 "_csv.c"
      case 2: // $bb1
        var $5=_PyErr_NoMemory(); //@line 1062 "_csv.c"
        HEAP[$0]=0; //@line 1063 "_csv.c"
        __label__ = 13; break; //@line 1063 "_csv.c"
      case 3: // $bb2
        var $6=HEAP[$self_addr]; //@line 1066 "_csv.c"
        var $7=(($6+20)&4294967295); //@line 1066 "_csv.c"
        var $8=HEAP[$7]; //@line 1066 "_csv.c"
        var $9=HEAP[$rec_len_addr]; //@line 1066 "_csv.c"
        var $10=((($8))|0) < ((($9))|0); //@line 1066 "_csv.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 12; break; } //@line 1066 "_csv.c"
      case 4: // $bb3
        var $11=HEAP[$self_addr]; //@line 1067 "_csv.c"
        var $12=(($11+20)&4294967295); //@line 1067 "_csv.c"
        var $13=HEAP[$12]; //@line 1067 "_csv.c"
        var $14=((($13))|0)==0; //@line 1067 "_csv.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1067 "_csv.c"
      case 5: // $bb4
        var $15=HEAP[$rec_len_addr]; //@line 1068 "_csv.c"
        var $16=((((($15))|0)/32768)|0); //@line 1068 "_csv.c"
        var $17=((($16) + 1)&4294967295); //@line 1068 "_csv.c"
        var $18=((($17) * 32768)&4294967295); //@line 1068 "_csv.c"
        var $19=HEAP[$self_addr]; //@line 1068 "_csv.c"
        var $20=(($19+20)&4294967295); //@line 1068 "_csv.c"
        HEAP[$20]=$18; //@line 1068 "_csv.c"
        var $21=HEAP[$self_addr]; //@line 1069 "_csv.c"
        var $22=(($21+16)&4294967295); //@line 1069 "_csv.c"
        var $23=HEAP[$22]; //@line 1069 "_csv.c"
        var $24=($23)!=0; //@line 1069 "_csv.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1069 "_csv.c"
      case 6: // $bb5
        var $25=HEAP[$self_addr]; //@line 1070 "_csv.c"
        var $26=(($25+16)&4294967295); //@line 1070 "_csv.c"
        var $27=HEAP[$26]; //@line 1070 "_csv.c"
        _PyMem_Free($27); //@line 1070 "_csv.c"
        __label__ = 7; break; //@line 1070 "_csv.c"
      case 7: // $bb6
        var $28=HEAP[$self_addr]; //@line 1071 "_csv.c"
        var $29=(($28+20)&4294967295); //@line 1071 "_csv.c"
        var $30=HEAP[$29]; //@line 1071 "_csv.c"
        var $31=_PyMem_Malloc($30); //@line 1071 "_csv.c"
        var $32=HEAP[$self_addr]; //@line 1071 "_csv.c"
        var $33=(($32+16)&4294967295); //@line 1071 "_csv.c"
        HEAP[$33]=$31; //@line 1071 "_csv.c"
        __label__ = 10; break; //@line 1071 "_csv.c"
      case 8: // $bb7
        var $34=HEAP[$self_addr]; //@line 1074 "_csv.c"
        var $35=(($34+16)&4294967295); //@line 1074 "_csv.c"
        var $36=HEAP[$35]; //@line 1074 "_csv.c"
        HEAP[$old_rec]=$36; //@line 1074 "_csv.c"
        var $37=HEAP[$rec_len_addr]; //@line 1076 "_csv.c"
        var $38=((((($37))|0)/32768)|0); //@line 1076 "_csv.c"
        var $39=((($38) + 1)&4294967295); //@line 1076 "_csv.c"
        var $40=((($39) * 32768)&4294967295); //@line 1076 "_csv.c"
        var $41=HEAP[$self_addr]; //@line 1076 "_csv.c"
        var $42=(($41+20)&4294967295); //@line 1076 "_csv.c"
        HEAP[$42]=$40; //@line 1076 "_csv.c"
        var $43=HEAP[$self_addr]; //@line 1077 "_csv.c"
        var $44=(($43+20)&4294967295); //@line 1077 "_csv.c"
        var $45=HEAP[$44]; //@line 1077 "_csv.c"
        var $46=HEAP[$self_addr]; //@line 1077 "_csv.c"
        var $47=(($46+16)&4294967295); //@line 1077 "_csv.c"
        var $48=HEAP[$47]; //@line 1077 "_csv.c"
        var $49=_PyMem_Realloc($48, $45); //@line 1077 "_csv.c"
        var $50=HEAP[$self_addr]; //@line 1077 "_csv.c"
        var $51=(($50+16)&4294967295); //@line 1077 "_csv.c"
        HEAP[$51]=$49; //@line 1077 "_csv.c"
        var $52=HEAP[$self_addr]; //@line 1078 "_csv.c"
        var $53=(($52+16)&4294967295); //@line 1078 "_csv.c"
        var $54=HEAP[$53]; //@line 1078 "_csv.c"
        var $55=($54)==0; //@line 1078 "_csv.c"
        if ($55) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1078 "_csv.c"
      case 9: // $bb8
        var $56=HEAP[$old_rec]; //@line 1079 "_csv.c"
        _PyMem_Free($56); //@line 1079 "_csv.c"
        __label__ = 10; break; //@line 1079 "_csv.c"
      case 10: // $bb9
        var $57=HEAP[$self_addr]; //@line 1081 "_csv.c"
        var $58=(($57+16)&4294967295); //@line 1081 "_csv.c"
        var $59=HEAP[$58]; //@line 1081 "_csv.c"
        var $60=($59)==0; //@line 1081 "_csv.c"
        if ($60) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1081 "_csv.c"
      case 11: // $bb10
        var $61=_PyErr_NoMemory(); //@line 1082 "_csv.c"
        HEAP[$0]=0; //@line 1083 "_csv.c"
        __label__ = 13; break; //@line 1083 "_csv.c"
      case 12: // $bb11
        HEAP[$0]=1; //@line 1086 "_csv.c"
        __label__ = 13; break; //@line 1086 "_csv.c"
      case 13: // $bb12
        var $62=HEAP[$0]; //@line 1063 "_csv.c"
        HEAP[$retval]=$62; //@line 1063 "_csv.c"
        __label__ = 14; break; //@line 1063 "_csv.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 1063 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 1063 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _join_append($self, $field, $quoted, $quote_empty) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $field_addr=__stackBase__+4;
        var $quoted_addr=__stackBase__+8;
        var $quote_empty_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $rec_len=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$field_addr]=$field;
        HEAP[$quoted_addr]=$quoted;
        HEAP[$quote_empty_addr]=$quote_empty;
        var $1=HEAP[$self_addr]; //@line 1094 "_csv.c"
        var $2=HEAP[$field_addr]; //@line 1094 "_csv.c"
        var $3=HEAP[$quote_empty_addr]; //@line 1094 "_csv.c"
        var $4=HEAP[$quoted_addr]; //@line 1094 "_csv.c"
        var $5=_join_append_data($1, $2, $3, $4, 0); //@line 1094 "_csv.c"
        HEAP[$rec_len]=$5; //@line 1094 "_csv.c"
        var $6=HEAP[$rec_len]; //@line 1095 "_csv.c"
        var $7=((($6))|0) < 0; //@line 1095 "_csv.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1095 "_csv.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1096 "_csv.c"
        __label__ = 5; break; //@line 1096 "_csv.c"
      case 2: // $bb1
        var $8=HEAP[$self_addr]; //@line 1099 "_csv.c"
        var $9=HEAP[$rec_len]; //@line 1099 "_csv.c"
        var $10=_join_check_rec_size($8, $9); //@line 1099 "_csv.c"
        var $11=((($10))|0)==0; //@line 1099 "_csv.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1099 "_csv.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1100 "_csv.c"
        __label__ = 5; break; //@line 1100 "_csv.c"
      case 4: // $bb3
        var $12=HEAP[$self_addr]; //@line 1102 "_csv.c"
        var $13=HEAP[$field_addr]; //@line 1102 "_csv.c"
        var $14=HEAP[$quote_empty_addr]; //@line 1102 "_csv.c"
        var $15=HEAP[$quoted_addr]; //@line 1102 "_csv.c"
        var $16=_join_append_data($12, $13, $14, $15, 1); //@line 1102 "_csv.c"
        var $17=HEAP[$self_addr]; //@line 1102 "_csv.c"
        var $18=(($17+24)&4294967295); //@line 1102 "_csv.c"
        HEAP[$18]=$16; //@line 1102 "_csv.c"
        var $19=HEAP[$self_addr]; //@line 1103 "_csv.c"
        var $20=(($19+28)&4294967295); //@line 1103 "_csv.c"
        var $21=HEAP[$20]; //@line 1103 "_csv.c"
        var $22=((($21) + 1)&4294967295); //@line 1103 "_csv.c"
        var $23=HEAP[$self_addr]; //@line 1103 "_csv.c"
        var $24=(($23+28)&4294967295); //@line 1103 "_csv.c"
        HEAP[$24]=$22; //@line 1103 "_csv.c"
        HEAP[$0]=1; //@line 1105 "_csv.c"
        __label__ = 5; break; //@line 1105 "_csv.c"
      case 5: // $bb4
        var $25=HEAP[$0]; //@line 1096 "_csv.c"
        HEAP[$retval]=$25; //@line 1096 "_csv.c"
        __label__ = 6; break; //@line 1096 "_csv.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1096 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1096 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _join_append_lineterminator($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $terminator_len=__stackBase__+12;
        var $terminator=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 1114 "_csv.c"
        var $2=(($1+12)&4294967295); //@line 1114 "_csv.c"
        var $3=HEAP[$2]; //@line 1114 "_csv.c"
        var $4=(($3+20)&4294967295); //@line 1114 "_csv.c"
        var $5=HEAP[$4]; //@line 1114 "_csv.c"
        var $6=_PyString_Size($5); //@line 1114 "_csv.c"
        HEAP[$terminator_len]=$6; //@line 1114 "_csv.c"
        var $7=HEAP[$terminator_len]; //@line 1115 "_csv.c"
        var $8=((($7))|0)==-1; //@line 1115 "_csv.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1115 "_csv.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1116 "_csv.c"
        __label__ = 7; break; //@line 1116 "_csv.c"
      case 2: // $bb1
        var $9=HEAP[$self_addr]; //@line 1119 "_csv.c"
        var $10=(($9+24)&4294967295); //@line 1119 "_csv.c"
        var $11=HEAP[$10]; //@line 1119 "_csv.c"
        var $12=HEAP[$terminator_len]; //@line 1119 "_csv.c"
        var $13=((($11) + ($12))&4294967295); //@line 1119 "_csv.c"
        var $14=HEAP[$self_addr]; //@line 1119 "_csv.c"
        var $15=_join_check_rec_size($14, $13); //@line 1119 "_csv.c"
        var $16=((($15))|0)==0; //@line 1119 "_csv.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1119 "_csv.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1120 "_csv.c"
        __label__ = 7; break; //@line 1120 "_csv.c"
      case 4: // $bb3
        var $17=HEAP[$self_addr]; //@line 1122 "_csv.c"
        var $18=(($17+12)&4294967295); //@line 1122 "_csv.c"
        var $19=HEAP[$18]; //@line 1122 "_csv.c"
        var $20=(($19+20)&4294967295); //@line 1122 "_csv.c"
        var $21=HEAP[$20]; //@line 1122 "_csv.c"
        var $22=_PyString_AsString($21); //@line 1122 "_csv.c"
        HEAP[$terminator]=$22; //@line 1122 "_csv.c"
        var $23=HEAP[$terminator]; //@line 1123 "_csv.c"
        var $24=($23)==0; //@line 1123 "_csv.c"
        if ($24) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1123 "_csv.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1124 "_csv.c"
        __label__ = 7; break; //@line 1124 "_csv.c"
      case 6: // $bb5
        var $25=HEAP[$terminator_len]; //@line 1125 "_csv.c"
        var $26=HEAP[$self_addr]; //@line 1125 "_csv.c"
        var $27=(($26+16)&4294967295); //@line 1125 "_csv.c"
        var $28=HEAP[$27]; //@line 1125 "_csv.c"
        var $29=HEAP[$self_addr]; //@line 1125 "_csv.c"
        var $30=(($29+24)&4294967295); //@line 1125 "_csv.c"
        var $31=HEAP[$30]; //@line 1125 "_csv.c"
        var $32=(($28+$31)&4294967295); //@line 1125 "_csv.c"
        var $33=HEAP[$terminator]; //@line 1125 "_csv.c"
        _llvm_memmove_p0i8_p0i8_i32($32, $33, $25, 1, 0); //@line 1125 "_csv.c"
        var $34=HEAP[$self_addr]; //@line 1126 "_csv.c"
        var $35=(($34+24)&4294967295); //@line 1126 "_csv.c"
        var $36=HEAP[$35]; //@line 1126 "_csv.c"
        var $37=HEAP[$terminator_len]; //@line 1126 "_csv.c"
        var $38=((($36) + ($37))&4294967295); //@line 1126 "_csv.c"
        var $39=HEAP[$self_addr]; //@line 1126 "_csv.c"
        var $40=(($39+24)&4294967295); //@line 1126 "_csv.c"
        HEAP[$40]=$38; //@line 1126 "_csv.c"
        HEAP[$0]=1; //@line 1128 "_csv.c"
        __label__ = 7; break; //@line 1128 "_csv.c"
      case 7: // $bb6
        var $41=HEAP[$0]; //@line 1116 "_csv.c"
        HEAP[$retval]=$41; //@line 1116 "_csv.c"
        __label__ = 8; break; //@line 1116 "_csv.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 1116 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1116 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_writerow($self, $seq) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $seq_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $dialect=__stackBase__+16;
        var $len=__stackBase__+20;
        var $i=__stackBase__+24;
        var $field=__stackBase__+28;
        var $append_ok=__stackBase__+32;
        var $quoted=__stackBase__+36;
        var $str=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$seq_addr]=$seq;
        var $1=HEAP[$self_addr]; //@line 1140 "_csv.c"
        var $2=(($1+12)&4294967295); //@line 1140 "_csv.c"
        var $3=HEAP[$2]; //@line 1140 "_csv.c"
        HEAP[$dialect]=$3; //@line 1140 "_csv.c"
        var $4=HEAP[$seq_addr]; //@line 1143 "_csv.c"
        var $5=_PySequence_Check($4); //@line 1143 "_csv.c"
        var $6=((($5))|0)==0; //@line 1143 "_csv.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1143 "_csv.c"
      case 1: // $bb
        var $7=HEAP[_error_obj]; //@line 1144 "_csv.c"
        var $8=_PyErr_Format($7, ((__str37)&4294967295)); //@line 1144 "_csv.c"
        HEAP[$0]=$8; //@line 1144 "_csv.c"
        __label__ = 32; break; //@line 1144 "_csv.c"
      case 2: // $bb1
        var $9=HEAP[$seq_addr]; //@line 1146 "_csv.c"
        var $10=_PySequence_Size($9); //@line 1146 "_csv.c"
        HEAP[$len]=$10; //@line 1146 "_csv.c"
        var $11=HEAP[$len]; //@line 1147 "_csv.c"
        var $12=((($11))|0) < 0; //@line 1147 "_csv.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1147 "_csv.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1148 "_csv.c"
        __label__ = 32; break; //@line 1148 "_csv.c"
      case 4: // $bb3
        var $13=HEAP[$self_addr]; //@line 1152 "_csv.c"
        _join_reset($13); //@line 1152 "_csv.c"
        HEAP[$i]=0; //@line 1153 "_csv.c"
        __label__ = 28; break; //@line 1153 "_csv.c"
      case 5: // $bb4
        var $14=HEAP[$seq_addr]; //@line 1158 "_csv.c"
        var $15=HEAP[$i]; //@line 1158 "_csv.c"
        var $16=_PySequence_GetItem($14, $15); //@line 1158 "_csv.c"
        HEAP[$field]=$16; //@line 1158 "_csv.c"
        var $17=HEAP[$field]; //@line 1159 "_csv.c"
        var $18=($17)==0; //@line 1159 "_csv.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1159 "_csv.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 1160 "_csv.c"
        __label__ = 32; break; //@line 1160 "_csv.c"
      case 7: // $bb6
        var $19=HEAP[$dialect]; //@line 1162 "_csv.c"
        var $20=(($19+24)&4294967295); //@line 1162 "_csv.c"
        var $21=HEAP[$20]; //@line 1162 "_csv.c"
        if ($21 == 1) {
          __label__ = 9; break;
        }
        else if ($21 == 2) {
          __label__ = 8; break;
        }
        else {
        __label__ = 10; break;
        }
        
      case 8: // $bb7
        var $22=HEAP[$field]; //@line 1164 "_csv.c"
        var $23=_PyNumber_Check($22); //@line 1164 "_csv.c"
        var $24=((($23))|0)==0; //@line 1164 "_csv.c"
        var $25=unSign(($24), 1, 0); //@line 1164 "_csv.c"
        HEAP[$quoted]=$25; //@line 1164 "_csv.c"
        __label__ = 11; break; //@line 1164 "_csv.c"
      case 9: // $bb8
        HEAP[$quoted]=1; //@line 1167 "_csv.c"
        __label__ = 11; break; //@line 1167 "_csv.c"
      case 10: // $bb9
        HEAP[$quoted]=0; //@line 1170 "_csv.c"
        __label__ = 11; break; //@line 1170 "_csv.c"
      case 11: // $bb10
        var $26=HEAP[$field]; //@line 1174 "_csv.c"
        var $27=(($26+4)&4294967295); //@line 1174 "_csv.c"
        var $28=HEAP[$27]; //@line 1174 "_csv.c"
        var $29=(($28+84)&4294967295); //@line 1174 "_csv.c"
        var $30=HEAP[$29]; //@line 1174 "_csv.c"
        var $31=($30) & 134217728; //@line 1174 "_csv.c"
        var $32=((($31))|0)!=0; //@line 1174 "_csv.c"
        if ($32) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 1174 "_csv.c"
      case 12: // $bb11
        var $33=HEAP[$len]; //@line 1175 "_csv.c"
        var $34=((($33))|0)==1; //@line 1175 "_csv.c"
        var $35=unSign(($34), 1, 0); //@line 1175 "_csv.c"
        var $36=HEAP[$field]; //@line 1175 "_csv.c"
        var $37=$36; //@line 1175 "_csv.c"
        var $38=(($37+20)&4294967295); //@line 1175 "_csv.c"
        var $39=(($38)&4294967295); //@line 1175 "_csv.c"
        var $40=HEAP[$self_addr]; //@line 1175 "_csv.c"
        var $41=_join_append($40, $39, $quoted, $35); //@line 1175 "_csv.c"
        HEAP[$append_ok]=$41; //@line 1175 "_csv.c"
        var $42=HEAP[$field]; //@line 1178 "_csv.c"
        var $43=(($42)&4294967295); //@line 1178 "_csv.c"
        var $44=HEAP[$43]; //@line 1178 "_csv.c"
        var $45=((($44) - 1)&4294967295); //@line 1178 "_csv.c"
        var $46=HEAP[$field]; //@line 1178 "_csv.c"
        var $47=(($46)&4294967295); //@line 1178 "_csv.c"
        HEAP[$47]=$45; //@line 1178 "_csv.c"
        var $48=HEAP[$field]; //@line 1178 "_csv.c"
        var $49=(($48)&4294967295); //@line 1178 "_csv.c"
        var $50=HEAP[$49]; //@line 1178 "_csv.c"
        var $51=((($50))|0)==0; //@line 1178 "_csv.c"
        if ($51) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1178 "_csv.c"
      case 13: // $bb12
        var $52=HEAP[$field]; //@line 1178 "_csv.c"
        var $53=(($52+4)&4294967295); //@line 1178 "_csv.c"
        var $54=HEAP[$53]; //@line 1178 "_csv.c"
        var $55=(($54+24)&4294967295); //@line 1178 "_csv.c"
        var $56=HEAP[$55]; //@line 1178 "_csv.c"
        var $57=HEAP[$field]; //@line 1178 "_csv.c"
        FUNCTION_TABLE[$56]($57); //@line 1178 "_csv.c"
        __label__ = 14; break; //@line 1178 "_csv.c"
      case 14: // $bb13
        __label__ = 25; break; //@line 1178 "_csv.c"
      case 15: // $bb14
        var $58=HEAP[$field]; //@line 1180 "_csv.c"
        var $59=($58)==(__Py_NoneStruct); //@line 1180 "_csv.c"
        if ($59) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 1180 "_csv.c"
      case 16: // $bb15
        var $60=HEAP[$len]; //@line 1181 "_csv.c"
        var $61=((($60))|0)==1; //@line 1181 "_csv.c"
        var $62=unSign(($61), 1, 0); //@line 1181 "_csv.c"
        var $63=HEAP[$self_addr]; //@line 1181 "_csv.c"
        var $64=_join_append($63, ((__str33)&4294967295), $quoted, $62); //@line 1181 "_csv.c"
        HEAP[$append_ok]=$64; //@line 1181 "_csv.c"
        var $65=HEAP[$field]; //@line 1182 "_csv.c"
        var $66=(($65)&4294967295); //@line 1182 "_csv.c"
        var $67=HEAP[$66]; //@line 1182 "_csv.c"
        var $68=((($67) - 1)&4294967295); //@line 1182 "_csv.c"
        var $69=HEAP[$field]; //@line 1182 "_csv.c"
        var $70=(($69)&4294967295); //@line 1182 "_csv.c"
        HEAP[$70]=$68; //@line 1182 "_csv.c"
        var $71=HEAP[$field]; //@line 1182 "_csv.c"
        var $72=(($71)&4294967295); //@line 1182 "_csv.c"
        var $73=HEAP[$72]; //@line 1182 "_csv.c"
        var $74=((($73))|0)==0; //@line 1182 "_csv.c"
        if ($74) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1182 "_csv.c"
      case 17: // $bb16
        var $75=HEAP[$field]; //@line 1182 "_csv.c"
        var $76=(($75+4)&4294967295); //@line 1182 "_csv.c"
        var $77=HEAP[$76]; //@line 1182 "_csv.c"
        var $78=(($77+24)&4294967295); //@line 1182 "_csv.c"
        var $79=HEAP[$78]; //@line 1182 "_csv.c"
        var $80=HEAP[$field]; //@line 1182 "_csv.c"
        FUNCTION_TABLE[$79]($80); //@line 1182 "_csv.c"
        __label__ = 18; break; //@line 1182 "_csv.c"
      case 18: // $bb17
        __label__ = 25; break; //@line 1182 "_csv.c"
      case 19: // $bb18
        var $81=HEAP[$field]; //@line 1187 "_csv.c"
        var $82=_PyObject_Str($81); //@line 1187 "_csv.c"
        HEAP[$str]=$82; //@line 1187 "_csv.c"
        var $83=HEAP[$field]; //@line 1188 "_csv.c"
        var $84=(($83)&4294967295); //@line 1188 "_csv.c"
        var $85=HEAP[$84]; //@line 1188 "_csv.c"
        var $86=((($85) - 1)&4294967295); //@line 1188 "_csv.c"
        var $87=HEAP[$field]; //@line 1188 "_csv.c"
        var $88=(($87)&4294967295); //@line 1188 "_csv.c"
        HEAP[$88]=$86; //@line 1188 "_csv.c"
        var $89=HEAP[$field]; //@line 1188 "_csv.c"
        var $90=(($89)&4294967295); //@line 1188 "_csv.c"
        var $91=HEAP[$90]; //@line 1188 "_csv.c"
        var $92=((($91))|0)==0; //@line 1188 "_csv.c"
        if ($92) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1188 "_csv.c"
      case 20: // $bb19
        var $93=HEAP[$field]; //@line 1188 "_csv.c"
        var $94=(($93+4)&4294967295); //@line 1188 "_csv.c"
        var $95=HEAP[$94]; //@line 1188 "_csv.c"
        var $96=(($95+24)&4294967295); //@line 1188 "_csv.c"
        var $97=HEAP[$96]; //@line 1188 "_csv.c"
        var $98=HEAP[$field]; //@line 1188 "_csv.c"
        FUNCTION_TABLE[$97]($98); //@line 1188 "_csv.c"
        __label__ = 21; break; //@line 1188 "_csv.c"
      case 21: // $bb20
        var $99=HEAP[$str]; //@line 1189 "_csv.c"
        var $100=($99)==0; //@line 1189 "_csv.c"
        if ($100) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1189 "_csv.c"
      case 22: // $bb21
        HEAP[$0]=0; //@line 1190 "_csv.c"
        __label__ = 32; break; //@line 1190 "_csv.c"
      case 23: // $bb22
        var $101=HEAP[$len]; //@line 1192 "_csv.c"
        var $102=((($101))|0)==1; //@line 1192 "_csv.c"
        var $103=unSign(($102), 1, 0); //@line 1192 "_csv.c"
        var $104=HEAP[$str]; //@line 1192 "_csv.c"
        var $105=$104; //@line 1192 "_csv.c"
        var $106=(($105+20)&4294967295); //@line 1192 "_csv.c"
        var $107=(($106)&4294967295); //@line 1192 "_csv.c"
        var $108=HEAP[$self_addr]; //@line 1192 "_csv.c"
        var $109=_join_append($108, $107, $quoted, $103); //@line 1192 "_csv.c"
        HEAP[$append_ok]=$109; //@line 1192 "_csv.c"
        var $110=HEAP[$str]; //@line 1194 "_csv.c"
        var $111=(($110)&4294967295); //@line 1194 "_csv.c"
        var $112=HEAP[$111]; //@line 1194 "_csv.c"
        var $113=((($112) - 1)&4294967295); //@line 1194 "_csv.c"
        var $114=HEAP[$str]; //@line 1194 "_csv.c"
        var $115=(($114)&4294967295); //@line 1194 "_csv.c"
        HEAP[$115]=$113; //@line 1194 "_csv.c"
        var $116=HEAP[$str]; //@line 1194 "_csv.c"
        var $117=(($116)&4294967295); //@line 1194 "_csv.c"
        var $118=HEAP[$117]; //@line 1194 "_csv.c"
        var $119=((($118))|0)==0; //@line 1194 "_csv.c"
        if ($119) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1194 "_csv.c"
      case 24: // $bb23
        var $120=HEAP[$str]; //@line 1194 "_csv.c"
        var $121=(($120+4)&4294967295); //@line 1194 "_csv.c"
        var $122=HEAP[$121]; //@line 1194 "_csv.c"
        var $123=(($122+24)&4294967295); //@line 1194 "_csv.c"
        var $124=HEAP[$123]; //@line 1194 "_csv.c"
        var $125=HEAP[$str]; //@line 1194 "_csv.c"
        FUNCTION_TABLE[$124]($125); //@line 1194 "_csv.c"
        __label__ = 25; break; //@line 1194 "_csv.c"
      case 25: // $bb24
        var $126=HEAP[$append_ok]; //@line 1196 "_csv.c"
        var $127=((($126))|0)==0; //@line 1196 "_csv.c"
        if ($127) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1196 "_csv.c"
      case 26: // $bb25
        HEAP[$0]=0; //@line 1197 "_csv.c"
        __label__ = 32; break; //@line 1197 "_csv.c"
      case 27: // $bb26
        var $128=HEAP[$i]; //@line 1153 "_csv.c"
        var $129=((($128) + 1)&4294967295); //@line 1153 "_csv.c"
        HEAP[$i]=$129; //@line 1153 "_csv.c"
        __label__ = 28; break; //@line 1153 "_csv.c"
      case 28: // $bb27
        var $130=HEAP[$i]; //@line 1153 "_csv.c"
        var $131=HEAP[$len]; //@line 1153 "_csv.c"
        var $132=((($130))|0) < ((($131))|0); //@line 1153 "_csv.c"
        if ($132) { __label__ = 5; break; } else { __label__ = 29; break; } //@line 1153 "_csv.c"
      case 29: // $bb28
        var $133=HEAP[$self_addr]; //@line 1202 "_csv.c"
        var $134=_join_append_lineterminator($133); //@line 1202 "_csv.c"
        var $135=((($134))|0)==0; //@line 1202 "_csv.c"
        if ($135) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1202 "_csv.c"
      case 30: // $bb29
        HEAP[$0]=0; //@line 1203 "_csv.c"
        __label__ = 32; break; //@line 1203 "_csv.c"
      case 31: // $bb30
        var $136=HEAP[$self_addr]; //@line 1205 "_csv.c"
        var $137=(($136+24)&4294967295); //@line 1205 "_csv.c"
        var $138=HEAP[$137]; //@line 1205 "_csv.c"
        var $139=HEAP[$self_addr]; //@line 1205 "_csv.c"
        var $140=(($139+16)&4294967295); //@line 1205 "_csv.c"
        var $141=HEAP[$140]; //@line 1205 "_csv.c"
        var $142=HEAP[$self_addr]; //@line 1205 "_csv.c"
        var $143=(($142+8)&4294967295); //@line 1205 "_csv.c"
        var $144=HEAP[$143]; //@line 1205 "_csv.c"
        var $145=_PyObject_CallFunction($144, ((__str38)&4294967295), $141, $138); //@line 1205 "_csv.c"
        HEAP[$0]=$145; //@line 1205 "_csv.c"
        __label__ = 32; break; //@line 1205 "_csv.c"
      case 32: // $bb31
        var $146=HEAP[$0]; //@line 1144 "_csv.c"
        HEAP[$retval]=$146; //@line 1144 "_csv.c"
        __label__ = 33; break; //@line 1144 "_csv.c"
      case 33: // $return
        var $retval32=HEAP[$retval]; //@line 1144 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval32; //@line 1144 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_writerows($self, $seqseq) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $seqseq_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $row_iter=__stackBase__+16;
        var $row_obj=__stackBase__+20;
        var $result=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$seqseq_addr]=$seqseq;
        var $1=HEAP[$seqseq_addr]; //@line 1220 "_csv.c"
        var $2=_PyObject_GetIter($1); //@line 1220 "_csv.c"
        HEAP[$row_iter]=$2; //@line 1220 "_csv.c"
        var $3=HEAP[$row_iter]; //@line 1221 "_csv.c"
        var $4=($3)==0; //@line 1221 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1221 "_csv.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_TypeError]; //@line 1222 "_csv.c"
        _PyErr_SetString($5, ((__str39)&4294967295)); //@line 1222 "_csv.c"
        HEAP[$0]=0; //@line 1224 "_csv.c"
        __label__ = 17; break; //@line 1224 "_csv.c"
      case 2: // $bb1
        __label__ = 11; break; //@line 1224 "_csv.c"
      case 3: // $bb2
        var $6=HEAP[$self_addr]; //@line 1227 "_csv.c"
        var $7=HEAP[$row_obj]; //@line 1227 "_csv.c"
        var $8=_csv_writerow($6, $7); //@line 1227 "_csv.c"
        HEAP[$result]=$8; //@line 1227 "_csv.c"
        var $9=HEAP[$row_obj]; //@line 1228 "_csv.c"
        var $10=(($9)&4294967295); //@line 1228 "_csv.c"
        var $11=HEAP[$10]; //@line 1228 "_csv.c"
        var $12=((($11) - 1)&4294967295); //@line 1228 "_csv.c"
        var $13=HEAP[$row_obj]; //@line 1228 "_csv.c"
        var $14=(($13)&4294967295); //@line 1228 "_csv.c"
        HEAP[$14]=$12; //@line 1228 "_csv.c"
        var $15=HEAP[$row_obj]; //@line 1228 "_csv.c"
        var $16=(($15)&4294967295); //@line 1228 "_csv.c"
        var $17=HEAP[$16]; //@line 1228 "_csv.c"
        var $18=((($17))|0)==0; //@line 1228 "_csv.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1228 "_csv.c"
      case 4: // $bb3
        var $19=HEAP[$row_obj]; //@line 1228 "_csv.c"
        var $20=(($19+4)&4294967295); //@line 1228 "_csv.c"
        var $21=HEAP[$20]; //@line 1228 "_csv.c"
        var $22=(($21+24)&4294967295); //@line 1228 "_csv.c"
        var $23=HEAP[$22]; //@line 1228 "_csv.c"
        var $24=HEAP[$row_obj]; //@line 1228 "_csv.c"
        FUNCTION_TABLE[$23]($24); //@line 1228 "_csv.c"
        __label__ = 5; break; //@line 1228 "_csv.c"
      case 5: // $bb4
        var $25=HEAP[$result]; //@line 1229 "_csv.c"
        var $26=($25)==0; //@line 1229 "_csv.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 1229 "_csv.c"
      case 6: // $bb5
        var $27=HEAP[$row_iter]; //@line 1230 "_csv.c"
        var $28=(($27)&4294967295); //@line 1230 "_csv.c"
        var $29=HEAP[$28]; //@line 1230 "_csv.c"
        var $30=((($29) - 1)&4294967295); //@line 1230 "_csv.c"
        var $31=HEAP[$row_iter]; //@line 1230 "_csv.c"
        var $32=(($31)&4294967295); //@line 1230 "_csv.c"
        HEAP[$32]=$30; //@line 1230 "_csv.c"
        var $33=HEAP[$row_iter]; //@line 1230 "_csv.c"
        var $34=(($33)&4294967295); //@line 1230 "_csv.c"
        var $35=HEAP[$34]; //@line 1230 "_csv.c"
        var $36=((($35))|0)==0; //@line 1230 "_csv.c"
        if ($36) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1230 "_csv.c"
      case 7: // $bb6
        var $37=HEAP[$row_iter]; //@line 1230 "_csv.c"
        var $38=(($37+4)&4294967295); //@line 1230 "_csv.c"
        var $39=HEAP[$38]; //@line 1230 "_csv.c"
        var $40=(($39+24)&4294967295); //@line 1230 "_csv.c"
        var $41=HEAP[$40]; //@line 1230 "_csv.c"
        var $42=HEAP[$row_iter]; //@line 1230 "_csv.c"
        FUNCTION_TABLE[$41]($42); //@line 1230 "_csv.c"
        __label__ = 8; break; //@line 1230 "_csv.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 1231 "_csv.c"
        __label__ = 17; break; //@line 1231 "_csv.c"
      case 9: // $bb8
        var $43=HEAP[$result]; //@line 1234 "_csv.c"
        var $44=(($43)&4294967295); //@line 1234 "_csv.c"
        var $45=HEAP[$44]; //@line 1234 "_csv.c"
        var $46=((($45) - 1)&4294967295); //@line 1234 "_csv.c"
        var $47=HEAP[$result]; //@line 1234 "_csv.c"
        var $48=(($47)&4294967295); //@line 1234 "_csv.c"
        HEAP[$48]=$46; //@line 1234 "_csv.c"
        var $49=HEAP[$result]; //@line 1234 "_csv.c"
        var $50=(($49)&4294967295); //@line 1234 "_csv.c"
        var $51=HEAP[$50]; //@line 1234 "_csv.c"
        var $52=((($51))|0)==0; //@line 1234 "_csv.c"
        if ($52) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1234 "_csv.c"
      case 10: // $bb9
        var $53=HEAP[$result]; //@line 1234 "_csv.c"
        var $54=(($53+4)&4294967295); //@line 1234 "_csv.c"
        var $55=HEAP[$54]; //@line 1234 "_csv.c"
        var $56=(($55+24)&4294967295); //@line 1234 "_csv.c"
        var $57=HEAP[$56]; //@line 1234 "_csv.c"
        var $58=HEAP[$result]; //@line 1234 "_csv.c"
        FUNCTION_TABLE[$57]($58); //@line 1234 "_csv.c"
        __label__ = 11; break; //@line 1234 "_csv.c"
      case 11: // $bb10
        var $59=HEAP[$row_iter]; //@line 1226 "_csv.c"
        var $60=_PyIter_Next($59); //@line 1226 "_csv.c"
        HEAP[$row_obj]=$60; //@line 1226 "_csv.c"
        var $61=HEAP[$row_obj]; //@line 1226 "_csv.c"
        var $62=($61)!=0; //@line 1226 "_csv.c"
        if ($62) { __label__ = 3; break; } else { __label__ = 12; break; } //@line 1226 "_csv.c"
      case 12: // $bb11
        var $63=HEAP[$row_iter]; //@line 1236 "_csv.c"
        var $64=(($63)&4294967295); //@line 1236 "_csv.c"
        var $65=HEAP[$64]; //@line 1236 "_csv.c"
        var $66=((($65) - 1)&4294967295); //@line 1236 "_csv.c"
        var $67=HEAP[$row_iter]; //@line 1236 "_csv.c"
        var $68=(($67)&4294967295); //@line 1236 "_csv.c"
        HEAP[$68]=$66; //@line 1236 "_csv.c"
        var $69=HEAP[$row_iter]; //@line 1236 "_csv.c"
        var $70=(($69)&4294967295); //@line 1236 "_csv.c"
        var $71=HEAP[$70]; //@line 1236 "_csv.c"
        var $72=((($71))|0)==0; //@line 1236 "_csv.c"
        if ($72) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1236 "_csv.c"
      case 13: // $bb12
        var $73=HEAP[$row_iter]; //@line 1236 "_csv.c"
        var $74=(($73+4)&4294967295); //@line 1236 "_csv.c"
        var $75=HEAP[$74]; //@line 1236 "_csv.c"
        var $76=(($75+24)&4294967295); //@line 1236 "_csv.c"
        var $77=HEAP[$76]; //@line 1236 "_csv.c"
        var $78=HEAP[$row_iter]; //@line 1236 "_csv.c"
        FUNCTION_TABLE[$77]($78); //@line 1236 "_csv.c"
        __label__ = 14; break; //@line 1236 "_csv.c"
      case 14: // $bb13
        var $79=_PyErr_Occurred(); //@line 1237 "_csv.c"
        var $80=($79)!=0; //@line 1237 "_csv.c"
        if ($80) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1237 "_csv.c"
      case 15: // $bb14
        HEAP[$0]=0; //@line 1238 "_csv.c"
        __label__ = 17; break; //@line 1238 "_csv.c"
      case 16: // $bb15
        var $81=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1239 "_csv.c"
        var $82=((($81) + 1)&4294967295); //@line 1239 "_csv.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$82; //@line 1239 "_csv.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1240 "_csv.c"
        __label__ = 17; break; //@line 1240 "_csv.c"
      case 17: // $bb16
        var $83=HEAP[$0]; //@line 1224 "_csv.c"
        HEAP[$retval]=$83; //@line 1224 "_csv.c"
        __label__ = 18; break; //@line 1224 "_csv.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 1224 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 1224 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Writer_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 1259 "_csv.c"
        var $1=$0; //@line 1259 "_csv.c"
        _PyObject_GC_UnTrack($1); //@line 1259 "_csv.c"
        var $2=HEAP[$self_addr]; //@line 1260 "_csv.c"
        var $3=(($2+12)&4294967295); //@line 1260 "_csv.c"
        var $4=HEAP[$3]; //@line 1260 "_csv.c"
        var $5=($4)!=0; //@line 1260 "_csv.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1260 "_csv.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 1260 "_csv.c"
        var $7=(($6+12)&4294967295); //@line 1260 "_csv.c"
        var $8=HEAP[$7]; //@line 1260 "_csv.c"
        var $9=$8; //@line 1260 "_csv.c"
        var $10=(($9)&4294967295); //@line 1260 "_csv.c"
        var $11=HEAP[$10]; //@line 1260 "_csv.c"
        var $12=((($11) - 1)&4294967295); //@line 1260 "_csv.c"
        var $13=(($9)&4294967295); //@line 1260 "_csv.c"
        HEAP[$13]=$12; //@line 1260 "_csv.c"
        var $14=(($9)&4294967295); //@line 1260 "_csv.c"
        var $15=HEAP[$14]; //@line 1260 "_csv.c"
        var $16=((($15))|0)==0; //@line 1260 "_csv.c"
        if ($16) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1260 "_csv.c"
      case 2: // $bb1
        var $17=HEAP[$self_addr]; //@line 1260 "_csv.c"
        var $18=(($17+12)&4294967295); //@line 1260 "_csv.c"
        var $19=HEAP[$18]; //@line 1260 "_csv.c"
        var $20=$19; //@line 1260 "_csv.c"
        var $21=(($20+4)&4294967295); //@line 1260 "_csv.c"
        var $22=HEAP[$21]; //@line 1260 "_csv.c"
        var $23=(($22+24)&4294967295); //@line 1260 "_csv.c"
        var $24=HEAP[$23]; //@line 1260 "_csv.c"
        var $25=HEAP[$self_addr]; //@line 1260 "_csv.c"
        var $26=(($25+12)&4294967295); //@line 1260 "_csv.c"
        var $27=HEAP[$26]; //@line 1260 "_csv.c"
        var $28=$27; //@line 1260 "_csv.c"
        FUNCTION_TABLE[$24]($28); //@line 1260 "_csv.c"
        __label__ = 3; break; //@line 1260 "_csv.c"
      case 3: // $bb2
        var $29=HEAP[$self_addr]; //@line 1261 "_csv.c"
        var $30=(($29+8)&4294967295); //@line 1261 "_csv.c"
        var $31=HEAP[$30]; //@line 1261 "_csv.c"
        var $32=($31)!=0; //@line 1261 "_csv.c"
        if ($32) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1261 "_csv.c"
      case 4: // $bb3
        var $33=HEAP[$self_addr]; //@line 1261 "_csv.c"
        var $34=(($33+8)&4294967295); //@line 1261 "_csv.c"
        var $35=HEAP[$34]; //@line 1261 "_csv.c"
        var $36=(($35)&4294967295); //@line 1261 "_csv.c"
        var $37=HEAP[$36]; //@line 1261 "_csv.c"
        var $38=((($37) - 1)&4294967295); //@line 1261 "_csv.c"
        var $39=(($35)&4294967295); //@line 1261 "_csv.c"
        HEAP[$39]=$38; //@line 1261 "_csv.c"
        var $40=(($35)&4294967295); //@line 1261 "_csv.c"
        var $41=HEAP[$40]; //@line 1261 "_csv.c"
        var $42=((($41))|0)==0; //@line 1261 "_csv.c"
        if ($42) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1261 "_csv.c"
      case 5: // $bb4
        var $43=HEAP[$self_addr]; //@line 1261 "_csv.c"
        var $44=(($43+8)&4294967295); //@line 1261 "_csv.c"
        var $45=HEAP[$44]; //@line 1261 "_csv.c"
        var $46=(($45+4)&4294967295); //@line 1261 "_csv.c"
        var $47=HEAP[$46]; //@line 1261 "_csv.c"
        var $48=(($47+24)&4294967295); //@line 1261 "_csv.c"
        var $49=HEAP[$48]; //@line 1261 "_csv.c"
        var $50=HEAP[$self_addr]; //@line 1261 "_csv.c"
        var $51=(($50+8)&4294967295); //@line 1261 "_csv.c"
        var $52=HEAP[$51]; //@line 1261 "_csv.c"
        FUNCTION_TABLE[$49]($52); //@line 1261 "_csv.c"
        __label__ = 6; break; //@line 1261 "_csv.c"
      case 6: // $bb5
        var $53=HEAP[$self_addr]; //@line 1262 "_csv.c"
        var $54=(($53+16)&4294967295); //@line 1262 "_csv.c"
        var $55=HEAP[$54]; //@line 1262 "_csv.c"
        var $56=($55)!=0; //@line 1262 "_csv.c"
        if ($56) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1262 "_csv.c"
      case 7: // $bb6
        var $57=HEAP[$self_addr]; //@line 1263 "_csv.c"
        var $58=(($57+16)&4294967295); //@line 1263 "_csv.c"
        var $59=HEAP[$58]; //@line 1263 "_csv.c"
        _PyMem_Free($59); //@line 1263 "_csv.c"
        __label__ = 8; break; //@line 1263 "_csv.c"
      case 8: // $bb7
        var $60=HEAP[$self_addr]; //@line 1264 "_csv.c"
        var $61=$60; //@line 1264 "_csv.c"
        _PyObject_GC_Del($61); //@line 1264 "_csv.c"
        __label__ = 9; break; //@line 1265 "_csv.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 1265 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Writer_traverse($self, $visit, $arg) {
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
        var $vret4=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$visit_addr]=$visit;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$self_addr]; //@line 1270 "_csv.c"
        var $2=(($1+12)&4294967295); //@line 1270 "_csv.c"
        var $3=HEAP[$2]; //@line 1270 "_csv.c"
        var $4=($3)!=0; //@line 1270 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1270 "_csv.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1270 "_csv.c"
        var $6=(($5+12)&4294967295); //@line 1270 "_csv.c"
        var $7=HEAP[$6]; //@line 1270 "_csv.c"
        var $8=$7; //@line 1270 "_csv.c"
        var $9=HEAP[$visit_addr]; //@line 1270 "_csv.c"
        var $10=HEAP[$arg_addr]; //@line 1270 "_csv.c"
        var $11=FUNCTION_TABLE[$9]($8, $10); //@line 1270 "_csv.c"
        HEAP[$vret]=$11; //@line 1270 "_csv.c"
        var $12=HEAP[$vret]; //@line 1270 "_csv.c"
        var $13=((($12))|0)!=0; //@line 1270 "_csv.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1270 "_csv.c"
      case 2: // $bb1
        var $14=HEAP[$vret]; //@line 1270 "_csv.c"
        HEAP[$0]=$14; //@line 1270 "_csv.c"
        __label__ = 7; break; //@line 1270 "_csv.c"
      case 3: // $bb2
        var $15=HEAP[$self_addr]; //@line 1271 "_csv.c"
        var $16=(($15+8)&4294967295); //@line 1271 "_csv.c"
        var $17=HEAP[$16]; //@line 1271 "_csv.c"
        var $18=($17)!=0; //@line 1271 "_csv.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1271 "_csv.c"
      case 4: // $bb3
        var $19=HEAP[$self_addr]; //@line 1271 "_csv.c"
        var $20=(($19+8)&4294967295); //@line 1271 "_csv.c"
        var $21=HEAP[$20]; //@line 1271 "_csv.c"
        var $22=HEAP[$visit_addr]; //@line 1271 "_csv.c"
        var $23=HEAP[$arg_addr]; //@line 1271 "_csv.c"
        var $24=FUNCTION_TABLE[$22]($21, $23); //@line 1271 "_csv.c"
        HEAP[$vret4]=$24; //@line 1271 "_csv.c"
        var $25=HEAP[$vret4]; //@line 1271 "_csv.c"
        var $26=((($25))|0)!=0; //@line 1271 "_csv.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1271 "_csv.c"
      case 5: // $bb5
        var $27=HEAP[$vret4]; //@line 1271 "_csv.c"
        HEAP[$0]=$27; //@line 1271 "_csv.c"
        __label__ = 7; break; //@line 1271 "_csv.c"
      case 6: // $bb6
        HEAP[$0]=0; //@line 1272 "_csv.c"
        __label__ = 7; break; //@line 1272 "_csv.c"
      case 7: // $bb7
        var $28=HEAP[$0]; //@line 1270 "_csv.c"
        HEAP[$retval]=$28; //@line 1270 "_csv.c"
        __label__ = 8; break; //@line 1270 "_csv.c"
      case 8: // $return
        var $retval8=HEAP[$retval]; //@line 1270 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1270 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Writer_clear($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_py_tmp=__stackBase__+12;
        var $_py_tmp4=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 1278 "_csv.c"
        var $2=(($1+12)&4294967295); //@line 1278 "_csv.c"
        var $3=HEAP[$2]; //@line 1278 "_csv.c"
        var $4=($3)!=0; //@line 1278 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1278 "_csv.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1278 "_csv.c"
        var $6=(($5+12)&4294967295); //@line 1278 "_csv.c"
        var $7=HEAP[$6]; //@line 1278 "_csv.c"
        var $8=$7; //@line 1278 "_csv.c"
        HEAP[$_py_tmp]=$8; //@line 1278 "_csv.c"
        var $9=HEAP[$self_addr]; //@line 1278 "_csv.c"
        var $10=(($9+12)&4294967295); //@line 1278 "_csv.c"
        HEAP[$10]=0; //@line 1278 "_csv.c"
        var $11=HEAP[$_py_tmp]; //@line 1278 "_csv.c"
        var $12=(($11)&4294967295); //@line 1278 "_csv.c"
        var $13=HEAP[$12]; //@line 1278 "_csv.c"
        var $14=((($13) - 1)&4294967295); //@line 1278 "_csv.c"
        var $15=HEAP[$_py_tmp]; //@line 1278 "_csv.c"
        var $16=(($15)&4294967295); //@line 1278 "_csv.c"
        HEAP[$16]=$14; //@line 1278 "_csv.c"
        var $17=HEAP[$_py_tmp]; //@line 1278 "_csv.c"
        var $18=(($17)&4294967295); //@line 1278 "_csv.c"
        var $19=HEAP[$18]; //@line 1278 "_csv.c"
        var $20=((($19))|0)==0; //@line 1278 "_csv.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1278 "_csv.c"
      case 2: // $bb1
        var $21=HEAP[$_py_tmp]; //@line 1278 "_csv.c"
        var $22=(($21+4)&4294967295); //@line 1278 "_csv.c"
        var $23=HEAP[$22]; //@line 1278 "_csv.c"
        var $24=(($23+24)&4294967295); //@line 1278 "_csv.c"
        var $25=HEAP[$24]; //@line 1278 "_csv.c"
        var $26=HEAP[$_py_tmp]; //@line 1278 "_csv.c"
        FUNCTION_TABLE[$25]($26); //@line 1278 "_csv.c"
        __label__ = 3; break; //@line 1278 "_csv.c"
      case 3: // $bb2
        var $27=HEAP[$self_addr]; //@line 1279 "_csv.c"
        var $28=(($27+8)&4294967295); //@line 1279 "_csv.c"
        var $29=HEAP[$28]; //@line 1279 "_csv.c"
        var $30=($29)!=0; //@line 1279 "_csv.c"
        if ($30) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1279 "_csv.c"
      case 4: // $bb3
        var $31=HEAP[$self_addr]; //@line 1279 "_csv.c"
        var $32=(($31+8)&4294967295); //@line 1279 "_csv.c"
        var $33=HEAP[$32]; //@line 1279 "_csv.c"
        HEAP[$_py_tmp4]=$33; //@line 1279 "_csv.c"
        var $34=HEAP[$self_addr]; //@line 1279 "_csv.c"
        var $35=(($34+8)&4294967295); //@line 1279 "_csv.c"
        HEAP[$35]=0; //@line 1279 "_csv.c"
        var $36=HEAP[$_py_tmp4]; //@line 1279 "_csv.c"
        var $37=(($36)&4294967295); //@line 1279 "_csv.c"
        var $38=HEAP[$37]; //@line 1279 "_csv.c"
        var $39=((($38) - 1)&4294967295); //@line 1279 "_csv.c"
        var $40=HEAP[$_py_tmp4]; //@line 1279 "_csv.c"
        var $41=(($40)&4294967295); //@line 1279 "_csv.c"
        HEAP[$41]=$39; //@line 1279 "_csv.c"
        var $42=HEAP[$_py_tmp4]; //@line 1279 "_csv.c"
        var $43=(($42)&4294967295); //@line 1279 "_csv.c"
        var $44=HEAP[$43]; //@line 1279 "_csv.c"
        var $45=((($44))|0)==0; //@line 1279 "_csv.c"
        if ($45) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1279 "_csv.c"
      case 5: // $bb5
        var $46=HEAP[$_py_tmp4]; //@line 1279 "_csv.c"
        var $47=(($46+4)&4294967295); //@line 1279 "_csv.c"
        var $48=HEAP[$47]; //@line 1279 "_csv.c"
        var $49=(($48+24)&4294967295); //@line 1279 "_csv.c"
        var $50=HEAP[$49]; //@line 1279 "_csv.c"
        var $51=HEAP[$_py_tmp4]; //@line 1279 "_csv.c"
        FUNCTION_TABLE[$50]($51); //@line 1279 "_csv.c"
        __label__ = 6; break; //@line 1279 "_csv.c"
      case 6: // $bb6
        HEAP[$0]=0; //@line 1280 "_csv.c"
        var $52=HEAP[$0]; //@line 1280 "_csv.c"
        HEAP[$retval]=$52; //@line 1280 "_csv.c"
        __label__ = 7; break; //@line 1280 "_csv.c"
      case 7: // $return
        var $retval7=HEAP[$retval]; //@line 1280 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1280 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_writer($module, $args, $keyword_args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $keyword_args_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $output_file=__stackBase__+20;
        var $dialect=__stackBase__+24;
        var $self=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$module_addr]=$module;
        HEAP[$args_addr]=$args;
        HEAP[$keyword_args_addr]=$keyword_args;
        HEAP[$dialect]=0; //@line 1328 "_csv.c"
        var $1=__PyObject_GC_New(_Writer_Type); //@line 1329 "_csv.c"
        var $2=$1; //@line 1329 "_csv.c"
        HEAP[$self]=$2; //@line 1329 "_csv.c"
        var $3=HEAP[$self]; //@line 1331 "_csv.c"
        var $4=($3)==0; //@line 1331 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1331 "_csv.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1332 "_csv.c"
        __label__ = 16; break; //@line 1332 "_csv.c"
      case 2: // $bb1
        var $5=HEAP[$self]; //@line 1334 "_csv.c"
        var $6=(($5+12)&4294967295); //@line 1334 "_csv.c"
        HEAP[$6]=0; //@line 1334 "_csv.c"
        var $7=HEAP[$self]; //@line 1335 "_csv.c"
        var $8=(($7+8)&4294967295); //@line 1335 "_csv.c"
        HEAP[$8]=0; //@line 1335 "_csv.c"
        var $9=HEAP[$self]; //@line 1337 "_csv.c"
        var $10=(($9+16)&4294967295); //@line 1337 "_csv.c"
        HEAP[$10]=0; //@line 1337 "_csv.c"
        var $11=HEAP[$self]; //@line 1338 "_csv.c"
        var $12=(($11+20)&4294967295); //@line 1338 "_csv.c"
        HEAP[$12]=0; //@line 1338 "_csv.c"
        var $13=HEAP[$self]; //@line 1339 "_csv.c"
        var $14=(($13+24)&4294967295); //@line 1339 "_csv.c"
        HEAP[$14]=0; //@line 1339 "_csv.c"
        var $15=HEAP[$self]; //@line 1340 "_csv.c"
        var $16=(($15+28)&4294967295); //@line 1340 "_csv.c"
        HEAP[$16]=0; //@line 1340 "_csv.c"
        var $17=HEAP[$args_addr]; //@line 1342 "_csv.c"
        var $18=_PyArg_UnpackTuple($17, ((__str33)&4294967295), 1, 2, $output_file, $dialect); //@line 1342 "_csv.c"
        var $19=((($18))|0)==0; //@line 1342 "_csv.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1342 "_csv.c"
      case 3: // $bb2
        var $20=HEAP[$self]; //@line 1343 "_csv.c"
        var $21=$20; //@line 1343 "_csv.c"
        var $22=(($21)&4294967295); //@line 1343 "_csv.c"
        var $23=HEAP[$22]; //@line 1343 "_csv.c"
        var $24=((($23) - 1)&4294967295); //@line 1343 "_csv.c"
        var $25=(($21)&4294967295); //@line 1343 "_csv.c"
        HEAP[$25]=$24; //@line 1343 "_csv.c"
        var $26=(($21)&4294967295); //@line 1343 "_csv.c"
        var $27=HEAP[$26]; //@line 1343 "_csv.c"
        var $28=((($27))|0)==0; //@line 1343 "_csv.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1343 "_csv.c"
      case 4: // $bb3
        var $29=HEAP[$self]; //@line 1343 "_csv.c"
        var $30=$29; //@line 1343 "_csv.c"
        var $31=(($30+4)&4294967295); //@line 1343 "_csv.c"
        var $32=HEAP[$31]; //@line 1343 "_csv.c"
        var $33=(($32+24)&4294967295); //@line 1343 "_csv.c"
        var $34=HEAP[$33]; //@line 1343 "_csv.c"
        var $35=HEAP[$self]; //@line 1343 "_csv.c"
        var $36=$35; //@line 1343 "_csv.c"
        FUNCTION_TABLE[$34]($36); //@line 1343 "_csv.c"
        __label__ = 5; break; //@line 1343 "_csv.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1344 "_csv.c"
        __label__ = 16; break; //@line 1344 "_csv.c"
      case 6: // $bb5
        var $37=HEAP[$output_file]; //@line 1346 "_csv.c"
        var $38=_PyObject_GetAttrString($37, ((__str43)&4294967295)); //@line 1346 "_csv.c"
        var $39=HEAP[$self]; //@line 1346 "_csv.c"
        var $40=(($39+8)&4294967295); //@line 1346 "_csv.c"
        HEAP[$40]=$38; //@line 1346 "_csv.c"
        var $41=HEAP[$self]; //@line 1347 "_csv.c"
        var $42=(($41+8)&4294967295); //@line 1347 "_csv.c"
        var $43=HEAP[$42]; //@line 1347 "_csv.c"
        var $44=($43)==0; //@line 1347 "_csv.c"
        if ($44) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1347 "_csv.c"
      case 7: // $bb6
        var $45=HEAP[$self]; //@line 1347 "_csv.c"
        var $46=(($45+8)&4294967295); //@line 1347 "_csv.c"
        var $47=HEAP[$46]; //@line 1347 "_csv.c"
        var $48=_PyCallable_Check($47); //@line 1347 "_csv.c"
        var $49=((($48))|0)==0; //@line 1347 "_csv.c"
        if ($49) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1347 "_csv.c"
      case 8: // $bb7
        var $50=HEAP[_PyExc_TypeError]; //@line 1348 "_csv.c"
        _PyErr_SetString($50, ((__str44)&4294967295)); //@line 1348 "_csv.c"
        var $51=HEAP[$self]; //@line 1350 "_csv.c"
        var $52=$51; //@line 1350 "_csv.c"
        var $53=(($52)&4294967295); //@line 1350 "_csv.c"
        var $54=HEAP[$53]; //@line 1350 "_csv.c"
        var $55=((($54) - 1)&4294967295); //@line 1350 "_csv.c"
        var $56=(($52)&4294967295); //@line 1350 "_csv.c"
        HEAP[$56]=$55; //@line 1350 "_csv.c"
        var $57=(($52)&4294967295); //@line 1350 "_csv.c"
        var $58=HEAP[$57]; //@line 1350 "_csv.c"
        var $59=((($58))|0)==0; //@line 1350 "_csv.c"
        if ($59) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1350 "_csv.c"
      case 9: // $bb8
        var $60=HEAP[$self]; //@line 1350 "_csv.c"
        var $61=$60; //@line 1350 "_csv.c"
        var $62=(($61+4)&4294967295); //@line 1350 "_csv.c"
        var $63=HEAP[$62]; //@line 1350 "_csv.c"
        var $64=(($63+24)&4294967295); //@line 1350 "_csv.c"
        var $65=HEAP[$64]; //@line 1350 "_csv.c"
        var $66=HEAP[$self]; //@line 1350 "_csv.c"
        var $67=$66; //@line 1350 "_csv.c"
        FUNCTION_TABLE[$65]($67); //@line 1350 "_csv.c"
        __label__ = 10; break; //@line 1350 "_csv.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 1351 "_csv.c"
        __label__ = 16; break; //@line 1351 "_csv.c"
      case 11: // $bb10
        var $68=HEAP[$dialect]; //@line 1353 "_csv.c"
        var $69=HEAP[$keyword_args_addr]; //@line 1353 "_csv.c"
        var $70=__call_dialect($68, $69); //@line 1353 "_csv.c"
        var $71=$70; //@line 1353 "_csv.c"
        var $72=HEAP[$self]; //@line 1353 "_csv.c"
        var $73=(($72+12)&4294967295); //@line 1353 "_csv.c"
        HEAP[$73]=$71; //@line 1353 "_csv.c"
        var $74=HEAP[$self]; //@line 1354 "_csv.c"
        var $75=(($74+12)&4294967295); //@line 1354 "_csv.c"
        var $76=HEAP[$75]; //@line 1354 "_csv.c"
        var $77=($76)==0; //@line 1354 "_csv.c"
        if ($77) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 1354 "_csv.c"
      case 12: // $bb11
        var $78=HEAP[$self]; //@line 1355 "_csv.c"
        var $79=$78; //@line 1355 "_csv.c"
        var $80=(($79)&4294967295); //@line 1355 "_csv.c"
        var $81=HEAP[$80]; //@line 1355 "_csv.c"
        var $82=((($81) - 1)&4294967295); //@line 1355 "_csv.c"
        var $83=(($79)&4294967295); //@line 1355 "_csv.c"
        HEAP[$83]=$82; //@line 1355 "_csv.c"
        var $84=(($79)&4294967295); //@line 1355 "_csv.c"
        var $85=HEAP[$84]; //@line 1355 "_csv.c"
        var $86=((($85))|0)==0; //@line 1355 "_csv.c"
        if ($86) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1355 "_csv.c"
      case 13: // $bb12
        var $87=HEAP[$self]; //@line 1355 "_csv.c"
        var $88=$87; //@line 1355 "_csv.c"
        var $89=(($88+4)&4294967295); //@line 1355 "_csv.c"
        var $90=HEAP[$89]; //@line 1355 "_csv.c"
        var $91=(($90+24)&4294967295); //@line 1355 "_csv.c"
        var $92=HEAP[$91]; //@line 1355 "_csv.c"
        var $93=HEAP[$self]; //@line 1355 "_csv.c"
        var $94=$93; //@line 1355 "_csv.c"
        FUNCTION_TABLE[$92]($94); //@line 1355 "_csv.c"
        __label__ = 14; break; //@line 1355 "_csv.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 1356 "_csv.c"
        __label__ = 16; break; //@line 1356 "_csv.c"
      case 15: // $bb14
        var $95=HEAP[$self]; //@line 1358 "_csv.c"
        var $96=$95; //@line 1358 "_csv.c"
        _PyObject_GC_Track($96); //@line 1358 "_csv.c"
        var $97=HEAP[$self]; //@line 1359 "_csv.c"
        var $98=$97; //@line 1359 "_csv.c"
        HEAP[$0]=$98; //@line 1359 "_csv.c"
        __label__ = 16; break; //@line 1359 "_csv.c"
      case 16: // $bb15
        var $99=HEAP[$0]; //@line 1332 "_csv.c"
        HEAP[$retval]=$99; //@line 1332 "_csv.c"
        __label__ = 17; break; //@line 1332 "_csv.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 1332 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1332 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_list_dialects($module, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$module_addr]=$module;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_dialects]; //@line 1368 "_csv.c"
        var $2=_PyDict_Keys($1); //@line 1368 "_csv.c"
        HEAP[$0]=$2; //@line 1368 "_csv.c"
        var $3=HEAP[$0]; //@line 1368 "_csv.c"
        HEAP[$retval]=$3; //@line 1368 "_csv.c"
        __label__ = 1; break; //@line 1368 "_csv.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1368 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1368 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_register_dialect($module, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $name_obj=__stackBase__+20;
        var $dialect_obj=__stackBase__+24;
        var $dialect=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$module_addr]=$module;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$dialect_obj]=0; //@line 1374 "_csv.c"
        var $1=HEAP[$args_addr]; //@line 1377 "_csv.c"
        var $2=_PyArg_UnpackTuple($1, ((__str33)&4294967295), 1, 2, $name_obj, $dialect_obj); //@line 1377 "_csv.c"
        var $3=((($2))|0)==0; //@line 1377 "_csv.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1377 "_csv.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1378 "_csv.c"
        __label__ = 14; break; //@line 1378 "_csv.c"
      case 2: // $bb1
        var $4=HEAP[$name_obj]; //@line 1379 "_csv.c"
        var $5=(($4+4)&4294967295); //@line 1379 "_csv.c"
        var $6=HEAP[$5]; //@line 1379 "_csv.c"
        var $7=($6)!=(_PyBaseString_Type); //@line 1379 "_csv.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1379 "_csv.c"
      case 3: // $bb2
        var $8=HEAP[$name_obj]; //@line 1379 "_csv.c"
        var $9=(($8+4)&4294967295); //@line 1379 "_csv.c"
        var $10=HEAP[$9]; //@line 1379 "_csv.c"
        var $11=_PyType_IsSubtype($10, _PyBaseString_Type); //@line 1379 "_csv.c"
        var $12=((($11))|0)==0; //@line 1379 "_csv.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1379 "_csv.c"
      case 4: // $bb3
        var $13=HEAP[_PyExc_TypeError]; //@line 1380 "_csv.c"
        _PyErr_SetString($13, ((__str45)&4294967295)); //@line 1380 "_csv.c"
        HEAP[$0]=0; //@line 1382 "_csv.c"
        __label__ = 14; break; //@line 1382 "_csv.c"
      case 5: // $bb4
        var $14=HEAP[$dialect_obj]; //@line 1384 "_csv.c"
        var $15=HEAP[$kwargs_addr]; //@line 1384 "_csv.c"
        var $16=__call_dialect($14, $15); //@line 1384 "_csv.c"
        HEAP[$dialect]=$16; //@line 1384 "_csv.c"
        var $17=HEAP[$dialect]; //@line 1385 "_csv.c"
        var $18=($17)==0; //@line 1385 "_csv.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1385 "_csv.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 1386 "_csv.c"
        __label__ = 14; break; //@line 1386 "_csv.c"
      case 7: // $bb6
        var $19=HEAP[$name_obj]; //@line 1387 "_csv.c"
        var $20=HEAP[_dialects]; //@line 1387 "_csv.c"
        var $21=HEAP[$dialect]; //@line 1387 "_csv.c"
        var $22=_PyDict_SetItem($20, $19, $21); //@line 1387 "_csv.c"
        var $23=((($22))|0) < 0; //@line 1387 "_csv.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1387 "_csv.c"
      case 8: // $bb7
        var $24=HEAP[$dialect]; //@line 1388 "_csv.c"
        var $25=(($24)&4294967295); //@line 1388 "_csv.c"
        var $26=HEAP[$25]; //@line 1388 "_csv.c"
        var $27=((($26) - 1)&4294967295); //@line 1388 "_csv.c"
        var $28=HEAP[$dialect]; //@line 1388 "_csv.c"
        var $29=(($28)&4294967295); //@line 1388 "_csv.c"
        HEAP[$29]=$27; //@line 1388 "_csv.c"
        var $30=HEAP[$dialect]; //@line 1388 "_csv.c"
        var $31=(($30)&4294967295); //@line 1388 "_csv.c"
        var $32=HEAP[$31]; //@line 1388 "_csv.c"
        var $33=((($32))|0)==0; //@line 1388 "_csv.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1388 "_csv.c"
      case 9: // $bb8
        var $34=HEAP[$dialect]; //@line 1388 "_csv.c"
        var $35=(($34+4)&4294967295); //@line 1388 "_csv.c"
        var $36=HEAP[$35]; //@line 1388 "_csv.c"
        var $37=(($36+24)&4294967295); //@line 1388 "_csv.c"
        var $38=HEAP[$37]; //@line 1388 "_csv.c"
        var $39=HEAP[$dialect]; //@line 1388 "_csv.c"
        FUNCTION_TABLE[$38]($39); //@line 1388 "_csv.c"
        __label__ = 10; break; //@line 1388 "_csv.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 1389 "_csv.c"
        __label__ = 14; break; //@line 1389 "_csv.c"
      case 11: // $bb10
        var $40=HEAP[$dialect]; //@line 1391 "_csv.c"
        var $41=(($40)&4294967295); //@line 1391 "_csv.c"
        var $42=HEAP[$41]; //@line 1391 "_csv.c"
        var $43=((($42) - 1)&4294967295); //@line 1391 "_csv.c"
        var $44=HEAP[$dialect]; //@line 1391 "_csv.c"
        var $45=(($44)&4294967295); //@line 1391 "_csv.c"
        HEAP[$45]=$43; //@line 1391 "_csv.c"
        var $46=HEAP[$dialect]; //@line 1391 "_csv.c"
        var $47=(($46)&4294967295); //@line 1391 "_csv.c"
        var $48=HEAP[$47]; //@line 1391 "_csv.c"
        var $49=((($48))|0)==0; //@line 1391 "_csv.c"
        if ($49) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1391 "_csv.c"
      case 12: // $bb11
        var $50=HEAP[$dialect]; //@line 1391 "_csv.c"
        var $51=(($50+4)&4294967295); //@line 1391 "_csv.c"
        var $52=HEAP[$51]; //@line 1391 "_csv.c"
        var $53=(($52+24)&4294967295); //@line 1391 "_csv.c"
        var $54=HEAP[$53]; //@line 1391 "_csv.c"
        var $55=HEAP[$dialect]; //@line 1391 "_csv.c"
        FUNCTION_TABLE[$54]($55); //@line 1391 "_csv.c"
        __label__ = 13; break; //@line 1391 "_csv.c"
      case 13: // $bb12
        var $56=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1392 "_csv.c"
        var $57=((($56) + 1)&4294967295); //@line 1392 "_csv.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$57; //@line 1392 "_csv.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1393 "_csv.c"
        __label__ = 14; break; //@line 1393 "_csv.c"
      case 14: // $bb13
        var $58=HEAP[$0]; //@line 1378 "_csv.c"
        HEAP[$retval]=$58; //@line 1378 "_csv.c"
        __label__ = 15; break; //@line 1378 "_csv.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 1378 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 1378 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_unregister_dialect($module, $name_obj) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr=__stackBase__;
        var $name_obj_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$module_addr]=$module;
        HEAP[$name_obj_addr]=$name_obj;
        var $1=HEAP[_dialects]; //@line 1399 "_csv.c"
        var $2=HEAP[$name_obj_addr]; //@line 1399 "_csv.c"
        var $3=_PyDict_DelItem($1, $2); //@line 1399 "_csv.c"
        var $4=((($3))|0) < 0; //@line 1399 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1399 "_csv.c"
      case 1: // $bb
        var $5=HEAP[_error_obj]; //@line 1400 "_csv.c"
        var $6=_PyErr_Format($5, ((__str4)&4294967295)); //@line 1400 "_csv.c"
        HEAP[$0]=$6; //@line 1400 "_csv.c"
        __label__ = 3; break; //@line 1400 "_csv.c"
      case 2: // $bb1
        var $7=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1401 "_csv.c"
        var $8=((($7) + 1)&4294967295); //@line 1401 "_csv.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$8; //@line 1401 "_csv.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1402 "_csv.c"
        __label__ = 3; break; //@line 1402 "_csv.c"
      case 3: // $bb2
        var $9=HEAP[$0]; //@line 1400 "_csv.c"
        HEAP[$retval]=$9; //@line 1400 "_csv.c"
        __label__ = 4; break; //@line 1400 "_csv.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1400 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1400 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_get_dialect($module, $name_obj) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr=__stackBase__;
        var $name_obj_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$module_addr]=$module;
        HEAP[$name_obj_addr]=$name_obj;
        var $1=HEAP[$name_obj_addr]; //@line 1408 "_csv.c"
        var $2=_get_dialect_from_registry($1); //@line 1408 "_csv.c"
        HEAP[$0]=$2; //@line 1408 "_csv.c"
        var $3=HEAP[$0]; //@line 1408 "_csv.c"
        HEAP[$retval]=$3; //@line 1408 "_csv.c"
        __label__ = 1; break; //@line 1408 "_csv.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1408 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1408 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_field_size_limit($module, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $new_limit=__stackBase__+16;
        var $old_limit=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$module_addr]=$module;
        HEAP[$args_addr]=$args;
        HEAP[$new_limit]=0; //@line 1414 "_csv.c"
        var $1=HEAP[_field_limit]; //@line 1415 "_csv.c"
        HEAP[$old_limit]=$1; //@line 1415 "_csv.c"
        var $2=HEAP[$args_addr]; //@line 1417 "_csv.c"
        var $3=_PyArg_UnpackTuple($2, ((__str46)&4294967295), 0, 1, $new_limit); //@line 1417 "_csv.c"
        var $4=((($3))|0)==0; //@line 1417 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1417 "_csv.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1418 "_csv.c"
        __label__ = 7; break; //@line 1418 "_csv.c"
      case 2: // $bb1
        var $5=HEAP[$new_limit]; //@line 1419 "_csv.c"
        var $6=($5)!=0; //@line 1419 "_csv.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1419 "_csv.c"
      case 3: // $bb2
        var $7=HEAP[$new_limit]; //@line 1420 "_csv.c"
        var $8=(($7+4)&4294967295); //@line 1420 "_csv.c"
        var $9=HEAP[$8]; //@line 1420 "_csv.c"
        var $10=(($9+84)&4294967295); //@line 1420 "_csv.c"
        var $11=HEAP[$10]; //@line 1420 "_csv.c"
        var $12=($11) & 8388608; //@line 1420 "_csv.c"
        var $13=((($12))|0)==0; //@line 1420 "_csv.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1420 "_csv.c"
      case 4: // $bb3
        var $14=HEAP[_PyExc_TypeError]; //@line 1421 "_csv.c"
        var $15=_PyErr_Format($14, ((__str47)&4294967295)); //@line 1421 "_csv.c"
        HEAP[$0]=0; //@line 1423 "_csv.c"
        __label__ = 7; break; //@line 1423 "_csv.c"
      case 5: // $bb4
        var $16=HEAP[$new_limit]; //@line 1425 "_csv.c"
        var $17=_PyInt_AsLong($16); //@line 1425 "_csv.c"
        HEAP[_field_limit]=$17; //@line 1425 "_csv.c"
        __label__ = 6; break; //@line 1425 "_csv.c"
      case 6: // $bb5
        var $18=HEAP[$old_limit]; //@line 1427 "_csv.c"
        var $19=_PyInt_FromLong($18); //@line 1427 "_csv.c"
        HEAP[$0]=$19; //@line 1427 "_csv.c"
        __label__ = 7; break; //@line 1427 "_csv.c"
      case 7: // $bb6
        var $20=HEAP[$0]; //@line 1418 "_csv.c"
        HEAP[$retval]=$20; //@line 1418 "_csv.c"
        __label__ = 8; break; //@line 1418 "_csv.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 1418 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1418 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_csv() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module=__stackBase__;
        var $style=__stackBase__+4;
        var $_alloca_point_=0;
        var $0=_PyType_Ready(_Dialect_Type); //@line 1568 "_csv.c"
        var $1=((($0))|0) < 0; //@line 1568 "_csv.c"
        if ($1) { __label__ = 14; break; } else { __label__ = 1; break; } //@line 1568 "_csv.c"
      case 1: // $bb
        var $2=_PyType_Ready(_Reader_Type); //@line 1571 "_csv.c"
        var $3=((($2))|0) < 0; //@line 1571 "_csv.c"
        if ($3) { __label__ = 14; break; } else { __label__ = 2; break; } //@line 1571 "_csv.c"
      case 2: // $bb1
        var $4=_PyType_Ready(_Writer_Type); //@line 1574 "_csv.c"
        var $5=((($4))|0) < 0; //@line 1574 "_csv.c"
        if ($5) { __label__ = 14; break; } else { __label__ = 3; break; } //@line 1574 "_csv.c"
      case 3: // $bb2
        var $6=_Py_InitModule4(((__str54)&4294967295), ((_csv_methods)&4294967295), ((_csv_module_doc)&4294967295), 0, 1013); //@line 1578 "_csv.c"
        HEAP[$module]=$6; //@line 1578 "_csv.c"
        var $7=HEAP[$module]; //@line 1579 "_csv.c"
        var $8=($7)==0; //@line 1579 "_csv.c"
        if ($8) { __label__ = 14; break; } else { __label__ = 4; break; } //@line 1579 "_csv.c"
      case 4: // $bb3
        var $9=HEAP[$module]; //@line 1583 "_csv.c"
        var $10=_PyModule_AddStringConstant($9, ((__str55)&4294967295), ((__str56)&4294967295)); //@line 1583 "_csv.c"
        var $11=((($10))|0)==-1; //@line 1583 "_csv.c"
        if ($11) { __label__ = 14; break; } else { __label__ = 5; break; } //@line 1583 "_csv.c"
      case 5: // $bb4
        var $12=_PyDict_New(); //@line 1588 "_csv.c"
        HEAP[_dialects]=$12; //@line 1588 "_csv.c"
        var $13=HEAP[_dialects]; //@line 1589 "_csv.c"
        var $14=($13)==0; //@line 1589 "_csv.c"
        if ($14) { __label__ = 14; break; } else { __label__ = 6; break; } //@line 1589 "_csv.c"
      case 6: // $bb5
        var $15=HEAP[_dialects]; //@line 1591 "_csv.c"
        var $16=HEAP[$module]; //@line 1591 "_csv.c"
        var $17=_PyModule_AddObject($16, ((__str57)&4294967295), $15); //@line 1591 "_csv.c"
        var $18=((($17))|0)!=0; //@line 1591 "_csv.c"
        if ($18) { __label__ = 14; break; } else { __label__ = 7; break; } //@line 1591 "_csv.c"
      case 7: // $bb6
        HEAP[$style]=((_quote_styles)&4294967295); //@line 1595 "_csv.c"
        __label__ = 10; break; //@line 1595 "_csv.c"
      case 8: // $bb7
        var $19=HEAP[$style]; //@line 1596 "_csv.c"
        var $20=(($19)&4294967295); //@line 1596 "_csv.c"
        var $21=HEAP[$20]; //@line 1596 "_csv.c"
        var $22=HEAP[$style]; //@line 1596 "_csv.c"
        var $23=(($22+4)&4294967295); //@line 1596 "_csv.c"
        var $24=HEAP[$23]; //@line 1596 "_csv.c"
        var $25=HEAP[$module]; //@line 1596 "_csv.c"
        var $26=_PyModule_AddIntConstant($25, $24, $21); //@line 1596 "_csv.c"
        var $27=((($26))|0)==-1; //@line 1596 "_csv.c"
        if ($27) { __label__ = 14; break; } else { __label__ = 9; break; } //@line 1596 "_csv.c"
      case 9: // $bb8
        var $28=HEAP[$style]; //@line 1595 "_csv.c"
        var $29=(($28+8)&4294967295); //@line 1595 "_csv.c"
        HEAP[$style]=$29; //@line 1595 "_csv.c"
        __label__ = 10; break; //@line 1595 "_csv.c"
      case 10: // $bb9
        var $30=HEAP[$style]; //@line 1595 "_csv.c"
        var $31=(($30+4)&4294967295); //@line 1595 "_csv.c"
        var $32=HEAP[$31]; //@line 1595 "_csv.c"
        var $33=($32)!=0; //@line 1595 "_csv.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1595 "_csv.c"
      case 11: // $bb10
        var $34=((_Dialect_Type)&4294967295); //@line 1602 "_csv.c"
        var $35=HEAP[$34]; //@line 1602 "_csv.c"
        var $36=((($35) + 1)&4294967295); //@line 1602 "_csv.c"
        var $37=((_Dialect_Type)&4294967295); //@line 1602 "_csv.c"
        HEAP[$37]=$36; //@line 1602 "_csv.c"
        var $38=HEAP[$module]; //@line 1603 "_csv.c"
        var $39=_PyModule_AddObject($38, ((__str58)&4294967295), _Dialect_Type); //@line 1603 "_csv.c"
        var $40=((($39))|0)!=0; //@line 1603 "_csv.c"
        if ($40) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 1603 "_csv.c"
      case 12: // $bb11
        var $41=_PyErr_NewException(((__str59)&4294967295), 0, 0); //@line 1607 "_csv.c"
        HEAP[_error_obj]=$41; //@line 1607 "_csv.c"
        var $42=HEAP[_error_obj]; //@line 1608 "_csv.c"
        var $43=($42)==0; //@line 1608 "_csv.c"
        if ($43) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 1608 "_csv.c"
      case 13: // $bb12
        var $44=HEAP[_error_obj]; //@line 1610 "_csv.c"
        var $45=HEAP[$module]; //@line 1610 "_csv.c"
        var $46=_PyModule_AddObject($45, ((__str60)&4294967295), $44); //@line 1610 "_csv.c"
        __label__ = 14; break; //@line 1610 "_csv.c"
      case 14: // $bb13
        __label__ = 15; break; //@line 1569 "_csv.c"
      case 15: // $return
        STACKTOP = __stackBase__;
        return; //@line 1569 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_csv"] = _init_csv;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_Dialect_get_escapechar,0,_Dialect_get_lineterminator,0,_Dialect_get_quotechar,0,_Dialect_get_quoting,0,_Dialect_dealloc,0,_dialect_new,0,_Reader_dealloc,0,_Reader_traverse,0,_Reader_clear,0,_PyObject_SelfIter,0,_Reader_iternext,0,_csv_writerow,0,_csv_writerows,0,_Writer_dealloc,0,_Writer_traverse,0,_Writer_clear,0,_csv_reader,0,_csv_writer,0,_csv_list_dialects,0,_csv_register_dialect,0,_csv_unregister_dialect,0,_csv_get_dialect,0,_csv_field_size_limit,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_field_limit=allocate([131072], "i32", ALLOC_NORMAL);
__str=allocate([81,85,79,84,69,95,77,73,78,73,77,65,76,0] /* QUOTE_MINIMAL\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([81,85,79,84,69,95,65,76,76,0] /* QUOTE_ALL\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([81,85,79,84,69,95,78,79,78,78,85,77,69,82,73,67,0] /* QUOTE_NONNUMERIC\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([81,85,79,84,69,95,78,79,78,69,0] /* QUOTE_NONE\00 */, "i8", ALLOC_NORMAL);
_quote_styles=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8"], ALLOC_NORMAL);
_dialects=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_error_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str4=allocate([117,110,107,110,111,119,110,32,100,105,97,108,101,99,116,0] /* unknown dialect\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([34,37,115,34,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,101,114,0] /* \22%s\22 must be an  */, "i8", ALLOC_NORMAL);
__str6=allocate([34,37,115,34,32,109,117,115,116,32,98,101,32,97,110,32,49,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,0] /* \22%s\22 must be an  */, "i8", ALLOC_NORMAL);
__str7=allocate([34,37,115,34,32,109,117,115,116,32,98,101,32,97,110,32,115,116,114,105,110,103,0] /* \22%s\22 must be an  */, "i8", ALLOC_NORMAL);
__str8=allocate([98,97,100,32,34,113,117,111,116,105,110,103,34,32,118,97,108,117,101,0] /* bad \22quoting\22 va */, "i8", ALLOC_NORMAL);
__str9=allocate([100,101,108,105,109,105,116,101,114,0] /* delimiter\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([115,107,105,112,105,110,105,116,105,97,108,115,112,97,99,101,0] /* skipinitialspace\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([100,111,117,98,108,101,113,117,111,116,101,0] /* doublequote\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([115,116,114,105,99,116,0] /* strict\00 */, "i8", ALLOC_NORMAL);
_Dialect_memberlist=allocate([0, 0, 0, 0, 7, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str13=allocate([101,115,99,97,112,101,99,104,97,114,0] /* escapechar\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([108,105,110,101,116,101,114,109,105,110,97,116,111,114,0] /* lineterminator\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([113,117,111,116,101,99,104,97,114,0] /* quotechar\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([113,117,111,116,105,110,103,0] /* quoting\00 */, "i8", ALLOC_NORMAL);
_Dialect_getsetlist=allocate(100, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_dialect_kws=allocate(40, "i8*", ALLOC_NORMAL);
__str17=allocate([100,105,97,108,101,99,116,0] /* dialect\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([124,79,79,79,79,79,79,79,79,79,0] /* |OOOOOOOOO\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([13,10,0] /* \0D\0A\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([100,101,108,105,109,105,116,101,114,32,109,117,115,116,32,98,101,32,115,101,116,0] /* delimiter must be se */, "i8", ALLOC_NORMAL);
__str21=allocate([113,117,111,116,101,99,104,97,114,32,109,117,115,116,32,98,101,32,115,101,116,32,105,102,32,113,117,111,116,105,110,103,32,101,110,97,98,108,101,100,0] /* quotechar must be se */, "i8", ALLOC_NORMAL);
__str22=allocate([108,105,110,101,116,101,114,109,105,110,97,116,111,114,32,109,117,115,116,32,98,101,32,115,101,116,0] /* lineterminator must  */, "i8", ALLOC_NORMAL);
_Dialect_Type_doc=allocate([67,83,86,32,100,105,97,108,101,99,116,10,10,84,104,101,32,68,105,97,108,101,99,116,32,116,121,112,101,32,114,101,99,111,114,100,115,32,67,83,86,32,112,97,114,115,105,110,103,32,97,110,100,32,103,101,110,101,114,97,116,105,111,110,32,111,112,116,105,111,110,115,46,10,0] /* CSV dialect\0A\0AThe */, "i8", ALLOC_NORMAL);
__str23=allocate([95,99,115,118,46,68,105,97,108,101,99,116,0] /* _csv.Dialect\00 */, "i8", ALLOC_NORMAL);
_Dialect_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str24=allocate([40,79,41,0] /* (O)\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([40,41,0] /* ()\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([102,105,101,108,100,32,108,97,114,103,101,114,32,116,104,97,110,32,102,105,101,108,100,32,108,105,109,105,116,32,40,37,108,100,41,0] /* field larger than fi */, "i8", ALLOC_NORMAL);
__str27=allocate([39,37,99,39,32,101,120,112,101,99,116,101,100,32,97,102,116,101,114,32,39,37,99,39,0] /* '%c' expected after  */, "i8", ALLOC_NORMAL);
__str28=allocate([110,101,119,45,108,105,110,101,32,99,104,97,114,97,99,116,101,114,32,115,101,101,110,32,105,110,32,117,110,113,117,111,116,101,100,32,102,105,101,108,100,32,45,32,100,111,32,121,111,117,32,110,101,101,100,32,116,111,32,111,112,101,110,32,116,104,101,32,102,105,108,101,32,105,110,32,117,110,105,118,101,114,115,97,108,45,110,101,119,108,105,110,101,32,109,111,100,101,63,0] /* new-line character s */, "i8", ALLOC_NORMAL);
__str29=allocate([110,101,119,108,105,110,101,32,105,110,115,105,100,101,32,115,116,114,105,110,103,0] /* newline inside strin */, "i8", ALLOC_NORMAL);
__str30=allocate([108,105,110,101,32,99,111,110,116,97,105,110,115,32,78,85,76,76,32,98,121,116,101,0] /* line contains NULL b */, "i8", ALLOC_NORMAL);
_Reader_Type_doc=allocate([67,83,86,32,114,101,97,100,101,114,10,10,82,101,97,100,101,114,32,111,98,106,101,99,116,115,32,97,114,101,32,114,101,115,112,111,110,115,105,98,108,101,32,102,111,114,32,114,101,97,100,105,110,103,32,97,110,100,32,112,97,114,115,105,110,103,32,116,97,98,117,108,97,114,32,100,97,116,97,10,105,110,32,67,83,86,32,102,111,114,109,97,116,46,10,0] /* CSV reader\0A\0ARead */, "i8", ALLOC_NORMAL);
_Reader_methods=allocate(16, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str31=allocate([108,105,110,101,95,110,117,109,0] /* line_num\00 */, "i8", ALLOC_NORMAL);
_Reader_memberlist=allocate([0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 40, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str32=allocate([95,99,115,118,46,114,101,97,100,101,114,0] /* _csv.reader\00 */, "i8", ALLOC_NORMAL);
_Reader_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str33=allocate(1, "i8", ALLOC_NORMAL);
__str34=allocate([97,114,103,117,109,101,110,116,32,49,32,109,117,115,116,32,98,101,32,97,110,32,105,116,101,114,97,116,111,114,0] /* argument 1 must be a */, "i8", ALLOC_NORMAL);
__str35=allocate([110,101,101,100,32,116,111,32,101,115,99,97,112,101,44,32,98,117,116,32,110,111,32,101,115,99,97,112,101,99,104,97,114,32,115,101,116,0] /* need to escape, but  */, "i8", ALLOC_NORMAL);
__str36=allocate([115,105,110,103,108,101,32,101,109,112,116,121,32,102,105,101,108,100,32,114,101,99,111,114,100,32,109,117,115,116,32,98,101,32,113,117,111,116,101,100,0] /* single empty field r */, "i8", ALLOC_NORMAL);
_csv_writerow_doc=allocate([119,114,105,116,101,114,111,119,40,115,101,113,117,101,110,99,101,41,10,10,67,111,110,115,116,114,117,99,116,32,97,110,100,32,119,114,105,116,101,32,97,32,67,83,86,32,114,101,99,111,114,100,32,102,114,111,109,32,97,32,115,101,113,117,101,110,99,101,32,111,102,32,102,105,101,108,100,115,46,32,32,78,111,110,45,115,116,114,105,110,103,10,101,108,101,109,101,110,116,115,32,119,105,108,108,32,98,101,32,99,111,110,118,101,114,116,101,100,32,116,111,32,115,116,114,105,110,103,46,0] /* writerow(sequence)\0 */, "i8", ALLOC_NORMAL);
__str37=allocate([115,101,113,117,101,110,99,101,32,101,120,112,101,99,116,101,100,0] /* sequence expected\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([40,115,35,41,0] /* (s#)\00 */, "i8", ALLOC_NORMAL);
_csv_writerows_doc=allocate([119,114,105,116,101,114,111,119,115,40,115,101,113,117,101,110,99,101,32,111,102,32,115,101,113,117,101,110,99,101,115,41,10,10,67,111,110,115,116,114,117,99,116,32,97,110,100,32,119,114,105,116,101,32,97,32,115,101,114,105,101,115,32,111,102,32,115,101,113,117,101,110,99,101,115,32,116,111,32,97,32,99,115,118,32,102,105,108,101,46,32,32,78,111,110,45,115,116,114,105,110,103,10,101,108,101,109,101,110,116,115,32,119,105,108,108,32,98,101,32,99,111,110,118,101,114,116,101,100,32,116,111,32,115,116,114,105,110,103,46,0] /* writerows(sequence o */, "i8", ALLOC_NORMAL);
__str39=allocate([119,114,105,116,101,114,111,119,115,40,41,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,105,116,101,114,97,98,108,101,0] /* writerows() argument */, "i8", ALLOC_NORMAL);
__str40=allocate([119,114,105,116,101,114,111,119,0] /* writerow\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([119,114,105,116,101,114,111,119,115,0] /* writerows\00 */, "i8", ALLOC_NORMAL);
_Writer_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_Writer_memberlist=allocate([0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_Writer_Type_doc=allocate([67,83,86,32,119,114,105,116,101,114,10,10,87,114,105,116,101,114,32,111,98,106,101,99,116,115,32,97,114,101,32,114,101,115,112,111,110,115,105,98,108,101,32,102,111,114,32,103,101,110,101,114,97,116,105,110,103,32,116,97,98,117,108,97,114,32,100,97,116,97,10,105,110,32,67,83,86,32,102,111,114,109,97,116,32,102,114,111,109,32,115,101,113,117,101,110,99,101,32,105,110,112,117,116,46,10,0] /* CSV writer\0A\0AWrit */, "i8", ALLOC_NORMAL);
__str42=allocate([95,99,115,118,46,119,114,105,116,101,114,0] /* _csv.writer\00 */, "i8", ALLOC_NORMAL);
_Writer_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str43=allocate([119,114,105,116,101,0] /* write\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([97,114,103,117,109,101,110,116,32,49,32,109,117,115,116,32,104,97,118,101,32,97,32,34,119,114,105,116,101,34,32,109,101,116,104,111,100,0] /* argument 1 must have */, "i8", ALLOC_NORMAL);
__str45=allocate([100,105,97,108,101,99,116,32,110,97,109,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,32,111,114,32,117,110,105,99,111,100,101,0] /* dialect name must be */, "i8", ALLOC_NORMAL);
__str46=allocate([102,105,101,108,100,95,115,105,122,101,95,108,105,109,105,116,0] /* field_size_limit\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([108,105,109,105,116,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,101,114,0] /* limit must be an int */, "i8", ALLOC_NORMAL);
_csv_module_doc=allocate([67,83,86,32,112,97,114,115,105,110,103,32,97,110,100,32,119,114,105,116,105,110,103,46,10,10,84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,99,108,97,115,115,101,115,32,116,104,97,116,32,97,115,115,105,115,116,32,105,110,32,116,104,101,32,114,101,97,100,105,110,103,32,97,110,100,32,119,114,105,116,105,110,103,10,111,102,32,67,111,109,109,97,32,83,101,112,97,114,97,116,101,100,32,86,97,108,117,101,32,40,67,83,86,41,32,102,105,108,101,115,44,32,97,110,100,32,105,109,112,108,101,109,101,110,116,115,32,116,104,101,32,105,110,116,101,114,102,97,99,101,10,100,101,115,99,114,105,98,101,100,32,98,121,32,80,69,80,32,51,48,53,46,32,32,65,108,116,104,111,117,103,104,32,109,97,110,121,32,67,83,86,32,102,105,108,101,115,32,97,114,101,32,115,105,109,112,108,101,32,116,111,32,112,97,114,115,101,44,10,116,104,101,32,102,111,114,109,97,116,32,105,115,32,110,111,116,32,102,111,114,109,97,108,108,121,32,100,101,102,105,110,101,100,32,98,121,32,97,32,115,116,97,98,108,101,32,115,112,101,99,105,102,105,99,97,116,105,111,110,32,97,110,100,10,105,115,32,115,117,98,116,108,101,32,101,110,111,117,103,104,32,116,104,97,116,32,112,97,114,115,105,110,103,32,108,105,110,101,115,32,111,102,32,97,32,67,83,86,32,102,105,108,101,32,119,105,116,104,32,115,111,109,101,116,104,105,110,103,10,108,105,107,101,32,108,105,110,101,46,115,112,108,105,116,40,34,44,34,41,32,105,115,32,98,111,117,110,100,32,116,111,32,102,97,105,108,46,32,32,84,104,101,32,109,111,100,117,108,101,32,115,117,112,112,111,114,116,115,32,116,104,114,101,101,10,98,97,115,105,99,32,65,80,73,115,58,32,114,101,97,100,105,110,103,44,32,119,114,105,116,105,110,103,44,32,97,110,100,32,114,101,103,105,115,116,114,97,116,105,111,110,32,111,102,32,100,105,97,108,101,99,116,115,46,10,10,10,68,73,65,76,69,67,84,32,82,69,71,73,83,84,82,65,84,73,79,78,58,10,10,82,101,97,100,101,114,115,32,97,110,100,32,119,114,105,116,101,114,115,32,115,117,112,112,111,114,116,32,97,32,100,105,97,108,101,99,116,32,97,114,103,117,109,101,110,116,44,32,119,104,105,99,104,32,105,115,32,97,32,99,111,110,118,101,110,105,101,110,116,10,104,97,110,100,108,101,32,111,110,32,97,32,103,114,111,117,112,32,111,102,32,115,101,116,116,105,110,103,115,46,32,32,87,104,101,110,32,116,104,101,32,100,105,97,108,101,99,116,32,97,114,103,117,109,101,110,116,32,105,115,32,97,32,115,116,114,105,110,103,44,10,105,116,32,105,100,101,110,116,105,102,105,101,115,32,111,110,101,32,111,102,32,116,104,101,32,100,105,97,108,101,99,116,115,32,112,114,101,118,105,111,117,115,108,121,32,114,101,103,105,115,116,101,114,101,100,32,119,105,116,104,32,116,104,101,32,109,111,100,117,108,101,46,10,73,102,32,105,116,32,105,115,32,97,32,99,108,97,115,115,32,111,114,32,105,110,115,116,97,110,99,101,44,32,116,104,101,32,97,116,116,114,105,98,117,116,101,115,32,111,102,32,116,104,101,32,97,114,103,117,109,101,110,116,32,97,114,101,32,117,115,101,100,32,97,115,10,116,104,101,32,115,101,116,116,105,110,103,115,32,102,111,114,32,116,104,101,32,114,101,97,100,101,114,32,111,114,32,119,114,105,116,101,114,58,10,10,32,32,32,32,99,108,97,115,115,32,101,120,99,101,108,58,10,32,32,32,32,32,32,32,32,100,101,108,105,109,105,116,101,114,32,61,32,39,44,39,10,32,32,32,32,32,32,32,32,113,117,111,116,101,99,104,97,114,32,61,32,39,34,39,10,32,32,32,32,32,32,32,32,101,115,99,97,112,101,99,104,97,114,32,61,32,78,111,110,101,10,32,32,32,32,32,32,32,32,100,111,117,98,108,101,113,117,111,116,101,32,61,32,84,114,117,101,10,32,32,32,32,32,32,32,32,115,107,105,112,105,110,105,116,105,97,108,115,112,97,99,101,32,61,32,70,97,108,115,101,10,32,32,32,32,32,32,32,32,108,105,110,101,116,101,114,109,105,110,97,116,111,114,32,61,32,39,92,114,92,110,39,10,32,32,32,32,32,32,32,32,113,117,111,116,105,110,103,32,61,32,81,85,79,84,69,95,77,73,78,73,77,65,76,10,10,83,69,84,84,73,78,71,83,58,10,10,32,32,32,32,42,32,113,117,111,116,101,99,104,97,114,32,45,32,115,112,101,99,105,102,105,101,115,32,97,32,111,110,101,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,32,116,111,32,117,115,101,32,97,115,32,116,104,101,32,10,32,32,32,32,32,32,32,32,113,117,111,116,105,110,103,32,99,104,97,114,97,99,116,101,114,46,32,32,73,116,32,100,101,102,97,117,108,116,115,32,116,111,32,39,34,39,46,10,32,32,32,32,42,32,100,101,108,105,109,105,116,101,114,32,45,32,115,112,101,99,105,102,105,101,115,32,97,32,111,110,101,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,32,116,111,32,117,115,101,32,97,115,32,116,104,101,32,10,32,32,32,32,32,32,32,32,102,105,101,108,100,32,115,101,112,97,114,97,116,111,114,46,32,32,73,116,32,100,101,102,97,117,108,116,115,32,116,111,32,39,44,39,46,10,32,32,32,32,42,32,115,107,105,112,105,110,105,116,105,97,108,115,112,97,99,101,32,45,32,115,112,101,99,105,102,105,101,115,32,104,111,119,32,116,111,32,105,110,116,101,114,112,114,101,116,32,119,104,105,116,101,115,112,97,99,101,32,119,104,105,99,104,10,32,32,32,32,32,32,32,32,105,109,109,101,100,105,97,116,101,108,121,32,102,111,108,108,111,119,115,32,97,32,100,101,108,105,109,105,116,101,114,46,32,32,73,116,32,100,101,102,97,117,108,116,115,32,116,111,32,70,97,108,115,101,44,32,119,104,105,99,104,10,32,32,32,32,32,32,32,32,109,101,97,110,115,32,116,104,97,116,32,119,104,105,116,101,115,112,97,99,101,32,105,109,109,101,100,105,97,116,101,108,121,32,102,111,108,108,111,119,105,110,103,32,97,32,100,101,108,105,109,105,116,101,114,32,105,115,32,112,97,114,116,10,32,32,32,32,32,32,32,32,111,102,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,102,105,101,108,100,46,10,32,32,32,32,42,32,108,105,110,101,116,101,114,109,105,110,97,116,111,114,32,45,32,32,115,112,101,99,105,102,105,101,115,32,116,104,101,32,99,104,97,114,97,99,116,101,114,32,115,101,113,117,101,110,99,101,32,119,104,105,99,104,32,115,104,111,117,108,100,32,10,32,32,32,32,32,32,32,32,116,101,114,109,105,110,97,116,101,32,114,111,119,115,46,10,32,32,32,32,42,32,113,117,111,116,105,110,103,32,45,32,99,111,110,116,114,111,108,115,32,119,104,101,110,32,113,117,111,116,101,115,32,115,104,111,117,108,100,32,98,101,32,103,101,110,101,114,97,116,101,100,32,98,121,32,116,104,101,32,119,114,105,116,101,114,46,10,32,32,32,32,32,32,32,32,73,116,32,99,97,110,32,116,97,107,101,32,111,110,32,97,110,121,32,111,102,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,109,111,100,117,108,101,32,99,111,110,115,116,97,110,116,115,58,10,10,32,32,32,32,32,32,32,32,99,115,118,46,81,85,79,84,69,95,77,73,78,73,77,65,76,32,109,101,97,110,115,32,111,110,108,121,32,119,104,101,110,32,114,101,113,117,105,114,101,100,44,32,102,111,114,32,101,120,97,109,112,108,101,44,32,119,104,101,110,32,97,10,32,32,32,32,32,32,32,32,32,32,32,32,102,105,101,108,100,32,99,111,110,116,97,105,110,115,32,101,105,116,104,101,114,32,116,104,101,32,113,117,111,116,101,99,104,97,114,32,111,114,32,116,104,101,32,100,101,108,105,109,105,116,101,114,10,32,32,32,32,32,32,32,32,99,115,118,46,81,85,79,84,69,95,65,76,76,32,109,101,97,110,115,32,116,104,97,116,32,113,117,111,116,101,115,32,97,114,101,32,97,108,119,97,121,115,32,112,108,97,99,101,100,32,97,114,111,117,110,100,32,102,105,101,108,100,115,46,10,32,32,32,32,32,32,32,32,99,115,118,46,81,85,79,84,69,95,78,79,78,78,85,77,69,82,73,67,32,109,101,97,110,115,32,116,104,97,116,32,113,117,111,116,101,115,32,97,114,101,32,97,108,119,97,121,115,32,112,108,97,99,101,100,32,97,114,111,117,110,100,10,32,32,32,32,32,32,32,32,32,32,32,32,102,105,101,108,100,115,32,119,104,105,99,104,32,100,111,32,110,111,116,32,112,97,114,115,101,32,97,115,32,105,110,116,101,103,101,114,115,32,111,114,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,10,32,32,32,32,32,32,32,32,32,32,32,32,110,117,109,98,101,114,115,46,10,32,32,32,32,32,32,32,32,99,115,118,46,81,85,79,84,69,95,78,79,78,69,32,109,101,97,110,115,32,116,104,97,116,32,113,117,111,116,101,115,32,97,114,101,32,110,101,118,101,114,32,112,108,97,99,101,100,32,97,114,111,117,110,100,32,102,105,101,108,100,115,46,10,32,32,32,32,42,32,101,115,99,97,112,101,99,104,97,114,32,45,32,115,112,101,99,105,102,105,101,115,32,97,32,111,110,101,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,32,117,115,101,100,32,116,111,32,101,115,99,97,112,101,32,10,32,32,32,32,32,32,32,32,116,104,101,32,100,101,108,105,109,105,116,101,114,32,119,104,101,110,32,113,117,111,116,105,110,103,32,105,115,32,115,101,116,32,116,111,32,81,85,79,84,69,95,78,79,78,69,46,10,32,32,32,32,42,32,100,111,117,98,108,101,113,117,111,116,101,32,45,32,99,111,110,116,114,111,108,115,32,116,104,101,32,104,97,110,100,108,105,110,103,32,111,102,32,113,117,111,116,101,115,32,105,110,115,105,100,101,32,102,105,101,108,100,115,46,32,32,87,104,101,110,10,32,32,32,32,32,32,32,32,84,114,117,101,44,32,116,119,111,32,99,111,110,115,101,99,117,116,105,118,101,32,113,117,111,116,101,115,32,97,114,101,32,105,110,116,101,114,112,114,101,116,101,100,32,97,115,32,111,110,101,32,100,117,114,105,110,103,32,114,101,97,100,44,10,32,32,32,32,32,32,32,32,97,110,100,32,119,104,101,110,32,119,114,105,116,105,110,103,44,32,101,97,99,104,32,113,117,111,116,101,32,99,104,97,114,97,99,116,101,114,32,101,109,98,101,100,100,101,100,32,105,110,32,116,104,101,32,100,97,116,97,32,105,115,10,32,32,32,32,32,32,32,32,119,114,105,116,116,101,110,32,97,115,32,116,119,111,32,113,117,111,116,101,115,10,0] /* CSV parsing and writ */, "i8", ALLOC_NORMAL);
_csv_reader_doc=allocate([32,32,32,32,99,115,118,95,114,101,97,100,101,114,32,61,32,114,101,97,100,101,114,40,105,116,101,114,97,98,108,101,32,91,44,32,100,105,97,108,101,99,116,61,39,101,120,99,101,108,39,93,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,91,111,112,116,105,111,110,97,108,32,107,101,121,119,111,114,100,32,97,114,103,115,93,41,10,32,32,32,32,102,111,114,32,114,111,119,32,105,110,32,99,115,118,95,114,101,97,100,101,114,58,10,32,32,32,32,32,32,32,32,112,114,111,99,101,115,115,40,114,111,119,41,10,10,84,104,101,32,34,105,116,101,114,97,98,108,101,34,32,97,114,103,117,109,101,110,116,32,99,97,110,32,98,101,32,97,110,121,32,111,98,106,101,99,116,32,116,104,97,116,32,114,101,116,117,114,110,115,32,97,32,108,105,110,101,10,111,102,32,105,110,112,117,116,32,102,111,114,32,101,97,99,104,32,105,116,101,114,97,116,105,111,110,44,32,115,117,99,104,32,97,115,32,97,32,102,105,108,101,32,111,98,106,101,99,116,32,111,114,32,97,32,108,105,115,116,46,32,32,84,104,101,10,111,112,116,105,111,110,97,108,32,34,100,105,97,108,101,99,116,34,32,112,97,114,97,109,101,116,101,114,32,105,115,32,100,105,115,99,117,115,115,101,100,32,98,101,108,111,119,46,32,32,84,104,101,32,102,117,110,99,116,105,111,110,10,97,108,115,111,32,97,99,99,101,112,116,115,32,111,112,116,105,111,110,97,108,32,107,101,121,119,111,114,100,32,97,114,103,117,109,101,110,116,115,32,119,104,105,99,104,32,111,118,101,114,114,105,100,101,32,115,101,116,116,105,110,103,115,10,112,114,111,118,105,100,101,100,32,98,121,32,116,104,101,32,100,105,97,108,101,99,116,46,10,10,84,104,101,32,114,101,116,117,114,110,101,100,32,111,98,106,101,99,116,32,105,115,32,97,110,32,105,116,101,114,97,116,111,114,46,32,32,69,97,99,104,32,105,116,101,114,97,116,105,111,110,32,114,101,116,117,114,110,115,32,97,32,114,111,119,10,111,102,32,116,104,101,32,67,83,86,32,102,105,108,101,32,40,119,104,105,99,104,32,99,97,110,32,115,112,97,110,32,109,117,108,116,105,112,108,101,32,105,110,112,117,116,32,108,105,110,101,115,41,58,10,0] /*     csv_reader = rea */, "i8", ALLOC_NORMAL);
_csv_writer_doc=allocate([32,32,32,32,99,115,118,95,119,114,105,116,101,114,32,61,32,99,115,118,46,119,114,105,116,101,114,40,102,105,108,101,111,98,106,32,91,44,32,100,105,97,108,101,99,116,61,39,101,120,99,101,108,39,93,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,91,111,112,116,105,111,110,97,108,32,107,101,121,119,111,114,100,32,97,114,103,115,93,41,10,32,32,32,32,102,111,114,32,114,111,119,32,105,110,32,115,101,113,117,101,110,99,101,58,10,32,32,32,32,32,32,32,32,99,115,118,95,119,114,105,116,101,114,46,119,114,105,116,101,114,111,119,40,114,111,119,41,10,10,32,32,32,32,91,111,114,93,10,10,32,32,32,32,99,115,118,95,119,114,105,116,101,114,32,61,32,99,115,118,46,119,114,105,116,101,114,40,102,105,108,101,111,98,106,32,91,44,32,100,105,97,108,101,99,116,61,39,101,120,99,101,108,39,93,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,91,111,112,116,105,111,110,97,108,32,107,101,121,119,111,114,100,32,97,114,103,115,93,41,10,32,32,32,32,99,115,118,95,119,114,105,116,101,114,46,119,114,105,116,101,114,111,119,115,40,114,111,119,115,41,10,10,84,104,101,32,34,102,105,108,101,111,98,106,34,32,97,114,103,117,109,101,110,116,32,99,97,110,32,98,101,32,97,110,121,32,111,98,106,101,99,116,32,116,104,97,116,32,115,117,112,112,111,114,116,115,32,116,104,101,32,102,105,108,101,32,65,80,73,46,10,0] /*     csv_writer = csv */, "i8", ALLOC_NORMAL);
_csv_list_dialects_doc=allocate([82,101,116,117,114,110,32,97,32,108,105,115,116,32,111,102,32,97,108,108,32,107,110,111,119,32,100,105,97,108,101,99,116,32,110,97,109,101,115,46,10,32,32,32,32,110,97,109,101,115,32,61,32,99,115,118,46,108,105,115,116,95,100,105,97,108,101,99,116,115,40,41,0] /* Return a list of all */, "i8", ALLOC_NORMAL);
_csv_get_dialect_doc=allocate([82,101,116,117,114,110,32,116,104,101,32,100,105,97,108,101,99,116,32,105,110,115,116,97,110,99,101,32,97,115,115,111,99,105,97,116,101,100,32,119,105,116,104,32,110,97,109,101,46,10,32,32,32,32,100,105,97,108,101,99,116,32,61,32,99,115,118,46,103,101,116,95,100,105,97,108,101,99,116,40,110,97,109,101,41,0] /* Return the dialect i */, "i8", ALLOC_NORMAL);
_csv_register_dialect_doc=allocate([67,114,101,97,116,101,32,97,32,109,97,112,112,105,110,103,32,102,114,111,109,32,97,32,115,116,114,105,110,103,32,110,97,109,101,32,116,111,32,97,32,100,105,97,108,101,99,116,32,99,108,97,115,115,46,10,32,32,32,32,100,105,97,108,101,99,116,32,61,32,99,115,118,46,114,101,103,105,115,116,101,114,95,100,105,97,108,101,99,116,40,110,97,109,101,44,32,100,105,97,108,101,99,116,41,0] /* Create a mapping fro */, "i8", ALLOC_NORMAL);
_csv_unregister_dialect_doc=allocate([68,101,108,101,116,101,32,116,104,101,32,110,97,109,101,47,100,105,97,108,101,99,116,32,109,97,112,112,105,110,103,32,97,115,115,111,99,105,97,116,101,100,32,119,105,116,104,32,97,32,115,116,114,105,110,103,32,110,97,109,101,46,10,32,32,32,32,99,115,118,46,117,110,114,101,103,105,115,116,101,114,95,100,105,97,108,101,99,116,40,110,97,109,101,41,0] /* Delete the name/dial */, "i8", ALLOC_NORMAL);
_csv_field_size_limit_doc=allocate([83,101,116,115,32,97,110,32,117,112,112,101,114,32,108,105,109,105,116,32,111,110,32,112,97,114,115,101,100,32,102,105,101,108,100,115,46,10,32,32,32,32,99,115,118,46,102,105,101,108,100,95,115,105,122,101,95,108,105,109,105,116,40,91,108,105,109,105,116,93,41,10,10,82,101,116,117,114,110,115,32,111,108,100,32,108,105,109,105,116,46,32,73,102,32,108,105,109,105,116,32,105,115,32,110,111,116,32,103,105,118,101,110,44,32,110,111,32,110,101,119,32,108,105,109,105,116,32,105,115,32,115,101,116,32,97,110,100,10,116,104,101,32,111,108,100,32,108,105,109,105,116,32,105,115,32,114,101,116,117,114,110,101,100,0] /* Sets an upper limit  */, "i8", ALLOC_NORMAL);
__str48=allocate([114,101,97,100,101,114,0] /* reader\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([119,114,105,116,101,114,0] /* writer\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([108,105,115,116,95,100,105,97,108,101,99,116,115,0] /* list_dialects\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([114,101,103,105,115,116,101,114,95,100,105,97,108,101,99,116,0] /* register_dialect\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([117,110,114,101,103,105,115,116,101,114,95,100,105,97,108,101,99,116,0] /* unregister_dialect\0 */, "i8", ALLOC_NORMAL);
__str53=allocate([103,101,116,95,100,105,97,108,101,99,116,0] /* get_dialect\00 */, "i8", ALLOC_NORMAL);
_csv_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str54=allocate([95,99,115,118,0] /* _csv\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([95,95,118,101,114,115,105,111,110,95,95,0] /* __version__\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([49,46,48,0] /* 1.0\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([95,100,105,97,108,101,99,116,115,0] /* _dialects\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([68,105,97,108,101,99,116,0] /* Dialect\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([95,99,115,118,46,69,114,114,111,114,0] /* _csv.Error\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([69,114,114,111,114,0] /* Error\00 */, "i8", ALLOC_NORMAL);
HEAP[_quote_styles+4]=((__str)&4294967295);
HEAP[_quote_styles+12]=((__str1)&4294967295);
HEAP[_quote_styles+20]=((__str2)&4294967295);
HEAP[_quote_styles+28]=((__str3)&4294967295);
HEAP[_Dialect_memberlist]=((__str9)&4294967295);
HEAP[_Dialect_memberlist+20]=((__str10)&4294967295);
HEAP[_Dialect_memberlist+40]=((__str11)&4294967295);
HEAP[_Dialect_memberlist+60]=((__str12)&4294967295);
HEAP[_Dialect_getsetlist]=((__str13)&4294967295);
HEAP[_Dialect_getsetlist+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_Dialect_getsetlist+20]=((__str14)&4294967295);
HEAP[_Dialect_getsetlist+24]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_Dialect_getsetlist+40]=((__str15)&4294967295);
HEAP[_Dialect_getsetlist+44]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_Dialect_getsetlist+60]=((__str16)&4294967295);
HEAP[_Dialect_getsetlist+64]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_dialect_kws]=((__str17)&4294967295);
HEAP[_dialect_kws+4]=((__str9)&4294967295);
HEAP[_dialect_kws+8]=((__str11)&4294967295);
HEAP[_dialect_kws+12]=((__str13)&4294967295);
HEAP[_dialect_kws+16]=((__str14)&4294967295);
HEAP[_dialect_kws+20]=((__str15)&4294967295);
HEAP[_dialect_kws+24]=((__str16)&4294967295);
HEAP[_dialect_kws+28]=((__str10)&4294967295);
HEAP[_dialect_kws+32]=((__str12)&4294967295);
HEAP[_Dialect_Type+12]=((__str23)&4294967295);
HEAP[_Dialect_Type+24]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_Dialect_Type+88]=((_Dialect_Type_doc)&4294967295);
HEAP[_Dialect_Type+120]=_Dialect_memberlist;
HEAP[_Dialect_Type+124]=_Dialect_getsetlist;
HEAP[_Dialect_Type+156]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_Reader_memberlist]=((__str17)&4294967295);
HEAP[_Reader_memberlist+20]=((__str31)&4294967295);
HEAP[_Reader_Type+12]=((__str32)&4294967295);
HEAP[_Reader_Type+24]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_Reader_Type+88]=((_Reader_Type_doc)&4294967295);
HEAP[_Reader_Type+92]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_Reader_Type+96]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_Reader_Type+108]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_Reader_Type+112]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_Reader_Type+116]=_Reader_methods;
HEAP[_Reader_Type+120]=_Reader_memberlist;
HEAP[_Writer_methods]=((__str40)&4294967295);
HEAP[_Writer_methods+4]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_Writer_methods+12]=((_csv_writerow_doc)&4294967295);
HEAP[_Writer_methods+16]=((__str41)&4294967295);
HEAP[_Writer_methods+20]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_Writer_methods+28]=((_csv_writerows_doc)&4294967295);
HEAP[_Writer_memberlist]=((__str17)&4294967295);
HEAP[_Writer_Type+12]=((__str42)&4294967295);
HEAP[_Writer_Type+24]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_Writer_Type+88]=((_Writer_Type_doc)&4294967295);
HEAP[_Writer_Type+92]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_Writer_Type+96]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_Writer_Type+116]=((_Writer_methods)&4294967295);
HEAP[_Writer_Type+120]=_Writer_memberlist;
HEAP[_csv_methods]=((__str48)&4294967295);
HEAP[_csv_methods+4]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_csv_methods+12]=((_csv_reader_doc)&4294967295);
HEAP[_csv_methods+16]=((__str49)&4294967295);
HEAP[_csv_methods+20]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_csv_methods+28]=((_csv_writer_doc)&4294967295);
HEAP[_csv_methods+32]=((__str50)&4294967295);
HEAP[_csv_methods+36]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_csv_methods+44]=((_csv_list_dialects_doc)&4294967295);
HEAP[_csv_methods+48]=((__str51)&4294967295);
HEAP[_csv_methods+52]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_csv_methods+60]=((_csv_register_dialect_doc)&4294967295);
HEAP[_csv_methods+64]=((__str52)&4294967295);
HEAP[_csv_methods+68]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_csv_methods+76]=((_csv_unregister_dialect_doc)&4294967295);
HEAP[_csv_methods+80]=((__str53)&4294967295);
HEAP[_csv_methods+84]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_csv_methods+92]=((_csv_get_dialect_doc)&4294967295);
HEAP[_csv_methods+96]=((__str46)&4294967295);
HEAP[_csv_methods+100]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_csv_methods+108]=((_csv_field_size_limit_doc)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

