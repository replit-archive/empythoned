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



var $0___SIZE = 656; // %0
  
var $1___SIZE = 16; // %1
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyFloatObject___SIZE = 16; // %struct.PyFloatObject
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyLongObject___SIZE = 0; // %struct.PyLongObject
  var $struct_PyLongObject___FLATTENER = [];
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
  
var _pi;
var _sqrtpi;
var __str;
var __str1;
var ___PRETTY_FUNCTION___8323;
var __str2;
var __str3;
var _lanczos_g;
var _lanczos_g_minus_half;
var _lanczos_num_coeffs;
var _lanczos_den_coeffs;
var _gamma_integral;
var __str4;
var ___PRETTY_FUNCTION___8369;
var __str5;
var ___PRETTY_FUNCTION___8706;
var _PyExc_ValueError;
var __str6;
var _PyExc_OverflowError;
var __str7;
var _math_acos_doc;
var _math_acosh_doc;
var _math_asin_doc;
var _math_asinh_doc;
var _math_atan_doc;
var __str8;
var _math_atan2_doc;
var _math_atanh_doc;
var _math_ceil_doc;
var __str9;
var _math_copysign_doc;
var _math_cos_doc;
var _math_cosh_doc;
var _math_erf_doc;
var _math_erfc_doc;
var _math_exp_doc;
var _math_expm1_doc;
var _math_fabs_doc;
var _math_floor_doc;
var _math_gamma_doc;
var _math_lgamma_doc;
var _math_log1p_doc;
var _math_sin_doc;
var _math_sinh_doc;
var _math_sqrt_doc;
var _math_tan_doc;
var _math_tanh_doc;
var _PyExc_MemoryError;
var __str10;
var __str11;
var ___PRETTY_FUNCTION___9121;
var __str12;
var __str13;
var __str14;
var __str15;
var _math_fsum_doc;
var _PyFloat_Type;
var __str16;
var __str17;
var _math_factorial_doc;
var __str18;
var _math_trunc_doc;
var __str19;
var _math_frexp_doc;
var __str20;
var _PyExc_TypeError;
var __str21;
var _math_ldexp_doc;
var __str22;
var _math_modf_doc;
var __str23;
var _math_log_doc;
var __str24;
var _math_log10_doc;
var __str25;
var _math_fmod_doc;
var __str26;
var _math_hypot_doc;
var __str27;
var _math_pow_doc;
var _degToRad;
var _radToDeg;
var _math_degrees_doc;
var _math_radians_doc;
var _math_isnan_doc;
var _math_isinf_doc;
var __str28;
var __str29;
var __str30;
var __str31;
var __str32;
var __str33;
var __str34;
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
var _math_methods;
var _module_doc;
var __str61;
var __str62;
var __str63;
var _ln2;
var _two_pow_m28;
var _two_pow_p28;
var _zero;




































































  function _sinpi($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $y=__stackBase__+24;
        var $r=__stackBase__+32;
        var $n=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 79 "mathmodule.c"
        var $2=___finite($1); //@line 79 "mathmodule.c"
        var $3=((($2))|0)==0; //@line 79 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 79 "mathmodule.c"
      case 1: // $bb
        ___assert_fail(((__str)&4294967295), ((__str1)&4294967295), 79, ((___PRETTY_FUNCTION___8323)&4294967295)); //@line 79 "mathmodule.c"
        throw "Reached an unreachable! Original .ll line: 173"; //@line 79 "mathmodule.c"
      case 2: // $bb1
        var $4=HEAP[$x_addr]; //@line 80 "mathmodule.c"
        var $5=_fabs($4); //@line 80 "mathmodule.c"
        var $6=_fmod($5, 2); //@line 80 "mathmodule.c"
        HEAP[$y]=$6; //@line 80 "mathmodule.c"
        var $7=HEAP[$y]; //@line 81 "mathmodule.c"
        var $8=($7) * 2; //@line 81 "mathmodule.c"
        var $9=_round($8); //@line 81 "mathmodule.c"
        var $10=((($9))|0); //@line 81 "mathmodule.c"
        HEAP[$n]=$10; //@line 81 "mathmodule.c"
        var $11=HEAP[$n]; //@line 82 "mathmodule.c"
        var $12=((($11))|0) < 0; //@line 82 "mathmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 82 "mathmodule.c"
      case 3: // $bb2
        var $13=HEAP[$n]; //@line 82 "mathmodule.c"
        var $14=((($13))|0) > 4; //@line 82 "mathmodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 82 "mathmodule.c"
      case 4: // $bb3
        ___assert_fail(((__str2)&4294967295), ((__str1)&4294967295), 82, ((___PRETTY_FUNCTION___8323)&4294967295)); //@line 82 "mathmodule.c"
        throw "Reached an unreachable! Original .ll line: 196"; //@line 82 "mathmodule.c"
      case 5: // $bb4
        var $15=HEAP[$n]; //@line 83 "mathmodule.c"
        if ($15 == 0) {
          __label__ = 6; break;
        }
        else if ($15 == 1) {
          __label__ = 7; break;
        }
        else if ($15 == 2) {
          __label__ = 8; break;
        }
        else if ($15 == 3) {
          __label__ = 9; break;
        }
        else if ($15 == 4) {
          __label__ = 10; break;
        }
        else {
        __label__ = 11; break;
        }
        
      case 6: // $bb5
        var $16=HEAP[_pi]; //@line 85 "mathmodule.c"
        var $17=HEAP[$y]; //@line 85 "mathmodule.c"
        var $18=($16) * ($17); //@line 85 "mathmodule.c"
        var $19=_sin($18); //@line 85 "mathmodule.c"
        HEAP[$r]=$19; //@line 85 "mathmodule.c"
        __label__ = 12; break; //@line 85 "mathmodule.c"
      case 7: // $bb6
        var $20=HEAP[$y]; //@line 88 "mathmodule.c"
        var $21=($20) - 0.5; //@line 88 "mathmodule.c"
        var $22=HEAP[_pi]; //@line 88 "mathmodule.c"
        var $23=($21) * ($22); //@line 88 "mathmodule.c"
        var $24=_cos($23); //@line 88 "mathmodule.c"
        HEAP[$r]=$24; //@line 88 "mathmodule.c"
        __label__ = 12; break; //@line 88 "mathmodule.c"
      case 8: // $bb7
        var $25=HEAP[$y]; //@line 93 "mathmodule.c"
        var $26=1 - ($25); //@line 93 "mathmodule.c"
        var $27=HEAP[_pi]; //@line 93 "mathmodule.c"
        var $28=($26) * ($27); //@line 93 "mathmodule.c"
        var $29=_sin($28); //@line 93 "mathmodule.c"
        HEAP[$r]=$29; //@line 93 "mathmodule.c"
        __label__ = 12; break; //@line 93 "mathmodule.c"
      case 9: // $bb8
        var $30=HEAP[$y]; //@line 96 "mathmodule.c"
        var $31=($30) - 1.5; //@line 96 "mathmodule.c"
        var $32=HEAP[_pi]; //@line 96 "mathmodule.c"
        var $33=($31) * ($32); //@line 96 "mathmodule.c"
        var $34=_cos($33); //@line 96 "mathmodule.c"
        var $35=0 - ($34); //@line 96 "mathmodule.c"
        HEAP[$r]=$35; //@line 96 "mathmodule.c"
        __label__ = 12; break; //@line 96 "mathmodule.c"
      case 10: // $bb9
        var $36=HEAP[$y]; //@line 99 "mathmodule.c"
        var $37=($36) - 2; //@line 99 "mathmodule.c"
        var $38=HEAP[_pi]; //@line 99 "mathmodule.c"
        var $39=($37) * ($38); //@line 99 "mathmodule.c"
        var $40=_sin($39); //@line 99 "mathmodule.c"
        HEAP[$r]=$40; //@line 99 "mathmodule.c"
        __label__ = 12; break; //@line 99 "mathmodule.c"
      case 11: // $bb10
        ___assert_fail(((__str3)&4294967295), ((__str1)&4294967295), 102, ((___PRETTY_FUNCTION___8323)&4294967295)); //@line 102 "mathmodule.c"
        throw "Reached an unreachable! Original .ll line: 255"; //@line 102 "mathmodule.c"
      case 12: // $bb11
        var $41=HEAP[$x_addr]; //@line 105 "mathmodule.c"
        var $42=_copysign(1, $41); //@line 105 "mathmodule.c"
        var $43=HEAP[$r]; //@line 105 "mathmodule.c"
        var $44=($42) * ($43); //@line 105 "mathmodule.c"
        HEAP[$0]=$44; //@line 105 "mathmodule.c"
        var $45=HEAP[$0]; //@line 105 "mathmodule.c"
        HEAP[$retval]=$45; //@line 105 "mathmodule.c"
        __label__ = 13; break; //@line 105 "mathmodule.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 105 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 105 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _lanczos_sum($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $num=__stackBase__+24;
        var $den=__stackBase__+32;
        var $i=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        HEAP[$num]=0; //@line 204 "mathmodule.c"
        HEAP[$den]=0; //@line 204 "mathmodule.c"
        var $1=HEAP[$x_addr]; //@line 206 "mathmodule.c"
        var $2=($1) <= 0; //@line 206 "mathmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 206 "mathmodule.c"
      case 1: // $bb
        ___assert_fail(((__str4)&4294967295), ((__str1)&4294967295), 206, ((___PRETTY_FUNCTION___8369)&4294967295)); //@line 206 "mathmodule.c"
        throw "Reached an unreachable! Original .ll line: 322"; //@line 206 "mathmodule.c"
      case 2: // $bb1
        var $3=HEAP[$x_addr]; //@line 215 "mathmodule.c"
        var $4=($3) < 5; //@line 215 "mathmodule.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 215 "mathmodule.c"
      case 3: // $bb2
        HEAP[$i]=13; //@line 216 "mathmodule.c"
        __label__ = 5; break; //@line 216 "mathmodule.c"
      case 4: // $bb3
        var $5=HEAP[$num]; //@line 217 "mathmodule.c"
        var $6=HEAP[$x_addr]; //@line 217 "mathmodule.c"
        var $7=($5) * ($6); //@line 217 "mathmodule.c"
        var $8=HEAP[$i]; //@line 217 "mathmodule.c"
        var $9=((_lanczos_num_coeffs+$8*8)&4294967295); //@line 217 "mathmodule.c"
        var $10=HEAP[$9]; //@line 217 "mathmodule.c"
        var $11=($7) + ($10); //@line 217 "mathmodule.c"
        HEAP[$num]=$11; //@line 217 "mathmodule.c"
        var $12=HEAP[$den]; //@line 218 "mathmodule.c"
        var $13=HEAP[$x_addr]; //@line 218 "mathmodule.c"
        var $14=($12) * ($13); //@line 218 "mathmodule.c"
        var $15=HEAP[$i]; //@line 218 "mathmodule.c"
        var $16=((_lanczos_den_coeffs+$15*8)&4294967295); //@line 218 "mathmodule.c"
        var $17=HEAP[$16]; //@line 218 "mathmodule.c"
        var $18=($14) + ($17); //@line 218 "mathmodule.c"
        HEAP[$den]=$18; //@line 218 "mathmodule.c"
        __label__ = 5; break; //@line 218 "mathmodule.c"
      case 5: // $bb4
        var $19=HEAP[$i]; //@line 216 "mathmodule.c"
        var $20=((($19) - 1)&4294967295); //@line 216 "mathmodule.c"
        HEAP[$i]=$20; //@line 216 "mathmodule.c"
        var $21=HEAP[$i]; //@line 216 "mathmodule.c"
        var $22=((($21))|0) >= 0; //@line 216 "mathmodule.c"
        if ($22) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 216 "mathmodule.c"
      case 6: // $bb5
        __label__ = 10; break; //@line 216 "mathmodule.c"
      case 7: // $bb6
        HEAP[$i]=0; //@line 222 "mathmodule.c"
        __label__ = 9; break; //@line 222 "mathmodule.c"
      case 8: // $bb7
        var $23=HEAP[$num]; //@line 223 "mathmodule.c"
        var $24=HEAP[$x_addr]; //@line 223 "mathmodule.c"
        var $25=($23) / ($24); //@line 223 "mathmodule.c"
        var $26=HEAP[$i]; //@line 223 "mathmodule.c"
        var $27=((_lanczos_num_coeffs+$26*8)&4294967295); //@line 223 "mathmodule.c"
        var $28=HEAP[$27]; //@line 223 "mathmodule.c"
        var $29=($25) + ($28); //@line 223 "mathmodule.c"
        HEAP[$num]=$29; //@line 223 "mathmodule.c"
        var $30=HEAP[$den]; //@line 224 "mathmodule.c"
        var $31=HEAP[$x_addr]; //@line 224 "mathmodule.c"
        var $32=($30) / ($31); //@line 224 "mathmodule.c"
        var $33=HEAP[$i]; //@line 224 "mathmodule.c"
        var $34=((_lanczos_den_coeffs+$33*8)&4294967295); //@line 224 "mathmodule.c"
        var $35=HEAP[$34]; //@line 224 "mathmodule.c"
        var $36=($32) + ($35); //@line 224 "mathmodule.c"
        HEAP[$den]=$36; //@line 224 "mathmodule.c"
        var $37=HEAP[$i]; //@line 222 "mathmodule.c"
        var $38=((($37) + 1)&4294967295); //@line 222 "mathmodule.c"
        HEAP[$i]=$38; //@line 222 "mathmodule.c"
        __label__ = 9; break; //@line 222 "mathmodule.c"
      case 9: // $bb8
        var $39=HEAP[$i]; //@line 222 "mathmodule.c"
        var $40=((($39))|0) <= 12; //@line 222 "mathmodule.c"
        if ($40) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 222 "mathmodule.c"
      case 10: // $bb9
        var $41=HEAP[$num]; //@line 227 "mathmodule.c"
        var $42=HEAP[$den]; //@line 227 "mathmodule.c"
        var $43=($41) / ($42); //@line 227 "mathmodule.c"
        HEAP[$0]=$43; //@line 227 "mathmodule.c"
        var $44=HEAP[$0]; //@line 227 "mathmodule.c"
        HEAP[$retval]=$44; //@line 227 "mathmodule.c"
        __label__ = 11; break; //@line 227 "mathmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 227 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 227 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_tgamma($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 80; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $absx=__stackBase__+24;
        var $r=__stackBase__+32;
        var $y=__stackBase__+40;
        var $z=__stackBase__+48;
        var $sqrtpow=__stackBase__+56;
        var $q=__stackBase__+64;
        var $q22=__stackBase__+72;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 236 "mathmodule.c"
        var $2=___finite($1); //@line 236 "mathmodule.c"
        var $3=((($2))|0)==0; //@line 236 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 236 "mathmodule.c"
      case 1: // $bb
        var $4=HEAP[$x_addr]; //@line 237 "mathmodule.c"
        var $5=___isnan($4); //@line 237 "mathmodule.c"
        var $6=((($5))|0)!=0; //@line 237 "mathmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 237 "mathmodule.c"
      case 2: // $bb1
        var $7=HEAP[$x_addr]; //@line 237 "mathmodule.c"
        var $8=($7) > 0; //@line 237 "mathmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 237 "mathmodule.c"
      case 3: // $bb2
        var $9=HEAP[$x_addr]; //@line 238 "mathmodule.c"
        HEAP[$0]=$9; //@line 238 "mathmodule.c"
        __label__ = 34; break; //@line 238 "mathmodule.c"
      case 4: // $bb3
        var $10=___errno_location(); //@line 240 "mathmodule.c"
        HEAP[$10]=33; //@line 240 "mathmodule.c"
        HEAP[$0]=NaN; //@line 241 "mathmodule.c"
        __label__ = 34; break; //@line 241 "mathmodule.c"
      case 5: // $bb4
        var $11=HEAP[$x_addr]; //@line 244 "mathmodule.c"
        var $12=($11) == 0; //@line 244 "mathmodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 244 "mathmodule.c"
      case 6: // $bb5
        var $13=___errno_location(); //@line 245 "mathmodule.c"
        HEAP[$13]=33; //@line 245 "mathmodule.c"
        var $14=HEAP[$x_addr]; //@line 246 "mathmodule.c"
        var $15=1 / ($14); //@line 246 "mathmodule.c"
        HEAP[$0]=$15; //@line 246 "mathmodule.c"
        __label__ = 34; break; //@line 246 "mathmodule.c"
      case 7: // $bb6
        var $16=HEAP[$x_addr]; //@line 250 "mathmodule.c"
        var $17=_floor($16); //@line 250 "mathmodule.c"
        var $18=HEAP[$x_addr]; //@line 250 "mathmodule.c"
        var $19=($17) == ($18); //@line 250 "mathmodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 250 "mathmodule.c"
      case 8: // $bb7
        var $20=HEAP[$x_addr]; //@line 251 "mathmodule.c"
        var $21=($20) < 0; //@line 251 "mathmodule.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 251 "mathmodule.c"
      case 9: // $bb8
        var $22=___errno_location(); //@line 252 "mathmodule.c"
        HEAP[$22]=33; //@line 252 "mathmodule.c"
        HEAP[$0]=NaN; //@line 253 "mathmodule.c"
        __label__ = 34; break; //@line 253 "mathmodule.c"
      case 10: // $bb9
        var $23=HEAP[$x_addr]; //@line 255 "mathmodule.c"
        var $24=($23) <= 23; //@line 255 "mathmodule.c"
        if ($24) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 255 "mathmodule.c"
      case 11: // $bb10
        var $25=HEAP[$x_addr]; //@line 256 "mathmodule.c"
        var $26=((($25))|0); //@line 256 "mathmodule.c"
        var $27=((($26) - 1)&4294967295); //@line 256 "mathmodule.c"
        var $28=((_gamma_integral+$27*8)&4294967295); //@line 256 "mathmodule.c"
        var $29=HEAP[$28]; //@line 256 "mathmodule.c"
        HEAP[$0]=$29; //@line 256 "mathmodule.c"
        __label__ = 34; break; //@line 256 "mathmodule.c"
      case 12: // $bb11
        var $30=HEAP[$x_addr]; //@line 258 "mathmodule.c"
        var $31=_fabs($30); //@line 258 "mathmodule.c"
        HEAP[$absx]=$31; //@line 258 "mathmodule.c"
        var $32=HEAP[$absx]; //@line 261 "mathmodule.c"
        var $33=($32) < 1e-20; //@line 261 "mathmodule.c"
        if ($33) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 261 "mathmodule.c"
      case 13: // $bb12
        var $34=HEAP[$x_addr]; //@line 262 "mathmodule.c"
        var $35=1 / ($34); //@line 262 "mathmodule.c"
        HEAP[$r]=$35; //@line 262 "mathmodule.c"
        var $36=HEAP[$r]; //@line 263 "mathmodule.c"
        var $37=___isinf($36); //@line 263 "mathmodule.c"
        var $38=((($37))|0)!=0; //@line 263 "mathmodule.c"
        if ($38) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 263 "mathmodule.c"
      case 14: // $bb13
        var $39=___errno_location(); //@line 264 "mathmodule.c"
        HEAP[$39]=34; //@line 264 "mathmodule.c"
        __label__ = 15; break; //@line 264 "mathmodule.c"
      case 15: // $bb14
        var $40=HEAP[$r]; //@line 265 "mathmodule.c"
        HEAP[$0]=$40; //@line 265 "mathmodule.c"
        __label__ = 34; break; //@line 265 "mathmodule.c"
      case 16: // $bb15
        var $41=HEAP[$absx]; //@line 271 "mathmodule.c"
        var $42=($41) > 200; //@line 271 "mathmodule.c"
        if ($42) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 271 "mathmodule.c"
      case 17: // $bb16
        var $43=HEAP[$x_addr]; //@line 272 "mathmodule.c"
        var $44=($43) < 0; //@line 272 "mathmodule.c"
        if ($44) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 272 "mathmodule.c"
      case 18: // $bb17
        var $45=HEAP[$x_addr]; //@line 273 "mathmodule.c"
        var $46=_sinpi($45); //@line 273 "mathmodule.c"
        var $47=0 / ($46); //@line 273 "mathmodule.c"
        HEAP[$0]=$47; //@line 273 "mathmodule.c"
        __label__ = 34; break; //@line 273 "mathmodule.c"
      case 19: // $bb18
        var $48=___errno_location(); //@line 276 "mathmodule.c"
        HEAP[$48]=34; //@line 276 "mathmodule.c"
        HEAP[$0]=Infinity; //@line 277 "mathmodule.c"
        __label__ = 34; break; //@line 277 "mathmodule.c"
      case 20: // $bb19
        var $49=HEAP[_lanczos_g_minus_half]; //@line 281 "mathmodule.c"
        var $50=HEAP[$absx]; //@line 281 "mathmodule.c"
        var $51=($50) + ($49); //@line 281 "mathmodule.c"
        HEAP[$y]=$51; //@line 281 "mathmodule.c"
        var $52=HEAP[_lanczos_g_minus_half]; //@line 283 "mathmodule.c"
        var $53=HEAP[$absx]; //@line 283 "mathmodule.c"
        var $54=($53) > ($52); //@line 283 "mathmodule.c"
        if ($54) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 283 "mathmodule.c"
      case 21: // $bb20
        var $55=HEAP[$y]; //@line 288 "mathmodule.c"
        var $56=HEAP[$absx]; //@line 288 "mathmodule.c"
        var $57=($55) - ($56); //@line 288 "mathmodule.c"
        HEAP[$q]=$57; //@line 288 "mathmodule.c"
        var $58=HEAP[_lanczos_g_minus_half]; //@line 289 "mathmodule.c"
        var $59=HEAP[$q]; //@line 289 "mathmodule.c"
        var $60=($59) - ($58); //@line 289 "mathmodule.c"
        HEAP[$z]=$60; //@line 289 "mathmodule.c"
        __label__ = 23; break; //@line 289 "mathmodule.c"
      case 22: // $bb21
        var $61=HEAP[_lanczos_g_minus_half]; //@line 292 "mathmodule.c"
        var $62=HEAP[$y]; //@line 292 "mathmodule.c"
        var $63=($62) - ($61); //@line 292 "mathmodule.c"
        HEAP[$q22]=$63; //@line 292 "mathmodule.c"
        var $64=HEAP[$q22]; //@line 293 "mathmodule.c"
        var $65=HEAP[$absx]; //@line 293 "mathmodule.c"
        var $66=($64) - ($65); //@line 293 "mathmodule.c"
        HEAP[$z]=$66; //@line 293 "mathmodule.c"
        __label__ = 23; break; //@line 293 "mathmodule.c"
      case 23: // $bb23
        var $67=HEAP[_lanczos_g]; //@line 295 "mathmodule.c"
        var $68=HEAP[$z]; //@line 295 "mathmodule.c"
        var $69=($68) * ($67); //@line 295 "mathmodule.c"
        var $70=HEAP[$y]; //@line 295 "mathmodule.c"
        var $71=($69) / ($70); //@line 295 "mathmodule.c"
        HEAP[$z]=$71; //@line 295 "mathmodule.c"
        var $72=HEAP[$x_addr]; //@line 296 "mathmodule.c"
        var $73=($72) < 0; //@line 296 "mathmodule.c"
        if ($73) { __label__ = 24; break; } else { __label__ = 28; break; } //@line 296 "mathmodule.c"
      case 24: // $bb24
        var $74=HEAP[_pi]; //@line 297 "mathmodule.c"
        var $75=0 - ($74); //@line 297 "mathmodule.c"
        var $76=HEAP[$absx]; //@line 297 "mathmodule.c"
        var $77=_sinpi($76); //@line 297 "mathmodule.c"
        var $78=($75) / ($77); //@line 297 "mathmodule.c"
        var $79=HEAP[$absx]; //@line 297 "mathmodule.c"
        var $80=($78) / ($79); //@line 297 "mathmodule.c"
        var $81=HEAP[$y]; //@line 297 "mathmodule.c"
        var $82=_llvm_exp_f64($81); //@line 297 "mathmodule.c"
        var $83=($80) * ($82); //@line 297 "mathmodule.c"
        var $84=HEAP[$absx]; //@line 297 "mathmodule.c"
        var $85=_lanczos_sum($84); //@line 297 "mathmodule.c"
        var $86=($83) / ($85); //@line 297 "mathmodule.c"
        HEAP[$r]=$86; //@line 297 "mathmodule.c"
        var $87=HEAP[$z]; //@line 298 "mathmodule.c"
        var $88=HEAP[$r]; //@line 298 "mathmodule.c"
        var $89=($87) * ($88); //@line 298 "mathmodule.c"
        var $90=HEAP[$r]; //@line 298 "mathmodule.c"
        var $91=($90) - ($89); //@line 298 "mathmodule.c"
        HEAP[$r]=$91; //@line 298 "mathmodule.c"
        var $92=HEAP[$absx]; //@line 299 "mathmodule.c"
        var $93=($92) < 140; //@line 299 "mathmodule.c"
        if ($93) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 299 "mathmodule.c"
      case 25: // $bb25
        var $94=HEAP[$absx]; //@line 300 "mathmodule.c"
        var $95=($94) - 0.5; //@line 300 "mathmodule.c"
        var $96=HEAP[$y]; //@line 300 "mathmodule.c"
        var $97=_llvm_pow_f64($96, $95); //@line 300 "mathmodule.c"
        var $98=HEAP[$r]; //@line 300 "mathmodule.c"
        var $99=($98) / ($97); //@line 300 "mathmodule.c"
        HEAP[$r]=$99; //@line 300 "mathmodule.c"
        __label__ = 27; break; //@line 300 "mathmodule.c"
      case 26: // $bb26
        var $100=HEAP[$absx]; //@line 303 "mathmodule.c"
        var $101=($100) / 2; //@line 303 "mathmodule.c"
        var $102=($101) - 0.25; //@line 303 "mathmodule.c"
        var $103=HEAP[$y]; //@line 303 "mathmodule.c"
        var $104=_llvm_pow_f64($103, $102); //@line 303 "mathmodule.c"
        HEAP[$sqrtpow]=$104; //@line 303 "mathmodule.c"
        var $105=HEAP[$r]; //@line 304 "mathmodule.c"
        var $106=HEAP[$sqrtpow]; //@line 304 "mathmodule.c"
        var $107=($105) / ($106); //@line 304 "mathmodule.c"
        HEAP[$r]=$107; //@line 304 "mathmodule.c"
        var $108=HEAP[$r]; //@line 305 "mathmodule.c"
        var $109=HEAP[$sqrtpow]; //@line 305 "mathmodule.c"
        var $110=($108) / ($109); //@line 305 "mathmodule.c"
        HEAP[$r]=$110; //@line 305 "mathmodule.c"
        __label__ = 27; break; //@line 305 "mathmodule.c"
      case 27: // $bb27
        __label__ = 31; break; //@line 305 "mathmodule.c"
      case 28: // $bb28
        var $111=HEAP[$absx]; //@line 309 "mathmodule.c"
        var $112=_lanczos_sum($111); //@line 309 "mathmodule.c"
        var $113=HEAP[$y]; //@line 309 "mathmodule.c"
        var $114=_llvm_exp_f64($113); //@line 309 "mathmodule.c"
        var $115=($112) / ($114); //@line 309 "mathmodule.c"
        HEAP[$r]=$115; //@line 309 "mathmodule.c"
        var $116=HEAP[$z]; //@line 310 "mathmodule.c"
        var $117=HEAP[$r]; //@line 310 "mathmodule.c"
        var $118=($116) * ($117); //@line 310 "mathmodule.c"
        var $119=HEAP[$r]; //@line 310 "mathmodule.c"
        var $120=($118) + ($119); //@line 310 "mathmodule.c"
        HEAP[$r]=$120; //@line 310 "mathmodule.c"
        var $121=HEAP[$absx]; //@line 311 "mathmodule.c"
        var $122=($121) < 140; //@line 311 "mathmodule.c"
        if ($122) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 311 "mathmodule.c"
      case 29: // $bb29
        var $123=HEAP[$absx]; //@line 312 "mathmodule.c"
        var $124=($123) - 0.5; //@line 312 "mathmodule.c"
        var $125=HEAP[$y]; //@line 312 "mathmodule.c"
        var $126=_llvm_pow_f64($125, $124); //@line 312 "mathmodule.c"
        var $127=HEAP[$r]; //@line 312 "mathmodule.c"
        var $128=($126) * ($127); //@line 312 "mathmodule.c"
        HEAP[$r]=$128; //@line 312 "mathmodule.c"
        __label__ = 31; break; //@line 312 "mathmodule.c"
      case 30: // $bb30
        var $129=HEAP[$absx]; //@line 315 "mathmodule.c"
        var $130=($129) / 2; //@line 315 "mathmodule.c"
        var $131=($130) - 0.25; //@line 315 "mathmodule.c"
        var $132=HEAP[$y]; //@line 315 "mathmodule.c"
        var $133=_llvm_pow_f64($132, $131); //@line 315 "mathmodule.c"
        HEAP[$sqrtpow]=$133; //@line 315 "mathmodule.c"
        var $134=HEAP[$r]; //@line 316 "mathmodule.c"
        var $135=HEAP[$sqrtpow]; //@line 316 "mathmodule.c"
        var $136=($134) * ($135); //@line 316 "mathmodule.c"
        HEAP[$r]=$136; //@line 316 "mathmodule.c"
        var $137=HEAP[$r]; //@line 317 "mathmodule.c"
        var $138=HEAP[$sqrtpow]; //@line 317 "mathmodule.c"
        var $139=($137) * ($138); //@line 317 "mathmodule.c"
        HEAP[$r]=$139; //@line 317 "mathmodule.c"
        __label__ = 31; break; //@line 317 "mathmodule.c"
      case 31: // $bb31
        var $140=HEAP[$r]; //@line 320 "mathmodule.c"
        var $141=___isinf($140); //@line 320 "mathmodule.c"
        var $142=((($141))|0)!=0; //@line 320 "mathmodule.c"
        if ($142) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 320 "mathmodule.c"
      case 32: // $bb32
        var $143=___errno_location(); //@line 321 "mathmodule.c"
        HEAP[$143]=34; //@line 321 "mathmodule.c"
        __label__ = 33; break; //@line 321 "mathmodule.c"
      case 33: // $bb33
        var $144=HEAP[$r]; //@line 322 "mathmodule.c"
        HEAP[$0]=$144; //@line 322 "mathmodule.c"
        __label__ = 34; break; //@line 322 "mathmodule.c"
      case 34: // $bb34
        var $145=HEAP[$0]; //@line 238 "mathmodule.c"
        HEAP[$retval]=$145; //@line 238 "mathmodule.c"
        __label__ = 35; break; //@line 238 "mathmodule.c"
      case 35: // $return
        var $retval35=HEAP[$retval]; //@line 238 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval35; //@line 238 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_lgamma($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $r=__stackBase__+24;
        var $absx=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 336 "mathmodule.c"
        var $2=___finite($1); //@line 336 "mathmodule.c"
        var $3=((($2))|0)==0; //@line 336 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 336 "mathmodule.c"
      case 1: // $bb
        var $4=HEAP[$x_addr]; //@line 337 "mathmodule.c"
        var $5=___isnan($4); //@line 337 "mathmodule.c"
        var $6=((($5))|0)!=0; //@line 337 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 337 "mathmodule.c"
      case 2: // $bb1
        var $7=HEAP[$x_addr]; //@line 338 "mathmodule.c"
        HEAP[$0]=$7; //@line 338 "mathmodule.c"
        __label__ = 17; break; //@line 338 "mathmodule.c"
      case 3: // $bb2
        HEAP[$0]=Infinity; //@line 340 "mathmodule.c"
        __label__ = 17; break; //@line 340 "mathmodule.c"
      case 4: // $bb3
        var $8=HEAP[$x_addr]; //@line 344 "mathmodule.c"
        var $9=_floor($8); //@line 344 "mathmodule.c"
        var $10=HEAP[$x_addr]; //@line 344 "mathmodule.c"
        var $11=($9) == ($10); //@line 344 "mathmodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 344 "mathmodule.c"
      case 5: // $bb4
        var $12=HEAP[$x_addr]; //@line 344 "mathmodule.c"
        var $13=($12) <= 2; //@line 344 "mathmodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 344 "mathmodule.c"
      case 6: // $bb5
        var $14=HEAP[$x_addr]; //@line 345 "mathmodule.c"
        var $15=($14) <= 0; //@line 345 "mathmodule.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 345 "mathmodule.c"
      case 7: // $bb6
        var $16=___errno_location(); //@line 346 "mathmodule.c"
        HEAP[$16]=33; //@line 346 "mathmodule.c"
        HEAP[$0]=Infinity; //@line 347 "mathmodule.c"
        __label__ = 17; break; //@line 347 "mathmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 350 "mathmodule.c"
        __label__ = 17; break; //@line 350 "mathmodule.c"
      case 9: // $bb8
        var $17=HEAP[$x_addr]; //@line 354 "mathmodule.c"
        var $18=_fabs($17); //@line 354 "mathmodule.c"
        HEAP[$absx]=$18; //@line 354 "mathmodule.c"
        var $19=HEAP[$absx]; //@line 356 "mathmodule.c"
        var $20=($19) < 1e-20; //@line 356 "mathmodule.c"
        if ($20) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 356 "mathmodule.c"
      case 10: // $bb9
        var $21=HEAP[$absx]; //@line 357 "mathmodule.c"
        var $22=_llvm_log_f64($21); //@line 357 "mathmodule.c"
        var $23=0 - ($22); //@line 357 "mathmodule.c"
        HEAP[$0]=$23; //@line 357 "mathmodule.c"
        __label__ = 17; break; //@line 357 "mathmodule.c"
      case 11: // $bb10
        var $24=HEAP[$x_addr]; //@line 360 "mathmodule.c"
        var $25=($24) > 0; //@line 360 "mathmodule.c"
        if ($25) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 360 "mathmodule.c"
      case 12: // $bb11
        var $26=HEAP[$x_addr]; //@line 365 "mathmodule.c"
        var $27=_lanczos_sum($26); //@line 365 "mathmodule.c"
        var $28=_llvm_log_f64($27); //@line 365 "mathmodule.c"
        var $29=HEAP[_lanczos_g]; //@line 365 "mathmodule.c"
        var $30=($28) - ($29); //@line 365 "mathmodule.c"
        var $31=HEAP[$x_addr]; //@line 365 "mathmodule.c"
        var $32=($31) - 0.5; //@line 365 "mathmodule.c"
        var $33=HEAP[_lanczos_g]; //@line 365 "mathmodule.c"
        var $34=HEAP[$x_addr]; //@line 365 "mathmodule.c"
        var $35=($34) + ($33); //@line 365 "mathmodule.c"
        var $36=($35) - 0.5; //@line 365 "mathmodule.c"
        var $37=_llvm_log_f64($36); //@line 365 "mathmodule.c"
        var $38=($37) - 1; //@line 365 "mathmodule.c"
        var $39=($32) * ($38); //@line 365 "mathmodule.c"
        var $40=($30) + ($39); //@line 365 "mathmodule.c"
        HEAP[$r]=$40; //@line 365 "mathmodule.c"
        __label__ = 14; break; //@line 365 "mathmodule.c"
      case 13: // $bb12
        var $41=HEAP[_pi]; //@line 369 "mathmodule.c"
        var $42=_llvm_log_f64($41); //@line 369 "mathmodule.c"
        var $43=HEAP[$absx]; //@line 369 "mathmodule.c"
        var $44=_sinpi($43); //@line 369 "mathmodule.c"
        var $45=_fabs($44); //@line 369 "mathmodule.c"
        var $46=_llvm_log_f64($45); //@line 369 "mathmodule.c"
        var $47=($42) - ($46); //@line 369 "mathmodule.c"
        var $48=HEAP[$absx]; //@line 369 "mathmodule.c"
        var $49=_llvm_log_f64($48); //@line 369 "mathmodule.c"
        var $50=($47) - ($49); //@line 369 "mathmodule.c"
        var $51=HEAP[$absx]; //@line 369 "mathmodule.c"
        var $52=_lanczos_sum($51); //@line 369 "mathmodule.c"
        var $53=_llvm_log_f64($52); //@line 369 "mathmodule.c"
        var $54=HEAP[_lanczos_g]; //@line 369 "mathmodule.c"
        var $55=($53) - ($54); //@line 369 "mathmodule.c"
        var $56=HEAP[$absx]; //@line 369 "mathmodule.c"
        var $57=($56) - 0.5; //@line 369 "mathmodule.c"
        var $58=HEAP[_lanczos_g]; //@line 369 "mathmodule.c"
        var $59=HEAP[$absx]; //@line 369 "mathmodule.c"
        var $60=($59) + ($58); //@line 369 "mathmodule.c"
        var $61=($60) - 0.5; //@line 369 "mathmodule.c"
        var $62=_llvm_log_f64($61); //@line 369 "mathmodule.c"
        var $63=($62) - 1; //@line 369 "mathmodule.c"
        var $64=($57) * ($63); //@line 369 "mathmodule.c"
        var $65=($55) + ($64); //@line 369 "mathmodule.c"
        var $66=($50) - ($65); //@line 369 "mathmodule.c"
        HEAP[$r]=$66; //@line 369 "mathmodule.c"
        __label__ = 14; break; //@line 369 "mathmodule.c"
      case 14: // $bb13
        var $67=HEAP[$r]; //@line 373 "mathmodule.c"
        var $68=___isinf($67); //@line 373 "mathmodule.c"
        var $69=((($68))|0)!=0; //@line 373 "mathmodule.c"
        if ($69) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 373 "mathmodule.c"
      case 15: // $bb14
        var $70=___errno_location(); //@line 374 "mathmodule.c"
        HEAP[$70]=34; //@line 374 "mathmodule.c"
        __label__ = 16; break; //@line 374 "mathmodule.c"
      case 16: // $bb15
        var $71=HEAP[$r]; //@line 375 "mathmodule.c"
        HEAP[$0]=$71; //@line 375 "mathmodule.c"
        __label__ = 17; break; //@line 375 "mathmodule.c"
      case 17: // $bb16
        var $72=HEAP[$0]; //@line 338 "mathmodule.c"
        HEAP[$retval]=$72; //@line 338 "mathmodule.c"
        __label__ = 18; break; //@line 338 "mathmodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 338 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 338 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_erf_series($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 64; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $x2=__stackBase__+24;
        var $acc=__stackBase__+32;
        var $fk=__stackBase__+40;
        var $result=__stackBase__+48;
        var $i=__stackBase__+56;
        var $saved_errno=__stackBase__+60;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 434 "mathmodule.c"
        var $2=HEAP[$x_addr]; //@line 434 "mathmodule.c"
        var $3=($1) * ($2); //@line 434 "mathmodule.c"
        HEAP[$x2]=$3; //@line 434 "mathmodule.c"
        HEAP[$acc]=0; //@line 435 "mathmodule.c"
        HEAP[$fk]=25.5; //@line 436 "mathmodule.c"
        HEAP[$i]=0; //@line 437 "mathmodule.c"
        __label__ = 2; break; //@line 437 "mathmodule.c"
      case 1: // $bb
        var $4=HEAP[$x2]; //@line 438 "mathmodule.c"
        var $5=HEAP[$acc]; //@line 438 "mathmodule.c"
        var $6=($4) * ($5); //@line 438 "mathmodule.c"
        var $7=HEAP[$fk]; //@line 438 "mathmodule.c"
        var $8=($6) / ($7); //@line 438 "mathmodule.c"
        var $9=($8) + 2; //@line 438 "mathmodule.c"
        HEAP[$acc]=$9; //@line 438 "mathmodule.c"
        var $10=HEAP[$fk]; //@line 439 "mathmodule.c"
        var $11=($10) - 1; //@line 439 "mathmodule.c"
        HEAP[$fk]=$11; //@line 439 "mathmodule.c"
        var $12=HEAP[$i]; //@line 437 "mathmodule.c"
        var $13=((($12) + 1)&4294967295); //@line 437 "mathmodule.c"
        HEAP[$i]=$13; //@line 437 "mathmodule.c"
        __label__ = 2; break; //@line 437 "mathmodule.c"
      case 2: // $bb1
        var $14=HEAP[$i]; //@line 437 "mathmodule.c"
        var $15=((($14))|0) <= 24; //@line 437 "mathmodule.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 437 "mathmodule.c"
      case 3: // $bb2
        var $16=___errno_location(); //@line 443 "mathmodule.c"
        var $17=HEAP[$16]; //@line 443 "mathmodule.c"
        HEAP[$saved_errno]=$17; //@line 443 "mathmodule.c"
        var $18=HEAP[$acc]; //@line 444 "mathmodule.c"
        var $19=HEAP[$x_addr]; //@line 444 "mathmodule.c"
        var $20=($18) * ($19); //@line 444 "mathmodule.c"
        var $21=HEAP[$x2]; //@line 444 "mathmodule.c"
        var $22=0 - ($21); //@line 444 "mathmodule.c"
        var $23=_llvm_exp_f64($22); //@line 444 "mathmodule.c"
        var $24=($20) * ($23); //@line 444 "mathmodule.c"
        var $25=HEAP[_sqrtpi]; //@line 444 "mathmodule.c"
        var $26=($24) / ($25); //@line 444 "mathmodule.c"
        HEAP[$result]=$26; //@line 444 "mathmodule.c"
        var $27=___errno_location(); //@line 445 "mathmodule.c"
        var $28=HEAP[$saved_errno]; //@line 445 "mathmodule.c"
        HEAP[$27]=$28; //@line 445 "mathmodule.c"
        var $29=HEAP[$result]; //@line 446 "mathmodule.c"
        HEAP[$0]=$29; //@line 446 "mathmodule.c"
        var $30=HEAP[$0]; //@line 446 "mathmodule.c"
        HEAP[$retval]=$30; //@line 446 "mathmodule.c"
        __label__ = 4; break; //@line 446 "mathmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 446 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 446 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_erfc_contfrac($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 112; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 112);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $x2=__stackBase__+24;
        var $a=__stackBase__+32;
        var $da=__stackBase__+40;
        var $p=__stackBase__+48;
        var $p_last=__stackBase__+56;
        var $q=__stackBase__+64;
        var $q_last=__stackBase__+72;
        var $b=__stackBase__+80;
        var $result=__stackBase__+88;
        var $i=__stackBase__+96;
        var $saved_errno=__stackBase__+100;
        var $temp=__stackBase__+104;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 464 "mathmodule.c"
        var $2=($1) >= 30; //@line 464 "mathmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 464 "mathmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 465 "mathmodule.c"
        __label__ = 6; break; //@line 465 "mathmodule.c"
      case 2: // $bb1
        var $3=HEAP[$x_addr]; //@line 467 "mathmodule.c"
        var $4=HEAP[$x_addr]; //@line 467 "mathmodule.c"
        var $5=($3) * ($4); //@line 467 "mathmodule.c"
        HEAP[$x2]=$5; //@line 467 "mathmodule.c"
        HEAP[$a]=0; //@line 468 "mathmodule.c"
        HEAP[$da]=0.5; //@line 469 "mathmodule.c"
        HEAP[$p]=1; //@line 470 "mathmodule.c"
        HEAP[$p_last]=0; //@line 470 "mathmodule.c"
        var $6=HEAP[$da]; //@line 471 "mathmodule.c"
        var $7=HEAP[$x2]; //@line 471 "mathmodule.c"
        var $8=($6) + ($7); //@line 471 "mathmodule.c"
        HEAP[$q]=$8; //@line 471 "mathmodule.c"
        HEAP[$q_last]=1; //@line 471 "mathmodule.c"
        HEAP[$i]=0; //@line 472 "mathmodule.c"
        __label__ = 4; break; //@line 472 "mathmodule.c"
      case 3: // $bb2
        var $9=HEAP[$a]; //@line 474 "mathmodule.c"
        var $10=HEAP[$da]; //@line 474 "mathmodule.c"
        var $11=($9) + ($10); //@line 474 "mathmodule.c"
        HEAP[$a]=$11; //@line 474 "mathmodule.c"
        var $12=HEAP[$da]; //@line 475 "mathmodule.c"
        var $13=($12) + 2; //@line 475 "mathmodule.c"
        HEAP[$da]=$13; //@line 475 "mathmodule.c"
        var $14=HEAP[$da]; //@line 476 "mathmodule.c"
        var $15=HEAP[$x2]; //@line 476 "mathmodule.c"
        var $16=($14) + ($15); //@line 476 "mathmodule.c"
        HEAP[$b]=$16; //@line 476 "mathmodule.c"
        var $17=HEAP[$p]; //@line 477 "mathmodule.c"
        HEAP[$temp]=$17; //@line 477 "mathmodule.c"
        var $18=HEAP[$b]; //@line 477 "mathmodule.c"
        var $19=HEAP[$p]; //@line 477 "mathmodule.c"
        var $20=($18) * ($19); //@line 477 "mathmodule.c"
        var $21=HEAP[$a]; //@line 477 "mathmodule.c"
        var $22=HEAP[$p_last]; //@line 477 "mathmodule.c"
        var $23=($21) * ($22); //@line 477 "mathmodule.c"
        var $24=($20) - ($23); //@line 477 "mathmodule.c"
        HEAP[$p]=$24; //@line 477 "mathmodule.c"
        var $25=HEAP[$temp]; //@line 477 "mathmodule.c"
        HEAP[$p_last]=$25; //@line 477 "mathmodule.c"
        var $26=HEAP[$q]; //@line 478 "mathmodule.c"
        HEAP[$temp]=$26; //@line 478 "mathmodule.c"
        var $27=HEAP[$b]; //@line 478 "mathmodule.c"
        var $28=HEAP[$q]; //@line 478 "mathmodule.c"
        var $29=($27) * ($28); //@line 478 "mathmodule.c"
        var $30=HEAP[$a]; //@line 478 "mathmodule.c"
        var $31=HEAP[$q_last]; //@line 478 "mathmodule.c"
        var $32=($30) * ($31); //@line 478 "mathmodule.c"
        var $33=($29) - ($32); //@line 478 "mathmodule.c"
        HEAP[$q]=$33; //@line 478 "mathmodule.c"
        var $34=HEAP[$temp]; //@line 478 "mathmodule.c"
        HEAP[$q_last]=$34; //@line 478 "mathmodule.c"
        var $35=HEAP[$i]; //@line 472 "mathmodule.c"
        var $36=((($35) + 1)&4294967295); //@line 472 "mathmodule.c"
        HEAP[$i]=$36; //@line 472 "mathmodule.c"
        __label__ = 4; break; //@line 472 "mathmodule.c"
      case 4: // $bb3
        var $37=HEAP[$i]; //@line 472 "mathmodule.c"
        var $38=((($37))|0) <= 49; //@line 472 "mathmodule.c"
        if ($38) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 472 "mathmodule.c"
      case 5: // $bb4
        var $39=___errno_location(); //@line 482 "mathmodule.c"
        var $40=HEAP[$39]; //@line 482 "mathmodule.c"
        HEAP[$saved_errno]=$40; //@line 482 "mathmodule.c"
        var $41=HEAP[$p]; //@line 483 "mathmodule.c"
        var $42=HEAP[$q]; //@line 483 "mathmodule.c"
        var $43=($41) / ($42); //@line 483 "mathmodule.c"
        var $44=HEAP[$x_addr]; //@line 483 "mathmodule.c"
        var $45=($43) * ($44); //@line 483 "mathmodule.c"
        var $46=HEAP[$x2]; //@line 483 "mathmodule.c"
        var $47=0 - ($46); //@line 483 "mathmodule.c"
        var $48=_llvm_exp_f64($47); //@line 483 "mathmodule.c"
        var $49=($45) * ($48); //@line 483 "mathmodule.c"
        var $50=HEAP[_sqrtpi]; //@line 483 "mathmodule.c"
        var $51=($49) / ($50); //@line 483 "mathmodule.c"
        HEAP[$result]=$51; //@line 483 "mathmodule.c"
        var $52=___errno_location(); //@line 484 "mathmodule.c"
        var $53=HEAP[$saved_errno]; //@line 484 "mathmodule.c"
        HEAP[$52]=$53; //@line 484 "mathmodule.c"
        var $54=HEAP[$result]; //@line 485 "mathmodule.c"
        HEAP[$0]=$54; //@line 485 "mathmodule.c"
        __label__ = 6; break; //@line 485 "mathmodule.c"
      case 6: // $bb5
        var $55=HEAP[$0]; //@line 465 "mathmodule.c"
        HEAP[$retval]=$55; //@line 465 "mathmodule.c"
        __label__ = 7; break; //@line 465 "mathmodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 465 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 465 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_erf($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $iftmp_22=__stackBase__+16;
        var $0=__stackBase__+24;
        var $absx=__stackBase__+32;
        var $cf=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 495 "mathmodule.c"
        var $2=___isnan($1); //@line 495 "mathmodule.c"
        var $3=((($2))|0)!=0; //@line 495 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 495 "mathmodule.c"
      case 1: // $bb
        var $4=HEAP[$x_addr]; //@line 496 "mathmodule.c"
        HEAP[$0]=$4; //@line 496 "mathmodule.c"
        __label__ = 8; break; //@line 496 "mathmodule.c"
      case 2: // $bb1
        var $5=HEAP[$x_addr]; //@line 497 "mathmodule.c"
        var $6=_fabs($5); //@line 497 "mathmodule.c"
        HEAP[$absx]=$6; //@line 497 "mathmodule.c"
        var $7=HEAP[$absx]; //@line 498 "mathmodule.c"
        var $8=($7) < 1.5; //@line 498 "mathmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 498 "mathmodule.c"
      case 3: // $bb2
        var $9=HEAP[$x_addr]; //@line 499 "mathmodule.c"
        var $10=_m_erf_series($9); //@line 499 "mathmodule.c"
        HEAP[$0]=$10; //@line 499 "mathmodule.c"
        __label__ = 8; break; //@line 499 "mathmodule.c"
      case 4: // $bb3
        var $11=HEAP[$absx]; //@line 501 "mathmodule.c"
        var $12=_m_erfc_contfrac($11); //@line 501 "mathmodule.c"
        HEAP[$cf]=$12; //@line 501 "mathmodule.c"
        var $13=HEAP[$x_addr]; //@line 502 "mathmodule.c"
        var $14=($13) > 0; //@line 502 "mathmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 502 "mathmodule.c"
      case 5: // $bb4
        var $15=HEAP[$cf]; //@line 502 "mathmodule.c"
        var $16=1 - ($15); //@line 502 "mathmodule.c"
        HEAP[$iftmp_22]=$16; //@line 502 "mathmodule.c"
        __label__ = 7; break; //@line 502 "mathmodule.c"
      case 6: // $bb5
        var $17=HEAP[$cf]; //@line 502 "mathmodule.c"
        var $18=($17) - 1; //@line 502 "mathmodule.c"
        HEAP[$iftmp_22]=$18; //@line 502 "mathmodule.c"
        __label__ = 7; break; //@line 502 "mathmodule.c"
      case 7: // $bb6
        var $19=HEAP[$iftmp_22]; //@line 502 "mathmodule.c"
        HEAP[$0]=$19; //@line 502 "mathmodule.c"
        __label__ = 8; break; //@line 502 "mathmodule.c"
      case 8: // $bb7
        var $20=HEAP[$0]; //@line 496 "mathmodule.c"
        HEAP[$retval]=$20; //@line 496 "mathmodule.c"
        __label__ = 9; break; //@line 496 "mathmodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 496 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 496 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_erfc($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $iftmp_23=__stackBase__+16;
        var $0=__stackBase__+24;
        var $absx=__stackBase__+32;
        var $cf=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 513 "mathmodule.c"
        var $2=___isnan($1); //@line 513 "mathmodule.c"
        var $3=((($2))|0)!=0; //@line 513 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 513 "mathmodule.c"
      case 1: // $bb
        var $4=HEAP[$x_addr]; //@line 514 "mathmodule.c"
        HEAP[$0]=$4; //@line 514 "mathmodule.c"
        __label__ = 8; break; //@line 514 "mathmodule.c"
      case 2: // $bb1
        var $5=HEAP[$x_addr]; //@line 515 "mathmodule.c"
        var $6=_fabs($5); //@line 515 "mathmodule.c"
        HEAP[$absx]=$6; //@line 515 "mathmodule.c"
        var $7=HEAP[$absx]; //@line 516 "mathmodule.c"
        var $8=($7) < 1.5; //@line 516 "mathmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 516 "mathmodule.c"
      case 3: // $bb2
        var $9=HEAP[$x_addr]; //@line 517 "mathmodule.c"
        var $10=_m_erf_series($9); //@line 517 "mathmodule.c"
        var $11=1 - ($10); //@line 517 "mathmodule.c"
        HEAP[$0]=$11; //@line 517 "mathmodule.c"
        __label__ = 8; break; //@line 517 "mathmodule.c"
      case 4: // $bb3
        var $12=HEAP[$absx]; //@line 519 "mathmodule.c"
        var $13=_m_erfc_contfrac($12); //@line 519 "mathmodule.c"
        HEAP[$cf]=$13; //@line 519 "mathmodule.c"
        var $14=HEAP[$x_addr]; //@line 520 "mathmodule.c"
        var $15=($14) <= 0; //@line 520 "mathmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 520 "mathmodule.c"
      case 5: // $bb4
        var $16=HEAP[$cf]; //@line 520 "mathmodule.c"
        var $17=2 - ($16); //@line 520 "mathmodule.c"
        HEAP[$iftmp_23]=$17; //@line 520 "mathmodule.c"
        __label__ = 7; break; //@line 520 "mathmodule.c"
      case 6: // $bb5
        var $18=HEAP[$cf]; //@line 520 "mathmodule.c"
        HEAP[$iftmp_23]=$18; //@line 520 "mathmodule.c"
        __label__ = 7; break; //@line 520 "mathmodule.c"
      case 7: // $bb6
        var $19=HEAP[$iftmp_23]; //@line 520 "mathmodule.c"
        HEAP[$0]=$19; //@line 520 "mathmodule.c"
        __label__ = 8; break; //@line 520 "mathmodule.c"
      case 8: // $bb7
        var $20=HEAP[$0]; //@line 514 "mathmodule.c"
        HEAP[$retval]=$20; //@line 514 "mathmodule.c"
        __label__ = 9; break; //@line 514 "mathmodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 514 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 514 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_atan2($y, $x) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $y_addr=__stackBase__;
        var $x_addr=__stackBase__+8;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$y_addr]=$y;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 535 "mathmodule.c"
        var $2=___isnan($1); //@line 535 "mathmodule.c"
        var $3=((($2))|0)!=0; //@line 535 "mathmodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 535 "mathmodule.c"
      case 1: // $bb
        var $4=HEAP[$y_addr]; //@line 535 "mathmodule.c"
        var $5=___isnan($4); //@line 535 "mathmodule.c"
        var $6=((($5))|0)!=0; //@line 535 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 535 "mathmodule.c"
      case 2: // $bb1
        HEAP[$0]=NaN; //@line 536 "mathmodule.c"
        __label__ = 15; break; //@line 536 "mathmodule.c"
      case 3: // $bb2
        var $7=HEAP[$y_addr]; //@line 537 "mathmodule.c"
        var $8=___isinf($7); //@line 537 "mathmodule.c"
        var $9=((($8))|0)!=0; //@line 537 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 537 "mathmodule.c"
      case 4: // $bb3
        var $10=HEAP[$x_addr]; //@line 538 "mathmodule.c"
        var $11=___isinf($10); //@line 538 "mathmodule.c"
        var $12=((($11))|0)!=0; //@line 538 "mathmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 538 "mathmodule.c"
      case 5: // $bb4
        var $13=HEAP[$x_addr]; //@line 539 "mathmodule.c"
        var $14=_copysign(1, $13); //@line 539 "mathmodule.c"
        var $15=($14) == 1; //@line 539 "mathmodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 539 "mathmodule.c"
      case 6: // $bb5
        var $16=HEAP[$y_addr]; //@line 541 "mathmodule.c"
        var $17=_copysign(0.7853981633974483, $16); //@line 541 "mathmodule.c"
        HEAP[$0]=$17; //@line 541 "mathmodule.c"
        __label__ = 15; break; //@line 541 "mathmodule.c"
      case 7: // $bb6
        var $18=HEAP[$y_addr]; //@line 544 "mathmodule.c"
        var $19=_copysign(2.356194490192345, $18); //@line 544 "mathmodule.c"
        HEAP[$0]=$19; //@line 544 "mathmodule.c"
        __label__ = 15; break; //@line 544 "mathmodule.c"
      case 8: // $bb7
        var $20=HEAP[$y_addr]; //@line 547 "mathmodule.c"
        var $21=_copysign(1.5707963267948966, $20); //@line 547 "mathmodule.c"
        HEAP[$0]=$21; //@line 547 "mathmodule.c"
        __label__ = 15; break; //@line 547 "mathmodule.c"
      case 9: // $bb8
        var $22=HEAP[$x_addr]; //@line 549 "mathmodule.c"
        var $23=___isinf($22); //@line 549 "mathmodule.c"
        var $24=((($23))|0)!=0; //@line 549 "mathmodule.c"
        if ($24) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 549 "mathmodule.c"
      case 10: // $bb9
        var $25=HEAP[$y_addr]; //@line 549 "mathmodule.c"
        var $26=($25) == 0; //@line 549 "mathmodule.c"
        if ($26) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 549 "mathmodule.c"
      case 11: // $bb10
        var $27=HEAP[$x_addr]; //@line 550 "mathmodule.c"
        var $28=_copysign(1, $27); //@line 550 "mathmodule.c"
        var $29=($28) == 1; //@line 550 "mathmodule.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 550 "mathmodule.c"
      case 12: // $bb11
        var $30=HEAP[$y_addr]; //@line 552 "mathmodule.c"
        var $31=_copysign(0, $30); //@line 552 "mathmodule.c"
        HEAP[$0]=$31; //@line 552 "mathmodule.c"
        __label__ = 15; break; //@line 552 "mathmodule.c"
      case 13: // $bb12
        var $32=HEAP[$y_addr]; //@line 555 "mathmodule.c"
        var $33=_copysign(3.141592653589793, $32); //@line 555 "mathmodule.c"
        HEAP[$0]=$33; //@line 555 "mathmodule.c"
        __label__ = 15; break; //@line 555 "mathmodule.c"
      case 14: // $bb13
        var $34=HEAP[$y_addr]; //@line 557 "mathmodule.c"
        var $35=HEAP[$x_addr]; //@line 557 "mathmodule.c"
        var $36=_atan2($34, $35); //@line 557 "mathmodule.c"
        HEAP[$0]=$36; //@line 557 "mathmodule.c"
        __label__ = 15; break; //@line 557 "mathmodule.c"
      case 15: // $bb14
        var $37=HEAP[$0]; //@line 536 "mathmodule.c"
        HEAP[$retval]=$37; //@line 536 "mathmodule.c"
        __label__ = 16; break; //@line 536 "mathmodule.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 536 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 536 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_log($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 570 "mathmodule.c"
        var $2=___finite($1); //@line 570 "mathmodule.c"
        var $3=((($2))|0)!=0; //@line 570 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 570 "mathmodule.c"
      case 1: // $bb
        var $4=HEAP[$x_addr]; //@line 571 "mathmodule.c"
        var $5=($4) > 0; //@line 571 "mathmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 571 "mathmodule.c"
      case 2: // $bb1
        var $6=HEAP[$x_addr]; //@line 572 "mathmodule.c"
        var $7=_llvm_log_f64($6); //@line 572 "mathmodule.c"
        HEAP[$0]=$7; //@line 572 "mathmodule.c"
        __label__ = 11; break; //@line 572 "mathmodule.c"
      case 3: // $bb2
        var $8=___errno_location(); //@line 573 "mathmodule.c"
        HEAP[$8]=33; //@line 573 "mathmodule.c"
        var $9=HEAP[$x_addr]; //@line 574 "mathmodule.c"
        var $10=($9) == 0; //@line 574 "mathmodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 574 "mathmodule.c"
      case 4: // $bb3
        HEAP[$0]=-Infinity; //@line 575 "mathmodule.c"
        __label__ = 11; break; //@line 575 "mathmodule.c"
      case 5: // $bb4
        HEAP[$0]=NaN; //@line 577 "mathmodule.c"
        __label__ = 11; break; //@line 577 "mathmodule.c"
      case 6: // $bb5
        var $11=HEAP[$x_addr]; //@line 579 "mathmodule.c"
        var $12=___isnan($11); //@line 579 "mathmodule.c"
        var $13=((($12))|0)!=0; //@line 579 "mathmodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 579 "mathmodule.c"
      case 7: // $bb6
        var $14=HEAP[$x_addr]; //@line 580 "mathmodule.c"
        HEAP[$0]=$14; //@line 580 "mathmodule.c"
        __label__ = 11; break; //@line 580 "mathmodule.c"
      case 8: // $bb7
        var $15=HEAP[$x_addr]; //@line 581 "mathmodule.c"
        var $16=($15) > 0; //@line 581 "mathmodule.c"
        if ($16) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 581 "mathmodule.c"
      case 9: // $bb8
        var $17=HEAP[$x_addr]; //@line 582 "mathmodule.c"
        HEAP[$0]=$17; //@line 582 "mathmodule.c"
        __label__ = 11; break; //@line 582 "mathmodule.c"
      case 10: // $bb9
        var $18=___errno_location(); //@line 584 "mathmodule.c"
        HEAP[$18]=33; //@line 584 "mathmodule.c"
        HEAP[$0]=NaN; //@line 585 "mathmodule.c"
        __label__ = 11; break; //@line 585 "mathmodule.c"
      case 11: // $bb10
        var $19=HEAP[$0]; //@line 572 "mathmodule.c"
        HEAP[$retval]=$19; //@line 572 "mathmodule.c"
        __label__ = 12; break; //@line 572 "mathmodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 572 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 572 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_log10($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 592 "mathmodule.c"
        var $2=___finite($1); //@line 592 "mathmodule.c"
        var $3=((($2))|0)!=0; //@line 592 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 592 "mathmodule.c"
      case 1: // $bb
        var $4=HEAP[$x_addr]; //@line 593 "mathmodule.c"
        var $5=($4) > 0; //@line 593 "mathmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 593 "mathmodule.c"
      case 2: // $bb1
        var $6=HEAP[$x_addr]; //@line 594 "mathmodule.c"
        var $7=_llvm_log10_f64($6); //@line 594 "mathmodule.c"
        HEAP[$0]=$7; //@line 594 "mathmodule.c"
        __label__ = 11; break; //@line 594 "mathmodule.c"
      case 3: // $bb2
        var $8=___errno_location(); //@line 595 "mathmodule.c"
        HEAP[$8]=33; //@line 595 "mathmodule.c"
        var $9=HEAP[$x_addr]; //@line 596 "mathmodule.c"
        var $10=($9) == 0; //@line 596 "mathmodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 596 "mathmodule.c"
      case 4: // $bb3
        HEAP[$0]=-Infinity; //@line 597 "mathmodule.c"
        __label__ = 11; break; //@line 597 "mathmodule.c"
      case 5: // $bb4
        HEAP[$0]=NaN; //@line 599 "mathmodule.c"
        __label__ = 11; break; //@line 599 "mathmodule.c"
      case 6: // $bb5
        var $11=HEAP[$x_addr]; //@line 601 "mathmodule.c"
        var $12=___isnan($11); //@line 601 "mathmodule.c"
        var $13=((($12))|0)!=0; //@line 601 "mathmodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 601 "mathmodule.c"
      case 7: // $bb6
        var $14=HEAP[$x_addr]; //@line 602 "mathmodule.c"
        HEAP[$0]=$14; //@line 602 "mathmodule.c"
        __label__ = 11; break; //@line 602 "mathmodule.c"
      case 8: // $bb7
        var $15=HEAP[$x_addr]; //@line 603 "mathmodule.c"
        var $16=($15) > 0; //@line 603 "mathmodule.c"
        if ($16) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 603 "mathmodule.c"
      case 9: // $bb8
        var $17=HEAP[$x_addr]; //@line 604 "mathmodule.c"
        HEAP[$0]=$17; //@line 604 "mathmodule.c"
        __label__ = 11; break; //@line 604 "mathmodule.c"
      case 10: // $bb9
        var $18=___errno_location(); //@line 606 "mathmodule.c"
        HEAP[$18]=33; //@line 606 "mathmodule.c"
        HEAP[$0]=NaN; //@line 607 "mathmodule.c"
        __label__ = 11; break; //@line 607 "mathmodule.c"
      case 11: // $bb10
        var $19=HEAP[$0]; //@line 594 "mathmodule.c"
        HEAP[$retval]=$19; //@line 594 "mathmodule.c"
        __label__ = 12; break; //@line 594 "mathmodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 594 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 594 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _is_error($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        HEAP[$result]=1; //@line 619 "mathmodule.c"
        var $1=___errno_location(); //@line 620 "mathmodule.c"
        var $2=HEAP[$1]; //@line 620 "mathmodule.c"
        var $3=((($2))|0)==0; //@line 620 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 620 "mathmodule.c"
      case 1: // $bb
        ___assert_fail(((__str5)&4294967295), ((__str1)&4294967295), 620, ((___PRETTY_FUNCTION___8706)&4294967295)); //@line 620 "mathmodule.c"
        throw "Reached an unreachable! Original .ll line: 1547"; //@line 620 "mathmodule.c"
      case 2: // $bb1
        var $4=___errno_location(); //@line 621 "mathmodule.c"
        var $5=HEAP[$4]; //@line 621 "mathmodule.c"
        var $6=((($5))|0)==33; //@line 621 "mathmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 621 "mathmodule.c"
      case 3: // $bb2
        var $7=HEAP[_PyExc_ValueError]; //@line 622 "mathmodule.c"
        _PyErr_SetString($7, ((__str6)&4294967295)); //@line 622 "mathmodule.c"
        __label__ = 10; break; //@line 622 "mathmodule.c"
      case 4: // $bb3
        var $8=___errno_location(); //@line 624 "mathmodule.c"
        var $9=HEAP[$8]; //@line 624 "mathmodule.c"
        var $10=((($9))|0)==34; //@line 624 "mathmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 624 "mathmodule.c"
      case 5: // $bb4
        var $11=HEAP[$x_addr]; //@line 640 "mathmodule.c"
        var $12=_fabs($11); //@line 640 "mathmodule.c"
        var $13=($12) < 1; //@line 640 "mathmodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 640 "mathmodule.c"
      case 6: // $bb5
        HEAP[$result]=0; //@line 641 "mathmodule.c"
        __label__ = 8; break; //@line 641 "mathmodule.c"
      case 7: // $bb6
        var $14=HEAP[_PyExc_OverflowError]; //@line 643 "mathmodule.c"
        _PyErr_SetString($14, ((__str7)&4294967295)); //@line 643 "mathmodule.c"
        __label__ = 8; break; //@line 643 "mathmodule.c"
      case 8: // $bb7
        __label__ = 10; break; //@line 643 "mathmodule.c"
      case 9: // $bb8
        var $15=HEAP[_PyExc_ValueError]; //@line 648 "mathmodule.c"
        var $16=_PyErr_SetFromErrno($15); //@line 648 "mathmodule.c"
        __label__ = 10; break; //@line 648 "mathmodule.c"
      case 10: // $bb9
        var $17=HEAP[$result]; //@line 649 "mathmodule.c"
        HEAP[$0]=$17; //@line 649 "mathmodule.c"
        var $18=HEAP[$0]; //@line 649 "mathmodule.c"
        HEAP[$retval]=$18; //@line 649 "mathmodule.c"
        __label__ = 11; break; //@line 649 "mathmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 649 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 649 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_1($arg, $func, $can_overflow) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $arg_addr=__stackBase__;
        var $func_addr=__stackBase__+4;
        var $can_overflow_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $iftmp_27=__stackBase__+16;
        var $0=__stackBase__+20;
        var $x=__stackBase__+24;
        var $r=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$arg_addr]=$arg;
        HEAP[$func_addr]=$func;
        HEAP[$can_overflow_addr]=$can_overflow;
        var $1=HEAP[$arg_addr]; //@line 686 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 686 "mathmodule.c"
        HEAP[$x]=$2; //@line 686 "mathmodule.c"
        var $3=HEAP[$x]; //@line 687 "mathmodule.c"
        var $4=($3) == -1; //@line 687 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 687 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 687 "mathmodule.c"
        var $6=($5)!=0; //@line 687 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 687 "mathmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 688 "mathmodule.c"
        __label__ = 19; break; //@line 688 "mathmodule.c"
      case 3: // $bb2
        var $7=___errno_location(); //@line 689 "mathmodule.c"
        HEAP[$7]=0; //@line 689 "mathmodule.c"
        var $8=HEAP[$func_addr]; //@line 691 "mathmodule.c"
        var $9=HEAP[$x]; //@line 691 "mathmodule.c"
        var $10=FUNCTION_TABLE[$8]($9); //@line 691 "mathmodule.c"
        HEAP[$r]=$10; //@line 691 "mathmodule.c"
        var $11=HEAP[$r]; //@line 693 "mathmodule.c"
        var $12=___isnan($11); //@line 693 "mathmodule.c"
        var $13=((($12))|0)!=0; //@line 693 "mathmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 693 "mathmodule.c"
      case 4: // $bb3
        var $14=HEAP[$x]; //@line 694 "mathmodule.c"
        var $15=___isnan($14); //@line 694 "mathmodule.c"
        var $16=((($15))|0)==0; //@line 694 "mathmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 694 "mathmodule.c"
      case 5: // $bb4
        var $17=___errno_location(); //@line 695 "mathmodule.c"
        HEAP[$17]=33; //@line 695 "mathmodule.c"
        __label__ = 7; break; //@line 695 "mathmodule.c"
      case 6: // $bb5
        var $18=___errno_location(); //@line 697 "mathmodule.c"
        HEAP[$18]=0; //@line 697 "mathmodule.c"
        __label__ = 7; break; //@line 697 "mathmodule.c"
      case 7: // $bb6
        __label__ = 15; break; //@line 697 "mathmodule.c"
      case 8: // $bb7
        var $19=HEAP[$r]; //@line 699 "mathmodule.c"
        var $20=___isinf($19); //@line 699 "mathmodule.c"
        var $21=((($20))|0)!=0; //@line 699 "mathmodule.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 699 "mathmodule.c"
      case 9: // $bb8
        var $22=HEAP[$x]; //@line 700 "mathmodule.c"
        var $23=___finite($22); //@line 700 "mathmodule.c"
        var $24=((($23))|0)!=0; //@line 700 "mathmodule.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 700 "mathmodule.c"
      case 10: // $bb9
        var $25=___errno_location(); //@line 701 "mathmodule.c"
        var $26=HEAP[$can_overflow_addr]; //@line 701 "mathmodule.c"
        var $27=((($26))|0)!=0; //@line 701 "mathmodule.c"
        if ($27) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 701 "mathmodule.c"
      case 11: // $bb10
        HEAP[$iftmp_27]=34; //@line 701 "mathmodule.c"
        __label__ = 13; break; //@line 701 "mathmodule.c"
      case 12: // $bb11
        HEAP[$iftmp_27]=33; //@line 701 "mathmodule.c"
        __label__ = 13; break; //@line 701 "mathmodule.c"
      case 13: // $bb12
        var $28=HEAP[$iftmp_27]; //@line 701 "mathmodule.c"
        HEAP[$25]=$28; //@line 701 "mathmodule.c"
        __label__ = 15; break; //@line 701 "mathmodule.c"
      case 14: // $bb13
        var $29=___errno_location(); //@line 703 "mathmodule.c"
        HEAP[$29]=0; //@line 703 "mathmodule.c"
        __label__ = 15; break; //@line 703 "mathmodule.c"
      case 15: // $bb14
        var $30=___errno_location(); //@line 705 "mathmodule.c"
        var $31=HEAP[$30]; //@line 705 "mathmodule.c"
        var $32=((($31))|0)==0; //@line 705 "mathmodule.c"
        if ($32) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 705 "mathmodule.c"
      case 16: // $bb15
        var $33=HEAP[$r]; //@line 705 "mathmodule.c"
        var $34=_is_error($33); //@line 705 "mathmodule.c"
        var $35=((($34))|0)==0; //@line 705 "mathmodule.c"
        if ($35) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 705 "mathmodule.c"
      case 17: // $bb16
        HEAP[$0]=0; //@line 706 "mathmodule.c"
        __label__ = 19; break; //@line 706 "mathmodule.c"
      case 18: // $bb17
        var $36=HEAP[$r]; //@line 708 "mathmodule.c"
        var $37=_PyFloat_FromDouble($36); //@line 708 "mathmodule.c"
        HEAP[$0]=$37; //@line 708 "mathmodule.c"
        __label__ = 19; break; //@line 708 "mathmodule.c"
      case 19: // $bb18
        var $38=HEAP[$0]; //@line 688 "mathmodule.c"
        HEAP[$retval]=$38; //@line 688 "mathmodule.c"
        __label__ = 20; break; //@line 688 "mathmodule.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 688 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 688 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_1a($arg, $func) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $arg_addr=__stackBase__;
        var $func_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $x=__stackBase__+16;
        var $r=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$arg_addr]=$arg;
        HEAP[$func_addr]=$func;
        var $1=HEAP[$arg_addr]; //@line 719 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 719 "mathmodule.c"
        HEAP[$x]=$2; //@line 719 "mathmodule.c"
        var $3=HEAP[$x]; //@line 720 "mathmodule.c"
        var $4=($3) == -1; //@line 720 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 720 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 720 "mathmodule.c"
        var $6=($5)!=0; //@line 720 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 720 "mathmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 721 "mathmodule.c"
        __label__ = 7; break; //@line 721 "mathmodule.c"
      case 3: // $bb2
        var $7=___errno_location(); //@line 722 "mathmodule.c"
        HEAP[$7]=0; //@line 722 "mathmodule.c"
        var $8=HEAP[$func_addr]; //@line 724 "mathmodule.c"
        var $9=HEAP[$x]; //@line 724 "mathmodule.c"
        var $10=FUNCTION_TABLE[$8]($9); //@line 724 "mathmodule.c"
        HEAP[$r]=$10; //@line 724 "mathmodule.c"
        var $11=___errno_location(); //@line 726 "mathmodule.c"
        var $12=HEAP[$11]; //@line 726 "mathmodule.c"
        var $13=((($12))|0)!=0; //@line 726 "mathmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 726 "mathmodule.c"
      case 4: // $bb3
        var $14=HEAP[$r]; //@line 726 "mathmodule.c"
        var $15=_is_error($14); //@line 726 "mathmodule.c"
        var $16=((($15))|0)!=0; //@line 726 "mathmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 726 "mathmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 727 "mathmodule.c"
        __label__ = 7; break; //@line 727 "mathmodule.c"
      case 6: // $bb5
        var $17=HEAP[$r]; //@line 728 "mathmodule.c"
        var $18=_PyFloat_FromDouble($17); //@line 728 "mathmodule.c"
        HEAP[$0]=$18; //@line 728 "mathmodule.c"
        __label__ = 7; break; //@line 728 "mathmodule.c"
      case 7: // $bb6
        var $19=HEAP[$0]; //@line 721 "mathmodule.c"
        HEAP[$retval]=$19; //@line 721 "mathmodule.c"
        __label__ = 8; break; //@line 721 "mathmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 721 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 721 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_2($args, $func, $funcname) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $args_addr=__stackBase__;
        var $func_addr=__stackBase__+4;
        var $funcname_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $ox=__stackBase__+20;
        var $oy=__stackBase__+24;
        var $x=__stackBase__+28;
        var $y=__stackBase__+36;
        var $r=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$args_addr]=$args;
        HEAP[$func_addr]=$func;
        HEAP[$funcname_addr]=$funcname;
        var $1=HEAP[$args_addr]; //@line 763 "mathmodule.c"
        var $2=HEAP[$funcname_addr]; //@line 763 "mathmodule.c"
        var $3=_PyArg_UnpackTuple($1, $2, 2, 2, $ox, $oy); //@line 763 "mathmodule.c"
        var $4=((($3))|0)==0; //@line 763 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 763 "mathmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 764 "mathmodule.c"
        __label__ = 21; break; //@line 764 "mathmodule.c"
      case 2: // $bb1
        var $5=HEAP[$ox]; //@line 765 "mathmodule.c"
        var $6=_PyFloat_AsDouble($5); //@line 765 "mathmodule.c"
        HEAP[$x]=$6; //@line 765 "mathmodule.c"
        var $7=HEAP[$oy]; //@line 766 "mathmodule.c"
        var $8=_PyFloat_AsDouble($7); //@line 766 "mathmodule.c"
        HEAP[$y]=$8; //@line 766 "mathmodule.c"
        var $9=HEAP[$x]; //@line 767 "mathmodule.c"
        var $10=($9) == -1; //@line 767 "mathmodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 767 "mathmodule.c"
      case 3: // $bb2
        var $11=HEAP[$y]; //@line 767 "mathmodule.c"
        var $12=($11) == -1; //@line 767 "mathmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 767 "mathmodule.c"
      case 4: // $bb3
        var $13=_PyErr_Occurred(); //@line 767 "mathmodule.c"
        var $14=($13)!=0; //@line 767 "mathmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 767 "mathmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 768 "mathmodule.c"
        __label__ = 21; break; //@line 768 "mathmodule.c"
      case 6: // $bb5
        var $15=___errno_location(); //@line 769 "mathmodule.c"
        HEAP[$15]=0; //@line 769 "mathmodule.c"
        var $16=HEAP[$func_addr]; //@line 771 "mathmodule.c"
        var $17=HEAP[$x]; //@line 771 "mathmodule.c"
        var $18=HEAP[$y]; //@line 771 "mathmodule.c"
        var $19=FUNCTION_TABLE[$16]($17, $18); //@line 771 "mathmodule.c"
        HEAP[$r]=$19; //@line 771 "mathmodule.c"
        var $20=HEAP[$r]; //@line 773 "mathmodule.c"
        var $21=___isnan($20); //@line 773 "mathmodule.c"
        var $22=((($21))|0)!=0; //@line 773 "mathmodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 773 "mathmodule.c"
      case 7: // $bb6
        var $23=HEAP[$x]; //@line 774 "mathmodule.c"
        var $24=___isnan($23); //@line 774 "mathmodule.c"
        var $25=((($24))|0)!=0; //@line 774 "mathmodule.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 774 "mathmodule.c"
      case 8: // $bb7
        var $26=HEAP[$y]; //@line 774 "mathmodule.c"
        var $27=___isnan($26); //@line 774 "mathmodule.c"
        var $28=((($27))|0)!=0; //@line 774 "mathmodule.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 774 "mathmodule.c"
      case 9: // $bb8
        var $29=___errno_location(); //@line 775 "mathmodule.c"
        HEAP[$29]=33; //@line 775 "mathmodule.c"
        __label__ = 11; break; //@line 775 "mathmodule.c"
      case 10: // $bb9
        var $30=___errno_location(); //@line 777 "mathmodule.c"
        HEAP[$30]=0; //@line 777 "mathmodule.c"
        __label__ = 11; break; //@line 777 "mathmodule.c"
      case 11: // $bb10
        __label__ = 17; break; //@line 777 "mathmodule.c"
      case 12: // $bb11
        var $31=HEAP[$r]; //@line 779 "mathmodule.c"
        var $32=___isinf($31); //@line 779 "mathmodule.c"
        var $33=((($32))|0)!=0; //@line 779 "mathmodule.c"
        if ($33) { __label__ = 13; break; } else { __label__ = 17; break; } //@line 779 "mathmodule.c"
      case 13: // $bb12
        var $34=HEAP[$x]; //@line 780 "mathmodule.c"
        var $35=___finite($34); //@line 780 "mathmodule.c"
        var $36=((($35))|0)==0; //@line 780 "mathmodule.c"
        if ($36) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 780 "mathmodule.c"
      case 14: // $bb13
        var $37=HEAP[$y]; //@line 780 "mathmodule.c"
        var $38=___finite($37); //@line 780 "mathmodule.c"
        var $39=((($38))|0)==0; //@line 780 "mathmodule.c"
        if ($39) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 780 "mathmodule.c"
      case 15: // $bb14
        var $40=___errno_location(); //@line 781 "mathmodule.c"
        HEAP[$40]=34; //@line 781 "mathmodule.c"
        __label__ = 17; break; //@line 781 "mathmodule.c"
      case 16: // $bb15
        var $41=___errno_location(); //@line 783 "mathmodule.c"
        HEAP[$41]=0; //@line 783 "mathmodule.c"
        __label__ = 17; break; //@line 783 "mathmodule.c"
      case 17: // $bb16
        var $42=___errno_location(); //@line 785 "mathmodule.c"
        var $43=HEAP[$42]; //@line 785 "mathmodule.c"
        var $44=((($43))|0)==0; //@line 785 "mathmodule.c"
        if ($44) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 785 "mathmodule.c"
      case 18: // $bb17
        var $45=HEAP[$r]; //@line 785 "mathmodule.c"
        var $46=_is_error($45); //@line 785 "mathmodule.c"
        var $47=((($46))|0)==0; //@line 785 "mathmodule.c"
        if ($47) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 785 "mathmodule.c"
      case 19: // $bb18
        HEAP[$0]=0; //@line 786 "mathmodule.c"
        __label__ = 21; break; //@line 786 "mathmodule.c"
      case 20: // $bb19
        var $48=HEAP[$r]; //@line 788 "mathmodule.c"
        var $49=_PyFloat_FromDouble($48); //@line 788 "mathmodule.c"
        HEAP[$0]=$49; //@line 788 "mathmodule.c"
        __label__ = 21; break; //@line 788 "mathmodule.c"
      case 21: // $bb20
        var $50=HEAP[$0]; //@line 764 "mathmodule.c"
        HEAP[$retval]=$50; //@line 764 "mathmodule.c"
        __label__ = 22; break; //@line 764 "mathmodule.c"
      case 22: // $return
        var $retval21=HEAP[$retval]; //@line 764 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 764 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_acos($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 809 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 2), 0); //@line 809 "mathmodule.c"
        HEAP[$0]=$2; //@line 809 "mathmodule.c"
        var $3=HEAP[$0]; //@line 809 "mathmodule.c"
        HEAP[$retval]=$3; //@line 809 "mathmodule.c"
        __label__ = 1; break; //@line 809 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 809 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 809 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_acosh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 811 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 4), 0); //@line 811 "mathmodule.c"
        HEAP[$0]=$2; //@line 811 "mathmodule.c"
        var $3=HEAP[$0]; //@line 811 "mathmodule.c"
        HEAP[$retval]=$3; //@line 811 "mathmodule.c"
        __label__ = 1; break; //@line 811 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 811 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 811 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_asin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 813 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 6), 0); //@line 813 "mathmodule.c"
        HEAP[$0]=$2; //@line 813 "mathmodule.c"
        var $3=HEAP[$0]; //@line 813 "mathmodule.c"
        HEAP[$retval]=$3; //@line 813 "mathmodule.c"
        __label__ = 1; break; //@line 813 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 813 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 813 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_asinh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 815 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 8), 0); //@line 815 "mathmodule.c"
        HEAP[$0]=$2; //@line 815 "mathmodule.c"
        var $3=HEAP[$0]; //@line 815 "mathmodule.c"
        HEAP[$retval]=$3; //@line 815 "mathmodule.c"
        __label__ = 1; break; //@line 815 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 815 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 815 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_atan($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 817 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 10), 0); //@line 817 "mathmodule.c"
        HEAP[$0]=$2; //@line 817 "mathmodule.c"
        var $3=HEAP[$0]; //@line 817 "mathmodule.c"
        HEAP[$retval]=$3; //@line 817 "mathmodule.c"
        __label__ = 1; break; //@line 817 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 817 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 817 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_atan2($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 819 "mathmodule.c"
        var $2=_math_2($1, (FUNCTION_TABLE_OFFSET + 12), ((__str8)&4294967295)); //@line 819 "mathmodule.c"
        HEAP[$0]=$2; //@line 819 "mathmodule.c"
        var $3=HEAP[$0]; //@line 819 "mathmodule.c"
        HEAP[$retval]=$3; //@line 819 "mathmodule.c"
        __label__ = 1; break; //@line 819 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 819 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 819 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_atanh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 822 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 14), 0); //@line 822 "mathmodule.c"
        HEAP[$0]=$2; //@line 822 "mathmodule.c"
        var $3=HEAP[$0]; //@line 822 "mathmodule.c"
        HEAP[$retval]=$3; //@line 822 "mathmodule.c"
        __label__ = 1; break; //@line 822 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 822 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 822 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_ceil($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 824 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 16), 0); //@line 824 "mathmodule.c"
        HEAP[$0]=$2; //@line 824 "mathmodule.c"
        var $3=HEAP[$0]; //@line 824 "mathmodule.c"
        HEAP[$retval]=$3; //@line 824 "mathmodule.c"
        __label__ = 1; break; //@line 824 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 824 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 824 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_copysign($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 827 "mathmodule.c"
        var $2=_math_2($1, (FUNCTION_TABLE_OFFSET + 18), ((__str9)&4294967295)); //@line 827 "mathmodule.c"
        HEAP[$0]=$2; //@line 827 "mathmodule.c"
        var $3=HEAP[$0]; //@line 827 "mathmodule.c"
        HEAP[$retval]=$3; //@line 827 "mathmodule.c"
        __label__ = 1; break; //@line 827 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 827 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 827 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_cos($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 829 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 20), 0); //@line 829 "mathmodule.c"
        HEAP[$0]=$2; //@line 829 "mathmodule.c"
        var $3=HEAP[$0]; //@line 829 "mathmodule.c"
        HEAP[$retval]=$3; //@line 829 "mathmodule.c"
        __label__ = 1; break; //@line 829 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 829 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 829 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_cosh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 831 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 22), 1); //@line 831 "mathmodule.c"
        HEAP[$0]=$2; //@line 831 "mathmodule.c"
        var $3=HEAP[$0]; //@line 831 "mathmodule.c"
        HEAP[$retval]=$3; //@line 831 "mathmodule.c"
        __label__ = 1; break; //@line 831 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 831 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 831 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_erf($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 833 "mathmodule.c"
        var $2=_math_1a($1, (FUNCTION_TABLE_OFFSET + 24)); //@line 833 "mathmodule.c"
        HEAP[$0]=$2; //@line 833 "mathmodule.c"
        var $3=HEAP[$0]; //@line 833 "mathmodule.c"
        HEAP[$retval]=$3; //@line 833 "mathmodule.c"
        __label__ = 1; break; //@line 833 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 833 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 833 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_erfc($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 835 "mathmodule.c"
        var $2=_math_1a($1, (FUNCTION_TABLE_OFFSET + 26)); //@line 835 "mathmodule.c"
        HEAP[$0]=$2; //@line 835 "mathmodule.c"
        var $3=HEAP[$0]; //@line 835 "mathmodule.c"
        HEAP[$retval]=$3; //@line 835 "mathmodule.c"
        __label__ = 1; break; //@line 835 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 835 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 835 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_exp($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 837 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 28), 1); //@line 837 "mathmodule.c"
        HEAP[$0]=$2; //@line 837 "mathmodule.c"
        var $3=HEAP[$0]; //@line 837 "mathmodule.c"
        HEAP[$retval]=$3; //@line 837 "mathmodule.c"
        __label__ = 1; break; //@line 837 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 837 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 837 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_expm1($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 839 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 30), 1); //@line 839 "mathmodule.c"
        HEAP[$0]=$2; //@line 839 "mathmodule.c"
        var $3=HEAP[$0]; //@line 839 "mathmodule.c"
        HEAP[$retval]=$3; //@line 839 "mathmodule.c"
        __label__ = 1; break; //@line 839 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 839 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 839 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_fabs($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 843 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 32), 0); //@line 843 "mathmodule.c"
        HEAP[$0]=$2; //@line 843 "mathmodule.c"
        var $3=HEAP[$0]; //@line 843 "mathmodule.c"
        HEAP[$retval]=$3; //@line 843 "mathmodule.c"
        __label__ = 1; break; //@line 843 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 843 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 843 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_floor($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 845 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 34), 0); //@line 845 "mathmodule.c"
        HEAP[$0]=$2; //@line 845 "mathmodule.c"
        var $3=HEAP[$0]; //@line 845 "mathmodule.c"
        HEAP[$retval]=$3; //@line 845 "mathmodule.c"
        __label__ = 1; break; //@line 845 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 845 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 845 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_gamma($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 848 "mathmodule.c"
        var $2=_math_1a($1, (FUNCTION_TABLE_OFFSET + 36)); //@line 848 "mathmodule.c"
        HEAP[$0]=$2; //@line 848 "mathmodule.c"
        var $3=HEAP[$0]; //@line 848 "mathmodule.c"
        HEAP[$retval]=$3; //@line 848 "mathmodule.c"
        __label__ = 1; break; //@line 848 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 848 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 848 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_lgamma($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 850 "mathmodule.c"
        var $2=_math_1a($1, (FUNCTION_TABLE_OFFSET + 38)); //@line 850 "mathmodule.c"
        HEAP[$0]=$2; //@line 850 "mathmodule.c"
        var $3=HEAP[$0]; //@line 850 "mathmodule.c"
        HEAP[$retval]=$3; //@line 850 "mathmodule.c"
        __label__ = 1; break; //@line 850 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 850 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 850 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_log1p($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 852 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 40), 1); //@line 852 "mathmodule.c"
        HEAP[$0]=$2; //@line 852 "mathmodule.c"
        var $3=HEAP[$0]; //@line 852 "mathmodule.c"
        HEAP[$retval]=$3; //@line 852 "mathmodule.c"
        __label__ = 1; break; //@line 852 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 852 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 852 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_sin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 855 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 42), 0); //@line 855 "mathmodule.c"
        HEAP[$0]=$2; //@line 855 "mathmodule.c"
        var $3=HEAP[$0]; //@line 855 "mathmodule.c"
        HEAP[$retval]=$3; //@line 855 "mathmodule.c"
        __label__ = 1; break; //@line 855 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 855 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 855 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_sinh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 857 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 44), 1); //@line 857 "mathmodule.c"
        HEAP[$0]=$2; //@line 857 "mathmodule.c"
        var $3=HEAP[$0]; //@line 857 "mathmodule.c"
        HEAP[$retval]=$3; //@line 857 "mathmodule.c"
        __label__ = 1; break; //@line 857 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 857 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 857 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_sqrt($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 859 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 46), 0); //@line 859 "mathmodule.c"
        HEAP[$0]=$2; //@line 859 "mathmodule.c"
        var $3=HEAP[$0]; //@line 859 "mathmodule.c"
        HEAP[$retval]=$3; //@line 859 "mathmodule.c"
        __label__ = 1; break; //@line 859 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 859 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 859 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_tan($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 861 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 48), 0); //@line 861 "mathmodule.c"
        HEAP[$0]=$2; //@line 861 "mathmodule.c"
        var $3=HEAP[$0]; //@line 861 "mathmodule.c"
        HEAP[$retval]=$3; //@line 861 "mathmodule.c"
        __label__ = 1; break; //@line 861 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 861 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 861 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_tanh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 863 "mathmodule.c"
        var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 50), 0); //@line 863 "mathmodule.c"
        HEAP[$0]=$2; //@line 863 "mathmodule.c"
        var $3=HEAP[$0]; //@line 863 "mathmodule.c"
        HEAP[$retval]=$3; //@line 863 "mathmodule.c"
        __label__ = 1; break; //@line 863 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 863 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 863 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __fsum_realloc($p_ptr, $n, $ps, $m_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_ptr_addr=__stackBase__;
        var $n_addr=__stackBase__+4;
        var $ps_addr=__stackBase__+8;
        var $m_ptr_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $v=__stackBase__+24;
        var $m=__stackBase__+28;
        var $p=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$p_ptr_addr]=$p_ptr;
        HEAP[$n_addr]=$n;
        HEAP[$ps_addr]=$ps;
        HEAP[$m_ptr_addr]=$m_ptr;
        HEAP[$v]=0; //@line 909 "mathmodule.c"
        var $1=HEAP[$m_ptr_addr]; //@line 910 "mathmodule.c"
        var $2=HEAP[$1]; //@line 910 "mathmodule.c"
        HEAP[$m]=$2; //@line 910 "mathmodule.c"
        var $3=HEAP[$m]; //@line 912 "mathmodule.c"
        var $4=HEAP[$m]; //@line 912 "mathmodule.c"
        var $5=((($3) + ($4))&4294967295); //@line 912 "mathmodule.c"
        HEAP[$m]=$5; //@line 912 "mathmodule.c"
        var $6=HEAP[$n_addr]; //@line 913 "mathmodule.c"
        var $7=HEAP[$m]; //@line 913 "mathmodule.c"
        var $8=((($6))|0) < ((($7))|0); //@line 913 "mathmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 913 "mathmodule.c"
      case 1: // $bb
        var $9=HEAP[$m]; //@line 913 "mathmodule.c"
        var $10=((($9))>>>0) <= 268435454; //@line 913 "mathmodule.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 913 "mathmodule.c"
      case 2: // $bb1
        var $11=HEAP[$p_ptr_addr]; //@line 914 "mathmodule.c"
        var $12=HEAP[$11]; //@line 914 "mathmodule.c"
        HEAP[$p]=$12; //@line 914 "mathmodule.c"
        var $13=HEAP[$p]; //@line 915 "mathmodule.c"
        var $14=HEAP[$ps_addr]; //@line 915 "mathmodule.c"
        var $15=($13)==($14); //@line 915 "mathmodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 915 "mathmodule.c"
      case 3: // $bb2
        var $16=HEAP[$m]; //@line 916 "mathmodule.c"
        var $17=((($16) * 8)&4294967295); //@line 916 "mathmodule.c"
        var $18=_PyMem_Malloc($17); //@line 916 "mathmodule.c"
        HEAP[$v]=$18; //@line 916 "mathmodule.c"
        var $19=HEAP[$v]; //@line 917 "mathmodule.c"
        var $20=($19)!=0; //@line 917 "mathmodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 917 "mathmodule.c"
      case 4: // $bb3
        var $21=HEAP[$n_addr]; //@line 918 "mathmodule.c"
        var $22=((($21) * 8)&4294967295); //@line 918 "mathmodule.c"
        var $23=HEAP[$v]; //@line 918 "mathmodule.c"
        var $24=HEAP[$ps_addr]; //@line 918 "mathmodule.c"
        var $25=$24; //@line 918 "mathmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($23, $25, $22, 1, 0); //@line 918 "mathmodule.c"
        __label__ = 5; break; //@line 918 "mathmodule.c"
      case 5: // $bb4
        __label__ = 7; break; //@line 918 "mathmodule.c"
      case 6: // $bb5
        var $26=HEAP[$m]; //@line 921 "mathmodule.c"
        var $27=((($26) * 8)&4294967295); //@line 921 "mathmodule.c"
        var $28=HEAP[$p]; //@line 921 "mathmodule.c"
        var $29=$28; //@line 921 "mathmodule.c"
        var $30=_PyMem_Realloc($29, $27); //@line 921 "mathmodule.c"
        HEAP[$v]=$30; //@line 921 "mathmodule.c"
        __label__ = 7; break; //@line 921 "mathmodule.c"
      case 7: // $bb6
        var $31=HEAP[$v]; //@line 923 "mathmodule.c"
        var $32=($31)==0; //@line 923 "mathmodule.c"
        if ($32) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 923 "mathmodule.c"
      case 8: // $bb7
        var $33=HEAP[_PyExc_MemoryError]; //@line 924 "mathmodule.c"
        _PyErr_SetString($33, ((__str10)&4294967295)); //@line 924 "mathmodule.c"
        HEAP[$0]=1; //@line 925 "mathmodule.c"
        __label__ = 10; break; //@line 925 "mathmodule.c"
      case 9: // $bb8
        var $34=HEAP[$v]; //@line 927 "mathmodule.c"
        var $35=$34; //@line 927 "mathmodule.c"
        var $36=HEAP[$p_ptr_addr]; //@line 927 "mathmodule.c"
        HEAP[$36]=$35; //@line 927 "mathmodule.c"
        var $37=HEAP[$m_ptr_addr]; //@line 928 "mathmodule.c"
        var $38=HEAP[$m]; //@line 928 "mathmodule.c"
        HEAP[$37]=$38; //@line 928 "mathmodule.c"
        HEAP[$0]=0; //@line 929 "mathmodule.c"
        __label__ = 10; break; //@line 929 "mathmodule.c"
      case 10: // $bb9
        var $39=HEAP[$0]; //@line 925 "mathmodule.c"
        HEAP[$retval]=$39; //@line 925 "mathmodule.c"
        __label__ = 11; break; //@line 925 "mathmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 925 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 925 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_fsum($self, $seq) {
    var __stackBase__  = STACKTOP; STACKTOP += 376; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 376);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $seq_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $item=__stackBase__+16;
        var $iter=__stackBase__+20;
        var $sum=__stackBase__+24;
        var $i=__stackBase__+28;
        var $j=__stackBase__+32;
        var $n=__stackBase__+36;
        var $m=__stackBase__+40;
        var $x=__stackBase__+44;
        var $y=__stackBase__+52;
        var $t=__stackBase__+60;
        var $ps=__stackBase__+68;
        var $p=__stackBase__+324;
        var $xsave=__stackBase__+328;
        var $special_sum=__stackBase__+336;
        var $inf_sum=__stackBase__+344;
        var $hi=__stackBase__+352;
        var $yr=__stackBase__+360;
        var $lo=__stackBase__+368;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$seq_addr]=$seq;
        HEAP[$sum]=0; //@line 965 "mathmodule.c"
        HEAP[$n]=0; //@line 966 "mathmodule.c"
        HEAP[$m]=32; //@line 966 "mathmodule.c"
        var $ps1=$ps; //@line 967 "mathmodule.c"
        HEAP[$p]=$ps1; //@line 967 "mathmodule.c"
        HEAP[$special_sum]=0; //@line 968 "mathmodule.c"
        HEAP[$inf_sum]=0; //@line 968 "mathmodule.c"
        var $1=HEAP[$seq_addr]; //@line 971 "mathmodule.c"
        var $2=_PyObject_GetIter($1); //@line 971 "mathmodule.c"
        HEAP[$iter]=$2; //@line 971 "mathmodule.c"
        var $3=HEAP[$iter]; //@line 972 "mathmodule.c"
        var $4=($3)==0; //@line 972 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 972 "mathmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 973 "mathmodule.c"
        __label__ = 57; break; //@line 973 "mathmodule.c"
      case 2: // $bb2
        var $5=HEAP[$n]; //@line 978 "mathmodule.c"
        var $6=((($5))|0) < 0; //@line 978 "mathmodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 978 "mathmodule.c"
      case 3: // $bb3
        var $7=HEAP[$m]; //@line 978 "mathmodule.c"
        var $8=HEAP[$n]; //@line 978 "mathmodule.c"
        var $9=((($8))|0) > ((($7))|0); //@line 978 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 978 "mathmodule.c"
      case 4: // $bb4
        ___assert_fail(((__str11)&4294967295), ((__str1)&4294967295), 978, ((___PRETTY_FUNCTION___9121)&4294967295)); //@line 978 "mathmodule.c"
        throw "Reached an unreachable! Original .ll line: 2828"; //@line 978 "mathmodule.c"
      case 5: // $bb5
        var $10=HEAP[$m]; //@line 979 "mathmodule.c"
        var $11=((($10))|0)!=32; //@line 979 "mathmodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 979 "mathmodule.c"
      case 6: // $bb6
        var $12=HEAP[$p]; //@line 979 "mathmodule.c"
        var $ps7=$ps; //@line 979 "mathmodule.c"
        var $13=($ps7)!=($12); //@line 979 "mathmodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 979 "mathmodule.c"
      case 7: // $bb8
        var $14=HEAP[$m]; //@line 979 "mathmodule.c"
        var $15=((($14))|0) <= 32; //@line 979 "mathmodule.c"
        if ($15) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 979 "mathmodule.c"
      case 8: // $bb9
        var $16=HEAP[$p]; //@line 979 "mathmodule.c"
        var $17=($16)==0; //@line 979 "mathmodule.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 979 "mathmodule.c"
      case 9: // $bb10
        ___assert_fail(((__str12)&4294967295), ((__str1)&4294967295), 980, ((___PRETTY_FUNCTION___9121)&4294967295)); //@line 979 "mathmodule.c"
        throw "Reached an unreachable! Original .ll line: 2853"; //@line 979 "mathmodule.c"
      case 10: // $bb11
        var $18=HEAP[$iter]; //@line 982 "mathmodule.c"
        var $19=_PyIter_Next($18); //@line 982 "mathmodule.c"
        HEAP[$item]=$19; //@line 982 "mathmodule.c"
        var $20=HEAP[$item]; //@line 983 "mathmodule.c"
        var $21=($20)==0; //@line 983 "mathmodule.c"
        if ($21) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 983 "mathmodule.c"
      case 11: // $bb12
        var $22=_PyErr_Occurred(); //@line 984 "mathmodule.c"
        var $23=($22)!=0; //@line 984 "mathmodule.c"
        if ($23) { __label__ = 52; break; } else { __label__ = 12; break; } //@line 984 "mathmodule.c"
      case 12: // $bb13
        var $24=HEAP[$special_sum]; //@line 1032 "mathmodule.c"
        var $25=($24) != 0; //@line 1032 "mathmodule.c"
        if ($25) { __label__ = 34; break; } else { __label__ = 38; break; } //@line 1032 "mathmodule.c"
      case 13: // $bb14
        var $26=HEAP[$item]; //@line 988 "mathmodule.c"
        var $27=_PyFloat_AsDouble($26); //@line 988 "mathmodule.c"
        HEAP[$x]=$27; //@line 988 "mathmodule.c"
        var $28=HEAP[$item]; //@line 989 "mathmodule.c"
        var $29=(($28)&4294967295); //@line 989 "mathmodule.c"
        var $30=HEAP[$29]; //@line 989 "mathmodule.c"
        var $31=((($30) - 1)&4294967295); //@line 989 "mathmodule.c"
        var $32=HEAP[$item]; //@line 989 "mathmodule.c"
        var $33=(($32)&4294967295); //@line 989 "mathmodule.c"
        HEAP[$33]=$31; //@line 989 "mathmodule.c"
        var $34=HEAP[$item]; //@line 989 "mathmodule.c"
        var $35=(($34)&4294967295); //@line 989 "mathmodule.c"
        var $36=HEAP[$35]; //@line 989 "mathmodule.c"
        var $37=((($36))|0)==0; //@line 989 "mathmodule.c"
        if ($37) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 989 "mathmodule.c"
      case 14: // $bb15
        var $38=HEAP[$item]; //@line 989 "mathmodule.c"
        var $39=(($38+4)&4294967295); //@line 989 "mathmodule.c"
        var $40=HEAP[$39]; //@line 989 "mathmodule.c"
        var $41=(($40+24)&4294967295); //@line 989 "mathmodule.c"
        var $42=HEAP[$41]; //@line 989 "mathmodule.c"
        var $43=HEAP[$item]; //@line 989 "mathmodule.c"
        FUNCTION_TABLE[$42]($43); //@line 989 "mathmodule.c"
        __label__ = 15; break; //@line 989 "mathmodule.c"
      case 15: // $bb16
        var $44=_PyErr_Occurred(); //@line 990 "mathmodule.c"
        var $45=($44)!=0; //@line 990 "mathmodule.c"
        if ($45) { __label__ = 52; break; } else { __label__ = 16; break; } //@line 990 "mathmodule.c"
      case 16: // $bb17
        var $46=HEAP[$x]; //@line 993 "mathmodule.c"
        HEAP[$xsave]=$46; //@line 993 "mathmodule.c"
        HEAP[$j]=0; //@line 994 "mathmodule.c"
        var $47=HEAP[$j]; //@line 994 "mathmodule.c"
        HEAP[$i]=$47; //@line 994 "mathmodule.c"
        __label__ = 22; break; //@line 994 "mathmodule.c"
      case 17: // $bb18
        var $48=HEAP[$p]; //@line 995 "mathmodule.c"
        var $49=HEAP[$j]; //@line 995 "mathmodule.c"
        var $50=(($48+8*$49)&4294967295); //@line 995 "mathmodule.c"
        var $51=HEAP[$50]; //@line 995 "mathmodule.c"
        HEAP[$y]=$51; //@line 995 "mathmodule.c"
        var $52=HEAP[$x]; //@line 996 "mathmodule.c"
        var $53=_fabs($52); //@line 996 "mathmodule.c"
        var $54=HEAP[$y]; //@line 996 "mathmodule.c"
        var $55=_fabs($54); //@line 996 "mathmodule.c"
        var $56=($53) < ($55); //@line 996 "mathmodule.c"
        if ($56) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 996 "mathmodule.c"
      case 18: // $bb19
        var $57=HEAP[$x]; //@line 997 "mathmodule.c"
        HEAP[$t]=$57; //@line 997 "mathmodule.c"
        var $58=HEAP[$y]; //@line 997 "mathmodule.c"
        HEAP[$x]=$58; //@line 997 "mathmodule.c"
        var $59=HEAP[$t]; //@line 997 "mathmodule.c"
        HEAP[$y]=$59; //@line 997 "mathmodule.c"
        __label__ = 19; break; //@line 997 "mathmodule.c"
      case 19: // $bb20
        var $60=HEAP[$x]; //@line 999 "mathmodule.c"
        var $61=HEAP[$y]; //@line 999 "mathmodule.c"
        var $62=($60) + ($61); //@line 999 "mathmodule.c"
        HEAP[$hi]=$62; //@line 999 "mathmodule.c"
        var $63=HEAP[$hi]; //@line 1000 "mathmodule.c"
        var $64=HEAP[$x]; //@line 1000 "mathmodule.c"
        var $65=($63) - ($64); //@line 1000 "mathmodule.c"
        HEAP[$yr]=$65; //@line 1000 "mathmodule.c"
        var $66=HEAP[$yr]; //@line 1001 "mathmodule.c"
        var $67=HEAP[$y]; //@line 1001 "mathmodule.c"
        var $68=($67) - ($66); //@line 1001 "mathmodule.c"
        HEAP[$lo]=$68; //@line 1001 "mathmodule.c"
        var $69=HEAP[$lo]; //@line 1002 "mathmodule.c"
        var $70=($69) != 0; //@line 1002 "mathmodule.c"
        if ($70) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1002 "mathmodule.c"
      case 20: // $bb21
        var $71=HEAP[$p]; //@line 1003 "mathmodule.c"
        var $72=HEAP[$lo]; //@line 1003 "mathmodule.c"
        var $73=HEAP[$i]; //@line 1003 "mathmodule.c"
        var $74=(($71+8*$73)&4294967295); //@line 1003 "mathmodule.c"
        HEAP[$74]=$72; //@line 1003 "mathmodule.c"
        var $75=HEAP[$i]; //@line 1003 "mathmodule.c"
        var $76=((($75) + 1)&4294967295); //@line 1003 "mathmodule.c"
        HEAP[$i]=$76; //@line 1003 "mathmodule.c"
        __label__ = 21; break; //@line 1003 "mathmodule.c"
      case 21: // $bb22
        var $77=HEAP[$hi]; //@line 1004 "mathmodule.c"
        HEAP[$x]=$77; //@line 1004 "mathmodule.c"
        var $78=HEAP[$j]; //@line 994 "mathmodule.c"
        var $79=((($78) + 1)&4294967295); //@line 994 "mathmodule.c"
        HEAP[$j]=$79; //@line 994 "mathmodule.c"
        __label__ = 22; break; //@line 994 "mathmodule.c"
      case 22: // $bb23
        var $80=HEAP[$j]; //@line 994 "mathmodule.c"
        var $81=HEAP[$n]; //@line 994 "mathmodule.c"
        var $82=((($80))|0) < ((($81))|0); //@line 994 "mathmodule.c"
        if ($82) { __label__ = 17; break; } else { __label__ = 23; break; } //@line 994 "mathmodule.c"
      case 23: // $bb24
        var $83=HEAP[$i]; //@line 1007 "mathmodule.c"
        HEAP[$n]=$83; //@line 1007 "mathmodule.c"
        var $84=HEAP[$x]; //@line 1008 "mathmodule.c"
        var $85=($84) != 0; //@line 1008 "mathmodule.c"
        if ($85) { __label__ = 24; break; } else { __label__ = 33; break; } //@line 1008 "mathmodule.c"
      case 24: // $bb25
        var $86=HEAP[$x]; //@line 1009 "mathmodule.c"
        var $87=___finite($86); //@line 1009 "mathmodule.c"
        var $88=((($87))|0)==0; //@line 1009 "mathmodule.c"
        if ($88) { __label__ = 25; break; } else { __label__ = 30; break; } //@line 1009 "mathmodule.c"
      case 25: // $bb26
        var $89=HEAP[$xsave]; //@line 1014 "mathmodule.c"
        var $90=___finite($89); //@line 1014 "mathmodule.c"
        var $91=((($90))|0)!=0; //@line 1014 "mathmodule.c"
        if ($91) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1014 "mathmodule.c"
      case 26: // $bb27
        var $92=HEAP[_PyExc_OverflowError]; //@line 1015 "mathmodule.c"
        _PyErr_SetString($92, ((__str13)&4294967295)); //@line 1015 "mathmodule.c"
        __label__ = 52; break; //@line 1015 "mathmodule.c"
      case 27: // $bb28
        var $93=HEAP[$xsave]; //@line 1019 "mathmodule.c"
        var $94=___isinf($93); //@line 1019 "mathmodule.c"
        var $95=((($94))|0)!=0; //@line 1019 "mathmodule.c"
        if ($95) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1019 "mathmodule.c"
      case 28: // $bb29
        var $96=HEAP[$inf_sum]; //@line 1020 "mathmodule.c"
        var $97=HEAP[$xsave]; //@line 1020 "mathmodule.c"
        var $98=($96) + ($97); //@line 1020 "mathmodule.c"
        HEAP[$inf_sum]=$98; //@line 1020 "mathmodule.c"
        __label__ = 29; break; //@line 1020 "mathmodule.c"
      case 29: // $bb30
        var $99=HEAP[$special_sum]; //@line 1021 "mathmodule.c"
        var $100=HEAP[$xsave]; //@line 1021 "mathmodule.c"
        var $101=($99) + ($100); //@line 1021 "mathmodule.c"
        HEAP[$special_sum]=$101; //@line 1021 "mathmodule.c"
        HEAP[$n]=0; //@line 1023 "mathmodule.c"
        __label__ = 33; break; //@line 1023 "mathmodule.c"
      case 30: // $bb31
        var $102=HEAP[$m]; //@line 1025 "mathmodule.c"
        var $103=HEAP[$n]; //@line 1025 "mathmodule.c"
        var $104=((($103))|0) < ((($102))|0); //@line 1025 "mathmodule.c"
        if ($104) { __label__ = 32; break; } else { __label__ = 31; break; } //@line 1025 "mathmodule.c"
      case 31: // $bb32
        var $105=HEAP[$n]; //@line 1025 "mathmodule.c"
        var $ps33=$ps; //@line 1025 "mathmodule.c"
        var $106=__fsum_realloc($p, $105, $ps33, $m); //@line 1025 "mathmodule.c"
        var $107=((($106))|0)!=0; //@line 1025 "mathmodule.c"
        if ($107) { __label__ = 52; break; } else { __label__ = 32; break; } //@line 1025 "mathmodule.c"
      case 32: // $bb34
        var $108=HEAP[$p]; //@line 1028 "mathmodule.c"
        var $109=HEAP[$n]; //@line 1028 "mathmodule.c"
        var $110=(($108+8*$109)&4294967295); //@line 1028 "mathmodule.c"
        var $111=HEAP[$x]; //@line 1028 "mathmodule.c"
        HEAP[$110]=$111; //@line 1028 "mathmodule.c"
        var $112=HEAP[$n]; //@line 1028 "mathmodule.c"
        var $113=((($112) + 1)&4294967295); //@line 1028 "mathmodule.c"
        HEAP[$n]=$113; //@line 1028 "mathmodule.c"
        __label__ = 33; break; //@line 1028 "mathmodule.c"
      case 33: // $bb35
        __label__ = 2; break; //@line 1028 "mathmodule.c"
      case 34: // $bb36
        var $114=HEAP[$inf_sum]; //@line 1033 "mathmodule.c"
        var $115=___isnan($114); //@line 1033 "mathmodule.c"
        var $116=((($115))|0)!=0; //@line 1033 "mathmodule.c"
        if ($116) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1033 "mathmodule.c"
      case 35: // $bb37
        var $117=HEAP[_PyExc_ValueError]; //@line 1034 "mathmodule.c"
        _PyErr_SetString($117, ((__str14)&4294967295)); //@line 1034 "mathmodule.c"
        __label__ = 37; break; //@line 1034 "mathmodule.c"
      case 36: // $bb38
        var $118=HEAP[$special_sum]; //@line 1037 "mathmodule.c"
        var $119=_PyFloat_FromDouble($118); //@line 1037 "mathmodule.c"
        HEAP[$sum]=$119; //@line 1037 "mathmodule.c"
        __label__ = 37; break; //@line 1037 "mathmodule.c"
      case 37: // $bb39
        __label__ = 52; break; //@line 1037 "mathmodule.c"
      case 38: // $bb40
        HEAP[$hi]=0; //@line 1041 "mathmodule.c"
        var $120=HEAP[$n]; //@line 1042 "mathmodule.c"
        var $121=((($120))|0) > 0; //@line 1042 "mathmodule.c"
        if ($121) { __label__ = 39; break; } else { __label__ = 51; break; } //@line 1042 "mathmodule.c"
      case 39: // $bb41
        var $122=HEAP[$p]; //@line 1043 "mathmodule.c"
        var $123=HEAP[$n]; //@line 1043 "mathmodule.c"
        var $124=((($123) - 1)&4294967295); //@line 1043 "mathmodule.c"
        HEAP[$n]=$124; //@line 1043 "mathmodule.c"
        var $125=HEAP[$n]; //@line 1043 "mathmodule.c"
        var $126=(($122+8*$125)&4294967295); //@line 1043 "mathmodule.c"
        var $127=HEAP[$126]; //@line 1043 "mathmodule.c"
        HEAP[$hi]=$127; //@line 1043 "mathmodule.c"
        __label__ = 43; break; //@line 1043 "mathmodule.c"
      case 40: // $bb42
        var $128=HEAP[$hi]; //@line 1047 "mathmodule.c"
        HEAP[$x]=$128; //@line 1047 "mathmodule.c"
        var $129=HEAP[$p]; //@line 1048 "mathmodule.c"
        var $130=HEAP[$n]; //@line 1048 "mathmodule.c"
        var $131=((($130) - 1)&4294967295); //@line 1048 "mathmodule.c"
        HEAP[$n]=$131; //@line 1048 "mathmodule.c"
        var $132=HEAP[$n]; //@line 1048 "mathmodule.c"
        var $133=(($129+8*$132)&4294967295); //@line 1048 "mathmodule.c"
        var $134=HEAP[$133]; //@line 1048 "mathmodule.c"
        HEAP[$y]=$134; //@line 1048 "mathmodule.c"
        var $135=HEAP[$y]; //@line 1049 "mathmodule.c"
        var $136=_fabs($135); //@line 1049 "mathmodule.c"
        var $137=HEAP[$x]; //@line 1049 "mathmodule.c"
        var $138=_fabs($137); //@line 1049 "mathmodule.c"
        var $139=($136) >= ($138); //@line 1049 "mathmodule.c"
        if ($139) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1049 "mathmodule.c"
      case 41: // $bb43
        ___assert_fail(((__str15)&4294967295), ((__str1)&4294967295), 1049, ((___PRETTY_FUNCTION___9121)&4294967295)); //@line 1049 "mathmodule.c"
        throw "Reached an unreachable! Original .ll line: 3106"; //@line 1049 "mathmodule.c"
      case 42: // $bb44
        var $140=HEAP[$x]; //@line 1050 "mathmodule.c"
        var $141=HEAP[$y]; //@line 1050 "mathmodule.c"
        var $142=($140) + ($141); //@line 1050 "mathmodule.c"
        HEAP[$hi]=$142; //@line 1050 "mathmodule.c"
        var $143=HEAP[$hi]; //@line 1051 "mathmodule.c"
        var $144=HEAP[$x]; //@line 1051 "mathmodule.c"
        var $145=($143) - ($144); //@line 1051 "mathmodule.c"
        HEAP[$yr]=$145; //@line 1051 "mathmodule.c"
        var $146=HEAP[$yr]; //@line 1052 "mathmodule.c"
        var $147=HEAP[$y]; //@line 1052 "mathmodule.c"
        var $148=($147) - ($146); //@line 1052 "mathmodule.c"
        HEAP[$lo]=$148; //@line 1052 "mathmodule.c"
        var $149=HEAP[$lo]; //@line 1053 "mathmodule.c"
        var $150=($149) != 0; //@line 1053 "mathmodule.c"
        if ($150) { __label__ = 44; break; } else { __label__ = 43; break; } //@line 1053 "mathmodule.c"
      case 43: // $bb45
        var $151=HEAP[$n]; //@line 1046 "mathmodule.c"
        var $152=((($151))|0) > 0; //@line 1046 "mathmodule.c"
        if ($152) { __label__ = 40; break; } else { __label__ = 44; break; } //@line 1046 "mathmodule.c"
      case 44: // $bb46
        var $153=HEAP[$n]; //@line 1061 "mathmodule.c"
        var $154=((($153))|0) > 0; //@line 1061 "mathmodule.c"
        if ($154) { __label__ = 45; break; } else { __label__ = 51; break; } //@line 1061 "mathmodule.c"
      case 45: // $bb47
        var $155=HEAP[$lo]; //@line 1061 "mathmodule.c"
        var $156=($155) >= 0; //@line 1061 "mathmodule.c"
        if ($156) { __label__ = 47; break; } else { __label__ = 46; break; } //@line 1061 "mathmodule.c"
      case 46: // $bb48
        var $157=HEAP[$p]; //@line 1061 "mathmodule.c"
        var $158=HEAP[$n]; //@line 1061 "mathmodule.c"
        var $159=((($158) - 1)&4294967295); //@line 1061 "mathmodule.c"
        var $160=(($157+8*$159)&4294967295); //@line 1061 "mathmodule.c"
        var $161=HEAP[$160]; //@line 1061 "mathmodule.c"
        var $162=($161) < 0; //@line 1061 "mathmodule.c"
        if ($162) { __label__ = 49; break; } else { __label__ = 47; break; } //@line 1061 "mathmodule.c"
      case 47: // $bb49
        var $163=HEAP[$lo]; //@line 1061 "mathmodule.c"
        var $164=($163) <= 0; //@line 1061 "mathmodule.c"
        if ($164) { __label__ = 51; break; } else { __label__ = 48; break; } //@line 1061 "mathmodule.c"
      case 48: // $bb50
        var $165=HEAP[$p]; //@line 1061 "mathmodule.c"
        var $166=HEAP[$n]; //@line 1061 "mathmodule.c"
        var $167=((($166) - 1)&4294967295); //@line 1061 "mathmodule.c"
        var $168=(($165+8*$167)&4294967295); //@line 1061 "mathmodule.c"
        var $169=HEAP[$168]; //@line 1061 "mathmodule.c"
        var $170=($169) > 0; //@line 1061 "mathmodule.c"
        if ($170) { __label__ = 49; break; } else { __label__ = 51; break; } //@line 1061 "mathmodule.c"
      case 49: // $bb51
        var $171=HEAP[$lo]; //@line 1063 "mathmodule.c"
        var $172=($171) * 2; //@line 1063 "mathmodule.c"
        HEAP[$y]=$172; //@line 1063 "mathmodule.c"
        var $173=HEAP[$hi]; //@line 1064 "mathmodule.c"
        var $174=HEAP[$y]; //@line 1064 "mathmodule.c"
        var $175=($173) + ($174); //@line 1064 "mathmodule.c"
        HEAP[$x]=$175; //@line 1064 "mathmodule.c"
        var $176=HEAP[$hi]; //@line 1065 "mathmodule.c"
        var $177=HEAP[$x]; //@line 1065 "mathmodule.c"
        var $178=($177) - ($176); //@line 1065 "mathmodule.c"
        HEAP[$yr]=$178; //@line 1065 "mathmodule.c"
        var $179=HEAP[$yr]; //@line 1066 "mathmodule.c"
        var $180=HEAP[$y]; //@line 1066 "mathmodule.c"
        var $181=($180) == ($179); //@line 1066 "mathmodule.c"
        if ($181) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 1066 "mathmodule.c"
      case 50: // $bb52
        var $182=HEAP[$x]; //@line 1067 "mathmodule.c"
        HEAP[$hi]=$182; //@line 1067 "mathmodule.c"
        __label__ = 51; break; //@line 1067 "mathmodule.c"
      case 51: // $bb53
        var $183=HEAP[$hi]; //@line 1070 "mathmodule.c"
        var $184=_PyFloat_FromDouble($183); //@line 1070 "mathmodule.c"
        HEAP[$sum]=$184; //@line 1070 "mathmodule.c"
        __label__ = 52; break; //@line 1072 "mathmodule.c"
      case 52: // $_fsum_error
        var $185=HEAP[$iter]; //@line 1074 "mathmodule.c"
        var $186=(($185)&4294967295); //@line 1074 "mathmodule.c"
        var $187=HEAP[$186]; //@line 1074 "mathmodule.c"
        var $188=((($187) - 1)&4294967295); //@line 1074 "mathmodule.c"
        var $189=HEAP[$iter]; //@line 1074 "mathmodule.c"
        var $190=(($189)&4294967295); //@line 1074 "mathmodule.c"
        HEAP[$190]=$188; //@line 1074 "mathmodule.c"
        var $191=HEAP[$iter]; //@line 1074 "mathmodule.c"
        var $192=(($191)&4294967295); //@line 1074 "mathmodule.c"
        var $193=HEAP[$192]; //@line 1074 "mathmodule.c"
        var $194=((($193))|0)==0; //@line 1074 "mathmodule.c"
        if ($194) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 1074 "mathmodule.c"
      case 53: // $bb54
        var $195=HEAP[$iter]; //@line 1074 "mathmodule.c"
        var $196=(($195+4)&4294967295); //@line 1074 "mathmodule.c"
        var $197=HEAP[$196]; //@line 1074 "mathmodule.c"
        var $198=(($197+24)&4294967295); //@line 1074 "mathmodule.c"
        var $199=HEAP[$198]; //@line 1074 "mathmodule.c"
        var $200=HEAP[$iter]; //@line 1074 "mathmodule.c"
        FUNCTION_TABLE[$199]($200); //@line 1074 "mathmodule.c"
        __label__ = 54; break; //@line 1074 "mathmodule.c"
      case 54: // $bb55
        var $201=HEAP[$p]; //@line 1075 "mathmodule.c"
        var $ps56=$ps; //@line 1075 "mathmodule.c"
        var $202=($ps56)!=($201); //@line 1075 "mathmodule.c"
        if ($202) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1075 "mathmodule.c"
      case 55: // $bb57
        var $203=HEAP[$p]; //@line 1076 "mathmodule.c"
        var $204=$203; //@line 1076 "mathmodule.c"
        _PyMem_Free($204); //@line 1076 "mathmodule.c"
        __label__ = 56; break; //@line 1076 "mathmodule.c"
      case 56: // $bb58
        var $205=HEAP[$sum]; //@line 1077 "mathmodule.c"
        HEAP[$0]=$205; //@line 1077 "mathmodule.c"
        __label__ = 57; break; //@line 1077 "mathmodule.c"
      case 57: // $bb59
        var $206=HEAP[$0]; //@line 973 "mathmodule.c"
        HEAP[$retval]=$206; //@line 973 "mathmodule.c"
        __label__ = 58; break; //@line 973 "mathmodule.c"
      case 58: // $return
        var $retval60=HEAP[$retval]; //@line 973 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval60; //@line 973 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_factorial($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $x=__stackBase__+20;
        var $result=__stackBase__+24;
        var $iobj=__stackBase__+28;
        var $newresult=__stackBase__+32;
        var $lx=__stackBase__+36;
        var $dx=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 1093 "mathmodule.c"
        var $2=(($1+4)&4294967295); //@line 1093 "mathmodule.c"
        var $3=HEAP[$2]; //@line 1093 "mathmodule.c"
        var $4=($3)==(_PyFloat_Type); //@line 1093 "mathmodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1093 "mathmodule.c"
      case 1: // $bb
        var $5=HEAP[$arg_addr]; //@line 1093 "mathmodule.c"
        var $6=(($5+4)&4294967295); //@line 1093 "mathmodule.c"
        var $7=HEAP[$6]; //@line 1093 "mathmodule.c"
        var $8=_PyType_IsSubtype($7, _PyFloat_Type); //@line 1093 "mathmodule.c"
        var $9=((($8))|0)!=0; //@line 1093 "mathmodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 10; break; } //@line 1093 "mathmodule.c"
      case 2: // $bb1
        var $10=HEAP[$arg_addr]; //@line 1095 "mathmodule.c"
        var $11=$10; //@line 1095 "mathmodule.c"
        var $12=(($11+8)&4294967295); //@line 1095 "mathmodule.c"
        var $13=HEAP[$12]; //@line 1095 "mathmodule.c"
        HEAP[$dx]=$13; //@line 1095 "mathmodule.c"
        var $14=HEAP[$dx]; //@line 1096 "mathmodule.c"
        var $15=___finite($14); //@line 1096 "mathmodule.c"
        var $16=((($15))|0)==0; //@line 1096 "mathmodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1096 "mathmodule.c"
      case 3: // $bb2
        var $17=HEAP[$dx]; //@line 1096 "mathmodule.c"
        var $18=_floor($17); //@line 1096 "mathmodule.c"
        var $19=HEAP[$dx]; //@line 1096 "mathmodule.c"
        var $20=($18) != ($19); //@line 1096 "mathmodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1096 "mathmodule.c"
      case 4: // $bb3
        var $21=HEAP[_PyExc_ValueError]; //@line 1097 "mathmodule.c"
        _PyErr_SetString($21, ((__str16)&4294967295)); //@line 1097 "mathmodule.c"
        HEAP[$0]=0; //@line 1099 "mathmodule.c"
        __label__ = 31; break; //@line 1099 "mathmodule.c"
      case 5: // $bb4
        var $22=HEAP[$dx]; //@line 1101 "mathmodule.c"
        var $23=_PyLong_FromDouble($22); //@line 1101 "mathmodule.c"
        HEAP[$lx]=$23; //@line 1101 "mathmodule.c"
        var $24=HEAP[$lx]; //@line 1102 "mathmodule.c"
        var $25=($24)==0; //@line 1102 "mathmodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1102 "mathmodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 1103 "mathmodule.c"
        __label__ = 31; break; //@line 1103 "mathmodule.c"
      case 7: // $bb6
        var $26=HEAP[$lx]; //@line 1104 "mathmodule.c"
        var $27=_PyLong_AsLong($26); //@line 1104 "mathmodule.c"
        HEAP[$x]=$27; //@line 1104 "mathmodule.c"
        var $28=HEAP[$lx]; //@line 1105 "mathmodule.c"
        var $29=(($28)&4294967295); //@line 1105 "mathmodule.c"
        var $30=HEAP[$29]; //@line 1105 "mathmodule.c"
        var $31=((($30) - 1)&4294967295); //@line 1105 "mathmodule.c"
        var $32=HEAP[$lx]; //@line 1105 "mathmodule.c"
        var $33=(($32)&4294967295); //@line 1105 "mathmodule.c"
        HEAP[$33]=$31; //@line 1105 "mathmodule.c"
        var $34=HEAP[$lx]; //@line 1105 "mathmodule.c"
        var $35=(($34)&4294967295); //@line 1105 "mathmodule.c"
        var $36=HEAP[$35]; //@line 1105 "mathmodule.c"
        var $37=((($36))|0)==0; //@line 1105 "mathmodule.c"
        if ($37) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1105 "mathmodule.c"
      case 8: // $bb7
        var $38=HEAP[$lx]; //@line 1105 "mathmodule.c"
        var $39=(($38+4)&4294967295); //@line 1105 "mathmodule.c"
        var $40=HEAP[$39]; //@line 1105 "mathmodule.c"
        var $41=(($40+24)&4294967295); //@line 1105 "mathmodule.c"
        var $42=HEAP[$41]; //@line 1105 "mathmodule.c"
        var $43=HEAP[$lx]; //@line 1105 "mathmodule.c"
        FUNCTION_TABLE[$42]($43); //@line 1105 "mathmodule.c"
        __label__ = 9; break; //@line 1105 "mathmodule.c"
      case 9: // $bb8
        __label__ = 11; break; //@line 1105 "mathmodule.c"
      case 10: // $bb9
        var $44=HEAP[$arg_addr]; //@line 1108 "mathmodule.c"
        var $45=_PyInt_AsLong($44); //@line 1108 "mathmodule.c"
        HEAP[$x]=$45; //@line 1108 "mathmodule.c"
        __label__ = 11; break; //@line 1108 "mathmodule.c"
      case 11: // $bb10
        var $46=HEAP[$x]; //@line 1110 "mathmodule.c"
        var $47=((($46))|0)==-1; //@line 1110 "mathmodule.c"
        if ($47) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1110 "mathmodule.c"
      case 12: // $bb11
        var $48=_PyErr_Occurred(); //@line 1110 "mathmodule.c"
        var $49=($48)!=0; //@line 1110 "mathmodule.c"
        if ($49) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1110 "mathmodule.c"
      case 13: // $bb12
        HEAP[$0]=0; //@line 1111 "mathmodule.c"
        __label__ = 31; break; //@line 1111 "mathmodule.c"
      case 14: // $bb13
        var $50=HEAP[$x]; //@line 1112 "mathmodule.c"
        var $51=((($50))|0) < 0; //@line 1112 "mathmodule.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1112 "mathmodule.c"
      case 15: // $bb14
        var $52=HEAP[_PyExc_ValueError]; //@line 1113 "mathmodule.c"
        _PyErr_SetString($52, ((__str17)&4294967295)); //@line 1113 "mathmodule.c"
        HEAP[$0]=0; //@line 1115 "mathmodule.c"
        __label__ = 31; break; //@line 1115 "mathmodule.c"
      case 16: // $bb15
        var $53=_PyInt_FromLong(1); //@line 1118 "mathmodule.c"
        HEAP[$result]=$53; //@line 1118 "mathmodule.c"
        var $54=HEAP[$result]; //@line 1119 "mathmodule.c"
        var $55=($54)==0; //@line 1119 "mathmodule.c"
        if ($55) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1119 "mathmodule.c"
      case 17: // $bb16
        HEAP[$0]=0; //@line 1120 "mathmodule.c"
        __label__ = 31; break; //@line 1120 "mathmodule.c"
      case 18: // $bb17
        HEAP[$i]=1; //@line 1121 "mathmodule.c"
        __label__ = 26; break; //@line 1121 "mathmodule.c"
      case 19: // $bb18
        var $56=HEAP[$i]; //@line 1122 "mathmodule.c"
        var $57=_PyInt_FromLong($56); //@line 1122 "mathmodule.c"
        HEAP[$iobj]=$57; //@line 1122 "mathmodule.c"
        var $58=HEAP[$iobj]; //@line 1123 "mathmodule.c"
        var $59=($58)==0; //@line 1123 "mathmodule.c"
        if ($59) { __label__ = 28; break; } else { __label__ = 20; break; } //@line 1123 "mathmodule.c"
      case 20: // $bb19
        var $60=HEAP[$result]; //@line 1125 "mathmodule.c"
        var $61=HEAP[$iobj]; //@line 1125 "mathmodule.c"
        var $62=_PyNumber_Multiply($60, $61); //@line 1125 "mathmodule.c"
        HEAP[$newresult]=$62; //@line 1125 "mathmodule.c"
        var $63=HEAP[$iobj]; //@line 1126 "mathmodule.c"
        var $64=(($63)&4294967295); //@line 1126 "mathmodule.c"
        var $65=HEAP[$64]; //@line 1126 "mathmodule.c"
        var $66=((($65) - 1)&4294967295); //@line 1126 "mathmodule.c"
        var $67=HEAP[$iobj]; //@line 1126 "mathmodule.c"
        var $68=(($67)&4294967295); //@line 1126 "mathmodule.c"
        HEAP[$68]=$66; //@line 1126 "mathmodule.c"
        var $69=HEAP[$iobj]; //@line 1126 "mathmodule.c"
        var $70=(($69)&4294967295); //@line 1126 "mathmodule.c"
        var $71=HEAP[$70]; //@line 1126 "mathmodule.c"
        var $72=((($71))|0)==0; //@line 1126 "mathmodule.c"
        if ($72) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1126 "mathmodule.c"
      case 21: // $bb20
        var $73=HEAP[$iobj]; //@line 1126 "mathmodule.c"
        var $74=(($73+4)&4294967295); //@line 1126 "mathmodule.c"
        var $75=HEAP[$74]; //@line 1126 "mathmodule.c"
        var $76=(($75+24)&4294967295); //@line 1126 "mathmodule.c"
        var $77=HEAP[$76]; //@line 1126 "mathmodule.c"
        var $78=HEAP[$iobj]; //@line 1126 "mathmodule.c"
        FUNCTION_TABLE[$77]($78); //@line 1126 "mathmodule.c"
        __label__ = 22; break; //@line 1126 "mathmodule.c"
      case 22: // $bb21
        var $79=HEAP[$newresult]; //@line 1127 "mathmodule.c"
        var $80=($79)==0; //@line 1127 "mathmodule.c"
        if ($80) { __label__ = 28; break; } else { __label__ = 23; break; } //@line 1127 "mathmodule.c"
      case 23: // $bb22
        var $81=HEAP[$result]; //@line 1129 "mathmodule.c"
        var $82=(($81)&4294967295); //@line 1129 "mathmodule.c"
        var $83=HEAP[$82]; //@line 1129 "mathmodule.c"
        var $84=((($83) - 1)&4294967295); //@line 1129 "mathmodule.c"
        var $85=HEAP[$result]; //@line 1129 "mathmodule.c"
        var $86=(($85)&4294967295); //@line 1129 "mathmodule.c"
        HEAP[$86]=$84; //@line 1129 "mathmodule.c"
        var $87=HEAP[$result]; //@line 1129 "mathmodule.c"
        var $88=(($87)&4294967295); //@line 1129 "mathmodule.c"
        var $89=HEAP[$88]; //@line 1129 "mathmodule.c"
        var $90=((($89))|0)==0; //@line 1129 "mathmodule.c"
        if ($90) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1129 "mathmodule.c"
      case 24: // $bb23
        var $91=HEAP[$result]; //@line 1129 "mathmodule.c"
        var $92=(($91+4)&4294967295); //@line 1129 "mathmodule.c"
        var $93=HEAP[$92]; //@line 1129 "mathmodule.c"
        var $94=(($93+24)&4294967295); //@line 1129 "mathmodule.c"
        var $95=HEAP[$94]; //@line 1129 "mathmodule.c"
        var $96=HEAP[$result]; //@line 1129 "mathmodule.c"
        FUNCTION_TABLE[$95]($96); //@line 1129 "mathmodule.c"
        __label__ = 25; break; //@line 1129 "mathmodule.c"
      case 25: // $bb24
        var $97=HEAP[$newresult]; //@line 1130 "mathmodule.c"
        HEAP[$result]=$97; //@line 1130 "mathmodule.c"
        var $98=HEAP[$i]; //@line 1121 "mathmodule.c"
        var $99=((($98) + 1)&4294967295); //@line 1121 "mathmodule.c"
        HEAP[$i]=$99; //@line 1121 "mathmodule.c"
        __label__ = 26; break; //@line 1121 "mathmodule.c"
      case 26: // $bb25
        var $100=HEAP[$i]; //@line 1121 "mathmodule.c"
        var $101=HEAP[$x]; //@line 1121 "mathmodule.c"
        var $102=((($100))|0) <= ((($101))|0); //@line 1121 "mathmodule.c"
        if ($102) { __label__ = 19; break; } else { __label__ = 27; break; } //@line 1121 "mathmodule.c"
      case 27: // $bb26
        var $103=HEAP[$result]; //@line 1132 "mathmodule.c"
        HEAP[$0]=$103; //@line 1132 "mathmodule.c"
        __label__ = 31; break; //@line 1132 "mathmodule.c"
      case 28: // $error
        var $104=HEAP[$result]; //@line 1135 "mathmodule.c"
        var $105=(($104)&4294967295); //@line 1135 "mathmodule.c"
        var $106=HEAP[$105]; //@line 1135 "mathmodule.c"
        var $107=((($106) - 1)&4294967295); //@line 1135 "mathmodule.c"
        var $108=HEAP[$result]; //@line 1135 "mathmodule.c"
        var $109=(($108)&4294967295); //@line 1135 "mathmodule.c"
        HEAP[$109]=$107; //@line 1135 "mathmodule.c"
        var $110=HEAP[$result]; //@line 1135 "mathmodule.c"
        var $111=(($110)&4294967295); //@line 1135 "mathmodule.c"
        var $112=HEAP[$111]; //@line 1135 "mathmodule.c"
        var $113=((($112))|0)==0; //@line 1135 "mathmodule.c"
        if ($113) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1135 "mathmodule.c"
      case 29: // $bb27
        var $114=HEAP[$result]; //@line 1135 "mathmodule.c"
        var $115=(($114+4)&4294967295); //@line 1135 "mathmodule.c"
        var $116=HEAP[$115]; //@line 1135 "mathmodule.c"
        var $117=(($116+24)&4294967295); //@line 1135 "mathmodule.c"
        var $118=HEAP[$117]; //@line 1135 "mathmodule.c"
        var $119=HEAP[$result]; //@line 1135 "mathmodule.c"
        FUNCTION_TABLE[$118]($119); //@line 1135 "mathmodule.c"
        __label__ = 30; break; //@line 1135 "mathmodule.c"
      case 30: // $bb28
        HEAP[$0]=0; //@line 1136 "mathmodule.c"
        __label__ = 31; break; //@line 1136 "mathmodule.c"
      case 31: // $bb29
        var $120=HEAP[$0]; //@line 1099 "mathmodule.c"
        HEAP[$retval]=$120; //@line 1099 "mathmodule.c"
        __label__ = 32; break; //@line 1099 "mathmodule.c"
      case 32: // $return
        var $retval30=HEAP[$retval]; //@line 1099 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval30; //@line 1099 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_trunc($self, $number) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $number_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$number_addr]=$number;
        var $1=HEAP[$number_addr]; //@line 1147 "mathmodule.c"
        var $2=_PyObject_CallMethod($1, ((__str18)&4294967295), 0); //@line 1147 "mathmodule.c"
        HEAP[$0]=$2; //@line 1147 "mathmodule.c"
        var $3=HEAP[$0]; //@line 1147 "mathmodule.c"
        HEAP[$retval]=$3; //@line 1147 "mathmodule.c"
        __label__ = 1; break; //@line 1147 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1147 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1147 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_frexp($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $x=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 1159 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 1159 "mathmodule.c"
        HEAP[$x]=$2; //@line 1159 "mathmodule.c"
        var $3=HEAP[$x]; //@line 1160 "mathmodule.c"
        var $4=($3) == -1; //@line 1160 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1160 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1160 "mathmodule.c"
        var $6=($5)!=0; //@line 1160 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1160 "mathmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1161 "mathmodule.c"
        __label__ = 9; break; //@line 1161 "mathmodule.c"
      case 3: // $bb2
        var $7=HEAP[$x]; //@line 1164 "mathmodule.c"
        var $8=___isnan($7); //@line 1164 "mathmodule.c"
        var $9=((($8))|0)!=0; //@line 1164 "mathmodule.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 1164 "mathmodule.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 1164 "mathmodule.c"
        var $11=___isinf($10); //@line 1164 "mathmodule.c"
        var $12=((($11))|0)!=0; //@line 1164 "mathmodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 1164 "mathmodule.c"
      case 5: // $bb4
        var $13=HEAP[$x]; //@line 1164 "mathmodule.c"
        var $14=($13) == 0; //@line 1164 "mathmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1164 "mathmodule.c"
      case 6: // $bb5
        HEAP[$i]=0; //@line 1165 "mathmodule.c"
        __label__ = 8; break; //@line 1165 "mathmodule.c"
      case 7: // $bb6
        var $15=HEAP[$x]; //@line 1169 "mathmodule.c"
        var $16=_frexp($15, $i); //@line 1169 "mathmodule.c"
        HEAP[$x]=$16; //@line 1169 "mathmodule.c"
        __label__ = 8; break; //@line 1169 "mathmodule.c"
      case 8: // $bb7
        var $17=HEAP[$i]; //@line 1172 "mathmodule.c"
        var $18=HEAP[$x]; //@line 1172 "mathmodule.c"
        var $19=_Py_BuildValue(((__str19)&4294967295), $18, $17); //@line 1172 "mathmodule.c"
        HEAP[$0]=$19; //@line 1172 "mathmodule.c"
        __label__ = 9; break; //@line 1172 "mathmodule.c"
      case 9: // $bb8
        var $20=HEAP[$0]; //@line 1161 "mathmodule.c"
        HEAP[$retval]=$20; //@line 1161 "mathmodule.c"
        __label__ = 10; break; //@line 1161 "mathmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1161 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1161 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_ldexp($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_79=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $r=__stackBase__+28;
        var $oexp=__stackBase__+36;
        var $exp=__stackBase__+40;
        var $overflow=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1189 "mathmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str20)&4294967295), $x, $oexp); //@line 1189 "mathmodule.c"
        var $3=((($2))|0)==0; //@line 1189 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1189 "mathmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1190 "mathmodule.c"
        __label__ = 22; break; //@line 1190 "mathmodule.c"
      case 2: // $bb1
        var $4=HEAP[$oexp]; //@line 1192 "mathmodule.c"
        var $5=(($4+4)&4294967295); //@line 1192 "mathmodule.c"
        var $6=HEAP[$5]; //@line 1192 "mathmodule.c"
        var $7=(($6+84)&4294967295); //@line 1192 "mathmodule.c"
        var $8=HEAP[$7]; //@line 1192 "mathmodule.c"
        var $9=($8) & 16777216; //@line 1192 "mathmodule.c"
        var $10=((($9))|0)!=0; //@line 1192 "mathmodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1192 "mathmodule.c"
      case 3: // $bb2
        var $11=HEAP[$oexp]; //@line 1192 "mathmodule.c"
        var $12=(($11+4)&4294967295); //@line 1192 "mathmodule.c"
        var $13=HEAP[$12]; //@line 1192 "mathmodule.c"
        var $14=(($13+84)&4294967295); //@line 1192 "mathmodule.c"
        var $15=HEAP[$14]; //@line 1192 "mathmodule.c"
        var $16=($15) & 8388608; //@line 1192 "mathmodule.c"
        var $17=((($16))|0)!=0; //@line 1192 "mathmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 13; break; } //@line 1192 "mathmodule.c"
      case 4: // $bb3
        var $18=HEAP[$oexp]; //@line 1195 "mathmodule.c"
        var $19=_PyLong_AsLongAndOverflow($18, $overflow); //@line 1195 "mathmodule.c"
        HEAP[$exp]=$19; //@line 1195 "mathmodule.c"
        var $20=HEAP[$exp]; //@line 1196 "mathmodule.c"
        var $21=((($20))|0)==-1; //@line 1196 "mathmodule.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1196 "mathmodule.c"
      case 5: // $bb4
        var $22=_PyErr_Occurred(); //@line 1196 "mathmodule.c"
        var $23=($22)!=0; //@line 1196 "mathmodule.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1196 "mathmodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 1197 "mathmodule.c"
        __label__ = 22; break; //@line 1197 "mathmodule.c"
      case 7: // $bb6
        var $24=HEAP[$overflow]; //@line 1198 "mathmodule.c"
        var $25=((($24))|0)!=0; //@line 1198 "mathmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 1198 "mathmodule.c"
      case 8: // $bb7
        var $26=HEAP[$overflow]; //@line 1199 "mathmodule.c"
        var $27=((($26))|0) < 0; //@line 1199 "mathmodule.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1199 "mathmodule.c"
      case 9: // $bb8
        HEAP[$iftmp_79]=-2147483648; //@line 1199 "mathmodule.c"
        __label__ = 11; break; //@line 1199 "mathmodule.c"
      case 10: // $bb9
        HEAP[$iftmp_79]=2147483647; //@line 1199 "mathmodule.c"
        __label__ = 11; break; //@line 1199 "mathmodule.c"
      case 11: // $bb10
        var $28=HEAP[$iftmp_79]; //@line 1199 "mathmodule.c"
        HEAP[$exp]=$28; //@line 1199 "mathmodule.c"
        __label__ = 12; break; //@line 1199 "mathmodule.c"
      case 12: // $bb11
        var $29=HEAP[$x]; //@line 1208 "mathmodule.c"
        var $30=($29) == 0; //@line 1208 "mathmodule.c"
        if ($30) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 1208 "mathmodule.c"
      case 13: // $bb12
        var $31=HEAP[_PyExc_TypeError]; //@line 1202 "mathmodule.c"
        _PyErr_SetString($31, ((__str21)&4294967295)); //@line 1202 "mathmodule.c"
        HEAP[$0]=0; //@line 1205 "mathmodule.c"
        __label__ = 22; break; //@line 1205 "mathmodule.c"
      case 14: // $bb13
        var $32=HEAP[$x]; //@line 1208 "mathmodule.c"
        var $33=___finite($32); //@line 1208 "mathmodule.c"
        var $34=((($33))|0)==0; //@line 1208 "mathmodule.c"
        if ($34) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1208 "mathmodule.c"
      case 15: // $bb14
        var $35=HEAP[$x]; //@line 1210 "mathmodule.c"
        HEAP[$r]=$35; //@line 1210 "mathmodule.c"
        var $36=___errno_location(); //@line 1211 "mathmodule.c"
        HEAP[$36]=0; //@line 1211 "mathmodule.c"
        __label__ = 18; break; //@line 1211 "mathmodule.c"
      case 16: // $bb15
        var $37=___errno_location(); //@line 1221 "mathmodule.c"
        HEAP[$37]=0; //@line 1221 "mathmodule.c"
        var $38=HEAP[$x]; //@line 1223 "mathmodule.c"
        var $39=HEAP[$exp]; //@line 1223 "mathmodule.c"
        var $40=_ldexp($38, $39); //@line 1223 "mathmodule.c"
        HEAP[$r]=$40; //@line 1223 "mathmodule.c"
        var $41=HEAP[$r]; //@line 1225 "mathmodule.c"
        var $42=___isinf($41); //@line 1225 "mathmodule.c"
        var $43=((($42))|0)!=0; //@line 1225 "mathmodule.c"
        if ($43) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1225 "mathmodule.c"
      case 17: // $bb16
        var $44=___errno_location(); //@line 1226 "mathmodule.c"
        HEAP[$44]=34; //@line 1226 "mathmodule.c"
        __label__ = 18; break; //@line 1226 "mathmodule.c"
      case 18: // $bb17
        var $45=___errno_location(); //@line 1229 "mathmodule.c"
        var $46=HEAP[$45]; //@line 1229 "mathmodule.c"
        var $47=((($46))|0)!=0; //@line 1229 "mathmodule.c"
        if ($47) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 1229 "mathmodule.c"
      case 19: // $bb18
        var $48=HEAP[$r]; //@line 1229 "mathmodule.c"
        var $49=_is_error($48); //@line 1229 "mathmodule.c"
        var $50=((($49))|0)!=0; //@line 1229 "mathmodule.c"
        if ($50) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1229 "mathmodule.c"
      case 20: // $bb19
        HEAP[$0]=0; //@line 1230 "mathmodule.c"
        __label__ = 22; break; //@line 1230 "mathmodule.c"
      case 21: // $bb20
        var $51=HEAP[$r]; //@line 1231 "mathmodule.c"
        var $52=_PyFloat_FromDouble($51); //@line 1231 "mathmodule.c"
        HEAP[$0]=$52; //@line 1231 "mathmodule.c"
        __label__ = 22; break; //@line 1231 "mathmodule.c"
      case 22: // $bb21
        var $53=HEAP[$0]; //@line 1190 "mathmodule.c"
        HEAP[$retval]=$53; //@line 1190 "mathmodule.c"
        __label__ = 23; break; //@line 1190 "mathmodule.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 1190 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 1190 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_modf($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $y=__stackBase__+16;
        var $x=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 1241 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 1241 "mathmodule.c"
        HEAP[$x]=$2; //@line 1241 "mathmodule.c"
        var $3=HEAP[$x]; //@line 1242 "mathmodule.c"
        var $4=($3) == -1; //@line 1242 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1242 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1242 "mathmodule.c"
        var $6=($5)!=0; //@line 1242 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1242 "mathmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1243 "mathmodule.c"
        __label__ = 9; break; //@line 1243 "mathmodule.c"
      case 3: // $bb2
        var $7=HEAP[$x]; //@line 1246 "mathmodule.c"
        var $8=___finite($7); //@line 1246 "mathmodule.c"
        var $9=((($8))|0)==0; //@line 1246 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 1246 "mathmodule.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 1247 "mathmodule.c"
        var $11=___isinf($10); //@line 1247 "mathmodule.c"
        var $12=((($11))|0)!=0; //@line 1247 "mathmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1247 "mathmodule.c"
      case 5: // $bb4
        var $13=HEAP[$x]; //@line 1248 "mathmodule.c"
        var $14=_copysign(0, $13); //@line 1248 "mathmodule.c"
        var $15=HEAP[$x]; //@line 1248 "mathmodule.c"
        var $16=_Py_BuildValue(((__str22)&4294967295), $14, $15); //@line 1248 "mathmodule.c"
        HEAP[$0]=$16; //@line 1248 "mathmodule.c"
        __label__ = 9; break; //@line 1248 "mathmodule.c"
      case 6: // $bb5
        var $17=HEAP[$x]; //@line 1249 "mathmodule.c"
        var $18=___isnan($17); //@line 1249 "mathmodule.c"
        var $19=((($18))|0)!=0; //@line 1249 "mathmodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1249 "mathmodule.c"
      case 7: // $bb6
        var $20=HEAP[$x]; //@line 1250 "mathmodule.c"
        var $21=HEAP[$x]; //@line 1250 "mathmodule.c"
        var $22=_Py_BuildValue(((__str22)&4294967295), $20, $21); //@line 1250 "mathmodule.c"
        HEAP[$0]=$22; //@line 1250 "mathmodule.c"
        __label__ = 9; break; //@line 1250 "mathmodule.c"
      case 8: // $bb7
        var $23=___errno_location(); //@line 1253 "mathmodule.c"
        HEAP[$23]=0; //@line 1253 "mathmodule.c"
        var $24=HEAP[$x]; //@line 1255 "mathmodule.c"
        var $25=_modf($24, $y); //@line 1255 "mathmodule.c"
        HEAP[$x]=$25; //@line 1255 "mathmodule.c"
        var $26=HEAP[$y]; //@line 1257 "mathmodule.c"
        var $27=HEAP[$x]; //@line 1257 "mathmodule.c"
        var $28=_Py_BuildValue(((__str22)&4294967295), $27, $26); //@line 1257 "mathmodule.c"
        HEAP[$0]=$28; //@line 1257 "mathmodule.c"
        __label__ = 9; break; //@line 1257 "mathmodule.c"
      case 9: // $bb8
        var $29=HEAP[$0]; //@line 1243 "mathmodule.c"
        HEAP[$retval]=$29; //@line 1243 "mathmodule.c"
        __label__ = 10; break; //@line 1243 "mathmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1243 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1243 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _loghelper($arg, $func, $funcname) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $arg_addr=__stackBase__;
        var $func_addr=__stackBase__+4;
        var $funcname_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $e=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$arg_addr]=$arg;
        HEAP[$func_addr]=$func;
        HEAP[$funcname_addr]=$funcname;
        var $1=HEAP[$arg_addr]; //@line 1279 "mathmodule.c"
        var $2=(($1+4)&4294967295); //@line 1279 "mathmodule.c"
        var $3=HEAP[$2]; //@line 1279 "mathmodule.c"
        var $4=(($3+84)&4294967295); //@line 1279 "mathmodule.c"
        var $5=HEAP[$4]; //@line 1279 "mathmodule.c"
        var $6=($5) & 16777216; //@line 1279 "mathmodule.c"
        var $7=((($6))|0)!=0; //@line 1279 "mathmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 10; break; } //@line 1279 "mathmodule.c"
      case 1: // $bb
        var $8=HEAP[$arg_addr]; //@line 1282 "mathmodule.c"
        var $9=$8; //@line 1282 "mathmodule.c"
        var $10=__PyLong_Frexp($9, $e); //@line 1282 "mathmodule.c"
        HEAP[$x]=$10; //@line 1282 "mathmodule.c"
        var $11=HEAP[$x]; //@line 1283 "mathmodule.c"
        var $12=($11) == -1; //@line 1283 "mathmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 1283 "mathmodule.c"
      case 2: // $bb1
        var $13=_PyErr_Occurred(); //@line 1283 "mathmodule.c"
        var $14=($13)!=0; //@line 1283 "mathmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1283 "mathmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1284 "mathmodule.c"
        __label__ = 11; break; //@line 1284 "mathmodule.c"
      case 4: // $bb3
        var $15=HEAP[$x]; //@line 1285 "mathmodule.c"
        var $16=($15) <= 0; //@line 1285 "mathmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1285 "mathmodule.c"
      case 5: // $bb4
        var $17=HEAP[_PyExc_ValueError]; //@line 1286 "mathmodule.c"
        _PyErr_SetString($17, ((__str6)&4294967295)); //@line 1286 "mathmodule.c"
        HEAP[$0]=0; //@line 1288 "mathmodule.c"
        __label__ = 11; break; //@line 1288 "mathmodule.c"
      case 6: // $bb5
        var $18=HEAP[$e]; //@line 1292 "mathmodule.c"
        var $19=((($18))|0)==1; //@line 1292 "mathmodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1292 "mathmodule.c"
      case 7: // $bb6
        var $20=HEAP[$x]; //@line 1292 "mathmodule.c"
        var $21=($20) == 0.5; //@line 1292 "mathmodule.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1292 "mathmodule.c"
      case 8: // $bb7
        var $22=_PyFloat_FromDouble(0); //@line 1293 "mathmodule.c"
        HEAP[$0]=$22; //@line 1293 "mathmodule.c"
        __label__ = 11; break; //@line 1293 "mathmodule.c"
      case 9: // $bb8
        var $23=HEAP[$func_addr]; //@line 1295 "mathmodule.c"
        var $24=HEAP[$x]; //@line 1295 "mathmodule.c"
        var $25=FUNCTION_TABLE[$23]($24); //@line 1295 "mathmodule.c"
        var $26=HEAP[$func_addr]; //@line 1295 "mathmodule.c"
        var $27=FUNCTION_TABLE[$26](2); //@line 1295 "mathmodule.c"
        var $28=HEAP[$e]; //@line 1295 "mathmodule.c"
        var $29=((($28))|0); //@line 1295 "mathmodule.c"
        var $30=($27) * ($29); //@line 1295 "mathmodule.c"
        var $31=($25) + ($30); //@line 1295 "mathmodule.c"
        HEAP[$x]=$31; //@line 1295 "mathmodule.c"
        var $32=HEAP[$x]; //@line 1296 "mathmodule.c"
        var $33=_PyFloat_FromDouble($32); //@line 1296 "mathmodule.c"
        HEAP[$0]=$33; //@line 1296 "mathmodule.c"
        __label__ = 11; break; //@line 1296 "mathmodule.c"
      case 10: // $bb9
        var $34=HEAP[$arg_addr]; //@line 1300 "mathmodule.c"
        var $35=HEAP[$func_addr]; //@line 1300 "mathmodule.c"
        var $36=_math_1($34, $35, 0); //@line 1300 "mathmodule.c"
        HEAP[$0]=$36; //@line 1300 "mathmodule.c"
        __label__ = 11; break; //@line 1300 "mathmodule.c"
      case 11: // $bb10
        var $37=HEAP[$0]; //@line 1284 "mathmodule.c"
        HEAP[$retval]=$37; //@line 1284 "mathmodule.c"
        __label__ = 12; break; //@line 1284 "mathmodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 1284 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1284 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_log($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg=__stackBase__+16;
        var $base=__stackBase__+20;
        var $num=__stackBase__+24;
        var $den=__stackBase__+28;
        var $ans=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$base]=0; //@line 1307 "mathmodule.c"
        var $1=HEAP[$args_addr]; //@line 1311 "mathmodule.c"
        var $2=_PyArg_UnpackTuple($1, ((__str23)&4294967295), 1, 2, $arg, $base); //@line 1311 "mathmodule.c"
        var $3=((($2))|0)==0; //@line 1311 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1311 "mathmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1312 "mathmodule.c"
        __label__ = 14; break; //@line 1312 "mathmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg]; //@line 1314 "mathmodule.c"
        var $5=_loghelper($4, (FUNCTION_TABLE_OFFSET + 52), ((__str23)&4294967295)); //@line 1314 "mathmodule.c"
        HEAP[$num]=$5; //@line 1314 "mathmodule.c"
        var $6=HEAP[$num]; //@line 1315 "mathmodule.c"
        var $7=($6)==0; //@line 1315 "mathmodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1315 "mathmodule.c"
      case 3: // $bb2
        var $8=HEAP[$base]; //@line 1315 "mathmodule.c"
        var $9=($8)==0; //@line 1315 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1315 "mathmodule.c"
      case 4: // $bb3
        var $10=HEAP[$num]; //@line 1316 "mathmodule.c"
        HEAP[$0]=$10; //@line 1316 "mathmodule.c"
        __label__ = 14; break; //@line 1316 "mathmodule.c"
      case 5: // $bb4
        var $11=HEAP[$base]; //@line 1318 "mathmodule.c"
        var $12=_loghelper($11, (FUNCTION_TABLE_OFFSET + 52), ((__str23)&4294967295)); //@line 1318 "mathmodule.c"
        HEAP[$den]=$12; //@line 1318 "mathmodule.c"
        var $13=HEAP[$den]; //@line 1319 "mathmodule.c"
        var $14=($13)==0; //@line 1319 "mathmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 1319 "mathmodule.c"
      case 6: // $bb5
        var $15=HEAP[$num]; //@line 1320 "mathmodule.c"
        var $16=(($15)&4294967295); //@line 1320 "mathmodule.c"
        var $17=HEAP[$16]; //@line 1320 "mathmodule.c"
        var $18=((($17) - 1)&4294967295); //@line 1320 "mathmodule.c"
        var $19=HEAP[$num]; //@line 1320 "mathmodule.c"
        var $20=(($19)&4294967295); //@line 1320 "mathmodule.c"
        HEAP[$20]=$18; //@line 1320 "mathmodule.c"
        var $21=HEAP[$num]; //@line 1320 "mathmodule.c"
        var $22=(($21)&4294967295); //@line 1320 "mathmodule.c"
        var $23=HEAP[$22]; //@line 1320 "mathmodule.c"
        var $24=((($23))|0)==0; //@line 1320 "mathmodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1320 "mathmodule.c"
      case 7: // $bb6
        var $25=HEAP[$num]; //@line 1320 "mathmodule.c"
        var $26=(($25+4)&4294967295); //@line 1320 "mathmodule.c"
        var $27=HEAP[$26]; //@line 1320 "mathmodule.c"
        var $28=(($27+24)&4294967295); //@line 1320 "mathmodule.c"
        var $29=HEAP[$28]; //@line 1320 "mathmodule.c"
        var $30=HEAP[$num]; //@line 1320 "mathmodule.c"
        FUNCTION_TABLE[$29]($30); //@line 1320 "mathmodule.c"
        __label__ = 8; break; //@line 1320 "mathmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 1321 "mathmodule.c"
        __label__ = 14; break; //@line 1321 "mathmodule.c"
      case 9: // $bb8
        var $31=HEAP[$num]; //@line 1324 "mathmodule.c"
        var $32=HEAP[$den]; //@line 1324 "mathmodule.c"
        var $33=_PyNumber_Divide($31, $32); //@line 1324 "mathmodule.c"
        HEAP[$ans]=$33; //@line 1324 "mathmodule.c"
        var $34=HEAP[$num]; //@line 1325 "mathmodule.c"
        var $35=(($34)&4294967295); //@line 1325 "mathmodule.c"
        var $36=HEAP[$35]; //@line 1325 "mathmodule.c"
        var $37=((($36) - 1)&4294967295); //@line 1325 "mathmodule.c"
        var $38=HEAP[$num]; //@line 1325 "mathmodule.c"
        var $39=(($38)&4294967295); //@line 1325 "mathmodule.c"
        HEAP[$39]=$37; //@line 1325 "mathmodule.c"
        var $40=HEAP[$num]; //@line 1325 "mathmodule.c"
        var $41=(($40)&4294967295); //@line 1325 "mathmodule.c"
        var $42=HEAP[$41]; //@line 1325 "mathmodule.c"
        var $43=((($42))|0)==0; //@line 1325 "mathmodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1325 "mathmodule.c"
      case 10: // $bb9
        var $44=HEAP[$num]; //@line 1325 "mathmodule.c"
        var $45=(($44+4)&4294967295); //@line 1325 "mathmodule.c"
        var $46=HEAP[$45]; //@line 1325 "mathmodule.c"
        var $47=(($46+24)&4294967295); //@line 1325 "mathmodule.c"
        var $48=HEAP[$47]; //@line 1325 "mathmodule.c"
        var $49=HEAP[$num]; //@line 1325 "mathmodule.c"
        FUNCTION_TABLE[$48]($49); //@line 1325 "mathmodule.c"
        __label__ = 11; break; //@line 1325 "mathmodule.c"
      case 11: // $bb10
        var $50=HEAP[$den]; //@line 1326 "mathmodule.c"
        var $51=(($50)&4294967295); //@line 1326 "mathmodule.c"
        var $52=HEAP[$51]; //@line 1326 "mathmodule.c"
        var $53=((($52) - 1)&4294967295); //@line 1326 "mathmodule.c"
        var $54=HEAP[$den]; //@line 1326 "mathmodule.c"
        var $55=(($54)&4294967295); //@line 1326 "mathmodule.c"
        HEAP[$55]=$53; //@line 1326 "mathmodule.c"
        var $56=HEAP[$den]; //@line 1326 "mathmodule.c"
        var $57=(($56)&4294967295); //@line 1326 "mathmodule.c"
        var $58=HEAP[$57]; //@line 1326 "mathmodule.c"
        var $59=((($58))|0)==0; //@line 1326 "mathmodule.c"
        if ($59) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1326 "mathmodule.c"
      case 12: // $bb11
        var $60=HEAP[$den]; //@line 1326 "mathmodule.c"
        var $61=(($60+4)&4294967295); //@line 1326 "mathmodule.c"
        var $62=HEAP[$61]; //@line 1326 "mathmodule.c"
        var $63=(($62+24)&4294967295); //@line 1326 "mathmodule.c"
        var $64=HEAP[$63]; //@line 1326 "mathmodule.c"
        var $65=HEAP[$den]; //@line 1326 "mathmodule.c"
        FUNCTION_TABLE[$64]($65); //@line 1326 "mathmodule.c"
        __label__ = 13; break; //@line 1326 "mathmodule.c"
      case 13: // $bb12
        var $66=HEAP[$ans]; //@line 1327 "mathmodule.c"
        HEAP[$0]=$66; //@line 1327 "mathmodule.c"
        __label__ = 14; break; //@line 1327 "mathmodule.c"
      case 14: // $bb13
        var $67=HEAP[$0]; //@line 1312 "mathmodule.c"
        HEAP[$retval]=$67; //@line 1312 "mathmodule.c"
        __label__ = 15; break; //@line 1312 "mathmodule.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 1312 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 1312 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_log10($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 1338 "mathmodule.c"
        var $2=_loghelper($1, (FUNCTION_TABLE_OFFSET + 54), ((__str24)&4294967295)); //@line 1338 "mathmodule.c"
        HEAP[$0]=$2; //@line 1338 "mathmodule.c"
        var $3=HEAP[$0]; //@line 1338 "mathmodule.c"
        HEAP[$retval]=$3; //@line 1338 "mathmodule.c"
        __label__ = 1; break; //@line 1338 "mathmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1338 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1338 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_fmod($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ox=__stackBase__+16;
        var $oy=__stackBase__+20;
        var $r=__stackBase__+24;
        var $x=__stackBase__+32;
        var $y=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1349 "mathmodule.c"
        var $2=_PyArg_UnpackTuple($1, ((__str25)&4294967295), 2, 2, $ox, $oy); //@line 1349 "mathmodule.c"
        var $3=((($2))|0)==0; //@line 1349 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1349 "mathmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1350 "mathmodule.c"
        __label__ = 18; break; //@line 1350 "mathmodule.c"
      case 2: // $bb1
        var $4=HEAP[$ox]; //@line 1351 "mathmodule.c"
        var $5=_PyFloat_AsDouble($4); //@line 1351 "mathmodule.c"
        HEAP[$x]=$5; //@line 1351 "mathmodule.c"
        var $6=HEAP[$oy]; //@line 1352 "mathmodule.c"
        var $7=_PyFloat_AsDouble($6); //@line 1352 "mathmodule.c"
        HEAP[$y]=$7; //@line 1352 "mathmodule.c"
        var $8=HEAP[$x]; //@line 1353 "mathmodule.c"
        var $9=($8) == -1; //@line 1353 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1353 "mathmodule.c"
      case 3: // $bb2
        var $10=HEAP[$y]; //@line 1353 "mathmodule.c"
        var $11=($10) == -1; //@line 1353 "mathmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1353 "mathmodule.c"
      case 4: // $bb3
        var $12=_PyErr_Occurred(); //@line 1353 "mathmodule.c"
        var $13=($12)!=0; //@line 1353 "mathmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1353 "mathmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1354 "mathmodule.c"
        __label__ = 18; break; //@line 1354 "mathmodule.c"
      case 6: // $bb5
        var $14=HEAP[$y]; //@line 1356 "mathmodule.c"
        var $15=___isinf($14); //@line 1356 "mathmodule.c"
        var $16=((($15))|0)!=0; //@line 1356 "mathmodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1356 "mathmodule.c"
      case 7: // $bb6
        var $17=HEAP[$x]; //@line 1356 "mathmodule.c"
        var $18=___finite($17); //@line 1356 "mathmodule.c"
        var $19=((($18))|0)!=0; //@line 1356 "mathmodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1356 "mathmodule.c"
      case 8: // $bb7
        var $20=HEAP[$x]; //@line 1357 "mathmodule.c"
        var $21=_PyFloat_FromDouble($20); //@line 1357 "mathmodule.c"
        HEAP[$0]=$21; //@line 1357 "mathmodule.c"
        __label__ = 18; break; //@line 1357 "mathmodule.c"
      case 9: // $bb8
        var $22=___errno_location(); //@line 1358 "mathmodule.c"
        HEAP[$22]=0; //@line 1358 "mathmodule.c"
        var $23=HEAP[$x]; //@line 1360 "mathmodule.c"
        var $24=HEAP[$y]; //@line 1360 "mathmodule.c"
        var $25=_fmod($23, $24); //@line 1360 "mathmodule.c"
        HEAP[$r]=$25; //@line 1360 "mathmodule.c"
        var $26=HEAP[$r]; //@line 1362 "mathmodule.c"
        var $27=___isnan($26); //@line 1362 "mathmodule.c"
        var $28=((($27))|0)!=0; //@line 1362 "mathmodule.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 1362 "mathmodule.c"
      case 10: // $bb9
        var $29=HEAP[$x]; //@line 1363 "mathmodule.c"
        var $30=___isnan($29); //@line 1363 "mathmodule.c"
        var $31=((($30))|0)!=0; //@line 1363 "mathmodule.c"
        if ($31) { __label__ = 13; break; } else { __label__ = 11; break; } //@line 1363 "mathmodule.c"
      case 11: // $bb10
        var $32=HEAP[$y]; //@line 1363 "mathmodule.c"
        var $33=___isnan($32); //@line 1363 "mathmodule.c"
        var $34=((($33))|0)!=0; //@line 1363 "mathmodule.c"
        if ($34) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 1363 "mathmodule.c"
      case 12: // $bb11
        var $35=___errno_location(); //@line 1364 "mathmodule.c"
        HEAP[$35]=33; //@line 1364 "mathmodule.c"
        __label__ = 14; break; //@line 1364 "mathmodule.c"
      case 13: // $bb12
        var $36=___errno_location(); //@line 1366 "mathmodule.c"
        HEAP[$36]=0; //@line 1366 "mathmodule.c"
        __label__ = 14; break; //@line 1366 "mathmodule.c"
      case 14: // $bb13
        var $37=___errno_location(); //@line 1368 "mathmodule.c"
        var $38=HEAP[$37]; //@line 1368 "mathmodule.c"
        var $39=((($38))|0)==0; //@line 1368 "mathmodule.c"
        if ($39) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 1368 "mathmodule.c"
      case 15: // $bb14
        var $40=HEAP[$r]; //@line 1368 "mathmodule.c"
        var $41=_is_error($40); //@line 1368 "mathmodule.c"
        var $42=((($41))|0)==0; //@line 1368 "mathmodule.c"
        if ($42) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 1368 "mathmodule.c"
      case 16: // $bb15
        HEAP[$0]=0; //@line 1369 "mathmodule.c"
        __label__ = 18; break; //@line 1369 "mathmodule.c"
      case 17: // $bb16
        var $43=HEAP[$r]; //@line 1371 "mathmodule.c"
        var $44=_PyFloat_FromDouble($43); //@line 1371 "mathmodule.c"
        HEAP[$0]=$44; //@line 1371 "mathmodule.c"
        __label__ = 18; break; //@line 1371 "mathmodule.c"
      case 18: // $bb17
        var $45=HEAP[$0]; //@line 1350 "mathmodule.c"
        HEAP[$retval]=$45; //@line 1350 "mathmodule.c"
        __label__ = 19; break; //@line 1350 "mathmodule.c"
      case 19: // $return
        var $retval18=HEAP[$retval]; //@line 1350 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1350 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_hypot($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ox=__stackBase__+16;
        var $oy=__stackBase__+20;
        var $r=__stackBase__+24;
        var $x=__stackBase__+32;
        var $y=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1383 "mathmodule.c"
        var $2=_PyArg_UnpackTuple($1, ((__str26)&4294967295), 2, 2, $ox, $oy); //@line 1383 "mathmodule.c"
        var $3=((($2))|0)==0; //@line 1383 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1383 "mathmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1384 "mathmodule.c"
        __label__ = 25; break; //@line 1384 "mathmodule.c"
      case 2: // $bb1
        var $4=HEAP[$ox]; //@line 1385 "mathmodule.c"
        var $5=_PyFloat_AsDouble($4); //@line 1385 "mathmodule.c"
        HEAP[$x]=$5; //@line 1385 "mathmodule.c"
        var $6=HEAP[$oy]; //@line 1386 "mathmodule.c"
        var $7=_PyFloat_AsDouble($6); //@line 1386 "mathmodule.c"
        HEAP[$y]=$7; //@line 1386 "mathmodule.c"
        var $8=HEAP[$x]; //@line 1387 "mathmodule.c"
        var $9=($8) == -1; //@line 1387 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1387 "mathmodule.c"
      case 3: // $bb2
        var $10=HEAP[$y]; //@line 1387 "mathmodule.c"
        var $11=($10) == -1; //@line 1387 "mathmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1387 "mathmodule.c"
      case 4: // $bb3
        var $12=_PyErr_Occurred(); //@line 1387 "mathmodule.c"
        var $13=($12)!=0; //@line 1387 "mathmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1387 "mathmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1388 "mathmodule.c"
        __label__ = 25; break; //@line 1388 "mathmodule.c"
      case 6: // $bb5
        var $14=HEAP[$x]; //@line 1390 "mathmodule.c"
        var $15=___isinf($14); //@line 1390 "mathmodule.c"
        var $16=((($15))|0)!=0; //@line 1390 "mathmodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1390 "mathmodule.c"
      case 7: // $bb6
        var $17=HEAP[$x]; //@line 1391 "mathmodule.c"
        var $18=_fabs($17); //@line 1391 "mathmodule.c"
        var $19=_PyFloat_FromDouble($18); //@line 1391 "mathmodule.c"
        HEAP[$0]=$19; //@line 1391 "mathmodule.c"
        __label__ = 25; break; //@line 1391 "mathmodule.c"
      case 8: // $bb7
        var $20=HEAP[$y]; //@line 1392 "mathmodule.c"
        var $21=___isinf($20); //@line 1392 "mathmodule.c"
        var $22=((($21))|0)!=0; //@line 1392 "mathmodule.c"
        if ($22) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1392 "mathmodule.c"
      case 9: // $bb8
        var $23=HEAP[$y]; //@line 1393 "mathmodule.c"
        var $24=_fabs($23); //@line 1393 "mathmodule.c"
        var $25=_PyFloat_FromDouble($24); //@line 1393 "mathmodule.c"
        HEAP[$0]=$25; //@line 1393 "mathmodule.c"
        __label__ = 25; break; //@line 1393 "mathmodule.c"
      case 10: // $bb9
        var $26=___errno_location(); //@line 1394 "mathmodule.c"
        HEAP[$26]=0; //@line 1394 "mathmodule.c"
        var $27=HEAP[$x]; //@line 1396 "mathmodule.c"
        var $28=HEAP[$y]; //@line 1396 "mathmodule.c"
        var $29=_hypot($27, $28); //@line 1396 "mathmodule.c"
        HEAP[$r]=$29; //@line 1396 "mathmodule.c"
        var $30=HEAP[$r]; //@line 1398 "mathmodule.c"
        var $31=___isnan($30); //@line 1398 "mathmodule.c"
        var $32=((($31))|0)!=0; //@line 1398 "mathmodule.c"
        if ($32) { __label__ = 11; break; } else { __label__ = 16; break; } //@line 1398 "mathmodule.c"
      case 11: // $bb10
        var $33=HEAP[$x]; //@line 1399 "mathmodule.c"
        var $34=___isnan($33); //@line 1399 "mathmodule.c"
        var $35=((($34))|0)!=0; //@line 1399 "mathmodule.c"
        if ($35) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 1399 "mathmodule.c"
      case 12: // $bb11
        var $36=HEAP[$y]; //@line 1399 "mathmodule.c"
        var $37=___isnan($36); //@line 1399 "mathmodule.c"
        var $38=((($37))|0)!=0; //@line 1399 "mathmodule.c"
        if ($38) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 1399 "mathmodule.c"
      case 13: // $bb12
        var $39=___errno_location(); //@line 1400 "mathmodule.c"
        HEAP[$39]=33; //@line 1400 "mathmodule.c"
        __label__ = 15; break; //@line 1400 "mathmodule.c"
      case 14: // $bb13
        var $40=___errno_location(); //@line 1402 "mathmodule.c"
        HEAP[$40]=0; //@line 1402 "mathmodule.c"
        __label__ = 15; break; //@line 1402 "mathmodule.c"
      case 15: // $bb14
        __label__ = 21; break; //@line 1402 "mathmodule.c"
      case 16: // $bb15
        var $41=HEAP[$r]; //@line 1404 "mathmodule.c"
        var $42=___isinf($41); //@line 1404 "mathmodule.c"
        var $43=((($42))|0)!=0; //@line 1404 "mathmodule.c"
        if ($43) { __label__ = 17; break; } else { __label__ = 21; break; } //@line 1404 "mathmodule.c"
      case 17: // $bb16
        var $44=HEAP[$x]; //@line 1405 "mathmodule.c"
        var $45=___finite($44); //@line 1405 "mathmodule.c"
        var $46=((($45))|0)==0; //@line 1405 "mathmodule.c"
        if ($46) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 1405 "mathmodule.c"
      case 18: // $bb17
        var $47=HEAP[$y]; //@line 1405 "mathmodule.c"
        var $48=___finite($47); //@line 1405 "mathmodule.c"
        var $49=((($48))|0)==0; //@line 1405 "mathmodule.c"
        if ($49) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 1405 "mathmodule.c"
      case 19: // $bb18
        var $50=___errno_location(); //@line 1406 "mathmodule.c"
        HEAP[$50]=34; //@line 1406 "mathmodule.c"
        __label__ = 21; break; //@line 1406 "mathmodule.c"
      case 20: // $bb19
        var $51=___errno_location(); //@line 1408 "mathmodule.c"
        HEAP[$51]=0; //@line 1408 "mathmodule.c"
        __label__ = 21; break; //@line 1408 "mathmodule.c"
      case 21: // $bb20
        var $52=___errno_location(); //@line 1410 "mathmodule.c"
        var $53=HEAP[$52]; //@line 1410 "mathmodule.c"
        var $54=((($53))|0)==0; //@line 1410 "mathmodule.c"
        if ($54) { __label__ = 24; break; } else { __label__ = 22; break; } //@line 1410 "mathmodule.c"
      case 22: // $bb21
        var $55=HEAP[$r]; //@line 1410 "mathmodule.c"
        var $56=_is_error($55); //@line 1410 "mathmodule.c"
        var $57=((($56))|0)==0; //@line 1410 "mathmodule.c"
        if ($57) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 1410 "mathmodule.c"
      case 23: // $bb22
        HEAP[$0]=0; //@line 1411 "mathmodule.c"
        __label__ = 25; break; //@line 1411 "mathmodule.c"
      case 24: // $bb23
        var $58=HEAP[$r]; //@line 1413 "mathmodule.c"
        var $59=_PyFloat_FromDouble($58); //@line 1413 "mathmodule.c"
        HEAP[$0]=$59; //@line 1413 "mathmodule.c"
        __label__ = 25; break; //@line 1413 "mathmodule.c"
      case 25: // $bb24
        var $60=HEAP[$0]; //@line 1384 "mathmodule.c"
        HEAP[$retval]=$60; //@line 1384 "mathmodule.c"
        __label__ = 26; break; //@line 1384 "mathmodule.c"
      case 26: // $return
        var $retval25=HEAP[$retval]; //@line 1384 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 1384 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_pow($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 88; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 88);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_105=__stackBase__+12;
        var $iftmp_104=__stackBase__+20;
        var $iftmp_103=__stackBase__+28;
        var $iftmp_102=__stackBase__+32;
        var $iftmp_101=__stackBase__+40;
        var $0=__stackBase__+48;
        var $ox=__stackBase__+52;
        var $oy=__stackBase__+56;
        var $r=__stackBase__+60;
        var $x=__stackBase__+68;
        var $y=__stackBase__+76;
        var $odd_y=__stackBase__+84;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1432 "mathmodule.c"
        var $2=_PyArg_UnpackTuple($1, ((__str27)&4294967295), 2, 2, $ox, $oy); //@line 1432 "mathmodule.c"
        var $3=((($2))|0)==0; //@line 1432 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1432 "mathmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1433 "mathmodule.c"
        __label__ = 59; break; //@line 1433 "mathmodule.c"
      case 2: // $bb1
        var $4=HEAP[$ox]; //@line 1434 "mathmodule.c"
        var $5=_PyFloat_AsDouble($4); //@line 1434 "mathmodule.c"
        HEAP[$x]=$5; //@line 1434 "mathmodule.c"
        var $6=HEAP[$oy]; //@line 1435 "mathmodule.c"
        var $7=_PyFloat_AsDouble($6); //@line 1435 "mathmodule.c"
        HEAP[$y]=$7; //@line 1435 "mathmodule.c"
        var $8=HEAP[$x]; //@line 1436 "mathmodule.c"
        var $9=($8) == -1; //@line 1436 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1436 "mathmodule.c"
      case 3: // $bb2
        var $10=HEAP[$y]; //@line 1436 "mathmodule.c"
        var $11=($10) == -1; //@line 1436 "mathmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1436 "mathmodule.c"
      case 4: // $bb3
        var $12=_PyErr_Occurred(); //@line 1436 "mathmodule.c"
        var $13=($12)!=0; //@line 1436 "mathmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1436 "mathmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1437 "mathmodule.c"
        __label__ = 59; break; //@line 1437 "mathmodule.c"
      case 6: // $bb5
        HEAP[$r]=0; //@line 1441 "mathmodule.c"
        var $14=HEAP[$x]; //@line 1442 "mathmodule.c"
        var $15=___finite($14); //@line 1442 "mathmodule.c"
        var $16=((($15))|0)==0; //@line 1442 "mathmodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1442 "mathmodule.c"
      case 7: // $bb6
        var $17=HEAP[$y]; //@line 1442 "mathmodule.c"
        var $18=___finite($17); //@line 1442 "mathmodule.c"
        var $19=((($18))|0)==0; //@line 1442 "mathmodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 48; break; } //@line 1442 "mathmodule.c"
      case 8: // $bb7
        var $20=___errno_location(); //@line 1443 "mathmodule.c"
        HEAP[$20]=0; //@line 1443 "mathmodule.c"
        var $21=HEAP[$x]; //@line 1444 "mathmodule.c"
        var $22=___isnan($21); //@line 1444 "mathmodule.c"
        var $23=((($22))|0)!=0; //@line 1444 "mathmodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 1444 "mathmodule.c"
      case 9: // $bb8
        var $24=HEAP[$y]; //@line 1445 "mathmodule.c"
        var $25=($24) != 0; //@line 1445 "mathmodule.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1445 "mathmodule.c"
      case 10: // $bb9
        var $26=HEAP[$x]; //@line 1445 "mathmodule.c"
        HEAP[$iftmp_101]=$26; //@line 1445 "mathmodule.c"
        __label__ = 12; break; //@line 1445 "mathmodule.c"
      case 11: // $bb10
        HEAP[$iftmp_101]=1; //@line 1445 "mathmodule.c"
        __label__ = 12; break; //@line 1445 "mathmodule.c"
      case 12: // $bb11
        var $27=HEAP[$iftmp_101]; //@line 1445 "mathmodule.c"
        HEAP[$r]=$27; //@line 1445 "mathmodule.c"
        __label__ = 47; break; //@line 1445 "mathmodule.c"
      case 13: // $bb12
        var $28=HEAP[$y]; //@line 1446 "mathmodule.c"
        var $29=___isnan($28); //@line 1446 "mathmodule.c"
        var $30=((($29))|0)!=0; //@line 1446 "mathmodule.c"
        if ($30) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 1446 "mathmodule.c"
      case 14: // $bb13
        var $31=HEAP[$x]; //@line 1447 "mathmodule.c"
        var $32=($31) != 1; //@line 1447 "mathmodule.c"
        if ($32) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1447 "mathmodule.c"
      case 15: // $bb14
        var $33=HEAP[$y]; //@line 1447 "mathmodule.c"
        HEAP[$iftmp_102]=$33; //@line 1447 "mathmodule.c"
        __label__ = 17; break; //@line 1447 "mathmodule.c"
      case 16: // $bb15
        HEAP[$iftmp_102]=1; //@line 1447 "mathmodule.c"
        __label__ = 17; break; //@line 1447 "mathmodule.c"
      case 17: // $bb16
        var $34=HEAP[$iftmp_102]; //@line 1447 "mathmodule.c"
        HEAP[$r]=$34; //@line 1447 "mathmodule.c"
        __label__ = 47; break; //@line 1447 "mathmodule.c"
      case 18: // $bb17
        var $35=HEAP[$x]; //@line 1448 "mathmodule.c"
        var $36=___isinf($35); //@line 1448 "mathmodule.c"
        var $37=((($36))|0)!=0; //@line 1448 "mathmodule.c"
        if ($37) { __label__ = 19; break; } else { __label__ = 35; break; } //@line 1448 "mathmodule.c"
      case 19: // $bb18
        var $38=HEAP[$y]; //@line 1449 "mathmodule.c"
        var $39=___finite($38); //@line 1449 "mathmodule.c"
        var $40=((($39))|0)==0; //@line 1449 "mathmodule.c"
        if ($40) { __label__ = 22; break; } else { __label__ = 20; break; } //@line 1449 "mathmodule.c"
      case 20: // $bb19
        var $41=HEAP[$y]; //@line 1449 "mathmodule.c"
        var $42=_fabs($41); //@line 1449 "mathmodule.c"
        var $43=_fmod($42, 2); //@line 1449 "mathmodule.c"
        var $44=($43) != 1; //@line 1449 "mathmodule.c"
        if ($44) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1449 "mathmodule.c"
      case 21: // $bb20
        HEAP[$iftmp_103]=1; //@line 1449 "mathmodule.c"
        __label__ = 23; break; //@line 1449 "mathmodule.c"
      case 22: // $bb21
        HEAP[$iftmp_103]=0; //@line 1449 "mathmodule.c"
        __label__ = 23; break; //@line 1449 "mathmodule.c"
      case 23: // $bb22
        var $45=HEAP[$iftmp_103]; //@line 1449 "mathmodule.c"
        HEAP[$odd_y]=$45; //@line 1449 "mathmodule.c"
        var $46=HEAP[$y]; //@line 1450 "mathmodule.c"
        var $47=($46) > 0; //@line 1450 "mathmodule.c"
        if ($47) { __label__ = 24; break; } else { __label__ = 28; break; } //@line 1450 "mathmodule.c"
      case 24: // $bb23
        var $48=HEAP[$odd_y]; //@line 1451 "mathmodule.c"
        var $49=((($48))|0)==0; //@line 1451 "mathmodule.c"
        if ($49) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1451 "mathmodule.c"
      case 25: // $bb24
        var $50=HEAP[$x]; //@line 1451 "mathmodule.c"
        var $51=_fabs($50); //@line 1451 "mathmodule.c"
        HEAP[$iftmp_104]=$51; //@line 1451 "mathmodule.c"
        __label__ = 27; break; //@line 1451 "mathmodule.c"
      case 26: // $bb25
        var $52=HEAP[$x]; //@line 1451 "mathmodule.c"
        HEAP[$iftmp_104]=$52; //@line 1451 "mathmodule.c"
        __label__ = 27; break; //@line 1451 "mathmodule.c"
      case 27: // $bb26
        var $53=HEAP[$iftmp_104]; //@line 1451 "mathmodule.c"
        HEAP[$r]=$53; //@line 1451 "mathmodule.c"
        __label__ = 34; break; //@line 1451 "mathmodule.c"
      case 28: // $bb27
        var $54=HEAP[$y]; //@line 1452 "mathmodule.c"
        var $55=($54) == 0; //@line 1452 "mathmodule.c"
        if ($55) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1452 "mathmodule.c"
      case 29: // $bb28
        HEAP[$r]=1; //@line 1453 "mathmodule.c"
        __label__ = 34; break; //@line 1453 "mathmodule.c"
      case 30: // $bb29
        var $56=HEAP[$odd_y]; //@line 1455 "mathmodule.c"
        var $57=((($56))|0)!=0; //@line 1455 "mathmodule.c"
        if ($57) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1455 "mathmodule.c"
      case 31: // $bb30
        var $58=HEAP[$x]; //@line 1455 "mathmodule.c"
        var $59=_copysign(0, $58); //@line 1455 "mathmodule.c"
        HEAP[$iftmp_105]=$59; //@line 1455 "mathmodule.c"
        __label__ = 33; break; //@line 1455 "mathmodule.c"
      case 32: // $bb31
        HEAP[$iftmp_105]=0; //@line 1455 "mathmodule.c"
        __label__ = 33; break; //@line 1455 "mathmodule.c"
      case 33: // $bb32
        var $60=HEAP[$iftmp_105]; //@line 1455 "mathmodule.c"
        HEAP[$r]=$60; //@line 1455 "mathmodule.c"
        __label__ = 34; break; //@line 1455 "mathmodule.c"
      case 34: // $bb33
        __label__ = 47; break; //@line 1455 "mathmodule.c"
      case 35: // $bb34
        var $61=HEAP[$y]; //@line 1457 "mathmodule.c"
        var $62=___isinf($61); //@line 1457 "mathmodule.c"
        var $63=((($62))|0)!=0; //@line 1457 "mathmodule.c"
        if ($63) { __label__ = 36; break; } else { __label__ = 47; break; } //@line 1457 "mathmodule.c"
      case 36: // $bb35
        var $64=HEAP[$x]; //@line 1458 "mathmodule.c"
        var $65=_fabs($64); //@line 1458 "mathmodule.c"
        var $66=($65) == 1; //@line 1458 "mathmodule.c"
        if ($66) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1458 "mathmodule.c"
      case 37: // $bb36
        HEAP[$r]=1; //@line 1459 "mathmodule.c"
        __label__ = 47; break; //@line 1459 "mathmodule.c"
      case 38: // $bb37
        var $67=HEAP[$y]; //@line 1460 "mathmodule.c"
        var $68=($67) <= 0; //@line 1460 "mathmodule.c"
        if ($68) { __label__ = 41; break; } else { __label__ = 39; break; } //@line 1460 "mathmodule.c"
      case 39: // $bb38
        var $69=HEAP[$x]; //@line 1460 "mathmodule.c"
        var $70=_fabs($69); //@line 1460 "mathmodule.c"
        var $71=($70) <= 1; //@line 1460 "mathmodule.c"
        if ($71) { __label__ = 41; break; } else { __label__ = 40; break; } //@line 1460 "mathmodule.c"
      case 40: // $bb39
        var $72=HEAP[$y]; //@line 1461 "mathmodule.c"
        HEAP[$r]=$72; //@line 1461 "mathmodule.c"
        __label__ = 47; break; //@line 1461 "mathmodule.c"
      case 41: // $bb40
        var $73=HEAP[$y]; //@line 1462 "mathmodule.c"
        var $74=($73) >= 0; //@line 1462 "mathmodule.c"
        if ($74) { __label__ = 46; break; } else { __label__ = 42; break; } //@line 1462 "mathmodule.c"
      case 42: // $bb41
        var $75=HEAP[$x]; //@line 1462 "mathmodule.c"
        var $76=_fabs($75); //@line 1462 "mathmodule.c"
        var $77=($76) >= 1; //@line 1462 "mathmodule.c"
        if ($77) { __label__ = 46; break; } else { __label__ = 43; break; } //@line 1462 "mathmodule.c"
      case 43: // $bb42
        var $78=HEAP[$y]; //@line 1463 "mathmodule.c"
        var $79=0 - ($78); //@line 1463 "mathmodule.c"
        HEAP[$r]=$79; //@line 1463 "mathmodule.c"
        var $80=HEAP[$x]; //@line 1464 "mathmodule.c"
        var $81=($80) == 0; //@line 1464 "mathmodule.c"
        if ($81) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1464 "mathmodule.c"
      case 44: // $bb43
        var $82=___errno_location(); //@line 1465 "mathmodule.c"
        HEAP[$82]=33; //@line 1465 "mathmodule.c"
        __label__ = 45; break; //@line 1465 "mathmodule.c"
      case 45: // $bb44
        __label__ = 47; break; //@line 1465 "mathmodule.c"
      case 46: // $bb45
        HEAP[$r]=0; //@line 1468 "mathmodule.c"
        __label__ = 47; break; //@line 1468 "mathmodule.c"
      case 47: // $bb46
        __label__ = 55; break; //@line 1468 "mathmodule.c"
      case 48: // $bb47
        var $83=___errno_location(); //@line 1473 "mathmodule.c"
        HEAP[$83]=0; //@line 1473 "mathmodule.c"
        var $84=HEAP[$x]; //@line 1475 "mathmodule.c"
        var $85=HEAP[$y]; //@line 1475 "mathmodule.c"
        var $86=_llvm_pow_f64($84, $85); //@line 1475 "mathmodule.c"
        HEAP[$r]=$86; //@line 1475 "mathmodule.c"
        var $87=HEAP[$r]; //@line 1479 "mathmodule.c"
        var $88=___finite($87); //@line 1479 "mathmodule.c"
        var $89=((($88))|0)==0; //@line 1479 "mathmodule.c"
        if ($89) { __label__ = 49; break; } else { __label__ = 55; break; } //@line 1479 "mathmodule.c"
      case 49: // $bb48
        var $90=HEAP[$r]; //@line 1480 "mathmodule.c"
        var $91=___isnan($90); //@line 1480 "mathmodule.c"
        var $92=((($91))|0)!=0; //@line 1480 "mathmodule.c"
        if ($92) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 1480 "mathmodule.c"
      case 50: // $bb49
        var $93=___errno_location(); //@line 1481 "mathmodule.c"
        HEAP[$93]=33; //@line 1481 "mathmodule.c"
        __label__ = 55; break; //@line 1481 "mathmodule.c"
      case 51: // $bb50
        var $94=HEAP[$r]; //@line 1488 "mathmodule.c"
        var $95=___isinf($94); //@line 1488 "mathmodule.c"
        var $96=((($95))|0)!=0; //@line 1488 "mathmodule.c"
        if ($96) { __label__ = 52; break; } else { __label__ = 55; break; } //@line 1488 "mathmodule.c"
      case 52: // $bb51
        var $97=HEAP[$x]; //@line 1489 "mathmodule.c"
        var $98=($97) == 0; //@line 1489 "mathmodule.c"
        if ($98) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 1489 "mathmodule.c"
      case 53: // $bb52
        var $99=___errno_location(); //@line 1490 "mathmodule.c"
        HEAP[$99]=33; //@line 1490 "mathmodule.c"
        __label__ = 55; break; //@line 1490 "mathmodule.c"
      case 54: // $bb53
        var $100=___errno_location(); //@line 1492 "mathmodule.c"
        HEAP[$100]=34; //@line 1492 "mathmodule.c"
        __label__ = 55; break; //@line 1492 "mathmodule.c"
      case 55: // $bb54
        var $101=___errno_location(); //@line 1497 "mathmodule.c"
        var $102=HEAP[$101]; //@line 1497 "mathmodule.c"
        var $103=((($102))|0)==0; //@line 1497 "mathmodule.c"
        if ($103) { __label__ = 58; break; } else { __label__ = 56; break; } //@line 1497 "mathmodule.c"
      case 56: // $bb55
        var $104=HEAP[$r]; //@line 1497 "mathmodule.c"
        var $105=_is_error($104); //@line 1497 "mathmodule.c"
        var $106=((($105))|0)==0; //@line 1497 "mathmodule.c"
        if ($106) { __label__ = 58; break; } else { __label__ = 57; break; } //@line 1497 "mathmodule.c"
      case 57: // $bb56
        HEAP[$0]=0; //@line 1498 "mathmodule.c"
        __label__ = 59; break; //@line 1498 "mathmodule.c"
      case 58: // $bb57
        var $107=HEAP[$r]; //@line 1500 "mathmodule.c"
        var $108=_PyFloat_FromDouble($107); //@line 1500 "mathmodule.c"
        HEAP[$0]=$108; //@line 1500 "mathmodule.c"
        __label__ = 59; break; //@line 1500 "mathmodule.c"
      case 59: // $bb58
        var $109=HEAP[$0]; //@line 1433 "mathmodule.c"
        HEAP[$retval]=$109; //@line 1433 "mathmodule.c"
        __label__ = 60; break; //@line 1433 "mathmodule.c"
      case 60: // $return
        var $retval59=HEAP[$retval]; //@line 1433 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval59; //@line 1433 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_degrees($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $x=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 1512 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 1512 "mathmodule.c"
        HEAP[$x]=$2; //@line 1512 "mathmodule.c"
        var $3=HEAP[$x]; //@line 1513 "mathmodule.c"
        var $4=($3) == -1; //@line 1513 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1513 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1513 "mathmodule.c"
        var $6=($5)!=0; //@line 1513 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1513 "mathmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1514 "mathmodule.c"
        __label__ = 4; break; //@line 1514 "mathmodule.c"
      case 3: // $bb2
        var $7=HEAP[_radToDeg]; //@line 1515 "mathmodule.c"
        var $8=HEAP[$x]; //@line 1515 "mathmodule.c"
        var $9=($8) * ($7); //@line 1515 "mathmodule.c"
        var $10=_PyFloat_FromDouble($9); //@line 1515 "mathmodule.c"
        HEAP[$0]=$10; //@line 1515 "mathmodule.c"
        __label__ = 4; break; //@line 1515 "mathmodule.c"
      case 4: // $bb3
        var $11=HEAP[$0]; //@line 1514 "mathmodule.c"
        HEAP[$retval]=$11; //@line 1514 "mathmodule.c"
        __label__ = 5; break; //@line 1514 "mathmodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 1514 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 1514 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_radians($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $x=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 1525 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 1525 "mathmodule.c"
        HEAP[$x]=$2; //@line 1525 "mathmodule.c"
        var $3=HEAP[$x]; //@line 1526 "mathmodule.c"
        var $4=($3) == -1; //@line 1526 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1526 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1526 "mathmodule.c"
        var $6=($5)!=0; //@line 1526 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1526 "mathmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1527 "mathmodule.c"
        __label__ = 4; break; //@line 1527 "mathmodule.c"
      case 3: // $bb2
        var $7=HEAP[_degToRad]; //@line 1528 "mathmodule.c"
        var $8=HEAP[$x]; //@line 1528 "mathmodule.c"
        var $9=($8) * ($7); //@line 1528 "mathmodule.c"
        var $10=_PyFloat_FromDouble($9); //@line 1528 "mathmodule.c"
        HEAP[$0]=$10; //@line 1528 "mathmodule.c"
        __label__ = 4; break; //@line 1528 "mathmodule.c"
      case 4: // $bb3
        var $11=HEAP[$0]; //@line 1527 "mathmodule.c"
        HEAP[$retval]=$11; //@line 1527 "mathmodule.c"
        __label__ = 5; break; //@line 1527 "mathmodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 1527 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 1527 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_isnan($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $x=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 1538 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 1538 "mathmodule.c"
        HEAP[$x]=$2; //@line 1538 "mathmodule.c"
        var $3=HEAP[$x]; //@line 1539 "mathmodule.c"
        var $4=($3) == -1; //@line 1539 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1539 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1539 "mathmodule.c"
        var $6=($5)!=0; //@line 1539 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1539 "mathmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1540 "mathmodule.c"
        __label__ = 4; break; //@line 1540 "mathmodule.c"
      case 3: // $bb2
        var $7=HEAP[$x]; //@line 1541 "mathmodule.c"
        var $8=___isnan($7); //@line 1541 "mathmodule.c"
        var $9=_PyBool_FromLong($8); //@line 1541 "mathmodule.c"
        HEAP[$0]=$9; //@line 1541 "mathmodule.c"
        __label__ = 4; break; //@line 1541 "mathmodule.c"
      case 4: // $bb3
        var $10=HEAP[$0]; //@line 1540 "mathmodule.c"
        HEAP[$retval]=$10; //@line 1540 "mathmodule.c"
        __label__ = 5; break; //@line 1540 "mathmodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 1540 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 1540 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_isinf($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $x=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 1551 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 1551 "mathmodule.c"
        HEAP[$x]=$2; //@line 1551 "mathmodule.c"
        var $3=HEAP[$x]; //@line 1552 "mathmodule.c"
        var $4=($3) == -1; //@line 1552 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1552 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1552 "mathmodule.c"
        var $6=($5)!=0; //@line 1552 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1552 "mathmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1553 "mathmodule.c"
        __label__ = 4; break; //@line 1553 "mathmodule.c"
      case 3: // $bb2
        var $7=HEAP[$x]; //@line 1554 "mathmodule.c"
        var $8=___isinf($7); //@line 1554 "mathmodule.c"
        var $9=_PyBool_FromLong($8); //@line 1554 "mathmodule.c"
        HEAP[$0]=$9; //@line 1554 "mathmodule.c"
        __label__ = 4; break; //@line 1554 "mathmodule.c"
      case 4: // $bb3
        var $10=HEAP[$0]; //@line 1553 "mathmodule.c"
        HEAP[$retval]=$10; //@line 1553 "mathmodule.c"
        __label__ = 5; break; //@line 1553 "mathmodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 1553 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 1553 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initmath() {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str61)&4294967295), ((_math_methods)&4294967295), ((_module_doc)&4294967295), 0, 1013); //@line 1615 "mathmodule.c"
        HEAP[$m]=$0; //@line 1615 "mathmodule.c"
        var $1=HEAP[$m]; //@line 1616 "mathmodule.c"
        var $2=($1)==0; //@line 1616 "mathmodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1616 "mathmodule.c"
      case 1: // $bb
        var $3=_PyFloat_FromDouble(3.141592653589793); //@line 1619 "mathmodule.c"
        var $4=HEAP[$m]; //@line 1619 "mathmodule.c"
        var $5=_PyModule_AddObject($4, ((__str62)&4294967295), $3); //@line 1619 "mathmodule.c"
        var $6=_PyFloat_FromDouble(2.718281828459045); //@line 1620 "mathmodule.c"
        var $7=HEAP[$m]; //@line 1620 "mathmodule.c"
        var $8=_PyModule_AddObject($7, ((__str63)&4294967295), $6); //@line 1620 "mathmodule.c"
        __label__ = 2; break; //@line 1622 "mathmodule.c"
      case 2: // $finally
        __label__ = 3; break; //@line 1623 "mathmodule.c"
      case 3: // $return
        STACKTOP = __stackBase__;
        return; //@line 1623 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initmath"] = _initmath;

  function __Py_acosh($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $t=__stackBase__+24;
        var $t12=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 44 "_math.c"
        var $2=___isnan($1); //@line 44 "_math.c"
        var $3=((($2))|0)!=0; //@line 44 "_math.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 44 "_math.c"
      case 1: // $bb
        var $4=HEAP[$x_addr]; //@line 45 "_math.c"
        var $5=($4) * 2; //@line 45 "_math.c"
        HEAP[$0]=$5; //@line 45 "_math.c"
        __label__ = 13; break; //@line 45 "_math.c"
      case 2: // $bb1
        var $6=HEAP[$x_addr]; //@line 47 "_math.c"
        var $7=($6) < 1; //@line 47 "_math.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 47 "_math.c"
      case 3: // $bb2
        var $8=___errno_location(); //@line 48 "_math.c"
        HEAP[$8]=33; //@line 48 "_math.c"
        HEAP[$0]=NaN; //@line 50 "_math.c"
        __label__ = 13; break; //@line 50 "_math.c"
      case 4: // $bb3
        var $9=HEAP[_two_pow_p28]; //@line 55 "_math.c"
        var $10=HEAP[$x_addr]; //@line 55 "_math.c"
        var $11=($10) >= ($9); //@line 55 "_math.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 55 "_math.c"
      case 5: // $bb4
        var $12=HEAP[$x_addr]; //@line 56 "_math.c"
        var $13=___isinf($12); //@line 56 "_math.c"
        var $14=((($13))|0)!=0; //@line 56 "_math.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 56 "_math.c"
      case 6: // $bb5
        var $15=HEAP[$x_addr]; //@line 57 "_math.c"
        var $16=($15) * 2; //@line 57 "_math.c"
        HEAP[$0]=$16; //@line 57 "_math.c"
        __label__ = 13; break; //@line 57 "_math.c"
      case 7: // $bb6
        var $17=HEAP[$x_addr]; //@line 60 "_math.c"
        var $18=_llvm_log_f64($17); //@line 60 "_math.c"
        var $19=HEAP[_ln2]; //@line 60 "_math.c"
        var $20=($18) + ($19); //@line 60 "_math.c"
        HEAP[$0]=$20; //@line 60 "_math.c"
        __label__ = 13; break; //@line 60 "_math.c"
      case 8: // $bb7
        var $21=HEAP[$x_addr]; //@line 63 "_math.c"
        var $22=($21) == 1; //@line 63 "_math.c"
        if ($22) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 63 "_math.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 64 "_math.c"
        __label__ = 13; break; //@line 64 "_math.c"
      case 10: // $bb9
        var $23=HEAP[$x_addr]; //@line 66 "_math.c"
        var $24=($23) > 2; //@line 66 "_math.c"
        if ($24) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 66 "_math.c"
      case 11: // $bb10
        var $25=HEAP[$x_addr]; //@line 67 "_math.c"
        var $26=HEAP[$x_addr]; //@line 67 "_math.c"
        var $27=($25) * ($26); //@line 67 "_math.c"
        HEAP[$t]=$27; //@line 67 "_math.c"
        var $28=HEAP[$x_addr]; //@line 68 "_math.c"
        var $29=($28) * 2; //@line 68 "_math.c"
        var $30=HEAP[$t]; //@line 68 "_math.c"
        var $31=($30) - 1; //@line 68 "_math.c"
        var $32=_sqrt($31); //@line 68 "_math.c"
        var $33=HEAP[$x_addr]; //@line 68 "_math.c"
        var $34=($32) + ($33); //@line 68 "_math.c"
        var $35=-1 / ($34); //@line 68 "_math.c"
        var $36=($29) + ($35); //@line 68 "_math.c"
        var $37=_llvm_log_f64($36); //@line 68 "_math.c"
        HEAP[$0]=$37; //@line 68 "_math.c"
        __label__ = 13; break; //@line 68 "_math.c"
      case 12: // $bb11
        var $38=HEAP[$x_addr]; //@line 71 "_math.c"
        var $39=($38) - 1; //@line 71 "_math.c"
        HEAP[$t12]=$39; //@line 71 "_math.c"
        var $40=HEAP[$t12]; //@line 72 "_math.c"
        var $41=($40) * 2; //@line 72 "_math.c"
        var $42=HEAP[$t12]; //@line 72 "_math.c"
        var $43=HEAP[$t12]; //@line 72 "_math.c"
        var $44=($42) * ($43); //@line 72 "_math.c"
        var $45=($41) + ($44); //@line 72 "_math.c"
        var $46=_sqrt($45); //@line 72 "_math.c"
        var $47=HEAP[$t12]; //@line 72 "_math.c"
        var $48=($46) + ($47); //@line 72 "_math.c"
        var $49=_log1p($48); //@line 72 "_math.c"
        HEAP[$0]=$49; //@line 72 "_math.c"
        __label__ = 13; break; //@line 72 "_math.c"
      case 13: // $bb13
        var $50=HEAP[$0]; //@line 45 "_math.c"
        HEAP[$retval]=$50; //@line 45 "_math.c"
        __label__ = 14; break; //@line 45 "_math.c"
      case 14: // $return
        var $retval14=HEAP[$retval]; //@line 45 "_math.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 45 "_math.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __Py_asinh($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $w=__stackBase__+24;
        var $absx=__stackBase__+32;
        var $t=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 92 "_math.c"
        var $2=_fabs($1); //@line 92 "_math.c"
        HEAP[$absx]=$2; //@line 92 "_math.c"
        var $3=HEAP[$x_addr]; //@line 94 "_math.c"
        var $4=___isnan($3); //@line 94 "_math.c"
        var $5=((($4))|0)!=0; //@line 94 "_math.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 94 "_math.c"
      case 1: // $bb
        var $6=HEAP[$x_addr]; //@line 94 "_math.c"
        var $7=___isinf($6); //@line 94 "_math.c"
        var $8=((($7))|0)!=0; //@line 94 "_math.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 94 "_math.c"
      case 2: // $bb1
        var $9=HEAP[$x_addr]; //@line 95 "_math.c"
        var $10=($9) * 2; //@line 95 "_math.c"
        HEAP[$0]=$10; //@line 95 "_math.c"
        __label__ = 11; break; //@line 95 "_math.c"
      case 3: // $bb2
        var $11=HEAP[_two_pow_m28]; //@line 97 "_math.c"
        var $12=HEAP[$absx]; //@line 97 "_math.c"
        var $13=($12) < ($11); //@line 97 "_math.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 97 "_math.c"
      case 4: // $bb3
        var $14=HEAP[$x_addr]; //@line 98 "_math.c"
        HEAP[$0]=$14; //@line 98 "_math.c"
        __label__ = 11; break; //@line 98 "_math.c"
      case 5: // $bb4
        var $15=HEAP[_two_pow_p28]; //@line 100 "_math.c"
        var $16=HEAP[$absx]; //@line 100 "_math.c"
        var $17=($16) > ($15); //@line 100 "_math.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 100 "_math.c"
      case 6: // $bb5
        var $18=HEAP[$absx]; //@line 101 "_math.c"
        var $19=_llvm_log_f64($18); //@line 101 "_math.c"
        var $20=HEAP[_ln2]; //@line 101 "_math.c"
        var $21=($19) + ($20); //@line 101 "_math.c"
        HEAP[$w]=$21; //@line 101 "_math.c"
        __label__ = 10; break; //@line 101 "_math.c"
      case 7: // $bb6
        var $22=HEAP[$absx]; //@line 103 "_math.c"
        var $23=($22) > 2; //@line 103 "_math.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 103 "_math.c"
      case 8: // $bb7
        var $24=HEAP[$absx]; //@line 104 "_math.c"
        var $25=($24) * 2; //@line 104 "_math.c"
        var $26=HEAP[$x_addr]; //@line 104 "_math.c"
        var $27=HEAP[$x_addr]; //@line 104 "_math.c"
        var $28=($26) * ($27); //@line 104 "_math.c"
        var $29=($28) + 1; //@line 104 "_math.c"
        var $30=_sqrt($29); //@line 104 "_math.c"
        var $31=HEAP[$absx]; //@line 104 "_math.c"
        var $32=($30) + ($31); //@line 104 "_math.c"
        var $33=1 / ($32); //@line 104 "_math.c"
        var $34=($25) + ($33); //@line 104 "_math.c"
        var $35=_llvm_log_f64($34); //@line 104 "_math.c"
        HEAP[$w]=$35; //@line 104 "_math.c"
        __label__ = 10; break; //@line 104 "_math.c"
      case 9: // $bb8
        var $36=HEAP[$x_addr]; //@line 107 "_math.c"
        var $37=HEAP[$x_addr]; //@line 107 "_math.c"
        var $38=($36) * ($37); //@line 107 "_math.c"
        HEAP[$t]=$38; //@line 107 "_math.c"
        var $39=HEAP[$t]; //@line 108 "_math.c"
        var $40=($39) + 1; //@line 108 "_math.c"
        var $41=_sqrt($40); //@line 108 "_math.c"
        var $42=($41) + 1; //@line 108 "_math.c"
        var $43=HEAP[$t]; //@line 108 "_math.c"
        var $44=($43) / ($42); //@line 108 "_math.c"
        var $45=HEAP[$absx]; //@line 108 "_math.c"
        var $46=($44) + ($45); //@line 108 "_math.c"
        var $47=_log1p($46); //@line 108 "_math.c"
        HEAP[$w]=$47; //@line 108 "_math.c"
        __label__ = 10; break; //@line 108 "_math.c"
      case 10: // $bb9
        var $48=HEAP[$w]; //@line 110 "_math.c"
        var $49=HEAP[$x_addr]; //@line 110 "_math.c"
        var $50=_copysign($48, $49); //@line 110 "_math.c"
        HEAP[$0]=$50; //@line 110 "_math.c"
        __label__ = 11; break; //@line 110 "_math.c"
      case 11: // $bb10
        var $51=HEAP[$0]; //@line 95 "_math.c"
        HEAP[$retval]=$51; //@line 95 "_math.c"
        __label__ = 12; break; //@line 95 "_math.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 95 "_math.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 95 "_math.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __Py_atanh($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $absx=__stackBase__+24;
        var $t=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 137 "_math.c"
        var $2=___isnan($1); //@line 137 "_math.c"
        var $3=((($2))|0)!=0; //@line 137 "_math.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 137 "_math.c"
      case 1: // $bb
        var $4=HEAP[$x_addr]; //@line 138 "_math.c"
        var $5=($4) * 2; //@line 138 "_math.c"
        HEAP[$0]=$5; //@line 138 "_math.c"
        __label__ = 10; break; //@line 138 "_math.c"
      case 2: // $bb1
        var $6=HEAP[$x_addr]; //@line 140 "_math.c"
        var $7=_fabs($6); //@line 140 "_math.c"
        HEAP[$absx]=$7; //@line 140 "_math.c"
        var $8=HEAP[$absx]; //@line 141 "_math.c"
        var $9=($8) >= 1; //@line 141 "_math.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 141 "_math.c"
      case 3: // $bb2
        var $10=___errno_location(); //@line 142 "_math.c"
        HEAP[$10]=33; //@line 142 "_math.c"
        HEAP[$0]=NaN; //@line 144 "_math.c"
        __label__ = 10; break; //@line 144 "_math.c"
      case 4: // $bb3
        var $11=HEAP[_two_pow_m28]; //@line 149 "_math.c"
        var $12=HEAP[$absx]; //@line 149 "_math.c"
        var $13=($12) < ($11); //@line 149 "_math.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 149 "_math.c"
      case 5: // $bb4
        var $14=HEAP[$x_addr]; //@line 150 "_math.c"
        HEAP[$0]=$14; //@line 150 "_math.c"
        __label__ = 10; break; //@line 150 "_math.c"
      case 6: // $bb5
        var $15=HEAP[$absx]; //@line 152 "_math.c"
        var $16=($15) < 0.5; //@line 152 "_math.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 152 "_math.c"
      case 7: // $bb6
        var $17=HEAP[$absx]; //@line 153 "_math.c"
        var $18=($17) * 2; //@line 153 "_math.c"
        HEAP[$t]=$18; //@line 153 "_math.c"
        var $19=HEAP[$t]; //@line 154 "_math.c"
        var $20=HEAP[$absx]; //@line 154 "_math.c"
        var $21=($19) * ($20); //@line 154 "_math.c"
        var $22=HEAP[$absx]; //@line 154 "_math.c"
        var $23=1 - ($22); //@line 154 "_math.c"
        var $24=($21) / ($23); //@line 154 "_math.c"
        var $25=HEAP[$t]; //@line 154 "_math.c"
        var $26=($24) + ($25); //@line 154 "_math.c"
        var $27=_log1p($26); //@line 154 "_math.c"
        var $28=($27) * 0.5; //@line 154 "_math.c"
        HEAP[$t]=$28; //@line 154 "_math.c"
        __label__ = 9; break; //@line 154 "_math.c"
      case 8: // $bb7
        var $29=HEAP[$absx]; //@line 157 "_math.c"
        var $30=($29) * 2; //@line 157 "_math.c"
        var $31=HEAP[$absx]; //@line 157 "_math.c"
        var $32=1 - ($31); //@line 157 "_math.c"
        var $33=($30) / ($32); //@line 157 "_math.c"
        var $34=_log1p($33); //@line 157 "_math.c"
        var $35=($34) * 0.5; //@line 157 "_math.c"
        HEAP[$t]=$35; //@line 157 "_math.c"
        __label__ = 9; break; //@line 157 "_math.c"
      case 9: // $bb8
        var $36=HEAP[$t]; //@line 159 "_math.c"
        var $37=HEAP[$x_addr]; //@line 159 "_math.c"
        var $38=_copysign($36, $37); //@line 159 "_math.c"
        HEAP[$0]=$38; //@line 159 "_math.c"
        __label__ = 10; break; //@line 159 "_math.c"
      case 10: // $bb9
        var $39=HEAP[$0]; //@line 138 "_math.c"
        HEAP[$retval]=$39; //@line 138 "_math.c"
        __label__ = 11; break; //@line 138 "_math.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 138 "_math.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 138 "_math.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __Py_expm1($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $u=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 176 "_math.c"
        var $2=_fabs($1); //@line 176 "_math.c"
        var $3=($2) < 0.7; //@line 176 "_math.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 176 "_math.c"
      case 1: // $bb
        var $4=HEAP[$x_addr]; //@line 178 "_math.c"
        var $5=_llvm_exp_f64($4); //@line 178 "_math.c"
        HEAP[$u]=$5; //@line 178 "_math.c"
        var $6=HEAP[$u]; //@line 179 "_math.c"
        var $7=($6) == 1; //@line 179 "_math.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 179 "_math.c"
      case 2: // $bb1
        var $8=HEAP[$x_addr]; //@line 180 "_math.c"
        HEAP[$0]=$8; //@line 180 "_math.c"
        __label__ = 5; break; //@line 180 "_math.c"
      case 3: // $bb2
        var $9=HEAP[$u]; //@line 182 "_math.c"
        var $10=($9) - 1; //@line 182 "_math.c"
        var $11=HEAP[$x_addr]; //@line 182 "_math.c"
        var $12=($10) * ($11); //@line 182 "_math.c"
        var $13=HEAP[$u]; //@line 182 "_math.c"
        var $14=_llvm_log_f64($13); //@line 182 "_math.c"
        var $15=($12) / ($14); //@line 182 "_math.c"
        HEAP[$0]=$15; //@line 182 "_math.c"
        __label__ = 5; break; //@line 182 "_math.c"
      case 4: // $bb3
        var $16=HEAP[$x_addr]; //@line 185 "_math.c"
        var $17=_llvm_exp_f64($16); //@line 185 "_math.c"
        var $18=($17) - 1; //@line 185 "_math.c"
        HEAP[$0]=$18; //@line 185 "_math.c"
        __label__ = 5; break; //@line 185 "_math.c"
      case 5: // $bb4
        var $19=HEAP[$0]; //@line 180 "_math.c"
        HEAP[$retval]=$19; //@line 180 "_math.c"
        __label__ = 6; break; //@line 180 "_math.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 180 "_math.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 180 "_math.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __Py_log1p($x) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr=__stackBase__;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+16;
        var $y=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$x_addr]=$x;
        var $1=HEAP[$x_addr]; //@line 216 "_math.c"
        var $2=_fabs($1); //@line 216 "_math.c"
        var $3=($2) < 1.1102230246251565e-16; //@line 216 "_math.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 216 "_math.c"
      case 1: // $bb
        var $4=HEAP[$x_addr]; //@line 217 "_math.c"
        HEAP[$0]=$4; //@line 217 "_math.c"
        __label__ = 6; break; //@line 217 "_math.c"
      case 2: // $bb1
        var $5=HEAP[$x_addr]; //@line 219 "_math.c"
        var $6=($5) < -0.5; //@line 219 "_math.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 219 "_math.c"
      case 3: // $bb2
        var $7=HEAP[$x_addr]; //@line 219 "_math.c"
        var $8=($7) > 1; //@line 219 "_math.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 219 "_math.c"
      case 4: // $bb3
        var $9=HEAP[$x_addr]; //@line 225 "_math.c"
        var $10=($9) + 1; //@line 225 "_math.c"
        HEAP[$y]=$10; //@line 225 "_math.c"
        var $11=HEAP[$y]; //@line 226 "_math.c"
        var $12=_llvm_log_f64($11); //@line 226 "_math.c"
        var $13=HEAP[$y]; //@line 226 "_math.c"
        var $14=($13) - 1; //@line 226 "_math.c"
        var $15=HEAP[$x_addr]; //@line 226 "_math.c"
        var $16=($14) - ($15); //@line 226 "_math.c"
        var $17=HEAP[$y]; //@line 226 "_math.c"
        var $18=($16) / ($17); //@line 226 "_math.c"
        var $19=($12) - ($18); //@line 226 "_math.c"
        HEAP[$0]=$19; //@line 226 "_math.c"
        __label__ = 6; break; //@line 226 "_math.c"
      case 5: // $bb4
        var $20=HEAP[$x_addr]; //@line 230 "_math.c"
        var $21=($20) + 1; //@line 230 "_math.c"
        var $22=_llvm_log_f64($21); //@line 230 "_math.c"
        HEAP[$0]=$22; //@line 230 "_math.c"
        __label__ = 6; break; //@line 230 "_math.c"
      case 6: // $bb5
        var $23=HEAP[$0]; //@line 217 "_math.c"
        HEAP[$retval]=$23; //@line 217 "_math.c"
        __label__ = 7; break; //@line 217 "_math.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 217 "_math.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 217 "_math.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_acos,0,_acosh,0,_asin,0,_asinh,0,_atan,0,_m_atan2,0,_atanh,0,_ceil,0,_copysign,0,_cos,0,_cosh,0,_m_erf,0,_m_erfc,0,_exp,0,_expm1,0,_fabs,0,_floor,0,_m_tgamma,0,_m_lgamma,0,_log1p,0,_sin,0,_sinh,0,_sqrt,0,_tan,0,_tanh,0,_m_log,0,_m_log10,0,_math_acos,0,_math_acosh,0,_math_asin,0,_math_asinh,0,_math_atan,0,_math_atan2,0,_math_atanh,0,_math_ceil,0,_math_copysign,0,_math_cos,0,_math_cosh,0,_math_degrees,0,_math_erf,0,_math_erfc,0,_math_exp,0,_math_expm1,0,_math_fabs,0,_math_factorial,0,_math_floor,0,_math_fmod,0,_math_frexp,0,_math_fsum,0,_math_gamma,0,_math_hypot,0,_math_isinf,0,_math_isnan,0,_math_ldexp,0,_math_lgamma,0,_math_log,0,_math_log1p,0,_math_log10,0,_math_modf,0,_math_pow,0,_math_radians,0,_math_sin,0,_math_sinh,0,_math_sqrt,0,_math_tan,0,_math_tanh,0,_math_trunc,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_pi=allocate([3.141592653589793], "double", ALLOC_NORMAL);
