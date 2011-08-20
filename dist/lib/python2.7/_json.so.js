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
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $o_addr;
        var $size_ptr_addr;
        var $retval;
        var $0;
        $o_addr=$o;
        $size_ptr_addr=$size_ptr;
        var $1=$o_addr; //@line 145 "_json.c"
        var $2=_PyInt_AsSsize_t($1); //@line 145 "_json.c"
        var $3=$size_ptr_addr; //@line 145 "_json.c"
        HEAP[$3]=$2; //@line 145 "_json.c"
        var $4=$size_ptr_addr; //@line 146 "_json.c"
        var $5=HEAP[$4]; //@line 146 "_json.c"
        var $6=($5)==-1; //@line 146 "_json.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 146 "_json.c"
      case 1: // $bb
        var $7=_PyErr_Occurred(); //@line 146 "_json.c"
        var $8=($7)!=0; //@line 146 "_json.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 146 "_json.c"
      case 2: // $bb1
        $0=0; //@line 147 "_json.c"
        __label__ = 4; break; //@line 147 "_json.c"
      case 3: // $bb2
        $0=1; //@line 148 "_json.c"
        __label__ = 4; break; //@line 148 "_json.c"
      case 4: // $bb3
        var $9=$0; //@line 147 "_json.c"
        $retval=$9; //@line 147 "_json.c"
        var $retval4=$retval; //@line 147 "_json.c"
        ;
        return $retval4; //@line 147 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __convertPyInt_FromSsize_t($size_ptr) {
    ;
    var __label__;
  
    var $size_ptr_addr;
    var $retval;
    var $0;
    $size_ptr_addr=$size_ptr;
    var $1=$size_ptr_addr; //@line 155 "_json.c"
    var $2=HEAP[$1]; //@line 155 "_json.c"
    var $3=_PyInt_FromSsize_t($2); //@line 155 "_json.c"
    $0=$3; //@line 155 "_json.c"
    var $4=$0; //@line 155 "_json.c"
    $retval=$4; //@line 155 "_json.c"
    var $retval1=$retval; //@line 155 "_json.c"
    ;
    return $retval1; //@line 155 "_json.c"
  }
  

  function _ascii_escape_char($c, $output, $chars) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $c_addr;
        var $output_addr;
        var $chars_addr;
        var $retval;
        var $0;
        $c_addr=$c;
        $output_addr=$output;
        $chars_addr=$chars;
        var $1=$output_addr; //@line 164 "_json.c"
        var $2=$chars_addr; //@line 164 "_json.c"
        var $3=$1+$2; //@line 164 "_json.c"
        HEAP[$3]=92; //@line 164 "_json.c"
        var $4=$chars_addr; //@line 164 "_json.c"
        var $5=($4) + 1; //@line 164 "_json.c"
        $chars_addr=$5; //@line 164 "_json.c"
        var $6=$c_addr; //@line 165 "_json.c"
        var $7=($6); //@line 165 "_json.c"
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
        var $8=$c_addr; //@line 166 "_json.c"
        var $9=((($8)) & 255); //@line 166 "_json.c"
        var $10=$output_addr; //@line 166 "_json.c"
        var $11=$chars_addr; //@line 166 "_json.c"
        var $12=$10+$11; //@line 166 "_json.c"
        HEAP[$12]=$9; //@line 166 "_json.c"
        var $13=$chars_addr; //@line 166 "_json.c"
        var $14=($13) + 1; //@line 166 "_json.c"
        $chars_addr=$14; //@line 166 "_json.c"
        __label__ = 9; break; //@line 166 "_json.c"
      case 2: // $bb1
        var $15=$c_addr; //@line 167 "_json.c"
        var $16=((($15)) & 255); //@line 167 "_json.c"
        var $17=$output_addr; //@line 167 "_json.c"
        var $18=$chars_addr; //@line 167 "_json.c"
        var $19=$17+$18; //@line 167 "_json.c"
        HEAP[$19]=$16; //@line 167 "_json.c"
        var $20=$chars_addr; //@line 167 "_json.c"
        var $21=($20) + 1; //@line 167 "_json.c"
        $chars_addr=$21; //@line 167 "_json.c"
        __label__ = 9; break; //@line 167 "_json.c"
      case 3: // $bb2
        var $22=$output_addr; //@line 168 "_json.c"
        var $23=$chars_addr; //@line 168 "_json.c"
        var $24=$22+$23; //@line 168 "_json.c"
        HEAP[$24]=98; //@line 168 "_json.c"
        var $25=$chars_addr; //@line 168 "_json.c"
        var $26=($25) + 1; //@line 168 "_json.c"
        $chars_addr=$26; //@line 168 "_json.c"
        __label__ = 9; break; //@line 168 "_json.c"
      case 4: // $bb3
        var $27=$output_addr; //@line 169 "_json.c"
        var $28=$chars_addr; //@line 169 "_json.c"
        var $29=$27+$28; //@line 169 "_json.c"
        HEAP[$29]=102; //@line 169 "_json.c"
        var $30=$chars_addr; //@line 169 "_json.c"
        var $31=($30) + 1; //@line 169 "_json.c"
        $chars_addr=$31; //@line 169 "_json.c"
        __label__ = 9; break; //@line 169 "_json.c"
      case 5: // $bb4
        var $32=$output_addr; //@line 170 "_json.c"
        var $33=$chars_addr; //@line 170 "_json.c"
        var $34=$32+$33; //@line 170 "_json.c"
        HEAP[$34]=110; //@line 170 "_json.c"
        var $35=$chars_addr; //@line 170 "_json.c"
        var $36=($35) + 1; //@line 170 "_json.c"
        $chars_addr=$36; //@line 170 "_json.c"
        __label__ = 9; break; //@line 170 "_json.c"
      case 6: // $bb5
        var $37=$output_addr; //@line 171 "_json.c"
        var $38=$chars_addr; //@line 171 "_json.c"
        var $39=$37+$38; //@line 171 "_json.c"
        HEAP[$39]=114; //@line 171 "_json.c"
        var $40=$chars_addr; //@line 171 "_json.c"
        var $41=($40) + 1; //@line 171 "_json.c"
        $chars_addr=$41; //@line 171 "_json.c"
        __label__ = 9; break; //@line 171 "_json.c"
      case 7: // $bb6
        var $42=$output_addr; //@line 172 "_json.c"
        var $43=$chars_addr; //@line 172 "_json.c"
        var $44=$42+$43; //@line 172 "_json.c"
        HEAP[$44]=116; //@line 172 "_json.c"
        var $45=$chars_addr; //@line 172 "_json.c"
        var $46=($45) + 1; //@line 172 "_json.c"
        $chars_addr=$46; //@line 172 "_json.c"
        __label__ = 9; break; //@line 172 "_json.c"
      case 8: // $bb7
        var $47=$output_addr; //@line 188 "_json.c"
        var $48=$chars_addr; //@line 188 "_json.c"
        var $49=$47+$48; //@line 188 "_json.c"
        HEAP[$49]=117; //@line 188 "_json.c"
        var $50=$chars_addr; //@line 188 "_json.c"
        var $51=($50) + 1; //@line 188 "_json.c"
        $chars_addr=$51; //@line 188 "_json.c"
        var $52=$c_addr; //@line 189 "_json.c"
        var $53=($52) >>> 12; //@line 189 "_json.c"
        var $54=($53); //@line 189 "_json.c"
        var $55=($54) & 15; //@line 189 "_json.c"
        var $56=__str15+$55; //@line 189 "_json.c"
        var $57=HEAP[$56]; //@line 189 "_json.c"
        var $58=$output_addr; //@line 189 "_json.c"
        var $59=$chars_addr; //@line 189 "_json.c"
        var $60=$58+$59; //@line 189 "_json.c"
        HEAP[$60]=$57; //@line 189 "_json.c"
        var $61=$chars_addr; //@line 189 "_json.c"
        var $62=($61) + 1; //@line 189 "_json.c"
        $chars_addr=$62; //@line 189 "_json.c"
        var $63=$c_addr; //@line 190 "_json.c"
        var $64=($63) >>> 8; //@line 190 "_json.c"
        var $65=($64); //@line 190 "_json.c"
        var $66=($65) & 15; //@line 190 "_json.c"
        var $67=__str15+$66; //@line 190 "_json.c"
        var $68=HEAP[$67]; //@line 190 "_json.c"
        var $69=$output_addr; //@line 190 "_json.c"
        var $70=$chars_addr; //@line 190 "_json.c"
        var $71=$69+$70; //@line 190 "_json.c"
        HEAP[$71]=$68; //@line 190 "_json.c"
        var $72=$chars_addr; //@line 190 "_json.c"
        var $73=($72) + 1; //@line 190 "_json.c"
        $chars_addr=$73; //@line 190 "_json.c"
        var $74=$c_addr; //@line 191 "_json.c"
        var $75=($74) >>> 4; //@line 191 "_json.c"
        var $76=($75); //@line 191 "_json.c"
        var $77=($76) & 15; //@line 191 "_json.c"
        var $78=__str15+$77; //@line 191 "_json.c"
        var $79=HEAP[$78]; //@line 191 "_json.c"
        var $80=$output_addr; //@line 191 "_json.c"
        var $81=$chars_addr; //@line 191 "_json.c"
        var $82=$80+$81; //@line 191 "_json.c"
        HEAP[$82]=$79; //@line 191 "_json.c"
        var $83=$chars_addr; //@line 191 "_json.c"
        var $84=($83) + 1; //@line 191 "_json.c"
        $chars_addr=$84; //@line 191 "_json.c"
        var $85=$c_addr; //@line 192 "_json.c"
        var $86=($85); //@line 192 "_json.c"
        var $87=($86) & 15; //@line 192 "_json.c"
        var $88=__str15+$87; //@line 192 "_json.c"
        var $89=HEAP[$88]; //@line 192 "_json.c"
        var $90=$output_addr; //@line 192 "_json.c"
        var $91=$chars_addr; //@line 192 "_json.c"
        var $92=$90+$91; //@line 192 "_json.c"
        HEAP[$92]=$89; //@line 192 "_json.c"
        var $93=$chars_addr; //@line 192 "_json.c"
        var $94=($93) + 1; //@line 192 "_json.c"
        $chars_addr=$94; //@line 192 "_json.c"
        __label__ = 9; break; //@line 192 "_json.c"
      case 9: // $bb8
        var $95=$chars_addr; //@line 194 "_json.c"
        $0=$95; //@line 194 "_json.c"
        var $96=$0; //@line 194 "_json.c"
        $retval=$96; //@line 194 "_json.c"
        var $retval9=$retval; //@line 194 "_json.c"
        ;
        return $retval9; //@line 194 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ascii_escape_unicode($pystr) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pystr_addr;
        var $retval;
        var $0;
        var $i;
        var $input_chars;
        var $output_size;
        var $max_output_size;
        var $chars;
        var $rval=__stackBase__;
        var $output;
        var $input_unicode;
        var $c;
        var $new_output_size;
        $pystr_addr=$pystr;
        var $1=$pystr_addr; //@line 210 "_json.c"
        var $2=$1; //@line 210 "_json.c"
        var $3=$2+8; //@line 210 "_json.c"
        var $4=HEAP[$3]; //@line 210 "_json.c"
        $input_chars=$4; //@line 210 "_json.c"
        var $5=$pystr_addr; //@line 211 "_json.c"
        var $6=$5; //@line 211 "_json.c"
        var $7=$6+12; //@line 211 "_json.c"
        var $8=HEAP[$7]; //@line 211 "_json.c"
        $input_unicode=$8; //@line 211 "_json.c"
        var $9=$input_chars; //@line 214 "_json.c"
        var $10=($9) + 26; //@line 214 "_json.c"
        $output_size=$10; //@line 214 "_json.c"
        var $11=$input_chars; //@line 215 "_json.c"
        var $12=($11) * 6; //@line 215 "_json.c"
        var $13=($12) + 2; //@line 215 "_json.c"
        $max_output_size=$13; //@line 215 "_json.c"
        var $14=$output_size; //@line 216 "_json.c"
        var $15=_PyString_FromStringAndSize(0, $14); //@line 216 "_json.c"
        HEAP[$rval]=$15; //@line 216 "_json.c"
        var $16=HEAP[$rval]; //@line 217 "_json.c"
        var $17=($16)==0; //@line 217 "_json.c"
        if ($17) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 217 "_json.c"
      case 1: // $bb
        $0=0; //@line 218 "_json.c"
        __label__ = 18; break; //@line 218 "_json.c"
      case 2: // $bb1
        var $18=HEAP[$rval]; //@line 220 "_json.c"
        var $19=$18; //@line 220 "_json.c"
        var $20=$19+20; //@line 220 "_json.c"
        var $21=$20; //@line 220 "_json.c"
        $output=$21; //@line 220 "_json.c"
        $chars=0; //@line 221 "_json.c"
        var $22=$output; //@line 222 "_json.c"
        var $23=$chars; //@line 222 "_json.c"
        var $24=$22+$23; //@line 222 "_json.c"
        HEAP[$24]=34; //@line 222 "_json.c"
        var $25=$chars; //@line 222 "_json.c"
        var $26=($25) + 1; //@line 222 "_json.c"
        $chars=$26; //@line 222 "_json.c"
        $i=0; //@line 223 "_json.c"
        __label__ = 14; break; //@line 223 "_json.c"
      case 3: // $bb2
        var $27=$input_unicode; //@line 224 "_json.c"
        var $28=$i; //@line 224 "_json.c"
        var $29=$27+2*$28; //@line 224 "_json.c"
        var $30=HEAP[$29]; //@line 224 "_json.c"
        $c=$30; //@line 224 "_json.c"
        var $31=$c; //@line 225 "_json.c"
        var $32=($31) <= 31; //@line 225 "_json.c"
        var $33=$c; //@line 225 "_json.c"
        var $34=($33) > 126; //@line 225 "_json.c"
        var $or_cond=($32) | ($34);
        var $35=$c; //@line 225 "_json.c"
        var $36=($35)==92; //@line 225 "_json.c"
        var $or_cond3=($or_cond) | ($36);
        var $37=$c; //@line 225 "_json.c"
        var $38=($37)==34; //@line 225 "_json.c"
        var $or_cond5=($or_cond3) | ($38);
        var $39=$c; //@line 229 "_json.c"
        if ($or_cond5) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 225 "_json.c"
      case 4: // $bb6
        var $40=((($39)) & 255); //@line 226 "_json.c"
        var $41=$output; //@line 226 "_json.c"
        var $42=$chars; //@line 226 "_json.c"
        var $43=$41+$42; //@line 226 "_json.c"
        HEAP[$43]=$40; //@line 226 "_json.c"
        var $44=$chars; //@line 226 "_json.c"
        var $45=($44) + 1; //@line 226 "_json.c"
        $chars=$45; //@line 226 "_json.c"
        __label__ = 6; break; //@line 226 "_json.c"
      case 5: // $bb7
        var $46=($39); //@line 229 "_json.c"
        var $47=((($46)) & 65535); //@line 229 "_json.c"
        var $48=$output; //@line 229 "_json.c"
        var $49=$chars; //@line 229 "_json.c"
        var $50=_ascii_escape_char($47, $48, $49); //@line 229 "_json.c"
        $chars=$50; //@line 229 "_json.c"
        __label__ = 6; break; //@line 229 "_json.c"
      case 6: // $bb8
        var $51=$output_size; //@line 231 "_json.c"
        var $52=$chars; //@line 231 "_json.c"
        var $53=($51) - ($52); //@line 231 "_json.c"
        var $54=($53) <= 6; //@line 231 "_json.c"
        if ($54) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 231 "_json.c"
      case 7: // $bb9
        var $55=$output_size; //@line 233 "_json.c"
        var $56=($55) * 2; //@line 233 "_json.c"
        $new_output_size=$56; //@line 233 "_json.c"
        var $57=$new_output_size; //@line 235 "_json.c"
        var $58=$max_output_size; //@line 235 "_json.c"
        var $59=($57) > ($58); //@line 235 "_json.c"
        if ($59) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 235 "_json.c"
      case 8: // $bb10
        var $60=$max_output_size; //@line 236 "_json.c"
        $new_output_size=$60; //@line 236 "_json.c"
        __label__ = 9; break; //@line 236 "_json.c"
      case 9: // $bb11
        var $61=$new_output_size; //@line 239 "_json.c"
        var $62=$output_size; //@line 239 "_json.c"
        var $63=($61)!=($62); //@line 239 "_json.c"
        if ($63) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 239 "_json.c"
      case 10: // $bb12
        var $64=$new_output_size; //@line 240 "_json.c"
        $output_size=$64; //@line 240 "_json.c"
        var $65=$output_size; //@line 241 "_json.c"
        var $66=__PyString_Resize($rval, $65); //@line 241 "_json.c"
        var $67=($66)==-1; //@line 241 "_json.c"
        if ($67) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 241 "_json.c"
      case 11: // $bb13
        $0=0; //@line 242 "_json.c"
        __label__ = 18; break; //@line 242 "_json.c"
      case 12: // $bb14
        var $68=HEAP[$rval]; //@line 244 "_json.c"
        var $69=$68; //@line 244 "_json.c"
        var $70=$69+20; //@line 244 "_json.c"
        var $71=$70; //@line 244 "_json.c"
        $output=$71; //@line 244 "_json.c"
        __label__ = 13; break; //@line 244 "_json.c"
      case 13: // $bb15
        var $72=$i; //@line 223 "_json.c"
        var $73=($72) + 1; //@line 223 "_json.c"
        $i=$73; //@line 223 "_json.c"
        __label__ = 14; break; //@line 223 "_json.c"
      case 14: // $bb16
        var $74=$i; //@line 223 "_json.c"
        var $75=$input_chars; //@line 223 "_json.c"
        var $76=($74) < ($75); //@line 223 "_json.c"
        if ($76) { __label__ = 3; break; } else { __label__ = 15; break; } //@line 223 "_json.c"
      case 15: // $bb17
        var $77=$output; //@line 248 "_json.c"
        var $78=$chars; //@line 248 "_json.c"
        var $79=$77+$78; //@line 248 "_json.c"
        HEAP[$79]=34; //@line 248 "_json.c"
        var $80=$chars; //@line 248 "_json.c"
        var $81=($80) + 1; //@line 248 "_json.c"
        $chars=$81; //@line 248 "_json.c"
        var $82=$chars; //@line 249 "_json.c"
        var $83=__PyString_Resize($rval, $82); //@line 249 "_json.c"
        var $84=($83)==-1; //@line 249 "_json.c"
        if ($84) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 249 "_json.c"
      case 16: // $bb18
        $0=0; //@line 250 "_json.c"
        __label__ = 18; break; //@line 250 "_json.c"
      case 17: // $bb19
        var $85=HEAP[$rval]; //@line 252 "_json.c"
        $0=$85; //@line 252 "_json.c"
        __label__ = 18; break; //@line 252 "_json.c"
      case 18: // $bb20
        var $86=$0; //@line 218 "_json.c"
        $retval=$86; //@line 218 "_json.c"
        var $retval21=$retval; //@line 218 "_json.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 218 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _raise_errmsg($msg, $s, $end) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $msg_addr;
        var $s_addr;
        var $end_addr=__stackBase__;
        var $pymsg;
        var $decoder;
        $msg_addr=$msg;
        $s_addr=$s;
        HEAP[$end_addr]=$end;
        var $0=HEAP[_errmsg_fn_8641]; //@line 348 "_json.c"
        var $1=($0)==0; //@line 348 "_json.c"
        if ($1) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 348 "_json.c"
      case 1: // $bb
        var $2=_PyImport_ImportModule(__str16); //@line 349 "_json.c"
        $decoder=$2; //@line 349 "_json.c"
        var $3=$decoder; //@line 350 "_json.c"
        var $4=($3)==0; //@line 350 "_json.c"
        if ($4) { __label__ = 8; break; } else { __label__ = 2; break; } //@line 350 "_json.c"
      case 2: // $bb1
        var $5=$decoder; //@line 352 "_json.c"
        var $6=_PyObject_GetAttrString($5, __str17); //@line 352 "_json.c"
        HEAP[_errmsg_fn_8641]=$6; //@line 352 "_json.c"
        var $7=$decoder; //@line 353 "_json.c"
        var $8=$7; //@line 353 "_json.c"
        var $9=HEAP[$8]; //@line 353 "_json.c"
        var $10=($9) - 1; //@line 353 "_json.c"
        var $11=$decoder; //@line 353 "_json.c"
        var $12=$11; //@line 353 "_json.c"
        HEAP[$12]=$10; //@line 353 "_json.c"
        var $13=$decoder; //@line 353 "_json.c"
        var $14=$13; //@line 353 "_json.c"
        var $15=HEAP[$14]; //@line 353 "_json.c"
        var $16=($15)==0; //@line 353 "_json.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 353 "_json.c"
      case 3: // $bb2
        var $17=$decoder; //@line 353 "_json.c"
        var $18=$17+4; //@line 353 "_json.c"
        var $19=HEAP[$18]; //@line 353 "_json.c"
        var $20=$19+24; //@line 353 "_json.c"
        var $21=HEAP[$20]; //@line 353 "_json.c"
        var $22=$decoder; //@line 353 "_json.c"
        FUNCTION_TABLE[$21]($22); //@line 353 "_json.c"
        __label__ = 4; break; //@line 353 "_json.c"
      case 4: // $bb3
        var $23=HEAP[_errmsg_fn_8641]; //@line 354 "_json.c"
        var $24=($23)==0; //@line 354 "_json.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 354 "_json.c"
      case 5: // $bb4
        var $25=HEAP[_errmsg_fn_8641]; //@line 357 "_json.c"
        var $26=$msg_addr; //@line 357 "_json.c"
        var $27=$s_addr; //@line 357 "_json.c"
        var $28=_PyObject_CallFunction($25, __str18, $26, $27, (FUNCTION_TABLE_OFFSET + 2), $end_addr); //@line 357 "_json.c"
        $pymsg=$28; //@line 357 "_json.c"
        var $29=($28)!=0; //@line 358 "_json.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 358 "_json.c"
      case 6: // $bb5
        var $30=HEAP[_PyExc_ValueError]; //@line 359 "_json.c"
        var $31=$pymsg; //@line 359 "_json.c"
        _PyErr_SetObject($30, $31); //@line 359 "_json.c"
        var $32=$pymsg; //@line 360 "_json.c"
        var $33=$32; //@line 360 "_json.c"
        var $34=HEAP[$33]; //@line 360 "_json.c"
        var $35=($34) - 1; //@line 360 "_json.c"
        var $36=$pymsg; //@line 360 "_json.c"
        var $37=$36; //@line 360 "_json.c"
        HEAP[$37]=$35; //@line 360 "_json.c"
        var $38=$pymsg; //@line 360 "_json.c"
        var $39=$38; //@line 360 "_json.c"
        var $40=HEAP[$39]; //@line 360 "_json.c"
        var $41=($40)==0; //@line 360 "_json.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 360 "_json.c"
      case 7: // $bb6
        var $42=$pymsg; //@line 360 "_json.c"
        var $43=$42+4; //@line 360 "_json.c"
        var $44=HEAP[$43]; //@line 360 "_json.c"
        var $45=$44+24; //@line 360 "_json.c"
        var $46=HEAP[$45]; //@line 360 "_json.c"
        var $47=$pymsg; //@line 360 "_json.c"
        FUNCTION_TABLE[$46]($47); //@line 360 "_json.c"
        __label__ = 8; break; //@line 360 "_json.c"
      case 8: // $return
        STACKTOP = __stackBase__;
        return; //@line 351 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _join_list_unicode($lst) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lst_addr;
        var $retval;
        var $0;
        var $ustr;
        $lst_addr=$lst;
        var $1=HEAP[_joinfn_8675]; //@line 369 "_json.c"
        var $2=($1)==0; //@line 369 "_json.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 369 "_json.c"
      case 1: // $bb
        var $3=_PyUnicodeUCS2_FromUnicode(0, 0); //@line 370 "_json.c"
        $ustr=$3; //@line 370 "_json.c"
        var $4=$ustr; //@line 371 "_json.c"
        var $5=($4)==0; //@line 371 "_json.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 371 "_json.c"
      case 2: // $bb1
        $0=0; //@line 372 "_json.c"
        __label__ = 8; break; //@line 372 "_json.c"
      case 3: // $bb2
        var $6=$ustr; //@line 374 "_json.c"
        var $7=_PyObject_GetAttrString($6, __str19); //@line 374 "_json.c"
        HEAP[_joinfn_8675]=$7; //@line 374 "_json.c"
        var $8=$ustr; //@line 375 "_json.c"
        var $9=$8; //@line 375 "_json.c"
        var $10=HEAP[$9]; //@line 375 "_json.c"
        var $11=($10) - 1; //@line 375 "_json.c"
        var $12=$ustr; //@line 375 "_json.c"
        var $13=$12; //@line 375 "_json.c"
        HEAP[$13]=$11; //@line 375 "_json.c"
        var $14=$ustr; //@line 375 "_json.c"
        var $15=$14; //@line 375 "_json.c"
        var $16=HEAP[$15]; //@line 375 "_json.c"
        var $17=($16)==0; //@line 375 "_json.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 375 "_json.c"
      case 4: // $bb3
        var $18=$ustr; //@line 375 "_json.c"
        var $19=$18+4; //@line 375 "_json.c"
        var $20=HEAP[$19]; //@line 375 "_json.c"
        var $21=$20+24; //@line 375 "_json.c"
        var $22=HEAP[$21]; //@line 375 "_json.c"
        var $23=$ustr; //@line 375 "_json.c"
        FUNCTION_TABLE[$22]($23); //@line 375 "_json.c"
        __label__ = 5; break; //@line 375 "_json.c"
      case 5: // $bb4
        var $24=HEAP[_joinfn_8675]; //@line 376 "_json.c"
        var $25=($24)==0; //@line 376 "_json.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 376 "_json.c"
      case 6: // $bb5
        $0=0; //@line 377 "_json.c"
        __label__ = 8; break; //@line 377 "_json.c"
      case 7: // $bb6
        var $26=HEAP[_joinfn_8675]; //@line 379 "_json.c"
        var $27=$lst_addr; //@line 379 "_json.c"
        var $28=_PyObject_CallFunctionObjArgs($26, $27, 0); //@line 379 "_json.c"
        $0=$28; //@line 379 "_json.c"
        __label__ = 8; break; //@line 379 "_json.c"
      case 8: // $bb7
        var $29=$0; //@line 372 "_json.c"
        $retval=$29; //@line 372 "_json.c"
        var $retval8=$retval; //@line 372 "_json.c"
        ;
        return $retval8; //@line 372 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __build_rval_index_tuple($rval, $idx) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $rval_addr;
        var $idx_addr;
        var $retval;
        var $0;
        var $tpl;
        var $pyidx;
        $rval_addr=$rval;
        $idx_addr=$idx;
        var $1=$rval_addr; //@line 390 "_json.c"
        var $2=($1)==0; //@line 390 "_json.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 390 "_json.c"
      case 1: // $bb
        $0=0; //@line 391 "_json.c"
        __label__ = 13; break; //@line 391 "_json.c"
      case 2: // $bb1
        var $3=$idx_addr; //@line 393 "_json.c"
        var $4=_PyInt_FromSsize_t($3); //@line 393 "_json.c"
        $pyidx=$4; //@line 393 "_json.c"
        var $5=$pyidx; //@line 394 "_json.c"
        var $6=($5)==0; //@line 394 "_json.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 394 "_json.c"
      case 3: // $bb2
        var $7=$rval_addr; //@line 395 "_json.c"
        var $8=$7; //@line 395 "_json.c"
        var $9=HEAP[$8]; //@line 395 "_json.c"
        var $10=($9) - 1; //@line 395 "_json.c"
        var $11=$rval_addr; //@line 395 "_json.c"
        var $12=$11; //@line 395 "_json.c"
        HEAP[$12]=$10; //@line 395 "_json.c"
        var $13=$rval_addr; //@line 395 "_json.c"
        var $14=$13; //@line 395 "_json.c"
        var $15=HEAP[$14]; //@line 395 "_json.c"
        var $16=($15)==0; //@line 395 "_json.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 395 "_json.c"
      case 4: // $bb3
        var $17=$rval_addr; //@line 395 "_json.c"
        var $18=$17+4; //@line 395 "_json.c"
        var $19=HEAP[$18]; //@line 395 "_json.c"
        var $20=$19+24; //@line 395 "_json.c"
        var $21=HEAP[$20]; //@line 395 "_json.c"
        var $22=$rval_addr; //@line 395 "_json.c"
        FUNCTION_TABLE[$21]($22); //@line 395 "_json.c"
        __label__ = 5; break; //@line 395 "_json.c"
      case 5: // $bb4
        $0=0; //@line 396 "_json.c"
        __label__ = 13; break; //@line 396 "_json.c"
      case 6: // $bb5
        var $23=_PyTuple_New(2); //@line 398 "_json.c"
        $tpl=$23; //@line 398 "_json.c"
        var $24=$tpl; //@line 399 "_json.c"
        var $25=($24)==0; //@line 399 "_json.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 399 "_json.c"
      case 7: // $bb6
        var $26=$pyidx; //@line 400 "_json.c"
        var $27=$26; //@line 400 "_json.c"
        var $28=HEAP[$27]; //@line 400 "_json.c"
        var $29=($28) - 1; //@line 400 "_json.c"
        var $30=$pyidx; //@line 400 "_json.c"
        var $31=$30; //@line 400 "_json.c"
        HEAP[$31]=$29; //@line 400 "_json.c"
        var $32=$pyidx; //@line 400 "_json.c"
        var $33=$32; //@line 400 "_json.c"
        var $34=HEAP[$33]; //@line 400 "_json.c"
        var $35=($34)==0; //@line 400 "_json.c"
        if ($35) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 400 "_json.c"
      case 8: // $bb7
        var $36=$pyidx; //@line 400 "_json.c"
        var $37=$36+4; //@line 400 "_json.c"
        var $38=HEAP[$37]; //@line 400 "_json.c"
        var $39=$38+24; //@line 400 "_json.c"
        var $40=HEAP[$39]; //@line 400 "_json.c"
        var $41=$pyidx; //@line 400 "_json.c"
        FUNCTION_TABLE[$40]($41); //@line 400 "_json.c"
        __label__ = 9; break; //@line 400 "_json.c"
      case 9: // $bb8
        var $42=$rval_addr; //@line 401 "_json.c"
        var $43=$42; //@line 401 "_json.c"
        var $44=HEAP[$43]; //@line 401 "_json.c"
        var $45=($44) - 1; //@line 401 "_json.c"
        var $46=$rval_addr; //@line 401 "_json.c"
        var $47=$46; //@line 401 "_json.c"
        HEAP[$47]=$45; //@line 401 "_json.c"
        var $48=$rval_addr; //@line 401 "_json.c"
        var $49=$48; //@line 401 "_json.c"
        var $50=HEAP[$49]; //@line 401 "_json.c"
        var $51=($50)==0; //@line 401 "_json.c"
        if ($51) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 401 "_json.c"
      case 10: // $bb9
        var $52=$rval_addr; //@line 401 "_json.c"
        var $53=$52+4; //@line 401 "_json.c"
        var $54=HEAP[$53]; //@line 401 "_json.c"
        var $55=$54+24; //@line 401 "_json.c"
        var $56=HEAP[$55]; //@line 401 "_json.c"
        var $57=$rval_addr; //@line 401 "_json.c"
        FUNCTION_TABLE[$56]($57); //@line 401 "_json.c"
        __label__ = 11; break; //@line 401 "_json.c"
      case 11: // $bb10
        $0=0; //@line 402 "_json.c"
        __label__ = 13; break; //@line 402 "_json.c"
      case 12: // $bb11
        var $58=$tpl; //@line 404 "_json.c"
        var $59=$58; //@line 404 "_json.c"
        var $60=$59+12; //@line 404 "_json.c"
        var $61=$60; //@line 404 "_json.c"
        var $62=$rval_addr; //@line 404 "_json.c"
        HEAP[$61]=$62; //@line 404 "_json.c"
        var $63=$tpl; //@line 405 "_json.c"
        var $64=$63; //@line 405 "_json.c"
        var $65=$64+12; //@line 405 "_json.c"
        var $66=$65+4; //@line 405 "_json.c"
        var $67=$pyidx; //@line 405 "_json.c"
        HEAP[$66]=$67; //@line 405 "_json.c"
        var $68=$tpl; //@line 406 "_json.c"
        $0=$68; //@line 406 "_json.c"
        __label__ = 13; break; //@line 406 "_json.c"
      case 13: // $bb12
        var $69=$0; //@line 391 "_json.c"
        $retval=$69; //@line 391 "_json.c"
        var $retval13=$retval; //@line 391 "_json.c"
        ;
        return $retval13; //@line 391 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanstring_str($pystr, $end, $encoding, $strict, $next_end_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 2; _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pystr_addr;
        var $end_addr;
        var $encoding_addr;
        var $strict_addr;
        var $next_end_ptr_addr;
        var $retval;
        var $0;
        var $rval;
        var $len;
        var $begin;
        var $next;
        var $buf;
        var $chunks;
        var $c=__stackBase__;
        var $chunk;
        var $strchunk;
        var $digit;
        var $_py_tmp;
        $pystr_addr=$pystr;
        $end_addr=$end;
        $encoding_addr=$encoding;
        $strict_addr=$strict;
        $next_end_ptr_addr=$next_end_ptr;
        var $1=$pystr_addr; //@line 422 "_json.c"
        var $2=$1; //@line 422 "_json.c"
        var $3=$2+8; //@line 422 "_json.c"
        var $4=HEAP[$3]; //@line 422 "_json.c"
        $len=$4; //@line 422 "_json.c"
        var $5=$end_addr; //@line 423 "_json.c"
        var $6=($5) - 1; //@line 423 "_json.c"
        $begin=$6; //@line 423 "_json.c"
        var $7=$pystr_addr; //@line 425 "_json.c"
        var $8=$7; //@line 425 "_json.c"
        var $9=$8+20; //@line 425 "_json.c"
        var $10=$9; //@line 425 "_json.c"
        $buf=$10; //@line 425 "_json.c"
        var $11=_PyList_New(0); //@line 426 "_json.c"
        $chunks=$11; //@line 426 "_json.c"
        var $12=$chunks; //@line 427 "_json.c"
        var $13=($12)==0; //@line 427 "_json.c"
        if ($13) { __label__ = 56; break; } else { __label__ = 1; break; } //@line 427 "_json.c"
      case 1: // $bb
        var $14=$end_addr; //@line 430 "_json.c"
        var $15=($14) < 0; //@line 430 "_json.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 430 "_json.c"
      case 2: // $bb1
        var $16=$len; //@line 430 "_json.c"
        var $17=$end_addr; //@line 430 "_json.c"
        var $18=($16) <= ($17); //@line 430 "_json.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 430 "_json.c"
      case 3: // $bb2
        var $19=HEAP[_PyExc_ValueError]; //@line 431 "_json.c"
        _PyErr_SetString($19, __str20); //@line 431 "_json.c"
        __label__ = 56; break; //@line 431 "_json.c"
      case 4: // $bb3
        HEAP[$c]=0; //@line 436 "_json.c"
        $chunk=0; //@line 437 "_json.c"
        var $20=$end_addr; //@line 438 "_json.c"
        $next=$20; //@line 438 "_json.c"
        __label__ = 10; break; //@line 438 "_json.c"
      case 5: // $bb4
        var $21=$buf; //@line 439 "_json.c"
        var $22=$next; //@line 439 "_json.c"
        var $23=$21+$22; //@line 439 "_json.c"
        var $24=HEAP[$23]; //@line 439 "_json.c"
        var $25=($24); //@line 439 "_json.c"
        HEAP[$c]=$25; //@line 439 "_json.c"
        var $26=HEAP[$c]; //@line 440 "_json.c"
        var $27=($26)==34; //@line 440 "_json.c"
        var $28=HEAP[$c]; //@line 440 "_json.c"
        var $29=($28)==92; //@line 440 "_json.c"
        var $or_cond=($27) | ($29);
        if ($or_cond) { __label__ = 11; break; } else { __label__ = 6; break; } //@line 440 "_json.c"
      case 6: // $bb6
        var $30=$strict_addr; //@line 443 "_json.c"
        var $31=($30)!=0; //@line 443 "_json.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 443 "_json.c"
      case 7: // $bb7
        var $32=HEAP[$c]; //@line 443 "_json.c"
        var $33=($32) <= 31; //@line 443 "_json.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 443 "_json.c"
      case 8: // $bb8
        var $34=$pystr_addr; //@line 444 "_json.c"
        var $35=$next; //@line 444 "_json.c"
        _raise_errmsg(__str21, $34, $35); //@line 444 "_json.c"
        __label__ = 56; break; //@line 444 "_json.c"
      case 9: // $bb9
        var $36=$next; //@line 438 "_json.c"
        var $37=($36) + 1; //@line 438 "_json.c"
        $next=$37; //@line 438 "_json.c"
        __label__ = 10; break; //@line 438 "_json.c"
      case 10: // $bb10
        var $38=$next; //@line 438 "_json.c"
        var $39=$len; //@line 438 "_json.c"
        var $40=($38) < ($39); //@line 438 "_json.c"
        if ($40) { __label__ = 5; break; } else { __label__ = 11; break; } //@line 438 "_json.c"
      case 11: // $bb11
        var $41=HEAP[$c]; //@line 448 "_json.c"
        var $42=($41)!=34; //@line 448 "_json.c"
        var $43=HEAP[$c]; //@line 448 "_json.c"
        var $44=($43)!=92; //@line 448 "_json.c"
        var $or_cond3=($42) & ($44);
        if ($or_cond3) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 448 "_json.c"
      case 12: // $bb13
        var $45=$pystr_addr; //@line 449 "_json.c"
        var $46=$begin; //@line 449 "_json.c"
        _raise_errmsg(__str22, $45, $46); //@line 449 "_json.c"
        __label__ = 56; break; //@line 449 "_json.c"
      case 13: // $bb14
        var $47=$next; //@line 453 "_json.c"
        var $48=$end_addr; //@line 453 "_json.c"
        var $49=($47)!=($48); //@line 453 "_json.c"
        if ($49) { __label__ = 14; break; } else { __label__ = 23; break; } //@line 453 "_json.c"
      case 14: // $bb15
        var $50=$next; //@line 454 "_json.c"
        var $51=$end_addr; //@line 454 "_json.c"
        var $52=($50) - ($51); //@line 454 "_json.c"
        var $53=$buf; //@line 454 "_json.c"
        var $54=$end_addr; //@line 454 "_json.c"
        var $55=$53+$54; //@line 454 "_json.c"
        var $56=_PyString_FromStringAndSize($55, $52); //@line 454 "_json.c"
        $strchunk=$56; //@line 454 "_json.c"
        var $57=$strchunk; //@line 455 "_json.c"
        var $58=($57)==0; //@line 455 "_json.c"
        if ($58) { __label__ = 56; break; } else { __label__ = 15; break; } //@line 455 "_json.c"
      case 15: // $bb16
        var $59=$strchunk; //@line 458 "_json.c"
        var $60=$encoding_addr; //@line 458 "_json.c"
        var $61=_PyUnicodeUCS2_FromEncodedObject($59, $60, 0); //@line 458 "_json.c"
        $chunk=$61; //@line 458 "_json.c"
        var $62=$strchunk; //@line 459 "_json.c"
        var $63=$62; //@line 459 "_json.c"
        var $64=HEAP[$63]; //@line 459 "_json.c"
        var $65=($64) - 1; //@line 459 "_json.c"
        var $66=$strchunk; //@line 459 "_json.c"
        var $67=$66; //@line 459 "_json.c"
        HEAP[$67]=$65; //@line 459 "_json.c"
        var $68=$strchunk; //@line 459 "_json.c"
        var $69=$68; //@line 459 "_json.c"
        var $70=HEAP[$69]; //@line 459 "_json.c"
        var $71=($70)==0; //@line 459 "_json.c"
        if ($71) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 459 "_json.c"
      case 16: // $bb17
        var $72=$strchunk; //@line 459 "_json.c"
        var $73=$72+4; //@line 459 "_json.c"
        var $74=HEAP[$73]; //@line 459 "_json.c"
        var $75=$74+24; //@line 459 "_json.c"
        var $76=HEAP[$75]; //@line 459 "_json.c"
        var $77=$strchunk; //@line 459 "_json.c"
        FUNCTION_TABLE[$76]($77); //@line 459 "_json.c"
        __label__ = 17; break; //@line 459 "_json.c"
      case 17: // $bb18
        var $78=$chunk; //@line 460 "_json.c"
        var $79=($78)==0; //@line 460 "_json.c"
        if ($79) { __label__ = 56; break; } else { __label__ = 18; break; } //@line 460 "_json.c"
      case 18: // $bb19
        var $80=$chunks; //@line 463 "_json.c"
        var $81=$chunk; //@line 463 "_json.c"
        var $82=_PyList_Append($80, $81); //@line 463 "_json.c"
        var $83=($82)!=0; //@line 463 "_json.c"
        var $84=$chunk; //@line 464 "_json.c"
        var $85=$84; //@line 464 "_json.c"
        var $86=HEAP[$85]; //@line 464 "_json.c"
        var $87=($86) - 1; //@line 464 "_json.c"
        var $88=$chunk; //@line 464 "_json.c"
        var $89=$88; //@line 464 "_json.c"
        HEAP[$89]=$87; //@line 464 "_json.c"
        var $90=$chunk; //@line 464 "_json.c"
        var $91=$90; //@line 464 "_json.c"
        var $92=HEAP[$91]; //@line 464 "_json.c"
        var $93=($92)==0; //@line 464 "_json.c"
        if ($83) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 463 "_json.c"
      case 19: // $bb20
        if ($93) { __label__ = 20; break; } else { __label__ = 56; break; } //@line 464 "_json.c"
      case 20: // $bb21
        var $94=$chunk; //@line 464 "_json.c"
        var $95=$94+4; //@line 464 "_json.c"
        var $96=HEAP[$95]; //@line 464 "_json.c"
        var $97=$96+24; //@line 464 "_json.c"
        var $98=HEAP[$97]; //@line 464 "_json.c"
        var $99=$chunk; //@line 464 "_json.c"
        FUNCTION_TABLE[$98]($99); //@line 464 "_json.c"
        __label__ = 56; break; //@line 464 "_json.c"
      case 21: // $bb23
        if ($93) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 467 "_json.c"
      case 22: // $bb24
        var $100=$chunk; //@line 467 "_json.c"
        var $101=$100+4; //@line 467 "_json.c"
        var $102=HEAP[$101]; //@line 467 "_json.c"
        var $103=$102+24; //@line 467 "_json.c"
        var $104=HEAP[$103]; //@line 467 "_json.c"
        var $105=$chunk; //@line 467 "_json.c"
        FUNCTION_TABLE[$104]($105); //@line 467 "_json.c"
        __label__ = 23; break; //@line 467 "_json.c"
      case 23: // $bb25
        var $106=$next; //@line 469 "_json.c"
        var $107=($106) + 1; //@line 469 "_json.c"
        $next=$107; //@line 469 "_json.c"
        var $108=HEAP[$c]; //@line 470 "_json.c"
        var $109=($108)==34; //@line 470 "_json.c"
        var $110=$next; //@line 471 "_json.c"
        if ($109) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 470 "_json.c"
      case 24: // $bb26
        $end_addr=$110; //@line 471 "_json.c"
        var $111=$chunks; //@line 580 "_json.c"
        var $112=_join_list_unicode($111); //@line 580 "_json.c"
        $rval=$112; //@line 580 "_json.c"
        var $113=$rval; //@line 581 "_json.c"
        var $114=($113)==0; //@line 581 "_json.c"
        if ($114) { __label__ = 56; break; } else { __label__ = 52; break; } //@line 581 "_json.c"
      case 25: // $bb27
        var $115=$len; //@line 474 "_json.c"
        var $116=($110)==($115); //@line 474 "_json.c"
        if ($116) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 474 "_json.c"
      case 26: // $bb28
        var $117=$pystr_addr; //@line 475 "_json.c"
        var $118=$begin; //@line 475 "_json.c"
        _raise_errmsg(__str22, $117, $118); //@line 475 "_json.c"
        __label__ = 56; break; //@line 475 "_json.c"
      case 27: // $bb29
        var $119=$buf; //@line 478 "_json.c"
        var $120=$next; //@line 478 "_json.c"
        var $121=$119+$120; //@line 478 "_json.c"
        var $122=HEAP[$121]; //@line 478 "_json.c"
        var $123=($122); //@line 478 "_json.c"
        HEAP[$c]=$123; //@line 478 "_json.c"
        var $124=HEAP[$c]; //@line 479 "_json.c"
        var $125=($124)!=117; //@line 479 "_json.c"
        if ($125) { __label__ = 28; break; } else { __label__ = 37; break; } //@line 479 "_json.c"
      case 28: // $bb30
        var $126=$next; //@line 481 "_json.c"
        var $127=($126) + 1; //@line 481 "_json.c"
        $end_addr=$127; //@line 481 "_json.c"
        var $128=HEAP[$c]; //@line 482 "_json.c"
        var $129=($128); //@line 482 "_json.c"
        if ($129 == 34) {
          __label__ = 35; break;
        }
        else if ($129 == 47) {
          __label__ = 35; break;
        }
        else if ($129 == 92) {
          __label__ = 35; break;
        }
        else if ($129 == 98) {
          __label__ = 29; break;
        }
        else if ($129 == 102) {
          __label__ = 30; break;
        }
        else if ($129 == 110) {
          __label__ = 31; break;
        }
        else if ($129 == 114) {
          __label__ = 32; break;
        }
        else if ($129 == 116) {
          __label__ = 33; break;
        }
        else {
        __label__ = 34; break;
        }
        
      case 29: // $bb34
        HEAP[$c]=8; //@line 486 "_json.c"
        __label__ = 46; break; //@line 486 "_json.c"
      case 30: // $bb35
        HEAP[$c]=12; //@line 487 "_json.c"
        __label__ = 46; break; //@line 487 "_json.c"
      case 31: // $bb36
        HEAP[$c]=10; //@line 488 "_json.c"
        __label__ = 46; break; //@line 488 "_json.c"
      case 32: // $bb37
        HEAP[$c]=13; //@line 489 "_json.c"
        __label__ = 46; break; //@line 489 "_json.c"
      case 33: // $bb38
        HEAP[$c]=9; //@line 490 "_json.c"
        __label__ = 46; break; //@line 490 "_json.c"
      case 34: // $bb40_thread4
        HEAP[$c]=0; //@line 491 "_json.c"
        __label__ = 36; break;
      case 35: // $bb40
        var $130=($128)==0; //@line 493 "_json.c"
        if ($130) { __label__ = 36; break; } else { __label__ = 46; break; } //@line 493 "_json.c"
      case 36: // $bb41
        var $131=$end_addr; //@line 494 "_json.c"
        var $132=($131) - 2; //@line 494 "_json.c"
        var $133=$pystr_addr; //@line 494 "_json.c"
        _raise_errmsg(__str23, $133, $132); //@line 494 "_json.c"
        __label__ = 56; break; //@line 494 "_json.c"
      case 37: // $bb43
        HEAP[$c]=0; //@line 499 "_json.c"
        var $134=$next; //@line 500 "_json.c"
        var $135=($134) + 1; //@line 500 "_json.c"
        $next=$135; //@line 500 "_json.c"
        var $136=$next; //@line 501 "_json.c"
        var $137=($136) + 4; //@line 501 "_json.c"
        $end_addr=$137; //@line 501 "_json.c"
        var $138=$end_addr; //@line 502 "_json.c"
        var $139=$len; //@line 502 "_json.c"
        var $140=($138) >= ($139); //@line 502 "_json.c"
        if ($140) { __label__ = 38; break; } else { __label__ = 45; break; } //@line 502 "_json.c"
      case 38: // $bb44
        var $141=$next; //@line 503 "_json.c"
        var $142=($141) - 1; //@line 503 "_json.c"
        var $143=$pystr_addr; //@line 503 "_json.c"
        _raise_errmsg(__str24, $143, $142); //@line 503 "_json.c"
        __label__ = 56; break; //@line 503 "_json.c"
      case 39: // $bb46
        var $144=$buf; //@line 508 "_json.c"
        var $145=$next; //@line 508 "_json.c"
        var $146=$144+$145; //@line 508 "_json.c"
        var $147=HEAP[$146]; //@line 508 "_json.c"
        var $148=($147); //@line 508 "_json.c"
        $digit=$148; //@line 508 "_json.c"
        var $149=HEAP[$c]; //@line 509 "_json.c"
        var $150=($149) << 4; //@line 509 "_json.c"
        HEAP[$c]=$150; //@line 509 "_json.c"
        var $151=$digit; //@line 510 "_json.c"
        var $152=($151); //@line 510 "_json.c"
        if ($152 == 48) {
          __label__ = 40; break;
        }
        else if ($152 == 49) {
          __label__ = 40; break;
        }
        else if ($152 == 50) {
          __label__ = 40; break;
        }
        else if ($152 == 51) {
          __label__ = 40; break;
        }
        else if ($152 == 52) {
          __label__ = 40; break;
        }
        else if ($152 == 53) {
          __label__ = 40; break;
        }
        else if ($152 == 54) {
          __label__ = 40; break;
        }
        else if ($152 == 55) {
          __label__ = 40; break;
        }
        else if ($152 == 56) {
          __label__ = 40; break;
        }
        else if ($152 == 57) {
          __label__ = 40; break;
        }
        else if ($152 == 65) {
          __label__ = 42; break;
        }
        else if ($152 == 66) {
          __label__ = 42; break;
        }
        else if ($152 == 67) {
          __label__ = 42; break;
        }
        else if ($152 == 68) {
          __label__ = 42; break;
        }
        else if ($152 == 69) {
          __label__ = 42; break;
        }
        else if ($152 == 70) {
          __label__ = 42; break;
        }
        else if ($152 == 97) {
          __label__ = 41; break;
        }
        else if ($152 == 98) {
          __label__ = 41; break;
        }
        else if ($152 == 99) {
          __label__ = 41; break;
        }
        else if ($152 == 100) {
          __label__ = 41; break;
        }
        else if ($152 == 101) {
          __label__ = 41; break;
        }
        else if ($152 == 102) {
          __label__ = 41; break;
        }
        else {
        __label__ = 43; break;
        }
        
      case 40: // $bb47
        var $153=$digit; //@line 513 "_json.c"
        var $154=($153) - 48; //@line 513 "_json.c"
        var $155=HEAP[$c]; //@line 513 "_json.c"
        var $156=($154) | ($155); //@line 513 "_json.c"
        HEAP[$c]=$156; //@line 513 "_json.c"
        __label__ = 44; break; //@line 513 "_json.c"
      case 41: // $bb48
        var $157=$digit; //@line 516 "_json.c"
        var $158=($157) - 87; //@line 516 "_json.c"
        var $159=HEAP[$c]; //@line 516 "_json.c"
        var $160=($158) | ($159); //@line 516 "_json.c"
        HEAP[$c]=$160; //@line 516 "_json.c"
        __label__ = 44; break; //@line 516 "_json.c"
      case 42: // $bb49
        var $161=$digit; //@line 519 "_json.c"
        var $162=($161) - 55; //@line 519 "_json.c"
        var $163=HEAP[$c]; //@line 519 "_json.c"
        var $164=($162) | ($163); //@line 519 "_json.c"
        HEAP[$c]=$164; //@line 519 "_json.c"
        __label__ = 44; break; //@line 519 "_json.c"
      case 43: // $bb50
        var $165=$end_addr; //@line 521 "_json.c"
        var $166=($165) - 5; //@line 521 "_json.c"
        var $167=$pystr_addr; //@line 521 "_json.c"
        _raise_errmsg(__str24, $167, $166); //@line 521 "_json.c"
        __label__ = 56; break; //@line 521 "_json.c"
      case 44: // $bb51
        var $168=$next; //@line 507 "_json.c"
        var $169=($168) + 1; //@line 507 "_json.c"
        $next=$169; //@line 507 "_json.c"
        __label__ = 45; break; //@line 507 "_json.c"
      case 45: // $bb52
        var $170=$next; //@line 507 "_json.c"
        var $171=$end_addr; //@line 507 "_json.c"
        var $172=($170) < ($171); //@line 507 "_json.c"
        if ($172) { __label__ = 39; break; } else { __label__ = 46; break; } //@line 507 "_json.c"
      case 46: // $bb53
        var $173=_PyUnicodeUCS2_FromUnicode($c, 1); //@line 569 "_json.c"
        $chunk=$173; //@line 569 "_json.c"
        var $174=($173)==0; //@line 570 "_json.c"
        if ($174) { __label__ = 56; break; } else { __label__ = 47; break; } //@line 570 "_json.c"
      case 47: // $bb54
        var $175=$chunks; //@line 573 "_json.c"
        var $176=$chunk; //@line 573 "_json.c"
        var $177=_PyList_Append($175, $176); //@line 573 "_json.c"
        var $178=($177)!=0; //@line 573 "_json.c"
        var $179=$chunk; //@line 574 "_json.c"
        var $180=$179; //@line 574 "_json.c"
        var $181=HEAP[$180]; //@line 574 "_json.c"
        var $182=($181) - 1; //@line 574 "_json.c"
        var $183=$chunk; //@line 574 "_json.c"
        var $184=$183; //@line 574 "_json.c"
        HEAP[$184]=$182; //@line 574 "_json.c"
        var $185=$chunk; //@line 574 "_json.c"
        var $186=$185; //@line 574 "_json.c"
        var $187=HEAP[$186]; //@line 574 "_json.c"
        var $188=($187)==0; //@line 574 "_json.c"
        if ($178) { __label__ = 48; break; } else { __label__ = 50; break; } //@line 573 "_json.c"
      case 48: // $bb55
        if ($188) { __label__ = 49; break; } else { __label__ = 56; break; } //@line 574 "_json.c"
      case 49: // $bb56
        var $189=$chunk; //@line 574 "_json.c"
        var $190=$189+4; //@line 574 "_json.c"
        var $191=HEAP[$190]; //@line 574 "_json.c"
        var $192=$191+24; //@line 574 "_json.c"
        var $193=HEAP[$192]; //@line 574 "_json.c"
        var $194=$chunk; //@line 574 "_json.c"
        FUNCTION_TABLE[$193]($194); //@line 574 "_json.c"
        __label__ = 56; break; //@line 574 "_json.c"
      case 50: // $bb58
        if ($188) { __label__ = 51; break; } else { __label__ = 4; break; } //@line 577 "_json.c"
      case 51: // $bb59
        var $195=$chunk; //@line 577 "_json.c"
        var $196=$195+4; //@line 577 "_json.c"
        var $197=HEAP[$196]; //@line 577 "_json.c"
        var $198=$197+24; //@line 577 "_json.c"
        var $199=HEAP[$198]; //@line 577 "_json.c"
        var $200=$chunk; //@line 577 "_json.c"
        FUNCTION_TABLE[$199]($200); //@line 577 "_json.c"
        __label__ = 4; break; //@line 577 "_json.c"
      case 52: // $bb61
        var $201=$chunks; //@line 584 "_json.c"
        var $202=($201)!=0; //@line 584 "_json.c"
        if ($202) { __label__ = 53; break; } else { __label__ = 55; break; } //@line 584 "_json.c"
      case 53: // $bb62
        var $203=$chunks; //@line 584 "_json.c"
        $_py_tmp=$203; //@line 584 "_json.c"
        $chunks=0; //@line 584 "_json.c"
        var $204=$_py_tmp; //@line 584 "_json.c"
        var $205=$204; //@line 584 "_json.c"
        var $206=HEAP[$205]; //@line 584 "_json.c"
        var $207=($206) - 1; //@line 584 "_json.c"
        var $208=$_py_tmp; //@line 584 "_json.c"
        var $209=$208; //@line 584 "_json.c"
        HEAP[$209]=$207; //@line 584 "_json.c"
        var $210=$_py_tmp; //@line 584 "_json.c"
        var $211=$210; //@line 584 "_json.c"
        var $212=HEAP[$211]; //@line 584 "_json.c"
        var $213=($212)==0; //@line 584 "_json.c"
        if ($213) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 584 "_json.c"
      case 54: // $bb63
        var $214=$_py_tmp; //@line 584 "_json.c"
        var $215=$214+4; //@line 584 "_json.c"
        var $216=HEAP[$215]; //@line 584 "_json.c"
        var $217=$216+24; //@line 584 "_json.c"
        var $218=HEAP[$217]; //@line 584 "_json.c"
        var $219=$_py_tmp; //@line 584 "_json.c"
        FUNCTION_TABLE[$218]($219); //@line 584 "_json.c"
        __label__ = 55; break; //@line 584 "_json.c"
      case 55: // $bb64
        var $220=$next_end_ptr_addr; //@line 585 "_json.c"
        var $221=$end_addr; //@line 585 "_json.c"
        HEAP[$220]=$221; //@line 585 "_json.c"
        var $222=$rval; //@line 586 "_json.c"
        $0=$222; //@line 586 "_json.c"
        __label__ = 60; break; //@line 586 "_json.c"
      case 56: // $bail
        var $223=$next_end_ptr_addr; //@line 588 "_json.c"
        HEAP[$223]=-1; //@line 588 "_json.c"
        var $224=$chunks; //@line 589 "_json.c"
        var $225=($224)!=0; //@line 589 "_json.c"
        if ($225) { __label__ = 57; break; } else { __label__ = 59; break; } //@line 589 "_json.c"
      case 57: // $bb65
        var $226=$chunks; //@line 589 "_json.c"
        var $227=$226; //@line 589 "_json.c"
        var $228=HEAP[$227]; //@line 589 "_json.c"
        var $229=($228) - 1; //@line 589 "_json.c"
        var $230=$chunks; //@line 589 "_json.c"
        var $231=$230; //@line 589 "_json.c"
        HEAP[$231]=$229; //@line 589 "_json.c"
        var $232=$chunks; //@line 589 "_json.c"
        var $233=$232; //@line 589 "_json.c"
        var $234=HEAP[$233]; //@line 589 "_json.c"
        var $235=($234)==0; //@line 589 "_json.c"
        if ($235) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 589 "_json.c"
      case 58: // $bb66
        var $236=$chunks; //@line 589 "_json.c"
        var $237=$236+4; //@line 589 "_json.c"
        var $238=HEAP[$237]; //@line 589 "_json.c"
        var $239=$238+24; //@line 589 "_json.c"
        var $240=HEAP[$239]; //@line 589 "_json.c"
        var $241=$chunks; //@line 589 "_json.c"
        FUNCTION_TABLE[$240]($241); //@line 589 "_json.c"
        __label__ = 59; break; //@line 589 "_json.c"
      case 59: // $bb67
        $0=0; //@line 590 "_json.c"
        __label__ = 60; break; //@line 590 "_json.c"
      case 60: // $bb68
        var $242=$0; //@line 586 "_json.c"
        $retval=$242; //@line 586 "_json.c"
        var $retval69=$retval; //@line 586 "_json.c"
        STACKTOP = __stackBase__;
        return $retval69; //@line 586 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanstring_unicode($pystr, $end, $strict, $next_end_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 2; _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pystr_addr;
        var $end_addr;
        var $strict_addr;
        var $next_end_ptr_addr;
        var $retval;
        var $0;
        var $rval;
        var $len;
        var $begin;
        var $next;
        var $buf;
        var $chunks;
        var $c=__stackBase__;
        var $chunk;
        var $digit;
        $pystr_addr=$pystr;
        $end_addr=$end;
        $strict_addr=$strict;
        $next_end_ptr_addr=$next_end_ptr;
        var $1=$pystr_addr; //@line 606 "_json.c"
        var $2=$1; //@line 606 "_json.c"
        var $3=$2+8; //@line 606 "_json.c"
        var $4=HEAP[$3]; //@line 606 "_json.c"
        $len=$4; //@line 606 "_json.c"
        var $5=$end_addr; //@line 607 "_json.c"
        var $6=($5) - 1; //@line 607 "_json.c"
        $begin=$6; //@line 607 "_json.c"
        var $7=$pystr_addr; //@line 609 "_json.c"
        var $8=$7; //@line 609 "_json.c"
        var $9=$8+12; //@line 609 "_json.c"
        var $10=HEAP[$9]; //@line 609 "_json.c"
        $buf=$10; //@line 609 "_json.c"
        var $11=_PyList_New(0); //@line 610 "_json.c"
        $chunks=$11; //@line 610 "_json.c"
        var $12=$chunks; //@line 611 "_json.c"
        var $13=($12)==0; //@line 611 "_json.c"
        if ($13) { __label__ = 52; break; } else { __label__ = 1; break; } //@line 611 "_json.c"
      case 1: // $bb
        var $14=$end_addr; //@line 614 "_json.c"
        var $15=($14) < 0; //@line 614 "_json.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 614 "_json.c"
      case 2: // $bb1
        var $16=$len; //@line 614 "_json.c"
        var $17=$end_addr; //@line 614 "_json.c"
        var $18=($16) <= ($17); //@line 614 "_json.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 614 "_json.c"
      case 3: // $bb2
        var $19=HEAP[_PyExc_ValueError]; //@line 615 "_json.c"
        _PyErr_SetString($19, __str20); //@line 615 "_json.c"
        __label__ = 52; break; //@line 615 "_json.c"
      case 4: // $bb3
        HEAP[$c]=0; //@line 620 "_json.c"
        $chunk=0; //@line 621 "_json.c"
        var $20=$end_addr; //@line 622 "_json.c"
        $next=$20; //@line 622 "_json.c"
        __label__ = 10; break; //@line 622 "_json.c"
      case 5: // $bb4
        var $21=$buf; //@line 623 "_json.c"
        var $22=$next; //@line 623 "_json.c"
        var $23=$21+2*$22; //@line 623 "_json.c"
        var $24=HEAP[$23]; //@line 623 "_json.c"
        HEAP[$c]=$24; //@line 623 "_json.c"
        var $25=HEAP[$c]; //@line 624 "_json.c"
        var $26=($25)==34; //@line 624 "_json.c"
        var $27=HEAP[$c]; //@line 624 "_json.c"
        var $28=($27)==92; //@line 624 "_json.c"
        var $or_cond=($26) | ($28);
        if ($or_cond) { __label__ = 11; break; } else { __label__ = 6; break; } //@line 624 "_json.c"
      case 6: // $bb6
        var $29=$strict_addr; //@line 627 "_json.c"
        var $30=($29)!=0; //@line 627 "_json.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 627 "_json.c"
      case 7: // $bb7
        var $31=HEAP[$c]; //@line 627 "_json.c"
        var $32=($31) <= 31; //@line 627 "_json.c"
        if ($32) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 627 "_json.c"
      case 8: // $bb8
        var $33=$pystr_addr; //@line 628 "_json.c"
        var $34=$next; //@line 628 "_json.c"
        _raise_errmsg(__str21, $33, $34); //@line 628 "_json.c"
        __label__ = 52; break; //@line 628 "_json.c"
      case 9: // $bb9
        var $35=$next; //@line 622 "_json.c"
        var $36=($35) + 1; //@line 622 "_json.c"
        $next=$36; //@line 622 "_json.c"
        __label__ = 10; break; //@line 622 "_json.c"
      case 10: // $bb10
        var $37=$next; //@line 622 "_json.c"
        var $38=$len; //@line 622 "_json.c"
        var $39=($37) < ($38); //@line 622 "_json.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 11; break; } //@line 622 "_json.c"
      case 11: // $bb11
        var $40=HEAP[$c]; //@line 632 "_json.c"
        var $41=($40)!=34; //@line 632 "_json.c"
        var $42=HEAP[$c]; //@line 632 "_json.c"
        var $43=($42)!=92; //@line 632 "_json.c"
        var $or_cond3=($41) & ($43);
        if ($or_cond3) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 632 "_json.c"
      case 12: // $bb13
        var $44=$pystr_addr; //@line 633 "_json.c"
        var $45=$begin; //@line 633 "_json.c"
        _raise_errmsg(__str22, $44, $45); //@line 633 "_json.c"
        __label__ = 52; break; //@line 633 "_json.c"
      case 13: // $bb14
        var $46=$next; //@line 637 "_json.c"
        var $47=$end_addr; //@line 637 "_json.c"
        var $48=($46)!=($47); //@line 637 "_json.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 20; break; } //@line 637 "_json.c"
      case 14: // $bb15
        var $49=$next; //@line 638 "_json.c"
        var $50=$end_addr; //@line 638 "_json.c"
        var $51=($49) - ($50); //@line 638 "_json.c"
        var $52=$buf; //@line 638 "_json.c"
        var $53=$end_addr; //@line 638 "_json.c"
        var $54=$52+2*$53; //@line 638 "_json.c"
        var $55=_PyUnicodeUCS2_FromUnicode($54, $51); //@line 638 "_json.c"
        $chunk=$55; //@line 638 "_json.c"
        var $56=$chunk; //@line 639 "_json.c"
        var $57=($56)==0; //@line 639 "_json.c"
        if ($57) { __label__ = 52; break; } else { __label__ = 15; break; } //@line 639 "_json.c"
      case 15: // $bb16
        var $58=$chunks; //@line 642 "_json.c"
        var $59=$chunk; //@line 642 "_json.c"
        var $60=_PyList_Append($58, $59); //@line 642 "_json.c"
        var $61=($60)!=0; //@line 642 "_json.c"
        var $62=$chunk; //@line 643 "_json.c"
        var $63=$62; //@line 643 "_json.c"
        var $64=HEAP[$63]; //@line 643 "_json.c"
        var $65=($64) - 1; //@line 643 "_json.c"
        var $66=$chunk; //@line 643 "_json.c"
        var $67=$66; //@line 643 "_json.c"
        HEAP[$67]=$65; //@line 643 "_json.c"
        var $68=$chunk; //@line 643 "_json.c"
        var $69=$68; //@line 643 "_json.c"
        var $70=HEAP[$69]; //@line 643 "_json.c"
        var $71=($70)==0; //@line 643 "_json.c"
        if ($61) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 642 "_json.c"
      case 16: // $bb17
        if ($71) { __label__ = 17; break; } else { __label__ = 52; break; } //@line 643 "_json.c"
      case 17: // $bb18
        var $72=$chunk; //@line 643 "_json.c"
        var $73=$72+4; //@line 643 "_json.c"
        var $74=HEAP[$73]; //@line 643 "_json.c"
        var $75=$74+24; //@line 643 "_json.c"
        var $76=HEAP[$75]; //@line 643 "_json.c"
        var $77=$chunk; //@line 643 "_json.c"
        FUNCTION_TABLE[$76]($77); //@line 643 "_json.c"
        __label__ = 52; break; //@line 643 "_json.c"
      case 18: // $bb20
        if ($71) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 646 "_json.c"
      case 19: // $bb21
        var $78=$chunk; //@line 646 "_json.c"
        var $79=$78+4; //@line 646 "_json.c"
        var $80=HEAP[$79]; //@line 646 "_json.c"
        var $81=$80+24; //@line 646 "_json.c"
        var $82=HEAP[$81]; //@line 646 "_json.c"
        var $83=$chunk; //@line 646 "_json.c"
        FUNCTION_TABLE[$82]($83); //@line 646 "_json.c"
        __label__ = 20; break; //@line 646 "_json.c"
      case 20: // $bb22
        var $84=$next; //@line 648 "_json.c"
        var $85=($84) + 1; //@line 648 "_json.c"
        $next=$85; //@line 648 "_json.c"
        var $86=HEAP[$c]; //@line 649 "_json.c"
        var $87=($86)==34; //@line 649 "_json.c"
        var $88=$next; //@line 650 "_json.c"
        if ($87) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 649 "_json.c"
      case 21: // $bb23
        $end_addr=$88; //@line 650 "_json.c"
        var $89=$chunks; //@line 759 "_json.c"
        var $90=_join_list_unicode($89); //@line 759 "_json.c"
        $rval=$90; //@line 759 "_json.c"
        var $91=$rval; //@line 760 "_json.c"
        var $92=($91)==0; //@line 760 "_json.c"
        if ($92) { __label__ = 52; break; } else { __label__ = 49; break; } //@line 760 "_json.c"
      case 22: // $bb24
        var $93=$len; //@line 653 "_json.c"
        var $94=($88)==($93); //@line 653 "_json.c"
        if ($94) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 653 "_json.c"
      case 23: // $bb25
        var $95=$pystr_addr; //@line 654 "_json.c"
        var $96=$begin; //@line 654 "_json.c"
        _raise_errmsg(__str22, $95, $96); //@line 654 "_json.c"
        __label__ = 52; break; //@line 654 "_json.c"
      case 24: // $bb26
        var $97=$buf; //@line 657 "_json.c"
        var $98=$next; //@line 657 "_json.c"
        var $99=$97+2*$98; //@line 657 "_json.c"
        var $100=HEAP[$99]; //@line 657 "_json.c"
        HEAP[$c]=$100; //@line 657 "_json.c"
        var $101=HEAP[$c]; //@line 658 "_json.c"
        var $102=($101)!=117; //@line 658 "_json.c"
        if ($102) { __label__ = 25; break; } else { __label__ = 34; break; } //@line 658 "_json.c"
      case 25: // $bb27
        var $103=$next; //@line 660 "_json.c"
        var $104=($103) + 1; //@line 660 "_json.c"
        $end_addr=$104; //@line 660 "_json.c"
        var $105=HEAP[$c]; //@line 661 "_json.c"
        var $106=($105); //@line 661 "_json.c"
        if ($106 == 34) {
          __label__ = 32; break;
        }
        else if ($106 == 47) {
          __label__ = 32; break;
        }
        else if ($106 == 92) {
          __label__ = 32; break;
        }
        else if ($106 == 98) {
          __label__ = 26; break;
        }
        else if ($106 == 102) {
          __label__ = 27; break;
        }
        else if ($106 == 110) {
          __label__ = 28; break;
        }
        else if ($106 == 114) {
          __label__ = 29; break;
        }
        else if ($106 == 116) {
          __label__ = 30; break;
        }
        else {
        __label__ = 31; break;
        }
        
      case 26: // $bb31
        HEAP[$c]=8; //@line 665 "_json.c"
        __label__ = 43; break; //@line 665 "_json.c"
      case 27: // $bb32
        HEAP[$c]=12; //@line 666 "_json.c"
        __label__ = 43; break; //@line 666 "_json.c"
      case 28: // $bb33
        HEAP[$c]=10; //@line 667 "_json.c"
        __label__ = 43; break; //@line 667 "_json.c"
      case 29: // $bb34
        HEAP[$c]=13; //@line 668 "_json.c"
        __label__ = 43; break; //@line 668 "_json.c"
      case 30: // $bb35
        HEAP[$c]=9; //@line 669 "_json.c"
        __label__ = 43; break; //@line 669 "_json.c"
      case 31: // $bb37_thread4
        HEAP[$c]=0; //@line 670 "_json.c"
        __label__ = 33; break;
      case 32: // $bb37
        var $107=($105)==0; //@line 672 "_json.c"
        if ($107) { __label__ = 33; break; } else { __label__ = 43; break; } //@line 672 "_json.c"
      case 33: // $bb38
        var $108=$end_addr; //@line 673 "_json.c"
        var $109=($108) - 2; //@line 673 "_json.c"
        var $110=$pystr_addr; //@line 673 "_json.c"
        _raise_errmsg(__str23, $110, $109); //@line 673 "_json.c"
        __label__ = 52; break; //@line 673 "_json.c"
      case 34: // $bb40
        HEAP[$c]=0; //@line 678 "_json.c"
        var $111=$next; //@line 679 "_json.c"
        var $112=($111) + 1; //@line 679 "_json.c"
        $next=$112; //@line 679 "_json.c"
        var $113=$next; //@line 680 "_json.c"
        var $114=($113) + 4; //@line 680 "_json.c"
        $end_addr=$114; //@line 680 "_json.c"
        var $115=$end_addr; //@line 681 "_json.c"
        var $116=$len; //@line 681 "_json.c"
        var $117=($115) >= ($116); //@line 681 "_json.c"
        if ($117) { __label__ = 35; break; } else { __label__ = 42; break; } //@line 681 "_json.c"
      case 35: // $bb41
        var $118=$next; //@line 682 "_json.c"
        var $119=($118) - 1; //@line 682 "_json.c"
        var $120=$pystr_addr; //@line 682 "_json.c"
        _raise_errmsg(__str24, $120, $119); //@line 682 "_json.c"
        __label__ = 52; break; //@line 682 "_json.c"
      case 36: // $bb43
        var $121=$buf; //@line 687 "_json.c"
        var $122=$next; //@line 687 "_json.c"
        var $123=$121+2*$122; //@line 687 "_json.c"
        var $124=HEAP[$123]; //@line 687 "_json.c"
        $digit=$124; //@line 687 "_json.c"
        var $125=HEAP[$c]; //@line 688 "_json.c"
        var $126=($125) << 4; //@line 688 "_json.c"
        HEAP[$c]=$126; //@line 688 "_json.c"
        var $127=$digit; //@line 689 "_json.c"
        var $128=($127); //@line 689 "_json.c"
        if ($128 == 48) {
          __label__ = 37; break;
        }
        else if ($128 == 49) {
          __label__ = 37; break;
        }
        else if ($128 == 50) {
          __label__ = 37; break;
        }
        else if ($128 == 51) {
          __label__ = 37; break;
        }
        else if ($128 == 52) {
          __label__ = 37; break;
        }
        else if ($128 == 53) {
          __label__ = 37; break;
        }
        else if ($128 == 54) {
          __label__ = 37; break;
        }
        else if ($128 == 55) {
          __label__ = 37; break;
        }
        else if ($128 == 56) {
          __label__ = 37; break;
        }
        else if ($128 == 57) {
          __label__ = 37; break;
        }
        else if ($128 == 65) {
          __label__ = 39; break;
        }
        else if ($128 == 66) {
          __label__ = 39; break;
        }
        else if ($128 == 67) {
          __label__ = 39; break;
        }
        else if ($128 == 68) {
          __label__ = 39; break;
        }
        else if ($128 == 69) {
          __label__ = 39; break;
        }
        else if ($128 == 70) {
          __label__ = 39; break;
        }
        else if ($128 == 97) {
          __label__ = 38; break;
        }
        else if ($128 == 98) {
          __label__ = 38; break;
        }
        else if ($128 == 99) {
          __label__ = 38; break;
        }
        else if ($128 == 100) {
          __label__ = 38; break;
        }
        else if ($128 == 101) {
          __label__ = 38; break;
        }
        else if ($128 == 102) {
          __label__ = 38; break;
        }
        else {
        __label__ = 40; break;
        }
        
      case 37: // $bb44
        var $129=$digit; //@line 692 "_json.c"
        var $130=($129) - 48; //@line 692 "_json.c"
        var $131=HEAP[$c]; //@line 692 "_json.c"
        var $132=($130) | ($131); //@line 692 "_json.c"
        HEAP[$c]=$132; //@line 692 "_json.c"
        __label__ = 41; break; //@line 692 "_json.c"
      case 38: // $bb45
        var $133=$digit; //@line 695 "_json.c"
        var $134=($133) - 87; //@line 695 "_json.c"
        var $135=HEAP[$c]; //@line 695 "_json.c"
        var $136=($134) | ($135); //@line 695 "_json.c"
        HEAP[$c]=$136; //@line 695 "_json.c"
        __label__ = 41; break; //@line 695 "_json.c"
      case 39: // $bb46
        var $137=$digit; //@line 698 "_json.c"
        var $138=($137) - 55; //@line 698 "_json.c"
        var $139=HEAP[$c]; //@line 698 "_json.c"
        var $140=($138) | ($139); //@line 698 "_json.c"
        HEAP[$c]=$140; //@line 698 "_json.c"
        __label__ = 41; break; //@line 698 "_json.c"
      case 40: // $bb47
        var $141=$end_addr; //@line 700 "_json.c"
        var $142=($141) - 5; //@line 700 "_json.c"
        var $143=$pystr_addr; //@line 700 "_json.c"
        _raise_errmsg(__str24, $143, $142); //@line 700 "_json.c"
        __label__ = 52; break; //@line 700 "_json.c"
      case 41: // $bb48
        var $144=$next; //@line 686 "_json.c"
        var $145=($144) + 1; //@line 686 "_json.c"
        $next=$145; //@line 686 "_json.c"
        __label__ = 42; break; //@line 686 "_json.c"
      case 42: // $bb49
        var $146=$next; //@line 686 "_json.c"
        var $147=$end_addr; //@line 686 "_json.c"
        var $148=($146) < ($147); //@line 686 "_json.c"
        if ($148) { __label__ = 36; break; } else { __label__ = 43; break; } //@line 686 "_json.c"
      case 43: // $bb50
        var $149=_PyUnicodeUCS2_FromUnicode($c, 1); //@line 748 "_json.c"
        $chunk=$149; //@line 748 "_json.c"
        var $150=($149)==0; //@line 749 "_json.c"
        if ($150) { __label__ = 52; break; } else { __label__ = 44; break; } //@line 749 "_json.c"
      case 44: // $bb51
        var $151=$chunks; //@line 752 "_json.c"
        var $152=$chunk; //@line 752 "_json.c"
        var $153=_PyList_Append($151, $152); //@line 752 "_json.c"
        var $154=($153)!=0; //@line 752 "_json.c"
        var $155=$chunk; //@line 753 "_json.c"
        var $156=$155; //@line 753 "_json.c"
        var $157=HEAP[$156]; //@line 753 "_json.c"
        var $158=($157) - 1; //@line 753 "_json.c"
        var $159=$chunk; //@line 753 "_json.c"
        var $160=$159; //@line 753 "_json.c"
        HEAP[$160]=$158; //@line 753 "_json.c"
        var $161=$chunk; //@line 753 "_json.c"
        var $162=$161; //@line 753 "_json.c"
        var $163=HEAP[$162]; //@line 753 "_json.c"
        var $164=($163)==0; //@line 753 "_json.c"
        if ($154) { __label__ = 45; break; } else { __label__ = 47; break; } //@line 752 "_json.c"
      case 45: // $bb52
        if ($164) { __label__ = 46; break; } else { __label__ = 52; break; } //@line 753 "_json.c"
      case 46: // $bb53
        var $165=$chunk; //@line 753 "_json.c"
        var $166=$165+4; //@line 753 "_json.c"
        var $167=HEAP[$166]; //@line 753 "_json.c"
        var $168=$167+24; //@line 753 "_json.c"
        var $169=HEAP[$168]; //@line 753 "_json.c"
        var $170=$chunk; //@line 753 "_json.c"
        FUNCTION_TABLE[$169]($170); //@line 753 "_json.c"
        __label__ = 52; break; //@line 753 "_json.c"
      case 47: // $bb55
        if ($164) { __label__ = 48; break; } else { __label__ = 4; break; } //@line 756 "_json.c"
      case 48: // $bb56
        var $171=$chunk; //@line 756 "_json.c"
        var $172=$171+4; //@line 756 "_json.c"
        var $173=HEAP[$172]; //@line 756 "_json.c"
        var $174=$173+24; //@line 756 "_json.c"
        var $175=HEAP[$174]; //@line 756 "_json.c"
        var $176=$chunk; //@line 756 "_json.c"
        FUNCTION_TABLE[$175]($176); //@line 756 "_json.c"
        __label__ = 4; break; //@line 756 "_json.c"
      case 49: // $bb58
        var $177=$chunks; //@line 763 "_json.c"
        var $178=$177; //@line 763 "_json.c"
        var $179=HEAP[$178]; //@line 763 "_json.c"
        var $180=($179) - 1; //@line 763 "_json.c"
        var $181=$chunks; //@line 763 "_json.c"
        var $182=$181; //@line 763 "_json.c"
        HEAP[$182]=$180; //@line 763 "_json.c"
        var $183=$chunks; //@line 763 "_json.c"
        var $184=$183; //@line 763 "_json.c"
        var $185=HEAP[$184]; //@line 763 "_json.c"
        var $186=($185)==0; //@line 763 "_json.c"
        if ($186) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 763 "_json.c"
      case 50: // $bb59
        var $187=$chunks; //@line 763 "_json.c"
        var $188=$187+4; //@line 763 "_json.c"
        var $189=HEAP[$188]; //@line 763 "_json.c"
        var $190=$189+24; //@line 763 "_json.c"
        var $191=HEAP[$190]; //@line 763 "_json.c"
        var $192=$chunks; //@line 763 "_json.c"
        FUNCTION_TABLE[$191]($192); //@line 763 "_json.c"
        __label__ = 51; break; //@line 763 "_json.c"
      case 51: // $bb60
        var $193=$next_end_ptr_addr; //@line 764 "_json.c"
        var $194=$end_addr; //@line 764 "_json.c"
        HEAP[$193]=$194; //@line 764 "_json.c"
        var $195=$rval; //@line 765 "_json.c"
        $0=$195; //@line 765 "_json.c"
        __label__ = 56; break; //@line 765 "_json.c"
      case 52: // $bail
        var $196=$next_end_ptr_addr; //@line 767 "_json.c"
        HEAP[$196]=-1; //@line 767 "_json.c"
        var $197=$chunks; //@line 768 "_json.c"
        var $198=($197)!=0; //@line 768 "_json.c"
        if ($198) { __label__ = 53; break; } else { __label__ = 55; break; } //@line 768 "_json.c"
      case 53: // $bb61
        var $199=$chunks; //@line 768 "_json.c"
        var $200=$199; //@line 768 "_json.c"
        var $201=HEAP[$200]; //@line 768 "_json.c"
        var $202=($201) - 1; //@line 768 "_json.c"
        var $203=$chunks; //@line 768 "_json.c"
        var $204=$203; //@line 768 "_json.c"
        HEAP[$204]=$202; //@line 768 "_json.c"
        var $205=$chunks; //@line 768 "_json.c"
        var $206=$205; //@line 768 "_json.c"
        var $207=HEAP[$206]; //@line 768 "_json.c"
        var $208=($207)==0; //@line 768 "_json.c"
        if ($208) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 768 "_json.c"
      case 54: // $bb62
        var $209=$chunks; //@line 768 "_json.c"
        var $210=$209+4; //@line 768 "_json.c"
        var $211=HEAP[$210]; //@line 768 "_json.c"
        var $212=$211+24; //@line 768 "_json.c"
        var $213=HEAP[$212]; //@line 768 "_json.c"
        var $214=$chunks; //@line 768 "_json.c"
        FUNCTION_TABLE[$213]($214); //@line 768 "_json.c"
        __label__ = 55; break; //@line 768 "_json.c"
      case 55: // $bb63
        $0=0; //@line 769 "_json.c"
        __label__ = 56; break; //@line 769 "_json.c"
      case 56: // $bb64
        var $215=$0; //@line 765 "_json.c"
        $retval=$215; //@line 765 "_json.c"
        var $retval65=$retval; //@line 765 "_json.c"
        STACKTOP = __stackBase__;
        return $retval65; //@line 765 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _py_scanstring($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pystr=__stackBase__;
        var $rval;
        var $end=__stackBase__+4;
        var $next_end=__stackBase__+8;
        var $encoding=__stackBase__+12;
        var $strict=__stackBase__+16;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$next_end]=-1; //@line 791 "_json.c"
        HEAP[$encoding]=0; //@line 792 "_json.c"
        HEAP[$strict]=1; //@line 793 "_json.c"
        var $1=$args_addr; //@line 794 "_json.c"
        var $2=_PyArg_ParseTuple($1, __str25, $pystr, (FUNCTION_TABLE_OFFSET + 4), $end, $encoding, $strict); //@line 794 "_json.c"
        var $3=($2)==0; //@line 794 "_json.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 794 "_json.c"
      case 1: // $bb
        $0=0; //@line 795 "_json.c"
        __label__ = 10; break; //@line 795 "_json.c"
      case 2: // $bb1
        var $4=HEAP[$encoding]; //@line 797 "_json.c"
        var $5=($4)==0; //@line 797 "_json.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 797 "_json.c"
      case 3: // $bb2
        HEAP[$encoding]=__str26; //@line 798 "_json.c"
        __label__ = 4; break; //@line 798 "_json.c"
      case 4: // $bb3
        var $6=HEAP[$pystr]; //@line 800 "_json.c"
        var $7=$6+4; //@line 800 "_json.c"
        var $8=HEAP[$7]; //@line 800 "_json.c"
        var $9=$8+84; //@line 800 "_json.c"
        var $10=HEAP[$9]; //@line 800 "_json.c"
        var $11=($10) & 134217728; //@line 800 "_json.c"
        var $12=($11)!=0; //@line 800 "_json.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 800 "_json.c"
      case 5: // $bb4
        var $13=HEAP[$strict]; //@line 801 "_json.c"
        var $14=HEAP[$encoding]; //@line 801 "_json.c"
        var $15=HEAP[$end]; //@line 801 "_json.c"
        var $16=HEAP[$pystr]; //@line 801 "_json.c"
        var $17=_scanstring_str($16, $15, $14, $13, $next_end); //@line 801 "_json.c"
        $rval=$17; //@line 801 "_json.c"
        __label__ = 9; break; //@line 801 "_json.c"
      case 6: // $bb5
        var $18=HEAP[$pystr]; //@line 803 "_json.c"
        var $19=$18+4; //@line 803 "_json.c"
        var $20=HEAP[$19]; //@line 803 "_json.c"
        var $21=$20+84; //@line 803 "_json.c"
        var $22=HEAP[$21]; //@line 803 "_json.c"
        var $23=($22) & 268435456; //@line 803 "_json.c"
        var $24=($23)!=0; //@line 803 "_json.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 803 "_json.c"
      case 7: // $bb6
        var $25=HEAP[$strict]; //@line 804 "_json.c"
        var $26=HEAP[$end]; //@line 804 "_json.c"
        var $27=HEAP[$pystr]; //@line 804 "_json.c"
        var $28=_scanstring_unicode($27, $26, $25, $next_end); //@line 804 "_json.c"
        $rval=$28; //@line 804 "_json.c"
        __label__ = 9; break; //@line 804 "_json.c"
      case 8: // $bb7
        var $29=HEAP[$pystr]; //@line 807 "_json.c"
        var $30=$29+4; //@line 807 "_json.c"
        var $31=HEAP[$30]; //@line 807 "_json.c"
        var $32=$31+12; //@line 807 "_json.c"
        var $33=HEAP[$32]; //@line 807 "_json.c"
        var $34=HEAP[_PyExc_TypeError]; //@line 807 "_json.c"
        var $35=_PyErr_Format($34, __str27, $33); //@line 807 "_json.c"
        $0=0; //@line 810 "_json.c"
        __label__ = 10; break; //@line 810 "_json.c"
      case 9: // $bb8
        var $36=HEAP[$next_end]; //@line 812 "_json.c"
        var $37=$rval; //@line 812 "_json.c"
        var $38=__build_rval_index_tuple($37, $36); //@line 812 "_json.c"
        $0=$38; //@line 812 "_json.c"
        __label__ = 10; break; //@line 812 "_json.c"
      case 10: // $bb9
        var $39=$0; //@line 795 "_json.c"
        $retval=$39; //@line 795 "_json.c"
        var $retval10=$retval; //@line 795 "_json.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 795 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _py_encode_basestring_ascii($self, $pystr) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pystr_addr_i;
        var $retval_i;
        var $0;
        var $i_i;
        var $input_chars_i;
        var $output_size_i;
        var $chars_i;
        var $rval_i=__stackBase__;
        var $output_i;
        var $input_str_i;
        var $c_i;
        var $j_i;
        var $uni_i;
        var $c23_i;
        var $self_addr;
        var $pystr_addr;
        var $retval;
        var $1;
        $self_addr=$self;
        $pystr_addr=$pystr;
        var $2=$pystr_addr; //@line 826 "_json.c"
        var $3=$2+4; //@line 826 "_json.c"
        var $4=HEAP[$3]; //@line 826 "_json.c"
        var $5=$4+84; //@line 826 "_json.c"
        var $6=HEAP[$5]; //@line 826 "_json.c"
        var $7=($6) & 134217728; //@line 826 "_json.c"
        var $8=($7)!=0; //@line 826 "_json.c"
        var $9=$pystr_addr; //@line 827 "_json.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 35; break; } //@line 826 "_json.c"
      case 1: // $bb
        $pystr_addr_i=$9;
        var $10=$pystr_addr_i; //@line 267 "_json.c"
        var $11=$10; //@line 267 "_json.c"
        var $12=$11+8; //@line 267 "_json.c"
        var $13=HEAP[$12]; //@line 267 "_json.c"
        $input_chars_i=$13; //@line 267 "_json.c"
        var $14=$pystr_addr_i; //@line 268 "_json.c"
        var $15=$14; //@line 268 "_json.c"
        var $16=$15+20; //@line 268 "_json.c"
        var $17=$16; //@line 268 "_json.c"
        $input_str_i=$17; //@line 268 "_json.c"
        $i_i=0; //@line 271 "_json.c"
        __label__ = 13; break; //@line 271 "_json.c"
      case 2: // $bb_i
        var $18=$input_str_i; //@line 272 "_json.c"
        var $19=$i_i; //@line 272 "_json.c"
        var $20=$18+$19; //@line 272 "_json.c"
        var $21=HEAP[$20]; //@line 272 "_json.c"
        var $22=($21); //@line 272 "_json.c"
        $c_i=$22; //@line 272 "_json.c"
        var $23=$c_i; //@line 273 "_json.c"
        var $24=($23) <= 31; //@line 273 "_json.c"
        var $25=$c_i; //@line 273 "_json.c"
        var $26=($25) > 126; //@line 273 "_json.c"
        var $or_cond_i=($24) | ($26);
        var $27=$c_i; //@line 273 "_json.c"
        var $28=($27)==92; //@line 273 "_json.c"
        var $or_cond3_i=($or_cond_i) | ($28);
        var $29=$c_i; //@line 273 "_json.c"
        var $30=($29)==34; //@line 273 "_json.c"
        var $or_cond5_i=($or_cond3_i) | ($30);
        var $31=$i_i; //@line 276 "_json.c"
        if ($or_cond5_i) { __label__ = 3; break; } else { __label__ = 12; break; } //@line 273 "_json.c"
      case 3: // $bb4_i
        $j_i=$31; //@line 276 "_json.c"
        __label__ = 11; break; //@line 276 "_json.c"
      case 4: // $bb5_i
        var $32=$input_str_i; //@line 277 "_json.c"
        var $33=$j_i; //@line 277 "_json.c"
        var $34=$32+$33; //@line 277 "_json.c"
        var $35=HEAP[$34]; //@line 277 "_json.c"
        var $36=($35); //@line 277 "_json.c"
        $c_i=$36; //@line 277 "_json.c"
        var $37=$c_i; //@line 278 "_json.c"
        var $38=($37) > 127; //@line 278 "_json.c"
        if ($38) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 278 "_json.c"
      case 5: // $bb6_i
        var $39=$input_str_i; //@line 281 "_json.c"
        var $40=$input_chars_i; //@line 281 "_json.c"
        var $41=_PyUnicodeUCS2_DecodeUTF8($39, $40, __str1); //@line 281 "_json.c"
        $uni_i=$41; //@line 281 "_json.c"
        var $42=$uni_i; //@line 282 "_json.c"
        var $43=($42)==0; //@line 282 "_json.c"
        if ($43) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 282 "_json.c"
      case 6: // $bb7_i
        $0=0; //@line 283 "_json.c"
        __label__ = 34; break; //@line 283 "_json.c"
      case 7: // $bb8_i
        var $44=$uni_i; //@line 285 "_json.c"
        var $45=_ascii_escape_unicode($44); //@line 285 "_json.c"
        HEAP[$rval_i]=$45; //@line 285 "_json.c"
        var $46=$uni_i; //@line 286 "_json.c"
        var $47=$46; //@line 286 "_json.c"
        var $48=HEAP[$47]; //@line 286 "_json.c"
        var $49=($48) - 1; //@line 286 "_json.c"
        var $50=$uni_i; //@line 286 "_json.c"
        var $51=$50; //@line 286 "_json.c"
        HEAP[$51]=$49; //@line 286 "_json.c"
        var $52=$uni_i; //@line 286 "_json.c"
        var $53=$52; //@line 286 "_json.c"
        var $54=HEAP[$53]; //@line 286 "_json.c"
        var $55=($54)==0; //@line 286 "_json.c"
        if ($55) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 286 "_json.c"
      case 8: // $bb9_i
        var $56=$uni_i; //@line 286 "_json.c"
        var $57=$56+4; //@line 286 "_json.c"
        var $58=HEAP[$57]; //@line 286 "_json.c"
        var $59=$58+24; //@line 286 "_json.c"
        var $60=HEAP[$59]; //@line 286 "_json.c"
        var $61=$uni_i; //@line 286 "_json.c"
        FUNCTION_TABLE[$60]($61); //@line 286 "_json.c"
        __label__ = 9; break; //@line 286 "_json.c"
      case 9: // $bb10_i
        var $62=HEAP[$rval_i]; //@line 287 "_json.c"
        $0=$62; //@line 287 "_json.c"
        __label__ = 34; break; //@line 287 "_json.c"
      case 10: // $bb11_i
        var $63=$j_i; //@line 276 "_json.c"
        var $64=($63) + 1; //@line 276 "_json.c"
        $j_i=$64; //@line 276 "_json.c"
        __label__ = 11; break; //@line 276 "_json.c"
      case 11: // $bb12_i
        var $65=$j_i; //@line 276 "_json.c"
        var $66=$input_chars_i; //@line 276 "_json.c"
        var $67=($65) < ($66); //@line 276 "_json.c"
        if ($67) { __label__ = 4; break; } else { __label__ = 14; break; } //@line 276 "_json.c"
      case 12: // $bb14_i
        var $68=($31) + 1; //@line 271 "_json.c"
        $i_i=$68; //@line 271 "_json.c"
        __label__ = 13; break; //@line 271 "_json.c"
      case 13: // $bb15_i
        var $69=$i_i; //@line 271 "_json.c"
        var $70=$input_chars_i; //@line 271 "_json.c"
        var $71=($69) < ($70); //@line 271 "_json.c"
        if ($71) { __label__ = 2; break; } else { __label__ = 14; break; } //@line 271 "_json.c"
      case 14: // $bb16_i
        var $72=$i_i; //@line 294 "_json.c"
        var $73=$input_chars_i; //@line 294 "_json.c"
        var $74=($72)==($73); //@line 294 "_json.c"
        var $75=$input_chars_i; //@line 296 "_json.c"
        if ($74) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 294 "_json.c"
      case 15: // $bb17_i
        var $76=($75) + 2; //@line 296 "_json.c"
        $output_size_i=$76; //@line 296 "_json.c"
        __label__ = 17; break; //@line 296 "_json.c"
      case 16: // $bb18_i
        var $77=($75) + 26; //@line 300 "_json.c"
        $output_size_i=$77; //@line 300 "_json.c"
        __label__ = 17; break; //@line 300 "_json.c"
      case 17: // $bb19_i
        var $78=$output_size_i; //@line 302 "_json.c"
        var $79=_PyString_FromStringAndSize(0, $78); //@line 302 "_json.c"
        HEAP[$rval_i]=$79; //@line 302 "_json.c"
        var $80=($79)==0; //@line 303 "_json.c"
        if ($80) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 303 "_json.c"
      case 18: // $bb20_i
        $0=0; //@line 304 "_json.c"
        __label__ = 34; break; //@line 304 "_json.c"
      case 19: // $bb21_i
        var $81=HEAP[$rval_i]; //@line 306 "_json.c"
        var $82=$81; //@line 306 "_json.c"
        var $83=$82+20; //@line 306 "_json.c"
        var $84=$83; //@line 306 "_json.c"
        $output_i=$84; //@line 306 "_json.c"
        var $85=$output_i; //@line 307 "_json.c"
        var $86=$85; //@line 307 "_json.c"
        HEAP[$86]=34; //@line 307 "_json.c"
        var $87=$i_i; //@line 310 "_json.c"
        var $88=($87) + 1; //@line 310 "_json.c"
        $chars_i=$88; //@line 310 "_json.c"
        var $89=$i_i; //@line 311 "_json.c"
        var $90=$output_i; //@line 311 "_json.c"
        var $91=$90+1; //@line 311 "_json.c"
        var $92=$input_str_i; //@line 311 "_json.c"
        _llvm_memcpy_p0i8_p0i8_i32($91, $92, $89, 1, 0); //@line 311 "_json.c"
        __label__ = 30; break; //@line 311 "_json.c"
      case 20: // $bb22_i
        var $93=$input_str_i; //@line 314 "_json.c"
        var $94=$i_i; //@line 314 "_json.c"
        var $95=$93+$94; //@line 314 "_json.c"
        var $96=HEAP[$95]; //@line 314 "_json.c"
        var $97=($96); //@line 314 "_json.c"
        $c23_i=$97; //@line 314 "_json.c"
        var $98=$c23_i; //@line 315 "_json.c"
        var $99=($98) <= 31; //@line 315 "_json.c"
        var $100=$c23_i; //@line 315 "_json.c"
        var $101=($100) > 126; //@line 315 "_json.c"
        var $or_cond7_i=($99) | ($101);
        var $102=$c23_i; //@line 315 "_json.c"
        var $103=($102)==92; //@line 315 "_json.c"
        var $or_cond9_i=($or_cond7_i) | ($103);
        var $104=$c23_i; //@line 315 "_json.c"
        var $105=($104)==34; //@line 315 "_json.c"
        var $or_cond11_i=($or_cond9_i) | ($105);
        var $106=$c23_i; //@line 319 "_json.c"
        if ($or_cond11_i) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 315 "_json.c"
      case 21: // $bb27_i
        var $107=((($106)) & 255); //@line 316 "_json.c"
        var $108=$output_i; //@line 316 "_json.c"
        var $109=$chars_i; //@line 316 "_json.c"
        var $110=$108+$109; //@line 316 "_json.c"
        HEAP[$110]=$107; //@line 316 "_json.c"
        var $111=$chars_i; //@line 316 "_json.c"
        var $112=($111) + 1; //@line 316 "_json.c"
        $chars_i=$112; //@line 316 "_json.c"
        __label__ = 23; break; //@line 316 "_json.c"
      case 22: // $bb28_i
        var $113=($106); //@line 319 "_json.c"
        var $114=((($113)) & 65535); //@line 319 "_json.c"
        var $115=$output_i; //@line 319 "_json.c"
        var $116=$chars_i; //@line 319 "_json.c"
        var $117=_ascii_escape_char($114, $115, $116); //@line 319 "_json.c"
        $chars_i=$117; //@line 319 "_json.c"
        __label__ = 23; break; //@line 319 "_json.c"
      case 23: // $bb29_i
        var $118=$output_size_i; //@line 322 "_json.c"
        var $119=$chars_i; //@line 322 "_json.c"
        var $120=($118) - ($119); //@line 322 "_json.c"
        var $121=($120) <= 6; //@line 322 "_json.c"
        if ($121) { __label__ = 24; break; } else { __label__ = 29; break; } //@line 322 "_json.c"
      case 24: // $bb30_i
        var $122=$output_size_i; //@line 324 "_json.c"
        var $123=($122) * 2; //@line 324 "_json.c"
        $output_size_i=$123; //@line 324 "_json.c"
        var $124=$input_chars_i; //@line 325 "_json.c"
        var $125=($124) * 6; //@line 325 "_json.c"
        var $126=($125) + 2; //@line 325 "_json.c"
        var $127=$output_size_i; //@line 325 "_json.c"
        var $128=($126) < ($127); //@line 325 "_json.c"
        if ($128) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 325 "_json.c"
      case 25: // $bb31_i
        var $129=$input_chars_i; //@line 326 "_json.c"
        var $130=($129) * 6; //@line 326 "_json.c"
        var $131=($130) + 2; //@line 326 "_json.c"
        $output_size_i=$131; //@line 326 "_json.c"
        __label__ = 26; break; //@line 326 "_json.c"
      case 26: // $bb32_i
        var $132=$output_size_i; //@line 328 "_json.c"
        var $133=__PyString_Resize($rval_i, $132); //@line 328 "_json.c"
        var $134=($133)==-1; //@line 328 "_json.c"
        if ($134) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 328 "_json.c"
      case 27: // $bb33_i
        $0=0; //@line 329 "_json.c"
        __label__ = 34; break; //@line 329 "_json.c"
      case 28: // $bb34_i
        var $135=HEAP[$rval_i]; //@line 331 "_json.c"
        var $136=$135; //@line 331 "_json.c"
        var $137=$136+20; //@line 331 "_json.c"
        var $138=$137; //@line 331 "_json.c"
        $output_i=$138; //@line 331 "_json.c"
        __label__ = 29; break; //@line 331 "_json.c"
      case 29: // $bb35_i
        var $139=$i_i; //@line 313 "_json.c"
        var $140=($139) + 1; //@line 313 "_json.c"
        $i_i=$140; //@line 313 "_json.c"
        __label__ = 30; break; //@line 313 "_json.c"
      case 30: // $bb36_i
        var $141=$i_i; //@line 313 "_json.c"
        var $142=$input_chars_i; //@line 313 "_json.c"
        var $143=($141) < ($142); //@line 313 "_json.c"
        if ($143) { __label__ = 20; break; } else { __label__ = 31; break; } //@line 313 "_json.c"
      case 31: // $bb37_i
        var $144=$output_i; //@line 334 "_json.c"
        var $145=$chars_i; //@line 334 "_json.c"
        var $146=$144+$145; //@line 334 "_json.c"
        HEAP[$146]=34; //@line 334 "_json.c"
        var $147=$chars_i; //@line 334 "_json.c"
        var $148=($147) + 1; //@line 334 "_json.c"
        $chars_i=$148; //@line 334 "_json.c"
        var $149=$chars_i; //@line 335 "_json.c"
        var $150=__PyString_Resize($rval_i, $149); //@line 335 "_json.c"
        var $151=($150)==-1; //@line 335 "_json.c"
        if ($151) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 335 "_json.c"
      case 32: // $bb38_i
        $0=0; //@line 336 "_json.c"
        __label__ = 34; break; //@line 336 "_json.c"
      case 33: // $bb39_i
        var $152=HEAP[$rval_i]; //@line 338 "_json.c"
        $0=$152; //@line 338 "_json.c"
        __label__ = 34; break; //@line 338 "_json.c"
      case 34: // $ascii_escape_str_exit
        var $153=$0; //@line 283 "_json.c"
        $retval_i=$153; //@line 283 "_json.c"
        var $retval41_i=$retval_i; //@line 283 "_json.c"
        $1=$retval41_i; //@line 827 "_json.c"
        __label__ = 38; break; //@line 827 "_json.c"
      case 35: // $bb1
        var $154=$9+4; //@line 829 "_json.c"
        var $155=HEAP[$154]; //@line 829 "_json.c"
        var $156=$155+84; //@line 829 "_json.c"
        var $157=HEAP[$156]; //@line 829 "_json.c"
        var $158=($157) & 268435456; //@line 829 "_json.c"
        var $159=($158)!=0; //@line 829 "_json.c"
        var $160=$pystr_addr; //@line 830 "_json.c"
        if ($159) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 829 "_json.c"
      case 36: // $bb2
        var $161=_ascii_escape_unicode($160); //@line 830 "_json.c"
        $1=$161; //@line 830 "_json.c"
        __label__ = 38; break; //@line 830 "_json.c"
      case 37: // $bb3
        var $162=$160+4; //@line 833 "_json.c"
        var $163=HEAP[$162]; //@line 833 "_json.c"
        var $164=$163+12; //@line 833 "_json.c"
        var $165=HEAP[$164]; //@line 833 "_json.c"
        var $166=HEAP[_PyExc_TypeError]; //@line 833 "_json.c"
        var $167=_PyErr_Format($166, __str27, $165); //@line 833 "_json.c"
        $1=0; //@line 836 "_json.c"
        __label__ = 38; break; //@line 836 "_json.c"
      case 38: // $bb4
        var $168=$1; //@line 827 "_json.c"
        $retval=$168; //@line 827 "_json.c"
        var $retval5=$retval; //@line 827 "_json.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 827 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_dealloc($self) {
    ;
    var __label__;
  
    var $self_addr;
    $self_addr=$self;
    var $0=$self_addr; //@line 844 "_json.c"
    var $1=_scanner_clear($0); //@line 844 "_json.c"
    var $2=$self_addr; //@line 845 "_json.c"
    var $3=$2+4; //@line 845 "_json.c"
    var $4=HEAP[$3]; //@line 845 "_json.c"
    var $5=$4+160; //@line 845 "_json.c"
    var $6=HEAP[$5]; //@line 845 "_json.c"
    var $7=$self_addr; //@line 845 "_json.c"
    var $8=$7; //@line 845 "_json.c"
    FUNCTION_TABLE[$6]($8); //@line 845 "_json.c"
    ;
    return; //@line 846 "_json.c"
  }
  

  function _scanner_traverse($self, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $s;
        var $vret;
        var $vret7;
        var $vret11;
        var $vret15;
        var $vret19;
        var $vret23;
        var $vret27;
        $self_addr=$self;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$self_addr; //@line 852 "_json.c"
        var $2=$1+4; //@line 852 "_json.c"
        var $3=HEAP[$2]; //@line 852 "_json.c"
        var $4=($3)!=(_PyScannerType); //@line 852 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 852 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 852 "_json.c"
        var $6=$5+4; //@line 852 "_json.c"
        var $7=HEAP[$6]; //@line 852 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyScannerType); //@line 852 "_json.c"
        var $9=($8)==0; //@line 852 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 852 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str28, __str29, 852, ___PRETTY_FUNCTION___9208); //@line 852 "_json.c"
        throw "Reached an unreachable!" //@line 852 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 853 "_json.c"
        var $11=$10; //@line 853 "_json.c"
        $s=$11; //@line 853 "_json.c"
        var $12=$s; //@line 854 "_json.c"
        var $13=$12+8; //@line 854 "_json.c"
        var $14=HEAP[$13]; //@line 854 "_json.c"
        var $15=($14)!=0; //@line 854 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 854 "_json.c"
      case 4: // $bb3
        var $16=$s; //@line 854 "_json.c"
        var $17=$16+8; //@line 854 "_json.c"
        var $18=HEAP[$17]; //@line 854 "_json.c"
        var $19=$visit_addr; //@line 854 "_json.c"
        var $20=$arg_addr; //@line 854 "_json.c"
        var $21=FUNCTION_TABLE[$19]($18, $20); //@line 854 "_json.c"
        $vret=$21; //@line 854 "_json.c"
        var $22=$vret; //@line 854 "_json.c"
        var $23=($22)!=0; //@line 854 "_json.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 854 "_json.c"
      case 5: // $bb4
        var $24=$vret; //@line 854 "_json.c"
        $0=$24; //@line 854 "_json.c"
        __label__ = 25; break; //@line 854 "_json.c"
      case 6: // $bb5
        var $25=$s; //@line 855 "_json.c"
        var $26=$25+12; //@line 855 "_json.c"
        var $27=HEAP[$26]; //@line 855 "_json.c"
        var $28=($27)!=0; //@line 855 "_json.c"
        if ($28) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 855 "_json.c"
      case 7: // $bb6
        var $29=$s; //@line 855 "_json.c"
        var $30=$29+12; //@line 855 "_json.c"
        var $31=HEAP[$30]; //@line 855 "_json.c"
        var $32=$visit_addr; //@line 855 "_json.c"
        var $33=$arg_addr; //@line 855 "_json.c"
        var $34=FUNCTION_TABLE[$32]($31, $33); //@line 855 "_json.c"
        $vret7=$34; //@line 855 "_json.c"
        var $35=$vret7; //@line 855 "_json.c"
        var $36=($35)!=0; //@line 855 "_json.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 855 "_json.c"
      case 8: // $bb8
        var $37=$vret7; //@line 855 "_json.c"
        $0=$37; //@line 855 "_json.c"
        __label__ = 25; break; //@line 855 "_json.c"
      case 9: // $bb9
        var $38=$s; //@line 856 "_json.c"
        var $39=$38+16; //@line 856 "_json.c"
        var $40=HEAP[$39]; //@line 856 "_json.c"
        var $41=($40)!=0; //@line 856 "_json.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 856 "_json.c"
      case 10: // $bb10
        var $42=$s; //@line 856 "_json.c"
        var $43=$42+16; //@line 856 "_json.c"
        var $44=HEAP[$43]; //@line 856 "_json.c"
        var $45=$visit_addr; //@line 856 "_json.c"
        var $46=$arg_addr; //@line 856 "_json.c"
        var $47=FUNCTION_TABLE[$45]($44, $46); //@line 856 "_json.c"
        $vret11=$47; //@line 856 "_json.c"
        var $48=$vret11; //@line 856 "_json.c"
        var $49=($48)!=0; //@line 856 "_json.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 856 "_json.c"
      case 11: // $bb12
        var $50=$vret11; //@line 856 "_json.c"
        $0=$50; //@line 856 "_json.c"
        __label__ = 25; break; //@line 856 "_json.c"
      case 12: // $bb13
        var $51=$s; //@line 857 "_json.c"
        var $52=$51+20; //@line 857 "_json.c"
        var $53=HEAP[$52]; //@line 857 "_json.c"
        var $54=($53)!=0; //@line 857 "_json.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 857 "_json.c"
      case 13: // $bb14
        var $55=$s; //@line 857 "_json.c"
        var $56=$55+20; //@line 857 "_json.c"
        var $57=HEAP[$56]; //@line 857 "_json.c"
        var $58=$visit_addr; //@line 857 "_json.c"
        var $59=$arg_addr; //@line 857 "_json.c"
        var $60=FUNCTION_TABLE[$58]($57, $59); //@line 857 "_json.c"
        $vret15=$60; //@line 857 "_json.c"
        var $61=$vret15; //@line 857 "_json.c"
        var $62=($61)!=0; //@line 857 "_json.c"
        if ($62) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 857 "_json.c"
      case 14: // $bb16
        var $63=$vret15; //@line 857 "_json.c"
        $0=$63; //@line 857 "_json.c"
        __label__ = 25; break; //@line 857 "_json.c"
      case 15: // $bb17
        var $64=$s; //@line 858 "_json.c"
        var $65=$64+24; //@line 858 "_json.c"
        var $66=HEAP[$65]; //@line 858 "_json.c"
        var $67=($66)!=0; //@line 858 "_json.c"
        if ($67) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 858 "_json.c"
      case 16: // $bb18
        var $68=$s; //@line 858 "_json.c"
        var $69=$68+24; //@line 858 "_json.c"
        var $70=HEAP[$69]; //@line 858 "_json.c"
        var $71=$visit_addr; //@line 858 "_json.c"
        var $72=$arg_addr; //@line 858 "_json.c"
        var $73=FUNCTION_TABLE[$71]($70, $72); //@line 858 "_json.c"
        $vret19=$73; //@line 858 "_json.c"
        var $74=$vret19; //@line 858 "_json.c"
        var $75=($74)!=0; //@line 858 "_json.c"
        if ($75) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 858 "_json.c"
      case 17: // $bb20
        var $76=$vret19; //@line 858 "_json.c"
        $0=$76; //@line 858 "_json.c"
        __label__ = 25; break; //@line 858 "_json.c"
      case 18: // $bb21
        var $77=$s; //@line 859 "_json.c"
        var $78=$77+28; //@line 859 "_json.c"
        var $79=HEAP[$78]; //@line 859 "_json.c"
        var $80=($79)!=0; //@line 859 "_json.c"
        if ($80) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 859 "_json.c"
      case 19: // $bb22
        var $81=$s; //@line 859 "_json.c"
        var $82=$81+28; //@line 859 "_json.c"
        var $83=HEAP[$82]; //@line 859 "_json.c"
        var $84=$visit_addr; //@line 859 "_json.c"
        var $85=$arg_addr; //@line 859 "_json.c"
        var $86=FUNCTION_TABLE[$84]($83, $85); //@line 859 "_json.c"
        $vret23=$86; //@line 859 "_json.c"
        var $87=$vret23; //@line 859 "_json.c"
        var $88=($87)!=0; //@line 859 "_json.c"
        if ($88) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 859 "_json.c"
      case 20: // $bb24
        var $89=$vret23; //@line 859 "_json.c"
        $0=$89; //@line 859 "_json.c"
        __label__ = 25; break; //@line 859 "_json.c"
      case 21: // $bb25
        var $90=$s; //@line 860 "_json.c"
        var $91=$90+32; //@line 860 "_json.c"
        var $92=HEAP[$91]; //@line 860 "_json.c"
        var $93=($92)!=0; //@line 860 "_json.c"
        if ($93) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 860 "_json.c"
      case 22: // $bb26
        var $94=$s; //@line 860 "_json.c"
        var $95=$94+32; //@line 860 "_json.c"
        var $96=HEAP[$95]; //@line 860 "_json.c"
        var $97=$visit_addr; //@line 860 "_json.c"
        var $98=$arg_addr; //@line 860 "_json.c"
        var $99=FUNCTION_TABLE[$97]($96, $98); //@line 860 "_json.c"
        $vret27=$99; //@line 860 "_json.c"
        var $100=$vret27; //@line 860 "_json.c"
        var $101=($100)!=0; //@line 860 "_json.c"
        if ($101) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 860 "_json.c"
      case 23: // $bb28
        var $102=$vret27; //@line 860 "_json.c"
        $0=$102; //@line 860 "_json.c"
        __label__ = 25; break; //@line 860 "_json.c"
      case 24: // $bb29
        $0=0; //@line 861 "_json.c"
        __label__ = 25; break; //@line 861 "_json.c"
      case 25: // $bb30
        var $103=$0; //@line 854 "_json.c"
        $retval=$103; //@line 854 "_json.c"
        var $retval31=$retval; //@line 854 "_json.c"
        ;
        return $retval31; //@line 854 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_clear($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $s;
        var $_py_tmp;
        var $_py_tmp7;
        var $_py_tmp11;
        var $_py_tmp15;
        var $_py_tmp19;
        var $_py_tmp23;
        var $_py_tmp27;
        $self_addr=$self;
        var $1=$self_addr; //@line 868 "_json.c"
        var $2=$1+4; //@line 868 "_json.c"
        var $3=HEAP[$2]; //@line 868 "_json.c"
        var $4=($3)!=(_PyScannerType); //@line 868 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 868 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 868 "_json.c"
        var $6=$5+4; //@line 868 "_json.c"
        var $7=HEAP[$6]; //@line 868 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyScannerType); //@line 868 "_json.c"
        var $9=($8)==0; //@line 868 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 868 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str28, __str29, 868, ___PRETTY_FUNCTION___9278); //@line 868 "_json.c"
        throw "Reached an unreachable!" //@line 868 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 869 "_json.c"
        var $11=$10; //@line 869 "_json.c"
        $s=$11; //@line 869 "_json.c"
        var $12=$s; //@line 870 "_json.c"
        var $13=$12+8; //@line 870 "_json.c"
        var $14=HEAP[$13]; //@line 870 "_json.c"
        var $15=($14)!=0; //@line 870 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 870 "_json.c"
      case 4: // $bb3
        var $16=$s; //@line 870 "_json.c"
        var $17=$16+8; //@line 870 "_json.c"
        var $18=HEAP[$17]; //@line 870 "_json.c"
        $_py_tmp=$18; //@line 870 "_json.c"
        var $19=$s; //@line 870 "_json.c"
        var $20=$19+8; //@line 870 "_json.c"
        HEAP[$20]=0; //@line 870 "_json.c"
        var $21=$_py_tmp; //@line 870 "_json.c"
        var $22=$21; //@line 870 "_json.c"
        var $23=HEAP[$22]; //@line 870 "_json.c"
        var $24=($23) - 1; //@line 870 "_json.c"
        var $25=$_py_tmp; //@line 870 "_json.c"
        var $26=$25; //@line 870 "_json.c"
        HEAP[$26]=$24; //@line 870 "_json.c"
        var $27=$_py_tmp; //@line 870 "_json.c"
        var $28=$27; //@line 870 "_json.c"
        var $29=HEAP[$28]; //@line 870 "_json.c"
        var $30=($29)==0; //@line 870 "_json.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 870 "_json.c"
      case 5: // $bb4
        var $31=$_py_tmp; //@line 870 "_json.c"
        var $32=$31+4; //@line 870 "_json.c"
        var $33=HEAP[$32]; //@line 870 "_json.c"
        var $34=$33+24; //@line 870 "_json.c"
        var $35=HEAP[$34]; //@line 870 "_json.c"
        var $36=$_py_tmp; //@line 870 "_json.c"
        FUNCTION_TABLE[$35]($36); //@line 870 "_json.c"
        __label__ = 6; break; //@line 870 "_json.c"
      case 6: // $bb5
        var $37=$s; //@line 871 "_json.c"
        var $38=$37+12; //@line 871 "_json.c"
        var $39=HEAP[$38]; //@line 871 "_json.c"
        var $40=($39)!=0; //@line 871 "_json.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 871 "_json.c"
      case 7: // $bb6
        var $41=$s; //@line 871 "_json.c"
        var $42=$41+12; //@line 871 "_json.c"
        var $43=HEAP[$42]; //@line 871 "_json.c"
        $_py_tmp7=$43; //@line 871 "_json.c"
        var $44=$s; //@line 871 "_json.c"
        var $45=$44+12; //@line 871 "_json.c"
        HEAP[$45]=0; //@line 871 "_json.c"
        var $46=$_py_tmp7; //@line 871 "_json.c"
        var $47=$46; //@line 871 "_json.c"
        var $48=HEAP[$47]; //@line 871 "_json.c"
        var $49=($48) - 1; //@line 871 "_json.c"
        var $50=$_py_tmp7; //@line 871 "_json.c"
        var $51=$50; //@line 871 "_json.c"
        HEAP[$51]=$49; //@line 871 "_json.c"
        var $52=$_py_tmp7; //@line 871 "_json.c"
        var $53=$52; //@line 871 "_json.c"
        var $54=HEAP[$53]; //@line 871 "_json.c"
        var $55=($54)==0; //@line 871 "_json.c"
        if ($55) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 871 "_json.c"
      case 8: // $bb8
        var $56=$_py_tmp7; //@line 871 "_json.c"
        var $57=$56+4; //@line 871 "_json.c"
        var $58=HEAP[$57]; //@line 871 "_json.c"
        var $59=$58+24; //@line 871 "_json.c"
        var $60=HEAP[$59]; //@line 871 "_json.c"
        var $61=$_py_tmp7; //@line 871 "_json.c"
        FUNCTION_TABLE[$60]($61); //@line 871 "_json.c"
        __label__ = 9; break; //@line 871 "_json.c"
      case 9: // $bb9
        var $62=$s; //@line 872 "_json.c"
        var $63=$62+16; //@line 872 "_json.c"
        var $64=HEAP[$63]; //@line 872 "_json.c"
        var $65=($64)!=0; //@line 872 "_json.c"
        if ($65) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 872 "_json.c"
      case 10: // $bb10
        var $66=$s; //@line 872 "_json.c"
        var $67=$66+16; //@line 872 "_json.c"
        var $68=HEAP[$67]; //@line 872 "_json.c"
        $_py_tmp11=$68; //@line 872 "_json.c"
        var $69=$s; //@line 872 "_json.c"
        var $70=$69+16; //@line 872 "_json.c"
        HEAP[$70]=0; //@line 872 "_json.c"
        var $71=$_py_tmp11; //@line 872 "_json.c"
        var $72=$71; //@line 872 "_json.c"
        var $73=HEAP[$72]; //@line 872 "_json.c"
        var $74=($73) - 1; //@line 872 "_json.c"
        var $75=$_py_tmp11; //@line 872 "_json.c"
        var $76=$75; //@line 872 "_json.c"
        HEAP[$76]=$74; //@line 872 "_json.c"
        var $77=$_py_tmp11; //@line 872 "_json.c"
        var $78=$77; //@line 872 "_json.c"
        var $79=HEAP[$78]; //@line 872 "_json.c"
        var $80=($79)==0; //@line 872 "_json.c"
        if ($80) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 872 "_json.c"
      case 11: // $bb12
        var $81=$_py_tmp11; //@line 872 "_json.c"
        var $82=$81+4; //@line 872 "_json.c"
        var $83=HEAP[$82]; //@line 872 "_json.c"
        var $84=$83+24; //@line 872 "_json.c"
        var $85=HEAP[$84]; //@line 872 "_json.c"
        var $86=$_py_tmp11; //@line 872 "_json.c"
        FUNCTION_TABLE[$85]($86); //@line 872 "_json.c"
        __label__ = 12; break; //@line 872 "_json.c"
      case 12: // $bb13
        var $87=$s; //@line 873 "_json.c"
        var $88=$87+20; //@line 873 "_json.c"
        var $89=HEAP[$88]; //@line 873 "_json.c"
        var $90=($89)!=0; //@line 873 "_json.c"
        if ($90) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 873 "_json.c"
      case 13: // $bb14
        var $91=$s; //@line 873 "_json.c"
        var $92=$91+20; //@line 873 "_json.c"
        var $93=HEAP[$92]; //@line 873 "_json.c"
        $_py_tmp15=$93; //@line 873 "_json.c"
        var $94=$s; //@line 873 "_json.c"
        var $95=$94+20; //@line 873 "_json.c"
        HEAP[$95]=0; //@line 873 "_json.c"
        var $96=$_py_tmp15; //@line 873 "_json.c"
        var $97=$96; //@line 873 "_json.c"
        var $98=HEAP[$97]; //@line 873 "_json.c"
        var $99=($98) - 1; //@line 873 "_json.c"
        var $100=$_py_tmp15; //@line 873 "_json.c"
        var $101=$100; //@line 873 "_json.c"
        HEAP[$101]=$99; //@line 873 "_json.c"
        var $102=$_py_tmp15; //@line 873 "_json.c"
        var $103=$102; //@line 873 "_json.c"
        var $104=HEAP[$103]; //@line 873 "_json.c"
        var $105=($104)==0; //@line 873 "_json.c"
        if ($105) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 873 "_json.c"
      case 14: // $bb16
        var $106=$_py_tmp15; //@line 873 "_json.c"
        var $107=$106+4; //@line 873 "_json.c"
        var $108=HEAP[$107]; //@line 873 "_json.c"
        var $109=$108+24; //@line 873 "_json.c"
        var $110=HEAP[$109]; //@line 873 "_json.c"
        var $111=$_py_tmp15; //@line 873 "_json.c"
        FUNCTION_TABLE[$110]($111); //@line 873 "_json.c"
        __label__ = 15; break; //@line 873 "_json.c"
      case 15: // $bb17
        var $112=$s; //@line 874 "_json.c"
        var $113=$112+24; //@line 874 "_json.c"
        var $114=HEAP[$113]; //@line 874 "_json.c"
        var $115=($114)!=0; //@line 874 "_json.c"
        if ($115) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 874 "_json.c"
      case 16: // $bb18
        var $116=$s; //@line 874 "_json.c"
        var $117=$116+24; //@line 874 "_json.c"
        var $118=HEAP[$117]; //@line 874 "_json.c"
        $_py_tmp19=$118; //@line 874 "_json.c"
        var $119=$s; //@line 874 "_json.c"
        var $120=$119+24; //@line 874 "_json.c"
        HEAP[$120]=0; //@line 874 "_json.c"
        var $121=$_py_tmp19; //@line 874 "_json.c"
        var $122=$121; //@line 874 "_json.c"
        var $123=HEAP[$122]; //@line 874 "_json.c"
        var $124=($123) - 1; //@line 874 "_json.c"
        var $125=$_py_tmp19; //@line 874 "_json.c"
        var $126=$125; //@line 874 "_json.c"
        HEAP[$126]=$124; //@line 874 "_json.c"
        var $127=$_py_tmp19; //@line 874 "_json.c"
        var $128=$127; //@line 874 "_json.c"
        var $129=HEAP[$128]; //@line 874 "_json.c"
        var $130=($129)==0; //@line 874 "_json.c"
        if ($130) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 874 "_json.c"
      case 17: // $bb20
        var $131=$_py_tmp19; //@line 874 "_json.c"
        var $132=$131+4; //@line 874 "_json.c"
        var $133=HEAP[$132]; //@line 874 "_json.c"
        var $134=$133+24; //@line 874 "_json.c"
        var $135=HEAP[$134]; //@line 874 "_json.c"
        var $136=$_py_tmp19; //@line 874 "_json.c"
        FUNCTION_TABLE[$135]($136); //@line 874 "_json.c"
        __label__ = 18; break; //@line 874 "_json.c"
      case 18: // $bb21
        var $137=$s; //@line 875 "_json.c"
        var $138=$137+28; //@line 875 "_json.c"
        var $139=HEAP[$138]; //@line 875 "_json.c"
        var $140=($139)!=0; //@line 875 "_json.c"
        if ($140) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 875 "_json.c"
      case 19: // $bb22
        var $141=$s; //@line 875 "_json.c"
        var $142=$141+28; //@line 875 "_json.c"
        var $143=HEAP[$142]; //@line 875 "_json.c"
        $_py_tmp23=$143; //@line 875 "_json.c"
        var $144=$s; //@line 875 "_json.c"
        var $145=$144+28; //@line 875 "_json.c"
        HEAP[$145]=0; //@line 875 "_json.c"
        var $146=$_py_tmp23; //@line 875 "_json.c"
        var $147=$146; //@line 875 "_json.c"
        var $148=HEAP[$147]; //@line 875 "_json.c"
        var $149=($148) - 1; //@line 875 "_json.c"
        var $150=$_py_tmp23; //@line 875 "_json.c"
        var $151=$150; //@line 875 "_json.c"
        HEAP[$151]=$149; //@line 875 "_json.c"
        var $152=$_py_tmp23; //@line 875 "_json.c"
        var $153=$152; //@line 875 "_json.c"
        var $154=HEAP[$153]; //@line 875 "_json.c"
        var $155=($154)==0; //@line 875 "_json.c"
        if ($155) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 875 "_json.c"
      case 20: // $bb24
        var $156=$_py_tmp23; //@line 875 "_json.c"
        var $157=$156+4; //@line 875 "_json.c"
        var $158=HEAP[$157]; //@line 875 "_json.c"
        var $159=$158+24; //@line 875 "_json.c"
        var $160=HEAP[$159]; //@line 875 "_json.c"
        var $161=$_py_tmp23; //@line 875 "_json.c"
        FUNCTION_TABLE[$160]($161); //@line 875 "_json.c"
        __label__ = 21; break; //@line 875 "_json.c"
      case 21: // $bb25
        var $162=$s; //@line 876 "_json.c"
        var $163=$162+32; //@line 876 "_json.c"
        var $164=HEAP[$163]; //@line 876 "_json.c"
        var $165=($164)!=0; //@line 876 "_json.c"
        if ($165) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 876 "_json.c"
      case 22: // $bb26
        var $166=$s; //@line 876 "_json.c"
        var $167=$166+32; //@line 876 "_json.c"
        var $168=HEAP[$167]; //@line 876 "_json.c"
        $_py_tmp27=$168; //@line 876 "_json.c"
        var $169=$s; //@line 876 "_json.c"
        var $170=$169+32; //@line 876 "_json.c"
        HEAP[$170]=0; //@line 876 "_json.c"
        var $171=$_py_tmp27; //@line 876 "_json.c"
        var $172=$171; //@line 876 "_json.c"
        var $173=HEAP[$172]; //@line 876 "_json.c"
        var $174=($173) - 1; //@line 876 "_json.c"
        var $175=$_py_tmp27; //@line 876 "_json.c"
        var $176=$175; //@line 876 "_json.c"
        HEAP[$176]=$174; //@line 876 "_json.c"
        var $177=$_py_tmp27; //@line 876 "_json.c"
        var $178=$177; //@line 876 "_json.c"
        var $179=HEAP[$178]; //@line 876 "_json.c"
        var $180=($179)==0; //@line 876 "_json.c"
        if ($180) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 876 "_json.c"
      case 23: // $bb28
        var $181=$_py_tmp27; //@line 876 "_json.c"
        var $182=$181+4; //@line 876 "_json.c"
        var $183=HEAP[$182]; //@line 876 "_json.c"
        var $184=$183+24; //@line 876 "_json.c"
        var $185=HEAP[$184]; //@line 876 "_json.c"
        var $186=$_py_tmp27; //@line 876 "_json.c"
        FUNCTION_TABLE[$185]($186); //@line 876 "_json.c"
        __label__ = 24; break; //@line 876 "_json.c"
      case 24: // $bb29
        $0=0; //@line 877 "_json.c"
        var $187=$0; //@line 877 "_json.c"
        $retval=$187; //@line 877 "_json.c"
        var $retval30=$retval; //@line 877 "_json.c"
        ;
        return $retval30; //@line 877 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __parse_constant($s, $constant, $idx, $next_idx_ptr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $constant_addr;
        var $idx_addr;
        var $next_idx_ptr_addr;
        var $retval;
        var $0;
        var $cstr;
        var $rval;
        $s_addr=$s;
        $constant_addr=$constant;
        $idx_addr=$idx;
        $next_idx_ptr_addr=$next_idx_ptr;
        var $1=$constant_addr; //@line 1276 "_json.c"
        var $2=_PyString_InternFromString($1); //@line 1276 "_json.c"
        $cstr=$2; //@line 1276 "_json.c"
        var $3=$cstr; //@line 1277 "_json.c"
        var $4=($3)==0; //@line 1277 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1277 "_json.c"
      case 1: // $bb
        $0=0; //@line 1278 "_json.c"
        __label__ = 5; break; //@line 1278 "_json.c"
      case 2: // $bb1
        var $5=$s_addr; //@line 1281 "_json.c"
        var $6=$5+32; //@line 1281 "_json.c"
        var $7=HEAP[$6]; //@line 1281 "_json.c"
        var $8=$cstr; //@line 1281 "_json.c"
        var $9=_PyObject_CallFunctionObjArgs($7, $8, 0); //@line 1281 "_json.c"
        $rval=$9; //@line 1281 "_json.c"
        var $10=$cstr; //@line 1282 "_json.c"
        var $11=$10; //@line 1282 "_json.c"
        var $12=$11+8; //@line 1282 "_json.c"
        var $13=HEAP[$12]; //@line 1282 "_json.c"
        var $14=$idx_addr; //@line 1282 "_json.c"
        var $15=($14) + ($13); //@line 1282 "_json.c"
        $idx_addr=$15; //@line 1282 "_json.c"
        var $16=$cstr; //@line 1283 "_json.c"
        var $17=$16; //@line 1283 "_json.c"
        var $18=HEAP[$17]; //@line 1283 "_json.c"
        var $19=($18) - 1; //@line 1283 "_json.c"
        var $20=$cstr; //@line 1283 "_json.c"
        var $21=$20; //@line 1283 "_json.c"
        HEAP[$21]=$19; //@line 1283 "_json.c"
        var $22=$cstr; //@line 1283 "_json.c"
        var $23=$22; //@line 1283 "_json.c"
        var $24=HEAP[$23]; //@line 1283 "_json.c"
        var $25=($24)==0; //@line 1283 "_json.c"
        if ($25) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1283 "_json.c"
      case 3: // $bb2
        var $26=$cstr; //@line 1283 "_json.c"
        var $27=$26+4; //@line 1283 "_json.c"
        var $28=HEAP[$27]; //@line 1283 "_json.c"
        var $29=$28+24; //@line 1283 "_json.c"
        var $30=HEAP[$29]; //@line 1283 "_json.c"
        var $31=$cstr; //@line 1283 "_json.c"
        FUNCTION_TABLE[$30]($31); //@line 1283 "_json.c"
        __label__ = 4; break; //@line 1283 "_json.c"
      case 4: // $bb3
        var $32=$next_idx_ptr_addr; //@line 1284 "_json.c"
        var $33=$idx_addr; //@line 1284 "_json.c"
        HEAP[$32]=$33; //@line 1284 "_json.c"
        var $34=$rval; //@line 1285 "_json.c"
        $0=$34; //@line 1285 "_json.c"
        __label__ = 5; break; //@line 1285 "_json.c"
      case 5: // $bb4
        var $35=$0; //@line 1278 "_json.c"
        $retval=$35; //@line 1278 "_json.c"
        var $retval5=$retval; //@line 1278 "_json.c"
        ;
        return $retval5; //@line 1278 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scan_once_str($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr_i49;
        var $pystr_addr_i50;
        var $idx_addr_i51;
        var $next_idx_ptr_addr_i52;
        var $retval_i53;
        var $0;
        var $str_i54;
        var $end_idx_i55;
        var $rval_i56;
        var $pairs_i;
        var $item_i;
        var $key_i;
        var $val_i57;
        var $encoding_i;
        var $strict_i;
        var $next_idx_i58=__stackBase__;
        var $_py_tmp_i59;
        var $_py_tmp38_i;
        var $_py_tmp76_i;
        var $s_addr_i1;
        var $pystr_addr_i2;
        var $idx_addr_i;
        var $next_idx_ptr_addr_i3;
        var $retval_i4;
        var $1;
        var $str_i5;
        var $end_idx_i6;
        var $val_i;
        var $rval_i7;
        var $next_idx_i=__stackBase__+4;
        var $_py_tmp_i;
        var $s_addr_i;
        var $pystr_addr_i;
        var $start_addr_i;
        var $next_idx_ptr_addr_i;
        var $retval_i;
        var $2;
        var $str_i;
        var $end_idx_i;
        var $idx_i;
        var $is_float_i;
        var $rval_i;
        var $numstr_i;
        var $e_start_i;
        var $d_i;
        var $s_addr;
        var $pystr_addr;
        var $idx_addr;
        var $next_idx_ptr_addr;
        var $retval;
        var $3;
        var $res;
        var $str;
        var $length;
        $s_addr=$s;
        $pystr_addr=$pystr;
        $idx_addr=$idx;
        $next_idx_ptr_addr=$next_idx_ptr;
        var $4=$pystr_addr; //@line 1492 "_json.c"
        var $5=$4; //@line 1492 "_json.c"
        var $6=$5+20; //@line 1492 "_json.c"
        var $7=$6; //@line 1492 "_json.c"
        $str=$7; //@line 1492 "_json.c"
        var $8=$pystr_addr; //@line 1493 "_json.c"
        var $9=$8; //@line 1493 "_json.c"
        var $10=$9+8; //@line 1493 "_json.c"
        var $11=HEAP[$10]; //@line 1493 "_json.c"
        $length=$11; //@line 1493 "_json.c"
        var $12=$idx_addr; //@line 1494 "_json.c"
        var $13=$length; //@line 1494 "_json.c"
        var $14=($12) >= ($13); //@line 1494 "_json.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1494 "_json.c"
      case 1: // $bb
        var $15=HEAP[_PyExc_StopIteration]; //@line 1495 "_json.c"
        _PyErr_SetNone($15); //@line 1495 "_json.c"
        $3=0; //@line 1496 "_json.c"
        __label__ = 238; break; //@line 1496 "_json.c"
      case 2: // $bb1
        var $16=$str; //@line 1498 "_json.c"
        var $17=$idx_addr; //@line 1498 "_json.c"
        var $18=$16+$17; //@line 1498 "_json.c"
        var $19=HEAP[$18]; //@line 1498 "_json.c"
        var $20=($19); //@line 1498 "_json.c"
        if ($20 == 34) {
          __label__ = 3; break;
        }
        else if ($20 == 45) {
          __label__ = 175; break;
        }
        else if ($20 == 73) {
          __label__ = 166; break;
        }
        else if ($20 == 78) {
          __label__ = 162; break;
        }
        else if ($20 == 91) {
          __label__ = 98; break;
        }
        else if ($20 == 102) {
          __label__ = 156; break;
        }
        else if ($20 == 110) {
          __label__ = 146; break;
        }
        else if ($20 == 116) {
          __label__ = 151; break;
        }
        else if ($20 == 123) {
          __label__ = 4; break;
        }
        else {
        __label__ = 185; break;
        }
        
      case 3: // $bb2
        var $21=$s_addr; //@line 1501 "_json.c"
        var $22=$21+12; //@line 1501 "_json.c"
        var $23=HEAP[$22]; //@line 1501 "_json.c"
        var $24=_PyObject_IsTrue($23); //@line 1501 "_json.c"
        var $25=$s_addr; //@line 1501 "_json.c"
        var $26=$25+8; //@line 1501 "_json.c"
        var $27=HEAP[$26]; //@line 1501 "_json.c"
        var $28=$27; //@line 1501 "_json.c"
        var $29=$28+20; //@line 1501 "_json.c"
        var $30=$29; //@line 1501 "_json.c"
        var $31=$idx_addr; //@line 1501 "_json.c"
        var $32=($31) + 1; //@line 1501 "_json.c"
        var $33=$pystr_addr; //@line 1501 "_json.c"
        var $34=$next_idx_ptr_addr; //@line 1501 "_json.c"
        var $35=_scanstring_str($33, $32, $30, $24, $34); //@line 1501 "_json.c"
        $3=$35; //@line 1501 "_json.c"
        __label__ = 238; break; //@line 1501 "_json.c"
      case 4: // $bb3
        var $36=HEAP[__PyThreadState_Current]; //@line 1507 "_json.c"
        var $37=$36+12; //@line 1507 "_json.c"
        var $38=HEAP[$37]; //@line 1507 "_json.c"
        var $39=($38) + 1; //@line 1507 "_json.c"
        var $40=$36+12; //@line 1507 "_json.c"
        HEAP[$40]=$39; //@line 1507 "_json.c"
        var $41=$36+12; //@line 1507 "_json.c"
        var $42=HEAP[$41]; //@line 1507 "_json.c"
        var $43=HEAP[__Py_CheckRecursionLimit]; //@line 1507 "_json.c"
        var $44=($42) > ($43); //@line 1507 "_json.c"
        if ($44) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1507 "_json.c"
      case 5: // $bb4
        var $45=__Py_CheckRecursiveCall(__str34); //@line 1507 "_json.c"
        var $46=($45)!=0; //@line 1507 "_json.c"
        if ($46) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1507 "_json.c"
      case 6: // $bb5
        $3=0; //@line 1509 "_json.c"
        __label__ = 238; break; //@line 1509 "_json.c"
      case 7: // $bb6
        var $47=$idx_addr; //@line 1510 "_json.c"
        var $48=($47) + 1; //@line 1510 "_json.c"
        var $49=$s_addr; //@line 1510 "_json.c"
        var $50=$pystr_addr; //@line 1510 "_json.c"
        var $51=$next_idx_ptr_addr; //@line 1510 "_json.c"
        $s_addr_i49=$49;
        $pystr_addr_i50=$50;
        $idx_addr_i51=$48;
        $next_idx_ptr_addr_i52=$51;
        var $52=$pystr_addr_i50; //@line 889 "_json.c"
        var $53=$52; //@line 889 "_json.c"
        var $54=$53+20; //@line 889 "_json.c"
        var $55=$54; //@line 889 "_json.c"
        $str_i54=$55; //@line 889 "_json.c"
        var $56=$pystr_addr_i50; //@line 890 "_json.c"
        var $57=$56; //@line 890 "_json.c"
        var $58=$57+8; //@line 890 "_json.c"
        var $59=HEAP[$58]; //@line 890 "_json.c"
        var $60=($59) - 1; //@line 890 "_json.c"
        $end_idx_i55=$60; //@line 890 "_json.c"
        $key_i=0; //@line 894 "_json.c"
        $val_i57=0; //@line 895 "_json.c"
        var $61=$s_addr_i49; //@line 896 "_json.c"
        var $62=$61+8; //@line 896 "_json.c"
        var $63=HEAP[$62]; //@line 896 "_json.c"
        var $64=$63; //@line 896 "_json.c"
        var $65=$64+20; //@line 896 "_json.c"
        var $66=$65; //@line 896 "_json.c"
        $encoding_i=$66; //@line 896 "_json.c"
        var $67=$s_addr_i49; //@line 897 "_json.c"
        var $68=$67+12; //@line 897 "_json.c"
        var $69=HEAP[$68]; //@line 897 "_json.c"
        var $70=_PyObject_IsTrue($69); //@line 897 "_json.c"
        $strict_i=$70; //@line 897 "_json.c"
        var $71=_PyList_New(0); //@line 900 "_json.c"
        $pairs_i=$71; //@line 900 "_json.c"
        var $72=($71)==0; //@line 901 "_json.c"
        if ($72) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 901 "_json.c"
      case 8: // $bb_i60
        $0=0; //@line 902 "_json.c"
        __label__ = 97; break; //@line 902 "_json.c"
      case 9: // $bb2_i61
        var $73=$idx_addr_i51; //@line 905 "_json.c"
        var $74=($73) + 1; //@line 905 "_json.c"
        $idx_addr_i51=$74; //@line 905 "_json.c"
        __label__ = 10; break; //@line 905 "_json.c"
      case 10: // $bb3_i62
        var $75=$idx_addr_i51; //@line 905 "_json.c"
        var $76=$end_idx_i55; //@line 905 "_json.c"
        var $77=($75) > ($76); //@line 905 "_json.c"
        if ($77) { __label__ = 15; break; } else { __label__ = 11; break; } //@line 905 "_json.c"
      case 11: // $bb4_i63
        var $78=$str_i54; //@line 905 "_json.c"
        var $79=$idx_addr_i51; //@line 905 "_json.c"
        var $80=$78+$79; //@line 905 "_json.c"
        var $81=HEAP[$80]; //@line 905 "_json.c"
        var $82=($81)==32; //@line 905 "_json.c"
        if ($82) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 905 "_json.c"
      case 12: // $bb5_i64
        var $83=$str_i54; //@line 905 "_json.c"
        var $84=$idx_addr_i51; //@line 905 "_json.c"
        var $85=$83+$84; //@line 905 "_json.c"
        var $86=HEAP[$85]; //@line 905 "_json.c"
        var $87=($86)==9; //@line 905 "_json.c"
        if ($87) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 905 "_json.c"
      case 13: // $bb6_i65
        var $88=$str_i54; //@line 905 "_json.c"
        var $89=$idx_addr_i51; //@line 905 "_json.c"
        var $90=$88+$89; //@line 905 "_json.c"
        var $91=HEAP[$90]; //@line 905 "_json.c"
        var $92=($91)==10; //@line 905 "_json.c"
        if ($92) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 905 "_json.c"
      case 14: // $bb7_i66
        var $93=$str_i54; //@line 905 "_json.c"
        var $94=$idx_addr_i51; //@line 905 "_json.c"
        var $95=$93+$94; //@line 905 "_json.c"
        var $96=HEAP[$95]; //@line 905 "_json.c"
        var $97=($96)==13; //@line 905 "_json.c"
        if ($97) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 905 "_json.c"
      case 15: // $bb8_i67
        var $98=$idx_addr_i51; //@line 908 "_json.c"
        var $99=$end_idx_i55; //@line 908 "_json.c"
        var $100=($98) <= ($99); //@line 908 "_json.c"
        if ($100) { __label__ = 16; break; } else { __label__ = 69; break; } //@line 908 "_json.c"
      case 16: // $bb9_i68
        var $101=$str_i54; //@line 908 "_json.c"
        var $102=$idx_addr_i51; //@line 908 "_json.c"
        var $103=$101+$102; //@line 908 "_json.c"
        var $104=HEAP[$103]; //@line 908 "_json.c"
        var $105=($104)!=125; //@line 908 "_json.c"
        if ($105) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 908 "_json.c"
      case 17: // $bb11_i69
        var $106=$str_i54; //@line 911 "_json.c"
        var $107=$idx_addr_i51; //@line 911 "_json.c"
        var $108=$106+$107; //@line 911 "_json.c"
        var $109=HEAP[$108]; //@line 911 "_json.c"
        var $110=($109)!=34; //@line 911 "_json.c"
        if ($110) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 911 "_json.c"
      case 18: // $bb12_i70
        var $111=$pystr_addr_i50; //@line 912 "_json.c"
        var $112=$idx_addr_i51; //@line 912 "_json.c"
        _raise_errmsg(__str30, $111, $112); //@line 912 "_json.c"
        __label__ = 87; break; //@line 912 "_json.c"
      case 19: // $bb13_i71
        var $113=$idx_addr_i51; //@line 915 "_json.c"
        var $114=($113) + 1; //@line 915 "_json.c"
        var $115=$pystr_addr_i50; //@line 915 "_json.c"
        var $116=$encoding_i; //@line 915 "_json.c"
        var $117=$strict_i; //@line 915 "_json.c"
        var $118=_scanstring_str($115, $114, $116, $117, $next_idx_i58); //@line 915 "_json.c"
        $key_i=$118; //@line 915 "_json.c"
        var $119=$key_i; //@line 916 "_json.c"
        var $120=($119)==0; //@line 916 "_json.c"
        if ($120) { __label__ = 90; break; } else { __label__ = 20; break; } //@line 916 "_json.c"
      case 20: // $bb14_i72
        var $121=HEAP[$next_idx_i58]; //@line 918 "_json.c"
        $idx_addr_i51=$121; //@line 918 "_json.c"
        __label__ = 22; break; //@line 918 "_json.c"
      case 21: // $bb15_i73
        var $122=$idx_addr_i51; //@line 921 "_json.c"
        var $123=($122) + 1; //@line 921 "_json.c"
        $idx_addr_i51=$123; //@line 921 "_json.c"
        __label__ = 22; break; //@line 921 "_json.c"
      case 22: // $bb16_i74
        var $124=$idx_addr_i51; //@line 921 "_json.c"
        var $125=$end_idx_i55; //@line 921 "_json.c"
        var $126=($124) > ($125); //@line 921 "_json.c"
        if ($126) { __label__ = 27; break; } else { __label__ = 23; break; } //@line 921 "_json.c"
      case 23: // $bb17_i75
        var $127=$str_i54; //@line 921 "_json.c"
        var $128=$idx_addr_i51; //@line 921 "_json.c"
        var $129=$127+$128; //@line 921 "_json.c"
        var $130=HEAP[$129]; //@line 921 "_json.c"
        var $131=($130)==32; //@line 921 "_json.c"
        if ($131) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 921 "_json.c"
      case 24: // $bb18_i76
        var $132=$str_i54; //@line 921 "_json.c"
        var $133=$idx_addr_i51; //@line 921 "_json.c"
        var $134=$132+$133; //@line 921 "_json.c"
        var $135=HEAP[$134]; //@line 921 "_json.c"
        var $136=($135)==9; //@line 921 "_json.c"
        if ($136) { __label__ = 21; break; } else { __label__ = 25; break; } //@line 921 "_json.c"
      case 25: // $bb19_i77
        var $137=$str_i54; //@line 921 "_json.c"
        var $138=$idx_addr_i51; //@line 921 "_json.c"
        var $139=$137+$138; //@line 921 "_json.c"
        var $140=HEAP[$139]; //@line 921 "_json.c"
        var $141=($140)==10; //@line 921 "_json.c"
        if ($141) { __label__ = 21; break; } else { __label__ = 26; break; } //@line 921 "_json.c"
      case 26: // $bb20_i78
        var $142=$str_i54; //@line 921 "_json.c"
        var $143=$idx_addr_i51; //@line 921 "_json.c"
        var $144=$142+$143; //@line 921 "_json.c"
        var $145=HEAP[$144]; //@line 921 "_json.c"
        var $146=($145)==13; //@line 921 "_json.c"
        if ($146) { __label__ = 21; break; } else { __label__ = 27; break; } //@line 921 "_json.c"
      case 27: // $bb21_i79
        var $147=$idx_addr_i51; //@line 922 "_json.c"
        var $148=$end_idx_i55; //@line 922 "_json.c"
        var $149=($147) > ($148); //@line 922 "_json.c"
        if ($149) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 922 "_json.c"
      case 28: // $bb22_i80
        var $150=$str_i54; //@line 922 "_json.c"
        var $151=$idx_addr_i51; //@line 922 "_json.c"
        var $152=$150+$151; //@line 922 "_json.c"
        var $153=HEAP[$152]; //@line 922 "_json.c"
        var $154=($153)!=58; //@line 922 "_json.c"
        if ($154) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 922 "_json.c"
      case 29: // $bb23_i81
        var $155=$pystr_addr_i50; //@line 923 "_json.c"
        var $156=$idx_addr_i51; //@line 923 "_json.c"
        _raise_errmsg(__str31, $155, $156); //@line 923 "_json.c"
        __label__ = 87; break; //@line 923 "_json.c"
      case 30: // $bb24_i82
        var $157=$idx_addr_i51; //@line 926 "_json.c"
        var $158=($157) + 1; //@line 926 "_json.c"
        $idx_addr_i51=$158; //@line 926 "_json.c"
        __label__ = 32; break; //@line 926 "_json.c"
      case 31: // $bb25_i83
        var $159=$idx_addr_i51; //@line 927 "_json.c"
        var $160=($159) + 1; //@line 927 "_json.c"
        $idx_addr_i51=$160; //@line 927 "_json.c"
        __label__ = 32; break; //@line 927 "_json.c"
      case 32: // $bb26_i84
        var $161=$idx_addr_i51; //@line 927 "_json.c"
        var $162=$end_idx_i55; //@line 927 "_json.c"
        var $163=($161) > ($162); //@line 927 "_json.c"
        if ($163) { __label__ = 37; break; } else { __label__ = 33; break; } //@line 927 "_json.c"
      case 33: // $bb27_i85
        var $164=$str_i54; //@line 927 "_json.c"
        var $165=$idx_addr_i51; //@line 927 "_json.c"
        var $166=$164+$165; //@line 927 "_json.c"
        var $167=HEAP[$166]; //@line 927 "_json.c"
        var $168=($167)==32; //@line 927 "_json.c"
        if ($168) { __label__ = 31; break; } else { __label__ = 34; break; } //@line 927 "_json.c"
      case 34: // $bb28_i86
        var $169=$str_i54; //@line 927 "_json.c"
        var $170=$idx_addr_i51; //@line 927 "_json.c"
        var $171=$169+$170; //@line 927 "_json.c"
        var $172=HEAP[$171]; //@line 927 "_json.c"
        var $173=($172)==9; //@line 927 "_json.c"
        if ($173) { __label__ = 31; break; } else { __label__ = 35; break; } //@line 927 "_json.c"
      case 35: // $bb29_i87
        var $174=$str_i54; //@line 927 "_json.c"
        var $175=$idx_addr_i51; //@line 927 "_json.c"
        var $176=$174+$175; //@line 927 "_json.c"
        var $177=HEAP[$176]; //@line 927 "_json.c"
        var $178=($177)==10; //@line 927 "_json.c"
        if ($178) { __label__ = 31; break; } else { __label__ = 36; break; } //@line 927 "_json.c"
      case 36: // $bb30_i88
        var $179=$str_i54; //@line 927 "_json.c"
        var $180=$idx_addr_i51; //@line 927 "_json.c"
        var $181=$179+$180; //@line 927 "_json.c"
        var $182=HEAP[$181]; //@line 927 "_json.c"
        var $183=($182)==13; //@line 927 "_json.c"
        if ($183) { __label__ = 31; break; } else { __label__ = 37; break; } //@line 927 "_json.c"
      case 37: // $bb31_i89
        var $184=$s_addr_i49; //@line 930 "_json.c"
        var $185=$pystr_addr_i50; //@line 930 "_json.c"
        var $186=$idx_addr_i51; //@line 930 "_json.c"
        var $187=_scan_once_str($184, $185, $186, $next_idx_i58); //@line 930 "_json.c"
        $val_i57=$187; //@line 930 "_json.c"
        var $188=($187)==0; //@line 931 "_json.c"
        if ($188) { __label__ = 87; break; } else { __label__ = 38; break; } //@line 931 "_json.c"
      case 38: // $bb32_i90
        var $189=$key_i; //@line 934 "_json.c"
        var $190=$val_i57; //@line 934 "_json.c"
        var $191=_PyTuple_Pack(2, $189, $190); //@line 934 "_json.c"
        $item_i=$191; //@line 934 "_json.c"
        var $192=$item_i; //@line 935 "_json.c"
        var $193=($192)==0; //@line 935 "_json.c"
        if ($193) { __label__ = 87; break; } else { __label__ = 39; break; } //@line 935 "_json.c"
      case 39: // $bb33_i91
        var $194=$key_i; //@line 937 "_json.c"
        var $195=($194)!=0; //@line 937 "_json.c"
        if ($195) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 937 "_json.c"
      case 40: // $bb34_i92
        var $196=$key_i; //@line 937 "_json.c"
        $_py_tmp_i59=$196; //@line 937 "_json.c"
        $key_i=0; //@line 937 "_json.c"
        var $197=$_py_tmp_i59; //@line 937 "_json.c"
        var $198=$197; //@line 937 "_json.c"
        var $199=HEAP[$198]; //@line 937 "_json.c"
        var $200=($199) - 1; //@line 937 "_json.c"
        var $201=$_py_tmp_i59; //@line 937 "_json.c"
        var $202=$201; //@line 937 "_json.c"
        HEAP[$202]=$200; //@line 937 "_json.c"
        var $203=$_py_tmp_i59; //@line 937 "_json.c"
        var $204=$203; //@line 937 "_json.c"
        var $205=HEAP[$204]; //@line 937 "_json.c"
        var $206=($205)==0; //@line 937 "_json.c"
        if ($206) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 937 "_json.c"
      case 41: // $bb35_i93
        var $207=$_py_tmp_i59; //@line 937 "_json.c"
        var $208=$207+4; //@line 937 "_json.c"
        var $209=HEAP[$208]; //@line 937 "_json.c"
        var $210=$209+24; //@line 937 "_json.c"
        var $211=HEAP[$210]; //@line 937 "_json.c"
        var $212=$_py_tmp_i59; //@line 937 "_json.c"
        FUNCTION_TABLE[$211]($212); //@line 937 "_json.c"
        __label__ = 42; break; //@line 937 "_json.c"
      case 42: // $bb36_i94
        var $213=$val_i57; //@line 938 "_json.c"
        var $214=($213)!=0; //@line 938 "_json.c"
        if ($214) { __label__ = 43; break; } else { __label__ = 45; break; } //@line 938 "_json.c"
      case 43: // $bb37_i95
        var $215=$val_i57; //@line 938 "_json.c"
        $_py_tmp38_i=$215; //@line 938 "_json.c"
        $val_i57=0; //@line 938 "_json.c"
        var $216=$_py_tmp38_i; //@line 938 "_json.c"
        var $217=$216; //@line 938 "_json.c"
        var $218=HEAP[$217]; //@line 938 "_json.c"
        var $219=($218) - 1; //@line 938 "_json.c"
        var $220=$_py_tmp38_i; //@line 938 "_json.c"
        var $221=$220; //@line 938 "_json.c"
        HEAP[$221]=$219; //@line 938 "_json.c"
        var $222=$_py_tmp38_i; //@line 938 "_json.c"
        var $223=$222; //@line 938 "_json.c"
        var $224=HEAP[$223]; //@line 938 "_json.c"
        var $225=($224)==0; //@line 938 "_json.c"
        if ($225) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 938 "_json.c"
      case 44: // $bb39_i96
        var $226=$_py_tmp38_i; //@line 938 "_json.c"
        var $227=$226+4; //@line 938 "_json.c"
        var $228=HEAP[$227]; //@line 938 "_json.c"
        var $229=$228+24; //@line 938 "_json.c"
        var $230=HEAP[$229]; //@line 938 "_json.c"
        var $231=$_py_tmp38_i; //@line 938 "_json.c"
        FUNCTION_TABLE[$230]($231); //@line 938 "_json.c"
        __label__ = 45; break; //@line 938 "_json.c"
      case 45: // $bb40_i97
        var $232=$pairs_i; //@line 939 "_json.c"
        var $233=$item_i; //@line 939 "_json.c"
        var $234=_PyList_Append($232, $233); //@line 939 "_json.c"
        var $235=($234)==-1; //@line 939 "_json.c"
        var $236=$item_i; //@line 940 "_json.c"
        var $237=$236; //@line 940 "_json.c"
        var $238=HEAP[$237]; //@line 940 "_json.c"
        var $239=($238) - 1; //@line 940 "_json.c"
        var $240=$item_i; //@line 940 "_json.c"
        var $241=$240; //@line 940 "_json.c"
        HEAP[$241]=$239; //@line 940 "_json.c"
        var $242=$item_i; //@line 940 "_json.c"
        var $243=$242; //@line 940 "_json.c"
        var $244=HEAP[$243]; //@line 940 "_json.c"
        var $245=($244)==0; //@line 940 "_json.c"
        if ($235) { __label__ = 46; break; } else { __label__ = 48; break; } //@line 939 "_json.c"
      case 46: // $bb41_i98
        if ($245) { __label__ = 47; break; } else { __label__ = 87; break; } //@line 940 "_json.c"
      case 47: // $bb42_i99
        var $246=$item_i; //@line 940 "_json.c"
        var $247=$246+4; //@line 940 "_json.c"
        var $248=HEAP[$247]; //@line 940 "_json.c"
        var $249=$248+24; //@line 940 "_json.c"
        var $250=HEAP[$249]; //@line 940 "_json.c"
        var $251=$item_i; //@line 940 "_json.c"
        FUNCTION_TABLE[$250]($251); //@line 940 "_json.c"
        __label__ = 87; break; //@line 940 "_json.c"
      case 48: // $bb44_i100
        if ($245) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 943 "_json.c"
      case 49: // $bb45_i101
        var $252=$item_i; //@line 943 "_json.c"
        var $253=$252+4; //@line 943 "_json.c"
        var $254=HEAP[$253]; //@line 943 "_json.c"
        var $255=$254+24; //@line 943 "_json.c"
        var $256=HEAP[$255]; //@line 943 "_json.c"
        var $257=$item_i; //@line 943 "_json.c"
        FUNCTION_TABLE[$256]($257); //@line 943 "_json.c"
        __label__ = 50; break; //@line 943 "_json.c"
      case 50: // $bb46_i102
        var $258=HEAP[$next_idx_i58]; //@line 944 "_json.c"
        $idx_addr_i51=$258; //@line 944 "_json.c"
        __label__ = 52; break; //@line 944 "_json.c"
      case 51: // $bb47_i
        var $259=$idx_addr_i51; //@line 947 "_json.c"
        var $260=($259) + 1; //@line 947 "_json.c"
        $idx_addr_i51=$260; //@line 947 "_json.c"
        __label__ = 52; break; //@line 947 "_json.c"
      case 52: // $bb48_i103
        var $261=$idx_addr_i51; //@line 947 "_json.c"
        var $262=$end_idx_i55; //@line 947 "_json.c"
        var $263=($261) > ($262); //@line 947 "_json.c"
        if ($263) { __label__ = 57; break; } else { __label__ = 53; break; } //@line 947 "_json.c"
      case 53: // $bb49_i104
        var $264=$str_i54; //@line 947 "_json.c"
        var $265=$idx_addr_i51; //@line 947 "_json.c"
        var $266=$264+$265; //@line 947 "_json.c"
        var $267=HEAP[$266]; //@line 947 "_json.c"
        var $268=($267)==32; //@line 947 "_json.c"
        if ($268) { __label__ = 51; break; } else { __label__ = 54; break; } //@line 947 "_json.c"
      case 54: // $bb50_i105
        var $269=$str_i54; //@line 947 "_json.c"
        var $270=$idx_addr_i51; //@line 947 "_json.c"
        var $271=$269+$270; //@line 947 "_json.c"
        var $272=HEAP[$271]; //@line 947 "_json.c"
        var $273=($272)==9; //@line 947 "_json.c"
        if ($273) { __label__ = 51; break; } else { __label__ = 55; break; } //@line 947 "_json.c"
      case 55: // $bb51_i106
        var $274=$str_i54; //@line 947 "_json.c"
        var $275=$idx_addr_i51; //@line 947 "_json.c"
        var $276=$274+$275; //@line 947 "_json.c"
        var $277=HEAP[$276]; //@line 947 "_json.c"
        var $278=($277)==10; //@line 947 "_json.c"
        if ($278) { __label__ = 51; break; } else { __label__ = 56; break; } //@line 947 "_json.c"
      case 56: // $bb52_i107
        var $279=$str_i54; //@line 947 "_json.c"
        var $280=$idx_addr_i51; //@line 947 "_json.c"
        var $281=$279+$280; //@line 947 "_json.c"
        var $282=HEAP[$281]; //@line 947 "_json.c"
        var $283=($282)==13; //@line 947 "_json.c"
        if ($283) { __label__ = 51; break; } else { __label__ = 57; break; } //@line 947 "_json.c"
      case 57: // $bb53_i108
        var $284=$idx_addr_i51; //@line 950 "_json.c"
        var $285=$end_idx_i55; //@line 950 "_json.c"
        var $286=($284) > ($285); //@line 950 "_json.c"
        if ($286) { __label__ = 69; break; } else { __label__ = 58; break; } //@line 950 "_json.c"
      case 58: // $bb54_i
        var $287=$str_i54; //@line 951 "_json.c"
        var $288=$idx_addr_i51; //@line 951 "_json.c"
        var $289=$287+$288; //@line 951 "_json.c"
        var $290=HEAP[$289]; //@line 951 "_json.c"
        var $291=($290)==125; //@line 951 "_json.c"
        if ($291) { __label__ = 69; break; } else { __label__ = 59; break; } //@line 951 "_json.c"
      case 59: // $bb55_i
        var $292=$str_i54; //@line 954 "_json.c"
        var $293=$idx_addr_i51; //@line 954 "_json.c"
        var $294=$292+$293; //@line 954 "_json.c"
        var $295=HEAP[$294]; //@line 954 "_json.c"
        var $296=($295)!=44; //@line 954 "_json.c"
        if ($296) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 954 "_json.c"
      case 60: // $bb56_i
        var $297=$pystr_addr_i50; //@line 955 "_json.c"
        var $298=$idx_addr_i51; //@line 955 "_json.c"
        _raise_errmsg(__str32, $297, $298); //@line 955 "_json.c"
        __label__ = 87; break; //@line 955 "_json.c"
      case 61: // $bb57_i
        var $299=$idx_addr_i51; //@line 958 "_json.c"
        var $300=($299) + 1; //@line 958 "_json.c"
        $idx_addr_i51=$300; //@line 958 "_json.c"
        __label__ = 63; break; //@line 958 "_json.c"
      case 62: // $bb58_i
        var $301=$idx_addr_i51; //@line 961 "_json.c"
        var $302=($301) + 1; //@line 961 "_json.c"
        $idx_addr_i51=$302; //@line 961 "_json.c"
        __label__ = 63; break; //@line 961 "_json.c"
      case 63: // $bb59_i
        var $303=$idx_addr_i51; //@line 961 "_json.c"
        var $304=$end_idx_i55; //@line 961 "_json.c"
        var $305=($303) > ($304); //@line 961 "_json.c"
        if ($305) { __label__ = 68; break; } else { __label__ = 64; break; } //@line 961 "_json.c"
      case 64: // $bb60_i
        var $306=$str_i54; //@line 961 "_json.c"
        var $307=$idx_addr_i51; //@line 961 "_json.c"
        var $308=$306+$307; //@line 961 "_json.c"
        var $309=HEAP[$308]; //@line 961 "_json.c"
        var $310=($309)==32; //@line 961 "_json.c"
        if ($310) { __label__ = 62; break; } else { __label__ = 65; break; } //@line 961 "_json.c"
      case 65: // $bb61_i
        var $311=$str_i54; //@line 961 "_json.c"
        var $312=$idx_addr_i51; //@line 961 "_json.c"
        var $313=$311+$312; //@line 961 "_json.c"
        var $314=HEAP[$313]; //@line 961 "_json.c"
        var $315=($314)==9; //@line 961 "_json.c"
        if ($315) { __label__ = 62; break; } else { __label__ = 66; break; } //@line 961 "_json.c"
      case 66: // $bb62_i
        var $316=$str_i54; //@line 961 "_json.c"
        var $317=$idx_addr_i51; //@line 961 "_json.c"
        var $318=$316+$317; //@line 961 "_json.c"
        var $319=HEAP[$318]; //@line 961 "_json.c"
        var $320=($319)==10; //@line 961 "_json.c"
        if ($320) { __label__ = 62; break; } else { __label__ = 67; break; } //@line 961 "_json.c"
      case 67: // $bb63_i
        var $321=$str_i54; //@line 961 "_json.c"
        var $322=$idx_addr_i51; //@line 961 "_json.c"
        var $323=$321+$322; //@line 961 "_json.c"
        var $324=HEAP[$323]; //@line 961 "_json.c"
        var $325=($324)==13; //@line 961 "_json.c"
        if ($325) { __label__ = 62; break; } else { __label__ = 68; break; } //@line 961 "_json.c"
      case 68: // $bb64_i
        var $326=$idx_addr_i51; //@line 909 "_json.c"
        var $327=$end_idx_i55; //@line 909 "_json.c"
        var $328=($326) <= ($327); //@line 909 "_json.c"
        if ($328) { __label__ = 17; break; } else { __label__ = 69; break; } //@line 909 "_json.c"
      case 69: // $bb65_i
        var $329=$idx_addr_i51; //@line 965 "_json.c"
        var $330=$end_idx_i55; //@line 965 "_json.c"
        var $331=($329) > ($330); //@line 965 "_json.c"
        if ($331) { __label__ = 71; break; } else { __label__ = 70; break; } //@line 965 "_json.c"
      case 70: // $bb66_i
        var $332=$str_i54; //@line 965 "_json.c"
        var $333=$idx_addr_i51; //@line 965 "_json.c"
        var $334=$332+$333; //@line 965 "_json.c"
        var $335=HEAP[$334]; //@line 965 "_json.c"
        var $336=($335)!=125; //@line 965 "_json.c"
        if ($336) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 965 "_json.c"
      case 71: // $bb67_i
        var $337=$pystr_addr_i50; //@line 966 "_json.c"
        var $338=$end_idx_i55; //@line 966 "_json.c"
        _raise_errmsg(__str33, $337, $338); //@line 966 "_json.c"
        __label__ = 87; break; //@line 966 "_json.c"
      case 72: // $bb68_i
        var $339=$s_addr_i49; //@line 971 "_json.c"
        var $340=$339+20; //@line 971 "_json.c"
        var $341=HEAP[$340]; //@line 971 "_json.c"
        var $342=($341)!=(__Py_NoneStruct); //@line 971 "_json.c"
        if ($342) { __label__ = 73; break; } else { __label__ = 77; break; } //@line 971 "_json.c"
      case 73: // $bb69_i
        var $343=$s_addr_i49; //@line 972 "_json.c"
        var $344=$343+20; //@line 972 "_json.c"
        var $345=HEAP[$344]; //@line 972 "_json.c"
        var $346=$pairs_i; //@line 972 "_json.c"
        var $347=_PyObject_CallFunctionObjArgs($345, $346, 0); //@line 972 "_json.c"
        $val_i57=$347; //@line 972 "_json.c"
        var $348=$val_i57; //@line 973 "_json.c"
        var $349=($348)==0; //@line 973 "_json.c"
        if ($349) { __label__ = 87; break; } else { __label__ = 74; break; } //@line 973 "_json.c"
      case 74: // $bb70_i
        var $350=$pairs_i; //@line 975 "_json.c"
        var $351=$350; //@line 975 "_json.c"
        var $352=HEAP[$351]; //@line 975 "_json.c"
        var $353=($352) - 1; //@line 975 "_json.c"
        var $354=$pairs_i; //@line 975 "_json.c"
        var $355=$354; //@line 975 "_json.c"
        HEAP[$355]=$353; //@line 975 "_json.c"
        var $356=$pairs_i; //@line 975 "_json.c"
        var $357=$356; //@line 975 "_json.c"
        var $358=HEAP[$357]; //@line 975 "_json.c"
        var $359=($358)==0; //@line 975 "_json.c"
        if ($359) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 975 "_json.c"
      case 75: // $bb71_i
        var $360=$pairs_i; //@line 975 "_json.c"
        var $361=$360+4; //@line 975 "_json.c"
        var $362=HEAP[$361]; //@line 975 "_json.c"
        var $363=$362+24; //@line 975 "_json.c"
        var $364=HEAP[$363]; //@line 975 "_json.c"
        var $365=$pairs_i; //@line 975 "_json.c"
        FUNCTION_TABLE[$364]($365); //@line 975 "_json.c"
        __label__ = 76; break; //@line 975 "_json.c"
      case 76: // $bb72_i
        var $366=$idx_addr_i51; //@line 976 "_json.c"
        var $367=($366) + 1; //@line 976 "_json.c"
        var $368=$next_idx_ptr_addr_i52; //@line 976 "_json.c"
        HEAP[$368]=$367; //@line 976 "_json.c"
        var $369=$val_i57; //@line 977 "_json.c"
        $0=$369; //@line 977 "_json.c"
        __label__ = 97; break; //@line 977 "_json.c"
      case 77: // $bb73_i
        var $370=$pairs_i; //@line 980 "_json.c"
        var $371=_PyObject_CallFunctionObjArgs(_PyDict_Type, $370, 0); //@line 980 "_json.c"
        $rval_i56=$371; //@line 980 "_json.c"
        var $372=$rval_i56; //@line 982 "_json.c"
        var $373=($372)==0; //@line 982 "_json.c"
        if ($373) { __label__ = 87; break; } else { __label__ = 78; break; } //@line 982 "_json.c"
      case 78: // $bb74_i
        var $374=$pairs_i; //@line 984 "_json.c"
        var $375=($374)!=0; //@line 984 "_json.c"
        if ($375) { __label__ = 79; break; } else { __label__ = 81; break; } //@line 984 "_json.c"
      case 79: // $bb75_i
        var $376=$pairs_i; //@line 984 "_json.c"
        $_py_tmp76_i=$376; //@line 984 "_json.c"
        $pairs_i=0; //@line 984 "_json.c"
        var $377=$_py_tmp76_i; //@line 984 "_json.c"
        var $378=$377; //@line 984 "_json.c"
        var $379=HEAP[$378]; //@line 984 "_json.c"
        var $380=($379) - 1; //@line 984 "_json.c"
        var $381=$_py_tmp76_i; //@line 984 "_json.c"
        var $382=$381; //@line 984 "_json.c"
        HEAP[$382]=$380; //@line 984 "_json.c"
        var $383=$_py_tmp76_i; //@line 984 "_json.c"
        var $384=$383; //@line 984 "_json.c"
        var $385=HEAP[$384]; //@line 984 "_json.c"
        var $386=($385)==0; //@line 984 "_json.c"
        if ($386) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 984 "_json.c"
      case 80: // $bb77_i
        var $387=$_py_tmp76_i; //@line 984 "_json.c"
        var $388=$387+4; //@line 984 "_json.c"
        var $389=HEAP[$388]; //@line 984 "_json.c"
        var $390=$389+24; //@line 984 "_json.c"
        var $391=HEAP[$390]; //@line 984 "_json.c"
        var $392=$_py_tmp76_i; //@line 984 "_json.c"
        FUNCTION_TABLE[$391]($392); //@line 984 "_json.c"
        __label__ = 81; break; //@line 984 "_json.c"
      case 81: // $bb78_i
        var $393=$s_addr_i49; //@line 987 "_json.c"
        var $394=$393+16; //@line 987 "_json.c"
        var $395=HEAP[$394]; //@line 987 "_json.c"
        var $396=($395)!=(__Py_NoneStruct); //@line 987 "_json.c"
        if ($396) { __label__ = 82; break; } else { __label__ = 86; break; } //@line 987 "_json.c"
      case 82: // $bb79_i
        var $397=$s_addr_i49; //@line 988 "_json.c"
        var $398=$397+16; //@line 988 "_json.c"
        var $399=HEAP[$398]; //@line 988 "_json.c"
        var $400=$rval_i56; //@line 988 "_json.c"
        var $401=_PyObject_CallFunctionObjArgs($399, $400, 0); //@line 988 "_json.c"
        $val_i57=$401; //@line 988 "_json.c"
        var $402=$val_i57; //@line 989 "_json.c"
        var $403=($402)==0; //@line 989 "_json.c"
        if ($403) { __label__ = 87; break; } else { __label__ = 83; break; } //@line 989 "_json.c"
      case 83: // $bb80_i
        var $404=$rval_i56; //@line 991 "_json.c"
        var $405=$404; //@line 991 "_json.c"
        var $406=HEAP[$405]; //@line 991 "_json.c"
        var $407=($406) - 1; //@line 991 "_json.c"
        var $408=$rval_i56; //@line 991 "_json.c"
        var $409=$408; //@line 991 "_json.c"
        HEAP[$409]=$407; //@line 991 "_json.c"
        var $410=$rval_i56; //@line 991 "_json.c"
        var $411=$410; //@line 991 "_json.c"
        var $412=HEAP[$411]; //@line 991 "_json.c"
        var $413=($412)==0; //@line 991 "_json.c"
        if ($413) { __label__ = 84; break; } else { __label__ = 85; break; } //@line 991 "_json.c"
      case 84: // $bb81_i
        var $414=$rval_i56; //@line 991 "_json.c"
        var $415=$414+4; //@line 991 "_json.c"
        var $416=HEAP[$415]; //@line 991 "_json.c"
        var $417=$416+24; //@line 991 "_json.c"
        var $418=HEAP[$417]; //@line 991 "_json.c"
        var $419=$rval_i56; //@line 991 "_json.c"
        FUNCTION_TABLE[$418]($419); //@line 991 "_json.c"
        __label__ = 85; break; //@line 991 "_json.c"
      case 85: // $bb82_i
        var $420=$val_i57; //@line 992 "_json.c"
        $rval_i56=$420; //@line 992 "_json.c"
        $val_i57=0; //@line 993 "_json.c"
        __label__ = 86; break; //@line 993 "_json.c"
      case 86: // $bb83_i
        var $421=$idx_addr_i51; //@line 995 "_json.c"
        var $422=($421) + 1; //@line 995 "_json.c"
        var $423=$next_idx_ptr_addr_i52; //@line 995 "_json.c"
        HEAP[$423]=$422; //@line 995 "_json.c"
        var $424=$rval_i56; //@line 996 "_json.c"
        $0=$424; //@line 996 "_json.c"
        __label__ = 97; break; //@line 996 "_json.c"
      case 87: // $bail_i109
        var $_pr=$key_i;
        var $425=($_pr)!=0; //@line 998 "_json.c"
        if ($425) { __label__ = 88; break; } else { __label__ = 90; break; } //@line 998 "_json.c"
      case 88: // $bb84_i
        var $426=$key_i; //@line 998 "_json.c"
        var $427=$426; //@line 998 "_json.c"
        var $428=HEAP[$427]; //@line 998 "_json.c"
        var $429=($428) - 1; //@line 998 "_json.c"
        var $430=$key_i; //@line 998 "_json.c"
        var $431=$430; //@line 998 "_json.c"
        HEAP[$431]=$429; //@line 998 "_json.c"
        var $432=$key_i; //@line 998 "_json.c"
        var $433=$432; //@line 998 "_json.c"
        var $434=HEAP[$433]; //@line 998 "_json.c"
        var $435=($434)==0; //@line 998 "_json.c"
        if ($435) { __label__ = 89; break; } else { __label__ = 90; break; } //@line 998 "_json.c"
      case 89: // $bb85_i
        var $436=$key_i; //@line 998 "_json.c"
        var $437=$436+4; //@line 998 "_json.c"
        var $438=HEAP[$437]; //@line 998 "_json.c"
        var $439=$438+24; //@line 998 "_json.c"
        var $440=HEAP[$439]; //@line 998 "_json.c"
        var $441=$key_i; //@line 998 "_json.c"
        FUNCTION_TABLE[$440]($441); //@line 998 "_json.c"
        __label__ = 90; break; //@line 998 "_json.c"
      case 90: // $bb86_i
        var $442=$val_i57; //@line 999 "_json.c"
        var $443=($442)!=0; //@line 999 "_json.c"
        if ($443) { __label__ = 91; break; } else { __label__ = 93; break; } //@line 999 "_json.c"
      case 91: // $bb87_i
        var $444=$val_i57; //@line 999 "_json.c"
        var $445=$444; //@line 999 "_json.c"
        var $446=HEAP[$445]; //@line 999 "_json.c"
        var $447=($446) - 1; //@line 999 "_json.c"
        var $448=$val_i57; //@line 999 "_json.c"
        var $449=$448; //@line 999 "_json.c"
        HEAP[$449]=$447; //@line 999 "_json.c"
        var $450=$val_i57; //@line 999 "_json.c"
        var $451=$450; //@line 999 "_json.c"
        var $452=HEAP[$451]; //@line 999 "_json.c"
        var $453=($452)==0; //@line 999 "_json.c"
        if ($453) { __label__ = 92; break; } else { __label__ = 93; break; } //@line 999 "_json.c"
      case 92: // $bb88_i
        var $454=$val_i57; //@line 999 "_json.c"
        var $455=$454+4; //@line 999 "_json.c"
        var $456=HEAP[$455]; //@line 999 "_json.c"
        var $457=$456+24; //@line 999 "_json.c"
        var $458=HEAP[$457]; //@line 999 "_json.c"
        var $459=$val_i57; //@line 999 "_json.c"
        FUNCTION_TABLE[$458]($459); //@line 999 "_json.c"
        __label__ = 93; break; //@line 999 "_json.c"
      case 93: // $bb89_i
        var $460=$pairs_i; //@line 1000 "_json.c"
        var $461=($460)!=0; //@line 1000 "_json.c"
        if ($461) { __label__ = 94; break; } else { __label__ = 96; break; } //@line 1000 "_json.c"
      case 94: // $bb90_i
        var $462=$pairs_i; //@line 1000 "_json.c"
        var $463=$462; //@line 1000 "_json.c"
        var $464=HEAP[$463]; //@line 1000 "_json.c"
        var $465=($464) - 1; //@line 1000 "_json.c"
        var $466=$pairs_i; //@line 1000 "_json.c"
        var $467=$466; //@line 1000 "_json.c"
        HEAP[$467]=$465; //@line 1000 "_json.c"
        var $468=$pairs_i; //@line 1000 "_json.c"
        var $469=$468; //@line 1000 "_json.c"
        var $470=HEAP[$469]; //@line 1000 "_json.c"
        var $471=($470)==0; //@line 1000 "_json.c"
        if ($471) { __label__ = 95; break; } else { __label__ = 96; break; } //@line 1000 "_json.c"
      case 95: // $bb91_i
        var $472=$pairs_i; //@line 1000 "_json.c"
        var $473=$472+4; //@line 1000 "_json.c"
        var $474=HEAP[$473]; //@line 1000 "_json.c"
        var $475=$474+24; //@line 1000 "_json.c"
        var $476=HEAP[$475]; //@line 1000 "_json.c"
        var $477=$pairs_i; //@line 1000 "_json.c"
        FUNCTION_TABLE[$476]($477); //@line 1000 "_json.c"
        __label__ = 96; break; //@line 1000 "_json.c"
      case 96: // $bb92_i
        $0=0; //@line 1001 "_json.c"
        __label__ = 97; break; //@line 1001 "_json.c"
      case 97: // $_parse_object_str_exit
        var $478=$0; //@line 902 "_json.c"
        $retval_i53=$478; //@line 902 "_json.c"
        var $retval94_i=$retval_i53; //@line 902 "_json.c"
        $res=$retval94_i; //@line 1510 "_json.c"
        var $479=HEAP[__PyThreadState_Current]; //@line 1511 "_json.c"
        var $480=$479+12; //@line 1511 "_json.c"
        var $481=HEAP[$480]; //@line 1511 "_json.c"
        var $482=($481) - 1; //@line 1511 "_json.c"
        var $483=$479+12; //@line 1511 "_json.c"
        HEAP[$483]=$482; //@line 1511 "_json.c"
        var $484=$res; //@line 1512 "_json.c"
        $3=$484; //@line 1512 "_json.c"
        __label__ = 238; break; //@line 1512 "_json.c"
      case 98: // $bb7
        var $485=HEAP[__PyThreadState_Current]; //@line 1515 "_json.c"
        var $486=$485+12; //@line 1515 "_json.c"
        var $487=HEAP[$486]; //@line 1515 "_json.c"
        var $488=($487) + 1; //@line 1515 "_json.c"
        var $489=$485+12; //@line 1515 "_json.c"
        HEAP[$489]=$488; //@line 1515 "_json.c"
        var $490=$485+12; //@line 1515 "_json.c"
        var $491=HEAP[$490]; //@line 1515 "_json.c"
        var $492=HEAP[__Py_CheckRecursionLimit]; //@line 1515 "_json.c"
        var $493=($491) > ($492); //@line 1515 "_json.c"
        if ($493) { __label__ = 99; break; } else { __label__ = 101; break; } //@line 1515 "_json.c"
      case 99: // $bb8
        var $494=__Py_CheckRecursiveCall(__str35); //@line 1515 "_json.c"
        var $495=($494)!=0; //@line 1515 "_json.c"
        if ($495) { __label__ = 100; break; } else { __label__ = 101; break; } //@line 1515 "_json.c"
      case 100: // $bb9
        $3=0; //@line 1517 "_json.c"
        __label__ = 238; break; //@line 1517 "_json.c"
      case 101: // $bb10
        var $496=$idx_addr; //@line 1518 "_json.c"
        var $497=($496) + 1; //@line 1518 "_json.c"
        var $498=$s_addr; //@line 1518 "_json.c"
        var $499=$pystr_addr; //@line 1518 "_json.c"
        var $500=$next_idx_ptr_addr; //@line 1518 "_json.c"
        $s_addr_i1=$498;
        $pystr_addr_i2=$499;
        $idx_addr_i=$497;
        $next_idx_ptr_addr_i3=$500;
        var $501=$pystr_addr_i2; //@line 1137 "_json.c"
        var $502=$501; //@line 1137 "_json.c"
        var $503=$502+20; //@line 1137 "_json.c"
        var $504=$503; //@line 1137 "_json.c"
        $str_i5=$504; //@line 1137 "_json.c"
        var $505=$pystr_addr_i2; //@line 1138 "_json.c"
        var $506=$505; //@line 1138 "_json.c"
        var $507=$506+8; //@line 1138 "_json.c"
        var $508=HEAP[$507]; //@line 1138 "_json.c"
        var $509=($508) - 1; //@line 1138 "_json.c"
        $end_idx_i6=$509; //@line 1138 "_json.c"
        $val_i=0; //@line 1139 "_json.c"
        var $510=_PyList_New(0); //@line 1140 "_json.c"
        $rval_i7=$510; //@line 1140 "_json.c"
        var $511=($510)==0; //@line 1142 "_json.c"
        if ($511) { __label__ = 102; break; } else { __label__ = 104; break; } //@line 1142 "_json.c"
      case 102: // $bb_i8
        $1=0; //@line 1143 "_json.c"
        __label__ = 145; break; //@line 1143 "_json.c"
      case 103: // $bb2_i9
        var $512=$idx_addr_i; //@line 1146 "_json.c"
        var $513=($512) + 1; //@line 1146 "_json.c"
        $idx_addr_i=$513; //@line 1146 "_json.c"
        __label__ = 104; break; //@line 1146 "_json.c"
      case 104: // $bb3_i10
        var $514=$idx_addr_i; //@line 1146 "_json.c"
        var $515=$end_idx_i6; //@line 1146 "_json.c"
        var $516=($514) > ($515); //@line 1146 "_json.c"
        if ($516) { __label__ = 109; break; } else { __label__ = 105; break; } //@line 1146 "_json.c"
      case 105: // $bb4_i11
        var $517=$str_i5; //@line 1146 "_json.c"
        var $518=$idx_addr_i; //@line 1146 "_json.c"
        var $519=$517+$518; //@line 1146 "_json.c"
        var $520=HEAP[$519]; //@line 1146 "_json.c"
        var $521=($520)==32; //@line 1146 "_json.c"
        if ($521) { __label__ = 103; break; } else { __label__ = 106; break; } //@line 1146 "_json.c"
      case 106: // $bb5_i12
        var $522=$str_i5; //@line 1146 "_json.c"
        var $523=$idx_addr_i; //@line 1146 "_json.c"
        var $524=$522+$523; //@line 1146 "_json.c"
        var $525=HEAP[$524]; //@line 1146 "_json.c"
        var $526=($525)==9; //@line 1146 "_json.c"
        if ($526) { __label__ = 103; break; } else { __label__ = 107; break; } //@line 1146 "_json.c"
      case 107: // $bb6_i13
        var $527=$str_i5; //@line 1146 "_json.c"
        var $528=$idx_addr_i; //@line 1146 "_json.c"
        var $529=$527+$528; //@line 1146 "_json.c"
        var $530=HEAP[$529]; //@line 1146 "_json.c"
        var $531=($530)==10; //@line 1146 "_json.c"
        if ($531) { __label__ = 103; break; } else { __label__ = 108; break; } //@line 1146 "_json.c"
      case 108: // $bb7_i14
        var $532=$str_i5; //@line 1146 "_json.c"
        var $533=$idx_addr_i; //@line 1146 "_json.c"
        var $534=$532+$533; //@line 1146 "_json.c"
        var $535=HEAP[$534]; //@line 1146 "_json.c"
        var $536=($535)==13; //@line 1146 "_json.c"
        if ($536) { __label__ = 103; break; } else { __label__ = 109; break; } //@line 1146 "_json.c"
      case 109: // $bb8_i15
        var $537=$idx_addr_i; //@line 1149 "_json.c"
        var $538=$end_idx_i6; //@line 1149 "_json.c"
        var $539=($537) <= ($538); //@line 1149 "_json.c"
        if ($539) { __label__ = 110; break; } else { __label__ = 135; break; } //@line 1149 "_json.c"
      case 110: // $bb9_i
        var $540=$str_i5; //@line 1149 "_json.c"
        var $541=$idx_addr_i; //@line 1149 "_json.c"
        var $542=$540+$541; //@line 1149 "_json.c"
        var $543=HEAP[$542]; //@line 1149 "_json.c"
        var $544=($543)!=93; //@line 1149 "_json.c"
        if ($544) { __label__ = 134; break; } else { __label__ = 135; break; } //@line 1149 "_json.c"
      case 111: // $bb11_i16
        var $545=$s_addr_i1; //@line 1153 "_json.c"
        var $546=$pystr_addr_i2; //@line 1153 "_json.c"
        var $547=$idx_addr_i; //@line 1153 "_json.c"
        var $548=_scan_once_str($545, $546, $547, $next_idx_i); //@line 1153 "_json.c"
        $val_i=$548; //@line 1153 "_json.c"
        var $549=$val_i; //@line 1154 "_json.c"
        var $550=($549)==0; //@line 1154 "_json.c"
        if ($550) { __label__ = 142; break; } else { __label__ = 112; break; } //@line 1154 "_json.c"
      case 112: // $bb12_i17
        var $551=$rval_i7; //@line 1157 "_json.c"
        var $552=$val_i; //@line 1157 "_json.c"
        var $553=_PyList_Append($551, $552); //@line 1157 "_json.c"
        var $554=($553)==-1; //@line 1157 "_json.c"
        if ($554) { __label__ = 139; break; } else { __label__ = 113; break; } //@line 1157 "_json.c"
      case 113: // $bb13_i18
        var $555=$val_i; //@line 1160 "_json.c"
        var $556=($555)!=0; //@line 1160 "_json.c"
        if ($556) { __label__ = 114; break; } else { __label__ = 116; break; } //@line 1160 "_json.c"
      case 114: // $bb14_i19
        var $557=$val_i; //@line 1160 "_json.c"
        $_py_tmp_i=$557; //@line 1160 "_json.c"
        $val_i=0; //@line 1160 "_json.c"
        var $558=$_py_tmp_i; //@line 1160 "_json.c"
        var $559=$558; //@line 1160 "_json.c"
        var $560=HEAP[$559]; //@line 1160 "_json.c"
        var $561=($560) - 1; //@line 1160 "_json.c"
        var $562=$_py_tmp_i; //@line 1160 "_json.c"
        var $563=$562; //@line 1160 "_json.c"
        HEAP[$563]=$561; //@line 1160 "_json.c"
        var $564=$_py_tmp_i; //@line 1160 "_json.c"
        var $565=$564; //@line 1160 "_json.c"
        var $566=HEAP[$565]; //@line 1160 "_json.c"
        var $567=($566)==0; //@line 1160 "_json.c"
        if ($567) { __label__ = 115; break; } else { __label__ = 116; break; } //@line 1160 "_json.c"
      case 115: // $bb15_i20
        var $568=$_py_tmp_i; //@line 1160 "_json.c"
        var $569=$568+4; //@line 1160 "_json.c"
        var $570=HEAP[$569]; //@line 1160 "_json.c"
        var $571=$570+24; //@line 1160 "_json.c"
        var $572=HEAP[$571]; //@line 1160 "_json.c"
        var $573=$_py_tmp_i; //@line 1160 "_json.c"
        FUNCTION_TABLE[$572]($573); //@line 1160 "_json.c"
        __label__ = 116; break; //@line 1160 "_json.c"
      case 116: // $bb16_i21
        var $574=HEAP[$next_idx_i]; //@line 1161 "_json.c"
        $idx_addr_i=$574; //@line 1161 "_json.c"
        __label__ = 118; break; //@line 1161 "_json.c"
      case 117: // $bb17_i22
        var $575=$idx_addr_i; //@line 1164 "_json.c"
        var $576=($575) + 1; //@line 1164 "_json.c"
        $idx_addr_i=$576; //@line 1164 "_json.c"
        __label__ = 118; break; //@line 1164 "_json.c"
      case 118: // $bb18_i23
        var $577=$idx_addr_i; //@line 1164 "_json.c"
        var $578=$end_idx_i6; //@line 1164 "_json.c"
        var $579=($577) > ($578); //@line 1164 "_json.c"
        if ($579) { __label__ = 123; break; } else { __label__ = 119; break; } //@line 1164 "_json.c"
      case 119: // $bb19_i24
        var $580=$str_i5; //@line 1164 "_json.c"
        var $581=$idx_addr_i; //@line 1164 "_json.c"
        var $582=$580+$581; //@line 1164 "_json.c"
        var $583=HEAP[$582]; //@line 1164 "_json.c"
        var $584=($583)==32; //@line 1164 "_json.c"
        if ($584) { __label__ = 117; break; } else { __label__ = 120; break; } //@line 1164 "_json.c"
      case 120: // $bb20_i25
        var $585=$str_i5; //@line 1164 "_json.c"
        var $586=$idx_addr_i; //@line 1164 "_json.c"
        var $587=$585+$586; //@line 1164 "_json.c"
        var $588=HEAP[$587]; //@line 1164 "_json.c"
        var $589=($588)==9; //@line 1164 "_json.c"
        if ($589) { __label__ = 117; break; } else { __label__ = 121; break; } //@line 1164 "_json.c"
      case 121: // $bb21_i26
        var $590=$str_i5; //@line 1164 "_json.c"
        var $591=$idx_addr_i; //@line 1164 "_json.c"
        var $592=$590+$591; //@line 1164 "_json.c"
        var $593=HEAP[$592]; //@line 1164 "_json.c"
        var $594=($593)==10; //@line 1164 "_json.c"
        if ($594) { __label__ = 117; break; } else { __label__ = 122; break; } //@line 1164 "_json.c"
      case 122: // $bb22_i27
        var $595=$str_i5; //@line 1164 "_json.c"
        var $596=$idx_addr_i; //@line 1164 "_json.c"
        var $597=$595+$596; //@line 1164 "_json.c"
        var $598=HEAP[$597]; //@line 1164 "_json.c"
        var $599=($598)==13; //@line 1164 "_json.c"
        if ($599) { __label__ = 117; break; } else { __label__ = 123; break; } //@line 1164 "_json.c"
      case 123: // $bb23_i28
        var $600=$idx_addr_i; //@line 1167 "_json.c"
        var $601=$end_idx_i6; //@line 1167 "_json.c"
        var $602=($600) > ($601); //@line 1167 "_json.c"
        if ($602) { __label__ = 135; break; } else { __label__ = 124; break; } //@line 1167 "_json.c"
      case 124: // $bb24_i29
        var $603=$str_i5; //@line 1168 "_json.c"
        var $604=$idx_addr_i; //@line 1168 "_json.c"
        var $605=$603+$604; //@line 1168 "_json.c"
        var $606=HEAP[$605]; //@line 1168 "_json.c"
        var $607=($606)==93; //@line 1168 "_json.c"
        if ($607) { __label__ = 135; break; } else { __label__ = 125; break; } //@line 1168 "_json.c"
      case 125: // $bb25_i30
        var $608=$str_i5; //@line 1171 "_json.c"
        var $609=$idx_addr_i; //@line 1171 "_json.c"
        var $610=$608+$609; //@line 1171 "_json.c"
        var $611=HEAP[$610]; //@line 1171 "_json.c"
        var $612=($611)!=44; //@line 1171 "_json.c"
        if ($612) { __label__ = 126; break; } else { __label__ = 127; break; } //@line 1171 "_json.c"
      case 126: // $bb26_i31
        var $613=$pystr_addr_i2; //@line 1172 "_json.c"
        var $614=$idx_addr_i; //@line 1172 "_json.c"
        _raise_errmsg(__str32, $613, $614); //@line 1172 "_json.c"
        __label__ = 139; break; //@line 1172 "_json.c"
      case 127: // $bb27_i32
        var $615=$idx_addr_i; //@line 1175 "_json.c"
        var $616=($615) + 1; //@line 1175 "_json.c"
        $idx_addr_i=$616; //@line 1175 "_json.c"
        __label__ = 129; break; //@line 1175 "_json.c"
      case 128: // $bb28_i33
        var $617=$idx_addr_i; //@line 1178 "_json.c"
        var $618=($617) + 1; //@line 1178 "_json.c"
        $idx_addr_i=$618; //@line 1178 "_json.c"
        __label__ = 129; break; //@line 1178 "_json.c"
      case 129: // $bb29_i
        var $619=$idx_addr_i; //@line 1178 "_json.c"
        var $620=$end_idx_i6; //@line 1178 "_json.c"
        var $621=($619) > ($620); //@line 1178 "_json.c"
        if ($621) { __label__ = 134; break; } else { __label__ = 130; break; } //@line 1178 "_json.c"
      case 130: // $bb30_i34
        var $622=$str_i5; //@line 1178 "_json.c"
        var $623=$idx_addr_i; //@line 1178 "_json.c"
        var $624=$622+$623; //@line 1178 "_json.c"
        var $625=HEAP[$624]; //@line 1178 "_json.c"
        var $626=($625)==32; //@line 1178 "_json.c"
        if ($626) { __label__ = 128; break; } else { __label__ = 131; break; } //@line 1178 "_json.c"
      case 131: // $bb31_i35
        var $627=$str_i5; //@line 1178 "_json.c"
        var $628=$idx_addr_i; //@line 1178 "_json.c"
        var $629=$627+$628; //@line 1178 "_json.c"
        var $630=HEAP[$629]; //@line 1178 "_json.c"
        var $631=($630)==9; //@line 1178 "_json.c"
        if ($631) { __label__ = 128; break; } else { __label__ = 132; break; } //@line 1178 "_json.c"
      case 132: // $bb32_i36
        var $632=$str_i5; //@line 1178 "_json.c"
        var $633=$idx_addr_i; //@line 1178 "_json.c"
        var $634=$632+$633; //@line 1178 "_json.c"
        var $635=HEAP[$634]; //@line 1178 "_json.c"
        var $636=($635)==10; //@line 1178 "_json.c"
        if ($636) { __label__ = 128; break; } else { __label__ = 133; break; } //@line 1178 "_json.c"
      case 133: // $bb33_i37
        var $637=$str_i5; //@line 1178 "_json.c"
        var $638=$idx_addr_i; //@line 1178 "_json.c"
        var $639=$637+$638; //@line 1178 "_json.c"
        var $640=HEAP[$639]; //@line 1178 "_json.c"
        var $641=($640)==13; //@line 1178 "_json.c"
        if ($641) { __label__ = 128; break; } else { __label__ = 134; break; } //@line 1178 "_json.c"
      case 134: // $bb34_i38
        var $642=$idx_addr_i; //@line 1150 "_json.c"
        var $643=$end_idx_i6; //@line 1150 "_json.c"
        var $644=($642) <= ($643); //@line 1150 "_json.c"
        if ($644) { __label__ = 111; break; } else { __label__ = 135; break; } //@line 1150 "_json.c"
      case 135: // $bb35_i39
        var $645=$idx_addr_i; //@line 1183 "_json.c"
        var $646=$end_idx_i6; //@line 1183 "_json.c"
        var $647=($645) > ($646); //@line 1183 "_json.c"
        if ($647) { __label__ = 137; break; } else { __label__ = 136; break; } //@line 1183 "_json.c"
      case 136: // $bb36_i40
        var $648=$str_i5; //@line 1183 "_json.c"
        var $649=$idx_addr_i; //@line 1183 "_json.c"
        var $650=$648+$649; //@line 1183 "_json.c"
        var $651=HEAP[$650]; //@line 1183 "_json.c"
        var $652=($651)!=93; //@line 1183 "_json.c"
        if ($652) { __label__ = 137; break; } else { __label__ = 138; break; } //@line 1183 "_json.c"
      case 137: // $bb37_i41
        var $653=$pystr_addr_i2; //@line 1184 "_json.c"
        var $654=$end_idx_i6; //@line 1184 "_json.c"
        _raise_errmsg(__str33, $653, $654); //@line 1184 "_json.c"
        __label__ = 139; break; //@line 1184 "_json.c"
      case 138: // $bb38_i42
        var $655=$idx_addr_i; //@line 1187 "_json.c"
        var $656=($655) + 1; //@line 1187 "_json.c"
        var $657=$next_idx_ptr_addr_i3; //@line 1187 "_json.c"
        HEAP[$657]=$656; //@line 1187 "_json.c"
        var $658=$rval_i7; //@line 1188 "_json.c"
        $1=$658; //@line 1188 "_json.c"
        __label__ = 145; break; //@line 1188 "_json.c"
      case 139: // $bail_i
        var $_pr110=$val_i;
        var $659=($_pr110)!=0; //@line 1190 "_json.c"
        if ($659) { __label__ = 140; break; } else { __label__ = 142; break; } //@line 1190 "_json.c"
      case 140: // $bb39_i43
        var $660=$val_i; //@line 1190 "_json.c"
        var $661=$660; //@line 1190 "_json.c"
        var $662=HEAP[$661]; //@line 1190 "_json.c"
        var $663=($662) - 1; //@line 1190 "_json.c"
        var $664=$val_i; //@line 1190 "_json.c"
        var $665=$664; //@line 1190 "_json.c"
        HEAP[$665]=$663; //@line 1190 "_json.c"
        var $666=$val_i; //@line 1190 "_json.c"
        var $667=$666; //@line 1190 "_json.c"
        var $668=HEAP[$667]; //@line 1190 "_json.c"
        var $669=($668)==0; //@line 1190 "_json.c"
        if ($669) { __label__ = 141; break; } else { __label__ = 142; break; } //@line 1190 "_json.c"
      case 141: // $bb40_i44
        var $670=$val_i; //@line 1190 "_json.c"
        var $671=$670+4; //@line 1190 "_json.c"
        var $672=HEAP[$671]; //@line 1190 "_json.c"
        var $673=$672+24; //@line 1190 "_json.c"
        var $674=HEAP[$673]; //@line 1190 "_json.c"
        var $675=$val_i; //@line 1190 "_json.c"
        FUNCTION_TABLE[$674]($675); //@line 1190 "_json.c"
        __label__ = 142; break; //@line 1190 "_json.c"
      case 142: // $bb41_i45
        var $676=$rval_i7; //@line 1191 "_json.c"
        var $677=$676; //@line 1191 "_json.c"
        var $678=HEAP[$677]; //@line 1191 "_json.c"
        var $679=($678) - 1; //@line 1191 "_json.c"
        var $680=$rval_i7; //@line 1191 "_json.c"
        var $681=$680; //@line 1191 "_json.c"
        HEAP[$681]=$679; //@line 1191 "_json.c"
        var $682=$rval_i7; //@line 1191 "_json.c"
        var $683=$682; //@line 1191 "_json.c"
        var $684=HEAP[$683]; //@line 1191 "_json.c"
        var $685=($684)==0; //@line 1191 "_json.c"
        if ($685) { __label__ = 143; break; } else { __label__ = 144; break; } //@line 1191 "_json.c"
      case 143: // $bb42_i46
        var $686=$rval_i7; //@line 1191 "_json.c"
        var $687=$686+4; //@line 1191 "_json.c"
        var $688=HEAP[$687]; //@line 1191 "_json.c"
        var $689=$688+24; //@line 1191 "_json.c"
        var $690=HEAP[$689]; //@line 1191 "_json.c"
        var $691=$rval_i7; //@line 1191 "_json.c"
        FUNCTION_TABLE[$690]($691); //@line 1191 "_json.c"
        __label__ = 144; break; //@line 1191 "_json.c"
      case 144: // $bb43_i47
        $1=0; //@line 1192 "_json.c"
        __label__ = 145; break; //@line 1192 "_json.c"
      case 145: // $_parse_array_str_exit
        var $692=$1; //@line 1143 "_json.c"
        $retval_i4=$692; //@line 1143 "_json.c"
        var $retval45_i=$retval_i4; //@line 1143 "_json.c"
        $res=$retval45_i; //@line 1518 "_json.c"
        var $693=HEAP[__PyThreadState_Current]; //@line 1519 "_json.c"
        var $694=$693+12; //@line 1519 "_json.c"
        var $695=HEAP[$694]; //@line 1519 "_json.c"
        var $696=($695) - 1; //@line 1519 "_json.c"
        var $697=$693+12; //@line 1519 "_json.c"
        HEAP[$697]=$696; //@line 1519 "_json.c"
        var $698=$res; //@line 1520 "_json.c"
        $3=$698; //@line 1520 "_json.c"
        __label__ = 238; break; //@line 1520 "_json.c"
      case 146: // $bb11
        var $699=$idx_addr; //@line 1523 "_json.c"
        var $700=($699) + 3; //@line 1523 "_json.c"
        var $701=$length; //@line 1523 "_json.c"
        var $702=($700) < ($701); //@line 1523 "_json.c"
        if ($702) { __label__ = 147; break; } else { __label__ = 185; break; } //@line 1523 "_json.c"
      case 147: // $bb12
        var $703=$idx_addr; //@line 1523 "_json.c"
        var $704=($703) + 1; //@line 1523 "_json.c"
        var $705=$str; //@line 1523 "_json.c"
        var $706=$705+$704; //@line 1523 "_json.c"
        var $707=HEAP[$706]; //@line 1523 "_json.c"
        var $708=($707)==117; //@line 1523 "_json.c"
        if ($708) { __label__ = 148; break; } else { __label__ = 185; break; } //@line 1523 "_json.c"
      case 148: // $bb13
        var $709=$idx_addr; //@line 1523 "_json.c"
        var $710=($709) + 2; //@line 1523 "_json.c"
        var $711=$str; //@line 1523 "_json.c"
        var $712=$711+$710; //@line 1523 "_json.c"
        var $713=HEAP[$712]; //@line 1523 "_json.c"
        var $714=($713)==108; //@line 1523 "_json.c"
        if ($714) { __label__ = 149; break; } else { __label__ = 185; break; } //@line 1523 "_json.c"
      case 149: // $bb14
        var $715=$idx_addr; //@line 1523 "_json.c"
        var $716=($715) + 3; //@line 1523 "_json.c"
        var $717=$str; //@line 1523 "_json.c"
        var $718=$717+$716; //@line 1523 "_json.c"
        var $719=HEAP[$718]; //@line 1523 "_json.c"
        var $720=($719)==108; //@line 1523 "_json.c"
        if ($720) { __label__ = 150; break; } else { __label__ = 185; break; } //@line 1523 "_json.c"
      case 150: // $bb15
        var $721=HEAP[__Py_NoneStruct]; //@line 1524 "_json.c"
        var $722=($721) + 1; //@line 1524 "_json.c"
        HEAP[__Py_NoneStruct]=$722; //@line 1524 "_json.c"
        var $723=$idx_addr; //@line 1525 "_json.c"
        var $724=($723) + 4; //@line 1525 "_json.c"
        var $725=$next_idx_ptr_addr; //@line 1525 "_json.c"
        HEAP[$725]=$724; //@line 1525 "_json.c"
        $3=__Py_NoneStruct; //@line 1526 "_json.c"
        __label__ = 238; break; //@line 1526 "_json.c"
      case 151: // $bb17
        var $726=$idx_addr; //@line 1531 "_json.c"
        var $727=($726) + 3; //@line 1531 "_json.c"
        var $728=$length; //@line 1531 "_json.c"
        var $729=($727) < ($728); //@line 1531 "_json.c"
        if ($729) { __label__ = 152; break; } else { __label__ = 185; break; } //@line 1531 "_json.c"
      case 152: // $bb18
        var $730=$idx_addr; //@line 1531 "_json.c"
        var $731=($730) + 1; //@line 1531 "_json.c"
        var $732=$str; //@line 1531 "_json.c"
        var $733=$732+$731; //@line 1531 "_json.c"
        var $734=HEAP[$733]; //@line 1531 "_json.c"
        var $735=($734)==114; //@line 1531 "_json.c"
        if ($735) { __label__ = 153; break; } else { __label__ = 185; break; } //@line 1531 "_json.c"
      case 153: // $bb19
        var $736=$idx_addr; //@line 1531 "_json.c"
        var $737=($736) + 2; //@line 1531 "_json.c"
        var $738=$str; //@line 1531 "_json.c"
        var $739=$738+$737; //@line 1531 "_json.c"
        var $740=HEAP[$739]; //@line 1531 "_json.c"
        var $741=($740)==117; //@line 1531 "_json.c"
        if ($741) { __label__ = 154; break; } else { __label__ = 185; break; } //@line 1531 "_json.c"
      case 154: // $bb20
        var $742=$idx_addr; //@line 1531 "_json.c"
        var $743=($742) + 3; //@line 1531 "_json.c"
        var $744=$str; //@line 1531 "_json.c"
        var $745=$744+$743; //@line 1531 "_json.c"
        var $746=HEAP[$745]; //@line 1531 "_json.c"
        var $747=($746)==101; //@line 1531 "_json.c"
        if ($747) { __label__ = 155; break; } else { __label__ = 185; break; } //@line 1531 "_json.c"
      case 155: // $bb21
        var $748=HEAP[__Py_TrueStruct]; //@line 1532 "_json.c"
        var $749=($748) + 1; //@line 1532 "_json.c"
        HEAP[__Py_TrueStruct]=$749; //@line 1532 "_json.c"
        var $750=$idx_addr; //@line 1533 "_json.c"
        var $751=($750) + 4; //@line 1533 "_json.c"
        var $752=$next_idx_ptr_addr; //@line 1533 "_json.c"
        HEAP[$752]=$751; //@line 1533 "_json.c"
        $3=__Py_TrueStruct; //@line 1534 "_json.c"
        __label__ = 238; break; //@line 1534 "_json.c"
      case 156: // $bb23
        var $753=$idx_addr; //@line 1539 "_json.c"
        var $754=($753) + 4; //@line 1539 "_json.c"
        var $755=$length; //@line 1539 "_json.c"
        var $756=($754) < ($755); //@line 1539 "_json.c"
        if ($756) { __label__ = 157; break; } else { __label__ = 185; break; } //@line 1539 "_json.c"
      case 157: // $bb24
        var $757=$idx_addr; //@line 1539 "_json.c"
        var $758=($757) + 1; //@line 1539 "_json.c"
        var $759=$str; //@line 1539 "_json.c"
        var $760=$759+$758; //@line 1539 "_json.c"
        var $761=HEAP[$760]; //@line 1539 "_json.c"
        var $762=($761)==97; //@line 1539 "_json.c"
        if ($762) { __label__ = 158; break; } else { __label__ = 185; break; } //@line 1539 "_json.c"
      case 158: // $bb25
        var $763=$idx_addr; //@line 1539 "_json.c"
        var $764=($763) + 2; //@line 1539 "_json.c"
        var $765=$str; //@line 1539 "_json.c"
        var $766=$765+$764; //@line 1539 "_json.c"
        var $767=HEAP[$766]; //@line 1539 "_json.c"
        var $768=($767)==108; //@line 1539 "_json.c"
        if ($768) { __label__ = 159; break; } else { __label__ = 185; break; } //@line 1539 "_json.c"
      case 159: // $bb26
        var $769=$idx_addr; //@line 1539 "_json.c"
        var $770=($769) + 3; //@line 1539 "_json.c"
        var $771=$str; //@line 1539 "_json.c"
        var $772=$771+$770; //@line 1539 "_json.c"
        var $773=HEAP[$772]; //@line 1539 "_json.c"
        var $774=($773)==115; //@line 1539 "_json.c"
        if ($774) { __label__ = 160; break; } else { __label__ = 185; break; } //@line 1539 "_json.c"
      case 160: // $bb27
        var $775=$idx_addr; //@line 1539 "_json.c"
        var $776=($775) + 4; //@line 1539 "_json.c"
        var $777=$str; //@line 1539 "_json.c"
        var $778=$777+$776; //@line 1539 "_json.c"
        var $779=HEAP[$778]; //@line 1539 "_json.c"
        var $780=($779)==101; //@line 1539 "_json.c"
        if ($780) { __label__ = 161; break; } else { __label__ = 185; break; } //@line 1539 "_json.c"
      case 161: // $bb28
        var $781=HEAP[__Py_ZeroStruct]; //@line 1540 "_json.c"
        var $782=($781) + 1; //@line 1540 "_json.c"
        HEAP[__Py_ZeroStruct]=$782; //@line 1540 "_json.c"
        var $783=$idx_addr; //@line 1541 "_json.c"
        var $784=($783) + 5; //@line 1541 "_json.c"
        var $785=$next_idx_ptr_addr; //@line 1541 "_json.c"
        HEAP[$785]=$784; //@line 1541 "_json.c"
        $3=__Py_ZeroStruct; //@line 1542 "_json.c"
        __label__ = 238; break; //@line 1542 "_json.c"
      case 162: // $bb30
        var $786=$idx_addr; //@line 1547 "_json.c"
        var $787=($786) + 2; //@line 1547 "_json.c"
        var $788=$length; //@line 1547 "_json.c"
        var $789=($787) < ($788); //@line 1547 "_json.c"
        if ($789) { __label__ = 163; break; } else { __label__ = 185; break; } //@line 1547 "_json.c"
      case 163: // $bb31
        var $790=$idx_addr; //@line 1547 "_json.c"
        var $791=($790) + 1; //@line 1547 "_json.c"
        var $792=$str; //@line 1547 "_json.c"
        var $793=$792+$791; //@line 1547 "_json.c"
        var $794=HEAP[$793]; //@line 1547 "_json.c"
        var $795=($794)==97; //@line 1547 "_json.c"
        if ($795) { __label__ = 164; break; } else { __label__ = 185; break; } //@line 1547 "_json.c"
      case 164: // $bb32
        var $796=$idx_addr; //@line 1547 "_json.c"
        var $797=($796) + 2; //@line 1547 "_json.c"
        var $798=$str; //@line 1547 "_json.c"
        var $799=$798+$797; //@line 1547 "_json.c"
        var $800=HEAP[$799]; //@line 1547 "_json.c"
        var $801=($800)==78; //@line 1547 "_json.c"
        if ($801) { __label__ = 165; break; } else { __label__ = 185; break; } //@line 1547 "_json.c"
      case 165: // $bb33
        var $802=$s_addr; //@line 1548 "_json.c"
        var $803=$idx_addr; //@line 1548 "_json.c"
        var $804=$next_idx_ptr_addr; //@line 1548 "_json.c"
        var $805=__parse_constant($802, __str36, $803, $804); //@line 1548 "_json.c"
        $3=$805; //@line 1548 "_json.c"
        __label__ = 238; break; //@line 1548 "_json.c"
      case 166: // $bb35
        var $806=$idx_addr; //@line 1553 "_json.c"
        var $807=($806) + 7; //@line 1553 "_json.c"
        var $808=$length; //@line 1553 "_json.c"
        var $809=($807) < ($808); //@line 1553 "_json.c"
        if ($809) { __label__ = 167; break; } else { __label__ = 185; break; } //@line 1553 "_json.c"
      case 167: // $bb36
        var $810=$idx_addr; //@line 1553 "_json.c"
        var $811=($810) + 1; //@line 1553 "_json.c"
        var $812=$str; //@line 1553 "_json.c"
        var $813=$812+$811; //@line 1553 "_json.c"
        var $814=HEAP[$813]; //@line 1553 "_json.c"
        var $815=($814)==110; //@line 1553 "_json.c"
        if ($815) { __label__ = 168; break; } else { __label__ = 185; break; } //@line 1553 "_json.c"
      case 168: // $bb37
        var $816=$idx_addr; //@line 1553 "_json.c"
        var $817=($816) + 2; //@line 1553 "_json.c"
        var $818=$str; //@line 1553 "_json.c"
        var $819=$818+$817; //@line 1553 "_json.c"
        var $820=HEAP[$819]; //@line 1553 "_json.c"
        var $821=($820)==102; //@line 1553 "_json.c"
        if ($821) { __label__ = 169; break; } else { __label__ = 185; break; } //@line 1553 "_json.c"
      case 169: // $bb38
        var $822=$idx_addr; //@line 1553 "_json.c"
        var $823=($822) + 3; //@line 1553 "_json.c"
        var $824=$str; //@line 1553 "_json.c"
        var $825=$824+$823; //@line 1553 "_json.c"
        var $826=HEAP[$825]; //@line 1553 "_json.c"
        var $827=($826)==105; //@line 1553 "_json.c"
        if ($827) { __label__ = 170; break; } else { __label__ = 185; break; } //@line 1553 "_json.c"
      case 170: // $bb39
        var $828=$idx_addr; //@line 1553 "_json.c"
        var $829=($828) + 4; //@line 1553 "_json.c"
        var $830=$str; //@line 1553 "_json.c"
        var $831=$830+$829; //@line 1553 "_json.c"
        var $832=HEAP[$831]; //@line 1553 "_json.c"
        var $833=($832)==110; //@line 1553 "_json.c"
        if ($833) { __label__ = 171; break; } else { __label__ = 185; break; } //@line 1553 "_json.c"
      case 171: // $bb40
        var $834=$idx_addr; //@line 1553 "_json.c"
        var $835=($834) + 5; //@line 1553 "_json.c"
        var $836=$str; //@line 1553 "_json.c"
        var $837=$836+$835; //@line 1553 "_json.c"
        var $838=HEAP[$837]; //@line 1553 "_json.c"
        var $839=($838)==105; //@line 1553 "_json.c"
        if ($839) { __label__ = 172; break; } else { __label__ = 185; break; } //@line 1553 "_json.c"
      case 172: // $bb41
        var $840=$idx_addr; //@line 1553 "_json.c"
        var $841=($840) + 6; //@line 1553 "_json.c"
        var $842=$str; //@line 1553 "_json.c"
        var $843=$842+$841; //@line 1553 "_json.c"
        var $844=HEAP[$843]; //@line 1553 "_json.c"
        var $845=($844)==116; //@line 1553 "_json.c"
        if ($845) { __label__ = 173; break; } else { __label__ = 185; break; } //@line 1553 "_json.c"
      case 173: // $bb42
        var $846=$idx_addr; //@line 1553 "_json.c"
        var $847=($846) + 7; //@line 1553 "_json.c"
        var $848=$str; //@line 1553 "_json.c"
        var $849=$848+$847; //@line 1553 "_json.c"
        var $850=HEAP[$849]; //@line 1553 "_json.c"
        var $851=($850)==121; //@line 1553 "_json.c"
        if ($851) { __label__ = 174; break; } else { __label__ = 185; break; } //@line 1553 "_json.c"
      case 174: // $bb43
        var $852=$s_addr; //@line 1554 "_json.c"
        var $853=$idx_addr; //@line 1554 "_json.c"
        var $854=$next_idx_ptr_addr; //@line 1554 "_json.c"
        var $855=__parse_constant($852, __str37, $853, $854); //@line 1554 "_json.c"
        $3=$855; //@line 1554 "_json.c"
        __label__ = 238; break; //@line 1554 "_json.c"
      case 175: // $bb45
        var $856=$idx_addr; //@line 1559 "_json.c"
        var $857=($856) + 8; //@line 1559 "_json.c"
        var $858=$length; //@line 1559 "_json.c"
        var $859=($857) < ($858); //@line 1559 "_json.c"
        if ($859) { __label__ = 176; break; } else { __label__ = 185; break; } //@line 1559 "_json.c"
      case 176: // $bb46
        var $860=$idx_addr; //@line 1559 "_json.c"
        var $861=($860) + 1; //@line 1559 "_json.c"
        var $862=$str; //@line 1559 "_json.c"
        var $863=$862+$861; //@line 1559 "_json.c"
        var $864=HEAP[$863]; //@line 1559 "_json.c"
        var $865=($864)==73; //@line 1559 "_json.c"
        if ($865) { __label__ = 177; break; } else { __label__ = 185; break; } //@line 1559 "_json.c"
      case 177: // $bb47
        var $866=$idx_addr; //@line 1559 "_json.c"
        var $867=($866) + 2; //@line 1559 "_json.c"
        var $868=$str; //@line 1559 "_json.c"
        var $869=$868+$867; //@line 1559 "_json.c"
        var $870=HEAP[$869]; //@line 1559 "_json.c"
        var $871=($870)==110; //@line 1559 "_json.c"
        if ($871) { __label__ = 178; break; } else { __label__ = 185; break; } //@line 1559 "_json.c"
      case 178: // $bb48
        var $872=$idx_addr; //@line 1559 "_json.c"
        var $873=($872) + 3; //@line 1559 "_json.c"
        var $874=$str; //@line 1559 "_json.c"
        var $875=$874+$873; //@line 1559 "_json.c"
        var $876=HEAP[$875]; //@line 1559 "_json.c"
        var $877=($876)==102; //@line 1559 "_json.c"
        if ($877) { __label__ = 179; break; } else { __label__ = 185; break; } //@line 1559 "_json.c"
      case 179: // $bb49
        var $878=$idx_addr; //@line 1559 "_json.c"
        var $879=($878) + 4; //@line 1559 "_json.c"
        var $880=$str; //@line 1559 "_json.c"
        var $881=$880+$879; //@line 1559 "_json.c"
        var $882=HEAP[$881]; //@line 1559 "_json.c"
        var $883=($882)==105; //@line 1559 "_json.c"
        if ($883) { __label__ = 180; break; } else { __label__ = 185; break; } //@line 1559 "_json.c"
      case 180: // $bb50
        var $884=$idx_addr; //@line 1559 "_json.c"
        var $885=($884) + 5; //@line 1559 "_json.c"
        var $886=$str; //@line 1559 "_json.c"
        var $887=$886+$885; //@line 1559 "_json.c"
        var $888=HEAP[$887]; //@line 1559 "_json.c"
        var $889=($888)==110; //@line 1559 "_json.c"
        if ($889) { __label__ = 181; break; } else { __label__ = 185; break; } //@line 1559 "_json.c"
      case 181: // $bb51
        var $890=$idx_addr; //@line 1559 "_json.c"
        var $891=($890) + 6; //@line 1559 "_json.c"
        var $892=$str; //@line 1559 "_json.c"
        var $893=$892+$891; //@line 1559 "_json.c"
        var $894=HEAP[$893]; //@line 1559 "_json.c"
        var $895=($894)==105; //@line 1559 "_json.c"
        if ($895) { __label__ = 182; break; } else { __label__ = 185; break; } //@line 1559 "_json.c"
      case 182: // $bb52
        var $896=$idx_addr; //@line 1559 "_json.c"
        var $897=($896) + 7; //@line 1559 "_json.c"
        var $898=$str; //@line 1559 "_json.c"
        var $899=$898+$897; //@line 1559 "_json.c"
        var $900=HEAP[$899]; //@line 1559 "_json.c"
        var $901=($900)==116; //@line 1559 "_json.c"
        if ($901) { __label__ = 183; break; } else { __label__ = 185; break; } //@line 1559 "_json.c"
      case 183: // $bb53
        var $902=$idx_addr; //@line 1559 "_json.c"
        var $903=($902) + 8; //@line 1559 "_json.c"
        var $904=$str; //@line 1559 "_json.c"
        var $905=$904+$903; //@line 1559 "_json.c"
        var $906=HEAP[$905]; //@line 1559 "_json.c"
        var $907=($906)==121; //@line 1559 "_json.c"
        if ($907) { __label__ = 184; break; } else { __label__ = 185; break; } //@line 1559 "_json.c"
      case 184: // $bb54
        var $908=$s_addr; //@line 1560 "_json.c"
        var $909=$idx_addr; //@line 1560 "_json.c"
        var $910=$next_idx_ptr_addr; //@line 1560 "_json.c"
        var $911=__parse_constant($908, __str38, $909, $910); //@line 1560 "_json.c"
        $3=$911; //@line 1560 "_json.c"
        __label__ = 238; break; //@line 1560 "_json.c"
      case 185: // $bb55
        var $912=$s_addr; //@line 1565 "_json.c"
        var $913=$pystr_addr; //@line 1565 "_json.c"
        var $914=$idx_addr; //@line 1565 "_json.c"
        var $915=$next_idx_ptr_addr; //@line 1565 "_json.c"
        $s_addr_i=$912;
        $pystr_addr_i=$913;
        $start_addr_i=$914;
        $next_idx_ptr_addr_i=$915;
        var $916=$pystr_addr_i; //@line 1299 "_json.c"
        var $917=$916; //@line 1299 "_json.c"
        var $918=$917+20; //@line 1299 "_json.c"
        var $919=$918; //@line 1299 "_json.c"
        $str_i=$919; //@line 1299 "_json.c"
        var $920=$pystr_addr_i; //@line 1300 "_json.c"
        var $921=$920; //@line 1300 "_json.c"
        var $922=$921+8; //@line 1300 "_json.c"
        var $923=HEAP[$922]; //@line 1300 "_json.c"
        var $924=($923) - 1; //@line 1300 "_json.c"
        $end_idx_i=$924; //@line 1300 "_json.c"
        var $925=$start_addr_i; //@line 1301 "_json.c"
        $idx_i=$925; //@line 1301 "_json.c"
        $is_float_i=0; //@line 1302 "_json.c"
        var $926=$str_i; //@line 1307 "_json.c"
        var $927=$idx_i; //@line 1307 "_json.c"
        var $928=$926+$927; //@line 1307 "_json.c"
        var $929=HEAP[$928]; //@line 1307 "_json.c"
        var $930=($929)==45; //@line 1307 "_json.c"
        if ($930) { __label__ = 186; break; } else { __label__ = 188; break; } //@line 1307 "_json.c"
      case 186: // $bb_i
        var $931=$idx_i; //@line 1308 "_json.c"
        var $932=($931) + 1; //@line 1308 "_json.c"
        $idx_i=$932; //@line 1308 "_json.c"
        var $933=$idx_i; //@line 1309 "_json.c"
        var $934=$end_idx_i; //@line 1309 "_json.c"
        var $935=($933) > ($934); //@line 1309 "_json.c"
        if ($935) { __label__ = 187; break; } else { __label__ = 188; break; } //@line 1309 "_json.c"
      case 187: // $bb1_i
        var $936=HEAP[_PyExc_StopIteration]; //@line 1310 "_json.c"
        _PyErr_SetNone($936); //@line 1310 "_json.c"
        $2=0; //@line 1311 "_json.c"
        __label__ = 237; break; //@line 1311 "_json.c"
      case 188: // $bb2_i
        var $937=$str_i; //@line 1316 "_json.c"
        var $938=$idx_i; //@line 1316 "_json.c"
        var $939=$937+$938; //@line 1316 "_json.c"
        var $940=HEAP[$939]; //@line 1316 "_json.c"
        var $941=($940) <= 48; //@line 1316 "_json.c"
        if ($941) { __label__ = 195; break; } else { __label__ = 189; break; } //@line 1316 "_json.c"
      case 189: // $bb3_i
        var $942=$str_i; //@line 1316 "_json.c"
        var $943=$idx_i; //@line 1316 "_json.c"
        var $944=$942+$943; //@line 1316 "_json.c"
        var $945=HEAP[$944]; //@line 1316 "_json.c"
        var $946=($945) > 57; //@line 1316 "_json.c"
        if ($946) { __label__ = 195; break; } else { __label__ = 190; break; } //@line 1316 "_json.c"
      case 190: // $bb4_i
        var $947=$idx_i; //@line 1317 "_json.c"
        var $948=($947) + 1; //@line 1317 "_json.c"
        $idx_i=$948; //@line 1317 "_json.c"
        __label__ = 192; break; //@line 1317 "_json.c"
      case 191: // $bb5_i
        var $949=$idx_i; //@line 1318 "_json.c"
        var $950=($949) + 1; //@line 1318 "_json.c"
        $idx_i=$950; //@line 1318 "_json.c"
        __label__ = 192; break; //@line 1318 "_json.c"
      case 192: // $bb6_i
        var $951=$idx_i; //@line 1318 "_json.c"
        var $952=$end_idx_i; //@line 1318 "_json.c"
        var $953=($951) > ($952); //@line 1318 "_json.c"
        if ($953) { __label__ = 198; break; } else { __label__ = 193; break; } //@line 1318 "_json.c"
      case 193: // $bb7_i
        var $954=$str_i; //@line 1318 "_json.c"
        var $955=$idx_i; //@line 1318 "_json.c"
        var $956=$954+$955; //@line 1318 "_json.c"
        var $957=HEAP[$956]; //@line 1318 "_json.c"
        var $958=($957) <= 47; //@line 1318 "_json.c"
        if ($958) { __label__ = 198; break; } else { __label__ = 194; break; } //@line 1318 "_json.c"
      case 194: // $bb8_i
        var $959=$str_i; //@line 1318 "_json.c"
        var $960=$idx_i; //@line 1318 "_json.c"
        var $961=$959+$960; //@line 1318 "_json.c"
        var $962=HEAP[$961]; //@line 1318 "_json.c"
        var $963=($962) <= 57; //@line 1318 "_json.c"
        if ($963) { __label__ = 191; break; } else { __label__ = 198; break; } //@line 1318 "_json.c"
      case 195: // $bb10_i
        var $964=$str_i; //@line 1321 "_json.c"
        var $965=$idx_i; //@line 1321 "_json.c"
        var $966=$964+$965; //@line 1321 "_json.c"
        var $967=HEAP[$966]; //@line 1321 "_json.c"
        var $968=($967)==48; //@line 1321 "_json.c"
        if ($968) { __label__ = 196; break; } else { __label__ = 197; break; } //@line 1321 "_json.c"
      case 196: // $bb11_i
        var $969=$idx_i; //@line 1322 "_json.c"
        var $970=($969) + 1; //@line 1322 "_json.c"
        $idx_i=$970; //@line 1322 "_json.c"
        __label__ = 198; break; //@line 1322 "_json.c"
      case 197: // $bb12_i
        var $971=HEAP[_PyExc_StopIteration]; //@line 1326 "_json.c"
        _PyErr_SetNone($971); //@line 1326 "_json.c"
        $2=0; //@line 1327 "_json.c"
        __label__ = 237; break; //@line 1327 "_json.c"
      case 198: // $bb13_i
        var $972=$idx_i; //@line 1331 "_json.c"
        var $973=$end_idx_i; //@line 1331 "_json.c"
        var $974=($972) < ($973); //@line 1331 "_json.c"
        if ($974) { __label__ = 199; break; } else { __label__ = 207; break; } //@line 1331 "_json.c"
      case 199: // $bb14_i
        var $975=$str_i; //@line 1331 "_json.c"
        var $976=$idx_i; //@line 1331 "_json.c"
        var $977=$975+$976; //@line 1331 "_json.c"
        var $978=HEAP[$977]; //@line 1331 "_json.c"
        var $979=($978)==46; //@line 1331 "_json.c"
        if ($979) { __label__ = 200; break; } else { __label__ = 207; break; } //@line 1331 "_json.c"
      case 200: // $bb15_i
        var $980=$idx_i; //@line 1331 "_json.c"
        var $981=($980) + 1; //@line 1331 "_json.c"
        var $982=$str_i; //@line 1331 "_json.c"
        var $983=$982+$981; //@line 1331 "_json.c"
        var $984=HEAP[$983]; //@line 1331 "_json.c"
        var $985=($984) > 47; //@line 1331 "_json.c"
        if ($985) { __label__ = 201; break; } else { __label__ = 207; break; } //@line 1331 "_json.c"
      case 201: // $bb16_i
        var $986=$idx_i; //@line 1331 "_json.c"
        var $987=($986) + 1; //@line 1331 "_json.c"
        var $988=$str_i; //@line 1331 "_json.c"
        var $989=$988+$987; //@line 1331 "_json.c"
        var $990=HEAP[$989]; //@line 1331 "_json.c"
        var $991=($990) <= 57; //@line 1331 "_json.c"
        if ($991) { __label__ = 202; break; } else { __label__ = 207; break; } //@line 1331 "_json.c"
      case 202: // $bb17_i
        $is_float_i=1; //@line 1332 "_json.c"
        var $992=$idx_i; //@line 1333 "_json.c"
        var $993=($992) + 2; //@line 1333 "_json.c"
        $idx_i=$993; //@line 1333 "_json.c"
        __label__ = 204; break; //@line 1333 "_json.c"
      case 203: // $bb18_i
        var $994=$idx_i; //@line 1334 "_json.c"
        var $995=($994) + 1; //@line 1334 "_json.c"
        $idx_i=$995; //@line 1334 "_json.c"
        __label__ = 204; break; //@line 1334 "_json.c"
      case 204: // $bb19_i
        var $996=$idx_i; //@line 1334 "_json.c"
        var $997=$end_idx_i; //@line 1334 "_json.c"
        var $998=($996) > ($997); //@line 1334 "_json.c"
        if ($998) { __label__ = 207; break; } else { __label__ = 205; break; } //@line 1334 "_json.c"
      case 205: // $bb20_i
        var $999=$str_i; //@line 1334 "_json.c"
        var $1000=$idx_i; //@line 1334 "_json.c"
        var $1001=$999+$1000; //@line 1334 "_json.c"
        var $1002=HEAP[$1001]; //@line 1334 "_json.c"
        var $1003=($1002) <= 47; //@line 1334 "_json.c"
        if ($1003) { __label__ = 207; break; } else { __label__ = 206; break; } //@line 1334 "_json.c"
      case 206: // $bb21_i
        var $1004=$str_i; //@line 1334 "_json.c"
        var $1005=$idx_i; //@line 1334 "_json.c"
        var $1006=$1004+$1005; //@line 1334 "_json.c"
        var $1007=HEAP[$1006]; //@line 1334 "_json.c"
        var $1008=($1007) <= 57; //@line 1334 "_json.c"
        if ($1008) { __label__ = 203; break; } else { __label__ = 207; break; } //@line 1334 "_json.c"
      case 207: // $bb22_i
        var $1009=$idx_i; //@line 1338 "_json.c"
        var $1010=$end_idx_i; //@line 1338 "_json.c"
        var $1011=($1009) < ($1010); //@line 1338 "_json.c"
        if ($1011) { __label__ = 208; break; } else { __label__ = 222; break; } //@line 1338 "_json.c"
      case 208: // $bb23_i
        var $1012=$str_i; //@line 1338 "_json.c"
        var $1013=$idx_i; //@line 1338 "_json.c"
        var $1014=$1012+$1013; //@line 1338 "_json.c"
        var $1015=HEAP[$1014]; //@line 1338 "_json.c"
        var $1016=($1015)==101; //@line 1338 "_json.c"
        if ($1016) { __label__ = 210; break; } else { __label__ = 209; break; } //@line 1338 "_json.c"
      case 209: // $bb24_i
        var $1017=$str_i; //@line 1338 "_json.c"
        var $1018=$idx_i; //@line 1338 "_json.c"
        var $1019=$1017+$1018; //@line 1338 "_json.c"
        var $1020=HEAP[$1019]; //@line 1338 "_json.c"
        var $1021=($1020)==69; //@line 1338 "_json.c"
        if ($1021) { __label__ = 210; break; } else { __label__ = 222; break; } //@line 1338 "_json.c"
      case 210: // $bb25_i
        var $1022=$idx_i; //@line 1341 "_json.c"
        $e_start_i=$1022; //@line 1341 "_json.c"
        var $1023=$idx_i; //@line 1342 "_json.c"
        var $1024=($1023) + 1; //@line 1342 "_json.c"
        $idx_i=$1024; //@line 1342 "_json.c"
        var $1025=$idx_i; //@line 1345 "_json.c"
        var $1026=$end_idx_i; //@line 1345 "_json.c"
        var $1027=($1025) < ($1026); //@line 1345 "_json.c"
        if ($1027) { __label__ = 211; break; } else { __label__ = 215; break; } //@line 1345 "_json.c"
      case 211: // $bb26_i
        var $1028=$str_i; //@line 1345 "_json.c"
        var $1029=$idx_i; //@line 1345 "_json.c"
        var $1030=$1028+$1029; //@line 1345 "_json.c"
        var $1031=HEAP[$1030]; //@line 1345 "_json.c"
        var $1032=($1031)==45; //@line 1345 "_json.c"
        if ($1032) { __label__ = 213; break; } else { __label__ = 212; break; } //@line 1345 "_json.c"
      case 212: // $bb27_i
        var $1033=$str_i; //@line 1345 "_json.c"
        var $1034=$idx_i; //@line 1345 "_json.c"
        var $1035=$1033+$1034; //@line 1345 "_json.c"
        var $1036=HEAP[$1035]; //@line 1345 "_json.c"
        var $1037=($1036)==43; //@line 1345 "_json.c"
        if ($1037) { __label__ = 213; break; } else { __label__ = 215; break; } //@line 1345 "_json.c"
      case 213: // $bb28_i
        var $1038=$idx_i; //@line 1345 "_json.c"
        var $1039=($1038) + 1; //@line 1345 "_json.c"
        $idx_i=$1039; //@line 1345 "_json.c"
        __label__ = 215; break; //@line 1345 "_json.c"
      case 214: // $bb30_i
        var $1040=$idx_i; //@line 1348 "_json.c"
        var $1041=($1040) + 1; //@line 1348 "_json.c"
        $idx_i=$1041; //@line 1348 "_json.c"
        __label__ = 215; break; //@line 1348 "_json.c"
      case 215: // $bb31_i
        var $1042=$idx_i; //@line 1348 "_json.c"
        var $1043=$end_idx_i; //@line 1348 "_json.c"
        var $1044=($1042) > ($1043); //@line 1348 "_json.c"
        if ($1044) { __label__ = 218; break; } else { __label__ = 216; break; } //@line 1348 "_json.c"
      case 216: // $bb32_i
        var $1045=$str_i; //@line 1348 "_json.c"
        var $1046=$idx_i; //@line 1348 "_json.c"
        var $1047=$1045+$1046; //@line 1348 "_json.c"
        var $1048=HEAP[$1047]; //@line 1348 "_json.c"
        var $1049=($1048) <= 47; //@line 1348 "_json.c"
        if ($1049) { __label__ = 218; break; } else { __label__ = 217; break; } //@line 1348 "_json.c"
      case 217: // $bb33_i
        var $1050=$str_i; //@line 1348 "_json.c"
        var $1051=$idx_i; //@line 1348 "_json.c"
        var $1052=$1050+$1051; //@line 1348 "_json.c"
        var $1053=HEAP[$1052]; //@line 1348 "_json.c"
        var $1054=($1053) <= 57; //@line 1348 "_json.c"
        if ($1054) { __label__ = 214; break; } else { __label__ = 218; break; } //@line 1348 "_json.c"
      case 218: // $bb34_i
        var $1055=$idx_i; //@line 1351 "_json.c"
        var $1056=($1055) - 1; //@line 1351 "_json.c"
        var $1057=$str_i; //@line 1351 "_json.c"
        var $1058=$1057+$1056; //@line 1351 "_json.c"
        var $1059=HEAP[$1058]; //@line 1351 "_json.c"
        var $1060=($1059) <= 47; //@line 1351 "_json.c"
        if ($1060) { __label__ = 221; break; } else { __label__ = 219; break; } //@line 1351 "_json.c"
      case 219: // $bb35_i
        var $1061=$idx_i; //@line 1351 "_json.c"
        var $1062=($1061) - 1; //@line 1351 "_json.c"
        var $1063=$str_i; //@line 1351 "_json.c"
        var $1064=$1063+$1062; //@line 1351 "_json.c"
        var $1065=HEAP[$1064]; //@line 1351 "_json.c"
        var $1066=($1065) > 57; //@line 1351 "_json.c"
        if ($1066) { __label__ = 221; break; } else { __label__ = 220; break; } //@line 1351 "_json.c"
      case 220: // $bb36_i
        $is_float_i=1; //@line 1352 "_json.c"
        __label__ = 222; break; //@line 1352 "_json.c"
      case 221: // $bb37_i
        var $1067=$e_start_i; //@line 1355 "_json.c"
        $idx_i=$1067; //@line 1355 "_json.c"
        __label__ = 222; break; //@line 1355 "_json.c"
      case 222: // $bb38_i
        var $1068=$idx_i; //@line 1360 "_json.c"
        var $1069=$start_addr_i; //@line 1360 "_json.c"
        var $1070=($1068) - ($1069); //@line 1360 "_json.c"
        var $1071=$str_i; //@line 1360 "_json.c"
        var $1072=$start_addr_i; //@line 1360 "_json.c"
        var $1073=$1071+$1072; //@line 1360 "_json.c"
        var $1074=_PyString_FromStringAndSize($1073, $1070); //@line 1360 "_json.c"
        $numstr_i=$1074; //@line 1360 "_json.c"
        var $1075=($1074)==0; //@line 1361 "_json.c"
        if ($1075) { __label__ = 223; break; } else { __label__ = 224; break; } //@line 1361 "_json.c"
      case 223: // $bb39_i
        $2=0; //@line 1362 "_json.c"
        __label__ = 237; break; //@line 1362 "_json.c"
      case 224: // $bb40_i
        var $1076=$is_float_i; //@line 1363 "_json.c"
        var $1077=($1076)!=0; //@line 1363 "_json.c"
        var $1078=$s_addr_i; //@line 1365 "_json.c"
        if ($1077) { __label__ = 225; break; } else { __label__ = 231; break; } //@line 1363 "_json.c"
      case 225: // $bb41_i
        var $1079=$1078+24; //@line 1365 "_json.c"
        var $1080=HEAP[$1079]; //@line 1365 "_json.c"
        var $1081=($1080)!=(_PyFloat_Type); //@line 1365 "_json.c"
        if ($1081) { __label__ = 226; break; } else { __label__ = 227; break; } //@line 1365 "_json.c"
      case 226: // $bb42_i
        var $1082=$s_addr_i; //@line 1366 "_json.c"
        var $1083=$1082+24; //@line 1366 "_json.c"
        var $1084=HEAP[$1083]; //@line 1366 "_json.c"
        var $1085=$numstr_i; //@line 1366 "_json.c"
        var $1086=_PyObject_CallFunctionObjArgs($1084, $1085, 0); //@line 1366 "_json.c"
        $rval_i=$1086; //@line 1366 "_json.c"
        __label__ = 234; break; //@line 1366 "_json.c"
      case 227: // $bb43_i
        var $1087=$numstr_i; //@line 1370 "_json.c"
        var $1088=$1087; //@line 1370 "_json.c"
        var $1089=$1088+20; //@line 1370 "_json.c"
        var $1090=$1089; //@line 1370 "_json.c"
        var $1091=_PyOS_string_to_double($1090, 0, 0); //@line 1370 "_json.c"
        $d_i=$1091; //@line 1370 "_json.c"
        var $1092=$d_i; //@line 1371 "_json.c"
        var $1093=($1092) == -1; //@line 1371 "_json.c"
        if ($1093) { __label__ = 228; break; } else { __label__ = 230; break; } //@line 1371 "_json.c"
      case 228: // $bb44_i
        var $1094=_PyErr_Occurred(); //@line 1371 "_json.c"
        var $1095=($1094)!=0; //@line 1371 "_json.c"
        if ($1095) { __label__ = 229; break; } else { __label__ = 230; break; } //@line 1371 "_json.c"
      case 229: // $bb45_i
        $2=0; //@line 1372 "_json.c"
        __label__ = 237; break; //@line 1372 "_json.c"
      case 230: // $bb46_i
        var $1096=$d_i; //@line 1373 "_json.c"
        var $1097=_PyFloat_FromDouble($1096); //@line 1373 "_json.c"
        $rval_i=$1097; //@line 1373 "_json.c"
        __label__ = 234; break; //@line 1373 "_json.c"
      case 231: // $bb48_i
        var $1098=$1078+28; //@line 1378 "_json.c"
        var $1099=HEAP[$1098]; //@line 1378 "_json.c"
        var $1100=($1099)!=(_PyInt_Type); //@line 1378 "_json.c"
        if ($1100) { __label__ = 232; break; } else { __label__ = 233; break; } //@line 1378 "_json.c"
      case 232: // $bb49_i
        var $1101=$s_addr_i; //@line 1379 "_json.c"
        var $1102=$1101+28; //@line 1379 "_json.c"
        var $1103=HEAP[$1102]; //@line 1379 "_json.c"
        var $1104=$numstr_i; //@line 1379 "_json.c"
        var $1105=_PyObject_CallFunctionObjArgs($1103, $1104, 0); //@line 1379 "_json.c"
        $rval_i=$1105; //@line 1379 "_json.c"
        __label__ = 234; break; //@line 1379 "_json.c"
      case 233: // $bb50_i
        var $1106=$numstr_i; //@line 1382 "_json.c"
        var $1107=$1106; //@line 1382 "_json.c"
        var $1108=$1107+20; //@line 1382 "_json.c"
        var $1109=$1108; //@line 1382 "_json.c"
        var $1110=_PyInt_FromString($1109, 0, 10); //@line 1382 "_json.c"
        $rval_i=$1110; //@line 1382 "_json.c"
        __label__ = 234; break; //@line 1382 "_json.c"
      case 234: // $bb51_i
        var $1111=$numstr_i; //@line 1385 "_json.c"
        var $1112=$1111; //@line 1385 "_json.c"
        var $1113=HEAP[$1112]; //@line 1385 "_json.c"
        var $1114=($1113) - 1; //@line 1385 "_json.c"
        var $1115=$numstr_i; //@line 1385 "_json.c"
        var $1116=$1115; //@line 1385 "_json.c"
        HEAP[$1116]=$1114; //@line 1385 "_json.c"
        var $1117=$numstr_i; //@line 1385 "_json.c"
        var $1118=$1117; //@line 1385 "_json.c"
        var $1119=HEAP[$1118]; //@line 1385 "_json.c"
        var $1120=($1119)==0; //@line 1385 "_json.c"
        if ($1120) { __label__ = 235; break; } else { __label__ = 236; break; } //@line 1385 "_json.c"
      case 235: // $bb52_i
        var $1121=$numstr_i; //@line 1385 "_json.c"
        var $1122=$1121+4; //@line 1385 "_json.c"
        var $1123=HEAP[$1122]; //@line 1385 "_json.c"
        var $1124=$1123+24; //@line 1385 "_json.c"
        var $1125=HEAP[$1124]; //@line 1385 "_json.c"
        var $1126=$numstr_i; //@line 1385 "_json.c"
        FUNCTION_TABLE[$1125]($1126); //@line 1385 "_json.c"
        __label__ = 236; break; //@line 1385 "_json.c"
      case 236: // $bb53_i
        var $1127=$next_idx_ptr_addr_i; //@line 1386 "_json.c"
        var $1128=$idx_i; //@line 1386 "_json.c"
        HEAP[$1127]=$1128; //@line 1386 "_json.c"
        var $1129=$rval_i; //@line 1387 "_json.c"
        $2=$1129; //@line 1387 "_json.c"
        __label__ = 237; break; //@line 1387 "_json.c"
      case 237: // $_match_number_str_exit
        var $1130=$2; //@line 1311 "_json.c"
        $retval_i=$1130; //@line 1311 "_json.c"
        var $retval55_i=$retval_i; //@line 1311 "_json.c"
        $3=$retval55_i; //@line 1565 "_json.c"
        __label__ = 238; break; //@line 1565 "_json.c"
      case 238: // $bb56
        var $1131=$3; //@line 1496 "_json.c"
        $retval=$1131; //@line 1496 "_json.c"
        var $retval57=$retval; //@line 1496 "_json.c"
        STACKTOP = __stackBase__;
        return $retval57; //@line 1496 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scan_once_unicode($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr_i48;
        var $pystr_addr_i49;
        var $idx_addr_i50;
        var $next_idx_ptr_addr_i51;
        var $retval_i52;
        var $0;
        var $str_i53;
        var $end_idx_i54;
        var $rval_i55;
        var $pairs_i;
        var $item_i;
        var $key_i;
        var $val_i56;
        var $strict_i;
        var $next_idx_i57=__stackBase__;
        var $_py_tmp_i58;
        var $_py_tmp38_i;
        var $_py_tmp76_i;
        var $s_addr_i1;
        var $pystr_addr_i2;
        var $idx_addr_i;
        var $next_idx_ptr_addr_i3;
        var $retval_i4;
        var $1;
        var $str_i5;
        var $end_idx_i6;
        var $val_i;
        var $rval_i7;
        var $next_idx_i=__stackBase__+4;
        var $_py_tmp_i;
        var $s_addr_i;
        var $pystr_addr_i;
        var $start_addr_i;
        var $next_idx_ptr_addr_i;
        var $retval_i;
        var $2;
        var $str_i;
        var $end_idx_i;
        var $idx_i;
        var $is_float_i;
        var $rval_i;
        var $numstr_i;
        var $e_start_i;
        var $s_addr;
        var $pystr_addr;
        var $idx_addr;
        var $next_idx_ptr_addr;
        var $retval;
        var $3;
        var $res;
        var $str;
        var $length;
        $s_addr=$s;
        $pystr_addr=$pystr;
        $idx_addr=$idx;
        $next_idx_ptr_addr=$next_idx_ptr;
        var $4=$pystr_addr; //@line 1579 "_json.c"
        var $5=$4; //@line 1579 "_json.c"
        var $6=$5+12; //@line 1579 "_json.c"
        var $7=HEAP[$6]; //@line 1579 "_json.c"
        $str=$7; //@line 1579 "_json.c"
        var $8=$pystr_addr; //@line 1580 "_json.c"
        var $9=$8; //@line 1580 "_json.c"
        var $10=$9+8; //@line 1580 "_json.c"
        var $11=HEAP[$10]; //@line 1580 "_json.c"
        $length=$11; //@line 1580 "_json.c"
        var $12=$idx_addr; //@line 1581 "_json.c"
        var $13=$length; //@line 1581 "_json.c"
        var $14=($12) >= ($13); //@line 1581 "_json.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1581 "_json.c"
      case 1: // $bb
        var $15=HEAP[_PyExc_StopIteration]; //@line 1582 "_json.c"
        _PyErr_SetNone($15); //@line 1582 "_json.c"
        $3=0; //@line 1583 "_json.c"
        __label__ = 233; break; //@line 1583 "_json.c"
      case 2: // $bb1
        var $16=$str; //@line 1585 "_json.c"
        var $17=$idx_addr; //@line 1585 "_json.c"
        var $18=$16+2*$17; //@line 1585 "_json.c"
        var $19=HEAP[$18]; //@line 1585 "_json.c"
        var $20=($19); //@line 1585 "_json.c"
        if ($20 == 34) {
          __label__ = 3; break;
        }
        else if ($20 == 45) {
          __label__ = 175; break;
        }
        else if ($20 == 73) {
          __label__ = 166; break;
        }
        else if ($20 == 78) {
          __label__ = 162; break;
        }
        else if ($20 == 91) {
          __label__ = 98; break;
        }
        else if ($20 == 102) {
          __label__ = 156; break;
        }
        else if ($20 == 110) {
          __label__ = 146; break;
        }
        else if ($20 == 116) {
          __label__ = 151; break;
        }
        else if ($20 == 123) {
          __label__ = 4; break;
        }
        else {
        __label__ = 185; break;
        }
        
      case 3: // $bb2
        var $21=$s_addr; //@line 1588 "_json.c"
        var $22=$21+12; //@line 1588 "_json.c"
        var $23=HEAP[$22]; //@line 1588 "_json.c"
        var $24=_PyObject_IsTrue($23); //@line 1588 "_json.c"
        var $25=$idx_addr; //@line 1588 "_json.c"
        var $26=($25) + 1; //@line 1588 "_json.c"
        var $27=$pystr_addr; //@line 1588 "_json.c"
        var $28=$next_idx_ptr_addr; //@line 1588 "_json.c"
        var $29=_scanstring_unicode($27, $26, $24, $28); //@line 1588 "_json.c"
        $3=$29; //@line 1588 "_json.c"
        __label__ = 233; break; //@line 1588 "_json.c"
      case 4: // $bb3
        var $30=HEAP[__PyThreadState_Current]; //@line 1593 "_json.c"
        var $31=$30+12; //@line 1593 "_json.c"
        var $32=HEAP[$31]; //@line 1593 "_json.c"
        var $33=($32) + 1; //@line 1593 "_json.c"
        var $34=$30+12; //@line 1593 "_json.c"
        HEAP[$34]=$33; //@line 1593 "_json.c"
        var $35=$30+12; //@line 1593 "_json.c"
        var $36=HEAP[$35]; //@line 1593 "_json.c"
        var $37=HEAP[__Py_CheckRecursionLimit]; //@line 1593 "_json.c"
        var $38=($36) > ($37); //@line 1593 "_json.c"
        if ($38) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1593 "_json.c"
      case 5: // $bb4
        var $39=__Py_CheckRecursiveCall(__str39); //@line 1593 "_json.c"
        var $40=($39)!=0; //@line 1593 "_json.c"
        if ($40) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1593 "_json.c"
      case 6: // $bb5
        $3=0; //@line 1595 "_json.c"
        __label__ = 233; break; //@line 1595 "_json.c"
      case 7: // $bb6
        var $41=$idx_addr; //@line 1596 "_json.c"
        var $42=($41) + 1; //@line 1596 "_json.c"
        var $43=$s_addr; //@line 1596 "_json.c"
        var $44=$pystr_addr; //@line 1596 "_json.c"
        var $45=$next_idx_ptr_addr; //@line 1596 "_json.c"
        $s_addr_i48=$43;
        $pystr_addr_i49=$44;
        $idx_addr_i50=$42;
        $next_idx_ptr_addr_i51=$45;
        var $46=$pystr_addr_i49; //@line 1013 "_json.c"
        var $47=$46; //@line 1013 "_json.c"
        var $48=$47+12; //@line 1013 "_json.c"
        var $49=HEAP[$48]; //@line 1013 "_json.c"
        $str_i53=$49; //@line 1013 "_json.c"
        var $50=$pystr_addr_i49; //@line 1014 "_json.c"
        var $51=$50; //@line 1014 "_json.c"
        var $52=$51+8; //@line 1014 "_json.c"
        var $53=HEAP[$52]; //@line 1014 "_json.c"
        var $54=($53) - 1; //@line 1014 "_json.c"
        $end_idx_i54=$54; //@line 1014 "_json.c"
        $key_i=0; //@line 1018 "_json.c"
        $val_i56=0; //@line 1019 "_json.c"
        var $55=$s_addr_i48; //@line 1020 "_json.c"
        var $56=$55+12; //@line 1020 "_json.c"
        var $57=HEAP[$56]; //@line 1020 "_json.c"
        var $58=_PyObject_IsTrue($57); //@line 1020 "_json.c"
        $strict_i=$58; //@line 1020 "_json.c"
        var $59=_PyList_New(0); //@line 1023 "_json.c"
        $pairs_i=$59; //@line 1023 "_json.c"
        var $60=($59)==0; //@line 1024 "_json.c"
        if ($60) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 1024 "_json.c"
      case 8: // $bb_i59
        $0=0; //@line 1025 "_json.c"
        __label__ = 97; break; //@line 1025 "_json.c"
      case 9: // $bb2_i60
        var $61=$idx_addr_i50; //@line 1028 "_json.c"
        var $62=($61) + 1; //@line 1028 "_json.c"
        $idx_addr_i50=$62; //@line 1028 "_json.c"
        __label__ = 10; break; //@line 1028 "_json.c"
      case 10: // $bb3_i61
        var $63=$idx_addr_i50; //@line 1028 "_json.c"
        var $64=$end_idx_i54; //@line 1028 "_json.c"
        var $65=($63) > ($64); //@line 1028 "_json.c"
        if ($65) { __label__ = 15; break; } else { __label__ = 11; break; } //@line 1028 "_json.c"
      case 11: // $bb4_i62
        var $66=$str_i53; //@line 1028 "_json.c"
        var $67=$idx_addr_i50; //@line 1028 "_json.c"
        var $68=$66+2*$67; //@line 1028 "_json.c"
        var $69=HEAP[$68]; //@line 1028 "_json.c"
        var $70=($69)==32; //@line 1028 "_json.c"
        if ($70) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1028 "_json.c"
      case 12: // $bb5_i63
        var $71=$str_i53; //@line 1028 "_json.c"
        var $72=$idx_addr_i50; //@line 1028 "_json.c"
        var $73=$71+2*$72; //@line 1028 "_json.c"
        var $74=HEAP[$73]; //@line 1028 "_json.c"
        var $75=($74)==9; //@line 1028 "_json.c"
        if ($75) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 1028 "_json.c"
      case 13: // $bb6_i64
        var $76=$str_i53; //@line 1028 "_json.c"
        var $77=$idx_addr_i50; //@line 1028 "_json.c"
        var $78=$76+2*$77; //@line 1028 "_json.c"
        var $79=HEAP[$78]; //@line 1028 "_json.c"
        var $80=($79)==10; //@line 1028 "_json.c"
        if ($80) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 1028 "_json.c"
      case 14: // $bb7_i65
        var $81=$str_i53; //@line 1028 "_json.c"
        var $82=$idx_addr_i50; //@line 1028 "_json.c"
        var $83=$81+2*$82; //@line 1028 "_json.c"
        var $84=HEAP[$83]; //@line 1028 "_json.c"
        var $85=($84)==13; //@line 1028 "_json.c"
        if ($85) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 1028 "_json.c"
      case 15: // $bb8_i66
        var $86=$idx_addr_i50; //@line 1031 "_json.c"
        var $87=$end_idx_i54; //@line 1031 "_json.c"
        var $88=($86) <= ($87); //@line 1031 "_json.c"
        if ($88) { __label__ = 16; break; } else { __label__ = 69; break; } //@line 1031 "_json.c"
      case 16: // $bb9_i67
        var $89=$str_i53; //@line 1031 "_json.c"
        var $90=$idx_addr_i50; //@line 1031 "_json.c"
        var $91=$89+2*$90; //@line 1031 "_json.c"
        var $92=HEAP[$91]; //@line 1031 "_json.c"
        var $93=($92)!=125; //@line 1031 "_json.c"
        if ($93) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 1031 "_json.c"
      case 17: // $bb11_i68
        var $94=$str_i53; //@line 1034 "_json.c"
        var $95=$idx_addr_i50; //@line 1034 "_json.c"
        var $96=$94+2*$95; //@line 1034 "_json.c"
        var $97=HEAP[$96]; //@line 1034 "_json.c"
        var $98=($97)!=34; //@line 1034 "_json.c"
        if ($98) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1034 "_json.c"
      case 18: // $bb12_i69
        var $99=$pystr_addr_i49; //@line 1035 "_json.c"
        var $100=$idx_addr_i50; //@line 1035 "_json.c"
        _raise_errmsg(__str30, $99, $100); //@line 1035 "_json.c"
        __label__ = 87; break; //@line 1035 "_json.c"
      case 19: // $bb13_i70
        var $101=$idx_addr_i50; //@line 1038 "_json.c"
        var $102=($101) + 1; //@line 1038 "_json.c"
        var $103=$pystr_addr_i49; //@line 1038 "_json.c"
        var $104=$strict_i; //@line 1038 "_json.c"
        var $105=_scanstring_unicode($103, $102, $104, $next_idx_i57); //@line 1038 "_json.c"
        $key_i=$105; //@line 1038 "_json.c"
        var $106=$key_i; //@line 1039 "_json.c"
        var $107=($106)==0; //@line 1039 "_json.c"
        if ($107) { __label__ = 90; break; } else { __label__ = 20; break; } //@line 1039 "_json.c"
      case 20: // $bb14_i71
        var $108=HEAP[$next_idx_i57]; //@line 1041 "_json.c"
        $idx_addr_i50=$108; //@line 1041 "_json.c"
        __label__ = 22; break; //@line 1041 "_json.c"
      case 21: // $bb15_i72
        var $109=$idx_addr_i50; //@line 1044 "_json.c"
        var $110=($109) + 1; //@line 1044 "_json.c"
        $idx_addr_i50=$110; //@line 1044 "_json.c"
        __label__ = 22; break; //@line 1044 "_json.c"
      case 22: // $bb16_i73
        var $111=$idx_addr_i50; //@line 1044 "_json.c"
        var $112=$end_idx_i54; //@line 1044 "_json.c"
        var $113=($111) > ($112); //@line 1044 "_json.c"
        if ($113) { __label__ = 27; break; } else { __label__ = 23; break; } //@line 1044 "_json.c"
      case 23: // $bb17_i74
        var $114=$str_i53; //@line 1044 "_json.c"
        var $115=$idx_addr_i50; //@line 1044 "_json.c"
        var $116=$114+2*$115; //@line 1044 "_json.c"
        var $117=HEAP[$116]; //@line 1044 "_json.c"
        var $118=($117)==32; //@line 1044 "_json.c"
        if ($118) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 1044 "_json.c"
      case 24: // $bb18_i75
        var $119=$str_i53; //@line 1044 "_json.c"
        var $120=$idx_addr_i50; //@line 1044 "_json.c"
        var $121=$119+2*$120; //@line 1044 "_json.c"
        var $122=HEAP[$121]; //@line 1044 "_json.c"
        var $123=($122)==9; //@line 1044 "_json.c"
        if ($123) { __label__ = 21; break; } else { __label__ = 25; break; } //@line 1044 "_json.c"
      case 25: // $bb19_i76
        var $124=$str_i53; //@line 1044 "_json.c"
        var $125=$idx_addr_i50; //@line 1044 "_json.c"
        var $126=$124+2*$125; //@line 1044 "_json.c"
        var $127=HEAP[$126]; //@line 1044 "_json.c"
        var $128=($127)==10; //@line 1044 "_json.c"
        if ($128) { __label__ = 21; break; } else { __label__ = 26; break; } //@line 1044 "_json.c"
      case 26: // $bb20_i77
        var $129=$str_i53; //@line 1044 "_json.c"
        var $130=$idx_addr_i50; //@line 1044 "_json.c"
        var $131=$129+2*$130; //@line 1044 "_json.c"
        var $132=HEAP[$131]; //@line 1044 "_json.c"
        var $133=($132)==13; //@line 1044 "_json.c"
        if ($133) { __label__ = 21; break; } else { __label__ = 27; break; } //@line 1044 "_json.c"
      case 27: // $bb21_i78
        var $134=$idx_addr_i50; //@line 1045 "_json.c"
        var $135=$end_idx_i54; //@line 1045 "_json.c"
        var $136=($134) > ($135); //@line 1045 "_json.c"
        if ($136) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 1045 "_json.c"
      case 28: // $bb22_i79
        var $137=$str_i53; //@line 1045 "_json.c"
        var $138=$idx_addr_i50; //@line 1045 "_json.c"
        var $139=$137+2*$138; //@line 1045 "_json.c"
        var $140=HEAP[$139]; //@line 1045 "_json.c"
        var $141=($140)!=58; //@line 1045 "_json.c"
        if ($141) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1045 "_json.c"
      case 29: // $bb23_i80
        var $142=$pystr_addr_i49; //@line 1046 "_json.c"
        var $143=$idx_addr_i50; //@line 1046 "_json.c"
        _raise_errmsg(__str31, $142, $143); //@line 1046 "_json.c"
        __label__ = 87; break; //@line 1046 "_json.c"
      case 30: // $bb24_i81
        var $144=$idx_addr_i50; //@line 1049 "_json.c"
        var $145=($144) + 1; //@line 1049 "_json.c"
        $idx_addr_i50=$145; //@line 1049 "_json.c"
        __label__ = 32; break; //@line 1049 "_json.c"
      case 31: // $bb25_i82
        var $146=$idx_addr_i50; //@line 1050 "_json.c"
        var $147=($146) + 1; //@line 1050 "_json.c"
        $idx_addr_i50=$147; //@line 1050 "_json.c"
        __label__ = 32; break; //@line 1050 "_json.c"
      case 32: // $bb26_i83
        var $148=$idx_addr_i50; //@line 1050 "_json.c"
        var $149=$end_idx_i54; //@line 1050 "_json.c"
        var $150=($148) > ($149); //@line 1050 "_json.c"
        if ($150) { __label__ = 37; break; } else { __label__ = 33; break; } //@line 1050 "_json.c"
      case 33: // $bb27_i84
        var $151=$str_i53; //@line 1050 "_json.c"
        var $152=$idx_addr_i50; //@line 1050 "_json.c"
        var $153=$151+2*$152; //@line 1050 "_json.c"
        var $154=HEAP[$153]; //@line 1050 "_json.c"
        var $155=($154)==32; //@line 1050 "_json.c"
        if ($155) { __label__ = 31; break; } else { __label__ = 34; break; } //@line 1050 "_json.c"
      case 34: // $bb28_i85
        var $156=$str_i53; //@line 1050 "_json.c"
        var $157=$idx_addr_i50; //@line 1050 "_json.c"
        var $158=$156+2*$157; //@line 1050 "_json.c"
        var $159=HEAP[$158]; //@line 1050 "_json.c"
        var $160=($159)==9; //@line 1050 "_json.c"
        if ($160) { __label__ = 31; break; } else { __label__ = 35; break; } //@line 1050 "_json.c"
      case 35: // $bb29_i86
        var $161=$str_i53; //@line 1050 "_json.c"
        var $162=$idx_addr_i50; //@line 1050 "_json.c"
        var $163=$161+2*$162; //@line 1050 "_json.c"
        var $164=HEAP[$163]; //@line 1050 "_json.c"
        var $165=($164)==10; //@line 1050 "_json.c"
        if ($165) { __label__ = 31; break; } else { __label__ = 36; break; } //@line 1050 "_json.c"
      case 36: // $bb30_i87
        var $166=$str_i53; //@line 1050 "_json.c"
        var $167=$idx_addr_i50; //@line 1050 "_json.c"
        var $168=$166+2*$167; //@line 1050 "_json.c"
        var $169=HEAP[$168]; //@line 1050 "_json.c"
        var $170=($169)==13; //@line 1050 "_json.c"
        if ($170) { __label__ = 31; break; } else { __label__ = 37; break; } //@line 1050 "_json.c"
      case 37: // $bb31_i88
        var $171=$s_addr_i48; //@line 1053 "_json.c"
        var $172=$pystr_addr_i49; //@line 1053 "_json.c"
        var $173=$idx_addr_i50; //@line 1053 "_json.c"
        var $174=_scan_once_unicode($171, $172, $173, $next_idx_i57); //@line 1053 "_json.c"
        $val_i56=$174; //@line 1053 "_json.c"
        var $175=($174)==0; //@line 1054 "_json.c"
        if ($175) { __label__ = 87; break; } else { __label__ = 38; break; } //@line 1054 "_json.c"
      case 38: // $bb32_i89
        var $176=$key_i; //@line 1057 "_json.c"
        var $177=$val_i56; //@line 1057 "_json.c"
        var $178=_PyTuple_Pack(2, $176, $177); //@line 1057 "_json.c"
        $item_i=$178; //@line 1057 "_json.c"
        var $179=$item_i; //@line 1058 "_json.c"
        var $180=($179)==0; //@line 1058 "_json.c"
        if ($180) { __label__ = 87; break; } else { __label__ = 39; break; } //@line 1058 "_json.c"
      case 39: // $bb33_i90
        var $181=$key_i; //@line 1060 "_json.c"
        var $182=($181)!=0; //@line 1060 "_json.c"
        if ($182) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 1060 "_json.c"
      case 40: // $bb34_i91
        var $183=$key_i; //@line 1060 "_json.c"
        $_py_tmp_i58=$183; //@line 1060 "_json.c"
        $key_i=0; //@line 1060 "_json.c"
        var $184=$_py_tmp_i58; //@line 1060 "_json.c"
        var $185=$184; //@line 1060 "_json.c"
        var $186=HEAP[$185]; //@line 1060 "_json.c"
        var $187=($186) - 1; //@line 1060 "_json.c"
        var $188=$_py_tmp_i58; //@line 1060 "_json.c"
        var $189=$188; //@line 1060 "_json.c"
        HEAP[$189]=$187; //@line 1060 "_json.c"
        var $190=$_py_tmp_i58; //@line 1060 "_json.c"
        var $191=$190; //@line 1060 "_json.c"
        var $192=HEAP[$191]; //@line 1060 "_json.c"
        var $193=($192)==0; //@line 1060 "_json.c"
        if ($193) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1060 "_json.c"
      case 41: // $bb35_i92
        var $194=$_py_tmp_i58; //@line 1060 "_json.c"
        var $195=$194+4; //@line 1060 "_json.c"
        var $196=HEAP[$195]; //@line 1060 "_json.c"
        var $197=$196+24; //@line 1060 "_json.c"
        var $198=HEAP[$197]; //@line 1060 "_json.c"
        var $199=$_py_tmp_i58; //@line 1060 "_json.c"
        FUNCTION_TABLE[$198]($199); //@line 1060 "_json.c"
        __label__ = 42; break; //@line 1060 "_json.c"
      case 42: // $bb36_i93
        var $200=$val_i56; //@line 1061 "_json.c"
        var $201=($200)!=0; //@line 1061 "_json.c"
        if ($201) { __label__ = 43; break; } else { __label__ = 45; break; } //@line 1061 "_json.c"
      case 43: // $bb37_i94
        var $202=$val_i56; //@line 1061 "_json.c"
        $_py_tmp38_i=$202; //@line 1061 "_json.c"
        $val_i56=0; //@line 1061 "_json.c"
        var $203=$_py_tmp38_i; //@line 1061 "_json.c"
        var $204=$203; //@line 1061 "_json.c"
        var $205=HEAP[$204]; //@line 1061 "_json.c"
        var $206=($205) - 1; //@line 1061 "_json.c"
        var $207=$_py_tmp38_i; //@line 1061 "_json.c"
        var $208=$207; //@line 1061 "_json.c"
        HEAP[$208]=$206; //@line 1061 "_json.c"
        var $209=$_py_tmp38_i; //@line 1061 "_json.c"
        var $210=$209; //@line 1061 "_json.c"
        var $211=HEAP[$210]; //@line 1061 "_json.c"
        var $212=($211)==0; //@line 1061 "_json.c"
        if ($212) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1061 "_json.c"
      case 44: // $bb39_i95
        var $213=$_py_tmp38_i; //@line 1061 "_json.c"
        var $214=$213+4; //@line 1061 "_json.c"
        var $215=HEAP[$214]; //@line 1061 "_json.c"
        var $216=$215+24; //@line 1061 "_json.c"
        var $217=HEAP[$216]; //@line 1061 "_json.c"
        var $218=$_py_tmp38_i; //@line 1061 "_json.c"
        FUNCTION_TABLE[$217]($218); //@line 1061 "_json.c"
        __label__ = 45; break; //@line 1061 "_json.c"
      case 45: // $bb40_i96
        var $219=$pairs_i; //@line 1062 "_json.c"
        var $220=$item_i; //@line 1062 "_json.c"
        var $221=_PyList_Append($219, $220); //@line 1062 "_json.c"
        var $222=($221)==-1; //@line 1062 "_json.c"
        var $223=$item_i; //@line 1063 "_json.c"
        var $224=$223; //@line 1063 "_json.c"
        var $225=HEAP[$224]; //@line 1063 "_json.c"
        var $226=($225) - 1; //@line 1063 "_json.c"
        var $227=$item_i; //@line 1063 "_json.c"
        var $228=$227; //@line 1063 "_json.c"
        HEAP[$228]=$226; //@line 1063 "_json.c"
        var $229=$item_i; //@line 1063 "_json.c"
        var $230=$229; //@line 1063 "_json.c"
        var $231=HEAP[$230]; //@line 1063 "_json.c"
        var $232=($231)==0; //@line 1063 "_json.c"
        if ($222) { __label__ = 46; break; } else { __label__ = 48; break; } //@line 1062 "_json.c"
      case 46: // $bb41_i97
        if ($232) { __label__ = 47; break; } else { __label__ = 87; break; } //@line 1063 "_json.c"
      case 47: // $bb42_i98
        var $233=$item_i; //@line 1063 "_json.c"
        var $234=$233+4; //@line 1063 "_json.c"
        var $235=HEAP[$234]; //@line 1063 "_json.c"
        var $236=$235+24; //@line 1063 "_json.c"
        var $237=HEAP[$236]; //@line 1063 "_json.c"
        var $238=$item_i; //@line 1063 "_json.c"
        FUNCTION_TABLE[$237]($238); //@line 1063 "_json.c"
        __label__ = 87; break; //@line 1063 "_json.c"
      case 48: // $bb44_i
        if ($232) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 1066 "_json.c"
      case 49: // $bb45_i99
        var $239=$item_i; //@line 1066 "_json.c"
        var $240=$239+4; //@line 1066 "_json.c"
        var $241=HEAP[$240]; //@line 1066 "_json.c"
        var $242=$241+24; //@line 1066 "_json.c"
        var $243=HEAP[$242]; //@line 1066 "_json.c"
        var $244=$item_i; //@line 1066 "_json.c"
        FUNCTION_TABLE[$243]($244); //@line 1066 "_json.c"
        __label__ = 50; break; //@line 1066 "_json.c"
      case 50: // $bb46_i100
        var $245=HEAP[$next_idx_i57]; //@line 1067 "_json.c"
        $idx_addr_i50=$245; //@line 1067 "_json.c"
        __label__ = 52; break; //@line 1067 "_json.c"
      case 51: // $bb47_i101
        var $246=$idx_addr_i50; //@line 1070 "_json.c"
        var $247=($246) + 1; //@line 1070 "_json.c"
        $idx_addr_i50=$247; //@line 1070 "_json.c"
        __label__ = 52; break; //@line 1070 "_json.c"
      case 52: // $bb48_i102
        var $248=$idx_addr_i50; //@line 1070 "_json.c"
        var $249=$end_idx_i54; //@line 1070 "_json.c"
        var $250=($248) > ($249); //@line 1070 "_json.c"
        if ($250) { __label__ = 57; break; } else { __label__ = 53; break; } //@line 1070 "_json.c"
      case 53: // $bb49_i
        var $251=$str_i53; //@line 1070 "_json.c"
        var $252=$idx_addr_i50; //@line 1070 "_json.c"
        var $253=$251+2*$252; //@line 1070 "_json.c"
        var $254=HEAP[$253]; //@line 1070 "_json.c"
        var $255=($254)==32; //@line 1070 "_json.c"
        if ($255) { __label__ = 51; break; } else { __label__ = 54; break; } //@line 1070 "_json.c"
      case 54: // $bb50_i
        var $256=$str_i53; //@line 1070 "_json.c"
        var $257=$idx_addr_i50; //@line 1070 "_json.c"
        var $258=$256+2*$257; //@line 1070 "_json.c"
        var $259=HEAP[$258]; //@line 1070 "_json.c"
        var $260=($259)==9; //@line 1070 "_json.c"
        if ($260) { __label__ = 51; break; } else { __label__ = 55; break; } //@line 1070 "_json.c"
      case 55: // $bb51_i
        var $261=$str_i53; //@line 1070 "_json.c"
        var $262=$idx_addr_i50; //@line 1070 "_json.c"
        var $263=$261+2*$262; //@line 1070 "_json.c"
        var $264=HEAP[$263]; //@line 1070 "_json.c"
        var $265=($264)==10; //@line 1070 "_json.c"
        if ($265) { __label__ = 51; break; } else { __label__ = 56; break; } //@line 1070 "_json.c"
      case 56: // $bb52_i
        var $266=$str_i53; //@line 1070 "_json.c"
        var $267=$idx_addr_i50; //@line 1070 "_json.c"
        var $268=$266+2*$267; //@line 1070 "_json.c"
        var $269=HEAP[$268]; //@line 1070 "_json.c"
        var $270=($269)==13; //@line 1070 "_json.c"
        if ($270) { __label__ = 51; break; } else { __label__ = 57; break; } //@line 1070 "_json.c"
      case 57: // $bb53_i
        var $271=$idx_addr_i50; //@line 1073 "_json.c"
        var $272=$end_idx_i54; //@line 1073 "_json.c"
        var $273=($271) > ($272); //@line 1073 "_json.c"
        if ($273) { __label__ = 69; break; } else { __label__ = 58; break; } //@line 1073 "_json.c"
      case 58: // $bb54_i
        var $274=$str_i53; //@line 1074 "_json.c"
        var $275=$idx_addr_i50; //@line 1074 "_json.c"
        var $276=$274+2*$275; //@line 1074 "_json.c"
        var $277=HEAP[$276]; //@line 1074 "_json.c"
        var $278=($277)==125; //@line 1074 "_json.c"
        if ($278) { __label__ = 69; break; } else { __label__ = 59; break; } //@line 1074 "_json.c"
      case 59: // $bb55_i
        var $279=$str_i53; //@line 1077 "_json.c"
        var $280=$idx_addr_i50; //@line 1077 "_json.c"
        var $281=$279+2*$280; //@line 1077 "_json.c"
        var $282=HEAP[$281]; //@line 1077 "_json.c"
        var $283=($282)!=44; //@line 1077 "_json.c"
        if ($283) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 1077 "_json.c"
      case 60: // $bb56_i
        var $284=$pystr_addr_i49; //@line 1078 "_json.c"
        var $285=$idx_addr_i50; //@line 1078 "_json.c"
        _raise_errmsg(__str32, $284, $285); //@line 1078 "_json.c"
        __label__ = 87; break; //@line 1078 "_json.c"
      case 61: // $bb57_i
        var $286=$idx_addr_i50; //@line 1081 "_json.c"
        var $287=($286) + 1; //@line 1081 "_json.c"
        $idx_addr_i50=$287; //@line 1081 "_json.c"
        __label__ = 63; break; //@line 1081 "_json.c"
      case 62: // $bb58_i
        var $288=$idx_addr_i50; //@line 1084 "_json.c"
        var $289=($288) + 1; //@line 1084 "_json.c"
        $idx_addr_i50=$289; //@line 1084 "_json.c"
        __label__ = 63; break; //@line 1084 "_json.c"
      case 63: // $bb59_i
        var $290=$idx_addr_i50; //@line 1084 "_json.c"
        var $291=$end_idx_i54; //@line 1084 "_json.c"
        var $292=($290) > ($291); //@line 1084 "_json.c"
        if ($292) { __label__ = 68; break; } else { __label__ = 64; break; } //@line 1084 "_json.c"
      case 64: // $bb60_i
        var $293=$str_i53; //@line 1084 "_json.c"
        var $294=$idx_addr_i50; //@line 1084 "_json.c"
        var $295=$293+2*$294; //@line 1084 "_json.c"
        var $296=HEAP[$295]; //@line 1084 "_json.c"
        var $297=($296)==32; //@line 1084 "_json.c"
        if ($297) { __label__ = 62; break; } else { __label__ = 65; break; } //@line 1084 "_json.c"
      case 65: // $bb61_i
        var $298=$str_i53; //@line 1084 "_json.c"
        var $299=$idx_addr_i50; //@line 1084 "_json.c"
        var $300=$298+2*$299; //@line 1084 "_json.c"
        var $301=HEAP[$300]; //@line 1084 "_json.c"
        var $302=($301)==9; //@line 1084 "_json.c"
        if ($302) { __label__ = 62; break; } else { __label__ = 66; break; } //@line 1084 "_json.c"
      case 66: // $bb62_i
        var $303=$str_i53; //@line 1084 "_json.c"
        var $304=$idx_addr_i50; //@line 1084 "_json.c"
        var $305=$303+2*$304; //@line 1084 "_json.c"
        var $306=HEAP[$305]; //@line 1084 "_json.c"
        var $307=($306)==10; //@line 1084 "_json.c"
        if ($307) { __label__ = 62; break; } else { __label__ = 67; break; } //@line 1084 "_json.c"
      case 67: // $bb63_i
        var $308=$str_i53; //@line 1084 "_json.c"
        var $309=$idx_addr_i50; //@line 1084 "_json.c"
        var $310=$308+2*$309; //@line 1084 "_json.c"
        var $311=HEAP[$310]; //@line 1084 "_json.c"
        var $312=($311)==13; //@line 1084 "_json.c"
        if ($312) { __label__ = 62; break; } else { __label__ = 68; break; } //@line 1084 "_json.c"
      case 68: // $bb64_i
        var $313=$idx_addr_i50; //@line 1032 "_json.c"
        var $314=$end_idx_i54; //@line 1032 "_json.c"
        var $315=($313) <= ($314); //@line 1032 "_json.c"
        if ($315) { __label__ = 17; break; } else { __label__ = 69; break; } //@line 1032 "_json.c"
      case 69: // $bb65_i
        var $316=$idx_addr_i50; //@line 1089 "_json.c"
        var $317=$end_idx_i54; //@line 1089 "_json.c"
        var $318=($316) > ($317); //@line 1089 "_json.c"
        if ($318) { __label__ = 71; break; } else { __label__ = 70; break; } //@line 1089 "_json.c"
      case 70: // $bb66_i
        var $319=$str_i53; //@line 1089 "_json.c"
        var $320=$idx_addr_i50; //@line 1089 "_json.c"
        var $321=$319+2*$320; //@line 1089 "_json.c"
        var $322=HEAP[$321]; //@line 1089 "_json.c"
        var $323=($322)!=125; //@line 1089 "_json.c"
        if ($323) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 1089 "_json.c"
      case 71: // $bb67_i
        var $324=$pystr_addr_i49; //@line 1090 "_json.c"
        var $325=$end_idx_i54; //@line 1090 "_json.c"
        _raise_errmsg(__str33, $324, $325); //@line 1090 "_json.c"
        __label__ = 87; break; //@line 1090 "_json.c"
      case 72: // $bb68_i
        var $326=$s_addr_i48; //@line 1095 "_json.c"
        var $327=$326+20; //@line 1095 "_json.c"
        var $328=HEAP[$327]; //@line 1095 "_json.c"
        var $329=($328)!=(__Py_NoneStruct); //@line 1095 "_json.c"
        if ($329) { __label__ = 73; break; } else { __label__ = 77; break; } //@line 1095 "_json.c"
      case 73: // $bb69_i
        var $330=$s_addr_i48; //@line 1096 "_json.c"
        var $331=$330+20; //@line 1096 "_json.c"
        var $332=HEAP[$331]; //@line 1096 "_json.c"
        var $333=$pairs_i; //@line 1096 "_json.c"
        var $334=_PyObject_CallFunctionObjArgs($332, $333, 0); //@line 1096 "_json.c"
        $val_i56=$334; //@line 1096 "_json.c"
        var $335=$val_i56; //@line 1097 "_json.c"
        var $336=($335)==0; //@line 1097 "_json.c"
        if ($336) { __label__ = 87; break; } else { __label__ = 74; break; } //@line 1097 "_json.c"
      case 74: // $bb70_i
        var $337=$pairs_i; //@line 1099 "_json.c"
        var $338=$337; //@line 1099 "_json.c"
        var $339=HEAP[$338]; //@line 1099 "_json.c"
        var $340=($339) - 1; //@line 1099 "_json.c"
        var $341=$pairs_i; //@line 1099 "_json.c"
        var $342=$341; //@line 1099 "_json.c"
        HEAP[$342]=$340; //@line 1099 "_json.c"
        var $343=$pairs_i; //@line 1099 "_json.c"
        var $344=$343; //@line 1099 "_json.c"
        var $345=HEAP[$344]; //@line 1099 "_json.c"
        var $346=($345)==0; //@line 1099 "_json.c"
        if ($346) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 1099 "_json.c"
      case 75: // $bb71_i
        var $347=$pairs_i; //@line 1099 "_json.c"
        var $348=$347+4; //@line 1099 "_json.c"
        var $349=HEAP[$348]; //@line 1099 "_json.c"
        var $350=$349+24; //@line 1099 "_json.c"
        var $351=HEAP[$350]; //@line 1099 "_json.c"
        var $352=$pairs_i; //@line 1099 "_json.c"
        FUNCTION_TABLE[$351]($352); //@line 1099 "_json.c"
        __label__ = 76; break; //@line 1099 "_json.c"
      case 76: // $bb72_i
        var $353=$idx_addr_i50; //@line 1100 "_json.c"
        var $354=($353) + 1; //@line 1100 "_json.c"
        var $355=$next_idx_ptr_addr_i51; //@line 1100 "_json.c"
        HEAP[$355]=$354; //@line 1100 "_json.c"
        var $356=$val_i56; //@line 1101 "_json.c"
        $0=$356; //@line 1101 "_json.c"
        __label__ = 97; break; //@line 1101 "_json.c"
      case 77: // $bb73_i
        var $357=$pairs_i; //@line 1104 "_json.c"
        var $358=_PyObject_CallFunctionObjArgs(_PyDict_Type, $357, 0); //@line 1104 "_json.c"
        $rval_i55=$358; //@line 1104 "_json.c"
        var $359=$rval_i55; //@line 1106 "_json.c"
        var $360=($359)==0; //@line 1106 "_json.c"
        if ($360) { __label__ = 87; break; } else { __label__ = 78; break; } //@line 1106 "_json.c"
      case 78: // $bb74_i
        var $361=$pairs_i; //@line 1108 "_json.c"
        var $362=($361)!=0; //@line 1108 "_json.c"
        if ($362) { __label__ = 79; break; } else { __label__ = 81; break; } //@line 1108 "_json.c"
      case 79: // $bb75_i
        var $363=$pairs_i; //@line 1108 "_json.c"
        $_py_tmp76_i=$363; //@line 1108 "_json.c"
        $pairs_i=0; //@line 1108 "_json.c"
        var $364=$_py_tmp76_i; //@line 1108 "_json.c"
        var $365=$364; //@line 1108 "_json.c"
        var $366=HEAP[$365]; //@line 1108 "_json.c"
        var $367=($366) - 1; //@line 1108 "_json.c"
        var $368=$_py_tmp76_i; //@line 1108 "_json.c"
        var $369=$368; //@line 1108 "_json.c"
        HEAP[$369]=$367; //@line 1108 "_json.c"
        var $370=$_py_tmp76_i; //@line 1108 "_json.c"
        var $371=$370; //@line 1108 "_json.c"
        var $372=HEAP[$371]; //@line 1108 "_json.c"
        var $373=($372)==0; //@line 1108 "_json.c"
        if ($373) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 1108 "_json.c"
      case 80: // $bb77_i
        var $374=$_py_tmp76_i; //@line 1108 "_json.c"
        var $375=$374+4; //@line 1108 "_json.c"
        var $376=HEAP[$375]; //@line 1108 "_json.c"
        var $377=$376+24; //@line 1108 "_json.c"
        var $378=HEAP[$377]; //@line 1108 "_json.c"
        var $379=$_py_tmp76_i; //@line 1108 "_json.c"
        FUNCTION_TABLE[$378]($379); //@line 1108 "_json.c"
        __label__ = 81; break; //@line 1108 "_json.c"
      case 81: // $bb78_i
        var $380=$s_addr_i48; //@line 1111 "_json.c"
        var $381=$380+16; //@line 1111 "_json.c"
        var $382=HEAP[$381]; //@line 1111 "_json.c"
        var $383=($382)!=(__Py_NoneStruct); //@line 1111 "_json.c"
        if ($383) { __label__ = 82; break; } else { __label__ = 86; break; } //@line 1111 "_json.c"
      case 82: // $bb79_i
        var $384=$s_addr_i48; //@line 1112 "_json.c"
        var $385=$384+16; //@line 1112 "_json.c"
        var $386=HEAP[$385]; //@line 1112 "_json.c"
        var $387=$rval_i55; //@line 1112 "_json.c"
        var $388=_PyObject_CallFunctionObjArgs($386, $387, 0); //@line 1112 "_json.c"
        $val_i56=$388; //@line 1112 "_json.c"
        var $389=$val_i56; //@line 1113 "_json.c"
        var $390=($389)==0; //@line 1113 "_json.c"
        if ($390) { __label__ = 87; break; } else { __label__ = 83; break; } //@line 1113 "_json.c"
      case 83: // $bb80_i
        var $391=$rval_i55; //@line 1115 "_json.c"
        var $392=$391; //@line 1115 "_json.c"
        var $393=HEAP[$392]; //@line 1115 "_json.c"
        var $394=($393) - 1; //@line 1115 "_json.c"
        var $395=$rval_i55; //@line 1115 "_json.c"
        var $396=$395; //@line 1115 "_json.c"
        HEAP[$396]=$394; //@line 1115 "_json.c"
        var $397=$rval_i55; //@line 1115 "_json.c"
        var $398=$397; //@line 1115 "_json.c"
        var $399=HEAP[$398]; //@line 1115 "_json.c"
        var $400=($399)==0; //@line 1115 "_json.c"
        if ($400) { __label__ = 84; break; } else { __label__ = 85; break; } //@line 1115 "_json.c"
      case 84: // $bb81_i
        var $401=$rval_i55; //@line 1115 "_json.c"
        var $402=$401+4; //@line 1115 "_json.c"
        var $403=HEAP[$402]; //@line 1115 "_json.c"
        var $404=$403+24; //@line 1115 "_json.c"
        var $405=HEAP[$404]; //@line 1115 "_json.c"
        var $406=$rval_i55; //@line 1115 "_json.c"
        FUNCTION_TABLE[$405]($406); //@line 1115 "_json.c"
        __label__ = 85; break; //@line 1115 "_json.c"
      case 85: // $bb82_i
        var $407=$val_i56; //@line 1116 "_json.c"
        $rval_i55=$407; //@line 1116 "_json.c"
        $val_i56=0; //@line 1117 "_json.c"
        __label__ = 86; break; //@line 1117 "_json.c"
      case 86: // $bb83_i
        var $408=$idx_addr_i50; //@line 1119 "_json.c"
        var $409=($408) + 1; //@line 1119 "_json.c"
        var $410=$next_idx_ptr_addr_i51; //@line 1119 "_json.c"
        HEAP[$410]=$409; //@line 1119 "_json.c"
        var $411=$rval_i55; //@line 1120 "_json.c"
        $0=$411; //@line 1120 "_json.c"
        __label__ = 97; break; //@line 1120 "_json.c"
      case 87: // $bail_i103
        var $_pr=$key_i;
        var $412=($_pr)!=0; //@line 1122 "_json.c"
        if ($412) { __label__ = 88; break; } else { __label__ = 90; break; } //@line 1122 "_json.c"
      case 88: // $bb84_i
        var $413=$key_i; //@line 1122 "_json.c"
        var $414=$413; //@line 1122 "_json.c"
        var $415=HEAP[$414]; //@line 1122 "_json.c"
        var $416=($415) - 1; //@line 1122 "_json.c"
        var $417=$key_i; //@line 1122 "_json.c"
        var $418=$417; //@line 1122 "_json.c"
        HEAP[$418]=$416; //@line 1122 "_json.c"
        var $419=$key_i; //@line 1122 "_json.c"
        var $420=$419; //@line 1122 "_json.c"
        var $421=HEAP[$420]; //@line 1122 "_json.c"
        var $422=($421)==0; //@line 1122 "_json.c"
        if ($422) { __label__ = 89; break; } else { __label__ = 90; break; } //@line 1122 "_json.c"
      case 89: // $bb85_i
        var $423=$key_i; //@line 1122 "_json.c"
        var $424=$423+4; //@line 1122 "_json.c"
        var $425=HEAP[$424]; //@line 1122 "_json.c"
        var $426=$425+24; //@line 1122 "_json.c"
        var $427=HEAP[$426]; //@line 1122 "_json.c"
        var $428=$key_i; //@line 1122 "_json.c"
        FUNCTION_TABLE[$427]($428); //@line 1122 "_json.c"
        __label__ = 90; break; //@line 1122 "_json.c"
      case 90: // $bb86_i
        var $429=$val_i56; //@line 1123 "_json.c"
        var $430=($429)!=0; //@line 1123 "_json.c"
        if ($430) { __label__ = 91; break; } else { __label__ = 93; break; } //@line 1123 "_json.c"
      case 91: // $bb87_i
        var $431=$val_i56; //@line 1123 "_json.c"
        var $432=$431; //@line 1123 "_json.c"
        var $433=HEAP[$432]; //@line 1123 "_json.c"
        var $434=($433) - 1; //@line 1123 "_json.c"
        var $435=$val_i56; //@line 1123 "_json.c"
        var $436=$435; //@line 1123 "_json.c"
        HEAP[$436]=$434; //@line 1123 "_json.c"
        var $437=$val_i56; //@line 1123 "_json.c"
        var $438=$437; //@line 1123 "_json.c"
        var $439=HEAP[$438]; //@line 1123 "_json.c"
        var $440=($439)==0; //@line 1123 "_json.c"
        if ($440) { __label__ = 92; break; } else { __label__ = 93; break; } //@line 1123 "_json.c"
      case 92: // $bb88_i
        var $441=$val_i56; //@line 1123 "_json.c"
        var $442=$441+4; //@line 1123 "_json.c"
        var $443=HEAP[$442]; //@line 1123 "_json.c"
        var $444=$443+24; //@line 1123 "_json.c"
        var $445=HEAP[$444]; //@line 1123 "_json.c"
        var $446=$val_i56; //@line 1123 "_json.c"
        FUNCTION_TABLE[$445]($446); //@line 1123 "_json.c"
        __label__ = 93; break; //@line 1123 "_json.c"
      case 93: // $bb89_i
        var $447=$pairs_i; //@line 1124 "_json.c"
        var $448=($447)!=0; //@line 1124 "_json.c"
        if ($448) { __label__ = 94; break; } else { __label__ = 96; break; } //@line 1124 "_json.c"
      case 94: // $bb90_i
        var $449=$pairs_i; //@line 1124 "_json.c"
        var $450=$449; //@line 1124 "_json.c"
        var $451=HEAP[$450]; //@line 1124 "_json.c"
        var $452=($451) - 1; //@line 1124 "_json.c"
        var $453=$pairs_i; //@line 1124 "_json.c"
        var $454=$453; //@line 1124 "_json.c"
        HEAP[$454]=$452; //@line 1124 "_json.c"
        var $455=$pairs_i; //@line 1124 "_json.c"
        var $456=$455; //@line 1124 "_json.c"
        var $457=HEAP[$456]; //@line 1124 "_json.c"
        var $458=($457)==0; //@line 1124 "_json.c"
        if ($458) { __label__ = 95; break; } else { __label__ = 96; break; } //@line 1124 "_json.c"
      case 95: // $bb91_i
        var $459=$pairs_i; //@line 1124 "_json.c"
        var $460=$459+4; //@line 1124 "_json.c"
        var $461=HEAP[$460]; //@line 1124 "_json.c"
        var $462=$461+24; //@line 1124 "_json.c"
        var $463=HEAP[$462]; //@line 1124 "_json.c"
        var $464=$pairs_i; //@line 1124 "_json.c"
        FUNCTION_TABLE[$463]($464); //@line 1124 "_json.c"
        __label__ = 96; break; //@line 1124 "_json.c"
      case 96: // $bb92_i
        $0=0; //@line 1125 "_json.c"
        __label__ = 97; break; //@line 1125 "_json.c"
      case 97: // $_parse_object_unicode_exit
        var $465=$0; //@line 1025 "_json.c"
        $retval_i52=$465; //@line 1025 "_json.c"
        var $retval94_i=$retval_i52; //@line 1025 "_json.c"
        $res=$retval94_i; //@line 1596 "_json.c"
        var $466=HEAP[__PyThreadState_Current]; //@line 1597 "_json.c"
        var $467=$466+12; //@line 1597 "_json.c"
        var $468=HEAP[$467]; //@line 1597 "_json.c"
        var $469=($468) - 1; //@line 1597 "_json.c"
        var $470=$466+12; //@line 1597 "_json.c"
        HEAP[$470]=$469; //@line 1597 "_json.c"
        var $471=$res; //@line 1598 "_json.c"
        $3=$471; //@line 1598 "_json.c"
        __label__ = 233; break; //@line 1598 "_json.c"
      case 98: // $bb7
        var $472=HEAP[__PyThreadState_Current]; //@line 1601 "_json.c"
        var $473=$472+12; //@line 1601 "_json.c"
        var $474=HEAP[$473]; //@line 1601 "_json.c"
        var $475=($474) + 1; //@line 1601 "_json.c"
        var $476=$472+12; //@line 1601 "_json.c"
        HEAP[$476]=$475; //@line 1601 "_json.c"
        var $477=$472+12; //@line 1601 "_json.c"
        var $478=HEAP[$477]; //@line 1601 "_json.c"
        var $479=HEAP[__Py_CheckRecursionLimit]; //@line 1601 "_json.c"
        var $480=($478) > ($479); //@line 1601 "_json.c"
        if ($480) { __label__ = 99; break; } else { __label__ = 101; break; } //@line 1601 "_json.c"
      case 99: // $bb8
        var $481=__Py_CheckRecursiveCall(__str40); //@line 1601 "_json.c"
        var $482=($481)!=0; //@line 1601 "_json.c"
        if ($482) { __label__ = 100; break; } else { __label__ = 101; break; } //@line 1601 "_json.c"
      case 100: // $bb9
        $3=0; //@line 1603 "_json.c"
        __label__ = 233; break; //@line 1603 "_json.c"
      case 101: // $bb10
        var $483=$idx_addr; //@line 1604 "_json.c"
        var $484=($483) + 1; //@line 1604 "_json.c"
        var $485=$s_addr; //@line 1604 "_json.c"
        var $486=$pystr_addr; //@line 1604 "_json.c"
        var $487=$next_idx_ptr_addr; //@line 1604 "_json.c"
        $s_addr_i1=$485;
        $pystr_addr_i2=$486;
        $idx_addr_i=$484;
        $next_idx_ptr_addr_i3=$487;
        var $488=$pystr_addr_i2; //@line 1204 "_json.c"
        var $489=$488; //@line 1204 "_json.c"
        var $490=$489+12; //@line 1204 "_json.c"
        var $491=HEAP[$490]; //@line 1204 "_json.c"
        $str_i5=$491; //@line 1204 "_json.c"
        var $492=$pystr_addr_i2; //@line 1205 "_json.c"
        var $493=$492; //@line 1205 "_json.c"
        var $494=$493+8; //@line 1205 "_json.c"
        var $495=HEAP[$494]; //@line 1205 "_json.c"
        var $496=($495) - 1; //@line 1205 "_json.c"
        $end_idx_i6=$496; //@line 1205 "_json.c"
        $val_i=0; //@line 1206 "_json.c"
        var $497=_PyList_New(0); //@line 1207 "_json.c"
        $rval_i7=$497; //@line 1207 "_json.c"
        var $498=($497)==0; //@line 1209 "_json.c"
        if ($498) { __label__ = 102; break; } else { __label__ = 104; break; } //@line 1209 "_json.c"
      case 102: // $bb_i8
        $1=0; //@line 1210 "_json.c"
        __label__ = 145; break; //@line 1210 "_json.c"
      case 103: // $bb2_i9
        var $499=$idx_addr_i; //@line 1213 "_json.c"
        var $500=($499) + 1; //@line 1213 "_json.c"
        $idx_addr_i=$500; //@line 1213 "_json.c"
        __label__ = 104; break; //@line 1213 "_json.c"
      case 104: // $bb3_i10
        var $501=$idx_addr_i; //@line 1213 "_json.c"
        var $502=$end_idx_i6; //@line 1213 "_json.c"
        var $503=($501) > ($502); //@line 1213 "_json.c"
        if ($503) { __label__ = 109; break; } else { __label__ = 105; break; } //@line 1213 "_json.c"
      case 105: // $bb4_i11
        var $504=$str_i5; //@line 1213 "_json.c"
        var $505=$idx_addr_i; //@line 1213 "_json.c"
        var $506=$504+2*$505; //@line 1213 "_json.c"
        var $507=HEAP[$506]; //@line 1213 "_json.c"
        var $508=($507)==32; //@line 1213 "_json.c"
        if ($508) { __label__ = 103; break; } else { __label__ = 106; break; } //@line 1213 "_json.c"
      case 106: // $bb5_i12
        var $509=$str_i5; //@line 1213 "_json.c"
        var $510=$idx_addr_i; //@line 1213 "_json.c"
        var $511=$509+2*$510; //@line 1213 "_json.c"
        var $512=HEAP[$511]; //@line 1213 "_json.c"
        var $513=($512)==9; //@line 1213 "_json.c"
        if ($513) { __label__ = 103; break; } else { __label__ = 107; break; } //@line 1213 "_json.c"
      case 107: // $bb6_i13
        var $514=$str_i5; //@line 1213 "_json.c"
        var $515=$idx_addr_i; //@line 1213 "_json.c"
        var $516=$514+2*$515; //@line 1213 "_json.c"
        var $517=HEAP[$516]; //@line 1213 "_json.c"
        var $518=($517)==10; //@line 1213 "_json.c"
        if ($518) { __label__ = 103; break; } else { __label__ = 108; break; } //@line 1213 "_json.c"
      case 108: // $bb7_i14
        var $519=$str_i5; //@line 1213 "_json.c"
        var $520=$idx_addr_i; //@line 1213 "_json.c"
        var $521=$519+2*$520; //@line 1213 "_json.c"
        var $522=HEAP[$521]; //@line 1213 "_json.c"
        var $523=($522)==13; //@line 1213 "_json.c"
        if ($523) { __label__ = 103; break; } else { __label__ = 109; break; } //@line 1213 "_json.c"
      case 109: // $bb8_i15
        var $524=$idx_addr_i; //@line 1216 "_json.c"
        var $525=$end_idx_i6; //@line 1216 "_json.c"
        var $526=($524) <= ($525); //@line 1216 "_json.c"
        if ($526) { __label__ = 110; break; } else { __label__ = 135; break; } //@line 1216 "_json.c"
      case 110: // $bb9_i
        var $527=$str_i5; //@line 1216 "_json.c"
        var $528=$idx_addr_i; //@line 1216 "_json.c"
        var $529=$527+2*$528; //@line 1216 "_json.c"
        var $530=HEAP[$529]; //@line 1216 "_json.c"
        var $531=($530)!=93; //@line 1216 "_json.c"
        if ($531) { __label__ = 134; break; } else { __label__ = 135; break; } //@line 1216 "_json.c"
      case 111: // $bb11_i16
        var $532=$s_addr_i1; //@line 1220 "_json.c"
        var $533=$pystr_addr_i2; //@line 1220 "_json.c"
        var $534=$idx_addr_i; //@line 1220 "_json.c"
        var $535=_scan_once_unicode($532, $533, $534, $next_idx_i); //@line 1220 "_json.c"
        $val_i=$535; //@line 1220 "_json.c"
        var $536=$val_i; //@line 1221 "_json.c"
        var $537=($536)==0; //@line 1221 "_json.c"
        if ($537) { __label__ = 142; break; } else { __label__ = 112; break; } //@line 1221 "_json.c"
      case 112: // $bb12_i17
        var $538=$rval_i7; //@line 1224 "_json.c"
        var $539=$val_i; //@line 1224 "_json.c"
        var $540=_PyList_Append($538, $539); //@line 1224 "_json.c"
        var $541=($540)==-1; //@line 1224 "_json.c"
        if ($541) { __label__ = 139; break; } else { __label__ = 113; break; } //@line 1224 "_json.c"
      case 113: // $bb13_i18
        var $542=$val_i; //@line 1227 "_json.c"
        var $543=($542)!=0; //@line 1227 "_json.c"
        if ($543) { __label__ = 114; break; } else { __label__ = 116; break; } //@line 1227 "_json.c"
      case 114: // $bb14_i19
        var $544=$val_i; //@line 1227 "_json.c"
        $_py_tmp_i=$544; //@line 1227 "_json.c"
        $val_i=0; //@line 1227 "_json.c"
        var $545=$_py_tmp_i; //@line 1227 "_json.c"
        var $546=$545; //@line 1227 "_json.c"
        var $547=HEAP[$546]; //@line 1227 "_json.c"
        var $548=($547) - 1; //@line 1227 "_json.c"
        var $549=$_py_tmp_i; //@line 1227 "_json.c"
        var $550=$549; //@line 1227 "_json.c"
        HEAP[$550]=$548; //@line 1227 "_json.c"
        var $551=$_py_tmp_i; //@line 1227 "_json.c"
        var $552=$551; //@line 1227 "_json.c"
        var $553=HEAP[$552]; //@line 1227 "_json.c"
        var $554=($553)==0; //@line 1227 "_json.c"
        if ($554) { __label__ = 115; break; } else { __label__ = 116; break; } //@line 1227 "_json.c"
      case 115: // $bb15_i20
        var $555=$_py_tmp_i; //@line 1227 "_json.c"
        var $556=$555+4; //@line 1227 "_json.c"
        var $557=HEAP[$556]; //@line 1227 "_json.c"
        var $558=$557+24; //@line 1227 "_json.c"
        var $559=HEAP[$558]; //@line 1227 "_json.c"
        var $560=$_py_tmp_i; //@line 1227 "_json.c"
        FUNCTION_TABLE[$559]($560); //@line 1227 "_json.c"
        __label__ = 116; break; //@line 1227 "_json.c"
      case 116: // $bb16_i21
        var $561=HEAP[$next_idx_i]; //@line 1228 "_json.c"
        $idx_addr_i=$561; //@line 1228 "_json.c"
        __label__ = 118; break; //@line 1228 "_json.c"
      case 117: // $bb17_i22
        var $562=$idx_addr_i; //@line 1231 "_json.c"
        var $563=($562) + 1; //@line 1231 "_json.c"
        $idx_addr_i=$563; //@line 1231 "_json.c"
        __label__ = 118; break; //@line 1231 "_json.c"
      case 118: // $bb18_i23
        var $564=$idx_addr_i; //@line 1231 "_json.c"
        var $565=$end_idx_i6; //@line 1231 "_json.c"
        var $566=($564) > ($565); //@line 1231 "_json.c"
        if ($566) { __label__ = 123; break; } else { __label__ = 119; break; } //@line 1231 "_json.c"
      case 119: // $bb19_i24
        var $567=$str_i5; //@line 1231 "_json.c"
        var $568=$idx_addr_i; //@line 1231 "_json.c"
        var $569=$567+2*$568; //@line 1231 "_json.c"
        var $570=HEAP[$569]; //@line 1231 "_json.c"
        var $571=($570)==32; //@line 1231 "_json.c"
        if ($571) { __label__ = 117; break; } else { __label__ = 120; break; } //@line 1231 "_json.c"
      case 120: // $bb20_i25
        var $572=$str_i5; //@line 1231 "_json.c"
        var $573=$idx_addr_i; //@line 1231 "_json.c"
        var $574=$572+2*$573; //@line 1231 "_json.c"
        var $575=HEAP[$574]; //@line 1231 "_json.c"
        var $576=($575)==9; //@line 1231 "_json.c"
        if ($576) { __label__ = 117; break; } else { __label__ = 121; break; } //@line 1231 "_json.c"
      case 121: // $bb21_i26
        var $577=$str_i5; //@line 1231 "_json.c"
        var $578=$idx_addr_i; //@line 1231 "_json.c"
        var $579=$577+2*$578; //@line 1231 "_json.c"
        var $580=HEAP[$579]; //@line 1231 "_json.c"
        var $581=($580)==10; //@line 1231 "_json.c"
        if ($581) { __label__ = 117; break; } else { __label__ = 122; break; } //@line 1231 "_json.c"
      case 122: // $bb22_i27
        var $582=$str_i5; //@line 1231 "_json.c"
        var $583=$idx_addr_i; //@line 1231 "_json.c"
        var $584=$582+2*$583; //@line 1231 "_json.c"
        var $585=HEAP[$584]; //@line 1231 "_json.c"
        var $586=($585)==13; //@line 1231 "_json.c"
        if ($586) { __label__ = 117; break; } else { __label__ = 123; break; } //@line 1231 "_json.c"
      case 123: // $bb23_i28
        var $587=$idx_addr_i; //@line 1234 "_json.c"
        var $588=$end_idx_i6; //@line 1234 "_json.c"
        var $589=($587) > ($588); //@line 1234 "_json.c"
        if ($589) { __label__ = 135; break; } else { __label__ = 124; break; } //@line 1234 "_json.c"
      case 124: // $bb24_i29
        var $590=$str_i5; //@line 1235 "_json.c"
        var $591=$idx_addr_i; //@line 1235 "_json.c"
        var $592=$590+2*$591; //@line 1235 "_json.c"
        var $593=HEAP[$592]; //@line 1235 "_json.c"
        var $594=($593)==93; //@line 1235 "_json.c"
        if ($594) { __label__ = 135; break; } else { __label__ = 125; break; } //@line 1235 "_json.c"
      case 125: // $bb25_i30
        var $595=$str_i5; //@line 1238 "_json.c"
        var $596=$idx_addr_i; //@line 1238 "_json.c"
        var $597=$595+2*$596; //@line 1238 "_json.c"
        var $598=HEAP[$597]; //@line 1238 "_json.c"
        var $599=($598)!=44; //@line 1238 "_json.c"
        if ($599) { __label__ = 126; break; } else { __label__ = 127; break; } //@line 1238 "_json.c"
      case 126: // $bb26_i31
        var $600=$pystr_addr_i2; //@line 1239 "_json.c"
        var $601=$idx_addr_i; //@line 1239 "_json.c"
        _raise_errmsg(__str32, $600, $601); //@line 1239 "_json.c"
        __label__ = 139; break; //@line 1239 "_json.c"
      case 127: // $bb27_i32
        var $602=$idx_addr_i; //@line 1242 "_json.c"
        var $603=($602) + 1; //@line 1242 "_json.c"
        $idx_addr_i=$603; //@line 1242 "_json.c"
        __label__ = 129; break; //@line 1242 "_json.c"
      case 128: // $bb28_i33
        var $604=$idx_addr_i; //@line 1245 "_json.c"
        var $605=($604) + 1; //@line 1245 "_json.c"
        $idx_addr_i=$605; //@line 1245 "_json.c"
        __label__ = 129; break; //@line 1245 "_json.c"
      case 129: // $bb29_i
        var $606=$idx_addr_i; //@line 1245 "_json.c"
        var $607=$end_idx_i6; //@line 1245 "_json.c"
        var $608=($606) > ($607); //@line 1245 "_json.c"
        if ($608) { __label__ = 134; break; } else { __label__ = 130; break; } //@line 1245 "_json.c"
      case 130: // $bb30_i34
        var $609=$str_i5; //@line 1245 "_json.c"
        var $610=$idx_addr_i; //@line 1245 "_json.c"
        var $611=$609+2*$610; //@line 1245 "_json.c"
        var $612=HEAP[$611]; //@line 1245 "_json.c"
        var $613=($612)==32; //@line 1245 "_json.c"
        if ($613) { __label__ = 128; break; } else { __label__ = 131; break; } //@line 1245 "_json.c"
      case 131: // $bb31_i35
        var $614=$str_i5; //@line 1245 "_json.c"
        var $615=$idx_addr_i; //@line 1245 "_json.c"
        var $616=$614+2*$615; //@line 1245 "_json.c"
        var $617=HEAP[$616]; //@line 1245 "_json.c"
        var $618=($617)==9; //@line 1245 "_json.c"
        if ($618) { __label__ = 128; break; } else { __label__ = 132; break; } //@line 1245 "_json.c"
      case 132: // $bb32_i36
        var $619=$str_i5; //@line 1245 "_json.c"
        var $620=$idx_addr_i; //@line 1245 "_json.c"
        var $621=$619+2*$620; //@line 1245 "_json.c"
        var $622=HEAP[$621]; //@line 1245 "_json.c"
        var $623=($622)==10; //@line 1245 "_json.c"
        if ($623) { __label__ = 128; break; } else { __label__ = 133; break; } //@line 1245 "_json.c"
      case 133: // $bb33_i37
        var $624=$str_i5; //@line 1245 "_json.c"
        var $625=$idx_addr_i; //@line 1245 "_json.c"
        var $626=$624+2*$625; //@line 1245 "_json.c"
        var $627=HEAP[$626]; //@line 1245 "_json.c"
        var $628=($627)==13; //@line 1245 "_json.c"
        if ($628) { __label__ = 128; break; } else { __label__ = 134; break; } //@line 1245 "_json.c"
      case 134: // $bb34_i38
        var $629=$idx_addr_i; //@line 1217 "_json.c"
        var $630=$end_idx_i6; //@line 1217 "_json.c"
        var $631=($629) <= ($630); //@line 1217 "_json.c"
        if ($631) { __label__ = 111; break; } else { __label__ = 135; break; } //@line 1217 "_json.c"
      case 135: // $bb35_i39
        var $632=$idx_addr_i; //@line 1250 "_json.c"
        var $633=$end_idx_i6; //@line 1250 "_json.c"
        var $634=($632) > ($633); //@line 1250 "_json.c"
        if ($634) { __label__ = 137; break; } else { __label__ = 136; break; } //@line 1250 "_json.c"
      case 136: // $bb36_i40
        var $635=$str_i5; //@line 1250 "_json.c"
        var $636=$idx_addr_i; //@line 1250 "_json.c"
        var $637=$635+2*$636; //@line 1250 "_json.c"
        var $638=HEAP[$637]; //@line 1250 "_json.c"
        var $639=($638)!=93; //@line 1250 "_json.c"
        if ($639) { __label__ = 137; break; } else { __label__ = 138; break; } //@line 1250 "_json.c"
      case 137: // $bb37_i41
        var $640=$pystr_addr_i2; //@line 1251 "_json.c"
        var $641=$end_idx_i6; //@line 1251 "_json.c"
        _raise_errmsg(__str33, $640, $641); //@line 1251 "_json.c"
        __label__ = 139; break; //@line 1251 "_json.c"
      case 138: // $bb38_i42
        var $642=$idx_addr_i; //@line 1254 "_json.c"
        var $643=($642) + 1; //@line 1254 "_json.c"
        var $644=$next_idx_ptr_addr_i3; //@line 1254 "_json.c"
        HEAP[$644]=$643; //@line 1254 "_json.c"
        var $645=$rval_i7; //@line 1255 "_json.c"
        $1=$645; //@line 1255 "_json.c"
        __label__ = 145; break; //@line 1255 "_json.c"
      case 139: // $bail_i
        var $_pr104=$val_i;
        var $646=($_pr104)!=0; //@line 1257 "_json.c"
        if ($646) { __label__ = 140; break; } else { __label__ = 142; break; } //@line 1257 "_json.c"
      case 140: // $bb39_i43
        var $647=$val_i; //@line 1257 "_json.c"
        var $648=$647; //@line 1257 "_json.c"
        var $649=HEAP[$648]; //@line 1257 "_json.c"
        var $650=($649) - 1; //@line 1257 "_json.c"
        var $651=$val_i; //@line 1257 "_json.c"
        var $652=$651; //@line 1257 "_json.c"
        HEAP[$652]=$650; //@line 1257 "_json.c"
        var $653=$val_i; //@line 1257 "_json.c"
        var $654=$653; //@line 1257 "_json.c"
        var $655=HEAP[$654]; //@line 1257 "_json.c"
        var $656=($655)==0; //@line 1257 "_json.c"
        if ($656) { __label__ = 141; break; } else { __label__ = 142; break; } //@line 1257 "_json.c"
      case 141: // $bb40_i44
        var $657=$val_i; //@line 1257 "_json.c"
        var $658=$657+4; //@line 1257 "_json.c"
        var $659=HEAP[$658]; //@line 1257 "_json.c"
        var $660=$659+24; //@line 1257 "_json.c"
        var $661=HEAP[$660]; //@line 1257 "_json.c"
        var $662=$val_i; //@line 1257 "_json.c"
        FUNCTION_TABLE[$661]($662); //@line 1257 "_json.c"
        __label__ = 142; break; //@line 1257 "_json.c"
      case 142: // $bb41_i45
        var $663=$rval_i7; //@line 1258 "_json.c"
        var $664=$663; //@line 1258 "_json.c"
        var $665=HEAP[$664]; //@line 1258 "_json.c"
        var $666=($665) - 1; //@line 1258 "_json.c"
        var $667=$rval_i7; //@line 1258 "_json.c"
        var $668=$667; //@line 1258 "_json.c"
        HEAP[$668]=$666; //@line 1258 "_json.c"
        var $669=$rval_i7; //@line 1258 "_json.c"
        var $670=$669; //@line 1258 "_json.c"
        var $671=HEAP[$670]; //@line 1258 "_json.c"
        var $672=($671)==0; //@line 1258 "_json.c"
        if ($672) { __label__ = 143; break; } else { __label__ = 144; break; } //@line 1258 "_json.c"
      case 143: // $bb42_i46
        var $673=$rval_i7; //@line 1258 "_json.c"
        var $674=$673+4; //@line 1258 "_json.c"
        var $675=HEAP[$674]; //@line 1258 "_json.c"
        var $676=$675+24; //@line 1258 "_json.c"
        var $677=HEAP[$676]; //@line 1258 "_json.c"
        var $678=$rval_i7; //@line 1258 "_json.c"
        FUNCTION_TABLE[$677]($678); //@line 1258 "_json.c"
        __label__ = 144; break; //@line 1258 "_json.c"
      case 144: // $bb43_i47
        $1=0; //@line 1259 "_json.c"
        __label__ = 145; break; //@line 1259 "_json.c"
      case 145: // $_parse_array_unicode_exit
        var $679=$1; //@line 1210 "_json.c"
        $retval_i4=$679; //@line 1210 "_json.c"
        var $retval45_i=$retval_i4; //@line 1210 "_json.c"
        $res=$retval45_i; //@line 1604 "_json.c"
        var $680=HEAP[__PyThreadState_Current]; //@line 1605 "_json.c"
        var $681=$680+12; //@line 1605 "_json.c"
        var $682=HEAP[$681]; //@line 1605 "_json.c"
        var $683=($682) - 1; //@line 1605 "_json.c"
        var $684=$680+12; //@line 1605 "_json.c"
        HEAP[$684]=$683; //@line 1605 "_json.c"
        var $685=$res; //@line 1606 "_json.c"
        $3=$685; //@line 1606 "_json.c"
        __label__ = 233; break; //@line 1606 "_json.c"
      case 146: // $bb11
        var $686=$idx_addr; //@line 1609 "_json.c"
        var $687=($686) + 3; //@line 1609 "_json.c"
        var $688=$length; //@line 1609 "_json.c"
        var $689=($687) < ($688); //@line 1609 "_json.c"
        if ($689) { __label__ = 147; break; } else { __label__ = 185; break; } //@line 1609 "_json.c"
      case 147: // $bb12
        var $690=$idx_addr; //@line 1609 "_json.c"
        var $691=($690) + 1; //@line 1609 "_json.c"
        var $692=$str; //@line 1609 "_json.c"
        var $693=$692+2*$691; //@line 1609 "_json.c"
        var $694=HEAP[$693]; //@line 1609 "_json.c"
        var $695=($694)==117; //@line 1609 "_json.c"
        if ($695) { __label__ = 148; break; } else { __label__ = 185; break; } //@line 1609 "_json.c"
      case 148: // $bb13
        var $696=$idx_addr; //@line 1609 "_json.c"
        var $697=($696) + 2; //@line 1609 "_json.c"
        var $698=$str; //@line 1609 "_json.c"
        var $699=$698+2*$697; //@line 1609 "_json.c"
        var $700=HEAP[$699]; //@line 1609 "_json.c"
        var $701=($700)==108; //@line 1609 "_json.c"
        if ($701) { __label__ = 149; break; } else { __label__ = 185; break; } //@line 1609 "_json.c"
      case 149: // $bb14
        var $702=$idx_addr; //@line 1609 "_json.c"
        var $703=($702) + 3; //@line 1609 "_json.c"
        var $704=$str; //@line 1609 "_json.c"
        var $705=$704+2*$703; //@line 1609 "_json.c"
        var $706=HEAP[$705]; //@line 1609 "_json.c"
        var $707=($706)==108; //@line 1609 "_json.c"
        if ($707) { __label__ = 150; break; } else { __label__ = 185; break; } //@line 1609 "_json.c"
      case 150: // $bb15
        var $708=HEAP[__Py_NoneStruct]; //@line 1610 "_json.c"
        var $709=($708) + 1; //@line 1610 "_json.c"
        HEAP[__Py_NoneStruct]=$709; //@line 1610 "_json.c"
        var $710=$idx_addr; //@line 1611 "_json.c"
        var $711=($710) + 4; //@line 1611 "_json.c"
        var $712=$next_idx_ptr_addr; //@line 1611 "_json.c"
        HEAP[$712]=$711; //@line 1611 "_json.c"
        $3=__Py_NoneStruct; //@line 1612 "_json.c"
        __label__ = 233; break; //@line 1612 "_json.c"
      case 151: // $bb17
        var $713=$idx_addr; //@line 1617 "_json.c"
        var $714=($713) + 3; //@line 1617 "_json.c"
        var $715=$length; //@line 1617 "_json.c"
        var $716=($714) < ($715); //@line 1617 "_json.c"
        if ($716) { __label__ = 152; break; } else { __label__ = 185; break; } //@line 1617 "_json.c"
      case 152: // $bb18
        var $717=$idx_addr; //@line 1617 "_json.c"
        var $718=($717) + 1; //@line 1617 "_json.c"
        var $719=$str; //@line 1617 "_json.c"
        var $720=$719+2*$718; //@line 1617 "_json.c"
        var $721=HEAP[$720]; //@line 1617 "_json.c"
        var $722=($721)==114; //@line 1617 "_json.c"
        if ($722) { __label__ = 153; break; } else { __label__ = 185; break; } //@line 1617 "_json.c"
      case 153: // $bb19
        var $723=$idx_addr; //@line 1617 "_json.c"
        var $724=($723) + 2; //@line 1617 "_json.c"
        var $725=$str; //@line 1617 "_json.c"
        var $726=$725+2*$724; //@line 1617 "_json.c"
        var $727=HEAP[$726]; //@line 1617 "_json.c"
        var $728=($727)==117; //@line 1617 "_json.c"
        if ($728) { __label__ = 154; break; } else { __label__ = 185; break; } //@line 1617 "_json.c"
      case 154: // $bb20
        var $729=$idx_addr; //@line 1617 "_json.c"
        var $730=($729) + 3; //@line 1617 "_json.c"
        var $731=$str; //@line 1617 "_json.c"
        var $732=$731+2*$730; //@line 1617 "_json.c"
        var $733=HEAP[$732]; //@line 1617 "_json.c"
        var $734=($733)==101; //@line 1617 "_json.c"
        if ($734) { __label__ = 155; break; } else { __label__ = 185; break; } //@line 1617 "_json.c"
      case 155: // $bb21
        var $735=HEAP[__Py_TrueStruct]; //@line 1618 "_json.c"
        var $736=($735) + 1; //@line 1618 "_json.c"
        HEAP[__Py_TrueStruct]=$736; //@line 1618 "_json.c"
        var $737=$idx_addr; //@line 1619 "_json.c"
        var $738=($737) + 4; //@line 1619 "_json.c"
        var $739=$next_idx_ptr_addr; //@line 1619 "_json.c"
        HEAP[$739]=$738; //@line 1619 "_json.c"
        $3=__Py_TrueStruct; //@line 1620 "_json.c"
        __label__ = 233; break; //@line 1620 "_json.c"
      case 156: // $bb23
        var $740=$idx_addr; //@line 1625 "_json.c"
        var $741=($740) + 4; //@line 1625 "_json.c"
        var $742=$length; //@line 1625 "_json.c"
        var $743=($741) < ($742); //@line 1625 "_json.c"
        if ($743) { __label__ = 157; break; } else { __label__ = 185; break; } //@line 1625 "_json.c"
      case 157: // $bb24
        var $744=$idx_addr; //@line 1625 "_json.c"
        var $745=($744) + 1; //@line 1625 "_json.c"
        var $746=$str; //@line 1625 "_json.c"
        var $747=$746+2*$745; //@line 1625 "_json.c"
        var $748=HEAP[$747]; //@line 1625 "_json.c"
        var $749=($748)==97; //@line 1625 "_json.c"
        if ($749) { __label__ = 158; break; } else { __label__ = 185; break; } //@line 1625 "_json.c"
      case 158: // $bb25
        var $750=$idx_addr; //@line 1625 "_json.c"
        var $751=($750) + 2; //@line 1625 "_json.c"
        var $752=$str; //@line 1625 "_json.c"
        var $753=$752+2*$751; //@line 1625 "_json.c"
        var $754=HEAP[$753]; //@line 1625 "_json.c"
        var $755=($754)==108; //@line 1625 "_json.c"
        if ($755) { __label__ = 159; break; } else { __label__ = 185; break; } //@line 1625 "_json.c"
      case 159: // $bb26
        var $756=$idx_addr; //@line 1625 "_json.c"
        var $757=($756) + 3; //@line 1625 "_json.c"
        var $758=$str; //@line 1625 "_json.c"
        var $759=$758+2*$757; //@line 1625 "_json.c"
        var $760=HEAP[$759]; //@line 1625 "_json.c"
        var $761=($760)==115; //@line 1625 "_json.c"
        if ($761) { __label__ = 160; break; } else { __label__ = 185; break; } //@line 1625 "_json.c"
      case 160: // $bb27
        var $762=$idx_addr; //@line 1625 "_json.c"
        var $763=($762) + 4; //@line 1625 "_json.c"
        var $764=$str; //@line 1625 "_json.c"
        var $765=$764+2*$763; //@line 1625 "_json.c"
        var $766=HEAP[$765]; //@line 1625 "_json.c"
        var $767=($766)==101; //@line 1625 "_json.c"
        if ($767) { __label__ = 161; break; } else { __label__ = 185; break; } //@line 1625 "_json.c"
      case 161: // $bb28
        var $768=HEAP[__Py_ZeroStruct]; //@line 1626 "_json.c"
        var $769=($768) + 1; //@line 1626 "_json.c"
        HEAP[__Py_ZeroStruct]=$769; //@line 1626 "_json.c"
        var $770=$idx_addr; //@line 1627 "_json.c"
        var $771=($770) + 5; //@line 1627 "_json.c"
        var $772=$next_idx_ptr_addr; //@line 1627 "_json.c"
        HEAP[$772]=$771; //@line 1627 "_json.c"
        $3=__Py_ZeroStruct; //@line 1628 "_json.c"
        __label__ = 233; break; //@line 1628 "_json.c"
      case 162: // $bb30
        var $773=$idx_addr; //@line 1633 "_json.c"
        var $774=($773) + 2; //@line 1633 "_json.c"
        var $775=$length; //@line 1633 "_json.c"
        var $776=($774) < ($775); //@line 1633 "_json.c"
        if ($776) { __label__ = 163; break; } else { __label__ = 185; break; } //@line 1633 "_json.c"
      case 163: // $bb31
        var $777=$idx_addr; //@line 1633 "_json.c"
        var $778=($777) + 1; //@line 1633 "_json.c"
        var $779=$str; //@line 1633 "_json.c"
        var $780=$779+2*$778; //@line 1633 "_json.c"
        var $781=HEAP[$780]; //@line 1633 "_json.c"
        var $782=($781)==97; //@line 1633 "_json.c"
        if ($782) { __label__ = 164; break; } else { __label__ = 185; break; } //@line 1633 "_json.c"
      case 164: // $bb32
        var $783=$idx_addr; //@line 1633 "_json.c"
        var $784=($783) + 2; //@line 1633 "_json.c"
        var $785=$str; //@line 1633 "_json.c"
        var $786=$785+2*$784; //@line 1633 "_json.c"
        var $787=HEAP[$786]; //@line 1633 "_json.c"
        var $788=($787)==78; //@line 1633 "_json.c"
        if ($788) { __label__ = 165; break; } else { __label__ = 185; break; } //@line 1633 "_json.c"
      case 165: // $bb33
        var $789=$s_addr; //@line 1634 "_json.c"
        var $790=$idx_addr; //@line 1634 "_json.c"
        var $791=$next_idx_ptr_addr; //@line 1634 "_json.c"
        var $792=__parse_constant($789, __str36, $790, $791); //@line 1634 "_json.c"
        $3=$792; //@line 1634 "_json.c"
        __label__ = 233; break; //@line 1634 "_json.c"
      case 166: // $bb35
        var $793=$idx_addr; //@line 1639 "_json.c"
        var $794=($793) + 7; //@line 1639 "_json.c"
        var $795=$length; //@line 1639 "_json.c"
        var $796=($794) < ($795); //@line 1639 "_json.c"
        if ($796) { __label__ = 167; break; } else { __label__ = 185; break; } //@line 1639 "_json.c"
      case 167: // $bb36
        var $797=$idx_addr; //@line 1639 "_json.c"
        var $798=($797) + 1; //@line 1639 "_json.c"
        var $799=$str; //@line 1639 "_json.c"
        var $800=$799+2*$798; //@line 1639 "_json.c"
        var $801=HEAP[$800]; //@line 1639 "_json.c"
        var $802=($801)==110; //@line 1639 "_json.c"
        if ($802) { __label__ = 168; break; } else { __label__ = 185; break; } //@line 1639 "_json.c"
      case 168: // $bb37
        var $803=$idx_addr; //@line 1639 "_json.c"
        var $804=($803) + 2; //@line 1639 "_json.c"
        var $805=$str; //@line 1639 "_json.c"
        var $806=$805+2*$804; //@line 1639 "_json.c"
        var $807=HEAP[$806]; //@line 1639 "_json.c"
        var $808=($807)==102; //@line 1639 "_json.c"
        if ($808) { __label__ = 169; break; } else { __label__ = 185; break; } //@line 1639 "_json.c"
      case 169: // $bb38
        var $809=$idx_addr; //@line 1639 "_json.c"
        var $810=($809) + 3; //@line 1639 "_json.c"
        var $811=$str; //@line 1639 "_json.c"
        var $812=$811+2*$810; //@line 1639 "_json.c"
        var $813=HEAP[$812]; //@line 1639 "_json.c"
        var $814=($813)==105; //@line 1639 "_json.c"
        if ($814) { __label__ = 170; break; } else { __label__ = 185; break; } //@line 1639 "_json.c"
      case 170: // $bb39
        var $815=$idx_addr; //@line 1639 "_json.c"
        var $816=($815) + 4; //@line 1639 "_json.c"
        var $817=$str; //@line 1639 "_json.c"
        var $818=$817+2*$816; //@line 1639 "_json.c"
        var $819=HEAP[$818]; //@line 1639 "_json.c"
        var $820=($819)==110; //@line 1639 "_json.c"
        if ($820) { __label__ = 171; break; } else { __label__ = 185; break; } //@line 1639 "_json.c"
      case 171: // $bb40
        var $821=$idx_addr; //@line 1639 "_json.c"
        var $822=($821) + 5; //@line 1639 "_json.c"
        var $823=$str; //@line 1639 "_json.c"
        var $824=$823+2*$822; //@line 1639 "_json.c"
        var $825=HEAP[$824]; //@line 1639 "_json.c"
        var $826=($825)==105; //@line 1639 "_json.c"
        if ($826) { __label__ = 172; break; } else { __label__ = 185; break; } //@line 1639 "_json.c"
      case 172: // $bb41
        var $827=$idx_addr; //@line 1639 "_json.c"
        var $828=($827) + 6; //@line 1639 "_json.c"
        var $829=$str; //@line 1639 "_json.c"
        var $830=$829+2*$828; //@line 1639 "_json.c"
        var $831=HEAP[$830]; //@line 1639 "_json.c"
        var $832=($831)==116; //@line 1639 "_json.c"
        if ($832) { __label__ = 173; break; } else { __label__ = 185; break; } //@line 1639 "_json.c"
      case 173: // $bb42
        var $833=$idx_addr; //@line 1639 "_json.c"
        var $834=($833) + 7; //@line 1639 "_json.c"
        var $835=$str; //@line 1639 "_json.c"
        var $836=$835+2*$834; //@line 1639 "_json.c"
        var $837=HEAP[$836]; //@line 1639 "_json.c"
        var $838=($837)==121; //@line 1639 "_json.c"
        if ($838) { __label__ = 174; break; } else { __label__ = 185; break; } //@line 1639 "_json.c"
      case 174: // $bb43
        var $839=$s_addr; //@line 1640 "_json.c"
        var $840=$idx_addr; //@line 1640 "_json.c"
        var $841=$next_idx_ptr_addr; //@line 1640 "_json.c"
        var $842=__parse_constant($839, __str37, $840, $841); //@line 1640 "_json.c"
        $3=$842; //@line 1640 "_json.c"
        __label__ = 233; break; //@line 1640 "_json.c"
      case 175: // $bb45
        var $843=$idx_addr; //@line 1645 "_json.c"
        var $844=($843) + 8; //@line 1645 "_json.c"
        var $845=$length; //@line 1645 "_json.c"
        var $846=($844) < ($845); //@line 1645 "_json.c"
        if ($846) { __label__ = 176; break; } else { __label__ = 185; break; } //@line 1645 "_json.c"
      case 176: // $bb46
        var $847=$idx_addr; //@line 1645 "_json.c"
        var $848=($847) + 1; //@line 1645 "_json.c"
        var $849=$str; //@line 1645 "_json.c"
        var $850=$849+2*$848; //@line 1645 "_json.c"
        var $851=HEAP[$850]; //@line 1645 "_json.c"
        var $852=($851)==73; //@line 1645 "_json.c"
        if ($852) { __label__ = 177; break; } else { __label__ = 185; break; } //@line 1645 "_json.c"
      case 177: // $bb47
        var $853=$idx_addr; //@line 1645 "_json.c"
        var $854=($853) + 2; //@line 1645 "_json.c"
        var $855=$str; //@line 1645 "_json.c"
        var $856=$855+2*$854; //@line 1645 "_json.c"
        var $857=HEAP[$856]; //@line 1645 "_json.c"
        var $858=($857)==110; //@line 1645 "_json.c"
        if ($858) { __label__ = 178; break; } else { __label__ = 185; break; } //@line 1645 "_json.c"
      case 178: // $bb48
        var $859=$idx_addr; //@line 1645 "_json.c"
        var $860=($859) + 3; //@line 1645 "_json.c"
        var $861=$str; //@line 1645 "_json.c"
        var $862=$861+2*$860; //@line 1645 "_json.c"
        var $863=HEAP[$862]; //@line 1645 "_json.c"
        var $864=($863)==102; //@line 1645 "_json.c"
        if ($864) { __label__ = 179; break; } else { __label__ = 185; break; } //@line 1645 "_json.c"
      case 179: // $bb49
        var $865=$idx_addr; //@line 1645 "_json.c"
        var $866=($865) + 4; //@line 1645 "_json.c"
        var $867=$str; //@line 1645 "_json.c"
        var $868=$867+2*$866; //@line 1645 "_json.c"
        var $869=HEAP[$868]; //@line 1645 "_json.c"
        var $870=($869)==105; //@line 1645 "_json.c"
        if ($870) { __label__ = 180; break; } else { __label__ = 185; break; } //@line 1645 "_json.c"
      case 180: // $bb50
        var $871=$idx_addr; //@line 1645 "_json.c"
        var $872=($871) + 5; //@line 1645 "_json.c"
        var $873=$str; //@line 1645 "_json.c"
        var $874=$873+2*$872; //@line 1645 "_json.c"
        var $875=HEAP[$874]; //@line 1645 "_json.c"
        var $876=($875)==110; //@line 1645 "_json.c"
        if ($876) { __label__ = 181; break; } else { __label__ = 185; break; } //@line 1645 "_json.c"
      case 181: // $bb51
        var $877=$idx_addr; //@line 1645 "_json.c"
        var $878=($877) + 6; //@line 1645 "_json.c"
        var $879=$str; //@line 1645 "_json.c"
        var $880=$879+2*$878; //@line 1645 "_json.c"
        var $881=HEAP[$880]; //@line 1645 "_json.c"
        var $882=($881)==105; //@line 1645 "_json.c"
        if ($882) { __label__ = 182; break; } else { __label__ = 185; break; } //@line 1645 "_json.c"
      case 182: // $bb52
        var $883=$idx_addr; //@line 1645 "_json.c"
        var $884=($883) + 7; //@line 1645 "_json.c"
        var $885=$str; //@line 1645 "_json.c"
        var $886=$885+2*$884; //@line 1645 "_json.c"
        var $887=HEAP[$886]; //@line 1645 "_json.c"
        var $888=($887)==116; //@line 1645 "_json.c"
        if ($888) { __label__ = 183; break; } else { __label__ = 185; break; } //@line 1645 "_json.c"
      case 183: // $bb53
        var $889=$idx_addr; //@line 1645 "_json.c"
        var $890=($889) + 8; //@line 1645 "_json.c"
        var $891=$str; //@line 1645 "_json.c"
        var $892=$891+2*$890; //@line 1645 "_json.c"
        var $893=HEAP[$892]; //@line 1645 "_json.c"
        var $894=($893)==121; //@line 1645 "_json.c"
        if ($894) { __label__ = 184; break; } else { __label__ = 185; break; } //@line 1645 "_json.c"
      case 184: // $bb54
        var $895=$s_addr; //@line 1646 "_json.c"
        var $896=$idx_addr; //@line 1646 "_json.c"
        var $897=$next_idx_ptr_addr; //@line 1646 "_json.c"
        var $898=__parse_constant($895, __str38, $896, $897); //@line 1646 "_json.c"
        $3=$898; //@line 1646 "_json.c"
        __label__ = 233; break; //@line 1646 "_json.c"
      case 185: // $bb55
        var $899=$s_addr; //@line 1651 "_json.c"
        var $900=$pystr_addr; //@line 1651 "_json.c"
        var $901=$idx_addr; //@line 1651 "_json.c"
        var $902=$next_idx_ptr_addr; //@line 1651 "_json.c"
        $s_addr_i=$899;
        $pystr_addr_i=$900;
        $start_addr_i=$901;
        $next_idx_ptr_addr_i=$902;
        var $903=$pystr_addr_i; //@line 1401 "_json.c"
        var $904=$903; //@line 1401 "_json.c"
        var $905=$904+12; //@line 1401 "_json.c"
        var $906=HEAP[$905]; //@line 1401 "_json.c"
        $str_i=$906; //@line 1401 "_json.c"
        var $907=$pystr_addr_i; //@line 1402 "_json.c"
        var $908=$907; //@line 1402 "_json.c"
        var $909=$908+8; //@line 1402 "_json.c"
        var $910=HEAP[$909]; //@line 1402 "_json.c"
        var $911=($910) - 1; //@line 1402 "_json.c"
        $end_idx_i=$911; //@line 1402 "_json.c"
        var $912=$start_addr_i; //@line 1403 "_json.c"
        $idx_i=$912; //@line 1403 "_json.c"
        $is_float_i=0; //@line 1404 "_json.c"
        var $913=$str_i; //@line 1409 "_json.c"
        var $914=$idx_i; //@line 1409 "_json.c"
        var $915=$913+2*$914; //@line 1409 "_json.c"
        var $916=HEAP[$915]; //@line 1409 "_json.c"
        var $917=($916)==45; //@line 1409 "_json.c"
        if ($917) { __label__ = 186; break; } else { __label__ = 188; break; } //@line 1409 "_json.c"
      case 186: // $bb_i
        var $918=$idx_i; //@line 1410 "_json.c"
        var $919=($918) + 1; //@line 1410 "_json.c"
        $idx_i=$919; //@line 1410 "_json.c"
        var $920=$idx_i; //@line 1411 "_json.c"
        var $921=$end_idx_i; //@line 1411 "_json.c"
        var $922=($920) > ($921); //@line 1411 "_json.c"
        if ($922) { __label__ = 187; break; } else { __label__ = 188; break; } //@line 1411 "_json.c"
      case 187: // $bb1_i
        var $923=HEAP[_PyExc_StopIteration]; //@line 1412 "_json.c"
        _PyErr_SetNone($923); //@line 1412 "_json.c"
        $2=0; //@line 1413 "_json.c"
        __label__ = 232; break; //@line 1413 "_json.c"
      case 188: // $bb2_i
        var $924=$str_i; //@line 1418 "_json.c"
        var $925=$idx_i; //@line 1418 "_json.c"
        var $926=$924+2*$925; //@line 1418 "_json.c"
        var $927=HEAP[$926]; //@line 1418 "_json.c"
        var $928=($927) <= 48; //@line 1418 "_json.c"
        if ($928) { __label__ = 195; break; } else { __label__ = 189; break; } //@line 1418 "_json.c"
      case 189: // $bb3_i
        var $929=$str_i; //@line 1418 "_json.c"
        var $930=$idx_i; //@line 1418 "_json.c"
        var $931=$929+2*$930; //@line 1418 "_json.c"
        var $932=HEAP[$931]; //@line 1418 "_json.c"
        var $933=($932) > 57; //@line 1418 "_json.c"
        if ($933) { __label__ = 195; break; } else { __label__ = 190; break; } //@line 1418 "_json.c"
      case 190: // $bb4_i
        var $934=$idx_i; //@line 1419 "_json.c"
        var $935=($934) + 1; //@line 1419 "_json.c"
        $idx_i=$935; //@line 1419 "_json.c"
        __label__ = 192; break; //@line 1419 "_json.c"
      case 191: // $bb5_i
        var $936=$idx_i; //@line 1420 "_json.c"
        var $937=($936) + 1; //@line 1420 "_json.c"
        $idx_i=$937; //@line 1420 "_json.c"
        __label__ = 192; break; //@line 1420 "_json.c"
      case 192: // $bb6_i
        var $938=$idx_i; //@line 1420 "_json.c"
        var $939=$end_idx_i; //@line 1420 "_json.c"
        var $940=($938) > ($939); //@line 1420 "_json.c"
        if ($940) { __label__ = 198; break; } else { __label__ = 193; break; } //@line 1420 "_json.c"
      case 193: // $bb7_i
        var $941=$str_i; //@line 1420 "_json.c"
        var $942=$idx_i; //@line 1420 "_json.c"
        var $943=$941+2*$942; //@line 1420 "_json.c"
        var $944=HEAP[$943]; //@line 1420 "_json.c"
        var $945=($944) <= 47; //@line 1420 "_json.c"
        if ($945) { __label__ = 198; break; } else { __label__ = 194; break; } //@line 1420 "_json.c"
      case 194: // $bb8_i
        var $946=$str_i; //@line 1420 "_json.c"
        var $947=$idx_i; //@line 1420 "_json.c"
        var $948=$946+2*$947; //@line 1420 "_json.c"
        var $949=HEAP[$948]; //@line 1420 "_json.c"
        var $950=($949) <= 57; //@line 1420 "_json.c"
        if ($950) { __label__ = 191; break; } else { __label__ = 198; break; } //@line 1420 "_json.c"
      case 195: // $bb10_i
        var $951=$str_i; //@line 1423 "_json.c"
        var $952=$idx_i; //@line 1423 "_json.c"
        var $953=$951+2*$952; //@line 1423 "_json.c"
        var $954=HEAP[$953]; //@line 1423 "_json.c"
        var $955=($954)==48; //@line 1423 "_json.c"
        if ($955) { __label__ = 196; break; } else { __label__ = 197; break; } //@line 1423 "_json.c"
      case 196: // $bb11_i
        var $956=$idx_i; //@line 1424 "_json.c"
        var $957=($956) + 1; //@line 1424 "_json.c"
        $idx_i=$957; //@line 1424 "_json.c"
        __label__ = 198; break; //@line 1424 "_json.c"
      case 197: // $bb12_i
        var $958=HEAP[_PyExc_StopIteration]; //@line 1428 "_json.c"
        _PyErr_SetNone($958); //@line 1428 "_json.c"
        $2=0; //@line 1429 "_json.c"
        __label__ = 232; break; //@line 1429 "_json.c"
      case 198: // $bb13_i
        var $959=$idx_i; //@line 1433 "_json.c"
        var $960=$end_idx_i; //@line 1433 "_json.c"
        var $961=($959) < ($960); //@line 1433 "_json.c"
        if ($961) { __label__ = 199; break; } else { __label__ = 207; break; } //@line 1433 "_json.c"
      case 199: // $bb14_i
        var $962=$str_i; //@line 1433 "_json.c"
        var $963=$idx_i; //@line 1433 "_json.c"
        var $964=$962+2*$963; //@line 1433 "_json.c"
        var $965=HEAP[$964]; //@line 1433 "_json.c"
        var $966=($965)==46; //@line 1433 "_json.c"
        if ($966) { __label__ = 200; break; } else { __label__ = 207; break; } //@line 1433 "_json.c"
      case 200: // $bb15_i
        var $967=$idx_i; //@line 1433 "_json.c"
        var $968=($967) + 1; //@line 1433 "_json.c"
        var $969=$str_i; //@line 1433 "_json.c"
        var $970=$969+2*$968; //@line 1433 "_json.c"
        var $971=HEAP[$970]; //@line 1433 "_json.c"
        var $972=($971) > 47; //@line 1433 "_json.c"
        if ($972) { __label__ = 201; break; } else { __label__ = 207; break; } //@line 1433 "_json.c"
      case 201: // $bb16_i
        var $973=$idx_i; //@line 1433 "_json.c"
        var $974=($973) + 1; //@line 1433 "_json.c"
        var $975=$str_i; //@line 1433 "_json.c"
        var $976=$975+2*$974; //@line 1433 "_json.c"
        var $977=HEAP[$976]; //@line 1433 "_json.c"
        var $978=($977) <= 57; //@line 1433 "_json.c"
        if ($978) { __label__ = 202; break; } else { __label__ = 207; break; } //@line 1433 "_json.c"
      case 202: // $bb17_i
        $is_float_i=1; //@line 1434 "_json.c"
        var $979=$idx_i; //@line 1435 "_json.c"
        var $980=($979) + 2; //@line 1435 "_json.c"
        $idx_i=$980; //@line 1435 "_json.c"
        __label__ = 204; break; //@line 1435 "_json.c"
      case 203: // $bb18_i
        var $981=$idx_i; //@line 1436 "_json.c"
        var $982=($981) + 1; //@line 1436 "_json.c"
        $idx_i=$982; //@line 1436 "_json.c"
        __label__ = 204; break; //@line 1436 "_json.c"
      case 204: // $bb19_i
        var $983=$idx_i; //@line 1436 "_json.c"
        var $984=$end_idx_i; //@line 1436 "_json.c"
        var $985=($983) > ($984); //@line 1436 "_json.c"
        if ($985) { __label__ = 207; break; } else { __label__ = 205; break; } //@line 1436 "_json.c"
      case 205: // $bb20_i
        var $986=$str_i; //@line 1436 "_json.c"
        var $987=$idx_i; //@line 1436 "_json.c"
        var $988=$986+2*$987; //@line 1436 "_json.c"
        var $989=HEAP[$988]; //@line 1436 "_json.c"
        var $990=($989) <= 47; //@line 1436 "_json.c"
        if ($990) { __label__ = 207; break; } else { __label__ = 206; break; } //@line 1436 "_json.c"
      case 206: // $bb21_i
        var $991=$str_i; //@line 1436 "_json.c"
        var $992=$idx_i; //@line 1436 "_json.c"
        var $993=$991+2*$992; //@line 1436 "_json.c"
        var $994=HEAP[$993]; //@line 1436 "_json.c"
        var $995=($994) <= 57; //@line 1436 "_json.c"
        if ($995) { __label__ = 203; break; } else { __label__ = 207; break; } //@line 1436 "_json.c"
      case 207: // $bb22_i
        var $996=$idx_i; //@line 1440 "_json.c"
        var $997=$end_idx_i; //@line 1440 "_json.c"
        var $998=($996) < ($997); //@line 1440 "_json.c"
        if ($998) { __label__ = 208; break; } else { __label__ = 222; break; } //@line 1440 "_json.c"
      case 208: // $bb23_i
        var $999=$str_i; //@line 1440 "_json.c"
        var $1000=$idx_i; //@line 1440 "_json.c"
        var $1001=$999+2*$1000; //@line 1440 "_json.c"
        var $1002=HEAP[$1001]; //@line 1440 "_json.c"
        var $1003=($1002)==101; //@line 1440 "_json.c"
        if ($1003) { __label__ = 210; break; } else { __label__ = 209; break; } //@line 1440 "_json.c"
      case 209: // $bb24_i
        var $1004=$str_i; //@line 1440 "_json.c"
        var $1005=$idx_i; //@line 1440 "_json.c"
        var $1006=$1004+2*$1005; //@line 1440 "_json.c"
        var $1007=HEAP[$1006]; //@line 1440 "_json.c"
        var $1008=($1007)==69; //@line 1440 "_json.c"
        if ($1008) { __label__ = 210; break; } else { __label__ = 222; break; } //@line 1440 "_json.c"
      case 210: // $bb25_i
        var $1009=$idx_i; //@line 1441 "_json.c"
        $e_start_i=$1009; //@line 1441 "_json.c"
        var $1010=$idx_i; //@line 1442 "_json.c"
        var $1011=($1010) + 1; //@line 1442 "_json.c"
        $idx_i=$1011; //@line 1442 "_json.c"
        var $1012=$idx_i; //@line 1445 "_json.c"
        var $1013=$end_idx_i; //@line 1445 "_json.c"
        var $1014=($1012) < ($1013); //@line 1445 "_json.c"
        if ($1014) { __label__ = 211; break; } else { __label__ = 215; break; } //@line 1445 "_json.c"
      case 211: // $bb26_i
        var $1015=$str_i; //@line 1445 "_json.c"
        var $1016=$idx_i; //@line 1445 "_json.c"
        var $1017=$1015+2*$1016; //@line 1445 "_json.c"
        var $1018=HEAP[$1017]; //@line 1445 "_json.c"
        var $1019=($1018)==45; //@line 1445 "_json.c"
        if ($1019) { __label__ = 213; break; } else { __label__ = 212; break; } //@line 1445 "_json.c"
      case 212: // $bb27_i
        var $1020=$str_i; //@line 1445 "_json.c"
        var $1021=$idx_i; //@line 1445 "_json.c"
        var $1022=$1020+2*$1021; //@line 1445 "_json.c"
        var $1023=HEAP[$1022]; //@line 1445 "_json.c"
        var $1024=($1023)==43; //@line 1445 "_json.c"
        if ($1024) { __label__ = 213; break; } else { __label__ = 215; break; } //@line 1445 "_json.c"
      case 213: // $bb28_i
        var $1025=$idx_i; //@line 1445 "_json.c"
        var $1026=($1025) + 1; //@line 1445 "_json.c"
        $idx_i=$1026; //@line 1445 "_json.c"
        __label__ = 215; break; //@line 1445 "_json.c"
      case 214: // $bb30_i
        var $1027=$idx_i; //@line 1448 "_json.c"
        var $1028=($1027) + 1; //@line 1448 "_json.c"
        $idx_i=$1028; //@line 1448 "_json.c"
        __label__ = 215; break; //@line 1448 "_json.c"
      case 215: // $bb31_i
        var $1029=$idx_i; //@line 1448 "_json.c"
        var $1030=$end_idx_i; //@line 1448 "_json.c"
        var $1031=($1029) > ($1030); //@line 1448 "_json.c"
        if ($1031) { __label__ = 218; break; } else { __label__ = 216; break; } //@line 1448 "_json.c"
      case 216: // $bb32_i
        var $1032=$str_i; //@line 1448 "_json.c"
        var $1033=$idx_i; //@line 1448 "_json.c"
        var $1034=$1032+2*$1033; //@line 1448 "_json.c"
        var $1035=HEAP[$1034]; //@line 1448 "_json.c"
        var $1036=($1035) <= 47; //@line 1448 "_json.c"
        if ($1036) { __label__ = 218; break; } else { __label__ = 217; break; } //@line 1448 "_json.c"
      case 217: // $bb33_i
        var $1037=$str_i; //@line 1448 "_json.c"
        var $1038=$idx_i; //@line 1448 "_json.c"
        var $1039=$1037+2*$1038; //@line 1448 "_json.c"
        var $1040=HEAP[$1039]; //@line 1448 "_json.c"
        var $1041=($1040) <= 57; //@line 1448 "_json.c"
        if ($1041) { __label__ = 214; break; } else { __label__ = 218; break; } //@line 1448 "_json.c"
      case 218: // $bb34_i
        var $1042=$idx_i; //@line 1451 "_json.c"
        var $1043=($1042) - 1; //@line 1451 "_json.c"
        var $1044=$str_i; //@line 1451 "_json.c"
        var $1045=$1044+2*$1043; //@line 1451 "_json.c"
        var $1046=HEAP[$1045]; //@line 1451 "_json.c"
        var $1047=($1046) <= 47; //@line 1451 "_json.c"
        if ($1047) { __label__ = 221; break; } else { __label__ = 219; break; } //@line 1451 "_json.c"
      case 219: // $bb35_i
        var $1048=$idx_i; //@line 1451 "_json.c"
        var $1049=($1048) - 1; //@line 1451 "_json.c"
        var $1050=$str_i; //@line 1451 "_json.c"
        var $1051=$1050+2*$1049; //@line 1451 "_json.c"
        var $1052=HEAP[$1051]; //@line 1451 "_json.c"
        var $1053=($1052) > 57; //@line 1451 "_json.c"
        if ($1053) { __label__ = 221; break; } else { __label__ = 220; break; } //@line 1451 "_json.c"
      case 220: // $bb36_i
        $is_float_i=1; //@line 1452 "_json.c"
        __label__ = 222; break; //@line 1452 "_json.c"
      case 221: // $bb37_i
        var $1054=$e_start_i; //@line 1455 "_json.c"
        $idx_i=$1054; //@line 1455 "_json.c"
        __label__ = 222; break; //@line 1455 "_json.c"
      case 222: // $bb38_i
        var $1055=$idx_i; //@line 1460 "_json.c"
        var $1056=$start_addr_i; //@line 1460 "_json.c"
        var $1057=($1055) - ($1056); //@line 1460 "_json.c"
        var $1058=$str_i; //@line 1460 "_json.c"
        var $1059=$start_addr_i; //@line 1460 "_json.c"
        var $1060=$1058+2*$1059; //@line 1460 "_json.c"
        var $1061=_PyUnicodeUCS2_FromUnicode($1060, $1057); //@line 1460 "_json.c"
        $numstr_i=$1061; //@line 1460 "_json.c"
        var $1062=($1061)==0; //@line 1461 "_json.c"
        if ($1062) { __label__ = 223; break; } else { __label__ = 224; break; } //@line 1461 "_json.c"
      case 223: // $bb39_i
        $2=0; //@line 1462 "_json.c"
        __label__ = 232; break; //@line 1462 "_json.c"
      case 224: // $bb40_i
        var $1063=$is_float_i; //@line 1463 "_json.c"
        var $1064=($1063)!=0; //@line 1463 "_json.c"
        var $1065=$s_addr_i; //@line 1465 "_json.c"
        if ($1064) { __label__ = 225; break; } else { __label__ = 228; break; } //@line 1463 "_json.c"
      case 225: // $bb41_i
        var $1066=$1065+24; //@line 1465 "_json.c"
        var $1067=HEAP[$1066]; //@line 1465 "_json.c"
        var $1068=($1067)!=(_PyFloat_Type); //@line 1465 "_json.c"
        if ($1068) { __label__ = 226; break; } else { __label__ = 227; break; } //@line 1465 "_json.c"
      case 226: // $bb42_i
        var $1069=$s_addr_i; //@line 1466 "_json.c"
        var $1070=$1069+24; //@line 1466 "_json.c"
        var $1071=HEAP[$1070]; //@line 1466 "_json.c"
        var $1072=$numstr_i; //@line 1466 "_json.c"
        var $1073=_PyObject_CallFunctionObjArgs($1071, $1072, 0); //@line 1466 "_json.c"
        $rval_i=$1073; //@line 1466 "_json.c"
        __label__ = 229; break; //@line 1466 "_json.c"
      case 227: // $bb43_i
        var $1074=$numstr_i; //@line 1469 "_json.c"
        var $1075=_PyFloat_FromString($1074, 0); //@line 1469 "_json.c"
        $rval_i=$1075; //@line 1469 "_json.c"
        __label__ = 229; break; //@line 1469 "_json.c"
      case 228: // $bb45_i
        var $1076=$1065+28; //@line 1474 "_json.c"
        var $1077=HEAP[$1076]; //@line 1474 "_json.c"
        var $1078=$numstr_i; //@line 1474 "_json.c"
        var $1079=_PyObject_CallFunctionObjArgs($1077, $1078, 0); //@line 1474 "_json.c"
        $rval_i=$1079; //@line 1474 "_json.c"
        __label__ = 229; break; //@line 1474 "_json.c"
      case 229: // $bb46_i
        var $1080=$numstr_i; //@line 1476 "_json.c"
        var $1081=$1080; //@line 1476 "_json.c"
        var $1082=HEAP[$1081]; //@line 1476 "_json.c"
        var $1083=($1082) - 1; //@line 1476 "_json.c"
        var $1084=$numstr_i; //@line 1476 "_json.c"
        var $1085=$1084; //@line 1476 "_json.c"
        HEAP[$1085]=$1083; //@line 1476 "_json.c"
        var $1086=$numstr_i; //@line 1476 "_json.c"
        var $1087=$1086; //@line 1476 "_json.c"
        var $1088=HEAP[$1087]; //@line 1476 "_json.c"
        var $1089=($1088)==0; //@line 1476 "_json.c"
        if ($1089) { __label__ = 230; break; } else { __label__ = 231; break; } //@line 1476 "_json.c"
      case 230: // $bb47_i
        var $1090=$numstr_i; //@line 1476 "_json.c"
        var $1091=$1090+4; //@line 1476 "_json.c"
        var $1092=HEAP[$1091]; //@line 1476 "_json.c"
        var $1093=$1092+24; //@line 1476 "_json.c"
        var $1094=HEAP[$1093]; //@line 1476 "_json.c"
        var $1095=$numstr_i; //@line 1476 "_json.c"
        FUNCTION_TABLE[$1094]($1095); //@line 1476 "_json.c"
        __label__ = 231; break; //@line 1476 "_json.c"
      case 231: // $bb48_i
        var $1096=$next_idx_ptr_addr_i; //@line 1477 "_json.c"
        var $1097=$idx_i; //@line 1477 "_json.c"
        HEAP[$1096]=$1097; //@line 1477 "_json.c"
        var $1098=$rval_i; //@line 1478 "_json.c"
        $2=$1098; //@line 1478 "_json.c"
        __label__ = 232; break; //@line 1478 "_json.c"
      case 232: // $_match_number_unicode_exit
        var $1099=$2; //@line 1413 "_json.c"
        $retval_i=$1099; //@line 1413 "_json.c"
        var $retval50_i=$retval_i; //@line 1413 "_json.c"
        $3=$retval50_i; //@line 1651 "_json.c"
        __label__ = 233; break; //@line 1651 "_json.c"
      case 233: // $bb56
        var $1100=$3; //@line 1583 "_json.c"
        $retval=$1100; //@line 1583 "_json.c"
        var $retval57=$retval; //@line 1583 "_json.c"
        STACKTOP = __stackBase__;
        return $retval57; //@line 1583 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_call($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $pystr=__stackBase__;
        var $rval;
        var $idx=__stackBase__+4;
        var $next_idx=__stackBase__+8;
        var $s;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$next_idx]=-1; //@line 1661 "_json.c"
        var $1=$self_addr; //@line 1664 "_json.c"
        var $2=$1+4; //@line 1664 "_json.c"
        var $3=HEAP[$2]; //@line 1664 "_json.c"
        var $4=($3)!=(_PyScannerType); //@line 1664 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1664 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1664 "_json.c"
        var $6=$5+4; //@line 1664 "_json.c"
        var $7=HEAP[$6]; //@line 1664 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyScannerType); //@line 1664 "_json.c"
        var $9=($8)==0; //@line 1664 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1664 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str28, __str29, 1664, ___PRETTY_FUNCTION___10703); //@line 1664 "_json.c"
        throw "Reached an unreachable!" //@line 1664 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 1665 "_json.c"
        var $11=$10; //@line 1665 "_json.c"
        $s=$11; //@line 1665 "_json.c"
        var $12=$args_addr; //@line 1666 "_json.c"
        var $13=$kwds_addr; //@line 1666 "_json.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, __str41, _kwlist_10701, $pystr, (FUNCTION_TABLE_OFFSET + 4), $idx); //@line 1666 "_json.c"
        var $15=($14)==0; //@line 1666 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1666 "_json.c"
      case 4: // $bb3
        $0=0; //@line 1667 "_json.c"
        __label__ = 11; break; //@line 1667 "_json.c"
      case 5: // $bb4
        var $16=HEAP[$pystr]; //@line 1669 "_json.c"
        var $17=$16+4; //@line 1669 "_json.c"
        var $18=HEAP[$17]; //@line 1669 "_json.c"
        var $19=$18+84; //@line 1669 "_json.c"
        var $20=HEAP[$19]; //@line 1669 "_json.c"
        var $21=($20) & 134217728; //@line 1669 "_json.c"
        var $22=($21)!=0; //@line 1669 "_json.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1669 "_json.c"
      case 6: // $bb5
        var $23=HEAP[$idx]; //@line 1670 "_json.c"
        var $24=HEAP[$pystr]; //@line 1670 "_json.c"
        var $25=$s; //@line 1670 "_json.c"
        var $26=_scan_once_str($25, $24, $23, $next_idx); //@line 1670 "_json.c"
        $rval=$26; //@line 1670 "_json.c"
        __label__ = 10; break; //@line 1670 "_json.c"
      case 7: // $bb6
        var $27=HEAP[$pystr]; //@line 1672 "_json.c"
        var $28=$27+4; //@line 1672 "_json.c"
        var $29=HEAP[$28]; //@line 1672 "_json.c"
        var $30=$29+84; //@line 1672 "_json.c"
        var $31=HEAP[$30]; //@line 1672 "_json.c"
        var $32=($31) & 268435456; //@line 1672 "_json.c"
        var $33=($32)!=0; //@line 1672 "_json.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1672 "_json.c"
      case 8: // $bb7
        var $34=HEAP[$idx]; //@line 1673 "_json.c"
        var $35=HEAP[$pystr]; //@line 1673 "_json.c"
        var $36=$s; //@line 1673 "_json.c"
        var $37=_scan_once_unicode($36, $35, $34, $next_idx); //@line 1673 "_json.c"
        $rval=$37; //@line 1673 "_json.c"
        __label__ = 10; break; //@line 1673 "_json.c"
      case 9: // $bb8
        var $38=HEAP[$pystr]; //@line 1676 "_json.c"
        var $39=$38+4; //@line 1676 "_json.c"
        var $40=HEAP[$39]; //@line 1676 "_json.c"
        var $41=$40+12; //@line 1676 "_json.c"
        var $42=HEAP[$41]; //@line 1676 "_json.c"
        var $43=HEAP[_PyExc_TypeError]; //@line 1676 "_json.c"
        var $44=_PyErr_Format($43, __str27, $42); //@line 1676 "_json.c"
        $0=0; //@line 1679 "_json.c"
        __label__ = 11; break; //@line 1679 "_json.c"
      case 10: // $bb9
        var $45=HEAP[$next_idx]; //@line 1681 "_json.c"
        var $46=$rval; //@line 1681 "_json.c"
        var $47=__build_rval_index_tuple($46, $45); //@line 1681 "_json.c"
        $0=$47; //@line 1681 "_json.c"
        __label__ = 11; break; //@line 1681 "_json.c"
      case 11: // $bb10
        var $48=$0; //@line 1667 "_json.c"
        $retval=$48; //@line 1667 "_json.c"
        var $retval11=$retval; //@line 1667 "_json.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1667 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_new($type, $args, $kwds) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $s;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 1688 "_json.c"
        var $2=$1+152; //@line 1688 "_json.c"
        var $3=HEAP[$2]; //@line 1688 "_json.c"
        var $4=$type_addr; //@line 1688 "_json.c"
        var $5=FUNCTION_TABLE[$3]($4, 0); //@line 1688 "_json.c"
        var $6=$5; //@line 1688 "_json.c"
        $s=$6; //@line 1688 "_json.c"
        var $7=$s; //@line 1689 "_json.c"
        var $8=($7)!=0; //@line 1689 "_json.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1689 "_json.c"
      case 1: // $bb
        var $9=$s; //@line 1690 "_json.c"
        var $10=$9+8; //@line 1690 "_json.c"
        HEAP[$10]=0; //@line 1690 "_json.c"
        var $11=$s; //@line 1691 "_json.c"
        var $12=$11+12; //@line 1691 "_json.c"
        HEAP[$12]=0; //@line 1691 "_json.c"
        var $13=$s; //@line 1692 "_json.c"
        var $14=$13+16; //@line 1692 "_json.c"
        HEAP[$14]=0; //@line 1692 "_json.c"
        var $15=$s; //@line 1693 "_json.c"
        var $16=$15+20; //@line 1693 "_json.c"
        HEAP[$16]=0; //@line 1693 "_json.c"
        var $17=$s; //@line 1694 "_json.c"
        var $18=$17+24; //@line 1694 "_json.c"
        HEAP[$18]=0; //@line 1694 "_json.c"
        var $19=$s; //@line 1695 "_json.c"
        var $20=$19+28; //@line 1695 "_json.c"
        HEAP[$20]=0; //@line 1695 "_json.c"
        var $21=$s; //@line 1696 "_json.c"
        var $22=$21+32; //@line 1696 "_json.c"
        HEAP[$22]=0; //@line 1696 "_json.c"
        __label__ = 2; break; //@line 1696 "_json.c"
      case 2: // $bb1
        var $23=$s; //@line 1698 "_json.c"
        var $24=$23; //@line 1698 "_json.c"
        $0=$24; //@line 1698 "_json.c"
        var $25=$0; //@line 1698 "_json.c"
        $retval=$25; //@line 1698 "_json.c"
        var $retval2=$retval; //@line 1698 "_json.c"
        ;
        return $retval2; //@line 1698 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_init($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $ctx=__stackBase__;
        var $s;
        var $tmp;
        var $_py_tmp;
        var $_py_tmp26;
        var $_py_tmp30;
        var $_py_tmp34;
        var $_py_tmp38;
        var $_py_tmp42;
        var $_py_tmp46;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$self_addr; //@line 1709 "_json.c"
        var $2=$1+4; //@line 1709 "_json.c"
        var $3=HEAP[$2]; //@line 1709 "_json.c"
        var $4=($3)!=(_PyScannerType); //@line 1709 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1709 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1709 "_json.c"
        var $6=$5+4; //@line 1709 "_json.c"
        var $7=HEAP[$6]; //@line 1709 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyScannerType); //@line 1709 "_json.c"
        var $9=($8)==0; //@line 1709 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1709 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str28, __str29, 1709, ___PRETTY_FUNCTION___10762); //@line 1709 "_json.c"
        throw "Reached an unreachable!" //@line 1709 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 1710 "_json.c"
        var $11=$10; //@line 1710 "_json.c"
        $s=$11; //@line 1710 "_json.c"
        var $12=$args_addr; //@line 1712 "_json.c"
        var $13=$kwds_addr; //@line 1712 "_json.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, __str44, _kwlist_10760, $ctx); //@line 1712 "_json.c"
        var $15=($14)==0; //@line 1712 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1712 "_json.c"
      case 4: // $bb3
        $0=-1; //@line 1713 "_json.c"
        __label__ = 45; break; //@line 1713 "_json.c"
      case 5: // $bb4
        var $16=HEAP[$ctx]; //@line 1716 "_json.c"
        var $17=_PyObject_GetAttrString($16, __str); //@line 1716 "_json.c"
        var $18=$s; //@line 1716 "_json.c"
        var $19=$18+8; //@line 1716 "_json.c"
        HEAP[$19]=$17; //@line 1716 "_json.c"
        var $20=$s; //@line 1717 "_json.c"
        var $21=$20+8; //@line 1717 "_json.c"
        var $22=HEAP[$21]; //@line 1717 "_json.c"
        var $23=($22)==0; //@line 1717 "_json.c"
        if ($23) { __label__ = 23; break; } else { __label__ = 6; break; } //@line 1717 "_json.c"
      case 6: // $bb5
        var $24=$s; //@line 1719 "_json.c"
        var $25=$24+8; //@line 1719 "_json.c"
        var $26=HEAP[$25]; //@line 1719 "_json.c"
        var $27=($26)==(__Py_NoneStruct); //@line 1719 "_json.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 1719 "_json.c"
      case 7: // $bb6
        var $28=HEAP[__Py_NoneStruct]; //@line 1720 "_json.c"
        var $29=($28) - 1; //@line 1720 "_json.c"
        HEAP[__Py_NoneStruct]=$29; //@line 1720 "_json.c"
        var $30=HEAP[__Py_NoneStruct]; //@line 1720 "_json.c"
        var $31=($30)==0; //@line 1720 "_json.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1720 "_json.c"
      case 8: // $bb7
        var $32=HEAP[__Py_NoneStruct+4]; //@line 1720 "_json.c"
        var $33=$32+24; //@line 1720 "_json.c"
        var $34=HEAP[$33]; //@line 1720 "_json.c"
        FUNCTION_TABLE[$34](__Py_NoneStruct); //@line 1720 "_json.c"
        __label__ = 9; break; //@line 1720 "_json.c"
      case 9: // $bb8
        var $35=_PyString_InternFromString(__str26); //@line 1721 "_json.c"
        var $36=$s; //@line 1721 "_json.c"
        var $37=$36+8; //@line 1721 "_json.c"
        HEAP[$37]=$35; //@line 1721 "_json.c"
        __label__ = 14; break; //@line 1721 "_json.c"
      case 10: // $bb9
        var $38=$s; //@line 1723 "_json.c"
        var $39=$38+8; //@line 1723 "_json.c"
        var $40=HEAP[$39]; //@line 1723 "_json.c"
        var $41=$40+4; //@line 1723 "_json.c"
        var $42=HEAP[$41]; //@line 1723 "_json.c"
        var $43=$42+84; //@line 1723 "_json.c"
        var $44=HEAP[$43]; //@line 1723 "_json.c"
        var $45=($44) & 268435456; //@line 1723 "_json.c"
        var $46=($45)!=0; //@line 1723 "_json.c"
        if ($46) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1723 "_json.c"
      case 11: // $bb10
        var $47=$s; //@line 1724 "_json.c"
        var $48=$47+8; //@line 1724 "_json.c"
        var $49=HEAP[$48]; //@line 1724 "_json.c"
        var $50=_PyUnicodeUCS2_AsEncodedString($49, 0, 0); //@line 1724 "_json.c"
        $tmp=$50; //@line 1724 "_json.c"
        var $51=$s; //@line 1725 "_json.c"
        var $52=$51+8; //@line 1725 "_json.c"
        var $53=HEAP[$52]; //@line 1725 "_json.c"
        var $54=$53; //@line 1725 "_json.c"
        var $55=HEAP[$54]; //@line 1725 "_json.c"
        var $56=($55) - 1; //@line 1725 "_json.c"
        var $57=$53; //@line 1725 "_json.c"
        HEAP[$57]=$56; //@line 1725 "_json.c"
        var $58=$53; //@line 1725 "_json.c"
        var $59=HEAP[$58]; //@line 1725 "_json.c"
        var $60=($59)==0; //@line 1725 "_json.c"
        if ($60) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1725 "_json.c"
      case 12: // $bb11
        var $61=$s; //@line 1725 "_json.c"
        var $62=$61+8; //@line 1725 "_json.c"
        var $63=HEAP[$62]; //@line 1725 "_json.c"
        var $64=$63+4; //@line 1725 "_json.c"
        var $65=HEAP[$64]; //@line 1725 "_json.c"
        var $66=$65+24; //@line 1725 "_json.c"
        var $67=HEAP[$66]; //@line 1725 "_json.c"
        var $68=$s; //@line 1725 "_json.c"
        var $69=$68+8; //@line 1725 "_json.c"
        var $70=HEAP[$69]; //@line 1725 "_json.c"
        FUNCTION_TABLE[$67]($70); //@line 1725 "_json.c"
        __label__ = 13; break; //@line 1725 "_json.c"
      case 13: // $bb12
        var $71=$s; //@line 1726 "_json.c"
        var $72=$71+8; //@line 1726 "_json.c"
        var $73=$tmp; //@line 1726 "_json.c"
        HEAP[$72]=$73; //@line 1726 "_json.c"
        __label__ = 14; break; //@line 1726 "_json.c"
      case 14: // $bb13
        var $74=$s; //@line 1728 "_json.c"
        var $75=$74+8; //@line 1728 "_json.c"
        var $76=HEAP[$75]; //@line 1728 "_json.c"
        var $77=($76)==0; //@line 1728 "_json.c"
        if ($77) { __label__ = 23; break; } else { __label__ = 15; break; } //@line 1728 "_json.c"
      case 15: // $bb14
        var $78=$s; //@line 1728 "_json.c"
        var $79=$78+8; //@line 1728 "_json.c"
        var $80=HEAP[$79]; //@line 1728 "_json.c"
        var $81=$80+4; //@line 1728 "_json.c"
        var $82=HEAP[$81]; //@line 1728 "_json.c"
        var $83=$82+84; //@line 1728 "_json.c"
        var $84=HEAP[$83]; //@line 1728 "_json.c"
        var $85=($84) & 134217728; //@line 1728 "_json.c"
        var $86=($85)==0; //@line 1728 "_json.c"
        if ($86) { __label__ = 23; break; } else { __label__ = 16; break; } //@line 1728 "_json.c"
      case 16: // $bb15
        var $87=HEAP[$ctx]; //@line 1732 "_json.c"
        var $88=_PyObject_GetAttrString($87, __str1); //@line 1732 "_json.c"
        var $89=$s; //@line 1732 "_json.c"
        var $90=$89+12; //@line 1732 "_json.c"
        HEAP[$90]=$88; //@line 1732 "_json.c"
        var $91=$s; //@line 1733 "_json.c"
        var $92=$91+12; //@line 1733 "_json.c"
        var $93=HEAP[$92]; //@line 1733 "_json.c"
        var $94=($93)==0; //@line 1733 "_json.c"
        if ($94) { __label__ = 23; break; } else { __label__ = 17; break; } //@line 1733 "_json.c"
      case 17: // $bb16
        var $95=HEAP[$ctx]; //@line 1735 "_json.c"
        var $96=_PyObject_GetAttrString($95, __str2); //@line 1735 "_json.c"
        var $97=$s; //@line 1735 "_json.c"
        var $98=$97+16; //@line 1735 "_json.c"
        HEAP[$98]=$96; //@line 1735 "_json.c"
        var $99=$s; //@line 1736 "_json.c"
        var $100=$99+16; //@line 1736 "_json.c"
        var $101=HEAP[$100]; //@line 1736 "_json.c"
        var $102=($101)==0; //@line 1736 "_json.c"
        if ($102) { __label__ = 23; break; } else { __label__ = 18; break; } //@line 1736 "_json.c"
      case 18: // $bb17
        var $103=HEAP[$ctx]; //@line 1738 "_json.c"
        var $104=_PyObject_GetAttrString($103, __str3); //@line 1738 "_json.c"
        var $105=$s; //@line 1738 "_json.c"
        var $106=$105+20; //@line 1738 "_json.c"
        HEAP[$106]=$104; //@line 1738 "_json.c"
        var $107=$s; //@line 1739 "_json.c"
        var $108=$107+20; //@line 1739 "_json.c"
        var $109=HEAP[$108]; //@line 1739 "_json.c"
        var $110=($109)==0; //@line 1739 "_json.c"
        if ($110) { __label__ = 23; break; } else { __label__ = 19; break; } //@line 1739 "_json.c"
      case 19: // $bb18
        var $111=HEAP[$ctx]; //@line 1741 "_json.c"
        var $112=_PyObject_GetAttrString($111, __str4); //@line 1741 "_json.c"
        var $113=$s; //@line 1741 "_json.c"
        var $114=$113+24; //@line 1741 "_json.c"
        HEAP[$114]=$112; //@line 1741 "_json.c"
        var $115=$s; //@line 1742 "_json.c"
        var $116=$115+24; //@line 1742 "_json.c"
        var $117=HEAP[$116]; //@line 1742 "_json.c"
        var $118=($117)==0; //@line 1742 "_json.c"
        if ($118) { __label__ = 23; break; } else { __label__ = 20; break; } //@line 1742 "_json.c"
      case 20: // $bb19
        var $119=HEAP[$ctx]; //@line 1744 "_json.c"
        var $120=_PyObject_GetAttrString($119, __str5); //@line 1744 "_json.c"
        var $121=$s; //@line 1744 "_json.c"
        var $122=$121+28; //@line 1744 "_json.c"
        HEAP[$122]=$120; //@line 1744 "_json.c"
        var $123=$s; //@line 1745 "_json.c"
        var $124=$123+28; //@line 1745 "_json.c"
        var $125=HEAP[$124]; //@line 1745 "_json.c"
        var $126=($125)==0; //@line 1745 "_json.c"
        if ($126) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 1745 "_json.c"
      case 21: // $bb20
        var $127=HEAP[$ctx]; //@line 1747 "_json.c"
        var $128=_PyObject_GetAttrString($127, __str6); //@line 1747 "_json.c"
        var $129=$s; //@line 1747 "_json.c"
        var $130=$129+32; //@line 1747 "_json.c"
        HEAP[$130]=$128; //@line 1747 "_json.c"
        var $131=$s; //@line 1748 "_json.c"
        var $132=$131+32; //@line 1748 "_json.c"
        var $133=HEAP[$132]; //@line 1748 "_json.c"
        var $134=($133)==0; //@line 1748 "_json.c"
        if ($134) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 1748 "_json.c"
      case 22: // $bb21
        $0=0; //@line 1751 "_json.c"
        __label__ = 45; break; //@line 1751 "_json.c"
      case 23: // $bail
        var $135=$s; //@line 1754 "_json.c"
        var $136=$135+8; //@line 1754 "_json.c"
        var $137=HEAP[$136]; //@line 1754 "_json.c"
        var $138=($137)!=0; //@line 1754 "_json.c"
        if ($138) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 1754 "_json.c"
      case 24: // $bb22
        var $139=$s; //@line 1754 "_json.c"
        var $140=$139+8; //@line 1754 "_json.c"
        var $141=HEAP[$140]; //@line 1754 "_json.c"
        $_py_tmp=$141; //@line 1754 "_json.c"
        var $142=$s; //@line 1754 "_json.c"
        var $143=$142+8; //@line 1754 "_json.c"
        HEAP[$143]=0; //@line 1754 "_json.c"
        var $144=$_py_tmp; //@line 1754 "_json.c"
        var $145=$144; //@line 1754 "_json.c"
        var $146=HEAP[$145]; //@line 1754 "_json.c"
        var $147=($146) - 1; //@line 1754 "_json.c"
        var $148=$_py_tmp; //@line 1754 "_json.c"
        var $149=$148; //@line 1754 "_json.c"
        HEAP[$149]=$147; //@line 1754 "_json.c"
        var $150=$_py_tmp; //@line 1754 "_json.c"
        var $151=$150; //@line 1754 "_json.c"
        var $152=HEAP[$151]; //@line 1754 "_json.c"
        var $153=($152)==0; //@line 1754 "_json.c"
        if ($153) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1754 "_json.c"
      case 25: // $bb23
        var $154=$_py_tmp; //@line 1754 "_json.c"
        var $155=$154+4; //@line 1754 "_json.c"
        var $156=HEAP[$155]; //@line 1754 "_json.c"
        var $157=$156+24; //@line 1754 "_json.c"
        var $158=HEAP[$157]; //@line 1754 "_json.c"
        var $159=$_py_tmp; //@line 1754 "_json.c"
        FUNCTION_TABLE[$158]($159); //@line 1754 "_json.c"
        __label__ = 26; break; //@line 1754 "_json.c"
      case 26: // $bb24
        var $160=$s; //@line 1755 "_json.c"
        var $161=$160+12; //@line 1755 "_json.c"
        var $162=HEAP[$161]; //@line 1755 "_json.c"
        var $163=($162)!=0; //@line 1755 "_json.c"
        if ($163) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 1755 "_json.c"
      case 27: // $bb25
        var $164=$s; //@line 1755 "_json.c"
        var $165=$164+12; //@line 1755 "_json.c"
        var $166=HEAP[$165]; //@line 1755 "_json.c"
        $_py_tmp26=$166; //@line 1755 "_json.c"
        var $167=$s; //@line 1755 "_json.c"
        var $168=$167+12; //@line 1755 "_json.c"
        HEAP[$168]=0; //@line 1755 "_json.c"
        var $169=$_py_tmp26; //@line 1755 "_json.c"
        var $170=$169; //@line 1755 "_json.c"
        var $171=HEAP[$170]; //@line 1755 "_json.c"
        var $172=($171) - 1; //@line 1755 "_json.c"
        var $173=$_py_tmp26; //@line 1755 "_json.c"
        var $174=$173; //@line 1755 "_json.c"
        HEAP[$174]=$172; //@line 1755 "_json.c"
        var $175=$_py_tmp26; //@line 1755 "_json.c"
        var $176=$175; //@line 1755 "_json.c"
        var $177=HEAP[$176]; //@line 1755 "_json.c"
        var $178=($177)==0; //@line 1755 "_json.c"
        if ($178) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1755 "_json.c"
      case 28: // $bb27
        var $179=$_py_tmp26; //@line 1755 "_json.c"
        var $180=$179+4; //@line 1755 "_json.c"
        var $181=HEAP[$180]; //@line 1755 "_json.c"
        var $182=$181+24; //@line 1755 "_json.c"
        var $183=HEAP[$182]; //@line 1755 "_json.c"
        var $184=$_py_tmp26; //@line 1755 "_json.c"
        FUNCTION_TABLE[$183]($184); //@line 1755 "_json.c"
        __label__ = 29; break; //@line 1755 "_json.c"
      case 29: // $bb28
        var $185=$s; //@line 1756 "_json.c"
        var $186=$185+16; //@line 1756 "_json.c"
        var $187=HEAP[$186]; //@line 1756 "_json.c"
        var $188=($187)!=0; //@line 1756 "_json.c"
        if ($188) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 1756 "_json.c"
      case 30: // $bb29
        var $189=$s; //@line 1756 "_json.c"
        var $190=$189+16; //@line 1756 "_json.c"
        var $191=HEAP[$190]; //@line 1756 "_json.c"
        $_py_tmp30=$191; //@line 1756 "_json.c"
        var $192=$s; //@line 1756 "_json.c"
        var $193=$192+16; //@line 1756 "_json.c"
        HEAP[$193]=0; //@line 1756 "_json.c"
        var $194=$_py_tmp30; //@line 1756 "_json.c"
        var $195=$194; //@line 1756 "_json.c"
        var $196=HEAP[$195]; //@line 1756 "_json.c"
        var $197=($196) - 1; //@line 1756 "_json.c"
        var $198=$_py_tmp30; //@line 1756 "_json.c"
        var $199=$198; //@line 1756 "_json.c"
        HEAP[$199]=$197; //@line 1756 "_json.c"
        var $200=$_py_tmp30; //@line 1756 "_json.c"
        var $201=$200; //@line 1756 "_json.c"
        var $202=HEAP[$201]; //@line 1756 "_json.c"
        var $203=($202)==0; //@line 1756 "_json.c"
        if ($203) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1756 "_json.c"
      case 31: // $bb31
        var $204=$_py_tmp30; //@line 1756 "_json.c"
        var $205=$204+4; //@line 1756 "_json.c"
        var $206=HEAP[$205]; //@line 1756 "_json.c"
        var $207=$206+24; //@line 1756 "_json.c"
        var $208=HEAP[$207]; //@line 1756 "_json.c"
        var $209=$_py_tmp30; //@line 1756 "_json.c"
        FUNCTION_TABLE[$208]($209); //@line 1756 "_json.c"
        __label__ = 32; break; //@line 1756 "_json.c"
      case 32: // $bb32
        var $210=$s; //@line 1757 "_json.c"
        var $211=$210+20; //@line 1757 "_json.c"
        var $212=HEAP[$211]; //@line 1757 "_json.c"
        var $213=($212)!=0; //@line 1757 "_json.c"
        if ($213) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 1757 "_json.c"
      case 33: // $bb33
        var $214=$s; //@line 1757 "_json.c"
        var $215=$214+20; //@line 1757 "_json.c"
        var $216=HEAP[$215]; //@line 1757 "_json.c"
        $_py_tmp34=$216; //@line 1757 "_json.c"
        var $217=$s; //@line 1757 "_json.c"
        var $218=$217+20; //@line 1757 "_json.c"
        HEAP[$218]=0; //@line 1757 "_json.c"
        var $219=$_py_tmp34; //@line 1757 "_json.c"
        var $220=$219; //@line 1757 "_json.c"
        var $221=HEAP[$220]; //@line 1757 "_json.c"
        var $222=($221) - 1; //@line 1757 "_json.c"
        var $223=$_py_tmp34; //@line 1757 "_json.c"
        var $224=$223; //@line 1757 "_json.c"
        HEAP[$224]=$222; //@line 1757 "_json.c"
        var $225=$_py_tmp34; //@line 1757 "_json.c"
        var $226=$225; //@line 1757 "_json.c"
        var $227=HEAP[$226]; //@line 1757 "_json.c"
        var $228=($227)==0; //@line 1757 "_json.c"
        if ($228) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1757 "_json.c"
      case 34: // $bb35
        var $229=$_py_tmp34; //@line 1757 "_json.c"
        var $230=$229+4; //@line 1757 "_json.c"
        var $231=HEAP[$230]; //@line 1757 "_json.c"
        var $232=$231+24; //@line 1757 "_json.c"
        var $233=HEAP[$232]; //@line 1757 "_json.c"
        var $234=$_py_tmp34; //@line 1757 "_json.c"
        FUNCTION_TABLE[$233]($234); //@line 1757 "_json.c"
        __label__ = 35; break; //@line 1757 "_json.c"
      case 35: // $bb36
        var $235=$s; //@line 1758 "_json.c"
        var $236=$235+24; //@line 1758 "_json.c"
        var $237=HEAP[$236]; //@line 1758 "_json.c"
        var $238=($237)!=0; //@line 1758 "_json.c"
        if ($238) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 1758 "_json.c"
      case 36: // $bb37
        var $239=$s; //@line 1758 "_json.c"
        var $240=$239+24; //@line 1758 "_json.c"
        var $241=HEAP[$240]; //@line 1758 "_json.c"
        $_py_tmp38=$241; //@line 1758 "_json.c"
        var $242=$s; //@line 1758 "_json.c"
        var $243=$242+24; //@line 1758 "_json.c"
        HEAP[$243]=0; //@line 1758 "_json.c"
        var $244=$_py_tmp38; //@line 1758 "_json.c"
        var $245=$244; //@line 1758 "_json.c"
        var $246=HEAP[$245]; //@line 1758 "_json.c"
        var $247=($246) - 1; //@line 1758 "_json.c"
        var $248=$_py_tmp38; //@line 1758 "_json.c"
        var $249=$248; //@line 1758 "_json.c"
        HEAP[$249]=$247; //@line 1758 "_json.c"
        var $250=$_py_tmp38; //@line 1758 "_json.c"
        var $251=$250; //@line 1758 "_json.c"
        var $252=HEAP[$251]; //@line 1758 "_json.c"
        var $253=($252)==0; //@line 1758 "_json.c"
        if ($253) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1758 "_json.c"
      case 37: // $bb39
        var $254=$_py_tmp38; //@line 1758 "_json.c"
        var $255=$254+4; //@line 1758 "_json.c"
        var $256=HEAP[$255]; //@line 1758 "_json.c"
        var $257=$256+24; //@line 1758 "_json.c"
        var $258=HEAP[$257]; //@line 1758 "_json.c"
        var $259=$_py_tmp38; //@line 1758 "_json.c"
        FUNCTION_TABLE[$258]($259); //@line 1758 "_json.c"
        __label__ = 38; break; //@line 1758 "_json.c"
      case 38: // $bb40
        var $260=$s; //@line 1759 "_json.c"
        var $261=$260+28; //@line 1759 "_json.c"
        var $262=HEAP[$261]; //@line 1759 "_json.c"
        var $263=($262)!=0; //@line 1759 "_json.c"
        if ($263) { __label__ = 39; break; } else { __label__ = 41; break; } //@line 1759 "_json.c"
      case 39: // $bb41
        var $264=$s; //@line 1759 "_json.c"
        var $265=$264+28; //@line 1759 "_json.c"
        var $266=HEAP[$265]; //@line 1759 "_json.c"
        $_py_tmp42=$266; //@line 1759 "_json.c"
        var $267=$s; //@line 1759 "_json.c"
        var $268=$267+28; //@line 1759 "_json.c"
        HEAP[$268]=0; //@line 1759 "_json.c"
        var $269=$_py_tmp42; //@line 1759 "_json.c"
        var $270=$269; //@line 1759 "_json.c"
        var $271=HEAP[$270]; //@line 1759 "_json.c"
        var $272=($271) - 1; //@line 1759 "_json.c"
        var $273=$_py_tmp42; //@line 1759 "_json.c"
        var $274=$273; //@line 1759 "_json.c"
        HEAP[$274]=$272; //@line 1759 "_json.c"
        var $275=$_py_tmp42; //@line 1759 "_json.c"
        var $276=$275; //@line 1759 "_json.c"
        var $277=HEAP[$276]; //@line 1759 "_json.c"
        var $278=($277)==0; //@line 1759 "_json.c"
        if ($278) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 1759 "_json.c"
      case 40: // $bb43
        var $279=$_py_tmp42; //@line 1759 "_json.c"
        var $280=$279+4; //@line 1759 "_json.c"
        var $281=HEAP[$280]; //@line 1759 "_json.c"
        var $282=$281+24; //@line 1759 "_json.c"
        var $283=HEAP[$282]; //@line 1759 "_json.c"
        var $284=$_py_tmp42; //@line 1759 "_json.c"
        FUNCTION_TABLE[$283]($284); //@line 1759 "_json.c"
        __label__ = 41; break; //@line 1759 "_json.c"
      case 41: // $bb44
        var $285=$s; //@line 1760 "_json.c"
        var $286=$285+32; //@line 1760 "_json.c"
        var $287=HEAP[$286]; //@line 1760 "_json.c"
        var $288=($287)!=0; //@line 1760 "_json.c"
        if ($288) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 1760 "_json.c"
      case 42: // $bb45
        var $289=$s; //@line 1760 "_json.c"
        var $290=$289+32; //@line 1760 "_json.c"
        var $291=HEAP[$290]; //@line 1760 "_json.c"
        $_py_tmp46=$291; //@line 1760 "_json.c"
        var $292=$s; //@line 1760 "_json.c"
        var $293=$292+32; //@line 1760 "_json.c"
        HEAP[$293]=0; //@line 1760 "_json.c"
        var $294=$_py_tmp46; //@line 1760 "_json.c"
        var $295=$294; //@line 1760 "_json.c"
        var $296=HEAP[$295]; //@line 1760 "_json.c"
        var $297=($296) - 1; //@line 1760 "_json.c"
        var $298=$_py_tmp46; //@line 1760 "_json.c"
        var $299=$298; //@line 1760 "_json.c"
        HEAP[$299]=$297; //@line 1760 "_json.c"
        var $300=$_py_tmp46; //@line 1760 "_json.c"
        var $301=$300; //@line 1760 "_json.c"
        var $302=HEAP[$301]; //@line 1760 "_json.c"
        var $303=($302)==0; //@line 1760 "_json.c"
        if ($303) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1760 "_json.c"
      case 43: // $bb47
        var $304=$_py_tmp46; //@line 1760 "_json.c"
        var $305=$304+4; //@line 1760 "_json.c"
        var $306=HEAP[$305]; //@line 1760 "_json.c"
        var $307=$306+24; //@line 1760 "_json.c"
        var $308=HEAP[$307]; //@line 1760 "_json.c"
        var $309=$_py_tmp46; //@line 1760 "_json.c"
        FUNCTION_TABLE[$308]($309); //@line 1760 "_json.c"
        __label__ = 44; break; //@line 1760 "_json.c"
      case 44: // $bb48
        $0=-1; //@line 1761 "_json.c"
        __label__ = 45; break; //@line 1761 "_json.c"
      case 45: // $bb49
        var $310=$0; //@line 1713 "_json.c"
        $retval=$310; //@line 1713 "_json.c"
        var $retval50=$retval; //@line 1713 "_json.c"
        STACKTOP = __stackBase__;
        return $retval50; //@line 1713 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_new($type, $args, $kwds) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $s;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 1814 "_json.c"
        var $2=$1+152; //@line 1814 "_json.c"
        var $3=HEAP[$2]; //@line 1814 "_json.c"
        var $4=$type_addr; //@line 1814 "_json.c"
        var $5=FUNCTION_TABLE[$3]($4, 0); //@line 1814 "_json.c"
        var $6=$5; //@line 1814 "_json.c"
        $s=$6; //@line 1814 "_json.c"
        var $7=$s; //@line 1815 "_json.c"
        var $8=($7)!=0; //@line 1815 "_json.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1815 "_json.c"
      case 1: // $bb
        var $9=$s; //@line 1816 "_json.c"
        var $10=$9+8; //@line 1816 "_json.c"
        HEAP[$10]=0; //@line 1816 "_json.c"
        var $11=$s; //@line 1817 "_json.c"
        var $12=$11+12; //@line 1817 "_json.c"
        HEAP[$12]=0; //@line 1817 "_json.c"
        var $13=$s; //@line 1818 "_json.c"
        var $14=$13+16; //@line 1818 "_json.c"
        HEAP[$14]=0; //@line 1818 "_json.c"
        var $15=$s; //@line 1819 "_json.c"
        var $16=$15+20; //@line 1819 "_json.c"
        HEAP[$16]=0; //@line 1819 "_json.c"
        var $17=$s; //@line 1820 "_json.c"
        var $18=$17+24; //@line 1820 "_json.c"
        HEAP[$18]=0; //@line 1820 "_json.c"
        var $19=$s; //@line 1821 "_json.c"
        var $20=$19+28; //@line 1821 "_json.c"
        HEAP[$20]=0; //@line 1821 "_json.c"
        var $21=$s; //@line 1822 "_json.c"
        var $22=$21+32; //@line 1822 "_json.c"
        HEAP[$22]=0; //@line 1822 "_json.c"
        var $23=$s; //@line 1823 "_json.c"
        var $24=$23+36; //@line 1823 "_json.c"
        HEAP[$24]=0; //@line 1823 "_json.c"
        __label__ = 2; break; //@line 1823 "_json.c"
      case 2: // $bb1
        var $25=$s; //@line 1825 "_json.c"
        var $26=$25; //@line 1825 "_json.c"
        $0=$26; //@line 1825 "_json.c"
        var $27=$0; //@line 1825 "_json.c"
        $retval=$27; //@line 1825 "_json.c"
        var $retval2=$retval; //@line 1825 "_json.c"
        ;
        return $retval2; //@line 1825 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_init($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $iftmp_146;
        var $0;
        var $s;
        var $markers=__stackBase__;
        var $defaultfn=__stackBase__+4;
        var $encoder=__stackBase__+8;
        var $indent=__stackBase__+12;
        var $key_separator=__stackBase__+16;
        var $item_separator=__stackBase__+20;
        var $sort_keys=__stackBase__+24;
        var $skipkeys=__stackBase__+28;
        var $allow_nan=__stackBase__+32;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$self_addr; //@line 1838 "_json.c"
        var $2=$1+4; //@line 1838 "_json.c"
        var $3=HEAP[$2]; //@line 1838 "_json.c"
        var $4=($3)!=(_PyEncoderType); //@line 1838 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1838 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1838 "_json.c"
        var $6=$5+4; //@line 1838 "_json.c"
        var $7=HEAP[$6]; //@line 1838 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyEncoderType); //@line 1838 "_json.c"
        var $9=($8)==0; //@line 1838 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1838 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str47, __str29, 1838, ___PRETTY_FUNCTION___10949); //@line 1838 "_json.c"
        throw "Reached an unreachable!" //@line 1838 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 1839 "_json.c"
        var $11=$10; //@line 1839 "_json.c"
        $s=$11; //@line 1839 "_json.c"
        var $12=$args_addr; //@line 1841 "_json.c"
        var $13=$kwds_addr; //@line 1841 "_json.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, __str48, _kwlist_10938, $markers, $defaultfn, $encoder, $indent, $key_separator, $item_separator, $sort_keys, $skipkeys, $allow_nan); //@line 1841 "_json.c"
        var $15=($14)==0; //@line 1841 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1841 "_json.c"
      case 4: // $bb3
        $0=-1; //@line 1844 "_json.c"
        __label__ = 10; break; //@line 1844 "_json.c"
      case 5: // $bb4
        var $16=HEAP[$markers]; //@line 1846 "_json.c"
        var $17=$s; //@line 1846 "_json.c"
        var $18=$17+8; //@line 1846 "_json.c"
        HEAP[$18]=$16; //@line 1846 "_json.c"
        var $19=HEAP[$defaultfn]; //@line 1847 "_json.c"
        var $20=$s; //@line 1847 "_json.c"
        var $21=$20+12; //@line 1847 "_json.c"
        HEAP[$21]=$19; //@line 1847 "_json.c"
        var $22=HEAP[$encoder]; //@line 1848 "_json.c"
        var $23=$s; //@line 1848 "_json.c"
        var $24=$23+16; //@line 1848 "_json.c"
        HEAP[$24]=$22; //@line 1848 "_json.c"
        var $25=HEAP[$indent]; //@line 1849 "_json.c"
        var $26=$s; //@line 1849 "_json.c"
        var $27=$26+20; //@line 1849 "_json.c"
        HEAP[$27]=$25; //@line 1849 "_json.c"
        var $28=HEAP[$key_separator]; //@line 1850 "_json.c"
        var $29=$s; //@line 1850 "_json.c"
        var $30=$29+24; //@line 1850 "_json.c"
        HEAP[$30]=$28; //@line 1850 "_json.c"
        var $31=HEAP[$item_separator]; //@line 1851 "_json.c"
        var $32=$s; //@line 1851 "_json.c"
        var $33=$32+28; //@line 1851 "_json.c"
        HEAP[$33]=$31; //@line 1851 "_json.c"
        var $34=HEAP[$sort_keys]; //@line 1852 "_json.c"
        var $35=$s; //@line 1852 "_json.c"
        var $36=$35+32; //@line 1852 "_json.c"
        HEAP[$36]=$34; //@line 1852 "_json.c"
        var $37=HEAP[$skipkeys]; //@line 1853 "_json.c"
        var $38=$s; //@line 1853 "_json.c"
        var $39=$38+36; //@line 1853 "_json.c"
        HEAP[$39]=$37; //@line 1853 "_json.c"
        var $40=$s; //@line 1854 "_json.c"
        var $41=$40+16; //@line 1854 "_json.c"
        var $42=HEAP[$41]; //@line 1854 "_json.c"
        var $43=$42+4; //@line 1854 "_json.c"
        var $44=HEAP[$43]; //@line 1854 "_json.c"
        var $45=($44)!=(_PyCFunction_Type); //@line 1854 "_json.c"
        if ($45) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1854 "_json.c"
      case 6: // $bb5
        var $46=$s; //@line 1854 "_json.c"
        var $47=$46+16; //@line 1854 "_json.c"
        var $48=HEAP[$47]; //@line 1854 "_json.c"
        var $49=_PyCFunction_GetFunction($48); //@line 1854 "_json.c"
        var $50=($49)!=((FUNCTION_TABLE_OFFSET + 6)); //@line 1854 "_json.c"
        if ($50) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1854 "_json.c"
      case 7: // $bb6
        $iftmp_146=1; //@line 1854 "_json.c"
        __label__ = 9; break; //@line 1854 "_json.c"
      case 8: // $bb7
        $iftmp_146=0; //@line 1854 "_json.c"
        __label__ = 9; break; //@line 1854 "_json.c"
      case 9: // $bb8
        var $51=$s; //@line 1854 "_json.c"
        var $52=$51+40; //@line 1854 "_json.c"
        var $53=$iftmp_146; //@line 1854 "_json.c"
        HEAP[$52]=$53; //@line 1854 "_json.c"
        var $54=HEAP[$allow_nan]; //@line 1855 "_json.c"
        var $55=_PyObject_IsTrue($54); //@line 1855 "_json.c"
        var $56=$s; //@line 1855 "_json.c"
        var $57=$56+44; //@line 1855 "_json.c"
        HEAP[$57]=$55; //@line 1855 "_json.c"
        var $58=$s; //@line 1857 "_json.c"
        var $59=$58+8; //@line 1857 "_json.c"
        var $60=HEAP[$59]; //@line 1857 "_json.c"
        var $61=$60; //@line 1857 "_json.c"
        var $62=HEAP[$61]; //@line 1857 "_json.c"
        var $63=($62) + 1; //@line 1857 "_json.c"
        var $64=$60; //@line 1857 "_json.c"
        HEAP[$64]=$63; //@line 1857 "_json.c"
        var $65=$s; //@line 1858 "_json.c"
        var $66=$65+12; //@line 1858 "_json.c"
        var $67=HEAP[$66]; //@line 1858 "_json.c"
        var $68=$67; //@line 1858 "_json.c"
        var $69=HEAP[$68]; //@line 1858 "_json.c"
        var $70=($69) + 1; //@line 1858 "_json.c"
        var $71=$67; //@line 1858 "_json.c"
        HEAP[$71]=$70; //@line 1858 "_json.c"
        var $72=$s; //@line 1859 "_json.c"
        var $73=$72+16; //@line 1859 "_json.c"
        var $74=HEAP[$73]; //@line 1859 "_json.c"
        var $75=$74; //@line 1859 "_json.c"
        var $76=HEAP[$75]; //@line 1859 "_json.c"
        var $77=($76) + 1; //@line 1859 "_json.c"
        var $78=$74; //@line 1859 "_json.c"
        HEAP[$78]=$77; //@line 1859 "_json.c"
        var $79=$s; //@line 1860 "_json.c"
        var $80=$79+20; //@line 1860 "_json.c"
        var $81=HEAP[$80]; //@line 1860 "_json.c"
        var $82=$81; //@line 1860 "_json.c"
        var $83=HEAP[$82]; //@line 1860 "_json.c"
        var $84=($83) + 1; //@line 1860 "_json.c"
        var $85=$81; //@line 1860 "_json.c"
        HEAP[$85]=$84; //@line 1860 "_json.c"
        var $86=$s; //@line 1861 "_json.c"
        var $87=$86+24; //@line 1861 "_json.c"
        var $88=HEAP[$87]; //@line 1861 "_json.c"
        var $89=$88; //@line 1861 "_json.c"
        var $90=HEAP[$89]; //@line 1861 "_json.c"
        var $91=($90) + 1; //@line 1861 "_json.c"
        var $92=$88; //@line 1861 "_json.c"
        HEAP[$92]=$91; //@line 1861 "_json.c"
        var $93=$s; //@line 1862 "_json.c"
        var $94=$93+28; //@line 1862 "_json.c"
        var $95=HEAP[$94]; //@line 1862 "_json.c"
        var $96=$95; //@line 1862 "_json.c"
        var $97=HEAP[$96]; //@line 1862 "_json.c"
        var $98=($97) + 1; //@line 1862 "_json.c"
        var $99=$95; //@line 1862 "_json.c"
        HEAP[$99]=$98; //@line 1862 "_json.c"
        var $100=$s; //@line 1863 "_json.c"
        var $101=$100+32; //@line 1863 "_json.c"
        var $102=HEAP[$101]; //@line 1863 "_json.c"
        var $103=$102; //@line 1863 "_json.c"
        var $104=HEAP[$103]; //@line 1863 "_json.c"
        var $105=($104) + 1; //@line 1863 "_json.c"
        var $106=$102; //@line 1863 "_json.c"
        HEAP[$106]=$105; //@line 1863 "_json.c"
        var $107=$s; //@line 1864 "_json.c"
        var $108=$107+36; //@line 1864 "_json.c"
        var $109=HEAP[$108]; //@line 1864 "_json.c"
        var $110=$109; //@line 1864 "_json.c"
        var $111=HEAP[$110]; //@line 1864 "_json.c"
        var $112=($111) + 1; //@line 1864 "_json.c"
        var $113=$109; //@line 1864 "_json.c"
        HEAP[$113]=$112; //@line 1864 "_json.c"
        $0=0; //@line 1865 "_json.c"
        __label__ = 10; break; //@line 1865 "_json.c"
      case 10: // $bb9
        var $114=$0; //@line 1844 "_json.c"
        $retval=$114; //@line 1844 "_json.c"
        var $retval10=$retval; //@line 1844 "_json.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1844 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_call($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $obj=__stackBase__;
        var $rval;
        var $indent_level=__stackBase__+4;
        var $s;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$self_addr; //@line 1877 "_json.c"
        var $2=$1+4; //@line 1877 "_json.c"
        var $3=HEAP[$2]; //@line 1877 "_json.c"
        var $4=($3)!=(_PyEncoderType); //@line 1877 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1877 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1877 "_json.c"
        var $6=$5+4; //@line 1877 "_json.c"
        var $7=HEAP[$6]; //@line 1877 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyEncoderType); //@line 1877 "_json.c"
        var $9=($8)==0; //@line 1877 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1877 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str47, __str29, 1877, ___PRETTY_FUNCTION___11015); //@line 1877 "_json.c"
        throw "Reached an unreachable!" //@line 1877 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 1878 "_json.c"
        var $11=$10; //@line 1878 "_json.c"
        $s=$11; //@line 1878 "_json.c"
        var $12=$args_addr; //@line 1879 "_json.c"
        var $13=$kwds_addr; //@line 1879 "_json.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, __str50, _kwlist_11010, $obj, (FUNCTION_TABLE_OFFSET + 4), $indent_level); //@line 1879 "_json.c"
        var $15=($14)==0; //@line 1879 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1879 "_json.c"
      case 4: // $bb3
        $0=0; //@line 1881 "_json.c"
        __label__ = 12; break; //@line 1881 "_json.c"
      case 5: // $bb4
        var $16=_PyList_New(0); //@line 1882 "_json.c"
        $rval=$16; //@line 1882 "_json.c"
        var $17=$rval; //@line 1883 "_json.c"
        var $18=($17)==0; //@line 1883 "_json.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1883 "_json.c"
      case 6: // $bb5
        $0=0; //@line 1884 "_json.c"
        __label__ = 12; break; //@line 1884 "_json.c"
      case 7: // $bb6
        var $19=HEAP[$indent_level]; //@line 1885 "_json.c"
        var $20=HEAP[$obj]; //@line 1885 "_json.c"
        var $21=$s; //@line 1885 "_json.c"
        var $22=$rval; //@line 1885 "_json.c"
        var $23=_encoder_listencode_obj($21, $22, $20, $19); //@line 1885 "_json.c"
        var $24=($23)!=0; //@line 1885 "_json.c"
        var $25=$rval; //@line 1886 "_json.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1885 "_json.c"
      case 8: // $bb7
        var $26=$25; //@line 1886 "_json.c"
        var $27=HEAP[$26]; //@line 1886 "_json.c"
        var $28=($27) - 1; //@line 1886 "_json.c"
        var $29=$rval; //@line 1886 "_json.c"
        var $30=$29; //@line 1886 "_json.c"
        HEAP[$30]=$28; //@line 1886 "_json.c"
        var $31=$rval; //@line 1886 "_json.c"
        var $32=$31; //@line 1886 "_json.c"
        var $33=HEAP[$32]; //@line 1886 "_json.c"
        var $34=($33)==0; //@line 1886 "_json.c"
        if ($34) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1886 "_json.c"
      case 9: // $bb8
        var $35=$rval; //@line 1886 "_json.c"
        var $36=$35+4; //@line 1886 "_json.c"
        var $37=HEAP[$36]; //@line 1886 "_json.c"
        var $38=$37+24; //@line 1886 "_json.c"
        var $39=HEAP[$38]; //@line 1886 "_json.c"
        var $40=$rval; //@line 1886 "_json.c"
        FUNCTION_TABLE[$39]($40); //@line 1886 "_json.c"
        __label__ = 10; break; //@line 1886 "_json.c"
      case 10: // $bb9
        $0=0; //@line 1887 "_json.c"
        __label__ = 12; break; //@line 1887 "_json.c"
      case 11: // $bb10
        $0=$25; //@line 1889 "_json.c"
        __label__ = 12; break; //@line 1889 "_json.c"
      case 12: // $bb11
        var $41=$0; //@line 1881 "_json.c"
        $retval=$41; //@line 1881 "_json.c"
        var $retval12=$retval; //@line 1881 "_json.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 1881 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __encoded_const($obj) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $obj_addr;
        var $retval;
        var $0;
        $obj_addr=$obj;
        var $1=$obj_addr; //@line 1896 "_json.c"
        var $2=($1)==(__Py_NoneStruct); //@line 1896 "_json.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1896 "_json.c"
      case 1: // $bb
        var $3=HEAP[_s_null_11046]; //@line 1898 "_json.c"
        var $4=($3)==0; //@line 1898 "_json.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1898 "_json.c"
      case 2: // $bb1
        var $5=_PyString_InternFromString(__str53); //@line 1899 "_json.c"
        HEAP[_s_null_11046]=$5; //@line 1899 "_json.c"
        __label__ = 3; break; //@line 1899 "_json.c"
      case 3: // $bb2
        var $6=HEAP[_s_null_11046]; //@line 1901 "_json.c"
        var $7=$6; //@line 1901 "_json.c"
        var $8=HEAP[$7]; //@line 1901 "_json.c"
        var $9=($8) + 1; //@line 1901 "_json.c"
        var $10=$6; //@line 1901 "_json.c"
        HEAP[$10]=$9; //@line 1901 "_json.c"
        var $11=HEAP[_s_null_11046]; //@line 1902 "_json.c"
        $0=$11; //@line 1902 "_json.c"
        __label__ = 13; break; //@line 1902 "_json.c"
      case 4: // $bb3
        var $12=$obj_addr; //@line 1904 "_json.c"
        var $13=($12)==(__Py_TrueStruct); //@line 1904 "_json.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1904 "_json.c"
      case 5: // $bb4
        var $14=HEAP[_s_true_11047]; //@line 1906 "_json.c"
        var $15=($14)==0; //@line 1906 "_json.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1906 "_json.c"
      case 6: // $bb5
        var $16=_PyString_InternFromString(__str54); //@line 1907 "_json.c"
        HEAP[_s_true_11047]=$16; //@line 1907 "_json.c"
        __label__ = 7; break; //@line 1907 "_json.c"
      case 7: // $bb6
        var $17=HEAP[_s_true_11047]; //@line 1909 "_json.c"
        var $18=$17; //@line 1909 "_json.c"
        var $19=HEAP[$18]; //@line 1909 "_json.c"
        var $20=($19) + 1; //@line 1909 "_json.c"
        var $21=$17; //@line 1909 "_json.c"
        HEAP[$21]=$20; //@line 1909 "_json.c"
        var $22=HEAP[_s_true_11047]; //@line 1910 "_json.c"
        $0=$22; //@line 1910 "_json.c"
        __label__ = 13; break; //@line 1910 "_json.c"
      case 8: // $bb7
        var $23=$obj_addr; //@line 1912 "_json.c"
        var $24=($23)==(__Py_ZeroStruct); //@line 1912 "_json.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1912 "_json.c"
      case 9: // $bb8
        var $25=HEAP[_s_false_11048]; //@line 1914 "_json.c"
        var $26=($25)==0; //@line 1914 "_json.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1914 "_json.c"
      case 10: // $bb9
        var $27=_PyString_InternFromString(__str55); //@line 1915 "_json.c"
        HEAP[_s_false_11048]=$27; //@line 1915 "_json.c"
        __label__ = 11; break; //@line 1915 "_json.c"
      case 11: // $bb10
        var $28=HEAP[_s_false_11048]; //@line 1917 "_json.c"
        var $29=$28; //@line 1917 "_json.c"
        var $30=HEAP[$29]; //@line 1917 "_json.c"
        var $31=($30) + 1; //@line 1917 "_json.c"
        var $32=$28; //@line 1917 "_json.c"
        HEAP[$32]=$31; //@line 1917 "_json.c"
        var $33=HEAP[_s_false_11048]; //@line 1918 "_json.c"
        $0=$33; //@line 1918 "_json.c"
        __label__ = 13; break; //@line 1918 "_json.c"
      case 12: // $bb11
        var $34=HEAP[_PyExc_ValueError]; //@line 1921 "_json.c"
        _PyErr_SetString($34, __str56); //@line 1921 "_json.c"
        $0=0; //@line 1922 "_json.c"
        __label__ = 13; break; //@line 1922 "_json.c"
      case 13: // $bb12
        var $35=$0; //@line 1902 "_json.c"
        $retval=$35; //@line 1902 "_json.c"
        var $retval13=$retval; //@line 1902 "_json.c"
        ;
        return $retval13; //@line 1902 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_encode_float($s, $obj) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $obj_addr;
        var $retval;
        var $0;
        var $i;
        $s_addr=$s;
        $obj_addr=$obj;
        var $1=$obj_addr; //@line 1930 "_json.c"
        var $2=$1; //@line 1930 "_json.c"
        var $3=$2+8; //@line 1930 "_json.c"
        var $4=HEAP[$3]; //@line 1930 "_json.c"
        $i=$4; //@line 1930 "_json.c"
        var $5=$i; //@line 1931 "_json.c"
        var $6=___finite($5); //@line 1931 "_json.c"
        var $7=($6)==0; //@line 1931 "_json.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 8; break; } //@line 1931 "_json.c"
      case 1: // $bb
        var $8=$s_addr; //@line 1932 "_json.c"
        var $9=$8+44; //@line 1932 "_json.c"
        var $10=HEAP[$9]; //@line 1932 "_json.c"
        var $11=($10)==0; //@line 1932 "_json.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1932 "_json.c"
      case 2: // $bb1
        var $12=HEAP[_PyExc_ValueError]; //@line 1933 "_json.c"
        _PyErr_SetString($12, __str57); //@line 1933 "_json.c"
        $0=0; //@line 1934 "_json.c"
        __label__ = 9; break; //@line 1934 "_json.c"
      case 3: // $bb2
        var $13=$i; //@line 1936 "_json.c"
        var $14=($13) > 0; //@line 1936 "_json.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1936 "_json.c"
      case 4: // $bb3
        var $15=_PyString_FromString(__str37); //@line 1937 "_json.c"
        $0=$15; //@line 1937 "_json.c"
        __label__ = 9; break; //@line 1937 "_json.c"
      case 5: // $bb4
        var $16=$i; //@line 1939 "_json.c"
        var $17=($16) < 0; //@line 1939 "_json.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1939 "_json.c"
      case 6: // $bb5
        var $18=_PyString_FromString(__str38); //@line 1940 "_json.c"
        $0=$18; //@line 1940 "_json.c"
        __label__ = 9; break; //@line 1940 "_json.c"
      case 7: // $bb6
        var $19=_PyString_FromString(__str36); //@line 1943 "_json.c"
        $0=$19; //@line 1943 "_json.c"
        __label__ = 9; break; //@line 1943 "_json.c"
      case 8: // $bb7
        var $20=$obj_addr; //@line 1947 "_json.c"
        var $21=_PyObject_Repr($20); //@line 1947 "_json.c"
        $0=$21; //@line 1947 "_json.c"
        __label__ = 9; break; //@line 1947 "_json.c"
      case 9: // $bb8
        var $22=$0; //@line 1934 "_json.c"
        $retval=$22; //@line 1934 "_json.c"
        var $retval9=$retval; //@line 1934 "_json.c"
        ;
        return $retval9; //@line 1934 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_listencode_obj($s, $rval, $obj, $indent_level) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr_i32;
        var $rval_addr_i33;
        var $seq_addr_i;
        var $indent_level_addr_i34;
        var $retval_i35;
        var $iftmp_196_i;
        var $0;
        var $ident_i36;
        var $s_fast_i;
        var $num_items_i;
        var $seq_items_i;
        var $i_i;
        var $has_key_i37;
        var $obj_i;
        var $_py_tmp_i38;
        var $s_addr_i_i;
        var $obj_addr_i_i;
        var $retval_i_i;
        var $1;
        var $s_addr_i30;
        var $rval_addr_i;
        var $dct_addr_i;
        var $indent_level_addr_i;
        var $retval_i31;
        var $2;
        var $kstr_i;
        var $ident_i;
        var $key_i;
        var $value_i;
        var $it_i;
        var $skipkeys_i;
        var $idx_i;
        var $has_key_i;
        var $encoded_i;
        var $_py_tmp_i;
        var $_py_tmp58_i;
        var $_py_tmp66_i;
        var $_py_tmp72_i;
        var $lst_addr_i22;
        var $stolen_addr_i23;
        var $retval_i24;
        var $3;
        var $rval_i25;
        var $lst_addr_i14;
        var $stolen_addr_i15;
        var $retval_i16;
        var $4;
        var $rval_i17;
        var $lst_addr_i6;
        var $stolen_addr_i7;
        var $retval_i8;
        var $5;
        var $rval_i9;
        var $s_addr_i;
        var $obj_addr_i;
        var $retval_i4;
        var $6;
        var $lst_addr_i;
        var $stolen_addr_i;
        var $retval_i;
        var $7;
        var $rval_i;
        var $s_addr;
        var $rval_addr;
        var $obj_addr;
        var $indent_level_addr;
        var $retval;
        var $8;
        var $newobj;
        var $rv;
        var $cstr;
        var $encoded;
        var $encoded13;
        var $encoded19;
        var $ident;
        var $has_key;
        $s_addr=$s;
        $rval_addr=$rval;
        $obj_addr=$obj;
        $indent_level_addr=$indent_level;
        var $9=$obj_addr; //@line 1976 "_json.c"
        var $10=($9)==(__Py_NoneStruct); //@line 1976 "_json.c"
        var $11=$obj_addr; //@line 1976 "_json.c"
        var $12=($11)==(__Py_TrueStruct); //@line 1976 "_json.c"
        var $or_cond=($10) | ($12);
        var $13=$obj_addr; //@line 1976 "_json.c"
        var $14=($13)==(__Py_ZeroStruct); //@line 1976 "_json.c"
        var $or_cond3=($or_cond) | ($14);
        var $15=$obj_addr; //@line 1977 "_json.c"
        if ($or_cond3) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 1976 "_json.c"
      case 1: // $bb2
        var $16=__encoded_const($15); //@line 1977 "_json.c"
        $cstr=$16; //@line 1977 "_json.c"
        var $17=$cstr; //@line 1978 "_json.c"
        var $18=($17)==0; //@line 1978 "_json.c"
        if ($18) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1978 "_json.c"
      case 2: // $bb3
        $8=-1; //@line 1979 "_json.c"
        __label__ = 203; break; //@line 1979 "_json.c"
      case 3: // $bb4
        var $19=$rval_addr; //@line 1980 "_json.c"
        var $20=$cstr; //@line 1980 "_json.c"
        $lst_addr_i=$19;
        $stolen_addr_i=$20;
        var $21=$lst_addr_i; //@line 1964 "_json.c"
        var $22=$stolen_addr_i; //@line 1964 "_json.c"
        var $23=_PyList_Append($21, $22); //@line 1964 "_json.c"
        $rval_i=$23; //@line 1964 "_json.c"
        var $24=$stolen_addr_i; //@line 1965 "_json.c"
        var $25=$24; //@line 1965 "_json.c"
        var $26=HEAP[$25]; //@line 1965 "_json.c"
        var $27=($26) - 1; //@line 1965 "_json.c"
        var $28=$stolen_addr_i; //@line 1965 "_json.c"
        var $29=$28; //@line 1965 "_json.c"
        HEAP[$29]=$27; //@line 1965 "_json.c"
        var $30=$stolen_addr_i; //@line 1965 "_json.c"
        var $31=$30; //@line 1965 "_json.c"
        var $32=HEAP[$31]; //@line 1965 "_json.c"
        var $33=($32)==0; //@line 1965 "_json.c"
        if ($33) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1965 "_json.c"
      case 4: // $bb_i
        var $34=$stolen_addr_i; //@line 1965 "_json.c"
        var $35=$34+4; //@line 1965 "_json.c"
        var $36=HEAP[$35]; //@line 1965 "_json.c"
        var $37=$36+24; //@line 1965 "_json.c"
        var $38=HEAP[$37]; //@line 1965 "_json.c"
        var $39=$stolen_addr_i; //@line 1965 "_json.c"
        FUNCTION_TABLE[$38]($39); //@line 1965 "_json.c"
        __label__ = 5; break; //@line 1965 "_json.c"
      case 5: // $_steal_list_append_exit
        var $40=$rval_i; //@line 1966 "_json.c"
        $7=$40; //@line 1966 "_json.c"
        var $41=$7; //@line 1966 "_json.c"
        $retval_i=$41; //@line 1966 "_json.c"
        var $retval2_i=$retval_i; //@line 1966 "_json.c"
        $8=$retval2_i; //@line 1980 "_json.c"
        __label__ = 203; break; //@line 1980 "_json.c"
      case 6: // $bb5
        var $42=$15+4; //@line 1982 "_json.c"
        var $43=HEAP[$42]; //@line 1982 "_json.c"
        var $44=$43+84; //@line 1982 "_json.c"
        var $45=HEAP[$44]; //@line 1982 "_json.c"
        var $46=($45) & 134217728; //@line 1982 "_json.c"
        var $47=($46)!=0; //@line 1982 "_json.c"
        if ($47) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1982 "_json.c"
      case 7: // $bb6
        var $48=$obj_addr; //@line 1982 "_json.c"
        var $49=$48+4; //@line 1982 "_json.c"
        var $50=HEAP[$49]; //@line 1982 "_json.c"
        var $51=$50+84; //@line 1982 "_json.c"
        var $52=HEAP[$51]; //@line 1982 "_json.c"
        var $53=($52) & 268435456; //@line 1982 "_json.c"
        var $54=($53)!=0; //@line 1982 "_json.c"
        if ($54) { __label__ = 8; break; } else { __label__ = 16; break; } //@line 1982 "_json.c"
      case 8: // $bb7
        var $55=$s_addr; //@line 1984 "_json.c"
        var $56=$obj_addr; //@line 1984 "_json.c"
        $s_addr_i=$55;
        $obj_addr_i=$56;
        var $57=$s_addr_i; //@line 1954 "_json.c"
        var $58=$57+40; //@line 1954 "_json.c"
        var $59=HEAP[$58]; //@line 1954 "_json.c"
        var $60=($59)!=0; //@line 1954 "_json.c"
        if ($60) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1954 "_json.c"
      case 9: // $bb_i5
        var $61=$obj_addr_i; //@line 1955 "_json.c"
        var $62=_py_encode_basestring_ascii(0, $61); //@line 1955 "_json.c"
        $6=$62; //@line 1955 "_json.c"
        __lastLabel__ = 9; __label__ = 11; break; //@line 1955 "_json.c"
      case 10: // $bb1_i
        var $63=$s_addr_i; //@line 1957 "_json.c"
        var $64=$63+16; //@line 1957 "_json.c"
        var $65=HEAP[$64]; //@line 1957 "_json.c"
        var $66=$obj_addr_i; //@line 1957 "_json.c"
        var $67=_PyObject_CallFunctionObjArgs($65, $66, 0); //@line 1957 "_json.c"
        $6=$67; //@line 1957 "_json.c"
        __lastLabel__ = 10; __label__ = 11; break; //@line 1957 "_json.c"
      case 11: // $encoder_encode_string_exit
        var $68=__lastLabel__ == 9 ? $62 : ($67);
        $retval_i4=$68; //@line 1955 "_json.c"
        $encoded=$68; //@line 1984 "_json.c"
        var $69=($68)==0; //@line 1985 "_json.c"
        if ($69) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1985 "_json.c"
      case 12: // $bb8
        $8=-1; //@line 1986 "_json.c"
        __label__ = 203; break; //@line 1986 "_json.c"
      case 13: // $bb9
        var $70=$rval_addr; //@line 1987 "_json.c"
        var $71=$encoded; //@line 1987 "_json.c"
        $lst_addr_i6=$70;
        $stolen_addr_i7=$71;
        var $72=$lst_addr_i6; //@line 1964 "_json.c"
        var $73=$stolen_addr_i7; //@line 1964 "_json.c"
        var $74=_PyList_Append($72, $73); //@line 1964 "_json.c"
        $rval_i9=$74; //@line 1964 "_json.c"
        var $75=$stolen_addr_i7; //@line 1965 "_json.c"
        var $76=$75; //@line 1965 "_json.c"
        var $77=HEAP[$76]; //@line 1965 "_json.c"
        var $78=($77) - 1; //@line 1965 "_json.c"
        var $79=$stolen_addr_i7; //@line 1965 "_json.c"
        var $80=$79; //@line 1965 "_json.c"
        HEAP[$80]=$78; //@line 1965 "_json.c"
        var $81=$stolen_addr_i7; //@line 1965 "_json.c"
        var $82=$81; //@line 1965 "_json.c"
        var $83=HEAP[$82]; //@line 1965 "_json.c"
        var $84=($83)==0; //@line 1965 "_json.c"
        if ($84) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1965 "_json.c"
      case 14: // $bb_i10
        var $85=$stolen_addr_i7; //@line 1965 "_json.c"
        var $86=$85+4; //@line 1965 "_json.c"
        var $87=HEAP[$86]; //@line 1965 "_json.c"
        var $88=$87+24; //@line 1965 "_json.c"
        var $89=HEAP[$88]; //@line 1965 "_json.c"
        var $90=$stolen_addr_i7; //@line 1965 "_json.c"
        FUNCTION_TABLE[$89]($90); //@line 1965 "_json.c"
        __label__ = 15; break; //@line 1965 "_json.c"
      case 15: // $_steal_list_append_exit13
        var $91=$rval_i9; //@line 1966 "_json.c"
        $5=$91; //@line 1966 "_json.c"
        var $92=$5; //@line 1966 "_json.c"
        $retval_i8=$92; //@line 1966 "_json.c"
        var $retval2_i11=$retval_i8; //@line 1966 "_json.c"
        $8=$retval2_i11; //@line 1987 "_json.c"
        __label__ = 203; break; //@line 1987 "_json.c"
      case 16: // $bb10
        var $93=$obj_addr; //@line 1989 "_json.c"
        var $94=$93+4; //@line 1989 "_json.c"
        var $95=HEAP[$94]; //@line 1989 "_json.c"
        var $96=$95+84; //@line 1989 "_json.c"
        var $97=HEAP[$96]; //@line 1989 "_json.c"
        var $98=($97) & 8388608; //@line 1989 "_json.c"
        var $99=($98)!=0; //@line 1989 "_json.c"
        if ($99) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 1989 "_json.c"
      case 17: // $bb11
        var $100=$obj_addr; //@line 1989 "_json.c"
        var $101=$100+4; //@line 1989 "_json.c"
        var $102=HEAP[$101]; //@line 1989 "_json.c"
        var $103=$102+84; //@line 1989 "_json.c"
        var $104=HEAP[$103]; //@line 1989 "_json.c"
        var $105=($104) & 16777216; //@line 1989 "_json.c"
        var $106=($105)!=0; //@line 1989 "_json.c"
        if ($106) { __label__ = 18; break; } else { __label__ = 23; break; } //@line 1989 "_json.c"
      case 18: // $bb12
        var $107=$obj_addr; //@line 1990 "_json.c"
        var $108=_PyObject_Str($107); //@line 1990 "_json.c"
        $encoded13=$108; //@line 1990 "_json.c"
        var $109=($108)==0; //@line 1991 "_json.c"
        if ($109) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1991 "_json.c"
      case 19: // $bb14
        $8=-1; //@line 1992 "_json.c"
        __label__ = 203; break; //@line 1992 "_json.c"
      case 20: // $bb15
        var $110=$rval_addr; //@line 1993 "_json.c"
        var $111=$encoded13; //@line 1993 "_json.c"
        $lst_addr_i14=$110;
        $stolen_addr_i15=$111;
        var $112=$lst_addr_i14; //@line 1964 "_json.c"
        var $113=$stolen_addr_i15; //@line 1964 "_json.c"
        var $114=_PyList_Append($112, $113); //@line 1964 "_json.c"
        $rval_i17=$114; //@line 1964 "_json.c"
        var $115=$stolen_addr_i15; //@line 1965 "_json.c"
        var $116=$115; //@line 1965 "_json.c"
        var $117=HEAP[$116]; //@line 1965 "_json.c"
        var $118=($117) - 1; //@line 1965 "_json.c"
        var $119=$stolen_addr_i15; //@line 1965 "_json.c"
        var $120=$119; //@line 1965 "_json.c"
        HEAP[$120]=$118; //@line 1965 "_json.c"
        var $121=$stolen_addr_i15; //@line 1965 "_json.c"
        var $122=$121; //@line 1965 "_json.c"
        var $123=HEAP[$122]; //@line 1965 "_json.c"
        var $124=($123)==0; //@line 1965 "_json.c"
        if ($124) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1965 "_json.c"
      case 21: // $bb_i18
        var $125=$stolen_addr_i15; //@line 1965 "_json.c"
        var $126=$125+4; //@line 1965 "_json.c"
        var $127=HEAP[$126]; //@line 1965 "_json.c"
        var $128=$127+24; //@line 1965 "_json.c"
        var $129=HEAP[$128]; //@line 1965 "_json.c"
        var $130=$stolen_addr_i15; //@line 1965 "_json.c"
        FUNCTION_TABLE[$129]($130); //@line 1965 "_json.c"
        __label__ = 22; break; //@line 1965 "_json.c"
      case 22: // $_steal_list_append_exit21
        var $131=$rval_i17; //@line 1966 "_json.c"
        $4=$131; //@line 1966 "_json.c"
        var $132=$4; //@line 1966 "_json.c"
        $retval_i16=$132; //@line 1966 "_json.c"
        var $retval2_i19=$retval_i16; //@line 1966 "_json.c"
        $8=$retval2_i19; //@line 1993 "_json.c"
        __label__ = 203; break; //@line 1993 "_json.c"
      case 23: // $bb16
        var $133=$obj_addr; //@line 1995 "_json.c"
        var $134=$133+4; //@line 1995 "_json.c"
        var $135=HEAP[$134]; //@line 1995 "_json.c"
        var $136=($135)==(_PyFloat_Type); //@line 1995 "_json.c"
        if ($136) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 1995 "_json.c"
      case 24: // $bb17
        var $137=$obj_addr; //@line 1995 "_json.c"
        var $138=$137+4; //@line 1995 "_json.c"
        var $139=HEAP[$138]; //@line 1995 "_json.c"
        var $140=_PyType_IsSubtype($139, _PyFloat_Type); //@line 1995 "_json.c"
        var $141=($140)!=0; //@line 1995 "_json.c"
        if ($141) { __label__ = 25; break; } else { __label__ = 30; break; } //@line 1995 "_json.c"
      case 25: // $bb18
        var $142=$s_addr; //@line 1996 "_json.c"
        var $143=$obj_addr; //@line 1996 "_json.c"
        var $144=_encoder_encode_float($142, $143); //@line 1996 "_json.c"
        $encoded19=$144; //@line 1996 "_json.c"
        var $145=($144)==0; //@line 1997 "_json.c"
        if ($145) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1997 "_json.c"
      case 26: // $bb20
        $8=-1; //@line 1998 "_json.c"
        __label__ = 203; break; //@line 1998 "_json.c"
      case 27: // $bb21
        var $146=$rval_addr; //@line 1999 "_json.c"
        var $147=$encoded19; //@line 1999 "_json.c"
        $lst_addr_i22=$146;
        $stolen_addr_i23=$147;
        var $148=$lst_addr_i22; //@line 1964 "_json.c"
        var $149=$stolen_addr_i23; //@line 1964 "_json.c"
        var $150=_PyList_Append($148, $149); //@line 1964 "_json.c"
        $rval_i25=$150; //@line 1964 "_json.c"
        var $151=$stolen_addr_i23; //@line 1965 "_json.c"
        var $152=$151; //@line 1965 "_json.c"
        var $153=HEAP[$152]; //@line 1965 "_json.c"
        var $154=($153) - 1; //@line 1965 "_json.c"
        var $155=$stolen_addr_i23; //@line 1965 "_json.c"
        var $156=$155; //@line 1965 "_json.c"
        HEAP[$156]=$154; //@line 1965 "_json.c"
        var $157=$stolen_addr_i23; //@line 1965 "_json.c"
        var $158=$157; //@line 1965 "_json.c"
        var $159=HEAP[$158]; //@line 1965 "_json.c"
        var $160=($159)==0; //@line 1965 "_json.c"
        if ($160) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1965 "_json.c"
      case 28: // $bb_i26
        var $161=$stolen_addr_i23; //@line 1965 "_json.c"
        var $162=$161+4; //@line 1965 "_json.c"
        var $163=HEAP[$162]; //@line 1965 "_json.c"
        var $164=$163+24; //@line 1965 "_json.c"
        var $165=HEAP[$164]; //@line 1965 "_json.c"
        var $166=$stolen_addr_i23; //@line 1965 "_json.c"
        FUNCTION_TABLE[$165]($166); //@line 1965 "_json.c"
        __label__ = 29; break; //@line 1965 "_json.c"
      case 29: // $_steal_list_append_exit29
        var $167=$rval_i25; //@line 1966 "_json.c"
        $3=$167; //@line 1966 "_json.c"
        var $168=$3; //@line 1966 "_json.c"
        $retval_i24=$168; //@line 1966 "_json.c"
        var $retval2_i27=$retval_i24; //@line 1966 "_json.c"
        $8=$retval2_i27; //@line 1999 "_json.c"
        __label__ = 203; break; //@line 1999 "_json.c"
      case 30: // $bb22
        var $169=$obj_addr; //@line 2001 "_json.c"
        var $170=$169+4; //@line 2001 "_json.c"
        var $171=HEAP[$170]; //@line 2001 "_json.c"
        var $172=$171+84; //@line 2001 "_json.c"
        var $173=HEAP[$172]; //@line 2001 "_json.c"
        var $174=($173) & 33554432; //@line 2001 "_json.c"
        var $175=($174)!=0; //@line 2001 "_json.c"
        if ($175) { __label__ = 32; break; } else { __label__ = 31; break; } //@line 2001 "_json.c"
      case 31: // $bb23
        var $176=$obj_addr; //@line 2001 "_json.c"
        var $177=$176+4; //@line 2001 "_json.c"
        var $178=HEAP[$177]; //@line 2001 "_json.c"
        var $179=$178+84; //@line 2001 "_json.c"
        var $180=HEAP[$179]; //@line 2001 "_json.c"
        var $181=($180) & 67108864; //@line 2001 "_json.c"
        var $182=($181)!=0; //@line 2001 "_json.c"
        if ($182) { __label__ = 32; break; } else { __label__ = 78; break; } //@line 2001 "_json.c"
      case 32: // $bb24
        var $183=HEAP[__PyThreadState_Current]; //@line 2002 "_json.c"
        var $184=$183+12; //@line 2002 "_json.c"
        var $185=HEAP[$184]; //@line 2002 "_json.c"
        var $186=($185) + 1; //@line 2002 "_json.c"
        var $187=$183+12; //@line 2002 "_json.c"
        HEAP[$187]=$186; //@line 2002 "_json.c"
        var $188=$183+12; //@line 2002 "_json.c"
        var $189=HEAP[$188]; //@line 2002 "_json.c"
        var $190=HEAP[__Py_CheckRecursionLimit]; //@line 2002 "_json.c"
        var $191=($189) > ($190); //@line 2002 "_json.c"
        if ($191) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 2002 "_json.c"
      case 33: // $bb25
        var $192=__Py_CheckRecursiveCall(__str58); //@line 2002 "_json.c"
        var $193=($192)!=0; //@line 2002 "_json.c"
        if ($193) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 2002 "_json.c"
      case 34: // $bb26
        $8=-1; //@line 2003 "_json.c"
        __label__ = 203; break; //@line 2003 "_json.c"
      case 35: // $bb27
        var $194=$s_addr; //@line 2004 "_json.c"
        var $195=$rval_addr; //@line 2004 "_json.c"
        var $196=$obj_addr; //@line 2004 "_json.c"
        var $197=$indent_level_addr; //@line 2004 "_json.c"
        $s_addr_i32=$194;
        $rval_addr_i33=$195;
        $seq_addr_i=$196;
        $indent_level_addr_i34=$197;
        $ident_i36=0; //@line 2218 "_json.c"
        $s_fast_i=0; //@line 2219 "_json.c"
        var $198=HEAP[_open_array_11600]; //@line 2224 "_json.c"
        var $199=($198)==0; //@line 2224 "_json.c"
        var $200=HEAP[_close_array_11601]; //@line 2224 "_json.c"
        var $201=($200)==0; //@line 2224 "_json.c"
        var $or_cond_i39=($199) | ($201);
        var $202=HEAP[_empty_array_11602]; //@line 2224 "_json.c"
        var $203=($202)==0; //@line 2224 "_json.c"
        var $or_cond3_i40=($or_cond_i39) | ($203);
        if ($or_cond3_i40) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 2224 "_json.c"
      case 36: // $bb2_i43
        var $204=_PyString_InternFromString(__str64); //@line 2225 "_json.c"
        HEAP[_open_array_11600]=$204; //@line 2225 "_json.c"
        var $205=_PyString_InternFromString(__str65); //@line 2226 "_json.c"
        HEAP[_close_array_11601]=$205; //@line 2226 "_json.c"
        var $206=_PyString_InternFromString(__str66); //@line 2227 "_json.c"
        HEAP[_empty_array_11602]=$206; //@line 2227 "_json.c"
        var $207=HEAP[_open_array_11600]; //@line 2228 "_json.c"
        var $208=($207)==0; //@line 2228 "_json.c"
        var $209=HEAP[_close_array_11601]; //@line 2228 "_json.c"
        var $210=($209)==0; //@line 2228 "_json.c"
        var $or_cond5_i41=($208) | ($210);
        var $211=HEAP[_empty_array_11602]; //@line 2228 "_json.c"
        var $212=($211)==0; //@line 2228 "_json.c"
        var $or_cond7_i42=($or_cond5_i41) | ($212);
        if ($or_cond7_i42) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 2228 "_json.c"
      case 37: // $bb5_i44
        $0=-1; //@line 2229 "_json.c"
        __label__ = 77; break; //@line 2229 "_json.c"
      case 38: // $bb6_i45
        $ident_i36=0; //@line 2231 "_json.c"
        var $213=$seq_addr_i; //@line 2232 "_json.c"
        var $214=_PySequence_Fast($213, __str67); //@line 2232 "_json.c"
        $s_fast_i=$214; //@line 2232 "_json.c"
        var $215=($214)==0; //@line 2233 "_json.c"
        if ($215) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 2233 "_json.c"
      case 39: // $bb7_i46
        $0=-1; //@line 2234 "_json.c"
        __label__ = 77; break; //@line 2234 "_json.c"
      case 40: // $bb8_i47
        var $216=$s_fast_i; //@line 2235 "_json.c"
        var $217=$216; //@line 2235 "_json.c"
        var $218=$217+8; //@line 2235 "_json.c"
        var $219=HEAP[$218]; //@line 2235 "_json.c"
        $num_items_i=$219; //@line 2235 "_json.c"
        var $220=$num_items_i; //@line 2236 "_json.c"
        var $221=($220)==0; //@line 2236 "_json.c"
        if ($221) { __label__ = 41; break; } else { __label__ = 44; break; } //@line 2236 "_json.c"
      case 41: // $bb9_i48
        var $222=$s_fast_i; //@line 2237 "_json.c"
        var $223=$222; //@line 2237 "_json.c"
        var $224=HEAP[$223]; //@line 2237 "_json.c"
        var $225=($224) - 1; //@line 2237 "_json.c"
        var $226=$s_fast_i; //@line 2237 "_json.c"
        var $227=$226; //@line 2237 "_json.c"
        HEAP[$227]=$225; //@line 2237 "_json.c"
        var $228=$s_fast_i; //@line 2237 "_json.c"
        var $229=$228; //@line 2237 "_json.c"
        var $230=HEAP[$229]; //@line 2237 "_json.c"
        var $231=($230)==0; //@line 2237 "_json.c"
        if ($231) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 2237 "_json.c"
      case 42: // $bb10_i49
        var $232=$s_fast_i; //@line 2237 "_json.c"
        var $233=$232+4; //@line 2237 "_json.c"
        var $234=HEAP[$233]; //@line 2237 "_json.c"
        var $235=$234+24; //@line 2237 "_json.c"
        var $236=HEAP[$235]; //@line 2237 "_json.c"
        var $237=$s_fast_i; //@line 2237 "_json.c"
        FUNCTION_TABLE[$236]($237); //@line 2237 "_json.c"
        __label__ = 43; break; //@line 2237 "_json.c"
      case 43: // $bb11_i50
        var $238=HEAP[_empty_array_11602]; //@line 2238 "_json.c"
        var $239=$rval_addr_i33; //@line 2238 "_json.c"
        var $240=_PyList_Append($239, $238); //@line 2238 "_json.c"
        $0=$240; //@line 2238 "_json.c"
        __label__ = 77; break; //@line 2238 "_json.c"
      case 44: // $bb12_i51
        var $241=$s_addr_i32; //@line 2241 "_json.c"
        var $242=$241+8; //@line 2241 "_json.c"
        var $243=HEAP[$242]; //@line 2241 "_json.c"
        var $244=($243)!=(__Py_NoneStruct); //@line 2241 "_json.c"
        if ($244) { __label__ = 45; break; } else { __label__ = 50; break; } //@line 2241 "_json.c"
      case 45: // $bb13_i
        var $245=$seq_addr_i; //@line 2243 "_json.c"
        var $246=$245; //@line 2243 "_json.c"
        var $247=_PyLong_FromVoidPtr($246); //@line 2243 "_json.c"
        $ident_i36=$247; //@line 2243 "_json.c"
        var $248=$ident_i36; //@line 2244 "_json.c"
        var $249=($248)==0; //@line 2244 "_json.c"
        if ($249) { __label__ = 74; break; } else { __label__ = 46; break; } //@line 2244 "_json.c"
      case 46: // $bb14_i52
        var $250=$s_addr_i32; //@line 2246 "_json.c"
        var $251=$250+8; //@line 2246 "_json.c"
        var $252=HEAP[$251]; //@line 2246 "_json.c"
        var $253=$ident_i36; //@line 2246 "_json.c"
        var $254=_PyDict_Contains($252, $253); //@line 2246 "_json.c"
        $has_key_i37=$254; //@line 2246 "_json.c"
        var $255=$has_key_i37; //@line 2247 "_json.c"
        var $256=($255)!=0; //@line 2247 "_json.c"
        if ($256) { __label__ = 47; break; } else { __label__ = 49; break; } //@line 2247 "_json.c"
      case 47: // $bb15_i53
        var $257=$has_key_i37; //@line 2248 "_json.c"
        var $258=($257)!=-1; //@line 2248 "_json.c"
        if ($258) { __label__ = 48; break; } else { __label__ = 71; break; } //@line 2248 "_json.c"
      case 48: // $bb16_i54
        var $259=HEAP[_PyExc_ValueError]; //@line 2249 "_json.c"
        _PyErr_SetString($259, __str59); //@line 2249 "_json.c"
        __label__ = 71; break; //@line 2249 "_json.c"
      case 49: // $bb18_i55
        var $260=$s_addr_i32; //@line 2252 "_json.c"
        var $261=$260+8; //@line 2252 "_json.c"
        var $262=HEAP[$261]; //@line 2252 "_json.c"
        var $263=$ident_i36; //@line 2252 "_json.c"
        var $264=$seq_addr_i; //@line 2252 "_json.c"
        var $265=_PyDict_SetItem($262, $263, $264); //@line 2252 "_json.c"
        var $266=($265)!=0; //@line 2252 "_json.c"
        if ($266) { __label__ = 71; break; } else { __label__ = 50; break; } //@line 2252 "_json.c"
      case 50: // $bb19_i56
        var $267=$s_fast_i; //@line 2257 "_json.c"
        var $268=$267+4; //@line 2257 "_json.c"
        var $269=HEAP[$268]; //@line 2257 "_json.c"
        var $270=$269+84; //@line 2257 "_json.c"
        var $271=HEAP[$270]; //@line 2257 "_json.c"
        var $272=($271) & 33554432; //@line 2257 "_json.c"
        var $273=($272)!=0; //@line 2257 "_json.c"
        var $274=$s_fast_i; //@line 2257 "_json.c"
        if ($273) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 2257 "_json.c"
      case 51: // $bb20_i57
        var $275=$274; //@line 2257 "_json.c"
        var $276=$275+12; //@line 2257 "_json.c"
        var $277=HEAP[$276]; //@line 2257 "_json.c"
        $iftmp_196_i=$277; //@line 2257 "_json.c"
        __label__ = 53; break; //@line 2257 "_json.c"
      case 52: // $bb21_i58
        var $278=$274; //@line 2257 "_json.c"
        var $279=$278+12; //@line 2257 "_json.c"
        var $280=$279; //@line 2257 "_json.c"
        $iftmp_196_i=$280; //@line 2257 "_json.c"
        __label__ = 53; break; //@line 2257 "_json.c"
      case 53: // $bb22_i59
        var $281=$iftmp_196_i; //@line 2257 "_json.c"
        $seq_items_i=$281; //@line 2257 "_json.c"
        var $282=HEAP[_open_array_11600]; //@line 2258 "_json.c"
        var $283=$rval_addr_i33; //@line 2258 "_json.c"
        var $284=_PyList_Append($283, $282); //@line 2258 "_json.c"
        var $285=($284)!=0; //@line 2258 "_json.c"
        if ($285) { __label__ = 71; break; } else { __label__ = 54; break; } //@line 2258 "_json.c"
      case 54: // $bb23_i60
        var $286=$s_addr_i32; //@line 2260 "_json.c"
        var $287=$286+20; //@line 2260 "_json.c"
        var $288=HEAP[$287]; //@line 2260 "_json.c"
        var $289=($288)!=(__Py_NoneStruct); //@line 2260 "_json.c"
        if ($289) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 2260 "_json.c"
      case 55: // $bb24_i61
        var $290=$indent_level_addr_i34; //@line 2262 "_json.c"
        var $291=($290) + 1; //@line 2262 "_json.c"
        $indent_level_addr_i34=$291; //@line 2262 "_json.c"
        __label__ = 56; break; //@line 2262 "_json.c"
      case 56: // $bb25_i62
        $i_i=0; //@line 2269 "_json.c"
        __label__ = 61; break; //@line 2269 "_json.c"
      case 57: // $bb26_i
        var $292=$seq_items_i; //@line 2270 "_json.c"
        var $293=$i_i; //@line 2270 "_json.c"
        var $294=$292+4*$293; //@line 2270 "_json.c"
        var $295=HEAP[$294]; //@line 2270 "_json.c"
        $obj_i=$295; //@line 2270 "_json.c"
        var $296=$i_i; //@line 2271 "_json.c"
        var $297=($296)!=0; //@line 2271 "_json.c"
        if ($297) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 2271 "_json.c"
      case 58: // $bb27_i63
        var $298=$s_addr_i32; //@line 2272 "_json.c"
        var $299=$298+28; //@line 2272 "_json.c"
        var $300=HEAP[$299]; //@line 2272 "_json.c"
        var $301=$rval_addr_i33; //@line 2272 "_json.c"
        var $302=_PyList_Append($301, $300); //@line 2272 "_json.c"
        var $303=($302)!=0; //@line 2272 "_json.c"
        if ($303) { __label__ = 71; break; } else { __label__ = 59; break; } //@line 2272 "_json.c"
      case 59: // $bb28_i64
        var $304=$s_addr_i32; //@line 2275 "_json.c"
        var $305=$rval_addr_i33; //@line 2275 "_json.c"
        var $306=$obj_i; //@line 2275 "_json.c"
        var $307=$indent_level_addr_i34; //@line 2275 "_json.c"
        var $308=_encoder_listencode_obj($304, $305, $306, $307); //@line 2275 "_json.c"
        var $309=($308)!=0; //@line 2275 "_json.c"
        if ($309) { __label__ = 71; break; } else { __label__ = 60; break; } //@line 2275 "_json.c"
      case 60: // $bb29_i65
        var $310=$i_i; //@line 2269 "_json.c"
        var $311=($310) + 1; //@line 2269 "_json.c"
        $i_i=$311; //@line 2269 "_json.c"
        __label__ = 61; break; //@line 2269 "_json.c"
      case 61: // $bb30_i
        var $312=$i_i; //@line 2269 "_json.c"
        var $313=$num_items_i; //@line 2269 "_json.c"
        var $314=($312) < ($313); //@line 2269 "_json.c"
        if ($314) { __label__ = 57; break; } else { __label__ = 62; break; } //@line 2269 "_json.c"
      case 62: // $bb31_i66
        var $315=$ident_i36; //@line 2278 "_json.c"
        var $316=($315)!=0; //@line 2278 "_json.c"
        if ($316) { __label__ = 63; break; } else { __label__ = 67; break; } //@line 2278 "_json.c"
      case 63: // $bb32_i
        var $317=$s_addr_i32; //@line 2279 "_json.c"
        var $318=$317+8; //@line 2279 "_json.c"
        var $319=HEAP[$318]; //@line 2279 "_json.c"
        var $320=$ident_i36; //@line 2279 "_json.c"
        var $321=_PyDict_DelItem($319, $320); //@line 2279 "_json.c"
        var $322=($321)!=0; //@line 2279 "_json.c"
        if ($322) { __label__ = 71; break; } else { __label__ = 64; break; } //@line 2279 "_json.c"
      case 64: // $bb33_i
        var $323=$ident_i36; //@line 2281 "_json.c"
        var $324=($323)!=0; //@line 2281 "_json.c"
        if ($324) { __label__ = 65; break; } else { __label__ = 67; break; } //@line 2281 "_json.c"
      case 65: // $bb34_i67
        var $325=$ident_i36; //@line 2281 "_json.c"
        $_py_tmp_i38=$325; //@line 2281 "_json.c"
        $ident_i36=0; //@line 2281 "_json.c"
        var $326=$_py_tmp_i38; //@line 2281 "_json.c"
        var $327=$326; //@line 2281 "_json.c"
        var $328=HEAP[$327]; //@line 2281 "_json.c"
        var $329=($328) - 1; //@line 2281 "_json.c"
        var $330=$_py_tmp_i38; //@line 2281 "_json.c"
        var $331=$330; //@line 2281 "_json.c"
        HEAP[$331]=$329; //@line 2281 "_json.c"
        var $332=$_py_tmp_i38; //@line 2281 "_json.c"
        var $333=$332; //@line 2281 "_json.c"
        var $334=HEAP[$333]; //@line 2281 "_json.c"
        var $335=($334)==0; //@line 2281 "_json.c"
        if ($335) { __label__ = 66; break; } else { __label__ = 67; break; } //@line 2281 "_json.c"
      case 66: // $bb35_i
        var $336=$_py_tmp_i38; //@line 2281 "_json.c"
        var $337=$336+4; //@line 2281 "_json.c"
        var $338=HEAP[$337]; //@line 2281 "_json.c"
        var $339=$338+24; //@line 2281 "_json.c"
        var $340=HEAP[$339]; //@line 2281 "_json.c"
        var $341=$_py_tmp_i38; //@line 2281 "_json.c"
        FUNCTION_TABLE[$340]($341); //@line 2281 "_json.c"
        __label__ = 67; break; //@line 2281 "_json.c"
      case 67: // $bb36_i68
        var $342=HEAP[_close_array_11601]; //@line 2291 "_json.c"
        var $343=$rval_addr_i33; //@line 2291 "_json.c"
        var $344=_PyList_Append($343, $342); //@line 2291 "_json.c"
        var $345=($344)!=0; //@line 2291 "_json.c"
        if ($345) { __label__ = 71; break; } else { __label__ = 68; break; } //@line 2291 "_json.c"
      case 68: // $bb37_i69
        var $346=$s_fast_i; //@line 2293 "_json.c"
        var $347=$346; //@line 2293 "_json.c"
        var $348=HEAP[$347]; //@line 2293 "_json.c"
        var $349=($348) - 1; //@line 2293 "_json.c"
        var $350=$s_fast_i; //@line 2293 "_json.c"
        var $351=$350; //@line 2293 "_json.c"
        HEAP[$351]=$349; //@line 2293 "_json.c"
        var $352=$s_fast_i; //@line 2293 "_json.c"
        var $353=$352; //@line 2293 "_json.c"
        var $354=HEAP[$353]; //@line 2293 "_json.c"
        var $355=($354)==0; //@line 2293 "_json.c"
        if ($355) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 2293 "_json.c"
      case 69: // $bb38_i70
        var $356=$s_fast_i; //@line 2293 "_json.c"
        var $357=$356+4; //@line 2293 "_json.c"
        var $358=HEAP[$357]; //@line 2293 "_json.c"
        var $359=$358+24; //@line 2293 "_json.c"
        var $360=HEAP[$359]; //@line 2293 "_json.c"
        var $361=$s_fast_i; //@line 2293 "_json.c"
        FUNCTION_TABLE[$360]($361); //@line 2293 "_json.c"
        __label__ = 70; break; //@line 2293 "_json.c"
      case 70: // $bb39_i
        $0=0; //@line 2294 "_json.c"
        __label__ = 77; break; //@line 2294 "_json.c"
      case 71: // $bail_i71
        var $_pr=$ident_i36;
        var $362=($_pr)!=0; //@line 2297 "_json.c"
        if ($362) { __label__ = 72; break; } else { __label__ = 74; break; } //@line 2297 "_json.c"
      case 72: // $bb40_i72
        var $363=$ident_i36; //@line 2297 "_json.c"
        var $364=$363; //@line 2297 "_json.c"
        var $365=HEAP[$364]; //@line 2297 "_json.c"
        var $366=($365) - 1; //@line 2297 "_json.c"
        var $367=$ident_i36; //@line 2297 "_json.c"
        var $368=$367; //@line 2297 "_json.c"
        HEAP[$368]=$366; //@line 2297 "_json.c"
        var $369=$ident_i36; //@line 2297 "_json.c"
        var $370=$369; //@line 2297 "_json.c"
        var $371=HEAP[$370]; //@line 2297 "_json.c"
        var $372=($371)==0; //@line 2297 "_json.c"
        if ($372) { __label__ = 73; break; } else { __label__ = 74; break; } //@line 2297 "_json.c"
      case 73: // $bb41_i73
        var $373=$ident_i36; //@line 2297 "_json.c"
        var $374=$373+4; //@line 2297 "_json.c"
        var $375=HEAP[$374]; //@line 2297 "_json.c"
        var $376=$375+24; //@line 2297 "_json.c"
        var $377=HEAP[$376]; //@line 2297 "_json.c"
        var $378=$ident_i36; //@line 2297 "_json.c"
        FUNCTION_TABLE[$377]($378); //@line 2297 "_json.c"
        __label__ = 74; break; //@line 2297 "_json.c"
      case 74: // $bb42_i74
        var $379=$s_fast_i; //@line 2298 "_json.c"
        var $380=$379; //@line 2298 "_json.c"
        var $381=HEAP[$380]; //@line 2298 "_json.c"
        var $382=($381) - 1; //@line 2298 "_json.c"
        var $383=$s_fast_i; //@line 2298 "_json.c"
        var $384=$383; //@line 2298 "_json.c"
        HEAP[$384]=$382; //@line 2298 "_json.c"
        var $385=$s_fast_i; //@line 2298 "_json.c"
        var $386=$385; //@line 2298 "_json.c"
        var $387=HEAP[$386]; //@line 2298 "_json.c"
        var $388=($387)==0; //@line 2298 "_json.c"
        if ($388) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 2298 "_json.c"
      case 75: // $bb43_i75
        var $389=$s_fast_i; //@line 2298 "_json.c"
        var $390=$389+4; //@line 2298 "_json.c"
        var $391=HEAP[$390]; //@line 2298 "_json.c"
        var $392=$391+24; //@line 2298 "_json.c"
        var $393=HEAP[$392]; //@line 2298 "_json.c"
        var $394=$s_fast_i; //@line 2298 "_json.c"
        FUNCTION_TABLE[$393]($394); //@line 2298 "_json.c"
        __label__ = 76; break; //@line 2298 "_json.c"
      case 76: // $bb44_i76
        $0=-1; //@line 2299 "_json.c"
        __label__ = 77; break; //@line 2299 "_json.c"
      case 77: // $encoder_listencode_list_exit
        var $395=$0; //@line 2229 "_json.c"
        $retval_i35=$395; //@line 2229 "_json.c"
        var $retval46_i=$retval_i35; //@line 2229 "_json.c"
        $rv=$retval46_i; //@line 2004 "_json.c"
        var $396=HEAP[__PyThreadState_Current]; //@line 2005 "_json.c"
        var $397=$396+12; //@line 2005 "_json.c"
        var $398=HEAP[$397]; //@line 2005 "_json.c"
        var $399=($398) - 1; //@line 2005 "_json.c"
        var $400=$396+12; //@line 2005 "_json.c"
        HEAP[$400]=$399; //@line 2005 "_json.c"
        var $401=$rv; //@line 2006 "_json.c"
        $8=$401; //@line 2006 "_json.c"
        __label__ = 203; break; //@line 2006 "_json.c"
      case 78: // $bb28
        var $402=$obj_addr; //@line 2008 "_json.c"
        var $403=$402+4; //@line 2008 "_json.c"
        var $404=HEAP[$403]; //@line 2008 "_json.c"
        var $405=$404+84; //@line 2008 "_json.c"
        var $406=HEAP[$405]; //@line 2008 "_json.c"
        var $407=($406) & 536870912; //@line 2008 "_json.c"
        var $408=($407)!=0; //@line 2008 "_json.c"
        if ($408) { __label__ = 79; break; } else { __label__ = 165; break; } //@line 2008 "_json.c"
      case 79: // $bb29
        var $409=HEAP[__PyThreadState_Current]; //@line 2009 "_json.c"
        var $410=$409+12; //@line 2009 "_json.c"
        var $411=HEAP[$410]; //@line 2009 "_json.c"
        var $412=($411) + 1; //@line 2009 "_json.c"
        var $413=$409+12; //@line 2009 "_json.c"
        HEAP[$413]=$412; //@line 2009 "_json.c"
        var $414=$409+12; //@line 2009 "_json.c"
        var $415=HEAP[$414]; //@line 2009 "_json.c"
        var $416=HEAP[__Py_CheckRecursionLimit]; //@line 2009 "_json.c"
        var $417=($415) > ($416); //@line 2009 "_json.c"
        if ($417) { __label__ = 80; break; } else { __label__ = 82; break; } //@line 2009 "_json.c"
      case 80: // $bb30
        var $418=__Py_CheckRecursiveCall(__str58); //@line 2009 "_json.c"
        var $419=($418)!=0; //@line 2009 "_json.c"
        if ($419) { __label__ = 81; break; } else { __label__ = 82; break; } //@line 2009 "_json.c"
      case 81: // $bb31
        $8=-1; //@line 2010 "_json.c"
        __label__ = 203; break; //@line 2010 "_json.c"
      case 82: // $bb32
        var $420=$s_addr; //@line 2011 "_json.c"
        var $421=$rval_addr; //@line 2011 "_json.c"
        var $422=$obj_addr; //@line 2011 "_json.c"
        var $423=$indent_level_addr; //@line 2011 "_json.c"
        $s_addr_i30=$420;
        $rval_addr_i=$421;
        $dct_addr_i=$422;
        $indent_level_addr_i=$423;
        $kstr_i=0; //@line 2068 "_json.c"
        $ident_i=0; //@line 2069 "_json.c"
        $key_i=0; //@line 2070 "_json.c"
        $value_i=0; //@line 2071 "_json.c"
        $it_i=0; //@line 2072 "_json.c"
        var $424=HEAP[_open_dict_11341]; //@line 2076 "_json.c"
        var $425=($424)==0; //@line 2076 "_json.c"
        var $426=HEAP[_close_dict_11342]; //@line 2076 "_json.c"
        var $427=($426)==0; //@line 2076 "_json.c"
        var $or_cond_i=($425) | ($427);
        var $428=HEAP[_empty_dict_11343]; //@line 2076 "_json.c"
        var $429=($428)==0; //@line 2076 "_json.c"
        var $or_cond3_i=($or_cond_i) | ($429);
        if ($or_cond3_i) { __label__ = 83; break; } else { __label__ = 85; break; } //@line 2076 "_json.c"
      case 83: // $bb2_i
        var $430=_PyString_InternFromString(__str60); //@line 2077 "_json.c"
        HEAP[_open_dict_11341]=$430; //@line 2077 "_json.c"
        var $431=_PyString_InternFromString(__str61); //@line 2078 "_json.c"
        HEAP[_close_dict_11342]=$431; //@line 2078 "_json.c"
        var $432=_PyString_InternFromString(__str62); //@line 2079 "_json.c"
        HEAP[_empty_dict_11343]=$432; //@line 2079 "_json.c"
        var $433=HEAP[_open_dict_11341]; //@line 2080 "_json.c"
        var $434=($433)==0; //@line 2080 "_json.c"
        var $435=HEAP[_close_dict_11342]; //@line 2080 "_json.c"
        var $436=($435)==0; //@line 2080 "_json.c"
        var $or_cond5_i=($434) | ($436);
        var $437=HEAP[_empty_dict_11343]; //@line 2080 "_json.c"
        var $438=($437)==0; //@line 2080 "_json.c"
        var $or_cond7_i=($or_cond5_i) | ($438);
        if ($or_cond7_i) { __label__ = 84; break; } else { __label__ = 85; break; } //@line 2080 "_json.c"
      case 84: // $bb5_i
        $2=-1; //@line 2081 "_json.c"
        __label__ = 164; break; //@line 2081 "_json.c"
      case 85: // $bb6_i
        var $439=$dct_addr_i; //@line 2083 "_json.c"
        var $440=$439; //@line 2083 "_json.c"
        var $441=$440+8; //@line 2083 "_json.c"
        var $442=HEAP[$441]; //@line 2083 "_json.c"
        var $443=($442)==0; //@line 2083 "_json.c"
        if ($443) { __label__ = 86; break; } else { __label__ = 87; break; } //@line 2083 "_json.c"
      case 86: // $bb7_i
        var $444=HEAP[_empty_dict_11343]; //@line 2084 "_json.c"
        var $445=$rval_addr_i; //@line 2084 "_json.c"
        var $446=_PyList_Append($445, $444); //@line 2084 "_json.c"
        $2=$446; //@line 2084 "_json.c"
        __label__ = 164; break; //@line 2084 "_json.c"
      case 87: // $bb8_i
        var $447=$s_addr_i30; //@line 2086 "_json.c"
        var $448=$447+8; //@line 2086 "_json.c"
        var $449=HEAP[$448]; //@line 2086 "_json.c"
        var $450=($449)!=(__Py_NoneStruct); //@line 2086 "_json.c"
        if ($450) { __label__ = 88; break; } else { __label__ = 93; break; } //@line 2086 "_json.c"
      case 88: // $bb9_i
        var $451=$dct_addr_i; //@line 2088 "_json.c"
        var $452=$451; //@line 2088 "_json.c"
        var $453=_PyLong_FromVoidPtr($452); //@line 2088 "_json.c"
        $ident_i=$453; //@line 2088 "_json.c"
        var $454=$ident_i; //@line 2089 "_json.c"
        var $455=($454)==0; //@line 2089 "_json.c"
        if ($455) { __label__ = 148; break; } else { __label__ = 89; break; } //@line 2089 "_json.c"
      case 89: // $bb10_i
        var $456=$s_addr_i30; //@line 2091 "_json.c"
        var $457=$456+8; //@line 2091 "_json.c"
        var $458=HEAP[$457]; //@line 2091 "_json.c"
        var $459=$ident_i; //@line 2091 "_json.c"
        var $460=_PyDict_Contains($458, $459); //@line 2091 "_json.c"
        $has_key_i=$460; //@line 2091 "_json.c"
        var $461=$has_key_i; //@line 2092 "_json.c"
        var $462=($461)!=0; //@line 2092 "_json.c"
        if ($462) { __label__ = 90; break; } else { __label__ = 92; break; } //@line 2092 "_json.c"
      case 90: // $bb11_i
        var $463=$has_key_i; //@line 2093 "_json.c"
        var $464=($463)!=-1; //@line 2093 "_json.c"
        if ($464) { __label__ = 91; break; } else { __label__ = 148; break; } //@line 2093 "_json.c"
      case 91: // $bb12_i
        var $465=HEAP[_PyExc_ValueError]; //@line 2094 "_json.c"
        _PyErr_SetString($465, __str59); //@line 2094 "_json.c"
        __label__ = 148; break; //@line 2094 "_json.c"
      case 92: // $bb14_i
        var $466=$s_addr_i30; //@line 2097 "_json.c"
        var $467=$466+8; //@line 2097 "_json.c"
        var $468=HEAP[$467]; //@line 2097 "_json.c"
        var $469=$ident_i; //@line 2097 "_json.c"
        var $470=$dct_addr_i; //@line 2097 "_json.c"
        var $471=_PyDict_SetItem($468, $469, $470); //@line 2097 "_json.c"
        var $472=($471)!=0; //@line 2097 "_json.c"
        if ($472) { __label__ = 148; break; } else { __label__ = 93; break; } //@line 2097 "_json.c"
      case 93: // $bb15_i
        var $473=HEAP[_open_dict_11341]; //@line 2102 "_json.c"
        var $474=$rval_addr_i; //@line 2102 "_json.c"
        var $475=_PyList_Append($474, $473); //@line 2102 "_json.c"
        var $476=($475)!=0; //@line 2102 "_json.c"
        if ($476) { __label__ = 148; break; } else { __label__ = 94; break; } //@line 2102 "_json.c"
      case 94: // $bb16_i
        var $477=$s_addr_i30; //@line 2105 "_json.c"
        var $478=$477+20; //@line 2105 "_json.c"
        var $479=HEAP[$478]; //@line 2105 "_json.c"
        var $480=($479)!=(__Py_NoneStruct); //@line 2105 "_json.c"
        if ($480) { __label__ = 95; break; } else { __label__ = 96; break; } //@line 2105 "_json.c"
      case 95: // $bb17_i
        var $481=$indent_level_addr_i; //@line 2107 "_json.c"
        var $482=($481) + 1; //@line 2107 "_json.c"
        $indent_level_addr_i=$482; //@line 2107 "_json.c"
        __label__ = 96; break; //@line 2107 "_json.c"
      case 96: // $bb18_i
        var $483=$dct_addr_i; //@line 2117 "_json.c"
        var $484=_PyObject_GetIter($483); //@line 2117 "_json.c"
        $it_i=$484; //@line 2117 "_json.c"
        var $485=($484)==0; //@line 2118 "_json.c"
        if ($485) { __label__ = 151; break; } else { __label__ = 97; break; } //@line 2118 "_json.c"
      case 97: // $bb19_i
        var $486=$s_addr_i30; //@line 2120 "_json.c"
        var $487=$486+36; //@line 2120 "_json.c"
        var $488=HEAP[$487]; //@line 2120 "_json.c"
        var $489=_PyObject_IsTrue($488); //@line 2120 "_json.c"
        $skipkeys_i=$489; //@line 2120 "_json.c"
        $idx_i=0; //@line 2121 "_json.c"
        __label__ = 136; break; //@line 2121 "_json.c"
      case 98: // $bb20_i
        var $490=$key_i; //@line 2125 "_json.c"
        var $491=$490+4; //@line 2125 "_json.c"
        var $492=HEAP[$491]; //@line 2125 "_json.c"
        var $493=$492+84; //@line 2125 "_json.c"
        var $494=HEAP[$493]; //@line 2125 "_json.c"
        var $495=($494) & 134217728; //@line 2125 "_json.c"
        var $496=($495)!=0; //@line 2125 "_json.c"
        if ($496) { __label__ = 100; break; } else { __label__ = 99; break; } //@line 2125 "_json.c"
      case 99: // $bb21_i
        var $497=$key_i; //@line 2125 "_json.c"
        var $498=$497+4; //@line 2125 "_json.c"
        var $499=HEAP[$498]; //@line 2125 "_json.c"
        var $500=$499+84; //@line 2125 "_json.c"
        var $501=HEAP[$500]; //@line 2125 "_json.c"
        var $502=($501) & 268435456; //@line 2125 "_json.c"
        var $503=($502)!=0; //@line 2125 "_json.c"
        if ($503) { __label__ = 100; break; } else { __label__ = 101; break; } //@line 2125 "_json.c"
      case 100: // $bb22_i
        var $504=$key_i; //@line 2126 "_json.c"
        var $505=$504; //@line 2126 "_json.c"
        var $506=HEAP[$505]; //@line 2126 "_json.c"
        var $507=($506) + 1; //@line 2126 "_json.c"
        var $508=$key_i; //@line 2126 "_json.c"
        var $509=$508; //@line 2126 "_json.c"
        HEAP[$509]=$507; //@line 2126 "_json.c"
        var $510=$key_i; //@line 2127 "_json.c"
        $kstr_i=$510; //@line 2127 "_json.c"
        __label__ = 113; break; //@line 2127 "_json.c"
      case 101: // $bb23_i
        var $511=$key_i; //@line 2129 "_json.c"
        var $512=$511+4; //@line 2129 "_json.c"
        var $513=HEAP[$512]; //@line 2129 "_json.c"
        var $514=($513)==(_PyFloat_Type); //@line 2129 "_json.c"
        if ($514) { __label__ = 103; break; } else { __label__ = 102; break; } //@line 2129 "_json.c"
      case 102: // $bb24_i
        var $515=$key_i; //@line 2129 "_json.c"
        var $516=$515+4; //@line 2129 "_json.c"
        var $517=HEAP[$516]; //@line 2129 "_json.c"
        var $518=_PyType_IsSubtype($517, _PyFloat_Type); //@line 2129 "_json.c"
        var $519=($518)!=0; //@line 2129 "_json.c"
        if ($519) { __label__ = 103; break; } else { __label__ = 104; break; } //@line 2129 "_json.c"
      case 103: // $bb25_i
        var $520=$s_addr_i30; //@line 2130 "_json.c"
        var $521=$key_i; //@line 2130 "_json.c"
        var $522=_encoder_encode_float($520, $521); //@line 2130 "_json.c"
        $kstr_i=$522; //@line 2130 "_json.c"
        var $523=($522)==0; //@line 2131 "_json.c"
        if ($523) { __label__ = 148; break; } else { __label__ = 113; break; } //@line 2131 "_json.c"
      case 104: // $bb27_i
        var $524=$key_i; //@line 2134 "_json.c"
        var $525=$524+4; //@line 2134 "_json.c"
        var $526=HEAP[$525]; //@line 2134 "_json.c"
        var $527=$526+84; //@line 2134 "_json.c"
        var $528=HEAP[$527]; //@line 2134 "_json.c"
        var $529=($528) & 8388608; //@line 2134 "_json.c"
        var $530=($529)!=0; //@line 2134 "_json.c"
        if ($530) { __label__ = 106; break; } else { __label__ = 105; break; } //@line 2134 "_json.c"
      case 105: // $bb28_i
        var $531=$key_i; //@line 2134 "_json.c"
        var $532=$531+4; //@line 2134 "_json.c"
        var $533=HEAP[$532]; //@line 2134 "_json.c"
        var $534=$533+84; //@line 2134 "_json.c"
        var $535=HEAP[$534]; //@line 2134 "_json.c"
        var $536=($535) & 16777216; //@line 2134 "_json.c"
        var $537=($536)!=0; //@line 2134 "_json.c"
        if ($537) { __label__ = 106; break; } else { __label__ = 107; break; } //@line 2134 "_json.c"
      case 106: // $bb29_i
        var $538=$key_i; //@line 2135 "_json.c"
        var $539=_PyObject_Str($538); //@line 2135 "_json.c"
        $kstr_i=$539; //@line 2135 "_json.c"
        var $540=($539)==0; //@line 2136 "_json.c"
        if ($540) { __label__ = 148; break; } else { __label__ = 113; break; } //@line 2136 "_json.c"
      case 107: // $bb31_i
        var $541=$key_i; //@line 2139 "_json.c"
        var $542=($541)==(__Py_TrueStruct); //@line 2139 "_json.c"
        var $543=$key_i; //@line 2139 "_json.c"
        var $544=($543)==(__Py_ZeroStruct); //@line 2139 "_json.c"
        var $or_cond9_i=($542) | ($544);
        var $545=$key_i; //@line 2139 "_json.c"
        var $546=($545)==(__Py_NoneStruct); //@line 2139 "_json.c"
        var $or_cond11_i=($or_cond9_i) | ($546);
        if ($or_cond11_i) { __label__ = 108; break; } else { __label__ = 109; break; } //@line 2139 "_json.c"
      case 108: // $bb34_i
        var $547=$key_i; //@line 2140 "_json.c"
        var $548=__encoded_const($547); //@line 2140 "_json.c"
        $kstr_i=$548; //@line 2140 "_json.c"
        var $549=$kstr_i; //@line 2141 "_json.c"
        var $550=($549)==0; //@line 2141 "_json.c"
        if ($550) { __label__ = 148; break; } else { __label__ = 113; break; } //@line 2141 "_json.c"
      case 109: // $bb36_i
        var $551=$skipkeys_i; //@line 2144 "_json.c"
        var $552=($551)!=0; //@line 2144 "_json.c"
        if ($552) { __label__ = 110; break; } else { __label__ = 112; break; } //@line 2144 "_json.c"
      case 110: // $bb37_i
        var $553=$key_i; //@line 2145 "_json.c"
        var $554=$553; //@line 2145 "_json.c"
        var $555=HEAP[$554]; //@line 2145 "_json.c"
        var $556=($555) - 1; //@line 2145 "_json.c"
        var $557=$key_i; //@line 2145 "_json.c"
        var $558=$557; //@line 2145 "_json.c"
        HEAP[$558]=$556; //@line 2145 "_json.c"
        var $559=$key_i; //@line 2145 "_json.c"
        var $560=$559; //@line 2145 "_json.c"
        var $561=HEAP[$560]; //@line 2145 "_json.c"
        var $562=($561)==0; //@line 2145 "_json.c"
        if ($562) { __label__ = 111; break; } else { __label__ = 136; break; } //@line 2145 "_json.c"
      case 111: // $bb38_i
        var $563=$key_i; //@line 2145 "_json.c"
        var $564=$563+4; //@line 2145 "_json.c"
        var $565=HEAP[$564]; //@line 2145 "_json.c"
        var $566=$565+24; //@line 2145 "_json.c"
        var $567=HEAP[$566]; //@line 2145 "_json.c"
        var $568=$key_i; //@line 2145 "_json.c"
        FUNCTION_TABLE[$567]($568); //@line 2145 "_json.c"
        __label__ = 136; break; //@line 2145 "_json.c"
      case 112: // $bb40_i
        var $569=HEAP[_PyExc_TypeError]; //@line 2150 "_json.c"
        _PyErr_SetString($569, __str63); //@line 2150 "_json.c"
        __label__ = 148; break; //@line 2150 "_json.c"
      case 113: // $bb41_i
        var $570=$idx_i; //@line 2154 "_json.c"
        var $571=($570)!=0; //@line 2154 "_json.c"
        if ($571) { __label__ = 114; break; } else { __label__ = 115; break; } //@line 2154 "_json.c"
      case 114: // $bb42_i
        var $572=$s_addr_i30; //@line 2155 "_json.c"
        var $573=$572+28; //@line 2155 "_json.c"
        var $574=HEAP[$573]; //@line 2155 "_json.c"
        var $575=$rval_addr_i; //@line 2155 "_json.c"
        var $576=_PyList_Append($575, $574); //@line 2155 "_json.c"
        var $577=($576)!=0; //@line 2155 "_json.c"
        if ($577) { __label__ = 148; break; } else { __label__ = 115; break; } //@line 2155 "_json.c"
      case 115: // $bb43_i
        var $578=$dct_addr_i; //@line 2159 "_json.c"
        var $579=$key_i; //@line 2159 "_json.c"
        var $580=_PyObject_GetItem($578, $579); //@line 2159 "_json.c"
        $value_i=$580; //@line 2159 "_json.c"
        var $581=($580)==0; //@line 2160 "_json.c"
        if ($581) { __label__ = 148; break; } else { __label__ = 116; break; } //@line 2160 "_json.c"
      case 116: // $bb44_i
        var $582=$s_addr_i30; //@line 2163 "_json.c"
        var $583=$kstr_i; //@line 2163 "_json.c"
        $s_addr_i_i=$582;
        $obj_addr_i_i=$583;
        var $584=$s_addr_i_i; //@line 1954 "_json.c"
        var $585=$584+40; //@line 1954 "_json.c"
        var $586=HEAP[$585]; //@line 1954 "_json.c"
        var $587=($586)!=0; //@line 1954 "_json.c"
        if ($587) { __label__ = 117; break; } else { __label__ = 118; break; } //@line 1954 "_json.c"
      case 117: // $bb_i_i
        var $588=$obj_addr_i_i; //@line 1955 "_json.c"
        var $589=_py_encode_basestring_ascii(0, $588); //@line 1955 "_json.c"
        $1=$589; //@line 1955 "_json.c"
        __label__ = 119; break; //@line 1955 "_json.c"
      case 118: // $bb1_i_i
        var $590=$s_addr_i_i; //@line 1957 "_json.c"
        var $591=$590+16; //@line 1957 "_json.c"
        var $592=HEAP[$591]; //@line 1957 "_json.c"
        var $593=$obj_addr_i_i; //@line 1957 "_json.c"
        var $594=_PyObject_CallFunctionObjArgs($592, $593, 0); //@line 1957 "_json.c"
        $1=$594; //@line 1957 "_json.c"
        __label__ = 119; break; //@line 1957 "_json.c"
      case 119: // $encoder_encode_string_exit_i
        var $595=$1; //@line 1955 "_json.c"
        $retval_i_i=$595; //@line 1955 "_json.c"
        var $retval3_i_i=$retval_i_i; //@line 1955 "_json.c"
        $encoded_i=$retval3_i_i; //@line 2163 "_json.c"
        var $596=$kstr_i; //@line 2164 "_json.c"
        var $597=($596)!=0; //@line 2164 "_json.c"
        if ($597) { __lastLabel__ = 119; __label__ = 120; break; } else { __lastLabel__ = 119; __label__ = 123; break; } //@line 2164 "_json.c"
      case 120: // $bb45_i
        var $598=$kstr_i; //@line 2164 "_json.c"
        $_py_tmp_i=$598; //@line 2164 "_json.c"
        $kstr_i=0; //@line 2164 "_json.c"
        var $599=$_py_tmp_i; //@line 2164 "_json.c"
        var $600=$599; //@line 2164 "_json.c"
        var $601=HEAP[$600]; //@line 2164 "_json.c"
        var $602=($601) - 1; //@line 2164 "_json.c"
        var $603=$_py_tmp_i; //@line 2164 "_json.c"
        var $604=$603; //@line 2164 "_json.c"
        HEAP[$604]=$602; //@line 2164 "_json.c"
        var $605=$_py_tmp_i; //@line 2164 "_json.c"
        var $606=$605; //@line 2164 "_json.c"
        var $607=HEAP[$606]; //@line 2164 "_json.c"
        var $608=($607)==0; //@line 2164 "_json.c"
        if ($608) { __label__ = 121; break; } else { __label__ = 122; break; } //@line 2164 "_json.c"
      case 121: // $bb46_i
        var $609=$_py_tmp_i; //@line 2164 "_json.c"
        var $610=$609+4; //@line 2164 "_json.c"
        var $611=HEAP[$610]; //@line 2164 "_json.c"
        var $612=$611+24; //@line 2164 "_json.c"
        var $613=HEAP[$612]; //@line 2164 "_json.c"
        var $614=$_py_tmp_i; //@line 2164 "_json.c"
        FUNCTION_TABLE[$613]($614); //@line 2164 "_json.c"
        __label__ = 122; break; //@line 2164 "_json.c"
      case 122: // $bb47_ithread_pre_split
        var $_pr78=$encoded_i;
        __lastLabel__ = 122; __label__ = 123; break;
      case 123: // $bb47_i
        var $615=__lastLabel__ == 122 ? $_pr78 : ($retval3_i_i);
        var $616=($615)==0; //@line 2165 "_json.c"
        if ($616) { __label__ = 148; break; } else { __label__ = 124; break; } //@line 2165 "_json.c"
      case 124: // $bb48_i
        var $617=$rval_addr_i; //@line 2167 "_json.c"
        var $618=$encoded_i; //@line 2167 "_json.c"
        var $619=_PyList_Append($617, $618); //@line 2167 "_json.c"
        var $620=($619)!=0; //@line 2167 "_json.c"
        var $621=$encoded_i; //@line 2168 "_json.c"
        var $622=$621; //@line 2168 "_json.c"
        var $623=HEAP[$622]; //@line 2168 "_json.c"
        var $624=($623) - 1; //@line 2168 "_json.c"
        var $625=$encoded_i; //@line 2168 "_json.c"
        var $626=$625; //@line 2168 "_json.c"
        HEAP[$626]=$624; //@line 2168 "_json.c"
        var $627=$encoded_i; //@line 2168 "_json.c"
        var $628=$627; //@line 2168 "_json.c"
        var $629=HEAP[$628]; //@line 2168 "_json.c"
        var $630=($629)==0; //@line 2168 "_json.c"
        if ($620) { __label__ = 125; break; } else { __label__ = 127; break; } //@line 2167 "_json.c"
      case 125: // $bb49_i
        if ($630) { __label__ = 126; break; } else { __label__ = 148; break; } //@line 2168 "_json.c"
      case 126: // $bb50_i
        var $631=$encoded_i; //@line 2168 "_json.c"
        var $632=$631+4; //@line 2168 "_json.c"
        var $633=HEAP[$632]; //@line 2168 "_json.c"
        var $634=$633+24; //@line 2168 "_json.c"
        var $635=HEAP[$634]; //@line 2168 "_json.c"
        var $636=$encoded_i; //@line 2168 "_json.c"
        FUNCTION_TABLE[$635]($636); //@line 2168 "_json.c"
        __label__ = 148; break; //@line 2168 "_json.c"
      case 127: // $bb52_i
        if ($630) { __label__ = 128; break; } else { __label__ = 129; break; } //@line 2171 "_json.c"
      case 128: // $bb53_i
        var $637=$encoded_i; //@line 2171 "_json.c"
        var $638=$637+4; //@line 2171 "_json.c"
        var $639=HEAP[$638]; //@line 2171 "_json.c"
        var $640=$639+24; //@line 2171 "_json.c"
        var $641=HEAP[$640]; //@line 2171 "_json.c"
        var $642=$encoded_i; //@line 2171 "_json.c"
        FUNCTION_TABLE[$641]($642); //@line 2171 "_json.c"
        __label__ = 129; break; //@line 2171 "_json.c"
      case 129: // $bb54_i
        var $643=$s_addr_i30; //@line 2172 "_json.c"
        var $644=$643+24; //@line 2172 "_json.c"
        var $645=HEAP[$644]; //@line 2172 "_json.c"
        var $646=$rval_addr_i; //@line 2172 "_json.c"
        var $647=_PyList_Append($646, $645); //@line 2172 "_json.c"
        var $648=($647)!=0; //@line 2172 "_json.c"
        if ($648) { __label__ = 148; break; } else { __label__ = 130; break; } //@line 2172 "_json.c"
      case 130: // $bb55_i
        var $649=$s_addr_i30; //@line 2174 "_json.c"
        var $650=$rval_addr_i; //@line 2174 "_json.c"
        var $651=$value_i; //@line 2174 "_json.c"
        var $652=$indent_level_addr_i; //@line 2174 "_json.c"
        var $653=_encoder_listencode_obj($649, $650, $651, $652); //@line 2174 "_json.c"
        var $654=($653)!=0; //@line 2174 "_json.c"
        if ($654) { __label__ = 148; break; } else { __label__ = 131; break; } //@line 2174 "_json.c"
      case 131: // $bb56_i
        var $655=$idx_i; //@line 2176 "_json.c"
        var $656=($655) + 1; //@line 2176 "_json.c"
        $idx_i=$656; //@line 2176 "_json.c"
        var $657=$value_i; //@line 2177 "_json.c"
        var $658=($657)!=0; //@line 2177 "_json.c"
        if ($658) { __label__ = 132; break; } else { __label__ = 134; break; } //@line 2177 "_json.c"
      case 132: // $bb57_i
        var $659=$value_i; //@line 2177 "_json.c"
        $_py_tmp58_i=$659; //@line 2177 "_json.c"
        $value_i=0; //@line 2177 "_json.c"
        var $660=$_py_tmp58_i; //@line 2177 "_json.c"
        var $661=$660; //@line 2177 "_json.c"
        var $662=HEAP[$661]; //@line 2177 "_json.c"
        var $663=($662) - 1; //@line 2177 "_json.c"
        var $664=$_py_tmp58_i; //@line 2177 "_json.c"
        var $665=$664; //@line 2177 "_json.c"
        HEAP[$665]=$663; //@line 2177 "_json.c"
        var $666=$_py_tmp58_i; //@line 2177 "_json.c"
        var $667=$666; //@line 2177 "_json.c"
        var $668=HEAP[$667]; //@line 2177 "_json.c"
        var $669=($668)==0; //@line 2177 "_json.c"
        if ($669) { __label__ = 133; break; } else { __label__ = 134; break; } //@line 2177 "_json.c"
      case 133: // $bb59_i
        var $670=$_py_tmp58_i; //@line 2177 "_json.c"
        var $671=$670+4; //@line 2177 "_json.c"
        var $672=HEAP[$671]; //@line 2177 "_json.c"
        var $673=$672+24; //@line 2177 "_json.c"
        var $674=HEAP[$673]; //@line 2177 "_json.c"
        var $675=$_py_tmp58_i; //@line 2177 "_json.c"
        FUNCTION_TABLE[$674]($675); //@line 2177 "_json.c"
        __label__ = 134; break; //@line 2177 "_json.c"
      case 134: // $bb60_i
        var $676=$key_i; //@line 2178 "_json.c"
        var $677=$676; //@line 2178 "_json.c"
        var $678=HEAP[$677]; //@line 2178 "_json.c"
        var $679=($678) - 1; //@line 2178 "_json.c"
        var $680=$key_i; //@line 2178 "_json.c"
        var $681=$680; //@line 2178 "_json.c"
        HEAP[$681]=$679; //@line 2178 "_json.c"
        var $682=$key_i; //@line 2178 "_json.c"
        var $683=$682; //@line 2178 "_json.c"
        var $684=HEAP[$683]; //@line 2178 "_json.c"
        var $685=($684)==0; //@line 2178 "_json.c"
        if ($685) { __label__ = 135; break; } else { __label__ = 136; break; } //@line 2178 "_json.c"
      case 135: // $bb61_i
        var $686=$key_i; //@line 2178 "_json.c"
        var $687=$686+4; //@line 2178 "_json.c"
        var $688=HEAP[$687]; //@line 2178 "_json.c"
        var $689=$688+24; //@line 2178 "_json.c"
        var $690=HEAP[$689]; //@line 2178 "_json.c"
        var $691=$key_i; //@line 2178 "_json.c"
        FUNCTION_TABLE[$690]($691); //@line 2178 "_json.c"
        __label__ = 136; break; //@line 2178 "_json.c"
      case 136: // $bb62_i
        var $692=$it_i; //@line 2122 "_json.c"
        var $693=_PyIter_Next($692); //@line 2122 "_json.c"
        $key_i=$693; //@line 2122 "_json.c"
        var $694=($693)!=0; //@line 2122 "_json.c"
        if ($694) { __label__ = 98; break; } else { __label__ = 137; break; } //@line 2122 "_json.c"
      case 137: // $bb63_i
        var $695=_PyErr_Occurred(); //@line 2180 "_json.c"
        var $696=($695)!=0; //@line 2180 "_json.c"
        if ($696) { __label__ = 148; break; } else { __label__ = 138; break; } //@line 2180 "_json.c"
      case 138: // $bb64_i
        var $697=$it_i; //@line 2182 "_json.c"
        var $698=($697)!=0; //@line 2182 "_json.c"
        if ($698) { __label__ = 139; break; } else { __label__ = 141; break; } //@line 2182 "_json.c"
      case 139: // $bb65_i
        var $699=$it_i; //@line 2182 "_json.c"
        $_py_tmp66_i=$699; //@line 2182 "_json.c"
        $it_i=0; //@line 2182 "_json.c"
        var $700=$_py_tmp66_i; //@line 2182 "_json.c"
        var $701=$700; //@line 2182 "_json.c"
        var $702=HEAP[$701]; //@line 2182 "_json.c"
        var $703=($702) - 1; //@line 2182 "_json.c"
        var $704=$_py_tmp66_i; //@line 2182 "_json.c"
        var $705=$704; //@line 2182 "_json.c"
        HEAP[$705]=$703; //@line 2182 "_json.c"
        var $706=$_py_tmp66_i; //@line 2182 "_json.c"
        var $707=$706; //@line 2182 "_json.c"
        var $708=HEAP[$707]; //@line 2182 "_json.c"
        var $709=($708)==0; //@line 2182 "_json.c"
        if ($709) { __label__ = 140; break; } else { __label__ = 141; break; } //@line 2182 "_json.c"
      case 140: // $bb67_i
        var $710=$_py_tmp66_i; //@line 2182 "_json.c"
        var $711=$710+4; //@line 2182 "_json.c"
        var $712=HEAP[$711]; //@line 2182 "_json.c"
        var $713=$712+24; //@line 2182 "_json.c"
        var $714=HEAP[$713]; //@line 2182 "_json.c"
        var $715=$_py_tmp66_i; //@line 2182 "_json.c"
        FUNCTION_TABLE[$714]($715); //@line 2182 "_json.c"
        __label__ = 141; break; //@line 2182 "_json.c"
      case 141: // $bb68_i
        var $716=$ident_i; //@line 2184 "_json.c"
        var $717=($716)!=0; //@line 2184 "_json.c"
        if ($717) { __label__ = 142; break; } else { __label__ = 146; break; } //@line 2184 "_json.c"
      case 142: // $bb69_i
        var $718=$s_addr_i30; //@line 2185 "_json.c"
        var $719=$718+8; //@line 2185 "_json.c"
        var $720=HEAP[$719]; //@line 2185 "_json.c"
        var $721=$ident_i; //@line 2185 "_json.c"
        var $722=_PyDict_DelItem($720, $721); //@line 2185 "_json.c"
        var $723=($722)!=0; //@line 2185 "_json.c"
        if ($723) { __label__ = 148; break; } else { __label__ = 143; break; } //@line 2185 "_json.c"
      case 143: // $bb70_i
        var $724=$ident_i; //@line 2187 "_json.c"
        var $725=($724)!=0; //@line 2187 "_json.c"
        if ($725) { __label__ = 144; break; } else { __label__ = 146; break; } //@line 2187 "_json.c"
      case 144: // $bb71_i
        var $726=$ident_i; //@line 2187 "_json.c"
        $_py_tmp72_i=$726; //@line 2187 "_json.c"
        $ident_i=0; //@line 2187 "_json.c"
        var $727=$_py_tmp72_i; //@line 2187 "_json.c"
        var $728=$727; //@line 2187 "_json.c"
        var $729=HEAP[$728]; //@line 2187 "_json.c"
        var $730=($729) - 1; //@line 2187 "_json.c"
        var $731=$_py_tmp72_i; //@line 2187 "_json.c"
        var $732=$731; //@line 2187 "_json.c"
        HEAP[$732]=$730; //@line 2187 "_json.c"
        var $733=$_py_tmp72_i; //@line 2187 "_json.c"
        var $734=$733; //@line 2187 "_json.c"
        var $735=HEAP[$734]; //@line 2187 "_json.c"
        var $736=($735)==0; //@line 2187 "_json.c"
        if ($736) { __label__ = 145; break; } else { __label__ = 146; break; } //@line 2187 "_json.c"
      case 145: // $bb73_i
        var $737=$_py_tmp72_i; //@line 2187 "_json.c"
        var $738=$737+4; //@line 2187 "_json.c"
        var $739=HEAP[$738]; //@line 2187 "_json.c"
        var $740=$739+24; //@line 2187 "_json.c"
        var $741=HEAP[$740]; //@line 2187 "_json.c"
        var $742=$_py_tmp72_i; //@line 2187 "_json.c"
        FUNCTION_TABLE[$741]($742); //@line 2187 "_json.c"
        __label__ = 146; break; //@line 2187 "_json.c"
      case 146: // $bb74_i
        var $743=HEAP[_close_dict_11342]; //@line 2197 "_json.c"
        var $744=$rval_addr_i; //@line 2197 "_json.c"
        var $745=_PyList_Append($744, $743); //@line 2197 "_json.c"
        var $746=($745)!=0; //@line 2197 "_json.c"
        if ($746) { __label__ = 148; break; } else { __label__ = 147; break; } //@line 2197 "_json.c"
      case 147: // $bb75_i
        $2=0; //@line 2199 "_json.c"
        __label__ = 164; break; //@line 2199 "_json.c"
      case 148: // $bail_i
        var $_pr79=$it_i;
        var $747=($_pr79)!=0; //@line 2202 "_json.c"
        if ($747) { __label__ = 149; break; } else { __label__ = 151; break; } //@line 2202 "_json.c"
      case 149: // $bb76_i
        var $748=$it_i; //@line 2202 "_json.c"
        var $749=$748; //@line 2202 "_json.c"
        var $750=HEAP[$749]; //@line 2202 "_json.c"
        var $751=($750) - 1; //@line 2202 "_json.c"
        var $752=$it_i; //@line 2202 "_json.c"
        var $753=$752; //@line 2202 "_json.c"
        HEAP[$753]=$751; //@line 2202 "_json.c"
        var $754=$it_i; //@line 2202 "_json.c"
        var $755=$754; //@line 2202 "_json.c"
        var $756=HEAP[$755]; //@line 2202 "_json.c"
        var $757=($756)==0; //@line 2202 "_json.c"
        if ($757) { __label__ = 150; break; } else { __label__ = 151; break; } //@line 2202 "_json.c"
      case 150: // $bb77_i
        var $758=$it_i; //@line 2202 "_json.c"
        var $759=$758+4; //@line 2202 "_json.c"
        var $760=HEAP[$759]; //@line 2202 "_json.c"
        var $761=$760+24; //@line 2202 "_json.c"
        var $762=HEAP[$761]; //@line 2202 "_json.c"
        var $763=$it_i; //@line 2202 "_json.c"
        FUNCTION_TABLE[$762]($763); //@line 2202 "_json.c"
        __label__ = 151; break; //@line 2202 "_json.c"
      case 151: // $bb78_i
        var $764=$key_i; //@line 2203 "_json.c"
        var $765=($764)!=0; //@line 2203 "_json.c"
        if ($765) { __label__ = 152; break; } else { __label__ = 154; break; } //@line 2203 "_json.c"
      case 152: // $bb79_i
        var $766=$key_i; //@line 2203 "_json.c"
        var $767=$766; //@line 2203 "_json.c"
        var $768=HEAP[$767]; //@line 2203 "_json.c"
        var $769=($768) - 1; //@line 2203 "_json.c"
        var $770=$key_i; //@line 2203 "_json.c"
        var $771=$770; //@line 2203 "_json.c"
        HEAP[$771]=$769; //@line 2203 "_json.c"
        var $772=$key_i; //@line 2203 "_json.c"
        var $773=$772; //@line 2203 "_json.c"
        var $774=HEAP[$773]; //@line 2203 "_json.c"
        var $775=($774)==0; //@line 2203 "_json.c"
        if ($775) { __label__ = 153; break; } else { __label__ = 154; break; } //@line 2203 "_json.c"
      case 153: // $bb80_i
        var $776=$key_i; //@line 2203 "_json.c"
        var $777=$776+4; //@line 2203 "_json.c"
        var $778=HEAP[$777]; //@line 2203 "_json.c"
        var $779=$778+24; //@line 2203 "_json.c"
        var $780=HEAP[$779]; //@line 2203 "_json.c"
        var $781=$key_i; //@line 2203 "_json.c"
        FUNCTION_TABLE[$780]($781); //@line 2203 "_json.c"
        __label__ = 154; break; //@line 2203 "_json.c"
      case 154: // $bb81_i
        var $782=$value_i; //@line 2204 "_json.c"
        var $783=($782)!=0; //@line 2204 "_json.c"
        if ($783) { __label__ = 155; break; } else { __label__ = 157; break; } //@line 2204 "_json.c"
      case 155: // $bb82_i
        var $784=$value_i; //@line 2204 "_json.c"
        var $785=$784; //@line 2204 "_json.c"
        var $786=HEAP[$785]; //@line 2204 "_json.c"
        var $787=($786) - 1; //@line 2204 "_json.c"
        var $788=$value_i; //@line 2204 "_json.c"
        var $789=$788; //@line 2204 "_json.c"
        HEAP[$789]=$787; //@line 2204 "_json.c"
        var $790=$value_i; //@line 2204 "_json.c"
        var $791=$790; //@line 2204 "_json.c"
        var $792=HEAP[$791]; //@line 2204 "_json.c"
        var $793=($792)==0; //@line 2204 "_json.c"
        if ($793) { __label__ = 156; break; } else { __label__ = 157; break; } //@line 2204 "_json.c"
      case 156: // $bb83_i
        var $794=$value_i; //@line 2204 "_json.c"
        var $795=$794+4; //@line 2204 "_json.c"
        var $796=HEAP[$795]; //@line 2204 "_json.c"
        var $797=$796+24; //@line 2204 "_json.c"
        var $798=HEAP[$797]; //@line 2204 "_json.c"
        var $799=$value_i; //@line 2204 "_json.c"
        FUNCTION_TABLE[$798]($799); //@line 2204 "_json.c"
        __label__ = 157; break; //@line 2204 "_json.c"
      case 157: // $bb84_i
        var $800=$kstr_i; //@line 2205 "_json.c"
        var $801=($800)!=0; //@line 2205 "_json.c"
        if ($801) { __label__ = 158; break; } else { __label__ = 160; break; } //@line 2205 "_json.c"
      case 158: // $bb85_i
        var $802=$kstr_i; //@line 2205 "_json.c"
        var $803=$802; //@line 2205 "_json.c"
        var $804=HEAP[$803]; //@line 2205 "_json.c"
        var $805=($804) - 1; //@line 2205 "_json.c"
        var $806=$kstr_i; //@line 2205 "_json.c"
        var $807=$806; //@line 2205 "_json.c"
        HEAP[$807]=$805; //@line 2205 "_json.c"
        var $808=$kstr_i; //@line 2205 "_json.c"
        var $809=$808; //@line 2205 "_json.c"
        var $810=HEAP[$809]; //@line 2205 "_json.c"
        var $811=($810)==0; //@line 2205 "_json.c"
        if ($811) { __label__ = 159; break; } else { __label__ = 160; break; } //@line 2205 "_json.c"
      case 159: // $bb86_i
        var $812=$kstr_i; //@line 2205 "_json.c"
        var $813=$812+4; //@line 2205 "_json.c"
        var $814=HEAP[$813]; //@line 2205 "_json.c"
        var $815=$814+24; //@line 2205 "_json.c"
        var $816=HEAP[$815]; //@line 2205 "_json.c"
        var $817=$kstr_i; //@line 2205 "_json.c"
        FUNCTION_TABLE[$816]($817); //@line 2205 "_json.c"
        __label__ = 160; break; //@line 2205 "_json.c"
      case 160: // $bb87_i
        var $818=$ident_i; //@line 2206 "_json.c"
        var $819=($818)!=0; //@line 2206 "_json.c"
        if ($819) { __label__ = 161; break; } else { __label__ = 163; break; } //@line 2206 "_json.c"
      case 161: // $bb88_i
        var $820=$ident_i; //@line 2206 "_json.c"
        var $821=$820; //@line 2206 "_json.c"
        var $822=HEAP[$821]; //@line 2206 "_json.c"
        var $823=($822) - 1; //@line 2206 "_json.c"
        var $824=$ident_i; //@line 2206 "_json.c"
        var $825=$824; //@line 2206 "_json.c"
        HEAP[$825]=$823; //@line 2206 "_json.c"
        var $826=$ident_i; //@line 2206 "_json.c"
        var $827=$826; //@line 2206 "_json.c"
        var $828=HEAP[$827]; //@line 2206 "_json.c"
        var $829=($828)==0; //@line 2206 "_json.c"
        if ($829) { __label__ = 162; break; } else { __label__ = 163; break; } //@line 2206 "_json.c"
      case 162: // $bb89_i
        var $830=$ident_i; //@line 2206 "_json.c"
        var $831=$830+4; //@line 2206 "_json.c"
        var $832=HEAP[$831]; //@line 2206 "_json.c"
        var $833=$832+24; //@line 2206 "_json.c"
        var $834=HEAP[$833]; //@line 2206 "_json.c"
        var $835=$ident_i; //@line 2206 "_json.c"
        FUNCTION_TABLE[$834]($835); //@line 2206 "_json.c"
        __label__ = 163; break; //@line 2206 "_json.c"
      case 163: // $bb90_i
        $2=-1; //@line 2207 "_json.c"
        __label__ = 164; break; //@line 2207 "_json.c"
      case 164: // $encoder_listencode_dict_exit
        var $836=$2; //@line 2081 "_json.c"
        $retval_i31=$836; //@line 2081 "_json.c"
        var $retval92_i=$retval_i31; //@line 2081 "_json.c"
        $rv=$retval92_i; //@line 2011 "_json.c"
        var $837=HEAP[__PyThreadState_Current]; //@line 2012 "_json.c"
        var $838=$837+12; //@line 2012 "_json.c"
        var $839=HEAP[$838]; //@line 2012 "_json.c"
        var $840=($839) - 1; //@line 2012 "_json.c"
        var $841=$837+12; //@line 2012 "_json.c"
        HEAP[$841]=$840; //@line 2012 "_json.c"
        var $842=$rv; //@line 2013 "_json.c"
        $8=$842; //@line 2013 "_json.c"
        __label__ = 203; break; //@line 2013 "_json.c"
      case 165: // $bb33
        $ident=0; //@line 2016 "_json.c"
        var $843=$s_addr; //@line 2017 "_json.c"
        var $844=$843+8; //@line 2017 "_json.c"
        var $845=HEAP[$844]; //@line 2017 "_json.c"
        var $846=($845)!=(__Py_NoneStruct); //@line 2017 "_json.c"
        if ($846) { __label__ = 166; break; } else { __label__ = 178; break; } //@line 2017 "_json.c"
      case 166: // $bb34
        var $847=$obj_addr; //@line 2019 "_json.c"
        var $848=$847; //@line 2019 "_json.c"
        var $849=_PyLong_FromVoidPtr($848); //@line 2019 "_json.c"
        $ident=$849; //@line 2019 "_json.c"
        var $850=$ident; //@line 2020 "_json.c"
        var $851=($850)==0; //@line 2020 "_json.c"
        if ($851) { __label__ = 167; break; } else { __label__ = 168; break; } //@line 2020 "_json.c"
      case 167: // $bb35
        $8=-1; //@line 2021 "_json.c"
        __label__ = 203; break; //@line 2021 "_json.c"
      case 168: // $bb36
        var $852=$s_addr; //@line 2022 "_json.c"
        var $853=$852+8; //@line 2022 "_json.c"
        var $854=HEAP[$853]; //@line 2022 "_json.c"
        var $855=$ident; //@line 2022 "_json.c"
        var $856=_PyDict_Contains($854, $855); //@line 2022 "_json.c"
        $has_key=$856; //@line 2022 "_json.c"
        var $857=$has_key; //@line 2023 "_json.c"
        var $858=($857)!=0; //@line 2023 "_json.c"
        if ($858) { __label__ = 169; break; } else { __label__ = 174; break; } //@line 2023 "_json.c"
      case 169: // $bb37
        var $859=$has_key; //@line 2024 "_json.c"
        var $860=($859)!=-1; //@line 2024 "_json.c"
        if ($860) { __label__ = 170; break; } else { __label__ = 171; break; } //@line 2024 "_json.c"
      case 170: // $bb38
        var $861=HEAP[_PyExc_ValueError]; //@line 2025 "_json.c"
        _PyErr_SetString($861, __str59); //@line 2025 "_json.c"
        __label__ = 171; break; //@line 2025 "_json.c"
      case 171: // $bb39
        var $862=$ident; //@line 2026 "_json.c"
        var $863=$862; //@line 2026 "_json.c"
        var $864=HEAP[$863]; //@line 2026 "_json.c"
        var $865=($864) - 1; //@line 2026 "_json.c"
        var $866=$ident; //@line 2026 "_json.c"
        var $867=$866; //@line 2026 "_json.c"
        HEAP[$867]=$865; //@line 2026 "_json.c"
        var $868=$ident; //@line 2026 "_json.c"
        var $869=$868; //@line 2026 "_json.c"
        var $870=HEAP[$869]; //@line 2026 "_json.c"
        var $871=($870)==0; //@line 2026 "_json.c"
        if ($871) { __label__ = 172; break; } else { __label__ = 173; break; } //@line 2026 "_json.c"
      case 172: // $bb40
        var $872=$ident; //@line 2026 "_json.c"
        var $873=$872+4; //@line 2026 "_json.c"
        var $874=HEAP[$873]; //@line 2026 "_json.c"
        var $875=$874+24; //@line 2026 "_json.c"
        var $876=HEAP[$875]; //@line 2026 "_json.c"
        var $877=$ident; //@line 2026 "_json.c"
        FUNCTION_TABLE[$876]($877); //@line 2026 "_json.c"
        __label__ = 173; break; //@line 2026 "_json.c"
      case 173: // $bb41
        $8=-1; //@line 2027 "_json.c"
        __label__ = 203; break; //@line 2027 "_json.c"
      case 174: // $bb42
        var $878=$s_addr; //@line 2029 "_json.c"
        var $879=$878+8; //@line 2029 "_json.c"
        var $880=HEAP[$879]; //@line 2029 "_json.c"
        var $881=$ident; //@line 2029 "_json.c"
        var $882=$obj_addr; //@line 2029 "_json.c"
        var $883=_PyDict_SetItem($880, $881, $882); //@line 2029 "_json.c"
        var $884=($883)!=0; //@line 2029 "_json.c"
        if ($884) { __label__ = 175; break; } else { __label__ = 178; break; } //@line 2029 "_json.c"
      case 175: // $bb43
        var $885=$ident; //@line 2030 "_json.c"
        var $886=$885; //@line 2030 "_json.c"
        var $887=HEAP[$886]; //@line 2030 "_json.c"
        var $888=($887) - 1; //@line 2030 "_json.c"
        var $889=$ident; //@line 2030 "_json.c"
        var $890=$889; //@line 2030 "_json.c"
        HEAP[$890]=$888; //@line 2030 "_json.c"
        var $891=$ident; //@line 2030 "_json.c"
        var $892=$891; //@line 2030 "_json.c"
        var $893=HEAP[$892]; //@line 2030 "_json.c"
        var $894=($893)==0; //@line 2030 "_json.c"
        if ($894) { __label__ = 176; break; } else { __label__ = 177; break; } //@line 2030 "_json.c"
      case 176: // $bb44
        var $895=$ident; //@line 2030 "_json.c"
        var $896=$895+4; //@line 2030 "_json.c"
        var $897=HEAP[$896]; //@line 2030 "_json.c"
        var $898=$897+24; //@line 2030 "_json.c"
        var $899=HEAP[$898]; //@line 2030 "_json.c"
        var $900=$ident; //@line 2030 "_json.c"
        FUNCTION_TABLE[$899]($900); //@line 2030 "_json.c"
        __label__ = 177; break; //@line 2030 "_json.c"
      case 177: // $bb45
        $8=-1; //@line 2031 "_json.c"
        __label__ = 203; break; //@line 2031 "_json.c"
      case 178: // $bb46
        var $901=$s_addr; //@line 2034 "_json.c"
        var $902=$901+12; //@line 2034 "_json.c"
        var $903=HEAP[$902]; //@line 2034 "_json.c"
        var $904=$obj_addr; //@line 2034 "_json.c"
        var $905=_PyObject_CallFunctionObjArgs($903, $904, 0); //@line 2034 "_json.c"
        $newobj=$905; //@line 2034 "_json.c"
        var $906=($905)==0; //@line 2035 "_json.c"
        if ($906) { __label__ = 179; break; } else { __label__ = 183; break; } //@line 2035 "_json.c"
      case 179: // $bb47
        var $907=$ident; //@line 2036 "_json.c"
        var $908=($907)!=0; //@line 2036 "_json.c"
        if ($908) { __label__ = 180; break; } else { __label__ = 182; break; } //@line 2036 "_json.c"
      case 180: // $bb48
        var $909=$ident; //@line 2036 "_json.c"
        var $910=$909; //@line 2036 "_json.c"
        var $911=HEAP[$910]; //@line 2036 "_json.c"
        var $912=($911) - 1; //@line 2036 "_json.c"
        var $913=$ident; //@line 2036 "_json.c"
        var $914=$913; //@line 2036 "_json.c"
        HEAP[$914]=$912; //@line 2036 "_json.c"
        var $915=$ident; //@line 2036 "_json.c"
        var $916=$915; //@line 2036 "_json.c"
        var $917=HEAP[$916]; //@line 2036 "_json.c"
        var $918=($917)==0; //@line 2036 "_json.c"
        if ($918) { __label__ = 181; break; } else { __label__ = 182; break; } //@line 2036 "_json.c"
      case 181: // $bb49
        var $919=$ident; //@line 2036 "_json.c"
        var $920=$919+4; //@line 2036 "_json.c"
        var $921=HEAP[$920]; //@line 2036 "_json.c"
        var $922=$921+24; //@line 2036 "_json.c"
        var $923=HEAP[$922]; //@line 2036 "_json.c"
        var $924=$ident; //@line 2036 "_json.c"
        FUNCTION_TABLE[$923]($924); //@line 2036 "_json.c"
        __label__ = 182; break; //@line 2036 "_json.c"
      case 182: // $bb50
        $8=-1; //@line 2037 "_json.c"
        __label__ = 203; break; //@line 2037 "_json.c"
      case 183: // $bb51
        var $925=HEAP[__PyThreadState_Current]; //@line 2040 "_json.c"
        var $926=$925+12; //@line 2040 "_json.c"
        var $927=HEAP[$926]; //@line 2040 "_json.c"
        var $928=($927) + 1; //@line 2040 "_json.c"
        var $929=$925+12; //@line 2040 "_json.c"
        HEAP[$929]=$928; //@line 2040 "_json.c"
        var $930=$925+12; //@line 2040 "_json.c"
        var $931=HEAP[$930]; //@line 2040 "_json.c"
        var $932=HEAP[__Py_CheckRecursionLimit]; //@line 2040 "_json.c"
        var $933=($931) > ($932); //@line 2040 "_json.c"
        if ($933) { __label__ = 184; break; } else { __label__ = 186; break; } //@line 2040 "_json.c"
      case 184: // $bb52
        var $934=__Py_CheckRecursiveCall(__str58); //@line 2040 "_json.c"
        var $935=($934)!=0; //@line 2040 "_json.c"
        if ($935) { __label__ = 185; break; } else { __label__ = 186; break; } //@line 2040 "_json.c"
      case 185: // $bb53
        $8=-1; //@line 2041 "_json.c"
        __label__ = 203; break; //@line 2041 "_json.c"
      case 186: // $bb54
        var $936=$s_addr; //@line 2042 "_json.c"
        var $937=$rval_addr; //@line 2042 "_json.c"
        var $938=$newobj; //@line 2042 "_json.c"
        var $939=$indent_level_addr; //@line 2042 "_json.c"
        var $940=_encoder_listencode_obj($936, $937, $938, $939); //@line 2042 "_json.c"
        $rv=$940; //@line 2042 "_json.c"
        var $941=HEAP[__PyThreadState_Current]; //@line 2043 "_json.c"
        var $942=$941+12; //@line 2043 "_json.c"
        var $943=HEAP[$942]; //@line 2043 "_json.c"
        var $944=($943) - 1; //@line 2043 "_json.c"
        var $945=$941+12; //@line 2043 "_json.c"
        HEAP[$945]=$944; //@line 2043 "_json.c"
        var $946=$newobj; //@line 2045 "_json.c"
        var $947=$946; //@line 2045 "_json.c"
        var $948=HEAP[$947]; //@line 2045 "_json.c"
        var $949=($948) - 1; //@line 2045 "_json.c"
        var $950=$newobj; //@line 2045 "_json.c"
        var $951=$950; //@line 2045 "_json.c"
        HEAP[$951]=$949; //@line 2045 "_json.c"
        var $952=$newobj; //@line 2045 "_json.c"
        var $953=$952; //@line 2045 "_json.c"
        var $954=HEAP[$953]; //@line 2045 "_json.c"
        var $955=($954)==0; //@line 2045 "_json.c"
        if ($955) { __label__ = 187; break; } else { __label__ = 188; break; } //@line 2045 "_json.c"
      case 187: // $bb55
        var $956=$newobj; //@line 2045 "_json.c"
        var $957=$956+4; //@line 2045 "_json.c"
        var $958=HEAP[$957]; //@line 2045 "_json.c"
        var $959=$958+24; //@line 2045 "_json.c"
        var $960=HEAP[$959]; //@line 2045 "_json.c"
        var $961=$newobj; //@line 2045 "_json.c"
        FUNCTION_TABLE[$960]($961); //@line 2045 "_json.c"
        __label__ = 188; break; //@line 2045 "_json.c"
      case 188: // $bb56
        var $962=$rv; //@line 2046 "_json.c"
        var $963=($962)!=0; //@line 2046 "_json.c"
        var $964=$ident; //@line 2047 "_json.c"
        var $965=($964)!=0; //@line 2047 "_json.c"
        if ($963) { __label__ = 189; break; } else { __label__ = 193; break; } //@line 2046 "_json.c"
      case 189: // $bb57
        if ($965) { __label__ = 190; break; } else { __label__ = 192; break; } //@line 2047 "_json.c"
      case 190: // $bb58
        var $966=$ident; //@line 2047 "_json.c"
        var $967=$966; //@line 2047 "_json.c"
        var $968=HEAP[$967]; //@line 2047 "_json.c"
        var $969=($968) - 1; //@line 2047 "_json.c"
        var $970=$ident; //@line 2047 "_json.c"
        var $971=$970; //@line 2047 "_json.c"
        HEAP[$971]=$969; //@line 2047 "_json.c"
        var $972=$ident; //@line 2047 "_json.c"
        var $973=$972; //@line 2047 "_json.c"
        var $974=HEAP[$973]; //@line 2047 "_json.c"
        var $975=($974)==0; //@line 2047 "_json.c"
        if ($975) { __label__ = 191; break; } else { __label__ = 192; break; } //@line 2047 "_json.c"
      case 191: // $bb59
        var $976=$ident; //@line 2047 "_json.c"
        var $977=$976+4; //@line 2047 "_json.c"
        var $978=HEAP[$977]; //@line 2047 "_json.c"
        var $979=$978+24; //@line 2047 "_json.c"
        var $980=HEAP[$979]; //@line 2047 "_json.c"
        var $981=$ident; //@line 2047 "_json.c"
        FUNCTION_TABLE[$980]($981); //@line 2047 "_json.c"
        __label__ = 192; break; //@line 2047 "_json.c"
      case 192: // $bb60
        $8=-1; //@line 2048 "_json.c"
        __label__ = 203; break; //@line 2048 "_json.c"
      case 193: // $bb61
        if ($965) { __label__ = 194; break; } else { __label__ = 202; break; } //@line 2050 "_json.c"
      case 194: // $bb62
        var $982=$s_addr; //@line 2051 "_json.c"
        var $983=$982+8; //@line 2051 "_json.c"
        var $984=HEAP[$983]; //@line 2051 "_json.c"
        var $985=$ident; //@line 2051 "_json.c"
        var $986=_PyDict_DelItem($984, $985); //@line 2051 "_json.c"
        var $987=($986)!=0; //@line 2051 "_json.c"
        var $988=$ident; //@line 2052 "_json.c"
        var $989=($988)!=0; //@line 2052 "_json.c"
        if ($987) { __label__ = 195; break; } else { __label__ = 199; break; } //@line 2051 "_json.c"
      case 195: // $bb63
        if ($989) { __label__ = 196; break; } else { __label__ = 198; break; } //@line 2052 "_json.c"
      case 196: // $bb64
        var $990=$ident; //@line 2052 "_json.c"
        var $991=$990; //@line 2052 "_json.c"
        var $992=HEAP[$991]; //@line 2052 "_json.c"
        var $993=($992) - 1; //@line 2052 "_json.c"
        var $994=$ident; //@line 2052 "_json.c"
        var $995=$994; //@line 2052 "_json.c"
        HEAP[$995]=$993; //@line 2052 "_json.c"
        var $996=$ident; //@line 2052 "_json.c"
        var $997=$996; //@line 2052 "_json.c"
        var $998=HEAP[$997]; //@line 2052 "_json.c"
        var $999=($998)==0; //@line 2052 "_json.c"
        if ($999) { __label__ = 197; break; } else { __label__ = 198; break; } //@line 2052 "_json.c"
      case 197: // $bb65
        var $1000=$ident; //@line 2052 "_json.c"
        var $1001=$1000+4; //@line 2052 "_json.c"
        var $1002=HEAP[$1001]; //@line 2052 "_json.c"
        var $1003=$1002+24; //@line 2052 "_json.c"
        var $1004=HEAP[$1003]; //@line 2052 "_json.c"
        var $1005=$ident; //@line 2052 "_json.c"
        FUNCTION_TABLE[$1004]($1005); //@line 2052 "_json.c"
        __label__ = 198; break; //@line 2052 "_json.c"
      case 198: // $bb66
        $8=-1; //@line 2053 "_json.c"
        __label__ = 203; break; //@line 2053 "_json.c"
      case 199: // $bb67
        if ($989) { __label__ = 200; break; } else { __label__ = 202; break; } //@line 2055 "_json.c"
      case 200: // $bb68
        var $1006=$ident; //@line 2055 "_json.c"
        var $1007=$1006; //@line 2055 "_json.c"
        var $1008=HEAP[$1007]; //@line 2055 "_json.c"
        var $1009=($1008) - 1; //@line 2055 "_json.c"
        var $1010=$ident; //@line 2055 "_json.c"
        var $1011=$1010; //@line 2055 "_json.c"
        HEAP[$1011]=$1009; //@line 2055 "_json.c"
        var $1012=$ident; //@line 2055 "_json.c"
        var $1013=$1012; //@line 2055 "_json.c"
        var $1014=HEAP[$1013]; //@line 2055 "_json.c"
        var $1015=($1014)==0; //@line 2055 "_json.c"
        if ($1015) { __label__ = 201; break; } else { __label__ = 202; break; } //@line 2055 "_json.c"
      case 201: // $bb69
        var $1016=$ident; //@line 2055 "_json.c"
        var $1017=$1016+4; //@line 2055 "_json.c"
        var $1018=HEAP[$1017]; //@line 2055 "_json.c"
        var $1019=$1018+24; //@line 2055 "_json.c"
        var $1020=HEAP[$1019]; //@line 2055 "_json.c"
        var $1021=$ident; //@line 2055 "_json.c"
        FUNCTION_TABLE[$1020]($1021); //@line 2055 "_json.c"
        __label__ = 202; break; //@line 2055 "_json.c"
      case 202: // $bb70
        var $1022=$rv; //@line 2057 "_json.c"
        $8=$1022; //@line 2057 "_json.c"
        __label__ = 203; break; //@line 2057 "_json.c"
      case 203: // $bb71
        var $1023=$8; //@line 1979 "_json.c"
        $retval=$1023; //@line 1979 "_json.c"
        var $retval72=$retval; //@line 1979 "_json.c"
        ;
        return $retval72; //@line 1979 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_dealloc($self) {
    ;
    var __label__;
  
    var $self_addr;
    $self_addr=$self;
    var $0=$self_addr; //@line 2306 "_json.c"
    var $1=_encoder_clear($0); //@line 2306 "_json.c"
    var $2=$self_addr; //@line 2307 "_json.c"
    var $3=$2+4; //@line 2307 "_json.c"
    var $4=HEAP[$3]; //@line 2307 "_json.c"
    var $5=$4+160; //@line 2307 "_json.c"
    var $6=HEAP[$5]; //@line 2307 "_json.c"
    var $7=$self_addr; //@line 2307 "_json.c"
    var $8=$7; //@line 2307 "_json.c"
    FUNCTION_TABLE[$6]($8); //@line 2307 "_json.c"
    ;
    return; //@line 2308 "_json.c"
  }
  

  function _encoder_traverse($self, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $s;
        var $vret;
        var $vret7;
        var $vret11;
        var $vret15;
        var $vret19;
        var $vret23;
        var $vret27;
        var $vret31;
        $self_addr=$self;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$self_addr; //@line 2314 "_json.c"
        var $2=$1+4; //@line 2314 "_json.c"
        var $3=HEAP[$2]; //@line 2314 "_json.c"
        var $4=($3)!=(_PyEncoderType); //@line 2314 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2314 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 2314 "_json.c"
        var $6=$5+4; //@line 2314 "_json.c"
        var $7=HEAP[$6]; //@line 2314 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyEncoderType); //@line 2314 "_json.c"
        var $9=($8)==0; //@line 2314 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2314 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str47, __str29, 2314, ___PRETTY_FUNCTION___11738); //@line 2314 "_json.c"
        throw "Reached an unreachable!" //@line 2314 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 2315 "_json.c"
        var $11=$10; //@line 2315 "_json.c"
        $s=$11; //@line 2315 "_json.c"
        var $12=$s; //@line 2316 "_json.c"
        var $13=$12+8; //@line 2316 "_json.c"
        var $14=HEAP[$13]; //@line 2316 "_json.c"
        var $15=($14)!=0; //@line 2316 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2316 "_json.c"
      case 4: // $bb3
        var $16=$s; //@line 2316 "_json.c"
        var $17=$16+8; //@line 2316 "_json.c"
        var $18=HEAP[$17]; //@line 2316 "_json.c"
        var $19=$visit_addr; //@line 2316 "_json.c"
        var $20=$arg_addr; //@line 2316 "_json.c"
        var $21=FUNCTION_TABLE[$19]($18, $20); //@line 2316 "_json.c"
        $vret=$21; //@line 2316 "_json.c"
        var $22=$vret; //@line 2316 "_json.c"
        var $23=($22)!=0; //@line 2316 "_json.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2316 "_json.c"
      case 5: // $bb4
        var $24=$vret; //@line 2316 "_json.c"
        $0=$24; //@line 2316 "_json.c"
        __label__ = 28; break; //@line 2316 "_json.c"
      case 6: // $bb5
        var $25=$s; //@line 2317 "_json.c"
        var $26=$25+12; //@line 2317 "_json.c"
        var $27=HEAP[$26]; //@line 2317 "_json.c"
        var $28=($27)!=0; //@line 2317 "_json.c"
        if ($28) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2317 "_json.c"
      case 7: // $bb6
        var $29=$s; //@line 2317 "_json.c"
        var $30=$29+12; //@line 2317 "_json.c"
        var $31=HEAP[$30]; //@line 2317 "_json.c"
        var $32=$visit_addr; //@line 2317 "_json.c"
        var $33=$arg_addr; //@line 2317 "_json.c"
        var $34=FUNCTION_TABLE[$32]($31, $33); //@line 2317 "_json.c"
        $vret7=$34; //@line 2317 "_json.c"
        var $35=$vret7; //@line 2317 "_json.c"
        var $36=($35)!=0; //@line 2317 "_json.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2317 "_json.c"
      case 8: // $bb8
        var $37=$vret7; //@line 2317 "_json.c"
        $0=$37; //@line 2317 "_json.c"
        __label__ = 28; break; //@line 2317 "_json.c"
      case 9: // $bb9
        var $38=$s; //@line 2318 "_json.c"
        var $39=$38+16; //@line 2318 "_json.c"
        var $40=HEAP[$39]; //@line 2318 "_json.c"
        var $41=($40)!=0; //@line 2318 "_json.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 2318 "_json.c"
      case 10: // $bb10
        var $42=$s; //@line 2318 "_json.c"
        var $43=$42+16; //@line 2318 "_json.c"
        var $44=HEAP[$43]; //@line 2318 "_json.c"
        var $45=$visit_addr; //@line 2318 "_json.c"
        var $46=$arg_addr; //@line 2318 "_json.c"
        var $47=FUNCTION_TABLE[$45]($44, $46); //@line 2318 "_json.c"
        $vret11=$47; //@line 2318 "_json.c"
        var $48=$vret11; //@line 2318 "_json.c"
        var $49=($48)!=0; //@line 2318 "_json.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2318 "_json.c"
      case 11: // $bb12
        var $50=$vret11; //@line 2318 "_json.c"
        $0=$50; //@line 2318 "_json.c"
        __label__ = 28; break; //@line 2318 "_json.c"
      case 12: // $bb13
        var $51=$s; //@line 2319 "_json.c"
        var $52=$51+20; //@line 2319 "_json.c"
        var $53=HEAP[$52]; //@line 2319 "_json.c"
        var $54=($53)!=0; //@line 2319 "_json.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 2319 "_json.c"
      case 13: // $bb14
        var $55=$s; //@line 2319 "_json.c"
        var $56=$55+20; //@line 2319 "_json.c"
        var $57=HEAP[$56]; //@line 2319 "_json.c"
        var $58=$visit_addr; //@line 2319 "_json.c"
        var $59=$arg_addr; //@line 2319 "_json.c"
        var $60=FUNCTION_TABLE[$58]($57, $59); //@line 2319 "_json.c"
        $vret15=$60; //@line 2319 "_json.c"
        var $61=$vret15; //@line 2319 "_json.c"
        var $62=($61)!=0; //@line 2319 "_json.c"
        if ($62) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2319 "_json.c"
      case 14: // $bb16
        var $63=$vret15; //@line 2319 "_json.c"
        $0=$63; //@line 2319 "_json.c"
        __label__ = 28; break; //@line 2319 "_json.c"
      case 15: // $bb17
        var $64=$s; //@line 2320 "_json.c"
        var $65=$64+24; //@line 2320 "_json.c"
        var $66=HEAP[$65]; //@line 2320 "_json.c"
        var $67=($66)!=0; //@line 2320 "_json.c"
        if ($67) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 2320 "_json.c"
      case 16: // $bb18
        var $68=$s; //@line 2320 "_json.c"
        var $69=$68+24; //@line 2320 "_json.c"
        var $70=HEAP[$69]; //@line 2320 "_json.c"
        var $71=$visit_addr; //@line 2320 "_json.c"
        var $72=$arg_addr; //@line 2320 "_json.c"
        var $73=FUNCTION_TABLE[$71]($70, $72); //@line 2320 "_json.c"
        $vret19=$73; //@line 2320 "_json.c"
        var $74=$vret19; //@line 2320 "_json.c"
        var $75=($74)!=0; //@line 2320 "_json.c"
        if ($75) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2320 "_json.c"
      case 17: // $bb20
        var $76=$vret19; //@line 2320 "_json.c"
        $0=$76; //@line 2320 "_json.c"
        __label__ = 28; break; //@line 2320 "_json.c"
      case 18: // $bb21
        var $77=$s; //@line 2321 "_json.c"
        var $78=$77+28; //@line 2321 "_json.c"
        var $79=HEAP[$78]; //@line 2321 "_json.c"
        var $80=($79)!=0; //@line 2321 "_json.c"
        if ($80) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 2321 "_json.c"
      case 19: // $bb22
        var $81=$s; //@line 2321 "_json.c"
        var $82=$81+28; //@line 2321 "_json.c"
        var $83=HEAP[$82]; //@line 2321 "_json.c"
        var $84=$visit_addr; //@line 2321 "_json.c"
        var $85=$arg_addr; //@line 2321 "_json.c"
        var $86=FUNCTION_TABLE[$84]($83, $85); //@line 2321 "_json.c"
        $vret23=$86; //@line 2321 "_json.c"
        var $87=$vret23; //@line 2321 "_json.c"
        var $88=($87)!=0; //@line 2321 "_json.c"
        if ($88) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2321 "_json.c"
      case 20: // $bb24
        var $89=$vret23; //@line 2321 "_json.c"
        $0=$89; //@line 2321 "_json.c"
        __label__ = 28; break; //@line 2321 "_json.c"
      case 21: // $bb25
        var $90=$s; //@line 2322 "_json.c"
        var $91=$90+32; //@line 2322 "_json.c"
        var $92=HEAP[$91]; //@line 2322 "_json.c"
        var $93=($92)!=0; //@line 2322 "_json.c"
        if ($93) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 2322 "_json.c"
      case 22: // $bb26
        var $94=$s; //@line 2322 "_json.c"
        var $95=$94+32; //@line 2322 "_json.c"
        var $96=HEAP[$95]; //@line 2322 "_json.c"
        var $97=$visit_addr; //@line 2322 "_json.c"
        var $98=$arg_addr; //@line 2322 "_json.c"
        var $99=FUNCTION_TABLE[$97]($96, $98); //@line 2322 "_json.c"
        $vret27=$99; //@line 2322 "_json.c"
        var $100=$vret27; //@line 2322 "_json.c"
        var $101=($100)!=0; //@line 2322 "_json.c"
        if ($101) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 2322 "_json.c"
      case 23: // $bb28
        var $102=$vret27; //@line 2322 "_json.c"
        $0=$102; //@line 2322 "_json.c"
        __label__ = 28; break; //@line 2322 "_json.c"
      case 24: // $bb29
        var $103=$s; //@line 2323 "_json.c"
        var $104=$103+36; //@line 2323 "_json.c"
        var $105=HEAP[$104]; //@line 2323 "_json.c"
        var $106=($105)!=0; //@line 2323 "_json.c"
        if ($106) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 2323 "_json.c"
      case 25: // $bb30
        var $107=$s; //@line 2323 "_json.c"
        var $108=$107+36; //@line 2323 "_json.c"
        var $109=HEAP[$108]; //@line 2323 "_json.c"
        var $110=$visit_addr; //@line 2323 "_json.c"
        var $111=$arg_addr; //@line 2323 "_json.c"
        var $112=FUNCTION_TABLE[$110]($109, $111); //@line 2323 "_json.c"
        $vret31=$112; //@line 2323 "_json.c"
        var $113=$vret31; //@line 2323 "_json.c"
        var $114=($113)!=0; //@line 2323 "_json.c"
        if ($114) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2323 "_json.c"
      case 26: // $bb32
        var $115=$vret31; //@line 2323 "_json.c"
        $0=$115; //@line 2323 "_json.c"
        __label__ = 28; break; //@line 2323 "_json.c"
      case 27: // $bb33
        $0=0; //@line 2324 "_json.c"
        __label__ = 28; break; //@line 2324 "_json.c"
      case 28: // $bb34
        var $116=$0; //@line 2316 "_json.c"
        $retval=$116; //@line 2316 "_json.c"
        var $retval35=$retval; //@line 2316 "_json.c"
        ;
        return $retval35; //@line 2316 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_clear($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $s;
        var $_py_tmp;
        var $_py_tmp7;
        var $_py_tmp11;
        var $_py_tmp15;
        var $_py_tmp19;
        var $_py_tmp23;
        var $_py_tmp27;
        var $_py_tmp31;
        $self_addr=$self;
        var $1=$self_addr; //@line 2332 "_json.c"
        var $2=$1+4; //@line 2332 "_json.c"
        var $3=HEAP[$2]; //@line 2332 "_json.c"
        var $4=($3)!=(_PyEncoderType); //@line 2332 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2332 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 2332 "_json.c"
        var $6=$5+4; //@line 2332 "_json.c"
        var $7=HEAP[$6]; //@line 2332 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyEncoderType); //@line 2332 "_json.c"
        var $9=($8)==0; //@line 2332 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2332 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str47, __str29, 2332, ___PRETTY_FUNCTION___11816); //@line 2332 "_json.c"
        throw "Reached an unreachable!" //@line 2332 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 2333 "_json.c"
        var $11=$10; //@line 2333 "_json.c"
        $s=$11; //@line 2333 "_json.c"
        var $12=$s; //@line 2334 "_json.c"
        var $13=$12+8; //@line 2334 "_json.c"
        var $14=HEAP[$13]; //@line 2334 "_json.c"
        var $15=($14)!=0; //@line 2334 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2334 "_json.c"
      case 4: // $bb3
        var $16=$s; //@line 2334 "_json.c"
        var $17=$16+8; //@line 2334 "_json.c"
        var $18=HEAP[$17]; //@line 2334 "_json.c"
        $_py_tmp=$18; //@line 2334 "_json.c"
        var $19=$s; //@line 2334 "_json.c"
        var $20=$19+8; //@line 2334 "_json.c"
        HEAP[$20]=0; //@line 2334 "_json.c"
        var $21=$_py_tmp; //@line 2334 "_json.c"
        var $22=$21; //@line 2334 "_json.c"
        var $23=HEAP[$22]; //@line 2334 "_json.c"
        var $24=($23) - 1; //@line 2334 "_json.c"
        var $25=$_py_tmp; //@line 2334 "_json.c"
        var $26=$25; //@line 2334 "_json.c"
        HEAP[$26]=$24; //@line 2334 "_json.c"
        var $27=$_py_tmp; //@line 2334 "_json.c"
        var $28=$27; //@line 2334 "_json.c"
        var $29=HEAP[$28]; //@line 2334 "_json.c"
        var $30=($29)==0; //@line 2334 "_json.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2334 "_json.c"
      case 5: // $bb4
        var $31=$_py_tmp; //@line 2334 "_json.c"
        var $32=$31+4; //@line 2334 "_json.c"
        var $33=HEAP[$32]; //@line 2334 "_json.c"
        var $34=$33+24; //@line 2334 "_json.c"
        var $35=HEAP[$34]; //@line 2334 "_json.c"
        var $36=$_py_tmp; //@line 2334 "_json.c"
        FUNCTION_TABLE[$35]($36); //@line 2334 "_json.c"
        __label__ = 6; break; //@line 2334 "_json.c"
      case 6: // $bb5
        var $37=$s; //@line 2335 "_json.c"
        var $38=$37+12; //@line 2335 "_json.c"
        var $39=HEAP[$38]; //@line 2335 "_json.c"
        var $40=($39)!=0; //@line 2335 "_json.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2335 "_json.c"
      case 7: // $bb6
        var $41=$s; //@line 2335 "_json.c"
        var $42=$41+12; //@line 2335 "_json.c"
        var $43=HEAP[$42]; //@line 2335 "_json.c"
        $_py_tmp7=$43; //@line 2335 "_json.c"
        var $44=$s; //@line 2335 "_json.c"
        var $45=$44+12; //@line 2335 "_json.c"
        HEAP[$45]=0; //@line 2335 "_json.c"
        var $46=$_py_tmp7; //@line 2335 "_json.c"
        var $47=$46; //@line 2335 "_json.c"
        var $48=HEAP[$47]; //@line 2335 "_json.c"
        var $49=($48) - 1; //@line 2335 "_json.c"
        var $50=$_py_tmp7; //@line 2335 "_json.c"
        var $51=$50; //@line 2335 "_json.c"
        HEAP[$51]=$49; //@line 2335 "_json.c"
        var $52=$_py_tmp7; //@line 2335 "_json.c"
        var $53=$52; //@line 2335 "_json.c"
        var $54=HEAP[$53]; //@line 2335 "_json.c"
        var $55=($54)==0; //@line 2335 "_json.c"
        if ($55) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2335 "_json.c"
      case 8: // $bb8
        var $56=$_py_tmp7; //@line 2335 "_json.c"
        var $57=$56+4; //@line 2335 "_json.c"
        var $58=HEAP[$57]; //@line 2335 "_json.c"
        var $59=$58+24; //@line 2335 "_json.c"
        var $60=HEAP[$59]; //@line 2335 "_json.c"
        var $61=$_py_tmp7; //@line 2335 "_json.c"
        FUNCTION_TABLE[$60]($61); //@line 2335 "_json.c"
        __label__ = 9; break; //@line 2335 "_json.c"
      case 9: // $bb9
        var $62=$s; //@line 2336 "_json.c"
        var $63=$62+16; //@line 2336 "_json.c"
        var $64=HEAP[$63]; //@line 2336 "_json.c"
        var $65=($64)!=0; //@line 2336 "_json.c"
        if ($65) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 2336 "_json.c"
      case 10: // $bb10
        var $66=$s; //@line 2336 "_json.c"
        var $67=$66+16; //@line 2336 "_json.c"
        var $68=HEAP[$67]; //@line 2336 "_json.c"
        $_py_tmp11=$68; //@line 2336 "_json.c"
        var $69=$s; //@line 2336 "_json.c"
        var $70=$69+16; //@line 2336 "_json.c"
        HEAP[$70]=0; //@line 2336 "_json.c"
        var $71=$_py_tmp11; //@line 2336 "_json.c"
        var $72=$71; //@line 2336 "_json.c"
        var $73=HEAP[$72]; //@line 2336 "_json.c"
        var $74=($73) - 1; //@line 2336 "_json.c"
        var $75=$_py_tmp11; //@line 2336 "_json.c"
        var $76=$75; //@line 2336 "_json.c"
        HEAP[$76]=$74; //@line 2336 "_json.c"
        var $77=$_py_tmp11; //@line 2336 "_json.c"
        var $78=$77; //@line 2336 "_json.c"
        var $79=HEAP[$78]; //@line 2336 "_json.c"
        var $80=($79)==0; //@line 2336 "_json.c"
        if ($80) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2336 "_json.c"
      case 11: // $bb12
        var $81=$_py_tmp11; //@line 2336 "_json.c"
        var $82=$81+4; //@line 2336 "_json.c"
        var $83=HEAP[$82]; //@line 2336 "_json.c"
        var $84=$83+24; //@line 2336 "_json.c"
        var $85=HEAP[$84]; //@line 2336 "_json.c"
        var $86=$_py_tmp11; //@line 2336 "_json.c"
        FUNCTION_TABLE[$85]($86); //@line 2336 "_json.c"
        __label__ = 12; break; //@line 2336 "_json.c"
      case 12: // $bb13
        var $87=$s; //@line 2337 "_json.c"
        var $88=$87+20; //@line 2337 "_json.c"
        var $89=HEAP[$88]; //@line 2337 "_json.c"
        var $90=($89)!=0; //@line 2337 "_json.c"
        if ($90) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 2337 "_json.c"
      case 13: // $bb14
        var $91=$s; //@line 2337 "_json.c"
        var $92=$91+20; //@line 2337 "_json.c"
        var $93=HEAP[$92]; //@line 2337 "_json.c"
        $_py_tmp15=$93; //@line 2337 "_json.c"
        var $94=$s; //@line 2337 "_json.c"
        var $95=$94+20; //@line 2337 "_json.c"
        HEAP[$95]=0; //@line 2337 "_json.c"
        var $96=$_py_tmp15; //@line 2337 "_json.c"
        var $97=$96; //@line 2337 "_json.c"
        var $98=HEAP[$97]; //@line 2337 "_json.c"
        var $99=($98) - 1; //@line 2337 "_json.c"
        var $100=$_py_tmp15; //@line 2337 "_json.c"
        var $101=$100; //@line 2337 "_json.c"
        HEAP[$101]=$99; //@line 2337 "_json.c"
        var $102=$_py_tmp15; //@line 2337 "_json.c"
        var $103=$102; //@line 2337 "_json.c"
        var $104=HEAP[$103]; //@line 2337 "_json.c"
        var $105=($104)==0; //@line 2337 "_json.c"
        if ($105) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2337 "_json.c"
      case 14: // $bb16
        var $106=$_py_tmp15; //@line 2337 "_json.c"
        var $107=$106+4; //@line 2337 "_json.c"
        var $108=HEAP[$107]; //@line 2337 "_json.c"
        var $109=$108+24; //@line 2337 "_json.c"
        var $110=HEAP[$109]; //@line 2337 "_json.c"
        var $111=$_py_tmp15; //@line 2337 "_json.c"
        FUNCTION_TABLE[$110]($111); //@line 2337 "_json.c"
        __label__ = 15; break; //@line 2337 "_json.c"
      case 15: // $bb17
        var $112=$s; //@line 2338 "_json.c"
        var $113=$112+24; //@line 2338 "_json.c"
        var $114=HEAP[$113]; //@line 2338 "_json.c"
        var $115=($114)!=0; //@line 2338 "_json.c"
        if ($115) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 2338 "_json.c"
      case 16: // $bb18
        var $116=$s; //@line 2338 "_json.c"
        var $117=$116+24; //@line 2338 "_json.c"
        var $118=HEAP[$117]; //@line 2338 "_json.c"
        $_py_tmp19=$118; //@line 2338 "_json.c"
        var $119=$s; //@line 2338 "_json.c"
        var $120=$119+24; //@line 2338 "_json.c"
        HEAP[$120]=0; //@line 2338 "_json.c"
        var $121=$_py_tmp19; //@line 2338 "_json.c"
        var $122=$121; //@line 2338 "_json.c"
        var $123=HEAP[$122]; //@line 2338 "_json.c"
        var $124=($123) - 1; //@line 2338 "_json.c"
        var $125=$_py_tmp19; //@line 2338 "_json.c"
        var $126=$125; //@line 2338 "_json.c"
        HEAP[$126]=$124; //@line 2338 "_json.c"
        var $127=$_py_tmp19; //@line 2338 "_json.c"
        var $128=$127; //@line 2338 "_json.c"
        var $129=HEAP[$128]; //@line 2338 "_json.c"
        var $130=($129)==0; //@line 2338 "_json.c"
        if ($130) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2338 "_json.c"
      case 17: // $bb20
        var $131=$_py_tmp19; //@line 2338 "_json.c"
        var $132=$131+4; //@line 2338 "_json.c"
        var $133=HEAP[$132]; //@line 2338 "_json.c"
        var $134=$133+24; //@line 2338 "_json.c"
        var $135=HEAP[$134]; //@line 2338 "_json.c"
        var $136=$_py_tmp19; //@line 2338 "_json.c"
        FUNCTION_TABLE[$135]($136); //@line 2338 "_json.c"
        __label__ = 18; break; //@line 2338 "_json.c"
      case 18: // $bb21
        var $137=$s; //@line 2339 "_json.c"
        var $138=$137+28; //@line 2339 "_json.c"
        var $139=HEAP[$138]; //@line 2339 "_json.c"
        var $140=($139)!=0; //@line 2339 "_json.c"
        if ($140) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 2339 "_json.c"
      case 19: // $bb22
        var $141=$s; //@line 2339 "_json.c"
        var $142=$141+28; //@line 2339 "_json.c"
        var $143=HEAP[$142]; //@line 2339 "_json.c"
        $_py_tmp23=$143; //@line 2339 "_json.c"
        var $144=$s; //@line 2339 "_json.c"
        var $145=$144+28; //@line 2339 "_json.c"
        HEAP[$145]=0; //@line 2339 "_json.c"
        var $146=$_py_tmp23; //@line 2339 "_json.c"
        var $147=$146; //@line 2339 "_json.c"
        var $148=HEAP[$147]; //@line 2339 "_json.c"
        var $149=($148) - 1; //@line 2339 "_json.c"
        var $150=$_py_tmp23; //@line 2339 "_json.c"
        var $151=$150; //@line 2339 "_json.c"
        HEAP[$151]=$149; //@line 2339 "_json.c"
        var $152=$_py_tmp23; //@line 2339 "_json.c"
        var $153=$152; //@line 2339 "_json.c"
        var $154=HEAP[$153]; //@line 2339 "_json.c"
        var $155=($154)==0; //@line 2339 "_json.c"
        if ($155) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2339 "_json.c"
      case 20: // $bb24
        var $156=$_py_tmp23; //@line 2339 "_json.c"
        var $157=$156+4; //@line 2339 "_json.c"
        var $158=HEAP[$157]; //@line 2339 "_json.c"
        var $159=$158+24; //@line 2339 "_json.c"
        var $160=HEAP[$159]; //@line 2339 "_json.c"
        var $161=$_py_tmp23; //@line 2339 "_json.c"
        FUNCTION_TABLE[$160]($161); //@line 2339 "_json.c"
        __label__ = 21; break; //@line 2339 "_json.c"
      case 21: // $bb25
        var $162=$s; //@line 2340 "_json.c"
        var $163=$162+32; //@line 2340 "_json.c"
        var $164=HEAP[$163]; //@line 2340 "_json.c"
        var $165=($164)!=0; //@line 2340 "_json.c"
        if ($165) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 2340 "_json.c"
      case 22: // $bb26
        var $166=$s; //@line 2340 "_json.c"
        var $167=$166+32; //@line 2340 "_json.c"
        var $168=HEAP[$167]; //@line 2340 "_json.c"
        $_py_tmp27=$168; //@line 2340 "_json.c"
        var $169=$s; //@line 2340 "_json.c"
        var $170=$169+32; //@line 2340 "_json.c"
        HEAP[$170]=0; //@line 2340 "_json.c"
        var $171=$_py_tmp27; //@line 2340 "_json.c"
        var $172=$171; //@line 2340 "_json.c"
        var $173=HEAP[$172]; //@line 2340 "_json.c"
        var $174=($173) - 1; //@line 2340 "_json.c"
        var $175=$_py_tmp27; //@line 2340 "_json.c"
        var $176=$175; //@line 2340 "_json.c"
        HEAP[$176]=$174; //@line 2340 "_json.c"
        var $177=$_py_tmp27; //@line 2340 "_json.c"
        var $178=$177; //@line 2340 "_json.c"
        var $179=HEAP[$178]; //@line 2340 "_json.c"
        var $180=($179)==0; //@line 2340 "_json.c"
        if ($180) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 2340 "_json.c"
      case 23: // $bb28
        var $181=$_py_tmp27; //@line 2340 "_json.c"
        var $182=$181+4; //@line 2340 "_json.c"
        var $183=HEAP[$182]; //@line 2340 "_json.c"
        var $184=$183+24; //@line 2340 "_json.c"
        var $185=HEAP[$184]; //@line 2340 "_json.c"
        var $186=$_py_tmp27; //@line 2340 "_json.c"
        FUNCTION_TABLE[$185]($186); //@line 2340 "_json.c"
        __label__ = 24; break; //@line 2340 "_json.c"
      case 24: // $bb29
        var $187=$s; //@line 2341 "_json.c"
        var $188=$187+36; //@line 2341 "_json.c"
        var $189=HEAP[$188]; //@line 2341 "_json.c"
        var $190=($189)!=0; //@line 2341 "_json.c"
        if ($190) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 2341 "_json.c"
      case 25: // $bb30
        var $191=$s; //@line 2341 "_json.c"
        var $192=$191+36; //@line 2341 "_json.c"
        var $193=HEAP[$192]; //@line 2341 "_json.c"
        $_py_tmp31=$193; //@line 2341 "_json.c"
        var $194=$s; //@line 2341 "_json.c"
        var $195=$194+36; //@line 2341 "_json.c"
        HEAP[$195]=0; //@line 2341 "_json.c"
        var $196=$_py_tmp31; //@line 2341 "_json.c"
        var $197=$196; //@line 2341 "_json.c"
        var $198=HEAP[$197]; //@line 2341 "_json.c"
        var $199=($198) - 1; //@line 2341 "_json.c"
        var $200=$_py_tmp31; //@line 2341 "_json.c"
        var $201=$200; //@line 2341 "_json.c"
        HEAP[$201]=$199; //@line 2341 "_json.c"
        var $202=$_py_tmp31; //@line 2341 "_json.c"
        var $203=$202; //@line 2341 "_json.c"
        var $204=HEAP[$203]; //@line 2341 "_json.c"
        var $205=($204)==0; //@line 2341 "_json.c"
        if ($205) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2341 "_json.c"
      case 26: // $bb32
        var $206=$_py_tmp31; //@line 2341 "_json.c"
        var $207=$206+4; //@line 2341 "_json.c"
        var $208=HEAP[$207]; //@line 2341 "_json.c"
        var $209=$208+24; //@line 2341 "_json.c"
        var $210=HEAP[$209]; //@line 2341 "_json.c"
        var $211=$_py_tmp31; //@line 2341 "_json.c"
        FUNCTION_TABLE[$210]($211); //@line 2341 "_json.c"
        __label__ = 27; break; //@line 2341 "_json.c"
      case 27: // $bb33
        $0=0; //@line 2342 "_json.c"
        var $212=$0; //@line 2342 "_json.c"
        $retval=$212; //@line 2342 "_json.c"
        var $retval34=$retval; //@line 2342 "_json.c"
        ;
        return $retval34; //@line 2342 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_json() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        HEAP[_PyScannerType+156]=(FUNCTION_TABLE_OFFSET + 8); //@line 2410 "_json.c"
        var $0=_PyType_Ready(_PyScannerType); //@line 2411 "_json.c"
        var $1=($0) < 0; //@line 2411 "_json.c"
        if ($1) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2411 "_json.c"
      case 1: // $bb
        HEAP[_PyEncoderType+156]=(FUNCTION_TABLE_OFFSET + 8); //@line 2413 "_json.c"
        var $2=_PyType_Ready(_PyEncoderType); //@line 2414 "_json.c"
        var $3=($2) < 0; //@line 2414 "_json.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2414 "_json.c"
      case 2: // $bb1
        var $4=_Py_InitModule4(__str71, _speedups_methods, _module_doc, 0, 1013); //@line 2416 "_json.c"
        $m=$4; //@line 2416 "_json.c"
        var $5=HEAP[_PyScannerType]; //@line 2417 "_json.c"
        var $6=($5) + 1; //@line 2417 "_json.c"
        HEAP[_PyScannerType]=$6; //@line 2417 "_json.c"
        var $7=$m; //@line 2418 "_json.c"
        var $8=_PyModule_AddObject($7, __str72, _PyScannerType); //@line 2418 "_json.c"
        var $9=HEAP[_PyEncoderType]; //@line 2419 "_json.c"
        var $10=($9) + 1; //@line 2419 "_json.c"
        HEAP[_PyEncoderType]=$10; //@line 2419 "_json.c"
        var $11=$m; //@line 2420 "_json.c"
        var $12=_PyModule_AddObject($11, __str73, _PyEncoderType); //@line 2420 "_json.c"
        __label__ = 3; break; //@line 2420 "_json.c"
      case 3: // $return
        ;
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
HEAP[_scanner_members]=__str;
HEAP[_scanner_members+16]=__str;
HEAP[_scanner_members+20]=__str1;
HEAP[_scanner_members+36]=__str1;
HEAP[_scanner_members+40]=__str2;
HEAP[_scanner_members+56]=__str2;
HEAP[_scanner_members+60]=__str3;
HEAP[_scanner_members+76]=__str3;
HEAP[_scanner_members+80]=__str4;
HEAP[_scanner_members+96]=__str4;
HEAP[_scanner_members+100]=__str5;
HEAP[_scanner_members+116]=__str5;
HEAP[_scanner_members+120]=__str6;
HEAP[_scanner_members+136]=__str6;
HEAP[_encoder_members]=__str7;
HEAP[_encoder_members+16]=__str7;
HEAP[_encoder_members+20]=__str8;
HEAP[_encoder_members+36]=__str8;
HEAP[_encoder_members+40]=__str9;
HEAP[_encoder_members+56]=__str9;
HEAP[_encoder_members+60]=__str10;
HEAP[_encoder_members+76]=__str10;
HEAP[_encoder_members+80]=__str11;
HEAP[_encoder_members+96]=__str11;
HEAP[_encoder_members+100]=__str12;
HEAP[_encoder_members+116]=__str12;
HEAP[_encoder_members+120]=__str13;
HEAP[_encoder_members+136]=__str13;
HEAP[_encoder_members+140]=__str14;
HEAP[_encoder_members+156]=__str14;
HEAP[_kwlist_10701]=__str42;
HEAP[_kwlist_10701+4]=__str43;
HEAP[_kwlist_10760]=__str45;
HEAP[_PyScannerType+12]=__str46;
HEAP[_PyScannerType+24]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_PyScannerType+64]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_PyScannerType+88]=_scanner_doc;
HEAP[_PyScannerType+92]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_PyScannerType+96]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_PyScannerType+120]=_scanner_members;
HEAP[_PyScannerType+148]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_PyScannerType+156]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_kwlist_10938]=__str7;
HEAP[_kwlist_10938+4]=__str8;
HEAP[_kwlist_10938+8]=__str9;
HEAP[_kwlist_10938+12]=__str10;
HEAP[_kwlist_10938+16]=__str11;
HEAP[_kwlist_10938+20]=__str12;
HEAP[_kwlist_10938+24]=__str13;
HEAP[_kwlist_10938+28]=__str14;
HEAP[_kwlist_10938+32]=__str49;
HEAP[_kwlist_11010]=__str51;
HEAP[_kwlist_11010+4]=__str52;
HEAP[_PyEncoderType+12]=__str68;
HEAP[_PyEncoderType+24]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_PyEncoderType+64]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_PyEncoderType+88]=_encoder_doc;
HEAP[_PyEncoderType+92]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_PyEncoderType+96]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_PyEncoderType+120]=_encoder_members;
HEAP[_PyEncoderType+148]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_PyEncoderType+156]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_speedups_methods]=__str69;
HEAP[_speedups_methods+4]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_speedups_methods+12]=_pydoc_encode_basestring_ascii;
HEAP[_speedups_methods+16]=__str70;
HEAP[_speedups_methods+20]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_speedups_methods+28]=_pydoc_scanstring;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

