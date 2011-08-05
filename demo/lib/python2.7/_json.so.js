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



var $0___SIZE = 160; // %0
  
var $1___SIZE = 20; // %1
  
var $2___SIZE = 180; // %2
  
var $3___SIZE = 196; // %3
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyEncoderObject___SIZE = 48; // %struct.PyEncoderObject
  
var $struct_PyFloatObject___SIZE = 16; // %struct.PyFloatObject
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyInterpreterState___SIZE = 40; // %struct.PyInterpreterState
  
var $struct_PyListObject___SIZE = 20; // %struct.PyListObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PyScannerObject___SIZE = 36; // %struct.PyScannerObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyThreadState___SIZE = 84; // %struct.PyThreadState
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__frame___SIZE = 0; // %struct._frame
  var $struct__frame___FLATTENER = [];
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var __str;
var __str1;
var __str2;
var __str3;
var __str4;
var __str5;
var __str6;
var _scanner_members;
var __str7;
var __str8;
var __str9;
var __str10;
var __str11;
var __str12;
var __str13;
var __str14;
var _encoder_members;
var __str15;
var _errmsg_fn_8641;
var __str16;
var __str17;
var __str18;
var _PyExc_ValueError;
var _joinfn_8675;
var __str19;
var __str20;
var __str21;
var __str22;
var __str23;
var __str24;
var _pydoc_scanstring;
var __str25;
var __str26;
var _PyExc_TypeError;
var __str27;
var _pydoc_encode_basestring_ascii;
var __str28;
var __str29;
var ___PRETTY_FUNCTION___9208;
var ___PRETTY_FUNCTION___9278;
var __str30;
var __str31;
var __str32;
var __str33;
var __Py_NoneStruct;
var _PyDict_Type;
var _PyExc_StopIteration;
var _PyFloat_Type;
var _PyInt_Type;
var __PyThreadState_Current;
var __Py_CheckRecursionLimit;
var __str34;
var __str35;
var __Py_TrueStruct;
var __Py_ZeroStruct;
var __str36;
var __str37;
var __str38;
var __str39;
var __str40;
var ___PRETTY_FUNCTION___10703;
var __str41;
var _kwlist_10701;
var __str42;
var __str43;
var ___PRETTY_FUNCTION___10762;
var __str44;
var _kwlist_10760;
var __str45;
var _scanner_doc;
var __str46;
var _PyScannerType;
var __str47;
var ___PRETTY_FUNCTION___10949;
var __str48;
var _kwlist_10938;
var __str49;
var _PyCFunction_Type;
var ___PRETTY_FUNCTION___11015;
var __str50;
var _kwlist_11010;
var __str51;
var __str52;
var _s_null_11046;
var __str53;
var _s_true_11047;
var __str54;
var _s_false_11048;
var __str55;
var __str56;
var __str57;
var __str58;
var __str59;
var _open_dict_11341;
var _close_dict_11342;
var _empty_dict_11343;
var __str60;
var __str61;
var __str62;
var __str63;
var _open_array_11600;
var _close_array_11601;
var _empty_array_11602;
var __str64;
var __str65;
var __str66;
var __str67;
var ___PRETTY_FUNCTION___11738;
var ___PRETTY_FUNCTION___11816;
var _encoder_doc;
var __str68;
var _PyEncoderType;
var _speedups_methods;
var __str69;
var __str70;
var _module_doc;
var __str71;
var __str72;
var __str73;























































  function __convertPyInt_AsSsize_t($o, $size_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $o_addr=__stackBase__;
        var $size_ptr_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$o_addr]=$o;
        HEAP[$size_ptr_addr]=$size_ptr;
        var $1=HEAP[$o_addr]; //@line 145 "_json.c"
        var $2=_PyInt_AsSsize_t($1); //@line 145 "_json.c"
        var $3=HEAP[$size_ptr_addr]; //@line 145 "_json.c"
        HEAP[$3]=$2; //@line 145 "_json.c"
        var $4=HEAP[$size_ptr_addr]; //@line 146 "_json.c"
        var $5=HEAP[$4]; //@line 146 "_json.c"
        var $6=((($5))|0)==-1; //@line 146 "_json.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 146 "_json.c"
      case 1: // $bb
        var $7=_PyErr_Occurred(); //@line 146 "_json.c"
        var $8=($7)!=0; //@line 146 "_json.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 146 "_json.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 147 "_json.c"
        __label__ = 4; break; //@line 147 "_json.c"
      case 3: // $bb2
        HEAP[$0]=1; //@line 148 "_json.c"
        __label__ = 4; break; //@line 148 "_json.c"
      case 4: // $bb3
        var $9=HEAP[$0]; //@line 147 "_json.c"
        HEAP[$retval]=$9; //@line 147 "_json.c"
        __label__ = 5; break; //@line 147 "_json.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 147 "_json.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 147 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __convertPyInt_FromSsize_t($size_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_ptr_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$size_ptr_addr]=$size_ptr;
        var $1=HEAP[$size_ptr_addr]; //@line 155 "_json.c"
        var $2=HEAP[$1]; //@line 155 "_json.c"
        var $3=_PyInt_FromSsize_t($2); //@line 155 "_json.c"
        HEAP[$0]=$3; //@line 155 "_json.c"
        var $4=HEAP[$0]; //@line 155 "_json.c"
        HEAP[$retval]=$4; //@line 155 "_json.c"
        __label__ = 1; break; //@line 155 "_json.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 155 "_json.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 155 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ascii_escape_char($c, $output, $chars) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $c_addr=__stackBase__;
        var $output_addr=__stackBase__+2;
        var $chars_addr=__stackBase__+6;
        var $retval=__stackBase__+10;
        var $0=__stackBase__+14;
        var $_alloca_point_=0;
        HEAP[$c_addr]=$c;
        HEAP[$output_addr]=$output;
        HEAP[$chars_addr]=$chars;
        var $1=HEAP[$output_addr]; //@line 164 "_json.c"
        var $2=HEAP[$chars_addr]; //@line 164 "_json.c"
        var $3=(($1+$2)&4294967295); //@line 164 "_json.c"
        HEAP[$3]=92; //@line 164 "_json.c"
        var $4=HEAP[$chars_addr]; //@line 164 "_json.c"
        var $5=((($4) + 1)&4294967295); //@line 164 "_json.c"
        HEAP[$chars_addr]=$5; //@line 164 "_json.c"
        var $6=HEAP[$c_addr]; //@line 165 "_json.c"
        var $7=unSign(($6), 16, 0); //@line 165 "_json.c"
        if ($7 == 8) {
          __label__ = 3; break;
        }
        else if ($7 == 9) {
          __label__ = 7; break;
        }
        else if ($7 == 10) {
          __label__ = 5; break;
        }
        else if ($7 == 12) {
          __label__ = 4; break;
        }
        else if ($7 == 13) {
          __label__ = 6; break;
        }
        else if ($7 == 34) {
          __label__ = 2; break;
        }
        else if ($7 == 92) {
          __label__ = 1; break;
        }
        else {
        __label__ = 8; break;
        }
        
      case 1: // $bb
        var $8=HEAP[$c_addr]; //@line 166 "_json.c"
        var $9=((($8)) & 255); //@line 166 "_json.c"
        var $10=HEAP[$output_addr]; //@line 166 "_json.c"
        var $11=HEAP[$chars_addr]; //@line 166 "_json.c"
        var $12=(($10+$11)&4294967295); //@line 166 "_json.c"
        HEAP[$12]=$9; //@line 166 "_json.c"
        var $13=HEAP[$chars_addr]; //@line 166 "_json.c"
        var $14=((($13) + 1)&4294967295); //@line 166 "_json.c"
        HEAP[$chars_addr]=$14; //@line 166 "_json.c"
        __label__ = 9; break; //@line 166 "_json.c"
      case 2: // $bb1
        var $15=HEAP[$c_addr]; //@line 167 "_json.c"
        var $16=((($15)) & 255); //@line 167 "_json.c"
        var $17=HEAP[$output_addr]; //@line 167 "_json.c"
        var $18=HEAP[$chars_addr]; //@line 167 "_json.c"
        var $19=(($17+$18)&4294967295); //@line 167 "_json.c"
        HEAP[$19]=$16; //@line 167 "_json.c"
        var $20=HEAP[$chars_addr]; //@line 167 "_json.c"
        var $21=((($20) + 1)&4294967295); //@line 167 "_json.c"
        HEAP[$chars_addr]=$21; //@line 167 "_json.c"
        __label__ = 9; break; //@line 167 "_json.c"
      case 3: // $bb2
        var $22=HEAP[$output_addr]; //@line 168 "_json.c"
        var $23=HEAP[$chars_addr]; //@line 168 "_json.c"
        var $24=(($22+$23)&4294967295); //@line 168 "_json.c"
        HEAP[$24]=98; //@line 168 "_json.c"
        var $25=HEAP[$chars_addr]; //@line 168 "_json.c"
        var $26=((($25) + 1)&4294967295); //@line 168 "_json.c"
        HEAP[$chars_addr]=$26; //@line 168 "_json.c"
        __label__ = 9; break; //@line 168 "_json.c"
      case 4: // $bb3
        var $27=HEAP[$output_addr]; //@line 169 "_json.c"
        var $28=HEAP[$chars_addr]; //@line 169 "_json.c"
        var $29=(($27+$28)&4294967295); //@line 169 "_json.c"
        HEAP[$29]=102; //@line 169 "_json.c"
        var $30=HEAP[$chars_addr]; //@line 169 "_json.c"
        var $31=((($30) + 1)&4294967295); //@line 169 "_json.c"
        HEAP[$chars_addr]=$31; //@line 169 "_json.c"
        __label__ = 9; break; //@line 169 "_json.c"
      case 5: // $bb4
        var $32=HEAP[$output_addr]; //@line 170 "_json.c"
        var $33=HEAP[$chars_addr]; //@line 170 "_json.c"
        var $34=(($32+$33)&4294967295); //@line 170 "_json.c"
        HEAP[$34]=110; //@line 170 "_json.c"
        var $35=HEAP[$chars_addr]; //@line 170 "_json.c"
        var $36=((($35) + 1)&4294967295); //@line 170 "_json.c"
        HEAP[$chars_addr]=$36; //@line 170 "_json.c"
        __label__ = 9; break; //@line 170 "_json.c"
      case 6: // $bb5
        var $37=HEAP[$output_addr]; //@line 171 "_json.c"
        var $38=HEAP[$chars_addr]; //@line 171 "_json.c"
        var $39=(($37+$38)&4294967295); //@line 171 "_json.c"
        HEAP[$39]=114; //@line 171 "_json.c"
        var $40=HEAP[$chars_addr]; //@line 171 "_json.c"
        var $41=((($40) + 1)&4294967295); //@line 171 "_json.c"
        HEAP[$chars_addr]=$41; //@line 171 "_json.c"
        __label__ = 9; break; //@line 171 "_json.c"
      case 7: // $bb6
        var $42=HEAP[$output_addr]; //@line 172 "_json.c"
        var $43=HEAP[$chars_addr]; //@line 172 "_json.c"
        var $44=(($42+$43)&4294967295); //@line 172 "_json.c"
        HEAP[$44]=116; //@line 172 "_json.c"
        var $45=HEAP[$chars_addr]; //@line 172 "_json.c"
        var $46=((($45) + 1)&4294967295); //@line 172 "_json.c"
        HEAP[$chars_addr]=$46; //@line 172 "_json.c"
        __label__ = 9; break; //@line 172 "_json.c"
      case 8: // $bb7
        var $47=HEAP[$output_addr]; //@line 188 "_json.c"
        var $48=HEAP[$chars_addr]; //@line 188 "_json.c"
        var $49=(($47+$48)&4294967295); //@line 188 "_json.c"
        HEAP[$49]=117; //@line 188 "_json.c"
        var $50=HEAP[$chars_addr]; //@line 188 "_json.c"
        var $51=((($50) + 1)&4294967295); //@line 188 "_json.c"
        HEAP[$chars_addr]=$51; //@line 188 "_json.c"
        var $52=HEAP[$c_addr]; //@line 189 "_json.c"
        var $53=unSign(($52), 16, 0) >>> 12; //@line 189 "_json.c"
        var $54=unSign(($53), 16, 0); //@line 189 "_json.c"
        var $55=($54) & 15; //@line 189 "_json.c"
        var $56=((__str15+$55)&4294967295); //@line 189 "_json.c"
        var $57=HEAP[$56]; //@line 189 "_json.c"
        var $58=HEAP[$output_addr]; //@line 189 "_json.c"
        var $59=HEAP[$chars_addr]; //@line 189 "_json.c"
        var $60=(($58+$59)&4294967295); //@line 189 "_json.c"
        HEAP[$60]=$57; //@line 189 "_json.c"
        var $61=HEAP[$chars_addr]; //@line 189 "_json.c"
        var $62=((($61) + 1)&4294967295); //@line 189 "_json.c"
        HEAP[$chars_addr]=$62; //@line 189 "_json.c"
        var $63=HEAP[$c_addr]; //@line 190 "_json.c"
        var $64=unSign(($63), 16, 0) >>> 8; //@line 190 "_json.c"
        var $65=unSign(($64), 16, 0); //@line 190 "_json.c"
        var $66=($65) & 15; //@line 190 "_json.c"
        var $67=((__str15+$66)&4294967295); //@line 190 "_json.c"
        var $68=HEAP[$67]; //@line 190 "_json.c"
        var $69=HEAP[$output_addr]; //@line 190 "_json.c"
        var $70=HEAP[$chars_addr]; //@line 190 "_json.c"
        var $71=(($69+$70)&4294967295); //@line 190 "_json.c"
        HEAP[$71]=$68; //@line 190 "_json.c"
        var $72=HEAP[$chars_addr]; //@line 190 "_json.c"
        var $73=((($72) + 1)&4294967295); //@line 190 "_json.c"
        HEAP[$chars_addr]=$73; //@line 190 "_json.c"
        var $74=HEAP[$c_addr]; //@line 191 "_json.c"
        var $75=unSign(($74), 16, 0) >>> 4; //@line 191 "_json.c"
        var $76=unSign(($75), 16, 0); //@line 191 "_json.c"
        var $77=($76) & 15; //@line 191 "_json.c"
        var $78=((__str15+$77)&4294967295); //@line 191 "_json.c"
        var $79=HEAP[$78]; //@line 191 "_json.c"
        var $80=HEAP[$output_addr]; //@line 191 "_json.c"
        var $81=HEAP[$chars_addr]; //@line 191 "_json.c"
        var $82=(($80+$81)&4294967295); //@line 191 "_json.c"
        HEAP[$82]=$79; //@line 191 "_json.c"
        var $83=HEAP[$chars_addr]; //@line 191 "_json.c"
        var $84=((($83) + 1)&4294967295); //@line 191 "_json.c"
        HEAP[$chars_addr]=$84; //@line 191 "_json.c"
        var $85=HEAP[$c_addr]; //@line 192 "_json.c"
        var $86=unSign(($85), 16, 0); //@line 192 "_json.c"
        var $87=($86) & 15; //@line 192 "_json.c"
        var $88=((__str15+$87)&4294967295); //@line 192 "_json.c"
        var $89=HEAP[$88]; //@line 192 "_json.c"
        var $90=HEAP[$output_addr]; //@line 192 "_json.c"
        var $91=HEAP[$chars_addr]; //@line 192 "_json.c"
        var $92=(($90+$91)&4294967295); //@line 192 "_json.c"
        HEAP[$92]=$89; //@line 192 "_json.c"
        var $93=HEAP[$chars_addr]; //@line 192 "_json.c"
        var $94=((($93) + 1)&4294967295); //@line 192 "_json.c"
        HEAP[$chars_addr]=$94; //@line 192 "_json.c"
        __label__ = 9; break; //@line 192 "_json.c"
      case 9: // $bb8
        var $95=HEAP[$chars_addr]; //@line 194 "_json.c"
        HEAP[$0]=$95; //@line 194 "_json.c"
        var $96=HEAP[$0]; //@line 194 "_json.c"
        HEAP[$retval]=$96; //@line 194 "_json.c"
        __label__ = 10; break; //@line 194 "_json.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 194 "_json.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 194 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ascii_escape_unicode($pystr) {
    var __stackBase__  = STACKTOP; STACKTOP += 50; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 50);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pystr_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $i=__stackBase__+12;
        var $input_chars=__stackBase__+16;
        var $output_size=__stackBase__+20;
        var $max_output_size=__stackBase__+24;
        var $chars=__stackBase__+28;
        var $rval=__stackBase__+32;
        var $output=__stackBase__+36;
        var $input_unicode=__stackBase__+40;
        var $c=__stackBase__+44;
        var $new_output_size=__stackBase__+46;
        var $_alloca_point_=0;
        HEAP[$pystr_addr]=$pystr;
        var $1=HEAP[$pystr_addr]; //@line 210 "_json.c"
        var $2=$1; //@line 210 "_json.c"
        var $3=(($2+8)&4294967295); //@line 210 "_json.c"
        var $4=HEAP[$3]; //@line 210 "_json.c"
        HEAP[$input_chars]=$4; //@line 210 "_json.c"
        var $5=HEAP[$pystr_addr]; //@line 211 "_json.c"
        var $6=$5; //@line 211 "_json.c"
        var $7=(($6+12)&4294967295); //@line 211 "_json.c"
        var $8=HEAP[$7]; //@line 211 "_json.c"
        HEAP[$input_unicode]=$8; //@line 211 "_json.c"
        var $9=HEAP[$input_chars]; //@line 214 "_json.c"
        var $10=((($9) + 26)&4294967295); //@line 214 "_json.c"
        HEAP[$output_size]=$10; //@line 214 "_json.c"
        var $11=HEAP[$input_chars]; //@line 215 "_json.c"
        var $12=((($11) * 6)&4294967295); //@line 215 "_json.c"
        var $13=((($12) + 2)&4294967295); //@line 215 "_json.c"
        HEAP[$max_output_size]=$13; //@line 215 "_json.c"
        var $14=HEAP[$output_size]; //@line 216 "_json.c"
        var $15=_PyString_FromStringAndSize(0, $14); //@line 216 "_json.c"
        HEAP[$rval]=$15; //@line 216 "_json.c"
        var $16=HEAP[$rval]; //@line 217 "_json.c"
        var $17=($16)==0; //@line 217 "_json.c"
        if ($17) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 217 "_json.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 218 "_json.c"
        __label__ = 21; break; //@line 218 "_json.c"
      case 2: // $bb1
        var $18=HEAP[$rval]; //@line 220 "_json.c"
        var $19=$18; //@line 220 "_json.c"
        var $20=(($19+20)&4294967295); //@line 220 "_json.c"
        var $21=(($20)&4294967295); //@line 220 "_json.c"
        HEAP[$output]=$21; //@line 220 "_json.c"
        HEAP[$chars]=0; //@line 221 "_json.c"
        var $22=HEAP[$output]; //@line 222 "_json.c"
        var $23=HEAP[$chars]; //@line 222 "_json.c"
        var $24=(($22+$23)&4294967295); //@line 222 "_json.c"
        HEAP[$24]=34; //@line 222 "_json.c"
        var $25=HEAP[$chars]; //@line 222 "_json.c"
        var $26=((($25) + 1)&4294967295); //@line 222 "_json.c"
        HEAP[$chars]=$26; //@line 222 "_json.c"
        HEAP[$i]=0; //@line 223 "_json.c"
        __label__ = 17; break; //@line 223 "_json.c"
      case 3: // $bb2
        var $27=HEAP[$input_unicode]; //@line 224 "_json.c"
        var $28=HEAP[$i]; //@line 224 "_json.c"
        var $29=(($27+2*$28)&4294967295); //@line 224 "_json.c"
        var $30=HEAP[$29]; //@line 224 "_json.c"
        HEAP[$c]=$30; //@line 224 "_json.c"
        var $31=HEAP[$c]; //@line 225 "_json.c"
        var $32=unSign(($31), 16, 0) <= 31; //@line 225 "_json.c"
        if ($32) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 225 "_json.c"
      case 4: // $bb3
        var $33=HEAP[$c]; //@line 225 "_json.c"
        var $34=unSign(($33), 16, 0) > 126; //@line 225 "_json.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 225 "_json.c"
      case 5: // $bb4
        var $35=HEAP[$c]; //@line 225 "_json.c"
        var $36=reSign(($35), 16, 0)==92; //@line 225 "_json.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 225 "_json.c"
      case 6: // $bb5
        var $37=HEAP[$c]; //@line 225 "_json.c"
        var $38=reSign(($37), 16, 0)==34; //@line 225 "_json.c"
        if ($38) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 225 "_json.c"
      case 7: // $bb6
        var $39=HEAP[$c]; //@line 226 "_json.c"
        var $40=((($39)) & 255); //@line 226 "_json.c"
        var $41=HEAP[$output]; //@line 226 "_json.c"
        var $42=HEAP[$chars]; //@line 226 "_json.c"
        var $43=(($41+$42)&4294967295); //@line 226 "_json.c"
        HEAP[$43]=$40; //@line 226 "_json.c"
        var $44=HEAP[$chars]; //@line 226 "_json.c"
        var $45=((($44) + 1)&4294967295); //@line 226 "_json.c"
        HEAP[$chars]=$45; //@line 226 "_json.c"
        __label__ = 9; break; //@line 226 "_json.c"
      case 8: // $bb7
        var $46=HEAP[$c]; //@line 229 "_json.c"
        var $47=unSign(($46), 16, 0); //@line 229 "_json.c"
        var $48=((($47)) & 65535); //@line 229 "_json.c"
        var $49=HEAP[$output]; //@line 229 "_json.c"
        var $50=HEAP[$chars]; //@line 229 "_json.c"
        var $51=_ascii_escape_char($48, $49, $50); //@line 229 "_json.c"
        HEAP[$chars]=$51; //@line 229 "_json.c"
        __label__ = 9; break; //@line 229 "_json.c"
      case 9: // $bb8
        var $52=HEAP[$output_size]; //@line 231 "_json.c"
        var $53=HEAP[$chars]; //@line 231 "_json.c"
        var $54=((($52) - ($53))&4294967295); //@line 231 "_json.c"
        var $55=((($54))|0) <= 6; //@line 231 "_json.c"
        if ($55) { __label__ = 10; break; } else { __label__ = 16; break; } //@line 231 "_json.c"
      case 10: // $bb9
        var $56=HEAP[$output_size]; //@line 233 "_json.c"
        var $57=((($56) * 2)&4294967295); //@line 233 "_json.c"
        HEAP[$new_output_size]=$57; //@line 233 "_json.c"
        var $58=HEAP[$new_output_size]; //@line 235 "_json.c"
        var $59=HEAP[$max_output_size]; //@line 235 "_json.c"
        var $60=((($58))|0) > ((($59))|0); //@line 235 "_json.c"
        if ($60) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 235 "_json.c"
      case 11: // $bb10
        var $61=HEAP[$max_output_size]; //@line 236 "_json.c"
        HEAP[$new_output_size]=$61; //@line 236 "_json.c"
        __label__ = 12; break; //@line 236 "_json.c"
      case 12: // $bb11
        var $62=HEAP[$new_output_size]; //@line 239 "_json.c"
        var $63=HEAP[$output_size]; //@line 239 "_json.c"
        var $64=((($62))|0)!=((($63))|0); //@line 239 "_json.c"
        if ($64) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 239 "_json.c"
      case 13: // $bb12
        var $65=HEAP[$new_output_size]; //@line 240 "_json.c"
        HEAP[$output_size]=$65; //@line 240 "_json.c"
        var $66=HEAP[$output_size]; //@line 241 "_json.c"
        var $67=__PyString_Resize($rval, $66); //@line 241 "_json.c"
        var $68=((($67))|0)==-1; //@line 241 "_json.c"
        if ($68) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 241 "_json.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 242 "_json.c"
        __label__ = 21; break; //@line 242 "_json.c"
      case 15: // $bb14
        var $69=HEAP[$rval]; //@line 244 "_json.c"
        var $70=$69; //@line 244 "_json.c"
        var $71=(($70+20)&4294967295); //@line 244 "_json.c"
        var $72=(($71)&4294967295); //@line 244 "_json.c"
        HEAP[$output]=$72; //@line 244 "_json.c"
        __label__ = 16; break; //@line 244 "_json.c"
      case 16: // $bb15
        var $73=HEAP[$i]; //@line 223 "_json.c"
        var $74=((($73) + 1)&4294967295); //@line 223 "_json.c"
        HEAP[$i]=$74; //@line 223 "_json.c"
        __label__ = 17; break; //@line 223 "_json.c"
      case 17: // $bb16
        var $75=HEAP[$i]; //@line 223 "_json.c"
        var $76=HEAP[$input_chars]; //@line 223 "_json.c"
        var $77=((($75))|0) < ((($76))|0); //@line 223 "_json.c"
        if ($77) { __label__ = 3; break; } else { __label__ = 18; break; } //@line 223 "_json.c"
      case 18: // $bb17
        var $78=HEAP[$output]; //@line 248 "_json.c"
        var $79=HEAP[$chars]; //@line 248 "_json.c"
        var $80=(($78+$79)&4294967295); //@line 248 "_json.c"
        HEAP[$80]=34; //@line 248 "_json.c"
        var $81=HEAP[$chars]; //@line 248 "_json.c"
        var $82=((($81) + 1)&4294967295); //@line 248 "_json.c"
        HEAP[$chars]=$82; //@line 248 "_json.c"
        var $83=HEAP[$chars]; //@line 249 "_json.c"
        var $84=__PyString_Resize($rval, $83); //@line 249 "_json.c"
        var $85=((($84))|0)==-1; //@line 249 "_json.c"
        if ($85) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 249 "_json.c"
      case 19: // $bb18
        HEAP[$0]=0; //@line 250 "_json.c"
        __label__ = 21; break; //@line 250 "_json.c"
      case 20: // $bb19
        var $86=HEAP[$rval]; //@line 252 "_json.c"
        HEAP[$0]=$86; //@line 252 "_json.c"
        __label__ = 21; break; //@line 252 "_json.c"
      case 21: // $bb20
        var $87=HEAP[$0]; //@line 218 "_json.c"
        HEAP[$retval]=$87; //@line 218 "_json.c"
        __label__ = 22; break; //@line 218 "_json.c"
      case 22: // $return
        var $retval21=HEAP[$retval]; //@line 218 "_json.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 218 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ascii_escape_str($pystr) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pystr_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $i=__stackBase__+12;
        var $input_chars=__stackBase__+16;
        var $output_size=__stackBase__+20;
        var $chars=__stackBase__+24;
        var $rval=__stackBase__+28;
        var $output=__stackBase__+32;
        var $input_str=__stackBase__+36;
        var $c=__stackBase__+40;
        var $j=__stackBase__+42;
        var $uni=__stackBase__+46;
        var $c23=__stackBase__+50;
        var $_alloca_point_=0;
        HEAP[$pystr_addr]=$pystr;
        var $1=HEAP[$pystr_addr]; //@line 267 "_json.c"
        var $2=$1; //@line 267 "_json.c"
        var $3=(($2+8)&4294967295); //@line 267 "_json.c"
        var $4=HEAP[$3]; //@line 267 "_json.c"
        HEAP[$input_chars]=$4; //@line 267 "_json.c"
        var $5=HEAP[$pystr_addr]; //@line 268 "_json.c"
        var $6=$5; //@line 268 "_json.c"
        var $7=(($6+20)&4294967295); //@line 268 "_json.c"
        var $8=(($7)&4294967295); //@line 268 "_json.c"
        HEAP[$input_str]=$8; //@line 268 "_json.c"
        HEAP[$i]=0; //@line 271 "_json.c"
        __label__ = 16; break; //@line 271 "_json.c"
      case 1: // $bb
        var $9=HEAP[$input_str]; //@line 272 "_json.c"
        var $10=HEAP[$i]; //@line 272 "_json.c"
        var $11=(($9+$10)&4294967295); //@line 272 "_json.c"
        var $12=HEAP[$11]; //@line 272 "_json.c"
        var $13=unSign(($12), 8, 0); //@line 272 "_json.c"
        HEAP[$c]=$13; //@line 272 "_json.c"
        var $14=HEAP[$c]; //@line 273 "_json.c"
        var $15=unSign(($14), 16, 0) <= 31; //@line 273 "_json.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 273 "_json.c"
      case 2: // $bb1
        var $16=HEAP[$c]; //@line 273 "_json.c"
        var $17=unSign(($16), 16, 0) > 126; //@line 273 "_json.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 273 "_json.c"
      case 3: // $bb2
        var $18=HEAP[$c]; //@line 273 "_json.c"
        var $19=reSign(($18), 16, 0)==92; //@line 273 "_json.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 273 "_json.c"
      case 4: // $bb3
        var $20=HEAP[$c]; //@line 273 "_json.c"
        var $21=reSign(($20), 16, 0)==34; //@line 273 "_json.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 15; break; } //@line 273 "_json.c"
      case 5: // $bb4
        var $22=HEAP[$i]; //@line 276 "_json.c"
        HEAP[$j]=$22; //@line 276 "_json.c"
        __label__ = 13; break; //@line 276 "_json.c"
      case 6: // $bb5
        var $23=HEAP[$input_str]; //@line 277 "_json.c"
        var $24=HEAP[$j]; //@line 277 "_json.c"
        var $25=(($23+$24)&4294967295); //@line 277 "_json.c"
        var $26=HEAP[$25]; //@line 277 "_json.c"
        var $27=unSign(($26), 8, 0); //@line 277 "_json.c"
        HEAP[$c]=$27; //@line 277 "_json.c"
        var $28=HEAP[$c]; //@line 278 "_json.c"
        var $29=unSign(($28), 16, 0) > 127; //@line 278 "_json.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 278 "_json.c"
      case 7: // $bb6
        var $30=HEAP[$input_str]; //@line 281 "_json.c"
        var $31=HEAP[$input_chars]; //@line 281 "_json.c"
        var $32=_PyUnicodeUCS2_DecodeUTF8($30, $31, ((__str1)&4294967295)); //@line 281 "_json.c"
        HEAP[$uni]=$32; //@line 281 "_json.c"
        var $33=HEAP[$uni]; //@line 282 "_json.c"
        var $34=($33)==0; //@line 282 "_json.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 282 "_json.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 283 "_json.c"
        __label__ = 40; break; //@line 283 "_json.c"
      case 9: // $bb8
        var $35=HEAP[$uni]; //@line 285 "_json.c"
        var $36=_ascii_escape_unicode($35); //@line 285 "_json.c"
        HEAP[$rval]=$36; //@line 285 "_json.c"
        var $37=HEAP[$uni]; //@line 286 "_json.c"
        var $38=(($37)&4294967295); //@line 286 "_json.c"
        var $39=HEAP[$38]; //@line 286 "_json.c"
        var $40=((($39) - 1)&4294967295); //@line 286 "_json.c"
        var $41=HEAP[$uni]; //@line 286 "_json.c"
        var $42=(($41)&4294967295); //@line 286 "_json.c"
        HEAP[$42]=$40; //@line 286 "_json.c"
        var $43=HEAP[$uni]; //@line 286 "_json.c"
        var $44=(($43)&4294967295); //@line 286 "_json.c"
        var $45=HEAP[$44]; //@line 286 "_json.c"
        var $46=((($45))|0)==0; //@line 286 "_json.c"
        if ($46) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 286 "_json.c"
      case 10: // $bb9
        var $47=HEAP[$uni]; //@line 286 "_json.c"
        var $48=(($47+4)&4294967295); //@line 286 "_json.c"
        var $49=HEAP[$48]; //@line 286 "_json.c"
        var $50=(($49+24)&4294967295); //@line 286 "_json.c"
        var $51=HEAP[$50]; //@line 286 "_json.c"
        var $52=HEAP[$uni]; //@line 286 "_json.c"
        FUNCTION_TABLE[$51]($52); //@line 286 "_json.c"
        __label__ = 11; break; //@line 286 "_json.c"
      case 11: // $bb10
        var $53=HEAP[$rval]; //@line 287 "_json.c"
        HEAP[$0]=$53; //@line 287 "_json.c"
        __label__ = 40; break; //@line 287 "_json.c"
      case 12: // $bb11
        var $54=HEAP[$j]; //@line 276 "_json.c"
        var $55=((($54) + 1)&4294967295); //@line 276 "_json.c"
        HEAP[$j]=$55; //@line 276 "_json.c"
        __label__ = 13; break; //@line 276 "_json.c"
      case 13: // $bb12
        var $56=HEAP[$j]; //@line 276 "_json.c"
        var $57=HEAP[$input_chars]; //@line 276 "_json.c"
        var $58=((($56))|0) < ((($57))|0); //@line 276 "_json.c"
        if ($58) { __label__ = 6; break; } else { __label__ = 14; break; } //@line 276 "_json.c"
      case 14: // $bb13
        __label__ = 17; break; //@line 276 "_json.c"
      case 15: // $bb14
        var $59=HEAP[$i]; //@line 271 "_json.c"
        var $60=((($59) + 1)&4294967295); //@line 271 "_json.c"
        HEAP[$i]=$60; //@line 271 "_json.c"
        __label__ = 16; break; //@line 271 "_json.c"
      case 16: // $bb15
        var $61=HEAP[$i]; //@line 271 "_json.c"
        var $62=HEAP[$input_chars]; //@line 271 "_json.c"
        var $63=((($61))|0) < ((($62))|0); //@line 271 "_json.c"
        if ($63) { __label__ = 1; break; } else { __label__ = 17; break; } //@line 271 "_json.c"
      case 17: // $bb16
        var $64=HEAP[$i]; //@line 294 "_json.c"
        var $65=HEAP[$input_chars]; //@line 294 "_json.c"
        var $66=((($64))|0)==((($65))|0); //@line 294 "_json.c"
        if ($66) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 294 "_json.c"
      case 18: // $bb17
        var $67=HEAP[$input_chars]; //@line 296 "_json.c"
        var $68=((($67) + 2)&4294967295); //@line 296 "_json.c"
        HEAP[$output_size]=$68; //@line 296 "_json.c"
        __label__ = 20; break; //@line 296 "_json.c"
      case 19: // $bb18
        var $69=HEAP[$input_chars]; //@line 300 "_json.c"
        var $70=((($69) + 26)&4294967295); //@line 300 "_json.c"
        HEAP[$output_size]=$70; //@line 300 "_json.c"
        __label__ = 20; break; //@line 300 "_json.c"
      case 20: // $bb19
        var $71=HEAP[$output_size]; //@line 302 "_json.c"
        var $72=_PyString_FromStringAndSize(0, $71); //@line 302 "_json.c"
        HEAP[$rval]=$72; //@line 302 "_json.c"
        var $73=HEAP[$rval]; //@line 303 "_json.c"
        var $74=($73)==0; //@line 303 "_json.c"
        if ($74) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 303 "_json.c"
      case 21: // $bb20
        HEAP[$0]=0; //@line 304 "_json.c"
        __label__ = 40; break; //@line 304 "_json.c"
      case 22: // $bb21
        var $75=HEAP[$rval]; //@line 306 "_json.c"
        var $76=$75; //@line 306 "_json.c"
        var $77=(($76+20)&4294967295); //@line 306 "_json.c"
        var $78=(($77)&4294967295); //@line 306 "_json.c"
        HEAP[$output]=$78; //@line 306 "_json.c"
        var $79=HEAP[$output]; //@line 307 "_json.c"
        var $80=(($79)&4294967295); //@line 307 "_json.c"
        HEAP[$80]=34; //@line 307 "_json.c"
        var $81=HEAP[$i]; //@line 310 "_json.c"
        var $82=((($81) + 1)&4294967295); //@line 310 "_json.c"
        HEAP[$chars]=$82; //@line 310 "_json.c"
        var $83=HEAP[$i]; //@line 311 "_json.c"
        var $84=HEAP[$output]; //@line 311 "_json.c"
        var $85=(($84+1)&4294967295); //@line 311 "_json.c"
        var $86=HEAP[$input_str]; //@line 311 "_json.c"
        _llvm_memcpy_p0i8_p0i8_i32($85, $86, $83, 1, 0); //@line 311 "_json.c"
        __label__ = 36; break; //@line 311 "_json.c"
      case 23: // $bb22
        var $87=HEAP[$input_str]; //@line 314 "_json.c"
        var $88=HEAP[$i]; //@line 314 "_json.c"
        var $89=(($87+$88)&4294967295); //@line 314 "_json.c"
        var $90=HEAP[$89]; //@line 314 "_json.c"
        var $91=unSign(($90), 8, 0); //@line 314 "_json.c"
        HEAP[$c23]=$91; //@line 314 "_json.c"
        var $92=HEAP[$c23]; //@line 315 "_json.c"
        var $93=unSign(($92), 16, 0) <= 31; //@line 315 "_json.c"
        if ($93) { __label__ = 28; break; } else { __label__ = 24; break; } //@line 315 "_json.c"
      case 24: // $bb24
        var $94=HEAP[$c23]; //@line 315 "_json.c"
        var $95=unSign(($94), 16, 0) > 126; //@line 315 "_json.c"
        if ($95) { __label__ = 28; break; } else { __label__ = 25; break; } //@line 315 "_json.c"
      case 25: // $bb25
        var $96=HEAP[$c23]; //@line 315 "_json.c"
        var $97=reSign(($96), 16, 0)==92; //@line 315 "_json.c"
        if ($97) { __label__ = 28; break; } else { __label__ = 26; break; } //@line 315 "_json.c"
      case 26: // $bb26
        var $98=HEAP[$c23]; //@line 315 "_json.c"
        var $99=reSign(($98), 16, 0)==34; //@line 315 "_json.c"
        if ($99) { __label__ = 28; break; } else { __label__ = 27; break; } //@line 315 "_json.c"
      case 27: // $bb27
        var $100=HEAP[$c23]; //@line 316 "_json.c"
        var $101=((($100)) & 255); //@line 316 "_json.c"
        var $102=HEAP[$output]; //@line 316 "_json.c"
        var $103=HEAP[$chars]; //@line 316 "_json.c"
        var $104=(($102+$103)&4294967295); //@line 316 "_json.c"
        HEAP[$104]=$101; //@line 316 "_json.c"
        var $105=HEAP[$chars]; //@line 316 "_json.c"
        var $106=((($105) + 1)&4294967295); //@line 316 "_json.c"
        HEAP[$chars]=$106; //@line 316 "_json.c"
        __label__ = 29; break; //@line 316 "_json.c"
      case 28: // $bb28
        var $107=HEAP[$c23]; //@line 319 "_json.c"
        var $108=unSign(($107), 16, 0); //@line 319 "_json.c"
        var $109=((($108)) & 65535); //@line 319 "_json.c"
        var $110=HEAP[$output]; //@line 319 "_json.c"
        var $111=HEAP[$chars]; //@line 319 "_json.c"
        var $112=_ascii_escape_char($109, $110, $111); //@line 319 "_json.c"
        HEAP[$chars]=$112; //@line 319 "_json.c"
        __label__ = 29; break; //@line 319 "_json.c"
      case 29: // $bb29
        var $113=HEAP[$output_size]; //@line 322 "_json.c"
        var $114=HEAP[$chars]; //@line 322 "_json.c"
        var $115=((($113) - ($114))&4294967295); //@line 322 "_json.c"
        var $116=((($115))|0) <= 6; //@line 322 "_json.c"
        if ($116) { __label__ = 30; break; } else { __label__ = 35; break; } //@line 322 "_json.c"
      case 30: // $bb30
        var $117=HEAP[$output_size]; //@line 324 "_json.c"
        var $118=((($117) * 2)&4294967295); //@line 324 "_json.c"
        HEAP[$output_size]=$118; //@line 324 "_json.c"
        var $119=HEAP[$input_chars]; //@line 325 "_json.c"
        var $120=((($119) * 6)&4294967295); //@line 325 "_json.c"
        var $121=((($120) + 2)&4294967295); //@line 325 "_json.c"
        var $122=HEAP[$output_size]; //@line 325 "_json.c"
        var $123=((($121))|0) < ((($122))|0); //@line 325 "_json.c"
        if ($123) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 325 "_json.c"
      case 31: // $bb31
        var $124=HEAP[$input_chars]; //@line 326 "_json.c"
        var $125=((($124) * 6)&4294967295); //@line 326 "_json.c"
        var $126=((($125) + 2)&4294967295); //@line 326 "_json.c"
        HEAP[$output_size]=$126; //@line 326 "_json.c"
        __label__ = 32; break; //@line 326 "_json.c"
      case 32: // $bb32
        var $127=HEAP[$output_size]; //@line 328 "_json.c"
        var $128=__PyString_Resize($rval, $127); //@line 328 "_json.c"
        var $129=((($128))|0)==-1; //@line 328 "_json.c"
        if ($129) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 328 "_json.c"
      case 33: // $bb33
        HEAP[$0]=0; //@line 329 "_json.c"
        __label__ = 40; break; //@line 329 "_json.c"
      case 34: // $bb34
        var $130=HEAP[$rval]; //@line 331 "_json.c"
        var $131=$130; //@line 331 "_json.c"
        var $132=(($131+20)&4294967295); //@line 331 "_json.c"
        var $133=(($132)&4294967295); //@line 331 "_json.c"
        HEAP[$output]=$133; //@line 331 "_json.c"
        __label__ = 35; break; //@line 331 "_json.c"
      case 35: // $bb35
        var $134=HEAP[$i]; //@line 313 "_json.c"
        var $135=((($134) + 1)&4294967295); //@line 313 "_json.c"
        HEAP[$i]=$135; //@line 313 "_json.c"
        __label__ = 36; break; //@line 313 "_json.c"
      case 36: // $bb36
        var $136=HEAP[$i]; //@line 313 "_json.c"
        var $137=HEAP[$input_chars]; //@line 313 "_json.c"
        var $138=((($136))|0) < ((($137))|0); //@line 313 "_json.c"
        if ($138) { __label__ = 23; break; } else { __label__ = 37; break; } //@line 313 "_json.c"
      case 37: // $bb37
        var $139=HEAP[$output]; //@line 334 "_json.c"
        var $140=HEAP[$chars]; //@line 334 "_json.c"
        var $141=(($139+$140)&4294967295); //@line 334 "_json.c"
        HEAP[$141]=34; //@line 334 "_json.c"
        var $142=HEAP[$chars]; //@line 334 "_json.c"
        var $143=((($142) + 1)&4294967295); //@line 334 "_json.c"
        HEAP[$chars]=$143; //@line 334 "_json.c"
        var $144=HEAP[$chars]; //@line 335 "_json.c"
        var $145=__PyString_Resize($rval, $144); //@line 335 "_json.c"
        var $146=((($145))|0)==-1; //@line 335 "_json.c"
        if ($146) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 335 "_json.c"
      case 38: // $bb38
        HEAP[$0]=0; //@line 336 "_json.c"
        __label__ = 40; break; //@line 336 "_json.c"
      case 39: // $bb39
        var $147=HEAP[$rval]; //@line 338 "_json.c"
        HEAP[$0]=$147; //@line 338 "_json.c"
        __label__ = 40; break; //@line 338 "_json.c"
      case 40: // $bb40
        var $148=HEAP[$0]; //@line 283 "_json.c"
        HEAP[$retval]=$148; //@line 283 "_json.c"
        __label__ = 41; break; //@line 283 "_json.c"
      case 41: // $return
        var $retval41=HEAP[$retval]; //@line 283 "_json.c"
        STACKTOP = __stackBase__;
        return $retval41; //@line 283 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _raise_errmsg($msg, $s, $end) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $msg_addr=__stackBase__;
        var $s_addr=__stackBase__+4;
        var $end_addr=__stackBase__+8;
        var $pymsg=__stackBase__+12;
        var $decoder=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$msg_addr]=$msg;
        HEAP[$s_addr]=$s;
        HEAP[$end_addr]=$end;
        var $0=HEAP[_errmsg_fn_8641]; //@line 348 "_json.c"
        var $1=($0)==0; //@line 348 "_json.c"
        if ($1) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 348 "_json.c"
      case 1: // $bb
        var $2=_PyImport_ImportModule(((__str16)&4294967295)); //@line 349 "_json.c"
        HEAP[$decoder]=$2; //@line 349 "_json.c"
        var $3=HEAP[$decoder]; //@line 350 "_json.c"
        var $4=($3)==0; //@line 350 "_json.c"
        if ($4) { __label__ = 8; break; } else { __label__ = 2; break; } //@line 350 "_json.c"
      case 2: // $bb1
        var $5=HEAP[$decoder]; //@line 352 "_json.c"
        var $6=_PyObject_GetAttrString($5, ((__str17)&4294967295)); //@line 352 "_json.c"
        HEAP[_errmsg_fn_8641]=$6; //@line 352 "_json.c"
        var $7=HEAP[$decoder]; //@line 353 "_json.c"
        var $8=(($7)&4294967295); //@line 353 "_json.c"
        var $9=HEAP[$8]; //@line 353 "_json.c"
        var $10=((($9) - 1)&4294967295); //@line 353 "_json.c"
        var $11=HEAP[$decoder]; //@line 353 "_json.c"
        var $12=(($11)&4294967295); //@line 353 "_json.c"
        HEAP[$12]=$10; //@line 353 "_json.c"
        var $13=HEAP[$decoder]; //@line 353 "_json.c"
        var $14=(($13)&4294967295); //@line 353 "_json.c"
        var $15=HEAP[$14]; //@line 353 "_json.c"
        var $16=((($15))|0)==0; //@line 353 "_json.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 353 "_json.c"
      case 3: // $bb2
        var $17=HEAP[$decoder]; //@line 353 "_json.c"
        var $18=(($17+4)&4294967295); //@line 353 "_json.c"
        var $19=HEAP[$18]; //@line 353 "_json.c"
        var $20=(($19+24)&4294967295); //@line 353 "_json.c"
        var $21=HEAP[$20]; //@line 353 "_json.c"
        var $22=HEAP[$decoder]; //@line 353 "_json.c"
        FUNCTION_TABLE[$21]($22); //@line 353 "_json.c"
        __label__ = 4; break; //@line 353 "_json.c"
      case 4: // $bb3
        var $23=HEAP[_errmsg_fn_8641]; //@line 354 "_json.c"
        var $24=($23)==0; //@line 354 "_json.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 354 "_json.c"
      case 5: // $bb4
        var $25=HEAP[_errmsg_fn_8641]; //@line 357 "_json.c"
        var $26=HEAP[$msg_addr]; //@line 357 "_json.c"
        var $27=HEAP[$s_addr]; //@line 357 "_json.c"
        var $28=_PyObject_CallFunction($25, ((__str18)&4294967295), $26, $27, (FUNCTION_TABLE_OFFSET + 2), $end_addr); //@line 357 "_json.c"
        HEAP[$pymsg]=$28; //@line 357 "_json.c"
        var $29=HEAP[$pymsg]; //@line 358 "_json.c"
        var $30=($29)!=0; //@line 358 "_json.c"
        if ($30) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 358 "_json.c"
      case 6: // $bb5
        var $31=HEAP[_PyExc_ValueError]; //@line 359 "_json.c"
        var $32=HEAP[$pymsg]; //@line 359 "_json.c"
        _PyErr_SetObject($31, $32); //@line 359 "_json.c"
        var $33=HEAP[$pymsg]; //@line 360 "_json.c"
        var $34=(($33)&4294967295); //@line 360 "_json.c"
        var $35=HEAP[$34]; //@line 360 "_json.c"
        var $36=((($35) - 1)&4294967295); //@line 360 "_json.c"
        var $37=HEAP[$pymsg]; //@line 360 "_json.c"
        var $38=(($37)&4294967295); //@line 360 "_json.c"
        HEAP[$38]=$36; //@line 360 "_json.c"
        var $39=HEAP[$pymsg]; //@line 360 "_json.c"
        var $40=(($39)&4294967295); //@line 360 "_json.c"
        var $41=HEAP[$40]; //@line 360 "_json.c"
        var $42=((($41))|0)==0; //@line 360 "_json.c"
        if ($42) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 360 "_json.c"
      case 7: // $bb6
        var $43=HEAP[$pymsg]; //@line 360 "_json.c"
        var $44=(($43+4)&4294967295); //@line 360 "_json.c"
        var $45=HEAP[$44]; //@line 360 "_json.c"
        var $46=(($45+24)&4294967295); //@line 360 "_json.c"
        var $47=HEAP[$46]; //@line 360 "_json.c"
        var $48=HEAP[$pymsg]; //@line 360 "_json.c"
        FUNCTION_TABLE[$47]($48); //@line 360 "_json.c"
        __label__ = 8; break; //@line 360 "_json.c"
      case 8: // $bb7
        __label__ = 9; break; //@line 351 "_json.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 351 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _join_list_unicode($lst) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lst_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $ustr=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$lst_addr]=$lst;
        var $1=HEAP[_joinfn_8675]; //@line 369 "_json.c"
        var $2=($1)==0; //@line 369 "_json.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 369 "_json.c"
      case 1: // $bb
        var $3=_PyUnicodeUCS2_FromUnicode(0, 0); //@line 370 "_json.c"
        HEAP[$ustr]=$3; //@line 370 "_json.c"
        var $4=HEAP[$ustr]; //@line 371 "_json.c"
        var $5=($4)==0; //@line 371 "_json.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 371 "_json.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 372 "_json.c"
        __label__ = 8; break; //@line 372 "_json.c"
      case 3: // $bb2
        var $6=HEAP[$ustr]; //@line 374 "_json.c"
        var $7=_PyObject_GetAttrString($6, ((__str19)&4294967295)); //@line 374 "_json.c"
        HEAP[_joinfn_8675]=$7; //@line 374 "_json.c"
        var $8=HEAP[$ustr]; //@line 375 "_json.c"
        var $9=(($8)&4294967295); //@line 375 "_json.c"
        var $10=HEAP[$9]; //@line 375 "_json.c"
        var $11=((($10) - 1)&4294967295); //@line 375 "_json.c"
        var $12=HEAP[$ustr]; //@line 375 "_json.c"
        var $13=(($12)&4294967295); //@line 375 "_json.c"
        HEAP[$13]=$11; //@line 375 "_json.c"
        var $14=HEAP[$ustr]; //@line 375 "_json.c"
        var $15=(($14)&4294967295); //@line 375 "_json.c"
        var $16=HEAP[$15]; //@line 375 "_json.c"
        var $17=((($16))|0)==0; //@line 375 "_json.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 375 "_json.c"
      case 4: // $bb3
        var $18=HEAP[$ustr]; //@line 375 "_json.c"
        var $19=(($18+4)&4294967295); //@line 375 "_json.c"
        var $20=HEAP[$19]; //@line 375 "_json.c"
        var $21=(($20+24)&4294967295); //@line 375 "_json.c"
        var $22=HEAP[$21]; //@line 375 "_json.c"
        var $23=HEAP[$ustr]; //@line 375 "_json.c"
        FUNCTION_TABLE[$22]($23); //@line 375 "_json.c"
        __label__ = 5; break; //@line 375 "_json.c"
      case 5: // $bb4
        var $24=HEAP[_joinfn_8675]; //@line 376 "_json.c"
        var $25=($24)==0; //@line 376 "_json.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 376 "_json.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 377 "_json.c"
        __label__ = 8; break; //@line 377 "_json.c"
      case 7: // $bb6
        var $26=HEAP[_joinfn_8675]; //@line 379 "_json.c"
        var $27=HEAP[$lst_addr]; //@line 379 "_json.c"
        var $28=_PyObject_CallFunctionObjArgs($26, $27, 0); //@line 379 "_json.c"
        HEAP[$0]=$28; //@line 379 "_json.c"
        __label__ = 8; break; //@line 379 "_json.c"
      case 8: // $bb7
        var $29=HEAP[$0]; //@line 372 "_json.c"
        HEAP[$retval]=$29; //@line 372 "_json.c"
        __label__ = 9; break; //@line 372 "_json.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 372 "_json.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 372 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __build_rval_index_tuple($rval, $idx) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $rval_addr=__stackBase__;
        var $idx_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $tpl=__stackBase__+16;
        var $pyidx=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$rval_addr]=$rval;
        HEAP[$idx_addr]=$idx;
        var $1=HEAP[$rval_addr]; //@line 390 "_json.c"
        var $2=($1)==0; //@line 390 "_json.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 390 "_json.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 391 "_json.c"
        __label__ = 13; break; //@line 391 "_json.c"
      case 2: // $bb1
        var $3=HEAP[$idx_addr]; //@line 393 "_json.c"
        var $4=_PyInt_FromSsize_t($3); //@line 393 "_json.c"
        HEAP[$pyidx]=$4; //@line 393 "_json.c"
        var $5=HEAP[$pyidx]; //@line 394 "_json.c"
        var $6=($5)==0; //@line 394 "_json.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 394 "_json.c"
      case 3: // $bb2
        var $7=HEAP[$rval_addr]; //@line 395 "_json.c"
        var $8=(($7)&4294967295); //@line 395 "_json.c"
        var $9=HEAP[$8]; //@line 395 "_json.c"
        var $10=((($9) - 1)&4294967295); //@line 395 "_json.c"
        var $11=HEAP[$rval_addr]; //@line 395 "_json.c"
        var $12=(($11)&4294967295); //@line 395 "_json.c"
        HEAP[$12]=$10; //@line 395 "_json.c"
        var $13=HEAP[$rval_addr]; //@line 395 "_json.c"
        var $14=(($13)&4294967295); //@line 395 "_json.c"
        var $15=HEAP[$14]; //@line 395 "_json.c"
        var $16=((($15))|0)==0; //@line 395 "_json.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 395 "_json.c"
      case 4: // $bb3
        var $17=HEAP[$rval_addr]; //@line 395 "_json.c"
        var $18=(($17+4)&4294967295); //@line 395 "_json.c"
        var $19=HEAP[$18]; //@line 395 "_json.c"
        var $20=(($19+24)&4294967295); //@line 395 "_json.c"
        var $21=HEAP[$20]; //@line 395 "_json.c"
        var $22=HEAP[$rval_addr]; //@line 395 "_json.c"
        FUNCTION_TABLE[$21]($22); //@line 395 "_json.c"
        __label__ = 5; break; //@line 395 "_json.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 396 "_json.c"
        __label__ = 13; break; //@line 396 "_json.c"
      case 6: // $bb5
        var $23=_PyTuple_New(2); //@line 398 "_json.c"
        HEAP[$tpl]=$23; //@line 398 "_json.c"
        var $24=HEAP[$tpl]; //@line 399 "_json.c"
        var $25=($24)==0; //@line 399 "_json.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 399 "_json.c"
      case 7: // $bb6
        var $26=HEAP[$pyidx]; //@line 400 "_json.c"
        var $27=(($26)&4294967295); //@line 400 "_json.c"
        var $28=HEAP[$27]; //@line 400 "_json.c"
        var $29=((($28) - 1)&4294967295); //@line 400 "_json.c"
        var $30=HEAP[$pyidx]; //@line 400 "_json.c"
        var $31=(($30)&4294967295); //@line 400 "_json.c"
        HEAP[$31]=$29; //@line 400 "_json.c"
        var $32=HEAP[$pyidx]; //@line 400 "_json.c"
        var $33=(($32)&4294967295); //@line 400 "_json.c"
        var $34=HEAP[$33]; //@line 400 "_json.c"
        var $35=((($34))|0)==0; //@line 400 "_json.c"
        if ($35) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 400 "_json.c"
      case 8: // $bb7
        var $36=HEAP[$pyidx]; //@line 400 "_json.c"
        var $37=(($36+4)&4294967295); //@line 400 "_json.c"
        var $38=HEAP[$37]; //@line 400 "_json.c"
        var $39=(($38+24)&4294967295); //@line 400 "_json.c"
        var $40=HEAP[$39]; //@line 400 "_json.c"
        var $41=HEAP[$pyidx]; //@line 400 "_json.c"
        FUNCTION_TABLE[$40]($41); //@line 400 "_json.c"
        __label__ = 9; break; //@line 400 "_json.c"
      case 9: // $bb8
        var $42=HEAP[$rval_addr]; //@line 401 "_json.c"
        var $43=(($42)&4294967295); //@line 401 "_json.c"
        var $44=HEAP[$43]; //@line 401 "_json.c"
        var $45=((($44) - 1)&4294967295); //@line 401 "_json.c"
        var $46=HEAP[$rval_addr]; //@line 401 "_json.c"
        var $47=(($46)&4294967295); //@line 401 "_json.c"
        HEAP[$47]=$45; //@line 401 "_json.c"
        var $48=HEAP[$rval_addr]; //@line 401 "_json.c"
        var $49=(($48)&4294967295); //@line 401 "_json.c"
        var $50=HEAP[$49]; //@line 401 "_json.c"
        var $51=((($50))|0)==0; //@line 401 "_json.c"
        if ($51) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 401 "_json.c"
      case 10: // $bb9
        var $52=HEAP[$rval_addr]; //@line 401 "_json.c"
        var $53=(($52+4)&4294967295); //@line 401 "_json.c"
        var $54=HEAP[$53]; //@line 401 "_json.c"
        var $55=(($54+24)&4294967295); //@line 401 "_json.c"
        var $56=HEAP[$55]; //@line 401 "_json.c"
        var $57=HEAP[$rval_addr]; //@line 401 "_json.c"
        FUNCTION_TABLE[$56]($57); //@line 401 "_json.c"
        __label__ = 11; break; //@line 401 "_json.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 402 "_json.c"
        __label__ = 13; break; //@line 402 "_json.c"
      case 12: // $bb11
        var $58=HEAP[$tpl]; //@line 404 "_json.c"
        var $59=$58; //@line 404 "_json.c"
        var $60=(($59+12)&4294967295); //@line 404 "_json.c"
        var $61=(($60)&4294967295); //@line 404 "_json.c"
        var $62=HEAP[$rval_addr]; //@line 404 "_json.c"
        HEAP[$61]=$62; //@line 404 "_json.c"
        var $63=HEAP[$tpl]; //@line 405 "_json.c"
        var $64=$63; //@line 405 "_json.c"
        var $65=(($64+12)&4294967295); //@line 405 "_json.c"
        var $66=(($65+4)&4294967295); //@line 405 "_json.c"
        var $67=HEAP[$pyidx]; //@line 405 "_json.c"
        HEAP[$66]=$67; //@line 405 "_json.c"
        var $68=HEAP[$tpl]; //@line 406 "_json.c"
        HEAP[$0]=$68; //@line 406 "_json.c"
        __label__ = 13; break; //@line 406 "_json.c"
      case 13: // $bb12
        var $69=HEAP[$0]; //@line 391 "_json.c"
        HEAP[$retval]=$69; //@line 391 "_json.c"
        __label__ = 14; break; //@line 391 "_json.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 391 "_json.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 391 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanstring_str($pystr, $end, $encoding, $strict, $next_end_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 68; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pystr_addr=__stackBase__;
        var $end_addr=__stackBase__+4;
        var $encoding_addr=__stackBase__+8;
        var $strict_addr=__stackBase__+12;
        var $next_end_ptr_addr=__stackBase__+16;
        var $retval=__stackBase__+20;
        var $0=__stackBase__+24;
        var $rval=__stackBase__+28;
        var $len=__stackBase__+32;
        var $begin=__stackBase__+36;
        var $next=__stackBase__+40;
        var $buf=__stackBase__+44;
        var $chunks=__stackBase__+48;
        var $c=__stackBase__+52;
        var $chunk=__stackBase__+54;
        var $strchunk=__stackBase__+58;
        var $digit=__stackBase__+62;
        var $_py_tmp=__stackBase__+64;
        var $_alloca_point_=0;
        HEAP[$pystr_addr]=$pystr;
        HEAP[$end_addr]=$end;
        HEAP[$encoding_addr]=$encoding;
        HEAP[$strict_addr]=$strict;
        HEAP[$next_end_ptr_addr]=$next_end_ptr;
        var $1=HEAP[$pystr_addr]; //@line 422 "_json.c"
        var $2=$1; //@line 422 "_json.c"
        var $3=(($2+8)&4294967295); //@line 422 "_json.c"
        var $4=HEAP[$3]; //@line 422 "_json.c"
        HEAP[$len]=$4; //@line 422 "_json.c"
        var $5=HEAP[$end_addr]; //@line 423 "_json.c"
        var $6=((($5) - 1)&4294967295); //@line 423 "_json.c"
        HEAP[$begin]=$6; //@line 423 "_json.c"
        var $7=HEAP[$pystr_addr]; //@line 425 "_json.c"
        var $8=$7; //@line 425 "_json.c"
        var $9=(($8+20)&4294967295); //@line 425 "_json.c"
        var $10=(($9)&4294967295); //@line 425 "_json.c"
        HEAP[$buf]=$10; //@line 425 "_json.c"
        var $11=_PyList_New(0); //@line 426 "_json.c"
        HEAP[$chunks]=$11; //@line 426 "_json.c"
        var $12=HEAP[$chunks]; //@line 427 "_json.c"
        var $13=($12)==0; //@line 427 "_json.c"
        if ($13) { __label__ = 66; break; } else { __label__ = 1; break; } //@line 427 "_json.c"
      case 1: // $bb
        var $14=HEAP[$end_addr]; //@line 430 "_json.c"
        var $15=((($14))|0) < 0; //@line 430 "_json.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 430 "_json.c"
      case 2: // $bb1
        var $16=HEAP[$len]; //@line 430 "_json.c"
        var $17=HEAP[$end_addr]; //@line 430 "_json.c"
        var $18=((($16))|0) <= ((($17))|0); //@line 430 "_json.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 430 "_json.c"
      case 3: // $bb2
        var $19=HEAP[_PyExc_ValueError]; //@line 431 "_json.c"
        _PyErr_SetString($19, ((__str20)&4294967295)); //@line 431 "_json.c"
        __label__ = 66; break; //@line 431 "_json.c"
      case 4: // $bb3
        HEAP[$c]=0; //@line 436 "_json.c"
        HEAP[$chunk]=0; //@line 437 "_json.c"
        var $20=HEAP[$end_addr]; //@line 438 "_json.c"
        HEAP[$next]=$20; //@line 438 "_json.c"
        __label__ = 11; break; //@line 438 "_json.c"
      case 5: // $bb4
        var $21=HEAP[$buf]; //@line 439 "_json.c"
        var $22=HEAP[$next]; //@line 439 "_json.c"
        var $23=(($21+$22)&4294967295); //@line 439 "_json.c"
        var $24=HEAP[$23]; //@line 439 "_json.c"
        var $25=unSign(($24), 8, 0); //@line 439 "_json.c"
        HEAP[$c]=$25; //@line 439 "_json.c"
        var $26=HEAP[$c]; //@line 440 "_json.c"
        var $27=reSign(($26), 16, 0)==34; //@line 440 "_json.c"
        if ($27) { __label__ = 12; break; } else { __label__ = 6; break; } //@line 440 "_json.c"
      case 6: // $bb5
        var $28=HEAP[$c]; //@line 440 "_json.c"
        var $29=reSign(($28), 16, 0)==92; //@line 440 "_json.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 7; break; } //@line 440 "_json.c"
      case 7: // $bb6
        var $30=HEAP[$strict_addr]; //@line 443 "_json.c"
        var $31=((($30))|0)!=0; //@line 443 "_json.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 443 "_json.c"
      case 8: // $bb7
        var $32=HEAP[$c]; //@line 443 "_json.c"
        var $33=unSign(($32), 16, 0) <= 31; //@line 443 "_json.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 443 "_json.c"
      case 9: // $bb8
        var $34=HEAP[$pystr_addr]; //@line 444 "_json.c"
        var $35=HEAP[$next]; //@line 444 "_json.c"
        _raise_errmsg(((__str21)&4294967295), $34, $35); //@line 444 "_json.c"
        __label__ = 66; break; //@line 444 "_json.c"
      case 10: // $bb9
        var $36=HEAP[$next]; //@line 438 "_json.c"
        var $37=((($36) + 1)&4294967295); //@line 438 "_json.c"
        HEAP[$next]=$37; //@line 438 "_json.c"
        __label__ = 11; break; //@line 438 "_json.c"
      case 11: // $bb10
        var $38=HEAP[$next]; //@line 438 "_json.c"
        var $39=HEAP[$len]; //@line 438 "_json.c"
        var $40=((($38))|0) < ((($39))|0); //@line 438 "_json.c"
        if ($40) { __label__ = 5; break; } else { __label__ = 12; break; } //@line 438 "_json.c"
      case 12: // $bb11
        var $41=HEAP[$c]; //@line 448 "_json.c"
        var $42=reSign(($41), 16, 0)!=34; //@line 448 "_json.c"
        if ($42) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 448 "_json.c"
      case 13: // $bb12
        var $43=HEAP[$c]; //@line 448 "_json.c"
        var $44=reSign(($43), 16, 0)!=92; //@line 448 "_json.c"
        if ($44) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 448 "_json.c"
      case 14: // $bb13
        var $45=HEAP[$pystr_addr]; //@line 449 "_json.c"
        var $46=HEAP[$begin]; //@line 449 "_json.c"
        _raise_errmsg(((__str22)&4294967295), $45, $46); //@line 449 "_json.c"
        __label__ = 66; break; //@line 449 "_json.c"
      case 15: // $bb14
        var $47=HEAP[$next]; //@line 453 "_json.c"
        var $48=HEAP[$end_addr]; //@line 453 "_json.c"
        var $49=((($47))|0)!=((($48))|0); //@line 453 "_json.c"
        if ($49) { __label__ = 16; break; } else { __label__ = 26; break; } //@line 453 "_json.c"
      case 16: // $bb15
        var $50=HEAP[$next]; //@line 454 "_json.c"
        var $51=HEAP[$end_addr]; //@line 454 "_json.c"
        var $52=((($50) - ($51))&4294967295); //@line 454 "_json.c"
        var $53=HEAP[$buf]; //@line 454 "_json.c"
        var $54=HEAP[$end_addr]; //@line 454 "_json.c"
        var $55=(($53+$54)&4294967295); //@line 454 "_json.c"
        var $56=_PyString_FromStringAndSize($55, $52); //@line 454 "_json.c"
        HEAP[$strchunk]=$56; //@line 454 "_json.c"
        var $57=HEAP[$strchunk]; //@line 455 "_json.c"
        var $58=($57)==0; //@line 455 "_json.c"
        if ($58) { __label__ = 66; break; } else { __label__ = 17; break; } //@line 455 "_json.c"
      case 17: // $bb16
        var $59=HEAP[$strchunk]; //@line 458 "_json.c"
        var $60=HEAP[$encoding_addr]; //@line 458 "_json.c"
        var $61=_PyUnicodeUCS2_FromEncodedObject($59, $60, 0); //@line 458 "_json.c"
        HEAP[$chunk]=$61; //@line 458 "_json.c"
        var $62=HEAP[$strchunk]; //@line 459 "_json.c"
        var $63=(($62)&4294967295); //@line 459 "_json.c"
        var $64=HEAP[$63]; //@line 459 "_json.c"
        var $65=((($64) - 1)&4294967295); //@line 459 "_json.c"
        var $66=HEAP[$strchunk]; //@line 459 "_json.c"
        var $67=(($66)&4294967295); //@line 459 "_json.c"
        HEAP[$67]=$65; //@line 459 "_json.c"
        var $68=HEAP[$strchunk]; //@line 459 "_json.c"
        var $69=(($68)&4294967295); //@line 459 "_json.c"
        var $70=HEAP[$69]; //@line 459 "_json.c"
        var $71=((($70))|0)==0; //@line 459 "_json.c"
        if ($71) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 459 "_json.c"
      case 18: // $bb17
        var $72=HEAP[$strchunk]; //@line 459 "_json.c"
        var $73=(($72+4)&4294967295); //@line 459 "_json.c"
        var $74=HEAP[$73]; //@line 459 "_json.c"
        var $75=(($74+24)&4294967295); //@line 459 "_json.c"
        var $76=HEAP[$75]; //@line 459 "_json.c"
        var $77=HEAP[$strchunk]; //@line 459 "_json.c"
        FUNCTION_TABLE[$76]($77); //@line 459 "_json.c"
        __label__ = 19; break; //@line 459 "_json.c"
      case 19: // $bb18
        var $78=HEAP[$chunk]; //@line 460 "_json.c"
        var $79=($78)==0; //@line 460 "_json.c"
        if ($79) { __label__ = 66; break; } else { __label__ = 20; break; } //@line 460 "_json.c"
      case 20: // $bb19
        var $80=HEAP[$chunks]; //@line 463 "_json.c"
        var $81=HEAP[$chunk]; //@line 463 "_json.c"
        var $82=_PyList_Append($80, $81); //@line 463 "_json.c"
        var $83=((($82))|0)!=0; //@line 463 "_json.c"
        if ($83) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 463 "_json.c"
      case 21: // $bb20
        var $84=HEAP[$chunk]; //@line 464 "_json.c"
        var $85=(($84)&4294967295); //@line 464 "_json.c"
        var $86=HEAP[$85]; //@line 464 "_json.c"
        var $87=((($86) - 1)&4294967295); //@line 464 "_json.c"
        var $88=HEAP[$chunk]; //@line 464 "_json.c"
        var $89=(($88)&4294967295); //@line 464 "_json.c"
        HEAP[$89]=$87; //@line 464 "_json.c"
        var $90=HEAP[$chunk]; //@line 464 "_json.c"
        var $91=(($90)&4294967295); //@line 464 "_json.c"
        var $92=HEAP[$91]; //@line 464 "_json.c"
        var $93=((($92))|0)==0; //@line 464 "_json.c"
        if ($93) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 464 "_json.c"
      case 22: // $bb21
        var $94=HEAP[$chunk]; //@line 464 "_json.c"
        var $95=(($94+4)&4294967295); //@line 464 "_json.c"
        var $96=HEAP[$95]; //@line 464 "_json.c"
        var $97=(($96+24)&4294967295); //@line 464 "_json.c"
        var $98=HEAP[$97]; //@line 464 "_json.c"
        var $99=HEAP[$chunk]; //@line 464 "_json.c"
        FUNCTION_TABLE[$98]($99); //@line 464 "_json.c"
        __label__ = 23; break; //@line 464 "_json.c"
      case 23: // $bb22
        __label__ = 66; break; //@line 464 "_json.c"
      case 24: // $bb23
        var $100=HEAP[$chunk]; //@line 467 "_json.c"
        var $101=(($100)&4294967295); //@line 467 "_json.c"
        var $102=HEAP[$101]; //@line 467 "_json.c"
        var $103=((($102) - 1)&4294967295); //@line 467 "_json.c"
        var $104=HEAP[$chunk]; //@line 467 "_json.c"
        var $105=(($104)&4294967295); //@line 467 "_json.c"
        HEAP[$105]=$103; //@line 467 "_json.c"
        var $106=HEAP[$chunk]; //@line 467 "_json.c"
        var $107=(($106)&4294967295); //@line 467 "_json.c"
        var $108=HEAP[$107]; //@line 467 "_json.c"
        var $109=((($108))|0)==0; //@line 467 "_json.c"
        if ($109) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 467 "_json.c"
      case 25: // $bb24
        var $110=HEAP[$chunk]; //@line 467 "_json.c"
        var $111=(($110+4)&4294967295); //@line 467 "_json.c"
        var $112=HEAP[$111]; //@line 467 "_json.c"
        var $113=(($112+24)&4294967295); //@line 467 "_json.c"
        var $114=HEAP[$113]; //@line 467 "_json.c"
        var $115=HEAP[$chunk]; //@line 467 "_json.c"
        FUNCTION_TABLE[$114]($115); //@line 467 "_json.c"
        __label__ = 26; break; //@line 467 "_json.c"
      case 26: // $bb25
        var $116=HEAP[$next]; //@line 469 "_json.c"
        var $117=((($116) + 1)&4294967295); //@line 469 "_json.c"
        HEAP[$next]=$117; //@line 469 "_json.c"
        var $118=HEAP[$c]; //@line 470 "_json.c"
        var $119=reSign(($118), 16, 0)==34; //@line 470 "_json.c"
        if ($119) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 470 "_json.c"
      case 27: // $bb26
        var $120=HEAP[$next]; //@line 471 "_json.c"
        HEAP[$end_addr]=$120; //@line 471 "_json.c"
        var $121=HEAP[$chunks]; //@line 580 "_json.c"
        var $122=_join_list_unicode($121); //@line 580 "_json.c"
        HEAP[$rval]=$122; //@line 580 "_json.c"
        var $123=HEAP[$rval]; //@line 581 "_json.c"
        var $124=($123)==0; //@line 581 "_json.c"
        if ($124) { __label__ = 66; break; } else { __label__ = 62; break; } //@line 581 "_json.c"
      case 28: // $bb27
        var $125=HEAP[$next]; //@line 474 "_json.c"
        var $126=HEAP[$len]; //@line 474 "_json.c"
        var $127=((($125))|0)==((($126))|0); //@line 474 "_json.c"
        if ($127) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 474 "_json.c"
      case 29: // $bb28
        var $128=HEAP[$pystr_addr]; //@line 475 "_json.c"
        var $129=HEAP[$begin]; //@line 475 "_json.c"
        _raise_errmsg(((__str22)&4294967295), $128, $129); //@line 475 "_json.c"
        __label__ = 66; break; //@line 475 "_json.c"
      case 30: // $bb29
        var $130=HEAP[$buf]; //@line 478 "_json.c"
        var $131=HEAP[$next]; //@line 478 "_json.c"
        var $132=(($130+$131)&4294967295); //@line 478 "_json.c"
        var $133=HEAP[$132]; //@line 478 "_json.c"
        var $134=reSign(($133), 8, 0); //@line 478 "_json.c"
        HEAP[$c]=$134; //@line 478 "_json.c"
        var $135=HEAP[$c]; //@line 479 "_json.c"
        var $136=reSign(($135), 16, 0)!=117; //@line 479 "_json.c"
        if ($136) { __label__ = 31; break; } else { __label__ = 44; break; } //@line 479 "_json.c"
      case 31: // $bb30
        var $137=HEAP[$next]; //@line 481 "_json.c"
        var $138=((($137) + 1)&4294967295); //@line 481 "_json.c"
        HEAP[$end_addr]=$138; //@line 481 "_json.c"
        var $139=HEAP[$c]; //@line 482 "_json.c"
        var $140=unSign(($139), 16, 0); //@line 482 "_json.c"
        if ($140 == 34) {
          __label__ = 32; break;
        }
        else if ($140 == 47) {
          __label__ = 34; break;
        }
        else if ($140 == 92) {
          __label__ = 33; break;
        }
        else if ($140 == 98) {
          __label__ = 35; break;
        }
        else if ($140 == 102) {
          __label__ = 36; break;
        }
        else if ($140 == 110) {
          __label__ = 37; break;
        }
        else if ($140 == 114) {
          __label__ = 38; break;
        }
        else if ($140 == 116) {
          __label__ = 39; break;
        }
        else {
        __label__ = 40; break;
        }
        
      case 32: // $bb31
        __label__ = 41; break; //@line 482 "_json.c"
      case 33: // $bb32
        __label__ = 41; break; //@line 482 "_json.c"
      case 34: // $bb33
        __label__ = 41; break; //@line 482 "_json.c"
      case 35: // $bb34
        HEAP[$c]=8; //@line 486 "_json.c"
        __label__ = 41; break; //@line 486 "_json.c"
      case 36: // $bb35
        HEAP[$c]=12; //@line 487 "_json.c"
        __label__ = 41; break; //@line 487 "_json.c"
      case 37: // $bb36
        HEAP[$c]=10; //@line 488 "_json.c"
        __label__ = 41; break; //@line 488 "_json.c"
      case 38: // $bb37
        HEAP[$c]=13; //@line 489 "_json.c"
        __label__ = 41; break; //@line 489 "_json.c"
      case 39: // $bb38
        HEAP[$c]=9; //@line 490 "_json.c"
        __label__ = 41; break; //@line 490 "_json.c"
      case 40: // $bb39
        HEAP[$c]=0; //@line 491 "_json.c"
        __label__ = 41; break; //@line 491 "_json.c"
      case 41: // $bb40
        var $141=HEAP[$c]; //@line 493 "_json.c"
        var $142=reSign(($141), 16, 0)==0; //@line 493 "_json.c"
        if ($142) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 493 "_json.c"
      case 42: // $bb41
        var $143=HEAP[$end_addr]; //@line 494 "_json.c"
        var $144=((($143) - 2)&4294967295); //@line 494 "_json.c"
        var $145=HEAP[$pystr_addr]; //@line 494 "_json.c"
        _raise_errmsg(((__str23)&4294967295), $145, $144); //@line 494 "_json.c"
        __label__ = 66; break; //@line 494 "_json.c"
      case 43: // $bb42
        __label__ = 54; break; //@line 494 "_json.c"
      case 44: // $bb43
        HEAP[$c]=0; //@line 499 "_json.c"
        var $146=HEAP[$next]; //@line 500 "_json.c"
        var $147=((($146) + 1)&4294967295); //@line 500 "_json.c"
        HEAP[$next]=$147; //@line 500 "_json.c"
        var $148=HEAP[$next]; //@line 501 "_json.c"
        var $149=((($148) + 4)&4294967295); //@line 501 "_json.c"
        HEAP[$end_addr]=$149; //@line 501 "_json.c"
        var $150=HEAP[$end_addr]; //@line 502 "_json.c"
        var $151=HEAP[$len]; //@line 502 "_json.c"
        var $152=((($150))|0) >= ((($151))|0); //@line 502 "_json.c"
        if ($152) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 502 "_json.c"
      case 45: // $bb44
        var $153=HEAP[$next]; //@line 503 "_json.c"
        var $154=((($153) - 1)&4294967295); //@line 503 "_json.c"
        var $155=HEAP[$pystr_addr]; //@line 503 "_json.c"
        _raise_errmsg(((__str24)&4294967295), $155, $154); //@line 503 "_json.c"
        __label__ = 66; break; //@line 503 "_json.c"
      case 46: // $bb45
        __label__ = 53; break; //@line 503 "_json.c"
      case 47: // $bb46
        var $156=HEAP[$buf]; //@line 508 "_json.c"
        var $157=HEAP[$next]; //@line 508 "_json.c"
        var $158=(($156+$157)&4294967295); //@line 508 "_json.c"
        var $159=HEAP[$158]; //@line 508 "_json.c"
        var $160=reSign(($159), 8, 0); //@line 508 "_json.c"
        HEAP[$digit]=$160; //@line 508 "_json.c"
        var $161=HEAP[$c]; //@line 509 "_json.c"
        var $162=($161) << 4; //@line 509 "_json.c"
        HEAP[$c]=$162; //@line 509 "_json.c"
        var $163=HEAP[$digit]; //@line 510 "_json.c"
        var $164=unSign(($163), 16, 0); //@line 510 "_json.c"
        if ($164 == 48) {
          __label__ = 48; break;
        }
        else if ($164 == 49) {
          __label__ = 48; break;
        }
        else if ($164 == 50) {
          __label__ = 48; break;
        }
        else if ($164 == 51) {
          __label__ = 48; break;
        }
        else if ($164 == 52) {
          __label__ = 48; break;
        }
        else if ($164 == 53) {
          __label__ = 48; break;
        }
        else if ($164 == 54) {
          __label__ = 48; break;
        }
        else if ($164 == 55) {
          __label__ = 48; break;
        }
        else if ($164 == 56) {
          __label__ = 48; break;
        }
        else if ($164 == 57) {
          __label__ = 48; break;
        }
        else if ($164 == 65) {
          __label__ = 50; break;
        }
        else if ($164 == 66) {
          __label__ = 50; break;
        }
        else if ($164 == 67) {
          __label__ = 50; break;
        }
        else if ($164 == 68) {
          __label__ = 50; break;
        }
        else if ($164 == 69) {
          __label__ = 50; break;
        }
        else if ($164 == 70) {
          __label__ = 50; break;
        }
        else if ($164 == 97) {
          __label__ = 49; break;
        }
        else if ($164 == 98) {
          __label__ = 49; break;
        }
        else if ($164 == 99) {
          __label__ = 49; break;
        }
        else if ($164 == 100) {
          __label__ = 49; break;
        }
        else if ($164 == 101) {
          __label__ = 49; break;
        }
        else if ($164 == 102) {
          __label__ = 49; break;
        }
        else {
        __label__ = 51; break;
        }
        
      case 48: // $bb47
        var $165=HEAP[$digit]; //@line 513 "_json.c"
        var $166=((($165) - 48)&65535); //@line 513 "_json.c"
        var $167=HEAP[$c]; //@line 513 "_json.c"
        var $168=($166) | ($167); //@line 513 "_json.c"
        HEAP[$c]=$168; //@line 513 "_json.c"
        __label__ = 52; break; //@line 513 "_json.c"
      case 49: // $bb48
        var $169=HEAP[$digit]; //@line 516 "_json.c"
        var $170=((($169) - 87)&65535); //@line 516 "_json.c"
        var $171=HEAP[$c]; //@line 516 "_json.c"
        var $172=($170) | ($171); //@line 516 "_json.c"
        HEAP[$c]=$172; //@line 516 "_json.c"
        __label__ = 52; break; //@line 516 "_json.c"
      case 50: // $bb49
        var $173=HEAP[$digit]; //@line 519 "_json.c"
        var $174=((($173) - 55)&65535); //@line 519 "_json.c"
        var $175=HEAP[$c]; //@line 519 "_json.c"
        var $176=($174) | ($175); //@line 519 "_json.c"
        HEAP[$c]=$176; //@line 519 "_json.c"
        __label__ = 52; break; //@line 519 "_json.c"
      case 51: // $bb50
        var $177=HEAP[$end_addr]; //@line 521 "_json.c"
        var $178=((($177) - 5)&4294967295); //@line 521 "_json.c"
        var $179=HEAP[$pystr_addr]; //@line 521 "_json.c"
        _raise_errmsg(((__str24)&4294967295), $179, $178); //@line 521 "_json.c"
        __label__ = 66; break; //@line 521 "_json.c"
      case 52: // $bb51
        var $180=HEAP[$next]; //@line 507 "_json.c"
        var $181=((($180) + 1)&4294967295); //@line 507 "_json.c"
        HEAP[$next]=$181; //@line 507 "_json.c"
        __label__ = 53; break; //@line 507 "_json.c"
      case 53: // $bb52
        var $182=HEAP[$next]; //@line 507 "_json.c"
        var $183=HEAP[$end_addr]; //@line 507 "_json.c"
        var $184=((($182))|0) < ((($183))|0); //@line 507 "_json.c"
        if ($184) { __label__ = 47; break; } else { __label__ = 54; break; } //@line 507 "_json.c"
      case 54: // $bb53
        var $185=_PyUnicodeUCS2_FromUnicode($c, 1); //@line 569 "_json.c"
        HEAP[$chunk]=$185; //@line 569 "_json.c"
        var $186=HEAP[$chunk]; //@line 570 "_json.c"
        var $187=($186)==0; //@line 570 "_json.c"
        if ($187) { __label__ = 66; break; } else { __label__ = 55; break; } //@line 570 "_json.c"
      case 55: // $bb54
        var $188=HEAP[$chunks]; //@line 573 "_json.c"
        var $189=HEAP[$chunk]; //@line 573 "_json.c"
        var $190=_PyList_Append($188, $189); //@line 573 "_json.c"
        var $191=((($190))|0)!=0; //@line 573 "_json.c"
        if ($191) { __label__ = 56; break; } else { __label__ = 59; break; } //@line 573 "_json.c"
      case 56: // $bb55
        var $192=HEAP[$chunk]; //@line 574 "_json.c"
        var $193=(($192)&4294967295); //@line 574 "_json.c"
        var $194=HEAP[$193]; //@line 574 "_json.c"
        var $195=((($194) - 1)&4294967295); //@line 574 "_json.c"
        var $196=HEAP[$chunk]; //@line 574 "_json.c"
        var $197=(($196)&4294967295); //@line 574 "_json.c"
        HEAP[$197]=$195; //@line 574 "_json.c"
        var $198=HEAP[$chunk]; //@line 574 "_json.c"
        var $199=(($198)&4294967295); //@line 574 "_json.c"
        var $200=HEAP[$199]; //@line 574 "_json.c"
        var $201=((($200))|0)==0; //@line 574 "_json.c"
        if ($201) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 574 "_json.c"
      case 57: // $bb56
        var $202=HEAP[$chunk]; //@line 574 "_json.c"
        var $203=(($202+4)&4294967295); //@line 574 "_json.c"
        var $204=HEAP[$203]; //@line 574 "_json.c"
        var $205=(($204+24)&4294967295); //@line 574 "_json.c"
        var $206=HEAP[$205]; //@line 574 "_json.c"
        var $207=HEAP[$chunk]; //@line 574 "_json.c"
        FUNCTION_TABLE[$206]($207); //@line 574 "_json.c"
        __label__ = 58; break; //@line 574 "_json.c"
      case 58: // $bb57
        __label__ = 66; break; //@line 574 "_json.c"
      case 59: // $bb58
        var $208=HEAP[$chunk]; //@line 577 "_json.c"
        var $209=(($208)&4294967295); //@line 577 "_json.c"
        var $210=HEAP[$209]; //@line 577 "_json.c"
        var $211=((($210) - 1)&4294967295); //@line 577 "_json.c"
        var $212=HEAP[$chunk]; //@line 577 "_json.c"
        var $213=(($212)&4294967295); //@line 577 "_json.c"
        HEAP[$213]=$211; //@line 577 "_json.c"
        var $214=HEAP[$chunk]; //@line 577 "_json.c"
        var $215=(($214)&4294967295); //@line 577 "_json.c"
        var $216=HEAP[$215]; //@line 577 "_json.c"
        var $217=((($216))|0)==0; //@line 577 "_json.c"
        if ($217) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 577 "_json.c"
      case 60: // $bb59
        var $218=HEAP[$chunk]; //@line 577 "_json.c"
        var $219=(($218+4)&4294967295); //@line 577 "_json.c"
        var $220=HEAP[$219]; //@line 577 "_json.c"
        var $221=(($220+24)&4294967295); //@line 577 "_json.c"
        var $222=HEAP[$221]; //@line 577 "_json.c"
        var $223=HEAP[$chunk]; //@line 577 "_json.c"
        FUNCTION_TABLE[$222]($223); //@line 577 "_json.c"
        __label__ = 61; break; //@line 577 "_json.c"
      case 61: // $bb60
        __label__ = 4; break; //@line 577 "_json.c"
      case 62: // $bb61
        var $224=HEAP[$chunks]; //@line 584 "_json.c"
        var $225=($224)!=0; //@line 584 "_json.c"
        if ($225) { __label__ = 63; break; } else { __label__ = 65; break; } //@line 584 "_json.c"
      case 63: // $bb62
        var $226=HEAP[$chunks]; //@line 584 "_json.c"
        HEAP[$_py_tmp]=$226; //@line 584 "_json.c"
        HEAP[$chunks]=0; //@line 584 "_json.c"
        var $227=HEAP[$_py_tmp]; //@line 584 "_json.c"
        var $228=(($227)&4294967295); //@line 584 "_json.c"
        var $229=HEAP[$228]; //@line 584 "_json.c"
        var $230=((($229) - 1)&4294967295); //@line 584 "_json.c"
        var $231=HEAP[$_py_tmp]; //@line 584 "_json.c"
        var $232=(($231)&4294967295); //@line 584 "_json.c"
        HEAP[$232]=$230; //@line 584 "_json.c"
        var $233=HEAP[$_py_tmp]; //@line 584 "_json.c"
        var $234=(($233)&4294967295); //@line 584 "_json.c"
        var $235=HEAP[$234]; //@line 584 "_json.c"
        var $236=((($235))|0)==0; //@line 584 "_json.c"
        if ($236) { __label__ = 64; break; } else { __label__ = 65; break; } //@line 584 "_json.c"
      case 64: // $bb63
        var $237=HEAP[$_py_tmp]; //@line 584 "_json.c"
        var $238=(($237+4)&4294967295); //@line 584 "_json.c"
        var $239=HEAP[$238]; //@line 584 "_json.c"
        var $240=(($239+24)&4294967295); //@line 584 "_json.c"
        var $241=HEAP[$240]; //@line 584 "_json.c"
        var $242=HEAP[$_py_tmp]; //@line 584 "_json.c"
        FUNCTION_TABLE[$241]($242); //@line 584 "_json.c"
        __label__ = 65; break; //@line 584 "_json.c"
      case 65: // $bb64
        var $243=HEAP[$next_end_ptr_addr]; //@line 585 "_json.c"
        var $244=HEAP[$end_addr]; //@line 585 "_json.c"
        HEAP[$243]=$244; //@line 585 "_json.c"
        var $245=HEAP[$rval]; //@line 586 "_json.c"
        HEAP[$0]=$245; //@line 586 "_json.c"
        __label__ = 70; break; //@line 586 "_json.c"
      case 66: // $bail
        var $246=HEAP[$next_end_ptr_addr]; //@line 588 "_json.c"
        HEAP[$246]=-1; //@line 588 "_json.c"
        var $247=HEAP[$chunks]; //@line 589 "_json.c"
        var $248=($247)!=0; //@line 589 "_json.c"
        if ($248) { __label__ = 67; break; } else { __label__ = 69; break; } //@line 589 "_json.c"
      case 67: // $bb65
        var $249=HEAP[$chunks]; //@line 589 "_json.c"
        var $250=(($249)&4294967295); //@line 589 "_json.c"
        var $251=HEAP[$250]; //@line 589 "_json.c"
        var $252=((($251) - 1)&4294967295); //@line 589 "_json.c"
        var $253=HEAP[$chunks]; //@line 589 "_json.c"
        var $254=(($253)&4294967295); //@line 589 "_json.c"
        HEAP[$254]=$252; //@line 589 "_json.c"
        var $255=HEAP[$chunks]; //@line 589 "_json.c"
        var $256=(($255)&4294967295); //@line 589 "_json.c"
        var $257=HEAP[$256]; //@line 589 "_json.c"
        var $258=((($257))|0)==0; //@line 589 "_json.c"
        if ($258) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 589 "_json.c"
      case 68: // $bb66
        var $259=HEAP[$chunks]; //@line 589 "_json.c"
        var $260=(($259+4)&4294967295); //@line 589 "_json.c"
        var $261=HEAP[$260]; //@line 589 "_json.c"
        var $262=(($261+24)&4294967295); //@line 589 "_json.c"
        var $263=HEAP[$262]; //@line 589 "_json.c"
        var $264=HEAP[$chunks]; //@line 589 "_json.c"
        FUNCTION_TABLE[$263]($264); //@line 589 "_json.c"
        __label__ = 69; break; //@line 589 "_json.c"
      case 69: // $bb67
        HEAP[$0]=0; //@line 590 "_json.c"
        __label__ = 70; break; //@line 590 "_json.c"
      case 70: // $bb68
        var $265=HEAP[$0]; //@line 586 "_json.c"
        HEAP[$retval]=$265; //@line 586 "_json.c"
        __label__ = 71; break; //@line 586 "_json.c"
      case 71: // $return
        var $retval69=HEAP[$retval]; //@line 586 "_json.c"
        STACKTOP = __stackBase__;
        return $retval69; //@line 586 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanstring_unicode($pystr, $end, $strict, $next_end_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pystr_addr=__stackBase__;
        var $end_addr=__stackBase__+4;
        var $strict_addr=__stackBase__+8;
        var $next_end_ptr_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $rval=__stackBase__+24;
        var $len=__stackBase__+28;
        var $begin=__stackBase__+32;
        var $next=__stackBase__+36;
        var $buf=__stackBase__+40;
        var $chunks=__stackBase__+44;
        var $c=__stackBase__+48;
        var $chunk=__stackBase__+50;
        var $digit=__stackBase__+54;
        var $_alloca_point_=0;
        HEAP[$pystr_addr]=$pystr;
        HEAP[$end_addr]=$end;
        HEAP[$strict_addr]=$strict;
        HEAP[$next_end_ptr_addr]=$next_end_ptr;
        var $1=HEAP[$pystr_addr]; //@line 606 "_json.c"
        var $2=$1; //@line 606 "_json.c"
        var $3=(($2+8)&4294967295); //@line 606 "_json.c"
        var $4=HEAP[$3]; //@line 606 "_json.c"
        HEAP[$len]=$4; //@line 606 "_json.c"
        var $5=HEAP[$end_addr]; //@line 607 "_json.c"
        var $6=((($5) - 1)&4294967295); //@line 607 "_json.c"
        HEAP[$begin]=$6; //@line 607 "_json.c"
        var $7=HEAP[$pystr_addr]; //@line 609 "_json.c"
        var $8=$7; //@line 609 "_json.c"
        var $9=(($8+12)&4294967295); //@line 609 "_json.c"
        var $10=HEAP[$9]; //@line 609 "_json.c"
        HEAP[$buf]=$10; //@line 609 "_json.c"
        var $11=_PyList_New(0); //@line 610 "_json.c"
        HEAP[$chunks]=$11; //@line 610 "_json.c"
        var $12=HEAP[$chunks]; //@line 611 "_json.c"
        var $13=($12)==0; //@line 611 "_json.c"
        if ($13) { __label__ = 62; break; } else { __label__ = 1; break; } //@line 611 "_json.c"
      case 1: // $bb
        var $14=HEAP[$end_addr]; //@line 614 "_json.c"
        var $15=((($14))|0) < 0; //@line 614 "_json.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 614 "_json.c"
      case 2: // $bb1
        var $16=HEAP[$len]; //@line 614 "_json.c"
        var $17=HEAP[$end_addr]; //@line 614 "_json.c"
        var $18=((($16))|0) <= ((($17))|0); //@line 614 "_json.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 614 "_json.c"
      case 3: // $bb2
        var $19=HEAP[_PyExc_ValueError]; //@line 615 "_json.c"
        _PyErr_SetString($19, ((__str20)&4294967295)); //@line 615 "_json.c"
        __label__ = 62; break; //@line 615 "_json.c"
      case 4: // $bb3
        HEAP[$c]=0; //@line 620 "_json.c"
        HEAP[$chunk]=0; //@line 621 "_json.c"
        var $20=HEAP[$end_addr]; //@line 622 "_json.c"
        HEAP[$next]=$20; //@line 622 "_json.c"
        __label__ = 11; break; //@line 622 "_json.c"
      case 5: // $bb4
        var $21=HEAP[$buf]; //@line 623 "_json.c"
        var $22=HEAP[$next]; //@line 623 "_json.c"
        var $23=(($21+2*$22)&4294967295); //@line 623 "_json.c"
        var $24=HEAP[$23]; //@line 623 "_json.c"
        HEAP[$c]=$24; //@line 623 "_json.c"
        var $25=HEAP[$c]; //@line 624 "_json.c"
        var $26=reSign(($25), 16, 0)==34; //@line 624 "_json.c"
        if ($26) { __label__ = 12; break; } else { __label__ = 6; break; } //@line 624 "_json.c"
      case 6: // $bb5
        var $27=HEAP[$c]; //@line 624 "_json.c"
        var $28=reSign(($27), 16, 0)==92; //@line 624 "_json.c"
        if ($28) { __label__ = 12; break; } else { __label__ = 7; break; } //@line 624 "_json.c"
      case 7: // $bb6
        var $29=HEAP[$strict_addr]; //@line 627 "_json.c"
        var $30=((($29))|0)!=0; //@line 627 "_json.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 627 "_json.c"
      case 8: // $bb7
        var $31=HEAP[$c]; //@line 627 "_json.c"
        var $32=unSign(($31), 16, 0) <= 31; //@line 627 "_json.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 627 "_json.c"
      case 9: // $bb8
        var $33=HEAP[$pystr_addr]; //@line 628 "_json.c"
        var $34=HEAP[$next]; //@line 628 "_json.c"
        _raise_errmsg(((__str21)&4294967295), $33, $34); //@line 628 "_json.c"
        __label__ = 62; break; //@line 628 "_json.c"
      case 10: // $bb9
        var $35=HEAP[$next]; //@line 622 "_json.c"
        var $36=((($35) + 1)&4294967295); //@line 622 "_json.c"
        HEAP[$next]=$36; //@line 622 "_json.c"
        __label__ = 11; break; //@line 622 "_json.c"
      case 11: // $bb10
        var $37=HEAP[$next]; //@line 622 "_json.c"
        var $38=HEAP[$len]; //@line 622 "_json.c"
        var $39=((($37))|0) < ((($38))|0); //@line 622 "_json.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 12; break; } //@line 622 "_json.c"
      case 12: // $bb11
        var $40=HEAP[$c]; //@line 632 "_json.c"
        var $41=reSign(($40), 16, 0)!=34; //@line 632 "_json.c"
        if ($41) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 632 "_json.c"
      case 13: // $bb12
        var $42=HEAP[$c]; //@line 632 "_json.c"
        var $43=reSign(($42), 16, 0)!=92; //@line 632 "_json.c"
        if ($43) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 632 "_json.c"
      case 14: // $bb13
        var $44=HEAP[$pystr_addr]; //@line 633 "_json.c"
        var $45=HEAP[$begin]; //@line 633 "_json.c"
        _raise_errmsg(((__str22)&4294967295), $44, $45); //@line 633 "_json.c"
        __label__ = 62; break; //@line 633 "_json.c"
      case 15: // $bb14
        var $46=HEAP[$next]; //@line 637 "_json.c"
        var $47=HEAP[$end_addr]; //@line 637 "_json.c"
        var $48=((($46))|0)!=((($47))|0); //@line 637 "_json.c"
        if ($48) { __label__ = 16; break; } else { __label__ = 23; break; } //@line 637 "_json.c"
      case 16: // $bb15
        var $49=HEAP[$next]; //@line 638 "_json.c"
        var $50=HEAP[$end_addr]; //@line 638 "_json.c"
        var $51=((($49) - ($50))&4294967295); //@line 638 "_json.c"
        var $52=HEAP[$buf]; //@line 638 "_json.c"
        var $53=HEAP[$end_addr]; //@line 638 "_json.c"
        var $54=(($52+2*$53)&4294967295); //@line 638 "_json.c"
        var $55=_PyUnicodeUCS2_FromUnicode($54, $51); //@line 638 "_json.c"
        HEAP[$chunk]=$55; //@line 638 "_json.c"
        var $56=HEAP[$chunk]; //@line 639 "_json.c"
        var $57=($56)==0; //@line 639 "_json.c"
        if ($57) { __label__ = 62; break; } else { __label__ = 17; break; } //@line 639 "_json.c"
      case 17: // $bb16
        var $58=HEAP[$chunks]; //@line 642 "_json.c"
        var $59=HEAP[$chunk]; //@line 642 "_json.c"
        var $60=_PyList_Append($58, $59); //@line 642 "_json.c"
        var $61=((($60))|0)!=0; //@line 642 "_json.c"
        if ($61) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 642 "_json.c"
      case 18: // $bb17
        var $62=HEAP[$chunk]; //@line 643 "_json.c"
        var $63=(($62)&4294967295); //@line 643 "_json.c"
        var $64=HEAP[$63]; //@line 643 "_json.c"
        var $65=((($64) - 1)&4294967295); //@line 643 "_json.c"
        var $66=HEAP[$chunk]; //@line 643 "_json.c"
        var $67=(($66)&4294967295); //@line 643 "_json.c"
        HEAP[$67]=$65; //@line 643 "_json.c"
        var $68=HEAP[$chunk]; //@line 643 "_json.c"
        var $69=(($68)&4294967295); //@line 643 "_json.c"
        var $70=HEAP[$69]; //@line 643 "_json.c"
        var $71=((($70))|0)==0; //@line 643 "_json.c"
        if ($71) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 643 "_json.c"
      case 19: // $bb18
        var $72=HEAP[$chunk]; //@line 643 "_json.c"
        var $73=(($72+4)&4294967295); //@line 643 "_json.c"
        var $74=HEAP[$73]; //@line 643 "_json.c"
        var $75=(($74+24)&4294967295); //@line 643 "_json.c"
        var $76=HEAP[$75]; //@line 643 "_json.c"
        var $77=HEAP[$chunk]; //@line 643 "_json.c"
        FUNCTION_TABLE[$76]($77); //@line 643 "_json.c"
        __label__ = 20; break; //@line 643 "_json.c"
      case 20: // $bb19
        __label__ = 62; break; //@line 643 "_json.c"
      case 21: // $bb20
        var $78=HEAP[$chunk]; //@line 646 "_json.c"
        var $79=(($78)&4294967295); //@line 646 "_json.c"
        var $80=HEAP[$79]; //@line 646 "_json.c"
        var $81=((($80) - 1)&4294967295); //@line 646 "_json.c"
        var $82=HEAP[$chunk]; //@line 646 "_json.c"
        var $83=(($82)&4294967295); //@line 646 "_json.c"
        HEAP[$83]=$81; //@line 646 "_json.c"
        var $84=HEAP[$chunk]; //@line 646 "_json.c"
        var $85=(($84)&4294967295); //@line 646 "_json.c"
        var $86=HEAP[$85]; //@line 646 "_json.c"
        var $87=((($86))|0)==0; //@line 646 "_json.c"
        if ($87) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 646 "_json.c"
      case 22: // $bb21
        var $88=HEAP[$chunk]; //@line 646 "_json.c"
        var $89=(($88+4)&4294967295); //@line 646 "_json.c"
        var $90=HEAP[$89]; //@line 646 "_json.c"
        var $91=(($90+24)&4294967295); //@line 646 "_json.c"
        var $92=HEAP[$91]; //@line 646 "_json.c"
        var $93=HEAP[$chunk]; //@line 646 "_json.c"
        FUNCTION_TABLE[$92]($93); //@line 646 "_json.c"
        __label__ = 23; break; //@line 646 "_json.c"
      case 23: // $bb22
        var $94=HEAP[$next]; //@line 648 "_json.c"
        var $95=((($94) + 1)&4294967295); //@line 648 "_json.c"
        HEAP[$next]=$95; //@line 648 "_json.c"
        var $96=HEAP[$c]; //@line 649 "_json.c"
        var $97=reSign(($96), 16, 0)==34; //@line 649 "_json.c"
        if ($97) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 649 "_json.c"
      case 24: // $bb23
        var $98=HEAP[$next]; //@line 650 "_json.c"
        HEAP[$end_addr]=$98; //@line 650 "_json.c"
        var $99=HEAP[$chunks]; //@line 759 "_json.c"
        var $100=_join_list_unicode($99); //@line 759 "_json.c"
        HEAP[$rval]=$100; //@line 759 "_json.c"
        var $101=HEAP[$rval]; //@line 760 "_json.c"
        var $102=($101)==0; //@line 760 "_json.c"
        if ($102) { __label__ = 62; break; } else { __label__ = 59; break; } //@line 760 "_json.c"
      case 25: // $bb24
        var $103=HEAP[$next]; //@line 653 "_json.c"
        var $104=HEAP[$len]; //@line 653 "_json.c"
        var $105=((($103))|0)==((($104))|0); //@line 653 "_json.c"
        if ($105) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 653 "_json.c"
      case 26: // $bb25
        var $106=HEAP[$pystr_addr]; //@line 654 "_json.c"
        var $107=HEAP[$begin]; //@line 654 "_json.c"
        _raise_errmsg(((__str22)&4294967295), $106, $107); //@line 654 "_json.c"
        __label__ = 62; break; //@line 654 "_json.c"
      case 27: // $bb26
        var $108=HEAP[$buf]; //@line 657 "_json.c"
        var $109=HEAP[$next]; //@line 657 "_json.c"
        var $110=(($108+2*$109)&4294967295); //@line 657 "_json.c"
        var $111=HEAP[$110]; //@line 657 "_json.c"
        HEAP[$c]=$111; //@line 657 "_json.c"
        var $112=HEAP[$c]; //@line 658 "_json.c"
        var $113=reSign(($112), 16, 0)!=117; //@line 658 "_json.c"
        if ($113) { __label__ = 28; break; } else { __label__ = 41; break; } //@line 658 "_json.c"
      case 28: // $bb27
        var $114=HEAP[$next]; //@line 660 "_json.c"
        var $115=((($114) + 1)&4294967295); //@line 660 "_json.c"
        HEAP[$end_addr]=$115; //@line 660 "_json.c"
        var $116=HEAP[$c]; //@line 661 "_json.c"
        var $117=unSign(($116), 16, 0); //@line 661 "_json.c"
        if ($117 == 34) {
          __label__ = 29; break;
        }
        else if ($117 == 47) {
          __label__ = 31; break;
        }
        else if ($117 == 92) {
          __label__ = 30; break;
        }
        else if ($117 == 98) {
          __label__ = 32; break;
        }
        else if ($117 == 102) {
          __label__ = 33; break;
        }
        else if ($117 == 110) {
          __label__ = 34; break;
        }
        else if ($117 == 114) {
          __label__ = 35; break;
        }
        else if ($117 == 116) {
          __label__ = 36; break;
        }
        else {
        __label__ = 37; break;
        }
        
      case 29: // $bb28
        __label__ = 38; break; //@line 661 "_json.c"
      case 30: // $bb29
        __label__ = 38; break; //@line 661 "_json.c"
      case 31: // $bb30
        __label__ = 38; break; //@line 661 "_json.c"
      case 32: // $bb31
        HEAP[$c]=8; //@line 665 "_json.c"
        __label__ = 38; break; //@line 665 "_json.c"
      case 33: // $bb32
        HEAP[$c]=12; //@line 666 "_json.c"
        __label__ = 38; break; //@line 666 "_json.c"
      case 34: // $bb33
        HEAP[$c]=10; //@line 667 "_json.c"
        __label__ = 38; break; //@line 667 "_json.c"
      case 35: // $bb34
        HEAP[$c]=13; //@line 668 "_json.c"
        __label__ = 38; break; //@line 668 "_json.c"
      case 36: // $bb35
        HEAP[$c]=9; //@line 669 "_json.c"
        __label__ = 38; break; //@line 669 "_json.c"
      case 37: // $bb36
        HEAP[$c]=0; //@line 670 "_json.c"
        __label__ = 38; break; //@line 670 "_json.c"
      case 38: // $bb37
        var $118=HEAP[$c]; //@line 672 "_json.c"
        var $119=reSign(($118), 16, 0)==0; //@line 672 "_json.c"
        if ($119) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 672 "_json.c"
      case 39: // $bb38
        var $120=HEAP[$end_addr]; //@line 673 "_json.c"
        var $121=((($120) - 2)&4294967295); //@line 673 "_json.c"
        var $122=HEAP[$pystr_addr]; //@line 673 "_json.c"
        _raise_errmsg(((__str23)&4294967295), $122, $121); //@line 673 "_json.c"
        __label__ = 62; break; //@line 673 "_json.c"
      case 40: // $bb39
        __label__ = 51; break; //@line 673 "_json.c"
      case 41: // $bb40
        HEAP[$c]=0; //@line 678 "_json.c"
        var $123=HEAP[$next]; //@line 679 "_json.c"
        var $124=((($123) + 1)&4294967295); //@line 679 "_json.c"
        HEAP[$next]=$124; //@line 679 "_json.c"
        var $125=HEAP[$next]; //@line 680 "_json.c"
        var $126=((($125) + 4)&4294967295); //@line 680 "_json.c"
        HEAP[$end_addr]=$126; //@line 680 "_json.c"
        var $127=HEAP[$end_addr]; //@line 681 "_json.c"
        var $128=HEAP[$len]; //@line 681 "_json.c"
        var $129=((($127))|0) >= ((($128))|0); //@line 681 "_json.c"
        if ($129) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 681 "_json.c"
      case 42: // $bb41
        var $130=HEAP[$next]; //@line 682 "_json.c"
        var $131=((($130) - 1)&4294967295); //@line 682 "_json.c"
        var $132=HEAP[$pystr_addr]; //@line 682 "_json.c"
        _raise_errmsg(((__str24)&4294967295), $132, $131); //@line 682 "_json.c"
        __label__ = 62; break; //@line 682 "_json.c"
      case 43: // $bb42
        __label__ = 50; break; //@line 682 "_json.c"
      case 44: // $bb43
        var $133=HEAP[$buf]; //@line 687 "_json.c"
        var $134=HEAP[$next]; //@line 687 "_json.c"
        var $135=(($133+2*$134)&4294967295); //@line 687 "_json.c"
        var $136=HEAP[$135]; //@line 687 "_json.c"
        HEAP[$digit]=$136; //@line 687 "_json.c"
        var $137=HEAP[$c]; //@line 688 "_json.c"
        var $138=($137) << 4; //@line 688 "_json.c"
        HEAP[$c]=$138; //@line 688 "_json.c"
        var $139=HEAP[$digit]; //@line 689 "_json.c"
        var $140=unSign(($139), 16, 0); //@line 689 "_json.c"
        if ($140 == 48) {
          __label__ = 45; break;
        }
        else if ($140 == 49) {
          __label__ = 45; break;
        }
        else if ($140 == 50) {
          __label__ = 45; break;
        }
        else if ($140 == 51) {
          __label__ = 45; break;
        }
        else if ($140 == 52) {
          __label__ = 45; break;
        }
        else if ($140 == 53) {
          __label__ = 45; break;
        }
        else if ($140 == 54) {
          __label__ = 45; break;
        }
        else if ($140 == 55) {
          __label__ = 45; break;
        }
        else if ($140 == 56) {
          __label__ = 45; break;
        }
        else if ($140 == 57) {
          __label__ = 45; break;
        }
        else if ($140 == 65) {
          __label__ = 47; break;
        }
        else if ($140 == 66) {
          __label__ = 47; break;
        }
        else if ($140 == 67) {
          __label__ = 47; break;
        }
        else if ($140 == 68) {
          __label__ = 47; break;
        }
        else if ($140 == 69) {
          __label__ = 47; break;
        }
        else if ($140 == 70) {
          __label__ = 47; break;
        }
        else if ($140 == 97) {
          __label__ = 46; break;
        }
        else if ($140 == 98) {
          __label__ = 46; break;
        }
        else if ($140 == 99) {
          __label__ = 46; break;
        }
        else if ($140 == 100) {
          __label__ = 46; break;
        }
        else if ($140 == 101) {
          __label__ = 46; break;
        }
        else if ($140 == 102) {
          __label__ = 46; break;
        }
        else {
        __label__ = 48; break;
        }
        
      case 45: // $bb44
        var $141=HEAP[$digit]; //@line 692 "_json.c"
        var $142=((($141) - 48)&65535); //@line 692 "_json.c"
        var $143=HEAP[$c]; //@line 692 "_json.c"
        var $144=($142) | ($143); //@line 692 "_json.c"
        HEAP[$c]=$144; //@line 692 "_json.c"
        __label__ = 49; break; //@line 692 "_json.c"
      case 46: // $bb45
        var $145=HEAP[$digit]; //@line 695 "_json.c"
        var $146=((($145) - 87)&65535); //@line 695 "_json.c"
        var $147=HEAP[$c]; //@line 695 "_json.c"
        var $148=($146) | ($147); //@line 695 "_json.c"
        HEAP[$c]=$148; //@line 695 "_json.c"
        __label__ = 49; break; //@line 695 "_json.c"
      case 47: // $bb46
        var $149=HEAP[$digit]; //@line 698 "_json.c"
        var $150=((($149) - 55)&65535); //@line 698 "_json.c"
        var $151=HEAP[$c]; //@line 698 "_json.c"
        var $152=($150) | ($151); //@line 698 "_json.c"
        HEAP[$c]=$152; //@line 698 "_json.c"
        __label__ = 49; break; //@line 698 "_json.c"
      case 48: // $bb47
        var $153=HEAP[$end_addr]; //@line 700 "_json.c"
        var $154=((($153) - 5)&4294967295); //@line 700 "_json.c"
        var $155=HEAP[$pystr_addr]; //@line 700 "_json.c"
        _raise_errmsg(((__str24)&4294967295), $155, $154); //@line 700 "_json.c"
        __label__ = 62; break; //@line 700 "_json.c"
      case 49: // $bb48
        var $156=HEAP[$next]; //@line 686 "_json.c"
        var $157=((($156) + 1)&4294967295); //@line 686 "_json.c"
        HEAP[$next]=$157; //@line 686 "_json.c"
        __label__ = 50; break; //@line 686 "_json.c"
      case 50: // $bb49
        var $158=HEAP[$next]; //@line 686 "_json.c"
        var $159=HEAP[$end_addr]; //@line 686 "_json.c"
        var $160=((($158))|0) < ((($159))|0); //@line 686 "_json.c"
        if ($160) { __label__ = 44; break; } else { __label__ = 51; break; } //@line 686 "_json.c"
      case 51: // $bb50
        var $161=_PyUnicodeUCS2_FromUnicode($c, 1); //@line 748 "_json.c"
        HEAP[$chunk]=$161; //@line 748 "_json.c"
        var $162=HEAP[$chunk]; //@line 749 "_json.c"
        var $163=($162)==0; //@line 749 "_json.c"
        if ($163) { __label__ = 62; break; } else { __label__ = 52; break; } //@line 749 "_json.c"
      case 52: // $bb51
        var $164=HEAP[$chunks]; //@line 752 "_json.c"
        var $165=HEAP[$chunk]; //@line 752 "_json.c"
        var $166=_PyList_Append($164, $165); //@line 752 "_json.c"
        var $167=((($166))|0)!=0; //@line 752 "_json.c"
        if ($167) { __label__ = 53; break; } else { __label__ = 56; break; } //@line 752 "_json.c"
      case 53: // $bb52
        var $168=HEAP[$chunk]; //@line 753 "_json.c"
        var $169=(($168)&4294967295); //@line 753 "_json.c"
        var $170=HEAP[$169]; //@line 753 "_json.c"
        var $171=((($170) - 1)&4294967295); //@line 753 "_json.c"
        var $172=HEAP[$chunk]; //@line 753 "_json.c"
        var $173=(($172)&4294967295); //@line 753 "_json.c"
        HEAP[$173]=$171; //@line 753 "_json.c"
        var $174=HEAP[$chunk]; //@line 753 "_json.c"
        var $175=(($174)&4294967295); //@line 753 "_json.c"
        var $176=HEAP[$175]; //@line 753 "_json.c"
        var $177=((($176))|0)==0; //@line 753 "_json.c"
        if ($177) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 753 "_json.c"
      case 54: // $bb53
        var $178=HEAP[$chunk]; //@line 753 "_json.c"
        var $179=(($178+4)&4294967295); //@line 753 "_json.c"
        var $180=HEAP[$179]; //@line 753 "_json.c"
        var $181=(($180+24)&4294967295); //@line 753 "_json.c"
        var $182=HEAP[$181]; //@line 753 "_json.c"
        var $183=HEAP[$chunk]; //@line 753 "_json.c"
        FUNCTION_TABLE[$182]($183); //@line 753 "_json.c"
        __label__ = 55; break; //@line 753 "_json.c"
      case 55: // $bb54
        __label__ = 62; break; //@line 753 "_json.c"
      case 56: // $bb55
        var $184=HEAP[$chunk]; //@line 756 "_json.c"
        var $185=(($184)&4294967295); //@line 756 "_json.c"
        var $186=HEAP[$185]; //@line 756 "_json.c"
        var $187=((($186) - 1)&4294967295); //@line 756 "_json.c"
        var $188=HEAP[$chunk]; //@line 756 "_json.c"
        var $189=(($188)&4294967295); //@line 756 "_json.c"
        HEAP[$189]=$187; //@line 756 "_json.c"
        var $190=HEAP[$chunk]; //@line 756 "_json.c"
        var $191=(($190)&4294967295); //@line 756 "_json.c"
        var $192=HEAP[$191]; //@line 756 "_json.c"
        var $193=((($192))|0)==0; //@line 756 "_json.c"
        if ($193) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 756 "_json.c"
      case 57: // $bb56
        var $194=HEAP[$chunk]; //@line 756 "_json.c"
        var $195=(($194+4)&4294967295); //@line 756 "_json.c"
        var $196=HEAP[$195]; //@line 756 "_json.c"
        var $197=(($196+24)&4294967295); //@line 756 "_json.c"
        var $198=HEAP[$197]; //@line 756 "_json.c"
        var $199=HEAP[$chunk]; //@line 756 "_json.c"
        FUNCTION_TABLE[$198]($199); //@line 756 "_json.c"
        __label__ = 58; break; //@line 756 "_json.c"
      case 58: // $bb57
        __label__ = 4; break; //@line 756 "_json.c"
      case 59: // $bb58
        var $200=HEAP[$chunks]; //@line 763 "_json.c"
        var $201=(($200)&4294967295); //@line 763 "_json.c"
        var $202=HEAP[$201]; //@line 763 "_json.c"
        var $203=((($202) - 1)&4294967295); //@line 763 "_json.c"
        var $204=HEAP[$chunks]; //@line 763 "_json.c"
        var $205=(($204)&4294967295); //@line 763 "_json.c"
        HEAP[$205]=$203; //@line 763 "_json.c"
        var $206=HEAP[$chunks]; //@line 763 "_json.c"
        var $207=(($206)&4294967295); //@line 763 "_json.c"
        var $208=HEAP[$207]; //@line 763 "_json.c"
        var $209=((($208))|0)==0; //@line 763 "_json.c"
        if ($209) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 763 "_json.c"
      case 60: // $bb59
        var $210=HEAP[$chunks]; //@line 763 "_json.c"
        var $211=(($210+4)&4294967295); //@line 763 "_json.c"
        var $212=HEAP[$211]; //@line 763 "_json.c"
        var $213=(($212+24)&4294967295); //@line 763 "_json.c"
        var $214=HEAP[$213]; //@line 763 "_json.c"
        var $215=HEAP[$chunks]; //@line 763 "_json.c"
        FUNCTION_TABLE[$214]($215); //@line 763 "_json.c"
        __label__ = 61; break; //@line 763 "_json.c"
      case 61: // $bb60
        var $216=HEAP[$next_end_ptr_addr]; //@line 764 "_json.c"
        var $217=HEAP[$end_addr]; //@line 764 "_json.c"
        HEAP[$216]=$217; //@line 764 "_json.c"
        var $218=HEAP[$rval]; //@line 765 "_json.c"
        HEAP[$0]=$218; //@line 765 "_json.c"
        __label__ = 66; break; //@line 765 "_json.c"
      case 62: // $bail
        var $219=HEAP[$next_end_ptr_addr]; //@line 767 "_json.c"
        HEAP[$219]=-1; //@line 767 "_json.c"
        var $220=HEAP[$chunks]; //@line 768 "_json.c"
        var $221=($220)!=0; //@line 768 "_json.c"
        if ($221) { __label__ = 63; break; } else { __label__ = 65; break; } //@line 768 "_json.c"
      case 63: // $bb61
        var $222=HEAP[$chunks]; //@line 768 "_json.c"
        var $223=(($222)&4294967295); //@line 768 "_json.c"
        var $224=HEAP[$223]; //@line 768 "_json.c"
        var $225=((($224) - 1)&4294967295); //@line 768 "_json.c"
        var $226=HEAP[$chunks]; //@line 768 "_json.c"
        var $227=(($226)&4294967295); //@line 768 "_json.c"
        HEAP[$227]=$225; //@line 768 "_json.c"
        var $228=HEAP[$chunks]; //@line 768 "_json.c"
        var $229=(($228)&4294967295); //@line 768 "_json.c"
        var $230=HEAP[$229]; //@line 768 "_json.c"
        var $231=((($230))|0)==0; //@line 768 "_json.c"
        if ($231) { __label__ = 64; break; } else { __label__ = 65; break; } //@line 768 "_json.c"
      case 64: // $bb62
        var $232=HEAP[$chunks]; //@line 768 "_json.c"
        var $233=(($232+4)&4294967295); //@line 768 "_json.c"
        var $234=HEAP[$233]; //@line 768 "_json.c"
        var $235=(($234+24)&4294967295); //@line 768 "_json.c"
        var $236=HEAP[$235]; //@line 768 "_json.c"
        var $237=HEAP[$chunks]; //@line 768 "_json.c"
        FUNCTION_TABLE[$236]($237); //@line 768 "_json.c"
        __label__ = 65; break; //@line 768 "_json.c"
      case 65: // $bb63
        HEAP[$0]=0; //@line 769 "_json.c"
        __label__ = 66; break; //@line 769 "_json.c"
      case 66: // $bb64
        var $238=HEAP[$0]; //@line 765 "_json.c"
        HEAP[$retval]=$238; //@line 765 "_json.c"
        __label__ = 67; break; //@line 765 "_json.c"
      case 67: // $return
        var $retval65=HEAP[$retval]; //@line 765 "_json.c"
        STACKTOP = __stackBase__;
        return $retval65; //@line 765 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _py_scanstring($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pystr=__stackBase__+16;
        var $rval=__stackBase__+20;
        var $end=__stackBase__+24;
        var $next_end=__stackBase__+28;
        var $encoding=__stackBase__+32;
        var $strict=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$next_end]=-1; //@line 791 "_json.c"
        HEAP[$encoding]=0; //@line 792 "_json.c"
        HEAP[$strict]=1; //@line 793 "_json.c"
        var $1=HEAP[$args_addr]; //@line 794 "_json.c"
        var $2=_PyArg_ParseTuple($1, ((__str25)&4294967295), $pystr, (FUNCTION_TABLE_OFFSET + 4), $end, $encoding, $strict); //@line 794 "_json.c"
        var $3=((($2))|0)==0; //@line 794 "_json.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 794 "_json.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 795 "_json.c"
        __label__ = 10; break; //@line 795 "_json.c"
      case 2: // $bb1
        var $4=HEAP[$encoding]; //@line 797 "_json.c"
        var $5=($4)==0; //@line 797 "_json.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 797 "_json.c"
      case 3: // $bb2
        HEAP[$encoding]=((__str26)&4294967295); //@line 798 "_json.c"
        __label__ = 4; break; //@line 798 "_json.c"
      case 4: // $bb3
        var $6=HEAP[$pystr]; //@line 800 "_json.c"
        var $7=(($6+4)&4294967295); //@line 800 "_json.c"
        var $8=HEAP[$7]; //@line 800 "_json.c"
        var $9=(($8+84)&4294967295); //@line 800 "_json.c"
        var $10=HEAP[$9]; //@line 800 "_json.c"
        var $11=($10) & 134217728; //@line 800 "_json.c"
        var $12=((($11))|0)!=0; //@line 800 "_json.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 800 "_json.c"
      case 5: // $bb4
        var $13=HEAP[$strict]; //@line 801 "_json.c"
        var $14=HEAP[$encoding]; //@line 801 "_json.c"
        var $15=HEAP[$end]; //@line 801 "_json.c"
        var $16=HEAP[$pystr]; //@line 801 "_json.c"
        var $17=_scanstring_str($16, $15, $14, $13, $next_end); //@line 801 "_json.c"
        HEAP[$rval]=$17; //@line 801 "_json.c"
        __label__ = 9; break; //@line 801 "_json.c"
      case 6: // $bb5
        var $18=HEAP[$pystr]; //@line 803 "_json.c"
        var $19=(($18+4)&4294967295); //@line 803 "_json.c"
        var $20=HEAP[$19]; //@line 803 "_json.c"
        var $21=(($20+84)&4294967295); //@line 803 "_json.c"
        var $22=HEAP[$21]; //@line 803 "_json.c"
        var $23=($22) & 268435456; //@line 803 "_json.c"
        var $24=((($23))|0)!=0; //@line 803 "_json.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 803 "_json.c"
      case 7: // $bb6
        var $25=HEAP[$strict]; //@line 804 "_json.c"
        var $26=HEAP[$end]; //@line 804 "_json.c"
        var $27=HEAP[$pystr]; //@line 804 "_json.c"
        var $28=_scanstring_unicode($27, $26, $25, $next_end); //@line 804 "_json.c"
        HEAP[$rval]=$28; //@line 804 "_json.c"
        __label__ = 9; break; //@line 804 "_json.c"
      case 8: // $bb7
        var $29=HEAP[$pystr]; //@line 807 "_json.c"
        var $30=(($29+4)&4294967295); //@line 807 "_json.c"
        var $31=HEAP[$30]; //@line 807 "_json.c"
        var $32=(($31+12)&4294967295); //@line 807 "_json.c"
        var $33=HEAP[$32]; //@line 807 "_json.c"
        var $34=HEAP[_PyExc_TypeError]; //@line 807 "_json.c"
        var $35=_PyErr_Format($34, ((__str27)&4294967295), $33); //@line 807 "_json.c"
        HEAP[$0]=0; //@line 810 "_json.c"
        __label__ = 10; break; //@line 810 "_json.c"
      case 9: // $bb8
        var $36=HEAP[$next_end]; //@line 812 "_json.c"
        var $37=HEAP[$rval]; //@line 812 "_json.c"
        var $38=__build_rval_index_tuple($37, $36); //@line 812 "_json.c"
        HEAP[$0]=$38; //@line 812 "_json.c"
        __label__ = 10; break; //@line 812 "_json.c"
      case 10: // $bb9
        var $39=HEAP[$0]; //@line 795 "_json.c"
        HEAP[$retval]=$39; //@line 795 "_json.c"
        __label__ = 11; break; //@line 795 "_json.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 795 "_json.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 795 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _py_encode_basestring_ascii($self, $pystr) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $pystr_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$pystr_addr]=$pystr;
        var $1=HEAP[$pystr_addr]; //@line 826 "_json.c"
        var $2=(($1+4)&4294967295); //@line 826 "_json.c"
        var $3=HEAP[$2]; //@line 826 "_json.c"
        var $4=(($3+84)&4294967295); //@line 826 "_json.c"
        var $5=HEAP[$4]; //@line 826 "_json.c"
        var $6=($5) & 134217728; //@line 826 "_json.c"
        var $7=((($6))|0)!=0; //@line 826 "_json.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 826 "_json.c"
      case 1: // $bb
        var $8=HEAP[$pystr_addr]; //@line 827 "_json.c"
        var $9=_ascii_escape_str($8); //@line 827 "_json.c"
        HEAP[$0]=$9; //@line 827 "_json.c"
        __label__ = 5; break; //@line 827 "_json.c"
      case 2: // $bb1
        var $10=HEAP[$pystr_addr]; //@line 829 "_json.c"
        var $11=(($10+4)&4294967295); //@line 829 "_json.c"
        var $12=HEAP[$11]; //@line 829 "_json.c"
        var $13=(($12+84)&4294967295); //@line 829 "_json.c"
        var $14=HEAP[$13]; //@line 829 "_json.c"
        var $15=($14) & 268435456; //@line 829 "_json.c"
        var $16=((($15))|0)!=0; //@line 829 "_json.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 829 "_json.c"
      case 3: // $bb2
        var $17=HEAP[$pystr_addr]; //@line 830 "_json.c"
        var $18=_ascii_escape_unicode($17); //@line 830 "_json.c"
        HEAP[$0]=$18; //@line 830 "_json.c"
        __label__ = 5; break; //@line 830 "_json.c"
      case 4: // $bb3
        var $19=HEAP[$pystr_addr]; //@line 833 "_json.c"
        var $20=(($19+4)&4294967295); //@line 833 "_json.c"
        var $21=HEAP[$20]; //@line 833 "_json.c"
        var $22=(($21+12)&4294967295); //@line 833 "_json.c"
        var $23=HEAP[$22]; //@line 833 "_json.c"
        var $24=HEAP[_PyExc_TypeError]; //@line 833 "_json.c"
        var $25=_PyErr_Format($24, ((__str27)&4294967295), $23); //@line 833 "_json.c"
        HEAP[$0]=0; //@line 836 "_json.c"
        __label__ = 5; break; //@line 836 "_json.c"
      case 5: // $bb4
        var $26=HEAP[$0]; //@line 827 "_json.c"
        HEAP[$retval]=$26; //@line 827 "_json.c"
        __label__ = 6; break; //@line 827 "_json.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 827 "_json.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 827 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 844 "_json.c"
        var $1=_scanner_clear($0); //@line 844 "_json.c"
        var $2=HEAP[$self_addr]; //@line 845 "_json.c"
        var $3=(($2+4)&4294967295); //@line 845 "_json.c"
        var $4=HEAP[$3]; //@line 845 "_json.c"
        var $5=(($4+160)&4294967295); //@line 845 "_json.c"
        var $6=HEAP[$5]; //@line 845 "_json.c"
        var $7=HEAP[$self_addr]; //@line 845 "_json.c"
        var $8=$7; //@line 845 "_json.c"
        FUNCTION_TABLE[$6]($8); //@line 845 "_json.c"
        __label__ = 1; break; //@line 846 "_json.c"
      case 1: // $return
        STACKTOP = __stackBase__;
        return; //@line 846 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_traverse($self, $visit, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $visit_addr=__stackBase__+4;
        var $arg_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $s=__stackBase__+20;
        var $vret=__stackBase__+24;
        var $vret7=__stackBase__+28;
        var $vret11=__stackBase__+32;
        var $vret15=__stackBase__+36;
        var $vret19=__stackBase__+40;
        var $vret23=__stackBase__+44;
        var $vret27=__stackBase__+48;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$visit_addr]=$visit;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$self_addr]; //@line 852 "_json.c"
        var $2=(($1+4)&4294967295); //@line 852 "_json.c"
        var $3=HEAP[$2]; //@line 852 "_json.c"
        var $4=($3)!=(_PyScannerType); //@line 852 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 852 "_json.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 852 "_json.c"
        var $6=(($5+4)&4294967295); //@line 852 "_json.c"
        var $7=HEAP[$6]; //@line 852 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyScannerType); //@line 852 "_json.c"
        var $9=((($8))|0)==0; //@line 852 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 852 "_json.c"
      case 2: // $bb1
        ___assert_fail(((__str28)&4294967295), ((__str29)&4294967295), 852, ((___PRETTY_FUNCTION___9208)&4294967295)); //@line 852 "_json.c"
        throw "Reached an unreachable! Original .ll line: 2767"; //@line 852 "_json.c"
      case 3: // $bb2
        var $10=HEAP[$self_addr]; //@line 853 "_json.c"
        var $11=$10; //@line 853 "_json.c"
        HEAP[$s]=$11; //@line 853 "_json.c"
        var $12=HEAP[$s]; //@line 854 "_json.c"
        var $13=(($12+8)&4294967295); //@line 854 "_json.c"
        var $14=HEAP[$13]; //@line 854 "_json.c"
        var $15=($14)!=0; //@line 854 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 854 "_json.c"
      case 4: // $bb3
        var $16=HEAP[$s]; //@line 854 "_json.c"
        var $17=(($16+8)&4294967295); //@line 854 "_json.c"
        var $18=HEAP[$17]; //@line 854 "_json.c"
        var $19=HEAP[$visit_addr]; //@line 854 "_json.c"
        var $20=HEAP[$arg_addr]; //@line 854 "_json.c"
        var $21=FUNCTION_TABLE[$19]($18, $20); //@line 854 "_json.c"
        HEAP[$vret]=$21; //@line 854 "_json.c"
        var $22=HEAP[$vret]; //@line 854 "_json.c"
        var $23=((($22))|0)!=0; //@line 854 "_json.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 854 "_json.c"
      case 5: // $bb4
        var $24=HEAP[$vret]; //@line 854 "_json.c"
        HEAP[$0]=$24; //@line 854 "_json.c"
        __label__ = 25; break; //@line 854 "_json.c"
      case 6: // $bb5
        var $25=HEAP[$s]; //@line 855 "_json.c"
        var $26=(($25+12)&4294967295); //@line 855 "_json.c"
        var $27=HEAP[$26]; //@line 855 "_json.c"
        var $28=($27)!=0; //@line 855 "_json.c"
        if ($28) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 855 "_json.c"
      case 7: // $bb6
        var $29=HEAP[$s]; //@line 855 "_json.c"
        var $30=(($29+12)&4294967295); //@line 855 "_json.c"
        var $31=HEAP[$30]; //@line 855 "_json.c"
        var $32=HEAP[$visit_addr]; //@line 855 "_json.c"
        var $33=HEAP[$arg_addr]; //@line 855 "_json.c"
        var $34=FUNCTION_TABLE[$32]($31, $33); //@line 855 "_json.c"
        HEAP[$vret7]=$34; //@line 855 "_json.c"
        var $35=HEAP[$vret7]; //@line 855 "_json.c"
        var $36=((($35))|0)!=0; //@line 855 "_json.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 855 "_json.c"
      case 8: // $bb8
        var $37=HEAP[$vret7]; //@line 855 "_json.c"
        HEAP[$0]=$37; //@line 855 "_json.c"
        __label__ = 25; break; //@line 855 "_json.c"
      case 9: // $bb9
        var $38=HEAP[$s]; //@line 856 "_json.c"
        var $39=(($38+16)&4294967295); //@line 856 "_json.c"
        var $40=HEAP[$39]; //@line 856 "_json.c"
        var $41=($40)!=0; //@line 856 "_json.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 856 "_json.c"
      case 10: // $bb10
        var $42=HEAP[$s]; //@line 856 "_json.c"
        var $43=(($42+16)&4294967295); //@line 856 "_json.c"
        var $44=HEAP[$43]; //@line 856 "_json.c"
        var $45=HEAP[$visit_addr]; //@line 856 "_json.c"
        var $46=HEAP[$arg_addr]; //@line 856 "_json.c"
        var $47=FUNCTION_TABLE[$45]($44, $46); //@line 856 "_json.c"
        HEAP[$vret11]=$47; //@line 856 "_json.c"
        var $48=HEAP[$vret11]; //@line 856 "_json.c"
        var $49=((($48))|0)!=0; //@line 856 "_json.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 856 "_json.c"
      case 11: // $bb12
        var $50=HEAP[$vret11]; //@line 856 "_json.c"
        HEAP[$0]=$50; //@line 856 "_json.c"
        __label__ = 25; break; //@line 856 "_json.c"
      case 12: // $bb13
        var $51=HEAP[$s]; //@line 857 "_json.c"
        var $52=(($51+20)&4294967295); //@line 857 "_json.c"
        var $53=HEAP[$52]; //@line 857 "_json.c"
        var $54=($53)!=0; //@line 857 "_json.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 857 "_json.c"
      case 13: // $bb14
        var $55=HEAP[$s]; //@line 857 "_json.c"
        var $56=(($55+20)&4294967295); //@line 857 "_json.c"
        var $57=HEAP[$56]; //@line 857 "_json.c"
        var $58=HEAP[$visit_addr]; //@line 857 "_json.c"
        var $59=HEAP[$arg_addr]; //@line 857 "_json.c"
        var $60=FUNCTION_TABLE[$58]($57, $59); //@line 857 "_json.c"
        HEAP[$vret15]=$60; //@line 857 "_json.c"
        var $61=HEAP[$vret15]; //@line 857 "_json.c"
        var $62=((($61))|0)!=0; //@line 857 "_json.c"
        if ($62) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 857 "_json.c"
      case 14: // $bb16
        var $63=HEAP[$vret15]; //@line 857 "_json.c"
        HEAP[$0]=$63; //@line 857 "_json.c"
        __label__ = 25; break; //@line 857 "_json.c"
      case 15: // $bb17
        var $64=HEAP[$s]; //@line 858 "_json.c"
        var $65=(($64+24)&4294967295); //@line 858 "_json.c"
        var $66=HEAP[$65]; //@line 858 "_json.c"
        var $67=($66)!=0; //@line 858 "_json.c"
        if ($67) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 858 "_json.c"
      case 16: // $bb18
        var $68=HEAP[$s]; //@line 858 "_json.c"
        var $69=(($68+24)&4294967295); //@line 858 "_json.c"
        var $70=HEAP[$69]; //@line 858 "_json.c"
        var $71=HEAP[$visit_addr]; //@line 858 "_json.c"
        var $72=HEAP[$arg_addr]; //@line 858 "_json.c"
        var $73=FUNCTION_TABLE[$71]($70, $72); //@line 858 "_json.c"
        HEAP[$vret19]=$73; //@line 858 "_json.c"
        var $74=HEAP[$vret19]; //@line 858 "_json.c"
        var $75=((($74))|0)!=0; //@line 858 "_json.c"
        if ($75) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 858 "_json.c"
      case 17: // $bb20
        var $76=HEAP[$vret19]; //@line 858 "_json.c"
        HEAP[$0]=$76; //@line 858 "_json.c"
        __label__ = 25; break; //@line 858 "_json.c"
      case 18: // $bb21
        var $77=HEAP[$s]; //@line 859 "_json.c"
        var $78=(($77+28)&4294967295); //@line 859 "_json.c"
        var $79=HEAP[$78]; //@line 859 "_json.c"
        var $80=($79)!=0; //@line 859 "_json.c"
        if ($80) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 859 "_json.c"
      case 19: // $bb22
        var $81=HEAP[$s]; //@line 859 "_json.c"
        var $82=(($81+28)&4294967295); //@line 859 "_json.c"
        var $83=HEAP[$82]; //@line 859 "_json.c"
        var $84=HEAP[$visit_addr]; //@line 859 "_json.c"
        var $85=HEAP[$arg_addr]; //@line 859 "_json.c"
        var $86=FUNCTION_TABLE[$84]($83, $85); //@line 859 "_json.c"
        HEAP[$vret23]=$86; //@line 859 "_json.c"
        var $87=HEAP[$vret23]; //@line 859 "_json.c"
        var $88=((($87))|0)!=0; //@line 859 "_json.c"
        if ($88) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 859 "_json.c"
      case 20: // $bb24
        var $89=HEAP[$vret23]; //@line 859 "_json.c"
        HEAP[$0]=$89; //@line 859 "_json.c"
        __label__ = 25; break; //@line 859 "_json.c"
      case 21: // $bb25
        var $90=HEAP[$s]; //@line 860 "_json.c"
        var $91=(($90+32)&4294967295); //@line 860 "_json.c"
        var $92=HEAP[$91]; //@line 860 "_json.c"
        var $93=($92)!=0; //@line 860 "_json.c"
        if ($93) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 860 "_json.c"
      case 22: // $bb26
        var $94=HEAP[$s]; //@line 860 "_json.c"
        var $95=(($94+32)&4294967295); //@line 860 "_json.c"
        var $96=HEAP[$95]; //@line 860 "_json.c"
        var $97=HEAP[$visit_addr]; //@line 860 "_json.c"
        var $98=HEAP[$arg_addr]; //@line 860 "_json.c"
        var $99=FUNCTION_TABLE[$97]($96, $98); //@line 860 "_json.c"
        HEAP[$vret27]=$99; //@line 860 "_json.c"
        var $100=HEAP[$vret27]; //@line 860 "_json.c"
        var $101=((($100))|0)!=0; //@line 860 "_json.c"
        if ($101) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 860 "_json.c"
      case 23: // $bb28
        var $102=HEAP[$vret27]; //@line 860 "_json.c"
        HEAP[$0]=$102; //@line 860 "_json.c"
        __label__ = 25; break; //@line 860 "_json.c"
      case 24: // $bb29
        HEAP[$0]=0; //@line 861 "_json.c"
        __label__ = 25; break; //@line 861 "_json.c"
      case 25: // $bb30
        var $103=HEAP[$0]; //@line 854 "_json.c"
        HEAP[$retval]=$103; //@line 854 "_json.c"
        __label__ = 26; break; //@line 854 "_json.c"
      case 26: // $return
        var $retval31=HEAP[$retval]; //@line 854 "_json.c"
        STACKTOP = __stackBase__;
        return $retval31; //@line 854 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_clear($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $s=__stackBase__+12;
        var $_py_tmp=__stackBase__+16;
        var $_py_tmp7=__stackBase__+20;
        var $_py_tmp11=__stackBase__+24;
        var $_py_tmp15=__stackBase__+28;
        var $_py_tmp19=__stackBase__+32;
        var $_py_tmp23=__stackBase__+36;
        var $_py_tmp27=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 868 "_json.c"
        var $2=(($1+4)&4294967295); //@line 868 "_json.c"
        var $3=HEAP[$2]; //@line 868 "_json.c"
        var $4=($3)!=(_PyScannerType); //@line 868 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 868 "_json.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 868 "_json.c"
        var $6=(($5+4)&4294967295); //@line 868 "_json.c"
        var $7=HEAP[$6]; //@line 868 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyScannerType); //@line 868 "_json.c"
        var $9=((($8))|0)==0; //@line 868 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 868 "_json.c"
      case 2: // $bb1
        ___assert_fail(((__str28)&4294967295), ((__str29)&4294967295), 868, ((___PRETTY_FUNCTION___9278)&4294967295)); //@line 868 "_json.c"
        throw "Reached an unreachable! Original .ll line: 3001"; //@line 868 "_json.c"
      case 3: // $bb2
        var $10=HEAP[$self_addr]; //@line 869 "_json.c"
        var $11=$10; //@line 869 "_json.c"
        HEAP[$s]=$11; //@line 869 "_json.c"
        var $12=HEAP[$s]; //@line 870 "_json.c"
        var $13=(($12+8)&4294967295); //@line 870 "_json.c"
        var $14=HEAP[$13]; //@line 870 "_json.c"
        var $15=($14)!=0; //@line 870 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 870 "_json.c"
      case 4: // $bb3
        var $16=HEAP[$s]; //@line 870 "_json.c"
        var $17=(($16+8)&4294967295); //@line 870 "_json.c"
        var $18=HEAP[$17]; //@line 870 "_json.c"
        HEAP[$_py_tmp]=$18; //@line 870 "_json.c"
        var $19=HEAP[$s]; //@line 870 "_json.c"
        var $20=(($19+8)&4294967295); //@line 870 "_json.c"
        HEAP[$20]=0; //@line 870 "_json.c"
        var $21=HEAP[$_py_tmp]; //@line 870 "_json.c"
        var $22=(($21)&4294967295); //@line 870 "_json.c"
        var $23=HEAP[$22]; //@line 870 "_json.c"
        var $24=((($23) - 1)&4294967295); //@line 870 "_json.c"
        var $25=HEAP[$_py_tmp]; //@line 870 "_json.c"
        var $26=(($25)&4294967295); //@line 870 "_json.c"
        HEAP[$26]=$24; //@line 870 "_json.c"
        var $27=HEAP[$_py_tmp]; //@line 870 "_json.c"
        var $28=(($27)&4294967295); //@line 870 "_json.c"
        var $29=HEAP[$28]; //@line 870 "_json.c"
        var $30=((($29))|0)==0; //@line 870 "_json.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 870 "_json.c"
      case 5: // $bb4
        var $31=HEAP[$_py_tmp]; //@line 870 "_json.c"
        var $32=(($31+4)&4294967295); //@line 870 "_json.c"
        var $33=HEAP[$32]; //@line 870 "_json.c"
        var $34=(($33+24)&4294967295); //@line 870 "_json.c"
        var $35=HEAP[$34]; //@line 870 "_json.c"
        var $36=HEAP[$_py_tmp]; //@line 870 "_json.c"
        FUNCTION_TABLE[$35]($36); //@line 870 "_json.c"
        __label__ = 6; break; //@line 870 "_json.c"
      case 6: // $bb5
        var $37=HEAP[$s]; //@line 871 "_json.c"
        var $38=(($37+12)&4294967295); //@line 871 "_json.c"
        var $39=HEAP[$38]; //@line 871 "_json.c"
        var $40=($39)!=0; //@line 871 "_json.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 871 "_json.c"
      case 7: // $bb6
        var $41=HEAP[$s]; //@line 871 "_json.c"
        var $42=(($41+12)&4294967295); //@line 871 "_json.c"
        var $43=HEAP[$42]; //@line 871 "_json.c"
        HEAP[$_py_tmp7]=$43; //@line 871 "_json.c"
        var $44=HEAP[$s]; //@line 871 "_json.c"
        var $45=(($44+12)&4294967295); //@line 871 "_json.c"
        HEAP[$45]=0; //@line 871 "_json.c"
        var $46=HEAP[$_py_tmp7]; //@line 871 "_json.c"
        var $47=(($46)&4294967295); //@line 871 "_json.c"
        var $48=HEAP[$47]; //@line 871 "_json.c"
        var $49=((($48) - 1)&4294967295); //@line 871 "_json.c"
        var $50=HEAP[$_py_tmp7]; //@line 871 "_json.c"
        var $51=(($50)&4294967295); //@line 871 "_json.c"
        HEAP[$51]=$49; //@line 871 "_json.c"
        var $52=HEAP[$_py_tmp7]; //@line 871 "_json.c"
        var $53=(($52)&4294967295); //@line 871 "_json.c"
        var $54=HEAP[$53]; //@line 871 "_json.c"
        var $55=((($54))|0)==0; //@line 871 "_json.c"
        if ($55) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 871 "_json.c"
      case 8: // $bb8
        var $56=HEAP[$_py_tmp7]; //@line 871 "_json.c"
        var $57=(($56+4)&4294967295); //@line 871 "_json.c"
        var $58=HEAP[$57]; //@line 871 "_json.c"
        var $59=(($58+24)&4294967295); //@line 871 "_json.c"
        var $60=HEAP[$59]; //@line 871 "_json.c"
        var $61=HEAP[$_py_tmp7]; //@line 871 "_json.c"
        FUNCTION_TABLE[$60]($61); //@line 871 "_json.c"
        __label__ = 9; break; //@line 871 "_json.c"
      case 9: // $bb9
        var $62=HEAP[$s]; //@line 872 "_json.c"
        var $63=(($62+16)&4294967295); //@line 872 "_json.c"
        var $64=HEAP[$63]; //@line 872 "_json.c"
        var $65=($64)!=0; //@line 872 "_json.c"
        if ($65) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 872 "_json.c"
      case 10: // $bb10
        var $66=HEAP[$s]; //@line 872 "_json.c"
        var $67=(($66+16)&4294967295); //@line 872 "_json.c"
        var $68=HEAP[$67]; //@line 872 "_json.c"
        HEAP[$_py_tmp11]=$68; //@line 872 "_json.c"
        var $69=HEAP[$s]; //@line 872 "_json.c"
        var $70=(($69+16)&4294967295); //@line 872 "_json.c"
        HEAP[$70]=0; //@line 872 "_json.c"
        var $71=HEAP[$_py_tmp11]; //@line 872 "_json.c"
        var $72=(($71)&4294967295); //@line 872 "_json.c"
        var $73=HEAP[$72]; //@line 872 "_json.c"
        var $74=((($73) - 1)&4294967295); //@line 872 "_json.c"
        var $75=HEAP[$_py_tmp11]; //@line 872 "_json.c"
        var $76=(($75)&4294967295); //@line 872 "_json.c"
        HEAP[$76]=$74; //@line 872 "_json.c"
        var $77=HEAP[$_py_tmp11]; //@line 872 "_json.c"
        var $78=(($77)&4294967295); //@line 872 "_json.c"
        var $79=HEAP[$78]; //@line 872 "_json.c"
        var $80=((($79))|0)==0; //@line 872 "_json.c"
        if ($80) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 872 "_json.c"
      case 11: // $bb12
        var $81=HEAP[$_py_tmp11]; //@line 872 "_json.c"
        var $82=(($81+4)&4294967295); //@line 872 "_json.c"
        var $83=HEAP[$82]; //@line 872 "_json.c"
        var $84=(($83+24)&4294967295); //@line 872 "_json.c"
        var $85=HEAP[$84]; //@line 872 "_json.c"
        var $86=HEAP[$_py_tmp11]; //@line 872 "_json.c"
        FUNCTION_TABLE[$85]($86); //@line 872 "_json.c"
        __label__ = 12; break; //@line 872 "_json.c"
      case 12: // $bb13
        var $87=HEAP[$s]; //@line 873 "_json.c"
        var $88=(($87+20)&4294967295); //@line 873 "_json.c"
        var $89=HEAP[$88]; //@line 873 "_json.c"
        var $90=($89)!=0; //@line 873 "_json.c"
        if ($90) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 873 "_json.c"
      case 13: // $bb14
        var $91=HEAP[$s]; //@line 873 "_json.c"
        var $92=(($91+20)&4294967295); //@line 873 "_json.c"
        var $93=HEAP[$92]; //@line 873 "_json.c"
        HEAP[$_py_tmp15]=$93; //@line 873 "_json.c"
        var $94=HEAP[$s]; //@line 873 "_json.c"
        var $95=(($94+20)&4294967295); //@line 873 "_json.c"
        HEAP[$95]=0; //@line 873 "_json.c"
        var $96=HEAP[$_py_tmp15]; //@line 873 "_json.c"
        var $97=(($96)&4294967295); //@line 873 "_json.c"
        var $98=HEAP[$97]; //@line 873 "_json.c"
        var $99=((($98) - 1)&4294967295); //@line 873 "_json.c"
        var $100=HEAP[$_py_tmp15]; //@line 873 "_json.c"
        var $101=(($100)&4294967295); //@line 873 "_json.c"
        HEAP[$101]=$99; //@line 873 "_json.c"
        var $102=HEAP[$_py_tmp15]; //@line 873 "_json.c"
        var $103=(($102)&4294967295); //@line 873 "_json.c"
        var $104=HEAP[$103]; //@line 873 "_json.c"
        var $105=((($104))|0)==0; //@line 873 "_json.c"
        if ($105) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 873 "_json.c"
      case 14: // $bb16
        var $106=HEAP[$_py_tmp15]; //@line 873 "_json.c"
        var $107=(($106+4)&4294967295); //@line 873 "_json.c"
        var $108=HEAP[$107]; //@line 873 "_json.c"
        var $109=(($108+24)&4294967295); //@line 873 "_json.c"
        var $110=HEAP[$109]; //@line 873 "_json.c"
        var $111=HEAP[$_py_tmp15]; //@line 873 "_json.c"
        FUNCTION_TABLE[$110]($111); //@line 873 "_json.c"
        __label__ = 15; break; //@line 873 "_json.c"
      case 15: // $bb17
        var $112=HEAP[$s]; //@line 874 "_json.c"
        var $113=(($112+24)&4294967295); //@line 874 "_json.c"
        var $114=HEAP[$113]; //@line 874 "_json.c"
        var $115=($114)!=0; //@line 874 "_json.c"
        if ($115) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 874 "_json.c"
      case 16: // $bb18
        var $116=HEAP[$s]; //@line 874 "_json.c"
        var $117=(($116+24)&4294967295); //@line 874 "_json.c"
        var $118=HEAP[$117]; //@line 874 "_json.c"
        HEAP[$_py_tmp19]=$118; //@line 874 "_json.c"
        var $119=HEAP[$s]; //@line 874 "_json.c"
        var $120=(($119+24)&4294967295); //@line 874 "_json.c"
        HEAP[$120]=0; //@line 874 "_json.c"
        var $121=HEAP[$_py_tmp19]; //@line 874 "_json.c"
        var $122=(($121)&4294967295); //@line 874 "_json.c"
        var $123=HEAP[$122]; //@line 874 "_json.c"
        var $124=((($123) - 1)&4294967295); //@line 874 "_json.c"
        var $125=HEAP[$_py_tmp19]; //@line 874 "_json.c"
        var $126=(($125)&4294967295); //@line 874 "_json.c"
        HEAP[$126]=$124; //@line 874 "_json.c"
        var $127=HEAP[$_py_tmp19]; //@line 874 "_json.c"
        var $128=(($127)&4294967295); //@line 874 "_json.c"
        var $129=HEAP[$128]; //@line 874 "_json.c"
        var $130=((($129))|0)==0; //@line 874 "_json.c"
        if ($130) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 874 "_json.c"
      case 17: // $bb20
        var $131=HEAP[$_py_tmp19]; //@line 874 "_json.c"
        var $132=(($131+4)&4294967295); //@line 874 "_json.c"
        var $133=HEAP[$132]; //@line 874 "_json.c"
        var $134=(($133+24)&4294967295); //@line 874 "_json.c"
        var $135=HEAP[$134]; //@line 874 "_json.c"
        var $136=HEAP[$_py_tmp19]; //@line 874 "_json.c"
        FUNCTION_TABLE[$135]($136); //@line 874 "_json.c"
        __label__ = 18; break; //@line 874 "_json.c"
      case 18: // $bb21
        var $137=HEAP[$s]; //@line 875 "_json.c"
        var $138=(($137+28)&4294967295); //@line 875 "_json.c"
        var $139=HEAP[$138]; //@line 875 "_json.c"
        var $140=($139)!=0; //@line 875 "_json.c"
        if ($140) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 875 "_json.c"
      case 19: // $bb22
        var $141=HEAP[$s]; //@line 875 "_json.c"
        var $142=(($141+28)&4294967295); //@line 875 "_json.c"
        var $143=HEAP[$142]; //@line 875 "_json.c"
        HEAP[$_py_tmp23]=$143; //@line 875 "_json.c"
        var $144=HEAP[$s]; //@line 875 "_json.c"
        var $145=(($144+28)&4294967295); //@line 875 "_json.c"
        HEAP[$145]=0; //@line 875 "_json.c"
        var $146=HEAP[$_py_tmp23]; //@line 875 "_json.c"
        var $147=(($146)&4294967295); //@line 875 "_json.c"
        var $148=HEAP[$147]; //@line 875 "_json.c"
        var $149=((($148) - 1)&4294967295); //@line 875 "_json.c"
        var $150=HEAP[$_py_tmp23]; //@line 875 "_json.c"
        var $151=(($150)&4294967295); //@line 875 "_json.c"
        HEAP[$151]=$149; //@line 875 "_json.c"
        var $152=HEAP[$_py_tmp23]; //@line 875 "_json.c"
        var $153=(($152)&4294967295); //@line 875 "_json.c"
        var $154=HEAP[$153]; //@line 875 "_json.c"
        var $155=((($154))|0)==0; //@line 875 "_json.c"
        if ($155) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 875 "_json.c"
      case 20: // $bb24
        var $156=HEAP[$_py_tmp23]; //@line 875 "_json.c"
        var $157=(($156+4)&4294967295); //@line 875 "_json.c"
        var $158=HEAP[$157]; //@line 875 "_json.c"
        var $159=(($158+24)&4294967295); //@line 875 "_json.c"
        var $160=HEAP[$159]; //@line 875 "_json.c"
        var $161=HEAP[$_py_tmp23]; //@line 875 "_json.c"
        FUNCTION_TABLE[$160]($161); //@line 875 "_json.c"
        __label__ = 21; break; //@line 875 "_json.c"
      case 21: // $bb25
        var $162=HEAP[$s]; //@line 876 "_json.c"
        var $163=(($162+32)&4294967295); //@line 876 "_json.c"
        var $164=HEAP[$163]; //@line 876 "_json.c"
        var $165=($164)!=0; //@line 876 "_json.c"
        if ($165) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 876 "_json.c"
      case 22: // $bb26
        var $166=HEAP[$s]; //@line 876 "_json.c"
        var $167=(($166+32)&4294967295); //@line 876 "_json.c"
        var $168=HEAP[$167]; //@line 876 "_json.c"
        HEAP[$_py_tmp27]=$168; //@line 876 "_json.c"
        var $169=HEAP[$s]; //@line 876 "_json.c"
        var $170=(($169+32)&4294967295); //@line 876 "_json.c"
        HEAP[$170]=0; //@line 876 "_json.c"
        var $171=HEAP[$_py_tmp27]; //@line 876 "_json.c"
        var $172=(($171)&4294967295); //@line 876 "_json.c"
        var $173=HEAP[$172]; //@line 876 "_json.c"
        var $174=((($173) - 1)&4294967295); //@line 876 "_json.c"
        var $175=HEAP[$_py_tmp27]; //@line 876 "_json.c"
        var $176=(($175)&4294967295); //@line 876 "_json.c"
        HEAP[$176]=$174; //@line 876 "_json.c"
        var $177=HEAP[$_py_tmp27]; //@line 876 "_json.c"
        var $178=(($177)&4294967295); //@line 876 "_json.c"
        var $179=HEAP[$178]; //@line 876 "_json.c"
        var $180=((($179))|0)==0; //@line 876 "_json.c"
        if ($180) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 876 "_json.c"
      case 23: // $bb28
        var $181=HEAP[$_py_tmp27]; //@line 876 "_json.c"
        var $182=(($181+4)&4294967295); //@line 876 "_json.c"
        var $183=HEAP[$182]; //@line 876 "_json.c"
        var $184=(($183+24)&4294967295); //@line 876 "_json.c"
        var $185=HEAP[$184]; //@line 876 "_json.c"
        var $186=HEAP[$_py_tmp27]; //@line 876 "_json.c"
        FUNCTION_TABLE[$185]($186); //@line 876 "_json.c"
        __label__ = 24; break; //@line 876 "_json.c"
      case 24: // $bb29
        HEAP[$0]=0; //@line 877 "_json.c"
        var $187=HEAP[$0]; //@line 877 "_json.c"
        HEAP[$retval]=$187; //@line 877 "_json.c"
        __label__ = 25; break; //@line 877 "_json.c"
      case 25: // $return
        var $retval30=HEAP[$retval]; //@line 877 "_json.c"
        STACKTOP = __stackBase__;
        return $retval30; //@line 877 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __parse_object_str($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 76; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $pystr_addr=__stackBase__+4;
        var $idx_addr=__stackBase__+8;
        var $next_idx_ptr_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $str=__stackBase__+24;
        var $end_idx=__stackBase__+28;
        var $rval=__stackBase__+32;
        var $pairs=__stackBase__+36;
        var $item=__stackBase__+40;
        var $key=__stackBase__+44;
        var $val=__stackBase__+48;
        var $encoding=__stackBase__+52;
        var $strict=__stackBase__+56;
        var $next_idx=__stackBase__+60;
        var $_py_tmp=__stackBase__+64;
        var $_py_tmp38=__stackBase__+68;
        var $_py_tmp76=__stackBase__+72;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$pystr_addr]=$pystr;
        HEAP[$idx_addr]=$idx;
        HEAP[$next_idx_ptr_addr]=$next_idx_ptr;
        var $1=HEAP[$pystr_addr]; //@line 889 "_json.c"
        var $2=$1; //@line 889 "_json.c"
        var $3=(($2+20)&4294967295); //@line 889 "_json.c"
        var $4=(($3)&4294967295); //@line 889 "_json.c"
        HEAP[$str]=$4; //@line 889 "_json.c"
        var $5=HEAP[$pystr_addr]; //@line 890 "_json.c"
        var $6=$5; //@line 890 "_json.c"
        var $7=(($6+8)&4294967295); //@line 890 "_json.c"
        var $8=HEAP[$7]; //@line 890 "_json.c"
        var $9=((($8) - 1)&4294967295); //@line 890 "_json.c"
        HEAP[$end_idx]=$9; //@line 890 "_json.c"
        HEAP[$key]=0; //@line 894 "_json.c"
        HEAP[$val]=0; //@line 895 "_json.c"
        var $10=HEAP[$s_addr]; //@line 896 "_json.c"
        var $11=(($10+8)&4294967295); //@line 896 "_json.c"
        var $12=HEAP[$11]; //@line 896 "_json.c"
        var $13=$12; //@line 896 "_json.c"
        var $14=(($13+20)&4294967295); //@line 896 "_json.c"
        var $15=(($14)&4294967295); //@line 896 "_json.c"
        HEAP[$encoding]=$15; //@line 896 "_json.c"
        var $16=HEAP[$s_addr]; //@line 897 "_json.c"
        var $17=(($16+12)&4294967295); //@line 897 "_json.c"
        var $18=HEAP[$17]; //@line 897 "_json.c"
        var $19=_PyObject_IsTrue($18); //@line 897 "_json.c"
        HEAP[$strict]=$19; //@line 897 "_json.c"
        var $20=_PyList_New(0); //@line 900 "_json.c"
        HEAP[$pairs]=$20; //@line 900 "_json.c"
        var $21=HEAP[$pairs]; //@line 901 "_json.c"
        var $22=($21)==0; //@line 901 "_json.c"
        if ($22) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 901 "_json.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 902 "_json.c"
        __label__ = 93; break; //@line 902 "_json.c"
      case 2: // $bb1
        __label__ = 4; break; //@line 902 "_json.c"
      case 3: // $bb2
        var $23=HEAP[$idx_addr]; //@line 905 "_json.c"
        var $24=((($23) + 1)&4294967295); //@line 905 "_json.c"
        HEAP[$idx_addr]=$24; //@line 905 "_json.c"
        __label__ = 4; break; //@line 905 "_json.c"
      case 4: // $bb3
        var $25=HEAP[$idx_addr]; //@line 905 "_json.c"
        var $26=HEAP[$end_idx]; //@line 905 "_json.c"
        var $27=((($25))|0) > ((($26))|0); //@line 905 "_json.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 5; break; } //@line 905 "_json.c"
      case 5: // $bb4
        var $28=HEAP[$str]; //@line 905 "_json.c"
        var $29=HEAP[$idx_addr]; //@line 905 "_json.c"
        var $30=(($28+$29)&4294967295); //@line 905 "_json.c"
        var $31=HEAP[$30]; //@line 905 "_json.c"
        var $32=reSign(($31), 8, 0)==32; //@line 905 "_json.c"
        if ($32) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 905 "_json.c"
      case 6: // $bb5
        var $33=HEAP[$str]; //@line 905 "_json.c"
        var $34=HEAP[$idx_addr]; //@line 905 "_json.c"
        var $35=(($33+$34)&4294967295); //@line 905 "_json.c"
        var $36=HEAP[$35]; //@line 905 "_json.c"
        var $37=reSign(($36), 8, 0)==9; //@line 905 "_json.c"
        if ($37) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 905 "_json.c"
      case 7: // $bb6
        var $38=HEAP[$str]; //@line 905 "_json.c"
        var $39=HEAP[$idx_addr]; //@line 905 "_json.c"
        var $40=(($38+$39)&4294967295); //@line 905 "_json.c"
        var $41=HEAP[$40]; //@line 905 "_json.c"
        var $42=reSign(($41), 8, 0)==10; //@line 905 "_json.c"
        if ($42) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 905 "_json.c"
      case 8: // $bb7
        var $43=HEAP[$str]; //@line 905 "_json.c"
        var $44=HEAP[$idx_addr]; //@line 905 "_json.c"
        var $45=(($43+$44)&4294967295); //@line 905 "_json.c"
        var $46=HEAP[$45]; //@line 905 "_json.c"
        var $47=reSign(($46), 8, 0)==13; //@line 905 "_json.c"
        if ($47) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 905 "_json.c"
      case 9: // $bb8
        var $48=HEAP[$idx_addr]; //@line 908 "_json.c"
        var $49=HEAP[$end_idx]; //@line 908 "_json.c"
        var $50=((($48))|0) <= ((($49))|0); //@line 908 "_json.c"
        if ($50) { __label__ = 10; break; } else { __label__ = 65; break; } //@line 908 "_json.c"
      case 10: // $bb9
        var $51=HEAP[$str]; //@line 908 "_json.c"
        var $52=HEAP[$idx_addr]; //@line 908 "_json.c"
        var $53=(($51+$52)&4294967295); //@line 908 "_json.c"
        var $54=HEAP[$53]; //@line 908 "_json.c"
        var $55=reSign(($54), 8, 0)!=125; //@line 908 "_json.c"
        if ($55) { __label__ = 11; break; } else { __label__ = 65; break; } //@line 908 "_json.c"
      case 11: // $bb10
        __label__ = 64; break; //@line 908 "_json.c"
      case 12: // $bb11
        var $56=HEAP[$str]; //@line 911 "_json.c"
        var $57=HEAP[$idx_addr]; //@line 911 "_json.c"
        var $58=(($56+$57)&4294967295); //@line 911 "_json.c"
        var $59=HEAP[$58]; //@line 911 "_json.c"
        var $60=reSign(($59), 8, 0)!=34; //@line 911 "_json.c"
        if ($60) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 911 "_json.c"
      case 13: // $bb12
        var $61=HEAP[$pystr_addr]; //@line 912 "_json.c"
        var $62=HEAP[$idx_addr]; //@line 912 "_json.c"
        _raise_errmsg(((__str30)&4294967295), $61, $62); //@line 912 "_json.c"
        __label__ = 83; break; //@line 912 "_json.c"
      case 14: // $bb13
        var $63=HEAP[$idx_addr]; //@line 915 "_json.c"
        var $64=((($63) + 1)&4294967295); //@line 915 "_json.c"
        var $65=HEAP[$pystr_addr]; //@line 915 "_json.c"
        var $66=HEAP[$encoding]; //@line 915 "_json.c"
        var $67=HEAP[$strict]; //@line 915 "_json.c"
        var $68=_scanstring_str($65, $64, $66, $67, $next_idx); //@line 915 "_json.c"
        HEAP[$key]=$68; //@line 915 "_json.c"
        var $69=HEAP[$key]; //@line 916 "_json.c"
        var $70=($69)==0; //@line 916 "_json.c"
        if ($70) { __label__ = 83; break; } else { __label__ = 15; break; } //@line 916 "_json.c"
      case 15: // $bb14
        var $71=HEAP[$next_idx]; //@line 918 "_json.c"
        HEAP[$idx_addr]=$71; //@line 918 "_json.c"
        __label__ = 17; break; //@line 918 "_json.c"
      case 16: // $bb15
        var $72=HEAP[$idx_addr]; //@line 921 "_json.c"
        var $73=((($72) + 1)&4294967295); //@line 921 "_json.c"
        HEAP[$idx_addr]=$73; //@line 921 "_json.c"
        __label__ = 17; break; //@line 921 "_json.c"
      case 17: // $bb16
        var $74=HEAP[$idx_addr]; //@line 921 "_json.c"
        var $75=HEAP[$end_idx]; //@line 921 "_json.c"
        var $76=((($74))|0) > ((($75))|0); //@line 921 "_json.c"
        if ($76) { __label__ = 22; break; } else { __label__ = 18; break; } //@line 921 "_json.c"
      case 18: // $bb17
        var $77=HEAP[$str]; //@line 921 "_json.c"
        var $78=HEAP[$idx_addr]; //@line 921 "_json.c"
        var $79=(($77+$78)&4294967295); //@line 921 "_json.c"
        var $80=HEAP[$79]; //@line 921 "_json.c"
        var $81=reSign(($80), 8, 0)==32; //@line 921 "_json.c"
        if ($81) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 921 "_json.c"
      case 19: // $bb18
        var $82=HEAP[$str]; //@line 921 "_json.c"
        var $83=HEAP[$idx_addr]; //@line 921 "_json.c"
        var $84=(($82+$83)&4294967295); //@line 921 "_json.c"
        var $85=HEAP[$84]; //@line 921 "_json.c"
        var $86=reSign(($85), 8, 0)==9; //@line 921 "_json.c"
        if ($86) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 921 "_json.c"
      case 20: // $bb19
        var $87=HEAP[$str]; //@line 921 "_json.c"
        var $88=HEAP[$idx_addr]; //@line 921 "_json.c"
        var $89=(($87+$88)&4294967295); //@line 921 "_json.c"
        var $90=HEAP[$89]; //@line 921 "_json.c"
        var $91=reSign(($90), 8, 0)==10; //@line 921 "_json.c"
        if ($91) { __label__ = 16; break; } else { __label__ = 21; break; } //@line 921 "_json.c"
      case 21: // $bb20
        var $92=HEAP[$str]; //@line 921 "_json.c"
        var $93=HEAP[$idx_addr]; //@line 921 "_json.c"
        var $94=(($92+$93)&4294967295); //@line 921 "_json.c"
        var $95=HEAP[$94]; //@line 921 "_json.c"
        var $96=reSign(($95), 8, 0)==13; //@line 921 "_json.c"
        if ($96) { __label__ = 16; break; } else { __label__ = 22; break; } //@line 921 "_json.c"
      case 22: // $bb21
        var $97=HEAP[$idx_addr]; //@line 922 "_json.c"
        var $98=HEAP[$end_idx]; //@line 922 "_json.c"
        var $99=((($97))|0) > ((($98))|0); //@line 922 "_json.c"
        if ($99) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 922 "_json.c"
      case 23: // $bb22
        var $100=HEAP[$str]; //@line 922 "_json.c"
        var $101=HEAP[$idx_addr]; //@line 922 "_json.c"
        var $102=(($100+$101)&4294967295); //@line 922 "_json.c"
        var $103=HEAP[$102]; //@line 922 "_json.c"
        var $104=reSign(($103), 8, 0)!=58; //@line 922 "_json.c"
        if ($104) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 922 "_json.c"
      case 24: // $bb23
        var $105=HEAP[$pystr_addr]; //@line 923 "_json.c"
        var $106=HEAP[$idx_addr]; //@line 923 "_json.c"
        _raise_errmsg(((__str31)&4294967295), $105, $106); //@line 923 "_json.c"
        __label__ = 83; break; //@line 923 "_json.c"
      case 25: // $bb24
        var $107=HEAP[$idx_addr]; //@line 926 "_json.c"
        var $108=((($107) + 1)&4294967295); //@line 926 "_json.c"
        HEAP[$idx_addr]=$108; //@line 926 "_json.c"
        __label__ = 27; break; //@line 926 "_json.c"
      case 26: // $bb25
        var $109=HEAP[$idx_addr]; //@line 927 "_json.c"
        var $110=((($109) + 1)&4294967295); //@line 927 "_json.c"
        HEAP[$idx_addr]=$110; //@line 927 "_json.c"
        __label__ = 27; break; //@line 927 "_json.c"
      case 27: // $bb26
        var $111=HEAP[$idx_addr]; //@line 927 "_json.c"
        var $112=HEAP[$end_idx]; //@line 927 "_json.c"
        var $113=((($111))|0) > ((($112))|0); //@line 927 "_json.c"
        if ($113) { __label__ = 32; break; } else { __label__ = 28; break; } //@line 927 "_json.c"
      case 28: // $bb27
        var $114=HEAP[$str]; //@line 927 "_json.c"
        var $115=HEAP[$idx_addr]; //@line 927 "_json.c"
        var $116=(($114+$115)&4294967295); //@line 927 "_json.c"
        var $117=HEAP[$116]; //@line 927 "_json.c"
        var $118=reSign(($117), 8, 0)==32; //@line 927 "_json.c"
        if ($118) { __label__ = 26; break; } else { __label__ = 29; break; } //@line 927 "_json.c"
      case 29: // $bb28
        var $119=HEAP[$str]; //@line 927 "_json.c"
        var $120=HEAP[$idx_addr]; //@line 927 "_json.c"
        var $121=(($119+$120)&4294967295); //@line 927 "_json.c"
        var $122=HEAP[$121]; //@line 927 "_json.c"
        var $123=reSign(($122), 8, 0)==9; //@line 927 "_json.c"
        if ($123) { __label__ = 26; break; } else { __label__ = 30; break; } //@line 927 "_json.c"
      case 30: // $bb29
        var $124=HEAP[$str]; //@line 927 "_json.c"
        var $125=HEAP[$idx_addr]; //@line 927 "_json.c"
        var $126=(($124+$125)&4294967295); //@line 927 "_json.c"
        var $127=HEAP[$126]; //@line 927 "_json.c"
        var $128=reSign(($127), 8, 0)==10; //@line 927 "_json.c"
        if ($128) { __label__ = 26; break; } else { __label__ = 31; break; } //@line 927 "_json.c"
      case 31: // $bb30
        var $129=HEAP[$str]; //@line 927 "_json.c"
        var $130=HEAP[$idx_addr]; //@line 927 "_json.c"
        var $131=(($129+$130)&4294967295); //@line 927 "_json.c"
        var $132=HEAP[$131]; //@line 927 "_json.c"
        var $133=reSign(($132), 8, 0)==13; //@line 927 "_json.c"
        if ($133) { __label__ = 26; break; } else { __label__ = 32; break; } //@line 927 "_json.c"
      case 32: // $bb31
        var $134=HEAP[$s_addr]; //@line 930 "_json.c"
        var $135=HEAP[$pystr_addr]; //@line 930 "_json.c"
        var $136=HEAP[$idx_addr]; //@line 930 "_json.c"
        var $137=_scan_once_str($134, $135, $136, $next_idx); //@line 930 "_json.c"
        HEAP[$val]=$137; //@line 930 "_json.c"
        var $138=HEAP[$val]; //@line 931 "_json.c"
        var $139=($138)==0; //@line 931 "_json.c"
        if ($139) { __label__ = 83; break; } else { __label__ = 33; break; } //@line 931 "_json.c"
      case 33: // $bb32
        var $140=HEAP[$key]; //@line 934 "_json.c"
        var $141=HEAP[$val]; //@line 934 "_json.c"
        var $142=_PyTuple_Pack(2, $140, $141); //@line 934 "_json.c"
        HEAP[$item]=$142; //@line 934 "_json.c"
        var $143=HEAP[$item]; //@line 935 "_json.c"
        var $144=($143)==0; //@line 935 "_json.c"
        if ($144) { __label__ = 83; break; } else { __label__ = 34; break; } //@line 935 "_json.c"
      case 34: // $bb33
        var $145=HEAP[$key]; //@line 937 "_json.c"
        var $146=($145)!=0; //@line 937 "_json.c"
        if ($146) { __label__ = 35; break; } else { __label__ = 37; break; } //@line 937 "_json.c"
      case 35: // $bb34
        var $147=HEAP[$key]; //@line 937 "_json.c"
        HEAP[$_py_tmp]=$147; //@line 937 "_json.c"
        HEAP[$key]=0; //@line 937 "_json.c"
        var $148=HEAP[$_py_tmp]; //@line 937 "_json.c"
        var $149=(($148)&4294967295); //@line 937 "_json.c"
        var $150=HEAP[$149]; //@line 937 "_json.c"
        var $151=((($150) - 1)&4294967295); //@line 937 "_json.c"
        var $152=HEAP[$_py_tmp]; //@line 937 "_json.c"
        var $153=(($152)&4294967295); //@line 937 "_json.c"
        HEAP[$153]=$151; //@line 937 "_json.c"
        var $154=HEAP[$_py_tmp]; //@line 937 "_json.c"
        var $155=(($154)&4294967295); //@line 937 "_json.c"
        var $156=HEAP[$155]; //@line 937 "_json.c"
        var $157=((($156))|0)==0; //@line 937 "_json.c"
        if ($157) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 937 "_json.c"
      case 36: // $bb35
        var $158=HEAP[$_py_tmp]; //@line 937 "_json.c"
        var $159=(($158+4)&4294967295); //@line 937 "_json.c"
        var $160=HEAP[$159]; //@line 937 "_json.c"
        var $161=(($160+24)&4294967295); //@line 937 "_json.c"
        var $162=HEAP[$161]; //@line 937 "_json.c"
        var $163=HEAP[$_py_tmp]; //@line 937 "_json.c"
        FUNCTION_TABLE[$162]($163); //@line 937 "_json.c"
        __label__ = 37; break; //@line 937 "_json.c"
      case 37: // $bb36
        var $164=HEAP[$val]; //@line 938 "_json.c"
        var $165=($164)!=0; //@line 938 "_json.c"
        if ($165) { __label__ = 38; break; } else { __label__ = 40; break; } //@line 938 "_json.c"
      case 38: // $bb37
        var $166=HEAP[$val]; //@line 938 "_json.c"
        HEAP[$_py_tmp38]=$166; //@line 938 "_json.c"
        HEAP[$val]=0; //@line 938 "_json.c"
        var $167=HEAP[$_py_tmp38]; //@line 938 "_json.c"
        var $168=(($167)&4294967295); //@line 938 "_json.c"
        var $169=HEAP[$168]; //@line 938 "_json.c"
        var $170=((($169) - 1)&4294967295); //@line 938 "_json.c"
        var $171=HEAP[$_py_tmp38]; //@line 938 "_json.c"
        var $172=(($171)&4294967295); //@line 938 "_json.c"
        HEAP[$172]=$170; //@line 938 "_json.c"
        var $173=HEAP[$_py_tmp38]; //@line 938 "_json.c"
        var $174=(($173)&4294967295); //@line 938 "_json.c"
        var $175=HEAP[$174]; //@line 938 "_json.c"
        var $176=((($175))|0)==0; //@line 938 "_json.c"
        if ($176) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 938 "_json.c"
      case 39: // $bb39
        var $177=HEAP[$_py_tmp38]; //@line 938 "_json.c"
        var $178=(($177+4)&4294967295); //@line 938 "_json.c"
        var $179=HEAP[$178]; //@line 938 "_json.c"
        var $180=(($179+24)&4294967295); //@line 938 "_json.c"
        var $181=HEAP[$180]; //@line 938 "_json.c"
        var $182=HEAP[$_py_tmp38]; //@line 938 "_json.c"
        FUNCTION_TABLE[$181]($182); //@line 938 "_json.c"
        __label__ = 40; break; //@line 938 "_json.c"
      case 40: // $bb40
        var $183=HEAP[$pairs]; //@line 939 "_json.c"
        var $184=HEAP[$item]; //@line 939 "_json.c"
        var $185=_PyList_Append($183, $184); //@line 939 "_json.c"
        var $186=((($185))|0)==-1; //@line 939 "_json.c"
        if ($186) { __label__ = 41; break; } else { __label__ = 44; break; } //@line 939 "_json.c"
      case 41: // $bb41
        var $187=HEAP[$item]; //@line 940 "_json.c"
        var $188=(($187)&4294967295); //@line 940 "_json.c"
        var $189=HEAP[$188]; //@line 940 "_json.c"
        var $190=((($189) - 1)&4294967295); //@line 940 "_json.c"
        var $191=HEAP[$item]; //@line 940 "_json.c"
        var $192=(($191)&4294967295); //@line 940 "_json.c"
        HEAP[$192]=$190; //@line 940 "_json.c"
        var $193=HEAP[$item]; //@line 940 "_json.c"
        var $194=(($193)&4294967295); //@line 940 "_json.c"
        var $195=HEAP[$194]; //@line 940 "_json.c"
        var $196=((($195))|0)==0; //@line 940 "_json.c"
        if ($196) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 940 "_json.c"
      case 42: // $bb42
        var $197=HEAP[$item]; //@line 940 "_json.c"
        var $198=(($197+4)&4294967295); //@line 940 "_json.c"
        var $199=HEAP[$198]; //@line 940 "_json.c"
        var $200=(($199+24)&4294967295); //@line 940 "_json.c"
        var $201=HEAP[$200]; //@line 940 "_json.c"
        var $202=HEAP[$item]; //@line 940 "_json.c"
        FUNCTION_TABLE[$201]($202); //@line 940 "_json.c"
        __label__ = 43; break; //@line 940 "_json.c"
      case 43: // $bb43
        __label__ = 83; break; //@line 940 "_json.c"
      case 44: // $bb44
        var $203=HEAP[$item]; //@line 943 "_json.c"
        var $204=(($203)&4294967295); //@line 943 "_json.c"
        var $205=HEAP[$204]; //@line 943 "_json.c"
        var $206=((($205) - 1)&4294967295); //@line 943 "_json.c"
        var $207=HEAP[$item]; //@line 943 "_json.c"
        var $208=(($207)&4294967295); //@line 943 "_json.c"
        HEAP[$208]=$206; //@line 943 "_json.c"
        var $209=HEAP[$item]; //@line 943 "_json.c"
        var $210=(($209)&4294967295); //@line 943 "_json.c"
        var $211=HEAP[$210]; //@line 943 "_json.c"
        var $212=((($211))|0)==0; //@line 943 "_json.c"
        if ($212) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 943 "_json.c"
      case 45: // $bb45
        var $213=HEAP[$item]; //@line 943 "_json.c"
        var $214=(($213+4)&4294967295); //@line 943 "_json.c"
        var $215=HEAP[$214]; //@line 943 "_json.c"
        var $216=(($215+24)&4294967295); //@line 943 "_json.c"
        var $217=HEAP[$216]; //@line 943 "_json.c"
        var $218=HEAP[$item]; //@line 943 "_json.c"
        FUNCTION_TABLE[$217]($218); //@line 943 "_json.c"
        __label__ = 46; break; //@line 943 "_json.c"
      case 46: // $bb46
        var $219=HEAP[$next_idx]; //@line 944 "_json.c"
        HEAP[$idx_addr]=$219; //@line 944 "_json.c"
        __label__ = 48; break; //@line 944 "_json.c"
      case 47: // $bb47
        var $220=HEAP[$idx_addr]; //@line 947 "_json.c"
        var $221=((($220) + 1)&4294967295); //@line 947 "_json.c"
        HEAP[$idx_addr]=$221; //@line 947 "_json.c"
        __label__ = 48; break; //@line 947 "_json.c"
      case 48: // $bb48
        var $222=HEAP[$idx_addr]; //@line 947 "_json.c"
        var $223=HEAP[$end_idx]; //@line 947 "_json.c"
        var $224=((($222))|0) > ((($223))|0); //@line 947 "_json.c"
        if ($224) { __label__ = 53; break; } else { __label__ = 49; break; } //@line 947 "_json.c"
      case 49: // $bb49
        var $225=HEAP[$str]; //@line 947 "_json.c"
        var $226=HEAP[$idx_addr]; //@line 947 "_json.c"
        var $227=(($225+$226)&4294967295); //@line 947 "_json.c"
        var $228=HEAP[$227]; //@line 947 "_json.c"
        var $229=reSign(($228), 8, 0)==32; //@line 947 "_json.c"
        if ($229) { __label__ = 47; break; } else { __label__ = 50; break; } //@line 947 "_json.c"
      case 50: // $bb50
        var $230=HEAP[$str]; //@line 947 "_json.c"
        var $231=HEAP[$idx_addr]; //@line 947 "_json.c"
        var $232=(($230+$231)&4294967295); //@line 947 "_json.c"
        var $233=HEAP[$232]; //@line 947 "_json.c"
        var $234=reSign(($233), 8, 0)==9; //@line 947 "_json.c"
        if ($234) { __label__ = 47; break; } else { __label__ = 51; break; } //@line 947 "_json.c"
      case 51: // $bb51
        var $235=HEAP[$str]; //@line 947 "_json.c"
        var $236=HEAP[$idx_addr]; //@line 947 "_json.c"
        var $237=(($235+$236)&4294967295); //@line 947 "_json.c"
        var $238=HEAP[$237]; //@line 947 "_json.c"
        var $239=reSign(($238), 8, 0)==10; //@line 947 "_json.c"
        if ($239) { __label__ = 47; break; } else { __label__ = 52; break; } //@line 947 "_json.c"
      case 52: // $bb52
        var $240=HEAP[$str]; //@line 947 "_json.c"
        var $241=HEAP[$idx_addr]; //@line 947 "_json.c"
        var $242=(($240+$241)&4294967295); //@line 947 "_json.c"
        var $243=HEAP[$242]; //@line 947 "_json.c"
        var $244=reSign(($243), 8, 0)==13; //@line 947 "_json.c"
        if ($244) { __label__ = 47; break; } else { __label__ = 53; break; } //@line 947 "_json.c"
      case 53: // $bb53
        var $245=HEAP[$idx_addr]; //@line 950 "_json.c"
        var $246=HEAP[$end_idx]; //@line 950 "_json.c"
        var $247=((($245))|0) > ((($246))|0); //@line 950 "_json.c"
        if ($247) { __label__ = 65; break; } else { __label__ = 54; break; } //@line 950 "_json.c"
      case 54: // $bb54
        var $248=HEAP[$str]; //@line 951 "_json.c"
        var $249=HEAP[$idx_addr]; //@line 951 "_json.c"
        var $250=(($248+$249)&4294967295); //@line 951 "_json.c"
        var $251=HEAP[$250]; //@line 951 "_json.c"
        var $252=reSign(($251), 8, 0)==125; //@line 951 "_json.c"
        if ($252) { __label__ = 65; break; } else { __label__ = 55; break; } //@line 951 "_json.c"
      case 55: // $bb55
        var $253=HEAP[$str]; //@line 954 "_json.c"
        var $254=HEAP[$idx_addr]; //@line 954 "_json.c"
        var $255=(($253+$254)&4294967295); //@line 954 "_json.c"
        var $256=HEAP[$255]; //@line 954 "_json.c"
        var $257=reSign(($256), 8, 0)!=44; //@line 954 "_json.c"
        if ($257) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 954 "_json.c"
      case 56: // $bb56
        var $258=HEAP[$pystr_addr]; //@line 955 "_json.c"
        var $259=HEAP[$idx_addr]; //@line 955 "_json.c"
        _raise_errmsg(((__str32)&4294967295), $258, $259); //@line 955 "_json.c"
        __label__ = 83; break; //@line 955 "_json.c"
      case 57: // $bb57
        var $260=HEAP[$idx_addr]; //@line 958 "_json.c"
        var $261=((($260) + 1)&4294967295); //@line 958 "_json.c"
        HEAP[$idx_addr]=$261; //@line 958 "_json.c"
        __label__ = 59; break; //@line 958 "_json.c"
      case 58: // $bb58
        var $262=HEAP[$idx_addr]; //@line 961 "_json.c"
        var $263=((($262) + 1)&4294967295); //@line 961 "_json.c"
        HEAP[$idx_addr]=$263; //@line 961 "_json.c"
        __label__ = 59; break; //@line 961 "_json.c"
      case 59: // $bb59
        var $264=HEAP[$idx_addr]; //@line 961 "_json.c"
        var $265=HEAP[$end_idx]; //@line 961 "_json.c"
        var $266=((($264))|0) > ((($265))|0); //@line 961 "_json.c"
        if ($266) { __label__ = 64; break; } else { __label__ = 60; break; } //@line 961 "_json.c"
      case 60: // $bb60
        var $267=HEAP[$str]; //@line 961 "_json.c"
        var $268=HEAP[$idx_addr]; //@line 961 "_json.c"
        var $269=(($267+$268)&4294967295); //@line 961 "_json.c"
        var $270=HEAP[$269]; //@line 961 "_json.c"
        var $271=reSign(($270), 8, 0)==32; //@line 961 "_json.c"
        if ($271) { __label__ = 58; break; } else { __label__ = 61; break; } //@line 961 "_json.c"
      case 61: // $bb61
        var $272=HEAP[$str]; //@line 961 "_json.c"
        var $273=HEAP[$idx_addr]; //@line 961 "_json.c"
        var $274=(($272+$273)&4294967295); //@line 961 "_json.c"
        var $275=HEAP[$274]; //@line 961 "_json.c"
        var $276=reSign(($275), 8, 0)==9; //@line 961 "_json.c"
        if ($276) { __label__ = 58; break; } else { __label__ = 62; break; } //@line 961 "_json.c"
      case 62: // $bb62
        var $277=HEAP[$str]; //@line 961 "_json.c"
        var $278=HEAP[$idx_addr]; //@line 961 "_json.c"
        var $279=(($277+$278)&4294967295); //@line 961 "_json.c"
        var $280=HEAP[$279]; //@line 961 "_json.c"
        var $281=reSign(($280), 8, 0)==10; //@line 961 "_json.c"
        if ($281) { __label__ = 58; break; } else { __label__ = 63; break; } //@line 961 "_json.c"
      case 63: // $bb63
        var $282=HEAP[$str]; //@line 961 "_json.c"
        var $283=HEAP[$idx_addr]; //@line 961 "_json.c"
        var $284=(($282+$283)&4294967295); //@line 961 "_json.c"
        var $285=HEAP[$284]; //@line 961 "_json.c"
        var $286=reSign(($285), 8, 0)==13; //@line 961 "_json.c"
        if ($286) { __label__ = 58; break; } else { __label__ = 64; break; } //@line 961 "_json.c"
      case 64: // $bb64
        var $287=HEAP[$idx_addr]; //@line 909 "_json.c"
        var $288=HEAP[$end_idx]; //@line 909 "_json.c"
        var $289=((($287))|0) <= ((($288))|0); //@line 909 "_json.c"
        if ($289) { __label__ = 12; break; } else { __label__ = 65; break; } //@line 909 "_json.c"
      case 65: // $bb65
        var $290=HEAP[$idx_addr]; //@line 965 "_json.c"
        var $291=HEAP[$end_idx]; //@line 965 "_json.c"
        var $292=((($290))|0) > ((($291))|0); //@line 965 "_json.c"
        if ($292) { __label__ = 67; break; } else { __label__ = 66; break; } //@line 965 "_json.c"
      case 66: // $bb66
        var $293=HEAP[$str]; //@line 965 "_json.c"
        var $294=HEAP[$idx_addr]; //@line 965 "_json.c"
        var $295=(($293+$294)&4294967295); //@line 965 "_json.c"
        var $296=HEAP[$295]; //@line 965 "_json.c"
        var $297=reSign(($296), 8, 0)!=125; //@line 965 "_json.c"
        if ($297) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 965 "_json.c"
      case 67: // $bb67
        var $298=HEAP[$pystr_addr]; //@line 966 "_json.c"
        var $299=HEAP[$end_idx]; //@line 966 "_json.c"
        _raise_errmsg(((__str33)&4294967295), $298, $299); //@line 966 "_json.c"
        __label__ = 83; break; //@line 966 "_json.c"
      case 68: // $bb68
        var $300=HEAP[$s_addr]; //@line 971 "_json.c"
        var $301=(($300+20)&4294967295); //@line 971 "_json.c"
        var $302=HEAP[$301]; //@line 971 "_json.c"
        var $303=($302)!=(__Py_NoneStruct); //@line 971 "_json.c"
        if ($303) { __label__ = 69; break; } else { __label__ = 73; break; } //@line 971 "_json.c"
      case 69: // $bb69
        var $304=HEAP[$s_addr]; //@line 972 "_json.c"
        var $305=(($304+20)&4294967295); //@line 972 "_json.c"
        var $306=HEAP[$305]; //@line 972 "_json.c"
        var $307=HEAP[$pairs]; //@line 972 "_json.c"
        var $308=_PyObject_CallFunctionObjArgs($306, $307, 0); //@line 972 "_json.c"
        HEAP[$val]=$308; //@line 972 "_json.c"
        var $309=HEAP[$val]; //@line 973 "_json.c"
        var $310=($309)==0; //@line 973 "_json.c"
        if ($310) { __label__ = 83; break; } else { __label__ = 70; break; } //@line 973 "_json.c"
      case 70: // $bb70
        var $311=HEAP[$pairs]; //@line 975 "_json.c"
        var $312=(($311)&4294967295); //@line 975 "_json.c"
        var $313=HEAP[$312]; //@line 975 "_json.c"
        var $314=((($313) - 1)&4294967295); //@line 975 "_json.c"
        var $315=HEAP[$pairs]; //@line 975 "_json.c"
        var $316=(($315)&4294967295); //@line 975 "_json.c"
        HEAP[$316]=$314; //@line 975 "_json.c"
        var $317=HEAP[$pairs]; //@line 975 "_json.c"
        var $318=(($317)&4294967295); //@line 975 "_json.c"
        var $319=HEAP[$318]; //@line 975 "_json.c"
        var $320=((($319))|0)==0; //@line 975 "_json.c"
        if ($320) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 975 "_json.c"
      case 71: // $bb71
        var $321=HEAP[$pairs]; //@line 975 "_json.c"
        var $322=(($321+4)&4294967295); //@line 975 "_json.c"
        var $323=HEAP[$322]; //@line 975 "_json.c"
        var $324=(($323+24)&4294967295); //@line 975 "_json.c"
        var $325=HEAP[$324]; //@line 975 "_json.c"
        var $326=HEAP[$pairs]; //@line 975 "_json.c"
        FUNCTION_TABLE[$325]($326); //@line 975 "_json.c"
        __label__ = 72; break; //@line 975 "_json.c"
      case 72: // $bb72
        var $327=HEAP[$idx_addr]; //@line 976 "_json.c"
        var $328=((($327) + 1)&4294967295); //@line 976 "_json.c"
        var $329=HEAP[$next_idx_ptr_addr]; //@line 976 "_json.c"
        HEAP[$329]=$328; //@line 976 "_json.c"
        var $330=HEAP[$val]; //@line 977 "_json.c"
        HEAP[$0]=$330; //@line 977 "_json.c"
        __label__ = 93; break; //@line 977 "_json.c"
      case 73: // $bb73
        var $331=HEAP[$pairs]; //@line 980 "_json.c"
        var $332=_PyObject_CallFunctionObjArgs(_PyDict_Type, $331, 0); //@line 980 "_json.c"
        HEAP[$rval]=$332; //@line 980 "_json.c"
        var $333=HEAP[$rval]; //@line 982 "_json.c"
        var $334=($333)==0; //@line 982 "_json.c"
        if ($334) { __label__ = 83; break; } else { __label__ = 74; break; } //@line 982 "_json.c"
      case 74: // $bb74
        var $335=HEAP[$pairs]; //@line 984 "_json.c"
        var $336=($335)!=0; //@line 984 "_json.c"
        if ($336) { __label__ = 75; break; } else { __label__ = 77; break; } //@line 984 "_json.c"
      case 75: // $bb75
        var $337=HEAP[$pairs]; //@line 984 "_json.c"
        HEAP[$_py_tmp76]=$337; //@line 984 "_json.c"
        HEAP[$pairs]=0; //@line 984 "_json.c"
        var $338=HEAP[$_py_tmp76]; //@line 984 "_json.c"
        var $339=(($338)&4294967295); //@line 984 "_json.c"
        var $340=HEAP[$339]; //@line 984 "_json.c"
        var $341=((($340) - 1)&4294967295); //@line 984 "_json.c"
        var $342=HEAP[$_py_tmp76]; //@line 984 "_json.c"
        var $343=(($342)&4294967295); //@line 984 "_json.c"
        HEAP[$343]=$341; //@line 984 "_json.c"
        var $344=HEAP[$_py_tmp76]; //@line 984 "_json.c"
        var $345=(($344)&4294967295); //@line 984 "_json.c"
        var $346=HEAP[$345]; //@line 984 "_json.c"
        var $347=((($346))|0)==0; //@line 984 "_json.c"
        if ($347) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 984 "_json.c"
      case 76: // $bb77
        var $348=HEAP[$_py_tmp76]; //@line 984 "_json.c"
        var $349=(($348+4)&4294967295); //@line 984 "_json.c"
        var $350=HEAP[$349]; //@line 984 "_json.c"
        var $351=(($350+24)&4294967295); //@line 984 "_json.c"
        var $352=HEAP[$351]; //@line 984 "_json.c"
        var $353=HEAP[$_py_tmp76]; //@line 984 "_json.c"
        FUNCTION_TABLE[$352]($353); //@line 984 "_json.c"
        __label__ = 77; break; //@line 984 "_json.c"
      case 77: // $bb78
        var $354=HEAP[$s_addr]; //@line 987 "_json.c"
        var $355=(($354+16)&4294967295); //@line 987 "_json.c"
        var $356=HEAP[$355]; //@line 987 "_json.c"
        var $357=($356)!=(__Py_NoneStruct); //@line 987 "_json.c"
        if ($357) { __label__ = 78; break; } else { __label__ = 82; break; } //@line 987 "_json.c"
      case 78: // $bb79
        var $358=HEAP[$s_addr]; //@line 988 "_json.c"
        var $359=(($358+16)&4294967295); //@line 988 "_json.c"
        var $360=HEAP[$359]; //@line 988 "_json.c"
        var $361=HEAP[$rval]; //@line 988 "_json.c"
        var $362=_PyObject_CallFunctionObjArgs($360, $361, 0); //@line 988 "_json.c"
        HEAP[$val]=$362; //@line 988 "_json.c"
        var $363=HEAP[$val]; //@line 989 "_json.c"
        var $364=($363)==0; //@line 989 "_json.c"
        if ($364) { __label__ = 83; break; } else { __label__ = 79; break; } //@line 989 "_json.c"
      case 79: // $bb80
        var $365=HEAP[$rval]; //@line 991 "_json.c"
        var $366=(($365)&4294967295); //@line 991 "_json.c"
        var $367=HEAP[$366]; //@line 991 "_json.c"
        var $368=((($367) - 1)&4294967295); //@line 991 "_json.c"
        var $369=HEAP[$rval]; //@line 991 "_json.c"
        var $370=(($369)&4294967295); //@line 991 "_json.c"
        HEAP[$370]=$368; //@line 991 "_json.c"
        var $371=HEAP[$rval]; //@line 991 "_json.c"
        var $372=(($371)&4294967295); //@line 991 "_json.c"
        var $373=HEAP[$372]; //@line 991 "_json.c"
        var $374=((($373))|0)==0; //@line 991 "_json.c"
        if ($374) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 991 "_json.c"
      case 80: // $bb81
        var $375=HEAP[$rval]; //@line 991 "_json.c"
        var $376=(($375+4)&4294967295); //@line 991 "_json.c"
        var $377=HEAP[$376]; //@line 991 "_json.c"
        var $378=(($377+24)&4294967295); //@line 991 "_json.c"
        var $379=HEAP[$378]; //@line 991 "_json.c"
        var $380=HEAP[$rval]; //@line 991 "_json.c"
        FUNCTION_TABLE[$379]($380); //@line 991 "_json.c"
        __label__ = 81; break; //@line 991 "_json.c"
      case 81: // $bb82
        var $381=HEAP[$val]; //@line 992 "_json.c"
        HEAP[$rval]=$381; //@line 992 "_json.c"
        HEAP[$val]=0; //@line 993 "_json.c"
        __label__ = 82; break; //@line 993 "_json.c"
      case 82: // $bb83
        var $382=HEAP[$idx_addr]; //@line 995 "_json.c"
        var $383=((($382) + 1)&4294967295); //@line 995 "_json.c"
        var $384=HEAP[$next_idx_ptr_addr]; //@line 995 "_json.c"
        HEAP[$384]=$383; //@line 995 "_json.c"
        var $385=HEAP[$rval]; //@line 996 "_json.c"
        HEAP[$0]=$385; //@line 996 "_json.c"
        __label__ = 93; break; //@line 996 "_json.c"
      case 83: // $bail
        var $386=HEAP[$key]; //@line 998 "_json.c"
        var $387=($386)!=0; //@line 998 "_json.c"
        if ($387) { __label__ = 84; break; } else { __label__ = 86; break; } //@line 998 "_json.c"
      case 84: // $bb84
        var $388=HEAP[$key]; //@line 998 "_json.c"
        var $389=(($388)&4294967295); //@line 998 "_json.c"
        var $390=HEAP[$389]; //@line 998 "_json.c"
        var $391=((($390) - 1)&4294967295); //@line 998 "_json.c"
        var $392=HEAP[$key]; //@line 998 "_json.c"
        var $393=(($392)&4294967295); //@line 998 "_json.c"
        HEAP[$393]=$391; //@line 998 "_json.c"
        var $394=HEAP[$key]; //@line 998 "_json.c"
        var $395=(($394)&4294967295); //@line 998 "_json.c"
        var $396=HEAP[$395]; //@line 998 "_json.c"
        var $397=((($396))|0)==0; //@line 998 "_json.c"
        if ($397) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 998 "_json.c"
      case 85: // $bb85
        var $398=HEAP[$key]; //@line 998 "_json.c"
        var $399=(($398+4)&4294967295); //@line 998 "_json.c"
        var $400=HEAP[$399]; //@line 998 "_json.c"
        var $401=(($400+24)&4294967295); //@line 998 "_json.c"
        var $402=HEAP[$401]; //@line 998 "_json.c"
        var $403=HEAP[$key]; //@line 998 "_json.c"
        FUNCTION_TABLE[$402]($403); //@line 998 "_json.c"
        __label__ = 86; break; //@line 998 "_json.c"
      case 86: // $bb86
        var $404=HEAP[$val]; //@line 999 "_json.c"
        var $405=($404)!=0; //@line 999 "_json.c"
        if ($405) { __label__ = 87; break; } else { __label__ = 89; break; } //@line 999 "_json.c"
      case 87: // $bb87
        var $406=HEAP[$val]; //@line 999 "_json.c"
        var $407=(($406)&4294967295); //@line 999 "_json.c"
        var $408=HEAP[$407]; //@line 999 "_json.c"
        var $409=((($408) - 1)&4294967295); //@line 999 "_json.c"
        var $410=HEAP[$val]; //@line 999 "_json.c"
        var $411=(($410)&4294967295); //@line 999 "_json.c"
        HEAP[$411]=$409; //@line 999 "_json.c"
        var $412=HEAP[$val]; //@line 999 "_json.c"
        var $413=(($412)&4294967295); //@line 999 "_json.c"
        var $414=HEAP[$413]; //@line 999 "_json.c"
        var $415=((($414))|0)==0; //@line 999 "_json.c"
        if ($415) { __label__ = 88; break; } else { __label__ = 89; break; } //@line 999 "_json.c"
      case 88: // $bb88
        var $416=HEAP[$val]; //@line 999 "_json.c"
        var $417=(($416+4)&4294967295); //@line 999 "_json.c"
        var $418=HEAP[$417]; //@line 999 "_json.c"
        var $419=(($418+24)&4294967295); //@line 999 "_json.c"
        var $420=HEAP[$419]; //@line 999 "_json.c"
        var $421=HEAP[$val]; //@line 999 "_json.c"
        FUNCTION_TABLE[$420]($421); //@line 999 "_json.c"
        __label__ = 89; break; //@line 999 "_json.c"
      case 89: // $bb89
        var $422=HEAP[$pairs]; //@line 1000 "_json.c"
        var $423=($422)!=0; //@line 1000 "_json.c"
        if ($423) { __label__ = 90; break; } else { __label__ = 92; break; } //@line 1000 "_json.c"
      case 90: // $bb90
        var $424=HEAP[$pairs]; //@line 1000 "_json.c"
        var $425=(($424)&4294967295); //@line 1000 "_json.c"
        var $426=HEAP[$425]; //@line 1000 "_json.c"
        var $427=((($426) - 1)&4294967295); //@line 1000 "_json.c"
        var $428=HEAP[$pairs]; //@line 1000 "_json.c"
        var $429=(($428)&4294967295); //@line 1000 "_json.c"
        HEAP[$429]=$427; //@line 1000 "_json.c"
        var $430=HEAP[$pairs]; //@line 1000 "_json.c"
        var $431=(($430)&4294967295); //@line 1000 "_json.c"
        var $432=HEAP[$431]; //@line 1000 "_json.c"
        var $433=((($432))|0)==0; //@line 1000 "_json.c"
        if ($433) { __label__ = 91; break; } else { __label__ = 92; break; } //@line 1000 "_json.c"
      case 91: // $bb91
        var $434=HEAP[$pairs]; //@line 1000 "_json.c"
        var $435=(($434+4)&4294967295); //@line 1000 "_json.c"
        var $436=HEAP[$435]; //@line 1000 "_json.c"
        var $437=(($436+24)&4294967295); //@line 1000 "_json.c"
        var $438=HEAP[$437]; //@line 1000 "_json.c"
        var $439=HEAP[$pairs]; //@line 1000 "_json.c"
        FUNCTION_TABLE[$438]($439); //@line 1000 "_json.c"
        __label__ = 92; break; //@line 1000 "_json.c"
      case 92: // $bb92
        HEAP[$0]=0; //@line 1001 "_json.c"
        __label__ = 93; break; //@line 1001 "_json.c"
      case 93: // $bb93
        var $440=HEAP[$0]; //@line 902 "_json.c"
        HEAP[$retval]=$440; //@line 902 "_json.c"
        __label__ = 94; break; //@line 902 "_json.c"
      case 94: // $return
        var $retval94=HEAP[$retval]; //@line 902 "_json.c"
        STACKTOP = __stackBase__;
        return $retval94; //@line 902 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __parse_object_unicode($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 72; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $pystr_addr=__stackBase__+4;
        var $idx_addr=__stackBase__+8;
        var $next_idx_ptr_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $str=__stackBase__+24;
        var $end_idx=__stackBase__+28;
        var $rval=__stackBase__+32;
        var $pairs=__stackBase__+36;
        var $item=__stackBase__+40;
        var $key=__stackBase__+44;
        var $val=__stackBase__+48;
        var $strict=__stackBase__+52;
        var $next_idx=__stackBase__+56;
        var $_py_tmp=__stackBase__+60;
        var $_py_tmp38=__stackBase__+64;
        var $_py_tmp76=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$pystr_addr]=$pystr;
        HEAP[$idx_addr]=$idx;
        HEAP[$next_idx_ptr_addr]=$next_idx_ptr;
        var $1=HEAP[$pystr_addr]; //@line 1013 "_json.c"
        var $2=$1; //@line 1013 "_json.c"
        var $3=(($2+12)&4294967295); //@line 1013 "_json.c"
        var $4=HEAP[$3]; //@line 1013 "_json.c"
        HEAP[$str]=$4; //@line 1013 "_json.c"
        var $5=HEAP[$pystr_addr]; //@line 1014 "_json.c"
        var $6=$5; //@line 1014 "_json.c"
        var $7=(($6+8)&4294967295); //@line 1014 "_json.c"
        var $8=HEAP[$7]; //@line 1014 "_json.c"
        var $9=((($8) - 1)&4294967295); //@line 1014 "_json.c"
        HEAP[$end_idx]=$9; //@line 1014 "_json.c"
        HEAP[$key]=0; //@line 1018 "_json.c"
        HEAP[$val]=0; //@line 1019 "_json.c"
        var $10=HEAP[$s_addr]; //@line 1020 "_json.c"
        var $11=(($10+12)&4294967295); //@line 1020 "_json.c"
        var $12=HEAP[$11]; //@line 1020 "_json.c"
        var $13=_PyObject_IsTrue($12); //@line 1020 "_json.c"
        HEAP[$strict]=$13; //@line 1020 "_json.c"
        var $14=_PyList_New(0); //@line 1023 "_json.c"
        HEAP[$pairs]=$14; //@line 1023 "_json.c"
        var $15=HEAP[$pairs]; //@line 1024 "_json.c"
        var $16=($15)==0; //@line 1024 "_json.c"
        if ($16) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1024 "_json.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1025 "_json.c"
        __label__ = 93; break; //@line 1025 "_json.c"
      case 2: // $bb1
        __label__ = 4; break; //@line 1025 "_json.c"
      case 3: // $bb2
        var $17=HEAP[$idx_addr]; //@line 1028 "_json.c"
        var $18=((($17) + 1)&4294967295); //@line 1028 "_json.c"
        HEAP[$idx_addr]=$18; //@line 1028 "_json.c"
        __label__ = 4; break; //@line 1028 "_json.c"
      case 4: // $bb3
        var $19=HEAP[$idx_addr]; //@line 1028 "_json.c"
        var $20=HEAP[$end_idx]; //@line 1028 "_json.c"
        var $21=((($19))|0) > ((($20))|0); //@line 1028 "_json.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 5; break; } //@line 1028 "_json.c"
      case 5: // $bb4
        var $22=HEAP[$str]; //@line 1028 "_json.c"
        var $23=HEAP[$idx_addr]; //@line 1028 "_json.c"
        var $24=(($22+2*$23)&4294967295); //@line 1028 "_json.c"
        var $25=HEAP[$24]; //@line 1028 "_json.c"
        var $26=reSign(($25), 16, 0)==32; //@line 1028 "_json.c"
        if ($26) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1028 "_json.c"
      case 6: // $bb5
        var $27=HEAP[$str]; //@line 1028 "_json.c"
        var $28=HEAP[$idx_addr]; //@line 1028 "_json.c"
        var $29=(($27+2*$28)&4294967295); //@line 1028 "_json.c"
        var $30=HEAP[$29]; //@line 1028 "_json.c"
        var $31=reSign(($30), 16, 0)==9; //@line 1028 "_json.c"
        if ($31) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 1028 "_json.c"
      case 7: // $bb6
        var $32=HEAP[$str]; //@line 1028 "_json.c"
        var $33=HEAP[$idx_addr]; //@line 1028 "_json.c"
        var $34=(($32+2*$33)&4294967295); //@line 1028 "_json.c"
        var $35=HEAP[$34]; //@line 1028 "_json.c"
        var $36=reSign(($35), 16, 0)==10; //@line 1028 "_json.c"
        if ($36) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 1028 "_json.c"
      case 8: // $bb7
        var $37=HEAP[$str]; //@line 1028 "_json.c"
        var $38=HEAP[$idx_addr]; //@line 1028 "_json.c"
        var $39=(($37+2*$38)&4294967295); //@line 1028 "_json.c"
        var $40=HEAP[$39]; //@line 1028 "_json.c"
        var $41=reSign(($40), 16, 0)==13; //@line 1028 "_json.c"
        if ($41) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 1028 "_json.c"
      case 9: // $bb8
        var $42=HEAP[$idx_addr]; //@line 1031 "_json.c"
        var $43=HEAP[$end_idx]; //@line 1031 "_json.c"
        var $44=((($42))|0) <= ((($43))|0); //@line 1031 "_json.c"
        if ($44) { __label__ = 10; break; } else { __label__ = 65; break; } //@line 1031 "_json.c"
      case 10: // $bb9
        var $45=HEAP[$str]; //@line 1031 "_json.c"
        var $46=HEAP[$idx_addr]; //@line 1031 "_json.c"
        var $47=(($45+2*$46)&4294967295); //@line 1031 "_json.c"
        var $48=HEAP[$47]; //@line 1031 "_json.c"
        var $49=reSign(($48), 16, 0)!=125; //@line 1031 "_json.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 65; break; } //@line 1031 "_json.c"
      case 11: // $bb10
        __label__ = 64; break; //@line 1031 "_json.c"
      case 12: // $bb11
        var $50=HEAP[$str]; //@line 1034 "_json.c"
        var $51=HEAP[$idx_addr]; //@line 1034 "_json.c"
        var $52=(($50+2*$51)&4294967295); //@line 1034 "_json.c"
        var $53=HEAP[$52]; //@line 1034 "_json.c"
        var $54=reSign(($53), 16, 0)!=34; //@line 1034 "_json.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1034 "_json.c"
      case 13: // $bb12
        var $55=HEAP[$pystr_addr]; //@line 1035 "_json.c"
        var $56=HEAP[$idx_addr]; //@line 1035 "_json.c"
        _raise_errmsg(((__str30)&4294967295), $55, $56); //@line 1035 "_json.c"
        __label__ = 83; break; //@line 1035 "_json.c"
      case 14: // $bb13
        var $57=HEAP[$idx_addr]; //@line 1038 "_json.c"
        var $58=((($57) + 1)&4294967295); //@line 1038 "_json.c"
        var $59=HEAP[$pystr_addr]; //@line 1038 "_json.c"
        var $60=HEAP[$strict]; //@line 1038 "_json.c"
        var $61=_scanstring_unicode($59, $58, $60, $next_idx); //@line 1038 "_json.c"
        HEAP[$key]=$61; //@line 1038 "_json.c"
        var $62=HEAP[$key]; //@line 1039 "_json.c"
        var $63=($62)==0; //@line 1039 "_json.c"
        if ($63) { __label__ = 83; break; } else { __label__ = 15; break; } //@line 1039 "_json.c"
      case 15: // $bb14
        var $64=HEAP[$next_idx]; //@line 1041 "_json.c"
        HEAP[$idx_addr]=$64; //@line 1041 "_json.c"
        __label__ = 17; break; //@line 1041 "_json.c"
      case 16: // $bb15
        var $65=HEAP[$idx_addr]; //@line 1044 "_json.c"
        var $66=((($65) + 1)&4294967295); //@line 1044 "_json.c"
        HEAP[$idx_addr]=$66; //@line 1044 "_json.c"
        __label__ = 17; break; //@line 1044 "_json.c"
      case 17: // $bb16
        var $67=HEAP[$idx_addr]; //@line 1044 "_json.c"
        var $68=HEAP[$end_idx]; //@line 1044 "_json.c"
        var $69=((($67))|0) > ((($68))|0); //@line 1044 "_json.c"
        if ($69) { __label__ = 22; break; } else { __label__ = 18; break; } //@line 1044 "_json.c"
      case 18: // $bb17
        var $70=HEAP[$str]; //@line 1044 "_json.c"
        var $71=HEAP[$idx_addr]; //@line 1044 "_json.c"
        var $72=(($70+2*$71)&4294967295); //@line 1044 "_json.c"
        var $73=HEAP[$72]; //@line 1044 "_json.c"
        var $74=reSign(($73), 16, 0)==32; //@line 1044 "_json.c"
        if ($74) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 1044 "_json.c"
      case 19: // $bb18
        var $75=HEAP[$str]; //@line 1044 "_json.c"
        var $76=HEAP[$idx_addr]; //@line 1044 "_json.c"
        var $77=(($75+2*$76)&4294967295); //@line 1044 "_json.c"
        var $78=HEAP[$77]; //@line 1044 "_json.c"
        var $79=reSign(($78), 16, 0)==9; //@line 1044 "_json.c"
        if ($79) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 1044 "_json.c"
      case 20: // $bb19
        var $80=HEAP[$str]; //@line 1044 "_json.c"
        var $81=HEAP[$idx_addr]; //@line 1044 "_json.c"
        var $82=(($80+2*$81)&4294967295); //@line 1044 "_json.c"
        var $83=HEAP[$82]; //@line 1044 "_json.c"
        var $84=reSign(($83), 16, 0)==10; //@line 1044 "_json.c"
        if ($84) { __label__ = 16; break; } else { __label__ = 21; break; } //@line 1044 "_json.c"
      case 21: // $bb20
        var $85=HEAP[$str]; //@line 1044 "_json.c"
        var $86=HEAP[$idx_addr]; //@line 1044 "_json.c"
        var $87=(($85+2*$86)&4294967295); //@line 1044 "_json.c"
        var $88=HEAP[$87]; //@line 1044 "_json.c"
        var $89=reSign(($88), 16, 0)==13; //@line 1044 "_json.c"
        if ($89) { __label__ = 16; break; } else { __label__ = 22; break; } //@line 1044 "_json.c"
      case 22: // $bb21
        var $90=HEAP[$idx_addr]; //@line 1045 "_json.c"
        var $91=HEAP[$end_idx]; //@line 1045 "_json.c"
        var $92=((($90))|0) > ((($91))|0); //@line 1045 "_json.c"
        if ($92) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 1045 "_json.c"
      case 23: // $bb22
        var $93=HEAP[$str]; //@line 1045 "_json.c"
        var $94=HEAP[$idx_addr]; //@line 1045 "_json.c"
        var $95=(($93+2*$94)&4294967295); //@line 1045 "_json.c"
        var $96=HEAP[$95]; //@line 1045 "_json.c"
        var $97=reSign(($96), 16, 0)!=58; //@line 1045 "_json.c"
        if ($97) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1045 "_json.c"
      case 24: // $bb23
        var $98=HEAP[$pystr_addr]; //@line 1046 "_json.c"
        var $99=HEAP[$idx_addr]; //@line 1046 "_json.c"
        _raise_errmsg(((__str31)&4294967295), $98, $99); //@line 1046 "_json.c"
        __label__ = 83; break; //@line 1046 "_json.c"
      case 25: // $bb24
        var $100=HEAP[$idx_addr]; //@line 1049 "_json.c"
        var $101=((($100) + 1)&4294967295); //@line 1049 "_json.c"
        HEAP[$idx_addr]=$101; //@line 1049 "_json.c"
        __label__ = 27; break; //@line 1049 "_json.c"
      case 26: // $bb25
        var $102=HEAP[$idx_addr]; //@line 1050 "_json.c"
        var $103=((($102) + 1)&4294967295); //@line 1050 "_json.c"
        HEAP[$idx_addr]=$103; //@line 1050 "_json.c"
        __label__ = 27; break; //@line 1050 "_json.c"
      case 27: // $bb26
        var $104=HEAP[$idx_addr]; //@line 1050 "_json.c"
        var $105=HEAP[$end_idx]; //@line 1050 "_json.c"
        var $106=((($104))|0) > ((($105))|0); //@line 1050 "_json.c"
        if ($106) { __label__ = 32; break; } else { __label__ = 28; break; } //@line 1050 "_json.c"
      case 28: // $bb27
        var $107=HEAP[$str]; //@line 1050 "_json.c"
        var $108=HEAP[$idx_addr]; //@line 1050 "_json.c"
        var $109=(($107+2*$108)&4294967295); //@line 1050 "_json.c"
        var $110=HEAP[$109]; //@line 1050 "_json.c"
        var $111=reSign(($110), 16, 0)==32; //@line 1050 "_json.c"
        if ($111) { __label__ = 26; break; } else { __label__ = 29; break; } //@line 1050 "_json.c"
      case 29: // $bb28
        var $112=HEAP[$str]; //@line 1050 "_json.c"
        var $113=HEAP[$idx_addr]; //@line 1050 "_json.c"
        var $114=(($112+2*$113)&4294967295); //@line 1050 "_json.c"
        var $115=HEAP[$114]; //@line 1050 "_json.c"
        var $116=reSign(($115), 16, 0)==9; //@line 1050 "_json.c"
        if ($116) { __label__ = 26; break; } else { __label__ = 30; break; } //@line 1050 "_json.c"
      case 30: // $bb29
        var $117=HEAP[$str]; //@line 1050 "_json.c"
        var $118=HEAP[$idx_addr]; //@line 1050 "_json.c"
        var $119=(($117+2*$118)&4294967295); //@line 1050 "_json.c"
        var $120=HEAP[$119]; //@line 1050 "_json.c"
        var $121=reSign(($120), 16, 0)==10; //@line 1050 "_json.c"
        if ($121) { __label__ = 26; break; } else { __label__ = 31; break; } //@line 1050 "_json.c"
      case 31: // $bb30
        var $122=HEAP[$str]; //@line 1050 "_json.c"
        var $123=HEAP[$idx_addr]; //@line 1050 "_json.c"
        var $124=(($122+2*$123)&4294967295); //@line 1050 "_json.c"
        var $125=HEAP[$124]; //@line 1050 "_json.c"
        var $126=reSign(($125), 16, 0)==13; //@line 1050 "_json.c"
        if ($126) { __label__ = 26; break; } else { __label__ = 32; break; } //@line 1050 "_json.c"
      case 32: // $bb31
        var $127=HEAP[$s_addr]; //@line 1053 "_json.c"
        var $128=HEAP[$pystr_addr]; //@line 1053 "_json.c"
        var $129=HEAP[$idx_addr]; //@line 1053 "_json.c"
        var $130=_scan_once_unicode($127, $128, $129, $next_idx); //@line 1053 "_json.c"
        HEAP[$val]=$130; //@line 1053 "_json.c"
        var $131=HEAP[$val]; //@line 1054 "_json.c"
        var $132=($131)==0; //@line 1054 "_json.c"
        if ($132) { __label__ = 83; break; } else { __label__ = 33; break; } //@line 1054 "_json.c"
      case 33: // $bb32
        var $133=HEAP[$key]; //@line 1057 "_json.c"
        var $134=HEAP[$val]; //@line 1057 "_json.c"
        var $135=_PyTuple_Pack(2, $133, $134); //@line 1057 "_json.c"
        HEAP[$item]=$135; //@line 1057 "_json.c"
        var $136=HEAP[$item]; //@line 1058 "_json.c"
        var $137=($136)==0; //@line 1058 "_json.c"
        if ($137) { __label__ = 83; break; } else { __label__ = 34; break; } //@line 1058 "_json.c"
      case 34: // $bb33
        var $138=HEAP[$key]; //@line 1060 "_json.c"
        var $139=($138)!=0; //@line 1060 "_json.c"
        if ($139) { __label__ = 35; break; } else { __label__ = 37; break; } //@line 1060 "_json.c"
      case 35: // $bb34
        var $140=HEAP[$key]; //@line 1060 "_json.c"
        HEAP[$_py_tmp]=$140; //@line 1060 "_json.c"
        HEAP[$key]=0; //@line 1060 "_json.c"
        var $141=HEAP[$_py_tmp]; //@line 1060 "_json.c"
        var $142=(($141)&4294967295); //@line 1060 "_json.c"
        var $143=HEAP[$142]; //@line 1060 "_json.c"
        var $144=((($143) - 1)&4294967295); //@line 1060 "_json.c"
        var $145=HEAP[$_py_tmp]; //@line 1060 "_json.c"
        var $146=(($145)&4294967295); //@line 1060 "_json.c"
        HEAP[$146]=$144; //@line 1060 "_json.c"
        var $147=HEAP[$_py_tmp]; //@line 1060 "_json.c"
        var $148=(($147)&4294967295); //@line 1060 "_json.c"
        var $149=HEAP[$148]; //@line 1060 "_json.c"
        var $150=((($149))|0)==0; //@line 1060 "_json.c"
        if ($150) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1060 "_json.c"
      case 36: // $bb35
        var $151=HEAP[$_py_tmp]; //@line 1060 "_json.c"
        var $152=(($151+4)&4294967295); //@line 1060 "_json.c"
        var $153=HEAP[$152]; //@line 1060 "_json.c"
        var $154=(($153+24)&4294967295); //@line 1060 "_json.c"
        var $155=HEAP[$154]; //@line 1060 "_json.c"
        var $156=HEAP[$_py_tmp]; //@line 1060 "_json.c"
        FUNCTION_TABLE[$155]($156); //@line 1060 "_json.c"
        __label__ = 37; break; //@line 1060 "_json.c"
      case 37: // $bb36
        var $157=HEAP[$val]; //@line 1061 "_json.c"
        var $158=($157)!=0; //@line 1061 "_json.c"
        if ($158) { __label__ = 38; break; } else { __label__ = 40; break; } //@line 1061 "_json.c"
      case 38: // $bb37
        var $159=HEAP[$val]; //@line 1061 "_json.c"
        HEAP[$_py_tmp38]=$159; //@line 1061 "_json.c"
        HEAP[$val]=0; //@line 1061 "_json.c"
        var $160=HEAP[$_py_tmp38]; //@line 1061 "_json.c"
        var $161=(($160)&4294967295); //@line 1061 "_json.c"
        var $162=HEAP[$161]; //@line 1061 "_json.c"
        var $163=((($162) - 1)&4294967295); //@line 1061 "_json.c"
        var $164=HEAP[$_py_tmp38]; //@line 1061 "_json.c"
        var $165=(($164)&4294967295); //@line 1061 "_json.c"
        HEAP[$165]=$163; //@line 1061 "_json.c"
        var $166=HEAP[$_py_tmp38]; //@line 1061 "_json.c"
        var $167=(($166)&4294967295); //@line 1061 "_json.c"
        var $168=HEAP[$167]; //@line 1061 "_json.c"
        var $169=((($168))|0)==0; //@line 1061 "_json.c"
        if ($169) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 1061 "_json.c"
      case 39: // $bb39
        var $170=HEAP[$_py_tmp38]; //@line 1061 "_json.c"
        var $171=(($170+4)&4294967295); //@line 1061 "_json.c"
        var $172=HEAP[$171]; //@line 1061 "_json.c"
        var $173=(($172+24)&4294967295); //@line 1061 "_json.c"
        var $174=HEAP[$173]; //@line 1061 "_json.c"
        var $175=HEAP[$_py_tmp38]; //@line 1061 "_json.c"
        FUNCTION_TABLE[$174]($175); //@line 1061 "_json.c"
        __label__ = 40; break; //@line 1061 "_json.c"
      case 40: // $bb40
        var $176=HEAP[$pairs]; //@line 1062 "_json.c"
        var $177=HEAP[$item]; //@line 1062 "_json.c"
        var $178=_PyList_Append($176, $177); //@line 1062 "_json.c"
        var $179=((($178))|0)==-1; //@line 1062 "_json.c"
        if ($179) { __label__ = 41; break; } else { __label__ = 44; break; } //@line 1062 "_json.c"
      case 41: // $bb41
        var $180=HEAP[$item]; //@line 1063 "_json.c"
        var $181=(($180)&4294967295); //@line 1063 "_json.c"
        var $182=HEAP[$181]; //@line 1063 "_json.c"
        var $183=((($182) - 1)&4294967295); //@line 1063 "_json.c"
        var $184=HEAP[$item]; //@line 1063 "_json.c"
        var $185=(($184)&4294967295); //@line 1063 "_json.c"
        HEAP[$185]=$183; //@line 1063 "_json.c"
        var $186=HEAP[$item]; //@line 1063 "_json.c"
        var $187=(($186)&4294967295); //@line 1063 "_json.c"
        var $188=HEAP[$187]; //@line 1063 "_json.c"
        var $189=((($188))|0)==0; //@line 1063 "_json.c"
        if ($189) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1063 "_json.c"
      case 42: // $bb42
        var $190=HEAP[$item]; //@line 1063 "_json.c"
        var $191=(($190+4)&4294967295); //@line 1063 "_json.c"
        var $192=HEAP[$191]; //@line 1063 "_json.c"
        var $193=(($192+24)&4294967295); //@line 1063 "_json.c"
        var $194=HEAP[$193]; //@line 1063 "_json.c"
        var $195=HEAP[$item]; //@line 1063 "_json.c"
        FUNCTION_TABLE[$194]($195); //@line 1063 "_json.c"
        __label__ = 43; break; //@line 1063 "_json.c"
      case 43: // $bb43
        __label__ = 83; break; //@line 1063 "_json.c"
      case 44: // $bb44
        var $196=HEAP[$item]; //@line 1066 "_json.c"
        var $197=(($196)&4294967295); //@line 1066 "_json.c"
        var $198=HEAP[$197]; //@line 1066 "_json.c"
        var $199=((($198) - 1)&4294967295); //@line 1066 "_json.c"
        var $200=HEAP[$item]; //@line 1066 "_json.c"
        var $201=(($200)&4294967295); //@line 1066 "_json.c"
        HEAP[$201]=$199; //@line 1066 "_json.c"
        var $202=HEAP[$item]; //@line 1066 "_json.c"
        var $203=(($202)&4294967295); //@line 1066 "_json.c"
        var $204=HEAP[$203]; //@line 1066 "_json.c"
        var $205=((($204))|0)==0; //@line 1066 "_json.c"
        if ($205) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 1066 "_json.c"
      case 45: // $bb45
        var $206=HEAP[$item]; //@line 1066 "_json.c"
        var $207=(($206+4)&4294967295); //@line 1066 "_json.c"
        var $208=HEAP[$207]; //@line 1066 "_json.c"
        var $209=(($208+24)&4294967295); //@line 1066 "_json.c"
        var $210=HEAP[$209]; //@line 1066 "_json.c"
        var $211=HEAP[$item]; //@line 1066 "_json.c"
        FUNCTION_TABLE[$210]($211); //@line 1066 "_json.c"
        __label__ = 46; break; //@line 1066 "_json.c"
      case 46: // $bb46
        var $212=HEAP[$next_idx]; //@line 1067 "_json.c"
        HEAP[$idx_addr]=$212; //@line 1067 "_json.c"
        __label__ = 48; break; //@line 1067 "_json.c"
      case 47: // $bb47
        var $213=HEAP[$idx_addr]; //@line 1070 "_json.c"
        var $214=((($213) + 1)&4294967295); //@line 1070 "_json.c"
        HEAP[$idx_addr]=$214; //@line 1070 "_json.c"
        __label__ = 48; break; //@line 1070 "_json.c"
      case 48: // $bb48
        var $215=HEAP[$idx_addr]; //@line 1070 "_json.c"
        var $216=HEAP[$end_idx]; //@line 1070 "_json.c"
        var $217=((($215))|0) > ((($216))|0); //@line 1070 "_json.c"
        if ($217) { __label__ = 53; break; } else { __label__ = 49; break; } //@line 1070 "_json.c"
      case 49: // $bb49
        var $218=HEAP[$str]; //@line 1070 "_json.c"
        var $219=HEAP[$idx_addr]; //@line 1070 "_json.c"
        var $220=(($218+2*$219)&4294967295); //@line 1070 "_json.c"
        var $221=HEAP[$220]; //@line 1070 "_json.c"
        var $222=reSign(($221), 16, 0)==32; //@line 1070 "_json.c"
        if ($222) { __label__ = 47; break; } else { __label__ = 50; break; } //@line 1070 "_json.c"
      case 50: // $bb50
        var $223=HEAP[$str]; //@line 1070 "_json.c"
        var $224=HEAP[$idx_addr]; //@line 1070 "_json.c"
        var $225=(($223+2*$224)&4294967295); //@line 1070 "_json.c"
        var $226=HEAP[$225]; //@line 1070 "_json.c"
        var $227=reSign(($226), 16, 0)==9; //@line 1070 "_json.c"
        if ($227) { __label__ = 47; break; } else { __label__ = 51; break; } //@line 1070 "_json.c"
      case 51: // $bb51
        var $228=HEAP[$str]; //@line 1070 "_json.c"
        var $229=HEAP[$idx_addr]; //@line 1070 "_json.c"
        var $230=(($228+2*$229)&4294967295); //@line 1070 "_json.c"
        var $231=HEAP[$230]; //@line 1070 "_json.c"
        var $232=reSign(($231), 16, 0)==10; //@line 1070 "_json.c"
        if ($232) { __label__ = 47; break; } else { __label__ = 52; break; } //@line 1070 "_json.c"
      case 52: // $bb52
        var $233=HEAP[$str]; //@line 1070 "_json.c"
        var $234=HEAP[$idx_addr]; //@line 1070 "_json.c"
        var $235=(($233+2*$234)&4294967295); //@line 1070 "_json.c"
        var $236=HEAP[$235]; //@line 1070 "_json.c"
        var $237=reSign(($236), 16, 0)==13; //@line 1070 "_json.c"
        if ($237) { __label__ = 47; break; } else { __label__ = 53; break; } //@line 1070 "_json.c"
      case 53: // $bb53
        var $238=HEAP[$idx_addr]; //@line 1073 "_json.c"
        var $239=HEAP[$end_idx]; //@line 1073 "_json.c"
        var $240=((($238))|0) > ((($239))|0); //@line 1073 "_json.c"
        if ($240) { __label__ = 65; break; } else { __label__ = 54; break; } //@line 1073 "_json.c"
      case 54: // $bb54
        var $241=HEAP[$str]; //@line 1074 "_json.c"
        var $242=HEAP[$idx_addr]; //@line 1074 "_json.c"
        var $243=(($241+2*$242)&4294967295); //@line 1074 "_json.c"
        var $244=HEAP[$243]; //@line 1074 "_json.c"
        var $245=reSign(($244), 16, 0)==125; //@line 1074 "_json.c"
        if ($245) { __label__ = 65; break; } else { __label__ = 55; break; } //@line 1074 "_json.c"
      case 55: // $bb55
        var $246=HEAP[$str]; //@line 1077 "_json.c"
        var $247=HEAP[$idx_addr]; //@line 1077 "_json.c"
        var $248=(($246+2*$247)&4294967295); //@line 1077 "_json.c"
        var $249=HEAP[$248]; //@line 1077 "_json.c"
        var $250=reSign(($249), 16, 0)!=44; //@line 1077 "_json.c"
        if ($250) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 1077 "_json.c"
      case 56: // $bb56
        var $251=HEAP[$pystr_addr]; //@line 1078 "_json.c"
        var $252=HEAP[$idx_addr]; //@line 1078 "_json.c"
        _raise_errmsg(((__str32)&4294967295), $251, $252); //@line 1078 "_json.c"
        __label__ = 83; break; //@line 1078 "_json.c"
      case 57: // $bb57
        var $253=HEAP[$idx_addr]; //@line 1081 "_json.c"
        var $254=((($253) + 1)&4294967295); //@line 1081 "_json.c"
        HEAP[$idx_addr]=$254; //@line 1081 "_json.c"
        __label__ = 59; break; //@line 1081 "_json.c"
      case 58: // $bb58
        var $255=HEAP[$idx_addr]; //@line 1084 "_json.c"
        var $256=((($255) + 1)&4294967295); //@line 1084 "_json.c"
        HEAP[$idx_addr]=$256; //@line 1084 "_json.c"
        __label__ = 59; break; //@line 1084 "_json.c"
      case 59: // $bb59
        var $257=HEAP[$idx_addr]; //@line 1084 "_json.c"
        var $258=HEAP[$end_idx]; //@line 1084 "_json.c"
        var $259=((($257))|0) > ((($258))|0); //@line 1084 "_json.c"
        if ($259) { __label__ = 64; break; } else { __label__ = 60; break; } //@line 1084 "_json.c"
      case 60: // $bb60
        var $260=HEAP[$str]; //@line 1084 "_json.c"
        var $261=HEAP[$idx_addr]; //@line 1084 "_json.c"
        var $262=(($260+2*$261)&4294967295); //@line 1084 "_json.c"
        var $263=HEAP[$262]; //@line 1084 "_json.c"
        var $264=reSign(($263), 16, 0)==32; //@line 1084 "_json.c"
        if ($264) { __label__ = 58; break; } else { __label__ = 61; break; } //@line 1084 "_json.c"
      case 61: // $bb61
        var $265=HEAP[$str]; //@line 1084 "_json.c"
        var $266=HEAP[$idx_addr]; //@line 1084 "_json.c"
        var $267=(($265+2*$266)&4294967295); //@line 1084 "_json.c"
        var $268=HEAP[$267]; //@line 1084 "_json.c"
        var $269=reSign(($268), 16, 0)==9; //@line 1084 "_json.c"
        if ($269) { __label__ = 58; break; } else { __label__ = 62; break; } //@line 1084 "_json.c"
      case 62: // $bb62
        var $270=HEAP[$str]; //@line 1084 "_json.c"
        var $271=HEAP[$idx_addr]; //@line 1084 "_json.c"
        var $272=(($270+2*$271)&4294967295); //@line 1084 "_json.c"
        var $273=HEAP[$272]; //@line 1084 "_json.c"
        var $274=reSign(($273), 16, 0)==10; //@line 1084 "_json.c"
        if ($274) { __label__ = 58; break; } else { __label__ = 63; break; } //@line 1084 "_json.c"
      case 63: // $bb63
        var $275=HEAP[$str]; //@line 1084 "_json.c"
        var $276=HEAP[$idx_addr]; //@line 1084 "_json.c"
        var $277=(($275+2*$276)&4294967295); //@line 1084 "_json.c"
        var $278=HEAP[$277]; //@line 1084 "_json.c"
        var $279=reSign(($278), 16, 0)==13; //@line 1084 "_json.c"
        if ($279) { __label__ = 58; break; } else { __label__ = 64; break; } //@line 1084 "_json.c"
      case 64: // $bb64
        var $280=HEAP[$idx_addr]; //@line 1032 "_json.c"
        var $281=HEAP[$end_idx]; //@line 1032 "_json.c"
        var $282=((($280))|0) <= ((($281))|0); //@line 1032 "_json.c"
        if ($282) { __label__ = 12; break; } else { __label__ = 65; break; } //@line 1032 "_json.c"
      case 65: // $bb65
        var $283=HEAP[$idx_addr]; //@line 1089 "_json.c"
        var $284=HEAP[$end_idx]; //@line 1089 "_json.c"
        var $285=((($283))|0) > ((($284))|0); //@line 1089 "_json.c"
        if ($285) { __label__ = 67; break; } else { __label__ = 66; break; } //@line 1089 "_json.c"
      case 66: // $bb66
        var $286=HEAP[$str]; //@line 1089 "_json.c"
        var $287=HEAP[$idx_addr]; //@line 1089 "_json.c"
        var $288=(($286+2*$287)&4294967295); //@line 1089 "_json.c"
        var $289=HEAP[$288]; //@line 1089 "_json.c"
        var $290=reSign(($289), 16, 0)!=125; //@line 1089 "_json.c"
        if ($290) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 1089 "_json.c"
      case 67: // $bb67
        var $291=HEAP[$pystr_addr]; //@line 1090 "_json.c"
        var $292=HEAP[$end_idx]; //@line 1090 "_json.c"
        _raise_errmsg(((__str33)&4294967295), $291, $292); //@line 1090 "_json.c"
        __label__ = 83; break; //@line 1090 "_json.c"
      case 68: // $bb68
        var $293=HEAP[$s_addr]; //@line 1095 "_json.c"
        var $294=(($293+20)&4294967295); //@line 1095 "_json.c"
        var $295=HEAP[$294]; //@line 1095 "_json.c"
        var $296=($295)!=(__Py_NoneStruct); //@line 1095 "_json.c"
        if ($296) { __label__ = 69; break; } else { __label__ = 73; break; } //@line 1095 "_json.c"
      case 69: // $bb69
        var $297=HEAP[$s_addr]; //@line 1096 "_json.c"
        var $298=(($297+20)&4294967295); //@line 1096 "_json.c"
        var $299=HEAP[$298]; //@line 1096 "_json.c"
        var $300=HEAP[$pairs]; //@line 1096 "_json.c"
        var $301=_PyObject_CallFunctionObjArgs($299, $300, 0); //@line 1096 "_json.c"
        HEAP[$val]=$301; //@line 1096 "_json.c"
        var $302=HEAP[$val]; //@line 1097 "_json.c"
        var $303=($302)==0; //@line 1097 "_json.c"
        if ($303) { __label__ = 83; break; } else { __label__ = 70; break; } //@line 1097 "_json.c"
      case 70: // $bb70
        var $304=HEAP[$pairs]; //@line 1099 "_json.c"
        var $305=(($304)&4294967295); //@line 1099 "_json.c"
        var $306=HEAP[$305]; //@line 1099 "_json.c"
        var $307=((($306) - 1)&4294967295); //@line 1099 "_json.c"
        var $308=HEAP[$pairs]; //@line 1099 "_json.c"
        var $309=(($308)&4294967295); //@line 1099 "_json.c"
        HEAP[$309]=$307; //@line 1099 "_json.c"
        var $310=HEAP[$pairs]; //@line 1099 "_json.c"
        var $311=(($310)&4294967295); //@line 1099 "_json.c"
        var $312=HEAP[$311]; //@line 1099 "_json.c"
        var $313=((($312))|0)==0; //@line 1099 "_json.c"
        if ($313) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 1099 "_json.c"
      case 71: // $bb71
        var $314=HEAP[$pairs]; //@line 1099 "_json.c"
        var $315=(($314+4)&4294967295); //@line 1099 "_json.c"
        var $316=HEAP[$315]; //@line 1099 "_json.c"
        var $317=(($316+24)&4294967295); //@line 1099 "_json.c"
        var $318=HEAP[$317]; //@line 1099 "_json.c"
        var $319=HEAP[$pairs]; //@line 1099 "_json.c"
        FUNCTION_TABLE[$318]($319); //@line 1099 "_json.c"
        __label__ = 72; break; //@line 1099 "_json.c"
      case 72: // $bb72
        var $320=HEAP[$idx_addr]; //@line 1100 "_json.c"
        var $321=((($320) + 1)&4294967295); //@line 1100 "_json.c"
        var $322=HEAP[$next_idx_ptr_addr]; //@line 1100 "_json.c"
        HEAP[$322]=$321; //@line 1100 "_json.c"
        var $323=HEAP[$val]; //@line 1101 "_json.c"
        HEAP[$0]=$323; //@line 1101 "_json.c"
        __label__ = 93; break; //@line 1101 "_json.c"
      case 73: // $bb73
        var $324=HEAP[$pairs]; //@line 1104 "_json.c"
        var $325=_PyObject_CallFunctionObjArgs(_PyDict_Type, $324, 0); //@line 1104 "_json.c"
        HEAP[$rval]=$325; //@line 1104 "_json.c"
        var $326=HEAP[$rval]; //@line 1106 "_json.c"
        var $327=($326)==0; //@line 1106 "_json.c"
        if ($327) { __label__ = 83; break; } else { __label__ = 74; break; } //@line 1106 "_json.c"
      case 74: // $bb74
        var $328=HEAP[$pairs]; //@line 1108 "_json.c"
        var $329=($328)!=0; //@line 1108 "_json.c"
        if ($329) { __label__ = 75; break; } else { __label__ = 77; break; } //@line 1108 "_json.c"
      case 75: // $bb75
        var $330=HEAP[$pairs]; //@line 1108 "_json.c"
        HEAP[$_py_tmp76]=$330; //@line 1108 "_json.c"
        HEAP[$pairs]=0; //@line 1108 "_json.c"
        var $331=HEAP[$_py_tmp76]; //@line 1108 "_json.c"
        var $332=(($331)&4294967295); //@line 1108 "_json.c"
        var $333=HEAP[$332]; //@line 1108 "_json.c"
        var $334=((($333) - 1)&4294967295); //@line 1108 "_json.c"
        var $335=HEAP[$_py_tmp76]; //@line 1108 "_json.c"
        var $336=(($335)&4294967295); //@line 1108 "_json.c"
        HEAP[$336]=$334; //@line 1108 "_json.c"
        var $337=HEAP[$_py_tmp76]; //@line 1108 "_json.c"
        var $338=(($337)&4294967295); //@line 1108 "_json.c"
        var $339=HEAP[$338]; //@line 1108 "_json.c"
        var $340=((($339))|0)==0; //@line 1108 "_json.c"
        if ($340) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 1108 "_json.c"
      case 76: // $bb77
        var $341=HEAP[$_py_tmp76]; //@line 1108 "_json.c"
        var $342=(($341+4)&4294967295); //@line 1108 "_json.c"
        var $343=HEAP[$342]; //@line 1108 "_json.c"
        var $344=(($343+24)&4294967295); //@line 1108 "_json.c"
        var $345=HEAP[$344]; //@line 1108 "_json.c"
        var $346=HEAP[$_py_tmp76]; //@line 1108 "_json.c"
        FUNCTION_TABLE[$345]($346); //@line 1108 "_json.c"
        __label__ = 77; break; //@line 1108 "_json.c"
      case 77: // $bb78
        var $347=HEAP[$s_addr]; //@line 1111 "_json.c"
        var $348=(($347+16)&4294967295); //@line 1111 "_json.c"
        var $349=HEAP[$348]; //@line 1111 "_json.c"
        var $350=($349)!=(__Py_NoneStruct); //@line 1111 "_json.c"
        if ($350) { __label__ = 78; break; } else { __label__ = 82; break; } //@line 1111 "_json.c"
      case 78: // $bb79
        var $351=HEAP[$s_addr]; //@line 1112 "_json.c"
        var $352=(($351+16)&4294967295); //@line 1112 "_json.c"
        var $353=HEAP[$352]; //@line 1112 "_json.c"
        var $354=HEAP[$rval]; //@line 1112 "_json.c"
        var $355=_PyObject_CallFunctionObjArgs($353, $354, 0); //@line 1112 "_json.c"
        HEAP[$val]=$355; //@line 1112 "_json.c"
        var $356=HEAP[$val]; //@line 1113 "_json.c"
        var $357=($356)==0; //@line 1113 "_json.c"
        if ($357) { __label__ = 83; break; } else { __label__ = 79; break; } //@line 1113 "_json.c"
      case 79: // $bb80
        var $358=HEAP[$rval]; //@line 1115 "_json.c"
        var $359=(($358)&4294967295); //@line 1115 "_json.c"
        var $360=HEAP[$359]; //@line 1115 "_json.c"
        var $361=((($360) - 1)&4294967295); //@line 1115 "_json.c"
        var $362=HEAP[$rval]; //@line 1115 "_json.c"
        var $363=(($362)&4294967295); //@line 1115 "_json.c"
        HEAP[$363]=$361; //@line 1115 "_json.c"
        var $364=HEAP[$rval]; //@line 1115 "_json.c"
        var $365=(($364)&4294967295); //@line 1115 "_json.c"
        var $366=HEAP[$365]; //@line 1115 "_json.c"
        var $367=((($366))|0)==0; //@line 1115 "_json.c"
        if ($367) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 1115 "_json.c"
      case 80: // $bb81
        var $368=HEAP[$rval]; //@line 1115 "_json.c"
        var $369=(($368+4)&4294967295); //@line 1115 "_json.c"
        var $370=HEAP[$369]; //@line 1115 "_json.c"
        var $371=(($370+24)&4294967295); //@line 1115 "_json.c"
        var $372=HEAP[$371]; //@line 1115 "_json.c"
        var $373=HEAP[$rval]; //@line 1115 "_json.c"
        FUNCTION_TABLE[$372]($373); //@line 1115 "_json.c"
        __label__ = 81; break; //@line 1115 "_json.c"
      case 81: // $bb82
        var $374=HEAP[$val]; //@line 1116 "_json.c"
        HEAP[$rval]=$374; //@line 1116 "_json.c"
        HEAP[$val]=0; //@line 1117 "_json.c"
        __label__ = 82; break; //@line 1117 "_json.c"
      case 82: // $bb83
        var $375=HEAP[$idx_addr]; //@line 1119 "_json.c"
        var $376=((($375) + 1)&4294967295); //@line 1119 "_json.c"
        var $377=HEAP[$next_idx_ptr_addr]; //@line 1119 "_json.c"
        HEAP[$377]=$376; //@line 1119 "_json.c"
        var $378=HEAP[$rval]; //@line 1120 "_json.c"
        HEAP[$0]=$378; //@line 1120 "_json.c"
        __label__ = 93; break; //@line 1120 "_json.c"
      case 83: // $bail
        var $379=HEAP[$key]; //@line 1122 "_json.c"
        var $380=($379)!=0; //@line 1122 "_json.c"
        if ($380) { __label__ = 84; break; } else { __label__ = 86; break; } //@line 1122 "_json.c"
      case 84: // $bb84
        var $381=HEAP[$key]; //@line 1122 "_json.c"
        var $382=(($381)&4294967295); //@line 1122 "_json.c"
        var $383=HEAP[$382]; //@line 1122 "_json.c"
        var $384=((($383) - 1)&4294967295); //@line 1122 "_json.c"
        var $385=HEAP[$key]; //@line 1122 "_json.c"
        var $386=(($385)&4294967295); //@line 1122 "_json.c"
        HEAP[$386]=$384; //@line 1122 "_json.c"
        var $387=HEAP[$key]; //@line 1122 "_json.c"
        var $388=(($387)&4294967295); //@line 1122 "_json.c"
        var $389=HEAP[$388]; //@line 1122 "_json.c"
        var $390=((($389))|0)==0; //@line 1122 "_json.c"
        if ($390) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 1122 "_json.c"
      case 85: // $bb85
        var $391=HEAP[$key]; //@line 1122 "_json.c"
        var $392=(($391+4)&4294967295); //@line 1122 "_json.c"
        var $393=HEAP[$392]; //@line 1122 "_json.c"
        var $394=(($393+24)&4294967295); //@line 1122 "_json.c"
        var $395=HEAP[$394]; //@line 1122 "_json.c"
        var $396=HEAP[$key]; //@line 1122 "_json.c"
        FUNCTION_TABLE[$395]($396); //@line 1122 "_json.c"
        __label__ = 86; break; //@line 1122 "_json.c"
      case 86: // $bb86
        var $397=HEAP[$val]; //@line 1123 "_json.c"
        var $398=($397)!=0; //@line 1123 "_json.c"
        if ($398) { __label__ = 87; break; } else { __label__ = 89; break; } //@line 1123 "_json.c"
      case 87: // $bb87
        var $399=HEAP[$val]; //@line 1123 "_json.c"
        var $400=(($399)&4294967295); //@line 1123 "_json.c"
        var $401=HEAP[$400]; //@line 1123 "_json.c"
        var $402=((($401) - 1)&4294967295); //@line 1123 "_json.c"
        var $403=HEAP[$val]; //@line 1123 "_json.c"
        var $404=(($403)&4294967295); //@line 1123 "_json.c"
        HEAP[$404]=$402; //@line 1123 "_json.c"
        var $405=HEAP[$val]; //@line 1123 "_json.c"
        var $406=(($405)&4294967295); //@line 1123 "_json.c"
        var $407=HEAP[$406]; //@line 1123 "_json.c"
        var $408=((($407))|0)==0; //@line 1123 "_json.c"
        if ($408) { __label__ = 88; break; } else { __label__ = 89; break; } //@line 1123 "_json.c"
      case 88: // $bb88
        var $409=HEAP[$val]; //@line 1123 "_json.c"
        var $410=(($409+4)&4294967295); //@line 1123 "_json.c"
        var $411=HEAP[$410]; //@line 1123 "_json.c"
        var $412=(($411+24)&4294967295); //@line 1123 "_json.c"
        var $413=HEAP[$412]; //@line 1123 "_json.c"
        var $414=HEAP[$val]; //@line 1123 "_json.c"
        FUNCTION_TABLE[$413]($414); //@line 1123 "_json.c"
        __label__ = 89; break; //@line 1123 "_json.c"
      case 89: // $bb89
        var $415=HEAP[$pairs]; //@line 1124 "_json.c"
        var $416=($415)!=0; //@line 1124 "_json.c"
        if ($416) { __label__ = 90; break; } else { __label__ = 92; break; } //@line 1124 "_json.c"
      case 90: // $bb90
        var $417=HEAP[$pairs]; //@line 1124 "_json.c"
        var $418=(($417)&4294967295); //@line 1124 "_json.c"
        var $419=HEAP[$418]; //@line 1124 "_json.c"
        var $420=((($419) - 1)&4294967295); //@line 1124 "_json.c"
        var $421=HEAP[$pairs]; //@line 1124 "_json.c"
        var $422=(($421)&4294967295); //@line 1124 "_json.c"
        HEAP[$422]=$420; //@line 1124 "_json.c"
        var $423=HEAP[$pairs]; //@line 1124 "_json.c"
        var $424=(($423)&4294967295); //@line 1124 "_json.c"
        var $425=HEAP[$424]; //@line 1124 "_json.c"
        var $426=((($425))|0)==0; //@line 1124 "_json.c"
        if ($426) { __label__ = 91; break; } else { __label__ = 92; break; } //@line 1124 "_json.c"
      case 91: // $bb91
        var $427=HEAP[$pairs]; //@line 1124 "_json.c"
        var $428=(($427+4)&4294967295); //@line 1124 "_json.c"
        var $429=HEAP[$428]; //@line 1124 "_json.c"
        var $430=(($429+24)&4294967295); //@line 1124 "_json.c"
        var $431=HEAP[$430]; //@line 1124 "_json.c"
        var $432=HEAP[$pairs]; //@line 1124 "_json.c"
        FUNCTION_TABLE[$431]($432); //@line 1124 "_json.c"
        __label__ = 92; break; //@line 1124 "_json.c"
      case 92: // $bb92
        HEAP[$0]=0; //@line 1125 "_json.c"
        __label__ = 93; break; //@line 1125 "_json.c"
      case 93: // $bb93
        var $433=HEAP[$0]; //@line 1025 "_json.c"
        HEAP[$retval]=$433; //@line 1025 "_json.c"
        __label__ = 94; break; //@line 1025 "_json.c"
      case 94: // $return
        var $retval94=HEAP[$retval]; //@line 1025 "_json.c"
        STACKTOP = __stackBase__;
        return $retval94; //@line 1025 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __parse_array_str($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $pystr_addr=__stackBase__+4;
        var $idx_addr=__stackBase__+8;
        var $next_idx_ptr_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $str=__stackBase__+24;
        var $end_idx=__stackBase__+28;
        var $val=__stackBase__+32;
        var $rval=__stackBase__+36;
        var $next_idx=__stackBase__+40;
        var $_py_tmp=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$pystr_addr]=$pystr;
        HEAP[$idx_addr]=$idx;
        HEAP[$next_idx_ptr_addr]=$next_idx_ptr;
        var $1=HEAP[$pystr_addr]; //@line 1137 "_json.c"
        var $2=$1; //@line 1137 "_json.c"
        var $3=(($2+20)&4294967295); //@line 1137 "_json.c"
        var $4=(($3)&4294967295); //@line 1137 "_json.c"
        HEAP[$str]=$4; //@line 1137 "_json.c"
        var $5=HEAP[$pystr_addr]; //@line 1138 "_json.c"
        var $6=$5; //@line 1138 "_json.c"
        var $7=(($6+8)&4294967295); //@line 1138 "_json.c"
        var $8=HEAP[$7]; //@line 1138 "_json.c"
        var $9=((($8) - 1)&4294967295); //@line 1138 "_json.c"
        HEAP[$end_idx]=$9; //@line 1138 "_json.c"
        HEAP[$val]=0; //@line 1139 "_json.c"
        var $10=_PyList_New(0); //@line 1140 "_json.c"
        HEAP[$rval]=$10; //@line 1140 "_json.c"
        var $11=HEAP[$rval]; //@line 1142 "_json.c"
        var $12=($11)==0; //@line 1142 "_json.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1142 "_json.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1143 "_json.c"
        __label__ = 46; break; //@line 1143 "_json.c"
      case 2: // $bb1
        __label__ = 4; break; //@line 1143 "_json.c"
      case 3: // $bb2
        var $13=HEAP[$idx_addr]; //@line 1146 "_json.c"
        var $14=((($13) + 1)&4294967295); //@line 1146 "_json.c"
        HEAP[$idx_addr]=$14; //@line 1146 "_json.c"
        __label__ = 4; break; //@line 1146 "_json.c"
      case 4: // $bb3
        var $15=HEAP[$idx_addr]; //@line 1146 "_json.c"
        var $16=HEAP[$end_idx]; //@line 1146 "_json.c"
        var $17=((($15))|0) > ((($16))|0); //@line 1146 "_json.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 5; break; } //@line 1146 "_json.c"
      case 5: // $bb4
        var $18=HEAP[$str]; //@line 1146 "_json.c"
        var $19=HEAP[$idx_addr]; //@line 1146 "_json.c"
        var $20=(($18+$19)&4294967295); //@line 1146 "_json.c"
        var $21=HEAP[$20]; //@line 1146 "_json.c"
        var $22=reSign(($21), 8, 0)==32; //@line 1146 "_json.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1146 "_json.c"
      case 6: // $bb5
        var $23=HEAP[$str]; //@line 1146 "_json.c"
        var $24=HEAP[$idx_addr]; //@line 1146 "_json.c"
        var $25=(($23+$24)&4294967295); //@line 1146 "_json.c"
        var $26=HEAP[$25]; //@line 1146 "_json.c"
        var $27=reSign(($26), 8, 0)==9; //@line 1146 "_json.c"
        if ($27) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 1146 "_json.c"
      case 7: // $bb6
        var $28=HEAP[$str]; //@line 1146 "_json.c"
        var $29=HEAP[$idx_addr]; //@line 1146 "_json.c"
        var $30=(($28+$29)&4294967295); //@line 1146 "_json.c"
        var $31=HEAP[$30]; //@line 1146 "_json.c"
        var $32=reSign(($31), 8, 0)==10; //@line 1146 "_json.c"
        if ($32) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 1146 "_json.c"
      case 8: // $bb7
        var $33=HEAP[$str]; //@line 1146 "_json.c"
        var $34=HEAP[$idx_addr]; //@line 1146 "_json.c"
        var $35=(($33+$34)&4294967295); //@line 1146 "_json.c"
        var $36=HEAP[$35]; //@line 1146 "_json.c"
        var $37=reSign(($36), 8, 0)==13; //@line 1146 "_json.c"
        if ($37) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 1146 "_json.c"
      case 9: // $bb8
        var $38=HEAP[$idx_addr]; //@line 1149 "_json.c"
        var $39=HEAP[$end_idx]; //@line 1149 "_json.c"
        var $40=((($38))|0) <= ((($39))|0); //@line 1149 "_json.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 36; break; } //@line 1149 "_json.c"
      case 10: // $bb9
        var $41=HEAP[$str]; //@line 1149 "_json.c"
        var $42=HEAP[$idx_addr]; //@line 1149 "_json.c"
        var $43=(($41+$42)&4294967295); //@line 1149 "_json.c"
        var $44=HEAP[$43]; //@line 1149 "_json.c"
        var $45=reSign(($44), 8, 0)!=93; //@line 1149 "_json.c"
        if ($45) { __label__ = 11; break; } else { __label__ = 36; break; } //@line 1149 "_json.c"
      case 11: // $bb10
        __label__ = 35; break; //@line 1149 "_json.c"
      case 12: // $bb11
        var $46=HEAP[$s_addr]; //@line 1153 "_json.c"
        var $47=HEAP[$pystr_addr]; //@line 1153 "_json.c"
        var $48=HEAP[$idx_addr]; //@line 1153 "_json.c"
        var $49=_scan_once_str($46, $47, $48, $next_idx); //@line 1153 "_json.c"
        HEAP[$val]=$49; //@line 1153 "_json.c"
        var $50=HEAP[$val]; //@line 1154 "_json.c"
        var $51=($50)==0; //@line 1154 "_json.c"
        if ($51) { __label__ = 40; break; } else { __label__ = 13; break; } //@line 1154 "_json.c"
      case 13: // $bb12
        var $52=HEAP[$rval]; //@line 1157 "_json.c"
        var $53=HEAP[$val]; //@line 1157 "_json.c"
        var $54=_PyList_Append($52, $53); //@line 1157 "_json.c"
        var $55=((($54))|0)==-1; //@line 1157 "_json.c"
        if ($55) { __label__ = 40; break; } else { __label__ = 14; break; } //@line 1157 "_json.c"
      case 14: // $bb13
        var $56=HEAP[$val]; //@line 1160 "_json.c"
        var $57=($56)!=0; //@line 1160 "_json.c"
        if ($57) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1160 "_json.c"
      case 15: // $bb14
        var $58=HEAP[$val]; //@line 1160 "_json.c"
        HEAP[$_py_tmp]=$58; //@line 1160 "_json.c"
        HEAP[$val]=0; //@line 1160 "_json.c"
        var $59=HEAP[$_py_tmp]; //@line 1160 "_json.c"
        var $60=(($59)&4294967295); //@line 1160 "_json.c"
        var $61=HEAP[$60]; //@line 1160 "_json.c"
        var $62=((($61) - 1)&4294967295); //@line 1160 "_json.c"
        var $63=HEAP[$_py_tmp]; //@line 1160 "_json.c"
        var $64=(($63)&4294967295); //@line 1160 "_json.c"
        HEAP[$64]=$62; //@line 1160 "_json.c"
        var $65=HEAP[$_py_tmp]; //@line 1160 "_json.c"
        var $66=(($65)&4294967295); //@line 1160 "_json.c"
        var $67=HEAP[$66]; //@line 1160 "_json.c"
        var $68=((($67))|0)==0; //@line 1160 "_json.c"
        if ($68) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1160 "_json.c"
      case 16: // $bb15
        var $69=HEAP[$_py_tmp]; //@line 1160 "_json.c"
        var $70=(($69+4)&4294967295); //@line 1160 "_json.c"
        var $71=HEAP[$70]; //@line 1160 "_json.c"
        var $72=(($71+24)&4294967295); //@line 1160 "_json.c"
        var $73=HEAP[$72]; //@line 1160 "_json.c"
        var $74=HEAP[$_py_tmp]; //@line 1160 "_json.c"
        FUNCTION_TABLE[$73]($74); //@line 1160 "_json.c"
        __label__ = 17; break; //@line 1160 "_json.c"
      case 17: // $bb16
        var $75=HEAP[$next_idx]; //@line 1161 "_json.c"
        HEAP[$idx_addr]=$75; //@line 1161 "_json.c"
        __label__ = 19; break; //@line 1161 "_json.c"
      case 18: // $bb17
        var $76=HEAP[$idx_addr]; //@line 1164 "_json.c"
        var $77=((($76) + 1)&4294967295); //@line 1164 "_json.c"
        HEAP[$idx_addr]=$77; //@line 1164 "_json.c"
        __label__ = 19; break; //@line 1164 "_json.c"
      case 19: // $bb18
        var $78=HEAP[$idx_addr]; //@line 1164 "_json.c"
        var $79=HEAP[$end_idx]; //@line 1164 "_json.c"
        var $80=((($78))|0) > ((($79))|0); //@line 1164 "_json.c"
        if ($80) { __label__ = 24; break; } else { __label__ = 20; break; } //@line 1164 "_json.c"
      case 20: // $bb19
        var $81=HEAP[$str]; //@line 1164 "_json.c"
        var $82=HEAP[$idx_addr]; //@line 1164 "_json.c"
        var $83=(($81+$82)&4294967295); //@line 1164 "_json.c"
        var $84=HEAP[$83]; //@line 1164 "_json.c"
        var $85=reSign(($84), 8, 0)==32; //@line 1164 "_json.c"
        if ($85) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 1164 "_json.c"
      case 21: // $bb20
        var $86=HEAP[$str]; //@line 1164 "_json.c"
        var $87=HEAP[$idx_addr]; //@line 1164 "_json.c"
        var $88=(($86+$87)&4294967295); //@line 1164 "_json.c"
        var $89=HEAP[$88]; //@line 1164 "_json.c"
        var $90=reSign(($89), 8, 0)==9; //@line 1164 "_json.c"
        if ($90) { __label__ = 18; break; } else { __label__ = 22; break; } //@line 1164 "_json.c"
      case 22: // $bb21
        var $91=HEAP[$str]; //@line 1164 "_json.c"
        var $92=HEAP[$idx_addr]; //@line 1164 "_json.c"
        var $93=(($91+$92)&4294967295); //@line 1164 "_json.c"
        var $94=HEAP[$93]; //@line 1164 "_json.c"
        var $95=reSign(($94), 8, 0)==10; //@line 1164 "_json.c"
        if ($95) { __label__ = 18; break; } else { __label__ = 23; break; } //@line 1164 "_json.c"
      case 23: // $bb22
        var $96=HEAP[$str]; //@line 1164 "_json.c"
        var $97=HEAP[$idx_addr]; //@line 1164 "_json.c"
        var $98=(($96+$97)&4294967295); //@line 1164 "_json.c"
        var $99=HEAP[$98]; //@line 1164 "_json.c"
        var $100=reSign(($99), 8, 0)==13; //@line 1164 "_json.c"
        if ($100) { __label__ = 18; break; } else { __label__ = 24; break; } //@line 1164 "_json.c"
      case 24: // $bb23
        var $101=HEAP[$idx_addr]; //@line 1167 "_json.c"
        var $102=HEAP[$end_idx]; //@line 1167 "_json.c"
        var $103=((($101))|0) > ((($102))|0); //@line 1167 "_json.c"
        if ($103) { __label__ = 36; break; } else { __label__ = 25; break; } //@line 1167 "_json.c"
      case 25: // $bb24
        var $104=HEAP[$str]; //@line 1168 "_json.c"
        var $105=HEAP[$idx_addr]; //@line 1168 "_json.c"
        var $106=(($104+$105)&4294967295); //@line 1168 "_json.c"
        var $107=HEAP[$106]; //@line 1168 "_json.c"
        var $108=reSign(($107), 8, 0)==93; //@line 1168 "_json.c"
        if ($108) { __label__ = 36; break; } else { __label__ = 26; break; } //@line 1168 "_json.c"
      case 26: // $bb25
        var $109=HEAP[$str]; //@line 1171 "_json.c"
        var $110=HEAP[$idx_addr]; //@line 1171 "_json.c"
        var $111=(($109+$110)&4294967295); //@line 1171 "_json.c"
        var $112=HEAP[$111]; //@line 1171 "_json.c"
        var $113=reSign(($112), 8, 0)!=44; //@line 1171 "_json.c"
        if ($113) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1171 "_json.c"
      case 27: // $bb26
        var $114=HEAP[$pystr_addr]; //@line 1172 "_json.c"
        var $115=HEAP[$idx_addr]; //@line 1172 "_json.c"
        _raise_errmsg(((__str32)&4294967295), $114, $115); //@line 1172 "_json.c"
        __label__ = 40; break; //@line 1172 "_json.c"
      case 28: // $bb27
        var $116=HEAP[$idx_addr]; //@line 1175 "_json.c"
        var $117=((($116) + 1)&4294967295); //@line 1175 "_json.c"
        HEAP[$idx_addr]=$117; //@line 1175 "_json.c"
        __label__ = 30; break; //@line 1175 "_json.c"
      case 29: // $bb28
        var $118=HEAP[$idx_addr]; //@line 1178 "_json.c"
        var $119=((($118) + 1)&4294967295); //@line 1178 "_json.c"
        HEAP[$idx_addr]=$119; //@line 1178 "_json.c"
        __label__ = 30; break; //@line 1178 "_json.c"
      case 30: // $bb29
        var $120=HEAP[$idx_addr]; //@line 1178 "_json.c"
        var $121=HEAP[$end_idx]; //@line 1178 "_json.c"
        var $122=((($120))|0) > ((($121))|0); //@line 1178 "_json.c"
        if ($122) { __label__ = 35; break; } else { __label__ = 31; break; } //@line 1178 "_json.c"
      case 31: // $bb30
        var $123=HEAP[$str]; //@line 1178 "_json.c"
        var $124=HEAP[$idx_addr]; //@line 1178 "_json.c"
        var $125=(($123+$124)&4294967295); //@line 1178 "_json.c"
        var $126=HEAP[$125]; //@line 1178 "_json.c"
        var $127=reSign(($126), 8, 0)==32; //@line 1178 "_json.c"
        if ($127) { __label__ = 29; break; } else { __label__ = 32; break; } //@line 1178 "_json.c"
      case 32: // $bb31
        var $128=HEAP[$str]; //@line 1178 "_json.c"
        var $129=HEAP[$idx_addr]; //@line 1178 "_json.c"
        var $130=(($128+$129)&4294967295); //@line 1178 "_json.c"
        var $131=HEAP[$130]; //@line 1178 "_json.c"
        var $132=reSign(($131), 8, 0)==9; //@line 1178 "_json.c"
        if ($132) { __label__ = 29; break; } else { __label__ = 33; break; } //@line 1178 "_json.c"
      case 33: // $bb32
        var $133=HEAP[$str]; //@line 1178 "_json.c"
        var $134=HEAP[$idx_addr]; //@line 1178 "_json.c"
        var $135=(($133+$134)&4294967295); //@line 1178 "_json.c"
        var $136=HEAP[$135]; //@line 1178 "_json.c"
        var $137=reSign(($136), 8, 0)==10; //@line 1178 "_json.c"
        if ($137) { __label__ = 29; break; } else { __label__ = 34; break; } //@line 1178 "_json.c"
      case 34: // $bb33
        var $138=HEAP[$str]; //@line 1178 "_json.c"
        var $139=HEAP[$idx_addr]; //@line 1178 "_json.c"
        var $140=(($138+$139)&4294967295); //@line 1178 "_json.c"
        var $141=HEAP[$140]; //@line 1178 "_json.c"
        var $142=reSign(($141), 8, 0)==13; //@line 1178 "_json.c"
        if ($142) { __label__ = 29; break; } else { __label__ = 35; break; } //@line 1178 "_json.c"
      case 35: // $bb34
        var $143=HEAP[$idx_addr]; //@line 1150 "_json.c"
        var $144=HEAP[$end_idx]; //@line 1150 "_json.c"
        var $145=((($143))|0) <= ((($144))|0); //@line 1150 "_json.c"
        if ($145) { __label__ = 12; break; } else { __label__ = 36; break; } //@line 1150 "_json.c"
      case 36: // $bb35
        var $146=HEAP[$idx_addr]; //@line 1183 "_json.c"
        var $147=HEAP[$end_idx]; //@line 1183 "_json.c"
        var $148=((($146))|0) > ((($147))|0); //@line 1183 "_json.c"
        if ($148) { __label__ = 38; break; } else { __label__ = 37; break; } //@line 1183 "_json.c"
      case 37: // $bb36
        var $149=HEAP[$str]; //@line 1183 "_json.c"
        var $150=HEAP[$idx_addr]; //@line 1183 "_json.c"
        var $151=(($149+$150)&4294967295); //@line 1183 "_json.c"
        var $152=HEAP[$151]; //@line 1183 "_json.c"
        var $153=reSign(($152), 8, 0)!=93; //@line 1183 "_json.c"
        if ($153) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1183 "_json.c"
      case 38: // $bb37
        var $154=HEAP[$pystr_addr]; //@line 1184 "_json.c"
        var $155=HEAP[$end_idx]; //@line 1184 "_json.c"
        _raise_errmsg(((__str33)&4294967295), $154, $155); //@line 1184 "_json.c"
        __label__ = 40; break; //@line 1184 "_json.c"
      case 39: // $bb38
        var $156=HEAP[$idx_addr]; //@line 1187 "_json.c"
        var $157=((($156) + 1)&4294967295); //@line 1187 "_json.c"
        var $158=HEAP[$next_idx_ptr_addr]; //@line 1187 "_json.c"
        HEAP[$158]=$157; //@line 1187 "_json.c"
        var $159=HEAP[$rval]; //@line 1188 "_json.c"
        HEAP[$0]=$159; //@line 1188 "_json.c"
        __label__ = 46; break; //@line 1188 "_json.c"
      case 40: // $bail
        var $160=HEAP[$val]; //@line 1190 "_json.c"
        var $161=($160)!=0; //@line 1190 "_json.c"
        if ($161) { __label__ = 41; break; } else { __label__ = 43; break; } //@line 1190 "_json.c"
      case 41: // $bb39
        var $162=HEAP[$val]; //@line 1190 "_json.c"
        var $163=(($162)&4294967295); //@line 1190 "_json.c"
        var $164=HEAP[$163]; //@line 1190 "_json.c"
        var $165=((($164) - 1)&4294967295); //@line 1190 "_json.c"
        var $166=HEAP[$val]; //@line 1190 "_json.c"
        var $167=(($166)&4294967295); //@line 1190 "_json.c"
        HEAP[$167]=$165; //@line 1190 "_json.c"
        var $168=HEAP[$val]; //@line 1190 "_json.c"
        var $169=(($168)&4294967295); //@line 1190 "_json.c"
        var $170=HEAP[$169]; //@line 1190 "_json.c"
        var $171=((($170))|0)==0; //@line 1190 "_json.c"
        if ($171) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1190 "_json.c"
      case 42: // $bb40
        var $172=HEAP[$val]; //@line 1190 "_json.c"
        var $173=(($172+4)&4294967295); //@line 1190 "_json.c"
        var $174=HEAP[$173]; //@line 1190 "_json.c"
        var $175=(($174+24)&4294967295); //@line 1190 "_json.c"
        var $176=HEAP[$175]; //@line 1190 "_json.c"
        var $177=HEAP[$val]; //@line 1190 "_json.c"
        FUNCTION_TABLE[$176]($177); //@line 1190 "_json.c"
        __label__ = 43; break; //@line 1190 "_json.c"
      case 43: // $bb41
        var $178=HEAP[$rval]; //@line 1191 "_json.c"
        var $179=(($178)&4294967295); //@line 1191 "_json.c"
        var $180=HEAP[$179]; //@line 1191 "_json.c"
        var $181=((($180) - 1)&4294967295); //@line 1191 "_json.c"
        var $182=HEAP[$rval]; //@line 1191 "_json.c"
        var $183=(($182)&4294967295); //@line 1191 "_json.c"
        HEAP[$183]=$181; //@line 1191 "_json.c"
        var $184=HEAP[$rval]; //@line 1191 "_json.c"
        var $185=(($184)&4294967295); //@line 1191 "_json.c"
        var $186=HEAP[$185]; //@line 1191 "_json.c"
        var $187=((($186))|0)==0; //@line 1191 "_json.c"
        if ($187) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1191 "_json.c"
      case 44: // $bb42
        var $188=HEAP[$rval]; //@line 1191 "_json.c"
        var $189=(($188+4)&4294967295); //@line 1191 "_json.c"
        var $190=HEAP[$189]; //@line 1191 "_json.c"
        var $191=(($190+24)&4294967295); //@line 1191 "_json.c"
        var $192=HEAP[$191]; //@line 1191 "_json.c"
        var $193=HEAP[$rval]; //@line 1191 "_json.c"
        FUNCTION_TABLE[$192]($193); //@line 1191 "_json.c"
        __label__ = 45; break; //@line 1191 "_json.c"
      case 45: // $bb43
        HEAP[$0]=0; //@line 1192 "_json.c"
        __label__ = 46; break; //@line 1192 "_json.c"
      case 46: // $bb44
        var $194=HEAP[$0]; //@line 1143 "_json.c"
        HEAP[$retval]=$194; //@line 1143 "_json.c"
        __label__ = 47; break; //@line 1143 "_json.c"
      case 47: // $return
        var $retval45=HEAP[$retval]; //@line 1143 "_json.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 1143 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __parse_array_unicode($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $pystr_addr=__stackBase__+4;
        var $idx_addr=__stackBase__+8;
        var $next_idx_ptr_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $str=__stackBase__+24;
        var $end_idx=__stackBase__+28;
        var $val=__stackBase__+32;
        var $rval=__stackBase__+36;
        var $next_idx=__stackBase__+40;
        var $_py_tmp=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$pystr_addr]=$pystr;
        HEAP[$idx_addr]=$idx;
        HEAP[$next_idx_ptr_addr]=$next_idx_ptr;
        var $1=HEAP[$pystr_addr]; //@line 1204 "_json.c"
        var $2=$1; //@line 1204 "_json.c"
        var $3=(($2+12)&4294967295); //@line 1204 "_json.c"
        var $4=HEAP[$3]; //@line 1204 "_json.c"
        HEAP[$str]=$4; //@line 1204 "_json.c"
        var $5=HEAP[$pystr_addr]; //@line 1205 "_json.c"
        var $6=$5; //@line 1205 "_json.c"
        var $7=(($6+8)&4294967295); //@line 1205 "_json.c"
        var $8=HEAP[$7]; //@line 1205 "_json.c"
        var $9=((($8) - 1)&4294967295); //@line 1205 "_json.c"
        HEAP[$end_idx]=$9; //@line 1205 "_json.c"
        HEAP[$val]=0; //@line 1206 "_json.c"
        var $10=_PyList_New(0); //@line 1207 "_json.c"
        HEAP[$rval]=$10; //@line 1207 "_json.c"
        var $11=HEAP[$rval]; //@line 1209 "_json.c"
        var $12=($11)==0; //@line 1209 "_json.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1209 "_json.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1210 "_json.c"
        __label__ = 46; break; //@line 1210 "_json.c"
      case 2: // $bb1
        __label__ = 4; break; //@line 1210 "_json.c"
      case 3: // $bb2
        var $13=HEAP[$idx_addr]; //@line 1213 "_json.c"
        var $14=((($13) + 1)&4294967295); //@line 1213 "_json.c"
        HEAP[$idx_addr]=$14; //@line 1213 "_json.c"
        __label__ = 4; break; //@line 1213 "_json.c"
      case 4: // $bb3
        var $15=HEAP[$idx_addr]; //@line 1213 "_json.c"
        var $16=HEAP[$end_idx]; //@line 1213 "_json.c"
        var $17=((($15))|0) > ((($16))|0); //@line 1213 "_json.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 5; break; } //@line 1213 "_json.c"
      case 5: // $bb4
        var $18=HEAP[$str]; //@line 1213 "_json.c"
        var $19=HEAP[$idx_addr]; //@line 1213 "_json.c"
        var $20=(($18+2*$19)&4294967295); //@line 1213 "_json.c"
        var $21=HEAP[$20]; //@line 1213 "_json.c"
        var $22=reSign(($21), 16, 0)==32; //@line 1213 "_json.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1213 "_json.c"
      case 6: // $bb5
        var $23=HEAP[$str]; //@line 1213 "_json.c"
        var $24=HEAP[$idx_addr]; //@line 1213 "_json.c"
        var $25=(($23+2*$24)&4294967295); //@line 1213 "_json.c"
        var $26=HEAP[$25]; //@line 1213 "_json.c"
        var $27=reSign(($26), 16, 0)==9; //@line 1213 "_json.c"
        if ($27) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 1213 "_json.c"
      case 7: // $bb6
        var $28=HEAP[$str]; //@line 1213 "_json.c"
        var $29=HEAP[$idx_addr]; //@line 1213 "_json.c"
        var $30=(($28+2*$29)&4294967295); //@line 1213 "_json.c"
        var $31=HEAP[$30]; //@line 1213 "_json.c"
        var $32=reSign(($31), 16, 0)==10; //@line 1213 "_json.c"
        if ($32) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 1213 "_json.c"
      case 8: // $bb7
        var $33=HEAP[$str]; //@line 1213 "_json.c"
        var $34=HEAP[$idx_addr]; //@line 1213 "_json.c"
        var $35=(($33+2*$34)&4294967295); //@line 1213 "_json.c"
        var $36=HEAP[$35]; //@line 1213 "_json.c"
        var $37=reSign(($36), 16, 0)==13; //@line 1213 "_json.c"
        if ($37) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 1213 "_json.c"
      case 9: // $bb8
        var $38=HEAP[$idx_addr]; //@line 1216 "_json.c"
        var $39=HEAP[$end_idx]; //@line 1216 "_json.c"
        var $40=((($38))|0) <= ((($39))|0); //@line 1216 "_json.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 36; break; } //@line 1216 "_json.c"
      case 10: // $bb9
        var $41=HEAP[$str]; //@line 1216 "_json.c"
        var $42=HEAP[$idx_addr]; //@line 1216 "_json.c"
        var $43=(($41+2*$42)&4294967295); //@line 1216 "_json.c"
        var $44=HEAP[$43]; //@line 1216 "_json.c"
        var $45=reSign(($44), 16, 0)!=93; //@line 1216 "_json.c"
        if ($45) { __label__ = 11; break; } else { __label__ = 36; break; } //@line 1216 "_json.c"
      case 11: // $bb10
        __label__ = 35; break; //@line 1216 "_json.c"
      case 12: // $bb11
        var $46=HEAP[$s_addr]; //@line 1220 "_json.c"
        var $47=HEAP[$pystr_addr]; //@line 1220 "_json.c"
        var $48=HEAP[$idx_addr]; //@line 1220 "_json.c"
        var $49=_scan_once_unicode($46, $47, $48, $next_idx); //@line 1220 "_json.c"
        HEAP[$val]=$49; //@line 1220 "_json.c"
        var $50=HEAP[$val]; //@line 1221 "_json.c"
        var $51=($50)==0; //@line 1221 "_json.c"
        if ($51) { __label__ = 40; break; } else { __label__ = 13; break; } //@line 1221 "_json.c"
      case 13: // $bb12
        var $52=HEAP[$rval]; //@line 1224 "_json.c"
        var $53=HEAP[$val]; //@line 1224 "_json.c"
        var $54=_PyList_Append($52, $53); //@line 1224 "_json.c"
        var $55=((($54))|0)==-1; //@line 1224 "_json.c"
        if ($55) { __label__ = 40; break; } else { __label__ = 14; break; } //@line 1224 "_json.c"
      case 14: // $bb13
        var $56=HEAP[$val]; //@line 1227 "_json.c"
        var $57=($56)!=0; //@line 1227 "_json.c"
        if ($57) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1227 "_json.c"
      case 15: // $bb14
        var $58=HEAP[$val]; //@line 1227 "_json.c"
        HEAP[$_py_tmp]=$58; //@line 1227 "_json.c"
        HEAP[$val]=0; //@line 1227 "_json.c"
        var $59=HEAP[$_py_tmp]; //@line 1227 "_json.c"
        var $60=(($59)&4294967295); //@line 1227 "_json.c"
        var $61=HEAP[$60]; //@line 1227 "_json.c"
        var $62=((($61) - 1)&4294967295); //@line 1227 "_json.c"
        var $63=HEAP[$_py_tmp]; //@line 1227 "_json.c"
        var $64=(($63)&4294967295); //@line 1227 "_json.c"
        HEAP[$64]=$62; //@line 1227 "_json.c"
        var $65=HEAP[$_py_tmp]; //@line 1227 "_json.c"
        var $66=(($65)&4294967295); //@line 1227 "_json.c"
        var $67=HEAP[$66]; //@line 1227 "_json.c"
        var $68=((($67))|0)==0; //@line 1227 "_json.c"
        if ($68) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1227 "_json.c"
      case 16: // $bb15
        var $69=HEAP[$_py_tmp]; //@line 1227 "_json.c"
        var $70=(($69+4)&4294967295); //@line 1227 "_json.c"
        var $71=HEAP[$70]; //@line 1227 "_json.c"
        var $72=(($71+24)&4294967295); //@line 1227 "_json.c"
        var $73=HEAP[$72]; //@line 1227 "_json.c"
        var $74=HEAP[$_py_tmp]; //@line 1227 "_json.c"
        FUNCTION_TABLE[$73]($74); //@line 1227 "_json.c"
        __label__ = 17; break; //@line 1227 "_json.c"
      case 17: // $bb16
        var $75=HEAP[$next_idx]; //@line 1228 "_json.c"
        HEAP[$idx_addr]=$75; //@line 1228 "_json.c"
        __label__ = 19; break; //@line 1228 "_json.c"
      case 18: // $bb17
        var $76=HEAP[$idx_addr]; //@line 1231 "_json.c"
        var $77=((($76) + 1)&4294967295); //@line 1231 "_json.c"
        HEAP[$idx_addr]=$77; //@line 1231 "_json.c"
        __label__ = 19; break; //@line 1231 "_json.c"
      case 19: // $bb18
        var $78=HEAP[$idx_addr]; //@line 1231 "_json.c"
        var $79=HEAP[$end_idx]; //@line 1231 "_json.c"
        var $80=((($78))|0) > ((($79))|0); //@line 1231 "_json.c"
        if ($80) { __label__ = 24; break; } else { __label__ = 20; break; } //@line 1231 "_json.c"
      case 20: // $bb19
        var $81=HEAP[$str]; //@line 1231 "_json.c"
        var $82=HEAP[$idx_addr]; //@line 1231 "_json.c"
        var $83=(($81+2*$82)&4294967295); //@line 1231 "_json.c"
        var $84=HEAP[$83]; //@line 1231 "_json.c"
        var $85=reSign(($84), 16, 0)==32; //@line 1231 "_json.c"
        if ($85) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 1231 "_json.c"
      case 21: // $bb20
        var $86=HEAP[$str]; //@line 1231 "_json.c"
        var $87=HEAP[$idx_addr]; //@line 1231 "_json.c"
        var $88=(($86+2*$87)&4294967295); //@line 1231 "_json.c"
        var $89=HEAP[$88]; //@line 1231 "_json.c"
        var $90=reSign(($89), 16, 0)==9; //@line 1231 "_json.c"
        if ($90) { __label__ = 18; break; } else { __label__ = 22; break; } //@line 1231 "_json.c"
      case 22: // $bb21
        var $91=HEAP[$str]; //@line 1231 "_json.c"
        var $92=HEAP[$idx_addr]; //@line 1231 "_json.c"
        var $93=(($91+2*$92)&4294967295); //@line 1231 "_json.c"
        var $94=HEAP[$93]; //@line 1231 "_json.c"
        var $95=reSign(($94), 16, 0)==10; //@line 1231 "_json.c"
        if ($95) { __label__ = 18; break; } else { __label__ = 23; break; } //@line 1231 "_json.c"
      case 23: // $bb22
        var $96=HEAP[$str]; //@line 1231 "_json.c"
        var $97=HEAP[$idx_addr]; //@line 1231 "_json.c"
        var $98=(($96+2*$97)&4294967295); //@line 1231 "_json.c"
        var $99=HEAP[$98]; //@line 1231 "_json.c"
        var $100=reSign(($99), 16, 0)==13; //@line 1231 "_json.c"
        if ($100) { __label__ = 18; break; } else { __label__ = 24; break; } //@line 1231 "_json.c"
      case 24: // $bb23
        var $101=HEAP[$idx_addr]; //@line 1234 "_json.c"
        var $102=HEAP[$end_idx]; //@line 1234 "_json.c"
        var $103=((($101))|0) > ((($102))|0); //@line 1234 "_json.c"
        if ($103) { __label__ = 36; break; } else { __label__ = 25; break; } //@line 1234 "_json.c"
      case 25: // $bb24
        var $104=HEAP[$str]; //@line 1235 "_json.c"
        var $105=HEAP[$idx_addr]; //@line 1235 "_json.c"
        var $106=(($104+2*$105)&4294967295); //@line 1235 "_json.c"
        var $107=HEAP[$106]; //@line 1235 "_json.c"
        var $108=reSign(($107), 16, 0)==93; //@line 1235 "_json.c"
        if ($108) { __label__ = 36; break; } else { __label__ = 26; break; } //@line 1235 "_json.c"
      case 26: // $bb25
        var $109=HEAP[$str]; //@line 1238 "_json.c"
        var $110=HEAP[$idx_addr]; //@line 1238 "_json.c"
        var $111=(($109+2*$110)&4294967295); //@line 1238 "_json.c"
        var $112=HEAP[$111]; //@line 1238 "_json.c"
        var $113=reSign(($112), 16, 0)!=44; //@line 1238 "_json.c"
        if ($113) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1238 "_json.c"
      case 27: // $bb26
        var $114=HEAP[$pystr_addr]; //@line 1239 "_json.c"
        var $115=HEAP[$idx_addr]; //@line 1239 "_json.c"
        _raise_errmsg(((__str32)&4294967295), $114, $115); //@line 1239 "_json.c"
        __label__ = 40; break; //@line 1239 "_json.c"
      case 28: // $bb27
        var $116=HEAP[$idx_addr]; //@line 1242 "_json.c"
        var $117=((($116) + 1)&4294967295); //@line 1242 "_json.c"
        HEAP[$idx_addr]=$117; //@line 1242 "_json.c"
        __label__ = 30; break; //@line 1242 "_json.c"
      case 29: // $bb28
        var $118=HEAP[$idx_addr]; //@line 1245 "_json.c"
        var $119=((($118) + 1)&4294967295); //@line 1245 "_json.c"
        HEAP[$idx_addr]=$119; //@line 1245 "_json.c"
        __label__ = 30; break; //@line 1245 "_json.c"
      case 30: // $bb29
        var $120=HEAP[$idx_addr]; //@line 1245 "_json.c"
        var $121=HEAP[$end_idx]; //@line 1245 "_json.c"
        var $122=((($120))|0) > ((($121))|0); //@line 1245 "_json.c"
        if ($122) { __label__ = 35; break; } else { __label__ = 31; break; } //@line 1245 "_json.c"
      case 31: // $bb30
        var $123=HEAP[$str]; //@line 1245 "_json.c"
        var $124=HEAP[$idx_addr]; //@line 1245 "_json.c"
        var $125=(($123+2*$124)&4294967295); //@line 1245 "_json.c"
        var $126=HEAP[$125]; //@line 1245 "_json.c"
        var $127=reSign(($126), 16, 0)==32; //@line 1245 "_json.c"
        if ($127) { __label__ = 29; break; } else { __label__ = 32; break; } //@line 1245 "_json.c"
      case 32: // $bb31
        var $128=HEAP[$str]; //@line 1245 "_json.c"
        var $129=HEAP[$idx_addr]; //@line 1245 "_json.c"
        var $130=(($128+2*$129)&4294967295); //@line 1245 "_json.c"
        var $131=HEAP[$130]; //@line 1245 "_json.c"
        var $132=reSign(($131), 16, 0)==9; //@line 1245 "_json.c"
        if ($132) { __label__ = 29; break; } else { __label__ = 33; break; } //@line 1245 "_json.c"
      case 33: // $bb32
        var $133=HEAP[$str]; //@line 1245 "_json.c"
        var $134=HEAP[$idx_addr]; //@line 1245 "_json.c"
        var $135=(($133+2*$134)&4294967295); //@line 1245 "_json.c"
        var $136=HEAP[$135]; //@line 1245 "_json.c"
        var $137=reSign(($136), 16, 0)==10; //@line 1245 "_json.c"
        if ($137) { __label__ = 29; break; } else { __label__ = 34; break; } //@line 1245 "_json.c"
      case 34: // $bb33
        var $138=HEAP[$str]; //@line 1245 "_json.c"
        var $139=HEAP[$idx_addr]; //@line 1245 "_json.c"
        var $140=(($138+2*$139)&4294967295); //@line 1245 "_json.c"
        var $141=HEAP[$140]; //@line 1245 "_json.c"
        var $142=reSign(($141), 16, 0)==13; //@line 1245 "_json.c"
        if ($142) { __label__ = 29; break; } else { __label__ = 35; break; } //@line 1245 "_json.c"
      case 35: // $bb34
        var $143=HEAP[$idx_addr]; //@line 1217 "_json.c"
        var $144=HEAP[$end_idx]; //@line 1217 "_json.c"
        var $145=((($143))|0) <= ((($144))|0); //@line 1217 "_json.c"
        if ($145) { __label__ = 12; break; } else { __label__ = 36; break; } //@line 1217 "_json.c"
      case 36: // $bb35
        var $146=HEAP[$idx_addr]; //@line 1250 "_json.c"
        var $147=HEAP[$end_idx]; //@line 1250 "_json.c"
        var $148=((($146))|0) > ((($147))|0); //@line 1250 "_json.c"
        if ($148) { __label__ = 38; break; } else { __label__ = 37; break; } //@line 1250 "_json.c"
      case 37: // $bb36
        var $149=HEAP[$str]; //@line 1250 "_json.c"
        var $150=HEAP[$idx_addr]; //@line 1250 "_json.c"
        var $151=(($149+2*$150)&4294967295); //@line 1250 "_json.c"
        var $152=HEAP[$151]; //@line 1250 "_json.c"
        var $153=reSign(($152), 16, 0)!=93; //@line 1250 "_json.c"
        if ($153) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1250 "_json.c"
      case 38: // $bb37
        var $154=HEAP[$pystr_addr]; //@line 1251 "_json.c"
        var $155=HEAP[$end_idx]; //@line 1251 "_json.c"
        _raise_errmsg(((__str33)&4294967295), $154, $155); //@line 1251 "_json.c"
        __label__ = 40; break; //@line 1251 "_json.c"
      case 39: // $bb38
        var $156=HEAP[$idx_addr]; //@line 1254 "_json.c"
        var $157=((($156) + 1)&4294967295); //@line 1254 "_json.c"
        var $158=HEAP[$next_idx_ptr_addr]; //@line 1254 "_json.c"
        HEAP[$158]=$157; //@line 1254 "_json.c"
        var $159=HEAP[$rval]; //@line 1255 "_json.c"
        HEAP[$0]=$159; //@line 1255 "_json.c"
        __label__ = 46; break; //@line 1255 "_json.c"
      case 40: // $bail
        var $160=HEAP[$val]; //@line 1257 "_json.c"
        var $161=($160)!=0; //@line 1257 "_json.c"
        if ($161) { __label__ = 41; break; } else { __label__ = 43; break; } //@line 1257 "_json.c"
      case 41: // $bb39
        var $162=HEAP[$val]; //@line 1257 "_json.c"
        var $163=(($162)&4294967295); //@line 1257 "_json.c"
        var $164=HEAP[$163]; //@line 1257 "_json.c"
        var $165=((($164) - 1)&4294967295); //@line 1257 "_json.c"
        var $166=HEAP[$val]; //@line 1257 "_json.c"
        var $167=(($166)&4294967295); //@line 1257 "_json.c"
        HEAP[$167]=$165; //@line 1257 "_json.c"
        var $168=HEAP[$val]; //@line 1257 "_json.c"
        var $169=(($168)&4294967295); //@line 1257 "_json.c"
        var $170=HEAP[$169]; //@line 1257 "_json.c"
        var $171=((($170))|0)==0; //@line 1257 "_json.c"
        if ($171) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1257 "_json.c"
      case 42: // $bb40
        var $172=HEAP[$val]; //@line 1257 "_json.c"
        var $173=(($172+4)&4294967295); //@line 1257 "_json.c"
        var $174=HEAP[$173]; //@line 1257 "_json.c"
        var $175=(($174+24)&4294967295); //@line 1257 "_json.c"
        var $176=HEAP[$175]; //@line 1257 "_json.c"
        var $177=HEAP[$val]; //@line 1257 "_json.c"
        FUNCTION_TABLE[$176]($177); //@line 1257 "_json.c"
        __label__ = 43; break; //@line 1257 "_json.c"
      case 43: // $bb41
        var $178=HEAP[$rval]; //@line 1258 "_json.c"
        var $179=(($178)&4294967295); //@line 1258 "_json.c"
        var $180=HEAP[$179]; //@line 1258 "_json.c"
        var $181=((($180) - 1)&4294967295); //@line 1258 "_json.c"
        var $182=HEAP[$rval]; //@line 1258 "_json.c"
        var $183=(($182)&4294967295); //@line 1258 "_json.c"
        HEAP[$183]=$181; //@line 1258 "_json.c"
        var $184=HEAP[$rval]; //@line 1258 "_json.c"
        var $185=(($184)&4294967295); //@line 1258 "_json.c"
        var $186=HEAP[$185]; //@line 1258 "_json.c"
        var $187=((($186))|0)==0; //@line 1258 "_json.c"
        if ($187) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1258 "_json.c"
      case 44: // $bb42
        var $188=HEAP[$rval]; //@line 1258 "_json.c"
        var $189=(($188+4)&4294967295); //@line 1258 "_json.c"
        var $190=HEAP[$189]; //@line 1258 "_json.c"
        var $191=(($190+24)&4294967295); //@line 1258 "_json.c"
        var $192=HEAP[$191]; //@line 1258 "_json.c"
        var $193=HEAP[$rval]; //@line 1258 "_json.c"
        FUNCTION_TABLE[$192]($193); //@line 1258 "_json.c"
        __label__ = 45; break; //@line 1258 "_json.c"
      case 45: // $bb43
        HEAP[$0]=0; //@line 1259 "_json.c"
        __label__ = 46; break; //@line 1259 "_json.c"
      case 46: // $bb44
        var $194=HEAP[$0]; //@line 1210 "_json.c"
        HEAP[$retval]=$194; //@line 1210 "_json.c"
        __label__ = 47; break; //@line 1210 "_json.c"
      case 47: // $return
        var $retval45=HEAP[$retval]; //@line 1210 "_json.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 1210 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __parse_constant($s, $constant, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $constant_addr=__stackBase__+4;
        var $idx_addr=__stackBase__+8;
        var $next_idx_ptr_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $cstr=__stackBase__+24;
        var $rval=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$constant_addr]=$constant;
        HEAP[$idx_addr]=$idx;
        HEAP[$next_idx_ptr_addr]=$next_idx_ptr;
        var $1=HEAP[$constant_addr]; //@line 1276 "_json.c"
        var $2=_PyString_InternFromString($1); //@line 1276 "_json.c"
        HEAP[$cstr]=$2; //@line 1276 "_json.c"
        var $3=HEAP[$cstr]; //@line 1277 "_json.c"
        var $4=($3)==0; //@line 1277 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1277 "_json.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1278 "_json.c"
        __label__ = 5; break; //@line 1278 "_json.c"
      case 2: // $bb1
        var $5=HEAP[$s_addr]; //@line 1281 "_json.c"
        var $6=(($5+32)&4294967295); //@line 1281 "_json.c"
        var $7=HEAP[$6]; //@line 1281 "_json.c"
        var $8=HEAP[$cstr]; //@line 1281 "_json.c"
        var $9=_PyObject_CallFunctionObjArgs($7, $8, 0); //@line 1281 "_json.c"
        HEAP[$rval]=$9; //@line 1281 "_json.c"
        var $10=HEAP[$cstr]; //@line 1282 "_json.c"
        var $11=$10; //@line 1282 "_json.c"
        var $12=(($11+8)&4294967295); //@line 1282 "_json.c"
        var $13=HEAP[$12]; //@line 1282 "_json.c"
        var $14=HEAP[$idx_addr]; //@line 1282 "_json.c"
        var $15=((($13) + ($14))&4294967295); //@line 1282 "_json.c"
        HEAP[$idx_addr]=$15; //@line 1282 "_json.c"
        var $16=HEAP[$cstr]; //@line 1283 "_json.c"
        var $17=(($16)&4294967295); //@line 1283 "_json.c"
        var $18=HEAP[$17]; //@line 1283 "_json.c"
        var $19=((($18) - 1)&4294967295); //@line 1283 "_json.c"
        var $20=HEAP[$cstr]; //@line 1283 "_json.c"
        var $21=(($20)&4294967295); //@line 1283 "_json.c"
        HEAP[$21]=$19; //@line 1283 "_json.c"
        var $22=HEAP[$cstr]; //@line 1283 "_json.c"
        var $23=(($22)&4294967295); //@line 1283 "_json.c"
        var $24=HEAP[$23]; //@line 1283 "_json.c"
        var $25=((($24))|0)==0; //@line 1283 "_json.c"
        if ($25) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1283 "_json.c"
      case 3: // $bb2
        var $26=HEAP[$cstr]; //@line 1283 "_json.c"
        var $27=(($26+4)&4294967295); //@line 1283 "_json.c"
        var $28=HEAP[$27]; //@line 1283 "_json.c"
        var $29=(($28+24)&4294967295); //@line 1283 "_json.c"
        var $30=HEAP[$29]; //@line 1283 "_json.c"
        var $31=HEAP[$cstr]; //@line 1283 "_json.c"
        FUNCTION_TABLE[$30]($31); //@line 1283 "_json.c"
        __label__ = 4; break; //@line 1283 "_json.c"
      case 4: // $bb3
        var $32=HEAP[$next_idx_ptr_addr]; //@line 1284 "_json.c"
        var $33=HEAP[$idx_addr]; //@line 1284 "_json.c"
        HEAP[$32]=$33; //@line 1284 "_json.c"
        var $34=HEAP[$rval]; //@line 1285 "_json.c"
        HEAP[$0]=$34; //@line 1285 "_json.c"
        __label__ = 5; break; //@line 1285 "_json.c"
      case 5: // $bb4
        var $35=HEAP[$0]; //@line 1278 "_json.c"
        HEAP[$retval]=$35; //@line 1278 "_json.c"
        __label__ = 6; break; //@line 1278 "_json.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1278 "_json.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1278 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __match_number_str($s, $pystr, $start, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $pystr_addr=__stackBase__+4;
        var $start_addr=__stackBase__+8;
        var $next_idx_ptr_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $str=__stackBase__+24;
        var $end_idx=__stackBase__+28;
        var $idx=__stackBase__+32;
        var $is_float=__stackBase__+36;
        var $rval=__stackBase__+40;
        var $numstr=__stackBase__+44;
        var $e_start=__stackBase__+48;
        var $d=__stackBase__+52;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$pystr_addr]=$pystr;
        HEAP[$start_addr]=$start;
        HEAP[$next_idx_ptr_addr]=$next_idx_ptr;
        var $1=HEAP[$pystr_addr]; //@line 1299 "_json.c"
        var $2=$1; //@line 1299 "_json.c"
        var $3=(($2+20)&4294967295); //@line 1299 "_json.c"
        var $4=(($3)&4294967295); //@line 1299 "_json.c"
        HEAP[$str]=$4; //@line 1299 "_json.c"
        var $5=HEAP[$pystr_addr]; //@line 1300 "_json.c"
        var $6=$5; //@line 1300 "_json.c"
        var $7=(($6+8)&4294967295); //@line 1300 "_json.c"
        var $8=HEAP[$7]; //@line 1300 "_json.c"
        var $9=((($8) - 1)&4294967295); //@line 1300 "_json.c"
        HEAP[$end_idx]=$9; //@line 1300 "_json.c"
        var $10=HEAP[$start_addr]; //@line 1301 "_json.c"
        HEAP[$idx]=$10; //@line 1301 "_json.c"
        HEAP[$is_float]=0; //@line 1302 "_json.c"
        var $11=HEAP[$str]; //@line 1307 "_json.c"
        var $12=HEAP[$idx]; //@line 1307 "_json.c"
        var $13=(($11+$12)&4294967295); //@line 1307 "_json.c"
        var $14=HEAP[$13]; //@line 1307 "_json.c"
        var $15=reSign(($14), 8, 0)==45; //@line 1307 "_json.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1307 "_json.c"
      case 1: // $bb
        var $16=HEAP[$idx]; //@line 1308 "_json.c"
        var $17=((($16) + 1)&4294967295); //@line 1308 "_json.c"
        HEAP[$idx]=$17; //@line 1308 "_json.c"
        var $18=HEAP[$idx]; //@line 1309 "_json.c"
        var $19=HEAP[$end_idx]; //@line 1309 "_json.c"
        var $20=((($18))|0) > ((($19))|0); //@line 1309 "_json.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1309 "_json.c"
      case 2: // $bb1
        var $21=HEAP[_PyExc_StopIteration]; //@line 1310 "_json.c"
        _PyErr_SetNone($21); //@line 1310 "_json.c"
        HEAP[$0]=0; //@line 1311 "_json.c"
        __label__ = 55; break; //@line 1311 "_json.c"
      case 3: // $bb2
        var $22=HEAP[$str]; //@line 1316 "_json.c"
        var $23=HEAP[$idx]; //@line 1316 "_json.c"
        var $24=(($22+$23)&4294967295); //@line 1316 "_json.c"
        var $25=HEAP[$24]; //@line 1316 "_json.c"
        var $26=reSign(($25), 8, 0) <= 48; //@line 1316 "_json.c"
        if ($26) { __label__ = 11; break; } else { __label__ = 4; break; } //@line 1316 "_json.c"
      case 4: // $bb3
        var $27=HEAP[$str]; //@line 1316 "_json.c"
        var $28=HEAP[$idx]; //@line 1316 "_json.c"
        var $29=(($27+$28)&4294967295); //@line 1316 "_json.c"
        var $30=HEAP[$29]; //@line 1316 "_json.c"
        var $31=reSign(($30), 8, 0) > 57; //@line 1316 "_json.c"
        if ($31) { __label__ = 11; break; } else { __label__ = 5; break; } //@line 1316 "_json.c"
      case 5: // $bb4
        var $32=HEAP[$idx]; //@line 1317 "_json.c"
        var $33=((($32) + 1)&4294967295); //@line 1317 "_json.c"
        HEAP[$idx]=$33; //@line 1317 "_json.c"
        __label__ = 7; break; //@line 1317 "_json.c"
      case 6: // $bb5
        var $34=HEAP[$idx]; //@line 1318 "_json.c"
        var $35=((($34) + 1)&4294967295); //@line 1318 "_json.c"
        HEAP[$idx]=$35; //@line 1318 "_json.c"
        __label__ = 7; break; //@line 1318 "_json.c"
      case 7: // $bb6
        var $36=HEAP[$idx]; //@line 1318 "_json.c"
        var $37=HEAP[$end_idx]; //@line 1318 "_json.c"
        var $38=((($36))|0) > ((($37))|0); //@line 1318 "_json.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 1318 "_json.c"
      case 8: // $bb7
        var $39=HEAP[$str]; //@line 1318 "_json.c"
        var $40=HEAP[$idx]; //@line 1318 "_json.c"
        var $41=(($39+$40)&4294967295); //@line 1318 "_json.c"
        var $42=HEAP[$41]; //@line 1318 "_json.c"
        var $43=reSign(($42), 8, 0) <= 47; //@line 1318 "_json.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 1318 "_json.c"
      case 9: // $bb8
        var $44=HEAP[$str]; //@line 1318 "_json.c"
        var $45=HEAP[$idx]; //@line 1318 "_json.c"
        var $46=(($44+$45)&4294967295); //@line 1318 "_json.c"
        var $47=HEAP[$46]; //@line 1318 "_json.c"
        var $48=reSign(($47), 8, 0) <= 57; //@line 1318 "_json.c"
        if ($48) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 1318 "_json.c"
      case 10: // $bb9
        __label__ = 14; break; //@line 1318 "_json.c"
      case 11: // $bb10
        var $49=HEAP[$str]; //@line 1321 "_json.c"
        var $50=HEAP[$idx]; //@line 1321 "_json.c"
        var $51=(($49+$50)&4294967295); //@line 1321 "_json.c"
        var $52=HEAP[$51]; //@line 1321 "_json.c"
        var $53=reSign(($52), 8, 0)==48; //@line 1321 "_json.c"
        if ($53) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1321 "_json.c"
      case 12: // $bb11
        var $54=HEAP[$idx]; //@line 1322 "_json.c"
        var $55=((($54) + 1)&4294967295); //@line 1322 "_json.c"
        HEAP[$idx]=$55; //@line 1322 "_json.c"
        __label__ = 14; break; //@line 1322 "_json.c"
      case 13: // $bb12
        var $56=HEAP[_PyExc_StopIteration]; //@line 1326 "_json.c"
        _PyErr_SetNone($56); //@line 1326 "_json.c"
        HEAP[$0]=0; //@line 1327 "_json.c"
        __label__ = 55; break; //@line 1327 "_json.c"
      case 14: // $bb13
        var $57=HEAP[$idx]; //@line 1331 "_json.c"
        var $58=HEAP[$end_idx]; //@line 1331 "_json.c"
        var $59=((($57))|0) < ((($58))|0); //@line 1331 "_json.c"
        if ($59) { __label__ = 15; break; } else { __label__ = 23; break; } //@line 1331 "_json.c"
      case 15: // $bb14
        var $60=HEAP[$str]; //@line 1331 "_json.c"
        var $61=HEAP[$idx]; //@line 1331 "_json.c"
        var $62=(($60+$61)&4294967295); //@line 1331 "_json.c"
        var $63=HEAP[$62]; //@line 1331 "_json.c"
        var $64=reSign(($63), 8, 0)==46; //@line 1331 "_json.c"
        if ($64) { __label__ = 16; break; } else { __label__ = 23; break; } //@line 1331 "_json.c"
      case 16: // $bb15
        var $65=HEAP[$idx]; //@line 1331 "_json.c"
        var $66=((($65) + 1)&4294967295); //@line 1331 "_json.c"
        var $67=HEAP[$str]; //@line 1331 "_json.c"
        var $68=(($67+$66)&4294967295); //@line 1331 "_json.c"
        var $69=HEAP[$68]; //@line 1331 "_json.c"
        var $70=reSign(($69), 8, 0) > 47; //@line 1331 "_json.c"
        if ($70) { __label__ = 17; break; } else { __label__ = 23; break; } //@line 1331 "_json.c"
      case 17: // $bb16
        var $71=HEAP[$idx]; //@line 1331 "_json.c"
        var $72=((($71) + 1)&4294967295); //@line 1331 "_json.c"
        var $73=HEAP[$str]; //@line 1331 "_json.c"
        var $74=(($73+$72)&4294967295); //@line 1331 "_json.c"
        var $75=HEAP[$74]; //@line 1331 "_json.c"
        var $76=reSign(($75), 8, 0) <= 57; //@line 1331 "_json.c"
        if ($76) { __label__ = 18; break; } else { __label__ = 23; break; } //@line 1331 "_json.c"
      case 18: // $bb17
        HEAP[$is_float]=1; //@line 1332 "_json.c"
        var $77=HEAP[$idx]; //@line 1333 "_json.c"
        var $78=((($77) + 2)&4294967295); //@line 1333 "_json.c"
        HEAP[$idx]=$78; //@line 1333 "_json.c"
        __label__ = 20; break; //@line 1333 "_json.c"
      case 19: // $bb18
        var $79=HEAP[$idx]; //@line 1334 "_json.c"
        var $80=((($79) + 1)&4294967295); //@line 1334 "_json.c"
        HEAP[$idx]=$80; //@line 1334 "_json.c"
        __label__ = 20; break; //@line 1334 "_json.c"
      case 20: // $bb19
        var $81=HEAP[$idx]; //@line 1334 "_json.c"
        var $82=HEAP[$end_idx]; //@line 1334 "_json.c"
        var $83=((($81))|0) > ((($82))|0); //@line 1334 "_json.c"
        if ($83) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 1334 "_json.c"
      case 21: // $bb20
        var $84=HEAP[$str]; //@line 1334 "_json.c"
        var $85=HEAP[$idx]; //@line 1334 "_json.c"
        var $86=(($84+$85)&4294967295); //@line 1334 "_json.c"
        var $87=HEAP[$86]; //@line 1334 "_json.c"
        var $88=reSign(($87), 8, 0) <= 47; //@line 1334 "_json.c"
        if ($88) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 1334 "_json.c"
      case 22: // $bb21
        var $89=HEAP[$str]; //@line 1334 "_json.c"
        var $90=HEAP[$idx]; //@line 1334 "_json.c"
        var $91=(($89+$90)&4294967295); //@line 1334 "_json.c"
        var $92=HEAP[$91]; //@line 1334 "_json.c"
        var $93=reSign(($92), 8, 0) <= 57; //@line 1334 "_json.c"
        if ($93) { __label__ = 19; break; } else { __label__ = 23; break; } //@line 1334 "_json.c"
      case 23: // $bb22
        var $94=HEAP[$idx]; //@line 1338 "_json.c"
        var $95=HEAP[$end_idx]; //@line 1338 "_json.c"
        var $96=((($94))|0) < ((($95))|0); //@line 1338 "_json.c"
        if ($96) { __label__ = 24; break; } else { __label__ = 39; break; } //@line 1338 "_json.c"
      case 24: // $bb23
        var $97=HEAP[$str]; //@line 1338 "_json.c"
        var $98=HEAP[$idx]; //@line 1338 "_json.c"
        var $99=(($97+$98)&4294967295); //@line 1338 "_json.c"
        var $100=HEAP[$99]; //@line 1338 "_json.c"
        var $101=reSign(($100), 8, 0)==101; //@line 1338 "_json.c"
        if ($101) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 1338 "_json.c"
      case 25: // $bb24
        var $102=HEAP[$str]; //@line 1338 "_json.c"
        var $103=HEAP[$idx]; //@line 1338 "_json.c"
        var $104=(($102+$103)&4294967295); //@line 1338 "_json.c"
        var $105=HEAP[$104]; //@line 1338 "_json.c"
        var $106=reSign(($105), 8, 0)==69; //@line 1338 "_json.c"
        if ($106) { __label__ = 26; break; } else { __label__ = 39; break; } //@line 1338 "_json.c"
      case 26: // $bb25
        var $107=HEAP[$idx]; //@line 1341 "_json.c"
        HEAP[$e_start]=$107; //@line 1341 "_json.c"
        var $108=HEAP[$idx]; //@line 1342 "_json.c"
        var $109=((($108) + 1)&4294967295); //@line 1342 "_json.c"
        HEAP[$idx]=$109; //@line 1342 "_json.c"
        var $110=HEAP[$idx]; //@line 1345 "_json.c"
        var $111=HEAP[$end_idx]; //@line 1345 "_json.c"
        var $112=((($110))|0) < ((($111))|0); //@line 1345 "_json.c"
        if ($112) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 1345 "_json.c"
      case 27: // $bb26
        var $113=HEAP[$str]; //@line 1345 "_json.c"
        var $114=HEAP[$idx]; //@line 1345 "_json.c"
        var $115=(($113+$114)&4294967295); //@line 1345 "_json.c"
        var $116=HEAP[$115]; //@line 1345 "_json.c"
        var $117=reSign(($116), 8, 0)==45; //@line 1345 "_json.c"
        if ($117) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 1345 "_json.c"
      case 28: // $bb27
        var $118=HEAP[$str]; //@line 1345 "_json.c"
        var $119=HEAP[$idx]; //@line 1345 "_json.c"
        var $120=(($118+$119)&4294967295); //@line 1345 "_json.c"
        var $121=HEAP[$120]; //@line 1345 "_json.c"
        var $122=reSign(($121), 8, 0)==43; //@line 1345 "_json.c"
        if ($122) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1345 "_json.c"
      case 29: // $bb28
        var $123=HEAP[$idx]; //@line 1345 "_json.c"
        var $124=((($123) + 1)&4294967295); //@line 1345 "_json.c"
        HEAP[$idx]=$124; //@line 1345 "_json.c"
        __label__ = 30; break; //@line 1345 "_json.c"
      case 30: // $bb29
        __label__ = 32; break; //@line 1345 "_json.c"
      case 31: // $bb30
        var $125=HEAP[$idx]; //@line 1348 "_json.c"
        var $126=((($125) + 1)&4294967295); //@line 1348 "_json.c"
        HEAP[$idx]=$126; //@line 1348 "_json.c"
        __label__ = 32; break; //@line 1348 "_json.c"
      case 32: // $bb31
        var $127=HEAP[$idx]; //@line 1348 "_json.c"
        var $128=HEAP[$end_idx]; //@line 1348 "_json.c"
        var $129=((($127))|0) > ((($128))|0); //@line 1348 "_json.c"
        if ($129) { __label__ = 35; break; } else { __label__ = 33; break; } //@line 1348 "_json.c"
      case 33: // $bb32
        var $130=HEAP[$str]; //@line 1348 "_json.c"
        var $131=HEAP[$idx]; //@line 1348 "_json.c"
        var $132=(($130+$131)&4294967295); //@line 1348 "_json.c"
        var $133=HEAP[$132]; //@line 1348 "_json.c"
        var $134=reSign(($133), 8, 0) <= 47; //@line 1348 "_json.c"
        if ($134) { __label__ = 35; break; } else { __label__ = 34; break; } //@line 1348 "_json.c"
      case 34: // $bb33
        var $135=HEAP[$str]; //@line 1348 "_json.c"
        var $136=HEAP[$idx]; //@line 1348 "_json.c"
        var $137=(($135+$136)&4294967295); //@line 1348 "_json.c"
        var $138=HEAP[$137]; //@line 1348 "_json.c"
        var $139=reSign(($138), 8, 0) <= 57; //@line 1348 "_json.c"
        if ($139) { __label__ = 31; break; } else { __label__ = 35; break; } //@line 1348 "_json.c"
      case 35: // $bb34
        var $140=HEAP[$idx]; //@line 1351 "_json.c"
        var $141=((($140) - 1)&4294967295); //@line 1351 "_json.c"
        var $142=HEAP[$str]; //@line 1351 "_json.c"
        var $143=(($142+$141)&4294967295); //@line 1351 "_json.c"
        var $144=HEAP[$143]; //@line 1351 "_json.c"
        var $145=reSign(($144), 8, 0) <= 47; //@line 1351 "_json.c"
        if ($145) { __label__ = 38; break; } else { __label__ = 36; break; } //@line 1351 "_json.c"
      case 36: // $bb35
        var $146=HEAP[$idx]; //@line 1351 "_json.c"
        var $147=((($146) - 1)&4294967295); //@line 1351 "_json.c"
        var $148=HEAP[$str]; //@line 1351 "_json.c"
        var $149=(($148+$147)&4294967295); //@line 1351 "_json.c"
        var $150=HEAP[$149]; //@line 1351 "_json.c"
        var $151=reSign(($150), 8, 0) > 57; //@line 1351 "_json.c"
        if ($151) { __label__ = 38; break; } else { __label__ = 37; break; } //@line 1351 "_json.c"
      case 37: // $bb36
        HEAP[$is_float]=1; //@line 1352 "_json.c"
        __label__ = 39; break; //@line 1352 "_json.c"
      case 38: // $bb37
        var $152=HEAP[$e_start]; //@line 1355 "_json.c"
        HEAP[$idx]=$152; //@line 1355 "_json.c"
        __label__ = 39; break; //@line 1355 "_json.c"
      case 39: // $bb38
        var $153=HEAP[$idx]; //@line 1360 "_json.c"
        var $154=HEAP[$start_addr]; //@line 1360 "_json.c"
        var $155=((($153) - ($154))&4294967295); //@line 1360 "_json.c"
        var $156=HEAP[$str]; //@line 1360 "_json.c"
        var $157=HEAP[$start_addr]; //@line 1360 "_json.c"
        var $158=(($156+$157)&4294967295); //@line 1360 "_json.c"
        var $159=_PyString_FromStringAndSize($158, $155); //@line 1360 "_json.c"
        HEAP[$numstr]=$159; //@line 1360 "_json.c"
        var $160=HEAP[$numstr]; //@line 1361 "_json.c"
        var $161=($160)==0; //@line 1361 "_json.c"
        if ($161) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 1361 "_json.c"
      case 40: // $bb39
        HEAP[$0]=0; //@line 1362 "_json.c"
        __label__ = 55; break; //@line 1362 "_json.c"
      case 41: // $bb40
        var $162=HEAP[$is_float]; //@line 1363 "_json.c"
        var $163=((($162))|0)!=0; //@line 1363 "_json.c"
        if ($163) { __label__ = 42; break; } else { __label__ = 49; break; } //@line 1363 "_json.c"
      case 42: // $bb41
        var $164=HEAP[$s_addr]; //@line 1365 "_json.c"
        var $165=(($164+24)&4294967295); //@line 1365 "_json.c"
        var $166=HEAP[$165]; //@line 1365 "_json.c"
        var $167=($166)!=(_PyFloat_Type); //@line 1365 "_json.c"
        if ($167) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1365 "_json.c"
      case 43: // $bb42
        var $168=HEAP[$s_addr]; //@line 1366 "_json.c"
        var $169=(($168+24)&4294967295); //@line 1366 "_json.c"
        var $170=HEAP[$169]; //@line 1366 "_json.c"
        var $171=HEAP[$numstr]; //@line 1366 "_json.c"
        var $172=_PyObject_CallFunctionObjArgs($170, $171, 0); //@line 1366 "_json.c"
        HEAP[$rval]=$172; //@line 1366 "_json.c"
        __label__ = 48; break; //@line 1366 "_json.c"
      case 44: // $bb43
        var $173=HEAP[$numstr]; //@line 1370 "_json.c"
        var $174=$173; //@line 1370 "_json.c"
        var $175=(($174+20)&4294967295); //@line 1370 "_json.c"
        var $176=(($175)&4294967295); //@line 1370 "_json.c"
        var $177=_PyOS_string_to_double($176, 0, 0); //@line 1370 "_json.c"
        HEAP[$d]=$177; //@line 1370 "_json.c"
        var $178=HEAP[$d]; //@line 1371 "_json.c"
        var $179=($178) == -1; //@line 1371 "_json.c"
        if ($179) { __label__ = 45; break; } else { __label__ = 47; break; } //@line 1371 "_json.c"
      case 45: // $bb44
        var $180=_PyErr_Occurred(); //@line 1371 "_json.c"
        var $181=($180)!=0; //@line 1371 "_json.c"
        if ($181) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 1371 "_json.c"
      case 46: // $bb45
        HEAP[$0]=0; //@line 1372 "_json.c"
        __label__ = 55; break; //@line 1372 "_json.c"
      case 47: // $bb46
        var $182=HEAP[$d]; //@line 1373 "_json.c"
        var $183=_PyFloat_FromDouble($182); //@line 1373 "_json.c"
        HEAP[$rval]=$183; //@line 1373 "_json.c"
        __label__ = 48; break; //@line 1373 "_json.c"
      case 48: // $bb47
        __label__ = 52; break; //@line 1373 "_json.c"
      case 49: // $bb48
        var $184=HEAP[$s_addr]; //@line 1378 "_json.c"
        var $185=(($184+28)&4294967295); //@line 1378 "_json.c"
        var $186=HEAP[$185]; //@line 1378 "_json.c"
        var $187=($186)!=(_PyInt_Type); //@line 1378 "_json.c"
        if ($187) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 1378 "_json.c"
      case 50: // $bb49
        var $188=HEAP[$s_addr]; //@line 1379 "_json.c"
        var $189=(($188+28)&4294967295); //@line 1379 "_json.c"
        var $190=HEAP[$189]; //@line 1379 "_json.c"
        var $191=HEAP[$numstr]; //@line 1379 "_json.c"
        var $192=_PyObject_CallFunctionObjArgs($190, $191, 0); //@line 1379 "_json.c"
        HEAP[$rval]=$192; //@line 1379 "_json.c"
        __label__ = 52; break; //@line 1379 "_json.c"
      case 51: // $bb50
        var $193=HEAP[$numstr]; //@line 1382 "_json.c"
        var $194=$193; //@line 1382 "_json.c"
        var $195=(($194+20)&4294967295); //@line 1382 "_json.c"
        var $196=(($195)&4294967295); //@line 1382 "_json.c"
        var $197=_PyInt_FromString($196, 0, 10); //@line 1382 "_json.c"
        HEAP[$rval]=$197; //@line 1382 "_json.c"
        __label__ = 52; break; //@line 1382 "_json.c"
      case 52: // $bb51
        var $198=HEAP[$numstr]; //@line 1385 "_json.c"
        var $199=(($198)&4294967295); //@line 1385 "_json.c"
        var $200=HEAP[$199]; //@line 1385 "_json.c"
        var $201=((($200) - 1)&4294967295); //@line 1385 "_json.c"
        var $202=HEAP[$numstr]; //@line 1385 "_json.c"
        var $203=(($202)&4294967295); //@line 1385 "_json.c"
        HEAP[$203]=$201; //@line 1385 "_json.c"
        var $204=HEAP[$numstr]; //@line 1385 "_json.c"
        var $205=(($204)&4294967295); //@line 1385 "_json.c"
        var $206=HEAP[$205]; //@line 1385 "_json.c"
        var $207=((($206))|0)==0; //@line 1385 "_json.c"
        if ($207) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 1385 "_json.c"
      case 53: // $bb52
        var $208=HEAP[$numstr]; //@line 1385 "_json.c"
        var $209=(($208+4)&4294967295); //@line 1385 "_json.c"
        var $210=HEAP[$209]; //@line 1385 "_json.c"
        var $211=(($210+24)&4294967295); //@line 1385 "_json.c"
        var $212=HEAP[$211]; //@line 1385 "_json.c"
        var $213=HEAP[$numstr]; //@line 1385 "_json.c"
        FUNCTION_TABLE[$212]($213); //@line 1385 "_json.c"
        __label__ = 54; break; //@line 1385 "_json.c"
      case 54: // $bb53
        var $214=HEAP[$next_idx_ptr_addr]; //@line 1386 "_json.c"
        var $215=HEAP[$idx]; //@line 1386 "_json.c"
        HEAP[$214]=$215; //@line 1386 "_json.c"
        var $216=HEAP[$rval]; //@line 1387 "_json.c"
        HEAP[$0]=$216; //@line 1387 "_json.c"
        __label__ = 55; break; //@line 1387 "_json.c"
      case 55: // $bb54
        var $217=HEAP[$0]; //@line 1311 "_json.c"
        HEAP[$retval]=$217; //@line 1311 "_json.c"
        __label__ = 56; break; //@line 1311 "_json.c"
      case 56: // $return
        var $retval55=HEAP[$retval]; //@line 1311 "_json.c"
        STACKTOP = __stackBase__;
        return $retval55; //@line 1311 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __match_number_unicode($s, $pystr, $start, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $pystr_addr=__stackBase__+4;
        var $start_addr=__stackBase__+8;
        var $next_idx_ptr_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $str=__stackBase__+24;
        var $end_idx=__stackBase__+28;
        var $idx=__stackBase__+32;
        var $is_float=__stackBase__+36;
        var $rval=__stackBase__+40;
        var $numstr=__stackBase__+44;
        var $e_start=__stackBase__+48;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$pystr_addr]=$pystr;
        HEAP[$start_addr]=$start;
        HEAP[$next_idx_ptr_addr]=$next_idx_ptr;
        var $1=HEAP[$pystr_addr]; //@line 1401 "_json.c"
        var $2=$1; //@line 1401 "_json.c"
        var $3=(($2+12)&4294967295); //@line 1401 "_json.c"
        var $4=HEAP[$3]; //@line 1401 "_json.c"
        HEAP[$str]=$4; //@line 1401 "_json.c"
        var $5=HEAP[$pystr_addr]; //@line 1402 "_json.c"
        var $6=$5; //@line 1402 "_json.c"
        var $7=(($6+8)&4294967295); //@line 1402 "_json.c"
        var $8=HEAP[$7]; //@line 1402 "_json.c"
        var $9=((($8) - 1)&4294967295); //@line 1402 "_json.c"
        HEAP[$end_idx]=$9; //@line 1402 "_json.c"
        var $10=HEAP[$start_addr]; //@line 1403 "_json.c"
        HEAP[$idx]=$10; //@line 1403 "_json.c"
        HEAP[$is_float]=0; //@line 1404 "_json.c"
        var $11=HEAP[$str]; //@line 1409 "_json.c"
        var $12=HEAP[$idx]; //@line 1409 "_json.c"
        var $13=(($11+2*$12)&4294967295); //@line 1409 "_json.c"
        var $14=HEAP[$13]; //@line 1409 "_json.c"
        var $15=reSign(($14), 16, 0)==45; //@line 1409 "_json.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1409 "_json.c"
      case 1: // $bb
        var $16=HEAP[$idx]; //@line 1410 "_json.c"
        var $17=((($16) + 1)&4294967295); //@line 1410 "_json.c"
        HEAP[$idx]=$17; //@line 1410 "_json.c"
        var $18=HEAP[$idx]; //@line 1411 "_json.c"
        var $19=HEAP[$end_idx]; //@line 1411 "_json.c"
        var $20=((($18))|0) > ((($19))|0); //@line 1411 "_json.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1411 "_json.c"
      case 2: // $bb1
        var $21=HEAP[_PyExc_StopIteration]; //@line 1412 "_json.c"
        _PyErr_SetNone($21); //@line 1412 "_json.c"
        HEAP[$0]=0; //@line 1413 "_json.c"
        __label__ = 50; break; //@line 1413 "_json.c"
      case 3: // $bb2
        var $22=HEAP[$str]; //@line 1418 "_json.c"
        var $23=HEAP[$idx]; //@line 1418 "_json.c"
        var $24=(($22+2*$23)&4294967295); //@line 1418 "_json.c"
        var $25=HEAP[$24]; //@line 1418 "_json.c"
        var $26=unSign(($25), 16, 0) <= 48; //@line 1418 "_json.c"
        if ($26) { __label__ = 11; break; } else { __label__ = 4; break; } //@line 1418 "_json.c"
      case 4: // $bb3
        var $27=HEAP[$str]; //@line 1418 "_json.c"
        var $28=HEAP[$idx]; //@line 1418 "_json.c"
        var $29=(($27+2*$28)&4294967295); //@line 1418 "_json.c"
        var $30=HEAP[$29]; //@line 1418 "_json.c"
        var $31=unSign(($30), 16, 0) > 57; //@line 1418 "_json.c"
        if ($31) { __label__ = 11; break; } else { __label__ = 5; break; } //@line 1418 "_json.c"
      case 5: // $bb4
        var $32=HEAP[$idx]; //@line 1419 "_json.c"
        var $33=((($32) + 1)&4294967295); //@line 1419 "_json.c"
        HEAP[$idx]=$33; //@line 1419 "_json.c"
        __label__ = 7; break; //@line 1419 "_json.c"
      case 6: // $bb5
        var $34=HEAP[$idx]; //@line 1420 "_json.c"
        var $35=((($34) + 1)&4294967295); //@line 1420 "_json.c"
        HEAP[$idx]=$35; //@line 1420 "_json.c"
        __label__ = 7; break; //@line 1420 "_json.c"
      case 7: // $bb6
        var $36=HEAP[$idx]; //@line 1420 "_json.c"
        var $37=HEAP[$end_idx]; //@line 1420 "_json.c"
        var $38=((($36))|0) > ((($37))|0); //@line 1420 "_json.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 1420 "_json.c"
      case 8: // $bb7
        var $39=HEAP[$str]; //@line 1420 "_json.c"
        var $40=HEAP[$idx]; //@line 1420 "_json.c"
        var $41=(($39+2*$40)&4294967295); //@line 1420 "_json.c"
        var $42=HEAP[$41]; //@line 1420 "_json.c"
        var $43=unSign(($42), 16, 0) <= 47; //@line 1420 "_json.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 1420 "_json.c"
      case 9: // $bb8
        var $44=HEAP[$str]; //@line 1420 "_json.c"
        var $45=HEAP[$idx]; //@line 1420 "_json.c"
        var $46=(($44+2*$45)&4294967295); //@line 1420 "_json.c"
        var $47=HEAP[$46]; //@line 1420 "_json.c"
        var $48=unSign(($47), 16, 0) <= 57; //@line 1420 "_json.c"
        if ($48) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 1420 "_json.c"
      case 10: // $bb9
        __label__ = 14; break; //@line 1420 "_json.c"
      case 11: // $bb10
        var $49=HEAP[$str]; //@line 1423 "_json.c"
        var $50=HEAP[$idx]; //@line 1423 "_json.c"
        var $51=(($49+2*$50)&4294967295); //@line 1423 "_json.c"
        var $52=HEAP[$51]; //@line 1423 "_json.c"
        var $53=reSign(($52), 16, 0)==48; //@line 1423 "_json.c"
        if ($53) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1423 "_json.c"
      case 12: // $bb11
        var $54=HEAP[$idx]; //@line 1424 "_json.c"
        var $55=((($54) + 1)&4294967295); //@line 1424 "_json.c"
        HEAP[$idx]=$55; //@line 1424 "_json.c"
        __label__ = 14; break; //@line 1424 "_json.c"
      case 13: // $bb12
        var $56=HEAP[_PyExc_StopIteration]; //@line 1428 "_json.c"
        _PyErr_SetNone($56); //@line 1428 "_json.c"
        HEAP[$0]=0; //@line 1429 "_json.c"
        __label__ = 50; break; //@line 1429 "_json.c"
      case 14: // $bb13
        var $57=HEAP[$idx]; //@line 1433 "_json.c"
        var $58=HEAP[$end_idx]; //@line 1433 "_json.c"
        var $59=((($57))|0) < ((($58))|0); //@line 1433 "_json.c"
        if ($59) { __label__ = 15; break; } else { __label__ = 23; break; } //@line 1433 "_json.c"
      case 15: // $bb14
        var $60=HEAP[$str]; //@line 1433 "_json.c"
        var $61=HEAP[$idx]; //@line 1433 "_json.c"
        var $62=(($60+2*$61)&4294967295); //@line 1433 "_json.c"
        var $63=HEAP[$62]; //@line 1433 "_json.c"
        var $64=reSign(($63), 16, 0)==46; //@line 1433 "_json.c"
        if ($64) { __label__ = 16; break; } else { __label__ = 23; break; } //@line 1433 "_json.c"
      case 16: // $bb15
        var $65=HEAP[$idx]; //@line 1433 "_json.c"
        var $66=((($65) + 1)&4294967295); //@line 1433 "_json.c"
        var $67=HEAP[$str]; //@line 1433 "_json.c"
        var $68=(($67+2*$66)&4294967295); //@line 1433 "_json.c"
        var $69=HEAP[$68]; //@line 1433 "_json.c"
        var $70=unSign(($69), 16, 0) > 47; //@line 1433 "_json.c"
        if ($70) { __label__ = 17; break; } else { __label__ = 23; break; } //@line 1433 "_json.c"
      case 17: // $bb16
        var $71=HEAP[$idx]; //@line 1433 "_json.c"
        var $72=((($71) + 1)&4294967295); //@line 1433 "_json.c"
        var $73=HEAP[$str]; //@line 1433 "_json.c"
        var $74=(($73+2*$72)&4294967295); //@line 1433 "_json.c"
        var $75=HEAP[$74]; //@line 1433 "_json.c"
        var $76=unSign(($75), 16, 0) <= 57; //@line 1433 "_json.c"
        if ($76) { __label__ = 18; break; } else { __label__ = 23; break; } //@line 1433 "_json.c"
      case 18: // $bb17
        HEAP[$is_float]=1; //@line 1434 "_json.c"
        var $77=HEAP[$idx]; //@line 1435 "_json.c"
        var $78=((($77) + 2)&4294967295); //@line 1435 "_json.c"
        HEAP[$idx]=$78; //@line 1435 "_json.c"
        __label__ = 20; break; //@line 1435 "_json.c"
      case 19: // $bb18
        var $79=HEAP[$idx]; //@line 1436 "_json.c"
        var $80=((($79) + 1)&4294967295); //@line 1436 "_json.c"
        HEAP[$idx]=$80; //@line 1436 "_json.c"
        __label__ = 20; break; //@line 1436 "_json.c"
      case 20: // $bb19
        var $81=HEAP[$idx]; //@line 1436 "_json.c"
        var $82=HEAP[$end_idx]; //@line 1436 "_json.c"
        var $83=((($81))|0) > ((($82))|0); //@line 1436 "_json.c"
        if ($83) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 1436 "_json.c"
      case 21: // $bb20
        var $84=HEAP[$str]; //@line 1436 "_json.c"
        var $85=HEAP[$idx]; //@line 1436 "_json.c"
        var $86=(($84+2*$85)&4294967295); //@line 1436 "_json.c"
        var $87=HEAP[$86]; //@line 1436 "_json.c"
        var $88=unSign(($87), 16, 0) <= 47; //@line 1436 "_json.c"
        if ($88) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 1436 "_json.c"
      case 22: // $bb21
        var $89=HEAP[$str]; //@line 1436 "_json.c"
        var $90=HEAP[$idx]; //@line 1436 "_json.c"
        var $91=(($89+2*$90)&4294967295); //@line 1436 "_json.c"
        var $92=HEAP[$91]; //@line 1436 "_json.c"
        var $93=unSign(($92), 16, 0) <= 57; //@line 1436 "_json.c"
        if ($93) { __label__ = 19; break; } else { __label__ = 23; break; } //@line 1436 "_json.c"
      case 23: // $bb22
        var $94=HEAP[$idx]; //@line 1440 "_json.c"
        var $95=HEAP[$end_idx]; //@line 1440 "_json.c"
        var $96=((($94))|0) < ((($95))|0); //@line 1440 "_json.c"
        if ($96) { __label__ = 24; break; } else { __label__ = 39; break; } //@line 1440 "_json.c"
      case 24: // $bb23
        var $97=HEAP[$str]; //@line 1440 "_json.c"
        var $98=HEAP[$idx]; //@line 1440 "_json.c"
        var $99=(($97+2*$98)&4294967295); //@line 1440 "_json.c"
        var $100=HEAP[$99]; //@line 1440 "_json.c"
        var $101=reSign(($100), 16, 0)==101; //@line 1440 "_json.c"
        if ($101) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 1440 "_json.c"
      case 25: // $bb24
        var $102=HEAP[$str]; //@line 1440 "_json.c"
        var $103=HEAP[$idx]; //@line 1440 "_json.c"
        var $104=(($102+2*$103)&4294967295); //@line 1440 "_json.c"
        var $105=HEAP[$104]; //@line 1440 "_json.c"
        var $106=reSign(($105), 16, 0)==69; //@line 1440 "_json.c"
        if ($106) { __label__ = 26; break; } else { __label__ = 39; break; } //@line 1440 "_json.c"
      case 26: // $bb25
        var $107=HEAP[$idx]; //@line 1441 "_json.c"
        HEAP[$e_start]=$107; //@line 1441 "_json.c"
        var $108=HEAP[$idx]; //@line 1442 "_json.c"
        var $109=((($108) + 1)&4294967295); //@line 1442 "_json.c"
        HEAP[$idx]=$109; //@line 1442 "_json.c"
        var $110=HEAP[$idx]; //@line 1445 "_json.c"
        var $111=HEAP[$end_idx]; //@line 1445 "_json.c"
        var $112=((($110))|0) < ((($111))|0); //@line 1445 "_json.c"
        if ($112) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 1445 "_json.c"
      case 27: // $bb26
        var $113=HEAP[$str]; //@line 1445 "_json.c"
        var $114=HEAP[$idx]; //@line 1445 "_json.c"
        var $115=(($113+2*$114)&4294967295); //@line 1445 "_json.c"
        var $116=HEAP[$115]; //@line 1445 "_json.c"
        var $117=reSign(($116), 16, 0)==45; //@line 1445 "_json.c"
        if ($117) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 1445 "_json.c"
      case 28: // $bb27
        var $118=HEAP[$str]; //@line 1445 "_json.c"
        var $119=HEAP[$idx]; //@line 1445 "_json.c"
        var $120=(($118+2*$119)&4294967295); //@line 1445 "_json.c"
        var $121=HEAP[$120]; //@line 1445 "_json.c"
        var $122=reSign(($121), 16, 0)==43; //@line 1445 "_json.c"
        if ($122) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1445 "_json.c"
      case 29: // $bb28
        var $123=HEAP[$idx]; //@line 1445 "_json.c"
        var $124=((($123) + 1)&4294967295); //@line 1445 "_json.c"
        HEAP[$idx]=$124; //@line 1445 "_json.c"
        __label__ = 30; break; //@line 1445 "_json.c"
      case 30: // $bb29
        __label__ = 32; break; //@line 1445 "_json.c"
      case 31: // $bb30
        var $125=HEAP[$idx]; //@line 1448 "_json.c"
        var $126=((($125) + 1)&4294967295); //@line 1448 "_json.c"
        HEAP[$idx]=$126; //@line 1448 "_json.c"
        __label__ = 32; break; //@line 1448 "_json.c"
      case 32: // $bb31
        var $127=HEAP[$idx]; //@line 1448 "_json.c"
        var $128=HEAP[$end_idx]; //@line 1448 "_json.c"
        var $129=((($127))|0) > ((($128))|0); //@line 1448 "_json.c"
        if ($129) { __label__ = 35; break; } else { __label__ = 33; break; } //@line 1448 "_json.c"
      case 33: // $bb32
        var $130=HEAP[$str]; //@line 1448 "_json.c"
        var $131=HEAP[$idx]; //@line 1448 "_json.c"
        var $132=(($130+2*$131)&4294967295); //@line 1448 "_json.c"
        var $133=HEAP[$132]; //@line 1448 "_json.c"
        var $134=unSign(($133), 16, 0) <= 47; //@line 1448 "_json.c"
        if ($134) { __label__ = 35; break; } else { __label__ = 34; break; } //@line 1448 "_json.c"
      case 34: // $bb33
        var $135=HEAP[$str]; //@line 1448 "_json.c"
        var $136=HEAP[$idx]; //@line 1448 "_json.c"
        var $137=(($135+2*$136)&4294967295); //@line 1448 "_json.c"
        var $138=HEAP[$137]; //@line 1448 "_json.c"
        var $139=unSign(($138), 16, 0) <= 57; //@line 1448 "_json.c"
        if ($139) { __label__ = 31; break; } else { __label__ = 35; break; } //@line 1448 "_json.c"
      case 35: // $bb34
        var $140=HEAP[$idx]; //@line 1451 "_json.c"
        var $141=((($140) - 1)&4294967295); //@line 1451 "_json.c"
        var $142=HEAP[$str]; //@line 1451 "_json.c"
        var $143=(($142+2*$141)&4294967295); //@line 1451 "_json.c"
        var $144=HEAP[$143]; //@line 1451 "_json.c"
        var $145=unSign(($144), 16, 0) <= 47; //@line 1451 "_json.c"
        if ($145) { __label__ = 38; break; } else { __label__ = 36; break; } //@line 1451 "_json.c"
      case 36: // $bb35
        var $146=HEAP[$idx]; //@line 1451 "_json.c"
        var $147=((($146) - 1)&4294967295); //@line 1451 "_json.c"
        var $148=HEAP[$str]; //@line 1451 "_json.c"
        var $149=(($148+2*$147)&4294967295); //@line 1451 "_json.c"
        var $150=HEAP[$149]; //@line 1451 "_json.c"
        var $151=unSign(($150), 16, 0) > 57; //@line 1451 "_json.c"
        if ($151) { __label__ = 38; break; } else { __label__ = 37; break; } //@line 1451 "_json.c"
      case 37: // $bb36
        HEAP[$is_float]=1; //@line 1452 "_json.c"
        __label__ = 39; break; //@line 1452 "_json.c"
      case 38: // $bb37
        var $152=HEAP[$e_start]; //@line 1455 "_json.c"
        HEAP[$idx]=$152; //@line 1455 "_json.c"
        __label__ = 39; break; //@line 1455 "_json.c"
      case 39: // $bb38
        var $153=HEAP[$idx]; //@line 1460 "_json.c"
        var $154=HEAP[$start_addr]; //@line 1460 "_json.c"
        var $155=((($153) - ($154))&4294967295); //@line 1460 "_json.c"
        var $156=HEAP[$str]; //@line 1460 "_json.c"
        var $157=HEAP[$start_addr]; //@line 1460 "_json.c"
        var $158=(($156+2*$157)&4294967295); //@line 1460 "_json.c"
        var $159=_PyUnicodeUCS2_FromUnicode($158, $155); //@line 1460 "_json.c"
        HEAP[$numstr]=$159; //@line 1460 "_json.c"
        var $160=HEAP[$numstr]; //@line 1461 "_json.c"
        var $161=($160)==0; //@line 1461 "_json.c"
        if ($161) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 1461 "_json.c"
      case 40: // $bb39
        HEAP[$0]=0; //@line 1462 "_json.c"
        __label__ = 50; break; //@line 1462 "_json.c"
      case 41: // $bb40
        var $162=HEAP[$is_float]; //@line 1463 "_json.c"
        var $163=((($162))|0)!=0; //@line 1463 "_json.c"
        if ($163) { __label__ = 42; break; } else { __label__ = 46; break; } //@line 1463 "_json.c"
      case 42: // $bb41
        var $164=HEAP[$s_addr]; //@line 1465 "_json.c"
        var $165=(($164+24)&4294967295); //@line 1465 "_json.c"
        var $166=HEAP[$165]; //@line 1465 "_json.c"
        var $167=($166)!=(_PyFloat_Type); //@line 1465 "_json.c"
        if ($167) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1465 "_json.c"
      case 43: // $bb42
        var $168=HEAP[$s_addr]; //@line 1466 "_json.c"
        var $169=(($168+24)&4294967295); //@line 1466 "_json.c"
        var $170=HEAP[$169]; //@line 1466 "_json.c"
        var $171=HEAP[$numstr]; //@line 1466 "_json.c"
        var $172=_PyObject_CallFunctionObjArgs($170, $171, 0); //@line 1466 "_json.c"
        HEAP[$rval]=$172; //@line 1466 "_json.c"
        __label__ = 45; break; //@line 1466 "_json.c"
      case 44: // $bb43
        var $173=HEAP[$numstr]; //@line 1469 "_json.c"
        var $174=_PyFloat_FromString($173, 0); //@line 1469 "_json.c"
        HEAP[$rval]=$174; //@line 1469 "_json.c"
        __label__ = 45; break; //@line 1469 "_json.c"
      case 45: // $bb44
        __label__ = 47; break; //@line 1469 "_json.c"
      case 46: // $bb45
        var $175=HEAP[$s_addr]; //@line 1474 "_json.c"
        var $176=(($175+28)&4294967295); //@line 1474 "_json.c"
        var $177=HEAP[$176]; //@line 1474 "_json.c"
        var $178=HEAP[$numstr]; //@line 1474 "_json.c"
        var $179=_PyObject_CallFunctionObjArgs($177, $178, 0); //@line 1474 "_json.c"
        HEAP[$rval]=$179; //@line 1474 "_json.c"
        __label__ = 47; break; //@line 1474 "_json.c"
      case 47: // $bb46
        var $180=HEAP[$numstr]; //@line 1476 "_json.c"
        var $181=(($180)&4294967295); //@line 1476 "_json.c"
        var $182=HEAP[$181]; //@line 1476 "_json.c"
        var $183=((($182) - 1)&4294967295); //@line 1476 "_json.c"
        var $184=HEAP[$numstr]; //@line 1476 "_json.c"
        var $185=(($184)&4294967295); //@line 1476 "_json.c"
        HEAP[$185]=$183; //@line 1476 "_json.c"
        var $186=HEAP[$numstr]; //@line 1476 "_json.c"
        var $187=(($186)&4294967295); //@line 1476 "_json.c"
        var $188=HEAP[$187]; //@line 1476 "_json.c"
        var $189=((($188))|0)==0; //@line 1476 "_json.c"
        if ($189) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 1476 "_json.c"
      case 48: // $bb47
        var $190=HEAP[$numstr]; //@line 1476 "_json.c"
        var $191=(($190+4)&4294967295); //@line 1476 "_json.c"
        var $192=HEAP[$191]; //@line 1476 "_json.c"
        var $193=(($192+24)&4294967295); //@line 1476 "_json.c"
        var $194=HEAP[$193]; //@line 1476 "_json.c"
        var $195=HEAP[$numstr]; //@line 1476 "_json.c"
        FUNCTION_TABLE[$194]($195); //@line 1476 "_json.c"
        __label__ = 49; break; //@line 1476 "_json.c"
      case 49: // $bb48
        var $196=HEAP[$next_idx_ptr_addr]; //@line 1477 "_json.c"
        var $197=HEAP[$idx]; //@line 1477 "_json.c"
        HEAP[$196]=$197; //@line 1477 "_json.c"
        var $198=HEAP[$rval]; //@line 1478 "_json.c"
        HEAP[$0]=$198; //@line 1478 "_json.c"
        __label__ = 50; break; //@line 1478 "_json.c"
      case 50: // $bb49
        var $199=HEAP[$0]; //@line 1413 "_json.c"
        HEAP[$retval]=$199; //@line 1413 "_json.c"
        __label__ = 51; break; //@line 1413 "_json.c"
      case 51: // $return
        var $retval50=HEAP[$retval]; //@line 1413 "_json.c"
        STACKTOP = __stackBase__;
        return $retval50; //@line 1413 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scan_once_str($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $pystr_addr=__stackBase__+4;
        var $idx_addr=__stackBase__+8;
        var $next_idx_ptr_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $res=__stackBase__+24;
        var $str=__stackBase__+28;
        var $length=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$pystr_addr]=$pystr;
        HEAP[$idx_addr]=$idx;
        HEAP[$next_idx_ptr_addr]=$next_idx_ptr;
        var $1=HEAP[$pystr_addr]; //@line 1492 "_json.c"
        var $2=$1; //@line 1492 "_json.c"
        var $3=(($2+20)&4294967295); //@line 1492 "_json.c"
        var $4=(($3)&4294967295); //@line 1492 "_json.c"
        HEAP[$str]=$4; //@line 1492 "_json.c"
        var $5=HEAP[$pystr_addr]; //@line 1493 "_json.c"
        var $6=$5; //@line 1493 "_json.c"
        var $7=(($6+8)&4294967295); //@line 1493 "_json.c"
        var $8=HEAP[$7]; //@line 1493 "_json.c"
        HEAP[$length]=$8; //@line 1493 "_json.c"
        var $9=HEAP[$idx_addr]; //@line 1494 "_json.c"
        var $10=HEAP[$length]; //@line 1494 "_json.c"
        var $11=((($9))|0) >= ((($10))|0); //@line 1494 "_json.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1494 "_json.c"
      case 1: // $bb
        var $12=HEAP[_PyExc_StopIteration]; //@line 1495 "_json.c"
        _PyErr_SetNone($12); //@line 1495 "_json.c"
        HEAP[$0]=0; //@line 1496 "_json.c"
        __label__ = 57; break; //@line 1496 "_json.c"
      case 2: // $bb1
        var $13=HEAP[$str]; //@line 1498 "_json.c"
        var $14=HEAP[$idx_addr]; //@line 1498 "_json.c"
        var $15=(($13+$14)&4294967295); //@line 1498 "_json.c"
        var $16=HEAP[$15]; //@line 1498 "_json.c"
        var $17=reSign(($16), 8, 0); //@line 1498 "_json.c"
        if ($17 == 34) {
          __label__ = 3; break;
        }
        else if ($17 == 45) {
          __label__ = 46; break;
        }
        else if ($17 == 73) {
          __label__ = 36; break;
        }
        else if ($17 == 78) {
          __label__ = 31; break;
        }
        else if ($17 == 91) {
          __label__ = 8; break;
        }
        else if ($17 == 102) {
          __label__ = 24; break;
        }
        else if ($17 == 110) {
          __label__ = 12; break;
        }
        else if ($17 == 116) {
          __label__ = 18; break;
        }
        else if ($17 == 123) {
          __label__ = 4; break;
        }
        else {
        __label__ = 56; break;
        }
        
      case 3: // $bb2
        var $18=HEAP[$s_addr]; //@line 1501 "_json.c"
        var $19=(($18+12)&4294967295); //@line 1501 "_json.c"
        var $20=HEAP[$19]; //@line 1501 "_json.c"
        var $21=_PyObject_IsTrue($20); //@line 1501 "_json.c"
        var $22=HEAP[$s_addr]; //@line 1501 "_json.c"
        var $23=(($22+8)&4294967295); //@line 1501 "_json.c"
        var $24=HEAP[$23]; //@line 1501 "_json.c"
        var $25=$24; //@line 1501 "_json.c"
        var $26=(($25+20)&4294967295); //@line 1501 "_json.c"
        var $27=(($26)&4294967295); //@line 1501 "_json.c"
        var $28=HEAP[$idx_addr]; //@line 1501 "_json.c"
        var $29=((($28) + 1)&4294967295); //@line 1501 "_json.c"
        var $30=HEAP[$pystr_addr]; //@line 1501 "_json.c"
        var $31=HEAP[$next_idx_ptr_addr]; //@line 1501 "_json.c"
        var $32=_scanstring_str($30, $29, $27, $21, $31); //@line 1501 "_json.c"
        HEAP[$0]=$32; //@line 1501 "_json.c"
        __label__ = 57; break; //@line 1501 "_json.c"
      case 4: // $bb3
        var $33=HEAP[__PyThreadState_Current]; //@line 1507 "_json.c"
        var $34=(($33+12)&4294967295); //@line 1507 "_json.c"
        var $35=HEAP[$34]; //@line 1507 "_json.c"
        var $36=((($35) + 1)&4294967295); //@line 1507 "_json.c"
        var $37=(($33+12)&4294967295); //@line 1507 "_json.c"
        HEAP[$37]=$36; //@line 1507 "_json.c"
        var $38=(($33+12)&4294967295); //@line 1507 "_json.c"
        var $39=HEAP[$38]; //@line 1507 "_json.c"
        var $40=HEAP[__Py_CheckRecursionLimit]; //@line 1507 "_json.c"
        var $41=((($39))|0) > ((($40))|0); //@line 1507 "_json.c"
        if ($41) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1507 "_json.c"
      case 5: // $bb4
        var $42=__Py_CheckRecursiveCall(((__str34)&4294967295)); //@line 1507 "_json.c"
        var $43=((($42))|0)!=0; //@line 1507 "_json.c"
        if ($43) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1507 "_json.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 1509 "_json.c"
        __label__ = 57; break; //@line 1509 "_json.c"
      case 7: // $bb6
        var $44=HEAP[$idx_addr]; //@line 1510 "_json.c"
        var $45=((($44) + 1)&4294967295); //@line 1510 "_json.c"
        var $46=HEAP[$s_addr]; //@line 1510 "_json.c"
        var $47=HEAP[$pystr_addr]; //@line 1510 "_json.c"
        var $48=HEAP[$next_idx_ptr_addr]; //@line 1510 "_json.c"
        var $49=__parse_object_str($46, $47, $45, $48); //@line 1510 "_json.c"
        HEAP[$res]=$49; //@line 1510 "_json.c"
        var $50=HEAP[__PyThreadState_Current]; //@line 1511 "_json.c"
        var $51=(($50+12)&4294967295); //@line 1511 "_json.c"
        var $52=HEAP[$51]; //@line 1511 "_json.c"
        var $53=((($52) - 1)&4294967295); //@line 1511 "_json.c"
        var $54=(($50+12)&4294967295); //@line 1511 "_json.c"
        HEAP[$54]=$53; //@line 1511 "_json.c"
        var $55=HEAP[$res]; //@line 1512 "_json.c"
        HEAP[$0]=$55; //@line 1512 "_json.c"
        __label__ = 57; break; //@line 1512 "_json.c"
      case 8: // $bb7
        var $56=HEAP[__PyThreadState_Current]; //@line 1515 "_json.c"
        var $57=(($56+12)&4294967295); //@line 1515 "_json.c"
        var $58=HEAP[$57]; //@line 1515 "_json.c"
        var $59=((($58) + 1)&4294967295); //@line 1515 "_json.c"
        var $60=(($56+12)&4294967295); //@line 1515 "_json.c"
        HEAP[$60]=$59; //@line 1515 "_json.c"
        var $61=(($56+12)&4294967295); //@line 1515 "_json.c"
        var $62=HEAP[$61]; //@line 1515 "_json.c"
        var $63=HEAP[__Py_CheckRecursionLimit]; //@line 1515 "_json.c"
        var $64=((($62))|0) > ((($63))|0); //@line 1515 "_json.c"
        if ($64) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 1515 "_json.c"
      case 9: // $bb8
        var $65=__Py_CheckRecursiveCall(((__str35)&4294967295)); //@line 1515 "_json.c"
        var $66=((($65))|0)!=0; //@line 1515 "_json.c"
        if ($66) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1515 "_json.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 1517 "_json.c"
        __label__ = 57; break; //@line 1517 "_json.c"
      case 11: // $bb10
        var $67=HEAP[$idx_addr]; //@line 1518 "_json.c"
        var $68=((($67) + 1)&4294967295); //@line 1518 "_json.c"
        var $69=HEAP[$s_addr]; //@line 1518 "_json.c"
        var $70=HEAP[$pystr_addr]; //@line 1518 "_json.c"
        var $71=HEAP[$next_idx_ptr_addr]; //@line 1518 "_json.c"
        var $72=__parse_array_str($69, $70, $68, $71); //@line 1518 "_json.c"
        HEAP[$res]=$72; //@line 1518 "_json.c"
        var $73=HEAP[__PyThreadState_Current]; //@line 1519 "_json.c"
        var $74=(($73+12)&4294967295); //@line 1519 "_json.c"
        var $75=HEAP[$74]; //@line 1519 "_json.c"
        var $76=((($75) - 1)&4294967295); //@line 1519 "_json.c"
        var $77=(($73+12)&4294967295); //@line 1519 "_json.c"
        HEAP[$77]=$76; //@line 1519 "_json.c"
        var $78=HEAP[$res]; //@line 1520 "_json.c"
        HEAP[$0]=$78; //@line 1520 "_json.c"
        __label__ = 57; break; //@line 1520 "_json.c"
      case 12: // $bb11
        var $79=HEAP[$idx_addr]; //@line 1523 "_json.c"
        var $80=((($79) + 3)&4294967295); //@line 1523 "_json.c"
        var $81=HEAP[$length]; //@line 1523 "_json.c"
        var $82=((($80))|0) < ((($81))|0); //@line 1523 "_json.c"
        if ($82) { __label__ = 13; break; } else { __label__ = 17; break; } //@line 1523 "_json.c"
      case 13: // $bb12
        var $83=HEAP[$idx_addr]; //@line 1523 "_json.c"
        var $84=((($83) + 1)&4294967295); //@line 1523 "_json.c"
        var $85=HEAP[$str]; //@line 1523 "_json.c"
        var $86=(($85+$84)&4294967295); //@line 1523 "_json.c"
        var $87=HEAP[$86]; //@line 1523 "_json.c"
        var $88=reSign(($87), 8, 0)==117; //@line 1523 "_json.c"
        if ($88) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 1523 "_json.c"
      case 14: // $bb13
        var $89=HEAP[$idx_addr]; //@line 1523 "_json.c"
        var $90=((($89) + 2)&4294967295); //@line 1523 "_json.c"
        var $91=HEAP[$str]; //@line 1523 "_json.c"
        var $92=(($91+$90)&4294967295); //@line 1523 "_json.c"
        var $93=HEAP[$92]; //@line 1523 "_json.c"
        var $94=reSign(($93), 8, 0)==108; //@line 1523 "_json.c"
        if ($94) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1523 "_json.c"
      case 15: // $bb14
        var $95=HEAP[$idx_addr]; //@line 1523 "_json.c"
        var $96=((($95) + 3)&4294967295); //@line 1523 "_json.c"
        var $97=HEAP[$str]; //@line 1523 "_json.c"
        var $98=(($97+$96)&4294967295); //@line 1523 "_json.c"
        var $99=HEAP[$98]; //@line 1523 "_json.c"
        var $100=reSign(($99), 8, 0)==108; //@line 1523 "_json.c"
        if ($100) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1523 "_json.c"
      case 16: // $bb15
        var $101=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1524 "_json.c"
        var $102=((($101) + 1)&4294967295); //@line 1524 "_json.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$102; //@line 1524 "_json.c"
        var $103=HEAP[$idx_addr]; //@line 1525 "_json.c"
        var $104=((($103) + 4)&4294967295); //@line 1525 "_json.c"
        var $105=HEAP[$next_idx_ptr_addr]; //@line 1525 "_json.c"
        HEAP[$105]=$104; //@line 1525 "_json.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1526 "_json.c"
        __label__ = 57; break; //@line 1526 "_json.c"
      case 17: // $bb16
        __label__ = 56; break; //@line 1526 "_json.c"
      case 18: // $bb17
        var $106=HEAP[$idx_addr]; //@line 1531 "_json.c"
        var $107=((($106) + 3)&4294967295); //@line 1531 "_json.c"
        var $108=HEAP[$length]; //@line 1531 "_json.c"
        var $109=((($107))|0) < ((($108))|0); //@line 1531 "_json.c"
        if ($109) { __label__ = 19; break; } else { __label__ = 23; break; } //@line 1531 "_json.c"
      case 19: // $bb18
        var $110=HEAP[$idx_addr]; //@line 1531 "_json.c"
        var $111=((($110) + 1)&4294967295); //@line 1531 "_json.c"
        var $112=HEAP[$str]; //@line 1531 "_json.c"
        var $113=(($112+$111)&4294967295); //@line 1531 "_json.c"
        var $114=HEAP[$113]; //@line 1531 "_json.c"
        var $115=reSign(($114), 8, 0)==114; //@line 1531 "_json.c"
        if ($115) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 1531 "_json.c"
      case 20: // $bb19
        var $116=HEAP[$idx_addr]; //@line 1531 "_json.c"
        var $117=((($116) + 2)&4294967295); //@line 1531 "_json.c"
        var $118=HEAP[$str]; //@line 1531 "_json.c"
        var $119=(($118+$117)&4294967295); //@line 1531 "_json.c"
        var $120=HEAP[$119]; //@line 1531 "_json.c"
        var $121=reSign(($120), 8, 0)==117; //@line 1531 "_json.c"
        if ($121) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 1531 "_json.c"
      case 21: // $bb20
        var $122=HEAP[$idx_addr]; //@line 1531 "_json.c"
        var $123=((($122) + 3)&4294967295); //@line 1531 "_json.c"
        var $124=HEAP[$str]; //@line 1531 "_json.c"
        var $125=(($124+$123)&4294967295); //@line 1531 "_json.c"
        var $126=HEAP[$125]; //@line 1531 "_json.c"
        var $127=reSign(($126), 8, 0)==101; //@line 1531 "_json.c"
        if ($127) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1531 "_json.c"
      case 22: // $bb21
        var $128=((__Py_TrueStruct)&4294967295); //@line 1532 "_json.c"
        var $129=HEAP[$128]; //@line 1532 "_json.c"
        var $130=((($129) + 1)&4294967295); //@line 1532 "_json.c"
        var $131=((__Py_TrueStruct)&4294967295); //@line 1532 "_json.c"
        HEAP[$131]=$130; //@line 1532 "_json.c"
        var $132=HEAP[$idx_addr]; //@line 1533 "_json.c"
        var $133=((($132) + 4)&4294967295); //@line 1533 "_json.c"
        var $134=HEAP[$next_idx_ptr_addr]; //@line 1533 "_json.c"
        HEAP[$134]=$133; //@line 1533 "_json.c"
        HEAP[$0]=__Py_TrueStruct; //@line 1534 "_json.c"
        __label__ = 57; break; //@line 1534 "_json.c"
      case 23: // $bb22
        __label__ = 56; break; //@line 1534 "_json.c"
      case 24: // $bb23
        var $135=HEAP[$idx_addr]; //@line 1539 "_json.c"
        var $136=((($135) + 4)&4294967295); //@line 1539 "_json.c"
        var $137=HEAP[$length]; //@line 1539 "_json.c"
        var $138=((($136))|0) < ((($137))|0); //@line 1539 "_json.c"
        if ($138) { __label__ = 25; break; } else { __label__ = 30; break; } //@line 1539 "_json.c"
      case 25: // $bb24
        var $139=HEAP[$idx_addr]; //@line 1539 "_json.c"
        var $140=((($139) + 1)&4294967295); //@line 1539 "_json.c"
        var $141=HEAP[$str]; //@line 1539 "_json.c"
        var $142=(($141+$140)&4294967295); //@line 1539 "_json.c"
        var $143=HEAP[$142]; //@line 1539 "_json.c"
        var $144=reSign(($143), 8, 0)==97; //@line 1539 "_json.c"
        if ($144) { __label__ = 26; break; } else { __label__ = 30; break; } //@line 1539 "_json.c"
      case 26: // $bb25
        var $145=HEAP[$idx_addr]; //@line 1539 "_json.c"
        var $146=((($145) + 2)&4294967295); //@line 1539 "_json.c"
        var $147=HEAP[$str]; //@line 1539 "_json.c"
        var $148=(($147+$146)&4294967295); //@line 1539 "_json.c"
        var $149=HEAP[$148]; //@line 1539 "_json.c"
        var $150=reSign(($149), 8, 0)==108; //@line 1539 "_json.c"
        if ($150) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 1539 "_json.c"
      case 27: // $bb26
        var $151=HEAP[$idx_addr]; //@line 1539 "_json.c"
        var $152=((($151) + 3)&4294967295); //@line 1539 "_json.c"
        var $153=HEAP[$str]; //@line 1539 "_json.c"
        var $154=(($153+$152)&4294967295); //@line 1539 "_json.c"
        var $155=HEAP[$154]; //@line 1539 "_json.c"
        var $156=reSign(($155), 8, 0)==115; //@line 1539 "_json.c"
        if ($156) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 1539 "_json.c"
      case 28: // $bb27
        var $157=HEAP[$idx_addr]; //@line 1539 "_json.c"
        var $158=((($157) + 4)&4294967295); //@line 1539 "_json.c"
        var $159=HEAP[$str]; //@line 1539 "_json.c"
        var $160=(($159+$158)&4294967295); //@line 1539 "_json.c"
        var $161=HEAP[$160]; //@line 1539 "_json.c"
        var $162=reSign(($161), 8, 0)==101; //@line 1539 "_json.c"
        if ($162) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1539 "_json.c"
      case 29: // $bb28
        var $163=((__Py_ZeroStruct)&4294967295); //@line 1540 "_json.c"
        var $164=HEAP[$163]; //@line 1540 "_json.c"
        var $165=((($164) + 1)&4294967295); //@line 1540 "_json.c"
        var $166=((__Py_ZeroStruct)&4294967295); //@line 1540 "_json.c"
        HEAP[$166]=$165; //@line 1540 "_json.c"
        var $167=HEAP[$idx_addr]; //@line 1541 "_json.c"
        var $168=((($167) + 5)&4294967295); //@line 1541 "_json.c"
        var $169=HEAP[$next_idx_ptr_addr]; //@line 1541 "_json.c"
        HEAP[$169]=$168; //@line 1541 "_json.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 1542 "_json.c"
        __label__ = 57; break; //@line 1542 "_json.c"
      case 30: // $bb29
        __label__ = 56; break; //@line 1542 "_json.c"
      case 31: // $bb30
        var $170=HEAP[$idx_addr]; //@line 1547 "_json.c"
        var $171=((($170) + 2)&4294967295); //@line 1547 "_json.c"
        var $172=HEAP[$length]; //@line 1547 "_json.c"
        var $173=((($171))|0) < ((($172))|0); //@line 1547 "_json.c"
        if ($173) { __label__ = 32; break; } else { __label__ = 35; break; } //@line 1547 "_json.c"
      case 32: // $bb31
        var $174=HEAP[$idx_addr]; //@line 1547 "_json.c"
        var $175=((($174) + 1)&4294967295); //@line 1547 "_json.c"
        var $176=HEAP[$str]; //@line 1547 "_json.c"
        var $177=(($176+$175)&4294967295); //@line 1547 "_json.c"
        var $178=HEAP[$177]; //@line 1547 "_json.c"
        var $179=reSign(($178), 8, 0)==97; //@line 1547 "_json.c"
        if ($179) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 1547 "_json.c"
      case 33: // $bb32
        var $180=HEAP[$idx_addr]; //@line 1547 "_json.c"
        var $181=((($180) + 2)&4294967295); //@line 1547 "_json.c"
        var $182=HEAP[$str]; //@line 1547 "_json.c"
        var $183=(($182+$181)&4294967295); //@line 1547 "_json.c"
        var $184=HEAP[$183]; //@line 1547 "_json.c"
        var $185=reSign(($184), 8, 0)==78; //@line 1547 "_json.c"
        if ($185) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1547 "_json.c"
      case 34: // $bb33
        var $186=HEAP[$s_addr]; //@line 1548 "_json.c"
        var $187=HEAP[$idx_addr]; //@line 1548 "_json.c"
        var $188=HEAP[$next_idx_ptr_addr]; //@line 1548 "_json.c"
        var $189=__parse_constant($186, ((__str36)&4294967295), $187, $188); //@line 1548 "_json.c"
        HEAP[$0]=$189; //@line 1548 "_json.c"
        __label__ = 57; break; //@line 1548 "_json.c"
      case 35: // $bb34
        __label__ = 56; break; //@line 1548 "_json.c"
      case 36: // $bb35
        var $190=HEAP[$idx_addr]; //@line 1553 "_json.c"
        var $191=((($190) + 7)&4294967295); //@line 1553 "_json.c"
        var $192=HEAP[$length]; //@line 1553 "_json.c"
        var $193=((($191))|0) < ((($192))|0); //@line 1553 "_json.c"
        if ($193) { __label__ = 37; break; } else { __label__ = 45; break; } //@line 1553 "_json.c"
      case 37: // $bb36
        var $194=HEAP[$idx_addr]; //@line 1553 "_json.c"
        var $195=((($194) + 1)&4294967295); //@line 1553 "_json.c"
        var $196=HEAP[$str]; //@line 1553 "_json.c"
        var $197=(($196+$195)&4294967295); //@line 1553 "_json.c"
        var $198=HEAP[$197]; //@line 1553 "_json.c"
        var $199=reSign(($198), 8, 0)==110; //@line 1553 "_json.c"
        if ($199) { __label__ = 38; break; } else { __label__ = 45; break; } //@line 1553 "_json.c"
      case 38: // $bb37
        var $200=HEAP[$idx_addr]; //@line 1553 "_json.c"
        var $201=((($200) + 2)&4294967295); //@line 1553 "_json.c"
        var $202=HEAP[$str]; //@line 1553 "_json.c"
        var $203=(($202+$201)&4294967295); //@line 1553 "_json.c"
        var $204=HEAP[$203]; //@line 1553 "_json.c"
        var $205=reSign(($204), 8, 0)==102; //@line 1553 "_json.c"
        if ($205) { __label__ = 39; break; } else { __label__ = 45; break; } //@line 1553 "_json.c"
      case 39: // $bb38
        var $206=HEAP[$idx_addr]; //@line 1553 "_json.c"
        var $207=((($206) + 3)&4294967295); //@line 1553 "_json.c"
        var $208=HEAP[$str]; //@line 1553 "_json.c"
        var $209=(($208+$207)&4294967295); //@line 1553 "_json.c"
        var $210=HEAP[$209]; //@line 1553 "_json.c"
        var $211=reSign(($210), 8, 0)==105; //@line 1553 "_json.c"
        if ($211) { __label__ = 40; break; } else { __label__ = 45; break; } //@line 1553 "_json.c"
      case 40: // $bb39
        var $212=HEAP[$idx_addr]; //@line 1553 "_json.c"
        var $213=((($212) + 4)&4294967295); //@line 1553 "_json.c"
        var $214=HEAP[$str]; //@line 1553 "_json.c"
        var $215=(($214+$213)&4294967295); //@line 1553 "_json.c"
        var $216=HEAP[$215]; //@line 1553 "_json.c"
        var $217=reSign(($216), 8, 0)==110; //@line 1553 "_json.c"
        if ($217) { __label__ = 41; break; } else { __label__ = 45; break; } //@line 1553 "_json.c"
      case 41: // $bb40
        var $218=HEAP[$idx_addr]; //@line 1553 "_json.c"
        var $219=((($218) + 5)&4294967295); //@line 1553 "_json.c"
        var $220=HEAP[$str]; //@line 1553 "_json.c"
        var $221=(($220+$219)&4294967295); //@line 1553 "_json.c"
        var $222=HEAP[$221]; //@line 1553 "_json.c"
        var $223=reSign(($222), 8, 0)==105; //@line 1553 "_json.c"
        if ($223) { __label__ = 42; break; } else { __label__ = 45; break; } //@line 1553 "_json.c"
      case 42: // $bb41
        var $224=HEAP[$idx_addr]; //@line 1553 "_json.c"
        var $225=((($224) + 6)&4294967295); //@line 1553 "_json.c"
        var $226=HEAP[$str]; //@line 1553 "_json.c"
        var $227=(($226+$225)&4294967295); //@line 1553 "_json.c"
        var $228=HEAP[$227]; //@line 1553 "_json.c"
        var $229=reSign(($228), 8, 0)==116; //@line 1553 "_json.c"
        if ($229) { __label__ = 43; break; } else { __label__ = 45; break; } //@line 1553 "_json.c"
      case 43: // $bb42
        var $230=HEAP[$idx_addr]; //@line 1553 "_json.c"
        var $231=((($230) + 7)&4294967295); //@line 1553 "_json.c"
        var $232=HEAP[$str]; //@line 1553 "_json.c"
        var $233=(($232+$231)&4294967295); //@line 1553 "_json.c"
        var $234=HEAP[$233]; //@line 1553 "_json.c"
        var $235=reSign(($234), 8, 0)==121; //@line 1553 "_json.c"
        if ($235) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1553 "_json.c"
      case 44: // $bb43
        var $236=HEAP[$s_addr]; //@line 1554 "_json.c"
        var $237=HEAP[$idx_addr]; //@line 1554 "_json.c"
        var $238=HEAP[$next_idx_ptr_addr]; //@line 1554 "_json.c"
        var $239=__parse_constant($236, ((__str37)&4294967295), $237, $238); //@line 1554 "_json.c"
        HEAP[$0]=$239; //@line 1554 "_json.c"
        __label__ = 57; break; //@line 1554 "_json.c"
      case 45: // $bb44
        __label__ = 56; break; //@line 1554 "_json.c"
      case 46: // $bb45
        var $240=HEAP[$idx_addr]; //@line 1559 "_json.c"
        var $241=((($240) + 8)&4294967295); //@line 1559 "_json.c"
        var $242=HEAP[$length]; //@line 1559 "_json.c"
        var $243=((($241))|0) < ((($242))|0); //@line 1559 "_json.c"
        if ($243) { __label__ = 47; break; } else { __label__ = 56; break; } //@line 1559 "_json.c"
      case 47: // $bb46
        var $244=HEAP[$idx_addr]; //@line 1559 "_json.c"
        var $245=((($244) + 1)&4294967295); //@line 1559 "_json.c"
        var $246=HEAP[$str]; //@line 1559 "_json.c"
        var $247=(($246+$245)&4294967295); //@line 1559 "_json.c"
        var $248=HEAP[$247]; //@line 1559 "_json.c"
        var $249=reSign(($248), 8, 0)==73; //@line 1559 "_json.c"
        if ($249) { __label__ = 48; break; } else { __label__ = 56; break; } //@line 1559 "_json.c"
      case 48: // $bb47
        var $250=HEAP[$idx_addr]; //@line 1559 "_json.c"
        var $251=((($250) + 2)&4294967295); //@line 1559 "_json.c"
        var $252=HEAP[$str]; //@line 1559 "_json.c"
        var $253=(($252+$251)&4294967295); //@line 1559 "_json.c"
        var $254=HEAP[$253]; //@line 1559 "_json.c"
        var $255=reSign(($254), 8, 0)==110; //@line 1559 "_json.c"
        if ($255) { __label__ = 49; break; } else { __label__ = 56; break; } //@line 1559 "_json.c"
      case 49: // $bb48
        var $256=HEAP[$idx_addr]; //@line 1559 "_json.c"
        var $257=((($256) + 3)&4294967295); //@line 1559 "_json.c"
        var $258=HEAP[$str]; //@line 1559 "_json.c"
        var $259=(($258+$257)&4294967295); //@line 1559 "_json.c"
        var $260=HEAP[$259]; //@line 1559 "_json.c"
        var $261=reSign(($260), 8, 0)==102; //@line 1559 "_json.c"
        if ($261) { __label__ = 50; break; } else { __label__ = 56; break; } //@line 1559 "_json.c"
      case 50: // $bb49
        var $262=HEAP[$idx_addr]; //@line 1559 "_json.c"
        var $263=((($262) + 4)&4294967295); //@line 1559 "_json.c"
        var $264=HEAP[$str]; //@line 1559 "_json.c"
        var $265=(($264+$263)&4294967295); //@line 1559 "_json.c"
        var $266=HEAP[$265]; //@line 1559 "_json.c"
        var $267=reSign(($266), 8, 0)==105; //@line 1559 "_json.c"
        if ($267) { __label__ = 51; break; } else { __label__ = 56; break; } //@line 1559 "_json.c"
      case 51: // $bb50
        var $268=HEAP[$idx_addr]; //@line 1559 "_json.c"
        var $269=((($268) + 5)&4294967295); //@line 1559 "_json.c"
        var $270=HEAP[$str]; //@line 1559 "_json.c"
        var $271=(($270+$269)&4294967295); //@line 1559 "_json.c"
        var $272=HEAP[$271]; //@line 1559 "_json.c"
        var $273=reSign(($272), 8, 0)==110; //@line 1559 "_json.c"
        if ($273) { __label__ = 52; break; } else { __label__ = 56; break; } //@line 1559 "_json.c"
      case 52: // $bb51
        var $274=HEAP[$idx_addr]; //@line 1559 "_json.c"
        var $275=((($274) + 6)&4294967295); //@line 1559 "_json.c"
        var $276=HEAP[$str]; //@line 1559 "_json.c"
        var $277=(($276+$275)&4294967295); //@line 1559 "_json.c"
        var $278=HEAP[$277]; //@line 1559 "_json.c"
        var $279=reSign(($278), 8, 0)==105; //@line 1559 "_json.c"
        if ($279) { __label__ = 53; break; } else { __label__ = 56; break; } //@line 1559 "_json.c"
      case 53: // $bb52
        var $280=HEAP[$idx_addr]; //@line 1559 "_json.c"
        var $281=((($280) + 7)&4294967295); //@line 1559 "_json.c"
        var $282=HEAP[$str]; //@line 1559 "_json.c"
        var $283=(($282+$281)&4294967295); //@line 1559 "_json.c"
        var $284=HEAP[$283]; //@line 1559 "_json.c"
        var $285=reSign(($284), 8, 0)==116; //@line 1559 "_json.c"
        if ($285) { __label__ = 54; break; } else { __label__ = 56; break; } //@line 1559 "_json.c"
      case 54: // $bb53
        var $286=HEAP[$idx_addr]; //@line 1559 "_json.c"
        var $287=((($286) + 8)&4294967295); //@line 1559 "_json.c"
        var $288=HEAP[$str]; //@line 1559 "_json.c"
        var $289=(($288+$287)&4294967295); //@line 1559 "_json.c"
        var $290=HEAP[$289]; //@line 1559 "_json.c"
        var $291=reSign(($290), 8, 0)==121; //@line 1559 "_json.c"
        if ($291) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1559 "_json.c"
      case 55: // $bb54
        var $292=HEAP[$s_addr]; //@line 1560 "_json.c"
        var $293=HEAP[$idx_addr]; //@line 1560 "_json.c"
        var $294=HEAP[$next_idx_ptr_addr]; //@line 1560 "_json.c"
        var $295=__parse_constant($292, ((__str38)&4294967295), $293, $294); //@line 1560 "_json.c"
        HEAP[$0]=$295; //@line 1560 "_json.c"
        __label__ = 57; break; //@line 1560 "_json.c"
      case 56: // $bb55
        var $296=HEAP[$s_addr]; //@line 1565 "_json.c"
        var $297=HEAP[$pystr_addr]; //@line 1565 "_json.c"
        var $298=HEAP[$idx_addr]; //@line 1565 "_json.c"
        var $299=HEAP[$next_idx_ptr_addr]; //@line 1565 "_json.c"
        var $300=__match_number_str($296, $297, $298, $299); //@line 1565 "_json.c"
        HEAP[$0]=$300; //@line 1565 "_json.c"
        __label__ = 57; break; //@line 1565 "_json.c"
      case 57: // $bb56
        var $301=HEAP[$0]; //@line 1496 "_json.c"
        HEAP[$retval]=$301; //@line 1496 "_json.c"
        __label__ = 58; break; //@line 1496 "_json.c"
      case 58: // $return
        var $retval57=HEAP[$retval]; //@line 1496 "_json.c"
        STACKTOP = __stackBase__;
        return $retval57; //@line 1496 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scan_once_unicode($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $pystr_addr=__stackBase__+4;
        var $idx_addr=__stackBase__+8;
        var $next_idx_ptr_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $res=__stackBase__+24;
        var $str=__stackBase__+28;
        var $length=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$pystr_addr]=$pystr;
        HEAP[$idx_addr]=$idx;
        HEAP[$next_idx_ptr_addr]=$next_idx_ptr;
        var $1=HEAP[$pystr_addr]; //@line 1579 "_json.c"
        var $2=$1; //@line 1579 "_json.c"
        var $3=(($2+12)&4294967295); //@line 1579 "_json.c"
        var $4=HEAP[$3]; //@line 1579 "_json.c"
        HEAP[$str]=$4; //@line 1579 "_json.c"
        var $5=HEAP[$pystr_addr]; //@line 1580 "_json.c"
        var $6=$5; //@line 1580 "_json.c"
        var $7=(($6+8)&4294967295); //@line 1580 "_json.c"
        var $8=HEAP[$7]; //@line 1580 "_json.c"
        HEAP[$length]=$8; //@line 1580 "_json.c"
        var $9=HEAP[$idx_addr]; //@line 1581 "_json.c"
        var $10=HEAP[$length]; //@line 1581 "_json.c"
        var $11=((($9))|0) >= ((($10))|0); //@line 1581 "_json.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1581 "_json.c"
      case 1: // $bb
        var $12=HEAP[_PyExc_StopIteration]; //@line 1582 "_json.c"
        _PyErr_SetNone($12); //@line 1582 "_json.c"
        HEAP[$0]=0; //@line 1583 "_json.c"
        __label__ = 57; break; //@line 1583 "_json.c"
      case 2: // $bb1
        var $13=HEAP[$str]; //@line 1585 "_json.c"
        var $14=HEAP[$idx_addr]; //@line 1585 "_json.c"
        var $15=(($13+2*$14)&4294967295); //@line 1585 "_json.c"
        var $16=HEAP[$15]; //@line 1585 "_json.c"
        var $17=unSign(($16), 16, 0); //@line 1585 "_json.c"
        if ($17 == 34) {
          __label__ = 3; break;
        }
        else if ($17 == 45) {
          __label__ = 46; break;
        }
        else if ($17 == 73) {
          __label__ = 36; break;
        }
        else if ($17 == 78) {
          __label__ = 31; break;
        }
        else if ($17 == 91) {
          __label__ = 8; break;
        }
        else if ($17 == 102) {
          __label__ = 24; break;
        }
        else if ($17 == 110) {
          __label__ = 12; break;
        }
        else if ($17 == 116) {
          __label__ = 18; break;
        }
        else if ($17 == 123) {
          __label__ = 4; break;
        }
        else {
        __label__ = 56; break;
        }
        
      case 3: // $bb2
        var $18=HEAP[$s_addr]; //@line 1588 "_json.c"
        var $19=(($18+12)&4294967295); //@line 1588 "_json.c"
        var $20=HEAP[$19]; //@line 1588 "_json.c"
        var $21=_PyObject_IsTrue($20); //@line 1588 "_json.c"
        var $22=HEAP[$idx_addr]; //@line 1588 "_json.c"
        var $23=((($22) + 1)&4294967295); //@line 1588 "_json.c"
        var $24=HEAP[$pystr_addr]; //@line 1588 "_json.c"
        var $25=HEAP[$next_idx_ptr_addr]; //@line 1588 "_json.c"
        var $26=_scanstring_unicode($24, $23, $21, $25); //@line 1588 "_json.c"
        HEAP[$0]=$26; //@line 1588 "_json.c"
        __label__ = 57; break; //@line 1588 "_json.c"
      case 4: // $bb3
        var $27=HEAP[__PyThreadState_Current]; //@line 1593 "_json.c"
        var $28=(($27+12)&4294967295); //@line 1593 "_json.c"
        var $29=HEAP[$28]; //@line 1593 "_json.c"
        var $30=((($29) + 1)&4294967295); //@line 1593 "_json.c"
        var $31=(($27+12)&4294967295); //@line 1593 "_json.c"
        HEAP[$31]=$30; //@line 1593 "_json.c"
        var $32=(($27+12)&4294967295); //@line 1593 "_json.c"
        var $33=HEAP[$32]; //@line 1593 "_json.c"
        var $34=HEAP[__Py_CheckRecursionLimit]; //@line 1593 "_json.c"
        var $35=((($33))|0) > ((($34))|0); //@line 1593 "_json.c"
        if ($35) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1593 "_json.c"
      case 5: // $bb4
        var $36=__Py_CheckRecursiveCall(((__str39)&4294967295)); //@line 1593 "_json.c"
        var $37=((($36))|0)!=0; //@line 1593 "_json.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1593 "_json.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 1595 "_json.c"
        __label__ = 57; break; //@line 1595 "_json.c"
      case 7: // $bb6
        var $38=HEAP[$idx_addr]; //@line 1596 "_json.c"
        var $39=((($38) + 1)&4294967295); //@line 1596 "_json.c"
        var $40=HEAP[$s_addr]; //@line 1596 "_json.c"
        var $41=HEAP[$pystr_addr]; //@line 1596 "_json.c"
        var $42=HEAP[$next_idx_ptr_addr]; //@line 1596 "_json.c"
        var $43=__parse_object_unicode($40, $41, $39, $42); //@line 1596 "_json.c"
        HEAP[$res]=$43; //@line 1596 "_json.c"
        var $44=HEAP[__PyThreadState_Current]; //@line 1597 "_json.c"
        var $45=(($44+12)&4294967295); //@line 1597 "_json.c"
        var $46=HEAP[$45]; //@line 1597 "_json.c"
        var $47=((($46) - 1)&4294967295); //@line 1597 "_json.c"
        var $48=(($44+12)&4294967295); //@line 1597 "_json.c"
        HEAP[$48]=$47; //@line 1597 "_json.c"
        var $49=HEAP[$res]; //@line 1598 "_json.c"
        HEAP[$0]=$49; //@line 1598 "_json.c"
        __label__ = 57; break; //@line 1598 "_json.c"
      case 8: // $bb7
        var $50=HEAP[__PyThreadState_Current]; //@line 1601 "_json.c"
        var $51=(($50+12)&4294967295); //@line 1601 "_json.c"
        var $52=HEAP[$51]; //@line 1601 "_json.c"
        var $53=((($52) + 1)&4294967295); //@line 1601 "_json.c"
        var $54=(($50+12)&4294967295); //@line 1601 "_json.c"
        HEAP[$54]=$53; //@line 1601 "_json.c"
        var $55=(($50+12)&4294967295); //@line 1601 "_json.c"
        var $56=HEAP[$55]; //@line 1601 "_json.c"
        var $57=HEAP[__Py_CheckRecursionLimit]; //@line 1601 "_json.c"
        var $58=((($56))|0) > ((($57))|0); //@line 1601 "_json.c"
        if ($58) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 1601 "_json.c"
      case 9: // $bb8
        var $59=__Py_CheckRecursiveCall(((__str40)&4294967295)); //@line 1601 "_json.c"
        var $60=((($59))|0)!=0; //@line 1601 "_json.c"
        if ($60) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1601 "_json.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 1603 "_json.c"
        __label__ = 57; break; //@line 1603 "_json.c"
      case 11: // $bb10
        var $61=HEAP[$idx_addr]; //@line 1604 "_json.c"
        var $62=((($61) + 1)&4294967295); //@line 1604 "_json.c"
        var $63=HEAP[$s_addr]; //@line 1604 "_json.c"
        var $64=HEAP[$pystr_addr]; //@line 1604 "_json.c"
        var $65=HEAP[$next_idx_ptr_addr]; //@line 1604 "_json.c"
        var $66=__parse_array_unicode($63, $64, $62, $65); //@line 1604 "_json.c"
        HEAP[$res]=$66; //@line 1604 "_json.c"
        var $67=HEAP[__PyThreadState_Current]; //@line 1605 "_json.c"
        var $68=(($67+12)&4294967295); //@line 1605 "_json.c"
        var $69=HEAP[$68]; //@line 1605 "_json.c"
        var $70=((($69) - 1)&4294967295); //@line 1605 "_json.c"
        var $71=(($67+12)&4294967295); //@line 1605 "_json.c"
        HEAP[$71]=$70; //@line 1605 "_json.c"
        var $72=HEAP[$res]; //@line 1606 "_json.c"
        HEAP[$0]=$72; //@line 1606 "_json.c"
        __label__ = 57; break; //@line 1606 "_json.c"
      case 12: // $bb11
        var $73=HEAP[$idx_addr]; //@line 1609 "_json.c"
        var $74=((($73) + 3)&4294967295); //@line 1609 "_json.c"
        var $75=HEAP[$length]; //@line 1609 "_json.c"
        var $76=((($74))|0) < ((($75))|0); //@line 1609 "_json.c"
        if ($76) { __label__ = 13; break; } else { __label__ = 17; break; } //@line 1609 "_json.c"
      case 13: // $bb12
        var $77=HEAP[$idx_addr]; //@line 1609 "_json.c"
        var $78=((($77) + 1)&4294967295); //@line 1609 "_json.c"
        var $79=HEAP[$str]; //@line 1609 "_json.c"
        var $80=(($79+2*$78)&4294967295); //@line 1609 "_json.c"
        var $81=HEAP[$80]; //@line 1609 "_json.c"
        var $82=reSign(($81), 16, 0)==117; //@line 1609 "_json.c"
        if ($82) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 1609 "_json.c"
      case 14: // $bb13
        var $83=HEAP[$idx_addr]; //@line 1609 "_json.c"
        var $84=((($83) + 2)&4294967295); //@line 1609 "_json.c"
        var $85=HEAP[$str]; //@line 1609 "_json.c"
        var $86=(($85+2*$84)&4294967295); //@line 1609 "_json.c"
        var $87=HEAP[$86]; //@line 1609 "_json.c"
        var $88=reSign(($87), 16, 0)==108; //@line 1609 "_json.c"
        if ($88) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1609 "_json.c"
      case 15: // $bb14
        var $89=HEAP[$idx_addr]; //@line 1609 "_json.c"
        var $90=((($89) + 3)&4294967295); //@line 1609 "_json.c"
        var $91=HEAP[$str]; //@line 1609 "_json.c"
        var $92=(($91+2*$90)&4294967295); //@line 1609 "_json.c"
        var $93=HEAP[$92]; //@line 1609 "_json.c"
        var $94=reSign(($93), 16, 0)==108; //@line 1609 "_json.c"
        if ($94) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1609 "_json.c"
      case 16: // $bb15
        var $95=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1610 "_json.c"
        var $96=((($95) + 1)&4294967295); //@line 1610 "_json.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$96; //@line 1610 "_json.c"
        var $97=HEAP[$idx_addr]; //@line 1611 "_json.c"
        var $98=((($97) + 4)&4294967295); //@line 1611 "_json.c"
        var $99=HEAP[$next_idx_ptr_addr]; //@line 1611 "_json.c"
        HEAP[$99]=$98; //@line 1611 "_json.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1612 "_json.c"
        __label__ = 57; break; //@line 1612 "_json.c"
      case 17: // $bb16
        __label__ = 56; break; //@line 1612 "_json.c"
      case 18: // $bb17
        var $100=HEAP[$idx_addr]; //@line 1617 "_json.c"
        var $101=((($100) + 3)&4294967295); //@line 1617 "_json.c"
        var $102=HEAP[$length]; //@line 1617 "_json.c"
        var $103=((($101))|0) < ((($102))|0); //@line 1617 "_json.c"
        if ($103) { __label__ = 19; break; } else { __label__ = 23; break; } //@line 1617 "_json.c"
      case 19: // $bb18
        var $104=HEAP[$idx_addr]; //@line 1617 "_json.c"
        var $105=((($104) + 1)&4294967295); //@line 1617 "_json.c"
        var $106=HEAP[$str]; //@line 1617 "_json.c"
        var $107=(($106+2*$105)&4294967295); //@line 1617 "_json.c"
        var $108=HEAP[$107]; //@line 1617 "_json.c"
        var $109=reSign(($108), 16, 0)==114; //@line 1617 "_json.c"
        if ($109) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 1617 "_json.c"
      case 20: // $bb19
        var $110=HEAP[$idx_addr]; //@line 1617 "_json.c"
        var $111=((($110) + 2)&4294967295); //@line 1617 "_json.c"
        var $112=HEAP[$str]; //@line 1617 "_json.c"
        var $113=(($112+2*$111)&4294967295); //@line 1617 "_json.c"
        var $114=HEAP[$113]; //@line 1617 "_json.c"
        var $115=reSign(($114), 16, 0)==117; //@line 1617 "_json.c"
        if ($115) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 1617 "_json.c"
      case 21: // $bb20
        var $116=HEAP[$idx_addr]; //@line 1617 "_json.c"
        var $117=((($116) + 3)&4294967295); //@line 1617 "_json.c"
        var $118=HEAP[$str]; //@line 1617 "_json.c"
        var $119=(($118+2*$117)&4294967295); //@line 1617 "_json.c"
        var $120=HEAP[$119]; //@line 1617 "_json.c"
        var $121=reSign(($120), 16, 0)==101; //@line 1617 "_json.c"
        if ($121) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1617 "_json.c"
      case 22: // $bb21
        var $122=((__Py_TrueStruct)&4294967295); //@line 1618 "_json.c"
        var $123=HEAP[$122]; //@line 1618 "_json.c"
        var $124=((($123) + 1)&4294967295); //@line 1618 "_json.c"
        var $125=((__Py_TrueStruct)&4294967295); //@line 1618 "_json.c"
        HEAP[$125]=$124; //@line 1618 "_json.c"
        var $126=HEAP[$idx_addr]; //@line 1619 "_json.c"
        var $127=((($126) + 4)&4294967295); //@line 1619 "_json.c"
        var $128=HEAP[$next_idx_ptr_addr]; //@line 1619 "_json.c"
        HEAP[$128]=$127; //@line 1619 "_json.c"
        HEAP[$0]=__Py_TrueStruct; //@line 1620 "_json.c"
        __label__ = 57; break; //@line 1620 "_json.c"
      case 23: // $bb22
        __label__ = 56; break; //@line 1620 "_json.c"
      case 24: // $bb23
        var $129=HEAP[$idx_addr]; //@line 1625 "_json.c"
        var $130=((($129) + 4)&4294967295); //@line 1625 "_json.c"
        var $131=HEAP[$length]; //@line 1625 "_json.c"
        var $132=((($130))|0) < ((($131))|0); //@line 1625 "_json.c"
        if ($132) { __label__ = 25; break; } else { __label__ = 30; break; } //@line 1625 "_json.c"
      case 25: // $bb24
        var $133=HEAP[$idx_addr]; //@line 1625 "_json.c"
        var $134=((($133) + 1)&4294967295); //@line 1625 "_json.c"
        var $135=HEAP[$str]; //@line 1625 "_json.c"
        var $136=(($135+2*$134)&4294967295); //@line 1625 "_json.c"
        var $137=HEAP[$136]; //@line 1625 "_json.c"
        var $138=reSign(($137), 16, 0)==97; //@line 1625 "_json.c"
        if ($138) { __label__ = 26; break; } else { __label__ = 30; break; } //@line 1625 "_json.c"
      case 26: // $bb25
        var $139=HEAP[$idx_addr]; //@line 1625 "_json.c"
        var $140=((($139) + 2)&4294967295); //@line 1625 "_json.c"
        var $141=HEAP[$str]; //@line 1625 "_json.c"
        var $142=(($141+2*$140)&4294967295); //@line 1625 "_json.c"
        var $143=HEAP[$142]; //@line 1625 "_json.c"
        var $144=reSign(($143), 16, 0)==108; //@line 1625 "_json.c"
        if ($144) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 1625 "_json.c"
      case 27: // $bb26
        var $145=HEAP[$idx_addr]; //@line 1625 "_json.c"
        var $146=((($145) + 3)&4294967295); //@line 1625 "_json.c"
        var $147=HEAP[$str]; //@line 1625 "_json.c"
        var $148=(($147+2*$146)&4294967295); //@line 1625 "_json.c"
        var $149=HEAP[$148]; //@line 1625 "_json.c"
        var $150=reSign(($149), 16, 0)==115; //@line 1625 "_json.c"
        if ($150) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 1625 "_json.c"
      case 28: // $bb27
        var $151=HEAP[$idx_addr]; //@line 1625 "_json.c"
        var $152=((($151) + 4)&4294967295); //@line 1625 "_json.c"
        var $153=HEAP[$str]; //@line 1625 "_json.c"
        var $154=(($153+2*$152)&4294967295); //@line 1625 "_json.c"
        var $155=HEAP[$154]; //@line 1625 "_json.c"
        var $156=reSign(($155), 16, 0)==101; //@line 1625 "_json.c"
        if ($156) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1625 "_json.c"
      case 29: // $bb28
        var $157=((__Py_ZeroStruct)&4294967295); //@line 1626 "_json.c"
        var $158=HEAP[$157]; //@line 1626 "_json.c"
        var $159=((($158) + 1)&4294967295); //@line 1626 "_json.c"
        var $160=((__Py_ZeroStruct)&4294967295); //@line 1626 "_json.c"
        HEAP[$160]=$159; //@line 1626 "_json.c"
        var $161=HEAP[$idx_addr]; //@line 1627 "_json.c"
        var $162=((($161) + 5)&4294967295); //@line 1627 "_json.c"
        var $163=HEAP[$next_idx_ptr_addr]; //@line 1627 "_json.c"
        HEAP[$163]=$162; //@line 1627 "_json.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 1628 "_json.c"
        __label__ = 57; break; //@line 1628 "_json.c"
      case 30: // $bb29
        __label__ = 56; break; //@line 1628 "_json.c"
      case 31: // $bb30
        var $164=HEAP[$idx_addr]; //@line 1633 "_json.c"
        var $165=((($164) + 2)&4294967295); //@line 1633 "_json.c"
        var $166=HEAP[$length]; //@line 1633 "_json.c"
        var $167=((($165))|0) < ((($166))|0); //@line 1633 "_json.c"
        if ($167) { __label__ = 32; break; } else { __label__ = 35; break; } //@line 1633 "_json.c"
      case 32: // $bb31
        var $168=HEAP[$idx_addr]; //@line 1633 "_json.c"
        var $169=((($168) + 1)&4294967295); //@line 1633 "_json.c"
        var $170=HEAP[$str]; //@line 1633 "_json.c"
        var $171=(($170+2*$169)&4294967295); //@line 1633 "_json.c"
        var $172=HEAP[$171]; //@line 1633 "_json.c"
        var $173=reSign(($172), 16, 0)==97; //@line 1633 "_json.c"
        if ($173) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 1633 "_json.c"
      case 33: // $bb32
        var $174=HEAP[$idx_addr]; //@line 1633 "_json.c"
        var $175=((($174) + 2)&4294967295); //@line 1633 "_json.c"
        var $176=HEAP[$str]; //@line 1633 "_json.c"
        var $177=(($176+2*$175)&4294967295); //@line 1633 "_json.c"
        var $178=HEAP[$177]; //@line 1633 "_json.c"
        var $179=reSign(($178), 16, 0)==78; //@line 1633 "_json.c"
        if ($179) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1633 "_json.c"
      case 34: // $bb33
        var $180=HEAP[$s_addr]; //@line 1634 "_json.c"
        var $181=HEAP[$idx_addr]; //@line 1634 "_json.c"
        var $182=HEAP[$next_idx_ptr_addr]; //@line 1634 "_json.c"
        var $183=__parse_constant($180, ((__str36)&4294967295), $181, $182); //@line 1634 "_json.c"
        HEAP[$0]=$183; //@line 1634 "_json.c"
        __label__ = 57; break; //@line 1634 "_json.c"
      case 35: // $bb34
        __label__ = 56; break; //@line 1634 "_json.c"
      case 36: // $bb35
        var $184=HEAP[$idx_addr]; //@line 1639 "_json.c"
        var $185=((($184) + 7)&4294967295); //@line 1639 "_json.c"
        var $186=HEAP[$length]; //@line 1639 "_json.c"
        var $187=((($185))|0) < ((($186))|0); //@line 1639 "_json.c"
        if ($187) { __label__ = 37; break; } else { __label__ = 45; break; } //@line 1639 "_json.c"
      case 37: // $bb36
        var $188=HEAP[$idx_addr]; //@line 1639 "_json.c"
        var $189=((($188) + 1)&4294967295); //@line 1639 "_json.c"
        var $190=HEAP[$str]; //@line 1639 "_json.c"
        var $191=(($190+2*$189)&4294967295); //@line 1639 "_json.c"
        var $192=HEAP[$191]; //@line 1639 "_json.c"
        var $193=reSign(($192), 16, 0)==110; //@line 1639 "_json.c"
        if ($193) { __label__ = 38; break; } else { __label__ = 45; break; } //@line 1639 "_json.c"
      case 38: // $bb37
        var $194=HEAP[$idx_addr]; //@line 1639 "_json.c"
        var $195=((($194) + 2)&4294967295); //@line 1639 "_json.c"
        var $196=HEAP[$str]; //@line 1639 "_json.c"
        var $197=(($196+2*$195)&4294967295); //@line 1639 "_json.c"
        var $198=HEAP[$197]; //@line 1639 "_json.c"
        var $199=reSign(($198), 16, 0)==102; //@line 1639 "_json.c"
        if ($199) { __label__ = 39; break; } else { __label__ = 45; break; } //@line 1639 "_json.c"
      case 39: // $bb38
        var $200=HEAP[$idx_addr]; //@line 1639 "_json.c"
        var $201=((($200) + 3)&4294967295); //@line 1639 "_json.c"
        var $202=HEAP[$str]; //@line 1639 "_json.c"
        var $203=(($202+2*$201)&4294967295); //@line 1639 "_json.c"
        var $204=HEAP[$203]; //@line 1639 "_json.c"
        var $205=reSign(($204), 16, 0)==105; //@line 1639 "_json.c"
        if ($205) { __label__ = 40; break; } else { __label__ = 45; break; } //@line 1639 "_json.c"
      case 40: // $bb39
        var $206=HEAP[$idx_addr]; //@line 1639 "_json.c"
        var $207=((($206) + 4)&4294967295); //@line 1639 "_json.c"
        var $208=HEAP[$str]; //@line 1639 "_json.c"
        var $209=(($208+2*$207)&4294967295); //@line 1639 "_json.c"
        var $210=HEAP[$209]; //@line 1639 "_json.c"
        var $211=reSign(($210), 16, 0)==110; //@line 1639 "_json.c"
        if ($211) { __label__ = 41; break; } else { __label__ = 45; break; } //@line 1639 "_json.c"
      case 41: // $bb40
        var $212=HEAP[$idx_addr]; //@line 1639 "_json.c"
        var $213=((($212) + 5)&4294967295); //@line 1639 "_json.c"
        var $214=HEAP[$str]; //@line 1639 "_json.c"
        var $215=(($214+2*$213)&4294967295); //@line 1639 "_json.c"
        var $216=HEAP[$215]; //@line 1639 "_json.c"
        var $217=reSign(($216), 16, 0)==105; //@line 1639 "_json.c"
        if ($217) { __label__ = 42; break; } else { __label__ = 45; break; } //@line 1639 "_json.c"
      case 42: // $bb41
        var $218=HEAP[$idx_addr]; //@line 1639 "_json.c"
        var $219=((($218) + 6)&4294967295); //@line 1639 "_json.c"
        var $220=HEAP[$str]; //@line 1639 "_json.c"
        var $221=(($220+2*$219)&4294967295); //@line 1639 "_json.c"
        var $222=HEAP[$221]; //@line 1639 "_json.c"
        var $223=reSign(($222), 16, 0)==116; //@line 1639 "_json.c"
        if ($223) { __label__ = 43; break; } else { __label__ = 45; break; } //@line 1639 "_json.c"
      case 43: // $bb42
        var $224=HEAP[$idx_addr]; //@line 1639 "_json.c"
        var $225=((($224) + 7)&4294967295); //@line 1639 "_json.c"
        var $226=HEAP[$str]; //@line 1639 "_json.c"
        var $227=(($226+2*$225)&4294967295); //@line 1639 "_json.c"
        var $228=HEAP[$227]; //@line 1639 "_json.c"
        var $229=reSign(($228), 16, 0)==121; //@line 1639 "_json.c"
        if ($229) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1639 "_json.c"
      case 44: // $bb43
        var $230=HEAP[$s_addr]; //@line 1640 "_json.c"
        var $231=HEAP[$idx_addr]; //@line 1640 "_json.c"
        var $232=HEAP[$next_idx_ptr_addr]; //@line 1640 "_json.c"
        var $233=__parse_constant($230, ((__str37)&4294967295), $231, $232); //@line 1640 "_json.c"
        HEAP[$0]=$233; //@line 1640 "_json.c"
        __label__ = 57; break; //@line 1640 "_json.c"
      case 45: // $bb44
        __label__ = 56; break; //@line 1640 "_json.c"
      case 46: // $bb45
        var $234=HEAP[$idx_addr]; //@line 1645 "_json.c"
        var $235=((($234) + 8)&4294967295); //@line 1645 "_json.c"
        var $236=HEAP[$length]; //@line 1645 "_json.c"
        var $237=((($235))|0) < ((($236))|0); //@line 1645 "_json.c"
        if ($237) { __label__ = 47; break; } else { __label__ = 56; break; } //@line 1645 "_json.c"
      case 47: // $bb46
        var $238=HEAP[$idx_addr]; //@line 1645 "_json.c"
        var $239=((($238) + 1)&4294967295); //@line 1645 "_json.c"
        var $240=HEAP[$str]; //@line 1645 "_json.c"
        var $241=(($240+2*$239)&4294967295); //@line 1645 "_json.c"
        var $242=HEAP[$241]; //@line 1645 "_json.c"
        var $243=reSign(($242), 16, 0)==73; //@line 1645 "_json.c"
        if ($243) { __label__ = 48; break; } else { __label__ = 56; break; } //@line 1645 "_json.c"
      case 48: // $bb47
        var $244=HEAP[$idx_addr]; //@line 1645 "_json.c"
        var $245=((($244) + 2)&4294967295); //@line 1645 "_json.c"
        var $246=HEAP[$str]; //@line 1645 "_json.c"
        var $247=(($246+2*$245)&4294967295); //@line 1645 "_json.c"
        var $248=HEAP[$247]; //@line 1645 "_json.c"
        var $249=reSign(($248), 16, 0)==110; //@line 1645 "_json.c"
        if ($249) { __label__ = 49; break; } else { __label__ = 56; break; } //@line 1645 "_json.c"
      case 49: // $bb48
        var $250=HEAP[$idx_addr]; //@line 1645 "_json.c"
        var $251=((($250) + 3)&4294967295); //@line 1645 "_json.c"
        var $252=HEAP[$str]; //@line 1645 "_json.c"
        var $253=(($252+2*$251)&4294967295); //@line 1645 "_json.c"
        var $254=HEAP[$253]; //@line 1645 "_json.c"
        var $255=reSign(($254), 16, 0)==102; //@line 1645 "_json.c"
        if ($255) { __label__ = 50; break; } else { __label__ = 56; break; } //@line 1645 "_json.c"
      case 50: // $bb49
        var $256=HEAP[$idx_addr]; //@line 1645 "_json.c"
        var $257=((($256) + 4)&4294967295); //@line 1645 "_json.c"
        var $258=HEAP[$str]; //@line 1645 "_json.c"
        var $259=(($258+2*$257)&4294967295); //@line 1645 "_json.c"
        var $260=HEAP[$259]; //@line 1645 "_json.c"
        var $261=reSign(($260), 16, 0)==105; //@line 1645 "_json.c"
        if ($261) { __label__ = 51; break; } else { __label__ = 56; break; } //@line 1645 "_json.c"
      case 51: // $bb50
        var $262=HEAP[$idx_addr]; //@line 1645 "_json.c"
        var $263=((($262) + 5)&4294967295); //@line 1645 "_json.c"
        var $264=HEAP[$str]; //@line 1645 "_json.c"
        var $265=(($264+2*$263)&4294967295); //@line 1645 "_json.c"
        var $266=HEAP[$265]; //@line 1645 "_json.c"
        var $267=reSign(($266), 16, 0)==110; //@line 1645 "_json.c"
        if ($267) { __label__ = 52; break; } else { __label__ = 56; break; } //@line 1645 "_json.c"
      case 52: // $bb51
        var $268=HEAP[$idx_addr]; //@line 1645 "_json.c"
        var $269=((($268) + 6)&4294967295); //@line 1645 "_json.c"
        var $270=HEAP[$str]; //@line 1645 "_json.c"
        var $271=(($270+2*$269)&4294967295); //@line 1645 "_json.c"
        var $272=HEAP[$271]; //@line 1645 "_json.c"
        var $273=reSign(($272), 16, 0)==105; //@line 1645 "_json.c"
        if ($273) { __label__ = 53; break; } else { __label__ = 56; break; } //@line 1645 "_json.c"
      case 53: // $bb52
        var $274=HEAP[$idx_addr]; //@line 1645 "_json.c"
        var $275=((($274) + 7)&4294967295); //@line 1645 "_json.c"
        var $276=HEAP[$str]; //@line 1645 "_json.c"
        var $277=(($276+2*$275)&4294967295); //@line 1645 "_json.c"
        var $278=HEAP[$277]; //@line 1645 "_json.c"
        var $279=reSign(($278), 16, 0)==116; //@line 1645 "_json.c"
        if ($279) { __label__ = 54; break; } else { __label__ = 56; break; } //@line 1645 "_json.c"
      case 54: // $bb53
        var $280=HEAP[$idx_addr]; //@line 1645 "_json.c"
        var $281=((($280) + 8)&4294967295); //@line 1645 "_json.c"
        var $282=HEAP[$str]; //@line 1645 "_json.c"
        var $283=(($282+2*$281)&4294967295); //@line 1645 "_json.c"
        var $284=HEAP[$283]; //@line 1645 "_json.c"
        var $285=reSign(($284), 16, 0)==121; //@line 1645 "_json.c"
        if ($285) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1645 "_json.c"
      case 55: // $bb54
        var $286=HEAP[$s_addr]; //@line 1646 "_json.c"
        var $287=HEAP[$idx_addr]; //@line 1646 "_json.c"
        var $288=HEAP[$next_idx_ptr_addr]; //@line 1646 "_json.c"
        var $289=__parse_constant($286, ((__str38)&4294967295), $287, $288); //@line 1646 "_json.c"
        HEAP[$0]=$289; //@line 1646 "_json.c"
        __label__ = 57; break; //@line 1646 "_json.c"
      case 56: // $bb55
        var $290=HEAP[$s_addr]; //@line 1651 "_json.c"
        var $291=HEAP[$pystr_addr]; //@line 1651 "_json.c"
        var $292=HEAP[$idx_addr]; //@line 1651 "_json.c"
        var $293=HEAP[$next_idx_ptr_addr]; //@line 1651 "_json.c"
        var $294=__match_number_unicode($290, $291, $292, $293); //@line 1651 "_json.c"
        HEAP[$0]=$294; //@line 1651 "_json.c"
        __label__ = 57; break; //@line 1651 "_json.c"
      case 57: // $bb56
        var $295=HEAP[$0]; //@line 1583 "_json.c"
        HEAP[$retval]=$295; //@line 1583 "_json.c"
        __label__ = 58; break; //@line 1583 "_json.c"
      case 58: // $return
        var $retval57=HEAP[$retval]; //@line 1583 "_json.c"
        STACKTOP = __stackBase__;
        return $retval57; //@line 1583 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_call($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $pystr=__stackBase__+20;
        var $rval=__stackBase__+24;
        var $idx=__stackBase__+28;
        var $next_idx=__stackBase__+32;
        var $s=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$next_idx]=-1; //@line 1661 "_json.c"
        var $1=HEAP[$self_addr]; //@line 1664 "_json.c"
        var $2=(($1+4)&4294967295); //@line 1664 "_json.c"
        var $3=HEAP[$2]; //@line 1664 "_json.c"
        var $4=($3)!=(_PyScannerType); //@line 1664 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1664 "_json.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1664 "_json.c"
        var $6=(($5+4)&4294967295); //@line 1664 "_json.c"
        var $7=HEAP[$6]; //@line 1664 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyScannerType); //@line 1664 "_json.c"
        var $9=((($8))|0)==0; //@line 1664 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1664 "_json.c"
      case 2: // $bb1
        ___assert_fail(((__str28)&4294967295), ((__str29)&4294967295), 1664, ((___PRETTY_FUNCTION___10703)&4294967295)); //@line 1664 "_json.c"
        throw "Reached an unreachable! Original .ll line: 7841"; //@line 1664 "_json.c"
      case 3: // $bb2
        var $10=HEAP[$self_addr]; //@line 1665 "_json.c"
        var $11=$10; //@line 1665 "_json.c"
        HEAP[$s]=$11; //@line 1665 "_json.c"
        var $12=HEAP[$args_addr]; //@line 1666 "_json.c"
        var $13=HEAP[$kwds_addr]; //@line 1666 "_json.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, ((__str41)&4294967295), ((_kwlist_10701)&4294967295), $pystr, (FUNCTION_TABLE_OFFSET + 4), $idx); //@line 1666 "_json.c"
        var $15=((($14))|0)==0; //@line 1666 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1666 "_json.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 1667 "_json.c"
        __label__ = 11; break; //@line 1667 "_json.c"
      case 5: // $bb4
        var $16=HEAP[$pystr]; //@line 1669 "_json.c"
        var $17=(($16+4)&4294967295); //@line 1669 "_json.c"
        var $18=HEAP[$17]; //@line 1669 "_json.c"
        var $19=(($18+84)&4294967295); //@line 1669 "_json.c"
        var $20=HEAP[$19]; //@line 1669 "_json.c"
        var $21=($20) & 134217728; //@line 1669 "_json.c"
        var $22=((($21))|0)!=0; //@line 1669 "_json.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1669 "_json.c"
      case 6: // $bb5
        var $23=HEAP[$idx]; //@line 1670 "_json.c"
        var $24=HEAP[$pystr]; //@line 1670 "_json.c"
        var $25=HEAP[$s]; //@line 1670 "_json.c"
        var $26=_scan_once_str($25, $24, $23, $next_idx); //@line 1670 "_json.c"
        HEAP[$rval]=$26; //@line 1670 "_json.c"
        __label__ = 10; break; //@line 1670 "_json.c"
      case 7: // $bb6
        var $27=HEAP[$pystr]; //@line 1672 "_json.c"
        var $28=(($27+4)&4294967295); //@line 1672 "_json.c"
        var $29=HEAP[$28]; //@line 1672 "_json.c"
        var $30=(($29+84)&4294967295); //@line 1672 "_json.c"
        var $31=HEAP[$30]; //@line 1672 "_json.c"
        var $32=($31) & 268435456; //@line 1672 "_json.c"
        var $33=((($32))|0)!=0; //@line 1672 "_json.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1672 "_json.c"
      case 8: // $bb7
        var $34=HEAP[$idx]; //@line 1673 "_json.c"
        var $35=HEAP[$pystr]; //@line 1673 "_json.c"
        var $36=HEAP[$s]; //@line 1673 "_json.c"
        var $37=_scan_once_unicode($36, $35, $34, $next_idx); //@line 1673 "_json.c"
        HEAP[$rval]=$37; //@line 1673 "_json.c"
        __label__ = 10; break; //@line 1673 "_json.c"
      case 9: // $bb8
        var $38=HEAP[$pystr]; //@line 1676 "_json.c"
        var $39=(($38+4)&4294967295); //@line 1676 "_json.c"
        var $40=HEAP[$39]; //@line 1676 "_json.c"
        var $41=(($40+12)&4294967295); //@line 1676 "_json.c"
        var $42=HEAP[$41]; //@line 1676 "_json.c"
        var $43=HEAP[_PyExc_TypeError]; //@line 1676 "_json.c"
        var $44=_PyErr_Format($43, ((__str27)&4294967295), $42); //@line 1676 "_json.c"
        HEAP[$0]=0; //@line 1679 "_json.c"
        __label__ = 11; break; //@line 1679 "_json.c"
      case 10: // $bb9
        var $45=HEAP[$next_idx]; //@line 1681 "_json.c"
        var $46=HEAP[$rval]; //@line 1681 "_json.c"
        var $47=__build_rval_index_tuple($46, $45); //@line 1681 "_json.c"
        HEAP[$0]=$47; //@line 1681 "_json.c"
        __label__ = 11; break; //@line 1681 "_json.c"
      case 11: // $bb10
        var $48=HEAP[$0]; //@line 1667 "_json.c"
        HEAP[$retval]=$48; //@line 1667 "_json.c"
        __label__ = 12; break; //@line 1667 "_json.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 1667 "_json.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1667 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $s=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        var $1=HEAP[$type_addr]; //@line 1688 "_json.c"
        var $2=(($1+152)&4294967295); //@line 1688 "_json.c"
        var $3=HEAP[$2]; //@line 1688 "_json.c"
        var $4=HEAP[$type_addr]; //@line 1688 "_json.c"
        var $5=FUNCTION_TABLE[$3]($4, 0); //@line 1688 "_json.c"
        var $6=$5; //@line 1688 "_json.c"
        HEAP[$s]=$6; //@line 1688 "_json.c"
        var $7=HEAP[$s]; //@line 1689 "_json.c"
        var $8=($7)!=0; //@line 1689 "_json.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1689 "_json.c"
      case 1: // $bb
        var $9=HEAP[$s]; //@line 1690 "_json.c"
        var $10=(($9+8)&4294967295); //@line 1690 "_json.c"
        HEAP[$10]=0; //@line 1690 "_json.c"
        var $11=HEAP[$s]; //@line 1691 "_json.c"
        var $12=(($11+12)&4294967295); //@line 1691 "_json.c"
        HEAP[$12]=0; //@line 1691 "_json.c"
        var $13=HEAP[$s]; //@line 1692 "_json.c"
        var $14=(($13+16)&4294967295); //@line 1692 "_json.c"
        HEAP[$14]=0; //@line 1692 "_json.c"
        var $15=HEAP[$s]; //@line 1693 "_json.c"
        var $16=(($15+20)&4294967295); //@line 1693 "_json.c"
        HEAP[$16]=0; //@line 1693 "_json.c"
        var $17=HEAP[$s]; //@line 1694 "_json.c"
        var $18=(($17+24)&4294967295); //@line 1694 "_json.c"
        HEAP[$18]=0; //@line 1694 "_json.c"
        var $19=HEAP[$s]; //@line 1695 "_json.c"
        var $20=(($19+28)&4294967295); //@line 1695 "_json.c"
        HEAP[$20]=0; //@line 1695 "_json.c"
        var $21=HEAP[$s]; //@line 1696 "_json.c"
        var $22=(($21+32)&4294967295); //@line 1696 "_json.c"
        HEAP[$22]=0; //@line 1696 "_json.c"
        __label__ = 2; break; //@line 1696 "_json.c"
      case 2: // $bb1
        var $23=HEAP[$s]; //@line 1698 "_json.c"
        var $24=$23; //@line 1698 "_json.c"
        HEAP[$0]=$24; //@line 1698 "_json.c"
        var $25=HEAP[$0]; //@line 1698 "_json.c"
        HEAP[$retval]=$25; //@line 1698 "_json.c"
        __label__ = 3; break; //@line 1698 "_json.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 1698 "_json.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 1698 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_init($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $ctx=__stackBase__+20;
        var $s=__stackBase__+24;
        var $tmp=__stackBase__+28;
        var $_py_tmp=__stackBase__+32;
        var $_py_tmp26=__stackBase__+36;
        var $_py_tmp30=__stackBase__+40;
        var $_py_tmp34=__stackBase__+44;
        var $_py_tmp38=__stackBase__+48;
        var $_py_tmp42=__stackBase__+52;
        var $_py_tmp46=__stackBase__+56;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        var $1=HEAP[$self_addr]; //@line 1709 "_json.c"
        var $2=(($1+4)&4294967295); //@line 1709 "_json.c"
        var $3=HEAP[$2]; //@line 1709 "_json.c"
        var $4=($3)!=(_PyScannerType); //@line 1709 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1709 "_json.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1709 "_json.c"
        var $6=(($5+4)&4294967295); //@line 1709 "_json.c"
        var $7=HEAP[$6]; //@line 1709 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyScannerType); //@line 1709 "_json.c"
        var $9=((($8))|0)==0; //@line 1709 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1709 "_json.c"
      case 2: // $bb1
        ___assert_fail(((__str28)&4294967295), ((__str29)&4294967295), 1709, ((___PRETTY_FUNCTION___10762)&4294967295)); //@line 1709 "_json.c"
        throw "Reached an unreachable! Original .ll line: 8032"; //@line 1709 "_json.c"
      case 3: // $bb2
        var $10=HEAP[$self_addr]; //@line 1710 "_json.c"
        var $11=$10; //@line 1710 "_json.c"
        HEAP[$s]=$11; //@line 1710 "_json.c"
        var $12=HEAP[$args_addr]; //@line 1712 "_json.c"
        var $13=HEAP[$kwds_addr]; //@line 1712 "_json.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, ((__str44)&4294967295), ((_kwlist_10760)&4294967295), $ctx); //@line 1712 "_json.c"
        var $15=((($14))|0)==0; //@line 1712 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1712 "_json.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 1713 "_json.c"
        __label__ = 45; break; //@line 1713 "_json.c"
      case 5: // $bb4
        var $16=HEAP[$ctx]; //@line 1716 "_json.c"
        var $17=_PyObject_GetAttrString($16, ((__str)&4294967295)); //@line 1716 "_json.c"
        var $18=HEAP[$s]; //@line 1716 "_json.c"
        var $19=(($18+8)&4294967295); //@line 1716 "_json.c"
        HEAP[$19]=$17; //@line 1716 "_json.c"
        var $20=HEAP[$s]; //@line 1717 "_json.c"
        var $21=(($20+8)&4294967295); //@line 1717 "_json.c"
        var $22=HEAP[$21]; //@line 1717 "_json.c"
        var $23=($22)==0; //@line 1717 "_json.c"
        if ($23) { __label__ = 23; break; } else { __label__ = 6; break; } //@line 1717 "_json.c"
      case 6: // $bb5
        var $24=HEAP[$s]; //@line 1719 "_json.c"
        var $25=(($24+8)&4294967295); //@line 1719 "_json.c"
        var $26=HEAP[$25]; //@line 1719 "_json.c"
        var $27=($26)==(__Py_NoneStruct); //@line 1719 "_json.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 1719 "_json.c"
      case 7: // $bb6
        var $28=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1720 "_json.c"
        var $29=((($28) - 1)&4294967295); //@line 1720 "_json.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$29; //@line 1720 "_json.c"
        var $30=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1720 "_json.c"
        var $31=((($30))|0)==0; //@line 1720 "_json.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1720 "_json.c"
      case 8: // $bb7
        var $32=HEAP[((__Py_NoneStruct+4)&4294967295)]; //@line 1720 "_json.c"
        var $33=(($32+24)&4294967295); //@line 1720 "_json.c"
        var $34=HEAP[$33]; //@line 1720 "_json.c"
        FUNCTION_TABLE[$34](__Py_NoneStruct); //@line 1720 "_json.c"
        __label__ = 9; break; //@line 1720 "_json.c"
      case 9: // $bb8
        var $35=_PyString_InternFromString(((__str26)&4294967295)); //@line 1721 "_json.c"
        var $36=HEAP[$s]; //@line 1721 "_json.c"
        var $37=(($36+8)&4294967295); //@line 1721 "_json.c"
        HEAP[$37]=$35; //@line 1721 "_json.c"
        __label__ = 14; break; //@line 1721 "_json.c"
      case 10: // $bb9
        var $38=HEAP[$s]; //@line 1723 "_json.c"
        var $39=(($38+8)&4294967295); //@line 1723 "_json.c"
        var $40=HEAP[$39]; //@line 1723 "_json.c"
        var $41=(($40+4)&4294967295); //@line 1723 "_json.c"
        var $42=HEAP[$41]; //@line 1723 "_json.c"
        var $43=(($42+84)&4294967295); //@line 1723 "_json.c"
        var $44=HEAP[$43]; //@line 1723 "_json.c"
        var $45=($44) & 268435456; //@line 1723 "_json.c"
        var $46=((($45))|0)!=0; //@line 1723 "_json.c"
        if ($46) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1723 "_json.c"
      case 11: // $bb10
        var $47=HEAP[$s]; //@line 1724 "_json.c"
        var $48=(($47+8)&4294967295); //@line 1724 "_json.c"
        var $49=HEAP[$48]; //@line 1724 "_json.c"
        var $50=_PyUnicodeUCS2_AsEncodedString($49, 0, 0); //@line 1724 "_json.c"
        HEAP[$tmp]=$50; //@line 1724 "_json.c"
        var $51=HEAP[$s]; //@line 1725 "_json.c"
        var $52=(($51+8)&4294967295); //@line 1725 "_json.c"
        var $53=HEAP[$52]; //@line 1725 "_json.c"
        var $54=(($53)&4294967295); //@line 1725 "_json.c"
        var $55=HEAP[$54]; //@line 1725 "_json.c"
        var $56=((($55) - 1)&4294967295); //@line 1725 "_json.c"
        var $57=(($53)&4294967295); //@line 1725 "_json.c"
        HEAP[$57]=$56; //@line 1725 "_json.c"
        var $58=(($53)&4294967295); //@line 1725 "_json.c"
        var $59=HEAP[$58]; //@line 1725 "_json.c"
        var $60=((($59))|0)==0; //@line 1725 "_json.c"
        if ($60) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1725 "_json.c"
      case 12: // $bb11
        var $61=HEAP[$s]; //@line 1725 "_json.c"
        var $62=(($61+8)&4294967295); //@line 1725 "_json.c"
        var $63=HEAP[$62]; //@line 1725 "_json.c"
        var $64=(($63+4)&4294967295); //@line 1725 "_json.c"
        var $65=HEAP[$64]; //@line 1725 "_json.c"
        var $66=(($65+24)&4294967295); //@line 1725 "_json.c"
        var $67=HEAP[$66]; //@line 1725 "_json.c"
        var $68=HEAP[$s]; //@line 1725 "_json.c"
        var $69=(($68+8)&4294967295); //@line 1725 "_json.c"
        var $70=HEAP[$69]; //@line 1725 "_json.c"
        FUNCTION_TABLE[$67]($70); //@line 1725 "_json.c"
        __label__ = 13; break; //@line 1725 "_json.c"
      case 13: // $bb12
        var $71=HEAP[$s]; //@line 1726 "_json.c"
        var $72=(($71+8)&4294967295); //@line 1726 "_json.c"
        var $73=HEAP[$tmp]; //@line 1726 "_json.c"
        HEAP[$72]=$73; //@line 1726 "_json.c"
        __label__ = 14; break; //@line 1726 "_json.c"
      case 14: // $bb13
        var $74=HEAP[$s]; //@line 1728 "_json.c"
        var $75=(($74+8)&4294967295); //@line 1728 "_json.c"
        var $76=HEAP[$75]; //@line 1728 "_json.c"
        var $77=($76)==0; //@line 1728 "_json.c"
        if ($77) { __label__ = 23; break; } else { __label__ = 15; break; } //@line 1728 "_json.c"
      case 15: // $bb14
        var $78=HEAP[$s]; //@line 1728 "_json.c"
        var $79=(($78+8)&4294967295); //@line 1728 "_json.c"
        var $80=HEAP[$79]; //@line 1728 "_json.c"
        var $81=(($80+4)&4294967295); //@line 1728 "_json.c"
        var $82=HEAP[$81]; //@line 1728 "_json.c"
        var $83=(($82+84)&4294967295); //@line 1728 "_json.c"
        var $84=HEAP[$83]; //@line 1728 "_json.c"
        var $85=($84) & 134217728; //@line 1728 "_json.c"
        var $86=((($85))|0)==0; //@line 1728 "_json.c"
        if ($86) { __label__ = 23; break; } else { __label__ = 16; break; } //@line 1728 "_json.c"
      case 16: // $bb15
        var $87=HEAP[$ctx]; //@line 1732 "_json.c"
        var $88=_PyObject_GetAttrString($87, ((__str1)&4294967295)); //@line 1732 "_json.c"
        var $89=HEAP[$s]; //@line 1732 "_json.c"
        var $90=(($89+12)&4294967295); //@line 1732 "_json.c"
        HEAP[$90]=$88; //@line 1732 "_json.c"
        var $91=HEAP[$s]; //@line 1733 "_json.c"
        var $92=(($91+12)&4294967295); //@line 1733 "_json.c"
        var $93=HEAP[$92]; //@line 1733 "_json.c"
        var $94=($93)==0; //@line 1733 "_json.c"
        if ($94) { __label__ = 23; break; } else { __label__ = 17; break; } //@line 1733 "_json.c"
      case 17: // $bb16
        var $95=HEAP[$ctx]; //@line 1735 "_json.c"
        var $96=_PyObject_GetAttrString($95, ((__str2)&4294967295)); //@line 1735 "_json.c"
        var $97=HEAP[$s]; //@line 1735 "_json.c"
        var $98=(($97+16)&4294967295); //@line 1735 "_json.c"
        HEAP[$98]=$96; //@line 1735 "_json.c"
        var $99=HEAP[$s]; //@line 1736 "_json.c"
        var $100=(($99+16)&4294967295); //@line 1736 "_json.c"
        var $101=HEAP[$100]; //@line 1736 "_json.c"
        var $102=($101)==0; //@line 1736 "_json.c"
        if ($102) { __label__ = 23; break; } else { __label__ = 18; break; } //@line 1736 "_json.c"
      case 18: // $bb17
        var $103=HEAP[$ctx]; //@line 1738 "_json.c"
        var $104=_PyObject_GetAttrString($103, ((__str3)&4294967295)); //@line 1738 "_json.c"
        var $105=HEAP[$s]; //@line 1738 "_json.c"
        var $106=(($105+20)&4294967295); //@line 1738 "_json.c"
        HEAP[$106]=$104; //@line 1738 "_json.c"
        var $107=HEAP[$s]; //@line 1739 "_json.c"
        var $108=(($107+20)&4294967295); //@line 1739 "_json.c"
        var $109=HEAP[$108]; //@line 1739 "_json.c"
        var $110=($109)==0; //@line 1739 "_json.c"
        if ($110) { __label__ = 23; break; } else { __label__ = 19; break; } //@line 1739 "_json.c"
      case 19: // $bb18
        var $111=HEAP[$ctx]; //@line 1741 "_json.c"
        var $112=_PyObject_GetAttrString($111, ((__str4)&4294967295)); //@line 1741 "_json.c"
        var $113=HEAP[$s]; //@line 1741 "_json.c"
        var $114=(($113+24)&4294967295); //@line 1741 "_json.c"
        HEAP[$114]=$112; //@line 1741 "_json.c"
        var $115=HEAP[$s]; //@line 1742 "_json.c"
        var $116=(($115+24)&4294967295); //@line 1742 "_json.c"
        var $117=HEAP[$116]; //@line 1742 "_json.c"
        var $118=($117)==0; //@line 1742 "_json.c"
        if ($118) { __label__ = 23; break; } else { __label__ = 20; break; } //@line 1742 "_json.c"
      case 20: // $bb19
        var $119=HEAP[$ctx]; //@line 1744 "_json.c"
        var $120=_PyObject_GetAttrString($119, ((__str5)&4294967295)); //@line 1744 "_json.c"
        var $121=HEAP[$s]; //@line 1744 "_json.c"
        var $122=(($121+28)&4294967295); //@line 1744 "_json.c"
        HEAP[$122]=$120; //@line 1744 "_json.c"
        var $123=HEAP[$s]; //@line 1745 "_json.c"
        var $124=(($123+28)&4294967295); //@line 1745 "_json.c"
        var $125=HEAP[$124]; //@line 1745 "_json.c"
        var $126=($125)==0; //@line 1745 "_json.c"
        if ($126) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 1745 "_json.c"
      case 21: // $bb20
        var $127=HEAP[$ctx]; //@line 1747 "_json.c"
        var $128=_PyObject_GetAttrString($127, ((__str6)&4294967295)); //@line 1747 "_json.c"
        var $129=HEAP[$s]; //@line 1747 "_json.c"
        var $130=(($129+32)&4294967295); //@line 1747 "_json.c"
        HEAP[$130]=$128; //@line 1747 "_json.c"
        var $131=HEAP[$s]; //@line 1748 "_json.c"
        var $132=(($131+32)&4294967295); //@line 1748 "_json.c"
        var $133=HEAP[$132]; //@line 1748 "_json.c"
        var $134=($133)==0; //@line 1748 "_json.c"
        if ($134) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 1748 "_json.c"
      case 22: // $bb21
        HEAP[$0]=0; //@line 1751 "_json.c"
        __label__ = 45; break; //@line 1751 "_json.c"
      case 23: // $bail
        var $135=HEAP[$s]; //@line 1754 "_json.c"
        var $136=(($135+8)&4294967295); //@line 1754 "_json.c"
        var $137=HEAP[$136]; //@line 1754 "_json.c"
        var $138=($137)!=0; //@line 1754 "_json.c"
        if ($138) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 1754 "_json.c"
      case 24: // $bb22
        var $139=HEAP[$s]; //@line 1754 "_json.c"
        var $140=(($139+8)&4294967295); //@line 1754 "_json.c"
        var $141=HEAP[$140]; //@line 1754 "_json.c"
        HEAP[$_py_tmp]=$141; //@line 1754 "_json.c"
        var $142=HEAP[$s]; //@line 1754 "_json.c"
        var $143=(($142+8)&4294967295); //@line 1754 "_json.c"
        HEAP[$143]=0; //@line 1754 "_json.c"
        var $144=HEAP[$_py_tmp]; //@line 1754 "_json.c"
        var $145=(($144)&4294967295); //@line 1754 "_json.c"
        var $146=HEAP[$145]; //@line 1754 "_json.c"
        var $147=((($146) - 1)&4294967295); //@line 1754 "_json.c"
        var $148=HEAP[$_py_tmp]; //@line 1754 "_json.c"
        var $149=(($148)&4294967295); //@line 1754 "_json.c"
        HEAP[$149]=$147; //@line 1754 "_json.c"
        var $150=HEAP[$_py_tmp]; //@line 1754 "_json.c"
        var $151=(($150)&4294967295); //@line 1754 "_json.c"
        var $152=HEAP[$151]; //@line 1754 "_json.c"
        var $153=((($152))|0)==0; //@line 1754 "_json.c"
        if ($153) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1754 "_json.c"
      case 25: // $bb23
        var $154=HEAP[$_py_tmp]; //@line 1754 "_json.c"
        var $155=(($154+4)&4294967295); //@line 1754 "_json.c"
        var $156=HEAP[$155]; //@line 1754 "_json.c"
        var $157=(($156+24)&4294967295); //@line 1754 "_json.c"
        var $158=HEAP[$157]; //@line 1754 "_json.c"
        var $159=HEAP[$_py_tmp]; //@line 1754 "_json.c"
        FUNCTION_TABLE[$158]($159); //@line 1754 "_json.c"
        __label__ = 26; break; //@line 1754 "_json.c"
      case 26: // $bb24
        var $160=HEAP[$s]; //@line 1755 "_json.c"
        var $161=(($160+12)&4294967295); //@line 1755 "_json.c"
        var $162=HEAP[$161]; //@line 1755 "_json.c"
        var $163=($162)!=0; //@line 1755 "_json.c"
        if ($163) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 1755 "_json.c"
      case 27: // $bb25
        var $164=HEAP[$s]; //@line 1755 "_json.c"
        var $165=(($164+12)&4294967295); //@line 1755 "_json.c"
        var $166=HEAP[$165]; //@line 1755 "_json.c"
        HEAP[$_py_tmp26]=$166; //@line 1755 "_json.c"
        var $167=HEAP[$s]; //@line 1755 "_json.c"
        var $168=(($167+12)&4294967295); //@line 1755 "_json.c"
        HEAP[$168]=0; //@line 1755 "_json.c"
        var $169=HEAP[$_py_tmp26]; //@line 1755 "_json.c"
        var $170=(($169)&4294967295); //@line 1755 "_json.c"
        var $171=HEAP[$170]; //@line 1755 "_json.c"
        var $172=((($171) - 1)&4294967295); //@line 1755 "_json.c"
        var $173=HEAP[$_py_tmp26]; //@line 1755 "_json.c"
        var $174=(($173)&4294967295); //@line 1755 "_json.c"
        HEAP[$174]=$172; //@line 1755 "_json.c"
        var $175=HEAP[$_py_tmp26]; //@line 1755 "_json.c"
        var $176=(($175)&4294967295); //@line 1755 "_json.c"
        var $177=HEAP[$176]; //@line 1755 "_json.c"
        var $178=((($177))|0)==0; //@line 1755 "_json.c"
        if ($178) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1755 "_json.c"
      case 28: // $bb27
        var $179=HEAP[$_py_tmp26]; //@line 1755 "_json.c"
        var $180=(($179+4)&4294967295); //@line 1755 "_json.c"
        var $181=HEAP[$180]; //@line 1755 "_json.c"
        var $182=(($181+24)&4294967295); //@line 1755 "_json.c"
        var $183=HEAP[$182]; //@line 1755 "_json.c"
        var $184=HEAP[$_py_tmp26]; //@line 1755 "_json.c"
        FUNCTION_TABLE[$183]($184); //@line 1755 "_json.c"
        __label__ = 29; break; //@line 1755 "_json.c"
      case 29: // $bb28
        var $185=HEAP[$s]; //@line 1756 "_json.c"
        var $186=(($185+16)&4294967295); //@line 1756 "_json.c"
        var $187=HEAP[$186]; //@line 1756 "_json.c"
        var $188=($187)!=0; //@line 1756 "_json.c"
        if ($188) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 1756 "_json.c"
      case 30: // $bb29
        var $189=HEAP[$s]; //@line 1756 "_json.c"
        var $190=(($189+16)&4294967295); //@line 1756 "_json.c"
        var $191=HEAP[$190]; //@line 1756 "_json.c"
        HEAP[$_py_tmp30]=$191; //@line 1756 "_json.c"
        var $192=HEAP[$s]; //@line 1756 "_json.c"
        var $193=(($192+16)&4294967295); //@line 1756 "_json.c"
        HEAP[$193]=0; //@line 1756 "_json.c"
        var $194=HEAP[$_py_tmp30]; //@line 1756 "_json.c"
        var $195=(($194)&4294967295); //@line 1756 "_json.c"
        var $196=HEAP[$195]; //@line 1756 "_json.c"
        var $197=((($196) - 1)&4294967295); //@line 1756 "_json.c"
        var $198=HEAP[$_py_tmp30]; //@line 1756 "_json.c"
        var $199=(($198)&4294967295); //@line 1756 "_json.c"
        HEAP[$199]=$197; //@line 1756 "_json.c"
        var $200=HEAP[$_py_tmp30]; //@line 1756 "_json.c"
        var $201=(($200)&4294967295); //@line 1756 "_json.c"
        var $202=HEAP[$201]; //@line 1756 "_json.c"
        var $203=((($202))|0)==0; //@line 1756 "_json.c"
        if ($203) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1756 "_json.c"
      case 31: // $bb31
        var $204=HEAP[$_py_tmp30]; //@line 1756 "_json.c"
        var $205=(($204+4)&4294967295); //@line 1756 "_json.c"
        var $206=HEAP[$205]; //@line 1756 "_json.c"
        var $207=(($206+24)&4294967295); //@line 1756 "_json.c"
        var $208=HEAP[$207]; //@line 1756 "_json.c"
        var $209=HEAP[$_py_tmp30]; //@line 1756 "_json.c"
        FUNCTION_TABLE[$208]($209); //@line 1756 "_json.c"
        __label__ = 32; break; //@line 1756 "_json.c"
      case 32: // $bb32
        var $210=HEAP[$s]; //@line 1757 "_json.c"
        var $211=(($210+20)&4294967295); //@line 1757 "_json.c"
        var $212=HEAP[$211]; //@line 1757 "_json.c"
        var $213=($212)!=0; //@line 1757 "_json.c"
        if ($213) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 1757 "_json.c"
      case 33: // $bb33
        var $214=HEAP[$s]; //@line 1757 "_json.c"
        var $215=(($214+20)&4294967295); //@line 1757 "_json.c"
        var $216=HEAP[$215]; //@line 1757 "_json.c"
        HEAP[$_py_tmp34]=$216; //@line 1757 "_json.c"
        var $217=HEAP[$s]; //@line 1757 "_json.c"
        var $218=(($217+20)&4294967295); //@line 1757 "_json.c"
        HEAP[$218]=0; //@line 1757 "_json.c"
        var $219=HEAP[$_py_tmp34]; //@line 1757 "_json.c"
        var $220=(($219)&4294967295); //@line 1757 "_json.c"
        var $221=HEAP[$220]; //@line 1757 "_json.c"
        var $222=((($221) - 1)&4294967295); //@line 1757 "_json.c"
        var $223=HEAP[$_py_tmp34]; //@line 1757 "_json.c"
        var $224=(($223)&4294967295); //@line 1757 "_json.c"
        HEAP[$224]=$222; //@line 1757 "_json.c"
        var $225=HEAP[$_py_tmp34]; //@line 1757 "_json.c"
        var $226=(($225)&4294967295); //@line 1757 "_json.c"
        var $227=HEAP[$226]; //@line 1757 "_json.c"
        var $228=((($227))|0)==0; //@line 1757 "_json.c"
        if ($228) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1757 "_json.c"
      case 34: // $bb35
        var $229=HEAP[$_py_tmp34]; //@line 1757 "_json.c"
        var $230=(($229+4)&4294967295); //@line 1757 "_json.c"
        var $231=HEAP[$230]; //@line 1757 "_json.c"
        var $232=(($231+24)&4294967295); //@line 1757 "_json.c"
        var $233=HEAP[$232]; //@line 1757 "_json.c"
        var $234=HEAP[$_py_tmp34]; //@line 1757 "_json.c"
        FUNCTION_TABLE[$233]($234); //@line 1757 "_json.c"
        __label__ = 35; break; //@line 1757 "_json.c"
      case 35: // $bb36
        var $235=HEAP[$s]; //@line 1758 "_json.c"
        var $236=(($235+24)&4294967295); //@line 1758 "_json.c"
        var $237=HEAP[$236]; //@line 1758 "_json.c"
        var $238=($237)!=0; //@line 1758 "_json.c"
        if ($238) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 1758 "_json.c"
      case 36: // $bb37
        var $239=HEAP[$s]; //@line 1758 "_json.c"
        var $240=(($239+24)&4294967295); //@line 1758 "_json.c"
        var $241=HEAP[$240]; //@line 1758 "_json.c"
        HEAP[$_py_tmp38]=$241; //@line 1758 "_json.c"
        var $242=HEAP[$s]; //@line 1758 "_json.c"
        var $243=(($242+24)&4294967295); //@line 1758 "_json.c"
        HEAP[$243]=0; //@line 1758 "_json.c"
        var $244=HEAP[$_py_tmp38]; //@line 1758 "_json.c"
        var $245=(($244)&4294967295); //@line 1758 "_json.c"
        var $246=HEAP[$245]; //@line 1758 "_json.c"
        var $247=((($246) - 1)&4294967295); //@line 1758 "_json.c"
        var $248=HEAP[$_py_tmp38]; //@line 1758 "_json.c"
        var $249=(($248)&4294967295); //@line 1758 "_json.c"
        HEAP[$249]=$247; //@line 1758 "_json.c"
        var $250=HEAP[$_py_tmp38]; //@line 1758 "_json.c"
        var $251=(($250)&4294967295); //@line 1758 "_json.c"
        var $252=HEAP[$251]; //@line 1758 "_json.c"
        var $253=((($252))|0)==0; //@line 1758 "_json.c"
        if ($253) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1758 "_json.c"
      case 37: // $bb39
        var $254=HEAP[$_py_tmp38]; //@line 1758 "_json.c"
        var $255=(($254+4)&4294967295); //@line 1758 "_json.c"
        var $256=HEAP[$255]; //@line 1758 "_json.c"
        var $257=(($256+24)&4294967295); //@line 1758 "_json.c"
        var $258=HEAP[$257]; //@line 1758 "_json.c"
        var $259=HEAP[$_py_tmp38]; //@line 1758 "_json.c"
        FUNCTION_TABLE[$258]($259); //@line 1758 "_json.c"
        __label__ = 38; break; //@line 1758 "_json.c"
      case 38: // $bb40
        var $260=HEAP[$s]; //@line 1759 "_json.c"
        var $261=(($260+28)&4294967295); //@line 1759 "_json.c"
        var $262=HEAP[$261]; //@line 1759 "_json.c"
        var $263=($262)!=0; //@line 1759 "_json.c"
        if ($263) { __label__ = 39; break; } else { __label__ = 41; break; } //@line 1759 "_json.c"
      case 39: // $bb41
        var $264=HEAP[$s]; //@line 1759 "_json.c"
        var $265=(($264+28)&4294967295); //@line 1759 "_json.c"
        var $266=HEAP[$265]; //@line 1759 "_json.c"
        HEAP[$_py_tmp42]=$266; //@line 1759 "_json.c"
        var $267=HEAP[$s]; //@line 1759 "_json.c"
        var $268=(($267+28)&4294967295); //@line 1759 "_json.c"
        HEAP[$268]=0; //@line 1759 "_json.c"
        var $269=HEAP[$_py_tmp42]; //@line 1759 "_json.c"
        var $270=(($269)&4294967295); //@line 1759 "_json.c"
        var $271=HEAP[$270]; //@line 1759 "_json.c"
        var $272=((($271) - 1)&4294967295); //@line 1759 "_json.c"
        var $273=HEAP[$_py_tmp42]; //@line 1759 "_json.c"
        var $274=(($273)&4294967295); //@line 1759 "_json.c"
        HEAP[$274]=$272; //@line 1759 "_json.c"
        var $275=HEAP[$_py_tmp42]; //@line 1759 "_json.c"
        var $276=(($275)&4294967295); //@line 1759 "_json.c"
        var $277=HEAP[$276]; //@line 1759 "_json.c"
        var $278=((($277))|0)==0; //@line 1759 "_json.c"
        if ($278) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 1759 "_json.c"
      case 40: // $bb43
        var $279=HEAP[$_py_tmp42]; //@line 1759 "_json.c"
        var $280=(($279+4)&4294967295); //@line 1759 "_json.c"
        var $281=HEAP[$280]; //@line 1759 "_json.c"
        var $282=(($281+24)&4294967295); //@line 1759 "_json.c"
        var $283=HEAP[$282]; //@line 1759 "_json.c"
        var $284=HEAP[$_py_tmp42]; //@line 1759 "_json.c"
        FUNCTION_TABLE[$283]($284); //@line 1759 "_json.c"
        __label__ = 41; break; //@line 1759 "_json.c"
      case 41: // $bb44
        var $285=HEAP[$s]; //@line 1760 "_json.c"
        var $286=(($285+32)&4294967295); //@line 1760 "_json.c"
        var $287=HEAP[$286]; //@line 1760 "_json.c"
        var $288=($287)!=0; //@line 1760 "_json.c"
        if ($288) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 1760 "_json.c"
      case 42: // $bb45
        var $289=HEAP[$s]; //@line 1760 "_json.c"
        var $290=(($289+32)&4294967295); //@line 1760 "_json.c"
        var $291=HEAP[$290]; //@line 1760 "_json.c"
        HEAP[$_py_tmp46]=$291; //@line 1760 "_json.c"
        var $292=HEAP[$s]; //@line 1760 "_json.c"
        var $293=(($292+32)&4294967295); //@line 1760 "_json.c"
        HEAP[$293]=0; //@line 1760 "_json.c"
        var $294=HEAP[$_py_tmp46]; //@line 1760 "_json.c"
        var $295=(($294)&4294967295); //@line 1760 "_json.c"
        var $296=HEAP[$295]; //@line 1760 "_json.c"
        var $297=((($296) - 1)&4294967295); //@line 1760 "_json.c"
        var $298=HEAP[$_py_tmp46]; //@line 1760 "_json.c"
        var $299=(($298)&4294967295); //@line 1760 "_json.c"
        HEAP[$299]=$297; //@line 1760 "_json.c"
        var $300=HEAP[$_py_tmp46]; //@line 1760 "_json.c"
        var $301=(($300)&4294967295); //@line 1760 "_json.c"
        var $302=HEAP[$301]; //@line 1760 "_json.c"
        var $303=((($302))|0)==0; //@line 1760 "_json.c"
        if ($303) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1760 "_json.c"
      case 43: // $bb47
        var $304=HEAP[$_py_tmp46]; //@line 1760 "_json.c"
        var $305=(($304+4)&4294967295); //@line 1760 "_json.c"
        var $306=HEAP[$305]; //@line 1760 "_json.c"
        var $307=(($306+24)&4294967295); //@line 1760 "_json.c"
        var $308=HEAP[$307]; //@line 1760 "_json.c"
        var $309=HEAP[$_py_tmp46]; //@line 1760 "_json.c"
        FUNCTION_TABLE[$308]($309); //@line 1760 "_json.c"
        __label__ = 44; break; //@line 1760 "_json.c"
      case 44: // $bb48
        HEAP[$0]=-1; //@line 1761 "_json.c"
        __label__ = 45; break; //@line 1761 "_json.c"
      case 45: // $bb49
        var $310=HEAP[$0]; //@line 1713 "_json.c"
        HEAP[$retval]=$310; //@line 1713 "_json.c"
        __label__ = 46; break; //@line 1713 "_json.c"
      case 46: // $return
        var $retval50=HEAP[$retval]; //@line 1713 "_json.c"
        STACKTOP = __stackBase__;
        return $retval50; //@line 1713 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $s=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        var $1=HEAP[$type_addr]; //@line 1814 "_json.c"
        var $2=(($1+152)&4294967295); //@line 1814 "_json.c"
        var $3=HEAP[$2]; //@line 1814 "_json.c"
        var $4=HEAP[$type_addr]; //@line 1814 "_json.c"
        var $5=FUNCTION_TABLE[$3]($4, 0); //@line 1814 "_json.c"
        var $6=$5; //@line 1814 "_json.c"
        HEAP[$s]=$6; //@line 1814 "_json.c"
        var $7=HEAP[$s]; //@line 1815 "_json.c"
        var $8=($7)!=0; //@line 1815 "_json.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1815 "_json.c"
      case 1: // $bb
        var $9=HEAP[$s]; //@line 1816 "_json.c"
        var $10=(($9+8)&4294967295); //@line 1816 "_json.c"
        HEAP[$10]=0; //@line 1816 "_json.c"
        var $11=HEAP[$s]; //@line 1817 "_json.c"
        var $12=(($11+12)&4294967295); //@line 1817 "_json.c"
        HEAP[$12]=0; //@line 1817 "_json.c"
        var $13=HEAP[$s]; //@line 1818 "_json.c"
        var $14=(($13+16)&4294967295); //@line 1818 "_json.c"
        HEAP[$14]=0; //@line 1818 "_json.c"
        var $15=HEAP[$s]; //@line 1819 "_json.c"
        var $16=(($15+20)&4294967295); //@line 1819 "_json.c"
        HEAP[$16]=0; //@line 1819 "_json.c"
        var $17=HEAP[$s]; //@line 1820 "_json.c"
        var $18=(($17+24)&4294967295); //@line 1820 "_json.c"
        HEAP[$18]=0; //@line 1820 "_json.c"
        var $19=HEAP[$s]; //@line 1821 "_json.c"
        var $20=(($19+28)&4294967295); //@line 1821 "_json.c"
        HEAP[$20]=0; //@line 1821 "_json.c"
        var $21=HEAP[$s]; //@line 1822 "_json.c"
        var $22=(($21+32)&4294967295); //@line 1822 "_json.c"
        HEAP[$22]=0; //@line 1822 "_json.c"
        var $23=HEAP[$s]; //@line 1823 "_json.c"
        var $24=(($23+36)&4294967295); //@line 1823 "_json.c"
        HEAP[$24]=0; //@line 1823 "_json.c"
        __label__ = 2; break; //@line 1823 "_json.c"
      case 2: // $bb1
        var $25=HEAP[$s]; //@line 1825 "_json.c"
        var $26=$25; //@line 1825 "_json.c"
        HEAP[$0]=$26; //@line 1825 "_json.c"
        var $27=HEAP[$0]; //@line 1825 "_json.c"
        HEAP[$retval]=$27; //@line 1825 "_json.c"
        __label__ = 3; break; //@line 1825 "_json.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 1825 "_json.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 1825 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_init($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 64; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $iftmp_146=__stackBase__+16;
        var $0=__stackBase__+20;
        var $s=__stackBase__+24;
        var $markers=__stackBase__+28;
        var $defaultfn=__stackBase__+32;
        var $encoder=__stackBase__+36;
        var $indent=__stackBase__+40;
        var $key_separator=__stackBase__+44;
        var $item_separator=__stackBase__+48;
        var $sort_keys=__stackBase__+52;
        var $skipkeys=__stackBase__+56;
        var $allow_nan=__stackBase__+60;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        var $1=HEAP[$self_addr]; //@line 1838 "_json.c"
        var $2=(($1+4)&4294967295); //@line 1838 "_json.c"
        var $3=HEAP[$2]; //@line 1838 "_json.c"
        var $4=($3)!=(_PyEncoderType); //@line 1838 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1838 "_json.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1838 "_json.c"
        var $6=(($5+4)&4294967295); //@line 1838 "_json.c"
        var $7=HEAP[$6]; //@line 1838 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyEncoderType); //@line 1838 "_json.c"
        var $9=((($8))|0)==0; //@line 1838 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1838 "_json.c"
      case 2: // $bb1
        ___assert_fail(((__str47)&4294967295), ((__str29)&4294967295), 1838, ((___PRETTY_FUNCTION___10949)&4294967295)); //@line 1838 "_json.c"
        throw "Reached an unreachable! Original .ll line: 8647"; //@line 1838 "_json.c"
      case 3: // $bb2
        var $10=HEAP[$self_addr]; //@line 1839 "_json.c"
        var $11=$10; //@line 1839 "_json.c"
        HEAP[$s]=$11; //@line 1839 "_json.c"
        var $12=HEAP[$args_addr]; //@line 1841 "_json.c"
        var $13=HEAP[$kwds_addr]; //@line 1841 "_json.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, ((__str48)&4294967295), ((_kwlist_10938)&4294967295), $markers, $defaultfn, $encoder, $indent, $key_separator, $item_separator, $sort_keys, $skipkeys, $allow_nan); //@line 1841 "_json.c"
        var $15=((($14))|0)==0; //@line 1841 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1841 "_json.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 1844 "_json.c"
        __label__ = 10; break; //@line 1844 "_json.c"
      case 5: // $bb4
        var $16=HEAP[$markers]; //@line 1846 "_json.c"
        var $17=HEAP[$s]; //@line 1846 "_json.c"
        var $18=(($17+8)&4294967295); //@line 1846 "_json.c"
        HEAP[$18]=$16; //@line 1846 "_json.c"
        var $19=HEAP[$defaultfn]; //@line 1847 "_json.c"
        var $20=HEAP[$s]; //@line 1847 "_json.c"
        var $21=(($20+12)&4294967295); //@line 1847 "_json.c"
        HEAP[$21]=$19; //@line 1847 "_json.c"
        var $22=HEAP[$encoder]; //@line 1848 "_json.c"
        var $23=HEAP[$s]; //@line 1848 "_json.c"
        var $24=(($23+16)&4294967295); //@line 1848 "_json.c"
        HEAP[$24]=$22; //@line 1848 "_json.c"
        var $25=HEAP[$indent]; //@line 1849 "_json.c"
        var $26=HEAP[$s]; //@line 1849 "_json.c"
        var $27=(($26+20)&4294967295); //@line 1849 "_json.c"
        HEAP[$27]=$25; //@line 1849 "_json.c"
        var $28=HEAP[$key_separator]; //@line 1850 "_json.c"
        var $29=HEAP[$s]; //@line 1850 "_json.c"
        var $30=(($29+24)&4294967295); //@line 1850 "_json.c"
        HEAP[$30]=$28; //@line 1850 "_json.c"
        var $31=HEAP[$item_separator]; //@line 1851 "_json.c"
        var $32=HEAP[$s]; //@line 1851 "_json.c"
        var $33=(($32+28)&4294967295); //@line 1851 "_json.c"
        HEAP[$33]=$31; //@line 1851 "_json.c"
        var $34=HEAP[$sort_keys]; //@line 1852 "_json.c"
        var $35=HEAP[$s]; //@line 1852 "_json.c"
        var $36=(($35+32)&4294967295); //@line 1852 "_json.c"
        HEAP[$36]=$34; //@line 1852 "_json.c"
        var $37=HEAP[$skipkeys]; //@line 1853 "_json.c"
        var $38=HEAP[$s]; //@line 1853 "_json.c"
        var $39=(($38+36)&4294967295); //@line 1853 "_json.c"
        HEAP[$39]=$37; //@line 1853 "_json.c"
        var $40=HEAP[$s]; //@line 1854 "_json.c"
        var $41=(($40+16)&4294967295); //@line 1854 "_json.c"
        var $42=HEAP[$41]; //@line 1854 "_json.c"
        var $43=(($42+4)&4294967295); //@line 1854 "_json.c"
        var $44=HEAP[$43]; //@line 1854 "_json.c"
        var $45=($44)!=(_PyCFunction_Type); //@line 1854 "_json.c"
        if ($45) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1854 "_json.c"
      case 6: // $bb5
        var $46=HEAP[$s]; //@line 1854 "_json.c"
        var $47=(($46+16)&4294967295); //@line 1854 "_json.c"
        var $48=HEAP[$47]; //@line 1854 "_json.c"
        var $49=_PyCFunction_GetFunction($48); //@line 1854 "_json.c"
        var $50=($49)!=((FUNCTION_TABLE_OFFSET + 6)); //@line 1854 "_json.c"
        if ($50) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1854 "_json.c"
      case 7: // $bb6
        HEAP[$iftmp_146]=1; //@line 1854 "_json.c"
        __label__ = 9; break; //@line 1854 "_json.c"
      case 8: // $bb7
        HEAP[$iftmp_146]=0; //@line 1854 "_json.c"
        __label__ = 9; break; //@line 1854 "_json.c"
      case 9: // $bb8
        var $51=HEAP[$s]; //@line 1854 "_json.c"
        var $52=(($51+40)&4294967295); //@line 1854 "_json.c"
        var $53=HEAP[$iftmp_146]; //@line 1854 "_json.c"
        HEAP[$52]=$53; //@line 1854 "_json.c"
        var $54=HEAP[$allow_nan]; //@line 1855 "_json.c"
        var $55=_PyObject_IsTrue($54); //@line 1855 "_json.c"
        var $56=HEAP[$s]; //@line 1855 "_json.c"
        var $57=(($56+44)&4294967295); //@line 1855 "_json.c"
        HEAP[$57]=$55; //@line 1855 "_json.c"
        var $58=HEAP[$s]; //@line 1857 "_json.c"
        var $59=(($58+8)&4294967295); //@line 1857 "_json.c"
        var $60=HEAP[$59]; //@line 1857 "_json.c"
        var $61=(($60)&4294967295); //@line 1857 "_json.c"
        var $62=HEAP[$61]; //@line 1857 "_json.c"
        var $63=((($62) + 1)&4294967295); //@line 1857 "_json.c"
        var $64=(($60)&4294967295); //@line 1857 "_json.c"
        HEAP[$64]=$63; //@line 1857 "_json.c"
        var $65=HEAP[$s]; //@line 1858 "_json.c"
        var $66=(($65+12)&4294967295); //@line 1858 "_json.c"
        var $67=HEAP[$66]; //@line 1858 "_json.c"
        var $68=(($67)&4294967295); //@line 1858 "_json.c"
        var $69=HEAP[$68]; //@line 1858 "_json.c"
        var $70=((($69) + 1)&4294967295); //@line 1858 "_json.c"
        var $71=(($67)&4294967295); //@line 1858 "_json.c"
        HEAP[$71]=$70; //@line 1858 "_json.c"
        var $72=HEAP[$s]; //@line 1859 "_json.c"
        var $73=(($72+16)&4294967295); //@line 1859 "_json.c"
        var $74=HEAP[$73]; //@line 1859 "_json.c"
        var $75=(($74)&4294967295); //@line 1859 "_json.c"
        var $76=HEAP[$75]; //@line 1859 "_json.c"
        var $77=((($76) + 1)&4294967295); //@line 1859 "_json.c"
        var $78=(($74)&4294967295); //@line 1859 "_json.c"
        HEAP[$78]=$77; //@line 1859 "_json.c"
        var $79=HEAP[$s]; //@line 1860 "_json.c"
        var $80=(($79+20)&4294967295); //@line 1860 "_json.c"
        var $81=HEAP[$80]; //@line 1860 "_json.c"
        var $82=(($81)&4294967295); //@line 1860 "_json.c"
        var $83=HEAP[$82]; //@line 1860 "_json.c"
        var $84=((($83) + 1)&4294967295); //@line 1860 "_json.c"
        var $85=(($81)&4294967295); //@line 1860 "_json.c"
        HEAP[$85]=$84; //@line 1860 "_json.c"
        var $86=HEAP[$s]; //@line 1861 "_json.c"
        var $87=(($86+24)&4294967295); //@line 1861 "_json.c"
        var $88=HEAP[$87]; //@line 1861 "_json.c"
        var $89=(($88)&4294967295); //@line 1861 "_json.c"
        var $90=HEAP[$89]; //@line 1861 "_json.c"
        var $91=((($90) + 1)&4294967295); //@line 1861 "_json.c"
        var $92=(($88)&4294967295); //@line 1861 "_json.c"
        HEAP[$92]=$91; //@line 1861 "_json.c"
        var $93=HEAP[$s]; //@line 1862 "_json.c"
        var $94=(($93+28)&4294967295); //@line 1862 "_json.c"
        var $95=HEAP[$94]; //@line 1862 "_json.c"
        var $96=(($95)&4294967295); //@line 1862 "_json.c"
        var $97=HEAP[$96]; //@line 1862 "_json.c"
        var $98=((($97) + 1)&4294967295); //@line 1862 "_json.c"
        var $99=(($95)&4294967295); //@line 1862 "_json.c"
        HEAP[$99]=$98; //@line 1862 "_json.c"
        var $100=HEAP[$s]; //@line 1863 "_json.c"
        var $101=(($100+32)&4294967295); //@line 1863 "_json.c"
        var $102=HEAP[$101]; //@line 1863 "_json.c"
        var $103=(($102)&4294967295); //@line 1863 "_json.c"
        var $104=HEAP[$103]; //@line 1863 "_json.c"
        var $105=((($104) + 1)&4294967295); //@line 1863 "_json.c"
        var $106=(($102)&4294967295); //@line 1863 "_json.c"
        HEAP[$106]=$105; //@line 1863 "_json.c"
        var $107=HEAP[$s]; //@line 1864 "_json.c"
        var $108=(($107+36)&4294967295); //@line 1864 "_json.c"
        var $109=HEAP[$108]; //@line 1864 "_json.c"
        var $110=(($109)&4294967295); //@line 1864 "_json.c"
        var $111=HEAP[$110]; //@line 1864 "_json.c"
        var $112=((($111) + 1)&4294967295); //@line 1864 "_json.c"
        var $113=(($109)&4294967295); //@line 1864 "_json.c"
        HEAP[$113]=$112; //@line 1864 "_json.c"
        HEAP[$0]=0; //@line 1865 "_json.c"
        __label__ = 10; break; //@line 1865 "_json.c"
      case 10: // $bb9
        var $114=HEAP[$0]; //@line 1844 "_json.c"
        HEAP[$retval]=$114; //@line 1844 "_json.c"
        __label__ = 11; break; //@line 1844 "_json.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 1844 "_json.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1844 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_call($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $obj=__stackBase__+20;
        var $rval=__stackBase__+24;
        var $indent_level=__stackBase__+28;
        var $s=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        var $1=HEAP[$self_addr]; //@line 1877 "_json.c"
        var $2=(($1+4)&4294967295); //@line 1877 "_json.c"
        var $3=HEAP[$2]; //@line 1877 "_json.c"
        var $4=($3)!=(_PyEncoderType); //@line 1877 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1877 "_json.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1877 "_json.c"
        var $6=(($5+4)&4294967295); //@line 1877 "_json.c"
        var $7=HEAP[$6]; //@line 1877 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyEncoderType); //@line 1877 "_json.c"
        var $9=((($8))|0)==0; //@line 1877 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1877 "_json.c"
      case 2: // $bb1
        ___assert_fail(((__str47)&4294967295), ((__str29)&4294967295), 1877, ((___PRETTY_FUNCTION___11015)&4294967295)); //@line 1877 "_json.c"
        throw "Reached an unreachable! Original .ll line: 8849"; //@line 1877 "_json.c"
      case 3: // $bb2
        var $10=HEAP[$self_addr]; //@line 1878 "_json.c"
        var $11=$10; //@line 1878 "_json.c"
        HEAP[$s]=$11; //@line 1878 "_json.c"
        var $12=HEAP[$args_addr]; //@line 1879 "_json.c"
        var $13=HEAP[$kwds_addr]; //@line 1879 "_json.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, ((__str50)&4294967295), ((_kwlist_11010)&4294967295), $obj, (FUNCTION_TABLE_OFFSET + 4), $indent_level); //@line 1879 "_json.c"
        var $15=((($14))|0)==0; //@line 1879 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1879 "_json.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 1881 "_json.c"
        __label__ = 12; break; //@line 1881 "_json.c"
      case 5: // $bb4
        var $16=_PyList_New(0); //@line 1882 "_json.c"
        HEAP[$rval]=$16; //@line 1882 "_json.c"
        var $17=HEAP[$rval]; //@line 1883 "_json.c"
        var $18=($17)==0; //@line 1883 "_json.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1883 "_json.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 1884 "_json.c"
        __label__ = 12; break; //@line 1884 "_json.c"
      case 7: // $bb6
        var $19=HEAP[$indent_level]; //@line 1885 "_json.c"
        var $20=HEAP[$obj]; //@line 1885 "_json.c"
        var $21=HEAP[$s]; //@line 1885 "_json.c"
        var $22=HEAP[$rval]; //@line 1885 "_json.c"
        var $23=_encoder_listencode_obj($21, $22, $20, $19); //@line 1885 "_json.c"
        var $24=((($23))|0)!=0; //@line 1885 "_json.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1885 "_json.c"
      case 8: // $bb7
        var $25=HEAP[$rval]; //@line 1886 "_json.c"
        var $26=(($25)&4294967295); //@line 1886 "_json.c"
        var $27=HEAP[$26]; //@line 1886 "_json.c"
        var $28=((($27) - 1)&4294967295); //@line 1886 "_json.c"
        var $29=HEAP[$rval]; //@line 1886 "_json.c"
        var $30=(($29)&4294967295); //@line 1886 "_json.c"
        HEAP[$30]=$28; //@line 1886 "_json.c"
        var $31=HEAP[$rval]; //@line 1886 "_json.c"
        var $32=(($31)&4294967295); //@line 1886 "_json.c"
        var $33=HEAP[$32]; //@line 1886 "_json.c"
        var $34=((($33))|0)==0; //@line 1886 "_json.c"
        if ($34) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1886 "_json.c"
      case 9: // $bb8
        var $35=HEAP[$rval]; //@line 1886 "_json.c"
        var $36=(($35+4)&4294967295); //@line 1886 "_json.c"
        var $37=HEAP[$36]; //@line 1886 "_json.c"
        var $38=(($37+24)&4294967295); //@line 1886 "_json.c"
        var $39=HEAP[$38]; //@line 1886 "_json.c"
        var $40=HEAP[$rval]; //@line 1886 "_json.c"
        FUNCTION_TABLE[$39]($40); //@line 1886 "_json.c"
        __label__ = 10; break; //@line 1886 "_json.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 1887 "_json.c"
        __label__ = 12; break; //@line 1887 "_json.c"
      case 11: // $bb10
        var $41=HEAP[$rval]; //@line 1889 "_json.c"
        HEAP[$0]=$41; //@line 1889 "_json.c"
        __label__ = 12; break; //@line 1889 "_json.c"
      case 12: // $bb11
        var $42=HEAP[$0]; //@line 1881 "_json.c"
        HEAP[$retval]=$42; //@line 1881 "_json.c"
        __label__ = 13; break; //@line 1881 "_json.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 1881 "_json.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 1881 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __encoded_const($obj) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $obj_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$obj_addr]=$obj;
        var $1=HEAP[$obj_addr]; //@line 1896 "_json.c"
        var $2=($1)==(__Py_NoneStruct); //@line 1896 "_json.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1896 "_json.c"
      case 1: // $bb
        var $3=HEAP[_s_null_11046]; //@line 1898 "_json.c"
        var $4=($3)==0; //@line 1898 "_json.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1898 "_json.c"
      case 2: // $bb1
        var $5=_PyString_InternFromString(((__str53)&4294967295)); //@line 1899 "_json.c"
        HEAP[_s_null_11046]=$5; //@line 1899 "_json.c"
        __label__ = 3; break; //@line 1899 "_json.c"
      case 3: // $bb2
        var $6=HEAP[_s_null_11046]; //@line 1901 "_json.c"
        var $7=(($6)&4294967295); //@line 1901 "_json.c"
        var $8=HEAP[$7]; //@line 1901 "_json.c"
        var $9=((($8) + 1)&4294967295); //@line 1901 "_json.c"
        var $10=(($6)&4294967295); //@line 1901 "_json.c"
        HEAP[$10]=$9; //@line 1901 "_json.c"
        var $11=HEAP[_s_null_11046]; //@line 1902 "_json.c"
        HEAP[$0]=$11; //@line 1902 "_json.c"
        __label__ = 13; break; //@line 1902 "_json.c"
      case 4: // $bb3
        var $12=HEAP[$obj_addr]; //@line 1904 "_json.c"
        var $13=($12)==(__Py_TrueStruct); //@line 1904 "_json.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1904 "_json.c"
      case 5: // $bb4
        var $14=HEAP[_s_true_11047]; //@line 1906 "_json.c"
        var $15=($14)==0; //@line 1906 "_json.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1906 "_json.c"
      case 6: // $bb5
        var $16=_PyString_InternFromString(((__str54)&4294967295)); //@line 1907 "_json.c"
        HEAP[_s_true_11047]=$16; //@line 1907 "_json.c"
        __label__ = 7; break; //@line 1907 "_json.c"
      case 7: // $bb6
        var $17=HEAP[_s_true_11047]; //@line 1909 "_json.c"
        var $18=(($17)&4294967295); //@line 1909 "_json.c"
        var $19=HEAP[$18]; //@line 1909 "_json.c"
        var $20=((($19) + 1)&4294967295); //@line 1909 "_json.c"
        var $21=(($17)&4294967295); //@line 1909 "_json.c"
        HEAP[$21]=$20; //@line 1909 "_json.c"
        var $22=HEAP[_s_true_11047]; //@line 1910 "_json.c"
        HEAP[$0]=$22; //@line 1910 "_json.c"
        __label__ = 13; break; //@line 1910 "_json.c"
      case 8: // $bb7
        var $23=HEAP[$obj_addr]; //@line 1912 "_json.c"
        var $24=($23)==(__Py_ZeroStruct); //@line 1912 "_json.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1912 "_json.c"
      case 9: // $bb8
        var $25=HEAP[_s_false_11048]; //@line 1914 "_json.c"
        var $26=($25)==0; //@line 1914 "_json.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1914 "_json.c"
      case 10: // $bb9
        var $27=_PyString_InternFromString(((__str55)&4294967295)); //@line 1915 "_json.c"
        HEAP[_s_false_11048]=$27; //@line 1915 "_json.c"
        __label__ = 11; break; //@line 1915 "_json.c"
      case 11: // $bb10
        var $28=HEAP[_s_false_11048]; //@line 1917 "_json.c"
        var $29=(($28)&4294967295); //@line 1917 "_json.c"
        var $30=HEAP[$29]; //@line 1917 "_json.c"
        var $31=((($30) + 1)&4294967295); //@line 1917 "_json.c"
        var $32=(($28)&4294967295); //@line 1917 "_json.c"
        HEAP[$32]=$31; //@line 1917 "_json.c"
        var $33=HEAP[_s_false_11048]; //@line 1918 "_json.c"
        HEAP[$0]=$33; //@line 1918 "_json.c"
        __label__ = 13; break; //@line 1918 "_json.c"
      case 12: // $bb11
        var $34=HEAP[_PyExc_ValueError]; //@line 1921 "_json.c"
        _PyErr_SetString($34, ((__str56)&4294967295)); //@line 1921 "_json.c"
        HEAP[$0]=0; //@line 1922 "_json.c"
        __label__ = 13; break; //@line 1922 "_json.c"
      case 13: // $bb12
        var $35=HEAP[$0]; //@line 1902 "_json.c"
        HEAP[$retval]=$35; //@line 1902 "_json.c"
        __label__ = 14; break; //@line 1902 "_json.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 1902 "_json.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 1902 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_encode_float($s, $obj) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $obj_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$obj_addr]=$obj;
        var $1=HEAP[$obj_addr]; //@line 1930 "_json.c"
        var $2=$1; //@line 1930 "_json.c"
        var $3=(($2+8)&4294967295); //@line 1930 "_json.c"
        var $4=HEAP[$3]; //@line 1930 "_json.c"
        HEAP[$i]=$4; //@line 1930 "_json.c"
        var $5=HEAP[$i]; //@line 1931 "_json.c"
        var $6=___finite($5); //@line 1931 "_json.c"
        var $7=((($6))|0)==0; //@line 1931 "_json.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 8; break; } //@line 1931 "_json.c"
      case 1: // $bb
        var $8=HEAP[$s_addr]; //@line 1932 "_json.c"
        var $9=(($8+44)&4294967295); //@line 1932 "_json.c"
        var $10=HEAP[$9]; //@line 1932 "_json.c"
        var $11=((($10))|0)==0; //@line 1932 "_json.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1932 "_json.c"
      case 2: // $bb1
        var $12=HEAP[_PyExc_ValueError]; //@line 1933 "_json.c"
        _PyErr_SetString($12, ((__str57)&4294967295)); //@line 1933 "_json.c"
        HEAP[$0]=0; //@line 1934 "_json.c"
        __label__ = 9; break; //@line 1934 "_json.c"
      case 3: // $bb2
        var $13=HEAP[$i]; //@line 1936 "_json.c"
        var $14=($13) > 0; //@line 1936 "_json.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1936 "_json.c"
      case 4: // $bb3
        var $15=_PyString_FromString(((__str37)&4294967295)); //@line 1937 "_json.c"
        HEAP[$0]=$15; //@line 1937 "_json.c"
        __label__ = 9; break; //@line 1937 "_json.c"
      case 5: // $bb4
        var $16=HEAP[$i]; //@line 1939 "_json.c"
        var $17=($16) < 0; //@line 1939 "_json.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1939 "_json.c"
      case 6: // $bb5
        var $18=_PyString_FromString(((__str38)&4294967295)); //@line 1940 "_json.c"
        HEAP[$0]=$18; //@line 1940 "_json.c"
        __label__ = 9; break; //@line 1940 "_json.c"
      case 7: // $bb6
        var $19=_PyString_FromString(((__str36)&4294967295)); //@line 1943 "_json.c"
        HEAP[$0]=$19; //@line 1943 "_json.c"
        __label__ = 9; break; //@line 1943 "_json.c"
      case 8: // $bb7
        var $20=HEAP[$obj_addr]; //@line 1947 "_json.c"
        var $21=_PyObject_Repr($20); //@line 1947 "_json.c"
        HEAP[$0]=$21; //@line 1947 "_json.c"
        __label__ = 9; break; //@line 1947 "_json.c"
      case 9: // $bb8
        var $22=HEAP[$0]; //@line 1934 "_json.c"
        HEAP[$retval]=$22; //@line 1934 "_json.c"
        __label__ = 10; break; //@line 1934 "_json.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1934 "_json.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1934 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_encode_string($s, $obj) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $obj_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$obj_addr]=$obj;
        var $1=HEAP[$s_addr]; //@line 1954 "_json.c"
        var $2=(($1+40)&4294967295); //@line 1954 "_json.c"
        var $3=HEAP[$2]; //@line 1954 "_json.c"
        var $4=((($3))|0)!=0; //@line 1954 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1954 "_json.c"
      case 1: // $bb
        var $5=HEAP[$obj_addr]; //@line 1955 "_json.c"
        var $6=_py_encode_basestring_ascii(0, $5); //@line 1955 "_json.c"
        HEAP[$0]=$6; //@line 1955 "_json.c"
        __label__ = 3; break; //@line 1955 "_json.c"
      case 2: // $bb1
        var $7=HEAP[$s_addr]; //@line 1957 "_json.c"
        var $8=(($7+16)&4294967295); //@line 1957 "_json.c"
        var $9=HEAP[$8]; //@line 1957 "_json.c"
        var $10=HEAP[$obj_addr]; //@line 1957 "_json.c"
        var $11=_PyObject_CallFunctionObjArgs($9, $10, 0); //@line 1957 "_json.c"
        HEAP[$0]=$11; //@line 1957 "_json.c"
        __label__ = 3; break; //@line 1957 "_json.c"
      case 3: // $bb2
        var $12=HEAP[$0]; //@line 1955 "_json.c"
        HEAP[$retval]=$12; //@line 1955 "_json.c"
        __label__ = 4; break; //@line 1955 "_json.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1955 "_json.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1955 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __steal_list_append($lst, $stolen) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lst_addr=__stackBase__;
        var $stolen_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $rval=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$lst_addr]=$lst;
        HEAP[$stolen_addr]=$stolen;
        var $1=HEAP[$lst_addr]; //@line 1964 "_json.c"
        var $2=HEAP[$stolen_addr]; //@line 1964 "_json.c"
        var $3=_PyList_Append($1, $2); //@line 1964 "_json.c"
        HEAP[$rval]=$3; //@line 1964 "_json.c"
        var $4=HEAP[$stolen_addr]; //@line 1965 "_json.c"
        var $5=(($4)&4294967295); //@line 1965 "_json.c"
        var $6=HEAP[$5]; //@line 1965 "_json.c"
        var $7=((($6) - 1)&4294967295); //@line 1965 "_json.c"
        var $8=HEAP[$stolen_addr]; //@line 1965 "_json.c"
        var $9=(($8)&4294967295); //@line 1965 "_json.c"
        HEAP[$9]=$7; //@line 1965 "_json.c"
        var $10=HEAP[$stolen_addr]; //@line 1965 "_json.c"
        var $11=(($10)&4294967295); //@line 1965 "_json.c"
        var $12=HEAP[$11]; //@line 1965 "_json.c"
        var $13=((($12))|0)==0; //@line 1965 "_json.c"
        if ($13) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1965 "_json.c"
      case 1: // $bb
        var $14=HEAP[$stolen_addr]; //@line 1965 "_json.c"
        var $15=(($14+4)&4294967295); //@line 1965 "_json.c"
        var $16=HEAP[$15]; //@line 1965 "_json.c"
        var $17=(($16+24)&4294967295); //@line 1965 "_json.c"
        var $18=HEAP[$17]; //@line 1965 "_json.c"
        var $19=HEAP[$stolen_addr]; //@line 1965 "_json.c"
        FUNCTION_TABLE[$18]($19); //@line 1965 "_json.c"
        __label__ = 2; break; //@line 1965 "_json.c"
      case 2: // $bb1
        var $20=HEAP[$rval]; //@line 1966 "_json.c"
        HEAP[$0]=$20; //@line 1966 "_json.c"
        var $21=HEAP[$0]; //@line 1966 "_json.c"
        HEAP[$retval]=$21; //@line 1966 "_json.c"
        __label__ = 3; break; //@line 1966 "_json.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 1966 "_json.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 1966 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_listencode_obj($s, $rval, $obj, $indent_level) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $rval_addr=__stackBase__+4;
        var $obj_addr=__stackBase__+8;
        var $indent_level_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $newobj=__stackBase__+24;
        var $rv=__stackBase__+28;
        var $cstr=__stackBase__+32;
        var $encoded=__stackBase__+36;
        var $encoded13=__stackBase__+40;
        var $encoded19=__stackBase__+44;
        var $ident=__stackBase__+48;
        var $has_key=__stackBase__+52;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$rval_addr]=$rval;
        HEAP[$obj_addr]=$obj;
        HEAP[$indent_level_addr]=$indent_level;
        var $1=HEAP[$obj_addr]; //@line 1976 "_json.c"
        var $2=($1)==(__Py_NoneStruct); //@line 1976 "_json.c"
        if ($2) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1976 "_json.c"
      case 1: // $bb
        var $3=HEAP[$obj_addr]; //@line 1976 "_json.c"
        var $4=($3)==(__Py_TrueStruct); //@line 1976 "_json.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1976 "_json.c"
      case 2: // $bb1
        var $5=HEAP[$obj_addr]; //@line 1976 "_json.c"
        var $6=($5)==(__Py_ZeroStruct); //@line 1976 "_json.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1976 "_json.c"
      case 3: // $bb2
        var $7=HEAP[$obj_addr]; //@line 1977 "_json.c"
        var $8=__encoded_const($7); //@line 1977 "_json.c"
        HEAP[$cstr]=$8; //@line 1977 "_json.c"
        var $9=HEAP[$cstr]; //@line 1978 "_json.c"
        var $10=($9)==0; //@line 1978 "_json.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1978 "_json.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 1979 "_json.c"
        __label__ = 70; break; //@line 1979 "_json.c"
      case 5: // $bb4
        var $11=HEAP[$rval_addr]; //@line 1980 "_json.c"
        var $12=HEAP[$cstr]; //@line 1980 "_json.c"
        var $13=__steal_list_append($11, $12); //@line 1980 "_json.c"
        HEAP[$0]=$13; //@line 1980 "_json.c"
        __label__ = 70; break; //@line 1980 "_json.c"
      case 6: // $bb5
        var $14=HEAP[$obj_addr]; //@line 1982 "_json.c"
        var $15=(($14+4)&4294967295); //@line 1982 "_json.c"
        var $16=HEAP[$15]; //@line 1982 "_json.c"
        var $17=(($16+84)&4294967295); //@line 1982 "_json.c"
        var $18=HEAP[$17]; //@line 1982 "_json.c"
        var $19=($18) & 134217728; //@line 1982 "_json.c"
        var $20=((($19))|0)!=0; //@line 1982 "_json.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1982 "_json.c"
      case 7: // $bb6
        var $21=HEAP[$obj_addr]; //@line 1982 "_json.c"
        var $22=(($21+4)&4294967295); //@line 1982 "_json.c"
        var $23=HEAP[$22]; //@line 1982 "_json.c"
        var $24=(($23+84)&4294967295); //@line 1982 "_json.c"
        var $25=HEAP[$24]; //@line 1982 "_json.c"
        var $26=($25) & 268435456; //@line 1982 "_json.c"
        var $27=((($26))|0)!=0; //@line 1982 "_json.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1982 "_json.c"
      case 8: // $bb7
        var $28=HEAP[$s_addr]; //@line 1984 "_json.c"
        var $29=HEAP[$obj_addr]; //@line 1984 "_json.c"
        var $30=_encoder_encode_string($28, $29); //@line 1984 "_json.c"
        HEAP[$encoded]=$30; //@line 1984 "_json.c"
        var $31=HEAP[$encoded]; //@line 1985 "_json.c"
        var $32=($31)==0; //@line 1985 "_json.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1985 "_json.c"
      case 9: // $bb8
        HEAP[$0]=-1; //@line 1986 "_json.c"
        __label__ = 70; break; //@line 1986 "_json.c"
      case 10: // $bb9
        var $33=HEAP[$rval_addr]; //@line 1987 "_json.c"
        var $34=HEAP[$encoded]; //@line 1987 "_json.c"
        var $35=__steal_list_append($33, $34); //@line 1987 "_json.c"
        HEAP[$0]=$35; //@line 1987 "_json.c"
        __label__ = 70; break; //@line 1987 "_json.c"
      case 11: // $bb10
        var $36=HEAP[$obj_addr]; //@line 1989 "_json.c"
        var $37=(($36+4)&4294967295); //@line 1989 "_json.c"
        var $38=HEAP[$37]; //@line 1989 "_json.c"
        var $39=(($38+84)&4294967295); //@line 1989 "_json.c"
        var $40=HEAP[$39]; //@line 1989 "_json.c"
        var $41=($40) & 8388608; //@line 1989 "_json.c"
        var $42=((($41))|0)!=0; //@line 1989 "_json.c"
        if ($42) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 1989 "_json.c"
      case 12: // $bb11
        var $43=HEAP[$obj_addr]; //@line 1989 "_json.c"
        var $44=(($43+4)&4294967295); //@line 1989 "_json.c"
        var $45=HEAP[$44]; //@line 1989 "_json.c"
        var $46=(($45+84)&4294967295); //@line 1989 "_json.c"
        var $47=HEAP[$46]; //@line 1989 "_json.c"
        var $48=($47) & 16777216; //@line 1989 "_json.c"
        var $49=((($48))|0)!=0; //@line 1989 "_json.c"
        if ($49) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 1989 "_json.c"
      case 13: // $bb12
        var $50=HEAP[$obj_addr]; //@line 1990 "_json.c"
        var $51=_PyObject_Str($50); //@line 1990 "_json.c"
        HEAP[$encoded13]=$51; //@line 1990 "_json.c"
        var $52=HEAP[$encoded13]; //@line 1991 "_json.c"
        var $53=($52)==0; //@line 1991 "_json.c"
        if ($53) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1991 "_json.c"
      case 14: // $bb14
        HEAP[$0]=-1; //@line 1992 "_json.c"
        __label__ = 70; break; //@line 1992 "_json.c"
      case 15: // $bb15
        var $54=HEAP[$rval_addr]; //@line 1993 "_json.c"
        var $55=HEAP[$encoded13]; //@line 1993 "_json.c"
        var $56=__steal_list_append($54, $55); //@line 1993 "_json.c"
        HEAP[$0]=$56; //@line 1993 "_json.c"
        __label__ = 70; break; //@line 1993 "_json.c"
      case 16: // $bb16
        var $57=HEAP[$obj_addr]; //@line 1995 "_json.c"
        var $58=(($57+4)&4294967295); //@line 1995 "_json.c"
        var $59=HEAP[$58]; //@line 1995 "_json.c"
        var $60=($59)==(_PyFloat_Type); //@line 1995 "_json.c"
        if ($60) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 1995 "_json.c"
      case 17: // $bb17
        var $61=HEAP[$obj_addr]; //@line 1995 "_json.c"
        var $62=(($61+4)&4294967295); //@line 1995 "_json.c"
        var $63=HEAP[$62]; //@line 1995 "_json.c"
        var $64=_PyType_IsSubtype($63, _PyFloat_Type); //@line 1995 "_json.c"
        var $65=((($64))|0)!=0; //@line 1995 "_json.c"
        if ($65) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 1995 "_json.c"
      case 18: // $bb18
        var $66=HEAP[$s_addr]; //@line 1996 "_json.c"
        var $67=HEAP[$obj_addr]; //@line 1996 "_json.c"
        var $68=_encoder_encode_float($66, $67); //@line 1996 "_json.c"
        HEAP[$encoded19]=$68; //@line 1996 "_json.c"
        var $69=HEAP[$encoded19]; //@line 1997 "_json.c"
        var $70=($69)==0; //@line 1997 "_json.c"
        if ($70) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1997 "_json.c"
      case 19: // $bb20
        HEAP[$0]=-1; //@line 1998 "_json.c"
        __label__ = 70; break; //@line 1998 "_json.c"
      case 20: // $bb21
        var $71=HEAP[$rval_addr]; //@line 1999 "_json.c"
        var $72=HEAP[$encoded19]; //@line 1999 "_json.c"
        var $73=__steal_list_append($71, $72); //@line 1999 "_json.c"
        HEAP[$0]=$73; //@line 1999 "_json.c"
        __label__ = 70; break; //@line 1999 "_json.c"
      case 21: // $bb22
        var $74=HEAP[$obj_addr]; //@line 2001 "_json.c"
        var $75=(($74+4)&4294967295); //@line 2001 "_json.c"
        var $76=HEAP[$75]; //@line 2001 "_json.c"
        var $77=(($76+84)&4294967295); //@line 2001 "_json.c"
        var $78=HEAP[$77]; //@line 2001 "_json.c"
        var $79=($78) & 33554432; //@line 2001 "_json.c"
        var $80=((($79))|0)!=0; //@line 2001 "_json.c"
        if ($80) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 2001 "_json.c"
      case 22: // $bb23
        var $81=HEAP[$obj_addr]; //@line 2001 "_json.c"
        var $82=(($81+4)&4294967295); //@line 2001 "_json.c"
        var $83=HEAP[$82]; //@line 2001 "_json.c"
        var $84=(($83+84)&4294967295); //@line 2001 "_json.c"
        var $85=HEAP[$84]; //@line 2001 "_json.c"
        var $86=($85) & 67108864; //@line 2001 "_json.c"
        var $87=((($86))|0)!=0; //@line 2001 "_json.c"
        if ($87) { __label__ = 23; break; } else { __label__ = 27; break; } //@line 2001 "_json.c"
      case 23: // $bb24
        var $88=HEAP[__PyThreadState_Current]; //@line 2002 "_json.c"
        var $89=(($88+12)&4294967295); //@line 2002 "_json.c"
        var $90=HEAP[$89]; //@line 2002 "_json.c"
        var $91=((($90) + 1)&4294967295); //@line 2002 "_json.c"
        var $92=(($88+12)&4294967295); //@line 2002 "_json.c"
        HEAP[$92]=$91; //@line 2002 "_json.c"
        var $93=(($88+12)&4294967295); //@line 2002 "_json.c"
        var $94=HEAP[$93]; //@line 2002 "_json.c"
        var $95=HEAP[__Py_CheckRecursionLimit]; //@line 2002 "_json.c"
        var $96=((($94))|0) > ((($95))|0); //@line 2002 "_json.c"
        if ($96) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 2002 "_json.c"
      case 24: // $bb25
        var $97=__Py_CheckRecursiveCall(((__str58)&4294967295)); //@line 2002 "_json.c"
        var $98=((($97))|0)!=0; //@line 2002 "_json.c"
        if ($98) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 2002 "_json.c"
      case 25: // $bb26
        HEAP[$0]=-1; //@line 2003 "_json.c"
        __label__ = 70; break; //@line 2003 "_json.c"
      case 26: // $bb27
        var $99=HEAP[$s_addr]; //@line 2004 "_json.c"
        var $100=HEAP[$rval_addr]; //@line 2004 "_json.c"
        var $101=HEAP[$obj_addr]; //@line 2004 "_json.c"
        var $102=HEAP[$indent_level_addr]; //@line 2004 "_json.c"
        var $103=_encoder_listencode_list($99, $100, $101, $102); //@line 2004 "_json.c"
        HEAP[$rv]=$103; //@line 2004 "_json.c"
        var $104=HEAP[__PyThreadState_Current]; //@line 2005 "_json.c"
        var $105=(($104+12)&4294967295); //@line 2005 "_json.c"
        var $106=HEAP[$105]; //@line 2005 "_json.c"
        var $107=((($106) - 1)&4294967295); //@line 2005 "_json.c"
        var $108=(($104+12)&4294967295); //@line 2005 "_json.c"
        HEAP[$108]=$107; //@line 2005 "_json.c"
        var $109=HEAP[$rv]; //@line 2006 "_json.c"
        HEAP[$0]=$109; //@line 2006 "_json.c"
        __label__ = 70; break; //@line 2006 "_json.c"
      case 27: // $bb28
        var $110=HEAP[$obj_addr]; //@line 2008 "_json.c"
        var $111=(($110+4)&4294967295); //@line 2008 "_json.c"
        var $112=HEAP[$111]; //@line 2008 "_json.c"
        var $113=(($112+84)&4294967295); //@line 2008 "_json.c"
        var $114=HEAP[$113]; //@line 2008 "_json.c"
        var $115=($114) & 536870912; //@line 2008 "_json.c"
        var $116=((($115))|0)!=0; //@line 2008 "_json.c"
        if ($116) { __label__ = 28; break; } else { __label__ = 32; break; } //@line 2008 "_json.c"
      case 28: // $bb29
        var $117=HEAP[__PyThreadState_Current]; //@line 2009 "_json.c"
        var $118=(($117+12)&4294967295); //@line 2009 "_json.c"
        var $119=HEAP[$118]; //@line 2009 "_json.c"
        var $120=((($119) + 1)&4294967295); //@line 2009 "_json.c"
        var $121=(($117+12)&4294967295); //@line 2009 "_json.c"
        HEAP[$121]=$120; //@line 2009 "_json.c"
        var $122=(($117+12)&4294967295); //@line 2009 "_json.c"
        var $123=HEAP[$122]; //@line 2009 "_json.c"
        var $124=HEAP[__Py_CheckRecursionLimit]; //@line 2009 "_json.c"
        var $125=((($123))|0) > ((($124))|0); //@line 2009 "_json.c"
        if ($125) { __label__ = 29; break; } else { __label__ = 31; break; } //@line 2009 "_json.c"
      case 29: // $bb30
        var $126=__Py_CheckRecursiveCall(((__str58)&4294967295)); //@line 2009 "_json.c"
        var $127=((($126))|0)!=0; //@line 2009 "_json.c"
        if ($127) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 2009 "_json.c"
      case 30: // $bb31
        HEAP[$0]=-1; //@line 2010 "_json.c"
        __label__ = 70; break; //@line 2010 "_json.c"
      case 31: // $bb32
        var $128=HEAP[$s_addr]; //@line 2011 "_json.c"
        var $129=HEAP[$rval_addr]; //@line 2011 "_json.c"
        var $130=HEAP[$obj_addr]; //@line 2011 "_json.c"
        var $131=HEAP[$indent_level_addr]; //@line 2011 "_json.c"
        var $132=_encoder_listencode_dict($128, $129, $130, $131); //@line 2011 "_json.c"
        HEAP[$rv]=$132; //@line 2011 "_json.c"
        var $133=HEAP[__PyThreadState_Current]; //@line 2012 "_json.c"
        var $134=(($133+12)&4294967295); //@line 2012 "_json.c"
        var $135=HEAP[$134]; //@line 2012 "_json.c"
        var $136=((($135) - 1)&4294967295); //@line 2012 "_json.c"
        var $137=(($133+12)&4294967295); //@line 2012 "_json.c"
        HEAP[$137]=$136; //@line 2012 "_json.c"
        var $138=HEAP[$rv]; //@line 2013 "_json.c"
        HEAP[$0]=$138; //@line 2013 "_json.c"
        __label__ = 70; break; //@line 2013 "_json.c"
      case 32: // $bb33
        HEAP[$ident]=0; //@line 2016 "_json.c"
        var $139=HEAP[$s_addr]; //@line 2017 "_json.c"
        var $140=(($139+8)&4294967295); //@line 2017 "_json.c"
        var $141=HEAP[$140]; //@line 2017 "_json.c"
        var $142=($141)!=(__Py_NoneStruct); //@line 2017 "_json.c"
        if ($142) { __label__ = 33; break; } else { __label__ = 45; break; } //@line 2017 "_json.c"
      case 33: // $bb34
        var $143=HEAP[$obj_addr]; //@line 2019 "_json.c"
        var $144=$143; //@line 2019 "_json.c"
        var $145=_PyLong_FromVoidPtr($144); //@line 2019 "_json.c"
        HEAP[$ident]=$145; //@line 2019 "_json.c"
        var $146=HEAP[$ident]; //@line 2020 "_json.c"
        var $147=($146)==0; //@line 2020 "_json.c"
        if ($147) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 2020 "_json.c"
      case 34: // $bb35
        HEAP[$0]=-1; //@line 2021 "_json.c"
        __label__ = 70; break; //@line 2021 "_json.c"
      case 35: // $bb36
        var $148=HEAP[$s_addr]; //@line 2022 "_json.c"
        var $149=(($148+8)&4294967295); //@line 2022 "_json.c"
        var $150=HEAP[$149]; //@line 2022 "_json.c"
        var $151=HEAP[$ident]; //@line 2022 "_json.c"
        var $152=_PyDict_Contains($150, $151); //@line 2022 "_json.c"
        HEAP[$has_key]=$152; //@line 2022 "_json.c"
        var $153=HEAP[$has_key]; //@line 2023 "_json.c"
        var $154=((($153))|0)!=0; //@line 2023 "_json.c"
        if ($154) { __label__ = 36; break; } else { __label__ = 41; break; } //@line 2023 "_json.c"
      case 36: // $bb37
        var $155=HEAP[$has_key]; //@line 2024 "_json.c"
        var $156=((($155))|0)!=-1; //@line 2024 "_json.c"
        if ($156) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 2024 "_json.c"
      case 37: // $bb38
        var $157=HEAP[_PyExc_ValueError]; //@line 2025 "_json.c"
        _PyErr_SetString($157, ((__str59)&4294967295)); //@line 2025 "_json.c"
        __label__ = 38; break; //@line 2025 "_json.c"
      case 38: // $bb39
        var $158=HEAP[$ident]; //@line 2026 "_json.c"
        var $159=(($158)&4294967295); //@line 2026 "_json.c"
        var $160=HEAP[$159]; //@line 2026 "_json.c"
        var $161=((($160) - 1)&4294967295); //@line 2026 "_json.c"
        var $162=HEAP[$ident]; //@line 2026 "_json.c"
        var $163=(($162)&4294967295); //@line 2026 "_json.c"
        HEAP[$163]=$161; //@line 2026 "_json.c"
        var $164=HEAP[$ident]; //@line 2026 "_json.c"
        var $165=(($164)&4294967295); //@line 2026 "_json.c"
        var $166=HEAP[$165]; //@line 2026 "_json.c"
        var $167=((($166))|0)==0; //@line 2026 "_json.c"
        if ($167) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 2026 "_json.c"
      case 39: // $bb40
        var $168=HEAP[$ident]; //@line 2026 "_json.c"
        var $169=(($168+4)&4294967295); //@line 2026 "_json.c"
        var $170=HEAP[$169]; //@line 2026 "_json.c"
        var $171=(($170+24)&4294967295); //@line 2026 "_json.c"
        var $172=HEAP[$171]; //@line 2026 "_json.c"
        var $173=HEAP[$ident]; //@line 2026 "_json.c"
        FUNCTION_TABLE[$172]($173); //@line 2026 "_json.c"
        __label__ = 40; break; //@line 2026 "_json.c"
      case 40: // $bb41
        HEAP[$0]=-1; //@line 2027 "_json.c"
        __label__ = 70; break; //@line 2027 "_json.c"
      case 41: // $bb42
        var $174=HEAP[$s_addr]; //@line 2029 "_json.c"
        var $175=(($174+8)&4294967295); //@line 2029 "_json.c"
        var $176=HEAP[$175]; //@line 2029 "_json.c"
        var $177=HEAP[$ident]; //@line 2029 "_json.c"
        var $178=HEAP[$obj_addr]; //@line 2029 "_json.c"
        var $179=_PyDict_SetItem($176, $177, $178); //@line 2029 "_json.c"
        var $180=((($179))|0)!=0; //@line 2029 "_json.c"
        if ($180) { __label__ = 42; break; } else { __label__ = 45; break; } //@line 2029 "_json.c"
      case 42: // $bb43
        var $181=HEAP[$ident]; //@line 2030 "_json.c"
        var $182=(($181)&4294967295); //@line 2030 "_json.c"
        var $183=HEAP[$182]; //@line 2030 "_json.c"
        var $184=((($183) - 1)&4294967295); //@line 2030 "_json.c"
        var $185=HEAP[$ident]; //@line 2030 "_json.c"
        var $186=(($185)&4294967295); //@line 2030 "_json.c"
        HEAP[$186]=$184; //@line 2030 "_json.c"
        var $187=HEAP[$ident]; //@line 2030 "_json.c"
        var $188=(($187)&4294967295); //@line 2030 "_json.c"
        var $189=HEAP[$188]; //@line 2030 "_json.c"
        var $190=((($189))|0)==0; //@line 2030 "_json.c"
        if ($190) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 2030 "_json.c"
      case 43: // $bb44
        var $191=HEAP[$ident]; //@line 2030 "_json.c"
        var $192=(($191+4)&4294967295); //@line 2030 "_json.c"
        var $193=HEAP[$192]; //@line 2030 "_json.c"
        var $194=(($193+24)&4294967295); //@line 2030 "_json.c"
        var $195=HEAP[$194]; //@line 2030 "_json.c"
        var $196=HEAP[$ident]; //@line 2030 "_json.c"
        FUNCTION_TABLE[$195]($196); //@line 2030 "_json.c"
        __label__ = 44; break; //@line 2030 "_json.c"
      case 44: // $bb45
        HEAP[$0]=-1; //@line 2031 "_json.c"
        __label__ = 70; break; //@line 2031 "_json.c"
      case 45: // $bb46
        var $197=HEAP[$s_addr]; //@line 2034 "_json.c"
        var $198=(($197+12)&4294967295); //@line 2034 "_json.c"
        var $199=HEAP[$198]; //@line 2034 "_json.c"
        var $200=HEAP[$obj_addr]; //@line 2034 "_json.c"
        var $201=_PyObject_CallFunctionObjArgs($199, $200, 0); //@line 2034 "_json.c"
        HEAP[$newobj]=$201; //@line 2034 "_json.c"
        var $202=HEAP[$newobj]; //@line 2035 "_json.c"
        var $203=($202)==0; //@line 2035 "_json.c"
        if ($203) { __label__ = 46; break; } else { __label__ = 50; break; } //@line 2035 "_json.c"
      case 46: // $bb47
        var $204=HEAP[$ident]; //@line 2036 "_json.c"
        var $205=($204)!=0; //@line 2036 "_json.c"
        if ($205) { __label__ = 47; break; } else { __label__ = 49; break; } //@line 2036 "_json.c"
      case 47: // $bb48
        var $206=HEAP[$ident]; //@line 2036 "_json.c"
        var $207=(($206)&4294967295); //@line 2036 "_json.c"
        var $208=HEAP[$207]; //@line 2036 "_json.c"
        var $209=((($208) - 1)&4294967295); //@line 2036 "_json.c"
        var $210=HEAP[$ident]; //@line 2036 "_json.c"
        var $211=(($210)&4294967295); //@line 2036 "_json.c"
        HEAP[$211]=$209; //@line 2036 "_json.c"
        var $212=HEAP[$ident]; //@line 2036 "_json.c"
        var $213=(($212)&4294967295); //@line 2036 "_json.c"
        var $214=HEAP[$213]; //@line 2036 "_json.c"
        var $215=((($214))|0)==0; //@line 2036 "_json.c"
        if ($215) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 2036 "_json.c"
      case 48: // $bb49
        var $216=HEAP[$ident]; //@line 2036 "_json.c"
        var $217=(($216+4)&4294967295); //@line 2036 "_json.c"
        var $218=HEAP[$217]; //@line 2036 "_json.c"
        var $219=(($218+24)&4294967295); //@line 2036 "_json.c"
        var $220=HEAP[$219]; //@line 2036 "_json.c"
        var $221=HEAP[$ident]; //@line 2036 "_json.c"
        FUNCTION_TABLE[$220]($221); //@line 2036 "_json.c"
        __label__ = 49; break; //@line 2036 "_json.c"
      case 49: // $bb50
        HEAP[$0]=-1; //@line 2037 "_json.c"
        __label__ = 70; break; //@line 2037 "_json.c"
      case 50: // $bb51
        var $222=HEAP[__PyThreadState_Current]; //@line 2040 "_json.c"
        var $223=(($222+12)&4294967295); //@line 2040 "_json.c"
        var $224=HEAP[$223]; //@line 2040 "_json.c"
        var $225=((($224) + 1)&4294967295); //@line 2040 "_json.c"
        var $226=(($222+12)&4294967295); //@line 2040 "_json.c"
        HEAP[$226]=$225; //@line 2040 "_json.c"
        var $227=(($222+12)&4294967295); //@line 2040 "_json.c"
        var $228=HEAP[$227]; //@line 2040 "_json.c"
        var $229=HEAP[__Py_CheckRecursionLimit]; //@line 2040 "_json.c"
        var $230=((($228))|0) > ((($229))|0); //@line 2040 "_json.c"
        if ($230) { __label__ = 51; break; } else { __label__ = 53; break; } //@line 2040 "_json.c"
      case 51: // $bb52
        var $231=__Py_CheckRecursiveCall(((__str58)&4294967295)); //@line 2040 "_json.c"
        var $232=((($231))|0)!=0; //@line 2040 "_json.c"
        if ($232) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 2040 "_json.c"
      case 52: // $bb53
        HEAP[$0]=-1; //@line 2041 "_json.c"
        __label__ = 70; break; //@line 2041 "_json.c"
      case 53: // $bb54
        var $233=HEAP[$s_addr]; //@line 2042 "_json.c"
        var $234=HEAP[$rval_addr]; //@line 2042 "_json.c"
        var $235=HEAP[$newobj]; //@line 2042 "_json.c"
        var $236=HEAP[$indent_level_addr]; //@line 2042 "_json.c"
        var $237=_encoder_listencode_obj($233, $234, $235, $236); //@line 2042 "_json.c"
        HEAP[$rv]=$237; //@line 2042 "_json.c"
        var $238=HEAP[__PyThreadState_Current]; //@line 2043 "_json.c"
        var $239=(($238+12)&4294967295); //@line 2043 "_json.c"
        var $240=HEAP[$239]; //@line 2043 "_json.c"
        var $241=((($240) - 1)&4294967295); //@line 2043 "_json.c"
        var $242=(($238+12)&4294967295); //@line 2043 "_json.c"
        HEAP[$242]=$241; //@line 2043 "_json.c"
        var $243=HEAP[$newobj]; //@line 2045 "_json.c"
        var $244=(($243)&4294967295); //@line 2045 "_json.c"
        var $245=HEAP[$244]; //@line 2045 "_json.c"
        var $246=((($245) - 1)&4294967295); //@line 2045 "_json.c"
        var $247=HEAP[$newobj]; //@line 2045 "_json.c"
        var $248=(($247)&4294967295); //@line 2045 "_json.c"
        HEAP[$248]=$246; //@line 2045 "_json.c"
        var $249=HEAP[$newobj]; //@line 2045 "_json.c"
        var $250=(($249)&4294967295); //@line 2045 "_json.c"
        var $251=HEAP[$250]; //@line 2045 "_json.c"
        var $252=((($251))|0)==0; //@line 2045 "_json.c"
        if ($252) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 2045 "_json.c"
      case 54: // $bb55
        var $253=HEAP[$newobj]; //@line 2045 "_json.c"
        var $254=(($253+4)&4294967295); //@line 2045 "_json.c"
        var $255=HEAP[$254]; //@line 2045 "_json.c"
        var $256=(($255+24)&4294967295); //@line 2045 "_json.c"
        var $257=HEAP[$256]; //@line 2045 "_json.c"
        var $258=HEAP[$newobj]; //@line 2045 "_json.c"
        FUNCTION_TABLE[$257]($258); //@line 2045 "_json.c"
        __label__ = 55; break; //@line 2045 "_json.c"
      case 55: // $bb56
        var $259=HEAP[$rv]; //@line 2046 "_json.c"
        var $260=((($259))|0)!=0; //@line 2046 "_json.c"
        if ($260) { __label__ = 56; break; } else { __label__ = 60; break; } //@line 2046 "_json.c"
      case 56: // $bb57
        var $261=HEAP[$ident]; //@line 2047 "_json.c"
        var $262=($261)!=0; //@line 2047 "_json.c"
        if ($262) { __label__ = 57; break; } else { __label__ = 59; break; } //@line 2047 "_json.c"
      case 57: // $bb58
        var $263=HEAP[$ident]; //@line 2047 "_json.c"
        var $264=(($263)&4294967295); //@line 2047 "_json.c"
        var $265=HEAP[$264]; //@line 2047 "_json.c"
        var $266=((($265) - 1)&4294967295); //@line 2047 "_json.c"
        var $267=HEAP[$ident]; //@line 2047 "_json.c"
        var $268=(($267)&4294967295); //@line 2047 "_json.c"
        HEAP[$268]=$266; //@line 2047 "_json.c"
        var $269=HEAP[$ident]; //@line 2047 "_json.c"
        var $270=(($269)&4294967295); //@line 2047 "_json.c"
        var $271=HEAP[$270]; //@line 2047 "_json.c"
        var $272=((($271))|0)==0; //@line 2047 "_json.c"
        if ($272) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 2047 "_json.c"
      case 58: // $bb59
        var $273=HEAP[$ident]; //@line 2047 "_json.c"
        var $274=(($273+4)&4294967295); //@line 2047 "_json.c"
        var $275=HEAP[$274]; //@line 2047 "_json.c"
        var $276=(($275+24)&4294967295); //@line 2047 "_json.c"
        var $277=HEAP[$276]; //@line 2047 "_json.c"
        var $278=HEAP[$ident]; //@line 2047 "_json.c"
        FUNCTION_TABLE[$277]($278); //@line 2047 "_json.c"
        __label__ = 59; break; //@line 2047 "_json.c"
      case 59: // $bb60
        HEAP[$0]=-1; //@line 2048 "_json.c"
        __label__ = 70; break; //@line 2048 "_json.c"
      case 60: // $bb61
        var $279=HEAP[$ident]; //@line 2050 "_json.c"
        var $280=($279)!=0; //@line 2050 "_json.c"
        if ($280) { __label__ = 61; break; } else { __label__ = 69; break; } //@line 2050 "_json.c"
      case 61: // $bb62
        var $281=HEAP[$s_addr]; //@line 2051 "_json.c"
        var $282=(($281+8)&4294967295); //@line 2051 "_json.c"
        var $283=HEAP[$282]; //@line 2051 "_json.c"
        var $284=HEAP[$ident]; //@line 2051 "_json.c"
        var $285=_PyDict_DelItem($283, $284); //@line 2051 "_json.c"
        var $286=((($285))|0)!=0; //@line 2051 "_json.c"
        if ($286) { __label__ = 62; break; } else { __label__ = 66; break; } //@line 2051 "_json.c"
      case 62: // $bb63
        var $287=HEAP[$ident]; //@line 2052 "_json.c"
        var $288=($287)!=0; //@line 2052 "_json.c"
        if ($288) { __label__ = 63; break; } else { __label__ = 65; break; } //@line 2052 "_json.c"
      case 63: // $bb64
        var $289=HEAP[$ident]; //@line 2052 "_json.c"
        var $290=(($289)&4294967295); //@line 2052 "_json.c"
        var $291=HEAP[$290]; //@line 2052 "_json.c"
        var $292=((($291) - 1)&4294967295); //@line 2052 "_json.c"
        var $293=HEAP[$ident]; //@line 2052 "_json.c"
        var $294=(($293)&4294967295); //@line 2052 "_json.c"
        HEAP[$294]=$292; //@line 2052 "_json.c"
        var $295=HEAP[$ident]; //@line 2052 "_json.c"
        var $296=(($295)&4294967295); //@line 2052 "_json.c"
        var $297=HEAP[$296]; //@line 2052 "_json.c"
        var $298=((($297))|0)==0; //@line 2052 "_json.c"
        if ($298) { __label__ = 64; break; } else { __label__ = 65; break; } //@line 2052 "_json.c"
      case 64: // $bb65
        var $299=HEAP[$ident]; //@line 2052 "_json.c"
        var $300=(($299+4)&4294967295); //@line 2052 "_json.c"
        var $301=HEAP[$300]; //@line 2052 "_json.c"
        var $302=(($301+24)&4294967295); //@line 2052 "_json.c"
        var $303=HEAP[$302]; //@line 2052 "_json.c"
        var $304=HEAP[$ident]; //@line 2052 "_json.c"
        FUNCTION_TABLE[$303]($304); //@line 2052 "_json.c"
        __label__ = 65; break; //@line 2052 "_json.c"
      case 65: // $bb66
        HEAP[$0]=-1; //@line 2053 "_json.c"
        __label__ = 70; break; //@line 2053 "_json.c"
      case 66: // $bb67
        var $305=HEAP[$ident]; //@line 2055 "_json.c"
        var $306=($305)!=0; //@line 2055 "_json.c"
        if ($306) { __label__ = 67; break; } else { __label__ = 69; break; } //@line 2055 "_json.c"
      case 67: // $bb68
        var $307=HEAP[$ident]; //@line 2055 "_json.c"
        var $308=(($307)&4294967295); //@line 2055 "_json.c"
        var $309=HEAP[$308]; //@line 2055 "_json.c"
        var $310=((($309) - 1)&4294967295); //@line 2055 "_json.c"
        var $311=HEAP[$ident]; //@line 2055 "_json.c"
        var $312=(($311)&4294967295); //@line 2055 "_json.c"
        HEAP[$312]=$310; //@line 2055 "_json.c"
        var $313=HEAP[$ident]; //@line 2055 "_json.c"
        var $314=(($313)&4294967295); //@line 2055 "_json.c"
        var $315=HEAP[$314]; //@line 2055 "_json.c"
        var $316=((($315))|0)==0; //@line 2055 "_json.c"
        if ($316) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 2055 "_json.c"
      case 68: // $bb69
        var $317=HEAP[$ident]; //@line 2055 "_json.c"
        var $318=(($317+4)&4294967295); //@line 2055 "_json.c"
        var $319=HEAP[$318]; //@line 2055 "_json.c"
        var $320=(($319+24)&4294967295); //@line 2055 "_json.c"
        var $321=HEAP[$320]; //@line 2055 "_json.c"
        var $322=HEAP[$ident]; //@line 2055 "_json.c"
        FUNCTION_TABLE[$321]($322); //@line 2055 "_json.c"
        __label__ = 69; break; //@line 2055 "_json.c"
      case 69: // $bb70
        var $323=HEAP[$rv]; //@line 2057 "_json.c"
        HEAP[$0]=$323; //@line 2057 "_json.c"
        __label__ = 70; break; //@line 2057 "_json.c"
      case 70: // $bb71
        var $324=HEAP[$0]; //@line 1979 "_json.c"
        HEAP[$retval]=$324; //@line 1979 "_json.c"
        __label__ = 71; break; //@line 1979 "_json.c"
      case 71: // $return
        var $retval72=HEAP[$retval]; //@line 1979 "_json.c"
        STACKTOP = __stackBase__;
        return $retval72; //@line 1979 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_listencode_dict($s, $rval, $dct, $indent_level) {
    var __stackBase__  = STACKTOP; STACKTOP += 76; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $rval_addr=__stackBase__+4;
        var $dct_addr=__stackBase__+8;
        var $indent_level_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $kstr=__stackBase__+24;
        var $ident=__stackBase__+28;
        var $key=__stackBase__+32;
        var $value=__stackBase__+36;
        var $it=__stackBase__+40;
        var $skipkeys=__stackBase__+44;
        var $idx=__stackBase__+48;
        var $has_key=__stackBase__+52;
        var $encoded=__stackBase__+56;
        var $_py_tmp=__stackBase__+60;
        var $_py_tmp58=__stackBase__+64;
        var $_py_tmp66=__stackBase__+68;
        var $_py_tmp72=__stackBase__+72;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$rval_addr]=$rval;
        HEAP[$dct_addr]=$dct;
        HEAP[$indent_level_addr]=$indent_level;
        HEAP[$kstr]=0; //@line 2068 "_json.c"
        HEAP[$ident]=0; //@line 2069 "_json.c"
        HEAP[$key]=0; //@line 2070 "_json.c"
        HEAP[$value]=0; //@line 2071 "_json.c"
        HEAP[$it]=0; //@line 2072 "_json.c"
        var $1=HEAP[_open_dict_11341]; //@line 2076 "_json.c"
        var $2=($1)==0; //@line 2076 "_json.c"
        if ($2) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2076 "_json.c"
      case 1: // $bb
        var $3=HEAP[_close_dict_11342]; //@line 2076 "_json.c"
        var $4=($3)==0; //@line 2076 "_json.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2076 "_json.c"
      case 2: // $bb1
        var $5=HEAP[_empty_dict_11343]; //@line 2076 "_json.c"
        var $6=($5)==0; //@line 2076 "_json.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 2076 "_json.c"
      case 3: // $bb2
        var $7=_PyString_InternFromString(((__str60)&4294967295)); //@line 2077 "_json.c"
        HEAP[_open_dict_11341]=$7; //@line 2077 "_json.c"
        var $8=_PyString_InternFromString(((__str61)&4294967295)); //@line 2078 "_json.c"
        HEAP[_close_dict_11342]=$8; //@line 2078 "_json.c"
        var $9=_PyString_InternFromString(((__str62)&4294967295)); //@line 2079 "_json.c"
        HEAP[_empty_dict_11343]=$9; //@line 2079 "_json.c"
        var $10=HEAP[_open_dict_11341]; //@line 2080 "_json.c"
        var $11=($10)==0; //@line 2080 "_json.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2080 "_json.c"
      case 4: // $bb3
        var $12=HEAP[_close_dict_11342]; //@line 2080 "_json.c"
        var $13=($12)==0; //@line 2080 "_json.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2080 "_json.c"
      case 5: // $bb4
        var $14=HEAP[_empty_dict_11343]; //@line 2080 "_json.c"
        var $15=($14)==0; //@line 2080 "_json.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2080 "_json.c"
      case 6: // $bb5
        HEAP[$0]=-1; //@line 2081 "_json.c"
        __label__ = 90; break; //@line 2081 "_json.c"
      case 7: // $bb6
        var $16=HEAP[$dct_addr]; //@line 2083 "_json.c"
        var $17=$16; //@line 2083 "_json.c"
        var $18=(($17+8)&4294967295); //@line 2083 "_json.c"
        var $19=HEAP[$18]; //@line 2083 "_json.c"
        var $20=((($19))|0)==0; //@line 2083 "_json.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2083 "_json.c"
      case 8: // $bb7
        var $21=HEAP[_empty_dict_11343]; //@line 2084 "_json.c"
        var $22=HEAP[$rval_addr]; //@line 2084 "_json.c"
        var $23=_PyList_Append($22, $21); //@line 2084 "_json.c"
        HEAP[$0]=$23; //@line 2084 "_json.c"
        __label__ = 90; break; //@line 2084 "_json.c"
      case 9: // $bb8
        var $24=HEAP[$s_addr]; //@line 2086 "_json.c"
        var $25=(($24+8)&4294967295); //@line 2086 "_json.c"
        var $26=HEAP[$25]; //@line 2086 "_json.c"
        var $27=($26)!=(__Py_NoneStruct); //@line 2086 "_json.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 16; break; } //@line 2086 "_json.c"
      case 10: // $bb9
        var $28=HEAP[$dct_addr]; //@line 2088 "_json.c"
        var $29=$28; //@line 2088 "_json.c"
        var $30=_PyLong_FromVoidPtr($29); //@line 2088 "_json.c"
        HEAP[$ident]=$30; //@line 2088 "_json.c"
        var $31=HEAP[$ident]; //@line 2089 "_json.c"
        var $32=($31)==0; //@line 2089 "_json.c"
        if ($32) { __label__ = 74; break; } else { __label__ = 11; break; } //@line 2089 "_json.c"
      case 11: // $bb10
        var $33=HEAP[$s_addr]; //@line 2091 "_json.c"
        var $34=(($33+8)&4294967295); //@line 2091 "_json.c"
        var $35=HEAP[$34]; //@line 2091 "_json.c"
        var $36=HEAP[$ident]; //@line 2091 "_json.c"
        var $37=_PyDict_Contains($35, $36); //@line 2091 "_json.c"
        HEAP[$has_key]=$37; //@line 2091 "_json.c"
        var $38=HEAP[$has_key]; //@line 2092 "_json.c"
        var $39=((($38))|0)!=0; //@line 2092 "_json.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 2092 "_json.c"
      case 12: // $bb11
        var $40=HEAP[$has_key]; //@line 2093 "_json.c"
        var $41=((($40))|0)!=-1; //@line 2093 "_json.c"
        if ($41) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2093 "_json.c"
      case 13: // $bb12
        var $42=HEAP[_PyExc_ValueError]; //@line 2094 "_json.c"
        _PyErr_SetString($42, ((__str59)&4294967295)); //@line 2094 "_json.c"
        __label__ = 14; break; //@line 2094 "_json.c"
      case 14: // $bb13
        __label__ = 74; break; //@line 2094 "_json.c"
      case 15: // $bb14
        var $43=HEAP[$s_addr]; //@line 2097 "_json.c"
        var $44=(($43+8)&4294967295); //@line 2097 "_json.c"
        var $45=HEAP[$44]; //@line 2097 "_json.c"
        var $46=HEAP[$ident]; //@line 2097 "_json.c"
        var $47=HEAP[$dct_addr]; //@line 2097 "_json.c"
        var $48=_PyDict_SetItem($45, $46, $47); //@line 2097 "_json.c"
        var $49=((($48))|0)!=0; //@line 2097 "_json.c"
        if ($49) { __label__ = 74; break; } else { __label__ = 16; break; } //@line 2097 "_json.c"
      case 16: // $bb15
        var $50=HEAP[_open_dict_11341]; //@line 2102 "_json.c"
        var $51=HEAP[$rval_addr]; //@line 2102 "_json.c"
        var $52=_PyList_Append($51, $50); //@line 2102 "_json.c"
        var $53=((($52))|0)!=0; //@line 2102 "_json.c"
        if ($53) { __label__ = 74; break; } else { __label__ = 17; break; } //@line 2102 "_json.c"
      case 17: // $bb16
        var $54=HEAP[$s_addr]; //@line 2105 "_json.c"
        var $55=(($54+20)&4294967295); //@line 2105 "_json.c"
        var $56=HEAP[$55]; //@line 2105 "_json.c"
        var $57=($56)!=(__Py_NoneStruct); //@line 2105 "_json.c"
        if ($57) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 2105 "_json.c"
      case 18: // $bb17
        var $58=HEAP[$indent_level_addr]; //@line 2107 "_json.c"
        var $59=((($58) + 1)&4294967295); //@line 2107 "_json.c"
        HEAP[$indent_level_addr]=$59; //@line 2107 "_json.c"
        __label__ = 19; break; //@line 2107 "_json.c"
      case 19: // $bb18
        var $60=HEAP[$dct_addr]; //@line 2117 "_json.c"
        var $61=_PyObject_GetIter($60); //@line 2117 "_json.c"
        HEAP[$it]=$61; //@line 2117 "_json.c"
        var $62=HEAP[$it]; //@line 2118 "_json.c"
        var $63=($62)==0; //@line 2118 "_json.c"
        if ($63) { __label__ = 74; break; } else { __label__ = 20; break; } //@line 2118 "_json.c"
      case 20: // $bb19
        var $64=HEAP[$s_addr]; //@line 2120 "_json.c"
        var $65=(($64+36)&4294967295); //@line 2120 "_json.c"
        var $66=HEAP[$65]; //@line 2120 "_json.c"
        var $67=_PyObject_IsTrue($66); //@line 2120 "_json.c"
        HEAP[$skipkeys]=$67; //@line 2120 "_json.c"
        HEAP[$idx]=0; //@line 2121 "_json.c"
        __label__ = 62; break; //@line 2121 "_json.c"
      case 21: // $bb20
        var $68=HEAP[$key]; //@line 2125 "_json.c"
        var $69=(($68+4)&4294967295); //@line 2125 "_json.c"
        var $70=HEAP[$69]; //@line 2125 "_json.c"
        var $71=(($70+84)&4294967295); //@line 2125 "_json.c"
        var $72=HEAP[$71]; //@line 2125 "_json.c"
        var $73=($72) & 134217728; //@line 2125 "_json.c"
        var $74=((($73))|0)!=0; //@line 2125 "_json.c"
        if ($74) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 2125 "_json.c"
      case 22: // $bb21
        var $75=HEAP[$key]; //@line 2125 "_json.c"
        var $76=(($75+4)&4294967295); //@line 2125 "_json.c"
        var $77=HEAP[$76]; //@line 2125 "_json.c"
        var $78=(($77+84)&4294967295); //@line 2125 "_json.c"
        var $79=HEAP[$78]; //@line 2125 "_json.c"
        var $80=($79) & 268435456; //@line 2125 "_json.c"
        var $81=((($80))|0)!=0; //@line 2125 "_json.c"
        if ($81) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 2125 "_json.c"
      case 23: // $bb22
        var $82=HEAP[$key]; //@line 2126 "_json.c"
        var $83=(($82)&4294967295); //@line 2126 "_json.c"
        var $84=HEAP[$83]; //@line 2126 "_json.c"
        var $85=((($84) + 1)&4294967295); //@line 2126 "_json.c"
        var $86=HEAP[$key]; //@line 2126 "_json.c"
        var $87=(($86)&4294967295); //@line 2126 "_json.c"
        HEAP[$87]=$85; //@line 2126 "_json.c"
        var $88=HEAP[$key]; //@line 2127 "_json.c"
        HEAP[$kstr]=$88; //@line 2127 "_json.c"
        __label__ = 42; break; //@line 2127 "_json.c"
      case 24: // $bb23
        var $89=HEAP[$key]; //@line 2129 "_json.c"
        var $90=(($89+4)&4294967295); //@line 2129 "_json.c"
        var $91=HEAP[$90]; //@line 2129 "_json.c"
        var $92=($91)==(_PyFloat_Type); //@line 2129 "_json.c"
        if ($92) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 2129 "_json.c"
      case 25: // $bb24
        var $93=HEAP[$key]; //@line 2129 "_json.c"
        var $94=(($93+4)&4294967295); //@line 2129 "_json.c"
        var $95=HEAP[$94]; //@line 2129 "_json.c"
        var $96=_PyType_IsSubtype($95, _PyFloat_Type); //@line 2129 "_json.c"
        var $97=((($96))|0)!=0; //@line 2129 "_json.c"
        if ($97) { __label__ = 26; break; } else { __label__ = 28; break; } //@line 2129 "_json.c"
      case 26: // $bb25
        var $98=HEAP[$s_addr]; //@line 2130 "_json.c"
        var $99=HEAP[$key]; //@line 2130 "_json.c"
        var $100=_encoder_encode_float($98, $99); //@line 2130 "_json.c"
        HEAP[$kstr]=$100; //@line 2130 "_json.c"
        var $101=HEAP[$kstr]; //@line 2131 "_json.c"
        var $102=($101)==0; //@line 2131 "_json.c"
        if ($102) { __label__ = 74; break; } else { __label__ = 27; break; } //@line 2131 "_json.c"
      case 27: // $bb26
        __label__ = 42; break; //@line 2131 "_json.c"
      case 28: // $bb27
        var $103=HEAP[$key]; //@line 2134 "_json.c"
        var $104=(($103+4)&4294967295); //@line 2134 "_json.c"
        var $105=HEAP[$104]; //@line 2134 "_json.c"
        var $106=(($105+84)&4294967295); //@line 2134 "_json.c"
        var $107=HEAP[$106]; //@line 2134 "_json.c"
        var $108=($107) & 8388608; //@line 2134 "_json.c"
        var $109=((($108))|0)!=0; //@line 2134 "_json.c"
        if ($109) { __label__ = 30; break; } else { __label__ = 29; break; } //@line 2134 "_json.c"
      case 29: // $bb28
        var $110=HEAP[$key]; //@line 2134 "_json.c"
        var $111=(($110+4)&4294967295); //@line 2134 "_json.c"
        var $112=HEAP[$111]; //@line 2134 "_json.c"
        var $113=(($112+84)&4294967295); //@line 2134 "_json.c"
        var $114=HEAP[$113]; //@line 2134 "_json.c"
        var $115=($114) & 16777216; //@line 2134 "_json.c"
        var $116=((($115))|0)!=0; //@line 2134 "_json.c"
        if ($116) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 2134 "_json.c"
      case 30: // $bb29
        var $117=HEAP[$key]; //@line 2135 "_json.c"
        var $118=_PyObject_Str($117); //@line 2135 "_json.c"
        HEAP[$kstr]=$118; //@line 2135 "_json.c"
        var $119=HEAP[$kstr]; //@line 2136 "_json.c"
        var $120=($119)==0; //@line 2136 "_json.c"
        if ($120) { __label__ = 74; break; } else { __label__ = 31; break; } //@line 2136 "_json.c"
      case 31: // $bb30
        __label__ = 42; break; //@line 2136 "_json.c"
      case 32: // $bb31
        var $121=HEAP[$key]; //@line 2139 "_json.c"
        var $122=($121)==(__Py_TrueStruct); //@line 2139 "_json.c"
        if ($122) { __label__ = 35; break; } else { __label__ = 33; break; } //@line 2139 "_json.c"
      case 33: // $bb32
        var $123=HEAP[$key]; //@line 2139 "_json.c"
        var $124=($123)==(__Py_ZeroStruct); //@line 2139 "_json.c"
        if ($124) { __label__ = 35; break; } else { __label__ = 34; break; } //@line 2139 "_json.c"
      case 34: // $bb33
        var $125=HEAP[$key]; //@line 2139 "_json.c"
        var $126=($125)==(__Py_NoneStruct); //@line 2139 "_json.c"
        if ($126) { __label__ = 35; break; } else { __label__ = 37; break; } //@line 2139 "_json.c"
      case 35: // $bb34
        var $127=HEAP[$key]; //@line 2140 "_json.c"
        var $128=__encoded_const($127); //@line 2140 "_json.c"
        HEAP[$kstr]=$128; //@line 2140 "_json.c"
        var $129=HEAP[$kstr]; //@line 2141 "_json.c"
        var $130=($129)==0; //@line 2141 "_json.c"
        if ($130) { __label__ = 74; break; } else { __label__ = 36; break; } //@line 2141 "_json.c"
      case 36: // $bb35
        __label__ = 42; break; //@line 2141 "_json.c"
      case 37: // $bb36
        var $131=HEAP[$skipkeys]; //@line 2144 "_json.c"
        var $132=((($131))|0)!=0; //@line 2144 "_json.c"
        if ($132) { __label__ = 38; break; } else { __label__ = 41; break; } //@line 2144 "_json.c"
      case 38: // $bb37
        var $133=HEAP[$key]; //@line 2145 "_json.c"
        var $134=(($133)&4294967295); //@line 2145 "_json.c"
        var $135=HEAP[$134]; //@line 2145 "_json.c"
        var $136=((($135) - 1)&4294967295); //@line 2145 "_json.c"
        var $137=HEAP[$key]; //@line 2145 "_json.c"
        var $138=(($137)&4294967295); //@line 2145 "_json.c"
        HEAP[$138]=$136; //@line 2145 "_json.c"
        var $139=HEAP[$key]; //@line 2145 "_json.c"
        var $140=(($139)&4294967295); //@line 2145 "_json.c"
        var $141=HEAP[$140]; //@line 2145 "_json.c"
        var $142=((($141))|0)==0; //@line 2145 "_json.c"
        if ($142) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 2145 "_json.c"
      case 39: // $bb38
        var $143=HEAP[$key]; //@line 2145 "_json.c"
        var $144=(($143+4)&4294967295); //@line 2145 "_json.c"
        var $145=HEAP[$144]; //@line 2145 "_json.c"
        var $146=(($145+24)&4294967295); //@line 2145 "_json.c"
        var $147=HEAP[$146]; //@line 2145 "_json.c"
        var $148=HEAP[$key]; //@line 2145 "_json.c"
        FUNCTION_TABLE[$147]($148); //@line 2145 "_json.c"
        __label__ = 40; break; //@line 2145 "_json.c"
      case 40: // $bb39
        __label__ = 62; break; //@line 2145 "_json.c"
      case 41: // $bb40
        var $149=HEAP[_PyExc_TypeError]; //@line 2150 "_json.c"
        _PyErr_SetString($149, ((__str63)&4294967295)); //@line 2150 "_json.c"
        __label__ = 74; break; //@line 2150 "_json.c"
      case 42: // $bb41
        var $150=HEAP[$idx]; //@line 2154 "_json.c"
        var $151=((($150))|0)!=0; //@line 2154 "_json.c"
        if ($151) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 2154 "_json.c"
      case 43: // $bb42
        var $152=HEAP[$s_addr]; //@line 2155 "_json.c"
        var $153=(($152+28)&4294967295); //@line 2155 "_json.c"
        var $154=HEAP[$153]; //@line 2155 "_json.c"
        var $155=HEAP[$rval_addr]; //@line 2155 "_json.c"
        var $156=_PyList_Append($155, $154); //@line 2155 "_json.c"
        var $157=((($156))|0)!=0; //@line 2155 "_json.c"
        if ($157) { __label__ = 74; break; } else { __label__ = 44; break; } //@line 2155 "_json.c"
      case 44: // $bb43
        var $158=HEAP[$dct_addr]; //@line 2159 "_json.c"
        var $159=HEAP[$key]; //@line 2159 "_json.c"
        var $160=_PyObject_GetItem($158, $159); //@line 2159 "_json.c"
        HEAP[$value]=$160; //@line 2159 "_json.c"
        var $161=HEAP[$value]; //@line 2160 "_json.c"
        var $162=($161)==0; //@line 2160 "_json.c"
        if ($162) { __label__ = 74; break; } else { __label__ = 45; break; } //@line 2160 "_json.c"
      case 45: // $bb44
        var $163=HEAP[$s_addr]; //@line 2163 "_json.c"
        var $164=HEAP[$kstr]; //@line 2163 "_json.c"
        var $165=_encoder_encode_string($163, $164); //@line 2163 "_json.c"
        HEAP[$encoded]=$165; //@line 2163 "_json.c"
        var $166=HEAP[$kstr]; //@line 2164 "_json.c"
        var $167=($166)!=0; //@line 2164 "_json.c"
        if ($167) { __label__ = 46; break; } else { __label__ = 48; break; } //@line 2164 "_json.c"
      case 46: // $bb45
        var $168=HEAP[$kstr]; //@line 2164 "_json.c"
        HEAP[$_py_tmp]=$168; //@line 2164 "_json.c"
        HEAP[$kstr]=0; //@line 2164 "_json.c"
        var $169=HEAP[$_py_tmp]; //@line 2164 "_json.c"
        var $170=(($169)&4294967295); //@line 2164 "_json.c"
        var $171=HEAP[$170]; //@line 2164 "_json.c"
        var $172=((($171) - 1)&4294967295); //@line 2164 "_json.c"
        var $173=HEAP[$_py_tmp]; //@line 2164 "_json.c"
        var $174=(($173)&4294967295); //@line 2164 "_json.c"
        HEAP[$174]=$172; //@line 2164 "_json.c"
        var $175=HEAP[$_py_tmp]; //@line 2164 "_json.c"
        var $176=(($175)&4294967295); //@line 2164 "_json.c"
        var $177=HEAP[$176]; //@line 2164 "_json.c"
        var $178=((($177))|0)==0; //@line 2164 "_json.c"
        if ($178) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 2164 "_json.c"
      case 47: // $bb46
        var $179=HEAP[$_py_tmp]; //@line 2164 "_json.c"
        var $180=(($179+4)&4294967295); //@line 2164 "_json.c"
        var $181=HEAP[$180]; //@line 2164 "_json.c"
        var $182=(($181+24)&4294967295); //@line 2164 "_json.c"
        var $183=HEAP[$182]; //@line 2164 "_json.c"
        var $184=HEAP[$_py_tmp]; //@line 2164 "_json.c"
        FUNCTION_TABLE[$183]($184); //@line 2164 "_json.c"
        __label__ = 48; break; //@line 2164 "_json.c"
      case 48: // $bb47
        var $185=HEAP[$encoded]; //@line 2165 "_json.c"
        var $186=($185)==0; //@line 2165 "_json.c"
        if ($186) { __label__ = 74; break; } else { __label__ = 49; break; } //@line 2165 "_json.c"
      case 49: // $bb48
        var $187=HEAP[$rval_addr]; //@line 2167 "_json.c"
        var $188=HEAP[$encoded]; //@line 2167 "_json.c"
        var $189=_PyList_Append($187, $188); //@line 2167 "_json.c"
        var $190=((($189))|0)!=0; //@line 2167 "_json.c"
        if ($190) { __label__ = 50; break; } else { __label__ = 53; break; } //@line 2167 "_json.c"
      case 50: // $bb49
        var $191=HEAP[$encoded]; //@line 2168 "_json.c"
        var $192=(($191)&4294967295); //@line 2168 "_json.c"
        var $193=HEAP[$192]; //@line 2168 "_json.c"
        var $194=((($193) - 1)&4294967295); //@line 2168 "_json.c"
        var $195=HEAP[$encoded]; //@line 2168 "_json.c"
        var $196=(($195)&4294967295); //@line 2168 "_json.c"
        HEAP[$196]=$194; //@line 2168 "_json.c"
        var $197=HEAP[$encoded]; //@line 2168 "_json.c"
        var $198=(($197)&4294967295); //@line 2168 "_json.c"
        var $199=HEAP[$198]; //@line 2168 "_json.c"
        var $200=((($199))|0)==0; //@line 2168 "_json.c"
        if ($200) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 2168 "_json.c"
      case 51: // $bb50
        var $201=HEAP[$encoded]; //@line 2168 "_json.c"
        var $202=(($201+4)&4294967295); //@line 2168 "_json.c"
        var $203=HEAP[$202]; //@line 2168 "_json.c"
        var $204=(($203+24)&4294967295); //@line 2168 "_json.c"
        var $205=HEAP[$204]; //@line 2168 "_json.c"
        var $206=HEAP[$encoded]; //@line 2168 "_json.c"
        FUNCTION_TABLE[$205]($206); //@line 2168 "_json.c"
        __label__ = 52; break; //@line 2168 "_json.c"
      case 52: // $bb51
        __label__ = 74; break; //@line 2168 "_json.c"
      case 53: // $bb52
        var $207=HEAP[$encoded]; //@line 2171 "_json.c"
        var $208=(($207)&4294967295); //@line 2171 "_json.c"
        var $209=HEAP[$208]; //@line 2171 "_json.c"
        var $210=((($209) - 1)&4294967295); //@line 2171 "_json.c"
        var $211=HEAP[$encoded]; //@line 2171 "_json.c"
        var $212=(($211)&4294967295); //@line 2171 "_json.c"
        HEAP[$212]=$210; //@line 2171 "_json.c"
        var $213=HEAP[$encoded]; //@line 2171 "_json.c"
        var $214=(($213)&4294967295); //@line 2171 "_json.c"
        var $215=HEAP[$214]; //@line 2171 "_json.c"
        var $216=((($215))|0)==0; //@line 2171 "_json.c"
        if ($216) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 2171 "_json.c"
      case 54: // $bb53
        var $217=HEAP[$encoded]; //@line 2171 "_json.c"
        var $218=(($217+4)&4294967295); //@line 2171 "_json.c"
        var $219=HEAP[$218]; //@line 2171 "_json.c"
        var $220=(($219+24)&4294967295); //@line 2171 "_json.c"
        var $221=HEAP[$220]; //@line 2171 "_json.c"
        var $222=HEAP[$encoded]; //@line 2171 "_json.c"
        FUNCTION_TABLE[$221]($222); //@line 2171 "_json.c"
        __label__ = 55; break; //@line 2171 "_json.c"
      case 55: // $bb54
        var $223=HEAP[$s_addr]; //@line 2172 "_json.c"
        var $224=(($223+24)&4294967295); //@line 2172 "_json.c"
        var $225=HEAP[$224]; //@line 2172 "_json.c"
        var $226=HEAP[$rval_addr]; //@line 2172 "_json.c"
        var $227=_PyList_Append($226, $225); //@line 2172 "_json.c"
        var $228=((($227))|0)!=0; //@line 2172 "_json.c"
        if ($228) { __label__ = 74; break; } else { __label__ = 56; break; } //@line 2172 "_json.c"
      case 56: // $bb55
        var $229=HEAP[$s_addr]; //@line 2174 "_json.c"
        var $230=HEAP[$rval_addr]; //@line 2174 "_json.c"
        var $231=HEAP[$value]; //@line 2174 "_json.c"
        var $232=HEAP[$indent_level_addr]; //@line 2174 "_json.c"
        var $233=_encoder_listencode_obj($229, $230, $231, $232); //@line 2174 "_json.c"
        var $234=((($233))|0)!=0; //@line 2174 "_json.c"
        if ($234) { __label__ = 74; break; } else { __label__ = 57; break; } //@line 2174 "_json.c"
      case 57: // $bb56
        var $235=HEAP[$idx]; //@line 2176 "_json.c"
        var $236=((($235) + 1)&4294967295); //@line 2176 "_json.c"
        HEAP[$idx]=$236; //@line 2176 "_json.c"
        var $237=HEAP[$value]; //@line 2177 "_json.c"
        var $238=($237)!=0; //@line 2177 "_json.c"
        if ($238) { __label__ = 58; break; } else { __label__ = 60; break; } //@line 2177 "_json.c"
      case 58: // $bb57
        var $239=HEAP[$value]; //@line 2177 "_json.c"
        HEAP[$_py_tmp58]=$239; //@line 2177 "_json.c"
        HEAP[$value]=0; //@line 2177 "_json.c"
        var $240=HEAP[$_py_tmp58]; //@line 2177 "_json.c"
        var $241=(($240)&4294967295); //@line 2177 "_json.c"
        var $242=HEAP[$241]; //@line 2177 "_json.c"
        var $243=((($242) - 1)&4294967295); //@line 2177 "_json.c"
        var $244=HEAP[$_py_tmp58]; //@line 2177 "_json.c"
        var $245=(($244)&4294967295); //@line 2177 "_json.c"
        HEAP[$245]=$243; //@line 2177 "_json.c"
        var $246=HEAP[$_py_tmp58]; //@line 2177 "_json.c"
        var $247=(($246)&4294967295); //@line 2177 "_json.c"
        var $248=HEAP[$247]; //@line 2177 "_json.c"
        var $249=((($248))|0)==0; //@line 2177 "_json.c"
        if ($249) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 2177 "_json.c"
      case 59: // $bb59
        var $250=HEAP[$_py_tmp58]; //@line 2177 "_json.c"
        var $251=(($250+4)&4294967295); //@line 2177 "_json.c"
        var $252=HEAP[$251]; //@line 2177 "_json.c"
        var $253=(($252+24)&4294967295); //@line 2177 "_json.c"
        var $254=HEAP[$253]; //@line 2177 "_json.c"
        var $255=HEAP[$_py_tmp58]; //@line 2177 "_json.c"
        FUNCTION_TABLE[$254]($255); //@line 2177 "_json.c"
        __label__ = 60; break; //@line 2177 "_json.c"
      case 60: // $bb60
        var $256=HEAP[$key]; //@line 2178 "_json.c"
        var $257=(($256)&4294967295); //@line 2178 "_json.c"
        var $258=HEAP[$257]; //@line 2178 "_json.c"
        var $259=((($258) - 1)&4294967295); //@line 2178 "_json.c"
        var $260=HEAP[$key]; //@line 2178 "_json.c"
        var $261=(($260)&4294967295); //@line 2178 "_json.c"
        HEAP[$261]=$259; //@line 2178 "_json.c"
        var $262=HEAP[$key]; //@line 2178 "_json.c"
        var $263=(($262)&4294967295); //@line 2178 "_json.c"
        var $264=HEAP[$263]; //@line 2178 "_json.c"
        var $265=((($264))|0)==0; //@line 2178 "_json.c"
        if ($265) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 2178 "_json.c"
      case 61: // $bb61
        var $266=HEAP[$key]; //@line 2178 "_json.c"
        var $267=(($266+4)&4294967295); //@line 2178 "_json.c"
        var $268=HEAP[$267]; //@line 2178 "_json.c"
        var $269=(($268+24)&4294967295); //@line 2178 "_json.c"
        var $270=HEAP[$269]; //@line 2178 "_json.c"
        var $271=HEAP[$key]; //@line 2178 "_json.c"
        FUNCTION_TABLE[$270]($271); //@line 2178 "_json.c"
        __label__ = 62; break; //@line 2178 "_json.c"
      case 62: // $bb62
        var $272=HEAP[$it]; //@line 2122 "_json.c"
        var $273=_PyIter_Next($272); //@line 2122 "_json.c"
        HEAP[$key]=$273; //@line 2122 "_json.c"
        var $274=HEAP[$key]; //@line 2122 "_json.c"
        var $275=($274)!=0; //@line 2122 "_json.c"
        if ($275) { __label__ = 21; break; } else { __label__ = 63; break; } //@line 2122 "_json.c"
      case 63: // $bb63
        var $276=_PyErr_Occurred(); //@line 2180 "_json.c"
        var $277=($276)!=0; //@line 2180 "_json.c"
        if ($277) { __label__ = 74; break; } else { __label__ = 64; break; } //@line 2180 "_json.c"
      case 64: // $bb64
        var $278=HEAP[$it]; //@line 2182 "_json.c"
        var $279=($278)!=0; //@line 2182 "_json.c"
        if ($279) { __label__ = 65; break; } else { __label__ = 67; break; } //@line 2182 "_json.c"
      case 65: // $bb65
        var $280=HEAP[$it]; //@line 2182 "_json.c"
        HEAP[$_py_tmp66]=$280; //@line 2182 "_json.c"
        HEAP[$it]=0; //@line 2182 "_json.c"
        var $281=HEAP[$_py_tmp66]; //@line 2182 "_json.c"
        var $282=(($281)&4294967295); //@line 2182 "_json.c"
        var $283=HEAP[$282]; //@line 2182 "_json.c"
        var $284=((($283) - 1)&4294967295); //@line 2182 "_json.c"
        var $285=HEAP[$_py_tmp66]; //@line 2182 "_json.c"
        var $286=(($285)&4294967295); //@line 2182 "_json.c"
        HEAP[$286]=$284; //@line 2182 "_json.c"
        var $287=HEAP[$_py_tmp66]; //@line 2182 "_json.c"
        var $288=(($287)&4294967295); //@line 2182 "_json.c"
        var $289=HEAP[$288]; //@line 2182 "_json.c"
        var $290=((($289))|0)==0; //@line 2182 "_json.c"
        if ($290) { __label__ = 66; break; } else { __label__ = 67; break; } //@line 2182 "_json.c"
      case 66: // $bb67
        var $291=HEAP[$_py_tmp66]; //@line 2182 "_json.c"
        var $292=(($291+4)&4294967295); //@line 2182 "_json.c"
        var $293=HEAP[$292]; //@line 2182 "_json.c"
        var $294=(($293+24)&4294967295); //@line 2182 "_json.c"
        var $295=HEAP[$294]; //@line 2182 "_json.c"
        var $296=HEAP[$_py_tmp66]; //@line 2182 "_json.c"
        FUNCTION_TABLE[$295]($296); //@line 2182 "_json.c"
        __label__ = 67; break; //@line 2182 "_json.c"
      case 67: // $bb68
        var $297=HEAP[$ident]; //@line 2184 "_json.c"
        var $298=($297)!=0; //@line 2184 "_json.c"
        if ($298) { __label__ = 68; break; } else { __label__ = 72; break; } //@line 2184 "_json.c"
      case 68: // $bb69
        var $299=HEAP[$s_addr]; //@line 2185 "_json.c"
        var $300=(($299+8)&4294967295); //@line 2185 "_json.c"
        var $301=HEAP[$300]; //@line 2185 "_json.c"
        var $302=HEAP[$ident]; //@line 2185 "_json.c"
        var $303=_PyDict_DelItem($301, $302); //@line 2185 "_json.c"
        var $304=((($303))|0)!=0; //@line 2185 "_json.c"
        if ($304) { __label__ = 74; break; } else { __label__ = 69; break; } //@line 2185 "_json.c"
      case 69: // $bb70
        var $305=HEAP[$ident]; //@line 2187 "_json.c"
        var $306=($305)!=0; //@line 2187 "_json.c"
        if ($306) { __label__ = 70; break; } else { __label__ = 72; break; } //@line 2187 "_json.c"
      case 70: // $bb71
        var $307=HEAP[$ident]; //@line 2187 "_json.c"
        HEAP[$_py_tmp72]=$307; //@line 2187 "_json.c"
        HEAP[$ident]=0; //@line 2187 "_json.c"
        var $308=HEAP[$_py_tmp72]; //@line 2187 "_json.c"
        var $309=(($308)&4294967295); //@line 2187 "_json.c"
        var $310=HEAP[$309]; //@line 2187 "_json.c"
        var $311=((($310) - 1)&4294967295); //@line 2187 "_json.c"
        var $312=HEAP[$_py_tmp72]; //@line 2187 "_json.c"
        var $313=(($312)&4294967295); //@line 2187 "_json.c"
        HEAP[$313]=$311; //@line 2187 "_json.c"
        var $314=HEAP[$_py_tmp72]; //@line 2187 "_json.c"
        var $315=(($314)&4294967295); //@line 2187 "_json.c"
        var $316=HEAP[$315]; //@line 2187 "_json.c"
        var $317=((($316))|0)==0; //@line 2187 "_json.c"
        if ($317) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 2187 "_json.c"
      case 71: // $bb73
        var $318=HEAP[$_py_tmp72]; //@line 2187 "_json.c"
        var $319=(($318+4)&4294967295); //@line 2187 "_json.c"
        var $320=HEAP[$319]; //@line 2187 "_json.c"
        var $321=(($320+24)&4294967295); //@line 2187 "_json.c"
        var $322=HEAP[$321]; //@line 2187 "_json.c"
        var $323=HEAP[$_py_tmp72]; //@line 2187 "_json.c"
        FUNCTION_TABLE[$322]($323); //@line 2187 "_json.c"
        __label__ = 72; break; //@line 2187 "_json.c"
      case 72: // $bb74
        var $324=HEAP[$s_addr]; //@line 2189 "_json.c"
        var $325=(($324+20)&4294967295); //@line 2189 "_json.c"
        var $326=HEAP[$325]; //@line 2189 "_json.c"
        var $327=HEAP[_close_dict_11342]; //@line 2197 "_json.c"
        var $328=HEAP[$rval_addr]; //@line 2197 "_json.c"
        var $329=_PyList_Append($328, $327); //@line 2197 "_json.c"
        var $330=((($329))|0)!=0; //@line 2197 "_json.c"
        if ($330) { __label__ = 74; break; } else { __label__ = 73; break; } //@line 2197 "_json.c"
      case 73: // $bb75
        HEAP[$0]=0; //@line 2199 "_json.c"
        __label__ = 90; break; //@line 2199 "_json.c"
      case 74: // $bail
        var $331=HEAP[$it]; //@line 2202 "_json.c"
        var $332=($331)!=0; //@line 2202 "_json.c"
        if ($332) { __label__ = 75; break; } else { __label__ = 77; break; } //@line 2202 "_json.c"
      case 75: // $bb76
        var $333=HEAP[$it]; //@line 2202 "_json.c"
        var $334=(($333)&4294967295); //@line 2202 "_json.c"
        var $335=HEAP[$334]; //@line 2202 "_json.c"
        var $336=((($335) - 1)&4294967295); //@line 2202 "_json.c"
        var $337=HEAP[$it]; //@line 2202 "_json.c"
        var $338=(($337)&4294967295); //@line 2202 "_json.c"
        HEAP[$338]=$336; //@line 2202 "_json.c"
        var $339=HEAP[$it]; //@line 2202 "_json.c"
        var $340=(($339)&4294967295); //@line 2202 "_json.c"
        var $341=HEAP[$340]; //@line 2202 "_json.c"
        var $342=((($341))|0)==0; //@line 2202 "_json.c"
        if ($342) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 2202 "_json.c"
      case 76: // $bb77
        var $343=HEAP[$it]; //@line 2202 "_json.c"
        var $344=(($343+4)&4294967295); //@line 2202 "_json.c"
        var $345=HEAP[$344]; //@line 2202 "_json.c"
        var $346=(($345+24)&4294967295); //@line 2202 "_json.c"
        var $347=HEAP[$346]; //@line 2202 "_json.c"
        var $348=HEAP[$it]; //@line 2202 "_json.c"
        FUNCTION_TABLE[$347]($348); //@line 2202 "_json.c"
        __label__ = 77; break; //@line 2202 "_json.c"
      case 77: // $bb78
        var $349=HEAP[$key]; //@line 2203 "_json.c"
        var $350=($349)!=0; //@line 2203 "_json.c"
        if ($350) { __label__ = 78; break; } else { __label__ = 80; break; } //@line 2203 "_json.c"
      case 78: // $bb79
        var $351=HEAP[$key]; //@line 2203 "_json.c"
        var $352=(($351)&4294967295); //@line 2203 "_json.c"
        var $353=HEAP[$352]; //@line 2203 "_json.c"
        var $354=((($353) - 1)&4294967295); //@line 2203 "_json.c"
        var $355=HEAP[$key]; //@line 2203 "_json.c"
        var $356=(($355)&4294967295); //@line 2203 "_json.c"
        HEAP[$356]=$354; //@line 2203 "_json.c"
        var $357=HEAP[$key]; //@line 2203 "_json.c"
        var $358=(($357)&4294967295); //@line 2203 "_json.c"
        var $359=HEAP[$358]; //@line 2203 "_json.c"
        var $360=((($359))|0)==0; //@line 2203 "_json.c"
        if ($360) { __label__ = 79; break; } else { __label__ = 80; break; } //@line 2203 "_json.c"
      case 79: // $bb80
        var $361=HEAP[$key]; //@line 2203 "_json.c"
        var $362=(($361+4)&4294967295); //@line 2203 "_json.c"
        var $363=HEAP[$362]; //@line 2203 "_json.c"
        var $364=(($363+24)&4294967295); //@line 2203 "_json.c"
        var $365=HEAP[$364]; //@line 2203 "_json.c"
        var $366=HEAP[$key]; //@line 2203 "_json.c"
        FUNCTION_TABLE[$365]($366); //@line 2203 "_json.c"
        __label__ = 80; break; //@line 2203 "_json.c"
      case 80: // $bb81
        var $367=HEAP[$value]; //@line 2204 "_json.c"
        var $368=($367)!=0; //@line 2204 "_json.c"
        if ($368) { __label__ = 81; break; } else { __label__ = 83; break; } //@line 2204 "_json.c"
      case 81: // $bb82
        var $369=HEAP[$value]; //@line 2204 "_json.c"
        var $370=(($369)&4294967295); //@line 2204 "_json.c"
        var $371=HEAP[$370]; //@line 2204 "_json.c"
        var $372=((($371) - 1)&4294967295); //@line 2204 "_json.c"
        var $373=HEAP[$value]; //@line 2204 "_json.c"
        var $374=(($373)&4294967295); //@line 2204 "_json.c"
        HEAP[$374]=$372; //@line 2204 "_json.c"
        var $375=HEAP[$value]; //@line 2204 "_json.c"
        var $376=(($375)&4294967295); //@line 2204 "_json.c"
        var $377=HEAP[$376]; //@line 2204 "_json.c"
        var $378=((($377))|0)==0; //@line 2204 "_json.c"
        if ($378) { __label__ = 82; break; } else { __label__ = 83; break; } //@line 2204 "_json.c"
      case 82: // $bb83
        var $379=HEAP[$value]; //@line 2204 "_json.c"
        var $380=(($379+4)&4294967295); //@line 2204 "_json.c"
        var $381=HEAP[$380]; //@line 2204 "_json.c"
        var $382=(($381+24)&4294967295); //@line 2204 "_json.c"
        var $383=HEAP[$382]; //@line 2204 "_json.c"
        var $384=HEAP[$value]; //@line 2204 "_json.c"
        FUNCTION_TABLE[$383]($384); //@line 2204 "_json.c"
        __label__ = 83; break; //@line 2204 "_json.c"
      case 83: // $bb84
        var $385=HEAP[$kstr]; //@line 2205 "_json.c"
        var $386=($385)!=0; //@line 2205 "_json.c"
        if ($386) { __label__ = 84; break; } else { __label__ = 86; break; } //@line 2205 "_json.c"
      case 84: // $bb85
        var $387=HEAP[$kstr]; //@line 2205 "_json.c"
        var $388=(($387)&4294967295); //@line 2205 "_json.c"
        var $389=HEAP[$388]; //@line 2205 "_json.c"
        var $390=((($389) - 1)&4294967295); //@line 2205 "_json.c"
        var $391=HEAP[$kstr]; //@line 2205 "_json.c"
        var $392=(($391)&4294967295); //@line 2205 "_json.c"
        HEAP[$392]=$390; //@line 2205 "_json.c"
        var $393=HEAP[$kstr]; //@line 2205 "_json.c"
        var $394=(($393)&4294967295); //@line 2205 "_json.c"
        var $395=HEAP[$394]; //@line 2205 "_json.c"
        var $396=((($395))|0)==0; //@line 2205 "_json.c"
        if ($396) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 2205 "_json.c"
      case 85: // $bb86
        var $397=HEAP[$kstr]; //@line 2205 "_json.c"
        var $398=(($397+4)&4294967295); //@line 2205 "_json.c"
        var $399=HEAP[$398]; //@line 2205 "_json.c"
        var $400=(($399+24)&4294967295); //@line 2205 "_json.c"
        var $401=HEAP[$400]; //@line 2205 "_json.c"
        var $402=HEAP[$kstr]; //@line 2205 "_json.c"
        FUNCTION_TABLE[$401]($402); //@line 2205 "_json.c"
        __label__ = 86; break; //@line 2205 "_json.c"
      case 86: // $bb87
        var $403=HEAP[$ident]; //@line 2206 "_json.c"
        var $404=($403)!=0; //@line 2206 "_json.c"
        if ($404) { __label__ = 87; break; } else { __label__ = 89; break; } //@line 2206 "_json.c"
      case 87: // $bb88
        var $405=HEAP[$ident]; //@line 2206 "_json.c"
        var $406=(($405)&4294967295); //@line 2206 "_json.c"
        var $407=HEAP[$406]; //@line 2206 "_json.c"
        var $408=((($407) - 1)&4294967295); //@line 2206 "_json.c"
        var $409=HEAP[$ident]; //@line 2206 "_json.c"
        var $410=(($409)&4294967295); //@line 2206 "_json.c"
        HEAP[$410]=$408; //@line 2206 "_json.c"
        var $411=HEAP[$ident]; //@line 2206 "_json.c"
        var $412=(($411)&4294967295); //@line 2206 "_json.c"
        var $413=HEAP[$412]; //@line 2206 "_json.c"
        var $414=((($413))|0)==0; //@line 2206 "_json.c"
        if ($414) { __label__ = 88; break; } else { __label__ = 89; break; } //@line 2206 "_json.c"
      case 88: // $bb89
        var $415=HEAP[$ident]; //@line 2206 "_json.c"
        var $416=(($415+4)&4294967295); //@line 2206 "_json.c"
        var $417=HEAP[$416]; //@line 2206 "_json.c"
        var $418=(($417+24)&4294967295); //@line 2206 "_json.c"
        var $419=HEAP[$418]; //@line 2206 "_json.c"
        var $420=HEAP[$ident]; //@line 2206 "_json.c"
        FUNCTION_TABLE[$419]($420); //@line 2206 "_json.c"
        __label__ = 89; break; //@line 2206 "_json.c"
      case 89: // $bb90
        HEAP[$0]=-1; //@line 2207 "_json.c"
        __label__ = 90; break; //@line 2207 "_json.c"
      case 90: // $bb91
        var $421=HEAP[$0]; //@line 2081 "_json.c"
        HEAP[$retval]=$421; //@line 2081 "_json.c"
        __label__ = 91; break; //@line 2081 "_json.c"
      case 91: // $return
        var $retval92=HEAP[$retval]; //@line 2081 "_json.c"
        STACKTOP = __stackBase__;
        return $retval92; //@line 2081 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_listencode_list($s, $rval, $seq, $indent_level) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $rval_addr=__stackBase__+4;
        var $seq_addr=__stackBase__+8;
        var $indent_level_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $iftmp_196=__stackBase__+20;
        var $0=__stackBase__+24;
        var $ident=__stackBase__+28;
        var $s_fast=__stackBase__+32;
        var $num_items=__stackBase__+36;
        var $seq_items=__stackBase__+40;
        var $i=__stackBase__+44;
        var $has_key=__stackBase__+48;
        var $obj=__stackBase__+52;
        var $_py_tmp=__stackBase__+56;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$rval_addr]=$rval;
        HEAP[$seq_addr]=$seq;
        HEAP[$indent_level_addr]=$indent_level;
        HEAP[$ident]=0; //@line 2218 "_json.c"
        HEAP[$s_fast]=0; //@line 2219 "_json.c"
        var $1=HEAP[_open_array_11600]; //@line 2224 "_json.c"
        var $2=($1)==0; //@line 2224 "_json.c"
        if ($2) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2224 "_json.c"
      case 1: // $bb
        var $3=HEAP[_close_array_11601]; //@line 2224 "_json.c"
        var $4=($3)==0; //@line 2224 "_json.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2224 "_json.c"
      case 2: // $bb1
        var $5=HEAP[_empty_array_11602]; //@line 2224 "_json.c"
        var $6=($5)==0; //@line 2224 "_json.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 2224 "_json.c"
      case 3: // $bb2
        var $7=_PyString_InternFromString(((__str64)&4294967295)); //@line 2225 "_json.c"
        HEAP[_open_array_11600]=$7; //@line 2225 "_json.c"
        var $8=_PyString_InternFromString(((__str65)&4294967295)); //@line 2226 "_json.c"
        HEAP[_close_array_11601]=$8; //@line 2226 "_json.c"
        var $9=_PyString_InternFromString(((__str66)&4294967295)); //@line 2227 "_json.c"
        HEAP[_empty_array_11602]=$9; //@line 2227 "_json.c"
        var $10=HEAP[_open_array_11600]; //@line 2228 "_json.c"
        var $11=($10)==0; //@line 2228 "_json.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2228 "_json.c"
      case 4: // $bb3
        var $12=HEAP[_close_array_11601]; //@line 2228 "_json.c"
        var $13=($12)==0; //@line 2228 "_json.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2228 "_json.c"
      case 5: // $bb4
        var $14=HEAP[_empty_array_11602]; //@line 2228 "_json.c"
        var $15=($14)==0; //@line 2228 "_json.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2228 "_json.c"
      case 6: // $bb5
        HEAP[$0]=-1; //@line 2229 "_json.c"
        __label__ = 47; break; //@line 2229 "_json.c"
      case 7: // $bb6
        HEAP[$ident]=0; //@line 2231 "_json.c"
        var $16=HEAP[$seq_addr]; //@line 2232 "_json.c"
        var $17=_PySequence_Fast($16, ((__str67)&4294967295)); //@line 2232 "_json.c"
        HEAP[$s_fast]=$17; //@line 2232 "_json.c"
        var $18=HEAP[$s_fast]; //@line 2233 "_json.c"
        var $19=($18)==0; //@line 2233 "_json.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2233 "_json.c"
      case 8: // $bb7
        HEAP[$0]=-1; //@line 2234 "_json.c"
        __label__ = 47; break; //@line 2234 "_json.c"
      case 9: // $bb8
        var $20=HEAP[$s_fast]; //@line 2235 "_json.c"
        var $21=$20; //@line 2235 "_json.c"
        var $22=(($21+8)&4294967295); //@line 2235 "_json.c"
        var $23=HEAP[$22]; //@line 2235 "_json.c"
        HEAP[$num_items]=$23; //@line 2235 "_json.c"
        var $24=HEAP[$num_items]; //@line 2236 "_json.c"
        var $25=((($24))|0)==0; //@line 2236 "_json.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 2236 "_json.c"
      case 10: // $bb9
        var $26=HEAP[$s_fast]; //@line 2237 "_json.c"
        var $27=(($26)&4294967295); //@line 2237 "_json.c"
        var $28=HEAP[$27]; //@line 2237 "_json.c"
        var $29=((($28) - 1)&4294967295); //@line 2237 "_json.c"
        var $30=HEAP[$s_fast]; //@line 2237 "_json.c"
        var $31=(($30)&4294967295); //@line 2237 "_json.c"
        HEAP[$31]=$29; //@line 2237 "_json.c"
        var $32=HEAP[$s_fast]; //@line 2237 "_json.c"
        var $33=(($32)&4294967295); //@line 2237 "_json.c"
        var $34=HEAP[$33]; //@line 2237 "_json.c"
        var $35=((($34))|0)==0; //@line 2237 "_json.c"
        if ($35) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2237 "_json.c"
      case 11: // $bb10
        var $36=HEAP[$s_fast]; //@line 2237 "_json.c"
        var $37=(($36+4)&4294967295); //@line 2237 "_json.c"
        var $38=HEAP[$37]; //@line 2237 "_json.c"
        var $39=(($38+24)&4294967295); //@line 2237 "_json.c"
        var $40=HEAP[$39]; //@line 2237 "_json.c"
        var $41=HEAP[$s_fast]; //@line 2237 "_json.c"
        FUNCTION_TABLE[$40]($41); //@line 2237 "_json.c"
        __label__ = 12; break; //@line 2237 "_json.c"
      case 12: // $bb11
        var $42=HEAP[_empty_array_11602]; //@line 2238 "_json.c"
        var $43=HEAP[$rval_addr]; //@line 2238 "_json.c"
        var $44=_PyList_Append($43, $42); //@line 2238 "_json.c"
        HEAP[$0]=$44; //@line 2238 "_json.c"
        __label__ = 47; break; //@line 2238 "_json.c"
      case 13: // $bb12
        var $45=HEAP[$s_addr]; //@line 2241 "_json.c"
        var $46=(($45+8)&4294967295); //@line 2241 "_json.c"
        var $47=HEAP[$46]; //@line 2241 "_json.c"
        var $48=($47)!=(__Py_NoneStruct); //@line 2241 "_json.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 20; break; } //@line 2241 "_json.c"
      case 14: // $bb13
        var $49=HEAP[$seq_addr]; //@line 2243 "_json.c"
        var $50=$49; //@line 2243 "_json.c"
        var $51=_PyLong_FromVoidPtr($50); //@line 2243 "_json.c"
        HEAP[$ident]=$51; //@line 2243 "_json.c"
        var $52=HEAP[$ident]; //@line 2244 "_json.c"
        var $53=($52)==0; //@line 2244 "_json.c"
        if ($53) { __label__ = 41; break; } else { __label__ = 15; break; } //@line 2244 "_json.c"
      case 15: // $bb14
        var $54=HEAP[$s_addr]; //@line 2246 "_json.c"
        var $55=(($54+8)&4294967295); //@line 2246 "_json.c"
        var $56=HEAP[$55]; //@line 2246 "_json.c"
        var $57=HEAP[$ident]; //@line 2246 "_json.c"
        var $58=_PyDict_Contains($56, $57); //@line 2246 "_json.c"
        HEAP[$has_key]=$58; //@line 2246 "_json.c"
        var $59=HEAP[$has_key]; //@line 2247 "_json.c"
        var $60=((($59))|0)!=0; //@line 2247 "_json.c"
        if ($60) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 2247 "_json.c"
      case 16: // $bb15
        var $61=HEAP[$has_key]; //@line 2248 "_json.c"
        var $62=((($61))|0)!=-1; //@line 2248 "_json.c"
        if ($62) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2248 "_json.c"
      case 17: // $bb16
        var $63=HEAP[_PyExc_ValueError]; //@line 2249 "_json.c"
        _PyErr_SetString($63, ((__str59)&4294967295)); //@line 2249 "_json.c"
        __label__ = 18; break; //@line 2249 "_json.c"
      case 18: // $bb17
        __label__ = 41; break; //@line 2249 "_json.c"
      case 19: // $bb18
        var $64=HEAP[$s_addr]; //@line 2252 "_json.c"
        var $65=(($64+8)&4294967295); //@line 2252 "_json.c"
        var $66=HEAP[$65]; //@line 2252 "_json.c"
        var $67=HEAP[$ident]; //@line 2252 "_json.c"
        var $68=HEAP[$seq_addr]; //@line 2252 "_json.c"
        var $69=_PyDict_SetItem($66, $67, $68); //@line 2252 "_json.c"
        var $70=((($69))|0)!=0; //@line 2252 "_json.c"
        if ($70) { __label__ = 41; break; } else { __label__ = 20; break; } //@line 2252 "_json.c"
      case 20: // $bb19
        var $71=HEAP[$s_fast]; //@line 2257 "_json.c"
        var $72=(($71+4)&4294967295); //@line 2257 "_json.c"
        var $73=HEAP[$72]; //@line 2257 "_json.c"
        var $74=(($73+84)&4294967295); //@line 2257 "_json.c"
        var $75=HEAP[$74]; //@line 2257 "_json.c"
        var $76=($75) & 33554432; //@line 2257 "_json.c"
        var $77=((($76))|0)!=0; //@line 2257 "_json.c"
        if ($77) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 2257 "_json.c"
      case 21: // $bb20
        var $78=HEAP[$s_fast]; //@line 2257 "_json.c"
        var $79=$78; //@line 2257 "_json.c"
        var $80=(($79+12)&4294967295); //@line 2257 "_json.c"
        var $81=HEAP[$80]; //@line 2257 "_json.c"
        HEAP[$iftmp_196]=$81; //@line 2257 "_json.c"
        __label__ = 23; break; //@line 2257 "_json.c"
      case 22: // $bb21
        var $82=HEAP[$s_fast]; //@line 2257 "_json.c"
        var $83=$82; //@line 2257 "_json.c"
        var $84=(($83+12)&4294967295); //@line 2257 "_json.c"
        var $85=(($84)&4294967295); //@line 2257 "_json.c"
        HEAP[$iftmp_196]=$85; //@line 2257 "_json.c"
        __label__ = 23; break; //@line 2257 "_json.c"
      case 23: // $bb22
        var $86=HEAP[$iftmp_196]; //@line 2257 "_json.c"
        HEAP[$seq_items]=$86; //@line 2257 "_json.c"
        var $87=HEAP[_open_array_11600]; //@line 2258 "_json.c"
        var $88=HEAP[$rval_addr]; //@line 2258 "_json.c"
        var $89=_PyList_Append($88, $87); //@line 2258 "_json.c"
        var $90=((($89))|0)!=0; //@line 2258 "_json.c"
        if ($90) { __label__ = 41; break; } else { __label__ = 24; break; } //@line 2258 "_json.c"
      case 24: // $bb23
        var $91=HEAP[$s_addr]; //@line 2260 "_json.c"
        var $92=(($91+20)&4294967295); //@line 2260 "_json.c"
        var $93=HEAP[$92]; //@line 2260 "_json.c"
        var $94=($93)!=(__Py_NoneStruct); //@line 2260 "_json.c"
        if ($94) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 2260 "_json.c"
      case 25: // $bb24
        var $95=HEAP[$indent_level_addr]; //@line 2262 "_json.c"
        var $96=((($95) + 1)&4294967295); //@line 2262 "_json.c"
        HEAP[$indent_level_addr]=$96; //@line 2262 "_json.c"
        __label__ = 26; break; //@line 2262 "_json.c"
      case 26: // $bb25
        HEAP[$i]=0; //@line 2269 "_json.c"
        __label__ = 31; break; //@line 2269 "_json.c"
      case 27: // $bb26
        var $97=HEAP[$seq_items]; //@line 2270 "_json.c"
        var $98=HEAP[$i]; //@line 2270 "_json.c"
        var $99=(($97+4*$98)&4294967295); //@line 2270 "_json.c"
        var $100=HEAP[$99]; //@line 2270 "_json.c"
        HEAP[$obj]=$100; //@line 2270 "_json.c"
        var $101=HEAP[$i]; //@line 2271 "_json.c"
        var $102=((($101))|0)!=0; //@line 2271 "_json.c"
        if ($102) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 2271 "_json.c"
      case 28: // $bb27
        var $103=HEAP[$s_addr]; //@line 2272 "_json.c"
        var $104=(($103+28)&4294967295); //@line 2272 "_json.c"
        var $105=HEAP[$104]; //@line 2272 "_json.c"
        var $106=HEAP[$rval_addr]; //@line 2272 "_json.c"
        var $107=_PyList_Append($106, $105); //@line 2272 "_json.c"
        var $108=((($107))|0)!=0; //@line 2272 "_json.c"
        if ($108) { __label__ = 41; break; } else { __label__ = 29; break; } //@line 2272 "_json.c"
      case 29: // $bb28
        var $109=HEAP[$s_addr]; //@line 2275 "_json.c"
        var $110=HEAP[$rval_addr]; //@line 2275 "_json.c"
        var $111=HEAP[$obj]; //@line 2275 "_json.c"
        var $112=HEAP[$indent_level_addr]; //@line 2275 "_json.c"
        var $113=_encoder_listencode_obj($109, $110, $111, $112); //@line 2275 "_json.c"
        var $114=((($113))|0)!=0; //@line 2275 "_json.c"
        if ($114) { __label__ = 41; break; } else { __label__ = 30; break; } //@line 2275 "_json.c"
      case 30: // $bb29
        var $115=HEAP[$i]; //@line 2269 "_json.c"
        var $116=((($115) + 1)&4294967295); //@line 2269 "_json.c"
        HEAP[$i]=$116; //@line 2269 "_json.c"
        __label__ = 31; break; //@line 2269 "_json.c"
      case 31: // $bb30
        var $117=HEAP[$i]; //@line 2269 "_json.c"
        var $118=HEAP[$num_items]; //@line 2269 "_json.c"
        var $119=((($117))|0) < ((($118))|0); //@line 2269 "_json.c"
        if ($119) { __label__ = 27; break; } else { __label__ = 32; break; } //@line 2269 "_json.c"
      case 32: // $bb31
        var $120=HEAP[$ident]; //@line 2278 "_json.c"
        var $121=($120)!=0; //@line 2278 "_json.c"
        if ($121) { __label__ = 33; break; } else { __label__ = 37; break; } //@line 2278 "_json.c"
      case 33: // $bb32
        var $122=HEAP[$s_addr]; //@line 2279 "_json.c"
        var $123=(($122+8)&4294967295); //@line 2279 "_json.c"
        var $124=HEAP[$123]; //@line 2279 "_json.c"
        var $125=HEAP[$ident]; //@line 2279 "_json.c"
        var $126=_PyDict_DelItem($124, $125); //@line 2279 "_json.c"
        var $127=((($126))|0)!=0; //@line 2279 "_json.c"
        if ($127) { __label__ = 41; break; } else { __label__ = 34; break; } //@line 2279 "_json.c"
      case 34: // $bb33
        var $128=HEAP[$ident]; //@line 2281 "_json.c"
        var $129=($128)!=0; //@line 2281 "_json.c"
        if ($129) { __label__ = 35; break; } else { __label__ = 37; break; } //@line 2281 "_json.c"
      case 35: // $bb34
        var $130=HEAP[$ident]; //@line 2281 "_json.c"
        HEAP[$_py_tmp]=$130; //@line 2281 "_json.c"
        HEAP[$ident]=0; //@line 2281 "_json.c"
        var $131=HEAP[$_py_tmp]; //@line 2281 "_json.c"
        var $132=(($131)&4294967295); //@line 2281 "_json.c"
        var $133=HEAP[$132]; //@line 2281 "_json.c"
        var $134=((($133) - 1)&4294967295); //@line 2281 "_json.c"
        var $135=HEAP[$_py_tmp]; //@line 2281 "_json.c"
        var $136=(($135)&4294967295); //@line 2281 "_json.c"
        HEAP[$136]=$134; //@line 2281 "_json.c"
        var $137=HEAP[$_py_tmp]; //@line 2281 "_json.c"
        var $138=(($137)&4294967295); //@line 2281 "_json.c"
        var $139=HEAP[$138]; //@line 2281 "_json.c"
        var $140=((($139))|0)==0; //@line 2281 "_json.c"
        if ($140) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 2281 "_json.c"
      case 36: // $bb35
        var $141=HEAP[$_py_tmp]; //@line 2281 "_json.c"
        var $142=(($141+4)&4294967295); //@line 2281 "_json.c"
        var $143=HEAP[$142]; //@line 2281 "_json.c"
        var $144=(($143+24)&4294967295); //@line 2281 "_json.c"
        var $145=HEAP[$144]; //@line 2281 "_json.c"
        var $146=HEAP[$_py_tmp]; //@line 2281 "_json.c"
        FUNCTION_TABLE[$145]($146); //@line 2281 "_json.c"
        __label__ = 37; break; //@line 2281 "_json.c"
      case 37: // $bb36
        var $147=HEAP[$s_addr]; //@line 2283 "_json.c"
        var $148=(($147+20)&4294967295); //@line 2283 "_json.c"
        var $149=HEAP[$148]; //@line 2283 "_json.c"
        var $150=HEAP[_close_array_11601]; //@line 2291 "_json.c"
        var $151=HEAP[$rval_addr]; //@line 2291 "_json.c"
        var $152=_PyList_Append($151, $150); //@line 2291 "_json.c"
        var $153=((($152))|0)!=0; //@line 2291 "_json.c"
        if ($153) { __label__ = 41; break; } else { __label__ = 38; break; } //@line 2291 "_json.c"
      case 38: // $bb37
        var $154=HEAP[$s_fast]; //@line 2293 "_json.c"
        var $155=(($154)&4294967295); //@line 2293 "_json.c"
        var $156=HEAP[$155]; //@line 2293 "_json.c"
        var $157=((($156) - 1)&4294967295); //@line 2293 "_json.c"
        var $158=HEAP[$s_fast]; //@line 2293 "_json.c"
        var $159=(($158)&4294967295); //@line 2293 "_json.c"
        HEAP[$159]=$157; //@line 2293 "_json.c"
        var $160=HEAP[$s_fast]; //@line 2293 "_json.c"
        var $161=(($160)&4294967295); //@line 2293 "_json.c"
        var $162=HEAP[$161]; //@line 2293 "_json.c"
        var $163=((($162))|0)==0; //@line 2293 "_json.c"
        if ($163) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 2293 "_json.c"
      case 39: // $bb38
        var $164=HEAP[$s_fast]; //@line 2293 "_json.c"
        var $165=(($164+4)&4294967295); //@line 2293 "_json.c"
        var $166=HEAP[$165]; //@line 2293 "_json.c"
        var $167=(($166+24)&4294967295); //@line 2293 "_json.c"
        var $168=HEAP[$167]; //@line 2293 "_json.c"
        var $169=HEAP[$s_fast]; //@line 2293 "_json.c"
        FUNCTION_TABLE[$168]($169); //@line 2293 "_json.c"
        __label__ = 40; break; //@line 2293 "_json.c"
      case 40: // $bb39
        HEAP[$0]=0; //@line 2294 "_json.c"
        __label__ = 47; break; //@line 2294 "_json.c"
      case 41: // $bail
        var $170=HEAP[$ident]; //@line 2297 "_json.c"
        var $171=($170)!=0; //@line 2297 "_json.c"
        if ($171) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 2297 "_json.c"
      case 42: // $bb40
        var $172=HEAP[$ident]; //@line 2297 "_json.c"
        var $173=(($172)&4294967295); //@line 2297 "_json.c"
        var $174=HEAP[$173]; //@line 2297 "_json.c"
        var $175=((($174) - 1)&4294967295); //@line 2297 "_json.c"
        var $176=HEAP[$ident]; //@line 2297 "_json.c"
        var $177=(($176)&4294967295); //@line 2297 "_json.c"
        HEAP[$177]=$175; //@line 2297 "_json.c"
        var $178=HEAP[$ident]; //@line 2297 "_json.c"
        var $179=(($178)&4294967295); //@line 2297 "_json.c"
        var $180=HEAP[$179]; //@line 2297 "_json.c"
        var $181=((($180))|0)==0; //@line 2297 "_json.c"
        if ($181) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 2297 "_json.c"
      case 43: // $bb41
        var $182=HEAP[$ident]; //@line 2297 "_json.c"
        var $183=(($182+4)&4294967295); //@line 2297 "_json.c"
        var $184=HEAP[$183]; //@line 2297 "_json.c"
        var $185=(($184+24)&4294967295); //@line 2297 "_json.c"
        var $186=HEAP[$185]; //@line 2297 "_json.c"
        var $187=HEAP[$ident]; //@line 2297 "_json.c"
        FUNCTION_TABLE[$186]($187); //@line 2297 "_json.c"
        __label__ = 44; break; //@line 2297 "_json.c"
      case 44: // $bb42
        var $188=HEAP[$s_fast]; //@line 2298 "_json.c"
        var $189=(($188)&4294967295); //@line 2298 "_json.c"
        var $190=HEAP[$189]; //@line 2298 "_json.c"
        var $191=((($190) - 1)&4294967295); //@line 2298 "_json.c"
        var $192=HEAP[$s_fast]; //@line 2298 "_json.c"
        var $193=(($192)&4294967295); //@line 2298 "_json.c"
        HEAP[$193]=$191; //@line 2298 "_json.c"
        var $194=HEAP[$s_fast]; //@line 2298 "_json.c"
        var $195=(($194)&4294967295); //@line 2298 "_json.c"
        var $196=HEAP[$195]; //@line 2298 "_json.c"
        var $197=((($196))|0)==0; //@line 2298 "_json.c"
        if ($197) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 2298 "_json.c"
      case 45: // $bb43
        var $198=HEAP[$s_fast]; //@line 2298 "_json.c"
        var $199=(($198+4)&4294967295); //@line 2298 "_json.c"
        var $200=HEAP[$199]; //@line 2298 "_json.c"
        var $201=(($200+24)&4294967295); //@line 2298 "_json.c"
        var $202=HEAP[$201]; //@line 2298 "_json.c"
        var $203=HEAP[$s_fast]; //@line 2298 "_json.c"
        FUNCTION_TABLE[$202]($203); //@line 2298 "_json.c"
        __label__ = 46; break; //@line 2298 "_json.c"
      case 46: // $bb44
        HEAP[$0]=-1; //@line 2299 "_json.c"
        __label__ = 47; break; //@line 2299 "_json.c"
      case 47: // $bb45
        var $204=HEAP[$0]; //@line 2229 "_json.c"
        HEAP[$retval]=$204; //@line 2229 "_json.c"
        __label__ = 48; break; //@line 2229 "_json.c"
      case 48: // $return
        var $retval46=HEAP[$retval]; //@line 2229 "_json.c"
        STACKTOP = __stackBase__;
        return $retval46; //@line 2229 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 2306 "_json.c"
        var $1=_encoder_clear($0); //@line 2306 "_json.c"
        var $2=HEAP[$self_addr]; //@line 2307 "_json.c"
        var $3=(($2+4)&4294967295); //@line 2307 "_json.c"
        var $4=HEAP[$3]; //@line 2307 "_json.c"
        var $5=(($4+160)&4294967295); //@line 2307 "_json.c"
        var $6=HEAP[$5]; //@line 2307 "_json.c"
        var $7=HEAP[$self_addr]; //@line 2307 "_json.c"
        var $8=$7; //@line 2307 "_json.c"
        FUNCTION_TABLE[$6]($8); //@line 2307 "_json.c"
        __label__ = 1; break; //@line 2308 "_json.c"
      case 1: // $return
        STACKTOP = __stackBase__;
        return; //@line 2308 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_traverse($self, $visit, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $visit_addr=__stackBase__+4;
        var $arg_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $s=__stackBase__+20;
        var $vret=__stackBase__+24;
        var $vret7=__stackBase__+28;
        var $vret11=__stackBase__+32;
        var $vret15=__stackBase__+36;
        var $vret19=__stackBase__+40;
        var $vret23=__stackBase__+44;
        var $vret27=__stackBase__+48;
        var $vret31=__stackBase__+52;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$visit_addr]=$visit;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$self_addr]; //@line 2314 "_json.c"
        var $2=(($1+4)&4294967295); //@line 2314 "_json.c"
        var $3=HEAP[$2]; //@line 2314 "_json.c"
        var $4=($3)!=(_PyEncoderType); //@line 2314 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2314 "_json.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 2314 "_json.c"
        var $6=(($5+4)&4294967295); //@line 2314 "_json.c"
        var $7=HEAP[$6]; //@line 2314 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyEncoderType); //@line 2314 "_json.c"
        var $9=((($8))|0)==0; //@line 2314 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2314 "_json.c"
      case 2: // $bb1
        ___assert_fail(((__str47)&4294967295), ((__str29)&4294967295), 2314, ((___PRETTY_FUNCTION___11738)&4294967295)); //@line 2314 "_json.c"
        throw "Reached an unreachable! Original .ll line: 11161"; //@line 2314 "_json.c"
      case 3: // $bb2
        var $10=HEAP[$self_addr]; //@line 2315 "_json.c"
        var $11=$10; //@line 2315 "_json.c"
        HEAP[$s]=$11; //@line 2315 "_json.c"
        var $12=HEAP[$s]; //@line 2316 "_json.c"
        var $13=(($12+8)&4294967295); //@line 2316 "_json.c"
        var $14=HEAP[$13]; //@line 2316 "_json.c"
        var $15=($14)!=0; //@line 2316 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2316 "_json.c"
      case 4: // $bb3
        var $16=HEAP[$s]; //@line 2316 "_json.c"
        var $17=(($16+8)&4294967295); //@line 2316 "_json.c"
        var $18=HEAP[$17]; //@line 2316 "_json.c"
        var $19=HEAP[$visit_addr]; //@line 2316 "_json.c"
        var $20=HEAP[$arg_addr]; //@line 2316 "_json.c"
        var $21=FUNCTION_TABLE[$19]($18, $20); //@line 2316 "_json.c"
        HEAP[$vret]=$21; //@line 2316 "_json.c"
        var $22=HEAP[$vret]; //@line 2316 "_json.c"
        var $23=((($22))|0)!=0; //@line 2316 "_json.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2316 "_json.c"
      case 5: // $bb4
        var $24=HEAP[$vret]; //@line 2316 "_json.c"
        HEAP[$0]=$24; //@line 2316 "_json.c"
        __label__ = 28; break; //@line 2316 "_json.c"
      case 6: // $bb5
        var $25=HEAP[$s]; //@line 2317 "_json.c"
        var $26=(($25+12)&4294967295); //@line 2317 "_json.c"
        var $27=HEAP[$26]; //@line 2317 "_json.c"
        var $28=($27)!=0; //@line 2317 "_json.c"
        if ($28) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2317 "_json.c"
      case 7: // $bb6
        var $29=HEAP[$s]; //@line 2317 "_json.c"
        var $30=(($29+12)&4294967295); //@line 2317 "_json.c"
        var $31=HEAP[$30]; //@line 2317 "_json.c"
        var $32=HEAP[$visit_addr]; //@line 2317 "_json.c"
        var $33=HEAP[$arg_addr]; //@line 2317 "_json.c"
        var $34=FUNCTION_TABLE[$32]($31, $33); //@line 2317 "_json.c"
        HEAP[$vret7]=$34; //@line 2317 "_json.c"
        var $35=HEAP[$vret7]; //@line 2317 "_json.c"
        var $36=((($35))|0)!=0; //@line 2317 "_json.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2317 "_json.c"
      case 8: // $bb8
        var $37=HEAP[$vret7]; //@line 2317 "_json.c"
        HEAP[$0]=$37; //@line 2317 "_json.c"
        __label__ = 28; break; //@line 2317 "_json.c"
      case 9: // $bb9
        var $38=HEAP[$s]; //@line 2318 "_json.c"
        var $39=(($38+16)&4294967295); //@line 2318 "_json.c"
        var $40=HEAP[$39]; //@line 2318 "_json.c"
        var $41=($40)!=0; //@line 2318 "_json.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 2318 "_json.c"
      case 10: // $bb10
        var $42=HEAP[$s]; //@line 2318 "_json.c"
        var $43=(($42+16)&4294967295); //@line 2318 "_json.c"
        var $44=HEAP[$43]; //@line 2318 "_json.c"
        var $45=HEAP[$visit_addr]; //@line 2318 "_json.c"
        var $46=HEAP[$arg_addr]; //@line 2318 "_json.c"
        var $47=FUNCTION_TABLE[$45]($44, $46); //@line 2318 "_json.c"
        HEAP[$vret11]=$47; //@line 2318 "_json.c"
        var $48=HEAP[$vret11]; //@line 2318 "_json.c"
        var $49=((($48))|0)!=0; //@line 2318 "_json.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2318 "_json.c"
      case 11: // $bb12
        var $50=HEAP[$vret11]; //@line 2318 "_json.c"
        HEAP[$0]=$50; //@line 2318 "_json.c"
        __label__ = 28; break; //@line 2318 "_json.c"
      case 12: // $bb13
        var $51=HEAP[$s]; //@line 2319 "_json.c"
        var $52=(($51+20)&4294967295); //@line 2319 "_json.c"
        var $53=HEAP[$52]; //@line 2319 "_json.c"
        var $54=($53)!=0; //@line 2319 "_json.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 2319 "_json.c"
      case 13: // $bb14
        var $55=HEAP[$s]; //@line 2319 "_json.c"
        var $56=(($55+20)&4294967295); //@line 2319 "_json.c"
        var $57=HEAP[$56]; //@line 2319 "_json.c"
        var $58=HEAP[$visit_addr]; //@line 2319 "_json.c"
        var $59=HEAP[$arg_addr]; //@line 2319 "_json.c"
        var $60=FUNCTION_TABLE[$58]($57, $59); //@line 2319 "_json.c"
        HEAP[$vret15]=$60; //@line 2319 "_json.c"
        var $61=HEAP[$vret15]; //@line 2319 "_json.c"
        var $62=((($61))|0)!=0; //@line 2319 "_json.c"
        if ($62) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2319 "_json.c"
      case 14: // $bb16
        var $63=HEAP[$vret15]; //@line 2319 "_json.c"
        HEAP[$0]=$63; //@line 2319 "_json.c"
        __label__ = 28; break; //@line 2319 "_json.c"
      case 15: // $bb17
        var $64=HEAP[$s]; //@line 2320 "_json.c"
        var $65=(($64+24)&4294967295); //@line 2320 "_json.c"
        var $66=HEAP[$65]; //@line 2320 "_json.c"
        var $67=($66)!=0; //@line 2320 "_json.c"
        if ($67) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 2320 "_json.c"
      case 16: // $bb18
        var $68=HEAP[$s]; //@line 2320 "_json.c"
        var $69=(($68+24)&4294967295); //@line 2320 "_json.c"
        var $70=HEAP[$69]; //@line 2320 "_json.c"
        var $71=HEAP[$visit_addr]; //@line 2320 "_json.c"
        var $72=HEAP[$arg_addr]; //@line 2320 "_json.c"
        var $73=FUNCTION_TABLE[$71]($70, $72); //@line 2320 "_json.c"
        HEAP[$vret19]=$73; //@line 2320 "_json.c"
        var $74=HEAP[$vret19]; //@line 2320 "_json.c"
        var $75=((($74))|0)!=0; //@line 2320 "_json.c"
        if ($75) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2320 "_json.c"
      case 17: // $bb20
        var $76=HEAP[$vret19]; //@line 2320 "_json.c"
        HEAP[$0]=$76; //@line 2320 "_json.c"
        __label__ = 28; break; //@line 2320 "_json.c"
      case 18: // $bb21
        var $77=HEAP[$s]; //@line 2321 "_json.c"
        var $78=(($77+28)&4294967295); //@line 2321 "_json.c"
        var $79=HEAP[$78]; //@line 2321 "_json.c"
        var $80=($79)!=0; //@line 2321 "_json.c"
        if ($80) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 2321 "_json.c"
      case 19: // $bb22
        var $81=HEAP[$s]; //@line 2321 "_json.c"
        var $82=(($81+28)&4294967295); //@line 2321 "_json.c"
        var $83=HEAP[$82]; //@line 2321 "_json.c"
        var $84=HEAP[$visit_addr]; //@line 2321 "_json.c"
        var $85=HEAP[$arg_addr]; //@line 2321 "_json.c"
        var $86=FUNCTION_TABLE[$84]($83, $85); //@line 2321 "_json.c"
        HEAP[$vret23]=$86; //@line 2321 "_json.c"
        var $87=HEAP[$vret23]; //@line 2321 "_json.c"
        var $88=((($87))|0)!=0; //@line 2321 "_json.c"
        if ($88) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2321 "_json.c"
      case 20: // $bb24
        var $89=HEAP[$vret23]; //@line 2321 "_json.c"
        HEAP[$0]=$89; //@line 2321 "_json.c"
        __label__ = 28; break; //@line 2321 "_json.c"
      case 21: // $bb25
        var $90=HEAP[$s]; //@line 2322 "_json.c"
        var $91=(($90+32)&4294967295); //@line 2322 "_json.c"
        var $92=HEAP[$91]; //@line 2322 "_json.c"
        var $93=($92)!=0; //@line 2322 "_json.c"
        if ($93) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 2322 "_json.c"
      case 22: // $bb26
        var $94=HEAP[$s]; //@line 2322 "_json.c"
        var $95=(($94+32)&4294967295); //@line 2322 "_json.c"
        var $96=HEAP[$95]; //@line 2322 "_json.c"
        var $97=HEAP[$visit_addr]; //@line 2322 "_json.c"
        var $98=HEAP[$arg_addr]; //@line 2322 "_json.c"
        var $99=FUNCTION_TABLE[$97]($96, $98); //@line 2322 "_json.c"
        HEAP[$vret27]=$99; //@line 2322 "_json.c"
        var $100=HEAP[$vret27]; //@line 2322 "_json.c"
        var $101=((($100))|0)!=0; //@line 2322 "_json.c"
        if ($101) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 2322 "_json.c"
      case 23: // $bb28
        var $102=HEAP[$vret27]; //@line 2322 "_json.c"
        HEAP[$0]=$102; //@line 2322 "_json.c"
        __label__ = 28; break; //@line 2322 "_json.c"
      case 24: // $bb29
        var $103=HEAP[$s]; //@line 2323 "_json.c"
        var $104=(($103+36)&4294967295); //@line 2323 "_json.c"
        var $105=HEAP[$104]; //@line 2323 "_json.c"
        var $106=($105)!=0; //@line 2323 "_json.c"
        if ($106) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 2323 "_json.c"
      case 25: // $bb30
        var $107=HEAP[$s]; //@line 2323 "_json.c"
        var $108=(($107+36)&4294967295); //@line 2323 "_json.c"
        var $109=HEAP[$108]; //@line 2323 "_json.c"
        var $110=HEAP[$visit_addr]; //@line 2323 "_json.c"
        var $111=HEAP[$arg_addr]; //@line 2323 "_json.c"
        var $112=FUNCTION_TABLE[$110]($109, $111); //@line 2323 "_json.c"
        HEAP[$vret31]=$112; //@line 2323 "_json.c"
        var $113=HEAP[$vret31]; //@line 2323 "_json.c"
        var $114=((($113))|0)!=0; //@line 2323 "_json.c"
        if ($114) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2323 "_json.c"
      case 26: // $bb32
        var $115=HEAP[$vret31]; //@line 2323 "_json.c"
        HEAP[$0]=$115; //@line 2323 "_json.c"
        __label__ = 28; break; //@line 2323 "_json.c"
      case 27: // $bb33
        HEAP[$0]=0; //@line 2324 "_json.c"
        __label__ = 28; break; //@line 2324 "_json.c"
      case 28: // $bb34
        var $116=HEAP[$0]; //@line 2316 "_json.c"
        HEAP[$retval]=$116; //@line 2316 "_json.c"
        __label__ = 29; break; //@line 2316 "_json.c"
      case 29: // $return
        var $retval35=HEAP[$retval]; //@line 2316 "_json.c"
        STACKTOP = __stackBase__;
        return $retval35; //@line 2316 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_clear($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $s=__stackBase__+12;
        var $_py_tmp=__stackBase__+16;
        var $_py_tmp7=__stackBase__+20;
        var $_py_tmp11=__stackBase__+24;
        var $_py_tmp15=__stackBase__+28;
        var $_py_tmp19=__stackBase__+32;
        var $_py_tmp23=__stackBase__+36;
        var $_py_tmp27=__stackBase__+40;
        var $_py_tmp31=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 2332 "_json.c"
        var $2=(($1+4)&4294967295); //@line 2332 "_json.c"
        var $3=HEAP[$2]; //@line 2332 "_json.c"
        var $4=($3)!=(_PyEncoderType); //@line 2332 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2332 "_json.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 2332 "_json.c"
        var $6=(($5+4)&4294967295); //@line 2332 "_json.c"
        var $7=HEAP[$6]; //@line 2332 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyEncoderType); //@line 2332 "_json.c"
        var $9=((($8))|0)==0; //@line 2332 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2332 "_json.c"
      case 2: // $bb1
        ___assert_fail(((__str47)&4294967295), ((__str29)&4294967295), 2332, ((___PRETTY_FUNCTION___11816)&4294967295)); //@line 2332 "_json.c"
        throw "Reached an unreachable! Original .ll line: 11415"; //@line 2332 "_json.c"
      case 3: // $bb2
        var $10=HEAP[$self_addr]; //@line 2333 "_json.c"
        var $11=$10; //@line 2333 "_json.c"
        HEAP[$s]=$11; //@line 2333 "_json.c"
        var $12=HEAP[$s]; //@line 2334 "_json.c"
        var $13=(($12+8)&4294967295); //@line 2334 "_json.c"
        var $14=HEAP[$13]; //@line 2334 "_json.c"
        var $15=($14)!=0; //@line 2334 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2334 "_json.c"
      case 4: // $bb3
        var $16=HEAP[$s]; //@line 2334 "_json.c"
        var $17=(($16+8)&4294967295); //@line 2334 "_json.c"
        var $18=HEAP[$17]; //@line 2334 "_json.c"
        HEAP[$_py_tmp]=$18; //@line 2334 "_json.c"
        var $19=HEAP[$s]; //@line 2334 "_json.c"
        var $20=(($19+8)&4294967295); //@line 2334 "_json.c"
        HEAP[$20]=0; //@line 2334 "_json.c"
        var $21=HEAP[$_py_tmp]; //@line 2334 "_json.c"
        var $22=(($21)&4294967295); //@line 2334 "_json.c"
        var $23=HEAP[$22]; //@line 2334 "_json.c"
        var $24=((($23) - 1)&4294967295); //@line 2334 "_json.c"
        var $25=HEAP[$_py_tmp]; //@line 2334 "_json.c"
        var $26=(($25)&4294967295); //@line 2334 "_json.c"
        HEAP[$26]=$24; //@line 2334 "_json.c"
        var $27=HEAP[$_py_tmp]; //@line 2334 "_json.c"
        var $28=(($27)&4294967295); //@line 2334 "_json.c"
        var $29=HEAP[$28]; //@line 2334 "_json.c"
        var $30=((($29))|0)==0; //@line 2334 "_json.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2334 "_json.c"
      case 5: // $bb4
        var $31=HEAP[$_py_tmp]; //@line 2334 "_json.c"
        var $32=(($31+4)&4294967295); //@line 2334 "_json.c"
        var $33=HEAP[$32]; //@line 2334 "_json.c"
        var $34=(($33+24)&4294967295); //@line 2334 "_json.c"
        var $35=HEAP[$34]; //@line 2334 "_json.c"
        var $36=HEAP[$_py_tmp]; //@line 2334 "_json.c"
        FUNCTION_TABLE[$35]($36); //@line 2334 "_json.c"
        __label__ = 6; break; //@line 2334 "_json.c"
      case 6: // $bb5
        var $37=HEAP[$s]; //@line 2335 "_json.c"
        var $38=(($37+12)&4294967295); //@line 2335 "_json.c"
        var $39=HEAP[$38]; //@line 2335 "_json.c"
        var $40=($39)!=0; //@line 2335 "_json.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2335 "_json.c"
      case 7: // $bb6
        var $41=HEAP[$s]; //@line 2335 "_json.c"
        var $42=(($41+12)&4294967295); //@line 2335 "_json.c"
        var $43=HEAP[$42]; //@line 2335 "_json.c"
        HEAP[$_py_tmp7]=$43; //@line 2335 "_json.c"
        var $44=HEAP[$s]; //@line 2335 "_json.c"
        var $45=(($44+12)&4294967295); //@line 2335 "_json.c"
        HEAP[$45]=0; //@line 2335 "_json.c"
        var $46=HEAP[$_py_tmp7]; //@line 2335 "_json.c"
        var $47=(($46)&4294967295); //@line 2335 "_json.c"
        var $48=HEAP[$47]; //@line 2335 "_json.c"
        var $49=((($48) - 1)&4294967295); //@line 2335 "_json.c"
        var $50=HEAP[$_py_tmp7]; //@line 2335 "_json.c"
        var $51=(($50)&4294967295); //@line 2335 "_json.c"
        HEAP[$51]=$49; //@line 2335 "_json.c"
        var $52=HEAP[$_py_tmp7]; //@line 2335 "_json.c"
        var $53=(($52)&4294967295); //@line 2335 "_json.c"
        var $54=HEAP[$53]; //@line 2335 "_json.c"
        var $55=((($54))|0)==0; //@line 2335 "_json.c"
        if ($55) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2335 "_json.c"
      case 8: // $bb8
        var $56=HEAP[$_py_tmp7]; //@line 2335 "_json.c"
        var $57=(($56+4)&4294967295); //@line 2335 "_json.c"
        var $58=HEAP[$57]; //@line 2335 "_json.c"
        var $59=(($58+24)&4294967295); //@line 2335 "_json.c"
        var $60=HEAP[$59]; //@line 2335 "_json.c"
        var $61=HEAP[$_py_tmp7]; //@line 2335 "_json.c"
        FUNCTION_TABLE[$60]($61); //@line 2335 "_json.c"
        __label__ = 9; break; //@line 2335 "_json.c"
      case 9: // $bb9
        var $62=HEAP[$s]; //@line 2336 "_json.c"
        var $63=(($62+16)&4294967295); //@line 2336 "_json.c"
        var $64=HEAP[$63]; //@line 2336 "_json.c"
        var $65=($64)!=0; //@line 2336 "_json.c"
        if ($65) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 2336 "_json.c"
      case 10: // $bb10
        var $66=HEAP[$s]; //@line 2336 "_json.c"
        var $67=(($66+16)&4294967295); //@line 2336 "_json.c"
        var $68=HEAP[$67]; //@line 2336 "_json.c"
        HEAP[$_py_tmp11]=$68; //@line 2336 "_json.c"
        var $69=HEAP[$s]; //@line 2336 "_json.c"
        var $70=(($69+16)&4294967295); //@line 2336 "_json.c"
        HEAP[$70]=0; //@line 2336 "_json.c"
        var $71=HEAP[$_py_tmp11]; //@line 2336 "_json.c"
        var $72=(($71)&4294967295); //@line 2336 "_json.c"
        var $73=HEAP[$72]; //@line 2336 "_json.c"
        var $74=((($73) - 1)&4294967295); //@line 2336 "_json.c"
        var $75=HEAP[$_py_tmp11]; //@line 2336 "_json.c"
        var $76=(($75)&4294967295); //@line 2336 "_json.c"
        HEAP[$76]=$74; //@line 2336 "_json.c"
        var $77=HEAP[$_py_tmp11]; //@line 2336 "_json.c"
        var $78=(($77)&4294967295); //@line 2336 "_json.c"
        var $79=HEAP[$78]; //@line 2336 "_json.c"
        var $80=((($79))|0)==0; //@line 2336 "_json.c"
        if ($80) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2336 "_json.c"
      case 11: // $bb12
        var $81=HEAP[$_py_tmp11]; //@line 2336 "_json.c"
        var $82=(($81+4)&4294967295); //@line 2336 "_json.c"
        var $83=HEAP[$82]; //@line 2336 "_json.c"
        var $84=(($83+24)&4294967295); //@line 2336 "_json.c"
        var $85=HEAP[$84]; //@line 2336 "_json.c"
        var $86=HEAP[$_py_tmp11]; //@line 2336 "_json.c"
        FUNCTION_TABLE[$85]($86); //@line 2336 "_json.c"
        __label__ = 12; break; //@line 2336 "_json.c"
      case 12: // $bb13
        var $87=HEAP[$s]; //@line 2337 "_json.c"
        var $88=(($87+20)&4294967295); //@line 2337 "_json.c"
        var $89=HEAP[$88]; //@line 2337 "_json.c"
        var $90=($89)!=0; //@line 2337 "_json.c"
        if ($90) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 2337 "_json.c"
      case 13: // $bb14
        var $91=HEAP[$s]; //@line 2337 "_json.c"
        var $92=(($91+20)&4294967295); //@line 2337 "_json.c"
        var $93=HEAP[$92]; //@line 2337 "_json.c"
        HEAP[$_py_tmp15]=$93; //@line 2337 "_json.c"
        var $94=HEAP[$s]; //@line 2337 "_json.c"
        var $95=(($94+20)&4294967295); //@line 2337 "_json.c"
        HEAP[$95]=0; //@line 2337 "_json.c"
        var $96=HEAP[$_py_tmp15]; //@line 2337 "_json.c"
        var $97=(($96)&4294967295); //@line 2337 "_json.c"
        var $98=HEAP[$97]; //@line 2337 "_json.c"
        var $99=((($98) - 1)&4294967295); //@line 2337 "_json.c"
        var $100=HEAP[$_py_tmp15]; //@line 2337 "_json.c"
        var $101=(($100)&4294967295); //@line 2337 "_json.c"
        HEAP[$101]=$99; //@line 2337 "_json.c"
        var $102=HEAP[$_py_tmp15]; //@line 2337 "_json.c"
        var $103=(($102)&4294967295); //@line 2337 "_json.c"
        var $104=HEAP[$103]; //@line 2337 "_json.c"
        var $105=((($104))|0)==0; //@line 2337 "_json.c"
        if ($105) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2337 "_json.c"
      case 14: // $bb16
        var $106=HEAP[$_py_tmp15]; //@line 2337 "_json.c"
        var $107=(($106+4)&4294967295); //@line 2337 "_json.c"
        var $108=HEAP[$107]; //@line 2337 "_json.c"
        var $109=(($108+24)&4294967295); //@line 2337 "_json.c"
        var $110=HEAP[$109]; //@line 2337 "_json.c"
        var $111=HEAP[$_py_tmp15]; //@line 2337 "_json.c"
        FUNCTION_TABLE[$110]($111); //@line 2337 "_json.c"
        __label__ = 15; break; //@line 2337 "_json.c"
      case 15: // $bb17
        var $112=HEAP[$s]; //@line 2338 "_json.c"
        var $113=(($112+24)&4294967295); //@line 2338 "_json.c"
        var $114=HEAP[$113]; //@line 2338 "_json.c"
        var $115=($114)!=0; //@line 2338 "_json.c"
        if ($115) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 2338 "_json.c"
      case 16: // $bb18
        var $116=HEAP[$s]; //@line 2338 "_json.c"
        var $117=(($116+24)&4294967295); //@line 2338 "_json.c"
        var $118=HEAP[$117]; //@line 2338 "_json.c"
        HEAP[$_py_tmp19]=$118; //@line 2338 "_json.c"
        var $119=HEAP[$s]; //@line 2338 "_json.c"
        var $120=(($119+24)&4294967295); //@line 2338 "_json.c"
        HEAP[$120]=0; //@line 2338 "_json.c"
        var $121=HEAP[$_py_tmp19]; //@line 2338 "_json.c"
        var $122=(($121)&4294967295); //@line 2338 "_json.c"
        var $123=HEAP[$122]; //@line 2338 "_json.c"
        var $124=((($123) - 1)&4294967295); //@line 2338 "_json.c"
        var $125=HEAP[$_py_tmp19]; //@line 2338 "_json.c"
        var $126=(($125)&4294967295); //@line 2338 "_json.c"
        HEAP[$126]=$124; //@line 2338 "_json.c"
        var $127=HEAP[$_py_tmp19]; //@line 2338 "_json.c"
        var $128=(($127)&4294967295); //@line 2338 "_json.c"
        var $129=HEAP[$128]; //@line 2338 "_json.c"
        var $130=((($129))|0)==0; //@line 2338 "_json.c"
        if ($130) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2338 "_json.c"
      case 17: // $bb20
        var $131=HEAP[$_py_tmp19]; //@line 2338 "_json.c"
        var $132=(($131+4)&4294967295); //@line 2338 "_json.c"
        var $133=HEAP[$132]; //@line 2338 "_json.c"
        var $134=(($133+24)&4294967295); //@line 2338 "_json.c"
        var $135=HEAP[$134]; //@line 2338 "_json.c"
        var $136=HEAP[$_py_tmp19]; //@line 2338 "_json.c"
        FUNCTION_TABLE[$135]($136); //@line 2338 "_json.c"
        __label__ = 18; break; //@line 2338 "_json.c"
      case 18: // $bb21
        var $137=HEAP[$s]; //@line 2339 "_json.c"
        var $138=(($137+28)&4294967295); //@line 2339 "_json.c"
        var $139=HEAP[$138]; //@line 2339 "_json.c"
        var $140=($139)!=0; //@line 2339 "_json.c"
        if ($140) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 2339 "_json.c"
      case 19: // $bb22
        var $141=HEAP[$s]; //@line 2339 "_json.c"
        var $142=(($141+28)&4294967295); //@line 2339 "_json.c"
        var $143=HEAP[$142]; //@line 2339 "_json.c"
        HEAP[$_py_tmp23]=$143; //@line 2339 "_json.c"
        var $144=HEAP[$s]; //@line 2339 "_json.c"
        var $145=(($144+28)&4294967295); //@line 2339 "_json.c"
        HEAP[$145]=0; //@line 2339 "_json.c"
        var $146=HEAP[$_py_tmp23]; //@line 2339 "_json.c"
        var $147=(($146)&4294967295); //@line 2339 "_json.c"
        var $148=HEAP[$147]; //@line 2339 "_json.c"
        var $149=((($148) - 1)&4294967295); //@line 2339 "_json.c"
        var $150=HEAP[$_py_tmp23]; //@line 2339 "_json.c"
        var $151=(($150)&4294967295); //@line 2339 "_json.c"
        HEAP[$151]=$149; //@line 2339 "_json.c"
        var $152=HEAP[$_py_tmp23]; //@line 2339 "_json.c"
        var $153=(($152)&4294967295); //@line 2339 "_json.c"
        var $154=HEAP[$153]; //@line 2339 "_json.c"
        var $155=((($154))|0)==0; //@line 2339 "_json.c"
        if ($155) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2339 "_json.c"
      case 20: // $bb24
        var $156=HEAP[$_py_tmp23]; //@line 2339 "_json.c"
        var $157=(($156+4)&4294967295); //@line 2339 "_json.c"
        var $158=HEAP[$157]; //@line 2339 "_json.c"
        var $159=(($158+24)&4294967295); //@line 2339 "_json.c"
        var $160=HEAP[$159]; //@line 2339 "_json.c"
        var $161=HEAP[$_py_tmp23]; //@line 2339 "_json.c"
        FUNCTION_TABLE[$160]($161); //@line 2339 "_json.c"
        __label__ = 21; break; //@line 2339 "_json.c"
      case 21: // $bb25
        var $162=HEAP[$s]; //@line 2340 "_json.c"
        var $163=(($162+32)&4294967295); //@line 2340 "_json.c"
        var $164=HEAP[$163]; //@line 2340 "_json.c"
        var $165=($164)!=0; //@line 2340 "_json.c"
        if ($165) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 2340 "_json.c"
      case 22: // $bb26
        var $166=HEAP[$s]; //@line 2340 "_json.c"
        var $167=(($166+32)&4294967295); //@line 2340 "_json.c"
        var $168=HEAP[$167]; //@line 2340 "_json.c"
        HEAP[$_py_tmp27]=$168; //@line 2340 "_json.c"
        var $169=HEAP[$s]; //@line 2340 "_json.c"
        var $170=(($169+32)&4294967295); //@line 2340 "_json.c"
        HEAP[$170]=0; //@line 2340 "_json.c"
        var $171=HEAP[$_py_tmp27]; //@line 2340 "_json.c"
        var $172=(($171)&4294967295); //@line 2340 "_json.c"
        var $173=HEAP[$172]; //@line 2340 "_json.c"
        var $174=((($173) - 1)&4294967295); //@line 2340 "_json.c"
        var $175=HEAP[$_py_tmp27]; //@line 2340 "_json.c"
        var $176=(($175)&4294967295); //@line 2340 "_json.c"
        HEAP[$176]=$174; //@line 2340 "_json.c"
        var $177=HEAP[$_py_tmp27]; //@line 2340 "_json.c"
        var $178=(($177)&4294967295); //@line 2340 "_json.c"
        var $179=HEAP[$178]; //@line 2340 "_json.c"
        var $180=((($179))|0)==0; //@line 2340 "_json.c"
        if ($180) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 2340 "_json.c"
      case 23: // $bb28
        var $181=HEAP[$_py_tmp27]; //@line 2340 "_json.c"
        var $182=(($181+4)&4294967295); //@line 2340 "_json.c"
        var $183=HEAP[$182]; //@line 2340 "_json.c"
        var $184=(($183+24)&4294967295); //@line 2340 "_json.c"
        var $185=HEAP[$184]; //@line 2340 "_json.c"
        var $186=HEAP[$_py_tmp27]; //@line 2340 "_json.c"
        FUNCTION_TABLE[$185]($186); //@line 2340 "_json.c"
        __label__ = 24; break; //@line 2340 "_json.c"
      case 24: // $bb29
        var $187=HEAP[$s]; //@line 2341 "_json.c"
        var $188=(($187+36)&4294967295); //@line 2341 "_json.c"
        var $189=HEAP[$188]; //@line 2341 "_json.c"
        var $190=($189)!=0; //@line 2341 "_json.c"
        if ($190) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 2341 "_json.c"
      case 25: // $bb30
        var $191=HEAP[$s]; //@line 2341 "_json.c"
        var $192=(($191+36)&4294967295); //@line 2341 "_json.c"
        var $193=HEAP[$192]; //@line 2341 "_json.c"
        HEAP[$_py_tmp31]=$193; //@line 2341 "_json.c"
        var $194=HEAP[$s]; //@line 2341 "_json.c"
        var $195=(($194+36)&4294967295); //@line 2341 "_json.c"
        HEAP[$195]=0; //@line 2341 "_json.c"
        var $196=HEAP[$_py_tmp31]; //@line 2341 "_json.c"
        var $197=(($196)&4294967295); //@line 2341 "_json.c"
        var $198=HEAP[$197]; //@line 2341 "_json.c"
        var $199=((($198) - 1)&4294967295); //@line 2341 "_json.c"
        var $200=HEAP[$_py_tmp31]; //@line 2341 "_json.c"
        var $201=(($200)&4294967295); //@line 2341 "_json.c"
        HEAP[$201]=$199; //@line 2341 "_json.c"
        var $202=HEAP[$_py_tmp31]; //@line 2341 "_json.c"
        var $203=(($202)&4294967295); //@line 2341 "_json.c"
        var $204=HEAP[$203]; //@line 2341 "_json.c"
        var $205=((($204))|0)==0; //@line 2341 "_json.c"
        if ($205) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2341 "_json.c"
      case 26: // $bb32
        var $206=HEAP[$_py_tmp31]; //@line 2341 "_json.c"
        var $207=(($206+4)&4294967295); //@line 2341 "_json.c"
        var $208=HEAP[$207]; //@line 2341 "_json.c"
        var $209=(($208+24)&4294967295); //@line 2341 "_json.c"
        var $210=HEAP[$209]; //@line 2341 "_json.c"
        var $211=HEAP[$_py_tmp31]; //@line 2341 "_json.c"
        FUNCTION_TABLE[$210]($211); //@line 2341 "_json.c"
        __label__ = 27; break; //@line 2341 "_json.c"
      case 27: // $bb33
        HEAP[$0]=0; //@line 2342 "_json.c"
        var $212=HEAP[$0]; //@line 2342 "_json.c"
        HEAP[$retval]=$212; //@line 2342 "_json.c"
        __label__ = 28; break; //@line 2342 "_json.c"
      case 28: // $return
        var $retval34=HEAP[$retval]; //@line 2342 "_json.c"
        STACKTOP = __stackBase__;
        return $retval34; //@line 2342 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_json() {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $_alloca_point_=0;
        HEAP[((_PyScannerType+156)&4294967295)]=(FUNCTION_TABLE_OFFSET + 8); //@line 2410 "_json.c"
        var $0=_PyType_Ready(_PyScannerType); //@line 2411 "_json.c"
        var $1=((($0))|0) < 0; //@line 2411 "_json.c"
        if ($1) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2411 "_json.c"
      case 1: // $bb
        HEAP[((_PyEncoderType+156)&4294967295)]=(FUNCTION_TABLE_OFFSET + 8); //@line 2413 "_json.c"
        var $2=_PyType_Ready(_PyEncoderType); //@line 2414 "_json.c"
        var $3=((($2))|0) < 0; //@line 2414 "_json.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2414 "_json.c"
      case 2: // $bb1
        var $4=_Py_InitModule4(((__str71)&4294967295), ((_speedups_methods)&4294967295), ((_module_doc)&4294967295), 0, 1013); //@line 2416 "_json.c"
        HEAP[$m]=$4; //@line 2416 "_json.c"
        var $5=((_PyScannerType)&4294967295); //@line 2417 "_json.c"
        var $6=HEAP[$5]; //@line 2417 "_json.c"
        var $7=((($6) + 1)&4294967295); //@line 2417 "_json.c"
        var $8=((_PyScannerType)&4294967295); //@line 2417 "_json.c"
        HEAP[$8]=$7; //@line 2417 "_json.c"
        var $9=HEAP[$m]; //@line 2418 "_json.c"
        var $10=_PyModule_AddObject($9, ((__str72)&4294967295), _PyScannerType); //@line 2418 "_json.c"
        var $11=((_PyEncoderType)&4294967295); //@line 2419 "_json.c"
        var $12=HEAP[$11]; //@line 2419 "_json.c"
        var $13=((($12) + 1)&4294967295); //@line 2419 "_json.c"
        var $14=((_PyEncoderType)&4294967295); //@line 2419 "_json.c"
        HEAP[$14]=$13; //@line 2419 "_json.c"
        var $15=HEAP[$m]; //@line 2420 "_json.c"
        var $16=_PyModule_AddObject($15, ((__str73)&4294967295), _PyEncoderType); //@line 2420 "_json.c"
        __label__ = 3; break; //@line 2420 "_json.c"
      case 3: // $bb2
        __label__ = 4; break; //@line 2412 "_json.c"
      case 4: // $return
        STACKTOP = __stackBase__;
        return; //@line 2412 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_json"] = _init_json;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,__convertPyInt_FromSsize_t,0,__convertPyInt_AsSsize_t,0,_py_encode_basestring_ascii,0,_PyType_GenericNew,0,_scanner_dealloc,0,_scanner_call,0,_scanner_traverse,0,_scanner_clear,0,_scanner_init,0,_scanner_new,0,_encoder_dealloc,0,_encoder_call,0,_encoder_traverse,0,_encoder_clear,0,_encoder_init,0,_encoder_new,0,_py_scanstring,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([101,110,99,111,100,105,110,103,0] /* encoding\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([115,116,114,105,99,116,0] /* strict\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([111,98,106,101,99,116,95,104,111,111,107,0] /* object_hook\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([111,98,106,101,99,116,95,112,97,105,114,115,95,104,111,111,107,0] /* object_pairs_hook\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([112,97,114,115,101,95,102,108,111,97,116,0] /* parse_float\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([112,97,114,115,101,95,105,110,116,0] /* parse_int\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([112,97,114,115,101,95,99,111,110,115,116,97,110,116,0] /* parse_constant\00 */, "i8", ALLOC_NORMAL);
_scanner_members=allocate([0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 24, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 32, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str7=allocate([109,97,114,107,101,114,115,0] /* markers\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([100,101,102,97,117,108,116,0] /* default\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([101,110,99,111,100,101,114,0] /* encoder\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([105,110,100,101,110,116,0] /* indent\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([107,101,121,95,115,101,112,97,114,97,116,111,114,0] /* key_separator\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([105,116,101,109,95,115,101,112,97,114,97,116,111,114,0] /* item_separator\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([115,111,114,116,95,107,101,121,115,0] /* sort_keys\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([115,107,105,112,107,101,121,115,0] /* skipkeys\00 */, "i8", ALLOC_NORMAL);
_encoder_members=allocate([0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 24, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 32, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 36, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str15=allocate([48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,0] /* 0123456789abcdef\00 */, "i8", ALLOC_NORMAL);
_errmsg_fn_8641=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str16=allocate([106,115,111,110,46,100,101,99,111,100,101,114,0] /* json.decoder\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([101,114,114,109,115,103,0] /* errmsg\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([40,122,79,79,38,41,0] /* (zOO&)\00 */, "i8", ALLOC_NORMAL);
_joinfn_8675=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str19=allocate([106,111,105,110,0] /* join\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([101,110,100,32,105,115,32,111,117,116,32,111,102,32,98,111,117,110,100,115,0] /* end is out of bounds */, "i8", ALLOC_NORMAL);
__str21=allocate([73,110,118,97,108,105,100,32,99,111,110,116,114,111,108,32,99,104,97,114,97,99,116,101,114,32,97,116,0] /* Invalid control char */, "i8", ALLOC_NORMAL);
__str22=allocate([85,110,116,101,114,109,105,110,97,116,101,100,32,115,116,114,105,110,103,32,115,116,97,114,116,105,110,103,32,97,116,0] /* Unterminated string  */, "i8", ALLOC_NORMAL);
__str23=allocate([73,110,118,97,108,105,100,32,92,101,115,99,97,112,101,0] /* Invalid \5Cescape\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([73,110,118,97,108,105,100,32,92,117,88,88,88,88,32,101,115,99,97,112,101,0] /* Invalid \5CuXXXX esc */, "i8", ALLOC_NORMAL);
_pydoc_scanstring=allocate([115,99,97,110,115,116,114,105,110,103,40,98,97,115,101,115,116,114,105,110,103,44,32,101,110,100,44,32,101,110,99,111,100,105,110,103,44,32,115,116,114,105,99,116,61,84,114,117,101,41,32,45,62,32,40,115,116,114,44,32,101,110,100,41,10,10,83,99,97,110,32,116,104,101,32,115,116,114,105,110,103,32,115,32,102,111,114,32,97,32,74,83,79,78,32,115,116,114,105,110,103,46,32,69,110,100,32,105,115,32,116,104,101,32,105,110,100,101,120,32,111,102,32,116,104,101,10,99,104,97,114,97,99,116,101,114,32,105,110,32,115,32,97,102,116,101,114,32,116,104,101,32,113,117,111,116,101,32,116,104,97,116,32,115,116,97,114,116,101,100,32,116,104,101,32,74,83,79,78,32,115,116,114,105,110,103,46,10,85,110,101,115,99,97,112,101,115,32,97,108,108,32,118,97,108,105,100,32,74,83,79,78,32,115,116,114,105,110,103,32,101,115,99,97,112,101,32,115,101,113,117,101,110,99,101,115,32,97,110,100,32,114,97,105,115,101,115,32,86,97,108,117,101,69,114,114,111,114,10,111,110,32,97,116,116,101,109,112,116,32,116,111,32,100,101,99,111,100,101,32,97,110,32,105,110,118,97,108,105,100,32,115,116,114,105,110,103,46,32,73,102,32,115,116,114,105,99,116,32,105,115,32,70,97,108,115,101,32,116,104,101,110,32,108,105,116,101,114,97,108,10,99,111,110,116,114,111,108,32,99,104,97,114,97,99,116,101,114,115,32,97,114,101,32,97,108,108,111,119,101,100,32,105,110,32,116,104,101,32,115,116,114,105,110,103,46,10,10,82,101,116,117,114,110,115,32,97,32,116,117,112,108,101,32,111,102,32,116,104,101,32,100,101,99,111,100,101,100,32,115,116,114,105,110,103,32,97,110,100,32,116,104,101,32,105,110,100,101,120,32,111,102,32,116,104,101,32,99,104,97,114,97,99,116,101,114,32,105,110,32,115,10,97,102,116,101,114,32,116,104,101,32,101,110,100,32,113,117,111,116,101,46,0] /* scanstring(basestrin */, "i8", ALLOC_NORMAL);
__str25=allocate([79,79,38,124,122,105,58,115,99,97,110,115,116,114,105,110,103,0] /* OO&|zi:scanstring\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([117,116,102,45,56,0] /* utf-8\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([102,105,114,115,116,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,44,32,110,111,116,32,37,46,56,48,115,0] /* first argument must  */, "i8", ALLOC_NORMAL);
_pydoc_encode_basestring_ascii=allocate([101,110,99,111,100,101,95,98,97,115,101,115,116,114,105,110,103,95,97,115,99,105,105,40,98,97,115,101,115,116,114,105,110,103,41,32,45,62,32,115,116,114,10,10,82,101,116,117,114,110,32,97,110,32,65,83,67,73,73,45,111,110,108,121,32,74,83,79,78,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,32,80,121,116,104,111,110,32,115,116,114,105,110,103,0] /* encode_basestring_as */, "i8", ALLOC_NORMAL);
__str28=allocate([40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,111,98,95,116,121,112,101,41,32,61,61,32,40,38,80,121,83,99,97,110,110,101,114,84,121,112,101,41,32,124,124,32,80,121,84,121,112,101,95,73,115,83,117,98,116,121,112,101,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,111,98,95,116,121,112,101,41,44,32,40,38,80,121,83,99,97,110,110,101,114,84,121,112,101,41,41,41,0] /* ((((PyObject_)(self) */, "i8", ALLOC_NORMAL);
__str29=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,95,106,115,111,110,46,99,0] /* ../cpython/Modules/_ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9208=allocate([115,99,97,110,110,101,114,95,116,114,97,118,101,114,115,101,0] /* scanner_traverse\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9278=allocate([115,99,97,110,110,101,114,95,99,108,101,97,114,0] /* scanner_clear\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([69,120,112,101,99,116,105,110,103,32,112,114,111,112,101,114,116,121,32,110,97,109,101,0] /* Expecting property n */, "i8", ALLOC_NORMAL);
__str31=allocate([69,120,112,101,99,116,105,110,103,32,58,32,100,101,108,105,109,105,116,101,114,0] /* Expecting : delimite */, "i8", ALLOC_NORMAL);
__str32=allocate([69,120,112,101,99,116,105,110,103,32,44,32,100,101,108,105,109,105,116,101,114,0] /* Expecting , delimite */, "i8", ALLOC_NORMAL);
__str33=allocate([69,120,112,101,99,116,105,110,103,32,111,98,106,101,99,116,0] /* Expecting object\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([32,119,104,105,108,101,32,100,101,99,111,100,105,110,103,32,97,32,74,83,79,78,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,98,121,116,101,32,115,116,114,105,110,103,0] /*  while decoding a JS */, "i8", ALLOC_NORMAL);
__str35=allocate([32,119,104,105,108,101,32,100,101,99,111,100,105,110,103,32,97,32,74,83,79,78,32,97,114,114,97,121,32,102,114,111,109,32,97,32,98,121,116,101,32,115,116,114,105,110,103,0] /*  while decoding a JS */, "i8", ALLOC_NORMAL);
__str36=allocate([78,97,78,0] /* NaN\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([73,110,102,105,110,105,116,121,0] /* Infinity\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([45,73,110,102,105,110,105,116,121,0] /* -Infinity\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([32,119,104,105,108,101,32,100,101,99,111,100,105,110,103,32,97,32,74,83,79,78,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,117,110,105,99,111,100,101,32,115,116,114,105,110,103,0] /*  while decoding a JS */, "i8", ALLOC_NORMAL);
__str40=allocate([32,119,104,105,108,101,32,100,101,99,111,100,105,110,103,32,97,32,74,83,79,78,32,97,114,114,97,121,32,102,114,111,109,32,97,32,117,110,105,99,111,100,101,32,115,116,114,105,110,103,0] /*  while decoding a JS */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10703=allocate([115,99,97,110,110,101,114,95,99,97,108,108,0] /* scanner_call\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([79,79,38,58,115,99,97,110,95,111,110,99,101,0] /* OO&:scan_once\00 */, "i8", ALLOC_NORMAL);
_kwlist_10701=allocate(12, "i8*", ALLOC_NORMAL);
__str42=allocate([115,116,114,105,110,103,0] /* string\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([105,100,120,0] /* idx\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10762=allocate([115,99,97,110,110,101,114,95,105,110,105,116,0] /* scanner_init\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([79,58,109,97,107,101,95,115,99,97,110,110,101,114,0] /* O:make_scanner\00 */, "i8", ALLOC_NORMAL);
_kwlist_10760=allocate(8, "i8*", ALLOC_NORMAL);
__str45=allocate([99,111,110,116,101,120,116,0] /* context\00 */, "i8", ALLOC_NORMAL);
_scanner_doc=allocate([74,83,79,78,32,115,99,97,110,110,101,114,32,111,98,106,101,99,116,0] /* JSON scanner object\ */, "i8", ALLOC_NORMAL);
__str46=allocate([95,106,115,111,110,46,83,99,97,110,110,101,114,0] /* _json.Scanner\00 */, "i8", ALLOC_NORMAL);
_PyScannerType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str47=allocate([40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,111,98,95,116,121,112,101,41,32,61,61,32,40,38,80,121,69,110,99,111,100,101,114,84,121,112,101,41,32,124,124,32,80,121,84,121,112,101,95,73,115,83,117,98,116,121,112,101,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,111,98,95,116,121,112,101,41,44,32,40,38,80,121,69,110,99,111,100,101,114,84,121,112,101,41,41,41,0] /* ((((PyObject_)(self) */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10949=allocate([101,110,99,111,100,101,114,95,105,110,105,116,0] /* encoder_init\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([79,79,79,79,79,79,79,79,79,58,109,97,107,101,95,101,110,99,111,100,101,114,0] /* OOOOOOOOO:make_encod */, "i8", ALLOC_NORMAL);
_kwlist_10938=allocate(40, "i8*", ALLOC_NORMAL);
__str49=allocate([97,108,108,111,119,95,110,97,110,0] /* allow_nan\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___11015=allocate([101,110,99,111,100,101,114,95,99,97,108,108,0] /* encoder_call\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([79,79,38,58,95,105,116,101,114,101,110,99,111,100,101,0] /* OO&:_iterencode\00 */, "i8", ALLOC_NORMAL);
_kwlist_11010=allocate(12, "i8*", ALLOC_NORMAL);
__str51=allocate([111,98,106,0] /* obj\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([95,99,117,114,114,101,110,116,95,105,110,100,101,110,116,95,108,101,118,101,108,0] /* _current_indent_leve */, "i8", ALLOC_NORMAL);
_s_null_11046=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str53=allocate([110,117,108,108,0] /* null\00 */, "i8", ALLOC_NORMAL);
_s_true_11047=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str54=allocate([116,114,117,101,0] /* true\00 */, "i8", ALLOC_NORMAL);
_s_false_11048=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str55=allocate([102,97,108,115,101,0] /* false\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([110,111,116,32,97,32,99,111,110,115,116,0] /* not a const\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([79,117,116,32,111,102,32,114,97,110,103,101,32,102,108,111,97,116,32,118,97,108,117,101,115,32,97,114,101,32,110,111,116,32,74,83,79,78,32,99,111,109,112,108,105,97,110,116,0] /* Out of range float v */, "i8", ALLOC_NORMAL);
__str58=allocate([32,119,104,105,108,101,32,101,110,99,111,100,105,110,103,32,97,32,74,83,79,78,32,111,98,106,101,99,116,0] /*  while encoding a JS */, "i8", ALLOC_NORMAL);
__str59=allocate([67,105,114,99,117,108,97,114,32,114,101,102,101,114,101,110,99,101,32,100,101,116,101,99,116,101,100,0] /* Circular reference d */, "i8", ALLOC_NORMAL);
_open_dict_11341=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_close_dict_11342=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_empty_dict_11343=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str60=allocate([123,0] /* {\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([125,0] /* }\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([123,125,0] /* {}\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([107,101,121,115,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0] /* keys must be a strin */, "i8", ALLOC_NORMAL);
_open_array_11600=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_close_array_11601=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_empty_array_11602=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str64=allocate([91,0] /* [\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([93,0] /* ]\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([91,93,0] /* []\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([95,105,116,101,114,101,110,99,111,100,101,95,108,105,115,116,32,110,101,101,100,115,32,97,32,115,101,113,117,101,110,99,101,0] /* _iterencode_list nee */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___11738=allocate([101,110,99,111,100,101,114,95,116,114,97,118,101,114,115,101,0] /* encoder_traverse\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___11816=allocate([101,110,99,111,100,101,114,95,99,108,101,97,114,0] /* encoder_clear\00 */, "i8", ALLOC_NORMAL);
_encoder_doc=allocate([95,105,116,101,114,101,110,99,111,100,101,40,111,98,106,44,32,95,99,117,114,114,101,110,116,95,105,110,100,101,110,116,95,108,101,118,101,108,41,32,45,62,32,105,116,101,114,97,98,108,101,0] /* _iterencode(obj, _cu */, "i8", ALLOC_NORMAL);
__str68=allocate([95,106,115,111,110,46,69,110,99,111,100,101,114,0] /* _json.Encoder\00 */, "i8", ALLOC_NORMAL);
_PyEncoderType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_speedups_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0], ALLOC_NORMAL);
__str69=allocate([101,110,99,111,100,101,95,98,97,115,101,115,116,114,105,110,103,95,97,115,99,105,105,0] /* encode_basestring_as */, "i8", ALLOC_NORMAL);
__str70=allocate([115,99,97,110,115,116,114,105,110,103,0] /* scanstring\00 */, "i8", ALLOC_NORMAL);
_module_doc=allocate([106,115,111,110,32,115,112,101,101,100,117,112,115,10,0] /* json speedups\0A\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([95,106,115,111,110,0] /* _json\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([109,97,107,101,95,115,99,97,110,110,101,114,0] /* make_scanner\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([109,97,107,101,95,101,110,99,111,100,101,114,0] /* make_encoder\00 */, "i8", ALLOC_NORMAL);
HEAP[_scanner_members]=((__str)&4294967295);
HEAP[_scanner_members+16]=((__str)&4294967295);
HEAP[_scanner_members+20]=((__str1)&4294967295);
HEAP[_scanner_members+36]=((__str1)&4294967295);
HEAP[_scanner_members+40]=((__str2)&4294967295);
HEAP[_scanner_members+56]=((__str2)&4294967295);
HEAP[_scanner_members+60]=((__str3)&4294967295);
HEAP[_scanner_members+76]=((__str3)&4294967295);
HEAP[_scanner_members+80]=((__str4)&4294967295);
HEAP[_scanner_members+96]=((__str4)&4294967295);
HEAP[_scanner_members+100]=((__str5)&4294967295);
HEAP[_scanner_members+116]=((__str5)&4294967295);
HEAP[_scanner_members+120]=((__str6)&4294967295);
HEAP[_scanner_members+136]=((__str6)&4294967295);
HEAP[_encoder_members]=((__str7)&4294967295);
HEAP[_encoder_members+16]=((__str7)&4294967295);
HEAP[_encoder_members+20]=((__str8)&4294967295);
HEAP[_encoder_members+36]=((__str8)&4294967295);
HEAP[_encoder_members+40]=((__str9)&4294967295);
HEAP[_encoder_members+56]=((__str9)&4294967295);
HEAP[_encoder_members+60]=((__str10)&4294967295);
HEAP[_encoder_members+76]=((__str10)&4294967295);
HEAP[_encoder_members+80]=((__str11)&4294967295);
HEAP[_encoder_members+96]=((__str11)&4294967295);
HEAP[_encoder_members+100]=((__str12)&4294967295);
HEAP[_encoder_members+116]=((__str12)&4294967295);
HEAP[_encoder_members+120]=((__str13)&4294967295);
HEAP[_encoder_members+136]=((__str13)&4294967295);
HEAP[_encoder_members+140]=((__str14)&4294967295);
HEAP[_encoder_members+156]=((__str14)&4294967295);
HEAP[_kwlist_10701]=((__str42)&4294967295);
HEAP[_kwlist_10701+4]=((__str43)&4294967295);
HEAP[_kwlist_10760]=((__str45)&4294967295);
HEAP[_PyScannerType+12]=((__str46)&4294967295);
HEAP[_PyScannerType+24]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_PyScannerType+64]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_PyScannerType+88]=((_scanner_doc)&4294967295);
HEAP[_PyScannerType+92]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_PyScannerType+96]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_PyScannerType+120]=((_scanner_members)&4294967295);
HEAP[_PyScannerType+148]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_PyScannerType+156]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_kwlist_10938]=((__str7)&4294967295);
HEAP[_kwlist_10938+4]=((__str8)&4294967295);
HEAP[_kwlist_10938+8]=((__str9)&4294967295);
HEAP[_kwlist_10938+12]=((__str10)&4294967295);
HEAP[_kwlist_10938+16]=((__str11)&4294967295);
HEAP[_kwlist_10938+20]=((__str12)&4294967295);
HEAP[_kwlist_10938+24]=((__str13)&4294967295);
HEAP[_kwlist_10938+28]=((__str14)&4294967295);
HEAP[_kwlist_10938+32]=((__str49)&4294967295);
HEAP[_kwlist_11010]=((__str51)&4294967295);
HEAP[_kwlist_11010+4]=((__str52)&4294967295);
HEAP[_PyEncoderType+12]=((__str68)&4294967295);
HEAP[_PyEncoderType+24]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_PyEncoderType+64]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_PyEncoderType+88]=((_encoder_doc)&4294967295);
HEAP[_PyEncoderType+92]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_PyEncoderType+96]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_PyEncoderType+120]=((_encoder_members)&4294967295);
HEAP[_PyEncoderType+148]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_PyEncoderType+156]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_speedups_methods]=((__str69)&4294967295);
HEAP[_speedups_methods+4]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_speedups_methods+12]=((_pydoc_encode_basestring_ascii)&4294967295);
HEAP[_speedups_methods+16]=((__str70)&4294967295);
HEAP[_speedups_methods+20]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_speedups_methods+28]=((_pydoc_scanstring)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