_sqrtpi=allocate([1.772453850905516], "double", ALLOC_NORMAL);
__str=allocate([40,115,105,122,101,111,102,32,40,120,41,32,61,61,32,115,105,122,101,111,102,32,40,102,108,111,97,116,41,32,63,32,95,95,102,105,110,105,116,101,102,32,40,120,41,32,58,32,115,105,122,101,111,102,32,40,120,41,32,61,61,32,115,105,122,101,111,102,32,40,100,111,117,98,108,101,41,32,63,32,95,95,102,105,110,105,116,101,32,40,120,41,32,58,32,95,95,102,105,110,105,116,101,108,32,40,120,41,41,0] /* (sizeof (x) == sizeo */, "i8", ALLOC_NORMAL);
__str1=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,109,97,116,104,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/m */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8323=allocate([115,105,110,112,105,0] /* sinpi\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([48,32,60,61,32,110,32,38,38,32,110,32,60,61,32,52,0] /* 0 <= n && n <= 4\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([48,0] /* 0\00 */, "i8", ALLOC_NORMAL);
_lanczos_g=allocate([6.02468004077673], "double", ALLOC_NORMAL);
_lanczos_g_minus_half=allocate([5.52468004077673], "double", ALLOC_NORMAL);
_lanczos_num_coeffs=allocate([23531376880.41076, 0, 0, 0, 0, 0, 0, 0, 42919803642.6491, 0, 0, 0, 0, 0, 0, 0, 35711959237.35567, 0, 0, 0, 0, 0, 0, 0, 17921034426.03721, 0, 0, 0, 0, 0, 0, 0, 6039542586.352028, 0, 0, 0, 0, 0, 0, 0, 1439720407.3117216, 0, 0, 0, 0, 0, 0, 0, 248874557.86205417, 0, 0, 0, 0, 0, 0, 0, 31426415.585400194, 0, 0, 0, 0, 0, 0, 0, 2876370.6289353725, 0, 0, 0, 0, 0, 0, 0, 186056.26539522348, 0, 0, 0, 0, 0, 0, 0, 8071.672002365816, 0, 0, 0, 0, 0, 0, 0, 210.82427775157936, 0, 0, 0, 0, 0, 0, 0, 2.5066282746310002, 0, 0, 0, 0, 0, 0, 0], ["double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0], ALLOC_NORMAL);
_lanczos_den_coeffs=allocate([0, 0, 0, 0, 0, 0, 0, 0, 39916800, 0, 0, 0, 0, 0, 0, 0, 120543840, 0, 0, 0, 0, 0, 0, 0, 150917976, 0, 0, 0, 0, 0, 0, 0, 105258076, 0, 0, 0, 0, 0, 0, 0, 45995730, 0, 0, 0, 0, 0, 0, 0, 13339535, 0, 0, 0, 0, 0, 0, 0, 2637558, 0, 0, 0, 0, 0, 0, 0, 357423, 0, 0, 0, 0, 0, 0, 0, 32670, 0, 0, 0, 0, 0, 0, 0, 1925, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0], ALLOC_NORMAL);
_gamma_integral=allocate([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 720, 0, 0, 0, 0, 0, 0, 0, 5040, 0, 0, 0, 0, 0, 0, 0, 40320, 0, 0, 0, 0, 0, 0, 0, 362880, 0, 0, 0, 0, 0, 0, 0, 3628800, 0, 0, 0, 0, 0, 0, 0, 39916800, 0, 0, 0, 0, 0, 0, 0, 479001600, 0, 0, 0, 0, 0, 0, 0, 6227020800, 0, 0, 0, 0, 0, 0, 0, 87178291200, 0, 0, 0, 0, 0, 0, 0, 1307674368000, 0, 0, 0, 0, 0, 0, 0, 20922789888000, 0, 0, 0, 0, 0, 0, 0, 355687428096000, 0, 0, 0, 0, 0, 0, 0, 6402373705728000, 0, 0, 0, 0, 0, 0, 0, 121645100408832000, 0, 0, 0, 0, 0, 0, 0, 2432902008176640000, 0, 0, 0, 0, 0, 0, 0, 51090942171709440000, 0, 0, 0, 0, 0, 0, 0, 1.1240007277776077e+21, 0, 0, 0, 0, 0, 0, 0], ["double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0], ALLOC_NORMAL);
__str4=allocate([120,32,62,32,48,46,48,0] /* x > 0.0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8369=allocate([108,97,110,99,122,111,115,95,115,117,109,0] /* lanczos_sum\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([40,42,95,95,101,114,114,110,111,95,108,111,99,97,116,105,111,110,32,40,41,41,0] /* (___errno_location ( */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8706=allocate([105,115,95,101,114,114,111,114,0] /* is_error\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([109,97,116,104,32,100,111,109,97,105,110,32,101,114,114,111,114,0] /* math domain error\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([109,97,116,104,32,114,97,110,103,101,32,101,114,114,111,114,0] /* math range error\00 */, "i8", ALLOC_NORMAL);
_math_acos_doc=allocate([97,99,111,115,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,99,111,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0] /* acos(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
_math_acosh_doc=allocate([97,99,111,115,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,97,114,99,32,99,111,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0] /* acosh(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
_math_asin_doc=allocate([97,115,105,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0] /* asin(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
_math_asinh_doc=allocate([97,115,105,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,97,114,99,32,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0] /* asinh(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
_math_atan_doc=allocate([97,116,97,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,116,97,110,103,101,110,116,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0] /* atan(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
__str8=allocate([97,116,97,110,50,0] /* atan2\00 */, "i8", ALLOC_NORMAL);
_math_atan2_doc=allocate([97,116,97,110,50,40,121,44,32,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,116,97,110,103,101,110,116,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,121,47,120,46,10,85,110,108,105,107,101,32,97,116,97,110,40,121,47,120,41,44,32,116,104,101,32,115,105,103,110,115,32,111,102,32,98,111,116,104,32,120,32,97,110,100,32,121,32,97,114,101,32,99,111,110,115,105,100,101,114,101,100,46,0] /* atan2(y, x)\0A\0ARet */, "i8", ALLOC_NORMAL);
_math_atanh_doc=allocate([97,116,97,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,97,114,99,32,116,97,110,103,101,110,116,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0] /* atanh(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
_math_ceil_doc=allocate([99,101,105,108,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,99,101,105,108,105,110,103,32,111,102,32,120,32,97,115,32,97,32,102,108,111,97,116,46,10,84,104,105,115,32,105,115,32,116,104,101,32,115,109,97,108,108,101,115,116,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,32,62,61,32,120,46,0] /* ceil(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
__str9=allocate([99,111,112,121,115,105,103,110,0] /* copysign\00 */, "i8", ALLOC_NORMAL);
_math_copysign_doc=allocate([99,111,112,121,115,105,103,110,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,120,32,119,105,116,104,32,116,104,101,32,115,105,103,110,32,111,102,32,121,46,0] /* copysign(x, y)\0A\0A */, "i8", ALLOC_NORMAL);
_math_cos_doc=allocate([99,111,115,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,99,111,115,105,110,101,32,111,102,32,120,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,46,0] /* cos(x)\0A\0AReturn t */, "i8", ALLOC_NORMAL);
_math_cosh_doc=allocate([99,111,115,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,99,111,115,105,110,101,32,111,102,32,120,46,0] /* cosh(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
_math_erf_doc=allocate([101,114,102,40,120,41,10,10,69,114,114,111,114,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0] /* erf(x)\0A\0AError fu */, "i8", ALLOC_NORMAL);
_math_erfc_doc=allocate([101,114,102,99,40,120,41,10,10,67,111,109,112,108,101,109,101,110,116,97,114,121,32,101,114,114,111,114,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0] /* erfc(x)\0A\0AComplem */, "i8", ALLOC_NORMAL);
_math_exp_doc=allocate([101,120,112,40,120,41,10,10,82,101,116,117,114,110,32,101,32,114,97,105,115,101,100,32,116,111,32,116,104,101,32,112,111,119,101,114,32,111,102,32,120,46,0] /* exp(x)\0A\0AReturn e */, "i8", ALLOC_NORMAL);
_math_expm1_doc=allocate([101,120,112,109,49,40,120,41,10,10,82,101,116,117,114,110,32,101,120,112,40,120,41,45,49,46,10,84,104,105,115,32,102,117,110,99,116,105,111,110,32,97,118,111,105,100,115,32,116,104,101,32,108,111,115,115,32,111,102,32,112,114,101,99,105,115,105,111,110,32,105,110,118,111,108,118,101,100,32,105,110,32,116,104,101,32,100,105,114,101,99,116,32,101,118,97,108,117,97,116,105,111,110,32,111,102,32,101,120,112,40,120,41,45,49,32,102,111,114,32,115,109,97,108,108,32,120,46,0] /* expm1(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
_math_fabs_doc=allocate([102,97,98,115,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,98,115,111,108,117,116,101,32,118,97,108,117,101,32,111,102,32,116,104,101,32,102,108,111,97,116,32,120,46,0] /* fabs(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
_math_floor_doc=allocate([102,108,111,111,114,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,102,108,111,111,114,32,111,102,32,120,32,97,115,32,97,32,102,108,111,97,116,46,10,84,104,105,115,32,105,115,32,116,104,101,32,108,97,114,103,101,115,116,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,32,60,61,32,120,46,0] /* floor(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
_math_gamma_doc=allocate([103,97,109,109,97,40,120,41,10,10,71,97,109,109,97,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0] /* gamma(x)\0A\0AGamma  */, "i8", ALLOC_NORMAL);
_math_lgamma_doc=allocate([108,103,97,109,109,97,40,120,41,10,10,78,97,116,117,114,97,108,32,108,111,103,97,114,105,116,104,109,32,111,102,32,97,98,115,111,108,117,116,101,32,118,97,108,117,101,32,111,102,32,71,97,109,109,97,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0] /* lgamma(x)\0A\0ANatur */, "i8", ALLOC_NORMAL);
_math_log1p_doc=allocate([108,111,103,49,112,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,110,97,116,117,114,97,108,32,108,111,103,97,114,105,116,104,109,32,111,102,32,49,43,120,32,40,98,97,115,101,32,101,41,46,10,84,104,101,32,114,101,115,117,108,116,32,105,115,32,99,111,109,112,117,116,101,100,32,105,110,32,97,32,119,97,121,32,119,104,105,99,104,32,105,115,32,97,99,99,117,114,97,116,101,32,102,111,114,32,120,32,110,101,97,114,32,122,101,114,111,46,0] /* log1p(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
_math_sin_doc=allocate([115,105,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,115,105,110,101,32,111,102,32,120,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,46,0] /* sin(x)\0A\0AReturn t */, "i8", ALLOC_NORMAL);
_math_sinh_doc=allocate([115,105,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,115,105,110,101,32,111,102,32,120,46,0] /* sinh(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
_math_sqrt_doc=allocate([115,113,114,116,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,115,113,117,97,114,101,32,114,111,111,116,32,111,102,32,120,46,0] /* sqrt(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
_math_tan_doc=allocate([116,97,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,116,97,110,103,101,110,116,32,111,102,32,120,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,46,0] /* tan(x)\0A\0AReturn t */, "i8", ALLOC_NORMAL);
_math_tanh_doc=allocate([116,97,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,116,97,110,103,101,110,116,32,111,102,32,120,46,0] /* tanh(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
__str10=allocate([109,97,116,104,46,102,115,117,109,32,112,97,114,116,105,97,108,115,0] /* math.fsum partials\0 */, "i8", ALLOC_NORMAL);
__str11=allocate([48,32,60,61,32,110,32,38,38,32,110,32,60,61,32,109,0] /* 0 <= n && n <= m\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9121=allocate([109,97,116,104,95,102,115,117,109,0] /* math_fsum\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([40,109,32,61,61,32,51,50,32,38,38,32,112,32,61,61,32,112,115,41,32,124,124,32,40,109,32,62,32,51,50,32,38,38,32,112,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,41,0] /* (m == 32 && p == ps) */, "i8", ALLOC_NORMAL);
__str13=allocate([105,110,116,101,114,109,101,100,105,97,116,101,32,111,118,101,114,102,108,111,119,32,105,110,32,102,115,117,109,0] /* intermediate overflo */, "i8", ALLOC_NORMAL);
__str14=allocate([45,105,110,102,32,43,32,105,110,102,32,105,110,32,102,115,117,109,0] /* -inf + inf in fsum\0 */, "i8", ALLOC_NORMAL);
__str15=allocate([102,97,98,115,40,121,41,32,60,32,102,97,98,115,40,120,41,0] /* fabs(y) < fabs(x)\00 */, "i8", ALLOC_NORMAL);
_math_fsum_doc=allocate([102,115,117,109,40,105,116,101,114,97,98,108,101,41,10,10,82,101,116,117,114,110,32,97,110,32,97,99,99,117,114,97,116,101,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,115,117,109,32,111,102,32,118,97,108,117,101,115,32,105,110,32,116,104,101,32,105,116,101,114,97,98,108,101,46,10,65,115,115,117,109,101,115,32,73,69,69,69,45,55,53,52,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,97,114,105,116,104,109,101,116,105,99,46,0] /* fsum(iterable)\0A\0A */, "i8", ALLOC_NORMAL);
__str16=allocate([102,97,99,116,111,114,105,97,108,40,41,32,111,110,108,121,32,97,99,99,101,112,116,115,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,115,0] /* factorial() only acc */, "i8", ALLOC_NORMAL);
__str17=allocate([102,97,99,116,111,114,105,97,108,40,41,32,110,111,116,32,100,101,102,105,110,101,100,32,102,111,114,32,110,101,103,97,116,105,118,101,32,118,97,108,117,101,115,0] /* factorial() not defi */, "i8", ALLOC_NORMAL);
_math_factorial_doc=allocate([102,97,99,116,111,114,105,97,108,40,120,41,32,45,62,32,73,110,116,101,103,114,97,108,10,10,70,105,110,100,32,120,33,46,32,82,97,105,115,101,32,97,32,86,97,108,117,101,69,114,114,111,114,32,105,102,32,120,32,105,115,32,110,101,103,97,116,105,118,101,32,111,114,32,110,111,110,45,105,110,116,101,103,114,97,108,46,0] /* factorial(x) -> Inte */, "i8", ALLOC_NORMAL);
__str18=allocate([95,95,116,114,117,110,99,95,95,0] /* __trunc__\00 */, "i8", ALLOC_NORMAL);
_math_trunc_doc=allocate([116,114,117,110,99,40,120,58,82,101,97,108,41,32,45,62,32,73,110,116,101,103,114,97,108,10,10,84,114,117,110,99,97,116,101,115,32,120,32,116,111,32,116,104,101,32,110,101,97,114,101,115,116,32,73,110,116,101,103,114,97,108,32,116,111,119,97,114,100,32,48,46,32,85,115,101,115,32,116,104,101,32,95,95,116,114,117,110,99,95,95,32,109,97,103,105,99,32,109,101,116,104,111,100,46,0] /* trunc(x:Real) -> Int */, "i8", ALLOC_NORMAL);
__str19=allocate([40,100,105,41,0] /* (di)\00 */, "i8", ALLOC_NORMAL);
_math_frexp_doc=allocate([102,114,101,120,112,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,109,97,110,116,105,115,115,97,32,97,110,100,32,101,120,112,111,110,101,110,116,32,111,102,32,120,44,32,97,115,32,112,97,105,114,32,40,109,44,32,101,41,46,10,109,32,105,115,32,97,32,102,108,111,97,116,32,97,110,100,32,101,32,105,115,32,97,110,32,105,110,116,44,32,115,117,99,104,32,116,104,97,116,32,120,32,61,32,109,32,42,32,50,46,42,42,101,46,10,73,102,32,120,32,105,115,32,48,44,32,109,32,97,110,100,32,101,32,97,114,101,32,98,111,116,104,32,48,46,32,32,69,108,115,101,32,48,46,53,32,60,61,32,97,98,115,40,109,41,32,60,32,49,46,48,46,0] /* frexp(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
__str20=allocate([100,79,58,108,100,101,120,112,0] /* dO:ldexp\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([69,120,112,101,99,116,101,100,32,97,110,32,105,110,116,32,111,114,32,108,111,110,103,32,97,115,32,115,101,99,111,110,100,32,97,114,103,117,109,101,110,116,32,116,111,32,108,100,101,120,112,46,0] /* Expected an int or l */, "i8", ALLOC_NORMAL);
_math_ldexp_doc=allocate([108,100,101,120,112,40,120,44,32,105,41,10,10,82,101,116,117,114,110,32,120,32,42,32,40,50,42,42,105,41,46,0] /* ldexp(x, i)\0A\0ARet */, "i8", ALLOC_NORMAL);
__str22=allocate([40,100,100,41,0] /* (dd)\00 */, "i8", ALLOC_NORMAL);
_math_modf_doc=allocate([109,111,100,102,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,102,114,97,99,116,105,111,110,97,108,32,97,110,100,32,105,110,116,101,103,101,114,32,112,97,114,116,115,32,111,102,32,120,46,32,32,66,111,116,104,32,114,101,115,117,108,116,115,32,99,97,114,114,121,32,116,104,101,32,115,105,103,110,10,111,102,32,120,32,97,110,100,32,97,114,101,32,102,108,111,97,116,115,46,0] /* modf(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
__str23=allocate([108,111,103,0] /* log\00 */, "i8", ALLOC_NORMAL);
_math_log_doc=allocate([108,111,103,40,120,91,44,32,98,97,115,101,93,41,10,10,82,101,116,117,114,110,32,116,104,101,32,108,111,103,97,114,105,116,104,109,32,111,102,32,120,32,116,111,32,116,104,101,32,103,105,118,101,110,32,98,97,115,101,46,10,73,102,32,116,104,101,32,98,97,115,101,32,110,111,116,32,115,112,101,99,105,102,105,101,100,44,32,114,101,116,117,114,110,115,32,116,104,101,32,110,97,116,117,114,97,108,32,108,111,103,97,114,105,116,104,109,32,40,98,97,115,101,32,101,41,32,111,102,32,120,46,0] /* log(x[, base])\0A\0A */, "i8", ALLOC_NORMAL);
__str24=allocate([108,111,103,49,48,0] /* log10\00 */, "i8", ALLOC_NORMAL);
_math_log10_doc=allocate([108,111,103,49,48,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,98,97,115,101,32,49,48,32,108,111,103,97,114,105,116,104,109,32,111,102,32,120,46,0] /* log10(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
__str25=allocate([102,109,111,100,0] /* fmod\00 */, "i8", ALLOC_NORMAL);
_math_fmod_doc=allocate([102,109,111,100,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,102,109,111,100,40,120,44,32,121,41,44,32,97,99,99,111,114,100,105,110,103,32,116,111,32,112,108,97,116,102,111,114,109,32,67,46,32,32,120,32,37,32,121,32,109,97,121,32,100,105,102,102,101,114,46,0] /* fmod(x, y)\0A\0ARetu */, "i8", ALLOC_NORMAL);
__str26=allocate([104,121,112,111,116,0] /* hypot\00 */, "i8", ALLOC_NORMAL);
_math_hypot_doc=allocate([104,121,112,111,116,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,116,104,101,32,69,117,99,108,105,100,101,97,110,32,100,105,115,116,97,110,99,101,44,32,115,113,114,116,40,120,42,120,32,43,32,121,42,121,41,46,0] /* hypot(x, y)\0A\0ARet */, "i8", ALLOC_NORMAL);
__str27=allocate([112,111,119,0] /* pow\00 */, "i8", ALLOC_NORMAL);
_math_pow_doc=allocate([112,111,119,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,120,42,42,121,32,40,120,32,116,111,32,116,104,101,32,112,111,119,101,114,32,111,102,32,121,41,46,0] /* pow(x, y)\0A\0ARetur */, "i8", ALLOC_NORMAL);
_degToRad=allocate([0.017453292519943295], "double", ALLOC_NORMAL);
_radToDeg=allocate([57.29577951308232], "double", ALLOC_NORMAL);
_math_degrees_doc=allocate([100,101,103,114,101,101,115,40,120,41,10,10,67,111,110,118,101,114,116,32,97,110,103,108,101,32,120,32,102,114,111,109,32,114,97,100,105,97,110,115,32,116,111,32,100,101,103,114,101,101,115,46,0] /* degrees(x)\0A\0AConv */, "i8", ALLOC_NORMAL);
_math_radians_doc=allocate([114,97,100,105,97,110,115,40,120,41,10,10,67,111,110,118,101,114,116,32,97,110,103,108,101,32,120,32,102,114,111,109,32,100,101,103,114,101,101,115,32,116,111,32,114,97,100,105,97,110,115,46,0] /* radians(x)\0A\0AConv */, "i8", ALLOC_NORMAL);
_math_isnan_doc=allocate([105,115,110,97,110,40,120,41,32,45,62,32,98,111,111,108,10,10,67,104,101,99,107,32,105,102,32,102,108,111,97,116,32,120,32,105,115,32,110,111,116,32,97,32,110,117,109,98,101,114,32,40,78,97,78,41,46,0] /* isnan(x) -> bool\0A\ */, "i8", ALLOC_NORMAL);
_math_isinf_doc=allocate([105,115,105,110,102,40,120,41,32,45,62,32,98,111,111,108,10,10,67,104,101,99,107,32,105,102,32,102,108,111,97,116,32,120,32,105,115,32,105,110,102,105,110,105,116,101,32,40,112,111,115,105,116,105,118,101,32,111,114,32,110,101,103,97,116,105,118,101,41,46,0] /* isinf(x) -> bool\0A\ */, "i8", ALLOC_NORMAL);
__str28=allocate([97,99,111,115,0] /* acos\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([97,99,111,115,104,0] /* acosh\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([97,115,105,110,0] /* asin\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([97,115,105,110,104,0] /* asinh\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([97,116,97,110,0] /* atan\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([97,116,97,110,104,0] /* atanh\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([99,101,105,108,0] /* ceil\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([99,111,115,0] /* cos\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([99,111,115,104,0] /* cosh\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([100,101,103,114,101,101,115,0] /* degrees\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([101,114,102,0] /* erf\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([101,114,102,99,0] /* erfc\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([101,120,112,0] /* exp\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([101,120,112,109,49,0] /* expm1\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([102,97,98,115,0] /* fabs\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([102,97,99,116,111,114,105,97,108,0] /* factorial\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([102,108,111,111,114,0] /* floor\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([102,114,101,120,112,0] /* frexp\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([102,115,117,109,0] /* fsum\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([103,97,109,109,97,0] /* gamma\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([105,115,105,110,102,0] /* isinf\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([105,115,110,97,110,0] /* isnan\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([108,100,101,120,112,0] /* ldexp\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([108,103,97,109,109,97,0] /* lgamma\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([108,111,103,49,112,0] /* log1p\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([109,111,100,102,0] /* modf\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([114,97,100,105,97,110,115,0] /* radians\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([115,105,110,0] /* sin\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([115,105,110,104,0] /* sinh\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([115,113,114,116,0] /* sqrt\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([116,97,110,0] /* tan\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([116,97,110,104,0] /* tanh\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([116,114,117,110,99,0] /* trunc\00 */, "i8", ALLOC_NORMAL);
_math_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([84,104,105,115,32,109,111,100,117,108,101,32,105,115,32,97,108,119,97,121,115,32,97,118,97,105,108,97,98,108,101,46,32,32,73,116,32,112,114,111,118,105,100,101,115,32,97,99,99,101,115,115,32,116,111,32,116,104,101,10,109,97,116,104,101,109,97,116,105,99,97,108,32,102,117,110,99,116,105,111,110,115,32,100,101,102,105,110,101,100,32,98,121,32,116,104,101,32,67,32,115,116,97,110,100,97,114,100,46,0] /* This module is alway */, "i8", ALLOC_NORMAL);
__str61=allocate([109,97,116,104,0] /* math\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([112,105,0] /* pi\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([101,0] /* e\00 */, "i8", ALLOC_NORMAL);
_ln2=allocate([0.6931471805599453], "double", ALLOC_NORMAL);
_two_pow_m28=allocate([3.725290298461914e-9], "double", ALLOC_NORMAL);
_two_pow_p28=allocate([268435456], "double", ALLOC_NORMAL);
_zero=allocate(1, "double", ALLOC_NORMAL);
HEAP[_math_methods]=((__str28)&4294967295);
HEAP[_math_methods+4]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_math_methods+12]=((_math_acos_doc)&4294967295);
HEAP[_math_methods+16]=((__str29)&4294967295);
HEAP[_math_methods+20]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_math_methods+28]=((_math_acosh_doc)&4294967295);
HEAP[_math_methods+32]=((__str30)&4294967295);
HEAP[_math_methods+36]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_math_methods+44]=((_math_asin_doc)&4294967295);
HEAP[_math_methods+48]=((__str31)&4294967295);
HEAP[_math_methods+52]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_math_methods+60]=((_math_asinh_doc)&4294967295);
HEAP[_math_methods+64]=((__str32)&4294967295);
HEAP[_math_methods+68]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_math_methods+76]=((_math_atan_doc)&4294967295);
HEAP[_math_methods+80]=((__str8)&4294967295);
HEAP[_math_methods+84]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_math_methods+92]=((_math_atan2_doc)&4294967295);
HEAP[_math_methods+96]=((__str33)&4294967295);
HEAP[_math_methods+100]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_math_methods+108]=((_math_atanh_doc)&4294967295);
HEAP[_math_methods+112]=((__str34)&4294967295);
HEAP[_math_methods+116]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_math_methods+124]=((_math_ceil_doc)&4294967295);
HEAP[_math_methods+128]=((__str9)&4294967295);
HEAP[_math_methods+132]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_math_methods+140]=((_math_copysign_doc)&4294967295);
HEAP[_math_methods+144]=((__str35)&4294967295);
HEAP[_math_methods+148]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_math_methods+156]=((_math_cos_doc)&4294967295);
HEAP[_math_methods+160]=((__str36)&4294967295);
HEAP[_math_methods+164]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_math_methods+172]=((_math_cosh_doc)&4294967295);
HEAP[_math_methods+176]=((__str37)&4294967295);
HEAP[_math_methods+180]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_math_methods+188]=((_math_degrees_doc)&4294967295);
HEAP[_math_methods+192]=((__str38)&4294967295);
HEAP[_math_methods+196]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_math_methods+204]=((_math_erf_doc)&4294967295);
HEAP[_math_methods+208]=((__str39)&4294967295);
HEAP[_math_methods+212]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_math_methods+220]=((_math_erfc_doc)&4294967295);
HEAP[_math_methods+224]=((__str40)&4294967295);
HEAP[_math_methods+228]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_math_methods+236]=((_math_exp_doc)&4294967295);
HEAP[_math_methods+240]=((__str41)&4294967295);
HEAP[_math_methods+244]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_math_methods+252]=((_math_expm1_doc)&4294967295);
HEAP[_math_methods+256]=((__str42)&4294967295);
HEAP[_math_methods+260]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_math_methods+268]=((_math_fabs_doc)&4294967295);
HEAP[_math_methods+272]=((__str43)&4294967295);
HEAP[_math_methods+276]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_math_methods+284]=((_math_factorial_doc)&4294967295);
HEAP[_math_methods+288]=((__str44)&4294967295);
HEAP[_math_methods+292]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_math_methods+300]=((_math_floor_doc)&4294967295);
HEAP[_math_methods+304]=((__str25)&4294967295);
HEAP[_math_methods+308]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_math_methods+316]=((_math_fmod_doc)&4294967295);
HEAP[_math_methods+320]=((__str45)&4294967295);
HEAP[_math_methods+324]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_math_methods+332]=((_math_frexp_doc)&4294967295);
HEAP[_math_methods+336]=((__str46)&4294967295);
HEAP[_math_methods+340]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_math_methods+348]=((_math_fsum_doc)&4294967295);
HEAP[_math_methods+352]=((__str47)&4294967295);
HEAP[_math_methods+356]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_math_methods+364]=((_math_gamma_doc)&4294967295);
HEAP[_math_methods+368]=((__str26)&4294967295);
HEAP[_math_methods+372]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_math_methods+380]=((_math_hypot_doc)&4294967295);
HEAP[_math_methods+384]=((__str48)&4294967295);
HEAP[_math_methods+388]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_math_methods+396]=((_math_isinf_doc)&4294967295);
HEAP[_math_methods+400]=((__str49)&4294967295);
HEAP[_math_methods+404]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_math_methods+412]=((_math_isnan_doc)&4294967295);
HEAP[_math_methods+416]=((__str50)&4294967295);
HEAP[_math_methods+420]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_math_methods+428]=((_math_ldexp_doc)&4294967295);
HEAP[_math_methods+432]=((__str51)&4294967295);
HEAP[_math_methods+436]=(FUNCTION_TABLE_OFFSET + 110);
HEAP[_math_methods+444]=((_math_lgamma_doc)&4294967295);
HEAP[_math_methods+448]=((__str23)&4294967295);
HEAP[_math_methods+452]=(FUNCTION_TABLE_OFFSET + 112);
HEAP[_math_methods+460]=((_math_log_doc)&4294967295);
HEAP[_math_methods+464]=((__str52)&4294967295);
HEAP[_math_methods+468]=(FUNCTION_TABLE_OFFSET + 114);
HEAP[_math_methods+476]=((_math_log1p_doc)&4294967295);
HEAP[_math_methods+480]=((__str24)&4294967295);
HEAP[_math_methods+484]=(FUNCTION_TABLE_OFFSET + 116);
HEAP[_math_methods+492]=((_math_log10_doc)&4294967295);
HEAP[_math_methods+496]=((__str53)&4294967295);
HEAP[_math_methods+500]=(FUNCTION_TABLE_OFFSET + 118);
HEAP[_math_methods+508]=((_math_modf_doc)&4294967295);
HEAP[_math_methods+512]=((__str27)&4294967295);
HEAP[_math_methods+516]=(FUNCTION_TABLE_OFFSET + 120);
HEAP[_math_methods+524]=((_math_pow_doc)&4294967295);
HEAP[_math_methods+528]=((__str54)&4294967295);
HEAP[_math_methods+532]=(FUNCTION_TABLE_OFFSET + 122);
HEAP[_math_methods+540]=((_math_radians_doc)&4294967295);
HEAP[_math_methods+544]=((__str55)&4294967295);
HEAP[_math_methods+548]=(FUNCTION_TABLE_OFFSET + 124);
HEAP[_math_methods+556]=((_math_sin_doc)&4294967295);
HEAP[_math_methods+560]=((__str56)&4294967295);
HEAP[_math_methods+564]=(FUNCTION_TABLE_OFFSET + 126);
HEAP[_math_methods+572]=((_math_sinh_doc)&4294967295);
HEAP[_math_methods+576]=((__str57)&4294967295);
HEAP[_math_methods+580]=(FUNCTION_TABLE_OFFSET + 128);
HEAP[_math_methods+588]=((_math_sqrt_doc)&4294967295);
HEAP[_math_methods+592]=((__str58)&4294967295);
HEAP[_math_methods+596]=(FUNCTION_TABLE_OFFSET + 130);
HEAP[_math_methods+604]=((_math_tan_doc)&4294967295);
HEAP[_math_methods+608]=((__str59)&4294967295);
HEAP[_math_methods+612]=(FUNCTION_TABLE_OFFSET + 132);
HEAP[_math_methods+620]=((_math_tanh_doc)&4294967295);
HEAP[_math_methods+624]=((__str60)&4294967295);
HEAP[_math_methods+628]=(FUNCTION_TABLE_OFFSET + 134);
HEAP[_math_methods+636]=((_math_trunc_doc)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

